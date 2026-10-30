// GreenCube Review: One-Time-Purchase Offline AI for Windows
// Slug: greencube-review
// Companion to: gpt4all-review, jan-review, msty-review, hanoki-review (desktop chat apps)
// Sources: greencube.app (home, /buy, /what-you-get, /your-data, /download), the privacy policy at legal.greencube.app (effective 2026-10-13),
// the installer GreenCube-setup.exe and the updater feed models.greencube.app/updates/latest.json (version 0.1.47, 2026-10-17),
// all checked 2026-10-30 — no hands-on testing. The maker has not yet reviewed this page (no founder block).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/greencube-review-hero-en.webp',
    title: 'GreenCube Review: One-Time-Purchase Offline AI for Windows',
    seoTitle: 'GreenCube Review: One-Time-Purchase Offline AI for Windows',
    intro:
      'GreenCube is a Windows desktop app that runs Google\'s Gemma 4 models on your own PC for chat, coding, image generation and reading files, sold for a single payment of 9.99 euros instead of a subscription. It is a young product (version 0.1.47, updated on 17 October 2026) from a Spanish company, so this review sticks to what its website, installer feed and privacy policy say, as checked on 30 October 2026.',
    metaDescription:
      'GreenCube review: Windows desktop AI sold once for 9.99 euros, running Gemma 4 offline. Requirements, hardware tiers, data flow and open questions.',
    twitterDescription:
      'GreenCube review: a one-time-purchase Windows AI that runs Gemma 4 offline. Price, hardware tiers, data flow and what the sources leave unconfirmed.',
    audience:
      'Windows 10 and 11 users deciding whether a one-time-purchase offline AI app is worth trying, who need to know what it costs, what hardware it needs, what leaves the PC and what the sources do not confirm.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GreenCube review',
    targetKeywords: [
      'greencube review',
      'greencube ai',
      'offline ai windows one-time purchase',
      'local ai no subscription windows',
      'gemma 4 windows app',
      'private ai chat windows pc',
    ],
    current_hardware_mentioned: ['Windows PC', 'Gemma 4'],
    leadAnswerBlock:
      '**GreenCube (version 0.1.47, updated 17 October 2026) is a Windows 10 and 11 app that runs Gemma 4 on your own PC and, according to its maker, keeps chats, files and images on the machine.** It is closed source and Windows-only. PromptQuorum has not installed or tested it; every statement here comes from the maker\'s website, its installer feed and its privacy policy.',
    quickAnswerTop: {
      en: {
        question: 'Does GreenCube really work offline?',
        answer:
          'According to the maker, yes after one setup: you need internet once to sign in and download the model, then it runs without a connection. It goes online only for updates or when you switch the Online option on.',
        bullets: [
          'The account exists only to check that you paid, per the website and the privacy policy.',
          'The model is chosen by your hardware tier, from Seed (no graphics card) to Thrive.',
          'Image generation needs at least 12 GB of RAM.',
          'There is one version and one price, with a 15-day refund window.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is GreenCube?', anchor: 'what-is-greencube' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements and Hardware Tiers', anchor: 'requirements' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Data Flow and Content Policy', anchor: 'privacy' },
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
            text: 'GreenCube is a Windows desktop AI sold once for 9.99 euros that runs Gemma 4 on your own PC and works offline after the first download.',
          },
          {
            type: 'plain-terms',
            text: 'You buy it once, sign in, let it download a model of a few gigabytes, and from then on chat, code and read files on your PC without a subscription or usage limit.',
          },
        ],
        items: [
          'Maintenance: the latest build, 0.1.47, was published on 17 October 2026, so no stale-project warning applies.',
          'Cost: one payment with no renewal; the website offers a full refund within 15 days on request.',
          'Device: Windows 10 or 11 with 8 GB of RAM or more; there is no macOS or Linux version.',
          'Models: Gemma 4 E2B or E4B, picked by your hardware tier.',
          'Transparency: closed source, a 0.x version number and a company publisher (Edunexis SL, Spain).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the maker\'s website, installer feed and privacy policy, checked on 30 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-greencube',
        title: 'What Is GreenCube?',
        content: [
          '**GreenCube is a desktop AI assistant that runs on your own Windows PC, with no message limit, no credits and no monthly fee.** The website lists chat and writing, code and web-page generation, image generation, reading PDFs and photos, and study tools such as flashcards and quizzes, plus export to PowerPoint and Word. Diagrams and Automations are shown as coming soon.',
          'It is published by Edunexis SL of Cartagena, Spain, under the product name [GreenCube](https://greencube.app). The maker\'s own FAQ is candid about the trade-off: the biggest cloud AIs are smarter, and GreenCube offers no limits, offline use and ownership instead.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**GreenCube is a normal Windows installer download; the sources mention no terminal step, only a sign-in and a one-time model download.**',
        ],
        columns: ['Item', 'Details'],
        rows: [
          { 'Item': 'Platform', 'Details': 'Windows 10 and 11' },
          { 'Item': 'Download', 'Details': '[GreenCube-setup.exe](https://greencube.app/download)' },
          { 'Item': 'Price', 'Details': '€9.99 (US$9.99), paid once' },
          { 'Item': 'Website', 'Details': '[greencube.app](https://greencube.app)' },
          { 'Item': 'Privacy policy', 'Details': '[GreenCube privacy policy](https://legal.greencube.app/privacy)' },
          { 'Item': 'Source code', 'Details': 'None found for the app' },
        ],
        note: 'Version reviewed: 0.1.47, published on 17 October 2026 per the maker\'s [update feed](https://models.greencube.app/updates/latest.json). The purchase page\'s structured data says "1.0", which does not match the feed; this review follows the feed because it describes the build users receive. The only public repository of the maker\'s GitHub organization is the website, not the app.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements and Hardware Tiers',
        content: [
          '**GreenCube needs Windows 10 or 11 and about 8 GB of RAM; memory decides how much fits and a graphics card decides how fast it runs.**',
        ],
        columns: ['Tier', 'What the website says'],
        rows: [
          { 'Tier': 'Seed', 'What the website says': 'About 8 GB RAM, no graphics card' },
          { 'Tier': 'Sprout', 'What the website says': '16 GB RAM or more without a card, or 8 GB with a card' },
          { 'Tier': 'Bloom', 'What the website says': 'Card with 8 GB or more, or a 4 GB card with 16 GB RAM' },
          { 'Tier': 'Thrive', 'What the website says': 'Card with 8 GB or more and 24 GB RAM or more' },
        ],
        note: 'Without a graphics card it works but is slower. Image generation needs at least 12 GB of RAM. The installer is 14.1 MB; the model download adds a few gigabytes.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the maker\'s website; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Buy a licence',
            whyItMatters: 'Pay once on the [purchase page](https://greencube.app/buy); the account is used to check payment.',
          },
          {
            title: 'Install the app',
            whyItMatters: 'Download and run the Windows installer on a Windows 10 or 11 PC with 8 GB of RAM or more.',
          },
          {
            title: 'Sign in and download the model',
            whyItMatters: 'Sign in with Google or Microsoft; the app then downloads the model for your hardware tier, which takes a few gigabytes.',
          },
          {
            title: 'Work offline',
            whyItMatters: 'After the download, chat, code and file reading run without a connection.',
          },
          {
            title: 'Decide about Online',
            whyItMatters: 'Switch the Online option on only if you want web searches; it is off otherwise.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the maker\'s website.**',
        ],
        items: [
          '**Chat and files.** Chat plus reading of PDFs, photos and screenshots.',
          '**Code and web pages.** Builds apps, sites and games from a description.',
          '**Images.** Image generation on machines with at least 12 GB of RAM.',
          '**Study and export.** Flashcards, quizzes, tables, and PowerPoint and Word export.',
          '**Languages.** The website itself is offered in about 20 languages; which languages the model answers well in is not stated.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Content Policy',
        content: [
          '**Per the privacy policy, conversations, documents, images, memories and settings are created and stored on your computer, and the maker says it never receives them.** What the company does handle is the purchase (email, name, billing country, payment details via Stripe), the sign-in with Google or Microsoft, and download-server logs when models or updates are fetched. Purchase records are kept for six years under Spanish tax law.',
          'The app keeps diagnostic logs on your PC that are designed to leave out conversations, although file names can appear, and they reach the maker only if you send them. On content, the website says GreenCube adds no filter of its own and steers its models to answer candidly without retraining them, so they can still refuse; it will not help with harm to people, child exploitation, theft or account break-ins, and the candid-answer setting can be turned off.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s own statements; PromptQuorum has not audited the app\'s network traffic or confirmed that nothing else leaves the PC.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Windows users who dislike subscriptions** and want to pay once for a local assistant.',
          '**People who want to ask questions about their own files** without uploading them, per the maker.',
          '**Owners of ordinary PCs**, since the lowest tier needs 8 GB of RAM and no graphics card.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run the app, so answer quality, speed and image results are not assessed.',
          '**Runtime and models.** Only Gemma 4 E2B and E4B are named; no public source names the inference engine or lists other models.',
          '**Version and age.** The feed says 0.1.47 while the purchase page says 1.0, and no changelog or release history is published.',
          '**Independent checks.** The app has no public source code and no third-party review of its network traffic or its content settings.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[GPT4All](/power-local-llm/gpt4all-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Beginner-friendly open-source desktop chat with strong CPU-only support' },
          { 'App': '[Jan](/power-local-llm/jan-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / Apache 2.0 (variant)', 'Key difference': 'Privacy-focused open-source offline chat client with its own engine' },
          { 'App': '[Msty](/power-local-llm/msty-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Freemium / closed source', 'Key difference': 'Consumer-style desktop client with multi-provider support, local or cloud' },
          { 'App': '[Hanoki](/power-local-llm/hanoki-review)', 'Platforms': 'macOS', 'Price / license': 'Freemium / MIT', 'Key difference': 'Branching chat for Mac, local via Ollama or cloud APIs; no Windows version' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is there a refund?',
            a: 'The website says you have 15 days to change your mind and get a full refund by emailing support@greencube.app.',
          },
          {
            q: 'Why does it need an account?',
            a: 'Only to verify the payment, according to the website; the account is not used for chats, files or images.',
          },
          {
            q: 'Can I try it for free first?',
            a: 'The sources mention no free tier or trial; the refund window is the stated safety net.',
          },
          {
            q: 'Is there a pro version?',
            a: 'No. The website says there is one version at one price and that a faster computer only runs it faster.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'GreenCube is a Windows desktop AI that, by its maker\'s account, runs Gemma 4 on your own PC, works offline after the first download and costs a single payment. Against that, it is Windows-only, closed source, still on a 0.x version, and PromptQuorum could not verify its quality or network behaviour. It suits Windows users who want to avoid subscriptions and accept those limits; readers who want open-source code can compare [GPT4All](/power-local-llm/gpt4all-review) or [Jan](/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[GreenCube website](https://greencube.app) — product overview, pricing, hardware tiers and FAQ, checked 30 October 2026.',
          '[GreenCube purchase page](https://greencube.app/buy) — price, refund window and structured data.',
          '[GreenCube update feed](https://models.greencube.app/updates/latest.json) — version 0.1.47, published 17 October 2026.',
          '[GreenCube privacy policy](https://legal.greencube.app/privacy) — data handling and legal basis, effective 13 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[GPT4All Review](/power-local-llm/gpt4all-review) — the open-source desktop chat app.',
          '[Jan Review](/power-local-llm/jan-review) — an open-source desktop app with its own engine.',
          '[Msty Review](/power-local-llm/msty-review) — a desktop client for local and cloud models.',
          '[Local LLM Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison for chat apps.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'GreenCube Review: One-Time-Purchase Offline AI for Windows',
      description:
        'GreenCube review: a Windows desktop AI sold once for 9.99 euros that runs Gemma 4 offline. Requirements, hardware tiers, data flow and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/greencube-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Windows users evaluating a one-time-purchase offline AI app' },
      about: [
        { '@type': 'Thing', name: 'GreenCube' },
        { '@type': 'Thing', name: 'Offline AI' },
        { '@type': 'Thing', name: 'Gemma 4' },
        { '@type': 'Thing', name: 'Windows' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/greencube-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'GreenCube Review', item: 'https://www.promptquorum.com/power-local-llm/greencube-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/greencube-review-hero-de.webp',
    title: 'GreenCube-Rezension: Offline-KI für Windows im Einmalkauf',
    seoTitle: 'GreenCube-Rezension: Offline-KI für Windows im Einmalkauf',
    intro:
      'GreenCube ist eine Windows-Desktop-App, die Googles Gemma-4-Modelle auf Ihrem eigenen PC für Chat, Programmierung, Bildgenerierung und das Lesen von Dateien ausführt – verkauft für eine einmalige Zahlung von 9,99 Euro statt im Abo. Das Produkt ist jung (Version 0.1.47, aktualisiert am 17. Oktober 2026) und stammt von einem spanischen Unternehmen; diese Rezension beschränkt sich daher auf das, was Website, Installer-Feed und Datenschutzerklärung aussagen, geprüft am 30. Oktober 2026.',
    metaDescription:
      'GreenCube-Rezension: Windows-KI für einmalig 9,99 Euro, die Gemma 4 offline ausführt. Anforderungen, Hardwarestufen, Datenfluss und offene Fragen.',
    twitterDescription:
      'GreenCube-Rezension: eine Windows-KI im Einmalkauf, die Gemma 4 offline ausführt. Preis, Hardwarestufen, Datenfluss und was die Quellen offenlassen.',
    audience:
      'Windows-10- und -11-Nutzer, die entscheiden wollen, ob sich eine Offline-KI-App im Einmalkauf lohnt, und wissen müssen, was sie kostet, welche Hardware sie braucht, was den PC verlässt und was die Quellen nicht bestätigen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GreenCube Rezension',
    targetKeywords: [
      'greencube rezension',
      'greencube ki',
      'offline ki windows einmalkauf',
      'lokale ki ohne abo windows',
      'gemma 4 windows app',
      'private ki chat windows pc',
    ],
    current_hardware_mentioned: ['Windows PC', 'Gemma 4'],
    leadAnswerBlock:
      '**GreenCube (Version 0.1.47, aktualisiert am 17. Oktober 2026) ist eine App für Windows 10 und 11, die Gemma 4 auf Ihrem eigenen PC ausführt und laut Entwickler Chats, Dateien und Bilder auf dem Rechner behält.** Sie ist nicht quelloffen und nur für Windows erhältlich. PromptQuorum hat sie weder installiert noch getestet; jede Angabe hier stammt von der Website des Entwicklers, seinem Installer-Feed und seiner Datenschutzerklärung.',
    quickAnswerTop: {
      de: {
        question: 'Funktioniert GreenCube wirklich offline?',
        answer:
          'Laut Entwickler ja, nach einer einmaligen Einrichtung: Sie brauchen einmal Internet, um sich anzumelden und das Modell herunterzuladen, danach läuft die App ohne Verbindung. Online geht sie nur für Updates oder wenn Sie die Option „Online“ einschalten.',
        bullets: [
          'Das Konto dient laut Website und Datenschutzerklärung nur dazu, die Zahlung zu prüfen.',
          'Das Modell richtet sich nach Ihrer Hardwarestufe, von Seed (keine Grafikkarte) bis Thrive.',
          'Die Bildgenerierung braucht mindestens 12 GB RAM.',
          'Es gibt eine Version zu einem Preis, mit 15 Tagen Rückgaberecht.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist GreenCube?', anchor: 'what-is-greencube' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen und Hardwarestufen', anchor: 'requirements' },
      { label: 'So starten Sie', anchor: 'getting-started' },
      { label: 'Durch die Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenfluss und Inhaltsrichtlinie', anchor: 'privacy' },
      { label: 'Für wen es sich eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Alternativen und Mitbewerber', anchor: 'vs-alternatives' },
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
            text: 'GreenCube ist eine Windows-Desktop-KI für einmalig 9,99 Euro, die Gemma 4 auf Ihrem eigenen PC ausführt und nach dem ersten Download offline funktioniert.',
          },
          {
            type: 'plain-terms',
            text: 'Sie kaufen sie einmal, melden sich an, lassen ein Modell von einigen Gigabyte herunterladen und chatten, programmieren und lesen Dateien danach auf Ihrem PC – ohne Abo und ohne Nutzungsgrenze.',
          },
        ],
        items: [
          'Pflege: Der neueste Build, 0.1.47, wurde am 17. Oktober 2026 veröffentlicht; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Kosten: eine Zahlung ohne Verlängerung; laut Website gibt es auf Anfrage eine volle Erstattung innerhalb von 15 Tagen.',
          'Gerät: Windows 10 oder 11 mit mindestens 8 GB RAM; es gibt keine Version für macOS oder Linux.',
          'Modelle: Gemma 4 E2B oder E4B, gewählt nach Ihrer Hardwarestufe.',
          'Transparenz: nicht quelloffen, eine 0.x-Versionsnummer und ein Unternehmen als Herausgeber (Edunexis SL, Spanien).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension basiert auf der Website des Entwicklers, dem Installer-Feed und der Datenschutzerklärung, geprüft am 30. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-greencube',
        title: 'Was ist GreenCube?',
        content: [
          '**GreenCube ist ein Desktop-KI-Assistent, der auf Ihrem eigenen Windows-PC läuft – ohne Nachrichtenlimit, ohne Credits und ohne monatliche Gebühr.** Die Website nennt Chat und Schreiben, die Erzeugung von Code und Webseiten, Bildgenerierung, das Lesen von PDFs und Fotos sowie Lernwerkzeuge wie Karteikarten und Quizze, dazu den Export nach PowerPoint und Word. Diagramme und Automatisierungen werden als „demnächst“ angezeigt.',
          'Herausgeber ist Edunexis SL aus Cartagena, Spanien, unter dem Produktnamen [GreenCube](https://greencube.app). Die eigene FAQ des Entwicklers benennt den Kompromiss offen: Die größten Cloud-KIs sind klüger, und GreenCube bietet stattdessen keine Limits, Offline-Nutzung und Eigentum.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**GreenCube ist ein normaler Installer-Download für Windows; die Quellen erwähnen keinen Terminal-Schritt, nur eine Anmeldung und einen einmaligen Modell-Download.**',
        ],
        columns: ['Punkt', 'Details'],
        rows: [
          { 'Punkt': 'Plattform', 'Details': 'Windows 10 und 11' },
          { 'Punkt': 'Download', 'Details': '[GreenCube-setup.exe](https://greencube.app/download)' },
          { 'Punkt': 'Preis', 'Details': '9,99 € (9,99 US-$), einmalig bezahlt' },
          { 'Punkt': 'Website', 'Details': '[greencube.app](https://greencube.app)' },
          { 'Punkt': 'Datenschutzerklärung', 'Details': '[Datenschutzerklärung von GreenCube](https://legal.greencube.app/privacy)' },
          { 'Punkt': 'Quellcode', 'Details': 'Keiner für die App gefunden' },
        ],
        note: 'Geprüfte Version: 0.1.47, laut [Update-Feed](https://models.greencube.app/updates/latest.json) des Entwicklers am 17. Oktober 2026 veröffentlicht. Die strukturierten Daten der Kaufseite nennen „1.0“, was nicht zum Feed passt; diese Rezension folgt dem Feed, weil er den Build beschreibt, den Nutzer erhalten. Das einzige öffentliche Repository der GitHub-Organisation des Entwicklers ist die Website, nicht die App.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen und Hardwarestufen',
        content: [
          '**GreenCube braucht Windows 10 oder 11 und etwa 8 GB RAM; der Arbeitsspeicher entscheidet, was hineinpasst, und eine Grafikkarte, wie schnell es läuft.**',
        ],
        columns: ['Stufe', 'Laut Website'],
        rows: [
          { 'Stufe': 'Seed', 'Laut Website': 'Etwa 8 GB RAM, keine Grafikkarte' },
          { 'Stufe': 'Sprout', 'Laut Website': '16 GB RAM oder mehr ohne Karte, oder 8 GB mit Karte' },
          { 'Stufe': 'Bloom', 'Laut Website': 'Karte mit 8 GB oder mehr, oder 4-GB-Karte mit 16 GB RAM' },
          { 'Stufe': 'Thrive', 'Laut Website': 'Karte mit 8 GB oder mehr und 24 GB RAM oder mehr' },
        ],
        note: 'Ohne Grafikkarte funktioniert die App, ist aber langsamer. Die Bildgenerierung braucht mindestens 12 GB RAM. Der Installer ist 14,1 MB groß; der Modell-Download kommt mit einigen Gigabyte hinzu.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So starten Sie',
        content: [
          '**Die Schritte folgen der Website des Entwicklers; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Lizenz kaufen',
            whyItMatters: 'Zahlen Sie einmalig auf der [Kaufseite](https://greencube.app/buy); das Konto dient dazu, die Zahlung zu prüfen.',
          },
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie den Windows-Installer herunter und führen Sie ihn auf einem PC mit Windows 10 oder 11 und mindestens 8 GB RAM aus.',
          },
          {
            title: 'Anmelden und Modell herunterladen',
            whyItMatters: 'Melden Sie sich mit Google oder Microsoft an; die App lädt dann das Modell für Ihre Hardwarestufe herunter, das einige Gigabyte groß ist.',
          },
          {
            title: 'Offline arbeiten',
            whyItMatters: 'Nach dem Download laufen Chat, Programmierung und Dateilesen ohne Verbindung.',
          },
          {
            title: 'Über „Online“ entscheiden',
            whyItMatters: 'Schalten Sie die Option „Online“ nur ein, wenn Sie Websuchen wollen; sonst bleibt sie aus.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Durch die Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von der Website des Entwicklers.**',
        ],
        items: [
          '**Chat und Dateien.** Chat sowie das Lesen von PDFs, Fotos und Screenshots.',
          '**Code und Webseiten.** Erstellt Apps, Websites und Spiele aus einer Beschreibung.',
          '**Bilder.** Bildgenerierung auf Rechnern mit mindestens 12 GB RAM.',
          '**Lernen und Export.** Karteikarten, Quizze, Tabellen sowie Export nach PowerPoint und Word.',
          '**Sprachen.** Die Website selbst gibt es in etwa 20 Sprachen; in welchen Sprachen das Modell gut antwortet, wird nicht angegeben.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Inhaltsrichtlinie',
        content: [
          '**Laut Datenschutzerklärung werden Gespräche, Dokumente, Bilder, Erinnerungen und Einstellungen auf Ihrem Computer erstellt und gespeichert, und der Entwickler sagt, er erhalte sie nie.** Das Unternehmen verarbeitet den Kauf (E-Mail, Name, Rechnungsland, Zahlungsdaten über Stripe), die Anmeldung mit Google oder Microsoft sowie Protokolle der Download-Server, wenn Modelle oder Updates abgerufen werden. Kaufbelege werden nach spanischem Steuerrecht sechs Jahre aufbewahrt.',
          'Die App führt auf Ihrem PC Diagnoseprotokolle, die Gespräche auslassen sollen, wobei Dateinamen auftauchen können; sie gelangen nur dann zum Entwickler, wenn Sie sie senden. Zu Inhalten sagt die Website, GreenCube füge keinen eigenen Filter hinzu und lenke seine Modelle ohne erneutes Training zu offenen Antworten, sodass sie dennoch ablehnen können; es helfe nicht bei Schaden an Menschen, Kindesausbeutung, Diebstahl oder dem Einbruch in Konten, und die Einstellung für offene Antworten lasse sich abschalten.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Aussagen des Entwicklers; PromptQuorum hat den Netzwerkverkehr der App nicht geprüft und nicht bestätigt, dass sonst nichts den PC verlässt.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen es sich eignet',
        items: [
          '**Windows-Nutzer, die Abos nicht mögen** und einmal für einen lokalen Assistenten zahlen möchten.',
          '**Menschen, die Fragen zu eigenen Dateien stellen wollen**, ohne sie hochzuladen – so der Entwickler.',
          '**Besitzer gewöhnlicher PCs**, da die niedrigste Stufe 8 GB RAM und keine Grafikkarte verlangt.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praxisqualität.** PromptQuorum hat die App nicht ausgeführt; Antwortqualität, Geschwindigkeit und Bildergebnisse sind daher nicht bewertet.',
          '**Laufzeit und Modelle.** Genannt werden nur Gemma 4 E2B und E4B; keine öffentliche Quelle nennt die Inferenz-Engine oder weitere Modelle.',
          '**Version und Alter.** Der Feed nennt 0.1.47, die Kaufseite 1.0, und es gibt weder ein Änderungsprotokoll noch einen Veröffentlichungsverlauf.',
          '**Unabhängige Prüfungen.** Die App hat keinen öffentlichen Quellcode und keine unabhängige Prüfung ihres Netzwerkverkehrs oder ihrer Inhaltseinstellungen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Alternativen und Mitbewerber',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[GPT4All](/de/power-local-llm/gpt4all-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Einsteigerfreundlicher quelloffener Desktop-Chat mit guter reiner CPU-Unterstützung' },
          { 'App': '[Jan](/de/power-local-llm/jan-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / Apache 2.0 (Variante)', 'Wichtigster Unterschied': 'Datenschutzorientierter quelloffener Offline-Chat-Client mit eigener Engine' },
          { 'App': '[Msty](/de/power-local-llm/msty-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Freemium / Closed Source', 'Wichtigster Unterschied': 'Desktop-Client im Verbraucherstil mit Multi-Anbieter-Unterstützung, lokal oder in der Cloud' },
          { 'App': '[Hanoki](/de/power-local-llm/hanoki-review)', 'Plattformen': 'macOS', 'Preis / Lizenz': 'Freemium / MIT', 'Wichtigster Unterschied': 'Verzweigender Chat für den Mac, lokal über Ollama oder per Cloud-API; keine Windows-Version' },
        ],
        note: 'Details der Mitbewerber ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen auf der jeweiligen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Gibt es eine Rückerstattung?',
            a: 'Laut Website haben Sie 15 Tage Zeit, es sich anders zu überlegen, und erhalten per E-Mail an support@greencube.app eine volle Erstattung.',
          },
          {
            q: 'Warum braucht sie ein Konto?',
            a: 'Laut Website nur, um die Zahlung zu prüfen; das Konto wird nicht für Chats, Dateien oder Bilder verwendet.',
          },
          {
            q: 'Kann ich sie vorher kostenlos testen?',
            a: 'Die Quellen erwähnen weder eine kostenlose Stufe noch eine Testphase; das Rückgaberecht ist das genannte Sicherheitsnetz.',
          },
          {
            q: 'Gibt es eine Pro-Version?',
            a: 'Nein. Laut Website gibt es eine Version zu einem Preis, und ein schnellerer Computer führt sie lediglich schneller aus.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'GreenCube ist eine Windows-Desktop-KI, die nach Darstellung ihres Entwicklers Gemma 4 auf Ihrem eigenen PC ausführt, nach dem ersten Download offline funktioniert und eine einzige Zahlung kostet. Dagegen spricht: Sie ist nur für Windows erhältlich, nicht quelloffen, noch auf einer 0.x-Version, und PromptQuorum konnte weder Qualität noch Netzwerkverhalten überprüfen. Sie passt zu Windows-Nutzern, die Abos vermeiden wollen und diese Grenzen akzeptieren; wer offenen Quellcode möchte, kann [GPT4All](/de/power-local-llm/gpt4all-review) oder [Jan](/de/power-local-llm/jan-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[GreenCube-Website](https://greencube.app) — Produktüberblick, Preise, Hardwarestufen und FAQ, geprüft am 30. Oktober 2026.',
          '[GreenCube-Kaufseite](https://greencube.app/buy) — Preis, Rückgabefrist und strukturierte Daten.',
          '[GreenCube-Update-Feed](https://models.greencube.app/updates/latest.json) — Version 0.1.47, veröffentlicht am 17. Oktober 2026.',
          '[Datenschutzerklärung von GreenCube](https://legal.greencube.app/privacy) — Datenverarbeitung und Rechtsgrundlage, gültig ab 13. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[GPT4All-Rezension](/de/power-local-llm/gpt4all-review) — die quelloffene Desktop-Chat-App.',
          '[Jan-Rezension](/de/power-local-llm/jan-review) — eine quelloffene Desktop-App mit eigener Engine.',
          '[Msty-Rezension](/de/power-local-llm/msty-review) — ein Desktop-Client für lokale und Cloud-Modelle.',
          '[Lokale LLM-Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich für Chat-Apps.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/greencube-review-hero-es.webp',
    title: 'Reseña de GreenCube: IA sin conexión de pago único para Windows',
    seoTitle: 'Reseña de GreenCube: IA sin conexión de pago único',
    intro:
      'GreenCube es una app de escritorio para Windows que ejecuta los modelos Gemma 4 de Google en tu propio PC para chatear, programar, generar imágenes y leer archivos, y se vende por un único pago de 9.99 euros en lugar de una suscripción. Es un producto joven (versión 0.1.47, actualizada el 17 de octubre de 2026) de una empresa española, así que esta reseña se limita a lo que dicen su web, su canal de actualizaciones del instalador y su política de privacidad, consultados el 30 de octubre de 2026.',
    metaDescription:
      'Reseña de GreenCube: IA de escritorio para Windows de pago único (9.99 euros) que ejecuta Gemma 4 sin conexión. Requisitos, niveles, datos y dudas.',
    twitterDescription:
      'Reseña de GreenCube: una IA para Windows de pago único que ejecuta Gemma 4 sin conexión. Precio, niveles de hardware, flujo de datos y lo que las fuentes no confirman.',
    audience:
      'Usuarios de Windows 10 y 11 que quieren decidir si merece la pena probar una app de IA sin conexión de pago único y necesitan saber cuánto cuesta, qué hardware exige, qué sale del PC y qué no confirman las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de GreenCube',
    targetKeywords: [
      'reseña greencube',
      'greencube ia',
      'ia sin conexión windows pago único',
      'ia local sin suscripción windows',
      'app gemma 4 windows',
      'chat de ia privado pc windows',
    ],
    current_hardware_mentioned: ['Windows PC', 'Gemma 4'],
    leadAnswerBlock:
      '**GreenCube (versión 0.1.47, actualizada el 17 de octubre de 2026) es una app para Windows 10 y 11 que ejecuta Gemma 4 en tu propio PC y, según su desarrollador, mantiene los chats, los archivos y las imágenes en el equipo.** Es de código cerrado y solo para Windows. PromptQuorum no la ha instalado ni probado; todo lo que se afirma aquí procede de la web del desarrollador, su canal de actualizaciones del instalador y su política de privacidad.',
    quickAnswerTop: {
      es: {
        question: '¿GreenCube funciona de verdad sin conexión?',
        answer:
          'Según el desarrollador, sí tras una configuración inicial: necesitas internet una vez para iniciar sesión y descargar el modelo, y después funciona sin conexión. Solo se conecta para buscar actualizaciones o cuando activas la opción Online.',
        bullets: [
          'La cuenta existe solo para comprobar que has pagado, según la web y la política de privacidad.',
          'El modelo se elige según el nivel de tu hardware, desde Seed (sin tarjeta gráfica) hasta Thrive.',
          'La generación de imágenes requiere al menos 12 GB de RAM.',
          'Hay una sola versión y un solo precio, con 15 días para pedir el reembolso.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es GreenCube?', anchor: 'what-is-greencube' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Requisitos y niveles de hardware', anchor: 'requirements' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Flujo de datos y política de contenido', anchor: 'privacy' },
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
            text: 'GreenCube es una IA de escritorio para Windows que se vende una sola vez por 9.99 euros, ejecuta Gemma 4 en tu propio PC y funciona sin conexión tras la primera descarga.',
          },
          {
            type: 'plain-terms',
            text: 'La compras una vez, inicias sesión, dejas que descargue un modelo de unos pocos gigabytes y, a partir de ahí, chateas, programas y lees archivos en tu PC sin suscripción ni límite de uso.',
          },
        ],
        items: [
          'Mantenimiento: la última compilación, la 0.1.47, se publicó el 17 de octubre de 2026, así que no se aplica ningún aviso de proyecto obsoleto.',
          'Coste: un solo pago sin renovación; según la web, hay reembolso completo en 15 días si lo pides.',
          'Dispositivo: Windows 10 u 11 con 8 GB de RAM o más; no hay versión para macOS ni Linux.',
          'Modelos: Gemma 4 E2B o E4B, según el nivel de tu hardware.',
          'Transparencia: código cerrado, número de versión 0.x y una empresa como editora (Edunexis SL, España).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la web del desarrollador, su canal de actualizaciones del instalador y su política de privacidad, consultados el 30 de octubre de 2026. PromptQuorum no ha instalado, probado ni medido la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-greencube',
        title: '¿Qué es GreenCube?',
        content: [
          '**GreenCube es un asistente de IA de escritorio que se ejecuta en tu propio PC con Windows, sin límite de mensajes, sin créditos y sin cuota mensual.** La web enumera chat y redacción, generación de código y de páginas web, generación de imágenes, lectura de PDF y fotos, y herramientas de estudio como tarjetas de memoria y cuestionarios, además de exportación a PowerPoint y Word. Diagramas y Automatizaciones aparecen como próximamente.',
          'La publica Edunexis SL, de Cartagena (España), con el nombre de producto [GreenCube](https://greencube.app). Las propias preguntas frecuentes del desarrollador son sinceras sobre el equilibrio: las IA en la nube más grandes son más inteligentes, y GreenCube ofrece a cambio ausencia de límites, uso sin conexión y propiedad.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**GreenCube es una descarga normal de instalador para Windows; las fuentes no mencionan ningún paso de terminal, solo un inicio de sesión y una descarga única del modelo.**',
        ],
        columns: ['Elemento', 'Detalles'],
        rows: [
          { 'Elemento': 'Plataforma', 'Detalles': 'Windows 10 y 11' },
          { 'Elemento': 'Descarga', 'Detalles': '[GreenCube-setup.exe](https://greencube.app/download)' },
          { 'Elemento': 'Precio', 'Detalles': '€9.99 (US$9.99), pago único' },
          { 'Elemento': 'Sitio web', 'Detalles': '[greencube.app](https://greencube.app)' },
          { 'Elemento': 'Política de privacidad', 'Detalles': '[Política de privacidad de GreenCube](https://legal.greencube.app/privacy)' },
          { 'Elemento': 'Código fuente', 'Detalles': 'No se encontró para la app' },
        ],
        note: 'Versión revisada: 0.1.47, publicada el 17 de octubre de 2026 según el [canal de actualizaciones](https://models.greencube.app/updates/latest.json) del desarrollador. Los datos estructurados de la página de compra indican «1.0», lo que no coincide con el canal; esta reseña sigue el canal porque describe la compilación que reciben los usuarios. El único repositorio público de la organización de GitHub del desarrollador es el sitio web, no la app.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos y niveles de hardware',
        content: [
          '**GreenCube necesita Windows 10 u 11 y unos 8 GB de RAM; la memoria decide cuánto cabe y una tarjeta gráfica decide la velocidad.**',
        ],
        columns: ['Nivel', 'Qué dice la web'],
        rows: [
          { 'Nivel': 'Seed', 'Qué dice la web': 'Unos 8 GB de RAM, sin tarjeta gráfica' },
          { 'Nivel': 'Sprout', 'Qué dice la web': '16 GB de RAM o más sin tarjeta, u 8 GB con tarjeta' },
          { 'Nivel': 'Bloom', 'Qué dice la web': 'Tarjeta de 8 GB o más, o una de 4 GB con 16 GB de RAM' },
          { 'Nivel': 'Thrive', 'Qué dice la web': 'Tarjeta de 8 GB o más y 24 GB de RAM o más' },
        ],
        note: 'Sin tarjeta gráfica funciona, pero más despacio. La generación de imágenes requiere al menos 12 GB de RAM. El instalador pesa 14.1 MB; la descarga del modelo añade unos pocos gigabytes.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la web del desarrollador; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Compra una licencia',
            whyItMatters: 'Paga una sola vez en la [página de compra](https://greencube.app/buy); la cuenta sirve para comprobar el pago.',
          },
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga y ejecuta el instalador de Windows en un PC con Windows 10 u 11 y 8 GB de RAM o más.',
          },
          {
            title: 'Inicia sesión y descarga el modelo',
            whyItMatters: 'Inicia sesión con Google o Microsoft; después la app descarga el modelo para el nivel de tu hardware, lo que ocupa unos pocos gigabytes.',
          },
          {
            title: 'Trabaja sin conexión',
            whyItMatters: 'Tras la descarga, el chat, la programación y la lectura de archivos funcionan sin conexión.',
          },
          {
            title: 'Decide sobre Online',
            whyItMatters: 'Activa la opción Online solo si quieres búsquedas en la web; de lo contrario está desactivada.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que sigue procede de la web del desarrollador.**',
        ],
        items: [
          '**Chat y archivos.** Chat y lectura de PDF, fotos y capturas de pantalla.',
          '**Código y páginas web.** Crea apps, sitios y juegos a partir de una descripción.',
          '**Imágenes.** Generación de imágenes en equipos con al menos 12 GB de RAM.',
          '**Estudio y exportación.** Tarjetas de memoria, cuestionarios, tablas y exportación a PowerPoint y Word.',
          '**Idiomas.** La propia web se ofrece en unos 20 idiomas; no se indica en qué idiomas responde bien el modelo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y política de contenido',
        content: [
          '**Según la política de privacidad, las conversaciones, los documentos, las imágenes, los recuerdos y los ajustes se crean y se guardan en tu ordenador, y el desarrollador afirma que nunca los recibe.** Lo que la empresa sí gestiona es la compra (correo electrónico, nombre, país de facturación y datos de pago a través de Stripe), el inicio de sesión con Google o Microsoft y los registros del servidor de descargas cuando se obtienen modelos o actualizaciones. Los registros de compra se conservan seis años por la ley tributaria española.',
          'La app guarda en tu PC registros de diagnóstico diseñados para excluir las conversaciones, aunque pueden aparecer nombres de archivo, y solo llegan al desarrollador si los envías. En cuanto al contenido, la web dice que GreenCube no añade ningún filtro propio y orienta sus modelos para que respondan con franqueza sin reentrenarlos, por lo que aún pueden negarse; no ayudará con daños a personas, explotación infantil, robos ni intrusiones en cuentas, y el ajuste de respuestas francas se puede desactivar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas son declaraciones del propio desarrollador; PromptQuorum no ha auditado el tráfico de red de la app ni ha confirmado que no salga nada más del PC.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Windows a quienes no gustan las suscripciones** y quieren pagar una sola vez por un asistente local.',
          '**Personas que quieren hacer preguntas sobre sus propios archivos** sin subirlos, según el desarrollador.',
          '**Propietarios de PC corrientes**, ya que el nivel más bajo necesita 8 GB de RAM y ninguna tarjeta gráfica.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en la práctica.** PromptQuorum no ejecutó la app, así que no se evalúan la calidad de las respuestas, la velocidad ni los resultados de las imágenes.',
          '**Motor y modelos.** Solo se nombran Gemma 4 E2B y E4B; ninguna fuente pública nombra el motor de inferencia ni enumera otros modelos.',
          '**Versión y antigüedad.** El canal indica 0.1.47 mientras que la página de compra indica 1.0, y no se publica ningún registro de cambios ni historial de versiones.',
          '**Verificaciones independientes.** La app no tiene código fuente público ni ninguna reseña de terceros sobre su tráfico de red o sus ajustes de contenido.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[GPT4All](/es/power-local-llm/gpt4all-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Chat de escritorio de código abierto apto para principiantes, con buen soporte solo para CPU' },
          { 'App': '[Jan](/es/power-local-llm/jan-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / Apache 2.0 (variante)', 'Diferencia clave': 'Cliente de chat sin conexión de código abierto centrado en la privacidad, con motor propio' },
          { 'App': '[Msty](/es/power-local-llm/msty-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Freemium / código cerrado', 'Diferencia clave': 'Cliente de escritorio de estilo comercial con varios proveedores, locales o en la nube' },
          { 'App': '[Hanoki](/es/power-local-llm/hanoki-review)', 'Plataformas': 'macOS', 'Precio / licencia': 'Freemium / MIT', 'Diferencia clave': 'Chat con ramificaciones para Mac, local mediante Ollama o con API en la nube; sin versión para Windows' },
        ],
        note: 'Los datos de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Hay reembolso?',
            a: 'La web dice que tienes 15 días para cambiar de opinión y obtener un reembolso completo escribiendo a support@greencube.app.',
          },
          {
            q: '¿Por qué necesita una cuenta?',
            a: 'Solo para verificar el pago, según la web; la cuenta no se usa para chats, archivos ni imágenes.',
          },
          {
            q: '¿Puedo probarla gratis antes?',
            a: 'Las fuentes no mencionan ningún nivel gratuito ni prueba; la garantía indicada es el plazo de reembolso.',
          },
          {
            q: '¿Hay una versión profesional?',
            a: 'No. La web dice que hay una sola versión a un solo precio y que un ordenador más rápido solo la ejecuta más deprisa.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'GreenCube es una IA de escritorio para Windows que, según su desarrollador, ejecuta Gemma 4 en tu propio PC, funciona sin conexión tras la primera descarga y cuesta un único pago. En contra: es solo para Windows, de código cerrado, sigue en una versión 0.x, y PromptQuorum no pudo verificar su calidad ni su comportamiento de red. Encaja con usuarios de Windows que quieren evitar suscripciones y aceptan esos límites; quien quiera código abierto puede comparar [GPT4All](/es/power-local-llm/gpt4all-review) o [Jan](/es/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de GreenCube](https://greencube.app) — resumen del producto, precio, niveles de hardware y preguntas frecuentes, consultado el 30 de octubre de 2026.',
          '[Página de compra de GreenCube](https://greencube.app/buy) — precio, plazo de reembolso y datos estructurados.',
          '[Canal de actualizaciones de GreenCube](https://models.greencube.app/updates/latest.json) — versión 0.1.47, publicada el 17 de octubre de 2026.',
          '[Política de privacidad de GreenCube](https://legal.greencube.app/privacy) — tratamiento de datos y base jurídica, vigente desde el 13 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de GPT4All](/es/power-local-llm/gpt4all-review) — la app de chat de escritorio de código abierto.',
          '[Reseña de Jan](/es/power-local-llm/jan-review) — una app de escritorio de código abierto con motor propio.',
          '[Reseña de Msty](/es/power-local-llm/msty-review) — un cliente de escritorio para modelos locales y en la nube.',
          '[Asistentes de chat con LLM locales: comparativa](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de la categoría de apps de chat.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/greencube-review-hero-fr.webp',
    title: 'Test de GreenCube : IA hors ligne en achat unique sous Windows',
    seoTitle: 'Test de GreenCube : IA hors ligne en achat unique, Windows',
    intro:
      'GreenCube est une application de bureau Windows qui exécute les modèles Gemma 4 de Google sur votre propre PC pour discuter, programmer, générer des images et lire des fichiers, vendue pour un paiement unique de 9,99 euros au lieu d\'un abonnement. C\'est un produit récent (version 0.1.47, mise à jour le 17 octobre 2026) d\'une société espagnole : ce test se limite donc à ce que disent son site, son flux d\'installation et sa politique de confidentialité, consultés le 30 octobre 2026.',
    metaDescription:
      'Test de GreenCube : IA de bureau Windows vendue 9,99 euros en une fois, avec Gemma 4 hors ligne. Configuration, niveaux matériels, données et limites.',
    twitterDescription:
      'Test de GreenCube : une IA Windows en achat unique qui exécute Gemma 4 hors ligne. Prix, niveaux matériels, flux de données et ce que les sources ne confirment pas.',
    audience:
      'Utilisateurs de Windows 10 et 11 qui hésitent à essayer une application d\'IA hors ligne en achat unique et doivent savoir ce qu\'elle coûte, quel matériel elle exige, ce qui quitte le PC et ce que les sources ne confirment pas.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test GreenCube',
    targetKeywords: [
      'test greencube',
      'greencube ia',
      'ia hors ligne windows achat unique',
      'ia locale sans abonnement windows',
      'application gemma 4 windows',
      'chat ia privé pc windows',
    ],
    current_hardware_mentioned: ['Windows PC', 'Gemma 4'],
    leadAnswerBlock:
      '**GreenCube (version 0.1.47, mise à jour le 17 octobre 2026) est une application pour Windows 10 et 11 qui exécute Gemma 4 sur votre propre PC et, selon son éditeur, garde conversations, fichiers et images sur la machine.** Elle est à code fermé et réservée à Windows. PromptQuorum ne l\'a ni installée ni testée ; tout ce qui suit provient du site de l\'éditeur, de son flux d\'installation et de sa politique de confidentialité.',
    quickAnswerTop: {
      fr: {
        question: 'GreenCube fonctionne-t-elle vraiment hors ligne ?',
        answer:
          'Selon l\'éditeur, oui après une configuration unique : une connexion Internet est nécessaire une fois pour se connecter et télécharger le modèle, puis l\'application fonctionne sans réseau. Elle ne se connecte que pour les mises à jour ou si vous activez l\'option En ligne.',
        bullets: [
          'D\'après le site et la politique de confidentialité, le compte sert uniquement à vérifier que vous avez payé.',
          'Le modèle dépend de votre niveau matériel, de Seed (sans carte graphique) à Thrive.',
          'La génération d\'images exige au moins 12 Go de RAM.',
          'Il n\'existe qu\'une version et qu\'un prix, avec 15 jours pour demander un remboursement.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que GreenCube ?', anchor: 'what-is-greencube' },
      { label: 'Où l\'obtenir', anchor: 'get-it' },
      { label: 'Configuration requise et niveaux matériels', anchor: 'requirements' },
      { label: 'Pour démarrer', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données et politique de contenu', anchor: 'privacy' },
      { label: 'À qui elle s\'adresse', anchor: 'who-should-use' },
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
            text: 'GreenCube est une IA de bureau Windows vendue 9,99 euros en une fois, qui exécute Gemma 4 sur votre propre PC et fonctionne hors ligne après le premier téléchargement.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'achetez une fois, vous vous connectez, vous laissez télécharger un modèle de quelques gigaoctets, puis vous discutez, programmez et lisez des fichiers sur votre PC sans abonnement ni limite d\'usage.',
          },
        ],
        items: [
          'Maintenance : la dernière version, 0.1.47, a été publiée le 17 octobre 2026 ; aucun avertissement de projet abandonné ne s\'applique donc.',
          'Coût : un seul paiement sans renouvellement ; selon le site, un remboursement intégral est possible sur demande dans les 15 jours.',
          'Appareil : Windows 10 ou 11 avec 8 Go de RAM ou plus ; il n\'existe pas de version macOS ni Linux.',
          'Modèles : Gemma 4 E2B ou E4B, choisis selon votre niveau matériel.',
          'Transparence : code fermé, numéro de version 0.x et une société comme éditeur (Edunexis SL, Espagne).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur le site de l\'éditeur, son flux d\'installation et sa politique de confidentialité, consultés le 30 octobre 2026. PromptQuorum n\'a ni installé, ni testé, ni mesuré l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-greencube',
        title: 'Qu\'est-ce que GreenCube ?',
        content: [
          '**GreenCube est un assistant IA de bureau qui s\'exécute sur votre propre PC Windows, sans limite de messages, sans crédits et sans abonnement mensuel.** Le site liste le chat et la rédaction, la génération de code et de pages web, la génération d\'images, la lecture de PDF et de photos, ainsi que des outils d\'étude comme les fiches de révision et les quiz, avec export vers PowerPoint et Word. Les fonctions Diagrammes et Automatisations sont annoncées comme « bientôt disponibles ».',
          'Elle est publiée par Edunexis SL, basée à Carthagène (Espagne), sous le nom de produit [GreenCube](https://greencube.app). La FAQ de l\'éditeur est franche sur le compromis : les plus grandes IA du cloud sont plus intelligentes, et GreenCube propose en échange l\'absence de limites, l\'usage hors ligne et la propriété.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**GreenCube est un installateur Windows classique à télécharger ; les sources ne mentionnent aucune étape dans un terminal, seulement une connexion et un téléchargement unique du modèle.**',
        ],
        columns: ['Élément', 'Détails'],
        rows: [
          { 'Élément': 'Plateforme', 'Détails': 'Windows 10 et 11' },
          { 'Élément': 'Téléchargement', 'Détails': '[GreenCube-setup.exe](https://greencube.app/download)' },
          { 'Élément': 'Prix', 'Détails': '9,99 € (9,99 $US), payé une seule fois' },
          { 'Élément': 'Site web', 'Détails': '[greencube.app](https://greencube.app)' },
          { 'Élément': 'Politique de confidentialité', 'Détails': '[Politique de confidentialité de GreenCube](https://legal.greencube.app/privacy)' },
          { 'Élément': 'Code source', 'Détails': 'Aucun trouvé pour l\'application' },
        ],
        note: 'Version testée : 0.1.47, publiée le 17 octobre 2026 d\'après le [flux de mises à jour](https://models.greencube.app/updates/latest.json) de l\'éditeur. Les données structurées de la page d\'achat indiquent « 1.0 », ce qui ne correspond pas au flux ; ce test suit le flux, car il décrit la version que reçoivent les utilisateurs. Le seul dépôt public de l\'organisation GitHub de l\'éditeur est le site web, pas l\'application.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise et niveaux matériels',
        content: [
          '**GreenCube exige Windows 10 ou 11 et environ 8 Go de RAM ; la mémoire décide de ce qui tient, et une carte graphique de la vitesse d\'exécution.**',
        ],
        columns: ['Niveau', 'Ce que dit le site'],
        rows: [
          { 'Niveau': 'Seed', 'Ce que dit le site': 'Environ 8 Go de RAM, sans carte graphique' },
          { 'Niveau': 'Sprout', 'Ce que dit le site': '16 Go de RAM ou plus sans carte, ou 8 Go avec une carte' },
          { 'Niveau': 'Bloom', 'Ce que dit le site': 'Carte de 8 Go ou plus, ou carte de 4 Go avec 16 Go de RAM' },
          { 'Niveau': 'Thrive', 'Ce que dit le site': 'Carte de 8 Go ou plus et 24 Go de RAM ou plus' },
        ],
        note: 'Sans carte graphique, l\'application fonctionne mais plus lentement. La génération d\'images exige au moins 12 Go de RAM. L\'installateur pèse 14,1 Mo ; le téléchargement du modèle ajoute quelques gigaoctets.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour démarrer',
        content: [
          '**Les étapes suivent le site de l\'éditeur ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Acheter une licence',
            whyItMatters: 'Payez une seule fois sur la [page d\'achat](https://greencube.app/buy) ; le compte sert à vérifier le paiement.',
          },
          {
            title: 'Installer l\'application',
            whyItMatters: 'Téléchargez et lancez l\'installateur Windows sur un PC sous Windows 10 ou 11 disposant de 8 Go de RAM ou plus.',
          },
          {
            title: 'Se connecter et télécharger le modèle',
            whyItMatters: 'Connectez-vous avec Google ou Microsoft ; l\'application télécharge ensuite le modèle adapté à votre niveau matériel, soit quelques gigaoctets.',
          },
          {
            title: 'Travailler hors ligne',
            whyItMatters: 'Une fois le téléchargement terminé, le chat, le code et la lecture de fichiers fonctionnent sans connexion.',
          },
          {
            title: 'Décider pour l\'option En ligne',
            whyItMatters: 'N\'activez l\'option En ligne que si vous voulez des recherches sur le web ; elle est désactivée par défaut.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient du site de l\'éditeur.**',
        ],
        items: [
          '**Chat et fichiers.** Chat, plus lecture de PDF, de photos et de captures d\'écran.',
          '**Code et pages web.** Crée des applications, des sites et des jeux à partir d\'une description.',
          '**Images.** Génération d\'images sur les machines disposant d\'au moins 12 Go de RAM.',
          '**Étude et export.** Fiches de révision, quiz, tableaux, et export vers PowerPoint et Word.',
          '**Langues.** Le site lui-même est proposé dans une vingtaine de langues ; les langues dans lesquelles le modèle répond bien ne sont pas précisées.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et politique de contenu',
        content: [
          '**Selon la politique de confidentialité, les conversations, documents, images, souvenirs et réglages sont créés et stockés sur votre ordinateur, et l\'éditeur affirme ne jamais les recevoir.** La société traite en revanche l\'achat (e-mail, nom, pays de facturation, données de paiement via Stripe), la connexion avec Google ou Microsoft, et les journaux des serveurs de téléchargement lorsque des modèles ou des mises à jour sont récupérés. Les justificatifs d\'achat sont conservés six ans en vertu du droit fiscal espagnol.',
          'L\'application conserve sur votre PC des journaux de diagnostic conçus pour exclure les conversations, même si des noms de fichiers peuvent y figurer, et ils ne parviennent à l\'éditeur que si vous les envoyez. Côté contenu, le site indique que GreenCube n\'ajoute aucun filtre propre et oriente ses modèles vers des réponses franches sans les réentraîner, de sorte qu\'ils peuvent encore refuser une demande ; elle n\'aidera pas à nuire à autrui, à exploiter des enfants, à voler ou à pirater un compte, et le réglage des réponses franches peut être désactivé.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l\'éditeur ; PromptQuorum n\'a pas audité le trafic réseau de l\'application ni confirmé que rien d\'autre ne quitte le PC.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s\'adresse',
        items: [
          '**Les utilisateurs de Windows qui n\'aiment pas les abonnements** et veulent payer une seule fois pour un assistant local.',
          '**Les personnes qui veulent interroger leurs propres fichiers** sans les téléverser, selon l\'éditeur.',
          '**Les possesseurs de PC ordinaires**, puisque le niveau le plus bas exige 8 Go de RAM et aucune carte graphique.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Qualité à l\'usage.** PromptQuorum n\'a pas exécuté l\'application ; qualité des réponses, vitesse et résultats d\'images ne sont donc pas évalués.',
          '**Moteur et modèles.** Seuls Gemma 4 E2B et E4B sont nommés ; aucune source publique ne nomme le moteur d\'inférence ni ne liste d\'autres modèles.',
          '**Version et ancienneté.** Le flux indique 0.1.47 alors que la page d\'achat indique 1.0, et aucun journal des modifications ni historique de versions n\'est publié.',
          '**Vérifications indépendantes.** L\'application n\'a pas de code source public ni d\'examen tiers de son trafic réseau ou de ses réglages de contenu.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['App', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'App': '[GPT4All](/fr/power-local-llm/gpt4all-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Chat de bureau open source pour débutants, avec un bon support du CPU seul' },
          { 'App': '[Jan](/fr/power-local-llm/jan-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / Apache 2.0 (variante)', 'Différence clé': 'Client de chat hors ligne open source axé sur la confidentialité, avec son propre moteur' },
          { 'App': '[Msty](/fr/power-local-llm/msty-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Freemium / code fermé', 'Différence clé': 'Client de bureau grand public multi-fournisseurs, en local ou dans le cloud' },
          { 'App': '[Hanoki](/fr/power-local-llm/hanoki-review)', 'Plateformes': 'macOS', 'Prix / licence': 'Freemium / MIT', 'Différence clé': 'Chat à branches pour Mac, en local via Ollama ou via des API cloud ; pas de version Windows' },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque app.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Existe-t-il un remboursement ?',
            a: 'Le site indique que vous disposez de 15 jours pour changer d\'avis et obtenir un remboursement intégral en écrivant à support@greencube.app.',
          },
          {
            q: 'Pourquoi faut-il un compte ?',
            a: 'Uniquement pour vérifier le paiement, selon le site ; le compte n\'est pas utilisé pour les conversations, les fichiers ou les images.',
          },
          {
            q: 'Puis-je l\'essayer gratuitement d\'abord ?',
            a: 'Les sources ne mentionnent ni offre gratuite ni période d\'essai ; le délai de remboursement est le filet de sécurité annoncé.',
          },
          {
            q: 'Existe-t-il une version pro ?',
            a: 'Non. Le site indique qu\'il n\'y a qu\'une version à un seul prix et qu\'un ordinateur plus rapide ne fait que l\'exécuter plus vite.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'GreenCube est une IA de bureau Windows qui, selon son éditeur, exécute Gemma 4 sur votre propre PC, fonctionne hors ligne après le premier téléchargement et coûte un seul paiement. En contrepartie, elle est réservée à Windows, à code fermé, encore en version 0.x, et PromptQuorum n\'a pu vérifier ni sa qualité ni son comportement réseau. Elle convient aux utilisateurs de Windows qui veulent éviter les abonnements et acceptent ces limites ; ceux qui veulent du code ouvert peuvent comparer [GPT4All](/fr/power-local-llm/gpt4all-review) ou [Jan](/fr/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de GreenCube](https://greencube.app) — présentation du produit, tarifs, niveaux matériels et FAQ, consultés le 30 octobre 2026.',
          '[Page d\'achat de GreenCube](https://greencube.app/buy) — prix, délai de remboursement et données structurées.',
          '[Flux de mises à jour de GreenCube](https://models.greencube.app/updates/latest.json) — version 0.1.47, publiée le 17 octobre 2026.',
          '[Politique de confidentialité de GreenCube](https://legal.greencube.app/privacy) — traitement des données et base juridique, en vigueur depuis le 13 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de GPT4All](/fr/power-local-llm/gpt4all-review) — l\'application de chat de bureau open source.',
          '[Test de Jan](/fr/power-local-llm/jan-review) — une application de bureau open source avec son propre moteur.',
          '[Test de Msty](/fr/power-local-llm/msty-review) — un client de bureau pour modèles locaux et cloud.',
          '[Assistants de chat LLM locaux : comparatif](/fr/power-local-llm/local-llm-chat-assistants-compared) — le comparatif de la catégorie des applications de chat.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/greencube-review-hero-ja.webp',
    title: 'GreenCubeレビュー：買い切りで使えるWindows向けオフラインAI',
    seoTitle: 'GreenCubeレビュー｜Windows向け買い切りAI',
    intro:
      'GreenCubeは、GoogleのGemma 4モデルを自分のPC上で動かし、チャット、コーディング、画像生成、ファイルの読み取りに使えるWindowsデスクトップアプリで、サブスクリプションではなく9.99ユーロの1回払いで販売されています。バージョン0.1.47（2026年10月17日更新）のできて間もない製品でスペインの企業が手がけているため、このレビューは2026年10月30日に確認した公式サイト、インストーラーの更新フィード、プライバシーポリシーの記載の範囲にとどめています。',
    metaDescription:
      'GreenCubeレビュー：9.99ユーロの買い切りでGemma 4をオフライン実行するWindows向けAI。動作要件、ハードウェア区分、データの流れ、未確認事項を整理。',
    twitterDescription:
      'GreenCubeレビュー：Gemma 4をオフラインで動かす買い切り型のWindows向けAI。価格、ハードウェア区分、データの流れ、情報源が確認していない点。',
    audience:
      '買い切り型のオフラインAIアプリを試す価値があるか迷っているWindows 10・11ユーザーで、費用、必要なハードウェア、PCの外に出る情報、情報源が確認していない点を知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GreenCube レビュー',
    targetKeywords: [
      'greencube レビュー',
      'greencube ai',
      'オフライン ai windows 買い切り',
      'ローカル ai サブスクなし windows',
      'gemma 4 windows アプリ',
      'プライベート ai チャット windows pc',
    ],
    current_hardware_mentioned: ['Windows PC', 'Gemma 4'],
    leadAnswerBlock:
      '**GreenCube（バージョン0.1.47、2026年10月17日更新）は、Gemma 4を自分のPC上で動かすWindows 10・11向けアプリで、開発者によれば、チャット、ファイル、画像はPC内にとどまります。** クローズドソースでWindows専用です。PromptQuorumはインストールも検証も行っておらず、ここでの記述はすべて開発者の公式サイト、インストーラーの更新フィード、プライバシーポリシーに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'GreenCubeは本当にオフラインで動作しますか？',
        answer:
          '開発者によれば、最初のセットアップ後は動作します。サインインとモデルのダウンロードのために一度だけインターネット接続が必要で、その後は接続なしで動きます。オンラインになるのは、更新時か、オンライン機能をオンにしたときだけです。',
        bullets: [
          'アカウントは、公式サイトとプライバシーポリシーによれば、支払い済みかどうかを確認するためだけに存在します。',
          'モデルはハードウェア区分によって決まり、グラフィックスカードなしのSeedから最上位のThriveまであります。',
          '画像生成には12GB以上のRAMが必要です。',
          'バージョンも価格も1種類で、返金期間は15日間です。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '簡単な回答', anchor: 'quick-answer' },
      { label: 'GreenCubeとは', anchor: 'what-is-greencube' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件とハードウェア区分', anchor: 'requirements' },
      { label: '使い始める手順', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れとコンテンツ方針', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合・代替アプリ', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
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
            text: 'GreenCubeは9.99ユーロの1回払いで販売されるWindows向けデスクトップAIで、Gemma 4を自分のPC上で動かし、最初のダウンロード後はオフラインで使えます。',
          },
          {
            type: 'plain-terms',
            text: '一度購入してサインインし、数GBのモデルをダウンロードすれば、その後はサブスクリプションも利用制限もなく、PC上でチャット、コーディング、ファイルの読み取りができます。',
          },
        ],
        items: [
          'メンテナンス：最新ビルドの0.1.47は2026年10月17日に公開されており、放置プロジェクトの警告は該当しません。',
          '費用：更新料のない1回払いで、公式サイトによれば、希望すれば15日以内に全額返金されます。',
          '対応端末：RAM 8GB以上のWindows 10または11で、macOS版とLinux版はありません。',
          'モデル：ハードウェア区分に応じてGemma 4 E2BまたはE4Bを使います。',
          '透明性：クローズドソースで、バージョンは0.x、公開者は企業（スペインのEdunexis SL）です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月30日に確認した開発者の公式サイト、更新フィード、プライバシーポリシーに基づきます。PromptQuorumはこのアプリをインストール・検証・ベンチマークしていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-greencube',
        title: 'GreenCubeとは',
        content: [
          '**GreenCubeは、自分のWindows PC上で動くデスクトップAIアシスタントで、メッセージ数の制限もクレジットも月額料金もありません。** 公式サイトには、チャットと文章作成、コードとWebページの生成、画像生成、PDFや写真の読み取り、暗記カードやクイズなどの学習ツール、PowerPointとWordへのエクスポートが挙げられています。図表と自動化は「近日公開」と表示されています。',
          'スペイン・カルタヘナのEdunexis SLが[GreenCube](https://greencube.app)という製品名で公開しています。開発者自身のFAQはトレードオフを率直に認めており、最大級のクラウドAIのほうが賢い一方、GreenCubeは制限のなさ、オフライン利用、所有を提供するとしています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**GreenCubeは通常のWindowsインストーラーをダウンロードする形式で、情報源にはターミナル操作の記載はなく、サインインと一度きりのモデルのダウンロードだけが挙げられています。**',
        ],
        columns: ['項目', '内容'],
        rows: [
          { '項目': '対応OS', '内容': 'Windows 10・11' },
          { '項目': 'ダウンロード', '内容': '[GreenCube-setup.exe](https://greencube.app/download)' },
          { '項目': '価格', '内容': '€9.99（US$9.99）、1回払い' },
          { '項目': '公式サイト', '内容': '[greencube.app](https://greencube.app)' },
          { '項目': 'プライバシーポリシー', '内容': '[GreenCubeのプライバシーポリシー](https://legal.greencube.app/privacy)' },
          { '項目': 'ソースコード', '内容': 'アプリのものは見つかりませんでした' },
        ],
        note: '確認したバージョン：0.1.47。開発者の[更新フィード](https://models.greencube.app/updates/latest.json)によれば2026年10月17日公開です。購入ページの構造化データには「1.0」とありフィードと一致しませんが、このレビューはユーザーが受け取るビルドを示すフィードに従っています。開発者のGitHub組織で公開されているリポジトリは、アプリではなくWebサイトだけです。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件とハードウェア区分',
        content: [
          '**GreenCubeにはWindows 10または11と約8GBのRAMが必要で、メモリが載せられるモデルの大きさを、グラフィックスカードが動作の速さを左右します。**',
        ],
        columns: ['区分', '公式サイトの記載'],
        rows: [
          { '区分': 'Seed', '公式サイトの記載': 'RAM約8GB、グラフィックスカードなし' },
          { '区分': 'Sprout', '公式サイトの記載': 'カードなしでRAM 16GB以上、またはカードありでRAM 8GB' },
          { '区分': 'Bloom', '公式サイトの記載': '8GB以上のカード、または4GBのカードとRAM 16GB' },
          { '区分': 'Thrive', '公式サイトの記載': '8GB以上のカードとRAM 24GB以上' },
        ],
        note: 'グラフィックスカードがなくても動作しますが、速度は遅くなります。画像生成には12GB以上のRAMが必要です。インストーラーは14.1MBで、モデルのダウンロードに数GBが加わります。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使い始める手順',
        content: [
          '**手順は開発者の公式サイトに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'ライセンスを購入',
            whyItMatters: '[購入ページ](https://greencube.app/buy)で一度だけ支払います。アカウントは支払いの確認に使われます。',
          },
          {
            title: 'アプリをインストール',
            whyItMatters: 'RAM 8GB以上のWindows 10または11のPCで、Windows用インストーラーをダウンロードして実行します。',
          },
          {
            title: 'サインインしてモデルをダウンロード',
            whyItMatters: 'GoogleまたはMicrosoftでサインインすると、アプリがハードウェア区分に合ったモデルを数GBほどダウンロードします。',
          },
          {
            title: 'オフラインで使う',
            whyItMatters: 'ダウンロードが済めば、チャット、コーディング、ファイルの読み取りは接続なしで動作します。',
          },
          {
            title: 'オンライン機能を使うか決める',
            whyItMatters: 'Web検索を使いたい場合だけオンライン機能をオンにします。それ以外はオフです。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて開発者の公式サイトに基づきます。**',
        ],
        items: [
          '**チャットとファイル。** チャットに加えて、PDF、写真、スクリーンショットの読み取り。',
          '**コードとWebページ。** 説明文からアプリ、サイト、ゲームを作成。',
          '**画像。** RAM 12GB以上のマシンでの画像生成。',
          '**学習とエクスポート。** 暗記カード、クイズ、表、PowerPointとWordへのエクスポート。',
          '**言語。** 公式サイト自体は約20言語で提供されていますが、モデルがどの言語で良好に回答するかは記載されていません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとコンテンツ方針',
        content: [
          '**プライバシーポリシーによれば、会話、文書、画像、記憶、設定はユーザーのコンピューター上で作成・保存され、開発者はそれらを受け取らないとしています。** 会社が扱うのは、購入情報（メールアドレス、氏名、請求先の国、Stripe経由の支払い情報）、GoogleまたはMicrosoftでのサインイン、モデルや更新を取得する際のダウンロードサーバーのログです。購入記録はスペインの税法に基づき6年間保管されます。',
          'アプリはPC上に診断ログを保存し、会話を含めない設計ですが、ファイル名が含まれることがあり、ユーザーが送信した場合にのみ開発者に届きます。コンテンツについて公式サイトは、GreenCubeは独自のフィルターを加えず、モデルを再学習せずに率直に答えるよう誘導しているため、モデルが回答を拒否することもあるとしています。人への危害、児童の搾取、窃盗、アカウントへの不正侵入には協力せず、率直に答える設定はオフにできます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者自身の説明です。PromptQuorumはアプリの通信を監査しておらず、PCの外に出る情報がほかにないことも確認していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**サブスクリプションを好まないWindowsユーザー**で、ローカルアシスタントを一度の支払いで手に入れたい方。',
          '**自分のファイルについてアップロードせずに質問したい方**（開発者の説明による）。',
          '**一般的なPCの所有者**。最下位の区分はRAM 8GBでグラフィックスカードを必要としません。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の使用感。** PromptQuorumはアプリを動かしていないため、回答の質、速度、画像の出来は評価していません。',
          '**実行エンジンとモデル。** 名前が挙がっているのはGemma 4 E2BとE4Bだけで、推論エンジンやほかのモデルを示す公開情報はありません。',
          '**バージョンと経過期間。** フィードは0.1.47、購入ページは1.0としており、変更履歴やリリース履歴も公開されていません。',
          '**第三者による確認。** アプリのソースコードは公開されておらず、通信やコンテンツ設定を第三者が検証したレビューもありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合・代替アプリ',
        columns: ['アプリ', '対応OS', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[GPT4All](/ja/power-local-llm/gpt4all-review)', '対応OS': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': '初心者向けのオープンソースのデスクトップチャットで、CPUのみの環境に強い' },
          { 'アプリ': '[Jan](/ja/power-local-llm/jan-review)', '対応OS': 'Windows、macOS、Linux', '価格／ライセンス': '無料／Apache 2.0（派生版）', '主な違い': '独自エンジンを持つ、プライバシー重視のオープンソースのオフラインチャットクライアント' },
          { 'アプリ': '[Msty](/ja/power-local-llm/msty-review)', '対応OS': 'Windows、macOS、Linux', '価格／ライセンス': 'フリーミアム／クローズドソース', '主な違い': '複数プロバイダーに対応する一般向けデスクトップクライアントで、ローカルでもクラウドでも使える' },
          { 'アプリ': '[Hanoki](/ja/power-local-llm/hanoki-review)', '対応OS': 'macOS', '価格／ライセンス': 'フリーミアム／MIT', '主な違い': 'Mac向けの分岐型チャットで、Ollama経由のローカルまたはクラウドAPIを利用。Windows版はなし' },
        ],
        note: '競合アプリの詳細は頻繁に変わるため、価格、ライセンス、対応OSは各アプリのページで最新の情報を確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '返金はできますか？',
            a: '公式サイトによれば、15日以内であれば気が変わった場合でも、support@greencube.appにメールすることで全額返金を受けられます。',
          },
          {
            q: 'なぜアカウントが必要なのですか？',
            a: '公式サイトによれば、支払いを確認するためだけで、アカウントはチャット、ファイル、画像には使われません。',
          },
          {
            q: '先に無料で試せますか？',
            a: '情報源には無料プランや試用版の記載はなく、返金期間が用意された安全策とされています。',
          },
          {
            q: 'プロ版はありますか？',
            a: 'いいえ。公式サイトによれば、バージョンは1つで価格も1つであり、高速なコンピューターでは動作が速くなるだけです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'GreenCubeは、開発者の説明によれば、Gemma 4を自分のPC上で動かし、最初のダウンロード後はオフラインで使え、費用は1回の支払いだけのWindows向けデスクトップAIです。一方で、Windows専用でクローズドソースであり、バージョンはまだ0.xで、PromptQuorumは品質と通信の挙動を確認できていません。こうした制約を受け入れたうえでサブスクリプションを避けたいWindowsユーザー向けです。オープンソースのコードを重視する方は、[GPT4All](/ja/power-local-llm/gpt4all-review)や[Jan](/ja/power-local-llm/jan-review)と比べてみてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[GreenCube公式サイト](https://greencube.app) — 製品概要、価格、ハードウェア区分、FAQ（2026年10月30日確認）。',
          '[GreenCube購入ページ](https://greencube.app/buy) — 価格、返金期間、構造化データ。',
          '[GreenCube更新フィード](https://models.greencube.app/updates/latest.json) — バージョン0.1.47、2026年10月17日公開。',
          '[GreenCubeのプライバシーポリシー](https://legal.greencube.app/privacy) — データの扱いと法的根拠（施行日：2026年10月13日）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[GPT4Allレビュー](/ja/power-local-llm/gpt4all-review) — オープンソースのデスクトップチャットアプリ。',
          '[Janレビュー](/ja/power-local-llm/jan-review) — 独自エンジンを持つオープンソースのデスクトップアプリ。',
          '[Mstyレビュー](/ja/power-local-llm/msty-review) — ローカルモデルとクラウドモデルに対応するデスクトップクライアント。',
          '[ローカルLLMチャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — チャットアプリのカテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/greencube-review-hero-pt.webp',
    title: 'Análise do GreenCube: IA offline de compra única para Windows',
    seoTitle: 'Análise do GreenCube: IA offline de compra única',
    intro:
      'O GreenCube é um app para Windows que executa os modelos Gemma 4 do Google no seu próprio PC para conversar, programar, gerar imagens e ler arquivos, vendido por um único pagamento de 9,99 euros em vez de uma assinatura. É um produto jovem (versão 0.1.47, atualizada em 17 de outubro de 2026) de uma empresa espanhola, por isso esta análise se limita ao que dizem o site, o feed do instalador e a política de privacidade, consultados em 30 de outubro de 2026.',
    metaDescription:
      'Análise do GreenCube: IA para Windows vendida uma vez por 9,99 euros, com Gemma 4 offline. Requisitos, níveis de hardware, dados e dúvidas em aberto.',
    twitterDescription:
      'Análise do GreenCube: uma IA de compra única para Windows que executa o Gemma 4 offline. Preço, níveis de hardware, fluxo de dados e o que as fontes não confirmam.',
    audience:
      'Usuários de Windows 10 e 11 que querem decidir se vale testar um app de IA offline de compra única e precisam saber quanto custa, qual hardware exige, o que sai do PC e o que as fontes não confirmam.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do GreenCube',
    targetKeywords: [
      'análise greencube',
      'greencube ia',
      'ia offline windows compra única',
      'ia local sem assinatura windows',
      'app gemma 4 windows',
      'chat de ia privado no pc windows',
    ],
    current_hardware_mentioned: ['Windows PC', 'Gemma 4'],
    leadAnswerBlock:
      '**O GreenCube (versão 0.1.47, atualizada em 17 de outubro de 2026) é um app para Windows 10 e 11 que executa o Gemma 4 no seu próprio PC e, segundo o desenvolvedor, mantém conversas, arquivos e imagens na máquina.** É de código fechado e só para Windows. O PromptQuorum não o instalou nem o testou; tudo o que está aqui vem do site do desenvolvedor, do feed do instalador e da política de privacidade.',
    quickAnswerTop: {
      pt: {
        question: 'O GreenCube realmente funciona offline?',
        answer:
          'Segundo o desenvolvedor, sim, depois de uma configuração: você precisa de internet uma vez para entrar na conta e baixar o modelo, e depois ele roda sem conexão. Ele só fica online para atualizações ou quando você ativa a opção Online.',
        bullets: [
          'A conta existe apenas para confirmar que você pagou, segundo o site e a política de privacidade.',
          'O modelo é escolhido pelo nível do seu hardware, de Seed (sem placa de vídeo) a Thrive.',
          'A geração de imagens exige pelo menos 12 GB de RAM.',
          'Há uma só versão e um só preço, com prazo de reembolso de 15 dias.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o GreenCube?', anchor: 'what-is-greencube' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Requisitos e níveis de hardware', anchor: 'requirements' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados e política de conteúdo', anchor: 'privacy' },
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
            text: 'O GreenCube é uma IA para desktop Windows vendida uma vez por 9,99 euros, que executa o Gemma 4 no seu próprio PC e funciona offline depois do primeiro download.',
          },
          {
            type: 'plain-terms',
            text: 'Você compra uma vez, entra na conta, deixa o app baixar um modelo de alguns gigabytes e, a partir daí, conversa, programa e lê arquivos no seu PC sem assinatura nem limite de uso.',
          },
        ],
        items: [
          'Manutenção: a versão mais recente, 0.1.47, foi publicada em 17 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Custo: um único pagamento, sem renovação; segundo o site, há reembolso integral em até 15 dias mediante pedido.',
          'Aparelho: Windows 10 ou 11 com 8 GB de RAM ou mais; não há versão para macOS nem Linux.',
          'Modelos: Gemma 4 E2B ou E4B, escolhidos pelo nível do seu hardware.',
          'Transparência: código fechado, número de versão 0.x e uma empresa como editora (Edunexis SL, Espanha).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site do desenvolvedor, no feed do instalador e na política de privacidade, consultados em 30 de outubro de 2026. O PromptQuorum não instalou, testou nem mediu o app.',
          },
        ],
      },
      overview: {
        id: 'what-is-greencube',
        title: 'O que é o GreenCube?',
        content: [
          '**O GreenCube é um assistente de IA para desktop que roda no seu próprio PC com Windows, sem limite de mensagens, sem créditos e sem mensalidade.** O site lista chat e redação, geração de código e de páginas web, geração de imagens, leitura de PDFs e fotos e ferramentas de estudo como flashcards e quizzes, além de exportação para PowerPoint e Word. Diagramas e Automações aparecem como «em breve».',
          'Ele é publicado pela Edunexis SL, de Cartagena, na Espanha, com o nome de produto [GreenCube](https://greencube.app). O FAQ do próprio desenvolvedor é franco sobre a troca: as maiores IAs na nuvem são mais inteligentes, e o GreenCube oferece, em vez disso, ausência de limites, uso offline e propriedade.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O GreenCube é um download comum de instalador para Windows; as fontes não mencionam nenhuma etapa no terminal, apenas o login e um download único do modelo.**',
        ],
        columns: ['Item', 'Detalhes'],
        rows: [
          { 'Item': 'Plataforma', 'Detalhes': 'Windows 10 e 11' },
          { 'Item': 'Download', 'Detalhes': '[GreenCube-setup.exe](https://greencube.app/download)' },
          { 'Item': 'Preço', 'Detalhes': '€ 9,99 (US$ 9,99), pagos uma só vez' },
          { 'Item': 'Site', 'Detalhes': '[greencube.app](https://greencube.app)' },
          { 'Item': 'Política de privacidade', 'Detalhes': '[Política de privacidade do GreenCube](https://legal.greencube.app/privacy)' },
          { 'Item': 'Código-fonte', 'Detalhes': 'Não encontrado para o app' },
        ],
        note: 'Versão analisada: 0.1.47, publicada em 17 de outubro de 2026 segundo o [feed de atualizações](https://models.greencube.app/updates/latest.json) do desenvolvedor. Os dados estruturados da página de compra dizem «1.0», o que não coincide com o feed; esta análise segue o feed porque ele descreve a versão que os usuários recebem. O único repositório público da organização do desenvolvedor no GitHub é o do site, não o do app.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos e níveis de hardware',
        content: [
          '**O GreenCube exige Windows 10 ou 11 e cerca de 8 GB de RAM; a memória decide o que cabe e a placa de vídeo decide a velocidade.**',
        ],
        columns: ['Nível', 'O que o site diz'],
        rows: [
          { 'Nível': 'Seed', 'O que o site diz': 'Cerca de 8 GB de RAM, sem placa de vídeo' },
          { 'Nível': 'Sprout', 'O que o site diz': '16 GB de RAM ou mais sem placa, ou 8 GB com placa' },
          { 'Nível': 'Bloom', 'O que o site diz': 'Placa com 8 GB ou mais, ou placa de 4 GB com 16 GB de RAM' },
          { 'Nível': 'Thrive', 'O que o site diz': 'Placa com 8 GB ou mais e 24 GB de RAM ou mais' },
        ],
        note: 'Sem placa de vídeo ele funciona, mas é mais lento. A geração de imagens exige pelo menos 12 GB de RAM. O instalador tem 14.1 MB; o download do modelo soma alguns gigabytes.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem o site do desenvolvedor; o PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Compre uma licença',
            whyItMatters: 'Pague uma só vez na [página de compra](https://greencube.app/buy); a conta serve para confirmar o pagamento.',
          },
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe e execute o instalador para Windows em um PC com Windows 10 ou 11 e 8 GB de RAM ou mais.',
          },
          {
            title: 'Entre na conta e baixe o modelo',
            whyItMatters: 'Entre com Google ou Microsoft; o app então baixa o modelo do nível do seu hardware, o que leva alguns gigabytes.',
          },
          {
            title: 'Trabalhe offline',
            whyItMatters: 'Depois do download, chat, código e leitura de arquivos funcionam sem conexão.',
          },
          {
            title: 'Decida sobre o Online',
            whyItMatters: 'Ative a opção Online apenas se quiser pesquisas na web; sem isso ela fica desligada.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do site do desenvolvedor.**',
        ],
        items: [
          '**Chat e arquivos.** Chat, além de leitura de PDFs, fotos e capturas de tela.',
          '**Código e páginas web.** Cria apps, sites e jogos a partir de uma descrição.',
          '**Imagens.** Geração de imagens em máquinas com pelo menos 12 GB de RAM.',
          '**Estudo e exportação.** Flashcards, quizzes, tabelas e exportação para PowerPoint e Word.',
          '**Idiomas.** O próprio site é oferecido em cerca de 20 idiomas; não se informa em quais idiomas o modelo responde bem.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e política de conteúdo',
        content: [
          '**Segundo a política de privacidade, conversas, documentos, imagens, memórias e configurações são criados e armazenados no seu computador, e o desenvolvedor diz que nunca os recebe.** O que a empresa trata é a compra (e-mail, nome, país de cobrança, dados de pagamento via Stripe), o login com Google ou Microsoft e os registros do servidor de downloads quando modelos ou atualizações são baixados. Os registros de compra são guardados por seis anos, conforme a lei tributária espanhola.',
          'O app mantém no seu PC registros de diagnóstico projetados para não incluir conversas, embora nomes de arquivos possam aparecer, e eles só chegam ao desenvolvedor se você os enviar. Quanto ao conteúdo, o site diz que o GreenCube não adiciona filtro próprio e orienta seus modelos a responder com franqueza sem retreiná-los, de modo que eles ainda podem recusar pedidos; ele não ajuda com danos a pessoas, exploração infantil, roubo ou invasão de contas, e a configuração de respostas francas pode ser desativada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do próprio desenvolvedor; o PromptQuorum não auditou o tráfego de rede do app nem confirmou que nada mais sai do PC.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Usuários de Windows que não gostam de assinaturas** e querem pagar uma só vez por um assistente local.',
          '**Quem quer fazer perguntas sobre seus próprios arquivos** sem enviá-los para a nuvem, segundo o desenvolvedor.',
          '**Donos de PCs comuns**, já que o nível mais baixo exige 8 GB de RAM e nenhuma placa de vídeo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade no uso real.** O PromptQuorum não executou o app, então qualidade das respostas, velocidade e resultados de imagem não foram avaliados.',
          '**Motor e modelos.** Apenas o Gemma 4 E2B e o E4B são citados; nenhuma fonte pública nomeia o motor de inferência nem lista outros modelos.',
          '**Versão e idade.** O feed diz 0.1.47 enquanto a página de compra diz 1.0, e não há changelog nem histórico de versões publicado.',
          '**Verificações independentes.** O app não tem código-fonte público nem revisão de terceiros do tráfego de rede ou das configurações de conteúdo.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[GPT4All](/pt/power-local-llm/gpt4all-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Chat de código aberto para desktop, amigável a iniciantes e com bom suporte a rodar só na CPU' },
          { 'App': '[Jan](/pt/power-local-llm/jan-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / Apache 2.0 (variante)', 'Diferença principal': 'Cliente de chat offline de código aberto, focado em privacidade e com motor próprio' },
          { 'App': '[Msty](/pt/power-local-llm/msty-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Freemium / código fechado', 'Diferença principal': 'Cliente de desktop de estilo consumidor com vários provedores, locais ou na nuvem' },
          { 'App': '[Hanoki](/pt/power-local-llm/hanoki-review)', 'Plataformas': 'macOS', 'Preço / licença': 'Freemium / MIT', 'Diferença principal': 'Chat com ramificações para Mac, local via Ollama ou com APIs na nuvem; sem versão para Windows' },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Existe reembolso?',
            a: 'O site diz que você tem 15 dias para mudar de ideia e receber reembolso integral, enviando um e-mail para support@greencube.app.',
          },
          {
            q: 'Por que ele precisa de uma conta?',
            a: 'Apenas para confirmar o pagamento, segundo o site; a conta não é usada para conversas, arquivos nem imagens.',
          },
          {
            q: 'Posso testar de graça antes?',
            a: 'As fontes não mencionam plano gratuito nem período de teste; a garantia indicada é o prazo de reembolso.',
          },
          {
            q: 'Existe uma versão pro?',
            a: 'Não. O site diz que há uma só versão por um só preço e que um computador mais rápido apenas a executa mais rápido.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O GreenCube é uma IA para desktop Windows que, segundo o desenvolvedor, executa o Gemma 4 no seu próprio PC, funciona offline depois do primeiro download e custa um único pagamento. Em contrapartida, é só para Windows, de código fechado, ainda está numa versão 0.x, e o PromptQuorum não conseguiu verificar sua qualidade nem seu comportamento de rede. Serve para usuários de Windows que querem evitar assinaturas e aceitam esses limites; quem prefere código aberto pode comparar o [GPT4All](/pt/power-local-llm/gpt4all-review) ou o [Jan](/pt/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do GreenCube](https://greencube.app) — visão geral do produto, preços, níveis de hardware e FAQ, consultados em 30 de outubro de 2026.',
          '[Página de compra do GreenCube](https://greencube.app/buy) — preço, prazo de reembolso e dados estruturados.',
          '[Feed de atualizações do GreenCube](https://models.greencube.app/updates/latest.json) — versão 0.1.47, publicada em 17 de outubro de 2026.',
          '[Política de privacidade do GreenCube](https://legal.greencube.app/privacy) — tratamento de dados e base legal, em vigor desde 13 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do GPT4All](/pt/power-local-llm/gpt4all-review) — o app de chat de código aberto para desktop.',
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um app de código aberto para desktop com motor próprio.',
          '[Análise do Msty](/pt/power-local-llm/msty-review) — um cliente de desktop para modelos locais e na nuvem.',
          '[Assistentes de chat com LLM local: comparativo](/pt/power-local-llm/local-llm-chat-assistants-compared) — o comparativo da categoria de apps de chat.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/greencube-review-hero-ar.webp',
    title: 'مراجعة GreenCube: ذكاء اصطناعي دون إنترنت لـ Windows بدفعة واحدة',
    seoTitle: 'مراجعة GreenCube: ذكاء اصطناعي دون إنترنت لـ Windows',
    intro:
      'GreenCube تطبيق سطح مكتب لـ Windows يشغّل نماذج Gemma 4 من Google على جهازك الشخصي للدردشة والبرمجة وتوليد الصور وقراءة الملفات، ويُباع بدفعة واحدة قدرها 9.99 يورو بدلًا من اشتراك. هو منتج حديث (الإصدار 0.1.47، حُدّث في 17 أكتوبر 2026) من شركة إسبانية، لذلك تقتصر هذه المراجعة على ما يذكره موقعه وخلاصة التحديثات في مثبّته وسياسة الخصوصية، بحسب الاطلاع عليها في 30 أكتوبر 2026.',
    metaDescription:
      'مراجعة GreenCube: ذكاء اصطناعي لـ Windows يُباع مرة واحدة بـ 9.99 يورو ويشغّل Gemma 4 دون إنترنت. المتطلبات والعتاد وتدفق البيانات وما لم يُتحقق منه.',
    twitterDescription:
      'مراجعة GreenCube: ذكاء اصطناعي لـ Windows بشراء لمرة واحدة يشغّل Gemma 4 دون إنترنت. السعر ومستويات العتاد وتدفق البيانات وما لا تؤكده المصادر.',
    audience:
      'مستخدمو Windows 10 و11 الذين يقررون ما إذا كان تطبيق ذكاء اصطناعي دون إنترنت بشراء لمرة واحدة يستحق التجربة، ويحتاجون إلى معرفة تكلفته والعتاد الذي يتطلبه وما يغادر الجهاز وما لا تؤكده المصادر.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة GreenCube',
    targetKeywords: [
      'مراجعة greencube',
      'greencube ai',
      'ذكاء اصطناعي دون إنترنت windows شراء لمرة واحدة',
      'ذكاء اصطناعي محلي دون اشتراك windows',
      'تطبيق gemma 4 لنظام windows',
      'دردشة ذكاء اصطناعي خاصة على حاسوب windows',
    ],
    current_hardware_mentioned: ['Windows PC', 'Gemma 4'],
    leadAnswerBlock:
      '**GreenCube (الإصدار 0.1.47، حُدّث في 17 أكتوبر 2026) تطبيق لنظامي Windows 10 و11 يشغّل Gemma 4 على جهازك، وتبقى المحادثات والملفات والصور على الجهاز بحسب مطوّره.** وهو مغلق المصدر ويعمل على Windows فقط. لم يثبّته PromptQuorum ولم يختبره؛ وكل ما يرد هنا مصدره موقع المطوّر وخلاصة التحديثات في المثبّت وسياسة الخصوصية.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل GreenCube فعلًا دون إنترنت؟',
        answer:
          'بحسب المطوّر، نعم بعد إعداد واحد: تحتاج إلى الإنترنت مرة واحدة لتسجيل الدخول وتنزيل النموذج، ثم يعمل دون اتصال. ولا يتصل بالإنترنت إلا للتحديثات أو عند تشغيل خيار «Online».',
        bullets: [
          'الحساب موجود فقط للتحقق من أنك دفعت، بحسب الموقع وسياسة الخصوصية.',
          'يُختار النموذج بحسب مستوى عتادك، من Seed (دون بطاقة رسوميات) إلى Thrive.',
          'يتطلب توليد الصور 12 GB على الأقل من RAM.',
          'هناك إصدار واحد وسعر واحد، مع مهلة استرداد مدتها 15 يومًا.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو GreenCube؟', anchor: 'what-is-greencube' },
      { label: 'كيفية الحصول عليه', anchor: 'get-it' },
      { label: 'المتطلبات ومستويات العتاد', anchor: 'requirements' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'تدفق البيانات وسياسة المحتوى', anchor: 'privacy' },
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
            text: 'GreenCube ذكاء اصطناعي لسطح مكتب Windows يُباع مرة واحدة بـ 9.99 يورو ويشغّل Gemma 4 على جهازك، ويعمل دون إنترنت بعد التنزيل الأول.',
          },
          {
            type: 'plain-terms',
            text: 'تشتريه مرة واحدة، وتسجّل الدخول، وتدعه ينزّل نموذجًا بحجم بضعة غيغابايت، ثم تدردش وتبرمج وتقرأ الملفات على جهازك دون اشتراك أو حد للاستخدام.',
          },
        ],
        items: [
          'الصيانة: صدر أحدث إصدار، 0.1.47، في 17 أكتوبر 2026، فلا ينطبق تحذير المشروع المتوقف.',
          'التكلفة: دفعة واحدة دون تجديد؛ ويقول الموقع إن الاسترداد الكامل متاح خلال 15 يومًا عند الطلب.',
          'الجهاز: Windows 10 أو 11 بذاكرة RAM لا تقل عن 8 GB؛ ولا توجد نسخة لـ macOS أو Linux.',
          'النماذج: Gemma 4 E2B أو E4B بحسب مستوى عتادك.',
          'الشفافية: مغلق المصدر، ورقم إصدار 0.x، وناشر شركة (Edunexis SL، إسبانيا).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع المطوّر وخلاصة التحديثات في المثبّت وسياسة الخصوصية، بحسب الاطلاع عليها في 30 أكتوبر 2026. لم يثبّت PromptQuorum التطبيق ولم يختبره أو يقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-greencube',
        title: 'ما هو GreenCube؟',
        content: [
          '**GreenCube مساعد ذكاء اصطناعي لسطح المكتب يعمل على جهاز Windows الخاص بك، دون حد للرسائل ودون أرصدة ودون رسوم شهرية.** يسرد الموقع الدردشة والكتابة، وتوليد الشيفرة وصفحات الويب، وتوليد الصور، وقراءة ملفات PDF والصور، وأدوات الدراسة مثل البطاقات التعليمية والاختبارات، إضافة إلى التصدير إلى PowerPoint وWord. أما الرسوم التوضيحية والأتمتة فتُعرضان على أنهما قادمتان قريبًا.',
          'ينشره Edunexis SL من قرطاجنة في إسبانيا تحت اسم المنتج [GreenCube](https://greencube.app). وتتحدث الأسئلة الشائعة لدى المطوّر نفسه بصراحة عن المفاضلة: أكبر أنظمة الذكاء الاصطناعي السحابية أذكى، ويقدّم GreenCube بدلًا من ذلك استخدامًا بلا حدود ودون إنترنت وملكية.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**GreenCube تنزيل عادي لمثبّت Windows؛ ولا تذكر المصادر خطوة في الطرفية، بل تسجيل دخول وتنزيلًا واحدًا للنموذج فقط.**',
        ],
        columns: ['البند', 'التفاصيل'],
        rows: [
          { 'البند': 'المنصة', 'التفاصيل': 'Windows 10 و11' },
          { 'البند': 'التنزيل', 'التفاصيل': '[GreenCube-setup.exe](https://greencube.app/download)' },
          { 'البند': 'السعر', 'التفاصيل': '9.99 € (9.99 US$)، تُدفع مرة واحدة' },
          { 'البند': 'الموقع', 'التفاصيل': '[greencube.app](https://greencube.app)' },
          { 'البند': 'سياسة الخصوصية', 'التفاصيل': '[سياسة خصوصية GreenCube](https://legal.greencube.app/privacy)' },
          { 'البند': 'الشيفرة المصدرية', 'التفاصيل': 'لم نعثر على شيفرة للتطبيق' },
        ],
        note: 'الإصدار المراجَع: 0.1.47، صدر في 17 أكتوبر 2026 بحسب [خلاصة التحديثات](https://models.greencube.app/updates/latest.json) لدى المطوّر. تذكر البيانات المنظمة في صفحة الشراء الرقم «1.0»، وهو لا يطابق الخلاصة؛ وتتبع هذه المراجعة الخلاصة لأنها تصف النسخة التي يتلقاها المستخدمون. المستودع العلني الوحيد في منظمة المطوّر على GitHub هو الموقع، وليس التطبيق.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات ومستويات العتاد',
        content: [
          '**يتطلب GreenCube نظام Windows 10 أو 11 ونحو 8 GB من RAM؛ فالذاكرة تحدد ما يتسع له التشغيل، وبطاقة الرسوميات تحدد سرعته.**',
        ],
        columns: ['المستوى', 'ما يقوله الموقع'],
        rows: [
          { 'المستوى': 'Seed', 'ما يقوله الموقع': 'نحو 8 GB من RAM، دون بطاقة رسوميات' },
          { 'المستوى': 'Sprout', 'ما يقوله الموقع': '16 GB من RAM أو أكثر دون بطاقة، أو 8 GB مع بطاقة' },
          { 'المستوى': 'Bloom', 'ما يقوله الموقع': 'بطاقة بذاكرة 8 GB أو أكثر، أو بطاقة 4 GB مع 16 GB من RAM' },
          { 'المستوى': 'Thrive', 'ما يقوله الموقع': 'بطاقة بذاكرة 8 GB أو أكثر مع 24 GB من RAM أو أكثر' },
        ],
        note: 'يعمل دون بطاقة رسوميات لكن ببطء أكبر. يتطلب توليد الصور 12 GB على الأقل من RAM. حجم المثبّت 14.1 MB، ويضيف تنزيل النموذج بضعة غيغابايت.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات موقع المطوّر؛ ولم ينفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'اشترِ ترخيصًا',
            whyItMatters: 'ادفع مرة واحدة في [صفحة الشراء](https://greencube.app/buy)؛ ويُستخدم الحساب للتحقق من الدفع.',
          },
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل مثبّت Windows وشغّله على جهاز Windows 10 أو 11 بذاكرة RAM لا تقل عن 8 GB.',
          },
          {
            title: 'سجّل الدخول ونزّل النموذج',
            whyItMatters: 'سجّل الدخول عبر Google أو Microsoft؛ ثم ينزّل التطبيق النموذج المناسب لمستوى عتادك، وهو بضعة غيغابايت.',
          },
          {
            title: 'اعمل دون إنترنت',
            whyItMatters: 'بعد التنزيل تعمل الدردشة والبرمجة وقراءة الملفات دون اتصال.',
          },
          {
            title: 'قرّر بشأن Online',
            whyItMatters: 'شغّل خيار Online فقط إذا أردت عمليات بحث على الويب؛ فهو متوقف بخلاف ذلك.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره موقع المطوّر.**',
        ],
        items: [
          '**الدردشة والملفات.** دردشة إضافة إلى قراءة ملفات PDF والصور ولقطات الشاشة.',
          '**الشيفرة وصفحات الويب.** يبني تطبيقات ومواقع وألعابًا انطلاقًا من وصف.',
          '**الصور.** توليد الصور على الأجهزة التي تملك 12 GB على الأقل من RAM.',
          '**الدراسة والتصدير.** بطاقات تعليمية واختبارات وجداول، وتصدير إلى PowerPoint وWord.',
          '**اللغات.** يتوفر الموقع نفسه بنحو 20 لغة؛ أما اللغات التي يجيب بها النموذج جيدًا فلم تُذكر.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات وسياسة المحتوى',
        content: [
          '**بحسب سياسة الخصوصية، تُنشأ المحادثات والمستندات والصور والذكريات والإعدادات وتُخزَّن على حاسوبك، ويقول المطوّر إنه لا يستقبلها أبدًا.** أما ما تتعامل معه الشركة فعلًا فهو عملية الشراء (البريد الإلكتروني والاسم وبلد الفوترة وبيانات الدفع عبر Stripe)، وتسجيل الدخول عبر Google أو Microsoft، وسجلات خادم التنزيل عند جلب النماذج أو التحديثات. وتُحفظ سجلات الشراء ست سنوات بموجب القانون الضريبي الإسباني.',
          'يحتفظ التطبيق بسجلات تشخيصية على جهازك صُمّمت لتستثني المحادثات، وإن كان من الممكن أن تظهر أسماء الملفات، ولا تصل إلى المطوّر إلا إذا أرسلتها بنفسك. وفي شأن المحتوى، يقول الموقع إن GreenCube لا يضيف مرشحًا خاصًا به ويوجّه نماذجه إلى الإجابة بصراحة دون إعادة تدريبها، لذلك قد ترفض أحيانًا؛ ولن يساعد في إيذاء الناس أو استغلال الأطفال أو السرقة أو اختراق الحسابات، ويمكن إيقاف إعداد الإجابة الصريحة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المطوّر نفسه؛ ولم يدقق PromptQuorum حركة الشبكة للتطبيق ولم يؤكد أن لا شيء آخر يغادر الجهاز.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Windows الذين لا يحبون الاشتراكات** ويريدون الدفع مرة واحدة مقابل مساعد محلي.',
          '**من يريدون طرح أسئلة عن ملفاتهم الخاصة** دون رفعها، بحسب المطوّر.',
          '**أصحاب الحواسيب العادية**، إذ يتطلب أدنى مستوى 8 GB من RAM ولا يحتاج إلى بطاقة رسوميات.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة في الاستخدام الفعلي.** لم يشغّل PromptQuorum التطبيق، لذا لم تُقيَّم جودة الإجابات ولا السرعة ولا نتائج الصور.',
          '**محرك التشغيل والنماذج.** لم يُذكر سوى Gemma 4 E2B وE4B؛ ولا يذكر أي مصدر علني محرك الاستدلال ولا قائمة بنماذج أخرى.',
          '**الإصدار والعمر.** تقول الخلاصة 0.1.47 بينما تقول صفحة الشراء 1.0، ولا يُنشر سجل تغييرات ولا تاريخ إصدارات.',
          '**فحوص مستقلة.** لا شيفرة مصدرية علنية للتطبيق، ولا مراجعة من طرف ثالث لحركة شبكته أو لإعدادات المحتوى فيه.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          { 'التطبيق': '[GPT4All](/ar/power-local-llm/gpt4all-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الرئيسي': 'دردشة سطح مكتب مفتوحة المصدر سهلة للمبتدئين مع دعم قوي للتشغيل على المعالج فقط' },
          { 'التطبيق': '[Jan](/ar/power-local-llm/jan-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الترخيص': 'مجاني / Apache 2.0 (نسخة)', 'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر دون إنترنت يركّز على الخصوصية ولديه محركه الخاص' },
          { 'التطبيق': '[Msty](/ar/power-local-llm/msty-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الترخيص': 'مجاني جزئيًا / مغلق المصدر', 'الفرق الرئيسي': 'عميل سطح مكتب بأسلوب المستهلك يدعم عدة مزوّدين، محليًا أو سحابيًا' },
          { 'التطبيق': '[Hanoki](/ar/power-local-llm/hanoki-review)', 'المنصات': 'macOS', 'السعر / الترخيص': 'مجاني جزئيًا / MIT', 'الفرق الرئيسي': 'دردشة متفرعة لنظام Mac، محليًا عبر Ollama أو عبر واجهات سحابية؛ ولا توجد نسخة لـ Windows' },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن استرداد المبلغ؟',
            a: 'يقول الموقع إن لديك 15 يومًا لتغيير رأيك واسترداد المبلغ كاملًا بمراسلة support@greencube.app.',
          },
          {
            q: 'لماذا يحتاج إلى حساب؟',
            a: 'للتحقق من الدفع فقط، بحسب الموقع؛ ولا يُستخدم الحساب للمحادثات أو الملفات أو الصور.',
          },
          {
            q: 'هل يمكنني تجربته مجانًا أولًا؟',
            a: 'لا تذكر المصادر نسخة مجانية ولا فترة تجريبية؛ ومهلة الاسترداد هي شبكة الأمان المعلنة.',
          },
          {
            q: 'هل توجد نسخة احترافية؟',
            a: 'لا. يقول الموقع إن هناك إصدارًا واحدًا بسعر واحد، وإن الحاسوب الأسرع يشغّله أسرع فقط.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'GreenCube ذكاء اصطناعي لسطح مكتب Windows يشغّل Gemma 4 على جهازك بحسب مطوّره، ويعمل دون إنترنت بعد التنزيل الأول، ويكلّف دفعة واحدة. في المقابل، يعمل على Windows فقط، وهو مغلق المصدر، ولا يزال برقم إصدار 0.x، ولم يتمكن PromptQuorum من التحقق من جودته أو سلوكه على الشبكة. يناسب مستخدمي Windows الذين يريدون تجنب الاشتراكات ويقبلون هذه الحدود؛ ومن يريد شيفرة مفتوحة يمكنه مقارنة [GPT4All](/ar/power-local-llm/gpt4all-review) أو [Jan](/ar/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع GreenCube](https://greencube.app) — نظرة عامة على المنتج والأسعار ومستويات العتاد والأسئلة الشائعة، بحسب الاطلاع عليه في 30 أكتوبر 2026.',
          '[صفحة شراء GreenCube](https://greencube.app/buy) — السعر ومهلة الاسترداد والبيانات المنظمة.',
          '[خلاصة تحديثات GreenCube](https://models.greencube.app/updates/latest.json) — الإصدار 0.1.47، صدر في 17 أكتوبر 2026.',
          '[سياسة خصوصية GreenCube](https://legal.greencube.app/privacy) — معالجة البيانات والأساس القانوني، سارية من 13 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة GPT4All](/ar/power-local-llm/gpt4all-review) — تطبيق دردشة سطح مكتب مفتوح المصدر.',
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — تطبيق سطح مكتب مفتوح المصدر بمحركه الخاص.',
          '[مراجعة Msty](/ar/power-local-llm/msty-review) — عميل سطح مكتب للنماذج المحلية والسحابية.',
          '[مقارنة مساعدي الدردشة بنماذج LLM محلية](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة فئة تطبيقات الدردشة.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/greencube-review-hero-zh.webp',
    title: 'GreenCube 评测：Windows 上一次性买断的离线 AI',
    seoTitle: 'GreenCube 评测：Windows 买断制离线 AI',
    intro:
      'GreenCube 是一款 Windows 桌面应用，在你自己的电脑上运行 Google 的 Gemma 4 模型，用于聊天、编程、图像生成和读取文件，不按订阅收费，只需一次性支付 9.99 欧元。它是一款很新的产品（0.1.47 版，2026 年 10 月 17 日更新），出自一家西班牙公司，因此本评测只依据其官网、安装程序更新源和隐私政策的说法（2026 年 10 月 30 日查阅）。',
    metaDescription:
      'GreenCube 评测：一次付费 9.99 欧元的 Windows 桌面 AI，离线运行 Gemma 4。系统要求、硬件档位、数据流向及未经证实的问题。',
    twitterDescription:
      'GreenCube 评测：一次性买断、离线运行 Gemma 4 的 Windows AI。价格、硬件档位、数据流向，以及资料中未确认的内容。',
    audience:
      '正在考虑是否试用买断制离线 AI 应用的 Windows 10 和 11 用户，需要了解它的费用、硬件要求、哪些数据会离开电脑，以及资料中未经证实的部分。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GreenCube 评测',
    targetKeywords: [
      'greencube 评测',
      'greencube ai',
      'windows 离线 ai 一次性买断',
      'windows 本地 ai 无订阅',
      'gemma 4 windows 应用',
      'windows 私密 ai 聊天',
    ],
    current_hardware_mentioned: ['Windows PC', 'Gemma 4'],
    leadAnswerBlock:
      '**GreenCube（0.1.47 版，2026 年 10 月 17 日更新）是一款适用于 Windows 10 和 11 的应用，在你自己的电脑上运行 Gemma 4，据开发者称，聊天、文件和图像都保留在本机。** 它是闭源应用，仅支持 Windows。PromptQuorum 没有安装或测试过它；这里的每项陈述都来自开发者的官网、安装程序更新源和隐私政策。',
    quickAnswerTop: {
      zh: {
        question: 'GreenCube 真的能离线使用吗？',
        answer:
          '据开发者称，完成一次设置后可以：你需要联网一次来登录并下载模型，之后无需连接即可运行。只有在更新时，或你打开“在线”选项时，它才会联网。',
        bullets: [
          '按官网和隐私政策，账号只用来核实你已付款。',
          '模型由你的硬件档位决定，从 Seed（无显卡）到 Thrive。',
          '图像生成至少需要 12 GB 内存（RAM）。',
          '只有一个版本、一个价格，并提供 15 天退款期。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'GreenCube 是什么？', anchor: 'what-is-greencube' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '系统要求与硬件档位', anchor: 'requirements' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '资料已确认的功能', anchor: 'key-features' },
      { label: '数据流向与内容政策', anchor: 'privacy' },
      { label: '适合谁', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
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
            text: 'GreenCube 是一款一次性付费 9.99 欧元的 Windows 桌面 AI，在你自己的电脑上运行 Gemma 4，首次下载后即可离线使用。',
          },
          {
            type: 'plain-terms',
            text: '一次购买、登录，让它下载几 GB 的模型，之后就能在电脑上聊天、编程和读取文件，没有订阅，也没有使用次数限制。',
          },
        ],
        items: [
          '维护：最新版本 0.1.47 于 2026 年 10 月 17 日发布，因此不适用项目停更警告。',
          '费用：一次付款、无需续费；官网称 15 天内可应要求全额退款。',
          '设备：需要 8 GB 或更多内存的 Windows 10 或 11；没有 macOS 或 Linux 版本。',
          '模型：Gemma 4 E2B 或 E4B，由你的硬件档位决定。',
          '透明度：闭源、版本号为 0.x，发布者为公司（Edunexis SL，西班牙）。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据 2026 年 10 月 30 日查阅的开发者官网、安装程序更新源和隐私政策。PromptQuorum 没有安装、测试或对该应用做基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-greencube',
        title: 'GreenCube 是什么？',
        content: [
          '**GreenCube 是一款在你自己的 Windows 电脑上运行的桌面 AI 助手，没有消息数量限制、没有积分，也没有月费。** 官网列出的功能包括聊天与写作、代码和网页生成、图像生成、读取 PDF 和照片，以及闪卡和测验等学习工具，还可导出为 PowerPoint 和 Word。图表和自动化显示为“即将推出”。',
          '它由西班牙卡塔赫纳的 Edunexis SL 以产品名 [GreenCube](https://greencube.app) 发布。开发者自己的常见问题对取舍毫不讳言：最大的云端 AI 更聪明，而 GreenCube 提供的是无限制、离线使用和拥有权。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**GreenCube 是常规的 Windows 安装程序下载；资料中没有提到终端步骤，只有登录和一次性的模型下载。**',
        ],
        columns: ['项目', '详情'],
        rows: [
          { '项目': '平台', '详情': 'Windows 10 和 11' },
          { '项目': '下载', '详情': '[GreenCube-setup.exe](https://greencube.app/download)' },
          { '项目': '价格', '详情': '€9.99（US$9.99），一次性付费' },
          { '项目': '官网', '详情': '[greencube.app](https://greencube.app)' },
          { '项目': '隐私政策', '详情': '[GreenCube 隐私政策](https://legal.greencube.app/privacy)' },
          { '项目': '源代码', '详情': '未找到该应用的源代码' },
        ],
        note: '评测版本：0.1.47，据开发者的[更新源](https://models.greencube.app/updates/latest.json)于 2026 年 10 月 17 日发布。购买页面的结构化数据写的是“1.0”，与更新源不符；本评测以更新源为准，因为它描述的是用户实际收到的版本。开发者 GitHub 组织唯一的公开仓库是网站，不是应用。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求与硬件档位',
        content: [
          '**GreenCube 需要 Windows 10 或 11 以及约 8 GB 内存；内存决定能装下多大的模型，显卡决定运行速度。**',
        ],
        columns: ['档位', '官网所述'],
        rows: [
          { '档位': 'Seed', '官网所述': '约 8 GB 内存，无显卡' },
          { '档位': 'Sprout', '官网所述': '无显卡时 16 GB 或更多内存，或有显卡时 8 GB 内存' },
          { '档位': 'Bloom', '官网所述': '8 GB 或以上显存的显卡，或 4 GB 显卡搭配 16 GB 内存' },
          { '档位': 'Thrive', '官网所述': '8 GB 或以上显存的显卡，且内存 24 GB 或更多' },
        ],
        note: '没有显卡也能运行，但速度较慢。图像生成至少需要 12 GB 内存。安装程序为 14.1 MB；模型下载还要再增加几 GB。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据开发者官网；PromptQuorum 没有实际执行。**',
        ],
        numberedItems: [
          {
            title: '购买许可证',
            whyItMatters: '在[购买页面](https://greencube.app/buy)一次性付款；账号用于核实付款。',
          },
          {
            title: '安装应用',
            whyItMatters: '在内存 8 GB 或以上的 Windows 10 或 11 电脑上下载并运行 Windows 安装程序。',
          },
          {
            title: '登录并下载模型',
            whyItMatters: '使用 Google 或 Microsoft 账号登录；应用随后会下载适合你硬件档位的模型，大小为几 GB。',
          },
          {
            title: '离线使用',
            whyItMatters: '下载完成后，聊天、编程和读取文件无需联网即可进行。',
          },
          {
            title: '决定是否使用“在线”',
            whyItMatters: '只有在需要网页搜索时才打开“在线”选项；否则它保持关闭。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '资料已确认的功能',
        content: [
          '**以下每一项都来自开发者官网。**',
        ],
        items: [
          '**聊天与文件。** 聊天，以及读取 PDF、照片和截图。',
          '**代码与网页。** 根据描述构建应用、网站和游戏。',
          '**图像。** 在至少有 12 GB 内存的电脑上生成图像。',
          '**学习与导出。** 闪卡、测验、表格，以及导出为 PowerPoint 和 Word。',
          '**语言。** 官网本身提供约 20 种语言；模型在哪些语言上回答得好，资料中没有说明。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与内容政策',
        content: [
          '**按隐私政策，对话、文档、图像、记忆和设置都在你的电脑上创建和存储，开发者称自己从不接收这些内容。** 公司实际处理的是购买信息（电子邮件、姓名、账单所在国家、通过 Stripe 处理的支付信息）、通过 Google 或 Microsoft 的登录，以及获取模型或更新时下载服务器产生的日志。根据西班牙税法，购买记录保存六年。',
          '应用会在你的电脑上保留诊断日志，设计上不包含对话，但文件名可能出现，且只有在你发送时才会到达开发者。关于内容，官网称 GreenCube 自己不添加过滤，并且在不重新训练模型的情况下引导模型坦率回答，因此模型仍可能拒绝；它不会协助伤害他人、侵害儿童、盗窃或入侵账号，而坦率回答的设置可以关闭。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些都是开发者自己的说法；PromptQuorum 没有审计应用的网络流量，也无法确认没有其他数据离开电脑。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁',
        items: [
          '**不喜欢订阅的 Windows 用户**，想为本地助手一次性付费。',
          '**想就自己的文件提问的人**，按开发者的说法，无需上传文件。',
          '**普通电脑的用户**，因为最低档只需要 8 GB 内存，不要求显卡。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际质量。** PromptQuorum 没有运行该应用，因此未评估回答质量、速度和图像效果。',
          '**运行时与模型。** 资料只提到 Gemma 4 E2B 和 E4B；没有公开资料说明推理引擎或列出其他模型。',
          '**版本与年限。** 更新源写的是 0.1.47，而购买页面写的是 1.0，也没有公布更新日志或发布历史。',
          '**独立核查。** 该应用没有公开源代码，也没有第三方对其网络流量或内容设置的审查。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格/许可证', '主要区别'],
        rows: [
          { '应用': '[GPT4All](/zh/power-local-llm/gpt4all-review)', '平台': 'Windows、macOS、Linux', '价格/许可证': '免费/MIT', '主要区别': '对新手友好的开源桌面聊天应用，对纯 CPU 运行支持良好' },
          { '应用': '[Jan](/zh/power-local-llm/jan-review)', '平台': 'Windows、macOS、Linux', '价格/许可证': '免费/Apache 2.0（变体）', '主要区别': '注重隐私的开源离线聊天客户端，自带推理引擎' },
          { '应用': '[Msty](/zh/power-local-llm/msty-review)', '平台': 'Windows、macOS、Linux', '价格/许可证': '免费增值/闭源', '主要区别': '面向普通用户的桌面客户端，支持多个提供商，本地或云端均可' },
          { '应用': '[Hanoki](/zh/power-local-llm/hanoki-review)', '平台': 'macOS', '价格/许可证': '免费增值/MIT', '主要区别': '面向 Mac 的分支式聊天，通过 Ollama 本地运行或使用云端 API；没有 Windows 版本' },
        ],
        note: '竞品信息经常变化；请在各应用自己的页面上确认当前的价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '可以退款吗？',
            a: '官网称你有 15 天时间改变主意，并可通过发送电子邮件至 support@greencube.app 获得全额退款。',
          },
          {
            q: '为什么需要账号？',
            a: '据官网所述，只是为了核实付款；账号不用于聊天、文件或图像。',
          },
          {
            q: '可以先免费试用吗？',
            a: '资料中没有提到免费版或试用；所述的保障是退款期。',
          },
          {
            q: '有专业版吗？',
            a: '没有。官网称只有一个版本、一个价格，更快的电脑只是运行得更快。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'GreenCube 是一款 Windows 桌面 AI，据开发者称，它在你自己的电脑上运行 Gemma 4，首次下载后即可离线使用，只需一次付费。另一方面，它仅支持 Windows、闭源、仍是 0.x 版本，PromptQuorum 也无法核实其质量和网络行为。它适合想避开订阅、并能接受这些限制的 Windows 用户；想要开源代码的读者可以比较 [GPT4All](/zh/power-local-llm/gpt4all-review) 或 [Jan](/zh/power-local-llm/jan-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[GreenCube 官网](https://greencube.app) — 产品概述、定价、硬件档位和常见问题，2026 年 10 月 30 日查阅。',
          '[GreenCube 购买页面](https://greencube.app/buy) — 价格、退款期和结构化数据。',
          '[GreenCube 更新源](https://models.greencube.app/updates/latest.json) — 0.1.47 版，2026 年 10 月 17 日发布。',
          '[GreenCube 隐私政策](https://legal.greencube.app/privacy) — 数据处理和法律依据，2026 年 10 月 13 日生效。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[GPT4All 评测](/zh/power-local-llm/gpt4all-review) — 开源桌面聊天应用。',
          '[Jan 评测](/zh/power-local-llm/jan-review) — 自带推理引擎的开源桌面应用。',
          '[Msty 评测](/zh/power-local-llm/msty-review) — 支持本地和云端模型的桌面客户端。',
          '[本地 LLM 聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 聊天应用类别对比。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/greencube-review-hero-ko.webp',
    title: 'GreenCube 리뷰: Windows용 1회 구매 오프라인 AI',
    seoTitle: 'GreenCube 리뷰: Windows 오프라인 AI 1회 구매',
    intro:
      'GreenCube는 Google의 Gemma 4 모델을 내 PC에서 실행해 채팅, 코딩, 이미지 생성, 파일 읽기를 할 수 있는 Windows 데스크톱 앱으로, 구독 대신 9.99유로를 한 번 결제하는 방식으로 판매됩니다. 버전 0.1.47(2026년 10월 17일 업데이트)의 신생 제품이며 스페인 회사가 만들었으므로, 이 리뷰는 2026년 10월 30일에 확인한 웹사이트, 설치 프로그램 피드, 개인정보 처리방침의 내용으로 한정합니다.',
    metaDescription:
      'GreenCube 리뷰: 9.99유로 1회 결제 Windows 데스크톱 AI로, Gemma 4를 오프라인에서 실행합니다. 요구 사항, 하드웨어 등급, 데이터 흐름, 미확인 사항을 정리했습니다.',
    twitterDescription:
      'GreenCube 리뷰: Gemma 4를 오프라인에서 실행하는 1회 구매 Windows AI. 가격, 하드웨어 등급, 데이터 흐름, 자료가 확인하지 않은 점.',
    audience:
      '1회 구매 오프라인 AI 앱을 써 볼지 고민하는 Windows 10·11 사용자로, 비용, 필요한 하드웨어, PC 밖으로 나가는 정보, 자료가 확인하지 않은 부분을 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'GreenCube 리뷰',
    targetKeywords: [
      'greencube 리뷰',
      'greencube ai',
      'windows 오프라인 ai 1회 구매',
      '구독 없는 로컬 ai windows',
      'gemma 4 windows 앱',
      'windows pc 프라이빗 ai 채팅',
    ],
    current_hardware_mentioned: ['Windows PC', 'Gemma 4'],
    leadAnswerBlock:
      '**GreenCube(버전 0.1.47, 2026년 10월 17일 업데이트)는 Gemma 4를 내 PC에서 실행하는 Windows 10·11용 앱이며, 개발자에 따르면 채팅, 파일, 이미지를 PC 안에 보관합니다.** 클로즈드 소스이고 Windows 전용입니다. PromptQuorum은 앱을 설치하거나 테스트하지 않았으며, 여기 적힌 모든 내용은 개발자의 웹사이트, 설치 프로그램 피드, 개인정보 처리방침에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'GreenCube는 정말 오프라인으로 작동합니까?',
        answer:
          '개발자에 따르면 처음 설정한 뒤에는 그렇습니다. 로그인과 모델 다운로드를 위해 인터넷이 한 번 필요하고, 그 후에는 연결 없이 실행됩니다. 업데이트를 확인하거나 온라인 옵션을 켰을 때만 인터넷에 연결됩니다.',
        bullets: [
          '웹사이트와 개인정보 처리방침에 따르면 계정은 결제 여부를 확인하는 용도로만 쓰입니다.',
          '모델은 하드웨어 등급에 따라 정해지며, 그래픽 카드가 없는 Seed부터 Thrive까지 있습니다.',
          '이미지 생성에는 RAM이 최소 12GB 필요합니다.',
          '버전은 하나, 가격도 하나이며 15일 환불 기간이 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'GreenCube란?', anchor: 'what-is-greencube' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '요구 사항과 하드웨어 등급', anchor: 'requirements' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '자료로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름과 콘텐츠 정책', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 점', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
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
            text: 'GreenCube는 9.99유로를 한 번 결제하는 Windows 데스크톱 AI로, Gemma 4를 내 PC에서 실행하며 처음 다운로드한 뒤에는 오프라인으로 작동합니다.',
          },
          {
            type: 'plain-terms',
            text: '한 번 구매하고 로그인한 뒤 수 기가바이트 크기의 모델을 내려받으면, 그 후에는 구독이나 사용 한도 없이 PC에서 채팅, 코딩, 파일 읽기를 할 수 있습니다.',
          },
        ],
        items: [
          '유지보수: 최신 빌드 0.1.47은 2026년 10월 17일에 공개되었으므로 방치 프로젝트 경고는 해당하지 않습니다.',
          '비용: 갱신 없이 한 번 결제하며, 웹사이트에 따르면 요청 시 15일 이내에 전액 환불받을 수 있습니다.',
          '기기: RAM 8GB 이상의 Windows 10 또는 11이 필요하며 macOS나 Linux 버전은 없습니다.',
          '모델: 하드웨어 등급에 따라 Gemma 4 E2B 또는 E4B가 선택됩니다.',
          '투명성: 클로즈드 소스이고 0.x 버전이며, 게시자는 회사(Edunexis SL, 스페인)입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 30일에 확인한 개발자의 웹사이트, 설치 프로그램 피드, 개인정보 처리방침을 바탕으로 합니다. PromptQuorum은 이 앱을 설치, 테스트, 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-greencube',
        title: 'GreenCube란?',
        content: [
          '**GreenCube는 메시지 한도, 크레딧, 월 요금 없이 내 Windows PC에서 실행되는 데스크톱 AI 어시스턴트입니다.** 웹사이트에는 채팅과 글쓰기, 코드 및 웹 페이지 생성, 이미지 생성, PDF와 사진 읽기, 플래시카드와 퀴즈 같은 학습 도구, PowerPoint와 Word 내보내기가 나와 있습니다. 다이어그램과 자동화는 출시 예정으로 표시됩니다.',
          '스페인 카르타헤나의 Edunexis SL이 [GreenCube](https://greencube.app)라는 제품명으로 게시합니다. 개발자의 FAQ는 장단점을 솔직히 밝힙니다. 가장 큰 클라우드 AI가 더 똑똑하며, GreenCube는 대신 무제한, 오프라인 사용, 소유를 제공한다는 것입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**GreenCube는 일반 Windows 설치 프로그램을 내려받는 방식이며, 자료에는 터미널 단계 없이 로그인과 한 번의 모델 다운로드만 나옵니다.**',
        ],
        columns: ['항목', '세부 내용'],
        rows: [
          { '항목': '플랫폼', '세부 내용': 'Windows 10, 11' },
          { '항목': '다운로드', '세부 내용': '[GreenCube-setup.exe](https://greencube.app/download)' },
          { '항목': '가격', '세부 내용': '€9.99(US$9.99), 1회 결제' },
          { '항목': '웹사이트', '세부 내용': '[greencube.app](https://greencube.app)' },
          { '항목': '개인정보 처리방침', '세부 내용': '[GreenCube 개인정보 처리방침](https://legal.greencube.app/privacy)' },
          { '항목': '소스 코드', '세부 내용': '앱의 소스 코드는 찾지 못했습니다' },
        ],
        note: '확인한 버전: 0.1.47, 개발자의 [업데이트 피드](https://models.greencube.app/updates/latest.json)에 따르면 2026년 10월 17일에 공개되었습니다. 구매 페이지의 구조화 데이터에는 "1.0"으로 되어 있어 피드와 일치하지 않으며, 이 리뷰는 사용자가 실제로 받는 빌드를 설명하는 피드를 따릅니다. 개발자의 GitHub 조직에서 공개된 저장소는 웹사이트용 하나뿐이며 앱의 저장소는 아닙니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항과 하드웨어 등급',
        content: [
          '**GreenCube에는 Windows 10 또는 11과 약 8GB의 RAM이 필요하며, 메모리가 실행 가능한 범위를, 그래픽 카드가 실행 속도를 좌우합니다.**',
        ],
        columns: ['등급', '웹사이트의 설명'],
        rows: [
          { '등급': 'Seed', '웹사이트의 설명': 'RAM 약 8GB, 그래픽 카드 없음' },
          { '등급': 'Sprout', '웹사이트의 설명': '카드 없이 RAM 16GB 이상, 또는 카드와 함께 8GB' },
          { '등급': 'Bloom', '웹사이트의 설명': '8GB 이상의 카드, 또는 RAM 16GB와 4GB 카드' },
          { '등급': 'Thrive', '웹사이트의 설명': '8GB 이상의 카드와 RAM 24GB 이상' },
        ],
        note: '그래픽 카드가 없어도 작동하지만 더 느립니다. 이미지 생성에는 RAM이 최소 12GB 필요합니다. 설치 프로그램은 14.1MB이며, 모델 다운로드가 수 기가바이트 더해집니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 개발자의 웹사이트를 따른 것이며, PromptQuorum이 직접 실행해 본 것은 아닙니다.**',
        ],
        numberedItems: [
          {
            title: '라이선스 구매',
            whyItMatters: '[구매 페이지](https://greencube.app/buy)에서 한 번 결제합니다. 계정은 결제 확인에 쓰입니다.',
          },
          {
            title: '앱 설치',
            whyItMatters: 'RAM 8GB 이상의 Windows 10 또는 11 PC에서 Windows 설치 프로그램을 내려받아 실행합니다.',
          },
          {
            title: '로그인 후 모델 다운로드',
            whyItMatters: 'Google 또는 Microsoft로 로그인하면 앱이 하드웨어 등급에 맞는 모델을 내려받으며, 용량은 수 기가바이트입니다.',
          },
          {
            title: '오프라인으로 사용',
            whyItMatters: '다운로드가 끝나면 채팅, 코딩, 파일 읽기가 연결 없이 실행됩니다.',
          },
          {
            title: '온라인 옵션 결정',
            whyItMatters: '웹 검색이 필요할 때만 온라인 옵션을 켜십시오. 그렇지 않으면 꺼져 있습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '자료로 확인된 기능',
        content: [
          '**아래 항목은 모두 개발자의 웹사이트에서 가져왔습니다.**',
        ],
        items: [
          '**채팅과 파일.** 채팅, 그리고 PDF, 사진, 스크린샷 읽기.',
          '**코드와 웹 페이지.** 설명만으로 앱, 사이트, 게임을 만듭니다.',
          '**이미지.** RAM이 최소 12GB인 기기에서 이미지를 생성합니다.',
          '**학습과 내보내기.** 플래시카드, 퀴즈, 표, PowerPoint 및 Word 내보내기.',
          '**언어.** 웹사이트 자체는 약 20개 언어로 제공되지만, 모델이 어떤 언어에서 답변을 잘하는지는 나와 있지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 콘텐츠 정책',
        content: [
          '**개인정보 처리방침에 따르면 대화, 문서, 이미지, 기억, 설정은 내 컴퓨터에서 생성·저장되며, 개발자는 이를 전혀 받지 않는다고 밝힙니다.** 회사가 다루는 정보는 구매(이메일, 이름, 청구 국가, Stripe를 통한 결제 정보), Google 또는 Microsoft 로그인, 모델이나 업데이트를 가져올 때의 다운로드 서버 로그입니다. 구매 기록은 스페인 세법에 따라 6년간 보관됩니다.',
          '앱은 PC에 진단 로그를 남기며, 이 로그는 대화를 제외하도록 설계되었지만 파일 이름은 나타날 수 있고, 직접 보낼 때만 개발자에게 전달됩니다. 콘텐츠에 대해 웹사이트는 GreenCube가 자체 필터를 추가하지 않고, 모델을 재학습시키지 않은 채 솔직하게 답하도록 유도한다고 설명합니다. 따라서 모델이 여전히 거부할 수 있으며, 사람에 대한 위해, 아동 착취, 절도, 계정 침입은 돕지 않고, 솔직한 답변 설정은 끌 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자 본인의 설명이며, PromptQuorum은 앱의 네트워크 트래픽을 감사하거나 다른 정보가 PC 밖으로 나가지 않는다는 것을 확인하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**구독이 싫은 Windows 사용자**로, 로컬 어시스턴트에 한 번만 결제하고 싶은 분.',
          '**자신의 파일에 대해 질문하고 싶은 분**으로, 개발자에 따르면 파일을 업로드하지 않아도 됩니다.',
          '**일반적인 PC를 가진 분**. 가장 낮은 등급은 RAM 8GB에 그래픽 카드가 필요 없기 때문입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 점',
        items: [
          '**직접 써 본 품질.** PromptQuorum은 앱을 실행하지 않았으므로 답변 품질, 속도, 이미지 결과는 평가하지 않았습니다.',
          '**런타임과 모델.** Gemma 4 E2B와 E4B만 언급되며, 추론 엔진이나 다른 모델을 밝힌 공개 자료는 없습니다.',
          '**버전과 연혁.** 피드에는 0.1.47, 구매 페이지에는 1.0으로 되어 있고, 변경 이력이나 릴리스 기록은 공개되어 있지 않습니다.',
          '**독립적인 검증.** 앱의 소스 코드는 공개되어 있지 않고, 네트워크 트래픽이나 콘텐츠 설정에 대한 제3자 리뷰도 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이점'],
        rows: [
          { '앱': '[GPT4All](/ko/power-local-llm/gpt4all-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '주요 차이점': 'CPU만으로도 잘 작동하는 초보자 친화적 오픈소스 데스크톱 채팅' },
          { '앱': '[Jan](/ko/power-local-llm/jan-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / Apache 2.0(변형)', '주요 차이점': '자체 엔진을 쓰는 프라이버시 중심 오픈소스 오프라인 채팅 클라이언트' },
          { '앱': '[Msty](/ko/power-local-llm/msty-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '프리미엄 / 클로즈드 소스', '주요 차이점': '여러 제공자를 지원하는 일반 사용자용 데스크톱 클라이언트, 로컬 또는 클라우드' },
          { '앱': '[Hanoki](/ko/power-local-llm/hanoki-review)', '플랫폼': 'macOS', '가격 / 라이선스': '프리미엄 / MIT', '주요 차이점': 'Ollama나 클라우드 API로 쓰는 Mac용 분기형 채팅, Windows 버전은 없음' },
        ],
        note: '경쟁 앱의 정보는 자주 바뀌므로, 현재 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '환불이 가능합니까?',
            a: '웹사이트에 따르면 15일 이내에 마음이 바뀌면 support@greencube.app으로 이메일을 보내 전액 환불받을 수 있습니다.',
          },
          {
            q: '왜 계정이 필요합니까?',
            a: '웹사이트에 따르면 결제를 확인하기 위한 것일 뿐이며, 계정은 채팅, 파일, 이미지에 쓰이지 않습니다.',
          },
          {
            q: '먼저 무료로 써 볼 수 있습니까?',
            a: '자료에는 무료 등급이나 체험판이 나오지 않으며, 안전장치로 명시된 것은 환불 기간입니다.',
          },
          {
            q: '프로 버전이 있습니까?',
            a: '없습니다. 웹사이트에 따르면 버전은 하나, 가격도 하나이며, 더 빠른 컴퓨터는 같은 앱을 더 빠르게 실행할 뿐입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'GreenCube는 개발자의 설명에 따르면 Gemma 4를 내 PC에서 실행하고, 처음 다운로드한 뒤에는 오프라인으로 작동하며, 한 번만 결제하는 Windows 데스크톱 AI입니다. 반면 Windows 전용이고, 클로즈드 소스이며, 아직 0.x 버전이고, PromptQuorum은 품질과 네트워크 동작을 확인하지 못했습니다. 구독을 피하고 싶고 이러한 한계를 받아들일 수 있는 Windows 사용자에게 적합하며, 오픈소스 코드를 원하는 독자는 [GPT4All](/ko/power-local-llm/gpt4all-review)이나 [Jan](/ko/power-local-llm/jan-review)을 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GreenCube 웹사이트](https://greencube.app) — 제품 개요, 가격, 하드웨어 등급, FAQ. 2026년 10월 30일 확인.',
          '[GreenCube 구매 페이지](https://greencube.app/buy) — 가격, 환불 기간, 구조화 데이터.',
          '[GreenCube 업데이트 피드](https://models.greencube.app/updates/latest.json) — 버전 0.1.47, 2026년 10월 17일 공개.',
          '[GreenCube 개인정보 처리방침](https://legal.greencube.app/privacy) — 데이터 처리와 법적 근거, 2026년 10월 13일 시행.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[GPT4All 리뷰](/ko/power-local-llm/gpt4all-review) — 오픈소스 데스크톱 채팅 앱.',
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 자체 엔진을 쓰는 오픈소스 데스크톱 앱.',
          '[Msty 리뷰](/ko/power-local-llm/msty-review) — 로컬 및 클라우드 모델용 데스크톱 클라이언트.',
          '[로컬 LLM 채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 채팅 앱 카테고리 비교.',
        ],
      },
    },
  },
}
