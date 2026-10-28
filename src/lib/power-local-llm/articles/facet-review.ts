// Facet Review: Local Photo Scoring, Culling and Gallery
// Slug: facet-review
// Companion to: immich-review, photoprism-review, pixlstash-review
// Sources (all read 2026-10-28, no hands-on testing): ncoevoet.github.io/facet, the GitHub repo and API (ncoevoet/facet: v1.25.0 published 2026-10-27, last push 2026-10-28, LICENSE = MIT,
// API licence NOASSERTION), README.md, docs/INSTALLATION.md (profiles, first-run download sizes, feature requirements, commercial install), docs/THIRD_PARTY_MODELS.md, docs/CONFIGURATION.md
// (vlm_backend, updates), docs/AGENTS.md (MCP endpoint, on by default), docs/DEPLOYMENT.md, docs/GETTING_STARTED.md, viewer.py (default host 0.0.0.0) and client source (OSM tiles, Photon dialog).
// The request came from the site owner (link from localhosted.com), not from the maker: no maker comment, no founder-review badge.
// Facet is NOT an LLM chat app. Offline use after the first-run model download is unverified (stated in the review). Last upstream update 2026-10-28 => no stale warning.
// Directory-tile caveat: license MIT for the code; pyiqa (TOPIQ, LIQE) and InsightFace weights are non-commercial, licensing.mode: commercial swaps them out (stated in the review).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/facet-review-hero-en.webp',
    title: 'Facet Review: Local Photo Scoring, Culling and Gallery',
    seoTitle: 'Facet Review: Local Photo Scoring, Culling, Gallery',
    intro:
      'Facet is a free, MIT-licensed photo-analysis tool that you run yourself: it scores each photo, finds bursts and near-duplicates, groups faces and lets you search your library in plain words through a web gallery. It is not a chat or LLM app; the AI is image scoring, embeddings and face models. This review reflects its README, documentation, GitHub releases and source as checked on 28 October 2026.',
    metaDescription:
      'Facet review: free MIT-licensed tool that scores, culls and browses photos locally, with face grouping and search. Setup, model licences, privacy.',
    twitterDescription:
      'Facet review: a self-hosted photo scoring, culling and gallery tool. Docker or script setup, CPU or GPU profiles, non-commercial default model weights, optional remote VLM and what we could not verify.',
    audience:
      'Photographers and self-hosters with a large local photo library who want to know the setup effort, which AI runs where, what the model licences allow and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Facet review',
    targetKeywords: [
      'facet photo review',
      'ai photo culling software',
      'self-hosted photo culling',
      'local photo scoring tool',
      'photo culling burst near-duplicates',
      'facet ncoevoet github',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Facet (v1.25.0 as of 28 October 2026) is a free, MIT-licensed tool that scores, culls and browses a local photo library through a web gallery, with face grouping and plain-language search running on your own machine.** According to the project\'s model-licence page, some of its default model weights are not licensed for commercial use. It contains no chat feature.',
    quickAnswerTop: {
      en: {
        question: 'Does Facet keep your photos and AI scoring on your own machine?',
        answer:
          'Per its README, yes: a scan only reads your photos, results go to Facet\'s own database, and the models run on your hardware after a first-run download. A few things reach outside, such as an update check, map tiles and an optional remote vision-language server. PromptQuorum has not inspected the network traffic.',
        bullets: [
          'Scores each photo on 9 dimensions, groups bursts, look-alikes and faces, and surfaces top picks.',
          'Plain-language search uses SigLIP 2 on the 16gb and 24gb GPU profiles and a CLIP model on the legacy and 8gb profiles.',
          'Runs on a CPU with the legacy profile; an NVIDIA GPU or a large-memory Apple Silicon Mac unlocks the strongest models.',
          'Installed with Docker or an install script; there is no installer, app-store build or release binary.',
          'Per its docs, the viewer is open to anyone who can reach its port until you set a password.',
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
        label: 'What Is Facet?',
        anchor: 'what-is-facet',
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
        label: 'How to Get Started',
        anchor: 'getting-started',
      },
      {
        label: 'Key Features',
        anchor: 'key-features',
      },
      {
        label: 'AI Features and Where They Run',
        anchor: 'ai-features',
      },
      {
        label: 'Data Flow and Privacy',
        anchor: 'privacy',
      },
      {
        label: 'Model Licences',
        anchor: 'model-licences',
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
            text:
              'Facet is a self-hosted tool that rates photos, picks the best of each burst, groups faces and lets you search a local library in plain words, all through a browser gallery.',
          },
          {
            type: 'plain-terms',
            text:
              'You point Facet at a folder of photos, it analyses them once on your computer, and you then browse, cull and search the results in your browser.',
          },
        ],
        items: [
          'Maintenance: v1.25.0 was released on 27 October 2026 and the repository received a push on 28 October 2026, so no stale-project warning applies.',
          'Operator: the README calls it a single-developer project without commercial support; the code is on GitHub under the MIT licence.',
          'Setup: Docker Compose or an install script plus a first scan that downloads the models; a terminal is required.',
          'Cost: free; no paid tier was found. The word "Edition" in the docs is an access level, not a product edition.',
          'Scope: image scoring, culling and search; written tags, captions and critiques need an optional vision-language model.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'This review is based on the project\'s website, README, documentation, GitHub releases and parts of its source, checked on 28 October 2026. PromptQuorum has not installed Facet, so scoring accuracy, search relevance and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-facet',
        title: 'What Is Facet?',
        content: [
          '**Facet is a local photo-analysis and culling engine with a web gallery: it scores each image, then lets you browse, cull and organise the results.** The README says everything runs on your machine with no cloud, accounts or API keys, and the code is MIT-licensed.',
          'The LICENSE file names Nicolas Coevoet as the copyright holder. The work happens in two tools: a scanner started from the command line, and a viewer that serves the gallery in your browser.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Facet is installed from its source repository with Docker or an install script; the project publishes no installer, app-store listing or release binary.**',
        ],
        columns: [
          'Option',
          'How to get it',
        ],
        rows: [
          {
            Option: 'Docker (recommended)',
            'How to get it':
              '[Install guide](https://github.com/ncoevoet/facet/blob/master/docs/INSTALLATION.md): clone, set the photo folder, docker compose up',
          },
          {
            Option: 'Without Docker',
            'How to get it': 'Clone, run bash install.sh, then python facet.py and python viewer.py (Linux, macOS)',
          },
          {
            Option: 'Documentation',
            'How to get it': '[Docs folder](https://github.com/ncoevoet/facet/tree/master/docs) in the repository',
          },
          {
            Option: 'Website',
            'How to get it': '[ncoevoet.github.io/facet](https://ncoevoet.github.io/facet/)',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/ncoevoet/facet](https://github.com/ncoevoet/facet) (MIT)',
          },
          {
            Option: 'Releases',
            'How to get it': '[GitHub releases](https://github.com/ncoevoet/facet/releases), notes only',
          },
        ],
        note:
          'Version reviewed: v1.25.0, published on 27 October 2026 per the GitHub release; the last push to the repository was on 28 October 2026. Installing needs a terminal, Git and Docker or Python, so this is a developer-style setup rather than a double-click install. No separate privacy-policy page was found on the project site or in the documentation read; privacy statements are in the README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The docs say Facet runs on any machine with a CPU, and that an NVIDIA GPU or a large-memory Apple Silicon Mac unlocks its strongest models.**',
        ],
        columns: [
          'Item',
          'What the sources say',
        ],
        rows: [
          {
            Item: 'Profiles',
            'What the sources say': 'legacy: CPU only; 8gb: NVIDIA 6-14 GB; 16gb: NVIDIA 14-20 GB; 24gb: NVIDIA 20 GB or more',
          },
          {
            Item: 'First-run download',
            'What the sources say': 'Roughly 4.7 GB (legacy), 6.9 GB (8gb), 14.6 GB (16gb) or 19.1 GB (24gb), once, per the docs',
          },
          {
            Item: 'Apple Silicon',
            'What the sources say':
              'Uses the Metal backend for Torch models; the auto profile is sized from total unified memory, 32 GB reaching 16gb',
          },
          {
            Item: 'Memory',
            'What the sources say':
              'The docs publish no minimum RAM; they warn that a container with a memory cap can be killed mid-scan on larger profiles',
          },
          {
            Item: 'Software',
            'What the sources say': 'Docker, or Python 3.12 (3.10+ works) and Node.js 20+ for the gallery build when installing by hand',
          },
          {
            Item: 'Operating system',
            'What the sources say': 'Windows, macOS or Linux; on Windows the docs point to Docker, and to WSL2 for an NVIDIA GPU',
          },
          {
            Item: 'Photo formats',
            'What the sources say': 'JPEG, HEIC, 10 RAW formats, PNG, WebP, TIFF, AVIF and JPEG XL, among others',
          },
        ],
        note:
          'These figures come from the project\'s docs; PromptQuorum did not measure scan time or memory use on any hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow the project\'s documentation; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Get the code and set the folder',
            whyItMatters: 'Clone the repository, copy .env.example to .env and set PHOTOS_DIR to your photo folder.',
          },
          {
            title: 'Start Facet',
            whyItMatters:
              'Run docker compose up -d; with an NVIDIA card, add the compose file for its size, or run the install script without Docker.',
          },
          {
            title: 'Scan and wait for the downloads',
            whyItMatters:
              'The first scan fetches the models for your profile, creates the database and scores the photos; you can browse while it works.',
          },
          {
            title: 'Open the gallery and set a password',
            whyItMatters:
              'Open the viewer in your browser, log in with the edition password the Docker image prints once, and set a viewer password before sharing the port.',
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
          '**Score.** Nine dimensions per photo, including aesthetic quality, composition, face quality, eye sharpness and exposure, weighted per content category (30+ categories).',
          '**Cull.** Burst, similar-photo and scene groups, blink flags, near-duplicate detection and an auto-cull with a dry-run preview; exposure brackets and panorama sets are kept whole.',
          '**Browse.** Mosaic and grid views, filters, timeline, map, albums including smart albums, themed slideshows and "On This Day" memories.',
          '**Organise.** Named people with merge suggestions, star ratings, tags and batch actions with a short undo.',
          '**Share and connect.** Album links with a client-proofing mode, XMP sidecars for Lightroom, darktable and digiKam, a WebDAV inbox for phone uploads and a rating sync with Immich.',
        ],
        note:
          'The README says Facet scores, ranks and culls but does not edit RAW files, and that the aesthetic score is model-based and approximate.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI Features and Where They Run',
        content: [
          '**The core AI is image-based: quality-scoring models, embeddings for search, face models and subject detection; written tags, captions and critiques come from an optional vision-language model.**',
        ],
        items: [
          '**Quality scores.** The 16gb and 24gb profiles use TOPIQ for the aesthetic score, while legacy and 8gb use CLIP embeddings with an aesthetic head; the docs list supplementary scorers such as LIQE as available on any profile.',
          '**Search.** Typed queries like "sunset on the beach" match embeddings: SigLIP 2 on the 16gb and 24gb profiles, OpenCLIP ViT-L-14 on legacy and 8gb.',
          '**Faces.** InsightFace detects and recognises faces and clustering groups them into people; optional MediaPipe blendshapes sharpen the blink and smile reads.',
          '**Subjects.** BiRefNet separates subject from background to judge focus and framing.',
          '**My Taste.** Your A/B comparisons, ratings and culling choices feed a weight optimiser and a personal ranking.',
          '**Vision-language model.** Tags, captions and critiques run in-process on the 16gb and 24gb profiles, or on a remote Ollama or OpenAI-compatible server set with vlm_backend, where the image is sent to that server.',
        ],
        note:
          'These are the project\'s own statements. PromptQuorum did not test score quality, search relevance or face-grouping accuracy.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The README says everything runs on your machine, with no cloud, accounts or API keys, and the docs say a scan only reads your photos and writes results to Facet\'s own database.** Models are fetched on first use from Hugging Face, PyIQA and InsightFace sources into local caches; PromptQuorum did not test operation offline after that download.',
          'Outbound requests found in the docs and source: an update check that asks GitHub for the latest release every 7 days unless updates.enabled is false; map tiles that the browser loads from OpenStreetMap\'s tile server; a GPS edit dialog that credits the Photon geocoder; and, only if you set vlm_backend to Ollama or an OpenAI-compatible server, the images you send there. The viewer script listens on all interfaces by default, and while viewer.password is empty anyone who can reach the port can browse the library and download originals. The endpoint for MCP assistants is on by default; on an open install it serves a read-only anonymous key, and viewer.mcp.enabled set to false turns it off.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'These are the project\'s statements and PromptQuorum\'s reading of its docs and source. Network traffic was not inspected and the rest of the source was not audited.',
          },
        ],
      },
      licensing: {
        id: 'model-licences',
        title: 'Model Licences',
        content: [
          '**Facet\'s own code is MIT-licensed, but some models it downloads by default are not licensed for commercial use.** The project\'s model-licence page lists pyiqa (TOPIQ, LIQE and the other scorers) as PolyForm Noncommercial code with CC BY-NC-SA weights, and the InsightFace buffalo_l weights as non-commercial research only. GitHub\'s API reports no recognised licence for the repository, so read the LICENSE file itself.',
          'Setting licensing.mode to commercial restricts Facet to permissively licensed models: restricted components are never imported or downloaded, and each slot is routed to a replacement such as YuNet and SFace for faces. The standard install script and Docker image include the restricted packages, and a commercial install does not switch the mode by itself. The page says it is information, not legal advice.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'If you plan to use Facet in a business, check each model\'s licence yourself before relying on the default setup.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Photographers with large libraries** who want bursts, blinks and near-duplicates sorted before they edit.',
          '**Self-hosters** who want a private gallery with plain-language search and face grouping and who are comfortable with Docker.',
          '**Lightroom, darktable and digiKam users** who want scores and picks written back as standard sidecar files.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**AI quality.** Score accuracy, face grouping, search relevance and scan speed were not tested; the README itself calls the aesthetic score approximate.',
          '**Offline use.** Whether Facet works fully offline after the first model download was not verified.',
          '**Release stability.** The v1.23.1 notes say v1.23.0 shipped without the CUDA Docker image, and three versions were released between 24 and 27 October 2026, so expect fast change.',
          '**Support.** The README describes a single-developer project without the support of commercial cullers.',
          '**Install steps.** The setup commands come from the docs and were not run by PromptQuorum.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory has three other reviewed photo and image library tools in the same segment.',
        ],
        columns: [
          'App',
          'Platforms',
          'Price / license',
          'Key difference',
        ],
        rows: [
          {
            App: '[Immich](/power-local-llm/immich-review)',
            Platforms: 'Server (Docker), iOS, Android, browser',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference':
              'Phone backup and search; the Facet README says Facet adds quality scoring and culling and can sync ratings to Immich',
          },
          {
            App: '[PhotoPrism](/power-local-llm/photoprism-review)',
            Platforms: 'Server (Docker), browser',
            'Price / license': 'Free Community / AGPL-3.0',
            'Key difference':
              'Self-hosted AI photo library; the Facet README groups it with Immich as an organising, search and backup tool',
          },
          {
            App: '[PixlStash](/power-local-llm/pixlstash-review)',
            Platforms: 'Windows, macOS, Linux desktop app, web',
            'Price / license': 'Free / GPL-3.0',
            'Key difference': 'Image library with local tagging, captions and ComfyUI integration, installed as a desktop app',
          },
        ],
        note: 'Confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Facet need a GPU?',
            a:
              'No. The legacy profile runs scoring, faces, tags, culling and the gallery on a CPU, only slower; TOPIQ, SigLIP 2 and the built-in captions need the 16gb or 24gb NVIDIA profiles unless you point vlm_backend at a remote server.',
          },
          {
            q: 'Does Facet change or delete my photos?',
            a:
              'The docs say a scan only reads them. Writing ratings and keywords to your files is a separate opt-in action, and moving rejects to the trash works only when viewer.cull.allow_trash is on.',
          },
          {
            q: 'Can I use Facet from my phone?',
            a:
              'There is no native app. The gallery is a responsive, installable web app, and the docs describe PhotoSync or any WebDAV app uploading into a watched inbox.',
          },
          {
            q: 'How do I use Facet commercially?',
            a:
              'Install the commercial build, set licensing.mode to commercial and run the doctor command, which shows the active licence posture, then read the model-licence page.',
          },
          {
            q: 'How do I keep the gallery private?',
            a:
              'Set viewer.password and put the viewer behind a reverse proxy with HTTPS; the deployment docs include nginx and Caddy examples.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Facet is a free, actively updated way to score, cull and browse a large local photo library, with face grouping and plain-language search that run on your own machine. Against that, setup needs a terminal and a large first-run model download, per the project\'s model-licence page some default model weights are not licensed for commercial use, per its docs the viewer is open until you set a password, one optional feature can send images to a remote server, and none of the AI quality claims could be checked here. It suits photographers and self-hosters who are comfortable with Docker; anyone who wants a double-click app or an LLM assistant should look elsewhere.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Facet website](https://ncoevoet.github.io/facet/) — feature overview and quick start, checked 28 October 2026.',
          '[Facet README](https://github.com/ncoevoet/facet/blob/master/README.md) — features, requirements, licensing and comparisons, checked 28 October 2026.',
          '[Facet documentation](https://github.com/ncoevoet/facet/tree/master/docs) — installation, configuration, deployment and AI-agent pages, checked 28 October 2026.',
          '[Third-party models and licences](https://github.com/ncoevoet/facet/blob/master/docs/THIRD_PARTY_MODELS.md) — licence of each model, checked 28 October 2026.',
          '[Facet on GitHub](https://github.com/ncoevoet/facet/releases) — releases and commit activity, checked 28 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Immich Review](/power-local-llm/immich-review) — a self-hosted photo library with phone apps and on-server smart search.',
          '[PhotoPrism Review](/power-local-llm/photoprism-review) — another self-hosted photo library with built-in AI labels.',
          '[PixlStash Review](/power-local-llm/pixlstash-review) — an image library manager with local AI tagging.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Facet Review: Local Photo Scoring, Culling and Gallery',
      description:
        'Facet review: a free, MIT-licensed tool that scores, culls and browses a local photo library with face grouping and plain-language search. Setup, model licences, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/facet-review',
      inLanguage: 'en',
      datePublished: '2026-10-28',
      dateModified: '2026-10-28',
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
        audienceType: 'Photographers and self-hosters evaluating a local photo scoring and culling tool',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Facet',
        },
        {
          '@type': 'Thing',
          name: 'Photo culling',
        },
        {
          '@type': 'Thing',
          name: 'Face recognition',
        },
        {
          '@type': 'Thing',
          name: 'Docker',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/facet-review',
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
          name: 'Facet Review',
          item: 'https://www.promptquorum.com/power-local-llm/facet-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/facet-review-hero-de.webp',
    title: 'Facet-Rezension: lokale Foto-Bewertung, Aussortieren und Galerie',
    seoTitle: 'Facet-Rezension: Fotos lokal bewerten und aussortieren',
    intro:
      'Facet ist ein kostenloses, MIT-lizenziertes Werkzeug zur Fotoanalyse, das Sie selbst betreiben: Es bewertet jedes Foto, findet Serienbilder und Beinahe-Duplikate, gruppiert Gesichter und lässt Sie Ihre Bibliothek in einer Weboberfläche in natürlicher Sprache durchsuchen. Es ist keine Chat- oder LLM-App; die KI besteht aus Bildbewertung, Embeddings und Gesichtsmodellen. Diese Rezension stützt sich auf README, Dokumentation, GitHub-Releases und Quellcode, geprüft am 28. Oktober 2026.',
    metaDescription:
      'Facet-Rezension: kostenloses MIT-Werkzeug zum lokalen Bewerten und Aussortieren von Fotos, mit Gesichtsgruppen und Suche. Lizenzen, Datenschutz.',
    twitterDescription:
      'Facet-Rezension: ein selbst gehostetes Werkzeug für Foto-Bewertung, Aussortieren und Galerie. Einrichtung per Docker oder Skript, CPU- und GPU-Profile, nicht kommerziell lizenzierte Standardmodelle, optionales Remote-VLM und was wir nicht überprüfen konnten.',
    audience:
      'Fotografen und Selbsthoster mit großer lokaler Fotobibliothek, die wissen möchten, wie aufwendig die Einrichtung ist, welche KI wo läuft, was die Modelllizenzen erlauben und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Facet Rezension',
    targetKeywords: [
      'facet foto rezension',
      'ki foto aussortieren software',
      'foto aussortieren selbst hosten',
      'lokale foto bewertung',
      'serienbilder duplikate aussortieren',
      'facet ncoevoet github',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Facet (v1.25.0, Stand 28. Oktober 2026) ist ein kostenloses, MIT-lizenziertes Werkzeug, das eine lokale Fotobibliothek bewertet, aussortiert und in einer Weboberfläche durchsuchbar macht, mit Gesichtsgruppierung und Suche in natürlicher Sprache auf Ihrem eigenen Rechner.** Laut der Lizenzseite des Projekts sind einige der Standardmodelle nicht für die kommerzielle Nutzung lizenziert. Eine Chat-Funktion gibt es nicht.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben Ihre Fotos und die KI-Bewertung bei Facet auf Ihrem eigenen Rechner?',
        answer:
          'Laut README ja: Ein Scan liest Ihre Fotos nur, die Ergebnisse landen in Facets eigener Datenbank, und die Modelle laufen nach einem Download beim ersten Start auf Ihrer Hardware. Einiges greift nach außen, etwa die Update-Prüfung, Kartenkacheln und ein optionaler Remote-Server für Vision-Language-Modelle. PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
        bullets: [
          'Bewertet jedes Foto in 9 Dimensionen, gruppiert Serienbilder, ähnliche Aufnahmen und Gesichter und zeigt Top-Picks.',
          'Die Suche in natürlicher Sprache nutzt SigLIP 2 auf den GPU-Profilen 16gb und 24gb und ein CLIP-Modell auf legacy und 8gb.',
          'Läuft mit dem Profil legacy auf einer CPU; eine NVIDIA-GPU oder ein Apple-Silicon-Mac mit viel Speicher schaltet die stärksten Modelle frei.',
          'Installation per Docker oder Installationsskript; es gibt weder Installer noch App-Store-Version noch Release-Binärdatei.',
          'Laut Dokumentation ist der Viewer für jeden erreichbar, der seinen Port erreicht, bis Sie ein Passwort setzen.',
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
        label: 'Was ist Facet?',
        anchor: 'what-is-facet',
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
        label: 'So gelingt der Einstieg',
        anchor: 'getting-started',
      },
      {
        label: 'Wichtige Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'KI-Funktionen und wo sie laufen',
        anchor: 'ai-features',
      },
      {
        label: 'Datenfluss und Datenschutz',
        anchor: 'privacy',
      },
      {
        label: 'Lizenzen der Modelle',
        anchor: 'model-licences',
      },
      {
        label: 'Für wen sich die Software eignet',
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
            text:
              'Facet ist ein selbst gehostetes Werkzeug, das Fotos bewertet, aus jeder Serie die beste Aufnahme wählt, Gesichter gruppiert und eine lokale Bibliothek in natürlicher Sprache durchsuchbar macht, alles über eine Galerie im Browser.',
          },
          {
            type: 'plain-terms',
            text:
              'Sie verweisen Facet auf einen Fotoordner, es analysiert die Bilder einmal auf Ihrem Computer, und Sie durchsuchen, sortieren und prüfen die Ergebnisse anschließend im Browser.',
          },
        ],
        items: [
          'Pflege: v1.25.0 erschien am 27. Oktober 2026, und das Repository erhielt am 28. Oktober 2026 einen Push; ein Warnhinweis auf ein veraltetes Projekt gilt daher nicht.',
          'Betreiber: Laut README ist es ein Ein-Entwickler-Projekt ohne kommerziellen Support; der Code liegt auf GitHub unter der MIT-Lizenz.',
          'Einrichtung: Docker Compose oder ein Installationsskript plus ein erster Scan, der die Modelle herunterlädt; ein Terminal ist nötig.',
          'Kosten: kostenlos; ein Bezahltarif wurde nicht gefunden. „Edition“ in der Dokumentation bezeichnet eine Zugriffsstufe, keine Produktedition.',
          'Umfang: Bildbewertung, Aussortieren und Suche; geschriebene Tags, Bildbeschreibungen und Kritiken erfordern ein optionales Vision-Language-Modell.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Diese Rezension stützt sich auf Website, README, Dokumentation, GitHub-Releases und Teile des Quellcodes, geprüft am 28. Oktober 2026. PromptQuorum hat Facet nicht installiert, daher werden Bewertungsgenauigkeit, Suchqualität und Geschwindigkeit nicht beurteilt.',
          },
        ],
      },
      overview: {
        id: 'what-is-facet',
        title: 'Was ist Facet?',
        content: [
          '**Facet ist eine lokale Engine zur Fotoanalyse und zum Aussortieren mit Weboberfläche: Sie bewertet jedes Bild, dann können Sie die Ergebnisse durchsuchen, aussortieren und ordnen.** Laut README läuft alles auf Ihrem Rechner, ohne Cloud, Konten oder API-Schlüssel, und der Code steht unter der MIT-Lizenz.',
          'Die LICENSE-Datei nennt Nicolas Coevoet als Inhaber des Urheberrechts. Die Arbeit verteilt sich auf zwei Werkzeuge: einen Scanner, der von der Kommandozeile gestartet wird, und einen Viewer, der die Galerie im Browser bereitstellt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Facet wird aus seinem Quell-Repository mit Docker oder einem Installationsskript installiert; das Projekt veröffentlicht weder Installer noch App-Store-Eintrag noch Release-Binärdatei.**',
        ],
        columns: [
          'Option',
          'Bezug',
        ],
        rows: [
          {
            Option: 'Docker (empfohlen)',
            Bezug:
              '[Installationsanleitung](https://github.com/ncoevoet/facet/blob/master/docs/INSTALLATION.md): klonen, Fotoordner festlegen, docker compose up',
          },
          {
            Option: 'Ohne Docker',
            Bezug: 'Klonen, bash install.sh ausführen, dann python facet.py und python viewer.py (Linux, macOS)',
          },
          {
            Option: 'Dokumentation',
            Bezug: '[Docs-Ordner](https://github.com/ncoevoet/facet/tree/master/docs) im Repository',
          },
          {
            Option: 'Website',
            Bezug: '[ncoevoet.github.io/facet](https://ncoevoet.github.io/facet/)',
          },
          {
            Option: 'Quellcode',
            Bezug: '[github.com/ncoevoet/facet](https://github.com/ncoevoet/facet) (MIT)',
          },
          {
            Option: 'Releases',
            Bezug: '[GitHub-Releases](https://github.com/ncoevoet/facet/releases), nur Versionshinweise',
          },
        ],
        note:
          'Geprüfte Version: v1.25.0, laut GitHub-Release am 27. Oktober 2026 veröffentlicht; der letzte Push ins Repository erfolgte am 28. Oktober 2026. Die Installation erfordert ein Terminal, Git und Docker oder Python, ist also eine Entwickler-Einrichtung und keine Installation per Doppelklick. Eine eigene Datenschutzseite wurde weder auf der Projektseite noch in der gelesenen Dokumentation gefunden; Datenschutzaussagen stehen in der README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Laut Dokumentation läuft Facet auf jedem Rechner mit CPU; eine NVIDIA-GPU oder ein Apple-Silicon-Mac mit viel Speicher schaltet die stärksten Modelle frei.**',
        ],
        columns: [
          'Punkt',
          'Angaben der Quellen',
        ],
        rows: [
          {
            Punkt: 'Profile',
            'Angaben der Quellen': 'legacy: nur CPU; 8gb: NVIDIA 6-14 GB; 16gb: NVIDIA 14-20 GB; 24gb: NVIDIA ab 20 GB',
          },
          {
            Punkt: 'Download beim ersten Start',
            'Angaben der Quellen': 'Laut Dokumentation einmalig rund 4,7 GB (legacy), 6,9 GB (8gb), 14,6 GB (16gb) oder 19,1 GB (24gb)',
          },
          {
            Punkt: 'Apple Silicon',
            'Angaben der Quellen':
              'Nutzt das Metal-Backend für Torch-Modelle; das Profil auto richtet sich nach dem gesamten Unified Memory, bei 32 GB wird 16gb erreicht',
          },
          {
            Punkt: 'Arbeitsspeicher',
            'Angaben der Quellen':
              'Die Dokumentation nennt kein RAM-Minimum; sie warnt, dass ein Container mit Speicherlimit bei größeren Profilen mitten im Scan beendet werden kann',
          },
          {
            Punkt: 'Software',
            'Angaben der Quellen':
              'Docker oder Python 3.12 (3.10+ funktioniert) und Node.js 20+ für den Galerie-Build bei manueller Installation',
          },
          {
            Punkt: 'Betriebssystem',
            'Angaben der Quellen':
              'Windows, macOS oder Linux; unter Windows verweist die Dokumentation auf Docker und für eine NVIDIA-GPU auf WSL2',
          },
          {
            Punkt: 'Fotoformate',
            'Angaben der Quellen': 'unter anderem JPEG, HEIC, 10 RAW-Formate, PNG, WebP, TIFF, AVIF und JPEG XL',
          },
        ],
        note:
          'Diese Angaben stammen aus der Dokumentation des Projekts; PromptQuorum hat Scandauer und Speicherbedarf auf keiner Hardware gemessen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Diese Schritte folgen der Dokumentation des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Code holen und Ordner festlegen',
            whyItMatters:
              'Klonen Sie das Repository, kopieren Sie .env.example nach .env und setzen Sie PHOTOS_DIR auf Ihren Fotoordner.',
          },
          {
            title: 'Facet starten',
            whyItMatters:
              'Führen Sie docker compose up -d aus; bei einer NVIDIA-Karte fügen Sie die Compose-Datei für deren Größe hinzu, oder nutzen Sie das Installationsskript ohne Docker.',
          },
          {
            title: 'Scannen und auf die Downloads warten',
            whyItMatters:
              'Der erste Scan lädt die Modelle für Ihr Profil herunter, legt die Datenbank an und bewertet die Fotos; währenddessen können Sie bereits stöbern.',
          },
          {
            title: 'Galerie öffnen und Passwort setzen',
            whyItMatters:
              'Öffnen Sie den Viewer im Browser, melden Sie sich mit dem Edition-Passwort an, das das Docker-Image einmal ausgibt, und setzen Sie ein Viewer-Passwort, bevor Sie den Port freigeben.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Wichtige Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus README oder Dokumentation des Projekts; PromptQuorum hat keinen davon getestet.**',
        ],
        items: [
          '**Bewerten.** Neun Dimensionen pro Foto, darunter ästhetische Qualität, Bildkomposition, Gesichtsqualität, Augenschärfe und Belichtung, gewichtet je Inhaltskategorie (über 30 Kategorien).',
          '**Aussortieren.** Gruppen für Serien, ähnliche Fotos und Szenen, Blinzel-Markierungen, Erkennung von Beinahe-Duplikaten und ein Auto-Cull mit Vorschau als Probelauf; Belichtungsreihen und Panoramen bleiben zusammen.',
          '**Stöbern.** Mosaik- und Rasteransicht, Filter, Zeitleiste, Karte, Alben einschließlich intelligenter Alben, thematische Diashows und Erinnerungen „An diesem Tag“.',
          '**Ordnen.** Benannte Personen mit Vorschlägen zum Zusammenführen, Sternebewertungen, Tags und Stapelaktionen mit kurzer Rückgängig-Funktion.',
          '**Teilen und verbinden.** Album-Links mit Kundenfreigabe-Modus, XMP-Sidecars für Lightroom, darktable und digiKam, ein WebDAV-Posteingang für Handy-Uploads und ein Bewertungsabgleich mit Immich.',
        ],
        note:
          'Laut README bewertet, sortiert und selektiert Facet, bearbeitet aber keine RAW-Dateien, und der ästhetische Wert ist modellbasiert und ungefähr.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'KI-Funktionen und wo sie laufen',
        content: [
          '**Die Kern-KI arbeitet mit Bildern: Modelle zur Qualitätsbewertung, Embeddings für die Suche, Gesichtsmodelle und Motiverkennung; geschriebene Tags, Beschreibungen und Kritiken stammen von einem optionalen Vision-Language-Modell.**',
        ],
        items: [
          '**Qualitätswerte.** Die Profile 16gb und 24gb nutzen TOPIQ für den ästhetischen Wert, legacy und 8gb dagegen CLIP-Embeddings mit einem Ästhetik-Kopf; die Dokumentation führt ergänzende Bewerter wie LIQE als auf jedem Profil verfügbar auf.',
          '**Suche.** Eingaben wie „Sonnenuntergang am Strand“ werden mit Embeddings abgeglichen: SigLIP 2 auf 16gb und 24gb, OpenCLIP ViT-L-14 auf legacy und 8gb.',
          '**Gesichter.** InsightFace erkennt Gesichter, und ein Clustering gruppiert sie zu Personen; optionale MediaPipe-Blendshapes verbessern die Erkennung von Blinzeln und Lächeln.',
          '**Motive.** BiRefNet trennt Motiv und Hintergrund, um Schärfe und Bildausschnitt zu beurteilen.',
          '**My Taste.** Ihre A/B-Vergleiche, Bewertungen und Aussortier-Entscheidungen speisen einen Gewichtungs-Optimierer und ein persönliches Ranking.',
          '**Vision-Language-Modell.** Tags, Beschreibungen und Kritiken laufen auf 16gb und 24gb im selben Prozess oder auf einem entfernten Ollama- oder OpenAI-kompatiblen Server, den vlm_backend festlegt; dann wird das Bild an diesen Server gesendet.',
        ],
        note:
          'Das sind die eigenen Angaben des Projekts. PromptQuorum hat weder Bewertungsqualität noch Suchrelevanz noch Genauigkeit der Gesichtsgruppierung getestet.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Laut README läuft alles auf Ihrem Rechner, ohne Cloud, Konten oder API-Schlüssel, und laut Dokumentation liest ein Scan Ihre Fotos nur und schreibt die Ergebnisse in Facets eigene Datenbank.** Die Modelle werden beim ersten Einsatz aus Hugging-Face-, PyIQA- und InsightFace-Quellen in lokale Caches geladen; den Betrieb ohne Internet nach diesem Download hat PromptQuorum nicht getestet.',
          'In Dokumentation und Quellcode gefundene ausgehende Anfragen: eine Update-Prüfung, die alle 7 Tage bei GitHub nach dem neuesten Release fragt, solange updates.enabled nicht auf false steht; Kartenkacheln, die der Browser vom Kachelserver von OpenStreetMap lädt; ein GPS-Bearbeitungsdialog, der den Geocoder Photon nennt; und, nur wenn Sie vlm_backend auf Ollama oder einen OpenAI-kompatiblen Server setzen, die Bilder, die Sie dorthin senden. Das Viewer-Skript lauscht standardmäßig auf allen Schnittstellen, und solange viewer.password leer ist, kann jeder, der den Port erreicht, die Bibliothek durchsuchen und Originale herunterladen. Der Endpunkt für MCP-Assistenten ist standardmäßig aktiv; bei einer offenen Installation liefert er einen schreibgeschützten anonymen Schlüssel, und viewer.mcp.enabled auf false schaltet ihn ab.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Das sind die Angaben des Projekts und PromptQuorums Lesart von Dokumentation und Quellcode. Der Netzwerkverkehr wurde nicht untersucht, und der übrige Quellcode wurde nicht geprüft.',
          },
        ],
      },
      licensing: {
        id: 'model-licences',
        title: 'Lizenzen der Modelle',
        content: [
          '**Facets eigener Code steht unter der MIT-Lizenz, aber einige standardmäßig heruntergeladene Modelle sind nicht für die kommerzielle Nutzung lizenziert.** Die Lizenzseite des Projekts führt pyiqa (TOPIQ, LIQE und die übrigen Bewerter) als PolyForm-Noncommercial-Code mit CC-BY-NC-SA-Gewichten und die InsightFace-buffalo_l-Gewichte als ausschließlich nichtkommerzielle Forschung auf. Die GitHub-API meldet für das Repository keine erkannte Lizenz, lesen Sie daher die LICENSE-Datei selbst.',
          'Mit licensing.mode auf commercial beschränkt sich Facet auf freizügig lizenzierte Modelle: Eingeschränkte Komponenten werden nie importiert oder heruntergeladen, und jeder Platz wird einem Ersatz zugeordnet, etwa YuNet und SFace für Gesichter. Das Standard-Installationsskript und das Docker-Image enthalten die eingeschränkten Pakete, und eine kommerzielle Installation schaltet den Modus nicht von selbst um. Die Seite weist darauf hin, dass sie Information und keine Rechtsberatung ist.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Wenn Sie Facet geschäftlich einsetzen möchten, prüfen Sie die Lizenz jedes Modells selbst, bevor Sie sich auf die Standardeinstellung verlassen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die Software eignet',
        items: [
          '**Fotografen mit großen Bibliotheken**, die Serienbilder, Blinzler und Beinahe-Duplikate vor dem Bearbeiten sortieren möchten.',
          '**Selbsthoster**, die eine private Galerie mit Suche in natürlicher Sprache und Gesichtsgruppierung wünschen und mit Docker vertraut sind.',
          '**Nutzer von Lightroom, darktable und digiKam**, die Bewertungen und Auswahl als Standard-Sidecar-Dateien zurückgeschrieben haben möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**KI-Qualität.** Bewertungsgenauigkeit, Gesichtsgruppierung, Suchrelevanz und Scangeschwindigkeit wurden nicht getestet; die README selbst nennt den ästhetischen Wert ungefähr.',
          '**Offline-Betrieb.** Ob Facet nach dem ersten Modell-Download vollständig offline funktioniert, wurde nicht überprüft.',
          '**Release-Stabilität.** Laut den Hinweisen zu v1.23.1 wurde v1.23.0 ohne das CUDA-Docker-Image veröffentlicht, und zwischen dem 24. und 27. Oktober 2026 erschienen drei Versionen; rechnen Sie also mit schnellen Änderungen.',
          '**Support.** Die README beschreibt ein Ein-Entwickler-Projekt ohne den Support kommerzieller Aussortier-Werkzeuge.',
          '**Installationsschritte.** Die Einrichtungsbefehle stammen aus der Dokumentation und wurden von PromptQuorum nicht ausgeführt.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        content: [
          'Das Verzeichnis enthält drei weitere rezensierte Foto- und Bildbibliotheks-Werkzeuge im selben Segment.',
        ],
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Wichtigster Unterschied',
        ],
        rows: [
          {
            App: '[Immich](/de/power-local-llm/immich-review)',
            Plattformen: 'Server (Docker), iOS, Android, Browser',
            'Preis / Lizenz': 'Kostenlos / AGPL-3.0',
            'Wichtigster Unterschied':
              'Handy-Backup und Suche; laut Facet-README ergänzt Facet Qualitätsbewertung und Aussortieren und kann Bewertungen mit Immich abgleichen',
          },
          {
            App: '[PhotoPrism](/de/power-local-llm/photoprism-review)',
            Plattformen: 'Server (Docker), Browser',
            'Preis / Lizenz': 'Kostenlose Community / AGPL-3.0',
            'Wichtigster Unterschied':
              'Selbst gehostete KI-Fotobibliothek; die Facet-README zählt sie wie Immich zu den Werkzeugen für Ordnung, Suche und Backup',
          },
          {
            App: '[PixlStash](/de/power-local-llm/pixlstash-review)',
            Plattformen: 'Desktop-App für Windows, macOS, Linux, Web',
            'Preis / Lizenz': 'Kostenlos / GPL-3.0',
            'Wichtigster Unterschied':
              'Bildbibliothek mit lokaler Verschlagwortung, Beschriftung und ComfyUI-Anbindung, als Desktop-App installiert',
          },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Braucht Facet eine GPU?',
            a:
              'Nein. Das Profil legacy führt Bewertung, Gesichter, Tags, Aussortieren und Galerie auf einer CPU aus, nur langsamer; TOPIQ, SigLIP 2 und die integrierten Beschreibungen erfordern die NVIDIA-Profile 16gb oder 24gb, es sei denn, vlm_backend zeigt auf einen entfernten Server.',
          },
          {
            q: 'Verändert oder löscht Facet meine Fotos?',
            a:
              'Laut Dokumentation liest ein Scan sie nur. Bewertungen und Schlagwörter in Ihre Dateien zu schreiben, ist eine eigene optionale Aktion, und Aussortiertes landet nur im Papierkorb, wenn viewer.cull.allow_trash aktiviert ist.',
          },
          {
            q: 'Kann ich Facet vom Handy aus nutzen?',
            a:
              'Es gibt keine native App. Die Galerie ist eine responsive, installierbare Web-App, und die Dokumentation beschreibt, wie PhotoSync oder eine andere WebDAV-App in einen überwachten Posteingang hochlädt.',
          },
          {
            q: 'Wie nutze ich Facet kommerziell?',
            a:
              'Installieren Sie die kommerzielle Variante, setzen Sie licensing.mode auf commercial und führen Sie den Doctor-Befehl aus, der die aktive Lizenzlage anzeigt; lesen Sie danach die Seite zu den Modelllizenzen.',
          },
          {
            q: 'Wie halte ich die Galerie privat?',
            a:
              'Setzen Sie viewer.password und stellen Sie den Viewer hinter einen Reverse-Proxy mit HTTPS; die Deployment-Dokumentation enthält Beispiele für nginx und Caddy.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Facet ist ein kostenloser, aktiv gepflegter Weg, eine große lokale Fotobibliothek zu bewerten, auszusortieren und zu durchsuchen, mit Gesichtsgruppierung und Suche in natürlicher Sprache auf dem eigenen Rechner. Dagegen stehen eine Einrichtung mit Terminal und großem Modell-Download beim ersten Start, laut Lizenzseite des Projekts einige Standardmodelle ohne kommerzielle Lizenz, laut Dokumentation ein Viewer, der bis zur Passwortvergabe offen ist, eine optionale Funktion, die Bilder an einen entfernten Server senden kann, und KI-Qualitätsaussagen, die sich hier nicht prüfen ließen. Es passt zu Fotografen und Selbsthostern, die mit Docker vertraut sind; wer eine App per Doppelklick oder einen LLM-Assistenten sucht, sollte anderswo schauen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Facet-Website](https://ncoevoet.github.io/facet/) — Funktionsüberblick und Schnellstart, geprüft am 28. Oktober 2026.',
          '[Facet-README](https://github.com/ncoevoet/facet/blob/master/README.md) — Funktionen, Anforderungen, Lizenzen und Vergleiche, geprüft am 28. Oktober 2026.',
          '[Facet-Dokumentation](https://github.com/ncoevoet/facet/tree/master/docs) — Installation, Konfiguration, Deployment und KI-Agenten-Seiten, geprüft am 28. Oktober 2026.',
          '[Modelle und Lizenzen von Drittanbietern](https://github.com/ncoevoet/facet/blob/master/docs/THIRD_PARTY_MODELS.md) — Lizenz jedes Modells, geprüft am 28. Oktober 2026.',
          '[Facet auf GitHub](https://github.com/ncoevoet/facet/releases) — Releases und Commit-Aktivität, geprüft am 28. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Immich-Rezension](/de/power-local-llm/immich-review) — eine selbst gehostete Fotobibliothek mit Handy-Apps und Smart Search auf dem Server.',
          '[PhotoPrism-Rezension](/de/power-local-llm/photoprism-review) — eine weitere selbst gehostete Fotobibliothek mit integrierten KI-Labels.',
          '[PixlStash-Rezension](/de/power-local-llm/pixlstash-review) — ein Verwaltungswerkzeug für Bildbibliotheken mit lokaler KI-Verschlagwortung.',
          '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/facet-review-hero-es.webp',
    title: 'Análisis de Facet: puntuación, selección y galería de fotos en local',
    seoTitle: 'Análisis de Facet: puntuar y seleccionar fotos en local',
    intro:
      'Facet es una herramienta gratuita de análisis de fotos con licencia MIT que ejecutas tú mismo: puntúa cada foto, detecta ráfagas y casi duplicados, agrupa caras y te deja buscar en tu biblioteca con lenguaje natural desde una galería web. No es una app de chat ni de LLM; la IA consiste en puntuación de imágenes, embeddings y modelos de caras. Este análisis refleja su README, su documentación, las versiones de GitHub y el código fuente, revisados el 28 de octubre de 2026.',
    metaDescription:
      'Análisis de Facet: herramienta gratuita MIT que puntúa, selecciona y explora fotos en local, con caras agrupadas y búsqueda. Licencias y privacidad.',
    twitterDescription:
      'Análisis de Facet: una herramienta autoalojada para puntuar, seleccionar y explorar fotos. Instalación con Docker o script, perfiles de CPU y GPU, pesos de modelos por defecto no comerciales, VLM remoto opcional y lo que no pudimos verificar.',
    audience:
      'Fotógrafos y personas que autoalojan con una biblioteca grande de fotos locales y quieren saber cuánto cuesta la instalación, qué IA se ejecuta dónde, qué permiten las licencias de los modelos y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de Facet',
    targetKeywords: [
      'análisis facet fotos',
      'software ia para seleccionar fotos',
      'selección de fotos autoalojada',
      'puntuación de fotos en local',
      'ráfagas y casi duplicados fotos',
      'facet ncoevoet github',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Facet (v1.25.0 a 28 de octubre de 2026) es una herramienta gratuita con licencia MIT que puntúa, selecciona y explora una biblioteca de fotos local desde una galería web, con agrupación de caras y búsqueda en lenguaje natural en tu propio equipo.** Según la página de licencias del proyecto, algunos de sus pesos de modelo por defecto no tienen licencia para uso comercial. No incluye ninguna función de chat.',
    quickAnswerTop: {
      es: {
        question: '¿Facet mantiene tus fotos y la puntuación con IA en tu propio equipo?',
        answer:
          'Según su README, sí: un escaneo solo lee tus fotos, los resultados van a la base de datos propia de Facet y los modelos se ejecutan en tu hardware tras una descarga en el primer uso. Algunas cosas salen al exterior, como la comprobación de actualizaciones, los mosaicos del mapa y un servidor remoto opcional de modelos de visión y lenguaje. PromptQuorum no ha inspeccionado el tráfico de red.',
        bullets: [
          'Puntúa cada foto en 9 dimensiones, agrupa ráfagas, fotos parecidas y caras, y muestra las mejores.',
          'La búsqueda en lenguaje natural usa SigLIP 2 en los perfiles de GPU 16gb y 24gb y un modelo CLIP en legacy y 8gb.',
          'Funciona en CPU con el perfil legacy; una GPU NVIDIA o un Mac con Apple Silicon con mucha memoria desbloquea los modelos más potentes.',
          'Se instala con Docker o un script de instalación; no hay instalador, versión en tienda de apps ni binario de release.',
          'Según su documentación, el visor está abierto a cualquiera que alcance su puerto hasta que establezcas una contraseña.',
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
        label: '¿Qué es Facet?',
        anchor: 'what-is-facet',
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
        label: 'Cómo empezar',
        anchor: 'getting-started',
      },
      {
        label: 'Funciones principales',
        anchor: 'key-features',
      },
      {
        label: 'Funciones de IA y dónde se ejecutan',
        anchor: 'ai-features',
      },
      {
        label: 'Flujo de datos y privacidad',
        anchor: 'privacy',
      },
      {
        label: 'Licencias de los modelos',
        anchor: 'model-licences',
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
            text:
              'Facet es una herramienta autoalojada que puntúa fotos, elige la mejor de cada ráfaga, agrupa caras y permite buscar en una biblioteca local con lenguaje natural, todo desde una galería en el navegador.',
          },
          {
            type: 'plain-terms',
            text:
              'Indicas a Facet una carpeta de fotos, las analiza una vez en tu ordenador y después exploras, seleccionas y buscas los resultados en el navegador.',
          },
        ],
        items: [
          'Mantenimiento: la v1.25.0 se publicó el 27 de octubre de 2026 y el repositorio recibió un push el 28 de octubre de 2026, así que no se aplica ningún aviso de proyecto abandonado.',
          'Responsable: el README lo describe como un proyecto de un solo desarrollador sin soporte comercial; el código está en GitHub con licencia MIT.',
          'Instalación: Docker Compose o un script de instalación, más un primer escaneo que descarga los modelos; hace falta una terminal.',
          'Coste: gratuito; no se encontró ningún plan de pago. «Edition» en la documentación es un nivel de acceso, no una edición del producto.',
          'Alcance: puntuación de imágenes, selección y búsqueda; las etiquetas, descripciones y críticas escritas requieren un modelo opcional de visión y lenguaje.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Este análisis se basa en el sitio web, el README, la documentación, las versiones de GitHub y partes del código fuente del proyecto, revisados el 28 de octubre de 2026. PromptQuorum no ha instalado Facet, por lo que no se evalúan la precisión de la puntuación, la relevancia de la búsqueda ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-facet',
        title: '¿Qué es Facet?',
        content: [
          '**Facet es un motor local de análisis y selección de fotos con galería web: puntúa cada imagen y luego te deja explorar, seleccionar y organizar los resultados.** El README dice que todo se ejecuta en tu equipo, sin nube, cuentas ni claves de API, y el código tiene licencia MIT.',
          'El archivo LICENSE nombra a Nicolas Coevoet como titular de los derechos de autor. El trabajo se reparte entre dos herramientas: un escáner que se lanza desde la línea de comandos y un visor que sirve la galería en tu navegador.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Facet se instala desde su repositorio de código con Docker o un script de instalación; el proyecto no publica instalador, ficha en una tienda de apps ni binario de release.**',
        ],
        columns: [
          'Opción',
          'Cómo conseguirlo',
        ],
        rows: [
          {
            'Opción': 'Docker (recomendado)',
            'Cómo conseguirlo':
              '[Guía de instalación](https://github.com/ncoevoet/facet/blob/master/docs/INSTALLATION.md): clonar, indicar la carpeta de fotos, docker compose up',
          },
          {
            'Opción': 'Sin Docker',
            'Cómo conseguirlo': 'Clonar, ejecutar bash install.sh y luego python facet.py y python viewer.py (Linux, macOS)',
          },
          {
            'Opción': 'Documentación',
            'Cómo conseguirlo': '[Carpeta docs](https://github.com/ncoevoet/facet/tree/master/docs) del repositorio',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[ncoevoet.github.io/facet](https://ncoevoet.github.io/facet/)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/ncoevoet/facet](https://github.com/ncoevoet/facet) (MIT)',
          },
          {
            'Opción': 'Versiones',
            'Cómo conseguirlo': '[Releases de GitHub](https://github.com/ncoevoet/facet/releases), solo notas',
          },
        ],
        note:
          'Versión revisada: v1.25.0, publicada el 27 de octubre de 2026 según el release de GitHub; el último push al repositorio fue el 28 de octubre de 2026. Instalar requiere una terminal, Git y Docker o Python, así que es una instalación para desarrolladores y no un instalador de doble clic. No se encontró una página de política de privacidad aparte en el sitio del proyecto ni en la documentación leída; las declaraciones de privacidad están en el README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**La documentación dice que Facet funciona en cualquier equipo con CPU y que una GPU NVIDIA o un Mac con Apple Silicon con mucha memoria desbloquea sus modelos más potentes.**',
        ],
        columns: [
          'Elemento',
          'Qué dicen las fuentes',
        ],
        rows: [
          {
            Elemento: 'Perfiles',
            'Qué dicen las fuentes': 'legacy: solo CPU; 8gb: NVIDIA 6-14 GB; 16gb: NVIDIA 14-20 GB; 24gb: NVIDIA 20 GB o más',
          },
          {
            Elemento: 'Descarga en el primer uso',
            'Qué dicen las fuentes':
              'Según la documentación, una sola vez, unos 4.7 GB (legacy), 6.9 GB (8gb), 14.6 GB (16gb) o 19.1 GB (24gb)',
          },
          {
            Elemento: 'Apple Silicon',
            'Qué dicen las fuentes':
              'Usa el backend Metal para los modelos Torch; el perfil auto se calcula con la memoria unificada total y 32 GB alcanza 16gb',
          },
          {
            Elemento: 'Memoria',
            'Qué dicen las fuentes':
              'La documentación no indica un mínimo de RAM; avisa de que un contenedor con límite de memoria puede cerrarse en pleno escaneo con perfiles grandes',
          },
          {
            Elemento: 'Software',
            'Qué dicen las fuentes':
              'Docker, o Python 3.12 (3.10+ funciona) y Node.js 20+ para compilar la galería en una instalación manual',
          },
          {
            Elemento: 'Sistema operativo',
            'Qué dicen las fuentes': 'Windows, macOS o Linux; en Windows la documentación remite a Docker y, para una GPU NVIDIA, a WSL2',
          },
          {
            Elemento: 'Formatos de foto',
            'Qué dicen las fuentes': 'JPEG, HEIC, 10 formatos RAW, PNG, WebP, TIFF, AVIF y JPEG XL, entre otros',
          },
        ],
        note:
          'Estas cifras provienen de la documentación del proyecto; PromptQuorum no midió el tiempo de escaneo ni el uso de memoria en ningún hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen la documentación del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Obtén el código e indica la carpeta',
            whyItMatters: 'Clona el repositorio, copia .env.example a .env y fija PHOTOS_DIR con tu carpeta de fotos.',
          },
          {
            title: 'Inicia Facet',
            whyItMatters:
              'Ejecuta docker compose up -d; con una tarjeta NVIDIA, añade el archivo compose de su tamaño, o usa el script de instalación sin Docker.',
          },
          {
            title: 'Escanea y espera las descargas',
            whyItMatters:
              'El primer escaneo descarga los modelos de tu perfil, crea la base de datos y puntúa las fotos; puedes explorar mientras trabaja.',
          },
          {
            title: 'Abre la galería y pon una contraseña',
            whyItMatters:
              'Abre el visor en el navegador, inicia sesión con la contraseña de edición que la imagen de Docker muestra una vez y establece una contraseña del visor antes de compartir el puerto.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones principales',
        content: [
          '**Cada elemento siguiente procede del README o de la documentación del proyecto; PromptQuorum no ha probado ninguno.**',
        ],
        items: [
          '**Puntuar.** Nueve dimensiones por foto, entre ellas calidad estética, composición, calidad de las caras, nitidez de los ojos y exposición, ponderadas por categoría de contenido (más de 30 categorías).',
          '**Seleccionar.** Grupos de ráfagas, fotos parecidas y escenas, marcas de parpadeo, detección de casi duplicados y una selección automática con vista previa en simulación; las series de exposición y los panoramas se mantienen enteros.',
          '**Explorar.** Vistas de mosaico y cuadrícula, filtros, línea de tiempo, mapa, álbumes con álbumes inteligentes, presentaciones temáticas y recuerdos de «un día como hoy».',
          '**Organizar.** Personas con nombre y sugerencias de fusión, valoraciones con estrellas, etiquetas y acciones por lotes con un deshacer breve.',
          '**Compartir y conectar.** Enlaces de álbum con modo de revisión por clientes, sidecars XMP para Lightroom, darktable y digiKam, una bandeja WebDAV para subidas desde el móvil y sincronización de valoraciones con Immich.',
        ],
        note:
          'Según el README, Facet puntúa, ordena y selecciona, pero no edita archivos RAW, y la puntuación estética se basa en un modelo y es aproximada.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Funciones de IA y dónde se ejecutan',
        content: [
          '**La IA central trabaja con imágenes: modelos de puntuación de calidad, embeddings para la búsqueda, modelos de caras y detección del sujeto; las etiquetas, descripciones y críticas escritas proceden de un modelo opcional de visión y lenguaje.**',
        ],
        items: [
          '**Puntuaciones de calidad.** Los perfiles 16gb y 24gb usan TOPIQ para la puntuación estética, mientras que legacy y 8gb usan embeddings CLIP con una cabeza estética; la documentación indica que puntuadores complementarios como LIQE están disponibles en cualquier perfil.',
          '**Búsqueda.** Consultas como «atardecer en la playa» se comparan con embeddings: SigLIP 2 en 16gb y 24gb, OpenCLIP ViT-L-14 en legacy y 8gb.',
          '**Caras.** InsightFace detecta y reconoce caras y un agrupamiento las reúne en personas; los blendshapes opcionales de MediaPipe afinan la lectura de parpadeo y sonrisa.',
          '**Sujetos.** BiRefNet separa el sujeto del fondo para juzgar el enfoque y el encuadre.',
          '**My Taste.** Tus comparaciones A/B, valoraciones y decisiones de selección alimentan un optimizador de pesos y una clasificación personal.',
          '**Modelo de visión y lenguaje.** Etiquetas, descripciones y críticas se ejecutan en el mismo proceso con los perfiles 16gb y 24gb, o en un servidor remoto de Ollama o compatible con OpenAI indicado con vlm_backend; en ese caso la imagen se envía a ese servidor.',
        ],
        note:
          'Son declaraciones del propio proyecto. PromptQuorum no probó la calidad de la puntuación, la relevancia de la búsqueda ni la precisión de la agrupación de caras.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**El README dice que todo se ejecuta en tu equipo, sin nube, cuentas ni claves de API, y la documentación dice que un escaneo solo lee tus fotos y escribe los resultados en la base de datos propia de Facet.** Los modelos se descargan en el primer uso desde fuentes de Hugging Face, PyIQA e InsightFace a cachés locales; PromptQuorum no probó el funcionamiento sin conexión tras esa descarga.',
          'Solicitudes salientes que aparecen en la documentación y el código: una comprobación de actualizaciones que pregunta a GitHub por la última versión cada 7 días salvo que updates.enabled sea false; mosaicos de mapa que el navegador carga del servidor de teselas de OpenStreetMap; un cuadro de edición de GPS que cita el geocodificador Photon; y, solo si configuras vlm_backend con Ollama o un servidor compatible con OpenAI, las imágenes que envíes allí. El script del visor escucha en todas las interfaces por defecto, y mientras viewer.password esté vacío, cualquiera que alcance el puerto puede explorar la biblioteca y descargar los originales. El endpoint para asistentes MCP está activado por defecto; en una instalación abierta ofrece una clave anónima de solo lectura, y viewer.mcp.enabled en false lo desactiva.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Estas son las declaraciones del proyecto y la lectura que PromptQuorum hace de su documentación y su código. No se inspeccionó el tráfico de red y no se auditó el resto del código.',
          },
        ],
      },
      licensing: {
        id: 'model-licences',
        title: 'Licencias de los modelos',
        content: [
          '**El código de Facet tiene licencia MIT, pero algunos modelos que descarga por defecto no tienen licencia para uso comercial.** La página de licencias del proyecto lista pyiqa (TOPIQ, LIQE y los demás puntuadores) como código PolyForm Noncommercial con pesos CC BY-NC-SA, y los pesos InsightFace buffalo_l como solo para investigación no comercial. La API de GitHub no reconoce ninguna licencia para el repositorio, así que lee el propio archivo LICENSE.',
          'Con licensing.mode en commercial, Facet se limita a modelos con licencias permisivas: los componentes restringidos nunca se importan ni se descargan, y cada ranura se dirige a un sustituto, como YuNet y SFace para las caras. El script de instalación estándar y la imagen de Docker incluyen los paquetes restringidos, y una instalación comercial no cambia el modo por sí sola. La página aclara que es información y no asesoramiento jurídico.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Si piensas usar Facet en un negocio, comprueba tú mismo la licencia de cada modelo antes de confiar en la configuración por defecto.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Fotógrafos con bibliotecas grandes** que quieren ordenar ráfagas, parpadeos y casi duplicados antes de editar.',
          '**Quienes autoalojan** y quieren una galería privada con búsqueda en lenguaje natural y agrupación de caras, y se manejan con Docker.',
          '**Usuarios de Lightroom, darktable y digiKam** que quieren recuperar puntuaciones y selecciones como archivos sidecar estándar.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de la IA.** No se probaron la precisión de la puntuación, la agrupación de caras, la relevancia de la búsqueda ni la velocidad de escaneo; el propio README llama aproximada a la puntuación estética.',
          '**Uso sin conexión.** No se verificó si Facet funciona del todo sin conexión tras la primera descarga de modelos.',
          '**Estabilidad de las versiones.** Las notas de la v1.23.1 dicen que la v1.23.0 salió sin la imagen CUDA de Docker, y entre el 24 y el 27 de octubre de 2026 se publicaron tres versiones, así que espera cambios rápidos.',
          '**Soporte.** El README describe un proyecto de un solo desarrollador, sin el soporte de las herramientas comerciales de selección.',
          '**Pasos de instalación.** Los comandos de instalación proceden de la documentación y PromptQuorum no los ejecutó.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio incluye otras tres herramientas de bibliotecas de fotos e imágenes con análisis en el mismo segmento.',
        ],
        columns: [
          'App',
          'Plataformas',
          'Precio / licencia',
          'Diferencia clave',
        ],
        rows: [
          {
            App: '[Immich](/es/power-local-llm/immich-review)',
            Plataformas: 'Servidor (Docker), iOS, Android, navegador',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave':
              'Copia de seguridad desde el móvil y búsqueda; según el README de Facet, Facet añade puntuación de calidad y selección y puede sincronizar valoraciones con Immich',
          },
          {
            App: '[PhotoPrism](/es/power-local-llm/photoprism-review)',
            Plataformas: 'Servidor (Docker), navegador',
            'Precio / licencia': 'Community gratis / AGPL-3.0',
            'Diferencia clave':
              'Biblioteca de fotos autoalojada con IA; el README de Facet la agrupa con Immich como herramienta de organización, búsqueda y copia de seguridad',
          },
          {
            App: '[PixlStash](/es/power-local-llm/pixlstash-review)',
            Plataformas: 'App de escritorio para Windows, macOS, Linux, web',
            'Precio / licencia': 'Gratis / GPL-3.0',
            'Diferencia clave':
              'Biblioteca de imágenes con etiquetado local, descripciones e integración con ComfyUI, instalada como app de escritorio',
          },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Facet necesita una GPU?',
            a:
              'No. El perfil legacy ejecuta puntuación, caras, etiquetas, selección y galería en una CPU, solo que más despacio; TOPIQ, SigLIP 2 y las descripciones integradas requieren los perfiles NVIDIA 16gb o 24gb, salvo que apuntes vlm_backend a un servidor remoto.',
          },
          {
            q: '¿Facet modifica o borra mis fotos?',
            a:
              'La documentación dice que un escaneo solo las lee. Escribir valoraciones y palabras clave en tus archivos es una acción opcional aparte, y mover los descartes a la papelera solo funciona si viewer.cull.allow_trash está activado.',
          },
          {
            q: '¿Puedo usar Facet desde el móvil?',
            a:
              'No hay app nativa. La galería es una app web adaptable e instalable, y la documentación describe cómo PhotoSync o cualquier app WebDAV sube fotos a una bandeja vigilada.',
          },
          {
            q: '¿Cómo uso Facet con fines comerciales?',
            a:
              'Instala la versión comercial, establece licensing.mode en commercial y ejecuta el comando doctor, que muestra la postura de licencias activa; después lee la página de licencias de los modelos.',
          },
          {
            q: '¿Cómo mantengo la galería privada?',
            a:
              'Establece viewer.password y coloca el visor tras un proxy inverso con HTTPS; la documentación de despliegue incluye ejemplos con nginx y Caddy.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Facet es una forma gratuita y activamente mantenida de puntuar, seleccionar y explorar una biblioteca grande de fotos locales, con agrupación de caras y búsqueda en lenguaje natural que se ejecutan en tu propio equipo. En contra, la instalación requiere una terminal y una gran descarga de modelos en el primer uso, según la página de licencias del proyecto algunos pesos de modelo por defecto no tienen licencia comercial, según su documentación el visor está abierto hasta que pones una contraseña, una función opcional puede enviar imágenes a un servidor remoto y ninguna de las afirmaciones sobre la calidad de la IA pudo comprobarse aquí. Encaja con fotógrafos y quienes autoalojan y se manejan con Docker; quien busque una app de doble clic o un asistente LLM debería mirar en otra parte.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Facet](https://ncoevoet.github.io/facet/) — resumen de funciones e inicio rápido, revisado el 28 de octubre de 2026.',
          '[README de Facet](https://github.com/ncoevoet/facet/blob/master/README.md) — funciones, requisitos, licencias y comparaciones, revisado el 28 de octubre de 2026.',
          '[Documentación de Facet](https://github.com/ncoevoet/facet/tree/master/docs) — instalación, configuración, despliegue y páginas de agentes de IA, revisadas el 28 de octubre de 2026.',
          '[Modelos y licencias de terceros](https://github.com/ncoevoet/facet/blob/master/docs/THIRD_PARTY_MODELS.md) — licencia de cada modelo, revisada el 28 de octubre de 2026.',
          '[Facet en GitHub](https://github.com/ncoevoet/facet/releases) — versiones y actividad de commits, revisadas el 28 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Immich](/es/power-local-llm/immich-review) — una biblioteca de fotos autoalojada con apps móviles y búsqueda inteligente en el servidor.',
          '[Análisis de PhotoPrism](/es/power-local-llm/photoprism-review) — otra biblioteca de fotos autoalojada con etiquetas de IA integradas.',
          '[Análisis de PixlStash](/es/power-local-llm/pixlstash-review) — un gestor de bibliotecas de imágenes con etiquetado local con IA.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA locales.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/facet-review-hero-fr.webp',
    title: 'Test de Facet : notation, tri et galerie de photos en local',
    seoTitle: 'Test de Facet : noter et trier ses photos en local',
    intro:
      'Facet est un outil gratuit d’analyse de photos sous licence MIT que vous exécutez vous-même : il note chaque photo, repère les rafales et les quasi-doublons, regroupe les visages et vous permet de chercher dans votre photothèque en langage naturel via une galerie web. Ce n’est pas une application de chat ni de LLM ; l’IA se compose de notation d’images, d’embeddings et de modèles de visages. Ce test reflète son README, sa documentation, ses versions GitHub et son code source, consultés le 28 octobre 2026.',
    metaDescription:
      'Test de Facet : outil gratuit MIT qui note, trie et parcourt vos photos en local, avec visages regroupés et recherche. Licences et confidentialité.',
    twitterDescription:
      'Test de Facet : un outil auto-hébergé pour noter, trier et parcourir ses photos. Installation par Docker ou script, profils CPU et GPU, poids de modèles par défaut non commerciaux, VLM distant facultatif et ce que nous n’avons pas pu vérifier.',
    audience:
      'Photographes et auto-hébergeurs disposant d’une grande photothèque locale, qui veulent savoir quel effort l’installation demande, quelle IA s’exécute où, ce que permettent les licences des modèles et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test de Facet',
    targetKeywords: [
      'test facet photos',
      'logiciel ia tri de photos',
      'tri de photos auto-hébergé',
      'notation de photos en local',
      'rafales et quasi-doublons photos',
      'facet ncoevoet github',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Facet (v1.25.0 au 28 octobre 2026) est un outil gratuit sous licence MIT qui note, trie et parcourt une photothèque locale via une galerie web, avec regroupement des visages et recherche en langage naturel sur votre propre machine.** Selon la page de licences du projet, une partie de ses poids de modèles par défaut n’est pas sous licence pour un usage commercial. Il ne comporte aucune fonction de chat.',
    quickAnswerTop: {
      fr: {
        question: 'Facet garde-t-il vos photos et la notation par IA sur votre propre machine ?',
        answer:
          'Selon son README, oui : un scan se contente de lire vos photos, les résultats vont dans la base de données propre à Facet et les modèles s’exécutent sur votre matériel après un téléchargement au premier lancement. Quelques éléments sortent vers l’extérieur, comme la vérification des mises à jour, les tuiles de carte et un serveur distant facultatif de modèles vision-langage. PromptQuorum n’a pas inspecté le trafic réseau.',
        bullets: [
          'Note chaque photo selon 9 dimensions, regroupe rafales, photos similaires et visages, et fait ressortir les meilleures.',
          'La recherche en langage naturel utilise SigLIP 2 sur les profils GPU 16gb et 24gb et un modèle CLIP sur legacy et 8gb.',
          'Fonctionne sur CPU avec le profil legacy ; un GPU NVIDIA ou un Mac Apple Silicon doté de beaucoup de mémoire débloque les modèles les plus puissants.',
          'S’installe avec Docker ou un script d’installation ; il n’existe ni installeur, ni version sur une boutique d’applications, ni binaire de release.',
          'Selon sa documentation, le visualiseur est ouvert à toute personne qui atteint son port tant que vous n’avez pas défini de mot de passe.',
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
        label: 'Qu’est-ce que Facet ?',
        anchor: 'what-is-facet',
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
        label: 'Premiers pas',
        anchor: 'getting-started',
      },
      {
        label: 'Fonctions principales',
        anchor: 'key-features',
      },
      {
        label: 'Fonctions d’IA et où elles s’exécutent',
        anchor: 'ai-features',
      },
      {
        label: 'Flux de données et confidentialité',
        anchor: 'privacy',
      },
      {
        label: 'Licences des modèles',
        anchor: 'model-licences',
      },
      {
        label: 'À qui il s’adresse',
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
            text:
              'Facet est un outil auto-hébergé qui note les photos, choisit la meilleure de chaque rafale, regroupe les visages et permet de chercher dans une photothèque locale en langage naturel, le tout depuis une galerie dans le navigateur.',
          },
          {
            type: 'plain-terms',
            text:
              'Vous indiquez à Facet un dossier de photos, il les analyse une fois sur votre ordinateur, puis vous parcourez, triez et recherchez les résultats dans votre navigateur.',
          },
        ],
        items: [
          'Maintenance : la v1.25.0 est sortie le 27 octobre 2026 et le dépôt a reçu un push le 28 octobre 2026, donc aucun avertissement de projet abandonné ne s’applique.',
          'Responsable : le README le décrit comme un projet d’un seul développeur sans support commercial ; le code est sur GitHub sous licence MIT.',
          'Installation : Docker Compose ou un script d’installation, puis un premier scan qui télécharge les modèles ; un terminal est nécessaire.',
          'Coût : gratuit ; aucune offre payante n’a été trouvée. « Edition » dans la documentation désigne un niveau d’accès, pas une édition du produit.',
          'Périmètre : notation d’images, tri et recherche ; les étiquettes, légendes et critiques rédigées exigent un modèle vision-langage facultatif.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Ce test s’appuie sur le site web, le README, la documentation, les versions GitHub et une partie du code source du projet, consultés le 28 octobre 2026. PromptQuorum n’a pas installé Facet : la précision de la notation, la pertinence de la recherche et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-facet',
        title: 'Qu’est-ce que Facet ?',
        content: [
          '**Facet est un moteur local d’analyse et de tri de photos doté d’une galerie web : il note chaque image, puis vous permet de parcourir, trier et organiser les résultats.** Le README indique que tout s’exécute sur votre machine, sans cloud, compte ni clé d’API, et le code est sous licence MIT.',
          'Le fichier LICENSE désigne Nicolas Coevoet comme titulaire du droit d’auteur. Le travail se partage entre deux outils : un scanner lancé en ligne de commande et un visualiseur qui sert la galerie dans votre navigateur.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Facet s’installe depuis son dépôt de code avec Docker ou un script d’installation ; le projet ne publie ni installeur, ni fiche sur une boutique d’applications, ni binaire de release.**',
        ],
        columns: [
          'Option',
          'Comment l’obtenir',
        ],
        rows: [
          {
            Option: 'Docker (recommandé)',
            'Comment l’obtenir':
              '[Guide d’installation](https://github.com/ncoevoet/facet/blob/master/docs/INSTALLATION.md) : cloner, indiquer le dossier de photos, docker compose up',
          },
          {
            Option: 'Sans Docker',
            'Comment l’obtenir': 'Cloner, lancer bash install.sh, puis python facet.py et python viewer.py (Linux, macOS)',
          },
          {
            Option: 'Documentation',
            'Comment l’obtenir': '[Dossier docs](https://github.com/ncoevoet/facet/tree/master/docs) du dépôt',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[ncoevoet.github.io/facet](https://ncoevoet.github.io/facet/)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/ncoevoet/facet](https://github.com/ncoevoet/facet) (MIT)',
          },
          {
            Option: 'Versions',
            'Comment l’obtenir': '[Releases GitHub](https://github.com/ncoevoet/facet/releases), notes uniquement',
          },
        ],
        note:
          'Version testée : v1.25.0, publiée le 27 octobre 2026 selon la release GitHub ; le dernier push dans le dépôt date du 28 octobre 2026. L’installation exige un terminal, Git et Docker ou Python : c’est une mise en place pour développeurs, pas une installation par double-clic. Aucune page de politique de confidentialité distincte n’a été trouvée sur le site du projet ni dans la documentation lue ; les déclarations de confidentialité figurent dans le README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**La documentation indique que Facet fonctionne sur toute machine dotée d’un CPU et qu’un GPU NVIDIA ou un Mac Apple Silicon doté de beaucoup de mémoire débloque ses modèles les plus puissants.**',
        ],
        columns: [
          'Élément',
          'Ce que disent les sources',
        ],
        rows: [
          {
            'Élément': 'Profils',
            'Ce que disent les sources': 'legacy : CPU seul ; 8gb : NVIDIA 6-14 Go ; 16gb : NVIDIA 14-20 Go ; 24gb : NVIDIA 20 Go ou plus',
          },
          {
            'Élément': 'Téléchargement initial',
            'Ce que disent les sources':
              'Selon la documentation, une seule fois, environ 4.7 Go (legacy), 6.9 Go (8gb), 14.6 Go (16gb) ou 19.1 Go (24gb)',
          },
          {
            'Élément': 'Apple Silicon',
            'Ce que disent les sources':
              'Utilise le backend Metal pour les modèles Torch ; le profil auto est calculé sur la mémoire unifiée totale, 32 Go atteignant 16gb',
          },
          {
            'Élément': 'Mémoire',
            'Ce que disent les sources':
              'La documentation ne donne aucun minimum de RAM ; elle prévient qu’un conteneur à mémoire plafonnée peut être arrêté en plein scan avec les gros profils',
          },
          {
            'Élément': 'Logiciel',
            'Ce que disent les sources':
              'Docker, ou Python 3.12 (3.10+ fonctionne) et Node.js 20+ pour compiler la galerie en installation manuelle',
          },
          {
            'Élément': 'Système d’exploitation',
            'Ce que disent les sources':
              'Windows, macOS ou Linux ; sous Windows, la documentation renvoie à Docker et, pour un GPU NVIDIA, à WSL2',
          },
          {
            'Élément': 'Formats de photo',
            'Ce que disent les sources': 'JPEG, HEIC, 10 formats RAW, PNG, WebP, TIFF, AVIF et JPEG XL, entre autres',
          },
        ],
        note:
          'Ces chiffres proviennent de la documentation du projet ; PromptQuorum n’a mesuré ni la durée de scan ni l’usage mémoire sur aucun matériel.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent la documentation du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Récupérez le code et indiquez le dossier',
            whyItMatters:
              'Clonez le dépôt, copiez .env.example vers .env et définissez PHOTOS_DIR sur votre dossier de photos.',
          },
          {
            title: 'Démarrez Facet',
            whyItMatters:
              'Lancez docker compose up -d ; avec une carte NVIDIA, ajoutez le fichier compose correspondant à sa taille, ou utilisez le script d’installation sans Docker.',
          },
          {
            title: 'Scannez et attendez les téléchargements',
            whyItMatters:
              'Le premier scan télécharge les modèles de votre profil, crée la base de données et note les photos ; vous pouvez parcourir la galerie pendant ce temps.',
          },
          {
            title: 'Ouvrez la galerie et définissez un mot de passe',
            whyItMatters:
              'Ouvrez le visualiseur dans le navigateur, connectez-vous avec le mot de passe d’édition que l’image Docker affiche une fois, puis définissez un mot de passe du visualiseur avant de partager le port.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions principales',
        content: [
          '**Chaque point ci-dessous provient du README ou de la documentation du projet ; PromptQuorum n’en a testé aucun.**',
        ],
        items: [
          '**Noter.** Neuf dimensions par photo, dont la qualité esthétique, la composition, la qualité des visages, la netteté des yeux et l’exposition, pondérées par catégorie de contenu (plus de 30 catégories).',
          '**Trier.** Groupes de rafales, de photos similaires et de scènes, repérage des clignements, détection des quasi-doublons et tri automatique avec aperçu à blanc ; les séries d’exposition et les panoramas restent entiers.',
          '**Parcourir.** Vues mosaïque et grille, filtres, frise chronologique, carte, albums dont des albums intelligents, diaporamas thématiques et souvenirs « il y a un an ».',
          '**Organiser.** Personnes nommées avec suggestions de fusion, notes par étoiles, étiquettes et actions groupées avec annulation rapide.',
          '**Partager et connecter.** Liens d’album avec mode de relecture par les clients, fichiers XMP annexes pour Lightroom, darktable et digiKam, boîte WebDAV pour les envois depuis le téléphone et synchronisation des notes avec Immich.',
        ],
        note:
          'Selon le README, Facet note, classe et trie mais ne retouche pas les fichiers RAW, et la note esthétique repose sur un modèle et reste approximative.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Fonctions d’IA et où elles s’exécutent',
        content: [
          '**L’IA centrale travaille sur les images : modèles de notation de la qualité, embeddings pour la recherche, modèles de visages et détection du sujet ; les étiquettes, légendes et critiques rédigées viennent d’un modèle vision-langage facultatif.**',
        ],
        items: [
          '**Notes de qualité.** Les profils 16gb et 24gb utilisent TOPIQ pour la note esthétique, tandis que legacy et 8gb utilisent des embeddings CLIP avec une tête esthétique ; la documentation indique que des évaluateurs complémentaires comme LIQE sont disponibles sur tous les profils.',
          '**Recherche.** Des requêtes comme « coucher de soleil sur la plage » sont comparées aux embeddings : SigLIP 2 sur 16gb et 24gb, OpenCLIP ViT-L-14 sur legacy et 8gb.',
          '**Visages.** InsightFace détecte et reconnaît les visages, puis un regroupement les réunit en personnes ; les blendshapes MediaPipe facultatifs affinent la lecture des clignements et des sourires.',
          '**Sujets.** BiRefNet sépare le sujet de l’arrière-plan pour juger la mise au point et le cadrage.',
          '**My Taste.** Vos comparaisons A/B, notes et décisions de tri alimentent un optimiseur de pondérations et un classement personnel.',
          '**Modèle vision-langage.** Étiquettes, légendes et critiques s’exécutent dans le même processus sur les profils 16gb et 24gb, ou sur un serveur distant Ollama ou compatible OpenAI défini par vlm_backend ; l’image est alors envoyée à ce serveur.',
        ],
        note:
          'Ce sont les déclarations du projet lui-même. PromptQuorum n’a testé ni la qualité des notes, ni la pertinence de la recherche, ni la précision du regroupement des visages.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Le README indique que tout s’exécute sur votre machine, sans cloud, compte ni clé d’API, et la documentation précise qu’un scan se contente de lire vos photos et écrit les résultats dans la base de données propre à Facet.** Les modèles sont récupérés au premier usage auprès de sources Hugging Face, PyIQA et InsightFace dans des caches locaux ; PromptQuorum n’a pas testé le fonctionnement hors connexion après ce téléchargement.',
          'Requêtes sortantes relevées dans la documentation et le code : une vérification des mises à jour qui interroge GitHub sur la dernière release tous les 7 jours sauf si updates.enabled vaut false ; des tuiles de carte que le navigateur charge depuis le serveur de tuiles d’OpenStreetMap ; une boîte d’édition GPS qui cite le géocodeur Photon ; et, seulement si vous réglez vlm_backend sur Ollama ou un serveur compatible OpenAI, les images que vous y envoyez. Le script du visualiseur écoute par défaut sur toutes les interfaces, et tant que viewer.password est vide, toute personne qui atteint le port peut parcourir la photothèque et télécharger les originaux. Le point d’accès pour assistants MCP est activé par défaut ; sur une installation ouverte, il fournit une clé anonyme en lecture seule, et viewer.mcp.enabled sur false le désactive.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Ce sont les déclarations du projet et la lecture que PromptQuorum fait de sa documentation et de son code. Le trafic réseau n’a pas été inspecté et le reste du code source n’a pas été audité.',
          },
        ],
      },
      licensing: {
        id: 'model-licences',
        title: 'Licences des modèles',
        content: [
          '**Le code de Facet est sous licence MIT, mais certains modèles qu’il télécharge par défaut ne sont pas sous licence pour un usage commercial.** La page de licences du projet classe pyiqa (TOPIQ, LIQE et les autres évaluateurs) comme du code PolyForm Noncommercial avec des poids CC BY-NC-SA, et les poids InsightFace buffalo_l comme réservés à la recherche non commerciale. L’API GitHub ne reconnaît aucune licence pour le dépôt : lisez donc le fichier LICENSE lui-même.',
          'Avec licensing.mode réglé sur commercial, Facet se limite aux modèles sous licence permissive : les composants restreints ne sont jamais importés ni téléchargés, et chaque emplacement est dirigé vers un remplaçant, par exemple YuNet et SFace pour les visages. Le script d’installation standard et l’image Docker incluent les paquets restreints, et une installation commerciale ne bascule pas le mode d’elle-même. La page précise qu’elle est une information et non un conseil juridique.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Si vous comptez utiliser Facet dans une entreprise, vérifiez vous-même la licence de chaque modèle avant de vous fier à la configuration par défaut.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les photographes aux grandes photothèques** qui veulent trier rafales, clignements et quasi-doublons avant de retoucher.',
          '**Les auto-hébergeurs** qui souhaitent une galerie privée avec recherche en langage naturel et regroupement des visages, et qui sont à l’aise avec Docker.',
          '**Les utilisateurs de Lightroom, darktable et digiKam** qui veulent récupérer notes et sélections sous forme de fichiers annexes standard.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité de l’IA.** La précision de la notation, le regroupement des visages, la pertinence de la recherche et la vitesse de scan n’ont pas été testés ; le README qualifie lui-même la note esthétique d’approximative.',
          '**Usage hors connexion.** Nous n’avons pas vérifié si Facet fonctionne entièrement hors ligne après le premier téléchargement des modèles.',
          '**Stabilité des versions.** Les notes de la v1.23.1 indiquent que la v1.23.0 est sortie sans l’image Docker CUDA, et trois versions ont paru entre le 24 et le 27 octobre 2026 : attendez-vous à des changements rapides.',
          '**Support.** Le README décrit un projet d’un seul développeur, sans le support des outils de tri commerciaux.',
          '**Étapes d’installation.** Les commandes proviennent de la documentation et PromptQuorum ne les a pas exécutées.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'L’annuaire compte trois autres outils testés de photothèque et de bibliothèque d’images dans le même segment.',
        ],
        columns: [
          'Application',
          'Plateformes',
          'Prix / licence',
          'Différence clé',
        ],
        rows: [
          {
            Application: '[Immich](/fr/power-local-llm/immich-review)',
            Plateformes: 'Serveur (Docker), iOS, Android, navigateur',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence clé':
              'Sauvegarde depuis le téléphone et recherche ; selon le README de Facet, Facet ajoute la notation de qualité et le tri et peut synchroniser les notes avec Immich',
          },
          {
            Application: '[PhotoPrism](/fr/power-local-llm/photoprism-review)',
            Plateformes: 'Serveur (Docker), navigateur',
            'Prix / licence': 'Community gratuite / AGPL-3.0',
            'Différence clé':
              'Photothèque auto-hébergée avec IA ; le README de Facet la range avec Immich parmi les outils d’organisation, de recherche et de sauvegarde',
          },
          {
            Application: '[PixlStash](/fr/power-local-llm/pixlstash-review)',
            Plateformes: 'Application de bureau Windows, macOS, Linux, web',
            'Prix / licence': 'Gratuit / GPL-3.0',
            'Différence clé':
              'Bibliothèque d’images avec étiquetage local, légendes et intégration ComfyUI, installée comme application de bureau',
          },
        ],
        note: 'Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Facet a-t-il besoin d’un GPU ?',
            a:
              'Non. Le profil legacy exécute notation, visages, étiquettes, tri et galerie sur un CPU, simplement plus lentement ; TOPIQ, SigLIP 2 et les légendes intégrées exigent les profils NVIDIA 16gb ou 24gb, sauf si vous pointez vlm_backend vers un serveur distant.',
          },
          {
            q: 'Facet modifie-t-il ou supprime-t-il mes photos ?',
            a:
              'La documentation indique qu’un scan ne fait que les lire. Écrire notes et mots-clés dans vos fichiers est une action facultative distincte, et le déplacement des rejets vers la corbeille ne fonctionne que si viewer.cull.allow_trash est activé.',
          },
          {
            q: 'Puis-je utiliser Facet depuis mon téléphone ?',
            a:
              'Il n’existe pas d’application native. La galerie est une application web adaptative et installable, et la documentation décrit l’envoi de photos par PhotoSync ou toute application WebDAV vers une boîte surveillée.',
          },
          {
            q: 'Comment utiliser Facet à titre commercial ?',
            a:
              'Installez la version commerciale, réglez licensing.mode sur commercial et lancez la commande doctor, qui affiche la situation de licence active ; lisez ensuite la page des licences des modèles.',
          },
          {
            q: 'Comment garder la galerie privée ?',
            a:
              'Définissez viewer.password et placez le visualiseur derrière un proxy inverse en HTTPS ; la documentation de déploiement donne des exemples avec nginx et Caddy.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Facet est un moyen gratuit et activement maintenu de noter, trier et parcourir une grande photothèque locale, avec regroupement des visages et recherche en langage naturel exécutés sur votre propre machine. En face : une installation qui demande un terminal et un gros téléchargement de modèles au premier lancement, selon la page de licences du projet des poids de modèles par défaut sans licence commerciale, selon sa documentation un visualiseur ouvert tant qu’aucun mot de passe n’est défini, une fonction facultative pouvant envoyer des images à un serveur distant, et aucune affirmation sur la qualité de l’IA que nous ayons pu vérifier ici. Il convient aux photographes et aux auto-hébergeurs à l’aise avec Docker ; qui veut une application à double-clic ou un assistant LLM doit chercher ailleurs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Facet](https://ncoevoet.github.io/facet/) — présentation des fonctions et démarrage rapide, consultés le 28 octobre 2026.',
          '[README de Facet](https://github.com/ncoevoet/facet/blob/master/README.md) — fonctions, prérequis, licences et comparaisons, consultés le 28 octobre 2026.',
          '[Documentation de Facet](https://github.com/ncoevoet/facet/tree/master/docs) — installation, configuration, déploiement et pages sur les agents d’IA, consultées le 28 octobre 2026.',
          '[Modèles et licences tiers](https://github.com/ncoevoet/facet/blob/master/docs/THIRD_PARTY_MODELS.md) — licence de chaque modèle, consultée le 28 octobre 2026.',
          '[Facet sur GitHub](https://github.com/ncoevoet/facet/releases) — versions et activité des commits, consultées le 28 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’Immich](/fr/power-local-llm/immich-review) — une photothèque auto-hébergée avec applications mobiles et recherche intelligente sur le serveur.',
          '[Test de PhotoPrism](/fr/power-local-llm/photoprism-review) — une autre photothèque auto-hébergée avec étiquettes d’IA intégrées.',
          '[Test de PixlStash](/fr/power-local-llm/pixlstash-review) — un gestionnaire de bibliothèque d’images avec étiquetage local par IA.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locaux.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/facet-review-hero-ja.webp',
    title: 'Facetレビュー：ローカルで写真を採点・選別・閲覧',
    seoTitle: 'Facetレビュー：写真をローカルで採点・選別・閲覧する無料ツール',
    intro:
      'Facetは、自分で動かす無料のMITライセンスの写真分析ツールです。写真を1枚ずつ採点し、連写やほぼ同じ写真を見つけ、顔をグループ化し、Webギャラリーから自然な言葉でライブラリを検索できます。チャットやLLMのアプリではなく、AIは画像の採点、埋め込み、顔モデルです。このレビューは、2026年10月28日に確認したREADME、ドキュメント、GitHubのリリース、ソースコードに基づいています。',
    metaDescription: 'Facetのレビュー。写真をローカルで採点・選別・閲覧できる無料のMITツールで、顔のグループ化と自然言語検索に対応。導入方法、モデルのライセンス、プライバシーを解説します。',
    twitterDescription:
      'Facetレビュー：写真の採点・選別・ギャラリーを自分の環境で動かすツール。DockerまたはスクリプトでのセットアップとCPU／GPUプロファイル、既定モデルの非商用ライセンス、任意のリモートVLM、確認できなかった点を整理します。',
    audience: '大量の写真をローカルに持つ写真家やセルフホスト利用者のうち、導入の手間、AIがどこで動くか、モデルのライセンスが何を許すか、情報源が裏付けていない点を知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Facet レビュー',
    targetKeywords: [
      'facet 写真 レビュー',
      'ai 写真 選別 ソフト',
      '写真 選別 セルフホスト',
      '写真 採点 ローカル',
      '連写 類似写真 整理',
      'facet ncoevoet github',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Facet（2026年10月28日時点でv1.25.0）は、ローカルの写真ライブラリを採点・選別し、Webギャラリーで閲覧できる無料のMITライセンスのツールで、顔のグループ化と自然言語検索が自分のマシン上で動きます。**プロジェクトのモデルライセンスのページによれば、既定モデルの重みの一部は商用利用が許諾されていません。チャット機能はありません。',
    quickAnswerTop: {
      ja: {
        question: 'Facetは写真とAIの採点を自分のマシン上にとどめますか。',
        answer:
          'READMEによれば、はい。スキャンは写真を読み取るだけで、結果はFacet自身のデータベースに保存され、モデルは初回のダウンロード後に自分のハードウェアで動きます。更新確認、地図タイル、任意のリモート視覚言語サーバーなど、外部に出る通信もあります。PromptQuorumはネットワーク通信を調べていません。',
        bullets: [
          '写真を9つの観点で採点し、連写・類似写真・顔をグループ化して上位の写真を示します。',
          '自然言語検索は、GPUプロファイルの16gbと24gbではSigLIP 2、legacyと8gbではCLIPモデルを使います。',
          'legacyプロファイルならCPUで動き、NVIDIA GPUまたはメモリの多いApple Siliconを搭載したMacで最も強力なモデルが使えます。',
          'インストールはDockerまたはインストールスクリプトで、インストーラー、アプリストア版、リリースのバイナリはありません。',
          'ドキュメントによれば、ビューアはパスワードを設定するまで、ポートに届く人なら誰でも開けます。',
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
        label: 'Facetとは',
        anchor: 'what-is-facet',
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
        label: '始め方',
        anchor: 'getting-started',
      },
      {
        label: '主な機能',
        anchor: 'key-features',
      },
      {
        label: 'AI機能と実行場所',
        anchor: 'ai-features',
      },
      {
        label: 'データの流れとプライバシー',
        anchor: 'privacy',
      },
      {
        label: 'モデルのライセンス',
        anchor: 'model-licences',
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
          {
            type: 'one-sentence',
            text: 'Facetは、写真を採点し、連写から最良の1枚を選び、顔をグループ化し、ローカルのライブラリを自然な言葉で検索できるセルフホスト型ツールで、操作はすべてブラウザのギャラリーから行います。',
          },
          {
            type: 'plain-terms',
            text: '写真フォルダをFacetに指定すると、自分のパソコン上で一度分析され、その結果をブラウザで閲覧・選別・検索できます。',
          },
        ],
        items: [
          'メンテナンス：v1.25.0は2026年10月27日に公開され、リポジトリには2026年10月28日にプッシュがあったため、放置プロジェクトの警告は該当しません。',
          '運営：READMEは、商用サポートのない個人開発プロジェクトと説明しています。コードはMITライセンスでGitHubにあります。',
          '導入：Docker Composeまたはインストールスクリプトと、モデルをダウンロードする初回スキャンが必要で、ターミナルを使います。',
          '費用：無料で、有料プランは見つかりませんでした。ドキュメントの「Edition」はアクセスレベルであり、製品のエディションではありません。',
          '範囲：画像の採点、選別、検索。文章のタグ、キャプション、講評には任意の視覚言語モデルが必要です。',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'このレビューは、2026年10月28日に確認したプロジェクトのWebサイト、README、ドキュメント、GitHubのリリース、ソースコードの一部に基づいています。PromptQuorumはFacetをインストールしていないため、採点の精度、検索の適合度、速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-facet',
        title: 'Facetとは',
        content: [
          '**Facetは、Webギャラリーを備えたローカルの写真分析・選別エンジンで、画像を採点したうえで、結果を閲覧・選別・整理できます。**READMEによれば、すべてが自分のマシン上で動き、クラウド、アカウント、APIキーは不要で、コードはMITライセンスです。',
          'LICENSEファイルには著作権者としてNicolas Coevoetの名があります。作業は2つのツールに分かれ、コマンドラインから起動するスキャナーと、ブラウザにギャラリーを提供するビューアです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Facetは、ソースのリポジトリからDockerまたはインストールスクリプトでインストールします。プロジェクトは、インストーラー、アプリストアの掲載、リリースのバイナリを公開していません。**',
        ],
        columns: [
          '項目',
          '入手方法',
        ],
        rows: [
          {
            '項目': 'Docker（推奨）',
            '入手方法':
              '[インストールガイド](https://github.com/ncoevoet/facet/blob/master/docs/INSTALLATION.md)：クローンし、写真フォルダを指定して docker compose up',
          },
          {
            '項目': 'Dockerなし',
            '入手方法': 'クローンして bash install.sh を実行し、python facet.py と python viewer.py を起動（Linux、macOS）',
          },
          {
            '項目': 'ドキュメント',
            '入手方法': 'リポジトリの[docsフォルダ](https://github.com/ncoevoet/facet/tree/master/docs)',
          },
          {
            '項目': 'ウェブサイト',
            '入手方法': '[ncoevoet.github.io/facet](https://ncoevoet.github.io/facet/)',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[github.com/ncoevoet/facet](https://github.com/ncoevoet/facet)（MIT）',
          },
          {
            '項目': 'リリース',
            '入手方法': '[GitHubリリース](https://github.com/ncoevoet/facet/releases)（リリースノートのみ）',
          },
        ],
        note:
          '確認したバージョンはv1.25.0で、GitHubのリリースによると2026年10月27日に公開されました。リポジトリへの最後のプッシュは2026年10月28日です。インストールにはターミナル、Git、DockerまたはPythonが必要で、ダブルクリックで入るものではなく開発者向けの導入です。プロジェクトのサイトにも読んだドキュメントにも、独立したプライバシーポリシーのページは見つかりませんでした。プライバシーに関する記述はREADMEにあります。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**ドキュメントによれば、FacetはCPUのあるマシンならどれでも動き、NVIDIA GPUまたはメモリの多いApple SiliconのMacで最も強力なモデルが使えます。**',
        ],
        columns: [
          '項目',
          '情報源の記載',
        ],
        rows: [
          {
            '項目': 'プロファイル',
            '情報源の記載': 'legacy：CPUのみ、8gb：NVIDIA 6〜14 GB、16gb：NVIDIA 14〜20 GB、24gb：NVIDIA 20 GB以上',
          },
          {
            '項目': '初回ダウンロード',
            '情報源の記載': 'ドキュメントによれば一度だけで、legacyは約4.7 GB、8gbは約6.9 GB、16gbは約14.6 GB、24gbは約19.1 GB',
          },
          {
            '項目': 'Apple Silicon',
            '情報源の記載': 'TorchモデルにMetalバックエンドを使用。autoプロファイルは統合メモリの合計で決まり、32 GBで16gbに達します',
          },
          {
            '項目': 'メモリ',
            '情報源の記載': 'ドキュメントにRAMの最小値はありません。メモリ上限付きのコンテナは、大きなプロファイルでスキャン中に停止することがあると警告しています',
          },
          {
            '項目': 'ソフトウェア',
            '情報源の記載': 'Docker。手動インストールならPython 3.12（3.10以上でも可）と、ギャラリーのビルド用にNode.js 20以上',
          },
          {
            '項目': '対応OS',
            '情報源の記載': 'Windows、macOS、Linux。WindowsではドキュメントがDockerを案内し、NVIDIA GPUにはWSL2を案内しています',
          },
          {
            '項目': '写真の形式',
            '情報源の記載': 'JPEG、HEIC、10種類のRAW、PNG、WebP、TIFF、AVIF、JPEG XLなど',
          },
        ],
        note: 'これらの数値はプロジェクトのドキュメントによるものです。PromptQuorumは、どのハードウェアでもスキャン時間やメモリ使用量を測定していません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はプロジェクトのドキュメントに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'コードを取得してフォルダを指定',
            whyItMatters: 'リポジトリをクローンし、.env.exampleを.envにコピーして、PHOTOS_DIRに写真フォルダを設定します。',
          },
          {
            title: 'Facetを起動',
            whyItMatters: 'docker compose up -d を実行します。NVIDIAのカードがある場合は、そのサイズ用のcomposeファイルを追加するか、Dockerなしでインストールスクリプトを使います。',
          },
          {
            title: 'スキャンしてダウンロードを待つ',
            whyItMatters: '最初のスキャンでプロファイル用のモデルをダウンロードし、データベースを作成して写真を採点します。処理中もギャラリーは閲覧できます。',
          },
          {
            title: 'ギャラリーを開いてパスワードを設定',
            whyItMatters: 'ブラウザでビューアを開き、Dockerイメージが一度だけ表示するeditionパスワードでログインします。ポートを共有する前に、ビューアのパスワードを設定してください。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主な機能',
        content: [
          '**以下の項目はすべてプロジェクトのREADMEまたはドキュメントによるもので、PromptQuorumはどれも試していません。**',
        ],
        items: [
          '**採点。**写真ごとに9つの観点（美的品質、構図、顔の品質、目のシャープさ、露出など）で採点し、コンテンツのカテゴリ（30以上）ごとに重み付けします。',
          '**選別。**連写・類似写真・シーンのグループ、まばたきの検出、ほぼ重複する写真の検出、ドライランのプレビュー付き自動選別に対応し、露出ブラケットやパノラマはまとめて残します。',
          '**閲覧。**モザイクとグリッド表示、フィルター、タイムライン、地図、スマートアルバムを含むアルバム、テーマ別スライドショー、「この日の思い出」。',
          '**整理。**名前を付けた人物と統合の提案、星の評価、タグ、短時間で取り消せる一括操作。',
          '**共有と連携。**クライアント確認モード付きのアルバムリンク、Lightroom・darktable・digiKam向けのXMPサイドカー、スマートフォンからのアップロード用WebDAV受信箱、Immichとの評価の同期。',
        ],
        note: 'READMEによれば、Facetは採点・ランク付け・選別を行いますが、RAWファイルの編集は行わず、美的スコアはモデルに基づく概算です。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI機能と実行場所',
        content: [
          '**中核のAIは画像向けで、品質を採点するモデル、検索用の埋め込み、顔モデル、被写体の検出です。文章のタグ、キャプション、講評は任意の視覚言語モデルが生成します。**',
        ],
        items: [
          '**品質スコア。**16gbと24gbのプロファイルは美的スコアにTOPIQを使い、legacyと8gbは美的ヘッドを持つCLIP埋め込みを使います。LIQEなどの補助的な採点モデルは、どのプロファイルでも使えるとドキュメントに記載されています。',
          '**検索。**「海辺の夕日」のような入力を埋め込みと照合します。16gbと24gbではSigLIP 2、legacyと8gbではOpenCLIP ViT-L-14です。',
          '**顔。**InsightFaceが顔を検出・認識し、クラスタリングで人物にまとめます。任意のMediaPipe blendshapesで、まばたきと笑顔の判定が精密になります。',
          '**被写体。**BiRefNetが被写体と背景を分け、ピントと構図を判断します。',
          '**My Taste。**A/B比較、評価、選別の判断が、重みの最適化と個人用ランキングに反映されます。',
          '**視覚言語モデル。**タグ、キャプション、講評は、16gbと24gbでは同一プロセス内で動き、vlm_backendで指定したリモートのOllamaまたはOpenAI互換サーバーでも動かせます。その場合、画像はそのサーバーに送られます。',
        ],
        note: 'これらはプロジェクト自身の説明です。PromptQuorumは、スコアの品質、検索の適合度、顔のグループ化の精度を試していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**READMEによれば、すべてが自分のマシン上で動き、クラウド、アカウント、APIキーは不要です。ドキュメントによれば、スキャンは写真を読み取るだけで、結果はFacet自身のデータベースに書き込まれます。**モデルは初回の利用時にHugging Face、PyIQA、InsightFaceの配布元からローカルのキャッシュにダウンロードされます。そのダウンロード後にオフラインで動作するかどうかは、PromptQuorumは試していません。',
          'ドキュメントとソースコードで確認できた外部への通信は次のとおりです。updates.enabledがfalseでない限り7日ごとにGitHubへ最新リリースを問い合わせる更新確認、ブラウザがOpenStreetMapのタイルサーバーから読み込む地図タイル、ジオコーダーPhotonに言及するGPS編集ダイアログ、そしてvlm_backendをOllamaやOpenAI互換サーバーに設定した場合にのみ、そこへ送る画像です。ビューアのスクリプトは既定ですべてのインターフェースで待ち受けており、viewer.passwordが空のあいだは、ポートに届く人なら誰でもライブラリを閲覧し、オリジナルをダウンロードできます。MCPアシスタント向けのエンドポイントは既定で有効で、オープンな環境では読み取り専用の匿名キーを提供し、viewer.mcp.enabledをfalseにすると無効になります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクトの説明と、ドキュメントおよびソースコードについてのPromptQuorumの読み取りです。ネットワーク通信は調べておらず、そのほかのソースコードも監査していません。',
          },
        ],
      },
      licensing: {
        id: 'model-licences',
        title: 'モデルのライセンス',
        content: [
          '**Facet自身のコードはMITライセンスですが、既定でダウンロードされるモデルの一部は商用利用が許諾されていません。**プロジェクトのライセンスページは、pyiqa（TOPIQ、LIQEなどの採点モデル）をPolyForm NoncommercialのコードとCC BY-NC-SAの重み、InsightFaceのbuffalo_lの重みを非商用の研究用途のみとしています。GitHubのAPIはこのリポジトリのライセンスを認識していないため、LICENSEファイルを直接確認してください。',
          'licensing.modeをcommercialにすると、Facetは寛容なライセンスのモデルだけを使います。制限付きのコンポーネントはインポートもダウンロードもされず、顔にはYuNetとSFaceなどの代替が割り当てられます。標準のインストールスクリプトとDockerイメージには制限付きのパッケージが含まれ、商用インストールだけではモードは切り替わりません。このページは情報であり、法的助言ではないとも記されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '業務でFacetを使う予定がある場合は、既定の設定に頼る前に、各モデルのライセンスをご自身で確認してください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**大きなライブラリを持つ写真家**で、編集の前に連写、まばたき、ほぼ重複する写真を整理したい方。',
          '**セルフホスト利用者**で、自然言語検索と顔のグループ化を備えた非公開のギャラリーがほしく、Dockerに慣れている方。',
          '**Lightroom、darktable、digiKamのユーザー**で、スコアとセレクトを標準的なサイドカーファイルとして書き戻したい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**AIの品質。**採点の精度、顔のグループ化、検索の適合度、スキャン速度は試していません。README自身も美的スコアを概算としています。',
          '**オフライン利用。**最初のモデルのダウンロード後に、Facetが完全にオフラインで動くかどうかは確認していません。',
          '**リリースの安定性。**v1.23.1のノートによると、v1.23.0はCUDA版のDockerイメージなしで公開されました。2026年10月24日から27日のあいだに3つのバージョンが出ているため、変更が速い点に注意してください。',
          '**サポート。**READMEは、商用の選別ツールのようなサポートのない個人開発プロジェクトと説明しています。',
          '**インストール手順。**セットアップのコマンドはドキュメントによるもので、PromptQuorumは実行していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        content: [
          'ディレクトリには、同じ分野でレビュー済みの写真・画像ライブラリツールがほかに3つあります。',
        ],
        columns: [
          'アプリ',
          '対応プラットフォーム',
          '価格／ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[Immich](/ja/power-local-llm/immich-review)',
            '対応プラットフォーム': 'サーバー（Docker）、iOS、Android、ブラウザ',
            '価格／ライセンス': '無料／AGPL-3.0',
            '主な違い': 'スマートフォンのバックアップと検索。FacetのREADMEによれば、Facetは品質の採点と選別を加え、評価をImmichと同期できます',
          },
          {
            'アプリ': '[PhotoPrism](/ja/power-local-llm/photoprism-review)',
            '対応プラットフォーム': 'サーバー（Docker）、ブラウザ',
            '価格／ライセンス': '無料のCommunity／AGPL-3.0',
            '主な違い': 'AI搭載のセルフホスト型フォトライブラリ。FacetのREADMEは、Immichと並べて整理・検索・バックアップ向けのツールに分類しています',
          },
          {
            'アプリ': '[PixlStash](/ja/power-local-llm/pixlstash-review)',
            '対応プラットフォーム': 'Windows・macOS・Linuxのデスクトップアプリ、Web',
            '価格／ライセンス': '無料／GPL-3.0',
            '主な違い': 'ローカルのタグ付け、キャプション、ComfyUI連携を備えた画像ライブラリで、デスクトップアプリとして導入します',
          },
        ],
        note: '各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれのページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'FacetにGPUは必要ですか。',
            a:
              'いいえ。legacyプロファイルなら、採点、顔、タグ、選別、ギャラリーをCPUで実行できます。ただし遅くなります。TOPIQ、SigLIP 2、内蔵のキャプションにはNVIDIAの16gbまたは24gbプロファイルが必要で、vlm_backendをリモートサーバーに向ける場合は別です。',
          },
          {
            q: 'Facetは写真を変更したり削除したりしますか。',
            a:
              'ドキュメントによれば、スキャンは写真を読み取るだけです。評価やキーワードをファイルに書き込むのは別の任意の操作で、却下した写真をゴミ箱へ移せるのはviewer.cull.allow_trashが有効な場合に限られます。',
          },
          {
            q: 'スマートフォンからFacetを使えますか。',
            a:
              'ネイティブアプリはありません。ギャラリーはレスポンシブでインストール可能なWebアプリで、ドキュメントにはPhotoSyncや任意のWebDAVアプリから監視対象の受信箱へアップロードする方法が載っています。',
          },
          {
            q: 'Facetを商用で使うには。',
            a:
              '商用ビルドをインストールし、licensing.modeをcommercialに設定して、現在のライセンス状況を表示するdoctorコマンドを実行します。そのうえでモデルのライセンスのページを読んでください。',
          },
          {
            q: 'ギャラリーを非公開に保つには。',
            a: 'viewer.passwordを設定し、ビューアをHTTPS対応のリバースプロキシの背後に置きます。デプロイのドキュメントにnginxとCaddyの例があります。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Facetは、大量のローカル写真を採点・選別・閲覧するための、無料で活発に更新されている手段で、顔のグループ化と自然言語検索が自分のマシン上で動きます。一方で、導入にはターミナルと初回の大きなモデルダウンロードが必要で、プロジェクトのライセンスページによれば既定のモデルの重みの一部は商用利用が許諾されておらず、ドキュメントによればビューアはパスワードを設定するまで開いたままで、任意の機能1つが画像をリモートサーバーに送る可能性があり、AIの品質に関する記述はここでは確認できませんでした。Dockerに慣れた写真家やセルフホスト利用者に向いています。ダブルクリックで使えるアプリやLLMアシスタントを求める方は、ほかを探してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Facetのウェブサイト](https://ncoevoet.github.io/facet/)：機能の概要とクイックスタート。2026年10月28日に確認。',
          '[FacetのREADME](https://github.com/ncoevoet/facet/blob/master/README.md)：機能、要件、ライセンス、他ツールとの比較。2026年10月28日に確認。',
          '[Facetのドキュメント](https://github.com/ncoevoet/facet/tree/master/docs)：インストール、設定、デプロイ、AIエージェントのページ。2026年10月28日に確認。',
          '[サードパーティのモデルとライセンス](https://github.com/ncoevoet/facet/blob/master/docs/THIRD_PARTY_MODELS.md)：各モデルのライセンス。2026年10月28日に確認。',
          '[GitHubのFacet](https://github.com/ncoevoet/facet/releases)：リリースとコミットの状況。2026年10月28日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Immichレビュー](/ja/power-local-llm/immich-review) — スマートフォンアプリと、サーバー上のスマート検索を備えたセルフホスト型フォトライブラリ。',
          '[PhotoPrismレビュー](/ja/power-local-llm/photoprism-review) — AIによるラベル付けを内蔵した、もう1つのセルフホスト型フォトライブラリ。',
          '[PixlStashレビュー](/ja/power-local-llm/pixlstash-review) — ローカルAIでタグ付けする画像ライブラリ管理ツール。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/facet-review-hero-pt.webp',
    title: 'Análise do Facet: pontuação, seleção e galeria de fotos locais',
    seoTitle: 'Análise do Facet: pontuar e selecionar fotos localmente',
    intro:
      'O Facet é uma ferramenta gratuita de análise de fotos, sob licença MIT, que você mesmo executa: ela pontua cada foto, encontra rajadas e quase duplicatas, agrupa rostos e deixa você pesquisar a biblioteca em linguagem natural por uma galeria web. Não é um app de chat nem de LLM; a IA é pontuação de imagens, embeddings e modelos de rostos. Esta análise reflete o README, a documentação, as versões do GitHub e o código-fonte, conferidos em 28 de outubro de 2026.',
    metaDescription:
      'Análise do Facet: ferramenta gratuita MIT que pontua, seleciona e navega fotos localmente, com rostos agrupados e busca. Instalação, licenças, privacidade.',
    twitterDescription:
      'Análise do Facet: uma ferramenta auto-hospedada para pontuar, selecionar e navegar fotos. Instalação com Docker ou script, perfis de CPU e GPU, pesos de modelos padrão não comerciais, VLM remoto opcional e o que não pudemos verificar.',
    audience:
      'Fotógrafos e quem faz auto-hospedagem com uma grande biblioteca de fotos local e quer saber o esforço de instalação, qual IA roda onde, o que as licenças dos modelos permitem e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Facet',
    targetKeywords: [
      'análise facet fotos',
      'software ia seleção de fotos',
      'seleção de fotos auto-hospedada',
      'pontuação de fotos local',
      'rajadas e quase duplicatas de fotos',
      'facet ncoevoet github',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**O Facet (v1.25.0 em 28 de outubro de 2026) é uma ferramenta gratuita, sob licença MIT, que pontua, seleciona e navega uma biblioteca de fotos local por uma galeria web, com agrupamento de rostos e busca em linguagem natural rodando no seu próprio computador.** Segundo a página de licenças do projeto, parte dos pesos de modelo padrão não tem licença para uso comercial. Não há nenhuma função de chat.',
    quickAnswerTop: {
      pt: {
        question: 'O Facet mantém suas fotos e a pontuação por IA no seu próprio computador?',
        answer:
          'Segundo o README, sim: uma varredura apenas lê suas fotos, os resultados vão para o banco de dados do próprio Facet e os modelos rodam no seu hardware depois de um download no primeiro uso. Algumas coisas saem para fora, como a verificação de atualizações, os blocos do mapa e um servidor remoto opcional de modelos de visão e linguagem. A PromptQuorum não inspecionou o tráfego de rede.',
        bullets: [
          'Pontua cada foto em 9 dimensões, agrupa rajadas, fotos parecidas e rostos, e destaca as melhores.',
          'A busca em linguagem natural usa o SigLIP 2 nos perfis de GPU 16gb e 24gb e um modelo CLIP em legacy e 8gb.',
          'Roda em CPU com o perfil legacy; uma GPU NVIDIA ou um Mac com Apple Silicon e muita memória libera os modelos mais fortes.',
          'Instala-se com Docker ou um script de instalação; não há instalador, versão em loja de apps nem binário de release.',
          'Segundo a documentação, o visualizador fica aberto a qualquer pessoa que alcance a porta até você definir uma senha.',
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
        label: 'O que é o Facet?',
        anchor: 'what-is-facet',
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
        label: 'Como começar',
        anchor: 'getting-started',
      },
      {
        label: 'Principais recursos',
        anchor: 'key-features',
      },
      {
        label: 'Recursos de IA e onde eles rodam',
        anchor: 'ai-features',
      },
      {
        label: 'Fluxo de dados e privacidade',
        anchor: 'privacy',
      },
      {
        label: 'Licenças dos modelos',
        anchor: 'model-licences',
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
            text:
              'O Facet é uma ferramenta auto-hospedada que pontua fotos, escolhe a melhor de cada rajada, agrupa rostos e permite pesquisar uma biblioteca local em linguagem natural, tudo por uma galeria no navegador.',
          },
          {
            type: 'plain-terms',
            text:
              'Você aponta o Facet para uma pasta de fotos, ele as analisa uma vez no seu computador e depois você navega, seleciona e pesquisa os resultados no navegador.',
          },
        ],
        items: [
          'Manutenção: a v1.25.0 foi lançada em 27 de outubro de 2026 e o repositório recebeu um push em 28 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Responsável: o README o descreve como um projeto de um único desenvolvedor, sem suporte comercial; o código está no GitHub sob licença MIT.',
          'Instalação: Docker Compose ou um script de instalação, mais uma primeira varredura que baixa os modelos; é preciso um terminal.',
          'Custo: gratuito; nenhum plano pago foi encontrado. «Edition» na documentação é um nível de acesso, não uma edição do produto.',
          'Escopo: pontuação de imagens, seleção e busca; tags, legendas e críticas escritas exigem um modelo opcional de visão e linguagem.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Esta análise se baseia no site, no README, na documentação, nas versões do GitHub e em partes do código-fonte do projeto, conferidos em 28 de outubro de 2026. A PromptQuorum não instalou o Facet, então precisão da pontuação, relevância da busca e velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-facet',
        title: 'O que é o Facet?',
        content: [
          '**O Facet é um mecanismo local de análise e seleção de fotos com galeria web: ele pontua cada imagem e depois permite navegar, selecionar e organizar os resultados.** O README diz que tudo roda no seu computador, sem nuvem, contas nem chaves de API, e o código é sob licença MIT.',
          'O arquivo LICENSE nomeia Nicolas Coevoet como titular dos direitos autorais. O trabalho se divide em duas ferramentas: um scanner iniciado pela linha de comando e um visualizador que serve a galeria no navegador.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Facet é instalado a partir do repositório de código com Docker ou um script de instalação; o projeto não publica instalador, página em loja de apps nem binário de release.**',
        ],
        columns: [
          'Opção',
          'Onde obter',
        ],
        rows: [
          {
            'Opção': 'Docker (recomendado)',
            'Onde obter':
              '[Guia de instalação](https://github.com/ncoevoet/facet/blob/master/docs/INSTALLATION.md): clonar, definir a pasta de fotos, docker compose up',
          },
          {
            'Opção': 'Sem Docker',
            'Onde obter': 'Clonar, executar bash install.sh e depois python facet.py e python viewer.py (Linux, macOS)',
          },
          {
            'Opção': 'Documentação',
            'Onde obter': '[Pasta docs](https://github.com/ncoevoet/facet/tree/master/docs) do repositório',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[ncoevoet.github.io/facet](https://ncoevoet.github.io/facet/)',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[github.com/ncoevoet/facet](https://github.com/ncoevoet/facet) (MIT)',
          },
          {
            'Opção': 'Versões',
            'Onde obter': '[Releases do GitHub](https://github.com/ncoevoet/facet/releases), só notas',
          },
        ],
        note:
          'Versão analisada: v1.25.0, publicada em 27 de outubro de 2026 segundo o release do GitHub; o último push no repositório foi em 28 de outubro de 2026. A instalação exige terminal, Git e Docker ou Python, então é uma configuração para desenvolvedores, não uma instalação com duplo clique. Nenhuma página separada de política de privacidade foi encontrada no site do projeto nem na documentação lida; as declarações de privacidade estão no README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A documentação diz que o Facet roda em qualquer computador com CPU e que uma GPU NVIDIA ou um Mac com Apple Silicon e muita memória libera os modelos mais fortes.**',
        ],
        columns: [
          'Item',
          'O que dizem as fontes',
        ],
        rows: [
          {
            Item: 'Perfis',
            'O que dizem as fontes': 'legacy: só CPU; 8gb: NVIDIA 6-14 GB; 16gb: NVIDIA 14-20 GB; 24gb: NVIDIA 20 GB ou mais',
          },
          {
            Item: 'Download no primeiro uso',
            'O que dizem as fontes':
              'Segundo a documentação, uma única vez, cerca de 4.7 GB (legacy), 6.9 GB (8gb), 14.6 GB (16gb) ou 19.1 GB (24gb)',
          },
          {
            Item: 'Apple Silicon',
            'O que dizem as fontes':
              'Usa o backend Metal para os modelos Torch; o perfil auto é definido pela memória unificada total e 32 GB chega a 16gb',
          },
          {
            Item: 'Memória',
            'O que dizem as fontes':
              'A documentação não informa um mínimo de RAM; avisa que um contêiner com limite de memória pode ser encerrado no meio da varredura em perfis maiores',
          },
          {
            Item: 'Software',
            'O que dizem as fontes': 'Docker, ou Python 3.12 (3.10+ funciona) e Node.js 20+ para compilar a galeria na instalação manual',
          },
          {
            Item: 'Sistema operacional',
            'O que dizem as fontes': 'Windows, macOS ou Linux; no Windows a documentação indica o Docker e, para GPU NVIDIA, o WSL2',
          },
          {
            Item: 'Formatos de foto',
            'O que dizem as fontes': 'JPEG, HEIC, 10 formatos RAW, PNG, WebP, TIFF, AVIF e JPEG XL, entre outros',
          },
        ],
        note:
          'Esses números vêm da documentação do projeto; a PromptQuorum não mediu o tempo de varredura nem o uso de memória em nenhum hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estas etapas seguem a documentação do projeto; a PromptQuorum não as executou.**',
        ],
        numberedItems: [
          {
            title: 'Obtenha o código e defina a pasta',
            whyItMatters: 'Clone o repositório, copie .env.example para .env e defina PHOTOS_DIR com a sua pasta de fotos.',
          },
          {
            title: 'Inicie o Facet',
            whyItMatters:
              'Execute docker compose up -d; com uma placa NVIDIA, acrescente o arquivo compose do tamanho dela, ou use o script de instalação sem Docker.',
          },
          {
            title: 'Faça a varredura e espere os downloads',
            whyItMatters:
              'A primeira varredura baixa os modelos do seu perfil, cria o banco de dados e pontua as fotos; você pode navegar enquanto ela trabalha.',
          },
          {
            title: 'Abra a galeria e defina uma senha',
            whyItMatters:
              'Abra o visualizador no navegador, entre com a senha de edição que a imagem do Docker mostra uma vez e defina uma senha do visualizador antes de compartilhar a porta.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Principais recursos',
        content: [
          '**Cada item abaixo vem do README ou da documentação do projeto; a PromptQuorum não testou nenhum deles.**',
        ],
        items: [
          '**Pontuar.** Nove dimensões por foto, entre elas qualidade estética, composição, qualidade dos rostos, nitidez dos olhos e exposição, ponderadas por categoria de conteúdo (mais de 30 categorias).',
          '**Selecionar.** Grupos de rajadas, fotos parecidas e cenas, marcação de piscadas, detecção de quase duplicatas e uma seleção automática com prévia em simulação; sequências de exposição e panoramas ficam inteiros.',
          '**Navegar.** Visualizações em mosaico e grade, filtros, linha do tempo, mapa, álbuns incluindo álbuns inteligentes, apresentações temáticas e lembranças de «neste dia».',
          '**Organizar.** Pessoas com nome e sugestões de mesclagem, avaliações por estrelas, tags e ações em lote com um desfazer rápido.',
          '**Compartilhar e conectar.** Links de álbum com modo de aprovação pelo cliente, sidecars XMP para Lightroom, darktable e digiKam, uma caixa de entrada WebDAV para envios do celular e sincronização de avaliações com o Immich.',
        ],
        note:
          'Segundo o README, o Facet pontua, classifica e seleciona, mas não edita arquivos RAW, e a pontuação estética é baseada em modelo e aproximada.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'Recursos de IA e onde eles rodam',
        content: [
          '**A IA central trabalha com imagens: modelos de pontuação de qualidade, embeddings para a busca, modelos de rostos e detecção do assunto; tags, legendas e críticas escritas vêm de um modelo opcional de visão e linguagem.**',
        ],
        items: [
          '**Notas de qualidade.** Os perfis 16gb e 24gb usam o TOPIQ para a nota estética, enquanto legacy e 8gb usam embeddings CLIP com uma cabeça estética; a documentação lista avaliadores complementares como o LIQE como disponíveis em qualquer perfil.',
          '**Busca.** Consultas como «pôr do sol na praia» são comparadas com embeddings: SigLIP 2 em 16gb e 24gb, OpenCLIP ViT-L-14 em legacy e 8gb.',
          '**Rostos.** O InsightFace detecta e reconhece rostos e um agrupamento os reúne em pessoas; os blendshapes opcionais do MediaPipe refinam a leitura de piscadas e sorrisos.',
          '**Assuntos.** O BiRefNet separa o assunto do fundo para julgar foco e enquadramento.',
          '**My Taste.** Suas comparações A/B, avaliações e decisões de seleção alimentam um otimizador de pesos e um ranking pessoal.',
          '**Modelo de visão e linguagem.** Tags, legendas e críticas rodam no mesmo processo nos perfis 16gb e 24gb, ou em um servidor remoto Ollama ou compatível com OpenAI definido em vlm_backend; nesse caso a imagem é enviada a esse servidor.',
        ],
        note:
          'São declarações do próprio projeto. A PromptQuorum não testou a qualidade da pontuação, a relevância da busca nem a precisão do agrupamento de rostos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**O README diz que tudo roda no seu computador, sem nuvem, contas nem chaves de API, e a documentação diz que uma varredura apenas lê suas fotos e grava os resultados no banco de dados do próprio Facet.** Os modelos são baixados no primeiro uso de fontes do Hugging Face, PyIQA e InsightFace para caches locais; a PromptQuorum não testou o funcionamento offline depois desse download.',
          'Solicitações externas encontradas na documentação e no código: uma verificação de atualizações que pergunta ao GitHub pela última versão a cada 7 dias, a menos que updates.enabled seja false; blocos de mapa que o navegador carrega do servidor de tiles do OpenStreetMap; uma janela de edição de GPS que cita o geocodificador Photon; e, somente se você configurar vlm_backend com Ollama ou um servidor compatível com OpenAI, as imagens que você enviar para lá. O script do visualizador escuta em todas as interfaces por padrão, e enquanto viewer.password estiver vazio, qualquer pessoa que alcance a porta pode navegar pela biblioteca e baixar os originais. O endpoint para assistentes MCP vem ativado por padrão; em uma instalação aberta ele oferece uma chave anônima somente de leitura, e viewer.mcp.enabled como false o desativa.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'São as declarações do projeto e a leitura que a PromptQuorum faz da documentação e do código. O tráfego de rede não foi inspecionado e o restante do código-fonte não foi auditado.',
          },
        ],
      },
      licensing: {
        id: 'model-licences',
        title: 'Licenças dos modelos',
        content: [
          '**O código do Facet é sob licença MIT, mas alguns modelos que ele baixa por padrão não têm licença para uso comercial.** A página de licenças do projeto lista o pyiqa (TOPIQ, LIQE e os demais avaliadores) como código PolyForm Noncommercial com pesos CC BY-NC-SA, e os pesos InsightFace buffalo_l como apenas para pesquisa não comercial. A API do GitHub não reconhece nenhuma licença para o repositório, então leia o próprio arquivo LICENSE.',
          'Com licensing.mode em commercial, o Facet se limita a modelos com licenças permissivas: componentes restritos nunca são importados nem baixados, e cada vaga é direcionada a um substituto, como YuNet e SFace para rostos. O script de instalação padrão e a imagem do Docker incluem os pacotes restritos, e uma instalação comercial não troca o modo por conta própria. A página afirma que é informação, não aconselhamento jurídico.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Se você pretende usar o Facet em um negócio, confira por conta própria a licença de cada modelo antes de confiar na configuração padrão.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Fotógrafos com bibliotecas grandes** que querem separar rajadas, piscadas e quase duplicatas antes de editar.',
          '**Quem faz auto-hospedagem** e quer uma galeria privada com busca em linguagem natural e agrupamento de rostos, e se sente à vontade com o Docker.',
          '**Usuários de Lightroom, darktable e digiKam** que querem receber pontuações e escolhas de volta como arquivos sidecar padrão.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade da IA.** Precisão da pontuação, agrupamento de rostos, relevância da busca e velocidade de varredura não foram testados; o próprio README chama a nota estética de aproximada.',
          '**Uso offline.** Não verificamos se o Facet funciona totalmente offline depois do primeiro download dos modelos.',
          '**Estabilidade das versões.** As notas da v1.23.1 dizem que a v1.23.0 saiu sem a imagem CUDA do Docker, e três versões foram lançadas entre 24 e 27 de outubro de 2026, então espere mudanças rápidas.',
          '**Suporte.** O README descreve um projeto de um único desenvolvedor, sem o suporte das ferramentas comerciais de seleção.',
          '**Etapas de instalação.** Os comandos de instalação vêm da documentação e a PromptQuorum não os executou.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório tem outras três ferramentas analisadas de bibliotecas de fotos e imagens no mesmo segmento.',
        ],
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Diferença principal',
        ],
        rows: [
          {
            App: '[Immich](/pt/power-local-llm/immich-review)',
            Plataformas: 'Servidor (Docker), iOS, Android, navegador',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal':
              'Backup do celular e busca; segundo o README do Facet, o Facet acrescenta pontuação de qualidade e seleção e pode sincronizar avaliações com o Immich',
          },
          {
            App: '[PhotoPrism](/pt/power-local-llm/photoprism-review)',
            Plataformas: 'Servidor (Docker), navegador',
            'Preço / licença': 'Community grátis / AGPL-3.0',
            'Diferença principal':
              'Biblioteca de fotos auto-hospedada com IA; o README do Facet a agrupa com o Immich como ferramenta de organização, busca e backup',
          },
          {
            App: '[PixlStash](/pt/power-local-llm/pixlstash-review)',
            Plataformas: 'App desktop para Windows, macOS, Linux, web',
            'Preço / licença': 'Grátis / GPL-3.0',
            'Diferença principal':
              'Biblioteca de imagens com marcação local, legendas e integração com ComfyUI, instalada como app desktop',
          },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada app na própria página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Facet precisa de GPU?',
            a:
              'Não. O perfil legacy executa pontuação, rostos, tags, seleção e galeria em CPU, só que mais devagar; TOPIQ, SigLIP 2 e as legendas integradas exigem os perfis NVIDIA 16gb ou 24gb, a menos que você aponte vlm_backend para um servidor remoto.',
          },
          {
            q: 'O Facet altera ou apaga minhas fotos?',
            a:
              'A documentação diz que uma varredura apenas as lê. Gravar avaliações e palavras-chave nos seus arquivos é uma ação opcional separada, e mover descartes para a lixeira só funciona se viewer.cull.allow_trash estiver ativado.',
          },
          {
            q: 'Posso usar o Facet pelo celular?',
            a:
              'Não há app nativo. A galeria é um app web responsivo e instalável, e a documentação descreve o PhotoSync ou qualquer app WebDAV enviando fotos para uma caixa de entrada monitorada.',
          },
          {
            q: 'Como uso o Facet comercialmente?',
            a:
              'Instale a versão comercial, defina licensing.mode como commercial e execute o comando doctor, que mostra a situação de licenças ativa; depois leia a página de licenças dos modelos.',
          },
          {
            q: 'Como mantenho a galeria privada?',
            a:
              'Defina viewer.password e coloque o visualizador atrás de um proxy reverso com HTTPS; a documentação de implantação traz exemplos com nginx e Caddy.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Facet é uma forma gratuita e ativamente atualizada de pontuar, selecionar e navegar uma grande biblioteca de fotos local, com agrupamento de rostos e busca em linguagem natural rodando no seu próprio computador. Em contrapartida, a instalação exige terminal e um grande download de modelos no primeiro uso, segundo a página de licenças do projeto parte dos pesos de modelo padrão não tem licença comercial, segundo a documentação o visualizador fica aberto até você definir uma senha, um recurso opcional pode enviar imagens a um servidor remoto e nenhuma das afirmações sobre a qualidade da IA pôde ser verificada aqui. Serve a fotógrafos e a quem faz auto-hospedagem e se sente à vontade com o Docker; quem quer um app de duplo clique ou um assistente LLM deve procurar em outro lugar.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Facet](https://ncoevoet.github.io/facet/) — visão geral dos recursos e início rápido, conferidos em 28 de outubro de 2026.',
          '[README do Facet](https://github.com/ncoevoet/facet/blob/master/README.md) — recursos, requisitos, licenças e comparações, conferidos em 28 de outubro de 2026.',
          '[Documentação do Facet](https://github.com/ncoevoet/facet/tree/master/docs) — instalação, configuração, implantação e páginas sobre agentes de IA, conferidas em 28 de outubro de 2026.',
          '[Modelos e licenças de terceiros](https://github.com/ncoevoet/facet/blob/master/docs/THIRD_PARTY_MODELS.md) — licença de cada modelo, conferida em 28 de outubro de 2026.',
          '[Facet no GitHub](https://github.com/ncoevoet/facet/releases) — versões e atividade de commits, conferidas em 28 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Immich](/pt/power-local-llm/immich-review) — uma biblioteca de fotos auto-hospedada com apps móveis e busca inteligente no servidor.',
          '[Análise do PhotoPrism](/pt/power-local-llm/photoprism-review) — outra biblioteca de fotos auto-hospedada com rótulos de IA integrados.',
          '[Análise do PixlStash](/pt/power-local-llm/pixlstash-review) — um gerenciador de bibliotecas de imagens com marcação local por IA.',
          '[Diretório de software de LLM locais](/pt/directory) — o catálogo completo de ferramentas de IA locais.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/facet-review-hero-ar.webp',
    title: 'مراجعة Facet: تقييم الصور وفرزها ومعرضها محليًا',
    seoTitle: 'مراجعة Facet: تقييم الصور وفرزها على جهازك',
    intro:
      'Facet أداة مجانية بترخيص MIT لتحليل الصور تشغّلها بنفسك: تقيّم كل صورة، وتكتشف اللقطات المتتابعة والصور شبه المكررة، وتجمّع الوجوه، وتتيح لك البحث في مكتبتك بلغة طبيعية عبر معرض ويب. وهي ليست تطبيق دردشة ولا تطبيق LLM؛ فالذكاء الاصطناعي فيها تقييم للصور وتمثيلات embeddings ونماذج للوجوه. تعكس هذه المراجعة ملف README والوثائق وإصدارات GitHub والشيفرة المصدرية كما اطّلعنا عليها في 28 أكتوبر 2026.',
    metaDescription:
      'مراجعة Facet: أداة مجانية بترخيص MIT تقيّم الصور وتفرزها وتتصفحها محليًا، مع تجميع الوجوه والبحث بلغة طبيعية. الإعداد وتراخيص النماذج والخصوصية.',
    twitterDescription:
      'مراجعة Facet: أداة مستضافة ذاتيًا لتقييم الصور وفرزها وتصفحها. إعداد عبر Docker أو برنامج نصي، وملفات تعريف لوحدة المعالجة المركزية والرسوميات، وأوزان نماذج افتراضية غير تجارية، ونموذج رؤية ولغة بعيد اختياري، وما لم نتمكن من التحقق منه.',
    audience:
      'المصورون ومن يستضيفون خدماتهم ذاتيًا ولديهم مكتبة صور محلية كبيرة، ويريدون معرفة جهد الإعداد وأين يعمل الذكاء الاصطناعي وما تسمح به تراخيص النماذج وما لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Facet',
    targetKeywords: [
      'مراجعة facet للصور',
      'برنامج فرز الصور بالذكاء الاصطناعي',
      'فرز الصور ذاتي الاستضافة',
      'تقييم الصور محليًا',
      'اللقطات المتتابعة والصور شبه المكررة',
      'facet ncoevoet github',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Facet (الإصدار v1.25.0 حتى 28 أكتوبر 2026) أداة مجانية بترخيص MIT تقيّم مكتبة صور محلية وتفرزها وتتصفحها عبر معرض ويب، مع تجميع الوجوه والبحث بلغة طبيعية على جهازك الخاص.** بحسب صفحة التراخيص في المشروع، بعض أوزان النماذج الافتراضية فيها غير مرخّصة للاستخدام التجاري. ولا تتضمن أي ميزة دردشة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي Facet صورك وتقييم الذكاء الاصطناعي على جهازك؟',
        answer:
          'بحسب ملف README، نعم: يقرأ الفحص صورك فقط، وتُحفظ النتائج في قاعدة بيانات Facet الخاصة، وتعمل النماذج على عتادك بعد تنزيل عند أول استخدام. وتخرج بعض الطلبات إلى الخارج، مثل فحص التحديثات وبلاطات الخريطة وخادم بعيد اختياري لنماذج الرؤية واللغة. لم تفحص PromptQuorum حركة الشبكة.',
        bullets: [
          'يقيّم كل صورة في 9 أبعاد، ويجمّع اللقطات المتتابعة والصور المتشابهة والوجوه، ويبرز أفضل الصور.',
          'يستخدم البحث بلغة طبيعية SigLIP 2 في ملفي GPU هما 16gb و24gb، ونموذج CLIP في legacy و8gb.',
          'يعمل على المعالج المركزي بملف legacy؛ وتتيح بطاقة NVIDIA أو جهاز Mac بمعالج Apple Silicon وذاكرة كبيرة أقوى النماذج.',
          'يُثبَّت عبر Docker أو برنامج تثبيت نصي؛ ولا يوجد مثبّت ولا نسخة في متجر تطبيقات ولا ملف تنفيذي ضمن الإصدارات.',
          'بحسب الوثائق، المعرض مفتوح لأي شخص يصل إلى منفذه إلى أن تضع كلمة مرور.',
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
        label: 'ما هو Facet؟',
        anchor: 'what-is-facet',
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
        label: 'كيف تبدأ',
        anchor: 'getting-started',
      },
      {
        label: 'الميزات الرئيسية',
        anchor: 'key-features',
      },
      {
        label: 'ميزات الذكاء الاصطناعي وأين تعمل',
        anchor: 'ai-features',
      },
      {
        label: 'تدفق البيانات والخصوصية',
        anchor: 'privacy',
      },
      {
        label: 'تراخيص النماذج',
        anchor: 'model-licences',
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
          {
            type: 'one-sentence',
            text:
              'Facet أداة مستضافة ذاتيًا تقيّم الصور وتختار أفضل لقطة من كل سلسلة وتجمّع الوجوه وتتيح البحث في مكتبة محلية بلغة طبيعية، كل ذلك عبر معرض في المتصفح.',
          },
          {
            type: 'plain-terms',
            text:
              'توجّه Facet إلى مجلد صور، فيحللها مرة واحدة على حاسوبك، ثم تتصفح النتائج وتفرزها وتبحث فيها من المتصفح.',
          },
        ],
        items: [
          'الصيانة: صدر v1.25.0 في 27 أكتوبر 2026 وتلقّى المستودع دفعة تحديثات في 28 أكتوبر 2026، فلا ينطبق تحذير المشروع المهجور.',
          'الجهة المشغّلة: يصفه ملف README بأنه مشروع لمطوّر واحد دون دعم تجاري؛ والشيفرة على GitHub بترخيص MIT.',
          'الإعداد: Docker Compose أو برنامج تثبيت نصي، مع فحص أول ينزّل النماذج؛ ويلزم استخدام الطرفية.',
          'التكلفة: مجاني؛ ولم نعثر على خطة مدفوعة. وكلمة «Edition» في الوثائق مستوى وصول وليست إصدارًا من المنتج.',
          'النطاق: تقييم الصور وفرزها والبحث فيها؛ أما الوسوم والأوصاف والنقد المكتوب فيتطلب نموذج رؤية ولغة اختياريًا.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'تستند هذه المراجعة إلى موقع المشروع وملف README والوثائق وإصدارات GitHub وأجزاء من الشيفرة المصدرية، كما اطّلعنا عليها في 28 أكتوبر 2026. لم تثبّت PromptQuorum أداة Facet، ولذلك لا نقيّم دقة التقييم ولا ملاءمة نتائج البحث ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-facet',
        title: 'ما هو Facet؟',
        content: [
          '**Facet محرّك محلي لتحليل الصور وفرزها مع معرض ويب: يقيّم كل صورة، ثم تتصفح النتائج وتفرزها وتنظّمها.** يقول ملف README إن كل شيء يعمل على جهازك دون سحابة أو حسابات أو مفاتيح API، والشيفرة بترخيص MIT.',
          'يذكر ملف LICENSE اسم Nicolas Coevoet بوصفه صاحب حقوق التأليف. ويتوزع العمل على أداتين: ماسح يُشغَّل من سطر الأوامر، وعارض يقدّم المعرض في متصفحك.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Facet من مستودع شيفرته المصدرية عبر Docker أو برنامج تثبيت نصي؛ ولا ينشر المشروع مثبّتًا ولا صفحة في متجر تطبيقات ولا ملفًا تنفيذيًا ضمن الإصدارات.**',
        ],
        columns: [
          'الخيار',
          'مصدر الحصول عليه',
        ],
        rows: [
          {
            'الخيار': 'Docker (موصى به)',
            'مصدر الحصول عليه':
              '[دليل التثبيت](https://github.com/ncoevoet/facet/blob/master/docs/INSTALLATION.md): استنساخ، تحديد مجلد الصور، ثم docker compose up',
          },
          {
            'الخيار': 'بدون Docker',
            'مصدر الحصول عليه': 'استنساخ ثم تشغيل bash install.sh ثم python facet.py وpython viewer.py (Linux وmacOS)',
          },
          {
            'الخيار': 'الوثائق',
            'مصدر الحصول عليه': '[مجلد docs](https://github.com/ncoevoet/facet/tree/master/docs) في المستودع',
          },
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[ncoevoet.github.io/facet](https://ncoevoet.github.io/facet/)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[github.com/ncoevoet/facet](https://github.com/ncoevoet/facet) (MIT)',
          },
          {
            'الخيار': 'الإصدارات',
            'مصدر الحصول عليه': '[إصدارات GitHub](https://github.com/ncoevoet/facet/releases)، ملاحظات فقط',
          },
        ],
        note:
          'الإصدار الذي راجعناه: v1.25.0، نُشر في 27 أكتوبر 2026 بحسب إصدار GitHub؛ وكان آخر دفع إلى المستودع في 28 أكتوبر 2026. يتطلب التثبيت طرفية وGit وDocker أو Python، فهو إعداد بأسلوب المطوّرين وليس تثبيتًا بنقرتين. لم نعثر على صفحة سياسة خصوصية مستقلة في موقع المشروع ولا في الوثائق التي قرأناها؛ وتصريحات الخصوصية موجودة في ملف README.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**تقول الوثائق إن Facet يعمل على أي جهاز بمعالج مركزي، وإن بطاقة NVIDIA أو جهاز Mac بمعالج Apple Silicon وذاكرة كبيرة يتيح أقوى نماذجه.**',
        ],
        columns: [
          'البند',
          'ما تقوله المصادر',
        ],
        rows: [
          {
            'البند': 'الملفات الشخصية',
            'ما تقوله المصادر': 'legacy: معالج مركزي فقط؛ 8gb: NVIDIA ‏6-14 GB؛ 16gb: NVIDIA ‏14-20 GB؛ 24gb: NVIDIA ‏20 GB فأكثر',
          },
          {
            'البند': 'التنزيل عند أول تشغيل',
            'ما تقوله المصادر': 'مرة واحدة بحسب الوثائق: نحو 4.7 GB (legacy) أو 6.9 GB (8gb) أو 14.6 GB (16gb) أو 19.1 GB (24gb)',
          },
          {
            'البند': 'Apple Silicon',
            'ما تقوله المصادر':
              'يستخدم واجهة Metal لنماذج Torch؛ ويُحدَّد الملف auto بحسب الذاكرة الموحدة الكلية، وتصل 32 GB إلى 16gb',
          },
          {
            'البند': 'الذاكرة',
            'ما تقوله المصادر':
              'لا تذكر الوثائق حدًا أدنى لذاكرة RAM؛ وتحذّر من أن حاوية ذات حد للذاكرة قد تُغلق أثناء الفحص مع الملفات الكبيرة',
          },
          {
            'البند': 'البرمجيات',
            'ما تقوله المصادر': 'Docker، أو Python 3.12 (يعمل 3.10 فأعلى) وNode.js 20 فأعلى لبناء المعرض عند التثبيت اليدوي',
          },
          {
            'البند': 'نظام التشغيل',
            'ما تقوله المصادر': 'Windows أو macOS أو Linux؛ وفي Windows تحيل الوثائق إلى Docker، وإلى WSL2 مع بطاقة NVIDIA',
          },
          {
            'البند': 'صيغ الصور',
            'ما تقوله المصادر': 'JPEG وHEIC و10 صيغ RAW وPNG وWebP وTIFF وAVIF وJPEG XL وغيرها',
          },
        ],
        note: 'هذه الأرقام من وثائق المشروع؛ ولم تقِس PromptQuorum زمن الفحص ولا استهلاك الذاكرة على أي عتاد.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات وثائق المشروع؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'احصل على الشيفرة وحدّد المجلد',
            whyItMatters: 'استنسخ المستودع وانسخ .env.example إلى .env واضبط PHOTOS_DIR على مجلد صورك.',
          },
          {
            title: 'شغّل Facet',
            whyItMatters:
              'نفّذ docker compose up -d؛ ومع بطاقة NVIDIA أضف ملف compose المناسب لحجمها، أو استخدم برنامج التثبيت النصي دون Docker.',
          },
          {
            title: 'افحص وانتظر التنزيلات',
            whyItMatters: 'ينزّل الفحص الأول نماذج ملفك الشخصي وينشئ قاعدة البيانات ويقيّم الصور؛ ويمكنك التصفح أثناء ذلك.',
          },
          {
            title: 'افتح المعرض وضع كلمة مرور',
            whyItMatters:
              'افتح العارض في المتصفح وسجّل الدخول بكلمة مرور التحرير التي تعرضها صورة Docker مرة واحدة، ثم ضع كلمة مرور للعارض قبل مشاركة المنفذ.',
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
          '**التقييم.** تسعة أبعاد لكل صورة، منها الجودة الجمالية والتكوين وجودة الوجوه وحدّة العينين والتعريض، موزونة بحسب فئة المحتوى (أكثر من 30 فئة).',
          '**الفرز.** مجموعات للقطات المتتابعة والصور المتشابهة والمشاهد، وعلامات للرمشات، وكشف الصور شبه المكررة، وفرز تلقائي بمعاينة تجريبية؛ وتبقى سلاسل التعريض والبانوراما كاملة.',
          '**التصفح.** عرض فسيفسائي وشبكي، ومرشحات، وخط زمني، وخريطة، وألبومات منها ألبومات ذكية، وعروض شرائح موضوعية، وذكريات «في مثل هذا اليوم».',
          '**التنظيم.** أشخاص بأسماء مع اقتراحات للدمج، وتقييمات بالنجوم، ووسوم، وإجراءات جماعية مع تراجع سريع.',
          '**المشاركة والربط.** روابط ألبومات مع وضع مراجعة العملاء، وملفات XMP جانبية لـ Lightroom وdarktable وdigiKam، وصندوق وارد WebDAV لرفع الصور من الهاتف، ومزامنة التقييمات مع Immich.',
        ],
        note:
          'يقول ملف README إن Facet يقيّم ويرتّب ويفرز لكنه لا يحرّر ملفات RAW، وإن الدرجة الجمالية قائمة على نموذج وتقريبية.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'ميزات الذكاء الاصطناعي وأين تعمل',
        content: [
          '**الذكاء الاصطناعي الأساسي قائم على الصور: نماذج لتقييم الجودة، وتمثيلات embeddings للبحث، ونماذج للوجوه، وكشف للموضوع؛ أما الوسوم والأوصاف والنقد المكتوب فتأتي من نموذج رؤية ولغة اختياري.**',
        ],
        items: [
          '**درجات الجودة.** يستخدم الملفان 16gb و24gb نموذج TOPIQ للدرجة الجمالية، بينما يستخدم legacy و8gb تمثيلات CLIP مع رأس جمالي؛ وتدرج الوثائق مقيّمات إضافية مثل LIQE بوصفها متاحة في أي ملف.',
          '**البحث.** تُطابَق استعلامات مثل «غروب الشمس على الشاطئ» مع التمثيلات: SigLIP 2 في 16gb و24gb، وOpenCLIP ViT-L-14 في legacy و8gb.',
          '**الوجوه.** يكتشف InsightFace الوجوه ويتعرف عليها ويجمّعها التجميع في أشخاص؛ وتحسّن blendshapes الاختيارية من MediaPipe قراءة الرمش والابتسامة.',
          '**الموضوعات.** يفصل BiRefNet الموضوع عن الخلفية للحكم على البؤرة والتأطير.',
          '**My Taste.** تغذّي مقارناتك A/B وتقييماتك وقراراتك في الفرز محسّن أوزان وترتيبًا شخصيًا.',
          '**نموذج الرؤية واللغة.** تعمل الوسوم والأوصاف والنقد داخل العملية نفسها في الملفين 16gb و24gb، أو على خادم Ollama أو خادم متوافق مع OpenAI بعيد يحدده vlm_backend؛ وعندها تُرسل الصورة إلى ذلك الخادم.',
        ],
        note:
          'هذه تصريحات المشروع نفسه. لم تختبر PromptQuorum جودة الدرجات ولا ملاءمة نتائج البحث ولا دقة تجميع الوجوه.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**يقول ملف README إن كل شيء يعمل على جهازك دون سحابة أو حسابات أو مفاتيح API، وتقول الوثائق إن الفحص يقرأ صورك فقط ويكتب النتائج في قاعدة بيانات Facet الخاصة.** تُنزَّل النماذج عند أول استخدام من مصادر Hugging Face وPyIQA وInsightFace إلى ذاكرات تخزين مؤقت محلية؛ ولم تختبر PromptQuorum العمل دون اتصال بعد ذلك التنزيل.',
          'الطلبات الخارجية التي وجدناها في الوثائق والشيفرة: فحص للتحديثات يسأل GitHub عن أحدث إصدار كل 7 أيام ما لم تكن updates.enabled تساوي false؛ وبلاطات خريطة يحمّلها المتصفح من خادم البلاطات لدى OpenStreetMap؛ ونافذة تحرير GPS تشير إلى مُرمِّز الجغرافيا Photon؛ وكذلك الصور التي ترسلها، فقط إذا ضبطت vlm_backend على Ollama أو خادم متوافق مع OpenAI. ويستمع نص العارض إلى كل الواجهات افتراضيًا، وما دامت viewer.password فارغة يمكن لأي شخص يصل إلى المنفذ تصفح المكتبة وتنزيل النسخ الأصلية. ونقطة النهاية لمساعدي MCP مفعّلة افتراضيًا؛ وفي التثبيت المفتوح تقدّم مفتاحًا مجهولًا للقراءة فقط، ويؤدي ضبط viewer.mcp.enabled على false إلى تعطيلها.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'هذه تصريحات المشروع وقراءة PromptQuorum لوثائقه وشيفرته. لم نفحص حركة الشبكة ولم ندقق بقية الشيفرة المصدرية.',
          },
        ],
      },
      licensing: {
        id: 'model-licences',
        title: 'تراخيص النماذج',
        content: [
          '**شيفرة Facet نفسها بترخيص MIT، لكن بعض النماذج التي ينزّلها افتراضيًا غير مرخّصة للاستخدام التجاري.** تدرج صفحة التراخيص في المشروع pyiqa (TOPIQ وLIQE وبقية المقيّمات) بوصفها شيفرة PolyForm Noncommercial بأوزان CC BY-NC-SA، وأوزان InsightFace buffalo_l بوصفها للبحث غير التجاري فقط. ولا تتعرف واجهة GitHub البرمجية على أي ترخيص للمستودع، فاقرأ ملف LICENSE نفسه.',
          'عند ضبط licensing.mode على commercial يقتصر Facet على النماذج ذات التراخيص المتساهلة: لا تُستورد المكونات المقيّدة ولا تُنزَّل أبدًا، ويُوجَّه كل موضع إلى بديل مثل YuNet وSFace للوجوه. ويتضمن برنامج التثبيت النصي القياسي وصورة Docker الحزم المقيّدة، ولا يبدّل التثبيت التجاري الوضع من تلقاء نفسه. وتذكر الصفحة أنها معلومات وليست استشارة قانونية.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'إذا كنت تنوي استخدام Facet في عمل تجاري، فتحقق بنفسك من ترخيص كل نموذج قبل الاعتماد على الإعداد الافتراضي.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المصورون أصحاب المكتبات الكبيرة** الذين يريدون فرز اللقطات المتتابعة والرمشات والصور شبه المكررة قبل التحرير.',
          '**من يستضيفون خدماتهم ذاتيًا** ويريدون معرضًا خاصًا مع بحث بلغة طبيعية وتجميع للوجوه، ويرتاحون إلى Docker.',
          '**مستخدمو Lightroom وdarktable وdigiKam** الذين يريدون إعادة الدرجات والاختيارات كملفات جانبية قياسية.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الذكاء الاصطناعي.** لم تُختبر دقة التقييم ولا تجميع الوجوه ولا ملاءمة البحث ولا سرعة الفحص؛ وملف README نفسه يصف الدرجة الجمالية بأنها تقريبية.',
          '**الاستخدام دون اتصال.** لم نتحقق مما إذا كان Facet يعمل دون اتصال بالكامل بعد أول تنزيل للنماذج.',
          '**استقرار الإصدارات.** تقول ملاحظات v1.23.1 إن v1.23.0 صدر دون صورة Docker الخاصة بـ CUDA، وصدرت ثلاثة إصدارات بين 24 و27 أكتوبر 2026، فتوقّع تغيرات سريعة.',
          '**الدعم.** يصف ملف README مشروعًا لمطوّر واحد دون دعم الأدوات التجارية للفرز.',
          '**خطوات التثبيت.** أوامر الإعداد مأخوذة من الوثائق ولم تنفّذها PromptQuorum.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'يضم الدليل ثلاث أدوات أخرى مراجَعة لمكتبات الصور في الشريحة نفسها.',
        ],
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الرخصة',
          'الفرق الأبرز',
        ],
        rows: [
          {
            'التطبيق': '[Immich](/ar/power-local-llm/immich-review)',
            'المنصات': 'خادم (Docker)، iOS، Android، متصفح',
            'السعر / الرخصة': 'مجاني / AGPL-3.0',
            'الفرق الأبرز':
              'نسخ احتياطي من الهاتف وبحث؛ وبحسب README الخاص بـ Facet يضيف Facet تقييم الجودة والفرز ويمكنه مزامنة التقييمات مع Immich',
          },
          {
            'التطبيق': '[PhotoPrism](/ar/power-local-llm/photoprism-review)',
            'المنصات': 'خادم (Docker)، متصفح',
            'السعر / الرخصة': 'Community مجاني / AGPL-3.0',
            'الفرق الأبرز':
              'مكتبة صور ذاتية الاستضافة بالذكاء الاصطناعي؛ ويصنّفها README الخاص بـ Facet مع Immich ضمن أدوات التنظيم والبحث والنسخ الاحتياطي',
          },
          {
            'التطبيق': '[PixlStash](/ar/power-local-llm/pixlstash-review)',
            'المنصات': 'تطبيق سطح مكتب لـ Windows وmacOS وLinux، وويب',
            'السعر / الرخصة': 'مجاني / GPL-3.0',
            'الفرق الأبرز': 'مكتبة صور بوسم محلي وأوصاف وتكامل مع ComfyUI، تُثبَّت كتطبيق سطح مكتب',
          },
        ],
        note: 'تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحتاج Facet إلى بطاقة رسوميات؟',
            a:
              'لا. يشغّل ملف legacy التقييم والوجوه والوسوم والفرز والمعرض على معالج مركزي، لكن ببطء أكبر؛ أما TOPIQ وSigLIP 2 والأوصاف المدمجة فتتطلب ملفي NVIDIA هما 16gb أو 24gb، إلا إذا وجّهت vlm_backend إلى خادم بعيد.',
          },
          {
            q: 'هل يغيّر Facet صوري أو يحذفها؟',
            a:
              'تقول الوثائق إن الفحص يقرأها فقط. أما كتابة التقييمات والكلمات المفتاحية في ملفاتك فإجراء اختياري منفصل، ولا يعمل نقل المرفوضات إلى سلة المحذوفات إلا إذا كانت viewer.cull.allow_trash مفعّلة.',
          },
          {
            q: 'هل يمكنني استخدام Facet من هاتفي؟',
            a:
              'لا يوجد تطبيق أصلي. المعرض تطبيق ويب متجاوب وقابل للتثبيت، وتصف الوثائق رفع الصور عبر PhotoSync أو أي تطبيق WebDAV إلى صندوق وارد مراقَب.',
          },
          {
            q: 'كيف أستخدم Facet تجاريًا؟',
            a:
              'ثبّت النسخة التجارية واضبط licensing.mode على commercial ثم شغّل أمر doctor الذي يعرض وضع التراخيص الفعّال، ثم اقرأ صفحة تراخيص النماذج.',
          },
          {
            q: 'كيف أُبقي المعرض خاصًا؟',
            a: 'ضع viewer.password وضع العارض خلف وكيل عكسي مع HTTPS؛ وتتضمن وثائق النشر أمثلة لـ nginx وCaddy.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Facet وسيلة مجانية ومحدَّثة بنشاط لتقييم مكتبة صور محلية كبيرة وفرزها وتصفحها، مع تجميع للوجوه وبحث بلغة طبيعية يعملان على جهازك. في المقابل، يتطلب الإعداد طرفية وتنزيلًا كبيرًا للنماذج عند أول تشغيل، وبحسب صفحة التراخيص في المشروع بعض أوزان النماذج الافتراضية غير مرخّصة للاستخدام التجاري، وبحسب الوثائق العارض مفتوح إلى أن تضع كلمة مرور، وميزة اختيارية واحدة قد ترسل الصور إلى خادم بعيد، ولم نستطع هنا التحقق من أي ادعاء بشأن جودة الذكاء الاصطناعي. يناسب المصورين ومن يستضيفون خدماتهم ذاتيًا ويرتاحون إلى Docker؛ ومن يريد تطبيقًا بنقرتين أو مساعد LLM فعليه أن يبحث في مكان آخر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Facet](https://ncoevoet.github.io/facet/) — نظرة عامة على الميزات والبدء السريع، اطّلعنا عليه في 28 أكتوبر 2026.',
          '[ملف README لـ Facet](https://github.com/ncoevoet/facet/blob/master/README.md) — الميزات والمتطلبات والتراخيص والمقارنات، اطّلعنا عليه في 28 أكتوبر 2026.',
          '[وثائق Facet](https://github.com/ncoevoet/facet/tree/master/docs) — التثبيت والإعداد والنشر وصفحات وكلاء الذكاء الاصطناعي، اطّلعنا عليها في 28 أكتوبر 2026.',
          '[النماذج والتراخيص من جهات خارجية](https://github.com/ncoevoet/facet/blob/master/docs/THIRD_PARTY_MODELS.md) — ترخيص كل نموذج، اطّلعنا عليه في 28 أكتوبر 2026.',
          '[Facet على GitHub](https://github.com/ncoevoet/facet/releases) — الإصدارات ونشاط الإيداعات، اطّلعنا عليهما في 28 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Immich](/ar/power-local-llm/immich-review) — مكتبة صور ذاتية الاستضافة مع تطبيقات للهاتف وبحث ذكي على الخادم.',
          '[مراجعة PhotoPrism](/ar/power-local-llm/photoprism-review) — مكتبة صور أخرى ذاتية الاستضافة مع وسوم ذكاء اصطناعي مدمجة.',
          '[مراجعة PixlStash](/ar/power-local-llm/pixlstash-review) — مدير مكتبات صور بوسم محلي بالذكاء الاصطناعي.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/facet-review-hero-zh.webp',
    title: 'Facet 评测：本地照片评分、筛选与图库',
    seoTitle: 'Facet 评测：在自己的电脑上为照片评分、筛选和浏览的免费工具',
    intro:
      'Facet 是一款免费、采用 MIT 许可证、由你自己运行的照片分析工具：它为每张照片评分，找出连拍和近似重复的照片，对人脸分组，并让你通过网页图库用自然语言搜索照片库。它不是聊天或 LLM 应用；其中的 AI 是图像评分、嵌入向量和人脸模型。本评测依据 2026 年 10 月 28 日查看的 README、文档、GitHub 发布版本和源代码。',
    metaDescription: 'Facet 评测：免费的 MIT 许可证工具，可在本地为照片评分、筛选和浏览，支持人脸分组与自然语言搜索。涵盖安装方式、模型许可证、隐私以及我们未能核实的内容。',
    twitterDescription: 'Facet 评测：一款自托管的照片评分、筛选与图库工具。通过 Docker 或脚本安装，提供 CPU 与 GPU 配置档，默认模型权重不可商用，可选远程视觉语言模型，以及我们未能核实的内容。',
    audience: '拥有大型本地照片库的摄影师和自托管用户，想了解安装难度、AI 在哪里运行、模型许可证允许什么，以及哪些内容来源并未证实。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Facet 评测',
    targetKeywords: [
      'facet 照片 评测',
      'ai 照片筛选 软件',
      '自托管 照片筛选',
      '本地 照片评分',
      '连拍 近似重复 照片',
      'facet ncoevoet github',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Facet（截至 2026 年 10 月 28 日为 v1.25.0）是一款免费、采用 MIT 许可证的工具，通过网页图库为本地照片库评分、筛选和浏览，人脸分组与自然语言搜索都在你自己的机器上运行。**据项目的模型许可证页面，其默认模型权重中有一部分未获商业使用许可。它没有聊天功能。',
    quickAnswerTop: {
      zh: {
        question: 'Facet 会把照片和 AI 评分留在你自己的机器上吗？',
        answer:
          '据其 README，会：扫描只读取照片，结果写入 Facet 自己的数据库，模型在首次下载后于你的硬件上运行。也有一些内容会连到外部，例如更新检查、地图瓦片和可选的远程视觉语言服务器。PromptQuorum 没有检查网络流量。',
        bullets: [
          '从 9 个维度为每张照片评分，对连拍、相似照片和人脸分组，并列出精选照片。',
          '自然语言搜索在 16gb 和 24gb 的 GPU 配置档上使用 SigLIP 2，在 legacy 和 8gb 上使用 CLIP 模型。',
          '用 legacy 配置档可在 CPU 上运行；NVIDIA 显卡或大内存的 Apple Silicon Mac 可启用最强的模型。',
          '通过 Docker 或安装脚本安装；没有安装程序、应用商店版本或发布的二进制文件。',
          '据其文档，在你设置密码之前，任何能访问其端口的人都可以打开查看器。',
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
        label: 'Facet 是什么？',
        anchor: 'what-is-facet',
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
        label: '上手步骤',
        anchor: 'getting-started',
      },
      {
        label: '主要功能',
        anchor: 'key-features',
      },
      {
        label: 'AI 功能及运行位置',
        anchor: 'ai-features',
      },
      {
        label: '数据流向与隐私',
        anchor: 'privacy',
      },
      {
        label: '模型许可证',
        anchor: 'model-licences',
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
          {
            type: 'one-sentence',
            text: 'Facet 是一款自托管工具，可为照片评分、挑出每组连拍中最好的一张、对人脸分组，并让你用自然语言搜索本地照片库，全部通过浏览器图库完成。',
          },
          {
            type: 'plain-terms',
            text: '你把 Facet 指向一个照片文件夹，它在你的电脑上分析一次，之后你就可以在浏览器里浏览、筛选和搜索结果。',
          },
        ],
        items: [
          '维护情况：v1.25.0 于 2026 年 10 月 27 日发布，仓库在 2026 年 10 月 28 日有过推送，因此不适用停更项目警告。',
          '运营方：README 称其为没有商业支持的单人开发项目；代码在 GitHub 上，采用 MIT 许可证。',
          '安装：使用 Docker Compose 或安装脚本，并进行一次下载模型的首次扫描；需要终端。',
          '费用：免费；未发现付费套餐。文档中的“Edition”是访问级别，不是产品版本。',
          '范围：图像评分、筛选和搜索；文字形式的标签、说明和点评需要可选的视觉语言模型。',
        ],
        callouts: [
          {
            type: 'note',
            text:
              '本评测依据 2026 年 10 月 28 日查看的项目网站、README、文档、GitHub 发布版本以及部分源代码。PromptQuorum 没有安装 Facet，因此不评估评分准确度、搜索相关性和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-facet',
        title: 'Facet 是什么？',
        content: [
          '**Facet 是一个带网页图库的本地照片分析与筛选引擎：它先为每张图片评分，然后让你浏览、筛选并整理结果。**README 称一切都在你的机器上运行，无需云、账号或 API 密钥，代码采用 MIT 许可证。',
          'LICENSE 文件把 Nicolas Coevoet 列为版权持有人。工作由两个工具分担：一个从命令行启动的扫描器，以及一个在浏览器中提供图库的查看器。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Facet 通过 Docker 或安装脚本，从源代码仓库安装；项目没有发布安装程序、应用商店页面或发布的二进制文件。**',
        ],
        columns: [
          '选项',
          '获取方式',
        ],
        rows: [
          {
            '选项': 'Docker（推荐）',
            '获取方式':
              '[安装指南](https://github.com/ncoevoet/facet/blob/master/docs/INSTALLATION.md)：克隆、设置照片文件夹、docker compose up',
          },
          {
            '选项': '不使用 Docker',
            '获取方式': '克隆后运行 bash install.sh，再运行 python facet.py 和 python viewer.py（Linux、macOS）',
          },
          {
            '选项': '文档',
            '获取方式': '仓库中的[docs 文件夹](https://github.com/ncoevoet/facet/tree/master/docs)',
          },
          {
            '选项': '官网',
            '获取方式': '[ncoevoet.github.io/facet](https://ncoevoet.github.io/facet/)',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/ncoevoet/facet](https://github.com/ncoevoet/facet)（MIT）',
          },
          {
            '选项': '发布',
            '获取方式': '[GitHub 发布页](https://github.com/ncoevoet/facet/releases)，仅有发布说明',
          },
        ],
        note:
          '评测的版本：v1.25.0，据 GitHub 发布页于 2026 年 10 月 27 日发布；仓库最近一次推送在 2026 年 10 月 28 日。安装需要终端、Git 以及 Docker 或 Python，属于开发者式的部署，而不是双击安装。在项目网站和我们读过的文档中，没有找到独立的隐私政策页面；隐私相关说明在 README 中。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**文档称 Facet 可在任何带 CPU 的机器上运行，NVIDIA 显卡或大内存的 Apple Silicon Mac 则可启用其最强的模型。**',
        ],
        columns: [
          '项目',
          '来源说明',
        ],
        rows: [
          {
            '项目': '配置档',
            '来源说明': 'legacy：仅 CPU；8gb：NVIDIA 6-14 GB；16gb：NVIDIA 14-20 GB；24gb：NVIDIA 20 GB 及以上',
          },
          {
            '项目': '首次下载',
            '来源说明': '据文档只需一次：legacy 约 4.7 GB，8gb 约 6.9 GB，16gb 约 14.6 GB，24gb 约 19.1 GB',
          },
          {
            '项目': 'Apple Silicon',
            '来源说明': 'Torch 模型使用 Metal 后端；auto 配置档按统一内存总量确定，32 GB 可达 16gb',
          },
          {
            '项目': '内存',
            '来源说明': '文档没有给出最低 RAM；并警告在较大配置档下，限制了内存的容器可能在扫描中途被终止',
          },
          {
            '项目': '软件',
            '来源说明': 'Docker；手动安装则需要 Python 3.12（3.10 及以上可用），构建图库另需 Node.js 20 及以上',
          },
          {
            '项目': '操作系统',
            '来源说明': 'Windows、macOS 或 Linux；在 Windows 上文档推荐 Docker，使用 NVIDIA 显卡则推荐 WSL2',
          },
          {
            '项目': '照片格式',
            '来源说明': '包括 JPEG、HEIC、10 种 RAW 格式、PNG、WebP、TIFF、AVIF 和 JPEG XL 等',
          },
        ],
        note: '这些数据来自项目文档；PromptQuorum 没有在任何硬件上测量扫描耗时或内存占用。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目文档编写；PromptQuorum 没有执行过。**',
        ],
        numberedItems: [
          {
            title: '获取代码并设置文件夹',
            whyItMatters: '克隆仓库，把 .env.example 复制为 .env，并把 PHOTOS_DIR 设为你的照片文件夹。',
          },
          {
            title: '启动 Facet',
            whyItMatters: '运行 docker compose up -d；如有 NVIDIA 显卡，再加上对应显存大小的 compose 文件，或不用 Docker 而运行安装脚本。',
          },
          {
            title: '扫描并等待下载',
            whyItMatters: '首次扫描会下载你所选配置档的模型、创建数据库并给照片评分；处理期间你可以先浏览。',
          },
          {
            title: '打开图库并设置密码',
            whyItMatters: '在浏览器中打开查看器，用 Docker 镜像只显示一次的 edition 密码登录，并在共享端口之前设置查看器密码。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '主要功能',
        content: [
          '**以下每一项都来自项目的 README 或文档；PromptQuorum 均未测试。**',
        ],
        items: [
          '**评分。**每张照片有九个维度，包括美学质量、构图、人脸质量、眼睛锐度和曝光，并按内容类别（30 多个类别）加权。',
          '**筛选。**连拍、相似照片和场景分组，闭眼标记，近似重复检测，以及带试运行预览的自动筛选；包围曝光和全景系列会保持完整。',
          '**浏览。**马赛克和网格视图、筛选器、时间线、地图、包括智能相册在内的相册、主题幻灯片，以及“往年今日”回忆。',
          '**整理。**命名的人物及合并建议、星级评分、标签，以及可快速撤销的批量操作。',
          '**共享与连接。**带客户确认模式的相册链接、面向 Lightroom、darktable 和 digiKam 的 XMP 附属文件、用于手机上传的 WebDAV 收件箱，以及与 Immich 的评分同步。',
        ],
        note: 'README 称 Facet 负责评分、排序和筛选，不编辑 RAW 文件，且美学评分基于模型、只是近似值。',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 功能及运行位置',
        content: [
          '**核心 AI 面向图像：质量评分模型、用于搜索的嵌入向量、人脸模型和主体检测；文字形式的标签、说明和点评则来自可选的视觉语言模型。**',
        ],
        items: [
          '**质量评分。**16gb 和 24gb 配置档用 TOPIQ 计算美学分，legacy 和 8gb 则使用带美学头的 CLIP 嵌入；文档称 LIQE 等补充评分器可在任何配置档上使用。',
          '**搜索。**像“海滩上的日落”这样的输入会与嵌入向量匹配：16gb 和 24gb 用 SigLIP 2，legacy 和 8gb 用 OpenCLIP ViT-L-14。',
          '**人脸。**InsightFace 检测并识别人脸，再由聚类归为人物；可选的 MediaPipe blendshapes 能提高闭眼和微笑的判断。',
          '**主体。**BiRefNet 区分主体与背景，用来判断对焦和取景。',
          '**My Taste。**你的 A/B 对比、评分和筛选决定会输入权重优化器和个人排序。',
          '**视觉语言模型。**标签、说明和点评在 16gb 和 24gb 配置档上于同一进程内运行，也可由 vlm_backend 指定远程 Ollama 或兼容 OpenAI 的服务器运行；此时图像会发送到该服务器。',
        ],
        note: '以上是项目自己的说法。PromptQuorum 没有测试评分质量、搜索相关性或人脸分组的准确度。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**README 称一切都在你的机器上运行，无需云、账号或 API 密钥；文档称扫描只读取照片，并把结果写入 Facet 自己的数据库。**模型在首次使用时从 Hugging Face、PyIQA 和 InsightFace 的来源下载到本地缓存；PromptQuorum 没有测试下载之后能否离线运行。',
          '我们在文档和源代码中发现的对外请求有：除非 updates.enabled 为 false，否则每 7 天向 GitHub 询问最新发布版本的更新检查；浏览器从 OpenStreetMap 瓦片服务器加载的地图瓦片；提到地理编码器 Photon 的 GPS 编辑对话框；以及仅在你把 vlm_backend 设为 Ollama 或兼容 OpenAI 的服务器时，你发送到那里的图像。查看器脚本默认监听所有网络接口，在 viewer.password 为空期间，任何能访问该端口的人都可以浏览照片库并下载原图。面向 MCP 助手的端点默认开启；在未设密码的安装上，它提供只读的匿名密钥，把 viewer.mcp.enabled 设为 false 即可关闭。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是项目的说法，以及 PromptQuorum 对其文档和源代码的解读。我们没有检查网络流量，也没有审计其余源代码。',
          },
        ],
      },
      licensing: {
        id: 'model-licences',
        title: '模型许可证',
        content: [
          '**Facet 自身的代码采用 MIT 许可证，但它默认下载的部分模型未获商业使用许可。**项目的模型许可证页面把 pyiqa（TOPIQ、LIQE 等评分器）列为采用 PolyForm Noncommercial 的代码、权重为 CC BY-NC-SA，并把 InsightFace buffalo_l 的权重列为仅限非商业研究。GitHub 的 API 没有识别出该仓库的许可证，所以请直接阅读 LICENSE 文件。',
          '把 licensing.mode 设为 commercial 后，Facet 只使用宽松许可的模型：受限组件永远不会被导入或下载，每个环节都会改用替代模型，例如人脸使用 YuNet 和 SFace。标准安装脚本和 Docker 镜像包含受限软件包，商业安装本身不会自动切换模式。该页面说明它只是信息，不构成法律建议。',
        ],
        callouts: [
          {
            type: 'note',
            text: '如果你打算在业务中使用 Facet，请在依赖默认设置之前，自行核对每个模型的许可证。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**拥有大型照片库的摄影师**，想在后期之前先整理连拍、闭眼和近似重复的照片。',
          '**自托管用户**，想要带自然语言搜索和人脸分组的私有图库，并且熟悉 Docker。',
          '**Lightroom、darktable 和 digiKam 用户**，希望评分和精选结果以标准附属文件的形式写回。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**AI 质量。**评分准确度、人脸分组、搜索相关性和扫描速度均未测试；README 本身也称美学评分是近似值。',
          '**离线使用。**首次下载模型之后 Facet 能否完全离线运行，我们没有核实。',
          '**发布稳定性。**v1.23.1 的发布说明称 v1.23.0 发布时缺少 CUDA 版 Docker 镜像，并且在 2026 年 10 月 24 日至 27 日之间发布了三个版本，因此请预期变化很快。',
          '**支持。**README 称这是没有商业筛选工具那样支持的单人开发项目。',
          '**安装步骤。**设置命令来自文档，PromptQuorum 没有运行过。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        content: [
          '目录中还有三款同一领域、已评测的照片与图像库工具。',
        ],
        columns: [
          '应用',
          '平台',
          '价格 / 许可证',
          '主要区别',
        ],
        rows: [
          {
            '应用': '[Immich](/zh/power-local-llm/immich-review)',
            '平台': '服务器（Docker）、iOS、Android、浏览器',
            '价格 / 许可证': '免费 / AGPL-3.0',
            '主要区别': '手机备份与搜索；据 Facet 的 README，Facet 增加了质量评分和筛选，并可与 Immich 同步评分',
          },
          {
            '应用': '[PhotoPrism](/zh/power-local-llm/photoprism-review)',
            '平台': '服务器（Docker）、浏览器',
            '价格 / 许可证': '免费 Community / AGPL-3.0',
            '主要区别': '带 AI 的自托管照片库；Facet 的 README 把它与 Immich 一同归为整理、搜索和备份类工具',
          },
          {
            '应用': '[PixlStash](/zh/power-local-llm/pixlstash-review)',
            '平台': 'Windows、macOS、Linux 桌面应用、网页',
            '价格 / 许可证': '免费 / GPL-3.0',
            '主要区别': '带本地打标签、生成说明和 ComfyUI 集成的图像库，以桌面应用方式安装',
          },
        ],
        note: '请在各应用自己的页面核对其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Facet 需要 GPU 吗？',
            a:
              '不需要。legacy 配置档在 CPU 上就能运行评分、人脸、标签、筛选和图库，只是更慢；TOPIQ、SigLIP 2 和内置说明生成需要 NVIDIA 的 16gb 或 24gb 配置档，除非你把 vlm_backend 指向远程服务器。',
          },
          {
            q: 'Facet 会修改或删除我的照片吗？',
            a: '文档称扫描只读取照片。把评分和关键词写入文件是另一项可选操作，而把被拒绝的照片移入回收站，只有在 viewer.cull.allow_trash 开启时才可用。',
          },
          {
            q: '可以在手机上使用 Facet 吗？',
            a: '没有原生应用。图库是可安装的响应式网页应用，文档介绍了用 PhotoSync 或任何 WebDAV 应用上传到受监控的收件箱。',
          },
          {
            q: '如何在商业场景使用 Facet？',
            a: '安装商业版本，把 licensing.mode 设为 commercial，运行 doctor 命令查看当前生效的许可证状况，然后阅读模型许可证页面。',
          },
          {
            q: '如何让图库保持私密？',
            a: '设置 viewer.password，并把查看器放在启用 HTTPS 的反向代理之后；部署文档提供了 nginx 和 Caddy 的示例。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Facet 是一种免费且更新活跃的方式，可以为大型本地照片库评分、筛选和浏览，人脸分组与自然语言搜索都在你自己的机器上运行。另一方面，安装需要终端和首次运行时的大量模型下载，据项目的许可证页面，部分默认模型权重未获商业许可，据其文档，查看器在设置密码之前一直开放，一项可选功能可能把图像发送到远程服务器，而关于 AI 质量的说法在此都无法核实。它适合熟悉 Docker 的摄影师和自托管用户；想要双击即用的应用或 LLM 助手的人，应该另寻他处。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Facet 网站](https://ncoevoet.github.io/facet/)：功能概览与快速开始，2026 年 10 月 28 日查看。',
          '[Facet README](https://github.com/ncoevoet/facet/blob/master/README.md)：功能、要求、许可证与对比，2026 年 10 月 28 日查看。',
          '[Facet 文档](https://github.com/ncoevoet/facet/tree/master/docs)：安装、配置、部署和 AI 代理页面，2026 年 10 月 28 日查看。',
          '[第三方模型与许可证](https://github.com/ncoevoet/facet/blob/master/docs/THIRD_PARTY_MODELS.md)：各模型的许可证，2026 年 10 月 28 日查看。',
          '[GitHub 上的 Facet](https://github.com/ncoevoet/facet/releases)：发布版本与提交活动，2026 年 10 月 28 日查看。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Immich 评测](/zh/power-local-llm/immich-review) — 带手机应用、并在服务器上提供智能搜索的自托管照片库。',
          '[PhotoPrism 评测](/zh/power-local-llm/photoprism-review) — 另一款内置 AI 标签的自托管照片库。',
          '[PixlStash 评测](/zh/power-local-llm/pixlstash-review) — 带本地 AI 打标签的图像库管理工具。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-28',
    dateModified: '2026-10-28',
    next_refresh_due: '2027-04-28',
    theme: 'Image & Video Generation',
    heroImage: '/images/facet-review-hero-ko.webp',
    title: 'Facet 리뷰: 로컬 사진 점수화·선별·갤러리',
    seoTitle: 'Facet 리뷰: 내 컴퓨터에서 사진 점수화·선별·갤러리',
    intro:
      'Facet은 직접 실행하는 무료 MIT 라이선스 사진 분석 도구입니다. 사진마다 점수를 매기고, 연사와 거의 같은 사진을 찾고, 얼굴을 묶고, 웹 갤러리에서 자연어로 라이브러리를 검색할 수 있습니다. 채팅이나 LLM 앱이 아니며, AI는 이미지 점수화, 임베딩, 얼굴 모델로 이루어져 있습니다. 이 리뷰는 2026년 10월 28일에 확인한 README, 문서, GitHub 릴리스, 소스 코드를 바탕으로 합니다.',
    metaDescription: 'Facet 리뷰: 사진을 로컬에서 점수화·선별·탐색하는 무료 MIT 도구로, 얼굴 묶기와 자연어 검색을 지원합니다. 설치 방법, 모델 라이선스, 개인정보를 다룹니다.',
    twitterDescription:
      'Facet 리뷰: 사진 점수화·선별·갤러리를 직접 호스팅하는 도구입니다. Docker 또는 스크립트 설치, CPU·GPU 프로파일, 상업용이 아닌 기본 모델 가중치, 선택적 원격 VLM, 확인하지 못한 사항을 정리했습니다.',
    audience:
      '로컬에 큰 사진 라이브러리를 둔 사진가와 셀프 호스팅 사용자 중, 설치 부담, AI가 어디서 실행되는지, 모델 라이선스가 무엇을 허용하는지, 출처가 확인해 주지 않는 내용을 알고 싶은 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Facet 리뷰',
    targetKeywords: [
      'facet 사진 리뷰',
      'ai 사진 선별 소프트웨어',
      '셀프 호스팅 사진 선별',
      '로컬 사진 점수화',
      '연사 중복 사진 정리',
      'facet ncoevoet github',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Facet(2026년 10월 28일 기준 v1.25.0)은 로컬 사진 라이브러리를 웹 갤러리로 점수화·선별·탐색하는 무료 MIT 라이선스 도구이며, 얼굴 묶기와 자연어 검색이 내 컴퓨터에서 실행됩니다.** 프로젝트의 모델 라이선스 페이지에 따르면 기본 모델 가중치 일부는 상업적 사용이 허용되지 않습니다. 채팅 기능은 없습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Facet은 사진과 AI 점수화를 내 컴퓨터 안에 두나요?',
        answer:
          'README에 따르면 그렇습니다. 스캔은 사진을 읽기만 하고, 결과는 Facet 자체 데이터베이스에 저장되며, 모델은 처음 내려받은 뒤 내 하드웨어에서 실행됩니다. 업데이트 확인, 지도 타일, 선택적 원격 비전·언어 서버처럼 외부로 나가는 요청도 있습니다. PromptQuorum은 네트워크 트래픽을 확인하지 않았습니다.',
        bullets: [
          '사진을 9가지 항목으로 점수화하고, 연사·유사 사진·얼굴을 묶어 상위 사진을 보여 줍니다.',
          '자연어 검색은 GPU 프로파일 16gb와 24gb에서는 SigLIP 2를, legacy와 8gb에서는 CLIP 모델을 사용합니다.',
          'legacy 프로파일로 CPU에서 실행되며, NVIDIA GPU나 메모리가 큰 Apple Silicon Mac이면 가장 강력한 모델을 쓸 수 있습니다.',
          'Docker 또는 설치 스크립트로 설치하며, 설치 프로그램·앱 스토어 버전·릴리스 바이너리는 없습니다.',
          '문서에 따르면 뷰어는 비밀번호를 설정하기 전까지 포트에 접근할 수 있는 누구에게나 열려 있습니다.',
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
        label: 'Facet이란?',
        anchor: 'what-is-facet',
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
        label: '시작하는 방법',
        anchor: 'getting-started',
      },
      {
        label: '주요 기능',
        anchor: 'key-features',
      },
      {
        label: 'AI 기능과 실행 위치',
        anchor: 'ai-features',
      },
      {
        label: '데이터 흐름과 개인정보',
        anchor: 'privacy',
      },
      {
        label: '모델 라이선스',
        anchor: 'model-licences',
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
          {
            type: 'one-sentence',
            text:
              'Facet은 사진에 점수를 매기고, 연사마다 가장 좋은 사진을 고르고, 얼굴을 묶고, 로컬 라이브러리를 자연어로 검색하게 해 주는 셀프 호스팅 도구이며, 모두 브라우저 갤러리에서 사용합니다.',
          },
          {
            type: 'plain-terms',
            text: '사진 폴더를 Facet에 지정하면 내 컴퓨터에서 한 번 분석하고, 그 결과를 브라우저에서 탐색·선별·검색할 수 있습니다.',
          },
        ],
        items: [
          '유지보수: v1.25.0이 2026년 10월 27일에 릴리스되었고 저장소에 2026년 10월 28일 푸시가 있었으므로 방치된 프로젝트 경고는 해당되지 않습니다.',
          '운영: README는 상업적 지원이 없는 1인 개발 프로젝트라고 설명하며, 코드는 GitHub에서 MIT 라이선스로 공개되어 있습니다.',
          '설치: Docker Compose 또는 설치 스크립트와, 모델을 내려받는 첫 스캔이 필요하며 터미널을 사용합니다.',
          '비용: 무료이며 유료 요금제는 찾지 못했습니다. 문서의 "Edition"은 접근 수준이며 제품 에디션이 아닙니다.',
          '범위: 이미지 점수화, 선별, 검색. 글로 된 태그·캡션·평가에는 선택적 비전·언어 모델이 필요합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              '이 리뷰는 2026년 10월 28일에 확인한 프로젝트 웹사이트, README, 문서, GitHub 릴리스, 소스 코드 일부를 바탕으로 합니다. PromptQuorum은 Facet을 설치하지 않았으므로 점수의 정확도, 검색 적합도, 속도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-facet',
        title: 'Facet이란?',
        content: [
          '**Facet은 웹 갤러리를 갖춘 로컬 사진 분석·선별 엔진으로, 이미지마다 점수를 매긴 뒤 결과를 탐색하고 선별하고 정리할 수 있게 합니다.** README에 따르면 모든 것이 내 컴퓨터에서 실행되며 클라우드, 계정, API 키가 필요 없고, 코드는 MIT 라이선스입니다.',
          'LICENSE 파일에는 저작권자로 Nicolas Coevoet이 적혀 있습니다. 작업은 두 도구로 나뉘는데, 명령줄에서 시작하는 스캐너와 브라우저에 갤러리를 제공하는 뷰어입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Facet은 소스 저장소에서 Docker 또는 설치 스크립트로 설치합니다. 프로젝트는 설치 프로그램, 앱 스토어 등록, 릴리스 바이너리를 제공하지 않습니다.**',
        ],
        columns: [
          '옵션',
          '입수 방법',
        ],
        rows: [
          {
            '옵션': 'Docker(권장)',
            '입수 방법':
              '[설치 가이드](https://github.com/ncoevoet/facet/blob/master/docs/INSTALLATION.md): 클론, 사진 폴더 지정, docker compose up',
          },
          {
            '옵션': 'Docker 없이',
            '입수 방법': '클론 후 bash install.sh를 실행하고, python facet.py와 python viewer.py를 실행(Linux, macOS)',
          },
          {
            '옵션': '문서',
            '입수 방법': '저장소의 [docs 폴더](https://github.com/ncoevoet/facet/tree/master/docs)',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[ncoevoet.github.io/facet](https://ncoevoet.github.io/facet/)',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[github.com/ncoevoet/facet](https://github.com/ncoevoet/facet) (MIT)',
          },
          {
            '옵션': '릴리스',
            '입수 방법': '[GitHub 릴리스](https://github.com/ncoevoet/facet/releases), 릴리스 노트만 제공',
          },
        ],
        note:
          '확인한 버전은 v1.25.0이며 GitHub 릴리스에 따르면 2026년 10월 27일에 공개되었습니다. 저장소의 마지막 푸시는 2026년 10월 28일입니다. 설치에는 터미널, Git, Docker 또는 Python이 필요하므로 더블클릭으로 설치하는 방식이 아니라 개발자용 설정입니다. 프로젝트 사이트와 읽은 문서에서는 별도의 개인정보 처리방침 페이지를 찾지 못했으며, 개인정보 관련 설명은 README에 있습니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**문서에 따르면 Facet은 CPU가 있는 어떤 컴퓨터에서도 실행되며, NVIDIA GPU나 메모리가 큰 Apple Silicon Mac이면 가장 강력한 모델을 쓸 수 있습니다.**',
        ],
        columns: [
          '항목',
          '출처의 설명',
        ],
        rows: [
          {
            '항목': '프로파일',
            '출처의 설명': 'legacy: CPU만, 8gb: NVIDIA 6-14 GB, 16gb: NVIDIA 14-20 GB, 24gb: NVIDIA 20 GB 이상',
          },
          {
            '항목': '첫 실행 다운로드',
            '출처의 설명': '문서에 따르면 한 번만, legacy 약 4.7 GB, 8gb 약 6.9 GB, 16gb 약 14.6 GB, 24gb 약 19.1 GB',
          },
          {
            '항목': 'Apple Silicon',
            '출처의 설명': 'Torch 모델에 Metal 백엔드를 사용하며, auto 프로파일은 통합 메모리 총량으로 정해져 32 GB면 16gb에 도달',
          },
          {
            '항목': '메모리',
            '출처의 설명': '문서에 RAM 최소값은 없으며, 메모리 제한이 있는 컨테이너는 큰 프로파일에서 스캔 도중 종료될 수 있다고 경고',
          },
          {
            '항목': '소프트웨어',
            '출처의 설명': 'Docker. 수동 설치 시 Python 3.12(3.10 이상 가능)와 갤러리 빌드용 Node.js 20 이상',
          },
          {
            '항목': '운영체제',
            '출처의 설명': 'Windows, macOS, Linux. Windows에서는 문서가 Docker를, NVIDIA GPU에는 WSL2를 안내',
          },
          {
            '항목': '사진 형식',
            '출처의 설명': 'JPEG, HEIC, RAW 10종, PNG, WebP, TIFF, AVIF, JPEG XL 등',
          },
        ],
        note: '이 수치는 프로젝트 문서에서 가져온 것이며, PromptQuorum은 어떤 하드웨어에서도 스캔 시간이나 메모리 사용량을 측정하지 않았습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트 문서를 따른 것이며, PromptQuorum은 실행하지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '코드를 받고 폴더 지정',
            whyItMatters: '저장소를 클론하고 .env.example을 .env로 복사한 뒤 PHOTOS_DIR을 사진 폴더로 설정합니다.',
          },
          {
            title: 'Facet 시작',
            whyItMatters: 'docker compose up -d를 실행합니다. NVIDIA 카드가 있으면 해당 용량용 compose 파일을 추가하거나, Docker 없이 설치 스크립트를 사용합니다.',
          },
          {
            title: '스캔하고 다운로드 기다리기',
            whyItMatters: '첫 스캔에서 프로파일에 맞는 모델을 내려받고 데이터베이스를 만들어 사진을 점수화합니다. 작업 중에도 갤러리를 둘러볼 수 있습니다.',
          },
          {
            title: '갤러리를 열고 비밀번호 설정',
            whyItMatters: '브라우저에서 뷰어를 열어 Docker 이미지가 한 번만 출력하는 edition 비밀번호로 로그인하고, 포트를 공유하기 전에 뷰어 비밀번호를 설정합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '주요 기능',
        content: [
          '**아래 항목은 모두 프로젝트의 README 또는 문서에서 가져온 것이며, PromptQuorum은 어느 것도 테스트하지 않았습니다.**',
        ],
        items: [
          '**점수화.** 사진마다 미적 품질, 구도, 얼굴 품질, 눈 선명도, 노출 등 9가지 항목을 평가하고 콘텐츠 카테고리(30개 이상)별로 가중치를 둡니다.',
          '**선별.** 연사·유사 사진·장면 그룹, 눈 감음 표시, 거의 중복된 사진 탐지, 드라이런 미리보기가 있는 자동 선별을 지원하며 노출 브래킷과 파노라마는 한 묶음으로 유지합니다.',
          '**탐색.** 모자이크와 격자 보기, 필터, 타임라인, 지도, 스마트 앨범을 포함한 앨범, 테마별 슬라이드쇼, "이날의 추억".',
          '**정리.** 이름 붙인 인물과 병합 제안, 별점, 태그, 짧게 되돌릴 수 있는 일괄 작업.',
          '**공유와 연동.** 고객 확인 모드가 있는 앨범 링크, Lightroom·darktable·digiKam용 XMP 사이드카, 휴대폰 업로드용 WebDAV 받은편지함, Immich와의 평점 동기화.',
        ],
        note: 'README에 따르면 Facet은 점수화·순위 매기기·선별을 하지만 RAW 파일은 편집하지 않으며, 미적 점수는 모델 기반의 근사치입니다.',
      },
      aiFeatures: {
        id: 'ai-features',
        title: 'AI 기능과 실행 위치',
        content: [
          '**핵심 AI는 이미지를 다룹니다. 품질 점수 모델, 검색용 임베딩, 얼굴 모델, 피사체 검출이며, 글로 된 태그·캡션·평가는 선택적 비전·언어 모델이 만듭니다.**',
        ],
        items: [
          '**품질 점수.** 16gb와 24gb 프로파일은 미적 점수에 TOPIQ를 쓰고, legacy와 8gb는 미적 헤드가 붙은 CLIP 임베딩을 씁니다. 문서는 LIQE 같은 보조 평가기를 모든 프로파일에서 쓸 수 있다고 나열합니다.',
          '**검색.** "해변의 일몰" 같은 입력을 임베딩과 대조합니다. 16gb와 24gb에서는 SigLIP 2, legacy와 8gb에서는 OpenCLIP ViT-L-14입니다.',
          '**얼굴.** InsightFace가 얼굴을 검출·인식하고 클러스터링이 이를 인물로 묶으며, 선택적인 MediaPipe blendshapes가 눈 감음과 미소 판독을 더 정확하게 합니다.',
          '**피사체.** BiRefNet이 피사체와 배경을 분리해 초점과 구도를 판단합니다.',
          '**My Taste.** A/B 비교, 평점, 선별 결정이 가중치 최적화기와 개인 순위에 반영됩니다.',
          '**비전·언어 모델.** 태그·캡션·평가는 16gb와 24gb 프로파일에서는 같은 프로세스 안에서, 또는 vlm_backend로 지정한 원격 Ollama나 OpenAI 호환 서버에서 실행되며, 이 경우 이미지가 해당 서버로 전송됩니다.',
        ],
        note: '이는 프로젝트 자체의 설명입니다. PromptQuorum은 점수 품질, 검색 적합도, 얼굴 묶기 정확도를 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**README는 모든 것이 내 컴퓨터에서 실행되며 클라우드, 계정, API 키가 필요 없다고 하고, 문서는 스캔이 사진을 읽기만 하고 결과를 Facet 자체 데이터베이스에 기록한다고 설명합니다.** 모델은 처음 사용할 때 Hugging Face, PyIQA, InsightFace 출처에서 로컬 캐시로 내려받으며, 그 이후 오프라인 동작은 PromptQuorum이 테스트하지 않았습니다.',
          '문서와 소스 코드에서 확인한 외부 요청은 다음과 같습니다. updates.enabled가 false가 아니면 7일마다 GitHub에 최신 릴리스를 묻는 업데이트 확인, 브라우저가 OpenStreetMap 타일 서버에서 불러오는 지도 타일, 지오코더 Photon을 언급하는 GPS 편집 대화상자, 그리고 vlm_backend를 Ollama나 OpenAI 호환 서버로 설정한 경우에만 그곳으로 보내는 이미지입니다. 뷰어 스크립트는 기본적으로 모든 인터페이스에서 대기하며, viewer.password가 비어 있는 동안에는 포트에 접근할 수 있는 누구나 라이브러리를 둘러보고 원본을 내려받을 수 있습니다. MCP 어시스턴트용 엔드포인트는 기본으로 켜져 있고, 열린 설치에서는 읽기 전용 익명 키를 제공하며, viewer.mcp.enabled를 false로 하면 꺼집니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트의 설명과, 문서 및 소스 코드에 대한 PromptQuorum의 해석입니다. 네트워크 트래픽은 확인하지 않았고 나머지 소스 코드도 감사하지 않았습니다.',
          },
        ],
      },
      licensing: {
        id: 'model-licences',
        title: '모델 라이선스',
        content: [
          '**Facet 자체 코드는 MIT 라이선스이지만, 기본으로 내려받는 모델 중 일부는 상업적 사용이 허용되지 않습니다.** 프로젝트의 모델 라이선스 페이지는 pyiqa(TOPIQ, LIQE 및 기타 평가기)를 PolyForm Noncommercial 코드와 CC BY-NC-SA 가중치로, InsightFace buffalo_l 가중치를 비상업적 연구용으로만 나열합니다. GitHub API는 이 저장소의 라이선스를 인식하지 못하므로 LICENSE 파일을 직접 읽어 보시기 바랍니다.',
          'licensing.mode를 commercial로 설정하면 Facet은 관대한 라이선스의 모델만 사용합니다. 제한된 구성 요소는 가져오거나 내려받지 않으며, 각 자리는 얼굴의 경우 YuNet과 SFace 같은 대체 모델로 연결됩니다. 표준 설치 스크립트와 Docker 이미지에는 제한된 패키지가 포함되어 있고, 상업용 설치만으로 모드가 저절로 바뀌지는 않습니다. 이 페이지는 정보일 뿐 법률 자문이 아니라고 밝힙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '업무에 Facet을 쓸 계획이라면 기본 설정에 의존하기 전에 각 모델의 라이선스를 직접 확인하시기 바랍니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**큰 라이브러리를 가진 사진가**로, 편집 전에 연사, 눈 감은 사진, 거의 중복된 사진을 정리하고 싶은 분.',
          '**셀프 호스팅 사용자**로, 자연어 검색과 얼굴 묶기를 갖춘 비공개 갤러리를 원하고 Docker가 익숙한 분.',
          '**Lightroom, darktable, digiKam 사용자**로, 점수와 선별 결과를 표준 사이드카 파일로 다시 받고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**AI 품질.** 점수 정확도, 얼굴 묶기, 검색 적합도, 스캔 속도는 테스트하지 않았으며, README 자체도 미적 점수를 근사치라고 합니다.',
          '**오프라인 사용.** 첫 모델 다운로드 이후 Facet이 완전히 오프라인으로 동작하는지는 확인하지 못했습니다.',
          '**릴리스 안정성.** v1.23.1 노트에 따르면 v1.23.0은 CUDA Docker 이미지 없이 배포되었고, 2026년 10월 24일부터 27일 사이에 세 버전이 나왔으므로 변경이 빠르다는 점에 유의하십시오.',
          '**지원.** README는 상업용 선별 도구 같은 지원이 없는 1인 개발 프로젝트라고 설명합니다.',
          '**설치 단계.** 설정 명령은 문서에서 가져온 것이며 PromptQuorum이 실행하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        content: [
          '디렉터리에는 같은 분야에서 리뷰된 사진·이미지 라이브러리 도구가 세 가지 더 있습니다.',
        ],
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이점',
        ],
        rows: [
          {
            '앱': '[Immich](/ko/power-local-llm/immich-review)',
            '플랫폼': '서버(Docker), iOS, Android, 브라우저',
            '가격 / 라이선스': '무료 / AGPL-3.0',
            '핵심 차이점': '휴대폰 백업과 검색. Facet README에 따르면 Facet은 품질 점수화와 선별을 더하고 평점을 Immich와 동기화할 수 있음',
          },
          {
            '앱': '[PhotoPrism](/ko/power-local-llm/photoprism-review)',
            '플랫폼': '서버(Docker), 브라우저',
            '가격 / 라이선스': '무료 Community / AGPL-3.0',
            '핵심 차이점': 'AI를 갖춘 셀프 호스팅 사진 라이브러리. Facet README는 Immich와 함께 정리·검색·백업 도구로 분류',
          },
          {
            '앱': '[PixlStash](/ko/power-local-llm/pixlstash-review)',
            '플랫폼': 'Windows·macOS·Linux 데스크톱 앱, 웹',
            '가격 / 라이선스': '무료 / GPL-3.0',
            '핵심 차이점': '로컬 태깅, 캡션, ComfyUI 연동을 갖춘 이미지 라이브러리이며 데스크톱 앱으로 설치',
          },
        ],
        note: '각 앱의 최신 가격, 라이선스, 지원 플랫폼은 해당 앱 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Facet에 GPU가 필요한가요?',
            a:
              '아니요. legacy 프로파일은 점수화, 얼굴, 태그, 선별, 갤러리를 CPU에서 실행하며 속도만 느립니다. TOPIQ, SigLIP 2, 내장 캡션에는 NVIDIA 16gb 또는 24gb 프로파일이 필요하고, vlm_backend를 원격 서버로 지정하면 예외입니다.',
          },
          {
            q: 'Facet이 내 사진을 바꾸거나 삭제하나요?',
            a:
              '문서에 따르면 스캔은 사진을 읽기만 합니다. 평점과 키워드를 파일에 쓰는 것은 별도의 선택 작업이며, 거부한 사진을 휴지통으로 옮기는 기능은 viewer.cull.allow_trash가 켜져 있을 때만 동작합니다.',
          },
          {
            q: '휴대폰에서 Facet을 쓸 수 있나요?',
            a:
              '네이티브 앱은 없습니다. 갤러리는 반응형이며 설치할 수 있는 웹 앱이고, 문서에는 PhotoSync나 WebDAV 앱으로 감시되는 받은편지함에 업로드하는 방법이 설명되어 있습니다.',
          },
          {
            q: 'Facet을 상업적으로 쓰려면 어떻게 하나요?',
            a:
              '상업용 빌드를 설치하고 licensing.mode를 commercial로 설정한 뒤, 현재 적용된 라이선스 상태를 보여 주는 doctor 명령을 실행하고 모델 라이선스 페이지를 읽으십시오.',
          },
          {
            q: '갤러리를 비공개로 유지하려면 어떻게 하나요?',
            a: 'viewer.password를 설정하고 뷰어를 HTTPS가 적용된 리버스 프록시 뒤에 두십시오. 배포 문서에 nginx와 Caddy 예시가 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Facet은 큰 로컬 사진 라이브러리를 점수화·선별·탐색할 수 있는 무료이고 활발히 업데이트되는 방법으로, 얼굴 묶기와 자연어 검색이 내 컴퓨터에서 실행됩니다. 반면 설치에는 터미널과 첫 실행 시 큰 모델 다운로드가 필요하고, 프로젝트의 라이선스 페이지에 따르면 기본 모델 가중치 일부는 상업적 사용이 허용되지 않으며, 문서에 따르면 뷰어는 비밀번호를 설정하기 전까지 열려 있고, 선택 기능 하나는 이미지를 원격 서버로 보낼 수 있으며, AI 품질에 관한 주장은 여기서 확인할 수 없었습니다. Docker가 익숙한 사진가와 셀프 호스팅 사용자에게 적합하며, 더블클릭으로 쓰는 앱이나 LLM 어시스턴트를 찾는 분은 다른 선택지를 살펴보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Facet 웹사이트](https://ncoevoet.github.io/facet/): 기능 개요와 빠른 시작, 2026년 10월 28일 확인.',
          '[Facet README](https://github.com/ncoevoet/facet/blob/master/README.md): 기능, 요구 사항, 라이선스, 비교, 2026년 10월 28일 확인.',
          '[Facet 문서](https://github.com/ncoevoet/facet/tree/master/docs): 설치, 설정, 배포, AI 에이전트 페이지, 2026년 10월 28일 확인.',
          '[서드파티 모델과 라이선스](https://github.com/ncoevoet/facet/blob/master/docs/THIRD_PARTY_MODELS.md): 모델별 라이선스, 2026년 10월 28일 확인.',
          '[GitHub의 Facet](https://github.com/ncoevoet/facet/releases): 릴리스와 커밋 활동, 2026년 10월 28일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Immich 리뷰](/ko/power-local-llm/immich-review) — 휴대폰 앱과 서버 내 스마트 검색을 갖춘 셀프 호스팅 사진 라이브러리.',
          '[PhotoPrism 리뷰](/ko/power-local-llm/photoprism-review) — AI 라벨을 내장한 또 하나의 셀프 호스팅 사진 라이브러리.',
          '[PixlStash 리뷰](/ko/power-local-llm/pixlstash-review) — 로컬 AI 태깅을 갖춘 이미지 라이브러리 관리 도구.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
