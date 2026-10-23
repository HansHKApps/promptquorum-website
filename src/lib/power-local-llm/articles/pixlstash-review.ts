// PixlStash Review: self-hosted image library manager with local AI tagging, face and semantic search
// Slug: pixlstash-review
// Companion to: comfyui-review, ollama-vision-models-review, llava-review, karakeep-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/pixlstash-review-hero-en.webp',
    title: 'PixlStash Review: Self-Hosted Image Library Manager with Local AI Tagging',
    seoTitle: 'PixlStash Review: Local AI Image Library Manager',
    intro:
      'PixlStash is a self-hosted image library manager that tags, captions and indexes pictures with AI models running on your own machine, then lets you search them by content or face. This review covers what its website, install page, privacy policy and GitHub repository document, what they leave out, and how it compares with other tools in the directory.',
    metaDescription:
      'PixlStash review: free GPL-3.0 image library manager for Windows, macOS and Linux with local AI tagging, face and semantic search, and ComfyUI integration.',
    twitterDescription:
      'PixlStash review: a free, GPL-3.0 desktop and server app that tags, captions and searches image libraries with local AI models. Install options, privacy, limits and alternatives.',
    audience:
      'Creators and AI-image users with large picture libraries who want local tagging, search and duplicate cleanup — covers install, features, models, privacy, limits and alternatives.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PixlStash review',
    targetKeywords: [
      'pixlstash review',
      'pixlstash',
      'self-hosted image library manager',
      'local ai image tagging',
      'semantic image search local',
      'face search photo library offline',
      'comfyui image manager',
      'wd14 florence-2 joycaption tagger',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'AMD ROCm', 'Apple silicon', 'CPU'],
    leadAnswerBlock:
      '**PixlStash is a free, GPL-3.0 image library manager that runs as a desktop app or a headless server and uses local AI models to tag, caption, score and search your pictures.** Its site says no model sends anything to an API and no account is needed. This review covers version 1.11.5 and is based on the public site, privacy policy and repository, not on hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is PixlStash worth trying for organizing a large image library with local AI?',
        answer:
          'Probably, if you keep thousands of generated or photographed images and want tagging, face search and duplicate cleanup without a cloud service. Check two things first: the site publishes no RAM, VRAM or library-size figures, and the project is young.',
        bullets: [
          'Desktop installers for Windows, macOS and Linux, plus a Windows server installer, Docker and pip.',
          'Four taggers (PixlStash Tagger, WD14, Florence-2, JoyCaption) selectable per request.',
          'Semantic search, face search, duplicate queue and a calibrated quality score.',
          'Two-way ComfyUI integration and a pixlstash-cli command line.',
          'Update check and install telemetry are both off by default, per the privacy policy.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get PixlStash', anchor: 'get-it' },
      { label: 'PixlStash at a Glance', anchor: 'at-a-glance' },
      { label: 'What PixlStash Is', anchor: 'what-is-pixlstash' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'AI Models and Hardware', anchor: 'models-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'PixlStash vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use PixlStash', anchor: 'who-should-use' },
      { label: 'Who Should Not Use PixlStash', anchor: 'who-should-not-use' },
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
            text: 'PixlStash is an open-source image library manager that imports your existing folders without moving files and organizes them with AI models that run locally.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a photo manager built for people with huge piles of AI-generated or reference images: it labels them, finds duplicates and lets you search by describing a picture or showing a face.',
          },
        ],
        items: [
          'Version reviewed: 1.11.5, released 8 October 2026; the repository itself was last updated on 17 October 2026, so no stale-project warning applies.',
          'License and price: GPL-3.0 per the GitHub repository; the site lists no pricing.',
          'Platforms: Windows x64, macOS on Apple Silicon only, and Linux x86_64 as desktop apps.',
          'Standout features: semantic and face search, tag review queue, duplicate queue, ComfyUI nodes.',
          'Maturity: a young project that publishes no file-format list and no library-size limits.',
        ],
      },
      getItPixlstash: {
        id: 'get-it',
        title: 'Get PixlStash',
        content: [
          '**PixlStash ships as a double-click desktop app on all three desktop systems, so no terminal is needed.** The files are attached to the [latest GitHub release](https://github.com/pikselkroken/pixlstash/releases/latest); the rows below run from easiest to most involved.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          { 'Platform': 'Windows desktop app', 'Get It': '[PixlStash-desktop-1.11.5-win-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Platform': 'macOS desktop app', 'Get It': '[PixlStash-desktop-1.11.5-mac-arm64.dmg](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Platform': 'Linux desktop app', 'Get It': '[AppImage or .deb](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Platform': 'Windows server installer', 'Get It': '[pixlstash-server-1.11.5-windows-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Platform': 'Docker', 'Get It': '[ghcr.io/pikselkroken/pixlstash:latest](https://pixlstash.dev/install.html)' },
          { 'Platform': 'pip (Python 3.10+)', 'Get It': '[pip install pixlstash](https://pixlstash.dev/install.html)' },
          { 'Platform': 'Website', 'Get It': '[pixlstash.dev](https://pixlstash.dev/)' },
          { 'Platform': 'Privacy policy', 'Get It': '[PixlStash privacy policy](https://pixlstash.dev/privacy.html)' },
          { 'Platform': 'Source code', 'Get It': '[github.com/pikselkroken/pixlstash](https://github.com/pikselkroken/pixlstash)' },
        ],
        note: 'The macOS app does not run on Intel Macs. On Linux the AppImage may need libfuse2 on newer distributions. The Windows installer is signed, yet SmartScreen can still warn on first run; the install page explains how to confirm the publisher.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixlStash at a Glance',
        columns: ['Attribute', 'PixlStash'],
        rows: [
          { 'Attribute': 'Platform', 'PixlStash': 'Windows, macOS, Linux' },
          { 'Attribute': 'Price', 'PixlStash': 'Free (no pricing listed)' },
          { 'Attribute': 'License', 'PixlStash': 'GPL-3.0 (per GitHub)' },
          { 'Attribute': 'Runs', 'PixlStash': 'Locally; models download on first start' },
          { 'Attribute': 'Reads text in images (OCR)', 'PixlStash': 'Not stated on the site' },
          { 'Attribute': 'Multiple images per prompt', 'PixlStash': 'Not stated on the site' },
          { 'Attribute': 'Local API', 'PixlStash': 'REST API; endpoints not documented on site' },
        ],
        note: 'Attributes follow the vision comparison used in the Local LLM Software Directory. A missing statement on the site means unknown, not unsupported.',
      },
      whatIsPixlstash: {
        id: 'what-is-pixlstash',
        title: 'What PixlStash Is',
        content: [
          '**PixlStash is an image library manager, not a chat app or an image generator.** The repository describes it as a tool for finding things in "an image library that\'s gotten out of hand": it imports and tags images automatically, searches by content or face, and serves data to other tools such as ComfyUI over a REST API.',
          'Version 1.11 reads folders you already have and builds projects, people and sets from their names without copying, moving or renaming anything. You can run it as a desktop app or headless on a server with a browser interface.',
          'This review draws on the website, its install, feature, AI and privacy pages, and the GitHub repository. It involved no hands-on testing, so speed, tagging accuracy and stability are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an installer download, then pointing the app at a folder.** The steps follow the install and features pages.',
        ],
        numberedItems: [
          {
            title: 'Pick the installer for your system',
            whyItMatters: 'Download the desktop app for Windows x64, Apple Silicon macOS or Linux x86_64 from the [releases page](https://github.com/pikselkroken/pixlstash/releases/latest).',
          },
          {
            title: 'Let the first run fetch a backend',
            whyItMatters: 'The app detects your hardware and downloads a matching NVIDIA, experimental AMD or CPU backend once; the install page puts it at a few hundred MB to a few GB.',
          },
          {
            title: 'Add a library in Settings',
            whyItMatters: 'Choose a folder; a wizard proposes what each folder level means, and nothing is moved until you confirm the review screen.',
          },
          {
            title: 'Back up before upgrading',
            whyItMatters: 'The 1.11 release notes say it adds database columns, so copy the library folder while PixlStash is stopped.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The core idea is to review and search a large library quickly.** Everything below comes from the features page.',
        ],
        items: [
          '**Import in place.** Existing folders become projects, sets and people; imports run in the background and resume if interrupted.',
          '**Tagging and captions.** Four taggers (PixlStash Tagger, WD14, Florence-2, JoyCaption) are chosen per request, and a label review queue ranks the tags the models most likely got wrong.',
          '**Search.** Describe a picture in words, find visually similar pictures, or search by an uploaded face; set operations combine characters and sets.',
          '**Scoring.** A smart score sorts large sets by what is worth reviewing and applies a penalty for malformed anatomy and render defects.',
          '**Duplicates.** A queue compares candidates, stacks them and sends extras to a scrapheap that restores deleted pictures.',
          '**Sharing and safety.** Read-only share links with revocable tokens, undo and redo, and daily, weekly and monthly metadata snapshots.',
          '**Integrations.** Two-way ComfyUI workflows, custom Python plugins and the pixlstash-cli command line for backups.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'AI Models and Hardware',
        content: [
          '**All models run on your machine, and the weights download on first start.** The AI page names OpenCLIP ViT-B-32 for semantic search, InsightFace SCRFD-10G with the buffalo_l pack for faces, and Florence-2 for captions and segmentation.',
          'The default taggers are the PixlStash Tagger, described as a wd-convnext-tagger-v3 finetune, plus WD14 and JoyCaption. Moondream2 installs as a plugin through pixlstash-cli.',
          'The desktop app includes a CPU runtime, so every model works offline on first launch. NVIDIA CUDA acceleration is an optional download, AMD ROCm support is experimental and desktop-only, and the site publishes no RAM or VRAM requirement.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The privacy policy, last updated 3 August 2026, says your library never reaches the developer.** It states there is no account, no cloud sync and no central server, and that sharing is optional and revocable. The update check and an anonymous install ID are both off by default; if enabled, they send a version, an install type or a random ID, never library content.',
          'Model weights come from services such as Hugging Face and, for GPU add-ons, from PyPI and the PyTorch index, so the first run needs internet access. The AI page also mentions a captioner for OpenAI-compatible vision APIs; any remote endpoint you configure falls outside the local-only claim.',
          'Face grouping creates face embeddings of the people in your pictures. They stay on your machine per the site, but whether that is permitted for pictures of other people or for commercial use is your responsibility; the site offers the AuraFace pack for commercial use and gives no licence terms for the other models. The code is GPL-3.0 per GitHub, while the site only calls the project open source. This review did not inspect network traffic, so these statements are the developer\'s own.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Local AI tagging',
            'What it means in real use': 'Labels and captions without uploading pictures.',
            'Limitation / caveat': 'Model downloads are large and no accuracy figures are published.',
          },
          {
            'Benefit': 'Import in place',
            'What it means in real use': 'Your folder structure stays as it is.',
            'Limitation / caveat': 'No file-format list or library-size limit is stated.',
          },
          {
            'Benefit': 'Face and semantic search',
            'What it means in real use': 'Find a person or a scene by description.',
            'Limitation / caveat': 'Face data is personal data; use depends on your situation.',
          },
          {
            'Benefit': 'Installers for all desktops',
            'What it means in real use': 'Download and open, no terminal needed.',
            'Limitation / caveat': 'macOS is Apple Silicon only; AMD support is experimental.',
          },
          {
            'Benefit': 'Open source',
            'What it means in real use': 'GPL-3.0 code you can inspect.',
            'Limitation / caveat': 'Young project with few stars; the site names no license.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixlStash vs. Alternatives',
        content: [
          'The directory holds no other image-library manager, so these are tools that cover part of the same job: vision models that caption pictures, a self-hosted tagging app and the generator PixlStash connects to.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            'App': 'PixlStash',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, GPL-3.0',
            'Role': 'Image library manager',
            'Key difference': 'Ready-made tagging, face search and duplicate review',
          },
          {
            'App': '[Ollama Vision Models](/power-local-llm/ollama-vision-models-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, per-model licenses',
            'Role': 'Vision models via CLI',
            'Key difference': 'Caption or describe images on request; no library or search',
          },
          {
            'App': '[LLaVA](/power-local-llm/llava-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, Apache 2.0',
            'Role': 'Vision-language model',
            'Key difference': 'A model library for developers, not an app',
          },
          {
            'App': '[Karakeep](/power-local-llm/karakeep-review)',
            'Platforms': 'Web, iOS, Android',
            'Price and license': 'Free, AGPL-3.0',
            'Role': 'Bookmark and notes app',
            'Key difference': 'AI tagging and search for links and notes, not image folders',
          },
          {
            'App': '[ComfyUI](/power-local-llm/comfyui-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price and license': 'Free, GPL-3.0',
            'Role': 'Image generator',
            'Key difference': 'Generates the pictures; PixlStash tags and sorts them',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project\'s own page before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use PixlStash',
        items: [
          '**AI-image creators with thousands of outputs.** Tagging, scoring and duplicate review target exactly that pile.',
          '**ComfyUI users.** The two-way integration sends results back tagged.',
          '**Anyone who wants cloud-free photo search.** Semantic and face search run on your machine.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use PixlStash',
        items: [
          '**Intel Mac owners.** The macOS app is Apple Silicon only.',
          '**Teams that need multi-user access.** The site does not describe multi-user support.',
          '**Anyone who needs proven scale.** No library-size or performance figures are published.',
          '**Commercial users who have not checked model licences.** Only the face packs come with licence guidance.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does PixlStash need a GPU?',
            a: 'No. The desktop app includes a CPU runtime; NVIDIA CUDA and experimental AMD acceleration are optional downloads.',
          },
          {
            q: 'Does PixlStash move or change my files?',
            a: 'Not on import: nothing is copied, moved or renamed until you confirm the review screen. Files move later only if a folder layout makes their current folder inaccurate, and proposed moves can be undone as a batch.',
          },
          {
            q: 'Can I run it on a server instead of a desktop?',
            a: 'Yes. A Windows server installer, a Docker image and a pip package serve the browser interface on port 9537.',
          },
          {
            q: 'Which version are the v1.12 release candidates?',
            a: 'They are pre-releases on GitHub. This review covers the latest stable release, 1.11.5.',
          },
          {
            q: 'Is there a live demo?',
            a: 'Yes, the site links a [live demo](https://demo.pixlstash.dev/).',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'PixlStash is a promising fit for creators who need to tame a large image library with local AI: it installs like a normal app, reads existing folders in place and keeps its models on your machine.',
          'The caveats are maturity and transparency: no file-format list, no scale figures, a site that names no license, and 89 GitHub stars. Try it on a copy of a folder before pointing it at an irreplaceable archive, and back up first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PixlStash website](https://pixlstash.dev/) — product description, local-AI claim and links.',
          '[PixlStash install page](https://pixlstash.dev/install.html) — installers, Docker, pip, system requirements.',
          '[PixlStash features page](https://pixlstash.dev/features.html) — import, tagging, search, duplicates, sharing, ComfyUI.',
          '[PixlStash AI page](https://pixlstash.dev/ai.html) — models, hardware and downloads.',
          '[PixlStash what\'s new](https://pixlstash.dev/whatsnew.html) — version 1.11 changes and version history.',
          '[PixlStash privacy policy](https://pixlstash.dev/privacy.html) — data handling, update check and install ID.',
          '[PixlStash on GitHub](https://github.com/pikselkroken/pixlstash) — GPL-3.0 license, release assets and star count.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[ComfyUI Review](/power-local-llm/comfyui-review) — the node-based image generator PixlStash integrates with.',
          '[Ollama Vision Models Review](/power-local-llm/ollama-vision-models-review) — running vision models locally for captions and descriptions.',
          '[LLaVA Review](/power-local-llm/llava-review) — an open vision-language model for image understanding.',
          '[Karakeep Review](/power-local-llm/karakeep-review) — self-hosted AI tagging and search for bookmarks and notes.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/pixlstash-review-hero-de.webp',
    title: 'PixlStash Rezension: Selbst gehosteter Bildbibliotheks-Manager mit lokaler KI-Verschlagwortung',
    seoTitle: 'PixlStash Rezension: Bildbibliothek mit lokaler KI',
    intro:
      'PixlStash ist ein selbst gehosteter Manager für Bildbibliotheken, der Bilder mit KI-Modellen auf Ihrem eigenen Rechner verschlagwortet, beschriftet und indexiert und die Suche nach Inhalt oder Gesicht ermöglicht. Diese Rezension beschreibt, was Website, Installationsseite, Datenschutzerklärung und GitHub-Repository dokumentieren, was sie offenlassen und wie das Tool im Vergleich zu anderen Werkzeugen im Verzeichnis abschneidet.',
    metaDescription:
      'PixlStash Rezension: GPL-3.0-Bildbibliotheks-Manager für Windows, macOS und Linux mit lokaler KI-Verschlagwortung, Gesichtssuche und ComfyUI-Anbindung.',
    twitterDescription:
      'PixlStash Rezension: eine kostenlose Desktop- und Server-App unter GPL-3.0, die Bildbibliotheken mit lokalen KI-Modellen verschlagwortet, beschriftet und durchsucht. Installation, Datenschutz, Grenzen und Alternativen.',
    audience:
      'Kreative und Nutzer KI-generierter Bilder mit großen Bildbibliotheken, die lokale Verschlagwortung, Suche und Duplikatbereinigung wünschen — behandelt Installation, Funktionen, Modelle, Datenschutz, Grenzen und Alternativen.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PixlStash Rezension',
    targetKeywords: [
      'pixlstash test',
      'pixlstash',
      'selbst gehosteter bildbibliotheks-manager',
      'lokale ki bildverschlagwortung',
      'semantische bildsuche lokal',
      'gesichtssuche fotobibliothek offline',
      'comfyui bildverwaltung',
      'wd14 florence-2 joycaption tagger',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'AMD ROCm', 'Apple silicon', 'CPU'],
    leadAnswerBlock:
      '**PixlStash ist ein kostenloser Bildbibliotheks-Manager unter GPL-3.0, der als Desktop-App oder als Server ohne Oberfläche läuft und Bilder mit lokalen KI-Modellen verschlagwortet, beschriftet, bewertet und durchsuchbar macht.** Laut Website sendet kein Modell etwas an eine API, und ein Konto ist nicht nötig. Diese Rezension behandelt Version 1.11.5 und beruht auf der öffentlichen Website, der Datenschutzerklärung und dem Repository, nicht auf praktischen Tests.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich PixlStash, um eine große Bildbibliothek mit lokaler KI zu ordnen?',
        answer:
          'Wahrscheinlich, wenn Sie Tausende erzeugte oder fotografierte Bilder besitzen und Verschlagwortung, Gesichtssuche und Duplikatbereinigung ohne Cloud-Dienst wünschen. Prüfen Sie vorher zwei Dinge: Die Website nennt keine Angaben zu RAM, VRAM oder Bibliotheksgröße, und das Projekt ist noch jung.',
        bullets: [
          'Desktop-Installer für Windows, macOS und Linux sowie ein Windows-Server-Installer, Docker und pip.',
          'Vier Tagger (PixlStash Tagger, WD14, Florence-2, JoyCaption), pro Anfrage wählbar.',
          'Semantische Suche, Gesichtssuche, Duplikat-Warteschlange und ein kalibrierter Qualitätswert.',
          'Zweiseitige ComfyUI-Anbindung und die Kommandozeile pixlstash-cli.',
          'Update-Prüfung und Installations-Telemetrie sind laut Datenschutzerklärung standardmäßig deaktiviert.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'PixlStash herunterladen', anchor: 'get-it' },
      { label: 'PixlStash im Überblick', anchor: 'at-a-glance' },
      { label: 'Was PixlStash ist', anchor: 'what-is-pixlstash' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'KI-Modelle und Hardware', anchor: 'models-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'PixlStash im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen PixlStash geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen PixlStash nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'PixlStash ist ein quelloffener Manager für Bildbibliotheken, der vorhandene Ordner importiert, ohne Dateien zu verschieben, und sie mit lokal laufenden KI-Modellen organisiert.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Foto-Manager für Menschen mit riesigen Stapeln KI-generierter oder Referenzbilder vor: Er beschriftet sie, findet Duplikate und lässt Sie suchen, indem Sie ein Bild beschreiben oder ein Gesicht zeigen.',
          },
        ],
        items: [
          'Getestete Version: 1.11.5, veröffentlicht am 8. Oktober 2026; das Repository selbst wurde zuletzt am 17. Oktober 2026 aktualisiert, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Lizenz und Preis: GPL-3.0 laut GitHub-Repository; die Website nennt keine Preise.',
          'Plattformen: Windows x64, macOS nur mit Apple Silicon und Linux x86_64 als Desktop-Apps.',
          'Besondere Funktionen: semantische Suche und Gesichtssuche, Tag-Prüfwarteschlange, Duplikat-Warteschlange, ComfyUI-Knoten.',
          'Reife: ein junges Projekt, das weder eine Liste unterstützter Dateiformate noch Grenzen der Bibliotheksgröße veröffentlicht.',
        ],
      },
      getItPixlstash: {
        id: 'get-it',
        title: 'PixlStash herunterladen',
        content: [
          '**PixlStash wird auf allen drei Desktop-Systemen als Desktop-App mit Doppelklick-Installation geliefert, ein Terminal ist nicht nötig.** Die Dateien hängen an der [aktuellen GitHub-Version](https://github.com/pikselkroken/pixlstash/releases/latest); die Zeilen unten reichen vom einfachsten bis zum aufwendigsten Weg.',
        ],
        columns: ['Plattform', 'Download'],
        rows: [
          { 'Plattform': 'Windows-Desktop-App', 'Download': '[PixlStash-desktop-1.11.5-win-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plattform': 'macOS-Desktop-App', 'Download': '[PixlStash-desktop-1.11.5-mac-arm64.dmg](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plattform': 'Linux-Desktop-App', 'Download': '[AppImage oder .deb](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plattform': 'Windows-Server-Installer', 'Download': '[pixlstash-server-1.11.5-windows-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plattform': 'Docker', 'Download': '[ghcr.io/pikselkroken/pixlstash:latest](https://pixlstash.dev/install.html)' },
          { 'Plattform': 'pip (Python 3.10+)', 'Download': '[pip install pixlstash](https://pixlstash.dev/install.html)' },
          { 'Plattform': 'Website', 'Download': '[pixlstash.dev](https://pixlstash.dev/)' },
          { 'Plattform': 'Datenschutzerklärung', 'Download': '[Datenschutzerklärung von PixlStash](https://pixlstash.dev/privacy.html)' },
          { 'Plattform': 'Quellcode', 'Download': '[github.com/pikselkroken/pixlstash](https://github.com/pikselkroken/pixlstash)' },
        ],
        note: 'Die macOS-App läuft nicht auf Intel-Macs. Unter Linux benötigt das AppImage auf neueren Distributionen möglicherweise libfuse2. Der Windows-Installer ist signiert, dennoch kann SmartScreen beim ersten Start warnen; die Installationsseite erklärt, wie Sie den Herausgeber bestätigen.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixlStash im Überblick',
        columns: ['Merkmal', 'PixlStash'],
        rows: [
          { 'Merkmal': 'Plattform', 'PixlStash': 'Windows, macOS, Linux' },
          { 'Merkmal': 'Preis', 'PixlStash': 'Kostenlos (kein Preis angegeben)' },
          { 'Merkmal': 'Lizenz', 'PixlStash': 'GPL-3.0 (laut GitHub)' },
          { 'Merkmal': 'Ausführung', 'PixlStash': 'Lokal; Modelle laden beim ersten Start' },
          { 'Merkmal': 'Liest Text in Bildern (OCR)', 'PixlStash': 'Auf der Website nicht angegeben' },
          { 'Merkmal': 'Mehrere Bilder pro Prompt', 'PixlStash': 'Auf der Website nicht angegeben' },
          { 'Merkmal': 'Lokale API', 'PixlStash': 'REST-API; Endpunkte nicht dokumentiert' },
        ],
        note: 'Die Merkmale folgen dem Vision-Vergleich im Verzeichnis lokaler LLM-Software. Eine fehlende Angabe auf der Website bedeutet „unbekannt“, nicht „nicht unterstützt“.',
      },
      whatIsPixlstash: {
        id: 'what-is-pixlstash',
        title: 'Was PixlStash ist',
        content: [
          '**PixlStash ist ein Manager für Bildbibliotheken, keine Chat-App und kein Bildgenerator.** Das Repository beschreibt ihn als Werkzeug, um in „einer Bildbibliothek, die außer Kontrolle geraten ist“ Dinge wiederzufinden: Er importiert und verschlagwortet Bilder automatisch, sucht nach Inhalt oder Gesicht und stellt Daten über eine REST-API anderen Werkzeugen wie ComfyUI bereit.',
          'Version 1.11 liest vorhandene Ordner und erstellt aus deren Namen Projekte, Personen und Sets, ohne etwas zu kopieren, zu verschieben oder umzubenennen. Sie können das Tool als Desktop-App oder ohne Oberfläche auf einem Server mit Browser-Oberfläche betreiben.',
          'Diese Rezension stützt sich auf die Website mit ihren Seiten zu Installation, Funktionen, KI und Datenschutz sowie auf das GitHub-Repository. Praktische Tests gab es nicht, daher werden Geschwindigkeit, Genauigkeit der Verschlagwortung und Stabilität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus dem Download eines Installers und dem Verweis auf einen Ordner.** Die Schritte folgen der Installations- und der Funktionsseite.',
        ],
        numberedItems: [
          {
            title: 'Installer für Ihr System wählen',
            whyItMatters: 'Laden Sie die Desktop-App für Windows x64, macOS mit Apple Silicon oder Linux x86_64 von der [Release-Seite](https://github.com/pikselkroken/pixlstash/releases/latest) herunter.',
          },
          {
            title: 'Beim ersten Start ein Backend laden lassen',
            whyItMatters: 'Die App erkennt Ihre Hardware und lädt einmalig ein passendes NVIDIA-, experimentelles AMD- oder CPU-Backend herunter; die Installationsseite beziffert das auf einige hundert MB bis einige GB.',
          },
          {
            title: 'In den Einstellungen eine Bibliothek hinzufügen',
            whyItMatters: 'Wählen Sie einen Ordner; ein Assistent schlägt vor, was jede Ordnerebene bedeutet, und nichts wird verschoben, bevor Sie die Prüfansicht bestätigen.',
          },
          {
            title: 'Vor Updates sichern',
            whyItMatters: 'Laut den Hinweisen zu Version 1.11 kommen Datenbankspalten hinzu; kopieren Sie den Bibliotheksordner, während PixlStash beendet ist.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Kernidee ist, eine große Bibliothek schnell zu prüfen und zu durchsuchen.** Alles Folgende stammt von der Funktionsseite.',
        ],
        items: [
          '**Import am Ort.** Vorhandene Ordner werden zu Projekten, Sets und Personen; Importe laufen im Hintergrund und werden nach einer Unterbrechung fortgesetzt.',
          '**Verschlagwortung und Beschriftung.** Vier Tagger (PixlStash Tagger, WD14, Florence-2, JoyCaption) werden pro Anfrage gewählt, und eine Prüfwarteschlange ordnet die Tags, bei denen die Modelle am wahrscheinlichsten falschliegen.',
          '**Suche.** Beschreiben Sie ein Bild in Worten, finden Sie ähnliche Bilder oder suchen Sie mit einem hochgeladenen Gesicht; Mengenoperationen verknüpfen Figuren und Sets.',
          '**Bewertung.** Ein Smart-Score sortiert große Mengen danach, was sich zu prüfen lohnt, und zieht Punkte für verformte Anatomie und Renderfehler ab.',
          '**Duplikate.** Eine Warteschlange vergleicht Kandidaten, stapelt sie und schiebt Überzählige in einen Schrotthaufen, der gelöschte Bilder wiederherstellt.',
          '**Teilen und Sicherheit.** Schreibgeschützte Freigabelinks mit widerrufbaren Tokens, Rückgängig und Wiederholen sowie tägliche, wöchentliche und monatliche Metadaten-Snapshots.',
          '**Integrationen.** Zweiseitige ComfyUI-Workflows, eigene Python-Plugins und die Kommandozeile pixlstash-cli für Backups.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'KI-Modelle und Hardware',
        content: [
          '**Alle Modelle laufen auf Ihrem Rechner, und die Gewichte werden beim ersten Start geladen.** Die KI-Seite nennt OpenCLIP ViT-B-32 für die semantische Suche, InsightFace SCRFD-10G mit dem Paket buffalo_l für Gesichter und Florence-2 für Beschriftungen und Segmentierung.',
          'Standard-Tagger sind der PixlStash Tagger, beschrieben als Finetune von wd-convnext-tagger-v3, sowie WD14 und JoyCaption. Moondream2 wird über pixlstash-cli als Plugin installiert.',
          'Die Desktop-App enthält eine CPU-Laufzeit, sodass jedes Modell beim ersten Start offline funktioniert. NVIDIA-CUDA-Beschleunigung ist ein optionaler Download, die AMD-ROCm-Unterstützung ist experimentell und nur in der Desktop-App verfügbar, und die Website nennt keine RAM- oder VRAM-Anforderung.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Laut Datenschutzerklärung (zuletzt aktualisiert am 3. August 2026) erreicht Ihre Bibliothek den Entwickler nie.** Sie nennt kein Konto, keine Cloud-Synchronisierung und keinen zentralen Server und beschreibt das Teilen als optional und widerrufbar. Die Update-Prüfung und eine anonyme Installations-ID sind standardmäßig beide deaktiviert; falls aktiviert, senden sie eine Version, einen Installationstyp oder eine zufällige ID, niemals Bibliotheksinhalte.',
          'Modellgewichte stammen von Diensten wie Hugging Face und, bei GPU-Erweiterungen, von PyPI und dem PyTorch-Index, daher braucht der erste Start einen Internetzugang. Die KI-Seite erwähnt außerdem einen Beschrifter für OpenAI-kompatible Vision-APIs; ein von Ihnen konfigurierter Remote-Endpunkt fällt nicht unter die Aussage „nur lokal“.',
          'Die Gesichtsgruppierung erzeugt Gesichts-Embeddings der Personen auf Ihren Bildern. Laut Website bleiben sie auf Ihrem Rechner, doch ob das für Bilder anderer Personen oder für kommerzielle Nutzung zulässig ist, liegt in Ihrer Verantwortung; die Website bietet das Paket AuraFace für kommerzielle Nutzung an und nennt für die übrigen Modelle keine Lizenzbedingungen. Der Code steht laut GitHub unter GPL-3.0, während die Website das Projekt nur als Open Source bezeichnet. Diese Rezension hat den Netzwerkverkehr nicht geprüft, daher sind diese Angaben die des Entwicklers.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Lokale KI-Verschlagwortung',
            'Bedeutung im Alltag': 'Tags und Beschriftungen ohne Hochladen der Bilder.',
            'Einschränkung / Hinweis': 'Modell-Downloads sind groß, Genauigkeitswerte fehlen.',
          },
          {
            'Vorteil': 'Import am Ort',
            'Bedeutung im Alltag': 'Ihre Ordnerstruktur bleibt erhalten.',
            'Einschränkung / Hinweis': 'Weder Dateiformate noch Bibliotheksgrenzen werden genannt.',
          },
          {
            'Vorteil': 'Gesichts- und semantische Suche',
            'Bedeutung im Alltag': 'Personen oder Szenen per Beschreibung finden.',
            'Einschränkung / Hinweis': 'Gesichtsdaten sind personenbezogen; die Nutzung hängt von Ihrem Fall ab.',
          },
          {
            'Vorteil': 'Installer für alle Desktops',
            'Bedeutung im Alltag': 'Herunterladen und öffnen, kein Terminal nötig.',
            'Einschränkung / Hinweis': 'macOS nur mit Apple Silicon; AMD-Unterstützung experimentell.',
          },
          {
            'Vorteil': 'Open Source',
            'Bedeutung im Alltag': 'GPL-3.0-Code zum Einsehen.',
            'Einschränkung / Hinweis': 'Junges Projekt mit wenigen Sternen; die Website nennt keine Lizenz.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixlStash im Vergleich zu Alternativen',
        content: [
          'Das Verzeichnis enthält keinen weiteren Manager für Bildbibliotheken; die folgenden Werkzeuge decken daher nur einen Teil derselben Aufgabe ab: Vision-Modelle, die Bilder beschriften, eine selbst gehostete Verschlagwortungs-App und der Generator, mit dem sich PixlStash verbindet.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'PixlStash',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, GPL-3.0',
            'Rolle': 'Bildbibliotheks-Manager',
            'Wichtigster Unterschied': 'Fertige Verschlagwortung, Gesichtssuche und Duplikatprüfung',
          },
          {
            'App': '[Ollama Vision Models](/de/power-local-llm/ollama-vision-models-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, Lizenz je Modell',
            'Rolle': 'Vision-Modelle per CLI',
            'Wichtigster Unterschied': 'Bilder auf Anfrage beschreiben; keine Bibliothek, keine Suche',
          },
          {
            'App': '[LLaVA](/de/power-local-llm/llava-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, Apache 2.0',
            'Rolle': 'Vision-Sprachmodell',
            'Wichtigster Unterschied': 'Eine Modellbibliothek für Entwickler, keine App',
          },
          {
            'App': '[Karakeep](/de/power-local-llm/karakeep-review)',
            'Plattformen': 'Web, iOS, Android',
            'Preis und Lizenz': 'Kostenlos, AGPL-3.0',
            'Rolle': 'Lesezeichen- und Notiz-App',
            'Wichtigster Unterschied': 'KI-Tags und Suche für Links und Notizen, nicht für Bildordner',
          },
          {
            'App': '[ComfyUI](/de/power-local-llm/comfyui-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Kostenlos, GPL-3.0',
            'Rolle': 'Bildgenerator',
            'Wichtigster Unterschied': 'Erzeugt die Bilder; PixlStash verschlagwortet und sortiert sie',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Drittanbieter-Apps ändern sich häufig. Prüfen Sie die aktuellen Angaben auf der Seite des jeweiligen Projekts, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen PixlStash geeignet ist',
        items: [
          '**Ersteller von KI-Bildern mit Tausenden Ergebnissen.** Verschlagwortung, Bewertung und Duplikatprüfung zielen genau auf diesen Stapel.',
          '**ComfyUI-Nutzer.** Die zweiseitige Anbindung schickt Ergebnisse verschlagwortet zurück.',
          '**Alle, die eine Fotosuche ohne Cloud wünschen.** Semantische und Gesichtssuche laufen auf Ihrem Rechner.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen PixlStash nicht geeignet ist',
        items: [
          '**Besitzer von Intel-Macs.** Die macOS-App gibt es nur für Apple Silicon.',
          '**Teams, die Mehrbenutzerzugriff brauchen.** Die Website beschreibt keine Mehrbenutzerunterstützung.',
          '**Alle, die nachgewiesene Skalierbarkeit brauchen.** Zu Bibliotheksgröße und Leistung gibt es keine Angaben.',
          '**Kommerzielle Nutzer, die die Modelllizenzen nicht geprüft haben.** Nur für die Gesichtspakete gibt es Lizenzhinweise.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Benötigt PixlStash eine GPU?',
            a: 'Nein. Die Desktop-App enthält eine CPU-Laufzeit; NVIDIA-CUDA und die experimentelle AMD-Beschleunigung sind optionale Downloads.',
          },
          {
            q: 'Verschiebt oder verändert PixlStash meine Dateien?',
            a: 'Nicht beim Import: Nichts wird kopiert, verschoben oder umbenannt, bevor Sie die Prüfansicht bestätigen. Später werden Dateien nur verschoben, wenn ein Ordnerlayout ihren aktuellen Ordner ungenau macht, und vorgeschlagene Verschiebungen lassen sich als Stapel rückgängig machen.',
          },
          {
            q: 'Kann ich es auf einem Server statt auf einem Desktop betreiben?',
            a: 'Ja. Ein Windows-Server-Installer, ein Docker-Image und ein pip-Paket stellen die Browser-Oberfläche auf Port 9537 bereit.',
          },
          {
            q: 'Was sind die Release-Kandidaten von Version 1.12?',
            a: 'Es sind Vorabversionen auf GitHub. Diese Rezension behandelt die aktuelle stabile Version 1.11.5.',
          },
          {
            q: 'Gibt es eine Live-Demo?',
            a: 'Ja, die Website verlinkt eine [Live-Demo](https://demo.pixlstash.dev/).',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'PixlStash ist ein vielversprechender Kandidat für Kreative, die eine große Bildbibliothek mit lokaler KI bändigen wollen: Es installiert sich wie eine normale App, liest vorhandene Ordner am Ort und behält seine Modelle auf Ihrem Rechner.',
          'Die Vorbehalte betreffen Reife und Transparenz: keine Liste der Dateiformate, keine Angaben zur Skalierung, eine Website ohne Lizenzangabe und 89 GitHub-Sterne. Probieren Sie es zuerst an einer Kopie eines Ordners aus, bevor Sie es auf ein unersetzliches Archiv loslassen, und sichern Sie vorher.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[PixlStash-Website](https://pixlstash.dev/) — Produktbeschreibung, Aussage zur lokalen KI und Links.',
          '[PixlStash-Installationsseite](https://pixlstash.dev/install.html) — Installer, Docker, pip, Systemanforderungen.',
          '[PixlStash-Funktionsseite](https://pixlstash.dev/features.html) — Import, Verschlagwortung, Suche, Duplikate, Teilen, ComfyUI.',
          '[PixlStash-KI-Seite](https://pixlstash.dev/ai.html) — Modelle, Hardware und Downloads.',
          '[Neuerungen bei PixlStash](https://pixlstash.dev/whatsnew.html) — Änderungen in Version 1.11 und Versionsverlauf.',
          '[PixlStash-Datenschutzerklärung](https://pixlstash.dev/privacy.html) — Datenverarbeitung, Update-Prüfung und Installations-ID.',
          '[PixlStash auf GitHub](https://github.com/pikselkroken/pixlstash) — GPL-3.0-Lizenz, Release-Dateien und Sternzahl.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[ComfyUI Rezension](/de/power-local-llm/comfyui-review) — der knotenbasierte Bildgenerator, mit dem PixlStash zusammenarbeitet.',
          '[Ollama Vision Models Rezension](/de/power-local-llm/ollama-vision-models-review) — Vision-Modelle lokal für Beschriftungen und Beschreibungen nutzen.',
          '[LLaVA Rezension](/de/power-local-llm/llava-review) — ein offenes Vision-Sprachmodell für Bildverständnis.',
          '[Karakeep Rezension](/de/power-local-llm/karakeep-review) — selbst gehostete KI-Verschlagwortung und Suche für Lesezeichen und Notizen.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge für alle Plattformen.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/pixlstash-review-hero-fr.webp',
    title: 'Test de PixlStash : gestionnaire de bibliothèque d’images auto-hébergé avec étiquetage IA local',
    seoTitle: 'Test de PixlStash : bibliothèque d’images avec IA locale',
    intro:
      'PixlStash est un gestionnaire de bibliothèque d’images auto-hébergé qui étiquette, légende et indexe vos images avec des modèles d’IA exécutés sur votre propre machine, puis vous laisse les rechercher par contenu ou par visage. Ce test décrit ce que documentent son site, sa page d’installation, sa politique de confidentialité et son dépôt GitHub, ce qu’ils omettent et comment l’outil se compare aux autres outils de l’annuaire.',
    metaDescription:
      'Test de PixlStash : gestionnaire d’images GPL-3.0 pour Windows, macOS et Linux avec étiquetage IA local, recherche par visage et intégration ComfyUI.',
    twitterDescription:
      'Test de PixlStash : une application de bureau et serveur gratuite sous GPL-3.0 qui étiquette, légende et recherche des bibliothèques d’images avec des modèles d’IA locaux. Installation, confidentialité, limites et alternatives.',
    audience:
      'Créateurs et utilisateurs d’images générées par IA ayant de grandes bibliothèques, qui veulent un étiquetage, une recherche et un nettoyage des doublons en local — couvre l’installation, les fonctions, les modèles, la confidentialité, les limites et les alternatives.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Test de PixlStash',
    targetKeywords: [
      'test pixlstash',
      'pixlstash',
      'gestionnaire de bibliothèque d’images auto-hébergé',
      'étiquetage d’images par ia en local',
      'recherche sémantique d’images en local',
      'recherche par visage photothèque hors ligne',
      'gestionnaire d’images comfyui',
      'wd14 florence-2 joycaption tagger',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'AMD ROCm', 'Apple silicon', 'CPU'],
    leadAnswerBlock:
      '**PixlStash est un gestionnaire de bibliothèque d’images gratuit sous GPL-3.0, qui fonctionne en application de bureau ou en serveur sans interface et utilise des modèles d’IA locaux pour étiqueter, légender, noter et rechercher vos images.** Selon son site, aucun modèle n’envoie quoi que ce soit à une API et aucun compte n’est nécessaire. Ce test porte sur la version 1.11.5 et s’appuie sur le site public, la politique de confidentialité et le dépôt, pas sur des essais pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'PixlStash vaut-il le coup pour organiser une grande bibliothèque d’images avec une IA locale ?',
        answer:
          'Probablement, si vous conservez des milliers d’images générées ou photographiées et voulez étiquetage, recherche par visage et nettoyage des doublons sans service cloud. Vérifiez d’abord deux points : le site ne publie aucun chiffre de RAM, de VRAM ou de taille de bibliothèque, et le projet est encore jeune.',
        bullets: [
          'Installeurs de bureau pour Windows, macOS et Linux, plus un installeur serveur Windows, Docker et pip.',
          'Quatre outils d’étiquetage (PixlStash Tagger, WD14, Florence-2, JoyCaption), au choix pour chaque requête.',
          'Recherche sémantique, recherche par visage, file des doublons et score de qualité calibré.',
          'Intégration ComfyUI dans les deux sens et ligne de commande pixlstash-cli.',
          'La vérification des mises à jour et la télémétrie d’installation sont désactivées par défaut, selon la politique de confidentialité.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir PixlStash', anchor: 'get-it' },
      { label: 'PixlStash en un coup d’œil', anchor: 'at-a-glance' },
      { label: 'Ce qu’est PixlStash', anchor: 'what-is-pixlstash' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Modèles d’IA et matériel', anchor: 'models-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'PixlStash face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui PixlStash convient', anchor: 'who-should-use' },
      { label: 'Pour qui PixlStash ne convient pas', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Pour aller plus loin', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PixlStash est un gestionnaire open source de bibliothèque d’images qui importe vos dossiers existants sans déplacer de fichiers et les organise avec des modèles d’IA exécutés en local.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-le comme un gestionnaire de photos conçu pour ceux qui ont d’énormes piles d’images générées par IA ou de référence : il les étiquette, trouve les doublons et vous laisse chercher en décrivant une image ou en montrant un visage.',
          },
        ],
        items: [
          'Version testée : 1.11.5, publiée le 8 octobre 2026 ; le dépôt lui-même a été mis à jour pour la dernière fois le 17 octobre 2026, donc aucun avertissement de projet abandonné ne s’applique.',
          'Licence et prix : GPL-3.0 selon le dépôt GitHub ; le site n’indique aucun tarif.',
          'Plateformes : Windows x64, macOS sur Apple Silicon uniquement et Linux x86_64 en applications de bureau.',
          'Points forts : recherche sémantique et par visage, file de révision des étiquettes, file des doublons, nœuds ComfyUI.',
          'Maturité : un projet jeune qui ne publie ni liste de formats de fichiers ni limites de taille de bibliothèque.',
        ],
      },
      getItPixlstash: {
        id: 'get-it',
        title: 'Obtenir PixlStash',
        content: [
          '**PixlStash est livré sous forme d’application de bureau à installer en double-cliquant sur les trois systèmes de bureau, sans terminal.** Les fichiers sont joints à la [dernière version GitHub](https://github.com/pikselkroken/pixlstash/releases/latest) ; les lignes ci-dessous vont du moyen le plus simple au plus complexe.',
        ],
        columns: ['Plateforme', 'Téléchargement'],
        rows: [
          { 'Plateforme': 'Application Windows', 'Téléchargement': '[PixlStash-desktop-1.11.5-win-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plateforme': 'Application macOS', 'Téléchargement': '[PixlStash-desktop-1.11.5-mac-arm64.dmg](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plateforme': 'Application Linux', 'Téléchargement': '[AppImage ou .deb](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plateforme': 'Installeur serveur Windows', 'Téléchargement': '[pixlstash-server-1.11.5-windows-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plateforme': 'Docker', 'Téléchargement': '[ghcr.io/pikselkroken/pixlstash:latest](https://pixlstash.dev/install.html)' },
          { 'Plateforme': 'pip (Python 3.10+)', 'Téléchargement': '[pip install pixlstash](https://pixlstash.dev/install.html)' },
          { 'Plateforme': 'Site web', 'Téléchargement': '[pixlstash.dev](https://pixlstash.dev/)' },
          { 'Plateforme': 'Politique de confidentialité', 'Téléchargement': '[Politique de confidentialité de PixlStash](https://pixlstash.dev/privacy.html)' },
          { 'Plateforme': 'Code source', 'Téléchargement': '[github.com/pikselkroken/pixlstash](https://github.com/pikselkroken/pixlstash)' },
        ],
        note: 'L’application macOS ne fonctionne pas sur les Mac Intel. Sous Linux, l’AppImage peut nécessiter libfuse2 sur les distributions récentes. L’installeur Windows est signé, mais SmartScreen peut quand même avertir au premier lancement ; la page d’installation explique comment confirmer l’éditeur.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixlStash en un coup d’œil',
        columns: ['Attribut', 'PixlStash'],
        rows: [
          { 'Attribut': 'Plateforme', 'PixlStash': 'Windows, macOS, Linux' },
          { 'Attribut': 'Prix', 'PixlStash': 'Gratuit (aucun tarif indiqué)' },
          { 'Attribut': 'Licence', 'PixlStash': 'GPL-3.0 (selon GitHub)' },
          { 'Attribut': 'Exécution', 'PixlStash': 'En local ; modèles téléchargés au premier lancement' },
          { 'Attribut': 'Lit le texte des images (OCR)', 'PixlStash': 'Non précisé sur le site' },
          { 'Attribut': 'Plusieurs images par prompt', 'PixlStash': 'Non précisé sur le site' },
          { 'Attribut': 'API locale', 'PixlStash': 'API REST ; points d’accès non documentés' },
        ],
        note: 'Les attributs suivent la comparaison « vision » de l’annuaire des logiciels de LLM locaux. L’absence d’indication sur le site signifie « inconnu », pas « non pris en charge ».',
      },
      whatIsPixlstash: {
        id: 'what-is-pixlstash',
        title: 'Ce qu’est PixlStash',
        content: [
          '**PixlStash est un gestionnaire de bibliothèque d’images, pas une application de chat ni un générateur d’images.** Le dépôt le décrit comme un outil pour retrouver des choses dans « une bibliothèque d’images qui a échappé à tout contrôle » : il importe et étiquette automatiquement les images, cherche par contenu ou par visage et fournit des données à d’autres outils comme ComfyUI via une API REST.',
          'La version 1.11 lit les dossiers que vous avez déjà et crée projets, personnes et ensembles à partir de leurs noms, sans rien copier, déplacer ni renommer. Vous pouvez l’exécuter en application de bureau ou sans interface sur un serveur, avec une interface dans le navigateur.',
          'Ce test s’appuie sur le site web, ses pages d’installation, de fonctionnalités, d’IA et de confidentialité, et sur le dépôt GitHub. Il n’y a pas eu d’essais pratiques : la vitesse, la précision de l’étiquetage et la stabilité ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          '**La mise en route consiste à télécharger un installeur, puis à pointer l’application vers un dossier.** Les étapes suivent les pages d’installation et de fonctionnalités.',
        ],
        numberedItems: [
          {
            title: 'Choisir l’installeur de votre système',
            whyItMatters: 'Téléchargez l’application de bureau pour Windows x64, macOS Apple Silicon ou Linux x86_64 depuis la [page des versions](https://github.com/pikselkroken/pixlstash/releases/latest).',
          },
          {
            title: 'Laisser le premier lancement récupérer un backend',
            whyItMatters: 'L’application détecte votre matériel et télécharge une fois un backend NVIDIA, AMD expérimental ou CPU adapté ; la page d’installation l’estime de quelques centaines de Mo à quelques Go.',
          },
          {
            title: 'Ajouter une bibliothèque dans les réglages',
            whyItMatters: 'Choisissez un dossier ; un assistant propose le sens de chaque niveau de dossier, et rien n’est déplacé tant que vous n’avez pas confirmé l’écran de revue.',
          },
          {
            title: 'Sauvegarder avant de mettre à jour',
            whyItMatters: 'Selon les notes de la version 1.11, des colonnes sont ajoutées à la base de données ; copiez le dossier de la bibliothèque pendant que PixlStash est arrêté.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**L’idée centrale est de passer en revue et de rechercher rapidement une grande bibliothèque.** Tout ce qui suit provient de la page des fonctionnalités.',
        ],
        items: [
          '**Import sur place.** Les dossiers existants deviennent projets, ensembles et personnes ; les imports tournent en arrière-plan et reprennent après une interruption.',
          '**Étiquetage et légendes.** Quatre outils (PixlStash Tagger, WD14, Florence-2, JoyCaption) se choisissent par requête, et une file de révision classe les étiquettes où les modèles se trompent le plus probablement.',
          '**Recherche.** Décrivez une image avec des mots, trouvez des images visuellement proches ou cherchez avec un visage importé ; des opérations d’ensembles combinent personnages et ensembles.',
          '**Notation.** Un score intelligent trie les grands ensembles selon ce qui mérite d’être revu et applique une pénalité pour l’anatomie déformée et les défauts de rendu.',
          '**Doublons.** Une file compare les candidats, les regroupe et envoie les copies en trop dans une corbeille qui restaure les images supprimées.',
          '**Partage et sécurité.** Liens de partage en lecture seule avec jetons révocables, annuler et rétablir, et instantanés de métadonnées quotidiens, hebdomadaires et mensuels.',
          '**Intégrations.** Workflows ComfyUI dans les deux sens, plugins Python personnalisés et ligne de commande pixlstash-cli pour les sauvegardes.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modèles d’IA et matériel',
        content: [
          '**Tous les modèles s’exécutent sur votre machine, et les poids sont téléchargés au premier lancement.** La page IA cite OpenCLIP ViT-B-32 pour la recherche sémantique, InsightFace SCRFD-10G avec le pack buffalo_l pour les visages et Florence-2 pour les légendes et la segmentation.',
          'Les outils d’étiquetage par défaut sont le PixlStash Tagger, décrit comme un finetune de wd-convnext-tagger-v3, ainsi que WD14 et JoyCaption. Moondream2 s’installe comme plugin via pixlstash-cli.',
          'L’application de bureau inclut un runtime CPU, de sorte que tous les modèles fonctionnent hors ligne dès le premier lancement. L’accélération NVIDIA CUDA est un téléchargement optionnel, la prise en charge d’AMD ROCm est expérimentale et réservée à l’application de bureau, et le site ne publie aucune exigence de RAM ou de VRAM.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          '**Selon la politique de confidentialité (dernière mise à jour le 3 août 2026), votre bibliothèque n’atteint jamais le développeur.** Elle indique qu’il n’y a ni compte, ni synchronisation cloud, ni serveur central, et que le partage est optionnel et révocable. La vérification des mises à jour et un identifiant d’installation anonyme sont tous deux désactivés par défaut ; une fois activés, ils envoient une version, un type d’installation ou un identifiant aléatoire, jamais le contenu de la bibliothèque.',
          'Les poids des modèles viennent de services tels que Hugging Face et, pour les extensions GPU, de PyPI et de l’index PyTorch ; le premier lancement exige donc un accès à Internet. La page IA mentionne aussi un outil de légendage pour des API de vision compatibles OpenAI ; tout point d’accès distant que vous configurez sort de l’affirmation « uniquement local ».',
          'Le regroupement des visages crée des embeddings faciaux des personnes présentes sur vos images. Ils restent sur votre machine d’après le site, mais savoir si c’est permis pour des images d’autres personnes ou pour un usage commercial relève de votre responsabilité ; le site propose le pack AuraFace pour l’usage commercial et ne donne aucune condition de licence pour les autres modèles. Le code est sous GPL-3.0 selon GitHub, alors que le site se contente de parler de projet open source. Ce test n’a pas inspecté le trafic réseau : ces affirmations sont celles du développeur.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'En pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Étiquetage IA local',
            'En pratique': 'Étiquettes et légendes sans envoyer les images.',
            'Limite / réserve': 'Téléchargements de modèles volumineux, aucun chiffre de précision.',
          },
          {
            'Avantage': 'Import sur place',
            'En pratique': 'Votre arborescence de dossiers reste intacte.',
            'Limite / réserve': 'Aucune liste de formats ni limite de bibliothèque indiquée.',
          },
          {
            'Avantage': 'Recherche par visage et sémantique',
            'En pratique': 'Retrouver une personne ou une scène par description.',
            'Limite / réserve': 'Les données faciales sont personnelles ; l’usage dépend de votre cas.',
          },
          {
            'Avantage': 'Installeurs pour tous les postes',
            'En pratique': 'Télécharger et ouvrir, sans terminal.',
            'Limite / réserve': 'macOS uniquement sur Apple Silicon ; AMD expérimental.',
          },
          {
            'Avantage': 'Open source',
            'En pratique': 'Code GPL-3.0 que vous pouvez inspecter.',
            'Limite / réserve': 'Projet jeune avec peu d’étoiles ; le site ne cite aucune licence.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixlStash face aux alternatives',
        content: [
          'L’annuaire ne contient aucun autre gestionnaire de bibliothèque d’images ; les outils suivants ne couvrent donc qu’une partie de la même tâche : des modèles de vision qui légendent les images, une application d’étiquetage auto-hébergée et le générateur auquel PixlStash se connecte.',
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence principale'],
        rows: [
          {
            'Application': 'PixlStash',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, GPL-3.0',
            'Rôle': 'Gestionnaire de bibliothèque d’images',
            'Différence principale': 'Étiquetage, recherche par visage et revue des doublons prêts à l’emploi',
          },
          {
            'Application': '[Ollama Vision Models](/fr/power-local-llm/ollama-vision-models-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, licence par modèle',
            'Rôle': 'Modèles de vision en CLI',
            'Différence principale': 'Décrit des images à la demande ; ni bibliothèque ni recherche',
          },
          {
            'Application': '[LLaVA](/fr/power-local-llm/llava-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, Apache 2.0',
            'Rôle': 'Modèle vision-langage',
            'Différence principale': 'Une bibliothèque de modèles pour développeurs, pas une application',
          },
          {
            'Application': '[Karakeep](/fr/power-local-llm/karakeep-review)',
            'Plateformes': 'Web, iOS, Android',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            'Rôle': 'Application de signets et de notes',
            'Différence principale': 'Étiquetage et recherche IA pour liens et notes, pas pour des dossiers d’images',
          },
          {
            'Application': '[ComfyUI](/fr/power-local-llm/comfyui-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix et licence': 'Gratuit, GPL-3.0',
            'Rôle': 'Générateur d’images',
            'Différence principale': 'Génère les images ; PixlStash les étiquette et les trie',
          },
        ],
        note: 'Les plateformes, prix et fonctionnalités des applications tierces changent souvent. Vérifiez les informations actuelles sur la page de chaque projet avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui PixlStash convient',
        items: [
          '**Les créateurs d’images IA avec des milliers de productions.** L’étiquetage, la notation et la revue des doublons visent exactement cette pile.',
          '**Les utilisateurs de ComfyUI.** L’intégration dans les deux sens renvoie les résultats déjà étiquetés.',
          '**Ceux qui veulent une recherche de photos sans cloud.** Les recherches sémantique et par visage s’exécutent sur votre machine.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui PixlStash ne convient pas',
        items: [
          '**Les propriétaires de Mac Intel.** L’application macOS n’existe que pour Apple Silicon.',
          '**Les équipes qui ont besoin d’un accès multi-utilisateur.** Le site ne décrit pas de prise en charge multi-utilisateur.',
          '**Ceux qui ont besoin d’une montée en charge prouvée.** Aucun chiffre de taille de bibliothèque ou de performance n’est publié.',
          '**Les utilisateurs commerciaux qui n’ont pas vérifié les licences des modèles.** Seuls les packs de visages s’accompagnent d’indications de licence.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'PixlStash a-t-il besoin d’un GPU ?',
            a: 'Non. L’application de bureau inclut un runtime CPU ; NVIDIA CUDA et l’accélération AMD expérimentale sont des téléchargements optionnels.',
          },
          {
            q: 'PixlStash déplace-t-il ou modifie-t-il mes fichiers ?',
            a: 'Pas à l’import : rien n’est copié, déplacé ni renommé avant que vous ne confirmiez l’écran de revue. Plus tard, des fichiers ne sont déplacés que si une organisation de dossiers rend leur dossier actuel inexact, et les déplacements proposés peuvent être annulés en lot.',
          },
          {
            q: 'Puis-je l’exécuter sur un serveur plutôt que sur un poste de bureau ?',
            a: 'Oui. Un installeur serveur Windows, une image Docker et un paquet pip servent l’interface du navigateur sur le port 9537.',
          },
          {
            q: 'Que sont les versions candidates de la 1.12 ?',
            a: 'Ce sont des préversions sur GitHub. Ce test porte sur la dernière version stable, la 1.11.5.',
          },
          {
            q: 'Existe-t-il une démo en ligne ?',
            a: 'Oui, le site renvoie vers une [démo en ligne](https://demo.pixlstash.dev/).',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'PixlStash est un choix prometteur pour les créateurs qui veulent dompter une grande bibliothèque d’images avec une IA locale : il s’installe comme une application classique, lit les dossiers existants sur place et garde ses modèles sur votre machine.',
          'Les réserves tiennent à la maturité et à la transparence : pas de liste de formats de fichiers, pas de chiffres de montée en charge, un site qui ne cite aucune licence et 89 étoiles GitHub. Essayez-le d’abord sur une copie d’un dossier avant de le lancer sur une archive irremplaçable, et sauvegardez au préalable.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de PixlStash](https://pixlstash.dev/) — description du produit, affirmation sur l’IA locale et liens.',
          '[Page d’installation de PixlStash](https://pixlstash.dev/install.html) — installeurs, Docker, pip, configuration requise.',
          '[Page des fonctionnalités de PixlStash](https://pixlstash.dev/features.html) — import, étiquetage, recherche, doublons, partage, ComfyUI.',
          '[Page IA de PixlStash](https://pixlstash.dev/ai.html) — modèles, matériel et téléchargements.',
          '[Nouveautés de PixlStash](https://pixlstash.dev/whatsnew.html) — changements de la version 1.11 et historique des versions.',
          '[Politique de confidentialité de PixlStash](https://pixlstash.dev/privacy.html) — traitement des données, vérification des mises à jour et identifiant d’installation.',
          '[PixlStash sur GitHub](https://github.com/pikselkroken/pixlstash) — licence GPL-3.0, fichiers de version et nombre d’étoiles.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Test de ComfyUI](/fr/power-local-llm/comfyui-review) — le générateur d’images à nœuds avec lequel PixlStash s’intègre.',
          '[Test d’Ollama Vision Models](/fr/power-local-llm/ollama-vision-models-review) — exécuter des modèles de vision en local pour légender et décrire.',
          '[Test de LLaVA](/fr/power-local-llm/llava-review) — un modèle vision-langage ouvert pour la compréhension d’images.',
          '[Test de Karakeep](/fr/power-local-llm/karakeep-review) — étiquetage et recherche IA auto-hébergés pour signets et notes.',
          '[L’annuaire complet des logiciels de LLM locaux](/fr/directory) — un annuaire plus large d’outils d’IA locale pour toutes les plateformes.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/pixlstash-review-hero-ja.webp',
    title: 'PixlStashレビュー：ローカルAIでタグ付けするセルフホスト型画像ライブラリ管理ツール',
    seoTitle: 'PixlStashレビュー：ローカルAI画像ライブラリ管理',
    intro:
      'PixlStashは、自分のマシンで動くAIモデルで画像にタグ付け・キャプション生成・インデックス作成を行い、内容や顔で検索できるセルフホスト型の画像ライブラリ管理ツールです。このレビューでは、公式サイト、インストールページ、プライバシーポリシー、GitHubリポジトリに書かれている内容と書かれていない内容、そしてディレクトリ内の他のツールとの違いをまとめます。',
    metaDescription:
      'PixlStashレビュー：Windows・macOS・Linux対応のGPL-3.0画像管理ツール。ローカルAIのタグ付け、顔・意味検索、重複確認、ComfyUI連携。導入方法、プライバシー、制限を解説。',
    twitterDescription:
      'PixlStashレビュー：ローカルAIモデルで画像ライブラリにタグ付け・キャプション生成・検索を行う、GPL-3.0の無料デスクトップ／サーバーアプリ。導入方法、プライバシー、制限、代替ツール。',
    audience:
      '大量の画像を抱え、ローカルでのタグ付け・検索・重複整理を求めるクリエイターやAI画像ユーザー向け。導入、機能、モデル、プライバシー、制限、代替ツールを扱います。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PixlStashレビュー',
    targetKeywords: [
      'pixlstash レビュー',
      'pixlstash',
      'セルフホスト 画像ライブラリ 管理',
      'ローカルAI 画像 タグ付け',
      'ローカル セマンティック画像検索',
      '顔検索 オフライン 写真管理',
      'comfyui 画像管理',
      'wd14 florence-2 joycaption tagger',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'AMD ROCm', 'Apple silicon', 'CPU'],
    leadAnswerBlock:
      '**PixlStashは、デスクトップアプリまたはヘッドレスサーバーとして動作する無料のGPL-3.0画像ライブラリ管理ツールで、ローカルAIモデルを使って画像のタグ付け、キャプション生成、スコア付け、検索を行います。**公式サイトによれば、どのモデルもAPIに何も送信せず、アカウントも不要です。このレビューはバージョン1.11.5が対象で、公開されているサイト、プライバシーポリシー、リポジトリに基づいており、実機での検証は行っていません。',
    quickAnswerTop: {
      ja: {
        question: '大量の画像ライブラリをローカルAIで整理するのにPixlStashは試す価値がありますか？',
        answer:
          'おそらくあります。生成画像や撮影画像が数千枚あり、クラウドサービスなしでタグ付け、顔検索、重複整理をしたい場合に向いています。事前に確認したいのは2点です。公式サイトにはRAM、VRAM、ライブラリ規模の数値が載っていないこと、そしてプロジェクトがまだ新しいことです。',
        bullets: [
          'Windows・macOS・Linux向けデスクトップインストーラーに加え、Windowsサーバーインストーラー、Docker、pipに対応。',
          '4種類のタガー（PixlStash Tagger、WD14、Florence-2、JoyCaption）をリクエストごとに選択可能。',
          'セマンティック検索、顔検索、重複キュー、補正済みの品質スコア。',
          'ComfyUIとの双方向連携とpixlstash-cliコマンドライン。',
          'プライバシーポリシーによると、更新確認とインストールのテレメトリーはどちらも初期状態でオフ。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'PixlStashを入手する', anchor: 'get-it' },
      { label: 'PixlStashの概要', anchor: 'at-a-glance' },
      { label: 'PixlStashとは', anchor: 'what-is-pixlstash' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'AIモデルとハードウェア', anchor: 'models-hardware' },
      { label: 'プライバシー、ライセンス、費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'PixlStashと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'PixlStashが向いている人', anchor: 'who-should-use' },
      { label: 'PixlStashが向いていない人', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
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
            text: 'PixlStashは、既存のフォルダーをファイルを移動せずに取り込み、ローカルで動くAIモデルで整理するオープンソースの画像ライブラリ管理ツールです。',
          },
          {
            type: 'plain-terms',
            text: '大量のAI生成画像や参考画像を持つ人向けの写真管理ツールだと考えてください。画像にタグを付け、重複を見つけ、画像の説明や顔を手がかりに検索できます。',
          },
        ],
        items: [
          '確認したバージョン：1.11.5（2026年10月8日公開）。リポジトリ自体は2026年10月17日に更新されているため、放置プロジェクトの警告は該当しません。',
          'ライセンスと価格：GitHubリポジトリによるとGPL-3.0。公式サイトに価格の記載はありません。',
          '対応環境：デスクトップアプリはWindows x64、macOSはApple Siliconのみ、Linux x86_64。',
          '主な機能：セマンティック検索と顔検索、タグ確認キュー、重複キュー、ComfyUIノード。',
          '成熟度：新しいプロジェクトで、対応ファイル形式の一覧もライブラリ規模の上限も公開されていません。',
        ],
      },
      getItPixlstash: {
        id: 'get-it',
        title: 'PixlStashを入手する',
        content: [
          '**PixlStashは、3つのデスクトップOSすべてでダブルクリックで入れられるデスクトップアプリとして配布されており、ターミナルは不要です。**ファイルは[最新のGitHubリリース](https://github.com/pikselkroken/pixlstash/releases/latest)に添付されています。下の表は簡単な方法から順に並べています。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          { 'プラットフォーム': 'Windowsデスクトップアプリ', '入手先': '[PixlStash-desktop-1.11.5-win-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'プラットフォーム': 'macOSデスクトップアプリ', '入手先': '[PixlStash-desktop-1.11.5-mac-arm64.dmg](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'プラットフォーム': 'Linuxデスクトップアプリ', '入手先': '[AppImageまたは.deb](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'プラットフォーム': 'Windowsサーバーインストーラー', '入手先': '[pixlstash-server-1.11.5-windows-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'プラットフォーム': 'Docker', '入手先': '[ghcr.io/pikselkroken/pixlstash:latest](https://pixlstash.dev/install.html)' },
          { 'プラットフォーム': 'pip（Python 3.10以上）', '入手先': '[pip install pixlstash](https://pixlstash.dev/install.html)' },
          { 'プラットフォーム': '公式サイト', '入手先': '[pixlstash.dev](https://pixlstash.dev/)' },
          { 'プラットフォーム': 'プライバシーポリシー', '入手先': '[PixlStashのプライバシーポリシー](https://pixlstash.dev/privacy.html)' },
          { 'プラットフォーム': 'ソースコード', '入手先': '[github.com/pikselkroken/pixlstash](https://github.com/pikselkroken/pixlstash)' },
        ],
        note: 'macOS版はIntel Macでは動作しません。Linuxでは、新しいディストリビューションでAppImageにlibfuse2が必要になる場合があります。Windowsのインストーラーは署名されていますが、初回起動時にSmartScreenが警告を出すことがあります。発行元の確認方法はインストールページに記載されています。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixlStashの概要',
        columns: ['項目', 'PixlStash'],
        rows: [
          { '項目': '対応プラットフォーム', 'PixlStash': 'Windows、macOS、Linux' },
          { '項目': '価格', 'PixlStash': '無料（価格の記載なし）' },
          { '項目': 'ライセンス', 'PixlStash': 'GPL-3.0（GitHubによる）' },
          { '項目': '実行場所', 'PixlStash': 'ローカル。モデルは初回起動時にダウンロード' },
          { '項目': '画像内の文字認識（OCR）', 'PixlStash': 'サイトに記載なし' },
          { '項目': '1回のプロンプトで複数画像', 'PixlStash': 'サイトに記載なし' },
          { '項目': 'ローカルAPI', 'PixlStash': 'REST API。エンドポイントは未公開' },
        ],
        note: 'この項目は、ローカルLLMソフトウェアディレクトリで使っているビジョン比較に沿っています。サイトに記載がないことは「不明」を意味し、「非対応」ではありません。',
      },
      whatIsPixlstash: {
        id: 'what-is-pixlstash',
        title: 'PixlStashとは',
        content: [
          '**PixlStashは画像ライブラリ管理ツールであり、チャットアプリでも画像生成ツールでもありません。**リポジトリでは、「手に負えなくなった画像ライブラリ」から目的の画像を探すためのツールと説明されています。画像を自動で取り込んでタグ付けし、内容や顔で検索し、REST API経由でComfyUIなど他のツールにデータを提供します。',
          'バージョン1.11は、すでにあるフォルダーを読み取り、その名前からプロジェクト、人物、セットを作成します。ファイルのコピー、移動、名前変更は行いません。デスクトップアプリとして、またはブラウザー画面を備えたサーバーでヘッドレス運用できます。',
          'このレビューは、公式サイトのインストール・機能・AI・プライバシーの各ページとGitHubリポジトリに基づいています。実機での検証は行っていないため、速度、タグ付けの精度、安定性は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、インストーラーをダウンロードしてフォルダーを指定するだけです。**手順はインストールページと機能ページに沿っています。',
        ],
        numberedItems: [
          {
            title: 'お使いのOS向けインストーラーを選ぶ',
            whyItMatters: '[リリースページ](https://github.com/pikselkroken/pixlstash/releases/latest)から、Windows x64、Apple SiliconのmacOS、Linux x86_64のいずれかのデスクトップアプリをダウンロードします。',
          },
          {
            title: '初回起動でバックエンドを取得する',
            whyItMatters: 'アプリがハードウェアを検出し、NVIDIA、実験的なAMD、CPUのうち合うバックエンドを一度だけダウンロードします。インストールページでは数百MBから数GBとされています。',
          },
          {
            title: '設定でライブラリを追加する',
            whyItMatters: 'フォルダーを選ぶと、ウィザードが各階層の意味を提案します。確認画面で承認するまで、何も移動されません。',
          },
          {
            title: '更新前にバックアップする',
            whyItMatters: '1.11のリリースノートによると、データベースに列が追加されます。PixlStashを停止した状態でライブラリフォルダーをコピーしてください。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**中心となる考え方は、大量のライブラリを素早く確認して検索できるようにすることです。**以下はすべて機能ページの記載に基づきます。',
        ],
        items: [
          '**その場で取り込み。**既存のフォルダーがプロジェクト、セット、人物になります。取り込みはバックグラウンドで動き、中断しても再開します。',
          '**タグ付けとキャプション。**4種類のタガー（PixlStash Tagger、WD14、Florence-2、JoyCaption）をリクエストごとに選べます。確認キューでは、モデルが間違えやすいタグが順に並びます。',
          '**検索。**画像を言葉で説明する、見た目が近い画像を探す、アップロードした顔で探す、といった検索ができます。集合演算でキャラクターやセットを組み合わせられます。',
          '**スコア付け。**スマートスコアが、確認する価値の高い順に大量の画像を並べ替え、崩れた人体や描画の不具合にはペナルティを付けます。',
          '**重複。**キューで候補を比較してスタックにまとめ、余分なものは削除した画像を戻せるごみ箱に送ります。',
          '**共有と安全性。**失効できるトークン付きの読み取り専用共有リンク、元に戻す・やり直す、日次・週次・月次のメタデータスナップショット。',
          '**連携。**ComfyUIとの双方向ワークフロー、独自のPythonプラグイン、バックアップ用のpixlstash-cliコマンドライン。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'AIモデルとハードウェア',
        content: [
          '**すべてのモデルは自分のマシンで動作し、重みは初回起動時にダウンロードされます。**AIページには、セマンティック検索にOpenCLIP ViT-B-32、顔にbuffalo_lパックのInsightFace SCRFD-10G、キャプションとセグメンテーションにFlorence-2が挙げられています。',
          '標準のタガーは、wd-convnext-tagger-v3のファインチューンとされるPixlStash Taggerに加え、WD14とJoyCaptionです。Moondream2はpixlstash-cli経由でプラグインとしてインストールします。',
          'デスクトップアプリにはCPUランタイムが含まれるため、すべてのモデルが初回起動からオフラインで動きます。NVIDIA CUDAの高速化は任意のダウンロードで、AMD ROCmへの対応は実験的でデスクトップアプリのみです。公式サイトにRAMやVRAMの要件は載っていません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー、ライセンス、費用',
        content: [
          '**プライバシーポリシー（2026年8月3日更新）によると、ライブラリが開発者に届くことはありません。**アカウント、クラウド同期、中央サーバーはなく、共有は任意で取り消せるとされています。更新確認と匿名のインストールIDはどちらも初期状態でオフです。有効にした場合に送られるのは、バージョン、インストール種別、ランダムなIDで、ライブラリの内容は含まれません。',
          'モデルの重みはHugging Faceなどのサービスから、GPUアドオンはPyPIとPyTorchのインデックスから取得されるため、初回起動にはインターネット接続が必要です。AIページにはOpenAI互換のビジョンAPI向けキャプション機能も記載されています。ユーザーが設定したリモートのエンドポイントは「ローカルのみ」という説明の対象外です。',
          '顔のグルーピングでは、画像に写る人物の顔埋め込みが作成されます。サイトによればそれらは手元のマシンに残りますが、他人が写った画像や商用利用で許されるかどうかは利用者の責任です。サイトは商用利用向けにAuraFaceパックを案内していますが、他のモデルのライセンス条件は示していません。コードはGitHubによればGPL-3.0ですが、サイトは単にオープンソースと述べるのみです。このレビューではネットワーク通信を検査していないため、これらは開発者自身の説明です。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: ['メリット', '実際の使い勝手', '制限・注意点'],
        rows: [
          {
            'メリット': 'ローカルAIのタグ付け',
            '実際の使い勝手': '画像をアップロードせずにタグとキャプションを付けられる。',
            '制限・注意点': 'モデルのダウンロードが大きく、精度の数値は公開されていない。',
          },
          {
            'メリット': 'その場で取り込み',
            '実際の使い勝手': '既存のフォルダー構成がそのまま残る。',
            '制限・注意点': '対応ファイル形式やライブラリの上限は記載なし。',
          },
          {
            'メリット': '顔検索とセマンティック検索',
            '実際の使い勝手': '人物や場面を説明文で探せる。',
            '制限・注意点': '顔データは個人データで、利用可否は状況による。',
          },
          {
            'メリット': '全デスクトップ向けインストーラー',
            '実際の使い勝手': 'ダウンロードして開くだけ。ターミナル不要。',
            '制限・注意点': 'macOSはApple Siliconのみ。AMD対応は実験的。',
          },
          {
            'メリット': 'オープンソース',
            '実際の使い勝手': 'GPL-3.0のコードを確認できる。',
            '制限・注意点': 'スターが少ない新しいプロジェクト。サイトにライセンス記載なし。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixlStashと代替ツールの比較',
        content: [
          'ディレクトリには他の画像ライブラリ管理ツールがないため、ここでは同じ作業の一部をカバーするツールを挙げます。画像にキャプションを付けるビジョンモデル、セルフホスト型のタグ付けアプリ、PixlStashが連携する画像生成ツールです。',
        ],
        columns: ['アプリ', '対応環境', '価格とライセンス', '役割', '主な違い'],
        rows: [
          {
            'アプリ': 'PixlStash',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、GPL-3.0',
            '役割': '画像ライブラリ管理',
            '主な違い': 'タグ付け、顔検索、重複確認がそのまま使える',
          },
          {
            'アプリ': '[Ollama Vision Models](/ja/power-local-llm/ollama-vision-models-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、モデルごとのライセンス',
            '役割': 'CLIのビジョンモデル',
            '主な違い': '依頼に応じて画像を説明する。ライブラリや検索はない',
          },
          {
            'アプリ': '[LLaVA](/ja/power-local-llm/llava-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、Apache 2.0',
            '役割': '視覚言語モデル',
            '主な違い': '開発者向けのモデルライブラリで、アプリではない',
          },
          {
            'アプリ': '[Karakeep](/ja/power-local-llm/karakeep-review)',
            '対応環境': 'Web、iOS、Android',
            '価格とライセンス': '無料、AGPL-3.0',
            '役割': 'ブックマーク＆メモアプリ',
            '主な違い': 'リンクやメモ向けのAIタグ付けと検索で、画像フォルダー向けではない',
          },
          {
            'アプリ': '[ComfyUI](/ja/power-local-llm/comfyui-review)',
            '対応環境': 'Windows、macOS、Linux',
            '価格とライセンス': '無料、GPL-3.0',
            '役割': '画像生成ツール',
            '主な違い': '画像を生成する側。PixlStashはそれにタグを付けて整理する',
          },
        ],
        note: '他社アプリの対応環境、価格、機能は頻繁に変わります。決める前に、各プロジェクトの公式ページで最新情報を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'PixlStashが向いている人',
        items: [
          '**数千枚のAI生成画像を持つクリエイター。**タグ付け、スコア付け、重複確認はまさにその山を対象にしています。',
          '**ComfyUIユーザー。**双方向連携により、結果がタグ付きで戻ってきます。',
          '**クラウドを使わない写真検索を求める人。**セマンティック検索と顔検索は手元のマシンで動きます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'PixlStashが向いていない人',
        items: [
          '**Intel Macをお使いの人。**macOS版はApple Siliconのみです。',
          '**複数ユーザーでのアクセスが必要なチーム。**サイトにマルチユーザー対応の説明はありません。',
          '**実績のあるスケールが必要な人。**ライブラリ規模や性能の数値は公開されていません。',
          '**モデルのライセンスを確認していない商用ユーザー。**ライセンスの案内があるのは顔パックだけです。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'PixlStashにGPUは必要ですか？',
            a: 'いいえ。デスクトップアプリにはCPUランタイムが含まれています。NVIDIA CUDAと実験的なAMD高速化は任意のダウンロードです。',
          },
          {
            q: 'PixlStashはファイルを移動したり変更したりしますか？',
            a: '取り込み時にはしません。確認画面で承認するまで、コピー、移動、名前変更は行われません。その後、フォルダーレイアウトによって現在のフォルダーが実態に合わなくなった場合にだけファイルが移動され、提案された移動はまとめて元に戻せます。',
          },
          {
            q: 'デスクトップではなくサーバーで動かせますか？',
            a: 'はい。Windowsサーバーインストーラー、Dockerイメージ、pipパッケージのいずれでも、ポート9537でブラウザー画面を提供します。',
          },
          {
            q: 'v1.12のリリース候補とは何ですか？',
            a: 'GitHub上のプレリリースです。このレビューは最新の安定版1.11.5が対象です。',
          },
          {
            q: 'ライブデモはありますか？',
            a: 'はい。サイトから[ライブデモ](https://demo.pixlstash.dev/)にリンクされています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'PixlStashは、大量の画像ライブラリをローカルAIで整理したいクリエイターに有望な選択肢です。通常のアプリのようにインストールでき、既存のフォルダーをその場で読み取り、モデルを手元のマシンに置いたままにします。',
          '注意点は成熟度と透明性です。ファイル形式の一覧もスケールの数値もなく、サイトにライセンスの記載がなく、GitHubのスターは89です。かけがえのないアーカイブに使う前に、まずフォルダーのコピーで試し、事前にバックアップを取ってください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[PixlStash公式サイト](https://pixlstash.dev/) — 製品説明、ローカルAIの説明、リンク。',
          '[PixlStashのインストールページ](https://pixlstash.dev/install.html) — インストーラー、Docker、pip、動作環境。',
          '[PixlStashの機能ページ](https://pixlstash.dev/features.html) — 取り込み、タグ付け、検索、重複、共有、ComfyUI。',
          '[PixlStashのAIページ](https://pixlstash.dev/ai.html) — モデル、ハードウェア、ダウンロード。',
          '[PixlStashの新機能](https://pixlstash.dev/whatsnew.html) — バージョン1.11の変更点とバージョン履歴。',
          '[PixlStashのプライバシーポリシー](https://pixlstash.dev/privacy.html) — データの扱い、更新確認、インストールID。',
          '[GitHubのPixlStash](https://github.com/pikselkroken/pixlstash) — GPL-3.0ライセンス、リリースファイル、スター数。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ComfyUIレビュー](/ja/power-local-llm/comfyui-review) — PixlStashが連携するノードベースの画像生成ツール。',
          '[Ollama Vision Modelsレビュー](/ja/power-local-llm/ollama-vision-models-review) — ビジョンモデルをローカルで動かしてキャプションや説明を作る。',
          '[LLaVAレビュー](/ja/power-local-llm/llava-review) — 画像理解のためのオープンな視覚言語モデル。',
          '[Karakeepレビュー](/ja/power-local-llm/karakeep-review) — ブックマークとメモ向けのセルフホスト型AIタグ付けと検索。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/directory) — 全プラットフォームのローカルAIツールを集めた幅広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/pixlstash-review-hero-zh.webp',
    title: 'PixlStash评测：支持本地AI打标签的自托管图像库管理工具',
    seoTitle: 'PixlStash评测：本地AI图像库管理与搜索工具详解',
    intro:
      'PixlStash是一款自托管的图像库管理工具，用在你自己电脑上运行的AI模型为图片打标签、生成描述并建立索引，还能按内容或人脸搜索。本评测梳理其官网、安装页、隐私政策和GitHub仓库中写明了什么、没有写什么，以及它与目录中其他工具的差异。',
    metaDescription:
      'PixlStash评测：适用于Windows、macOS和Linux的GPL-3.0图像库管理工具，支持本地AI打标签、人脸与语义搜索、重复项审核及ComfyUI集成。介绍安装方式、隐私与限制。',
    twitterDescription:
      'PixlStash评测：一款免费的GPL-3.0桌面与服务器应用，用本地AI模型为图像库打标签、生成描述并搜索。涵盖安装方式、隐私、限制和替代工具。',
    audience:
      '拥有大量图片、希望在本地完成打标签、搜索和重复项清理的创作者与AI绘图用户——涵盖安装、功能、模型、隐私、限制和替代工具。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PixlStash评测',
    targetKeywords: [
      'pixlstash 评测',
      'pixlstash',
      '自托管图像库管理',
      '本地AI图片打标签',
      '本地语义图片搜索',
      '离线人脸搜索 相册',
      'comfyui 图片管理',
      'wd14 florence-2 joycaption tagger',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'AMD ROCm', 'Apple silicon', 'CPU'],
    leadAnswerBlock:
      '**PixlStash是一款免费的GPL-3.0图像库管理工具，可作为桌面应用或无界面服务器运行，用本地AI模型为图片打标签、生成描述、评分和搜索。**官网称没有任何模型会向API发送数据，也无需账号。本评测针对1.11.5版本，依据的是公开的官网、隐私政策和代码仓库，并非实际上手测试。',
    quickAnswerTop: {
      zh: {
        question: '想用本地AI整理大型图像库，PixlStash值得一试吗？',
        answer:
          '很可能值得。如果你有数千张生成或拍摄的图片，想在不依赖云服务的情况下完成打标签、人脸搜索和重复项清理，它比较合适。请先确认两点：官网没有公布RAM、VRAM或图像库规模的数据，而且该项目还比较新。',
        bullets: [
          '提供Windows、macOS和Linux桌面安装包，另有Windows服务器安装包、Docker和pip。',
          '四种打标签工具（PixlStash Tagger、WD14、Florence-2、JoyCaption），每次请求可单独选择。',
          '语义搜索、人脸搜索、重复项队列和经过校准的质量评分。',
          '与ComfyUI双向集成，并提供pixlstash-cli命令行。',
          '据隐私政策，更新检查和安装遥测默认均为关闭。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '获取PixlStash', anchor: 'get-it' },
      { label: 'PixlStash概览', anchor: 'at-a-glance' },
      { label: 'PixlStash是什么', anchor: 'what-is-pixlstash' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: 'AI模型与硬件', anchor: 'models-hardware' },
      { label: '隐私、许可证与费用', anchor: 'privacy' },
      { label: '优势与限制', anchor: 'tradeoffs' },
      { label: 'PixlStash与替代工具对比', anchor: 'vs-alternatives' },
      { label: '适合使用PixlStash的人', anchor: 'who-should-use' },
      { label: '不适合使用PixlStash的人', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'PixlStash是一款开源图像库管理工具，可直接导入现有文件夹而不移动文件，并用本地运行的AI模型进行整理。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作为拥有大量AI生成图或参考图的人设计的照片管理器：它给图片打标签、找出重复项，并让你通过描述画面或展示人脸来搜索。',
          },
        ],
        items: [
          '评测版本：1.11.5，发布于2026年10月8日；仓库本身最近一次更新在2026年10月17日，因此不适用项目停更警告。',
          '许可证与价格：据GitHub仓库为GPL-3.0；官网未列出价格。',
          '平台：桌面应用支持Windows x64、仅限Apple Silicon的macOS，以及Linux x86_64。',
          '突出功能：语义搜索与人脸搜索、标签审核队列、重复项队列、ComfyUI节点。',
          '成熟度：项目较新，既没有公布支持的文件格式列表，也没有公布图像库规模上限。',
        ],
      },
      getItPixlstash: {
        id: 'get-it',
        title: '获取PixlStash',
        content: [
          '**PixlStash在三大桌面系统上都以双击即可安装的桌面应用形式提供，无需使用终端。**文件附在[最新GitHub发布版](https://github.com/pikselkroken/pixlstash/releases/latest)中；下表从最简单的方式排到最复杂的方式。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': 'Windows桌面应用', '获取方式': '[PixlStash-desktop-1.11.5-win-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { '平台': 'macOS桌面应用', '获取方式': '[PixlStash-desktop-1.11.5-mac-arm64.dmg](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { '平台': 'Linux桌面应用', '获取方式': '[AppImage或.deb](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { '平台': 'Windows服务器安装包', '获取方式': '[pixlstash-server-1.11.5-windows-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { '平台': 'Docker', '获取方式': '[ghcr.io/pikselkroken/pixlstash:latest](https://pixlstash.dev/install.html)' },
          { '平台': 'pip（Python 3.10+）', '获取方式': '[pip install pixlstash](https://pixlstash.dev/install.html)' },
          { '平台': '官网', '获取方式': '[pixlstash.dev](https://pixlstash.dev/)' },
          { '平台': '隐私政策', '获取方式': '[PixlStash隐私政策](https://pixlstash.dev/privacy.html)' },
          { '平台': '源代码', '获取方式': '[github.com/pikselkroken/pixlstash](https://github.com/pikselkroken/pixlstash)' },
        ],
        note: 'macOS应用无法在Intel Mac上运行。在较新的Linux发行版上，AppImage可能需要libfuse2。Windows安装包已签名，但首次运行时SmartScreen仍可能提示；安装页说明了如何确认发布者。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixlStash概览',
        columns: ['属性', 'PixlStash'],
        rows: [
          { '属性': '平台', 'PixlStash': 'Windows、macOS、Linux' },
          { '属性': '价格', 'PixlStash': '免费（未列出价格）' },
          { '属性': '许可证', 'PixlStash': 'GPL-3.0（据GitHub）' },
          { '属性': '运行方式', 'PixlStash': '本地运行；模型在首次启动时下载' },
          { '属性': '识别图片中的文字（OCR）', 'PixlStash': '官网未说明' },
          { '属性': '单次提示词多张图片', 'PixlStash': '官网未说明' },
          { '属性': '本地API', 'PixlStash': 'REST API；端点未公开文档' },
        ],
        note: '这些属性沿用本地LLM软件目录中的视觉类对比。官网未提及表示“未知”，而不是“不支持”。',
      },
      whatIsPixlstash: {
        id: 'what-is-pixlstash',
        title: 'PixlStash是什么',
        content: [
          '**PixlStash是图像库管理工具，不是聊天应用，也不是图像生成器。**仓库将其描述为在“已经失控的图像库”中找东西的工具：它自动导入并给图片打标签，按内容或人脸搜索，并通过REST API向ComfyUI等其他工具提供数据。',
          '1.11版会读取你已有的文件夹，并根据文件夹名称创建项目、人物和集合，不会复制、移动或重命名任何文件。你可以把它作为桌面应用使用，也可以在服务器上无界面运行并通过浏览器访问。',
          '本评测依据官网的安装、功能、AI和隐私页面以及GitHub仓库。我们没有实际上手测试，因此这里不评价速度、打标签的准确度和稳定性。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置流程是下载安装包，然后让应用指向一个文件夹。**步骤依据安装页和功能页。',
        ],
        numberedItems: [
          {
            title: '选择适合你系统的安装包',
            whyItMatters: '从[发布页](https://github.com/pikselkroken/pixlstash/releases/latest)下载适用于Windows x64、Apple Silicon版macOS或Linux x86_64的桌面应用。',
          },
          {
            title: '让首次运行获取后端',
            whyItMatters: '应用会检测你的硬件，并一次性下载匹配的NVIDIA、实验性AMD或CPU后端；安装页给出的大小是几百MB到几GB。',
          },
          {
            title: '在设置中添加图像库',
            whyItMatters: '选择一个文件夹，向导会建议每一层文件夹的含义；在你确认审核界面之前不会移动任何内容。',
          },
          {
            title: '升级前先备份',
            whyItMatters: '1.11的发布说明提到它会给数据库新增列，请在PixlStash停止运行时复制图像库文件夹。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**核心思路是快速审阅和搜索大型图像库。**以下内容均来自功能页。',
        ],
        items: [
          '**原地导入。**现有文件夹会变成项目、集合和人物；导入在后台运行，中断后可继续。',
          '**打标签与描述。**四种打标签工具（PixlStash Tagger、WD14、Florence-2、JoyCaption）按请求选择，审核队列会把模型最可能出错的标签排在前面。',
          '**搜索。**用文字描述画面、查找外观相似的图片，或用上传的人脸搜索；集合运算可组合角色和集合。',
          '**评分。**智能评分按值得审阅的程度对大量图片排序，并对畸形人体和渲染缺陷扣分。',
          '**重复项。**队列会比较候选项、将其合并为堆叠，并把多余的图片放入可恢复已删除图片的回收区。',
          '**分享与安全。**带可撤销令牌的只读分享链接、撤销与重做，以及每日、每周、每月的元数据快照。',
          '**集成。**与ComfyUI的双向工作流、自定义Python插件，以及用于备份的pixlstash-cli命令行。',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'AI模型与硬件',
        content: [
          '**所有模型都在你的电脑上运行，权重在首次启动时下载。**AI页面列出：语义搜索用OpenCLIP ViT-B-32，人脸用InsightFace SCRFD-10G配buffalo_l包，描述与分割用Florence-2。',
          '默认的打标签工具是PixlStash Tagger（据称是wd-convnext-tagger-v3的微调版），另有WD14和JoyCaption。Moondream2可通过pixlstash-cli作为插件安装。',
          '桌面应用内置CPU运行时，因此所有模型从首次启动起即可离线运行。NVIDIA CUDA加速是可选下载，AMD ROCm支持属于实验性质且仅限桌面应用，官网没有公布RAM或VRAM要求。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可证与费用',
        content: [
          '**据隐私政策（2026年8月3日更新），你的图像库永远不会到达开发者手中。**政策称没有账号、云同步和中央服务器，分享是可选且可撤销的。更新检查和匿名安装ID默认均为关闭；开启后只会发送版本、安装类型或随机ID，绝不包含图像库内容。',
          '模型权重来自Hugging Face等服务，GPU附加组件则来自PyPI和PyTorch索引，因此首次运行需要联网。AI页面还提到一个面向OpenAI兼容视觉API的描述工具；你配置的任何远程端点都不在“仅限本地”的说法之内。',
          '人脸分组会为图片中的人物生成人脸嵌入。据官网，这些数据保留在你的电脑上，但对他人的照片或商业用途是否允许，需要你自行负责；官网为商业用途提供AuraFace包，对其余模型没有给出许可条款。据GitHub，代码采用GPL-3.0，而官网只称其为开源。本评测没有检查网络流量，因此这些说法均来自开发者本人。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与限制',
        columns: ['优势', '实际使用中的意义', '限制 / 注意事项'],
        rows: [
          {
            '优势': '本地AI打标签',
            '实际使用中的意义': '无需上传图片即可获得标签和描述。',
            '限制 / 注意事项': '模型下载体积大，也没有公布准确率数据。',
          },
          {
            '优势': '原地导入',
            '实际使用中的意义': '保留你原有的文件夹结构。',
            '限制 / 注意事项': '未说明支持的文件格式或图像库上限。',
          },
          {
            '优势': '人脸与语义搜索',
            '实际使用中的意义': '通过描述找到某个人或某个场景。',
            '限制 / 注意事项': '人脸数据属于个人数据，能否使用取决于你的情况。',
          },
          {
            '优势': '覆盖各桌面系统的安装包',
            '实际使用中的意义': '下载后直接打开，无需终端。',
            '限制 / 注意事项': 'macOS仅限Apple Silicon；AMD支持为实验性质。',
          },
          {
            '优势': '开源',
            '实际使用中的意义': 'GPL-3.0代码可供检查。',
            '限制 / 注意事项': '项目较新、星标不多；官网未写明许可证。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixlStash与替代工具对比',
        content: [
          '目录中没有其他图像库管理工具，所以下面列出的是只覆盖同一任务一部分的工具：给图片生成描述的视觉模型、自托管的打标签应用，以及PixlStash所连接的图像生成器。',
        ],
        columns: ['应用', '平台', '价格与许可证', '角色', '主要区别'],
        rows: [
          {
            '应用': 'PixlStash',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，GPL-3.0',
            '角色': '图像库管理工具',
            '主要区别': '开箱即用的打标签、人脸搜索和重复项审核',
          },
          {
            '应用': '[Ollama Vision Models](/zh/power-local-llm/ollama-vision-models-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，按模型授权',
            '角色': '命令行视觉模型',
            '主要区别': '按需描述图片；没有图像库，也没有搜索',
          },
          {
            '应用': '[LLaVA](/zh/power-local-llm/llava-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，Apache 2.0',
            '角色': '视觉语言模型',
            '主要区别': '面向开发者的模型库，不是应用',
          },
          {
            '应用': '[Karakeep](/zh/power-local-llm/karakeep-review)',
            '平台': '网页、iOS、Android',
            '价格与许可证': '免费，AGPL-3.0',
            '角色': '书签与笔记应用',
            '主要区别': '面向链接和笔记的AI标签与搜索，而非图片文件夹',
          },
          {
            '应用': '[ComfyUI](/zh/power-local-llm/comfyui-review)',
            '平台': 'Windows、macOS、Linux',
            '价格与许可证': '免费，GPL-3.0',
            '角色': '图像生成器',
            '主要区别': '负责生成图片；PixlStash负责给图片打标签并整理',
          },
        ],
        note: '第三方应用的平台、价格和功能经常变化。决定之前，请在各项目自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用PixlStash的人',
        items: [
          '**拥有数千张成品的AI绘图创作者。**打标签、评分和重复项审核针对的正是这堆图片。',
          '**ComfyUI用户。**双向集成会把结果带着标签送回来。',
          '**想要不依赖云的照片搜索的人。**语义搜索和人脸搜索都在你的电脑上运行。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用PixlStash的人',
        items: [
          '**Intel Mac用户。**macOS应用仅支持Apple Silicon。',
          '**需要多用户访问的团队。**官网没有描述多用户支持。',
          '**需要经过验证的规模能力的人。**没有公布图像库规模或性能数据。',
          '**尚未核对模型许可证的商业用户。**只有人脸包附带许可说明。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'PixlStash需要GPU吗？',
            a: '不需要。桌面应用内置CPU运行时；NVIDIA CUDA和实验性的AMD加速是可选下载。',
          },
          {
            q: 'PixlStash会移动或修改我的文件吗？',
            a: '导入时不会：在你确认审核界面之前，不会复制、移动或重命名任何内容。之后只有在文件夹布局导致当前文件夹不再准确时才会移动文件，提议的移动可以整批撤销。',
          },
          {
            q: '可以在服务器上而不是桌面上运行吗？',
            a: '可以。Windows服务器安装包、Docker镜像和pip包都会在9537端口提供浏览器界面。',
          },
          {
            q: 'v1.12的候选版本是什么？',
            a: '它们是GitHub上的预发布版本。本评测针对最新稳定版1.11.5。',
          },
          {
            q: '有在线演示吗？',
            a: '有，官网提供了[在线演示](https://demo.pixlstash.dev/)链接。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '对于需要用本地AI管理大型图像库的创作者，PixlStash是一个有前景的选择：它像普通应用一样安装，原地读取现有文件夹，并把模型保留在你的电脑上。',
          '需要留意的是成熟度和透明度：没有文件格式列表，没有规模数据，官网未写明许可证，GitHub星标为89。在把它指向无法替代的档案之前，先在文件夹副本上试用，并提前备份。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[PixlStash官网](https://pixlstash.dev/) — 产品介绍、本地AI说法和链接。',
          '[PixlStash安装页](https://pixlstash.dev/install.html) — 安装包、Docker、pip、系统要求。',
          '[PixlStash功能页](https://pixlstash.dev/features.html) — 导入、打标签、搜索、重复项、分享、ComfyUI。',
          '[PixlStash AI页面](https://pixlstash.dev/ai.html) — 模型、硬件和下载。',
          '[PixlStash新功能](https://pixlstash.dev/whatsnew.html) — 1.11版变更和版本历史。',
          '[PixlStash隐私政策](https://pixlstash.dev/privacy.html) — 数据处理、更新检查和安装ID。',
          '[PixlStash的GitHub仓库](https://github.com/pikselkroken/pixlstash) — GPL-3.0许可证、发布文件和星标数。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[ComfyUI评测](/zh/power-local-llm/comfyui-review) — PixlStash所集成的节点式图像生成器。',
          '[Ollama Vision Models评测](/zh/power-local-llm/ollama-vision-models-review) — 在本地运行视觉模型来生成描述。',
          '[LLaVA评测](/zh/power-local-llm/llava-review) — 用于图像理解的开放视觉语言模型。',
          '[Karakeep评测](/zh/power-local-llm/karakeep-review) — 面向书签和笔记的自托管AI标签与搜索。',
          '[本地LLM软件完整目录](/zh/directory) — 涵盖各平台本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/pixlstash-review-hero-es.webp',
    title: 'Reseña de PixlStash: gestor de bibliotecas de imágenes autoalojado con etiquetado de IA local',
    seoTitle: 'Reseña de PixlStash: biblioteca de imágenes con IA local',
    intro:
      'PixlStash es un gestor de bibliotecas de imágenes autoalojado que etiqueta, describe e indexa tus imágenes con modelos de IA que se ejecutan en tu propio equipo, y te permite buscarlas por contenido o por rostro. Esta reseña recoge lo que documentan su sitio web, su página de instalación, su política de privacidad y su repositorio de GitHub, lo que dejan fuera y cómo se compara con otras herramientas del directorio.',
    metaDescription:
      'Reseña de PixlStash: gestor de imágenes GPL-3.0 para Windows, macOS y Linux con etiquetado de IA local, búsqueda facial e integración con ComfyUI.',
    twitterDescription:
      'Reseña de PixlStash: una app gratuita de escritorio y servidor bajo GPL-3.0 que etiqueta, describe y busca en bibliotecas de imágenes con modelos de IA locales. Instalación, privacidad, límites y alternativas.',
    audience:
      'Creadores y usuarios de imágenes generadas con IA con grandes bibliotecas que quieren etiquetado, búsqueda y limpieza de duplicados en local — cubre instalación, funciones, modelos, privacidad, límites y alternativas.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Reseña de PixlStash',
    targetKeywords: [
      'reseña pixlstash',
      'pixlstash',
      'gestor de biblioteca de imágenes autoalojado',
      'etiquetado de imágenes con ia local',
      'búsqueda semántica de imágenes local',
      'búsqueda facial fototeca sin conexión',
      'gestor de imágenes comfyui',
      'wd14 florence-2 joycaption tagger',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'AMD ROCm', 'Apple silicon', 'CPU'],
    leadAnswerBlock:
      '**PixlStash es un gestor gratuito de bibliotecas de imágenes bajo GPL-3.0 que se ejecuta como app de escritorio o como servidor sin interfaz y usa modelos de IA locales para etiquetar, describir, puntuar y buscar tus imágenes.** Según su sitio, ningún modelo envía nada a una API y no hace falta cuenta. Esta reseña cubre la versión 1.11.5 y se basa en el sitio público, la política de privacidad y el repositorio, no en pruebas prácticas.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena probar PixlStash para organizar una biblioteca grande de imágenes con IA local?',
        answer:
          'Probablemente, si guardas miles de imágenes generadas o fotografiadas y quieres etiquetado, búsqueda facial y limpieza de duplicados sin un servicio en la nube. Comprueba antes dos cosas: el sitio no publica cifras de RAM, VRAM ni de tamaño de biblioteca, y el proyecto es todavía joven.',
        bullets: [
          'Instaladores de escritorio para Windows, macOS y Linux, además de un instalador de servidor para Windows, Docker y pip.',
          'Cuatro etiquetadores (PixlStash Tagger, WD14, Florence-2, JoyCaption), seleccionables en cada solicitud.',
          'Búsqueda semántica, búsqueda facial, cola de duplicados y una puntuación de calidad calibrada.',
          'Integración con ComfyUI en ambos sentidos y la línea de comandos pixlstash-cli.',
          'La comprobación de actualizaciones y la telemetría de instalación están desactivadas por defecto, según la política de privacidad.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir PixlStash', anchor: 'get-it' },
      { label: 'PixlStash de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es PixlStash', anchor: 'what-is-pixlstash' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Modelos de IA y hardware', anchor: 'models-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'PixlStash frente a las alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quién es PixlStash', anchor: 'who-should-use' },
      { label: 'Para quién no es PixlStash', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'PixlStash es un gestor de bibliotecas de imágenes de código abierto que importa tus carpetas existentes sin mover archivos y las organiza con modelos de IA que se ejecutan en local.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en él como un gestor de fotos pensado para quienes tienen enormes montones de imágenes generadas con IA o de referencia: las etiqueta, encuentra duplicados y te deja buscar describiendo una imagen o mostrando un rostro.',
          },
        ],
        items: [
          'Versión analizada: 1.11.5, publicada el 8 de octubre de 2026; el propio repositorio se actualizó por última vez el 17 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia y precio: GPL-3.0 según el repositorio de GitHub; el sitio no indica precios.',
          'Plataformas: Windows x64, macOS solo con Apple Silicon y Linux x86_64 como apps de escritorio.',
          'Funciones destacadas: búsqueda semántica y facial, cola de revisión de etiquetas, cola de duplicados, nodos de ComfyUI.',
          'Madurez: un proyecto joven que no publica una lista de formatos de archivo ni límites de tamaño de biblioteca.',
        ],
      },
      getItPixlstash: {
        id: 'get-it',
        title: 'Conseguir PixlStash',
        content: [
          '**PixlStash se distribuye como app de escritorio con instalación de doble clic en los tres sistemas, sin necesidad de terminal.** Los archivos están adjuntos a la [última versión de GitHub](https://github.com/pikselkroken/pixlstash/releases/latest); las filas siguientes van de la vía más sencilla a la más compleja.',
        ],
        columns: ['Plataforma', 'Descarga'],
        rows: [
          { 'Plataforma': 'App de escritorio para Windows', 'Descarga': '[PixlStash-desktop-1.11.5-win-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plataforma': 'App de escritorio para macOS', 'Descarga': '[PixlStash-desktop-1.11.5-mac-arm64.dmg](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plataforma': 'App de escritorio para Linux', 'Descarga': '[AppImage o .deb](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plataforma': 'Instalador de servidor para Windows', 'Descarga': '[pixlstash-server-1.11.5-windows-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plataforma': 'Docker', 'Descarga': '[ghcr.io/pikselkroken/pixlstash:latest](https://pixlstash.dev/install.html)' },
          { 'Plataforma': 'pip (Python 3.10+)', 'Descarga': '[pip install pixlstash](https://pixlstash.dev/install.html)' },
          { 'Plataforma': 'Sitio web', 'Descarga': '[pixlstash.dev](https://pixlstash.dev/)' },
          { 'Plataforma': 'Política de privacidad', 'Descarga': '[Política de privacidad de PixlStash](https://pixlstash.dev/privacy.html)' },
          { 'Plataforma': 'Código fuente', 'Descarga': '[github.com/pikselkroken/pixlstash](https://github.com/pikselkroken/pixlstash)' },
        ],
        note: 'La app de macOS no funciona en Mac con Intel. En Linux, el AppImage puede necesitar libfuse2 en distribuciones recientes. El instalador de Windows está firmado, pero SmartScreen aún puede avisar en el primer arranque; la página de instalación explica cómo confirmar el editor.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixlStash de un vistazo',
        columns: ['Atributo', 'PixlStash'],
        rows: [
          { 'Atributo': 'Plataforma', 'PixlStash': 'Windows, macOS, Linux' },
          { 'Atributo': 'Precio', 'PixlStash': 'Gratis (sin precio indicado)' },
          { 'Atributo': 'Licencia', 'PixlStash': 'GPL-3.0 (según GitHub)' },
          { 'Atributo': 'Ejecución', 'PixlStash': 'En local; los modelos se descargan al primer inicio' },
          { 'Atributo': 'Lee texto en imágenes (OCR)', 'PixlStash': 'No indicado en el sitio' },
          { 'Atributo': 'Varias imágenes por prompt', 'PixlStash': 'No indicado en el sitio' },
          { 'Atributo': 'API local', 'PixlStash': 'API REST; endpoints sin documentar' },
        ],
        note: 'Los atributos siguen la comparación de visión del directorio de software de LLM locales. Que falte una indicación en el sitio significa «desconocido», no «no compatible».',
      },
      whatIsPixlstash: {
        id: 'what-is-pixlstash',
        title: 'Qué es PixlStash',
        content: [
          '**PixlStash es un gestor de bibliotecas de imágenes, no una app de chat ni un generador de imágenes.** El repositorio lo describe como una herramienta para encontrar cosas en «una biblioteca de imágenes que se ha ido de las manos»: importa y etiqueta imágenes automáticamente, busca por contenido o por rostro y ofrece datos a otras herramientas como ComfyUI mediante una API REST.',
          'La versión 1.11 lee las carpetas que ya tienes y crea proyectos, personas y conjuntos a partir de sus nombres, sin copiar, mover ni renombrar nada. Puedes usarlo como app de escritorio o sin interfaz en un servidor, con una interfaz en el navegador.',
          'Esta reseña se basa en el sitio web, sus páginas de instalación, funciones, IA y privacidad, y el repositorio de GitHub. No hubo pruebas prácticas, así que aquí no se valoran la velocidad, la precisión del etiquetado ni la estabilidad.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La configuración consiste en descargar un instalador y apuntar la app a una carpeta.** Los pasos siguen las páginas de instalación y de funciones.',
        ],
        numberedItems: [
          {
            title: 'Elige el instalador de tu sistema',
            whyItMatters: 'Descarga la app de escritorio para Windows x64, macOS con Apple Silicon o Linux x86_64 desde la [página de versiones](https://github.com/pikselkroken/pixlstash/releases/latest).',
          },
          {
            title: 'Deja que el primer inicio descargue un backend',
            whyItMatters: 'La app detecta tu hardware y descarga una sola vez un backend adecuado de NVIDIA, AMD experimental o CPU; la página de instalación lo sitúa entre unos cientos de MB y unos pocos GB.',
          },
          {
            title: 'Añade una biblioteca en Ajustes',
            whyItMatters: 'Elige una carpeta; un asistente propone qué significa cada nivel de carpeta y no se mueve nada hasta que confirmes la pantalla de revisión.',
          },
          {
            title: 'Haz una copia antes de actualizar',
            whyItMatters: 'Las notas de la versión 1.11 indican que añade columnas a la base de datos, así que copia la carpeta de la biblioteca con PixlStash detenido.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**La idea central es revisar y buscar rápidamente en una biblioteca grande.** Todo lo siguiente procede de la página de funciones.',
        ],
        items: [
          '**Importación en el sitio.** Las carpetas existentes se convierten en proyectos, conjuntos y personas; las importaciones se ejecutan en segundo plano y se reanudan si se interrumpen.',
          '**Etiquetado y descripciones.** Cuatro etiquetadores (PixlStash Tagger, WD14, Florence-2, JoyCaption) se eligen en cada solicitud, y una cola de revisión ordena las etiquetas en las que los modelos probablemente se equivocan.',
          '**Búsqueda.** Describe una imagen con palabras, encuentra imágenes visualmente parecidas o busca con un rostro subido; las operaciones de conjuntos combinan personajes y conjuntos.',
          '**Puntuación.** Una puntuación inteligente ordena los conjuntos grandes según lo que merece revisarse y aplica una penalización por anatomía deformada y fallos de renderizado.',
          '**Duplicados.** Una cola compara candidatos, los agrupa y envía las copias sobrantes a una papelera que restaura las imágenes borradas.',
          '**Compartir y seguridad.** Enlaces de solo lectura con tokens revocables, deshacer y rehacer, e instantáneas de metadatos diarias, semanales y mensuales.',
          '**Integraciones.** Flujos de ComfyUI en ambos sentidos, plugins de Python personalizados y la línea de comandos pixlstash-cli para copias de seguridad.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos de IA y hardware',
        content: [
          '**Todos los modelos se ejecutan en tu equipo y los pesos se descargan en el primer inicio.** La página de IA nombra OpenCLIP ViT-B-32 para la búsqueda semántica, InsightFace SCRFD-10G con el paquete buffalo_l para los rostros y Florence-2 para descripciones y segmentación.',
          'Los etiquetadores por defecto son PixlStash Tagger, descrito como un finetune de wd-convnext-tagger-v3, además de WD14 y JoyCaption. Moondream2 se instala como plugin mediante pixlstash-cli.',
          'La app de escritorio incluye un runtime de CPU, de modo que todos los modelos funcionan sin conexión desde el primer inicio. La aceleración NVIDIA CUDA es una descarga opcional, la compatibilidad con AMD ROCm es experimental y solo está en la app de escritorio, y el sitio no publica ningún requisito de RAM ni de VRAM.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**Según la política de privacidad (última actualización: 3 de agosto de 2026), tu biblioteca nunca llega al desarrollador.** Indica que no hay cuenta, ni sincronización en la nube, ni servidor central, y que compartir es opcional y revocable. La comprobación de actualizaciones y un ID de instalación anónimo están ambos desactivados por defecto; si se activan, envían una versión, un tipo de instalación o un ID aleatorio, nunca contenido de la biblioteca.',
          'Los pesos de los modelos proceden de servicios como Hugging Face y, en los complementos de GPU, de PyPI y del índice de PyTorch, por lo que el primer inicio necesita acceso a internet. La página de IA menciona también un generador de descripciones para APIs de visión compatibles con OpenAI; cualquier endpoint remoto que configures queda fuera de la afirmación «solo local».',
          'La agrupación de rostros crea embeddings faciales de las personas que aparecen en tus imágenes. Según el sitio permanecen en tu equipo, pero si eso está permitido para imágenes de otras personas o para uso comercial es responsabilidad tuya; el sitio ofrece el paquete AuraFace para uso comercial y no da condiciones de licencia para los demás modelos. El código está bajo GPL-3.0 según GitHub, mientras que el sitio solo habla de código abierto. Esta reseña no inspeccionó el tráfico de red, así que estas afirmaciones son las del desarrollador.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Etiquetado de IA local',
            'Qué significa en el uso real': 'Etiquetas y descripciones sin subir las imágenes.',
            'Limitación / salvedad': 'Las descargas de modelos son grandes y no hay cifras de precisión.',
          },
          {
            'Ventaja': 'Importación en el sitio',
            'Qué significa en el uso real': 'Tu estructura de carpetas se mantiene.',
            'Limitación / salvedad': 'No se indican formatos de archivo ni límites de biblioteca.',
          },
          {
            'Ventaja': 'Búsqueda facial y semántica',
            'Qué significa en el uso real': 'Encuentra a una persona o una escena por descripción.',
            'Limitación / salvedad': 'Los datos faciales son personales; el uso depende de tu caso.',
          },
          {
            'Ventaja': 'Instaladores para todos los escritorios',
            'Qué significa en el uso real': 'Descargar y abrir, sin terminal.',
            'Limitación / salvedad': 'macOS solo con Apple Silicon; AMD es experimental.',
          },
          {
            'Ventaja': 'Código abierto',
            'Qué significa en el uso real': 'Código GPL-3.0 que puedes inspeccionar.',
            'Limitación / salvedad': 'Proyecto joven con pocas estrellas; el sitio no cita licencia.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixlStash frente a las alternativas',
        content: [
          'El directorio no incluye otro gestor de bibliotecas de imágenes, así que estas herramientas cubren solo parte de la misma tarea: modelos de visión que describen imágenes, una app de etiquetado autoalojada y el generador al que se conecta PixlStash.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Función', 'Diferencia clave'],
        rows: [
          {
            'App': 'PixlStash',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, GPL-3.0',
            'Función': 'Gestor de biblioteca de imágenes',
            'Diferencia clave': 'Etiquetado, búsqueda facial y revisión de duplicados listos para usar',
          },
          {
            'App': '[Ollama Vision Models](/es/power-local-llm/ollama-vision-models-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, licencia por modelo',
            'Función': 'Modelos de visión por CLI',
            'Diferencia clave': 'Describe imágenes bajo demanda; sin biblioteca ni búsqueda',
          },
          {
            'App': '[LLaVA](/es/power-local-llm/llava-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, Apache 2.0',
            'Función': 'Modelo de visión y lenguaje',
            'Diferencia clave': 'Una biblioteca de modelos para desarrolladores, no una app',
          },
          {
            'App': '[Karakeep](/es/power-local-llm/karakeep-review)',
            'Plataformas': 'Web, iOS, Android',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            'Función': 'App de marcadores y notas',
            'Diferencia clave': 'Etiquetado y búsqueda con IA para enlaces y notas, no para carpetas de imágenes',
          },
          {
            'App': '[ComfyUI](/es/power-local-llm/comfyui-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio y licencia': 'Gratis, GPL-3.0',
            'Función': 'Generador de imágenes',
            'Diferencia clave': 'Genera las imágenes; PixlStash las etiqueta y ordena',
          },
        ],
        note: 'Las plataformas, los precios y las funciones de las apps de terceros cambian con frecuencia. Comprueba los datos actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es PixlStash',
        items: [
          '**Creadores de imágenes con IA con miles de resultados.** El etiquetado, la puntuación y la revisión de duplicados apuntan justo a ese montón.',
          '**Usuarios de ComfyUI.** La integración en ambos sentidos devuelve los resultados ya etiquetados.',
          '**Quien quiera buscar fotos sin la nube.** La búsqueda semántica y facial se ejecuta en tu equipo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es PixlStash',
        items: [
          '**Propietarios de Mac con Intel.** La app de macOS es solo para Apple Silicon.',
          '**Equipos que necesitan acceso multiusuario.** El sitio no describe compatibilidad multiusuario.',
          '**Quien necesite escalabilidad demostrada.** No se publican cifras de tamaño de biblioteca ni de rendimiento.',
          '**Usuarios comerciales que no hayan revisado las licencias de los modelos.** Solo los paquetes de rostros incluyen orientación de licencia.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿PixlStash necesita una GPU?',
            a: 'No. La app de escritorio incluye un runtime de CPU; NVIDIA CUDA y la aceleración experimental de AMD son descargas opcionales.',
          },
          {
            q: '¿PixlStash mueve o cambia mis archivos?',
            a: 'No al importar: no se copia, mueve ni renombra nada hasta que confirmes la pantalla de revisión. Más adelante los archivos solo se mueven si una estructura de carpetas hace inexacta su carpeta actual, y los movimientos propuestos se pueden deshacer en bloque.',
          },
          {
            q: '¿Puedo ejecutarlo en un servidor en lugar de en un escritorio?',
            a: 'Sí. Un instalador de servidor para Windows, una imagen de Docker y un paquete pip sirven la interfaz del navegador en el puerto 9537.',
          },
          {
            q: '¿Qué son las versiones candidatas de la 1.12?',
            a: 'Son versiones preliminares en GitHub. Esta reseña cubre la última versión estable, la 1.11.5.',
          },
          {
            q: '¿Hay una demostración en vivo?',
            a: 'Sí, el sitio enlaza una [demostración en vivo](https://demo.pixlstash.dev/).',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'PixlStash es una opción prometedora para creadores que necesitan domar una gran biblioteca de imágenes con IA local: se instala como una app normal, lee las carpetas existentes en el sitio y mantiene sus modelos en tu equipo.',
          'Las salvedades son la madurez y la transparencia: no hay lista de formatos de archivo ni cifras de escala, el sitio no cita ninguna licencia y el repositorio tiene 89 estrellas en GitHub. Pruébalo primero con una copia de una carpeta antes de apuntarlo a un archivo irremplazable, y haz una copia de seguridad antes.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de PixlStash](https://pixlstash.dev/) — descripción del producto, afirmación de IA local y enlaces.',
          '[Página de instalación de PixlStash](https://pixlstash.dev/install.html) — instaladores, Docker, pip, requisitos del sistema.',
          '[Página de funciones de PixlStash](https://pixlstash.dev/features.html) — importación, etiquetado, búsqueda, duplicados, compartir, ComfyUI.',
          '[Página de IA de PixlStash](https://pixlstash.dev/ai.html) — modelos, hardware y descargas.',
          '[Novedades de PixlStash](https://pixlstash.dev/whatsnew.html) — cambios de la versión 1.11 e historial de versiones.',
          '[Política de privacidad de PixlStash](https://pixlstash.dev/privacy.html) — tratamiento de datos, comprobación de actualizaciones e ID de instalación.',
          '[PixlStash en GitHub](https://github.com/pikselkroken/pixlstash) — licencia GPL-3.0, archivos de versión y número de estrellas.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de ComfyUI](/es/power-local-llm/comfyui-review) — el generador de imágenes basado en nodos con el que se integra PixlStash.',
          '[Reseña de Ollama Vision Models](/es/power-local-llm/ollama-vision-models-review) — ejecutar modelos de visión en local para descripciones y explicaciones.',
          '[Reseña de LLaVA](/es/power-local-llm/llava-review) — un modelo abierto de visión y lenguaje para entender imágenes.',
          '[Reseña de Karakeep](/es/power-local-llm/karakeep-review) — etiquetado y búsqueda con IA autoalojados para marcadores y notas.',
          '[El directorio completo de software de LLM locales](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/pixlstash-review-hero-pt.webp',
    title: 'Análise do PixlStash: gerenciador de biblioteca de imagens auto-hospedado com marcação por IA local',
    seoTitle: 'Análise do PixlStash: biblioteca de imagens com IA local',
    intro:
      'O PixlStash é um gerenciador de biblioteca de imagens auto-hospedado que marca, legenda e indexa suas imagens com modelos de IA executados no seu próprio computador e permite buscá-las por conteúdo ou por rosto. Esta análise cobre o que o site, a página de instalação, a política de privacidade e o repositório do GitHub documentam, o que deixam de fora e como ele se compara a outras ferramentas do diretório.',
    metaDescription:
      'Análise do PixlStash: gerenciador de imagens GPL-3.0 para Windows, macOS e Linux com marcação por IA local, busca facial e integração com ComfyUI.',
    twitterDescription:
      'Análise do PixlStash: um app gratuito de desktop e servidor sob GPL-3.0 que marca, legenda e pesquisa bibliotecas de imagens com modelos de IA locais. Instalação, privacidade, limites e alternativas.',
    audience:
      'Criadores e usuários de imagens geradas por IA com grandes bibliotecas que querem marcação, busca e limpeza de duplicatas locais — cobre instalação, recursos, modelos, privacidade, limites e alternativas.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Análise do PixlStash',
    targetKeywords: [
      'análise pixlstash',
      'pixlstash',
      'gerenciador de biblioteca de imagens auto-hospedado',
      'marcação de imagens com ia local',
      'busca semântica de imagens local',
      'busca facial biblioteca de fotos offline',
      'gerenciador de imagens comfyui',
      'wd14 florence-2 joycaption tagger',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'AMD ROCm', 'Apple silicon', 'CPU'],
    leadAnswerBlock:
      '**O PixlStash é um gerenciador gratuito de biblioteca de imagens sob GPL-3.0 que roda como app de desktop ou como servidor sem interface e usa modelos de IA locais para marcar, legendar, pontuar e pesquisar suas imagens.** Segundo o site, nenhum modelo envia nada para uma API e não é preciso conta. Esta análise cobre a versão 1.11.5 e se baseia no site público, na política de privacidade e no repositório, não em testes práticos.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena experimentar o PixlStash para organizar uma grande biblioteca de imagens com IA local?',
        answer:
          'Provavelmente, se você guarda milhares de imagens geradas ou fotografadas e quer marcação, busca facial e limpeza de duplicatas sem um serviço na nuvem. Verifique antes duas coisas: o site não publica números de RAM, VRAM nem de tamanho de biblioteca, e o projeto ainda é jovem.',
        bullets: [
          'Instaladores de desktop para Windows, macOS e Linux, além de um instalador de servidor para Windows, Docker e pip.',
          'Quatro marcadores (PixlStash Tagger, WD14, Florence-2, JoyCaption), selecionáveis a cada solicitação.',
          'Busca semântica, busca facial, fila de duplicatas e uma pontuação de qualidade calibrada.',
          'Integração com o ComfyUI nos dois sentidos e a linha de comando pixlstash-cli.',
          'A verificação de atualizações e a telemetria de instalação vêm desativadas por padrão, segundo a política de privacidade.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o PixlStash', anchor: 'get-it' },
      { label: 'PixlStash em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o PixlStash', anchor: 'what-is-pixlstash' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Modelos de IA e hardware', anchor: 'models-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Vantagens e limitações', anchor: 'tradeoffs' },
      { label: 'PixlStash e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o PixlStash serve', anchor: 'who-should-use' },
      { label: 'Para quem o PixlStash não serve', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'O PixlStash é um gerenciador de biblioteca de imagens de código aberto que importa suas pastas existentes sem mover arquivos e as organiza com modelos de IA executados localmente.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um gerenciador de fotos feito para quem tem enormes pilhas de imagens geradas por IA ou de referência: ele as marca, encontra duplicatas e deixa você pesquisar descrevendo uma imagem ou mostrando um rosto.',
          },
        ],
        items: [
          'Versão analisada: 1.11.5, lançada em 8 de outubro de 2026; o próprio repositório foi atualizado pela última vez em 17 de outubro de 2026, portanto nenhum aviso de projeto abandonado se aplica.',
          'Licença e preço: GPL-3.0 segundo o repositório do GitHub; o site não lista preços.',
          'Plataformas: Windows x64, macOS apenas com Apple Silicon e Linux x86_64 como apps de desktop.',
          'Recursos de destaque: busca semântica e facial, fila de revisão de tags, fila de duplicatas, nós do ComfyUI.',
          'Maturidade: um projeto jovem que não publica lista de formatos de arquivo nem limites de tamanho de biblioteca.',
        ],
      },
      getItPixlstash: {
        id: 'get-it',
        title: 'Obter o PixlStash',
        content: [
          '**O PixlStash é distribuído como app de desktop com instalação por duplo clique nos três sistemas, sem precisar de terminal.** Os arquivos estão anexados à [versão mais recente no GitHub](https://github.com/pikselkroken/pixlstash/releases/latest); as linhas abaixo vão do caminho mais simples ao mais trabalhoso.',
        ],
        columns: ['Plataforma', 'Download'],
        rows: [
          { 'Plataforma': 'App de desktop para Windows', 'Download': '[PixlStash-desktop-1.11.5-win-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plataforma': 'App de desktop para macOS', 'Download': '[PixlStash-desktop-1.11.5-mac-arm64.dmg](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plataforma': 'App de desktop para Linux', 'Download': '[AppImage ou .deb](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plataforma': 'Instalador de servidor para Windows', 'Download': '[pixlstash-server-1.11.5-windows-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'Plataforma': 'Docker', 'Download': '[ghcr.io/pikselkroken/pixlstash:latest](https://pixlstash.dev/install.html)' },
          { 'Plataforma': 'pip (Python 3.10+)', 'Download': '[pip install pixlstash](https://pixlstash.dev/install.html)' },
          { 'Plataforma': 'Site', 'Download': '[pixlstash.dev](https://pixlstash.dev/)' },
          { 'Plataforma': 'Política de privacidade', 'Download': '[Política de privacidade do PixlStash](https://pixlstash.dev/privacy.html)' },
          { 'Plataforma': 'Código-fonte', 'Download': '[github.com/pikselkroken/pixlstash](https://github.com/pikselkroken/pixlstash)' },
        ],
        note: 'O app para macOS não roda em Macs com Intel. No Linux, o AppImage pode precisar do libfuse2 em distribuições mais novas. O instalador do Windows é assinado, mas o SmartScreen ainda pode avisar na primeira execução; a página de instalação explica como confirmar o editor.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixlStash em resumo',
        columns: ['Atributo', 'PixlStash'],
        rows: [
          { 'Atributo': 'Plataforma', 'PixlStash': 'Windows, macOS, Linux' },
          { 'Atributo': 'Preço', 'PixlStash': 'Grátis (sem preço listado)' },
          { 'Atributo': 'Licença', 'PixlStash': 'GPL-3.0 (segundo o GitHub)' },
          { 'Atributo': 'Execução', 'PixlStash': 'Local; modelos baixados na primeira execução' },
          { 'Atributo': 'Lê texto em imagens (OCR)', 'PixlStash': 'Não informado no site' },
          { 'Atributo': 'Várias imagens por prompt', 'PixlStash': 'Não informado no site' },
          { 'Atributo': 'API local', 'PixlStash': 'API REST; endpoints não documentados' },
        ],
        note: 'Os atributos seguem a comparação de visão usada no diretório de software de LLM local. Uma informação ausente no site significa «desconhecido», não «sem suporte».',
      },
      whatIsPixlstash: {
        id: 'what-is-pixlstash',
        title: 'O que é o PixlStash',
        content: [
          '**O PixlStash é um gerenciador de biblioteca de imagens, não um app de chat nem um gerador de imagens.** O repositório o descreve como uma ferramenta para encontrar coisas em «uma biblioteca de imagens que saiu do controle»: ele importa e marca imagens automaticamente, pesquisa por conteúdo ou rosto e fornece dados a outras ferramentas, como o ComfyUI, por meio de uma API REST.',
          'A versão 1.11 lê as pastas que você já tem e cria projetos, pessoas e conjuntos a partir dos nomes delas, sem copiar, mover nem renomear nada. Você pode executá-lo como app de desktop ou sem interface em um servidor, com uma interface no navegador.',
          'Esta análise se baseia no site, em suas páginas de instalação, recursos, IA e privacidade, e no repositório do GitHub. Não houve testes práticos, portanto velocidade, precisão da marcação e estabilidade não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração consiste em baixar um instalador e apontar o app para uma pasta.** Os passos seguem as páginas de instalação e de recursos.',
        ],
        numberedItems: [
          {
            title: 'Escolha o instalador do seu sistema',
            whyItMatters: 'Baixe o app de desktop para Windows x64, macOS com Apple Silicon ou Linux x86_64 na [página de versões](https://github.com/pikselkroken/pixlstash/releases/latest).',
          },
          {
            title: 'Deixe a primeira execução baixar um backend',
            whyItMatters: 'O app detecta seu hardware e baixa uma única vez um backend adequado de NVIDIA, AMD experimental ou CPU; a página de instalação estima de algumas centenas de MB a alguns GB.',
          },
          {
            title: 'Adicione uma biblioteca nas configurações',
            whyItMatters: 'Escolha uma pasta; um assistente propõe o significado de cada nível de pasta, e nada é movido até você confirmar a tela de revisão.',
          },
          {
            title: 'Faça backup antes de atualizar',
            whyItMatters: 'As notas da versão 1.11 dizem que ela adiciona colunas ao banco de dados; copie a pasta da biblioteca com o PixlStash fechado.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**A ideia central é revisar e pesquisar uma biblioteca grande com rapidez.** Tudo o que segue vem da página de recursos.',
        ],
        items: [
          '**Importação no local.** As pastas existentes viram projetos, conjuntos e pessoas; as importações rodam em segundo plano e continuam se forem interrompidas.',
          '**Marcação e legendas.** Quatro marcadores (PixlStash Tagger, WD14, Florence-2, JoyCaption) são escolhidos a cada solicitação, e uma fila de revisão ordena as tags em que os modelos mais provavelmente erraram.',
          '**Busca.** Descreva uma imagem com palavras, encontre imagens visualmente semelhantes ou pesquise com um rosto enviado; operações de conjuntos combinam personagens e conjuntos.',
          '**Pontuação.** Uma pontuação inteligente ordena grandes conjuntos pelo que vale revisar e aplica penalidade para anatomia deformada e defeitos de renderização.',
          '**Duplicatas.** Uma fila compara candidatas, as agrupa e envia as cópias extras a uma lixeira que restaura imagens excluídas.',
          '**Compartilhamento e segurança.** Links somente leitura com tokens revogáveis, desfazer e refazer, e instantâneos de metadados diários, semanais e mensais.',
          '**Integrações.** Fluxos do ComfyUI nos dois sentidos, plugins Python personalizados e a linha de comando pixlstash-cli para backups.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'Modelos de IA e hardware',
        content: [
          '**Todos os modelos rodam no seu computador, e os pesos são baixados na primeira execução.** A página de IA cita o OpenCLIP ViT-B-32 para a busca semântica, o InsightFace SCRFD-10G com o pacote buffalo_l para rostos e o Florence-2 para legendas e segmentação.',
          'Os marcadores padrão são o PixlStash Tagger, descrito como um finetune do wd-convnext-tagger-v3, além de WD14 e JoyCaption. O Moondream2 é instalado como plugin pelo pixlstash-cli.',
          'O app de desktop inclui um runtime de CPU, então todos os modelos funcionam offline desde a primeira execução. A aceleração NVIDIA CUDA é um download opcional, o suporte a AMD ROCm é experimental e existe só no app de desktop, e o site não publica requisito de RAM nem de VRAM.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**Segundo a política de privacidade (atualizada em 3 de agosto de 2026), sua biblioteca nunca chega ao desenvolvedor.** Ela afirma que não há conta, sincronização na nuvem nem servidor central, e que o compartilhamento é opcional e revogável. A verificação de atualizações e um ID de instalação anônimo vêm ambos desativados por padrão; se ativados, enviam uma versão, um tipo de instalação ou um ID aleatório, nunca o conteúdo da biblioteca.',
          'Os pesos dos modelos vêm de serviços como o Hugging Face e, nos complementos de GPU, do PyPI e do índice do PyTorch, por isso a primeira execução precisa de acesso à internet. A página de IA também menciona um legendador para APIs de visão compatíveis com a OpenAI; qualquer endpoint remoto que você configurar fica fora da afirmação «somente local».',
          'O agrupamento de rostos cria embeddings faciais das pessoas nas suas imagens. Segundo o site, eles ficam no seu computador, mas saber se isso é permitido para imagens de outras pessoas ou para uso comercial é responsabilidade sua; o site oferece o pacote AuraFace para uso comercial e não dá termos de licença para os demais modelos. O código está sob GPL-3.0 segundo o GitHub, enquanto o site apenas o chama de código aberto. Esta análise não inspecionou o tráfego de rede, portanto essas afirmações são as do desenvolvedor.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Vantagens e limitações',
        columns: ['Vantagem', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Marcação por IA local',
            'O que significa no uso real': 'Tags e legendas sem enviar as imagens.',
            'Limitação / ressalva': 'Downloads de modelos são grandes e não há números de precisão.',
          },
          {
            'Vantagem': 'Importação no local',
            'O que significa no uso real': 'Sua estrutura de pastas permanece como está.',
            'Limitação / ressalva': 'Nenhuma lista de formatos nem limite de biblioteca é informada.',
          },
          {
            'Vantagem': 'Busca facial e semântica',
            'O que significa no uso real': 'Encontre uma pessoa ou cena por descrição.',
            'Limitação / ressalva': 'Dados faciais são pessoais; o uso depende do seu caso.',
          },
          {
            'Vantagem': 'Instaladores para todos os desktops',
            'O que significa no uso real': 'Baixe e abra, sem terminal.',
            'Limitação / ressalva': 'macOS só com Apple Silicon; suporte a AMD é experimental.',
          },
          {
            'Vantagem': 'Código aberto',
            'O que significa no uso real': 'Código GPL-3.0 que você pode inspecionar.',
            'Limitação / ressalva': 'Projeto jovem com poucas estrelas; o site não cita licença.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixlStash e as alternativas',
        content: [
          'O diretório não tem outro gerenciador de biblioteca de imagens, então estas ferramentas cobrem só parte da mesma tarefa: modelos de visão que legendam imagens, um app de marcação auto-hospedado e o gerador ao qual o PixlStash se conecta.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Papel', 'Diferença principal'],
        rows: [
          {
            'App': 'PixlStash',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, GPL-3.0',
            'Papel': 'Gerenciador de biblioteca de imagens',
            'Diferença principal': 'Marcação, busca facial e revisão de duplicatas prontas para uso',
          },
          {
            'App': '[Ollama Vision Models](/pt/power-local-llm/ollama-vision-models-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, licença por modelo',
            'Papel': 'Modelos de visão via CLI',
            'Diferença principal': 'Descreve imagens sob demanda; sem biblioteca nem busca',
          },
          {
            'App': '[LLaVA](/pt/power-local-llm/llava-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, Apache 2.0',
            'Papel': 'Modelo de visão e linguagem',
            'Diferença principal': 'Uma biblioteca de modelos para desenvolvedores, não um app',
          },
          {
            'App': '[Karakeep](/pt/power-local-llm/karakeep-review)',
            'Plataformas': 'Web, iOS, Android',
            'Preço e licença': 'Grátis, AGPL-3.0',
            'Papel': 'App de favoritos e notas',
            'Diferença principal': 'Marcação e busca com IA para links e notas, não para pastas de imagens',
          },
          {
            'App': '[ComfyUI](/pt/power-local-llm/comfyui-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço e licença': 'Grátis, GPL-3.0',
            'Papel': 'Gerador de imagens',
            'Diferença principal': 'Gera as imagens; o PixlStash as marca e organiza',
          },
        ],
        note: 'Plataformas, preços e recursos de apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o PixlStash serve',
        items: [
          '**Criadores de imagens com IA com milhares de resultados.** Marcação, pontuação e revisão de duplicatas miram exatamente essa pilha.',
          '**Usuários do ComfyUI.** A integração nos dois sentidos devolve os resultados já marcados.',
          '**Quem quer buscar fotos sem nuvem.** A busca semântica e facial roda no seu computador.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o PixlStash não serve',
        items: [
          '**Donos de Mac com Intel.** O app para macOS é só para Apple Silicon.',
          '**Equipes que precisam de acesso multiusuário.** O site não descreve suporte multiusuário.',
          '**Quem precisa de escala comprovada.** Não há números de tamanho de biblioteca nem de desempenho.',
          '**Usuários comerciais que não conferiram as licenças dos modelos.** Só os pacotes de rostos trazem orientação de licença.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O PixlStash precisa de uma GPU?',
            a: 'Não. O app de desktop inclui um runtime de CPU; NVIDIA CUDA e a aceleração AMD experimental são downloads opcionais.',
          },
          {
            q: 'O PixlStash move ou altera meus arquivos?',
            a: 'Não na importação: nada é copiado, movido ou renomeado até você confirmar a tela de revisão. Depois, arquivos só são movidos se um layout de pastas tornar a pasta atual imprecisa, e as movimentações propostas podem ser desfeitas em lote.',
          },
          {
            q: 'Posso rodá-lo em um servidor em vez de em um desktop?',
            a: 'Sim. Um instalador de servidor para Windows, uma imagem Docker e um pacote pip servem a interface do navegador na porta 9537.',
          },
          {
            q: 'O que são as versões candidatas da 1.12?',
            a: 'São pré-lançamentos no GitHub. Esta análise cobre a versão estável mais recente, a 1.11.5.',
          },
          {
            q: 'Existe uma demonstração ao vivo?',
            a: 'Sim, o site linka uma [demonstração ao vivo](https://demo.pixlstash.dev/).',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O PixlStash é uma opção promissora para criadores que precisam domar uma grande biblioteca de imagens com IA local: instala-se como um app comum, lê as pastas existentes no local e mantém seus modelos no seu computador.',
          'As ressalvas são maturidade e transparência: sem lista de formatos de arquivo, sem números de escala, um site que não cita licença e 89 estrelas no GitHub. Experimente primeiro com uma cópia de uma pasta antes de apontá-lo para um acervo insubstituível, e faça backup antes.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do PixlStash](https://pixlstash.dev/) — descrição do produto, afirmação de IA local e links.',
          '[Página de instalação do PixlStash](https://pixlstash.dev/install.html) — instaladores, Docker, pip, requisitos do sistema.',
          '[Página de recursos do PixlStash](https://pixlstash.dev/features.html) — importação, marcação, busca, duplicatas, compartilhamento, ComfyUI.',
          '[Página de IA do PixlStash](https://pixlstash.dev/ai.html) — modelos, hardware e downloads.',
          '[Novidades do PixlStash](https://pixlstash.dev/whatsnew.html) — mudanças da versão 1.11 e histórico de versões.',
          '[Política de privacidade do PixlStash](https://pixlstash.dev/privacy.html) — tratamento de dados, verificação de atualizações e ID de instalação.',
          '[PixlStash no GitHub](https://github.com/pikselkroken/pixlstash) — licença GPL-3.0, arquivos de versão e número de estrelas.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do ComfyUI](/pt/power-local-llm/comfyui-review) — o gerador de imagens baseado em nós com o qual o PixlStash se integra.',
          '[Análise do Ollama Vision Models](/pt/power-local-llm/ollama-vision-models-review) — rodar modelos de visão localmente para legendas e descrições.',
          '[Análise do LLaVA](/pt/power-local-llm/llava-review) — um modelo aberto de visão e linguagem para entender imagens.',
          '[Análise do Karakeep](/pt/power-local-llm/karakeep-review) — marcação e busca com IA auto-hospedadas para favoritos e notas.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local para todas as plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/pixlstash-review-hero-ar.webp',
    title: 'مراجعة PixlStash: مدير مكتبة صور مستضاف ذاتيًا مع وسم بالذكاء الاصطناعي المحلي',
    seoTitle: 'مراجعة PixlStash: مدير مكتبة صور بذكاء اصطناعي محلي',
    intro:
      'PixlStash مدير مكتبة صور مستضاف ذاتيًا، يضع الوسوم على صورك ويكتب لها أوصافًا ويفهرسها بنماذج ذكاء اصطناعي تعمل على جهازك، ثم يتيح لك البحث عنها بالمحتوى أو بالوجه. تغطي هذه المراجعة ما توثّقه الواجهة الرسمية وصفحة التثبيت وسياسة الخصوصية ومستودع GitHub، وما تتركه دون ذكر، وكيف يقارن بالأدوات الأخرى في الدليل.',
    metaDescription:
      'مراجعة PixlStash: مدير صور مجاني بترخيص GPL-3.0 لأنظمة Windows وmacOS وLinux مع وسم بالذكاء الاصطناعي المحلي وبحث بالوجه وبحث دلالي وتكامل مع ComfyUI.',
    twitterDescription:
      'مراجعة PixlStash: تطبيق مجاني لسطح المكتب والخادم بترخيص GPL-3.0 يضع الوسوم على مكتبات الصور ويصفها ويبحث فيها بنماذج ذكاء اصطناعي محلية. التثبيت والخصوصية والقيود والبدائل.',
    audience:
      'المبدعون ومستخدمو الصور المولّدة بالذكاء الاصطناعي ممن لديهم مكتبات صور كبيرة ويريدون وسمًا وبحثًا وتنظيفًا للتكرارات محليًا — يغطي التثبيت والميزات والنماذج والخصوصية والقيود والبدائل.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة PixlStash',
    targetKeywords: [
      'مراجعة pixlstash',
      'pixlstash',
      'مدير مكتبة صور مستضاف ذاتيا',
      'وسم الصور بالذكاء الاصطناعي محليا',
      'بحث دلالي في الصور محليا',
      'بحث بالوجه في مكتبة الصور دون اتصال',
      'مدير صور comfyui',
      'wd14 florence-2 joycaption tagger',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'AMD ROCm', 'Apple silicon', 'CPU'],
    leadAnswerBlock:
      '**PixlStash مدير مكتبة صور مجاني بترخيص GPL-3.0 يعمل كتطبيق لسطح المكتب أو كخادم دون واجهة، ويستخدم نماذج ذكاء اصطناعي محلية لوسم صورك ووصفها وتقييمها والبحث فيها.** يقول موقعه إن أي نموذج لا يرسل شيئًا إلى واجهة برمجية وإنه لا يحتاج إلى حساب. تتناول هذه المراجعة الإصدار 1.11.5 وتعتمد على الموقع العام وسياسة الخصوصية والمستودع، لا على اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق PixlStash التجربة لتنظيم مكتبة صور كبيرة بذكاء اصطناعي محلي؟',
        answer:
          'غالبًا نعم، إذا كان لديك آلاف الصور المولّدة أو الملتقطة وتريد الوسم والبحث بالوجه وتنظيف التكرارات دون خدمة سحابية. تحقق أولًا من أمرين: الموقع لا ينشر أرقامًا لذاكرة RAM أو VRAM أو لحجم المكتبة، والمشروع ما زال حديثًا.',
        bullets: [
          'مثبّتات لسطح المكتب على Windows وmacOS وLinux، إضافة إلى مثبّت خادم لنظام Windows وDocker وpip.',
          'أربع أدوات وسم (PixlStash Tagger وWD14 وFlorence-2 وJoyCaption) يمكن اختيارها لكل طلب.',
          'بحث دلالي وبحث بالوجه وطابور تكرارات ودرجة جودة معايَرة.',
          'تكامل ثنائي الاتجاه مع ComfyUI وأداة سطر الأوامر pixlstash-cli.',
          'فحص التحديثات والقياس عن بُعد للتثبيت معطّلان افتراضيًا بحسب سياسة الخصوصية.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على PixlStash', anchor: 'get-it' },
      { label: 'PixlStash في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو PixlStash', anchor: 'what-is-pixlstash' },
      { label: 'كيف تبدأ', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'نماذج الذكاء الاصطناعي والعتاد', anchor: 'models-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'PixlStash مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب PixlStash', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب PixlStash', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'PixlStash مدير مكتبة صور مفتوح المصدر يستورد مجلداتك الحالية دون نقل ملفات وينظمها بنماذج ذكاء اصطناعي تعمل محليًا.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله مديرَ صور مصممًا لمن لديهم أكوامًا ضخمة من الصور المولّدة بالذكاء الاصطناعي أو صور المراجع: يضع عليها وسومًا ويجد التكرارات ويتيح لك البحث بوصف الصورة أو بعرض وجه.',
          },
        ],
        items: [
          'الإصدار الذي رُوجع: 1.11.5 الصادر في 8 أكتوبر 2026؛ وقد حُدّث المستودع نفسه آخر مرة في 17 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
          'الترخيص والسعر: GPL-3.0 بحسب مستودع GitHub؛ ولا يعرض الموقع أي أسعار.',
          'المنصات: Windows x64 وmacOS على Apple Silicon فقط وLinux x86_64 كتطبيقات لسطح المكتب.',
          'أبرز الميزات: البحث الدلالي والبحث بالوجه وطابور مراجعة الوسوم وطابور التكرارات وعُقد ComfyUI.',
          'النضج: مشروع حديث لا ينشر قائمة بصيغ الملفات المدعومة ولا حدودًا لحجم المكتبة.',
        ],
      },
      getItPixlstash: {
        id: 'get-it',
        title: 'الحصول على PixlStash',
        content: [
          '**يُوزَّع PixlStash كتطبيق لسطح المكتب يُثبَّت بنقرة مزدوجة على أنظمة سطح المكتب الثلاثة، فلا حاجة إلى طرفية.** الملفات مرفقة بـ[أحدث إصدار على GitHub](https://github.com/pikselkroken/pixlstash/releases/latest)؛ وتتدرج الصفوف أدناه من الأسهل إلى الأكثر تعقيدًا.',
        ],
        columns: ['المنصة', 'التنزيل'],
        rows: [
          { 'المنصة': 'تطبيق Windows لسطح المكتب', 'التنزيل': '[PixlStash-desktop-1.11.5-win-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'المنصة': 'تطبيق macOS لسطح المكتب', 'التنزيل': '[PixlStash-desktop-1.11.5-mac-arm64.dmg](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'المنصة': 'تطبيق Linux لسطح المكتب', 'التنزيل': '[AppImage أو .deb](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'المنصة': 'مثبّت الخادم لنظام Windows', 'التنزيل': '[pixlstash-server-1.11.5-windows-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { 'المنصة': 'Docker', 'التنزيل': '[ghcr.io/pikselkroken/pixlstash:latest](https://pixlstash.dev/install.html)' },
          { 'المنصة': 'pip (Python 3.10+)', 'التنزيل': '[pip install pixlstash](https://pixlstash.dev/install.html)' },
          { 'المنصة': 'الموقع الرسمي', 'التنزيل': '[pixlstash.dev](https://pixlstash.dev/)' },
          { 'المنصة': 'سياسة الخصوصية', 'التنزيل': '[سياسة خصوصية PixlStash](https://pixlstash.dev/privacy.html)' },
          { 'المنصة': 'الشيفرة المصدرية', 'التنزيل': '[github.com/pikselkroken/pixlstash](https://github.com/pikselkroken/pixlstash)' },
        ],
        note: 'لا يعمل تطبيق macOS على أجهزة Mac ذات معالج Intel. وفي Linux قد يحتاج AppImage إلى libfuse2 في التوزيعات الأحدث. مثبّت Windows موقَّع، ومع ذلك قد يحذّر SmartScreen عند التشغيل الأول؛ وتشرح صفحة التثبيت كيفية التحقق من الناشر.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixlStash في لمحة',
        columns: ['الخاصية', 'PixlStash'],
        rows: [
          { 'الخاصية': 'المنصة', 'PixlStash': 'Windows وmacOS وLinux' },
          { 'الخاصية': 'السعر', 'PixlStash': 'مجاني (لا سعر معلن)' },
          { 'الخاصية': 'الترخيص', 'PixlStash': 'GPL-3.0 (بحسب GitHub)' },
          { 'الخاصية': 'التشغيل', 'PixlStash': 'محلي؛ تُنزَّل النماذج عند التشغيل الأول' },
          { 'الخاصية': 'قراءة النص في الصور (OCR)', 'PixlStash': 'غير مذكور في الموقع' },
          { 'الخاصية': 'عدة صور في الطلب الواحد', 'PixlStash': 'غير مذكور في الموقع' },
          { 'الخاصية': 'واجهة API محلية', 'PixlStash': 'REST API؛ نقاط الوصول غير موثقة' },
        ],
        note: 'تتبع الخصائص مقارنة الرؤية الحاسوبية المستخدمة في دليل برمجيات LLM المحلية. غياب الذكر في الموقع يعني «غير معروف» لا «غير مدعوم».',
      },
      whatIsPixlstash: {
        id: 'what-is-pixlstash',
        title: 'ما هو PixlStash',
        content: [
          '**PixlStash مدير مكتبة صور، وليس تطبيق دردشة ولا مولّد صور.** يصفه المستودع بأنه أداة للعثور على الأشياء في «مكتبة صور خرجت عن السيطرة»: يستورد الصور ويضع عليها وسومًا تلقائيًا، ويبحث بالمحتوى أو بالوجه، ويقدّم البيانات إلى أدوات أخرى مثل ComfyUI عبر واجهة REST API.',
          'يقرأ الإصدار 1.11 المجلدات التي لديك بالفعل وينشئ منها مشاريع وأشخاصًا ومجموعات من أسمائها، دون نسخ أو نقل أو إعادة تسمية أي شيء. يمكنك تشغيله كتطبيق لسطح المكتب أو دون واجهة على خادم مع واجهة في المتصفح.',
          'تعتمد هذه المراجعة على الموقع وصفحاته للتثبيت والميزات والذكاء الاصطناعي والخصوصية، وعلى مستودع GitHub. لم يُجرَ اختبار عملي، لذا لا تُقيَّم هنا السرعة ودقة الوسم والاستقرار.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيف تبدأ',
        content: [
          '**الإعداد هو تنزيل مثبّت ثم توجيه التطبيق إلى مجلد.** تتبع الخطوات صفحتي التثبيت والميزات.',
        ],
        numberedItems: [
          {
            title: 'اختر المثبّت المناسب لنظامك',
            whyItMatters: 'نزّل تطبيق سطح المكتب لنظام Windows x64 أو macOS بمعالج Apple Silicon أو Linux x86_64 من [صفحة الإصدارات](https://github.com/pikselkroken/pixlstash/releases/latest).',
          },
          {
            title: 'دع التشغيل الأول يجلب واجهة خلفية',
            whyItMatters: 'يكتشف التطبيق عتادك وينزّل مرة واحدة واجهة خلفية مناسبة لـ NVIDIA أو AMD التجريبية أو CPU؛ وتقدّر صفحة التثبيت حجمها بين بضع مئات من MB وبضعة GB.',
          },
          {
            title: 'أضف مكتبة من الإعدادات',
            whyItMatters: 'اختر مجلدًا؛ يقترح معالج ما يعنيه كل مستوى من المجلدات، ولا يُنقل شيء حتى تؤكد شاشة المراجعة.',
          },
          {
            title: 'انسخ احتياطيًا قبل الترقية',
            whyItMatters: 'تذكر ملاحظات الإصدار 1.11 أنه يضيف أعمدة إلى قاعدة البيانات، فانسخ مجلد المكتبة والتطبيق متوقف.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**الفكرة الأساسية هي مراجعة مكتبة كبيرة والبحث فيها بسرعة.** كل ما يلي مأخوذ من صفحة الميزات.',
        ],
        items: [
          '**الاستيراد في مكانه.** تتحول المجلدات الحالية إلى مشاريع ومجموعات وأشخاص؛ وتعمل الاستيرادات في الخلفية وتُستأنف إذا انقطعت.',
          '**الوسم والأوصاف.** تُختار أربع أدوات وسم (PixlStash Tagger وWD14 وFlorence-2 وJoyCaption) لكل طلب، ويرتّب طابور المراجعة الوسوم التي يرجَّح أن النماذج أخطأت فيها.',
          '**البحث.** صِف صورة بالكلمات، أو ابحث عن صور مشابهة بصريًا، أو ابحث بوجه مرفوع؛ وتجمع عمليات المجموعات بين الشخصيات والمجموعات.',
          '**التقييم.** ترتّب الدرجة الذكية المجموعات الكبيرة بحسب ما يستحق المراجعة وتخصم نقاطًا عن التشوه التشريحي وعيوب التوليد.',
          '**التكرارات.** يقارن طابور المرشحين ويجمعها في أكوام ويرسل النسخ الزائدة إلى سلة تستعيد الصور المحذوفة.',
          '**المشاركة والأمان.** روابط مشاركة للقراءة فقط برموز قابلة للإلغاء، والتراجع والإعادة، ولقطات بيانات وصفية يومية وأسبوعية وشهرية.',
          '**التكاملات.** سير عمل ثنائي الاتجاه مع ComfyUI، وإضافات Python مخصصة، وأداة سطر الأوامر pixlstash-cli للنسخ الاحتياطي.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'نماذج الذكاء الاصطناعي والعتاد',
        content: [
          '**تعمل جميع النماذج على جهازك، وتُنزَّل الأوزان عند التشغيل الأول.** تذكر صفحة الذكاء الاصطناعي OpenCLIP ViT-B-32 للبحث الدلالي، وInsightFace SCRFD-10G مع حزمة buffalo_l للوجوه، وFlorence-2 للأوصاف والتجزئة.',
          'أدوات الوسم الافتراضية هي PixlStash Tagger الموصوف بأنه ضبط دقيق لـ wd-convnext-tagger-v3، إضافة إلى WD14 وJoyCaption. ويُثبَّت Moondream2 كإضافة عبر pixlstash-cli.',
          'يتضمن تطبيق سطح المكتب بيئة تشغيل على CPU، فتعمل جميع النماذج دون اتصال منذ التشغيل الأول. تسريع NVIDIA CUDA تنزيل اختياري، ودعم AMD ROCm تجريبي ومتاح في تطبيق سطح المكتب فقط، ولا ينشر الموقع أي متطلبات لـ RAM أو VRAM.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**بحسب سياسة الخصوصية (آخر تحديث في 3 أغسطس 2026) لا تصل مكتبتك إلى المطوّر أبدًا.** تذكر السياسة أنه لا يوجد حساب ولا مزامنة سحابية ولا خادم مركزي، وأن المشاركة اختيارية وقابلة للإلغاء. فحص التحديثات ومعرّف التثبيت المجهول كلاهما معطّل افتراضيًا؛ وإذا فُعّلا أرسلا إصدارًا أو نوع تثبيت أو معرّفًا عشوائيًا، ولا يرسلان محتوى المكتبة أبدًا.',
          'تأتي أوزان النماذج من خدمات مثل Hugging Face، ومن PyPI وفهرس PyTorch لإضافات وحدة معالجة الرسوم، لذا يحتاج التشغيل الأول إلى اتصال بالإنترنت. وتذكر صفحة الذكاء الاصطناعي أيضًا أداة وصف لواجهات رؤية متوافقة مع OpenAI؛ وأي نقطة وصول بعيدة تهيئها تقع خارج ادعاء «محلي فقط».',
          'يُنشئ تجميع الوجوه تضمينات وجهية للأشخاص في صورك. يقول الموقع إنها تبقى على جهازك، لكن كون ذلك مسموحًا لصور أشخاص آخرين أو للاستخدام التجاري مسؤوليتك أنت؛ ويقدّم الموقع حزمة AuraFace للاستخدام التجاري ولا يعطي شروط ترخيص للنماذج الأخرى. الشيفرة بترخيص GPL-3.0 بحسب GitHub، بينما يكتفي الموقع بوصف المشروع بأنه مفتوح المصدر. لم تفحص هذه المراجعة حركة الشبكة، لذا فهذه العبارات من كلام المطوّر نفسه.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / تنبيه'],
        rows: [
          {
            'الميزة': 'وسم بالذكاء الاصطناعي المحلي',
            'ما تعنيه في الاستخدام الفعلي': 'وسوم وأوصاف دون رفع الصور.',
            'القيد / تنبيه': 'تنزيلات النماذج كبيرة ولا تُنشر أرقام للدقة.',
          },
          {
            'الميزة': 'الاستيراد في مكانه',
            'ما تعنيه في الاستخدام الفعلي': 'يبقى هيكل مجلداتك كما هو.',
            'القيد / تنبيه': 'لا تُذكر صيغ الملفات ولا حدود المكتبة.',
          },
          {
            'الميزة': 'البحث بالوجه والبحث الدلالي',
            'ما تعنيه في الاستخدام الفعلي': 'ابحث عن شخص أو مشهد بالوصف.',
            'القيد / تنبيه': 'بيانات الوجه بيانات شخصية؛ والاستخدام يعتمد على حالتك.',
          },
          {
            'الميزة': 'مثبّتات لجميع أنظمة سطح المكتب',
            'ما تعنيه في الاستخدام الفعلي': 'نزّل وافتح دون طرفية.',
            'القيد / تنبيه': 'macOS على Apple Silicon فقط؛ ودعم AMD تجريبي.',
          },
          {
            'الميزة': 'مفتوح المصدر',
            'ما تعنيه في الاستخدام الفعلي': 'شيفرة GPL-3.0 يمكنك فحصها.',
            'القيد / تنبيه': 'مشروع حديث بنجوم قليلة؛ ولا يذكر الموقع ترخيصًا.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixlStash مقابل البدائل',
        content: [
          'لا يضم الدليل مدير مكتبة صور آخر، لذا فالأدوات التالية تغطي جزءًا فقط من المهمة نفسها: نماذج رؤية تصف الصور، وتطبيق وسم مستضاف ذاتيًا، والمولّد الذي يتصل به PixlStash.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'الدور', 'الفرق الأهم'],
        rows: [
          {
            'التطبيق': 'PixlStash',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، GPL-3.0',
            'الدور': 'مدير مكتبة صور',
            'الفرق الأهم': 'وسم وبحث بالوجه ومراجعة تكرارات جاهزة',
          },
          {
            'التطبيق': '[Ollama Vision Models](/ar/power-local-llm/ollama-vision-models-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، ترخيص لكل نموذج',
            'الدور': 'نماذج رؤية عبر CLI',
            'الفرق الأهم': 'يصف الصور عند الطلب؛ بلا مكتبة ولا بحث',
          },
          {
            'التطبيق': '[LLaVA](/ar/power-local-llm/llava-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، Apache 2.0',
            'الدور': 'نموذج رؤية ولغة',
            'الفرق الأهم': 'مكتبة نماذج للمطورين، وليس تطبيقًا',
          },
          {
            'التطبيق': '[Karakeep](/ar/power-local-llm/karakeep-review)',
            'المنصات': 'ويب وiOS وAndroid',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'الدور': 'تطبيق إشارات مرجعية وملاحظات',
            'الفرق الأهم': 'وسم وبحث بالذكاء الاصطناعي للروابط والملاحظات، لا لمجلدات الصور',
          },
          {
            'التطبيق': '[ComfyUI](/ar/power-local-llm/comfyui-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر والترخيص': 'مجاني، GPL-3.0',
            'الدور': 'مولّد صور',
            'الفرق الأهم': 'يولّد الصور؛ أما PixlStash فيضع عليها الوسوم ويرتبها',
          },
        ],
        note: 'تتغير المنصات والأسعار والميزات في تطبيقات الجهات الخارجية كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب PixlStash',
        items: [
          '**مبدعو الصور بالذكاء الاصطناعي ممن لديهم آلاف المخرجات.** يستهدف الوسم والتقييم ومراجعة التكرارات هذا الكوم تحديدًا.',
          '**مستخدمو ComfyUI.** يعيد التكامل ثنائي الاتجاه النتائج موسومة.',
          '**من يريد بحثًا في الصور دون سحابة.** يعمل البحث الدلالي والبحث بالوجه على جهازك.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب PixlStash',
        items: [
          '**مالكو أجهزة Mac ذات معالج Intel.** تطبيق macOS مخصص لـ Apple Silicon فقط.',
          '**الفرق التي تحتاج إلى وصول متعدد المستخدمين.** لا يصف الموقع دعم تعدد المستخدمين.',
          '**من يحتاج إلى قابلية توسع مثبتة.** لا تُنشر أرقام لحجم المكتبة أو الأداء.',
          '**المستخدمون التجاريون الذين لم يراجعوا تراخيص النماذج.** حزم الوجوه وحدها مرفقة بإرشاد للترخيص.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحتاج PixlStash إلى وحدة معالجة رسوم؟',
            a: 'لا. يتضمن تطبيق سطح المكتب بيئة تشغيل على CPU؛ أما NVIDIA CUDA وتسريع AMD التجريبي فتنزيلان اختياريان.',
          },
          {
            q: 'هل ينقل PixlStash ملفاتي أو يغيّرها؟',
            a: 'ليس عند الاستيراد: لا يُنسخ ولا يُنقل ولا يُعاد تسمية أي شيء حتى تؤكد شاشة المراجعة. لاحقًا لا تُنقل الملفات إلا إذا جعل تخطيط المجلدات مجلدها الحالي غير دقيق، ويمكن التراجع عن عمليات النقل المقترحة دفعة واحدة.',
          },
          {
            q: 'هل يمكنني تشغيله على خادم بدل سطح المكتب؟',
            a: 'نعم. يقدّم مثبّت خادم Windows وصورة Docker وحزمة pip واجهة المتصفح على المنفذ 9537.',
          },
          {
            q: 'ما هي النسخ المرشحة للإصدار 1.12؟',
            a: 'هي إصدارات تمهيدية على GitHub. وتغطي هذه المراجعة أحدث إصدار مستقر، وهو 1.11.5.',
          },
          {
            q: 'هل يوجد عرض تجريبي مباشر؟',
            a: 'نعم، يربط الموقع بـ[عرض تجريبي مباشر](https://demo.pixlstash.dev/).',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'PixlStash خيار واعد للمبدعين الذين يحتاجون إلى ترويض مكتبة صور كبيرة بذكاء اصطناعي محلي: يُثبَّت كأي تطبيق عادي، ويقرأ المجلدات الحالية في مكانها، ويُبقي نماذجه على جهازك.',
          'التحفظات تتعلق بالنضج والشفافية: لا قائمة بصيغ الملفات ولا أرقام لقابلية التوسع، والموقع لا يذكر ترخيصًا، و89 نجمة على GitHub. جرّبه أولًا على نسخة من مجلد قبل توجيهه إلى أرشيف لا يعوَّض، وانسخ احتياطيًا قبل ذلك.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع PixlStash](https://pixlstash.dev/) — وصف المنتج وادعاء الذكاء الاصطناعي المحلي والروابط.',
          '[صفحة تثبيت PixlStash](https://pixlstash.dev/install.html) — المثبّتات وDocker وpip ومتطلبات النظام.',
          '[صفحة ميزات PixlStash](https://pixlstash.dev/features.html) — الاستيراد والوسم والبحث والتكرارات والمشاركة وComfyUI.',
          '[صفحة الذكاء الاصطناعي في PixlStash](https://pixlstash.dev/ai.html) — النماذج والعتاد والتنزيلات.',
          '[جديد PixlStash](https://pixlstash.dev/whatsnew.html) — تغييرات الإصدار 1.11 وسجل الإصدارات.',
          '[سياسة خصوصية PixlStash](https://pixlstash.dev/privacy.html) — معالجة البيانات وفحص التحديثات ومعرّف التثبيت.',
          '[PixlStash على GitHub](https://github.com/pikselkroken/pixlstash) — ترخيص GPL-3.0 وملفات الإصدار وعدد النجوم.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة ComfyUI](/ar/power-local-llm/comfyui-review) — مولّد الصور القائم على العُقد الذي يتكامل معه PixlStash.',
          '[مراجعة Ollama Vision Models](/ar/power-local-llm/ollama-vision-models-review) — تشغيل نماذج الرؤية محليًا لإنشاء الأوصاف والشروحات.',
          '[مراجعة LLaVA](/ar/power-local-llm/llava-review) — نموذج رؤية ولغة مفتوح لفهم الصور.',
          '[مراجعة Karakeep](/ar/power-local-llm/karakeep-review) — وسم وبحث بالذكاء الاصطناعي مستضافان ذاتيًا للإشارات المرجعية والملاحظات.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلية على جميع المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Image & Video Generation',
    heroImage: '/images/pixlstash-review-hero-ko.webp',
    title: 'PixlStash 리뷰: 로컬 AI로 태깅하는 셀프호스팅 이미지 라이브러리 관리 도구',
    seoTitle: 'PixlStash 리뷰: 로컬 AI 이미지 라이브러리 관리',
    intro:
      'PixlStash는 사용자의 컴퓨터에서 실행되는 AI 모델로 이미지를 태깅하고 캡션을 생성하며 색인하고, 내용이나 얼굴로 검색할 수 있는 셀프호스팅 이미지 라이브러리 관리 도구입니다. 이 리뷰는 공식 사이트, 설치 페이지, 개인정보 처리방침, GitHub 저장소가 밝히는 내용과 밝히지 않는 내용, 그리고 디렉터리의 다른 도구와의 차이를 정리합니다.',
    metaDescription:
      'PixlStash 리뷰: Windows·macOS·Linux용 GPL-3.0 이미지 관리 도구. 로컬 AI 태깅, 얼굴·시맨틱 검색, ComfyUI 연동, 설치 방법과 한계를 살펴봅니다.',
    twitterDescription:
      'PixlStash 리뷰: 로컬 AI 모델로 이미지 라이브러리를 태깅하고 캡션을 생성하며 검색하는 GPL-3.0 무료 데스크톱·서버 앱. 설치 방법, 개인정보, 한계, 대안을 다룹니다.',
    audience:
      '대량의 이미지를 보유하고 로컬에서 태깅, 검색, 중복 정리를 원하는 크리에이터와 AI 이미지 사용자를 위한 글로, 설치, 기능, 모델, 개인정보, 한계, 대안을 다룹니다.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PixlStash 리뷰',
    targetKeywords: [
      'pixlstash 리뷰',
      'pixlstash',
      '셀프호스팅 이미지 라이브러리 관리',
      '로컬 ai 이미지 태깅',
      '로컬 시맨틱 이미지 검색',
      '오프라인 얼굴 검색 사진 관리',
      'comfyui 이미지 관리',
      'wd14 florence-2 joycaption tagger',
    ],
    current_hardware_mentioned: ['NVIDIA CUDA', 'AMD ROCm', 'Apple silicon', 'CPU'],
    leadAnswerBlock:
      '**PixlStash는 데스크톱 앱 또는 헤드리스 서버로 실행되는 무료 GPL-3.0 이미지 라이브러리 관리 도구로, 로컬 AI 모델을 사용해 이미지를 태깅하고 캡션을 생성하며 점수를 매기고 검색합니다.** 공식 사이트에 따르면 어떤 모델도 API로 데이터를 보내지 않으며 계정도 필요하지 않습니다. 이 리뷰는 버전 1.11.5를 대상으로 하며, 공개된 사이트, 개인정보 처리방침, 저장소를 근거로 했고 직접 사용해 테스트한 것은 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: '대규모 이미지 라이브러리를 로컬 AI로 정리하는 데 PixlStash를 써 볼 만한가요?',
        answer:
          '아마도 그렇습니다. 생성했거나 촬영한 이미지가 수천 장 있고 클라우드 서비스 없이 태깅, 얼굴 검색, 중복 정리를 하고 싶다면 적합합니다. 먼저 두 가지를 확인하십시오. 공식 사이트가 RAM, VRAM, 라이브러리 규모 수치를 공개하지 않으며, 프로젝트가 아직 젊다는 점입니다.',
        bullets: [
          'Windows·macOS·Linux 데스크톱 설치 프로그램과 함께 Windows 서버 설치 프로그램, Docker, pip를 제공합니다.',
          '네 가지 태거(PixlStash Tagger, WD14, Florence-2, JoyCaption)를 요청마다 선택할 수 있습니다.',
          '시맨틱 검색, 얼굴 검색, 중복 대기열, 보정된 품질 점수를 제공합니다.',
          'ComfyUI와의 양방향 연동과 pixlstash-cli 명령줄을 지원합니다.',
          '개인정보 처리방침에 따르면 업데이트 확인과 설치 텔레메트리는 모두 기본값이 꺼짐입니다.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'PixlStash 받기', anchor: 'get-it' },
      { label: 'PixlStash 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'PixlStash란', anchor: 'what-is-pixlstash' },
      { label: '시작하기', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: 'AI 모델과 하드웨어', anchor: 'models-hardware' },
      { label: '개인정보, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'PixlStash와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'PixlStash가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'PixlStash가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'PixlStash는 기존 폴더를 파일 이동 없이 가져와 로컬에서 실행되는 AI 모델로 정리하는 오픈소스 이미지 라이브러리 관리 도구입니다.',
          },
          {
            type: 'plain-terms',
            text: 'AI로 생성한 이미지나 참고 이미지가 산더미처럼 쌓인 사람을 위한 사진 관리자로 생각하면 됩니다. 이미지에 태그를 붙이고, 중복을 찾고, 장면을 설명하거나 얼굴을 보여 주는 방식으로 검색할 수 있습니다.',
          },
        ],
        items: [
          '검토한 버전: 2026년 10월 8일에 공개된 1.11.5. 저장소 자체는 2026년 10월 17일에 마지막으로 업데이트되었으므로 방치된 프로젝트 경고는 해당되지 않습니다.',
          '라이선스와 가격: GitHub 저장소 기준 GPL-3.0이며, 공식 사이트에는 가격이 표기되어 있지 않습니다.',
          '플랫폼: 데스크톱 앱은 Windows x64, Apple Silicon 전용 macOS, Linux x86_64를 지원합니다.',
          '주요 기능: 시맨틱 검색과 얼굴 검색, 태그 검토 대기열, 중복 대기열, ComfyUI 노드.',
          '성숙도: 신생 프로젝트로, 지원 파일 형식 목록도 라이브러리 규모 한도도 공개하지 않습니다.',
        ],
      },
      getItPixlstash: {
        id: 'get-it',
        title: 'PixlStash 받기',
        content: [
          '**PixlStash는 세 가지 데스크톱 운영체제 모두에서 더블클릭으로 설치하는 데스크톱 앱으로 제공되므로 터미널이 필요하지 않습니다.** 파일은 [최신 GitHub 릴리스](https://github.com/pikselkroken/pixlstash/releases/latest)에 첨부되어 있으며, 아래 표는 가장 쉬운 방법부터 복잡한 방법 순으로 정리했습니다.',
        ],
        columns: ['플랫폼', '받기'],
        rows: [
          { '플랫폼': 'Windows 데스크톱 앱', '받기': '[PixlStash-desktop-1.11.5-win-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { '플랫폼': 'macOS 데스크톱 앱', '받기': '[PixlStash-desktop-1.11.5-mac-arm64.dmg](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { '플랫폼': 'Linux 데스크톱 앱', '받기': '[AppImage 또는 .deb](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { '플랫폼': 'Windows 서버 설치 프로그램', '받기': '[pixlstash-server-1.11.5-windows-x64.exe](https://github.com/pikselkroken/pixlstash/releases/latest)' },
          { '플랫폼': 'Docker', '받기': '[ghcr.io/pikselkroken/pixlstash:latest](https://pixlstash.dev/install.html)' },
          { '플랫폼': 'pip (Python 3.10 이상)', '받기': '[pip install pixlstash](https://pixlstash.dev/install.html)' },
          { '플랫폼': '공식 사이트', '받기': '[pixlstash.dev](https://pixlstash.dev/)' },
          { '플랫폼': '개인정보 처리방침', '받기': '[PixlStash 개인정보 처리방침](https://pixlstash.dev/privacy.html)' },
          { '플랫폼': '소스 코드', '받기': '[github.com/pikselkroken/pixlstash](https://github.com/pikselkroken/pixlstash)' },
        ],
        note: 'macOS 앱은 Intel Mac에서 실행되지 않습니다. Linux에서는 최신 배포판에서 AppImage에 libfuse2가 필요할 수 있습니다. Windows 설치 프로그램은 서명되어 있지만 첫 실행 시 SmartScreen이 경고할 수 있으며, 게시자를 확인하는 방법은 설치 페이지에 설명되어 있습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PixlStash 한눈에 보기',
        columns: ['항목', 'PixlStash'],
        rows: [
          { '항목': '플랫폼', 'PixlStash': 'Windows, macOS, Linux' },
          { '항목': '가격', 'PixlStash': '무료 (가격 표기 없음)' },
          { '항목': '라이선스', 'PixlStash': 'GPL-3.0 (GitHub 기준)' },
          { '항목': '실행 위치', 'PixlStash': '로컬. 모델은 첫 실행 시 다운로드' },
          { '항목': '이미지 속 글자 인식(OCR)', 'PixlStash': '사이트에 명시 없음' },
          { '항목': '프롬프트당 여러 이미지', 'PixlStash': '사이트에 명시 없음' },
          { '항목': '로컬 API', 'PixlStash': 'REST API. 엔드포인트 문서는 없음' },
        ],
        note: '이 항목은 로컬 LLM 소프트웨어 디렉터리에서 쓰는 비전 비교를 따릅니다. 사이트에 언급이 없다는 것은 “알 수 없음”이지 “지원하지 않음”이 아닙니다.',
      },
      whatIsPixlstash: {
        id: 'what-is-pixlstash',
        title: 'PixlStash란',
        content: [
          '**PixlStash는 이미지 라이브러리 관리 도구이며 채팅 앱도, 이미지 생성기도 아닙니다.** 저장소는 이를 “감당할 수 없게 불어난 이미지 라이브러리”에서 원하는 것을 찾도록 돕는 도구로 설명합니다. 이미지를 자동으로 가져와 태깅하고, 내용이나 얼굴로 검색하며, REST API를 통해 ComfyUI 같은 다른 도구에 데이터를 제공합니다.',
          '버전 1.11은 이미 가진 폴더를 읽고 그 이름으로 프로젝트, 인물, 세트를 만들며 어떤 것도 복사, 이동, 이름 변경하지 않습니다. 데스크톱 앱으로 쓰거나 브라우저 화면이 있는 서버에서 헤드리스로 실행할 수 있습니다.',
          '이 리뷰는 공식 사이트의 설치, 기능, AI, 개인정보 페이지와 GitHub 저장소를 근거로 합니다. 직접 사용해 테스트하지 않았으므로 속도, 태깅 정확도, 안정성은 평가하지 않습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하기',
        content: [
          '**설정은 설치 프로그램을 내려받은 뒤 앱이 폴더를 가리키게 하는 것입니다.** 단계는 설치 페이지와 기능 페이지를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '사용 중인 시스템에 맞는 설치 프로그램 고르기',
            whyItMatters: '[릴리스 페이지](https://github.com/pikselkroken/pixlstash/releases/latest)에서 Windows x64, Apple Silicon macOS, Linux x86_64용 데스크톱 앱을 내려받습니다.',
          },
          {
            title: '첫 실행에서 백엔드 받기',
            whyItMatters: '앱이 하드웨어를 감지해 맞는 NVIDIA, 실험적 AMD, CPU 백엔드를 한 번 내려받습니다. 설치 페이지는 그 크기를 수백 MB에서 수 GB로 안내합니다.',
          },
          {
            title: '설정에서 라이브러리 추가하기',
            whyItMatters: '폴더를 고르면 마법사가 각 폴더 단계의 의미를 제안하며, 검토 화면을 확인하기 전에는 아무것도 이동되지 않습니다.',
          },
          {
            title: '업데이트 전에 백업하기',
            whyItMatters: '1.11 릴리스 노트에 따르면 데이터베이스에 열이 추가되므로, PixlStash를 종료한 상태에서 라이브러리 폴더를 복사하십시오.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**핵심 아이디어는 큰 라이브러리를 빠르게 검토하고 검색하는 것입니다.** 아래 내용은 모두 기능 페이지에서 가져왔습니다.',
        ],
        items: [
          '**제자리 가져오기.** 기존 폴더가 프로젝트, 세트, 인물이 되며, 가져오기는 백그라운드에서 실행되고 중단되면 이어서 진행됩니다.',
          '**태깅과 캡션.** 네 가지 태거(PixlStash Tagger, WD14, Florence-2, JoyCaption)를 요청마다 고르며, 검토 대기열은 모델이 틀릴 가능성이 가장 높은 태그를 순서대로 보여 줍니다.',
          '**검색.** 이미지를 말로 설명하거나, 시각적으로 비슷한 이미지를 찾거나, 업로드한 얼굴로 검색할 수 있고, 집합 연산으로 캐릭터와 세트를 조합할 수 있습니다.',
          '**점수.** 스마트 점수는 검토할 가치가 있는 순서로 큰 세트를 정렬하며, 비정상적인 신체 형태와 렌더링 결함에는 감점을 적용합니다.',
          '**중복.** 대기열이 후보를 비교해 스택으로 묶고, 남는 사본은 삭제한 이미지를 복원할 수 있는 휴지통으로 보냅니다.',
          '**공유와 안전.** 폐기할 수 있는 토큰이 있는 읽기 전용 공유 링크, 실행 취소와 다시 실행, 일·주·월 단위 메타데이터 스냅숏을 제공합니다.',
          '**연동.** ComfyUI와의 양방향 워크플로, 사용자 정의 Python 플러그인, 백업용 pixlstash-cli 명령줄.',
        ],
      },
      modelsHardware: {
        id: 'models-hardware',
        title: 'AI 모델과 하드웨어',
        content: [
          '**모든 모델은 사용자의 컴퓨터에서 실행되며 가중치는 첫 실행 때 내려받습니다.** AI 페이지는 시맨틱 검색에 OpenCLIP ViT-B-32, 얼굴에 buffalo_l 팩을 쓰는 InsightFace SCRFD-10G, 캡션과 세그멘테이션에 Florence-2를 언급합니다.',
          '기본 태거는 wd-convnext-tagger-v3의 파인튜닝으로 설명되는 PixlStash Tagger와 WD14, JoyCaption입니다. Moondream2는 pixlstash-cli로 플러그인으로 설치합니다.',
          '데스크톱 앱에는 CPU 런타임이 포함되어 있어 모든 모델이 첫 실행부터 오프라인으로 동작합니다. NVIDIA CUDA 가속은 선택적 다운로드이고, AMD ROCm 지원은 실험적이며 데스크톱 앱에서만 제공되고, 공식 사이트는 RAM이나 VRAM 요구 사항을 공개하지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보, 라이선스, 비용',
        content: [
          '**개인정보 처리방침(2026년 8월 3일 업데이트)에 따르면 사용자의 라이브러리는 개발자에게 전달되지 않습니다.** 계정, 클라우드 동기화, 중앙 서버가 없고, 공유는 선택 사항이며 철회할 수 있다고 밝힙니다. 업데이트 확인과 익명 설치 ID는 모두 기본값이 꺼짐이며, 켜면 버전, 설치 유형 또는 무작위 ID가 전송되지만 라이브러리 내용은 전송되지 않습니다.',
          '모델 가중치는 Hugging Face 같은 서비스에서, GPU 추가 구성 요소는 PyPI와 PyTorch 인덱스에서 받아 오므로 첫 실행에는 인터넷 연결이 필요합니다. AI 페이지는 OpenAI 호환 비전 API용 캡션 기능도 언급하며, 사용자가 설정한 원격 엔드포인트는 “로컬 전용”이라는 설명의 범위 밖입니다.',
          '얼굴 그룹화는 이미지 속 인물의 얼굴 임베딩을 만듭니다. 사이트에 따르면 이 데이터는 사용자의 컴퓨터에 남지만, 다른 사람의 이미지나 상업적 용도로 허용되는지는 사용자의 책임입니다. 사이트는 상업적 사용을 위해 AuraFace 팩을 제공하며 나머지 모델의 라이선스 조건은 밝히지 않습니다. GitHub 기준으로 코드는 GPL-3.0이지만 사이트는 오픈소스라고만 말합니다. 이 리뷰는 네트워크 트래픽을 점검하지 않았으므로 이 내용은 개발자 자신의 설명입니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '장점': '로컬 AI 태깅',
            '실제 사용에서의 의미': '이미지를 업로드하지 않고 태그와 캡션을 얻습니다.',
            '한계 / 유의 사항': '모델 다운로드가 크고 정확도 수치는 공개되지 않았습니다.',
          },
          {
            '장점': '제자리 가져오기',
            '실제 사용에서의 의미': '기존 폴더 구조가 그대로 유지됩니다.',
            '한계 / 유의 사항': '파일 형식 목록이나 라이브러리 한도가 명시되지 않았습니다.',
          },
          {
            '장점': '얼굴·시맨틱 검색',
            '실제 사용에서의 의미': '설명만으로 인물이나 장면을 찾습니다.',
            '한계 / 유의 사항': '얼굴 데이터는 개인정보이며 사용 가능 여부는 상황에 따라 다릅니다.',
          },
          {
            '장점': '모든 데스크톱용 설치 프로그램',
            '실제 사용에서의 의미': '내려받아 열기만 하면 되며 터미널이 필요 없습니다.',
            '한계 / 유의 사항': 'macOS는 Apple Silicon 전용이고 AMD 지원은 실험적입니다.',
          },
          {
            '장점': '오픈소스',
            '실제 사용에서의 의미': '직접 살펴볼 수 있는 GPL-3.0 코드입니다.',
            '한계 / 유의 사항': '별이 적은 신생 프로젝트이며 사이트에 라이선스 표기가 없습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PixlStash와 대안 비교',
        content: [
          '디렉터리에는 다른 이미지 라이브러리 관리 도구가 없으므로, 여기서는 같은 작업의 일부만 다루는 도구를 소개합니다. 이미지에 캡션을 붙이는 비전 모델, 셀프호스팅 태깅 앱, PixlStash가 연결되는 이미지 생성기입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '핵심 차이'],
        rows: [
          {
            '앱': 'PixlStash',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, GPL-3.0',
            '역할': '이미지 라이브러리 관리',
            '핵심 차이': '태깅, 얼굴 검색, 중복 검토를 바로 사용 가능',
          },
          {
            '앱': '[Ollama Vision Models](/ko/power-local-llm/ollama-vision-models-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, 모델별 라이선스',
            '역할': 'CLI 비전 모델',
            '핵심 차이': '요청 시 이미지를 설명하며 라이브러리나 검색은 없음',
          },
          {
            '앱': '[LLaVA](/ko/power-local-llm/llava-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, Apache 2.0',
            '역할': '비전-언어 모델',
            '핵심 차이': '개발자용 모델 라이브러리이며 앱이 아님',
          },
          {
            '앱': '[Karakeep](/ko/power-local-llm/karakeep-review)',
            '플랫폼': '웹, iOS, Android',
            '가격과 라이선스': '무료, AGPL-3.0',
            '역할': '북마크·메모 앱',
            '핵심 차이': '링크와 메모용 AI 태깅·검색이며 이미지 폴더용이 아님',
          },
          {
            '앱': '[ComfyUI](/ko/power-local-llm/comfyui-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '무료, GPL-3.0',
            '역할': '이미지 생성기',
            '핵심 차이': '이미지를 생성하며, PixlStash는 이를 태깅하고 정리함',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'PixlStash가 적합한 사용자',
        items: [
          '**결과물이 수천 장인 AI 이미지 크리에이터.** 태깅, 점수, 중복 검토가 바로 그 이미지 더미를 겨냥합니다.',
          '**ComfyUI 사용자.** 양방향 연동으로 결과가 태그와 함께 돌아옵니다.',
          '**클라우드 없는 사진 검색을 원하는 사용자.** 시맨틱 검색과 얼굴 검색이 사용자의 컴퓨터에서 실행됩니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'PixlStash가 적합하지 않은 사용자',
        items: [
          '**Intel Mac 사용자.** macOS 앱은 Apple Silicon 전용입니다.',
          '**다중 사용자 접근이 필요한 팀.** 사이트는 다중 사용자 지원을 설명하지 않습니다.',
          '**검증된 확장성이 필요한 사용자.** 라이브러리 규모나 성능 수치가 공개되어 있지 않습니다.',
          '**모델 라이선스를 확인하지 않은 상업적 사용자.** 라이선스 안내가 있는 것은 얼굴 팩뿐입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'PixlStash에 GPU가 필요한가요?',
            a: '아니요. 데스크톱 앱에는 CPU 런타임이 포함되어 있으며, NVIDIA CUDA와 실험적 AMD 가속은 선택적 다운로드입니다.',
          },
          {
            q: 'PixlStash가 내 파일을 이동하거나 바꾸나요?',
            a: '가져올 때는 그렇지 않습니다. 검토 화면을 확인하기 전에는 복사, 이동, 이름 변경이 일어나지 않습니다. 이후에는 폴더 레이아웃 때문에 현재 폴더가 맞지 않게 될 때만 파일이 이동되며, 제안된 이동은 일괄로 되돌릴 수 있습니다.',
          },
          {
            q: '데스크톱이 아닌 서버에서 실행할 수 있나요?',
            a: '네. Windows 서버 설치 프로그램, Docker 이미지, pip 패키지 모두 9537 포트에서 브라우저 화면을 제공합니다.',
          },
          {
            q: 'v1.12 릴리스 후보는 무엇인가요?',
            a: 'GitHub의 사전 릴리스입니다. 이 리뷰는 최신 안정 버전인 1.11.5를 대상으로 합니다.',
          },
          {
            q: '라이브 데모가 있나요?',
            a: '네, 사이트에서 [라이브 데모](https://demo.pixlstash.dev/)로 연결됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'PixlStash는 큰 이미지 라이브러리를 로컬 AI로 다스리려는 크리에이터에게 유망한 선택지입니다. 일반 앱처럼 설치되고, 기존 폴더를 제자리에서 읽으며, 모델을 사용자의 컴퓨터에 둡니다.',
          '유의할 점은 성숙도와 투명성입니다. 파일 형식 목록과 규모 수치가 없고, 사이트에 라이선스 표기가 없으며, GitHub 별은 89개입니다. 대체할 수 없는 아카이브에 쓰기 전에 먼저 폴더 사본으로 시험하고 미리 백업하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[PixlStash 공식 사이트](https://pixlstash.dev/) — 제품 설명, 로컬 AI 설명, 링크.',
          '[PixlStash 설치 페이지](https://pixlstash.dev/install.html) — 설치 프로그램, Docker, pip, 시스템 요구 사항.',
          '[PixlStash 기능 페이지](https://pixlstash.dev/features.html) — 가져오기, 태깅, 검색, 중복, 공유, ComfyUI.',
          '[PixlStash AI 페이지](https://pixlstash.dev/ai.html) — 모델, 하드웨어, 다운로드.',
          '[PixlStash 새 소식](https://pixlstash.dev/whatsnew.html) — 버전 1.11 변경 사항과 버전 기록.',
          '[PixlStash 개인정보 처리방침](https://pixlstash.dev/privacy.html) — 데이터 처리, 업데이트 확인, 설치 ID.',
          '[GitHub의 PixlStash](https://github.com/pikselkroken/pixlstash) — GPL-3.0 라이선스, 릴리스 파일, 별 개수.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[ComfyUI 리뷰](/ko/power-local-llm/comfyui-review) — PixlStash가 연동되는 노드 기반 이미지 생성기.',
          '[Ollama Vision Models 리뷰](/ko/power-local-llm/ollama-vision-models-review) — 비전 모델을 로컬에서 실행해 캡션과 설명 만들기.',
          '[LLaVA 리뷰](/ko/power-local-llm/llava-review) — 이미지 이해를 위한 개방형 비전-언어 모델.',
          '[Karakeep 리뷰](/ko/power-local-llm/karakeep-review) — 북마크와 메모를 위한 셀프호스팅 AI 태깅과 검색.',
          '[로컬 LLM 소프트웨어 전체 디렉터리](/ko/directory) — 모든 플랫폼의 로컬 AI 도구를 모은 더 넓은 디렉터리.',
        ],
      },
    },
  },
}
