// Photoview Review: Self-Hosted Photo Gallery with Local Face Recognition
// Slug: photoview-review
// Companion to: photoprism-review, immich-review, facet-review
// Sources (all checked 2026-10-30, no hands-on testing): photoview.github.io (home), the photoview/photoview GitHub repository (README, GitHub API,
// Releases API, api/go.mod, api/scanner/face_detection/face_detector_impl.go, api/utils/environment_variables.go, api/data/models listing,
// docker-compose example/example.env, ui/package.json and ui/src/components/mapbox) and the Docker Hub tag list for photoview/photoview.
// Last upstream update: 2026-10-29 (GitHub pushed_at / latest master commit; Docker Hub latest + 2.4.0 tags pushed the same day). Newest tagged release:
// 2.4.0, published 2024-06-23, no release assets. NOT stale (3-month rule). No privacy policy page found on the website or in the README.
// No prices exist (free, AGPL-3.0), so no per-storefront currency research applies to the translations.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/photoview-review-hero-en.webp',
    title: 'Photoview Review: Self-Hosted Photo Gallery with Local Face Recognition',
    seoTitle: 'Photoview Review: Self-Hosted Gallery, Face Recognition',
    intro:
      'Photoview is a free, open-source photo gallery for self-hosted personal servers: you point it at a folder, it scans the pictures and videos, and you browse them in a web browser. Its one AI feature is face recognition that groups photos of the same person. This review is based on the project\'s website, README and GitHub repository, checked on 30 October 2026; PromptQuorum has not tested the software hands-on.',
    metaDescription:
      'Photoview review: a free, open-source photo gallery for your own server with face recognition that runs on that server. Docker setup, what is untested.',
    twitterDescription:
      'Photoview review: a self-hosted photo gallery with local face recognition, free under AGPL-3.0. What the sources confirm and what they leave open.',
    audience:
      'Self-hosters and photographers who keep pictures in folders on their own server and want to know what the sources confirm, what the project only claims and what it costs.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Photoview review',
    targetKeywords: [
      'photoview review',
      'photoview self-hosted photo gallery',
      'photoview face recognition',
      'photoview docker compose',
      'self-hosted google photos alternative',
      'photoview raw photos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Photoview (release 2.4.0) is an AGPL-licensed photo gallery that you install on your own server with Docker, with face recognition that runs inside the server process.** It is free and setup needs a terminal. Everything here comes from the project\'s own website, README and code.',
    quickAnswerTop: {
      en: {
        question: 'Does Photoview send my photos to an AI cloud service?',
        answer:
          'Not in the code we checked: face recognition uses the open-source go-face library with model files from the repository, called by the server\'s own scanner. The optional map feature is the one outside service involved (see Data Flow and Privacy).',
        bullets: [
          'Directories on the server become albums, and each user is tied to one folder.',
          'RAW files and EXIF data are supported, and videos are optimized for web playback.',
          'Thumbnails are generated in advance so large libraries stay quick to browse.',
          'Hardware acceleration for video is optional.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Photoview?', anchor: 'what-is-photoview' },
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
            text: 'Photoview is an open-source, self-hosted photo gallery that scans folders on your server and groups photos by face with a model that runs there.',
          },
          {
            type: 'plain-terms',
            text: 'You install it on a computer or NAS you control, point it at your picture folders, and browse and share them from any browser without a cloud photo service.',
          },
        ],
        items: [
          'Maintenance: the last tagged release is 2.4.0 from 23 June 2024, but the master branch received commits on 29 October 2026 and Docker Hub tags were rebuilt that day, so no stale-project warning applies.',
          'Setup: Docker Compose with a database and an environment file; no desktop installer or app-store app is listed.',
          'AI: one feature, face recognition; the README and website list no labelling or semantic search.',
          'Cost: free under AGPL-3.0; no paid edition appears in the README or on the website.',
          'Reach: browser interface only; no mobile app is listed.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project\'s website, README and GitHub repository, checked on 30 October 2026. PromptQuorum has not installed Photoview, so face-recognition accuracy, speed and resource use are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoview',
        title: 'What Is Photoview?',
        content: [
          '**Photoview is a self-hosted web gallery built for photographers; its scanner reads a folder on the server and turns the directories into albums.** The project calls itself a "photo gallery for self-hosted personal servers", and the code is on GitHub under the AGPL-3.0.',
          'Each user is created together with a path on the server and sees only the media below it. The README links a public demo site.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Photoview is a server you install yourself; the documented route is Docker Compose, and there is no desktop or phone installer.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Docker Compose', 'How to get it': '[Compose example](https://github.com/photoview/photoview/tree/master/docker-compose%20example): copy the .env, compose file and Makefile, edit them, run make all' },
          { 'Option': 'Other platforms', 'How to get it': 'The README lists Arch Linux AUR, NixOS, Unraid, YunoHost, TrueNAS and EmbassyOS, with limited project support' },
          { 'Option': 'Price', 'How to get it': 'Free, AGPL-3.0, self-hosted' },
          { 'Option': 'Website', 'How to get it': '[photoview.github.io](https://photoview.github.io/)' },
          { 'Option': 'Privacy policy', 'How to get it': 'No privacy policy page was found on the website or in the README' },
          { 'Option': 'Source code', 'How to get it': '[github.com/photoview/photoview](https://github.com/photoview/photoview)' },
          { 'Option': 'Public demo', 'How to get it': '[photos.qpqp.dk](https://photos.qpqp.dk/) with the login shown in the README' },
        ],
        note: 'Version reviewed: release 2.4.0, published on 23 June 2024, the newest tagged release; GitHub lists no downloadable files for it. The master branch had commits through 29 October 2026, and the latest and 2.4.0 tags on [Docker Hub](https://hub.docker.com/r/photoview/photoview) were last pushed that day. A terminal and Docker are required.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The README gives no RAM or CPU minimum; it names supported platforms, databases and a Docker version window.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          { 'Item': 'Runtime', 'What the sources say': 'Docker Engine released within the last year; Debian 12 or 13, or Ubuntu LTS and newer short-term releases' },
          { 'Item': 'Database', 'What the sources say': 'SQLite, MariaDB or PostgreSQL 17 or 18' },
          { 'Item': 'Media processing', 'What the sources say': 'RAW and video processing can each be switched off with an environment setting' },
          { 'Item': 'Video acceleration', 'What the sources say': 'Optional qsv, vaapi or nvenc; the project verified qsv on an Intel chip only' },
        ],
        note: 'These are the README\'s statements; PromptQuorum measured no memory, CPU or indexing time.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow the README\'s Docker guide; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install Docker',
            whyItMatters: 'Install Docker and Docker Compose on the server that holds your photos.',
          },
          {
            title: 'Copy the example files',
            whyItMatters: 'Download the files from the compose example folder, rename them to .env, docker-compose.yml and Makefile, and edit them for your paths and database.',
          },
          {
            title: 'Make media readable and start',
            whyItMatters: 'Run make readable so the container can read your media folders, then make all.',
          },
          {
            title: 'Create the admin and scan',
            whyItMatters: 'Open port 8000, finish the setup wizard with a username, password and photo path (default /photos), then use Scan All in Settings.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Key Features',
        content: [
          '**Every item below comes from the project\'s website or README; none has been tested by PromptQuorum.**',
        ],
        items: [
          '**Sharing.** Albums and single items can be shared with a public link, optionally password-protected.',
          '**Maps.** Photos with GPS coordinates in their EXIF data can be shown on a map; per the example config this needs a free Mapbox access token that you create.',
          '**Access control.** Media files are protected by a cookie token, passwords are hashed and the API uses a strict CORS policy, according to the README.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI Features and Where They Run',
        content: [
          '**Face recognition is the only AI feature the project lists, and it runs inside the Photoview server using the go-face library.**',
        ],
        items: [
          '**Detection and grouping.** The scanner finds faces in photos and groups photos of the same person, per the README; the code builds on go-face, an open-source Go wrapper for dlib.',
          '**Model files.** Three dlib model files for face detection, landmarks and recognition sit in the repository\'s data/models folder, and their path is configurable.',
          '**Where it runs.** The [face-detection code](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) calls the local library directly, with no network request in the files we read.',
          '**Switching off.** Setting PHOTOVIEW_DISABLE_FACE_RECOGNITION to 1 skips the feature.',
        ],
        note: 'These are statements from the README and code; PromptQuorum did not time or test the recognition.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**Photoview is self-hosted, so photos stay on the server you run unless you share them or turn on maps.** The README warns that its basic user authentication is not enough to protect private media from malicious actors on the internet, and suggests a firewall, VPN, reverse proxy or similar layers before exposing it.',
          'The map view loads the Mapbox library in the browser with the token you supply; what Mapbox receives was not checked.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s statements, not audit results. PromptQuorum inspected no network traffic and did not review the code beyond the files named in this article.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Photographers with RAW libraries on a home server** who want to browse and share folders without moving files.',
          '**Households that keep family photos on a NAS** and want one gallery with a separate folder per user.',
          '**Self-hosters who prefer a folder-based gallery** over a platform with AI search and labels.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Face recognition quality.** Accuracy, grouping behaviour and speed were not tested.',
          '**Release gap.** The newest tagged release dates from June 2024 and master has moved on; how far it differs from 2.4.0 was not compared, and the README says PostgreSQL 18 is the recommended version for the next release.',
          '**Mapbox data flow.** What the map feature sends to Mapbox, and Mapbox\'s terms for the free token, were not checked.',
          '**Resource use.** No RAM or CPU figures are published, and real usage was not measured.',
          '**Phone experience.** No mobile app is listed; how the browser interface behaves on phones was not tested.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'Three photo-library tools in the directory also recognize faces; they differ in how much else they add.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[PhotoPrism](/power-local-llm/photoprism-review)', 'Platforms': 'Linux, macOS, Windows (Docker), web', 'Price / license': 'Free + paid / AGPL-3.0', 'Key difference': 'Adds AI labels and search; paid memberships exist' },
          { 'App': '[Immich](/power-local-llm/immich-review)', 'Platforms': 'Linux server, iOS, Android, web', 'Price / license': 'Free / AGPL-3.0', 'Key difference': 'Adds phone backup apps and smart search' },
          { 'App': '[Facet](/power-local-llm/facet-review)', 'Platforms': 'Linux, macOS, Windows, web', 'Price / license': 'Free / MIT', 'Key difference': 'Adds photo scoring and culling; some default model weights are non-commercial' },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Photoview change my photo files?',
            a: 'The README describes the gallery as providing read-only access to your media, and generated thumbnails go to a separate cache folder set by PHOTOVIEW_MEDIA_CACHE.',
          },
          {
            q: 'Which database should I use?',
            a: 'SQLite needs no extra service but has the lowest performance and no scalability. The README names MariaDB as the default choice and PostgreSQL as typically the fastest.',
          },
          {
            q: 'How do I update Photoview?',
            a: 'Pull the new image and restart the containers. The README says to back up the database before upgrading, and notes that images moved to the photoview/photoview registry on Docker Hub, so older compose files need the new image name.',
          },
          {
            q: 'Where can I get help?',
            a: 'The README points to a [Discord server](https://discord.gg/jQ392948u9) for setup and development questions, and the project does not support Portainer or other layers on top of Docker Compose.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Photoview is an established, openly developed gallery for people who keep photos in folders on their own server and want to browse, share and sort them by face without a cloud service. Against that, the last tagged release is from June 2024, setup needs Docker and a database, face recognition is its only AI feature, maps depend on a Mapbox token, and none of its behaviour could be tested here. It suits folder-minded self-hosters who already run Docker; anyone who wants AI search or phone backup should compare the alternatives above.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Photoview website](https://photoview.github.io/) — feature overview, checked 30 October 2026.',
          '[Photoview README](https://github.com/photoview/photoview) — features, platforms, databases, setup and security notes, checked 30 October 2026.',
          '[Photoview releases](https://github.com/photoview/photoview/releases) — release 2.4.0, published 23 June 2024.',
          '[Photoview face-detection code](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) — recognition library and environment settings, checked 30 October 2026.',
          '[Photoview on Docker Hub](https://hub.docker.com/r/photoview/photoview) — image tags, checked 30 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PhotoPrism Review](/power-local-llm/photoprism-review) — a self-hosted photo library with built-in AI labels and face recognition.',
          '[Immich Review](/power-local-llm/immich-review) — a self-hosted photo backup with phone apps and smart search.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Photoview Review: Self-Hosted Photo Gallery with Local Face Recognition',
      description:
        'Photoview review: a free, open-source photo gallery for self-hosted servers with face recognition that runs on your own server. Setup, requirements, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/photoview-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Self-hosters and photographers evaluating a self-hosted photo gallery' },
      about: [
        { '@type': 'Thing', name: 'Photoview' },
        { '@type': 'Thing', name: 'Self-hosted photo gallery' },
        { '@type': 'Thing', name: 'Face recognition' },
        { '@type': 'Thing', name: 'Docker' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/photoview-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Photoview Review', item: 'https://www.promptquorum.com/power-local-llm/photoview-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Image & Video Generation',
    heroImage: '/images/photoview-review-hero-de.webp',
    title: 'Photoview-Rezension: Selbst gehostete Fotogalerie mit lokaler Gesichtserkennung',
    seoTitle: 'Photoview-Rezension: Fotogalerie mit Gesichtserkennung',
    intro:
      'Photoview ist eine kostenlose Open-Source-Fotogalerie für selbst gehostete private Server: Sie verweisen auf einen Ordner, die Software scannt Bilder und Videos, und Sie durchsuchen sie im Webbrowser. Die einzige KI-Funktion ist die Gesichtserkennung, die Fotos derselben Person gruppiert. Diese Rezension stützt sich auf Website, README und GitHub-Repository des Projekts, geprüft am 30. Oktober 2026; PromptQuorum hat die Software nicht selbst getestet.',
    metaDescription:
      'Photoview-Rezension: kostenlose Open-Source-Fotogalerie für den eigenen Server mit lokaler Gesichtserkennung. Docker-Setup und Ungetestetes.',
    twitterDescription:
      'Photoview-Rezension: selbst gehostete Fotogalerie mit lokaler Gesichtserkennung, kostenlos unter AGPL-3.0. Was die Quellen bestätigen und was offen bleibt.',
    audience:
      'Selbsthoster und Fotografen, die Bilder in Ordnern auf dem eigenen Server ablegen und wissen möchten, was die Quellen bestätigen, was das Projekt nur behauptet und was es kostet.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Photoview Rezension',
    targetKeywords: [
      'photoview rezension',
      'photoview selbst gehostete fotogalerie',
      'photoview gesichtserkennung',
      'photoview docker compose',
      'google fotos alternative selbst hosten',
      'photoview raw fotos',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Photoview (Release 2.4.0) ist eine AGPL-lizenzierte Fotogalerie, die Sie per Docker auf Ihrem eigenen Server installieren; die Gesichtserkennung läuft im Serverprozess.** Die Software ist kostenlos, die Einrichtung erfordert ein Terminal. Alle Angaben stammen von Website, README und Code des Projekts.',
    quickAnswerTop: {
      de: {
        question: 'Schickt Photoview meine Fotos an einen KI-Cloud-Dienst?',
        answer:
          'Im geprüften Code nicht: Die Gesichtserkennung nutzt die Open-Source-Bibliothek go-face mit Modelldateien aus dem Repository und wird vom Scanner des Servers selbst aufgerufen. Die optionale Kartenfunktion ist der einzige beteiligte externe Dienst (siehe Datenfluss und Datenschutz).',
        bullets: [
          'Verzeichnisse auf dem Server werden zu Alben, und jeder Benutzer ist einem Ordner zugeordnet.',
          'RAW-Dateien und EXIF-Daten werden unterstützt, Videos für die Wiedergabe im Web optimiert.',
          'Vorschaubilder werden vorab erzeugt, damit große Bibliotheken schnell durchsuchbar bleiben.',
          'Die Hardwarebeschleunigung für Videos ist optional.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Photoview?', anchor: 'what-is-photoview' },
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
            text: 'Photoview ist eine quelloffene, selbst gehostete Fotogalerie, die Ordner auf Ihrem Server scannt und Fotos mit einem dort laufenden Modell nach Gesichtern gruppiert.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren sie auf einem Rechner oder NAS unter Ihrer Kontrolle, verweisen auf Ihre Bilderordner und durchsuchen und teilen sie in jedem Browser, ohne einen Cloud-Fotodienst zu nutzen.',
          },
        ],
        items: [
          'Pflege: Der letzte getaggte Release ist 2.4.0 vom 23. Juni 2024, doch der master-Branch erhielt am 29. Oktober 2026 Commits und die Docker-Hub-Tags wurden am selben Tag neu gebaut; eine Warnung vor einem veralteten Projekt entfällt.',
          'Einrichtung: Docker Compose mit Datenbank und Umgebungsdatei; ein Desktop-Installer oder eine App-Store-App ist nicht aufgeführt.',
          'KI: eine Funktion, die Gesichtserkennung; README und Website nennen weder Verschlagwortung noch semantische Suche.',
          'Kosten: kostenlos unter AGPL-3.0; eine kostenpflichtige Edition erscheint weder im README noch auf der Website.',
          'Zugang: nur Browseroberfläche; eine mobile App ist nicht aufgeführt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf Website, README und GitHub-Repository des Projekts, geprüft am 30. Oktober 2026. PromptQuorum hat Photoview nicht installiert; Genauigkeit, Geschwindigkeit und Ressourcenbedarf der Gesichtserkennung wurden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoview',
        title: 'Was ist Photoview?',
        content: [
          '**Photoview ist eine selbst gehostete Web-Galerie für Fotografen; der Scanner liest einen Ordner auf dem Server und macht dessen Verzeichnisse zu Alben.** Das Projekt nennt sich „Fotogalerie für selbst gehostete private Server“, der Code liegt auf GitHub unter der AGPL-3.0.',
          'Jeder Benutzer wird zusammen mit einem Pfad auf dem Server angelegt und sieht nur die Medien darunter. Das README verlinkt eine öffentliche Demo-Seite.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Photoview ist ein Server, den Sie selbst installieren; der dokumentierte Weg ist Docker Compose, einen Desktop- oder Smartphone-Installer gibt es nicht.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'Docker Compose', 'Bezug': '[Compose-Beispiel](https://github.com/photoview/photoview/tree/master/docker-compose%20example): .env, Compose-Datei und Makefile kopieren, anpassen und make all ausführen' },
          { 'Option': 'Weitere Plattformen', 'Bezug': 'Laut README auch Arch AUR, NixOS, Unraid, YunoHost, TrueNAS, EmbassyOS; Support eingeschränkt' },
          { 'Option': 'Preis', 'Bezug': 'Kostenlos, AGPL-3.0, selbst gehostet' },
          { 'Option': 'Website', 'Bezug': '[photoview.github.io](https://photoview.github.io/)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': 'Auf der Website und im README wurde keine Datenschutzerklärung gefunden' },
          { 'Option': 'Quellcode', 'Bezug': '[github.com/photoview/photoview](https://github.com/photoview/photoview)' },
          { 'Option': 'Öffentliche Demo', 'Bezug': '[photos.qpqp.dk](https://photos.qpqp.dk/) mit den im README genannten Zugangsdaten' },
        ],
        note: 'Geprüfte Version: Release 2.4.0, veröffentlicht am 23. Juni 2024, der neueste getaggte Release; GitHub führt dafür keine herunterladbaren Dateien auf. Der master-Branch hatte Commits bis zum 29. Oktober 2026, und die Tags latest und 2.4.0 auf [Docker Hub](https://hub.docker.com/r/photoview/photoview) wurden an diesem Tag zuletzt aktualisiert. Ein Terminal und Docker sind erforderlich.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Das README nennt kein Minimum für RAM oder CPU; es führt unterstützte Plattformen, Datenbanken und ein Zeitfenster für die Docker-Version auf.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          { 'Punkt': 'Laufzeitumgebung', 'Angaben der Quellen': 'Docker Engine, die im letzten Jahr erschienen ist; Debian 12 oder 13 bzw. Ubuntu LTS und neuere kurzlebige Releases' },
          { 'Punkt': 'Datenbank', 'Angaben der Quellen': 'SQLite, MariaDB oder PostgreSQL 17 oder 18' },
          { 'Punkt': 'Medienverarbeitung', 'Angaben der Quellen': 'RAW- und Videoverarbeitung lassen sich jeweils per Umgebungseinstellung abschalten' },
          { 'Punkt': 'Videobeschleunigung', 'Angaben der Quellen': 'Optional qsv, vaapi oder nvenc; das Projekt hat nur qsv auf einem Intel-Chip überprüft' },
        ],
        note: 'Das sind Angaben aus dem README; PromptQuorum hat weder Speicher noch CPU noch Indexierungszeit gemessen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Docker-Anleitung im README; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Docker installieren',
            whyItMatters: 'Installieren Sie Docker und Docker Compose auf dem Server, auf dem Ihre Fotos liegen.',
          },
          {
            title: 'Beispieldateien kopieren',
            whyItMatters: 'Laden Sie die Dateien aus dem Compose-Beispielordner herunter, benennen Sie sie in .env, docker-compose.yml und Makefile um und passen Sie Pfade und Datenbank an.',
          },
          {
            title: 'Medien lesbar machen und starten',
            whyItMatters: 'Führen Sie make readable aus, damit der Container Ihre Medienordner lesen kann, und danach make all.',
          },
          {
            title: 'Admin anlegen und scannen',
            whyItMatters: 'Öffnen Sie Port 8000, schließen Sie den Einrichtungsassistenten mit Benutzername, Passwort und Fotopfad (Standard /photos) ab und starten Sie in den Einstellungen „Scan All“.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Jeder Punkt stammt von der Website oder aus dem README des Projekts; PromptQuorum hat keinen davon getestet.**',
        ],
        items: [
          '**Teilen.** Alben und einzelne Medien lassen sich über einen öffentlichen Link teilen, wahlweise mit Passwortschutz.',
          '**Karten.** Fotos mit GPS-Koordinaten in den EXIF-Daten können auf einer Karte angezeigt werden; laut Beispielkonfiguration braucht das ein kostenloses Mapbox-Zugriffstoken, das Sie selbst erstellen.',
          '**Zugriffsschutz.** Mediendateien sind laut README durch ein Cookie-Token geschützt, Passwörter werden gehasht und die API nutzt eine strikte CORS-Richtlinie.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'KI-Funktionen und wo sie laufen',
        content: [
          '**Die Gesichtserkennung ist die einzige KI-Funktion, die das Projekt aufführt, und sie läuft im Photoview-Server mit der Bibliothek go-face.**',
        ],
        items: [
          '**Erkennung und Gruppierung.** Der Scanner findet Gesichter in Fotos und gruppiert Fotos derselben Person, so das README; der Code baut auf go-face auf, einem quelloffenen Go-Wrapper für dlib.',
          '**Modelldateien.** Drei dlib-Modelldateien für Gesichtserkennung, Landmarken und Wiedererkennung liegen im Ordner data/models des Repositorys, ihr Pfad ist konfigurierbar.',
          '**Wo sie läuft.** Der [Code zur Gesichtserkennung](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) ruft die lokale Bibliothek direkt auf; in den gelesenen Dateien gibt es keine Netzwerkanfrage.',
          '**Abschalten.** Wird PHOTOVIEW_DISABLE_FACE_RECOGNITION auf 1 gesetzt, entfällt die Funktion.',
        ],
        note: 'Das sind Angaben aus README und Code; PromptQuorum hat die Erkennung weder zeitlich gemessen noch getestet.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Photoview wird selbst gehostet, daher bleiben Fotos auf Ihrem Server, solange Sie sie nicht teilen oder die Karten einschalten.** Das README warnt, dass die einfache Benutzerauthentifizierung nicht ausreicht, um private Medien vor böswilligen Akteuren im Internet zu schützen, und empfiehlt vor einer Freigabe etwa Firewall, VPN oder Reverse-Proxy.',
          'Die Kartenansicht lädt die Mapbox-Bibliothek im Browser mit dem von Ihnen angegebenen Token; was Mapbox dabei erhält, wurde nicht geprüft.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Aussagen des Projekts, keine Prüfergebnisse. PromptQuorum hat den Netzwerkverkehr nicht untersucht und den Code nur in den in diesem Artikel genannten Dateien gesichtet.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die Software eignet',
        items: [
          '**Fotografen mit RAW-Bibliotheken auf einem Heimserver**, die Ordner durchsuchen und teilen möchten, ohne Dateien zu verschieben.',
          '**Haushalte, die Familienfotos auf einem NAS ablegen** und eine Galerie mit eigenem Ordner pro Benutzer wünschen.',
          '**Selbsthoster, die eine ordnerbasierte Galerie bevorzugen** statt einer Plattform mit KI-Suche und Labels.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität der Gesichtserkennung.** Genauigkeit, Gruppierungsverhalten und Geschwindigkeit wurden nicht getestet.',
          '**Abstand zum Release.** Der neueste getaggte Release stammt aus dem Juni 2024, master ist weitergezogen; wie stark er von 2.4.0 abweicht, wurde nicht verglichen, und laut README ist PostgreSQL 18 die empfohlene Version für den nächsten Release.',
          '**Datenfluss zu Mapbox.** Was die Kartenfunktion an Mapbox sendet und welche Bedingungen Mapbox für das kostenlose Token stellt, wurde nicht geprüft.',
          '**Ressourcenbedarf.** Es gibt keine veröffentlichten RAM- oder CPU-Werte, und die tatsächliche Nutzung wurde nicht gemessen.',
          '**Smartphone-Nutzung.** Eine mobile App ist nicht aufgeführt; wie sich die Browseroberfläche auf Smartphones verhält, wurde nicht getestet.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        content: [
          'Drei Foto-Bibliotheken im Verzeichnis erkennen ebenfalls Gesichter; sie unterscheiden sich darin, was sie darüber hinaus bieten.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[PhotoPrism](/de/power-local-llm/photoprism-review)', 'Plattformen': 'Linux, macOS, Windows (Docker), Web', 'Preis / Lizenz': 'Gratis + kostenpflichtig / AGPL-3.0', 'Wichtigster Unterschied': 'Bietet zusätzlich KI-Labels und Suche; es gibt kostenpflichtige Mitgliedschaften' },
          { 'App': '[Immich](/de/power-local-llm/immich-review)', 'Plattformen': 'Linux-Server, iOS, Android, Web', 'Preis / Lizenz': 'Gratis / AGPL-3.0', 'Wichtigster Unterschied': 'Bietet zusätzlich Apps zur Handy-Sicherung und intelligente Suche' },
          { 'App': '[Facet](/de/power-local-llm/facet-review)', 'Plattformen': 'Linux, macOS, Windows, Web', 'Preis / Lizenz': 'Gratis / MIT', 'Wichtigster Unterschied': 'Bietet zusätzlich Foto-Bewertung und Aussortieren; manche Standard-Modellgewichte sind nicht kommerziell nutzbar' },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Verändert Photoview meine Fotodateien?',
            a: 'Das README beschreibt die Galerie als Zugriff mit Leserechten auf Ihre Medien, und erzeugte Vorschaubilder landen in einem separaten Cache-Ordner, der über PHOTOVIEW_MEDIA_CACHE festgelegt wird.',
          },
          {
            q: 'Welche Datenbank sollte ich verwenden?',
            a: 'SQLite braucht keinen zusätzlichen Dienst, hat aber die geringste Leistung und lässt sich nicht skalieren. Das README nennt MariaDB als Standardwahl und PostgreSQL als in der Regel schnellste Option.',
          },
          {
            q: 'Wie aktualisiere ich Photoview?',
            a: 'Laden Sie das neue Image und starten Sie die Container neu. Das README rät, vor einem Upgrade die Datenbank zu sichern, und weist darauf hin, dass die Images in die Registry photoview/photoview auf Docker Hub umgezogen sind; ältere Compose-Dateien brauchen daher den neuen Image-Namen.',
          },
          {
            q: 'Wo bekomme ich Hilfe?',
            a: 'Das README verweist für Fragen zu Einrichtung und Entwicklung auf einen [Discord-Server](https://discord.gg/jQ392948u9); Portainer oder andere Schichten über Docker Compose unterstützt das Projekt nicht.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Photoview ist eine etablierte, offen entwickelte Galerie für Menschen, die Fotos in Ordnern auf dem eigenen Server ablegen und sie ohne Cloud-Dienst durchsuchen, teilen und nach Gesichtern sortieren möchten. Dagegen stehen: Der letzte getaggte Release stammt vom Juni 2024, die Einrichtung braucht Docker und eine Datenbank, die Gesichtserkennung ist die einzige KI-Funktion, Karten hängen an einem Mapbox-Token, und nichts davon ließ sich hier testen. Geeignet ist die Software für ordnerorientierte Selbsthoster, die bereits Docker betreiben; wer KI-Suche oder Handy-Sicherung möchte, sollte die oben genannten Alternativen vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Photoview-Website](https://photoview.github.io/) — Funktionsübersicht, geprüft am 30. Oktober 2026.',
          '[Photoview-README](https://github.com/photoview/photoview) — Funktionen, Plattformen, Datenbanken, Einrichtung und Sicherheitshinweise, geprüft am 30. Oktober 2026.',
          '[Photoview-Releases](https://github.com/photoview/photoview/releases) — Release 2.4.0, veröffentlicht am 23. Juni 2024.',
          '[Photoview-Code zur Gesichtserkennung](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) — Erkennungsbibliothek und Umgebungseinstellungen, geprüft am 30. Oktober 2026.',
          '[Photoview auf Docker Hub](https://hub.docker.com/r/photoview/photoview) — Image-Tags, geprüft am 30. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PhotoPrism-Rezension](/de/power-local-llm/photoprism-review) — eine selbst gehostete Fotobibliothek mit integrierten KI-Labels und Gesichtserkennung.',
          '[Immich-Rezension](/de/power-local-llm/immich-review) — eine selbst gehostete Foto-Sicherung mit Smartphone-Apps und intelligenter Suche.',
          '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoview-review-hero-es.webp',
    title: 'Reseña de Photoview: galería de fotos autoalojada con reconocimiento facial local',
    seoTitle: 'Reseña de Photoview: galería con reconocimiento facial',
    intro:
      'Photoview es una galería de fotos gratuita y de código abierto para servidores personales autoalojados: la apuntas a una carpeta, escanea las imágenes y los vídeos y los exploras desde el navegador. Su única función de IA es un reconocimiento facial que agrupa las fotos de una misma persona. Esta reseña se basa en el sitio web, el README y el repositorio de GitHub del proyecto, consultados el 30 de octubre de 2026; PromptQuorum no ha probado el software en la práctica.',
    metaDescription:
      'Reseña de Photoview: galería de fotos gratuita y de código abierto para tu servidor, con reconocimiento facial local. Docker y lo que no se probó.',
    twitterDescription:
      'Reseña de Photoview: galería de fotos autoalojada con reconocimiento facial local, gratuita con AGPL-3.0. Lo que confirman las fuentes y lo que queda abierto.',
    audience:
      'Autoalojadores y fotógrafos que guardan sus imágenes en carpetas de su propio servidor y quieren saber qué confirman las fuentes, qué solo afirma el proyecto y cuánto cuesta.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Photoview',
    targetKeywords: [
      'reseña photoview',
      'photoview galería de fotos autoalojada',
      'photoview reconocimiento facial',
      'photoview docker compose',
      'alternativa a google fotos autoalojada',
      'photoview fotos raw',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Photoview (versión 2.4.0) es una galería de fotos con licencia AGPL que instalas en tu propio servidor con Docker, con un reconocimiento facial que se ejecuta dentro del proceso del servidor.** Es gratuita y la instalación requiere una terminal. Todo lo que se dice aquí procede del sitio web, el README y el código del propio proyecto.',
    quickAnswerTop: {
      es: {
        question: '¿Photoview envía mis fotos a un servicio de IA en la nube?',
        answer:
          'No en el código que revisamos: el reconocimiento facial usa la biblioteca de código abierto go-face con archivos de modelo del repositorio, y lo llama el propio escáner del servidor. La función opcional de mapas es el único servicio externo implicado (véase Flujo de datos y privacidad).',
        bullets: [
          'Los directorios del servidor se convierten en álbumes y cada usuario queda ligado a una carpeta.',
          'Se admiten archivos RAW y datos EXIF, y los vídeos se optimizan para reproducirse en la web.',
          'Las miniaturas se generan de antemano para que las bibliotecas grandes se exploren con rapidez.',
          'La aceleración por hardware para vídeo es opcional.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Photoview?', anchor: 'what-is-photoview' },
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
            text: 'Photoview es una galería de fotos de código abierto y autoalojada que escanea carpetas de tu servidor y agrupa las fotos por rostros con un modelo que se ejecuta allí.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas en un ordenador o NAS que controlas, la apuntas a tus carpetas de imágenes y las exploras y compartes desde cualquier navegador sin usar un servicio de fotos en la nube.',
          },
        ],
        items: [
          'Mantenimiento: la última versión etiquetada es la 2.4.0 del 23 de junio de 2024, pero la rama master recibió commits el 29 de octubre de 2026 y las etiquetas de Docker Hub se reconstruyeron ese día, así que no corresponde una advertencia de proyecto abandonado.',
          'Instalación: Docker Compose con una base de datos y un archivo de entorno; no figura instalador de escritorio ni app en una tienda.',
          'IA: una sola función, el reconocimiento facial; el README y el sitio web no mencionan etiquetado ni búsqueda semántica.',
          'Coste: gratuita con AGPL-3.0; ni el README ni el sitio web muestran una edición de pago.',
          'Acceso: solo interfaz de navegador; no figura ninguna app móvil.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, el README y el repositorio de GitHub del proyecto, consultados el 30 de octubre de 2026. PromptQuorum no ha instalado Photoview, así que no se evalúan la precisión, la velocidad ni el consumo de recursos del reconocimiento facial.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoview',
        title: '¿Qué es Photoview?',
        content: [
          '**Photoview es una galería web autoalojada pensada para fotógrafos; su escáner lee una carpeta del servidor y convierte los directorios en álbumes.** El proyecto se describe como una «galería de fotos para servidores personales autoalojados», y el código está en GitHub con licencia AGPL-3.0.',
          'Cada usuario se crea junto con una ruta del servidor y solo ve los archivos que cuelgan de ella. El README enlaza un sitio de demostración público.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Photoview es un servidor que instalas tú mismo; la vía documentada es Docker Compose y no hay instalador de escritorio ni para el móvil.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'Docker Compose', 'Cómo conseguirlo': '[Ejemplo de Compose](https://github.com/photoview/photoview/tree/master/docker-compose%20example): copia el .env, el archivo compose y el Makefile, edítalos y ejecuta make all' },
          { 'Opción': 'Otras plataformas', 'Cómo conseguirlo': 'Según el README: Arch AUR, NixOS, Unraid, YunoHost, TrueNAS, EmbassyOS; soporte limitado' },
          { 'Opción': 'Precio', 'Cómo conseguirlo': 'Gratuito, AGPL-3.0, autoalojado' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[photoview.github.io](https://photoview.github.io/)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': 'No se encontró ninguna página de política de privacidad en el sitio web ni en el README' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[github.com/photoview/photoview](https://github.com/photoview/photoview)' },
          { 'Opción': 'Demo pública', 'Cómo conseguirlo': '[photos.qpqp.dk](https://photos.qpqp.dk/) con el acceso indicado en el README' },
        ],
        note: 'Versión revisada: la 2.4.0, publicada el 23 de junio de 2024, la última versión etiquetada; GitHub no lista archivos descargables para ella. La rama master tuvo commits hasta el 29 de octubre de 2026, y las etiquetas latest y 2.4.0 en [Docker Hub](https://hub.docker.com/r/photoview/photoview) se actualizaron por última vez ese día. Hacen falta una terminal y Docker.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**El README no indica un mínimo de RAM ni de CPU; menciona plataformas compatibles, bases de datos y un margen para la versión de Docker.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          { 'Elemento': 'Entorno de ejecución', 'Qué dicen las fuentes': 'Docker Engine publicado en el último año; Debian 12 o 13, o Ubuntu LTS y versiones intermedias recientes' },
          { 'Elemento': 'Base de datos', 'Qué dicen las fuentes': 'SQLite, MariaDB o PostgreSQL 17 o 18' },
          { 'Elemento': 'Procesamiento de medios', 'Qué dicen las fuentes': 'El procesamiento de RAW y de vídeo se puede desactivar por separado con una variable de entorno' },
          { 'Elemento': 'Aceleración de vídeo', 'Qué dicen las fuentes': 'Opcional: qsv, vaapi o nvenc; el proyecto solo verificó qsv en un chip Intel' },
        ],
        note: 'Son afirmaciones del README; PromptQuorum no midió memoria, CPU ni tiempo de indexación.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen la guía de Docker del README; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala Docker',
            whyItMatters: 'Instala Docker y Docker Compose en el servidor que guarda tus fotos.',
          },
          {
            title: 'Copia los archivos de ejemplo',
            whyItMatters: 'Descarga los archivos de la carpeta de ejemplo de Compose, renómbralos a .env, docker-compose.yml y Makefile, y edítalos con tus rutas y tu base de datos.',
          },
          {
            title: 'Haz legibles los medios y arranca',
            whyItMatters: 'Ejecuta make readable para que el contenedor pueda leer tus carpetas de medios y después make all.',
          },
          {
            title: 'Crea el administrador y escanea',
            whyItMatters: 'Abre el puerto 8000, completa el asistente con un nombre de usuario, una contraseña y la ruta de las fotos (por defecto /photos) y pulsa Scan All en Ajustes.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Todo lo que sigue procede del sitio web o del README del proyecto; PromptQuorum no ha probado nada de ello.**',
        ],
        items: [
          '**Compartir.** Los álbumes y los elementos sueltos se pueden compartir con un enlace público, opcionalmente protegido con contraseña.',
          '**Mapas.** Las fotos con coordenadas GPS en sus datos EXIF pueden mostrarse en un mapa; según la configuración de ejemplo, esto requiere un token de acceso de Mapbox gratuito que creas tú.',
          '**Control de acceso.** Según el README, los archivos multimedia están protegidos con un token en una cookie, las contraseñas se almacenan con hash y la API aplica una política CORS estricta.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Funciones de IA y dónde se ejecutan',
        content: [
          '**El reconocimiento facial es la única función de IA que menciona el proyecto y se ejecuta dentro del servidor de Photoview con la biblioteca go-face.**',
        ],
        items: [
          '**Detección y agrupación.** El escáner encuentra rostros en las fotos y agrupa las de una misma persona, según el README; el código se apoya en go-face, un envoltorio de código abierto en Go para dlib.',
          '**Archivos de modelo.** Tres archivos de modelo de dlib para detección de rostros, puntos de referencia y reconocimiento están en la carpeta data/models del repositorio, y su ruta es configurable.',
          '**Dónde se ejecuta.** El [código de detección de rostros](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) llama directamente a la biblioteca local, sin ninguna petición de red en los archivos que leímos.',
          '**Desactivarlo.** Si se establece PHOTOVIEW_DISABLE_FACE_RECOGNITION en 1, la función se omite.',
        ],
        note: 'Son afirmaciones del README y del código; PromptQuorum no midió los tiempos ni probó el reconocimiento.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**Photoview es autoalojado, así que las fotos permanecen en el servidor que tú gestionas salvo que las compartas o actives los mapas.** El README advierte de que su autenticación básica de usuarios no basta para proteger medios privados frente a actores malintencionados en internet, y sugiere un cortafuegos, una VPN, un proxy inverso u otras capas antes de exponerlo.',
          'La vista de mapa carga la biblioteca de Mapbox en el navegador con el token que aportas; no se comprobó qué recibe Mapbox.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del proyecto, no resultados de una auditoría. PromptQuorum no inspeccionó el tráfico de red ni revisó el código más allá de los archivos citados en este artículo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Fotógrafos con bibliotecas RAW en un servidor doméstico** que quieren explorar y compartir carpetas sin mover archivos.',
          '**Hogares que guardan las fotos familiares en un NAS** y quieren una galería con una carpeta propia por usuario.',
          '**Autoalojadores que prefieren una galería basada en carpetas** a una plataforma con búsqueda y etiquetas de IA.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad del reconocimiento facial.** No se probaron la precisión, el comportamiento de agrupación ni la velocidad.',
          '**Distancia respecto a la versión.** La última versión etiquetada es de junio de 2024 y master ha avanzado; no se comparó cuánto difiere de la 2.4.0, y el README indica que PostgreSQL 18 será la versión recomendada para la próxima versión.',
          '**Flujo de datos hacia Mapbox.** No se comprobó qué envía la función de mapas a Mapbox ni qué condiciones aplica Mapbox al token gratuito.',
          '**Uso de recursos.** No hay cifras publicadas de RAM ni de CPU, y no se midió el uso real.',
          '**Experiencia en el móvil.** No figura ninguna app móvil; no se probó cómo se comporta la interfaz de navegador en teléfonos.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'Otras tres herramientas de bibliotecas de fotos del directorio también reconocen rostros; se distinguen por lo que añaden.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[PhotoPrism](/es/power-local-llm/photoprism-review)', 'Plataformas': 'Linux, macOS, Windows (Docker), web', 'Precio / licencia': 'Gratis + de pago / AGPL-3.0', 'Diferencia clave': 'Añade etiquetas de IA y búsqueda; existen suscripciones de pago' },
          { 'App': '[Immich](/es/power-local-llm/immich-review)', 'Plataformas': 'Servidor Linux, iOS, Android, web', 'Precio / licencia': 'Gratis / AGPL-3.0', 'Diferencia clave': 'Añade apps de copia de seguridad para el móvil y búsqueda inteligente' },
          { 'App': '[Facet](/es/power-local-llm/facet-review)', 'Plataformas': 'Linux, macOS, Windows, web', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Añade puntuación y selección de fotos; algunos pesos de modelo por defecto no son de uso comercial' },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Photoview modifica mis archivos de fotos?',
            a: 'El README describe la galería como un acceso de solo lectura a tus medios, y las miniaturas generadas van a una carpeta de caché aparte que se define con PHOTOVIEW_MEDIA_CACHE.',
          },
          {
            q: '¿Qué base de datos debería usar?',
            a: 'SQLite no necesita ningún servicio adicional, pero tiene el menor rendimiento y no escala. El README señala MariaDB como la opción por defecto y PostgreSQL como normalmente la más rápida.',
          },
          {
            q: '¿Cómo actualizo Photoview?',
            a: 'Descarga la nueva imagen y reinicia los contenedores. El README recomienda hacer una copia de seguridad de la base de datos antes de actualizar y avisa de que las imágenes pasaron al registro photoview/photoview de Docker Hub, por lo que los archivos compose antiguos necesitan el nuevo nombre de imagen.',
          },
          {
            q: '¿Dónde puedo obtener ayuda?',
            a: 'El README remite a un [servidor de Discord](https://discord.gg/jQ392948u9) para dudas de instalación y desarrollo, y el proyecto no da soporte a Portainer ni a otras capas sobre Docker Compose.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Photoview es una galería consolidada y de desarrollo abierto para quienes guardan sus fotos en carpetas de su propio servidor y quieren explorarlas, compartirlas y ordenarlas por rostros sin un servicio en la nube. En contra: la última versión etiquetada es de junio de 2024, la instalación requiere Docker y una base de datos, el reconocimiento facial es su única función de IA, los mapas dependen de un token de Mapbox y nada de ello se pudo probar aquí. Encaja con autoalojadores que piensan en carpetas y ya usan Docker; quien quiera búsqueda con IA o copia de seguridad del móvil debería comparar las alternativas anteriores.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Photoview](https://photoview.github.io/) — resumen de funciones, consultado el 30 de octubre de 2026.',
          '[README de Photoview](https://github.com/photoview/photoview) — funciones, plataformas, bases de datos, instalación y notas de seguridad, consultado el 30 de octubre de 2026.',
          '[Versiones de Photoview](https://github.com/photoview/photoview/releases) — versión 2.4.0, publicada el 23 de junio de 2024.',
          '[Código de detección de rostros de Photoview](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) — biblioteca de reconocimiento y variables de entorno, consultado el 30 de octubre de 2026.',
          '[Photoview en Docker Hub](https://hub.docker.com/r/photoview/photoview) — etiquetas de imagen, consultadas el 30 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de PhotoPrism](/es/power-local-llm/photoprism-review) — una biblioteca de fotos autoalojada con etiquetas de IA y reconocimiento facial integrados.',
          '[Reseña de Immich](/es/power-local-llm/immich-review) — una copia de seguridad de fotos autoalojada con apps móviles y búsqueda inteligente.',
          '[Directorio de software para LLM locales](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoview-review-hero-fr.webp',
    title: 'Test de Photoview : galerie photo auto-hébergée avec reconnaissance faciale locale',
    seoTitle: 'Test de Photoview : galerie photo à reconnaissance faciale',
    intro:
      'Photoview est une galerie photo gratuite et open source pour serveurs personnels auto-hébergés : vous la pointez vers un dossier, elle analyse les images et les vidéos, et vous les parcourez dans un navigateur web. Sa seule fonction d’IA est une reconnaissance faciale qui regroupe les photos d’une même personne. Ce test s’appuie sur le site web, le README et le dépôt GitHub du projet, consultés le 30 octobre 2026 ; PromptQuorum n’a pas essayé le logiciel en pratique.',
    metaDescription:
      'Test de Photoview : galerie photo gratuite et open source pour votre serveur, avec reconnaissance faciale locale. Docker et points non testés.',
    twitterDescription:
      'Test de Photoview : galerie photo auto-hébergée avec reconnaissance faciale locale, gratuite sous AGPL-3.0. Ce que confirment les sources et ce qui reste ouvert.',
    audience:
      'Auto-hébergeurs et photographes qui rangent leurs images dans des dossiers sur leur propre serveur et veulent savoir ce que les sources confirment, ce que le projet affirme seulement et ce que cela coûte.',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test Photoview',
    targetKeywords: [
      'test photoview',
      'photoview galerie photo auto-hébergée',
      'photoview reconnaissance faciale',
      'photoview docker compose',
      'alternative google photos auto-hébergée',
      'photoview photos raw',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Photoview (version 2.4.0) est une galerie photo sous licence AGPL que vous installez sur votre propre serveur avec Docker, avec une reconnaissance faciale exécutée dans le processus du serveur.** Elle est gratuite et l’installation demande un terminal. Tout ce qui suit provient du site web, du README et du code du projet.',
    quickAnswerTop: {
      fr: {
        question: 'Photoview envoie-t-il mes photos à un service d’IA dans le cloud ?',
        answer:
          'Pas dans le code que nous avons examiné : la reconnaissance faciale utilise la bibliothèque open source go-face avec des fichiers de modèle issus du dépôt, appelée par l’analyseur du serveur lui-même. La fonction optionnelle de cartes est le seul service externe concerné (voir Flux de données et confidentialité).',
        bullets: [
          'Les répertoires du serveur deviennent des albums, et chaque utilisateur est rattaché à un dossier.',
          'Les fichiers RAW et les données EXIF sont pris en charge, et les vidéos sont optimisées pour la lecture sur le web.',
          'Les miniatures sont générées à l’avance pour que les grandes bibliothèques restent rapides à parcourir.',
          'L’accélération matérielle pour la vidéo est facultative.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Photoview ?', anchor: 'what-is-photoview' },
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
            text: 'Photoview est une galerie photo open source et auto-hébergée qui analyse des dossiers de votre serveur et regroupe les photos par visage avec un modèle exécuté sur place.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’installez sur un ordinateur ou un NAS que vous contrôlez, vous la pointez vers vos dossiers d’images, puis vous les parcourez et les partagez depuis n’importe quel navigateur, sans service de photos dans le cloud.',
          },
        ],
        items: [
          'Maintenance : la dernière version étiquetée est la 2.4.0 du 23 juin 2024, mais la branche master a reçu des commits le 29 octobre 2026 et les étiquettes Docker Hub ont été reconstruites ce jour-là ; aucun avertissement de projet abandonné ne s’applique.',
          'Installation : Docker Compose avec une base de données et un fichier d’environnement ; aucun installateur de bureau ni application de magasin n’est indiqué.',
          'IA : une seule fonction, la reconnaissance faciale ; le README et le site web ne mentionnent ni étiquetage ni recherche sémantique.',
          'Coût : gratuit sous AGPL-3.0 ; aucune édition payante n’apparaît dans le README ni sur le site web.',
          'Accès : interface de navigateur uniquement ; aucune application mobile n’est indiquée.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site web, le README et le dépôt GitHub du projet, consultés le 30 octobre 2026. PromptQuorum n’a pas installé Photoview ; la précision, la vitesse et la consommation de ressources de la reconnaissance faciale ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoview',
        title: 'Qu’est-ce que Photoview ?',
        content: [
          '**Photoview est une galerie web auto-hébergée conçue pour les photographes ; son analyseur lit un dossier du serveur et transforme les répertoires en albums.** Le projet se présente comme une « galerie photo pour serveurs personnels auto-hébergés » ; le code est sur GitHub sous licence AGPL-3.0.',
          'Chaque utilisateur est créé avec un chemin sur le serveur et ne voit que les médias situés en dessous. Le README renvoie vers un site de démonstration public.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Photoview est un serveur que vous installez vous-même ; la voie documentée est Docker Compose, et il n’existe pas d’installateur de bureau ni pour téléphone.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'Docker Compose', 'Comment l’obtenir': '[Exemple Compose](https://github.com/photoview/photoview/tree/master/docker-compose%20example) : copiez le .env, le fichier compose et le Makefile, modifiez-les, puis lancez make all' },
          { 'Option': 'Autres plateformes', 'Comment l’obtenir': 'Le README cite Arch Linux AUR, NixOS, Unraid, YunoHost, TrueNAS et EmbassyOS, avec un support limité du projet' },
          { 'Option': 'Prix', 'Comment l’obtenir': 'Gratuit, AGPL-3.0, auto-hébergé' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[photoview.github.io](https://photoview.github.io/)' },
          { 'Option': 'Politique de confidentialité', 'Comment l’obtenir': 'Aucune page de politique de confidentialité n’a été trouvée sur le site web ni dans le README' },
          { 'Option': 'Code source', 'Comment l’obtenir': '[github.com/photoview/photoview](https://github.com/photoview/photoview)' },
          { 'Option': 'Démo publique', 'Comment l’obtenir': '[photos.qpqp.dk](https://photos.qpqp.dk/) avec l’identifiant indiqué dans le README' },
        ],
        note: 'Version examinée : la 2.4.0, publiée le 23 juin 2024, la plus récente version étiquetée ; GitHub n’indique aucun fichier à télécharger pour elle. La branche master a reçu des commits jusqu’au 29 octobre 2026, et les étiquettes latest et 2.4.0 sur [Docker Hub](https://hub.docker.com/r/photoview/photoview) ont été mises à jour pour la dernière fois ce jour-là. Un terminal et Docker sont nécessaires.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**Le README n’indique aucun minimum de RAM ni de processeur ; il cite les plateformes prises en charge, les bases de données et une fenêtre pour la version de Docker.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          { 'Élément': 'Environnement', 'Ce que disent les sources': 'Docker Engine publié au cours de la dernière année ; Debian 12 ou 13, ou Ubuntu LTS et versions intermédiaires récentes' },
          { 'Élément': 'Base de données', 'Ce que disent les sources': 'SQLite, MariaDB ou PostgreSQL 17 ou 18' },
          { 'Élément': 'Traitement des médias', 'Ce que disent les sources': 'Le traitement des RAW et des vidéos peut être désactivé séparément par un paramètre d’environnement' },
          { 'Élément': 'Accélération vidéo', 'Ce que disent les sources': 'Facultative : qsv, vaapi ou nvenc ; le projet n’a vérifié que qsv sur une puce Intel' },
        ],
        note: 'Ce sont les affirmations du README ; PromptQuorum n’a mesuré ni la mémoire, ni le processeur, ni le temps d’indexation.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent le guide Docker du README ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer Docker',
            whyItMatters: 'Installez Docker et Docker Compose sur le serveur qui héberge vos photos.',
          },
          {
            title: 'Copier les fichiers d’exemple',
            whyItMatters: 'Téléchargez les fichiers du dossier d’exemple Compose, renommez-les en .env, docker-compose.yml et Makefile, puis adaptez-les à vos chemins et à votre base de données.',
          },
          {
            title: 'Rendre les médias lisibles et démarrer',
            whyItMatters: 'Lancez make readable pour que le conteneur puisse lire vos dossiers de médias, puis make all.',
          },
          {
            title: 'Créer l’administrateur et analyser',
            whyItMatters: 'Ouvrez le port 8000, terminez l’assistant avec un nom d’utilisateur, un mot de passe et le chemin des photos (par défaut /photos), puis utilisez Scan All dans les paramètres.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Tout ce qui suit provient du site web ou du README du projet ; PromptQuorum n’a rien testé de cela.**',
        ],
        items: [
          '**Partage.** Les albums et les éléments isolés peuvent être partagés par un lien public, éventuellement protégé par un mot de passe.',
          '**Cartes.** Les photos dont les données EXIF contiennent des coordonnées GPS peuvent s’afficher sur une carte ; d’après la configuration d’exemple, cela exige un jeton d’accès Mapbox gratuit que vous créez vous-même.',
          '**Contrôle d’accès.** Selon le README, les fichiers multimédias sont protégés par un jeton dans un cookie, les mots de passe sont hachés et l’API applique une politique CORS stricte.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Fonctions d’IA et où elles s’exécutent',
        content: [
          '**La reconnaissance faciale est la seule fonction d’IA que le projet indique, et elle s’exécute dans le serveur Photoview avec la bibliothèque go-face.**',
        ],
        items: [
          '**Détection et regroupement.** L’analyseur repère les visages dans les photos et regroupe celles d’une même personne, selon le README ; le code s’appuie sur go-face, une enveloppe open source en Go pour dlib.',
          '**Fichiers de modèle.** Trois fichiers de modèle dlib pour la détection des visages, les points de repère et la reconnaissance se trouvent dans le dossier data/models du dépôt, et leur chemin est configurable.',
          '**Où elle s’exécute.** Le [code de détection des visages](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) appelle directement la bibliothèque locale, sans requête réseau dans les fichiers que nous avons lus.',
          '**Désactivation.** Si PHOTOVIEW_DISABLE_FACE_RECOGNITION est défini à 1, la fonction est ignorée.',
        ],
        note: 'Ce sont des affirmations du README et du code ; PromptQuorum n’a ni chronométré ni testé la reconnaissance.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Photoview est auto-hébergé : les photos restent sur le serveur que vous exploitez, sauf si vous les partagez ou activez les cartes.** Le README prévient que son authentification d’utilisateur de base ne suffit pas à protéger des médias privés contre des acteurs malveillants sur internet, et suggère un pare-feu, un VPN, un proxy inverse ou d’autres couches avant toute exposition.',
          'La vue cartographique charge la bibliothèque Mapbox dans le navigateur avec le jeton que vous fournissez ; ce que Mapbox reçoit n’a pas été vérifié.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du projet, pas des résultats d’audit. PromptQuorum n’a pas inspecté le trafic réseau et n’a pas examiné le code au-delà des fichiers cités dans cet article.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Photographes avec des bibliothèques RAW sur un serveur domestique** qui veulent parcourir et partager des dossiers sans déplacer de fichiers.',
          '**Foyers qui stockent leurs photos de famille sur un NAS** et veulent une galerie avec un dossier distinct par utilisateur.',
          '**Auto-hébergeurs qui préfèrent une galerie fondée sur les dossiers** à une plateforme dotée de recherche et d’étiquettes d’IA.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité de la reconnaissance faciale.** La précision, le comportement du regroupement et la vitesse n’ont pas été testés.',
          '**Écart avec la version.** La dernière version étiquetée date de juin 2024 et master a évolué ; l’écart avec la 2.4.0 n’a pas été comparé, et le README indique que PostgreSQL 18 sera la version recommandée pour la prochaine version.',
          '**Flux de données vers Mapbox.** Nous n’avons pas vérifié ce que la fonction de cartes envoie à Mapbox ni les conditions de Mapbox pour le jeton gratuit.',
          '**Consommation de ressources.** Aucun chiffre de RAM ou de processeur n’est publié, et l’utilisation réelle n’a pas été mesurée.',
          '**Expérience sur téléphone.** Aucune application mobile n’est indiquée ; le comportement de l’interface de navigateur sur téléphone n’a pas été testé.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'Trois autres outils de bibliothèque photo du répertoire reconnaissent aussi les visages ; ils se distinguent par ce qu’ils ajoutent.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[PhotoPrism](/fr/power-local-llm/photoprism-review)', 'Plateformes': 'Linux, macOS, Windows (Docker), web', 'Prix / licence': 'Gratuit + payant / AGPL-3.0', 'Différence clé': 'Ajoute des étiquettes d’IA et la recherche ; des abonnements payants existent' },
          { 'Application': '[Immich](/fr/power-local-llm/immich-review)', 'Plateformes': 'Serveur Linux, iOS, Android, web', 'Prix / licence': 'Gratuit / AGPL-3.0', 'Différence clé': 'Ajoute des applications de sauvegarde pour téléphone et la recherche intelligente' },
          { 'Application': '[Facet](/fr/power-local-llm/facet-review)', 'Plateformes': 'Linux, macOS, Windows, web', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Ajoute la notation et le tri des photos ; certains poids de modèle par défaut sont non commerciaux' },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Photoview modifie-t-il mes fichiers photo ?',
            a: 'Le README décrit la galerie comme un accès en lecture seule à vos médias, et les miniatures générées vont dans un dossier de cache distinct défini par PHOTOVIEW_MEDIA_CACHE.',
          },
          {
            q: 'Quelle base de données choisir ?',
            a: 'SQLite n’exige aucun service supplémentaire, mais offre les performances les plus faibles et ne passe pas à l’échelle. Le README désigne MariaDB comme choix par défaut et PostgreSQL comme généralement le plus rapide.',
          },
          {
            q: 'Comment mettre à jour Photoview ?',
            a: 'Récupérez la nouvelle image et redémarrez les conteneurs. Le README recommande de sauvegarder la base de données avant la mise à niveau et signale que les images ont migré vers le registre photoview/photoview sur Docker Hub ; les anciens fichiers compose doivent donc reprendre le nouveau nom d’image.',
          },
          {
            q: 'Où obtenir de l’aide ?',
            a: 'Le README renvoie vers un [serveur Discord](https://discord.gg/jQ392948u9) pour les questions d’installation et de développement, et le projet ne prend pas en charge Portainer ni d’autres couches au-dessus de Docker Compose.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Photoview est une galerie établie et développée ouvertement, pour ceux qui rangent leurs photos dans des dossiers sur leur propre serveur et veulent les parcourir, les partager et les trier par visage sans service cloud. En contrepartie, la dernière version étiquetée date de juin 2024, l’installation demande Docker et une base de données, la reconnaissance faciale est sa seule fonction d’IA, les cartes dépendent d’un jeton Mapbox et rien de tout cela n’a pu être testé ici. Elle convient aux auto-hébergeurs qui pensent en dossiers et font déjà tourner Docker ; qui veut une recherche par IA ou la sauvegarde du téléphone doit comparer les alternatives ci-dessus.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Photoview](https://photoview.github.io/) — aperçu des fonctions, consulté le 30 octobre 2026.',
          '[README de Photoview](https://github.com/photoview/photoview) — fonctions, plateformes, bases de données, installation et notes de sécurité, consulté le 30 octobre 2026.',
          '[Versions de Photoview](https://github.com/photoview/photoview/releases) — version 2.4.0, publiée le 23 juin 2024.',
          '[Code de détection des visages de Photoview](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) — bibliothèque de reconnaissance et paramètres d’environnement, consulté le 30 octobre 2026.',
          '[Photoview sur Docker Hub](https://hub.docker.com/r/photoview/photoview) — étiquettes d’image, consultées le 30 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de PhotoPrism](/fr/power-local-llm/photoprism-review) — une bibliothèque photo auto-hébergée avec étiquettes d’IA et reconnaissance faciale intégrées.',
          '[Test d’Immich](/fr/power-local-llm/immich-review) — une sauvegarde de photos auto-hébergée avec applications mobiles et recherche intelligente.',
          '[Répertoire de logiciels pour LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoview-review-hero-ja.webp',
    title: 'Photoviewレビュー：顔認識をローカルで行うセルフホスト型フォトギャラリー',
    seoTitle: 'Photoviewレビュー：顔認識対応のセルフホスト型ギャラリー',
    intro:
      'Photoviewは、セルフホストの個人サーバー向けに作られた無料のオープンソース・フォトギャラリーです。フォルダを指定すると写真や動画をスキャンし、ブラウザで閲覧できます。AI機能は、同じ人物の写真をまとめる顔認識だけです。このレビューはプロジェクトのウェブサイト、README、GitHubリポジトリ（2026年10月30日確認）に基づいており、PromptQuorumは実機での動作テストを行っていません。',
    metaDescription:
      'Photoviewのレビュー。自分のサーバーで動く顔認識を備えた無料のオープンソース・フォトギャラリーです。Dockerでの導入と、未検証の点を整理します。',
    twitterDescription:
      'Photoviewのレビュー。顔認識をローカルで行うセルフホスト型フォトギャラリーで、AGPL-3.0のもと無料です。情報源が裏付ける点と未確認の点を整理します。',
    audience:
      '自分のサーバーのフォルダに写真を保管し、情報源が確認している内容、プロジェクトが主張しているだけの内容、費用を知りたいセルフホスト利用者と写真家向けです。',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Photoview レビュー',
    targetKeywords: [
      'photoview レビュー',
      'photoview セルフホスト フォトギャラリー',
      'photoview 顔認識',
      'photoview docker compose',
      'google フォト 代替 セルフホスト',
      'photoview raw 写真',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Photoview（リリース2.4.0）はAGPLライセンスのフォトギャラリーで、Dockerで自分のサーバーに導入し、顔認識はサーバープロセス内で動作します。** 無料ですが、導入にはターミナルが必要です。ここに書いた内容はすべて、プロジェクト自身のウェブサイト、README、コードに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'Photoviewは写真をクラウドのAIサービスに送信しますか？',
        answer:
          '確認したコードでは送信しません。顔認識はオープンソースのライブラリgo-faceとリポジトリ内のモデルファイルを使い、サーバー自身のスキャナーが呼び出します。関与する外部サービスは、任意の地図機能だけです（「データの流れとプライバシー」を参照）。',
        bullets: [
          'サーバー上のディレクトリがアルバムになり、各ユーザーは1つのフォルダに紐づきます。',
          'RAWファイルとEXIFデータに対応し、動画はウェブ再生向けに最適化されます。',
          'サムネイルを事前に生成するため、大きなライブラリでも素早く閲覧できます。',
          '動画のハードウェアアクセラレーションは任意です。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Photoviewとは', anchor: 'what-is-photoview' },
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
            text: 'Photoviewは、サーバー上のフォルダをスキャンし、そこで動くモデルで写真を顔ごとにまとめる、オープンソースのセルフホスト型フォトギャラリーです。',
          },
          {
            type: 'plain-terms',
            text: '自分で管理するパソコンやNASに導入し、写真フォルダを指定すれば、クラウドの写真サービスを使わずに、どのブラウザからでも閲覧・共有できます。',
          },
        ],
        items: [
          'メンテナンス：最新のタグ付きリリースは2024年6月23日の2.4.0ですが、masterブランチには2026年10月29日にコミットがあり、Docker Hubのタグも同日に再ビルドされているため、放置プロジェクトの警告は不要です。',
          '導入：データベースと環境ファイルを使うDocker Composeで、デスクトップ用インストーラーやアプリストア版は掲載されていません。',
          'AI：機能は顔認識のみで、READMEとウェブサイトにラベル付けやセマンティック検索の記載はありません。',
          '費用：AGPL-3.0で無料。READMEとウェブサイトに有料エディションの記載はありません。',
          '利用方法：ブラウザ画面のみで、モバイルアプリは掲載されていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューはプロジェクトのウェブサイト、README、GitHubリポジトリ（2026年10月30日確認）に基づいています。PromptQuorumはPhotoviewを導入していないため、顔認識の精度、速度、リソース使用量は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-photoview',
        title: 'Photoviewとは',
        content: [
          '**Photoviewは写真家向けのセルフホスト型ウェブギャラリーで、スキャナーがサーバー上のフォルダを読み取り、ディレクトリをアルバムに変換します。** プロジェクト自身は「セルフホストの個人サーバー向けフォトギャラリー」と称しており、コードはAGPL-3.0でGitHubに公開されています。',
          '各ユーザーはサーバー上のパスとともに作成され、そのパス以下のメディアだけが見えます。READMEには公開デモサイトへのリンクがあります。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Photoviewは自分で導入するサーバーです。文書化されている方法はDocker Composeで、デスクトップ用やスマートフォン用のインストーラーはありません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'Docker Compose', '入手方法': '[Composeの例](https://github.com/photoview/photoview/tree/master/docker-compose%20example)：.env、composeファイル、Makefileをコピーして編集し、make allを実行します' },
          { '項目': 'その他のプラットフォーム', '入手方法': 'READMEにはArch Linux AUR、NixOS、Unraid、YunoHost、TrueNAS、EmbassyOSが挙げられていますが、プロジェクトのサポートは限定的です' },
          { '項目': '価格', '入手方法': '無料、AGPL-3.0、セルフホスト' },
          { '項目': 'ウェブサイト', '入手方法': '[photoview.github.io](https://photoview.github.io/)' },
          { '項目': 'プライバシーポリシー', '入手方法': 'ウェブサイトにもREADMEにも、プライバシーポリシーのページは見つかりませんでした' },
          { '項目': 'ソースコード', '入手方法': '[github.com/photoview/photoview](https://github.com/photoview/photoview)' },
          { '項目': '公開デモ', '入手方法': '[photos.qpqp.dk](https://photos.qpqp.dk/)（ログイン情報はREADMEに記載）' },
        ],
        note: '確認したバージョン：2024年6月23日公開のリリース2.4.0で、最新のタグ付きリリースです。GitHubにはダウンロード用ファイルが掲載されていません。masterブランチには2026年10月29日までのコミットがあり、[Docker Hub](https://hub.docker.com/r/photoview/photoview)のlatestと2.4.0のタグも同日が最終更新でした。ターミナルとDockerが必要です。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**READMEにはRAMやCPUの最小要件の記載はなく、対応プラットフォーム、データベース、Dockerのバージョン範囲が示されています。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          { '項目': '実行環境', '情報源の記載': '過去1年以内にリリースされたDocker Engine。Debian 12または13、Ubuntu LTSおよび新しい短期サポート版' },
          { '項目': 'データベース', '情報源の記載': 'SQLite、MariaDB、PostgreSQL 17または18' },
          { '項目': 'メディア処理', '情報源の記載': 'RAW処理と動画処理は、環境設定でそれぞれ無効にできます' },
          { '項目': '動画アクセラレーション', '情報源の記載': '任意でqsv、vaapi、nvenc。プロジェクトが検証したのはIntelチップでのqsvのみです' },
        ],
        note: 'これらはREADMEの記載です。PromptQuorumはメモリ、CPU、インデックス作成時間を測定していません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はREADMEのDockerガイドに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'Dockerを導入する',
            whyItMatters: '写真を保管するサーバーにDockerとDocker Composeをインストールします。',
          },
          {
            title: 'サンプルファイルをコピーする',
            whyItMatters: 'Composeのサンプルフォルダからファイルをダウンロードし、.env、docker-compose.yml、Makefileにリネームして、パスとデータベースに合わせて編集します。',
          },
          {
            title: 'メディアを読み取り可能にして起動する',
            whyItMatters: 'コンテナがメディアフォルダを読めるようにmake readableを実行し、続けてmake allを実行します。',
          },
          {
            title: '管理者を作成してスキャンする',
            whyItMatters: 'ポート8000を開き、ユーザー名、パスワード、写真のパス（既定は/photos）をセットアップウィザードで設定し、設定画面のScan Allを実行します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下はすべてプロジェクトのウェブサイトまたはREADMEの記載で、PromptQuorumは動作を検証していません。**',
        ],
        items: [
          '**共有。** アルバムや個別のメディアを公開リンクで共有でき、パスワード保護も任意で設定できます。',
          '**地図。** EXIFデータにGPS座標がある写真は地図に表示できます。サンプル設定によると、自分で作成する無料のMapboxアクセストークンが必要です。',
          '**アクセス制御。** READMEによると、メディアファイルはCookieトークンで保護され、パスワードはハッシュ化され、APIは厳格なCORSポリシーを採用しています。',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI機能と実行場所',
        content: [
          '**プロジェクトが挙げるAI機能は顔認識のみで、go-faceライブラリを使ってPhotoviewサーバー内で動作します。**',
        ],
        items: [
          '**検出とグループ化。** READMEによると、スキャナーは写真から顔を検出し、同じ人物の写真をまとめます。コードはdlib用のオープンソースのGoラッパーであるgo-faceを利用しています。',
          '**モデルファイル。** 顔検出、ランドマーク、認識用のdlibモデルファイル3つが、リポジトリのdata/modelsフォルダにあり、パスは変更できます。',
          '**実行場所。** [顔検出のコード](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection)はローカルのライブラリを直接呼び出しており、確認したファイルにネットワークリクエストはありません。',
          '**無効化。** PHOTOVIEW_DISABLE_FACE_RECOGNITIONを1に設定すると、この機能は実行されません。',
        ],
        note: 'これらはREADMEとコードの記載です。PromptQuorumは認識の速度計測もテストも行っていません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**Photoviewはセルフホスト型なので、写真を共有したり地図を有効にしたりしない限り、写真は自分で運用するサーバーから出ません。** READMEは、基本的なユーザー認証だけではインターネット上の悪意ある攻撃者から非公開のメディアを守るには不十分だと警告し、公開前にファイアウォール、VPN、リバースプロキシなどを組み合わせるよう勧めています。',
          '地図表示では、ブラウザがMapboxライブラリを読み込み、利用者が用意したトークンを使います。Mapboxが何を受け取るかは確認していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクト自身の説明であり、監査結果ではありません。PromptQuorumはネットワーク通信を調べておらず、コードもこの記事で挙げたファイル以外は確認していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**自宅サーバーにRAWライブラリを置く写真家**で、ファイルを移動せずにフォルダを閲覧・共有したい人。',
          '**家族の写真をNASに保管している家庭**で、ユーザーごとに別フォルダを持つ1つのギャラリーが欲しい人。',
          '**AI検索やラベル付けのあるプラットフォームより、フォルダ中心のギャラリーを好むセルフホスト利用者。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**顔認識の品質。** 精度、グループ化の挙動、速度はテストしていません。',
          '**リリースとの差。** 最新のタグ付きリリースは2024年6月のもので、masterはその後も進んでいます。2.4.0とどの程度違うかは比較しておらず、READMEは次のリリースで推奨されるバージョンがPostgreSQL 18だとしています。',
          '**Mapboxへのデータの流れ。** 地図機能がMapboxに何を送るか、無料トークンに対するMapboxの規約は確認していません。',
          '**リソース使用量。** RAMやCPUの公表値はなく、実際の使用量も測定していません。',
          '**スマートフォンでの使い心地。** モバイルアプリは掲載されておらず、ブラウザ画面のスマートフォンでの動作はテストしていません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、顔認識を備えたフォトライブラリが他に3つあります。違いは、それ以外に何を加えるかです。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[PhotoPrism](/ja/power-local-llm/photoprism-review)', '対応プラットフォーム': 'Linux、macOS、Windows（Docker）、ウェブ', '価格／ライセンス': '無料＋有料／AGPL-3.0', '主な違い': 'AIラベルと検索を追加。有料メンバーシップあり' },
          { 'アプリ': '[Immich](/ja/power-local-llm/immich-review)', '対応プラットフォーム': 'Linuxサーバー、iOS、Android、ウェブ', '価格／ライセンス': '無料／AGPL-3.0', '主な違い': 'スマートフォンのバックアップアプリとスマート検索を追加' },
          { 'アプリ': '[Facet](/ja/power-local-llm/facet-review)', '対応プラットフォーム': 'Linux、macOS、Windows、ウェブ', '価格／ライセンス': '無料／MIT', '主な違い': '写真のスコアリングと選別を追加。既定のモデル重みの一部は商用利用不可' },
        ],
        note: '各アプリの現在の価格、ライセンス、対応プラットフォームは、それぞれの公式ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Photoviewは写真ファイルを変更しますか？',
            a: 'READMEはこのギャラリーをメディアへの読み取り専用アクセスと説明しており、生成されたサムネイルはPHOTOVIEW_MEDIA_CACHEで指定する別のキャッシュフォルダに保存されます。',
          },
          {
            q: 'どのデータベースを使うべきですか？',
            a: 'SQLiteは追加サービスが不要ですが、性能が最も低く、スケールしません。READMEはMariaDBを既定の選択肢、PostgreSQLを一般に最速としています。',
          },
          {
            q: 'Photoviewを更新するには？',
            a: '新しいイメージを取得してコンテナを再起動します。READMEはアップグレード前にデータベースのバックアップを取るよう促し、イメージがDocker Hubのphotoview/photoviewレジストリに移ったため、古いcomposeファイルは新しいイメージ名に直す必要があると説明しています。',
          },
          {
            q: 'どこでサポートを受けられますか？',
            a: 'READMEはセットアップや開発の質問先として[Discordサーバー](https://discord.gg/jQ392948u9)を案内しています。Portainerなど、Docker Composeの上に重ねる仕組みはプロジェクトの対象外です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Photoviewは、自分のサーバーのフォルダに写真を置き、クラウドサービスを使わずに閲覧・共有し、顔ごとに整理したい人向けの、実績あるオープン開発のギャラリーです。一方で、最新のタグ付きリリースは2024年6月で、導入にはDockerとデータベースが必要です。AI機能は顔認識のみ、地図はMapboxトークンに依存し、いずれも今回は検証できませんでした。すでにDockerを運用しているフォルダ中心のセルフホスト利用者に向いています。AI検索やスマートフォンのバックアップが必要なら、上の代替ツールと比較してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Photoviewのウェブサイト](https://photoview.github.io/) — 機能の概要（2026年10月30日確認）。',
          '[PhotoviewのREADME](https://github.com/photoview/photoview) — 機能、プラットフォーム、データベース、導入手順、セキュリティ上の注意（2026年10月30日確認）。',
          '[Photoviewのリリース](https://github.com/photoview/photoview/releases) — リリース2.4.0（2024年6月23日公開）。',
          '[Photoviewの顔検出コード](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) — 認識ライブラリと環境設定（2026年10月30日確認）。',
          '[Docker HubのPhotoview](https://hub.docker.com/r/photoview/photoview) — イメージのタグ（2026年10月30日確認）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PhotoPrismレビュー](/ja/power-local-llm/photoprism-review) — AIラベル付けと顔認識を内蔵したセルフホスト型フォトライブラリ。',
          '[Immichレビュー](/ja/power-local-llm/immich-review) — スマートフォンアプリとスマート検索を備えたセルフホスト型の写真バックアップ。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoview-review-hero-pt.webp',
    title: 'Análise do Photoview: galeria de fotos auto-hospedada com reconhecimento facial local',
    seoTitle: 'Análise do Photoview: galeria com reconhecimento facial',
    intro:
      'O Photoview é uma galeria de fotos gratuita e de código aberto para servidores pessoais auto-hospedados: você aponta para uma pasta, ele varre as imagens e os vídeos e você os navega no navegador. Sua única função de IA é um reconhecimento facial que agrupa fotos da mesma pessoa. Esta análise se baseia no site, no README e no repositório do GitHub do projeto, consultados em 30 de outubro de 2026; a PromptQuorum não testou o software na prática.',
    metaDescription:
      'Análise do Photoview: galeria de fotos gratuita e de código aberto para o seu servidor, com reconhecimento facial local. Docker e o que não foi testado.',
    twitterDescription:
      'Análise do Photoview: galeria de fotos auto-hospedada com reconhecimento facial local, gratuita sob AGPL-3.0. O que as fontes confirmam e o que fica em aberto.',
    audience:
      'Quem faz auto-hospedagem e fotógrafos que guardam as imagens em pastas no próprio servidor e querem saber o que as fontes confirmam, o que o projeto apenas afirma e quanto custa.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise Photoview',
    targetKeywords: [
      'análise photoview',
      'photoview galeria de fotos auto-hospedada',
      'photoview reconhecimento facial',
      'photoview docker compose',
      'alternativa ao google fotos auto-hospedada',
      'photoview fotos raw',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**O Photoview (versão 2.4.0) é uma galeria de fotos com licença AGPL que você instala no próprio servidor com Docker, com reconhecimento facial executado dentro do processo do servidor.** Ele é gratuito e a instalação exige um terminal. Tudo aqui vem do site, do README e do código do próprio projeto.',
    quickAnswerTop: {
      pt: {
        question: 'O Photoview envia minhas fotos para um serviço de IA na nuvem?',
        answer:
          'Não no código que revisamos: o reconhecimento facial usa a biblioteca de código aberto go-face com arquivos de modelo do repositório, chamada pelo próprio scanner do servidor. O recurso opcional de mapas é o único serviço externo envolvido (veja Fluxo de dados e privacidade).',
        bullets: [
          'Os diretórios do servidor viram álbuns, e cada usuário fica ligado a uma pasta.',
          'Há suporte a arquivos RAW e dados EXIF, e os vídeos são otimizados para reprodução na web.',
          'As miniaturas são geradas com antecedência para que bibliotecas grandes continuem rápidas de navegar.',
          'A aceleração de hardware para vídeo é opcional.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Photoview?', anchor: 'what-is-photoview' },
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
            text: 'O Photoview é uma galeria de fotos de código aberto e auto-hospedada que varre pastas do seu servidor e agrupa as fotos por rosto com um modelo executado ali mesmo.',
          },
          {
            type: 'plain-terms',
            text: 'Você o instala em um computador ou NAS sob seu controle, aponta para as pastas de imagens e as navega e compartilha em qualquer navegador, sem um serviço de fotos na nuvem.',
          },
        ],
        items: [
          'Manutenção: a última versão marcada é a 2.4.0, de 23 de junho de 2024, mas a branch master recebeu commits em 29 de outubro de 2026 e as tags do Docker Hub foram reconstruídas nesse dia, então não há aviso de projeto abandonado.',
          'Instalação: Docker Compose com banco de dados e arquivo de ambiente; não há instalador de desktop nem app de loja listado.',
          'IA: uma única função, o reconhecimento facial; o README e o site não mencionam etiquetagem nem busca semântica.',
          'Custo: gratuito sob AGPL-3.0; nenhuma edição paga aparece no README nem no site.',
          'Acesso: apenas interface de navegador; nenhum app móvel está listado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, no README e no repositório do GitHub do projeto, consultados em 30 de outubro de 2026. A PromptQuorum não instalou o Photoview, então precisão, velocidade e uso de recursos do reconhecimento facial não foram avaliados.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoview',
        title: 'O que é o Photoview?',
        content: [
          '**O Photoview é uma galeria web auto-hospedada feita para fotógrafos; o scanner lê uma pasta do servidor e transforma os diretórios em álbuns.** O projeto se descreve como uma «galeria de fotos para servidores pessoais auto-hospedados», e o código está no GitHub sob a AGPL-3.0.',
          'Cada usuário é criado junto com um caminho no servidor e só vê a mídia que está abaixo dele. O README aponta para um site de demonstração público.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Photoview é um servidor que você mesmo instala; o caminho documentado é o Docker Compose, e não há instalador para desktop nem para celular.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Docker Compose', 'Onde obter': '[Exemplo de Compose](https://github.com/photoview/photoview/tree/master/docker-compose%20example): copie o .env, o arquivo compose e o Makefile, edite-os e execute make all' },
          { 'Opção': 'Outras plataformas', 'Onde obter': 'O README cita Arch Linux AUR, NixOS, Unraid, YunoHost, TrueNAS e EmbassyOS, com suporte limitado do projeto' },
          { 'Opção': 'Preço', 'Onde obter': 'Gratuito, AGPL-3.0, auto-hospedado' },
          { 'Opção': 'Site', 'Onde obter': '[photoview.github.io](https://photoview.github.io/)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': 'Nenhuma página de política de privacidade foi encontrada no site nem no README' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/photoview/photoview](https://github.com/photoview/photoview)' },
          { 'Opção': 'Demo pública', 'Onde obter': '[photos.qpqp.dk](https://photos.qpqp.dk/) com o login indicado no README' },
        ],
        note: 'Versão analisada: a 2.4.0, publicada em 23 de junho de 2024, a versão marcada mais recente; o GitHub não lista arquivos para download dela. A branch master teve commits até 29 de outubro de 2026, e as tags latest e 2.4.0 no [Docker Hub](https://hub.docker.com/r/photoview/photoview) foram atualizadas pela última vez nesse dia. São necessários um terminal e o Docker.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**O README não informa mínimo de RAM nem de CPU; ele cita plataformas compatíveis, bancos de dados e uma janela para a versão do Docker.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          { 'Item': 'Ambiente de execução', 'O que dizem as fontes': 'Docker Engine lançado no último ano; Debian 12 ou 13, ou Ubuntu LTS e versões intermediárias recentes' },
          { 'Item': 'Banco de dados', 'O que dizem as fontes': 'SQLite, MariaDB ou PostgreSQL 17 ou 18' },
          { 'Item': 'Processamento de mídia', 'O que dizem as fontes': 'O processamento de RAW e de vídeo pode ser desativado separadamente por uma variável de ambiente' },
          { 'Item': 'Aceleração de vídeo', 'O que dizem as fontes': 'Opcional: qsv, vaapi ou nvenc; o projeto só verificou qsv em um chip Intel' },
        ],
        note: 'Estas são afirmações do README; a PromptQuorum não mediu memória, CPU nem tempo de indexação.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem o guia de Docker do README; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale o Docker',
            whyItMatters: 'Instale o Docker e o Docker Compose no servidor que guarda suas fotos.',
          },
          {
            title: 'Copie os arquivos de exemplo',
            whyItMatters: 'Baixe os arquivos da pasta de exemplo do Compose, renomeie-os para .env, docker-compose.yml e Makefile e edite-os com seus caminhos e seu banco de dados.',
          },
          {
            title: 'Torne a mídia legível e inicie',
            whyItMatters: 'Execute make readable para que o contêiner consiga ler suas pastas de mídia e, em seguida, make all.',
          },
          {
            title: 'Crie o administrador e faça a varredura',
            whyItMatters: 'Abra a porta 8000, conclua o assistente com nome de usuário, senha e caminho das fotos (padrão /photos) e use Scan All em Configurações.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Tudo abaixo vem do site ou do README do projeto; a PromptQuorum não testou nada disso.**',
        ],
        items: [
          '**Compartilhamento.** Álbuns e itens individuais podem ser compartilhados por um link público, opcionalmente protegido por senha.',
          '**Mapas.** Fotos com coordenadas GPS nos dados EXIF podem ser exibidas em um mapa; segundo a configuração de exemplo, isso exige um token de acesso gratuito do Mapbox que você mesmo cria.',
          '**Controle de acesso.** Segundo o README, os arquivos de mídia são protegidos por um token em cookie, as senhas são armazenadas com hash e a API usa uma política CORS estrita.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Recursos de IA e onde eles rodam',
        content: [
          '**O reconhecimento facial é a única função de IA que o projeto lista e roda dentro do servidor do Photoview com a biblioteca go-face.**',
        ],
        items: [
          '**Detecção e agrupamento.** O scanner encontra rostos nas fotos e agrupa as da mesma pessoa, segundo o README; o código se apoia no go-face, um wrapper de código aberto em Go para o dlib.',
          '**Arquivos de modelo.** Três arquivos de modelo do dlib, para detecção de rostos, pontos de referência e reconhecimento, ficam na pasta data/models do repositório, e o caminho é configurável.',
          '**Onde roda.** O [código de detecção de rostos](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) chama a biblioteca local diretamente, sem nenhuma requisição de rede nos arquivos que lemos.',
          '**Desativar.** Definir PHOTOVIEW_DISABLE_FACE_RECOGNITION como 1 faz o recurso ser ignorado.',
        ],
        note: 'Estas são afirmações do README e do código; a PromptQuorum não mediu o tempo nem testou o reconhecimento.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**O Photoview é auto-hospedado, então as fotos ficam no servidor que você opera, a menos que você as compartilhe ou ative os mapas.** O README avisa que a autenticação básica de usuários não basta para proteger mídia privada de agentes mal-intencionados na internet e sugere firewall, VPN, proxy reverso ou camadas semelhantes antes de expô-lo.',
          'A visualização de mapa carrega a biblioteca do Mapbox no navegador com o token que você fornece; o que o Mapbox recebe não foi verificado.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do projeto, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede e não revisou o código além dos arquivos citados neste artigo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Fotógrafos com bibliotecas RAW em um servidor doméstico** que querem navegar e compartilhar pastas sem mover arquivos.',
          '**Famílias que guardam as fotos em um NAS** e querem uma galeria com uma pasta separada por usuário.',
          '**Quem faz auto-hospedagem e prefere uma galeria baseada em pastas** a uma plataforma com busca e etiquetas de IA.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade do reconhecimento facial.** Precisão, comportamento do agrupamento e velocidade não foram testados.',
          '**Distância em relação ao release.** A versão marcada mais recente é de junho de 2024 e a master avançou; não comparamos o quanto ela difere da 2.4.0, e o README diz que o PostgreSQL 18 é a versão recomendada para o próximo release.',
          '**Fluxo de dados para o Mapbox.** Não verificamos o que o recurso de mapas envia ao Mapbox nem os termos do Mapbox para o token gratuito.',
          '**Uso de recursos.** Não há números publicados de RAM ou CPU, e o uso real não foi medido.',
          '**Experiência no celular.** Nenhum app móvel está listado; não testamos como a interface de navegador se comporta em telefones.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'Outras três ferramentas de biblioteca de fotos do diretório também reconhecem rostos; elas diferem no que acrescentam.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[PhotoPrism](/pt/power-local-llm/photoprism-review)', 'Plataformas': 'Linux, macOS, Windows (Docker), web', 'Preço / licença': 'Grátis + pago / AGPL-3.0', 'Diferença principal': 'Acrescenta etiquetas de IA e busca; existem assinaturas pagas' },
          { 'App': '[Immich](/pt/power-local-llm/immich-review)', 'Plataformas': 'Servidor Linux, iOS, Android, web', 'Preço / licença': 'Grátis / AGPL-3.0', 'Diferença principal': 'Acrescenta apps de backup para celular e busca inteligente' },
          { 'App': '[Facet](/pt/power-local-llm/facet-review)', 'Plataformas': 'Linux, macOS, Windows, web', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Acrescenta pontuação e seleção de fotos; alguns pesos de modelo padrão não são de uso comercial' },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Photoview altera meus arquivos de fotos?',
            a: 'O README descreve a galeria como acesso somente leitura à sua mídia, e as miniaturas geradas vão para uma pasta de cache separada, definida por PHOTOVIEW_MEDIA_CACHE.',
          },
          {
            q: 'Qual banco de dados devo usar?',
            a: 'O SQLite não exige serviço extra, mas tem o menor desempenho e não escala. O README indica o MariaDB como escolha padrão e o PostgreSQL como, em geral, o mais rápido.',
          },
          {
            q: 'Como atualizo o Photoview?',
            a: 'Baixe a nova imagem e reinicie os contêineres. O README recomenda fazer backup do banco de dados antes de atualizar e avisa que as imagens migraram para o registro photoview/photoview no Docker Hub, então arquivos compose antigos precisam do novo nome de imagem.',
          },
          {
            q: 'Onde posso conseguir ajuda?',
            a: 'O README indica um [servidor do Discord](https://discord.gg/jQ392948u9) para dúvidas de instalação e desenvolvimento, e o projeto não dá suporte ao Portainer nem a outras camadas sobre o Docker Compose.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Photoview é uma galeria consolidada e de desenvolvimento aberto para quem guarda fotos em pastas no próprio servidor e quer navegar, compartilhar e organizar por rosto sem um serviço de nuvem. Em contrapartida, a última versão marcada é de junho de 2024, a instalação exige Docker e um banco de dados, o reconhecimento facial é a única função de IA, os mapas dependem de um token do Mapbox e nada disso pôde ser testado aqui. Serve para quem faz auto-hospedagem, pensa em pastas e já usa Docker; quem quiser busca por IA ou backup do celular deve comparar as alternativas acima.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Photoview](https://photoview.github.io/) — visão geral dos recursos, consultado em 30 de outubro de 2026.',
          '[README do Photoview](https://github.com/photoview/photoview) — recursos, plataformas, bancos de dados, instalação e notas de segurança, consultado em 30 de outubro de 2026.',
          '[Releases do Photoview](https://github.com/photoview/photoview/releases) — versão 2.4.0, publicada em 23 de junho de 2024.',
          '[Código de detecção de rostos do Photoview](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) — biblioteca de reconhecimento e variáveis de ambiente, consultado em 30 de outubro de 2026.',
          '[Photoview no Docker Hub](https://hub.docker.com/r/photoview/photoview) — tags de imagem, consultadas em 30 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PhotoPrism](/pt/power-local-llm/photoprism-review) — uma biblioteca de fotos auto-hospedada com etiquetas de IA e reconhecimento facial integrados.',
          '[Análise do Immich](/pt/power-local-llm/immich-review) — um backup de fotos auto-hospedado com apps para celular e busca inteligente.',
          '[Diretório de software para LLMs locais](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoview-review-hero-ar.webp',
    title: 'مراجعة Photoview: معرض صور مستضاف ذاتيًا مع تعرّف محلي على الوجوه',
    seoTitle: 'مراجعة Photoview: معرض صور مستضاف مع تعرّف على الوجوه',
    intro:
      'Photoview معرض صور مجاني ومفتوح المصدر للخوادم الشخصية المستضافة ذاتيًا: تحدّد له مجلدًا فيفحص الصور ومقاطع الفيديو، وتتصفحها من المتصفح. ميزة الذكاء الاصطناعي الوحيدة فيه هي التعرّف على الوجوه الذي يجمع صور الشخص نفسه معًا. تستند هذه المراجعة إلى موقع المشروع وملف README ومستودع GitHub، وقد اطُّلع عليها في 30 أكتوبر 2026؛ ولم تختبر PromptQuorum البرنامج عمليًا.',
    metaDescription:
      'مراجعة Photoview: معرض صور مجاني ومفتوح المصدر لخادمك الخاص مع تعرّف على الوجوه يعمل على ذلك الخادم نفسه. التثبيت عبر Docker وما لم يُختبر هنا.',
    twitterDescription:
      'مراجعة Photoview: معرض صور مستضاف ذاتيًا مع تعرّف محلي على الوجوه، مجاني بترخيص AGPL-3.0. ما تؤكده المصادر وما يبقى مفتوحًا.',
    audience:
      'المستضيفون الذاتيون والمصورون الذين يحفظون صورهم في مجلدات على خادمهم الخاص ويريدون معرفة ما تؤكده المصادر وما يكتفي المشروع بادعائه وكم يكلّف.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Photoview',
    targetKeywords: [
      'مراجعة photoview',
      'photoview معرض صور مستضاف ذاتيا',
      'photoview التعرف على الوجوه',
      'photoview docker compose',
      'بديل صور جوجل مستضاف ذاتيا',
      'photoview صور raw',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Photoview (الإصدار 2.4.0) معرض صور بترخيص AGPL تثبّته على خادمك الخاص عبر Docker، ويعمل التعرّف على الوجوه داخل عملية الخادم نفسها.** هو مجاني، ويتطلب التثبيت استخدام الطرفية. كل ما يرد هنا مصدره موقع المشروع وملف README والشيفرة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يرسل Photoview صوري إلى خدمة ذكاء اصطناعي سحابية؟',
        answer:
          'ليس في الشيفرة التي فحصناها: يستخدم التعرّف على الوجوه مكتبة go-face مفتوحة المصدر مع ملفات نماذج من المستودع، ويستدعيها ماسح الخادم نفسه. وميزة الخرائط الاختيارية هي الخدمة الخارجية الوحيدة المعنية (انظر تدفق البيانات والخصوصية).',
        bullets: [
          'تتحول المجلدات الموجودة على الخادم إلى ألبومات، ويرتبط كل مستخدم بمجلد واحد.',
          'تُدعم ملفات RAW وبيانات EXIF، وتُحسَّن مقاطع الفيديو للتشغيل على الويب.',
          'تُنشأ الصور المصغّرة مسبقًا ليبقى تصفح المكتبات الكبيرة سريعًا.',
          'التسريع العتادي للفيديو اختياري.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Photoview؟', anchor: 'what-is-photoview' },
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
            text: 'Photoview معرض صور مفتوح المصدر ومستضاف ذاتيًا يفحص المجلدات على خادمك ويجمع الصور حسب الوجوه بنموذج يعمل هناك.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته على جهاز كمبيوتر أو NAS تتحكم فيه، وتحدّد له مجلدات الصور، ثم تتصفحها وتشاركها من أي متصفح دون الحاجة إلى خدمة صور سحابية.',
          },
        ],
        items: [
          'الصيانة: آخر إصدار موسوم هو 2.4.0 بتاريخ 23 يونيو 2024، لكن فرع master تلقّى إيداعات في 29 أكتوبر 2026 وأُعيد بناء وسوم Docker Hub في اليوم نفسه، لذلك لا ينطبق تحذير المشروع المتوقف.',
          'التثبيت: Docker Compose مع قاعدة بيانات وملف بيئة؛ ولا يُذكر مثبّت لسطح المكتب ولا تطبيق في متجر.',
          'الذكاء الاصطناعي: ميزة واحدة هي التعرّف على الوجوه؛ ولا يذكر README ولا الموقع وسم الصور ولا البحث الدلالي.',
          'التكلفة: مجاني بترخيص AGPL-3.0؛ ولا تظهر نسخة مدفوعة في README ولا في الموقع.',
          'الوصول: واجهة متصفح فقط؛ ولا يُذكر تطبيق للجوال.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى موقع المشروع وملف README ومستودع GitHub، وقد اطُّلع عليها في 30 أكتوبر 2026. لم تثبّت PromptQuorum برنامج Photoview، لذلك لم تُقيَّم دقة التعرّف على الوجوه ولا سرعته ولا استهلاكه للموارد.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoview',
        title: 'ما هو Photoview؟',
        content: [
          '**Photoview معرض ويب مستضاف ذاتيًا صُمّم للمصورين؛ يقرأ ماسحه مجلدًا على الخادم ويحوّل المجلدات الفرعية إلى ألبومات.** يصف المشروع نفسه بأنه «معرض صور للخوادم الشخصية المستضافة ذاتيًا»، والشيفرة على GitHub بترخيص AGPL-3.0.',
          'يُنشأ كل مستخدم مع مسار على الخادم، ولا يرى إلا الوسائط الموجودة تحته. ويشير README إلى موقع تجريبي عام.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Photoview خادم تثبّته بنفسك؛ والطريقة الموثّقة هي Docker Compose، ولا يوجد مثبّت لسطح المكتب أو للجوال.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'Docker Compose', 'مصدر الحصول عليه': '[مثال Compose](https://github.com/photoview/photoview/tree/master/docker-compose%20example): انسخ ملف .env وملف compose وملف Makefile، ثم عدّلها ونفّذ make all' },
          { 'الخيار': 'منصات أخرى', 'مصدر الحصول عليه': 'يذكر README كلًّا من Arch Linux AUR وNixOS وUnraid وYunoHost وTrueNAS وEmbassyOS، مع دعم محدود من المشروع' },
          { 'الخيار': 'السعر', 'مصدر الحصول عليه': 'مجاني، AGPL-3.0، مستضاف ذاتيًا' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[photoview.github.io](https://photoview.github.io/)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': 'لم نعثر على صفحة لسياسة الخصوصية في الموقع ولا في README' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/photoview/photoview](https://github.com/photoview/photoview)' },
          { 'الخيار': 'عرض تجريبي عام', 'مصدر الحصول عليه': '[photos.qpqp.dk](https://photos.qpqp.dk/) مع بيانات الدخول المذكورة في README' },
        ],
        note: 'الإصدار الذي رُوجع: 2.4.0، نُشر في 23 يونيو 2024، وهو أحدث إصدار موسوم؛ ولا يعرض GitHub ملفات قابلة للتنزيل له. وصلت إيداعات فرع master إلى 29 أكتوبر 2026، وكان آخر دفع لوسمَي latest و2.4.0 على [Docker Hub](https://hub.docker.com/r/photoview/photoview) في اليوم نفسه. يلزم وجود طرفية وDocker.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**لا يذكر README حدًّا أدنى للذاكرة أو المعالج؛ بل يذكر المنصات المدعومة وقواعد البيانات ونافذة زمنية لإصدار Docker.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          { 'البند': 'بيئة التشغيل', 'ما تقوله المصادر': 'Docker Engine صدر خلال العام الأخير؛ وDebian 12 أو 13، أو Ubuntu LTS والإصدارات القصيرة الأحدث' },
          { 'البند': 'قاعدة البيانات', 'ما تقوله المصادر': 'SQLite أو MariaDB أو PostgreSQL 17 أو 18' },
          { 'البند': 'معالجة الوسائط', 'ما تقوله المصادر': 'يمكن إيقاف معالجة RAW ومعالجة الفيديو كلٌّ على حدة عبر إعداد بيئة' },
          { 'البند': 'تسريع الفيديو', 'ما تقوله المصادر': 'اختياري: qsv أو vaapi أو nvenc؛ ولم يتحقق المشروع إلا من qsv على شريحة Intel' },
        ],
        note: 'هذه أقوال README؛ ولم تقِس PromptQuorum الذاكرة ولا المعالج ولا زمن الفهرسة.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات دليل Docker في README؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت Docker',
            whyItMatters: 'ثبّت Docker وDocker Compose على الخادم الذي يحفظ صورك.',
          },
          {
            title: 'انسخ الملفات النموذجية',
            whyItMatters: 'نزّل الملفات من مجلد مثال Compose، وأعد تسميتها إلى .env وdocker-compose.yml وMakefile، وعدّلها بحسب مساراتك وقاعدة بياناتك.',
          },
          {
            title: 'اجعل الوسائط قابلة للقراءة وابدأ التشغيل',
            whyItMatters: 'نفّذ make readable لتتمكن الحاوية من قراءة مجلدات الوسائط، ثم نفّذ make all.',
          },
          {
            title: 'أنشئ المسؤول وابدأ الفحص',
            whyItMatters: 'افتح المنفذ 8000، وأكمل معالج الإعداد باسم مستخدم وكلمة مرور ومسار الصور (الافتراضي /photos)، ثم استخدم Scan All من الإعدادات.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل بند أدناه مصدره موقع المشروع أو README؛ ولم تختبر PromptQuorum أيًّا منها.**',
        ],
        items: [
          '**المشاركة.** يمكن مشاركة الألبومات والعناصر المفردة برابط عام، مع حماية اختيارية بكلمة مرور.',
          '**الخرائط.** يمكن عرض الصور التي تحمل إحداثيات GPS في بيانات EXIF على خريطة؛ وبحسب الإعداد النموذجي يتطلب ذلك رمز وصول مجانيًا من Mapbox تنشئه بنفسك.',
          '**التحكم في الوصول.** بحسب README، تُحمى ملفات الوسائط برمز في ملف تعريف ارتباط، وتُخزَّن كلمات المرور مجزّأة، وتطبّق واجهة API سياسة CORS صارمة.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'ميزات الذكاء الاصطناعي وأين تعمل',
        content: [
          '**التعرّف على الوجوه هو ميزة الذكاء الاصطناعي الوحيدة التي يذكرها المشروع، ويعمل داخل خادم Photoview باستخدام مكتبة go-face.**',
        ],
        items: [
          '**الكشف والتجميع.** بحسب README، يعثر الماسح على الوجوه في الصور ويجمع صور الشخص نفسه معًا؛ وتعتمد الشيفرة على go-face، وهي غلاف مفتوح المصدر بلغة Go لمكتبة dlib.',
          '**ملفات النماذج.** توجد ثلاثة ملفات نماذج من dlib للكشف عن الوجوه ونقاط الارتكاز والتعرّف في مجلد data/models بالمستودع، ومسارها قابل للضبط.',
          '**أين تعمل.** يستدعي [شيفرة كشف الوجوه](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) المكتبة المحلية مباشرة، دون أي طلب شبكة في الملفات التي قرأناها.',
          '**الإيقاف.** عند ضبط PHOTOVIEW_DISABLE_FACE_RECOGNITION على 1 تُتخطى الميزة.',
        ],
        note: 'هذه أقوال من README والشيفرة؛ ولم تقِس PromptQuorum زمن التعرّف ولم تختبره.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**Photoview مستضاف ذاتيًا، لذلك تبقى الصور على الخادم الذي تديره ما لم تشاركها أو تفعّل الخرائط.** يحذّر README من أن المصادقة الأساسية للمستخدمين لا تكفي لحماية الوسائط الخاصة من الجهات الخبيثة على الإنترنت، ويقترح جدار حماية أو VPN أو وكيلًا عكسيًا أو طبقات مشابهة قبل كشفه للإنترنت.',
          'يحمّل عرض الخريطة مكتبة Mapbox في المتصفح بالرمز الذي تزوّده به؛ ولم نتحقق مما يتلقاه Mapbox.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المشروع وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة، ولم تراجع الشيفرة خارج الملفات المذكورة في هذا المقال.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المصورون الذين يحتفظون بمكتبات RAW على خادم منزلي** ويريدون تصفح المجلدات ومشاركتها دون نقل الملفات.',
          '**الأسر التي تحفظ صورها العائلية على NAS** وتريد معرضًا واحدًا بمجلد منفصل لكل مستخدم.',
          '**المستضيفون الذاتيون الذين يفضّلون معرضًا قائمًا على المجلدات** على منصة ببحث ووسوم بالذكاء الاصطناعي.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة التعرّف على الوجوه.** لم تُختبر الدقة ولا سلوك التجميع ولا السرعة.',
          '**الفجوة عن الإصدار.** أحدث إصدار موسوم يعود إلى يونيو 2024 وقد تقدّم فرع master؛ ولم نقارن مدى اختلافه عن 2.4.0، ويقول README إن PostgreSQL 18 هو الإصدار الموصى به للإصدار التالي.',
          '**تدفق البيانات إلى Mapbox.** لم نتحقق مما ترسله ميزة الخرائط إلى Mapbox ولا من شروط Mapbox للرمز المجاني.',
          '**استهلاك الموارد.** لا توجد أرقام منشورة للذاكرة أو المعالج، ولم يُقَس الاستخدام الفعلي.',
          '**التجربة على الجوال.** لا يُذكر تطبيق للجوال؛ ولم نختبر سلوك واجهة المتصفح على الهواتف.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'هناك ثلاث أدوات أخرى لمكتبات الصور في الدليل تتعرّف أيضًا على الوجوه؛ وتختلف فيما تضيفه.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[PhotoPrism](/ar/power-local-llm/photoprism-review)', 'المنصات': 'Linux وmacOS وWindows (Docker) وويب', 'السعر / الرخصة': 'مجاني + مدفوع / AGPL-3.0', 'الفرق الأبرز': 'يضيف وسوم ذكاء اصطناعي وبحثًا؛ وتوجد اشتراكات مدفوعة' },
          { 'التطبيق': '[Immich](/ar/power-local-llm/immich-review)', 'المنصات': 'خادم Linux وiOS وAndroid وويب', 'السعر / الرخصة': 'مجاني / AGPL-3.0', 'الفرق الأبرز': 'يضيف تطبيقات نسخ احتياطي للجوال وبحثًا ذكيًا' },
          { 'التطبيق': '[Facet](/ar/power-local-llm/facet-review)', 'المنصات': 'Linux وmacOS وWindows وويب', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'يضيف تقييم الصور وفرزها؛ وبعض أوزان النماذج الافتراضية غير مسموحة للاستخدام التجاري' },
        ],
        note: 'تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يغيّر Photoview ملفات صوري؟',
            a: 'يصف README المعرض بأنه يتيح وصولًا للقراءة فقط إلى وسائطك، وتُحفظ الصور المصغّرة المُنشأة في مجلد ذاكرة تخزين مؤقت منفصل يحدده PHOTOVIEW_MEDIA_CACHE.',
          },
          {
            q: 'أي قاعدة بيانات أستخدم؟',
            a: 'لا يحتاج SQLite إلى خدمة إضافية، لكن أداءه الأدنى ولا يتوسّع. ويذكر README أن MariaDB هو الخيار الافتراضي وأن PostgreSQL هو الأسرع عادةً.',
          },
          {
            q: 'كيف أحدّث Photoview؟',
            a: 'نزّل الصورة الجديدة وأعد تشغيل الحاويات. ينصح README بنسخ قاعدة البيانات احتياطيًا قبل الترقية، وينبّه إلى أن الصور انتقلت إلى سجل photoview/photoview على Docker Hub، فتحتاج ملفات compose القديمة إلى اسم الصورة الجديد.',
          },
          {
            q: 'أين أجد المساعدة؟',
            a: 'يحيل README أسئلة الإعداد والتطوير إلى [خادم Discord](https://discord.gg/jQ392948u9)، ولا يدعم المشروع Portainer ولا أي طبقات أخرى فوق Docker Compose.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Photoview معرض راسخ ومفتوح التطوير لمن يحتفظ بصوره في مجلدات على خادمه الخاص ويريد تصفحها ومشاركتها وفرزها حسب الوجوه دون خدمة سحابية. في المقابل، يعود آخر إصدار موسوم إلى يونيو 2024، ويتطلب الإعداد Docker وقاعدة بيانات، والتعرّف على الوجوه هو ميزته الوحيدة بالذكاء الاصطناعي، والخرائط تعتمد على رمز Mapbox، ولم يكن ممكنًا اختبار شيء من ذلك هنا. يناسب المستضيفين الذاتيين الذين يفكرون بالمجلدات ويشغّلون Docker بالفعل؛ ومن يريد بحثًا بالذكاء الاصطناعي أو نسخًا احتياطيًا للجوال فعليه مقارنة البدائل المذكورة أعلاه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Photoview](https://photoview.github.io/) — نظرة عامة على الميزات، اطُّلع عليه في 30 أكتوبر 2026.',
          '[ملف README الخاص بـ Photoview](https://github.com/photoview/photoview) — الميزات والمنصات وقواعد البيانات والإعداد وملاحظات الأمان، اطُّلع عليه في 30 أكتوبر 2026.',
          '[إصدارات Photoview](https://github.com/photoview/photoview/releases) — الإصدار 2.4.0، نُشر في 23 يونيو 2024.',
          '[شيفرة كشف الوجوه في Photoview](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) — مكتبة التعرّف وإعدادات البيئة، اطُّلع عليها في 30 أكتوبر 2026.',
          '[Photoview على Docker Hub](https://hub.docker.com/r/photoview/photoview) — وسوم الصور، اطُّلع عليها في 30 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PhotoPrism](/ar/power-local-llm/photoprism-review) — مكتبة صور مستضافة ذاتيًا مع وسوم ذكاء اصطناعي وتعرّف على الوجوه مدمجة.',
          '[مراجعة Immich](/ar/power-local-llm/immich-review) — نسخ احتياطي للصور مستضاف ذاتيًا مع تطبيقات جوال وبحث ذكي.',
          '[دليل برمجيات النماذج اللغوية المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoview-review-hero-zh.webp',
    title: 'Photoview 评测：支持本地人脸识别的自托管相册',
    seoTitle: 'Photoview 评测：支持本地人脸识别的自托管相册应用',
    intro:
      'Photoview 是一款免费、开源的相册应用，面向自托管的个人服务器：指定一个文件夹后，它会扫描其中的图片和视频，你在浏览器里即可浏览。它唯一的 AI 功能是人脸识别，用来把同一个人的照片归到一起。本评测基于项目官网、README 和 GitHub 仓库（2026 年 10 月 30 日查阅），PromptQuorum 没有实际测试过这款软件。',
    metaDescription:
      'Photoview 评测：免费开源、可在自己服务器上运行的相册，人脸识别在该服务器本地完成。介绍 Docker 部署方式，并说明哪些内容未经测试。',
    twitterDescription:
      'Photoview 评测：支持本地人脸识别的自托管相册，AGPL-3.0 许可、免费。来源已证实的内容与仍不确定的部分。',
    audience:
      '把照片按文件夹存放在自己服务器上的自托管用户和摄影师，他们想知道来源证实了什么、项目只是宣称了什么，以及要花多少钱。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Photoview 评测',
    targetKeywords: [
      'photoview 评测',
      'photoview 自托管相册',
      'photoview 人脸识别',
      'photoview docker compose',
      '自托管 google 相册替代',
      'photoview raw 照片',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Photoview（2.4.0 版）是采用 AGPL 许可的相册应用，通过 Docker 安装在你自己的服务器上，人脸识别在服务器进程内运行。** 它免费，但安装需要用到终端。本文所有内容均来自项目自己的官网、README 和代码。',
    quickAnswerTop: {
      zh: {
        question: 'Photoview 会把我的照片发送到云端 AI 服务吗？',
        answer:
          '在我们查看的代码中不会：人脸识别使用开源库 go-face 和仓库中的模型文件，由服务器自己的扫描器调用。涉及的唯一外部服务是可选的地图功能（见“数据流向与隐私”）。',
        bullets: [
          '服务器上的目录会变成相册，每个用户对应一个文件夹。',
          '支持 RAW 文件和 EXIF 数据，视频会针对网页播放进行优化。',
          '缩略图预先生成，大型图库也能快速浏览。',
          '视频硬件加速是可选的。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Photoview 是什么？', anchor: 'what-is-photoview' },
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
            text: 'Photoview 是一款开源、自托管的相册应用，它扫描服务器上的文件夹，并用在本地运行的模型按人脸对照片分组。',
          },
          {
            type: 'plain-terms',
            text: '你把它装在自己掌控的电脑或 NAS 上，指向照片文件夹，就能在任何浏览器里浏览和分享，无需使用云端相册服务。',
          },
        ],
        items: [
          '维护情况：最新的带标签版本是 2024 年 6 月 23 日的 2.4.0，但 master 分支在 2026 年 10 月 29 日仍有提交，Docker Hub 标签也在当天重新构建，因此无需显示项目停更警告。',
          '部署：使用带数据库和环境文件的 Docker Compose；未列出桌面安装程序或应用商店版本。',
          'AI：只有一项功能，即人脸识别；README 和官网都没有提到图片打标签或语义搜索。',
          '费用：AGPL-3.0 许可、免费；README 和官网中都没有出现付费版本。',
          '使用方式：仅提供浏览器界面；未列出移动应用。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于项目官网、README 和 GitHub 仓库（2026 年 10 月 30 日查阅）。PromptQuorum 没有安装过 Photoview，因此未评估人脸识别的准确度、速度和资源占用。',
          },
        ],
      },
      overview: {
        id: 'what-is-photoview',
        title: 'Photoview 是什么？',
        content: [
          '**Photoview 是一款为摄影师设计的自托管网页相册，它的扫描器读取服务器上的文件夹，并把各级目录变成相册。** 项目自称“面向自托管个人服务器的相册”，代码以 AGPL-3.0 许可托管在 GitHub 上。',
          '每个用户创建时都会绑定服务器上的一个路径，只能看到该路径下的媒体文件。README 附有公开演示站点的链接。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Photoview 是需要你自己安装的服务器程序；文档推荐的方式是 Docker Compose，没有桌面或手机安装程序。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'Docker Compose', '获取方式': '[Compose 示例](https://github.com/photoview/photoview/tree/master/docker-compose%20example)：复制 .env、compose 文件和 Makefile，修改后运行 make all' },
          { '选项': '其他平台', '获取方式': 'README 列出了 Arch Linux AUR、NixOS、Unraid、YunoHost、TrueNAS 和 EmbassyOS，项目仅提供有限支持' },
          { '选项': '价格', '获取方式': '免费，AGPL-3.0，自托管' },
          { '选项': '官网', '获取方式': '[photoview.github.io](https://photoview.github.io/)' },
          { '选项': '隐私政策', '获取方式': '在官网和 README 中都没有找到隐私政策页面' },
          { '选项': '源代码', '获取方式': '[github.com/photoview/photoview](https://github.com/photoview/photoview)' },
          { '选项': '公开演示', '获取方式': '[photos.qpqp.dk](https://photos.qpqp.dk/)，登录信息见 README' },
        ],
        note: '评测的版本：2.4.0，发布于 2024 年 6 月 23 日，是最新的带标签版本；GitHub 上没有为它列出可下载文件。master 分支的提交持续到 2026 年 10 月 29 日，[Docker Hub](https://hub.docker.com/r/photoview/photoview) 上的 latest 和 2.4.0 标签也在当天最后一次推送。需要终端和 Docker。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**README 没有给出内存或 CPU 的最低要求，只说明了支持的平台、数据库以及 Docker 版本的时间范围。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          { '项目': '运行环境', '来源说明': '过去一年内发布的 Docker Engine；Debian 12 或 13，或 Ubuntu LTS 及较新的短期支持版本' },
          { '项目': '数据库', '来源说明': 'SQLite、MariaDB 或 PostgreSQL 17 或 18' },
          { '项目': '媒体处理', '来源说明': 'RAW 处理和视频处理都可通过环境设置分别关闭' },
          { '项目': '视频加速', '来源说明': '可选 qsv、vaapi 或 nvenc；项目只在 Intel 芯片上验证过 qsv' },
        ],
        note: '以上为 README 的说明；PromptQuorum 没有测量内存、CPU 或索引耗时。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据 README 中的 Docker 指南，PromptQuorum 没有实际执行过。**',
        ],
        numberedItems: [
          {
            title: '安装 Docker',
            whyItMatters: '在存放照片的服务器上安装 Docker 和 Docker Compose。',
          },
          {
            title: '复制示例文件',
            whyItMatters: '从 Compose 示例文件夹下载文件，重命名为 .env、docker-compose.yml 和 Makefile，并按你的路径和数据库修改。',
          },
          {
            title: '让媒体可读并启动',
            whyItMatters: '运行 make readable，使容器能读取你的媒体文件夹，然后运行 make all。',
          },
          {
            title: '创建管理员并扫描',
            whyItMatters: '打开 8000 端口，在设置向导中填写用户名、密码和照片路径（默认 /photos），然后在设置中点击 Scan All。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下各项均来自项目官网或 README；PromptQuorum 没有测试过其中任何一项。**',
        ],
        items: [
          '**分享。** 相册和单个媒体都可以通过公开链接分享，也可以设置密码保护。',
          '**地图。** EXIF 数据中带 GPS 坐标的照片可以显示在地图上；按示例配置，这需要你自己创建一个免费的 Mapbox 访问令牌。',
          '**访问控制。** 据 README，媒体文件由 Cookie 令牌保护，密码经过哈希处理，API 采用严格的 CORS 策略。',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 功能及运行位置',
        content: [
          '**人脸识别是项目列出的唯一 AI 功能，它使用 go-face 库，在 Photoview 服务器内部运行。**',
        ],
        items: [
          '**检测与分组。** 据 README，扫描器会检测照片中的人脸，并把同一个人的照片分到一组；代码基于 go-face，这是 dlib 的一个开源 Go 封装。',
          '**模型文件。** 用于人脸检测、关键点和识别的三个 dlib 模型文件位于仓库的 data/models 文件夹，其路径可配置。',
          '**运行位置。** [人脸检测代码](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection)直接调用本地库，在我们读过的文件中没有网络请求。',
          '**关闭方式。** 将 PHOTOVIEW_DISABLE_FACE_RECOGNITION 设为 1，即可跳过该功能。',
        ],
        note: '以上来自 README 和代码的说明；PromptQuorum 没有对识别进行计时或测试。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**Photoview 是自托管的，因此除非你分享照片或启用地图，照片都留在你运行的服务器上。** README 警告说，它自带的基础用户认证不足以保护私人媒体免受互联网上恶意攻击者的侵害，并建议在对外开放前先配置防火墙、VPN、反向代理等防护层。',
          '地图视图会在浏览器中加载 Mapbox 库，并使用你提供的令牌；Mapbox 因此收到哪些数据，我们没有核实。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是项目自己的说明，而非审计结果。PromptQuorum 没有检查网络流量，也没有查看本文所列文件之外的代码。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**把 RAW 图库放在家用服务器上的摄影师**，想浏览和分享文件夹而不必移动文件。',
          '**把家庭照片存在 NAS 上的家庭**，需要一个每位用户各有独立文件夹的相册。',
          '**偏好按文件夹组织的自托管用户**，而不是带 AI 搜索和标签的平台。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**人脸识别质量。** 准确度、分组表现和速度均未测试。',
          '**与发布版本的差距。** 最新带标签版本来自 2024 年 6 月，而 master 已继续向前；它与 2.4.0 差多少没有比较过，README 还提到 PostgreSQL 18 是下一个版本的推荐版本。',
          '**发送给 Mapbox 的数据。** 地图功能会向 Mapbox 发送什么，以及 Mapbox 对免费令牌的条款，均未核实。',
          '**资源占用。** 没有公布内存或 CPU 数据，实际占用也未测量。',
          '**手机使用体验。** 未列出移动应用；浏览器界面在手机上的表现没有测试。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中另有三款相册工具同样支持人脸识别，区别在于各自额外提供什么。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[PhotoPrism](/zh/power-local-llm/photoprism-review)', '平台': 'Linux、macOS、Windows（Docker）、网页', '价格 / 许可证': '免费 + 付费 / AGPL-3.0', '主要区别': '增加 AI 标签和搜索；设有付费会员' },
          { '应用': '[Immich](/zh/power-local-llm/immich-review)', '平台': 'Linux 服务器、iOS、Android、网页', '价格 / 许可证': '免费 / AGPL-3.0', '主要区别': '增加手机备份应用和智能搜索' },
          { '应用': '[Facet](/zh/power-local-llm/facet-review)', '平台': 'Linux、macOS、Windows、网页', '价格 / 许可证': '免费 / MIT', '主要区别': '增加照片评分与筛选；部分默认模型权重不可商用' },
        ],
        note: '请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Photoview 会修改我的照片文件吗？',
            a: 'README 将该相册描述为对你的媒体只读访问，生成的缩略图保存在由 PHOTOVIEW_MEDIA_CACHE 指定的单独缓存文件夹中。',
          },
          {
            q: '我该用哪种数据库？',
            a: 'SQLite 不需要额外服务，但性能最低，也无法扩展。README 把 MariaDB 作为默认选择，并称 PostgreSQL 通常最快。',
          },
          {
            q: '如何更新 Photoview？',
            a: '拉取新镜像并重启容器。README 建议升级前备份数据库，并提示镜像已迁移到 Docker Hub 上的 photoview/photoview 仓库，因此旧的 compose 文件需要改用新的镜像名。',
          },
          {
            q: '在哪里可以获得帮助？',
            a: 'README 把安装和开发方面的问题引向 [Discord 服务器](https://discord.gg/jQ392948u9)；项目不支持 Portainer 等叠加在 Docker Compose 之上的管理层。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Photoview 是一款成熟、公开开发的相册应用，适合把照片按文件夹放在自己服务器上，想不依赖云服务就能浏览、分享并按人脸整理的人。不足之处在于：最新带标签版本来自 2024 年 6 月，部署需要 Docker 和数据库，人脸识别是唯一的 AI 功能，地图依赖 Mapbox 令牌，而这些在本次都无法测试。它适合已经在运行 Docker、习惯按文件夹管理的自托管用户；需要 AI 搜索或手机备份的人，应当对比上面列出的替代方案。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Photoview 官网](https://photoview.github.io/) — 功能概览（2026 年 10 月 30 日查阅）。',
          '[Photoview README](https://github.com/photoview/photoview) — 功能、平台、数据库、部署与安全提示（2026 年 10 月 30 日查阅）。',
          '[Photoview 发布页](https://github.com/photoview/photoview/releases) — 2.4.0 版，发布于 2024 年 6 月 23 日。',
          '[Photoview 人脸检测代码](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) — 识别库与环境设置（2026 年 10 月 30 日查阅）。',
          '[Docker Hub 上的 Photoview](https://hub.docker.com/r/photoview/photoview) — 镜像标签（2026 年 10 月 30 日查阅）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PhotoPrism 评测](/zh/power-local-llm/photoprism-review) — 内置 AI 标签和人脸识别的自托管照片库。',
          '[Immich 评测](/zh/power-local-llm/immich-review) — 带手机应用和智能搜索的自托管照片备份方案。',
          '[本地大模型软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
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
    theme: 'Image & Video Generation',
    heroImage: '/images/photoview-review-hero-ko.webp',
    title: 'Photoview 리뷰: 얼굴 인식을 로컬로 처리하는 셀프 호스팅 사진 갤러리',
    seoTitle: 'Photoview 리뷰: 얼굴 인식 셀프 호스팅 갤러리',
    intro:
      'Photoview는 셀프 호스팅 개인 서버를 위한 무료 오픈소스 사진 갤러리입니다. 폴더를 지정하면 사진과 동영상을 스캔하고, 웹 브라우저에서 둘러볼 수 있습니다. AI 기능은 같은 사람의 사진을 묶어 주는 얼굴 인식 하나뿐입니다. 이 리뷰는 프로젝트의 웹사이트, README, GitHub 저장소(2026년 10월 30일 확인)를 바탕으로 하며, PromptQuorum은 소프트웨어를 직접 테스트하지 않았습니다.',
    metaDescription:
      'Photoview 리뷰: 내 서버에서 얼굴 인식이 실행되는 무료 오픈소스 사진 갤러리입니다. Docker 설치 방법과 테스트하지 못한 부분을 정리했습니다.',
    twitterDescription:
      'Photoview 리뷰: 얼굴 인식을 로컬로 처리하는 셀프 호스팅 사진 갤러리로, AGPL-3.0 무료입니다. 출처가 확인한 내용과 남은 의문점입니다.',
    audience:
      '자기 서버의 폴더에 사진을 보관하면서, 출처가 확인한 내용과 프로젝트가 주장만 하는 내용, 그리고 비용을 알고 싶은 셀프 호스팅 사용자와 사진가입니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Photoview 리뷰',
    targetKeywords: [
      'photoview 리뷰',
      'photoview 셀프 호스팅 사진 갤러리',
      'photoview 얼굴 인식',
      'photoview docker compose',
      '구글 포토 대안 셀프 호스팅',
      'photoview raw 사진',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Photoview(릴리스 2.4.0)는 AGPL 라이선스 사진 갤러리로, Docker를 사용해 직접 운영하는 서버에 설치하며 얼굴 인식은 서버 프로세스 안에서 실행됩니다.** 무료이지만 설치에는 터미널이 필요합니다. 이 글의 내용은 모두 프로젝트의 웹사이트, README, 코드에서 가져온 것입니다.',
    quickAnswerTop: {
      ko: {
        question: 'Photoview는 내 사진을 클라우드 AI 서비스로 보내나요?',
        answer:
          '확인한 코드에서는 보내지 않습니다. 얼굴 인식은 오픈소스 라이브러리 go-face와 저장소에 포함된 모델 파일을 사용하며, 서버 자체의 스캐너가 호출합니다. 관련된 외부 서비스는 선택 기능인 지도뿐입니다(데이터 흐름과 개인정보 참조).',
        bullets: [
          '서버의 디렉터리가 앨범이 되며, 각 사용자는 폴더 하나에 연결됩니다.',
          'RAW 파일과 EXIF 데이터를 지원하며, 동영상은 웹 재생에 맞게 최적화됩니다.',
          '썸네일을 미리 생성하므로 규모가 큰 라이브러리도 빠르게 둘러볼 수 있습니다.',
          '동영상 하드웨어 가속은 선택 사항입니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Photoview란?', anchor: 'what-is-photoview' },
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
            text: 'Photoview는 서버의 폴더를 스캔하고, 그곳에서 실행되는 모델로 사진을 얼굴별로 묶어 주는 오픈소스 셀프 호스팅 사진 갤러리입니다.',
          },
          {
            type: 'plain-terms',
            text: '직접 관리하는 컴퓨터나 NAS에 설치하고 사진 폴더를 지정하면, 클라우드 사진 서비스 없이 어떤 브라우저에서든 둘러보고 공유할 수 있습니다.',
          },
        ],
        items: [
          '유지보수: 태그가 붙은 최신 릴리스는 2024년 6월 23일의 2.4.0이지만, master 브랜치에는 2026년 10월 29일에 커밋이 있었고 Docker Hub 태그도 같은 날 다시 빌드되었으므로 방치된 프로젝트 경고는 적용되지 않습니다.',
          '설치: 데이터베이스와 환경 파일을 사용하는 Docker Compose이며, 데스크톱 설치 프로그램이나 앱 스토어 앱은 나와 있지 않습니다.',
          'AI: 기능은 얼굴 인식 하나이며, README와 웹사이트에는 라벨링이나 시맨틱 검색이 언급되어 있지 않습니다.',
          '비용: AGPL-3.0 라이선스로 무료이며, README와 웹사이트에 유료 에디션은 나와 있지 않습니다.',
          '이용 방식: 브라우저 인터페이스만 제공하며, 모바일 앱은 나와 있지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 프로젝트의 웹사이트, README, GitHub 저장소(2026년 10월 30일 확인)를 바탕으로 합니다. PromptQuorum은 Photoview를 설치하지 않았으므로 얼굴 인식의 정확도, 속도, 리소스 사용량은 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-photoview',
        title: 'Photoview란?',
        content: [
          '**Photoview는 사진가를 위해 만든 셀프 호스팅 웹 갤러리로, 스캐너가 서버의 폴더를 읽어 디렉터리를 앨범으로 바꿉니다.** 프로젝트는 스스로를 "셀프 호스팅 개인 서버를 위한 사진 갤러리"라고 소개하며, 코드는 AGPL-3.0으로 GitHub에 공개되어 있습니다.',
          '각 사용자는 서버의 경로와 함께 만들어지며, 그 아래에 있는 미디어만 볼 수 있습니다. README에는 공개 데모 사이트 링크가 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Photoview는 직접 설치하는 서버이며, 문서화된 방법은 Docker Compose입니다. 데스크톱용이나 휴대전화용 설치 프로그램은 없습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'Docker Compose', '입수 방법': '[Compose 예시](https://github.com/photoview/photoview/tree/master/docker-compose%20example): .env, compose 파일, Makefile을 복사해 수정한 뒤 make all을 실행합니다' },
          { '옵션': '기타 플랫폼', '입수 방법': 'README에는 Arch Linux AUR, NixOS, Unraid, YunoHost, TrueNAS, EmbassyOS가 나와 있으며 프로젝트의 지원은 제한적입니다' },
          { '옵션': '가격', '입수 방법': '무료, AGPL-3.0, 셀프 호스팅' },
          { '옵션': '웹사이트', '입수 방법': '[photoview.github.io](https://photoview.github.io/)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '웹사이트와 README에서 개인정보 처리방침 페이지를 찾지 못했습니다' },
          { '옵션': '소스 코드', '입수 방법': '[github.com/photoview/photoview](https://github.com/photoview/photoview)' },
          { '옵션': '공개 데모', '입수 방법': '[photos.qpqp.dk](https://photos.qpqp.dk/) (로그인 정보는 README에 있음)' },
        ],
        note: '확인한 버전: 2024년 6월 23일에 공개된 릴리스 2.4.0이며, 태그가 붙은 가장 최근 릴리스입니다. GitHub에는 내려받을 파일이 나와 있지 않습니다. master 브랜치에는 2026년 10월 29일까지 커밋이 있었고, [Docker Hub](https://hub.docker.com/r/photoview/photoview)의 latest와 2.4.0 태그도 그날 마지막으로 푸시되었습니다. 터미널과 Docker가 필요합니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**README에는 RAM이나 CPU 최소 사양이 없으며, 지원 플랫폼과 데이터베이스, Docker 버전 범위만 나와 있습니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          { '항목': '실행 환경', '출처의 설명': '최근 1년 이내에 출시된 Docker Engine, Debian 12 또는 13, Ubuntu LTS 및 최신 단기 지원 릴리스' },
          { '항목': '데이터베이스', '출처의 설명': 'SQLite, MariaDB 또는 PostgreSQL 17, 18' },
          { '항목': '미디어 처리', '출처의 설명': 'RAW 처리와 동영상 처리는 환경 설정으로 각각 끌 수 있습니다' },
          { '항목': '동영상 가속', '출처의 설명': '선택 사항으로 qsv, vaapi, nvenc가 있으며, 프로젝트가 검증한 것은 Intel 칩의 qsv뿐입니다' },
        ],
        note: 'README에 나와 있는 내용이며, PromptQuorum은 메모리, CPU, 인덱싱 시간을 측정하지 않았습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 README의 Docker 가이드를 따른 것이며, PromptQuorum이 직접 실행해 보지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: 'Docker 설치',
            whyItMatters: '사진이 있는 서버에 Docker와 Docker Compose를 설치합니다.',
          },
          {
            title: '예시 파일 복사',
            whyItMatters: 'Compose 예시 폴더의 파일을 내려받아 .env, docker-compose.yml, Makefile로 이름을 바꾸고, 경로와 데이터베이스에 맞게 수정합니다.',
          },
          {
            title: '미디어를 읽을 수 있게 하고 시작',
            whyItMatters: '컨테이너가 미디어 폴더를 읽을 수 있도록 make readable을 실행한 뒤 make all을 실행합니다.',
          },
          {
            title: '관리자 생성 및 스캔',
            whyItMatters: '8000번 포트를 열고, 설정 마법사에서 사용자 이름, 비밀번호, 사진 경로(기본값 /photos)를 입력한 다음 설정의 Scan All을 사용합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 프로젝트의 웹사이트 또는 README에서 가져온 것이며, PromptQuorum은 어느 것도 테스트하지 않았습니다.**',
        ],
        items: [
          '**공유.** 앨범과 개별 미디어를 공개 링크로 공유할 수 있으며, 비밀번호 보호도 선택할 수 있습니다.',
          '**지도.** EXIF 데이터에 GPS 좌표가 있는 사진은 지도에 표시할 수 있으며, 예시 설정에 따르면 직접 발급하는 무료 Mapbox 액세스 토큰이 필요합니다.',
          '**접근 제어.** README에 따르면 미디어 파일은 쿠키 토큰으로 보호되고, 비밀번호는 해시 처리되며, API는 엄격한 CORS 정책을 사용합니다.',
        ],
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 기능과 실행 위치',
        content: [
          '**프로젝트가 밝히는 AI 기능은 얼굴 인식뿐이며, go-face 라이브러리를 사용해 Photoview 서버 안에서 실행됩니다.**',
        ],
        items: [
          '**감지와 그룹화.** README에 따르면 스캐너는 사진에서 얼굴을 찾아 같은 사람의 사진을 묶습니다. 코드는 dlib용 오픈소스 Go 래퍼인 go-face를 기반으로 합니다.',
          '**모델 파일.** 얼굴 감지, 랜드마크, 인식을 위한 dlib 모델 파일 세 개가 저장소의 data/models 폴더에 있으며, 경로는 설정할 수 있습니다.',
          '**실행 위치.** [얼굴 감지 코드](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection)는 로컬 라이브러리를 직접 호출하며, 읽어 본 파일에는 네트워크 요청이 없었습니다.',
          '**끄기.** PHOTOVIEW_DISABLE_FACE_RECOGNITION을 1로 설정하면 이 기능을 건너뜁니다.',
        ],
        note: 'README와 코드에 나와 있는 내용이며, PromptQuorum은 인식 속도를 측정하거나 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**Photoview는 셀프 호스팅이므로, 사진을 공유하거나 지도를 켜지 않는 한 사진은 직접 운영하는 서버에 남습니다.** README는 기본적인 사용자 인증만으로는 인터넷의 악의적인 공격자로부터 비공개 미디어를 보호하기에 충분하지 않다고 경고하며, 외부에 노출하기 전에 방화벽, VPN, 리버스 프록시 등의 보호 계층을 두라고 권합니다.',
          '지도 화면은 사용자가 제공한 토큰으로 브라우저에서 Mapbox 라이브러리를 불러옵니다. Mapbox가 무엇을 받는지는 확인하지 못했습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '프로젝트 측의 설명이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았고, 이 글에서 언급한 파일 외의 코드는 검토하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**집 서버에 RAW 라이브러리를 둔 사진가**로, 파일을 옮기지 않고 폴더를 둘러보고 공유하려는 분.',
          '**가족 사진을 NAS에 보관하는 가정**으로, 사용자마다 별도 폴더가 있는 갤러리 하나를 원하는 분.',
          '**AI 검색과 라벨이 있는 플랫폼보다 폴더 기반 갤러리를 선호하는 셀프 호스팅 사용자.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**얼굴 인식 품질.** 정확도, 그룹화 동작, 속도는 테스트하지 않았습니다.',
          '**릴리스와의 격차.** 태그가 붙은 최신 릴리스는 2024년 6월 것이고 master는 그 뒤로 진행되었습니다. 2.4.0과 얼마나 다른지는 비교하지 않았으며, README는 다음 릴리스에서 PostgreSQL 18을 권장 버전으로 삼는다고 밝히고 있습니다.',
          '**Mapbox로 가는 데이터.** 지도 기능이 Mapbox에 무엇을 보내는지, 무료 토큰에 대한 Mapbox의 약관은 확인하지 못했습니다.',
          '**리소스 사용량.** RAM이나 CPU 수치는 공개되어 있지 않으며, 실제 사용량은 측정하지 않았습니다.',
          '**휴대전화 사용 경험.** 모바일 앱은 나와 있지 않으며, 브라우저 인터페이스가 휴대전화에서 어떻게 동작하는지는 테스트하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 얼굴 인식을 갖춘 사진 라이브러리 도구가 세 가지 더 있으며, 그 밖에 무엇을 더하는지가 서로 다릅니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[PhotoPrism](/ko/power-local-llm/photoprism-review)', '플랫폼': 'Linux, macOS, Windows(Docker), 웹', '가격 / 라이선스': '무료 + 유료 / AGPL-3.0', '핵심 차이점': 'AI 라벨과 검색을 추가하며 유료 멤버십이 있음' },
          { '앱': '[Immich](/ko/power-local-llm/immich-review)', '플랫폼': 'Linux 서버, iOS, Android, 웹', '가격 / 라이선스': '무료 / AGPL-3.0', '핵심 차이점': '휴대전화 백업 앱과 스마트 검색을 추가' },
          { '앱': '[Facet](/ko/power-local-llm/facet-review)', '플랫폼': 'Linux, macOS, Windows, 웹', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': '사진 점수 매기기와 선별을 추가하며 기본 모델 가중치 일부는 상업적 이용 불가' },
        ],
        note: '각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Photoview가 내 사진 파일을 변경하나요?',
            a: 'README는 이 갤러리를 미디어에 대한 읽기 전용 접근으로 설명하며, 생성된 썸네일은 PHOTOVIEW_MEDIA_CACHE로 지정하는 별도의 캐시 폴더에 저장됩니다.',
          },
          {
            q: '어떤 데이터베이스를 써야 하나요?',
            a: 'SQLite는 추가 서비스가 필요 없지만 성능이 가장 낮고 확장이 되지 않습니다. README는 MariaDB를 기본 선택으로, PostgreSQL을 일반적으로 가장 빠른 선택으로 소개합니다.',
          },
          {
            q: 'Photoview는 어떻게 업데이트하나요?',
            a: '새 이미지를 받아 컨테이너를 다시 시작합니다. README는 업그레이드 전에 데이터베이스를 백업하라고 안내하며, 이미지가 Docker Hub의 photoview/photoview 레지스트리로 옮겨졌으므로 오래된 compose 파일은 새 이미지 이름으로 바꿔야 한다고 알립니다.',
          },
          {
            q: '도움은 어디서 받을 수 있나요?',
            a: 'README는 설치와 개발 관련 질문을 [Discord 서버](https://discord.gg/jQ392948u9)로 안내하며, 프로젝트는 Portainer 등 Docker Compose 위에 얹는 도구는 지원하지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Photoview는 자기 서버의 폴더에 사진을 두고, 클라우드 서비스 없이 둘러보고 공유하며 얼굴별로 정리하려는 사람에게 맞는, 자리 잡은 공개 개발 갤러리입니다. 반면 태그가 붙은 최신 릴리스는 2024년 6월 것이고, 설치에는 Docker와 데이터베이스가 필요하며, AI 기능은 얼굴 인식뿐이고, 지도는 Mapbox 토큰에 의존하며, 이 중 어느 것도 이번에는 테스트하지 못했습니다. 이미 Docker를 운영하는 폴더 중심의 셀프 호스팅 사용자에게 적합하며, AI 검색이나 휴대전화 백업이 필요하다면 위의 대안을 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Photoview 웹사이트](https://photoview.github.io/) — 기능 개요, 2026년 10월 30일 확인.',
          '[Photoview README](https://github.com/photoview/photoview) — 기능, 플랫폼, 데이터베이스, 설치 및 보안 참고 사항, 2026년 10월 30일 확인.',
          '[Photoview 릴리스](https://github.com/photoview/photoview/releases) — 릴리스 2.4.0, 2024년 6월 23일 공개.',
          '[Photoview 얼굴 감지 코드](https://github.com/photoview/photoview/tree/master/api/scanner/face_detection) — 인식 라이브러리와 환경 설정, 2026년 10월 30일 확인.',
          '[Docker Hub의 Photoview](https://hub.docker.com/r/photoview/photoview) — 이미지 태그, 2026년 10월 30일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[PhotoPrism 리뷰](/ko/power-local-llm/photoprism-review) — AI 라벨링과 얼굴 인식을 내장한 셀프 호스팅 사진 라이브러리.',
          '[Immich 리뷰](/ko/power-local-llm/immich-review) — 모바일 앱과 스마트 검색을 갖춘 셀프 호스팅 사진 백업.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
