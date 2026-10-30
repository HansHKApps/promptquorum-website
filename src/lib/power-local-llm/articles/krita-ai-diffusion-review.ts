// Krita AI Diffusion Review: open-source Krita plugin (Windows, macOS, Linux) for inpainting, live painting and upscaling with diffusion models, on your own GPU or on the paid Interstice.cloud service
// Slug: krita-ai-diffusion-review
// Companion to: comfyui-review, invokeai-review, stable-diffusion-forge-review, draw-things-review, local-llm-images-video-compared
// Sources: interstice.cloud (home, /service, /privacy last updated 2024-04-04, /imprint), docs.interstice.cloud/installation, github.com/Acly/krita-ai-diffusion (README, GPL-3.0 licence,
// Release v1.53.0 published 2026-08-22, default-branch commits up to 2026-10-03), all checked 2026-10-30 — no hands-on testing. The plugin drives diffusion image models; it is not an LLM.

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
    heroImage: '/images/krita-ai-diffusion-review-hero-en.webp',
    title: 'Krita AI Diffusion Review: Open-Source AI Painting Plugin',
    seoTitle: 'Krita AI Diffusion Review: Free Local AI Painting Plugin',
    intro: 'Krita AI Diffusion is an open-source plugin that adds generative fill, live painting and upscaling to the free painting program Krita. It runs diffusion image models, not language models, either on your own graphics card or on the paid online service at Interstice.cloud. This review is based on the Interstice website, its documentation and privacy policy, and the GitHub repository, all checked on 30 October 2026; PromptQuorum has not tested the plugin hands-on.',
    metaDescription: 'Krita AI Diffusion review: GPL-3.0 plugin for Krita with inpainting, live painting and upscaling on your own GPU or Interstice.cloud. Not tested.',
    twitterDescription: 'An open-source Krita plugin for selection-based AI image editing. What the sources confirm about local use, the paid cloud option, hardware and privacy, and what they do not.',
    audience: 'Digital painters and illustrators who use or consider Krita and want to know what the sources confirm about running AI image generation locally, what it needs and what the cloud option costs.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Krita AI Diffusion review',
    targetKeywords: [
      'krita ai diffusion review',
      'krita ai plugin',
      'interstice.cloud',
      'krita stable diffusion plugin',
      'local ai image generation krita',
      'krita generative fill',
      'krita ai diffusion requirements',
    ],
    current_models_mentioned: ['Flux 2', 'Z-Image', 'Stable Diffusion XL', 'Stable Diffusion 1.5', 'Illustrious'],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple silicon', 'Intel Arc', 'AMD GPU'],
    leadAnswerBlock: '**Krita AI Diffusion (version 1.53.0) is a GPL-3.0 plugin that brings selection-based generative fill, live painting and upscaling into Krita, and it can run on your own graphics card or on the paid Interstice.cloud service.** It generates images with diffusion models rather than text with a language model, and it needs Krita 5.2 or newer plus a model download for local use.',
    quickAnswerTop: {
      en: {
        question: 'Can I run Krita AI Diffusion entirely on my own computer?',
        answer: 'Yes: the installation guide offers a managed local server and a custom ComfyUI server next to the online service, and the privacy policy says offline use of the plugin involves no information exchange. The online service is optional and paid.',
        bullets: [
          'Fills, expands or removes content inside a selection, guided by an optional text prompt.',
          'Live painting renders your canvas as an AI image in real time while you draw.',
          'Control layers such as scribble, line art, depth and pose steer the result, and regions give separate prompts to separate areas.',
          'Custom presets let you bring your own checkpoints and LoRA files.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Krita AI Diffusion?', anchor: 'what-is-krita-ai-diffusion' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Plans and Cost', anchor: 'plans' },
      { label: 'Data Flow and Privacy', anchor: 'privacy' },
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
            text: 'Krita AI Diffusion is an open-source plugin that adds generative fill, live painting and upscaling with diffusion models to Krita, running on your own GPU or on the paid Interstice.cloud service.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as an AI brush inside a normal painting program: you select an area, describe what should appear there, and the generated pixels land on a layer you can keep editing.',
          },
        ],
        items: [
          'Maintenance: the latest release, 1.53.0, dates from 22 August 2026 and the main branch changed on 3 October 2026, so no stale-project warning applies.',
          'Scope: it generates images with diffusion models; it is not a language-model (LLM) app, and the PromptQuorum directory lists it among its image tools.',
          'Cost: the plugin and local use are free; the online service sells prepaid token packs with no subscription.',
          'Platforms: Windows, Linux and macOS, with Krita 5.2 or newer.',
          'Operator: the service is run by Cosmic Interstice UG in Mannheim, Germany; the plugin code is open under the GPL-3.0 license.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on [interstice.cloud](https://www.interstice.cloud), its documentation, privacy policy and imprint, and the GitHub repository, checked on 30 October 2026. PromptQuorum has not installed the plugin or generated images with it, so image quality and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-krita-ai-diffusion',
        title: 'What Is Krita AI Diffusion?',
        content: [
          '**Krita AI Diffusion is a plugin for Krita, the free painting program, that sends selections and sketches to a diffusion model and returns the result as a layer.** The README says its goals are precision and control, integration into normal editing workflows, and local, open, free operation, with cloud generation offered as a way to start without heavy investment.',
          '**The project and the service share one name on the web, and the sources describe them separately.** The GitHub repository belongs to the account Acly and lists interstice.cloud as its homepage, while the imprint names Cosmic Interstice UG as operator of Interstice.cloud; the sources do not spell out the legal relationship between the two. The plugin uses [ComfyUI](https://github.com/comfyanonymous/ComfyUI) as its backend.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Krita AI Diffusion is a ZIP file that you import into Krita; the local server and its models are installed afterwards from the plugin\'s Configure dialog.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          {
            Option: 'Plugin',
            'How to get it': 'ZIP from the [GitHub release page](https://github.com/Acly/krita-ai-diffusion/releases/latest)',
          },
          {
            Option: 'Krita',
            'How to get it': 'Version 5.2 or newer from [krita.org](https://krita.org/en/download)',
          },
          {
            Option: 'Installation guide',
            'How to get it': '[docs.interstice.cloud/installation](https://docs.interstice.cloud/installation)',
          },
          {
            Option: 'Website',
            'How to get it': '[interstice.cloud](https://www.interstice.cloud)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': '[interstice.cloud/privacy](https://www.interstice.cloud/privacy)',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/Acly/krita-ai-diffusion](https://github.com/Acly/krita-ai-diffusion), GPL-3.0 license',
          },
        ],
        note: 'Version reviewed: 1.53.0, published on 22 August 2026 per the [GitHub Releases page](https://github.com/Acly/krita-ai-diffusion/releases/latest), which marks it as the build for Krita 5; the newest change to the main branch was on 3 October 2026. No terminal is mentioned in the installation steps. The guide lists a 2.x plugin line for Krita 6 as coming soon. In Krita, import the ZIP via Tools > Scripts > Import Python Plugin from File; the guide advises the krita.org build of Krita, not the Windows Store or Steam version.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**Local generation needs a capable graphics card: the README recommends an NVIDIA card with at least 6 GB of VRAM, and the guide names an RTX 2060 or better.** The CPU also works, but both documents call it very slow.',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          {
            Item: 'Operating system',
            'What the sources say': 'Windows, Linux and macOS; on a Mac only Apple silicon (M1 to M5) is listed, and the README names macOS 14 or newer',
          },
          {
            Item: 'Graphics hardware',
            'What the sources say': 'NVIDIA via CUDA, AMD via ROCm, Intel Arc with 8 GB or more via XPU, Apple silicon via MPS; the README lists AMD and Intel for Windows and Linux',
          },
          {
            Item: 'Disk space',
            'What the sources say': 'At least 10 GB free for the managed server; models can take 50 GB or more depending on the optional packages chosen',
          },
          {
            Item: 'Models',
            'What the sources say': 'Chosen as workloads during the server install, or added later as individual packages; each workload downloads its recommended models',
          },
          {
            Item: 'Own ComfyUI server',
            'What the sources say': 'Optional: an existing local or remote ComfyUI server works if it has the required custom nodes and models listed in the ComfyUI setup guide',
          },
          {
            Item: 'Internet',
            'What the sources say': 'Needed for the downloads and for the online service; the privacy policy mentions offline use, but the installation guide does not describe it',
          },
        ],
        note: 'RAM requirements are not stated in the sources. Hardware lists are the maker\'s; PromptQuorum did not test which cards work in practice.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the README or the website; none has been independently tested.**',
        ],
        items: [
          '**Inpainting and live painting.** Selections drive generative fill, expand, add and remove, and Live Painting lets the AI interpret the canvas in real time.',
          '**Upscaling.** The README says images can be upscaled to 4k, 8k and beyond without running out of memory.',
          '**Models.** The README lists Flux 2, Z-Image, Stable Diffusion 1.5, Stable Diffusion XL and Illustrious, plus edit models that change an image from a text instruction; the online service page names Stable Diffusion 1.5 and XL.',
          '**Control.** ControlNet modes such as scribble, line art, Canny edge, pose, depth, normals and segmentation, IP-Adapter reference and style images, and regions that give each layer-defined area its own text.',
          '**Workflow.** A job queue, a browsable history of results and prompts, and custom presets with your own checkpoints, LoRA files and samplers.',
        ],
        note: 'Object selection and background removal are not part of this plugin; the README points to a separate plugin, Krita AI Tools, for segmentation.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Plans and Cost',
        content: [
          '**The plugin and local generation are free, and the optional online service sells prepaid token packs instead of a subscription.** The service prices below are in euros as the website states them.',
        ],
        columns: ['Option', 'What the sources list'],
        rows: [
          {
            Option: 'Local',
            'What the sources list': 'Free: the plugin under the GPL-3.0 license, run on your own hardware with a managed or custom server; the website calls it "100% free on local hardware"',
          },
          {
            Option: 'Online service',
            'What the sources list': 'Prepaid tokens that never expire: 5,000 for €10 or 15,000 for €28, plus some free tokens to try; a 1024 x 1024 image costs about 5 tokens (about €0.01) and a live-mode image about 1 token',
          },
        ],
        note: 'Figures as shown on the service page on 30 October 2026; actual token cost depends on resolution, strength and workflow and is shown in the plugin, and taxes were not checked.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The privacy policy, last updated on 4 April 2024, says offline use of the plugin involves no information exchange or collection, and it also says plugin use generates performance metrics that are not linked to personal information.** The sources do not reconcile the two statements or say whether that telemetry applies to local use.',
          'For the online service, the website says input images are used only to generate results and results are not stored, although temporary storage may be used for large images. The policy adds that personal data is stored in Germany, that data needed to generate images may be processed in other European countries, Canada or the US, that images and text prompts are excluded from service-improvement analysis, and that it does not state how long generated images are kept. Exports from the service carry an AI-generated metadata tag, and customers in the EU also get an invisible watermark.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results. The plugin code is public under the GPL-3.0 license, but PromptQuorum has not read it or inspected network traffic, and the policy is older than the current release.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Image quality and speed.** PromptQuorum did not generate images, time any hardware or compare results with other tools.',
          '**Model licenses.** The GPL-3.0 license covers the plugin code; each diffusion model has its own terms, including for commercial use, and we did not check any of them.',
          '**Hardware in practice.** The VRAM and card lists are the maker\'s; which cards run Flux 2 or the larger models comfortably is not stated.',
          '**Telemetry in local use.** Whether the performance metrics mentioned in the policy are sent when running locally is not explained.',
          '**Legal link between project and service.** The sources do not describe how the plugin author and Cosmic Interstice UG are related.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[ComfyUI](/power-local-llm/comfyui-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / GPL 3.0',
            'Key difference': 'A node-graph editor you operate directly; this plugin uses ComfyUI as its backend but hides it behind Krita',
          },
          {
            App: '[Invoke AI](/power-local-llm/invokeai-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Freemium / Apache 2.0',
            'Key difference': 'A separate web-based app with its own canvas rather than a plugin inside a painting program',
          },
          {
            App: '[Stable Diffusion WebUI Forge](/power-local-llm/stable-diffusion-forge-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'A parameter-heavy local web UI for generation, with no Krita integration',
          },
          {
            App: '[Draw Things](/power-local-llm/draw-things-review)',
            Platforms: 'macOS, iOS',
            'Price / license': 'Freemium / closed source',
            'Key difference': 'A native Apple app with its own canvas and inpainting, not tied to Krita',
          },
        ],
        note: 'These are same-category apps from the PromptQuorum directory; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Krita AI Diffusion the same as Interstice.cloud?',
            a: 'Not exactly: the plugin is the open-source part, while Interstice.cloud is the website and paid online service the plugin can connect to. The plugin\'s Configure dialog lets you pick the online service, a managed local server or your own ComfyUI server.',
          },
          {
            q: 'Does it work with Krita 6?',
            a: 'Not yet according to the installation guide: Krita 5.x uses the 1.x plugin line, and a 2.x line for Krita 6 is listed as coming soon. The 1.53.0 release notes recommend Krita 5.3.2.1.',
          },
          {
            q: 'Can I use my own models?',
            a: 'The README says you can customize presets with custom checkpoints, LoRA files and samplers, and the online service page mentions uploading your own LoRA models. We did not test either.',
          },
          {
            q: 'Do I need a GPU?',
            a: 'For comfortable local use, yes; the CPU works but is described as very slow. The online service needs no GPU of your own.',
          },
          {
            q: 'Is the output safe to use commercially?',
            a: 'The service page says users own the images they generate, but each diffusion model carries its own license for local use and the sources do not summarize them, so check the license of the model you pick.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Krita AI Diffusion is an actively maintained, open-source way to add generative fill and live painting to Krita, with a local option on your own GPU and a prepaid cloud option for machines without one. It suits painters who already work in Krita and accept a plugin install plus multi-gigabyte model downloads. The privacy statements are the maker\'s own and partly unreconciled, the policy predates the current release, Krita 6 is not yet supported, and image quality, speed and model licensing are untested here, so try it on a small selection and read the license of your chosen model before commercial use.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Interstice website](https://www.interstice.cloud) — plugin introduction and local-or-cloud description.',
          '[Interstice.cloud service](https://www.interstice.cloud/service) — features, token pricing and image handling.',
          '[Interstice.cloud privacy policy](https://www.interstice.cloud/privacy) — data handling, last updated 4 April 2024.',
          '[Interstice.cloud imprint](https://www.interstice.cloud/imprint) — operator Cosmic Interstice UG, Mannheim.',
          '[Installation guide](https://docs.interstice.cloud/installation) — requirements, backends and hardware.',
          '[Krita AI Diffusion on GitHub](https://github.com/Acly/krita-ai-diffusion) — README, GPL-3.0 license and commits.',
          '[Krita AI Diffusion releases](https://github.com/Acly/krita-ai-diffusion/releases) — version 1.53.0 and release notes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[ComfyUI Review](/power-local-llm/comfyui-review) — the node-based backend this plugin builds on.',
          '[Invoke AI Review](/power-local-llm/invokeai-review) — a creative image tool with its own canvas.',
          '[Stable Diffusion WebUI Forge Review](/power-local-llm/stable-diffusion-forge-review) — a fast local web UI for Stable Diffusion models.',
          '[Draw Things Review](/power-local-llm/draw-things-review) — on-device image generation for Mac and iPhone.',
          '[Image and Video Tools Compared](/power-local-llm/local-llm-images-video-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Krita AI Diffusion Review: Open-Source AI Painting Plugin',
      description: 'Review of Krita AI Diffusion, a GPL-3.0 Krita plugin for inpainting, live painting and upscaling with diffusion models: requirements, cost, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/krita-ai-diffusion-review',
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
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Digital painters and illustrators evaluating a local AI image generation plugin for Krita',
      },
      about: [
        { '@type': 'Thing', name: 'Krita AI Diffusion' },
        { '@type': 'Thing', name: 'Krita' },
        { '@type': 'Thing', name: 'Inpainting' },
        { '@type': 'Thing', name: 'Diffusion models' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/krita-ai-diffusion-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Krita AI Diffusion Review', item: 'https://www.promptquorum.com/power-local-llm/krita-ai-diffusion-review' },
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
    heroImage: '/images/krita-ai-diffusion-review-hero-de.webp',
    title: 'Krita AI Diffusion im Test: Quelloffenes KI-Mal-Plugin',
    seoTitle: 'Krita AI Diffusion im Test: Kostenloses lokales KI-Plugin',
    intro: 'Krita AI Diffusion ist ein quelloffenes Plugin, das dem kostenlosen Malprogramm Krita generatives Füllen, Live-Malen und Hochskalieren hinzufügt. Es führt Diffusionsmodelle für Bilder aus, keine Sprachmodelle, und zwar entweder auf Ihrer eigenen Grafikkarte oder im kostenpflichtigen Onlinedienst von Interstice.cloud. Dieser Test beruht auf der Interstice-Website, der Dokumentation, der Datenschutzerklärung und dem GitHub-Repository, alle am 30. Oktober 2026 geprüft; PromptQuorum hat das Plugin nicht selbst getestet.',
    metaDescription: 'Krita AI Diffusion im Test: GPL-3.0-Plugin für Krita mit Inpainting, Live-Malen und Upscaling auf eigener GPU oder Interstice.cloud. Nicht getestet.',
    twitterDescription: 'Ein quelloffenes Krita-Plugin für KI-Bildbearbeitung per Auswahl. Was die Quellen zu lokaler Nutzung, Cloud-Option, Hardware und Datenschutz bestätigen und was nicht.',
    audience: 'Digitale Maler und Illustratoren, die Krita nutzen oder erwägen und wissen wollen, was die Quellen zur lokalen KI-Bilderzeugung bestätigen, was sie voraussetzt und was die Cloud-Option kostet.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Krita AI Diffusion Test',
    targetKeywords: [
      'krita ai diffusion test',
      'krita ki plugin',
      'interstice.cloud',
      'krita stable diffusion plugin',
      'lokale ki bilderzeugung krita',
      'krita generatives füllen',
      'krita ai diffusion systemanforderungen',
    ],
    current_models_mentioned: ['Flux 2', 'Z-Image', 'Stable Diffusion XL', 'Stable Diffusion 1.5', 'Illustrious'],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple silicon', 'Intel Arc', 'AMD GPU'],
    leadAnswerBlock: '**Krita AI Diffusion (Version 1.53.0) ist ein Plugin unter GPL-3.0, das generatives Füllen per Auswahl, Live-Malen und Hochskalieren in Krita bringt und auf Ihrer eigenen Grafikkarte oder im kostenpflichtigen Dienst Interstice.cloud laufen kann.** Es erzeugt Bilder mit Diffusionsmodellen statt Text mit einem Sprachmodell und braucht für die lokale Nutzung Krita 5.2 oder neuer sowie einen Modell-Download.',
    quickAnswerTop: {
      de: {
        question: 'Kann ich Krita AI Diffusion komplett auf meinem eigenen Rechner betreiben?',
        answer: 'Ja: Die Installationsanleitung bietet neben dem Onlinedienst einen verwalteten lokalen Server und einen eigenen ComfyUI-Server an, und laut Datenschutzerklärung findet bei Offline-Nutzung des Plugins kein Informationsaustausch statt. Der Onlinedienst ist optional und kostenpflichtig.',
        bullets: [
          'Füllt, erweitert oder entfernt Inhalte innerhalb einer Auswahl, optional gesteuert durch einen Textprompt.',
          'Live-Malen stellt Ihre Leinwand beim Zeichnen in Echtzeit als KI-Bild dar.',
          'Kontrollebenen wie Skizze, Linienzeichnung, Tiefe und Pose steuern das Ergebnis, und Regionen geben getrennten Bereichen eigene Prompts.',
          'Eigene Voreinstellungen erlauben es, eigene Checkpoints und LoRA-Dateien mitzubringen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Krita AI Diffusion?', anchor: 'what-is-krita-ai-diffusion' },
      { label: 'Bezugsquellen', anchor: 'get-it' },
      { label: 'Voraussetzungen', anchor: 'requirements' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Tarife und Kosten', anchor: 'plans' },
      { label: 'Datenfluss und Datenschutz', anchor: 'privacy' },
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
            text: 'Krita AI Diffusion ist ein quelloffenes Plugin, das Krita um generatives Füllen, Live-Malen und Hochskalieren mit Diffusionsmodellen erweitert und auf Ihrer eigenen GPU oder im kostenpflichtigen Dienst Interstice.cloud läuft.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als KI-Pinsel in einem normalen Malprogramm vor: Sie wählen einen Bereich aus, beschreiben, was dort erscheinen soll, und die erzeugten Pixel landen auf einer Ebene, die Sie weiter bearbeiten können.',
          },
        ],
        items: [
          'Pflege: Das neueste Release, 1.53.0, stammt vom 22. August 2026 und der Hauptzweig wurde am 3. Oktober 2026 geändert, eine Warnung vor einem veralteten Projekt entfällt daher.',
          'Umfang: Es erzeugt Bilder mit Diffusionsmodellen und ist keine App für Sprachmodelle (LLM); das PromptQuorum-Verzeichnis führt es unter seinen Bildwerkzeugen.',
          'Kosten: Das Plugin und die lokale Nutzung sind kostenlos; der Onlinedienst verkauft vorausbezahlte Token-Pakete ohne Abonnement.',
          'Plattformen: Windows, Linux und macOS, mit Krita 5.2 oder neuer.',
          'Betreiber: Der Dienst wird von der Cosmic Interstice UG in Mannheim betrieben; der Plugin-Code ist unter der GPL-3.0-Lizenz offen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test beruht auf [interstice.cloud](https://www.interstice.cloud), der Dokumentation, der Datenschutzerklärung und dem Impressum sowie dem GitHub-Repository, geprüft am 30. Oktober 2026. PromptQuorum hat das Plugin weder installiert noch Bilder damit erzeugt, daher werden Bildqualität und Geschwindigkeit nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-krita-ai-diffusion',
        title: 'Was ist Krita AI Diffusion?',
        content: [
          '**Krita AI Diffusion ist ein Plugin für das kostenlose Malprogramm Krita, das Auswahlen und Skizzen an ein Diffusionsmodell schickt und das Ergebnis als Ebene zurückgibt.** Laut README sind die Ziele Präzision und Kontrolle, Einbindung in gewohnte Bearbeitungsabläufe sowie lokaler, offener und kostenloser Betrieb, wobei die Cloud-Erzeugung den Einstieg ohne große Investition erleichtern soll.',
          '**Projekt und Dienst teilen sich im Web einen Namen, und die Quellen beschreiben sie getrennt.** Das GitHub-Repository gehört dem Konto Acly und nennt interstice.cloud als Homepage, während das Impressum die Cosmic Interstice UG als Betreiberin von Interstice.cloud nennt; das rechtliche Verhältnis beider legen die Quellen nicht dar. Das Plugin nutzt [ComfyUI](https://github.com/comfyanonymous/ComfyUI) als Backend.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Krita AI Diffusion ist eine ZIP-Datei, die Sie in Krita importieren; den lokalen Server und seine Modelle installieren Sie anschließend über den Konfigurationsdialog des Plugins.**',
        ],
        columns: ['Option', 'Bezugsquelle'],
        rows: [
          {
            Option: 'Plugin',
            'Bezugsquelle': 'ZIP von der [GitHub-Release-Seite](https://github.com/Acly/krita-ai-diffusion/releases/latest)',
          },
          {
            Option: 'Krita',
            'Bezugsquelle': 'Version 5.2 oder neuer von [krita.org](https://krita.org/en/download)',
          },
          {
            Option: 'Installationsanleitung',
            'Bezugsquelle': '[docs.interstice.cloud/installation](https://docs.interstice.cloud/installation)',
          },
          {
            Option: 'Website',
            'Bezugsquelle': '[interstice.cloud](https://www.interstice.cloud)',
          },
          {
            Option: 'Datenschutzerklärung',
            'Bezugsquelle': '[interstice.cloud/privacy](https://www.interstice.cloud/privacy)',
          },
          {
            Option: 'Quellcode',
            'Bezugsquelle': '[github.com/Acly/krita-ai-diffusion](https://github.com/Acly/krita-ai-diffusion), GPL-3.0-Lizenz',
          },
        ],
        note: 'Getestete Version: 1.53.0, laut [GitHub-Releases-Seite](https://github.com/Acly/krita-ai-diffusion/releases/latest) am 22. August 2026 veröffentlicht und dort als Build für Krita 5 gekennzeichnet; die jüngste Änderung am Hauptzweig war am 3. Oktober 2026. In den Installationsschritten wird kein Terminal erwähnt. Eine 2.x-Plugin-Linie für Krita 6 nennt die Anleitung als demnächst verfügbar. In Krita importieren Sie die ZIP-Datei über Werkzeuge > Skripte > Python-Plugin aus Datei importieren; die Anleitung rät zur Krita-Version von krita.org, nicht zu der aus dem Windows Store oder von Steam.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Voraussetzungen',
        content: [
          '**Für die lokale Erzeugung braucht es eine leistungsfähige Grafikkarte: Die README empfiehlt eine NVIDIA-Karte mit mindestens 6 GB VRAM, und die Anleitung nennt eine RTX 2060 oder besser.** Auch die CPU funktioniert, beide Dokumente nennen sie aber sehr langsam.',
        ],
        columns: ['Punkt', 'Was die Quellen sagen'],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Was die Quellen sagen': 'Windows, Linux und macOS; bei Macs ist nur Apple silicon (M1 bis M5) aufgeführt, und die README nennt macOS 14 oder neuer',
          },
          {
            Punkt: 'Grafikhardware',
            'Was die Quellen sagen': 'NVIDIA über CUDA, AMD über ROCm, Intel Arc mit 8 GB oder mehr über XPU, Apple silicon über MPS; die README führt AMD und Intel für Windows und Linux auf',
          },
          {
            Punkt: 'Speicherplatz',
            'Was die Quellen sagen': 'Mindestens 10 GB frei für den verwalteten Server; Modelle können je nach gewählten optionalen Paketen 50 GB oder mehr belegen',
          },
          {
            Punkt: 'Modelle',
            'Was die Quellen sagen': 'Werden bei der Server-Installation als Workloads gewählt oder später als einzelne Pakete ergänzt; jeder Workload lädt seine empfohlenen Modelle herunter',
          },
          {
            Punkt: 'Eigener ComfyUI-Server',
            'Was die Quellen sagen': 'Optional: Ein vorhandener lokaler oder entfernter ComfyUI-Server funktioniert, wenn er die im ComfyUI-Leitfaden genannten benutzerdefinierten Nodes und Modelle hat',
          },
          {
            Punkt: 'Internet',
            'Was die Quellen sagen': 'Nötig für die Downloads und für den Onlinedienst; die Datenschutzerklärung erwähnt Offline-Nutzung, die Installationsanleitung beschreibt sie aber nicht',
          },
        ],
        note: 'Anforderungen an den Arbeitsspeicher nennen die Quellen nicht. Die Hardwarelisten stammen vom Hersteller; PromptQuorum hat nicht geprüft, welche Karten in der Praxis funktionieren.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alles Folgende stammt aus der README oder der Website; nichts davon wurde unabhängig getestet.**',
        ],
        items: [
          '**Inpainting und Live-Malen.** Auswahlen steuern generatives Füllen, Erweitern, Hinzufügen und Entfernen, und beim Live-Malen interpretiert die KI die Leinwand in Echtzeit.',
          '**Hochskalieren.** Laut README lassen sich Bilder auf 4k, 8k und darüber hinaus hochskalieren, ohne dass der Speicher ausgeht.',
          '**Modelle.** Die README nennt Flux 2, Z-Image, Stable Diffusion 1.5, Stable Diffusion XL und Illustrious sowie Edit-Modelle, die ein Bild nach Textanweisung ändern; die Seite des Onlinedienstes nennt Stable Diffusion 1.5 und XL.',
          '**Kontrolle.** ControlNet-Modi wie Skizze, Linienzeichnung, Canny-Kanten, Pose, Tiefe, Normalen und Segmentierung, IP-Adapter für Referenz- und Stilbilder sowie Regionen, die jedem per Ebene definierten Bereich einen eigenen Text geben.',
          '**Arbeitsablauf.** Eine Job-Warteschlange, ein durchsuchbarer Verlauf von Ergebnissen und Prompts sowie eigene Voreinstellungen mit eigenen Checkpoints, LoRA-Dateien und Samplern.',
        ],
        note: 'Objektauswahl und Hintergrundentfernung gehören nicht zu diesem Plugin; die README verweist für die Segmentierung auf ein separates Plugin, Krita AI Tools.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Tarife und Kosten',
        content: [
          '**Das Plugin und die lokale Erzeugung sind kostenlos, und der optionale Onlinedienst verkauft vorausbezahlte Token-Pakete statt eines Abonnements.** Die Preise des Dienstes stehen unten in Euro, wie die Website sie nennt.',
        ],
        columns: ['Option', 'Was die Quellen nennen'],
        rows: [
          {
            Option: 'Lokal',
            'Was die Quellen nennen': 'Kostenlos: das Plugin unter der GPL-3.0-Lizenz, betrieben auf eigener Hardware mit einem verwalteten oder eigenen Server; die Website nennt es „100 % kostenlos auf lokaler Hardware“',
          },
          {
            Option: 'Onlinedienst',
            'Was die Quellen nennen': 'Vorausbezahlte Token ohne Ablauf: 5.000 für 10 € oder 15.000 für 28 €, dazu einige kostenlose Token zum Ausprobieren; ein Bild mit 1024 x 1024 kostet etwa 5 Token (etwa 0,01 €) und ein Bild im Live-Modus etwa 1 Token',
          },
        ],
        note: 'Angaben laut Dienstseite am 30. Oktober 2026; die tatsächlichen Token-Kosten hängen von Auflösung, Stärke und Workflow ab und werden im Plugin angezeigt, Steuern wurden nicht geprüft.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Die Datenschutzerklärung, zuletzt am 4. April 2024 aktualisiert, sagt, dass bei Offline-Nutzung des Plugins keine Informationen ausgetauscht oder erhoben werden, und sie sagt zugleich, dass die Nutzung des Plugins Leistungskennzahlen erzeugt, die nicht mit personenbezogenen Daten verknüpft sind.** Die Quellen bringen beide Aussagen nicht in Einklang und sagen nicht, ob diese Telemetrie auch bei lokaler Nutzung gilt.',
          'Zum Onlinedienst sagt die Website, Eingabebilder würden nur zur Erzeugung der Ergebnisse verwendet und Ergebnisse nicht gespeichert, wobei bei großen Bildern ein Zwischenspeicher genutzt werden könne. Die Erklärung ergänzt, dass personenbezogene Daten in Deutschland gespeichert werden, dass die zur Bilderzeugung nötigen Daten in anderen europäischen Ländern, in Kanada oder den USA verarbeitet werden können, dass Bilder und Text-Prompts von der Analyse zur Dienstverbesserung ausgenommen sind und dass sie nicht angibt, wie lange erzeugte Bilder aufbewahrt werden. Exporte aus dem Dienst tragen ein Metadaten-Tag „KI-generiert“, und Kunden in der EU erhalten zusätzlich ein unsichtbares Wasserzeichen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Erklärungen des Herstellers, keine Prüfergebnisse. Der Plugin-Code ist unter der GPL-3.0-Lizenz öffentlich, aber PromptQuorum hat ihn nicht gelesen und den Netzwerkverkehr nicht untersucht, und die Erklärung ist älter als das aktuelle Release.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Bildqualität und Geschwindigkeit.** PromptQuorum hat keine Bilder erzeugt, keine Hardware vermessen und keine Ergebnisse mit anderen Werkzeugen verglichen.',
          '**Modelllizenzen.** Die GPL-3.0-Lizenz gilt für den Plugin-Code; jedes Diffusionsmodell hat eigene Bedingungen, auch für die kommerzielle Nutzung, und wir haben keine davon geprüft.',
          '**Hardware in der Praxis.** Die VRAM- und Kartenlisten stammen vom Hersteller; welche Karten Flux 2 oder die größeren Modelle komfortabel ausführen, steht nirgends.',
          '**Telemetrie bei lokaler Nutzung.** Ob die in der Erklärung erwähnten Leistungskennzahlen bei lokalem Betrieb gesendet werden, wird nicht erläutert.',
          '**Rechtliche Verbindung von Projekt und Dienst.** Die Quellen beschreiben nicht, in welchem Verhältnis der Plugin-Autor und die Cosmic Interstice UG stehen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          {
            App: '[ComfyUI](/de/power-local-llm/comfyui-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / GPL 3.0',
            Hauptunterschied: 'Ein Node-Graph-Editor, den Sie direkt bedienen; dieses Plugin nutzt ComfyUI als Backend, versteckt es aber hinter Krita',
          },
          {
            App: '[Invoke AI](/de/power-local-llm/invokeai-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Freemium / Apache 2.0',
            Hauptunterschied: 'Eine eigene webbasierte App mit eigener Leinwand statt eines Plugins in einem Malprogramm',
          },
          {
            App: '[Stable Diffusion WebUI Forge](/de/power-local-llm/stable-diffusion-forge-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / AGPL-3.0',
            Hauptunterschied: 'Eine parameterreiche lokale Web-Oberfläche zur Bilderzeugung, ohne Krita-Anbindung',
          },
          {
            App: '[Draw Things](/de/power-local-llm/draw-things-review)',
            Plattformen: 'macOS, iOS',
            'Preis / Lizenz': 'Freemium / Closed Source',
            Hauptunterschied: 'Eine native Apple-App mit eigener Leinwand und Inpainting, nicht an Krita gebunden',
          },
        ],
        note: 'Dies sind Apps derselben Kategorie aus dem PromptQuorum-Verzeichnis; prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Krita AI Diffusion dasselbe wie Interstice.cloud?',
            a: 'Nicht ganz: Das Plugin ist der quelloffene Teil, Interstice.cloud dagegen die Website und der kostenpflichtige Onlinedienst, mit dem sich das Plugin verbinden kann. Im Konfigurationsdialog des Plugins wählen Sie den Onlinedienst, einen verwalteten lokalen Server oder Ihren eigenen ComfyUI-Server.',
          },
          {
            q: 'Funktioniert es mit Krita 6?',
            a: 'Laut Installationsanleitung noch nicht: Krita 5.x nutzt die 1.x-Plugin-Linie, und eine 2.x-Linie für Krita 6 ist als demnächst verfügbar aufgeführt. Die Release-Notizen zu 1.53.0 empfehlen Krita 5.3.2.1.',
          },
          {
            q: 'Kann ich eigene Modelle verwenden?',
            a: 'Laut README lassen sich Voreinstellungen mit eigenen Checkpoints, LoRA-Dateien und Samplern anpassen, und die Seite des Onlinedienstes erwähnt das Hochladen eigener LoRA-Modelle. Wir haben beides nicht getestet.',
          },
          {
            q: 'Brauche ich eine GPU?',
            a: 'Für komfortable lokale Nutzung ja; die CPU funktioniert, wird aber als sehr langsam beschrieben. Der Onlinedienst braucht keine eigene GPU.',
          },
          {
            q: 'Ist die Ausgabe kommerziell nutzbar?',
            a: 'Die Dienstseite sagt, Nutzer besäßen die von ihnen erzeugten Bilder, doch jedes Diffusionsmodell hat für die lokale Nutzung eine eigene Lizenz, die die Quellen nicht zusammenfassen; prüfen Sie daher die Lizenz des gewählten Modells.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Krita AI Diffusion ist ein aktiv gepflegter, quelloffener Weg, Krita um generatives Füllen und Live-Malen zu erweitern, mit einer lokalen Option auf der eigenen GPU und einer vorausbezahlten Cloud-Option für Rechner ohne passende Karte. Es eignet sich für Maler, die bereits in Krita arbeiten und eine Plugin-Installation samt mehrere Gigabyte großer Modell-Downloads akzeptieren. Die Datenschutzangaben stammen vom Hersteller und sind teils nicht in Einklang gebracht, die Erklärung ist älter als das aktuelle Release, Krita 6 wird noch nicht unterstützt, und Bildqualität, Geschwindigkeit und Modelllizenzen sind hier ungetestet; probieren Sie es daher an einer kleinen Auswahl aus und lesen Sie vor kommerzieller Nutzung die Lizenz des gewählten Modells.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Interstice-Website](https://www.interstice.cloud) — Vorstellung des Plugins und Beschreibung von lokal oder Cloud.',
          '[Dienst Interstice.cloud](https://www.interstice.cloud/service) — Funktionen, Token-Preise und Umgang mit Bildern.',
          '[Datenschutzerklärung von Interstice.cloud](https://www.interstice.cloud/privacy) — Datenverarbeitung, zuletzt aktualisiert am 4. April 2024.',
          '[Impressum von Interstice.cloud](https://www.interstice.cloud/imprint) — Betreiberin Cosmic Interstice UG, Mannheim.',
          '[Installationsanleitung](https://docs.interstice.cloud/installation) — Voraussetzungen, Backends und Hardware.',
          '[Krita AI Diffusion auf GitHub](https://github.com/Acly/krita-ai-diffusion) — README, GPL-3.0-Lizenz und Commits.',
          '[Krita-AI-Diffusion-Releases](https://github.com/Acly/krita-ai-diffusion/releases) — Version 1.53.0 und Release-Notizen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[ComfyUI im Test](/de/power-local-llm/comfyui-review) — das knotenbasierte Backend, auf dem dieses Plugin aufbaut.',
          '[Invoke AI im Test](/de/power-local-llm/invokeai-review) — ein kreatives Bildwerkzeug mit eigener Leinwand.',
          '[Stable Diffusion WebUI Forge im Test](/de/power-local-llm/stable-diffusion-forge-review) — eine schnelle lokale Web-Oberfläche für Stable-Diffusion-Modelle.',
          '[Draw Things im Test](/de/power-local-llm/draw-things-review) — Bilderzeugung auf dem Gerät für Mac und iPhone.',
          '[Bild- und Videowerkzeuge im Vergleich](/de/power-local-llm/local-llm-images-video-compared) — der Kategorievergleich, zu dem dieser Test gehört.',
          '[Verzeichnis für lokale LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
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
    heroImage: '/images/krita-ai-diffusion-review-hero-fr.webp',
    title: 'Test de Krita AI Diffusion : plugin de peinture IA open source',
    seoTitle: 'Test de Krita AI Diffusion : plugin de peinture IA local',
    intro: 'Krita AI Diffusion est un plugin open source qui ajoute le remplissage génératif, la peinture en direct et l’upscaling au logiciel de peinture gratuit Krita. Il exécute des modèles de diffusion d’images, et non des modèles de langage, soit sur votre propre carte graphique, soit sur le service en ligne payant d’Interstice.cloud. Ce test s’appuie sur le site d’Interstice, sa documentation, sa politique de confidentialité et le dépôt GitHub, tous consultés le 30 octobre 2026 ; PromptQuorum n’a pas testé le plugin.',
    metaDescription: 'Test de Krita AI Diffusion : plugin GPL-3.0 pour Krita avec inpainting, peinture en direct et upscaling sur votre GPU ou Interstice.cloud. Non testé.',
    twitterDescription: 'Un plugin Krita open source pour retoucher des images par IA à partir d’une sélection. Ce que les sources confirment sur l’usage local, le cloud payant, le matériel et la confidentialité, et ce qu’elles ne disent pas.',
    audience: 'Peintres numériques et illustrateurs qui utilisent ou envisagent Krita et veulent savoir ce que les sources confirment sur la génération d’images IA en local, ce qu’elle exige et ce que coûte l’option cloud.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Test Krita AI Diffusion',
    targetKeywords: [
      'test krita ai diffusion',
      'plugin ia krita',
      'interstice.cloud',
      'plugin krita stable diffusion',
      'génération d’images ia locale krita',
      'remplissage génératif krita',
      'krita ai diffusion configuration requise',
    ],
    current_models_mentioned: ['Flux 2', 'Z-Image', 'Stable Diffusion XL', 'Stable Diffusion 1.5', 'Illustrious'],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple silicon', 'Intel Arc', 'AMD GPU'],
    leadAnswerBlock: '**Krita AI Diffusion (version 1.53.0) est un plugin sous licence GPL-3.0 qui apporte à Krita le remplissage génératif par sélection, la peinture en direct et l’upscaling, et il peut fonctionner sur votre propre carte graphique ou sur le service payant Interstice.cloud.** Il génère des images avec des modèles de diffusion plutôt que du texte avec un modèle de langage, et il exige Krita 5.2 ou plus récent ainsi qu’un téléchargement de modèles pour l’usage local.',
    quickAnswerTop: {
      fr: {
        question: 'Puis-je faire tourner Krita AI Diffusion entièrement sur mon ordinateur ?',
        answer: 'Oui : le guide d’installation propose, à côté du service en ligne, un serveur local géré et un serveur ComfyUI personnalisé, et la politique de confidentialité indique qu’une utilisation hors ligne du plugin n’implique aucun échange d’informations. Le service en ligne est facultatif et payant.',
        bullets: [
          'Remplit, étend ou supprime du contenu dans une sélection, guidé par un prompt texte facultatif.',
          'La peinture en direct restitue votre toile sous forme d’image IA en temps réel pendant que vous dessinez.',
          'Des calques de contrôle comme le croquis, le trait, la profondeur et la pose orientent le résultat, et les régions donnent un prompt distinct à chaque zone.',
          'Des préréglages personnalisés permettent d’utiliser vos propres checkpoints et fichiers LoRA.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Krita AI Diffusion ?', anchor: 'what-is-krita-ai-diffusion' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Offres et coût', anchor: 'plans' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
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
            text: 'Krita AI Diffusion est un plugin open source qui ajoute à Krita le remplissage génératif, la peinture en direct et l’upscaling avec des modèles de diffusion, sur votre propre GPU ou sur le service payant Interstice.cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-le comme un pinceau IA dans un logiciel de peinture ordinaire : vous sélectionnez une zone, décrivez ce qui doit y apparaître, et les pixels générés arrivent sur un calque que vous pouvez continuer à retoucher.',
          },
        ],
        items: [
          'Maintenance : la dernière version, 1.53.0, date du 22 août 2026 et la branche principale a changé le 3 octobre 2026, donc aucun avertissement de projet abandonné ne s’applique.',
          'Périmètre : il génère des images avec des modèles de diffusion ; ce n’est pas une appli de modèles de langage (LLM), et l’annuaire PromptQuorum la classe parmi ses outils d’image.',
          'Coût : le plugin et l’usage local sont gratuits ; le service en ligne vend des packs de jetons prépayés, sans abonnement.',
          'Plateformes : Windows, Linux et macOS, avec Krita 5.2 ou plus récent.',
          'Éditeur : le service est exploité par Cosmic Interstice UG à Mannheim, en Allemagne ; le code du plugin est ouvert sous licence GPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur [interstice.cloud](https://www.interstice.cloud), sa documentation, sa politique de confidentialité et ses mentions légales, ainsi que sur le dépôt GitHub, consultés le 30 octobre 2026. PromptQuorum n’a ni installé le plugin ni généré d’images avec lui ; la qualité d’image et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-krita-ai-diffusion',
        title: 'Qu’est-ce que Krita AI Diffusion ?',
        content: [
          '**Krita AI Diffusion est un plugin pour Krita, le logiciel de peinture gratuit, qui envoie des sélections et des croquis à un modèle de diffusion et renvoie le résultat sous forme de calque.** Selon le README, ses objectifs sont la précision et le contrôle, l’intégration aux flux de retouche habituels, et un fonctionnement local, ouvert et gratuit, la génération dans le cloud servant à démarrer sans gros investissement.',
          '**Le projet et le service portent le même nom sur le web, et les sources les décrivent séparément.** Le dépôt GitHub appartient au compte Acly et indique interstice.cloud comme page d’accueil, tandis que les mentions légales désignent Cosmic Interstice UG comme exploitant d’Interstice.cloud ; les sources n’expliquent pas le lien juridique entre les deux. Le plugin utilise [ComfyUI](https://github.com/comfyanonymous/ComfyUI) comme moteur.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Krita AI Diffusion est un fichier ZIP que vous importez dans Krita ; le serveur local et ses modèles s’installent ensuite depuis la boîte de dialogue de configuration du plugin.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          {
            Option: 'Plugin',
            'Comment l’obtenir': 'ZIP sur la [page des versions GitHub](https://github.com/Acly/krita-ai-diffusion/releases/latest)',
          },
          {
            Option: 'Krita',
            'Comment l’obtenir': 'Version 5.2 ou plus récente sur [krita.org](https://krita.org/en/download)',
          },
          {
            Option: 'Guide d’installation',
            'Comment l’obtenir': '[docs.interstice.cloud/installation](https://docs.interstice.cloud/installation)',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[interstice.cloud](https://www.interstice.cloud)',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': '[interstice.cloud/privacy](https://www.interstice.cloud/privacy)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/Acly/krita-ai-diffusion](https://github.com/Acly/krita-ai-diffusion), licence GPL-3.0',
          },
        ],
        note: 'Version examinée : 1.53.0, publiée le 22 août 2026 selon la [page des versions GitHub](https://github.com/Acly/krita-ai-diffusion/releases/latest), qui l’indique comme build pour Krita 5 ; la dernière modification de la branche principale date du 3 octobre 2026. Les étapes d’installation ne mentionnent aucun terminal. Le guide annonce une branche de plugin 2.x pour Krita 6 comme bientôt disponible. Dans Krita, importez le ZIP via Outils > Scripts > Importer un plugin Python depuis un fichier ; le guide conseille la version de Krita de krita.org, pas celle du Windows Store ou de Steam.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Configuration requise',
        content: [
          '**La génération locale exige une carte graphique performante : le README recommande une carte NVIDIA avec au moins 6 Go de VRAM, et le guide cite une RTX 2060 ou mieux.** Le processeur fonctionne aussi, mais les deux documents le jugent très lent.',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          {
            'Élément': 'Système d’exploitation',
            'Ce que disent les sources': 'Windows, Linux et macOS ; sur Mac, seul Apple silicon (M1 à M5) est indiqué, et le README mentionne macOS 14 ou plus récent',
          },
          {
            'Élément': 'Matériel graphique',
            'Ce que disent les sources': 'NVIDIA via CUDA, AMD via ROCm, Intel Arc avec 8 Go ou plus via XPU, Apple silicon via MPS ; le README indique AMD et Intel pour Windows et Linux',
          },
          {
            'Élément': 'Espace disque',
            'Ce que disent les sources': 'Au moins 10 Go libres pour le serveur géré ; les modèles peuvent occuper 50 Go ou plus selon les paquets facultatifs choisis',
          },
          {
            'Élément': 'Modèles',
            'Ce que disent les sources': 'Choisis comme charges de travail lors de l’installation du serveur, ou ajoutés plus tard comme paquets individuels ; chaque charge de travail télécharge ses modèles recommandés',
          },
          {
            'Élément': 'Serveur ComfyUI personnel',
            'Ce que disent les sources': 'Facultatif : un serveur ComfyUI existant, local ou distant, convient s’il possède les nœuds personnalisés et les modèles listés dans le guide de configuration de ComfyUI',
          },
          {
            'Élément': 'Internet',
            'Ce que disent les sources': 'Nécessaire pour les téléchargements et pour le service en ligne ; la politique de confidentialité évoque l’usage hors ligne, mais le guide d’installation ne le décrit pas',
          },
        ],
        note: 'La mémoire vive nécessaire n’est pas indiquée dans les sources. Les listes de matériel viennent de l’éditeur ; PromptQuorum n’a pas vérifié quelles cartes fonctionnent en pratique.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du README ou du site web ; aucun n’a été testé de façon indépendante.**',
        ],
        items: [
          '**Inpainting et peinture en direct.** Les sélections pilotent le remplissage génératif, l’extension, l’ajout et la suppression, et la peinture en direct laisse l’IA interpréter la toile en temps réel.',
          '**Upscaling.** Le README indique que les images peuvent être agrandies en 4k, 8k et au-delà sans manquer de mémoire.',
          '**Modèles.** Le README cite Flux 2, Z-Image, Stable Diffusion 1.5, Stable Diffusion XL et Illustrious, ainsi que des modèles d’édition qui modifient une image à partir d’une instruction texte ; la page du service en ligne cite Stable Diffusion 1.5 et XL.',
          '**Contrôle.** Des modes ControlNet comme le croquis, le trait, les contours Canny, la pose, la profondeur, les normales et la segmentation, des images de référence et de style via IP-Adapter, et des régions qui donnent à chaque zone définie par calque son propre texte.',
          '**Flux de travail.** Une file de tâches, un historique consultable des résultats et des prompts, et des préréglages personnalisés avec vos propres checkpoints, fichiers LoRA et échantillonneurs.',
        ],
        note: 'La sélection d’objets et la suppression d’arrière-plan ne font pas partie de ce plugin ; le README renvoie à un plugin distinct, Krita AI Tools, pour la segmentation.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Offres et coût',
        content: [
          '**Le plugin et la génération locale sont gratuits, et le service en ligne facultatif vend des packs de jetons prépayés plutôt qu’un abonnement.** Les prix du service ci-dessous sont en euros, tels que le site les indique.',
        ],
        columns: ['Option', 'Ce que citent les sources'],
        rows: [
          {
            Option: 'Local',
            'Ce que citent les sources': 'Gratuit : le plugin sous licence GPL-3.0, exécuté sur votre matériel avec un serveur géré ou personnalisé ; le site parle de « 100 % gratuit sur matériel local »',
          },
          {
            Option: 'Service en ligne',
            'Ce que citent les sources': 'Jetons prépayés sans expiration : 5 000 pour 10 € ou 15 000 pour 28 €, plus quelques jetons gratuits pour essayer ; une image de 1024 x 1024 coûte environ 5 jetons (environ 0,01 €) et une image en mode direct environ 1 jeton',
          },
        ],
        note: 'Chiffres tels qu’affichés sur la page du service le 30 octobre 2026 ; le coût réel en jetons dépend de la résolution, de la force et du flux de travail et s’affiche dans le plugin ; les taxes n’ont pas été vérifiées.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La politique de confidentialité, mise à jour pour la dernière fois le 4 avril 2024, indique qu’une utilisation hors ligne du plugin n’implique aucun échange ni collecte d’informations, et elle précise aussi que l’utilisation du plugin génère des mesures de performance non liées aux informations personnelles.** Les sources ne concilient pas ces deux affirmations et ne disent pas si cette télémétrie s’applique à l’usage local.',
          'Pour le service en ligne, le site indique que les images d’entrée servent uniquement à produire les résultats et que les résultats ne sont pas conservés, un stockage temporaire pouvant toutefois servir pour les grandes images. La politique ajoute que les données personnelles sont stockées en Allemagne, que les données nécessaires à la génération peuvent être traitées dans d’autres pays européens, au Canada ou aux États-Unis, que les images et les prompts texte sont exclus de l’analyse d’amélioration du service, et qu’elle n’indique pas combien de temps les images générées sont conservées. Les exports du service portent une balise de métadonnées « généré par IA », et les clients de l’UE reçoivent en plus un filigrane invisible.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Il s’agit de déclarations de l’éditeur, pas de résultats d’audit. Le code du plugin est public sous licence GPL-3.0, mais PromptQuorum ne l’a pas lu ni inspecté le trafic réseau, et la politique est plus ancienne que la version actuelle.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité d’image et vitesse.** PromptQuorum n’a pas généré d’images, mesuré de matériel ni comparé les résultats à d’autres outils.',
          '**Licences des modèles.** La licence GPL-3.0 couvre le code du plugin ; chaque modèle de diffusion a ses propres conditions, y compris pour l’usage commercial, et nous n’en avons vérifié aucune.',
          '**Matériel en pratique.** Les listes de VRAM et de cartes viennent de l’éditeur ; les sources ne disent pas quelles cartes exécutent confortablement Flux 2 ou les modèles plus gros.',
          '**Télémétrie en usage local.** La politique ne précise pas si les mesures de performance qu’elle mentionne sont envoyées lors d’un fonctionnement local.',
          '**Lien juridique entre projet et service.** Les sources ne décrivent pas la relation entre l’auteur du plugin et Cosmic Interstice UG.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence principale'],
        rows: [
          {
            Appli: '[ComfyUI](/fr/power-local-llm/comfyui-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / GPL 3.0',
            'Différence principale': 'Un éditeur de graphes de nœuds que l’on manipule directement ; ce plugin utilise ComfyUI comme moteur mais le masque derrière Krita',
          },
          {
            Appli: '[Invoke AI](/fr/power-local-llm/invokeai-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Freemium / Apache 2.0',
            'Différence principale': 'Une appli web distincte avec sa propre toile, et non un plugin dans un logiciel de peinture',
          },
          {
            Appli: '[Stable Diffusion WebUI Forge](/fr/power-local-llm/stable-diffusion-forge-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence principale': 'Une interface web locale riche en paramètres pour la génération, sans intégration à Krita',
          },
          {
            Appli: '[Draw Things](/fr/power-local-llm/draw-things-review)',
            Plateformes: 'macOS, iOS',
            'Prix / licence': 'Freemium / code fermé',
            'Différence principale': 'Une appli native Apple avec sa propre toile et l’inpainting, non liée à Krita',
          },
        ],
        note: 'Ce sont des applis de la même catégorie issues de l’annuaire PromptQuorum ; vérifiez le prix, la licence et les plateformes actuels de chacune sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Krita AI Diffusion est-il la même chose qu’Interstice.cloud ?',
            a: 'Pas exactement : le plugin est la partie open source, alors qu’Interstice.cloud est le site et le service en ligne payant auquel le plugin peut se connecter. La boîte de dialogue de configuration du plugin permet de choisir le service en ligne, un serveur local géré ou votre propre serveur ComfyUI.',
          },
          {
            q: 'Fonctionne-t-il avec Krita 6 ?',
            a: 'Pas encore selon le guide d’installation : Krita 5.x utilise la branche de plugin 1.x, et une branche 2.x pour Krita 6 est annoncée comme bientôt disponible. Les notes de version 1.53.0 recommandent Krita 5.3.2.1.',
          },
          {
            q: 'Puis-je utiliser mes propres modèles ?',
            a: 'Le README indique que vous pouvez personnaliser les préréglages avec vos checkpoints, fichiers LoRA et échantillonneurs, et la page du service en ligne mentionne le téléversement de vos propres modèles LoRA. Nous n’avons testé ni l’un ni l’autre.',
          },
          {
            q: 'Ai-je besoin d’un GPU ?',
            a: 'Pour un usage local confortable, oui ; le processeur fonctionne mais est décrit comme très lent. Le service en ligne n’exige pas de GPU de votre côté.',
          },
          {
            q: 'Le résultat est-il utilisable commercialement ?',
            a: 'La page du service indique que les utilisateurs possèdent les images qu’ils génèrent, mais chaque modèle de diffusion a sa propre licence pour l’usage local et les sources ne les résument pas : vérifiez donc la licence du modèle choisi.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Krita AI Diffusion est un moyen open source et activement maintenu d’ajouter le remplissage génératif et la peinture en direct à Krita, avec une option locale sur votre GPU et une option cloud prépayée pour les machines qui n’en ont pas. Il convient aux peintres qui travaillent déjà dans Krita et acceptent l’installation d’un plugin et des téléchargements de modèles de plusieurs gigaoctets. Les déclarations de confidentialité sont celles de l’éditeur et en partie non conciliées, la politique est antérieure à la version actuelle, Krita 6 n’est pas encore pris en charge, et la qualité d’image, la vitesse et les licences des modèles n’ont pas été testées ici : essayez-le sur une petite sélection et lisez la licence du modèle choisi avant tout usage commercial.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site d’Interstice](https://www.interstice.cloud) — présentation du plugin et description local ou cloud.',
          '[Service Interstice.cloud](https://www.interstice.cloud/service) — fonctions, prix des jetons et traitement des images.',
          '[Politique de confidentialité d’Interstice.cloud](https://www.interstice.cloud/privacy) — traitement des données, mise à jour le 4 avril 2024.',
          '[Mentions légales d’Interstice.cloud](https://www.interstice.cloud/imprint) — exploitant Cosmic Interstice UG, Mannheim.',
          '[Guide d’installation](https://docs.interstice.cloud/installation) — prérequis, moteurs et matériel.',
          '[Krita AI Diffusion sur GitHub](https://github.com/Acly/krita-ai-diffusion) — README, licence GPL-3.0 et commits.',
          '[Versions de Krita AI Diffusion](https://github.com/Acly/krita-ai-diffusion/releases) — version 1.53.0 et notes de version.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de ComfyUI](/fr/power-local-llm/comfyui-review) — le moteur à nœuds sur lequel s’appuie ce plugin.',
          '[Test d’Invoke AI](/fr/power-local-llm/invokeai-review) — un outil d’image créatif avec sa propre toile.',
          '[Test de Stable Diffusion WebUI Forge](/fr/power-local-llm/stable-diffusion-forge-review) — une interface web locale rapide pour les modèles Stable Diffusion.',
          '[Test de Draw Things](/fr/power-local-llm/draw-things-review) — génération d’images sur l’appareil pour Mac et iPhone.',
          '[Outils d’image et de vidéo comparés](/fr/power-local-llm/local-llm-images-video-compared) — la comparaison de catégorie à laquelle appartient ce test.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    heroImage: '/images/krita-ai-diffusion-review-hero-es.webp',
    title: 'Análisis de Krita AI Diffusion: plugin de pintura con IA de código abierto',
    seoTitle: 'Análisis de Krita AI Diffusion: plugin de IA local',
    intro: 'Krita AI Diffusion es un plugin de código abierto que añade relleno generativo, pintura en vivo y ampliación al programa de pintura gratuito Krita. Ejecuta modelos de difusión de imágenes, no modelos de lenguaje, ya sea en tu propia tarjeta gráfica o en el servicio en línea de pago de Interstice.cloud. Este análisis se basa en el sitio web de Interstice, su documentación, su política de privacidad y el repositorio de GitHub, todo consultado el 30 de octubre de 2026; PromptQuorum no ha probado el plugin.',
    metaDescription: 'Análisis de Krita AI Diffusion: plugin GPL-3.0 para Krita con inpainting, pintura en vivo y ampliación en tu GPU o en Interstice.cloud. Sin probar.',
    twitterDescription: 'Un plugin de código abierto para Krita que edita imágenes con IA a partir de una selección. Qué confirman las fuentes sobre el uso local, la nube de pago, el hardware y la privacidad, y qué no.',
    audience: 'Pintores digitales e ilustradores que usan o se plantean Krita y quieren saber qué confirman las fuentes sobre la generación local de imágenes con IA, qué exige y cuánto cuesta la opción en la nube.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Análisis Krita AI Diffusion',
    targetKeywords: [
      'krita ai diffusion análisis',
      'plugin ia krita',
      'interstice.cloud',
      'plugin stable diffusion krita',
      'generación local de imágenes con ia krita',
      'relleno generativo krita',
      'krita ai diffusion requisitos',
    ],
    current_models_mentioned: ['Flux 2', 'Z-Image', 'Stable Diffusion XL', 'Stable Diffusion 1.5', 'Illustrious'],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple silicon', 'Intel Arc', 'AMD GPU'],
    leadAnswerBlock: '**Krita AI Diffusion (versión 1.53.0) es un plugin con licencia GPL-3.0 que lleva a Krita el relleno generativo por selección, la pintura en vivo y la ampliación, y puede funcionar en tu propia tarjeta gráfica o en el servicio de pago Interstice.cloud.** Genera imágenes con modelos de difusión en lugar de texto con un modelo de lenguaje, y para el uso local necesita Krita 5.2 o posterior y la descarga de modelos.',
    quickAnswerTop: {
      es: {
        question: '¿Puedo ejecutar Krita AI Diffusion por completo en mi propio equipo?',
        answer: 'Sí: la guía de instalación ofrece, junto al servicio en línea, un servidor local gestionado y un servidor ComfyUI propio, y la política de privacidad dice que el uso del plugin sin conexión no implica intercambio de información. El servicio en línea es opcional y de pago.',
        bullets: [
          'Rellena, amplía o elimina contenido dentro de una selección, guiado por un prompt de texto opcional.',
          'La pintura en vivo convierte tu lienzo en una imagen de IA en tiempo real mientras dibujas.',
          'Capas de control como boceto, línea, profundidad y pose orientan el resultado, y las regiones dan prompts distintos a zonas distintas.',
          'Los ajustes preestablecidos personalizados permiten usar tus propios checkpoints y archivos LoRA.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Krita AI Diffusion?', anchor: 'what-is-krita-ai-diffusion' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Planes y coste', anchor: 'plans' },
      { label: 'Flujo de datos y privacidad', anchor: 'privacy' },
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
            text: 'Krita AI Diffusion es un plugin de código abierto que añade a Krita relleno generativo, pintura en vivo y ampliación con modelos de difusión, en tu propia GPU o en el servicio de pago Interstice.cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en él como un pincel de IA dentro de un programa de pintura normal: seleccionas una zona, describes lo que debe aparecer y los píxeles generados llegan a una capa que puedes seguir editando.',
          },
        ],
        items: [
          'Mantenimiento: la última versión, 1.53.0, es del 22 de agosto de 2026 y la rama principal cambió el 3 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Alcance: genera imágenes con modelos de difusión; no es una app de modelos de lenguaje (LLM), y el directorio de PromptQuorum la incluye entre sus herramientas de imagen.',
          'Coste: el plugin y el uso local son gratuitos; el servicio en línea vende paquetes de tokens prepagados, sin suscripción.',
          'Plataformas: Windows, Linux y macOS, con Krita 5.2 o posterior.',
          'Operador: el servicio lo gestiona Cosmic Interstice UG en Mannheim, Alemania; el código del plugin es abierto bajo la licencia GPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en [interstice.cloud](https://www.interstice.cloud), su documentación, su política de privacidad y su aviso legal, y en el repositorio de GitHub, consultados el 30 de octubre de 2026. PromptQuorum no ha instalado el plugin ni ha generado imágenes con él, así que no se evalúan la calidad de imagen ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-krita-ai-diffusion',
        title: '¿Qué es Krita AI Diffusion?',
        content: [
          '**Krita AI Diffusion es un plugin para Krita, el programa de pintura gratuito, que envía selecciones y bocetos a un modelo de difusión y devuelve el resultado como una capa.** Según el README, sus objetivos son la precisión y el control, la integración en los flujos de edición habituales y el funcionamiento local, abierto y gratuito, con la generación en la nube como forma de empezar sin una gran inversión.',
          '**El proyecto y el servicio comparten nombre en la web, y las fuentes los describen por separado.** El repositorio de GitHub pertenece a la cuenta Acly y señala interstice.cloud como página de inicio, mientras que el aviso legal nombra a Cosmic Interstice UG como operadora de Interstice.cloud; las fuentes no explican la relación jurídica entre ambos. El plugin usa [ComfyUI](https://github.com/comfyanonymous/ComfyUI) como motor.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Krita AI Diffusion es un archivo ZIP que importas en Krita; el servidor local y sus modelos se instalan después desde el cuadro de configuración del plugin.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          {
            'Opción': 'Plugin',
            'Cómo conseguirlo': 'ZIP de la [página de versiones de GitHub](https://github.com/Acly/krita-ai-diffusion/releases/latest)',
          },
          {
            'Opción': 'Krita',
            'Cómo conseguirlo': 'Versión 5.2 o posterior desde [krita.org](https://krita.org/en/download)',
          },
          {
            'Opción': 'Guía de instalación',
            'Cómo conseguirlo': '[docs.interstice.cloud/installation](https://docs.interstice.cloud/installation)',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[interstice.cloud](https://www.interstice.cloud)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[interstice.cloud/privacy](https://www.interstice.cloud/privacy)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/Acly/krita-ai-diffusion](https://github.com/Acly/krita-ai-diffusion), licencia GPL-3.0',
          },
        ],
        note: 'Versión analizada: 1.53.0, publicada el 22 de agosto de 2026 según la [página de versiones de GitHub](https://github.com/Acly/krita-ai-diffusion/releases/latest), que la marca como compilación para Krita 5; el último cambio en la rama principal fue el 3 de octubre de 2026. Los pasos de instalación no mencionan ninguna terminal. La guía incluye una línea 2.x del plugin para Krita 6 como próximamente. En Krita, importa el ZIP con Herramientas > Scripts > Importar plugin de Python desde archivo; la guía aconseja la versión de Krita de krita.org, no la de la Windows Store ni la de Steam.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**La generación local necesita una tarjeta gráfica potente: el README recomienda una NVIDIA con al menos 6 GB de VRAM, y la guía menciona una RTX 2060 o superior.** La CPU también funciona, pero ambos documentos la describen como muy lenta.',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Qué dicen las fuentes': 'Windows, Linux y macOS; en Mac solo figura Apple silicon (M1 a M5), y el README menciona macOS 14 o posterior',
          },
          {
            Elemento: 'Hardware gráfico',
            'Qué dicen las fuentes': 'NVIDIA mediante CUDA, AMD mediante ROCm, Intel Arc con 8 GB o más mediante XPU, Apple silicon mediante MPS; el README lista AMD e Intel para Windows y Linux',
          },
          {
            Elemento: 'Espacio en disco',
            'Qué dicen las fuentes': 'Al menos 10 GB libres para el servidor gestionado; los modelos pueden ocupar 50 GB o más según los paquetes opcionales elegidos',
          },
          {
            Elemento: 'Modelos',
            'Qué dicen las fuentes': 'Se eligen como cargas de trabajo al instalar el servidor, o se añaden después como paquetes individuales; cada carga descarga sus modelos recomendados',
          },
          {
            Elemento: 'Servidor ComfyUI propio',
            'Qué dicen las fuentes': 'Opcional: sirve un servidor ComfyUI existente, local o remoto, si tiene los nodos personalizados y los modelos de la guía de configuración de ComfyUI',
          },
          {
            Elemento: 'Internet',
            'Qué dicen las fuentes': 'Necesario para las descargas y para el servicio en línea; la política de privacidad menciona el uso sin conexión, pero la guía de instalación no lo describe',
          },
        ],
        note: 'Las fuentes no indican los requisitos de RAM. Las listas de hardware son del fabricante; PromptQuorum no comprobó qué tarjetas funcionan en la práctica.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede del README o del sitio web; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Inpainting y pintura en vivo.** Las selecciones dirigen el relleno generativo, la ampliación, la adición y la eliminación, y la pintura en vivo deja que la IA interprete el lienzo en tiempo real.',
          '**Ampliación.** El README dice que las imágenes pueden ampliarse a 4k, 8k y más sin quedarse sin memoria.',
          '**Modelos.** El README cita Flux 2, Z-Image, Stable Diffusion 1.5, Stable Diffusion XL e Illustrious, además de modelos de edición que modifican una imagen a partir de una instrucción de texto; la página del servicio en línea cita Stable Diffusion 1.5 y XL.',
          '**Control.** Modos ControlNet como boceto, línea, bordes Canny, pose, profundidad, normales y segmentación, imágenes de referencia y estilo con IP-Adapter, y regiones que dan a cada zona definida por capas su propio texto.',
          '**Flujo de trabajo.** Una cola de trabajos, un historial navegable de resultados y prompts, y ajustes preestablecidos personalizados con tus propios checkpoints, archivos LoRA y muestreadores.',
        ],
        note: 'La selección de objetos y la eliminación de fondo no forman parte de este plugin; el README remite a otro plugin distinto, Krita AI Tools, para la segmentación.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Planes y coste',
        content: [
          '**El plugin y la generación local son gratuitos, y el servicio en línea opcional vende paquetes de tokens prepagados en lugar de una suscripción.** Los precios del servicio de abajo están en euros, tal como los indica el sitio web.',
        ],
        columns: ['Opción', 'Qué indican las fuentes'],
        rows: [
          {
            'Opción': 'Local',
            'Qué indican las fuentes': 'Gratis: el plugin con licencia GPL-3.0, ejecutado en tu propio hardware con un servidor gestionado o propio; el sitio web lo describe como «100 % gratis en hardware local»',
          },
          {
            'Opción': 'Servicio en línea',
            'Qué indican las fuentes': 'Tokens prepagados que no caducan: 5,000 por €10 o 15,000 por €28, más algunos tokens gratis para probar; una imagen de 1024 x 1024 cuesta unos 5 tokens (unos €0.01) y una imagen en modo en vivo, cerca de 1 token',
          },
        ],
        note: 'Cifras tal como aparecen en la página del servicio el 30 de octubre de 2026; el coste real en tokens depende de la resolución, la intensidad y el flujo de trabajo y se muestra en el plugin; no se comprobaron los impuestos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La política de privacidad, actualizada por última vez el 4 de abril de 2024, dice que el uso del plugin sin conexión no implica intercambio ni recopilación de información, y también dice que el uso del plugin genera métricas de rendimiento no vinculadas a información personal.** Las fuentes no concilian ambas afirmaciones ni aclaran si esa telemetría se aplica al uso local.',
          'Sobre el servicio en línea, el sitio web indica que las imágenes de entrada se usan solo para generar los resultados y que los resultados no se almacenan, aunque puede usarse almacenamiento temporal para imágenes grandes. La política añade que los datos personales se almacenan en Alemania, que los datos necesarios para generar imágenes pueden procesarse en otros países europeos, Canadá o EE. UU., que las imágenes y los prompts de texto quedan excluidos del análisis para mejorar el servicio y que no indica cuánto tiempo se conservan las imágenes generadas. Las exportaciones del servicio llevan una etiqueta de metadatos de «generado por IA», y los clientes de la UE reciben además una marca de agua invisible.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante, no resultados de una auditoría. El código del plugin es público bajo la licencia GPL-3.0, pero PromptQuorum no lo ha leído ni ha inspeccionado el tráfico de red, y la política es anterior a la versión actual.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad de imagen y velocidad.** PromptQuorum no generó imágenes, no midió ningún hardware ni comparó resultados con otras herramientas.',
          '**Licencias de los modelos.** La licencia GPL-3.0 cubre el código del plugin; cada modelo de difusión tiene sus propios términos, también para el uso comercial, y no revisamos ninguno.',
          '**Hardware en la práctica.** Las listas de VRAM y de tarjetas son del fabricante; las fuentes no dicen qué tarjetas ejecutan con comodidad Flux 2 o los modelos más grandes.',
          '**Telemetría en uso local.** La política no explica si las métricas de rendimiento que menciona se envían al trabajar en local.',
          '**Vínculo jurídico entre proyecto y servicio.** Las fuentes no describen la relación entre el autor del plugin y Cosmic Interstice UG.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[ComfyUI](/es/power-local-llm/comfyui-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / GPL 3.0',
            'Diferencia clave': 'Un editor de grafos de nodos que se maneja directamente; este plugin usa ComfyUI como motor, pero lo oculta tras Krita',
          },
          {
            App: '[Invoke AI](/es/power-local-llm/invokeai-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Freemium / Apache 2.0',
            'Diferencia clave': 'Una app web aparte con su propio lienzo, no un plugin dentro de un programa de pintura',
          },
          {
            App: '[Stable Diffusion WebUI Forge](/es/power-local-llm/stable-diffusion-forge-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave': 'Una interfaz web local con muchos parámetros para generar imágenes, sin integración con Krita',
          },
          {
            App: '[Draw Things](/es/power-local-llm/draw-things-review)',
            Plataformas: 'macOS, iOS',
            'Precio / licencia': 'Freemium / código cerrado',
            'Diferencia clave': 'Una app nativa de Apple con lienzo propio e inpainting, no vinculada a Krita',
          },
        ],
        note: 'Son apps de la misma categoría del directorio de PromptQuorum; confirma el precio, la licencia y las plataformas actuales de cada una en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Krita AI Diffusion es lo mismo que Interstice.cloud?',
            a: 'No exactamente: el plugin es la parte de código abierto, mientras que Interstice.cloud es el sitio web y el servicio en línea de pago al que el plugin puede conectarse. En el cuadro de configuración del plugin eliges el servicio en línea, un servidor local gestionado o tu propio servidor ComfyUI.',
          },
          {
            q: '¿Funciona con Krita 6?',
            a: 'Todavía no, según la guía de instalación: Krita 5.x usa la línea 1.x del plugin, y una línea 2.x para Krita 6 figura como próximamente. Las notas de la versión 1.53.0 recomiendan Krita 5.3.2.1.',
          },
          {
            q: '¿Puedo usar mis propios modelos?',
            a: 'El README dice que puedes personalizar los ajustes preestablecidos con tus checkpoints, archivos LoRA y muestreadores, y la página del servicio en línea menciona la subida de tus propios modelos LoRA. No probamos ninguna de las dos cosas.',
          },
          {
            q: '¿Necesito una GPU?',
            a: 'Para un uso local cómodo, sí; la CPU funciona, pero se describe como muy lenta. El servicio en línea no requiere una GPU propia.',
          },
          {
            q: '¿Puedo usar el resultado comercialmente?',
            a: 'La página del servicio dice que los usuarios son dueños de las imágenes que generan, pero cada modelo de difusión tiene su propia licencia para el uso local y las fuentes no las resumen, así que revisa la licencia del modelo que elijas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Krita AI Diffusion es una forma de código abierto y con mantenimiento activo de añadir relleno generativo y pintura en vivo a Krita, con una opción local en tu GPU y una opción en la nube prepagada para equipos que no tengan una. Encaja con pintores que ya trabajan en Krita y aceptan instalar un plugin y descargar modelos de varios gigabytes. Las declaraciones de privacidad son del propio fabricante y en parte no están conciliadas, la política es anterior a la versión actual, Krita 6 aún no es compatible, y la calidad de imagen, la velocidad y las licencias de los modelos no se han probado aquí: pruébalo con una selección pequeña y lee la licencia del modelo elegido antes de usarlo comercialmente.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Interstice](https://www.interstice.cloud) — presentación del plugin y descripción local o en la nube.',
          '[Servicio Interstice.cloud](https://www.interstice.cloud/service) — funciones, precios de tokens y tratamiento de imágenes.',
          '[Política de privacidad de Interstice.cloud](https://www.interstice.cloud/privacy) — tratamiento de datos, actualizada el 4 de abril de 2024.',
          '[Aviso legal de Interstice.cloud](https://www.interstice.cloud/imprint) — operadora Cosmic Interstice UG, Mannheim.',
          '[Guía de instalación](https://docs.interstice.cloud/installation) — requisitos, motores y hardware.',
          '[Krita AI Diffusion en GitHub](https://github.com/Acly/krita-ai-diffusion) — README, licencia GPL-3.0 y commits.',
          '[Versiones de Krita AI Diffusion](https://github.com/Acly/krita-ai-diffusion/releases) — versión 1.53.0 y notas de la versión.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de ComfyUI](/es/power-local-llm/comfyui-review) — el motor basado en nodos sobre el que se apoya este plugin.',
          '[Análisis de Invoke AI](/es/power-local-llm/invokeai-review) — una herramienta de imagen creativa con lienzo propio.',
          '[Análisis de Stable Diffusion WebUI Forge](/es/power-local-llm/stable-diffusion-forge-review) — una interfaz web local rápida para modelos Stable Diffusion.',
          '[Análisis de Draw Things](/es/power-local-llm/draw-things-review) — generación de imágenes en el dispositivo para Mac e iPhone.',
          '[Herramientas de imagen y vídeo comparadas](/es/power-local-llm/local-llm-images-video-compared) — la comparativa de categoría a la que pertenece este análisis.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    heroImage: '/images/krita-ai-diffusion-review-hero-ja.webp',
    title: 'Krita AI Diffusionレビュー：オープンソースのAIペイントプラグイン',
    seoTitle: 'Krita AI Diffusionレビュー：無料のローカルAIプラグイン',
    intro: 'Krita AI Diffusionは、無料のペイントソフトKritaに生成塗りつぶし、ライブペイント、アップスケールを追加するオープンソースのプラグインです。動かすのは言語モデルではなく画像の拡散モデルで、自分のグラフィックカード上でも、Interstice.cloudの有料オンラインサービス上でも実行できます。このレビューはInterstice公式サイト、ドキュメント、プライバシーポリシー、GitHubリポジトリ（いずれも2026年10月30日確認）に基づきます。PromptQuorumはプラグインを実際には試していません。',
    metaDescription: 'Krita AI Diffusionレビュー：Krita向けGPL-3.0プラグイン。インペイント、ライブペイント、アップスケールを自分のGPUまたはInterstice.cloudで。未検証。',
    twitterDescription: '選択範囲でAI画像編集ができるオープンソースのKritaプラグイン。ローカル利用、有料クラウド、ハードウェア、プライバシーについて、情報源が確認していること、していないこと。',
    audience: 'Kritaを使っている、または検討しているデジタル画家やイラストレーター。ローカルでのAI画像生成について、情報源が確認していること、必要な環境、クラウド版の料金を知りたい方向けです。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Krita AI Diffusion レビュー',
    targetKeywords: [
      'krita ai diffusion レビュー',
      'krita ai プラグイン',
      'interstice.cloud',
      'krita stable diffusion プラグイン',
      'krita ローカル ai 画像生成',
      'krita 生成塗りつぶし',
      'krita ai diffusion 動作環境',
    ],
    current_models_mentioned: ['Flux 2', 'Z-Image', 'Stable Diffusion XL', 'Stable Diffusion 1.5', 'Illustrious'],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple silicon', 'Intel Arc', 'AMD GPU'],
    leadAnswerBlock: '**Krita AI Diffusion（バージョン1.53.0）は、選択範囲での生成塗りつぶし、ライブペイント、アップスケールをKritaに加えるGPL-3.0のプラグインで、自分のグラフィックカードでも有料のInterstice.cloudでも動かせます。**言語モデルでテキストを作るのではなく、拡散モデルで画像を生成します。ローカルで使うにはKrita 5.2以降とモデルのダウンロードが必要です。',
    quickAnswerTop: {
      ja: {
        question: 'Krita AI Diffusionを自分のパソコンだけで動かせますか？',
        answer: 'はい。インストールガイドには、オンラインサービスのほかに、管理型ローカルサーバーと独自のComfyUIサーバーが示されています。プライバシーポリシーは、プラグインをオフラインで使う場合は情報のやり取りがないとしています。オンラインサービスは任意で有料です。',
        bullets: [
          '選択範囲の中身を、任意のテキストプロンプトに沿って塗りつぶし、拡張、削除します。',
          'ライブペイントは、描いている間のキャンバスをリアルタイムでAI画像にします。',
          'スケッチ、線画、深度、ポーズなどのコントロールレイヤーで結果を誘導し、リージョンで領域ごとに別のプロンプトを指定できます。',
          'カスタムプリセットで、自分のチェックポイントやLoRAファイルを使えます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '簡単な回答', anchor: 'quick-answer' },
      { label: 'Krita AI Diffusionとは', anchor: 'what-is-krita-ai-diffusion' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '情報源が確認している機能', anchor: 'key-features' },
      { label: 'プランと費用', anchor: 'plans' },
      { label: 'データの流れとプライバシー', anchor: 'privacy' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '競合と代替', anchor: 'vs-alternatives' },
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
            text: 'Krita AI Diffusionは、拡散モデルによる生成塗りつぶし、ライブペイント、アップスケールをKritaに加えるオープンソースのプラグインで、自分のGPUまたは有料のInterstice.cloudで動きます。',
          },
          {
            type: 'plain-terms',
            text: '普通のペイントソフトの中にあるAIブラシのようなものです。範囲を選び、そこに描きたいものを説明すると、生成されたピクセルが編集を続けられるレイヤーに入ります。',
          },
        ],
        items: [
          '更新状況：最新リリース1.53.0は2026年8月22日、メインブランチの最終変更は2026年10月3日で、更新停止の警告は不要です。',
          '対象範囲：拡散モデルで画像を生成するツールで、言語モデル（LLM）アプリではありません。PromptQuorumのディレクトリでは画像ツールとして掲載しています。',
          '費用：プラグインとローカル利用は無料です。オンラインサービスはサブスクリプションなしの前払いトークン制です。',
          '対応OS：Windows、Linux、macOSで、Krita 5.2以降が必要です。',
          '運営：サービスはドイツ・マンハイムのCosmic Interstice UGが運営しています。プラグインのコードはGPL-3.0で公開されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは[interstice.cloud](https://www.interstice.cloud)、そのドキュメント、プライバシーポリシー、運営者情報、GitHubリポジトリ（2026年10月30日確認）に基づきます。PromptQuorumはプラグインをインストールも画像生成もしていないため、画質と速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-krita-ai-diffusion',
        title: 'Krita AI Diffusionとは',
        content: [
          '**Krita AI Diffusionは、無料のペイントソフトKrita用のプラグインで、選択範囲やスケッチを拡散モデルに送り、結果をレイヤーとして返します。**READMEによると、目標は精度とコントロール、普段の編集作業との統合、そしてローカルで動く、オープンで無料であることです。クラウド生成は、大きな投資なしに始めるための手段とされています。',
          '**プロジェクトとサービスはウェブ上で同じ名前を使っていますが、情報源は両者を別々に説明しています。**GitHubリポジトリはAclyというアカウントのもので、ホームページとしてinterstice.cloudを挙げています。一方、運営者情報はCosmic Interstice UGをInterstice.cloudの運営者としています。両者の法的な関係は情報源に書かれていません。プラグインのバックエンドには[ComfyUI](https://github.com/comfyanonymous/ComfyUI)を使います。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Krita AI DiffusionはZIPファイルをKritaに読み込んで導入します。ローカルサーバーとモデルは、その後プラグインの設定ダイアログからインストールします。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          {
            '項目': 'プラグイン',
            '入手方法': '[GitHubのリリースページ](https://github.com/Acly/krita-ai-diffusion/releases/latest)のZIPを、Kritaの「ツール > スクリプト > ファイルからPythonプラグインをインポート」で読み込み',
          },
          {
            '項目': 'Krita',
            '入手方法': '[krita.org](https://krita.org/en/download)のバージョン5.2以降。ガイドはWindowsストア版やSteam版ではなくkrita.org版を勧めています',
          },
          {
            '項目': 'インストールガイド',
            '入手方法': '[docs.interstice.cloud/installation](https://docs.interstice.cloud/installation)',
          },
          {
            '項目': 'ウェブサイト',
            '入手方法': '[interstice.cloud](https://www.interstice.cloud)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '[interstice.cloud/privacy](https://www.interstice.cloud/privacy)',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[github.com/Acly/krita-ai-diffusion](https://github.com/Acly/krita-ai-diffusion)、GPL-3.0ライセンス',
          },
        ],
        note: '確認したバージョン：1.53.0。[GitHubのリリースページ](https://github.com/Acly/krita-ai-diffusion/releases/latest)によると2026年8月22日公開で、Krita 5向けビルドと記されています。メインブランチの最新の変更は2026年10月3日です。インストール手順にターミナルの記載はありません。ガイドは、Krita 6向けの2.x系プラグインを近日公開としています。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**ローカル生成には高性能なグラフィックカードが必要です。READMEはVRAM 6GB以上のNVIDIA製カードを推奨し、ガイドはRTX 2060以上を挙げています。**CPUでも動きますが、どちらの文書も非常に遅いとしています。',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          {
            '項目': 'OS',
            '情報源の記載': 'Windows、Linux、macOS。Macで挙げられているのはApple silicon（M1〜M5）のみで、READMEはmacOS 14以降としています',
          },
          {
            '項目': 'グラフィックハードウェア',
            '情報源の記載': 'NVIDIAはCUDA、AMDはROCm、8GB以上のIntel ArcはXPU、Apple siliconはMPS。READMEはAMDとIntelをWindowsとLinux向けとしています',
          },
          {
            '項目': 'ディスク容量',
            '情報源の記載': '管理型サーバーに空き10GB以上。選ぶオプションのパッケージによっては、モデルが50GB以上になります',
          },
          {
            '項目': 'モデル',
            '情報源の記載': 'サーバーのインストール時にワークロードとして選ぶか、後から個別パッケージで追加します。各ワークロードが推奨モデルをダウンロードします',
          },
          {
            '項目': '自前のComfyUIサーバー',
            '情報源の記載': '任意。ComfyUIセットアップガイドに載っているカスタムノードとモデルがあれば、既存のローカルまたはリモートのComfyUIサーバーも使えます',
          },
          {
            '項目': 'インターネット',
            '情報源の記載': 'ダウンロードとオンラインサービスに必要です。プライバシーポリシーはオフライン利用に触れていますが、インストールガイドには説明がありません',
          },
        ],
        note: '必要なRAMは情報源に記載がありません。ハードウェア一覧は開発元のもので、実際にどのカードで動くかはPromptQuorumでは確認していません。',
      },
      features: {
        id: 'key-features',
        title: '情報源が確認している機能',
        content: [
          '**以下はすべてREADMEまたはウェブサイトの記載で、独自に検証したものはありません。**',
        ],
        items: [
          '**インペイントとライブペイント。**選択範囲で生成塗りつぶし、拡張、追加、削除を行い、ライブペイントではAIがキャンバスをリアルタイムで解釈します。',
          '**アップスケール。**READMEによると、メモリ不足にならずに4K、8K以上へ拡大できます。',
          '**モデル。**READMEにはFlux 2、Z-Image、Stable Diffusion 1.5、Stable Diffusion XL、Illustriousと、テキスト指示で画像を修正する編集モデルが挙がっています。オンラインサービスのページに載っているのはStable Diffusion 1.5とXLです。',
          '**コントロール。**スケッチ、線画、Cannyエッジ、ポーズ、深度、法線、セグメンテーションなどのControlNetモード、参照画像やスタイル用のIP-Adapter、レイヤーで定めた領域ごとに別のテキストを指定できるリージョン。',
          '**作業フロー。**ジョブキュー、結果とプロンプトを見返せる履歴、自分のチェックポイント、LoRAファイル、サンプラーを使うカスタムプリセット。',
        ],
        note: 'オブジェクト選択と背景除去はこのプラグインには含まれません。セグメンテーションについて、READMEは別のプラグインKrita AI Toolsを案内しています。',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'プランと費用',
        content: [
          '**プラグインとローカル生成は無料で、任意のオンラインサービスはサブスクリプションではなく前払いのトークンパックを販売しています。**以下のサービス価格は、ウェブサイトの表記どおりユーロです。',
        ],
        columns: ['オプション', '情報源の記載'],
        rows: [
          {
            'オプション': 'ローカル',
            '情報源の記載': '無料：GPL-3.0のプラグインを、管理型または独自のサーバーで自分のハードウェア上に動かします。サイトは「ローカルハードウェアなら100%無料」と表記しています',
          },
          {
            'オプション': 'オンラインサービス',
            '情報源の記載': '有効期限のない前払いトークン：5,000トークンが10ユーロ、15,000トークンが28ユーロ。お試し用の無料トークンもあります。1024 x 1024の画像は約5トークン（約0.01ユーロ）、ライブモードの画像は約1トークンです',
          },
        ],
        note: '数値は2026年10月30日時点のサービスページの表記です。実際のトークン消費は解像度、強度、ワークフローで変わり、プラグイン上に表示されます。税は確認していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**2024年4月4日更新のプライバシーポリシーは、プラグインのオフライン利用では情報の交換も収集もないとする一方、プラグインの利用で個人情報と結び付かない性能指標が生成されるとも述べています。**情報源はこの2点を整合させておらず、このテレメトリがローカル利用にも当てはまるかは書かれていません。',
          'オンラインサービスについて、サイトは入力画像を結果の生成にのみ使い、結果は保存しないとしています。ただし大きな画像には一時保存を使うことがあります。ポリシーはさらに、個人データをドイツに保存すること、画像生成に必要なデータをほかの欧州諸国、カナダ、米国で処理することがあること、画像とテキストプロンプトはサービス改善の分析から除外されること、生成画像の保管期間は明記していないことを述べています。サービスからの書き出し画像にはAI生成のメタデータタグが付き、EUの顧客には見えない透かしも加わります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の表明であり、監査結果ではありません。プラグインのコードはGPL-3.0で公開されていますが、PromptQuorumはコードを読んでおらず、ネットワーク通信も調べていません。また、ポリシーは現行リリースより古いものです。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**画質と速度。**PromptQuorumは画像を生成せず、ハードウェアの計測も他ツールとの比較もしていません。',
          '**モデルのライセンス。**GPL-3.0はプラグインのコードに適用されます。各拡散モデルには商用利用を含む独自の条件があり、そのいずれも確認していません。',
          '**実環境でのハードウェア。**VRAMとカードの一覧は開発元のものです。Flux 2や大きなモデルがどのカードで快適に動くかは書かれていません。',
          '**ローカル利用時のテレメトリ。**ポリシーに出てくる性能指標が、ローカル実行時にも送信されるかは説明がありません。',
          '**プロジェクトとサービスの法的関係。**プラグインの作者とCosmic Interstice UGの関係は、情報源に記載がありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[ComfyUI](/ja/power-local-llm/comfyui-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／GPL 3.0',
            '主な違い': '直接操作するノードグラフエディタです。このプラグインはComfyUIをバックエンドに使い、Kritaの裏に隠します',
          },
          {
            'アプリ': '[Invoke AI](/ja/power-local-llm/invokeai-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': 'フリーミアム／Apache 2.0',
            '主な違い': '独自キャンバスを持つ別のウェブ型アプリで、ペイントソフト内のプラグインではありません',
          },
          {
            'アプリ': '[Stable Diffusion WebUI Forge](/ja/power-local-llm/stable-diffusion-forge-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／AGPL-3.0',
            '主な違い': 'パラメータの多いローカルのウェブUIで画像を生成します。Kritaとの連携はありません',
          },
          {
            'アプリ': '[Draw Things](/ja/power-local-llm/draw-things-review)',
            '対応プラットフォーム': 'macOS、iOS',
            '価格／ライセンス': 'フリーミアム／クローズドソース',
            '主な違い': '独自キャンバスとインペイントを持つApple向けのネイティブアプリで、Kritaとは無関係です',
          },
        ],
        note: 'いずれもPromptQuorumディレクトリの同カテゴリのアプリです。最新の価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Krita AI DiffusionとInterstice.cloudは同じものですか？',
            a: '完全には同じではありません。プラグインがオープンソースの部分で、Interstice.cloudはプラグインが接続できるウェブサイトと有料オンラインサービスです。プラグインの設定ダイアログで、オンラインサービス、管理型ローカルサーバー、自分のComfyUIサーバーから選びます。',
          },
          {
            q: 'Krita 6で動きますか？',
            a: 'インストールガイドによると、まだ動きません。Krita 5.xは1.x系のプラグインを使い、Krita 6向けの2.x系は近日公開とされています。1.53.0のリリースノートはKrita 5.3.2.1を推奨しています。',
          },
          {
            q: '自分のモデルを使えますか？',
            a: 'READMEによると、自分のチェックポイント、LoRAファイル、サンプラーでプリセットをカスタマイズでき、オンラインサービスのページには独自のLoRAモデルのアップロードも記載されています。どちらも試していません。',
          },
          {
            q: 'GPUは必要ですか？',
            a: '快適にローカルで使うなら必要です。CPUでも動きますが、非常に遅いとされています。オンラインサービスでは自分のGPUは要りません。',
          },
          {
            q: '生成画像は商用利用できますか？',
            a: 'サービスのページには、生成した画像の所有権は利用者にあるとあります。ただしローカル利用では各拡散モデルに独自のライセンスがあり、情報源はそれをまとめていません。選んだモデルのライセンスを確認してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: 'Krita AI Diffusionは、活発に保守されているオープンソースの手段で、Kritaに生成塗りつぶしとライブペイントを加えられます。自分のGPUで動かすローカル版と、GPUのない環境向けの前払い式クラウド版があります。すでにKritaで描いていて、プラグインの導入と数GBのモデルのダウンロードを受け入れられる方に向いています。プライバシーの記載は開発元自身のもので、一部は整合していません。ポリシーは現行リリースより古く、Krita 6には未対応です。画質、速度、モデルのライセンスはここでは検証していません。まず小さな選択範囲で試し、商用利用の前に選んだモデルのライセンスを読んでください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Intersticeウェブサイト](https://www.interstice.cloud)：プラグインの紹介とローカル／クラウドの説明。',
          '[Interstice.cloudサービス](https://www.interstice.cloud/service)：機能、トークン価格、画像の扱い。',
          '[Interstice.cloudプライバシーポリシー](https://www.interstice.cloud/privacy)：データの扱い、2024年4月4日更新。',
          '[Interstice.cloud運営者情報](https://www.interstice.cloud/imprint)：運営者はマンハイムのCosmic Interstice UG。',
          '[インストールガイド](https://docs.interstice.cloud/installation)：要件、バックエンド、ハードウェア。',
          '[GitHubのKrita AI Diffusion](https://github.com/Acly/krita-ai-diffusion)：README、GPL-3.0ライセンス、コミット。',
          '[Krita AI Diffusionのリリース](https://github.com/Acly/krita-ai-diffusion/releases)：バージョン1.53.0とリリースノート。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ComfyUIレビュー](/ja/power-local-llm/comfyui-review)：このプラグインが土台にしているノード型バックエンド。',
          '[Invoke AIレビュー](/ja/power-local-llm/invokeai-review)：独自キャンバスを持つクリエイティブな画像ツール。',
          '[Stable Diffusion WebUI Forgeレビュー](/ja/power-local-llm/stable-diffusion-forge-review)：Stable Diffusionモデル向けの高速なローカルWeb UI。',
          '[Draw Thingsレビュー](/ja/power-local-llm/draw-things-review)：MacとiPhoneで動くオンデバイスの画像生成。',
          '[画像・動画ツール比較](/ja/power-local-llm/local-llm-images-video-compared)：このレビューが属するカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory)：ローカルAIツールの全カタログ。',
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
    heroImage: '/images/krita-ai-diffusion-review-hero-zh.webp',
    title: 'Krita AI Diffusion 评测：开源 AI 绘画插件',
    seoTitle: 'Krita AI Diffusion 评测：免费本地 AI 绘画插件',
    intro: 'Krita AI Diffusion 是一款开源插件，为免费绘画软件 Krita 增加生成式填充、实时绘画和放大功能。它运行的是图像扩散模型，而不是语言模型，既可以在你自己的显卡上运行，也可以使用 Interstice.cloud 的付费在线服务。本评测依据 Interstice 官网、文档、隐私政策和 GitHub 仓库（均于 2026 年 10 月 30 日查阅）；PromptQuorum 没有实际测试过该插件。',
    metaDescription: 'Krita AI Diffusion 评测：GPL-3.0 的 Krita 插件，支持局部重绘、实时绘画和放大，可用自己的 GPU 或 Interstice.cloud。未实测。',
    twitterDescription: '一款基于选区进行 AI 图像编辑的开源 Krita 插件。来源已确认的本地使用、付费云端、硬件和隐私信息，以及未能确认的部分。',
    audience: '正在使用或考虑 Krita 的数字画家和插画师，想了解来源对本地 AI 图像生成已确认的内容、所需条件，以及云端选项的费用。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Krita AI Diffusion 评测',
    targetKeywords: [
      'krita ai diffusion 评测',
      'krita ai 插件',
      'interstice.cloud',
      'krita stable diffusion 插件',
      'krita 本地 ai 图像生成',
      'krita 生成式填充',
      'krita ai diffusion 系统要求',
    ],
    current_models_mentioned: ['Flux 2', 'Z-Image', 'Stable Diffusion XL', 'Stable Diffusion 1.5', 'Illustrious'],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple silicon', 'Intel Arc', 'AMD GPU'],
    leadAnswerBlock: '**Krita AI Diffusion（版本 1.53.0）是一款 GPL-3.0 许可的插件，把基于选区的生成式填充、实时绘画和放大功能带进 Krita，可以在你自己的显卡上运行，也可以使用付费的 Interstice.cloud 服务。**它用扩散模型生成图像，而不是用语言模型生成文字；本地使用需要 Krita 5.2 或更高版本，并需下载模型。',
    quickAnswerTop: {
      zh: {
        question: '我可以把 Krita AI Diffusion 完全放在自己的电脑上运行吗？',
        answer: '可以：安装指南除在线服务外，还提供托管的本地服务器和自定义 ComfyUI 服务器；隐私政策称离线使用插件不涉及信息交换。在线服务是可选的，需要付费。',
        bullets: [
          '在选区内填充、扩展或移除内容，可选用文字提示词引导。',
          '实时绘画会在你作画时把画布实时渲染成 AI 图像。',
          '草图、线稿、深度、姿势等控制图层可引导结果，区域功能可为不同区域设置各自的提示词。',
          '自定义预设允许使用你自己的检查点和 LoRA 文件。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Krita AI Diffusion 是什么？', anchor: 'what-is-krita-ai-diffusion' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '系统要求', anchor: 'requirements' },
      { label: '来源确认的功能', anchor: 'key-features' },
      { label: '方案与费用', anchor: 'plans' },
      { label: '数据流向与隐私', anchor: 'privacy' },
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
            text: 'Krita AI Diffusion 是一款开源插件，用扩散模型为 Krita 增加生成式填充、实时绘画和放大功能，可在自己的 GPU 或付费的 Interstice.cloud 服务上运行。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作普通绘画软件里的一支 AI 画笔：你框选一块区域，描述那里应该出现什么，生成的像素就会落在一个可以继续编辑的图层上。',
          },
        ],
        items: [
          '维护情况：最新版本 1.53.0 发布于 2026 年 8 月 22 日，主分支最近一次更改在 2026 年 10 月 3 日，因此无需显示项目停更警告。',
          '范围：它用扩散模型生成图像，不是语言模型（LLM）应用；PromptQuorum 目录将其归入图像工具。',
          '费用：插件和本地使用免费；在线服务销售预付费代币包，没有订阅。',
          '平台：Windows、Linux 和 macOS，需要 Krita 5.2 或更高版本。',
          '运营方：该服务由德国曼海姆的 Cosmic Interstice UG 运营；插件代码以 GPL-3.0 许可开源。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测依据 [interstice.cloud](https://www.interstice.cloud)、其文档、隐私政策和法律声明以及 GitHub 仓库，查阅日期为 2026 年 10 月 30 日。PromptQuorum 没有安装该插件，也没有用它生成过图像，因此不评估画质和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-krita-ai-diffusion',
        title: 'Krita AI Diffusion 是什么？',
        content: [
          '**Krita AI Diffusion 是免费绘画软件 Krita 的插件，它把选区和草图发送给扩散模型，并把结果以图层形式返回。**README 称其目标是精确可控、融入常规编辑流程，以及本地、开放、免费运行；云端生成则是为了不必大笔投入就能上手。',
          '**项目和服务在网上共用一个名字，而来源是分开描述的。**GitHub 仓库属于账号 Acly，并把 interstice.cloud 列为主页；法律声明则把 Cosmic Interstice UG 列为 Interstice.cloud 的运营方。来源没有说明两者之间的法律关系。该插件使用 [ComfyUI](https://github.com/comfyanonymous/ComfyUI) 作为后端。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Krita AI Diffusion 是一个 ZIP 文件，需要导入 Krita；本地服务器及其模型随后在插件的配置对话框中安装。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          {
            '选项': '插件',
            '获取方式': '从 [GitHub 发布页](https://github.com/Acly/krita-ai-diffusion/releases/latest)下载 ZIP，在 Krita 中通过“工具 > 脚本 > 从文件导入 Python 插件”导入',
          },
          {
            '选项': 'Krita',
            '获取方式': '从 [krita.org](https://krita.org/en/download) 获取 5.2 或更高版本；指南建议使用 krita.org 的版本，而不是 Windows 应用商店或 Steam 版',
          },
          {
            '选项': '安装指南',
            '获取方式': '[docs.interstice.cloud/installation](https://docs.interstice.cloud/installation)',
          },
          {
            '选项': '官网',
            '获取方式': '[interstice.cloud](https://www.interstice.cloud)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '[interstice.cloud/privacy](https://www.interstice.cloud/privacy)',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/Acly/krita-ai-diffusion](https://github.com/Acly/krita-ai-diffusion)，GPL-3.0 许可',
          },
        ],
        note: '评测版本：1.53.0，据 [GitHub 发布页](https://github.com/Acly/krita-ai-diffusion/releases/latest)发布于 2026 年 8 月 22 日，并标注为适用于 Krita 5 的版本；主分支最近一次更改在 2026 年 10 月 3 日。安装步骤中未提到终端。指南将适用于 Krita 6 的 2.x 插件线列为即将推出。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '系统要求',
        content: [
          '**本地生成需要性能较强的显卡：README 推荐至少 6 GB 显存的 NVIDIA 显卡，指南则提到 RTX 2060 或更好。**CPU 也能运行，但两份文档都称其非常慢。',
        ],
        columns: ['项目', '来源的说法'],
        rows: [
          {
            '项目': '操作系统',
            '来源的说法': 'Windows、Linux 和 macOS；Mac 上只列出 Apple silicon（M1 至 M5），README 提到 macOS 14 或更高版本',
          },
          {
            '项目': '图形硬件',
            '来源的说法': 'NVIDIA 通过 CUDA，AMD 通过 ROCm，8 GB 或以上的 Intel Arc 通过 XPU，Apple silicon 通过 MPS；README 将 AMD 和 Intel 列为 Windows 和 Linux 适用',
          },
          {
            '项目': '磁盘空间',
            '来源的说法': '托管服务器至少需要 10 GB 可用空间；视所选可选包而定，模型可能占用 50 GB 或更多',
          },
          {
            '项目': '模型',
            '来源的说法': '在服务器安装时作为工作负载选择，或之后作为单个包添加；每个工作负载会下载其推荐模型',
          },
          {
            '项目': '自有 ComfyUI 服务器',
            '来源的说法': '可选：现有的本地或远程 ComfyUI 服务器可用，前提是具备 ComfyUI 设置指南中列出的自定义节点和模型',
          },
          {
            '项目': '互联网',
            '来源的说法': '下载和使用在线服务时需要；隐私政策提到离线使用，但安装指南没有说明',
          },
        ],
        note: '来源没有说明内存要求。硬件清单出自开发方；PromptQuorum 没有核实实际哪些显卡可用。',
      },
      features: {
        id: 'key-features',
        title: '来源确认的功能',
        content: [
          '**以下各项均来自 README 或官网，没有一项经过独立测试。**',
        ],
        items: [
          '**局部重绘与实时绘画。**选区驱动生成式填充、扩展、添加和移除，实时绘画则让 AI 实时解读画布。',
          '**放大。**README 称图像可放大到 4K、8K 甚至更高，而不会耗尽内存。',
          '**模型。**README 列出 Flux 2、Z-Image、Stable Diffusion 1.5、Stable Diffusion XL 和 Illustrious，以及可按文字指令修改图像的编辑模型；在线服务页面列出的是 Stable Diffusion 1.5 和 XL。',
          '**控制。**ControlNet 模式包括草图、线稿、Canny 边缘、姿势、深度、法线和分割，IP-Adapter 支持参考图和风格图，区域功能可为图层划定的每个区域设置单独文字。',
          '**工作流程。**任务队列、可浏览结果和提示词的历史记录，以及使用自己检查点、LoRA 文件和采样器的自定义预设。',
        ],
        note: '对象选择和背景移除不属于该插件；README 指向另一个插件 Krita AI Tools 来完成分割。',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: '方案与费用',
        content: [
          '**插件和本地生成免费，可选的在线服务出售预付费代币包而非订阅。**下面的服务价格按官网所列以欧元计。',
        ],
        columns: ['选项', '来源列出的内容'],
        rows: [
          {
            '选项': '本地',
            '来源列出的内容': '免费：GPL-3.0 许可的插件，在自己的硬件上配合托管或自定义服务器运行；官网称其“在本地硬件上 100% 免费”',
          },
          {
            '选项': '在线服务',
            '来源列出的内容': '永不过期的预付费代币：5,000 个 10 欧元，或 15,000 个 28 欧元，另有一些免费代币可试用；一张 1024 x 1024 的图像约需 5 个代币（约 0.01 欧元），实时模式的一张图像约 1 个代币',
          },
        ],
        note: '数据为 2026 年 10 月 30 日服务页面所示；实际代币消耗取决于分辨率、强度和工作流程，并在插件中显示；税费未核实。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**隐私政策最近更新于 2024 年 4 月 4 日，称离线使用插件不涉及信息交换或收集，同时也称使用插件会产生与个人信息无关联的性能指标。**来源没有调和这两种说法，也没有说明这类遥测是否适用于本地使用。',
          '关于在线服务，官网称输入图像仅用于生成结果，结果不会被存储，但大图像可能使用临时存储。政策还称个人数据存储在德国，生成图像所需的数据可能在其他欧洲国家、加拿大或美国处理，图像和文字提示词不用于改进服务的分析，并且没有说明生成图像的保存时长。服务导出的图像带有“AI 生成”元数据标签，欧盟客户还会获得不可见水印。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发方的声明，不是审计结果。插件代码以 GPL-3.0 许可公开，但 PromptQuorum 没有阅读代码，也没有检查网络流量，而且该政策早于当前版本。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**画质与速度。**PromptQuorum 没有生成图像、没有测量任何硬件，也没有与其他工具比较结果。',
          '**模型许可。**GPL-3.0 适用于插件代码；每个扩散模型都有各自的条款，包括商用条款，我们没有核查其中任何一个。',
          '**实际硬件表现。**显存和显卡清单出自开发方；来源没有说明哪些显卡能流畅运行 Flux 2 或更大的模型。',
          '**本地使用时的遥测。**政策提到的性能指标在本地运行时是否会发送，没有说明。',
          '**项目与服务的法律关系。**来源没有说明插件作者与 Cosmic Interstice UG 之间的关系。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格／许可', '主要区别'],
        rows: [
          {
            '应用': '[ComfyUI](/zh/power-local-llm/comfyui-review)',
            '平台': 'macOS、Windows、Linux',
            '价格／许可': '免费／GPL 3.0',
            '主要区别': '需要直接操作的节点图编辑器；该插件以 ComfyUI 为后端，但把它隐藏在 Krita 背后',
          },
          {
            '应用': '[Invoke AI](/zh/power-local-llm/invokeai-review)',
            '平台': 'macOS、Windows、Linux',
            '价格／许可': 'Freemium／Apache 2.0',
            '主要区别': '带有自己画布的独立网页应用，而不是绘画软件内的插件',
          },
          {
            '应用': '[Stable Diffusion WebUI Forge](/zh/power-local-llm/stable-diffusion-forge-review)',
            '平台': 'macOS、Windows、Linux',
            '价格／许可': '免费／AGPL-3.0',
            '主要区别': '参数丰富的本地网页界面，用于生成图像，没有 Krita 集成',
          },
          {
            '应用': '[Draw Things](/zh/power-local-llm/draw-things-review)',
            '平台': 'macOS、iOS',
            '价格／许可': 'Freemium／闭源',
            '主要区别': '带有自己画布和局部重绘的苹果原生应用，与 Krita 无关',
          },
        ],
        note: '这些是 PromptQuorum 目录中同类别的应用；请在各自页面上确认当前的价格、许可和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Krita AI Diffusion 和 Interstice.cloud 是同一个东西吗？',
            a: '不完全是：插件是开源部分，而 Interstice.cloud 是插件可以连接的网站和付费在线服务。在插件的配置对话框中，你可以选择在线服务、托管的本地服务器或自己的 ComfyUI 服务器。',
          },
          {
            q: '它支持 Krita 6 吗？',
            a: '据安装指南，目前还不支持：Krita 5.x 使用 1.x 插件线，适用于 Krita 6 的 2.x 插件线被列为即将推出。1.53.0 的发布说明推荐 Krita 5.3.2.1。',
          },
          {
            q: '我可以使用自己的模型吗？',
            a: 'README 称可以用自己的检查点、LoRA 文件和采样器自定义预设，在线服务页面也提到可以上传自己的 LoRA 模型。我们没有测试这两项。',
          },
          {
            q: '我需要 GPU 吗？',
            a: '要流畅地本地使用，需要；CPU 可以运行，但被描述为非常慢。在线服务不需要你自己的 GPU。',
          },
          {
            q: '生成的图像可以商用吗？',
            a: '服务页面称用户拥有自己生成的图像，但本地使用时每个扩散模型有各自的许可，来源没有汇总，请查看你所选模型的许可。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Krita AI Diffusion 是一个维护活跃的开源方案，可为 Krita 增加生成式填充和实时绘画，既有在自己 GPU 上运行的本地选项，也有适合没有显卡的机器的预付费云端选项。它适合已经在用 Krita、并能接受安装插件和下载数 GB 模型的画家。隐私说明出自开发方自己，且部分未经调和，政策早于当前版本，目前尚不支持 Krita 6，画质、速度和模型许可在此均未经测试：请先在小块选区上试用，并在商用前阅读所选模型的许可。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Interstice 官网](https://www.interstice.cloud) — 插件介绍与本地或云端说明。',
          '[Interstice.cloud 服务](https://www.interstice.cloud/service) — 功能、代币价格和图像处理方式。',
          '[Interstice.cloud 隐私政策](https://www.interstice.cloud/privacy) — 数据处理，最近更新于 2024 年 4 月 4 日。',
          '[Interstice.cloud 法律声明](https://www.interstice.cloud/imprint) — 运营方 Cosmic Interstice UG，曼海姆。',
          '[安装指南](https://docs.interstice.cloud/installation) — 要求、后端和硬件。',
          '[GitHub 上的 Krita AI Diffusion](https://github.com/Acly/krita-ai-diffusion) — README、GPL-3.0 许可和提交记录。',
          '[Krita AI Diffusion 发布页](https://github.com/Acly/krita-ai-diffusion/releases) — 版本 1.53.0 与发布说明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[ComfyUI 评测](/zh/power-local-llm/comfyui-review) — 该插件所基于的节点式后端。',
          '[Invoke AI 评测](/zh/power-local-llm/invokeai-review) — 带自有画布的创意图像工具。',
          '[Stable Diffusion WebUI Forge 评测](/zh/power-local-llm/stable-diffusion-forge-review) — 面向 Stable Diffusion 模型的快速本地网页界面。',
          '[Draw Things 评测](/zh/power-local-llm/draw-things-review) — 适用于 Mac 和 iPhone 的设备端图像生成。',
          '[图像与视频工具对比](/zh/power-local-llm/local-llm-images-video-compared) — 本评测所属的类别对比。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
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
    heroImage: '/images/krita-ai-diffusion-review-hero-pt.webp',
    title: 'Análise do Krita AI Diffusion: plugin de pintura com IA de código aberto',
    seoTitle: 'Análise do Krita AI Diffusion: plugin de IA local',
    intro: 'O Krita AI Diffusion é um plugin de código aberto que adiciona preenchimento generativo, pintura ao vivo e ampliação ao programa de pintura gratuito Krita. Ele executa modelos de difusão de imagens, não modelos de linguagem, na sua própria placa de vídeo ou no serviço online pago da Interstice.cloud. Esta análise se baseia no site da Interstice, na documentação, na política de privacidade e no repositório do GitHub, todos consultados em 30 de outubro de 2026; a PromptQuorum não testou o plugin.',
    metaDescription: 'Análise do Krita AI Diffusion: plugin GPL-3.0 para Krita com inpainting, pintura ao vivo e ampliação na sua GPU ou na Interstice.cloud. Não testado.',
    twitterDescription: 'Um plugin de código aberto para o Krita que edita imagens com IA a partir de uma seleção. O que as fontes confirmam sobre uso local, nuvem paga, hardware e privacidade, e o que não confirmam.',
    audience: 'Pintores digitais e ilustradores que usam ou consideram o Krita e querem saber o que as fontes confirmam sobre gerar imagens com IA localmente, o que isso exige e quanto custa a opção em nuvem.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Análise Krita AI Diffusion',
    targetKeywords: [
      'krita ai diffusion análise',
      'plugin ia krita',
      'interstice.cloud',
      'plugin stable diffusion krita',
      'geração local de imagens com ia krita',
      'preenchimento generativo krita',
      'krita ai diffusion requisitos',
    ],
    current_models_mentioned: ['Flux 2', 'Z-Image', 'Stable Diffusion XL', 'Stable Diffusion 1.5', 'Illustrious'],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple silicon', 'Intel Arc', 'AMD GPU'],
    leadAnswerBlock: '**O Krita AI Diffusion (versão 1.53.0) é um plugin com licença GPL-3.0 que leva ao Krita o preenchimento generativo por seleção, a pintura ao vivo e a ampliação, e pode rodar na sua própria placa de vídeo ou no serviço pago Interstice.cloud.** Ele gera imagens com modelos de difusão, e não texto com um modelo de linguagem, e para uso local exige o Krita 5.2 ou mais novo e o download de modelos.',
    quickAnswerTop: {
      pt: {
        question: 'Posso rodar o Krita AI Diffusion inteiramente no meu computador?',
        answer: 'Sim: o guia de instalação oferece, além do serviço online, um servidor local gerenciado e um servidor ComfyUI próprio, e a política de privacidade diz que o uso offline do plugin não envolve troca de informações. O serviço online é opcional e pago.',
        bullets: [
          'Preenche, expande ou remove conteúdo dentro de uma seleção, guiado por um prompt de texto opcional.',
          'A pintura ao vivo transforma sua tela em uma imagem de IA em tempo real enquanto você desenha.',
          'Camadas de controle como rascunho, arte de linha, profundidade e pose orientam o resultado, e as regiões dão prompts separados a áreas separadas.',
          'Predefinições personalizadas permitem usar seus próprios checkpoints e arquivos LoRA.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Krita AI Diffusion?', anchor: 'what-is-krita-ai-diffusion' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Planos e custo', anchor: 'plans' },
      { label: 'Fluxo de dados e privacidade', anchor: 'privacy' },
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
            text: 'O Krita AI Diffusion é um plugin de código aberto que adiciona ao Krita preenchimento generativo, pintura ao vivo e ampliação com modelos de difusão, na sua própria GPU ou no serviço pago Interstice.cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um pincel de IA dentro de um programa de pintura comum: você seleciona uma área, descreve o que deve aparecer ali e os pixels gerados vão para uma camada que você pode continuar editando.',
          },
        ],
        items: [
          'Manutenção: a versão mais recente, 1.53.0, é de 22 de agosto de 2026 e o ramo principal mudou em 3 de outubro de 2026, então não se aplica nenhum aviso de projeto abandonado.',
          'Escopo: ele gera imagens com modelos de difusão; não é um app de modelos de linguagem (LLM), e o diretório da PromptQuorum o lista entre as ferramentas de imagem.',
          'Custo: o plugin e o uso local são gratuitos; o serviço online vende pacotes de tokens pré-pagos, sem assinatura.',
          'Plataformas: Windows, Linux e macOS, com Krita 5.2 ou mais novo.',
          'Operadora: o serviço é operado pela Cosmic Interstice UG, em Mannheim, na Alemanha; o código do plugin é aberto sob a licença GPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia em [interstice.cloud](https://www.interstice.cloud), na documentação, na política de privacidade e nos dados legais do site, e no repositório do GitHub, consultados em 30 de outubro de 2026. A PromptQuorum não instalou o plugin nem gerou imagens com ele, então a qualidade da imagem e a velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-krita-ai-diffusion',
        title: 'O que é o Krita AI Diffusion?',
        content: [
          '**O Krita AI Diffusion é um plugin para o Krita, o programa de pintura gratuito, que envia seleções e rascunhos a um modelo de difusão e devolve o resultado como uma camada.** Segundo o README, os objetivos são precisão e controle, integração aos fluxos de edição habituais e funcionamento local, aberto e gratuito, com a geração em nuvem como forma de começar sem grande investimento.',
          '**O projeto e o serviço compartilham um nome na web, e as fontes os descrevem separadamente.** O repositório do GitHub pertence à conta Acly e indica interstice.cloud como página inicial, enquanto os dados legais do site citam a Cosmic Interstice UG como operadora da Interstice.cloud; as fontes não explicam a relação jurídica entre os dois. O plugin usa o [ComfyUI](https://github.com/comfyanonymous/ComfyUI) como backend.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Krita AI Diffusion é um arquivo ZIP que você importa no Krita; o servidor local e seus modelos são instalados depois, pela caixa de configuração do plugin.**',
        ],
        columns: ['Opção', 'Como obter'],
        rows: [
          {
            'Opção': 'Plugin',
            'Como obter': 'ZIP da [página de versões do GitHub](https://github.com/Acly/krita-ai-diffusion/releases/latest)',
          },
          {
            'Opção': 'Krita',
            'Como obter': 'Versão 5.2 ou mais nova em [krita.org](https://krita.org/en/download)',
          },
          {
            'Opção': 'Guia de instalação',
            'Como obter': '[docs.interstice.cloud/installation](https://docs.interstice.cloud/installation)',
          },
          {
            'Opção': 'Site',
            'Como obter': '[interstice.cloud](https://www.interstice.cloud)',
          },
          {
            'Opção': 'Política de privacidade',
            'Como obter': '[interstice.cloud/privacy](https://www.interstice.cloud/privacy)',
          },
          {
            'Opção': 'Código-fonte',
            'Como obter': '[github.com/Acly/krita-ai-diffusion](https://github.com/Acly/krita-ai-diffusion), licença GPL-3.0',
          },
        ],
        note: 'Versão analisada: 1.53.0, publicada em 22 de agosto de 2026 segundo a [página de versões do GitHub](https://github.com/Acly/krita-ai-diffusion/releases/latest), que a marca como build para o Krita 5; a mudança mais recente no ramo principal foi em 3 de outubro de 2026. Os passos de instalação não mencionam terminal. O guia lista uma linha 2.x do plugin para o Krita 6 como em breve. No Krita, importe o ZIP por Ferramentas > Scripts > Importar plugin Python de arquivo; o guia recomenda a versão do Krita do krita.org, não a da Windows Store nem a do Steam.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A geração local exige uma placa de vídeo potente: o README recomenda uma NVIDIA com pelo menos 6 GB de VRAM, e o guia cita uma RTX 2060 ou melhor.** A CPU também funciona, mas os dois documentos a descrevem como muito lenta.',
        ],
        columns: ['Item', 'O que as fontes dizem'],
        rows: [
          {
            Item: 'Sistema operacional',
            'O que as fontes dizem': 'Windows, Linux e macOS; no Mac só aparece o Apple silicon (M1 a M5), e o README cita macOS 14 ou mais novo',
          },
          {
            Item: 'Hardware gráfico',
            'O que as fontes dizem': 'NVIDIA via CUDA, AMD via ROCm, Intel Arc com 8 GB ou mais via XPU, Apple silicon via MPS; o README lista AMD e Intel para Windows e Linux',
          },
          {
            Item: 'Espaço em disco',
            'O que as fontes dizem': 'Pelo menos 10 GB livres para o servidor gerenciado; os modelos podem ocupar 50 GB ou mais, conforme os pacotes opcionais escolhidos',
          },
          {
            Item: 'Modelos',
            'O que as fontes dizem': 'Escolhidos como cargas de trabalho na instalação do servidor ou adicionados depois como pacotes individuais; cada carga baixa seus modelos recomendados',
          },
          {
            Item: 'Servidor ComfyUI próprio',
            'O que as fontes dizem': 'Opcional: um servidor ComfyUI existente, local ou remoto, serve se tiver os nós personalizados e os modelos do guia de configuração do ComfyUI',
          },
          {
            Item: 'Internet',
            'O que as fontes dizem': 'Necessária para os downloads e para o serviço online; a política de privacidade menciona o uso offline, mas o guia de instalação não o descreve',
          },
        ],
        note: 'As fontes não indicam requisitos de RAM. As listas de hardware são do fabricante; a PromptQuorum não verificou quais placas funcionam na prática.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do README ou do site; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Inpainting e pintura ao vivo.** Seleções conduzem o preenchimento generativo, a expansão, a adição e a remoção, e a pintura ao vivo deixa a IA interpretar a tela em tempo real.',
          '**Ampliação.** O README diz que as imagens podem ser ampliadas para 4k, 8k e além sem esgotar a memória.',
          '**Modelos.** O README cita Flux 2, Z-Image, Stable Diffusion 1.5, Stable Diffusion XL e Illustrious, além de modelos de edição que alteram uma imagem a partir de uma instrução de texto; a página do serviço online cita Stable Diffusion 1.5 e XL.',
          '**Controle.** Modos ControlNet como rascunho, arte de linha, bordas Canny, pose, profundidade, normais e segmentação, imagens de referência e de estilo com IP-Adapter, e regiões que dão a cada área definida por camada o seu próprio texto.',
          '**Fluxo de trabalho.** Uma fila de tarefas, um histórico navegável de resultados e prompts, e predefinições personalizadas com seus próprios checkpoints, arquivos LoRA e amostradores.',
        ],
        note: 'A seleção de objetos e a remoção de fundo não fazem parte deste plugin; o README indica outro plugin, o Krita AI Tools, para a segmentação.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Planos e custo',
        content: [
          '**O plugin e a geração local são gratuitos, e o serviço online opcional vende pacotes de tokens pré-pagos em vez de assinatura.** Os preços do serviço abaixo estão em euros, como o site os informa.',
        ],
        columns: ['Opção', 'O que as fontes listam'],
        rows: [
          {
            'Opção': 'Local',
            'O que as fontes listam': 'Grátis: o plugin sob a licença GPL-3.0, executado no seu hardware com um servidor gerenciado ou próprio; o site diz «100% grátis em hardware local»',
          },
          {
            'Opção': 'Serviço online',
            'O que as fontes listam': 'Tokens pré-pagos que não expiram: 5.000 por €10 ou 15.000 por €28, mais alguns tokens grátis para testar; uma imagem de 1024 x 1024 custa cerca de 5 tokens (cerca de €0,01) e uma imagem no modo ao vivo, cerca de 1 token',
          },
        ],
        note: 'Valores conforme a página do serviço em 30 de outubro de 2026; o custo real em tokens depende de resolução, intensidade e fluxo de trabalho e aparece no plugin; impostos não foram verificados.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A política de privacidade, atualizada pela última vez em 4 de abril de 2024, diz que o uso offline do plugin não envolve troca nem coleta de informações, e também diz que o uso do plugin gera métricas de desempenho não vinculadas a informações pessoais.** As fontes não conciliam as duas afirmações nem dizem se essa telemetria vale para o uso local.',
          'Sobre o serviço online, o site diz que as imagens de entrada são usadas apenas para gerar os resultados e que os resultados não são armazenados, embora possa haver armazenamento temporário para imagens grandes. A política acrescenta que os dados pessoais ficam armazenados na Alemanha, que os dados necessários para gerar imagens podem ser processados em outros países europeus, no Canadá ou nos EUA, que imagens e prompts de texto ficam fora da análise de melhoria do serviço e que ela não informa por quanto tempo as imagens geradas são mantidas. As exportações do serviço levam uma etiqueta de metadados de «gerado por IA», e clientes da UE recebem também uma marca-d’água invisível.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do fabricante, não resultados de auditoria. O código do plugin é público sob a licença GPL-3.0, mas a PromptQuorum não o leu nem inspecionou o tráfego de rede, e a política é anterior à versão atual.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade de imagem e velocidade.** A PromptQuorum não gerou imagens, não mediu nenhum hardware nem comparou resultados com outras ferramentas.',
          '**Licenças dos modelos.** A licença GPL-3.0 cobre o código do plugin; cada modelo de difusão tem seus próprios termos, inclusive para uso comercial, e não verificamos nenhum deles.',
          '**Hardware na prática.** As listas de VRAM e de placas são do fabricante; as fontes não dizem quais placas executam o Flux 2 ou os modelos maiores com conforto.',
          '**Telemetria no uso local.** A política não explica se as métricas de desempenho que menciona são enviadas ao rodar localmente.',
          '**Vínculo jurídico entre projeto e serviço.** As fontes não descrevem a relação entre o autor do plugin e a Cosmic Interstice UG.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[ComfyUI](/pt/power-local-llm/comfyui-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / GPL 3.0',
            'Diferença principal': 'Um editor de grafos de nós que você opera diretamente; este plugin usa o ComfyUI como backend, mas o esconde atrás do Krita',
          },
          {
            App: '[Invoke AI](/pt/power-local-llm/invokeai-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Freemium / Apache 2.0',
            'Diferença principal': 'Um app web separado, com tela própria, e não um plugin dentro de um programa de pintura',
          },
          {
            App: '[Stable Diffusion WebUI Forge](/pt/power-local-llm/stable-diffusion-forge-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'Uma interface web local cheia de parâmetros para gerar imagens, sem integração com o Krita',
          },
          {
            App: '[Draw Things](/pt/power-local-llm/draw-things-review)',
            Plataformas: 'macOS, iOS',
            'Preço / licença': 'Freemium / código fechado',
            'Diferença principal': 'Um app nativo da Apple com tela própria e inpainting, sem ligação com o Krita',
          },
        ],
        note: 'São apps da mesma categoria do diretório da PromptQuorum; confirme o preço, a licença e as plataformas atuais de cada um na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Krita AI Diffusion é o mesmo que a Interstice.cloud?',
            a: 'Não exatamente: o plugin é a parte de código aberto, enquanto a Interstice.cloud é o site e o serviço online pago ao qual o plugin pode se conectar. Na caixa de configuração do plugin você escolhe o serviço online, um servidor local gerenciado ou o seu próprio servidor ComfyUI.',
          },
          {
            q: 'Funciona com o Krita 6?',
            a: 'Ainda não, segundo o guia de instalação: o Krita 5.x usa a linha 1.x do plugin, e uma linha 2.x para o Krita 6 consta como em breve. As notas da versão 1.53.0 recomendam o Krita 5.3.2.1.',
          },
          {
            q: 'Posso usar meus próprios modelos?',
            a: 'O README diz que você pode personalizar as predefinições com seus checkpoints, arquivos LoRA e amostradores, e a página do serviço online menciona o envio dos seus próprios modelos LoRA. Não testamos nenhuma das duas coisas.',
          },
          {
            q: 'Preciso de uma GPU?',
            a: 'Para um uso local confortável, sim; a CPU funciona, mas é descrita como muito lenta. O serviço online não exige uma GPU sua.',
          },
          {
            q: 'Posso usar o resultado comercialmente?',
            a: 'A página do serviço diz que os usuários são donos das imagens que geram, mas cada modelo de difusão tem sua própria licença para uso local e as fontes não as resumem, então confira a licença do modelo escolhido.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Krita AI Diffusion é uma forma de código aberto e com manutenção ativa de adicionar preenchimento generativo e pintura ao vivo ao Krita, com uma opção local na sua GPU e uma opção em nuvem pré-paga para máquinas sem uma. Serve para pintores que já trabalham no Krita e aceitam instalar um plugin e baixar modelos de vários gigabytes. As declarações de privacidade são do próprio fabricante e em parte não conciliadas, a política é anterior à versão atual, o Krita 6 ainda não é suportado, e qualidade de imagem, velocidade e licenças dos modelos não foram testadas aqui: experimente com uma seleção pequena e leia a licença do modelo escolhido antes de qualquer uso comercial.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site da Interstice](https://www.interstice.cloud) — apresentação do plugin e descrição de local ou nuvem.',
          '[Serviço Interstice.cloud](https://www.interstice.cloud/service) — recursos, preços dos tokens e tratamento das imagens.',
          '[Política de privacidade da Interstice.cloud](https://www.interstice.cloud/privacy) — tratamento de dados, atualizada em 4 de abril de 2024.',
          '[Dados legais da Interstice.cloud](https://www.interstice.cloud/imprint) — operadora Cosmic Interstice UG, Mannheim.',
          '[Guia de instalação](https://docs.interstice.cloud/installation) — requisitos, backends e hardware.',
          '[Krita AI Diffusion no GitHub](https://github.com/Acly/krita-ai-diffusion) — README, licença GPL-3.0 e commits.',
          '[Versões do Krita AI Diffusion](https://github.com/Acly/krita-ai-diffusion/releases) — versão 1.53.0 e notas da versão.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do ComfyUI](/pt/power-local-llm/comfyui-review) — o backend baseado em nós sobre o qual este plugin é construído.',
          '[Análise do Invoke AI](/pt/power-local-llm/invokeai-review) — uma ferramenta de imagem criativa com tela própria.',
          '[Análise do Stable Diffusion WebUI Forge](/pt/power-local-llm/stable-diffusion-forge-review) — uma interface web local rápida para modelos Stable Diffusion.',
          '[Análise do Draw Things](/pt/power-local-llm/draw-things-review) — geração de imagens no dispositivo para Mac e iPhone.',
          '[Ferramentas de imagem e vídeo comparadas](/pt/power-local-llm/local-llm-images-video-compared) — a comparação de categoria a que esta análise pertence.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    heroImage: '/images/krita-ai-diffusion-review-hero-ar.webp',
    title: 'مراجعة Krita AI Diffusion: إضافة رسم بالذكاء الاصطناعي مفتوحة المصدر',
    seoTitle: 'مراجعة Krita AI Diffusion: إضافة رسم محلية مجانية',
    intro: 'Krita AI Diffusion إضافة مفتوحة المصدر تضيف التعبئة التوليدية والرسم المباشر والتكبير إلى برنامج الرسم المجاني Krita. تشغّل نماذج انتشار للصور لا نماذج لغوية، إما على بطاقتك الرسومية أو على خدمة Interstice.cloud المدفوعة عبر الإنترنت. تستند هذه المراجعة إلى موقع Interstice ووثائقه وسياسة الخصوصية ومستودع GitHub، وجميعها فُحصت في 30 أكتوبر 2026؛ ولم تجرّب PromptQuorum الإضافة عملياً.',
    metaDescription: 'مراجعة Krita AI Diffusion: إضافة GPL-3.0 لبرنامج Krita للتلوين الداخلي والرسم المباشر والتكبير على بطاقتك أو Interstice.cloud. لم تُختبر عملياً.',
    twitterDescription: 'إضافة Krita مفتوحة المصدر لتحرير الصور بالذكاء الاصطناعي عبر التحديد. ما تؤكده المصادر عن التشغيل المحلي والسحابة المدفوعة والعتاد والخصوصية، وما لا تؤكده.',
    audience: 'الرسامون الرقميون والرسامون التوضيحيون الذين يستخدمون Krita أو يفكرون فيه ويريدون معرفة ما تؤكده المصادر عن توليد الصور محلياً ومتطلباته وتكلفة الخيار السحابي.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Krita AI Diffusion',
    targetKeywords: [
      'مراجعة krita ai diffusion',
      'إضافة krita للذكاء الاصطناعي',
      'interstice.cloud',
      'إضافة krita stable diffusion',
      'توليد الصور محلياً krita',
      'التعبئة التوليدية krita',
      'متطلبات krita ai diffusion',
    ],
    current_models_mentioned: ['Flux 2', 'Z-Image', 'Stable Diffusion XL', 'Stable Diffusion 1.5', 'Illustrious'],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple silicon', 'Intel Arc', 'AMD GPU'],
    leadAnswerBlock: '**Krita AI Diffusion (الإصدار 1.53.0) إضافة بترخيص GPL-3.0 تجلب إلى Krita التعبئة التوليدية عبر التحديد والرسم المباشر والتكبير، ويمكن تشغيلها على بطاقتك الرسومية أو على خدمة Interstice.cloud المدفوعة.** تولّد صوراً بنماذج الانتشار لا نصوصاً بنموذج لغوي، وتحتاج للاستخدام المحلي إلى Krita 5.2 أو أحدث وتنزيل نماذج.',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنني تشغيل Krita AI Diffusion بالكامل على جهازي؟',
        answer: 'نعم: يقدّم دليل التثبيت، إلى جانب الخدمة عبر الإنترنت، خادماً محلياً مُدارًا وخادم ComfyUI مخصصاً، وتقول سياسة الخصوصية إن استخدام الإضافة دون اتصال لا يتضمن تبادل معلومات. الخدمة عبر الإنترنت اختيارية ومدفوعة.',
        bullets: [
          'تملأ المحتوى داخل التحديد أو توسّعه أو تزيله، بتوجيه من نص اختياري.',
          'يحوّل الرسم المباشر لوحتك إلى صورة بالذكاء الاصطناعي في الوقت الفعلي أثناء الرسم.',
          'طبقات التحكم مثل المخطط والخطوط والعمق والوضعية توجّه النتيجة، وتتيح المناطق نصوصاً منفصلة لمناطق منفصلة.',
          'تتيح الإعدادات المسبقة المخصصة استخدام نقاط التفتيش وملفات LoRA الخاصة بك.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Krita AI Diffusion؟', anchor: 'what-is-krita-ai-diffusion' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'الخطط والتكلفة', anchor: 'plans' },
      { label: 'تدفق البيانات والخصوصية', anchor: 'privacy' },
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
            text: 'Krita AI Diffusion إضافة مفتوحة المصدر تضيف إلى Krita التعبئة التوليدية والرسم المباشر والتكبير بنماذج الانتشار، وتعمل على وحدة GPU الخاصة بك أو على خدمة Interstice.cloud المدفوعة.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّلها فرشاة ذكاء اصطناعي داخل برنامج رسم عادي: تحدد منطقة وتصف ما يجب أن يظهر فيها، فتهبط البكسلات المولّدة على طبقة يمكنك متابعة تحريرها.',
          },
        ],
        items: [
          'الصيانة: أحدث إصدار، 1.53.0، يعود إلى 22 أغسطس 2026، وتغيّر الفرع الرئيسي في 3 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
          'النطاق: تولّد الصور بنماذج الانتشار؛ وهي ليست تطبيق نموذج لغوي (LLM)، ويصنّفها دليل PromptQuorum ضمن أدوات الصور.',
          'التكلفة: الإضافة والاستخدام المحلي مجانيان؛ وتبيع الخدمة عبر الإنترنت حزم رموز مدفوعة مسبقاً دون اشتراك.',
          'المنصات: Windows وLinux وmacOS، مع Krita 5.2 أو أحدث.',
          'المشغّل: تُدار الخدمة من شركة Cosmic Interstice UG في مانهايم بألمانيا؛ وشيفرة الإضافة مفتوحة بترخيص GPL-3.0.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [interstice.cloud](https://www.interstice.cloud) ووثائقه وسياسة الخصوصية وبيانات الناشر القانونية ومستودع GitHub، وقد فُحصت في 30 أكتوبر 2026. لم تثبّت PromptQuorum الإضافة ولم تولّد بها صوراً، لذا لا تُقيَّم جودة الصورة ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-krita-ai-diffusion',
        title: 'ما هو Krita AI Diffusion؟',
        content: [
          '**Krita AI Diffusion إضافة لبرنامج الرسم المجاني Krita ترسل التحديدات والمخططات إلى نموذج انتشار وتعيد النتيجة على شكل طبقة.** يقول ملف README إن أهدافها الدقة والتحكم، والاندماج في مسارات التحرير المعتادة، والتشغيل المحلي والمفتوح والمجاني، مع التوليد السحابي وسيلةً للبدء دون استثمار كبير.',
          '**يشترك المشروع والخدمة في اسم واحد على الويب، وتصفهما المصادر كلٌّ على حدة.** يعود مستودع GitHub إلى الحساب Acly ويذكر interstice.cloud صفحةً رئيسية، بينما تسمّي البيانات القانونية للموقع شركة Cosmic Interstice UG مشغّلةً لـ Interstice.cloud؛ ولا توضّح المصادر العلاقة القانونية بينهما. تستخدم الإضافة [ComfyUI](https://github.com/comfyanonymous/ComfyUI) خلفيةً لها.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Krita AI Diffusion ملف ZIP تستورده في Krita؛ ثم يُثبَّت الخادم المحلي ونماذجه من مربع إعدادات الإضافة.**',
        ],
        columns: ['الخيار', 'طريقة الحصول'],
        rows: [
          {
            'الخيار': 'الإضافة',
            'طريقة الحصول': 'ملف ZIP من [صفحة إصدارات GitHub](https://github.com/Acly/krita-ai-diffusion/releases/latest)، يُستورد في Krita عبر Tools > Scripts > Import Python Plugin from File',
          },
          {
            'الخيار': 'Krita',
            'طريقة الحصول': 'الإصدار 5.2 أو أحدث من [krita.org](https://krita.org/en/download)؛ ينصح الدليل بنسخة krita.org لا نسخة متجر Windows ولا Steam',
          },
          {
            'الخيار': 'دليل التثبيت',
            'طريقة الحصول': '[docs.interstice.cloud/installation](https://docs.interstice.cloud/installation)',
          },
          {
            'الخيار': 'الموقع',
            'طريقة الحصول': '[interstice.cloud](https://www.interstice.cloud)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'طريقة الحصول': '[interstice.cloud/privacy](https://www.interstice.cloud/privacy)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'طريقة الحصول': '[github.com/Acly/krita-ai-diffusion](https://github.com/Acly/krita-ai-diffusion)، ترخيص GPL-3.0',
          },
        ],
        note: 'الإصدار الذي رُوجع: 1.53.0، نُشر في 22 أغسطس 2026 بحسب [صفحة إصدارات GitHub](https://github.com/Acly/krita-ai-diffusion/releases/latest) التي تصفه بأنه الإصدار المخصص لـ Krita 5؛ وكان آخر تغيير في الفرع الرئيسي في 3 أكتوبر 2026. لا تذكر خطوات التثبيت أي طرفية. ويُدرج الدليل خط إضافة 2.x لـ Krita 6 بوصفه قادماً قريباً.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**يتطلب التوليد المحلي بطاقة رسومية قوية: يوصي README ببطاقة NVIDIA بذاكرة VRAM لا تقل عن 6 GB، ويذكر الدليل RTX 2060 أو أفضل.** يعمل المعالج CPU أيضاً، لكن الوثيقتين تصفانه ببطء شديد.',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'ما تقوله المصادر': 'Windows وLinux وmacOS؛ وعلى Mac يُذكر Apple silicon فقط (من M1 إلى M5)، ويذكر README الإصدار macOS 14 أو أحدث',
          },
          {
            'البند': 'العتاد الرسومي',
            'ما تقوله المصادر': 'NVIDIA عبر CUDA، وAMD عبر ROCm، وIntel Arc بذاكرة 8 GB أو أكثر عبر XPU، وApple silicon عبر MPS؛ ويدرج README بطاقات AMD وIntel لنظامي Windows وLinux',
          },
          {
            'البند': 'مساحة القرص',
            'ما تقوله المصادر': '10 GB على الأقل خالية للخادم المُدار؛ وقد تشغل النماذج 50 GB أو أكثر بحسب الحزم الاختيارية المحددة',
          },
          {
            'البند': 'النماذج',
            'ما تقوله المصادر': 'تُختار كأحمال عمل أثناء تثبيت الخادم أو تُضاف لاحقاً كحزم فردية؛ ينزّل كل حمل عمل نماذجه الموصى بها',
          },
          {
            'البند': 'خادم ComfyUI خاص',
            'ما تقوله المصادر': 'اختياري: يصلح خادم ComfyUI قائم، محلي أو بعيد، إن كان يملك العقد المخصصة والنماذج المذكورة في دليل إعداد ComfyUI',
          },
          {
            'البند': 'الإنترنت',
            'ما تقوله المصادر': 'لازم للتنزيلات وللخدمة عبر الإنترنت؛ تذكر سياسة الخصوصية الاستخدام دون اتصال لكن دليل التثبيت لا يصفه',
          },
        ],
        note: 'لا تذكر المصادر متطلبات الذاكرة RAM. قوائم العتاد من المطوّر؛ ولم تتحقق PromptQuorum من البطاقات التي تعمل عملياً.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مصدره README أو الموقع؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**التلوين الداخلي والرسم المباشر.** تقود التحديدات التعبئة التوليدية والتوسيع والإضافة والإزالة، ويتيح الرسم المباشر للذكاء الاصطناعي تفسير اللوحة في الوقت الفعلي.',
          '**التكبير.** يقول README إن الصور تُكبَّر إلى 4k و8k وأكثر دون نفاد الذاكرة.',
          '**النماذج.** يذكر README نماذج Flux 2 وZ-Image وStable Diffusion 1.5 وStable Diffusion XL وIllustrious، إضافة إلى نماذج تحرير تعدّل الصورة بتعليمة نصية؛ وتذكر صفحة الخدمة عبر الإنترنت Stable Diffusion 1.5 وXL.',
          '**التحكم.** أوضاع ControlNet مثل المخطط والخطوط وحواف Canny والوضعية والعمق والمتجهات العمودية والتجزئة، وصور المرجع والأسلوب عبر IP-Adapter، ومناطق تمنح كل منطقة محددة بطبقة نصها الخاص.',
          '**مسار العمل.** قائمة انتظار للمهام، وسجل قابل للتصفح للنتائج والنصوص، وإعدادات مسبقة مخصصة بنقاط تفتيش وملفات LoRA ومُعيّنات (samplers) خاصة بك.',
        ],
        note: 'اختيار الكائنات وإزالة الخلفية ليسا جزءاً من هذه الإضافة؛ ويحيل README إلى إضافة منفصلة هي Krita AI Tools للتجزئة.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'الخطط والتكلفة',
        content: [
          '**الإضافة والتوليد المحلي مجانيان، وتبيع الخدمة الاختيارية عبر الإنترنت حزم رموز مدفوعة مسبقاً بدلاً من اشتراك.** أسعار الخدمة أدناه باليورو كما يذكرها الموقع.',
        ],
        columns: ['الخيار', 'ما تدرجه المصادر'],
        rows: [
          {
            'الخيار': 'محلي',
            'ما تدرجه المصادر': 'مجاني: الإضافة بترخيص GPL-3.0، تعمل على عتادك مع خادم مُدار أو مخصص؛ ويصفه الموقع بأنه «مجاني 100% على العتاد المحلي»',
          },
          {
            'الخيار': 'الخدمة عبر الإنترنت',
            'ما تدرجه المصادر': 'رموز مدفوعة مسبقاً لا تنتهي صلاحيتها: 5,000 رمز مقابل €10 أو 15,000 مقابل €28، إضافة إلى بعض الرموز المجانية للتجربة؛ وتكلّف صورة 1024 x 1024 نحو 5 رموز (نحو €0.01) وصورة الوضع المباشر نحو رمز واحد',
          },
        ],
        note: 'الأرقام كما تظهر في صفحة الخدمة في 30 أكتوبر 2026؛ وتعتمد تكلفة الرموز الفعلية على الدقة والقوة ومسار العمل وتظهر في الإضافة، ولم تُراجع الضرائب.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول سياسة الخصوصية، التي حُدّثت آخر مرة في 4 أبريل 2024، إن استخدام الإضافة دون اتصال لا يتضمن تبادل معلومات ولا جمعها، وتقول أيضاً إن استخدام الإضافة يولّد مقاييس أداء غير مرتبطة بمعلومات شخصية.** لا توفّق المصادر بين العبارتين ولا توضح هل تنطبق هذه القياسات عن بُعد على الاستخدام المحلي.',
          'بشأن الخدمة عبر الإنترنت، يقول الموقع إن صور الإدخال تُستخدم لتوليد النتائج فقط وإن النتائج لا تُخزَّن، مع إمكان استخدام تخزين مؤقت للصور الكبيرة. وتضيف السياسة أن البيانات الشخصية تُخزَّن في ألمانيا، وأن البيانات اللازمة لتوليد الصور قد تُعالج في دول أوروبية أخرى أو كندا أو الولايات المتحدة، وأن الصور والنصوص مستثناة من تحليل تحسين الخدمة، وأنها لا تذكر مدة الاحتفاظ بالصور المولّدة. تحمل الصور المصدَّرة من الخدمة وسم بيانات وصفية «مولّد بالذكاء الاصطناعي»، ويحصل عملاء الاتحاد الأوروبي كذلك على علامة مائية غير مرئية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من المطوّر وليست نتائج تدقيق. شيفرة الإضافة عامة بترخيص GPL-3.0، لكن PromptQuorum لم تقرأها ولم تفحص حركة الشبكة، والسياسة أقدم من الإصدار الحالي.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة الصورة والسرعة.** لم تولّد PromptQuorum صوراً ولم تقِس أي عتاد ولم تقارن النتائج بأدوات أخرى.',
          '**تراخيص النماذج.** يغطي ترخيص GPL-3.0 شيفرة الإضافة؛ ولكل نموذج انتشار شروطه الخاصة، بما فيها الاستخدام التجاري، ولم نفحص أياً منها.',
          '**العتاد عملياً.** قوائم VRAM والبطاقات من المطوّر؛ ولا تذكر المصادر البطاقات التي تشغّل Flux 2 أو النماذج الأكبر بارتياح.',
          '**القياس عن بُعد في الاستخدام المحلي.** لا توضح السياسة هل تُرسل مقاييس الأداء التي تذكرها عند التشغيل محلياً.',
          '**الصلة القانونية بين المشروع والخدمة.** لا تصف المصادر العلاقة بين مؤلف الإضافة وشركة Cosmic Interstice UG.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[ComfyUI](/ar/power-local-llm/comfyui-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / GPL 3.0',
            'الفرق الرئيسي': 'محرر مخططات عقد تتعامل معه مباشرة؛ تستخدم هذه الإضافة ComfyUI خلفيةً لها لكنها تخفيه خلف Krita',
          },
          {
            'التطبيق': '[Invoke AI](/ar/power-local-llm/invokeai-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'Freemium / Apache 2.0',
            'الفرق الرئيسي': 'تطبيق ويب مستقل بلوحة رسم خاصة، لا إضافة داخل برنامج رسم',
          },
          {
            'التطبيق': '[Stable Diffusion WebUI Forge](/ar/power-local-llm/stable-diffusion-forge-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الترخيص': 'مجاني / AGPL-3.0',
            'الفرق الرئيسي': 'واجهة ويب محلية غنية بالمعاملات لتوليد الصور، دون تكامل مع Krita',
          },
          {
            'التطبيق': '[Draw Things](/ar/power-local-llm/draw-things-review)',
            'المنصات': 'macOS وiOS',
            'السعر / الترخيص': 'Freemium / مغلق المصدر',
            'الفرق الرئيسي': 'تطبيق أصلي من Apple بلوحة رسم خاصة وتلوين داخلي، غير مرتبط بـ Krita',
          },
        ],
        note: 'هذه تطبيقات من الفئة نفسها في دليل PromptQuorum؛ تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Krita AI Diffusion هو نفسه Interstice.cloud؟',
            a: 'ليس تماماً: الإضافة هي الجزء المفتوح المصدر، أما Interstice.cloud فهو الموقع والخدمة المدفوعة عبر الإنترنت التي يمكن للإضافة الاتصال بها. في مربع إعدادات الإضافة تختار الخدمة عبر الإنترنت أو خادماً محلياً مُدارًا أو خادم ComfyUI الخاص بك.',
          },
          {
            q: 'هل يعمل مع Krita 6؟',
            a: 'ليس بعد بحسب دليل التثبيت: يستخدم Krita 5.x خط الإضافة 1.x، ويُدرج خط 2.x لـ Krita 6 بوصفه قادماً قريباً. وتوصي ملاحظات الإصدار 1.53.0 بـ Krita 5.3.2.1.',
          },
          {
            q: 'هل يمكنني استخدام نماذجي الخاصة؟',
            a: 'يقول README إنه يمكنك تخصيص الإعدادات المسبقة بنقاط تفتيش وملفات LoRA ومُعيّنات خاصة بك، وتذكر صفحة الخدمة عبر الإنترنت رفع نماذج LoRA الخاصة بك. لم نختبر أياً من الأمرين.',
          },
          {
            q: 'هل أحتاج إلى GPU؟',
            a: 'للاستخدام المحلي المريح نعم؛ يعمل المعالج CPU لكنه موصوف ببطء شديد. ولا تتطلب الخدمة عبر الإنترنت GPU خاصة بك.',
          },
          {
            q: 'هل يمكن استخدام المخرجات تجارياً؟',
            a: 'تقول صفحة الخدمة إن المستخدمين يملكون الصور التي يولّدونها، لكن لكل نموذج انتشار ترخيصه الخاص للاستخدام المحلي ولا تلخّصها المصادر، فراجع ترخيص النموذج الذي تختاره.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Krita AI Diffusion طريقة مفتوحة المصدر وفعّالة الصيانة لإضافة التعبئة التوليدية والرسم المباشر إلى Krita، مع خيار محلي على GPU الخاصة بك وخيار سحابي مدفوع مسبقاً للأجهزة التي لا تملكها. يناسب الرسامين الذين يعملون أصلاً في Krita ويقبلون تثبيت إضافة وتنزيل نماذج بحجم عدة غيغابايت. تصريحات الخصوصية من المطوّر نفسه وغير موفَّقة جزئياً، والسياسة أقدم من الإصدار الحالي، ولا يدعم Krita 6 بعد، ولم تُختبر هنا جودة الصورة ولا السرعة ولا تراخيص النماذج: جرّبه على تحديد صغير واقرأ ترخيص النموذج المختار قبل أي استخدام تجاري.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Interstice](https://www.interstice.cloud) — تعريف بالإضافة ووصف التشغيل المحلي أو السحابي.',
          '[خدمة Interstice.cloud](https://www.interstice.cloud/service) — الميزات وأسعار الرموز والتعامل مع الصور.',
          '[سياسة خصوصية Interstice.cloud](https://www.interstice.cloud/privacy) — معالجة البيانات، حُدّثت في 4 أبريل 2024.',
          '[البيانات القانونية لـ Interstice.cloud](https://www.interstice.cloud/imprint) — المشغّلة Cosmic Interstice UG، مانهايم.',
          '[دليل التثبيت](https://docs.interstice.cloud/installation) — المتطلبات والخلفيات والعتاد.',
          '[Krita AI Diffusion على GitHub](https://github.com/Acly/krita-ai-diffusion) — README وترخيص GPL-3.0 والالتزامات.',
          '[إصدارات Krita AI Diffusion](https://github.com/Acly/krita-ai-diffusion/releases) — الإصدار 1.53.0 وملاحظات الإصدار.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة ComfyUI](/ar/power-local-llm/comfyui-review) — الخلفية القائمة على العقد التي تبني عليها هذه الإضافة.',
          '[مراجعة Invoke AI](/ar/power-local-llm/invokeai-review) — أداة صور إبداعية بلوحة رسم خاصة.',
          '[مراجعة Stable Diffusion WebUI Forge](/ar/power-local-llm/stable-diffusion-forge-review) — واجهة ويب محلية سريعة لنماذج Stable Diffusion.',
          '[مراجعة Draw Things](/ar/power-local-llm/draw-things-review) — توليد الصور على الجهاز لأجهزة Mac وiPhone.',
          '[مقارنة أدوات الصور والفيديو](/ar/power-local-llm/local-llm-images-video-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
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
    heroImage: '/images/krita-ai-diffusion-review-hero-ko.webp',
    title: 'Krita AI Diffusion 리뷰: 오픈소스 AI 그림 플러그인',
    seoTitle: 'Krita AI Diffusion 리뷰: 무료 AI 그림 플러그인',
    intro: 'Krita AI Diffusion은 무료 그림 프로그램 Krita에 생성형 채우기, 라이브 페인팅, 업스케일을 추가하는 오픈소스 플러그인입니다. 언어 모델이 아니라 이미지 확산 모델을 실행하며, 내 그래픽 카드나 Interstice.cloud의 유료 온라인 서비스에서 구동합니다. 이 리뷰는 Interstice 웹사이트, 문서, 개인정보 처리방침, GitHub 저장소를 바탕으로 하며 모두 2026년 10월 30일에 확인했습니다. PromptQuorum은 플러그인을 직접 테스트하지 않았습니다.',
    metaDescription: 'Krita AI Diffusion 리뷰: 인페인팅, 라이브 페인팅, 업스케일을 내 GPU 또는 Interstice.cloud에서 쓰는 Krita용 GPL-3.0 플러그인. 미테스트.',
    twitterDescription: '선택 영역으로 AI 이미지를 편집하는 오픈소스 Krita 플러그인. 로컬 사용, 유료 클라우드, 하드웨어, 개인정보에 대해 출처가 확인한 내용과 확인하지 못한 내용.',
    audience: 'Krita를 쓰거나 검토 중인 디지털 화가와 일러스트레이터로, 로컬 AI 이미지 생성에 대해 출처가 확인한 내용, 필요한 사양, 클라우드 옵션의 비용을 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Krita AI Diffusion 리뷰',
    targetKeywords: [
      'krita ai diffusion 리뷰',
      'krita ai 플러그인',
      'interstice.cloud',
      'krita stable diffusion 플러그인',
      'krita 로컬 ai 이미지 생성',
      'krita 생성형 채우기',
      'krita ai diffusion 요구 사양',
    ],
    current_models_mentioned: ['Flux 2', 'Z-Image', 'Stable Diffusion XL', 'Stable Diffusion 1.5', 'Illustrious'],
    current_hardware_mentioned: ['NVIDIA GPU', 'Apple silicon', 'Intel Arc', 'AMD GPU'],
    leadAnswerBlock: '**Krita AI Diffusion(버전 1.53.0)은 선택 영역 기반 생성형 채우기, 라이브 페인팅, 업스케일을 Krita에 더하는 GPL-3.0 플러그인이며, 내 그래픽 카드나 유료 Interstice.cloud 서비스에서 실행할 수 있습니다.** 언어 모델로 텍스트를 만드는 것이 아니라 확산 모델로 이미지를 생성하며, 로컬 사용에는 Krita 5.2 이상과 모델 다운로드가 필요합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Krita AI Diffusion을 내 컴퓨터에서만 실행할 수 있습니까?',
        answer: '그렇습니다. 설치 가이드는 온라인 서비스 외에 관리형 로컬 서버와 사용자 지정 ComfyUI 서버를 제공하며, 개인정보 처리방침은 플러그인을 오프라인으로 사용할 때 정보 교환이 없다고 밝힙니다. 온라인 서비스는 선택 사항이며 유료입니다.',
        bullets: [
          '선택 영역 안의 내용을 채우거나 확장하거나 제거하며, 텍스트 프롬프트를 선택적으로 지정할 수 있습니다.',
          '라이브 페인팅은 그리는 동안 캔버스를 실시간으로 AI 이미지로 변환합니다.',
          '스케치, 선화, 깊이, 포즈 같은 컨트롤 레이어로 결과를 유도하고, 영역 기능으로 구역마다 다른 프롬프트를 줄 수 있습니다.',
          '사용자 지정 프리셋으로 자신의 체크포인트와 LoRA 파일을 쓸 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Krita AI Diffusion이란?', anchor: 'what-is-krita-ai-diffusion' },
      { label: '구하는 방법', anchor: 'get-it' },
      { label: '요구 사양', anchor: 'requirements' },
      { label: '출처가 확인한 기능', anchor: 'key-features' },
      { label: '요금제와 비용', anchor: 'plans' },
      { label: '데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
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
            text: 'Krita AI Diffusion은 확산 모델로 생성형 채우기, 라이브 페인팅, 업스케일을 Krita에 더하는 오픈소스 플러그인으로, 내 GPU나 유료 Interstice.cloud 서비스에서 실행됩니다.',
          },
          {
            type: 'plain-terms',
            text: '평범한 그림 프로그램 안의 AI 붓이라고 생각하면 됩니다. 영역을 선택하고 그곳에 나타날 것을 설명하면, 생성된 픽셀이 계속 편집할 수 있는 레이어에 들어갑니다.',
          },
        ],
        items: [
          '유지보수: 최신 릴리스 1.53.0은 2026년 8월 22일에 나왔고 메인 브랜치는 2026년 10월 3일에 변경되어, 방치된 프로젝트 경고는 해당하지 않습니다.',
          '범위: 확산 모델로 이미지를 생성하는 도구이며 언어 모델(LLM) 앱이 아닙니다. PromptQuorum 디렉터리는 이미지 도구로 분류합니다.',
          '비용: 플러그인과 로컬 사용은 무료이며, 온라인 서비스는 구독 없이 선불 토큰 팩을 판매합니다.',
          '플랫폼: Windows, Linux, macOS이며 Krita 5.2 이상이 필요합니다.',
          '운영사: 서비스는 독일 만하임의 Cosmic Interstice UG가 운영하며, 플러그인 코드는 GPL-3.0 라이선스로 공개되어 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 [interstice.cloud](https://www.interstice.cloud), 문서, 개인정보 처리방침, 사업자 정보, GitHub 저장소를 바탕으로 하며 2026년 10월 30일에 확인했습니다. PromptQuorum은 플러그인을 설치하거나 이미지를 생성해 보지 않았으므로 화질과 속도는 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-krita-ai-diffusion',
        title: 'Krita AI Diffusion이란?',
        content: [
          '**Krita AI Diffusion은 무료 그림 프로그램 Krita용 플러그인으로, 선택 영역과 스케치를 확산 모델에 보내고 결과를 레이어로 돌려줍니다.** README에 따르면 목표는 정밀한 제어, 기존 편집 작업 흐름과의 통합, 그리고 로컬에서 열려 있고 무료로 동작하는 것이며, 클라우드 생성은 큰 투자 없이 시작하도록 돕는 수단입니다.',
          '**프로젝트와 서비스는 웹에서 같은 이름을 쓰지만 출처는 둘을 따로 설명합니다.** GitHub 저장소는 Acly 계정 소유이고 홈페이지로 interstice.cloud를 표시하는 반면, 사업자 정보는 Cosmic Interstice UG를 Interstice.cloud의 운영사로 명시합니다. 둘 사이의 법적 관계는 출처에 나와 있지 않습니다. 이 플러그인은 [ComfyUI](https://github.com/comfyanonymous/ComfyUI)를 백엔드로 사용합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: [
          '**Krita AI Diffusion은 Krita에서 가져오는 ZIP 파일이며, 로컬 서버와 모델은 이후 플러그인의 설정 대화상자에서 설치합니다.**',
        ],
        columns: ['옵션', '구하는 방법'],
        rows: [
          {
            '옵션': '플러그인',
            '구하는 방법': '[GitHub 릴리스 페이지](https://github.com/Acly/krita-ai-diffusion/releases/latest)의 ZIP을 Krita의 도구 > 스크립트 > 파일에서 Python 플러그인 가져오기로 불러옵니다',
          },
          {
            '옵션': 'Krita',
            '구하는 방법': '[krita.org](https://krita.org/en/download)의 5.2 이상 버전. 가이드는 Windows 스토어나 Steam 버전이 아닌 krita.org 버전을 권합니다',
          },
          {
            '옵션': '설치 가이드',
            '구하는 방법': '[docs.interstice.cloud/installation](https://docs.interstice.cloud/installation)',
          },
          {
            '옵션': '웹사이트',
            '구하는 방법': '[interstice.cloud](https://www.interstice.cloud)',
          },
          {
            '옵션': '개인정보 처리방침',
            '구하는 방법': '[interstice.cloud/privacy](https://www.interstice.cloud/privacy)',
          },
          {
            '옵션': '소스 코드',
            '구하는 방법': '[github.com/Acly/krita-ai-diffusion](https://github.com/Acly/krita-ai-diffusion), GPL-3.0 라이선스',
          },
        ],
        note: '확인한 버전: 1.53.0. [GitHub 릴리스 페이지](https://github.com/Acly/krita-ai-diffusion/releases/latest)에 따르면 2026년 8월 22일에 게시되었고 Krita 5용 빌드로 표시되어 있습니다. 메인 브랜치의 가장 최근 변경은 2026년 10월 3일입니다. 설치 단계에는 터미널이 언급되지 않습니다. 가이드는 Krita 6용 2.x 플러그인 라인을 곧 제공될 예정으로 안내합니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사양',
        content: [
          '**로컬 생성에는 성능 좋은 그래픽 카드가 필요합니다. README는 VRAM 6GB 이상의 NVIDIA 카드를 권장하고, 가이드는 RTX 2060 이상을 언급합니다.** CPU로도 동작하지만 두 문서 모두 매우 느리다고 설명합니다.',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          {
            '항목': '운영체제',
            '출처의 설명': 'Windows, Linux, macOS. Mac은 Apple silicon(M1~M5)만 명시되어 있고, README는 macOS 14 이상을 언급합니다',
          },
          {
            '항목': '그래픽 하드웨어',
            '출처의 설명': 'NVIDIA는 CUDA, AMD는 ROCm, 8GB 이상 Intel Arc는 XPU, Apple silicon은 MPS. README는 AMD와 Intel을 Windows와 Linux용으로 안내합니다',
          },
          {
            '항목': '디스크 공간',
            '출처의 설명': '관리형 서버에 최소 10GB의 여유 공간이 필요하며, 선택하는 옵션 패키지에 따라 모델이 50GB 이상을 차지할 수 있습니다',
          },
          {
            '항목': '모델',
            '출처의 설명': '서버 설치 중 워크로드로 선택하거나 나중에 개별 패키지로 추가합니다. 각 워크로드는 권장 모델을 내려받습니다',
          },
          {
            '항목': '자체 ComfyUI 서버',
            '출처의 설명': '선택 사항입니다. ComfyUI 설정 가이드에 나온 사용자 지정 노드와 모델이 있으면 기존 로컬 또는 원격 ComfyUI 서버를 쓸 수 있습니다',
          },
          {
            '항목': '인터넷',
            '출처의 설명': '다운로드와 온라인 서비스에 필요합니다. 개인정보 처리방침은 오프라인 사용을 언급하지만 설치 가이드는 이를 설명하지 않습니다',
          },
        ],
        note: 'RAM 요구 사양은 출처에 나와 있지 않습니다. 하드웨어 목록은 개발 측 자료이며, PromptQuorum은 실제로 어떤 카드가 동작하는지 확인하지 않았습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처가 확인한 기능',
        content: [
          '**아래 항목은 모두 README나 웹사이트에서 가져왔으며, 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**인페인팅과 라이브 페인팅.** 선택 영역으로 생성형 채우기, 확장, 추가, 제거를 수행하고, 라이브 페인팅은 AI가 캔버스를 실시간으로 해석합니다.',
          '**업스케일.** README에 따르면 메모리가 부족해지지 않고 4k, 8k 이상으로 확대할 수 있습니다.',
          '**모델.** README는 Flux 2, Z-Image, Stable Diffusion 1.5, Stable Diffusion XL, Illustrious와, 텍스트 지시로 이미지를 수정하는 편집 모델을 나열합니다. 온라인 서비스 페이지는 Stable Diffusion 1.5와 XL을 언급합니다.',
          '**제어.** 스케치, 선화, Canny 엣지, 포즈, 깊이, 노멀, 세그멘테이션 같은 ControlNet 모드, 참조 이미지와 스타일용 IP-Adapter, 레이어로 정한 영역마다 별도 텍스트를 주는 영역 기능.',
          '**작업 흐름.** 작업 대기열, 결과와 프롬프트를 둘러볼 수 있는 기록, 자신의 체크포인트·LoRA 파일·샘플러를 쓰는 사용자 지정 프리셋.',
        ],
        note: '객체 선택과 배경 제거는 이 플러그인에 포함되지 않습니다. README는 세그멘테이션을 위해 별도 플러그인인 Krita AI Tools를 안내합니다.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: '요금제와 비용',
        content: [
          '**플러그인과 로컬 생성은 무료이며, 선택 사항인 온라인 서비스는 구독 대신 선불 토큰 팩을 판매합니다.** 아래 서비스 가격은 웹사이트에 표시된 대로 유로 기준입니다.',
        ],
        columns: ['옵션', '출처가 밝힌 내용'],
        rows: [
          {
            '옵션': '로컬',
            '출처가 밝힌 내용': '무료: GPL-3.0 플러그인을 관리형 또는 사용자 지정 서버와 함께 내 하드웨어에서 실행합니다. 웹사이트는 "로컬 하드웨어에서 100% 무료"라고 표기합니다',
          },
          {
            '옵션': '온라인 서비스',
            '출처가 밝힌 내용': '만료되지 않는 선불 토큰: 5,000개에 €10 또는 15,000개에 €28이며, 체험용 무료 토큰이 약간 있습니다. 1024 x 1024 이미지 한 장은 약 5토큰(약 €0.01), 라이브 모드 이미지는 약 1토큰입니다',
          },
        ],
        note: '수치는 2026년 10월 30일 서비스 페이지 기준입니다. 실제 토큰 비용은 해상도, 강도, 작업 흐름에 따라 달라지며 플러그인에 표시됩니다. 세금은 확인하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2024년 4월 4일에 마지막으로 갱신된 개인정보 처리방침은 플러그인을 오프라인으로 사용할 때 정보 교환이나 수집이 없다고 하면서, 플러그인 사용이 개인정보와 연결되지 않는 성능 지표를 생성한다고도 밝힙니다.** 출처는 두 진술을 조정하지 않았고, 이 원격 측정이 로컬 사용에도 적용되는지 설명하지 않습니다.',
          '온라인 서비스에 대해 웹사이트는 입력 이미지를 결과 생성에만 사용하고 결과는 저장하지 않는다고 하며, 큰 이미지에는 임시 저장소를 쓸 수 있다고 덧붙입니다. 방침은 개인 데이터가 독일에 저장되고, 이미지 생성에 필요한 데이터가 다른 유럽 국가, 캐나다, 미국에서 처리될 수 있으며, 이미지와 텍스트 프롬프트는 서비스 개선 분석에서 제외되고, 생성된 이미지의 보관 기간은 밝히지 않는다고 설명합니다. 서비스에서 내보낸 이미지에는 AI 생성 메타데이터 태그가 붙고, EU 고객에게는 보이지 않는 워터마크도 적용됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발 측의 선언이며 감사 결과가 아닙니다. 플러그인 코드는 GPL-3.0으로 공개되어 있지만 PromptQuorum은 코드를 읽거나 네트워크 트래픽을 점검하지 않았고, 방침은 현재 릴리스보다 오래되었습니다.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**화질과 속도.** PromptQuorum은 이미지를 생성하지 않았고, 하드웨어를 측정하거나 다른 도구와 결과를 비교하지 않았습니다.',
          '**모델 라이선스.** GPL-3.0은 플러그인 코드에 적용됩니다. 각 확산 모델에는 상업적 사용을 포함한 자체 약관이 있으며, 어느 것도 확인하지 않았습니다.',
          '**실제 하드웨어 동작.** VRAM과 카드 목록은 개발 측 자료이며, 어떤 카드가 Flux 2나 더 큰 모델을 쾌적하게 돌리는지는 나와 있지 않습니다.',
          '**로컬 사용 시 원격 측정.** 방침에 언급된 성능 지표가 로컬 실행 중에도 전송되는지는 설명되어 있지 않습니다.',
          '**프로젝트와 서비스의 법적 관계.** 플러그인 작성자와 Cosmic Interstice UG의 관계는 출처에 설명되어 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격/라이선스', '주요 차이점'],
        rows: [
          {
            '앱': '[ComfyUI](/ko/power-local-llm/comfyui-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격/라이선스': '무료 / GPL 3.0',
            '주요 차이점': '직접 조작하는 노드 그래프 편집기입니다. 이 플러그인은 ComfyUI를 백엔드로 쓰지만 Krita 뒤에 숨깁니다',
          },
          {
            '앱': '[Invoke AI](/ko/power-local-llm/invokeai-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격/라이선스': '프리미엄 / Apache 2.0',
            '주요 차이점': '자체 캔버스를 가진 별도의 웹 기반 앱이며, 그림 프로그램 안의 플러그인이 아닙니다',
          },
          {
            '앱': '[Stable Diffusion WebUI Forge](/ko/power-local-llm/stable-diffusion-forge-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격/라이선스': '무료 / AGPL-3.0',
            '주요 차이점': '매개변수가 많은 로컬 웹 UI로 이미지를 생성하며, Krita 연동은 없습니다',
          },
          {
            '앱': '[Draw Things](/ko/power-local-llm/draw-things-review)',
            '플랫폼': 'macOS, iOS',
            '가격/라이선스': '프리미엄 / 비공개 소스',
            '주요 차이점': '자체 캔버스와 인페인팅을 갖춘 Apple 네이티브 앱으로, Krita와 무관합니다',
          },
        ],
        note: '모두 PromptQuorum 디렉터리의 같은 카테고리 앱입니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Krita AI Diffusion과 Interstice.cloud는 같은 것입니까?',
            a: '완전히 같지는 않습니다. 플러그인은 오픈소스 부분이고, Interstice.cloud는 플러그인이 연결할 수 있는 웹사이트이자 유료 온라인 서비스입니다. 플러그인의 설정 대화상자에서 온라인 서비스, 관리형 로컬 서버, 자체 ComfyUI 서버 중에서 고릅니다.',
          },
          {
            q: 'Krita 6에서 동작합니까?',
            a: '설치 가이드에 따르면 아직 아닙니다. Krita 5.x는 1.x 플러그인 라인을 쓰고, Krita 6용 2.x 라인은 곧 제공될 예정으로 안내됩니다. 1.53.0 릴리스 노트는 Krita 5.3.2.1을 권장합니다.',
          },
          {
            q: '내 모델을 사용할 수 있습니까?',
            a: 'README는 자신의 체크포인트, LoRA 파일, 샘플러로 프리셋을 사용자 지정할 수 있다고 하며, 온라인 서비스 페이지는 자신의 LoRA 모델 업로드를 언급합니다. 둘 다 테스트하지 않았습니다.',
          },
          {
            q: 'GPU가 필요합니까?',
            a: '쾌적한 로컬 사용에는 필요합니다. CPU로도 동작하지만 매우 느리다고 설명됩니다. 온라인 서비스에는 개인 GPU가 필요하지 않습니다.',
          },
          {
            q: '결과물을 상업적으로 써도 됩니까?',
            a: '서비스 페이지는 사용자가 생성한 이미지의 소유권이 사용자에게 있다고 밝히지만, 로컬 사용에서는 각 확산 모델에 자체 라이선스가 있고 출처가 이를 요약하지 않으므로 선택한 모델의 라이선스를 확인하십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Krita AI Diffusion은 활발히 관리되는 오픈소스 방식으로 Krita에 생성형 채우기와 라이브 페인팅을 더해 주며, 내 GPU에서 쓰는 로컬 옵션과 GPU가 없는 환경을 위한 선불 클라우드 옵션을 모두 제공합니다. 이미 Krita로 작업하며 플러그인 설치와 수 GB 모델 다운로드를 받아들일 수 있는 화가에게 적합합니다. 개인정보 관련 진술은 개발 측의 것이고 일부는 조정되지 않았으며, 방침은 현재 릴리스보다 오래되었고, Krita 6은 아직 지원되지 않으며, 화질·속도·모델 라이선스는 여기서 테스트하지 않았습니다. 작은 선택 영역으로 먼저 써 보고, 상업적으로 사용하기 전에 선택한 모델의 라이선스를 읽으십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Interstice 웹사이트](https://www.interstice.cloud) — 플러그인 소개와 로컬·클라우드 설명.',
          '[Interstice.cloud 서비스](https://www.interstice.cloud/service) — 기능, 토큰 가격, 이미지 처리.',
          '[Interstice.cloud 개인정보 처리방침](https://www.interstice.cloud/privacy) — 데이터 처리, 2024년 4월 4일 갱신.',
          '[Interstice.cloud 사업자 정보](https://www.interstice.cloud/imprint) — 운영사 Cosmic Interstice UG, 만하임.',
          '[설치 가이드](https://docs.interstice.cloud/installation) — 요구 사항, 백엔드, 하드웨어.',
          '[GitHub의 Krita AI Diffusion](https://github.com/Acly/krita-ai-diffusion) — README, GPL-3.0 라이선스, 커밋.',
          '[Krita AI Diffusion 릴리스](https://github.com/Acly/krita-ai-diffusion/releases) — 버전 1.53.0과 릴리스 노트.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[ComfyUI 리뷰](/ko/power-local-llm/comfyui-review) — 이 플러그인이 기반으로 삼는 노드 기반 백엔드.',
          '[Invoke AI 리뷰](/ko/power-local-llm/invokeai-review) — 자체 캔버스를 갖춘 창작용 이미지 도구.',
          '[Stable Diffusion WebUI Forge 리뷰](/ko/power-local-llm/stable-diffusion-forge-review) — Stable Diffusion 모델용 빠른 로컬 웹 UI.',
          '[Draw Things 리뷰](/ko/power-local-llm/draw-things-review) — Mac과 iPhone에서 쓰는 온디바이스 이미지 생성.',
          '[이미지·영상 도구 비교](/ko/power-local-llm/local-llm-images-video-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
