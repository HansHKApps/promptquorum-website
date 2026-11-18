// Open Generative AI Review: Open-Source Image and Video Studio
// Slug: open-generative-ai-review
// Companion to: comfyui-review, invokeai-review, krita-ai-diffusion-review (image generation)
// Sources (all read 2026-11-18, no hands-on testing): GitHub repository and README, package.json, release v2.0.0, commit history, muapi.ai product page,
// About, Privacy Policy (last updated 2026-06-09), Terms (last updated 2025-07-02) and Pricing. The request came from the site owner, not from the maker.
// Last upstream update 2026-11-16 (last code commit; README-only commit 2026-11-18; latest release 2026-05-23) => no stale warning.
// Theme: 'Image & Video Generation' (same as krita-ai-diffusion-review).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Image & Video Generation',
    heroImage: '/images/open-generative-ai-review-hero-en.webp',
    title: 'Open Generative AI Review: Open-Source Image and Video Studio',
    seoTitle: 'Open Generative AI Review: Image and Video Studio',
    intro:
      'Open Generative AI is an MIT-licensed studio for generating images, video, lip-sync clips and audio. It runs as a desktop app or a web app, sends most generation requests to the Muapi API, and can run a few models locally in the desktop app. This review is based on the GitHub repository, the README, the releases page and the Muapi website, terms and privacy policy, checked on 18 November 2026. PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Open Generative AI is an MIT-licensed image, video and lip-sync studio. It uses the paid Muapi API for most models and local engines in the desktop app.',
    twitterDescription:
      'Open Generative AI: MIT-licensed image and video studio for desktop and web. Most models run through the paid Muapi API; some run locally. Not tested by us.',
    audience:
      'Creators and developers who want one open-source studio for hosted image and video models, and readers weighing it against local-only tools',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Generative AI',
    targetKeywords: [
      'Open Generative AI review',
      'Open Generative AI Muapi',
      'open source AI video generator',
      'Open Generative AI local models',
      'Open Generative AI pricing',
      'Open Generative AI no content filters',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Generative AI is an open-source desktop and web studio that gives one interface to many hosted image, video, lip-sync and audio models, plus a few local ones.** Its code is free, but most models are billed per generation through a Muapi account key, so "free" applies to the software rather than to every generation.',
    quickAnswerTop: {
      en: {
        question: 'What is Open Generative AI and who is it for?',
        answer:
          'Open Generative AI is a studio app for generating images, video, lip-sync clips and audio from one interface. It suits creators and developers who accept a paid third-party API for most models, and want a free desktop app with optional local engines.',
        bullets: [
          'Platforms: macOS, Windows and Linux installers, a hosted web version and a Docker Compose path.',
          'License: MIT.',
          'Cloud models need a Muapi API key; local engines work in the desktop app only.',
          'The maker says it applies no content filters; Muapi\'s terms set content rules for its service.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Models and Hardware', anchor: 'requirements' },
      { label: 'Features', anchor: 'features' },
      { label: 'Data Flow and Content Rules', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
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
            text: 'Open Generative AI is an MIT-licensed studio app that generates images, video, lip-sync clips and audio, mostly through the paid Muapi API and partly with local engines.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a free front end for many AI image and video models. You install it like a normal app, then either pay Muapi per generation for cloud models or download a small set of models to run on your own computer.',
          },
        ],
        items: [
          'Installers exist for macOS (Apple Silicon and Intel), Windows and Linux (AppImage and .deb), all listed on the GitHub releases page.',
          'The software is free under the MIT license; cloud generation is billed per generation by Muapi and needs an API key.',
          'Local generation works only in the desktop app, through a bundled engine (image models) or a Wan2GP install you set up yourself (video and large image models).',
          'The README says the macOS build is not notarized and the Windows installer is not code-signed, so expect a first-launch warning.',
          'PromptQuorum has not tested the app, its output quality, its speed or its content-filter claims.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Generating realistic images, video or talking portraits of real people raises consent, copyright and personality-rights questions. Check the rules that apply to you and the terms of each model provider before publishing anything. This is general information, not legal advice.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Open Generative AI is a studio-style interface for generating images and video with many models from one place.**',
          'The GitHub repository belongs to Anil Matcha, whose profile describes building open-source generative AI tools powered by Muapi. The README says the app is "Powered by Muapi.ai" and that the hosted version at muapi.ai/open-generative-ai uses the same studio code. Muapi is operated by Vadoo Internet Services Private Limited, according to its About page. No primary page states how the repository owner and that company are related.',
          'Version 2.0.0, published on 23 May 2026, is the latest GitHub release. The repository received a code commit on 16 November 2026 and a README edit on 18 November 2026, so development is ongoing and no stale-project warning applies.',
          'Per the README, the app has separate studios for images, video, audio, AI clipping, lip sync, cinema-style camera controls, marketing variations, node-based workflows and agents. The maker\'s model counts differ between README sections (from 200+ to 400+) and the GitHub description says 800+, so PromptQuorum does not state a model count.',
          'These descriptions are maker statements. PromptQuorum has not run the app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**You install Open Generative AI with a normal installer from the GitHub releases page, or open the hosted web version.**',
          'Version 2.0.0 lists a .dmg for Apple Silicon, a .dmg for Intel, a Windows .exe installer, an AppImage and a .deb. On macOS the README tells you to remove the quarantine flag with a Terminal command, or to use Open Anyway in System Settings. On Windows, SmartScreen may warn about the unsigned installer.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[macOS](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'How to get it': '.dmg (Apple Silicon or Intel); not notarized' },
          { 'Platform': '[Windows](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'How to get it': '.exe installer; not code-signed' },
          { 'Platform': '[Linux](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'How to get it': 'AppImage or .deb (Ubuntu x64)' },
          { 'Platform': '[Web](https://muapi.ai/open-generative-ai)', 'How to get it': 'Hosted studio in the browser; cloud models only' },
          { 'Platform': '[Website](https://muapi.ai/open-generative-ai)', 'How to get it': 'Official product page on the Muapi site' },
          { 'Platform': '[Source and Docker](https://github.com/Anil-matcha/Open-Generative-AI)', 'How to get it': 'Terminal: clone with submodules, npm run setup, or docker compose' },
        ],
        note: 'Building from source needs Node.js and a terminal; most users should use the installer. Local engines are available only in the desktop app, not in the hosted web version.',
      },
      requirements: {
        id: 'requirements',
        title: 'Models and Hardware',
        content: [
          '**What your computer needs depends on whether a model runs in the cloud or locally.** Cloud models run on Muapi\'s side, so the app itself has no stated hardware floor.',
          'The README describes two local engines. The bundled sd.cpp engine runs image models and uses Metal on Apple Silicon or CUDA, Vulkan or ROCm on Linux and Windows. Wan2GP is a separate project you install yourself, and it handles video models and large image models.',
        ],
        columns: ['Option', 'Stated in the README'],
        rows: [
          { 'Option': 'Cloud models', 'Stated in the README': 'Muapi API key; models run remotely' },
          { 'Option': 'sd.cpp (bundled)', 'Stated in the README': 'Image models; CPU, Metal, CUDA, Vulkan, ROCm' },
          { 'Option': 'sd.cpp, Z-Image', 'Stated in the README': '16 GB RAM recommended; hangs 8 GB Macs' },
          { 'Option': 'Wan2GP (own install)', 'Stated in the README': 'Video and large image models; CUDA or ROCm GPU' },
          { 'Option': 'Wan 2.1 1.3B (video)', 'Stated in the README': '480p, about 8 GB VRAM' },
          { 'Option': 'Remote Wan2GP', 'Stated in the README': 'Mac app can use a GPU box over MCP' },
        ],
        note: 'The model downloads are several gigabytes each. These figures are the maker\'s; PromptQuorum has not measured speed or quality.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The core is a set of studios that share one model catalog and one settings panel.** All items below are maker claims from the README.',
        ],
        items: [
          'Image Studio: text-to-image and image-to-image, with up to 14 reference images for compatible edit models.',
          'Video Studio: text-to-video and image-to-video, with controls for aspect ratio, resolution and duration that adapt to each model.',
          'Lip Sync Studio: a portrait image plus audio, or a video plus audio, to make a talking clip.',
          'Audio Studio, AI Clipping, Cinema Studio camera controls and a Marketing Studio for creative variations.',
          'Workflow Studio: a node-based editor to chain image, video and audio models, with templates and a playground.',
          'Agent Studio and Design Agent Studio for conversational and canvas-based generation.',
          'Generation history and upload history stored in the browser.',
          'Local models in the desktop app through Settings, then Local Models.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Content Rules',
        content: [
          '**With cloud models, your prompts and reference images go to Muapi\'s service, even though the app itself is self-hosted.**',
          'The README says the self-hosted app keeps your data on your machine, and also that API keys live in browser localStorage and are sent only to Muapi. Its API section says file uploads go to Muapi and come back as hosted URLs passed to image-conditioned models. Read together, local engines keep data on your computer, while cloud models do not.',
          'Muapi\'s privacy policy (last updated June 9, 2026) lists account information, uploaded photos and anonymised usage logs kept up to 12 months. It names AI model providers such as Replicate and fal.ai, Amazon Web Services and CloudFront storage, and Google and Apple sign-in as third parties. It does not state a country.',
          'The README and the repository description say the app has no content filters, no prompt rejections and no guardrails. Muapi\'s terms (last updated July 2, 2025) say the service must not be used to produce nudity, pornographic or sexually explicit content, malware, weapons or misinformation content. PromptQuorum could not establish which rule applies to a given request, or whether the local engines differ.',
          'You remain responsible for what you generate and publish. The Muapi terms are governed by the laws of India with disputes in the courts of Bangalore, Karnataka.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Open Generative AI fits people who want one interface over many hosted models and accept per-generation billing.**',
        ],
        items: [
          'Creators who want image, video and lip-sync tools in one installable app.',
          'Developers who want an MIT-licensed studio codebase they can modify and self-host.',
          'Mac users who want to try small local image models, with the option to send video work to a separate GPU machine.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Open Generative AI is a poor fit for strictly offline work, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs everything to run offline or needs data to stay on the device for every model.',
          'Not a fit: users who need a code-signed installer, or who cannot run the first-launch workaround.',
          'Not a fit: low-memory machines for the heavier local models.',
          'Unverified: Muapi credit packages, free-credit amounts and what "free" means on the hosted page. The pricing page lists per-generation rates only.',
          'Unverified: output quality, generation speed and the accuracy of the maker\'s model counts. PromptQuorum ran no tests.',
          'Unverified: how the "no content filters" statement fits Muapi\'s content rules, and whether the local engines apply any filter.',
          'Unverified: the relationship between the repository owner and the company behind Muapi. The HQ flag on the directory tile reflects the operator of the official website and hosted service.',
          'Unverified: which model providers are reached for a given model, and under what terms.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Generative AI vs Alternatives',
        itemHeadings: true,
        content: [
          '**The alternatives below run image generation locally, while Open Generative AI mainly calls a paid cloud API.** The facts in the table come from the PromptQuorum directory; PromptQuorum has not compared them hands-on.',
        ],
        columns: ['Tool', 'License and where it runs'],
        rows: [
          { 'Tool': 'Open Generative AI', 'License and where it runs': 'MIT; cloud API by default, optional local engines' },
          { 'Tool': '[ComfyUI](/power-local-llm/comfyui-review)', 'License and where it runs': 'GPL 3.0; local; node-based UI' },
          { 'Tool': '[InvokeAI](/power-local-llm/invokeai-review)', 'License and where it runs': 'Apache 2.0; local; web UI' },
          { 'Tool': '[Fooocus](/power-local-llm/fooocus-review)', 'License and where it runs': 'GPL 3.0; local; web UI' },
          { 'Tool': '[Stable Diffusion WebUI Forge](/power-local-llm/stable-diffusion-forge-review)', 'License and where it runs': 'AGPL-3.0; local; web UI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is Open Generative AI really free?',
            a: 'The software is free under the MIT license. Muapi\'s pricing page lists per-generation prices and calls itself "Pay Per Generation", so cloud generation costs money, while the local sd.cpp engine needs no API key per the README.',
          },
          {
            q: 'Do I need an account or an API key?',
            a: 'For cloud models, yes: the README asks for a Muapi access key on first use. It says you can skip the key if you only use local models.',
          },
          {
            q: 'Can I run it offline?',
            a: 'Partly. The desktop app can run local image models with the bundled sd.cpp engine after you download them. Video models need a separate Wan2GP install on a CUDA or ROCm GPU machine, and the hosted web version always uses cloud APIs.',
          },
          {
            q: 'Is the Docker version a different product?',
            a: 'No. The README lists a Docker Compose path that builds the web studio from the same repository, with submodules cloned first. It serves the app on port 3001 by default.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Open Generative AI is worth a look if you want one open-source studio over many hosted image and video models and are comfortable paying Muapi per generation.**',
          'It offers a normal installer for three desktop systems, an MIT license, a broad set of studios, a node-based workflow editor and optional local engines. Development is active, with a code commit on 16 November 2026 and version 2.0.0 released on 23 May 2026.',
          'The trade-offs are real. Most models depend on a paid third-party API, so the app is not local-first. The installers are not signed, the content-rule picture is unclear, and local video needs your own Wan2GP setup. PromptQuorum has not tested the app. Start with a small paid top-up or a small local model, and read both the README and Muapi\'s terms before generating anything you plan to publish.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Open Generative AI GitHub repository](https://github.com/Anil-matcha/Open-Generative-AI) — description, MIT license, last commit and project files, checked 18 November 2026.',
          '[Open Generative AI README](https://github.com/Anil-matcha/Open-Generative-AI#readme) — downloads, local engines, studios, API flow, quick start and Docker path, checked 18 November 2026.',
          '[Release v2.0.0](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0) — version, date and installer files, checked 18 November 2026.',
          '[Open Generative AI on Muapi](https://muapi.ai/open-generative-ai) — official product page and hosted studio, checked 18 November 2026.',
          '[Muapi About](https://muapi.ai/about) — operator name and Bangalore location, checked 18 November 2026.',
          '[Muapi Privacy Policy](https://muapi.ai/privacy) — data collected, third parties and retention, checked 18 November 2026.',
          '[Muapi Terms of Service](https://muapi.ai/terms) — content rules, governing law and billing, checked 18 November 2026.',
          '[Muapi Pricing](https://muapi.ai/pricing) — per-generation pricing model, checked 18 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[ComfyUI Review](/power-local-llm/comfyui-review) — Node-based UI for advanced image generation workflows.',
          '[InvokeAI Review](/power-local-llm/invokeai-review) — Image generation with a studio-style web interface.',
          '[Krita AI Diffusion Review](/power-local-llm/krita-ai-diffusion-review) — Generative fill and live painting inside Krita.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Image & Video Generation',
    heroImage: '/images/open-generative-ai-review-hero-de.webp',
    title: 'Open-Generative-AI-Rezension: Open-Source-Studio für Bild und Video',
    seoTitle: 'Open Generative AI Rezension: Bild- und Video-Studio',
    intro:
      'Open Generative AI ist ein MIT-lizenziertes Studio zum Erzeugen von Bildern, Videos, Lip-Sync-Clips und Audio. Es läuft als Desktop-App oder Web-App, schickt die meisten Generierungsanfragen an die Muapi-API und kann in der Desktop-App einige Modelle lokal ausführen. Diese Rezension stützt sich auf das GitHub-Repository, die README, die Release-Seite sowie die Website, die Nutzungsbedingungen und die Datenschutzerklärung von Muapi, geprüft am 18. November 2026. PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'Open Generative AI ist ein MIT-lizenziertes Bild-, Video- und Lip-Sync-Studio. Die meisten Modelle laufen über die bezahlte Muapi-API, einige lokal.',
    twitterDescription:
      'Open Generative AI: MIT-lizenziertes Bild- und Video-Studio für Desktop und Web. Die meisten Modelle laufen über die kostenpflichtige Muapi-API, einige lokal. Nicht von uns getestet.',
    audience:
      'Kreative und Entwickler, die ein Open-Source-Studio für gehostete Bild- und Videomodelle suchen, und Leser, die es mit rein lokalen Werkzeugen vergleichen',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Generative AI',
    targetKeywords: [
      'Open Generative AI Rezension',
      'Open Generative AI Muapi',
      'Open-Source KI-Videogenerator',
      'Open Generative AI lokale Modelle',
      'Open Generative AI Preise',
      'Open Generative AI ohne Inhaltsfilter',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Generative AI ist ein quelloffenes Desktop- und Web-Studio, das über eine Oberfläche viele gehostete Bild-, Video-, Lip-Sync- und Audiomodelle sowie einige lokale Modelle bündelt.** Der Code ist kostenlos, die meisten Modelle werden aber pro Generierung über einen Muapi-Schlüssel abgerechnet; „kostenlos“ gilt also für die Software, nicht für jede Generierung.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Open Generative AI und für wen eignet es sich?',
        answer:
          'Open Generative AI ist eine Studio-App, mit der Sie Bilder, Videos, Lip-Sync-Clips und Audio über eine Oberfläche erzeugen. Sie eignet sich für Kreative und Entwickler, die für die meisten Modelle eine kostenpflichtige Drittanbieter-API akzeptieren und eine kostenlose Desktop-App mit optionalen lokalen Engines wünschen.',
        bullets: [
          'Plattformen: Installer für macOS, Windows und Linux, eine gehostete Web-Version und ein Docker-Compose-Weg.',
          'Lizenz: MIT.',
          'Cloud-Modelle brauchen einen Muapi-API-Schlüssel; lokale Engines gibt es nur in der Desktop-App.',
          'Laut Hersteller wendet die App keine Inhaltsfilter an; die Nutzungsbedingungen von Muapi setzen Inhaltsregeln für den Dienst.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So erhalten Sie die App', anchor: 'get-it' },
      { label: 'Modelle und Hardware', anchor: 'requirements' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenfluss und Inhaltsregeln', anchor: 'privacy' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht prüfen konnten', anchor: 'who-should-not-use' },
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
            text: 'Open Generative AI ist eine MIT-lizenzierte Studio-App, die Bilder, Videos, Lip-Sync-Clips und Audio erzeugt, überwiegend über die kostenpflichtige Muapi-API und teilweise mit lokalen Engines.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich eine kostenlose Oberfläche für viele KI-Bild- und Videomodelle vor. Sie installieren sie wie eine normale App und bezahlen dann entweder Muapi pro Generierung für Cloud-Modelle oder laden wenige Modelle herunter, die auf Ihrem eigenen Computer laufen.',
          },
        ],
        items: [
          'Installer gibt es für macOS (Apple Silicon und Intel), Windows und Linux (AppImage und .deb); alle stehen auf der GitHub-Release-Seite.',
          'Die Software ist unter der MIT-Lizenz kostenlos; Cloud-Generierung rechnet Muapi pro Generierung ab und erfordert einen API-Schlüssel.',
          'Lokale Generierung funktioniert nur in der Desktop-App, über eine mitgelieferte Engine (Bildmodelle) oder eine selbst eingerichtete Wan2GP-Installation (Video und große Bildmodelle).',
          'Laut README ist der macOS-Build nicht notarisiert und der Windows-Installer nicht code-signiert; beim ersten Start ist daher mit einer Warnung zu rechnen.',
          'PromptQuorum hat weder die App noch Ausgabequalität, Geschwindigkeit oder die Aussagen zu Inhaltsfiltern getestet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Wer realistische Bilder, Videos oder sprechende Porträts realer Personen erzeugt, muss Einwilligung, Urheberrecht und Persönlichkeitsrechte beachten. Prüfen Sie vor jeder Veröffentlichung die für Sie geltenden Regeln und die Bedingungen des jeweiligen Modellanbieters. Dies sind allgemeine Informationen, keine Rechtsberatung.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Open Generative AI ist eine Studio-Oberfläche, mit der Sie Bilder und Videos mit vielen Modellen an einem Ort erzeugen.**',
          'Das GitHub-Repository gehört Anil Matcha, dessen Profil beschreibt, dass er quelloffene generative KI-Werkzeuge auf Basis von Muapi entwickelt. Die README nennt die App „Powered by Muapi.ai“ und sagt, die gehostete Version unter muapi.ai/open-generative-ai nutze denselben Studio-Code. Muapi wird laut der Über-uns-Seite von Vadoo Internet Services Private Limited betrieben. Keine Primärquelle nennt die Beziehung zwischen dem Repository-Inhaber und diesem Unternehmen.',
          'Version 2.0.0, veröffentlicht am 23. Mai 2026, ist das neueste GitHub-Release. Das Repository erhielt am 16. November 2026 einen Code-Commit und am 18. November 2026 eine README-Änderung; die Entwicklung läuft also weiter, und es gilt keine Warnung für verwaiste Projekte.',
          'Laut README hat die App eigene Studios für Bilder, Video, Audio, KI-Clipping, Lip-Sync, Kamerasteuerung im Kinostil, Marketing-Varianten, knotenbasierte Workflows und Agenten. Die Modellzahlen des Herstellers weichen zwischen den README-Abschnitten ab (von 200+ bis 400+), und die GitHub-Beschreibung nennt 800+; PromptQuorum nennt deshalb keine Modellzahl.',
          'Diese Beschreibungen sind Herstellerangaben. PromptQuorum hat die App nicht ausgeführt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So erhalten Sie die App',
        content: [
          '**Sie installieren Open Generative AI mit einem normalen Installer von der GitHub-Release-Seite oder öffnen die gehostete Web-Version.**',
          'Version 2.0.0 enthält eine .dmg für Apple Silicon, eine .dmg für Intel, einen Windows-Installer (.exe), ein AppImage und eine .deb-Datei. Unter macOS empfiehlt die README, die Quarantäne-Markierung per Terminal-Befehl zu entfernen oder in den Systemeinstellungen „Trotzdem öffnen“ zu wählen. Unter Windows kann SmartScreen vor dem unsignierten Installer warnen.',
        ],
        columns: ['Plattform', 'So erhalten Sie die App'],
        rows: [
          { 'Plattform': '[macOS](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'So erhalten Sie die App': '.dmg (Apple Silicon oder Intel); nicht notarisiert' },
          { 'Plattform': '[Windows](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'So erhalten Sie die App': '.exe-Installer; nicht code-signiert' },
          { 'Plattform': '[Linux](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'So erhalten Sie die App': 'AppImage oder .deb (Ubuntu x64)' },
          { 'Plattform': '[Web](https://muapi.ai/open-generative-ai)', 'So erhalten Sie die App': 'Gehostetes Studio im Browser; nur Cloud-Modelle' },
          { 'Plattform': '[Website](https://muapi.ai/open-generative-ai)', 'So erhalten Sie die App': 'Offizielle Produktseite auf der Muapi-Website' },
          { 'Plattform': '[Quellcode und Docker](https://github.com/Anil-matcha/Open-Generative-AI)', 'So erhalten Sie die App': 'Terminal: mit Submodulen klonen, npm run setup, oder docker compose' },
        ],
        note: 'Der Build aus dem Quellcode erfordert Node.js und ein Terminal; die meisten Nutzer sollten den Installer verwenden. Lokale Engines gibt es nur in der Desktop-App, nicht in der gehosteten Web-Version.',
      },
      requirements: {
        id: 'requirements',
        title: 'Modelle und Hardware',
        content: [
          '**Was Ihr Computer braucht, hängt davon ab, ob ein Modell in der Cloud oder lokal läuft.** Cloud-Modelle laufen auf Seiten von Muapi; für die App selbst ist daher keine Hardware-Untergrenze angegeben.',
          'Die README beschreibt zwei lokale Engines. Die mitgelieferte Engine sd.cpp führt Bildmodelle aus und nutzt Metal auf Apple Silicon bzw. CUDA, Vulkan oder ROCm unter Linux und Windows. Wan2GP ist ein separates Projekt, das Sie selbst installieren und das Videomodelle sowie große Bildmodelle übernimmt.',
        ],
        columns: ['Option', 'Angabe in der README'],
        rows: [
          { 'Option': 'Cloud-Modelle', 'Angabe in der README': 'Muapi-API-Schlüssel; Modelle laufen extern' },
          { 'Option': 'sd.cpp (mitgeliefert)', 'Angabe in der README': 'Bildmodelle; CPU, Metal, CUDA, Vulkan, ROCm' },
          { 'Option': 'sd.cpp, Z-Image', 'Angabe in der README': '16 GB RAM empfohlen; hängt auf Macs mit 8 GB' },
          { 'Option': 'Wan2GP (eigene Installation)', 'Angabe in der README': 'Video, große Bildmodelle; CUDA- oder ROCm-GPU' },
          { 'Option': 'Wan 2.1 1.3B (Video)', 'Angabe in der README': '480p, etwa 8 GB VRAM' },
          { 'Option': 'Wan2GP auf anderem Rechner', 'Angabe in der README': 'Mac-App nutzt GPU-Rechner per MCP' },
        ],
        note: 'Die Modell-Downloads umfassen jeweils mehrere Gigabyte. Diese Angaben stammen vom Hersteller; PromptQuorum hat weder Geschwindigkeit noch Qualität gemessen.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Den Kern bilden mehrere Studios, die sich einen Modellkatalog und ein Einstellungsfenster teilen.** Alle folgenden Punkte sind Herstellerangaben aus der README.',
        ],
        items: [
          'Image Studio: Text-zu-Bild und Bild-zu-Bild, mit bis zu 14 Referenzbildern für kompatible Bearbeitungsmodelle.',
          'Video Studio: Text-zu-Video und Bild-zu-Video, mit Reglern für Seitenverhältnis, Auflösung und Dauer, die sich an das jeweilige Modell anpassen.',
          'Lip Sync Studio: ein Porträtbild plus Audio oder ein Video plus Audio ergeben einen sprechenden Clip.',
          'Audio Studio, AI Clipping, Kamerasteuerung im Cinema Studio und ein Marketing Studio für kreative Varianten.',
          'Workflow Studio: ein knotenbasierter Editor, der Bild-, Video- und Audiomodelle verkettet, mit Vorlagen und Playground.',
          'Agent Studio und Design Agent Studio für dialogbasierte und leinwandbasierte Generierung.',
          'Generierungsverlauf und Upload-Verlauf werden im Browser gespeichert.',
          'Lokale Modelle in der Desktop-App über Einstellungen und dann Local Models.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Inhaltsregeln',
        content: [
          '**Bei Cloud-Modellen gehen Ihre Prompts und Referenzbilder an den Dienst von Muapi, obwohl die App selbst selbst gehostet wird.**',
          'Die README sagt, die selbst gehostete App halte Ihre Daten auf Ihrem Rechner, und ebenso, dass API-Schlüssel im localStorage des Browsers liegen und nur an Muapi gesendet werden. Im API-Abschnitt steht, dass Datei-Uploads an Muapi gehen und als gehostete URLs an bildkonditionierte Modelle weitergegeben werden. Zusammengenommen heißt das: Lokale Engines halten die Daten auf Ihrem Computer, Cloud-Modelle nicht.',
          'Die Datenschutzerklärung von Muapi (zuletzt aktualisiert am 9. Juni 2026) nennt Kontodaten, hochgeladene Fotos und anonymisierte Nutzungsprotokolle, die bis zu 12 Monate gespeichert werden. Als Dritte nennt sie KI-Modellanbieter wie Replicate und fal.ai, Amazon Web Services mit CloudFront-Speicher sowie die Anmeldung über Google und Apple. Ein Land nennt sie nicht.',
          'Die README und die Repository-Beschreibung sagen, die App habe keine Inhaltsfilter, keine abgelehnten Prompts und keine Schutzmechanismen. Die Nutzungsbedingungen von Muapi (zuletzt aktualisiert am 2. Juli 2025) besagen, dass der Dienst nicht für Nacktheit, pornografische oder sexuell explizite Inhalte, Schadsoftware, Waffen oder Falschinformationen genutzt werden darf. PromptQuorum konnte nicht klären, welche Regel für eine bestimmte Anfrage gilt oder ob sich die lokalen Engines unterscheiden.',
          'Sie bleiben für das verantwortlich, was Sie erzeugen und veröffentlichen. Die Muapi-Bedingungen unterliegen indischem Recht, Streitigkeiten gehören vor die Gerichte in Bangalore, Karnataka.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Open Generative AI passt zu Menschen, die eine Oberfläche für viele gehostete Modelle wollen und die Abrechnung pro Generierung akzeptieren.**',
        ],
        items: [
          'Kreative, die Bild-, Video- und Lip-Sync-Werkzeuge in einer installierbaren App wollen.',
          'Entwickler, die eine MIT-lizenzierte Studio-Codebasis suchen, die sie anpassen und selbst hosten können.',
          'Mac-Nutzer, die kleine lokale Bildmodelle ausprobieren möchten und Videoarbeit bei Bedarf an einen separaten GPU-Rechner auslagern.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht prüfen konnten',
        content: [
          '**Für rein Offline-Arbeit ist Open Generative AI ungeeignet, und mehrere Details sind ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: wer verlangt, dass alles offline läuft oder dass die Daten bei jedem Modell auf dem Gerät bleiben.',
          'Nicht geeignet: Nutzer, die einen code-signierten Installer brauchen oder den Workaround beim ersten Start nicht ausführen können.',
          'Nicht geeignet: Rechner mit wenig Arbeitsspeicher für die größeren lokalen Modelle.',
          'Ungeprüft: Muapi-Guthabenpakete, Gratisguthaben und was „kostenlos“ auf der gehosteten Seite bedeutet. Die Preisseite nennt nur Preise pro Generierung.',
          'Ungeprüft: Ausgabequalität, Generierungsgeschwindigkeit und die Richtigkeit der Modellzahlen des Herstellers. PromptQuorum hat nichts getestet.',
          'Ungeprüft: wie die Aussage „keine Inhaltsfilter“ zu den Inhaltsregeln von Muapi passt und ob die lokalen Engines Filter anwenden.',
          'Ungeprüft: die Beziehung zwischen dem Repository-Inhaber und dem Unternehmen hinter Muapi. Die Länderflagge auf der Verzeichniskachel steht für den Betreiber der offiziellen Website und des gehosteten Dienstes.',
          'Ungeprüft: welche Modellanbieter für ein bestimmtes Modell angesprochen werden und zu welchen Bedingungen.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Generative AI im Vergleich mit Alternativen',
        itemHeadings: true,
        content: [
          '**Die folgenden Alternativen erzeugen Bilder lokal, während Open Generative AI überwiegend eine kostenpflichtige Cloud-API aufruft.** Die Angaben in der Tabelle stammen aus dem PromptQuorum-Verzeichnis; PromptQuorum hat die Tools nicht selbst verglichen.',
        ],
        columns: ['Tool', 'Lizenz und Ausführung'],
        rows: [
          { 'Tool': 'Open Generative AI', 'Lizenz und Ausführung': 'MIT; standardmäßig Cloud-API, optional lokale Engines' },
          { 'Tool': '[ComfyUI](/de/power-local-llm/comfyui-review)', 'Lizenz und Ausführung': 'GPL 3.0; lokal; knotenbasierte Oberfläche' },
          { 'Tool': '[InvokeAI](/de/power-local-llm/invokeai-review)', 'Lizenz und Ausführung': 'Apache 2.0; lokal; Web-Oberfläche' },
          { 'Tool': '[Fooocus](/de/power-local-llm/fooocus-review)', 'Lizenz und Ausführung': 'GPL 3.0; lokal; Web-Oberfläche' },
          { 'Tool': '[Stable Diffusion WebUI Forge](/de/power-local-llm/stable-diffusion-forge-review)', 'Lizenz und Ausführung': 'AGPL-3.0; lokal; Web-Oberfläche' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist Open Generative AI wirklich kostenlos?',
            a: 'Die Software ist unter der MIT-Lizenz kostenlos. Die Preisseite von Muapi nennt Preise pro Generierung und bezeichnet sich als „Pay Per Generation“; Cloud-Generierung kostet also Geld, während die lokale Engine sd.cpp laut README keinen API-Schlüssel braucht.',
          },
          {
            q: 'Brauche ich ein Konto oder einen API-Schlüssel?',
            a: 'Für Cloud-Modelle ja: Die README verlangt bei der ersten Nutzung einen Muapi-Zugangsschlüssel. Sie sagt, Sie könnten den Schlüssel weglassen, wenn Sie nur lokale Modelle nutzen.',
          },
          {
            q: 'Kann ich es offline nutzen?',
            a: 'Teilweise. Die Desktop-App kann lokale Bildmodelle mit der mitgelieferten Engine sd.cpp ausführen, nachdem Sie sie heruntergeladen haben. Videomodelle brauchen eine separate Wan2GP-Installation auf einem Rechner mit CUDA- oder ROCm-GPU, und die gehostete Web-Version nutzt immer Cloud-APIs.',
          },
          {
            q: 'Ist die Docker-Version ein anderes Produkt?',
            a: 'Nein. Die README nennt einen Docker-Compose-Weg, der das Web-Studio aus demselben Repository baut, wobei zuerst die Submodule geklont werden müssen. Standardmäßig läuft die App auf Port 3001.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Open Generative AI ist einen Blick wert, wenn Sie ein Open-Source-Studio für viele gehostete Bild- und Videomodelle wollen und bereit sind, Muapi pro Generierung zu bezahlen.**',
          'Es bietet einen normalen Installer für drei Desktop-Systeme, eine MIT-Lizenz, viele Studios, einen knotenbasierten Workflow-Editor und optionale lokale Engines. Die Entwicklung ist aktiv, mit einem Code-Commit am 16. November 2026 und Version 2.0.0 vom 23. Mai 2026.',
          'Die Kompromisse sind real. Die meisten Modelle hängen von einer kostenpflichtigen Drittanbieter-API ab, die App ist also nicht lokal-first. Die Installer sind nicht signiert, die Lage bei den Inhaltsregeln ist unklar, und lokales Video braucht Ihre eigene Wan2GP-Einrichtung. PromptQuorum hat die App nicht getestet. Beginnen Sie mit einer kleinen Aufladung oder einem kleinen lokalen Modell und lesen Sie die README und die Muapi-Bedingungen, bevor Sie etwas erzeugen, das Sie veröffentlichen wollen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Open-Generative-AI-GitHub-Repository](https://github.com/Anil-matcha/Open-Generative-AI) — Beschreibung, MIT-Lizenz, letzter Commit und Projektdateien, geprüft am 18. November 2026.',
          '[Open-Generative-AI-README](https://github.com/Anil-matcha/Open-Generative-AI#readme) — Downloads, lokale Engines, Studios, API-Ablauf, Schnellstart und Docker-Weg, geprüft am 18. November 2026.',
          '[Release v2.0.0](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0) — Version, Datum und Installer-Dateien, geprüft am 18. November 2026.',
          '[Open Generative AI bei Muapi](https://muapi.ai/open-generative-ai) — offizielle Produktseite und gehostetes Studio, geprüft am 18. November 2026.',
          '[Muapi Über uns](https://muapi.ai/about) — Name des Betreibers und Standort Bangalore, geprüft am 18. November 2026.',
          '[Muapi Datenschutzerklärung](https://muapi.ai/privacy) — erhobene Daten, Dritte und Speicherdauer, geprüft am 18. November 2026.',
          '[Muapi Nutzungsbedingungen](https://muapi.ai/terms) — Inhaltsregeln, anwendbares Recht und Abrechnung, geprüft am 18. November 2026.',
          '[Muapi Preise](https://muapi.ai/pricing) — Preismodell pro Generierung, geprüft am 18. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[ComfyUI-Rezension](/de/power-local-llm/comfyui-review) — Knotenbasierte Oberfläche für fortgeschrittene Bildgenerierungs-Workflows.',
          '[InvokeAI-Rezension](/de/power-local-llm/invokeai-review) — Bildgenerierung mit einer Web-Oberfläche im Studio-Stil.',
          '[Krita-AI-Diffusion-Rezension](/de/power-local-llm/krita-ai-diffusion-review) — Generatives Füllen und Live-Malen direkt in Krita.',
          '[Verzeichnis lokaler KI-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Image & Video Generation',
    heroImage: '/images/open-generative-ai-review-hero-es.webp',
    title: 'Reseña de Open Generative AI: estudio de código abierto para imagen y vídeo',
    seoTitle: 'Reseña de Open Generative AI: estudio de imagen y vídeo',
    intro:
      'Open Generative AI es un estudio con licencia MIT para generar imágenes, vídeo, clips de sincronización labial y audio. Funciona como app de escritorio o app web, envía la mayoría de las solicitudes de generación a la API de Muapi y puede ejecutar algunos modelos en local en la app de escritorio. Esta reseña se basa en el repositorio de GitHub, el README, la página de versiones y el sitio web, los términos y la política de privacidad de Muapi, consultados el 18 de noviembre de 2026. PromptQuorum no ha probado la app.',
    metaDescription:
      'Open Generative AI es un estudio de imagen, vídeo y lip-sync con licencia MIT. La mayoría de los modelos usan la API de pago de Muapi; otros, en local.',
    twitterDescription:
      'Open Generative AI: estudio de imagen y vídeo con licencia MIT para escritorio y web. La mayoría de los modelos usan la API de pago de Muapi; algunos, en local. No probado por nosotros.',
    audience:
      'Creadores y desarrolladores que quieren un estudio de código abierto para modelos de imagen y vídeo alojados, y lectores que lo comparan con herramientas solo locales',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Generative AI',
    targetKeywords: [
      'reseña Open Generative AI',
      'Open Generative AI Muapi',
      'generador de vídeo con IA de código abierto',
      'Open Generative AI modelos locales',
      'Open Generative AI precios',
      'Open Generative AI sin filtros de contenido',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Generative AI es un estudio de código abierto para escritorio y web que ofrece una sola interfaz para muchos modelos alojados de imagen, vídeo, sincronización labial y audio, además de algunos modelos locales.** Su código es gratuito, pero la mayoría de los modelos se facturan por generación mediante una clave de cuenta de Muapi, así que «gratis» se aplica al software y no a cada generación.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Open Generative AI y para quién es?',
        answer:
          'Open Generative AI es una app de estudio para generar imágenes, vídeo, clips de sincronización labial y audio desde una sola interfaz. Encaja con creadores y desarrolladores que aceptan una API de terceros de pago para la mayoría de los modelos y quieren una app de escritorio gratuita con motores locales opcionales.',
        bullets: [
          'Plataformas: instaladores para macOS, Windows y Linux, versión web alojada y una vía con Docker Compose.',
          'Licencia: MIT.',
          'Los modelos en la nube necesitan una clave de API de Muapi; los motores locales solo funcionan en la app de escritorio.',
          'Según el creador, la app no aplica filtros de contenido; los términos de Muapi fijan reglas de contenido para su servicio.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
      { label: 'Modelos y hardware', anchor: 'requirements' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Flujo de datos y reglas de contenido', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
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
            text: 'Open Generative AI es una app de estudio con licencia MIT que genera imágenes, vídeo, clips de sincronización labial y audio, sobre todo con la API de pago de Muapi y en parte con motores locales.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una interfaz gratuita para muchos modelos de imagen y vídeo con IA. La instalas como una app normal y después pagas a Muapi por generación para los modelos en la nube, o descargas unos pocos modelos para ejecutarlos en tu propio equipo.',
          },
        ],
        items: [
          'Hay instaladores para macOS (Apple Silicon e Intel), Windows y Linux (AppImage y .deb), todos en la página de versiones de GitHub.',
          'El software es gratuito con la licencia MIT; la generación en la nube la factura Muapi por generación y requiere una clave de API.',
          'La generación local solo funciona en la app de escritorio, con un motor incluido (modelos de imagen) o con una instalación de Wan2GP que configuras tú (vídeo y modelos de imagen grandes).',
          'El README dice que la versión de macOS no está notarizada y que el instalador de Windows no está firmado, así que espera una advertencia al primer inicio.',
          'PromptQuorum no ha probado la app, la calidad de sus resultados, su velocidad ni sus afirmaciones sobre filtros de contenido.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Generar imágenes, vídeo o retratos parlantes realistas de personas reales plantea cuestiones de consentimiento, derechos de autor y derechos de la personalidad. Revisa las normas que te afectan y los términos de cada proveedor de modelos antes de publicar nada. Esta es información general, no asesoramiento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen',
        content: [
          '**Open Generative AI es una interfaz de tipo estudio para generar imágenes y vídeo con muchos modelos desde un solo lugar.**',
          'El repositorio de GitHub pertenece a Anil Matcha, cuyo perfil dice que crea herramientas de IA generativa de código abierto impulsadas por Muapi. El README presenta la app como «Powered by Muapi.ai» y dice que la versión alojada en muapi.ai/open-generative-ai usa el mismo código del estudio. Según su página Acerca de, Muapi la opera Vadoo Internet Services Private Limited. Ninguna fuente primaria indica la relación entre el propietario del repositorio y esa empresa.',
          'La versión 2.0.0, publicada el 23 de mayo de 2026, es la última de GitHub. El repositorio recibió un commit de código el 16 de noviembre de 2026 y un cambio en el README el 18 de noviembre de 2026, así que el desarrollo continúa y no se aplica ninguna advertencia de proyecto abandonado.',
          'Según el README, la app tiene estudios independientes para imágenes, vídeo, audio, recorte con IA, sincronización labial, controles de cámara de estilo cinematográfico, variantes de marketing, flujos de trabajo por nodos y agentes. Los recuentos de modelos del creador difieren entre secciones del README (de 200+ a 400+) y la descripción de GitHub dice 800+; por eso PromptQuorum no da una cifra de modelos.',
          'Estas descripciones son afirmaciones del creador. PromptQuorum no ha ejecutado la app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Instalas Open Generative AI con un instalador normal desde la página de versiones de GitHub, o abres la versión web alojada.**',
          'La versión 2.0.0 incluye un .dmg para Apple Silicon, un .dmg para Intel, un instalador .exe para Windows, un AppImage y un .deb. En macOS, el README indica quitar la marca de cuarentena con un comando de Terminal o usar «Abrir de todos modos» en Ajustes del Sistema. En Windows, SmartScreen puede avisar sobre el instalador sin firmar.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[macOS](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'Cómo conseguirla': '.dmg (Apple Silicon o Intel); sin notarizar' },
          { 'Plataforma': '[Windows](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'Cómo conseguirla': 'Instalador .exe; sin firma de código' },
          { 'Plataforma': '[Linux](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'Cómo conseguirla': 'AppImage o .deb (Ubuntu x64)' },
          { 'Plataforma': '[Web](https://muapi.ai/open-generative-ai)', 'Cómo conseguirla': 'Estudio alojado en el navegador; solo modelos en la nube' },
          { 'Plataforma': '[Sitio web](https://muapi.ai/open-generative-ai)', 'Cómo conseguirla': 'Página oficial del producto en el sitio de Muapi' },
          { 'Plataforma': '[Código fuente y Docker](https://github.com/Anil-matcha/Open-Generative-AI)', 'Cómo conseguirla': 'Terminal: clonar con submódulos, npm run setup o docker compose' },
        ],
        note: 'Compilar desde el código fuente requiere Node.js y una terminal; la mayoría de los usuarios deberían usar el instalador. Los motores locales solo están en la app de escritorio, no en la versión web alojada.',
      },
      requirements: {
        id: 'requirements',
        title: 'Modelos y hardware',
        content: [
          '**Lo que necesita tu equipo depende de si un modelo se ejecuta en la nube o en local.** Los modelos en la nube se ejecutan en Muapi, así que no se indica un mínimo de hardware para la propia app.',
          'El README describe dos motores locales. El motor sd.cpp incluido ejecuta modelos de imagen y usa Metal en Apple Silicon, o CUDA, Vulkan o ROCm en Linux y Windows. Wan2GP es un proyecto aparte que instalas tú mismo y se ocupa de los modelos de vídeo y de los modelos de imagen grandes.',
        ],
        columns: ['Opción', 'Indicado en el README'],
        rows: [
          { 'Opción': 'Modelos en la nube', 'Indicado en el README': 'Clave de API de Muapi; modelos remotos' },
          { 'Opción': 'sd.cpp (incluido)', 'Indicado en el README': 'Modelos de imagen; CPU, Metal, CUDA, Vulkan, ROCm' },
          { 'Opción': 'sd.cpp, Z-Image', 'Indicado en el README': '16 GB de RAM recomendados; bloquea Macs de 8 GB' },
          { 'Opción': 'Wan2GP (instalación propia)', 'Indicado en el README': 'Vídeo y modelos grandes; GPU CUDA o ROCm' },
          { 'Opción': 'Wan 2.1 1.3B (vídeo)', 'Indicado en el README': '480p, unos 8 GB de VRAM' },
          { 'Opción': 'Wan2GP remoto', 'Indicado en el README': 'La app de Mac usa un equipo con GPU por MCP' },
        ],
        note: 'Cada descarga de modelo ocupa varios gigabytes. Estas cifras son del creador; PromptQuorum no ha medido velocidad ni calidad.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El núcleo es un conjunto de estudios que comparten un catálogo de modelos y un panel de ajustes.** Todos los puntos siguientes son afirmaciones del creador tomadas del README.',
        ],
        items: [
          'Image Studio: texto a imagen e imagen a imagen, con hasta 14 imágenes de referencia para los modelos de edición compatibles.',
          'Video Studio: texto a vídeo e imagen a vídeo, con controles de relación de aspecto, resolución y duración que se adaptan a cada modelo.',
          'Lip Sync Studio: un retrato más audio, o un vídeo más audio, para crear un clip parlante.',
          'Audio Studio, AI Clipping, controles de cámara de Cinema Studio y Marketing Studio para variantes creativas.',
          'Workflow Studio: un editor por nodos para encadenar modelos de imagen, vídeo y audio, con plantillas y un playground.',
          'Agent Studio y Design Agent Studio para generación conversacional y sobre lienzo.',
          'Historial de generaciones y de subidas guardado en el navegador.',
          'Modelos locales en la app de escritorio desde Ajustes y luego Local Models.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y reglas de contenido',
        content: [
          '**Con los modelos en la nube, tus prompts y tus imágenes de referencia van al servicio de Muapi, aunque la app sea autoalojada.**',
          'El README dice que la app autoalojada mantiene tus datos en tu equipo, y también que las claves de API se guardan en el localStorage del navegador y solo se envían a Muapi. Su sección de API indica que los archivos subidos van a Muapi y vuelven como URL alojadas que se pasan a los modelos que reciben una imagen. Leído en conjunto, los motores locales mantienen los datos en tu equipo y los modelos en la nube no.',
          'La política de privacidad de Muapi (última actualización: 9 de junio de 2026) menciona datos de la cuenta, fotos subidas y registros de uso anonimizados que se conservan hasta 12 meses. Cita como terceros a proveedores de modelos de IA como Replicate y fal.ai, el almacenamiento de Amazon Web Services con CloudFront y el inicio de sesión de Google y Apple. No indica ningún país.',
          'El README y la descripción del repositorio dicen que la app no tiene filtros de contenido, ni rechazo de prompts, ni salvaguardas. Los términos de Muapi (última actualización: 2 de julio de 2025) dicen que el servicio no debe usarse para producir desnudos, contenido pornográfico o sexualmente explícito, malware, armas ni desinformación. PromptQuorum no pudo establecer qué regla se aplica a una solicitud concreta ni si los motores locales difieren.',
          'Sigues siendo responsable de lo que generas y publicas. Los términos de Muapi se rigen por las leyes de la India, con los litigios en los tribunales de Bangalore, Karnataka.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Open Generative AI encaja con quienes quieren una sola interfaz para muchos modelos alojados y aceptan la facturación por generación.**',
        ],
        items: [
          'Creadores que quieren herramientas de imagen, vídeo y sincronización labial en una sola app instalable.',
          'Desarrolladores que quieren una base de código de estudio con licencia MIT que puedan modificar y autoalojar.',
          'Usuarios de Mac que quieren probar modelos de imagen locales pequeños, con la opción de enviar el trabajo de vídeo a otro equipo con GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Open Generative AI encaja mal con el trabajo estrictamente sin conexión, y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: quien necesite que todo funcione sin conexión o que los datos se queden en el dispositivo con cada modelo.',
          'No encaja: usuarios que necesiten un instalador firmado o que no puedan aplicar la solución del primer inicio.',
          'No encaja: equipos con poca memoria para los modelos locales más pesados.',
          'Sin verificar: los paquetes de créditos de Muapi, las cantidades de créditos gratuitos y qué significa «gratis» en la página alojada. La página de precios solo lista tarifas por generación.',
          'Sin verificar: la calidad de los resultados, la velocidad de generación y la exactitud de los recuentos de modelos del creador. PromptQuorum no hizo pruebas.',
          'Sin verificar: cómo encaja la afirmación «sin filtros de contenido» con las reglas de contenido de Muapi, y si los motores locales aplican algún filtro.',
          'Sin verificar: la relación entre el propietario del repositorio y la empresa detrás de Muapi. La bandera de la ficha del directorio refleja al operador del sitio web oficial y del servicio alojado.',
          'Sin verificar: qué proveedores de modelos se usan para un modelo concreto y con qué condiciones.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Generative AI frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Las alternativas siguientes generan imágenes en local, mientras que Open Generative AI llama sobre todo a una API en la nube de pago.** Los datos de la tabla proceden del directorio de PromptQuorum; PromptQuorum no las ha comparado en la práctica.',
        ],
        columns: ['Herramienta', 'Licencia y dónde se ejecuta'],
        rows: [
          { 'Herramienta': 'Open Generative AI', 'Licencia y dónde se ejecuta': 'MIT; API en la nube por defecto, motores locales opcionales' },
          { 'Herramienta': '[ComfyUI](/es/power-local-llm/comfyui-review)', 'Licencia y dónde se ejecuta': 'GPL 3.0; local; interfaz por nodos' },
          { 'Herramienta': '[InvokeAI](/es/power-local-llm/invokeai-review)', 'Licencia y dónde se ejecuta': 'Apache 2.0; local; interfaz web' },
          { 'Herramienta': '[Fooocus](/es/power-local-llm/fooocus-review)', 'Licencia y dónde se ejecuta': 'GPL 3.0; local; interfaz web' },
          { 'Herramienta': '[Stable Diffusion WebUI Forge](/es/power-local-llm/stable-diffusion-forge-review)', 'Licencia y dónde se ejecuta': 'AGPL-3.0; local; interfaz web' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Open Generative AI es realmente gratis?',
            a: 'El software es gratuito con la licencia MIT. La página de precios de Muapi lista tarifas por generación y se presenta como «Pay Per Generation», así que la generación en la nube cuesta dinero, mientras que el motor local sd.cpp no necesita clave de API según el README.',
          },
          {
            q: '¿Necesito una cuenta o una clave de API?',
            a: 'Para los modelos en la nube, sí: el README pide una clave de acceso de Muapi en el primer uso. Dice que puedes omitir la clave si solo usas modelos locales.',
          },
          {
            q: '¿Puedo usarla sin conexión?',
            a: 'En parte. La app de escritorio puede ejecutar modelos de imagen locales con el motor sd.cpp incluido, una vez descargados. Los modelos de vídeo requieren una instalación aparte de Wan2GP en un equipo con GPU CUDA o ROCm, y la versión web alojada siempre usa API en la nube.',
          },
          {
            q: '¿La versión de Docker es otro producto?',
            a: 'No. El README describe una vía con Docker Compose que construye el estudio web a partir del mismo repositorio, clonando antes los submódulos. Sirve la app en el puerto 3001 por defecto.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Open Generative AI merece una mirada si quieres un estudio de código abierto para muchos modelos alojados de imagen y vídeo y no te importa pagar a Muapi por generación.**',
          'Ofrece un instalador normal para tres sistemas de escritorio, licencia MIT, muchos estudios, un editor de flujos de trabajo por nodos y motores locales opcionales. El desarrollo está activo, con un commit de código el 16 de noviembre de 2026 y la versión 2.0.0 publicada el 23 de mayo de 2026.',
          'Las contrapartidas son reales. La mayoría de los modelos dependen de una API de terceros de pago, así que la app no es local primero. Los instaladores no están firmados, el panorama de las reglas de contenido no está claro y el vídeo local requiere tu propia instalación de Wan2GP. PromptQuorum no ha probado la app. Empieza con una recarga pequeña o un modelo local pequeño, y lee el README y los términos de Muapi antes de generar nada que pienses publicar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Repositorio de GitHub de Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) — descripción, licencia MIT, último commit y archivos del proyecto, consultados el 18 de noviembre de 2026.',
          '[README de Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI#readme) — descargas, motores locales, estudios, flujo de la API, inicio rápido y vía Docker, consultados el 18 de noviembre de 2026.',
          '[Versión v2.0.0](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0) — versión, fecha y archivos del instalador, consultados el 18 de noviembre de 2026.',
          '[Open Generative AI en Muapi](https://muapi.ai/open-generative-ai) — página oficial del producto y estudio alojado, consultados el 18 de noviembre de 2026.',
          '[Muapi, Acerca de](https://muapi.ai/about) — nombre del operador y ubicación en Bangalore, consultados el 18 de noviembre de 2026.',
          '[Política de privacidad de Muapi](https://muapi.ai/privacy) — datos recopilados, terceros y conservación, consultados el 18 de noviembre de 2026.',
          '[Términos de servicio de Muapi](https://muapi.ai/terms) — reglas de contenido, ley aplicable y facturación, consultados el 18 de noviembre de 2026.',
          '[Precios de Muapi](https://muapi.ai/pricing) — modelo de precios por generación, consultados el 18 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de ComfyUI](/es/power-local-llm/comfyui-review) — Interfaz por nodos para flujos avanzados de generación de imágenes.',
          '[Reseña de InvokeAI](/es/power-local-llm/invokeai-review) — Generación de imágenes con una interfaz web de estilo estudio.',
          '[Reseña de Krita AI Diffusion](/es/power-local-llm/krita-ai-diffusion-review) — Relleno generativo y pintura en vivo dentro de Krita.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Image & Video Generation',
    heroImage: '/images/open-generative-ai-review-hero-fr.webp',
    title: 'Test d\'Open Generative AI : studio open source pour l\'image et la vidéo',
    seoTitle: 'Open Generative AI : avis sur ce studio image et vidéo',
    intro:
      'Open Generative AI est un studio sous licence MIT pour générer des images, des vidéos, des clips de synchronisation labiale et de l\'audio. Il fonctionne comme application de bureau ou application web, envoie la plupart des requêtes de génération à l\'API Muapi et peut exécuter quelques modèles en local dans l\'application de bureau. Cet avis s\'appuie sur le dépôt GitHub, le README, la page des versions ainsi que le site, les conditions d\'utilisation et la politique de confidentialité de Muapi, consultés le 18 novembre 2026. PromptQuorum n\'a pas testé l\'application.',
    metaDescription:
      'Open Generative AI : studio image, vidéo et lip-sync sous licence MIT. La plupart des modèles passent par l\'API Muapi payante, d\'autres en local.',
    twitterDescription:
      'Open Generative AI : studio image et vidéo sous licence MIT, pour le bureau et le web. La plupart des modèles passent par l\'API Muapi payante, certains en local. Non testé par nos soins.',
    audience:
      'Créateurs et développeurs qui veulent un studio open source pour des modèles d\'image et de vidéo hébergés, et lecteurs qui le comparent à des outils uniquement locaux',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Generative AI',
    targetKeywords: [
      'avis Open Generative AI',
      'Open Generative AI Muapi',
      'générateur vidéo IA open source',
      'Open Generative AI modèles locaux',
      'Open Generative AI tarifs',
      'Open Generative AI sans filtre de contenu',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Generative AI est un studio open source, pour le bureau et le web, qui réunit dans une seule interface de nombreux modèles hébergés d\'image, de vidéo, de synchronisation labiale et d\'audio, ainsi que quelques modèles locaux.** Son code est gratuit, mais la plupart des modèles sont facturés à la génération via une clé de compte Muapi : « gratuit » vaut donc pour le logiciel, pas pour chaque génération.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce qu\'Open Generative AI et à qui s\'adresse-t-il ?',
        answer:
          'Open Generative AI est une application de studio pour générer des images, des vidéos, des clips de synchronisation labiale et de l\'audio depuis une seule interface. Elle convient aux créateurs et aux développeurs qui acceptent une API tierce payante pour la plupart des modèles et veulent une application de bureau gratuite avec des moteurs locaux facultatifs.',
        bullets: [
          'Plateformes : installateurs macOS, Windows et Linux, version web hébergée et option Docker Compose.',
          'Licence : MIT.',
          'Les modèles cloud exigent une clé d\'API Muapi ; les moteurs locaux n\'existent que dans l\'application de bureau.',
          'Selon l\'éditeur, l\'application n\'applique aucun filtre de contenu ; les conditions de Muapi fixent des règles de contenu pour son service.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Présentation', anchor: 'overview' },
      { label: 'Comment l\'obtenir', anchor: 'get-it' },
      { label: 'Modèles et matériel', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Flux de données et règles de contenu', anchor: 'privacy' },
      { label: 'À qui il s\'adresse', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Open Generative AI est une application de studio sous licence MIT qui génère des images, des vidéos, des clips de synchronisation labiale et de l\'audio, surtout via l\'API Muapi payante et en partie avec des moteurs locaux.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-y une interface gratuite pour de nombreux modèles d\'image et de vidéo par IA. Vous l\'installez comme une application ordinaire, puis vous payez Muapi à la génération pour les modèles cloud, ou vous téléchargez un petit nombre de modèles à exécuter sur votre propre ordinateur.',
          },
        ],
        items: [
          'Des installateurs existent pour macOS (Apple Silicon et Intel), Windows et Linux (AppImage et .deb), tous listés sur la page des versions GitHub.',
          'Le logiciel est gratuit sous licence MIT ; la génération cloud est facturée à la génération par Muapi et exige une clé d\'API.',
          'La génération locale ne fonctionne que dans l\'application de bureau, via un moteur intégré (modèles d\'image) ou une installation Wan2GP que vous configurez vous-même (vidéo et grands modèles d\'image).',
          'Le README indique que la version macOS n\'est pas notarisée et que l\'installateur Windows n\'est pas signé : attendez-vous à un avertissement au premier lancement.',
          'PromptQuorum n\'a testé ni l\'application, ni la qualité de ses sorties, ni sa vitesse, ni ses affirmations sur les filtres de contenu.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Générer des images, des vidéos ou des portraits parlants réalistes de personnes réelles soulève des questions de consentement, de droit d\'auteur et de droits de la personnalité. Vérifiez les règles qui vous concernent et les conditions de chaque fournisseur de modèle avant toute publication. Ces informations sont générales et ne constituent pas un conseil juridique.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Présentation',
        content: [
          '**Open Generative AI est une interface de type studio pour générer des images et des vidéos avec de nombreux modèles depuis un seul endroit.**',
          'Le dépôt GitHub appartient à Anil Matcha, dont le profil indique qu\'il crée des outils d\'IA générative open source alimentés par Muapi. Le README présente l\'application comme « Powered by Muapi.ai » et précise que la version hébergée sur muapi.ai/open-generative-ai utilise le même code de studio. Selon sa page À propos, Muapi est exploité par Vadoo Internet Services Private Limited. Aucune source primaire n\'indique le lien entre le propriétaire du dépôt et cette société.',
          'La version 2.0.0, publiée le 23 mai 2026, est la dernière version GitHub. Le dépôt a reçu un commit de code le 16 novembre 2026 et une modification du README le 18 novembre 2026 : le développement se poursuit et aucun avertissement de projet abandonné ne s\'applique.',
          'Selon le README, l\'application propose des studios distincts pour l\'image, la vidéo, l\'audio, le découpage IA, la synchronisation labiale, les commandes de caméra façon cinéma, les variantes marketing, les workflows par nœuds et les agents. Les nombres de modèles de l\'éditeur diffèrent d\'une section du README à l\'autre (de 200+ à 400+) et la description GitHub annonce 800+ ; PromptQuorum n\'avance donc aucun nombre de modèles.',
          'Ces descriptions sont des déclarations de l\'éditeur. PromptQuorum n\'a pas exécuté l\'application.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Vous installez Open Generative AI avec un installateur ordinaire depuis la page des versions GitHub, ou vous ouvrez la version web hébergée.**',
          'La version 2.0.0 propose un .dmg pour Apple Silicon, un .dmg pour Intel, un installateur Windows .exe, un AppImage et un .deb. Sous macOS, le README indique de retirer l\'indicateur de quarantaine avec une commande Terminal, ou d\'utiliser « Ouvrir quand même » dans les Réglages Système. Sous Windows, SmartScreen peut signaler l\'installateur non signé.',
        ],
        columns: ['Plateforme', 'Comment l\'obtenir'],
        rows: [
          { 'Plateforme': '[macOS](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'Comment l\'obtenir': '.dmg (Apple Silicon ou Intel) ; non notarisé' },
          { 'Plateforme': '[Windows](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'Comment l\'obtenir': 'Installateur .exe ; non signé' },
          { 'Plateforme': '[Linux](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'Comment l\'obtenir': 'AppImage ou .deb (Ubuntu x64)' },
          { 'Plateforme': '[Web](https://muapi.ai/open-generative-ai)', 'Comment l\'obtenir': 'Studio hébergé dans le navigateur ; modèles cloud seulement' },
          { 'Plateforme': '[Site web](https://muapi.ai/open-generative-ai)', 'Comment l\'obtenir': 'Page produit officielle sur le site de Muapi' },
          { 'Plateforme': '[Code source et Docker](https://github.com/Anil-matcha/Open-Generative-AI)', 'Comment l\'obtenir': 'Terminal : cloner avec les sous-modules, npm run setup, ou docker compose' },
        ],
        note: 'Une compilation depuis les sources exige Node.js et un terminal ; la plupart des utilisateurs devraient prendre l\'installateur. Les moteurs locaux n\'existent que dans l\'application de bureau, pas dans la version web hébergée.',
      },
      requirements: {
        id: 'requirements',
        title: 'Modèles et matériel',
        content: [
          '**Ce qu\'il faut à votre ordinateur dépend de l\'exécution du modèle, dans le cloud ou en local.** Les modèles cloud tournent côté Muapi : aucun minimum matériel n\'est donc indiqué pour l\'application elle-même.',
          'Le README décrit deux moteurs locaux. Le moteur sd.cpp intégré exécute des modèles d\'image et utilise Metal sur Apple Silicon, ou CUDA, Vulkan ou ROCm sous Linux et Windows. Wan2GP est un projet distinct que vous installez vous-même ; il prend en charge les modèles vidéo et les grands modèles d\'image.',
        ],
        columns: ['Option', 'Indiqué dans le README'],
        rows: [
          { 'Option': 'Modèles cloud', 'Indiqué dans le README': 'Clé d\'API Muapi ; modèles exécutés à distance' },
          { 'Option': 'sd.cpp (intégré)', 'Indiqué dans le README': 'Modèles d\'image ; CPU, Metal, CUDA, Vulkan, ROCm' },
          { 'Option': 'sd.cpp, Z-Image', 'Indiqué dans le README': '16 Go de RAM conseillés ; bloque un Mac à 8 Go' },
          { 'Option': 'Wan2GP (installation perso)', 'Indiqué dans le README': 'Vidéo, grands modèles d\'image ; GPU CUDA ou ROCm' },
          { 'Option': 'Wan 2.1 1.3B (vidéo)', 'Indiqué dans le README': '480p, environ 8 Go de VRAM' },
          { 'Option': 'Wan2GP distant', 'Indiqué dans le README': 'L\'app Mac utilise un PC GPU via MCP' },
        ],
        note: 'Les téléchargements de modèles pèsent chacun plusieurs gigaoctets. Ces chiffres sont ceux de l\'éditeur ; PromptQuorum n\'a mesuré ni la vitesse ni la qualité.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Le cœur est un ensemble de studios qui partagent un même catalogue de modèles et un même panneau de réglages.** Tous les éléments ci-dessous sont des déclarations de l\'éditeur tirées du README.',
        ],
        items: [
          'Image Studio : texte vers image et image vers image, avec jusqu\'à 14 images de référence pour les modèles d\'édition compatibles.',
          'Video Studio : texte vers vidéo et image vers vidéo, avec des réglages de format, de résolution et de durée qui s\'adaptent à chaque modèle.',
          'Lip Sync Studio : un portrait plus de l\'audio, ou une vidéo plus de l\'audio, pour produire un clip parlant.',
          'Audio Studio, AI Clipping, commandes de caméra de Cinema Studio et Marketing Studio pour des variantes créatives.',
          'Workflow Studio : un éditeur par nœuds pour enchaîner des modèles d\'image, de vidéo et d\'audio, avec des modèles prêts à l\'emploi et un playground.',
          'Agent Studio et Design Agent Studio pour une génération conversationnelle ou sur canevas.',
          'Historique des générations et des envois stocké dans le navigateur.',
          'Modèles locaux dans l\'application de bureau via Réglages, puis Local Models.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et règles de contenu',
        content: [
          '**Avec les modèles cloud, vos prompts et vos images de référence partent vers le service de Muapi, même si l\'application est auto-hébergée.**',
          'Le README dit que l\'application auto-hébergée garde vos données sur votre machine, et aussi que les clés d\'API sont stockées dans le localStorage du navigateur et envoyées uniquement à Muapi. Sa section API précise que les fichiers envoyés vont chez Muapi et reviennent sous forme d\'URL hébergées transmises aux modèles qui prennent une image en entrée. Lues ensemble, ces phrases signifient que les moteurs locaux gardent les données sur votre ordinateur, pas les modèles cloud.',
          'La politique de confidentialité de Muapi (dernière mise à jour le 9 juin 2026) cite les informations de compte, les photos envoyées et des journaux d\'usage anonymisés conservés jusqu\'à 12 mois. Elle désigne comme tiers des fournisseurs de modèles d\'IA tels que Replicate et fal.ai, le stockage Amazon Web Services avec CloudFront, ainsi que la connexion via Google et Apple. Elle n\'indique aucun pays.',
          'Le README et la description du dépôt disent que l\'application n\'a ni filtre de contenu, ni rejet de prompts, ni garde-fous. Les conditions de Muapi (dernière mise à jour le 2 juillet 2025) interdisent d\'utiliser le service pour produire de la nudité, des contenus pornographiques ou sexuellement explicites, des logiciels malveillants, des armes ou de la désinformation. PromptQuorum n\'a pas pu établir quelle règle s\'applique à une requête donnée, ni si les moteurs locaux diffèrent.',
          'Vous restez responsable de ce que vous générez et publiez. Les conditions de Muapi sont régies par le droit indien, les litiges relevant des tribunaux de Bangalore, Karnataka.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s\'adresse',
        content: [
          '**Open Generative AI convient à ceux qui veulent une seule interface pour de nombreux modèles hébergés et acceptent la facturation à la génération.**',
        ],
        items: [
          'Les créateurs qui veulent des outils d\'image, de vidéo et de synchronisation labiale dans une seule application installable.',
          'Les développeurs qui veulent une base de code de studio sous licence MIT à modifier et à auto-héberger.',
          'Les utilisateurs de Mac qui veulent essayer de petits modèles d\'image locaux, avec la possibilité de déporter le travail vidéo vers une machine GPU distincte.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**Open Generative AI convient mal à un travail strictement hors ligne, et plusieurs points restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : à ceux qui exigent que tout fonctionne hors ligne ou que les données restent sur l\'appareil pour chaque modèle.',
          'Ne convient pas : aux utilisateurs qui exigent un installateur signé ou ne peuvent pas appliquer la solution de contournement du premier lancement.',
          'Ne convient pas : aux machines à faible mémoire pour les modèles locaux les plus lourds.',
          'Non vérifié : les forfaits de crédits Muapi, les montants de crédits gratuits et ce que « gratuit » signifie sur la page hébergée. La page de tarifs ne liste que des prix à la génération.',
          'Non vérifié : la qualité des sorties, la vitesse de génération et l\'exactitude des nombres de modèles de l\'éditeur. PromptQuorum n\'a réalisé aucun test.',
          'Non vérifié : comment l\'affirmation « aucun filtre de contenu » s\'accorde avec les règles de contenu de Muapi, et si les moteurs locaux appliquent un filtre.',
          'Non vérifié : le lien entre le propriétaire du dépôt et la société derrière Muapi. Le drapeau sur la fiche du répertoire correspond à l\'exploitant du site officiel et du service hébergé.',
          'Non vérifié : quels fournisseurs de modèles sont sollicités pour un modèle donné, et à quelles conditions.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Generative AI face aux alternatives',
        itemHeadings: true,
        content: [
          '**Les alternatives ci-dessous génèrent des images en local, alors qu\'Open Generative AI appelle surtout une API cloud payante.** Les informations du tableau proviennent du répertoire PromptQuorum ; PromptQuorum ne les a pas comparées en pratique.',
        ],
        columns: ['Outil', 'Licence et exécution'],
        rows: [
          { 'Outil': 'Open Generative AI', 'Licence et exécution': 'MIT ; API cloud par défaut, moteurs locaux facultatifs' },
          { 'Outil': '[ComfyUI](/fr/power-local-llm/comfyui-review)', 'Licence et exécution': 'GPL 3.0 ; local ; interface par nœuds' },
          { 'Outil': '[InvokeAI](/fr/power-local-llm/invokeai-review)', 'Licence et exécution': 'Apache 2.0 ; local ; interface web' },
          { 'Outil': '[Fooocus](/fr/power-local-llm/fooocus-review)', 'Licence et exécution': 'GPL 3.0 ; local ; interface web' },
          { 'Outil': '[Stable Diffusion WebUI Forge](/fr/power-local-llm/stable-diffusion-forge-review)', 'Licence et exécution': 'AGPL-3.0 ; local ; interface web' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Open Generative AI est-il vraiment gratuit ?',
            a: 'Le logiciel est gratuit sous licence MIT. La page de tarifs de Muapi liste des prix à la génération et se présente comme « Pay Per Generation » : la génération cloud coûte donc de l\'argent, tandis que le moteur local sd.cpp n\'a pas besoin de clé d\'API selon le README.',
          },
          {
            q: 'Ai-je besoin d\'un compte ou d\'une clé d\'API ?',
            a: 'Pour les modèles cloud, oui : le README demande une clé d\'accès Muapi au premier usage. Il précise que vous pouvez ignorer la clé si vous n\'utilisez que des modèles locaux.',
          },
          {
            q: 'Peut-on l\'utiliser hors ligne ?',
            a: 'En partie. L\'application de bureau peut exécuter des modèles d\'image locaux avec le moteur sd.cpp intégré, une fois ceux-ci téléchargés. Les modèles vidéo exigent une installation Wan2GP distincte sur une machine à GPU CUDA ou ROCm, et la version web hébergée utilise toujours des API cloud.',
          },
          {
            q: 'La version Docker est-elle un produit différent ?',
            a: 'Non. Le README décrit une option Docker Compose qui construit le studio web à partir du même dépôt, sous-modules clonés au préalable. Elle sert l\'application sur le port 3001 par défaut.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Open Generative AI mérite un coup d\'œil si vous voulez un studio open source pour de nombreux modèles hébergés d\'image et de vidéo et si payer Muapi à la génération ne vous gêne pas.**',
          'Il offre un installateur ordinaire pour trois systèmes de bureau, une licence MIT, de nombreux studios, un éditeur de workflows par nœuds et des moteurs locaux facultatifs. Le développement est actif, avec un commit de code le 16 novembre 2026 et la version 2.0.0 publiée le 23 mai 2026.',
          'Les compromis sont réels. La plupart des modèles dépendent d\'une API tierce payante : l\'application n\'est donc pas locale d\'abord. Les installateurs ne sont pas signés, les règles de contenu restent floues et la vidéo locale exige votre propre installation Wan2GP. PromptQuorum n\'a pas testé l\'application. Commencez par une petite recharge ou un petit modèle local, et lisez le README ainsi que les conditions de Muapi avant de générer quoi que ce soit que vous comptez publier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Dépôt GitHub d\'Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) — description, licence MIT, dernier commit et fichiers du projet, consultés le 18 novembre 2026.',
          '[README d\'Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI#readme) — téléchargements, moteurs locaux, studios, flux d\'API, démarrage rapide et option Docker, consultés le 18 novembre 2026.',
          '[Version v2.0.0](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0) — version, date et fichiers d\'installation, consultés le 18 novembre 2026.',
          '[Open Generative AI chez Muapi](https://muapi.ai/open-generative-ai) — page produit officielle et studio hébergé, consultés le 18 novembre 2026.',
          '[Muapi, À propos](https://muapi.ai/about) — nom de l\'exploitant et localisation à Bangalore, consultés le 18 novembre 2026.',
          '[Politique de confidentialité de Muapi](https://muapi.ai/privacy) — données collectées, tiers et conservation, consultées le 18 novembre 2026.',
          '[Conditions d\'utilisation de Muapi](https://muapi.ai/terms) — règles de contenu, droit applicable et facturation, consultées le 18 novembre 2026.',
          '[Tarifs de Muapi](https://muapi.ai/pricing) — modèle de tarification à la génération, consultés le 18 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de ComfyUI](/fr/power-local-llm/comfyui-review) — Interface par nœuds pour des workflows avancés de génération d\'images.',
          '[Test d\'InvokeAI](/fr/power-local-llm/invokeai-review) — Génération d\'images avec une interface web de type studio.',
          '[Test de Krita AI Diffusion](/fr/power-local-llm/krita-ai-diffusion-review) — Remplissage génératif et peinture en direct dans Krita.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Image & Video Generation',
    heroImage: '/images/open-generative-ai-review-hero-ja.webp',
    title: 'Open Generative AI レビュー：画像・動画向けオープンソースのスタジオ',
    seoTitle: 'Open Generative AIレビュー：画像・動画スタジオ',
    intro:
      'Open Generative AIは、画像、動画、リップシンク、音声を生成するMITライセンスのスタジオです。デスクトップアプリまたはWebアプリとして動作し、生成リクエストの大半をMuapi APIに送ります。デスクトップアプリでは一部のモデルをローカルで実行できます。このレビューは、GitHubリポジトリ、README、リリースページ、およびMuapiのサイト、利用規約、プライバシーポリシーに基づき、2026年11月18日に確認しました。PromptQuorumはこのアプリを実際には試していません。',
    metaDescription:
      'Open Generative AIはMITライセンスの画像・動画・リップシンクのスタジオです。大半のモデルは有料のMuapi API経由で、デスクトップアプリではローカル実行も可能です。',
    twitterDescription:
      'Open Generative AI：デスクトップとWeb向けのMITライセンスの画像・動画スタジオ。大半のモデルは有料のMuapi API経由で、一部はローカル実行。当サイトでは未検証です。',
    audience:
      'ホスト型の画像・動画モデルを使えるオープンソースのスタジオを探すクリエイターや開発者、ローカル専用ツールと比較したい読者',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Generative AI',
    targetKeywords: [
      'Open Generative AI レビュー',
      'Open Generative AI Muapi',
      'オープンソース AI 動画生成',
      'Open Generative AI ローカルモデル',
      'Open Generative AI 料金',
      'Open Generative AI コンテンツフィルターなし',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Generative AIは、ホスト型の画像・動画・リップシンク・音声モデルと、一部のローカルモデルを1つの画面にまとめた、オープンソースのデスクトップ／Webスタジオです。** コードは無料ですが、大半のモデルはMuapiアカウントのキーを通じて生成ごとに課金されるため、「無料」はソフトウェアに当てはまり、すべての生成に当てはまるわけではありません。',
    quickAnswerTop: {
      ja: {
        question: 'Open Generative AIとは何で、誰に向いていますか？',
        answer:
          'Open Generative AIは、画像、動画、リップシンク、音声を1つの画面から生成するスタジオアプリです。大半のモデルで有料のサードパーティAPIを受け入れ、任意のローカルエンジンを備えた無料のデスクトップアプリを求めるクリエイターや開発者に向いています。',
        bullets: [
          '対応環境：macOS、Windows、Linuxのインストーラー、ホスト型Web版、Docker Composeによる導入。',
          'ライセンス：MIT。',
          'クラウドモデルにはMuapi APIキーが必要で、ローカルエンジンはデスクトップアプリでのみ使えます。',
          '開発元はコンテンツフィルターを適用しないと説明しています。Muapiの利用規約は同社サービスのコンテンツ規則を定めています。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: 'モデルとハードウェア', anchor: 'requirements' },
      { label: '機能', anchor: 'features' },
      { label: 'データの流れとコンテンツ規則', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
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
            text: 'Open Generative AIは、画像、動画、リップシンク、音声を生成するMITライセンスのスタジオアプリで、主に有料のMuapi APIを使い、一部はローカルエンジンで動きます。',
          },
          {
            type: 'plain-terms',
            text: '多くのAI画像・動画モデルを使える無料のフロントエンドと考えてください。通常のアプリと同じようにインストールし、クラウドモデルはMuapiに生成ごとに支払うか、少数のモデルをダウンロードして自分のコンピューターで動かします。',
          },
        ],
        items: [
          'macOS（Apple SiliconとIntel）、Windows、Linux（AppImageと.deb）向けのインストーラーがあり、すべてGitHubのリリースページに掲載されています。',
          'ソフトウェアはMITライセンスで無料です。クラウドでの生成はMuapiが生成ごとに課金し、APIキーが必要です。',
          'ローカル生成はデスクトップアプリでのみ動作し、同梱エンジン（画像モデル）か、自分で用意するWan2GP（動画と大型の画像モデル）を使います。',
          'READMEによると、macOS版はノータライズされておらず、Windowsのインストーラーはコード署名されていないため、初回起動時に警告が出ます。',
          'PromptQuorumは、アプリ、出力品質、速度、コンテンツフィルターに関する説明を検証していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: '実在する人物のリアルな画像、動画、話す肖像を生成すると、同意、著作権、人格権の問題が生じます。公開する前に、ご自身に適用される規則と各モデル提供元の規約を確認してください。これは一般的な情報であり、法的助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Open Generative AIは、多くのモデルを1か所から使って画像や動画を生成する、スタジオ型のインターフェースです。**',
          'GitHubリポジトリの所有者はAnil Matcha氏で、プロフィールにはMuapiを基盤にしたオープンソースの生成AIツールを開発していると書かれています。READMEはこのアプリを「Powered by Muapi.ai」と紹介し、muapi.ai/open-generative-aiのホスト版が同じスタジオコードを使うと説明しています。Muapiは、会社概要ページによるとVadoo Internet Services Private Limitedが運営しています。リポジトリの所有者とこの会社の関係を示す一次情報はありません。',
          'バージョン2.0.0（2026年5月23日公開）がGitHubの最新リリースです。リポジトリには2026年11月16日にコードのコミットが、2026年11月18日にREADMEの編集があり、開発は継続中のため、放置プロジェクトの警告は該当しません。',
          'READMEによると、このアプリには画像、動画、音声、AIクリッピング、リップシンク、シネマ風のカメラ操作、マーケティング用バリエーション、ノードベースのワークフロー、エージェントの各スタジオがあります。開発元が示すモデル数はREADMEの節ごとに異なり（200以上から400以上）、GitHubの説明は800以上としているため、PromptQuorumはモデル数を記載しません。',
          'これらの説明は開発元の主張です。PromptQuorumはアプリを実行していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Open Generative AIは、GitHubのリリースページにある通常のインストーラーで導入するか、ホスト版のWeb版を開いて使います。**',
          'バージョン2.0.0には、Apple Silicon用の.dmg、Intel用の.dmg、Windows用の.exeインストーラー、AppImage、.debがあります。macOSでは、READMEがTerminalのコマンドで隔離フラグを外すか、システム設定で「このまま開く」を選ぶよう案内しています。Windowsでは、署名のないインストーラーに対してSmartScreenが警告を出すことがあります。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[macOS](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', '入手方法': '.dmg（Apple SiliconまたはIntel）、ノータライズなし' },
          { 'プラットフォーム': '[Windows](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', '入手方法': '.exeインストーラー、コード署名なし' },
          { 'プラットフォーム': '[Linux](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', '入手方法': 'AppImageまたは.deb（Ubuntu x64）' },
          { 'プラットフォーム': '[Web](https://muapi.ai/open-generative-ai)', '入手方法': 'ブラウザで使うホスト版、クラウドモデルのみ' },
          { 'プラットフォーム': '[公式サイト](https://muapi.ai/open-generative-ai)', '入手方法': 'Muapiサイト上の公式製品ページ' },
          { 'プラットフォーム': '[ソースとDocker](https://github.com/Anil-matcha/Open-Generative-AI)', '入手方法': 'ターミナル：サブモジュール付きでclone、npm run setup、またはdocker compose' },
        ],
        note: 'ソースからのビルドにはNode.jsとターミナルが必要です。ほとんどの方はインストーラーを使ってください。ローカルエンジンはデスクトップアプリのみで、ホスト版のWeb版では使えません。',
      },
      requirements: {
        id: 'requirements',
        title: 'モデルとハードウェア',
        content: [
          '**必要なコンピューターの性能は、モデルがクラウドで動くかローカルで動くかによって変わります。** クラウドモデルはMuapi側で動くため、アプリ自体にハードウェアの下限は示されていません。',
          'READMEは2つのローカルエンジンを説明しています。同梱のsd.cppエンジンは画像モデルを実行し、Apple SiliconではMetal、LinuxとWindowsではCUDA、Vulkan、ROCmを使います。Wan2GPは別プロジェクトで、自分でインストールし、動画モデルと大型の画像モデルを担当します。',
        ],
        columns: ['選択肢', 'READMEの記載'],
        rows: [
          { '選択肢': 'クラウドモデル', 'READMEの記載': 'Muapi APIキー、モデルはリモート実行' },
          { '選択肢': 'sd.cpp（同梱）', 'READMEの記載': '画像モデル、CPU・Metal・CUDA・Vulkan・ROCm' },
          { '選択肢': 'sd.cpp、Z-Image', 'READMEの記載': 'RAM 16 GB推奨、8 GBのMacでは停止' },
          { '選択肢': 'Wan2GP（自前で導入）', 'READMEの記載': '動画・大型画像、CUDAまたはROCmのGPU' },
          { '選択肢': 'Wan 2.1 1.3B（動画）', 'READMEの記載': '480p、VRAM約8 GB' },
          { '選択肢': '別マシンのWan2GP', 'READMEの記載': 'MacアプリがMCP経由でGPUマシンを利用' },
        ],
        note: 'モデルのダウンロードは1つあたり数GBです。これらは開発元の数値で、PromptQuorumは速度や品質を測定していません。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**中心となるのは、1つのモデルカタログと1つの設定パネルを共有する複数のスタジオです。** 以下はすべてREADMEにある開発元の主張です。',
        ],
        items: [
          'Image Studio：テキストから画像、画像から画像。対応する編集モデルでは最大14枚の参照画像を使えます。',
          'Video Studio：テキストから動画、画像から動画。アスペクト比、解像度、長さの操作はモデルに合わせて変わります。',
          'Lip Sync Studio：肖像画像と音声、または動画と音声から、話す動画クリップを作ります。',
          'Audio Studio、AI Clipping、Cinema Studioのカメラ操作、創作用バリエーションのMarketing Studio。',
          'Workflow Studio：ノードベースのエディターで画像・動画・音声モデルをつなげます。テンプレートとプレイグラウンド付きです。',
          '対話型とキャンバス型の生成のためのAgent StudioとDesign Agent Studio。',
          '生成履歴とアップロード履歴はブラウザーに保存されます。',
          'デスクトップアプリの設定から、Local Modelsでローカルモデルを使えます。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとコンテンツ規則',
        content: [
          '**クラウドモデルを使うと、アプリ自体がセルフホスト型でも、プロンプトと参照画像はMuapiのサービスに送られます。**',
          'READMEは、セルフホストしたアプリはデータをお使いのマシンに留めると述べる一方で、APIキーはブラウザーのlocalStorageに保存され、Muapiにのみ送信されるとも述べています。APIの節には、アップロードしたファイルはMuapiに送られ、ホストされたURLとして画像を受け取るモデルに渡されると書かれています。両方を合わせると、ローカルエンジンはデータをコンピューター内に留め、クラウドモデルは留めません。',
          'Muapiのプライバシーポリシー（最終更新2026年6月9日）には、アカウント情報、アップロードした写真、最長12か月保存される匿名化した利用ログが挙げられています。第三者として、Replicateやfal.aiなどのAIモデル提供元、Amazon Web ServicesとCloudFrontの保存領域、GoogleとAppleのサインインが記載されています。国名は記載されていません。',
          'READMEとリポジトリの説明は、コンテンツフィルター、プロンプトの拒否、ガードレールがないと述べています。Muapiの利用規約（最終更新2025年7月2日）は、ヌード、ポルノや性的に露骨なコンテンツ、マルウェア、武器、偽情報の生成にサービスを使ってはならないと定めています。PromptQuorumは、個々のリクエストにどちらの規則が適用されるか、ローカルエンジンで扱いが異なるかを確認できませんでした。',
          '生成して公開する内容の責任は利用者にあります。Muapiの利用規約はインドの法律に準拠し、紛争はカルナータカ州バンガロールの裁判所で扱われます。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Open Generative AIは、多くのホスト型モデルを1つの画面で使い、生成ごとの課金を受け入れられる方に向いています。**',
        ],
        items: [
          '画像、動画、リップシンクのツールを、インストールできる1つのアプリで使いたいクリエイター。',
          '改変やセルフホストができるMITライセンスのスタジオのコードベースを求める開発者。',
          '小さなローカル画像モデルを試したく、動画の処理は別のGPUマシンに任せたいMacユーザー。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Open Generative AIは完全オフラインでの作業には向かず、未確認の点もいくつかあります。**',
        ],
        items: [
          '向かない：すべてをオフラインで動かしたい方や、どのモデルでもデータを端末内に留めたい方。',
          '向かない：コード署名済みのインストーラーが必要な方や、初回起動時の回避手順を実行できない方。',
          '向かない：重いローカルモデルを動かすにはメモリが少ないマシン。',
          '未確認：Muapiのクレジットパッケージ、無料クレジットの額、ホスト版ページでの「無料」の意味。料金ページには生成ごとの料金しか載っていません。',
          '未確認：出力品質、生成速度、開発元が示すモデル数の正確さ。PromptQuorumはテストを行っていません。',
          '未確認：「コンテンツフィルターなし」という説明がMuapiのコンテンツ規則とどう両立するか、ローカルエンジンにフィルターがあるか。',
          '未確認：リポジトリの所有者とMuapiを運営する会社との関係。ディレクトリのタイルにある国旗は、公式サイトとホスト型サービスの運営者を示します。',
          '未確認：特定のモデルでどの提供元に接続し、どのような条件になるか。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Generative AIと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**以下の代替ツールは画像生成をローカルで行いますが、Open Generative AIは主に有料のクラウドAPIを呼び出します。** 表の情報はPromptQuorumのディレクトリに基づくもので、PromptQuorumが実際に比較したものではありません。',
        ],
        columns: ['ツール', 'ライセンスと実行場所'],
        rows: [
          { 'ツール': 'Open Generative AI', 'ライセンスと実行場所': 'MIT、既定はクラウドAPI、ローカルエンジンは任意' },
          { 'ツール': '[ComfyUI](/ja/power-local-llm/comfyui-review)', 'ライセンスと実行場所': 'GPL 3.0、ローカル、ノードベースUI' },
          { 'ツール': '[InvokeAI](/ja/power-local-llm/invokeai-review)', 'ライセンスと実行場所': 'Apache 2.0、ローカル、Web UI' },
          { 'ツール': '[Fooocus](/ja/power-local-llm/fooocus-review)', 'ライセンスと実行場所': 'GPL 3.0、ローカル、Web UI' },
          { 'ツール': '[Stable Diffusion WebUI Forge](/ja/power-local-llm/stable-diffusion-forge-review)', 'ライセンスと実行場所': 'AGPL-3.0、ローカル、Web UI' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Open Generative AIは本当に無料ですか？',
            a: 'ソフトウェアはMITライセンスで無料です。Muapiの料金ページは生成ごとの料金を載せ、「Pay Per Generation」と称しているため、クラウドでの生成には費用がかかります。READMEによると、ローカルのsd.cppエンジンにはAPIキーが不要です。',
          },
          {
            q: 'アカウントやAPIキーは必要ですか？',
            a: 'クラウドモデルでは必要です。READMEは初回利用時にMuapiのアクセスキーを求めています。ローカルモデルだけを使う場合はキーを省略できると書かれています。',
          },
          {
            q: 'オフラインで使えますか？',
            a: '一部は可能です。デスクトップアプリは、ダウンロード済みのローカル画像モデルを同梱のsd.cppエンジンで実行できます。動画モデルにはCUDAまたはROCmのGPUを備えたマシンへの別のWan2GPの導入が必要で、ホスト版のWeb版は常にクラウドAPIを使います。',
          },
          {
            q: 'Docker版は別の製品ですか？',
            a: '違います。READMEにあるDocker Composeの手順は、同じリポジトリからWebスタジオをビルドするもので、先にサブモジュールをcloneする必要があります。既定ではポート3001でアプリを提供します。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Open Generative AIは、多くのホスト型画像・動画モデルを使えるオープンソースのスタジオが欲しく、Muapiへの生成ごとの支払いに抵抗がない方なら、試す価値があります。**',
          '3種類のデスクトップOS向けの通常のインストーラー、MITライセンス、幅広いスタジオ、ノードベースのワークフローエディター、任意のローカルエンジンを備えています。開発は活発で、2026年11月16日にコードのコミットがあり、バージョン2.0.0は2026年5月23日に公開されました。',
          'トレードオフは現実的です。大半のモデルは有料のサードパーティAPIに依存するため、ローカル優先のアプリではありません。インストーラーは署名されておらず、コンテンツ規則の全体像は不明確で、ローカル動画には自分でのWan2GP導入が必要です。PromptQuorumはこのアプリを試していません。少額のチャージか小さなローカルモデルから始め、公開する予定のものを生成する前に、READMEとMuapiの利用規約の両方を読んでください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Open Generative AIのGitHubリポジトリ](https://github.com/Anil-matcha/Open-Generative-AI) — 説明、MITライセンス、最新コミット、プロジェクトファイル。2026年11月18日に確認。',
          '[Open Generative AIのREADME](https://github.com/Anil-matcha/Open-Generative-AI#readme) — ダウンロード、ローカルエンジン、スタジオ、APIの流れ、クイックスタート、Docker手順。2026年11月18日に確認。',
          '[リリースv2.0.0](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0) — バージョン、日付、インストーラーファイル。2026年11月18日に確認。',
          '[MuapiのOpen Generative AIページ](https://muapi.ai/open-generative-ai) — 公式製品ページとホスト版スタジオ。2026年11月18日に確認。',
          '[Muapiについて](https://muapi.ai/about) — 運営会社名とバンガロールの所在地。2026年11月18日に確認。',
          '[Muapiのプライバシーポリシー](https://muapi.ai/privacy) — 収集するデータ、第三者、保持期間。2026年11月18日に確認。',
          '[Muapiの利用規約](https://muapi.ai/terms) — コンテンツ規則、準拠法、課金。2026年11月18日に確認。',
          '[Muapiの料金](https://muapi.ai/pricing) — 生成ごとの料金モデル。2026年11月18日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ComfyUIレビュー](/ja/power-local-llm/comfyui-review) — 高度な画像生成ワークフローのためのノードベースUI。',
          '[InvokeAIレビュー](/ja/power-local-llm/invokeai-review) — スタジオ風のWebインターフェースで行う画像生成。',
          '[Krita AI Diffusionレビュー](/ja/power-local-llm/krita-ai-diffusion-review) — Krita内での生成塗りつぶしとライブペイント。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Image & Video Generation',
    heroImage: '/images/open-generative-ai-review-hero-pt.webp',
    title: 'Análise do Open Generative AI: estúdio de código aberto para imagem e vídeo',
    seoTitle: 'Análise do Open Generative AI: estúdio de imagem e vídeo',
    intro:
      'O Open Generative AI é um estúdio com licença MIT para gerar imagens, vídeo, clipes de sincronização labial e áudio. Ele funciona como app de desktop ou app web, envia a maioria dos pedidos de geração à API da Muapi e pode executar alguns modelos localmente no app de desktop. Esta análise se baseia no repositório do GitHub, no README, na página de versões e no site, nos termos e na política de privacidade da Muapi, consultados em 18 de novembro de 2026. A PromptQuorum não testou o app.',
    metaDescription:
      'Open Generative AI é um estúdio de imagem, vídeo e lip-sync com licença MIT. A maioria dos modelos usa a API paga da Muapi; alguns rodam localmente.',
    twitterDescription:
      'Open Generative AI: estúdio de imagem e vídeo com licença MIT para desktop e web. A maioria dos modelos usa a API paga da Muapi; alguns rodam localmente. Não testado por nós.',
    audience:
      'Criadores e desenvolvedores que querem um estúdio de código aberto para modelos de imagem e vídeo hospedados, e leitores que o comparam com ferramentas somente locais',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Generative AI',
    targetKeywords: [
      'análise Open Generative AI',
      'Open Generative AI Muapi',
      'gerador de vídeo com IA de código aberto',
      'Open Generative AI modelos locais',
      'Open Generative AI preços',
      'Open Generative AI sem filtros de conteúdo',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Open Generative AI é um estúdio de código aberto para desktop e web que reúne, em uma só interface, muitos modelos hospedados de imagem, vídeo, sincronização labial e áudio, além de alguns modelos locais.** O código é gratuito, mas a maioria dos modelos é cobrada por geração por meio de uma chave de conta da Muapi; portanto, "gratuito" vale para o software, não para cada geração.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Open Generative AI e para quem ele serve?',
        answer:
          'O Open Generative AI é um app de estúdio para gerar imagens, vídeo, clipes de sincronização labial e áudio a partir de uma só interface. Serve para criadores e desenvolvedores que aceitam uma API paga de terceiros para a maioria dos modelos e querem um app de desktop gratuito com mecanismos locais opcionais.',
        bullets: [
          'Plataformas: instaladores para macOS, Windows e Linux, versão web hospedada e um caminho com Docker Compose.',
          'Licença: MIT.',
          'Os modelos na nuvem precisam de uma chave de API da Muapi; os mecanismos locais só funcionam no app de desktop.',
          'Segundo o criador, o app não aplica filtros de conteúdo; os termos da Muapi definem regras de conteúdo para o serviço dela.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Modelos e hardware', anchor: 'requirements' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Fluxo de dados e regras de conteúdo', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
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
            text: 'O Open Generative AI é um app de estúdio com licença MIT que gera imagens, vídeo, clipes de sincronização labial e áudio, principalmente pela API paga da Muapi e em parte com mecanismos locais.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma interface gratuita para muitos modelos de imagem e vídeo com IA. Você o instala como um app comum e depois paga à Muapi por geração nos modelos na nuvem, ou baixa poucos modelos para rodar no seu próprio computador.',
          },
        ],
        items: [
          'Há instaladores para macOS (Apple Silicon e Intel), Windows e Linux (AppImage e .deb), todos listados na página de versões do GitHub.',
          'O software é gratuito sob a licença MIT; a geração na nuvem é cobrada por geração pela Muapi e exige uma chave de API.',
          'A geração local só funciona no app de desktop, por meio de um mecanismo incluído (modelos de imagem) ou de uma instalação do Wan2GP que você mesmo configura (vídeo e modelos de imagem grandes).',
          'O README diz que a versão para macOS não é notarizada e que o instalador do Windows não tem assinatura de código, então espere um aviso na primeira abertura.',
          'A PromptQuorum não testou o app, a qualidade dos resultados, a velocidade nem as afirmações sobre filtros de conteúdo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Gerar imagens, vídeo ou retratos falantes realistas de pessoas reais levanta questões de consentimento, direitos autorais e direitos de personalidade. Verifique as regras que se aplicam a você e os termos de cada provedor de modelos antes de publicar qualquer coisa. Esta é uma informação geral, não aconselhamento jurídico.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Open Generative AI é uma interface em estilo de estúdio para gerar imagens e vídeo com muitos modelos em um só lugar.**',
          'O repositório do GitHub pertence a Anil Matcha, cujo perfil diz que ele cria ferramentas de IA generativa de código aberto movidas pela Muapi. O README apresenta o app como "Powered by Muapi.ai" e diz que a versão hospedada em muapi.ai/open-generative-ai usa o mesmo código do estúdio. Segundo a página Sobre, a Muapi é operada pela Vadoo Internet Services Private Limited. Nenhuma fonte primária informa a relação entre o dono do repositório e essa empresa.',
          'A versão 2.0.0, publicada em 23 de maio de 2026, é a mais recente do GitHub. O repositório recebeu um commit de código em 16 de novembro de 2026 e uma edição do README em 18 de novembro de 2026; portanto, o desenvolvimento continua e nenhum aviso de projeto abandonado se aplica.',
          'Segundo o README, o app tem estúdios separados para imagens, vídeo, áudio, cortes com IA, sincronização labial, controles de câmera em estilo cinema, variações de marketing, fluxos de trabalho por nós e agentes. As contagens de modelos do criador variam entre as seções do README (de 200+ a 400+) e a descrição do GitHub diz 800+; por isso a PromptQuorum não informa uma contagem de modelos.',
          'Estas descrições são afirmações do criador. A PromptQuorum não executou o app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**Você instala o Open Generative AI com um instalador comum da página de versões do GitHub, ou abre a versão web hospedada.**',
          'A versão 2.0.0 traz um .dmg para Apple Silicon, um .dmg para Intel, um instalador .exe para Windows, um AppImage e um .deb. No macOS, o README manda remover a marca de quarentena com um comando no Terminal ou usar "Abrir Mesmo Assim" em Ajustes do Sistema. No Windows, o SmartScreen pode alertar sobre o instalador sem assinatura.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[macOS](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'Como obter': '.dmg (Apple Silicon ou Intel); sem notarização' },
          { 'Plataforma': '[Windows](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'Como obter': 'Instalador .exe; sem assinatura de código' },
          { 'Plataforma': '[Linux](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'Como obter': 'AppImage ou .deb (Ubuntu x64)' },
          { 'Plataforma': '[Web](https://muapi.ai/open-generative-ai)', 'Como obter': 'Estúdio hospedado no navegador; só modelos na nuvem' },
          { 'Plataforma': '[Site](https://muapi.ai/open-generative-ai)', 'Como obter': 'Página oficial do produto no site da Muapi' },
          { 'Plataforma': '[Código-fonte e Docker](https://github.com/Anil-matcha/Open-Generative-AI)', 'Como obter': 'Terminal: clonar com submódulos, npm run setup ou docker compose' },
        ],
        note: 'Compilar a partir do código-fonte exige Node.js e um terminal; a maioria dos usuários deve usar o instalador. Os mecanismos locais só existem no app de desktop, não na versão web hospedada.',
      },
      requirements: {
        id: 'requirements',
        title: 'Modelos e hardware',
        content: [
          '**O que o seu computador precisa depende de o modelo rodar na nuvem ou localmente.** Os modelos na nuvem rodam do lado da Muapi, então não há requisito mínimo de hardware informado para o app em si.',
          'O README descreve dois mecanismos locais. O sd.cpp incluído executa modelos de imagem e usa Metal no Apple Silicon, ou CUDA, Vulkan ou ROCm no Linux e no Windows. O Wan2GP é um projeto separado que você mesmo instala e que cuida dos modelos de vídeo e dos modelos de imagem grandes.',
        ],
        columns: ['Opção', 'Informado no README'],
        rows: [
          { 'Opção': 'Modelos na nuvem', 'Informado no README': 'Chave de API da Muapi; modelos rodam remotamente' },
          { 'Opção': 'sd.cpp (incluído)', 'Informado no README': 'Modelos de imagem; CPU, Metal, CUDA, Vulkan, ROCm' },
          { 'Opção': 'sd.cpp, Z-Image', 'Informado no README': '16 GB de RAM recomendados; trava Macs de 8 GB' },
          { 'Opção': 'Wan2GP (instalação própria)', 'Informado no README': 'Vídeo e modelos grandes; GPU CUDA ou ROCm' },
          { 'Opção': 'Wan 2.1 1.3B (vídeo)', 'Informado no README': '480p, cerca de 8 GB de VRAM' },
          { 'Opção': 'Wan2GP remoto', 'Informado no README': 'App do Mac usa um PC com GPU via MCP' },
        ],
        note: 'Cada download de modelo tem vários gigabytes. Esses números são do criador; a PromptQuorum não mediu velocidade nem qualidade.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O núcleo é um conjunto de estúdios que compartilham um catálogo de modelos e um painel de configurações.** Todos os itens abaixo são afirmações do criador, tiradas do README.',
        ],
        items: [
          'Image Studio: texto para imagem e imagem para imagem, com até 14 imagens de referência para os modelos de edição compatíveis.',
          'Video Studio: texto para vídeo e imagem para vídeo, com controles de proporção, resolução e duração que se adaptam a cada modelo.',
          'Lip Sync Studio: um retrato mais áudio, ou um vídeo mais áudio, para criar um clipe falante.',
          'Audio Studio, AI Clipping, controles de câmera do Cinema Studio e Marketing Studio para variações criativas.',
          'Workflow Studio: um editor por nós para encadear modelos de imagem, vídeo e áudio, com modelos prontos e um playground.',
          'Agent Studio e Design Agent Studio para geração conversacional e em tela.',
          'Histórico de gerações e de uploads guardado no navegador.',
          'Modelos locais no app de desktop em Configurações e depois Local Models.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e regras de conteúdo',
        content: [
          '**Com modelos na nuvem, seus prompts e imagens de referência vão para o serviço da Muapi, mesmo que o app seja auto-hospedado.**',
          'O README diz que o app auto-hospedado mantém seus dados na sua máquina, e também que as chaves de API ficam no localStorage do navegador e são enviadas somente à Muapi. A seção de API diz que os arquivos enviados vão para a Muapi e voltam como URLs hospedadas repassadas aos modelos que recebem imagem. Lidas juntas, essas frases significam que os mecanismos locais mantêm os dados no seu computador e os modelos na nuvem não.',
          'A política de privacidade da Muapi (última atualização em 9 de junho de 2026) lista dados da conta, fotos enviadas e registros de uso anonimizados mantidos por até 12 meses. Ela cita como terceiros provedores de modelos de IA como Replicate e fal.ai, o armazenamento da Amazon Web Services com CloudFront e o login pelo Google e pela Apple. Ela não informa nenhum país.',
          'O README e a descrição do repositório dizem que o app não tem filtros de conteúdo, rejeição de prompts nem salvaguardas. Os termos da Muapi (última atualização em 2 de julho de 2025) dizem que o serviço não deve ser usado para produzir nudez, conteúdo pornográfico ou sexualmente explícito, malware, armas ou desinformação. A PromptQuorum não conseguiu estabelecer qual regra vale para um pedido específico, nem se os mecanismos locais diferem.',
          'Você continua responsável pelo que gera e publica. Os termos da Muapi são regidos pelas leis da Índia, com disputas nos tribunais de Bangalore, Karnataka.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Open Generative AI serve a quem quer uma interface para muitos modelos hospedados e aceita a cobrança por geração.**',
        ],
        items: [
          'Criadores que querem ferramentas de imagem, vídeo e sincronização labial em um só app instalável.',
          'Desenvolvedores que querem uma base de código de estúdio com licença MIT para modificar e auto-hospedar.',
          'Usuários de Mac que querem experimentar pequenos modelos de imagem locais, com a opção de enviar o trabalho de vídeo para outra máquina com GPU.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Open Generative AI não serve bem para trabalho estritamente offline, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: quem precisa que tudo rode offline ou que os dados fiquem no dispositivo em todos os modelos.',
          'Não serve: usuários que precisam de um instalador com assinatura de código ou não conseguem aplicar a solução da primeira abertura.',
          'Não serve: máquinas com pouca memória para os modelos locais mais pesados.',
          'Não verificado: os pacotes de créditos da Muapi, os valores de créditos gratuitos e o que "gratuito" significa na página hospedada. A página de preços só lista tarifas por geração.',
          'Não verificado: a qualidade dos resultados, a velocidade de geração e a exatidão das contagens de modelos do criador. A PromptQuorum não fez testes.',
          'Não verificado: como a afirmação "sem filtros de conteúdo" se encaixa nas regras de conteúdo da Muapi, e se os mecanismos locais aplicam algum filtro.',
          'Não verificado: a relação entre o dono do repositório e a empresa por trás da Muapi. A bandeira no cartão do diretório reflete a operadora do site oficial e do serviço hospedado.',
          'Não verificado: quais provedores de modelos são acionados para um modelo específico e sob quais condições.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Generative AI e as alternativas',
        itemHeadings: true,
        content: [
          '**As alternativas abaixo geram imagens localmente, enquanto o Open Generative AI chama principalmente uma API paga na nuvem.** As informações da tabela vêm do diretório da PromptQuorum; a PromptQuorum não as comparou na prática.',
        ],
        columns: ['Ferramenta', 'Licença e onde roda'],
        rows: [
          { 'Ferramenta': 'Open Generative AI', 'Licença e onde roda': 'MIT; API na nuvem por padrão, mecanismos locais opcionais' },
          { 'Ferramenta': '[ComfyUI](/pt/power-local-llm/comfyui-review)', 'Licença e onde roda': 'GPL 3.0; local; interface por nós' },
          { 'Ferramenta': '[InvokeAI](/pt/power-local-llm/invokeai-review)', 'Licença e onde roda': 'Apache 2.0; local; interface web' },
          { 'Ferramenta': '[Fooocus](/pt/power-local-llm/fooocus-review)', 'Licença e onde roda': 'GPL 3.0; local; interface web' },
          { 'Ferramenta': '[Stable Diffusion WebUI Forge](/pt/power-local-llm/stable-diffusion-forge-review)', 'Licença e onde roda': 'AGPL-3.0; local; interface web' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Open Generative AI é realmente gratuito?',
            a: 'O software é gratuito sob a licença MIT. A página de preços da Muapi lista tarifas por geração e se apresenta como "Pay Per Generation"; portanto, a geração na nuvem custa dinheiro, enquanto o mecanismo local sd.cpp não precisa de chave de API, segundo o README.',
          },
          {
            q: 'Preciso de uma conta ou de uma chave de API?',
            a: 'Para modelos na nuvem, sim: o README pede uma chave de acesso da Muapi no primeiro uso. Ele diz que você pode pular a chave se usar apenas modelos locais.',
          },
          {
            q: 'Posso usar offline?',
            a: 'Em parte. O app de desktop pode executar modelos de imagem locais com o sd.cpp incluído, depois que você os baixa. Os modelos de vídeo exigem uma instalação separada do Wan2GP em uma máquina com GPU CUDA ou ROCm, e a versão web hospedada sempre usa APIs na nuvem.',
          },
          {
            q: 'A versão com Docker é outro produto?',
            a: 'Não. O README descreve um caminho com Docker Compose que monta o estúdio web a partir do mesmo repositório, com os submódulos clonados antes. Ele serve o app na porta 3001 por padrão.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Open Generative AI vale uma olhada se você quer um estúdio de código aberto para muitos modelos hospedados de imagem e vídeo e não se importa de pagar à Muapi por geração.**',
          'Ele oferece um instalador comum para três sistemas de desktop, licença MIT, muitos estúdios, um editor de fluxos de trabalho por nós e mecanismos locais opcionais. O desenvolvimento está ativo, com um commit de código em 16 de novembro de 2026 e a versão 2.0.0 publicada em 23 de maio de 2026.',
          'As contrapartidas são reais. A maioria dos modelos depende de uma API paga de terceiros, então o app não é local em primeiro lugar. Os instaladores não são assinados, o quadro das regras de conteúdo não é claro e o vídeo local exige a sua própria instalação do Wan2GP. A PromptQuorum não testou o app. Comece com uma recarga pequena ou um modelo local pequeno e leia o README e os termos da Muapi antes de gerar qualquer coisa que pretenda publicar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Repositório do Open Generative AI no GitHub](https://github.com/Anil-matcha/Open-Generative-AI) — descrição, licença MIT, último commit e arquivos do projeto, consultados em 18 de novembro de 2026.',
          '[README do Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI#readme) — downloads, mecanismos locais, estúdios, fluxo da API, início rápido e caminho com Docker, consultados em 18 de novembro de 2026.',
          '[Versão v2.0.0](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0) — versão, data e arquivos do instalador, consultados em 18 de novembro de 2026.',
          '[Open Generative AI na Muapi](https://muapi.ai/open-generative-ai) — página oficial do produto e estúdio hospedado, consultados em 18 de novembro de 2026.',
          '[Muapi, Sobre](https://muapi.ai/about) — nome da operadora e localização em Bangalore, consultados em 18 de novembro de 2026.',
          '[Política de privacidade da Muapi](https://muapi.ai/privacy) — dados coletados, terceiros e retenção, consultados em 18 de novembro de 2026.',
          '[Termos de serviço da Muapi](https://muapi.ai/terms) — regras de conteúdo, lei aplicável e cobrança, consultados em 18 de novembro de 2026.',
          '[Preços da Muapi](https://muapi.ai/pricing) — modelo de preços por geração, consultados em 18 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do ComfyUI](/pt/power-local-llm/comfyui-review) — Interface por nós para fluxos avançados de geração de imagens.',
          '[Análise do InvokeAI](/pt/power-local-llm/invokeai-review) — Geração de imagens com uma interface web em estilo de estúdio.',
          '[Análise do Krita AI Diffusion](/pt/power-local-llm/krita-ai-diffusion-review) — Preenchimento generativo e pintura ao vivo dentro do Krita.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Image & Video Generation',
    heroImage: '/images/open-generative-ai-review-hero-zh.webp',
    title: 'Open Generative AI 评测：面向图像与视频的开源创作工作室',
    seoTitle: 'Open Generative AI 评测：图像与视频工作室',
    intro:
      'Open Generative AI 是一款采用 MIT 许可证的创作工作室，可生成图像、视频、口型同步片段和音频。它既能作为桌面应用运行，也能作为网页应用使用，大部分生成请求会发送到 Muapi API；桌面应用还可以在本地运行少数模型。本评测依据 GitHub 仓库、README、发布页面，以及 Muapi 的网站、服务条款和隐私政策，核查日期为 2026 年 11 月 18 日。PromptQuorum 没有实际测试过这款应用。',
    metaDescription:
      'Open Generative AI 是采用 MIT 许可证的图像、视频与口型同步工作室，多数模型通过付费的 Muapi API 运行，桌面应用可在本地运行部分模型。',
    twitterDescription:
      'Open Generative AI：采用 MIT 许可证的桌面与网页图像、视频工作室。多数模型通过付费的 Muapi API 运行，部分可本地运行。我们未做测试。',
    audience:
      '想用开源工作室调用托管图像和视频模型的创作者与开发者，以及正在与纯本地工具比较的读者',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Generative AI',
    targetKeywords: [
      'Open Generative AI 评测',
      'Open Generative AI Muapi',
      '开源 AI 视频生成器',
      'Open Generative AI 本地模型',
      'Open Generative AI 价格',
      'Open Generative AI 无内容过滤',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Generative AI 是一款开源的桌面与网页工作室，用一个界面汇集大量托管的图像、视频、口型同步和音频模型，并附带少数本地模型。** 代码免费，但多数模型要通过 Muapi 账户密钥按次计费，因此“免费”指的是软件本身，而不是每一次生成。',
    quickAnswerTop: {
      zh: {
        question: 'Open Generative AI 是什么，适合谁？',
        answer:
          'Open Generative AI 是一款工作室应用，可在同一界面生成图像、视频、口型同步片段和音频。它适合这样的创作者和开发者：对大多数模型接受付费的第三方 API，同时想要一款带可选本地引擎的免费桌面应用。',
        bullets: [
          '平台：macOS、Windows 和 Linux 安装包，托管网页版，以及 Docker Compose 部署方式。',
          '许可证：MIT。',
          '云端模型需要 Muapi API 密钥；本地引擎仅在桌面应用中可用。',
          '开发者称应用不设内容过滤；Muapi 的服务条款为其服务设定了内容规则。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '模型与硬件', anchor: 'requirements' },
      { label: '功能', anchor: 'features' },
      { label: '数据流向与内容规则', anchor: 'privacy' },
      { label: '适合谁使用', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '替代方案', anchor: 'alternatives' },
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
            text: 'Open Generative AI 是一款采用 MIT 许可证的工作室应用，可生成图像、视频、口型同步片段和音频，主要通过付费的 Muapi API，部分使用本地引擎。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作许多 AI 图像和视频模型的免费前端。像普通应用一样安装，然后云端模型按次向 Muapi 付费，或者下载少量模型在自己的电脑上运行。',
          },
        ],
        items: [
          '提供 macOS（Apple Silicon 和 Intel）、Windows 和 Linux（AppImage 与 .deb）安装包，均列在 GitHub 发布页面上。',
          '软件采用 MIT 许可证，免费；云端生成由 Muapi 按次计费，并需要 API 密钥。',
          '本地生成只能在桌面应用中使用，依靠内置引擎（图像模型）或你自行安装的 Wan2GP（视频和大型图像模型）。',
          'README 称 macOS 版本未经公证、Windows 安装程序未做代码签名，首次启动时会出现警告。',
          'PromptQuorum 没有测试这款应用，也没有测试其输出质量、速度或关于内容过滤的说法。',
        ],
        callouts: [
          {
            type: 'note',
            text: '生成真实人物的逼真图像、视频或会说话的肖像，会涉及同意、版权和人格权问题。发布任何内容之前，请确认适用于你的规则以及各模型提供方的条款。以上为一般性信息，不构成法律意见。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Open Generative AI 是一个工作室式的界面，让你在一处用多种模型生成图像和视频。**',
          'GitHub 仓库属于 Anil Matcha，其个人资料称他开发由 Muapi 驱动的开源生成式 AI 工具。README 称该应用“Powered by Muapi.ai”，并说明 muapi.ai/open-generative-ai 上的托管版本使用相同的工作室代码。根据其“关于”页面，Muapi 由 Vadoo Internet Services Private Limited 运营。没有任何一手资料说明仓库所有者与该公司之间的关系。',
          '2026 年 5 月 23 日发布的 2.0.0 版是 GitHub 上的最新发布版本。仓库在 2026 年 11 月 16 日有代码提交，并在 2026 年 11 月 18 日修改了 README，说明开发仍在进行，因此不适用项目停更警告。',
          '根据 README，该应用设有图像、视频、音频、AI 剪辑、口型同步、电影式镜头控制、营销变体、节点式工作流和智能体等独立工作室。开发者给出的模型数量在 README 不同章节中不一致（从 200+ 到 400+），GitHub 简介则写 800+，因此 PromptQuorum 不给出模型数量。',
          '以上描述均为开发者的说法。PromptQuorum 没有运行过这款应用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**你可以用 GitHub 发布页面上的普通安装包安装 Open Generative AI，或直接打开托管网页版。**',
          '2.0.0 版提供 Apple Silicon 的 .dmg、Intel 的 .dmg、Windows 的 .exe 安装程序、AppImage 和 .deb。在 macOS 上，README 建议用终端命令移除隔离标记，或在系统设置中选择“仍要打开”。在 Windows 上，SmartScreen 可能会对未签名的安装程序发出警告。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[macOS](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', '获取方式': '.dmg（Apple Silicon 或 Intel），未公证' },
          { '平台': '[Windows](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', '获取方式': '.exe 安装程序，未代码签名' },
          { '平台': '[Linux](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', '获取方式': 'AppImage 或 .deb（Ubuntu x64）' },
          { '平台': '[网页](https://muapi.ai/open-generative-ai)', '获取方式': '浏览器中的托管工作室，仅云端模型' },
          { '平台': '[官方网站](https://muapi.ai/open-generative-ai)', '获取方式': 'Muapi 网站上的官方产品页面' },
          { '平台': '[源码与 Docker](https://github.com/Anil-matcha/Open-Generative-AI)', '获取方式': '终端：带子模块克隆、npm run setup，或 docker compose' },
        ],
        note: '从源码构建需要 Node.js 和终端；多数用户应使用安装包。本地引擎仅在桌面应用中可用，托管网页版没有。',
      },
      requirements: {
        id: 'requirements',
        title: '模型与硬件',
        content: [
          '**你的电脑需要什么配置，取决于模型是在云端还是在本地运行。** 云端模型在 Muapi 一侧运行，所以应用本身没有给出硬件下限。',
          'README 介绍了两种本地引擎。内置的 sd.cpp 引擎运行图像模型，在 Apple Silicon 上使用 Metal，在 Linux 和 Windows 上使用 CUDA、Vulkan 或 ROCm。Wan2GP 是需要你自行安装的独立项目，负责视频模型和大型图像模型。',
        ],
        columns: ['选项', 'README 中的说明'],
        rows: [
          { '选项': '云端模型', 'README 中的说明': 'Muapi API 密钥，模型远程运行' },
          { '选项': 'sd.cpp（内置）', 'README 中的说明': '图像模型，CPU、Metal、CUDA、Vulkan、ROCm' },
          { '选项': 'sd.cpp，Z-Image', 'README 中的说明': '建议 16 GB 内存，8 GB 的 Mac 会卡死' },
          { '选项': 'Wan2GP（自行安装）', 'README 中的说明': '视频和大型图像模型，CUDA 或 ROCm GPU' },
          { '选项': 'Wan 2.1 1.3B（视频）', 'README 中的说明': '480p，约 8 GB 显存' },
          { '选项': '远程 Wan2GP', 'README 中的说明': 'Mac 应用通过 MCP 使用 GPU 主机' },
        ],
        note: '每个模型的下载量为数 GB。这些数字来自开发者；PromptQuorum 没有测量速度或质量。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**核心是一组共用同一模型目录和同一设置面板的工作室。** 以下各项均为 README 中开发者的说法。',
        ],
        items: [
          'Image Studio：文生图和图生图，兼容的编辑模型最多可使用 14 张参考图。',
          'Video Studio：文生视频和图生视频，画面比例、分辨率和时长控件会随模型调整。',
          'Lip Sync Studio：用肖像图加音频，或视频加音频，生成会说话的片段。',
          'Audio Studio、AI Clipping、Cinema Studio 的镜头控制，以及用于创意变体的 Marketing Studio。',
          'Workflow Studio：节点式编辑器，可串联图像、视频和音频模型，带模板和试玩区。',
          'Agent Studio 和 Design Agent Studio，用于对话式和画布式生成。',
          '生成历史和上传历史保存在浏览器中。',
          '桌面应用中通过设置里的 Local Models 使用本地模型。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与内容规则',
        content: [
          '**使用云端模型时，你的提示词和参考图会发送到 Muapi 的服务，即使应用本身是自托管的。**',
          'README 称自托管的应用会把数据留在你的机器上，同时也称 API 密钥保存在浏览器的 localStorage 中，只会发送给 Muapi。其 API 部分写明，上传的文件会发送到 Muapi，并以托管 URL 的形式交给接受图像输入的模型。综合来看，本地引擎把数据留在你的电脑上，云端模型则不会。',
          'Muapi 的隐私政策（最后更新于 2026 年 6 月 9 日）列出了账户信息、上传的照片，以及最长保存 12 个月的匿名使用日志。政策把 Replicate、fal.ai 等 AI 模型提供方、Amazon Web Services 与 CloudFront 存储，以及 Google 和 Apple 登录列为第三方。政策没有说明所在国家。',
          'README 和仓库简介称应用没有内容过滤、不会拒绝提示词、没有护栏。Muapi 的服务条款（最后更新于 2025 年 7 月 2 日）规定，不得使用该服务生成裸露、色情或露骨的性内容、恶意软件、武器或虚假信息。PromptQuorum 无法确定某个具体请求适用哪条规则，也无法确定本地引擎是否不同。',
          '你仍需对自己生成和发布的内容负责。Muapi 的条款受印度法律管辖，争议由卡纳塔克邦班加罗尔的法院处理。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        content: [
          '**Open Generative AI 适合想用一个界面调用多种托管模型、并接受按次计费的人。**',
        ],
        items: [
          '想在一个可安装的应用里使用图像、视频和口型同步工具的创作者。',
          '想要一套可修改、可自托管的 MIT 许可证工作室代码库的开发者。',
          '想试用小型本地图像模型、并可把视频任务交给另一台 GPU 机器的 Mac 用户。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        content: [
          '**Open Generative AI 不适合严格离线的工作，另有若干细节尚未核实。**',
        ],
        items: [
          '不适合：需要一切都离线运行，或要求每个模型的数据都留在设备上的人。',
          '不适合：需要有代码签名的安装程序，或无法执行首次启动变通方法的用户。',
          '不适合：内存较小、无法运行较大本地模型的机器。',
          '未核实：Muapi 的额度套餐、免费额度数量，以及托管页面上“免费”的含义。价格页面只列出按次费用。',
          '未核实：输出质量、生成速度，以及开发者给出的模型数量是否准确。PromptQuorum 没有做测试。',
          '未核实：“无内容过滤”的说法如何与 Muapi 的内容规则相容，以及本地引擎是否有过滤。',
          '未核实：仓库所有者与 Muapi 背后公司的关系。目录卡片上的国旗代表官方网站和托管服务的运营方。',
          '未核实：某个具体模型会调用哪些模型提供方，以及适用什么条款。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Generative AI 与替代方案对比',
        itemHeadings: true,
        content: [
          '**下列替代方案在本地生成图像，而 Open Generative AI 主要调用付费的云端 API。** 表中信息来自 PromptQuorum 目录；PromptQuorum 没有实际对比过它们。',
        ],
        columns: ['工具', '许可证与运行位置'],
        rows: [
          { '工具': 'Open Generative AI', '许可证与运行位置': 'MIT，默认云端 API，可选本地引擎' },
          { '工具': '[ComfyUI](/zh/power-local-llm/comfyui-review)', '许可证与运行位置': 'GPL 3.0，本地，节点式界面' },
          { '工具': '[InvokeAI](/zh/power-local-llm/invokeai-review)', '许可证与运行位置': 'Apache 2.0，本地，网页界面' },
          { '工具': '[Fooocus](/zh/power-local-llm/fooocus-review)', '许可证与运行位置': 'GPL 3.0，本地，网页界面' },
          { '工具': '[Stable Diffusion WebUI Forge](/zh/power-local-llm/stable-diffusion-forge-review)', '许可证与运行位置': 'AGPL-3.0，本地，网页界面' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Open Generative AI 真的免费吗？',
            a: '软件采用 MIT 许可证，免费。Muapi 的价格页面列出按次价格，并自称“Pay Per Generation”，所以云端生成要花钱；而本地的 sd.cpp 引擎按 README 所述不需要 API 密钥。',
          },
          {
            q: '我需要账户或 API 密钥吗？',
            a: '使用云端模型时需要：README 要求首次使用时填写 Muapi 访问密钥。它说明如果只使用本地模型，可以跳过密钥。',
          },
          {
            q: '可以离线使用吗？',
            a: '部分可以。桌面应用下载本地图像模型后，可用内置的 sd.cpp 引擎运行。视频模型需要在带 CUDA 或 ROCm GPU 的机器上另行安装 Wan2GP，而托管网页版始终使用云端 API。',
          },
          {
            q: 'Docker 版本是另一个产品吗？',
            a: '不是。README 介绍的 Docker Compose 方式，是用同一个仓库构建网页工作室，需要先克隆子模块。默认在 3001 端口提供应用。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你想要一个能调用多种托管图像和视频模型的开源工作室，并且不介意向 Muapi 按次付费，Open Generative AI 值得一看。**',
          '它为三种桌面系统提供普通安装包，采用 MIT 许可证，拥有多种工作室、节点式工作流编辑器和可选的本地引擎。开发活跃：2026 年 11 月 16 日有代码提交，2.0.0 版于 2026 年 5 月 23 日发布。',
          '取舍是实实在在的。多数模型依赖付费的第三方 API，所以它并不是本地优先的应用。安装包没有签名，内容规则的整体情况不明确，本地视频还需要你自己搭建 Wan2GP。PromptQuorum 没有测试这款应用。建议先小额充值或先用小型本地模型，并在生成任何打算发布的内容之前，阅读 README 和 Muapi 的条款。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Open Generative AI 的 GitHub 仓库](https://github.com/Anil-matcha/Open-Generative-AI) — 简介、MIT 许可证、最近提交和项目文件，核查于 2026 年 11 月 18 日。',
          '[Open Generative AI 的 README](https://github.com/Anil-matcha/Open-Generative-AI#readme) — 下载、本地引擎、工作室、API 流程、快速开始和 Docker 方式，核查于 2026 年 11 月 18 日。',
          '[发布版本 v2.0.0](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0) — 版本、日期和安装包文件，核查于 2026 年 11 月 18 日。',
          '[Muapi 上的 Open Generative AI](https://muapi.ai/open-generative-ai) — 官方产品页面和托管工作室，核查于 2026 年 11 月 18 日。',
          '[Muapi 关于我们](https://muapi.ai/about) — 运营方名称和班加罗尔所在地，核查于 2026 年 11 月 18 日。',
          '[Muapi 隐私政策](https://muapi.ai/privacy) — 收集的数据、第三方和保留期限，核查于 2026 年 11 月 18 日。',
          '[Muapi 服务条款](https://muapi.ai/terms) — 内容规则、适用法律和计费，核查于 2026 年 11 月 18 日。',
          '[Muapi 价格](https://muapi.ai/pricing) — 按次计费的价格模式，核查于 2026 年 11 月 18 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[ComfyUI 评测](/zh/power-local-llm/comfyui-review) — 用于高级图像生成工作流的节点式界面。',
          '[InvokeAI 评测](/zh/power-local-llm/invokeai-review) — 带工作室风格网页界面的图像生成工具。',
          '[Krita AI Diffusion 评测](/zh/power-local-llm/krita-ai-diffusion-review) — 在 Krita 内使用生成式填充和实时绘画。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Image & Video Generation',
    heroImage: '/images/open-generative-ai-review-hero-ar.webp',
    title: 'مراجعة Open Generative AI: استوديو مفتوح المصدر للصور والفيديو',
    seoTitle: 'مراجعة Open Generative AI: استوديو الصور والفيديو',
    intro:
      'Open Generative AI استوديو مرخّص بترخيص MIT لتوليد الصور والفيديو ومقاطع مزامنة الشفاه والصوت. يعمل كتطبيق لسطح المكتب أو كتطبيق ويب، ويرسل معظم طلبات التوليد إلى واجهة Muapi API، ويمكنه تشغيل بعض النماذج محليًا في تطبيق سطح المكتب. تستند هذه المراجعة إلى مستودع GitHub وملف README وصفحة الإصدارات وموقع Muapi وشروطها وسياسة الخصوصية فيها، وقد روجعت في 18 نوفمبر 2026. لم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'Open Generative AI استوديو للصور والفيديو ومزامنة الشفاه بترخيص MIT. تعمل معظم النماذج عبر واجهة Muapi API المدفوعة، وبعضها محليًا في تطبيق سطح المكتب.',
    twitterDescription:
      'Open Generative AI: استوديو للصور والفيديو بترخيص MIT لسطح المكتب والويب. معظم النماذج عبر واجهة Muapi API المدفوعة وبعضها محليًا. لم نختبره.',
    audience:
      'المبدعون والمطورون الذين يريدون استوديو مفتوح المصدر لنماذج الصور والفيديو المستضافة، والقراء الذين يقارنونه بأدوات محلية فقط',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Generative AI',
    targetKeywords: [
      'مراجعة Open Generative AI',
      'Open Generative AI Muapi',
      'مولّد فيديو بالذكاء الاصطناعي مفتوح المصدر',
      'Open Generative AI نماذج محلية',
      'Open Generative AI الأسعار',
      'Open Generative AI بدون مرشحات محتوى',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Generative AI استوديو مفتوح المصدر لسطح المكتب والويب، يتيح في واجهة واحدة الوصول إلى نماذج مستضافة كثيرة للصور والفيديو ومزامنة الشفاه والصوت، إضافةً إلى بعض النماذج المحلية.** الشيفرة مجانية، لكن معظم النماذج تُحاسَب لكل عملية توليد عبر مفتاح حساب Muapi، فكلمة «مجاني» تنطبق على البرنامج لا على كل عملية توليد.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Open Generative AI ولمن هو؟',
        answer:
          'Open Generative AI تطبيق استوديو لتوليد الصور والفيديو ومقاطع مزامنة الشفاه والصوت من واجهة واحدة. يناسب المبدعين والمطورين الذين يقبلون واجهة برمجية مدفوعة من طرف ثالث لمعظم النماذج، ويريدون تطبيقًا مجانيًا لسطح المكتب مع محركات محلية اختيارية.',
        bullets: [
          'المنصات: مثبّتات لأنظمة macOS وWindows وLinux، ونسخة ويب مستضافة، ومسار عبر Docker Compose.',
          'الترخيص: MIT.',
          'تحتاج النماذج السحابية إلى مفتاح Muapi API؛ والمحركات المحلية متاحة في تطبيق سطح المكتب فقط.',
          'يقول المطوّر إن التطبيق لا يطبّق أي مرشحات للمحتوى؛ وتضع شروط Muapi قواعد للمحتوى في خدمتها.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيفية الحصول عليه', anchor: 'get-it' },
      { label: 'النماذج والعتاد', anchor: 'requirements' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'مسار البيانات وقواعد المحتوى', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
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
            text: 'Open Generative AI تطبيق استوديو بترخيص MIT يولّد الصور والفيديو ومقاطع مزامنة الشفاه والصوت، غالبًا عبر واجهة Muapi API المدفوعة وجزئيًا بمحركات محلية.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله واجهة مجانية لنماذج كثيرة للصور والفيديو بالذكاء الاصطناعي. تثبّته كأي تطبيق عادي، ثم تدفع لـ Muapi عن كل عملية توليد للنماذج السحابية، أو تنزّل عددًا قليلًا من النماذج لتعمل على حاسوبك.',
          },
        ],
        items: [
          'تتوفر مثبّتات لأنظمة macOS (Apple Silicon وIntel) وWindows وLinux (AppImage و.deb)، وكلها مدرجة في صفحة إصدارات GitHub.',
          'البرنامج مجاني بترخيص MIT؛ أما التوليد السحابي فتحاسب عليه Muapi لكل عملية توليد ويتطلب مفتاح API.',
          'يعمل التوليد المحلي في تطبيق سطح المكتب فقط، عبر محرك مرفق (نماذج الصور) أو عبر تثبيت Wan2GP تجهّزه بنفسك (الفيديو ونماذج الصور الكبيرة).',
          'يقول ملف README إن نسخة macOS غير موثّقة (notarized) وإن مثبّت Windows غير موقّع برمجيًا، لذا توقّع تحذيرًا عند أول تشغيل.',
          'لم تختبر PromptQuorum التطبيق ولا جودة مخرجاته ولا سرعته ولا ما يُقال عن مرشحات المحتوى.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'توليد صور أو فيديو أو صور شخصية ناطقة واقعية لأشخاص حقيقيين يثير مسائل الموافقة وحقوق النشر وحقوق الشخصية. تحقق من القواعد التي تنطبق عليك ومن شروط كل مزوّد نماذج قبل نشر أي شيء. هذه معلومات عامة وليست استشارة قانونية.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Open Generative AI واجهة بأسلوب الاستوديو لتوليد الصور والفيديو بنماذج كثيرة من مكان واحد.**',
          'مستودع GitHub يعود إلى Anil Matcha، ويذكر ملفه الشخصي أنه يطوّر أدوات ذكاء اصطناعي توليدي مفتوحة المصدر تعمل بواسطة Muapi. يصف ملف README التطبيق بأنه «Powered by Muapi.ai» ويقول إن النسخة المستضافة على muapi.ai/open-generative-ai تستخدم شيفرة الاستوديو نفسها. وبحسب صفحة «من نحن» تشغّل Muapi شركة Vadoo Internet Services Private Limited. لا يذكر أي مصدر أولي العلاقة بين صاحب المستودع وتلك الشركة.',
          'الإصدار 2.0.0 الذي نُشر في 23 مايو 2026 هو أحدث إصدار على GitHub. تلقّى المستودع إيداعًا برمجيًا في 16 نوفمبر 2026 وتعديلًا على README في 18 نوفمبر 2026، فالتطوير مستمر ولا ينطبق تحذير المشروع المهجور.',
          'بحسب README، يضم التطبيق استوديوهات منفصلة للصور والفيديو والصوت والقص بالذكاء الاصطناعي ومزامنة الشفاه وضوابط كاميرا بأسلوب السينما ونسخ تسويقية متنوعة وسير عمل قائم على العقد ووكلاء. تتباين أعداد النماذج التي يذكرها المطوّر بين أقسام README (من 200+ إلى 400+) ويذكر وصف GitHub أكثر من 800، ولذلك لا تذكر PromptQuorum عددًا للنماذج.',
          'هذه الأوصاف أقوال المطوّر. لم تشغّل PromptQuorum التطبيق.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**تثبّت Open Generative AI بمثبّت عادي من صفحة إصدارات GitHub، أو تفتح النسخة المستضافة على الويب.**',
          'يضم الإصدار 2.0.0 ملف .dmg لـ Apple Silicon وآخر لـ Intel ومثبّت .exe لنظام Windows وملف AppImage وحزمة .deb. في macOS يطلب README إزالة علامة الحجر الصحي بأمر في Terminal، أو اختيار «فتح على أي حال» من إعدادات النظام. وفي Windows قد يحذّر SmartScreen من المثبّت غير الموقّع.',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          { 'المنصة': '[macOS](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'كيفية الحصول عليه': '.dmg (Apple Silicon أو Intel)؛ غير موثّق' },
          { 'المنصة': '[Windows](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'كيفية الحصول عليه': 'مثبّت .exe؛ غير موقّع برمجيًا' },
          { 'المنصة': '[Linux](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', 'كيفية الحصول عليه': 'AppImage أو .deb (Ubuntu x64)' },
          { 'المنصة': '[الويب](https://muapi.ai/open-generative-ai)', 'كيفية الحصول عليه': 'استوديو مستضاف في المتصفح؛ نماذج سحابية فقط' },
          { 'المنصة': '[الموقع الرسمي](https://muapi.ai/open-generative-ai)', 'كيفية الحصول عليه': 'صفحة المنتج الرسمية على موقع Muapi' },
          { 'المنصة': '[الشيفرة المصدرية وDocker](https://github.com/Anil-matcha/Open-Generative-AI)', 'كيفية الحصول عليه': 'سطر الأوامر: استنساخ مع الوحدات الفرعية، npm run setup، أو docker compose' },
        ],
        note: 'البناء من الشيفرة المصدرية يتطلب Node.js وسطر الأوامر؛ ينبغي لمعظم المستخدمين استخدام المثبّت. المحركات المحلية متاحة في تطبيق سطح المكتب فقط، لا في نسخة الويب المستضافة.',
      },
      requirements: {
        id: 'requirements',
        title: 'النماذج والعتاد',
        content: [
          '**ما يحتاجه حاسوبك يعتمد على ما إذا كان النموذج يعمل في السحابة أم محليًا.** النماذج السحابية تعمل لدى Muapi، لذا لا يُذكر حد أدنى للعتاد للتطبيق نفسه.',
          'يصف README محركين محليين. محرك sd.cpp المرفق يشغّل نماذج الصور ويستخدم Metal على Apple Silicon أو CUDA وVulkan وROCm على Linux وWindows. أما Wan2GP فمشروع منفصل تثبّته بنفسك ويتولى نماذج الفيديو ونماذج الصور الكبيرة.',
        ],
        columns: ['الخيار', 'المذكور في README'],
        rows: [
          { 'الخيار': 'النماذج السحابية', 'المذكور في README': 'مفتاح Muapi API؛ النماذج تعمل عن بُعد' },
          { 'الخيار': 'sd.cpp (مرفق)', 'المذكور في README': 'نماذج صور؛ CPU وMetal وCUDA وVulkan وROCm' },
          { 'الخيار': 'sd.cpp، Z-Image', 'المذكور في README': 'يُنصح بـ 16 GB من RAM؛ يتجمّد على Mac بـ 8 GB' },
          { 'الخيار': 'Wan2GP (تثبيت ذاتي)', 'المذكور في README': 'فيديو ونماذج صور كبيرة؛ GPU بـ CUDA أو ROCm' },
          { 'الخيار': 'Wan 2.1 1.3B (فيديو)', 'المذكور في README': '480p، نحو 8 GB من VRAM' },
          { 'الخيار': 'Wan2GP عن بُعد', 'المذكور في README': 'تطبيق Mac يستخدم جهاز GPU عبر MCP' },
        ],
        note: 'تبلغ حمولة كل نموذج عدة غيغابايتات. هذه الأرقام من المطوّر؛ ولم تقِس PromptQuorum السرعة أو الجودة.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**جوهر التطبيق مجموعة استوديوهات تتشارك كتالوج نماذج واحدًا ولوحة إعدادات واحدة.** كل ما يلي أقوال المطوّر المأخوذة من README.',
        ],
        items: [
          'Image Studio: نص إلى صورة وصورة إلى صورة، مع ما يصل إلى 14 صورة مرجعية لنماذج التحرير المتوافقة.',
          'Video Studio: نص إلى فيديو وصورة إلى فيديو، مع ضوابط لنسبة العرض والدقة والمدة تتكيف مع كل نموذج.',
          'Lip Sync Studio: صورة شخصية مع صوت، أو فيديو مع صوت، لإنتاج مقطع ناطق.',
          'Audio Studio وAI Clipping وضوابط الكاميرا في Cinema Studio وMarketing Studio للنسخ الإبداعية المتنوعة.',
          'Workflow Studio: محرر قائم على العقد لربط نماذج الصور والفيديو والصوت، مع قوالب وساحة تجربة.',
          'Agent Studio وDesign Agent Studio للتوليد الحواري والتوليد على لوحة رسم.',
          'سجل التوليد وسجل الرفع محفوظان في المتصفح.',
          'نماذج محلية في تطبيق سطح المكتب من الإعدادات ثم Local Models.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'مسار البيانات وقواعد المحتوى',
        content: [
          '**مع النماذج السحابية تذهب مطالباتك وصورك المرجعية إلى خدمة Muapi، حتى لو كان التطبيق نفسه مستضافًا ذاتيًا.**',
          'يقول README إن التطبيق المستضاف ذاتيًا يُبقي بياناتك على جهازك، ويقول أيضًا إن مفاتيح API تُحفظ في localStorage بالمتصفح ولا تُرسل إلا إلى Muapi. ويذكر قسم API فيه أن الملفات المرفوعة تذهب إلى Muapi وتعود روابط مستضافة تُمرَّر إلى النماذج التي تقبل صورة مدخلة. بقراءة ذلك معًا، تُبقي المحركات المحلية البيانات على حاسوبك بينما لا تفعل النماذج السحابية ذلك.',
          'تذكر سياسة الخصوصية في Muapi (آخر تحديث في 9 يونيو 2026) معلومات الحساب والصور المرفوعة وسجلات استخدام مجهولة الهوية تُحفظ حتى 12 شهرًا. وتسمّي أطرافًا ثالثة منها مزوّدو نماذج الذكاء الاصطناعي مثل Replicate وfal.ai، وتخزين Amazon Web Services مع CloudFront، وتسجيل الدخول عبر Google وApple. ولا تذكر بلدًا.',
          'يقول README ووصف المستودع إن التطبيق بلا مرشحات محتوى ولا رفض للمطالبات ولا ضوابط حماية. وتنص شروط Muapi (آخر تحديث في 2 يوليو 2025) على عدم استخدام الخدمة لإنتاج العري أو المحتوى الإباحي أو الجنسي الصريح أو البرمجيات الخبيثة أو الأسلحة أو المعلومات المضللة. لم تتمكن PromptQuorum من تحديد أي القاعدتين تنطبق على طلب بعينه، ولا ما إذا كانت المحركات المحلية تختلف.',
          'تبقى مسؤولًا عمّا تولّده وتنشره. وتخضع شروط Muapi لقوانين الهند، وتُنظر النزاعات أمام محاكم بنغالور في ولاية كارناتاكا.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Open Generative AI من يريد واجهة واحدة لنماذج مستضافة كثيرة ويقبل المحاسبة لكل عملية توليد.**',
        ],
        items: [
          'المبدعون الذين يريدون أدوات الصور والفيديو ومزامنة الشفاه في تطبيق واحد قابل للتثبيت.',
          'المطورون الذين يريدون قاعدة شيفرة لاستوديو بترخيص MIT يمكنهم تعديلها واستضافتها ذاتيًا.',
          'مستخدمو Mac الذين يريدون تجربة نماذج صور محلية صغيرة، مع إمكانية إحالة عمل الفيديو إلى جهاز GPU منفصل.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب Open Generative AI العمل دون اتصال بالكامل، وتبقى عدة تفاصيل غير متحقَّق منها.**',
        ],
        items: [
          'لا يناسب: من يحتاج إلى أن يعمل كل شيء دون اتصال أو أن تبقى البيانات على الجهاز مع كل نموذج.',
          'لا يناسب: المستخدمين الذين يحتاجون إلى مثبّت موقّع برمجيًا أو لا يستطيعون تنفيذ الحل البديل عند أول تشغيل.',
          'لا يناسب: الأجهزة قليلة الذاكرة مع النماذج المحلية الأثقل.',
          'غير متحقَّق منه: باقات رصيد Muapi ومقادير الرصيد المجاني ومعنى «مجاني» في الصفحة المستضافة. تعرض صفحة الأسعار تعرفة كل عملية توليد فقط.',
          'غير متحقَّق منه: جودة المخرجات وسرعة التوليد ودقة أعداد النماذج التي يذكرها المطوّر. لم تجرِ PromptQuorum أي اختبارات.',
          'غير متحقَّق منه: كيف يتّسق القول «بلا مرشحات محتوى» مع قواعد المحتوى في Muapi، وهل تطبّق المحركات المحلية أي مرشح.',
          'غير متحقَّق منه: العلاقة بين صاحب المستودع والشركة التي تقف وراء Muapi. العلم على بطاقة الدليل يعكس مشغّل الموقع الرسمي والخدمة المستضافة.',
          'غير متحقَّق منه: أي مزوّدي نماذج يُستدعَون لنموذج بعينه وبأي شروط.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Generative AI مقابل البدائل',
        itemHeadings: true,
        content: [
          '**البدائل أدناه تولّد الصور محليًا، بينما يستدعي Open Generative AI في الغالب واجهة سحابية مدفوعة.** المعلومات في الجدول مأخوذة من دليل PromptQuorum؛ ولم تقارنها PromptQuorum عمليًا.',
        ],
        columns: ['الأداة', 'الترخيص ومكان التشغيل'],
        rows: [
          { 'الأداة': 'Open Generative AI', 'الترخيص ومكان التشغيل': 'MIT؛ واجهة سحابية افتراضيًا، ومحركات محلية اختيارية' },
          { 'الأداة': '[ComfyUI](/ar/power-local-llm/comfyui-review)', 'الترخيص ومكان التشغيل': 'GPL 3.0؛ محلي؛ واجهة قائمة على العقد' },
          { 'الأداة': '[InvokeAI](/ar/power-local-llm/invokeai-review)', 'الترخيص ومكان التشغيل': 'Apache 2.0؛ محلي؛ واجهة ويب' },
          { 'الأداة': '[Fooocus](/ar/power-local-llm/fooocus-review)', 'الترخيص ومكان التشغيل': 'GPL 3.0؛ محلي؛ واجهة ويب' },
          { 'الأداة': '[Stable Diffusion WebUI Forge](/ar/power-local-llm/stable-diffusion-forge-review)', 'الترخيص ومكان التشغيل': 'AGPL-3.0؛ محلي؛ واجهة ويب' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Open Generative AI مجاني حقًا؟',
            a: 'البرنامج مجاني بترخيص MIT. تعرض صفحة أسعار Muapi تعرفة لكل عملية توليد وتصف نفسها بـ «Pay Per Generation»، فالتوليد السحابي يكلّف مالًا، بينما لا يحتاج محرك sd.cpp المحلي إلى مفتاح API بحسب README.',
          },
          {
            q: 'هل أحتاج إلى حساب أو مفتاح API؟',
            a: 'للنماذج السحابية نعم: يطلب README مفتاح وصول من Muapi عند أول استخدام. ويقول إن بإمكانك تخطي المفتاح إذا كنت تستخدم النماذج المحلية فقط.',
          },
          {
            q: 'هل يمكنني استخدامه دون اتصال؟',
            a: 'جزئيًا. يستطيع تطبيق سطح المكتب تشغيل نماذج صور محلية بمحرك sd.cpp المرفق بعد تنزيلها. أما نماذج الفيديو فتحتاج إلى تثبيت Wan2GP منفصل على جهاز بـ GPU يدعم CUDA أو ROCm، وتستخدم نسخة الويب المستضافة واجهات سحابية دائمًا.',
          },
          {
            q: 'هل نسخة Docker منتج مختلف؟',
            a: 'لا. يصف README مسار Docker Compose الذي يبني استوديو الويب من المستودع نفسه، مع استنساخ الوحدات الفرعية أولًا. ويقدّم التطبيق على المنفذ 3001 افتراضيًا.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Open Generative AI نظرة إن كنت تريد استوديو مفتوح المصدر لنماذج صور وفيديو مستضافة كثيرة ولا تمانع الدفع لـ Muapi عن كل عملية توليد.**',
          'يقدّم مثبّتًا عاديًا لثلاثة أنظمة لسطح المكتب، وترخيص MIT، واستوديوهات واسعة، ومحرر سير عمل قائمًا على العقد، ومحركات محلية اختيارية. التطوير نشط، مع إيداع برمجي في 16 نوفمبر 2026 والإصدار 2.0.0 المنشور في 23 مايو 2026.',
          'المقايضات حقيقية. تعتمد معظم النماذج على واجهة برمجية مدفوعة من طرف ثالث، فالتطبيق ليس محليًا أولًا. المثبّتات غير موقّعة، وصورة قواعد المحتوى غير واضحة، والفيديو المحلي يتطلب تجهيز Wan2GP بنفسك. لم تختبر PromptQuorum التطبيق. ابدأ بشحن رصيد صغير أو بنموذج محلي صغير، واقرأ README وشروط Muapi قبل توليد أي شيء تنوي نشره.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[مستودع Open Generative AI على GitHub](https://github.com/Anil-matcha/Open-Generative-AI) — الوصف وترخيص MIT وآخر إيداع وملفات المشروع، روجع في 18 نوفمبر 2026.',
          '[ملف README لـ Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI#readme) — التنزيلات والمحركات المحلية والاستوديوهات ومسار API والبدء السريع ومسار Docker، روجع في 18 نوفمبر 2026.',
          '[الإصدار v2.0.0](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0) — الإصدار والتاريخ وملفات المثبّت، روجع في 18 نوفمبر 2026.',
          '[Open Generative AI على Muapi](https://muapi.ai/open-generative-ai) — صفحة المنتج الرسمية والاستوديو المستضاف، روجعت في 18 نوفمبر 2026.',
          '[Muapi من نحن](https://muapi.ai/about) — اسم المشغّل وموقعه في بنغالور، روجعت في 18 نوفمبر 2026.',
          '[سياسة الخصوصية في Muapi](https://muapi.ai/privacy) — البيانات المجمَّعة والأطراف الثالثة ومدة الحفظ، روجعت في 18 نوفمبر 2026.',
          '[شروط خدمة Muapi](https://muapi.ai/terms) — قواعد المحتوى والقانون الحاكم والفوترة، روجعت في 18 نوفمبر 2026.',
          '[أسعار Muapi](https://muapi.ai/pricing) — نموذج التسعير لكل عملية توليد، روجعت في 18 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة ComfyUI](/ar/power-local-llm/comfyui-review) — واجهة قائمة على العقد لسير عمل متقدم في توليد الصور.',
          '[مراجعة InvokeAI](/ar/power-local-llm/invokeai-review) — توليد الصور بواجهة ويب بأسلوب الاستوديو.',
          '[مراجعة Krita AI Diffusion](/ar/power-local-llm/krita-ai-diffusion-review) — التعبئة التوليدية والرسم المباشر داخل Krita.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-18',
    dateModified: '2026-11-18',
    next_refresh_due: '2027-05-19',
    theme: 'Image & Video Generation',
    heroImage: '/images/open-generative-ai-review-hero-ko.webp',
    title: 'Open Generative AI 리뷰: 이미지·영상용 오픈소스 스튜디오',
    seoTitle: 'Open Generative AI 리뷰: 이미지·영상 스튜디오',
    intro:
      'Open Generative AI는 이미지, 영상, 립싱크 클립, 오디오를 생성하는 MIT 라이선스 스튜디오입니다. 데스크톱 앱이나 웹 앱으로 실행되며, 생성 요청 대부분을 Muapi API로 보내고, 데스크톱 앱에서는 일부 모델을 로컬로 실행할 수 있습니다. 이 리뷰는 GitHub 저장소, README, 릴리스 페이지, 그리고 Muapi의 웹사이트·이용약관·개인정보 처리방침을 바탕으로 2026년 11월 18일에 확인했습니다. PromptQuorum은 이 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Open Generative AI는 MIT 라이선스의 이미지·영상·립싱크 스튜디오입니다. 대부분의 모델은 유료 Muapi API를 쓰고, 데스크톱 앱에서는 로컬 실행도 가능합니다.',
    twitterDescription:
      'Open Generative AI: 데스크톱과 웹용 MIT 라이선스 이미지·영상 스튜디오. 대부분 유료 Muapi API를 쓰고 일부는 로컬 실행. 직접 테스트하지 않았습니다.',
    audience:
      '호스팅된 이미지·영상 모델을 쓸 오픈소스 스튜디오를 찾는 크리에이터와 개발자, 로컬 전용 도구와 비교하려는 독자',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Open Generative AI',
    targetKeywords: [
      'Open Generative AI 리뷰',
      'Open Generative AI Muapi',
      '오픈소스 AI 영상 생성기',
      'Open Generative AI 로컬 모델',
      'Open Generative AI 가격',
      'Open Generative AI 콘텐츠 필터 없음',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Open Generative AI는 호스팅된 이미지·영상·립싱크·오디오 모델과 일부 로컬 모델을 하나의 화면에 모은 오픈소스 데스크톱·웹 스튜디오입니다.** 코드는 무료이지만 대부분의 모델은 Muapi 계정 키를 통해 생성할 때마다 과금되므로, "무료"는 소프트웨어에만 해당하며 모든 생성에 해당하지는 않습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Open Generative AI는 무엇이며 누구에게 맞습니까?',
        answer:
          'Open Generative AI는 이미지, 영상, 립싱크 클립, 오디오를 하나의 화면에서 생성하는 스튜디오 앱입니다. 대부분의 모델에 유료 서드파티 API를 받아들이고, 선택형 로컬 엔진을 갖춘 무료 데스크톱 앱을 원하는 크리에이터와 개발자에게 맞습니다.',
        bullets: [
          '플랫폼: macOS, Windows, Linux 설치 파일, 호스팅 웹 버전, Docker Compose 경로.',
          '라이선스: MIT.',
          '클라우드 모델에는 Muapi API 키가 필요하며, 로컬 엔진은 데스크톱 앱에서만 쓸 수 있습니다.',
          '개발자는 콘텐츠 필터를 적용하지 않는다고 밝히며, Muapi의 이용약관은 자사 서비스의 콘텐츠 규칙을 정합니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '설치 방법', anchor: 'get-it' },
      { label: '모델과 하드웨어', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '데이터 흐름과 콘텐츠 규칙', anchor: 'privacy' },
      { label: '추천 대상', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '대안', anchor: 'alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
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
            text: 'Open Generative AI는 이미지, 영상, 립싱크 클립, 오디오를 생성하는 MIT 라이선스 스튜디오 앱으로, 주로 유료 Muapi API를 쓰고 일부는 로컬 엔진으로 실행합니다.',
          },
          {
            type: 'plain-terms',
            text: '여러 AI 이미지·영상 모델을 쓰는 무료 프런트엔드라고 보면 됩니다. 일반 앱처럼 설치한 뒤, 클라우드 모델은 생성할 때마다 Muapi에 비용을 내거나, 소수의 모델을 내려받아 내 컴퓨터에서 실행합니다.',
          },
        ],
        items: [
          'macOS(Apple Silicon과 Intel), Windows, Linux(AppImage와 .deb)용 설치 파일이 있으며 모두 GitHub 릴리스 페이지에 올라와 있습니다.',
          '소프트웨어는 MIT 라이선스로 무료이고, 클라우드 생성은 Muapi가 생성할 때마다 과금하며 API 키가 필요합니다.',
          '로컬 생성은 데스크톱 앱에서만 작동하며, 번들 엔진(이미지 모델)이나 직접 설치하는 Wan2GP(영상과 대형 이미지 모델)를 사용합니다.',
          'README에 따르면 macOS 빌드는 공증되지 않았고 Windows 설치 파일은 코드 서명이 없어서, 처음 실행할 때 경고가 나타납니다.',
          'PromptQuorum은 앱, 출력 품질, 속도, 콘텐츠 필터에 관한 설명을 테스트하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '실제 인물의 사실적인 이미지, 영상, 말하는 초상을 생성하면 동의, 저작권, 인격권 문제가 생깁니다. 무엇이든 게시하기 전에 본인에게 적용되는 규칙과 각 모델 제공업체의 약관을 확인하십시오. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Open Generative AI는 여러 모델로 이미지와 영상을 한곳에서 생성하는 스튜디오형 인터페이스입니다.**',
          'GitHub 저장소는 Anil Matcha 소유이며, 그의 프로필에는 Muapi를 기반으로 한 오픈소스 생성형 AI 도구를 만든다고 적혀 있습니다. README는 이 앱을 "Powered by Muapi.ai"라고 소개하며, muapi.ai/open-generative-ai의 호스팅 버전이 같은 스튜디오 코드를 쓴다고 설명합니다. Muapi는 소개 페이지에 따르면 Vadoo Internet Services Private Limited가 운영합니다. 저장소 소유자와 이 회사의 관계를 밝히는 1차 자료는 없습니다.',
          '2026년 5월 23일에 공개된 버전 2.0.0이 GitHub의 최신 릴리스입니다. 저장소에는 2026년 11월 16일에 코드 커밋이, 2026년 11월 18일에 README 수정이 있었으므로 개발은 계속되고 있으며 방치 프로젝트 경고는 해당하지 않습니다.',
          'README에 따르면 이 앱에는 이미지, 영상, 오디오, AI 클리핑, 립싱크, 시네마 스타일 카메라 조절, 마케팅 변형, 노드 기반 워크플로, 에이전트용 스튜디오가 따로 있습니다. 개발자가 밝히는 모델 수는 README 절마다 다르고(200+에서 400+까지) GitHub 설명은 800+라고 적고 있어, PromptQuorum은 모델 수를 제시하지 않습니다.',
          '이 설명은 개발자의 주장입니다. PromptQuorum은 앱을 실행하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '설치 방법',
        content: [
          '**Open Generative AI는 GitHub 릴리스 페이지의 일반 설치 파일로 설치하거나, 호스팅 웹 버전을 열어 사용합니다.**',
          '버전 2.0.0에는 Apple Silicon용 .dmg, Intel용 .dmg, Windows용 .exe 설치 파일, AppImage, .deb가 있습니다. macOS에서는 README가 Terminal 명령으로 격리 속성을 제거하거나 시스템 설정에서 "그래도 열기"를 선택하라고 안내합니다. Windows에서는 서명되지 않은 설치 파일에 대해 SmartScreen이 경고할 수 있습니다.',
        ],
        columns: ['플랫폼', '설치 방법'],
        rows: [
          { '플랫폼': '[macOS](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', '설치 방법': '.dmg(Apple Silicon 또는 Intel), 공증 안 됨' },
          { '플랫폼': '[Windows](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', '설치 방법': '.exe 설치 파일, 코드 서명 없음' },
          { '플랫폼': '[Linux](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0)', '설치 방법': 'AppImage 또는 .deb(Ubuntu x64)' },
          { '플랫폼': '[웹](https://muapi.ai/open-generative-ai)', '설치 방법': '브라우저의 호스팅 스튜디오, 클라우드 모델만' },
          { '플랫폼': '[웹사이트](https://muapi.ai/open-generative-ai)', '설치 방법': 'Muapi 사이트의 공식 제품 페이지' },
          { '플랫폼': '[소스와 Docker](https://github.com/Anil-matcha/Open-Generative-AI)', '설치 방법': '터미널: 서브모듈과 함께 clone, npm run setup 또는 docker compose' },
        ],
        note: '소스에서 빌드하려면 Node.js와 터미널이 필요하므로 대부분의 사용자는 설치 파일을 쓰는 편이 좋습니다. 로컬 엔진은 데스크톱 앱에만 있으며 호스팅 웹 버전에서는 쓸 수 없습니다.',
      },
      requirements: {
        id: 'requirements',
        title: '모델과 하드웨어',
        content: [
          '**컴퓨터에 필요한 사양은 모델이 클라우드에서 실행되는지 로컬에서 실행되는지에 따라 달라집니다.** 클라우드 모델은 Muapi 쪽에서 실행되므로 앱 자체에는 하드웨어 최소 사양이 제시되어 있지 않습니다.',
          'README는 두 가지 로컬 엔진을 설명합니다. 번들 sd.cpp 엔진은 이미지 모델을 실행하며 Apple Silicon에서는 Metal을, Linux와 Windows에서는 CUDA, Vulkan, ROCm을 사용합니다. Wan2GP는 직접 설치하는 별도 프로젝트로, 영상 모델과 대형 이미지 모델을 맡습니다.',
        ],
        columns: ['선택지', 'README의 설명'],
        rows: [
          { '선택지': '클라우드 모델', 'README의 설명': 'Muapi API 키, 모델은 원격 실행' },
          { '선택지': 'sd.cpp(번들)', 'README의 설명': '이미지 모델, CPU·Metal·CUDA·Vulkan·ROCm' },
          { '선택지': 'sd.cpp, Z-Image', 'README의 설명': 'RAM 16 GB 권장, 8 GB Mac에서는 멈춤' },
          { '선택지': 'Wan2GP(직접 설치)', 'README의 설명': '영상·대형 이미지, CUDA 또는 ROCm GPU' },
          { '선택지': 'Wan 2.1 1.3B(영상)', 'README의 설명': '480p, VRAM 약 8 GB' },
          { '선택지': '원격 Wan2GP', 'README의 설명': 'Mac 앱이 MCP로 GPU 머신 사용' },
        ],
        note: '모델 다운로드는 하나당 수 GB입니다. 이 수치는 개발자가 밝힌 것이며 PromptQuorum은 속도나 품질을 측정하지 않았습니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**핵심은 하나의 모델 카탈로그와 하나의 설정 패널을 공유하는 여러 스튜디오입니다.** 아래는 모두 README에 나오는 개발자의 주장입니다.',
        ],
        items: [
          'Image Studio: 텍스트에서 이미지, 이미지에서 이미지. 호환되는 편집 모델에서는 참조 이미지를 최대 14장까지 쓸 수 있습니다.',
          'Video Studio: 텍스트에서 영상, 이미지에서 영상. 화면 비율, 해상도, 길이 조절이 모델에 맞게 바뀝니다.',
          'Lip Sync Studio: 초상 이미지와 오디오, 또는 영상과 오디오로 말하는 클립을 만듭니다.',
          'Audio Studio, AI Clipping, Cinema Studio의 카메라 조절, 창의적 변형을 위한 Marketing Studio.',
          'Workflow Studio: 노드 기반 편집기로 이미지·영상·오디오 모델을 연결하며, 템플릿과 플레이그라운드가 있습니다.',
          '대화형과 캔버스형 생성을 위한 Agent Studio와 Design Agent Studio.',
          '생성 기록과 업로드 기록은 브라우저에 저장됩니다.',
          '데스크톱 앱의 설정에서 Local Models로 로컬 모델을 사용합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 콘텐츠 규칙',
        content: [
          '**클라우드 모델을 쓰면 앱 자체는 셀프 호스팅이어도 프롬프트와 참조 이미지가 Muapi 서비스로 전송됩니다.**',
          'README는 셀프 호스팅 앱이 데이터를 내 컴퓨터에 둔다고 하면서, API 키는 브라우저 localStorage에 저장되어 Muapi에만 전송된다고도 말합니다. API 절에는 업로드한 파일이 Muapi로 전송되고 호스팅 URL로 돌아와 이미지를 입력받는 모델에 전달된다고 적혀 있습니다. 둘을 함께 읽으면 로컬 엔진은 데이터를 컴퓨터에 두고 클라우드 모델은 그렇지 않습니다.',
          'Muapi의 개인정보 처리방침(최종 업데이트 2026년 6월 9일)에는 계정 정보, 업로드한 사진, 최대 12개월 보관되는 익명화된 사용 로그가 나옵니다. 제3자로는 Replicate, fal.ai 같은 AI 모델 제공업체, CloudFront가 있는 Amazon Web Services 저장소, Google과 Apple 로그인이 언급됩니다. 국가는 명시되어 있지 않습니다.',
          'README와 저장소 설명은 이 앱에 콘텐츠 필터, 프롬프트 거부, 가드레일이 없다고 말합니다. Muapi의 이용약관(최종 업데이트 2025년 7월 2일)은 서비스를 누드, 음란물이나 성적으로 노골적인 콘텐츠, 악성코드, 무기, 허위 정보 생성에 사용해서는 안 된다고 정합니다. PromptQuorum은 특정 요청에 어느 규칙이 적용되는지, 로컬 엔진은 다른지 확인하지 못했습니다.',
          '생성하고 게시하는 내용에 대한 책임은 사용자에게 있습니다. Muapi의 약관은 인도 법률을 준거법으로 하며 분쟁은 카르나타카주 방갈로르의 법원에서 다룹니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '추천 대상',
        content: [
          '**Open Generative AI는 호스팅된 여러 모델을 하나의 화면에서 쓰고, 생성당 과금을 받아들이는 사람에게 맞습니다.**',
        ],
        items: [
          '이미지, 영상, 립싱크 도구를 설치 가능한 하나의 앱에서 쓰고 싶은 크리에이터.',
          '수정하고 셀프 호스팅할 수 있는 MIT 라이선스 스튜디오 코드베이스를 원하는 개발자.',
          '작은 로컬 이미지 모델을 시험해 보고, 영상 작업은 별도 GPU 머신에 맡기고 싶은 Mac 사용자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Open Generative AI는 완전한 오프라인 작업에는 맞지 않으며, 확인하지 못한 세부 사항도 여러 가지 있습니다.**',
        ],
        items: [
          '맞지 않음: 모든 것이 오프라인으로 실행되어야 하거나, 모든 모델에서 데이터가 기기에 머물러야 하는 경우.',
          '맞지 않음: 코드 서명된 설치 파일이 필요하거나 첫 실행 우회 절차를 따를 수 없는 사용자.',
          '맞지 않음: 무거운 로컬 모델을 돌리기에는 메모리가 적은 컴퓨터.',
          '확인 못 함: Muapi의 크레딧 패키지, 무료 크레딧 규모, 호스팅 페이지에서 "무료"가 뜻하는 바. 가격 페이지에는 생성당 요금만 있습니다.',
          '확인 못 함: 출력 품질, 생성 속도, 개발자가 밝힌 모델 수의 정확성. PromptQuorum은 테스트를 하지 않았습니다.',
          '확인 못 함: "콘텐츠 필터 없음"이라는 설명이 Muapi의 콘텐츠 규칙과 어떻게 맞물리는지, 로컬 엔진에 필터가 있는지.',
          '확인 못 함: 저장소 소유자와 Muapi를 운영하는 회사의 관계. 디렉터리 타일의 국기는 공식 웹사이트와 호스팅 서비스의 운영 주체를 나타냅니다.',
          '확인 못 함: 특정 모델에서 어떤 모델 제공업체에 연결되고 어떤 조건이 적용되는지.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Open Generative AI와 대안 비교',
        itemHeadings: true,
        content: [
          '**아래 대안은 이미지를 로컬에서 생성하지만, Open Generative AI는 주로 유료 클라우드 API를 호출합니다.** 표의 정보는 PromptQuorum 디렉터리에서 가져왔으며 PromptQuorum이 직접 비교한 것은 아닙니다.',
        ],
        columns: ['도구', '라이선스와 실행 위치'],
        rows: [
          { '도구': 'Open Generative AI', '라이선스와 실행 위치': 'MIT, 기본은 클라우드 API, 로컬 엔진은 선택' },
          { '도구': '[ComfyUI](/ko/power-local-llm/comfyui-review)', '라이선스와 실행 위치': 'GPL 3.0, 로컬, 노드 기반 UI' },
          { '도구': '[InvokeAI](/ko/power-local-llm/invokeai-review)', '라이선스와 실행 위치': 'Apache 2.0, 로컬, 웹 UI' },
          { '도구': '[Fooocus](/ko/power-local-llm/fooocus-review)', '라이선스와 실행 위치': 'GPL 3.0, 로컬, 웹 UI' },
          { '도구': '[Stable Diffusion WebUI Forge](/ko/power-local-llm/stable-diffusion-forge-review)', '라이선스와 실행 위치': 'AGPL-3.0, 로컬, 웹 UI' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Open Generative AI는 정말 무료입니까?',
            a: '소프트웨어는 MIT 라이선스로 무료입니다. Muapi의 가격 페이지는 생성당 요금을 나열하고 스스로를 "Pay Per Generation"이라고 부르므로 클라우드 생성에는 비용이 듭니다. 반면 로컬 sd.cpp 엔진은 README에 따르면 API 키가 필요 없습니다.',
          },
          {
            q: '계정이나 API 키가 필요합니까?',
            a: '클라우드 모델에는 필요합니다. README는 처음 사용할 때 Muapi 액세스 키를 요구합니다. 로컬 모델만 쓴다면 키를 건너뛸 수 있다고 적혀 있습니다.',
          },
          {
            q: '오프라인으로 쓸 수 있습니까?',
            a: '일부는 가능합니다. 데스크톱 앱은 내려받은 로컬 이미지 모델을 번들 sd.cpp 엔진으로 실행할 수 있습니다. 영상 모델에는 CUDA 또는 ROCm GPU가 있는 머신에 별도의 Wan2GP 설치가 필요하고, 호스팅 웹 버전은 항상 클라우드 API를 씁니다.',
          },
          {
            q: 'Docker 버전은 다른 제품입니까?',
            a: '아닙니다. README에 나온 Docker Compose 경로는 같은 저장소에서 웹 스튜디오를 빌드하는 것이며, 먼저 서브모듈을 clone해야 합니다. 기본적으로 3001번 포트에서 앱을 제공합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          '**호스팅된 여러 이미지·영상 모델을 쓰는 오픈소스 스튜디오를 원하고 Muapi에 생성당 비용을 내는 데 거부감이 없다면, Open Generative AI는 살펴볼 만합니다.**',
          '세 가지 데스크톱 운영체제용 일반 설치 파일, MIT 라이선스, 폭넓은 스튜디오, 노드 기반 워크플로 편집기, 선택형 로컬 엔진을 갖췄습니다. 개발은 활발해서 2026년 11월 16일에 코드 커밋이 있었고 버전 2.0.0은 2026년 5월 23일에 공개되었습니다.',
          '절충점은 분명합니다. 대부분의 모델이 유료 서드파티 API에 의존하므로 로컬 우선 앱은 아닙니다. 설치 파일은 서명되어 있지 않고, 콘텐츠 규칙의 전체 그림은 불분명하며, 로컬 영상에는 직접 Wan2GP를 설치해야 합니다. PromptQuorum은 이 앱을 테스트하지 않았습니다. 소액 충전이나 작은 로컬 모델로 시작하고, 게시할 계획인 결과물을 만들기 전에 README와 Muapi 약관을 모두 읽으십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Open Generative AI GitHub 저장소](https://github.com/Anil-matcha/Open-Generative-AI) — 설명, MIT 라이선스, 최근 커밋, 프로젝트 파일. 2026년 11월 18일 확인.',
          '[Open Generative AI README](https://github.com/Anil-matcha/Open-Generative-AI#readme) — 다운로드, 로컬 엔진, 스튜디오, API 흐름, 빠른 시작, Docker 경로. 2026년 11월 18일 확인.',
          '[릴리스 v2.0.0](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v2.0.0) — 버전, 날짜, 설치 파일. 2026년 11월 18일 확인.',
          '[Muapi의 Open Generative AI](https://muapi.ai/open-generative-ai) — 공식 제품 페이지와 호스팅 스튜디오. 2026년 11월 18일 확인.',
          '[Muapi 소개](https://muapi.ai/about) — 운영 회사 이름과 방갈로르 소재지. 2026년 11월 18일 확인.',
          '[Muapi 개인정보 처리방침](https://muapi.ai/privacy) — 수집 데이터, 제3자, 보관 기간. 2026년 11월 18일 확인.',
          '[Muapi 이용약관](https://muapi.ai/terms) — 콘텐츠 규칙, 준거법, 과금. 2026년 11월 18일 확인.',
          '[Muapi 가격](https://muapi.ai/pricing) — 생성당 가격 모델. 2026년 11월 18일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[ComfyUI 리뷰](/ko/power-local-llm/comfyui-review) — 고급 이미지 생성 워크플로를 위한 노드 기반 UI.',
          '[InvokeAI 리뷰](/ko/power-local-llm/invokeai-review) — 스튜디오 스타일 웹 인터페이스로 하는 이미지 생성.',
          '[Krita AI Diffusion 리뷰](/ko/power-local-llm/krita-ai-diffusion-review) — Krita 안에서 쓰는 생성형 채우기와 라이브 페인팅.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그.',
        ],
      },
    },
  },
}
