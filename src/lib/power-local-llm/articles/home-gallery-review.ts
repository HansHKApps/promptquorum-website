// Home-Gallery Review: Self-Hosted Photo Gallery With AI Search
// Slug: home-gallery-review
// Companion to: immich-review, photoprism-review, facet-review
// Sources (all read 2026-10-30, no hands-on testing): home-gallery.org (home, /docs/install/binary.html, /docs/api-server, /docs/configuration), the GitHub repo and API (xemle/home-gallery:
// license MIT, pushed_at 2026-10-13, tags v1.21.0 / v1.20.0 / v1.19.0, no GitHub Releases), README.md ("Binary Downloads", "External Services and Privacy", "Limits", "Target Users"),
// CHANGELOG.md ([1.21.0] 2026-03-01 and an [Unreleased] section), LICENSE (copyright Sebastian Felis, 2025) and the download index dl.home-gallery.org/dist (1.21.0 and latest dated 01-Mar-2026).
// The request came from the site owner (link from localhosted.com), not from the maker: no maker comment, no founder-review badge.
// Data flow per the README: similar-image search, object detection and face recognition call the public API at api.home-gallery.org with preview images by default ("No images or privacy data are kept" =
// the project's own statement, not verified); the API server can be self-hosted (xemle/home-gallery-api-server, amd64 + arm64) via extractor.apiServer.url; extractor.apiServer.disable lists
// similarDetection, objectDetection, faceDetection; Nominatim receives coordinates only. Locality on the tile = hybrid. The API docs name no models and no hardware needs (stated in the review).
// Last upstream update 2026-10-13 (push; the newest tagged build is 2026-03-01) => no stale warning. No separate privacy-policy page was found (stated in the Get It note).

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
    heroImage: '/images/home-gallery-review-hero-en.webp',
    title: 'Home-Gallery Review: Self-Hosted Photo Gallery With AI Search',
    seoTitle: 'Home-Gallery Review: Self-Hosted Photo Gallery, AI Search',
    intro:
      "Home-Gallery is a free, MIT-licensed web gallery that you host yourself to browse, tag and search a large collection of photos and videos. Its AI features (similar-image search, object detection and face recognition) are done by an API server, and the project's README says that by default this is its public API. This review reflects the website, README, documentation, tags and changelog as checked on 30 October 2026.",
    metaDescription:
      'Home-Gallery review: free MIT-licensed self-hosted photo and video gallery with tagging and AI search. Binary or Docker setup, what the AI sends out.',
    twitterDescription:
      "Home-Gallery review: a self-hosted photo and video web gallery. Binary or Docker setup, AI features that call a public API by default, how to self-host that API and what we could not verify.",
    audience:
      'Self-hosters with a large local photo and video archive who want to know the setup effort, which AI step leaves the machine by default, how to keep it local and what the sources do not confirm.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Home-Gallery review',
    targetKeywords: [
      'home-gallery review',
      'self-hosted photo gallery',
      'self-hosted photo gallery face recognition',
      'home gallery xemle github',
      'private photo gallery nas',
      'api.home-gallery.org',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Home-Gallery (v1.21.0 as of 30 October 2026) is a free, MIT-licensed web gallery that you host yourself for large photo and video folders, with tagging and AI image discovery.** It runs from a terminal-started binary or a Docker image rather than an installer.',
    quickAnswerTop: {
      en: {
        question: 'Do Home-Gallery\'s AI features run on your own machine by default?',
        answer:
          "No. Per its README, similar-image search, object detection and face recognition send preview images to the project's public API at api.home-gallery.org unless you run the API server yourself. The project says no images or privacy data are kept; PromptQuorum could not verify that.",
        bullets: [
          'The three AI features are similar-image search, object detection and face recognition.',
          'Each can be switched off in the configuration file.',
          'Reverse geocoding calls OpenStreetMap\'s Nominatim service with coordinates only.',
          'The self-hostable API server image supports amd64 and arm64.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Home-Gallery?', anchor: 'what-is-home-gallery' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Key Features', anchor: 'key-features' },
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
            text:
              'Home-Gallery is a self-hosted web gallery that serves your own photo and video folders to a browser, with tagging and AI-based similar-image, object and face discovery.',
          },
          {
            type: 'plain-terms',
            text:
              'You start a small server on a computer or NAS, point it at your media folders, and browse, tag and search them from any device on your network.',
          },
        ],
        items: [
          'Maintenance: the newest tagged version, v1.21.0, was built on 1 March 2026 and the repository last received a push on 13 October 2026, so no stale-project warning applies. The repository has no GitHub Releases.',
          'Operator: the README calls it a private pet and spare-time project without any warranty; the LICENSE file names Sebastian Felis as copyright holder.',
          'Setup: download a binary for Linux, macOS or Windows (x64) or use Docker; a terminal is required.',
          'Cost: free; no paid tier was found.',
          'Scale: the README says the whole media database is loaded into the browser, with size figures given under Key Features.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              "This review is based on the project's website, README, documentation, tags and changelog, checked on 30 October 2026. PromptQuorum has not installed Home-Gallery, so speed, search quality and face-recognition accuracy are not assessed.",
          },
        ],
      },
      overview: {
        id: 'what-is-home-gallery',
        title: 'What Is Home-Gallery?',
        content: [
          '**Home-Gallery is a self-hosted gallery for photos and videos that stay in your own folders.** The README says its author keeps media on a NAS at home, wants the gallery close to that source, and found that cloud services did not cover their privacy concerns.',
          'It is aimed at what the README calls computer-savvy users who solve their own problems, and it names one user only, with all files served, as a design target. A small web server reads your media folders; you use it through a browser or an installable web app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Home-Gallery is delivered as a prebuilt command-line binary for Linux, macOS and Windows (x64 builds) or as a Docker image; there is no double-click installer or app-store listing.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          {
            Option: 'Linux binary',
            'How to get it': '[home-gallery-latest-linux-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-linux-x64), then make it executable',
          },
          {
            Option: 'macOS binary',
            'How to get it': '[home-gallery-latest-darwin-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-darwin-x64) (x64 build)',
          },
          {
            Option: 'Windows binary',
            'How to get it': '[home-gallery-latest-win-x64.exe](https://dl.home-gallery.org/dist/latest/home-gallery-latest-win-x64.exe)',
          },
          {
            Option: 'Docker',
            'How to get it': '[xemle/home-gallery on Docker Hub](https://hub.docker.com/r/xemle/home-gallery); [install guide](https://home-gallery.org/docs/install/index.html) covers compose',
          },
          {
            Option: 'Documentation',
            'How to get it': '[home-gallery.org/docs](https://home-gallery.org/docs/index.html)',
          },
          {
            Option: 'Website',
            'How to get it': '[home-gallery.org](https://home-gallery.org/) (demo gallery linked there)',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/xemle/home-gallery](https://github.com/xemle/home-gallery) (MIT)',
          },
          {
            Option: 'All builds',
            'How to get it': '[dl.home-gallery.org/dist](https://dl.home-gallery.org/dist) lists every version and unstable builds',
          },
        ],
        note:
          "Version reviewed: v1.21.0, dated 1 March 2026 on the download index and its git tag; the repository has no GitHub Releases, and its last push on 13 October 2026 is unreleased work listed under Unreleased in the changelog. Installing needs a terminal. Per the binary guide, the first start is slow, and macOS or Windows security software may block the app until you allow it. No separate privacy-policy page was found on the project site or in the documentation read; privacy statements are in the README and the API server page.",
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          "**These steps follow the project's README and documentation; PromptQuorum has not run them.**",
        ],
        numberedItems: [
          {
            title: 'Download the binary or pull the image',
            whyItMatters: 'Fetch the build for your system from the download index, make it executable on Linux or macOS, or use the Docker quickstart from the README.',
          },
          {
            title: 'Initialise the configuration with your photo folder',
            whyItMatters: 'The init command takes one or more media source folders and writes gallery.config.yml in the current directory.',
          },
          {
            title: 'Start the server and open the gallery',
            whyItMatters: 'Run the server command and open localhost:3000 in a browser; your media import while the page is open.',
          },
          {
            title: 'Decide where the AI step runs',
            whyItMatters: 'Keep the public API default, point the gallery at your own API server, or switch the AI features off in the configuration.',
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
          '**Browse.** A web gallery for photos and videos that is described as mobile-friendly and is listed as installable (PWA) on the website.',
          '**Tag.** Single-image and multi-image tagging.',
          '**Discover.** Similar-image search that can find sunsets, food or buildings without manual tags, object detection, face detection and a search for similar faces.',
          '**Combine sources.** Several media source folders, such as a hard drive, camera files and phone files, are served in one gallery.',
        ],
        note:
          'The README says the complete database is loaded into the browser: about 100,000 media files are roughly 100 MB of plain JSON and 12 MB compressed, and one user reported a successful setup with over 400,000 files.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          "**By default, similar-image search, object detection and face recognition use the project's public API at api.home-gallery.org, and the README says all preview images are sent to it.** It adds that no images or privacy data are kept; that is the project's statement and PromptQuorum could not check it. The README adds that this public API supports low-powered devices such as the Raspberry Pi.",
          'The API server can instead run locally, as a Docker container, and the gallery configuration can point to it or switch each AI feature off. That makes Home-Gallery hybrid out of the box and local once you host the API server yourself. For reverse geocoding the gallery queries OpenStreetMap\'s Nominatim service and, per the README, transmits only geo coordinates. The configuration page documents login users, access rules and a default listening address of 0.0.0.0 on port 3000, and does not say whether sign-in is required out of the box.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'These are the project\'s statements and PromptQuorum\'s reading of its documentation. Network traffic was not inspected and the source code was not audited.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Self-hosters with a NAS or home server** who want their existing photo and video folders served in a browser without a cloud account.',
          '**Owners of very large archives** who want everything searchable in one gallery and can accept the whole index loading in the browser.',
          '**Privacy-minded users who can run Docker** and are willing to host the API server themselves.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**AI quality and models.** The API server page names no models, and search relevance, face recognition and speed were not tested.',
          '**Hardware needs.** The documentation read gives no RAM or CPU minimum, for the gallery or for a self-hosted API server.',
          '**Fully local operation.** Running with a self-hosted API server and no internet was not tested.',
          '**Apple Silicon.** Only an x64 macOS build is listed; whether it runs on newer Macs is not stated.',
          '**Release cadence.** The newest tag is from March 2026, while newer work sits under Unreleased in the changelog.',
          '**Install steps.** The setup steps come from the documentation and were not run by PromptQuorum.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory has three other reviewed photo library tools in the same segment.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Immich](/power-local-llm/immich-review)',
            Platforms: 'Server (Docker), iOS, Android, browser',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'Phone apps with backup and on-server smart search; no native Home-Gallery app was found, only a web app',
          },
          {
            App: '[PhotoPrism](/power-local-llm/photoprism-review)',
            Platforms: 'Server (Docker), browser',
            'Price / license': 'Free Community / AGPL-3.0',
            'Key difference': 'Built-in AI labels and faces run on your server per its review, while Home-Gallery hands that step to an API server',
          },
          {
            App: '[Facet](/power-local-llm/facet-review)',
            Platforms: 'Docker or script, browser',
            'Price / license': 'Free / MIT',
            'Key difference': 'Scores and culls photos on your own machine; Home-Gallery focuses on browsing, tagging and discovery',
          },
        ],
        note: "Confirm each app's current price, license and platforms on its own page.",
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How do I keep the AI step on my own machine?',
            a:
              'Run the xemle/home-gallery-api-server Docker image (amd64 and arm64) and set extractor.apiServer.url in gallery.config.yml to its address; the documentation shows an example on port 3001. Features can also be switched off with extractor.apiServer.disable, which accepts similarDetection, objectDetection and faceDetection.',
          },
          {
            q: 'Can I use Home-Gallery from my phone?',
            a:
              'The README lists viewing your own media from a mobile phone as a goal, and the website lists a PWA. No native phone app was found.',
          },
          {
            q: 'Does it support several users?',
            a:
              'The README names one user as its target, while the configuration page describes users, access rules and per-user filters. PromptQuorum did not test multi-user setups.',
          },
          {
            q: 'How do I update it?',
            a:
              'The binary guide says to stop the server, replace the binary and run the import command before starting the server again.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          "Home-Gallery is a free, MIT-licensed way to serve a large photo and video archive from your own server with tagging and AI-based discovery. Against that, setup needs a terminal, the AI features send preview images to the project's public API unless you host the API server, the newest tagged version dates from March 2026, and none of the AI quality claims could be checked here. It suits self-hosters who are comfortable with Docker or a command line; anyone who wants a double-click app or fully offline AI out of the box should look elsewhere.",
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Home-Gallery website](https://home-gallery.org/) — overview, platforms and documentation links, checked 30 October 2026.',
          '[Home-Gallery README](https://github.com/xemle/home-gallery/blob/master/README.md) — motivation, quick start, limits and the external services and privacy section, checked 30 October 2026.',
          '[API server documentation](https://home-gallery.org/docs/api-server/index.html) — public API and local Docker setup, checked 30 October 2026.',
          '[Configuration documentation](https://home-gallery.org/docs/configuration/index.html) — server, authentication and extractor settings, checked 30 October 2026.',
          '[Binary installation guide](https://home-gallery.org/docs/install/binary.html) — platforms, first start and upgrade notes, checked 30 October 2026.',
          '[Home-Gallery on GitHub](https://github.com/xemle/home-gallery/tags) — tags, changelog and commit activity, checked 30 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Immich Review](/power-local-llm/immich-review) — a self-hosted photo library with phone apps and on-server smart search.',
          '[PhotoPrism Review](/power-local-llm/photoprism-review) — another self-hosted photo library with built-in AI labels.',
          '[Facet Review](/power-local-llm/facet-review) — local photo scoring, culling and a face-grouping gallery.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home-Gallery Review: Self-Hosted Photo Gallery With AI Search',
      description:
        'Home-Gallery review: a free, MIT-licensed self-hosted photo and video gallery with tagging and AI search. Binary or Docker setup, what the AI features send out, and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/home-gallery-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
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
        audienceType: 'Self-hosters evaluating a private photo and video gallery with AI search',
      },
      about: [
        { '@type': 'Thing', name: 'Home-Gallery' },
        { '@type': 'Thing', name: 'Self-hosted photo gallery' },
        { '@type': 'Thing', name: 'Face recognition' },
        { '@type': 'Thing', name: 'Docker' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/home-gallery-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Home-Gallery Review', item: 'https://www.promptquorum.com/power-local-llm/home-gallery-review' },
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
    heroImage: '/images/home-gallery-review-hero-de.webp',
    title: 'Home-Gallery-Rezension: selbst gehostete Fotogalerie mit KI-Suche',
    seoTitle: 'Home-Gallery: Fotogalerie selbst hosten mit KI-Suche',
    intro:
      'Home-Gallery ist eine kostenlose, MIT-lizenzierte Weboberfläche, die Sie selbst betreiben, um eine große Sammlung von Fotos und Videos zu durchsuchen, zu verschlagworten und zu finden. Die KI-Funktionen (Ähnlichkeitssuche, Objekterkennung und Gesichtserkennung) übernimmt ein API-Server, und laut README ist das standardmäßig die öffentliche API des Projekts. Diese Rezension stützt sich auf Website, README, Dokumentation, Tags und Changelog, geprüft am 30. Oktober 2026.',
    metaDescription:
      'Home-Gallery-Rezension: kostenlose, MIT-lizenzierte Foto- und Videogalerie zum Selbsthosten mit Tags und KI-Suche. Einrichtung per Binärdatei oder Docker.',
    twitterDescription:
      'Home-Gallery-Rezension: eine selbst gehostete Web-Galerie für Fotos und Videos. Einrichtung per Binärdatei oder Docker, KI-Funktionen, die standardmäßig eine öffentliche API aufrufen, eigener API-Server und was wir nicht überprüfen konnten.',
    audience:
      'Selbsthoster mit einem großen lokalen Foto- und Videoarchiv, die wissen möchten, wie aufwendig die Einrichtung ist, welcher KI-Schritt standardmäßig den Rechner verlässt, wie sich alles lokal halten lässt und was die Quellen nicht bestätigen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Home-Gallery Rezension',
    targetKeywords: [
      'home-gallery rezension',
      'fotogalerie selbst hosten',
      'selbst gehostete fotogalerie gesichtserkennung',
      'home gallery xemle github',
      'private fotogalerie nas',
      'api.home-gallery.org',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Home-Gallery (v1.21.0, Stand 30. Oktober 2026) ist eine kostenlose, MIT-lizenzierte Weboberfläche, die Sie selbst für große Foto- und Videoordner betreiben, mit Verschlagwortung und KI-gestützter Bildsuche.** Sie läuft als per Terminal gestartete Binärdatei oder als Docker-Image, nicht über einen Installer.',
    quickAnswerTop: {
      de: {
        question: 'Laufen die KI-Funktionen von Home-Gallery standardmäßig auf Ihrem eigenen Rechner?',
        answer:
          'Nein. Laut README schicken Ähnlichkeitssuche, Objekterkennung und Gesichtserkennung Vorschaubilder an die öffentliche API des Projekts unter api.home-gallery.org, solange Sie den API-Server nicht selbst betreiben. Das Projekt gibt an, dass keine Bilder oder Privatdaten gespeichert werden; PromptQuorum konnte das nicht überprüfen.',
        bullets: [
          'Die drei KI-Funktionen sind Ähnlichkeitssuche, Objekterkennung und Gesichtserkennung.',
          'Jede lässt sich in der Konfigurationsdatei abschalten.',
          'Die Rückwärts-Geokodierung fragt den Nominatim-Dienst von OpenStreetMap ab und übermittelt nur Koordinaten.',
          'Das selbst hostbare API-Server-Image unterstützt amd64 und arm64.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Home-Gallery?', anchor: 'what-is-home-gallery' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Wichtige Funktionen', anchor: 'key-features' },
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
            text:
              'Home-Gallery ist eine selbst gehostete Weboberfläche, die Ihre eigenen Foto- und Videoordner im Browser bereitstellt, mit Verschlagwortung und KI-gestützter Suche nach ähnlichen Bildern, Objekten und Gesichtern.',
          },
          {
            type: 'plain-terms',
            text:
              'Sie starten einen kleinen Server auf einem Computer oder NAS, zeigen ihm Ihre Medienordner und durchsuchen, verschlagworten und finden sie von jedem Gerät in Ihrem Netzwerk aus.',
          },
        ],
        items: [
          'Pflege: Die neueste getaggte Version v1.21.0 wurde am 1. März 2026 gebaut, und das Repository erhielt zuletzt am 13. Oktober 2026 einen Push; eine Warnung wegen Stillstands gilt daher nicht. Das Repository hat keine GitHub-Releases.',
          'Betreiber: Das README nennt es ein privates Hobby- und Freizeitprojekt ohne jede Gewährleistung; die LICENSE-Datei nennt Sebastian Felis als Rechteinhaber.',
          'Einrichtung: Binärdatei für Linux, macOS oder Windows (x64) herunterladen oder Docker nutzen; ein Terminal ist nötig.',
          'Kosten: kostenlos; ein Bezahltarif wurde nicht gefunden.',
          'Umfang: Laut README wird die gesamte Mediendatenbank in den Browser geladen; Größenangaben stehen unter Wichtige Funktionen.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Diese Rezension beruht auf Website, README, Dokumentation, Tags und Changelog des Projekts, geprüft am 30. Oktober 2026. PromptQuorum hat Home-Gallery nicht installiert; Geschwindigkeit, Suchqualität und Genauigkeit der Gesichtserkennung wurden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-home-gallery',
        title: 'Was ist Home-Gallery?',
        content: [
          '**Home-Gallery ist eine selbst gehostete Galerie für Fotos und Videos, die in Ihren eigenen Ordnern bleiben.** Laut README liegen die Medien des Projekts auf einem NAS zu Hause, die Galerie soll nah an dieser Quelle laufen, und Cloud-Dienste deckten die Datenschutzbedenken nicht ab.',
          'Zielgruppe sind laut README technikaffine Nutzer, die ihre Probleme selbst lösen; als Entwurfsziel nennt es nur einen Nutzer, dem alle Dateien bereitgestellt werden. Ein kleiner Webserver liest Ihre Medienordner, und Sie nutzen ihn im Browser oder als installierbare Web-App.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Home-Gallery wird als vorgebaute Kommandozeilen-Binärdatei für Linux, macOS und Windows (x64-Builds) oder als Docker-Image geliefert; einen Doppelklick-Installer oder einen App-Store-Eintrag gibt es nicht.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          {
            Option: 'Linux-Binärdatei',
            Bezug: '[home-gallery-latest-linux-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-linux-x64), danach ausführbar machen',
          },
          {
            Option: 'macOS-Binärdatei',
            Bezug: '[home-gallery-latest-darwin-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-darwin-x64) (x64-Build)',
          },
          {
            Option: 'Windows-Binärdatei',
            Bezug: '[home-gallery-latest-win-x64.exe](https://dl.home-gallery.org/dist/latest/home-gallery-latest-win-x64.exe)',
          },
          {
            Option: 'Docker',
            Bezug: '[xemle/home-gallery auf Docker Hub](https://hub.docker.com/r/xemle/home-gallery); die [Installationsanleitung](https://home-gallery.org/docs/install/index.html) behandelt Compose',
          },
          {
            Option: 'Dokumentation',
            Bezug: '[home-gallery.org/docs](https://home-gallery.org/docs/index.html)',
          },
          {
            Option: 'Website',
            Bezug: '[home-gallery.org](https://home-gallery.org/) (dort ist eine Demo-Galerie verlinkt)',
          },
          {
            Option: 'Quellcode',
            Bezug: '[github.com/xemle/home-gallery](https://github.com/xemle/home-gallery) (MIT)',
          },
          {
            Option: 'Alle Builds',
            Bezug: '[dl.home-gallery.org/dist](https://dl.home-gallery.org/dist) listet jede Version und instabile Builds',
          },
        ],
        note:
          'Geprüfte Version: v1.21.0, laut Download-Index und Git-Tag vom 1. März 2026; das Repository hat keine GitHub-Releases, und der letzte Push vom 13. Oktober 2026 ist unveröffentlichte Arbeit, die im Changelog unter Unreleased steht. Für die Installation brauchen Sie ein Terminal. Laut Anleitung für die Binärdatei startet sie beim ersten Mal langsam, und Sicherheitssoftware unter macOS oder Windows kann die App blockieren, bis Sie sie freigeben. Eine eigene Datenschutzerklärung wurde auf der Projektseite und in der gelesenen Dokumentation nicht gefunden; Aussagen zum Datenschutz stehen im README und auf der Seite zum API-Server.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Diese Schritte folgen README und Dokumentation des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Binärdatei laden oder Image ziehen',
            whyItMatters: 'Laden Sie den Build für Ihr System vom Download-Index, machen Sie ihn unter Linux oder macOS ausführbar, oder nutzen Sie den Docker-Schnellstart aus dem README.',
          },
          {
            title: 'Konfiguration mit Ihrem Fotoordner anlegen',
            whyItMatters: 'Der Init-Befehl nimmt einen oder mehrere Medienordner entgegen und schreibt gallery.config.yml in das aktuelle Verzeichnis.',
          },
          {
            title: 'Server starten und Galerie öffnen',
            whyItMatters: 'Starten Sie den Server-Befehl und öffnen Sie localhost:3000 im Browser; Ihre Medien werden importiert, solange die Seite geöffnet ist.',
          },
          {
            title: 'Festlegen, wo der KI-Schritt läuft',
            whyItMatters: 'Behalten Sie die öffentliche API als Standard, verweisen Sie die Galerie auf Ihren eigenen API-Server oder schalten Sie die KI-Funktionen in der Konfiguration ab.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Alles Folgende stammt aus Website, README oder Dokumentation des Projekts; nichts davon hat PromptQuorum getestet.**',
        ],
        items: [
          '**Durchsuchen.** Eine Web-Galerie für Fotos und Videos, die als mobilfreundlich beschrieben wird und auf der Website als installierbar (PWA) aufgeführt ist.',
          '**Verschlagworten.** Tags für einzelne und für mehrere Bilder.',
          '**Entdecken.** Ähnlichkeitssuche, die Sonnenuntergänge, Essen oder Gebäude ohne manuelle Tags findet, außerdem Objekterkennung, Gesichtserkennung und eine Suche nach ähnlichen Gesichtern.',
          '**Quellen kombinieren.** Mehrere Medienordner, etwa von Festplatte, Kamera und Smartphone, werden in einer Galerie bereitgestellt.',
        ],
        note:
          'Laut README wird die komplette Datenbank in den Browser geladen: rund 100.000 Mediendateien entsprechen etwa 100 MB reinem JSON und 12 MB komprimiert, und ein Nutzer berichtete von einer funktionierenden Einrichtung mit über 400.000 Dateien.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Standardmäßig nutzen Ähnlichkeitssuche, Objekterkennung und Gesichtserkennung die öffentliche API des Projekts unter api.home-gallery.org, und laut README werden alle Vorschaubilder dorthin gesendet.** Das README ergänzt, dass keine Bilder oder Privatdaten gespeichert werden; das ist eine Aussage des Projekts, die PromptQuorum nicht prüfen konnte. Außerdem sagt das README, dass diese öffentliche API schwache Geräte wie den Raspberry Pi unterstützt.',
          'Der API-Server kann stattdessen lokal als Docker-Container laufen, und die Galerie-Konfiguration kann auf ihn verweisen oder jede KI-Funktion abschalten. Damit ist Home-Gallery ab Werk hybrid und wird lokal, sobald Sie den API-Server selbst betreiben. Für die Rückwärts-Geokodierung fragt die Galerie den Nominatim-Dienst von OpenStreetMap ab und übermittelt laut README nur Geokoordinaten. Die Konfigurationsseite beschreibt Anmeldenutzer, Zugriffsregeln und als Standard die Abhöradresse 0.0.0.0 auf Port 3000; ob die Anmeldung ab Werk verlangt wird, sagt sie nicht.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Das sind Aussagen des Projekts und PromptQuorums Lesart seiner Dokumentation. Der Netzwerkverkehr wurde nicht untersucht und der Quellcode nicht geprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die Software eignet',
        items: [
          '**Selbsthoster mit NAS oder Heimserver**, die ihre vorhandenen Foto- und Videoordner ohne Cloud-Konto im Browser bereitstellen möchten.',
          '**Besitzer sehr großer Archive**, die alles in einer Galerie durchsuchen möchten und akzeptieren, dass der gesamte Index im Browser geladen wird.',
          '**Datenschutzbewusste Nutzer mit Docker-Kenntnissen**, die den API-Server selbst betreiben wollen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**KI-Qualität und Modelle.** Die Seite zum API-Server nennt keine Modelle; Suchtreffer, Gesichtserkennung und Geschwindigkeit wurden nicht getestet.',
          '**Hardwarebedarf.** Die gelesene Dokumentation nennt weder für die Galerie noch für einen selbst gehosteten API-Server einen RAM- oder CPU-Mindestbedarf.',
          '**Rein lokaler Betrieb.** Der Betrieb mit selbst gehostetem API-Server ohne Internet wurde nicht getestet.',
          '**Apple Silicon.** Aufgeführt ist nur ein x64-Build für macOS; ob er auf neueren Macs läuft, steht nirgends.',
          '**Veröffentlichungsrhythmus.** Das neueste Tag stammt vom März 2026, während neuere Arbeit im Changelog unter Unreleased steht.',
          '**Installationsschritte.** Die Schritte stammen aus der Dokumentation und wurden von PromptQuorum nicht ausgeführt.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        content: [
          'Im Verzeichnis gibt es drei weitere rezensierte Foto-Bibliotheken im selben Segment.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          {
            App: '[Immich](/de/power-local-llm/immich-review)',
            Plattformen: 'Server (Docker), iOS, Android, Browser',
            'Preis / Lizenz': 'Kostenlos / AGPL-3.0',
            'Wichtigster Unterschied': 'Apps mit Handy-Sicherung und intelligenter Suche auf dem Server; von Home-Gallery wurde keine native App gefunden, nur eine Web-App',
          },
          {
            App: '[PhotoPrism](/de/power-local-llm/photoprism-review)',
            Plattformen: 'Server (Docker), Browser',
            'Preis / Lizenz': 'Kostenlose Community / AGPL-3.0',
            'Wichtigster Unterschied': 'Eingebaute KI für Labels und Gesichter läuft laut Rezension auf Ihrem Server, während Home-Gallery diesen Schritt an einen API-Server übergibt',
          },
          {
            App: '[Facet](/de/power-local-llm/facet-review)',
            Plattformen: 'Docker oder Skript, Browser',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Bewertet und sortiert Fotos auf Ihrem eigenen Rechner aus; Home-Gallery konzentriert sich auf Durchsuchen, Verschlagworten und Entdecken',
          },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wie halte ich den KI-Schritt auf meinem eigenen Rechner?',
            a:
              'Betreiben Sie das Docker-Image xemle/home-gallery-api-server (amd64 und arm64) und tragen Sie in gallery.config.yml bei extractor.apiServer.url dessen Adresse ein; die Dokumentation zeigt ein Beispiel auf Port 3001. Mit extractor.apiServer.disable lassen sich Funktionen auch abschalten; erlaubt sind similarDetection, objectDetection und faceDetection.',
          },
          {
            q: 'Kann ich Home-Gallery vom Smartphone aus nutzen?',
            a:
              'Das README nennt das Ansehen eigener Medien auf dem Smartphone als Ziel, und die Website führt eine PWA auf. Eine native Smartphone-App wurde nicht gefunden.',
          },
          {
            q: 'Unterstützt es mehrere Nutzer?',
            a:
              'Das README nennt einen Nutzer als Zielbild, während die Konfigurationsseite Nutzer, Zugriffsregeln und Filter pro Nutzer beschreibt. PromptQuorum hat Mehrnutzer-Einrichtungen nicht getestet.',
          },
          {
            q: 'Wie aktualisiere ich es?',
            a:
              'Laut Anleitung für die Binärdatei stoppen Sie den Server, ersetzen die Binärdatei und führen den Import-Befehl aus, bevor Sie den Server wieder starten.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Home-Gallery ist ein kostenloser, MIT-lizenzierter Weg, ein großes Foto- und Videoarchiv vom eigenen Server mit Verschlagwortung und KI-gestützter Suche bereitzustellen. Dagegen steht: Die Einrichtung braucht ein Terminal, die KI-Funktionen senden Vorschaubilder an die öffentliche API des Projekts, solange Sie den API-Server nicht selbst betreiben, die neueste getaggte Version stammt vom März 2026, und keine der Aussagen zur KI-Qualität ließ sich hier prüfen. Es eignet sich für Selbsthoster, die mit Docker oder der Kommandozeile zurechtkommen; wer eine Doppelklick-App oder ab Werk rein lokale KI möchte, sollte sich anderswo umsehen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von Home-Gallery](https://home-gallery.org/) — Überblick, Plattformen und Links zur Dokumentation, geprüft am 30. Oktober 2026.',
          '[README von Home-Gallery](https://github.com/xemle/home-gallery/blob/master/README.md) — Motivation, Schnellstart, Grenzen sowie der Abschnitt zu externen Diensten und Datenschutz, geprüft am 30. Oktober 2026.',
          '[Dokumentation zum API-Server](https://home-gallery.org/docs/api-server/index.html) — öffentliche API und lokale Docker-Einrichtung, geprüft am 30. Oktober 2026.',
          '[Konfigurationsdokumentation](https://home-gallery.org/docs/configuration/index.html) — Einstellungen für Server, Anmeldung und Extraktor, geprüft am 30. Oktober 2026.',
          '[Installationsanleitung für die Binärdatei](https://home-gallery.org/docs/install/binary.html) — Plattformen, erster Start und Hinweise zum Update, geprüft am 30. Oktober 2026.',
          '[Home-Gallery auf GitHub](https://github.com/xemle/home-gallery/tags) — Tags, Changelog und Commit-Aktivität, geprüft am 30. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Immich-Rezension](/de/power-local-llm/immich-review) — eine selbst gehostete Fotobibliothek mit Handy-Apps und intelligenter Suche auf dem Server.',
          '[PhotoPrism-Rezension](/de/power-local-llm/photoprism-review) — eine weitere selbst gehostete Fotobibliothek mit eingebauten KI-Labels.',
          '[Facet-Rezension](/de/power-local-llm/facet-review) — lokale Foto-Bewertung, Aussortieren und eine Galerie mit Gesichtsgruppen.',
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
    heroImage: '/images/home-gallery-review-hero-es.webp',
    title: 'Análisis de Home-Gallery: galería de fotos autoalojada con búsqueda por IA',
    seoTitle: 'Home-Gallery: galería de fotos autoalojada con búsqueda IA',
    intro:
      'Home-Gallery es una galería web gratuita y con licencia MIT que alojas tú mismo para explorar, etiquetar y buscar una gran colección de fotos y vídeos. Sus funciones de IA (búsqueda de imágenes similares, detección de objetos y reconocimiento facial) las realiza un servidor de API, y según el README, por defecto es la API pública del proyecto. Este análisis refleja el sitio web, el README, la documentación, las etiquetas y el registro de cambios consultados el 30 de octubre de 2026.',
    metaDescription:
      'Análisis de Home-Gallery: galería autoalojada de fotos y vídeos, gratis y MIT, con etiquetas y búsqueda por IA. Instalación con binario o Docker.',
    twitterDescription:
      'Análisis de Home-Gallery: una galería web autoalojada de fotos y vídeos. Instalación con binario o Docker, funciones de IA que llaman por defecto a una API pública, cómo alojar esa API y lo que no pudimos verificar.',
    audience:
      'Personas que se autoalojan y tienen un gran archivo local de fotos y vídeos y quieren saber cuánto cuesta la instalación, qué paso de IA sale del equipo por defecto, cómo mantenerlo local y qué no confirman las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Análisis de Home-Gallery',
    targetKeywords: [
      'análisis home-gallery',
      'galería de fotos autoalojada',
      'galería de fotos autoalojada reconocimiento facial',
      'home gallery xemle github',
      'galería de fotos privada nas',
      'api.home-gallery.org',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Home-Gallery (v1.21.0 a 30 de octubre de 2026) es una galería web gratuita y con licencia MIT que alojas tú mismo para carpetas grandes de fotos y vídeos, con etiquetado y descubrimiento de imágenes mediante IA.** Se ejecuta desde un binario iniciado en la terminal o una imagen de Docker, no desde un instalador.',
    quickAnswerTop: {
      es: {
        question: '¿Las funciones de IA de Home-Gallery se ejecutan por defecto en tu propio equipo?',
        answer:
          'No. Según su README, la búsqueda de imágenes similares, la detección de objetos y el reconocimiento facial envían imágenes de vista previa a la API pública del proyecto en api.home-gallery.org, salvo que alojes tú mismo el servidor de API. El proyecto afirma que no se conservan imágenes ni datos privados; PromptQuorum no pudo verificarlo.',
        bullets: [
          'Las tres funciones de IA son la búsqueda de imágenes similares, la detección de objetos y el reconocimiento facial.',
          'Cada una se puede desactivar en el archivo de configuración.',
          'La geocodificación inversa consulta el servicio Nominatim de OpenStreetMap y envía solo coordenadas.',
          'La imagen del servidor de API que puedes alojar admite amd64 y arm64.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Home-Gallery?', anchor: 'what-is-home-gallery' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones principales', anchor: 'key-features' },
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
            text:
              'Home-Gallery es una galería web autoalojada que sirve tus propias carpetas de fotos y vídeos a un navegador, con etiquetado y descubrimiento por IA de imágenes similares, objetos y caras.',
          },
          {
            type: 'plain-terms',
            text:
              'Arrancas un pequeño servidor en un ordenador o NAS, le indicas tus carpetas de medios y las exploras, etiquetas y buscas desde cualquier dispositivo de tu red.',
          },
        ],
        items: [
          'Mantenimiento: la versión etiquetada más reciente, v1.21.0, se compiló el 1 de marzo de 2026 y el repositorio recibió su último push el 13 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto inactivo. El repositorio no tiene versiones en GitHub Releases.',
          'Responsable: el README lo describe como un proyecto personal de tiempo libre y sin garantía alguna; el archivo LICENSE nombra a Sebastian Felis como titular de los derechos.',
          'Instalación: descarga un binario para Linux, macOS o Windows (x64) o usa Docker; hace falta una terminal.',
          'Coste: gratuito; no se encontró ningún plan de pago.',
          'Escala: el README dice que toda la base de datos de medios se carga en el navegador; las cifras de tamaño están en Funciones principales.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Este análisis se basa en el sitio web, el README, la documentación, las etiquetas y el registro de cambios del proyecto, consultados el 30 de octubre de 2026. PromptQuorum no ha instalado Home-Gallery, por lo que no se evalúan la velocidad, la calidad de la búsqueda ni la precisión del reconocimiento facial.',
          },
        ],
      },
      overview: {
        id: 'what-is-home-gallery',
        title: '¿Qué es Home-Gallery?',
        content: [
          '**Home-Gallery es una galería autoalojada para fotos y vídeos que permanecen en tus propias carpetas.** Según el README, quien lo creó guarda sus medios en un NAS en casa, quiere la galería cerca de esa fuente y comprobó que los servicios en la nube no cubrían sus preocupaciones de privacidad.',
          'Va dirigido, según el README, a usuarios con conocimientos informáticos que resuelven sus propios problemas, y fija como objetivo de diseño un solo usuario al que se sirven todos los archivos. Un pequeño servidor web lee tus carpetas de medios y lo usas desde el navegador o como aplicación web instalable.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Home-Gallery se distribuye como un binario de línea de comandos ya compilado para Linux, macOS y Windows (compilaciones x64) o como imagen de Docker; no hay instalador con doble clic ni ficha en una tienda de aplicaciones.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          {
            Opción: 'Binario para Linux',
            'Cómo conseguirlo': '[home-gallery-latest-linux-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-linux-x64), y después darle permiso de ejecución',
          },
          {
            Opción: 'Binario para macOS',
            'Cómo conseguirlo': '[home-gallery-latest-darwin-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-darwin-x64) (compilación x64)',
          },
          {
            Opción: 'Binario para Windows',
            'Cómo conseguirlo': '[home-gallery-latest-win-x64.exe](https://dl.home-gallery.org/dist/latest/home-gallery-latest-win-x64.exe)',
          },
          {
            Opción: 'Docker',
            'Cómo conseguirlo': '[xemle/home-gallery en Docker Hub](https://hub.docker.com/r/xemle/home-gallery); la [guía de instalación](https://home-gallery.org/docs/install/index.html) cubre Compose',
          },
          {
            Opción: 'Documentación',
            'Cómo conseguirlo': '[home-gallery.org/docs](https://home-gallery.org/docs/index.html)',
          },
          {
            Opción: 'Sitio web',
            'Cómo conseguirlo': '[home-gallery.org](https://home-gallery.org/) (allí se enlaza una galería de demostración)',
          },
          {
            Opción: 'Código fuente',
            'Cómo conseguirlo': '[github.com/xemle/home-gallery](https://github.com/xemle/home-gallery) (MIT)',
          },
          {
            Opción: 'Todas las compilaciones',
            'Cómo conseguirlo': '[dl.home-gallery.org/dist](https://dl.home-gallery.org/dist) lista todas las versiones y las compilaciones inestables',
          },
        ],
        note:
          'Versión analizada: v1.21.0, fechada el 1 de marzo de 2026 en el índice de descargas y en su etiqueta de git; el repositorio no tiene versiones en GitHub Releases, y su último push del 13 de octubre de 2026 es trabajo sin publicar que figura en Unreleased en el registro de cambios. Instalarlo requiere una terminal. Según la guía del binario, el primer arranque es lento y el software de seguridad de macOS o Windows puede bloquear la aplicación hasta que la autorices. No se encontró una página de política de privacidad propia en el sitio del proyecto ni en la documentación leída; las declaraciones de privacidad están en el README y en la página del servidor de API.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen el README y la documentación del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Descarga el binario o la imagen',
            whyItMatters: 'Descarga la compilación para tu sistema desde el índice de descargas y dale permiso de ejecución en Linux o macOS, o usa el inicio rápido con Docker del README.',
          },
          {
            title: 'Inicializa la configuración con tu carpeta de fotos',
            whyItMatters: 'El comando init recibe una o varias carpetas de medios y escribe gallery.config.yml en el directorio actual.',
          },
          {
            title: 'Inicia el servidor y abre la galería',
            whyItMatters: 'Ejecuta el comando del servidor y abre localhost:3000 en un navegador; tus medios se importan mientras la página está abierta.',
          },
          {
            title: 'Decide dónde se ejecuta el paso de IA',
            whyItMatters: 'Mantén la API pública por defecto, apunta la galería a tu propio servidor de API o desactiva las funciones de IA en la configuración.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Todo lo siguiente procede del sitio web, el README o la documentación del proyecto; PromptQuorum no ha probado nada.**',
        ],
        items: [
          '**Explorar.** Una galería web para fotos y vídeos que se describe como apta para móviles y que el sitio web lista como instalable (PWA).',
          '**Etiquetar.** Etiquetado de una sola imagen y de varias a la vez.',
          '**Descubrir.** Búsqueda de imágenes similares que encuentra puestas de sol, comida o edificios sin etiquetas manuales, además de detección de objetos, detección de caras y búsqueda de caras parecidas.',
          '**Combinar fuentes.** Varias carpetas de medios, como un disco duro, archivos de cámara y archivos del móvil, se sirven en una sola galería.',
        ],
        note:
          'El README dice que la base de datos completa se carga en el navegador: unos 100.000 archivos de medios ocupan aproximadamente 100 MB de JSON sin comprimir y 12 MB comprimidos, y un usuario informó de una instalación correcta con más de 400.000 archivos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**Por defecto, la búsqueda de imágenes similares, la detección de objetos y el reconocimiento facial usan la API pública del proyecto en api.home-gallery.org, y según el README todas las imágenes de vista previa se envían allí.** El README añade que no se conservan imágenes ni datos privados; es una declaración del proyecto que PromptQuorum no pudo comprobar. También dice que esta API pública admite dispositivos de poca potencia como la Raspberry Pi.',
          'El servidor de API puede ejecutarse en local, como contenedor de Docker, y la configuración de la galería puede apuntar a él o desactivar cada función de IA. Eso hace que Home-Gallery sea híbrido de fábrica y local cuando alojas tú mismo el servidor de API. Para la geocodificación inversa, la galería consulta el servicio Nominatim de OpenStreetMap y, según el README, transmite solo coordenadas geográficas. La página de configuración documenta usuarios de acceso, reglas de acceso y la dirección de escucha 0.0.0.0 en el puerto 3000 por defecto, y no indica si el inicio de sesión es obligatorio de fábrica.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Son declaraciones del proyecto y la lectura que PromptQuorum hace de su documentación. No se inspeccionó el tráfico de red ni se auditó el código fuente.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes se autoalojan con un NAS o servidor doméstico** y quieren servir sus carpetas de fotos y vídeos existentes en un navegador sin una cuenta en la nube.',
          '**Dueños de archivos muy grandes** que quieren buscarlo todo en una sola galería y aceptan que todo el índice se cargue en el navegador.',
          '**Usuarios atentos a la privacidad que manejan Docker** y están dispuestos a alojar ellos mismos el servidor de API.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de la IA y modelos.** La página del servidor de API no nombra ningún modelo, y no se probaron la relevancia de la búsqueda, el reconocimiento facial ni la velocidad.',
          '**Necesidades de hardware.** La documentación leída no da un mínimo de RAM ni de CPU, ni para la galería ni para un servidor de API autoalojado.',
          '**Funcionamiento totalmente local.** No se probó el uso con un servidor de API autoalojado y sin internet.',
          '**Apple Silicon.** Solo se lista una compilación x64 para macOS; no se indica si funciona en los Mac más recientes.',
          '**Ritmo de publicación.** La etiqueta más reciente es de marzo de 2026, mientras que el trabajo más nuevo figura en Unreleased en el registro de cambios.',
          '**Pasos de instalación.** Los pasos proceden de la documentación y PromptQuorum no los ejecutó.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio incluye otras tres herramientas de bibliotecas de fotos analizadas en el mismo segmento.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[Immich](/es/power-local-llm/immich-review)',
            Plataformas: 'Servidor (Docker), iOS, Android, navegador',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave': 'Apps con copia de seguridad del móvil y búsqueda inteligente en el servidor; de Home-Gallery no se encontró una app nativa, solo una aplicación web',
          },
          {
            App: '[PhotoPrism](/es/power-local-llm/photoprism-review)',
            Plataformas: 'Servidor (Docker), navegador',
            'Precio / licencia': 'Community gratis / AGPL-3.0',
            'Diferencia clave': 'La IA integrada para etiquetas y caras se ejecuta en tu servidor según su análisis, mientras que Home-Gallery delega ese paso en un servidor de API',
          },
          {
            App: '[Facet](/es/power-local-llm/facet-review)',
            Plataformas: 'Docker o script, navegador',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Puntúa y selecciona fotos en tu propio equipo; Home-Gallery se centra en explorar, etiquetar y descubrir',
          },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cómo mantengo el paso de IA en mi propio equipo?',
            a:
              'Ejecuta la imagen de Docker xemle/home-gallery-api-server (amd64 y arm64) e indica su dirección en extractor.apiServer.url dentro de gallery.config.yml; la documentación muestra un ejemplo en el puerto 3001. También puedes desactivar funciones con extractor.apiServer.disable, que acepta similarDetection, objectDetection y faceDetection.',
          },
          {
            q: '¿Puedo usar Home-Gallery desde el móvil?',
            a:
              'El README menciona como objetivo ver tus propios medios desde un móvil, y el sitio web lista una PWA. No se encontró ninguna app nativa para móvil.',
          },
          {
            q: '¿Admite varios usuarios?',
            a:
              'El README fija un solo usuario como objetivo, mientras que la página de configuración describe usuarios, reglas de acceso y filtros por usuario. PromptQuorum no probó configuraciones con varios usuarios.',
          },
          {
            q: '¿Cómo lo actualizo?',
            a:
              'La guía del binario indica detener el servidor, sustituir el binario y ejecutar el comando de importación antes de volver a iniciar el servidor.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Home-Gallery es una forma gratuita y con licencia MIT de servir un gran archivo de fotos y vídeos desde tu propio servidor, con etiquetado y descubrimiento por IA. En contra: la instalación requiere una terminal, las funciones de IA envían imágenes de vista previa a la API pública del proyecto salvo que alojes el servidor de API, la versión etiquetada más reciente es de marzo de 2026 y no se pudo comprobar ninguna afirmación sobre la calidad de la IA. Encaja con quienes se autoalojan y se manejan con Docker o la línea de comandos; quien busque una app con doble clic o IA totalmente local de serie debería mirar otras opciones.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Home-Gallery](https://home-gallery.org/) — resumen, plataformas y enlaces a la documentación, consultado el 30 de octubre de 2026.',
          '[README de Home-Gallery](https://github.com/xemle/home-gallery/blob/master/README.md) — motivación, inicio rápido, límites y la sección sobre servicios externos y privacidad, consultado el 30 de octubre de 2026.',
          '[Documentación del servidor de API](https://home-gallery.org/docs/api-server/index.html) — API pública y configuración local con Docker, consultado el 30 de octubre de 2026.',
          '[Documentación de configuración](https://home-gallery.org/docs/configuration/index.html) — ajustes del servidor, la autenticación y el extractor, consultado el 30 de octubre de 2026.',
          '[Guía de instalación del binario](https://home-gallery.org/docs/install/binary.html) — plataformas, primer arranque y notas de actualización, consultado el 30 de octubre de 2026.',
          '[Home-Gallery en GitHub](https://github.com/xemle/home-gallery/tags) — etiquetas, registro de cambios y actividad de commits, consultado el 30 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Immich](/es/power-local-llm/immich-review) — una biblioteca de fotos autoalojada con apps para el móvil y búsqueda inteligente en el servidor.',
          '[Análisis de PhotoPrism](/es/power-local-llm/photoprism-review) — otra biblioteca de fotos autoalojada con etiquetas de IA integradas.',
          '[Análisis de Facet](/es/power-local-llm/facet-review) — puntuación y selección local de fotos y una galería con agrupación de caras.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA locales.',
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
    heroImage: '/images/home-gallery-review-hero-fr.webp',
    title: 'Test de Home-Gallery : galerie photo auto-hébergée avec recherche par IA',
    seoTitle: 'Home-Gallery : galerie photo auto-hébergée et recherche IA',
    intro:
      "Home-Gallery est une galerie web gratuite sous licence MIT que vous hébergez vous-même pour parcourir, étiqueter et rechercher une grande collection de photos et de vidéos. Ses fonctions d’IA (recherche d’images similaires, détection d’objets et reconnaissance des visages) sont assurées par un serveur d’API, et d’après le README, il s’agit par défaut de l’API publique du projet. Ce test reflète le site web, le README, la documentation, les tags et le journal des modifications consultés le 30 octobre 2026.",
    metaDescription:
      'Test de Home-Gallery : galerie photo et vidéo auto-hébergée, gratuite et MIT, avec étiquettes et recherche par IA. Installation par binaire ou Docker.',
    twitterDescription:
      'Test de Home-Gallery : une galerie web auto-hébergée de photos et de vidéos. Installation par binaire ou Docker, fonctions d’IA qui appellent par défaut une API publique, comment héberger cette API et ce que nous n’avons pas pu vérifier.',
    audience:
      'Auto-hébergeurs disposant d’une grande archive locale de photos et de vidéos, qui veulent savoir quel effort l’installation demande, quelle étape d’IA quitte la machine par défaut, comment tout garder en local et ce que les sources ne confirment pas.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Test de Home-Gallery',
    targetKeywords: [
      'test home-gallery',
      'galerie photo auto-hébergée',
      'galerie photo auto-hébergée reconnaissance faciale',
      'home gallery xemle github',
      'galerie photo privée nas',
      'api.home-gallery.org',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Home-Gallery (v1.21.0 au 30 octobre 2026) est une galerie web gratuite sous licence MIT que vous hébergez vous-même pour de gros dossiers de photos et de vidéos, avec étiquetage et découverte d’images par IA.** Elle se lance depuis un binaire démarré dans le terminal ou une image Docker, et non depuis un installateur.',
    quickAnswerTop: {
      fr: {
        question: 'Les fonctions d’IA de Home-Gallery s’exécutent-elles par défaut sur votre propre machine ?',
        answer:
          'Non. Selon son README, la recherche d’images similaires, la détection d’objets et la reconnaissance des visages envoient des aperçus à l’API publique du projet, api.home-gallery.org, sauf si vous hébergez vous-même le serveur d’API. Le projet affirme qu’aucune image ni donnée privée n’est conservée ; PromptQuorum n’a pas pu le vérifier.',
        bullets: [
          'Les trois fonctions d’IA sont la recherche d’images similaires, la détection d’objets et la reconnaissance des visages.',
          'Chacune peut être désactivée dans le fichier de configuration.',
          'Le géocodage inverse interroge le service Nominatim d’OpenStreetMap et n’envoie que des coordonnées.',
          'L’image du serveur d’API que vous pouvez héberger prend en charge amd64 et arm64.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Home-Gallery ?', anchor: 'what-is-home-gallery' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions principales', anchor: 'key-features' },
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
            text:
              'Home-Gallery est une galerie web auto-hébergée qui sert vos propres dossiers de photos et de vidéos dans un navigateur, avec étiquetage et découverte par IA d’images similaires, d’objets et de visages.',
          },
          {
            type: 'plain-terms',
            text:
              'Vous lancez un petit serveur sur un ordinateur ou un NAS, vous lui indiquez vos dossiers de médias, puis vous les parcourez, les étiquetez et les recherchez depuis n’importe quel appareil de votre réseau.',
          },
        ],
        items: [
          'Maintenance : la version taguée la plus récente, v1.21.0, a été compilée le 1er mars 2026 et le dépôt a reçu son dernier push le 13 octobre 2026 ; aucun avertissement de projet à l’arrêt ne s’applique. Le dépôt n’a pas de versions sur GitHub Releases.',
          'Éditeur : le README le décrit comme un projet personnel mené sur le temps libre, sans aucune garantie ; le fichier LICENSE désigne Sebastian Felis comme titulaire des droits.',
          'Installation : télécharger un binaire pour Linux, macOS ou Windows (x64) ou utiliser Docker ; un terminal est nécessaire.',
          'Coût : gratuit ; aucune offre payante n’a été trouvée.',
          'Échelle : le README indique que toute la base de données des médias est chargée dans le navigateur ; les chiffres de taille figurent sous Fonctions principales.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Ce test s’appuie sur le site web, le README, la documentation, les tags et le journal des modifications du projet, consultés le 30 octobre 2026. PromptQuorum n’a pas installé Home-Gallery ; la vitesse, la qualité de la recherche et la précision de la reconnaissance des visages ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-home-gallery',
        title: 'Qu’est-ce que Home-Gallery ?',
        content: [
          '**Home-Gallery est une galerie auto-hébergée pour des photos et des vidéos qui restent dans vos propres dossiers.** Le README explique que son auteur conserve ses médias sur un NAS à la maison, veut la galerie au plus près de cette source et a constaté que les services cloud ne répondaient pas à ses préoccupations de confidentialité.',
          'Elle s’adresse, selon le README, à des utilisateurs à l’aise avec l’informatique qui résolvent eux-mêmes leurs problèmes, et elle retient comme objectif de conception un seul utilisateur à qui tous les fichiers sont servis. Un petit serveur web lit vos dossiers de médias, et vous l’utilisez dans un navigateur ou comme application web installable.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Home-Gallery est livré sous forme de binaire en ligne de commande précompilé pour Linux, macOS et Windows (versions x64) ou d’image Docker ; il n’existe ni installateur à double-clic ni fiche sur une boutique d’applications.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          {
            Option: 'Binaire Linux',
            'Comment l’obtenir': '[home-gallery-latest-linux-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-linux-x64), puis le rendre exécutable',
          },
          {
            Option: 'Binaire macOS',
            'Comment l’obtenir': '[home-gallery-latest-darwin-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-darwin-x64) (version x64)',
          },
          {
            Option: 'Binaire Windows',
            'Comment l’obtenir': '[home-gallery-latest-win-x64.exe](https://dl.home-gallery.org/dist/latest/home-gallery-latest-win-x64.exe)',
          },
          {
            Option: 'Docker',
            'Comment l’obtenir': '[xemle/home-gallery sur Docker Hub](https://hub.docker.com/r/xemle/home-gallery) ; le [guide d’installation](https://home-gallery.org/docs/install/index.html) couvre Compose',
          },
          {
            Option: 'Documentation',
            'Comment l’obtenir': '[home-gallery.org/docs](https://home-gallery.org/docs/index.html)',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[home-gallery.org](https://home-gallery.org/) (une galerie de démonstration y est liée)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/xemle/home-gallery](https://github.com/xemle/home-gallery) (MIT)',
          },
          {
            Option: 'Toutes les versions',
            'Comment l’obtenir': '[dl.home-gallery.org/dist](https://dl.home-gallery.org/dist) liste chaque version et les builds instables',
          },
        ],
        note:
          'Version testée : v1.21.0, datée du 1er mars 2026 sur l’index de téléchargement et sur son tag git ; le dépôt n’a pas de versions sur GitHub Releases, et son dernier push du 13 octobre 2026 correspond à du travail non publié, listé sous Unreleased dans le journal des modifications. L’installation demande un terminal. D’après le guide du binaire, le premier démarrage est lent et un logiciel de sécurité sous macOS ou Windows peut bloquer l’application jusqu’à ce que vous l’autorisiez. Aucune page de politique de confidentialité distincte n’a été trouvée sur le site du projet ni dans la documentation lue ; les déclarations sur la confidentialité figurent dans le README et sur la page du serveur d’API.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent le README et la documentation du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Télécharger le binaire ou récupérer l’image',
            whyItMatters: 'Téléchargez la version adaptée à votre système depuis l’index de téléchargement et rendez-la exécutable sous Linux ou macOS, ou suivez le démarrage rapide Docker du README.',
          },
          {
            title: 'Initialiser la configuration avec votre dossier de photos',
            whyItMatters: 'La commande init prend un ou plusieurs dossiers de médias et écrit gallery.config.yml dans le répertoire courant.',
          },
          {
            title: 'Démarrer le serveur et ouvrir la galerie',
            whyItMatters: 'Lancez la commande du serveur et ouvrez localhost:3000 dans un navigateur ; vos médias s’importent tant que la page reste ouverte.',
          },
          {
            title: 'Choisir où s’exécute l’étape d’IA',
            whyItMatters: 'Gardez l’API publique par défaut, pointez la galerie vers votre propre serveur d’API ou désactivez les fonctions d’IA dans la configuration.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Tout ce qui suit provient du site web, du README ou de la documentation du projet ; PromptQuorum n’a rien testé.**',
        ],
        items: [
          '**Parcourir.** Une galerie web pour photos et vidéos, décrite comme adaptée au mobile et listée sur le site web comme installable (PWA).',
          '**Étiqueter.** Étiquetage d’une seule image ou de plusieurs images à la fois.',
          '**Découvrir.** Recherche d’images similaires qui retrouve des couchers de soleil, de la nourriture ou des bâtiments sans étiquettes manuelles, ainsi que détection d’objets, détection des visages et recherche de visages similaires.',
          '**Combiner des sources.** Plusieurs dossiers de médias, par exemple un disque dur, des fichiers d’appareil photo et de téléphone, sont servis dans une même galerie.',
        ],
        note:
          'Le README indique que la base de données complète est chargée dans le navigateur : environ 100 000 fichiers de médias représentent à peu près 100 Mo de JSON brut et 12 Mo compressés, et un utilisateur a signalé une installation réussie avec plus de 400 000 fichiers.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Par défaut, la recherche d’images similaires, la détection d’objets et la reconnaissance des visages utilisent l’API publique du projet, api.home-gallery.org, et d’après le README tous les aperçus y sont envoyés.** Le README ajoute qu’aucune image ni donnée privée n’est conservée ; c’est une déclaration du projet que PromptQuorum n’a pas pu vérifier. Il précise aussi que cette API publique prend en charge des appareils peu puissants comme le Raspberry Pi.',
          'Le serveur d’API peut à la place tourner en local, dans un conteneur Docker, et la configuration de la galerie peut pointer vers lui ou désactiver chaque fonction d’IA. Home-Gallery est donc hybride dès l’installation et devient local une fois que vous hébergez vous-même le serveur d’API. Pour le géocodage inverse, la galerie interroge le service Nominatim d’OpenStreetMap et, selon le README, ne transmet que des coordonnées géographiques. La page de configuration décrit des utilisateurs de connexion, des règles d’accès et, par défaut, l’adresse d’écoute 0.0.0.0 sur le port 3000 ; elle ne dit pas si la connexion est exigée dès l’installation.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Ce sont des déclarations du projet et la lecture que PromptQuorum fait de sa documentation. Le trafic réseau n’a pas été inspecté et le code source n’a pas été audité.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les auto-hébergeurs disposant d’un NAS ou d’un serveur domestique** qui veulent servir leurs dossiers de photos et de vidéos existants dans un navigateur, sans compte cloud.',
          '**Les propriétaires d’archives très volumineuses** qui veulent tout rechercher dans une seule galerie et acceptent que l’index entier soit chargé dans le navigateur.',
          '**Les utilisateurs soucieux de confidentialité qui maîtrisent Docker** et sont prêts à héberger eux-mêmes le serveur d’API.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité de l’IA et modèles.** La page du serveur d’API ne nomme aucun modèle, et la pertinence de la recherche, la reconnaissance des visages et la vitesse n’ont pas été testées.',
          '**Besoins matériels.** La documentation lue ne donne aucun minimum de RAM ni de CPU, ni pour la galerie ni pour un serveur d’API auto-hébergé.',
          '**Fonctionnement entièrement local.** L’utilisation avec un serveur d’API auto-hébergé et sans internet n’a pas été testée.',
          '**Apple Silicon.** Seule une version x64 pour macOS est listée ; rien n’indique si elle fonctionne sur les Mac récents.',
          '**Rythme de publication.** Le tag le plus récent date de mars 2026, tandis que les travaux plus récents figurent sous Unreleased dans le journal des modifications.',
          '**Étapes d’installation.** Les étapes proviennent de la documentation et PromptQuorum ne les a pas exécutées.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'L’annuaire compte trois autres outils de photothèque testés dans le même segment.',
        ],
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Application: '[Immich](/fr/power-local-llm/immich-review)',
            Plateformes: 'Serveur (Docker), iOS, Android, navigateur',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence clé': 'Applications avec sauvegarde du téléphone et recherche intelligente sur le serveur ; aucune application native de Home-Gallery n’a été trouvée, seulement une application web',
          },
          {
            Application: '[PhotoPrism](/fr/power-local-llm/photoprism-review)',
            Plateformes: 'Serveur (Docker), navigateur',
            'Prix / licence': 'Community gratuite / AGPL-3.0',
            'Différence clé': 'L’IA intégrée pour les étiquettes et les visages tourne sur votre serveur selon son test, alors que Home-Gallery confie cette étape à un serveur d’API',
          },
          {
            Application: '[Facet](/fr/power-local-llm/facet-review)',
            Plateformes: 'Docker ou script, navigateur',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Note et trie les photos sur votre propre machine ; Home-Gallery se concentre sur la navigation, l’étiquetage et la découverte',
          },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Comment garder l’étape d’IA sur ma propre machine ?',
            a:
              'Faites tourner l’image Docker xemle/home-gallery-api-server (amd64 et arm64) et indiquez son adresse dans extractor.apiServer.url de gallery.config.yml ; la documentation montre un exemple sur le port 3001. Vous pouvez aussi désactiver des fonctions avec extractor.apiServer.disable, qui accepte similarDetection, objectDetection et faceDetection.',
          },
          {
            q: 'Puis-je utiliser Home-Gallery depuis mon téléphone ?',
            a:
              'Le README cite comme objectif la consultation de vos propres médias depuis un téléphone, et le site web liste une PWA. Aucune application native pour téléphone n’a été trouvée.',
          },
          {
            q: 'Gère-t-il plusieurs utilisateurs ?',
            a:
              'Le README retient un seul utilisateur comme cible, tandis que la page de configuration décrit des utilisateurs, des règles d’accès et des filtres par utilisateur. PromptQuorum n’a pas testé les installations multi-utilisateurs.',
          },
          {
            q: 'Comment le mettre à jour ?',
            a:
              'Le guide du binaire indique d’arrêter le serveur, de remplacer le binaire et de lancer la commande d’import avant de redémarrer le serveur.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Home-Gallery est un moyen gratuit et sous licence MIT de servir une grande archive de photos et de vidéos depuis votre propre serveur, avec étiquetage et découverte par IA. En face : l’installation demande un terminal, les fonctions d’IA envoient des aperçus à l’API publique du projet tant que vous n’hébergez pas le serveur d’API, la version taguée la plus récente date de mars 2026, et aucune affirmation sur la qualité de l’IA n’a pu être vérifiée ici. Il convient aux auto-hébergeurs à l’aise avec Docker ou la ligne de commande ; qui veut une application à double-clic ou une IA entièrement locale d’emblée devra chercher ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Home-Gallery](https://home-gallery.org/) — présentation, plateformes et liens vers la documentation, consulté le 30 octobre 2026.',
          '[README de Home-Gallery](https://github.com/xemle/home-gallery/blob/master/README.md) — motivation, démarrage rapide, limites et section sur les services externes et la confidentialité, consulté le 30 octobre 2026.',
          '[Documentation du serveur d’API](https://home-gallery.org/docs/api-server/index.html) — API publique et installation locale avec Docker, consulté le 30 octobre 2026.',
          '[Documentation de configuration](https://home-gallery.org/docs/configuration/index.html) — réglages du serveur, de l’authentification et de l’extracteur, consulté le 30 octobre 2026.',
          '[Guide d’installation du binaire](https://home-gallery.org/docs/install/binary.html) — plateformes, premier démarrage et notes de mise à jour, consulté le 30 octobre 2026.',
          '[Home-Gallery sur GitHub](https://github.com/xemle/home-gallery/tags) — tags, journal des modifications et activité des commits, consulté le 30 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’Immich](/fr/power-local-llm/immich-review) — une photothèque auto-hébergée avec applications mobiles et recherche intelligente sur le serveur.',
          '[Test de PhotoPrism](/fr/power-local-llm/photoprism-review) — une autre photothèque auto-hébergée avec étiquettes d’IA intégrées.',
          '[Test de Facet](/fr/power-local-llm/facet-review) — notation et tri locaux des photos et galerie avec regroupement des visages.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locaux.',
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
    heroImage: '/images/home-gallery-review-hero-ja.webp',
    title: 'Home-Galleryレビュー：AI検索付きセルフホスト型フォトギャラリー',
    seoTitle: 'Home-Galleryレビュー：セルフホスト型フォトギャラリー',
    intro:
      'Home-Galleryは、大量の写真や動画を閲覧・タグ付け・検索するために自分で運用する、無料のMITライセンスのWebギャラリーです。AI機能（類似画像検索、物体検出、顔認識）はAPIサーバーが担当し、READMEによると既定ではプロジェクトの公開APIです。このレビューは、2026年10月30日に確認したWebサイト、README、ドキュメント、タグ、変更履歴に基づいています。',
    metaDescription:
      'Home-Galleryのレビュー：タグ付けとAI検索を備えた、無料・MITライセンスのセルフホスト型写真・動画ギャラリー。バイナリまたはDockerで導入し、AIが送信するデータも解説します。',
    twitterDescription:
      'Home-Galleryのレビュー：セルフホスト型の写真・動画Webギャラリー。バイナリまたはDockerでの導入、既定で公開APIを呼び出すAI機能、そのAPIの自前運用、確認できなかった点を整理します。',
    audience:
      '大量の写真・動画をローカルに持つセルフホスト利用者で、導入の手間、既定でマシンの外に出るAI処理、ローカルに保つ方法、情報源が確認していない点を知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Home-Galleryレビュー',
    targetKeywords: [
      'home-gallery レビュー',
      'セルフホスト フォトギャラリー',
      'セルフホスト 写真 顔認識',
      'home gallery xemle github',
      'プライベート フォトギャラリー nas',
      'api.home-gallery.org',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Home-Gallery（2026年10月30日時点でv1.21.0）は、大きな写真・動画フォルダ向けに自分で運用する無料のMITライセンスのWebギャラリーで、タグ付けとAIによる画像探索を備えています。** インストーラーではなく、ターミナルから起動するバイナリまたはDockerイメージで動かします。',
    quickAnswerTop: {
      ja: {
        question: 'Home-GalleryのAI機能は、既定で自分のマシン上で動きますか？',
        answer:
          'いいえ。READMEによると、類似画像検索、物体検出、顔認識は、APIサーバーを自分で運用しない限り、プレビュー画像をプロジェクトの公開API（api.home-gallery.org）に送ります。プロジェクトは画像や個人データを保持しないとしていますが、PromptQuorumでは確認できていません。',
        bullets: [
          'AI機能は類似画像検索、物体検出、顔認識の3つです。',
          'それぞれ設定ファイルで無効にできます。',
          '逆ジオコーディングはOpenStreetMapのNominatimサービスに座標のみを送ります。',
          '自前運用できるAPIサーバーのイメージはamd64とarm64に対応しています。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Home-Galleryとは', anchor: 'what-is-home-gallery' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '主な機能', anchor: 'key-features' },
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
            text:
              'Home-Galleryは、自分の写真・動画フォルダをブラウザに提供するセルフホスト型のWebギャラリーで、タグ付けと、AIによる類似画像・物体・顔の探索を備えています。',
          },
          {
            type: 'plain-terms',
            text:
              'パソコンやNAS上で小さなサーバーを起動してメディアフォルダを指定すると、ネットワーク内のどの端末からでも閲覧・タグ付け・検索できます。',
          },
        ],
        items: [
          'メンテナンス：タグ付きの最新版v1.21.0は2026年3月1日にビルドされ、リポジトリへの最後のプッシュは2026年10月13日のため、更新停止の警告は該当しません。リポジトリにGitHub Releasesはありません。',
          '運営：READMEは「保証のない個人の趣味・余暇プロジェクト」と説明しており、LICENSEファイルの著作権者はSebastian Felisです。',
          '導入：Linux、macOS、Windows（x64）向けバイナリをダウンロードするかDockerを使います。ターミナルが必要です。',
          '費用：無料です。有料プランは見つかりませんでした。',
          '規模：READMEによると、メディアのデータベース全体がブラウザに読み込まれます。サイズの目安は「主な機能」にあります。',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'このレビューは、2026年10月30日に確認したプロジェクトのWebサイト、README、ドキュメント、タグ、変更履歴に基づいています。PromptQuorumはHome-Galleryをインストールしていないため、速度、検索品質、顔認識の精度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-home-gallery',
        title: 'Home-Galleryとは',
        content: [
          '**Home-Galleryは、自分のフォルダに置いたままの写真と動画を提供するセルフホスト型ギャラリーです。** READMEによると、作者は自宅のNASにメディアを保管しており、ギャラリーをその保管先の近くに置きたいと考え、クラウドサービスではプライバシー面の懸念が解消されなかったとしています。',
          'READMEは、自分で問題を解決できるコンピューターに詳しい利用者を想定し、設計上の対象を「全ファイルを提供する1人のユーザー」としています。小さなWebサーバーがメディアフォルダを読み込み、ブラウザまたはインストール可能なWebアプリから利用します。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Home-Galleryは、Linux、macOS、Windows向け（x64ビルド）のビルド済みコマンドラインバイナリ、またはDockerイメージとして配布されています。ダブルクリックで入るインストーラーやアプリストアの掲載はありません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          {
            '項目': 'Linux用バイナリ',
            '入手方法': '[home-gallery-latest-linux-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-linux-x64)。ダウンロード後に実行権限を付与します',
          },
          {
            '項目': 'macOS用バイナリ',
            '入手方法': '[home-gallery-latest-darwin-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-darwin-x64)（x64ビルド）',
          },
          {
            '項目': 'Windows用バイナリ',
            '入手方法': '[home-gallery-latest-win-x64.exe](https://dl.home-gallery.org/dist/latest/home-gallery-latest-win-x64.exe)',
          },
          {
            '項目': 'Docker',
            '入手方法': '[Docker HubのDockerイメージ xemle/home-gallery](https://hub.docker.com/r/xemle/home-gallery)。[インストールガイド](https://home-gallery.org/docs/install/index.html)にComposeの手順があります',
          },
          {
            '項目': 'ドキュメント',
            '入手方法': '[home-gallery.org/docs](https://home-gallery.org/docs/index.html)',
          },
          {
            '項目': 'Webサイト',
            '入手方法': '[home-gallery.org](https://home-gallery.org/)（デモギャラリーへのリンクあり）',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[github.com/xemle/home-gallery](https://github.com/xemle/home-gallery)（MIT）',
          },
          {
            '項目': 'すべてのビルド',
            '入手方法': '[dl.home-gallery.org/dist](https://dl.home-gallery.org/dist)に全バージョンと不安定版が並んでいます',
          },
        ],
        note:
          '確認したバージョン：v1.21.0。ダウンロード一覧とGitタグでは2026年3月1日付で、リポジトリにGitHub Releasesはなく、2026年10月13日の最後のプッシュは変更履歴のUnreleasedに載る未公開の作業です。導入にはターミナルが必要です。バイナリのガイドによると、初回起動は遅く、macOSやWindowsのセキュリティソフトがアプリをブロックして許可が必要になる場合があります。プロジェクトのサイトと読んだドキュメントに独立したプライバシーポリシーのページは見つからず、プライバシーに関する記述はREADMEとAPIサーバーのページにあります。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はプロジェクトのREADMEとドキュメントに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'バイナリをダウンロードするかイメージを取得する',
            whyItMatters: 'ダウンロード一覧から自分の環境向けのビルドを取得し、LinuxやmacOSでは実行権限を付けます。READMEのDockerクイックスタートでも構いません。',
          },
          {
            title: '写真フォルダを指定して設定を初期化する',
            whyItMatters: 'initコマンドに1つ以上のメディアフォルダを渡すと、カレントディレクトリにgallery.config.ymlが作られます。',
          },
          {
            title: 'サーバーを起動してギャラリーを開く',
            whyItMatters: 'サーバーのコマンドを実行し、ブラウザでlocalhost:3000を開きます。ページを開いている間にメディアが取り込まれます。',
          },
          {
            title: 'AI処理をどこで動かすか決める',
            whyItMatters: '既定の公開APIのまま使うか、自前のAPIサーバーを指定するか、設定でAI機能を無効にします。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下はすべてプロジェクトのWebサイト、README、ドキュメントの記載で、PromptQuorumは検証していません。**',
        ],
        items: [
          '**閲覧。** 写真と動画のWebギャラリーで、モバイル対応とされ、Webサイトではインストール可能（PWA）と記載されています。',
          '**タグ付け。** 画像1枚単位でも複数まとめてでもタグを付けられます。',
          '**探索。** 夕焼け、食べ物、建物などを手動のタグなしで探せる類似画像検索、物体検出、顔検出、似た顔の検索があります。',
          '**複数ソースの統合。** ハードディスク、カメラのファイル、スマートフォンのファイルなど複数のメディアフォルダを1つのギャラリーで提供します。',
        ],
        note:
          'READMEによると、データベース全体がブラウザに読み込まれます。約10万件のメディアで、プレーンなJSONが約100 MB、圧縮すると約12 MBで、40万件を超えるファイルで問題なく動いたという利用者の報告があります。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**既定では、類似画像検索、物体検出、顔認識はプロジェクトの公開API（api.home-gallery.org）を使い、READMEによるとすべてのプレビュー画像がそこに送られます。** READMEは画像や個人データは保持されないと付け加えていますが、これはプロジェクト自身の主張で、PromptQuorumでは確認できていません。また、この公開APIはRaspberry Piのような低性能の端末に対応するとREADMEは述べています。',
          'APIサーバーはDockerコンテナとしてローカルで動かすこともでき、ギャラリーの設定でそちらを指定するか、各AI機能を無効にできます。そのためHome-Galleryは初期状態ではハイブリッドで、APIサーバーを自前で運用するとローカルになります。逆ジオコーディングでは、ギャラリーがOpenStreetMapのNominatimサービスに問い合わせ、READMEによると送るのは位置座標のみです。設定ページにはログインユーザー、アクセスルール、既定の待ち受けアドレス0.0.0.0（ポート3000）の記載がありますが、初期状態でサインインが必須かどうかは書かれていません。',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'これらはプロジェクトの記載と、そのドキュメントに対するPromptQuorumの解釈です。ネットワーク通信は調べておらず、ソースコードも監査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**NASやホームサーバーを持つセルフホスト利用者。** クラウドのアカウントなしで、既存の写真・動画フォルダをブラウザから使いたい方。',
          '**非常に大きなアーカイブの持ち主。** すべてを1つのギャラリーで検索したく、インデックス全体がブラウザに読み込まれることを許容できる方。',
          '**Dockerを扱えるプライバシー重視の利用者。** APIサーバーを自分で運用する意思のある方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**AIの品質とモデル。** APIサーバーのページにモデル名はなく、検索の関連性、顔認識、速度は検証していません。',
          '**必要なハードウェア。** 読んだドキュメントには、ギャラリー本体にも自前のAPIサーバーにも、RAMやCPUの最低要件の記載がありません。',
          '**完全なローカル運用。** 自前のAPIサーバーを使いインターネットなしで動かす検証はしていません。',
          '**Apple Silicon。** macOS向けはx64ビルドのみ記載されており、新しいMacで動くかどうかは書かれていません。',
          '**リリースの頻度。** 最新のタグは2026年3月のもので、それより新しい作業は変更履歴のUnreleasedにあります。',
          '**導入手順。** 手順はドキュメントに基づくもので、PromptQuorumは実行していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、同じ分野でレビュー済みの写真ライブラリツールがほかに3つあります。',
        ],
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Immich](/ja/power-local-llm/immich-review)',
            '対応プラットフォーム': 'サーバー（Docker）、iOS、Android、ブラウザ',
            '価格／ライセンス': '無料／AGPL-3.0',
            '主な違い': 'スマートフォンのバックアップ付きアプリとサーバー側のスマート検索があります。Home-Galleryにはネイティブアプリは見つからず、Webアプリのみです',
          },
          {
            'アプリ': '[PhotoPrism](/ja/power-local-llm/photoprism-review)',
            '対応プラットフォーム': 'サーバー（Docker）、ブラウザ',
            '価格／ライセンス': '無料のCommunity／AGPL-3.0',
            '主な違い': 'レビューによると、ラベルと顔の内蔵AIは自分のサーバーで動きます。Home-GalleryはこのAI処理をAPIサーバーに任せます',
          },
          {
            'アプリ': '[Facet](/ja/power-local-llm/facet-review)',
            '対応プラットフォーム': 'Dockerまたはスクリプト、ブラウザ',
            '価格／ライセンス': '無料／MIT',
            '主な違い': '自分のマシンで写真をスコアリングして選別します。Home-Galleryは閲覧、タグ付け、探索に重点があります',
          },
        ],
        note: '各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれのページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'AI処理を自分のマシンに留めるには？',
            a:
              'Dockerイメージxemle/home-gallery-api-server（amd64とarm64）を動かし、gallery.config.ymlのextractor.apiServer.urlにそのアドレスを設定します。ドキュメントにはポート3001の例があります。extractor.apiServer.disableで機能を無効にすることもでき、similarDetection、objectDetection、faceDetectionを指定できます。',
          },
          {
            q: 'スマートフォンから使えますか？',
            a:
              'READMEはスマートフォンで自分のメディアを見ることを目標に挙げており、WebサイトにはPWAの記載があります。ネイティブのスマホアプリは見つかりませんでした。',
          },
          {
            q: '複数ユーザーに対応していますか？',
            a:
              'READMEは1人のユーザーを想定としていますが、設定ページにはユーザー、アクセスルール、ユーザーごとのフィルターの説明があります。PromptQuorumは複数ユーザー構成を検証していません。',
          },
          {
            q: 'どうやって更新しますか？',
            a:
              'バイナリのガイドによると、サーバーを止めてバイナリを置き換え、サーバーを再起動する前にインポートのコマンドを実行します。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Home-Galleryは、大量の写真・動画のアーカイブを自分のサーバーから、タグ付けとAIによる探索つきで提供できる、無料のMITライセンスの選択肢です。一方で、導入にはターミナルが必要で、APIサーバーを自前で運用しない限りAI機能はプレビュー画像をプロジェクトの公開APIに送り、タグ付きの最新版は2026年3月のもので、AIの品質に関する主張はここでは確認できませんでした。Dockerやコマンドラインになじんだセルフホスト利用者に向いており、ダブルクリックで使えるアプリや、最初から完全にローカルなAIを求める方は他を検討してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Home-GalleryのWebサイト](https://home-gallery.org/) — 概要、対応プラットフォーム、ドキュメントへのリンク。2026年10月30日確認。',
          '[Home-GalleryのREADME](https://github.com/xemle/home-gallery/blob/master/README.md) — 動機、クイックスタート、制限、外部サービスとプライバシーの節。2026年10月30日確認。',
          '[APIサーバーのドキュメント](https://home-gallery.org/docs/api-server/index.html) — 公開APIとローカルのDocker構成。2026年10月30日確認。',
          '[設定のドキュメント](https://home-gallery.org/docs/configuration/index.html) — サーバー、認証、エクストラクターの設定。2026年10月30日確認。',
          '[バイナリのインストールガイド](https://home-gallery.org/docs/install/binary.html) — 対応プラットフォーム、初回起動、アップグレードの注意点。2026年10月30日確認。',
          '[GitHubのHome-Gallery](https://github.com/xemle/home-gallery/tags) — タグ、変更履歴、コミットの活動状況。2026年10月30日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Immichレビュー](/ja/power-local-llm/immich-review) — スマホアプリとサーバー側のスマート検索を備えたセルフホスト型フォトライブラリ。',
          '[PhotoPrismレビュー](/ja/power-local-llm/photoprism-review) — 内蔵AIラベルを備えた、もう1つのセルフホスト型フォトライブラリ。',
          '[Facetレビュー](/ja/power-local-llm/facet-review) — ローカルでの写真スコアリング・選別と、顔のグループ化ができるギャラリー。',
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
    heroImage: '/images/home-gallery-review-hero-pt.webp',
    title: 'Análise do Home-Gallery: galeria de fotos auto-hospedada com busca por IA',
    seoTitle: 'Home-Gallery: galeria de fotos auto-hospedada com busca IA',
    intro:
      'O Home-Gallery é uma galeria web gratuita, com licença MIT, que você hospeda por conta própria para navegar, etiquetar e buscar uma grande coleção de fotos e vídeos. Os recursos de IA (busca de imagens semelhantes, detecção de objetos e reconhecimento facial) são feitos por um servidor de API, e segundo o README, por padrão ele é a API pública do projeto. Esta análise reflete o site, o README, a documentação, as tags e o changelog consultados em 30 de outubro de 2026.',
    metaDescription:
      'Análise do Home-Gallery: galeria de fotos e vídeos auto-hospedada, grátis e MIT, com etiquetas e busca por IA. Instalação por binário ou Docker.',
    twitterDescription:
      'Análise do Home-Gallery: uma galeria web auto-hospedada de fotos e vídeos. Instalação por binário ou Docker, recursos de IA que chamam por padrão uma API pública, como hospedar essa API e o que não conseguimos verificar.',
    audience:
      'Quem se auto-hospeda e tem um grande acervo local de fotos e vídeos e quer saber o esforço de instalação, qual etapa de IA sai do computador por padrão, como manter tudo local e o que as fontes não confirmam.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Análise do Home-Gallery',
    targetKeywords: [
      'análise home-gallery',
      'galeria de fotos auto-hospedada',
      'galeria de fotos auto-hospedada reconhecimento facial',
      'home gallery xemle github',
      'galeria de fotos privada nas',
      'api.home-gallery.org',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**O Home-Gallery (v1.21.0 em 30 de outubro de 2026) é uma galeria web gratuita, com licença MIT, que você hospeda por conta própria para pastas grandes de fotos e vídeos, com etiquetagem e descoberta de imagens por IA.** Ele roda a partir de um binário iniciado no terminal ou de uma imagem Docker, não de um instalador.',
    quickAnswerTop: {
      pt: {
        question: 'Os recursos de IA do Home-Gallery rodam por padrão no seu próprio computador?',
        answer:
          'Não. Segundo o README, a busca de imagens semelhantes, a detecção de objetos e o reconhecimento facial enviam imagens de pré-visualização para a API pública do projeto em api.home-gallery.org, a menos que você hospede o servidor de API por conta própria. O projeto afirma que nenhuma imagem ou dado privado é guardado; a PromptQuorum não conseguiu verificar isso.',
        bullets: [
          'Os três recursos de IA são busca de imagens semelhantes, detecção de objetos e reconhecimento facial.',
          'Cada um pode ser desativado no arquivo de configuração.',
          'A geocodificação reversa consulta o serviço Nominatim do OpenStreetMap e envia apenas coordenadas.',
          'A imagem do servidor de API que você pode hospedar oferece suporte a amd64 e arm64.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Home-Gallery?', anchor: 'what-is-home-gallery' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Principais recursos', anchor: 'key-features' },
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
            text:
              'O Home-Gallery é uma galeria web auto-hospedada que serve suas próprias pastas de fotos e vídeos a um navegador, com etiquetagem e descoberta por IA de imagens semelhantes, objetos e rostos.',
          },
          {
            type: 'plain-terms',
            text:
              'Você inicia um pequeno servidor em um computador ou NAS, indica suas pastas de mídia e as navega, etiqueta e busca de qualquer dispositivo da sua rede.',
          },
        ],
        items: [
          'Manutenção: a versão com tag mais recente, v1.21.0, foi compilada em 1º de março de 2026 e o repositório recebeu o último push em 13 de outubro de 2026, então nenhum aviso de projeto parado se aplica. O repositório não tem versões no GitHub Releases.',
          'Responsável: o README o descreve como um projeto pessoal de tempo livre e sem nenhuma garantia; o arquivo LICENSE nomeia Sebastian Felis como titular dos direitos.',
          'Instalação: baixar um binário para Linux, macOS ou Windows (x64) ou usar Docker; é preciso um terminal.',
          'Custo: gratuito; nenhum plano pago foi encontrado.',
          'Escala: o README diz que todo o banco de dados de mídia é carregado no navegador; os números de tamanho estão em Principais recursos.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Esta análise se baseia no site, no README, na documentação, nas tags e no changelog do projeto, consultados em 30 de outubro de 2026. A PromptQuorum não instalou o Home-Gallery, portanto velocidade, qualidade da busca e precisão do reconhecimento facial não foram avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-home-gallery',
        title: 'O que é o Home-Gallery?',
        content: [
          '**O Home-Gallery é uma galeria auto-hospedada para fotos e vídeos que continuam nas suas próprias pastas.** Segundo o README, quem criou o projeto guarda a mídia em um NAS em casa, quer a galeria perto dessa fonte e concluiu que os serviços em nuvem não atendiam às suas preocupações de privacidade.',
          'O público-alvo, conforme o README, são usuários com afinidade por computadores que resolvem os próprios problemas, e o objetivo de projeto é um único usuário, para quem todos os arquivos são servidos. Um pequeno servidor web lê suas pastas de mídia, e você o usa pelo navegador ou como aplicativo web instalável.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Home-Gallery é distribuído como um binário de linha de comando já compilado para Linux, macOS e Windows (builds x64) ou como imagem Docker; não há instalador de duplo clique nem página em loja de aplicativos.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          {
            'Opção': 'Binário para Linux',
            'Onde obter': '[home-gallery-latest-linux-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-linux-x64), depois torná-lo executável',
          },
          {
            'Opção': 'Binário para macOS',
            'Onde obter': '[home-gallery-latest-darwin-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-darwin-x64) (build x64)',
          },
          {
            'Opção': 'Binário para Windows',
            'Onde obter': '[home-gallery-latest-win-x64.exe](https://dl.home-gallery.org/dist/latest/home-gallery-latest-win-x64.exe)',
          },
          {
            'Opção': 'Docker',
            'Onde obter': '[xemle/home-gallery no Docker Hub](https://hub.docker.com/r/xemle/home-gallery); o [guia de instalação](https://home-gallery.org/docs/install/index.html) cobre o Compose',
          },
          {
            'Opção': 'Documentação',
            'Onde obter': '[home-gallery.org/docs](https://home-gallery.org/docs/index.html)',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[home-gallery.org](https://home-gallery.org/) (há uma galeria de demonstração linkada lá)',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[github.com/xemle/home-gallery](https://github.com/xemle/home-gallery) (MIT)',
          },
          {
            'Opção': 'Todos os builds',
            'Onde obter': '[dl.home-gallery.org/dist](https://dl.home-gallery.org/dist) lista todas as versões e os builds instáveis',
          },
        ],
        note:
          'Versão analisada: v1.21.0, datada de 1º de março de 2026 no índice de downloads e na tag do git; o repositório não tem versões no GitHub Releases, e o último push, de 13 de outubro de 2026, é trabalho não publicado que aparece em Unreleased no changelog. A instalação exige um terminal. Segundo o guia do binário, a primeira inicialização é lenta, e o software de segurança do macOS ou do Windows pode bloquear o app até você liberá-lo. Não foi encontrada uma página própria de política de privacidade no site do projeto nem na documentação lida; as declarações de privacidade estão no README e na página do servidor de API.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem o README e a documentação do projeto; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Baixe o binário ou obtenha a imagem',
            whyItMatters: 'Baixe o build do seu sistema no índice de downloads e torne-o executável no Linux ou no macOS, ou use o início rápido com Docker do README.',
          },
          {
            title: 'Inicialize a configuração com a sua pasta de fotos',
            whyItMatters: 'O comando init recebe uma ou mais pastas de mídia e grava o gallery.config.yml no diretório atual.',
          },
          {
            title: 'Inicie o servidor e abra a galeria',
            whyItMatters: 'Execute o comando do servidor e abra localhost:3000 no navegador; suas mídias são importadas enquanto a página está aberta.',
          },
          {
            title: 'Decida onde a etapa de IA roda',
            whyItMatters: 'Mantenha a API pública padrão, aponte a galeria para o seu próprio servidor de API ou desative os recursos de IA na configuração.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Tudo a seguir vem do site, do README ou da documentação do projeto; a PromptQuorum não testou nada.**',
        ],
        items: [
          '**Navegar.** Uma galeria web para fotos e vídeos descrita como adequada a celulares e listada no site como instalável (PWA).',
          '**Etiquetar.** Etiquetagem de uma imagem ou de várias de uma vez.',
          '**Descobrir.** Busca de imagens semelhantes que encontra pores do sol, comida ou prédios sem etiquetas manuais, além de detecção de objetos, detecção de rostos e busca por rostos parecidos.',
          '**Combinar fontes.** Várias pastas de mídia, como disco rígido, arquivos de câmera e arquivos do celular, são servidas em uma única galeria.',
        ],
        note:
          'O README diz que o banco de dados completo é carregado no navegador: cerca de 100.000 arquivos de mídia equivalem a aproximadamente 100 MB de JSON simples e 12 MB compactados, e um usuário relatou uma instalação bem-sucedida com mais de 400.000 arquivos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**Por padrão, a busca de imagens semelhantes, a detecção de objetos e o reconhecimento facial usam a API pública do projeto em api.home-gallery.org, e segundo o README todas as imagens de pré-visualização são enviadas para lá.** O README acrescenta que nenhuma imagem ou dado privado é guardado; é uma declaração do projeto que a PromptQuorum não conseguiu checar. Ele também diz que essa API pública atende dispositivos de baixa potência, como o Raspberry Pi.',
          'O servidor de API pode rodar localmente, como contêiner Docker, e a configuração da galeria pode apontar para ele ou desativar cada recurso de IA. Isso torna o Home-Gallery híbrido de fábrica e local quando você hospeda o servidor de API por conta própria. Na geocodificação reversa, a galeria consulta o serviço Nominatim do OpenStreetMap e, segundo o README, transmite apenas coordenadas geográficas. A página de configuração documenta usuários de login, regras de acesso e o endereço de escuta padrão 0.0.0.0 na porta 3000, e não diz se o login é exigido de fábrica.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Estas são declarações do projeto e a leitura que a PromptQuorum faz da documentação dele. O tráfego de rede não foi inspecionado e o código-fonte não foi auditado.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Quem se auto-hospeda com um NAS ou servidor doméstico** e quer servir suas pastas de fotos e vídeos existentes no navegador, sem conta na nuvem.',
          '**Donos de acervos muito grandes** que querem buscar tudo em uma só galeria e aceitam que o índice inteiro seja carregado no navegador.',
          '**Usuários preocupados com privacidade que dominam o Docker** e topam hospedar o servidor de API por conta própria.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade da IA e modelos.** A página do servidor de API não cita modelos, e a relevância da busca, o reconhecimento facial e a velocidade não foram testados.',
          '**Necessidades de hardware.** A documentação lida não informa mínimo de RAM ou CPU, nem para a galeria nem para um servidor de API auto-hospedado.',
          '**Operação totalmente local.** O uso com servidor de API próprio e sem internet não foi testado.',
          '**Apple Silicon.** Só há um build x64 para macOS listado; não se diz se ele roda nos Macs mais novos.',
          '**Ritmo de lançamentos.** A tag mais recente é de março de 2026, enquanto o trabalho mais novo aparece em Unreleased no changelog.',
          '**Passos de instalação.** Os passos vêm da documentação e não foram executados pela PromptQuorum.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório tem outras três ferramentas de biblioteca de fotos analisadas no mesmo segmento.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Immich](/pt/power-local-llm/immich-review)',
            Plataformas: 'Servidor (Docker), iOS, Android, navegador',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'Apps com backup do celular e busca inteligente no servidor; do Home-Gallery não foi encontrado app nativo, só um aplicativo web',
          },
          {
            App: '[PhotoPrism](/pt/power-local-llm/photoprism-review)',
            Plataformas: 'Servidor (Docker), navegador',
            'Preço / licença': 'Community grátis / AGPL-3.0',
            'Diferença principal': 'A IA integrada para rótulos e rostos roda no seu servidor segundo a análise dele, enquanto o Home-Gallery entrega essa etapa a um servidor de API',
          },
          {
            App: '[Facet](/pt/power-local-llm/facet-review)',
            Plataformas: 'Docker ou script, navegador',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Pontua e seleciona fotos no seu próprio computador; o Home-Gallery foca em navegar, etiquetar e descobrir',
          },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Como mantenho a etapa de IA no meu próprio computador?',
            a:
              'Rode a imagem Docker xemle/home-gallery-api-server (amd64 e arm64) e informe o endereço dela em extractor.apiServer.url no gallery.config.yml; a documentação mostra um exemplo na porta 3001. Também é possível desativar recursos com extractor.apiServer.disable, que aceita similarDetection, objectDetection e faceDetection.',
          },
          {
            q: 'Posso usar o Home-Gallery pelo celular?',
            a:
              'O README cita como objetivo ver as próprias mídias pelo celular, e o site lista uma PWA. Nenhum app nativo para celular foi encontrado.',
          },
          {
            q: 'Ele aceita vários usuários?',
            a:
              'O README indica um único usuário como alvo, enquanto a página de configuração descreve usuários, regras de acesso e filtros por usuário. A PromptQuorum não testou instalações com vários usuários.',
          },
          {
            q: 'Como atualizo?',
            a:
              'O guia do binário diz para parar o servidor, substituir o binário e executar o comando de importação antes de iniciar o servidor de novo.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Home-Gallery é um jeito gratuito, com licença MIT, de servir um grande acervo de fotos e vídeos do seu próprio servidor, com etiquetagem e descoberta por IA. Em contrapartida, a instalação exige um terminal, os recursos de IA enviam imagens de pré-visualização à API pública do projeto a menos que você hospede o servidor de API, a versão com tag mais recente é de março de 2026 e nenhuma afirmação sobre a qualidade da IA pôde ser verificada aqui. Serve a quem se auto-hospeda e se sente à vontade com Docker ou linha de comando; quem quer um app de duplo clique ou IA totalmente local de fábrica deve procurar outra opção.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Home-Gallery](https://home-gallery.org/) — visão geral, plataformas e links para a documentação, consultado em 30 de outubro de 2026.',
          '[README do Home-Gallery](https://github.com/xemle/home-gallery/blob/master/README.md) — motivação, início rápido, limites e a seção sobre serviços externos e privacidade, consultado em 30 de outubro de 2026.',
          '[Documentação do servidor de API](https://home-gallery.org/docs/api-server/index.html) — API pública e configuração local com Docker, consultado em 30 de outubro de 2026.',
          '[Documentação de configuração](https://home-gallery.org/docs/configuration/index.html) — ajustes de servidor, autenticação e extrator, consultado em 30 de outubro de 2026.',
          '[Guia de instalação do binário](https://home-gallery.org/docs/install/binary.html) — plataformas, primeira inicialização e notas de atualização, consultado em 30 de outubro de 2026.',
          '[Home-Gallery no GitHub](https://github.com/xemle/home-gallery/tags) — tags, changelog e atividade de commits, consultado em 30 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Immich](/pt/power-local-llm/immich-review) — uma biblioteca de fotos auto-hospedada com apps para celular e busca inteligente no servidor.',
          '[Análise do PhotoPrism](/pt/power-local-llm/photoprism-review) — outra biblioteca de fotos auto-hospedada com rótulos de IA integrados.',
          '[Análise do Facet](/pt/power-local-llm/facet-review) — pontuação e seleção local de fotos e uma galeria com agrupamento de rostos.',
          '[Diretório de software de LLM locais](/pt/directory) — o catálogo completo de ferramentas de IA locais.',
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
    heroImage: '/images/home-gallery-review-hero-ar.webp',
    title: 'مراجعة Home-Gallery: معرض صور مستضاف ذاتيًا مع بحث بالذكاء الاصطناعي',
    seoTitle: 'مراجعة Home-Gallery: معرض صور ذاتي الاستضافة وبحث ذكي',
    intro:
      'Home-Gallery معرض ويب مجاني بترخيص MIT تستضيفه بنفسك لتصفّح مجموعة كبيرة من الصور ومقاطع الفيديو ووسمها والبحث فيها. وتتولى ميزاته الذكية (البحث عن صور مشابهة وكشف الأجسام والتعرف على الوجوه) خادم API، وبحسب ملف README فإنه افتراضيًا الواجهة العامة للمشروع. تعكس هذه المراجعة الموقع وملف README والتوثيق والوسوم وسجل التغييرات كما جرى الاطلاع عليها في 30 أكتوبر 2026.',
    metaDescription:
      'مراجعة Home-Gallery: معرض صور وفيديو مجاني بترخيص MIT مستضاف ذاتيًا مع وسوم وبحث بالذكاء الاصطناعي. التثبيت بملف تنفيذي أو Docker وما تُرسله ميزاته.',
    twitterDescription:
      'مراجعة Home-Gallery: معرض ويب مستضاف ذاتيًا للصور والفيديو. التثبيت بملف تنفيذي أو Docker، وميزات ذكاء اصطناعي تستدعي افتراضيًا واجهة عامة، وكيفية استضافة تلك الواجهة، وما لم نتمكن من التحقق منه.',
    audience:
      'من يستضيفون خدماتهم بأنفسهم ولديهم أرشيف محلي كبير من الصور والفيديو، ويريدون معرفة جهد التثبيت، وأي خطوة ذكاء اصطناعي تغادر الجهاز افتراضيًا، وكيف يبقى كل شيء محليًا، وما لا تؤكده المصادر.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Home-Gallery',
    targetKeywords: [
      'مراجعة home-gallery',
      'معرض صور مستضاف ذاتيا',
      'معرض صور ذاتي الاستضافة التعرف على الوجوه',
      'home gallery xemle github',
      'معرض صور خاص nas',
      'api.home-gallery.org',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Home-Gallery (الإصدار v1.21.0 حتى 30 أكتوبر 2026) معرض ويب مجاني بترخيص MIT تستضيفه بنفسك لمجلدات كبيرة من الصور والفيديو، مع الوسوم واكتشاف الصور بالذكاء الاصطناعي.** يعمل من ملف تنفيذي يُشغَّل من الطرفية أو من صورة Docker، وليس من مثبّت.',
    quickAnswerTop: {
      ar: {
        question: 'هل تعمل ميزات الذكاء الاصطناعي في Home-Gallery على جهازك افتراضيًا؟',
        answer:
          'لا. بحسب ملف README، ترسل ميزات البحث عن صور مشابهة وكشف الأجسام والتعرف على الوجوه صور معاينة إلى الواجهة العامة للمشروع على api.home-gallery.org ما لم تستضف خادم API بنفسك. يذكر المشروع أنه لا تُحفَظ صور ولا بيانات خاصة، ولم تتمكن PromptQuorum من التحقق من ذلك.',
        bullets: [
          'ميزات الذكاء الاصطناعي الثلاث هي البحث عن صور مشابهة وكشف الأجسام والتعرف على الوجوه.',
          'يمكن إيقاف كل منها في ملف الإعدادات.',
          'يستعلم الترميز الجغرافي العكسي من خدمة Nominatim التابعة لـ OpenStreetMap ويرسل الإحداثيات فقط.',
          'صورة خادم API القابلة للاستضافة الذاتية تدعم amd64 وarm64.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Home-Gallery؟', anchor: 'what-is-home-gallery' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات الرئيسية', anchor: 'key-features' },
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
            text:
              'Home-Gallery معرض ويب مستضاف ذاتيًا يقدّم مجلدات الصور والفيديو الخاصة بك إلى المتصفح، مع الوسوم واكتشاف الصور المشابهة والأجسام والوجوه بالذكاء الاصطناعي.',
          },
          {
            type: 'plain-terms',
            text:
              'تشغّل خادمًا صغيرًا على حاسوب أو جهاز NAS، وتحدد له مجلدات وسائطك، ثم تتصفحها وتضع لها وسومًا وتبحث فيها من أي جهاز في شبكتك.',
          },
        ],
        items: [
          'الصيانة: بُني أحدث إصدار موسوم v1.21.0 في 1 مارس 2026، وتلقى المستودع آخر دفعة تحديثات في 13 أكتوبر 2026، لذا لا ينطبق تحذير توقف المشروع. ولا توجد للمستودع إصدارات على GitHub Releases.',
          'الجهة المشغّلة: يصفه ملف README بأنه مشروع شخصي في وقت الفراغ بلا أي ضمان، ويذكر ملف LICENSE اسم Sebastian Felis صاحبًا لحقوق النشر.',
          'التثبيت: تنزيل ملف تنفيذي لنظام Linux أو macOS أو Windows (x64) أو استخدام Docker؛ ويلزم استخدام الطرفية.',
          'التكلفة: مجاني؛ ولم نعثر على خطة مدفوعة.',
          'الحجم: يقول ملف README إن قاعدة بيانات الوسائط كاملة تُحمَّل في المتصفح، وأرقام الأحجام موجودة تحت «الميزات الرئيسية».',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'تستند هذه المراجعة إلى موقع المشروع وملف README والتوثيق والوسوم وسجل التغييرات كما جرى الاطلاع عليها في 30 أكتوبر 2026. لم تثبّت PromptQuorum برنامج Home-Gallery، لذلك لم تُقيَّم السرعة ولا جودة البحث ولا دقة التعرف على الوجوه.',
          },
        ],
      },
      overview: {
        id: 'what-is-home-gallery',
        title: 'ما هو Home-Gallery؟',
        content: [
          '**Home-Gallery معرض مستضاف ذاتيًا للصور والفيديو التي تبقى في مجلداتك الخاصة.** يذكر ملف README أن وسائط المشروع محفوظة على جهاز NAS في المنزل، وأن المعرض ينبغي أن يكون قريبًا من هذا المصدر، وأن الخدمات السحابية لا تعالج مخاوف الخصوصية.',
          'يستهدف المشروع بحسب README مستخدمين متمرسين في الحاسوب يحلّون مشكلاتهم بأنفسهم، ويضع هدفًا تصميميًا هو مستخدم واحد تُقدَّم له كل الملفات. يقرأ خادم ويب صغير مجلدات وسائطك، وتستخدمه من المتصفح أو كتطبيق ويب قابل للتثبيت.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُوزَّع Home-Gallery كملف تنفيذي جاهز يعمل من سطر الأوامر لأنظمة Linux وmacOS وWindows (إصدارات x64) أو كصورة Docker؛ ولا يوجد مثبّت بنقرتين ولا صفحة في متجر تطبيقات.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          {
            'الخيار': 'ملف Linux التنفيذي',
            'مصدر الحصول عليه': '[home-gallery-latest-linux-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-linux-x64)، ثم منحه صلاحية التنفيذ',
          },
          {
            'الخيار': 'ملف macOS التنفيذي',
            'مصدر الحصول عليه': '[home-gallery-latest-darwin-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-darwin-x64) (إصدار x64)',
          },
          {
            'الخيار': 'ملف Windows التنفيذي',
            'مصدر الحصول عليه': '[home-gallery-latest-win-x64.exe](https://dl.home-gallery.org/dist/latest/home-gallery-latest-win-x64.exe)',
          },
          {
            'الخيار': 'Docker',
            'مصدر الحصول عليه': '[xemle/home-gallery على Docker Hub](https://hub.docker.com/r/xemle/home-gallery)؛ ويغطي [دليل التثبيت](https://home-gallery.org/docs/install/index.html) إعداد Compose',
          },
          {
            'الخيار': 'التوثيق',
            'مصدر الحصول عليه': '[home-gallery.org/docs](https://home-gallery.org/docs/index.html)',
          },
          {
            'الخيار': 'الموقع الإلكتروني',
            'مصدر الحصول عليه': '[home-gallery.org](https://home-gallery.org/) (يوجد فيه رابط لمعرض تجريبي)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[github.com/xemle/home-gallery](https://github.com/xemle/home-gallery) (MIT)',
          },
          {
            'الخيار': 'جميع الإصدارات',
            'مصدر الحصول عليه': 'تسرد [dl.home-gallery.org/dist](https://dl.home-gallery.org/dist) كل الإصدارات والإصدارات غير المستقرة',
          },
        ],
        note:
          'الإصدار الذي راجعناه: v1.21.0، المؤرَّخ في 1 مارس 2026 في فهرس التنزيلات ووسم git؛ ولا توجد للمستودع إصدارات على GitHub Releases، وآخر دفعة تحديثات في 13 أكتوبر 2026 عمل غير منشور يظهر تحت Unreleased في سجل التغييرات. يتطلب التثبيت الطرفية. وبحسب دليل الملف التنفيذي، يكون التشغيل الأول بطيئًا، وقد تحجب برامج الأمان في macOS أو Windows التطبيق إلى أن تسمح به. لم نعثر على صفحة سياسة خصوصية مستقلة في موقع المشروع ولا في التوثيق الذي قرأناه؛ وتصريحات الخصوصية موجودة في README وفي صفحة خادم API.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات ملف README والتوثيق الخاصين بالمشروع؛ ولم تنفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'نزّل الملف التنفيذي أو اسحب الصورة',
            whyItMatters: 'نزّل الإصدار المناسب لنظامك من فهرس التنزيلات وامنحه صلاحية التنفيذ في Linux أو macOS، أو استخدم البدء السريع بـ Docker من README.',
          },
          {
            title: 'هيّئ الإعدادات بمجلد صورك',
            whyItMatters: 'يأخذ أمر init مجلد وسائط واحدًا أو أكثر ويكتب الملف gallery.config.yml في المجلد الحالي.',
          },
          {
            title: 'شغّل الخادم وافتح المعرض',
            whyItMatters: 'نفّذ أمر الخادم وافتح localhost:3000 في المتصفح؛ وتُستورد وسائطك ما دامت الصفحة مفتوحة.',
          },
          {
            title: 'قرّر أين تعمل خطوة الذكاء الاصطناعي',
            whyItMatters: 'أبقِ الواجهة العامة الافتراضية، أو وجّه المعرض إلى خادم API الخاص بك، أو أوقف ميزات الذكاء الاصطناعي من الإعدادات.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات الرئيسية',
        content: [
          '**كل ما يلي مأخوذ من موقع المشروع أو README أو التوثيق؛ ولم تختبر PromptQuorum أيًّا منه.**',
        ],
        items: [
          '**التصفح.** معرض ويب للصور والفيديو يوصف بأنه ملائم للهاتف، ويُدرجه الموقع كتطبيق قابل للتثبيت (PWA).',
          '**الوسم.** وسم صورة واحدة أو عدة صور معًا.',
          '**الاكتشاف.** بحث عن صور مشابهة يجد غروب الشمس أو الطعام أو المباني بلا وسوم يدوية، إضافة إلى كشف الأجسام وكشف الوجوه والبحث عن وجوه مشابهة.',
          '**دمج المصادر.** تُقدَّم عدة مجلدات وسائط، مثل القرص الصلب وملفات الكاميرا وملفات الهاتف، في معرض واحد.',
        ],
        note:
          'يقول README إن قاعدة البيانات الكاملة تُحمَّل في المتصفح: نحو 100,000 ملف وسائط تعادل قرابة 100 MB من JSON عادي و12 MB مضغوطة، وأبلغ مستخدم عن تشغيل ناجح مع أكثر من 400,000 ملف.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**افتراضيًا تستخدم ميزات البحث عن صور مشابهة وكشف الأجسام والتعرف على الوجوه الواجهة العامة للمشروع على api.home-gallery.org، وبحسب README تُرسَل كل صور المعاينة إليها.** ويضيف README أنه لا تُحفَظ صور ولا بيانات خاصة؛ وهذا تصريح من المشروع لم تتمكن PromptQuorum من التحقق منه. كما يقول README إن هذه الواجهة العامة تدعم الأجهزة ضعيفة القدرة مثل Raspberry Pi.',
          'يمكن بدلًا من ذلك تشغيل خادم API محليًا كحاوية Docker، ويمكن لإعدادات المعرض أن تشير إليه أو توقف كل ميزة ذكاء اصطناعي. وبذلك يكون Home-Gallery هجينًا عند التثبيت ويصبح محليًا إذا استضفت خادم API بنفسك. وفي الترميز الجغرافي العكسي يستعلم المعرض من خدمة Nominatim التابعة لـ OpenStreetMap ويرسل بحسب README الإحداثيات الجغرافية فقط. وتوثّق صفحة الإعدادات مستخدمي تسجيل الدخول وقواعد الوصول وعنوان الاستماع الافتراضي 0.0.0.0 على المنفذ 3000، ولا تذكر ما إذا كان تسجيل الدخول مطلوبًا افتراضيًا.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'هذه تصريحات المشروع وقراءة PromptQuorum لتوثيقه. لم تُفحص حركة الشبكة ولم تُراجَع الشيفرة المصدرية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يستضيفون خدماتهم ذاتيًا على جهاز NAS أو خادم منزلي** ويريدون عرض مجلدات صورهم وفيديوهاتهم الحالية في المتصفح بلا حساب سحابي.',
          '**أصحاب الأرشيفات الكبيرة جدًا** الذين يريدون البحث في كل شيء من معرض واحد ويقبلون تحميل الفهرس كاملًا في المتصفح.',
          '**المهتمون بالخصوصية ممن يجيدون Docker** ويرغبون في استضافة خادم API بأنفسهم.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الذكاء الاصطناعي والنماذج.** لا تذكر صفحة خادم API أي نماذج، ولم تُختبر ملاءمة نتائج البحث ولا التعرف على الوجوه ولا السرعة.',
          '**متطلبات العتاد.** لا يذكر التوثيق الذي قرأناه حدًا أدنى لذاكرة RAM أو المعالج، لا للمعرض ولا لخادم API مستضاف ذاتيًا.',
          '**التشغيل المحلي بالكامل.** لم يُختبر التشغيل بخادم API ذاتي الاستضافة وبلا إنترنت.',
          '**Apple Silicon.** المدرج هو إصدار x64 فقط لنظام macOS؛ ولا يُذكر ما إذا كان يعمل على أجهزة Mac الأحدث.',
          '**وتيرة الإصدارات.** أحدث وسم يعود إلى مارس 2026، بينما يظهر العمل الأحدث تحت Unreleased في سجل التغييرات.',
          '**خطوات التثبيت.** الخطوات مأخوذة من التوثيق ولم تنفذها PromptQuorum.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'يضم الدليل ثلاث أدوات أخرى لمكتبات الصور جرت مراجعتها في الفئة نفسها.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          {
            'التطبيق': '[Immich](/ar/power-local-llm/immich-review)',
            'المنصات': 'خادم (Docker)، iOS، Android، متصفح',
            'السعر / الرخصة': 'مجاني / AGPL-3.0',
            'الفرق الأبرز': 'تطبيقات للهاتف مع نسخ احتياطي وبحث ذكي على الخادم؛ ولم نجد تطبيقًا أصليًا لـ Home-Gallery بل تطبيق ويب فقط',
          },
          {
            'التطبيق': '[PhotoPrism](/ar/power-local-llm/photoprism-review)',
            'المنصات': 'خادم (Docker)، متصفح',
            'السعر / الرخصة': 'Community مجاني / AGPL-3.0',
            'الفرق الأبرز': 'يعمل الذكاء الاصطناعي المدمج للتصنيفات والوجوه على خادمك بحسب مراجعته، بينما يسند Home-Gallery هذه الخطوة إلى خادم API',
          },
          {
            'التطبيق': '[Facet](/ar/power-local-llm/facet-review)',
            'المنصات': 'Docker أو سكربت، متصفح',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'يقيّم الصور ويفرزها على جهازك؛ بينما يركز Home-Gallery على التصفح والوسم والاكتشاف',
          },
        ],
        note: 'تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كيف أُبقي خطوة الذكاء الاصطناعي على جهازي؟',
            a:
              'شغّل صورة Docker المسماة xemle/home-gallery-api-server (تدعم amd64 وarm64) واكتب عنوانها في extractor.apiServer.url داخل gallery.config.yml؛ ويعرض التوثيق مثالًا على المنفذ 3001. ويمكنك أيضًا إيقاف ميزات عبر extractor.apiServer.disable الذي يقبل similarDetection وobjectDetection وfaceDetection.',
          },
          {
            q: 'هل يمكنني استخدام Home-Gallery من هاتفي؟',
            a:
              'يذكر README عرض وسائطك من الهاتف هدفًا، ويدرج الموقع تطبيق PWA. ولم نجد تطبيقًا أصليًا للهاتف.',
          },
          {
            q: 'هل يدعم عدة مستخدمين؟',
            a:
              'يضع README مستخدمًا واحدًا هدفًا، بينما تصف صفحة الإعدادات المستخدمين وقواعد الوصول ومرشحات لكل مستخدم. ولم تختبر PromptQuorum إعدادات تعدد المستخدمين.',
          },
          {
            q: 'كيف أُحدّثه؟',
            a:
              'يوصي دليل الملف التنفيذي بإيقاف الخادم واستبدال الملف التنفيذي وتشغيل أمر الاستيراد قبل تشغيل الخادم من جديد.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Home-Gallery طريقة مجانية وبترخيص MIT لتقديم أرشيف كبير من الصور والفيديو من خادمك الخاص مع الوسوم والاكتشاف بالذكاء الاصطناعي. في المقابل، يتطلب التثبيت الطرفية، وترسل ميزات الذكاء الاصطناعي صور معاينة إلى الواجهة العامة للمشروع ما لم تستضف خادم API، وأحدث إصدار موسوم يعود إلى مارس 2026، ولم يمكن هنا التحقق من أي ادعاء بشأن جودة الذكاء الاصطناعي. يناسب من يستضيفون خدماتهم ذاتيًا ويرتاحون إلى Docker أو سطر الأوامر؛ أما من يريد تطبيقًا بنقرتين أو ذكاءً اصطناعيًا محليًا بالكامل من البداية فعليه البحث في مكان آخر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Home-Gallery](https://home-gallery.org/) — نظرة عامة والمنصات وروابط التوثيق، جرى الاطلاع عليه في 30 أكتوبر 2026.',
          '[ملف README لـ Home-Gallery](https://github.com/xemle/home-gallery/blob/master/README.md) — الدافع والبدء السريع والحدود وقسم الخدمات الخارجية والخصوصية، جرى الاطلاع عليه في 30 أكتوبر 2026.',
          '[توثيق خادم API](https://home-gallery.org/docs/api-server/index.html) — الواجهة العامة والإعداد المحلي بـ Docker، جرى الاطلاع عليه في 30 أكتوبر 2026.',
          '[توثيق الإعدادات](https://home-gallery.org/docs/configuration/index.html) — إعدادات الخادم والمصادقة والمستخرِج، جرى الاطلاع عليه في 30 أكتوبر 2026.',
          '[دليل تثبيت الملف التنفيذي](https://home-gallery.org/docs/install/binary.html) — المنصات والتشغيل الأول وملاحظات الترقية، جرى الاطلاع عليه في 30 أكتوبر 2026.',
          '[Home-Gallery على GitHub](https://github.com/xemle/home-gallery/tags) — الوسوم وسجل التغييرات ونشاط الإيداعات، جرى الاطلاع عليه في 30 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Immich](/ar/power-local-llm/immich-review) — مكتبة صور مستضافة ذاتيًا مع تطبيقات للهاتف وبحث ذكي على الخادم.',
          '[مراجعة PhotoPrism](/ar/power-local-llm/photoprism-review) — مكتبة صور أخرى مستضافة ذاتيًا مع تصنيفات ذكاء اصطناعي مدمجة.',
          '[مراجعة Facet](/ar/power-local-llm/facet-review) — تقييم الصور وفرزها محليًا ومعرض بتجميع الوجوه.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
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
    heroImage: '/images/home-gallery-review-hero-zh.webp',
    title: 'Home-Gallery 评测：支持 AI 搜索的自托管照片图库',
    seoTitle: 'Home-Gallery 评测：自托管照片图库与 AI 搜索',
    intro:
      'Home-Gallery 是一款免费、采用 MIT 许可证的网页图库，由你自己托管，用来浏览、打标签和搜索大量照片与视频。它的 AI 功能（相似图片搜索、物体检测和人脸识别）由 API 服务器完成，而按 README 所述，默认使用的是项目的公共 API。本评测基于 2026 年 10 月 30 日查阅的官网、README、文档、标签和更新日志。',
    metaDescription:
      'Home-Gallery 评测：免费、MIT 许可证的自托管照片与视频图库，支持标签和 AI 搜索。可用二进制文件或 Docker 部署，并说明 AI 功能会发送哪些数据。',
    twitterDescription:
      'Home-Gallery 评测：自托管的照片与视频网页图库。二进制文件或 Docker 部署、默认调用公共 API 的 AI 功能、如何自建该 API，以及我们未能核实的内容。',
    audience:
      '拥有大量本地照片和视频、自行托管服务的用户，想了解部署成本、默认有哪一步 AI 处理会离开本机、如何保持本地运行，以及哪些内容来源并未确认。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Home-Gallery 评测',
    targetKeywords: [
      'home-gallery 评测',
      '自托管照片图库',
      '自托管照片图库 人脸识别',
      'home gallery xemle github',
      '私有照片图库 nas',
      'api.home-gallery.org',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Home-Gallery（截至 2026 年 10 月 30 日为 v1.21.0）是一款免费、采用 MIT 许可证的网页图库，由你自己托管，用于大型照片和视频文件夹，支持标签和 AI 图片发现。** 它通过终端启动的二进制文件或 Docker 镜像运行，而不是安装程序。',
    quickAnswerTop: {
      zh: {
        question: 'Home-Gallery 的 AI 功能默认在你自己的机器上运行吗？',
        answer:
          '不是。按其 README，相似图片搜索、物体检测和人脸识别会把预览图发送到项目的公共 API（api.home-gallery.org），除非你自己运行 API 服务器。项目称不会保留图片或隐私数据，PromptQuorum 无法核实这一点。',
        bullets: [
          '三项 AI 功能是相似图片搜索、物体检测和人脸识别。',
          '每一项都可以在配置文件中关闭。',
          '反向地理编码会向 OpenStreetMap 的 Nominatim 服务查询，只发送坐标。',
          '可自托管的 API 服务器镜像支持 amd64 和 arm64。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Home-Gallery 是什么？', anchor: 'what-is-home-gallery' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '主要功能', anchor: 'key-features' },
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
            text:
              'Home-Gallery 是一款自托管的网页图库，把你自己的照片和视频文件夹提供给浏览器，支持标签，并用 AI 发现相似图片、物体和人脸。',
          },
          {
            type: 'plain-terms',
            text:
              '你在电脑或 NAS 上启动一个小型服务器，指定媒体文件夹，然后就能在局域网内的任何设备上浏览、打标签和搜索。',
          },
        ],
        items: [
          '维护情况：最新带标签版本 v1.21.0 构建于 2026 年 3 月 1 日，仓库最近一次推送是 2026 年 10 月 13 日，因此不适用停更警告。该仓库没有 GitHub Releases。',
          '运营方：README 称其为没有任何担保的个人业余项目；LICENSE 文件把 Sebastian Felis 列为版权持有人。',
          '部署：下载适用于 Linux、macOS 或 Windows（x64）的二进制文件，或使用 Docker；需要终端。',
          '费用：免费；未发现付费套餐。',
          '规模：README 称整个媒体数据库会加载到浏览器中；大小数据见“主要功能”。',
        ],
        callouts: [
          {
            type: 'note',
            text:
              '本评测基于 2026 年 10 月 30 日查阅的项目官网、README、文档、标签和更新日志。PromptQuorum 没有安装 Home-Gallery，因此未评估速度、搜索质量和人脸识别准确度。',
          },
        ],
      },
      overview: {
        id: 'what-is-home-gallery',
        title: 'Home-Gallery 是什么？',
        content: [
          '**Home-Gallery 是一款自托管图库，照片和视频仍保存在你自己的文件夹里。** README 说明，项目作者把媒体存放在家中的 NAS 上，希望图库离数据源更近，并认为云服务无法解决其隐私顾虑。',
          'README 面向的是懂电脑、能自己解决问题的用户，并把“只有一个用户、提供所有文件”列为设计目标。一个小型网页服务器读取你的媒体文件夹，你通过浏览器或可安装的网页应用使用它。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Home-Gallery 以适用于 Linux、macOS 和 Windows（x64 版本）的预构建命令行二进制文件或 Docker 镜像形式提供；没有双击安装程序，也没有应用商店页面。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          {
            '选项': 'Linux 二进制文件',
            '获取方式': '[home-gallery-latest-linux-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-linux-x64)，下载后赋予可执行权限',
          },
          {
            '选项': 'macOS 二进制文件',
            '获取方式': '[home-gallery-latest-darwin-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-darwin-x64)（x64 版本）',
          },
          {
            '选项': 'Windows 二进制文件',
            '获取方式': '[home-gallery-latest-win-x64.exe](https://dl.home-gallery.org/dist/latest/home-gallery-latest-win-x64.exe)',
          },
          {
            '选项': 'Docker',
            '获取方式': '[Docker Hub 上的 xemle/home-gallery](https://hub.docker.com/r/xemle/home-gallery)；[安装指南](https://home-gallery.org/docs/install/index.html)涵盖 Compose',
          },
          {
            '选项': '文档',
            '获取方式': '[home-gallery.org/docs](https://home-gallery.org/docs/index.html)',
          },
          {
            '选项': '官网',
            '获取方式': '[home-gallery.org](https://home-gallery.org/)（页面中链接了演示图库）',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/xemle/home-gallery](https://github.com/xemle/home-gallery)（MIT）',
          },
          {
            '选项': '所有构建',
            '获取方式': '[dl.home-gallery.org/dist](https://dl.home-gallery.org/dist) 列出所有版本和不稳定构建',
          },
        ],
        note:
          '评测版本：v1.21.0，下载索引和 git 标签上的日期均为 2026 年 3 月 1 日；该仓库没有 GitHub Releases，2026 年 10 月 13 日的最近一次推送属于更新日志 Unreleased 下尚未发布的改动。安装需要终端。根据二进制安装指南，首次启动较慢，macOS 或 Windows 的安全软件可能拦截该应用，需要手动放行。在项目网站和已阅读的文档中没有找到独立的隐私政策页面；隐私相关说明见 README 和 API 服务器页面。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目的 README 和文档，PromptQuorum 未实际执行。**',
        ],
        numberedItems: [
          {
            title: '下载二进制文件或拉取镜像',
            whyItMatters: '从下载索引获取适合你系统的构建，在 Linux 或 macOS 上赋予可执行权限，或使用 README 中的 Docker 快速开始。',
          },
          {
            title: '用你的照片文件夹初始化配置',
            whyItMatters: 'init 命令接受一个或多个媒体文件夹，并在当前目录写入 gallery.config.yml。',
          },
          {
            title: '启动服务器并打开图库',
            whyItMatters: '运行服务器命令，在浏览器中打开 localhost:3000；页面打开期间，媒体会被导入。',
          },
          {
            title: '决定 AI 步骤在哪里运行',
            whyItMatters: '保留默认的公共 API，把图库指向你自己的 API 服务器，或在配置中关闭 AI 功能。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下各项均来自项目官网、README 或文档，PromptQuorum 没有测试其中任何一项。**',
        ],
        items: [
          '**浏览。** 照片和视频的网页图库，被描述为适合手机使用，官网列出可安装（PWA）。',
          '**标签。** 可为单张或多张图片打标签。',
          '**发现。** 相似图片搜索，无需手动标签即可找到日落、食物或建筑，另有物体检测、人脸检测和相似人脸搜索。',
          '**合并来源。** 多个媒体文件夹（如硬盘、相机文件和手机文件）可在同一个图库中提供。',
        ],
        note:
          'README 称整个数据库会加载到浏览器中：约 10 万个媒体文件对应约 100 MB 的纯 JSON，压缩后约 12 MB，并有用户报告成功运行了超过 40 万个文件。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**默认情况下，相似图片搜索、物体检测和人脸识别使用项目位于 api.home-gallery.org 的公共 API，按 README 所述，所有预览图都会发送到那里。** README 补充说不会保留图片或隐私数据；这是项目自己的说法，PromptQuorum 无法核实。README 还提到，这个公共 API 支持树莓派（Raspberry Pi）等低性能设备。',
          'API 服务器也可以作为 Docker 容器在本地运行，图库配置可以指向它，或关闭每一项 AI 功能。因此 Home-Gallery 开箱即为混合模式，自行托管 API 服务器后才是本地模式。反向地理编码时，图库会向 OpenStreetMap 的 Nominatim 服务查询，按 README 只传输地理坐标。配置页面介绍了登录用户、访问规则以及默认监听地址 0.0.0.0 和端口 3000，但没有说明开箱时是否要求登录。',
        ],
        callouts: [
          {
            type: 'note',
            text:
              '以上是项目的说法，以及 PromptQuorum 对其文档的理解。未检查网络流量，也未审计源代码。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**拥有 NAS 或家用服务器的自托管用户**，希望不用云账号，就在浏览器中提供现有的照片和视频文件夹。',
          '**拥有超大档案库的用户**，希望在一个图库中搜索全部内容，并能接受整个索引加载到浏览器中。',
          '**重视隐私且会用 Docker 的用户**，愿意自己托管 API 服务器。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**AI 质量与模型。** API 服务器页面没有列出任何模型，搜索相关性、人脸识别和速度均未测试。',
          '**硬件需求。** 已阅读的文档没有给出图库本身或自托管 API 服务器的最低内存或 CPU 要求。',
          '**完全本地运行。** 使用自托管 API 服务器且断网的运行方式未测试。',
          '**Apple Silicon。** macOS 只列出了 x64 构建；文中没有说明它能否在较新的 Mac 上运行。',
          '**发布节奏。** 最新标签来自 2026 年 3 月，而更新的工作列在更新日志的 Unreleased 下。',
          '**安装步骤。** 这些步骤来自文档，PromptQuorum 没有执行。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中同一细分领域还有三款已评测的照片库工具。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Immich](/zh/power-local-llm/immich-review)',
            '平台': '服务器（Docker）、iOS、Android、浏览器',
            '价格 / 许可证': '免费 / AGPL-3.0',
            '主要区别': '手机应用支持备份，服务器端有智能搜索；未发现 Home-Gallery 的原生应用，只有网页应用',
          },
          {
            '应用': '[PhotoPrism](/zh/power-local-llm/photoprism-review)',
            '平台': '服务器（Docker）、浏览器',
            '价格 / 许可证': '免费 Community / AGPL-3.0',
            '主要区别': '据其评测，内置 AI 的标签和人脸识别在你的服务器上运行，而 Home-Gallery 把这一步交给 API 服务器',
          },
          {
            '应用': '[Facet](/zh/power-local-llm/facet-review)',
            '平台': 'Docker 或脚本、浏览器',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '在你自己的机器上为照片评分和筛选；Home-Gallery 侧重浏览、标签和发现',
          },
        ],
        note: '请在各应用自己的页面确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '怎样让 AI 步骤留在我自己的机器上？',
            a:
              '运行 Docker 镜像 xemle/home-gallery-api-server（支持 amd64 和 arm64），并在 gallery.config.yml 的 extractor.apiServer.url 中填入它的地址；文档给出了端口 3001 的示例。也可以用 extractor.apiServer.disable 关闭功能，可选值为 similarDetection、objectDetection 和 faceDetection。',
          },
          {
            q: '可以在手机上使用 Home-Gallery 吗？',
            a:
              'README 把在手机上查看自己的媒体列为目标，官网列出了 PWA。未发现原生手机应用。',
          },
          {
            q: '它支持多个用户吗？',
            a:
              'README 以一个用户为目标，而配置页面介绍了用户、访问规则和按用户设置的过滤器。PromptQuorum 没有测试多用户配置。',
          },
          {
            q: '如何更新？',
            a:
              '二进制安装指南说明：先停止服务器，替换二进制文件，并在重新启动服务器之前运行导入命令。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Home-Gallery 是一种免费、采用 MIT 许可证的方式，可以从你自己的服务器提供大型照片和视频档案，并带有标签和 AI 发现功能。另一方面，部署需要终端，除非你自己托管 API 服务器，否则 AI 功能会把预览图发送到项目的公共 API，最新带标签版本来自 2026 年 3 月，而且关于 AI 质量的说法这里都无法核实。它适合习惯使用 Docker 或命令行的自托管用户；想要双击即用的应用或开箱即完全本地的 AI 的用户，应该另选其他工具。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Home-Gallery 官网](https://home-gallery.org/) — 概览、平台和文档链接，2026 年 10 月 30 日查阅。',
          '[Home-Gallery README](https://github.com/xemle/home-gallery/blob/master/README.md) — 动机、快速开始、限制，以及外部服务与隐私章节，2026 年 10 月 30 日查阅。',
          '[API 服务器文档](https://home-gallery.org/docs/api-server/index.html) — 公共 API 与本地 Docker 部署，2026 年 10 月 30 日查阅。',
          '[配置文档](https://home-gallery.org/docs/configuration/index.html) — 服务器、认证和提取器设置，2026 年 10 月 30 日查阅。',
          '[二进制安装指南](https://home-gallery.org/docs/install/binary.html) — 平台、首次启动和升级说明，2026 年 10 月 30 日查阅。',
          '[GitHub 上的 Home-Gallery](https://github.com/xemle/home-gallery/tags) — 标签、更新日志和提交活动，2026 年 10 月 30 日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Immich 评测](/zh/power-local-llm/immich-review) — 自托管照片库，带手机应用和服务器端智能搜索。',
          '[PhotoPrism 评测](/zh/power-local-llm/photoprism-review) — 另一款内置 AI 标签的自托管照片库。',
          '[Facet 评测](/zh/power-local-llm/facet-review) — 本地照片评分、筛选和带人脸分组的图库。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
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
    heroImage: '/images/home-gallery-review-hero-ko.webp',
    title: 'Home-Gallery 리뷰: AI 검색을 갖춘 셀프 호스팅 사진 갤러리',
    seoTitle: 'Home-Gallery 리뷰: 셀프 호스팅 사진 갤러리, AI 검색',
    intro:
      'Home-Gallery는 많은 사진과 동영상을 둘러보고 태그를 붙이고 검색하기 위해 직접 운영하는 무료 MIT 라이선스 웹 갤러리입니다. AI 기능(유사 이미지 검색, 객체 감지, 얼굴 인식)은 API 서버가 처리하며, README에 따르면 기본값은 프로젝트의 공개 API입니다. 이 리뷰는 2026년 10월 30일에 확인한 웹사이트, README, 문서, 태그, 변경 이력을 바탕으로 합니다.',
    metaDescription:
      'Home-Gallery 리뷰: 태그와 AI 검색을 갖춘 무료 MIT 라이선스 셀프 호스팅 사진·동영상 갤러리. 바이너리 또는 Docker로 설치하고, AI가 보내는 데이터도 정리했습니다.',
    twitterDescription:
      'Home-Gallery 리뷰: 셀프 호스팅 사진·동영상 웹 갤러리. 바이너리 또는 Docker 설치, 기본적으로 공개 API를 호출하는 AI 기능, 그 API를 직접 운영하는 방법, 확인하지 못한 사항을 정리했습니다.',
    audience:
      '로컬에 사진과 동영상 보관함이 크고 셀프 호스팅을 하는 분들 중, 설치에 드는 수고, 기본적으로 기기 밖으로 나가는 AI 단계, 로컬로 유지하는 방법, 출처가 확인해 주지 않는 내용을 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Home-Gallery 리뷰',
    targetKeywords: [
      'home-gallery 리뷰',
      '셀프 호스팅 사진 갤러리',
      '셀프 호스팅 사진 갤러리 얼굴 인식',
      'home gallery xemle github',
      '프라이빗 사진 갤러리 nas',
      'api.home-gallery.org',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Home-Gallery(2026년 10월 30일 기준 v1.21.0)는 큰 사진·동영상 폴더를 위해 직접 운영하는 무료 MIT 라이선스 웹 갤러리로, 태그와 AI 이미지 탐색을 제공합니다.** 설치 프로그램이 아니라 터미널에서 시작하는 바이너리 또는 Docker 이미지로 실행합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Home-Gallery의 AI 기능은 기본적으로 내 컴퓨터에서 실행됩니까?',
        answer:
          '아닙니다. README에 따르면 유사 이미지 검색, 객체 감지, 얼굴 인식은 API 서버를 직접 운영하지 않는 한 미리보기 이미지를 프로젝트의 공개 API(api.home-gallery.org)로 보냅니다. 프로젝트는 이미지나 개인 데이터를 보관하지 않는다고 밝히지만, PromptQuorum은 이를 확인하지 못했습니다.',
        bullets: [
          'AI 기능은 유사 이미지 검색, 객체 감지, 얼굴 인식 세 가지입니다.',
          '각 기능은 설정 파일에서 끌 수 있습니다.',
          '역지오코딩은 OpenStreetMap의 Nominatim 서비스에 좌표만 보내 조회합니다.',
          '직접 운영할 수 있는 API 서버 이미지는 amd64와 arm64를 지원합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Home-Gallery란?', anchor: 'what-is-home-gallery' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '주요 기능', anchor: 'key-features' },
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
            text:
              'Home-Gallery는 내 사진·동영상 폴더를 브라우저로 제공하는 셀프 호스팅 웹 갤러리로, 태그와 함께 AI 기반의 유사 이미지·객체·얼굴 탐색을 지원합니다.',
          },
          {
            type: 'plain-terms',
            text:
              '컴퓨터나 NAS에서 작은 서버를 실행하고 미디어 폴더를 지정하면, 네트워크 안의 어떤 기기에서든 둘러보고 태그를 붙이고 검색할 수 있습니다.',
          },
        ],
        items: [
          '유지 관리: 태그가 붙은 최신 버전 v1.21.0은 2026년 3월 1일에 빌드되었고 저장소의 마지막 푸시는 2026년 10월 13일이므로 개발 중단 경고는 적용되지 않습니다. 저장소에는 GitHub Releases가 없습니다.',
          '운영 주체: README는 보증이 전혀 없는 개인 취미·여가 프로젝트라고 설명하며, LICENSE 파일은 Sebastian Felis를 저작권자로 적고 있습니다.',
          '설치: Linux, macOS, Windows(x64)용 바이너리를 내려받거나 Docker를 사용하며, 터미널이 필요합니다.',
          '비용: 무료이며, 유료 요금제는 찾지 못했습니다.',
          '규모: README에 따르면 미디어 데이터베이스 전체가 브라우저에 로드되며, 크기 수치는 주요 기능 항목에 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              '이 리뷰는 2026년 10월 30일에 확인한 프로젝트의 웹사이트, README, 문서, 태그, 변경 이력을 바탕으로 합니다. PromptQuorum은 Home-Gallery를 설치하지 않았으므로 속도, 검색 품질, 얼굴 인식 정확도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-home-gallery',
        title: 'Home-Gallery란?',
        content: [
          '**Home-Gallery는 내 폴더에 그대로 두는 사진과 동영상을 제공하는 셀프 호스팅 갤러리입니다.** README에 따르면 제작자는 집의 NAS에 미디어를 보관하고, 갤러리를 그 원본 가까이에 두고 싶었으며, 클라우드 서비스로는 개인정보 우려가 해소되지 않는다고 판단했습니다.',
          'README는 스스로 문제를 해결하는 컴퓨터에 능숙한 사용자를 대상으로 하며, 모든 파일을 제공받는 사용자 한 명을 설계 목표로 둡니다. 작은 웹 서버가 미디어 폴더를 읽고, 사용자는 브라우저나 설치할 수 있는 웹 앱으로 이용합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Home-Gallery는 Linux, macOS, Windows용(x64 빌드) 빌드된 명령줄 바이너리 또는 Docker 이미지로 제공되며, 더블클릭 설치 프로그램이나 앱 스토어 등록은 없습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          {
            '옵션': 'Linux 바이너리',
            '입수 방법': '[home-gallery-latest-linux-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-linux-x64), 내려받은 뒤 실행 권한 부여',
          },
          {
            '옵션': 'macOS 바이너리',
            '입수 방법': '[home-gallery-latest-darwin-x64](https://dl.home-gallery.org/dist/latest/home-gallery-latest-darwin-x64) (x64 빌드)',
          },
          {
            '옵션': 'Windows 바이너리',
            '입수 방법': '[home-gallery-latest-win-x64.exe](https://dl.home-gallery.org/dist/latest/home-gallery-latest-win-x64.exe)',
          },
          {
            '옵션': 'Docker',
            '입수 방법': '[Docker Hub의 xemle/home-gallery](https://hub.docker.com/r/xemle/home-gallery), [설치 가이드](https://home-gallery.org/docs/install/index.html)에 Compose 설명이 있습니다',
          },
          {
            '옵션': '문서',
            '입수 방법': '[home-gallery.org/docs](https://home-gallery.org/docs/index.html)',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[home-gallery.org](https://home-gallery.org/) (데모 갤러리 링크 있음)',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[github.com/xemle/home-gallery](https://github.com/xemle/home-gallery) (MIT)',
          },
          {
            '옵션': '모든 빌드',
            '입수 방법': '[dl.home-gallery.org/dist](https://dl.home-gallery.org/dist)에 모든 버전과 불안정 빌드가 나열되어 있습니다',
          },
        ],
        note:
          '확인한 버전: v1.21.0으로, 다운로드 색인과 git 태그에는 2026년 3월 1일로 표시됩니다. 저장소에 GitHub Releases는 없고, 2026년 10월 13일의 마지막 푸시는 변경 이력의 Unreleased에 적힌 미공개 작업입니다. 설치에는 터미널이 필요합니다. 바이너리 가이드에 따르면 첫 실행은 느리며, macOS나 Windows의 보안 소프트웨어가 앱을 차단해 직접 허용해야 할 수 있습니다. 프로젝트 사이트와 읽어 본 문서에서 별도의 개인정보 처리방침 페이지는 찾지 못했고, 개인정보 관련 설명은 README와 API 서버 페이지에 있습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트의 README와 문서를 따른 것이며, PromptQuorum이 직접 실행하지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '바이너리를 내려받거나 이미지를 가져옵니다',
            whyItMatters: '다운로드 색인에서 내 시스템용 빌드를 받아 Linux나 macOS에서는 실행 권한을 주거나, README의 Docker 빠른 시작을 사용합니다.',
          },
          {
            title: '사진 폴더로 설정을 초기화합니다',
            whyItMatters: 'init 명령에 미디어 폴더를 하나 이상 지정하면 현재 디렉터리에 gallery.config.yml이 만들어집니다.',
          },
          {
            title: '서버를 시작하고 갤러리를 엽니다',
            whyItMatters: '서버 명령을 실행하고 브라우저에서 localhost:3000을 엽니다. 페이지를 열어 둔 동안 미디어가 가져와집니다.',
          },
          {
            title: 'AI 단계를 어디서 실행할지 정합니다',
            whyItMatters: '기본 공개 API를 그대로 쓰거나, 갤러리가 내 API 서버를 가리키게 하거나, 설정에서 AI 기능을 끕니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 내용은 모두 프로젝트의 웹사이트, README, 문서에서 가져온 것이며, PromptQuorum이 테스트한 것은 없습니다.**',
        ],
        items: [
          '**둘러보기.** 사진과 동영상을 위한 웹 갤러리로, 모바일 친화적이라고 설명되며 웹사이트에는 설치 가능(PWA)으로 나와 있습니다.',
          '**태그.** 이미지 한 장 또는 여러 장에 한꺼번에 태그를 붙일 수 있습니다.',
          '**탐색.** 수동 태그 없이 노을, 음식, 건물 등을 찾는 유사 이미지 검색과 함께 객체 감지, 얼굴 감지, 비슷한 얼굴 검색이 있습니다.',
          '**여러 소스 통합.** 하드 디스크, 카메라 파일, 휴대폰 파일 등 여러 미디어 폴더를 하나의 갤러리로 제공합니다.',
        ],
        note:
          'README에 따르면 전체 데이터베이스가 브라우저에 로드됩니다. 미디어 약 10만 개는 일반 JSON으로 약 100 MB, 압축하면 약 12 MB이며, 40만 개가 넘는 파일로 성공적으로 설치했다는 사용자 보고가 있습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**기본적으로 유사 이미지 검색, 객체 감지, 얼굴 인식은 api.home-gallery.org의 프로젝트 공개 API를 사용하며, README에 따르면 모든 미리보기 이미지가 그곳으로 전송됩니다.** README는 이미지나 개인 데이터를 보관하지 않는다고 덧붙이지만, 이는 프로젝트의 주장이며 PromptQuorum은 확인하지 못했습니다. README는 또한 이 공개 API가 Raspberry Pi 같은 저사양 기기를 지원한다고 말합니다.',
          'API 서버는 대신 Docker 컨테이너로 로컬에서 실행할 수 있고, 갤러리 설정에서 그 서버를 지정하거나 각 AI 기능을 끌 수 있습니다. 따라서 Home-Gallery는 기본 상태에서는 하이브리드이고, API 서버를 직접 운영하면 로컬이 됩니다. 역지오코딩에서는 갤러리가 OpenStreetMap의 Nominatim 서비스에 조회하며, README에 따르면 지리 좌표만 전송합니다. 설정 페이지에는 로그인 사용자, 접근 규칙, 기본 수신 주소 0.0.0.0과 포트 3000이 문서화되어 있지만, 기본 상태에서 로그인이 필요한지는 나와 있지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              '이는 프로젝트의 주장과 문서에 대한 PromptQuorum의 해석입니다. 네트워크 트래픽은 점검하지 않았고 소스 코드도 감사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**NAS나 홈 서버로 셀프 호스팅하는 분.** 클라우드 계정 없이 기존 사진·동영상 폴더를 브라우저로 제공하고 싶은 경우.',
          '**아주 큰 보관함을 가진 분.** 모든 것을 하나의 갤러리에서 검색하고 싶고, 색인 전체가 브라우저에 로드되는 것을 감수할 수 있는 경우.',
          '**Docker를 다룰 수 있는 개인정보 중시 사용자.** API 서버를 직접 운영할 의향이 있는 경우.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**AI 품질과 모델.** API 서버 페이지에는 모델 이름이 없으며, 검색 관련도, 얼굴 인식, 속도는 테스트하지 않았습니다.',
          '**하드웨어 요구 사항.** 읽어 본 문서에는 갤러리나 직접 운영하는 API 서버의 RAM·CPU 최소 사양이 나와 있지 않습니다.',
          '**완전한 로컬 운영.** 직접 운영하는 API 서버로 인터넷 없이 쓰는 경우는 테스트하지 않았습니다.',
          '**Apple Silicon.** macOS용으로는 x64 빌드만 나와 있으며, 최신 Mac에서 실행되는지는 명시되어 있지 않습니다.',
          '**릴리스 주기.** 최신 태그는 2026년 3월이며, 더 새로운 작업은 변경 이력의 Unreleased에 있습니다.',
          '**설치 단계.** 단계는 문서에서 가져온 것이며 PromptQuorum이 실행하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 같은 분야에서 리뷰한 사진 라이브러리 도구가 세 가지 더 있습니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          {
            '앱': '[Immich](/ko/power-local-llm/immich-review)',
            '플랫폼': '서버(Docker), iOS, Android, 브라우저',
            '가격 / 라이선스': '무료 / AGPL-3.0',
            '핵심 차이점': '휴대폰 백업 앱과 서버 측 스마트 검색을 제공합니다. Home-Gallery의 네이티브 앱은 찾지 못했고 웹 앱만 있습니다',
          },
          {
            '앱': '[PhotoPrism](/ko/power-local-llm/photoprism-review)',
            '플랫폼': '서버(Docker), 브라우저',
            '가격 / 라이선스': '무료 Community / AGPL-3.0',
            '핵심 차이점': '리뷰에 따르면 라벨과 얼굴용 내장 AI가 내 서버에서 실행되지만, Home-Gallery는 이 단계를 API 서버에 맡깁니다',
          },
          {
            '앱': '[Facet](/ko/power-local-llm/facet-review)',
            '플랫폼': 'Docker 또는 스크립트, 브라우저',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': '내 컴퓨터에서 사진을 점수화하고 선별합니다. Home-Gallery는 둘러보기, 태그, 탐색에 집중합니다',
          },
        ],
        note: '각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'AI 단계를 내 컴퓨터에 두려면 어떻게 합니까?',
            a:
              'Docker 이미지 xemle/home-gallery-api-server(amd64, arm64)를 실행하고 gallery.config.yml의 extractor.apiServer.url에 그 주소를 지정합니다. 문서에는 포트 3001 예시가 있습니다. extractor.apiServer.disable로 기능을 끌 수도 있으며, similarDetection, objectDetection, faceDetection을 지정할 수 있습니다.',
          },
          {
            q: '휴대폰에서 Home-Gallery를 쓸 수 있습니까?',
            a:
              'README는 휴대폰에서 내 미디어를 보는 것을 목표로 들고 있고, 웹사이트에는 PWA가 나와 있습니다. 네이티브 휴대폰 앱은 찾지 못했습니다.',
          },
          {
            q: '여러 사용자를 지원합니까?',
            a:
              'README는 한 명의 사용자를 목표로 하지만, 설정 페이지에는 사용자, 접근 규칙, 사용자별 필터가 설명되어 있습니다. PromptQuorum은 다중 사용자 구성을 테스트하지 않았습니다.',
          },
          {
            q: '어떻게 업데이트합니까?',
            a:
              '바이너리 가이드에 따르면 서버를 멈추고 바이너리를 교체한 뒤, 서버를 다시 시작하기 전에 가져오기 명령을 실행합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Home-Gallery는 큰 사진·동영상 보관함을 내 서버에서 태그와 AI 탐색 기능과 함께 제공하는 무료 MIT 라이선스 방법입니다. 반면 설치에는 터미널이 필요하고, API 서버를 직접 운영하지 않으면 AI 기능이 미리보기 이미지를 프로젝트의 공개 API로 보내며, 태그가 붙은 최신 버전은 2026년 3월 것이고, AI 품질에 관한 주장은 여기서 확인할 수 없었습니다. Docker나 명령줄에 익숙한 셀프 호스팅 사용자에게 적합하며, 더블클릭으로 쓰는 앱이나 처음부터 완전히 로컬인 AI를 원한다면 다른 도구를 찾는 편이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Home-Gallery 웹사이트](https://home-gallery.org/) — 개요, 플랫폼, 문서 링크. 2026년 10월 30일 확인.',
          '[Home-Gallery README](https://github.com/xemle/home-gallery/blob/master/README.md) — 동기, 빠른 시작, 한계, 외부 서비스와 개인정보 항목. 2026년 10월 30일 확인.',
          '[API 서버 문서](https://home-gallery.org/docs/api-server/index.html) — 공개 API와 로컬 Docker 구성. 2026년 10월 30일 확인.',
          '[설정 문서](https://home-gallery.org/docs/configuration/index.html) — 서버, 인증, 추출기 설정. 2026년 10월 30일 확인.',
          '[바이너리 설치 가이드](https://home-gallery.org/docs/install/binary.html) — 플랫폼, 첫 실행, 업그레이드 안내. 2026년 10월 30일 확인.',
          '[GitHub의 Home-Gallery](https://github.com/xemle/home-gallery/tags) — 태그, 변경 이력, 커밋 활동. 2026년 10월 30일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Immich 리뷰](/ko/power-local-llm/immich-review) — 휴대폰 앱과 서버 측 스마트 검색을 갖춘 셀프 호스팅 사진 라이브러리.',
          '[PhotoPrism 리뷰](/ko/power-local-llm/photoprism-review) — 내장 AI 라벨을 갖춘 또 다른 셀프 호스팅 사진 라이브러리.',
          '[Facet 리뷰](/ko/power-local-llm/facet-review) — 로컬 사진 점수화·선별과 얼굴 그룹화 갤러리.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
