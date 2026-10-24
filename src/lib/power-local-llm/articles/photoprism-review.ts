// PhotoPrism Review: Self-Hosted AI Photo Library for Your Server
// Slug: photoprism-review
// Companion to: pixlstash-review, karakeep-review
// Sources: photoprism.app (home, /editions, /privacy [last updated 2026-08-19], /teams), docs.photoprism.app (getting-started, docker-compose, AI models,
// release notes, native-apps) and the photoprism/photoprism GitHub repository and release API, all checked 2026-10-24 — no hands-on testing.
// Prices are the figures the editions page shows (euros; managed host in US dollars), never converted. Last upstream update: 2026-10-24 (GitHub pushed_at);
// latest stable build 261007-65faaae5d published 2026-10-07.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Image & Video Generation',
    heroImage: '/images/photoprism-review-hero-en.webp',
    title: 'PhotoPrism Review: Self-Hosted AI Photo Library for Your Server',
    seoTitle: 'PhotoPrism Review: Private Self-Hosted AI Photo Library',
    intro:
      'PhotoPrism is a self-hosted photo and video manager from the Berlin company [PhotoPrism UG](https://www.photoprism.app) that you run on your own server, with built-in AI models that label pictures and recognize faces. The Community edition is free and open source, and paid memberships add maps and other features. This review is based on the project\'s website, documentation, privacy policy and GitHub repository, checked on 24 October 2026; PromptQuorum has not tested the software hands-on.',
    metaDescription:
      'PhotoPrism review: self-hosted, open-source photo library with built-in AI labels and face recognition. Free Community edition, Docker setup; untested.',
    twitterDescription:
      'PhotoPrism review: a self-hosted photo library with local AI labels and face recognition. Free Community edition, what the sources confirm and what they do not.',
    audience:
      'Self-hosters and photographers who want a private, searchable photo library on their own hardware and need to know what the sources confirm, what the project only claims and what it costs.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PhotoPrism review',
    targetKeywords: [
      'photoprism review',
      'photoprism ai photo manager',
      'self-hosted photo library',
      'photoprism face recognition',
      'photoprism docker setup',
      'google photos alternative self-hosted',
      'photoprism privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi', 'NVIDIA RTX 4060'],
    leadAnswerBlock:
      '**PhotoPrism (stable build 261007-65faaae5d) is an open-source photo and video library that you install on your own server with Docker, with AI labelling and face recognition that run there by default.** The Community edition is free and setup needs a terminal. Every statement here comes from the project\'s own website, documentation and repository.',
    quickAnswerTop: {
      en: {
        question: 'Does PhotoPrism send my photos to an AI cloud service?',
        answer:
          'Not by default, per the project: the built-in models for labels, faces and adult-content detection run on your own server. Pictures leave it only if you configure the optional OpenAI engine, and the location lookups and world maps contact outside services (see Data Flow and Privacy).',
        bullets: [
          'Search combines filters such as labels, location, colour and quality.',
          'RAW files, Live Photos and common video formats can be browsed without manual conversion.',
          'Metadata is read from Exif, XMP and sources such as Google Photos exports.',
          'An installable web app serves phones, and WebDAV clients can open the library like a drive.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is PhotoPrism?', anchor: 'what-is-photoprism' },
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
            text: 'PhotoPrism is an open-source, self-hosted library for photos and videos that labels pictures and recognizes faces with AI models running on your own server.',
          },
          {
            type: 'plain-terms',
            text: 'You install it on a computer or NAS you control, point it at your pictures, and browse and search them from any browser without handing them to a cloud photo service.',
          },
        ],
        items: [
          'Maintenance: the latest stable build is from 7 October 2026 and the repository received new commits on 24 October 2026, so no stale-project warning applies.',
          'Setup: a Docker-based server install with a config file to edit; the project offers no desktop installer or app-store app.',
          'AI: built-in models label photos and recognize faces on your server; captions need an optional Ollama or OpenAI engine.',
          'Cost: the Community edition is free and AGPL-licensed, and paid memberships are optional.',
          'Reach: the interface is a browser and installable web app; the phone apps the docs list come from other developers.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project\'s website, documentation, privacy policy and GitHub repository, checked on 24 October 2026. PromptQuorum has not installed PhotoPrism, so label accuracy, face-recognition quality and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoprism',
        title: 'What Is PhotoPrism?',
        content: [
          '**PhotoPrism is a self-hosted web application for browsing, organizing and searching photos and videos on a server you control.** Its website calls it "an AI-powered, privacy-first app"; the code is on GitHub under the AGPL, and the company says it is self-funded and independent.',
          'The free Community edition is the full open-source release. Paid memberships and team licences unlock extra features, and the project lists a managed host as an alternative to running the server yourself.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**PhotoPrism is a server you install yourself; the recommended route is Docker Compose, and there is no one-click desktop or phone installer.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Docker Compose', 'How to get it': '[Setup guide](https://docs.photoprism.app/getting-started/docker-compose/): download a config file, edit it, run one command' },
          { 'Option': 'Windows helper', 'How to get it': 'curl.exe and install.bat fetch the config and start the server, per the same guide' },
          { 'Option': 'Linux packages', 'How to get it': '[tar.gz packages](https://dl.photoprism.app/pkg/linux/README.html) for experienced users; manual configuration' },
          { 'Option': 'Managed hosting', 'How to get it': 'PikaPods, from $6.50 per month per the pricing page' },
          { 'Option': 'Community edition', 'How to get it': 'Free, AGPL-3.0, self-hosted; unlimited storage and instances' },
          { 'Option': 'Memberships', 'How to get it': 'Essentials €2.00, Plus from €6.00 per month, shown in euros on the [pricing page](https://www.photoprism.app/editions/)' },
          { 'Option': 'Website', 'How to get it': '[photoprism.app](https://www.photoprism.app)' },
          { 'Option': 'Privacy policy', 'How to get it': '[photoprism.app/privacy](https://www.photoprism.app/privacy/)' },
          { 'Option': 'Source code', 'How to get it': '[github.com/photoprism/photoprism](https://github.com/photoprism/photoprism)' },
          { 'Option': 'Public demo', 'How to get it': '[try.photoprism.app](https://try.photoprism.app/); the project asks you not to upload private pictures' },
        ],
        note: 'Version reviewed: stable build 261007-65faaae5d, published on 7 October 2026 per the GitHub release, with commits on the development branch through 24 October 2026. The release ships only Linux amd64 and arm64 tar.gz files, and the project steers most users to its Docker image. The release notes also list a development preview, which is not the version reviewed. Prices are the figures shown on the pricing page; the managed host is priced in US dollars.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The docs ask for at least 2 CPU cores, 3 GB of RAM and a 64-bit operating system, plus swap and SSD storage for large libraries.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Server', 'What the sources say': '2 cores and 3 GB RAM minimum; RAM in GB should match the core count' },
          { 'Item': 'Swap', 'What the sources say': 'At least 4 GB recommended; RAW files and panoramas may need more' },
          { 'Item': 'Runtime', 'What the sources say': 'Docker or Podman on Linux, macOS or Windows; amd64 and ARM64 images, including Raspberry Pi' },
          { 'Item': 'Database', 'What the sources say': 'SQLite or MariaDB 10.5.12+; the docs call SQLite a poor fit when performance matters' },
          { 'Item': 'GPU', 'What the sources say': 'Optional; NVIDIA cards can run the built-in models, using a separate cuda image' },
          { 'Item': 'Internet', 'What the sources say': 'Needed for reverse geocoding and world maps; the docs ask firewalls to allow the geocoding API' },
          { 'Item': 'Browser', 'What the sources say': 'A current browser; maps need WebGL 2' },
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
            title: 'Install Docker',
            whyItMatters: 'Install Docker (or Podman) on the machine that will hold your photos; the guide covers Linux, macOS and Windows.',
          },
          {
            title: 'Download and edit the compose file',
            whyItMatters: 'Take the compose.yaml for your platform from the setup guide, then set an admin password and the folders that hold your pictures.',
          },
          {
            title: 'Start the server',
            whyItMatters: 'Run docker compose up -d in that folder, open the server\'s address on port 2342 in a browser and sign in as admin.',
          },
          {
            title: 'Index your library',
            whyItMatters: 'Add or import your pictures and let the first indexing run; the project\'s First Steps tutorial explains the settings that control it.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Key Features',
        content: [
          '**Every item below comes from the project\'s website, README or documentation; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Search and browsing.** Filters that can be combined cover labels, location, resolution, colour and quality; views include People, Places, Moments, Calendar, Labels and Folders.',
          '**Formats.** RAW images, Live Photos, Motion Photos, videos and 360° panoramas are indexed, and duplicates are detected.',
          '**Metadata.** Exif, XMP, ExifTool JSON and Google Photos data can be read and merged.',
          '**Access.** An installable web app for phones, WebDAV access from Windows Explorer or Finder, and OpenID Connect single sign-on.',
        ],
        note: 'Some features depend on the edition: the pricing table lists extra user roles, 3D vector and satellite maps and a user-management interface as paid, and the Community edition has rate-limited reverse geocoding.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI Features and Where They Run',
        content: [
          '**The built-in models run on your own server through ONNX; only the optional OpenAI engine sends pictures to a cloud service.**',
        ],
        items: [
          '**Labels and adult-content detection.** A built-in ONNX model labels pictures and a second one flags NSFW content; the 7 October 2026 release replaced the earlier TensorFlow models and no longer supports custom TensorFlow models.',
          '**Faces.** YuNet locates faces and SFace turns each into a vector for grouping; older libraries keep the FaceNet model until migrated, and the release says new clusters are now named automatically where possible.',
          '**Captions and richer labels.** Optional: an Ollama server you run yourself, or the OpenAI API in the cloud with your own key, can generate captions and labels.',
          '**GPU.** The built-in models can use an NVIDIA card; for Ollama label generation the project reports 1 to 4 seconds per image on an RTX 4060, and 10 seconds to over a minute without a GPU.',
          '**Switching off.** Setting the labels model to "none" disables label generation, while face detection is turned off with a separate setting.',
        ],
        note: 'These figures and behaviours are the project\'s own statements; PromptQuorum did not time or test any model.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The privacy policy, last updated on 19 August 2026, says data that never leaves your private network cannot be collected by anyone, including the company.** For a self-hosted server that means photos, albums and AI results stay on your hardware unless you send them elsewhere, for example through the OpenAI engine.',
          'According to the policy and docs, three kinds of traffic reach outside servers. Reverse geocoding and interactive world maps retrieve data from PhotoPrism and from MapTiler AG in Switzerland, and a geocoding request carries the location being looked up plus your server\'s public IP address. Instances with a membership key also contact the project to renew it, sending a random instance ID, the software version, operating system type and CPU architecture. Finally, a server reachable from the internet must sit behind an HTTPS reverse proxy, otherwise passwords and files travel in clear text.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s declarations, not audit results. PromptQuorum has not inspected network traffic or reviewed the source code beyond the repository metadata. The policy names PhotoPrism UG as the operator of its own services and links a GDPR compliance statement.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Self-hosters with a Docker server or NAS** who want a private alternative to cloud photo services.',
          '**Photographers with large RAW and video libraries** who need search by label, place and face.',
          '**Households that want one shared library** reachable by browser on every device.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**AI quality.** PromptQuorum did not test label accuracy, face clustering or search relevance; the speed figures above are the project\'s.',
          '**Phone experience.** The project ships a web app only; the quality and terms of the third-party mobile apps in its docs were not checked.',
          '**Edition boundaries.** Which features sit behind a paid membership can change between releases; check the pricing table before relying on maps or extra user roles.',
          '**Licence details.** GitHub\'s detector reports "Other", while the README and docs state AGPL-3.0 for the Community edition; the terms of the paid editions were not reviewed.',
          '**Resource use.** The docs say indexing large RAW libraries can exceed the minimum memory; real-world usage was not measured.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory has one other image-library manager with a review, plus a self-hosted app that tags a different kind of content.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[PixlStash](/power-local-llm/pixlstash-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / GPL-3.0', 'Key difference': 'Desktop app with local tagging, face and semantic search; PhotoPrism is a browser-served server' },
          { 'App': '[Karakeep](/power-local-llm/karakeep-review)', 'Platforms': 'Web, iOS, Android', 'Price / license': 'Free / AGPL-3.0', 'Key difference': 'Bookmark and notes keeper with AI tagging, not a photo library' },
        ],
        note: 'No other photo-library server has a PromptQuorum review yet, so these are the nearest listed tools; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does PhotoPrism have an app for iPhone or Android?',
            a: 'The project itself offers an installable web app; its documentation lists apps from other developers, among them PhotoSync for background uploads from phones.',
          },
          {
            q: 'How do I update PhotoPrism?',
            a: 'With Docker Compose you pull the new image and restart the services; changing the image tag from latest to preview gives early access to development builds. Release notes can contain upgrade steps, for example the label re-run after the October 2026 AI change.',
          },
          {
            q: 'Can I move over from Google Photos?',
            a: 'Metadata from Google Photos can be merged, and the docs include a cloud migration guide; PromptQuorum did not try a migration.',
          },
          {
            q: 'Where does PhotoPrism keep my files?',
            a: 'The example config defines three folders: originals for your pictures, storage for internal files such as configuration, and import for files to be added. It also starts a MariaDB container for the database.',
          },
          {
            q: 'Is there a business version?',
            a: 'Yes: the Teams page lists licences from €79 per month for Starter, from €219 for Business and from €1,499 for Enterprise, with support levels that differ by tier.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'PhotoPrism is a long-running, actively updated way to keep a searchable photo library on hardware you control, with face recognition and AI labels that run on your own server by default. Against that, setup needs Docker and a config file, the project lists no native desktop or phone app of its own, place lookups and maps contact outside servers, and none of its AI quality or speed claims could be checked here. It suits people who already run services at home or on a NAS and can try the free Community edition first; anyone who wants a double-click app should look elsewhere.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PhotoPrism website](https://www.photoprism.app) — product overview, pricing and editions, checked 24 October 2026.',
          '[PhotoPrism documentation](https://docs.photoprism.app) — setup, AI models, release notes and mobile apps, checked 24 October 2026.',
          '[PhotoPrism privacy policy](https://www.photoprism.app/privacy/) — data collection and self-hosting statements, last updated 19 August 2026.',
          '[PhotoPrism on GitHub](https://github.com/photoprism/photoprism) — README, releases and commit activity, checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PixlStash Review](/power-local-llm/pixlstash-review) — a desktop image-library manager with local AI tagging.',
          '[Karakeep Review](/power-local-llm/karakeep-review) — a self-hosted app with AI tagging for bookmarks and notes.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PhotoPrism Review: Self-Hosted AI Photo Library for Your Server',
      description:
        'PhotoPrism review: a self-hosted, open-source photo and video library with built-in AI labels and face recognition. Setup, requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/photoprism-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Self-hosters and photographers evaluating a private AI photo library' },
      about: [
        { '@type': 'Thing', name: 'PhotoPrism' },
        { '@type': 'Thing', name: 'Self-hosted photo library' },
        { '@type': 'Thing', name: 'Face recognition' },
        { '@type': 'Thing', name: 'Docker' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/photoprism-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PhotoPrism Review', item: 'https://www.promptquorum.com/power-local-llm/photoprism-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Image & Video Generation',
    heroImage: '/images/photoprism-review-hero-de.webp',
    title: 'PhotoPrism-Rezension: Selbst gehostete KI-Fotobibliothek',
    seoTitle: 'PhotoPrism-Rezension: KI-Fotobibliothek zum Selbsthosten',
    intro:
      'PhotoPrism ist ein selbst gehosteter Foto- und Videomanager der Berliner Firma [PhotoPrism UG](https://www.photoprism.app), den Sie auf Ihrem eigenen Server betreiben; integrierte KI-Modelle verschlagworten Bilder und erkennen Gesichter. Die Community-Edition ist kostenlos und Open Source, kostenpflichtige Mitgliedschaften ergänzen Karten und weitere Funktionen. Diese Rezension stützt sich auf Website, Dokumentation, Datenschutzerklärung und GitHub-Repository des Projekts, geprüft am 24. Oktober 2026; PromptQuorum hat die Software nicht selbst getestet.',
    metaDescription:
      'PhotoPrism-Rezension: selbst gehostete Open-Source-Fotobibliothek mit integrierter KI für Labels und Gesichter. Community-Edition gratis; ungetestet.',
    twitterDescription:
      'PhotoPrism-Rezension: selbst gehostete Fotobibliothek mit lokalen KI-Labels und Gesichtserkennung. Community-Edition gratis – was die Quellen bestätigen und was nicht.',
    audience:
      'Selbsthoster und Fotografen, die eine private, durchsuchbare Fotobibliothek auf eigener Hardware möchten und wissen müssen, was die Quellen bestätigen, was das Projekt nur behauptet und was es kostet.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PhotoPrism Rezension',
    targetKeywords: [
      'photoprism rezension',
      'photoprism ki fotoverwaltung',
      'selbst gehostete fotobibliothek',
      'photoprism gesichtserkennung',
      'photoprism docker installation',
      'google fotos alternative selbst hosten',
      'photoprism datenschutz',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi', 'NVIDIA RTX 4060'],
    leadAnswerBlock:
      '**PhotoPrism (stabiler Build 261007-65faaae5d) ist eine Open-Source-Foto- und Videobibliothek, die Sie per Docker auf Ihrem eigenen Server installieren; KI-Verschlagwortung und Gesichtserkennung laufen standardmäßig dort.** Die Community-Edition ist kostenlos, die Einrichtung erfordert ein Terminal. Alle Angaben stammen von der Website, der Dokumentation und dem Repository des Projekts.',
    quickAnswerTop: {
      de: {
        question: 'Schickt PhotoPrism meine Fotos an einen KI-Cloud-Dienst?',
        answer:
          'Laut Projekt nicht standardmäßig: Die integrierten Modelle für Labels, Gesichter und die Erkennung nicht jugendfreier Inhalte laufen auf Ihrem eigenen Server. Bilder verlassen ihn nur, wenn Sie die optionale OpenAI-Anbindung einrichten; Ortsabfragen und Weltkarten kontaktieren externe Dienste (siehe Datenfluss und Datenschutz).',
        bullets: [
          'Die Suche kombiniert Filter wie Labels, Ort, Farbe und Qualität.',
          'RAW-Dateien, Live Photos und gängige Videoformate lassen sich ohne manuelle Konvertierung durchsuchen.',
          'Metadaten werden aus Exif, XMP und Quellen wie Google-Fotos-Exporten gelesen.',
          'Eine installierbare Web-App bedient Smartphones, und WebDAV-Clients öffnen die Bibliothek wie ein Laufwerk.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist PhotoPrism?', anchor: 'what-is-photoprism' },
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
            text: 'PhotoPrism ist eine selbst gehostete Open-Source-Bibliothek für Fotos und Videos, die Bilder mit KI-Modellen auf Ihrem eigenen Server verschlagwortet und Gesichter erkennt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren sie auf einem Rechner oder NAS unter Ihrer Kontrolle, verweisen sie auf Ihre Bilder und durchsuchen sie in jedem Browser, ohne sie einem Cloud-Fotodienst anzuvertrauen.',
          },
        ],
        items: [
          'Pflege: Der neueste stabile Build stammt vom 7. Oktober 2026, und das Repository erhielt am 24. Oktober 2026 neue Commits; eine Warnung vor einem veralteten Projekt entfällt.',
          'Einrichtung: eine Server-Installation mit Docker und einer zu bearbeitenden Konfigurationsdatei; das Projekt bietet weder Desktop-Installer noch App-Store-App.',
          'KI: Integrierte Modelle verschlagworten Fotos und erkennen Gesichter auf Ihrem Server; Bildbeschreibungen brauchen eine optionale Ollama- oder OpenAI-Anbindung.',
          'Kosten: Die Community-Edition ist kostenlos und AGPL-lizenziert, kostenpflichtige Mitgliedschaften sind optional.',
          'Zugang: Die Oberfläche ist ein Browser mit installierbarer Web-App; die in der Dokumentation genannten Smartphone-Apps stammen von anderen Entwicklern.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Website, Dokumentation, Datenschutzerklärung und GitHub-Repository des Projekts, geprüft am 24. Oktober 2026. PromptQuorum hat PhotoPrism nicht installiert; Treffsicherheit der Labels, Qualität der Gesichtserkennung und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoprism',
        title: 'Was ist PhotoPrism?',
        content: [
          '**PhotoPrism ist eine selbst gehostete Webanwendung zum Durchsuchen, Ordnen und Finden von Fotos und Videos auf einem Server unter Ihrer Kontrolle.** Die Website nennt sie „eine KI-gestützte, datenschutzorientierte App“; der Code liegt unter der AGPL auf GitHub, und die Firma gibt an, sich selbst zu finanzieren und unabhängig zu sein.',
          'Die kostenlose Community-Edition ist die vollständige Open-Source-Version. Kostenpflichtige Mitgliedschaften und Team-Lizenzen schalten zusätzliche Funktionen frei, und das Projekt nennt einen verwalteten Hoster als Alternative zum Selbstbetrieb.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**PhotoPrism ist ein Server, den Sie selbst installieren; empfohlen wird Docker Compose, einen Ein-Klick-Installer für Desktop oder Smartphone gibt es nicht.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'Docker Compose', 'Bezug': '[Installationsanleitung](https://docs.photoprism.app/getting-started/docker-compose/): Konfigurationsdatei laden, anpassen, einen Befehl ausführen' },
          { 'Option': 'Windows-Hilfsskript', 'Bezug': 'curl.exe und install.bat laden die Konfiguration und starten den Server, laut derselben Anleitung' },
          { 'Option': 'Linux-Pakete', 'Bezug': '[tar.gz-Pakete](https://dl.photoprism.app/pkg/linux/README.html) für erfahrene Nutzer; manuelle Konfiguration' },
          { 'Option': 'Verwaltetes Hosting', 'Bezug': 'PikaPods, ab 6,50 $ pro Monat laut Preisseite' },
          { 'Option': 'Community-Edition', 'Bezug': 'Kostenlos, AGPL-3.0, selbst gehostet; unbegrenzter Speicher und Instanzen' },
          { 'Option': 'Mitgliedschaften', 'Bezug': 'Essentials 2,00 €, Plus ab 6,00 € pro Monat, auf der [Preisseite](https://www.photoprism.app/editions/) in Euro angegeben' },
          { 'Option': 'Website', 'Bezug': '[photoprism.app](https://www.photoprism.app)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': '[photoprism.app/privacy](https://www.photoprism.app/privacy/)' },
          { 'Option': 'Quellcode', 'Bezug': '[github.com/photoprism/photoprism](https://github.com/photoprism/photoprism)' },
          { 'Option': 'Öffentliche Demo', 'Bezug': '[try.photoprism.app](https://try.photoprism.app/); das Projekt bittet, keine privaten Bilder hochzuladen' },
        ],
        note: 'Geprüfte Version: stabiler Build 261007-65faaae5d, laut GitHub-Release am 7. Oktober 2026 veröffentlicht, mit Commits im Entwicklungszweig bis zum 24. Oktober 2026. Der Release enthält nur tar.gz-Dateien für Linux (amd64 und arm64); die meisten Nutzer verweist das Projekt auf sein Docker-Image. Die Release Notes führen außerdem eine Entwicklungsvorschau auf, die nicht die geprüfte Version ist. Die Preise entsprechen den Angaben der Preisseite; der verwaltete Hoster wird in US-Dollar angegeben.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die Dokumentation verlangt mindestens 2 CPU-Kerne, 3 GB RAM und ein 64-Bit-Betriebssystem, für große Bibliotheken zusätzlich Swap und SSD-Speicher.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Server', 'Angaben der Quellen': 'Mindestens 2 Kerne und 3 GB RAM; der RAM in GB sollte der Kernzahl entsprechen' },
          { 'Punkt': 'Swap', 'Angaben der Quellen': 'Mindestens 4 GB empfohlen; RAW-Dateien und Panoramen können mehr benötigen' },
          { 'Punkt': 'Laufzeitumgebung', 'Angaben der Quellen': 'Docker oder Podman unter Linux, macOS oder Windows; amd64- und ARM64-Images, auch für Raspberry Pi' },
          { 'Punkt': 'Datenbank', 'Angaben der Quellen': 'SQLite oder MariaDB 10.5.12+; laut Dokumentation ist SQLite bei hohen Leistungsansprüchen eine schwache Wahl' },
          { 'Punkt': 'GPU', 'Angaben der Quellen': 'Optional; NVIDIA-Karten können die integrierten Modelle ausführen, mit einem eigenen cuda-Image' },
          { 'Punkt': 'Internet', 'Angaben der Quellen': 'Für Reverse-Geocoding und Weltkarten nötig; die Dokumentation bittet, die Geocoding-API in Firewalls freizugeben' },
          { 'Punkt': 'Browser', 'Angaben der Quellen': 'Ein aktueller Browser; Karten benötigen WebGL 2' },
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
            title: 'Docker installieren',
            whyItMatters: 'Installieren Sie Docker (oder Podman) auf dem Rechner, der Ihre Fotos aufnehmen soll; die Anleitung deckt Linux, macOS und Windows ab.',
          },
          {
            title: 'Compose-Datei laden und anpassen',
            whyItMatters: 'Nehmen Sie die compose.yaml für Ihre Plattform aus der Installationsanleitung und legen Sie ein Admin-Passwort sowie die Ordner mit Ihren Bildern fest.',
          },
          {
            title: 'Server starten',
            whyItMatters: 'Führen Sie in diesem Ordner docker compose up -d aus, öffnen Sie die Serveradresse auf Port 2342 im Browser und melden Sie sich als admin an.',
          },
          {
            title: 'Bibliothek indexieren',
            whyItMatters: 'Fügen Sie Ihre Bilder hinzu oder importieren Sie sie und lassen Sie die erste Indexierung laufen; das Einsteiger-Tutorial des Projekts erklärt die zugehörigen Einstellungen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Alles Folgende stammt von der Website, aus der README oder der Dokumentation des Projekts; PromptQuorum hat nichts davon getestet.**',
        ],
        items: [
          '**Suche und Navigation.** Kombinierbare Filter decken Labels, Ort, Auflösung, Farbe und Qualität ab; Ansichten gibt es für Personen, Orte, Momente, Kalender, Labels und Ordner.',
          '**Formate.** RAW-Bilder, Live Photos, Motion Photos, Videos und 360°-Panoramen werden indexiert, Duplikate werden erkannt.',
          '**Metadaten.** Exif, XMP, ExifTool-JSON und Google-Fotos-Daten können gelesen und zusammengeführt werden.',
          '**Zugriff.** Eine installierbare Web-App für Smartphones, WebDAV-Zugriff aus dem Windows-Explorer oder Finder und Single Sign-on über OpenID Connect.',
        ],
        note: 'Einige Funktionen hängen von der Edition ab: Die Preistabelle führt zusätzliche Benutzerrollen, 3D-Vektor- und Satellitenkarten sowie eine Benutzerverwaltung als kostenpflichtig auf, und die Community-Edition hat ein ratenbegrenztes Reverse-Geocoding.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'KI-Funktionen und wo sie laufen',
        content: [
          '**Die integrierten Modelle laufen über ONNX auf Ihrem eigenen Server; nur die optionale OpenAI-Anbindung schickt Bilder an einen Cloud-Dienst.**',
        ],
        items: [
          '**Labels und Erkennung nicht jugendfreier Inhalte.** Ein integriertes ONNX-Modell vergibt Labels, ein zweites markiert NSFW-Inhalte; der Release vom 7. Oktober 2026 ersetzte die früheren TensorFlow-Modelle und unterstützt keine eigenen TensorFlow-Modelle mehr.',
          '**Gesichter.** YuNet findet Gesichter, SFace wandelt jedes in einen Vektor zum Gruppieren um; ältere Bibliotheken behalten das Modell FaceNet bis zur Migration, und laut Release werden neue Cluster nun möglichst automatisch benannt.',
          '**Bildbeschreibungen und ausführlichere Labels.** Optional: Ein selbst betriebener Ollama-Server oder die OpenAI-API in der Cloud mit eigenem Schlüssel kann Beschreibungen und Labels erzeugen.',
          '**GPU.** Die integrierten Modelle können eine NVIDIA-Karte nutzen; für die Label-Erzeugung mit Ollama nennt das Projekt 1 bis 4 Sekunden pro Bild auf einer RTX 4060 und ohne GPU 10 Sekunden bis über eine Minute.',
          '**Abschalten.** Setzt man das Labels-Modell auf „none“, entfällt die Label-Erzeugung; die Gesichtserkennung schaltet man mit einer eigenen Einstellung ab.',
        ],
        note: 'Diese Zahlen und Verhaltensweisen sind Angaben des Projekts; PromptQuorum hat kein Modell zeitlich gemessen oder getestet.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Die Datenschutzerklärung (zuletzt aktualisiert am 19. August 2026) besagt, dass Daten, die Ihr privates Netzwerk nie verlassen, von niemandem erfasst werden können, auch nicht von der Firma.** Bei einem selbst gehosteten Server bedeutet das: Fotos, Alben und KI-Ergebnisse bleiben auf Ihrer Hardware, solange Sie sie nicht anderweitig senden, etwa über die OpenAI-Anbindung.',
          'Laut Datenschutzerklärung und Dokumentation erreichen drei Arten von Datenverkehr externe Server. Reverse-Geocoding und interaktive Weltkarten holen Daten von PhotoPrism und von MapTiler AG in der Schweiz; eine Geocoding-Anfrage enthält den nachgeschlagenen Ort und die öffentliche IP-Adresse Ihres Servers. Instanzen mit Mitgliedsschlüssel kontaktieren das Projekt außerdem, um ihn zu erneuern, und senden eine zufällige Instanz-ID, die Softwareversion, den Betriebssystemtyp und die CPU-Architektur. Schließlich muss ein aus dem Internet erreichbarer Server hinter einem HTTPS-Reverse-Proxy stehen, sonst werden Passwörter und Dateien im Klartext übertragen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Erklärungen des Projekts, keine Prüfergebnisse. PromptQuorum hat weder den Netzwerkverkehr untersucht noch den Quellcode über die Repository-Metadaten hinaus geprüft. Die Erklärung nennt die PhotoPrism UG als Betreiberin der eigenen Dienste und verlinkt eine DSGVO-Konformitätserklärung.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die Software eignet',
        items: [
          '**Selbsthoster mit Docker-Server oder NAS**, die eine private Alternative zu Cloud-Fotodiensten suchen.',
          '**Fotografen mit großen RAW- und Videobibliotheken**, die nach Label, Ort und Gesicht suchen.',
          '**Haushalte mit einer gemeinsamen Bibliothek**, erreichbar im Browser auf jedem Gerät.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**KI-Qualität.** PromptQuorum hat weder Label-Treffsicherheit noch Gesichts-Clustering oder Suchrelevanz getestet; die Geschwindigkeitsangaben oben stammen vom Projekt.',
          '**Smartphone-Erlebnis.** Das Projekt liefert nur eine Web-App; Qualität und Bedingungen der Apps anderer Entwickler aus der Dokumentation wurden nicht geprüft.',
          '**Edition-Grenzen.** Welche Funktionen hinter einer kostenpflichtigen Mitgliedschaft liegen, kann sich zwischen Releases ändern; prüfen Sie die Preistabelle, bevor Sie sich auf Karten oder zusätzliche Benutzerrollen verlassen.',
          '**Lizenzdetails.** Der Detektor von GitHub meldet „Other“, während README und Dokumentation für die Community-Edition AGPL-3.0 nennen; die Bedingungen der kostenpflichtigen Editionen wurden nicht geprüft.',
          '**Ressourcenbedarf.** Laut Dokumentation kann die Indexierung großer RAW-Bibliotheken den Mindestspeicher übersteigen; der tatsächliche Verbrauch wurde nicht gemessen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        content: [
          'Das Verzeichnis enthält einen weiteren Manager für Bildbibliotheken mit Rezension sowie eine selbst gehostete App, die andere Inhalte verschlagwortet.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[PixlStash](/de/power-local-llm/pixlstash-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / GPL-3.0', 'Wichtigster Unterschied': 'Desktop-App mit lokaler Verschlagwortung, Gesichts- und semantischer Suche; PhotoPrism ist ein per Browser bedienter Server' },
          { 'App': '[Karakeep](/de/power-local-llm/karakeep-review)', 'Plattformen': 'Web, iOS, Android', 'Preis / Lizenz': 'Kostenlos / AGPL-3.0', 'Wichtigster Unterschied': 'Verwaltung für Lesezeichen und Notizen mit KI-Tags, keine Fotobibliothek' },
        ],
        note: 'Kein weiterer Foto-Bibliotheksserver hat bislang eine PromptQuorum-Rezension, daher sind dies die nächstliegenden gelisteten Werkzeuge; prüfen Sie Preis, Lizenz und Plattformen jeder App auf der eigenen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Gibt es PhotoPrism als App für iPhone oder Android?',
            a: 'Das Projekt selbst bietet eine installierbare Web-App; seine Dokumentation nennt Apps anderer Entwickler, darunter PhotoSync für den Hintergrund-Upload vom Smartphone.',
          },
          {
            q: 'Wie aktualisiere ich PhotoPrism?',
            a: 'Mit Docker Compose laden Sie das neue Image und starten die Dienste neu; wer den Image-Tag von latest auf preview ändert, erhält frühen Zugang zu Entwicklungs-Builds. Release Notes können Upgrade-Schritte enthalten, etwa den erneuten Label-Lauf nach der KI-Umstellung im Oktober 2026.',
          },
          {
            q: 'Kann ich von Google Fotos umziehen?',
            a: 'Metadaten aus Google Fotos lassen sich zusammenführen, und die Dokumentation enthält eine Anleitung zur Cloud-Migration; PromptQuorum hat keine Migration ausprobiert.',
          },
          {
            q: 'Wo legt PhotoPrism meine Dateien ab?',
            a: 'Die Beispielkonfiguration definiert drei Ordner: originals für Ihre Bilder, storage für interne Dateien wie die Konfiguration und import für hinzuzufügende Dateien. Außerdem startet sie einen MariaDB-Container für die Datenbank.',
          },
          {
            q: 'Gibt es eine Version für Unternehmen?',
            a: 'Ja: Die Teams-Seite nennt Lizenzen ab 79 € pro Monat für Starter, ab 219 € für Business und ab 1.499 € für Enterprise, mit je nach Stufe unterschiedlichen Support-Leveln.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'PhotoPrism ist ein langjährig bestehender, aktiv gepflegter Weg, eine durchsuchbare Fotobibliothek auf Hardware unter eigener Kontrolle zu betreiben, mit Gesichtserkennung und KI-Labels, die standardmäßig auf dem eigenen Server laufen. Dagegen stehen eine Einrichtung mit Docker und Konfigurationsdatei, laut Dokumentation keine native Desktop- oder Smartphone-App des Projekts, Ortsabfragen und Karten, die externe Server kontaktieren, sowie KI-Qualitäts- und Geschwindigkeitsangaben, die hier nicht geprüft werden konnten. Die Software eignet sich für Menschen, die ohnehin Dienste zu Hause oder auf einem NAS betreiben und zunächst die kostenlose Community-Edition ausprobieren können; wer eine App per Doppelklick will, sucht besser anderswo.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[PhotoPrism-Website](https://www.photoprism.app) — Produktübersicht, Preise und Editionen, geprüft am 24. Oktober 2026.',
          '[PhotoPrism-Dokumentation](https://docs.photoprism.app) — Einrichtung, KI-Modelle, Release Notes und mobile Apps, geprüft am 24. Oktober 2026.',
          '[PhotoPrism-Datenschutzerklärung](https://www.photoprism.app/privacy/) — Aussagen zu Datenerfassung und Selbsthosting, zuletzt aktualisiert am 19. August 2026.',
          '[PhotoPrism auf GitHub](https://github.com/photoprism/photoprism) — README, Releases und Commit-Aktivität, geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PixlStash-Rezension](/de/power-local-llm/pixlstash-review) — ein Desktop-Manager für Bildbibliotheken mit lokaler KI-Verschlagwortung.',
          '[Karakeep-Rezension](/de/power-local-llm/karakeep-review) — eine selbst gehostete App mit KI-Tags für Lesezeichen und Notizen.',
          '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoprism-review-hero-es.webp',
    title: 'Reseña de PhotoPrism: biblioteca de fotos con IA autoalojada',
    seoTitle: 'Reseña de PhotoPrism: biblioteca de fotos con IA',
    intro:
      'PhotoPrism es un gestor de fotos y vídeos autoalojado de la empresa berlinesa [PhotoPrism UG](https://www.photoprism.app) que ejecutas en tu propio servidor, con modelos de IA integrados que etiquetan las imágenes y reconocen caras. La edición Community es gratuita y de código abierto, y las suscripciones de pago añaden mapas y otras funciones. Esta reseña se basa en el sitio web, la documentación, la política de privacidad y el repositorio de GitHub del proyecto, consultados el 24 de octubre de 2026; PromptQuorum no ha probado el software en la práctica.',
    metaDescription:
      'Reseña de PhotoPrism: biblioteca de fotos autoalojada de código abierto con etiquetas de IA y reconocimiento facial. Edición Community gratis; sin probar.',
    twitterDescription:
      'Reseña de PhotoPrism: biblioteca de fotos autoalojada con etiquetas de IA locales y reconocimiento facial. Edición Community gratis; lo que confirman las fuentes y lo que no.',
    audience:
      'Personas que se autoalojan y fotógrafos que quieren una biblioteca de fotos privada y con búsqueda en su propio hardware y necesitan saber qué confirman las fuentes, qué solo afirma el proyecto y cuánto cuesta.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña PhotoPrism',
    targetKeywords: [
      'reseña photoprism',
      'photoprism gestor de fotos ia',
      'biblioteca de fotos autoalojada',
      'photoprism reconocimiento facial',
      'photoprism instalación docker',
      'alternativa a google fotos autoalojada',
      'photoprism privacidad',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi', 'NVIDIA RTX 4060'],
    leadAnswerBlock:
      '**PhotoPrism (compilación estable 261007-65faaae5d) es una biblioteca de fotos y vídeos de código abierto que instalas en tu propio servidor con Docker; el etiquetado con IA y el reconocimiento facial se ejecutan ahí por defecto.** La edición Community es gratuita y la instalación requiere un terminal. Todas las afirmaciones proceden del sitio web, la documentación y el repositorio del proyecto.',
    quickAnswerTop: {
      es: {
        question: '¿PhotoPrism envía mis fotos a un servicio de IA en la nube?',
        answer:
          'Según el proyecto, no por defecto: los modelos integrados para etiquetas, caras y detección de contenido para adultos se ejecutan en tu propio servidor. Las imágenes solo salen si configuras el motor opcional de OpenAI, y las consultas de ubicación y los mapas del mundo contactan con servicios externos (consulta Flujo de datos y privacidad).',
        bullets: [
          'La búsqueda combina filtros como etiquetas, ubicación, color y calidad.',
          'Los archivos RAW, las Live Photos y los formatos de vídeo habituales se pueden explorar sin conversión manual.',
          'Los metadatos se leen de Exif, XMP y fuentes como las exportaciones de Google Fotos.',
          'Una app web instalable sirve a los móviles, y los clientes WebDAV abren la biblioteca como una unidad.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es PhotoPrism?', anchor: 'what-is-photoprism' },
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
            text: 'PhotoPrism es una biblioteca de fotos y vídeos de código abierto y autoalojada que etiqueta las imágenes y reconoce caras con modelos de IA que se ejecutan en tu propio servidor.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas en un ordenador o NAS que controlas, le indicas dónde están tus imágenes y las exploras y buscas desde cualquier navegador sin entregarlas a un servicio de fotos en la nube.',
          },
        ],
        items: [
          'Mantenimiento: la última compilación estable es del 7 de octubre de 2026 y el repositorio recibió nuevos commits el 24 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Instalación: un servidor con Docker y un archivo de configuración que editar; el proyecto no ofrece instalador de escritorio ni app en las tiendas.',
          'IA: los modelos integrados etiquetan las fotos y reconocen caras en tu servidor; los pies de foto requieren un motor opcional de Ollama u OpenAI.',
          'Coste: la edición Community es gratuita y con licencia AGPL, y las suscripciones de pago son opcionales.',
          'Acceso: la interfaz es un navegador con una app web instalable; las apps móviles que menciona la documentación son de otros desarrolladores.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, la documentación, la política de privacidad y el repositorio de GitHub del proyecto, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado PhotoPrism, por lo que no se evalúan la precisión de las etiquetas, la calidad del reconocimiento facial ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoprism',
        title: '¿Qué es PhotoPrism?',
        content: [
          '**PhotoPrism es una aplicación web autoalojada para explorar, organizar y buscar fotos y vídeos en un servidor que controlas.** Su sitio la describe como «una app con IA y centrada en la privacidad»; el código está en GitHub bajo la AGPL, y la empresa afirma que se autofinancia y es independiente.',
          'La edición Community gratuita es la versión completa de código abierto. Las suscripciones de pago y las licencias de equipo desbloquean funciones adicionales, y el proyecto menciona un alojamiento gestionado como alternativa a ejecutar el servidor por tu cuenta.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**PhotoPrism es un servidor que instalas tú mismo; la vía recomendada es Docker Compose y no hay instalador de un clic para escritorio ni móvil.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Docker Compose', 'Cómo conseguirlo': '[Guía de instalación](https://docs.photoprism.app/getting-started/docker-compose/): descargar un archivo de configuración, editarlo y ejecutar un comando' },
          { 'Opción': 'Ayuda para Windows', 'Cómo conseguirlo': 'curl.exe e install.bat descargan la configuración e inician el servidor, según la misma guía' },
          { 'Opción': 'Paquetes para Linux', 'Cómo conseguirlo': '[Paquetes tar.gz](https://dl.photoprism.app/pkg/linux/README.html) para usuarios con experiencia; configuración manual' },
          { 'Opción': 'Alojamiento gestionado', 'Cómo conseguirlo': 'PikaPods, desde 6,50 $ al mes según la página de precios' },
          { 'Opción': 'Edición Community', 'Cómo conseguirlo': 'Gratis, AGPL-3.0, autoalojada; almacenamiento e instancias ilimitados' },
          { 'Opción': 'Suscripciones', 'Cómo conseguirlo': 'Essentials 2,00 €, Plus desde 6,00 € al mes, indicados en euros en la [página de precios](https://www.photoprism.app/editions/)' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[photoprism.app](https://www.photoprism.app)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[photoprism.app/privacy](https://www.photoprism.app/privacy/)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[github.com/photoprism/photoprism](https://github.com/photoprism/photoprism)' },
          { 'Opción': 'Demo pública', 'Cómo conseguirlo': '[try.photoprism.app](https://try.photoprism.app/); el proyecto pide no subir imágenes privadas' },
        ],
        note: 'Versión revisada: compilación estable 261007-65faaae5d, publicada el 7 de octubre de 2026 según la release de GitHub, con commits en la rama de desarrollo hasta el 24 de octubre de 2026. La release solo incluye archivos tar.gz para Linux (amd64 y arm64), y el proyecto dirige a la mayoría de los usuarios a su imagen de Docker. Las notas de la versión también enumeran una vista previa de desarrollo, que no es la versión revisada. Los precios son los que muestra la página de precios; el alojamiento gestionado se cotiza en dólares estadounidenses.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**La documentación pide al menos 2 núcleos de CPU, 3 GB de RAM y un sistema operativo de 64 bits, además de swap y almacenamiento SSD para bibliotecas grandes.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Servidor', 'Qué dicen las fuentes': 'Mínimo de 2 núcleos y 3 GB de RAM; la RAM en GB debería igualar el número de núcleos' },
          { 'Elemento': 'Swap', 'Qué dicen las fuentes': 'Se recomiendan al menos 4 GB; los archivos RAW y los panoramas pueden necesitar más' },
          { 'Elemento': 'Entorno de ejecución', 'Qué dicen las fuentes': 'Docker o Podman en Linux, macOS o Windows; imágenes amd64 y ARM64, incluida Raspberry Pi' },
          { 'Elemento': 'Base de datos', 'Qué dicen las fuentes': 'SQLite o MariaDB 10.5.12+; la documentación considera SQLite poco adecuado si importa el rendimiento' },
          { 'Elemento': 'GPU', 'Qué dicen las fuentes': 'Opcional; las tarjetas NVIDIA pueden ejecutar los modelos integrados con una imagen cuda aparte' },
          { 'Elemento': 'Internet', 'Qué dicen las fuentes': 'Necesario para la geocodificación inversa y los mapas del mundo; la documentación pide permitir la API de geocodificación en los cortafuegos' },
          { 'Elemento': 'Navegador', 'Qué dicen las fuentes': 'Un navegador actual; los mapas requieren WebGL 2' },
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
            title: 'Instala Docker',
            whyItMatters: 'Instala Docker (o Podman) en el equipo que guardará tus fotos; la guía cubre Linux, macOS y Windows.',
          },
          {
            title: 'Descarga y edita el archivo compose',
            whyItMatters: 'Toma el compose.yaml de tu plataforma de la guía de instalación y define una contraseña de administrador y las carpetas que contienen tus imágenes.',
          },
          {
            title: 'Inicia el servidor',
            whyItMatters: 'Ejecuta docker compose up -d en esa carpeta, abre la dirección del servidor en el puerto 2342 desde un navegador e inicia sesión como admin.',
          },
          {
            title: 'Indexa tu biblioteca',
            whyItMatters: 'Añade o importa tus imágenes y deja que se ejecute la primera indexación; el tutorial de primeros pasos del proyecto explica los ajustes que la controlan.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Todo lo que sigue procede del sitio web, el README o la documentación del proyecto; PromptQuorum no ha probado nada.**',
        ],
        items: [
          '**Búsqueda y exploración.** Los filtros combinables cubren etiquetas, ubicación, resolución, color y calidad; las vistas incluyen Personas, Lugares, Momentos, Calendario, Etiquetas y Carpetas.',
          '**Formatos.** Se indexan imágenes RAW, Live Photos, Motion Photos, vídeos y panoramas de 360°, y se detectan los duplicados.',
          '**Metadatos.** Se pueden leer y combinar datos de Exif, XMP, ExifTool JSON y Google Fotos.',
          '**Acceso.** Una app web instalable para móviles, acceso WebDAV desde el Explorador de Windows o el Finder y inicio de sesión único con OpenID Connect.',
        ],
        note: 'Algunas funciones dependen de la edición: la tabla de precios clasifica como de pago los roles de usuario adicionales, los mapas vectoriales 3D y de satélite y una interfaz de gestión de usuarios, y la edición Community limita la frecuencia de la geocodificación inversa.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Funciones de IA y dónde se ejecutan',
        content: [
          '**Los modelos integrados se ejecutan en tu propio servidor mediante ONNX; solo el motor opcional de OpenAI envía imágenes a un servicio en la nube.**',
        ],
        items: [
          '**Etiquetas y detección de contenido para adultos.** Un modelo ONNX integrado etiqueta las imágenes y otro marca el contenido NSFW; la versión del 7 de octubre de 2026 sustituyó a los anteriores modelos de TensorFlow y ya no admite modelos de TensorFlow personalizados.',
          '**Caras.** YuNet localiza las caras y SFace convierte cada una en un vector para agruparlas; las bibliotecas antiguas conservan el modelo FaceNet hasta migrarse, y la versión indica que los nuevos grupos se nombran ahora automáticamente cuando es posible.',
          '**Pies de foto y etiquetas más ricas.** Opcional: un servidor Ollama que tú mismo ejecutes, o la API de OpenAI en la nube con tu propia clave, puede generar pies de foto y etiquetas.',
          '**GPU.** Los modelos integrados pueden usar una tarjeta NVIDIA; para la generación de etiquetas con Ollama el proyecto indica de 1 a 4 segundos por imagen en una RTX 4060, y de 10 segundos a más de un minuto sin GPU.',
          '**Desactivación.** Si pones el modelo de etiquetas en «none», se desactiva la generación de etiquetas, mientras que la detección de caras se apaga con un ajuste aparte.',
        ],
        note: 'Estas cifras y comportamientos son declaraciones del propio proyecto; PromptQuorum no cronometró ni probó ningún modelo.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La política de privacidad, actualizada por última vez el 19 de agosto de 2026, afirma que los datos que nunca salen de tu red privada no pueden ser recopilados por nadie, ni siquiera por la empresa.** En un servidor autoalojado, eso significa que las fotos, los álbumes y los resultados de la IA permanecen en tu hardware mientras no los envíes a otro lugar, por ejemplo mediante el motor de OpenAI.',
          'Según la política de privacidad y la documentación, tres tipos de tráfico llegan a servidores externos. La geocodificación inversa y los mapas interactivos del mundo obtienen datos de PhotoPrism y de MapTiler AG, en Suiza; una solicitud de geocodificación incluye la ubicación consultada y la dirección IP pública de tu servidor. Las instancias con clave de suscripción también contactan con el proyecto para renovarla y envían un identificador de instancia aleatorio, la versión del software, el tipo de sistema operativo y la arquitectura de la CPU. Por último, un servidor accesible desde internet debe estar detrás de un proxy inverso HTTPS; de lo contrario, las contraseñas y los archivos viajan en texto claro.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del proyecto, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red ni revisado el código fuente más allá de los metadatos del repositorio. La política nombra a PhotoPrism UG como operadora de sus propios servicios y enlaza una declaración de cumplimiento del RGPD.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes se autoalojan con un servidor Docker o un NAS** y buscan una alternativa privada a los servicios de fotos en la nube.',
          '**Fotógrafos con grandes bibliotecas RAW y de vídeo** que buscan por etiqueta, lugar y cara.',
          '**Hogares que quieren una biblioteca compartida** accesible por navegador desde cualquier dispositivo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de la IA.** PromptQuorum no probó la precisión de las etiquetas, la agrupación de caras ni la relevancia de la búsqueda; las cifras de velocidad anteriores son del proyecto.',
          '**Experiencia en el móvil.** El proyecto solo ofrece una app web; no se comprobaron la calidad ni las condiciones de las apps de otros desarrolladores que cita su documentación.',
          '**Límites entre ediciones.** Qué funciones quedan tras una suscripción de pago puede cambiar entre versiones; consulta la tabla de precios antes de depender de los mapas o de roles de usuario adicionales.',
          '**Detalles de la licencia.** El detector de GitHub indica «Other», mientras que el README y la documentación citan AGPL-3.0 para la edición Community; no se revisaron las condiciones de las ediciones de pago.',
          '**Uso de recursos.** La documentación dice que indexar bibliotecas RAW grandes puede superar la memoria mínima; el consumo real no se midió.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio incluye otro gestor de bibliotecas de imágenes con reseña, además de una app autoalojada que etiqueta otro tipo de contenido.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[PixlStash](/es/power-local-llm/pixlstash-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / GPL-3.0', 'Diferencia clave': 'App de escritorio con etiquetado local y búsqueda facial y semántica; PhotoPrism es un servidor que se usa desde el navegador' },
          { 'App': '[Karakeep](/es/power-local-llm/karakeep-review)', 'Plataformas': 'Web, iOS, Android', 'Precio / licencia': 'Gratis / AGPL-3.0', 'Diferencia clave': 'Gestor de marcadores y notas con etiquetas de IA, no una biblioteca de fotos' },
        ],
        note: 'Ningún otro servidor de bibliotecas de fotos tiene aún una reseña de PromptQuorum, así que estas son las herramientas listadas más cercanas; confirma el precio, la licencia y las plataformas de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Tiene PhotoPrism una app para iPhone o Android?',
            a: 'El propio proyecto ofrece una app web instalable; su documentación menciona apps de otros desarrolladores, entre ellas PhotoSync para la subida en segundo plano desde los móviles.',
          },
          {
            q: '¿Cómo actualizo PhotoPrism?',
            a: 'Con Docker Compose descargas la nueva imagen y reinicias los servicios; cambiar la etiqueta de la imagen de latest a preview da acceso anticipado a las compilaciones de desarrollo. Las notas de la versión pueden incluir pasos de actualización, por ejemplo volver a ejecutar las etiquetas tras el cambio de IA de octubre de 2026.',
          },
          {
            q: '¿Puedo migrar desde Google Fotos?',
            a: 'Los metadatos de Google Fotos se pueden combinar, y la documentación incluye una guía de migración desde la nube; PromptQuorum no probó ninguna migración.',
          },
          {
            q: '¿Dónde guarda PhotoPrism mis archivos?',
            a: 'La configuración de ejemplo define tres carpetas: originals para tus imágenes, storage para archivos internos como la configuración e import para los archivos que se van a añadir. También inicia un contenedor MariaDB para la base de datos.',
          },
          {
            q: '¿Hay una versión para empresas?',
            a: 'Sí: la página Teams indica licencias desde 79 € al mes para Starter, desde 219 € para Business y desde 1.499 € para Enterprise, con niveles de soporte que varían según el plan.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'PhotoPrism es una forma veterana y con actualizaciones activas de mantener una biblioteca de fotos con búsqueda en hardware que controlas, con reconocimiento facial y etiquetas de IA que por defecto se ejecutan en tu propio servidor. En contra, la instalación requiere Docker y un archivo de configuración, según su documentación el proyecto no ofrece una app nativa de escritorio ni de móvil, las consultas de ubicación y los mapas contactan con servidores externos y no se pudo comprobar ninguna de sus afirmaciones sobre la calidad o la velocidad de la IA. Encaja con quienes ya ejecutan servicios en casa o en un NAS y pueden probar primero la edición Community gratuita; quien quiera una app de doble clic debería mirar en otra parte.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de PhotoPrism](https://www.photoprism.app) — descripción del producto, precios y ediciones, consultado el 24 de octubre de 2026.',
          '[Documentación de PhotoPrism](https://docs.photoprism.app) — instalación, modelos de IA, notas de la versión y apps móviles, consultada el 24 de octubre de 2026.',
          '[Política de privacidad de PhotoPrism](https://www.photoprism.app/privacy/) — recopilación de datos y autoalojamiento, actualizada el 19 de agosto de 2026.',
          '[PhotoPrism en GitHub](https://github.com/photoprism/photoprism) — README, releases y actividad de commits, consultados el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de PixlStash](/es/power-local-llm/pixlstash-review) — un gestor de bibliotecas de imágenes de escritorio con etiquetado de IA local.',
          '[Reseña de Karakeep](/es/power-local-llm/karakeep-review) — una app autoalojada con etiquetas de IA para marcadores y notas.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoprism-review-hero-fr.webp',
    title: 'Test de PhotoPrism : bibliothèque photo IA auto-hébergée',
    seoTitle: 'Test de PhotoPrism : bibliothèque photo IA auto-hébergée',
    intro:
      'PhotoPrism est un gestionnaire de photos et de vidéos auto-hébergé, édité par la société berlinoise [PhotoPrism UG](https://www.photoprism.app), que vous exécutez sur votre propre serveur et dont les modèles d’IA intégrés étiquettent les images et reconnaissent les visages. L’édition Community est gratuite et open source, et des abonnements payants ajoutent des cartes et d’autres fonctions. Ce test s’appuie sur le site, la documentation, la politique de confidentialité et le dépôt GitHub du projet, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé le logiciel en pratique.',
    metaDescription:
      'Test de PhotoPrism : bibliothèque photo open source auto-hébergée avec étiquettes IA et reconnaissance faciale. Édition Community gratuite ; non testé.',
    twitterDescription:
      'Test de PhotoPrism : bibliothèque photo auto-hébergée avec étiquettes IA locales et reconnaissance faciale. Édition Community gratuite, ce que les sources confirment ou non.',
    audience:
      'Auto-hébergeurs et photographes qui veulent une bibliothèque photo privée et consultable sur leur propre matériel et doivent savoir ce que les sources confirment, ce que le projet affirme seulement et ce que cela coûte.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test PhotoPrism',
    targetKeywords: [
      'test photoprism',
      'photoprism gestionnaire photo ia',
      'bibliothèque photo auto-hébergée',
      'photoprism reconnaissance faciale',
      'photoprism installation docker',
      'alternative google photos auto-hébergée',
      'photoprism confidentialité',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi', 'NVIDIA RTX 4060'],
    leadAnswerBlock:
      '**PhotoPrism (version stable 261007-65faaae5d) est une bibliothèque de photos et de vidéos open source que vous installez sur votre propre serveur avec Docker ; l’étiquetage par IA et la reconnaissance faciale y tournent par défaut.** L’édition Community est gratuite et l’installation passe par un terminal. Chaque affirmation provient du site, de la documentation et du dépôt du projet.',
    quickAnswerTop: {
      fr: {
        question: 'PhotoPrism envoie-t-il mes photos à un service d’IA dans le cloud ?',
        answer:
          'Pas par défaut, selon le projet : les modèles intégrés pour les étiquettes, les visages et la détection de contenu pour adultes tournent sur votre propre serveur. Les images ne le quittent que si vous configurez le moteur OpenAI facultatif, et les recherches de lieux et les cartes du monde contactent des services externes (voir Flux de données et confidentialité).',
        bullets: [
          'La recherche combine des filtres comme les étiquettes, le lieu, la couleur et la qualité.',
          'Les fichiers RAW, les Live Photos et les formats vidéo courants se parcourent sans conversion manuelle.',
          'Les métadonnées sont lues depuis Exif, XMP et des sources comme les exports Google Photos.',
          'Une application web installable sert les téléphones, et les clients WebDAV ouvrent la bibliothèque comme un lecteur.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que PhotoPrism ?', anchor: 'what-is-photoprism' },
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
            text: 'PhotoPrism est une bibliothèque open source et auto-hébergée pour photos et vidéos, qui étiquette les images et reconnaît les visages avec des modèles d’IA exécutés sur votre propre serveur.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’installez sur un ordinateur ou un NAS que vous contrôlez, vous lui indiquez vos images et vous les parcourez et les recherchez depuis n’importe quel navigateur, sans les confier à un service photo en ligne.',
          },
        ],
        items: [
          'Maintenance : la dernière version stable date du 7 octobre 2026 et le dépôt a reçu de nouveaux commits le 24 octobre 2026 ; aucun avertissement de projet abandonné ne s’applique.',
          'Installation : un serveur sous Docker avec un fichier de configuration à modifier ; le projet ne propose ni installateur de bureau ni application sur les stores.',
          'IA : des modèles intégrés étiquettent les photos et reconnaissent les visages sur votre serveur ; les légendes demandent un moteur Ollama ou OpenAI facultatif.',
          'Coût : l’édition Community est gratuite et sous licence AGPL, les abonnements payants sont facultatifs.',
          'Accès : l’interface est un navigateur avec une application web installable ; les applications mobiles citées dans la documentation viennent d’autres développeurs.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, la documentation, la politique de confidentialité et le dépôt GitHub du projet, consultés le 24 octobre 2026. PromptQuorum n’a pas installé PhotoPrism ; la précision des étiquettes, la qualité de la reconnaissance faciale et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoprism',
        title: 'Qu’est-ce que PhotoPrism ?',
        content: [
          '**PhotoPrism est une application web auto-hébergée pour parcourir, organiser et rechercher des photos et des vidéos sur un serveur que vous contrôlez.** Son site la présente comme « une application dopée à l’IA et axée sur la confidentialité » ; le code est sur GitHub sous licence AGPL, et la société se dit autofinancée et indépendante.',
          'L’édition Community gratuite est la version open source complète. Les abonnements payants et les licences d’équipe débloquent des fonctions supplémentaires, et le projet cite un hébergeur géré comme alternative à l’exploitation de son propre serveur.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**PhotoPrism est un serveur que vous installez vous-même ; la voie recommandée est Docker Compose, et il n’existe pas d’installateur en un clic pour ordinateur ou téléphone.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'Docker Compose', 'Comment l’obtenir': '[Guide d’installation](https://docs.photoprism.app/getting-started/docker-compose/) : télécharger un fichier de configuration, le modifier, lancer une commande' },
          { 'Option': 'Aide pour Windows', 'Comment l’obtenir': 'curl.exe et install.bat récupèrent la configuration et démarrent le serveur, selon le même guide' },
          { 'Option': 'Paquets Linux', 'Comment l’obtenir': '[Paquets tar.gz](https://dl.photoprism.app/pkg/linux/README.html) pour utilisateurs expérimentés ; configuration manuelle' },
          { 'Option': 'Hébergement géré', 'Comment l’obtenir': 'PikaPods, à partir de 6,50 $ par mois selon la page des tarifs' },
          { 'Option': 'Édition Community', 'Comment l’obtenir': 'Gratuite, AGPL-3.0, auto-hébergée ; stockage et instances illimités' },
          { 'Option': 'Abonnements', 'Comment l’obtenir': 'Essentials 2,00 €, Plus à partir de 6,00 € par mois, indiqués en euros sur la [page des tarifs](https://www.photoprism.app/editions/)' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[photoprism.app](https://www.photoprism.app)' },
          { 'Option': 'Politique de confidentialité', 'Comment l’obtenir': '[photoprism.app/privacy](https://www.photoprism.app/privacy/)' },
          { 'Option': 'Code source', 'Comment l’obtenir': '[github.com/photoprism/photoprism](https://github.com/photoprism/photoprism)' },
          { 'Option': 'Démo publique', 'Comment l’obtenir': '[try.photoprism.app](https://try.photoprism.app/) ; le projet demande de ne pas y envoyer d’images privées' },
        ],
        note: 'Version testée : version stable 261007-65faaae5d, publiée le 7 octobre 2026 selon la release GitHub, avec des commits sur la branche de développement jusqu’au 24 octobre 2026. La release ne fournit que des archives tar.gz pour Linux (amd64 et arm64), et le projet oriente la plupart des utilisateurs vers son image Docker. Les notes de version listent aussi une préversion de développement, qui n’est pas la version testée. Les prix sont ceux de la page des tarifs ; l’hébergeur géré est facturé en dollars américains.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**La documentation demande au moins 2 cœurs de processeur, 3 Go de RAM et un système 64 bits, plus du swap et un stockage SSD pour les grandes bibliothèques.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Serveur', 'Ce que disent les sources': '2 cœurs et 3 Go de RAM au minimum ; la RAM en Go devrait égaler le nombre de cœurs' },
          { 'Élément': 'Swap', 'Ce que disent les sources': 'Au moins 4 Go recommandés ; les fichiers RAW et les panoramas peuvent en exiger davantage' },
          { 'Élément': 'Environnement', 'Ce que disent les sources': 'Docker ou Podman sous Linux, macOS ou Windows ; images amd64 et ARM64, dont Raspberry Pi' },
          { 'Élément': 'Base de données', 'Ce que disent les sources': 'SQLite ou MariaDB 10.5.12+ ; la documentation juge SQLite peu adapté quand la performance compte' },
          { 'Élément': 'GPU', 'Ce que disent les sources': 'Facultatif ; les cartes NVIDIA peuvent exécuter les modèles intégrés, avec une image cuda distincte' },
          { 'Élément': 'Internet', 'Ce que disent les sources': 'Nécessaire pour le géocodage inversé et les cartes du monde ; la documentation demande d’autoriser l’API de géocodage dans les pare-feu' },
          { 'Élément': 'Navigateur', 'Ce que disent les sources': 'Un navigateur récent ; les cartes exigent WebGL 2' },
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
            title: 'Installer Docker',
            whyItMatters: 'Installez Docker (ou Podman) sur la machine qui accueillera vos photos ; le guide couvre Linux, macOS et Windows.',
          },
          {
            title: 'Télécharger et modifier le fichier compose',
            whyItMatters: 'Prenez le compose.yaml de votre plateforme dans le guide d’installation, puis définissez un mot de passe administrateur et les dossiers qui contiennent vos images.',
          },
          {
            title: 'Démarrer le serveur',
            whyItMatters: 'Exécutez docker compose up -d dans ce dossier, ouvrez l’adresse du serveur sur le port 2342 dans un navigateur et connectez-vous en tant qu’admin.',
          },
          {
            title: 'Indexer votre bibliothèque',
            whyItMatters: 'Ajoutez ou importez vos images et laissez la première indexation se dérouler ; le tutoriel Premiers pas du projet explique les réglages concernés.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Tout ce qui suit provient du site, du README ou de la documentation du projet ; PromptQuorum n’a rien testé.**',
        ],
        items: [
          '**Recherche et navigation.** Des filtres combinables couvrent les étiquettes, le lieu, la résolution, la couleur et la qualité ; les vues incluent Personnes, Lieux, Moments, Calendrier, Étiquettes et Dossiers.',
          '**Formats.** Les images RAW, Live Photos, Motion Photos, vidéos et panoramas à 360° sont indexés, et les doublons sont détectés.',
          '**Métadonnées.** Les données Exif, XMP, ExifTool JSON et Google Photos peuvent être lues et fusionnées.',
          '**Accès.** Une application web installable pour téléphones, un accès WebDAV depuis l’Explorateur Windows ou le Finder, et l’authentification unique OpenID Connect.',
        ],
        note: 'Certaines fonctions dépendent de l’édition : le tableau des tarifs classe parmi les options payantes des rôles utilisateur supplémentaires, des cartes vectorielles 3D et satellite et une interface de gestion des utilisateurs, et l’édition Community limite le débit du géocodage inversé.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Fonctions d’IA et où elles s’exécutent',
        content: [
          '**Les modèles intégrés tournent sur votre propre serveur via ONNX ; seul le moteur OpenAI facultatif envoie des images à un service cloud.**',
        ],
        items: [
          '**Étiquettes et détection de contenu pour adultes.** Un modèle ONNX intégré attribue les étiquettes et un second signale le contenu NSFW ; la version du 7 octobre 2026 a remplacé les anciens modèles TensorFlow et ne prend plus en charge les modèles TensorFlow personnalisés.',
          '**Visages.** YuNet localise les visages et SFace transforme chacun en vecteur pour les regrouper ; les anciennes bibliothèques gardent le modèle FaceNet jusqu’à leur migration, et la version indique que les nouveaux groupes sont désormais nommés automatiquement quand c’est possible.',
          '**Légendes et étiquettes plus riches.** Facultatif : un serveur Ollama que vous exploitez vous-même, ou l’API OpenAI dans le cloud avec votre propre clé, peut générer des légendes et des étiquettes.',
          '**GPU.** Les modèles intégrés peuvent utiliser une carte NVIDIA ; pour la génération d’étiquettes avec Ollama, le projet annonce 1 à 4 secondes par image sur une RTX 4060, et de 10 secondes à plus d’une minute sans GPU.',
          '**Désactivation.** Régler le modèle d’étiquettes sur « none » désactive leur génération, tandis que la détection des visages se coupe avec un réglage distinct.',
        ],
        note: 'Ces chiffres et comportements sont des déclarations du projet ; PromptQuorum n’a chronométré ni testé aucun modèle.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La politique de confidentialité, mise à jour pour la dernière fois le 19 août 2026, indique que les données qui ne quittent jamais votre réseau privé ne peuvent être collectées par personne, pas même par la société.** Pour un serveur auto-hébergé, cela signifie que photos, albums et résultats d’IA restent sur votre matériel tant que vous ne les envoyez pas ailleurs, par exemple via le moteur OpenAI.',
          'Selon la politique de confidentialité et la documentation, trois types de trafic atteignent des serveurs externes. Le géocodage inversé et les cartes du monde interactives récupèrent des données auprès de PhotoPrism et de MapTiler AG, en Suisse ; une requête de géocodage contient le lieu recherché et l’adresse IP publique de votre serveur. Les instances dotées d’une clé d’abonnement contactent aussi le projet pour la renouveler, en envoyant un identifiant d’instance aléatoire, la version du logiciel, le type de système d’exploitation et l’architecture du processeur. Enfin, un serveur accessible depuis Internet doit se trouver derrière un proxy inverse HTTPS, sans quoi mots de passe et fichiers circulent en clair.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du projet, pas des résultats d’audit. PromptQuorum n’a pas inspecté le trafic réseau ni examiné le code source au-delà des métadonnées du dépôt. La politique désigne PhotoPrism UG comme exploitant de ses propres services et renvoie à une déclaration de conformité au RGPD.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Auto-hébergeurs avec un serveur Docker ou un NAS** qui cherchent une alternative privée aux services photo en ligne.',
          '**Photographes avec de grandes bibliothèques RAW et vidéo** qui recherchent par étiquette, lieu et visage.',
          '**Foyers qui veulent une bibliothèque partagée** accessible par navigateur sur chaque appareil.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité de l’IA.** PromptQuorum n’a testé ni la précision des étiquettes, ni le regroupement des visages, ni la pertinence de la recherche ; les chiffres de vitesse ci-dessus viennent du projet.',
          '**Expérience mobile.** Le projet ne fournit qu’une application web ; la qualité et les conditions des applications d’autres développeurs citées dans sa documentation n’ont pas été vérifiées.',
          '**Limites des éditions.** Les fonctions réservées aux abonnements payants peuvent changer d’une version à l’autre ; consultez le tableau des tarifs avant de compter sur les cartes ou sur des rôles utilisateur supplémentaires.',
          '**Détails de licence.** Le détecteur de GitHub indique « Other », alors que le README et la documentation citent l’AGPL-3.0 pour l’édition Community ; les conditions des éditions payantes n’ont pas été examinées.',
          '**Consommation de ressources.** La documentation indique que l’indexation de grandes bibliothèques RAW peut dépasser la mémoire minimale ; l’usage réel n’a pas été mesuré.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'Le répertoire compte un autre gestionnaire de bibliothèque d’images avec un test, ainsi qu’une application auto-hébergée qui étiquette un autre type de contenu.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[PixlStash](/fr/power-local-llm/pixlstash-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / GPL-3.0', 'Différence clé': 'Application de bureau avec étiquetage local, recherche par visage et sémantique ; PhotoPrism est un serveur servi par navigateur' },
          { 'Application': '[Karakeep](/fr/power-local-llm/karakeep-review)', 'Plateformes': 'Web, iOS, Android', 'Prix / licence': 'Gratuit / AGPL-3.0', 'Différence clé': 'Gestionnaire de favoris et de notes avec étiquettes IA, pas une bibliothèque photo' },
        ],
        note: 'Aucun autre serveur de bibliothèque photo n’a encore de test PromptQuorum ; ce sont donc les outils listés les plus proches. Vérifiez le prix, la licence et les plateformes de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'PhotoPrism a-t-il une application pour iPhone ou Android ?',
            a: 'Le projet propose lui-même une application web installable ; sa documentation cite des applications d’autres développeurs, dont PhotoSync pour l’envoi en arrière-plan depuis les téléphones.',
          },
          {
            q: 'Comment mettre PhotoPrism à jour ?',
            a: 'Avec Docker Compose, vous téléchargez la nouvelle image et redémarrez les services ; passer l’étiquette d’image de latest à preview donne un accès anticipé aux versions de développement. Les notes de version peuvent contenir des étapes de mise à niveau, par exemple la relance des étiquettes après le changement d’IA d’octobre 2026.',
          },
          {
            q: 'Puis-je migrer depuis Google Photos ?',
            a: 'Les métadonnées de Google Photos peuvent être fusionnées, et la documentation comprend un guide de migration depuis le cloud ; PromptQuorum n’a pas essayé de migration.',
          },
          {
            q: 'Où PhotoPrism range-t-il mes fichiers ?',
            a: 'La configuration d’exemple définit trois dossiers : originals pour vos images, storage pour les fichiers internes comme la configuration, et import pour les fichiers à ajouter. Elle démarre aussi un conteneur MariaDB pour la base de données.',
          },
          {
            q: 'Existe-t-il une version pour les entreprises ?',
            a: 'Oui : la page Teams indique des licences à partir de 79 € par mois pour Starter, de 219 € pour Business et de 1 499 € pour Enterprise, avec des niveaux de support qui varient selon l’offre.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'PhotoPrism est une solution ancienne et activement mise à jour pour conserver une bibliothèque photo consultable sur du matériel que vous contrôlez, avec une reconnaissance faciale et des étiquettes IA qui tournent par défaut sur votre propre serveur. En contrepartie, l’installation demande Docker et un fichier de configuration, selon sa documentation, le projet ne propose pas d’application native pour ordinateur ou téléphone, les recherches de lieux et les cartes contactent des serveurs externes, et aucune de ses affirmations sur la qualité ou la vitesse de l’IA n’a pu être vérifiée ici. Elle convient à ceux qui exploitent déjà des services chez eux ou sur un NAS et peuvent d’abord essayer l’édition Community gratuite ; qui veut une application à double-clic ira voir ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de PhotoPrism](https://www.photoprism.app) — présentation du produit, tarifs et éditions, consulté le 24 octobre 2026.',
          '[Documentation de PhotoPrism](https://docs.photoprism.app) — installation, modèles d’IA, notes de version et applications mobiles, consultée le 24 octobre 2026.',
          '[Politique de confidentialité de PhotoPrism](https://www.photoprism.app/privacy/) — collecte de données et auto-hébergement, mise à jour le 19 août 2026.',
          '[PhotoPrism sur GitHub](https://github.com/photoprism/photoprism) — README, releases et activité des commits, consultés le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de PixlStash](/fr/power-local-llm/pixlstash-review) — un gestionnaire de bibliothèque d’images de bureau avec étiquetage IA local.',
          '[Test de Karakeep](/fr/power-local-llm/karakeep-review) — une application auto-hébergée avec étiquettes IA pour favoris et notes.',
          '[Répertoire de logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoprism-review-hero-ja.webp',
    title: 'PhotoPrismレビュー：セルフホスト型AI写真ライブラリ',
    seoTitle: 'PhotoPrismレビュー：セルフホスト型AI写真ライブラリ',
    intro:
      'PhotoPrismは、ベルリンの企業[PhotoPrism UG](https://www.photoprism.app)が手がけるセルフホスト型の写真・動画管理ソフトです。自分のサーバーで動かし、内蔵のAIモデルが画像にラベルを付け、顔を認識します。Communityエディションは無料のオープンソースで、有料メンバーシップでは地図などの機能が追加されます。このレビューは、プロジェクトのウェブサイト、ドキュメント、プライバシーポリシー、GitHubリポジトリ（2026年10月24日確認）に基づいており、PromptQuorumは実機でのテストを行っていません。',
    metaDescription:
      'PhotoPrismレビュー：AIによるラベル付けと顔認識を内蔵した、セルフホスト型のオープンソース写真ライブラリ。Communityエディションは無料でDockerで導入。未検証。',
    twitterDescription:
      'PhotoPrismレビュー：ローカルAIでラベル付けと顔認識を行うセルフホスト型写真ライブラリ。Communityエディションは無料。情報源で確認できた点とできなかった点。',
    audience:
      '自分のハードウェアで非公開かつ検索可能な写真ライブラリを運用したいセルフホスターや写真家のうち、情報源が確認している点、プロジェクトが主張しているだけの点、費用を知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PhotoPrism レビュー',
    targetKeywords: [
      'photoprism レビュー',
      'photoprism ai 写真管理',
      'セルフホスト 写真ライブラリ',
      'photoprism 顔認識',
      'photoprism docker 導入',
      'google フォト 代替 セルフホスト',
      'photoprism プライバシー',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi', 'NVIDIA RTX 4060'],
    leadAnswerBlock:
      '**PhotoPrism（安定版ビルド261007-65faaae5d）は、Dockerで自分のサーバーにインストールするオープンソースの写真・動画ライブラリで、AIによるラベル付けと顔認識は既定でそのサーバー上で動作します。**Communityエディションは無料ですが、セットアップにはターミナルが必要です。本文の記述はすべてプロジェクト自身のウェブサイト、ドキュメント、リポジトリによります。',
    quickAnswerTop: {
      ja: {
        question: 'PhotoPrismは写真をクラウドのAIサービスに送信しますか？',
        answer:
          'プロジェクトによれば既定では送信しません。ラベル、顔、成人向けコンテンツ検出の内蔵モデルは自分のサーバー上で動作します。画像が外に出るのは任意のOpenAIエンジンを設定した場合のみで、位置情報の検索と世界地図は外部サービスに接続します（「データの流れとプライバシー」を参照）。',
        bullets: [
          '検索では、ラベル、場所、色、品質などのフィルターを組み合わせられます。',
          'RAWファイル、Live Photos、一般的な動画形式を手動で変換せずに閲覧できます。',
          'メタデータはExif、XMP、Googleフォトのエクスポートなどから読み込まれます。',
          'インストール可能なWebアプリがスマートフォンに対応し、WebDAVクライアントからはドライブのように開けます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'PhotoPrismとは', anchor: 'what-is-photoprism' },
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
            text: 'PhotoPrismは、自分のサーバー上で動くAIモデルで画像にラベルを付け、顔を認識する、オープンソースでセルフホスト型の写真・動画ライブラリです。',
          },
          {
            type: 'plain-terms',
            text: '自分で管理するパソコンやNASにインストールして写真のある場所を指定すれば、クラウドの写真サービスに預けずに、どのブラウザからでも閲覧・検索できます。',
          },
        ],
        items: [
          'メンテナンス：最新の安定版は2026年10月7日のもので、リポジトリには2026年10月24日にも新しいコミットがあり、更新停止の警告は該当しません。',
          'セットアップ：Dockerを使うサーバー型で、設定ファイルの編集が必要です。デスクトップ用インストーラーやアプリストア版はプロジェクトからは提供されていません。',
          'AI：内蔵モデルが自分のサーバー上で写真のラベル付けと顔認識を行い、キャプションにはOllamaまたはOpenAIの任意のエンジンが必要です。',
          '費用：Communityエディションは無料でAGPLライセンスです。有料メンバーシップは任意です。',
          '利用方法：ブラウザとインストール可能なWebアプリが画面で、ドキュメントが挙げるスマートフォンアプリは別の開発者によるものです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月24日に確認したプロジェクトのウェブサイト、ドキュメント、プライバシーポリシー、GitHubリポジトリに基づきます。PromptQuorumはPhotoPrismをインストールしていないため、ラベルの精度、顔認識の品質、速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-photoprism',
        title: 'PhotoPrismとは',
        content: [
          '**PhotoPrismは、自分で管理するサーバー上で写真や動画を閲覧・整理・検索するための、セルフホスト型のWebアプリケーションです。**公式サイトでは「AIを活用したプライバシー重視のアプリ」と紹介され、コードはAGPLのもとGitHubで公開されています。同社は自己資金で運営され独立していると述べています。',
          '無料のCommunityエディションがオープンソース版の完全な形です。有料メンバーシップとチームライセンスで追加機能が使えるようになり、自分でサーバーを運用する代わりにマネージドホスティングを使う選択肢もプロジェクトは挙げています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**PhotoPrismは自分でインストールするサーバーで、推奨はDocker Composeです。デスクトップやスマートフォン向けのワンクリックのインストーラーはありません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'Docker Compose', '入手方法': '[セットアップガイド](https://docs.photoprism.app/getting-started/docker-compose/)：設定ファイルをダウンロードして編集し、コマンドを1つ実行' },
          { '項目': 'Windows用ヘルパー', '入手方法': '同ガイドによれば、curl.exeとinstall.batが設定を取得してサーバーを起動' },
          { '項目': 'Linuxパッケージ', '入手方法': '経験者向けの[tar.gzパッケージ](https://dl.photoprism.app/pkg/linux/README.html)。手動設定が必要' },
          { '項目': 'マネージドホスティング', '入手方法': '料金ページによればPikaPodsで月額$6.50から' },
          { '項目': 'Communityエディション', '入手方法': '無料、AGPL-3.0、セルフホスト。ストレージとインスタンスは無制限' },
          { '項目': 'メンバーシップ', '入手方法': 'Essentialsは月額€2.00、Plusは月額€6.00から（[料金ページ](https://www.photoprism.app/editions/)にユーロで表示）' },
          { '項目': 'ウェブサイト', '入手方法': '[photoprism.app](https://www.photoprism.app)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[photoprism.app/privacy](https://www.photoprism.app/privacy/)' },
          { '項目': 'ソースコード', '入手方法': '[github.com/photoprism/photoprism](https://github.com/photoprism/photoprism)' },
          { '項目': '公開デモ', '入手方法': '[try.photoprism.app](https://try.photoprism.app/)。プライベートな画像はアップロードしないよう求められています' },
        ],
        note: '確認したバージョン：安定版ビルド261007-65faaae5d。GitHubのリリースによれば2026年10月7日に公開され、開発ブランチには2026年10月24日までコミットがあります。このリリースにはLinux（amd64とarm64）用のtar.gzファイルしか含まれず、プロジェクトは大半のユーザーにDockerイメージを案内しています。リリースノートには開発プレビューも載っていますが、確認した版ではありません。価格は料金ページの表示どおりで、マネージドホスティングは米ドル表記です。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**ドキュメントは、最低でもCPU 2コア、RAM 3 GB、64ビットOSを求めており、大きなライブラリにはスワップとSSDも必要としています。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': 'サーバー', '情報源の記載': '最低2コアとRAM 3 GB。RAM（GB）はコア数と同程度が望ましい' },
          { '項目': 'スワップ', '情報源の記載': '4 GB以上を推奨。RAWファイルやパノラマではさらに必要な場合あり' },
          { '項目': '実行環境', '情報源の記載': 'Linux、macOS、WindowsのDockerまたはPodman。amd64とARM64のイメージがあり、Raspberry Piも対象' },
          { '項目': 'データベース', '情報源の記載': 'SQLiteまたはMariaDB 10.5.12以降。性能が重要ならSQLiteは不向きとドキュメントは述べています' },
          { '項目': 'GPU', '情報源の記載': '任意。NVIDIAカードで内蔵モデルを実行でき、専用のcudaイメージを使用' },
          { '項目': 'インターネット', '情報源の記載': '逆ジオコーディングと世界地図に必要。ファイアウォールでジオコーディングAPIを許可するようドキュメントは求めています' },
          { '項目': 'ブラウザ', '情報源の記載': '最新のブラウザ。地図にはWebGL 2が必要' },
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
            title: 'Dockerをインストールする',
            whyItMatters: '写真を保管するマシンにDocker（またはPodman）をインストールします。ガイドはLinux、macOS、Windowsに対応しています。',
          },
          {
            title: 'composeファイルをダウンロードして編集する',
            whyItMatters: 'セットアップガイドから自分のプラットフォーム用のcompose.yamlを入手し、管理者パスワードと画像を置くフォルダーを設定します。',
          },
          {
            title: 'サーバーを起動する',
            whyItMatters: 'そのフォルダーでdocker compose up -dを実行し、ブラウザでポート2342のサーバーアドレスを開いて、adminでサインインします。',
          },
          {
            title: 'ライブラリをインデックスする',
            whyItMatters: '画像を追加またはインポートして、最初のインデックス作成を実行します。設定についてはプロジェクトの「First Steps」チュートリアルで説明されています。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下はすべてプロジェクトのウェブサイト、README、ドキュメントに基づく内容で、PromptQuorumは一つも検証していません。**',
        ],
        items: [
          '**検索と閲覧。**ラベル、場所、解像度、色、品質を組み合わせられるフィルターがあり、人物、場所、思い出、カレンダー、ラベル、フォルダーの各ビューがあります。',
          '**対応形式。**RAW画像、Live Photos、Motion Photos、動画、360°パノラマをインデックスし、重複も検出します。',
          '**メタデータ。**Exif、XMP、ExifTool JSON、Googleフォトのデータを読み込んで統合できます。',
          '**アクセス。**スマートフォン向けのインストール可能なWebアプリ、WindowsエクスプローラーやFinderからのWebDAVアクセス、OpenID Connectによるシングルサインオンに対応します。',
        ],
        note: '機能によってはエディションに左右されます。料金表では、追加のユーザーロール、3Dベクターマップと衛星地図、ユーザー管理画面が有料とされており、Communityエディションの逆ジオコーディングにはレート制限があります。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI機能と実行場所',
        content: [
          '**内蔵モデルはONNXで自分のサーバー上で動作し、画像をクラウドサービスに送るのは任意のOpenAIエンジンだけです。**',
        ],
        items: [
          '**ラベルと成人向けコンテンツ検出。**内蔵のONNXモデルが画像にラベルを付け、別のモデルがNSFWコンテンツを検出します。2026年10月7日のリリースで従来のTensorFlowモデルが置き換えられ、カスタムTensorFlowモデルは使えなくなりました。',
          '**顔。**YuNetが顔を検出し、SFaceが各顔をグループ化用のベクトルに変換します。以前に作られたライブラリは移行までFaceNetモデルを使い続け、リリースによれば新しいクラスターは可能な場合に自動で名前が付きます。',
          '**キャプションと詳細なラベル。**任意機能として、自分で運用するOllamaサーバー、または自分のキーを使うクラウドのOpenAI APIでキャプションとラベルを生成できます。',
          '**GPU。**内蔵モデルはNVIDIAカードを利用できます。Ollamaでのラベル生成について、プロジェクトはRTX 4060で1画像あたり1～4秒、GPUなしでは10秒から1分以上としています。',
          '**無効化。**ラベルモデルを「none」にするとラベル生成が無効になり、顔検出は別の設定で無効にします。',
        ],
        note: 'これらの数値と挙動はプロジェクト自身の説明であり、PromptQuorumはどのモデルも計測やテストをしていません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**2026年8月19日更新のプライバシーポリシーは、プライベートネットワークの外に出ないデータは、同社を含め誰も収集できないと述べています。**セルフホストのサーバーでは、OpenAIエンジンなどで外部に送らない限り、写真、アルバム、AIの結果は自分のハードウェアに留まるということです。',
          'プライバシーポリシーとドキュメントによれば、外部サーバーに届く通信は3種類あります。逆ジオコーディングとインタラクティブな世界地図は、PhotoPrismとスイスのMapTiler AGからデータを取得し、ジオコーディングのリクエストには検索する場所とサーバーのグローバルIPアドレスが含まれます。メンバーシップキーを持つインスタンスは更新のためにプロジェクトにも接続し、ランダムなインスタンスID、ソフトウェアのバージョン、OSの種類、CPUアーキテクチャを送ります。さらに、インターネットから到達できるサーバーはHTTPSのリバースプロキシの背後に置く必要があり、そうしないとパスワードやファイルが平文で送られます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクトの申告であり、監査結果ではありません。PromptQuorumはネットワーク通信を調べておらず、リポジトリのメタデータ以外のソースコードも確認していません。ポリシーはPhotoPrism UGを自社サービスの運営者と明記し、GDPR適合に関する声明へのリンクを載せています。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**DockerサーバーやNASを使うセルフホスター**で、クラウド写真サービスの非公開な代替を探している方。',
          '**大量のRAWや動画を持つ写真家**で、ラベル・場所・顔で検索したい方。',
          '**家族で1つのライブラリを共有したい世帯**で、どの端末でもブラウザから使いたい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**AIの品質。**PromptQuorumはラベルの精度、顔のグループ化、検索の関連性をテストしていません。上記の速度の数値はプロジェクトによるものです。',
          '**スマートフォンでの使い心地。**プロジェクトが提供するのはWebアプリのみで、ドキュメントに挙げられた他の開発者のアプリの品質と条件は確認していません。',
          '**エディションの境界。**有料メンバーシップの対象機能はリリースごとに変わる可能性があります。地図や追加のユーザーロールに頼る前に料金表を確認してください。',
          '**ライセンスの詳細。**GitHubの判定は「Other」ですが、READMEとドキュメントはCommunityエディションをAGPL-3.0としています。有料エディションの条件は確認していません。',
          '**リソース消費。**大きなRAWライブラリのインデックス作成は最低メモリを超えることがあるとドキュメントは述べていますが、実際の使用量は測定していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、レビュー付きの画像ライブラリ管理ツールがもう1つあり、別の種類のコンテンツにタグを付けるセルフホスト型アプリもあります。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[PixlStash](/ja/power-local-llm/pixlstash-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／GPL-3.0', '主な違い': 'ローカルのタグ付け、顔・意味検索を備えたデスクトップアプリ。PhotoPrismはブラウザで使うサーバー' },
          { 'アプリ': '[Karakeep](/ja/power-local-llm/karakeep-review)', '対応プラットフォーム': 'Web、iOS、Android', '価格／ライセンス': '無料／AGPL-3.0', '主な違い': 'AIタグ付けのあるブックマーク・メモ管理で、写真ライブラリではない' },
        ],
        note: '写真ライブラリ用サーバーでPromptQuorumのレビューがあるものは他にないため、これらは掲載中で最も近いツールです。価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'PhotoPrismにはiPhoneやAndroid用のアプリがありますか？',
            a: 'プロジェクト自身が提供するのはインストール可能なWebアプリです。ドキュメントには、スマートフォンからのバックグラウンドアップロードに使うPhotoSyncなど、他の開発者のアプリが挙げられています。',
          },
          {
            q: 'PhotoPrismはどう更新しますか？',
            a: 'Docker Composeでは新しいイメージを取得してサービスを再起動します。イメージタグをlatestからpreviewに変えると開発ビルドを先行して試せます。リリースノートにはアップグレード手順が含まれることがあり、たとえば2026年10月のAI変更後にラベルを再実行する手順があります。',
          },
          {
            q: 'Googleフォトから移行できますか？',
            a: 'Googleフォトのメタデータは統合でき、ドキュメントにはクラウド移行ガイドもあります。PromptQuorumは移行を試していません。',
          },
          {
            q: 'PhotoPrismはファイルをどこに保存しますか？',
            a: 'サンプル設定では3つのフォルダーを定義しています。画像用のoriginals、設定などの内部ファイル用のstorage、追加するファイル用のimportです。データベース用のMariaDBコンテナも起動します。',
          },
          {
            q: '法人向けのバージョンはありますか？',
            a: 'あります。Teamsのページには、Starterが月額€79から、Businessが€219から、Enterpriseが€1,499からのライセンスが載っており、サポートの水準はプランごとに異なります。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'PhotoPrismは、自分で管理するハードウェア上に検索可能な写真ライブラリを置くための、長く続いていて更新も活発な手段で、顔認識とAIラベル付けは既定で自分のサーバー上で動きます。一方で、セットアップにはDockerと設定ファイルが必要で、ドキュメントによればプロジェクトはネイティブのデスクトップ／スマートフォンアプリを提供しておらず、位置情報の検索と地図は外部サーバーに接続し、AIの品質や速度に関する主張はここでは確認できませんでした。自宅やNASで既にサービスを動かしていて、まず無料のCommunityエディションを試せる方に向いており、ダブルクリックで使えるアプリを求める方は別の選択肢を探すほうがよいでしょう。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[PhotoPrism公式サイト](https://www.photoprism.app) — 製品概要、価格とエディション。2026年10月24日確認。',
          '[PhotoPrismドキュメント](https://docs.photoprism.app) — セットアップ、AIモデル、リリースノート、モバイルアプリ。2026年10月24日確認。',
          '[PhotoPrismプライバシーポリシー](https://www.photoprism.app/privacy/) — データ収集とセルフホストに関する記述。2026年8月19日更新。',
          '[GitHubのPhotoPrism](https://github.com/photoprism/photoprism) — README、リリース、コミットの動き。2026年10月24日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PixlStashレビュー](/ja/power-local-llm/pixlstash-review) — ローカルAIでタグ付けするデスクトップ型の画像ライブラリ管理ツール。',
          '[Karakeepレビュー](/ja/power-local-llm/karakeep-review) — ブックマークとメモにAIタグを付けるセルフホスト型アプリ。',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoprism-review-hero-pt.webp',
    title: 'Análise do PhotoPrism: biblioteca de fotos com IA auto-hospedada',
    seoTitle: 'Análise do PhotoPrism: biblioteca de fotos com IA',
    intro:
      'O PhotoPrism é um gerenciador de fotos e vídeos auto-hospedado da empresa berlinense [PhotoPrism UG](https://www.photoprism.app), que você executa no seu próprio servidor, com modelos de IA integrados que etiquetam imagens e reconhecem rostos. A edição Community é gratuita e de código aberto, e as assinaturas pagas acrescentam mapas e outros recursos. Esta análise se baseia no site, na documentação, na política de privacidade e no repositório do GitHub do projeto, consultados em 24 de outubro de 2026; a PromptQuorum não testou o software na prática.',
    metaDescription:
      'Análise do PhotoPrism: biblioteca de fotos auto-hospedada e de código aberto com IA para etiquetas e rostos. Edição Community grátis; sem testes.',
    twitterDescription:
      'Análise do PhotoPrism: biblioteca de fotos auto-hospedada com etiquetas de IA locais e reconhecimento facial. Edição Community grátis; o que as fontes confirmam e o que não.',
    audience:
      'Quem faz auto-hospedagem e fotógrafos que querem uma biblioteca de fotos privada e pesquisável no próprio hardware e precisam saber o que as fontes confirmam, o que o projeto apenas afirma e quanto custa.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise PhotoPrism',
    targetKeywords: [
      'análise photoprism',
      'photoprism gerenciador de fotos ia',
      'biblioteca de fotos auto-hospedada',
      'photoprism reconhecimento facial',
      'photoprism instalação docker',
      'alternativa ao google fotos auto-hospedada',
      'photoprism privacidade',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi', 'NVIDIA RTX 4060'],
    leadAnswerBlock:
      '**O PhotoPrism (build estável 261007-65faaae5d) é uma biblioteca de fotos e vídeos de código aberto que você instala no seu próprio servidor com Docker; a etiquetagem por IA e o reconhecimento facial rodam lá por padrão.** A edição Community é gratuita e a instalação exige um terminal. Todas as afirmações vêm do site, da documentação e do repositório do projeto.',
    quickAnswerTop: {
      pt: {
        question: 'O PhotoPrism envia minhas fotos para um serviço de IA na nuvem?',
        answer:
          'Segundo o projeto, não por padrão: os modelos integrados para etiquetas, rostos e detecção de conteúdo adulto rodam no seu próprio servidor. As imagens só saem dele se você configurar o mecanismo opcional da OpenAI, e as consultas de localização e os mapas-múndi contatam serviços externos (veja Fluxo de dados e privacidade).',
        bullets: [
          'A busca combina filtros como etiquetas, local, cor e qualidade.',
          'Arquivos RAW, Live Photos e formatos de vídeo comuns podem ser explorados sem conversão manual.',
          'Os metadados são lidos de Exif, XMP e fontes como exportações do Google Fotos.',
          'Um app web instalável atende os celulares, e clientes WebDAV abrem a biblioteca como uma unidade.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o PhotoPrism?', anchor: 'what-is-photoprism' },
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
            text: 'O PhotoPrism é uma biblioteca de fotos e vídeos de código aberto e auto-hospedada que etiqueta imagens e reconhece rostos com modelos de IA que rodam no seu próprio servidor.',
          },
          {
            type: 'plain-terms',
            text: 'Você o instala em um computador ou NAS que controla, indica onde estão suas imagens e as explora e pesquisa em qualquer navegador, sem entregá-las a um serviço de fotos na nuvem.',
          },
        ],
        items: [
          'Manutenção: o build estável mais recente é de 7 de outubro de 2026 e o repositório recebeu novos commits em 24 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Instalação: um servidor com Docker e um arquivo de configuração para editar; o projeto não oferece instalador para desktop nem app nas lojas.',
          'IA: modelos integrados etiquetam fotos e reconhecem rostos no seu servidor; legendas exigem um mecanismo opcional do Ollama ou da OpenAI.',
          'Custo: a edição Community é gratuita e sob licença AGPL, e as assinaturas pagas são opcionais.',
          'Acesso: a interface é um navegador com app web instalável; os apps de celular citados na documentação são de outros desenvolvedores.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, na documentação, na política de privacidade e no repositório do GitHub do projeto, consultados em 24 de outubro de 2026. A PromptQuorum não instalou o PhotoPrism, portanto a precisão das etiquetas, a qualidade do reconhecimento facial e a velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoprism',
        title: 'O que é o PhotoPrism?',
        content: [
          '**O PhotoPrism é um aplicativo web auto-hospedado para explorar, organizar e pesquisar fotos e vídeos em um servidor que você controla.** O site o descreve como "um app com IA e foco em privacidade"; o código está no GitHub sob a AGPL, e a empresa diz ser autofinanciada e independente.',
          'A edição Community gratuita é a versão completa de código aberto. As assinaturas pagas e as licenças para equipes liberam recursos extras, e o projeto cita uma hospedagem gerenciada como alternativa a operar o servidor por conta própria.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O PhotoPrism é um servidor que você mesmo instala; o caminho recomendado é o Docker Compose, e não há instalador de um clique para desktop ou celular.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Docker Compose', 'Onde obter': '[Guia de instalação](https://docs.photoprism.app/getting-started/docker-compose/): baixar um arquivo de configuração, editá-lo e executar um comando' },
          { 'Opção': 'Auxiliar para Windows', 'Onde obter': 'curl.exe e install.bat baixam a configuração e iniciam o servidor, segundo o mesmo guia' },
          { 'Opção': 'Pacotes para Linux', 'Onde obter': '[Pacotes tar.gz](https://dl.photoprism.app/pkg/linux/README.html) para usuários experientes; configuração manual' },
          { 'Opção': 'Hospedagem gerenciada', 'Onde obter': 'PikaPods, a partir de US$ 6,50 por mês segundo a página de preços' },
          { 'Opção': 'Edição Community', 'Onde obter': 'Grátis, AGPL-3.0, auto-hospedada; armazenamento e instâncias ilimitados' },
          { 'Opção': 'Assinaturas', 'Onde obter': 'Essentials € 2,00, Plus a partir de € 6,00 por mês, exibidos em euros na [página de preços](https://www.photoprism.app/editions/)' },
          { 'Opção': 'Site', 'Onde obter': '[photoprism.app](https://www.photoprism.app)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[photoprism.app/privacy](https://www.photoprism.app/privacy/)' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/photoprism/photoprism](https://github.com/photoprism/photoprism)' },
          { 'Opção': 'Demo pública', 'Onde obter': '[try.photoprism.app](https://try.photoprism.app/); o projeto pede para não enviar imagens privadas' },
        ],
        note: 'Versão analisada: build estável 261007-65faaae5d, publicado em 7 de outubro de 2026 segundo a release do GitHub, com commits na branch de desenvolvimento até 24 de outubro de 2026. A release traz apenas arquivos tar.gz para Linux (amd64 e arm64), e o projeto direciona a maioria dos usuários à sua imagem Docker. As notas de versão também listam uma prévia de desenvolvimento, que não é a versão analisada. Os preços são os exibidos na página de preços; a hospedagem gerenciada é cotada em dólares americanos.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A documentação pede no mínimo 2 núcleos de CPU, 3 GB de RAM e um sistema operacional de 64 bits, além de swap e armazenamento SSD para bibliotecas grandes.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Servidor', 'O que dizem as fontes': 'Mínimo de 2 núcleos e 3 GB de RAM; a RAM em GB deve igualar o número de núcleos' },
          { 'Item': 'Swap', 'O que dizem as fontes': 'Recomendados pelo menos 4 GB; arquivos RAW e panoramas podem exigir mais' },
          { 'Item': 'Ambiente de execução', 'O que dizem as fontes': 'Docker ou Podman no Linux, macOS ou Windows; imagens amd64 e ARM64, inclusive Raspberry Pi' },
          { 'Item': 'Banco de dados', 'O que dizem as fontes': 'SQLite ou MariaDB 10.5.12+; a documentação considera o SQLite pouco indicado quando o desempenho importa' },
          { 'Item': 'GPU', 'O que dizem as fontes': 'Opcional; placas NVIDIA podem executar os modelos integrados, com uma imagem cuda separada' },
          { 'Item': 'Internet', 'O que dizem as fontes': 'Necessária para a geocodificação reversa e os mapas-múndi; a documentação pede liberar a API de geocodificação nos firewalls' },
          { 'Item': 'Navegador', 'O que dizem as fontes': 'Um navegador atual; os mapas exigem WebGL 2' },
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
            title: 'Instale o Docker',
            whyItMatters: 'Instale o Docker (ou o Podman) na máquina que vai guardar suas fotos; o guia cobre Linux, macOS e Windows.',
          },
          {
            title: 'Baixe e edite o arquivo compose',
            whyItMatters: 'Pegue o compose.yaml da sua plataforma no guia de instalação e defina uma senha de administrador e as pastas que contêm suas imagens.',
          },
          {
            title: 'Inicie o servidor',
            whyItMatters: 'Execute docker compose up -d nessa pasta, abra o endereço do servidor na porta 2342 em um navegador e entre como admin.',
          },
          {
            title: 'Indexe sua biblioteca',
            whyItMatters: 'Adicione ou importe suas imagens e deixe a primeira indexação rodar; o tutorial de primeiros passos do projeto explica as configurações que a controlam.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Tudo o que segue vem do site, do README ou da documentação do projeto; a PromptQuorum não testou nada.**',
        ],
        items: [
          '**Busca e navegação.** Filtros combináveis cobrem etiquetas, local, resolução, cor e qualidade; as visualizações incluem Pessoas, Lugares, Momentos, Calendário, Etiquetas e Pastas.',
          '**Formatos.** Imagens RAW, Live Photos, Motion Photos, vídeos e panoramas de 360° são indexados, e duplicatas são detectadas.',
          '**Metadados.** Dados de Exif, XMP, ExifTool JSON e Google Fotos podem ser lidos e mesclados.',
          '**Acesso.** Um app web instalável para celulares, acesso WebDAV pelo Explorador de Arquivos do Windows ou pelo Finder e login único com OpenID Connect.',
        ],
        note: 'Alguns recursos dependem da edição: a tabela de preços classifica como pagos os papéis de usuário adicionais, os mapas vetoriais 3D e de satélite e uma interface de gerenciamento de usuários, e a edição Community limita a taxa da geocodificação reversa.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Recursos de IA e onde eles rodam',
        content: [
          '**Os modelos integrados rodam no seu próprio servidor via ONNX; somente o mecanismo opcional da OpenAI envia imagens a um serviço na nuvem.**',
        ],
        items: [
          '**Etiquetas e detecção de conteúdo adulto.** Um modelo ONNX integrado etiqueta as imagens e outro sinaliza conteúdo NSFW; a versão de 7 de outubro de 2026 substituiu os modelos TensorFlow anteriores e não aceita mais modelos TensorFlow personalizados.',
          '**Rostos.** O YuNet localiza os rostos e o SFace transforma cada um em um vetor para agrupamento; bibliotecas antigas mantêm o modelo FaceNet até serem migradas, e a versão informa que novos grupos agora são nomeados automaticamente quando possível.',
          '**Legendas e etiquetas mais ricas.** Opcional: um servidor Ollama que você mesmo opera, ou a API da OpenAI na nuvem com sua própria chave, pode gerar legendas e etiquetas.',
          '**GPU.** Os modelos integrados podem usar uma placa NVIDIA; para a geração de etiquetas com Ollama, o projeto informa de 1 a 4 segundos por imagem em uma RTX 4060 e de 10 segundos a mais de um minuto sem GPU.',
          '**Desativação.** Definir o modelo de etiquetas como "none" desativa a geração de etiquetas, enquanto a detecção de rostos é desligada por uma configuração separada.',
        ],
        note: 'Esses números e comportamentos são declarações do próprio projeto; a PromptQuorum não cronometrou nem testou nenhum modelo.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A política de privacidade, atualizada pela última vez em 19 de agosto de 2026, diz que dados que nunca saem da sua rede privada não podem ser coletados por ninguém, nem pela empresa.** Em um servidor auto-hospedado, isso significa que fotos, álbuns e resultados de IA permanecem no seu hardware, a menos que você os envie a outro lugar, por exemplo pelo mecanismo da OpenAI.',
          'Segundo a política de privacidade e a documentação, três tipos de tráfego chegam a servidores externos. A geocodificação reversa e os mapas-múndi interativos obtêm dados do PhotoPrism e da MapTiler AG, na Suíça; uma requisição de geocodificação leva o local consultado e o endereço IP público do seu servidor. Instâncias com chave de assinatura também contatam o projeto para renová-la, enviando um ID de instância aleatório, a versão do software, o tipo de sistema operacional e a arquitetura da CPU. Por fim, um servidor acessível pela internet deve ficar atrás de um proxy reverso HTTPS; caso contrário, senhas e arquivos trafegam em texto claro.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do projeto, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede nem revisou o código-fonte além dos metadados do repositório. A política nomeia a PhotoPrism UG como operadora dos próprios serviços e vincula uma declaração de conformidade com o GDPR.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Quem auto-hospeda com um servidor Docker ou NAS** e busca uma alternativa privada aos serviços de fotos na nuvem.',
          '**Fotógrafos com grandes bibliotecas RAW e de vídeo** que pesquisam por etiqueta, local e rosto.',
          '**Famílias que querem uma biblioteca compartilhada** acessível pelo navegador em qualquer dispositivo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade da IA.** A PromptQuorum não testou a precisão das etiquetas, o agrupamento de rostos nem a relevância da busca; os números de velocidade acima são do projeto.',
          '**Experiência no celular.** O projeto oferece apenas um app web; a qualidade e os termos dos apps de outros desenvolvedores citados na documentação não foram verificados.',
          '**Limites entre edições.** Quais recursos ficam atrás de uma assinatura paga pode mudar entre versões; consulte a tabela de preços antes de contar com mapas ou papéis de usuário adicionais.',
          '**Detalhes da licença.** O detector do GitHub indica "Other", enquanto o README e a documentação citam AGPL-3.0 para a edição Community; os termos das edições pagas não foram analisados.',
          '**Uso de recursos.** A documentação diz que indexar grandes bibliotecas RAW pode exceder a memória mínima; o consumo real não foi medido.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório tem outro gerenciador de bibliotecas de imagens com análise, além de um app auto-hospedado que etiqueta outro tipo de conteúdo.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[PixlStash](/pt/power-local-llm/pixlstash-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / GPL-3.0', 'Diferença principal': 'App de desktop com etiquetagem local e busca por rosto e semântica; o PhotoPrism é um servidor acessado pelo navegador' },
          { 'App': '[Karakeep](/pt/power-local-llm/karakeep-review)', 'Plataformas': 'Web, iOS, Android', 'Preço / licença': 'Grátis / AGPL-3.0', 'Diferença principal': 'Gerenciador de favoritos e notas com etiquetas de IA, não uma biblioteca de fotos' },
        ],
        note: 'Nenhum outro servidor de biblioteca de fotos tem ainda uma análise da PromptQuorum, então estas são as ferramentas listadas mais próximas; confirme preço, licença e plataformas de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O PhotoPrism tem app para iPhone ou Android?',
            a: 'O próprio projeto oferece um app web instalável; sua documentação cita apps de outros desenvolvedores, entre eles o PhotoSync para envio em segundo plano a partir de celulares.',
          },
          {
            q: 'Como atualizo o PhotoPrism?',
            a: 'Com o Docker Compose, você baixa a nova imagem e reinicia os serviços; trocar a tag da imagem de latest para preview dá acesso antecipado a builds de desenvolvimento. As notas de versão podem trazer etapas de atualização, por exemplo a nova execução das etiquetas após a mudança de IA de outubro de 2026.',
          },
          {
            q: 'Posso migrar do Google Fotos?',
            a: 'Os metadados do Google Fotos podem ser mesclados, e a documentação inclui um guia de migração da nuvem; a PromptQuorum não tentou nenhuma migração.',
          },
          {
            q: 'Onde o PhotoPrism guarda meus arquivos?',
            a: 'A configuração de exemplo define três pastas: originals para suas imagens, storage para arquivos internos como a configuração e import para arquivos a serem adicionados. Ela também inicia um contêiner MariaDB para o banco de dados.',
          },
          {
            q: 'Existe uma versão para empresas?',
            a: 'Sim: a página Teams lista licenças a partir de € 79 por mês para o Starter, a partir de € 219 para o Business e a partir de € 1.499 para o Enterprise, com níveis de suporte que variam conforme o plano.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O PhotoPrism é um jeito consolidado e com atualizações ativas de manter uma biblioteca de fotos pesquisável em hardware que você controla, com reconhecimento facial e etiquetas de IA que por padrão rodam no seu próprio servidor. Em contrapartida, a instalação exige Docker e um arquivo de configuração, segundo a documentação, o projeto não oferece app nativo para desktop ou celular, as consultas de localização e os mapas contatam servidores externos, e nenhuma de suas afirmações sobre qualidade ou velocidade da IA pôde ser verificada aqui. Serve a quem já opera serviços em casa ou em um NAS e pode experimentar primeiro a edição Community gratuita; quem quer um app de duplo clique deve procurar em outro lugar.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do PhotoPrism](https://www.photoprism.app) — visão geral do produto, preços e edições, consultado em 24 de outubro de 2026.',
          '[Documentação do PhotoPrism](https://docs.photoprism.app) — instalação, modelos de IA, notas de versão e apps de celular, consultada em 24 de outubro de 2026.',
          '[Política de privacidade do PhotoPrism](https://www.photoprism.app/privacy/) — coleta de dados e auto-hospedagem, atualizada em 19 de agosto de 2026.',
          '[PhotoPrism no GitHub](https://github.com/photoprism/photoprism) — README, releases e atividade de commits, consultados em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PixlStash](/pt/power-local-llm/pixlstash-review) — um gerenciador de bibliotecas de imagens para desktop com etiquetagem de IA local.',
          '[Análise do Karakeep](/pt/power-local-llm/karakeep-review) — um app auto-hospedado com etiquetas de IA para favoritos e notas.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoprism-review-hero-ar.webp',
    title: 'مراجعة PhotoPrism: مكتبة صور بالذكاء الاصطناعي على خادمك',
    seoTitle: 'مراجعة PhotoPrism: مكتبة صور ذكية ذاتية الاستضافة',
    intro:
      'PhotoPrism برنامج لإدارة الصور والفيديو مستضاف ذاتيًا من شركة [PhotoPrism UG](https://www.photoprism.app) في برلين، تشغّله على خادمك الخاص، وتصنّف نماذج الذكاء الاصطناعي المدمجة فيه الصور وتتعرف على الوجوه. نسخة Community مجانية ومفتوحة المصدر، وتضيف الاشتراكات المدفوعة الخرائط وميزات أخرى. تستند هذه المراجعة إلى موقع المشروع ووثائقه وسياسة الخصوصية ومستودع GitHub، التي اطّلعنا عليها في 24 أكتوبر 2026؛ ولم تجرّب PromptQuorum البرنامج عمليًا.',
    metaDescription:
      'مراجعة PhotoPrism: مكتبة صور ذاتية الاستضافة بتصنيف بالذكاء الاصطناعي وتعرّف على الوجوه. نسخة Community مجانية وتُثبَّت عبر Docker؛ دون اختبار.',
    twitterDescription:
      'مراجعة PhotoPrism: مكتبة صور ذاتية الاستضافة بتصنيف محلي بالذكاء الاصطناعي وتعرّف على الوجوه. نسخة Community مجانية، وما تؤكده المصادر وما لا تؤكده.',
    audience:
      'من يستضيفون خدماتهم ذاتيًا والمصورون الراغبون في مكتبة صور خاصة قابلة للبحث على عتادهم، ويحتاجون إلى معرفة ما تؤكده المصادر وما يكتفي المشروع بادعائه وكم يكلّف.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة PhotoPrism',
    targetKeywords: [
      'مراجعة photoprism',
      'photoprism إدارة الصور بالذكاء الاصطناعي',
      'مكتبة صور ذاتية الاستضافة',
      'photoprism التعرف على الوجوه',
      'تثبيت photoprism عبر docker',
      'بديل صور جوجل ذاتي الاستضافة',
      'photoprism الخصوصية',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi', 'NVIDIA RTX 4060'],
    leadAnswerBlock:
      '**PhotoPrism (الإصدار المستقر 261007-65faaae5d) مكتبة صور وفيديو مفتوحة المصدر تثبّتها على خادمك الخاص عبر Docker، ويعمل التصنيف بالذكاء الاصطناعي والتعرف على الوجوه هناك افتراضيًا.** نسخة Community مجانية، ويتطلب الإعداد استخدام الطرفية. كل ما يرد هنا مصدره موقع المشروع ووثائقه ومستودعه.',
    quickAnswerTop: {
      ar: {
        question: 'هل يرسل PhotoPrism صوري إلى خدمة ذكاء اصطناعي سحابية؟',
        answer:
          'ليس افتراضيًا بحسب المشروع: النماذج المدمجة للتصنيف والوجوه واكتشاف المحتوى للبالغين تعمل على خادمك الخاص. لا تغادر الصور الخادم إلا إذا فعّلت محرك OpenAI الاختياري، أما استعلامات المواقع وخرائط العالم فتتصل بخدمات خارجية (راجع «تدفق البيانات والخصوصية»).',
        bullets: [
          'يجمع البحث بين مرشّحات مثل التصنيفات والموقع واللون والجودة.',
          'يمكن تصفح ملفات RAW وصور Live Photos وصيغ الفيديو الشائعة دون تحويل يدوي.',
          'تُقرأ البيانات الوصفية من Exif وXMP ومصادر مثل ملفات تصدير صور جوجل.',
          'يخدم تطبيق ويب قابل للتثبيت الهواتف، وتفتح عملاء WebDAV المكتبة كأنها قرص.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو PhotoPrism؟', anchor: 'what-is-photoprism' },
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
            text: 'PhotoPrism مكتبة صور وفيديو مفتوحة المصدر ومستضافة ذاتيًا، تصنّف الصور وتتعرف على الوجوه بنماذج ذكاء اصطناعي تعمل على خادمك الخاص.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته على حاسوب أو جهاز NAS تتحكم به، وتحدد له مكان صورك، ثم تتصفحها وتبحث فيها من أي متصفح دون تسليمها إلى خدمة صور سحابية.',
          },
        ],
        items: [
          'الصيانة: أحدث إصدار مستقر صدر في 7 أكتوبر 2026، وتلقّى المستودع التزامات جديدة في 24 أكتوبر 2026، فلا ينطبق تحذير المشروع المتوقف.',
          'الإعداد: تثبيت خادم قائم على Docker مع ملف إعداد يلزم تعديله؛ ولا يقدّم المشروع مثبّتًا لسطح المكتب ولا تطبيقًا في المتاجر.',
          'الذكاء الاصطناعي: تصنّف النماذج المدمجة الصور وتتعرف على الوجوه على خادمك؛ أما التعليقات النصية فتحتاج إلى محرك Ollama أو OpenAI اختياري.',
          'التكلفة: نسخة Community مجانية وبترخيص AGPL، والاشتراكات المدفوعة اختيارية.',
          'الوصول: الواجهة متصفح وتطبيق ويب قابل للتثبيت؛ وتطبيقات الهاتف المذكورة في الوثائق من مطوّرين آخرين.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع المشروع ووثائقه وسياسة الخصوصية ومستودع GitHub، التي اطّلعنا عليها في 24 أكتوبر 2026. لم تثبّت PromptQuorum برنامج PhotoPrism، لذا لا نقيّم دقة التصنيف ولا جودة التعرف على الوجوه ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoprism',
        title: 'ما هو PhotoPrism؟',
        content: [
          '**PhotoPrism تطبيق ويب مستضاف ذاتيًا لتصفح الصور والفيديو وتنظيمها والبحث فيها على خادم تتحكم به.** يصفه موقعه بأنه «تطبيق مدعوم بالذكاء الاصطناعي يضع الخصوصية أولًا»؛ والشيفرة على GitHub بترخيص AGPL، وتقول الشركة إنها ممولة ذاتيًا ومستقلة.',
          'نسخة Community المجانية هي الإصدار الكامل المفتوح المصدر. وتفتح الاشتراكات المدفوعة وتراخيص الفرق ميزات إضافية، ويذكر المشروع استضافة مُدارة بديلًا عن تشغيل الخادم بنفسك.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**PhotoPrism خادم تثبّته بنفسك؛ الطريقة الموصى بها هي Docker Compose، ولا يوجد مثبّت بنقرة واحدة لسطح المكتب أو الهاتف.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'Docker Compose', 'مصدر الحصول عليه': '[دليل الإعداد](https://docs.photoprism.app/getting-started/docker-compose/): نزّل ملف الإعداد وعدّله ونفّذ أمرًا واحدًا' },
          { 'الخيار': 'مساعد Windows', 'مصدر الحصول عليه': 'يجلب curl.exe وinstall.bat الإعدادات ويشغّلان الخادم بحسب الدليل نفسه' },
          { 'الخيار': 'حزم Linux', 'مصدر الحصول عليه': '[حزم tar.gz](https://dl.photoprism.app/pkg/linux/README.html) للمستخدمين ذوي الخبرة؛ إعداد يدوي' },
          { 'الخيار': 'استضافة مُدارة', 'مصدر الحصول عليه': 'PikaPods بدءًا من 6.50 دولارًا شهريًا بحسب صفحة الأسعار' },
          { 'الخيار': 'نسخة Community', 'مصدر الحصول عليه': 'مجانية، AGPL-3.0، ذاتية الاستضافة؛ تخزين ونُسخ بلا حدود' },
          { 'الخيار': 'الاشتراكات', 'مصدر الحصول عليه': 'Essentials بـ 2.00 € وPlus بدءًا من 6.00 € شهريًا، كما تظهر باليورو في [صفحة الأسعار](https://www.photoprism.app/editions/)' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[photoprism.app](https://www.photoprism.app)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[photoprism.app/privacy](https://www.photoprism.app/privacy/)' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/photoprism/photoprism](https://github.com/photoprism/photoprism)' },
          { 'الخيار': 'عرض تجريبي عام', 'مصدر الحصول عليه': '[try.photoprism.app](https://try.photoprism.app/)؛ يطلب المشروع عدم رفع صور خاصة' },
        ],
        note: 'الإصدار الذي راجعناه: البناء المستقر 261007-65faaae5d، الذي نُشر في 7 أكتوبر 2026 بحسب إصدار GitHub، مع التزامات في فرع التطوير حتى 24 أكتوبر 2026. يتضمن الإصدار ملفات tar.gz لنظام Linux فقط (amd64 وarm64)، ويوجّه المشروع معظم المستخدمين إلى صورة Docker. وتذكر ملاحظات الإصدار أيضًا نسخة معاينة للتطوير، وهي ليست الإصدار الذي راجعناه. الأسعار هي الأرقام المعروضة في صفحة الأسعار؛ والاستضافة المُدارة مسعّرة بالدولار الأمريكي.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**تطلب الوثائق نواتين على الأقل للمعالج و3 GB من الذاكرة ونظام تشغيل 64 بت، إضافة إلى مساحة تبديل وتخزين SSD للمكتبات الكبيرة.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'الخادم', 'ما تقوله المصادر': 'نواتان و3 GB ذاكرة كحد أدنى؛ ويُفضّل أن تساوي الذاكرة بالـ GB عدد النوى' },
          { 'البند': 'مساحة التبديل', 'ما تقوله المصادر': 'يُوصى بما لا يقل عن 4 GB؛ وقد تحتاج ملفات RAW والصور البانورامية إلى أكثر' },
          { 'البند': 'بيئة التشغيل', 'ما تقوله المصادر': 'Docker أو Podman على Linux أو macOS أو Windows؛ صور amd64 وARM64 بما فيها Raspberry Pi' },
          { 'البند': 'قاعدة البيانات', 'ما تقوله المصادر': 'SQLite أو MariaDB 10.5.12+؛ وتعدّ الوثائق SQLite خيارًا ضعيفًا عندما يهم الأداء' },
          { 'البند': 'وحدة GPU', 'ما تقوله المصادر': 'اختيارية؛ يمكن لبطاقات NVIDIA تشغيل النماذج المدمجة بصورة cuda منفصلة' },
          { 'البند': 'الإنترنت', 'ما تقوله المصادر': 'مطلوب للترميز الجغرافي العكسي وخرائط العالم؛ وتطلب الوثائق السماح بواجهة الترميز الجغرافي في جدران الحماية' },
          { 'البند': 'المتصفح', 'ما تقوله المصادر': 'متصفح حديث؛ وتحتاج الخرائط إلى WebGL 2' },
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
            title: 'ثبّت Docker',
            whyItMatters: 'ثبّت Docker (أو Podman) على الجهاز الذي سيحتفظ بصورك؛ ويغطي الدليل Linux وmacOS وWindows.',
          },
          {
            title: 'نزّل ملف compose وعدّله',
            whyItMatters: 'خذ ملف compose.yaml الخاص بمنصتك من دليل الإعداد، ثم حدّد كلمة مرور للمدير والمجلدات التي تحتوي صورك.',
          },
          {
            title: 'شغّل الخادم',
            whyItMatters: 'نفّذ docker compose up -d في ذلك المجلد، وافتح عنوان الخادم على المنفذ 2342 في المتصفح وسجّل الدخول باسم admin.',
          },
          {
            title: 'افهرس مكتبتك',
            whyItMatters: 'أضف صورك أو استوردها واترك أول فهرسة تعمل؛ ويشرح دليل First Steps الخاص بالمشروع الإعدادات المتحكمة بها.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل ما يلي مصدره موقع المشروع أو ملف README أو الوثائق؛ ولم تختبر PromptQuorum أيًّا منه.**',
        ],
        items: [
          '**البحث والتصفح.** تغطي المرشّحات القابلة للدمج التصنيفات والموقع والدقة واللون والجودة؛ وتشمل العروض الأشخاص والأماكن واللحظات والتقويم والتصنيفات والمجلدات.',
          '**الصيغ.** تُفهرس صور RAW وLive Photos وMotion Photos ومقاطع الفيديو والصور البانورامية 360°، وتُكتشف النسخ المكررة.',
          '**البيانات الوصفية.** يمكن قراءة بيانات Exif وXMP وExifTool JSON وصور جوجل ودمجها.',
          '**الوصول.** تطبيق ويب قابل للتثبيت للهواتف، ووصول WebDAV من مستكشف Windows أو Finder، وتسجيل دخول موحّد عبر OpenID Connect.',
        ],
        note: 'بعض الميزات تعتمد على النسخة: يصنّف جدول الأسعار أدوار المستخدمين الإضافية وخرائط 3D المتجهة والأقمار الاصطناعية وواجهة إدارة المستخدمين ضمن المدفوع، وتحدّ نسخة Community من معدل الترميز الجغرافي العكسي.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'ميزات الذكاء الاصطناعي وأين تعمل',
        content: [
          '**تعمل النماذج المدمجة على خادمك الخاص عبر ONNX؛ ومحرك OpenAI الاختياري وحده يرسل الصور إلى خدمة سحابية.**',
        ],
        items: [
          '**التصنيف واكتشاف المحتوى للبالغين.** يصنّف نموذج ONNX مدمج الصور ويشير نموذج ثانٍ إلى محتوى NSFW؛ وقد استبدل إصدار 7 أكتوبر 2026 نماذج TensorFlow السابقة ولم يعد يدعم نماذج TensorFlow المخصصة.',
          '**الوجوه.** يحدد YuNet مواضع الوجوه ويحوّل SFace كل وجه إلى متجه للتجميع؛ وتحتفظ المكتبات الأقدم بنموذج FaceNet إلى حين ترحيلها، ويذكر الإصدار أن المجموعات الجديدة تُسمّى الآن تلقائيًا حيثما أمكن.',
          '**التعليقات النصية والتصنيفات الأغنى.** اختياريًا: يمكن لخادم Ollama تشغّله بنفسك، أو واجهة OpenAI السحابية بمفتاحك الخاص، توليد التعليقات والتصنيفات.',
          '**وحدة GPU.** يمكن للنماذج المدمجة استخدام بطاقة NVIDIA؛ وفي توليد التصنيفات عبر Ollama يذكر المشروع من 1 إلى 4 ثوانٍ للصورة على RTX 4060، ومن 10 ثوانٍ إلى أكثر من دقيقة دون GPU.',
          '**الإيقاف.** ضبط نموذج التصنيفات على «none» يعطّل توليد التصنيفات، بينما يُوقَف اكتشاف الوجوه بإعداد منفصل.',
        ],
        note: 'هذه الأرقام والسلوكيات من تصريحات المشروع نفسه؛ ولم تقِس PromptQuorum زمن أي نموذج ولم تختبره.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول سياسة الخصوصية، التي حُدّثت آخر مرة في 19 أغسطس 2026، إن البيانات التي لا تغادر شبكتك الخاصة لا يمكن لأحد جمعها، بمن فيهم الشركة.** وفي الخادم المستضاف ذاتيًا يعني ذلك أن الصور والألبومات ونتائج الذكاء الاصطناعي تبقى على عتادك ما لم ترسلها إلى مكان آخر، مثلًا عبر محرك OpenAI.',
          'بحسب سياسة الخصوصية والوثائق، تصل ثلاثة أنواع من حركة البيانات إلى خوادم خارجية. يجلب الترميز الجغرافي العكسي وخرائط العالم التفاعلية بيانات من PhotoPrism ومن MapTiler AG في سويسرا، ويحمل طلب الترميز الجغرافي الموقع المستعلَم عنه وعنوان IP العام لخادمك. وتتصل النُّسخ التي تملك مفتاح اشتراك بالمشروع لتجديده أيضًا، فترسل معرّف نسخة عشوائيًا وإصدار البرنامج ونوع نظام التشغيل ومعمارية المعالج. وأخيرًا، يجب أن يقع أي خادم متاح من الإنترنت خلف وكيل عكسي بـ HTTPS، وإلا انتقلت كلمات المرور والملفات بنص صريح.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من المشروع وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة ولم تراجع الشيفرة المصدرية بما يتجاوز بيانات المستودع الوصفية. تسمّي السياسة PhotoPrism UG مشغّلةً لخدماتها وتربط ببيان امتثال لنظام GDPR.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يستضيفون على خادم Docker أو جهاز NAS** ويريدون بديلًا خاصًا لخدمات الصور السحابية.',
          '**المصورون ذوو مكتبات RAW والفيديو الكبيرة** الذين يبحثون بالتصنيف والمكان والوجه.',
          '**الأسر التي تريد مكتبة مشتركة واحدة** يمكن الوصول إليها من متصفح كل جهاز.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الذكاء الاصطناعي.** لم تختبر PromptQuorum دقة التصنيف ولا تجميع الوجوه ولا صلة نتائج البحث؛ وأرقام السرعة أعلاه من المشروع.',
          '**تجربة الهاتف.** يقدّم المشروع تطبيق ويب فقط؛ ولم نتحقق من جودة تطبيقات المطوّرين الآخرين المذكورة في وثائقه ولا من شروطها.',
          '**حدود النسخ.** قد يتغير ما تحجبه الاشتراكات المدفوعة من ميزات بين الإصدارات؛ راجع جدول الأسعار قبل الاعتماد على الخرائط أو أدوار المستخدمين الإضافية.',
          '**تفاصيل الترخيص.** يعرض كاشف GitHub «Other»، بينما يذكر README والوثائق ترخيص AGPL-3.0 لنسخة Community؛ ولم تُراجَع شروط النسخ المدفوعة.',
          '**استهلاك الموارد.** تقول الوثائق إن فهرسة مكتبات RAW الكبيرة قد تتجاوز الحد الأدنى للذاكرة؛ ولم يُقَس الاستهلاك الفعلي.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'يضم الدليل مديرًا آخر لمكتبات الصور له مراجعة، إضافة إلى تطبيق مستضاف ذاتيًا يصنّف نوعًا مختلفًا من المحتوى.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[PixlStash](/ar/power-local-llm/pixlstash-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / GPL-3.0', 'الفرق الأبرز': 'تطبيق مكتبي بتصنيف محلي وبحث بالوجوه والمعنى؛ أما PhotoPrism فخادم يُستخدم عبر المتصفح' },
          { 'التطبيق': '[Karakeep](/ar/power-local-llm/karakeep-review)', 'المنصات': 'ويب وiOS وAndroid', 'السعر / الرخصة': 'مجاني / AGPL-3.0', 'الفرق الأبرز': 'أداة للإشارات المرجعية والملاحظات بوسوم ذكاء اصطناعي، وليست مكتبة صور' },
        ],
        note: 'لا يوجد خادم مكتبة صور آخر لديه مراجعة من PromptQuorum حتى الآن، لذا فهذه أقرب الأدوات المدرجة؛ تحقق من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل لدى PhotoPrism تطبيق لـ iPhone أو Android؟',
            a: 'يقدّم المشروع نفسه تطبيق ويب قابلًا للتثبيت؛ وتذكر وثائقه تطبيقات من مطوّرين آخرين، منها PhotoSync للرفع في الخلفية من الهواتف.',
          },
          {
            q: 'كيف أحدّث PhotoPrism؟',
            a: 'مع Docker Compose تسحب الصورة الجديدة وتعيد تشغيل الخدمات؛ وتغيير وسم الصورة من latest إلى preview يتيح الوصول المبكر لبنى التطوير. وقد تتضمن ملاحظات الإصدار خطوات ترقية، مثل إعادة تشغيل التصنيف بعد تغيير الذكاء الاصطناعي في أكتوبر 2026.',
          },
          {
            q: 'هل يمكنني الانتقال من صور جوجل؟',
            a: 'يمكن دمج البيانات الوصفية من صور جوجل، وتتضمن الوثائق دليلًا للترحيل من السحابة؛ ولم تجرّب PromptQuorum أي ترحيل.',
          },
          {
            q: 'أين يحفظ PhotoPrism ملفاتي؟',
            a: 'يعرّف ملف الإعداد النموذجي ثلاثة مجلدات: originals لصورك، وstorage للملفات الداخلية مثل الإعدادات، وimport للملفات المراد إضافتها. ويشغّل أيضًا حاوية MariaDB لقاعدة البيانات.',
          },
          {
            q: 'هل توجد نسخة للشركات؟',
            a: 'نعم: تذكر صفحة Teams تراخيص بدءًا من 79 € شهريًا لـ Starter، وبدءًا من 219 € لـ Business، وبدءًا من 1,499 € لـ Enterprise، مع مستويات دعم تختلف بحسب الفئة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'PhotoPrism وسيلة قديمة العهد ومحدَّثة باستمرار للاحتفاظ بمكتبة صور قابلة للبحث على عتاد تتحكم به، مع تعرّف على الوجوه وتصنيف بالذكاء الاصطناعي يعملان افتراضيًا على خادمك. في المقابل، يتطلب الإعداد Docker وملف إعداد، ولا يذكر المشروع في وثائقه تطبيقًا أصليًا لسطح المكتب أو الهاتف، وتتصل استعلامات المواقع والخرائط بخوادم خارجية، ولم نتمكن هنا من التحقق من أي من ادعاءاته بشأن جودة الذكاء الاصطناعي أو سرعته. يناسب من يشغّلون خدمات في المنزل أو على جهاز NAS ويمكنهم تجربة نسخة Community المجانية أولًا؛ ومن يريد تطبيقًا بنقرتين فليبحث في مكان آخر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع PhotoPrism](https://www.photoprism.app) — نظرة عامة على المنتج والأسعار والنسخ، اطُّلع عليه في 24 أكتوبر 2026.',
          '[وثائق PhotoPrism](https://docs.photoprism.app) — الإعداد ونماذج الذكاء الاصطناعي وملاحظات الإصدار وتطبيقات الهاتف، اطُّلع عليها في 24 أكتوبر 2026.',
          '[سياسة خصوصية PhotoPrism](https://www.photoprism.app/privacy/) — جمع البيانات والاستضافة الذاتية، حُدّثت في 19 أغسطس 2026.',
          '[PhotoPrism على GitHub](https://github.com/photoprism/photoprism) — README والإصدارات ونشاط الالتزامات، اطُّلع عليها في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PixlStash](/ar/power-local-llm/pixlstash-review) — مدير مكتبات صور مكتبي بتصنيف محلي بالذكاء الاصطناعي.',
          '[مراجعة Karakeep](/ar/power-local-llm/karakeep-review) — تطبيق مستضاف ذاتيًا بوسوم ذكاء اصطناعي للإشارات المرجعية والملاحظات.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoprism-review-hero-zh.webp',
    title: 'PhotoPrism 评测：自托管 AI 照片库',
    seoTitle: 'PhotoPrism 评测：自托管 AI 照片库，Community 版免费',
    intro:
      'PhotoPrism 是柏林公司 [PhotoPrism UG](https://www.photoprism.app) 推出的自托管照片和视频管理软件，运行在你自己的服务器上，内置 AI 模型可为图片打标签并识别人脸。Community 版免费且开源，付费会员可增加地图等功能。本评测基于该项目的网站、文档、隐私政策和 GitHub 仓库（2026 年 10 月 24 日查阅）；PromptQuorum 没有亲自实测该软件。',
    metaDescription:
      'PhotoPrism 评测：内置 AI 标签与人脸识别的自托管开源照片库，Community 版免费，通过 Docker 安装，我们未实测，并说明来源已证实与未证实的内容。',
    twitterDescription:
      'PhotoPrism 评测：在本地用 AI 打标签并识别人脸的自托管照片库。Community 版免费，来源已证实与未证实的内容。',
    audience:
      '想在自己的硬件上搭建私密、可搜索照片库的自托管用户和摄影师，他们需要了解哪些内容有来源证实、哪些只是项目自己的说法，以及费用。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PhotoPrism 评测',
    targetKeywords: [
      'photoprism 评测',
      'photoprism ai 照片管理',
      '自托管照片库',
      'photoprism 人脸识别',
      'photoprism docker 安装',
      'google 相册 自托管 替代',
      'photoprism 隐私',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi', 'NVIDIA RTX 4060'],
    leadAnswerBlock:
      '**PhotoPrism（稳定版构建 261007-65faaae5d）是一个开源照片和视频库，用 Docker 安装在你自己的服务器上，AI 标签和人脸识别默认就在该服务器上运行。**Community 版免费，但安装需要使用终端。文中所有陈述均来自项目自己的网站、文档和仓库。',
    quickAnswerTop: {
      zh: {
        question: 'PhotoPrism 会把我的照片发送到云端 AI 服务吗？',
        answer:
          '据项目介绍，默认不会：用于标签、人脸和成人内容检测的内置模型都在你自己的服务器上运行。只有在你配置了可选的 OpenAI 引擎时，图片才会离开服务器；位置查询和世界地图则会连接外部服务（见“数据流向与隐私”）。',
        bullets: [
          '搜索可组合标签、位置、颜色和画质等筛选条件。',
          'RAW 文件、Live Photos 和常见视频格式无需手动转换即可浏览。',
          '元数据可从 Exif、XMP 以及 Google 相册导出等来源读取。',
          '可安装的网页应用适配手机，WebDAV 客户端可以像打开磁盘一样打开照片库。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'PhotoPrism 是什么？', anchor: 'what-is-photoprism' },
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
            text: 'PhotoPrism 是开源、自托管的照片和视频库，用运行在你自己服务器上的 AI 模型为图片打标签并识别人脸。',
          },
          {
            type: 'plain-terms',
            text: '你把它安装在自己掌控的电脑或 NAS 上，指定图片所在位置，就能在任何浏览器中浏览和搜索，而无需把照片交给云端照片服务。',
          },
        ],
        items: [
          '维护情况：最新稳定版发布于 2026 年 10 月 7 日，仓库在 2026 年 10 月 24 日仍有新提交，因此不适用项目停更警告。',
          '安装：基于 Docker 的服务器部署，需要编辑配置文件；项目没有提供桌面安装程序或应用商店版本。',
          'AI：内置模型在你的服务器上为照片打标签并识别人脸；生成图片说明需要可选的 Ollama 或 OpenAI 引擎。',
          '费用：Community 版免费，采用 AGPL 许可证，付费会员为可选项。',
          '使用方式：界面是浏览器和可安装的网页应用；文档列出的手机应用来自其他开发者。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于项目网站、文档、隐私政策和 GitHub 仓库（2026 年 10 月 24 日查阅）。PromptQuorum 没有安装过 PhotoPrism，因此不评价标签准确度、人脸识别质量和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-photoprism',
        title: 'PhotoPrism 是什么？',
        content: [
          '**PhotoPrism 是一个自托管的网页应用，用于在你掌控的服务器上浏览、整理和搜索照片与视频。**其网站称它是“由 AI 驱动、以隐私为先的应用”；代码以 AGPL 许可证发布在 GitHub 上，公司表示自己自筹资金并保持独立。',
          '免费的 Community 版就是完整的开源版本。付费会员和团队许可证可解锁更多功能，项目还列出托管服务，作为自己运行服务器之外的选择。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**PhotoPrism 是需要你自己安装的服务器，推荐方式是 Docker Compose，没有面向桌面或手机的一键安装程序。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'Docker Compose', '获取方式': '[安装指南](https://docs.photoprism.app/getting-started/docker-compose/)：下载配置文件、修改后执行一条命令' },
          { '选项': 'Windows 辅助脚本', '获取方式': '按同一指南，curl.exe 和 install.bat 会获取配置并启动服务器' },
          { '选项': 'Linux 安装包', '获取方式': '面向有经验用户的 [tar.gz 包](https://dl.photoprism.app/pkg/linux/README.html)，需手动配置' },
          { '选项': '托管服务', '获取方式': '据价格页面，PikaPods 每月 $6.50 起' },
          { '选项': 'Community 版', '获取方式': '免费，AGPL-3.0，自托管；存储和实例数量不限' },
          { '选项': '会员', '获取方式': 'Essentials 每月 €2.00，Plus 每月 €6.00 起，[价格页面](https://www.photoprism.app/editions/)以欧元显示' },
          { '选项': '官网', '获取方式': '[photoprism.app](https://www.photoprism.app)' },
          { '选项': '隐私政策', '获取方式': '[photoprism.app/privacy](https://www.photoprism.app/privacy/)' },
          { '选项': '源代码', '获取方式': '[github.com/photoprism/photoprism](https://github.com/photoprism/photoprism)' },
          { '选项': '公开演示', '获取方式': '[try.photoprism.app](https://try.photoprism.app/)；项目请求不要上传私人图片' },
        ],
        note: '评测版本：稳定版构建 261007-65faaae5d，据 GitHub 发布页面于 2026 年 10 月 7 日发布，开发分支到 2026 年 10 月 24 日仍有提交。该发布仅提供 Linux（amd64 和 arm64）的 tar.gz 文件，项目引导大多数用户使用其 Docker 镜像。发布说明中还列有开发预览版，它不是本评测的版本。价格为价格页面所示数字；托管服务以美元标价。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**文档要求至少 2 个 CPU 核心、3 GB 内存和 64 位操作系统，大型照片库还需要交换空间和 SSD 存储。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '服务器', '来源说明': '至少 2 核和 3 GB 内存；内存（GB）应与核心数相当' },
          { '项目': '交换空间', '来源说明': '建议至少 4 GB；RAW 文件和全景图可能需要更多' },
          { '项目': '运行环境', '来源说明': 'Linux、macOS 或 Windows 上的 Docker 或 Podman；提供 amd64 和 ARM64 镜像，包括树莓派' },
          { '项目': '数据库', '来源说明': 'SQLite 或 MariaDB 10.5.12+；文档称在意性能时 SQLite 不太合适' },
          { '项目': 'GPU', '来源说明': '可选；NVIDIA 显卡可运行内置模型，需使用单独的 cuda 镜像' },
          { '项目': '互联网', '来源说明': '反向地理编码和世界地图需要联网；文档要求在防火墙中放行地理编码 API' },
          { '项目': '浏览器', '来源说明': '较新的浏览器；地图需要 WebGL 2' },
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
            title: '安装 Docker',
            whyItMatters: '在存放照片的机器上安装 Docker（或 Podman）；指南涵盖 Linux、macOS 和 Windows。',
          },
          {
            title: '下载并编辑 compose 文件',
            whyItMatters: '从安装指南获取适合你平台的 compose.yaml，设置管理员密码和存放图片的文件夹。',
          },
          {
            title: '启动服务器',
            whyItMatters: '在该文件夹中运行 docker compose up -d，在浏览器中打开服务器地址的 2342 端口，并以 admin 登录。',
          },
          {
            title: '为照片库建立索引',
            whyItMatters: '添加或导入图片，让首次索引运行；项目的 First Steps 教程介绍了相关设置。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下各项均来自项目的网站、README 或文档；PromptQuorum 均未测试。**',
        ],
        items: [
          '**搜索与浏览。**可组合的筛选条件涵盖标签、位置、分辨率、颜色和画质；视图包括人物、地点、时刻、日历、标签和文件夹。',
          '**格式。**可索引 RAW 图像、Live Photos、Motion Photos、视频和 360° 全景图，并检测重复项。',
          '**元数据。**可读取并合并 Exif、XMP、ExifTool JSON 和 Google 相册的数据。',
          '**访问。**面向手机的可安装网页应用、通过 Windows 资源管理器或 Finder 的 WebDAV 访问，以及 OpenID Connect 单点登录。',
        ],
        note: '部分功能取决于版本：价格表把额外的用户角色、3D 矢量和卫星地图以及用户管理界面列为付费项，Community 版的反向地理编码有速率限制。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 功能及运行位置',
        content: [
          '**内置模型通过 ONNX 在你自己的服务器上运行；只有可选的 OpenAI 引擎会把图片发送到云服务。**',
        ],
        items: [
          '**标签与成人内容检测。**内置 ONNX 模型为图片打标签，另一个模型标记 NSFW 内容；2026 年 10 月 7 日的版本取代了此前的 TensorFlow 模型，不再支持自定义 TensorFlow 模型。',
          '**人脸。**YuNet 定位人脸，SFace 把每张脸转换为用于分组的向量；较早创建的照片库在迁移前仍使用 FaceNet 模型，该版本称新的人脸分组现在会尽可能自动命名。',
          '**图片说明与更丰富的标签。**可选：你自己运行的 Ollama 服务器，或使用自己密钥的云端 OpenAI API，可以生成图片说明和标签。',
          '**GPU。**内置模型可以使用 NVIDIA 显卡；对于 Ollama 生成标签，项目称在 RTX 4060 上每张图片需 1 至 4 秒，没有 GPU 时需 10 秒到一分钟以上。',
          '**关闭。**把标签模型设置为“none”即可停用标签生成，人脸检测则通过单独的设置关闭。',
        ],
        note: '这些数字和行为均为项目自己的说法；PromptQuorum 没有对任何模型计时或测试。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**隐私政策（最后更新于 2026 年 8 月 19 日）称，从未离开你私有网络的数据不可能被任何人收集，包括该公司。**对自托管服务器而言，这意味着照片、相册和 AI 结果会留在你的硬件上，除非你把它们发往别处，例如通过 OpenAI 引擎。',
          '据隐私政策和文档，有三类流量会到达外部服务器。反向地理编码和交互式世界地图会从 PhotoPrism 和瑞士的 MapTiler AG 获取数据，地理编码请求包含被查询的位置以及你服务器的公网 IP 地址。持有会员密钥的实例还会联系项目方以续期，并发送随机的实例 ID、软件版本、操作系统类型和 CPU 架构。最后，可从互联网访问的服务器必须置于 HTTPS 反向代理之后，否则密码和文件会以明文传输。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是项目的声明，不是审计结果。PromptQuorum 没有检查网络流量，也没有审阅仓库元数据之外的源代码。该政策把 PhotoPrism UG 列为其自有服务的运营方，并链接了一份 GDPR 合规声明。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**使用 Docker 服务器或 NAS 的自托管用户**，想要云端照片服务的私密替代方案。',
          '**拥有大量 RAW 和视频的摄影师**，需要按标签、地点和人脸搜索。',
          '**想共用一个照片库的家庭**，希望在每台设备上都能用浏览器访问。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**AI 质量。**PromptQuorum 没有测试标签准确度、人脸分组或搜索相关性；上文的速度数字来自项目方。',
          '**手机体验。**项目只提供网页应用；其文档列出的其他开发者的手机应用，其质量和条款未经核实。',
          '**版本功能边界。**哪些功能属于付费会员可能随版本变化；依赖地图或额外用户角色之前，请先查看价格表。',
          '**许可证细节。**GitHub 的检测结果为“Other”，而 README 和文档称 Community 版采用 AGPL-3.0；付费版本的条款未经审阅。',
          '**资源占用。**文档称为大型 RAW 库建立索引时内存可能超过最低要求；实际占用未经测量。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中还有一款带评测的图片库管理工具，以及一款为另一类内容打标签的自托管应用。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[PixlStash](/zh/power-local-llm/pixlstash-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / GPL-3.0', '主要区别': '带本地打标签、人脸与语义搜索的桌面应用；PhotoPrism 是通过浏览器使用的服务器' },
          { '应用': '[Karakeep](/zh/power-local-llm/karakeep-review)', '平台': 'Web、iOS、Android', '价格 / 许可证': '免费 / AGPL-3.0', '主要区别': '带 AI 标签的书签和笔记工具，不是照片库' },
        ],
        note: '目前没有其他照片库服务器有 PromptQuorum 评测，因此这些是目录中最接近的工具；请在各应用自己的页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'PhotoPrism 有 iPhone 或 Android 应用吗？',
            a: '项目自己提供的是可安装的网页应用；其文档列出了其他开发者的应用，其中包括用于手机后台上传的 PhotoSync。',
          },
          {
            q: '如何更新 PhotoPrism？',
            a: '使用 Docker Compose 时拉取新镜像并重启服务；把镜像标签从 latest 改为 preview 可抢先使用开发版构建。发布说明可能包含升级步骤，例如 2026 年 10 月 AI 变更后需要重新运行标签。',
          },
          {
            q: '可以从 Google 相册迁移过来吗？',
            a: '来自 Google 相册的元数据可以合并，文档中也有云端迁移指南；PromptQuorum 没有尝试迁移。',
          },
          {
            q: 'PhotoPrism 把我的文件存放在哪里？',
            a: '示例配置定义了三个文件夹：originals 存放你的图片，storage 存放配置等内部文件，import 存放待添加的文件。它还会启动一个 MariaDB 容器作为数据库。',
          },
          {
            q: '有面向企业的版本吗？',
            a: '有：Teams 页面列出的许可证中，Starter 每月 €79 起，Business 每月 €219 起，Enterprise 每月 €1,499 起，各档的支持级别不同。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'PhotoPrism 是一个运营已久且持续更新的方案，可以在你掌控的硬件上保存可搜索的照片库，人脸识别和 AI 标签默认在你自己的服务器上运行。不足之处在于：安装需要 Docker 和配置文件，据文档，项目不提供原生的桌面或手机应用，位置查询和地图会连接外部服务器，而它关于 AI 质量和速度的说法在这里都无法核实。它适合已经在家里或 NAS 上运行各类服务、并能先试用免费 Community 版的人；想要双击即用应用的用户应另寻他选。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[PhotoPrism 官网](https://www.photoprism.app) — 产品概览、价格与版本，2026 年 10 月 24 日查阅。',
          '[PhotoPrism 文档](https://docs.photoprism.app) — 安装、AI 模型、发布说明和移动应用，2026 年 10 月 24 日查阅。',
          '[PhotoPrism 隐私政策](https://www.photoprism.app/privacy/) — 数据收集与自托管说明，最后更新于 2026 年 8 月 19 日。',
          '[GitHub 上的 PhotoPrism](https://github.com/photoprism/photoprism) — README、发布和提交动态，2026 年 10 月 24 日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PixlStash 评测](/zh/power-local-llm/pixlstash-review) — 带本地 AI 打标签的桌面图片库管理工具。',
          '[Karakeep 评测](/zh/power-local-llm/karakeep-review) — 为书签和笔记提供 AI 标签的自托管应用。',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoprism-review-hero-ko.webp',
    title: 'PhotoPrism 리뷰: 셀프 호스팅 AI 사진 라이브러리',
    seoTitle: 'PhotoPrism 리뷰: 셀프 호스팅 AI 사진 라이브러리',
    intro:
      'PhotoPrism은 베를린 기업 [PhotoPrism UG](https://www.photoprism.app)가 만든 셀프 호스팅 사진·동영상 관리 소프트웨어로, 내 서버에서 실행하며 내장 AI 모델이 이미지에 라벨을 붙이고 얼굴을 인식합니다. Community 에디션은 무료 오픈소스이고, 유료 멤버십은 지도 등 기능을 더합니다. 이 리뷰는 프로젝트의 웹사이트, 문서, 개인정보 처리방침, GitHub 저장소(2026년 10월 24일 확인)를 바탕으로 하며, PromptQuorum은 소프트웨어를 직접 테스트하지 않았습니다.',
    metaDescription:
      'PhotoPrism 리뷰: AI 라벨링과 얼굴 인식을 내장한 셀프 호스팅 오픈소스 사진 라이브러리. Community 에디션은 무료이며 Docker로 설치합니다. 직접 테스트하지 않았습니다.',
    twitterDescription:
      'PhotoPrism 리뷰: 로컬 AI로 라벨을 붙이고 얼굴을 인식하는 셀프 호스팅 사진 라이브러리. Community 에디션 무료, 출처가 확인한 내용과 그렇지 않은 내용.',
    audience:
      '자신의 하드웨어에서 비공개로 검색 가능한 사진 라이브러리를 운영하려는 셀프 호스팅 사용자와 사진가 가운데, 출처가 확인한 내용과 프로젝트가 주장만 하는 내용, 비용을 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PhotoPrism 리뷰',
    targetKeywords: [
      'photoprism 리뷰',
      'photoprism ai 사진 관리',
      '셀프 호스팅 사진 라이브러리',
      'photoprism 얼굴 인식',
      'photoprism docker 설치',
      '구글 포토 대안 셀프 호스팅',
      'photoprism 개인정보',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Raspberry Pi', 'NVIDIA RTX 4060'],
    leadAnswerBlock:
      '**PhotoPrism(안정 빌드 261007-65faaae5d)은 Docker로 내 서버에 설치하는 오픈소스 사진·동영상 라이브러리이며, AI 라벨링과 얼굴 인식은 기본적으로 그 서버에서 실행됩니다.** Community 에디션은 무료이고, 설치에는 터미널이 필요합니다. 이 글의 모든 내용은 프로젝트 자체의 웹사이트, 문서, 저장소에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'PhotoPrism은 내 사진을 클라우드 AI 서비스로 보내나요?',
        answer:
          '프로젝트에 따르면 기본적으로는 보내지 않습니다. 라벨, 얼굴, 성인 콘텐츠 감지용 내장 모델은 내 서버에서 실행됩니다. 이미지가 서버를 떠나는 경우는 선택 사항인 OpenAI 엔진을 설정했을 때뿐이며, 위치 조회와 세계 지도는 외부 서비스에 연결됩니다(「데이터 흐름과 개인정보」 참조).',
        bullets: [
          '검색에서는 라벨, 위치, 색상, 품질 같은 필터를 조합할 수 있습니다.',
          'RAW 파일, Live Photos, 일반적인 동영상 형식을 수동 변환 없이 둘러볼 수 있습니다.',
          '메타데이터는 Exif, XMP, 구글 포토 내보내기 같은 출처에서 읽어 옵니다.',
          '설치 가능한 웹 앱이 휴대폰을 지원하고, WebDAV 클라이언트는 라이브러리를 드라이브처럼 열 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'PhotoPrism이란?', anchor: 'what-is-photoprism' },
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
            text: 'PhotoPrism은 내 서버에서 실행되는 AI 모델로 이미지에 라벨을 붙이고 얼굴을 인식하는, 오픈소스 셀프 호스팅 사진·동영상 라이브러리입니다.',
          },
          {
            type: 'plain-terms',
            text: '내가 관리하는 컴퓨터나 NAS에 설치하고 사진이 있는 위치를 지정하면, 클라우드 사진 서비스에 맡기지 않고도 어느 브라우저에서나 둘러보고 검색할 수 있습니다.',
          },
        ],
        items: [
          '유지 관리: 최신 안정 빌드는 2026년 10월 7일 자이고 저장소에는 2026년 10월 24일에도 새 커밋이 있어, 방치된 프로젝트 경고는 해당되지 않습니다.',
          '설치: Docker 기반 서버 설치이며 설정 파일을 편집해야 합니다. 프로젝트는 데스크톱 설치 프로그램이나 앱스토어 앱을 제공하지 않습니다.',
          'AI: 내장 모델이 서버에서 사진에 라벨을 붙이고 얼굴을 인식하며, 캡션에는 선택 사항인 Ollama 또는 OpenAI 엔진이 필요합니다.',
          '비용: Community 에디션은 무료이며 AGPL 라이선스이고, 유료 멤버십은 선택 사항입니다.',
          '이용 방식: 화면은 브라우저와 설치 가능한 웹 앱이며, 문서에 소개된 휴대폰 앱은 다른 개발자가 만든 것입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 24일에 확인한 프로젝트의 웹사이트, 문서, 개인정보 처리방침, GitHub 저장소를 바탕으로 합니다. PromptQuorum은 PhotoPrism을 설치하지 않았으므로 라벨 정확도, 얼굴 인식 품질, 속도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoprism',
        title: 'PhotoPrism이란?',
        content: [
          '**PhotoPrism은 내가 관리하는 서버에서 사진과 동영상을 둘러보고 정리하고 검색하는 셀프 호스팅 웹 애플리케이션입니다.** 웹사이트는 이를 "AI 기반의 프라이버시 우선 앱"이라고 소개하며, 코드는 AGPL로 GitHub에 공개되어 있고, 회사는 자체 자금으로 운영되는 독립 기업이라고 밝힙니다.',
          '무료 Community 에디션이 오픈소스 완전판입니다. 유료 멤버십과 팀 라이선스는 추가 기능을 열어 주며, 프로젝트는 서버를 직접 운영하는 대신 쓸 수 있는 관리형 호스팅도 소개합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**PhotoPrism은 직접 설치하는 서버이며 권장 방법은 Docker Compose입니다. 데스크톱이나 휴대폰용 원클릭 설치 프로그램은 없습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'Docker Compose', '입수 방법': '[설치 가이드](https://docs.photoprism.app/getting-started/docker-compose/): 설정 파일을 내려받아 편집한 뒤 명령 하나 실행' },
          { '옵션': 'Windows 도우미', '입수 방법': '같은 가이드에 따르면 curl.exe와 install.bat가 설정을 받아 서버를 시작' },
          { '옵션': 'Linux 패키지', '입수 방법': '숙련 사용자용 [tar.gz 패키지](https://dl.photoprism.app/pkg/linux/README.html), 수동 설정 필요' },
          { '옵션': '관리형 호스팅', '입수 방법': '가격 페이지 기준 PikaPods 월 $6.50부터' },
          { '옵션': 'Community 에디션', '입수 방법': '무료, AGPL-3.0, 셀프 호스팅, 저장 공간과 인스턴스 무제한' },
          { '옵션': '멤버십', '입수 방법': 'Essentials 월 €2.00, Plus 월 €6.00부터, [가격 페이지](https://www.photoprism.app/editions/)에 유로로 표시' },
          { '옵션': '웹사이트', '입수 방법': '[photoprism.app](https://www.photoprism.app)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[photoprism.app/privacy](https://www.photoprism.app/privacy/)' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/photoprism/photoprism](https://github.com/photoprism/photoprism)' },
          { '옵션': '공개 데모', '입수 방법': '[try.photoprism.app](https://try.photoprism.app/), 프로젝트는 개인 이미지를 올리지 말라고 요청' },
        ],
        note: '확인한 버전: 안정 빌드 261007-65faaae5d로, GitHub 릴리스에 따르면 2026년 10월 7일에 공개되었고 개발 브랜치에는 2026년 10월 24일까지 커밋이 있습니다. 이 릴리스에는 Linux(amd64, arm64)용 tar.gz 파일만 들어 있으며, 프로젝트는 대부분의 사용자에게 Docker 이미지를 안내합니다. 릴리스 노트에는 개발 프리뷰도 올라 있지만 확인한 버전은 아닙니다. 가격은 가격 페이지에 표시된 값이며, 관리형 호스팅은 미국 달러로 표시됩니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**문서는 최소 CPU 2코어, RAM 3 GB, 64비트 운영체제를 요구하며, 큰 라이브러리에는 스왑과 SSD 저장소도 필요합니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '서버', '출처의 설명': '최소 2코어와 RAM 3 GB, RAM(GB)은 코어 수와 비슷해야 함' },
          { '항목': '스왑', '출처의 설명': '최소 4 GB 권장, RAW 파일과 파노라마는 더 필요할 수 있음' },
          { '항목': '실행 환경', '출처의 설명': 'Linux, macOS, Windows의 Docker 또는 Podman, amd64와 ARM64 이미지(Raspberry Pi 포함)' },
          { '항목': '데이터베이스', '출처의 설명': 'SQLite 또는 MariaDB 10.5.12+, 문서는 성능이 중요하면 SQLite가 적합하지 않다고 설명' },
          { '항목': 'GPU', '출처의 설명': '선택 사항, NVIDIA 카드가 내장 모델을 실행할 수 있으며 별도의 cuda 이미지 사용' },
          { '항목': '인터넷', '출처의 설명': '역지오코딩과 세계 지도에 필요, 문서는 방화벽에서 지오코딩 API를 허용하라고 안내' },
          { '항목': '브라우저', '출처의 설명': '최신 브라우저, 지도에는 WebGL 2 필요' },
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
            title: 'Docker 설치',
            whyItMatters: '사진을 보관할 컴퓨터에 Docker(또는 Podman)를 설치합니다. 가이드는 Linux, macOS, Windows를 다룹니다.',
          },
          {
            title: 'compose 파일 내려받아 편집',
            whyItMatters: '설치 가이드에서 내 플랫폼용 compose.yaml을 받아 관리자 비밀번호와 이미지가 있는 폴더를 설정합니다.',
          },
          {
            title: '서버 시작',
            whyItMatters: '해당 폴더에서 docker compose up -d를 실행하고, 브라우저에서 포트 2342의 서버 주소를 열어 admin으로 로그인합니다.',
          },
          {
            title: '라이브러리 인덱싱',
            whyItMatters: '이미지를 추가하거나 가져온 뒤 첫 인덱싱이 실행되도록 둡니다. 관련 설정은 프로젝트의 First Steps 튜토리얼에 설명되어 있습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 프로젝트의 웹사이트, README, 문서에서 가져온 것이며, PromptQuorum은 어느 것도 테스트하지 않았습니다.**',
        ],
        items: [
          '**검색과 둘러보기.** 조합 가능한 필터가 라벨, 위치, 해상도, 색상, 품질을 다루며, 인물, 장소, 순간, 캘린더, 라벨, 폴더 보기를 제공합니다.',
          '**형식.** RAW 이미지, Live Photos, Motion Photos, 동영상, 360° 파노라마를 인덱싱하고 중복도 감지합니다.',
          '**메타데이터.** Exif, XMP, ExifTool JSON, 구글 포토 데이터를 읽어 병합할 수 있습니다.',
          '**접근.** 휴대폰용 설치 가능한 웹 앱, Windows 탐색기나 Finder에서의 WebDAV 접근, OpenID Connect 싱글 사인온을 지원합니다.',
        ],
        note: '일부 기능은 에디션에 따라 달라집니다. 가격표는 추가 사용자 역할, 3D 벡터 및 위성 지도, 사용자 관리 화면을 유료로 분류하며, Community 에디션의 역지오코딩에는 요청 속도 제한이 있습니다.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 기능과 실행 위치',
        content: [
          '**내장 모델은 ONNX를 통해 내 서버에서 실행되며, 이미지를 클라우드 서비스로 보내는 것은 선택 사항인 OpenAI 엔진뿐입니다.**',
        ],
        items: [
          '**라벨과 성인 콘텐츠 감지.** 내장 ONNX 모델이 이미지에 라벨을 붙이고 다른 모델이 NSFW 콘텐츠를 표시합니다. 2026년 10월 7일 릴리스는 이전 TensorFlow 모델을 대체했고 사용자 지정 TensorFlow 모델은 더 이상 지원하지 않습니다.',
          '**얼굴.** YuNet이 얼굴을 찾고 SFace가 각 얼굴을 그룹화용 벡터로 바꿉니다. 이전에 만든 라이브러리는 마이그레이션 전까지 FaceNet 모델을 유지하며, 릴리스에 따르면 새 클러스터는 가능한 경우 자동으로 이름이 붙습니다.',
          '**캡션과 풍부한 라벨.** 선택 사항으로, 직접 운영하는 Ollama 서버나 내 키를 쓰는 클라우드의 OpenAI API로 캡션과 라벨을 생성할 수 있습니다.',
          '**GPU.** 내장 모델은 NVIDIA 카드를 쓸 수 있습니다. Ollama 라벨 생성에 대해 프로젝트는 RTX 4060에서 이미지당 1~4초, GPU가 없으면 10초에서 1분 이상이라고 밝힙니다.',
          '**끄기.** 라벨 모델을 "none"으로 설정하면 라벨 생성이 꺼지고, 얼굴 감지는 별도 설정으로 끕니다.',
        ],
        note: '이 수치와 동작은 프로젝트 자체의 설명이며, PromptQuorum은 어떤 모델도 시간을 재거나 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2026년 8월 19일에 마지막으로 갱신된 개인정보 처리방침은, 내 사설 네트워크를 벗어나지 않는 데이터는 회사를 포함한 누구도 수집할 수 없다고 밝힙니다.** 셀프 호스팅 서버에서는 OpenAI 엔진 등으로 다른 곳에 보내지 않는 한 사진, 앨범, AI 결과가 내 하드웨어에 머문다는 뜻입니다.',
          '개인정보 처리방침과 문서에 따르면 세 종류의 트래픽이 외부 서버에 도달합니다. 역지오코딩과 대화형 세계 지도는 PhotoPrism과 스위스의 MapTiler AG에서 데이터를 가져오며, 지오코딩 요청에는 조회하는 위치와 서버의 공인 IP 주소가 담깁니다. 멤버십 키가 있는 인스턴스는 갱신을 위해 프로젝트에도 접속하며, 무작위 인스턴스 ID, 소프트웨어 버전, 운영체제 종류, CPU 아키텍처를 보냅니다. 마지막으로 인터넷에서 접근 가능한 서버는 HTTPS 리버스 프록시 뒤에 있어야 하며, 그렇지 않으면 비밀번호와 파일이 평문으로 전송됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트의 선언이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았고 저장소 메타데이터 이상의 소스 코드도 검토하지 않았습니다. 방침은 PhotoPrism UG를 자체 서비스의 운영자로 명시하고 GDPR 준수 설명으로 연결합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Docker 서버나 NAS를 쓰는 셀프 호스팅 사용자**로 클라우드 사진 서비스의 비공개 대안을 찾는 분.',
          '**대용량 RAW와 동영상을 가진 사진가**로 라벨, 장소, 얼굴로 검색하려는 분.',
          '**하나의 라이브러리를 함께 쓰려는 가정**으로 모든 기기에서 브라우저로 접속하려는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**AI 품질.** PromptQuorum은 라벨 정확도, 얼굴 그룹화, 검색 적합도를 테스트하지 않았으며, 위의 속도 수치는 프로젝트가 제시한 것입니다.',
          '**휴대폰 경험.** 프로젝트는 웹 앱만 제공하며, 문서에 소개된 다른 개발자의 앱 품질과 약관은 확인하지 않았습니다.',
          '**에디션 경계.** 유료 멤버십에 속하는 기능은 릴리스마다 바뀔 수 있으므로, 지도나 추가 사용자 역할에 의존하기 전에 가격표를 확인하세요.',
          '**라이선스 세부 사항.** GitHub의 감지 결과는 "Other"이지만 README와 문서는 Community 에디션을 AGPL-3.0으로 밝힙니다. 유료 에디션의 약관은 검토하지 않았습니다.',
          '**자원 사용량.** 문서는 큰 RAW 라이브러리를 인덱싱할 때 최소 메모리를 넘을 수 있다고 하지만, 실제 사용량은 측정하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 리뷰가 있는 이미지 라이브러리 관리 도구가 하나 더 있고, 다른 종류의 콘텐츠에 태그를 붙이는 셀프 호스팅 앱도 있습니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[PixlStash](/ko/power-local-llm/pixlstash-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / GPL-3.0', '핵심 차이점': '로컬 태그 지정, 얼굴·의미 검색을 갖춘 데스크톱 앱, PhotoPrism은 브라우저로 쓰는 서버' },
          { '앱': '[Karakeep](/ko/power-local-llm/karakeep-review)', '플랫폼': '웹, iOS, Android', '가격 / 라이선스': '무료 / AGPL-3.0', '핵심 차이점': 'AI 태그가 있는 북마크·메모 관리 앱으로 사진 라이브러리가 아님' },
        ],
        note: '다른 사진 라이브러리 서버에는 아직 PromptQuorum 리뷰가 없어 이들이 가장 가까운 등재 도구입니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'PhotoPrism에 iPhone이나 Android 앱이 있나요?',
            a: '프로젝트 자체는 설치 가능한 웹 앱을 제공합니다. 문서에는 휴대폰에서 백그라운드 업로드에 쓰는 PhotoSync 등 다른 개발자의 앱이 소개되어 있습니다.',
          },
          {
            q: 'PhotoPrism은 어떻게 업데이트하나요?',
            a: 'Docker Compose에서는 새 이미지를 받아 서비스를 다시 시작합니다. 이미지 태그를 latest에서 preview로 바꾸면 개발 빌드를 먼저 써 볼 수 있습니다. 릴리스 노트에는 2026년 10월 AI 변경 뒤 라벨을 다시 실행하는 것처럼 업그레이드 단계가 들어 있을 수 있습니다.',
          },
          {
            q: '구글 포토에서 옮겨 올 수 있나요?',
            a: '구글 포토의 메타데이터는 병합할 수 있고 문서에는 클라우드 마이그레이션 가이드도 있습니다. PromptQuorum은 마이그레이션을 시도하지 않았습니다.',
          },
          {
            q: 'PhotoPrism은 내 파일을 어디에 보관하나요?',
            a: '예시 설정은 세 폴더를 정의합니다. 내 이미지용 originals, 설정 같은 내부 파일용 storage, 추가할 파일용 import입니다. 데이터베이스용 MariaDB 컨테이너도 함께 시작합니다.',
          },
          {
            q: '기업용 버전이 있나요?',
            a: '네. Teams 페이지에는 Starter 월 €79부터, Business 월 €219부터, Enterprise 월 €1,499부터의 라이선스가 있으며 지원 수준은 등급마다 다릅니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'PhotoPrism은 내가 관리하는 하드웨어에 검색 가능한 사진 라이브러리를 두는, 오래 이어져 왔고 업데이트도 활발한 방법이며, 얼굴 인식과 AI 라벨링은 기본적으로 내 서버에서 실행됩니다. 반면 설치에는 Docker와 설정 파일이 필요하고, 문서에 따르면 프로젝트가 네이티브 데스크톱·휴대폰 앱을 제공하지 않으며, 위치 조회와 지도는 외부 서버에 연결되고, AI 품질과 속도에 대한 주장은 여기서 확인하지 못했습니다. 집이나 NAS에서 이미 서비스를 운영하며 무료 Community 에디션을 먼저 써 볼 수 있는 분께 맞고, 더블클릭으로 쓰는 앱을 원한다면 다른 곳을 찾는 편이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[PhotoPrism 웹사이트](https://www.photoprism.app) — 제품 개요, 가격과 에디션, 2026년 10월 24일 확인.',
          '[PhotoPrism 문서](https://docs.photoprism.app) — 설치, AI 모델, 릴리스 노트, 모바일 앱, 2026년 10월 24일 확인.',
          '[PhotoPrism 개인정보 처리방침](https://www.photoprism.app/privacy/) — 데이터 수집과 셀프 호스팅 관련 설명, 2026년 8월 19일 갱신.',
          '[GitHub의 PhotoPrism](https://github.com/photoprism/photoprism) — README, 릴리스, 커밋 활동, 2026년 10월 24일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[PixlStash 리뷰](/ko/power-local-llm/pixlstash-review) — 로컬 AI 태그 지정 기능이 있는 데스크톱 이미지 라이브러리 관리 도구.',
          '[Karakeep 리뷰](/ko/power-local-llm/karakeep-review) — 북마크와 메모에 AI 태그를 붙이는 셀프 호스팅 앱.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록.',
        ],
      },
    },
  },
}
