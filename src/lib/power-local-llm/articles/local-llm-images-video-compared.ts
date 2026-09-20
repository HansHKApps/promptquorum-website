// Local Image, Video & Vision Tools Compared: image/video generation and vision & OCR
// Slug: local-llm-images-video-compared
// Category comparison guide for the `images-video` group. The comparison table is NOT written here:
// it is generated from the tool records (src/lib/power-local-llm/apps/*.ts) by the section whose
// `component` is 'CategoryCompareTable', so this article can never contradict the tool data.
// Every per-tool statement below must also hold in that tool's own review (see docs/PAGE_UPDATER.md
// Step 4.5, category<->review rule). Keep the locale blocks structurally identical to `en`.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Image & Video Generation',
    title: 'Local Image, Video & Vision Tools Compared (2026): Generation, Vision and OCR',
    seoTitle: 'Local Image, Video & Vision Tools Compared 2026',
    intro:
      'Local image tools do two different jobs — generating images and video from a prompt, and understanding the images you give them — and no single feature list compares them fairly. This guide compares 16 free and freemium tools that run on your own hardware, one job at a time, using a comparison table generated from the same data as each tool\'s own PromptQuorum review, so the table and the reviews cannot disagree.',
    metaDescription:
      'Compare 16 local image tools side by side: image and video generation (AUTOMATIC1111, ComfyUI, Fooocus, InvokeAI and more) and vision and OCR models. Licenses, platforms, inpainting, extensions, API and more, from official documentation.',
    twitterDescription:
      'Local image, video and vision tools compared by job — licenses, platforms, inpainting, extensions, node workflows, local API, OCR — from official documentation.',
    audience:
      'Creators, developers and privacy-conscious users choosing a local (offline-capable) image or video generation tool, or a local vision and OCR model, who want the differences laid out per job, not one blended list.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local image tools compared',
    targetKeywords: [
      'local image generation comparison',
      'stable diffusion webui comparison',
      'comfyui vs automatic1111',
      'best local image generator',
      'local vision models comparison',
      'fooocus vs invokeai',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LLaVA', 'Idefics'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**The 16 local image tools in the PromptQuorum directory split into two jobs that should be compared separately: image and video generation (13 tools) and vision and OCR (3).** Within generation, ComfyUI, InvokeAI and StableSwarmUI document node-based workflows; AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge, StableSwarmUI and ToolNeuron document extension systems; and AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge and ToolNeuron document a local API. For vision, LLaVA documents reading text in images and Idefics documents multiple images per prompt. Use the comparison table below, and read each tool\'s own review before you install it.',
    quickAnswerTop: {
      en: {
        question: 'Which local image tool should I use?',
        answer:
          'It depends on the job, so compare within one job at a time. Pick by the constraint that matters most — license, platform, inpainting, extensions, a node workflow editor, a local API, low-VRAM operation — and use the table below, which is generated from each tool\'s official documentation.',
        bullets: [
          'Image and video generation: 13 tools compared on inpainting, video, node workflows, extensions, low-VRAM mode and API.',
          'Vision and OCR: 3 tools compared on reading text in images, multiple images per prompt and a local API.',
          'A dash (—) means the project\'s documentation does not state it, not that the feature is missing.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How We Compared', anchor: 'how-we-compared' },
      { label: 'Comparison Table', anchor: 'comparison-table' },
      { label: 'Image and Video Generation: What Differs', anchor: 'generation-differences' },
      { label: 'Vision and OCR: What Differs', anchor: 'vision-differences' },
      { label: 'What This Comparison Cannot Tell You', anchor: 'limitations' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local image tools are two different jobs — generating images and video, and understanding images — so the 16 tools in the PromptQuorum directory are compared within each job, using a table generated from the same tool data as each tool\'s own review.',
          },
          {
            type: 'plain-terms',
            text: 'Some tools draw pictures from a text prompt, and some look at a picture and answer questions about it. Comparing a drawing tool with a picture-reading model on "inpainting" makes no sense, so this guide compares like with like.',
          },
        ],
        items: [
          '16 tools, two jobs: image and video generation (13) and vision and OCR (3).',
          'The table is generated from each tool\'s record and checked against its official README or site; a dash means "not stated in the documentation", never "no".',
          'Licenses differ in ways that matter: for example AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge and Locally Uncensored are AGPL-3.0, ComfyUI and Fooocus are GPL-3.0, AnimateDiff, ControlNet and InvokeAI are Apache-2.0, StableSwarmUI and ToolNeuron are MIT, and Stable Diffusion uses an OpenRAIL license.',
          'Every tool name in the table links to its own PromptQuorum review, which is where installation steps and limits are covered.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'How We Compared',
        content: [
          'Each tool\'s facts — price, license, platforms, hardware needs and category-specific attributes — are stored once, in that tool\'s directory record. The comparison table below is generated from those records, and the tool\'s own review draws on the same record, so the two cannot state different values.',
          'Category-specific attributes (for example inpainting or extension support) were taken from each project\'s official README or website and checked against the exact wording there. Where the documentation is silent, the table shows a dash rather than guessing; where a claim is qualified (experimental, dependent on a fork, or a hosted service rather than a local feature), the attribute is left out of the table and covered in the tool\'s review instead.',
          'Only tools with their own PromptQuorum review are in the table. The comparison lists tools that run on your own hardware; it does not rank them, because the right one depends on your constraint.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content: 'Choose a job below, then read across a row. Click a tool name to open its full PromptQuorum review.',
        component: 'CategoryCompareTable',
      },
      generationDifferences: {
        id: 'generation-differences',
        title: 'Image and Video Generation: What Differs',
        items: [
          '**Workflow style.** [ComfyUI](/power-local-llm/comfyui-review), [Invoke AI](/power-local-llm/invokeai-review) and [StableSwarmUI](/power-local-llm/stableswarmui-review) document node-based or graph workflows. The other tools\' documentation does not describe a node editor.',
          '**Extensions and plugins.** [AUTOMATIC1111](/power-local-llm/automatic1111-review), ComfyUI, [Stable Diffusion WebUI Forge](/power-local-llm/stable-diffusion-forge-review), StableSwarmUI and [ToolNeuron](/power-local-llm/toolneuron-review) document an extension or plugin system.',
          '**Video.** ComfyUI, StableSwarmUI, [DiffusionBee](/power-local-llm/diffusionbee-review), [Draw Things](/power-local-llm/draw-things-review), [Locally Uncensored](/power-local-llm/locally-uncensored-review) and [AnimateDiff](/power-local-llm/animatediff-video-generation-guide) document video or animation generation.',
          '**Inpainting.** AUTOMATIC1111, ComfyUI, DiffusionBee, [Fooocus](/power-local-llm/fooocus-review) and Invoke AI document inpainting.',
          '**Low-VRAM operation.** AUTOMATIC1111, Fooocus and [ControlNet](/power-local-llm/controlnet-review) document a low-VRAM mode or a stated small-VRAM requirement; for the others, check the review, since the requirement depends on the model you load.',
          '**Local API.** AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge and ToolNeuron document an API other apps can call.',
          '**License and price.** AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge and Locally Uncensored are AGPL-3.0; ComfyUI and Fooocus are GPL-3.0; AnimateDiff, ControlNet and Invoke AI are Apache-2.0; StableSwarmUI and ToolNeuron are MIT; [Stable Diffusion](/power-local-llm/stable-diffusion-review) uses an OpenRAIL license. Draw Things is a closed-source app, Locally Uncensored is a paid app and Invoke AI is freemium. Copyleft licenses attach conditions to distributing modified versions — see [AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained).',
        ],
      },
      visionDifferences: {
        id: 'vision-differences',
        title: 'Vision and OCR: What Differs',
        items: [
          '**Reading text in images.** [LLaVA](/power-local-llm/llava-review) and [Ollama vision models](/power-local-llm/ollama-vision-models-review) document reading or recognizing text in images.',
          '**Multiple images per prompt.** [Idefics](/power-local-llm/idefics-review) documents accepting several images in one prompt.',
          '**Local API.** Ollama vision models document a local API; Idefics\' documented API is hosted rather than local, so it is not counted.',
          '**License.** LLaVA and Idefics are Apache-2.0; Ollama vision models are a set of models whose licenses vary, so check each model\'s own license.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What This Comparison Cannot Tell You',
        items: [
          'It compares documented capabilities, not quality. It says nothing about how good the images look or how accurate the text reading is — that needs your own prompts and your own hardware.',
          'It does not include speed benchmarks: PromptQuorum has not measured them for these tools.',
          'Dashes are gaps in the projects\' documentation, not negative findings. Some tools may support a feature that their README does not mention.',
          'Editing and upscaling tools (Real-ESRGAN, FunClip) and DALL-E 3 via Ollama are not compared here: the first two share too little to compare, and the last has no PromptQuorum review.',
          'Tools change quickly. Each tool\'s review states the version it was checked against, and this guide is refreshed when a review is.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Why are image generation and vision models compared separately?',
            a: 'They do different jobs, so most attributes only make sense within one job — inpainting applies to image generation, reading text in images to vision models. Comparing them in one table would leave most cells empty or meaningless.',
          },
          {
            q: 'What does a dash in the comparison table mean?',
            a: 'It means the project\'s own documentation does not state that attribute. It does not mean the feature is missing; check the tool\'s review or its repository.',
          },
          {
            q: 'Is Stable Diffusion itself an app?',
            a: 'Stable Diffusion is a family of image models rather than an app. It is listed alongside the apps because it has its own PromptQuorum review, and most of the generation tools here can run Stable Diffusion models.',
          },
          {
            q: 'Do any of these tools have an affiliate link?',
            a: 'No. PromptQuorum has no affiliate relationship with any tool in this comparison at the time of writing, and no link here earns a commission.',
          },
          {
            q: 'How often is this comparison updated?',
            a: 'It is refreshed twice a year and whenever one of the listed tools\' reviews is updated, because the table is generated from the same data as those reviews.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Each tool\'s official README or website, listed in that tool\'s PromptQuorum review (linked from the comparison table).',
          '[PromptQuorum local AI app directory](/directory) — the record each row of the table is generated from.',
          '[AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained) — what the license families named above mean.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Software Directory](/directory) — browse all 200+ local AI apps and filter by category.',
          '[Local Voice & Speech Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the same comparison for text-to-speech, speech-to-text and voice agents.',
          '[AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained) — how to read MIT, GPL, AGPL, Apache and OpenRAIL licenses.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Image, Video & Vision Tools Compared (2026): Generation, Vision and OCR',
      description:
        'Compare 16 local image tools side by side: image and video generation, and vision and OCR models, from official project documentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
      inLanguage: 'en',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Creators and developers choosing local image and vision tools' },
      about: [
        { '@type': 'Thing', name: 'Image generation' },
        { '@type': 'Thing', name: 'Video generation' },
        { '@type': 'Thing', name: 'Vision models' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Local Image, Video & Vision Tools Compared (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
        },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Image & Video Generation',
    title: 'Lokale Bild-, Video- und Vision-Tools im Vergleich (2026): Generierung, Vision und OCR',
    seoTitle: 'Lokale Bild-, Video- & Vision-Tools im Vergleich 2026',
    intro:
      'Lokale Bild-Tools erfüllen zwei unterschiedliche Aufgaben — Bilder und Videos aus einem Prompt erzeugen und Bilder verstehen, die man ihnen gibt — und keine einzelne Funktionsliste vergleicht sie fair. Dieser Leitfaden vergleicht 16 kostenlose und Freemium-Tools, die auf der eigenen Hardware laufen, Aufgabe für Aufgabe. Grundlage ist eine Vergleichstabelle, die aus denselben Daten erzeugt wird wie der jeweilige PromptQuorum-Test des Tools, sodass sich Tabelle und Tests nicht widersprechen können.',
    metaDescription:
      'Vergleich von 16 lokalen Bild-Tools: Bild- und Videogenerierung (AUTOMATIC1111, ComfyUI, Fooocus, InvokeAI u. a.) sowie Vision- und OCR-Modelle. Lizenzen, Plattformen, Inpainting, Erweiterungen, API laut offizieller Dokumentation.',
    twitterDescription:
      'Lokale Bild-, Video- und Vision-Tools nach Aufgabe verglichen — Lizenzen, Plattformen, Inpainting, Erweiterungen, Node-Workflows, lokale API, OCR — laut offizieller Dokumentation.',
    audience:
      'Kreative, Entwickler und datenschutzbewusste Nutzer, die ein lokales (offlinefähiges) Tool zur Bild- oder Videogenerierung oder ein lokales Vision- und OCR-Modell auswählen und die Unterschiede pro Aufgabe statt in einer vermischten Liste sehen möchten.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale Bild-Tools im Vergleich',
    targetKeywords: [
      'lokale bildgenerierung vergleich',
      'stable diffusion webui vergleich',
      'comfyui vs automatic1111',
      'bester lokaler bildgenerator',
      'lokale vision-modelle vergleich',
      'fooocus vs invokeai',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LLaVA', 'Idefics'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Die 16 lokalen Bild-Tools im PromptQuorum-Verzeichnis teilen sich in zwei Aufgaben, die getrennt verglichen werden sollten: Bild- und Videogenerierung (13 Tools) sowie Vision und OCR (3).** Innerhalb der Generierung dokumentieren ComfyUI, InvokeAI und StableSwarmUI knotenbasierte Workflows; AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge, StableSwarmUI und ToolNeuron dokumentieren Erweiterungssysteme; und AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge und ToolNeuron dokumentieren eine lokale API. Bei Vision dokumentiert LLaVA das Lesen von Text in Bildern und Idefics mehrere Bilder pro Prompt. Nutzen Sie die Vergleichstabelle unten und lesen Sie vor der Installation den jeweiligen Test des Tools.',
    quickAnswerTop: {
      en: {
        question: 'Welches lokale Bild-Tool sollte ich verwenden?',
        answer:
          'Das hängt von der Aufgabe ab, daher immer nur innerhalb einer Aufgabe vergleichen. Wählen Sie nach der Einschränkung, die Ihnen am wichtigsten ist — Lizenz, Plattform, Inpainting, Erweiterungen, ein Node-Workflow-Editor, eine lokale API, Betrieb mit wenig VRAM — und nutzen Sie die Tabelle unten, die aus der offiziellen Dokumentation jedes Tools erzeugt wird.',
        bullets: [
          'Bild- und Videogenerierung: 13 Tools im Vergleich bei Inpainting, Video, Node-Workflows, Erweiterungen, Low-VRAM-Modus und API.',
          'Vision und OCR: 3 Tools im Vergleich beim Lesen von Text in Bildern, mehreren Bildern pro Prompt und einer lokalen API.',
          'Ein Strich (—) bedeutet, dass die Dokumentation des Projekts es nicht angibt, nicht dass die Funktion fehlt.',
        ],
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'So haben wir verglichen', anchor: 'how-we-compared' },
      { label: 'Vergleichstabelle', anchor: 'comparison-table' },
      { label: 'Bild- und Videogenerierung: Was sich unterscheidet', anchor: 'generation-differences' },
      { label: 'Vision und OCR: Was sich unterscheidet', anchor: 'vision-differences' },
      { label: 'Was dieser Vergleich nicht leisten kann', anchor: 'limitations' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Lokale Bild-Tools sind zwei verschiedene Aufgaben — Bilder und Videos erzeugen sowie Bilder verstehen — daher werden die 16 Tools im PromptQuorum-Verzeichnis innerhalb jeder Aufgabe verglichen, anhand einer Tabelle, die aus denselben Tooldaten erzeugt wird wie der jeweilige Test des Tools.',
          },
          {
            type: 'plain-terms',
            text: 'Manche Tools zeichnen Bilder aus einem Text-Prompt, andere betrachten ein Bild und beantworten Fragen dazu. Ein Zeichen-Tool und ein bildlesendes Modell beim „Inpainting“ zu vergleichen, ergibt keinen Sinn, deshalb vergleicht dieser Leitfaden Gleiches mit Gleichem.',
          },
        ],
        items: [
          '16 Tools, zwei Aufgaben: Bild- und Videogenerierung (13) sowie Vision und OCR (3).',
          'Die Tabelle wird aus dem Datensatz jedes Tools erzeugt und mit dessen offizieller README oder Website abgeglichen; ein Strich bedeutet „in der Dokumentation nicht angegeben“, nie „nein“.',
          'Lizenzen unterscheiden sich in relevanter Weise: Zum Beispiel stehen AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge und Locally Uncensored unter AGPL-3.0, ComfyUI und Fooocus unter GPL-3.0, AnimateDiff, ControlNet und InvokeAI unter Apache-2.0, StableSwarmUI und ToolNeuron unter MIT, und Stable Diffusion verwendet eine OpenRAIL-Lizenz.',
          'Jeder Toolname in der Tabelle verlinkt auf den eigenen PromptQuorum-Test, in dem Installationsschritte und Grenzen behandelt werden.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'So haben wir verglichen',
        content: [
          'Die Fakten jedes Tools — Preis, Lizenz, Plattformen, Hardwareanforderungen und aufgabenspezifische Merkmale — werden einmal im Verzeichniseintrag des Tools gespeichert. Die Vergleichstabelle unten wird aus diesen Einträgen erzeugt, und der Test des Tools stützt sich auf denselben Eintrag, sodass beide keine unterschiedlichen Werte nennen können.',
          'Aufgabenspezifische Merkmale (zum Beispiel Inpainting oder Erweiterungsunterstützung) wurden der offiziellen README oder Website des jeweiligen Projekts entnommen und am genauen Wortlaut dort überprüft. Wo die Dokumentation schweigt, zeigt die Tabelle einen Strich, statt zu raten; wo eine Aussage eingeschränkt ist (experimentell, abhängig von einem Fork oder ein gehosteter Dienst statt einer lokalen Funktion), wird das Merkmal aus der Tabelle weggelassen und stattdessen im Test des Tools behandelt.',
          'Nur Tools mit eigenem PromptQuorum-Test stehen in der Tabelle. Der Vergleich listet Tools, die auf der eigenen Hardware laufen; er ordnet sie nicht in eine Rangfolge, weil das passende Tool von Ihrer Einschränkung abhängt.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Vergleichstabelle',
        content: 'Wählen Sie unten eine Aufgabe und lesen Sie dann quer durch eine Zeile. Klicken Sie auf einen Toolnamen, um den vollständigen PromptQuorum-Test zu öffnen.',
        component: 'CategoryCompareTable',
      },
      generationDifferences: {
        id: 'generation-differences',
        title: 'Bild- und Videogenerierung: Was sich unterscheidet',
        items: [
          '**Workflow-Stil.** [ComfyUI](/de/power-local-llm/comfyui-review), [Invoke AI](/de/power-local-llm/invokeai-review) und [StableSwarmUI](/de/power-local-llm/stableswarmui-review) dokumentieren knoten- oder graphbasierte Workflows. Die Dokumentation der übrigen Tools beschreibt keinen Node-Editor.',
          '**Erweiterungen und Plugins.** [AUTOMATIC1111](/de/power-local-llm/automatic1111-review), ComfyUI, [Stable Diffusion WebUI Forge](/de/power-local-llm/stable-diffusion-forge-review), StableSwarmUI und [ToolNeuron](/de/power-local-llm/toolneuron-review) dokumentieren ein Erweiterungs- oder Plugin-System.',
          '**Video.** ComfyUI, StableSwarmUI, [DiffusionBee](/de/power-local-llm/diffusionbee-review), [Draw Things](/de/power-local-llm/draw-things-review), [Locally Uncensored](/de/power-local-llm/locally-uncensored-review) und [AnimateDiff](/de/power-local-llm/animatediff-video-generation-guide) dokumentieren die Erzeugung von Video oder Animation.',
          '**Inpainting.** AUTOMATIC1111, ComfyUI, DiffusionBee, [Fooocus](/de/power-local-llm/fooocus-review) und Invoke AI dokumentieren Inpainting.',
          '**Betrieb mit wenig VRAM.** AUTOMATIC1111, Fooocus und [ControlNet](/de/power-local-llm/controlnet-review) dokumentieren einen Low-VRAM-Modus oder eine angegebene geringe VRAM-Anforderung; bei den übrigen im Test nachlesen, da die Anforderung vom geladenen Modell abhängt.',
          '**Lokale API.** AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge und ToolNeuron dokumentieren eine API, die andere Apps aufrufen können.',
          '**Lizenz und Preis.** AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge und Locally Uncensored stehen unter AGPL-3.0; ComfyUI und Fooocus unter GPL-3.0; AnimateDiff, ControlNet und Invoke AI unter Apache-2.0; StableSwarmUI und ToolNeuron unter MIT; [Stable Diffusion](/de/power-local-llm/stable-diffusion-review) verwendet eine OpenRAIL-Lizenz. Draw Things ist eine Closed-Source-App, Locally Uncensored ist eine kostenpflichtige App und Invoke AI ist Freemium. Copyleft-Lizenzen knüpfen Bedingungen an die Weitergabe veränderter Versionen — siehe [KI-Tool-Lizenzen erklärt](/de/power-local-llm/ai-tool-licenses-explained).',
        ],
      },
      visionDifferences: {
        id: 'vision-differences',
        title: 'Vision und OCR: Was sich unterscheidet',
        items: [
          '**Text in Bildern lesen.** [LLaVA](/de/power-local-llm/llava-review) und [Ollama-Vision-Modelle](/de/power-local-llm/ollama-vision-models-review) dokumentieren das Lesen oder Erkennen von Text in Bildern.',
          '**Mehrere Bilder pro Prompt.** [Idefics](/de/power-local-llm/idefics-review) dokumentiert die Annahme mehrerer Bilder in einem Prompt.',
          '**Lokale API.** Ollama-Vision-Modelle dokumentieren eine lokale API; die dokumentierte API von Idefics ist gehostet statt lokal und wird daher nicht mitgezählt.',
          '**Lizenz.** LLaVA und Idefics stehen unter Apache-2.0; Ollama-Vision-Modelle sind eine Sammlung von Modellen mit unterschiedlichen Lizenzen, prüfen Sie also die Lizenz des jeweiligen Modells.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Was dieser Vergleich nicht leisten kann',
        items: [
          'Er vergleicht dokumentierte Fähigkeiten, nicht Qualität. Er sagt nichts darüber aus, wie gut die Bilder aussehen oder wie genau das Textlesen ist — dafür braucht es Ihre eigenen Prompts und Ihre eigene Hardware.',
          'Er enthält keine Geschwindigkeits-Benchmarks: PromptQuorum hat diese für die Tools nicht gemessen.',
          'Striche sind Lücken in der Dokumentation der Projekte, keine negativen Befunde. Manche Tools unterstützen möglicherweise eine Funktion, die ihre README nicht erwähnt.',
          'Bearbeitungs- und Upscaling-Tools (Real-ESRGAN, FunClip) sowie DALL-E 3 über Ollama werden hier nicht verglichen: Die ersten beiden haben zu wenig gemeinsam, und für das letzte gibt es keinen PromptQuorum-Test.',
          'Tools ändern sich schnell. Der Test jedes Tools nennt die geprüfte Version, und dieser Leitfaden wird aktualisiert, wenn ein Test aktualisiert wird.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Warum werden Bildgenerierung und Vision-Modelle getrennt verglichen?',
            a: 'Sie erfüllen unterschiedliche Aufgaben, daher ergeben die meisten Merkmale nur innerhalb einer Aufgabe Sinn — Inpainting gehört zur Bildgenerierung, das Lesen von Text in Bildern zu Vision-Modellen. In einer gemeinsamen Tabelle blieben die meisten Zellen leer oder bedeutungslos.',
          },
          {
            q: 'Was bedeutet ein Strich in der Vergleichstabelle?',
            a: 'Er bedeutet, dass die Dokumentation des Projekts dieses Merkmal nicht angibt. Er bedeutet nicht, dass die Funktion fehlt; schauen Sie in den Test des Tools oder in dessen Repository.',
          },
          {
            q: 'Ist Stable Diffusion selbst eine App?',
            a: 'Stable Diffusion ist eine Familie von Bildmodellen und keine App. Es steht neben den Apps, weil es einen eigenen PromptQuorum-Test hat und die meisten Generierungs-Tools hier Stable-Diffusion-Modelle ausführen können.',
          },
          {
            q: 'Hat eines dieser Tools einen Affiliate-Link?',
            a: 'Nein. PromptQuorum hat zum Zeitpunkt der Erstellung keine Affiliate-Beziehung zu einem Tool in diesem Vergleich, und kein Link hier bringt eine Provision.',
          },
          {
            q: 'Wie oft wird dieser Vergleich aktualisiert?',
            a: 'Er wird zweimal im Jahr aktualisiert und immer dann, wenn der Test eines der aufgeführten Tools aktualisiert wird, weil die Tabelle aus denselben Daten wie diese Tests erzeugt wird.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Die offizielle README oder Website jedes Tools, aufgeführt im PromptQuorum-Test des jeweiligen Tools (in der Vergleichstabelle verlinkt).',
          '[PromptQuorum-Verzeichnis für lokale KI-Apps](/de/directory) — der Datensatz, aus dem jede Zeile der Tabelle erzeugt wird.',
          '[KI-Tool-Lizenzen erklärt](/de/power-local-llm/ai-tool-licenses-explained) — was die oben genannten Lizenzfamilien bedeuten.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Verzeichnis lokaler Software](/de/directory) — alle über 200 lokalen KI-Apps durchsuchen und nach Kategorie filtern.',
          '[Lokale Sprach- und Audio-Tools im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — derselbe Vergleich für Text-to-Speech, Speech-to-Text und Sprachagenten.',
          '[KI-Tool-Lizenzen erklärt](/de/power-local-llm/ai-tool-licenses-explained) — wie man MIT-, GPL-, AGPL-, Apache- und OpenRAIL-Lizenzen liest.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale Bild-, Video- und Vision-Tools im Vergleich (2026): Generierung, Vision und OCR',
      description:
        'Vergleich von 16 lokalen Bild-Tools: Bild- und Videogenerierung sowie Vision- und OCR-Modelle, laut offizieller Projektdokumentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
      inLanguage: 'de',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Kreative und Entwickler, die lokale Bild- und Vision-Tools auswählen' },
      about: [
        { '@type': 'Thing', name: 'Bildgenerierung' },
        { '@type': 'Thing', name: 'Videogenerierung' },
        { '@type': 'Thing', name: 'Vision-Modelle' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Lokale Bild-, Video- und Vision-Tools im Vergleich (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
        },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Image & Video Generation',
    title: 'Outils locaux d\'image, de vidéo et de vision : comparatif (2026) — génération, vision et OCR',
    seoTitle: 'Outils locaux image, vidéo et vision : comparatif 2026',
    intro:
      'Les outils d\'image locaux remplissent deux missions distinctes — générer des images et des vidéos à partir d\'un prompt, et comprendre les images qu\'on leur fournit — et aucune liste de fonctionnalités unique ne permet de les comparer équitablement. Ce guide compare 16 outils gratuits et freemium qui fonctionnent sur votre propre matériel, une mission à la fois, à l\'aide d\'un tableau comparatif généré à partir des mêmes données que l\'avis PromptQuorum de chaque outil : le tableau et les avis ne peuvent donc pas se contredire.',
    metaDescription:
      'Comparez 16 outils d\'image locaux : génération d\'images et de vidéos (AUTOMATIC1111, ComfyUI, Fooocus, InvokeAI…) et modèles de vision et OCR. Licences, plateformes, inpainting, extensions, API, d\'après la documentation officielle.',
    twitterDescription:
      'Outils locaux d\'image, de vidéo et de vision comparés par mission — licences, plateformes, inpainting, extensions, workflows par nœuds, API locale, OCR — d\'après la documentation officielle.',
    audience:
      'Créateurs, développeurs et utilisateurs soucieux de leur vie privée qui choisissent un outil local (utilisable hors ligne) de génération d\'images ou de vidéos, ou un modèle local de vision et d\'OCR, et qui veulent voir les différences mission par mission, sans liste unique mélangée.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'comparatif outils image locaux',
    targetKeywords: [
      'comparatif génération d\'images locale',
      'comparatif stable diffusion webui',
      'comfyui vs automatic1111',
      'meilleur générateur d\'images local',
      'comparatif modèles de vision locaux',
      'fooocus vs invokeai',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LLaVA', 'Idefics'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Les 16 outils d\'image locaux du répertoire PromptQuorum se répartissent en deux missions qu\'il faut comparer séparément : la génération d\'images et de vidéos (13 outils) et la vision et l\'OCR (3).** Côté génération, ComfyUI, InvokeAI et StableSwarmUI documentent des workflows par nœuds ; AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge, StableSwarmUI et ToolNeuron documentent un système d\'extensions ; et AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge et ToolNeuron documentent une API locale. Côté vision, LLaVA documente la lecture de texte dans les images et Idefics documente plusieurs images par prompt. Utilisez le tableau comparatif ci-dessous, et lisez l\'avis de chaque outil avant de l\'installer.',
    quickAnswerTop: {
      en: {
        question: 'Quel outil d\'image local choisir ?',
        answer:
          'Cela dépend de la mission : comparez donc une mission à la fois. Choisissez selon la contrainte qui compte le plus — licence, plateforme, inpainting, extensions, éditeur de workflow par nœuds, API locale, fonctionnement avec peu de VRAM — et appuyez-vous sur le tableau ci-dessous, généré à partir de la documentation officielle de chaque outil.',
        bullets: [
          'Génération d\'images et de vidéos : 13 outils comparés sur l\'inpainting, la vidéo, les workflows par nœuds, les extensions, le mode faible VRAM et l\'API.',
          'Vision et OCR : 3 outils comparés sur la lecture de texte dans les images, plusieurs images par prompt et une API locale.',
          'Un tiret (—) signifie que la documentation du projet ne le précise pas, et non que la fonctionnalité est absente.',
        ],
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Notre méthode de comparaison', anchor: 'how-we-compared' },
      { label: 'Tableau comparatif', anchor: 'comparison-table' },
      { label: 'Génération d\'images et de vidéos : ce qui diffère', anchor: 'generation-differences' },
      { label: 'Vision et OCR : ce qui diffère', anchor: 'vision-differences' },
      { label: 'Ce que ce comparatif ne peut pas vous dire', anchor: 'limitations' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les outils d\'image locaux recouvrent deux missions différentes — générer des images et des vidéos, et comprendre des images — si bien que les 16 outils du répertoire PromptQuorum sont comparés au sein de chaque mission, à l\'aide d\'un tableau généré à partir des mêmes données que l\'avis de chaque outil.',
          },
          {
            type: 'plain-terms',
            text: 'Certains outils dessinent des images à partir d\'un texte, d\'autres regardent une image et répondent à des questions à son sujet. Comparer un outil de dessin et un modèle de lecture d\'images sur l\'« inpainting » n\'a aucun sens : ce guide compare donc des outils comparables.',
          },
        ],
        items: [
          '16 outils, deux missions : génération d\'images et de vidéos (13) et vision et OCR (3).',
          'Le tableau est généré à partir de la fiche de chaque outil et vérifié par rapport à son README ou à son site officiel ; un tiret signifie « non précisé dans la documentation », jamais « non ».',
          'Les licences diffèrent d\'une façon qui compte : par exemple AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge et Locally Uncensored sont sous AGPL-3.0, ComfyUI et Fooocus sous GPL-3.0, AnimateDiff, ControlNet et InvokeAI sous Apache-2.0, StableSwarmUI et ToolNeuron sous MIT, et Stable Diffusion utilise une licence OpenRAIL.',
          'Chaque nom d\'outil du tableau renvoie vers son propre avis PromptQuorum, où figurent les étapes d\'installation et les limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Notre méthode de comparaison',
        content: [
          'Les informations sur chaque outil — prix, licence, plateformes, besoins matériels et attributs propres à la catégorie — sont enregistrées une seule fois, dans la fiche de l\'outil dans le répertoire. Le tableau comparatif ci-dessous est généré à partir de ces fiches, et l\'avis de l\'outil s\'appuie sur la même fiche : les deux ne peuvent donc pas indiquer des valeurs différentes.',
          'Les attributs propres à la catégorie (par exemple l\'inpainting ou la prise en charge des extensions) ont été relevés dans le README ou sur le site officiel de chaque projet, puis vérifiés au mot près. Lorsque la documentation est muette, le tableau affiche un tiret plutôt que de deviner ; lorsqu\'une affirmation est nuancée (expérimentale, dépendante d\'un fork, ou service hébergé plutôt que fonctionnalité locale), l\'attribut est retiré du tableau et traité dans l\'avis de l\'outil.',
          'Seuls les outils dotés de leur propre avis PromptQuorum figurent dans le tableau. Le comparatif recense des outils qui fonctionnent sur votre propre matériel ; il ne les classe pas, car le bon choix dépend de votre contrainte.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif',
        content: 'Choisissez une mission ci-dessous, puis lisez la ligne de gauche à droite. Cliquez sur le nom d\'un outil pour ouvrir son avis PromptQuorum complet.',
        component: 'CategoryCompareTable',
      },
      generationDifferences: {
        id: 'generation-differences',
        title: 'Génération d\'images et de vidéos : ce qui diffère',
        items: [
          '**Style de workflow.** [ComfyUI](/fr/power-local-llm/comfyui-review), [Invoke AI](/fr/power-local-llm/invokeai-review) et [StableSwarmUI](/fr/power-local-llm/stableswarmui-review) documentent des workflows par nœuds ou par graphe. La documentation des autres outils ne décrit pas d\'éditeur de nœuds.',
          '**Extensions et plugins.** [AUTOMATIC1111](/fr/power-local-llm/automatic1111-review), ComfyUI, [Stable Diffusion WebUI Forge](/fr/power-local-llm/stable-diffusion-forge-review), StableSwarmUI et [ToolNeuron](/fr/power-local-llm/toolneuron-review) documentent un système d\'extensions ou de plugins.',
          '**Vidéo.** ComfyUI, StableSwarmUI, [DiffusionBee](/fr/power-local-llm/diffusionbee-review), [Draw Things](/fr/power-local-llm/draw-things-review), [Locally Uncensored](/fr/power-local-llm/locally-uncensored-review) et [AnimateDiff](/fr/power-local-llm/animatediff-video-generation-guide) documentent la génération de vidéos ou d\'animations.',
          '**Inpainting.** AUTOMATIC1111, ComfyUI, DiffusionBee, [Fooocus](/fr/power-local-llm/fooocus-review) et Invoke AI documentent l\'inpainting.',
          '**Fonctionnement avec peu de VRAM.** AUTOMATIC1111, Fooocus et [ControlNet](/fr/power-local-llm/controlnet-review) documentent un mode faible VRAM ou une exigence de VRAM réduite ; pour les autres, consultez l\'avis, car l\'exigence dépend du modèle que vous chargez.',
          '**API locale.** AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge et ToolNeuron documentent une API que d\'autres applications peuvent appeler.',
          '**Licence et prix.** AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge et Locally Uncensored sont sous AGPL-3.0 ; ComfyUI et Fooocus sous GPL-3.0 ; AnimateDiff, ControlNet et Invoke AI sous Apache-2.0 ; StableSwarmUI et ToolNeuron sous MIT ; [Stable Diffusion](/fr/power-local-llm/stable-diffusion-review) utilise une licence OpenRAIL. Draw Things est une application à code source fermé, Locally Uncensored est une application payante et Invoke AI est freemium. Les licences copyleft assortissent de conditions la distribution de versions modifiées — voir [Les licences des outils d\'IA expliquées](/fr/power-local-llm/ai-tool-licenses-explained).',
        ],
      },
      visionDifferences: {
        id: 'vision-differences',
        title: 'Vision et OCR : ce qui diffère',
        items: [
          '**Lecture de texte dans les images.** [LLaVA](/fr/power-local-llm/llava-review) et [Ollama vision models](/fr/power-local-llm/ollama-vision-models-review) documentent la lecture ou la reconnaissance de texte dans les images.',
          '**Plusieurs images par prompt.** [Idefics](/fr/power-local-llm/idefics-review) documente la prise en charge de plusieurs images dans un même prompt.',
          '**API locale.** Ollama vision models documentent une API locale ; l\'API documentée d\'Idefics est hébergée et non locale, elle n\'est donc pas comptée.',
          '**Licence.** LLaVA et Idefics sont sous Apache-2.0 ; Ollama vision models sont un ensemble de modèles aux licences variables : vérifiez donc la licence propre à chaque modèle.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ce que ce comparatif ne peut pas vous dire',
        items: [
          'Il compare des capacités documentées, pas la qualité. Il ne dit rien de la qualité visuelle des images ni de la justesse de la lecture du texte — cela demande vos propres prompts et votre propre matériel.',
          'Il ne comprend pas de benchmarks de vitesse : PromptQuorum ne les a pas mesurés pour ces outils.',
          'Les tirets correspondent à des lacunes dans la documentation des projets, pas à des constats négatifs. Certains outils peuvent prendre en charge une fonctionnalité que leur README ne mentionne pas.',
          'Les outils de retouche et de suréchantillonnage (Real-ESRGAN, FunClip) et DALL-E 3 via Ollama ne sont pas comparés ici : les deux premiers ont trop peu en commun pour être comparés, et le dernier n\'a pas d\'avis PromptQuorum.',
          'Les outils évoluent vite. L\'avis de chaque outil indique la version sur laquelle il a été vérifié, et ce guide est actualisé lorsqu\'un avis l\'est.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Pourquoi comparer séparément la génération d\'images et les modèles de vision ?',
            a: 'Ils remplissent des missions différentes, si bien que la plupart des attributs n\'ont de sens qu\'au sein d\'une seule mission — l\'inpainting concerne la génération d\'images, la lecture de texte dans les images concerne les modèles de vision. Les réunir dans un seul tableau laisserait la plupart des cellules vides ou dénuées de sens.',
          },
          {
            q: 'Que signifie un tiret dans le tableau comparatif ?',
            a: 'Cela signifie que la documentation du projet ne précise pas cet attribut. Cela ne veut pas dire que la fonctionnalité est absente ; consultez l\'avis de l\'outil ou son dépôt.',
          },
          {
            q: 'Stable Diffusion est-il lui-même une application ?',
            a: 'Stable Diffusion est une famille de modèles d\'image plutôt qu\'une application. Il figure à côté des applications parce qu\'il a son propre avis PromptQuorum, et que la plupart des outils de génération présentés ici peuvent exécuter des modèles Stable Diffusion.',
          },
          {
            q: 'Ces outils ont-ils un lien d\'affiliation ?',
            a: 'Non. PromptQuorum n\'a, au moment de la rédaction, aucune relation d\'affiliation avec aucun des outils de ce comparatif, et aucun lien présent ici ne rapporte de commission.',
          },
          {
            q: 'À quelle fréquence ce comparatif est-il mis à jour ?',
            a: 'Il est actualisé deux fois par an, ainsi qu\'à chaque mise à jour de l\'avis de l\'un des outils listés, puisque le tableau est généré à partir des mêmes données que ces avis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Le README ou le site officiel de chaque outil, indiqué dans l\'avis PromptQuorum de cet outil (lié depuis le tableau comparatif).',
          '[Répertoire PromptQuorum des applications d\'IA locales](/fr/directory) — la fiche à partir de laquelle chaque ligne du tableau est générée.',
          '[Les licences des outils d\'IA expliquées](/fr/power-local-llm/ai-tool-licenses-explained) — ce que signifient les familles de licences citées ci-dessus.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Répertoire de logiciels locaux](/fr/directory) — parcourez plus de 200 applications d\'IA locales et filtrez par catégorie.',
          '[Outils locaux de voix et de parole : comparatif](/fr/power-local-llm/local-llm-voice-audio-compared) — la même comparaison pour la synthèse vocale, la reconnaissance vocale et les agents vocaux.',
          '[Les licences des outils d\'IA expliquées](/fr/power-local-llm/ai-tool-licenses-explained) — comment lire les licences MIT, GPL, AGPL, Apache et OpenRAIL.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Outils locaux d\'image, de vidéo et de vision : comparatif (2026) — génération, vision et OCR',
      description:
        'Comparez 16 outils d\'image locaux : génération d\'images et de vidéos, et modèles de vision et OCR, d\'après la documentation officielle des projets.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
      inLanguage: 'fr',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Créateurs et développeurs qui choisissent des outils locaux d\'image et de vision' },
      about: [
        { '@type': 'Thing', name: 'Génération d\'images' },
        { '@type': 'Thing', name: 'Génération de vidéos' },
        { '@type': 'Thing', name: 'Modèles de vision' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Outils locaux d\'image, de vidéo et de vision : comparatif (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
        },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Image & Video Generation',
    title: 'Herramientas locales de imagen, vídeo y visión comparadas (2026): generación, visión y OCR',
    seoTitle: 'Herramientas locales de imagen y vídeo comparadas 2026',
    intro:
      'Las herramientas locales de imagen hacen dos trabajos distintos — generar imágenes y vídeo a partir de un prompt, y entender las imágenes que les das — y ninguna lista de funciones única las compara con justicia. Esta guía compara 16 herramientas gratuitas y freemium que se ejecutan en tu propio hardware, un trabajo cada vez, con una tabla comparativa generada a partir de los mismos datos que el análisis propio de cada herramienta en PromptQuorum, de modo que la tabla y los análisis no pueden contradecirse.',
    metaDescription:
      'Compara 16 herramientas locales de imagen: generación de imagen y vídeo (AUTOMATIC1111, ComfyUI, Fooocus, InvokeAI…) y modelos de visión y OCR. Licencias, plataformas y API, según la documentación oficial.',
    twitterDescription:
      'Herramientas locales de imagen, vídeo y visión comparadas por trabajo — licencias, plataformas, inpainting, extensiones, flujos por nodos, API local, OCR — según la documentación oficial.',
    audience:
      'Creadores, desarrolladores y usuarios preocupados por la privacidad que eligen una herramienta local (capaz de funcionar sin conexión) de generación de imagen o vídeo, o un modelo local de visión y OCR, y quieren ver las diferencias por trabajo, no una lista mezclada.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'herramientas locales de imagen comparadas',
    targetKeywords: [
      'comparativa generación de imágenes local',
      'comparativa stable diffusion webui',
      'comfyui vs automatic1111',
      'mejor generador de imágenes local',
      'comparativa modelos de visión locales',
      'fooocus vs invokeai',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LLaVA', 'Idefics'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**Las 16 herramientas locales de imagen del directorio de PromptQuorum se dividen en dos trabajos que conviene comparar por separado: generación de imagen y vídeo (13 herramientas) y visión y OCR (3).** Dentro de la generación, ComfyUI, InvokeAI y StableSwarmUI documentan flujos de trabajo basados en nodos; AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge, StableSwarmUI y ToolNeuron documentan sistemas de extensiones; y AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge y ToolNeuron documentan una API local. En visión, LLaVA documenta la lectura de texto en imágenes e Idefics documenta varias imágenes por prompt. Usa la tabla comparativa de abajo y lee el análisis de cada herramienta antes de instalarla.',
    quickAnswerTop: {
      en: {
        question: '¿Qué herramienta local de imagen debería usar?',
        answer:
          'Depende del trabajo, así que compara dentro de un solo trabajo cada vez. Elige según la restricción que más importe — licencia, plataforma, inpainting, extensiones, un editor de flujos por nodos, una API local, funcionamiento con poca VRAM — y usa la tabla de abajo, generada a partir de la documentación oficial de cada herramienta.',
        bullets: [
          'Generación de imagen y vídeo: 13 herramientas comparadas en inpainting, vídeo, flujos por nodos, extensiones, modo de poca VRAM y API.',
          'Visión y OCR: 3 herramientas comparadas en lectura de texto en imágenes, varias imágenes por prompt y API local.',
          'Un guion (—) significa que la documentación del proyecto no lo indica, no que la función no exista.',
        ],
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Cómo comparamos', anchor: 'how-we-compared' },
      { label: 'Tabla comparativa', anchor: 'comparison-table' },
      { label: 'Generación de imagen y vídeo: qué cambia', anchor: 'generation-differences' },
      { label: 'Visión y OCR: qué cambia', anchor: 'vision-differences' },
      { label: 'Lo que esta comparación no puede decirte', anchor: 'limitations' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Las herramientas locales de imagen son dos trabajos distintos — generar imágenes y vídeo, y entender imágenes — por lo que las 16 herramientas del directorio de PromptQuorum se comparan dentro de cada trabajo, con una tabla generada a partir de los mismos datos que el análisis propio de cada herramienta.',
          },
          {
            type: 'plain-terms',
            text: 'Algunas herramientas dibujan imágenes a partir de un prompt de texto, y otras miran una imagen y responden preguntas sobre ella. Comparar una herramienta de dibujo con un modelo que lee imágenes en "inpainting" no tiene sentido, así que esta guía compara solo lo comparable.',
          },
        ],
        items: [
          '16 herramientas, dos trabajos: generación de imagen y vídeo (13) y visión y OCR (3).',
          'La tabla se genera a partir del registro de cada herramienta y se contrasta con su README o sitio oficial; un guion significa "no indicado en la documentación", nunca "no".',
          'Las licencias difieren de formas que importan: por ejemplo, AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge y Locally Uncensored son AGPL-3.0, ComfyUI y Fooocus son GPL-3.0, AnimateDiff, ControlNet e InvokeAI son Apache-2.0, StableSwarmUI y ToolNeuron son MIT, y Stable Diffusion usa una licencia OpenRAIL.',
          'Cada nombre de herramienta de la tabla enlaza a su propio análisis en PromptQuorum, donde se explican los pasos de instalación y los límites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Cómo comparamos',
        content: [
          'Los datos de cada herramienta — precio, licencia, plataformas, requisitos de hardware y atributos específicos de la categoría — se guardan una sola vez, en el registro de esa herramienta en el directorio. La tabla comparativa de abajo se genera a partir de esos registros, y el análisis de cada herramienta se basa en el mismo registro, por lo que ambos no pueden indicar valores distintos.',
          'Los atributos específicos de la categoría (por ejemplo, inpainting o compatibilidad con extensiones) se tomaron del README o sitio web oficial de cada proyecto y se contrastaron con la redacción exacta allí. Cuando la documentación no dice nada, la tabla muestra un guion en lugar de adivinar; cuando una afirmación tiene matices (experimental, dependiente de un fork o un servicio alojado y no una función local), el atributo se deja fuera de la tabla y se trata en el análisis de la herramienta.',
          'Solo las herramientas con análisis propio en PromptQuorum están en la tabla. La comparación recoge herramientas que se ejecutan en tu propio hardware; no las clasifica, porque la adecuada depende de tu restricción.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa',
        content: 'Elige un trabajo abajo y lee a lo largo de una fila. Haz clic en el nombre de una herramienta para abrir su análisis completo en PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      generationDifferences: {
        id: 'generation-differences',
        title: 'Generación de imagen y vídeo: qué cambia',
        items: [
          '**Estilo de flujo de trabajo.** [ComfyUI](/es/power-local-llm/comfyui-review), [Invoke AI](/es/power-local-llm/invokeai-review) y [StableSwarmUI](/es/power-local-llm/stableswarmui-review) documentan flujos basados en nodos o grafos. La documentación de las demás herramientas no describe un editor de nodos.',
          '**Extensiones y plugins.** [AUTOMATIC1111](/es/power-local-llm/automatic1111-review), ComfyUI, [Stable Diffusion WebUI Forge](/es/power-local-llm/stable-diffusion-forge-review), StableSwarmUI y [ToolNeuron](/es/power-local-llm/toolneuron-review) documentan un sistema de extensiones o plugins.',
          '**Vídeo.** ComfyUI, StableSwarmUI, [DiffusionBee](/es/power-local-llm/diffusionbee-review), [Draw Things](/es/power-local-llm/draw-things-review), [Locally Uncensored](/es/power-local-llm/locally-uncensored-review) y [AnimateDiff](/es/power-local-llm/animatediff-video-generation-guide) documentan la generación de vídeo o animación.',
          '**Inpainting.** AUTOMATIC1111, ComfyUI, DiffusionBee, [Fooocus](/es/power-local-llm/fooocus-review) e Invoke AI documentan el inpainting.',
          '**Funcionamiento con poca VRAM.** AUTOMATIC1111, Fooocus y [ControlNet](/es/power-local-llm/controlnet-review) documentan un modo de poca VRAM o un requisito declarado de VRAM reducida; para las demás, consulta el análisis, ya que el requisito depende del modelo que cargues.',
          '**API local.** AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge y ToolNeuron documentan una API a la que pueden llamar otras apps.',
          '**Licencia y precio.** AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge y Locally Uncensored son AGPL-3.0; ComfyUI y Fooocus son GPL-3.0; AnimateDiff, ControlNet e Invoke AI son Apache-2.0; StableSwarmUI y ToolNeuron son MIT; [Stable Diffusion](/es/power-local-llm/stable-diffusion-review) usa una licencia OpenRAIL. Draw Things es una app de código cerrado, Locally Uncensored es una app de pago e Invoke AI es freemium. Las licencias copyleft imponen condiciones al distribuir versiones modificadas — consulta [Licencias de herramientas de IA explicadas](/es/power-local-llm/ai-tool-licenses-explained).',
        ],
      },
      visionDifferences: {
        id: 'vision-differences',
        title: 'Visión y OCR: qué cambia',
        items: [
          '**Lectura de texto en imágenes.** [LLaVA](/es/power-local-llm/llava-review) y [los modelos de visión de Ollama](/es/power-local-llm/ollama-vision-models-review) documentan la lectura o el reconocimiento de texto en imágenes.',
          '**Varias imágenes por prompt.** [Idefics](/es/power-local-llm/idefics-review) documenta que acepta varias imágenes en un mismo prompt.',
          '**API local.** Los modelos de visión de Ollama documentan una API local; la API documentada de Idefics está alojada y no es local, por lo que no se cuenta.',
          '**Licencia.** LLaVA e Idefics son Apache-2.0; los modelos de visión de Ollama son un conjunto de modelos con licencias distintas, así que consulta la licencia de cada modelo.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Lo que esta comparación no puede decirte',
        items: [
          'Compara capacidades documentadas, no calidad. No dice nada sobre lo buenas que se ven las imágenes ni lo precisa que es la lectura de texto — para eso necesitas tus propios prompts y tu propio hardware.',
          'No incluye pruebas de velocidad: PromptQuorum no las ha medido para estas herramientas.',
          'Los guiones son lagunas en la documentación de los proyectos, no hallazgos negativos. Algunas herramientas pueden admitir una función que su README no menciona.',
          'Las herramientas de edición y escalado (Real-ESRGAN, FunClip) y DALL-E 3 mediante Ollama no se comparan aquí: las dos primeras tienen muy poco en común para compararse, y la última no tiene análisis en PromptQuorum.',
          'Las herramientas cambian rápido. El análisis de cada herramienta indica la versión con la que se contrastó, y esta guía se actualiza cuando se actualiza un análisis.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Por qué se comparan por separado la generación de imágenes y los modelos de visión?',
            a: 'Hacen trabajos distintos, así que la mayoría de los atributos solo tienen sentido dentro de un trabajo — el inpainting se aplica a la generación de imágenes, la lectura de texto en imágenes a los modelos de visión. Compararlos en una sola tabla dejaría la mayoría de las celdas vacías o sin sentido.',
          },
          {
            q: '¿Qué significa un guion en la tabla comparativa?',
            a: 'Significa que la documentación del propio proyecto no indica ese atributo. No significa que la función no exista; consulta el análisis de la herramienta o su repositorio.',
          },
          {
            q: '¿Es Stable Diffusion en sí una app?',
            a: 'Stable Diffusion es una familia de modelos de imagen, no una app. Aparece junto a las apps porque tiene su propio análisis en PromptQuorum, y la mayoría de las herramientas de generación de aquí pueden ejecutar modelos de Stable Diffusion.',
          },
          {
            q: '¿Alguna de estas herramientas tiene un enlace de afiliado?',
            a: 'No. PromptQuorum no tiene ninguna relación de afiliación con ninguna herramienta de esta comparación en el momento de escribir esto, y ningún enlace de aquí genera comisión.',
          },
          {
            q: '¿Con qué frecuencia se actualiza esta comparación?',
            a: 'Se actualiza dos veces al año y siempre que se actualiza el análisis de alguna de las herramientas incluidas, porque la tabla se genera a partir de los mismos datos que esos análisis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'El README o sitio web oficial de cada herramienta, indicado en el análisis de esa herramienta en PromptQuorum (enlazado desde la tabla comparativa).',
          '[Directorio de apps de IA local de PromptQuorum](/es/directory) — el registro a partir del cual se genera cada fila de la tabla.',
          '[Licencias de herramientas de IA explicadas](/es/power-local-llm/ai-tool-licenses-explained) — qué significan las familias de licencias mencionadas arriba.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Directorio de software local](/es/directory) — explora todas las más de 200 apps de IA local y filtra por categoría.',
          '[Herramientas locales de voz y habla comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la misma comparación para síntesis de voz, reconocimiento de voz y agentes de voz.',
          '[Licencias de herramientas de IA explicadas](/es/power-local-llm/ai-tool-licenses-explained) — cómo leer las licencias MIT, GPL, AGPL, Apache y OpenRAIL.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Herramientas locales de imagen, vídeo y visión comparadas (2026): generación, visión y OCR',
      description:
        'Compara 16 herramientas locales de imagen: generación de imagen y vídeo, y modelos de visión y OCR, según la documentación oficial de los proyectos.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
      inLanguage: 'es',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Creadores y desarrolladores que eligen herramientas locales de imagen y visión' },
      about: [
        { '@type': 'Thing', name: 'Generación de imágenes' },
        { '@type': 'Thing', name: 'Generación de vídeo' },
        { '@type': 'Thing', name: 'Modelos de visión' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Herramientas locales de imagen, vídeo y visión comparadas (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
        },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Image & Video Generation',
    title: 'ローカル画像・動画・ビジョンツール比較(2026):生成、ビジョン、OCR',
    seoTitle: 'ローカル画像・動画・ビジョンツール比較2026',
    intro:
      'ローカルの画像ツールには2つの異なる役割があります。プロンプトから画像や動画を生成することと、与えた画像を理解することです。単一の機能一覧では、両者を公平に比較できません。このガイドでは、自分のハードウェア上で動作する無料・フリーミアムの16ツールを、役割ごとに比較します。比較表は各ツールのPromptQuorumレビューと同じデータから生成されているため、表とレビューが食い違うことはありません。',
    metaDescription:
      'ローカル画像ツール16種を比較:画像・動画生成(AUTOMATIC1111、ComfyUI、Fooocus、InvokeAIなど)とビジョン・OCRモデル。ライセンス、対応OS、インペイント、拡張機能、APIなどを公式ドキュメントから整理。',
    twitterDescription:
      'ローカルの画像・動画・ビジョンツールを役割別に比較。ライセンス、対応OS、インペイント、拡張機能、ノードワークフロー、ローカルAPI、OCRを公式ドキュメントから整理。',
    audience:
      'ローカル(オフライン対応)の画像・動画生成ツール、またはローカルのビジョン・OCRモデルを選びたい、クリエイター、開発者、プライバシーを重視するユーザー。1つに混ぜた一覧ではなく、役割ごとの違いを知りたい方向け。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカル画像ツール比較',
    targetKeywords: [
      'ローカル 画像生成 比較',
      'stable diffusion webui 比較',
      'comfyui automatic1111 違い',
      'ローカル 画像生成 おすすめ',
      'ローカル ビジョンモデル 比較',
      'fooocus invokeai 比較',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LLaVA', 'Idefics'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**PromptQuorumディレクトリにある16のローカル画像ツールは、別々に比較すべき2つの役割に分かれます。画像・動画生成(13ツール)と、ビジョン・OCR(3ツール)です。** 生成系では、ComfyUI、InvokeAI、StableSwarmUIがノードベースのワークフローを、AUTOMATIC1111、ComfyUI、Stable Diffusion WebUI Forge、StableSwarmUI、ToolNeuronが拡張機能の仕組みを、AUTOMATIC1111、ComfyUI、Stable Diffusion WebUI Forge、ToolNeuronがローカルAPIをそれぞれドキュメントに記載しています。ビジョン系では、LLaVAが画像内のテキスト読み取りを、Ideficsが1回のプロンプトで複数画像を扱えることを記載しています。下の比較表を使い、インストール前に各ツールのレビューを読んでください。',
    quickAnswerTop: {
      en: {
        question: 'どのローカル画像ツールを使えばよいか',
        answer:
          '役割によって答えが変わるため、1つの役割の中で比較してください。ライセンス、対応OS、インペイント、拡張機能、ノードワークフローエディタ、ローカルAPI、低VRAM動作など、最も重視する条件で選び、各ツールの公式ドキュメントから生成した下の表を使ってください。',
        bullets: [
          '画像・動画生成:13ツールを、インペイント、動画、ノードワークフロー、拡張機能、低VRAMモード、APIで比較。',
          'ビジョン・OCR:3ツールを、画像内テキストの読み取り、1プロンプトでの複数画像、ローカルAPIで比較。',
          'ダッシュ(—)は、プロジェクトのドキュメントに記載がないことを意味し、機能がないという意味ではありません。',
        ],
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '比較の方法', anchor: 'how-we-compared' },
      { label: '比較表', anchor: 'comparison-table' },
      { label: '画像・動画生成:違いのポイント', anchor: 'generation-differences' },
      { label: 'ビジョン・OCR:違いのポイント', anchor: 'vision-differences' },
      { label: 'この比較で分からないこと', anchor: 'limitations' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '出典', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカル画像ツールは、画像・動画の生成と画像の理解という2つの異なる役割に分かれるため、PromptQuorumディレクトリの16ツールは役割ごとに比較しており、その表は各ツールのレビューと同じツールデータから生成されています。',
          },
          {
            type: 'plain-terms',
            text: 'テキストのプロンプトから絵を描くツールもあれば、画像を見てそれについての質問に答えるツールもあります。絵を描くツールと画像を読み取るモデルを「インペイント」で比べても意味がないため、このガイドでは同じ種類どうしを比較します。',
          },
        ],
        items: [
          '16ツール、2つの役割:画像・動画生成(13)とビジョン・OCR(3)。',
          '表は各ツールのレコードから生成され、公式のREADMEまたはサイトと照合済みです。ダッシュは「ドキュメントに記載なし」を意味し、「なし」を意味しません。',
          'ライセンスには重要な違いがあります。たとえば、AUTOMATIC1111、DiffusionBee、Stable Diffusion WebUI Forge、Locally UncensoredはAGPL-3.0、ComfyUIとFooocusはGPL-3.0、AnimateDiff、ControlNet、InvokeAIはApache-2.0、StableSwarmUIとToolNeuronはMIT、Stable DiffusionはOpenRAILライセンスです。',
          '表のツール名はいずれも、そのツール自身のPromptQuorumレビューにリンクしており、インストール手順と制限事項はそちらで扱っています。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '比較の方法',
        content: [
          '各ツールの事実情報(価格、ライセンス、対応プラットフォーム、必要なハードウェア、カテゴリ固有の属性)は、そのツールのディレクトリレコードに1か所だけ保存されています。下の比較表はそれらのレコードから生成され、ツール自身のレビューも同じレコードを参照するため、両者が異なる値を示すことはありません。',
          'カテゴリ固有の属性(たとえばインペイントや拡張機能のサポート)は、各プロジェクトの公式READMEまたはウェブサイトから取得し、そこでの正確な表現と照合しました。ドキュメントに記載がない場合は、推測せず表にダッシュを表示します。記述に条件が付く場合(実験的、フォークに依存、ローカル機能ではなくホスト型サービスなど)は、その属性を表から外し、ツールのレビューで扱います。',
          '表に載せているのは、独自のPromptQuorumレビューがあるツールだけです。この比較は自分のハードウェアで動作するツールを一覧にしたもので、順位付けはしません。適したツールは、あなたの制約条件によって変わるためです。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '比較表',
        content: '下から役割を選び、行に沿って読んでください。ツール名をクリックすると、PromptQuorumの詳細レビューが開きます。',
        component: 'CategoryCompareTable',
      },
      generationDifferences: {
        id: 'generation-differences',
        title: '画像・動画生成:違いのポイント',
        items: [
          '**ワークフローの形式。** [ComfyUI](/ja/power-local-llm/comfyui-review)、[Invoke AI](/ja/power-local-llm/invokeai-review)、[StableSwarmUI](/ja/power-local-llm/stableswarmui-review)は、ノードベースまたはグラフ形式のワークフローをドキュメントに記載しています。他のツールのドキュメントには、ノードエディタの記述はありません。',
          '**拡張機能とプラグイン。** [AUTOMATIC1111](/ja/power-local-llm/automatic1111-review)、ComfyUI、[Stable Diffusion WebUI Forge](/ja/power-local-llm/stable-diffusion-forge-review)、StableSwarmUI、[ToolNeuron](/ja/power-local-llm/toolneuron-review)は、拡張機能またはプラグインの仕組みをドキュメントに記載しています。',
          '**動画。** ComfyUI、StableSwarmUI、[DiffusionBee](/ja/power-local-llm/diffusionbee-review)、[Draw Things](/ja/power-local-llm/draw-things-review)、[Locally Uncensored](/ja/power-local-llm/locally-uncensored-review)、[AnimateDiff](/ja/power-local-llm/animatediff-video-generation-guide)は、動画またはアニメーションの生成をドキュメントに記載しています。',
          '**インペイント。** AUTOMATIC1111、ComfyUI、DiffusionBee、[Fooocus](/ja/power-local-llm/fooocus-review)、Invoke AIは、インペイントをドキュメントに記載しています。',
          '**低VRAM動作。** AUTOMATIC1111、Fooocus、[ControlNet](/ja/power-local-llm/controlnet-review)は、低VRAMモードまたは小さなVRAM要件の明記をドキュメントに記載しています。他のツールについては、必要な容量が読み込むモデルによって変わるため、レビューを確認してください。',
          '**ローカルAPI。** AUTOMATIC1111、ComfyUI、Stable Diffusion WebUI Forge、ToolNeuronは、他のアプリから呼び出せるAPIをドキュメントに記載しています。',
          '**ライセンスと価格。** AUTOMATIC1111、DiffusionBee、Stable Diffusion WebUI Forge、Locally UncensoredはAGPL-3.0、ComfyUIとFooocusはGPL-3.0、AnimateDiff、ControlNet、Invoke AIはApache-2.0、StableSwarmUIとToolNeuronはMIT、[Stable Diffusion](/ja/power-local-llm/stable-diffusion-review)はOpenRAILライセンスです。Draw Thingsはクローズドソースのアプリ、Locally Uncensoredは有料アプリ、Invoke AIはフリーミアムです。コピーレフト・ライセンスは、改変版を配布する際に条件を課します。詳しくは[AIツールのライセンスを解説](/ja/power-local-llm/ai-tool-licenses-explained)をご覧ください。',
        ],
      },
      visionDifferences: {
        id: 'vision-differences',
        title: 'ビジョン・OCR:違いのポイント',
        items: [
          '**画像内テキストの読み取り。** [LLaVA](/ja/power-local-llm/llava-review)と[Ollamaのビジョンモデル](/ja/power-local-llm/ollama-vision-models-review)は、画像内のテキストの読み取りまたは認識をドキュメントに記載しています。',
          '**1プロンプトでの複数画像。** [Idefics](/ja/power-local-llm/idefics-review)は、1回のプロンプトで複数の画像を受け付けることをドキュメントに記載しています。',
          '**ローカルAPI。** OllamaのビジョンモデルはローカルAPIをドキュメントに記載しています。IdeficsのドキュメントにあるAPIはローカルではなくホスト型のため、対象に数えていません。',
          '**ライセンス。** LLaVAとIdeficsはApache-2.0です。Ollamaのビジョンモデルはライセンスが異なるモデルの集まりのため、各モデル自身のライセンスを確認してください。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'この比較で分からないこと',
        items: [
          'この比較はドキュメントに記載された機能を比べるもので、品質は比べていません。画像の出来栄えやテキスト読み取りの精度については何も述べていません。それには、あなた自身のプロンプトとハードウェアでの確認が必要です。',
          '速度ベンチマークは含まれていません。PromptQuorumはこれらのツールについて測定していません。',
          'ダッシュはプロジェクトのドキュメントの空白であり、否定的な結果ではありません。READMEに記載がなくても、その機能に対応しているツールがある可能性があります。',
          '編集・アップスケーリング系のツール(Real-ESRGAN、FunClip)とOllama経由のDALL-E 3は、ここでは比較していません。前者の2つは共通点が少なすぎて比較できず、後者には独自のPromptQuorumレビューがないためです。',
          'ツールは急速に変化します。各ツールのレビューには確認したバージョンが記載されており、このガイドはレビューが更新されるときに合わせて更新されます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '画像生成とビジョンモデルを別々に比較するのはなぜですか?',
            a: '両者は異なる役割を持つため、ほとんどの属性は1つの役割の中でしか意味を持ちません。インペイントは画像生成に、画像内テキストの読み取りはビジョンモデルに当てはまります。1つの表にまとめると、ほとんどのセルが空になるか意味を成さなくなります。',
          },
          {
            q: '比較表のダッシュは何を意味しますか?',
            a: 'プロジェクト自身のドキュメントにその属性の記載がないことを意味します。機能がないという意味ではありません。ツールのレビューまたはリポジトリで確認してください。',
          },
          {
            q: 'Stable Diffusion自体はアプリですか?',
            a: 'Stable Diffusionはアプリではなく、画像モデルのファミリーです。独自のPromptQuorumレビューがあるため、アプリと並べて掲載しています。ここにある生成ツールの多くは、Stable Diffusionのモデルを実行できます。',
          },
          {
            q: 'これらのツールにアフィリエイトリンクはありますか?',
            a: 'いいえ。執筆時点で、PromptQuorumはこの比較に含まれるどのツールともアフィリエイト関係になく、ここにあるリンクで報酬が発生することもありません。',
          },
          {
            q: 'この比較はどのくらいの頻度で更新されますか?',
            a: '年2回、および掲載ツールのレビューが更新されるたびに更新されます。表がそれらのレビューと同じデータから生成されているためです。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '各ツールの公式READMEまたはウェブサイト。そのツールのPromptQuorumレビューに記載(比較表からリンク)。',
          '[PromptQuorumローカルAIアプリディレクトリ](/ja/directory) — 表の各行の生成元となるレコード。',
          '[AIツールのライセンスを解説](/ja/power-local-llm/ai-tool-licenses-explained) — 上で挙げたライセンスの系統の意味。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルソフトウェアディレクトリ](/ja/directory) — 200以上のローカルAIアプリを閲覧し、カテゴリで絞り込めます。',
          '[ローカル音声・スピーチツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 音声合成、音声認識、音声エージェントについての同様の比較。',
          '[AIツールのライセンスを解説](/ja/power-local-llm/ai-tool-licenses-explained) — MIT、GPL、AGPL、Apache、OpenRAILライセンスの読み方。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカル画像・動画・ビジョンツール比較(2026):生成、ビジョン、OCR',
      description:
        'ローカル画像ツール16種を比較:画像・動画生成とビジョン・OCRモデルを、プロジェクトの公式ドキュメントから整理。',
      url: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
      inLanguage: 'ja',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカルの画像・ビジョンツールを選ぶクリエイターと開発者' },
      about: [
        { '@type': 'Thing', name: '画像生成' },
        { '@type': 'Thing', name: '動画生成' },
        { '@type': 'Thing', name: 'ビジョンモデル' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'ローカル画像・動画・ビジョンツール比較(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
        },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Image & Video Generation',
    title: '本地图像、视频与视觉工具对比(2026):生成、视觉与OCR',
    seoTitle: '本地图像、视频与视觉工具对比2026',
    intro:
      '本地图像工具承担两类不同的任务——根据提示词生成图像和视频,以及理解你提供的图像——任何单一的功能清单都无法公平地对比它们。本指南按任务逐一对比16款可在你自己设备上运行的免费和免费增值工具,所用的对比表与各工具的PromptQuorum评测出自同一份数据,因此表格与评测不会互相矛盾。',
    metaDescription:
      '并排对比16款本地图像工具:图像与视频生成(AUTOMATIC1111、ComfyUI、Fooocus、InvokeAI等)以及视觉与OCR模型。许可证、平台、局部重绘、扩展、API等,均来自官方文档。',
    twitterDescription:
      '按任务对比本地图像、视频与视觉工具——许可证、平台、局部重绘、扩展、节点工作流、本地API、OCR——均来自官方文档。',
    audience:
      '正在选择本地(可离线运行)图像或视频生成工具,或本地视觉与OCR模型的创作者、开发者和注重隐私的用户,希望按任务分别了解差异,而不是看一份混合的清单。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地图像工具对比',
    targetKeywords: [
      '本地图像生成对比',
      'stable diffusion webui对比',
      'comfyui vs automatic1111',
      '最佳本地图像生成器',
      '本地视觉模型对比',
      'fooocus vs invokeai',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LLaVA', 'Idefics'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**PromptQuorum目录中的16款本地图像工具分为两类应分别对比的任务:图像与视频生成(13款)以及视觉与OCR(3款)。** 在生成类中,ComfyUI、InvokeAI和StableSwarmUI在文档中说明了基于节点的工作流;AUTOMATIC1111、ComfyUI、Stable Diffusion WebUI Forge、StableSwarmUI和ToolNeuron在文档中说明了扩展系统;AUTOMATIC1111、ComfyUI、Stable Diffusion WebUI Forge和ToolNeuron在文档中说明了本地API。在视觉类中,LLaVA在文档中说明了读取图像中的文字,Idefics在文档中说明了单次提示可处理多张图像。请使用下方的对比表,并在安装前阅读各工具自己的评测。',
    quickAnswerTop: {
      en: {
        question: '我应该使用哪款本地图像工具?',
        answer:
          '这取决于任务,因此每次只在同一类任务内进行对比。请按最重要的限制条件来选择——许可证、平台、局部重绘、扩展、节点工作流编辑器、本地API、低显存运行——并使用下方根据各工具官方文档生成的表格。',
        bullets: [
          '图像与视频生成:对13款工具在局部重绘、视频、节点工作流、扩展、低显存模式和API方面进行对比。',
          '视觉与OCR:对3款工具在读取图像中的文字、单次提示多张图像和本地API方面进行对比。',
          '短横线(—)表示项目文档中没有说明,并不表示该功能不存在。',
        ],
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '我们如何对比', anchor: 'how-we-compared' },
      { label: '对比表', anchor: 'comparison-table' },
      { label: '图像与视频生成:差异所在', anchor: 'generation-differences' },
      { label: '视觉与OCR:差异所在', anchor: 'vision-differences' },
      { label: '本对比无法告诉你的事', anchor: 'limitations' },
      { label: '常见问题', anchor: 'faq' },
      { label: '资料来源', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地图像工具承担两类不同的任务——生成图像和视频,以及理解图像——因此PromptQuorum目录中的16款工具在各自任务内进行对比,所用表格与各工具自己的评测出自同一份工具数据。',
          },
          {
            type: 'plain-terms',
            text: '有些工具根据文字提示绘制图片,有些则查看一张图片并回答与之相关的问题。拿绘图工具和读图模型比较“局部重绘”毫无意义,所以本指南只在同类之间进行对比。',
          },
        ],
        items: [
          '16款工具,两类任务:图像与视频生成(13款)以及视觉与OCR(3款)。',
          '表格根据每款工具的记录生成,并对照其官方README或网站核对;短横线表示“文档中未说明”,绝不表示“没有”。',
          '许可证的差异很重要,例如AUTOMATIC1111、DiffusionBee、Stable Diffusion WebUI Forge和Locally Uncensored为AGPL-3.0,ComfyUI和Fooocus为GPL-3.0,AnimateDiff、ControlNet和InvokeAI为Apache-2.0,StableSwarmUI和ToolNeuron为MIT,而Stable Diffusion使用OpenRAIL许可证。',
          '表格中的每个工具名称都链接到其自己的PromptQuorum评测,安装步骤和局限都在评测中介绍。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '我们如何对比',
        content: [
          '每款工具的各项事实——价格、许可证、平台、硬件需求以及类别专属属性——都只在该工具的目录记录中存储一次。下方的对比表根据这些记录生成,而该工具自己的评测也采用同一份记录,因此两者不会给出不同的数值。',
          '类别专属属性(例如局部重绘或扩展支持)取自各项目的官方README或网站,并对照其中的确切措辞进行核对。文档没有提及的地方,表格显示短横线而不是猜测;如果某项说法带有限定条件(实验性、依赖某个分支,或是托管服务而非本地功能),该属性不会列入表格,而是在该工具的评测中说明。',
          '只有拥有自己PromptQuorum评测的工具才会出现在表格中。本对比列出的是可在你自己设备上运行的工具,不对它们排名,因为合适的选择取决于你的限制条件。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '对比表',
        content: '请在下方选择一类任务,然后横向阅读每一行。点击工具名称可打开其完整的PromptQuorum评测。',
        component: 'CategoryCompareTable',
      },
      generationDifferences: {
        id: 'generation-differences',
        title: '图像与视频生成:差异所在',
        items: [
          '**工作流风格。** [ComfyUI](/zh/power-local-llm/comfyui-review)、[Invoke AI](/zh/power-local-llm/invokeai-review)和[StableSwarmUI](/zh/power-local-llm/stableswarmui-review)在文档中说明了基于节点或图的工作流。其他工具的文档没有描述节点编辑器。',
          '**扩展与插件。** [AUTOMATIC1111](/zh/power-local-llm/automatic1111-review)、ComfyUI、[Stable Diffusion WebUI Forge](/zh/power-local-llm/stable-diffusion-forge-review)、StableSwarmUI和[ToolNeuron](/zh/power-local-llm/toolneuron-review)在文档中说明了扩展或插件系统。',
          '**视频。** ComfyUI、StableSwarmUI、[DiffusionBee](/zh/power-local-llm/diffusionbee-review)、[Draw Things](/zh/power-local-llm/draw-things-review)、[Locally Uncensored](/zh/power-local-llm/locally-uncensored-review)和[AnimateDiff](/zh/power-local-llm/animatediff-video-generation-guide)在文档中说明了视频或动画生成。',
          '**局部重绘。** AUTOMATIC1111、ComfyUI、DiffusionBee、[Fooocus](/zh/power-local-llm/fooocus-review)和Invoke AI在文档中说明了局部重绘。',
          '**低显存运行。** AUTOMATIC1111、Fooocus和[ControlNet](/zh/power-local-llm/controlnet-review)在文档中说明了低显存模式或明确的小显存需求;其他工具请查看其评测,因为显存需求取决于你加载的模型。',
          '**本地API。** AUTOMATIC1111、ComfyUI、Stable Diffusion WebUI Forge和ToolNeuron在文档中说明了可供其他应用调用的API。',
          '**许可证与价格。** AUTOMATIC1111、DiffusionBee、Stable Diffusion WebUI Forge和Locally Uncensored为AGPL-3.0;ComfyUI和Fooocus为GPL-3.0;AnimateDiff、ControlNet和Invoke AI为Apache-2.0;StableSwarmUI和ToolNeuron为MIT;[Stable Diffusion](/zh/power-local-llm/stable-diffusion-review)使用OpenRAIL许可证。Draw Things是闭源应用,Locally Uncensored是付费应用,Invoke AI为免费增值。Copyleft许可证会对分发修改后的版本附加条件——参见[AI工具许可证详解](/zh/power-local-llm/ai-tool-licenses-explained)。',
        ],
      },
      visionDifferences: {
        id: 'vision-differences',
        title: '视觉与OCR:差异所在',
        items: [
          '**读取图像中的文字。** [LLaVA](/zh/power-local-llm/llava-review)和[Ollama视觉模型](/zh/power-local-llm/ollama-vision-models-review)在文档中说明了读取或识别图像中的文字。',
          '**单次提示多张图像。** [Idefics](/zh/power-local-llm/idefics-review)在文档中说明了可在一次提示中接受多张图像。',
          '**本地API。** Ollama视觉模型在文档中说明了本地API;Idefics文档中所述的API是托管的而非本地的,因此不计入。',
          '**许可证。** LLaVA和Idefics为Apache-2.0;Ollama视觉模型是一组许可证各不相同的模型,请查看每个模型自己的许可证。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '本对比无法告诉你的事',
        items: [
          '它对比的是文档中说明的能力,而不是质量。它无法说明图像看起来效果如何,也无法说明文字读取的准确程度——这需要你用自己的提示词和自己的硬件来验证。',
          '它不包含速度基准测试:PromptQuorum没有对这些工具做过相关测量。',
          '短横线是项目文档中的空白,而不是否定的结论。有些工具可能支持其README中没有提及的功能。',
          '编辑和放大工具(Real-ESRGAN、FunClip)以及通过Ollama使用的DALL-E 3不在此处对比:前两者可比较的共同点太少,后者没有PromptQuorum评测。',
          '工具更新很快。每篇评测都会说明所核对的版本,评测更新时本指南也会随之更新。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '为什么图像生成与视觉模型要分开对比?',
            a: '它们承担不同的任务,因此大多数属性只在同一类任务内才有意义——局部重绘适用于图像生成,读取图像中的文字适用于视觉模型。放在同一张表里,大多数单元格会是空的或没有意义。',
          },
          {
            q: '对比表中的短横线是什么意思?',
            a: '表示项目自己的文档没有说明该属性,并不表示该功能不存在;请查看该工具的评测或其代码仓库。',
          },
          {
            q: 'Stable Diffusion本身是一款应用吗?',
            a: 'Stable Diffusion是一系列图像模型,而不是一款应用。它与各应用一起列出,是因为它有自己的PromptQuorum评测,而且这里的大多数生成工具都可以运行Stable Diffusion模型。',
          },
          {
            q: '这些工具有推广(联盟)链接吗?',
            a: '没有。截至撰写本文时,PromptQuorum与本对比中的任何工具都没有联盟关系,这里的任何链接都不会带来佣金。',
          },
          {
            q: '这份对比多久更新一次?',
            a: '每年更新两次,并且每当所列工具的评测有更新时也会更新,因为表格与这些评测出自同一份数据。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '各工具的官方README或网站,列在该工具的PromptQuorum评测中(可从对比表链接进入)。',
          '[PromptQuorum本地AI应用目录](/zh/directory)——表格每一行所依据的记录。',
          '[AI工具许可证详解](/zh/power-local-llm/ai-tool-licenses-explained)——上文所列各许可证系列的含义。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地软件目录](/zh/directory)——浏览全部200多款本地AI应用并按类别筛选。',
          '[本地语音与语音工具对比](/zh/power-local-llm/local-llm-voice-audio-compared)——对文本转语音、语音转文本和语音代理进行的同类对比。',
          '[AI工具许可证详解](/zh/power-local-llm/ai-tool-licenses-explained)——如何理解MIT、GPL、AGPL、Apache和OpenRAIL许可证。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地图像、视频与视觉工具对比(2026):生成、视觉与OCR',
      description:
        '并排对比16款本地图像工具:图像与视频生成,以及视觉与OCR模型,均来自项目官方文档。',
      url: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
      inLanguage: 'zh',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在选择本地图像和视觉工具的创作者与开发者' },
      about: [
        { '@type': 'Thing', name: '图像生成' },
        { '@type': 'Thing', name: '视频生成' },
        { '@type': 'Thing', name: '视觉模型' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '本地图像、视频与视觉工具对比(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
        },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Image & Video Generation',
    title: 'Ferramentas locais de imagem, vídeo e visão comparadas (2026): geração, visão e OCR',
    seoTitle: 'Ferramentas locais de imagem, vídeo e visão 2026',
    intro:
      'As ferramentas locais de imagem fazem dois trabalhos diferentes — gerar imagens e vídeo a partir de um prompt e entender as imagens que você fornece — e nenhuma lista única de recursos compara os dois de forma justa. Este guia compara 16 ferramentas gratuitas e freemium que rodam no seu próprio hardware, um trabalho de cada vez, usando uma tabela comparativa gerada a partir dos mesmos dados da análise própria de cada ferramenta no PromptQuorum, de modo que a tabela e as análises não podem se contradizer.',
    metaDescription:
      'Compare 16 ferramentas locais de imagem: geração de imagem e vídeo (AUTOMATIC1111, ComfyUI, Fooocus, InvokeAI e outras) e modelos de visão e OCR. Licenças, plataformas, inpainting, extensões e API, segundo a documentação oficial.',
    twitterDescription:
      'Ferramentas locais de imagem, vídeo e visão comparadas por tarefa — licenças, plataformas, inpainting, extensões, fluxos em nós, API local, OCR — segundo a documentação oficial.',
    audience:
      'Criadores, desenvolvedores e usuários preocupados com privacidade que escolhem uma ferramenta local (capaz de funcionar offline) de geração de imagem ou vídeo, ou um modelo local de visão e OCR, e querem as diferenças organizadas por tarefa, não em uma lista misturada.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ferramentas locais de imagem comparadas',
    targetKeywords: [
      'comparação de geração de imagens local',
      'comparação stable diffusion webui',
      'comfyui vs automatic1111',
      'melhor gerador de imagens local',
      'comparação de modelos de visão locais',
      'fooocus vs invokeai',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LLaVA', 'Idefics'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**As 16 ferramentas locais de imagem do diretório do PromptQuorum se dividem em dois trabalhos que devem ser comparados separadamente: geração de imagem e vídeo (13 ferramentas) e visão e OCR (3).** Na geração, ComfyUI, InvokeAI e StableSwarmUI documentam fluxos de trabalho baseados em nós; AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge, StableSwarmUI e ToolNeuron documentam sistemas de extensões; e AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge e ToolNeuron documentam uma API local. Na visão, o LLaVA documenta a leitura de texto em imagens e o Idefics documenta várias imagens por prompt. Use a tabela comparativa abaixo e leia a análise de cada ferramenta antes de instalá-la.',
    quickAnswerTop: {
      en: {
        question: 'Qual ferramenta local de imagem devo usar?',
        answer:
          'Depende da tarefa, então compare dentro de um trabalho de cada vez. Escolha pela restrição que mais importa — licença, plataforma, inpainting, extensões, um editor de fluxo em nós, uma API local, operação com pouca VRAM — e use a tabela abaixo, gerada a partir da documentação oficial de cada ferramenta.',
        bullets: [
          'Geração de imagem e vídeo: 13 ferramentas comparadas em inpainting, vídeo, fluxos em nós, extensões, modo de pouca VRAM e API.',
          'Visão e OCR: 3 ferramentas comparadas em leitura de texto em imagens, várias imagens por prompt e API local.',
          'Um traço (—) significa que a documentação do projeto não informa isso, não que o recurso não exista.',
        ],
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Como comparamos', anchor: 'how-we-compared' },
      { label: 'Tabela comparativa', anchor: 'comparison-table' },
      { label: 'Geração de imagem e vídeo: o que muda', anchor: 'generation-differences' },
      { label: 'Visão e OCR: o que muda', anchor: 'vision-differences' },
      { label: 'O que esta comparação não pode dizer', anchor: 'limitations' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'As ferramentas locais de imagem são dois trabalhos diferentes — gerar imagens e vídeo e entender imagens — por isso as 16 ferramentas do diretório do PromptQuorum são comparadas dentro de cada trabalho, com uma tabela gerada a partir dos mesmos dados de ferramenta da análise própria de cada uma.',
          },
          {
            type: 'plain-terms',
            text: 'Algumas ferramentas desenham imagens a partir de um texto, e outras olham uma imagem e respondem perguntas sobre ela. Comparar uma ferramenta de desenho com um modelo que lê imagens em "inpainting" não faz sentido, então este guia compara itens do mesmo tipo.',
          },
        ],
        items: [
          '16 ferramentas, dois trabalhos: geração de imagem e vídeo (13) e visão e OCR (3).',
          'A tabela é gerada a partir do registro de cada ferramenta e conferida com o README ou o site oficial; um traço significa "não informado na documentação", nunca "não".',
          'As licenças diferem de maneiras que importam: por exemplo, AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge e Locally Uncensored são AGPL-3.0, ComfyUI e Fooocus são GPL-3.0, AnimateDiff, ControlNet e InvokeAI são Apache-2.0, StableSwarmUI e ToolNeuron são MIT, e o Stable Diffusion usa uma licença OpenRAIL.',
          'Cada nome de ferramenta na tabela leva à sua própria análise no PromptQuorum, onde estão os passos de instalação e os limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Como comparamos',
        content: [
          'Os fatos de cada ferramenta — preço, licença, plataformas, requisitos de hardware e atributos específicos da categoria — são armazenados uma única vez, no registro da ferramenta no diretório. A tabela comparativa abaixo é gerada a partir desses registros, e a análise da própria ferramenta usa o mesmo registro, de modo que os dois não podem informar valores diferentes.',
          'Os atributos específicos da categoria (por exemplo, inpainting ou suporte a extensões) foram tirados do README ou do site oficial de cada projeto e conferidos com a redação exata de lá. Quando a documentação é omissa, a tabela mostra um traço em vez de adivinhar; quando uma afirmação vem com ressalvas (experimental, dependente de um fork ou um serviço hospedado em vez de um recurso local), o atributo fica de fora da tabela e é tratado na análise da ferramenta.',
          'Apenas ferramentas com análise própria no PromptQuorum estão na tabela. A comparação lista ferramentas que rodam no seu próprio hardware; ela não faz ranking, porque a escolha certa depende da sua restrição.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa',
        content: 'Escolha um trabalho abaixo e leia a linha de ponta a ponta. Clique no nome de uma ferramenta para abrir a análise completa no PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      generationDifferences: {
        id: 'generation-differences',
        title: 'Geração de imagem e vídeo: o que muda',
        items: [
          '**Estilo de fluxo de trabalho.** [ComfyUI](/pt/power-local-llm/comfyui-review), [Invoke AI](/pt/power-local-llm/invokeai-review) e [StableSwarmUI](/pt/power-local-llm/stableswarmui-review) documentam fluxos baseados em nós ou grafos. A documentação das outras ferramentas não descreve um editor de nós.',
          '**Extensões e plugins.** [AUTOMATIC1111](/pt/power-local-llm/automatic1111-review), ComfyUI, [Stable Diffusion WebUI Forge](/pt/power-local-llm/stable-diffusion-forge-review), StableSwarmUI e [ToolNeuron](/pt/power-local-llm/toolneuron-review) documentam um sistema de extensões ou plugins.',
          '**Vídeo.** ComfyUI, StableSwarmUI, [DiffusionBee](/pt/power-local-llm/diffusionbee-review), [Draw Things](/pt/power-local-llm/draw-things-review), [Locally Uncensored](/pt/power-local-llm/locally-uncensored-review) e [AnimateDiff](/pt/power-local-llm/animatediff-video-generation-guide) documentam geração de vídeo ou animação.',
          '**Inpainting.** AUTOMATIC1111, ComfyUI, DiffusionBee, [Fooocus](/pt/power-local-llm/fooocus-review) e Invoke AI documentam inpainting.',
          '**Operação com pouca VRAM.** AUTOMATIC1111, Fooocus e [ControlNet](/pt/power-local-llm/controlnet-review) documentam um modo de pouca VRAM ou um requisito declarado de VRAM pequena; para as demais, consulte a análise, pois o requisito depende do modelo que você carrega.',
          '**API local.** AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge e ToolNeuron documentam uma API que outros apps podem chamar.',
          '**Licença e preço.** AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge e Locally Uncensored são AGPL-3.0; ComfyUI e Fooocus são GPL-3.0; AnimateDiff, ControlNet e Invoke AI são Apache-2.0; StableSwarmUI e ToolNeuron são MIT; o [Stable Diffusion](/pt/power-local-llm/stable-diffusion-review) usa uma licença OpenRAIL. O Draw Things é um app de código fechado, o Locally Uncensored é um app pago e o Invoke AI é freemium. Licenças copyleft impõem condições à distribuição de versões modificadas — veja [Licenças de ferramentas de IA explicadas](/pt/power-local-llm/ai-tool-licenses-explained).',
        ],
      },
      visionDifferences: {
        id: 'vision-differences',
        title: 'Visão e OCR: o que muda',
        items: [
          '**Leitura de texto em imagens.** [LLaVA](/pt/power-local-llm/llava-review) e [modelos de visão do Ollama](/pt/power-local-llm/ollama-vision-models-review) documentam a leitura ou o reconhecimento de texto em imagens.',
          '**Várias imagens por prompt.** O [Idefics](/pt/power-local-llm/idefics-review) documenta a aceitação de várias imagens em um único prompt.',
          '**API local.** Os modelos de visão do Ollama documentam uma API local; a API documentada do Idefics é hospedada, não local, por isso não é contada.',
          '**Licença.** LLaVA e Idefics são Apache-2.0; os modelos de visão do Ollama são um conjunto de modelos cujas licenças variam, então confira a licença de cada modelo.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'O que esta comparação não pode dizer',
        items: [
          'Ela compara recursos documentados, não qualidade. Não diz nada sobre a beleza das imagens ou a precisão da leitura de texto — isso exige seus próprios prompts e o seu próprio hardware.',
          'Ela não inclui benchmarks de velocidade: o PromptQuorum não os mediu para essas ferramentas.',
          'Os traços são lacunas na documentação dos projetos, não constatações negativas. Algumas ferramentas podem oferecer um recurso que o README delas não menciona.',
          'Ferramentas de edição e de ampliação (Real-ESRGAN, FunClip) e o DALL-E 3 via Ollama não são comparados aqui: as duas primeiras têm pouco em comum para comparar, e a última não tem análise no PromptQuorum.',
          'As ferramentas mudam rápido. A análise de cada ferramenta informa a versão em que foi conferida, e este guia é atualizado quando uma análise é atualizada.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Por que geração de imagem e modelos de visão são comparados separadamente?',
            a: 'Eles fazem trabalhos diferentes, então a maioria dos atributos só faz sentido dentro de um deles — inpainting se aplica à geração de imagem, e leitura de texto em imagens se aplica a modelos de visão. Compará-los em uma única tabela deixaria a maioria das células vazia ou sem sentido.',
          },
          {
            q: 'O que significa um traço na tabela comparativa?',
            a: 'Significa que a documentação do próprio projeto não informa esse atributo. Não significa que o recurso não exista; consulte a análise da ferramenta ou o repositório dela.',
          },
          {
            q: 'O Stable Diffusion em si é um app?',
            a: 'O Stable Diffusion é uma família de modelos de imagem, não um app. Ele aparece junto com os apps porque tem sua própria análise no PromptQuorum, e a maioria das ferramentas de geração aqui consegue rodar modelos Stable Diffusion.',
          },
          {
            q: 'Alguma dessas ferramentas tem link de afiliado?',
            a: 'Não. O PromptQuorum não tem relação de afiliado com nenhuma ferramenta desta comparação no momento da redação, e nenhum link aqui gera comissão.',
          },
          {
            q: 'Com que frequência esta comparação é atualizada?',
            a: 'Ela é atualizada duas vezes por ano e sempre que a análise de uma das ferramentas listadas é atualizada, porque a tabela é gerada a partir dos mesmos dados dessas análises.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'O README ou o site oficial de cada ferramenta, listado na análise dessa ferramenta no PromptQuorum (com link na tabela comparativa).',
          '[Diretório de apps de IA local do PromptQuorum](/pt/directory) — o registro a partir do qual cada linha da tabela é gerada.',
          '[Licenças de ferramentas de IA explicadas](/pt/power-local-llm/ai-tool-licenses-explained) — o que significam as famílias de licenças citadas acima.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Diretório de software local](/pt/directory) — navegue por todos os mais de 200 apps de IA local e filtre por categoria.',
          '[Ferramentas locais de voz e fala comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a mesma comparação para síntese de voz, transcrição de fala e agentes de voz.',
          '[Licenças de ferramentas de IA explicadas](/pt/power-local-llm/ai-tool-licenses-explained) — como ler as licenças MIT, GPL, AGPL, Apache e OpenRAIL.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ferramentas locais de imagem, vídeo e visão comparadas (2026): geração, visão e OCR',
      description:
        'Compare 16 ferramentas locais de imagem: geração de imagem e vídeo e modelos de visão e OCR, segundo a documentação oficial dos projetos.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Criadores e desenvolvedores que escolhem ferramentas locais de imagem e visão' },
      about: [
        { '@type': 'Thing', name: 'Geração de imagens' },
        { '@type': 'Thing', name: 'Geração de vídeo' },
        { '@type': 'Thing', name: 'Modelos de visão' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ferramentas locais de imagem, vídeo e visão comparadas (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
        },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Image & Video Generation',
    title: 'مقارنة أدوات الصور والفيديو والرؤية المحلية (2026): التوليد والرؤية وOCR',
    seoTitle: 'مقارنة أدوات الصور والفيديو والرؤية المحلية 2026',
    intro:
      'تؤدي أدوات الصور المحلية مهمتين مختلفتين — توليد الصور والفيديو من وصف نصي، وفهم الصور التي تعطيها إياها — ولا تكفي قائمة ميزات واحدة لمقارنتها بإنصاف. يقارن هذا الدليل 16 أداة مجانية وفريميوم تعمل على عتادك الخاص، مهمة تلو الأخرى، عبر جدول مقارنة مولَّد من البيانات نفسها التي تعتمد عليها مراجعة PromptQuorum لكل أداة، بحيث لا يتعارض الجدول مع المراجعات.',
    metaDescription:
      'قارن 16 أداة صور محلية جنبًا إلى جنب: توليد الصور والفيديو (AUTOMATIC1111 وComfyUI وFooocus وInvokeAI وغيرها) ونماذج الرؤية وOCR. التراخيص والمنصات والطلاء الداخلي والإضافات وواجهة API، من الوثائق الرسمية.',
    twitterDescription:
      'مقارنة أدوات الصور والفيديو والرؤية المحلية حسب المهمة — التراخيص والمنصات والطلاء الداخلي والإضافات وسير العمل بالعُقد وواجهة API المحلية وOCR — من الوثائق الرسمية.',
    audience:
      'المبدعون والمطورون والمستخدمون المهتمون بالخصوصية الذين يختارون أداة محلية (تعمل دون اتصال) لتوليد الصور أو الفيديو، أو نموذج رؤية وOCR محليًا، ويريدون عرض الفروق لكل مهمة على حدة بدل قائمة واحدة مختلطة.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مقارنة أدوات الصور المحلية',
    targetKeywords: [
      'مقارنة توليد الصور محليًا',
      'مقارنة stable diffusion webui',
      'comfyui مقابل automatic1111',
      'أفضل مولّد صور محلي',
      'مقارنة نماذج الرؤية المحلية',
      'fooocus مقابل invokeai',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LLaVA', 'Idefics'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**تنقسم أدوات الصور المحلية الـ16 في دليل PromptQuorum إلى مهمتين ينبغي مقارنتهما على حدة: توليد الصور والفيديو (13 أداة) والرؤية وOCR (3 أدوات).** ضمن التوليد، توثّق ComfyUI وInvokeAI وStableSwarmUI سير عمل قائمًا على العُقد؛ وتوثّق AUTOMATIC1111 وComfyUI وStable Diffusion WebUI Forge وStableSwarmUI وToolNeuron أنظمة إضافات؛ وتوثّق AUTOMATIC1111 وComfyUI وStable Diffusion WebUI Forge وToolNeuron واجهة API محلية. أما في الرؤية، فيوثّق LLaVA قراءة النص داخل الصور، ويوثّق Idefics قبول عدة صور في الوصف النصي الواحد. استخدم جدول المقارنة أدناه، واقرأ مراجعة كل أداة قبل تثبيتها.',
    quickAnswerTop: {
      en: {
        question: 'أي أداة صور محلية ينبغي أن أستخدم؟',
        answer:
          'يعتمد ذلك على المهمة، لذا قارن ضمن مهمة واحدة في كل مرة. اختر بحسب القيد الأهم لك — الرخصة أو المنصة أو الطلاء الداخلي (inpainting) أو الإضافات أو محرر سير العمل بالعُقد أو واجهة API محلية أو التشغيل بذاكرة VRAM منخفضة — واستعن بالجدول أدناه المولَّد من الوثائق الرسمية لكل أداة.',
        bullets: [
          'توليد الصور والفيديو: 13 أداة تُقارن من حيث الطلاء الداخلي والفيديو وسير العمل بالعُقد والإضافات ووضع VRAM المنخفض وواجهة API.',
          'الرؤية وOCR: 3 أدوات تُقارن من حيث قراءة النص في الصور وقبول عدة صور في الوصف النصي الواحد وواجهة API محلية.',
          'الشرطة (—) تعني أن وثائق المشروع لا تذكر ذلك، وليس أن الميزة غير موجودة.',
        ],
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'كيف أجرينا المقارنة', anchor: 'how-we-compared' },
      { label: 'جدول المقارنة', anchor: 'comparison-table' },
      { label: 'توليد الصور والفيديو: ما الذي يختلف', anchor: 'generation-differences' },
      { label: 'الرؤية وOCR: ما الذي يختلف', anchor: 'vision-differences' },
      { label: 'ما لا تخبرك به هذه المقارنة', anchor: 'limitations' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أدوات الصور المحلية مهمتان مختلفتان — توليد الصور والفيديو، وفهم الصور — ولذلك تُقارَن الأدوات الـ16 في دليل PromptQuorum ضمن كل مهمة على حدة، عبر جدول مولَّد من بيانات الأداة نفسها التي تعتمد عليها مراجعتها.',
          },
          {
            type: 'plain-terms',
            text: 'بعض الأدوات ترسم صورًا من وصف نصي، وبعضها ينظر إلى صورة ويجيب عن أسئلة حولها. مقارنة أداة رسم بنموذج يقرأ الصور من حيث «الطلاء الداخلي (inpainting)» لا معنى لها، لذلك يقارن هذا الدليل بين أدوات من النوع نفسه.',
          },
        ],
        items: [
          '16 أداة ومهمتان: توليد الصور والفيديو (13) والرؤية وOCR (3).',
          'يُولَّد الجدول من سجل كل أداة ويُراجَع مقابل ملف README الرسمي أو موقعها؛ والشرطة تعني «غير مذكور في الوثائق»، وليست «لا» أبدًا.',
          'تختلف التراخيص بطرق مهمة: فمثلًا AUTOMATIC1111 وDiffusionBee وStable Diffusion WebUI Forge وLocally Uncensored بترخيص AGPL-3.0، وComfyUI وFooocus بترخيص GPL-3.0، وAnimateDiff وControlNet وInvokeAI بترخيص Apache-2.0، وStableSwarmUI وToolNeuron بترخيص MIT، ويستخدم Stable Diffusion ترخيص OpenRAIL.',
          'يرتبط اسم كل أداة في الجدول بمراجعتها الخاصة في PromptQuorum، حيث تُغطى خطوات التثبيت والحدود.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'كيف أجرينا المقارنة',
        content: [
          'تُخزَّن حقائق كل أداة — السعر والرخصة والمنصات ومتطلبات العتاد والخصائص الخاصة بالفئة — مرة واحدة في سجل الأداة داخل الدليل. يُولَّد جدول المقارنة أدناه من تلك السجلات، وتعتمد مراجعة الأداة نفسها على السجل ذاته، ولذلك لا يمكن أن يذكرا قيمًا مختلفة.',
          'أُخذت الخصائص الخاصة بالفئة (مثل الطلاء الداخلي أو دعم الإضافات) من ملف README الرسمي لكل مشروع أو موقعه، وتم التحقق منها مقابل الصياغة الدقيقة هناك. وحيث تصمت الوثائق يعرض الجدول شرطة بدل التخمين؛ وحيث يكون الادعاء مقيّدًا (تجريبيًا، أو معتمدًا على fork، أو خدمة مستضافة وليس ميزة محلية) تُستبعد الخاصية من الجدول وتُغطى في مراجعة الأداة.',
          'لا يظهر في الجدول سوى الأدوات التي لها مراجعة خاصة في PromptQuorum. تسرد المقارنة الأدوات التي تعمل على عتادك الخاص ولا ترتّبها، لأن الأداة المناسبة تعتمد على قيدك أنت.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول المقارنة',
        content: 'اختر مهمة أدناه، ثم اقرأ عبر الصف. انقر على اسم الأداة لفتح مراجعتها الكاملة في PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      generationDifferences: {
        id: 'generation-differences',
        title: 'توليد الصور والفيديو: ما الذي يختلف',
        items: [
          '**أسلوب سير العمل.** توثّق [ComfyUI](/ar/power-local-llm/comfyui-review) و[Invoke AI](/ar/power-local-llm/invokeai-review) و[StableSwarmUI](/ar/power-local-llm/stableswarmui-review) سير عمل قائمًا على العُقد أو المخططات. أما وثائق بقية الأدوات فلا تصف محرر عُقد.',
          '**الإضافات.** توثّق [AUTOMATIC1111](/ar/power-local-llm/automatic1111-review) وComfyUI و[Stable Diffusion WebUI Forge](/ar/power-local-llm/stable-diffusion-forge-review) وStableSwarmUI و[ToolNeuron](/ar/power-local-llm/toolneuron-review) نظام إضافات.',
          '**الفيديو.** توثّق ComfyUI وStableSwarmUI و[DiffusionBee](/ar/power-local-llm/diffusionbee-review) و[Draw Things](/ar/power-local-llm/draw-things-review) و[Locally Uncensored](/ar/power-local-llm/locally-uncensored-review) و[AnimateDiff](/ar/power-local-llm/animatediff-video-generation-guide) توليد الفيديو أو الرسوم المتحركة.',
          '**الطلاء الداخلي (inpainting).** توثّق AUTOMATIC1111 وComfyUI وDiffusionBee و[Fooocus](/ar/power-local-llm/fooocus-review) وInvoke AI الطلاء الداخلي.',
          '**التشغيل بذاكرة VRAM منخفضة.** توثّق AUTOMATIC1111 وFooocus و[ControlNet](/ar/power-local-llm/controlnet-review) وضعًا لذاكرة VRAM منخفضة أو متطلبًا صغيرًا محددًا لها؛ أما الأدوات الأخرى فراجع مراجعتها، لأن المتطلب يعتمد على النموذج الذي تحمّله.',
          '**واجهة API محلية.** توثّق AUTOMATIC1111 وComfyUI وStable Diffusion WebUI Forge وToolNeuron واجهة API يمكن لتطبيقات أخرى استدعاؤها.',
          '**الرخصة والسعر.** AUTOMATIC1111 وDiffusionBee وStable Diffusion WebUI Forge وLocally Uncensored بترخيص AGPL-3.0؛ وComfyUI وFooocus بترخيص GPL-3.0؛ وAnimateDiff وControlNet وInvoke AI بترخيص Apache-2.0؛ وStableSwarmUI وToolNeuron بترخيص MIT؛ ويستخدم [Stable Diffusion](/ar/power-local-llm/stable-diffusion-review) ترخيص OpenRAIL. Draw Things تطبيق مغلق المصدر، وLocally Uncensored تطبيق مدفوع، وInvoke AI بنموذج فريميوم. تفرض تراخيص copyleft شروطًا على توزيع النسخ المعدّلة — راجع [شرح تراخيص أدوات الذكاء الاصطناعي](/ar/power-local-llm/ai-tool-licenses-explained).',
        ],
      },
      visionDifferences: {
        id: 'vision-differences',
        title: 'الرؤية وOCR: ما الذي يختلف',
        items: [
          '**قراءة النص في الصور.** يوثّق [LLaVA](/ar/power-local-llm/llava-review) و[نماذج الرؤية في Ollama](/ar/power-local-llm/ollama-vision-models-review) قراءة النص في الصور أو التعرف عليه.',
          '**عدة صور في الوصف النصي الواحد.** يوثّق [Idefics](/ar/power-local-llm/idefics-review) قبول عدة صور في وصف نصي واحد.',
          '**واجهة API محلية.** توثّق نماذج الرؤية في Ollama واجهة API محلية؛ أما واجهة API الموثّقة لدى Idefics فهي مستضافة وليست محلية، لذلك لا تُحتسب.',
          '**الرخصة.** LLaVA وIdefics بترخيص Apache-2.0؛ ونماذج الرؤية في Ollama مجموعة نماذج تتفاوت تراخيصها، لذا راجع رخصة كل نموذج على حدة.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا تخبرك به هذه المقارنة',
        items: [
          'تقارن القدرات الموثّقة، لا الجودة. ولا تقول شيئًا عن جودة مظهر الصور أو دقة قراءة النص — فهذا يتطلب أوصافك النصية وعتادك الخاص.',
          'لا تتضمن قياسات سرعة: لم تقسها PromptQuorum لهذه الأدوات.',
          'الشرطات فجوات في وثائق المشاريع، وليست نتائج سلبية. قد تدعم بعض الأدوات ميزة لا يذكرها ملف README الخاص بها.',
          'أدوات التحرير والتكبير (Real-ESRGAN وFunClip) وDALL-E 3 عبر Ollama غير مقارَنة هنا: الأداتان الأوليان تشتركان في القليل جدًا فلا تصلحان للمقارنة، والأخيرة ليس لها مراجعة في PromptQuorum.',
          'تتغير الأدوات بسرعة. تذكر مراجعة كل أداة الإصدار الذي فُحصت عليه، ويُحدَّث هذا الدليل عند تحديث مراجعة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'لماذا تُقارَن أدوات توليد الصور ونماذج الرؤية على حدة؟',
            a: 'لأنها تؤدي مهام مختلفة، فمعظم الخصائص لا معنى لها إلا ضمن مهمة واحدة — الطلاء الداخلي ينطبق على توليد الصور، وقراءة النص في الصور تنطبق على نماذج الرؤية. ولو جُمعت في جدول واحد لبقيت معظم الخلايا فارغة أو بلا معنى.',
          },
          {
            q: 'ماذا تعني الشرطة في جدول المقارنة؟',
            a: 'تعني أن وثائق المشروع نفسه لا تذكر تلك الخاصية. ولا تعني أن الميزة غير موجودة؛ راجع مراجعة الأداة أو مستودعها.',
          },
          {
            q: 'هل Stable Diffusion نفسه تطبيق؟',
            a: 'Stable Diffusion عائلة نماذج صور وليس تطبيقًا. وهو مدرج إلى جانب التطبيقات لأن له مراجعة خاصة في PromptQuorum، ولأن معظم أدوات التوليد هنا تستطيع تشغيل نماذج Stable Diffusion.',
          },
          {
            q: 'هل لأي من هذه الأدوات رابط أفلييت؟',
            a: 'لا. ليس لدى PromptQuorum أي علاقة أفلييت مع أي أداة في هذه المقارنة وقت الكتابة، ولا يحقق أي رابط هنا عمولة.',
          },
          {
            q: 'كم مرة تُحدَّث هذه المقارنة؟',
            a: 'تُحدَّث مرتين في السنة، وكلما حُدِّثت مراجعة إحدى الأدوات المدرجة، لأن الجدول مولَّد من البيانات نفسها التي تعتمد عليها تلك المراجعات.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'ملف README الرسمي أو موقع كل أداة، المدرج في مراجعتها في PromptQuorum (المرتبطة من جدول المقارنة).',
          '[دليل PromptQuorum لتطبيقات الذكاء الاصطناعي المحلية](/ar/directory) — السجل الذي يُولَّد منه كل صف في الجدول.',
          '[شرح تراخيص أدوات الذكاء الاصطناعي](/ar/power-local-llm/ai-tool-licenses-explained) — ما تعنيه عائلات التراخيص المذكورة أعلاه.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[دليل البرمجيات المحلية](/ar/directory) — تصفّح أكثر من 200 تطبيق ذكاء اصطناعي محلي وصفِّها حسب الفئة.',
          '[مقارنة أدوات الصوت والكلام المحلية](/ar/power-local-llm/local-llm-voice-audio-compared) — المقارنة نفسها لتحويل النص إلى كلام وتحويل الكلام إلى نص والوكلاء الصوتيين.',
          '[شرح تراخيص أدوات الذكاء الاصطناعي](/ar/power-local-llm/ai-tool-licenses-explained) — كيف تقرأ تراخيص MIT وGPL وAGPL وApache وOpenRAIL.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مقارنة أدوات الصور والفيديو والرؤية المحلية (2026): التوليد والرؤية وOCR',
      description:
        'قارن 16 أداة صور محلية جنبًا إلى جنب: توليد الصور والفيديو، ونماذج الرؤية وOCR، من الوثائق الرسمية للمشاريع.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
      inLanguage: 'ar',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المبدعون والمطورون الذين يختارون أدوات الصور والرؤية المحلية' },
      about: [
        { '@type': 'Thing', name: 'توليد الصور' },
        { '@type': 'Thing', name: 'توليد الفيديو' },
        { '@type': 'Thing', name: 'نماذج الرؤية' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'مقارنة أدوات الصور والفيديو والرؤية المحلية (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
        },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Image & Video Generation',
    title: '로컬 이미지·영상·비전 도구 비교(2026): 생성, 비전, OCR',
    seoTitle: '로컬 이미지·영상·비전 도구 비교 2026',
    intro:
      '로컬 이미지 도구는 프롬프트로 이미지와 영상을 생성하는 일과 사용자가 넣은 이미지를 이해하는 일, 두 가지 서로 다른 작업을 하며, 하나의 기능 목록으로는 이들을 공정하게 비교할 수 없습니다. 이 가이드는 자신의 하드웨어에서 실행되는 무료 및 프리미엄(freemium) 도구 16개를 작업별로 나누어 비교합니다. 비교표는 각 도구의 PromptQuorum 리뷰와 같은 데이터에서 생성되므로 표와 리뷰가 서로 어긋날 수 없습니다.',
    metaDescription:
      '로컬 이미지 도구 16개를 나란히 비교합니다: 이미지·영상 생성(AUTOMATIC1111, ComfyUI, Fooocus, InvokeAI 등)과 비전·OCR 모델. 라이선스, 플랫폼, 인페인팅, 확장, API를 공식 문서 기준으로 정리했습니다.',
    twitterDescription:
      '로컬 이미지·영상·비전 도구를 작업별로 비교: 라이선스, 플랫폼, 인페인팅, 확장, 노드 워크플로, 로컬 API, OCR을 공식 문서 기준으로 정리했습니다.',
    audience:
      '로컬(오프라인 가능) 이미지·영상 생성 도구나 로컬 비전·OCR 모델을 고르면서, 하나로 뭉뚱그린 목록이 아니라 작업별로 정리된 차이를 보고 싶은 크리에이터, 개발자, 개인정보를 중시하는 사용자.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 이미지 도구 비교',
    targetKeywords: [
      '로컬 이미지 생성 비교',
      'stable diffusion webui 비교',
      'comfyui vs automatic1111',
      '로컬 이미지 생성기 추천',
      '로컬 비전 모델 비교',
      'fooocus vs invokeai',
    ],
    current_models_mentioned: ['Stable Diffusion', 'LLaVA', 'Idefics'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU'],
    leadAnswerBlock:
      '**PromptQuorum 디렉터리의 로컬 이미지 도구 16개는 따로 비교해야 하는 두 가지 작업, 즉 이미지·영상 생성(13개)과 비전·OCR(3개)로 나뉩니다.** 생성 도구 중 ComfyUI, InvokeAI, StableSwarmUI는 노드 기반 워크플로를 문서화하고 있고, AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge, StableSwarmUI, ToolNeuron은 확장 시스템을, AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge, ToolNeuron은 로컬 API를 문서화하고 있습니다. 비전 도구 중 LLaVA는 이미지 속 텍스트 읽기를, Idefics는 프롬프트 하나에 여러 이미지 입력을 문서화하고 있습니다. 아래 비교표를 활용하고, 설치하기 전에 각 도구의 리뷰를 읽어 보십시오.',
    quickAnswerTop: {
      en: {
        question: '어떤 로컬 이미지 도구를 써야 합니까?',
        answer:
          '작업에 따라 다르므로 한 번에 하나의 작업 안에서 비교하십시오. 라이선스, 플랫폼, 인페인팅, 확장, 노드 워크플로 편집기, 로컬 API, 저VRAM 동작 중 가장 중요한 조건으로 고르고, 각 도구의 공식 문서를 바탕으로 생성한 아래 표를 활용하십시오.',
        bullets: [
          '이미지·영상 생성: 인페인팅, 영상, 노드 워크플로, 확장, 저VRAM 모드, API를 기준으로 도구 13개를 비교.',
          '비전·OCR: 이미지 속 텍스트 읽기, 프롬프트당 여러 이미지, 로컬 API를 기준으로 도구 3개를 비교.',
          '대시(—)는 프로젝트 문서에 해당 내용이 명시되어 있지 않다는 뜻이며, 기능이 없다는 뜻이 아닙니다.',
        ],
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '비교 방법', anchor: 'how-we-compared' },
      { label: '비교표', anchor: 'comparison-table' },
      { label: '이미지·영상 생성: 무엇이 다른가', anchor: 'generation-differences' },
      { label: '비전·OCR: 무엇이 다른가', anchor: 'vision-differences' },
      { label: '이 비교가 알려주지 못하는 것', anchor: 'limitations' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '출처', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 이미지 도구는 이미지·영상을 생성하는 일과 이미지를 이해하는 일이라는 서로 다른 두 작업이므로, PromptQuorum 디렉터리의 도구 16개는 각 도구의 리뷰와 같은 도구 데이터에서 생성한 표를 사용해 작업별로 비교합니다.',
          },
          {
            type: 'plain-terms',
            text: '어떤 도구는 텍스트 프롬프트로 그림을 그리고, 어떤 도구는 그림을 보고 그것에 대한 질문에 답합니다. 그림을 그리는 도구와 그림을 읽는 모델을 "인페인팅"으로 비교하는 것은 의미가 없으므로, 이 가이드는 같은 종류끼리 비교합니다.',
          },
        ],
        items: [
          '도구 16개, 작업 두 가지: 이미지·영상 생성(13개)과 비전·OCR(3개).',
          '표는 각 도구의 레코드에서 생성되며 공식 README나 사이트와 대조해 확인합니다. 대시는 "문서에 명시되지 않음"을 뜻하며, "아니오"를 뜻하지 않습니다.',
          '라이선스는 중요한 방식으로 서로 다릅니다. 예를 들어 AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge, Locally Uncensored는 AGPL-3.0, ComfyUI와 Fooocus는 GPL-3.0, AnimateDiff, ControlNet, InvokeAI는 Apache-2.0, StableSwarmUI와 ToolNeuron은 MIT이며, Stable Diffusion은 OpenRAIL 라이선스를 사용합니다.',
          '표의 모든 도구 이름은 해당 도구의 PromptQuorum 리뷰로 연결되며, 설치 단계와 한계는 그 리뷰에서 다룹니다.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '비교 방법',
        content: [
          '각 도구의 사실 정보(가격, 라이선스, 플랫폼, 하드웨어 요구 사항, 카테고리별 속성)는 해당 도구의 디렉터리 레코드에 한 번만 저장됩니다. 아래 비교표는 이 레코드에서 생성되고 도구의 리뷰도 같은 레코드를 바탕으로 작성되므로, 두 곳이 서로 다른 값을 표시할 수 없습니다.',
          '카테고리별 속성(예: 인페인팅이나 확장 지원)은 각 프로젝트의 공식 README나 웹사이트에서 가져와 그곳의 정확한 표현과 대조해 확인했습니다. 문서에 언급이 없는 경우 표에는 추측하지 않고 대시를 표시하며, 조건이 붙는 주장(실험적 기능, 포크에 의존하는 기능, 로컬 기능이 아닌 호스팅 서비스)은 표에서 제외하고 해당 도구의 리뷰에서 다룹니다.',
          '자체 PromptQuorum 리뷰가 있는 도구만 표에 포함됩니다. 이 비교는 사용자의 하드웨어에서 실행되는 도구를 나열할 뿐 순위를 매기지 않습니다. 적합한 도구는 사용자의 조건에 따라 달라지기 때문입니다.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '비교표',
        content: '아래에서 작업을 선택한 다음 행을 따라 읽으십시오. 도구 이름을 클릭하면 PromptQuorum 리뷰 전문이 열립니다.',
        component: 'CategoryCompareTable',
      },
      generationDifferences: {
        id: 'generation-differences',
        title: '이미지·영상 생성: 무엇이 다른가',
        items: [
          '**워크플로 방식.** [ComfyUI](/ko/power-local-llm/comfyui-review), [Invoke AI](/ko/power-local-llm/invokeai-review), [StableSwarmUI](/ko/power-local-llm/stableswarmui-review)는 노드 기반 또는 그래프 워크플로를 문서화하고 있습니다. 나머지 도구의 문서에는 노드 편집기가 설명되어 있지 않습니다.',
          '**확장과 플러그인.** [AUTOMATIC1111](/ko/power-local-llm/automatic1111-review), ComfyUI, [Stable Diffusion WebUI Forge](/ko/power-local-llm/stable-diffusion-forge-review), StableSwarmUI, [ToolNeuron](/ko/power-local-llm/toolneuron-review)은 확장 또는 플러그인 시스템을 문서화하고 있습니다.',
          '**영상.** ComfyUI, StableSwarmUI, [DiffusionBee](/ko/power-local-llm/diffusionbee-review), [Draw Things](/ko/power-local-llm/draw-things-review), [Locally Uncensored](/ko/power-local-llm/locally-uncensored-review), [AnimateDiff](/ko/power-local-llm/animatediff-video-generation-guide)는 영상 또는 애니메이션 생성을 문서화하고 있습니다.',
          '**인페인팅.** AUTOMATIC1111, ComfyUI, DiffusionBee, [Fooocus](/ko/power-local-llm/fooocus-review), Invoke AI는 인페인팅을 문서화하고 있습니다.',
          '**저VRAM 동작.** AUTOMATIC1111, Fooocus, [ControlNet](/ko/power-local-llm/controlnet-review)은 저VRAM 모드 또는 명시된 소용량 VRAM 요구 사항을 문서화하고 있습니다. 나머지 도구는 요구 사항이 불러오는 모델에 따라 달라지므로 리뷰를 확인하십시오.',
          '**로컬 API.** AUTOMATIC1111, ComfyUI, Stable Diffusion WebUI Forge, ToolNeuron은 다른 앱이 호출할 수 있는 API를 문서화하고 있습니다.',
          '**라이선스와 가격.** AUTOMATIC1111, DiffusionBee, Stable Diffusion WebUI Forge, Locally Uncensored는 AGPL-3.0, ComfyUI와 Fooocus는 GPL-3.0, AnimateDiff, ControlNet, Invoke AI는 Apache-2.0, StableSwarmUI와 ToolNeuron은 MIT이며, [Stable Diffusion](/ko/power-local-llm/stable-diffusion-review)은 OpenRAIL 라이선스를 사용합니다. Draw Things는 폐쇄 소스 앱, Locally Uncensored는 유료 앱, Invoke AI는 프리미엄(freemium)입니다. 카피레프트 라이선스는 수정본을 배포할 때 조건을 붙입니다. 자세한 내용은 [AI 도구 라이선스 해설](/ko/power-local-llm/ai-tool-licenses-explained)을 참고하십시오.',
        ],
      },
      visionDifferences: {
        id: 'vision-differences',
        title: '비전·OCR: 무엇이 다른가',
        items: [
          '**이미지 속 텍스트 읽기.** [LLaVA](/ko/power-local-llm/llava-review)와 [Ollama 비전 모델](/ko/power-local-llm/ollama-vision-models-review)은 이미지 속 텍스트를 읽거나 인식하는 기능을 문서화하고 있습니다.',
          '**프롬프트당 여러 이미지.** [Idefics](/ko/power-local-llm/idefics-review)는 하나의 프롬프트에서 여러 이미지를 받는 기능을 문서화하고 있습니다.',
          '**로컬 API.** Ollama 비전 모델은 로컬 API를 문서화하고 있습니다. Idefics가 문서화한 API는 로컬이 아니라 호스팅 방식이므로 포함하지 않습니다.',
          '**라이선스.** LLaVA와 Idefics는 Apache-2.0입니다. Ollama 비전 모델은 라이선스가 서로 다른 모델들의 집합이므로 각 모델의 라이선스를 직접 확인하십시오.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '이 비교가 알려주지 못하는 것',
        items: [
          '이 비교는 품질이 아니라 문서화된 기능을 비교합니다. 이미지가 얼마나 좋아 보이는지, 텍스트 읽기가 얼마나 정확한지는 알려주지 않으며, 그것은 사용자의 프롬프트와 하드웨어로 직접 확인해야 합니다.',
          '속도 벤치마크는 포함하지 않습니다. PromptQuorum은 이 도구들의 속도를 측정하지 않았습니다.',
          '대시는 프로젝트 문서의 공백이지 부정적인 판정이 아닙니다. README에 언급되지 않았더라도 해당 기능을 지원하는 도구가 있을 수 있습니다.',
          '편집·업스케일링 도구(Real-ESRGAN, FunClip)와 Ollama를 통한 DALL-E 3은 여기서 비교하지 않습니다. 앞의 두 가지는 공통점이 너무 적어 비교할 수 없고, 마지막은 PromptQuorum 리뷰가 없기 때문입니다.',
          '도구는 빠르게 바뀝니다. 각 도구의 리뷰에는 확인 기준이 된 버전이 명시되어 있으며, 이 가이드는 리뷰가 갱신될 때 함께 갱신됩니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '이미지 생성 도구와 비전 모델을 따로 비교하는 이유는 무엇입니까?',
            a: '두 도구는 서로 다른 작업을 하므로 대부분의 속성은 한 작업 안에서만 의미가 있습니다. 인페인팅은 이미지 생성에, 이미지 속 텍스트 읽기는 비전 모델에 해당합니다. 하나의 표에 합치면 대부분의 칸이 비거나 의미가 없어집니다.',
          },
          {
            q: '비교표의 대시는 무슨 뜻입니까?',
            a: '프로젝트 자체 문서에 해당 속성이 명시되어 있지 않다는 뜻입니다. 기능이 없다는 뜻이 아니므로, 도구의 리뷰나 저장소를 확인하십시오.',
          },
          {
            q: 'Stable Diffusion 자체도 앱입니까?',
            a: 'Stable Diffusion은 앱이 아니라 이미지 모델 계열입니다. 자체 PromptQuorum 리뷰가 있어서 앱과 함께 나열했으며, 여기 나온 생성 도구 대부분이 Stable Diffusion 모델을 실행할 수 있습니다.',
          },
          {
            q: '이 도구들 중에 제휴(어필리에이트) 링크가 있습니까?',
            a: '아니요. 작성 시점 기준으로 PromptQuorum은 이 비교에 포함된 어떤 도구와도 제휴 관계가 없으며, 여기 있는 어떤 링크도 수수료를 발생시키지 않습니다.',
          },
          {
            q: '이 비교는 얼마나 자주 갱신됩니까?',
            a: '연 2회 갱신하며, 표가 각 리뷰와 같은 데이터에서 생성되므로 나열된 도구의 리뷰가 갱신될 때마다 함께 갱신합니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '각 도구의 공식 README 또는 웹사이트. 해당 도구의 PromptQuorum 리뷰(비교표에서 연결)에 명시되어 있습니다.',
          '[PromptQuorum 로컬 AI 앱 디렉터리](/ko/directory) — 표의 각 행이 생성되는 바탕이 되는 레코드.',
          '[AI 도구 라이선스 해설](/ko/power-local-llm/ai-tool-licenses-explained) — 위에서 언급한 라이선스 계열의 의미.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 소프트웨어 디렉터리](/ko/directory) — 200개 이상의 로컬 AI 앱을 둘러보고 카테고리별로 필터링합니다.',
          '[로컬 음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 음성 합성, 음성 인식, 음성 에이전트에 대한 같은 비교.',
          '[AI 도구 라이선스 해설](/ko/power-local-llm/ai-tool-licenses-explained) — MIT, GPL, AGPL, Apache, OpenRAIL 라이선스를 읽는 방법.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 이미지·영상·비전 도구 비교(2026): 생성, 비전, OCR',
      description:
        '로컬 이미지 도구 16개를 나란히 비교합니다: 이미지·영상 생성과 비전·OCR 모델을 프로젝트 공식 문서 기준으로 정리했습니다.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
      inLanguage: 'ko',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 이미지·비전 도구를 고르는 크리에이터와 개발자' },
      about: [
        { '@type': 'Thing', name: '이미지 생성' },
        { '@type': 'Thing', name: '영상 생성' },
        { '@type': 'Thing', name: '비전 모델' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '로컬 이미지·영상·비전 도구 비교(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-images-video-compared',
        },
      ],
    },
  },
}
