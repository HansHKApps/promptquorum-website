// Modly Review: Local Open-Source Image-to-3D Generator
// Slug: modly-review
// Companion to: comfyui-review, invokeai-review, draw-things-review (closest reviewed tools are local image generators; no other 3D-generation app has a review yet)
// Sources (all read 2026-11-20, no hands-on testing): maker website (homepage, docs FAQ, workflow, models, extensions catalog, roadmap), GitHub repository, README, LICENSE,
// GitHub API (repo, releases, commits), release v0.5.0 and its notes, official extension repositories. The request came from the site owner, not from the maker.
// Last upstream update 2026-11-19 (last push; latest release v0.5.0 on 2026-11-18) => no stale warning.
// Theme: 'Image & Video Generation' (the closest existing canonical theme; the directory category itself is 3d-generation).
// Model licences (Hunyuan3D 2, TripoSG, Trellis.2) are NOT stated in the Modly docs and GitHub detects none for the official extensions, so the review only says that.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/modly-review-hero-en.webp',
    title: 'Modly Review: Local Open-Source Image-to-3D Generator',
    seoTitle: 'Modly Review: Free Local Image-to-3D Generator, GPU Needs',
    intro:
      'Modly is a free desktop app that turns an image or a text prompt into a 3D mesh, using open-source AI models that run on your own GPU. Models are added as extensions, and results export as GLB, OBJ, STL or PLY. This review is based on the maker\'s website, documentation and GitHub repository, checked on 20 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Modly is a free desktop app that generates 3D meshes from images or prompts on your own GPU. Platforms, GPU needs, extensions, privacy and limits.',
    twitterDescription:
      'Modly generates 3D meshes from an image or prompt on your own GPU, with GLB, OBJ, STL and PLY export. MIT license, extension-based models, GPU needs.',
    audience:
      'Makers, game developers and 3D printing hobbyists who want to generate 3D meshes from images or prompts on their own computer, without a cloud service',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Modly',
    targetKeywords: [
      'Modly review',
      'Modly 3D generator',
      'local image to 3D',
      'offline 3D model generator',
      'Modly GPU requirements',
      'Modly extensions',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Modly is a free, MIT-licensed desktop app for Windows, Linux and Apple Silicon Macs that generates 3D meshes from an image or a text prompt with open-source AI models running on your own GPU.** The models come as installable extensions, so the results depend on which extension you choose.',
    quickAnswerTop: {
      en: {
        question: 'What is Modly and who is it for?',
        answer:
          'Modly is a desktop 3D generator: you import an image or type a prompt, pick an installed model extension, and Modly produces a mesh you can preview and export. It suits people who want AI-generated 3D assets for Blender, game engines or 3D printing while keeping their inputs on their own machine.',
        bullets: [
          'Platforms: Windows (.exe installer), Linux (AppImage, .deb) and macOS on Apple Silicon (.dmg).',
          'Price: free, with no account or credits; GitHub Sponsors is optional.',
          'License: MIT with a credit requirement for forks; model licences are separate.',
          'Models: Hunyuan3D 2, TripoSG and Trellis.2 via official extensions, plus community extensions.',
          'Export: GLB, OBJ, STL and PLY.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Features', anchor: 'features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'Limits and What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Modly is a desktop app that generates 3D meshes from an image or a text prompt with open-source AI models, installed as extensions and run on your own GPU.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a local alternative to cloud image-to-3D services: you download the app and a model once, and generation then runs on your computer. The quality and the licence of the results depend on the model extension you choose.',
          },
        ],
        items: [
          'The latest release is version 0.5.0 (18 November 2026) and the repository was last pushed to on 19 November 2026, so development is ongoing and no stale-project warning applies.',
          'The app ships as an installer for Windows, Linux and macOS; models are installed afterwards by pasting a GitHub URL on the Models page.',
          'The docs say an NVIDIA GPU is required; VRAM needs depend on the model, and quantized GGUF variants need less.',
          'The maker says nothing is uploaded and generation runs offline once the extension and its weights are downloaded.',
          'PromptQuorum has not tested the app or measured mesh quality, and Modly\'s docs do not state the licences of the 3D models.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI-generated 3D models can carry the licence terms of the model that produced them. Check each model\'s licence before you sell or publish generated assets. This is general information, not legal advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Modly is a desktop application for image-to-3D and prompt-to-3D generation that runs the AI models on your own computer.**',
          'The app is made by Lightning Pixel, the GitHub account that owns the repository, and the website footer reads "Modly by Lightning Pixel". The latest release is version 0.5.0, published on 18 November 2026, and the repository was last pushed to on 19 November 2026. Development is therefore ongoing and no stale-project warning applies.',
          'Modly itself is the shell around a Python backend; the AI models are added as extensions, each a GitHub repository with a manifest file. The README lists official extensions for Hunyuan3D 2 Mini (plus Turbo and Fast variants), TripoSG and a Trellis2 GGUF build. The extension catalog on the website also lists community extensions, some of which are not 3D tools, such as speech and music generators.',
          'You import an image or type a prompt (which input works depends on the extension), choose a model, and Modly generates a mesh that you can preview, edit and export. These are maker statements; PromptQuorum has not run the app and has not measured how good the meshes are.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install Modly with a normal installer from the official website or the GitHub releases page; the app is free and needs no account.**',
          'The v0.5.0 release lists a Windows installer (.exe), a macOS Apple Silicon disk image (.dmg) and a Linux AppImage, and the website also names a Linux .deb. The website headline says "Windows & Linux", while its download section and the README also cover macOS, which the README limits to Apple Silicon. After installing, you add a model: on the Models page you paste an extension\'s GitHub URL and then download the weights, which are fetched separately.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[Windows](https://github.com/lightningpixel/modly/releases/latest)', 'How to get it': 'Installer (.exe)' },
          { 'Platform': '[macOS](https://github.com/lightningpixel/modly/releases/latest)', 'How to get it': 'Apple Silicon only (.dmg)' },
          { 'Platform': '[Linux](https://github.com/lightningpixel/modly/releases/latest)', 'How to get it': 'AppImage or .deb' },
          { 'Platform': '[Website](https://modly3d.app)', 'How to get it': 'Official site, docs and extension catalog' },
          { 'Platform': '[Documentation](https://modly3d.app/docs)', 'How to get it': 'Install, models, FAQ and changelog' },
          { 'Platform': '[GitHub](https://github.com/lightningpixel/modly)', 'How to get it': 'Source code and release downloads' },
        ],
        note: 'The website has no privacy policy page. The installer needs no terminal; running from source is a separate developer path.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Modly combines model-based 3D generation with a small set of editing and export tools.** The points below come from the website, the README and the v0.5.0 release notes; they are maker statements.',
        ],
        items: [
          'Image-to-3D and prompt-to-3D generation, depending on the installed extension.',
          'Export to GLB, OBJ, STL and PLY for Blender, Unity, Unreal Engine or a 3D-printing slicer.',
          'Automatic background removal for input images; the release notes say it runs on the CPU.',
          'Collections and a workspace that keep every generated model, plus a Library page and run history.',
          'In-app mesh tools: smoothing, decimation, a mesh edit panel and sculpt brushes (Grab, Smooth, Inflate, Flatten), per the release notes.',
          'A real-world scale and print preparation page, and presets for printing, game and web use, per the release notes.',
          'An agent side panel with streamed replies and Ollama support mentioned in the release notes; the roadmap describes plain-English mesh editing as work in progress.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**Modly says generation runs on your GPU and nothing is uploaded, but the model weights have to be downloaded first.**',
          'The website and docs say your images never touch a server and that generation works fully offline once an extension and its weights are downloaded. The README shows that extension weights are fetched from Hugging Face, so the download step needs a network connection. Extensions are GitHub repositories that run code on your machine, so install only extensions you trust.',
          'The release notes mention a setting (MODLY_ORIGINS) that keeps web pages off the local API. The website has no privacy policy, so there is no written statement on telemetry or crash reports; PromptQuorum has not inspected network traffic.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Modly fits people who want AI-generated 3D assets without a cloud service.**',
        ],
        items: [
          '3D printing hobbyists who want to turn a photo into an STL they can open in a slicer.',
          'Game developers and 3D artists who want a starting mesh for Blender, Unity or Unreal Engine and will clean it up themselves.',
          'Tinkerers who want to try several open-source 3D models, or write their own extension, in one app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limits and What We Could Not Verify',
        content: [
          '**Modly has stated hardware limits, and several details remain unverified.**',
        ],
        items: [
          'Stated limit: the docs FAQ says an NVIDIA GPU is required. The website\'s structured data lists 6 GB of VRAM as the minimum, and the FAQ says VRAM needs depend on the model, with quantized GGUF variants running on more modest hardware.',
          'Unverified: the README also describes AMD GPU support through ROCm on Linux and Windows and a macOS build for Apple Silicon, which the FAQ\'s NVIDIA statement does not mention. PromptQuorum has not checked which GPUs work with which models.',
          'Not a fit: anyone without a capable GPU, or anyone who needs a hosted service with no local setup.',
          'Unverified: mesh quality, speed and reliability. PromptQuorum has not generated meshes with Modly, and the demo and screenshots on the website are the maker\'s own.',
          'Unverified: model licences. Modly\'s docs state no licence for Hunyuan3D 2, TripoSG or Trellis.2, and GitHub detects no licence for the official extension repositories; read each model\'s own terms before commercial use.',
          'Unverified: the organisation behind the app. The website has no imprint, privacy policy or terms page, and the repository names only the GitHub account Lightning Pixel.',
          'Version: Modly is below 1.0 (version 0.5.0), and the roadmap items on the website are plans, not shipped features.',
          'Not checked: independent reviews and user reports.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Modly vs Alternatives',
        content: [
          '**No other 3D-generation app has a PromptQuorum review yet, so the closest reviewed tools are local image generators.** By their own descriptions they produce images rather than 3D meshes, and PromptQuorum has not compared them with Modly hands-on.',
        ],
        itemHeadings: true,
        columns: ['Tool', 'Output'],
        rows: [
          { 'Tool': 'Modly', 'Output': 'Image or prompt to 3D mesh' },
          { 'Tool': '[ComfyUI](/power-local-llm/comfyui-review)', 'Output': 'Local image and video generation, node-based UI' },
          { 'Tool': '[InvokeAI](/power-local-llm/invokeai-review)', 'Output': 'Local image generation, web UI' },
          { 'Tool': '[Draw Things](/power-local-llm/draw-things-review)', 'Output': 'Local image generation on macOS and iOS' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is Modly free?',
            a: 'Yes, per the maker: the docs say it is 100% free and open source under the MIT license, with no credits or subscriptions. The license file adds that forks must credit the original project. GitHub Sponsors is optional.',
          },
          {
            q: 'Which 3D models does Modly run?',
            a: 'Through extensions. The README lists official ones for Hunyuan3D 2 Mini (plus Turbo and Fast variants), TripoSG and a Trellis2 GGUF build, and you can install an extension from any GitHub URL, so what runs depends on what you install.',
          },
          {
            q: 'Which file formats can I export?',
            a: 'GLB (recommended), OBJ, STL and PLY, per the docs. STL files can be loaded into slicers such as Cura or PrusaSlicer.',
          },
          {
            q: 'Can I use generated meshes commercially?',
            a: 'Modly\'s docs do not address this. The answer depends on the licence of the model extension you used, so read it before selling or publishing assets. This is not legal advice.',
          },
          {
            q: 'What if a generation runs out of memory?',
            a: 'The docs suggest a smaller or quantized (GGUF) variant, closing other GPU-heavy apps and checking the extension\'s README for its VRAM requirements.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Modly is worth a look if you want to generate 3D meshes from images or prompts on your own GPU and keep your inputs off the cloud.**',
          'On paper it covers a lot: a free MIT-licensed installer app for three operating systems, several open-source 3D models through extensions, four export formats and built-in mesh tools. Development is active, with release 0.5.0 on 18 November 2026 and a push on 19 November 2026.',
          'The trade-offs are a capable GPU, a model download before first use, unstated model licences and a project that is still below version 1.0. PromptQuorum has not tested the app, so try it with a small image and check the licence of your chosen model before you rely on the results.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Modly website](https://modly3d.app) — maker\'s description, features, download section, checked 20 November 2026.',
          '[Documentation FAQ](https://modly3d.app/docs/faq) — price, offline use, GPU statement, export formats, checked 20 November 2026.',
          '[Workflow](https://modly3d.app/docs/workflow) — inputs, collections, privacy statement, checked 20 November 2026.',
          '[Models and variants](https://modly3d.app/docs/models) — official model families and quantized variants, checked 20 November 2026.',
          '[Extension catalog](https://modly3d.app/extensions) — official and community extensions, checked 20 November 2026.',
          '[Roadmap](https://modly3d.app/roadmap) — planned work, checked 20 November 2026.',
          '[Modly GitHub repository](https://github.com/lightningpixel/modly) — README, LICENSE and last push, checked 20 November 2026.',
          '[Release v0.5.0](https://github.com/lightningpixel/modly/releases/tag/v0.5.0) — latest version, date, installer files and release notes, checked 20 November 2026.',
          '[Hunyuan3D 2 Mini extension](https://github.com/lightningpixel/modly-hunyuan3d-mini-extension) — example official extension repository, checked 20 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[ComfyUI Review](/power-local-llm/comfyui-review) — Node-based UI for local image and video generation.',
          '[InvokeAI Review](/power-local-llm/invokeai-review) — Local image generation with a web interface.',
          '[Draw Things Review](/power-local-llm/draw-things-review) — Local image generation on macOS and iOS.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/modly-review-hero-de.webp',
    title: 'Modly-Rezension: lokaler Open-Source-Bild-zu-3D-Generator',
    seoTitle: 'Modly-Rezension: lokaler Bild-zu-3D-Generator, GPU-Bedarf',
    intro:
      'Modly ist eine kostenlose Desktop-App, die aus einem Bild oder einem Text-Prompt ein 3D-Mesh erzeugt, mit Open-Source-KI-Modellen auf Ihrer eigenen GPU. Die Modelle kommen als Erweiterungen hinzu, und die Ergebnisse lassen sich als GLB, OBJ, STL oder PLY exportieren. Diese Rezension stützt sich auf die Website, die Dokumentation und das GitHub-Repository des Herstellers, geprüft am 20. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Modly ist eine kostenlose Desktop-App, die 3D-Meshes aus Bildern oder Prompts auf Ihrer eigenen GPU erzeugt. Plattformen, GPU-Bedarf, Datenschutz, Grenzen.',
    twitterDescription:
      'Modly erzeugt 3D-Meshes aus Bild oder Prompt auf Ihrer eigenen GPU, mit Export als GLB, OBJ, STL und PLY. MIT-Lizenz, Modelle als Erweiterungen, GPU-Bedarf.',
    audience:
      'Maker, Spieleentwickler und 3D-Druck-Hobbyisten, die 3D-Meshes aus Bildern oder Prompts auf dem eigenen Computer erzeugen möchten, ohne Cloud-Dienst',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Modly',
    targetKeywords: [
      'Modly Rezension',
      'Modly 3D-Generator',
      'lokal Bild zu 3D',
      'Offline-3D-Modell-Generator',
      'Modly GPU-Anforderungen',
      'Modly Erweiterungen',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Modly ist eine kostenlose Desktop-App unter MIT-Lizenz für Windows, Linux und Macs mit Apple Silicon, die aus einem Bild oder einem Text-Prompt 3D-Meshes erzeugt, mit Open-Source-KI-Modellen auf Ihrer eigenen GPU.** Die Modelle kommen als installierbare Erweiterungen, die Ergebnisse hängen also von der gewählten Erweiterung ab.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Modly, und für wen ist es gedacht?',
        answer:
          'Modly ist ein 3D-Generator für den Desktop: Sie importieren ein Bild oder tippen einen Prompt, wählen eine installierte Modell-Erweiterung, und Modly erzeugt ein Mesh, das Sie ansehen und exportieren können. Er eignet sich für Menschen, die KI-generierte 3D-Assets für Blender, Spiel-Engines oder den 3D-Druck wollen und ihre Eingaben auf dem eigenen Rechner behalten möchten.',
        bullets: [
          'Plattformen: Windows (.exe-Installer), Linux (AppImage, .deb) und macOS auf Apple Silicon (.dmg).',
          'Preis: kostenlos, ohne Konto oder Credits; GitHub Sponsors ist optional.',
          'Lizenz: MIT mit Namensnennungspflicht für Forks; die Modelllizenzen sind getrennt.',
          'Modelle: Hunyuan3D 2, TripoSG und Trellis.2 über offizielle Erweiterungen, dazu Community-Erweiterungen.',
          'Export: GLB, OBJ, STL und PLY.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So bekommen Sie die App', anchor: 'get-it' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Grenzen und was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Alternativen', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Modly ist eine Desktop-App, die aus einem Bild oder einem Text-Prompt 3D-Meshes erzeugt, mit Open-Source-KI-Modellen, die als Erweiterungen installiert werden und auf Ihrer eigenen GPU laufen.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine lokale Alternative zu Cloud-Diensten für Bild-zu-3D vor: Sie laden die App und ein Modell einmal herunter, danach läuft die Erzeugung auf Ihrem Computer. Qualität und Lizenz der Ergebnisse hängen von der gewählten Modell-Erweiterung ab.',
          },
        ],
        items: [
          'Die aktuelle Version ist 0.5.0 (18. November 2026), und das Repository wurde zuletzt am 19. November 2026 aktualisiert; die Entwicklung läuft also weiter, und es gilt keine Warnung vor einem verwaisten Projekt.',
          'Die App wird als Installer für Windows, Linux und macOS ausgeliefert; Modelle installieren Sie danach, indem Sie auf der Seite „Models“ eine GitHub-URL einfügen.',
          'Laut Doku ist eine NVIDIA-GPU erforderlich; der VRAM-Bedarf hängt vom Modell ab, und quantisierte GGUF-Varianten brauchen weniger.',
          'Der Hersteller sagt, nichts werde hochgeladen und die Erzeugung laufe offline, sobald die Erweiterung und ihre Gewichte heruntergeladen sind.',
          'PromptQuorum hat die App nicht getestet und die Mesh-Qualität nicht gemessen; die Doku von Modly nennt keine Lizenzen der 3D-Modelle.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'KI-generierte 3D-Modelle können den Lizenzbedingungen des Modells unterliegen, das sie erzeugt hat. Prüfen Sie die Lizenz jedes Modells, bevor Sie erzeugte Assets verkaufen oder veröffentlichen. Das sind allgemeine Informationen, keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Modly ist eine Desktop-Anwendung für die Erzeugung von 3D-Modellen aus Bildern oder Prompts, die die KI-Modelle auf Ihrem eigenen Computer ausführt.**',
          'Die App stammt von Lightning Pixel, dem GitHub-Konto, dem das Repository gehört; im Fußbereich der Website steht „Modly by Lightning Pixel“. Die aktuelle Version ist 0.5.0, veröffentlicht am 18. November 2026, und das Repository wurde zuletzt am 19. November 2026 aktualisiert. Die Entwicklung läuft also weiter, und es gilt keine Warnung vor einem verwaisten Projekt.',
          'Modly selbst ist die Hülle um ein Python-Backend; die KI-Modelle werden als Erweiterungen hinzugefügt, jeweils ein GitHub-Repository mit einer Manifest-Datei. Die README nennt offizielle Erweiterungen für Hunyuan3D 2 Mini (plus Turbo- und Fast-Varianten), TripoSG und eine Trellis2-GGUF-Version. Der Erweiterungskatalog auf der Website führt auch Community-Erweiterungen auf, von denen einige keine 3D-Werkzeuge sind, etwa Sprach- und Musikgeneratoren.',
          'Sie importieren ein Bild oder tippen einen Prompt (welche Eingabe funktioniert, hängt von der Erweiterung ab), wählen ein Modell, und Modly erzeugt ein Mesh, das Sie ansehen, bearbeiten und exportieren können. Das sind Herstellerangaben; PromptQuorum hat die App nicht ausgeführt und nicht gemessen, wie gut die Meshes sind.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So bekommen Sie die App',
        content: [
          '**Sie installieren Modly mit einem normalen Installer von der offiziellen Website oder der GitHub-Releases-Seite; die App ist kostenlos und braucht kein Konto.**',
          'Das Release v0.5.0 listet einen Windows-Installer (.exe), ein macOS-Image für Apple Silicon (.dmg) und ein Linux-AppImage, und die Website nennt außerdem ein Linux-.deb. Die Überschrift der Website sagt „Windows & Linux“, während der Download-Bereich und die README auch macOS abdecken, das die README auf Apple Silicon beschränkt. Nach der Installation fügen Sie ein Modell hinzu: Auf der Seite „Models“ fügen Sie die GitHub-URL einer Erweiterung ein und laden dann die Gewichte herunter, die separat bezogen werden.',
        ],
        columns: ['Plattform', 'So bekommen Sie sie'],
        rows: [
          { 'Plattform': '[Windows](https://github.com/lightningpixel/modly/releases/latest)', 'So bekommen Sie sie': 'Installer (.exe)' },
          { 'Plattform': '[macOS](https://github.com/lightningpixel/modly/releases/latest)', 'So bekommen Sie sie': 'Nur Apple Silicon (.dmg)' },
          { 'Plattform': '[Linux](https://github.com/lightningpixel/modly/releases/latest)', 'So bekommen Sie sie': 'AppImage oder .deb' },
          { 'Plattform': '[Website](https://modly3d.app)', 'So bekommen Sie sie': 'Offizielle Seite, Doku und Erweiterungskatalog' },
          { 'Plattform': '[Dokumentation](https://modly3d.app/docs)', 'So bekommen Sie sie': 'Installation, Modelle, FAQ und Changelog' },
          { 'Plattform': '[GitHub](https://github.com/lightningpixel/modly)', 'So bekommen Sie sie': 'Quellcode und Release-Downloads' },
        ],
        note: 'Die Website hat keine Seite mit einer Datenschutzerklärung. Für den Installer brauchen Sie kein Terminal; der Start aus dem Quellcode ist ein eigener Entwicklerweg.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Modly verbindet modellbasierte 3D-Erzeugung mit einigen Bearbeitungs- und Exportwerkzeugen.** Die folgenden Punkte stammen von der Website, der README und den Release Notes zu v0.5.0; es sind Herstellerangaben.',
        ],
        items: [
          'Bild-zu-3D- und Prompt-zu-3D-Erzeugung, je nach installierter Erweiterung.',
          'Export als GLB, OBJ, STL und PLY für Blender, Unity, Unreal Engine oder einen Slicer für den 3D-Druck.',
          'Automatische Hintergrundentfernung für Eingabebilder; laut Release Notes läuft sie auf der CPU.',
          'Kollektionen und ein Arbeitsbereich, die jedes erzeugte Modell aufbewahren, dazu eine Bibliotheksseite und ein Verlauf der Durchläufe.',
          'Mesh-Werkzeuge in der App: Glätten, Reduzieren, ein Mesh-Bearbeitungsfeld und Sculpt-Pinsel (Grab, Smooth, Inflate, Flatten), laut Release Notes.',
          'Eine Seite für reale Maßstäbe und Druckvorbereitung sowie Voreinstellungen für Druck, Spiele und Web, laut Release Notes.',
          'Ein Agenten-Seitenpanel mit gestreamten Antworten und Ollama-Unterstützung, die in den Release Notes erwähnt wird; die Roadmap beschreibt Mesh-Bearbeitung in einfacher Sprache als Arbeit in Arbeit.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Modly sagt, die Erzeugung laufe auf Ihrer GPU und nichts werde hochgeladen, aber die Modellgewichte müssen zuerst heruntergeladen werden.**',
          'Website und Doku sagen, Ihre Bilder erreichten nie einen Server und die Erzeugung funktioniere vollständig offline, sobald eine Erweiterung und ihre Gewichte heruntergeladen sind. Die README zeigt, dass die Gewichte der Erweiterungen von Hugging Face bezogen werden; der Download braucht also eine Netzwerkverbindung. Erweiterungen sind GitHub-Repositories, die Code auf Ihrem Rechner ausführen, installieren Sie daher nur Erweiterungen, denen Sie vertrauen.',
          'Die Release Notes erwähnen eine Einstellung (MODLY_ORIGINS), die Webseiten von der lokalen API fernhält. Die Website hat keine Datenschutzerklärung, es gibt also keine schriftliche Aussage zu Telemetrie oder Absturzberichten; PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Modly eignet sich für Menschen, die KI-erzeugte 3D-Assets ohne Cloud-Dienst wollen.**',
        ],
        items: [
          '3D-Druck-Hobbyisten, die aus einem Foto eine STL-Datei machen möchten, die sie in einem Slicer öffnen können.',
          'Spieleentwickler und 3D-Künstler, die ein Start-Mesh für Blender, Unity oder Unreal Engine suchen und es selbst nachbearbeiten.',
          'Tüftler, die mehrere Open-Source-3D-Modelle ausprobieren oder eine eigene Erweiterung schreiben möchten, in einer App.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Grenzen und was wir nicht überprüfen konnten',
        content: [
          '**Modly nennt Hardwaregrenzen, und mehrere Angaben bleiben ungeprüft.**',
        ],
        items: [
          'Genannte Grenze: Die FAQ der Doku sagt, eine NVIDIA-GPU sei erforderlich. Die strukturierten Daten der Website nennen 6 GB VRAM als Minimum, und die FAQ sagt, der VRAM-Bedarf hänge vom Modell ab; quantisierte GGUF-Varianten liefen auf bescheidenerer Hardware.',
          'Ungeprüft: Die README beschreibt außerdem AMD-GPU-Unterstützung über ROCm unter Linux und Windows sowie ein macOS-Build für Apple Silicon, was die NVIDIA-Aussage der FAQ nicht erwähnt. PromptQuorum hat nicht geprüft, welche GPUs mit welchen Modellen funktionieren.',
          'Nicht geeignet: wer keine leistungsfähige GPU hat oder einen gehosteten Dienst ohne lokale Einrichtung braucht.',
          'Ungeprüft: Mesh-Qualität, Geschwindigkeit und Zuverlässigkeit. PromptQuorum hat mit Modly keine Meshes erzeugt, und die Demo und die Screenshots auf der Website stammen vom Hersteller.',
          'Ungeprüft: die Modelllizenzen. Die Doku von Modly nennt keine Lizenz für Hunyuan3D 2, TripoSG oder Trellis.2, und GitHub erkennt für die offiziellen Erweiterungs-Repositories keine Lizenz; lesen Sie die Bedingungen jedes Modells, bevor Sie es kommerziell nutzen.',
          'Ungeprüft: die Organisation hinter der App. Die Website hat weder Impressum noch Datenschutzerklärung noch Nutzungsbedingungen, und das Repository nennt nur das GitHub-Konto Lightning Pixel.',
          'Version: Modly liegt unter 1.0 (Version 0.5.0), und die Punkte der Roadmap auf der Website sind Pläne, keine ausgelieferten Funktionen.',
          'Nicht geprüft: unabhängige Tests und Nutzerberichte.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Modly im Vergleich zu Alternativen',
        content: [
          '**Für keine andere 3D-Generierungs-App gibt es bisher eine PromptQuorum-Rezension, die nächstliegenden rezensierten Werkzeuge sind daher lokale Bildgeneratoren.** Nach ihren eigenen Beschreibungen erzeugen sie Bilder statt 3D-Meshes, und PromptQuorum hat sie nicht praktisch mit Modly verglichen.',
        ],
        itemHeadings: true,
        columns: ['Werkzeug', 'Ausgabe'],
        rows: [
          { 'Werkzeug': 'Modly', 'Ausgabe': 'Bild oder Prompt zu 3D-Mesh' },
          { 'Werkzeug': '[ComfyUI](/de/power-local-llm/comfyui-review)', 'Ausgabe': 'Lokale Bild- und Videoerzeugung, knotenbasierte Oberfläche' },
          { 'Werkzeug': '[InvokeAI](/de/power-local-llm/invokeai-review)', 'Ausgabe': 'Lokale Bilderzeugung, Weboberfläche' },
          { 'Werkzeug': '[Draw Things](/de/power-local-llm/draw-things-review)', 'Ausgabe': 'Lokale Bilderzeugung auf macOS und iOS' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist Modly kostenlos?',
            a: 'Ja, laut Hersteller: Die Doku sagt, es sei zu 100 % kostenlos und Open Source unter der MIT-Lizenz, ohne Credits oder Abos. Die Lizenzdatei ergänzt, dass Forks das Originalprojekt nennen müssen. GitHub Sponsors ist optional.',
          },
          {
            q: 'Welche 3D-Modelle führt Modly aus?',
            a: 'Über Erweiterungen. Die README nennt offizielle für Hunyuan3D 2 Mini (plus Turbo- und Fast-Varianten), TripoSG und eine Trellis2-GGUF-Version, und Sie können eine Erweiterung von jeder GitHub-URL installieren; was läuft, hängt also davon ab, was Sie installieren.',
          },
          {
            q: 'Welche Dateiformate kann ich exportieren?',
            a: 'Laut Doku GLB (empfohlen), OBJ, STL und PLY. STL-Dateien lassen sich in Slicer wie Cura oder PrusaSlicer laden.',
          },
          {
            q: 'Darf ich erzeugte Meshes kommerziell nutzen?',
            a: 'Die Doku von Modly äußert sich dazu nicht. Die Antwort hängt von der Lizenz der verwendeten Modell-Erweiterung ab; lesen Sie sie, bevor Sie Assets verkaufen oder veröffentlichen. Das ist keine Rechtsberatung.',
          },
          {
            q: 'Was tun, wenn dem Speicher bei einer Erzeugung der Platz ausgeht?',
            a: 'Die Doku empfiehlt eine kleinere oder quantisierte (GGUF-)Variante, andere GPU-intensive Apps zu schließen und in der README der Erweiterung nach deren VRAM-Bedarf zu sehen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Modly ist einen Blick wert, wenn Sie 3D-Meshes aus Bildern oder Prompts auf Ihrer eigenen GPU erzeugen und Ihre Eingaben aus der Cloud heraushalten möchten.**',
          'Auf dem Papier deckt es viel ab: eine kostenlose Installer-App unter MIT-Lizenz für drei Betriebssysteme, mehrere Open-Source-3D-Modelle über Erweiterungen, vier Exportformate und eingebaute Mesh-Werkzeuge. Die Entwicklung ist aktiv, mit Version 0.5.0 am 18. November 2026 und einer Aktualisierung am 19. November 2026.',
          'Die Nachteile sind eine leistungsfähige GPU, ein Modell-Download vor der ersten Nutzung, nicht genannte Modelllizenzen und ein Projekt, das noch unter Version 1.0 liegt. PromptQuorum hat die App nicht getestet; probieren Sie sie mit einem kleinen Bild aus und prüfen Sie die Lizenz Ihres gewählten Modells, bevor Sie sich auf die Ergebnisse verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Modly-Website](https://modly3d.app) — Beschreibung des Herstellers, Funktionen, Download-Bereich, geprüft am 20. November 2026.',
          '[Doku-FAQ](https://modly3d.app/docs/faq) — Preis, Offline-Nutzung, GPU-Aussage, Exportformate, geprüft am 20. November 2026.',
          '[Workflow](https://modly3d.app/docs/workflow) — Eingaben, Kollektionen, Aussage zum Datenschutz, geprüft am 20. November 2026.',
          '[Modelle und Varianten](https://modly3d.app/docs/models) — offizielle Modellfamilien und quantisierte Varianten, geprüft am 20. November 2026.',
          '[Erweiterungskatalog](https://modly3d.app/extensions) — offizielle und Community-Erweiterungen, geprüft am 20. November 2026.',
          '[Roadmap](https://modly3d.app/roadmap) — geplante Arbeiten, geprüft am 20. November 2026.',
          '[Modly-GitHub-Repository](https://github.com/lightningpixel/modly) — README, LICENSE und letzte Aktualisierung, geprüft am 20. November 2026.',
          '[Release v0.5.0](https://github.com/lightningpixel/modly/releases/tag/v0.5.0) — aktuelle Version, Datum, Installer-Dateien und Release Notes, geprüft am 20. November 2026.',
          '[Hunyuan3D-2-Mini-Erweiterung](https://github.com/lightningpixel/modly-hunyuan3d-mini-extension) — Beispiel eines offiziellen Erweiterungs-Repositorys, geprüft am 20. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[ComfyUI-Rezension](/de/power-local-llm/comfyui-review) — Knotenbasierte Oberfläche für lokale Bild- und Videoerzeugung.',
          '[InvokeAI-Rezension](/de/power-local-llm/invokeai-review) — Lokale Bilderzeugung mit Weboberfläche.',
          '[Draw-Things-Rezension](/de/power-local-llm/draw-things-review) — Lokale Bilderzeugung auf macOS und iOS.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/modly-review-hero-es.webp',
    title: 'Reseña de Modly: generador local y de código abierto de imagen a 3D',
    seoTitle: 'Reseña de Modly: generador local de imagen a 3D, GPU',
    intro:
      'Modly es una app de escritorio gratuita que convierte una imagen o un prompt de texto en una malla 3D, con modelos de IA de código abierto que se ejecutan en tu propia GPU. Los modelos se añaden como extensiones y los resultados se exportan como GLB, OBJ, STL o PLY. Esta reseña se basa en el sitio web, la documentación y el repositorio de GitHub del desarrollador, consultados el 20 de noviembre de 2026. PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'Modly es una app de escritorio gratuita que genera mallas 3D a partir de imágenes o prompts en tu propia GPU. Plataformas, GPU, privacidad y límites.',
    twitterDescription:
      'Modly genera mallas 3D a partir de una imagen o un prompt en tu propia GPU, con exportación a GLB, OBJ, STL y PLY. Licencia MIT, modelos como extensiones.',
    audience:
      'Creadores, desarrolladores de videojuegos y aficionados a la impresión 3D que quieren generar mallas 3D a partir de imágenes o prompts en su propio ordenador, sin un servicio en la nube',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Modly',
    targetKeywords: [
      'reseña de Modly',
      'generador 3D Modly',
      'imagen a 3D local',
      'generador de modelos 3D sin conexión',
      'requisitos de GPU de Modly',
      'extensiones de Modly',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Modly es una app de escritorio gratuita con licencia MIT para Windows, Linux y Mac con Apple Silicon que genera mallas 3D a partir de una imagen o un prompt de texto con modelos de IA de código abierto que se ejecutan en tu propia GPU.** Los modelos llegan como extensiones instalables, así que los resultados dependen de la extensión que elijas.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Modly y para quién es?',
        answer:
          'Modly es un generador 3D de escritorio: importas una imagen o escribes un prompt, eliges una extensión de modelo instalada y Modly produce una malla que puedes previsualizar y exportar. Sirve para quien quiere activos 3D generados con IA para Blender, motores de juego o impresión 3D y prefiere que sus datos de entrada se queden en su equipo.',
        bullets: [
          'Plataformas: Windows (instalador .exe), Linux (AppImage, .deb) y macOS con Apple Silicon (.dmg).',
          'Precio: gratis, sin cuenta ni créditos; GitHub Sponsors es opcional.',
          'Licencia: MIT con obligación de dar crédito en los forks; las licencias de los modelos son aparte.',
          'Modelos: Hunyuan3D 2, TripoSG y Trellis.2 mediante extensiones oficiales, más extensiones de la comunidad.',
          'Exportación: GLB, OBJ, STL y PLY.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Límites y lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Alternativas', anchor: 'alternatives' },
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
            text: 'Modly es una app de escritorio que genera mallas 3D a partir de una imagen o un prompt de texto con modelos de IA de código abierto, instalados como extensiones y ejecutados en tu propia GPU.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en ella como una alternativa local a los servicios en la nube de imagen a 3D: descargas la app y un modelo una vez, y la generación se ejecuta después en tu ordenador. La calidad y la licencia de los resultados dependen de la extensión de modelo que elijas.',
          },
        ],
        items: [
          'La última versión es la 0.5.0 (18 de noviembre de 2026) y el repositorio recibió su último push el 19 de noviembre de 2026, así que el desarrollo sigue activo y no se aplica ninguna advertencia de proyecto abandonado.',
          'La app se distribuye como instalador para Windows, Linux y macOS; los modelos se instalan después pegando una URL de GitHub en la página Models.',
          'La documentación dice que hace falta una GPU NVIDIA; la VRAM necesaria depende del modelo y las variantes GGUF cuantizadas necesitan menos.',
          'El desarrollador dice que no se sube nada y que la generación funciona sin conexión una vez descargadas la extensión y sus pesos.',
          'PromptQuorum no ha probado la app ni ha medido la calidad de las mallas, y la documentación de Modly no indica las licencias de los modelos 3D.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Los modelos 3D generados con IA pueden quedar sujetos a las condiciones de licencia del modelo que los produjo. Comprueba la licencia de cada modelo antes de vender o publicar los activos generados. Esto es información general, no asesoramiento legal.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Modly es una aplicación de escritorio para generar 3D a partir de imágenes o prompts que ejecuta los modelos de IA en tu propio ordenador.**',
          'La app la crea Lightning Pixel, la cuenta de GitHub propietaria del repositorio, y el pie de la web dice «Modly by Lightning Pixel». La última versión es la 0.5.0, publicada el 18 de noviembre de 2026, y el repositorio recibió su último push el 19 de noviembre de 2026. Por tanto el desarrollo sigue activo y no se aplica ninguna advertencia de proyecto abandonado.',
          'Modly en sí es la envoltura de un backend en Python; los modelos de IA se añaden como extensiones, cada una un repositorio de GitHub con un archivo de manifiesto. El README enumera extensiones oficiales para Hunyuan3D 2 Mini (con variantes Turbo y Fast), TripoSG y una versión GGUF de Trellis2. El catálogo de extensiones del sitio web también incluye extensiones de la comunidad, algunas de las cuales no son herramientas 3D, como generadores de voz y de música.',
          'Importas una imagen o escribes un prompt (qué entrada funciona depende de la extensión), eliges un modelo y Modly genera una malla que puedes previsualizar, editar y exportar. Son afirmaciones del desarrollador; PromptQuorum no ha ejecutado la app ni ha medido la calidad de las mallas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Instalas Modly con un instalador normal desde el sitio web oficial o la página de releases de GitHub; la app es gratuita y no requiere cuenta.**',
          'La versión v0.5.0 incluye un instalador de Windows (.exe), una imagen de disco de macOS para Apple Silicon (.dmg) y un AppImage de Linux, y el sitio web menciona además un .deb de Linux. El titular del sitio dice «Windows & Linux», mientras que su sección de descarga y el README también cubren macOS, que el README limita a Apple Silicon. Tras instalar, añades un modelo: en la página Models pegas la URL de GitHub de una extensión y después descargas los pesos, que se obtienen por separado.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[Windows](https://github.com/lightningpixel/modly/releases/latest)', 'Cómo conseguirla': 'Instalador (.exe)' },
          { 'Plataforma': '[macOS](https://github.com/lightningpixel/modly/releases/latest)', 'Cómo conseguirla': 'Solo Apple Silicon (.dmg)' },
          { 'Plataforma': '[Linux](https://github.com/lightningpixel/modly/releases/latest)', 'Cómo conseguirla': 'AppImage o .deb' },
          { 'Plataforma': '[Sitio web](https://modly3d.app)', 'Cómo conseguirla': 'Web oficial, documentación y catálogo de extensiones' },
          { 'Plataforma': '[Documentación](https://modly3d.app/docs)', 'Cómo conseguirla': 'Instalación, modelos, FAQ y registro de cambios' },
          { 'Plataforma': '[GitHub](https://github.com/lightningpixel/modly)', 'Cómo conseguirla': 'Código fuente y descargas de releases' },
        ],
        note: 'El sitio web no tiene una página de política de privacidad. El instalador no requiere terminal; ejecutar desde el código fuente es un camino aparte para desarrolladores.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Modly combina la generación 3D basada en modelos con un conjunto reducido de herramientas de edición y exportación.** Los puntos siguientes provienen del sitio web, el README y las notas de la versión v0.5.0; son afirmaciones del desarrollador.',
        ],
        items: [
          'Generación de imagen a 3D y de prompt a 3D, según la extensión instalada.',
          'Exportación a GLB, OBJ, STL y PLY para Blender, Unity, Unreal Engine o un slicer de impresión 3D.',
          'Eliminación automática del fondo de las imágenes de entrada; las notas de la versión dicen que se ejecuta en la CPU.',
          'Colecciones y un espacio de trabajo que conservan cada modelo generado, además de una página Library y un historial de ejecuciones.',
          'Herramientas de malla en la app: suavizado, decimación, un panel de edición de mallas y pinceles de esculpido (Grab, Smooth, Inflate, Flatten), según las notas de la versión.',
          'Una página de escala real y preparación de impresión, y preajustes para impresión, juegos y web, según las notas de la versión.',
          'Un panel lateral de agente con respuestas en streaming y compatibilidad con Ollama mencionada en las notas de la versión; la hoja de ruta describe la edición de mallas en lenguaje natural como trabajo en curso.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Modly dice que la generación se ejecuta en tu GPU y que no se sube nada, pero los pesos del modelo hay que descargarlos antes.**',
          'El sitio web y la documentación dicen que tus imágenes nunca llegan a un servidor y que la generación funciona totalmente sin conexión una vez descargadas una extensión y sus pesos. El README muestra que los pesos de las extensiones se obtienen de Hugging Face, así que la descarga necesita conexión a internet. Las extensiones son repositorios de GitHub que ejecutan código en tu equipo, así que instala solo extensiones en las que confíes.',
          'Las notas de la versión mencionan un ajuste (MODLY_ORIGINS) que mantiene las páginas web fuera de la API local. El sitio web no tiene política de privacidad, por lo que no hay una declaración escrita sobre telemetría o informes de errores; PromptQuorum no ha inspeccionado el tráfico de red.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Modly encaja con quienes quieren activos 3D generados con IA sin un servicio en la nube.**',
        ],
        items: [
          'Aficionados a la impresión 3D que quieren convertir una foto en un STL que puedan abrir en un slicer.',
          'Desarrolladores de juegos y artistas 3D que quieren una malla de partida para Blender, Unity o Unreal Engine y la limpiarán por su cuenta.',
          'Curiosos que quieren probar varios modelos 3D de código abierto, o escribir su propia extensión, en una sola app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Límites y lo que no pudimos verificar',
        content: [
          '**Modly indica límites de hardware y varios detalles siguen sin verificar.**',
        ],
        items: [
          'Límite indicado: la FAQ de la documentación dice que hace falta una GPU NVIDIA. Los datos estructurados del sitio web indican 6 GB de VRAM como mínimo, y la FAQ dice que la VRAM necesaria depende del modelo, con variantes GGUF cuantizadas que funcionan en hardware más modesto.',
          'Sin verificar: el README describe además compatibilidad con GPU AMD mediante ROCm en Linux y Windows y una compilación de macOS para Apple Silicon, algo que la afirmación de NVIDIA de la FAQ no menciona. PromptQuorum no ha comprobado qué GPU funcionan con qué modelos.',
          'No es para ti si: no tienes una GPU potente o necesitas un servicio alojado sin configuración local.',
          'Sin verificar: calidad, velocidad y fiabilidad de las mallas. PromptQuorum no ha generado mallas con Modly, y la demo y las capturas del sitio web son del propio desarrollador.',
          'Sin verificar: las licencias de los modelos. La documentación de Modly no indica licencia para Hunyuan3D 2, TripoSG ni Trellis.2, y GitHub no detecta licencia en los repositorios de las extensiones oficiales; lee los términos de cada modelo antes de un uso comercial.',
          'Sin verificar: la organización detrás de la app. El sitio web no tiene aviso legal, política de privacidad ni página de términos, y el repositorio solo nombra la cuenta de GitHub Lightning Pixel.',
          'Versión: Modly está por debajo de la 1.0 (versión 0.5.0), y los elementos de la hoja de ruta del sitio web son planes, no funciones ya entregadas.',
          'No comprobado: reseñas independientes e informes de usuarios.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Modly frente a las alternativas',
        content: [
          '**Ninguna otra app de generación 3D tiene todavía una reseña de PromptQuorum, así que las herramientas reseñadas más cercanas son generadores locales de imágenes.** Según sus propias descripciones producen imágenes y no mallas 3D, y PromptQuorum no las ha comparado con Modly en la práctica.',
        ],
        itemHeadings: true,
        columns: ['Herramienta', 'Resultado'],
        rows: [
          { 'Herramienta': 'Modly', 'Resultado': 'Imagen o prompt a malla 3D' },
          { 'Herramienta': '[ComfyUI](/es/power-local-llm/comfyui-review)', 'Resultado': 'Generación local de imagen y vídeo, interfaz de nodos' },
          { 'Herramienta': '[InvokeAI](/es/power-local-llm/invokeai-review)', 'Resultado': 'Generación local de imágenes, interfaz web' },
          { 'Herramienta': '[Draw Things](/es/power-local-llm/draw-things-review)', 'Resultado': 'Generación local de imágenes en macOS y iOS' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Modly es gratis?',
            a: 'Sí, según el desarrollador: la documentación dice que es 100 % gratuito y de código abierto bajo licencia MIT, sin créditos ni suscripciones. El archivo de licencia añade que los forks deben dar crédito al proyecto original. GitHub Sponsors es opcional.',
          },
          {
            q: '¿Qué modelos 3D ejecuta Modly?',
            a: 'Mediante extensiones. El README enumera extensiones oficiales para Hunyuan3D 2 Mini (con variantes Turbo y Fast), TripoSG y una versión GGUF de Trellis2, y puedes instalar una extensión desde cualquier URL de GitHub, así que lo que se ejecuta depende de lo que instales.',
          },
          {
            q: '¿Qué formatos de archivo puedo exportar?',
            a: 'GLB (recomendado), OBJ, STL y PLY, según la documentación. Los archivos STL se pueden cargar en slicers como Cura o PrusaSlicer.',
          },
          {
            q: '¿Puedo usar las mallas generadas con fines comerciales?',
            a: 'La documentación de Modly no trata este punto. La respuesta depende de la licencia de la extensión de modelo que usaste, así que léela antes de vender o publicar activos. Esto no es asesoramiento legal.',
          },
          {
            q: '¿Qué hago si una generación se queda sin memoria?',
            a: 'La documentación sugiere una variante más pequeña o cuantizada (GGUF), cerrar otras apps que usen mucho la GPU y consultar el README de la extensión para ver su requisito de VRAM.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Modly merece una mirada si quieres generar mallas 3D a partir de imágenes o prompts en tu propia GPU y mantener tus datos de entrada fuera de la nube.**',
          'Sobre el papel cubre mucho: una app con instalador, gratuita y con licencia MIT para tres sistemas operativos, varios modelos 3D de código abierto mediante extensiones, cuatro formatos de exportación y herramientas de malla integradas. El desarrollo está activo, con la versión 0.5.0 el 18 de noviembre de 2026 y un push el 19 de noviembre de 2026.',
          'Las contrapartidas son una GPU potente, una descarga de modelo antes del primer uso, licencias de modelo sin indicar y un proyecto que aún está por debajo de la versión 1.0. PromptQuorum no ha probado la app, así que pruébala con una imagen pequeña y comprueba la licencia del modelo elegido antes de fiarte de los resultados.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Modly](https://modly3d.app) — descripción del desarrollador, funciones, sección de descarga, consultado el 20 de noviembre de 2026.',
          '[FAQ de la documentación](https://modly3d.app/docs/faq) — precio, uso sin conexión, afirmación sobre la GPU, formatos de exportación, consultado el 20 de noviembre de 2026.',
          '[Workflow](https://modly3d.app/docs/workflow) — entradas, colecciones, declaración de privacidad, consultado el 20 de noviembre de 2026.',
          '[Modelos y variantes](https://modly3d.app/docs/models) — familias de modelos oficiales y variantes cuantizadas, consultado el 20 de noviembre de 2026.',
          '[Catálogo de extensiones](https://modly3d.app/extensions) — extensiones oficiales y de la comunidad, consultado el 20 de noviembre de 2026.',
          '[Hoja de ruta](https://modly3d.app/roadmap) — trabajo planificado, consultado el 20 de noviembre de 2026.',
          '[Repositorio de Modly en GitHub](https://github.com/lightningpixel/modly) — README, LICENSE y último push, consultado el 20 de noviembre de 2026.',
          '[Versión v0.5.0](https://github.com/lightningpixel/modly/releases/tag/v0.5.0) — última versión, fecha, archivos de instalación y notas de la versión, consultado el 20 de noviembre de 2026.',
          '[Extensión Hunyuan3D 2 Mini](https://github.com/lightningpixel/modly-hunyuan3d-mini-extension) — ejemplo de repositorio de extensión oficial, consultado el 20 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de ComfyUI](/es/power-local-llm/comfyui-review) — Interfaz de nodos para generación local de imagen y vídeo.',
          '[Reseña de InvokeAI](/es/power-local-llm/invokeai-review) — Generación local de imágenes con interfaz web.',
          '[Reseña de Draw Things](/es/power-local-llm/draw-things-review) — Generación local de imágenes en macOS y iOS.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA locales.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/modly-review-hero-fr.webp',
    title: 'Test de Modly : générateur local open source d’image vers 3D',
    seoTitle: 'Test de Modly : générateur local d’image vers 3D, GPU',
    intro:
      'Modly est une application de bureau gratuite qui transforme une image ou un prompt texte en maillage 3D, avec des modèles IA open source exécutés sur votre propre GPU. Les modèles s’ajoutent sous forme d’extensions et les résultats s’exportent en GLB, OBJ, STL ou PLY. Ce test s’appuie sur le site web, la documentation et le dépôt GitHub de l’éditeur, consultés le 20 novembre 2026. PromptQuorum n’a pas testé l’application en pratique.',
    metaDescription:
      'Modly est une application de bureau gratuite qui génère des maillages 3D à partir d’images ou de prompts sur votre propre GPU. Plateformes, GPU, limites.',
    twitterDescription:
      'Modly génère des maillages 3D à partir d’une image ou d’un prompt sur votre propre GPU, avec export GLB, OBJ, STL et PLY. Licence MIT, modèles en extensions.',
    audience:
      'Makers, développeurs de jeux et amateurs d’impression 3D qui veulent générer des maillages 3D à partir d’images ou de prompts sur leur propre ordinateur, sans service cloud',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Modly',
    targetKeywords: [
      'test Modly',
      'générateur 3D Modly',
      'image vers 3D en local',
      'générateur de modèles 3D hors ligne',
      'configuration GPU de Modly',
      'extensions Modly',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Modly est une application de bureau gratuite sous licence MIT pour Windows, Linux et les Mac Apple Silicon, qui génère des maillages 3D à partir d’une image ou d’un prompt texte avec des modèles IA open source exécutés sur votre propre GPU.** Les modèles arrivent sous forme d’extensions installables ; les résultats dépendent donc de l’extension choisie.',
    quickAnswerTop: {
      fr: {
        question: 'Qu’est-ce que Modly et à qui s’adresse-t-il ?',
        answer:
          'Modly est un générateur 3D de bureau : vous importez une image ou saisissez un prompt, choisissez une extension de modèle installée, et Modly produit un maillage que vous pouvez prévisualiser et exporter. Il convient à ceux qui veulent des assets 3D générés par IA pour Blender, des moteurs de jeu ou l’impression 3D, tout en gardant leurs données d’entrée sur leur machine.',
        bullets: [
          'Plateformes : Windows (installateur .exe), Linux (AppImage, .deb) et macOS sur Apple Silicon (.dmg).',
          'Prix : gratuit, sans compte ni crédits ; GitHub Sponsors est facultatif.',
          'Licence : MIT avec obligation de créditer le projet d’origine pour les forks ; les licences des modèles sont distinctes.',
          'Modèles : Hunyuan3D 2, TripoSG et Trellis.2 via des extensions officielles, plus des extensions communautaires.',
          'Export : GLB, OBJ, STL et PLY.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l’obtenir', anchor: 'get-it' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Pour qui', anchor: 'who-should-use' },
      { label: 'Limites et ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
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
            text: 'Modly est une application de bureau qui génère des maillages 3D à partir d’une image ou d’un prompt texte avec des modèles IA open source, installés sous forme d’extensions et exécutés sur votre propre GPU.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-y une alternative locale aux services cloud d’image vers 3D : vous téléchargez l’application et un modèle une fois, puis la génération s’exécute sur votre ordinateur. La qualité et la licence des résultats dépendent de l’extension de modèle choisie.',
          },
        ],
        items: [
          'La dernière version est la 0.5.0 (18 novembre 2026) et le dépôt a reçu son dernier push le 19 novembre 2026 ; le développement se poursuit donc et aucun avertissement de projet abandonné ne s’applique.',
          'L’application est livrée avec un installateur pour Windows, Linux et macOS ; les modèles s’installent ensuite en collant une URL GitHub dans la page Models.',
          'La documentation indique qu’un GPU NVIDIA est requis ; les besoins en VRAM dépendent du modèle, et les variantes GGUF quantifiées en demandent moins.',
          'L’éditeur affirme que rien n’est envoyé et que la génération fonctionne hors ligne une fois l’extension et ses poids téléchargés.',
          'PromptQuorum n’a pas testé l’application ni mesuré la qualité des maillages, et la documentation de Modly n’indique pas les licences des modèles 3D.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Les modèles 3D générés par IA peuvent relever des conditions de licence du modèle qui les a produits. Vérifiez la licence de chaque modèle avant de vendre ou de publier des assets générés. Ces informations sont générales et ne constituent pas un conseil juridique.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Modly est une application de bureau de génération 3D à partir d’images ou de prompts, qui exécute les modèles IA sur votre propre ordinateur.**',
          'L’application est publiée par Lightning Pixel, le compte GitHub propriétaire du dépôt, et le pied de page du site indique « Modly by Lightning Pixel ». La dernière version est la 0.5.0, publiée le 18 novembre 2026, et le dépôt a reçu son dernier push le 19 novembre 2026. Le développement se poursuit donc et aucun avertissement de projet abandonné ne s’applique.',
          'Modly est lui-même l’enveloppe d’un backend Python ; les modèles IA s’ajoutent sous forme d’extensions, chacune étant un dépôt GitHub avec un fichier manifeste. Le README cite des extensions officielles pour Hunyuan3D 2 Mini (avec variantes Turbo et Fast), TripoSG et une version GGUF de Trellis2. Le catalogue d’extensions du site liste aussi des extensions communautaires, dont certaines ne sont pas des outils 3D, comme des générateurs de voix et de musique.',
          'Vous importez une image ou saisissez un prompt (l’entrée acceptée dépend de l’extension), choisissez un modèle, et Modly génère un maillage que vous pouvez prévisualiser, modifier et exporter. Ce sont des déclarations de l’éditeur ; PromptQuorum n’a pas exécuté l’application et n’a pas mesuré la qualité des maillages.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l’obtenir',
        content: [
          '**Vous installez Modly avec un installateur classique depuis le site officiel ou la page des releases GitHub ; l’application est gratuite et ne demande aucun compte.**',
          'La version v0.5.0 propose un installateur Windows (.exe), une image disque macOS pour Apple Silicon (.dmg) et un AppImage Linux, et le site cite aussi un .deb Linux. Le titre du site dit « Windows & Linux », alors que sa section de téléchargement et le README couvrent aussi macOS, que le README limite à Apple Silicon. Après l’installation, vous ajoutez un modèle : dans la page Models, vous collez l’URL GitHub d’une extension, puis vous téléchargez les poids, récupérés séparément.',
        ],
        columns: ['Plateforme', 'Comment l’obtenir'],
        rows: [
          { 'Plateforme': '[Windows](https://github.com/lightningpixel/modly/releases/latest)', 'Comment l’obtenir': 'Installateur (.exe)' },
          { 'Plateforme': '[macOS](https://github.com/lightningpixel/modly/releases/latest)', 'Comment l’obtenir': 'Apple Silicon uniquement (.dmg)' },
          { 'Plateforme': '[Linux](https://github.com/lightningpixel/modly/releases/latest)', 'Comment l’obtenir': 'AppImage ou .deb' },
          { 'Plateforme': '[Site web](https://modly3d.app)', 'Comment l’obtenir': 'Site officiel, documentation et catalogue d’extensions' },
          { 'Plateforme': '[Documentation](https://modly3d.app/docs)', 'Comment l’obtenir': 'Installation, modèles, FAQ et journal des modifications' },
          { 'Plateforme': '[GitHub](https://github.com/lightningpixel/modly)', 'Comment l’obtenir': 'Code source et téléchargements des releases' },
        ],
        note: 'Le site web n’a pas de page de politique de confidentialité. L’installateur ne demande pas de terminal ; lancer depuis le code source est une voie distincte pour les développeurs.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Modly associe la génération 3D par modèles à un petit ensemble d’outils d’édition et d’export.** Les points suivants proviennent du site web, du README et des notes de version de la v0.5.0 ; ce sont des déclarations de l’éditeur.',
        ],
        items: [
          'Génération d’image vers 3D et de prompt vers 3D, selon l’extension installée.',
          'Export en GLB, OBJ, STL et PLY pour Blender, Unity, Unreal Engine ou un slicer d’impression 3D.',
          'Suppression automatique de l’arrière-plan des images d’entrée ; les notes de version indiquent qu’elle s’exécute sur le CPU.',
          'Des collections et un espace de travail qui conservent chaque modèle généré, ainsi qu’une page Library et un historique des exécutions.',
          'Outils de maillage dans l’application : lissage, décimation, un panneau d’édition de maillage et des pinceaux de sculpture (Grab, Smooth, Inflate, Flatten), selon les notes de version.',
          'Une page d’échelle réelle et de préparation à l’impression, et des préréglages pour l’impression, le jeu et le web, selon les notes de version.',
          'Un panneau latéral d’agent avec réponses en streaming et une prise en charge d’Ollama mentionnée dans les notes de version ; la feuille de route décrit l’édition de maillage en langage naturel comme un chantier en cours.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Modly affirme que la génération s’exécute sur votre GPU et que rien n’est envoyé, mais les poids du modèle doivent d’abord être téléchargés.**',
          'Le site et la documentation disent que vos images ne touchent jamais un serveur et que la génération fonctionne entièrement hors ligne une fois une extension et ses poids téléchargés. Le README montre que les poids des extensions sont récupérés sur Hugging Face ; l’étape de téléchargement nécessite donc une connexion réseau. Les extensions sont des dépôts GitHub qui exécutent du code sur votre machine : n’installez que des extensions de confiance.',
          'Les notes de version mentionnent un réglage (MODLY_ORIGINS) qui empêche les pages web d’accéder à l’API locale. Le site n’a pas de politique de confidentialité, il n’existe donc aucune déclaration écrite sur la télémétrie ou les rapports de plantage ; PromptQuorum n’a pas inspecté le trafic réseau.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui',
        content: [
          '**Modly convient à ceux qui veulent des assets 3D générés par IA sans service cloud.**',
        ],
        items: [
          'Les amateurs d’impression 3D qui veulent transformer une photo en STL ouvrable dans un slicer.',
          'Les développeurs de jeux et artistes 3D qui veulent un maillage de départ pour Blender, Unity ou Unreal Engine et le retravailleront eux-mêmes.',
          'Les curieux qui veulent essayer plusieurs modèles 3D open source, ou écrire leur propre extension, dans une seule application.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites et ce que nous n’avons pas pu vérifier',
        content: [
          '**Modly indique des limites matérielles, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Limite indiquée : la FAQ de la documentation dit qu’un GPU NVIDIA est requis. Les données structurées du site donnent 6 Go de VRAM comme minimum, et la FAQ dit que les besoins en VRAM dépendent du modèle, les variantes GGUF quantifiées tournant sur un matériel plus modeste.',
          'Non vérifié : le README décrit aussi la prise en charge des GPU AMD via ROCm sous Linux et Windows et une version macOS pour Apple Silicon, ce que l’affirmation NVIDIA de la FAQ ne mentionne pas. PromptQuorum n’a pas vérifié quels GPU fonctionnent avec quels modèles.',
          'Pas adapté : si vous n’avez pas de GPU capable ou si vous avez besoin d’un service hébergé sans installation locale.',
          'Non vérifié : qualité, vitesse et fiabilité des maillages. PromptQuorum n’a pas généré de maillages avec Modly, et la démo et les captures d’écran du site proviennent de l’éditeur.',
          'Non vérifié : les licences des modèles. La documentation de Modly n’indique aucune licence pour Hunyuan3D 2, TripoSG ou Trellis.2, et GitHub ne détecte aucune licence pour les dépôts d’extensions officiels ; lisez les conditions de chaque modèle avant un usage commercial.',
          'Non vérifié : l’organisation derrière l’application. Le site n’a ni mentions légales, ni politique de confidentialité, ni page de conditions, et le dépôt ne nomme que le compte GitHub Lightning Pixel.',
          'Version : Modly est en dessous de la 1.0 (version 0.5.0), et les éléments de la feuille de route du site sont des plans, pas des fonctionnalités livrées.',
          'Non vérifié : avis indépendants et retours d’utilisateurs.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Modly face aux alternatives',
        content: [
          '**Aucune autre application de génération 3D n’a encore de test PromptQuorum ; les outils testés les plus proches sont donc des générateurs d’images locaux.** D’après leurs propres descriptions, ils produisent des images et non des maillages 3D, et PromptQuorum ne les a pas comparés à Modly en pratique.',
        ],
        itemHeadings: true,
        columns: ['Outil', 'Résultat'],
        rows: [
          { 'Outil': 'Modly', 'Résultat': 'Image ou prompt vers maillage 3D' },
          { 'Outil': '[ComfyUI](/fr/power-local-llm/comfyui-review)', 'Résultat': 'Génération locale d’images et de vidéos, interface à nœuds' },
          { 'Outil': '[InvokeAI](/fr/power-local-llm/invokeai-review)', 'Résultat': 'Génération locale d’images, interface web' },
          { 'Outil': '[Draw Things](/fr/power-local-llm/draw-things-review)', 'Résultat': 'Génération locale d’images sur macOS et iOS' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Modly est-il gratuit ?',
            a: 'Oui, selon l’éditeur : la documentation dit qu’il est 100 % gratuit et open source sous licence MIT, sans crédits ni abonnement. Le fichier de licence ajoute que les forks doivent créditer le projet d’origine. GitHub Sponsors est facultatif.',
          },
          {
            q: 'Quels modèles 3D Modly exécute-t-il ?',
            a: 'Via des extensions. Le README cite des extensions officielles pour Hunyuan3D 2 Mini (avec variantes Turbo et Fast), TripoSG et une version GGUF de Trellis2, et vous pouvez installer une extension depuis n’importe quelle URL GitHub ; ce qui tourne dépend donc de ce que vous installez.',
          },
          {
            q: 'Quels formats de fichier puis-je exporter ?',
            a: 'GLB (recommandé), OBJ, STL et PLY, selon la documentation. Les fichiers STL se chargent dans des slicers comme Cura ou PrusaSlicer.',
          },
          {
            q: 'Puis-je utiliser les maillages générés à des fins commerciales ?',
            a: 'La documentation de Modly n’aborde pas ce point. La réponse dépend de la licence de l’extension de modèle utilisée ; lisez-la avant de vendre ou de publier des assets. Ceci n’est pas un conseil juridique.',
          },
          {
            q: 'Que faire si une génération manque de mémoire ?',
            a: 'La documentation suggère une variante plus petite ou quantifiée (GGUF), de fermer les autres applications gourmandes en GPU et de consulter le README de l’extension pour ses besoins en VRAM.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Modly mérite un coup d’œil si vous voulez générer des maillages 3D à partir d’images ou de prompts sur votre propre GPU et garder vos données d’entrée hors du cloud.**',
          'Sur le papier, il couvre beaucoup : une application gratuite sous licence MIT avec installateur pour trois systèmes, plusieurs modèles 3D open source via des extensions, quatre formats d’export et des outils de maillage intégrés. Le développement est actif, avec la version 0.5.0 le 18 novembre 2026 et un push le 19 novembre 2026.',
          'Les compromis : un GPU capable, un téléchargement de modèle avant la première utilisation, des licences de modèles non précisées et un projet encore en dessous de la version 1.0. PromptQuorum n’a pas testé l’application ; essayez-la avec une petite image et vérifiez la licence du modèle choisi avant de vous fier aux résultats.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Modly](https://modly3d.app) — description de l’éditeur, fonctionnalités, section de téléchargement, consulté le 20 novembre 2026.',
          '[FAQ de la documentation](https://modly3d.app/docs/faq) — prix, usage hors ligne, déclaration sur le GPU, formats d’export, consulté le 20 novembre 2026.',
          '[Workflow](https://modly3d.app/docs/workflow) — entrées, collections, déclaration de confidentialité, consulté le 20 novembre 2026.',
          '[Modèles et variantes](https://modly3d.app/docs/models) — familles de modèles officielles et variantes quantifiées, consulté le 20 novembre 2026.',
          '[Catalogue d’extensions](https://modly3d.app/extensions) — extensions officielles et communautaires, consulté le 20 novembre 2026.',
          '[Feuille de route](https://modly3d.app/roadmap) — travaux prévus, consulté le 20 novembre 2026.',
          '[Dépôt GitHub de Modly](https://github.com/lightningpixel/modly) — README, LICENSE et dernier push, consulté le 20 novembre 2026.',
          '[Release v0.5.0](https://github.com/lightningpixel/modly/releases/tag/v0.5.0) — dernière version, date, fichiers d’installation et notes de version, consulté le 20 novembre 2026.',
          '[Extension Hunyuan3D 2 Mini](https://github.com/lightningpixel/modly-hunyuan3d-mini-extension) — exemple de dépôt d’extension officielle, consulté le 20 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de ComfyUI](/fr/power-local-llm/comfyui-review) — Interface à nœuds pour la génération locale d’images et de vidéos.',
          '[Test d’InvokeAI](/fr/power-local-llm/invokeai-review) — Génération locale d’images avec interface web.',
          '[Test de Draw Things](/fr/power-local-llm/draw-things-review) — Génération locale d’images sur macOS et iOS.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/modly-review-hero-ja.webp',
    title: 'Modlyレビュー：ローカル画像→3D生成アプリ',
    seoTitle: 'Modlyレビュー：画像から3Dを作るローカルアプリとGPU要件',
    intro:
      'Modlyは、画像またはテキストプロンプトから3Dメッシュを生成する無料のデスクトップアプリです。オープンソースのAIモデルをご自身のGPUで動かします。モデルは拡張機能として追加し、結果はGLB、OBJ、STL、PLYで書き出せます。このレビューは、開発元のWebサイト、ドキュメント、GitHubリポジトリ（2026年11月20日に確認）に基づいています。PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'Modlyは画像やプロンプトから3Dメッシュを自分のGPUで生成する無料デスクトップアプリです。対応OS、GPU要件、プライバシー、制限事項を解説します。',
    twitterDescription:
      'Modlyは画像やプロンプトから3Dメッシュを自分のGPUで生成します。GLB、OBJ、STL、PLYで書き出し可能。MITライセンス、モデルは拡張機能で追加。',
    audience:
      'クラウドサービスを使わず、自分のPCで画像やプロンプトから3Dメッシュを生成したいクリエイター、ゲーム開発者、3Dプリントの愛好家',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Modly',
    targetKeywords: [
      'Modly レビュー',
      'Modly 3D生成',
      'ローカル 画像から3D',
      'オフライン 3Dモデル生成',
      'Modly GPU要件',
      'Modly 拡張機能',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**ModlyはMITライセンスの無料デスクトップアプリで、Windows、Linux、Apple Silicon搭載Macに対応します。画像またはテキストプロンプトから、ご自身のGPUで動くオープンソースAIモデルを使って3Dメッシュを生成します。** モデルはインストール可能な拡張機能として提供されるため、結果は選んだ拡張機能によって変わります。',
    quickAnswerTop: {
      ja: {
        question: 'Modlyとは何で、どんな人向けですか？',
        answer:
          'Modlyはデスクトップの3D生成アプリです。画像を取り込むかプロンプトを入力し、インストール済みのモデル拡張機能を選ぶと、プレビューと書き出しができるメッシュを生成します。Blender、ゲームエンジン、3Dプリント向けにAI生成の3Dアセットを作りたく、入力データを手元のPCに置いておきたい人に向いています。',
        bullets: [
          '対応OS：Windows（.exeインストーラー）、Linux（AppImage、.deb）、Apple SiliconのmacOS（.dmg）。',
          '価格：無料。アカウントやクレジットは不要で、GitHub Sponsorsは任意です。',
          'ライセンス：MIT。フォークにはクレジット表記が必要で、モデルのライセンスは別です。',
          'モデル：公式拡張機能でHunyuan3D 2、TripoSG、Trellis.2。コミュニティ拡張機能もあります。',
          '書き出し：GLB、OBJ、STL、PLY。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '機能', anchor: 'features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '制限事項と確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '代替ツール', anchor: 'alternatives' },
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
            text: 'Modlyは、画像またはテキストプロンプトから3Dメッシュを生成するデスクトップアプリで、オープンソースのAIモデルを拡張機能として導入し、ご自身のGPUで動かします。',
          },
          {
            type: 'plain-terms',
            text: 'クラウドの画像→3Dサービスのローカル版と考えてください。アプリとモデルを一度ダウンロードすれば、生成はPC上で動きます。結果の品質とライセンスは、選んだモデル拡張機能によって変わります。',
          },
        ],
        items: [
          '最新リリースはバージョン0.5.0（2026年11月18日）で、リポジトリの最終プッシュは2026年11月19日です。開発は続いており、放置プロジェクトの警告は該当しません。',
          'アプリはWindows、Linux、macOS用のインストーラーで配布されます。モデルは、Modelsページに GitHubのURLを貼り付けて後から導入します。',
          'ドキュメントによると、NVIDIA GPUが必要です。必要なVRAMはモデルによって異なり、量子化されたGGUF版はより少なくて済みます。',
          '開発元は、拡張機能と重みをダウンロードした後は何もアップロードされず、オフラインで生成できるとしています。',
          'PromptQuorumはアプリを試しておらず、メッシュの品質も測定していません。Modlyのドキュメントには3Dモデルのライセンスの記載がありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AIで生成した3Dモデルには、生成に使ったモデルのライセンス条件が及ぶ場合があります。生成したアセットを販売・公開する前に、各モデルのライセンスを確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Modlyは、画像やプロンプトから3Dを生成するデスクトップアプリで、AIモデルをご自身のPC上で動かします。**',
          'アプリの開発元はLightning Pixelで、リポジトリを所有するGitHubアカウントです。Webサイトのフッターには「Modly by Lightning Pixel」とあります。最新リリースは2026年11月18日公開のバージョン0.5.0で、リポジトリの最終プッシュは2026年11月19日です。開発は続いており、放置プロジェクトの警告は該当しません。',
          'Modly本体はPythonバックエンドを包むシェルで、AIモデルは拡張機能として追加します。各拡張機能はマニフェストファイルを持つGitHubリポジトリです。READMEには、Hunyuan3D 2 Mini（TurboとFastの派生版を含む）、TripoSG、Trellis2のGGUF版の公式拡張機能が載っています。Webサイトの拡張機能カタログにはコミュニティ拡張機能もあり、音声や音楽の生成ツールなど、3D以外のものも含まれます。',
          '画像を取り込むかプロンプトを入力し（使える入力は拡張機能によります）、モデルを選ぶと、Modlyがプレビュー、編集、書き出しできるメッシュを生成します。以上は開発元の説明です。PromptQuorumはアプリを実行しておらず、メッシュの出来も測定していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Modlyは公式サイトまたはGitHubのリリースページから通常のインストーラーで導入します。アプリは無料で、アカウントは不要です。**',
          'v0.5.0のリリースには、Windows用インストーラー（.exe）、Apple Silicon向けmacOSディスクイメージ（.dmg）、Linux用AppImageがあり、WebサイトにはさらにLinux用の.debも記載されています。Webサイトの見出しは「Windows & Linux」ですが、ダウンロード欄とREADMEはmacOSにも触れており、READMEはApple Siliconに限定しています。インストール後にモデルを追加します。Modelsページで拡張機能のGitHub URLを貼り付け、別途取得される重みをダウンロードします。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[Windows](https://github.com/lightningpixel/modly/releases/latest)', '入手方法': 'インストーラー（.exe）' },
          { 'プラットフォーム': '[macOS](https://github.com/lightningpixel/modly/releases/latest)', '入手方法': 'Apple Siliconのみ（.dmg）' },
          { 'プラットフォーム': '[Linux](https://github.com/lightningpixel/modly/releases/latest)', '入手方法': 'AppImageまたは.deb' },
          { 'プラットフォーム': '[Webサイト](https://modly3d.app)', '入手方法': '公式サイト、ドキュメント、拡張機能カタログ' },
          { 'プラットフォーム': '[ドキュメント](https://modly3d.app/docs)', '入手方法': '導入、モデル、FAQ、変更履歴' },
          { 'プラットフォーム': '[GitHub](https://github.com/lightningpixel/modly)', '入手方法': 'ソースコードとリリースのダウンロード' },
        ],
        note: 'Webサイトにプライバシーポリシーのページはありません。インストーラー版ではターミナルは不要で、ソースからの実行は開発者向けの別の方法です。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Modlyは、モデルによる3D生成に、少数の編集・書き出しツールを組み合わせたアプリです。** 以下はWebサイト、README、v0.5.0のリリースノートに基づく開発元の説明です。',
        ],
        items: [
          'インストールした拡張機能に応じた、画像→3Dおよびプロンプト→3Dの生成。',
          'Blender、Unity、Unreal Engine、3DプリンターのスライサーにGLB、OBJ、STL、PLYで書き出し。',
          '入力画像の背景を自動で除去。リリースノートによるとCPUで動作します。',
          '生成した全モデルを保存するコレクションとワークスペース、Libraryページ、実行履歴。',
          'アプリ内のメッシュツール：スムージング、ポリゴン削減、メッシュ編集パネル、スカルプトブラシ（Grab、Smooth、Inflate、Flatten）。リリースノートによる記載です。',
          '実寸スケールと印刷準備のページ、印刷・ゲーム・Web用のプリセット。リリースノートによる記載です。',
          'ストリーミング応答のエージェント用サイドパネル。リリースノートにOllamaへの対応が記載されています。ロードマップでは、自然な言葉でのメッシュ編集を作業中としています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**Modlyは、生成はGPU上で動き何もアップロードされないとしていますが、モデルの重みは先にダウンロードする必要があります。**',
          'Webサイトとドキュメントは、画像がサーバーに送られることはなく、拡張機能と重みをダウンロードした後は完全にオフラインで生成できると説明しています。READMEによると、拡張機能の重みはHugging Faceから取得されるため、ダウンロード時にはネットワーク接続が必要です。拡張機能はお使いのPC上でコードを実行するGitHubリポジトリなので、信頼できるものだけを導入してください。',
          'リリースノートには、Webページからローカルのアプリ用APIへのアクセスを防ぐ設定（MODLY_ORIGINS）が記載されています。Webサイトにはプライバシーポリシーがなく、テレメトリやクラッシュレポートに関する文書上の説明はありません。PromptQuorumはネットワーク通信を調べていません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Modlyは、クラウドサービスを使わずにAI生成の3Dアセットを作りたい人に向いています。**',
        ],
        items: [
          '写真からスライサーで開けるSTLを作りたい、3Dプリントの愛好家。',
          'Blender、Unity、Unreal Engine用の元メッシュがほしく、仕上げは自分で行うゲーム開発者や3Dアーティスト。',
          '複数のオープンソース3Dモデルを試したい、または自作の拡張機能を書きたい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '制限事項と確認できなかったこと',
        content: [
          '**Modlyにはハードウェア面の制限があり、いくつかの点は未確認です。**',
        ],
        items: [
          '記載されている制限：ドキュメントのFAQはNVIDIA GPUが必要としています。Webサイトの構造化データは最低6 GBのVRAMと記載し、FAQは必要なVRAMはモデルによって異なり、量子化されたGGUF版はより控えめなハードウェアで動くとしています。',
          '未確認：READMEは、LinuxとWindowsでのROCmによるAMD GPU対応や、Apple Silicon向けmacOSビルドも説明していますが、FAQのNVIDIAに関する記載はこれに触れていません。PromptQuorumは、どのGPUがどのモデルで動くかを確認していません。',
          '向かない人：高性能なGPUがない人、ローカル設定が不要なホスト型サービスがほしい人。',
          '未確認：メッシュの品質、速度、信頼性。PromptQuorumはModlyでメッシュを生成しておらず、Webサイトのデモやスクリーンショットは開発元によるものです。',
          '未確認：モデルのライセンス。Modlyのドキュメントには、Hunyuan3D 2、TripoSG、Trellis.2のライセンスの記載がなく、GitHubも公式拡張機能リポジトリのライセンスを検出していません。商用利用の前に、各モデル自体の条件をお読みください。',
          '未確認：アプリの運営主体。Webサイトに運営者情報（インプリント）、プライバシーポリシー、利用規約のページはなく、リポジトリにはGitHubアカウントのLightning Pixelの名前しかありません。',
          'バージョン：Modlyは1.0未満（バージョン0.5.0）で、Webサイトのロードマップの項目は計画であり、提供済みの機能ではありません。',
          '未確認：第三者によるレビューやユーザーの報告。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: '代替ツール',
        content: [
          '**3D生成アプリのPromptQuorumレビューはまだほかにないため、レビュー済みで最も近いツールはローカルの画像生成ツールです。** それぞれの説明では3Dメッシュではなく画像を生成するもので、PromptQuorumはModlyと実際に比較していません。',
        ],
        itemHeadings: true,
        columns: ['ツール', '出力'],
        rows: [
          { 'ツール': 'Modly', '出力': '画像またはプロンプトから3Dメッシュ' },
          { 'ツール': '[ComfyUI](/ja/power-local-llm/comfyui-review)', '出力': 'ローカルの画像・動画生成、ノードベースUI' },
          { 'ツール': '[InvokeAI](/ja/power-local-llm/invokeai-review)', '出力': 'ローカルの画像生成、Web UI' },
          { 'ツール': '[Draw Things](/ja/power-local-llm/draw-things-review)', '出力': 'macOSとiOSでのローカル画像生成' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Modlyは無料ですか？',
            a: 'はい、開発元によるとそうです。ドキュメントは、MITライセンスの100%無料のオープンソースで、クレジットやサブスクリプションはないとしています。ライセンスファイルには、フォークは元のプロジェクトのクレジット表記が必要と追記されています。GitHub Sponsorsは任意です。',
          },
          {
            q: 'Modlyはどの3Dモデルを動かせますか？',
            a: '拡張機能を通じて動かします。READMEには、Hunyuan3D 2 Mini（TurboとFastの派生版を含む）、TripoSG、Trellis2のGGUF版の公式拡張機能が載っており、任意のGitHub URLから拡張機能を導入することもできます。動くモデルは、何を導入するかによって決まります。',
          },
          {
            q: 'どのファイル形式で書き出せますか？',
            a: 'ドキュメントによると、GLB（推奨）、OBJ、STL、PLYです。STLファイルは、CuraやPrusaSlicerなどのスライサーに読み込めます。',
          },
          {
            q: '生成したメッシュを商用利用できますか？',
            a: 'Modlyのドキュメントはこの点に触れていません。答えは使ったモデル拡張機能のライセンスによるため、アセットを販売・公開する前にお読みください。法的助言ではありません。',
          },
          {
            q: '生成中にメモリ不足になったらどうすればよいですか？',
            a: 'ドキュメントでは、より小さい、または量子化（GGUF）された版を使うこと、GPUを多く使う他のアプリを閉じること、拡張機能のREADMEでVRAM要件を確認することを勧めています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**自分のGPUで画像やプロンプトから3Dメッシュを生成し、入力データをクラウドに出したくない人には、試す価値があります。**',
          '紙の上では多くをカバーしています。3つのOSに対応したMITライセンスの無料インストーラーアプリ、拡張機能で使える複数のオープンソース3Dモデル、4つの書き出し形式、内蔵のメッシュツールです。開発は活発で、2026年11月18日にバージョン0.5.0、2026年11月19日にプッシュがありました。',
          '代わりに、高性能なGPU、初回利用前のモデルダウンロード、記載のないモデルライセンス、まだ1.0に達していないプロジェクトという点があります。PromptQuorumはアプリを試していないため、小さな画像で試し、選んだモデルのライセンスを確認してから結果を当てにしてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Modly Webサイト](https://modly3d.app) — 開発元の説明、機能、ダウンロード欄。2026年11月20日に確認。',
          '[ドキュメントFAQ](https://modly3d.app/docs/faq) — 価格、オフライン利用、GPUの記載、書き出し形式。2026年11月20日に確認。',
          '[Workflow](https://modly3d.app/docs/workflow) — 入力、コレクション、プライバシーに関する説明。2026年11月20日に確認。',
          '[モデルとバリアント](https://modly3d.app/docs/models) — 公式モデルファミリーと量子化版。2026年11月20日に確認。',
          '[拡張機能カタログ](https://modly3d.app/extensions) — 公式およびコミュニティの拡張機能。2026年11月20日に確認。',
          '[ロードマップ](https://modly3d.app/roadmap) — 計画中の作業。2026年11月20日に確認。',
          '[ModlyのGitHubリポジトリ](https://github.com/lightningpixel/modly) — README、LICENSE、最終プッシュ。2026年11月20日に確認。',
          '[リリースv0.5.0](https://github.com/lightningpixel/modly/releases/tag/v0.5.0) — 最新バージョン、日付、インストーラーのファイル、リリースノート。2026年11月20日に確認。',
          '[Hunyuan3D 2 Mini拡張機能](https://github.com/lightningpixel/modly-hunyuan3d-mini-extension) — 公式拡張機能リポジトリの例。2026年11月20日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ComfyUIレビュー](/ja/power-local-llm/comfyui-review) — ローカルの画像・動画生成向けノードベースUI。',
          '[InvokeAIレビュー](/ja/power-local-llm/invokeai-review) — Web UIを備えたローカル画像生成。',
          '[Draw Thingsレビュー](/ja/power-local-llm/draw-things-review) — macOSとiOSでのローカル画像生成。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/modly-review-hero-pt.webp',
    title: 'Análise do Modly: gerador local e de código aberto de imagem para 3D',
    seoTitle: 'Análise do Modly: gerador local de imagem para 3D, GPU',
    intro:
      'O Modly é um app de desktop gratuito que transforma uma imagem ou um prompt de texto em uma malha 3D, com modelos de IA de código aberto que rodam na sua própria GPU. Os modelos entram como extensões e os resultados são exportados em GLB, OBJ, STL ou PLY. Esta análise se baseia no site, na documentação e no repositório do GitHub do desenvolvedor, consultados em 20 de novembro de 2026. A PromptQuorum não testou o app na prática.',
    metaDescription:
      'O Modly é um app de desktop gratuito que gera malhas 3D a partir de imagens ou prompts na sua própria GPU. Plataformas, GPU, privacidade e limites.',
    twitterDescription:
      'O Modly gera malhas 3D a partir de uma imagem ou prompt na sua própria GPU, com exportação em GLB, OBJ, STL e PLY. Licença MIT, modelos como extensões.',
    audience:
      'Criadores, desenvolvedores de jogos e entusiastas de impressão 3D que querem gerar malhas 3D a partir de imagens ou prompts no próprio computador, sem um serviço na nuvem',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Modly',
    targetKeywords: [
      'análise do Modly',
      'gerador 3D Modly',
      'imagem para 3D local',
      'gerador de modelos 3D offline',
      'requisitos de GPU do Modly',
      'extensões do Modly',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Modly é um app de desktop gratuito, com licença MIT, para Windows, Linux e Macs com Apple Silicon, que gera malhas 3D a partir de uma imagem ou de um prompt de texto com modelos de IA de código aberto rodando na sua própria GPU.** Os modelos chegam como extensões instaláveis, então os resultados dependem da extensão que você escolher.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Modly e para quem ele serve?',
        answer:
          'O Modly é um gerador 3D de desktop: você importa uma imagem ou digita um prompt, escolhe uma extensão de modelo instalada e o Modly produz uma malha que você pode visualizar e exportar. Serve para quem quer ativos 3D gerados por IA para Blender, engines de jogos ou impressão 3D e prefere manter os dados de entrada no próprio computador.',
        bullets: [
          'Plataformas: Windows (instalador .exe), Linux (AppImage, .deb) e macOS com Apple Silicon (.dmg).',
          'Preço: gratuito, sem conta nem créditos; o GitHub Sponsors é opcional.',
          'Licença: MIT, com exigência de crédito para forks; as licenças dos modelos são separadas.',
          'Modelos: Hunyuan3D 2, TripoSG e Trellis.2 por extensões oficiais, além de extensões da comunidade.',
          'Exportação: GLB, OBJ, STL e PLY.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'Limites e o que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Alternativas', anchor: 'alternatives' },
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
            text: 'O Modly é um app de desktop que gera malhas 3D a partir de uma imagem ou de um prompt de texto com modelos de IA de código aberto, instalados como extensões e executados na sua própria GPU.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma alternativa local aos serviços de imagem para 3D na nuvem: você baixa o app e um modelo uma vez, e a geração passa a rodar no seu computador. A qualidade e a licença dos resultados dependem da extensão de modelo escolhida.',
          },
        ],
        items: [
          'A versão mais recente é a 0.5.0 (18 de novembro de 2026) e o repositório recebeu o último push em 19 de novembro de 2026; o desenvolvimento continua e nenhum aviso de projeto abandonado se aplica.',
          'O app é distribuído como instalador para Windows, Linux e macOS; os modelos são instalados depois, colando uma URL do GitHub na página Models.',
          'A documentação diz que é preciso uma GPU NVIDIA; a VRAM necessária depende do modelo, e variantes GGUF quantizadas precisam de menos.',
          'O desenvolvedor diz que nada é enviado e que a geração funciona offline depois que a extensão e seus pesos são baixados.',
          'A PromptQuorum não testou o app nem mediu a qualidade das malhas, e a documentação do Modly não informa as licenças dos modelos 3D.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Modelos 3D gerados por IA podem estar sujeitos aos termos de licença do modelo que os produziu. Confira a licença de cada modelo antes de vender ou publicar ativos gerados. Esta é uma informação geral, não aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Modly é um aplicativo de desktop para gerar 3D a partir de imagens ou prompts que executa os modelos de IA no seu próprio computador.**',
          'O app é feito pela Lightning Pixel, a conta do GitHub dona do repositório, e o rodapé do site diz "Modly by Lightning Pixel". A versão mais recente é a 0.5.0, publicada em 18 de novembro de 2026, e o repositório recebeu o último push em 19 de novembro de 2026. Portanto o desenvolvimento continua e nenhum aviso de projeto abandonado se aplica.',
          'O Modly em si é a casca de um backend em Python; os modelos de IA entram como extensões, cada uma um repositório do GitHub com um arquivo de manifesto. O README lista extensões oficiais para Hunyuan3D 2 Mini (com variantes Turbo e Fast), TripoSG e uma versão GGUF do Trellis2. O catálogo de extensões do site também lista extensões da comunidade, algumas delas sem relação com 3D, como geradores de voz e de música.',
          'Você importa uma imagem ou digita um prompt (qual entrada funciona depende da extensão), escolhe um modelo e o Modly gera uma malha que você pode visualizar, editar e exportar. São declarações do desenvolvedor; a PromptQuorum não executou o app e não mediu a qualidade das malhas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o Modly com um instalador comum, a partir do site oficial ou da página de releases do GitHub; o app é gratuito e não exige conta.**',
          'O release v0.5.0 traz um instalador para Windows (.exe), uma imagem de disco do macOS para Apple Silicon (.dmg) e um AppImage para Linux, e o site cita também um .deb para Linux. A manchete do site diz "Windows & Linux", enquanto a seção de download e o README também cobrem o macOS, que o README limita ao Apple Silicon. Depois de instalar, você adiciona um modelo: na página Models, cola a URL do GitHub de uma extensão e então baixa os pesos, obtidos separadamente.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[Windows](https://github.com/lightningpixel/modly/releases/latest)', 'Como obter': 'Instalador (.exe)' },
          { 'Plataforma': '[macOS](https://github.com/lightningpixel/modly/releases/latest)', 'Como obter': 'Somente Apple Silicon (.dmg)' },
          { 'Plataforma': '[Linux](https://github.com/lightningpixel/modly/releases/latest)', 'Como obter': 'AppImage ou .deb' },
          { 'Plataforma': '[Site](https://modly3d.app)', 'Como obter': 'Site oficial, documentação e catálogo de extensões' },
          { 'Plataforma': '[Documentação](https://modly3d.app/docs)', 'Como obter': 'Instalação, modelos, FAQ e changelog' },
          { 'Plataforma': '[GitHub](https://github.com/lightningpixel/modly)', 'Como obter': 'Código-fonte e downloads dos releases' },
        ],
        note: 'O site não tem uma página de política de privacidade. O instalador dispensa o terminal; rodar a partir do código-fonte é um caminho separado para desenvolvedores.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O Modly combina geração 3D baseada em modelos com um conjunto pequeno de ferramentas de edição e exportação.** Os pontos abaixo vêm do site, do README e das notas de versão da v0.5.0; são declarações do desenvolvedor.',
        ],
        items: [
          'Geração de imagem para 3D e de prompt para 3D, conforme a extensão instalada.',
          'Exportação em GLB, OBJ, STL e PLY para Blender, Unity, Unreal Engine ou um slicer de impressão 3D.',
          'Remoção automática do fundo das imagens de entrada; as notas de versão dizem que roda na CPU.',
          'Coleções e um espaço de trabalho que guardam cada modelo gerado, além de uma página Library e um histórico de execuções.',
          'Ferramentas de malha no app: suavização, decimação, um painel de edição de malha e pincéis de escultura (Grab, Smooth, Inflate, Flatten), segundo as notas de versão.',
          'Uma página de escala real e preparação para impressão, e predefinições para impressão, jogos e web, segundo as notas de versão.',
          'Um painel lateral de agente com respostas em streaming e suporte ao Ollama citado nas notas de versão; o roadmap descreve a edição de malha em linguagem natural como trabalho em andamento.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**O Modly diz que a geração roda na sua GPU e que nada é enviado, mas os pesos do modelo precisam ser baixados antes.**',
          'O site e a documentação dizem que suas imagens nunca chegam a um servidor e que a geração funciona totalmente offline depois que uma extensão e seus pesos são baixados. O README mostra que os pesos das extensões são obtidos do Hugging Face, então a etapa de download precisa de conexão com a internet. As extensões são repositórios do GitHub que executam código no seu computador, portanto instale apenas extensões em que você confia.',
          'As notas de versão citam uma configuração (MODLY_ORIGINS) que mantém páginas web fora da API local. O site não tem política de privacidade, então não há declaração escrita sobre telemetria ou relatórios de falha; a PromptQuorum não inspecionou o tráfego de rede.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Modly serve para quem quer ativos 3D gerados por IA sem um serviço na nuvem.**',
        ],
        items: [
          'Entusiastas de impressão 3D que querem transformar uma foto em um STL que possam abrir em um slicer.',
          'Desenvolvedores de jogos e artistas 3D que querem uma malha inicial para Blender, Unity ou Unreal Engine e vão refiná-la por conta própria.',
          'Curiosos que querem testar vários modelos 3D de código aberto, ou escrever a própria extensão, em um único app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Limites e o que não conseguimos verificar',
        content: [
          '**O Modly declara limites de hardware, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Limite declarado: a FAQ da documentação diz que é necessária uma GPU NVIDIA. Os dados estruturados do site indicam 6 GB de VRAM como mínimo, e a FAQ diz que a VRAM necessária depende do modelo, com variantes GGUF quantizadas rodando em hardware mais modesto.',
          'Não verificado: o README também descreve suporte a GPUs AMD via ROCm no Linux e no Windows e um build do macOS para Apple Silicon, o que a afirmação sobre NVIDIA na FAQ não menciona. A PromptQuorum não verificou quais GPUs funcionam com quais modelos.',
          'Não serve para: quem não tem uma GPU capaz ou precisa de um serviço hospedado sem configuração local.',
          'Não verificado: qualidade, velocidade e confiabilidade das malhas. A PromptQuorum não gerou malhas com o Modly, e a demonstração e as capturas de tela do site são do próprio desenvolvedor.',
          'Não verificado: as licenças dos modelos. A documentação do Modly não informa licença para Hunyuan3D 2, TripoSG ou Trellis.2, e o GitHub não detecta licença nos repositórios das extensões oficiais; leia os termos de cada modelo antes do uso comercial.',
          'Não verificado: a organização por trás do app. O site não tem aviso legal, política de privacidade nem página de termos, e o repositório cita apenas a conta do GitHub Lightning Pixel.',
          'Versão: o Modly está abaixo da 1.0 (versão 0.5.0), e os itens do roadmap no site são planos, não recursos já entregues.',
          'Não verificado: análises independentes e relatos de usuários.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Modly e as alternativas',
        content: [
          '**Nenhum outro app de geração 3D tem ainda uma análise da PromptQuorum, então as ferramentas analisadas mais próximas são geradores locais de imagens.** Pelas próprias descrições, elas produzem imagens e não malhas 3D, e a PromptQuorum não as comparou com o Modly na prática.',
        ],
        itemHeadings: true,
        columns: ['Ferramenta', 'Resultado'],
        rows: [
          { 'Ferramenta': 'Modly', 'Resultado': 'Imagem ou prompt para malha 3D' },
          { 'Ferramenta': '[ComfyUI](/pt/power-local-llm/comfyui-review)', 'Resultado': 'Geração local de imagem e vídeo, interface de nós' },
          { 'Ferramenta': '[InvokeAI](/pt/power-local-llm/invokeai-review)', 'Resultado': 'Geração local de imagens, interface web' },
          { 'Ferramenta': '[Draw Things](/pt/power-local-llm/draw-things-review)', 'Resultado': 'Geração local de imagens no macOS e no iOS' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Modly é gratuito?',
            a: 'Sim, segundo o desenvolvedor: a documentação diz que é 100% gratuito e de código aberto sob a licença MIT, sem créditos nem assinaturas. O arquivo de licença acrescenta que forks devem creditar o projeto original. O GitHub Sponsors é opcional.',
          },
          {
            q: 'Quais modelos 3D o Modly executa?',
            a: 'Por meio de extensões. O README lista extensões oficiais para Hunyuan3D 2 Mini (com variantes Turbo e Fast), TripoSG e uma versão GGUF do Trellis2, e você pode instalar uma extensão a partir de qualquer URL do GitHub; o que roda depende do que você instalar.',
          },
          {
            q: 'Quais formatos de arquivo posso exportar?',
            a: 'GLB (recomendado), OBJ, STL e PLY, segundo a documentação. Arquivos STL podem ser carregados em slicers como Cura ou PrusaSlicer.',
          },
          {
            q: 'Posso usar as malhas geradas comercialmente?',
            a: 'A documentação do Modly não trata desse ponto. A resposta depende da licença da extensão de modelo usada; leia-a antes de vender ou publicar ativos. Isto não é aconselhamento jurídico.',
          },
          {
            q: 'E se uma geração ficar sem memória?',
            a: 'A documentação sugere uma variante menor ou quantizada (GGUF), fechar outros apps que usam muito a GPU e consultar o README da extensão para ver o requisito de VRAM.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Modly vale uma olhada se você quer gerar malhas 3D a partir de imagens ou prompts na sua própria GPU e manter seus dados de entrada fora da nuvem.**',
          'No papel, cobre bastante coisa: um app gratuito com instalador e licença MIT para três sistemas operacionais, vários modelos 3D de código aberto por extensões, quatro formatos de exportação e ferramentas de malha integradas. O desenvolvimento está ativo, com a versão 0.5.0 em 18 de novembro de 2026 e um push em 19 de novembro de 2026.',
          'As contrapartidas são uma GPU capaz, o download de um modelo antes do primeiro uso, licenças de modelos não informadas e um projeto ainda abaixo da versão 1.0. A PromptQuorum não testou o app; experimente com uma imagem pequena e confira a licença do modelo escolhido antes de confiar nos resultados.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Modly](https://modly3d.app) — descrição do desenvolvedor, recursos, seção de download, consultado em 20 de novembro de 2026.',
          '[FAQ da documentação](https://modly3d.app/docs/faq) — preço, uso offline, declaração sobre a GPU, formatos de exportação, consultado em 20 de novembro de 2026.',
          '[Workflow](https://modly3d.app/docs/workflow) — entradas, coleções, declaração de privacidade, consultado em 20 de novembro de 2026.',
          '[Modelos e variantes](https://modly3d.app/docs/models) — famílias de modelos oficiais e variantes quantizadas, consultado em 20 de novembro de 2026.',
          '[Catálogo de extensões](https://modly3d.app/extensions) — extensões oficiais e da comunidade, consultado em 20 de novembro de 2026.',
          '[Roadmap](https://modly3d.app/roadmap) — trabalho planejado, consultado em 20 de novembro de 2026.',
          '[Repositório do Modly no GitHub](https://github.com/lightningpixel/modly) — README, LICENSE e último push, consultado em 20 de novembro de 2026.',
          '[Release v0.5.0](https://github.com/lightningpixel/modly/releases/tag/v0.5.0) — versão mais recente, data, arquivos de instalação e notas de versão, consultado em 20 de novembro de 2026.',
          '[Extensão Hunyuan3D 2 Mini](https://github.com/lightningpixel/modly-hunyuan3d-mini-extension) — exemplo de repositório de extensão oficial, consultado em 20 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do ComfyUI](/pt/power-local-llm/comfyui-review) — Interface de nós para geração local de imagem e vídeo.',
          '[Análise do InvokeAI](/pt/power-local-llm/invokeai-review) — Geração local de imagens com interface web.',
          '[Análise do Draw Things](/pt/power-local-llm/draw-things-review) — Geração local de imagens no macOS e no iOS.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/modly-review-hero-zh.webp',
    title: 'Modly 评测：本地运行的开源图片转 3D 生成器',
    seoTitle: 'Modly 评测：本地图片转 3D 生成器、显卡需求与隐私',
    intro:
      'Modly 是一款免费的桌面应用，可用在您自己 GPU 上运行的开源 AI 模型，把图片或文本提示词生成 3D 网格。模型以扩展形式添加，结果可导出为 GLB、OBJ、STL 或 PLY。本评测基于开发者的网站、文档和 GitHub 仓库，核查日期为 2026 年 11 月 20 日。PromptQuorum 未对该应用进行实际测试。',
    metaDescription:
      'Modly 是免费桌面应用，可在您自己的 GPU 上根据图片或提示词生成 3D 网格。涵盖支持平台、显卡需求、模型扩展、隐私、模型许可与局限，并说明哪些内容未经核实。',
    twitterDescription:
      'Modly 在您自己的 GPU 上根据图片或提示词生成 3D 网格，支持导出 GLB、OBJ、STL 和 PLY。MIT 许可，模型以扩展形式提供。',
    audience:
      '希望不依赖云服务、在自己电脑上根据图片或提示词生成 3D 网格的创作者、游戏开发者和 3D 打印爱好者',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Modly',
    targetKeywords: [
      'Modly 评测',
      'Modly 3D 生成器',
      '本地图片转 3D',
      '离线 3D 模型生成器',
      'Modly 显卡需求',
      'Modly 扩展',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Modly 是一款采用 MIT 许可的免费桌面应用，支持 Windows、Linux 和 Apple Silicon Mac，可用在您自己 GPU 上运行的开源 AI 模型，根据图片或文本提示词生成 3D 网格。** 模型以可安装的扩展形式提供，因此结果取决于您选择的扩展。',
    quickAnswerTop: {
      zh: {
        question: 'Modly 是什么，适合谁用？',
        answer:
          'Modly 是一款桌面 3D 生成工具：导入图片或输入提示词，选择已安装的模型扩展，Modly 就会生成可预览和导出的网格。适合想为 Blender、游戏引擎或 3D 打印制作 AI 生成 3D 素材、又希望输入数据留在自己电脑上的人。',
        bullets: [
          '平台：Windows（.exe 安装程序）、Linux（AppImage、.deb）和 Apple Silicon 上的 macOS（.dmg）。',
          '价格：免费，无需账号或积分；GitHub Sponsors 为可选项。',
          '许可：MIT，要求分支项目注明原项目；模型许可另行适用。',
          '模型：通过官方扩展支持 Hunyuan3D 2、TripoSG 和 Trellis.2，另有社区扩展。',
          '导出：GLB、OBJ、STL 和 PLY。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '如何获取', anchor: 'get-it' },
      { label: '功能', anchor: 'features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '局限与我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '替代方案', anchor: 'alternatives' },
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
            text: 'Modly 是一款桌面应用，可用以扩展形式安装、在您自己 GPU 上运行的开源 AI 模型，根据图片或文本提示词生成 3D 网格。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作云端图片转 3D 服务的本地替代品：下载一次应用和模型，之后生成就在您的电脑上运行。结果的质量和许可取决于您选择的模型扩展。',
          },
        ],
        items: [
          '最新版本为 0.5.0（2026 年 11 月 18 日），仓库最近一次推送在 2026 年 11 月 19 日，因此开发仍在继续，不适用停止维护警告。',
          '应用以 Windows、Linux 和 macOS 安装程序形式发布；之后在 Models 页面粘贴 GitHub 网址来安装模型。',
          '文档称需要 NVIDIA GPU；所需显存因模型而异，量化的 GGUF 版本需要更少。',
          '开发者称不会上传任何内容，扩展及其权重下载完成后可离线生成。',
          'PromptQuorum 未测试该应用，也未衡量网格质量，Modly 文档也未说明各 3D 模型的许可。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI 生成的 3D 模型可能受生成它的模型的许可条款约束。在出售或发布生成的素材之前，请核对每个模型的许可。这是一般性信息，不构成法律意见。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Modly 是一款根据图片或提示词生成 3D 的桌面应用，AI 模型在您自己的电脑上运行。**',
          '该应用由 Lightning Pixel 开发，即拥有该仓库的 GitHub 账号，网站页脚写有“Modly by Lightning Pixel”。最新版本是 2026 年 11 月 18 日发布的 0.5.0，仓库最近一次推送在 2026 年 11 月 19 日。因此开发仍在继续，不适用停止维护警告。',
          'Modly 本身是包裹 Python 后端的外壳；AI 模型以扩展形式添加，每个扩展是一个带清单文件的 GitHub 仓库。README 列出了 Hunyuan3D 2 Mini（含 Turbo 和 Fast 变体）、TripoSG 以及 Trellis2 GGUF 版本的官方扩展。网站的扩展目录还列出了社区扩展，其中一些并非 3D 工具，例如语音和音乐生成器。',
          '您导入图片或输入提示词（哪种输入可用取决于扩展），选择模型，Modly 就会生成可预览、编辑和导出的网格。以上是开发者的说法；PromptQuorum 未运行该应用，也未衡量网格质量。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '如何获取',
        content: [
          '**您可以通过官方网站或 GitHub 发布页面，用常规安装程序安装 Modly；应用免费，无需账号。**',
          'v0.5.0 版本提供 Windows 安装程序（.exe）、面向 Apple Silicon 的 macOS 磁盘映像（.dmg）和 Linux AppImage，网站还提到 Linux .deb。网站标题写的是“Windows & Linux”，但其下载区和 README 也涵盖 macOS，README 将其限定为 Apple Silicon。安装后需要添加模型：在 Models 页面粘贴扩展的 GitHub 网址，然后下载另行获取的权重。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[Windows](https://github.com/lightningpixel/modly/releases/latest)', '获取方式': '安装程序（.exe）' },
          { '平台': '[macOS](https://github.com/lightningpixel/modly/releases/latest)', '获取方式': '仅限 Apple Silicon（.dmg）' },
          { '平台': '[Linux](https://github.com/lightningpixel/modly/releases/latest)', '获取方式': 'AppImage 或 .deb' },
          { '平台': '[官网](https://modly3d.app)', '获取方式': '官方网站、文档和扩展目录' },
          { '平台': '[文档](https://modly3d.app/docs)', '获取方式': '安装、模型、FAQ 和更新日志' },
          { '平台': '[GitHub](https://github.com/lightningpixel/modly)', '获取方式': '源代码和发布版下载' },
        ],
        note: '该网站没有隐私政策页面。使用安装程序无需终端；从源码运行是面向开发者的另一条路径。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Modly 将基于模型的 3D 生成与少量编辑和导出工具结合在一起。** 以下内容来自网站、README 和 v0.5.0 发布说明，均为开发者的说法。',
        ],
        items: [
          '图片转 3D 和提示词转 3D 生成，取决于所装的扩展。',
          '导出为 GLB、OBJ、STL 和 PLY，可用于 Blender、Unity、Unreal Engine 或 3D 打印切片软件。',
          '对输入图片自动去除背景；发布说明称其在 CPU 上运行。',
          '保存所有生成模型的集合和工作区，另有 Library 页面和运行历史。',
          '应用内网格工具：平滑、减面、网格编辑面板和雕刻笔刷（Grab、Smooth、Inflate、Flatten），据发布说明。',
          '真实尺寸和打印准备页面，以及面向打印、游戏和网页的预设，据发布说明。',
          '带流式回复的智能体侧边栏，发布说明提到支持 Ollama；路线图将用自然语言编辑网格描述为进行中的工作。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**Modly 称生成在您的 GPU 上运行、不上传任何内容，但模型权重需要先下载。**',
          '网站和文档称，您的图片不会到达任何服务器，扩展及其权重下载完成后可完全离线生成。README 显示扩展权重从 Hugging Face 获取，因此下载环节需要联网。扩展是在您电脑上运行代码的 GitHub 仓库，因此只应安装您信任的扩展。',
          '发布说明提到一项设置（MODLY_ORIGINS），可阻止网页访问本地 API。网站没有隐私政策，因此没有关于遥测或崩溃报告的书面说明；PromptQuorum 未检查网络流量。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        content: [
          '**Modly 适合想在没有云服务的情况下获得 AI 生成 3D 素材的人。**',
        ],
        items: [
          '想把照片变成可在切片软件中打开的 STL 的 3D 打印爱好者。',
          '想为 Blender、Unity 或 Unreal Engine 获得初始网格、并自行精修的游戏开发者和 3D 美术。',
          '想在一个应用中尝试多种开源 3D 模型，或编写自己扩展的爱好者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '局限与我们无法核实的内容',
        content: [
          '**Modly 说明了硬件限制，另有若干细节尚未核实。**',
        ],
        items: [
          '已说明的限制：文档 FAQ 称需要 NVIDIA GPU。网站的结构化数据将 6 GB 显存列为最低要求，FAQ 则称所需显存取决于模型，量化的 GGUF 版本可在较普通的硬件上运行。',
          '未核实：README 还描述了在 Linux 和 Windows 上通过 ROCm 支持 AMD GPU，以及面向 Apple Silicon 的 macOS 版本，而 FAQ 中关于 NVIDIA 的说法并未提及这些。PromptQuorum 未核实哪些 GPU 能运行哪些模型。',
          '不适合：没有足够强的 GPU，或需要无需本地配置的托管服务的人。',
          '未核实：网格的质量、速度和可靠性。PromptQuorum 未用 Modly 生成过网格，网站上的演示和截图均出自开发者。',
          '未核实：模型许可。Modly 文档未说明 Hunyuan3D 2、TripoSG 或 Trellis.2 的许可，GitHub 也未在官方扩展仓库中检测到许可；商用前请阅读各模型自己的条款。',
          '未核实：应用背后的组织。网站没有法律声明、隐私政策或条款页面，仓库只写有 GitHub 账号 Lightning Pixel。',
          '版本：Modly 尚未到 1.0（版本 0.5.0），网站路线图上的事项是计划，不是已发布的功能。',
          '未检查：独立评测和用户反馈。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: '替代方案',
        content: [
          '**目前还没有其他 3D 生成应用有 PromptQuorum 评测，因此已评测的最接近工具是本地图像生成器。** 按它们自己的说明，它们生成的是图像而不是 3D 网格，PromptQuorum 也未将其与 Modly 做过实际对比。',
        ],
        itemHeadings: true,
        columns: ['工具', '输出'],
        rows: [
          { '工具': 'Modly', '输出': '图片或提示词转 3D 网格' },
          { '工具': '[ComfyUI](/zh/power-local-llm/comfyui-review)', '输出': '本地图像与视频生成，节点式界面' },
          { '工具': '[InvokeAI](/zh/power-local-llm/invokeai-review)', '输出': '本地图像生成，网页界面' },
          { '工具': '[Draw Things](/zh/power-local-llm/draw-things-review)', '输出': 'macOS 和 iOS 上的本地图像生成' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Modly 免费吗？',
            a: '据开发者称，免费：文档称它采用 MIT 许可，100% 免费开源，没有积分或订阅。许可文件补充说明，分支项目必须注明原项目。GitHub Sponsors 为可选项。',
          },
          {
            q: 'Modly 能运行哪些 3D 模型？',
            a: '通过扩展运行。README 列出了 Hunyuan3D 2 Mini（含 Turbo 和 Fast 变体）、TripoSG 和 Trellis2 GGUF 版本的官方扩展，您也可以从任意 GitHub 网址安装扩展，因此能运行什么取决于您安装了什么。',
          },
          {
            q: '可以导出哪些文件格式？',
            a: '据文档，支持 GLB（推荐）、OBJ、STL 和 PLY。STL 文件可载入 Cura 或 PrusaSlicer 等切片软件。',
          },
          {
            q: '生成的网格可以商用吗？',
            a: 'Modly 文档未涉及这一点。答案取决于您所用模型扩展的许可，请在出售或发布素材前阅读。这不构成法律意见。',
          },
          {
            q: '生成时内存不足怎么办？',
            a: '文档建议改用更小或量化（GGUF）的版本，关闭其他占用 GPU 的应用，并查看扩展 README 中的显存要求。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果您想在自己的 GPU 上根据图片或提示词生成 3D 网格，并让输入数据不上云，Modly 值得一试。**',
          '纸面上它覆盖面不小：面向三种操作系统的免费 MIT 许可安装程序应用、通过扩展使用的多个开源 3D 模型、四种导出格式和内置网格工具。开发活跃，2026 年 11 月 18 日发布 0.5.0，11 月 19 日有新推送。',
          '代价是需要性能足够的 GPU、首次使用前要下载模型、模型许可未说明，以及项目仍低于 1.0 版本。PromptQuorum 未测试该应用，建议先用一张小图试用，并在依赖结果之前核对所选模型的许可。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Modly 网站](https://modly3d.app) — 开发者的描述、功能、下载区，核查于 2026 年 11 月 20 日。',
          '[文档 FAQ](https://modly3d.app/docs/faq) — 价格、离线使用、GPU 说法、导出格式，核查于 2026 年 11 月 20 日。',
          '[Workflow](https://modly3d.app/docs/workflow) — 输入、集合、隐私说明，核查于 2026 年 11 月 20 日。',
          '[模型与变体](https://modly3d.app/docs/models) — 官方模型系列和量化变体，核查于 2026 年 11 月 20 日。',
          '[扩展目录](https://modly3d.app/extensions) — 官方和社区扩展，核查于 2026 年 11 月 20 日。',
          '[路线图](https://modly3d.app/roadmap) — 计划中的工作，核查于 2026 年 11 月 20 日。',
          '[Modly GitHub 仓库](https://github.com/lightningpixel/modly) — README、LICENSE 和最近一次推送，核查于 2026 年 11 月 20 日。',
          '[发布版 v0.5.0](https://github.com/lightningpixel/modly/releases/tag/v0.5.0) — 最新版本、日期、安装文件和发布说明，核查于 2026 年 11 月 20 日。',
          '[Hunyuan3D 2 Mini 扩展](https://github.com/lightningpixel/modly-hunyuan3d-mini-extension) — 官方扩展仓库示例，核查于 2026 年 11 月 20 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[ComfyUI 评测](/zh/power-local-llm/comfyui-review) — 用于本地图像和视频生成的节点式界面。',
          '[InvokeAI 评测](/zh/power-local-llm/invokeai-review) — 带网页界面的本地图像生成。',
          '[Draw Things 评测](/zh/power-local-llm/draw-things-review) — macOS 和 iOS 上的本地图像生成。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/modly-review-hero-ar.webp',
    title: 'مراجعة Modly — مولّد محلي مفتوح المصدر من الصورة إلى ثلاثي الأبعاد',
    seoTitle: 'مراجعة Modly: مولّد محلي من الصورة إلى 3D ومتطلبات GPU',
    intro:
      'Modly تطبيق سطح مكتب مجاني يحوّل صورة أو وصفًا نصيًا إلى مجسم ثلاثي الأبعاد (Mesh)، بنماذج ذكاء اصطناعي مفتوحة المصدر تعمل على بطاقتك الرسومية. تُضاف النماذج على شكل إضافات، ويمكن تصدير النتائج بصيغ GLB وOBJ وSTL وPLY. تستند هذه المراجعة إلى موقع المطوّر ووثائقه ومستودعه على GitHub، وقد جرى الاطلاع عليها في 20 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'تطبيق Modly مجاني لسطح المكتب يولّد مجسمات ثلاثية الأبعاد من الصور أو الأوصاف على بطاقتك الرسومية. المنصات ومتطلبات GPU والإضافات والخصوصية والحدود.',
    twitterDescription:
      'يولّد Modly مجسمات ثلاثية الأبعاد من صورة أو وصف على بطاقتك الرسومية، مع تصدير GLB وOBJ وSTL وPLY. ترخيص MIT ونماذج على شكل إضافات.',
    audience:
      'صنّاع المحتوى ومطوّرو الألعاب وهواة الطباعة ثلاثية الأبعاد الذين يريدون توليد مجسمات من الصور أو الأوصاف على حاسوبهم دون خدمة سحابية',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Modly',
    targetKeywords: [
      'مراجعة Modly',
      'مولّد Modly ثلاثي الأبعاد',
      'من الصورة إلى 3D محليًا',
      'مولّد نماذج 3D دون اتصال',
      'متطلبات GPU لتطبيق Modly',
      'إضافات Modly',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Modly تطبيق سطح مكتب مجاني بترخيص MIT لأنظمة Windows وLinux وأجهزة Mac بمعالج Apple Silicon، يولّد مجسمات ثلاثية الأبعاد من صورة أو وصف نصي بنماذج ذكاء اصطناعي مفتوحة المصدر تعمل على بطاقتك الرسومية.** تأتي النماذج على شكل إضافات قابلة للتثبيت، لذا تعتمد النتائج على الإضافة التي تختارها.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Modly ولمن هو؟',
        answer:
          'Modly مولّد ثلاثي الأبعاد لسطح المكتب: تستورد صورة أو تكتب وصفًا، وتختار إضافة نموذج مثبّتة، فينتج Modly مجسمًا يمكنك معاينته وتصديره. يناسب من يريد أصولًا ثلاثية الأبعاد مولّدة بالذكاء الاصطناعي لبرنامج Blender أو محركات الألعاب أو الطباعة ثلاثية الأبعاد، مع إبقاء مدخلاته على جهازه.',
        bullets: [
          'المنصات: Windows (مثبّت .exe)، وLinux (AppImage و.deb)، وmacOS على Apple Silicon (.dmg).',
          'السعر: مجاني، دون حساب أو رصيد؛ ودعم المطوّر عبر GitHub Sponsors اختياري.',
          'الترخيص: MIT مع اشتراط ذكر المشروع الأصلي في النسخ المشتقة؛ وتراخيص النماذج منفصلة.',
          'النماذج: Hunyuan3D 2 وTripoSG وTrellis.2 عبر إضافات رسمية، إضافةً إلى إضافات المجتمع.',
          'التصدير: GLB وOBJ وSTL وPLY.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'الحدود وما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'البدائل', anchor: 'alternatives' },
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
            text: 'Modly تطبيق سطح مكتب يولّد مجسمات ثلاثية الأبعاد من صورة أو وصف نصي بنماذج ذكاء اصطناعي مفتوحة المصدر، تُثبَّت على شكل إضافات وتعمل على بطاقتك الرسومية.',
          },
          {
            type: 'plain-terms',
            text: 'يمكنك اعتباره بديلًا محليًا لخدمات تحويل الصورة إلى ثلاثي الأبعاد السحابية: تنزّل التطبيق ونموذجًا مرة واحدة، ثم يعمل التوليد على حاسوبك. وتعتمد جودة النتائج وترخيصها على إضافة النموذج التي تختارها.',
          },
        ],
        items: [
          'أحدث إصدار هو 0.5.0 (18 نوفمبر 2026) وآخر دفع للمستودع كان في 19 نوفمبر 2026، فالتطوير مستمر ولا ينطبق تحذير المشروع المتوقف.',
          'يُوزَّع التطبيق بمثبّت لأنظمة Windows وLinux وmacOS؛ وتُثبَّت النماذج لاحقًا بلصق رابط GitHub في صفحة Models.',
          'تقول الوثائق إن بطاقة NVIDIA مطلوبة؛ وتعتمد حاجة الذاكرة VRAM على النموذج، وتحتاج نسخ GGUF المضغوطة إلى أقل.',
          'يقول المطوّر إن شيئًا لا يُرفع وإن التوليد يعمل دون اتصال بعد تنزيل الإضافة وأوزانها.',
          'لم تختبر PromptQuorum التطبيق ولم تقِس جودة المجسمات، ولا تذكر وثائق Modly تراخيص نماذج الثلاثي الأبعاد.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'قد تخضع النماذج ثلاثية الأبعاد المولّدة بالذكاء الاصطناعي لشروط ترخيص النموذج الذي أنتجها. تحقّق من ترخيص كل نموذج قبل بيع الأصول المولّدة أو نشرها. هذه معلومات عامة وليست استشارة قانونية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Modly تطبيق سطح مكتب لتوليد النماذج ثلاثية الأبعاد من الصور أو الأوصاف، ويشغّل نماذج الذكاء الاصطناعي على حاسوبك.**',
          'يصدر التطبيق عن Lightning Pixel، وهو حساب GitHub المالك للمستودع، ويظهر في تذييل الموقع «Modly by Lightning Pixel». أحدث إصدار هو 0.5.0 الذي نُشر في 18 نوفمبر 2026، وآخر دفع للمستودع كان في 19 نوفمبر 2026. لذا فالتطوير مستمر ولا ينطبق تحذير المشروع المتوقف.',
          'Modly نفسه غلاف حول واجهة خلفية بلغة Python؛ وتُضاف نماذج الذكاء الاصطناعي على شكل إضافات، كل منها مستودع GitHub يحوي ملف بيان (manifest). يسرد ملف README إضافات رسمية لنموذج Hunyuan3D 2 Mini (مع نسختي Turbo وFast) وTripoSG ونسخة GGUF من Trellis2. ويسرد كتالوج الإضافات في الموقع إضافات المجتمع أيضًا، وبعضها ليس أدوات ثلاثية الأبعاد، مثل مولّدات الكلام والموسيقى.',
          'تستورد صورة أو تكتب وصفًا (والمدخل الذي يعمل يعتمد على الإضافة)، وتختار نموذجًا، فيولّد Modly مجسمًا يمكنك معاينته وتعديله وتصديره. هذه أقوال المطوّر؛ لم تشغّل PromptQuorum التطبيق ولم تقِس جودة المجسمات.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**تثبّت Modly بمثبّت عادي من الموقع الرسمي أو من صفحة إصدارات GitHub؛ والتطبيق مجاني ولا يحتاج إلى حساب.**',
          'يضم الإصدار v0.5.0 مثبّتًا لنظام Windows (.exe) وصورة قرص لنظام macOS على Apple Silicon (.dmg) وحزمة AppImage لنظام Linux، ويذكر الموقع أيضًا حزمة .deb لنظام Linux. يقول عنوان الموقع «Windows & Linux» بينما يشمل قسم التنزيل وملف README نظام macOS أيضًا، ويقصره README على Apple Silicon. بعد التثبيت تضيف نموذجًا: في صفحة Models تلصق رابط GitHub لإحدى الإضافات ثم تنزّل الأوزان، وهي تُجلب بشكل منفصل.',
        ],
        columns: ['المنصة', 'طريقة الحصول عليه'],
        rows: [
          { 'المنصة': '[Windows](https://github.com/lightningpixel/modly/releases/latest)', 'طريقة الحصول عليه': 'مثبّت (.exe)' },
          { 'المنصة': '[macOS](https://github.com/lightningpixel/modly/releases/latest)', 'طريقة الحصول عليه': 'Apple Silicon فقط (.dmg)' },
          { 'المنصة': '[Linux](https://github.com/lightningpixel/modly/releases/latest)', 'طريقة الحصول عليه': 'AppImage أو .deb' },
          { 'المنصة': '[الموقع](https://modly3d.app)', 'طريقة الحصول عليه': 'الموقع الرسمي والوثائق وكتالوج الإضافات' },
          { 'المنصة': '[الوثائق](https://modly3d.app/docs)', 'طريقة الحصول عليه': 'التثبيت والنماذج والأسئلة الشائعة وسجل التغييرات' },
          { 'المنصة': '[GitHub](https://github.com/lightningpixel/modly)', 'طريقة الحصول عليه': 'الشيفرة المصدرية وتنزيلات الإصدارات' },
        ],
        note: 'ليس للموقع صفحة سياسة خصوصية. لا يحتاج المثبّت إلى الطرفية؛ أما التشغيل من الشيفرة المصدرية فمسار منفصل للمطوّرين.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يجمع Modly بين التوليد ثلاثي الأبعاد القائم على النماذج ومجموعة صغيرة من أدوات التحرير والتصدير.** النقاط التالية مأخوذة من الموقع وملف README وملاحظات الإصدار v0.5.0؛ وهي أقوال المطوّر.',
        ],
        items: [
          'توليد من الصورة إلى ثلاثي الأبعاد ومن الوصف إلى ثلاثي الأبعاد، بحسب الإضافة المثبّتة.',
          'تصدير بصيغ GLB وOBJ وSTL وPLY لاستخدامها في Blender أو Unity أو Unreal Engine أو برنامج تقطيع للطباعة ثلاثية الأبعاد.',
          'إزالة تلقائية للخلفية من صور الإدخال؛ وتقول ملاحظات الإصدار إنها تعمل على المعالج CPU.',
          'مجموعات ومساحة عمل تحفظ كل نموذج مولَّد، إضافةً إلى صفحة Library وسجل للتشغيلات.',
          'أدوات مجسمات داخل التطبيق: تنعيم وتقليل الأضلاع ولوحة لتحرير المجسم وفُرَش نحت (Grab وSmooth وInflate وFlatten)، بحسب ملاحظات الإصدار.',
          'صفحة للمقياس الواقعي والتجهيز للطباعة، وإعدادات مسبقة للطباعة والألعاب والويب، بحسب ملاحظات الإصدار.',
          'لوحة جانبية لوكيل ذكي بردود متدفقة ودعم لـ Ollama ورد ذكرهما في ملاحظات الإصدار؛ وتصف خارطة الطريق تحرير المجسمات بلغة عادية بأنه عمل قيد التنفيذ.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**يقول Modly إن التوليد يعمل على بطاقتك الرسومية وإن شيئًا لا يُرفع، لكن أوزان النموذج يجب تنزيلها أولًا.**',
          'يقول الموقع والوثائق إن صورك لا تصل إلى أي خادم وإن التوليد يعمل دون اتصال تمامًا بعد تنزيل إحدى الإضافات وأوزانها. ويُظهر README أن أوزان الإضافات تُجلب من Hugging Face، لذا تحتاج خطوة التنزيل إلى اتصال بالشبكة. والإضافات مستودعات GitHub تشغّل شيفرة على جهازك، لذا ثبّت الإضافات التي تثق بها فقط.',
          'تذكر ملاحظات الإصدار إعدادًا (MODLY_ORIGINS) يمنع صفحات الويب من الوصول إلى الواجهة البرمجية المحلية. وليس للموقع سياسة خصوصية، فلا يوجد بيان مكتوب عن القياس عن بُعد أو تقارير الأعطال؛ ولم تفحص PromptQuorum حركة الشبكة.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Modly من يريد أصولًا ثلاثية الأبعاد مولّدة بالذكاء الاصطناعي دون خدمة سحابية.**',
        ],
        items: [
          'هواة الطباعة ثلاثية الأبعاد الذين يريدون تحويل صورة إلى ملف STL يفتحونه في برنامج التقطيع.',
          'مطوّرو الألعاب وفنانو الثلاثي الأبعاد الذين يريدون مجسمًا أوليًا لـ Blender أو Unity أو Unreal Engine ويصقلونه بأنفسهم.',
          'المهتمون بالتجربة الذين يريدون تجربة عدة نماذج ثلاثية الأبعاد مفتوحة المصدر، أو كتابة إضافتهم الخاصة، في تطبيق واحد.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'الحدود وما لم نتمكن من التحقق منه',
        content: [
          '**يذكر Modly قيودًا على العتاد، وتبقى عدة تفاصيل دون تحقق.**',
        ],
        items: [
          'قيد معلن: تقول الأسئلة الشائعة في الوثائق إن بطاقة NVIDIA مطلوبة. وتذكر البيانات المنظَّمة في الموقع 6 GB من VRAM حدًّا أدنى، وتقول الأسئلة الشائعة إن حاجة الذاكرة تعتمد على النموذج، وإن نسخ GGUF المضغوطة تعمل على عتاد أكثر تواضعًا.',
          'غير متحقق منه: يصف README أيضًا دعم بطاقات AMD عبر ROCm على Linux وWindows ونسخة macOS لمعالجات Apple Silicon، وهو ما لا يذكره قول الأسئلة الشائعة عن NVIDIA. لم تتحقق PromptQuorum من البطاقات التي تعمل مع كل نموذج.',
          'لا يناسب: من لا يملك بطاقة رسومية قوية، أو من يحتاج خدمة مستضافة دون إعداد محلي.',
          'غير متحقق منه: جودة المجسمات وسرعتها وموثوقيتها. لم تولّد PromptQuorum مجسمات بـ Modly، والعرض التجريبي ولقطات الشاشة في الموقع من المطوّر نفسه.',
          'غير متحقق منه: تراخيص النماذج. لا تذكر وثائق Modly ترخيصًا لـ Hunyuan3D 2 أو TripoSG أو Trellis.2، ولا يكتشف GitHub ترخيصًا لمستودعات الإضافات الرسمية؛ اقرأ شروط كل نموذج قبل الاستخدام التجاري.',
          'غير متحقق منه: الجهة المطوّرة للتطبيق. ليس للموقع صفحة بيانات قانونية أو سياسة خصوصية أو شروط، ولا يذكر المستودع سوى حساب GitHub باسم Lightning Pixel.',
          'الإصدار: Modly دون الإصدار 1.0 (الإصدار 0.5.0)، وبنود خارطة الطريق في الموقع خطط وليست ميزات صدرت.',
          'لم يُفحص: المراجعات المستقلة وتقارير المستخدمين.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'البدائل',
        content: [
          '**لا يوجد حتى الآن تطبيق توليد ثلاثي الأبعاد آخر لديه مراجعة من PromptQuorum، لذا فأقرب الأدوات المراجَعة هي مولّدات صور محلية.** بحسب أوصافها هي نفسها تنتج صورًا لا مجسمات ثلاثية الأبعاد، ولم تقارنها PromptQuorum بـ Modly عمليًا.',
        ],
        itemHeadings: true,
        columns: ['الأداة', 'المخرجات'],
        rows: [
          { 'الأداة': 'Modly', 'المخرجات': 'من صورة أو وصف إلى مجسم 3D' },
          { 'الأداة': '[ComfyUI](/ar/power-local-llm/comfyui-review)', 'المخرجات': 'توليد محلي للصور والفيديو، واجهة قائمة على العُقد' },
          { 'الأداة': '[InvokeAI](/ar/power-local-llm/invokeai-review)', 'المخرجات': 'توليد محلي للصور، واجهة ويب' },
          { 'الأداة': '[Draw Things](/ar/power-local-llm/draw-things-review)', 'المخرجات': 'توليد محلي للصور على macOS وiOS' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Modly مجاني؟',
            a: 'نعم، بحسب المطوّر: تقول الوثائق إنه مجاني ومفتوح المصدر بنسبة 100% بترخيص MIT، دون أرصدة أو اشتراكات. ويضيف ملف الترخيص أن النسخ المشتقة يجب أن تذكر المشروع الأصلي. ودعم المطوّر عبر GitHub Sponsors اختياري.',
          },
          {
            q: 'ما نماذج الثلاثي الأبعاد التي يشغّلها Modly؟',
            a: 'عبر الإضافات. يسرد README إضافات رسمية لنموذج Hunyuan3D 2 Mini (مع نسختي Turbo وFast) وTripoSG ونسخة GGUF من Trellis2، ويمكنك تثبيت إضافة من أي رابط GitHub، فما يعمل يعتمد على ما تثبّته.',
          },
          {
            q: 'ما صيغ الملفات التي يمكنني تصديرها؟',
            a: 'GLB (الموصى بها) وOBJ وSTL وPLY، بحسب الوثائق. ويمكن تحميل ملفات STL في برامج التقطيع مثل Cura أو PrusaSlicer.',
          },
          {
            q: 'هل يمكنني استخدام المجسمات المولّدة تجاريًا؟',
            a: 'لا تتناول وثائق Modly هذه النقطة. تعتمد الإجابة على ترخيص إضافة النموذج التي استخدمتها، فاقرأه قبل بيع الأصول أو نشرها. هذه ليست استشارة قانونية.',
          },
          {
            q: 'ماذا لو نفدت الذاكرة أثناء التوليد؟',
            a: 'تقترح الوثائق نسخة أصغر أو مضغوطة (GGUF)، وإغلاق التطبيقات الأخرى التي تستهلك البطاقة الرسومية كثيرًا، ومراجعة README الخاص بالإضافة لمعرفة متطلبات VRAM.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Modly التجربة إن أردت توليد مجسمات ثلاثية الأبعاد من الصور أو الأوصاف على بطاقتك الرسومية وإبقاء مدخلاتك بعيدًا عن السحابة.**',
          'على الورق يغطي الكثير: تطبيق مجاني بمثبّت وترخيص MIT لثلاثة أنظمة تشغيل، وعدة نماذج ثلاثية الأبعاد مفتوحة المصدر عبر الإضافات، وأربع صيغ تصدير، وأدوات مجسمات مدمجة. التطوير نشط، مع الإصدار 0.5.0 في 18 نوفمبر 2026 ودفع في 19 نوفمبر 2026.',
          'المقابل هو بطاقة رسومية قوية، وتنزيل نموذج قبل أول استخدام، وتراخيص نماذج غير مذكورة، ومشروع ما زال دون الإصدار 1.0. لم تختبر PromptQuorum التطبيق، فجرّبه بصورة صغيرة وتحقق من ترخيص النموذج الذي تختاره قبل الاعتماد على النتائج.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Modly](https://modly3d.app) — وصف المطوّر والميزات وقسم التنزيل، جرى الاطلاع في 20 نوفمبر 2026.',
          '[الأسئلة الشائعة في الوثائق](https://modly3d.app/docs/faq) — السعر والاستخدام دون اتصال وقول البطاقة الرسومية وصيغ التصدير، جرى الاطلاع في 20 نوفمبر 2026.',
          '[سير العمل (Workflow)](https://modly3d.app/docs/workflow) — المدخلات والمجموعات وبيان الخصوصية، جرى الاطلاع في 20 نوفمبر 2026.',
          '[النماذج والنسخ](https://modly3d.app/docs/models) — عائلات النماذج الرسمية والنسخ المضغوطة، جرى الاطلاع في 20 نوفمبر 2026.',
          '[كتالوج الإضافات](https://modly3d.app/extensions) — الإضافات الرسمية وإضافات المجتمع، جرى الاطلاع في 20 نوفمبر 2026.',
          '[خارطة الطريق](https://modly3d.app/roadmap) — الأعمال المخطط لها، جرى الاطلاع في 20 نوفمبر 2026.',
          '[مستودع Modly على GitHub](https://github.com/lightningpixel/modly) — README وLICENSE وآخر دفع، جرى الاطلاع في 20 نوفمبر 2026.',
          '[الإصدار v0.5.0](https://github.com/lightningpixel/modly/releases/tag/v0.5.0) — أحدث إصدار وتاريخه وملفات التثبيت وملاحظات الإصدار، جرى الاطلاع في 20 نوفمبر 2026.',
          '[إضافة Hunyuan3D 2 Mini](https://github.com/lightningpixel/modly-hunyuan3d-mini-extension) — مثال على مستودع إضافة رسمية، جرى الاطلاع في 20 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة ComfyUI](/ar/power-local-llm/comfyui-review) — واجهة قائمة على العُقد لتوليد الصور والفيديو محليًا.',
          '[مراجعة InvokeAI](/ar/power-local-llm/invokeai-review) — توليد صور محلي بواجهة ويب.',
          '[مراجعة Draw Things](/ar/power-local-llm/draw-things-review) — توليد صور محلي على macOS وiOS.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-20',
    dateModified: '2026-11-20',
    next_refresh_due: '2027-05-20',
    theme: 'Image & Video Generation',
    heroImage: '/images/modly-review-hero-ko.webp',
    title: 'Modly 리뷰: 로컬 이미지→3D 생성기',
    seoTitle: 'Modly 리뷰: 이미지로 3D를 만드는 로컬 앱과 GPU 요구',
    intro:
      'Modly는 이미지나 텍스트 프롬프트로 3D 메시를 생성하는 무료 데스크톱 앱입니다. 오픈소스 AI 모델을 내 GPU에서 실행합니다. 모델은 확장 기능으로 추가하며, 결과는 GLB, OBJ, STL, PLY로 내보낼 수 있습니다. 이 리뷰는 개발자의 웹사이트, 문서, GitHub 저장소를 2026년 11월 20일에 확인한 내용을 바탕으로 합니다. PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Modly는 이미지나 프롬프트로 3D 메시를 내 GPU에서 생성하는 무료 데스크톱 앱입니다. 지원 플랫폼, GPU 요구 사항, 개인정보 보호, 한계를 정리했습니다.',
    twitterDescription:
      'Modly는 이미지나 프롬프트로 3D 메시를 내 GPU에서 생성하고 GLB, OBJ, STL, PLY로 내보냅니다. MIT 라이선스, 모델은 확장 기능으로 제공.',
    audience:
      '클라우드 서비스 없이 내 컴퓨터에서 이미지나 프롬프트로 3D 메시를 생성하려는 메이커, 게임 개발자, 3D 프린팅 애호가',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Modly',
    targetKeywords: [
      'Modly 리뷰',
      'Modly 3D 생성기',
      '로컬 이미지 3D 변환',
      '오프라인 3D 모델 생성기',
      'Modly GPU 요구 사항',
      'Modly 확장 기능',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Modly는 MIT 라이선스의 무료 데스크톱 앱으로, Windows, Linux, Apple Silicon Mac에서 이미지나 텍스트 프롬프트로 3D 메시를 생성하며 오픈소스 AI 모델은 내 GPU에서 실행됩니다.** 모델은 설치 가능한 확장 기능으로 제공되므로 결과는 선택한 확장 기능에 따라 달라집니다.',
    quickAnswerTop: {
      ko: {
        question: 'Modly는 무엇이며 누구를 위한 도구인가요?',
        answer:
          'Modly는 데스크톱 3D 생성기입니다. 이미지를 가져오거나 프롬프트를 입력하고 설치된 모델 확장 기능을 고르면, 미리 보고 내보낼 수 있는 메시를 생성합니다. Blender, 게임 엔진, 3D 프린팅용 AI 생성 3D 에셋이 필요하고 입력 데이터를 내 컴퓨터에 두고 싶은 분께 맞습니다.',
        bullets: [
          '플랫폼: Windows(.exe 설치 프로그램), Linux(AppImage, .deb), Apple Silicon의 macOS(.dmg).',
          '가격: 무료이며 계정이나 크레딧이 필요 없고, GitHub Sponsors는 선택 사항입니다.',
          '라이선스: MIT이며 포크는 원 프로젝트를 표기해야 합니다. 모델 라이선스는 별도입니다.',
          '모델: 공식 확장 기능으로 Hunyuan3D 2, TripoSG, Trellis.2, 그 밖에 커뮤니티 확장 기능.',
          '내보내기: GLB, OBJ, STL, PLY.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보 보호와 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '한계와 확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '대안', anchor: 'alternatives' },
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
            text: 'Modly는 확장 기능으로 설치한 오픈소스 AI 모델을 내 GPU에서 실행해, 이미지나 텍스트 프롬프트로 3D 메시를 생성하는 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '클라우드 이미지→3D 서비스의 로컬 대안이라고 보시면 됩니다. 앱과 모델을 한 번 내려받으면 생성은 내 컴퓨터에서 실행됩니다. 결과의 품질과 라이선스는 선택한 모델 확장 기능에 따라 달라집니다.',
          },
        ],
        items: [
          '최신 릴리스는 버전 0.5.0(2026년 11월 18일)이고 저장소의 마지막 푸시는 2026년 11월 19일입니다. 개발이 계속되고 있어 방치 프로젝트 경고는 해당되지 않습니다.',
          '앱은 Windows, Linux, macOS용 설치 프로그램으로 배포됩니다. 모델은 이후 Models 페이지에 GitHub URL을 붙여 넣어 설치합니다.',
          '문서에 따르면 NVIDIA GPU가 필요합니다. 필요한 VRAM은 모델에 따라 다르며, 양자화된 GGUF 버전은 더 적게 필요합니다.',
          '개발자는 확장 기능과 가중치를 내려받은 뒤에는 아무것도 업로드되지 않으며 오프라인으로 생성할 수 있다고 밝힙니다.',
          'PromptQuorum은 앱을 테스트하지 않았고 메시 품질도 측정하지 않았습니다. Modly 문서에는 3D 모델의 라이선스가 명시되어 있지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'AI가 생성한 3D 모델에는 이를 만든 모델의 라이선스 조건이 적용될 수 있습니다. 생성한 에셋을 판매하거나 공개하기 전에 각 모델의 라이선스를 확인하십시오. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Modly는 이미지나 프롬프트로 3D를 생성하는 데스크톱 애플리케이션으로, AI 모델을 내 컴퓨터에서 실행합니다.**',
          '앱은 저장소를 소유한 GitHub 계정인 Lightning Pixel이 만들며, 웹사이트 푸터에는 "Modly by Lightning Pixel"이라고 적혀 있습니다. 최신 릴리스는 2026년 11월 18일에 공개된 버전 0.5.0이고, 저장소의 마지막 푸시는 2026년 11월 19일입니다. 따라서 개발이 계속되고 있어 방치 프로젝트 경고는 해당되지 않습니다.',
          'Modly 자체는 Python 백엔드를 감싼 껍데기이고, AI 모델은 확장 기능으로 추가합니다. 각 확장 기능은 매니페스트 파일이 있는 GitHub 저장소입니다. README에는 Hunyuan3D 2 Mini(Turbo와 Fast 변형 포함), TripoSG, Trellis2 GGUF 버전의 공식 확장 기능이 나와 있습니다. 웹사이트의 확장 기능 카탈로그에는 커뮤니티 확장 기능도 있으며, 음성이나 음악 생성기처럼 3D 도구가 아닌 것도 있습니다.',
          '이미지를 가져오거나 프롬프트를 입력하고(어떤 입력이 되는지는 확장 기능에 따릅니다) 모델을 고르면, Modly가 미리 보고 편집하고 내보낼 수 있는 메시를 생성합니다. 이는 개발자의 설명이며, PromptQuorum은 앱을 실행하지 않았고 메시가 얼마나 좋은지 측정하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Modly는 공식 웹사이트나 GitHub 릴리스 페이지에서 일반 설치 프로그램으로 설치합니다. 앱은 무료이며 계정이 필요 없습니다.**',
          'v0.5.0 릴리스에는 Windows 설치 프로그램(.exe), Apple Silicon용 macOS 디스크 이미지(.dmg), Linux AppImage가 있고, 웹사이트는 Linux .deb도 언급합니다. 웹사이트 헤드라인은 "Windows & Linux"라고 하지만 다운로드 섹션과 README는 macOS도 다루며, README는 이를 Apple Silicon으로 한정합니다. 설치 후에는 모델을 추가합니다. Models 페이지에 확장 기능의 GitHub URL을 붙여 넣은 다음, 별도로 가져오는 가중치를 내려받습니다.',
        ],
        columns: ['플랫폼', '설치 방법'],
        rows: [
          { '플랫폼': '[Windows](https://github.com/lightningpixel/modly/releases/latest)', '설치 방법': '설치 프로그램(.exe)' },
          { '플랫폼': '[macOS](https://github.com/lightningpixel/modly/releases/latest)', '설치 방법': 'Apple Silicon 전용(.dmg)' },
          { '플랫폼': '[Linux](https://github.com/lightningpixel/modly/releases/latest)', '설치 방법': 'AppImage 또는 .deb' },
          { '플랫폼': '[웹사이트](https://modly3d.app)', '설치 방법': '공식 사이트, 문서, 확장 기능 카탈로그' },
          { '플랫폼': '[문서](https://modly3d.app/docs)', '설치 방법': '설치, 모델, FAQ, 변경 내역' },
          { '플랫폼': '[GitHub](https://github.com/lightningpixel/modly)', '설치 방법': '소스 코드와 릴리스 다운로드' },
        ],
        note: '웹사이트에는 개인정보 처리방침 페이지가 없습니다. 설치 프로그램에는 터미널이 필요 없으며, 소스에서 실행하는 것은 개발자를 위한 별도 경로입니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Modly는 모델 기반 3D 생성에 소수의 편집·내보내기 도구를 결합한 앱입니다.** 아래 내용은 웹사이트, README, v0.5.0 릴리스 노트에 기반한 개발자의 설명입니다.',
        ],
        items: [
          '설치된 확장 기능에 따른 이미지→3D 및 프롬프트→3D 생성.',
          'Blender, Unity, Unreal Engine, 3D 프린팅 슬라이서용 GLB, OBJ, STL, PLY 내보내기.',
          '입력 이미지의 배경 자동 제거. 릴리스 노트에 따르면 CPU에서 실행됩니다.',
          '생성한 모든 모델을 보관하는 컬렉션과 작업 공간, Library 페이지, 실행 기록.',
          '앱 내 메시 도구: 스무딩, 폴리곤 감소, 메시 편집 패널, 스컬프트 브러시(Grab, Smooth, Inflate, Flatten). 릴리스 노트에 따른 내용입니다.',
          '실제 크기 비율과 출력 준비 페이지, 출력·게임·웹용 프리셋. 릴리스 노트에 따른 내용입니다.',
          '스트리밍 응답을 지원하는 에이전트 사이드 패널과 릴리스 노트에 언급된 Ollama 지원. 로드맵은 일상 언어로 하는 메시 편집을 진행 중인 작업으로 설명합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**Modly는 생성이 내 GPU에서 실행되고 아무것도 업로드되지 않는다고 하지만, 모델 가중치는 먼저 내려받아야 합니다.**',
          '웹사이트와 문서는 이미지가 서버에 닿지 않으며 확장 기능과 가중치를 내려받은 뒤에는 완전히 오프라인으로 생성할 수 있다고 설명합니다. README에 따르면 확장 기능의 가중치는 Hugging Face에서 가져오므로 다운로드 단계에는 네트워크 연결이 필요합니다. 확장 기능은 내 컴퓨터에서 코드를 실행하는 GitHub 저장소이므로 신뢰하는 것만 설치하십시오.',
          '릴리스 노트에는 웹 페이지가 로컬 API에 접근하지 못하게 하는 설정(MODLY_ORIGINS)이 언급됩니다. 웹사이트에 개인정보 처리방침이 없어 텔레메트리나 충돌 보고에 관한 문서상의 설명은 없으며, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        content: [
          '**Modly는 클라우드 서비스 없이 AI 생성 3D 에셋을 원하는 분께 맞습니다.**',
        ],
        items: [
          '사진을 슬라이서에서 열 수 있는 STL로 바꾸고 싶은 3D 프린팅 애호가.',
          'Blender, Unity, Unreal Engine용 시작 메시가 필요하고 직접 다듬을 게임 개발자와 3D 아티스트.',
          '여러 오픈소스 3D 모델을 한 앱에서 써 보거나 자신만의 확장 기능을 작성하려는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '한계와 확인하지 못한 내용',
        content: [
          '**Modly에는 하드웨어 관련 제약이 명시되어 있으며, 여러 세부 사항은 확인하지 못했습니다.**',
        ],
        items: [
          '명시된 제약: 문서 FAQ는 NVIDIA GPU가 필요하다고 합니다. 웹사이트의 구조화된 데이터는 최소 6 GB VRAM을 제시하고, FAQ는 필요한 VRAM이 모델에 따라 다르며 양자화된 GGUF 버전은 더 낮은 사양에서 실행된다고 합니다.',
          '확인하지 못함: README는 Linux와 Windows에서 ROCm을 통한 AMD GPU 지원과 Apple Silicon용 macOS 빌드도 설명하는데, FAQ의 NVIDIA 관련 설명에는 이 내용이 없습니다. PromptQuorum은 어떤 GPU가 어떤 모델에서 동작하는지 확인하지 않았습니다.',
          '맞지 않는 경우: 성능 좋은 GPU가 없거나 로컬 설정 없는 호스팅 서비스가 필요한 경우.',
          '확인하지 못함: 메시의 품질, 속도, 안정성. PromptQuorum은 Modly로 메시를 생성하지 않았으며, 웹사이트의 데모와 스크린샷은 개발자가 제공한 것입니다.',
          '확인하지 못함: 모델 라이선스. Modly 문서에는 Hunyuan3D 2, TripoSG, Trellis.2의 라이선스가 명시되어 있지 않고, GitHub도 공식 확장 기능 저장소에서 라이선스를 감지하지 못합니다. 상업적으로 쓰기 전에 각 모델 자체의 조건을 읽으십시오.',
          '확인하지 못함: 앱을 운영하는 주체. 웹사이트에는 운영자 정보, 개인정보 처리방침, 이용 약관 페이지가 없고, 저장소에는 GitHub 계정 Lightning Pixel만 나와 있습니다.',
          '버전: Modly는 1.0 미만(버전 0.5.0)이며, 웹사이트 로드맵의 항목은 계획일 뿐 출시된 기능이 아닙니다.',
          '확인하지 않음: 독립적인 리뷰와 사용자 보고.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: '대안',
        content: [
          '**3D 생성 앱 중 PromptQuorum 리뷰가 있는 다른 앱은 아직 없으므로, 리뷰된 가장 가까운 도구는 로컬 이미지 생성기입니다.** 각자의 설명에 따르면 3D 메시가 아니라 이미지를 생성하며, PromptQuorum은 Modly와 직접 비교하지 않았습니다.',
        ],
        itemHeadings: true,
        columns: ['도구', '출력'],
        rows: [
          { '도구': 'Modly', '출력': '이미지 또는 프롬프트에서 3D 메시' },
          { '도구': '[ComfyUI](/ko/power-local-llm/comfyui-review)', '출력': '로컬 이미지·영상 생성, 노드 기반 UI' },
          { '도구': '[InvokeAI](/ko/power-local-llm/invokeai-review)', '출력': '로컬 이미지 생성, 웹 UI' },
          { '도구': '[Draw Things](/ko/power-local-llm/draw-things-review)', '출력': 'macOS와 iOS의 로컬 이미지 생성' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Modly는 무료인가요?',
            a: '개발자에 따르면 그렇습니다. 문서는 MIT 라이선스의 100% 무료 오픈소스이며 크레딧이나 구독이 없다고 밝힙니다. 라이선스 파일에는 포크가 원 프로젝트를 표기해야 한다는 조항이 덧붙어 있습니다. GitHub Sponsors는 선택 사항입니다.',
          },
          {
            q: 'Modly는 어떤 3D 모델을 실행하나요?',
            a: '확장 기능을 통해 실행합니다. README에는 Hunyuan3D 2 Mini(Turbo와 Fast 변형 포함), TripoSG, Trellis2 GGUF 버전의 공식 확장 기능이 나와 있고, 어떤 GitHub URL에서든 확장 기능을 설치할 수 있으므로 실행되는 모델은 설치한 것에 따라 달라집니다.',
          },
          {
            q: '어떤 파일 형식으로 내보낼 수 있나요?',
            a: '문서에 따르면 GLB(권장), OBJ, STL, PLY입니다. STL 파일은 Cura나 PrusaSlicer 같은 슬라이서에 불러올 수 있습니다.',
          },
          {
            q: '생성한 메시를 상업적으로 쓸 수 있나요?',
            a: 'Modly 문서는 이 부분을 다루지 않습니다. 답은 사용한 모델 확장 기능의 라이선스에 따르므로, 에셋을 판매하거나 공개하기 전에 읽어 보십시오. 법률 자문이 아닙니다.',
          },
          {
            q: '생성 중 메모리가 부족하면 어떻게 하나요?',
            a: '문서는 더 작거나 양자화된(GGUF) 버전을 쓰고, GPU를 많이 쓰는 다른 앱을 닫고, 확장 기능 README에서 VRAM 요구 사항을 확인하라고 권합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**내 GPU에서 이미지나 프롬프트로 3D 메시를 생성하고 입력 데이터를 클라우드 밖에 두고 싶다면 Modly는 살펴볼 만합니다.**',
          '문서상으로는 많은 것을 갖추고 있습니다. 세 운영체제를 지원하는 MIT 라이선스의 무료 설치형 앱, 확장 기능으로 쓰는 여러 오픈소스 3D 모델, 네 가지 내보내기 형식, 내장 메시 도구입니다. 개발은 활발하며 2026년 11월 18일에 버전 0.5.0, 2026년 11월 19일에 푸시가 있었습니다.',
          '대신 성능 좋은 GPU, 처음 쓰기 전의 모델 다운로드, 명시되지 않은 모델 라이선스, 아직 1.0 미만인 프로젝트라는 점이 있습니다. PromptQuorum은 앱을 테스트하지 않았으므로 작은 이미지로 먼저 써 보고, 선택한 모델의 라이선스를 확인한 뒤 결과를 신뢰하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Modly 웹사이트](https://modly3d.app) — 개발자 설명, 기능, 다운로드 섹션. 2026년 11월 20일 확인.',
          '[문서 FAQ](https://modly3d.app/docs/faq) — 가격, 오프라인 사용, GPU 관련 설명, 내보내기 형식. 2026년 11월 20일 확인.',
          '[Workflow](https://modly3d.app/docs/workflow) — 입력, 컬렉션, 개인정보 관련 설명. 2026년 11월 20일 확인.',
          '[모델과 변형](https://modly3d.app/docs/models) — 공식 모델 계열과 양자화 변형. 2026년 11월 20일 확인.',
          '[확장 기능 카탈로그](https://modly3d.app/extensions) — 공식 및 커뮤니티 확장 기능. 2026년 11월 20일 확인.',
          '[로드맵](https://modly3d.app/roadmap) — 계획된 작업. 2026년 11월 20일 확인.',
          '[Modly GitHub 저장소](https://github.com/lightningpixel/modly) — README, LICENSE, 마지막 푸시. 2026년 11월 20일 확인.',
          '[릴리스 v0.5.0](https://github.com/lightningpixel/modly/releases/tag/v0.5.0) — 최신 버전, 날짜, 설치 파일, 릴리스 노트. 2026년 11월 20일 확인.',
          '[Hunyuan3D 2 Mini 확장 기능](https://github.com/lightningpixel/modly-hunyuan3d-mini-extension) — 공식 확장 기능 저장소 예시. 2026년 11월 20일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[ComfyUI 리뷰](/ko/power-local-llm/comfyui-review) — 로컬 이미지·영상 생성용 노드 기반 UI.',
          '[InvokeAI 리뷰](/ko/power-local-llm/invokeai-review) — 웹 인터페이스를 갖춘 로컬 이미지 생성.',
          '[Draw Things 리뷰](/ko/power-local-llm/draw-things-review) — macOS와 iOS의 로컬 이미지 생성.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
