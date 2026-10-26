// Immich Review: Self-Hosted Photo Library with Smart Search on Your Own Server
// Slug: immich-review
// Companion to: photoprism-review, ente-photos-review, pixlstash-review
// Sources (all read 2026-10-26, no hands-on testing): immich.app and its privacy policy (last updated 2026-04-06; text read from the site's JS bundle because the page
// renders client-side), docs.immich.app (introduction, requirements, Docker Compose, smart search, facial recognition, searching, reverse geocoding, ML hardware
// acceleration, system settings, environment variables, FAQ, support-the-project), the GitHub repo and Releases API (immich-app/immich: v3.3.5 published
// 2026-10-21, last push 2026-10-26, AGPL-3.0), the App Store record (id1613945652, seller FUTO Holdings, Inc., v3.3.5 released 2026-10-21) and the Google Play listing
// (app.alextran.immich, "Updated on Oct 20, 2026", 500K+ downloads). The request came from the site owner (link from localhosted.com), not from the Immich team: no maker comment exists.
// Immich is NOT an LLM app: it has no chat or LLM feature in the docs read. Its "AI" is CLIP smart search and face recognition in a separate machine-learning container.
// Last upstream update 2026-10-26 => no stale warning. The Purchase page (buy.immich.app) is client-rendered and unreadable here, so no purchase prices are stated.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Image & Video Generation',
    heroImage: '/images/immich-review-hero-en.webp',
    title: 'Immich Review: Self-Hosted Photo Library with Smart Search',
    seoTitle: 'Immich Review: Self-Hosted Photo Library, Smart Search',
    intro:
      'Immich is a free, open-source photo and video backup server with iPhone and Android apps, and its smart search and face recognition run on a machine-learning container on your own hardware. It is not a chat or LLM app: the AI is CLIP-style image search and face grouping. This review reflects its documentation, GitHub releases, store listings and privacy policy as checked on 26 October 2026.',
    metaDescription:
      'Immich review: free AGPL photo and video backup server with iPhone and Android apps, CLIP smart search and face recognition on your own server. Setup and privacy.',
    twitterDescription:
      'Immich review: a self-hosted, AGPL-licensed photo library whose smart search and face recognition run on your server. Docker setup, requirements, outbound requests and what we could not verify.',
    audience:
      'Self-hosters who want to replace a cloud photo service with their own server, and who need to know the setup effort, the hardware, what AI runs where and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Immich review',
    targetKeywords: [
      'immich review',
      'self-hosted google photos alternative',
      'immich smart search clip',
      'immich facial recognition',
      'immich docker compose setup',
      'private photo backup server',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi'],
    leadAnswerBlock:
      '**Immich (v3.3.5 as of 26 October 2026) is a free, AGPL-3.0 photo and video backup server with iPhone, Android and browser clients, whose smart search and face recognition run on a machine-learning container you host yourself.** It is installed with Docker Compose, and its own docs warn that the database holds only metadata, so your files need a separate backup. It contains no chat or LLM feature.',
    quickAnswerTop: {
      en: {
        question: 'Does Immich keep your photos and AI search on your own server?',
        answer:
          'Per its docs, yes: photos, the database and the machine-learning container live on your hardware, and the models are downloaded once. A few optional services reach outside, such as a version check and a map tile server. PromptQuorum has not inspected the network traffic.',
        bullets: [
          'Free and open source (AGPL-3.0); the docs say no feature will be put behind a paywall.',
          'Server on Docker; apps on the [App Store](https://apps.apple.com/us/app/immich/id1613945652) and [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich), plus any browser.',
          'Smart search uses CLIP models; faces are detected, grouped into people and searchable.',
          'Minimum 6 GB RAM and 2 CPU cores; the ML container can run on another machine.',
          'Not an LLM app: there is no chat, summary or caption generation in the docs read.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Immich?', anchor: 'what-is-immich' },
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
            text: 'Immich is an open-source, self-hosted photo and video library with phone apps that searches pictures by content and groups faces using machine-learning models on your own server.',
          },
          {
            type: 'plain-terms',
            text: 'You run Immich on a home server or NAS, your phone uploads its photos there automatically, and you search them by typing what is in the picture or by picking a person.',
          },
        ],
        items: [
          'Maintenance: version v3.3.5 was released on 21 October 2026 and the repository received commits on 26 October 2026, so no stale-project warning applies.',
          'Operator: the App Store lists FUTO Holdings, Inc. as the seller; the code is on GitHub under AGPL-3.0.',
          'Setup: a Docker Compose server install with an environment file to edit; the phone apps are store installs but need that server.',
          'Cost: free; buying a licence is voluntary support according to the docs.',
          'Scope: photo and video management with image-based AI; there is no language-model chat.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project\'s website, documentation, privacy policy, GitHub repository and store listings, checked on 26 October 2026. PromptQuorum has not installed Immich, so search quality, face-grouping accuracy and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-immich',
        title: 'What Is Immich?',
        content: [
          '**Immich is a self-hosted application for backing up, browsing and searching photos and videos from your phone on a server you control.** The GitHub README calls it a "high performance self-hosted photo and video management solution"; the code is open source under the AGPL-3.0 licence.',
          'The App Store lists FUTO Holdings, Inc. as the seller. The apps back up a phone\'s camera roll to your server, and the web interface adds albums, sharing, a map and administration. The docs describe the AI parts as a separate machine-learning service the server sends images to.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Immich is a server you install yourself; the documented route is Docker Compose, and the iPhone and Android apps are ordinary store installs that connect to that server.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Server (Docker Compose)', 'How to get it': '[Install guide](https://docs.immich.app/install/docker-compose): download two files, edit one, run one command' },
          { 'Option': 'iPhone and iPad', 'How to get it': '[App Store](https://apps.apple.com/us/app/immich/id1613945652) (free, iOS 15.0 or later)' },
          { 'Option': 'Android', 'How to get it': '[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich), or the APK in the [GitHub releases](https://github.com/immich-app/immich/releases)' },
          { 'Option': 'Browser', 'How to get it': 'Any browser at your server\'s address on port 2283, per the docs' },
          { 'Option': 'Website', 'How to get it': '[immich.app](https://immich.app)' },
          { 'Option': 'Privacy policy', 'How to get it': '[immich.app/privacy-policy](https://immich.app/privacy-policy) (last updated 6 April 2026)' },
          { 'Option': 'Source code', 'How to get it': '[github.com/immich-app/immich](https://github.com/immich-app/immich)' },
          { 'Option': 'Demo', 'How to get it': '[demo.immich.app](https://demo.immich.app), with the login in the README' },
        ],
        note: 'Version reviewed: v3.3.5, published on 21 October 2026 per the GitHub release and the App Store record; the Google Play page shows an update on 20 October 2026. Installing needs a terminal and Docker, so this is a developer-style setup rather than a double-click install. The docs ask you to keep the mobile app and the server on the same major and minor version.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The docs ask for at least 6 GB of RAM and 2 CPU cores, and recommend 8 GB and 4 cores.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Memory', 'What the sources say': 'Minimum 6 GB, recommended 8 GB; with only 4 GB you can run it with machine learning disabled' },
          { 'Item': 'CPU', 'What the sources say': '2 cores minimum, 4 recommended; amd64 and arm64; the ML container needs the x86-64-v2 level since v3' },
          { 'Item': 'Operating system', 'What the sources say': '64-bit Linux recommended; macOS and Windows via Docker Desktop are possible but discouraged, with limited support' },
          { 'Item': 'Storage', 'What the sources say': 'Unix-compatible filesystem; thumbnails and transcodes add 10-20%; the database should sit on a local SSD, not a network share' },
          { 'Item': 'Docker', 'What the sources say': 'Docker with the Compose plugin; the old docker-compose command is not supported' },
          { 'Item': 'GPU', 'What the sources say': 'Optional for the ML container; the docs call the acceleration experimental' },
          { 'Item': 'Phone', 'What the sources say': 'iOS 15.0 or later per the App Store; Android requirement not read' },
        ],
        note: 'These minimums come from the project\'s docs; PromptQuorum did not measure indexing time or memory use on any hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow the project\'s Docker Compose guide; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Download the compose file',
            whyItMatters: 'Create a folder, then download docker-compose.yml and the example.env template from the latest release into it.',
          },
          {
            title: 'Edit the environment file',
            whyItMatters: 'Set UPLOAD_LOCATION to a folder with enough space and change DB_PASSWORD to a new value using only letters and digits.',
          },
          {
            title: 'Start the containers',
            whyItMatters: 'Run docker compose up -d in that folder, open the server in a browser and register; the first user becomes the admin.',
          },
          {
            title: 'Connect your phone',
            whyItMatters: 'Install the app, enter your server address, pick the albums to back up and watch progress in the Job Queues tab.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Key Features',
        content: [
          '**Every item below comes from the project\'s README or documentation; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Backup.** Automatic and background backup from the phone, selective albums, duplicate prevention and a command-line uploader.',
          '**Library.** Albums, shared albums, partner sharing, public links, a map, memories, stacks, tags, a folder view and RAW support.',
          '**Search.** Contextual (CLIP) search plus filters for people, places, file name, description, tags, camera, dates and star rating; the docs list text in images (OCR) as a search type.',
          '**Accounts.** Multiple users, OAuth sign-in and API keys; the first registered user is the admin.',
          '**Import.** immich-go for Google Takeout and External Libraries for archives that already sit on disk.',
        ],
        note: 'The README feature table marks some items as web-only or mobile-only, for example tags and administration on the web and offline support on mobile.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI Features and Where They Run',
        content: [
          '**The AI is image-based: CLIP models for smart search and models for face detection and recognition, all run by a machine-learning container; no language model is involved.**',
        ],
        items: [
          '**Smart search.** Freeform queries are matched against CLIP embeddings stored in Postgres through the VectorChord extension; you pick the model under Administration, and the default is the fastest one.',
          '**Languages.** The docs say nllb models expect queries in the language set in user settings, while xlm and siglip2 models handle text in any language.',
          '**Faces.** Detection runs on the preview image, a recognition model produces embeddings, and DBSCAN clustering groups them into people you can name.',
          '**Hosting.** The built-in ML service is configured by default, and the FAQ says it can run on a more powerful machine instead.',
          '**GPU.** CUDA, ROCm, OpenVINO, ARM NN and RKNN backends exist; the docs call the feature experimental, CUDA the most reliable and ROCm new.',
        ],
        note: 'These are the project\'s own statements. PromptQuorum did not test search relevance, face-grouping accuracy or speed.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The docs say that once a smart-search model is downloaded, Immich needs no network connection unless the version check is enabled, and that reverse geocoding runs on your own server from GeoNames data.** Photos and the database therefore stay on your hardware unless you share them.',
          'Outside requests named in the sources: model downloads from Hugging Face, the optional version check to GitHub, and map tiles. The privacy policy, last updated on 6 April 2026, lists a Tile Server and a Version Service that log request metadata (the requested tile or the user agent, the IP address and timing); it says the tile server is optional and can be disabled. Server-side email goes through an SMTP server you configure.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s declarations, not audit results. The docs and the policy name different services for the version check, and PromptQuorum has not inspected network traffic or the source code.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Self-hosters with a Docker server or NAS** who want a private replacement for a cloud photo service.',
          '**Families and small groups** who want one library with separate accounts, shared albums and phone backup.',
          '**People with large camera-roll archives** who need search by content and by person.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**AI quality.** Search relevance, face-grouping accuracy and speed were not tested; the docs\' benchmark figures come from one test system.',
          '**Backups.** The docs warn that the database holds only metadata and that you must back up the upload folder yourself, and the README asks for a 3-2-1 backup plan.',
          '**Trash behaviour.** The FAQ says original files that were trashed are deleted when the trash is emptied in Immich.',
          '**Purchase terms.** The purchase page could not be read, so prices are not stated; the docs say purchasing is voluntary support.',
          '**Mobile details.** The Android version requirement and the stores\' data-safety sections were not read.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory has two other photo-library tools with a review, one self-hosted and one cloud-based.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[PhotoPrism](/power-local-llm/photoprism-review)', 'Platforms': 'Server (Docker), browser', 'Price / license': 'Free Community / AGPL-3.0', 'Key difference': 'Self-hosted like Immich, but web-app only; its phone apps come from other developers' },
          { 'App': '[Ente Photos](/power-local-llm/ente-photos-review)', 'Platforms': 'iOS, Android, desktop, web', 'Price / license': 'Free 10 GB, paid plans / AGPL-3.0', 'Key difference': 'Encrypted cloud storage with on-device AI; no server of your own' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Immich a local LLM?',
            a: 'No. The docs describe CLIP image search and face recognition, not a language model, and the sources read contain no chat or caption-writing feature.',
          },
          {
            q: 'Does Immich work without a GPU?',
            a: 'The docs list GPU acceleration as optional and experimental, and the minimum requirements name only RAM and CPU cores; speed on a CPU was not measured.',
          },
          {
            q: 'Can I move over from Google Photos?',
            a: 'The introduction page points to immich-go for Google Takeout exports; PromptQuorum did not try a migration.',
          },
          {
            q: 'How do I update Immich?',
            a: 'The install guide refers to separate upgrade instructions, and the FAQ asks you to keep the app and the server on the same major and minor version.',
          },
          {
            q: 'Where are my files kept?',
            a: 'In the folder set as UPLOAD_LOCATION; the database in the Postgres container holds metadata and user information only.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Immich is a free, actively updated way to keep a searchable photo library with phone backup on hardware you control, with content search and face grouping that run on your own server. Against that, setup needs Docker and an environment file, GPU acceleration is labelled experimental, and none of the AI quality claims could be checked here. It suits people who already run services at home or on a NAS; anyone who wants a double-click app or a language-model assistant should look elsewhere.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Immich website](https://immich.app) — platforms, links and privacy policy, checked 26 October 2026.',
          '[Immich documentation](https://docs.immich.app) — requirements, install guide, smart search, facial recognition, system settings and FAQ, checked 26 October 2026.',
          '[Immich privacy policy](https://immich.app/privacy-policy) — locally stored data, tile server and version service, last updated 6 April 2026.',
          '[Immich on GitHub](https://github.com/immich-app/immich) — README, releases and commit activity, checked 26 October 2026.',
          '[Immich on the App Store](https://apps.apple.com/us/app/immich/id1613945652) and [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) — seller, version and update dates, checked 26 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PhotoPrism Review](/power-local-llm/photoprism-review) — another self-hosted photo library with built-in AI labels.',
          '[Ente Photos Review](/power-local-llm/ente-photos-review) — encrypted photo backup with on-device face and natural-language search.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Immich Review: Self-Hosted Photo Library with Smart Search',
      description:
        'Immich review: a free, open-source photo and video backup server with phone apps, CLIP smart search and face recognition on your own server. Setup, requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/immich-review',
      inLanguage: 'en',
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Self-hosters evaluating a private photo library with on-server AI search' },
      about: [
        { '@type': 'Thing', name: 'Immich' },
        { '@type': 'Thing', name: 'Self-hosted photo library' },
        { '@type': 'Thing', name: 'Face recognition' },
        { '@type': 'Thing', name: 'Docker' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/immich-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Immich Review', item: 'https://www.promptquorum.com/power-local-llm/immich-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Image & Video Generation',
    heroImage: '/images/immich-review-hero-de.webp',
    title: 'Immich-Rezension: selbst gehostete Fotobibliothek mit KI-Suche',
    seoTitle: 'Immich-Rezension: Fotobibliothek selbst hosten, KI-Suche',
    intro:
      'Immich ist ein kostenloser, quelloffener Foto- und Video-Backup-Server mit Apps für iPhone und Android; Smart Search und Gesichtserkennung laufen in einem Machine-Learning-Container auf Ihrer eigenen Hardware. Es ist keine Chat- oder LLM-App: Die KI besteht aus einer CLIP-artigen Bildsuche und der Gruppierung von Gesichtern. Diese Rezension stützt sich auf Dokumentation, GitHub-Releases, Store-Einträge und Datenschutzerklärung, geprüft am 26. Oktober 2026.',
    metaDescription:
      'Immich-Rezension: kostenloser AGPL-Server für Foto-Backup mit iPhone- und Android-App, CLIP-Suche und Gesichtserkennung auf Ihrem Server. Datenschutz.',
    twitterDescription:
      'Immich-Rezension: eine selbst gehostete, AGPL-lizenzierte Fotobibliothek, deren Smart Search und Gesichtserkennung auf Ihrem Server laufen. Docker-Einrichtung, Anforderungen, ausgehende Anfragen und was wir nicht überprüfen konnten.',
    audience:
      'Selbsthoster, die einen Cloud-Fotodienst durch einen eigenen Server ersetzen möchten und wissen müssen, wie aufwendig die Einrichtung ist, welche Hardware nötig ist, welche KI wo läuft und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Immich Rezension',
    targetKeywords: [
      'immich rezension',
      'google fotos alternative selbst hosten',
      'immich smart search clip',
      'immich gesichtserkennung',
      'immich docker compose einrichtung',
      'private foto-backup-server',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi'],
    leadAnswerBlock:
      '**Immich (v3.3.5, Stand 26. Oktober 2026) ist ein kostenloser Foto- und Video-Backup-Server unter AGPL-3.0 mit Clients für iPhone, Android und Browser, dessen Smart Search und Gesichtserkennung in einem Machine-Learning-Container laufen, den Sie selbst betreiben.** Die Installation erfolgt mit Docker Compose, und laut eigener Dokumentation enthält die Datenbank nur Metadaten, sodass Ihre Dateien eine separate Sicherung brauchen. Eine Chat- oder LLM-Funktion enthält Immich nicht.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben Ihre Fotos und die KI-Suche bei Immich auf Ihrem eigenen Server?',
        answer:
          'Laut Dokumentation ja: Fotos, Datenbank und Machine-Learning-Container liegen auf Ihrer Hardware, und die Modelle werden einmalig heruntergeladen. Einige optionale Dienste greifen nach außen, etwa die Versionsprüfung und ein Kartenkachel-Server. PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
        bullets: [
          'Kostenlos und quelloffen (AGPL-3.0); laut Dokumentation wird keine Funktion hinter eine Bezahlschranke gestellt.',
          'Server unter Docker; Apps im [App Store](https://apps.apple.com/us/app/immich/id1613945652) und bei [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich), dazu jeder Browser.',
          'Smart Search nutzt CLIP-Modelle; Gesichter werden erkannt, zu Personen gruppiert und sind durchsuchbar.',
          'Mindestens 6 GB RAM und 2 CPU-Kerne; der ML-Container kann auf einem anderen Rechner laufen.',
          'Keine LLM-App: In der gelesenen Dokumentation gibt es weder Chat noch Zusammenfassungen oder erzeugte Bildbeschreibungen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Immich?', anchor: 'what-is-immich' },
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
            text: 'Immich ist eine quelloffene, selbst gehostete Foto- und Videobibliothek mit Smartphone-Apps, die Bilder mithilfe von Machine-Learning-Modellen auf Ihrem eigenen Server nach Inhalt durchsucht und Gesichter gruppiert.',
          },
          {
            type: 'plain-terms',
            text: 'Sie betreiben Immich auf einem Heimserver oder NAS, Ihr Smartphone lädt seine Fotos automatisch dorthin hoch, und Sie suchen darin, indem Sie eintippen, was auf dem Bild zu sehen ist, oder eine Person auswählen.',
          },
        ],
        items: [
          'Pflege: Version v3.3.5 erschien am 21. Oktober 2026, und das Repository erhielt am 26. Oktober 2026 Commits; eine Warnung vor einem veralteten Projekt entfällt daher.',
          'Betreiber: Der App Store nennt FUTO Holdings, Inc. als Verkäufer; der Code liegt unter AGPL-3.0 auf GitHub.',
          'Einrichtung: eine Server-Installation mit Docker Compose und einer zu bearbeitenden Umgebungsdatei; die Smartphone-Apps sind normale Store-Installationen, brauchen aber diesen Server.',
          'Kosten: kostenlos; der Kauf einer Lizenz ist laut Dokumentation eine freiwillige Unterstützung.',
          'Umfang: Foto- und Videoverwaltung mit bildbasierter KI; einen Chat mit einem Sprachmodell gibt es nicht.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Website, Dokumentation, Datenschutzerklärung, GitHub-Repository und Store-Einträge des Projekts, geprüft am 26. Oktober 2026. PromptQuorum hat Immich nicht installiert; Suchqualität, Treffsicherheit der Gesichtsgruppierung und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-immich',
        title: 'Was ist Immich?',
        content: [
          '**Immich ist eine selbst gehostete Anwendung, um Fotos und Videos Ihres Smartphones auf einem Server unter Ihrer Kontrolle zu sichern, zu durchstöbern und zu durchsuchen.** Die GitHub-README nennt es eine „high performance self-hosted photo and video management solution“; der Code ist quelloffen unter der Lizenz AGPL-3.0.',
          'Der App Store nennt FUTO Holdings, Inc. als Verkäufer. Die Apps sichern die Kamerarolle eines Smartphones auf Ihrem Server, und die Weboberfläche ergänzt Alben, Freigaben, eine Karte und die Administration. Die Dokumentation beschreibt die KI-Teile als separaten Machine-Learning-Dienst, an den der Server Bilder schickt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Immich ist ein Server, den Sie selbst installieren; dokumentiert ist der Weg über Docker Compose, und die Apps für iPhone und Android sind gewöhnliche Store-Installationen, die sich mit diesem Server verbinden.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'Server (Docker Compose)', 'Bezug': '[Installationsanleitung](https://docs.immich.app/install/docker-compose): zwei Dateien laden, eine bearbeiten, einen Befehl ausführen' },
          { 'Option': 'iPhone und iPad', 'Bezug': '[App Store](https://apps.apple.com/us/app/immich/id1613945652) (kostenlos, iOS 15.0 oder neuer)' },
          { 'Option': 'Android', 'Bezug': '[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) oder die APK auf der [GitHub-Release-Seite](https://github.com/immich-app/immich/releases)' },
          { 'Option': 'Browser', 'Bezug': 'Jeder Browser unter der Adresse Ihres Servers auf Port 2283, laut Dokumentation' },
          { 'Option': 'Website', 'Bezug': '[immich.app](https://immich.app)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': '[immich.app/privacy-policy](https://immich.app/privacy-policy) (zuletzt aktualisiert am 6. April 2026)' },
          { 'Option': 'Quellcode', 'Bezug': '[github.com/immich-app/immich](https://github.com/immich-app/immich)' },
          { 'Option': 'Demo', 'Bezug': '[demo.immich.app](https://demo.immich.app), mit den Zugangsdaten in der README' },
        ],
        note: 'Geprüfte Version: v3.3.5, laut GitHub-Release und App-Store-Eintrag am 21. Oktober 2026 veröffentlicht; die Google-Play-Seite zeigt eine Aktualisierung am 20. Oktober 2026. Die Installation erfordert ein Terminal und Docker, es handelt sich also um eine Einrichtung im Entwicklerstil und nicht um eine Installation per Doppelklick. Die Dokumentation bittet darum, die mobile App und den Server auf derselben Haupt- und Nebenversion zu halten.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die Dokumentation verlangt mindestens 6 GB RAM und 2 CPU-Kerne und empfiehlt 8 GB und 4 Kerne.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Arbeitsspeicher', 'Angaben der Quellen': 'Mindestens 6 GB, empfohlen 8 GB; mit nur 4 GB lässt sich Immich mit deaktiviertem Machine Learning betreiben' },
          { 'Punkt': 'CPU', 'Angaben der Quellen': 'Mindestens 2 Kerne, empfohlen 4; amd64 und arm64; der ML-Container benötigt seit v3 die Stufe x86-64-v2' },
          { 'Punkt': 'Betriebssystem', 'Angaben der Quellen': '64-Bit-Linux empfohlen; macOS und Windows über Docker Desktop sind möglich, werden aber nicht empfohlen und nur eingeschränkt unterstützt' },
          { 'Punkt': 'Speicher', 'Angaben der Quellen': 'Unix-kompatibles Dateisystem; Vorschaubilder und Transkodierungen kommen mit 10–20 % hinzu; die Datenbank gehört auf eine lokale SSD, nicht auf eine Netzwerkfreigabe' },
          { 'Punkt': 'Docker', 'Angaben der Quellen': 'Docker mit dem Compose-Plugin; der alte Befehl docker-compose wird nicht unterstützt' },
          { 'Punkt': 'GPU', 'Angaben der Quellen': 'Für den ML-Container optional; die Dokumentation nennt die Beschleunigung experimentell' },
          { 'Punkt': 'Smartphone', 'Angaben der Quellen': 'iOS 15.0 oder neuer laut App Store; die Android-Anforderung wurde nicht gelesen' },
        ],
        note: 'Diese Mindestwerte stammen aus der Dokumentation des Projekts; PromptQuorum hat weder Indexierungsdauer noch Speicherbedarf auf irgendeiner Hardware gemessen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Docker-Compose-Anleitung des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Compose-Datei laden',
            whyItMatters: 'Legen Sie einen Ordner an und laden Sie docker-compose.yml sowie die Vorlage example.env aus dem neuesten Release dort hinein.',
          },
          {
            title: 'Umgebungsdatei anpassen',
            whyItMatters: 'Setzen Sie UPLOAD_LOCATION auf einen Ordner mit ausreichend Platz und ändern Sie DB_PASSWORD auf einen neuen Wert, der nur Buchstaben und Ziffern enthält.',
          },
          {
            title: 'Container starten',
            whyItMatters: 'Führen Sie in diesem Ordner docker compose up -d aus, öffnen Sie den Server im Browser und registrieren Sie sich; der erste Benutzer wird zum Admin.',
          },
          {
            title: 'Smartphone verbinden',
            whyItMatters: 'Installieren Sie die App, geben Sie Ihre Serveradresse ein, wählen Sie die zu sichernden Alben aus und verfolgen Sie den Fortschritt im Reiter Job Queues.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Alles Folgende stammt aus der README oder der Dokumentation des Projekts; PromptQuorum hat nichts davon getestet.**',
        ],
        items: [
          '**Backup.** Automatische Sicherung im Hintergrund vom Smartphone, Auswahl einzelner Alben, Vermeidung von Duplikaten und ein Kommandozeilen-Uploader.',
          '**Bibliothek.** Alben, geteilte Alben, Partnerfreigabe, öffentliche Links, eine Karte, Rückblicke („Memories“), Stapel, Tags, eine Ordneransicht und RAW-Unterstützung.',
          '**Suche.** Kontextsuche (CLIP) sowie Filter für Personen, Orte, Dateiname, Beschreibung, Tags, Kamera, Datum und Sternebewertung; die Dokumentation führt Text in Bildern (OCR) als Suchtyp auf.',
          '**Konten.** Mehrere Benutzer, Anmeldung über OAuth und API-Schlüssel; der erste registrierte Benutzer ist der Admin.',
          '**Import.** immich-go für Google-Takeout-Exporte und External Libraries für Archive, die bereits auf der Festplatte liegen.',
        ],
        note: 'Die Funktionstabelle der README kennzeichnet einige Punkte als nur im Web oder nur mobil verfügbar, etwa Tags und Administration im Web sowie Offline-Unterstützung mobil.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'KI-Funktionen und wo sie laufen',
        content: [
          '**Die KI ist bildbasiert: CLIP-Modelle für Smart Search sowie Modelle für Gesichtserkennung und -wiedererkennung, die alle ein Machine-Learning-Container ausführt; ein Sprachmodell kommt nicht zum Einsatz.**',
        ],
        items: [
          '**Smart Search.** Freie Suchanfragen werden mit CLIP-Embeddings abgeglichen, die über die Erweiterung VectorChord in Postgres gespeichert sind; das Modell wählen Sie unter Administration, standardmäßig ist es das schnellste.',
          '**Sprachen.** Laut Dokumentation erwarten nllb-Modelle Suchanfragen in der Sprache aus den Benutzereinstellungen, während xlm- und siglip2-Modelle Text in jeder Sprache verarbeiten.',
          '**Gesichter.** Die Erkennung läuft auf dem Vorschaubild, ein Wiedererkennungsmodell erzeugt Embeddings, und ein DBSCAN-Clustering gruppiert sie zu Personen, die Sie benennen können.',
          '**Betrieb.** Der integrierte ML-Dienst ist standardmäßig konfiguriert, und laut FAQ kann er stattdessen auf einem leistungsstärkeren Rechner laufen.',
          '**GPU.** Es gibt Backends für CUDA, ROCm, OpenVINO, ARM NN und RKNN; die Dokumentation nennt die Funktion experimentell, CUDA am zuverlässigsten und ROCm neu.',
        ],
        note: 'Dies sind Aussagen des Projekts. PromptQuorum hat weder Suchrelevanz noch Treffsicherheit der Gesichtsgruppierung oder Geschwindigkeit getestet.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Laut Dokumentation braucht Immich nach dem Download eines Smart-Search-Modells keine Netzwerkverbindung, sofern die Versionsprüfung nicht aktiviert ist, und das Reverse-Geocoding läuft auf Ihrem eigenen Server mit Daten von GeoNames.** Fotos und Datenbank bleiben also auf Ihrer Hardware, solange Sie sie nicht freigeben.',
          'In den Quellen genannte Anfragen nach außen: Modell-Downloads von Hugging Face, die optionale Versionsprüfung bei GitHub und Kartenkacheln. Die Datenschutzerklärung, zuletzt aktualisiert am 6. April 2026, führt einen Tile Server und einen Version Service auf, die Metadaten der Anfrage protokollieren (die angeforderte Kachel beziehungsweise den User-Agent, die IP-Adresse und den Zeitpunkt); der Tile Server sei optional und lasse sich deaktivieren. E-Mails des Servers laufen über einen SMTP-Server, den Sie selbst konfigurieren.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Erklärungen des Projekts, keine Prüfergebnisse. Dokumentation und Datenschutzerklärung nennen für die Versionsprüfung unterschiedliche Dienste, und PromptQuorum hat weder den Netzwerkverkehr noch den Quellcode untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die Software eignet',
        items: [
          '**Selbsthoster mit Docker-Server oder NAS**, die einen privaten Ersatz für einen Cloud-Fotodienst suchen.',
          '**Familien und kleine Gruppen**, die eine gemeinsame Bibliothek mit getrennten Konten, geteilten Alben und Smartphone-Backup wünschen.',
          '**Menschen mit großen Kamerarollen-Archiven**, die nach Inhalt und nach Person suchen müssen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**KI-Qualität.** Suchrelevanz, Treffsicherheit der Gesichtsgruppierung und Geschwindigkeit wurden nicht getestet; die Benchmark-Werte der Dokumentation stammen von einem einzigen Testsystem.',
          '**Datensicherung.** Die Dokumentation warnt, dass die Datenbank nur Metadaten enthält und Sie den Upload-Ordner selbst sichern müssen, und die README verlangt einen 3-2-1-Backup-Plan.',
          '**Verhalten des Papierkorbs.** Laut FAQ werden Originaldateien im Papierkorb gelöscht, wenn der Papierkorb in Immich geleert wird.',
          '**Kaufbedingungen.** Die Kaufseite ließ sich nicht lesen, daher werden keine Preise genannt; laut Dokumentation ist der Kauf eine freiwillige Unterstützung.',
          '**Mobile Details.** Die Android-Versionsanforderung und die Datensicherheitsangaben der Stores wurden nicht gelesen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        content: [
          'Das Verzeichnis enthält zwei weitere Fotobibliotheks-Werkzeuge mit Rezension, eines selbst gehostet und eines cloudbasiert.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[PhotoPrism](/de/power-local-llm/photoprism-review)', 'Plattformen': 'Server (Docker), Browser', 'Preis / Lizenz': 'Kostenlose Community / AGPL-3.0', 'Wichtigster Unterschied': 'Selbst gehostet wie Immich, aber nur als Web-App; die Smartphone-Apps stammen von anderen Entwicklern' },
          { 'App': '[Ente Photos](/de/power-local-llm/ente-photos-review)', 'Plattformen': 'iOS, Android, Desktop, Web', 'Preis / Lizenz': '10 GB gratis, Bezahltarife / AGPL-3.0', 'Wichtigster Unterschied': 'Verschlüsselter Cloud-Speicher mit KI auf dem Gerät; kein eigener Server' },
        ],
        note: 'Prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App auf ihrer eigenen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Immich ein lokales LLM?',
            a: 'Nein. Die Dokumentation beschreibt CLIP-Bildsuche und Gesichtserkennung, kein Sprachmodell, und in den gelesenen Quellen gibt es weder einen Chat noch eine Funktion zum Schreiben von Bildbeschreibungen.',
          },
          {
            q: 'Funktioniert Immich ohne GPU?',
            a: 'Die Dokumentation führt die GPU-Beschleunigung als optional und experimentell auf, und die Mindestanforderungen nennen nur RAM und CPU-Kerne; die Geschwindigkeit auf einer CPU wurde nicht gemessen.',
          },
          {
            q: 'Kann ich von Google Fotos umziehen?',
            a: 'Die Einführungsseite verweist für Google-Takeout-Exporte auf immich-go; PromptQuorum hat keine Migration ausprobiert.',
          },
          {
            q: 'Wie aktualisiere ich Immich?',
            a: 'Die Installationsanleitung verweist auf eigene Upgrade-Hinweise, und die FAQ bittet darum, App und Server auf derselben Haupt- und Nebenversion zu halten.',
          },
          {
            q: 'Wo werden meine Dateien abgelegt?',
            a: 'In dem Ordner, der als UPLOAD_LOCATION festgelegt ist; die Datenbank im Postgres-Container enthält nur Metadaten und Benutzerinformationen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Immich ist ein kostenloser, aktiv gepflegter Weg, eine durchsuchbare Fotobibliothek mit Smartphone-Backup auf Hardware unter eigener Kontrolle zu betreiben, mit Inhaltssuche und Gesichtsgruppierung, die auf dem eigenen Server laufen. Dagegen stehen eine Einrichtung mit Docker und Umgebungsdatei, eine als experimentell bezeichnete GPU-Beschleunigung und der Umstand, dass sich keine der Aussagen zur KI-Qualität hier überprüfen ließ. Die Software eignet sich für Menschen, die ohnehin Dienste zu Hause oder auf einem NAS betreiben; wer eine App per Doppelklick oder einen Sprachmodell-Assistenten sucht, schaut besser anderswo.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Immich-Website](https://immich.app) — Plattformen, Links und Datenschutzerklärung, geprüft am 26. Oktober 2026.',
          '[Immich-Dokumentation](https://docs.immich.app) — Anforderungen, Installationsanleitung, Smart Search, Gesichtserkennung, Systemeinstellungen und FAQ, geprüft am 26. Oktober 2026.',
          '[Immich-Datenschutzerklärung](https://immich.app/privacy-policy) — lokal gespeicherte Daten, Tile Server und Version Service, zuletzt aktualisiert am 6. April 2026.',
          '[Immich auf GitHub](https://github.com/immich-app/immich) — README, Releases und Commit-Aktivität, geprüft am 26. Oktober 2026.',
          '[Immich im App Store](https://apps.apple.com/us/app/immich/id1613945652) und bei [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) — Verkäufer, Version und Aktualisierungsdaten, geprüft am 26. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PhotoPrism-Rezension](/de/power-local-llm/photoprism-review) — eine weitere selbst gehostete Fotobibliothek mit integrierten KI-Labels.',
          '[Ente-Photos-Rezension](/de/power-local-llm/ente-photos-review) — verschlüsselte Foto-Sicherung mit Gesichtserkennung und Suche in natürlicher Sprache auf dem Gerät.',
          '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },

  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Image & Video Generation',
    heroImage: '/images/immich-review-hero-es.webp',
    title: 'Reseña de Immich: biblioteca de fotos autoalojada con búsqueda inteligente',
    seoTitle: 'Reseña de Immich: fotos autoalojadas y búsqueda con IA',
    intro:
      'Immich es un servidor gratuito y de código abierto para copias de seguridad de fotos y vídeos, con apps para iPhone y Android, y su búsqueda inteligente y su reconocimiento facial se ejecutan en un contenedor de aprendizaje automático en tu propio hardware. No es una app de chat ni de LLM: la IA es una búsqueda de imágenes al estilo CLIP y una agrupación de caras. Esta reseña refleja su documentación, sus releases de GitHub, las fichas de las tiendas y su política de privacidad, consultadas el 26 de octubre de 2026.',
    metaDescription:
      'Reseña de Immich: servidor gratuito AGPL de copia de fotos y vídeos con apps para iPhone y Android, búsqueda CLIP y reconocimiento facial en tu servidor.',
    twitterDescription:
      'Reseña de Immich: biblioteca de fotos autoalojada con licencia AGPL cuya búsqueda inteligente y reconocimiento facial se ejecutan en tu servidor. Instalación con Docker, requisitos, conexiones salientes y lo que no pudimos verificar.',
    audience:
      'Personas que se autoalojan y quieren sustituir un servicio de fotos en la nube por su propio servidor, y que necesitan saber el esfuerzo de instalación, el hardware, qué IA se ejecuta dónde y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Immich',
    targetKeywords: [
      'reseña immich',
      'alternativa a google fotos autoalojada',
      'immich búsqueda inteligente clip',
      'immich reconocimiento facial',
      'immich instalación docker compose',
      'servidor privado de copia de fotos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi'],
    leadAnswerBlock:
      '**Immich (v3.3.5 a 26 de octubre de 2026) es un servidor gratuito AGPL-3.0 de copia de fotos y vídeos con clientes para iPhone, Android y navegador, cuya búsqueda inteligente y reconocimiento facial se ejecutan en un contenedor de aprendizaje automático que alojas tú mismo.** Se instala con Docker Compose y su propia documentación advierte de que la base de datos solo guarda metadatos, así que tus archivos necesitan una copia de seguridad aparte. No incluye ninguna función de chat ni de LLM.',
    quickAnswerTop: {
      es: {
        question: '¿Immich mantiene tus fotos y la búsqueda con IA en tu propio servidor?',
        answer:
          'Según su documentación, sí: las fotos, la base de datos y el contenedor de aprendizaje automático viven en tu hardware, y los modelos se descargan una sola vez. Algunos servicios opcionales sí contactan con el exterior, como la comprobación de versión y un servidor de teselas de mapa. PromptQuorum no ha inspeccionado el tráfico de red.',
        bullets: [
          'Gratis y de código abierto (AGPL-3.0); la documentación dice que ninguna función se pondrá tras un muro de pago.',
          'Servidor en Docker; apps en la [App Store](https://apps.apple.com/us/app/immich/id1613945652) y en [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich), además de cualquier navegador.',
          'La búsqueda inteligente usa modelos CLIP; las caras se detectan, se agrupan en personas y se pueden buscar.',
          'Mínimo 6 GB de RAM y 2 núcleos de CPU; el contenedor de ML puede ejecutarse en otra máquina.',
          'No es una app de LLM: en la documentación consultada no hay chat, resúmenes ni generación de pies de foto.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Immich?', anchor: 'what-is-immich' },
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
            text: 'Immich es una biblioteca de fotos y vídeos de código abierto y autoalojada, con apps para el móvil, que busca imágenes por su contenido y agrupa caras con modelos de aprendizaje automático en tu propio servidor.',
          },
          {
            type: 'plain-terms',
            text: 'Ejecutas Immich en un servidor doméstico o un NAS, tu móvil sube allí sus fotos automáticamente y las buscas escribiendo lo que aparece en la imagen o eligiendo a una persona.',
          },
        ],
        items: [
          'Mantenimiento: la versión v3.3.5 se publicó el 21 de octubre de 2026 y el repositorio recibió commits el 26 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Responsable: la App Store indica a FUTO Holdings, Inc. como vendedor; el código está en GitHub bajo AGPL-3.0.',
          'Instalación: un servidor con Docker Compose y un archivo de entorno que editar; las apps móviles se instalan desde las tiendas, pero necesitan ese servidor.',
          'Coste: gratis; según la documentación, comprar una licencia es un apoyo voluntario.',
          'Alcance: gestión de fotos y vídeos con IA basada en imágenes; no hay chat con un modelo de lenguaje.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, la documentación, la política de privacidad, el repositorio de GitHub y las fichas de las tiendas del proyecto, consultados el 26 de octubre de 2026. PromptQuorum no ha instalado Immich, por lo que no se evalúan la calidad de la búsqueda, la precisión de la agrupación de caras ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-immich',
        title: '¿Qué es Immich?',
        content: [
          '**Immich es una aplicación autoalojada para copiar, explorar y buscar las fotos y vídeos de tu móvil en un servidor que controlas.** El README de GitHub la describe como una «solución de gestión de fotos y vídeos autoalojada y de alto rendimiento»; el código es de código abierto bajo la licencia AGPL-3.0.',
          'La App Store indica a FUTO Holdings, Inc. como vendedor. Las apps copian el carrete del móvil a tu servidor, y la interfaz web añade álbumes, uso compartido, un mapa y administración. La documentación describe las partes de IA como un servicio de aprendizaje automático aparte al que el servidor envía las imágenes.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Immich es un servidor que instalas tú mismo; la vía documentada es Docker Compose, y las apps para iPhone y Android son instalaciones normales desde las tiendas que se conectan a ese servidor.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Servidor (Docker Compose)', 'Cómo conseguirlo': '[Guía de instalación](https://docs.immich.app/install/docker-compose): descargar dos archivos, editar uno y ejecutar un comando' },
          { 'Opción': 'iPhone y iPad', 'Cómo conseguirlo': '[App Store](https://apps.apple.com/us/app/immich/id1613945652) (gratis, iOS 15.0 o posterior)' },
          { 'Opción': 'Android', 'Cómo conseguirlo': '[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich), o el APK en las [releases de GitHub](https://github.com/immich-app/immich/releases)' },
          { 'Opción': 'Navegador', 'Cómo conseguirlo': 'Cualquier navegador en la dirección de tu servidor, en el puerto 2283, según la documentación' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[immich.app](https://immich.app)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[immich.app/privacy-policy](https://immich.app/privacy-policy) (actualizada por última vez el 6 de abril de 2026)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[github.com/immich-app/immich](https://github.com/immich-app/immich)' },
          { 'Opción': 'Demo', 'Cómo conseguirlo': '[demo.immich.app](https://demo.immich.app), con los datos de acceso en el README' },
        ],
        note: 'Versión revisada: v3.3.5, publicada el 21 de octubre de 2026 según la release de GitHub y la ficha de la App Store; la página de Google Play muestra una actualización del 20 de octubre de 2026. La instalación requiere un terminal y Docker, así que es una configuración de estilo para desarrolladores y no una instalación de doble clic. La documentación pide mantener la app móvil y el servidor en la misma versión mayor y menor.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**La documentación pide al menos 6 GB de RAM y 2 núcleos de CPU, y recomienda 8 GB y 4 núcleos.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Memoria', 'Qué dicen las fuentes': 'Mínimo 6 GB, recomendado 8 GB; con solo 4 GB se puede ejecutar con el aprendizaje automático desactivado' },
          { 'Elemento': 'CPU', 'Qué dicen las fuentes': 'Mínimo 2 núcleos, 4 recomendados; amd64 y arm64; desde la v3 el contenedor de ML requiere el nivel x86-64-v2' },
          { 'Elemento': 'Sistema operativo', 'Qué dicen las fuentes': 'Se recomienda Linux de 64 bits; macOS y Windows mediante Docker Desktop son posibles pero desaconsejados, con soporte limitado' },
          { 'Elemento': 'Almacenamiento', 'Qué dicen las fuentes': 'Sistema de archivos compatible con Unix; las miniaturas y las transcodificaciones añaden un 10-20%; la base de datos debería estar en un SSD local, no en un recurso de red' },
          { 'Elemento': 'Docker', 'Qué dicen las fuentes': 'Docker con el plugin Compose; el antiguo comando docker-compose no es compatible' },
          { 'Elemento': 'GPU', 'Qué dicen las fuentes': 'Opcional para el contenedor de ML; la documentación califica la aceleración de experimental' },
          { 'Elemento': 'Móvil', 'Qué dicen las fuentes': 'iOS 15.0 o posterior según la App Store; no se consultó el requisito de Android' },
        ],
        note: 'Estos mínimos proceden de la documentación del proyecto; PromptQuorum no midió el tiempo de indexación ni el uso de memoria en ningún hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen la guía de Docker Compose del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Descarga el archivo compose',
            whyItMatters: 'Crea una carpeta y descarga en ella docker-compose.yml y la plantilla example.env de la última release.',
          },
          {
            title: 'Edita el archivo de entorno',
            whyItMatters: 'Define UPLOAD_LOCATION con una carpeta que tenga espacio suficiente y cambia DB_PASSWORD por un valor nuevo que use solo letras y dígitos.',
          },
          {
            title: 'Inicia los contenedores',
            whyItMatters: 'Ejecuta docker compose up -d en esa carpeta, abre el servidor en un navegador y regístrate; el primer usuario pasa a ser el administrador.',
          },
          {
            title: 'Conecta tu móvil',
            whyItMatters: 'Instala la app, introduce la dirección de tu servidor, elige los álbumes de los que hacer copia y sigue el progreso en la pestaña Job Queues.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Todo lo que sigue procede del README o de la documentación del proyecto; PromptQuorum no ha probado nada.**',
        ],
        items: [
          '**Copia de seguridad.** Copia automática y en segundo plano desde el móvil, álbumes seleccionables, prevención de duplicados y un cargador por línea de comandos.',
          '**Biblioteca.** Álbumes, álbumes compartidos, uso compartido con tu pareja, enlaces públicos, un mapa, recuerdos, pilas, etiquetas, una vista de carpetas y compatibilidad con RAW.',
          '**Búsqueda.** Búsqueda contextual (CLIP) más filtros por personas, lugares, nombre de archivo, descripción, etiquetas, cámara, fechas y valoración con estrellas; la documentación incluye el texto dentro de las imágenes (OCR) como tipo de búsqueda.',
          '**Cuentas.** Varios usuarios, inicio de sesión con OAuth y claves de API; el primer usuario registrado es el administrador.',
          '**Importación.** immich-go para Google Takeout y External Libraries para archivos que ya están en el disco.',
        ],
        note: 'La tabla de funciones del README marca algunas como solo web o solo móvil, por ejemplo las etiquetas y la administración en la web y el soporte sin conexión en el móvil.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Funciones de IA y dónde se ejecutan',
        content: [
          '**La IA se basa en imágenes: modelos CLIP para la búsqueda inteligente y modelos para la detección y el reconocimiento de caras, todos ejecutados por un contenedor de aprendizaje automático; no interviene ningún modelo de lenguaje.**',
        ],
        items: [
          '**Búsqueda inteligente.** Las consultas libres se comparan con embeddings CLIP guardados en Postgres mediante la extensión VectorChord; eliges el modelo en Administración y el predeterminado es el más rápido.',
          '**Idiomas.** La documentación dice que los modelos nllb esperan consultas en el idioma configurado en los ajustes de usuario, mientras que los modelos xlm y siglip2 admiten texto en cualquier idioma.',
          '**Caras.** La detección se hace sobre la imagen de vista previa, un modelo de reconocimiento genera embeddings y el clustering DBSCAN los agrupa en personas a las que puedes poner nombre.',
          '**Alojamiento.** El servicio de ML integrado viene configurado por defecto, y las preguntas frecuentes dicen que puede ejecutarse en una máquina más potente.',
          '**GPU.** Existen backends para CUDA, ROCm, OpenVINO, ARM NN y RKNN; la documentación califica la función de experimental, CUDA como el más fiable y ROCm como nuevo.',
        ],
        note: 'Son declaraciones del propio proyecto. PromptQuorum no probó la relevancia de la búsqueda, la precisión de la agrupación de caras ni la velocidad.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La documentación dice que, una vez descargado un modelo de búsqueda inteligente, Immich no necesita conexión de red salvo que la comprobación de versión esté activada, y que la geocodificación inversa se ejecuta en tu propio servidor con datos de GeoNames.** Por tanto, las fotos y la base de datos permanecen en tu hardware mientras no las compartas.',
          'Conexiones externas que nombran las fuentes: descargas de modelos desde Hugging Face, la comprobación de versión opcional hacia GitHub y las teselas de mapa. La política de privacidad, actualizada por última vez el 6 de abril de 2026, enumera un Tile Server y un Version Service que registran metadatos de las solicitudes (la tesela solicitada o el user agent, la dirección IP y la hora); indica que el servidor de teselas es opcional y se puede desactivar. El correo electrónico del servidor pasa por un servidor SMTP que configuras tú.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del proyecto, no resultados de una auditoría. La documentación y la política nombran servicios distintos para la comprobación de versión, y PromptQuorum no ha inspeccionado el tráfico de red ni el código fuente.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes se autoalojan con un servidor Docker o un NAS** y quieren una alternativa privada a un servicio de fotos en la nube.',
          '**Familias y grupos pequeños** que quieren una biblioteca con cuentas separadas, álbumes compartidos y copia de seguridad desde el móvil.',
          '**Personas con grandes archivos de carrete** que necesitan buscar por contenido y por persona.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de la IA.** No se probaron la relevancia de la búsqueda, la precisión de la agrupación de caras ni la velocidad; las cifras de rendimiento de la documentación proceden de un solo sistema de prueba.',
          '**Copias de seguridad.** La documentación advierte de que la base de datos solo guarda metadatos y de que debes hacer tú mismo la copia de la carpeta de subidas, y el README pide un plan de copias 3-2-1.',
          '**Comportamiento de la papelera.** Las preguntas frecuentes dicen que los archivos originales enviados a la papelera se eliminan cuando la vacías en Immich.',
          '**Condiciones de compra.** No se pudo leer la página de compra, así que no se indican precios; la documentación dice que comprar es un apoyo voluntario.',
          '**Detalles del móvil.** No se consultaron el requisito de versión de Android ni las secciones de seguridad de los datos de las tiendas.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio incluye otras dos herramientas de bibliotecas de fotos con reseña, una autoalojada y otra basada en la nube.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[PhotoPrism](/es/power-local-llm/photoprism-review)', 'Plataformas': 'Servidor (Docker), navegador', 'Precio / licencia': 'Community gratis / AGPL-3.0', 'Diferencia clave': 'Autoalojada como Immich, pero solo como app web; sus apps móviles son de otros desarrolladores' },
          { 'App': '[Ente Photos](/es/power-local-llm/ente-photos-review)', 'Plataformas': 'iOS, Android, escritorio, web', 'Precio / licencia': '10 GB gratis, planes de pago / AGPL-3.0', 'Diferencia clave': 'Almacenamiento cifrado en la nube con IA en el dispositivo; sin servidor propio' },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Immich es un LLM local?',
            a: 'No. La documentación describe una búsqueda de imágenes con CLIP y reconocimiento facial, no un modelo de lenguaje, y las fuentes consultadas no contienen ninguna función de chat ni de redacción de pies de foto.',
          },
          {
            q: '¿Immich funciona sin GPU?',
            a: 'La documentación presenta la aceleración por GPU como opcional y experimental, y los requisitos mínimos solo nombran la RAM y los núcleos de CPU; no se midió la velocidad en una CPU.',
          },
          {
            q: '¿Puedo migrar desde Google Fotos?',
            a: 'La página de introducción remite a immich-go para las exportaciones de Google Takeout; PromptQuorum no probó ninguna migración.',
          },
          {
            q: '¿Cómo actualizo Immich?',
            a: 'La guía de instalación remite a instrucciones de actualización aparte, y las preguntas frecuentes piden mantener la app y el servidor en la misma versión mayor y menor.',
          },
          {
            q: '¿Dónde se guardan mis archivos?',
            a: 'En la carpeta definida como UPLOAD_LOCATION; la base de datos del contenedor de Postgres solo guarda metadatos e información de usuarios.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Immich es una forma gratuita y con actualizaciones activas de mantener una biblioteca de fotos con búsqueda y copia de seguridad desde el móvil en hardware que controlas, con búsqueda por contenido y agrupación de caras que se ejecutan en tu propio servidor. En contra, la instalación requiere Docker y un archivo de entorno, la aceleración por GPU se califica de experimental y no se pudo comprobar ninguna de las afirmaciones sobre la calidad de la IA. Encaja con quienes ya ejecutan servicios en casa o en un NAS; quien quiera una app de doble clic o un asistente con modelo de lenguaje debería mirar en otra parte.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Immich](https://immich.app) — plataformas, enlaces y política de privacidad, consultado el 26 de octubre de 2026.',
          '[Documentación de Immich](https://docs.immich.app) — requisitos, guía de instalación, búsqueda inteligente, reconocimiento facial, ajustes del sistema y preguntas frecuentes, consultada el 26 de octubre de 2026.',
          '[Política de privacidad de Immich](https://immich.app/privacy-policy) — datos almacenados localmente, servidor de teselas y servicio de versiones, actualizada por última vez el 6 de abril de 2026.',
          '[Immich en GitHub](https://github.com/immich-app/immich) — README, releases y actividad de commits, consultados el 26 de octubre de 2026.',
          '[Immich en la App Store](https://apps.apple.com/us/app/immich/id1613945652) y [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) — vendedor, versión y fechas de actualización, consultados el 26 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de PhotoPrism](/es/power-local-llm/photoprism-review) — otra biblioteca de fotos autoalojada con etiquetas de IA integradas.',
          '[Reseña de Ente Photos](/es/power-local-llm/ente-photos-review) — copia de seguridad de fotos cifrada con búsqueda de caras y en lenguaje natural en el dispositivo.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },

  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Image & Video Generation',
    heroImage: '/images/immich-review-hero-fr.webp',
    title: 'Test d’Immich : bibliothèque photo auto-hébergée avec recherche intelligente',
    seoTitle: 'Test d’Immich : photothèque auto-hébergée, recherche IA',
    intro:
      'Immich est un serveur gratuit et open source de sauvegarde de photos et de vidéos, avec des applications iPhone et Android ; sa recherche intelligente et sa reconnaissance faciale s’exécutent dans un conteneur d’apprentissage automatique sur votre propre matériel. Ce n’est pas une application de chat ni de LLM : l’IA se limite à une recherche d’images de type CLIP et au regroupement de visages. Ce test s’appuie sur la documentation, les releases GitHub, les fiches de stores et la politique de confidentialité, consultées le 26 octobre 2026.',
    metaDescription:
      'Test d’Immich : serveur gratuit AGPL de sauvegarde photo et vidéo, apps iPhone et Android, recherche CLIP et visages sur votre serveur. Installation.',
    twitterDescription:
      'Test d’Immich : une bibliothèque photo auto-hébergée sous licence AGPL, dont la recherche intelligente et la reconnaissance faciale tournent sur votre serveur. Installation Docker, prérequis, requêtes sortantes et ce que nous n’avons pas pu vérifier.',
    audience:
      'Auto-hébergeurs qui veulent remplacer un service photo en ligne par leur propre serveur et doivent connaître l’effort d’installation, le matériel, ce qui s’exécute où en matière d’IA et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test Immich',
    targetKeywords: [
      'test immich',
      'alternative google photos auto-hébergée',
      'immich recherche intelligente clip',
      'immich reconnaissance faciale',
      'immich installation docker compose',
      'serveur de sauvegarde photo privé',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi'],
    leadAnswerBlock:
      '**Immich (v3.3.5 au 26 octobre 2026) est un serveur gratuit, sous licence AGPL-3.0, de sauvegarde de photos et de vidéos, avec des clients iPhone, Android et navigateur, dont la recherche intelligente et la reconnaissance faciale s’exécutent dans un conteneur d’apprentissage automatique que vous hébergez vous-même.** Il s’installe avec Docker Compose, et sa propre documentation avertit que la base de données ne contient que des métadonnées : vos fichiers exigent donc une sauvegarde distincte. Il ne contient aucune fonction de chat ni de LLM.',
    quickAnswerTop: {
      fr: {
        question: 'Immich garde-t-il vos photos et sa recherche IA sur votre propre serveur ?',
        answer:
          'Selon sa documentation, oui : les photos, la base de données et le conteneur d’apprentissage automatique résident sur votre matériel, et les modèles sont téléchargés une seule fois. Quelques services facultatifs contactent l’extérieur, comme la vérification de version et un serveur de tuiles de carte. PromptQuorum n’a pas inspecté le trafic réseau.',
        bullets: [
          'Gratuit et open source (AGPL-3.0) ; la documentation affirme qu’aucune fonction ne sera placée derrière un paiement.',
          'Serveur sous Docker ; applications sur l’[App Store](https://apps.apple.com/us/app/immich/id1613945652) et [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich), plus n’importe quel navigateur.',
          'La recherche intelligente utilise des modèles CLIP ; les visages sont détectés, regroupés en personnes et consultables.',
          'Minimum 6 Go de RAM et 2 cœurs de processeur ; le conteneur d’apprentissage automatique peut tourner sur une autre machine.',
          'Ce n’est pas une application de LLM : la documentation consultée ne mentionne ni chat, ni résumé, ni génération de légendes.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce qu’Immich ?', anchor: 'what-is-immich' },
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
            text: 'Immich est une bibliothèque open source et auto-hébergée de photos et de vidéos, avec des applications mobiles, qui recherche les images par contenu et regroupe les visages grâce à des modèles d’apprentissage automatique exécutés sur votre propre serveur.',
          },
          {
            type: 'plain-terms',
            text: 'Vous exécutez Immich sur un serveur domestique ou un NAS, votre téléphone y envoie automatiquement ses photos, et vous les recherchez en saisissant ce que montre l’image ou en choisissant une personne.',
          },
        ],
        items: [
          'Maintenance : la version v3.3.5 est sortie le 21 octobre 2026 et le dépôt a reçu des commits le 26 octobre 2026 ; aucun avertissement de projet abandonné ne s’applique.',
          'Éditeur : l’App Store indique FUTO Holdings, Inc. comme vendeur ; le code est sur GitHub sous licence AGPL-3.0.',
          'Installation : un serveur Docker Compose avec un fichier d’environnement à modifier ; les applications mobiles s’installent depuis les stores, mais exigent ce serveur.',
          'Coût : gratuit ; selon la documentation, l’achat d’une licence est un soutien volontaire.',
          'Périmètre : gestion de photos et de vidéos avec une IA fondée sur l’image ; il n’y a pas de chat avec un modèle de langage.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, la documentation, la politique de confidentialité, le dépôt GitHub et les fiches de stores du projet, consultés le 26 octobre 2026. PromptQuorum n’a pas installé Immich ; la qualité de la recherche, la précision du regroupement des visages et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-immich',
        title: 'Qu’est-ce qu’Immich ?',
        content: [
          '**Immich est une application auto-hébergée pour sauvegarder, parcourir et rechercher les photos et les vidéos de votre téléphone sur un serveur que vous contrôlez.** Le README GitHub la décrit comme une « high performance self-hosted photo and video management solution » ; le code est open source sous licence AGPL-3.0.',
          'L’App Store indique FUTO Holdings, Inc. comme vendeur. Les applications sauvegardent la pellicule du téléphone vers votre serveur, et l’interface web ajoute albums, partage, carte et administration. La documentation décrit les fonctions d’IA comme un service d’apprentissage automatique distinct, auquel le serveur envoie les images.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Immich est un serveur que vous installez vous-même ; la voie documentée est Docker Compose, et les applications iPhone et Android s’installent depuis les stores et se connectent à ce serveur.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'Serveur (Docker Compose)', 'Comment l’obtenir': '[Guide d’installation](https://docs.immich.app/install/docker-compose) : télécharger deux fichiers, en modifier un, lancer une commande' },
          { 'Option': 'iPhone et iPad', 'Comment l’obtenir': '[App Store](https://apps.apple.com/us/app/immich/id1613945652) (gratuit, iOS 15.0 ou ultérieur)' },
          { 'Option': 'Android', 'Comment l’obtenir': '[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich), ou l’APK dans les [releases GitHub](https://github.com/immich-app/immich/releases)' },
          { 'Option': 'Navigateur', 'Comment l’obtenir': 'N’importe quel navigateur, à l’adresse de votre serveur sur le port 2283, selon la documentation' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[immich.app](https://immich.app)' },
          { 'Option': 'Politique de confidentialité', 'Comment l’obtenir': '[immich.app/privacy-policy](https://immich.app/privacy-policy) (mise à jour le 6 avril 2026)' },
          { 'Option': 'Code source', 'Comment l’obtenir': '[github.com/immich-app/immich](https://github.com/immich-app/immich)' },
          { 'Option': 'Démo', 'Comment l’obtenir': '[demo.immich.app](https://demo.immich.app), avec l’identifiant de connexion indiqué dans le README' },
        ],
        note: 'Version testée : v3.3.5, publiée le 21 octobre 2026 selon la release GitHub et la fiche de l’App Store ; la page Google Play indique une mise à jour le 20 octobre 2026. L’installation demande un terminal et Docker : c’est une installation de type développeur, pas un double-clic. La documentation demande de garder l’application mobile et le serveur sur les mêmes versions majeure et mineure.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**La documentation demande au moins 6 Go de RAM et 2 cœurs de processeur, et recommande 8 Go et 4 cœurs.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Mémoire', 'Ce que disent les sources': 'Minimum 6 Go, 8 Go recommandés ; avec seulement 4 Go, on peut l’exécuter en désactivant l’apprentissage automatique' },
          { 'Élément': 'Processeur', 'Ce que disent les sources': '2 cœurs au minimum, 4 recommandés ; amd64 et arm64 ; depuis la v3, le conteneur d’apprentissage automatique exige le niveau x86-64-v2' },
          { 'Élément': 'Système d’exploitation', 'Ce que disent les sources': 'Linux 64 bits recommandé ; macOS et Windows via Docker Desktop sont possibles mais déconseillés, avec une prise en charge limitée' },
          { 'Élément': 'Stockage', 'Ce que disent les sources': 'Système de fichiers compatible Unix ; les miniatures et les transcodages ajoutent 10 à 20 % ; la base de données doit se trouver sur un SSD local, pas sur un partage réseau' },
          { 'Élément': 'Docker', 'Ce que disent les sources': 'Docker avec le plugin Compose ; l’ancienne commande docker-compose n’est pas prise en charge' },
          { 'Élément': 'GPU', 'Ce que disent les sources': 'Facultatif pour le conteneur d’apprentissage automatique ; la documentation qualifie l’accélération d’expérimentale' },
          { 'Élément': 'Téléphone', 'Ce que disent les sources': 'iOS 15.0 ou ultérieur selon l’App Store ; prérequis Android non consulté' },
        ],
        note: 'Ces minimums viennent de la documentation du projet ; PromptQuorum n’a mesuré ni la durée d’indexation ni l’usage mémoire sur aucun matériel.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent le guide Docker Compose du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Télécharger le fichier compose',
            whyItMatters: 'Créez un dossier, puis téléchargez-y docker-compose.yml et le modèle example.env depuis la dernière release.',
          },
          {
            title: 'Modifier le fichier d’environnement',
            whyItMatters: 'Définissez UPLOAD_LOCATION sur un dossier disposant d’assez d’espace et remplacez DB_PASSWORD par une nouvelle valeur composée uniquement de lettres et de chiffres.',
          },
          {
            title: 'Démarrer les conteneurs',
            whyItMatters: 'Exécutez docker compose up -d dans ce dossier, ouvrez le serveur dans un navigateur et créez un compte ; le premier utilisateur devient l’administrateur.',
          },
          {
            title: 'Connecter votre téléphone',
            whyItMatters: 'Installez l’application, saisissez l’adresse de votre serveur, choisissez les albums à sauvegarder et suivez la progression dans l’onglet Job Queues.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Tout ce qui suit provient du README ou de la documentation du projet ; PromptQuorum n’a rien testé.**',
        ],
        items: [
          '**Sauvegarde.** Sauvegarde automatique en arrière-plan depuis le téléphone, albums sélectionnés, prévention des doublons et outil d’envoi en ligne de commande.',
          '**Bibliothèque.** Albums, albums partagés, partage avec un partenaire, liens publics, carte, souvenirs, piles, étiquettes, vue par dossiers et prise en charge du RAW.',
          '**Recherche.** Recherche contextuelle (CLIP) et filtres par personnes, lieux, nom de fichier, description, étiquettes, appareil, dates et note en étoiles ; la documentation cite le texte dans les images (OCR) comme type de recherche.',
          '**Comptes.** Plusieurs utilisateurs, connexion OAuth et clés d’API ; le premier utilisateur enregistré est l’administrateur.',
          '**Import.** immich-go pour les exports Google Takeout et External Libraries pour les archives déjà présentes sur le disque.',
        ],
        note: 'Le tableau des fonctions du README indique que certaines fonctions sont réservées au web ou au mobile, par exemple les étiquettes et l’administration sur le web et la prise en charge hors ligne sur mobile.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Fonctions d’IA et où elles s’exécutent',
        content: [
          '**L’IA repose sur l’image : des modèles CLIP pour la recherche intelligente et des modèles de détection et de reconnaissance des visages, tous exécutés par un conteneur d’apprentissage automatique ; aucun modèle de langage n’intervient.**',
        ],
        items: [
          '**Recherche intelligente.** Les requêtes libres sont comparées à des vecteurs CLIP stockés dans Postgres via l’extension VectorChord ; vous choisissez le modèle dans Administration, et celui par défaut est le plus rapide.',
          '**Langues.** La documentation indique que les modèles nllb attendent des requêtes dans la langue définie dans les réglages utilisateur, tandis que les modèles xlm et siglip2 gèrent un texte dans n’importe quelle langue.',
          '**Visages.** La détection s’exécute sur l’image d’aperçu, un modèle de reconnaissance produit des vecteurs, et un regroupement DBSCAN les assemble en personnes que vous pouvez nommer.',
          '**Hébergement.** Le service d’apprentissage automatique intégré est configuré par défaut, et la FAQ indique qu’il peut tourner à la place sur une machine plus puissante.',
          '**GPU.** Des backends CUDA, ROCm, OpenVINO, ARM NN et RKNN existent ; la documentation qualifie la fonction d’expérimentale, CUDA de plus fiable et ROCm de récent.',
        ],
        note: 'Ce sont des déclarations du projet. PromptQuorum n’a testé ni la pertinence de la recherche, ni la précision du regroupement des visages, ni la vitesse.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Selon la documentation, une fois un modèle de recherche intelligente téléchargé, Immich n’a besoin d’aucune connexion réseau, sauf si la vérification de version est activée, et le géocodage inversé s’exécute sur votre propre serveur à partir des données GeoNames.** Les photos et la base de données restent donc sur votre matériel tant que vous ne les partagez pas.',
          'Requêtes sortantes citées dans les sources : téléchargements de modèles depuis Hugging Face, vérification de version facultative auprès de GitHub et tuiles de carte. La politique de confidentialité, mise à jour le 6 avril 2026, mentionne un Tile Server et un Version Service qui consignent des métadonnées de requête (la tuile demandée ou l’agent utilisateur, l’adresse IP et l’horaire) ; elle précise que le serveur de tuiles est facultatif et peut être désactivé. Les e-mails envoyés par le serveur passent par un serveur SMTP que vous configurez.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du projet, pas des résultats d’audit. La documentation et la politique citent des services différents pour la vérification de version, et PromptQuorum n’a inspecté ni le trafic réseau ni le code source.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Auto-hébergeurs avec un serveur Docker ou un NAS** qui veulent remplacer un service photo en ligne par une solution privée.',
          '**Familles et petits groupes** qui veulent une seule bibliothèque avec des comptes séparés, des albums partagés et la sauvegarde depuis le téléphone.',
          '**Personnes avec de grandes archives de pellicule** qui ont besoin de rechercher par contenu et par personne.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité de l’IA.** La pertinence de la recherche, la précision du regroupement des visages et la vitesse n’ont pas été testées ; les chiffres de référence de la documentation proviennent d’un seul système de test.',
          '**Sauvegardes.** La documentation avertit que la base de données ne contient que des métadonnées et que vous devez sauvegarder vous-même le dossier d’envoi, et le README demande un plan de sauvegarde 3-2-1.',
          '**Comportement de la corbeille.** La FAQ indique que les fichiers originaux placés dans la corbeille sont supprimés quand la corbeille est vidée dans Immich.',
          '**Conditions d’achat.** La page d’achat n’a pas pu être lue ; les prix ne sont donc pas indiqués, et la documentation précise que l’achat est un soutien volontaire.',
          '**Détails mobiles.** Le prérequis de version Android et les sections de sécurité des données des stores n’ont pas été consultés.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'Le répertoire compte deux autres outils de bibliothèque photo avec un test, l’un auto-hébergé et l’autre dans le cloud.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[PhotoPrism](/fr/power-local-llm/photoprism-review)', 'Plateformes': 'Serveur (Docker), navigateur', 'Prix / licence': 'Community gratuite / AGPL-3.0', 'Différence clé': 'Auto-hébergé comme Immich, mais uniquement sous forme d’application web ; ses applications mobiles viennent d’autres développeurs' },
          { 'Application': '[Ente Photos](/fr/power-local-llm/ente-photos-review)', 'Plateformes': 'iOS, Android, bureau, web', 'Prix / licence': '10 Go gratuits, forfaits payants / AGPL-3.0', 'Différence clé': 'Stockage cloud chiffré avec IA sur l’appareil ; pas de serveur à vous' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Immich est-il un LLM local ?',
            a: 'Non. La documentation décrit une recherche d’images CLIP et une reconnaissance faciale, pas un modèle de langage, et les sources consultées ne contiennent aucune fonction de chat ni de rédaction de légendes.',
          },
          {
            q: 'Immich fonctionne-t-il sans GPU ?',
            a: 'La documentation présente l’accélération GPU comme facultative et expérimentale, et les prérequis minimaux ne mentionnent que la RAM et les cœurs de processeur ; la vitesse sur processeur n’a pas été mesurée.',
          },
          {
            q: 'Puis-je migrer depuis Google Photos ?',
            a: 'La page d’introduction renvoie à immich-go pour les exports Google Takeout ; PromptQuorum n’a pas essayé de migration.',
          },
          {
            q: 'Comment mettre Immich à jour ?',
            a: 'Le guide d’installation renvoie à des instructions de mise à niveau distinctes, et la FAQ demande de garder l’application et le serveur sur les mêmes versions majeure et mineure.',
          },
          {
            q: 'Où sont conservés mes fichiers ?',
            a: 'Dans le dossier défini comme UPLOAD_LOCATION ; la base de données du conteneur Postgres ne contient que des métadonnées et des informations sur les utilisateurs.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Immich est un moyen gratuit et activement mis à jour de conserver une bibliothèque photo consultable, avec sauvegarde depuis le téléphone, sur du matériel que vous contrôlez, avec une recherche par contenu et un regroupement des visages exécutés sur votre propre serveur. En contrepartie, l’installation demande Docker et un fichier d’environnement, l’accélération GPU est qualifiée d’expérimentale, et aucune des affirmations sur la qualité de l’IA n’a pu être vérifiée ici. Il convient à ceux qui exploitent déjà des services chez eux ou sur un NAS ; qui veut une application à double-clic ou un assistant à modèle de langage ira voir ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d’Immich](https://immich.app) — plateformes, liens et politique de confidentialité, consultés le 26 octobre 2026.',
          '[Documentation d’Immich](https://docs.immich.app) — prérequis, guide d’installation, recherche intelligente, reconnaissance faciale, réglages système et FAQ, consultée le 26 octobre 2026.',
          '[Politique de confidentialité d’Immich](https://immich.app/privacy-policy) — données stockées localement, serveur de tuiles et service de version, mise à jour le 6 avril 2026.',
          '[Immich sur GitHub](https://github.com/immich-app/immich) — README, releases et activité des commits, consultés le 26 octobre 2026.',
          '[Immich sur l’App Store](https://apps.apple.com/us/app/immich/id1613945652) et [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) — vendeur, version et dates de mise à jour, consultés le 26 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de PhotoPrism](/fr/power-local-llm/photoprism-review) — une autre bibliothèque photo auto-hébergée avec étiquettes IA intégrées.',
          '[Test d’Ente Photos](/fr/power-local-llm/ente-photos-review) — sauvegarde de photos chiffrée avec recherche de visages et en langage naturel sur l’appareil.',
          '[Répertoire de logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },

  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Image & Video Generation',
    heroImage: '/images/immich-review-hero-ja.webp',
    title: 'Immichレビュー：スマート検索付きのセルフホスト型写真ライブラリ',
    seoTitle: 'Immichレビュー：セルフホスト型写真ライブラリとAI検索',
    intro:
      'Immichは、iPhoneとAndroidのアプリを備えた無料のオープンソース写真・動画バックアップサーバーで、スマート検索と顔認識は自分のハードウェア上の機械学習コンテナで動作します。チャットやLLMのアプリではなく、AIはCLIP方式の画像検索と顔のグループ化です。このレビューは、2026年10月26日に確認したドキュメント、GitHubのリリース、ストアの掲載情報、プライバシーポリシーに基づいています。',
    metaDescription:
      'Immichレビュー：iPhone/Android対応の無料AGPL写真バックアップサーバー。CLIP検索と顔認識は自分のサーバーで動作。導入とプライバシーを解説。',
    twitterDescription:
      'Immichレビュー：スマート検索と顔認識が自分のサーバー上で動く、AGPLライセンスのセルフホスト型写真ライブラリ。Dockerでの導入、動作要件、外部への通信、確認できなかった点。',
    audience:
      'クラウドの写真サービスを自分のサーバーに置き換えたいセルフホスターのうち、セットアップの手間、必要なハードウェア、AIがどこで動くか、情報源が確認していない点を知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Immich レビュー',
    targetKeywords: [
      'immich レビュー',
      'セルフホスト google フォト 代替',
      'immich スマート検索 clip',
      'immich 顔認識',
      'immich docker compose 導入',
      '非公開 写真バックアップ サーバー',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi'],
    leadAnswerBlock:
      '**Immich（2026年10月26日時点でv3.3.5）は、無料でAGPL-3.0の写真・動画バックアップサーバーで、iPhone、Android、ブラウザのクライアントがあり、スマート検索と顔認識は自分で運用する機械学習コンテナ上で動作します。**Docker Composeでインストールします。公式ドキュメントはデータベースにメタデータしか入らないと警告しており、ファイルは別にバックアップする必要があります。チャットやLLMの機能はありません。',
    quickAnswerTop: {
      ja: {
        question: 'Immichは写真とAI検索を自分のサーバー上に留めますか？',
        answer:
          'ドキュメントによれば、そのとおりです。写真、データベース、機械学習コンテナは自分のハードウェア上にあり、モデルは一度ダウンロードするだけです。バージョン確認や地図タイルのサーバーなど、一部の任意のサービスは外部に接続します。PromptQuorumはネットワーク通信を調べていません。',
        bullets: [
          '無料のオープンソース（AGPL-3.0）で、有料の壁の向こうに機能を置くことはないとドキュメントは述べています。',
          'サーバーはDockerで動作し、アプリは[App Store](https://apps.apple.com/us/app/immich/id1613945652)と[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich)にあり、ブラウザでも使えます。',
          'スマート検索にはCLIPモデルを使い、顔は検出されて人物ごとにグループ化され、検索できます。',
          '最低でもRAM 6 GBとCPU 2コアが必要で、MLコンテナは別のマシンでも動かせます。',
          'LLMアプリではありません。確認したドキュメントにチャット、要約、キャプション生成はありません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Immichとは', anchor: 'what-is-immich' },
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
            text: 'Immichは、スマートフォン用アプリを備えたオープンソースでセルフホスト型の写真・動画ライブラリで、自分のサーバー上の機械学習モデルで写真を内容から検索し、顔をグループ化します。',
          },
          {
            type: 'plain-terms',
            text: 'Immichを自宅のサーバーやNASで動かすと、スマートフォンの写真が自動でそこにアップロードされ、写っているものを入力したり人物を選んだりして検索できます。',
          },
        ],
        items: [
          'メンテナンス：バージョンv3.3.5は2026年10月21日に公開され、リポジトリには2026年10月26日にもコミットがあるため、更新停止の警告は該当しません。',
          '運営元：App StoreはFUTO Holdings, Inc.を販売元としており、コードはAGPL-3.0のもとGitHubで公開されています。',
          'セットアップ：Docker Composeを使うサーバー型で、環境ファイルの編集が必要です。スマートフォンのアプリはストアからインストールできますが、このサーバーが前提です。',
          '費用：無料です。ドキュメントによれば、ライセンスの購入は任意の支援です。',
          '対象範囲：画像ベースのAIを備えた写真・動画の管理で、言語モデルのチャットはありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月26日に確認したプロジェクトのウェブサイト、ドキュメント、プライバシーポリシー、GitHubリポジトリ、ストアの掲載情報に基づきます。PromptQuorumはImmichをインストールしていないため、検索の品質、顔のグループ化の精度、速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-immich',
        title: 'Immichとは',
        content: [
          '**Immichは、スマートフォンの写真や動画を自分で管理するサーバーにバックアップし、閲覧・検索するためのセルフホスト型アプリケーションです。**GitHubのREADMEは「高性能なセルフホスト型の写真・動画管理ソリューション」と呼んでおり、コードはAGPL-3.0ライセンスのオープンソースです。',
          'App StoreはFUTO Holdings, Inc.を販売元としています。アプリはスマートフォンのカメラロールを自分のサーバーにバックアップし、Webインターフェースではアルバム、共有、地図、管理機能が使えます。ドキュメントは、AI部分をサーバーが画像を送る別の機械学習サービスとして説明しています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Immichは自分でインストールするサーバーで、ドキュメントが示す方法はDocker Composeです。iPhoneとAndroidのアプリは、そのサーバーに接続する通常のストアアプリです。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'サーバー（Docker Compose）', '入手方法': '[インストールガイド](https://docs.immich.app/install/docker-compose)：2つのファイルをダウンロードし、1つを編集して、コマンドを1つ実行' },
          { '項目': 'iPhoneとiPad', '入手方法': '[App Store](https://apps.apple.com/us/app/immich/id1613945652)（無料、iOS 15.0以降）' },
          { '項目': 'Android', '入手方法': '[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich)、または[GitHubのリリース](https://github.com/immich-app/immich/releases)にあるAPK' },
          { '項目': 'ブラウザ', '入手方法': 'ドキュメントによれば、任意のブラウザでサーバーのアドレスのポート2283を開く' },
          { '項目': 'ウェブサイト', '入手方法': '[immich.app](https://immich.app)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[immich.app/privacy-policy](https://immich.app/privacy-policy)（2026年4月6日更新）' },
          { '項目': 'ソースコード', '入手方法': '[github.com/immich-app/immich](https://github.com/immich-app/immich)' },
          { '項目': 'デモ', '入手方法': '[demo.immich.app](https://demo.immich.app)。ログイン情報はREADMEに記載' },
        ],
        note: '確認したバージョン：v3.3.5。GitHubのリリースとApp Storeの記録によれば2026年10月21日に公開され、Google Playのページには2026年10月20日の更新が表示されています。インストールにはターミナルとDockerが必要なので、ダブルクリックで入れるものではなく、開発者向けのセットアップです。ドキュメントは、モバイルアプリとサーバーのメジャーバージョンとマイナーバージョンを揃えるよう求めています。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**ドキュメントは、最低でもRAM 6 GBとCPU 2コアを求めており、推奨は8 GBと4コアです。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'メモリ', '情報源の記載': '最低6 GB、推奨8 GB。4 GBしかない場合は機械学習を無効にすれば動かせる' },
          { '項目': 'CPU', '情報源の記載': '最低2コア、推奨4コア。amd64とarm64に対応し、MLコンテナはv3以降x86-64-v2レベルが必要' },
          { '項目': 'オペレーティングシステム', '情報源の記載': '64ビットLinuxを推奨。Docker DesktopによるmacOSとWindowsも可能だが非推奨で、サポートは限定的' },
          { '項目': 'ストレージ', '情報源の記載': 'Unix互換のファイルシステム。サムネイルとトランスコードで10～20%増え、データベースはネットワーク共有ではなくローカルSSDに置くべき' },
          { '項目': 'Docker', '情報源の記載': 'Composeプラグイン付きのDocker。従来のdocker-composeコマンドは非対応' },
          { '項目': 'GPU', '情報源の記載': 'MLコンテナでは任意。ドキュメントはこの高速化を実験的としている' },
          { '項目': 'スマートフォン', '情報源の記載': 'App StoreによればiOS 15.0以降。Androidの要件は未確認' },
        ],
        note: 'これらの最低要件はプロジェクトのドキュメントによるもので、PromptQuorumはどのハードウェアでもインデックス作成時間やメモリ使用量を計測していません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はプロジェクトのDocker Composeガイドに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'composeファイルをダウンロードする',
            whyItMatters: 'フォルダーを作成し、最新リリースからdocker-compose.ymlとexample.envのテンプレートをそのフォルダーにダウンロードします。',
          },
          {
            title: '環境ファイルを編集する',
            whyItMatters: 'UPLOAD_LOCATIONを十分な空き容量のあるフォルダーに設定し、DB_PASSWORDを英数字だけの新しい値に変更します。',
          },
          {
            title: 'コンテナを起動する',
            whyItMatters: 'そのフォルダーでdocker compose up -dを実行し、ブラウザでサーバーを開いて登録します。最初のユーザーが管理者になります。',
          },
          {
            title: 'スマートフォンを接続する',
            whyItMatters: 'アプリをインストールしてサーバーのアドレスを入力し、バックアップするアルバムを選んで、Job Queuesタブで進行状況を確認します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下はすべてプロジェクトのREADMEまたはドキュメントに基づく内容で、PromptQuorumは一つもテストしていません。**',
        ],
        items: [
          '**バックアップ。**スマートフォンからの自動・バックグラウンドのバックアップ、アルバムの選択、重複の防止、コマンドラインのアップローダーがあります。',
          '**ライブラリ。**アルバム、共有アルバム、パートナーとの共有、公開リンク、地図、メモリーズ、スタック、タグ、フォルダービュー、RAW対応があります。',
          '**検索。**コンテキスト検索（CLIP）に加え、人物、場所、ファイル名、説明、タグ、カメラ、日付、星評価のフィルターがあり、ドキュメントは画像内のテキスト（OCR）も検索の種類として挙げています。',
          '**アカウント。**複数ユーザー、OAuthサインイン、APIキーに対応し、最初に登録したユーザーが管理者になります。',
          '**インポート。**Googleテイクアウト用のimmich-goと、ディスク上にあるアーカイブ用の外部ライブラリがあります。',
        ],
        note: 'READMEの機能表では、一部の項目がWeb専用またはモバイル専用とされています。たとえばタグと管理機能はWeb、オフライン対応はモバイルです。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI機能と実行場所',
        content: [
          '**AIは画像ベースです。スマート検索にはCLIPモデル、顔の検出と認識には専用のモデルを使い、すべて機械学習コンテナが実行し、言語モデルは関わりません。**',
        ],
        items: [
          '**スマート検索。**自由形式のクエリは、VectorChord拡張を通じてPostgresに保存されたCLIPの埋め込みと照合されます。モデルは管理画面で選択でき、既定は最速のものです。',
          '**言語。**ドキュメントによれば、nllbモデルはユーザー設定の言語でのクエリを前提とし、xlmとsiglip2のモデルはどの言語のテキストも扱えます。',
          '**顔。**検出はプレビュー画像で行われ、認識モデルが埋め込みを作り、DBSCANクラスタリングで名前を付けられる人物にグループ化されます。',
          '**ホスティング。**内蔵のMLサービスが既定で設定されており、FAQによればより強力な別のマシンで動かすこともできます。',
          '**GPU。**CUDA、ROCm、OpenVINO、ARM NN、RKNNのバックエンドがあります。ドキュメントはこの機能を実験的とし、CUDAが最も信頼でき、ROCmは新しいとしています。',
        ],
        note: 'これらはプロジェクト自身の説明です。PromptQuorumは検索の関連性、顔のグループ化の精度、速度をテストしていません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**ドキュメントによれば、スマート検索のモデルを一度ダウンロードすれば、バージョン確認を有効にしない限りImmichにネットワーク接続は不要で、逆ジオコーディングはGeoNamesのデータを使って自分のサーバー上で実行されます。**そのため、共有しない限り、写真とデータベースは自分のハードウェアに留まります。',
          '情報源が挙げる外部へのリクエストは、Hugging Faceからのモデルのダウンロード、GitHubへの任意のバージョン確認、地図タイルです。2026年4月6日更新のプライバシーポリシーは、リクエストのメタデータ（要求されたタイル、またはユーザーエージェント、IPアドレス、タイミング）を記録するタイルサーバーとバージョンサービスを挙げており、タイルサーバーは任意で無効にできると述べています。サーバー側のメール送信は、自分で設定したSMTPサーバーを経由します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクトの申告であり、監査結果ではありません。バージョン確認について、ドキュメントとポリシーは異なるサービスを挙げています。PromptQuorumはネットワーク通信もソースコードも調べていません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**DockerサーバーやNASを使うセルフホスター**で、クラウド写真サービスの非公開な代替を探している方。',
          '**家族や小さなグループ**で、別々のアカウント、共有アルバム、スマートフォンのバックアップを備えた1つのライブラリを使いたい方。',
          '**カメラロールの大きなアーカイブを持つ方**で、内容や人物で検索したい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**AIの品質。**検索の関連性、顔のグループ化の精度、速度はテストしていません。ドキュメントのベンチマークの数値は1台のテスト環境によるものです。',
          '**バックアップ。**ドキュメントは、データベースにはメタデータしか入らず、アップロード用フォルダーは自分でバックアップする必要があると警告しており、READMEは3-2-1バックアップ計画を求めています。',
          '**ゴミ箱の挙動。**FAQによれば、ゴミ箱に入れた元のファイルは、Immichでゴミ箱を空にすると削除されます。',
          '**購入条件。**購入ページを読めなかったため価格は記載していません。ドキュメントは、購入は任意の支援だと述べています。',
          '**モバイルの詳細。**Androidのバージョン要件と、各ストアのデータセーフティの項目は確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、レビュー付きの写真ライブラリツールがほかに2つあり、1つはセルフホスト型、もう1つはクラウド型です。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[PhotoPrism](/ja/power-local-llm/photoprism-review)', '対応プラットフォーム': 'サーバー（Docker）、ブラウザ', '価格／ライセンス': '無料のCommunity／AGPL-3.0', '主な違い': 'Immichと同じセルフホスト型だが、Webアプリのみ。スマートフォンのアプリは他の開発者によるもの' },
          { 'アプリ': '[Ente Photos](/ja/power-local-llm/ente-photos-review)', '対応プラットフォーム': 'iOS、Android、デスクトップ、Web', '価格／ライセンス': '無料10 GB、有料プランあり／AGPL-3.0', '主な違い': '端末上のAIを備えた暗号化クラウドストレージ。自分のサーバーは不要' },
        ],
        note: '価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Immichはローカルで動くLLMですか？',
            a: 'いいえ。ドキュメントが説明しているのはCLIPによる画像検索と顔認識で、言語モデルではなく、確認した情報源にチャットやキャプション作成の機能はありません。',
          },
          {
            q: 'ImmichはGPUなしでも動きますか？',
            a: 'ドキュメントはGPUによる高速化を任意かつ実験的としており、最低要件に挙げられているのはRAMとCPUのコア数だけです。CPUでの速度は計測していません。',
          },
          {
            q: 'Googleフォトから移行できますか？',
            a: '紹介ページは、Googleテイクアウトのエクスポートにはimmich-goを案内しています。PromptQuorumは移行を試していません。',
          },
          {
            q: 'Immichはどう更新しますか？',
            a: 'インストールガイドは別のアップグレード手順を案内しており、FAQはアプリとサーバーのメジャーバージョンとマイナーバージョンを揃えるよう求めています。',
          },
          {
            q: 'ファイルはどこに保存されますか？',
            a: 'UPLOAD_LOCATIONに設定したフォルダーです。Postgresコンテナ内のデータベースには、メタデータとユーザー情報だけが入ります。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Immichは、自分で管理するハードウェア上に、スマートフォンのバックアップ付きで検索可能な写真ライブラリを置くための、無料で更新も活発な手段で、内容検索と顔のグループ化は自分のサーバー上で動きます。一方で、セットアップにはDockerと環境ファイルが必要で、GPUによる高速化は実験的とされ、AIの品質に関する主張はここでは一つも確認できませんでした。自宅やNASで既にサービスを動かしている方に向いており、ダブルクリックで使えるアプリや言語モデルのアシスタントを求める方は別の選択肢を探すほうがよいでしょう。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Immich公式サイト](https://immich.app) — 対応プラットフォーム、リンク、プライバシーポリシー。2026年10月26日確認。',
          '[Immichドキュメント](https://docs.immich.app) — 動作要件、インストールガイド、スマート検索、顔認識、システム設定、FAQ。2026年10月26日確認。',
          '[Immichプライバシーポリシー](https://immich.app/privacy-policy) — ローカルに保存されるデータ、タイルサーバー、バージョンサービス。2026年4月6日更新。',
          '[GitHubのImmich](https://github.com/immich-app/immich) — README、リリース、コミットの動き。2026年10月26日確認。',
          '[App StoreのImmich](https://apps.apple.com/us/app/immich/id1613945652)と[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) — 販売元、バージョン、更新日。2026年10月26日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PhotoPrismレビュー](/ja/power-local-llm/photoprism-review) — AIラベルを内蔵した、もう1つのセルフホスト型写真ライブラリ。',
          '[Ente Photosレビュー](/ja/power-local-llm/ente-photos-review) — 端末上の顔検索と自然言語検索を備えた、暗号化された写真バックアップ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },

  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Image & Video Generation',
    heroImage: '/images/immich-review-hero-pt.webp',
    title: 'Análise do Immich: biblioteca de fotos auto-hospedada com busca inteligente',
    seoTitle: 'Análise do Immich: fotos auto-hospedadas, busca com IA',
    intro:
      'O Immich é um servidor gratuito e de código aberto para backup de fotos e vídeos, com apps para iPhone e Android, cuja busca inteligente e cujo reconhecimento facial rodam em um contêiner de aprendizado de máquina no seu próprio hardware. Não é um app de chat nem de LLM: a IA é uma busca de imagens no estilo CLIP e o agrupamento de rostos. Esta análise reflete a documentação, as releases do GitHub, as páginas das lojas e a política de privacidade, consultadas em 26 de outubro de 2026.',
    metaDescription:
      'Análise do Immich: servidor gratuito AGPL de backup de fotos e vídeos com apps para iPhone e Android, busca CLIP e reconhecimento facial no seu servidor.',
    twitterDescription:
      'Análise do Immich: biblioteca de fotos auto-hospedada sob licença AGPL, com busca inteligente e reconhecimento facial rodando no seu servidor. Instalação com Docker, requisitos, conexões externas e o que não pudemos verificar.',
    audience:
      'Quem faz auto-hospedagem e quer trocar um serviço de fotos na nuvem por um servidor próprio, e precisa saber o esforço de instalação, o hardware, qual IA roda onde e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise Immich',
    targetKeywords: [
      'análise immich',
      'alternativa ao google fotos auto-hospedada',
      'immich busca inteligente clip',
      'immich reconhecimento facial',
      'immich instalação docker compose',
      'servidor privado de backup de fotos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi'],
    leadAnswerBlock:
      '**O Immich (v3.3.5 em 26 de outubro de 2026) é um servidor gratuito, sob AGPL-3.0, para backup de fotos e vídeos, com clientes para iPhone, Android e navegador, cuja busca inteligente e cujo reconhecimento facial rodam em um contêiner de aprendizado de máquina que você mesmo hospeda.** Ele é instalado com Docker Compose, e a própria documentação avisa que o banco de dados guarda apenas metadados, então seus arquivos precisam de um backup separado. Ele não tem nenhum recurso de chat ou de LLM.',
    quickAnswerTop: {
      pt: {
        question: 'O Immich mantém suas fotos e a busca com IA no seu próprio servidor?',
        answer:
          'Segundo a documentação, sim: as fotos, o banco de dados e o contêiner de aprendizado de máquina ficam no seu hardware, e os modelos são baixados uma única vez. Alguns serviços opcionais acessam o exterior, como a verificação de versão e um servidor de tiles de mapa. A PromptQuorum não inspecionou o tráfego de rede.',
        bullets: [
          'Gratuito e de código aberto (AGPL-3.0); a documentação diz que nenhum recurso será colocado atrás de um paywall.',
          'Servidor no Docker; apps na [App Store](https://apps.apple.com/us/app/immich/id1613945652) e no [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich), além de qualquer navegador.',
          'A busca inteligente usa modelos CLIP; os rostos são detectados, agrupados em pessoas e pesquisáveis.',
          'Mínimo de 6 GB de RAM e 2 núcleos de CPU; o contêiner de ML pode rodar em outra máquina.',
          'Não é um app de LLM: a documentação consultada não traz chat, resumos nem geração de legendas.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Immich?', anchor: 'what-is-immich' },
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
            text: 'O Immich é uma biblioteca de fotos e vídeos de código aberto e auto-hospedada, com apps de celular, que pesquisa imagens pelo conteúdo e agrupa rostos com modelos de aprendizado de máquina no seu próprio servidor.',
          },
          {
            type: 'plain-terms',
            text: 'Você executa o Immich em um servidor doméstico ou NAS, o celular envia as fotos para lá automaticamente, e você as pesquisa digitando o que aparece na imagem ou escolhendo uma pessoa.',
          },
        ],
        items: [
          'Manutenção: a versão v3.3.5 foi lançada em 21 de outubro de 2026 e o repositório recebeu commits em 26 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Responsável: a App Store lista a FUTO Holdings, Inc. como vendedora; o código está no GitHub sob AGPL-3.0.',
          'Instalação: um servidor com Docker Compose e um arquivo de ambiente para editar; os apps de celular são instalados pelas lojas, mas precisam desse servidor.',
          'Custo: gratuito; comprar uma licença é um apoio voluntário, segundo a documentação.',
          'Escopo: gerenciamento de fotos e vídeos com IA baseada em imagens; não há chat com modelo de linguagem.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, na documentação, na política de privacidade, no repositório do GitHub e nas páginas das lojas do projeto, consultados em 26 de outubro de 2026. A PromptQuorum não instalou o Immich, portanto a qualidade da busca, a precisão do agrupamento de rostos e a velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-immich',
        title: 'O que é o Immich?',
        content: [
          '**O Immich é um aplicativo auto-hospedado para fazer backup, explorar e pesquisar fotos e vídeos do seu celular em um servidor que você controla.** O README do GitHub o descreve como uma "solução de gerenciamento de fotos e vídeos auto-hospedada de alto desempenho"; o código é aberto, sob a licença AGPL-3.0.',
          'A App Store lista a FUTO Holdings, Inc. como vendedora. Os apps fazem backup do rolo da câmera do celular para o seu servidor, e a interface web acrescenta álbuns, compartilhamento, um mapa e a administração. A documentação descreve as partes de IA como um serviço de aprendizado de máquina separado, para o qual o servidor envia as imagens.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Immich é um servidor que você mesmo instala; o caminho documentado é o Docker Compose, e os apps de iPhone e Android são instalações comuns das lojas que se conectam a esse servidor.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Servidor (Docker Compose)', 'Onde obter': '[Guia de instalação](https://docs.immich.app/install/docker-compose): baixar dois arquivos, editar um e executar um comando' },
          { 'Opção': 'iPhone e iPad', 'Onde obter': '[App Store](https://apps.apple.com/us/app/immich/id1613945652) (grátis, iOS 15.0 ou posterior)' },
          { 'Opção': 'Android', 'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich), ou o APK nas [releases do GitHub](https://github.com/immich-app/immich/releases)' },
          { 'Opção': 'Navegador', 'Onde obter': 'Qualquer navegador, no endereço do seu servidor na porta 2283, segundo a documentação' },
          { 'Opção': 'Site', 'Onde obter': '[immich.app](https://immich.app)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[immich.app/privacy-policy](https://immich.app/privacy-policy) (atualizada em 6 de abril de 2026)' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/immich-app/immich](https://github.com/immich-app/immich)' },
          { 'Opção': 'Demo', 'Onde obter': '[demo.immich.app](https://demo.immich.app), com o login no README' },
        ],
        note: 'Versão analisada: v3.3.5, publicada em 21 de outubro de 2026 segundo a release do GitHub e o registro da App Store; a página do Google Play mostra uma atualização em 20 de outubro de 2026. A instalação exige um terminal e o Docker, então é uma configuração de estilo para desenvolvedores, e não uma instalação de duplo clique. A documentação pede que você mantenha o app de celular e o servidor na mesma versão principal e secundária.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A documentação pede no mínimo 6 GB de RAM e 2 núcleos de CPU, e recomenda 8 GB e 4 núcleos.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Memória', 'O que dizem as fontes': 'Mínimo de 6 GB, recomendado 8 GB; com apenas 4 GB é possível executá-lo com o aprendizado de máquina desativado' },
          { 'Item': 'CPU', 'O que dizem as fontes': 'Mínimo de 2 núcleos, 4 recomendados; amd64 e arm64; desde a v3, o contêiner de ML exige o nível x86-64-v2' },
          { 'Item': 'Sistema operacional', 'O que dizem as fontes': 'Linux de 64 bits recomendado; macOS e Windows via Docker Desktop são possíveis, mas desaconselhados, com suporte limitado' },
          { 'Item': 'Armazenamento', 'O que dizem as fontes': 'Sistema de arquivos compatível com Unix; miniaturas e transcodificações somam 10-20%; o banco de dados deve ficar em um SSD local, não em um compartilhamento de rede' },
          { 'Item': 'Docker', 'O que dizem as fontes': 'Docker com o plugin Compose; o antigo comando docker-compose não é aceito' },
          { 'Item': 'GPU', 'O que dizem as fontes': 'Opcional para o contêiner de ML; a documentação chama a aceleração de experimental' },
          { 'Item': 'Celular', 'O que dizem as fontes': 'iOS 15.0 ou posterior segundo a App Store; requisito do Android não consultado' },
        ],
        note: 'Esses mínimos vêm da documentação do projeto; a PromptQuorum não mediu o tempo de indexação nem o uso de memória em nenhum hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem o guia de Docker Compose do projeto; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Baixe o arquivo compose',
            whyItMatters: 'Crie uma pasta e baixe nela o docker-compose.yml e o modelo example.env da release mais recente.',
          },
          {
            title: 'Edite o arquivo de ambiente',
            whyItMatters: 'Defina UPLOAD_LOCATION com uma pasta que tenha espaço suficiente e troque DB_PASSWORD por um novo valor usando apenas letras e dígitos.',
          },
          {
            title: 'Inicie os contêineres',
            whyItMatters: 'Execute docker compose up -d nessa pasta, abra o servidor em um navegador e faça o cadastro; o primeiro usuário se torna o administrador.',
          },
          {
            title: 'Conecte o celular',
            whyItMatters: 'Instale o app, informe o endereço do servidor, escolha os álbuns para backup e acompanhe o progresso na aba Job Queues.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Cada item abaixo vem do README ou da documentação do projeto; nenhum foi testado pela PromptQuorum.**',
        ],
        items: [
          '**Backup.** Backup automático e em segundo plano a partir do celular, álbuns selecionáveis, prevenção de duplicatas e um enviador por linha de comando.',
          '**Biblioteca.** Álbuns, álbuns compartilhados, compartilhamento com parceiro, links públicos, um mapa, memórias, pilhas, etiquetas, uma visualização de pastas e suporte a RAW.',
          '**Busca.** Busca contextual (CLIP) e filtros por pessoas, lugares, nome do arquivo, descrição, etiquetas, câmera, datas e classificação por estrelas; a documentação lista o texto em imagens (OCR) como um tipo de busca.',
          '**Contas.** Vários usuários, login por OAuth e chaves de API; o primeiro usuário cadastrado é o administrador.',
          '**Importação.** O immich-go para o Google Takeout e as External Libraries para acervos que já estão no disco.',
        ],
        note: 'A tabela de recursos do README marca alguns itens como exclusivos da web ou do celular, por exemplo etiquetas e administração na web e suporte offline no celular.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Recursos de IA e onde eles rodam',
        content: [
          '**A IA é baseada em imagens: modelos CLIP para a busca inteligente e modelos para detecção e reconhecimento de rostos, todos executados por um contêiner de aprendizado de máquina; nenhum modelo de linguagem está envolvido.**',
        ],
        items: [
          '**Busca inteligente.** As consultas livres são comparadas com embeddings CLIP armazenados no Postgres por meio da extensão VectorChord; você escolhe o modelo em Administração, e o padrão é o mais rápido.',
          '**Idiomas.** A documentação diz que os modelos nllb esperam consultas no idioma definido nas configurações do usuário, enquanto os modelos xlm e siglip2 lidam com texto em qualquer idioma.',
          '**Rostos.** A detecção roda na imagem de pré-visualização, um modelo de reconhecimento gera embeddings, e o agrupamento DBSCAN os reúne em pessoas que você pode nomear.',
          '**Hospedagem.** O serviço de ML integrado vem configurado por padrão, e o FAQ diz que ele pode rodar em uma máquina mais potente.',
          '**GPU.** Existem backends CUDA, ROCm, OpenVINO, ARM NN e RKNN; a documentação chama o recurso de experimental, o CUDA de o mais confiável e o ROCm de novo.',
        ],
        note: 'Estas são declarações do próprio projeto. A PromptQuorum não testou a relevância da busca, a precisão do agrupamento de rostos nem a velocidade.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A documentação diz que, depois de baixado um modelo de busca inteligente, o Immich não precisa de conexão de rede, a menos que a verificação de versão esteja ativada, e que a geocodificação reversa roda no seu próprio servidor a partir de dados do GeoNames.** Assim, as fotos e o banco de dados permanecem no seu hardware, a menos que você os compartilhe.',
          'Requisições externas citadas nas fontes: downloads de modelos do Hugging Face, a verificação de versão opcional para o GitHub e os tiles de mapa. A política de privacidade, atualizada em 6 de abril de 2026, lista um Tile Server e um Version Service que registram metadados das requisições (o tile solicitado ou o user agent, o endereço IP e o horário); ela diz que o servidor de tiles é opcional e pode ser desativado. O e-mail enviado pelo servidor passa por um servidor SMTP que você configura.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do projeto, não resultados de auditoria. A documentação e a política citam serviços diferentes para a verificação de versão, e a PromptQuorum não inspecionou o tráfego de rede nem o código-fonte.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Quem auto-hospeda com um servidor Docker ou NAS** e quer um substituto privado para um serviço de fotos na nuvem.',
          '**Famílias e pequenos grupos** que querem uma biblioteca única, com contas separadas, álbuns compartilhados e backup pelo celular.',
          '**Quem tem grandes acervos de rolo da câmera** e precisa pesquisar por conteúdo e por pessoa.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade da IA.** A relevância da busca, a precisão do agrupamento de rostos e a velocidade não foram testadas; os números de benchmark da documentação vêm de um único sistema de teste.',
          '**Backups.** A documentação avisa que o banco de dados guarda apenas metadados e que você mesmo deve fazer backup da pasta de uploads, e o README pede um plano de backup 3-2-1.',
          '**Comportamento da lixeira.** O FAQ diz que os arquivos originais que foram para a lixeira são excluídos quando a lixeira é esvaziada no Immich.',
          '**Termos de compra.** A página de compra não pôde ser lida, então os preços não são informados; a documentação diz que a compra é um apoio voluntário.',
          '**Detalhes do celular.** O requisito de versão do Android e as seções de segurança de dados das lojas não foram consultados.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório tem duas outras ferramentas de biblioteca de fotos com análise, uma auto-hospedada e outra baseada na nuvem.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[PhotoPrism](/pt/power-local-llm/photoprism-review)', 'Plataformas': 'Servidor (Docker), navegador', 'Preço / licença': 'Community grátis / AGPL-3.0', 'Diferença principal': 'Auto-hospedado como o Immich, mas apenas como app web; os apps de celular vêm de outros desenvolvedores' },
          { 'App': '[Ente Photos](/pt/power-local-llm/ente-photos-review)', 'Plataformas': 'iOS, Android, desktop, web', 'Preço / licença': '10 GB grátis, planos pagos / AGPL-3.0', 'Diferença principal': 'Armazenamento criptografado na nuvem com IA no aparelho; sem servidor próprio' },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Immich é um LLM local?',
            a: 'Não. A documentação descreve busca de imagens com CLIP e reconhecimento facial, não um modelo de linguagem, e as fontes consultadas não trazem nenhum recurso de chat nem de escrita de legendas.',
          },
          {
            q: 'O Immich funciona sem GPU?',
            a: 'A documentação lista a aceleração por GPU como opcional e experimental, e os requisitos mínimos citam apenas RAM e núcleos de CPU; a velocidade em CPU não foi medida.',
          },
          {
            q: 'Posso migrar do Google Fotos?',
            a: 'A página de introdução indica o immich-go para exportações do Google Takeout; a PromptQuorum não tentou uma migração.',
          },
          {
            q: 'Como atualizo o Immich?',
            a: 'O guia de instalação remete a instruções de atualização separadas, e o FAQ pede que você mantenha o app e o servidor na mesma versão principal e secundária.',
          },
          {
            q: 'Onde ficam meus arquivos?',
            a: 'Na pasta definida como UPLOAD_LOCATION; o banco de dados no contêiner do Postgres guarda apenas metadados e informações de usuários.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Immich é um jeito gratuito e com atualizações ativas de manter uma biblioteca de fotos pesquisável, com backup pelo celular, em hardware que você controla, com busca por conteúdo e agrupamento de rostos que rodam no seu próprio servidor. Em contrapartida, a instalação exige Docker e um arquivo de ambiente, a aceleração por GPU é rotulada como experimental, e nenhuma das afirmações sobre a qualidade da IA pôde ser verificada aqui. Serve a quem já opera serviços em casa ou em um NAS; quem quer um app de duplo clique ou um assistente com modelo de linguagem deve procurar em outro lugar.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Immich](https://immich.app) — plataformas, links e política de privacidade, consultado em 26 de outubro de 2026.',
          '[Documentação do Immich](https://docs.immich.app) — requisitos, guia de instalação, busca inteligente, reconhecimento facial, configurações do sistema e FAQ, consultada em 26 de outubro de 2026.',
          '[Política de privacidade do Immich](https://immich.app/privacy-policy) — dados armazenados localmente, servidor de tiles e serviço de versão, atualizada em 6 de abril de 2026.',
          '[Immich no GitHub](https://github.com/immich-app/immich) — README, releases e atividade de commits, consultados em 26 de outubro de 2026.',
          '[Immich na App Store](https://apps.apple.com/us/app/immich/id1613945652) e no [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) — vendedor, versão e datas de atualização, consultados em 26 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PhotoPrism](/pt/power-local-llm/photoprism-review) — outra biblioteca de fotos auto-hospedada, com etiquetas de IA integradas.',
          '[Análise do Ente Photos](/pt/power-local-llm/ente-photos-review) — backup de fotos criptografado, com reconhecimento facial e busca em linguagem natural no aparelho.',
          '[Diretório de software para LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },

  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Image & Video Generation',
    heroImage: '/images/immich-review-hero-ar.webp',
    title: 'مراجعة Immich: مكتبة صور ذاتية الاستضافة مع بحث ذكي',
    seoTitle: 'مراجعة Immich: مكتبة صور ذاتية الاستضافة وبحث ذكي',
    intro:
      'Immich خادم مجاني ومفتوح المصدر لنسخ الصور والفيديو احتياطيًا، له تطبيقات لـ iPhone وAndroid، ويعمل بحثه الذكي والتعرف على الوجوه فيه ضمن حاوية تعلّم آلي على عتادك الخاص. وهو ليس تطبيق دردشة ولا تطبيق LLM: فالذكاء الاصطناعي فيه بحث عن الصور بأسلوب CLIP وتجميع للوجوه. تعكس هذه المراجعة وثائقه وإصدارات GitHub وصفحات المتاجر وسياسة الخصوصية، كما اطّلعنا عليها في 26 أكتوبر 2026.',
    metaDescription:
      'مراجعة Immich: خادم مجاني بترخيص AGPL لنسخ الصور والفيديو مع تطبيقات iPhone وAndroid، وبحث CLIP وتعرّف على الوجوه على خادمك. الإعداد والخصوصية.',
    twitterDescription:
      'مراجعة Immich: مكتبة صور ذاتية الاستضافة بترخيص AGPL، يعمل بحثها الذكي وتعرّفها على الوجوه على خادمك. إعداد Docker والمتطلبات والطلبات الخارجية وما لم نتمكن من التحقق منه.',
    audience:
      'من يستضيفون خدماتهم ذاتيًا ويريدون استبدال خدمة صور سحابية بخادمهم الخاص، ويحتاجون إلى معرفة جهد الإعداد والعتاد المطلوب وأين يعمل الذكاء الاصطناعي وما لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Immich',
    targetKeywords: [
      'مراجعة immich',
      'بديل صور جوجل ذاتي الاستضافة',
      'immich البحث الذكي clip',
      'immich التعرف على الوجوه',
      'إعداد immich عبر docker compose',
      'خادم نسخ احتياطي خاص للصور',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi'],
    leadAnswerBlock:
      '**Immich (الإصدار v3.3.5 حتى 26 أكتوبر 2026) خادم مجاني بترخيص AGPL-3.0 لنسخ الصور والفيديو احتياطيًا، له عملاء لـ iPhone وAndroid والمتصفح، ويعمل بحثه الذكي والتعرف على الوجوه فيه ضمن حاوية تعلّم آلي تستضيفها بنفسك.** يُثبَّت عبر Docker Compose، وتحذّر وثائقه نفسها من أن قاعدة البيانات تحتوي البيانات الوصفية فقط، فتحتاج ملفاتك إلى نسخة احتياطية مستقلة. وهو لا يتضمن أي ميزة دردشة أو LLM.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي Immich صورك وبحث الذكاء الاصطناعي على خادمك؟',
        answer:
          'بحسب وثائقه، نعم: الصور وقاعدة البيانات وحاوية التعلّم الآلي كلها على عتادك، وتُنزَّل النماذج مرة واحدة. وتتصل بعض الخدمات الاختيارية بجهات خارجية، مثل فحص الإصدار وخادم بلاطات الخرائط. لم تفحص PromptQuorum حركة الشبكة.',
        bullets: [
          'مجاني ومفتوح المصدر (AGPL-3.0)؛ وتقول الوثائق إنه لن تُوضع أي ميزة خلف جدار دفع.',
          'الخادم على Docker؛ والتطبيقات على [App Store](https://apps.apple.com/us/app/immich/id1613945652) و[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich)، إضافة إلى أي متصفح.',
          'يستخدم البحث الذكي نماذج CLIP؛ وتُكتشف الوجوه وتُجمَّع في أشخاص ويمكن البحث بها.',
          'الحد الأدنى 6 GB ذاكرة ونواتان للمعالج؛ ويمكن تشغيل حاوية التعلّم الآلي على جهاز آخر.',
          'ليس تطبيق LLM: لا توجد دردشة ولا تلخيص ولا توليد وصف للصور في الوثائق التي قرأناها.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Immich؟', anchor: 'what-is-immich' },
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
            text: 'Immich مكتبة صور وفيديو مفتوحة المصدر ومستضافة ذاتيًا مع تطبيقات للهاتف، تبحث في الصور بحسب محتواها وتجمّع الوجوه بنماذج تعلّم آلي تعمل على خادمك الخاص.',
          },
          {
            type: 'plain-terms',
            text: 'تشغّل Immich على خادم منزلي أو جهاز NAS، فيرفع هاتفك صوره إليه تلقائيًا، ثم تبحث فيها بكتابة ما يظهر في الصورة أو باختيار شخص.',
          },
        ],
        items: [
          'الصيانة: صدر الإصدار v3.3.5 في 21 أكتوبر 2026، وتلقّى المستودع التزامات جديدة في 26 أكتوبر 2026، فلا ينطبق تحذير المشروع المتوقف.',
          'الجهة المشغّلة: يذكر App Store شركة FUTO Holdings, Inc. بصفتها البائع؛ والشيفرة على GitHub بترخيص AGPL-3.0.',
          'الإعداد: تثبيت خادم عبر Docker Compose مع ملف بيئة يلزم تعديله؛ وتطبيقات الهاتف تُثبَّت من المتاجر لكنها تحتاج إلى ذلك الخادم.',
          'التكلفة: مجاني؛ وشراء ترخيص دعم طوعي بحسب الوثائق.',
          'النطاق: إدارة الصور والفيديو مع ذكاء اصطناعي قائم على الصور؛ ولا توجد دردشة مع نموذج لغوي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع المشروع ووثائقه وسياسة الخصوصية ومستودع GitHub وصفحات المتاجر، التي اطّلعنا عليها في 26 أكتوبر 2026. لم تثبّت PromptQuorum برنامج Immich، لذا لا نقيّم جودة البحث ولا دقة تجميع الوجوه ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-immich',
        title: 'ما هو Immich؟',
        content: [
          '**Immich تطبيق مستضاف ذاتيًا لنسخ صور الهاتف ومقاطع الفيديو احتياطيًا وتصفحها والبحث فيها على خادم تتحكم به.** يصفه ملف README على GitHub بأنه «حل عالي الأداء ومستضاف ذاتيًا لإدارة الصور والفيديو»؛ والشيفرة مفتوحة المصدر بترخيص AGPL-3.0.',
          'يذكر App Store شركة FUTO Holdings, Inc. بصفتها البائع. تنسخ التطبيقات ألبوم كاميرا الهاتف احتياطيًا إلى خادمك، وتضيف واجهة الويب الألبومات والمشاركة والخريطة والإدارة. وتصف الوثائق أجزاء الذكاء الاصطناعي بأنها خدمة تعلّم آلي منفصلة يرسل إليها الخادم الصور.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Immich خادم تثبّته بنفسك؛ الطريقة الموثّقة هي Docker Compose، وتطبيقات iPhone وAndroid تُثبَّت من المتاجر بالطريقة المعتادة وتتصل بذلك الخادم.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'الخادم (Docker Compose)', 'مصدر الحصول عليه': '[دليل التثبيت](https://docs.immich.app/install/docker-compose): نزّل ملفين وعدّل أحدهما ونفّذ أمرًا واحدًا' },
          { 'الخيار': 'iPhone وiPad', 'مصدر الحصول عليه': '[App Store](https://apps.apple.com/us/app/immich/id1613945652) (مجاني، iOS 15.0 أو أحدث)' },
          { 'الخيار': 'Android', 'مصدر الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich)، أو ملف APK من [إصدارات GitHub](https://github.com/immich-app/immich/releases)' },
          { 'الخيار': 'المتصفح', 'مصدر الحصول عليه': 'أي متصفح على عنوان خادمك عبر المنفذ 2283، بحسب الوثائق' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[immich.app](https://immich.app)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[immich.app/privacy-policy](https://immich.app/privacy-policy) (حُدّثت في 6 أبريل 2026)' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/immich-app/immich](https://github.com/immich-app/immich)' },
          { 'الخيار': 'عرض تجريبي', 'مصدر الحصول عليه': '[demo.immich.app](https://demo.immich.app)، وبيانات الدخول في README' },
        ],
        note: 'الإصدار الذي راجعناه: v3.3.5، الذي نُشر في 21 أكتوبر 2026 بحسب إصدار GitHub وسجل App Store؛ وتعرض صفحة Google Play تحديثًا في 20 أكتوبر 2026. يتطلب التثبيت طرفية وDocker، فهو إعداد بأسلوب المطوّرين وليس تثبيتًا بنقرة مزدوجة. وتطلب الوثائق إبقاء تطبيق الهاتف والخادم على الإصدارين الرئيسي والفرعي نفسيهما.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**تطلب الوثائق 6 GB من الذاكرة ونواتين للمعالج كحد أدنى، وتوصي بـ 8 GB و4 نوى.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'الذاكرة', 'ما تقوله المصادر': 'الحد الأدنى 6 GB والموصى به 8 GB؛ ومع 4 GB فقط يمكن التشغيل مع تعطيل التعلّم الآلي' },
          { 'البند': 'المعالج', 'ما تقوله المصادر': 'نواتان كحد أدنى و4 موصى بها؛ amd64 وarm64؛ وتحتاج حاوية التعلّم الآلي إلى مستوى x86-64-v2 منذ الإصدار 3' },
          { 'البند': 'نظام التشغيل', 'ما تقوله المصادر': 'يُوصى بـ Linux بـ 64 بت؛ ويمكن استخدام macOS وWindows عبر Docker Desktop لكن ذلك غير مستحسن ودعمه محدود' },
          { 'البند': 'التخزين', 'ما تقوله المصادر': 'نظام ملفات متوافق مع Unix؛ وتضيف الصور المصغّرة والتحويلات 10-20%؛ ويجب أن تكون قاعدة البيانات على SSD محلي لا على مجلد شبكي' },
          { 'البند': 'Docker', 'ما تقوله المصادر': 'Docker مع إضافة Compose؛ والأمر القديم docker-compose غير مدعوم' },
          { 'البند': 'وحدة GPU', 'ما تقوله المصادر': 'اختيارية لحاوية التعلّم الآلي؛ وتصف الوثائق التسريع بأنه تجريبي' },
          { 'البند': 'الهاتف', 'ما تقوله المصادر': 'iOS 15.0 أو أحدث بحسب App Store؛ ولم نقرأ متطلبات Android' },
        ],
        note: 'هذه الحدود الدنيا من وثائق المشروع؛ ولم تقِس PromptQuorum زمن الفهرسة ولا استهلاك الذاكرة على أي عتاد.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات دليل Docker Compose الخاص بالمشروع؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'نزّل ملف compose',
            whyItMatters: 'أنشئ مجلدًا، ثم نزّل إليه ملف docker-compose.yml وقالب example.env من أحدث إصدار.',
          },
          {
            title: 'عدّل ملف البيئة',
            whyItMatters: 'حدّد UPLOAD_LOCATION بمجلد ذي مساحة كافية، وغيّر DB_PASSWORD إلى قيمة جديدة تتكون من أحرف وأرقام فقط.',
          },
          {
            title: 'شغّل الحاويات',
            whyItMatters: 'نفّذ docker compose up -d في ذلك المجلد، ثم افتح الخادم في المتصفح وسجّل حسابًا؛ ويصبح أول مستخدم هو المدير.',
          },
          {
            title: 'اربط هاتفك',
            whyItMatters: 'ثبّت التطبيق وأدخل عنوان خادمك واختر الألبومات المراد نسخها احتياطيًا وتابع التقدم في تبويب Job Queues.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل بند أدناه مصدره ملف README أو وثائق المشروع؛ ولم تختبر PromptQuorum أيًّا منها.**',
        ],
        items: [
          '**النسخ الاحتياطي.** نسخ تلقائي وفي الخلفية من الهاتف، وألبومات محددة، ومنع التكرار، وأداة رفع بسطر الأوامر.',
          '**المكتبة.** ألبومات وألبومات مشتركة ومشاركة مع شريك وروابط عامة وخريطة وذكريات وتجميعات (stacks) ووسوم وعرض للمجلدات ودعم RAW.',
          '**البحث.** بحث سياقي (CLIP) إضافة إلى مرشّحات للأشخاص والأماكن واسم الملف والوصف والوسوم والكاميرا والتواريخ والتقييم بالنجوم؛ وتذكر الوثائق النص داخل الصور (OCR) نوعًا من أنواع البحث.',
          '**الحسابات.** عدة مستخدمين وتسجيل دخول عبر OAuth ومفاتيح API؛ وأول مستخدم مسجَّل هو المدير.',
          '**الاستيراد.** immich-go لملفات Google Takeout، وExternal Libraries للأرشيفات الموجودة أصلًا على القرص.',
        ],
        note: 'يصنّف جدول الميزات في README بعض البنود على أنها للويب فقط أو للجوال فقط، مثل الوسوم والإدارة على الويب والدعم دون اتصال على الجوال.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'ميزات الذكاء الاصطناعي وأين تعمل',
        content: [
          '**الذكاء الاصطناعي هنا قائم على الصور: نماذج CLIP للبحث الذكي ونماذج لاكتشاف الوجوه والتعرف عليها، وكلها تديرها حاوية تعلّم آلي؛ ولا يدخل أي نموذج لغوي في العملية.**',
        ],
        items: [
          '**البحث الذكي.** تُطابَق الاستعلامات الحرة مع تمثيلات CLIP المخزّنة في Postgres عبر امتداد VectorChord؛ وتختار النموذج من قسم Administration، والافتراضي هو الأسرع.',
          '**اللغات.** تقول الوثائق إن نماذج nllb تتوقع استعلامات بلغة المستخدم المحددة في إعداداته، بينما تتعامل نماذج xlm وsiglip2 مع نصوص بأي لغة.',
          '**الوجوه.** يجري الاكتشاف على صورة المعاينة، ويُنتج نموذج التعرف تمثيلات متجهية، ثم تجمّعها خوارزمية DBSCAN في أشخاص يمكنك تسميتهم.',
          '**الاستضافة.** خدمة التعلّم الآلي المدمجة مضبوطة افتراضيًا، وتقول الأسئلة الشائعة إنه يمكن تشغيلها على جهاز أقوى بدلًا من ذلك.',
          '**وحدة GPU.** توجد واجهات CUDA وROCm وOpenVINO وARM NN وRKNN؛ وتصف الوثائق الميزة بأنها تجريبية، وCUDA الأكثر موثوقية، وROCm جديدة.',
        ],
        note: 'هذه تصريحات المشروع نفسه. لم تختبر PromptQuorum صلة نتائج البحث ولا دقة تجميع الوجوه ولا السرعة.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول الوثائق إنه بعد تنزيل نموذج البحث الذكي لا يحتاج Immich إلى اتصال بالشبكة ما لم يُفعَّل فحص الإصدار، وإن الترميز الجغرافي العكسي يعمل على خادمك من بيانات GeoNames.** وبالتالي تبقى الصور وقاعدة البيانات على عتادك ما لم تشاركها.',
          'الطلبات الخارجية المذكورة في المصادر: تنزيل النماذج من Hugging Face، وفحص الإصدار الاختياري إلى GitHub، وبلاطات الخرائط. وتسرد سياسة الخصوصية، التي حُدّثت آخر مرة في 6 أبريل 2026، خادم بلاطات (Tile Server) وخدمة إصدارات (Version Service) تسجّلان بيانات وصفية للطلب (البلاطة المطلوبة أو user agent، وعنوان IP، والتوقيت)؛ وتقول إن خادم البلاطات اختياري ويمكن تعطيله. ويمر البريد الإلكتروني من جهة الخادم عبر خادم SMTP تضبطه بنفسك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من المشروع وليست نتائج تدقيق. تسمّي الوثائق والسياسة خدمتين مختلفتين لفحص الإصدار، ولم تفحص PromptQuorum حركة الشبكة ولا الشيفرة المصدرية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يستضيفون على خادم Docker أو جهاز NAS** ويريدون بديلًا خاصًا لخدمة صور سحابية.',
          '**الأسر والمجموعات الصغيرة** التي تريد مكتبة واحدة بحسابات منفصلة وألبومات مشتركة ونسخًا احتياطيًا من الهاتف.',
          '**أصحاب أرشيفات الصور الكبيرة في ألبوم الكاميرا** الذين يحتاجون إلى البحث بالمحتوى وبالشخص.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الذكاء الاصطناعي.** لم نختبر صلة نتائج البحث ولا دقة تجميع الوجوه ولا السرعة؛ وأرقام الأداء في الوثائق مصدرها نظام اختبار واحد.',
          '**النسخ الاحتياطي.** تحذّر الوثائق من أن قاعدة البيانات تحتوي البيانات الوصفية فقط وأن عليك نسخ مجلد الرفع احتياطيًا بنفسك، ويطلب README خطة نسخ احتياطي بقاعدة 3-2-1.',
          '**سلوك سلة المحذوفات.** تقول الأسئلة الشائعة إن الملفات الأصلية التي نُقلت إلى سلة المحذوفات تُحذف عند إفراغ السلة في Immich.',
          '**شروط الشراء.** تعذّرت قراءة صفحة الشراء، لذا لا نذكر الأسعار؛ وتقول الوثائق إن الشراء دعم طوعي.',
          '**تفاصيل الجوال.** لم نقرأ متطلبات إصدار Android ولا أقسام سلامة البيانات في المتاجر.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'يضم الدليل أداتين أخريين لمكتبات الصور لهما مراجعة، إحداهما ذاتية الاستضافة والأخرى سحابية.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[PhotoPrism](/ar/power-local-llm/photoprism-review)', 'المنصات': 'خادم (Docker) ومتصفح', 'السعر / الرخصة': 'Community مجانية / AGPL-3.0', 'الفرق الأبرز': 'ذاتي الاستضافة مثل Immich، لكنه تطبيق ويب فقط؛ وتطبيقات الهاتف له من مطوّرين آخرين' },
          { 'التطبيق': '[Ente Photos](/ar/power-local-llm/ente-photos-review)', 'المنصات': 'iOS وAndroid وسطح المكتب والويب', 'السعر / الرخصة': '10 GB مجانًا وخطط مدفوعة / AGPL-3.0', 'الفرق الأبرز': 'تخزين سحابي مشفّر مع ذكاء اصطناعي على الجهاز؛ دون خادم خاص بك' },
        ],
        note: 'تحقق من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Immich نموذج LLM محلي؟',
            a: 'لا. تصف الوثائق بحث CLIP عن الصور والتعرف على الوجوه، وليس نموذجًا لغويًا، ولا تتضمن المصادر التي قرأناها ميزة دردشة أو كتابة وصف للصور.',
          },
          {
            q: 'هل يعمل Immich دون وحدة GPU؟',
            a: 'تذكر الوثائق تسريع GPU خيارًا اختياريًا وتجريبيًا، ولا تذكر متطلبات الحد الأدنى سوى الذاكرة ونوى المعالج؛ ولم تُقَس السرعة على المعالج.',
          },
          {
            q: 'هل يمكنني الانتقال من صور جوجل؟',
            a: 'تشير صفحة المقدمة إلى immich-go لملفات تصدير Google Takeout؛ ولم تجرّب PromptQuorum أي ترحيل.',
          },
          {
            q: 'كيف أحدّث Immich؟',
            a: 'يحيل دليل التثبيت إلى تعليمات ترقية منفصلة، وتطلب الأسئلة الشائعة إبقاء التطبيق والخادم على الإصدارين الرئيسي والفرعي نفسيهما.',
          },
          {
            q: 'أين تُحفظ ملفاتي؟',
            a: 'في المجلد المحدد بـ UPLOAD_LOCATION؛ أما قاعدة البيانات في حاوية Postgres فتحتوي البيانات الوصفية ومعلومات المستخدمين فقط.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Immich وسيلة مجانية ومحدَّثة باستمرار للاحتفاظ بمكتبة صور قابلة للبحث مع نسخ احتياطي من الهاتف على عتاد تتحكم به، مع بحث بالمحتوى وتجميع للوجوه يعملان على خادمك الخاص. في المقابل، يتطلب الإعداد Docker وملف بيئة، ويُوصف تسريع GPU بأنه تجريبي، ولم نتمكن هنا من التحقق من أي ادعاء بشأن جودة الذكاء الاصطناعي. يناسب من يشغّلون خدمات في المنزل أو على جهاز NAS؛ ومن يريد تطبيقًا بنقرة مزدوجة أو مساعدًا بنموذج لغوي فليبحث في مكان آخر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Immich](https://immich.app) — المنصات والروابط وسياسة الخصوصية، اطُّلع عليه في 26 أكتوبر 2026.',
          '[وثائق Immich](https://docs.immich.app) — المتطلبات ودليل التثبيت والبحث الذكي والتعرف على الوجوه وإعدادات النظام والأسئلة الشائعة، اطُّلع عليها في 26 أكتوبر 2026.',
          '[سياسة خصوصية Immich](https://immich.app/privacy-policy) — البيانات المخزّنة محليًا وخادم البلاطات وخدمة الإصدارات، حُدّثت في 6 أبريل 2026.',
          '[Immich على GitHub](https://github.com/immich-app/immich) — README والإصدارات ونشاط الالتزامات، اطُّلع عليها في 26 أكتوبر 2026.',
          '[Immich على App Store](https://apps.apple.com/us/app/immich/id1613945652) و[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) — البائع والإصدار وتواريخ التحديث، اطُّلع عليها في 26 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PhotoPrism](/ar/power-local-llm/photoprism-review) — مكتبة صور ذاتية الاستضافة أخرى بتصنيفات ذكاء اصطناعي مدمجة.',
          '[مراجعة Ente Photos](/ar/power-local-llm/ente-photos-review) — نسخ احتياطي مشفّر للصور مع بحث بالوجوه وباللغة الطبيعية على الجهاز.',
          '[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },

  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Image & Video Generation',
    heroImage: '/images/immich-review-hero-zh.webp',
    title: 'Immich 评测：带智能搜索的自托管照片库',
    seoTitle: 'Immich 评测：免费自托管照片库，含智能搜索与人脸识别',
    intro:
      'Immich 是免费开源的照片和视频备份服务器，提供 iPhone 和 Android 应用，其智能搜索与人脸识别由运行在你自己硬件上的机器学习容器完成。它不是聊天或 LLM 应用：这里的 AI 指的是 CLIP 式的图片搜索和人脸分组。本评测基于其文档、GitHub 发布、应用商店页面和隐私政策（2026 年 10 月 26 日查阅）。',
    metaDescription:
      'Immich 评测：免费 AGPL 照片和视频备份服务器，带 iPhone、Android 应用，CLIP 智能搜索与人脸识别在你自己的服务器上运行。',
    twitterDescription:
      'Immich 评测：采用 AGPL 许可证的自托管照片库，智能搜索和人脸识别在你的服务器上运行。涵盖 Docker 安装、运行要求、对外请求，以及我们未能核实的内容。',
    audience:
      '想用自己的服务器取代云端照片服务的自托管用户，他们需要了解安装难度、硬件要求、AI 在哪里运行，以及哪些内容来源并未证实。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Immich 评测',
    targetKeywords: [
      'immich 评测',
      '自托管 google 相册 替代',
      'immich 智能搜索 clip',
      'immich 人脸识别',
      'immich docker compose 安装',
      '私密照片备份服务器',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi'],
    leadAnswerBlock:
      '**Immich（截至 2026 年 10 月 26 日为 v3.3.5）是免费的 AGPL-3.0 照片和视频备份服务器，提供 iPhone、Android 和浏览器客户端，其智能搜索与人脸识别由你自己托管的机器学习容器运行。**它通过 Docker Compose 安装；其文档提醒，数据库只保存元数据，因此你的文件需要另行备份。它不包含任何聊天或 LLM 功能。',
    quickAnswerTop: {
      zh: {
        question: 'Immich 会把你的照片和 AI 搜索都留在自己的服务器上吗？',
        answer:
          '据其文档，是的：照片、数据库和机器学习容器都在你的硬件上，模型只需下载一次。少数可选服务会连接外部，例如版本检查和地图瓦片服务器。PromptQuorum 没有检查过网络流量。',
        bullets: [
          '免费开源（AGPL-3.0）；文档称不会有任何功能被放到付费墙之后。',
          '服务器基于 Docker；应用见 [App Store](https://apps.apple.com/us/app/immich/id1613945652) 和 [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich)，另可使用任意浏览器。',
          '智能搜索使用 CLIP 模型；人脸会被检测、归入人物并可搜索。',
          '最低 6 GB 内存和 2 个 CPU 核心；机器学习容器可以运行在另一台机器上。',
          '不是 LLM 应用：在已查阅的文档中，没有聊天、摘要或图片说明生成功能。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Immich 是什么？', anchor: 'what-is-immich' },
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
            text: 'Immich 是开源、自托管的照片和视频库，配有手机应用，用运行在你自己服务器上的机器学习模型按内容搜索图片并对人脸分组。',
          },
          {
            type: 'plain-terms',
            text: '你把 Immich 运行在家用服务器或 NAS 上，手机会自动把照片上传到那里，你可以输入图片中的内容，或选择某个人来搜索。',
          },
        ],
        items: [
          '维护情况：v3.3.5 版本发布于 2026 年 10 月 21 日，仓库在 2026 年 10 月 26 日仍有新提交，因此不适用项目停更警告。',
          '运营方：App Store 将 FUTO Holdings, Inc. 列为销售方；代码以 AGPL-3.0 发布在 GitHub 上。',
          '安装：通过 Docker Compose 部署服务器，并需要编辑环境文件；手机应用从应用商店安装，但需要连接该服务器。',
          '费用：免费；据文档，购买许可证属于自愿支持。',
          '范围：照片和视频管理，搭配基于图像的 AI；没有语言模型聊天。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于项目的网站、文档、隐私政策、GitHub 仓库和应用商店页面（2026 年 10 月 26 日查阅）。PromptQuorum 没有安装过 Immich，因此不评价搜索质量、人脸分组准确度和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-immich',
        title: 'Immich 是什么？',
        content: [
          '**Immich 是一个自托管应用，用于把手机中的照片和视频备份到你掌控的服务器上，并在其中浏览和搜索。**GitHub 的 README 称它是“高性能的自托管照片和视频管理方案”；代码以 AGPL-3.0 许可证开源。',
          'App Store 将 FUTO Holdings, Inc. 列为销售方。应用会把手机相册备份到你的服务器，网页界面则提供相册、分享、地图和管理功能。文档把 AI 部分描述为独立的机器学习服务，服务器会把图片发送给它处理。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Immich 是需要你自己安装的服务器，文档推荐的方式是 Docker Compose；iPhone 和 Android 应用则是普通的商店安装，用来连接该服务器。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': '服务器（Docker Compose）', '获取方式': '[安装指南](https://docs.immich.app/install/docker-compose)：下载两个文件、修改一个、执行一条命令' },
          { '选项': 'iPhone 和 iPad', '获取方式': '[App Store](https://apps.apple.com/us/app/immich/id1613945652)（免费，需要 iOS 15.0 或更高版本）' },
          { '选项': 'Android', '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich)，或 [GitHub 发布页](https://github.com/immich-app/immich/releases)中的 APK' },
          { '选项': '浏览器', '获取方式': '据文档，在任意浏览器中访问服务器地址的 2283 端口（port 2283）' },
          { '选项': '官网', '获取方式': '[immich.app](https://immich.app)' },
          { '选项': '隐私政策', '获取方式': '[immich.app/privacy-policy](https://immich.app/privacy-policy)（最后更新于 2026 年 4 月 6 日）' },
          { '选项': '源代码', '获取方式': '[github.com/immich-app/immich](https://github.com/immich-app/immich)' },
          { '选项': '演示', '获取方式': '[demo.immich.app](https://demo.immich.app)，登录信息见 README' },
        ],
        note: '评测版本：v3.3.5，据 GitHub 发布页面和 App Store 记录于 2026 年 10 月 21 日发布；Google Play 页面显示更新于 2026 年 10 月 20 日。安装需要终端和 Docker，因此这是面向开发者风格的部署，而不是双击即可安装。文档要求手机应用与服务器保持相同的主版本号和次版本号。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**文档要求至少 6 GB 内存和 2 个 CPU 核心，推荐 8 GB 内存和 4 核。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '内存', '来源说明': '最低 6 GB，推荐 8 GB；只有 4 GB 时，可在关闭机器学习的情况下运行' },
          { '项目': 'CPU', '来源说明': '最低 2 核，推荐 4 核；支持 amd64 和 arm64；自 v3 起，机器学习容器需要 x86-64-v2 级别' },
          { '项目': '操作系统', '来源说明': '推荐 64 位 Linux；通过 Docker Desktop 在 macOS 和 Windows 上运行也可行，但不建议，支持有限' },
          { '项目': '存储', '来源说明': '兼容 Unix 的文件系统；缩略图和转码文件会额外增加 10-20%；数据库应放在本地 SSD 上，而不是网络共享' },
          { '项目': 'Docker', '来源说明': '带 Compose 插件的 Docker；不支持旧版 docker-compose 命令' },
          { '项目': 'GPU', '来源说明': '对机器学习容器是可选项；文档称该加速功能为实验性' },
          { '项目': '手机', '来源说明': '据 App Store，需要 iOS 15.0 或更高版本；Android 的要求未查阅' },
        ],
        note: '这些最低要求来自项目文档；PromptQuorum 没有在任何硬件上测量索引耗时或内存占用。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目的 Docker Compose 指南，PromptQuorum 没有执行过。**',
        ],
        numberedItems: [
          {
            title: '下载 compose 文件',
            whyItMatters: '新建一个文件夹，然后从最新发布中把 docker-compose.yml 和 example.env 模板下载到该文件夹。',
          },
          {
            title: '编辑环境文件',
            whyItMatters: '把 UPLOAD_LOCATION 设为空间充足的文件夹，并把 DB_PASSWORD 改为仅包含字母和数字的新值。',
          },
          {
            title: '启动容器',
            whyItMatters: '在该文件夹中运行 docker compose up -d，在浏览器中打开服务器并注册；第一个注册的用户成为管理员。',
          },
          {
            title: '连接你的手机',
            whyItMatters: '安装应用，输入服务器地址，选择要备份的相册，并在 Job Queues 标签页中查看进度。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下各项均来自项目的 README 或文档；PromptQuorum 均未测试。**',
        ],
        items: [
          '**备份。**手机端自动后台备份、可选择相册、防止重复，另有命令行上传工具。',
          '**照片库。**相册、共享相册、伴侣共享、公开链接、地图、回忆、堆叠、标签、文件夹视图和 RAW 支持。',
          '**搜索。**上下文（CLIP）搜索，外加人物、地点、文件名、描述、标签、相机、日期和星级筛选；文档把图片中的文字（OCR）列为一种搜索类型。',
          '**账户。**多用户、OAuth 登录和 API 密钥；第一个注册的用户是管理员。',
          '**导入。**immich-go 用于 Google Takeout，External Libraries 用于磁盘上已有的归档。',
        ],
        note: 'README 的功能表把部分功能标为仅限网页或仅限手机，例如标签和管理功能仅在网页端，离线支持仅在手机端。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 功能及运行位置',
        content: [
          '**这里的 AI 基于图像：智能搜索使用 CLIP 模型，另有人脸检测和识别模型，全部由机器学习容器运行；不涉及语言模型。**',
        ],
        items: [
          '**智能搜索。**自由文本查询会与通过 VectorChord 扩展存放在 Postgres 中的 CLIP 嵌入向量进行匹配；你在“管理”中选择模型，默认是最快的那个。',
          '**语言。**文档称，nllb 模型期望查询使用用户设置中指定的语言，而 xlm 和 siglip2 模型可处理任意语言的文本。',
          '**人脸。**检测在预览图上进行，识别模型生成嵌入向量，再由 DBSCAN 聚类把它们归为可命名的人物。',
          '**托管。**内置的机器学习服务默认已配置，常见问题称它也可以改为运行在性能更强的机器上。',
          '**GPU。**支持 CUDA、ROCm、OpenVINO、ARM NN 和 RKNN 后端；文档称该功能为实验性，其中 CUDA 最可靠，ROCm 较新。',
        ],
        note: '这些均为项目自己的说法。PromptQuorum 没有测试搜索相关性、人脸分组准确度或速度。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**文档称，智能搜索模型下载完成后，除非启用版本检查，Immich 无需网络连接；反向地理编码则在你自己的服务器上，基于 GeoNames 数据运行。**因此，除非你主动分享，照片和数据库都会留在你的硬件上。',
          '来源中提到的对外请求有：从 Hugging Face 下载模型、可选的向 GitHub 的版本检查，以及地图瓦片。隐私政策（最后更新于 2026 年 4 月 6 日）列出了瓦片服务器（Tile Server）和版本服务（Version Service），它们会记录请求元数据（请求的瓦片或 user agent、IP 地址和时间）；政策称瓦片服务器是可选的，可以关闭。服务器端的电子邮件通过你自己配置的 SMTP 服务器发送。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是项目的声明，不是审计结果。文档和政策对版本检查所指的服务不同，PromptQuorum 没有检查网络流量或源代码。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**拥有 Docker 服务器或 NAS 的自托管用户**，想要云端照片服务的私密替代方案。',
          '**家庭和小团体**，希望共用一个照片库，同时拥有各自的账户、共享相册和手机备份。',
          '**拥有大量手机相册存档的人**，需要按内容和按人物搜索。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**AI 质量。**搜索相关性、人脸分组准确度和速度均未测试；文档中的基准数据来自同一套测试系统。',
          '**备份。**文档提醒，数据库只保存元数据，上传文件夹必须由你自己备份，README 还建议采用 3-2-1 备份方案。',
          '**回收站行为。**常见问题称，在 Immich 中清空回收站时，已进入回收站的原始文件会被删除。',
          '**购买条款。**购买页面无法读取，因此未写出价格；文档称购买属于自愿支持。',
          '**手机端细节。**Android 版本要求和各应用商店的数据安全部分均未查阅。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中还有两款带评测的照片库工具，一款是自托管的，一款是云端的。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[PhotoPrism](/zh/power-local-llm/photoprism-review)', '平台': '服务器（Docker）、浏览器', '价格 / 许可证': 'Community 版免费 / AGPL-3.0', '主要区别': '与 Immich 一样可自托管，但只有网页应用；其手机应用来自其他开发者' },
          { '应用': '[Ente Photos](/zh/power-local-llm/ente-photos-review)', '平台': 'iOS、Android、桌面、网页', '价格 / 许可证': '10 GB 免费，另有付费方案 / AGPL-3.0', '主要区别': '带端侧 AI 的加密云存储；无需自己的服务器' },
        ],
        note: '请在各应用自己的页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Immich 是本地 LLM 吗？',
            a: '不是。文档描述的是 CLIP 图片搜索和人脸识别，而不是语言模型，已查阅的来源中也没有聊天或图片说明撰写功能。',
          },
          {
            q: '没有 GPU 也能使用 Immich 吗？',
            a: '文档把 GPU 加速列为可选且为实验性，最低要求中也只提到内存和 CPU 核心；仅用 CPU 时的速度未经测量。',
          },
          {
            q: '可以从 Google 相册迁移过来吗？',
            a: '简介页面推荐用 immich-go 处理 Google Takeout 导出；PromptQuorum 没有尝试迁移。',
          },
          {
            q: '如何更新 Immich？',
            a: '安装指南指向单独的升级说明，常见问题则要求手机应用与服务器保持相同的主版本号和次版本号。',
          },
          {
            q: '我的文件存放在哪里？',
            a: '存放在设为 UPLOAD_LOCATION 的文件夹中；Postgres 容器里的数据库只保存元数据和用户信息。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Immich 免费且持续更新，可以在你掌控的硬件上保存可搜索、带手机备份的照片库，内容搜索和人脸分组都在你自己的服务器上运行。不足之处在于：安装需要 Docker 和环境文件，GPU 加速被标为实验性，而关于 AI 质量的说法在这里都无法核实。它适合已经在家里或 NAS 上运行各类服务的人；想要双击即用应用或语言模型助手的用户应另寻他选。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Immich 官网](https://immich.app) — 平台、链接和隐私政策，2026 年 10 月 26 日查阅。',
          '[Immich 文档](https://docs.immich.app) — 运行要求、安装指南、智能搜索、人脸识别、系统设置和常见问题，2026 年 10 月 26 日查阅。',
          '[Immich 隐私政策](https://immich.app/privacy-policy) — 本地存储的数据、瓦片服务器和版本服务，最后更新于 2026 年 4 月 6 日。',
          '[GitHub 上的 Immich](https://github.com/immich-app/immich) — README、发布和提交动态，2026 年 10 月 26 日查阅。',
          '[App Store 上的 Immich](https://apps.apple.com/us/app/immich/id1613945652) 和 [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) — 销售方、版本和更新日期，2026 年 10 月 26 日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PhotoPrism 评测](/zh/power-local-llm/photoprism-review) — 另一款内置 AI 标签的自托管照片库。',
          '[Ente Photos 评测](/zh/power-local-llm/ente-photos-review) — 带端侧人脸与自然语言搜索的加密照片备份。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具完整目录。',
        ],
      },
    },
  },

  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Image & Video Generation',
    heroImage: '/images/immich-review-hero-ko.webp',
    title: 'Immich 리뷰: 스마트 검색을 갖춘 셀프 호스팅 사진 라이브러리',
    seoTitle: 'Immich 리뷰: 셀프 호스팅 사진과 스마트 검색',
    intro:
      'Immich는 iPhone과 Android 앱을 갖춘 무료 오픈소스 사진·동영상 백업 서버이며, 스마트 검색과 얼굴 인식은 내 하드웨어의 머신러닝 컨테이너에서 실행됩니다. 채팅이나 LLM 앱이 아니며, AI는 CLIP 방식의 이미지 검색과 얼굴 그룹화입니다. 이 리뷰는 2026년 10월 26일에 확인한 문서, GitHub 릴리스, 스토어 등록 정보, 개인정보 처리방침을 바탕으로 합니다.',
    metaDescription:
      'Immich 리뷰: iPhone·Android 앱과 CLIP 스마트 검색, 얼굴 인식을 내 서버에서 쓰는 무료 AGPL 사진 백업 서버. 설치 방법과 개인정보를 다룹니다.',
    twitterDescription:
      'Immich 리뷰: 스마트 검색과 얼굴 인식이 내 서버에서 실행되는 셀프 호스팅 AGPL 사진 라이브러리. Docker 설치, 요구 사항, 외부 요청, 확인하지 못한 내용.',
    audience:
      '클라우드 사진 서비스를 자신의 서버로 대체하려는 셀프 호스팅 사용자 가운데, 설치 수고와 하드웨어, AI가 어디에서 실행되는지, 출처가 확인하지 않는 내용을 알고 싶은 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Immich 리뷰',
    targetKeywords: [
      'immich 리뷰',
      '구글 포토 대안 셀프 호스팅',
      'immich 스마트 검색 clip',
      'immich 얼굴 인식',
      'immich docker compose 설치',
      '개인 사진 백업 서버',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi'],
    leadAnswerBlock:
      '**Immich(2026년 10월 26일 기준 v3.3.5)는 iPhone, Android, 브라우저 클라이언트를 갖춘 무료 AGPL-3.0 사진·동영상 백업 서버이며, 스마트 검색과 얼굴 인식은 직접 호스팅하는 머신러닝 컨테이너에서 실행됩니다.** Docker Compose로 설치하며, 자체 문서는 데이터베이스에 메타데이터만 있으므로 파일은 따로 백업해야 한다고 경고합니다. 채팅이나 LLM 기능은 없습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Immich는 내 사진과 AI 검색을 내 서버에 두나요?',
        answer:
          '문서에 따르면 그렇습니다. 사진, 데이터베이스, 머신러닝 컨테이너가 내 하드웨어에 있으며 모델은 한 번만 내려받습니다. 버전 확인이나 지도 타일 서버 같은 일부 선택 서비스는 외부에 접속합니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
        bullets: [
          '무료 오픈소스(AGPL-3.0)이며, 문서는 어떤 기능도 유료로 막지 않겠다고 밝힙니다.',
          '서버는 Docker로 실행하고, 앱은 [App Store](https://apps.apple.com/us/app/immich/id1613945652)와 [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich)에 있으며 브라우저로도 접속할 수 있습니다.',
          '스마트 검색은 CLIP 모델을 사용하고, 얼굴은 감지되어 인물별로 그룹화되며 검색할 수 있습니다.',
          '최소 RAM 6 GB와 CPU 2코어가 필요하며, ML 컨테이너는 다른 컴퓨터에서 실행할 수 있습니다.',
          'LLM 앱이 아닙니다. 확인한 문서에는 채팅, 요약, 캡션 생성 기능이 없습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Immich란?', anchor: 'what-is-immich' },
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
            text: 'Immich는 휴대폰 앱을 갖춘 오픈소스 셀프 호스팅 사진·동영상 라이브러리로, 내 서버의 머신러닝 모델을 이용해 사진을 내용으로 검색하고 얼굴을 그룹화합니다.',
          },
          {
            type: 'plain-terms',
            text: '집 서버나 NAS에 Immich를 실행하면 휴대폰이 사진을 자동으로 업로드하고, 사진에 무엇이 있는지 입력하거나 인물을 선택해서 검색할 수 있습니다.',
          },
        ],
        items: [
          '유지 관리: v3.3.5는 2026년 10월 21일에 공개되었고 저장소에는 2026년 10월 26일에도 커밋이 있어, 방치된 프로젝트 경고는 해당되지 않습니다.',
          '운영 주체: App Store는 판매자를 FUTO Holdings, Inc.로 표시하며, 코드는 AGPL-3.0으로 GitHub에 공개되어 있습니다.',
          '설치: 환경 파일을 편집해야 하는 Docker Compose 서버 설치이며, 휴대폰 앱은 스토어에서 설치하지만 그 서버가 필요합니다.',
          '비용: 무료이며, 문서에 따르면 라이선스 구매는 자발적 후원입니다.',
          '범위: 이미지 기반 AI를 갖춘 사진·동영상 관리이며, 언어 모델 채팅은 없습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 26일에 확인한 프로젝트의 웹사이트, 문서, 개인정보 처리방침, GitHub 저장소, 스토어 등록 정보를 바탕으로 합니다. PromptQuorum은 Immich를 설치하지 않았으므로 검색 품질, 얼굴 그룹화 정확도, 속도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-immich',
        title: 'Immich란?',
        content: [
          '**Immich는 내가 관리하는 서버에 휴대폰의 사진과 동영상을 백업하고, 둘러보고, 검색하는 셀프 호스팅 애플리케이션입니다.** GitHub README는 이를 "high performance self-hosted photo and video management solution"이라고 소개하며, 코드는 AGPL-3.0 라이선스의 오픈소스입니다.',
          'App Store는 판매자를 FUTO Holdings, Inc.로 표시합니다. 앱은 휴대폰의 카메라 롤을 내 서버에 백업하고, 웹 인터페이스는 앨범, 공유, 지도, 관리 기능을 더합니다. 문서는 AI 부분을 서버가 이미지를 보내는 별도의 머신러닝 서비스로 설명합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Immich는 직접 설치하는 서버이며 문서에 안내된 방법은 Docker Compose입니다. iPhone과 Android 앱은 그 서버에 연결하는 일반 스토어 설치 앱입니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': '서버(Docker Compose)', '입수 방법': '[설치 가이드](https://docs.immich.app/install/docker-compose): 파일 두 개를 내려받아 하나를 편집하고 명령 하나 실행' },
          { '옵션': 'iPhone과 iPad', '입수 방법': '[App Store](https://apps.apple.com/us/app/immich/id1613945652)(무료, iOS 15.0 이상)' },
          { '옵션': 'Android', '입수 방법': '[Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) 또는 [GitHub 릴리스](https://github.com/immich-app/immich/releases)의 APK' },
          { '옵션': '브라우저', '입수 방법': '문서에 따르면 서버 주소의 port 2283에서 아무 브라우저로나 접속' },
          { '옵션': '웹사이트', '입수 방법': '[immich.app](https://immich.app)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[immich.app/privacy-policy](https://immich.app/privacy-policy)(2026년 4월 6일 마지막 갱신)' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/immich-app/immich](https://github.com/immich-app/immich)' },
          { '옵션': '데모', '입수 방법': '[demo.immich.app](https://demo.immich.app), 로그인 정보는 README에 있음' },
        ],
        note: '확인한 버전: v3.3.5로, GitHub 릴리스와 App Store 기록에 따르면 2026년 10월 21일에 공개되었고, Google Play 페이지에는 2026년 10월 20일 업데이트가 표시됩니다. 설치에는 터미널과 Docker가 필요하므로 더블클릭으로 설치하는 방식이 아니라 개발자 스타일의 설정입니다. 문서는 모바일 앱과 서버를 같은 메이저·마이너 버전으로 유지하라고 안내합니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**문서는 최소 RAM 6 GB와 CPU 2코어를 요구하고, RAM 8 GB와 4코어를 권장합니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '메모리', '출처의 설명': '최소 6 GB, 권장 8 GB, 4 GB뿐이라면 머신러닝을 끄고 실행할 수 있음' },
          { '항목': 'CPU', '출처의 설명': '최소 2코어, 권장 4코어, amd64와 arm64, v3부터 ML 컨테이너는 x86-64-v2 수준 필요' },
          { '항목': '운영체제', '출처의 설명': '64비트 Linux 권장, Docker Desktop을 통한 macOS와 Windows는 가능하나 지원이 제한적이라 권장하지 않음' },
          { '항목': '저장소', '출처의 설명': 'Unix 호환 파일 시스템, 썸네일과 트랜스코드가 10-20% 추가, 데이터베이스는 네트워크 공유가 아닌 로컬 SSD에 두어야 함' },
          { '항목': 'Docker', '출처의 설명': 'Compose 플러그인이 있는 Docker, 이전 docker-compose 명령은 지원하지 않음' },
          { '항목': 'GPU', '출처의 설명': 'ML 컨테이너에는 선택 사항이며, 문서는 가속을 실험적 기능이라고 설명' },
          { '항목': '휴대폰', '출처의 설명': 'App Store 기준 iOS 15.0 이상, Android 요구 사항은 확인하지 않음' },
        ],
        note: '이 최소 사양은 프로젝트 문서에 따른 것이며, PromptQuorum은 어떤 하드웨어에서도 인덱싱 시간이나 메모리 사용량을 측정하지 않았습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트의 Docker Compose 가이드를 따른 것이며, PromptQuorum은 실행하지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: 'compose 파일 내려받기',
            whyItMatters: '폴더를 만들고, 최신 릴리스의 docker-compose.yml과 example.env 템플릿을 그 안에 내려받습니다.',
          },
          {
            title: '환경 파일 편집',
            whyItMatters: 'UPLOAD_LOCATION을 공간이 충분한 폴더로 지정하고, DB_PASSWORD를 영문자와 숫자만 쓴 새 값으로 바꿉니다.',
          },
          {
            title: '컨테이너 시작',
            whyItMatters: '해당 폴더에서 docker compose up -d를 실행하고, 브라우저에서 서버를 열어 가입합니다. 첫 번째 사용자가 관리자가 됩니다.',
          },
          {
            title: '휴대폰 연결',
            whyItMatters: '앱을 설치하고 서버 주소를 입력한 뒤, 백업할 앨범을 고르고 Job Queues 탭에서 진행 상황을 확인합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 프로젝트의 README나 문서에서 가져온 것이며, PromptQuorum은 어느 것도 테스트하지 않았습니다.**',
        ],
        items: [
          '**백업.** 휴대폰에서의 자동 및 백그라운드 백업, 앨범 선택, 중복 방지, 명령줄 업로더를 지원합니다.',
          '**라이브러리.** 앨범, 공유 앨범, 파트너 공유, 공개 링크, 지도, 메모리, 스택, 태그, 폴더 보기, RAW 지원을 제공합니다.',
          '**검색.** 문맥 기반(CLIP) 검색과 함께 인물, 장소, 파일 이름, 설명, 태그, 카메라, 날짜, 별점 필터를 제공하며, 문서는 이미지 속 텍스트(OCR)를 검색 유형으로 나열합니다.',
          '**계정.** 다중 사용자, OAuth 로그인, API 키를 지원하며 처음 가입한 사용자가 관리자입니다.',
          '**가져오기.** Google Takeout용 immich-go와, 이미 디스크에 있는 아카이브용 External Libraries를 제공합니다.',
        ],
        note: 'README의 기능 표는 일부 항목을 웹 전용 또는 모바일 전용으로 표시합니다. 예를 들어 태그와 관리는 웹, 오프라인 지원은 모바일입니다.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 기능과 실행 위치',
        content: [
          '**AI는 이미지 기반입니다. 스마트 검색용 CLIP 모델과 얼굴 감지·인식용 모델이 모두 머신러닝 컨테이너에서 실행되며, 언어 모델은 사용되지 않습니다.**',
        ],
        items: [
          '**스마트 검색.** 자유 형식 질의가 VectorChord 확장을 통해 Postgres에 저장된 CLIP 임베딩과 대조됩니다. 모델은 관리 메뉴에서 고르며 기본값은 가장 빠른 모델입니다.',
          '**언어.** 문서에 따르면 nllb 모델은 사용자 설정의 언어로 된 질의를 기대하고, xlm과 siglip2 모델은 모든 언어의 텍스트를 처리합니다.',
          '**얼굴.** 감지는 미리보기 이미지에서 실행되고, 인식 모델이 임베딩을 만들며, DBSCAN 클러스터링이 이를 이름을 붙일 수 있는 인물로 묶습니다.',
          '**호스팅.** 내장 ML 서비스가 기본으로 설정되어 있으며, FAQ는 더 강력한 컴퓨터에서 대신 실행할 수 있다고 안내합니다.',
          '**GPU.** CUDA, ROCm, OpenVINO, ARM NN, RKNN 백엔드가 있으며, 문서는 이 기능을 실험적이라고 하고 CUDA가 가장 안정적이며 ROCm은 새롭다고 설명합니다.',
        ],
        note: '이는 프로젝트 자체의 설명입니다. PromptQuorum은 검색 적합도, 얼굴 그룹화 정확도, 속도를 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**문서에 따르면 스마트 검색 모델을 한 번 내려받은 뒤에는 버전 확인을 켜지 않는 한 Immich에 네트워크 연결이 필요 없으며, 역지오코딩은 GeoNames 데이터를 사용해 내 서버에서 실행됩니다.** 따라서 사진과 데이터베이스는 내가 공유하지 않는 한 내 하드웨어에 머뭅니다.',
          '출처에 언급된 외부 요청은 Hugging Face의 모델 다운로드, GitHub로의 선택적 버전 확인, 지도 타일입니다. 2026년 4월 6일에 마지막으로 갱신된 개인정보 처리방침은 요청 메타데이터(요청한 타일 또는 user agent, IP 주소, 시간)를 기록하는 Tile Server와 Version Service를 나열하며, 타일 서버는 선택 사항이고 끌 수 있다고 밝힙니다. 서버 측 이메일은 내가 설정한 SMTP 서버를 통해 전송됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트의 선언이며 감사 결과가 아닙니다. 문서와 방침은 버전 확인에 대해 서로 다른 서비스를 언급하며, PromptQuorum은 네트워크 트래픽이나 소스 코드를 검사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Docker 서버나 NAS를 쓰는 셀프 호스팅 사용자**로 클라우드 사진 서비스의 비공개 대안을 찾는 분.',
          '**가족이나 소규모 그룹**으로 계정을 따로 두고 앨범 공유와 휴대폰 백업을 갖춘 하나의 라이브러리를 원하는 분.',
          '**카메라 롤 아카이브가 큰 분**으로 내용과 인물로 검색해야 하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**AI 품질.** 검색 적합도, 얼굴 그룹화 정확도, 속도는 테스트하지 않았으며, 문서의 벤치마크 수치는 하나의 테스트 시스템에서 나온 것입니다.',
          '**백업.** 문서는 데이터베이스에 메타데이터만 있으므로 업로드 폴더를 직접 백업해야 한다고 경고하며, README는 3-2-1 백업 계획을 요구합니다.',
          '**휴지통 동작.** FAQ에 따르면 휴지통에 넣은 원본 파일은 Immich에서 휴지통을 비울 때 삭제됩니다.',
          '**구매 조건.** 구매 페이지를 읽을 수 없어 가격은 밝히지 않았으며, 문서는 구매가 자발적 후원이라고 설명합니다.',
          '**모바일 세부 사항.** Android 버전 요구 사항과 스토어의 데이터 보안 항목은 확인하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 리뷰가 있는 사진 라이브러리 도구가 둘 더 있으며, 하나는 셀프 호스팅이고 하나는 클라우드 기반입니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[PhotoPrism](/ko/power-local-llm/photoprism-review)', '플랫폼': '서버(Docker), 브라우저', '가격 / 라이선스': '무료 Community / AGPL-3.0', '핵심 차이점': 'Immich처럼 셀프 호스팅이지만 웹 앱 전용이며, 휴대폰 앱은 다른 개발자가 만든 것' },
          { '앱': '[Ente Photos](/ko/power-local-llm/ente-photos-review)', '플랫폼': 'iOS, Android, 데스크톱, 웹', '가격 / 라이선스': '무료 10 GB, 유료 요금제 / AGPL-3.0', '핵심 차이점': '온디바이스 AI를 갖춘 암호화 클라우드 저장소이며 직접 운영하는 서버 없음' },
        ],
        note: '각 앱의 현재 가격, 라이선스, 플랫폼은 해당 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Immich는 로컬 LLM인가요?',
            a: '아닙니다. 문서는 언어 모델이 아니라 CLIP 이미지 검색과 얼굴 인식을 설명하며, 확인한 출처에는 채팅이나 캡션 작성 기능이 없습니다.',
          },
          {
            q: 'Immich는 GPU 없이 작동하나요?',
            a: '문서는 GPU 가속을 선택 사항이자 실험적 기능으로 나열하고, 최소 요구 사항에는 RAM과 CPU 코어만 있습니다. CPU에서의 속도는 측정하지 않았습니다.',
          },
          {
            q: '구글 포토에서 옮겨 올 수 있나요?',
            a: '소개 페이지는 Google Takeout 내보내기용으로 immich-go를 안내합니다. PromptQuorum은 마이그레이션을 시도하지 않았습니다.',
          },
          {
            q: 'Immich는 어떻게 업데이트하나요?',
            a: '설치 가이드는 별도의 업그레이드 안내를 가리키며, FAQ는 앱과 서버를 같은 메이저·마이너 버전으로 유지하라고 안내합니다.',
          },
          {
            q: '내 파일은 어디에 보관되나요?',
            a: 'UPLOAD_LOCATION으로 지정한 폴더입니다. Postgres 컨테이너의 데이터베이스에는 메타데이터와 사용자 정보만 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Immich는 내가 관리하는 하드웨어에 휴대폰 백업이 되는 검색 가능한 사진 라이브러리를 두는, 무료이며 활발히 업데이트되는 방법이고, 내용 검색과 얼굴 그룹화는 내 서버에서 실행됩니다. 반면 설치에는 Docker와 환경 파일이 필요하고, GPU 가속은 실험적이라고 표시되어 있고, AI 품질에 대한 주장은 여기서 하나도 확인하지 못했습니다. 집이나 NAS에서 이미 서비스를 운영하는 분께 맞고, 더블클릭으로 쓰는 앱이나 언어 모델 비서를 원한다면 다른 곳을 찾는 편이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Immich 웹사이트](https://immich.app) — 플랫폼, 링크, 개인정보 처리방침, 2026년 10월 26일 확인.',
          '[Immich 문서](https://docs.immich.app) — 요구 사항, 설치 가이드, 스마트 검색, 얼굴 인식, 시스템 설정, FAQ, 2026년 10월 26일 확인.',
          '[Immich 개인정보 처리방침](https://immich.app/privacy-policy) — 로컬에 저장되는 데이터, 타일 서버, 버전 서비스, 2026년 4월 6일 갱신.',
          '[GitHub의 Immich](https://github.com/immich-app/immich) — README, 릴리스, 커밋 활동, 2026년 10월 26일 확인.',
          '[App Store의 Immich](https://apps.apple.com/us/app/immich/id1613945652)와 [Google Play](https://play.google.com/store/apps/details?id=app.alextran.immich) — 판매자, 버전, 업데이트 날짜, 2026년 10월 26일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[PhotoPrism 리뷰](/ko/power-local-llm/photoprism-review) — 내장 AI 라벨링을 갖춘 또 하나의 셀프 호스팅 사진 라이브러리.',
          '[Ente Photos 리뷰](/ko/power-local-llm/ente-photos-review) — 온디바이스 얼굴 검색과 자연어 검색을 갖춘 암호화 사진 백업.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
