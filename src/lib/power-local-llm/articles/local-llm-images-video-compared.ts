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
}
