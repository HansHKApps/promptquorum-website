// InvokeAI Review (2026)
// Slug: invokeai-review
// Category: Image & Video Generation
// Companion piece to: stable-diffusion-review, local-ai-image-generation-vs-cloud
// Key facts locked in from research (2026-09-06):
// - InvokeAI is the open-source Community Edition, Apache-2.0 licensed, self-hosted, free.
// - The commercial hosted platform ("Invoke") was ACQUIRED BY ADOBE in October 2025 — the
//   founding team (incl. CEO Kent Keirsey) joined Adobe's Firefly Foundry team, and the
//   commercial hosted service ceased operations on 2025-10-31. There is NO current live paid
//   tier or upsell — the open-source project continues under independent community stewardship
//   (co-maintainers Lincoln Stein / lstein and Vic / Blessedcoolant). This is the opposite of
//   the "free vs. paid tier" framing an outdated web search would suggest — verify before ever
//   restoring a "Professional/Enterprise plan" claim; those pages describe a service that no
//   longer exists as of 2026-09-06.
// - Model support: SD 1.5, SD 2.0, SDXL, SD 3.5 (Medium/Large), multiple FLUX variants
//   (dev/schnell/Kontext/Krea/Redux/Fill, FLUX.2 Klein), CogView4, Qwen-Image, and others —
//   this list changes frequently; hedge with "current list on GitHub/docs".
// - Hardware (Windows/Linux, from invoke.ai/start-here/system-requirements/):
//   SD1.5: 4GB VRAM / 8GB RAM. SDXL: 8GB VRAM / 16GB RAM. FLUX.1: 10GB VRAM / 32GB RAM.
//   FLUX.2 Klein 4B: 12GB VRAM / 16GB RAM. FLUX.2 Klein 9B: 24GB VRAM / 32GB RAM.
//   OS: Windows 10+, macOS 14+, Linux (Ubuntu 20.04+ well-tested). Apple Silicon 16GB+ recommended.
//   AMD GPUs: Linux only. Intel Arc (Alchemist/Battlemage+): Windows + Linux x86_64. Python 3.11-3.12.
// - ComfyUI = GPL-3.0, AUTOMATIC1111 WebUI = AGPL-3.0, InvokeAI = Apache-2.0 (no copyleft) — this
//   is a real, verifiable licensing difference, framed factually, not as a superlative.
// - ComfyUI's reputation for "day-zero" support of brand-new model releases is well documented
//   (multiple independent sources) — framed as "widely reported" rather than an absolute claim.
// - Fooocus is in limited long-term-support mode (bug fixes only, SDXL-only, no new architectures)
//   per its own README as of 2026.
// - StableSwarmUI was discontinued by Stability AI in mid-2024; the actively maintained
//   continuation is the independent SwarmUI project (mcmonkeyprojects/SwarmUI).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/invokeai-review-hero-en.webp',
    title: 'InvokeAI Review (2026): Professional-Grade Stable Diffusion Studio',
    seoTitle: 'InvokeAI Review 2026: Unified Canvas, Layers & Pricing Guide',
    intro:
      'InvokeAI is a free, open-source, self-hosted interface for running Stable Diffusion and FLUX image models on your own GPU, built around a unified canvas with layer-based, non-destructive editing rather than a node graph or a simple tab layout. It is maintained by an open-source community under an Apache-2.0 license after the company that originally built it, Invoke, was acquired by Adobe in October 2025 and its commercial hosted service shut down. This review covers what InvokeAI actually is, its real license and cost (there is no current paid tier), hardware requirements, supported models, and how it compares with ComfyUI, AUTOMATIC1111, Fooocus, and SwarmUI.',
    metaDescription:
      'InvokeAI review 2026: free Apache-2.0 unified-canvas Stable Diffusion/FLUX studio. Covers the Adobe acquisition of Invoke, current model support, VRAM needs, and honest comparison with ComfyUI and AUTOMATIC1111.',
    twitterDescription:
      'InvokeAI review 2026: the unified-canvas Stable Diffusion studio, fully free and open source (Apache-2.0) after Adobe acquired the company behind it in October 2025. License, hardware needs, and how it stacks up against ComfyUI and A1111.',
    audience:
      'Readers deciding whether to self-host InvokeAI for local, layer-based image generation — covers license terms, the 2025 Adobe acquisition and what it means for pricing, hardware requirements, and how it compares with ComfyUI, AUTOMATIC1111, and Fooocus.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'InvokeAI review',
    targetKeywords: [
      'invokeai review',
      'invokeai vs comfyui',
      'invokeai pricing',
      'invokeai unified canvas',
      'invokeai license',
      'invokeai system requirements',
      'invokeai vs automatic1111',
      'is invokeai free',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion 2.0', 'Stable Diffusion XL', 'Stable Diffusion 3.5 Medium', 'Stable Diffusion 3.5 Large', 'FLUX.1 dev', 'FLUX.1 schnell', 'FLUX.1 Kontext', 'FLUX.2 Klein', 'CogView4', 'Qwen-Image'],
    current_hardware_mentioned: ['4 GB VRAM', '8 GB VRAM', '10 GB VRAM', '12 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 3060', 'Apple Silicon M1', 'Intel Arc'],
    leadAnswerBlock:
      '**InvokeAI is a free, open-source, self-hosted Stable Diffusion and FLUX interface built around a unified canvas with persistent, non-destructive layers — distinct from ComfyUI\'s node graph and AUTOMATIC1111\'s tab-based layout.** It is licensed under Apache-2.0 with no revenue cap, so self-hosting costs nothing beyond your own hardware. The company that originally commercialized it, Invoke, was acquired by Adobe in October 2025; its hosted cloud subscription service ceased operations on October 31, 2025, and there is currently no live paid tier — the open-source project continues under independent community stewardship. Hardware needs range from 4 GB VRAM for SD 1.5 up to 24 GB VRAM for the larger FLUX.2 Klein variant — verify current requirements on [invoke.ai](https://invoke.ai/start-here/system-requirements/) before committing hardware.',
    quickAnswerTop: {
      en: {
        question: 'Is InvokeAI free, and does it have a paid tier?',
        answer:
          'InvokeAI is completely free and open source under the Apache-2.0 license, with no revenue cap on commercial use. The company behind it, Invoke, was acquired by Adobe in October 2025 and shut down its paid cloud subscription service on October 31, 2025 — as of 2026, there is no live paid tier; only the free, self-hosted Community Edition remains.',
        bullets: [
          'Apache-2.0 license, self-hosted, no revenue threshold for commercial use.',
          'Invoke (the company) was acquired by Adobe in October 2025; hosted service ended October 31, 2025.',
          'Supports SD 1.5, SDXL, SD 3.5, and multiple FLUX variants in one interface.',
          'Unified canvas with persistent layers for non-destructive inpainting and outpainting.',
          'Minimum hardware: 4 GB VRAM for SD 1.5, up to 24 GB VRAM for larger FLUX.2 models.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What InvokeAI Is', anchor: 'what-is-invokeai' },
      { label: 'The Adobe Acquisition, Explained', anchor: 'adobe-acquisition' },
      { label: 'Unified Canvas and Layers', anchor: 'unified-canvas' },
      { label: 'Model Support', anchor: 'model-support' },
      { label: 'How to Install InvokeAI', anchor: 'how-to-install' },
      { label: 'License and Cost', anchor: 'license-and-cost' },
      { label: 'Hardware Requirements', anchor: 'hardware-requirements' },
      { label: 'InvokeAI vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use InvokeAI', anchor: 'who-should-use' },
      { label: 'Who Should Not Use InvokeAI', anchor: 'who-should-not-use' },
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
        items: [
          'InvokeAI is a free, open-source interface for running Stable Diffusion and FLUX models locally, built around a unified canvas with persistent, layer-based, non-destructive editing.',
          'It is licensed under Apache-2.0 — no revenue cap, no copyleft obligations for downstream code, self-hosting costs nothing beyond your own hardware.',
          'The company behind InvokeAI, Invoke, was acquired by Adobe in October 2025; its hosted commercial platform ceased operations on October 31, 2025. There is currently no live paid tier.',
          'The open-source project continues under independent community stewardship, led by long-time co-maintainers Lincoln Stein ([lstein](https://github.com/lstein)) and Vic ([Blessedcoolant](https://github.com/blessedcoolant)).',
          'It supports SD 1.5, SD 2.0, SDXL, SD 3.5, and multiple FLUX variants in a single interface, alongside newer models such as CogView4 and Qwen-Image — check current model support on [GitHub](https://github.com/invoke-ai/InvokeAI) before relying on a specific one.',
          'Hardware needs scale by model: 4 GB VRAM covers SD 1.5, SDXL wants 8 GB, and larger FLUX variants want 10–24 GB depending on the specific model.',
        ],
      },
      whatIsInvokeAI: {
        id: 'what-is-invokeai',
        title: 'What InvokeAI Is',
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI is a free, open-source interface for running Stable Diffusion and FLUX image models on your own GPU, built around a unified canvas with persistent, non-destructive layers instead of a node graph or a simple tab layout.' },
          { type: 'plain-terms', text: 'Think of it like a digital painting studio for AI images — every generation becomes a layer you can revisit, mask, and regenerate, rather than a one-shot result you either keep or throw away.' },
        ],
        content: [
          'InvokeAI is a front-end application that loads Stable Diffusion and FLUX model weights and runs inference on your own hardware. Like AUTOMATIC1111\'s Stable Diffusion WebUI, ComfyUI, and Fooocus, it does not include the model weights themselves — those come from Stability AI, Black Forest Labs, and other model publishers, and you download them separately (see the [Stable Diffusion Review](/power-local-llm/stable-diffusion-review) for background on the underlying model family and its own license terms).',
          'What sets InvokeAI apart is its unified canvas: a single workspace where every generation, inpaint, and outpaint becomes a persistent layer rather than a disposable output. Layers can be revisited, re-masked, and regenerated later, so an image is treated more like an ongoing composition than a one-shot render. This design targets professional and studio-style workflows — closer to how a digital artist works in a layered image editor than to a typed-prompt-and-done tool.',
          'The project began in August 2022 as one of the earliest community forks of the CompVis reference implementation of Stable Diffusion, initially maintained by Lincoln Stein under the repository name `lstein/stable-diffusion` before being renamed InvokeAI. A company called Invoke later formed around the project to build a commercial, hosted version on top of the same open-source core — that company\'s history is covered in the next section, since it materially changed in 2025.',
        ],
      },
      adobeAcquisition: {
        id: 'adobe-acquisition',
        title: 'The Adobe Acquisition, Explained',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Adobe acquired the company Invoke in October 2025; its founding team joined Adobe\'s Firefly Foundry group, the commercial hosted platform ceased operations on October 31, 2025, and the open-source InvokeAI project continues independently under community maintainers.' },
          { type: 'plain-terms', text: 'The company that used to sell a paid, cloud-hosted version of InvokeAI no longer exists as a separate business — its team now works at Adobe — but the free software you can download and run yourself was not part of that deal and keeps going.' },
        ],
        content: [
          'This is the single most important fact to get right about InvokeAI in 2026, and it is easy to find outdated information that gets it wrong. Adobe announced at Adobe MAX 2025 (October 20–21, 2025) that it had acquired Invoke, the company behind the commercial, cloud-hosted version of InvokeAI, and that its team — including CEO Kent Keirsey — had joined Adobe\'s new "Firefly Foundry" initiative, which helps businesses build custom generative models on Adobe\'s Firefly foundation.',
          'Invoke\'s commercial hosted platform, which previously sold subscription tiers for cloud-based generation and team collaboration features, ceased operations on October 31, 2025. If you find an older article, comparison table, or cached pricing page describing "Starter," "Indie," "Professional," or "Enterprise" InvokeAI subscription plans, that describes a service that no longer exists — do not budget around those numbers.',
          'The open-source InvokeAI project itself was not shut down. Stewardship passed to Lincoln Stein ([lstein](https://github.com/lstein)) and Vic ([Blessedcoolant](https://github.com/blessedcoolant)), longtime core maintainers who have been involved since the project\'s earliest days, and development has continued independently of Adobe under the [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) GitHub organization. This review covers that ongoing, free, self-hosted open-source project — not the discontinued commercial service.',
        ],
        note: 'Facts in this section are drawn from Adobe\'s own October 2025 announcement and multiple independent technology-press reports; check [github.com/invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) directly for the current maintainer list and project status before relying on any third-party summary, including this one.',
      },
      unifiedCanvas: {
        id: 'unified-canvas',
        title: 'Unified Canvas and Layers',
        itemHeadings: true,
        columns: ['Capability', 'What it does'],
        rows: [
          { 'Capability': 'Persistent layers', 'What it does': 'Every generation, inpaint, or outpaint becomes its own layer that stays editable after you close and reopen the project' },
          { 'Capability': 'Brush-based masking', 'What it does': 'Paint a mask directly on the canvas to control exactly which region gets regenerated, instead of working with a separate mask editor' },
          { 'Capability': 'Inpainting / outpainting', 'What it does': 'Regenerate a masked region in place, or extend the canvas beyond the original image borders, without starting a new project' },
          { 'Capability': 'ControlNet integration', 'What it does': 'Guide composition and pose using ControlNet models directly inside the same canvas workspace' },
          { 'Capability': 'Node-based workflow editor', 'What it does': 'A separate, optional node graph for advanced or repeatable pipelines, for readers who want that level of control alongside the canvas' },
          { 'Capability': 'Board and gallery management', 'What it does': 'Organizes generations into boards with preserved generation metadata, so a prompt and settings stay attached to the image that produced them' },
        ],
        content: [
          'The unified canvas is what most reviewers and users point to as InvokeAI\'s defining feature relative to AUTOMATIC1111 and ComfyUI. Instead of generating one image at a time and manually re-importing it for further editing, InvokeAI treats the canvas as a single continuous workspace: you can mask a region, regenerate it, add a new layer on top, and move between those states without leaving the canvas or losing earlier versions.',
          'This is genuinely closer to how a professional digital artist works in a layered image editor than to the tab-based "generate, inspect, regenerate" loop of AUTOMATIC1111\'s WebUI, or the node-graph-first approach of ComfyUI, where composing an editing pipeline requires wiring nodes together before you see any image at all. InvokeAI also ships an optional node-based workflow editor of its own for readers who want that level of control, so the canvas and the node graph are complementary rather than exclusive inside the same application.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Model Support',
        content: [
          '**InvokeAI supports a broad and actively growing range of open-weights image and video models in a single interface, rather than being built around one specific model family.** As of its current documentation, supported checkpoints and formats include Stable Diffusion 1.5, Stable Diffusion 2.0, SDXL, Stable Diffusion 3.5 (Medium and Large), several FLUX variants (dev, schnell, Kontext, Krea, Redux, Fill, and the newer FLUX.2 Klein), plus CogView4 and Qwen-Image. It also loads models in `.ckpt`, `diffusers`, and some `.gguf` quantized formats.',
          'This list changes frequently as new open-weights models are released, so treat it as a snapshot rather than a permanent inventory — check the current model-support notes in the [InvokeAI GitHub repository](https://github.com/invoke-ai/InvokeAI) or its release notes before assuming support for a specific new model on launch day.',
          'One honest caveat, covered in more depth in the "Who should not use InvokeAI" section below: InvokeAI\'s maintainers prioritize integrating models cleanly into the unified canvas and node-editor workflow, which tends to take longer than adding bare command-line support. ComfyUI is widely reported to add support for major new open-weights model releases the same day they launch (so-called "day-zero" support); InvokeAI has not built the same reputation for immediate release-day coverage as of 2026.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'How to Install InvokeAI',
        content: [
          'Installing InvokeAI follows the same basic shape across supported operating systems, using the official launcher rather than a manual environment setup.',
        ],
        numberedItems: [
          { title: 'Check your GPU and OS against the system requirements', whyItMatters: 'InvokeAI runs on Windows 10+, macOS 14+, and Linux (Ubuntu 20.04+ well-tested); confirm your GPU and VRAM meet the requirements for the model you plan to use before installing.' },
          { title: 'Download the InvokeAI Launcher', whyItMatters: 'The launcher, available from the [official installation guide](https://invoke.ai/start-here/installation/) and GitHub releases, handles the Python environment and dependency setup automatically instead of requiring a manual virtual-environment install.' },
          { title: 'Install and launch the application', whyItMatters: 'The launcher installs InvokeAI\'s backend and opens the browser-based web interface — no separate web server configuration is required for local use.' },
          { title: 'Download or select a model', whyItMatters: 'Choose a starter model (e.g. an SD 1.5 or SDXL checkpoint) through the built-in model manager, or point InvokeAI at a model file you already downloaded from Hugging Face or Civitai.' },
          { title: 'Open the unified canvas and generate', whyItMatters: 'Enter a prompt, set resolution and steps, and generate directly into the canvas — the first generation is typically slower while the model loads into VRAM.' },
          { title: 'Add ControlNet, LoRAs, or the node editor as needed', whyItMatters: 'These are optional layers on top of the base workflow — most readers can ignore them for their first several projects and add them once comfortable with the canvas.' },
        ],
        note: 'Exact installation steps and system package requirements (e.g. Python 3.11–3.12, GPU drivers) can change between releases — follow the current [invoke.ai installation guide](https://invoke.ai/start-here/installation/) rather than a generic walkthrough, including this one, for exact command syntax.',
      },
      licenseAndCost: {
        id: 'license-and-cost',
        title: 'License and Cost',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI\'s open-source Community Edition is licensed under Apache-2.0 with no revenue cap and is entirely free to self-host; the company\'s former paid hosted-cloud tiers were discontinued when Adobe acquired Invoke in October 2025.' },
          { type: 'plain-terms', text: 'There is one version of InvokeAI you can actually get today — the free one you run yourself — because the paid cloud service that used to sit alongside it has been shut down.' },
        ],
        columns: ['What', 'Status', 'Cost'],
        rows: [
          { 'What': 'Open-source Community Edition (self-hosted)', 'Status': 'Actively maintained by the community', 'Cost': 'Free — Apache-2.0, no revenue cap' },
          { 'What': 'Invoke hosted cloud subscription (Starter/Indie/Professional/Enterprise)', 'Status': 'Discontinued — service ended 2025-10-31', 'Cost': 'N/A — no longer available' },
          { 'What': 'Adobe Firefly Foundry (the acquiring team\'s current work)', 'Status': 'A separate Adobe product line, not a continuation of InvokeAI', 'Cost': 'Set by Adobe — not covered by this review' },
        ],
        content: [
          'InvokeAI\'s software license is Apache-2.0, one of the most permissive open-source licenses available: it allows commercial use, modification, and redistribution with no revenue threshold and no copyleft requirement to open-source your own code built on top of it. This is a meaningfully more permissive license than ComfyUI (GPL-3.0) or AUTOMATIC1111\'s Stable Diffusion WebUI (AGPL-3.0), both of which carry stronger copyleft obligations for derivative or networked use — a real, checkable difference, not a marketing claim.',
          'Because self-hosting InvokeAI is free under that license, the only ongoing cost is your own hardware and electricity — the same cost structure as any other self-hosted Stable Diffusion or FLUX interface. There is no PromptQuorum-tracked subscription fee, and as of this review, there is no official Invoke-branded paid tier of any kind to compare it against, since the company that sold one no longer operates it. If that changes under new stewardship, verify current terms directly on [invoke.ai](https://invoke.ai) and the [GitHub repository](https://github.com/invoke-ai/InvokeAI) before assuming this review\'s cost breakdown still applies.',
        ],
        note: 'License and cost information reflects the Apache-2.0 license text on [github.com/invoke-ai/InvokeAI/blob/main/LICENSE](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) and public reporting on the October 2025 Adobe acquisition, current as of 2026-09-06. This is not legal advice — read the license file yourself before a commercial deployment decision.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Hardware Requirements',
        itemHeadings: true,
        columns: ['Model', 'Minimum VRAM', 'Minimum system RAM'],
        rows: [
          { 'Model': 'Stable Diffusion 1.5', 'Minimum VRAM': '4 GB VRAM', 'Minimum system RAM': '8 GB RAM' },
          { 'Model': 'SDXL', 'Minimum VRAM': '8 GB VRAM', 'Minimum system RAM': '16 GB RAM' },
          { 'Model': 'FLUX.1', 'Minimum VRAM': '10 GB VRAM', 'Minimum system RAM': '32 GB RAM' },
          { 'Model': 'FLUX.2 Klein (4B)', 'Minimum VRAM': '12 GB VRAM', 'Minimum system RAM': '16 GB RAM' },
          { 'Model': 'FLUX.2 Klein (9B)', 'Minimum VRAM': '24 GB VRAM', 'Minimum system RAM': '32 GB RAM' },
        ],
        content: [
          'InvokeAI runs on Windows 10+, macOS 14+, and Linux, with Ubuntu 20.04+ specifically noted as well-tested. NVIDIA GPUs from the GTX 10-series onward are supported on Windows and Linux; AMD GPUs are supported on Linux only; Intel Arc GPUs (Alchemist, Battlemage, and newer) are supported on Windows and Linux x86_64. Apple Silicon Macs (M1 and newer) work, with 16 GB+ unified memory recommended for comfortable use. CPU-only generation is possible on Linux ARM64 devices but is slow without a GPU.',
          'InvokeAI requires Python 3.11 or 3.12 to run outside the bundled launcher. The official launcher manages this dependency automatically for most readers, so manually managing a Python environment is optional rather than required for typical installs.',
        ],
        note: 'VRAM and RAM figures are minimums drawn from [invoke.ai\'s system requirements page](https://invoke.ai/start-here/system-requirements/) and can shift as new model variants ship — treat them as planning guidance and confirm current numbers before buying hardware for a specific model.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'InvokeAI vs. Alternatives',
        columns: ['Option', 'Best for', 'Interface style', 'License', 'Key trade-off'],
        rows: [
          {
            'Option': 'InvokeAI',
            'Best for': 'Layer-based, non-destructive compositing with a polished studio-style UI',
            'Interface style': 'Unified canvas + optional node editor',
            'License': 'Apache-2.0, no revenue cap',
            'Key trade-off': 'Generally slower to add support for brand-new models than ComfyUI',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Best for': 'Maximum control and fastest support for brand-new model releases',
            'Interface style': 'Node graph, everything wired manually',
            'License': 'GPL-3.0',
            'Key trade-off': 'Steepest learning curve of the mainstream options; no built-in unified canvas',
          },
          {
            'Option': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Best for': 'The largest extension ecosystem and community tutorials for Stable Diffusion specifically',
            'Interface style': 'Tab-based web UI',
            'License': 'AGPL-3.0',
            'Key trade-off': 'No stable release since v1.10.1 (Feb 2025) and no native FLUX support as of 2026; no persistent-layer canvas',
          },
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Best for': 'Fewest clicks to a first good image, minimal configuration',
            'Interface style': 'Simplified, opinionated single-window UI',
            'License': 'GPL-3.0',
            'Key trade-off': 'In limited long-term-support mode (bug fixes only) per its own README, SDXL-only, no plans for newer architectures',
          },
          {
            'Option': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)',
            'Best for': 'Multi-GPU and multi-backend orchestration (can drive ComfyUI as a backend)',
            'Interface style': 'Modular web UI over pluggable backends',
            'License': 'MIT',
            'Key trade-off': 'Smaller mainstream user base than the other four; formerly Stability AI\'s "StableSwarmUI" before an independent 2024 fork',
          },
        ],
        note: 'This is a positioning summary based on each project\'s own documentation and license files as of 2026-09-06, not a hands-on benchmark. See [Local AI Image Generation vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) for how these local options compare against cloud tools like Midjourney and Adobe Firefly, and [Stable Diffusion Review](/power-local-llm/stable-diffusion-review) for the underlying model family these UIs all run.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use InvokeAI',
        items: [
          '**Reader who wants a layer-based, non-destructive editing workflow.** The unified canvas is built around persistent layers you can revisit and re-mask, closer to a digital painting studio than a one-shot generate-and-discard loop.',
          '**Reader who wants a polished interface without building a node graph from scratch.** InvokeAI\'s canvas is usable without wiring anything, though a node editor is still available for readers who want it.',
          '**Reader or small studio that wants the most permissive open-source license.** Apache-2.0 has no revenue cap and no copyleft obligation for code built on top of it, which is a real difference from ComfyUI\'s and AUTOMATIC1111\'s GPL-family licenses for teams shipping proprietary tooling around the model.',
          '**Reader who wants full local control and privacy.** Once installed, generation runs entirely on your own GPU — no images or prompts leave your machine.',
          '**Reader who wants a maintained project with a clear governance story.** The 2025 Adobe acquisition of the commercial company did not stop the open-source project; it continues under named, longtime co-maintainers.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use InvokeAI',
        items: [
          '**Reader who wants the newest experimental model or node the same day it releases.** ComfyUI is widely reported to add support for major new open-weights model releases on launch day; InvokeAI\'s canvas-first integration approach has not built that same reputation for immediate release-day coverage.',
          '**Reader who specifically wants a node-graph-only workflow with no canvas.** InvokeAI includes a node editor, but its defining feature is the unified canvas — readers who exclusively want node-based pipeline building may prefer ComfyUI\'s node-first design.',
          '**Reader who was relying on Invoke\'s paid cloud-hosted subscription for team collaboration or hosted GPU access.** That service was discontinued on October 31, 2025; there is no current InvokeAI-branded paid replacement, so evaluate other hosted or team-collaboration tools if that was the deciding feature.',
          '**Reader on very low-VRAM hardware who specifically wants to run FLUX-class models.** FLUX.1 wants roughly 10 GB VRAM and 32 GB system RAM at minimum in InvokeAI\'s own published requirements; readers on 4–6 GB cards should plan around SD 1.5 instead, or use a cloud alternative.',
          '**Reader who wants the single largest community tutorial and extension library for Stable Diffusion specifically.** AUTOMATIC1111\'s WebUI has the longest history and largest volume of community tutorials and third-party extensions built specifically around it, even though the project itself has had no stable release since v1.10.1 in February 2025 and has not added native FLUX support, per its own GitHub repository.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is InvokeAI free?',
            a: 'Yes. The open-source Community Edition is free to download, self-host, and use commercially under the Apache-2.0 license, with no revenue cap. The company that previously sold a paid, cloud-hosted version, Invoke, was acquired by Adobe in October 2025 and shut down that service on October 31, 2025 — there is currently no InvokeAI-branded paid tier of any kind.',
          },
          {
            q: 'Did Adobe buy InvokeAI?',
            a: 'Adobe acquired the company Invoke, which built a commercial hosted platform on top of the open-source InvokeAI project, in October 2025 (announced at Adobe MAX 2025). Invoke\'s founding team, including CEO Kent Keirsey, joined Adobe\'s Firefly Foundry group. The hosted commercial service ceased operations on October 31, 2025. The open-source InvokeAI project itself was not acquired and continues under independent community maintainers Lincoln Stein and Vic (Blessedcoolant).',
          },
          {
            q: 'What license does InvokeAI use?',
            a: 'InvokeAI\'s software is licensed under Apache-2.0, a permissive open-source license with no revenue cap and no copyleft requirement for code you build on top of it. This differs from ComfyUI (GPL-3.0) and AUTOMATIC1111\'s Stable Diffusion WebUI (AGPL-3.0), both of which carry stronger copyleft terms for derivative or networked use. This is a summary, not legal advice — read the license file on GitHub before a commercial deployment decision.',
          },
          {
            q: 'What is InvokeAI\'s unified canvas?',
            a: 'The unified canvas is InvokeAI\'s core workspace, where every generation, inpaint, or outpaint becomes a persistent, editable layer instead of a disposable one-off output. Readers can mask a region with a brush tool, regenerate just that area, and stack layers over time, closer to working in a layered image editor than to a single generate-and-discard prompt box.',
          },
          {
            q: 'What models does InvokeAI support?',
            a: 'As of current documentation, InvokeAI supports Stable Diffusion 1.5, 2.0, SDXL, and 3.5 (Medium and Large), several FLUX variants (dev, schnell, Kontext, Krea, Redux, Fill, and FLUX.2 Klein), plus newer models such as CogView4 and Qwen-Image, in `.ckpt`, `diffusers`, and some `.gguf` formats. This list is updated frequently — check the [InvokeAI GitHub repository](https://github.com/invoke-ai/InvokeAI) for the current supported-model list before assuming support for a specific new release.',
          },
          {
            q: 'How much VRAM does InvokeAI need?',
            a: 'It depends on the model: Stable Diffusion 1.5 needs as little as 4 GB VRAM and 8 GB system RAM, SDXL wants 8 GB VRAM and 16 GB RAM, FLUX.1 wants roughly 10 GB VRAM and 32 GB RAM, and the larger FLUX.2 Klein (9B) variant wants around 24 GB VRAM and 32 GB RAM. These are minimums published by InvokeAI\'s own documentation and can change as new model variants ship.',
          },
          {
            q: 'Is InvokeAI better than ComfyUI or AUTOMATIC1111?',
            a: 'It depends on what you value. ComfyUI is widely reported to add support for brand-new open-weights model releases fastest and offers the most granular node-level control; AUTOMATIC1111\'s WebUI has the largest volume of community tutorials and extensions built specifically for Stable Diffusion, though its GitHub repository shows no stable release since v1.10.1 in February 2025 and no native FLUX support as of 2026. InvokeAI\'s advantage is its unified canvas: persistent, non-destructive layers that make iterative editing feel more like a digital painting tool, plus the most permissive license (Apache-2.0) of the three.',
          },
          {
            q: 'Where do I download InvokeAI?',
            a: 'The official source is the [invoke-ai/InvokeAI GitHub repository](https://github.com/invoke-ai/InvokeAI), and the recommended installation path is the launcher described on [invoke.ai\'s installation guide](https://invoke.ai/start-here/installation/), which handles Python environment setup automatically for Windows, macOS, and Linux.',
          },
          {
            q: 'What happened to Invoke\'s paid subscription plans?',
            a: 'They were discontinued. Invoke, the company that sold paid cloud-hosted subscription tiers alongside the free open-source software, was acquired by Adobe in October 2025, and its hosted commercial service ceased operations on October 31, 2025. Older articles or cached pricing pages describing "Starter," "Indie," "Professional," or "Enterprise" plans describe a service that no longer exists as of 2026.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'InvokeAI earns its reputation as the most studio-oriented of the mainstream Stable Diffusion interfaces, built around a genuinely distinctive unified canvas with persistent, non-destructive layers that reward readers doing iterative, artist-style compositing rather than one-shot prompt generation. Its Apache-2.0 license is the most permissive of the major options, and self-hosting remains entirely free with no revenue cap — a fact worth stating plainly given how much outdated pricing information about "Invoke subscription plans" still circulates after the company behind the commercial hosted service was acquired by Adobe in October 2025 and shut that service down. The open-source project itself was not part of that deal and continues under named community maintainers with active development. The honest trade-off: ComfyUI is widely reported to add support for brand-new model releases faster, and AUTOMATIC1111 still carries the largest volume of community tutorials and extensions built specifically around it. For a reader who wants a polished, layer-based canvas and a permissive license with no strings attached, InvokeAI remains a reasonable and currently free choice.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[invoke-ai/InvokeAI on GitHub](https://github.com/invoke-ai/InvokeAI) — official source code, license file, current model support, and release notes.',
          '[InvokeAI — official documentation](https://invoke.ai/) — installation guides, system requirements, and feature documentation.',
          '[InvokeAI system requirements](https://invoke.ai/start-here/system-requirements/) — official VRAM, RAM, GPU, and OS requirements by model.',
          '[Apache License 2.0 — InvokeAI LICENSE file on GitHub](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) — full legal text of InvokeAI\'s software license.',
          '[Adobe Newsroom — Adobe Firefly Foundry announcement](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry) — official Adobe announcement covering the Invoke team joining Adobe.',
          '[ComfyUI LICENSE on GitHub](https://github.com/comfy-org/ComfyUI/blob/master/LICENSE) — GPL-3.0 license text for comparison.',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE on GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — AGPL-3.0 license text for comparison.',
          '[AUTOMATIC1111/stable-diffusion-webui releases on GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — release history confirming v1.10.1 (February 2025) as the most recent stable release at time of writing.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Stable Diffusion Review (2026)](/power-local-llm/stable-diffusion-review) — the underlying open-weights model family InvokeAI, ComfyUI, and AUTOMATIC1111 all run.',
          '[Local AI Image Generation vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) — comparison of local image tools against cloud services like Midjourney and Adobe Firefly.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory) — comprehensive app and tool directory for all platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/invokeai-review-hero-de.webp',
    title: 'InvokeAI Test (2026): Professionelles Stable-Diffusion-Studio',
    seoTitle: 'InvokeAI Test 2026: Unified Canvas, Ebenen & Preis-Guide',
    intro:
      'InvokeAI ist eine kostenlose, quelloffene, selbst gehostete Oberfläche zum Ausführen von Stable-Diffusion- und FLUX-Bildmodellen auf der eigenen GPU, aufgebaut um eine "Unified Canvas" mit ebenenbasierter, nicht-destruktiver Bearbeitung statt eines Node-Graphen oder eines einfachen Tab-Layouts. Es wird von einer Open-Source-Community unter der Apache-2.0-Lizenz gepflegt, nachdem das Unternehmen, das InvokeAI ursprünglich aufgebaut hat, Invoke, im Oktober 2025 von Adobe übernommen wurde und dessen kommerzieller gehosteter Dienst eingestellt wurde. Dieser Test erklärt, was InvokeAI tatsächlich ist, die reale Lizenz und die Kosten (es gibt derzeit keine kostenpflichtige Stufe), die Hardware-Anforderungen, die unterstützten Modelle und den Vergleich mit ComfyUI, AUTOMATIC1111, Fooocus und SwarmUI.',
    metaDescription:
      'InvokeAI Test 2026: kostenloses Apache-2.0-Studio mit Unified Canvas für Stable Diffusion/FLUX. Mit der Adobe-Übernahme von Invoke, aktuellem Modell-Support, VRAM-Bedarf und ehrlichem Vergleich mit ComfyUI und AUTOMATIC1111.',
    twitterDescription:
      'InvokeAI Test 2026: das Stable-Diffusion-Studio mit Unified Canvas, vollständig kostenlos und quelloffen (Apache-2.0), nachdem Adobe im Oktober 2025 das dahinterstehende Unternehmen übernommen hat. Lizenz, Hardware-Bedarf und der Vergleich mit ComfyUI und A1111.',
    audience:
      'Leser, die entscheiden möchten, ob sie InvokeAI für lokale, ebenenbasierte Bildgenerierung selbst hosten — inkl. Lizenzbedingungen, der Adobe-Übernahme 2025 und deren Bedeutung für die Preisgestaltung, Hardware-Anforderungen und Vergleich mit ComfyUI, AUTOMATIC1111 und Fooocus.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'InvokeAI review',
    targetKeywords: [
      'invokeai test',
      'invokeai vs comfyui',
      'invokeai preis',
      'invokeai unified canvas',
      'invokeai lizenz',
      'invokeai systemanforderungen',
      'invokeai vs automatic1111',
      'ist invokeai kostenlos',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion 2.0', 'Stable Diffusion XL', 'Stable Diffusion 3.5 Medium', 'Stable Diffusion 3.5 Large', 'FLUX.1 dev', 'FLUX.1 schnell', 'FLUX.1 Kontext', 'FLUX.2 Klein', 'CogView4', 'Qwen-Image'],
    current_hardware_mentioned: ['4 GB VRAM', '8 GB VRAM', '10 GB VRAM', '12 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 3060', 'Apple Silicon M1', 'Intel Arc'],
    leadAnswerBlock:
      '**InvokeAI ist eine kostenlose, quelloffene, selbst gehostete Oberfläche für Stable Diffusion und FLUX, aufgebaut um eine Unified Canvas mit persistenten, nicht-destruktiven Ebenen — anders als der Node-Graph von ComfyUI oder das Tab-Layout von AUTOMATIC1111.** Es steht unter der Apache-2.0-Lizenz ohne Umsatzgrenze, sodass Self-Hosting nichts außer der eigenen Hardware kostet. Das Unternehmen, das es ursprünglich kommerzialisiert hat, Invoke, wurde im Oktober 2025 von Adobe übernommen; dessen gehosteter Cloud-Abodienst wurde am 31. Oktober 2025 eingestellt, und es gibt derzeit keine aktive kostenpflichtige Stufe — das Open-Source-Projekt wird unabhängig von der Community weitergeführt. Der Hardware-Bedarf reicht von 4 GB VRAM für SD 1.5 bis 24 GB VRAM für die größere FLUX.2-Klein-Variante — prüfen Sie aktuelle Anforderungen auf [invoke.ai](https://invoke.ai/start-here/system-requirements/), bevor Sie Hardware anschaffen.',
    quickAnswerTop: {
      de: {
        question: 'Ist InvokeAI kostenlos, und gibt es eine kostenpflichtige Stufe?',
        answer:
          'InvokeAI ist vollständig kostenlos und quelloffen unter der Apache-2.0-Lizenz, ohne Umsatzgrenze für die kommerzielle Nutzung. Das dahinterstehende Unternehmen, Invoke, wurde im Oktober 2025 von Adobe übernommen und stellte seinen kostenpflichtigen Cloud-Abodienst am 31. Oktober 2025 ein — seit 2026 gibt es keine aktive kostenpflichtige Stufe mehr, nur die kostenlose, selbst gehostete Community Edition.',
        bullets: [
          'Apache-2.0-Lizenz, selbst gehostet, keine Umsatzschwelle für kommerzielle Nutzung.',
          'Invoke (das Unternehmen) wurde im Oktober 2025 von Adobe übernommen; der Hosting-Dienst endete am 31. Oktober 2025.',
          'Unterstützt SD 1.5, SDXL, SD 3.5 und mehrere FLUX-Varianten in einer Oberfläche.',
          'Unified Canvas mit persistenten Ebenen für nicht-destruktives In-/Outpainting.',
          'Minimale Hardware: 4 GB VRAM für SD 1.5, bis zu 24 GB VRAM für größere FLUX.2-Modelle.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was InvokeAI ist', anchor: 'what-is-invokeai' },
      { label: 'Die Adobe-Übernahme erklärt', anchor: 'adobe-acquisition' },
      { label: 'Unified Canvas und Ebenen', anchor: 'unified-canvas' },
      { label: 'Modell-Unterstützung', anchor: 'model-support' },
      { label: 'So installieren Sie InvokeAI', anchor: 'how-to-install' },
      { label: 'Lizenz und Kosten', anchor: 'license-and-cost' },
      { label: 'Hardware-Anforderungen', anchor: 'hardware-requirements' },
      { label: 'InvokeAI vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen sich InvokeAI eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich InvokeAI nicht eignet', anchor: 'who-should-not-use' },
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
        items: [
          'InvokeAI ist eine kostenlose, quelloffene Oberfläche zum lokalen Ausführen von Stable-Diffusion- und FLUX-Modellen, aufgebaut um eine Unified Canvas mit persistenten, ebenenbasierten, nicht-destruktiven Bearbeitungen.',
          'Es steht unter der Apache-2.0-Lizenz — keine Umsatzgrenze, keine Copyleft-Pflichten für nachgelagerten Code, Self-Hosting kostet nichts außer der eigenen Hardware.',
          'Das Unternehmen hinter InvokeAI, Invoke, wurde im Oktober 2025 von Adobe übernommen; der gehostete kommerzielle Dienst wurde am 31. Oktober 2025 eingestellt. Derzeit gibt es keine aktive kostenpflichtige Stufe.',
          'Das Open-Source-Projekt wird unabhängig von der Community weitergeführt, angeführt von den langjährigen Co-Maintainern Lincoln Stein ([lstein](https://github.com/lstein)) und Vic ([Blessedcoolant](https://github.com/blessedcoolant)).',
          'Es unterstützt SD 1.5, SD 2.0, SDXL, SD 3.5 und mehrere FLUX-Varianten in einer Oberfläche, zusätzlich zu neueren Modellen wie CogView4 und Qwen-Image — prüfen Sie den aktuellen Modell-Support auf [GitHub](https://github.com/invoke-ai/InvokeAI), bevor Sie sich auf ein bestimmtes Modell verlassen.',
          'Der Hardware-Bedarf skaliert mit dem Modell: 4 GB VRAM reichen für SD 1.5, SDXL benötigt 8 GB, und größere FLUX-Varianten benötigen je nach Modell 10–24 GB.',
        ],
      },
      whatIsInvokeAI: {
        id: 'what-is-invokeai',
        title: 'Was InvokeAI ist',
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI ist eine kostenlose, quelloffene Oberfläche zum Ausführen von Stable-Diffusion- und FLUX-Bildmodellen auf der eigenen GPU, aufgebaut um eine Unified Canvas mit persistenten, nicht-destruktiven Ebenen statt eines Node-Graphen oder eines einfachen Tab-Layouts.' },
          { type: 'plain-terms', text: 'Stellen Sie es sich wie ein digitales Mal-Studio für KI-Bilder vor — jede Generierung wird zu einer Ebene, die Sie erneut aufrufen, maskieren und neu generieren können, statt zu einem Ergebnis, das Sie nur behalten oder verwerfen können.' },
        ],
        content: [
          'InvokeAI ist eine Frontend-Anwendung, die Stable-Diffusion- und FLUX-Modellgewichte lädt und die Inferenz auf Ihrer eigenen Hardware ausführt. Wie AUTOMATIC1111s Stable Diffusion WebUI, ComfyUI und Fooocus enthält es die Modellgewichte selbst nicht — diese stammen von Stability AI, Black Forest Labs und anderen Modell-Herausgebern und werden separat heruntergeladen (siehe [Stable Diffusion Test](/power-local-llm/stable-diffusion-review) für Hintergründe zur zugrunde liegenden Modellfamilie und deren eigenen Lizenzbedingungen).',
          'Was InvokeAI von anderen abhebt, ist die Unified Canvas: ein einziger Arbeitsbereich, in dem jede Generierung, jedes Inpainting und Outpainting zu einer persistenten Ebene wird statt zu einem wegwerfbaren Ergebnis. Ebenen können später erneut aufgerufen, neu maskiert und neu generiert werden, sodass ein Bild eher wie eine fortlaufende Komposition behandelt wird als wie ein einmaliges Rendering. Dieses Design zielt auf professionelle, studioartige Arbeitsabläufe ab — näher daran, wie ein digitaler Künstler in einem ebenenbasierten Bildeditor arbeitet, als an ein Tool zum bloßen Prompt-Eingeben.',
          'Das Projekt begann im August 2022 als einer der frühesten Community-Forks der CompVis-Referenzimplementierung von Stable Diffusion, zunächst von Lincoln Stein unter dem Repository-Namen `lstein/stable-diffusion` gepflegt, bevor es in InvokeAI umbenannt wurde. Ein Unternehmen namens Invoke bildete sich später rund um das Projekt, um darauf aufbauend eine kommerzielle, gehostete Version zu entwickeln — die Geschichte dieses Unternehmens wird im nächsten Abschnitt behandelt, da sie sich 2025 grundlegend änderte.',
        ],
      },
      adobeAcquisition: {
        id: 'adobe-acquisition',
        title: 'Die Adobe-Übernahme erklärt',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Adobe hat das Unternehmen Invoke im Oktober 2025 übernommen; das Gründerteam wechselte zu Adobes Firefly-Foundry-Gruppe, der kommerzielle gehostete Dienst wurde am 31. Oktober 2025 eingestellt, und das Open-Source-Projekt InvokeAI wird unabhängig von den Community-Maintainern weitergeführt.' },
          { type: 'plain-terms', text: 'Das Unternehmen, das früher eine kostenpflichtige, cloudgehostete Version von InvokeAI verkauft hat, existiert als eigenständiges Unternehmen nicht mehr — das Team arbeitet jetzt bei Adobe —, aber die kostenlose Software, die Sie selbst herunterladen und betreiben können, war nicht Teil dieses Deals und wird weitergeführt.' },
        ],
        content: [
          'Dies ist die wichtigste Tatsache zu InvokeAI im Jahr 2026, und es ist leicht, veraltete Informationen zu finden, die dies falsch darstellen. Adobe kündigte auf der Adobe MAX 2025 (20.–21. Oktober 2025) an, dass es Invoke übernommen habe, das Unternehmen hinter der kommerziellen, cloudgehosteten Version von InvokeAI, und dass dessen Team — einschließlich CEO Kent Keirsey — zu Adobes neuer "Firefly Foundry"-Initiative gewechselt sei, die Unternehmen dabei hilft, eigene generative Modelle auf Basis von Adobes Firefly-Fundament zu entwickeln.',
          'Invokes kommerzielle gehostete Plattform, die zuvor Abo-Stufen für cloudbasierte Generierung und Team-Kollaborationsfunktionen verkaufte, stellte den Betrieb am 31. Oktober 2025 ein. Wenn Sie einen älteren Artikel, eine Vergleichstabelle oder eine zwischengespeicherte Preisseite finden, die "Starter-", "Indie-", "Professional-" oder "Enterprise"-Abos für InvokeAI beschreibt, beschreibt das einen Dienst, den es nicht mehr gibt — kalkulieren Sie nicht mit diesen Zahlen.',
          'Das Open-Source-Projekt InvokeAI selbst wurde nicht eingestellt. Die Verantwortung ging an Lincoln Stein ([lstein](https://github.com/lstein)) und Vic ([Blessedcoolant](https://github.com/blessedcoolant)) über, langjährige Kern-Maintainer, die seit den frühesten Tagen des Projekts beteiligt sind, und die Entwicklung wurde unabhängig von Adobe unter der GitHub-Organisation [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) fortgesetzt. Dieser Test behandelt dieses fortlaufende, kostenlose, selbst gehostete Open-Source-Projekt — nicht den eingestellten kommerziellen Dienst.',
        ],
        note: 'Die Fakten in diesem Abschnitt stammen aus Adobes eigener Ankündigung vom Oktober 2025 und mehreren unabhängigen Fachmedien-Berichten; prüfen Sie [github.com/invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) direkt für die aktuelle Maintainer-Liste und den Projektstatus, bevor Sie sich auf eine Drittzusammenfassung — auch diese hier — verlassen.',
      },
      unifiedCanvas: {
        id: 'unified-canvas',
        title: 'Unified Canvas und Ebenen',
        itemHeadings: true,
        columns: ['Funktion', 'Was sie tut'],
        rows: [
          { 'Funktion': 'Persistente Ebenen', 'Was sie tut': 'Jede Generierung, jedes Inpainting oder Outpainting wird zu einer eigenen Ebene, die auch nach dem Schließen und Wiederöffnen des Projekts bearbeitbar bleibt' },
          { 'Funktion': 'Pinselbasierte Maskierung', 'Was sie tut': 'Malen Sie eine Maske direkt auf die Leinwand, um genau zu steuern, welcher Bereich neu generiert wird, statt einen separaten Masken-Editor zu nutzen' },
          { 'Funktion': 'In-/Outpainting', 'Was sie tut': 'Regenerieren Sie einen maskierten Bereich an Ort und Stelle oder erweitern Sie die Leinwand über die ursprünglichen Bildränder hinaus, ohne ein neues Projekt zu starten' },
          { 'Funktion': 'ControlNet-Integration', 'Was sie tut': 'Steuern Sie Komposition und Pose mit ControlNet-Modellen direkt im selben Canvas-Arbeitsbereich' },
          { 'Funktion': 'Node-basierter Workflow-Editor', 'Was sie tut': 'Ein separater, optionaler Node-Graph für fortgeschrittene oder wiederholbare Pipelines, für Leser, die diese Kontrollebene zusätzlich zur Canvas wünschen' },
          { 'Funktion': 'Board- und Galerie-Verwaltung', 'Was sie tut': 'Organisiert Generierungen in Boards mit erhaltenen Metadaten, sodass Prompt und Einstellungen mit dem erzeugten Bild verknüpft bleiben' },
        ],
        content: [
          'Die Unified Canvas ist das, worauf die meisten Reviewer und Nutzer als das definierende Merkmal von InvokeAI gegenüber AUTOMATIC1111 und ComfyUI verweisen. Statt ein Bild nach dem anderen zu generieren und es für weitere Bearbeitung manuell wieder zu importieren, behandelt InvokeAI die Canvas als einen einzigen durchgehenden Arbeitsbereich: Sie können einen Bereich maskieren, ihn neu generieren, eine neue Ebene darüberlegen und zwischen diesen Zuständen wechseln, ohne die Canvas zu verlassen oder frühere Versionen zu verlieren.',
          'Das kommt tatsächlich näher an die Arbeitsweise eines professionellen digitalen Künstlers in einem ebenenbasierten Bildeditor heran als an die tab-basierte "Generieren, Prüfen, Neu-Generieren"-Schleife der WebUI von AUTOMATIC1111 oder den Node-Graph-zuerst-Ansatz von ComfyUI, bei dem das Zusammenstellen einer Bearbeitungs-Pipeline erfordert, Nodes zu verdrahten, bevor überhaupt ein Bild zu sehen ist. InvokeAI liefert außerdem einen eigenen, optionalen node-basierten Workflow-Editor für Leser, die diese Kontrolle wünschen, sodass Canvas und Node-Graph sich innerhalb derselben Anwendung ergänzen statt ausschließen.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Modell-Unterstützung',
        content: [
          '**InvokeAI unterstützt eine breite und aktiv wachsende Palette offener Bild- und Video-Modelle in einer einzigen Oberfläche, statt um eine bestimmte Modellfamilie herum aufgebaut zu sein.** Laut aktueller Dokumentation gehören dazu Stable Diffusion 1.5, Stable Diffusion 2.0, SDXL, Stable Diffusion 3.5 (Medium und Large), mehrere FLUX-Varianten (dev, schnell, Kontext, Krea, Redux, Fill und das neuere FLUX.2 Klein) sowie CogView4 und Qwen-Image. Es lädt außerdem Modelle in den Formaten `.ckpt`, `diffusers` und teilweise `.gguf` (quantisiert).',
          'Diese Liste ändert sich häufig, da neue offene Modelle veröffentlicht werden — behandeln Sie sie als Momentaufnahme, nicht als dauerhaftes Inventar. Prüfen Sie die aktuellen Hinweise zur Modell-Unterstützung im [InvokeAI-GitHub-Repository](https://github.com/invoke-ai/InvokeAI) oder den Release Notes, bevor Sie Unterstützung für ein bestimmtes neues Modell am Erscheinungstag voraussetzen.',
          'Ein ehrlicher Hinweis, der im Abschnitt "Für wen sich InvokeAI nicht eignet" weiter unten vertieft wird: Die Maintainer von InvokeAI priorisieren eine saubere Integration von Modellen in die Unified Canvas und den Node-Editor-Workflow, was tendenziell länger dauert als das Hinzufügen bloßer Kommandozeilen-Unterstützung. ComfyUI wird häufig dafür genannt, Unterstützung für große neue offene Modell-Releases noch am Erscheinungstag hinzuzufügen (sogenannte "Day-Zero"-Unterstützung); InvokeAI hat sich diesen Ruf für sofortige Erscheinungstag-Abdeckung Stand 2026 nicht in gleichem Maße erarbeitet.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'So installieren Sie InvokeAI',
        content: [
          'Die Installation von InvokeAI folgt auf allen unterstützten Betriebssystemen demselben Grundmuster, über den offiziellen Launcher statt einer manuellen Umgebungseinrichtung.',
        ],
        numberedItems: [
          { title: 'GPU und Betriebssystem gegen die Systemanforderungen prüfen', whyItMatters: 'InvokeAI läuft unter Windows 10+, macOS 14+ und Linux (Ubuntu 20.04+ gut getestet); prüfen Sie vor der Installation, ob Ihre GPU und VRAM die Anforderungen des geplanten Modells erfüllen.' },
          { title: 'Den InvokeAI-Launcher herunterladen', whyItMatters: 'Der Launcher, verfügbar über die [offizielle Installationsanleitung](https://invoke.ai/start-here/installation/) und GitHub Releases, übernimmt die Python-Umgebung und die Abhängigkeiten automatisch, statt eine manuelle Virtual-Environment-Installation zu erfordern.' },
          { title: 'Anwendung installieren und starten', whyItMatters: 'Der Launcher installiert das Backend von InvokeAI und öffnet die browserbasierte Weboberfläche — für die lokale Nutzung ist keine separate Webserver-Konfiguration nötig.' },
          { title: 'Ein Modell herunterladen oder auswählen', whyItMatters: 'Wählen Sie über den integrierten Modell-Manager ein Einstiegsmodell (z. B. einen SD-1.5- oder SDXL-Checkpoint), oder verweisen Sie InvokeAI auf eine bereits von Hugging Face oder Civitai heruntergeladene Modelldatei.' },
          { title: 'Die Unified Canvas öffnen und generieren', whyItMatters: 'Geben Sie einen Prompt ein, stellen Sie Auflösung und Schritte ein und generieren Sie direkt auf der Canvas — die erste Generierung ist typischerweise langsamer, während das Modell in den VRAM geladen wird.' },
          { title: 'Bei Bedarf ControlNet, LoRAs oder den Node-Editor hinzufügen', whyItMatters: 'Dies sind optionale Ebenen auf dem Basis-Workflow — die meisten Leser können sie für ihre ersten Projekte ignorieren und später hinzufügen, sobald sie mit der Canvas vertraut sind.' },
        ],
        note: 'Genaue Installationsschritte und Systempaket-Anforderungen (z. B. Python 3.11–3.12, GPU-Treiber) können sich zwischen Releases ändern — folgen Sie der aktuellen [invoke.ai-Installationsanleitung](https://invoke.ai/start-here/installation/) statt einer generischen Anleitung, auch dieser hier, für die genaue Befehlssyntax.',
      },
      licenseAndCost: {
        id: 'license-and-cost',
        title: 'Lizenz und Kosten',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Die Open-Source-Community-Edition von InvokeAI steht unter der Apache-2.0-Lizenz ohne Umsatzgrenze und ist vollständig kostenlos selbst zu hosten; die früheren kostenpflichtigen gehosteten Cloud-Stufen des Unternehmens wurden eingestellt, als Adobe Invoke im Oktober 2025 übernahm.' },
          { type: 'plain-terms', text: 'Es gibt heute nur eine Version von InvokeAI, die Sie tatsächlich bekommen können — die kostenlose, die Sie selbst betreiben —, weil der kostenpflichtige Cloud-Dienst, der früher daneben existierte, eingestellt wurde.' },
        ],
        columns: ['Was', 'Status', 'Kosten'],
        rows: [
          { 'Was': 'Open-Source-Community-Edition (selbst gehostet)', 'Status': 'Aktiv von der Community gepflegt', 'Kosten': 'Kostenlos — Apache-2.0, keine Umsatzgrenze' },
          { 'Was': 'Gehostetes Invoke-Cloud-Abo (Starter/Indie/Professional/Enterprise)', 'Status': 'Eingestellt — Dienst endete am 31.10.2025', 'Kosten': 'Entfällt — nicht mehr verfügbar' },
          { 'Was': 'Adobe Firefly Foundry (aktuelle Arbeit des übernehmenden Teams)', 'Status': 'Eine separate Adobe-Produktlinie, keine Fortführung von InvokeAI', 'Kosten': 'Von Adobe festgelegt — nicht Teil dieses Tests' },
        ],
        content: [
          'Die Software-Lizenz von InvokeAI ist Apache-2.0, eine der freizügigsten verfügbaren Open-Source-Lizenzen: Sie erlaubt kommerzielle Nutzung, Modifikation und Weiterverbreitung ohne Umsatzschwelle und ohne Copyleft-Pflicht, eigenen darauf aufbauenden Code offenzulegen. Das ist eine spürbar freizügigere Lizenz als bei ComfyUI (GPL-3.0) oder AUTOMATIC1111s Stable Diffusion WebUI (AGPL-3.0), die beide stärkere Copyleft-Pflichten für abgeleitete oder vernetzte Nutzung mit sich bringen — ein realer, überprüfbarer Unterschied, keine Marketingaussage.',
          'Da das Self-Hosting von InvokeAI unter dieser Lizenz kostenlos ist, sind die einzigen laufenden Kosten die eigene Hardware und der Stromverbrauch — dieselbe Kostenstruktur wie bei jeder anderen selbst gehosteten Stable-Diffusion- oder FLUX-Oberfläche. Es gibt keine von PromptQuorum erfasste Abogebühr, und Stand dieses Tests gibt es keine offizielle, Invoke-gebrandete kostenpflichtige Stufe mehr, mit der man sie vergleichen könnte, da das Unternehmen, das eine solche verkauft hat, sie nicht mehr betreibt. Sollte sich das unter neuer Führung ändern, prüfen Sie aktuelle Bedingungen direkt auf [invoke.ai](https://invoke.ai) und im [GitHub-Repository](https://github.com/invoke-ai/InvokeAI), bevor Sie davon ausgehen, dass diese Kostenaufstellung noch gilt.',
        ],
        note: 'Lizenz- und Kosteninformationen basieren auf dem Apache-2.0-Lizenztext unter [github.com/invoke-ai/InvokeAI/blob/main/LICENSE](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) sowie öffentlicher Berichterstattung zur Adobe-Übernahme im Oktober 2025, Stand 06.09.2026. Dies ist keine Rechtsberatung — lesen Sie vor einer kommerziellen Einsatzentscheidung selbst die Lizenzdatei.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Hardware-Anforderungen',
        itemHeadings: true,
        columns: ['Modell', 'Minimaler VRAM', 'Minimaler System-RAM'],
        rows: [
          { 'Modell': 'Stable Diffusion 1.5', 'Minimaler VRAM': '4 GB VRAM', 'Minimaler System-RAM': '8 GB RAM' },
          { 'Modell': 'SDXL', 'Minimaler VRAM': '8 GB VRAM', 'Minimaler System-RAM': '16 GB RAM' },
          { 'Modell': 'FLUX.1', 'Minimaler VRAM': '10 GB VRAM', 'Minimaler System-RAM': '32 GB RAM' },
          { 'Modell': 'FLUX.2 Klein (4B)', 'Minimaler VRAM': '12 GB VRAM', 'Minimaler System-RAM': '16 GB RAM' },
          { 'Modell': 'FLUX.2 Klein (9B)', 'Minimaler VRAM': '24 GB VRAM', 'Minimaler System-RAM': '32 GB RAM' },
        ],
        content: [
          'InvokeAI läuft unter Windows 10+, macOS 14+ und Linux, wobei Ubuntu 20.04+ als besonders gut getestet gilt. NVIDIA-GPUs ab der GTX-10er-Serie werden unter Windows und Linux unterstützt; AMD-GPUs nur unter Linux; Intel-Arc-GPUs (Alchemist, Battlemage und neuer) unter Windows und Linux x86_64. Apple-Silicon-Macs (M1 und neuer) funktionieren, wobei 16 GB+ Unified Memory für komfortable Nutzung empfohlen werden. Reine CPU-Generierung ist auf Linux-ARM64-Geräten möglich, aber ohne GPU langsam.',
          'InvokeAI benötigt Python 3.11 oder 3.12, um außerhalb des gebündelten Launchers zu laufen. Der offizielle Launcher verwaltet diese Abhängigkeit für die meisten Leser automatisch, sodass die manuelle Verwaltung einer Python-Umgebung bei typischen Installationen optional statt erforderlich ist.',
        ],
        note: 'VRAM- und RAM-Angaben sind Mindestwerte von der [Systemanforderungen-Seite von invoke.ai](https://invoke.ai/start-here/system-requirements/) und können sich mit neuen Modellvarianten ändern — behandeln Sie sie als Planungshilfe und prüfen Sie aktuelle Zahlen, bevor Sie Hardware für ein bestimmtes Modell anschaffen.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'InvokeAI vs. Alternativen',
        columns: ['Option', 'Am besten für', 'Oberflächenstil', 'Lizenz', 'Wichtiger Kompromiss'],
        rows: [
          {
            'Option': 'InvokeAI',
            'Am besten für': 'Ebenenbasiertes, nicht-destruktives Compositing mit einer ausgereiften Studio-Oberfläche',
            'Oberflächenstil': 'Unified Canvas + optionaler Node-Editor',
            'Lizenz': 'Apache-2.0, keine Umsatzgrenze',
            'Wichtiger Kompromiss': 'Generell langsamer bei der Unterstützung ganz neuer Modelle als ComfyUI',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Am besten für': 'Maximale Kontrolle und schnellste Unterstützung ganz neuer Modell-Releases',
            'Oberflächenstil': 'Node-Graph, alles manuell verdrahtet',
            'Lizenz': 'GPL-3.0',
            'Wichtiger Kompromiss': 'Steilste Lernkurve der gängigen Optionen; keine integrierte Unified Canvas',
          },
          {
            'Option': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Am besten für': 'Das größte Extensions-Ökosystem und die meisten Community-Tutorials speziell für Stable Diffusion',
            'Oberflächenstil': 'Tab-basierte Web-Oberfläche',
            'Lizenz': 'AGPL-3.0',
            'Wichtiger Kompromiss': 'Langsameres Entwicklungstempo als ComfyUI und InvokeAI Stand 2026; keine persistente Ebenen-Canvas',
          },
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Am besten für': 'Wenigste Klicks zum ersten guten Bild, minimale Konfiguration',
            'Oberflächenstil': 'Vereinfachte, festgelegte Einzelfenster-Oberfläche',
            'Lizenz': 'GPL-3.0',
            'Wichtiger Kompromiss': 'Laut eigenem README im Modus mit begrenztem Langzeit-Support (nur Bugfixes), nur SDXL, keine Pläne für neuere Architekturen',
          },
          {
            'Option': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)',
            'Am besten für': 'Multi-GPU- und Multi-Backend-Orchestrierung (kann ComfyUI als Backend ansteuern)',
            'Oberflächenstil': 'Modulare Web-Oberfläche über austauschbare Backends',
            'Lizenz': 'MIT',
            'Wichtiger Kompromiss': 'Kleinere Nutzerbasis als die anderen vier; ehemals Stability AIs "StableSwarmUI" vor einem unabhängigen Fork 2024',
          },
        ],
        note: 'Dies ist eine Positionierungs-Zusammenfassung basierend auf den eigenen Dokumentationen und Lizenzdateien der jeweiligen Projekte, Stand 06.09.2026, kein praktischer Benchmark. Siehe [Lokale KI-Bildgenerierung vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) für den Vergleich dieser lokalen Optionen mit Cloud-Tools wie Midjourney und Adobe Firefly, und [Stable Diffusion Test](/power-local-llm/stable-diffusion-review) für die zugrunde liegende Modellfamilie, die all diese Oberflächen ausführen.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich InvokeAI eignet',
        items: [
          '**Leser, die einen ebenenbasierten, nicht-destruktiven Bearbeitungs-Workflow möchten.** Die Unified Canvas basiert auf persistenten Ebenen, die Sie erneut aufrufen und neu maskieren können — näher an einem digitalen Mal-Studio als an einer Schleife aus Generieren und Verwerfen.',
          '**Leser, die eine ausgereifte Oberfläche ohne eigenen Node-Graph-Aufbau möchten.** Die Canvas von InvokeAI ist nutzbar, ohne irgendetwas zu verdrahten, wobei ein Node-Editor für Leser, die ihn möchten, weiterhin verfügbar ist.',
          '**Leser oder kleines Studio, das die freizügigste Open-Source-Lizenz möchte.** Apache-2.0 hat keine Umsatzgrenze und keine Copyleft-Pflicht für darauf aufbauenden Code — ein realer Unterschied zu den GPL-Familien-Lizenzen von ComfyUI und AUTOMATIC1111 für Teams, die eigene, proprietäre Tools rund um das Modell entwickeln.',
          '**Leser, der volle lokale Kontrolle und Datenschutz möchte.** Einmal installiert, läuft die Generierung vollständig auf der eigenen GPU — keine Bilder oder Prompts verlassen den Rechner.',
          '**Leser, der ein gepflegtes Projekt mit klarer Governance-Geschichte möchte.** Die Adobe-Übernahme des kommerziellen Unternehmens 2025 hat das Open-Source-Projekt nicht gestoppt; es wird von namentlich genannten, langjährigen Co-Maintainern weitergeführt.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich InvokeAI nicht eignet',
        items: [
          '**Leser, der das neueste experimentelle Modell oder Node noch am Erscheinungstag möchte.** ComfyUI wird häufig dafür genannt, Unterstützung für große neue offene Modell-Releases noch am Erscheinungstag hinzuzufügen; InvokeAIs Canvas-first-Integrationsansatz hat sich diesen Ruf für sofortige Erscheinungstag-Abdeckung nicht in gleichem Maße erarbeitet.',
          '**Leser, der ausdrücklich einen reinen Node-Graph-Workflow ohne Canvas möchte.** InvokeAI enthält einen Node-Editor, aber sein definierendes Merkmal ist die Unified Canvas — Leser, die ausschließlich node-basierten Pipeline-Aufbau möchten, bevorzugen unter Umständen ComfyUIs Node-first-Design.',
          '**Leser, der sich auf Invokes kostenpflichtiges, cloudgehostetes Abo für Team-Kollaboration oder gehosteten GPU-Zugang verlassen hat.** Dieser Dienst wurde am 31. Oktober 2025 eingestellt; es gibt derzeit keinen aktuellen, InvokeAI-gebrandeten kostenpflichtigen Ersatz — prüfen Sie andere gehostete Tools oder Team-Kollaborations-Tools, falls das das entscheidende Merkmal war.',
          '**Leser mit sehr wenig VRAM, der ausdrücklich FLUX-Klasse-Modelle nutzen möchte.** FLUX.1 will laut InvokeAIs eigenen veröffentlichten Anforderungen mindestens etwa 10 GB VRAM und 32 GB System-RAM; Leser mit 4–6-GB-Karten sollten stattdessen mit SD 1.5 planen oder eine Cloud-Alternative nutzen.',
          '**Leser, der die größte Community-Tutorial- und Extension-Bibliothek speziell für Stable Diffusion möchte.** Die WebUI von AUTOMATIC1111 hat die längste Geschichte und das größte Volumen an speziell darauf zugeschnittenen Community-Tutorials und Drittanbieter-Erweiterungen, auch wenn ihr eigenes Kern-Entwicklungstempo Stand 2026 langsamer ist als das von ComfyUI oder InvokeAI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist InvokeAI kostenlos?',
            a: 'Ja. Die Open-Source-Community-Edition ist kostenlos herunterzuladen, selbst zu hosten und unter der Apache-2.0-Lizenz kommerziell zu nutzen, ohne Umsatzgrenze. Das Unternehmen, das zuvor eine kostenpflichtige, cloudgehostete Version verkaufte, Invoke, wurde im Oktober 2025 von Adobe übernommen und stellte diesen Dienst am 31. Oktober 2025 ein — derzeit gibt es keine InvokeAI-gebrandete kostenpflichtige Stufe.',
          },
          {
            q: 'Hat Adobe InvokeAI gekauft?',
            a: 'Adobe hat das Unternehmen Invoke übernommen, das eine kommerzielle gehostete Plattform auf Basis des Open-Source-Projekts InvokeAI aufgebaut hatte, im Oktober 2025 (angekündigt auf der Adobe MAX 2025). Invokes Gründerteam, einschließlich CEO Kent Keirsey, wechselte zu Adobes Firefly-Foundry-Gruppe. Der gehostete kommerzielle Dienst wurde am 31. Oktober 2025 eingestellt. Das Open-Source-Projekt InvokeAI selbst wurde nicht übernommen und wird von den unabhängigen Community-Maintainern Lincoln Stein und Vic (Blessedcoolant) weitergeführt.',
          },
          {
            q: 'Unter welcher Lizenz steht InvokeAI?',
            a: 'Die Software von InvokeAI steht unter der Apache-2.0-Lizenz, einer freizügigen Open-Source-Lizenz ohne Umsatzgrenze und ohne Copyleft-Pflicht für darauf aufbauenden Code. Das unterscheidet sich von ComfyUI (GPL-3.0) und AUTOMATIC1111s Stable Diffusion WebUI (AGPL-3.0), die beide strengere Copyleft-Bedingungen für abgeleitete oder vernetzte Nutzung haben. Dies ist eine Zusammenfassung, keine Rechtsberatung — lesen Sie die Lizenzdatei auf GitHub, bevor Sie eine kommerzielle Einsatzentscheidung treffen.',
          },
          {
            q: 'Was ist die Unified Canvas von InvokeAI?',
            a: 'Die Unified Canvas ist der zentrale Arbeitsbereich von InvokeAI, in dem jede Generierung, jedes Inpainting oder Outpainting zu einer persistenten, bearbeitbaren Ebene wird statt zu einem wegwerfbaren Einmal-Ergebnis. Leser können mit einem Pinsel-Werkzeug einen Bereich maskieren, genau diesen neu generieren und im Zeitverlauf Ebenen übereinanderlegen — näher an der Arbeit in einem ebenenbasierten Bildeditor als an einer einzelnen Generieren-und-Verwerfen-Prompt-Box.',
          },
          {
            q: 'Welche Modelle unterstützt InvokeAI?',
            a: 'Laut aktueller Dokumentation unterstützt InvokeAI Stable Diffusion 1.5, 2.0, SDXL und 3.5 (Medium und Large), mehrere FLUX-Varianten (dev, schnell, Kontext, Krea, Redux, Fill und FLUX.2 Klein) sowie neuere Modelle wie CogView4 und Qwen-Image, in den Formaten `.ckpt`, `diffusers` und teilweise `.gguf`. Diese Liste wird häufig aktualisiert — prüfen Sie das [InvokeAI-GitHub-Repository](https://github.com/invoke-ai/InvokeAI) auf die aktuelle Liste unterstützter Modelle, bevor Sie Unterstützung für ein bestimmtes neues Release voraussetzen.',
          },
          {
            q: 'Wie viel VRAM benötigt InvokeAI?',
            a: 'Das hängt vom Modell ab: Stable Diffusion 1.5 benötigt nur 4 GB VRAM und 8 GB System-RAM, SDXL will 8 GB VRAM und 16 GB RAM, FLUX.1 will etwa 10 GB VRAM und 32 GB RAM, und die größere FLUX.2-Klein-Variante (9B) will rund 24 GB VRAM und 32 GB RAM. Dies sind Mindestwerte aus InvokeAIs eigener Dokumentation, die sich mit neuen Modellvarianten ändern können.',
          },
          {
            q: 'Ist InvokeAI besser als ComfyUI oder AUTOMATIC1111?',
            a: 'Das hängt davon ab, was Ihnen wichtig ist. ComfyUI wird häufig dafür genannt, Unterstützung für ganz neue offene Modell-Releases am schnellsten hinzuzufügen, und bietet die granularste Node-Level-Kontrolle; AUTOMATIC1111s WebUI hat das größte Volumen an speziell für Stable Diffusion gebauten Community-Tutorials und Erweiterungen, auch wenn deren eigene Kernentwicklung Stand 2026 im Vergleich zu den beiden anderen langsamer geworden ist. Der Vorteil von InvokeAI ist die Unified Canvas: persistente, nicht-destruktive Ebenen, die iteratives Bearbeiten eher wie ein digitales Mal-Tool wirken lassen, plus die freizügigste Lizenz (Apache-2.0) der drei.',
          },
          {
            q: 'Wo lade ich InvokeAI herunter?',
            a: 'Die offizielle Quelle ist das [invoke-ai/InvokeAI-GitHub-Repository](https://github.com/invoke-ai/InvokeAI), und der empfohlene Installationsweg ist der Launcher, beschrieben in [invoke.ais Installationsanleitung](https://invoke.ai/start-here/installation/), der die Python-Umgebungseinrichtung für Windows, macOS und Linux automatisch übernimmt.',
          },
          {
            q: 'Was ist mit Invokes kostenpflichtigen Abo-Plänen passiert?',
            a: 'Sie wurden eingestellt. Invoke, das Unternehmen, das neben der kostenlosen Open-Source-Software kostenpflichtige, cloudgehostete Abo-Stufen verkaufte, wurde im Oktober 2025 von Adobe übernommen, und dessen gehosteter kommerzieller Dienst stellte den Betrieb am 31. Oktober 2025 ein. Ältere Artikel oder zwischengespeicherte Preisseiten, die "Starter-", "Indie-", "Professional-" oder "Enterprise"-Pläne beschreiben, beschreiben Stand 2026 einen Dienst, den es nicht mehr gibt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'InvokeAI hat sich seinen Ruf als das studioorientierteste der gängigen Stable-Diffusion-Interfaces verdient, aufgebaut um eine wirklich unverwechselbare Unified Canvas mit persistenten, nicht-destruktiven Ebenen, die sich für Leser lohnt, die iteratives, künstlerisches Compositing statt Einmal-Prompt-Generierung betreiben. Die Apache-2.0-Lizenz ist die freizügigste der großen Optionen, und Self-Hosting bleibt vollständig kostenlos ohne Umsatzgrenze — eine Tatsache, die es klar zu benennen lohnt angesichts der Menge veralteter Preisinformationen zu "Invoke-Abo-Plänen", die noch immer kursiert, nachdem das Unternehmen hinter dem kommerziellen gehosteten Dienst im Oktober 2025 von Adobe übernommen und dieser Dienst eingestellt wurde. Das Open-Source-Projekt selbst war nicht Teil dieses Deals und wird von namentlich genannten Community-Maintainern mit aktiver Entwicklung weitergeführt. Der ehrliche Kompromiss: ComfyUI wird häufig dafür genannt, ganz neue Modell-Releases schneller zu unterstützen, und AUTOMATIC1111 trägt weiterhin das größte Volumen an speziell dafür gebauten Community-Tutorials und Erweiterungen. Für Leser, die eine ausgereifte, ebenenbasierte Canvas und eine freizügige Lizenz ohne Einschränkungen möchten, bleibt InvokeAI eine vernünftige und derzeit kostenlose Wahl.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[invoke-ai/InvokeAI auf GitHub](https://github.com/invoke-ai/InvokeAI) — offizieller Quellcode, Lizenzdatei, aktueller Modell-Support und Release Notes.',
          '[InvokeAI — offizielle Dokumentation](https://invoke.ai/) — Installationsanleitungen, Systemanforderungen und Funktionsdokumentation.',
          '[InvokeAI Systemanforderungen](https://invoke.ai/start-here/system-requirements/) — offizielle VRAM-, RAM-, GPU- und Betriebssystem-Anforderungen je Modell.',
          '[Apache License 2.0 — InvokeAI LICENSE-Datei auf GitHub](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) — vollständiger Rechtstext der Software-Lizenz von InvokeAI.',
          '[Adobe Newsroom — Ankündigung Adobe Firefly Foundry](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry) — offizielle Adobe-Ankündigung zum Wechsel des Invoke-Teams zu Adobe.',
          '[ComfyUI LICENSE auf GitHub](https://github.com/comfy-org/ComfyUI/blob/master/LICENSE) — GPL-3.0-Lizenztext zum Vergleich.',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE auf GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — AGPL-3.0-Lizenztext zum Vergleich.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Stable Diffusion Test (2026)](/power-local-llm/stable-diffusion-review) — die zugrunde liegende offene Modellfamilie, die InvokeAI, ComfyUI und AUTOMATIC1111 alle ausführen.',
          '[Lokale KI-Bildgenerierung vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) — Vergleich lokaler Bild-Tools mit Cloud-Diensten wie Midjourney und Adobe Firefly.',
          '[Local LLM Software-Verzeichnis 2026](/power-local-llm/local-llm-software-directory) — umfassendes App- und Tool-Verzeichnis für alle Plattformen.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/invokeai-review-hero-es.webp',
    title: 'Análisis de InvokeAI (2026): Estudio Profesional de Stable Diffusion',
    seoTitle: 'InvokeAI 2026: Lienzo Unificado, Capas y Guía de Precios',
    intro:
      'InvokeAI es una interfaz gratuita, de código abierto y autoalojada para ejecutar modelos de Stable Diffusion y FLUX en tu propia GPU, construida alrededor de un lienzo unificado con edición no destructiva basada en capas, en lugar de un grafo de nodos o una interfaz simple de pestañas. Lo mantiene una comunidad de código abierto bajo licencia Apache-2.0, después de que la empresa que originalmente lo creó, Invoke, fuera adquirida por Adobe en octubre de 2025 y su servicio comercial alojado dejara de operar. Este análisis cubre qué es realmente InvokeAI, su licencia y coste reales (actualmente no existe ningún plan de pago), los requisitos de hardware, los modelos compatibles y cómo se compara con ComfyUI, AUTOMATIC1111, Fooocus y SwarmUI.',
    metaDescription:
      'InvokeAI 2026: estudio gratuito con licencia Apache-2.0 y lienzo unificado para Stable Diffusion/FLUX. Incluye la adquisición de Invoke por Adobe, modelos compatibles, requisitos de VRAM y comparación honesta con ComfyUI y AUTOMATIC1111.',
    twitterDescription:
      'InvokeAI 2026: el estudio de lienzo unificado para Stable Diffusion, totalmente gratuito y de código abierto (Apache-2.0) tras la adquisición de Invoke por Adobe en octubre de 2025. Licencia, requisitos de hardware y comparación con ComfyUI y A1111.',
    audience:
      'Lectores que deciden si autoalojar InvokeAI para generación de imágenes local basada en capas — cubre términos de licencia, la adquisición por Adobe en 2025 y su efecto en los precios, requisitos de hardware y comparación con ComfyUI, AUTOMATIC1111 y Fooocus.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'InvokeAI review',
    targetKeywords: [
      'invokeai análisis',
      'invokeai vs comfyui',
      'invokeai precio',
      'invokeai lienzo unificado',
      'invokeai licencia',
      'invokeai requisitos del sistema',
      'invokeai vs automatic1111',
      'invokeai es gratis',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion 2.0', 'Stable Diffusion XL', 'Stable Diffusion 3.5 Medium', 'Stable Diffusion 3.5 Large', 'FLUX.1 dev', 'FLUX.1 schnell', 'FLUX.1 Kontext', 'FLUX.2 Klein', 'CogView4', 'Qwen-Image'],
    current_hardware_mentioned: ['4 GB VRAM', '8 GB VRAM', '10 GB VRAM', '12 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 3060', 'Apple Silicon M1', 'Intel Arc'],
    leadAnswerBlock:
      '**InvokeAI es una interfaz gratuita, de código abierto y autoalojada para Stable Diffusion y FLUX, construida alrededor de un lienzo unificado con capas persistentes y no destructivas — distinta del grafo de nodos de ComfyUI y de la interfaz de pestañas de AUTOMATIC1111.** Tiene licencia Apache-2.0 sin límite de ingresos, por lo que autoalojarlo no cuesta nada más allá de tu propio hardware. La empresa que originalmente lo comercializó, Invoke, fue adquirida por Adobe en octubre de 2025; su servicio de suscripción en la nube dejó de operar el 31 de octubre de 2025, y actualmente no existe ningún plan de pago activo — el proyecto de código abierto continúa de forma independiente bajo la comunidad. Los requisitos de hardware van desde 4 GB de VRAM para SD 1.5 hasta 24 GB de VRAM para la variante FLUX.2 Klein más grande — comprueba los requisitos actuales en [invoke.ai](https://invoke.ai/start-here/system-requirements/) antes de comprar hardware.',
    quickAnswerTop: {
      es: {
        question: '¿Es InvokeAI gratis y tiene algún plan de pago?',
        answer:
          'InvokeAI es totalmente gratuito y de código abierto bajo la licencia Apache-2.0, sin límite de ingresos para uso comercial. La empresa detrás, Invoke, fue adquirida por Adobe en octubre de 2025 y cerró su servicio de suscripción en la nube el 31 de octubre de 2025 — a partir de 2026 no existe ningún plan de pago activo; solo queda la Community Edition gratuita y autoalojada.',
        bullets: [
          'Licencia Apache-2.0, autoalojado, sin umbral de ingresos para uso comercial.',
          'Invoke (la empresa) fue adquirida por Adobe en octubre de 2025; el servicio en la nube terminó el 31 de octubre de 2025.',
          'Compatible con SD 1.5, SDXL, SD 3.5 y varias variantes de FLUX en una sola interfaz.',
          'Lienzo unificado con capas persistentes para inpainting/outpainting no destructivo.',
          'Hardware mínimo: 4 GB de VRAM para SD 1.5, hasta 24 GB de VRAM para los modelos FLUX.2 más grandes.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es InvokeAI', anchor: 'what-is-invokeai' },
      { label: 'La adquisición de Adobe, explicada', anchor: 'adobe-acquisition' },
      { label: 'Lienzo unificado y capas', anchor: 'unified-canvas' },
      { label: 'Modelos compatibles', anchor: 'model-support' },
      { label: 'Cómo instalar InvokeAI', anchor: 'how-to-install' },
      { label: 'Licencia y coste', anchor: 'license-and-cost' },
      { label: 'Requisitos de hardware', anchor: 'hardware-requirements' },
      { label: 'InvokeAI vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'A quién le conviene InvokeAI', anchor: 'who-should-use' },
      { label: 'A quién no le conviene InvokeAI', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumen',
        isTldr: true,
        items: [
          'InvokeAI es una interfaz gratuita y de código abierto para ejecutar localmente modelos de Stable Diffusion y FLUX, construida alrededor de un lienzo unificado con edición persistente, basada en capas y no destructiva.',
          'Tiene licencia Apache-2.0 — sin límite de ingresos, sin obligaciones de copyleft para código derivado; autoalojarlo no cuesta nada más allá del propio hardware.',
          'La empresa detrás de InvokeAI, Invoke, fue adquirida por Adobe en octubre de 2025; su servicio comercial alojado dejó de operar el 31 de octubre de 2025. Actualmente no existe ningún plan de pago activo.',
          'El proyecto de código abierto continúa de forma independiente bajo la comunidad, liderado por los mantenedores de larga data Lincoln Stein ([lstein](https://github.com/lstein)) y Vic ([Blessedcoolant](https://github.com/blessedcoolant)).',
          'Es compatible con SD 1.5, SD 2.0, SDXL, SD 3.5 y varias variantes de FLUX en una sola interfaz, además de modelos más recientes como CogView4 y Qwen-Image — comprueba la compatibilidad actual en [GitHub](https://github.com/invoke-ai/InvokeAI) antes de depender de un modelo concreto.',
          'Los requisitos de hardware escalan según el modelo: 4 GB de VRAM cubren SD 1.5, SDXL necesita 8 GB, y las variantes FLUX más grandes necesitan entre 10 y 24 GB según el modelo.',
        ],
      },
      whatIsInvokeAI: {
        id: 'what-is-invokeai',
        title: 'Qué es InvokeAI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI es una interfaz gratuita y de código abierto para ejecutar modelos de imagen Stable Diffusion y FLUX en tu propia GPU, construida alrededor de un lienzo unificado con capas persistentes y no destructivas en lugar de un grafo de nodos o una interfaz simple de pestañas.' },
          { type: 'plain-terms', text: 'Imagínalo como un estudio de pintura digital para imágenes de IA — cada generación se convierte en una capa que puedes revisar, enmascarar y regenerar, en lugar de un resultado único que solo puedes conservar o descartar.' },
        ],
        content: [
          'InvokeAI es una aplicación de interfaz que carga los pesos de los modelos Stable Diffusion y FLUX y ejecuta la inferencia en tu propio hardware. Al igual que la WebUI de AUTOMATIC1111, ComfyUI y Fooocus, no incluye los pesos del modelo en sí — estos provienen de Stability AI, Black Forest Labs y otros editores de modelos, y se descargan por separado (consulta el [Análisis de Stable Diffusion](/power-local-llm/stable-diffusion-review) para conocer la familia de modelos subyacente y sus propios términos de licencia).',
          'Lo que distingue a InvokeAI es su lienzo unificado: un único espacio de trabajo donde cada generación, inpainting u outpainting se convierte en una capa persistente en lugar de un resultado desechable. Las capas se pueden revisar, volver a enmascarar y regenerar más tarde, por lo que una imagen se trata más como una composición en curso que como un renderizado de una sola vez. Este diseño está pensado para flujos de trabajo profesionales de estilo estudio, más cercano a cómo trabaja un artista digital en un editor de imágenes por capas que a una herramienta de escribir un prompt y listo.',
          'El proyecto comenzó en agosto de 2022 como una de las primeras bifurcaciones comunitarias de la implementación de referencia de CompVis de Stable Diffusion, mantenida inicialmente por Lincoln Stein bajo el nombre de repositorio `lstein/stable-diffusion` antes de renombrarse a InvokeAI. Más tarde se formó una empresa llamada Invoke en torno al proyecto para construir una versión comercial alojada sobre ese mismo núcleo de código abierto — la historia de esa empresa se cubre en la siguiente sección, ya que cambió sustancialmente en 2025.',
        ],
      },
      adobeAcquisition: {
        id: 'adobe-acquisition',
        title: 'La adquisición de Adobe, explicada',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Adobe adquirió la empresa Invoke en octubre de 2025; su equipo fundador se unió al grupo Firefly Foundry de Adobe, el servicio comercial alojado dejó de operar el 31 de octubre de 2025, y el proyecto de código abierto InvokeAI continúa de forma independiente bajo mantenedores de la comunidad.' },
          { type: 'plain-terms', text: 'La empresa que antes vendía una versión de pago alojada en la nube de InvokeAI ya no existe como negocio independiente — su equipo ahora trabaja en Adobe —, pero el software gratuito que puedes descargar y ejecutar tú mismo no formó parte de ese acuerdo y sigue en marcha.' },
        ],
        content: [
          'Este es el dato más importante sobre InvokeAI en 2026, y es fácil encontrar información desactualizada que lo describe mal. Adobe anunció en Adobe MAX 2025 (20-21 de octubre de 2025) que había adquirido Invoke, la empresa detrás de la versión comercial alojada en la nube de InvokeAI, y que su equipo — incluido el CEO Kent Keirsey — se había unido a la nueva iniciativa "Firefly Foundry" de Adobe, que ayuda a las empresas a construir modelos generativos personalizados sobre la base de Firefly de Adobe.',
          'La plataforma comercial alojada de Invoke, que antes vendía niveles de suscripción para generación en la nube y funciones de colaboración en equipo, dejó de operar el 31 de octubre de 2025. Si encuentras un artículo antiguo, una tabla comparativa o una página de precios en caché que describa planes de suscripción de InvokeAI "Starter", "Indie", "Professional" o "Enterprise", eso describe un servicio que ya no existe — no planifiques tu presupuesto con esas cifras.',
          'El proyecto de código abierto InvokeAI en sí no se cerró. La responsabilidad pasó a Lincoln Stein ([lstein](https://github.com/lstein)) y Vic ([Blessedcoolant](https://github.com/blessedcoolant)), mantenedores principales de larga data implicados desde los primeros días del proyecto, y el desarrollo ha continuado de forma independiente de Adobe bajo la organización de GitHub [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI). Este análisis cubre ese proyecto de código abierto gratuito y autoalojado que sigue activo — no el servicio comercial descontinuado.',
        ],
        note: 'Los datos de esta sección proceden del propio anuncio de Adobe de octubre de 2025 y de múltiples informes independientes de prensa tecnológica; consulta directamente [github.com/invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) para conocer la lista actual de mantenedores y el estado del proyecto antes de confiar en cualquier resumen de terceros, incluido este.',
      },
      unifiedCanvas: {
        id: 'unified-canvas',
        title: 'Lienzo unificado y capas',
        itemHeadings: true,
        columns: ['Capacidad', 'Qué hace'],
        rows: [
          { 'Capacidad': 'Capas persistentes', 'Qué hace': 'Cada generación, inpainting u outpainting se convierte en su propia capa que sigue siendo editable tras cerrar y reabrir el proyecto' },
          { 'Capacidad': 'Enmascarado con pincel', 'Qué hace': 'Pinta una máscara directamente sobre el lienzo para controlar exactamente qué región se regenera, en lugar de usar un editor de máscaras aparte' },
          { 'Capacidad': 'Inpainting / outpainting', 'Qué hace': 'Regenera una región enmascarada en su sitio, o extiende el lienzo más allá de los bordes originales de la imagen, sin iniciar un nuevo proyecto' },
          { 'Capacidad': 'Integración con ControlNet', 'Qué hace': 'Guía la composición y la pose usando modelos ControlNet directamente dentro del mismo espacio de trabajo del lienzo' },
          { 'Capacidad': 'Editor de flujo de trabajo por nodos', 'Qué hace': 'Un grafo de nodos aparte y opcional para pipelines avanzados o repetibles, para lectores que quieran ese nivel de control además del lienzo' },
          { 'Capacidad': 'Gestión de tableros y galería', 'Qué hace': 'Organiza las generaciones en tableros con metadatos conservados, para que el prompt y los ajustes queden asociados a la imagen que los produjo' },
        ],
        content: [
          'El lienzo unificado es lo que la mayoría de reseñadores y usuarios señalan como la característica definitoria de InvokeAI frente a AUTOMATIC1111 y ComfyUI. En lugar de generar una imagen a la vez y volver a importarla manualmente para seguir editando, InvokeAI trata el lienzo como un único espacio de trabajo continuo: puedes enmascarar una región, regenerarla, añadir una nueva capa encima y moverte entre esos estados sin salir del lienzo ni perder versiones anteriores.',
          'Esto se parece de verdad más a cómo trabaja un artista digital profesional en un editor de imágenes por capas que al bucle basado en pestañas de "generar, revisar, regenerar" de la WebUI de AUTOMATIC1111, o al enfoque de grafo de nodos primero de ComfyUI, donde componer un pipeline de edición requiere conectar nodos antes de ver una sola imagen. InvokeAI también incluye su propio editor de flujo de trabajo por nodos opcional para lectores que quieran ese nivel de control, por lo que el lienzo y el grafo de nodos se complementan en lugar de excluirse dentro de la misma aplicación.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Modelos compatibles',
        content: [
          '**InvokeAI es compatible con una amplia y creciente gama de modelos abiertos de imagen y vídeo en una sola interfaz, en lugar de estar construido en torno a una familia de modelos específica.** Según su documentación actual, los checkpoints y formatos compatibles incluyen Stable Diffusion 1.5, Stable Diffusion 2.0, SDXL, Stable Diffusion 3.5 (Medium y Large), varias variantes de FLUX (dev, schnell, Kontext, Krea, Redux, Fill y el más reciente FLUX.2 Klein), además de CogView4 y Qwen-Image. También carga modelos en formatos `.ckpt`, `diffusers` y algunos `.gguf` cuantizados.',
          'Esta lista cambia con frecuencia a medida que se publican nuevos modelos abiertos, así que trátala como una instantánea y no como un inventario permanente — comprueba las notas actuales de compatibilidad de modelos en el [repositorio de GitHub de InvokeAI](https://github.com/invoke-ai/InvokeAI) o sus notas de versión antes de asumir compatibilidad con un modelo nuevo concreto el día de su lanzamiento.',
          'Una advertencia honesta, tratada con más detalle en la sección "A quién no le conviene InvokeAI" más abajo: los mantenedores de InvokeAI priorizan integrar los modelos de forma limpia en el flujo de trabajo del lienzo unificado y el editor de nodos, lo que tiende a llevar más tiempo que añadir soporte básico por línea de comandos. Se suele señalar que ComfyUI añade compatibilidad con grandes lanzamientos de modelos abiertos el mismo día en que salen (el llamado soporte "día cero"); InvokeAI no se ha ganado esa misma reputación de cobertura inmediata el día del lanzamiento a fecha de 2026.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Cómo instalar InvokeAI',
        content: [
          'Instalar InvokeAI sigue el mismo esquema básico en todos los sistemas operativos compatibles, usando el instalador oficial en lugar de una configuración manual del entorno.',
        ],
        numberedItems: [
          { title: 'Comprueba tu GPU y sistema operativo frente a los requisitos', whyItMatters: 'InvokeAI funciona en Windows 10+, macOS 14+ y Linux (Ubuntu 20.04+ bien probado); confirma que tu GPU y VRAM cumplen los requisitos del modelo que planeas usar antes de instalar.' },
          { title: 'Descarga el instalador (Launcher) de InvokeAI', whyItMatters: 'El instalador, disponible en la [guía de instalación oficial](https://invoke.ai/start-here/installation/) y en los lanzamientos de GitHub, gestiona automáticamente el entorno de Python y las dependencias, sin necesidad de una instalación manual de entorno virtual.' },
          { title: 'Instala y abre la aplicación', whyItMatters: 'El instalador configura el backend de InvokeAI y abre la interfaz web en el navegador — no se necesita configurar un servidor web aparte para uso local.' },
          { title: 'Descarga o selecciona un modelo', whyItMatters: 'Elige un modelo inicial (por ejemplo, un checkpoint de SD 1.5 o SDXL) a través del gestor de modelos integrado, o indica a InvokeAI un archivo de modelo que ya hayas descargado de Hugging Face o Civitai.' },
          { title: 'Abre el lienzo unificado y genera', whyItMatters: 'Escribe un prompt, ajusta resolución y pasos, y genera directamente en el lienzo — la primera generación suele ser más lenta mientras el modelo se carga en la VRAM.' },
          { title: 'Añade ControlNet, LoRAs o el editor de nodos si lo necesitas', whyItMatters: 'Son capas opcionales sobre el flujo de trabajo base — la mayoría de lectores puede ignorarlas en sus primeros proyectos y añadirlas cuando se sientan cómodos con el lienzo.' },
        ],
        note: 'Los pasos de instalación exactos y los requisitos de paquetes del sistema (por ejemplo, Python 3.11-3.12, controladores de GPU) pueden cambiar entre versiones — sigue la [guía de instalación actual de invoke.ai](https://invoke.ai/start-here/installation/) en lugar de un tutorial genérico, incluido este, para la sintaxis exacta de los comandos.',
      },
      licenseAndCost: {
        id: 'license-and-cost',
        title: 'Licencia y coste',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'La Community Edition de código abierto de InvokeAI tiene licencia Apache-2.0 sin límite de ingresos y es totalmente gratuita para autoalojar; los antiguos niveles de pago en la nube de la empresa se descontinuaron cuando Adobe adquirió Invoke en octubre de 2025.' },
          { type: 'plain-terms', text: 'Hoy solo existe una versión de InvokeAI que realmente puedes conseguir — la gratuita, que ejecutas tú mismo — porque el servicio de pago en la nube que antes existía en paralelo se ha cerrado.' },
        ],
        columns: ['Qué', 'Estado', 'Coste'],
        rows: [
          { 'Qué': 'Community Edition de código abierto (autoalojada)', 'Estado': 'Mantenida activamente por la comunidad', 'Coste': 'Gratis — Apache-2.0, sin límite de ingresos' },
          { 'Qué': 'Suscripción en la nube de Invoke (Starter/Indie/Professional/Enterprise)', 'Estado': 'Descontinuada — el servicio terminó el 31-10-2025', 'Coste': 'No aplica — ya no está disponible' },
          { 'Qué': 'Adobe Firefly Foundry (trabajo actual del equipo adquirido)', 'Estado': 'Una línea de producto de Adobe distinta, no una continuación de InvokeAI', 'Coste': 'Fijado por Adobe — fuera del alcance de este análisis' },
        ],
        content: [
          'La licencia del software de InvokeAI es Apache-2.0, una de las licencias de código abierto más permisivas disponibles: permite uso comercial, modificación y redistribución sin umbral de ingresos y sin obligación de copyleft de abrir el código propio construido encima. Es una licencia notablemente más permisiva que la de ComfyUI (GPL-3.0) o la WebUI de Stable Diffusion de AUTOMATIC1111 (AGPL-3.0), ambas con obligaciones de copyleft más estrictas para uso derivado o en red — una diferencia real y verificable, no una afirmación de marketing.',
          'Como autoalojar InvokeAI es gratis bajo esa licencia, el único coste continuo es tu propio hardware y la electricidad — la misma estructura de costes que cualquier otra interfaz autoalojada de Stable Diffusion o FLUX. No hay ninguna cuota de suscripción rastreada por PromptQuorum, y a fecha de este análisis no existe ningún nivel de pago oficial de marca Invoke con el que compararlo, ya que la empresa que vendía uno ya no lo opera. Si esto cambia bajo una nueva gestión, comprueba las condiciones actuales directamente en [invoke.ai](https://invoke.ai) y en el [repositorio de GitHub](https://github.com/invoke-ai/InvokeAI) antes de asumir que este desglose de costes sigue siendo válido.',
        ],
        note: 'La información de licencia y coste refleja el texto de la licencia Apache-2.0 en [github.com/invoke-ai/InvokeAI/blob/main/LICENSE](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) y la información pública sobre la adquisición por Adobe en octubre de 2025, actualizada a 06-09-2026. Esto no es asesoramiento legal — lee tú mismo el archivo de licencia antes de tomar una decisión de despliegue comercial.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Requisitos de hardware',
        itemHeadings: true,
        columns: ['Modelo', 'VRAM mínima', 'RAM mínima del sistema'],
        rows: [
          { 'Modelo': 'Stable Diffusion 1.5', 'VRAM mínima': '4 GB de VRAM', 'RAM mínima del sistema': '8 GB de RAM' },
          { 'Modelo': 'SDXL', 'VRAM mínima': '8 GB de VRAM', 'RAM mínima del sistema': '16 GB de RAM' },
          { 'Modelo': 'FLUX.1', 'VRAM mínima': '10 GB de VRAM', 'RAM mínima del sistema': '32 GB de RAM' },
          { 'Modelo': 'FLUX.2 Klein (4B)', 'VRAM mínima': '12 GB de VRAM', 'RAM mínima del sistema': '16 GB de RAM' },
          { 'Modelo': 'FLUX.2 Klein (9B)', 'VRAM mínima': '24 GB de VRAM', 'RAM mínima del sistema': '32 GB de RAM' },
        ],
        content: [
          'InvokeAI funciona en Windows 10+, macOS 14+ y Linux, con Ubuntu 20.04+ señalado específicamente como bien probado. Las GPU NVIDIA desde la serie GTX 10 en adelante son compatibles en Windows y Linux; las GPU AMD solo son compatibles en Linux; las GPU Intel Arc (Alchemist, Battlemage y más recientes) son compatibles en Windows y Linux x86_64. Los Mac con Apple Silicon (M1 y posteriores) funcionan, recomendándose 16 GB o más de memoria unificada para un uso cómodo. La generación solo con CPU es posible en dispositivos Linux ARM64, pero es lenta sin GPU.',
          'InvokeAI requiere Python 3.11 o 3.12 para funcionar fuera del instalador incluido. El instalador oficial gestiona esta dependencia automáticamente para la mayoría de lectores, por lo que gestionar manualmente un entorno de Python es opcional, no obligatorio, en instalaciones típicas.',
        ],
        note: 'Las cifras de VRAM y RAM son mínimos extraídos de la [página de requisitos del sistema de invoke.ai](https://invoke.ai/start-here/system-requirements/) y pueden cambiar con nuevas variantes de modelos — trátalas como orientación de planificación y confirma las cifras actuales antes de comprar hardware para un modelo concreto.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'InvokeAI vs. alternativas',
        columns: ['Opción', 'Mejor para', 'Estilo de interfaz', 'Licencia', 'Compromiso clave'],
        rows: [
          {
            'Opción': 'InvokeAI',
            'Mejor para': 'Composición no destructiva basada en capas con una interfaz de estilo estudio pulida',
            'Estilo de interfaz': 'Lienzo unificado + editor de nodos opcional',
            'Licencia': 'Apache-2.0, sin límite de ingresos',
            'Compromiso clave': 'Generalmente más lento que ComfyUI en añadir soporte para modelos totalmente nuevos',
          },
          {
            'Opción': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Mejor para': 'Máximo control y soporte más rápido para lanzamientos de modelos totalmente nuevos',
            'Estilo de interfaz': 'Grafo de nodos, todo conectado manualmente',
            'Licencia': 'GPL-3.0',
            'Compromiso clave': 'Curva de aprendizaje más pronunciada de las opciones habituales; sin lienzo unificado integrado',
          },
          {
            'Opción': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Mejor para': 'El mayor ecosistema de extensiones y tutoriales de comunidad específicamente para Stable Diffusion',
            'Estilo de interfaz': 'Interfaz web basada en pestañas',
            'Licencia': 'AGPL-3.0',
            'Compromiso clave': 'Ritmo de desarrollo central más lento que ComfyUI e InvokeAI a fecha de 2026; sin lienzo de capas persistente',
          },
          {
            'Opción': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Mejor para': 'El menor número de clics hasta una primera buena imagen, configuración mínima',
            'Estilo de interfaz': 'Interfaz simplificada de una sola ventana, con criterio fijo',
            'Licencia': 'GPL-3.0',
            'Compromiso clave': 'Según su propio README, en modo de soporte a largo plazo limitado (solo correcciones de errores), solo SDXL, sin planes para arquitecturas más nuevas',
          },
          {
            'Opción': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)',
            'Mejor para': 'Orquestación multi-GPU y multi-backend (puede usar ComfyUI como backend)',
            'Estilo de interfaz': 'Interfaz web modular sobre backends intercambiables',
            'Licencia': 'MIT',
            'Compromiso clave': 'Base de usuarios más pequeña que las otras cuatro opciones; antes "StableSwarmUI" de Stability AI antes de una bifurcación independiente en 2024',
          },
        ],
        note: 'Este es un resumen de posicionamiento basado en la documentación y los archivos de licencia propios de cada proyecto a fecha de 06-09-2026, no una prueba práctica. Consulta [Generación local de imágenes con IA frente a la nube](/power-local-llm/local-ai-image-generation-vs-cloud) para ver cómo se comparan estas opciones locales con herramientas en la nube como Midjourney y Adobe Firefly, y [Análisis de Stable Diffusion](/power-local-llm/stable-diffusion-review) para la familia de modelos subyacente que ejecutan todas estas interfaces.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'A quién le conviene InvokeAI',
        items: [
          '**Lector que quiere un flujo de edición no destructivo basado en capas.** El lienzo unificado se basa en capas persistentes que puedes revisar y volver a enmascarar, más cerca de un estudio de pintura digital que de un bucle de generar y descartar de una sola vez.',
          '**Lector que quiere una interfaz pulida sin construir un grafo de nodos desde cero.** El lienzo de InvokeAI es utilizable sin conectar nada, aunque el editor de nodos sigue disponible para lectores que lo quieran.',
          '**Lector o pequeño estudio que quiere la licencia de código abierto más permisiva.** Apache-2.0 no tiene límite de ingresos ni obligación de copyleft para código construido encima, una diferencia real frente a las licencias de la familia GPL de ComfyUI y AUTOMATIC1111 para equipos que desarrollan herramientas propietarias alrededor del modelo.',
          '**Lector que quiere control local total y privacidad.** Una vez instalado, la generación se ejecuta enteramente en tu propia GPU — ninguna imagen ni prompt sale de tu máquina.',
          '**Lector que quiere un proyecto mantenido con una gobernanza clara.** La adquisición de la empresa comercial por parte de Adobe en 2025 no detuvo el proyecto de código abierto; continúa bajo mantenedores de la comunidad identificados y de larga trayectoria.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'A quién no le conviene InvokeAI',
        items: [
          '**Lector que quiere el modelo o nodo experimental más nuevo el mismo día de su lanzamiento.** Se suele señalar que ComfyUI añade soporte para grandes lanzamientos de modelos abiertos el mismo día de su salida; el enfoque de integración centrado en el lienzo de InvokeAI no se ha ganado esa misma reputación de cobertura inmediata el día del lanzamiento.',
          '**Lector que quiere específicamente un flujo de trabajo solo de grafo de nodos, sin lienzo.** InvokeAI incluye un editor de nodos, pero su característica definitoria es el lienzo unificado — los lectores que solo quieran construir pipelines basados en nodos pueden preferir el diseño centrado en nodos de ComfyUI.',
          '**Lector que dependía de la suscripción de pago en la nube de Invoke para colaboración en equipo o acceso a GPU alojada.** Ese servicio se descontinuó el 31 de octubre de 2025; actualmente no hay ningún sustituto de pago con marca InvokeAI, así que evalúa otras herramientas alojadas o de colaboración en equipo si esa era la característica decisiva.',
          '**Lector con muy poca VRAM que quiere específicamente ejecutar modelos de clase FLUX.** FLUX.1 pide al menos unos 10 GB de VRAM y 32 GB de RAM del sistema según los propios requisitos publicados por InvokeAI; los lectores con tarjetas de 4-6 GB deberían planificar en torno a SD 1.5, o usar una alternativa en la nube.',
          '**Lector que quiere la mayor biblioteca de tutoriales y extensiones de la comunidad específicamente para Stable Diffusion.** La WebUI de AUTOMATIC1111 tiene la historia más larga y el mayor volumen de tutoriales de comunidad y extensiones de terceros construidos específicamente en torno a ella, aunque su propio ritmo de desarrollo central sea más lento que el de ComfyUI o InvokeAI a fecha de 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis InvokeAI?',
            a: 'Sí. La Community Edition de código abierto es gratuita para descargar, autoalojar y usar comercialmente bajo la licencia Apache-2.0, sin límite de ingresos. La empresa que antes vendía una versión de pago alojada en la nube, Invoke, fue adquirida por Adobe en octubre de 2025 y cerró ese servicio el 31 de octubre de 2025 — actualmente no existe ningún nivel de pago con marca InvokeAI.',
          },
          {
            q: '¿Compró Adobe InvokeAI?',
            a: 'Adobe adquirió la empresa Invoke, que había construido una plataforma comercial alojada sobre el proyecto de código abierto InvokeAI, en octubre de 2025 (anunciado en Adobe MAX 2025). El equipo fundador de Invoke, incluido el CEO Kent Keirsey, se unió al grupo Firefly Foundry de Adobe. El servicio comercial alojado dejó de operar el 31 de octubre de 2025. El proyecto de código abierto InvokeAI en sí no fue adquirido y continúa bajo los mantenedores independientes de la comunidad Lincoln Stein y Vic (Blessedcoolant).',
          },
          {
            q: '¿Qué licencia usa InvokeAI?',
            a: 'El software de InvokeAI tiene licencia Apache-2.0, una licencia de código abierto permisiva sin límite de ingresos y sin obligación de copyleft para el código que construyas encima. Esto difiere de ComfyUI (GPL-3.0) y de la WebUI de Stable Diffusion de AUTOMATIC1111 (AGPL-3.0), ambas con condiciones de copyleft más estrictas para uso derivado o en red. Esto es un resumen, no asesoramiento legal — lee el archivo de licencia en GitHub antes de tomar una decisión de despliegue comercial.',
          },
          {
            q: '¿Qué es el lienzo unificado de InvokeAI?',
            a: 'El lienzo unificado es el espacio de trabajo central de InvokeAI, donde cada generación, inpainting u outpainting se convierte en una capa persistente y editable en lugar de un resultado desechable de un solo uso. Los lectores pueden enmascarar una región con una herramienta de pincel, regenerar solo esa zona y apilar capas con el tiempo, más cerca de trabajar en un editor de imágenes por capas que en un cuadro de prompt de generar y descartar.',
          },
          {
            q: '¿Qué modelos son compatibles con InvokeAI?',
            a: 'Según la documentación actual, InvokeAI es compatible con Stable Diffusion 1.5, 2.0, SDXL y 3.5 (Medium y Large), varias variantes de FLUX (dev, schnell, Kontext, Krea, Redux, Fill y FLUX.2 Klein), además de modelos más recientes como CogView4 y Qwen-Image, en formatos `.ckpt`, `diffusers` y algunos `.gguf`. Esta lista se actualiza con frecuencia — consulta el [repositorio de GitHub de InvokeAI](https://github.com/invoke-ai/InvokeAI) para la lista actual de modelos compatibles antes de asumir compatibilidad con un lanzamiento nuevo concreto.',
          },
          {
            q: '¿Cuánta VRAM necesita InvokeAI?',
            a: 'Depende del modelo: Stable Diffusion 1.5 necesita tan solo 4 GB de VRAM y 8 GB de RAM del sistema, SDXL pide 8 GB de VRAM y 16 GB de RAM, FLUX.1 pide unos 10 GB de VRAM y 32 GB de RAM, y la variante FLUX.2 Klein más grande (9B) pide alrededor de 24 GB de VRAM y 32 GB de RAM. Son mínimos publicados por la propia documentación de InvokeAI y pueden cambiar con nuevas variantes de modelos.',
          },
          {
            q: '¿Es InvokeAI mejor que ComfyUI o AUTOMATIC1111?',
            a: 'Depende de lo que valores. Se suele señalar que ComfyUI añade soporte para lanzamientos de modelos abiertos totalmente nuevos más rápido y ofrece el control más granular a nivel de nodo; la WebUI de AUTOMATIC1111 tiene el mayor volumen de tutoriales y extensiones de comunidad construidos específicamente para Stable Diffusion, aunque su propio desarrollo central se haya ralentizado respecto a los otros dos a fecha de 2026. La ventaja de InvokeAI es su lienzo unificado: capas persistentes y no destructivas que hacen que la edición iterativa se sienta más como una herramienta de pintura digital, además de la licencia más permisiva (Apache-2.0) de los tres.',
          },
          {
            q: '¿Dónde se descarga InvokeAI?',
            a: 'La fuente oficial es el [repositorio de GitHub invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI), y la vía de instalación recomendada es el instalador descrito en la [guía de instalación de invoke.ai](https://invoke.ai/start-here/installation/), que gestiona automáticamente la configuración del entorno de Python en Windows, macOS y Linux.',
          },
          {
            q: '¿Qué pasó con los planes de suscripción de pago de Invoke?',
            a: 'Se descontinuaron. Invoke, la empresa que vendía niveles de suscripción de pago alojados en la nube junto al software gratuito de código abierto, fue adquirida por Adobe en octubre de 2025, y su servicio comercial alojado dejó de operar el 31 de octubre de 2025. Los artículos antiguos o las páginas de precios en caché que describen planes "Starter", "Indie", "Professional" o "Enterprise" describen, a fecha de 2026, un servicio que ya no existe.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'InvokeAI se ha ganado su reputación como la más orientada al estudio de las interfaces habituales de Stable Diffusion, construida alrededor de un lienzo unificado genuinamente distintivo con capas persistentes y no destructivas que recompensa a lectores que hacen composición iterativa de estilo artístico en lugar de generación de un solo prompt. Su licencia Apache-2.0 es la más permisiva de las opciones principales, y autoalojarla sigue siendo totalmente gratis y sin límite de ingresos — un dato que merece la pena decir con claridad dado lo mucha información de precios desactualizada sobre "los planes de suscripción de Invoke" que aún circula después de que la empresa detrás del servicio comercial alojado fuera adquirida por Adobe en octubre de 2025 y ese servicio se cerrara. El propio proyecto de código abierto no formó parte de ese acuerdo y continúa con desarrollo activo bajo mantenedores de la comunidad identificados. El compromiso honesto: se suele señalar que ComfyUI añade soporte para lanzamientos de modelos totalmente nuevos más rápido, y AUTOMATIC1111 sigue teniendo el mayor volumen de tutoriales y extensiones de comunidad construidos específicamente en torno a él. Para un lector que quiera un lienzo pulido basado en capas y una licencia permisiva sin condiciones, InvokeAI sigue siendo una opción razonable y actualmente gratuita.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[invoke-ai/InvokeAI en GitHub](https://github.com/invoke-ai/InvokeAI) — código fuente oficial, archivo de licencia, compatibilidad de modelos actual y notas de versión.',
          '[InvokeAI — documentación oficial](https://invoke.ai/) — guías de instalación, requisitos del sistema y documentación de funciones.',
          '[Requisitos del sistema de InvokeAI](https://invoke.ai/start-here/system-requirements/) — requisitos oficiales de VRAM, RAM, GPU y sistema operativo por modelo.',
          '[Apache License 2.0 — archivo LICENSE de InvokeAI en GitHub](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) — texto legal completo de la licencia del software de InvokeAI.',
          '[Adobe Newsroom — anuncio de Adobe Firefly Foundry](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry) — anuncio oficial de Adobe sobre la incorporación del equipo de Invoke.',
          '[LICENSE de ComfyUI en GitHub](https://github.com/comfy-org/ComfyUI/blob/master/LICENSE) — texto de la licencia GPL-3.0 para comparación.',
          '[LICENSE de AUTOMATIC1111/stable-diffusion-webui en GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — texto de la licencia AGPL-3.0 para comparación.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Stable Diffusion (2026)](/power-local-llm/stable-diffusion-review) — la familia de modelos abiertos subyacente que ejecutan InvokeAI, ComfyUI y AUTOMATIC1111.',
          '[Generación local de imágenes con IA frente a la nube](/power-local-llm/local-ai-image-generation-vs-cloud) — comparación de herramientas locales de imagen frente a servicios en la nube como Midjourney y Adobe Firefly.',
          '[Directorio de software de LLM local 2026](/power-local-llm/local-llm-software-directory) — directorio completo de apps y herramientas para todas las plataformas.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/invokeai-review-hero-fr.webp',
    title: 'Test d\'InvokeAI (2026) : Studio Stable Diffusion Professionnel',
    seoTitle: 'InvokeAI 2026 : Canevas Unifié, Calques et Guide des Prix',
    intro:
      'InvokeAI est une interface gratuite, open source et auto-hébergée pour exécuter les modèles Stable Diffusion et FLUX sur votre propre GPU, conçue autour d\'un canevas unifié avec édition non destructive basée sur des calques, plutôt qu\'un graphe de nœuds ou une simple interface à onglets. Il est maintenu par une communauté open source sous licence Apache-2.0, après que l\'entreprise l\'ayant initialement créé, Invoke, a été rachetée par Adobe en octobre 2025 et que son service commercial hébergé a cessé ses activités. Ce test explique ce qu\'est réellement InvokeAI, sa licence et son coût réels (il n\'existe actuellement aucune offre payante), ses exigences matérielles, les modèles pris en charge, et comment il se compare à ComfyUI, AUTOMATIC1111, Fooocus et SwarmUI.',
    metaDescription:
      'Test InvokeAI 2026 : studio gratuit sous licence Apache-2.0 avec canevas unifié pour Stable Diffusion/FLUX. Rachat d\'Invoke par Adobe, modèles pris en charge, besoins en VRAM et comparaison honnête avec ComfyUI et AUTOMATIC1111.',
    twitterDescription:
      'Test InvokeAI 2026 : le studio Stable Diffusion à canevas unifié, entièrement gratuit et open source (Apache-2.0) depuis le rachat d\'Invoke par Adobe en octobre 2025. Licence, besoins matériels et comparaison avec ComfyUI et A1111.',
    audience:
      'Lecteurs qui hésitent à auto-héberger InvokeAI pour de la génération d\'images locale basée sur des calques — couvre les conditions de licence, le rachat par Adobe en 2025 et son effet sur les prix, les exigences matérielles et la comparaison avec ComfyUI, AUTOMATIC1111 et Fooocus.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'InvokeAI review',
    targetKeywords: [
      'invokeai avis',
      'invokeai vs comfyui',
      'invokeai prix',
      'invokeai canevas unifié',
      'invokeai licence',
      'invokeai configuration requise',
      'invokeai vs automatic1111',
      'invokeai est-il gratuit',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion 2.0', 'Stable Diffusion XL', 'Stable Diffusion 3.5 Medium', 'Stable Diffusion 3.5 Large', 'FLUX.1 dev', 'FLUX.1 schnell', 'FLUX.1 Kontext', 'FLUX.2 Klein', 'CogView4', 'Qwen-Image'],
    current_hardware_mentioned: ['4 GB VRAM', '8 GB VRAM', '10 GB VRAM', '12 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 3060', 'Apple Silicon M1', 'Intel Arc'],
    leadAnswerBlock:
      '**InvokeAI est une interface gratuite, open source et auto-hébergée pour Stable Diffusion et FLUX, construite autour d\'un canevas unifié à calques persistants et non destructifs — à la différence du graphe de nœuds de ComfyUI et de l\'interface à onglets d\'AUTOMATIC1111.** Il est sous licence Apache-2.0 sans plafond de revenus, donc l\'auto-hébergement ne coûte rien au-delà de votre propre matériel. L\'entreprise qui l\'a commercialisé à l\'origine, Invoke, a été rachetée par Adobe en octobre 2025 ; son service d\'abonnement cloud a cessé ses activités le 31 octobre 2025, et il n\'existe actuellement aucune offre payante active — le projet open source se poursuit de façon indépendante sous l\'égide de la communauté. Les besoins matériels vont de 4 Go de VRAM pour SD 1.5 jusqu\'à 24 Go de VRAM pour la plus grande variante FLUX.2 Klein — vérifiez les exigences actuelles sur [invoke.ai](https://invoke.ai/start-here/system-requirements/) avant d\'acheter du matériel.',
    quickAnswerTop: {
      fr: {
        question: 'InvokeAI est-il gratuit, et existe-t-il une offre payante ?',
        answer:
          'InvokeAI est entièrement gratuit et open source sous licence Apache-2.0, sans plafond de revenus pour l\'usage commercial. L\'entreprise derrière InvokeAI, Invoke, a été rachetée par Adobe en octobre 2025 et a fermé son service d\'abonnement cloud le 31 octobre 2025 — depuis 2026, il n\'existe plus d\'offre payante active ; seule subsiste la Community Edition gratuite et auto-hébergée.',
        bullets: [
          'Licence Apache-2.0, auto-hébergé, aucun seuil de revenus pour l\'usage commercial.',
          'Invoke (l\'entreprise) a été rachetée par Adobe en octobre 2025 ; le service cloud a pris fin le 31 octobre 2025.',
          'Compatible avec SD 1.5, SDXL, SD 3.5 et plusieurs variantes de FLUX dans une seule interface.',
          'Canevas unifié à calques persistants pour un inpainting/outpainting non destructif.',
          'Matériel minimal : 4 Go de VRAM pour SD 1.5, jusqu\'à 24 Go de VRAM pour les modèles FLUX.2 les plus grands.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Ce qu\'est InvokeAI', anchor: 'what-is-invokeai' },
      { label: 'Le rachat par Adobe, expliqué', anchor: 'adobe-acquisition' },
      { label: 'Canevas unifié et calques', anchor: 'unified-canvas' },
      { label: 'Modèles pris en charge', anchor: 'model-support' },
      { label: 'Comment installer InvokeAI', anchor: 'how-to-install' },
      { label: 'Licence et coût', anchor: 'license-and-cost' },
      { label: 'Configuration requise', anchor: 'hardware-requirements' },
      { label: 'InvokeAI vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'À qui s\'adresse InvokeAI', anchor: 'who-should-use' },
      { label: 'À qui InvokeAI ne convient pas', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'En bref',
        isTldr: true,
        items: [
          'InvokeAI est une interface gratuite et open source pour exécuter localement les modèles Stable Diffusion et FLUX, construite autour d\'un canevas unifié à édition persistante, à calques et non destructive.',
          'Il est sous licence Apache-2.0 — aucun plafond de revenus, aucune obligation de copyleft pour le code en aval ; l\'auto-hébergement ne coûte rien au-delà de votre propre matériel.',
          'L\'entreprise derrière InvokeAI, Invoke, a été rachetée par Adobe en octobre 2025 ; son service commercial hébergé a cessé ses activités le 31 octobre 2025. Il n\'existe actuellement aucune offre payante active.',
          'Le projet open source se poursuit de façon indépendante sous l\'égide de la communauté, mené par les mainteneurs de longue date Lincoln Stein ([lstein](https://github.com/lstein)) et Vic ([Blessedcoolant](https://github.com/blessedcoolant)).',
          'Il prend en charge SD 1.5, SD 2.0, SDXL, SD 3.5 et plusieurs variantes de FLUX dans une seule interface, ainsi que des modèles plus récents comme CogView4 et Qwen-Image — vérifiez la prise en charge actuelle sur [GitHub](https://github.com/invoke-ai/InvokeAI) avant de vous fier à un modèle précis.',
          'Les besoins matériels varient selon le modèle : 4 Go de VRAM suffisent pour SD 1.5, SDXL demande 8 Go, et les variantes FLUX plus grandes demandent entre 10 et 24 Go selon le modèle.',
        ],
      },
      whatIsInvokeAI: {
        id: 'what-is-invokeai',
        title: 'Ce qu\'est InvokeAI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI est une interface gratuite et open source pour exécuter les modèles d\'image Stable Diffusion et FLUX sur votre propre GPU, construite autour d\'un canevas unifié à calques persistants et non destructifs plutôt qu\'un graphe de nœuds ou une simple interface à onglets.' },
          { type: 'plain-terms', text: 'Imaginez-le comme un studio de peinture numérique pour images IA — chaque génération devient un calque que vous pouvez revisiter, masquer et régénérer, plutôt qu\'un résultat unique que vous ne pouvez que garder ou jeter.' },
        ],
        content: [
          'InvokeAI est une application frontale qui charge les poids des modèles Stable Diffusion et FLUX et exécute l\'inférence sur votre propre matériel. Comme la WebUI d\'AUTOMATIC1111, ComfyUI et Fooocus, il n\'inclut pas les poids du modèle lui-même — ceux-ci proviennent de Stability AI, Black Forest Labs et d\'autres éditeurs de modèles, et se téléchargent séparément (voir le [Test de Stable Diffusion](/power-local-llm/stable-diffusion-review) pour le contexte sur la famille de modèles sous-jacente et ses propres conditions de licence).',
          'Ce qui distingue InvokeAI, c\'est son canevas unifié : un espace de travail unique où chaque génération, inpainting ou outpainting devient un calque persistant plutôt qu\'un résultat jetable. Les calques peuvent être revisités, remasqués et régénérés plus tard, de sorte qu\'une image est traitée davantage comme une composition en cours que comme un rendu unique. Cette conception cible des flux de travail professionnels de style studio — plus proche de la façon dont un artiste numérique travaille dans un éditeur d\'images à calques que d\'un outil de type « saisir un prompt et c\'est terminé ».',
          'Le projet a débuté en août 2022 comme l\'un des tout premiers forks communautaires de l\'implémentation de référence de Stable Diffusion par CompVis, initialement maintenu par Lincoln Stein sous le nom de dépôt `lstein/stable-diffusion` avant d\'être renommé InvokeAI. Une entreprise nommée Invoke s\'est ensuite formée autour du projet pour construire une version commerciale hébergée sur ce même socle open source — l\'histoire de cette entreprise est couverte dans la section suivante, car elle a considérablement changé en 2025.',
        ],
      },
      adobeAcquisition: {
        id: 'adobe-acquisition',
        title: 'Le rachat par Adobe, expliqué',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Adobe a racheté l\'entreprise Invoke en octobre 2025 ; son équipe fondatrice a rejoint le groupe Firefly Foundry d\'Adobe, le service commercial hébergé a cessé ses activités le 31 octobre 2025, et le projet open source InvokeAI se poursuit de façon indépendante sous des mainteneurs de la communauté.' },
          { type: 'plain-terms', text: 'L\'entreprise qui vendait auparavant une version payante hébergée dans le cloud d\'InvokeAI n\'existe plus en tant qu\'entreprise distincte — son équipe travaille désormais chez Adobe — mais le logiciel gratuit que vous pouvez télécharger et exécuter vous-même ne faisait pas partie de cet accord et continue d\'exister.' },
        ],
        content: [
          'C\'est le fait le plus important à connaître sur InvokeAI en 2026, et il est facile de trouver des informations obsolètes qui le présentent mal. Adobe a annoncé lors de l\'Adobe MAX 2025 (20-21 octobre 2025) avoir racheté Invoke, l\'entreprise derrière la version commerciale hébergée dans le cloud d\'InvokeAI, et que son équipe — dont le PDG Kent Keirsey — avait rejoint la nouvelle initiative « Firefly Foundry » d\'Adobe, qui aide les entreprises à construire des modèles génératifs personnalisés sur la base Firefly d\'Adobe.',
          'La plateforme commerciale hébergée d\'Invoke, qui vendait auparavant des paliers d\'abonnement pour la génération dans le cloud et des fonctionnalités de collaboration en équipe, a cessé ses activités le 31 octobre 2025. Si vous trouvez un article ancien, un tableau comparatif ou une page de tarifs mise en cache décrivant des abonnements InvokeAI « Starter », « Indie », « Professional » ou « Enterprise », cela décrit un service qui n\'existe plus — ne budgétez pas sur la base de ces chiffres.',
          'Le projet open source InvokeAI lui-même n\'a pas été arrêté. La responsabilité est passée à Lincoln Stein ([lstein](https://github.com/lstein)) et Vic ([Blessedcoolant](https://github.com/blessedcoolant)), mainteneurs principaux de longue date impliqués depuis les tout débuts du projet, et le développement s\'est poursuivi indépendamment d\'Adobe sous l\'organisation GitHub [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI). Ce test couvre ce projet open source gratuit et auto-hébergé toujours actif — pas le service commercial abandonné.',
        ],
        note: 'Les faits de cette section proviennent de l\'annonce officielle d\'Adobe d\'octobre 2025 et de multiples rapports indépendants de la presse technologique ; vérifiez directement [github.com/invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) pour la liste actuelle des mainteneurs et l\'état du projet avant de vous fier à un résumé tiers, y compris celui-ci.',
      },
      unifiedCanvas: {
        id: 'unified-canvas',
        title: 'Canevas unifié et calques',
        itemHeadings: true,
        columns: ['Fonctionnalité', 'Ce qu\'elle fait'],
        rows: [
          { 'Fonctionnalité': 'Calques persistants', 'Ce qu\'elle fait': 'Chaque génération, inpainting ou outpainting devient son propre calque qui reste modifiable après fermeture et réouverture du projet' },
          { 'Fonctionnalité': 'Masquage au pinceau', 'Ce qu\'elle fait': 'Peignez un masque directement sur le canevas pour contrôler précisément quelle région est régénérée, plutôt que d\'utiliser un éditeur de masque séparé' },
          { 'Fonctionnalité': 'Inpainting / outpainting', 'Ce qu\'elle fait': 'Régénérez une région masquée sur place, ou étendez le canevas au-delà des bords originaux de l\'image, sans démarrer un nouveau projet' },
          { 'Fonctionnalité': 'Intégration ControlNet', 'Ce qu\'elle fait': 'Guidez la composition et la pose avec des modèles ControlNet directement dans le même espace de canevas' },
          { 'Fonctionnalité': 'Éditeur de flux par nœuds', 'Ce qu\'elle fait': 'Un graphe de nœuds séparé et optionnel pour des pipelines avancés ou reproductibles, pour les lecteurs qui veulent ce niveau de contrôle en plus du canevas' },
          { 'Fonctionnalité': 'Gestion des tableaux et de la galerie', 'Ce qu\'elle fait': 'Organise les générations en tableaux avec les métadonnées conservées, afin que le prompt et les réglages restent attachés à l\'image qui les a produits' },
        ],
        content: [
          'Le canevas unifié est ce que la plupart des critiques et utilisateurs citent comme la caractéristique déterminante d\'InvokeAI par rapport à AUTOMATIC1111 et ComfyUI. Plutôt que de générer une image à la fois et de la réimporter manuellement pour la modifier davantage, InvokeAI traite le canevas comme un espace de travail continu unique : vous pouvez masquer une région, la régénérer, ajouter un nouveau calque par-dessus, et passer d\'un état à l\'autre sans quitter le canevas ni perdre les versions antérieures.',
          'C\'est véritablement plus proche de la façon dont un artiste numérique professionnel travaille dans un éditeur d\'images à calques que de la boucle à onglets « générer, inspecter, régénérer » de la WebUI d\'AUTOMATIC1111, ou de l\'approche graphe-de-nœuds-d\'abord de ComfyUI, où composer un pipeline d\'édition nécessite de câbler des nœuds avant même de voir une seule image. InvokeAI propose aussi son propre éditeur de flux par nœuds optionnel pour les lecteurs qui souhaitent ce niveau de contrôle, de sorte que le canevas et le graphe de nœuds se complètent plutôt que de s\'exclure au sein de la même application.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Modèles pris en charge',
        content: [
          '**InvokeAI prend en charge une gamme large et en croissance active de modèles ouverts d\'image et de vidéo dans une seule interface, plutôt que d\'être construit autour d\'une famille de modèles spécifique.** Selon sa documentation actuelle, les checkpoints et formats pris en charge incluent Stable Diffusion 1.5, Stable Diffusion 2.0, SDXL, Stable Diffusion 3.5 (Medium et Large), plusieurs variantes de FLUX (dev, schnell, Kontext, Krea, Redux, Fill et le plus récent FLUX.2 Klein), ainsi que CogView4 et Qwen-Image. Il charge aussi des modèles aux formats `.ckpt`, `diffusers` et certains `.gguf` quantifiés.',
          'Cette liste change fréquemment à mesure que de nouveaux modèles ouverts sortent, à considérer donc comme un instantané plutôt qu\'un inventaire permanent — vérifiez les notes actuelles de prise en charge des modèles sur le [dépôt GitHub d\'InvokeAI](https://github.com/invoke-ai/InvokeAI) ou ses notes de version avant de présumer la prise en charge d\'un nouveau modèle précis dès le jour de sa sortie.',
          'Une réserve honnête, développée dans la section « À qui InvokeAI ne convient pas » ci-dessous : les mainteneurs d\'InvokeAI privilégient une intégration propre des modèles dans le flux de travail du canevas unifié et de l\'éditeur de nœuds, ce qui tend à prendre plus de temps que d\'ajouter un simple support en ligne de commande. ComfyUI est largement rapporté comme ajoutant la prise en charge des grandes sorties de modèles ouverts le jour même de leur lancement (le fameux support « jour zéro ») ; InvokeAI ne s\'est pas bâti la même réputation de couverture immédiate le jour du lancement en 2026.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Comment installer InvokeAI',
        content: [
          'L\'installation d\'InvokeAI suit le même schéma de base sur tous les systèmes d\'exploitation pris en charge, via le lanceur officiel plutôt qu\'une configuration manuelle de l\'environnement.',
        ],
        numberedItems: [
          { title: 'Vérifiez votre GPU et votre OS par rapport à la configuration requise', whyItMatters: 'InvokeAI fonctionne sous Windows 10+, macOS 14+ et Linux (Ubuntu 20.04+ bien testé) ; confirmez que votre GPU et votre VRAM répondent aux exigences du modèle que vous comptez utiliser avant d\'installer.' },
          { title: 'Téléchargez le lanceur InvokeAI', whyItMatters: 'Le lanceur, disponible via le [guide d\'installation officiel](https://invoke.ai/start-here/installation/) et les releases GitHub, gère automatiquement l\'environnement Python et les dépendances, sans nécessiter d\'installation manuelle d\'environnement virtuel.' },
          { title: 'Installez et lancez l\'application', whyItMatters: 'Le lanceur installe le backend d\'InvokeAI et ouvre l\'interface web dans le navigateur — aucune configuration de serveur web séparée n\'est requise pour un usage local.' },
          { title: 'Téléchargez ou sélectionnez un modèle', whyItMatters: 'Choisissez un modèle de départ (par exemple un checkpoint SD 1.5 ou SDXL) via le gestionnaire de modèles intégré, ou pointez InvokeAI vers un fichier de modèle déjà téléchargé depuis Hugging Face ou Civitai.' },
          { title: 'Ouvrez le canevas unifié et générez', whyItMatters: 'Saisissez un prompt, réglez résolution et étapes, et générez directement sur le canevas — la première génération est généralement plus lente le temps que le modèle se charge en VRAM.' },
          { title: 'Ajoutez ControlNet, des LoRAs ou l\'éditeur de nœuds au besoin', whyItMatters: 'Ce sont des couches optionnelles par-dessus le flux de base — la plupart des lecteurs peuvent les ignorer pour leurs premiers projets et les ajouter une fois à l\'aise avec le canevas.' },
        ],
        note: 'Les étapes d\'installation exactes et les exigences de paquets système (par exemple Python 3.11-3.12, pilotes GPU) peuvent changer d\'une version à l\'autre — suivez le [guide d\'installation actuel d\'invoke.ai](https://invoke.ai/start-here/installation/) plutôt qu\'un tutoriel générique, y compris celui-ci, pour la syntaxe exacte des commandes.',
      },
      licenseAndCost: {
        id: 'license-and-cost',
        title: 'Licence et coût',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'La Community Edition open source d\'InvokeAI est sous licence Apache-2.0 sans plafond de revenus et entièrement gratuite à auto-héberger ; les anciens paliers cloud payants de l\'entreprise ont été abandonnés lorsqu\'Adobe a racheté Invoke en octobre 2025.' },
          { type: 'plain-terms', text: 'Il n\'existe aujourd\'hui qu\'une seule version d\'InvokeAI réellement accessible — la version gratuite que vous exécutez vous-même — car le service cloud payant qui existait auparavant en parallèle a été fermé.' },
        ],
        columns: ['Quoi', 'Statut', 'Coût'],
        rows: [
          { 'Quoi': 'Community Edition open source (auto-hébergée)', 'Statut': 'Activement maintenue par la communauté', 'Coût': 'Gratuit — Apache-2.0, aucun plafond de revenus' },
          { 'Quoi': 'Abonnement cloud Invoke (Starter/Indie/Professional/Enterprise)', 'Statut': 'Abandonné — service terminé le 31/10/2025', 'Coût': 'Sans objet — n\'est plus disponible' },
          { 'Quoi': 'Adobe Firefly Foundry (travail actuel de l\'équipe rachetée)', 'Statut': 'Une ligne de produits Adobe distincte, pas une continuation d\'InvokeAI', 'Coût': 'Fixé par Adobe — hors périmètre de ce test' },
        ],
        content: [
          'La licence logicielle d\'InvokeAI est Apache-2.0, l\'une des licences open source les plus permissives disponibles : elle autorise l\'usage commercial, la modification et la redistribution sans seuil de revenus et sans obligation de copyleft d\'ouvrir votre propre code construit par-dessus. C\'est une licence nettement plus permissive que celle de ComfyUI (GPL-3.0) ou de la WebUI Stable Diffusion d\'AUTOMATIC1111 (AGPL-3.0), toutes deux assorties d\'obligations de copyleft plus strictes pour un usage dérivé ou en réseau — une différence réelle et vérifiable, pas un argument marketing.',
          'Comme l\'auto-hébergement d\'InvokeAI est gratuit sous cette licence, le seul coût récurrent est votre propre matériel et l\'électricité — la même structure de coût que toute autre interface Stable Diffusion ou FLUX auto-hébergée. Il n\'existe aucun abonnement suivi par PromptQuorum, et à la date de ce test, aucune offre payante officielle de marque Invoke n\'existe plus pour comparaison, puisque l\'entreprise qui en vendait une ne l\'exploite plus. Si cela change sous une nouvelle gouvernance, vérifiez les conditions actuelles directement sur [invoke.ai](https://invoke.ai) et sur le [dépôt GitHub](https://github.com/invoke-ai/InvokeAI) avant de supposer que cette répartition des coûts s\'applique encore.',
        ],
        note: 'Les informations de licence et de coût reflètent le texte de la licence Apache-2.0 sur [github.com/invoke-ai/InvokeAI/blob/main/LICENSE](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) et les informations publiques sur le rachat par Adobe d\'octobre 2025, à jour au 06/09/2026. Ceci n\'est pas un conseil juridique — lisez vous-même le fichier de licence avant une décision de déploiement commercial.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Configuration requise',
        itemHeadings: true,
        columns: ['Modèle', 'VRAM minimale', 'RAM système minimale'],
        rows: [
          { 'Modèle': 'Stable Diffusion 1.5', 'VRAM minimale': '4 Go de VRAM', 'RAM système minimale': '8 Go de RAM' },
          { 'Modèle': 'SDXL', 'VRAM minimale': '8 Go de VRAM', 'RAM système minimale': '16 Go de RAM' },
          { 'Modèle': 'FLUX.1', 'VRAM minimale': '10 Go de VRAM', 'RAM système minimale': '32 Go de RAM' },
          { 'Modèle': 'FLUX.2 Klein (4B)', 'VRAM minimale': '12 Go de VRAM', 'RAM système minimale': '16 Go de RAM' },
          { 'Modèle': 'FLUX.2 Klein (9B)', 'VRAM minimale': '24 Go de VRAM', 'RAM système minimale': '32 Go de RAM' },
        ],
        content: [
          'InvokeAI fonctionne sous Windows 10+, macOS 14+ et Linux, Ubuntu 20.04+ étant spécifiquement noté comme bien testé. Les GPU NVIDIA à partir de la série GTX 10 sont pris en charge sous Windows et Linux ; les GPU AMD ne sont pris en charge que sous Linux ; les GPU Intel Arc (Alchemist, Battlemage et plus récents) sont pris en charge sous Windows et Linux x86_64. Les Mac Apple Silicon (M1 et plus récents) fonctionnent, 16 Go ou plus de mémoire unifiée étant recommandés pour un usage confortable. La génération en CPU seul est possible sur les appareils Linux ARM64, mais lente sans GPU.',
          'InvokeAI nécessite Python 3.11 ou 3.12 pour fonctionner en dehors du lanceur intégré. Le lanceur officiel gère cette dépendance automatiquement pour la plupart des lecteurs, donc gérer manuellement un environnement Python est optionnel plutôt qu\'obligatoire pour des installations classiques.',
        ],
        note: 'Les chiffres de VRAM et de RAM sont des minimums tirés de la [page de configuration requise d\'invoke.ai](https://invoke.ai/start-here/system-requirements/) et peuvent évoluer avec de nouvelles variantes de modèles — à considérer comme des indications de planification, à confirmer avant d\'acheter du matériel pour un modèle précis.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'InvokeAI vs. alternatives',
        columns: ['Option', 'Idéal pour', 'Style d\'interface', 'Licence', 'Compromis clé'],
        rows: [
          {
            'Option': 'InvokeAI',
            'Idéal pour': 'Composition non destructive à calques avec une interface de style studio soignée',
            'Style d\'interface': 'Canevas unifié + éditeur de nœuds optionnel',
            'Licence': 'Apache-2.0, aucun plafond de revenus',
            'Compromis clé': 'Généralement plus lent que ComfyUI pour ajouter la prise en charge de modèles tout nouveaux',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Idéal pour': 'Contrôle maximal et prise en charge la plus rapide des nouveaux modèles',
            'Style d\'interface': 'Graphe de nœuds, tout câblé manuellement',
            'Licence': 'GPL-3.0',
            'Compromis clé': 'Courbe d\'apprentissage la plus raide parmi les options courantes ; pas de canevas unifié intégré',
          },
          {
            'Option': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Idéal pour': 'Le plus grand écosystème d\'extensions et de tutoriels communautaires spécifiquement pour Stable Diffusion',
            'Style d\'interface': 'Interface web à onglets',
            'Licence': 'AGPL-3.0',
            'Compromis clé': 'Rythme de développement central plus lent que ComfyUI et InvokeAI en 2026 ; pas de canevas à calques persistants',
          },
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Idéal pour': 'Le moins de clics pour obtenir une première bonne image, configuration minimale',
            'Style d\'interface': 'Interface simplifiée à fenêtre unique, avec des choix fixes',
            'Licence': 'GPL-3.0',
            'Compromis clé': 'En mode de support à long terme limité (correctifs uniquement) selon son propre README, uniquement SDXL, aucun projet pour des architectures plus récentes',
          },
          {
            'Option': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)',
            'Idéal pour': 'Orchestration multi-GPU et multi-backend (peut piloter ComfyUI comme backend)',
            'Style d\'interface': 'Interface web modulaire sur des backends interchangeables',
            'Licence': 'MIT',
            'Compromis clé': 'Base d\'utilisateurs plus restreinte que les quatre autres ; anciennement « StableSwarmUI » de Stability AI avant un fork indépendant en 2024',
          },
        ],
        note: 'Ceci est un résumé de positionnement basé sur la documentation et les fichiers de licence propres à chaque projet au 06/09/2026, pas un benchmark pratique. Voir [Génération locale d\'images IA vs. cloud](/power-local-llm/local-ai-image-generation-vs-cloud) pour la comparaison de ces options locales avec des outils cloud comme Midjourney et Adobe Firefly, et [Test de Stable Diffusion](/power-local-llm/stable-diffusion-review) pour la famille de modèles sous-jacente que ces interfaces exécutent toutes.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse InvokeAI',
        items: [
          '**Lecteur qui veut un flux d\'édition à calques non destructif.** Le canevas unifié repose sur des calques persistants que vous pouvez revisiter et remasquer, plus proche d\'un studio de peinture numérique que d\'une boucle génération-abandon en un coup.',
          '**Lecteur qui veut une interface soignée sans construire un graphe de nœuds à partir de zéro.** Le canevas d\'InvokeAI est utilisable sans rien câbler, un éditeur de nœuds restant néanmoins disponible pour les lecteurs qui le souhaitent.',
          '**Lecteur ou petit studio qui veut la licence open source la plus permissive.** Apache-2.0 n\'a aucun plafond de revenus ni obligation de copyleft pour le code construit par-dessus, une vraie différence par rapport aux licences de la famille GPL de ComfyUI et AUTOMATIC1111 pour les équipes qui développent des outils propriétaires autour du modèle.',
          '**Lecteur qui veut un contrôle local total et la confidentialité.** Une fois installé, la génération s\'exécute entièrement sur votre propre GPU — aucune image ni prompt ne quitte votre machine.',
          '**Lecteur qui veut un projet maintenu avec une gouvernance claire.** Le rachat de l\'entreprise commerciale par Adobe en 2025 n\'a pas arrêté le projet open source ; il se poursuit sous des mainteneurs de la communauté nommés et de longue date.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui InvokeAI ne convient pas',
        items: [
          '**Lecteur qui veut le modèle ou nœud expérimental le plus récent dès le jour de sa sortie.** ComfyUI est largement rapporté comme ajoutant la prise en charge des grandes sorties de modèles ouverts dès le jour du lancement ; l\'approche d\'intégration centrée sur le canevas d\'InvokeAI ne s\'est pas bâti la même réputation de couverture immédiate le jour du lancement.',
          '**Lecteur qui veut spécifiquement un flux de travail uniquement à graphe de nœuds, sans canevas.** InvokeAI inclut un éditeur de nœuds, mais sa caractéristique déterminante est le canevas unifié — les lecteurs qui veulent exclusivement construire des pipelines à base de nœuds préféreront peut-être le design nœuds-d\'abord de ComfyUI.',
          '**Lecteur qui dépendait de l\'abonnement cloud payant d\'Invoke pour la collaboration en équipe ou l\'accès GPU hébergé.** Ce service a été abandonné le 31 octobre 2025 ; il n\'existe actuellement aucun remplaçant payant de marque InvokeAI, donc évaluez d\'autres outils hébergés ou de collaboration en équipe si c\'était la fonctionnalité décisive.',
          '**Lecteur avec très peu de VRAM qui veut spécifiquement exécuter des modèles de classe FLUX.** FLUX.1 demande environ 10 Go de VRAM et 32 Go de RAM système au minimum selon les exigences publiées par InvokeAI lui-même ; les lecteurs avec des cartes de 4-6 Go devraient plutôt prévoir SD 1.5, ou utiliser une alternative cloud.',
          '**Lecteur qui veut la plus grande bibliothèque de tutoriels et d\'extensions communautaires spécifiquement pour Stable Diffusion.** La WebUI d\'AUTOMATIC1111 a la plus longue histoire et le plus grand volume de tutoriels communautaires et d\'extensions tierces construits spécifiquement autour d\'elle, même si son propre rythme de développement central est plus lent que celui de ComfyUI ou d\'InvokeAI en 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'InvokeAI est-il gratuit ?',
            a: 'Oui. La Community Edition open source est gratuite à télécharger, auto-héberger et utiliser commercialement sous licence Apache-2.0, sans plafond de revenus. L\'entreprise qui vendait auparavant une version payante hébergée dans le cloud, Invoke, a été rachetée par Adobe en octobre 2025 et a fermé ce service le 31 octobre 2025 — il n\'existe actuellement aucune offre payante de marque InvokeAI.',
          },
          {
            q: 'Adobe a-t-il racheté InvokeAI ?',
            a: 'Adobe a racheté l\'entreprise Invoke, qui avait construit une plateforme commerciale hébergée sur le projet open source InvokeAI, en octobre 2025 (annoncé lors de l\'Adobe MAX 2025). L\'équipe fondatrice d\'Invoke, dont le PDG Kent Keirsey, a rejoint le groupe Firefly Foundry d\'Adobe. Le service commercial hébergé a cessé ses activités le 31 octobre 2025. Le projet open source InvokeAI lui-même n\'a pas été racheté et se poursuit sous les mainteneurs indépendants de la communauté Lincoln Stein et Vic (Blessedcoolant).',
          },
          {
            q: 'Quelle licence utilise InvokeAI ?',
            a: 'Le logiciel InvokeAI est sous licence Apache-2.0, une licence open source permissive sans plafond de revenus et sans obligation de copyleft pour le code que vous construisez par-dessus. Cela diffère de ComfyUI (GPL-3.0) et de la WebUI Stable Diffusion d\'AUTOMATIC1111 (AGPL-3.0), toutes deux assorties de conditions de copyleft plus strictes pour un usage dérivé ou en réseau. Ceci est un résumé, pas un conseil juridique — lisez le fichier de licence sur GitHub avant une décision de déploiement commercial.',
          },
          {
            q: 'Qu\'est-ce que le canevas unifié d\'InvokeAI ?',
            a: 'Le canevas unifié est l\'espace de travail central d\'InvokeAI, où chaque génération, inpainting ou outpainting devient un calque persistant et modifiable plutôt qu\'un résultat jetable à usage unique. Les lecteurs peuvent masquer une région avec un outil pinceau, régénérer uniquement cette zone, et empiler des calques dans le temps, plus proche du travail dans un éditeur d\'images à calques que d\'une simple boîte de prompt génération-abandon.',
          },
          {
            q: 'Quels modèles InvokeAI prend-il en charge ?',
            a: 'Selon la documentation actuelle, InvokeAI prend en charge Stable Diffusion 1.5, 2.0, SDXL et 3.5 (Medium et Large), plusieurs variantes de FLUX (dev, schnell, Kontext, Krea, Redux, Fill et FLUX.2 Klein), ainsi que des modèles plus récents comme CogView4 et Qwen-Image, aux formats `.ckpt`, `diffusers` et certains `.gguf`. Cette liste est mise à jour fréquemment — consultez le [dépôt GitHub d\'InvokeAI](https://github.com/invoke-ai/InvokeAI) pour la liste actuelle des modèles pris en charge avant de présumer la prise en charge d\'une nouvelle sortie précise.',
          },
          {
            q: 'De combien de VRAM InvokeAI a-t-il besoin ?',
            a: 'Cela dépend du modèle : Stable Diffusion 1.5 ne nécessite que 4 Go de VRAM et 8 Go de RAM système, SDXL demande 8 Go de VRAM et 16 Go de RAM, FLUX.1 demande environ 10 Go de VRAM et 32 Go de RAM, et la plus grande variante FLUX.2 Klein (9B) demande environ 24 Go de VRAM et 32 Go de RAM. Ce sont des minimums publiés par la propre documentation d\'InvokeAI et pouvant évoluer avec de nouvelles variantes de modèles.',
          },
          {
            q: 'InvokeAI est-il meilleur que ComfyUI ou AUTOMATIC1111 ?',
            a: 'Cela dépend de ce que vous privilégiez. ComfyUI est largement rapporté comme ajoutant le plus rapidement la prise en charge des tout nouveaux modèles ouverts et offre le contrôle le plus granulaire au niveau des nœuds ; la WebUI d\'AUTOMATIC1111 a le plus grand volume de tutoriels et d\'extensions communautaires construits spécifiquement pour Stable Diffusion, même si son propre développement central a ralenti par rapport aux deux autres en 2026. L\'avantage d\'InvokeAI est son canevas unifié : des calques persistants et non destructifs qui font que l\'édition itérative ressemble davantage à un outil de peinture numérique, ainsi que la licence la plus permissive (Apache-2.0) des trois.',
          },
          {
            q: 'Où télécharger InvokeAI ?',
            a: 'La source officielle est le [dépôt GitHub invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI), et la voie d\'installation recommandée est le lanceur décrit dans le [guide d\'installation d\'invoke.ai](https://invoke.ai/start-here/installation/), qui gère automatiquement la configuration de l\'environnement Python sous Windows, macOS et Linux.',
          },
          {
            q: 'Qu\'est-il advenu des abonnements payants d\'Invoke ?',
            a: 'Ils ont été abandonnés. Invoke, l\'entreprise qui vendait des paliers d\'abonnement payants hébergés dans le cloud aux côtés du logiciel gratuit open source, a été rachetée par Adobe en octobre 2025, et son service commercial hébergé a cessé ses activités le 31 octobre 2025. Les articles anciens ou les pages de tarifs mises en cache décrivant des offres « Starter », « Indie », « Professional » ou « Enterprise » décrivent, en 2026, un service qui n\'existe plus.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'InvokeAI mérite sa réputation d\'interface la plus orientée studio parmi les interfaces Stable Diffusion courantes, construite autour d\'un canevas unifié véritablement distinctif à calques persistants et non destructifs qui récompense les lecteurs pratiquant une composition itérative de style artistique plutôt qu\'une génération de prompt en un coup. Sa licence Apache-2.0 est la plus permissive des principales options, et l\'auto-hébergement reste entièrement gratuit sans plafond de revenus — un fait qui mérite d\'être énoncé clairement vu la quantité d\'informations tarifaires obsolètes sur les « abonnements Invoke » qui circulent encore après que l\'entreprise derrière le service commercial hébergé a été rachetée par Adobe en octobre 2025 et que ce service a été fermé. Le projet open source lui-même ne faisait pas partie de cet accord et se poursuit avec un développement actif sous des mainteneurs de la communauté nommés. Le compromis honnête : ComfyUI est largement rapporté comme ajoutant plus rapidement la prise en charge de tout nouveaux modèles, et AUTOMATIC1111 conserve le plus grand volume de tutoriels et d\'extensions communautaires construits spécifiquement autour de lui. Pour un lecteur qui veut un canevas soigné à calques et une licence permissive sans contrepartie, InvokeAI reste un choix raisonnable et actuellement gratuit.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[invoke-ai/InvokeAI sur GitHub](https://github.com/invoke-ai/InvokeAI) — code source officiel, fichier de licence, prise en charge actuelle des modèles et notes de version.',
          '[InvokeAI — documentation officielle](https://invoke.ai/) — guides d\'installation, configuration requise et documentation des fonctionnalités.',
          '[Configuration requise d\'InvokeAI](https://invoke.ai/start-here/system-requirements/) — exigences officielles de VRAM, RAM, GPU et OS par modèle.',
          '[Apache License 2.0 — fichier LICENSE d\'InvokeAI sur GitHub](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) — texte légal complet de la licence logicielle d\'InvokeAI.',
          '[Adobe Newsroom — annonce Adobe Firefly Foundry](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry) — annonce officielle d\'Adobe sur l\'arrivée de l\'équipe Invoke.',
          '[LICENSE de ComfyUI sur GitHub](https://github.com/comfy-org/ComfyUI/blob/master/LICENSE) — texte de la licence GPL-3.0 pour comparaison.',
          '[LICENSE d\'AUTOMATIC1111/stable-diffusion-webui sur GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — texte de la licence AGPL-3.0 pour comparaison.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de Stable Diffusion (2026)](/power-local-llm/stable-diffusion-review) — la famille de modèles ouverts sous-jacente qu\'exécutent InvokeAI, ComfyUI et AUTOMATIC1111.',
          '[Génération locale d\'images IA vs. cloud](/power-local-llm/local-ai-image-generation-vs-cloud) — comparaison des outils d\'image locaux avec des services cloud comme Midjourney et Adobe Firefly.',
          '[Annuaire des logiciels LLM locaux 2026](/power-local-llm/local-llm-software-directory) — annuaire complet d\'applications et d\'outils pour toutes les plateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/invokeai-review-hero-ja.webp',
    title: 'InvokeAIレビュー(2026):プロ向けStable Diffusionスタジオ',
    seoTitle: 'InvokeAIレビュー2026:統合キャンバス・レイヤー・料金ガイド',
    intro:
      'InvokeAIは、自分のGPU上でStable DiffusionとFLUXの画像モデルを実行するための無料・オープンソース・セルフホスト型インターフェースで、ノードグラフやシンプルなタブレイアウトではなく、レイヤーベースの非破壊編集を可能にする「統合キャンバス(Unified Canvas)」を中心に設計されています。もともとInvokeAIを開発した企業Invokeが2025年10月にAdobeに買収され、その商用ホスティングサービスが終了した後は、Apache-2.0ライセンスのもとでオープンソースコミュニティによって維持されています。本レビューでは、InvokeAIが実際に何であるか、実際のライセンスと費用(現時点で有料プランは存在しません)、ハードウェア要件、対応モデル、そしてComfyUI・AUTOMATIC1111・Fooocus・SwarmUIとの比較を取り上げます。',
    metaDescription:
      'InvokeAIレビュー2026:Stable Diffusion/FLUX向けの無料Apache-2.0統合キャンバススタジオ。AdobeによるInvoke買収、現在の対応モデル、VRAM要件、ComfyUIやAUTOMATIC1111との正直な比較を解説。',
    twitterDescription:
      'InvokeAIレビュー2026:統合キャンバスを備えたStable Diffusionスタジオは、2025年10月にAdobeが開発元企業を買収した後も完全無料・オープンソース(Apache-2.0)。ライセンス、ハードウェア要件、ComfyUIやA1111との比較。',
    audience:
      'ローカルでレイヤーベースの画像生成を行うためにInvokeAIを自己ホストするかどうか検討している読者向け。ライセンス条件、2025年のAdobe買収とその料金への影響、ハードウェア要件、ComfyUI・AUTOMATIC1111・Fooocusとの比較を扱う。',
    readTime: '11分で読了',
    educationalLevel: 'Intermediate',
    primaryTerm: 'InvokeAI review',
    targetKeywords: [
      'invokeai レビュー',
      'invokeai vs comfyui',
      'invokeai 料金',
      'invokeai 統合キャンバス',
      'invokeai ライセンス',
      'invokeai 動作環境',
      'invokeai vs automatic1111',
      'invokeai 無料',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion 2.0', 'Stable Diffusion XL', 'Stable Diffusion 3.5 Medium', 'Stable Diffusion 3.5 Large', 'FLUX.1 dev', 'FLUX.1 schnell', 'FLUX.1 Kontext', 'FLUX.2 Klein', 'CogView4', 'Qwen-Image'],
    current_hardware_mentioned: ['4 GB VRAM', '8 GB VRAM', '10 GB VRAM', '12 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 3060', 'Apple Silicon M1', 'Intel Arc'],
    leadAnswerBlock:
      '**InvokeAIは、永続的で非破壊なレイヤーを中心とした統合キャンバスを備えた、無料・オープンソース・セルフホスト型のStable Diffusion/FLUXインターフェースです。ComfyUIのノードグラフやAUTOMATIC1111のタブ型レイアウトとは異なります。** Apache-2.0ライセンスで収益上限がないため、セルフホスティングは自分のハードウェア費用以外にかかりません。もともとこれを商用化した企業Invokeは2025年10月にAdobeに買収され、そのホスティング型クラウドサブスクリプションサービスは2025年10月31日に終了しており、現在アクティブな有料プランはありません。オープンソースプロジェクトは独立してコミュニティのもとで継続しています。ハードウェア要件はSD 1.5の4 GB VRAMから、より大きなFLUX.2 Kleinバリアントの24 GB VRAMまで幅があります。ハードウェアを購入する前に[invoke.ai](https://invoke.ai/start-here/system-requirements/)で最新の要件を確認してください。',
    quickAnswerTop: {
      ja: {
        question: 'InvokeAIは無料ですか?有料プランはありますか?',
        answer:
          'InvokeAIはApache-2.0ライセンスのもと完全に無料でオープンソースであり、商用利用に収益上限はありません。開発元企業のInvokeは2025年10月にAdobeに買収され、2025年10月31日に有料クラウドサブスクリプションサービスを終了しました。2026年時点でアクティブな有料プランは存在せず、無料でセルフホスト型のCommunity Editionのみが残っています。',
        bullets: [
          'Apache-2.0ライセンス、セルフホスト、商用利用の収益しきい値なし。',
          'Invoke(企業)は2025年10月にAdobeに買収され、ホスティングサービスは2025年10月31日に終了。',
          'SD 1.5、SDXL、SD 3.5、複数のFLUXバリアントを1つのインターフェースでサポート。',
          '非破壊のインペイント/アウトペイントのための永続レイヤーを備えた統合キャンバス。',
          '最小ハードウェア要件:SD 1.5は4 GB VRAM、より大きなFLUX.2モデルは最大24 GB VRAM。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'InvokeAIとは', anchor: 'what-is-invokeai' },
      { label: 'Adobe買収の詳細', anchor: 'adobe-acquisition' },
      { label: '統合キャンバスとレイヤー', anchor: 'unified-canvas' },
      { label: '対応モデル', anchor: 'model-support' },
      { label: 'InvokeAIのインストール方法', anchor: 'how-to-install' },
      { label: 'ライセンスと費用', anchor: 'license-and-cost' },
      { label: 'ハードウェア要件', anchor: 'hardware-requirements' },
      { label: 'InvokeAI vs. 代替ツール', anchor: 'vs-alternatives' },
      { label: 'InvokeAIが向いている人', anchor: 'who-should-use' },
      { label: 'InvokeAIが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要約',
        isTldr: true,
        items: [
          'InvokeAIは、Stable DiffusionとFLUXのモデルをローカルで実行するための無料・オープンソースインターフェースで、永続的でレイヤーベースの非破壊編集を可能にする統合キャンバスを中心に構築されている。',
          'Apache-2.0ライセンスのもとで提供されており、収益上限や下流コードへのコピーレフト義務はなく、セルフホスティングは自分のハードウェア以外の費用がかからない。',
          'InvokeAIの開発元企業Invokeは2025年10月にAdobeに買収され、そのホスティング型商用サービスは2025年10月31日に終了した。現在アクティブな有料プランは存在しない。',
          'オープンソースプロジェクトは、長年のコアメンテナーであるLincoln Stein([lstein](https://github.com/lstein))とVic([Blessedcoolant](https://github.com/blessedcoolant))が主導し、独立してコミュニティのもとで継続している。',
          'SD 1.5、SD 2.0、SDXL、SD 3.5、複数のFLUXバリアントを1つのインターフェースでサポートするほか、CogView4やQwen-Imageなどの新しいモデルにも対応する。特定モデルへの依存前に[GitHub](https://github.com/invoke-ai/InvokeAI)で最新の対応状況を確認すること。',
          'ハードウェア要件はモデルによって変動する。SD 1.5は4 GB VRAMでカバーでき、SDXLは8 GB、より大きなFLUXバリアントはモデルにより10〜24 GBが必要。',
        ],
      },
      whatIsInvokeAI: {
        id: 'what-is-invokeai',
        title: 'InvokeAIとは',
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAIは、自分のGPU上でStable DiffusionとFLUXの画像モデルを実行するための無料・オープンソースインターフェースであり、ノードグラフやシンプルなタブレイアウトではなく、永続的で非破壊なレイヤーを中心とした統合キャンバスを備えている。' },
          { type: 'plain-terms', text: 'AI画像のためのデジタル絵画スタジオのようなものと考えてください。各生成は破棄するか保存するかしかない一回限りの結果ではなく、再訪してマスクし、再生成できるレイヤーになります。' },
        ],
        content: [
          'InvokeAIはStable DiffusionとFLUXのモデルの重みを読み込み、自分のハードウェア上で推論を実行するフロントエンドアプリケーションです。AUTOMATIC1111のStable Diffusion WebUI、ComfyUI、Fooocusと同様に、モデルの重み自体は含まれません。これらはStability AI、Black Forest Labs、その他のモデル発行元から提供され、別途ダウンロードする必要があります(基盤となるモデルファミリーとそのライセンス条件については[Stable Diffusionレビュー](/power-local-llm/stable-diffusion-review)を参照)。',
          'InvokeAIを際立たせているのは統合キャンバスです。すべての生成、インペイント、アウトペイントが使い捨ての出力ではなく、永続的なレイヤーになる単一のワークスペースです。レイヤーは後から再訪し、再マスクし、再生成できるため、画像は一回限りのレンダリングというより、進行中の合成として扱われます。この設計はプロフェッショナルでスタジオ的なワークフローを対象としており、単にプロンプトを入力して終わりというツールよりも、レイヤーベースの画像エディタでデジタルアーティストが作業する方法に近いものです。',
          'このプロジェクトは2022年8月、Stable DiffusionのCompVisリファレンス実装の最も早いコミュニティフォークの1つとして始まり、当初はLincoln Steinが`lstein/stable-diffusion`というリポジトリ名で維持していましたが、後にInvokeAIに改名されました。その後、同じオープンソースコアの上に商用ホスティング版を構築するために、Invokeという企業がプロジェクトの周辺で結成されました。この企業の経緯は次のセクションで扱いますが、2025年に大きく変化したためです。',
        ],
      },
      adobeAcquisition: {
        id: 'adobe-acquisition',
        title: 'Adobe買収の詳細',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Adobeは2025年10月に企業Invokeを買収し、創業チームはAdobeのFirefly Foundryグループに加わった。商用ホスティングサービスは2025年10月31日に終了したが、オープンソースプロジェクトのInvokeAIはコミュニティメンテナーのもとで独立して継続している。' },
          { type: 'plain-terms', text: 'かつてInvokeAIの有料クラウドホスティング版を販売していた企業は独立した会社としてはもう存在せず、そのチームは現在Adobeで働いています。しかし自分でダウンロードして実行できる無料ソフトウェアはこの取引の対象ではなく、継続しています。' },
        ],
        content: [
          'これは2026年時点でInvokeAIについて把握すべき最も重要な事実であり、これを誤って伝える古い情報を見つけるのは容易です。Adobeは2025年のAdobe MAX(2025年10月20〜21日)で、InvokeAIの商用クラウドホスティング版を手掛ける企業Invokeを買収したこと、そしてCEOのKent Keirseyを含むそのチームが、企業がAdobeのFireflyの基盤上でカスタム生成モデルを構築するのを支援する新たな「Firefly Foundry」構想に加わったことを発表しました。',
          '以前クラウドベースの生成やチームコラボレーション機能のためのサブスクリプション階層を販売していたInvokeの商用ホスティングプラットフォームは、2025年10月31日に運用を終了しました。「Starter」「Indie」「Professional」「Enterprise」といったInvokeAIのサブスクリプションプランを説明する古い記事、比較表、またはキャッシュされた料金ページを見つけた場合、それはもはや存在しないサービスを説明しているものです。それらの数字をもとに予算を立てないでください。',
          'オープンソースプロジェクトであるInvokeAI自体は終了していません。管理はLincoln Stein([lstein](https://github.com/lstein))とVic([Blessedcoolant](https://github.com/blessedcoolant))に引き継がれました。両者はプロジェクトの最も初期から関わってきた長年のコアメンテナーであり、開発は[invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI)のGitHub組織のもとでAdobeとは独立して継続されています。本レビューはこの継続中の無料でセルフホスト型のオープンソースプロジェクトを扱うものであり、終了した商用サービスを扱うものではありません。',
        ],
        note: 'このセクションの事実は、Adobe自身の2025年10月の発表と複数の独立した技術メディアの報道に基づいています。この記事を含むいかなる第三者の要約に頼る前に、最新のメンテナーリストとプロジェクトの状況について[github.com/invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI)を直接確認してください。',
      },
      unifiedCanvas: {
        id: 'unified-canvas',
        title: '統合キャンバスとレイヤー',
        itemHeadings: true,
        columns: ['機能', '内容'],
        rows: [
          { '機能': '永続レイヤー', '内容': '生成、インペイント、アウトペイントのそれぞれが独自のレイヤーになり、プロジェクトを閉じて再度開いた後も編集可能な状態を保つ' },
          { '機能': 'ブラシによるマスキング', '内容': '別のマスクエディタを使う代わりに、キャンバス上に直接マスクを描いて、どの領域を再生成するかを正確に制御できる' },
          { '機能': 'インペイント/アウトペイント', '内容': '新しいプロジェクトを開始せずに、マスクした領域をその場で再生成したり、元の画像境界を超えてキャンバスを拡張したりできる' },
          { '機能': 'ControlNet連携', '内容': '同じキャンバス作業領域内で直接ControlNetモデルを使い、構図やポーズを誘導できる' },
          { '機能': 'ノードベースのワークフローエディタ', '内容': 'キャンバスに加えてその制御レベルを求める読者向けに、高度または再現可能なパイプライン用の別途、任意のノードグラフを提供する' },
          { '機能': 'ボードとギャラリー管理', '内容': '生成物をメタデータを保持したボードに整理し、プロンプトと設定が生成された画像に紐づいたまま残る' },
        ],
        content: [
          '統合キャンバスは、ほとんどのレビュアーやユーザーがAUTOMATIC1111やComfyUIに対するInvokeAIの決定的な特徴として挙げるものです。一度に1枚の画像を生成し、さらに編集するために手動で再インポートする代わりに、InvokeAIはキャンバスを単一の連続した作業領域として扱います。領域をマスクし、再生成し、その上に新しいレイヤーを追加し、キャンバスを離れたり以前のバージョンを失ったりすることなく、これらの状態間を移動できます。',
          'これは、AUTOMATIC1111のWebUIのタブベースの「生成、確認、再生成」のループや、編集パイプラインを組むために何も画像を見る前にノードを配線する必要があるComfyUIのノードグラフ優先のアプローチよりも、プロのデジタルアーティストがレイヤーベースの画像エディタで作業する方法に本当に近いものです。InvokeAIには、その制御レベルを望む読者向けの独自の任意のノードベースワークフローエディタも搭載されており、同じアプリケーション内でキャンバスとノードグラフが排他的ではなく補完的に機能します。',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: '対応モデル',
        content: [
          '**InvokeAIは、特定のモデルファミリーを中心に構築されているのではなく、幅広く積極的に成長を続けるオープンウェイトの画像・動画モデルを1つのインターフェースでサポートしています。** 現在のドキュメントによると、対応するチェックポイントとフォーマットには、Stable Diffusion 1.5、Stable Diffusion 2.0、SDXL、Stable Diffusion 3.5(MediumとLarge)、複数のFLUXバリアント(dev、schnell、Kontext、Krea、Redux、Fill、そして新しいFLUX.2 Klein)、さらにCogView4とQwen-Imageが含まれます。`.ckpt`、`diffusers`、および一部の`.gguf`量子化フォーマットのモデルも読み込めます。',
          'このリストは新しいオープンウェイトモデルがリリースされるたびに頻繁に変化するため、恒久的な一覧ではなくスナップショットとして扱ってください。特定の新モデルへのリリース当日の対応を前提とする前に、[InvokeAIのGitHubリポジトリ](https://github.com/invoke-ai/InvokeAI)またはそのリリースノートで最新のモデル対応状況を確認してください。',
          '正直な注意点として、以下の「InvokeAIが向いていない人」のセクションでさらに詳しく扱いますが、InvokeAIのメンテナーはモデルを統合キャンバスとノードエディタのワークフローにきれいに統合することを優先しており、これは単なるコマンドライン対応を追加するよりも時間がかかる傾向があります。ComfyUIは主要な新しいオープンウェイトモデルのリリース当日にサポートを追加する(いわゆる「デイゼロ」対応)ことで広く知られていますが、InvokeAIは2026年時点でリリース当日の即時対応という点で同様の評判をまだ築いていません。',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'InvokeAIのインストール方法',
        content: [
          'InvokeAIのインストールは、手動での環境構築ではなく公式ランチャーを使うことで、対応するどのオペレーティングシステムでも基本的に同じ流れになります。',
        ],
        numberedItems: [
          { title: 'GPUとOSを動作要件と照合する', whyItMatters: 'InvokeAIはWindows 10以降、macOS 14以降、Linux(Ubuntu 20.04以降でよくテストされている)で動作する。インストール前に、使用予定のモデルの要件を自分のGPUとVRAMが満たしているか確認すること。' },
          { title: 'InvokeAIランチャーをダウンロードする', whyItMatters: '[公式インストールガイド](https://invoke.ai/start-here/installation/)とGitHubリリースから入手できるランチャーは、手動での仮想環境インストールを必要とせず、Python環境と依存関係のセットアップを自動的に処理する。' },
          { title: 'アプリケーションをインストールして起動する', whyItMatters: 'ランチャーはInvokeAIのバックエンドをインストールし、ブラウザベースのウェブインターフェースを開く。ローカル利用には別途のウェブサーバー設定は不要。' },
          { title: 'モデルをダウンロードまたは選択する', whyItMatters: '組み込みのモデルマネージャーを使ってスターターモデル(例:SD 1.5やSDXLのチェックポイント)を選ぶか、Hugging FaceやCivitaiからすでにダウンロード済みのモデルファイルをInvokeAIに指定する。' },
          { title: '統合キャンバスを開いて生成する', whyItMatters: 'プロンプトを入力し、解像度とステップ数を設定して、キャンバス上で直接生成する。モデルがVRAMに読み込まれる間、最初の生成は通常より時間がかかる。' },
          { title: '必要に応じてControlNet、LoRA、ノードエディタを追加する', whyItMatters: 'これらは基本ワークフローの上に載る任意のレイヤーである。ほとんどの読者は最初の数件のプロジェクトでは無視して構わず、キャンバスに慣れたら追加すればよい。' },
        ],
        note: '正確なインストール手順やシステムパッケージ要件(Python 3.11〜3.12、GPUドライバーなど)はリリースごとに変わる可能性がある。正確なコマンド構文については、この記事を含む汎用的な手順ではなく、[invoke.aiの最新インストールガイド](https://invoke.ai/start-here/installation/)に従うこと。',
      },
      licenseAndCost: {
        id: 'license-and-cost',
        title: 'ライセンスと費用',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAIのオープンソースCommunity Editionは収益上限のないApache-2.0ライセンスのもとで提供され、セルフホスティングは完全に無料である。企業の以前の有料ホスティングクラウド階層は、2025年10月にAdobeがInvokeを買収した際に終了した。' },
          { type: 'plain-terms', text: '以前並行して存在していた有料クラウドサービスが終了したため、現在実際に入手できるInvokeAIのバージョンは1つだけです。自分で運用する無料版です。' },
        ],
        columns: ['項目', '状況', '費用'],
        rows: [
          { '項目': 'オープンソースCommunity Edition(セルフホスト)', '状況': 'コミュニティにより積極的にメンテナンスされている', '費用': '無料 — Apache-2.0、収益上限なし' },
          { '項目': 'Invokeホスティングクラウドサブスクリプション(Starter/Indie/Professional/Enterprise)', '状況': '終了 — サービスは2025年10月31日に終了', '費用': '該当なし — もう利用できない' },
          { '項目': 'Adobe Firefly Foundry(買収されたチームの現在の業務)', '状況': 'InvokeAIの継続ではなく、別のAdobe製品ライン', '費用': 'Adobeが設定 — 本レビューの対象外' },
        ],
        content: [
          'InvokeAIのソフトウェアライセンスはApache-2.0であり、利用可能な最も寛容なオープンソースライセンスの1つです。収益しきい値なしに商用利用、改変、再配布を許可し、その上に構築した独自コードをオープンソース化するコピーレフト要件もありません。これはComfyUI(GPL-3.0)やAUTOMATIC1111のStable Diffusion WebUI(AGPL-3.0)よりも著しく寛容なライセンスであり、両者は派生利用やネットワーク利用に対してより強いコピーレフト義務を課しています。これは実際に確認可能な違いであり、マーケティング上の主張ではありません。',
          'このライセンスのもとでInvokeAIのセルフホスティングは無料であるため、継続的にかかる費用は自分のハードウェアと電気代のみです。これは他のセルフホスト型Stable DiffusionやFLUXインターフェースと同じコスト構造です。PromptQuorumが把握しているサブスクリプション料金はなく、本レビュー時点では、それを販売していた企業がもう運営していないため、公式のInvokeブランドの有料プランと比較すること自体ができません。新たな運営体制のもとでこれが変わった場合は、このコスト内訳が依然として当てはまると仮定する前に、[invoke.ai](https://invoke.ai)と[GitHubリポジトリ](https://github.com/invoke-ai/InvokeAI)で最新の条件を直接確認してください。',
        ],
        note: 'ライセンスと費用の情報は、[github.com/invoke-ai/InvokeAI/blob/main/LICENSE](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE)のApache-2.0ライセンス本文と、2025年10月のAdobe買収に関する公開報道を反映しており、2026年9月6日時点の情報です。これは法的助言ではありません。商用展開の判断前に、必ず自分でライセンスファイルを確認してください。',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'ハードウェア要件',
        itemHeadings: true,
        columns: ['モデル', '最小VRAM', '最小システムRAM'],
        rows: [
          { 'モデル': 'Stable Diffusion 1.5', '最小VRAM': '4 GB VRAM', '最小システムRAM': '8 GB RAM' },
          { 'モデル': 'SDXL', '最小VRAM': '8 GB VRAM', '最小システムRAM': '16 GB RAM' },
          { 'モデル': 'FLUX.1', '最小VRAM': '10 GB VRAM', '最小システムRAM': '32 GB RAM' },
          { 'モデル': 'FLUX.2 Klein (4B)', '最小VRAM': '12 GB VRAM', '最小システムRAM': '16 GB RAM' },
          { 'モデル': 'FLUX.2 Klein (9B)', '最小VRAM': '24 GB VRAM', '最小システムRAM': '32 GB RAM' },
        ],
        content: [
          'InvokeAIはWindows 10以降、macOS 14以降、Linuxで動作し、特にUbuntu 20.04以降がよくテストされているとされています。GTX 10シリーズ以降のNVIDIA GPUはWindowsとLinuxでサポートされ、AMD GPUはLinuxのみでサポートされ、Intel Arc GPU(Alchemist、Battlemage以降)はWindowsとLinux x86_64でサポートされます。Apple Silicon Mac(M1以降)は動作しますが、快適な利用には16 GB以上の統合メモリが推奨されます。GPUなしでのCPUのみの生成はLinux ARM64デバイスで可能ですが低速です。',
          'InvokeAIは、同梱のランチャー外で実行する場合、Python 3.11または3.12が必要です。公式ランチャーはほとんどの読者に対してこの依存関係を自動的に管理するため、一般的なインストールではPython環境を手動で管理することは必須ではなく任意です。',
        ],
        note: 'VRAMとRAMの数値は[invoke.aiのシステム要件ページ](https://invoke.ai/start-here/system-requirements/)からの最小値であり、新しいモデルバリアントの登場によって変わる可能性がある。計画目的の目安として扱い、特定モデル向けのハードウェアを購入する前に最新の数値を確認すること。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'InvokeAI vs. 代替ツール',
        columns: ['選択肢', '最適な用途', 'インターフェース形式', 'ライセンス', '主なトレードオフ'],
        rows: [
          {
            '選択肢': 'InvokeAI',
            '最適な用途': '洗練されたスタジオ風UIによるレイヤーベースの非破壊合成',
            'インターフェース形式': '統合キャンバス + 任意のノードエディタ',
            'ライセンス': 'Apache-2.0、収益上限なし',
            '主なトレードオフ': '全く新しいモデルへの対応がComfyUIより一般的に遅い',
          },
          {
            '選択肢': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '最適な用途': '最大限の制御と新モデルへの最速対応',
            'インターフェース形式': 'ノードグラフ、すべて手動配線',
            'ライセンス': 'GPL-3.0',
            '主なトレードオフ': '主流の選択肢の中で最も急な学習曲線。組み込みの統合キャンバスなし',
          },
          {
            '選択肢': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            '最適な用途': 'Stable Diffusion専用としては最大のエクステンションエコシステムとコミュニティチュートリアル',
            'インターフェース形式': 'タブ形式のウェブUI',
            'ライセンス': 'AGPL-3.0',
            '主なトレードオフ': '2026年時点でComfyUIやInvokeAIよりコア開発のペースが遅い。永続レイヤーキャンバスなし',
          },
          {
            '選択肢': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '最適な用途': '最初の良い画像を得るまでのクリック数が最少、設定は最小限',
            'インターフェース形式': '簡素化された単一ウィンドウの決め打ちUI',
            'ライセンス': 'GPL-3.0',
            '主なトレードオフ': '自身のREADMEによれば限定的な長期サポート(バグ修正のみ)状態、SDXL専用、新アーキテクチャへの対応予定なし',
          },
          {
            '選択肢': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)',
            '最適な用途': 'マルチGPU・マルチバックエンドのオーケストレーション(ComfyUIをバックエンドとして駆動可能)',
            'インターフェース形式': '交換可能なバックエンド上のモジュール式ウェブUI',
            'ライセンス': 'MIT',
            '主なトレードオフ': '他の4つよりユーザーベースが小さい。2024年の独立フォーク以前はStability AIの「StableSwarmUI」だった',
          },
        ],
        note: 'これは2026年9月6日時点の各プロジェクト自身のドキュメントとライセンスファイルに基づく位置づけの要約であり、実機ベンチマークではありません。これらのローカルの選択肢がMidjourneyやAdobe Fireflyなどのクラウドツールとどう比較されるかについては[ローカルAI画像生成 vs. クラウド](/power-local-llm/local-ai-image-generation-vs-cloud)を、これらすべてのUIが実行する基盤モデルファミリーについては[Stable Diffusionレビュー](/power-local-llm/stable-diffusion-review)を参照してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'InvokeAIが向いている人',
        items: [
          '**レイヤーベースの非破壊編集ワークフローを求める読者。** 統合キャンバスは、再訪して再マスクできる永続レイヤーを中心としており、一発の生成・破棄ループよりもデジタル絵画スタジオに近い。',
          '**ゼロからノードグラフを組み立てずに洗練されたインターフェースを求める読者。** InvokeAIのキャンバスは何も配線せずに使用できるが、それを望む読者向けにノードエディタも利用可能。',
          '**最も寛容なオープンソースライセンスを求める読者や小規模スタジオ。** Apache-2.0には収益上限も、その上に構築するコードへのコピーレフト義務もない。これは、モデルの周辺に独自の専有ツールを開発するチームにとって、ComfyUIやAUTOMATIC1111のGPL系ライセンスとの実質的な違いである。',
          '**完全なローカル制御とプライバシーを求める読者。** インストール後、生成はすべて自分のGPU上で実行され、画像やプロンプトが自分のマシンから外に出ることはない。',
          '**明確なガバナンスを持つメンテナンスされたプロジェクトを求める読者。** 2025年のAdobeによる商用企業の買収はオープンソースプロジェクトを止めておらず、実名の長年のコミュニティメンテナーのもとで継続している。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'InvokeAIが向いていない人',
        items: [
          '**最新の実験的モデルやノードをリリース当日に使いたい読者。** ComfyUIは主要な新しいオープンウェイトモデルのリリース当日にサポートを追加することで広く知られているが、InvokeAIのキャンバス優先の統合アプローチは、同様の即時リリース当日対応という評判をまだ築いていない。',
          '**キャンバスなしのノードグラフのみのワークフローを特に求める読者。** InvokeAIにはノードエディタが含まれるが、その決定的な特徴は統合キャンバスである。ノードベースのパイプライン構築のみを求める読者は、ノード優先の設計であるComfyUIを好むかもしれない。',
          '**チームコラボレーションやホスティングされたGPUアクセスのためにInvokeの有料クラウドホスティングサブスクリプションに頼っていた読者。** このサービスは2025年10月31日に終了しており、現在InvokeAIブランドの有料代替は存在しない。それが決め手だった機能であれば、他のホスティング型ツールやチームコラボレーションツールを検討すること。',
          '**FLUXクラス級モデルを特に実行したい非常に低VRAMのハードウェアを持つ読者。** InvokeAI自身が公表している要件によると、FLUX.1は最低でも約10 GB VRAMと32 GBのシステムRAMを求める。4〜6 GBのカードを持つ読者は、代わりにSD 1.5を前提に計画するか、クラウド代替を利用すべきである。',
          '**Stable Diffusion専用の最大規模のコミュニティチュートリアルとエクステンションライブラリを求める読者。** AUTOMATIC1111のWebUIは最も長い歴史を持ち、それを中心に構築されたコミュニティチュートリアルとサードパーティ拡張機能の量が最大であるが、2026年時点でそれ自身のコア開発ペースはComfyUIやInvokeAIより遅い。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'InvokeAIは無料ですか?',
            a: 'はい。オープンソースのCommunity Editionは、Apache-2.0ライセンスのもとで無料でダウンロード、セルフホスト、商用利用でき、収益上限はありません。以前有料のクラウドホスティング版を販売していた企業Invokeは2025年10月にAdobeに買収され、2025年10月31日にそのサービスを終了しました。現在、InvokeAIブランドの有料プランは一切存在しません。',
          },
          {
            q: 'AdobeはInvokeAIを買収しましたか?',
            a: 'Adobeは、オープンソースプロジェクトのInvokeAIの上に商用ホスティングプラットフォームを構築した企業Invokeを2025年10月に買収しました(2025年のAdobe MAXで発表)。CEOのKent Keirseyを含むInvokeの創業チームは、AdobeのFirefly Foundryグループに加わりました。商用ホスティングサービスは2025年10月31日に運用を終了しました。オープンソースプロジェクトであるInvokeAI自体は買収されておらず、独立したコミュニティメンテナーであるLincoln SteinとVic(Blessedcoolant)のもとで継続しています。',
          },
          {
            q: 'InvokeAIはどのライセンスを使用していますか?',
            a: 'InvokeAIのソフトウェアはApache-2.0ライセンスのもとで提供されています。これは収益上限がなく、その上に構築するコードへのコピーレフト要件もない寛容なオープンソースライセンスです。これはComfyUI(GPL-3.0)やAUTOMATIC1111のStable Diffusion WebUI(AGPL-3.0)とは異なり、両者は派生利用やネットワーク利用に対してより厳格なコピーレフト条件を課しています。これは要約であり法的助言ではありません。商用展開の判断前にGitHub上のライセンスファイルを読んでください。',
          },
          {
            q: 'InvokeAIの統合キャンバスとは何ですか?',
            a: '統合キャンバスはInvokeAIの中心となる作業領域で、すべての生成、インペイント、アウトペイントが使い捨ての一回限りの出力ではなく、永続的で編集可能なレイヤーになります。読者はブラシツールで領域をマスクし、その部分だけを再生成し、時間をかけてレイヤーを重ねることができ、単一の生成・破棄プロンプトボックスよりもレイヤーベースの画像エディタでの作業に近いものです。',
          },
          {
            q: 'InvokeAIはどのモデルに対応していますか?',
            a: '現在のドキュメントによると、InvokeAIはStable Diffusion 1.5、2.0、SDXL、3.5(MediumとLarge)、複数のFLUXバリアント(dev、schnell、Kontext、Krea、Redux、Fill、FLUX.2 Klein)、さらにCogView4やQwen-Imageなどの新しいモデルに、`.ckpt`、`diffusers`、一部の`.gguf`フォーマットで対応しています。このリストは頻繁に更新されるため、特定の新リリースへの対応を前提とする前に[InvokeAIのGitHubリポジトリ](https://github.com/invoke-ai/InvokeAI)で最新の対応モデル一覧を確認してください。',
          },
          {
            q: 'InvokeAIにはどれくらいのVRAMが必要ですか?',
            a: 'モデルによって異なります。Stable Diffusion 1.5はわずか4 GBのVRAMと8 GBのシステムRAMで済み、SDXLは8 GBのVRAMと16 GBのRAMを求め、FLUX.1は約10 GBのVRAMと32 GBのRAMを求め、より大きなFLUX.2 Kleinバリアント(9B)は約24 GBのVRAMと32 GBのRAMを求めます。これらはInvokeAI自身のドキュメントが公表している最小値であり、新しいモデルバリアントの登場に伴って変わる可能性があります。',
          },
          {
            q: 'InvokeAIはComfyUIやAUTOMATIC1111より優れていますか?',
            a: '何を重視するかによります。ComfyUIは全く新しいオープンウェイトモデルのリリースへの対応が最も速いことで広く知られており、最も細かいノードレベルの制御を提供します。AUTOMATIC1111のWebUIは、Stable Diffusion専用に構築されたコミュニティチュートリアルと拡張機能の量が最大ですが、2026年時点でそれ自身のコア開発は他の2つに比べて減速しています。InvokeAIの強みは統合キャンバスであり、反復的な編集をよりデジタル絵画ツールのように感じさせる永続的で非破壊なレイヤーに加え、3つの中で最も寛容なライセンス(Apache-2.0)です。',
          },
          {
            q: 'InvokeAIはどこでダウンロードできますか?',
            a: '公式のソースは[invoke-ai/InvokeAI GitHubリポジトリ](https://github.com/invoke-ai/InvokeAI)であり、推奨されるインストール方法は[invoke.aiのインストールガイド](https://invoke.ai/start-here/installation/)に記載されているランチャーで、Windows、macOS、LinuxでPython環境のセットアップを自動的に処理します。',
          },
          {
            q: 'Invokeの有料サブスクリプションプランはどうなりましたか?',
            a: '終了しました。無料のオープンソースソフトウェアと並行して有料のクラウドホスティングサブスクリプション階層を販売していたInvokeは、2025年10月にAdobeに買収され、その商用ホスティングサービスは2025年10月31日に運用を終了しました。「Starter」「Indie」「Professional」「Enterprise」プランを説明する古い記事やキャッシュされた料金ページは、2026年時点でもはや存在しないサービスを説明しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'InvokeAIは、一発のプロンプト生成ではなく反復的でアーティスティックな合成を行う読者に報いる、真に独特な永続的・非破壊レイヤーを備えた統合キャンバスを中心に構築されており、主流のStable Diffusionインターフェースの中で最もスタジオ志向という評判にふさわしいものです。そのApache-2.0ライセンスは主要な選択肢の中で最も寛容であり、セルフホスティングは収益上限なしに完全に無料のままです。これは、商用ホスティングサービスの背後にあった企業が2025年10月にAdobeに買収され、そのサービスが終了した後も「Invokeのサブスクリプションプラン」に関する古い料金情報が依然として多く出回っていることを踏まえると、明確に述べておく価値のある事実です。オープンソースプロジェクト自体はその取引の対象ではなく、実名のコミュニティメンテナーのもとで活発な開発を続けています。正直なトレードオフとしては、ComfyUIが全く新しいモデルリリースへの対応をより速く追加することで広く知られており、AUTOMATIC1111は依然としてそれを中心に構築されたコミュニティチュートリアルと拡張機能の量が最大です。洗練されたレイヤーベースのキャンバスと、しがらみのない寛容なライセンスを求める読者にとって、InvokeAIは依然として妥当で、かつ現時点では無料な選択肢です。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHub上のinvoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) — 公式ソースコード、ライセンスファイル、現在のモデル対応状況、リリースノート。',
          '[InvokeAI — 公式ドキュメント](https://invoke.ai/) — インストールガイド、システム要件、機能ドキュメント。',
          '[InvokeAIのシステム要件](https://invoke.ai/start-here/system-requirements/) — モデルごとの公式VRAM、RAM、GPU、OS要件。',
          '[Apache License 2.0 — GitHub上のInvokeAI LICENSEファイル](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) — InvokeAIのソフトウェアライセンスの完全な法的文書。',
          '[Adobe Newsroom — Adobe Firefly Foundryの発表](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry) — Invokeチームの合流に関するAdobeの公式発表。',
          '[GitHub上のComfyUIのLICENSE](https://github.com/comfy-org/ComfyUI/blob/master/LICENSE) — 比較用のGPL-3.0ライセンス本文。',
          '[GitHub上のAUTOMATIC1111/stable-diffusion-webuiのLICENSE](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — 比較用のAGPL-3.0ライセンス本文。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Stable Diffusionレビュー(2026)](/power-local-llm/stable-diffusion-review) — InvokeAI、ComfyUI、AUTOMATIC1111がすべて実行する基盤となるオープンウェイトモデルファミリー。',
          '[ローカルAI画像生成 vs. クラウド](/power-local-llm/local-ai-image-generation-vs-cloud) — MidjourneyやAdobe Fireflyなどのクラウドサービスとローカル画像ツールの比較。',
          '[ローカルLLMソフトウェアディレクトリ2026](/power-local-llm/local-llm-software-directory) — 全プラットフォーム対応の包括的なアプリ・ツールディレクトリ。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/invokeai-review-hero-pt.webp',
    title: 'Análise do InvokeAI (2026): Estúdio Profissional de Stable Diffusion',
    seoTitle: 'InvokeAI 2026: Tela Unificada, Camadas e Guia de Preços',
    intro:
      'O InvokeAI é uma interface gratuita, de código aberto e autohospedada para rodar modelos Stable Diffusion e FLUX na sua própria GPU, construída em torno de uma tela unificada com edição não destrutiva baseada em camadas, em vez de um grafo de nós ou uma interface simples de abas. É mantido por uma comunidade de código aberto sob a licença Apache-2.0, depois que a empresa que originalmente o criou, a Invoke, foi adquirida pela Adobe em outubro de 2025 e seu serviço comercial hospedado foi encerrado. Esta análise cobre o que o InvokeAI realmente é, sua licença e custo reais (atualmente não há nenhum plano pago), os requisitos de hardware, os modelos compatíveis e como ele se compara ao ComfyUI, AUTOMATIC1111, Fooocus e SwarmUI.',
    metaDescription:
      'Análise do InvokeAI 2026: estúdio gratuito com licença Apache-2.0 e tela unificada para Stable Diffusion/FLUX. Cobre a aquisição da Invoke pela Adobe, modelos compatíveis, requisitos de VRAM e comparação honesta com ComfyUI e AUTOMATIC1111.',
    twitterDescription:
      'Análise do InvokeAI 2026: o estúdio de tela unificada para Stable Diffusion, totalmente gratuito e de código aberto (Apache-2.0) desde que a Adobe adquiriu a empresa por trás dele em outubro de 2025. Licença, requisitos de hardware e comparação com ComfyUI e A1111.',
    audience:
      'Leitores que estão decidindo se devem autohospedar o InvokeAI para geração local de imagens baseada em camadas — cobre termos de licença, a aquisição pela Adobe em 2025 e seu efeito nos preços, requisitos de hardware e comparação com ComfyUI, AUTOMATIC1111 e Fooocus.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'InvokeAI review',
    targetKeywords: [
      'invokeai análise',
      'invokeai vs comfyui',
      'invokeai preço',
      'invokeai tela unificada',
      'invokeai licença',
      'invokeai requisitos do sistema',
      'invokeai vs automatic1111',
      'invokeai é grátis',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion 2.0', 'Stable Diffusion XL', 'Stable Diffusion 3.5 Medium', 'Stable Diffusion 3.5 Large', 'FLUX.1 dev', 'FLUX.1 schnell', 'FLUX.1 Kontext', 'FLUX.2 Klein', 'CogView4', 'Qwen-Image'],
    current_hardware_mentioned: ['4 GB VRAM', '8 GB VRAM', '10 GB VRAM', '12 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 3060', 'Apple Silicon M1', 'Intel Arc'],
    leadAnswerBlock:
      '**O InvokeAI é uma interface gratuita, de código aberto e autohospedada para Stable Diffusion e FLUX, construída em torno de uma tela unificada com camadas persistentes e não destrutivas — diferente do grafo de nós do ComfyUI e da interface de abas do AUTOMATIC1111.** Tem licença Apache-2.0 sem limite de receita, então autohospedar não custa nada além do seu próprio hardware. A empresa que originalmente o comercializou, a Invoke, foi adquirida pela Adobe em outubro de 2025; seu serviço de assinatura em nuvem foi encerrado em 31 de outubro de 2025, e atualmente não existe nenhum plano pago ativo — o projeto de código aberto continua de forma independente sob a comunidade. Os requisitos de hardware variam de 4 GB de VRAM para SD 1.5 até 24 GB de VRAM para a variante maior FLUX.2 Klein — confira os requisitos atuais em [invoke.ai](https://invoke.ai/start-here/system-requirements/) antes de comprar hardware.',
    quickAnswerTop: {
      pt: {
        question: 'O InvokeAI é gratuito e tem algum plano pago?',
        answer:
          'O InvokeAI é totalmente gratuito e de código aberto sob a licença Apache-2.0, sem limite de receita para uso comercial. A empresa por trás dele, a Invoke, foi adquirida pela Adobe em outubro de 2025 e encerrou seu serviço de assinatura em nuvem em 31 de outubro de 2025 — desde 2026 não existe mais nenhum plano pago ativo; resta apenas a Community Edition gratuita e autohospedada.',
        bullets: [
          'Licença Apache-2.0, autohospedado, sem limite de receita para uso comercial.',
          'A Invoke (a empresa) foi adquirida pela Adobe em outubro de 2025; o serviço em nuvem terminou em 31 de outubro de 2025.',
          'Compatível com SD 1.5, SDXL, SD 3.5 e várias variantes do FLUX em uma única interface.',
          'Tela unificada com camadas persistentes para inpainting/outpainting não destrutivo.',
          'Hardware mínimo: 4 GB de VRAM para SD 1.5, até 24 GB de VRAM para os modelos FLUX.2 maiores.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o InvokeAI', anchor: 'what-is-invokeai' },
      { label: 'A aquisição pela Adobe, explicada', anchor: 'adobe-acquisition' },
      { label: 'Tela unificada e camadas', anchor: 'unified-canvas' },
      { label: 'Modelos compatíveis', anchor: 'model-support' },
      { label: 'Como instalar o InvokeAI', anchor: 'how-to-install' },
      { label: 'Licença e custo', anchor: 'license-and-cost' },
      { label: 'Requisitos de hardware', anchor: 'hardware-requirements' },
      { label: 'InvokeAI vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o InvokeAI é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o InvokeAI não é indicado', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O InvokeAI é uma interface gratuita e de código aberto para rodar localmente modelos Stable Diffusion e FLUX, construída em torno de uma tela unificada com edição persistente, baseada em camadas e não destrutiva.',
          'Tem licença Apache-2.0 — sem limite de receita, sem obrigações de copyleft para código derivado; autohospedar não custa nada além do próprio hardware.',
          'A empresa por trás do InvokeAI, a Invoke, foi adquirida pela Adobe em outubro de 2025; seu serviço comercial hospedado foi encerrado em 31 de outubro de 2025. Atualmente não existe nenhum plano pago ativo.',
          'O projeto de código aberto continua de forma independente sob a comunidade, liderado pelos mantenedores de longa data Lincoln Stein ([lstein](https://github.com/lstein)) e Vic ([Blessedcoolant](https://github.com/blessedcoolant)).',
          'É compatível com SD 1.5, SD 2.0, SDXL, SD 3.5 e várias variantes do FLUX em uma única interface, além de modelos mais recentes como CogView4 e Qwen-Image — confira a compatibilidade atual no [GitHub](https://github.com/invoke-ai/InvokeAI) antes de depender de um modelo específico.',
          'Os requisitos de hardware variam conforme o modelo: 4 GB de VRAM cobrem o SD 1.5, o SDXL precisa de 8 GB, e variantes maiores do FLUX precisam de 10 a 24 GB dependendo do modelo.',
        ],
      },
      whatIsInvokeAI: {
        id: 'what-is-invokeai',
        title: 'O que é o InvokeAI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O InvokeAI é uma interface gratuita e de código aberto para rodar modelos de imagem Stable Diffusion e FLUX na sua própria GPU, construída em torno de uma tela unificada com camadas persistentes e não destrutivas, em vez de um grafo de nós ou uma interface simples de abas.' },
          { type: 'plain-terms', text: 'Pense nele como um estúdio de pintura digital para imagens de IA — cada geração se torna uma camada que você pode revisitar, mascarar e regenerar, em vez de um resultado único que só pode ser mantido ou descartado.' },
        ],
        content: [
          'O InvokeAI é uma aplicação de interface que carrega os pesos dos modelos Stable Diffusion e FLUX e executa a inferência no seu próprio hardware. Assim como a WebUI do AUTOMATIC1111, o ComfyUI e o Fooocus, ele não inclui os pesos do modelo em si — eles vêm da Stability AI, da Black Forest Labs e de outros editores de modelos, e são baixados separadamente (veja a [Análise do Stable Diffusion](/power-local-llm/stable-diffusion-review) para o contexto sobre a família de modelos subjacente e seus próprios termos de licença).',
          'O que diferencia o InvokeAI é sua tela unificada: um único espaço de trabalho onde cada geração, inpainting ou outpainting se torna uma camada persistente em vez de um resultado descartável. As camadas podem ser revisitadas, remascaradas e regeneradas mais tarde, então uma imagem é tratada mais como uma composição em andamento do que como uma renderização única. Esse design visa fluxos de trabalho profissionais no estilo de estúdio — mais próximo de como um artista digital trabalha em um editor de imagens por camadas do que de uma ferramenta de apenas digitar um prompt e pronto.',
          'O projeto começou em agosto de 2022 como um dos primeiros forks comunitários da implementação de referência CompVis do Stable Diffusion, inicialmente mantido por Lincoln Stein sob o nome de repositório `lstein/stable-diffusion` antes de ser renomeado para InvokeAI. Uma empresa chamada Invoke se formou depois em torno do projeto para construir uma versão comercial hospedada sobre esse mesmo núcleo de código aberto — a história dessa empresa é abordada na próxima seção, já que mudou substancialmente em 2025.',
        ],
      },
      adobeAcquisition: {
        id: 'adobe-acquisition',
        title: 'A aquisição pela Adobe, explicada',
        snippetBlocks: [
          { type: 'one-sentence', text: 'A Adobe adquiriu a empresa Invoke em outubro de 2025; sua equipe fundadora entrou para o grupo Firefly Foundry da Adobe, o serviço comercial hospedado foi encerrado em 31 de outubro de 2025, e o projeto de código aberto InvokeAI continua de forma independente sob mantenedores da comunidade.' },
          { type: 'plain-terms', text: 'A empresa que antes vendia uma versão paga hospedada na nuvem do InvokeAI não existe mais como um negócio separado — sua equipe agora trabalha na Adobe —, mas o software gratuito que você pode baixar e rodar sozinho não fez parte desse acordo e continua ativo.' },
        ],
        content: [
          'Este é o fato mais importante a se acertar sobre o InvokeAI em 2026, e é fácil encontrar informações desatualizadas que o descrevem errado. A Adobe anunciou na Adobe MAX 2025 (20 a 21 de outubro de 2025) que havia adquirido a Invoke, a empresa por trás da versão comercial hospedada na nuvem do InvokeAI, e que sua equipe — incluindo o CEO Kent Keirsey — havia entrado para a nova iniciativa "Firefly Foundry" da Adobe, que ajuda empresas a construir modelos generativos personalizados sobre a base Firefly da Adobe.',
          'A plataforma comercial hospedada da Invoke, que antes vendia níveis de assinatura para geração em nuvem e recursos de colaboração em equipe, encerrou suas operações em 31 de outubro de 2025. Se você encontrar um artigo antigo, uma tabela comparativa ou uma página de preços em cache descrevendo planos de assinatura "Starter", "Indie", "Professional" ou "Enterprise" do InvokeAI, isso descreve um serviço que não existe mais — não planeje seu orçamento com base nesses números.',
          'O projeto de código aberto InvokeAI em si não foi encerrado. A responsabilidade passou para Lincoln Stein ([lstein](https://github.com/lstein)) e Vic ([Blessedcoolant](https://github.com/blessedcoolant)), mantenedores principais de longa data envolvidos desde os primeiros dias do projeto, e o desenvolvimento continuou de forma independente da Adobe sob a organização GitHub [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI). Esta análise cobre esse projeto de código aberto gratuito e autohospedado que continua ativo — não o serviço comercial descontinuado.',
        ],
        note: 'Os fatos desta seção vêm do próprio anúncio da Adobe de outubro de 2025 e de múltiplas reportagens independentes da imprensa de tecnologia; confira diretamente [github.com/invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) para a lista atual de mantenedores e o status do projeto antes de confiar em qualquer resumo de terceiros, incluindo este.',
      },
      unifiedCanvas: {
        id: 'unified-canvas',
        title: 'Tela unificada e camadas',
        itemHeadings: true,
        columns: ['Recurso', 'O que faz'],
        rows: [
          { 'Recurso': 'Camadas persistentes', 'O que faz': 'Cada geração, inpainting ou outpainting se torna sua própria camada, que continua editável mesmo depois de fechar e reabrir o projeto' },
          { 'Recurso': 'Mascaramento com pincel', 'O que faz': 'Pinte uma máscara diretamente na tela para controlar exatamente qual região é regenerada, em vez de usar um editor de máscara separado' },
          { 'Recurso': 'Inpainting / outpainting', 'O que faz': 'Regenere uma região mascarada no lugar, ou estenda a tela além das bordas originais da imagem, sem iniciar um novo projeto' },
          { 'Recurso': 'Integração com ControlNet', 'O que faz': 'Guie composição e pose usando modelos ControlNet diretamente dentro do mesmo espaço de trabalho da tela' },
          { 'Recurso': 'Editor de fluxo de trabalho por nós', 'O que faz': 'Um grafo de nós separado e opcional para pipelines avançados ou repetíveis, para leitores que queiram esse nível de controle além da tela' },
          { 'Recurso': 'Gerenciamento de quadros e galeria', 'O que faz': 'Organiza as gerações em quadros com metadados preservados, para que o prompt e as configurações permaneçam vinculados à imagem que os produziu' },
        ],
        content: [
          'A tela unificada é o que a maioria dos revisores e usuários apontam como o recurso definidor do InvokeAI em relação ao AUTOMATIC1111 e ao ComfyUI. Em vez de gerar uma imagem de cada vez e reimportá-la manualmente para edição adicional, o InvokeAI trata a tela como um único espaço de trabalho contínuo: você pode mascarar uma região, regenerá-la, adicionar uma nova camada por cima e alternar entre esses estados sem sair da tela ou perder versões anteriores.',
          'Isso é genuinamente mais próximo de como um artista digital profissional trabalha em um editor de imagens por camadas do que o ciclo baseado em abas de "gerar, inspecionar, regenerar" da WebUI do AUTOMATIC1111, ou a abordagem de grafo de nós primeiro do ComfyUI, em que compor um pipeline de edição exige conectar nós antes mesmo de ver qualquer imagem. O InvokeAI também traz seu próprio editor de fluxo de trabalho por nós opcional para leitores que queiram esse nível de controle, então a tela e o grafo de nós se complementam em vez de se excluírem dentro da mesma aplicação.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Modelos compatíveis',
        content: [
          '**O InvokeAI é compatível com uma gama ampla e em crescimento ativo de modelos abertos de imagem e vídeo em uma única interface, em vez de ser construído em torno de uma família de modelos específica.** De acordo com sua documentação atual, os checkpoints e formatos compatíveis incluem Stable Diffusion 1.5, Stable Diffusion 2.0, SDXL, Stable Diffusion 3.5 (Medium e Large), várias variantes do FLUX (dev, schnell, Kontext, Krea, Redux, Fill e o mais recente FLUX.2 Klein), além do CogView4 e do Qwen-Image. Também carrega modelos nos formatos `.ckpt`, `diffusers` e alguns `.gguf` quantizados.',
          'Essa lista muda com frequência à medida que novos modelos abertos são lançados, então trate-a como um instantâneo, não como um inventário permanente — confira as notas atuais de compatibilidade de modelos no [repositório GitHub do InvokeAI](https://github.com/invoke-ai/InvokeAI) ou em suas notas de lançamento antes de presumir compatibilidade com um modelo novo específico no dia do lançamento.',
          'Uma ressalva honesta, tratada com mais profundidade na seção "Para quem o InvokeAI não é indicado" abaixo: os mantenedores do InvokeAI priorizam integrar os modelos de forma limpa ao fluxo de trabalho da tela unificada e do editor de nós, o que tende a levar mais tempo do que simplesmente adicionar suporte por linha de comando. É amplamente relatado que o ComfyUI adiciona suporte a grandes lançamentos de modelos abertos no mesmo dia em que saem (o chamado suporte "dia zero"); o InvokeAI ainda não construiu essa mesma reputação de cobertura imediata no dia do lançamento em 2026.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Como instalar o InvokeAI',
        content: [
          'Instalar o InvokeAI segue o mesmo esquema básico em todos os sistemas operacionais compatíveis, usando o instalador oficial em vez de uma configuração manual do ambiente.',
        ],
        numberedItems: [
          { title: 'Verifique sua GPU e sistema operacional contra os requisitos do sistema', whyItMatters: 'O InvokeAI roda em Windows 10+, macOS 14+ e Linux (Ubuntu 20.04+ bem testado); confirme que sua GPU e VRAM atendem aos requisitos do modelo que você pretende usar antes de instalar.' },
          { title: 'Baixe o instalador (Launcher) do InvokeAI', whyItMatters: 'O instalador, disponível no [guia de instalação oficial](https://invoke.ai/start-here/installation/) e nos releases do GitHub, cuida do ambiente Python e das dependências automaticamente, sem exigir uma instalação manual de ambiente virtual.' },
          { title: 'Instale e abra a aplicação', whyItMatters: 'O instalador configura o backend do InvokeAI e abre a interface web no navegador — nenhuma configuração de servidor web separada é necessária para uso local.' },
          { title: 'Baixe ou selecione um modelo', whyItMatters: 'Escolha um modelo inicial (por exemplo, um checkpoint SD 1.5 ou SDXL) pelo gerenciador de modelos integrado, ou aponte o InvokeAI para um arquivo de modelo que você já tenha baixado do Hugging Face ou do Civitai.' },
          { title: 'Abra a tela unificada e gere', whyItMatters: 'Digite um prompt, ajuste resolução e passos, e gere diretamente na tela — a primeira geração costuma ser mais lenta enquanto o modelo carrega na VRAM.' },
          { title: 'Adicione ControlNet, LoRAs ou o editor de nós conforme necessário', whyItMatters: 'São camadas opcionais sobre o fluxo de trabalho básico — a maioria dos leitores pode ignorá-las em seus primeiros projetos e adicioná-las quando estiver confortável com a tela.' },
        ],
        note: 'Os passos exatos de instalação e os requisitos de pacotes do sistema (por exemplo, Python 3.11-3.12, drivers de GPU) podem mudar entre versões — siga o [guia de instalação atual do invoke.ai](https://invoke.ai/start-here/installation/) em vez de um tutorial genérico, incluindo este, para a sintaxe exata dos comandos.',
      },
      licenseAndCost: {
        id: 'license-and-cost',
        title: 'Licença e custo',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'A Community Edition de código aberto do InvokeAI tem licença Apache-2.0 sem limite de receita e é totalmente gratuita para autohospedar; os antigos níveis pagos em nuvem da empresa foram descontinuados quando a Adobe adquiriu a Invoke em outubro de 2025.' },
          { type: 'plain-terms', text: 'Hoje existe apenas uma versão do InvokeAI que você realmente pode obter — a gratuita, que você mesmo executa — porque o serviço pago em nuvem que antes existia em paralelo foi encerrado.' },
        ],
        columns: ['O quê', 'Status', 'Custo'],
        rows: [
          { 'O quê': 'Community Edition de código aberto (autohospedada)', 'Status': 'Mantida ativamente pela comunidade', 'Custo': 'Grátis — Apache-2.0, sem limite de receita' },
          { 'O quê': 'Assinatura em nuvem da Invoke (Starter/Indie/Professional/Enterprise)', 'Status': 'Descontinuada — serviço encerrado em 31/10/2025', 'Custo': 'Não se aplica — não está mais disponível' },
          { 'O quê': 'Adobe Firefly Foundry (trabalho atual da equipe adquirida)', 'Status': 'Uma linha de produtos da Adobe separada, não uma continuação do InvokeAI', 'Custo': 'Definido pela Adobe — fora do escopo desta análise' },
        ],
        content: [
          'A licença de software do InvokeAI é a Apache-2.0, uma das licenças de código aberto mais permissivas disponíveis: ela permite uso comercial, modificação e redistribuição sem limite de receita e sem exigência de copyleft de abrir seu próprio código construído em cima dela. Essa é uma licença consideravelmente mais permissiva do que a do ComfyUI (GPL-3.0) ou a da WebUI Stable Diffusion do AUTOMATIC1111 (AGPL-3.0), ambas com obrigações de copyleft mais fortes para uso derivado ou em rede — uma diferença real e verificável, não uma alegação de marketing.',
          'Como autohospedar o InvokeAI é gratuito sob essa licença, o único custo contínuo é o seu próprio hardware e eletricidade — a mesma estrutura de custo de qualquer outra interface autohospedada de Stable Diffusion ou FLUX. Não há nenhuma taxa de assinatura rastreada pela PromptQuorum, e, no momento desta análise, não existe nenhum nível pago oficial de marca Invoke com o qual compará-la, já que a empresa que vendia um não o opera mais. Se isso mudar sob uma nova gestão, confira as condições atuais diretamente em [invoke.ai](https://invoke.ai) e no [repositório GitHub](https://github.com/invoke-ai/InvokeAI) antes de presumir que este detalhamento de custos ainda se aplica.',
        ],
        note: 'As informações de licença e custo refletem o texto da licença Apache-2.0 em [github.com/invoke-ai/InvokeAI/blob/main/LICENSE](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) e a cobertura pública sobre a aquisição pela Adobe em outubro de 2025, atualizada em 06/09/2026. Isso não é aconselhamento jurídico — leia você mesmo o arquivo de licença antes de uma decisão de implantação comercial.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Requisitos de hardware',
        itemHeadings: true,
        columns: ['Modelo', 'VRAM mínima', 'RAM mínima do sistema'],
        rows: [
          { 'Modelo': 'Stable Diffusion 1.5', 'VRAM mínima': '4 GB de VRAM', 'RAM mínima do sistema': '8 GB de RAM' },
          { 'Modelo': 'SDXL', 'VRAM mínima': '8 GB de VRAM', 'RAM mínima do sistema': '16 GB de RAM' },
          { 'Modelo': 'FLUX.1', 'VRAM mínima': '10 GB de VRAM', 'RAM mínima do sistema': '32 GB de RAM' },
          { 'Modelo': 'FLUX.2 Klein (4B)', 'VRAM mínima': '12 GB de VRAM', 'RAM mínima do sistema': '16 GB de RAM' },
          { 'Modelo': 'FLUX.2 Klein (9B)', 'VRAM mínima': '24 GB de VRAM', 'RAM mínima do sistema': '32 GB de RAM' },
        ],
        content: [
          'O InvokeAI roda em Windows 10+, macOS 14+ e Linux, com o Ubuntu 20.04+ especificamente indicado como bem testado. GPUs NVIDIA a partir da série GTX 10 são compatíveis no Windows e Linux; GPUs AMD são compatíveis apenas no Linux; GPUs Intel Arc (Alchemist, Battlemage e mais recentes) são compatíveis no Windows e Linux x86_64. Macs com Apple Silicon (M1 e mais recentes) funcionam, recomendando-se 16 GB ou mais de memória unificada para uso confortável. A geração somente por CPU é possível em dispositivos Linux ARM64, mas é lenta sem GPU.',
          'O InvokeAI exige Python 3.11 ou 3.12 para rodar fora do instalador incluído. O instalador oficial gerencia essa dependência automaticamente para a maioria dos leitores, então gerenciar manualmente um ambiente Python é opcional, não obrigatório, em instalações típicas.',
        ],
        note: 'Os valores de VRAM e RAM são mínimos retirados da [página de requisitos do sistema do invoke.ai](https://invoke.ai/start-here/system-requirements/) e podem mudar com novas variantes de modelos — trate-os como orientação de planejamento e confirme os números atuais antes de comprar hardware para um modelo específico.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'InvokeAI vs. alternativas',
        columns: ['Opção', 'Melhor para', 'Estilo de interface', 'Licença', 'Principal trade-off'],
        rows: [
          {
            'Opção': 'InvokeAI',
            'Melhor para': 'Composição não destrutiva baseada em camadas com uma interface de estúdio bem polida',
            'Estilo de interface': 'Tela unificada + editor de nós opcional',
            'Licença': 'Apache-2.0, sem limite de receita',
            'Principal trade-off': 'Geralmente mais lento que o ComfyUI para adicionar suporte a modelos totalmente novos',
          },
          {
            'Opção': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Melhor para': 'Controle máximo e suporte mais rápido a novos lançamentos de modelos',
            'Estilo de interface': 'Grafo de nós, tudo conectado manualmente',
            'Licença': 'GPL-3.0',
            'Principal trade-off': 'Curva de aprendizado mais acentuada entre as opções comuns; sem tela unificada integrada',
          },
          {
            'Opção': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Melhor para': 'O maior ecossistema de extensões e tutoriais da comunidade especificamente para Stable Diffusion',
            'Estilo de interface': 'Interface web baseada em abas',
            'Licença': 'AGPL-3.0',
            'Principal trade-off': 'Ritmo de desenvolvimento principal mais lento que ComfyUI e InvokeAI em 2026; sem tela de camadas persistente',
          },
          {
            'Opção': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Melhor para': 'Menos cliques até a primeira boa imagem, configuração mínima',
            'Estilo de interface': 'Interface simplificada de janela única, com escolhas fixas',
            'Licença': 'GPL-3.0',
            'Principal trade-off': 'Em modo de suporte de longo prazo limitado (apenas correções de bugs) segundo seu próprio README, apenas SDXL, sem planos para arquiteturas mais novas',
          },
          {
            'Opção': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)',
            'Melhor para': 'Orquestração multi-GPU e multi-backend (pode usar o ComfyUI como backend)',
            'Estilo de interface': 'Interface web modular sobre backends conectáveis',
            'Licença': 'MIT',
            'Principal trade-off': 'Base de usuários menor que as outras quatro; antes chamado "StableSwarmUI" da Stability AI, antes de um fork independente em 2024',
          },
        ],
        note: 'Este é um resumo de posicionamento baseado na documentação e nos arquivos de licença de cada projeto em 06/09/2026, não um benchmark prático. Veja [Geração local de imagens por IA vs. nuvem](/power-local-llm/local-ai-image-generation-vs-cloud) para a comparação dessas opções locais com ferramentas em nuvem como Midjourney e Adobe Firefly, e a [Análise do Stable Diffusion](/power-local-llm/stable-diffusion-review) para a família de modelos subjacente que todas essas interfaces executam.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o InvokeAI é indicado',
        items: [
          '**Leitor que quer um fluxo de edição não destrutivo baseado em camadas.** A tela unificada é construída em torno de camadas persistentes que você pode revisitar e remascarar, mais próxima de um estúdio de pintura digital do que de um ciclo de gerar e descartar de uma vez só.',
          '**Leitor que quer uma interface polida sem construir um grafo de nós do zero.** A tela do InvokeAI é usável sem conectar nada, embora um editor de nós continue disponível para leitores que o desejem.',
          '**Leitor ou pequeno estúdio que quer a licença de código aberto mais permissiva.** A Apache-2.0 não tem limite de receita nem exigência de copyleft para código construído em cima dela, uma diferença real em relação às licenças da família GPL do ComfyUI e do AUTOMATIC1111 para equipes que desenvolvem ferramentas proprietárias em torno do modelo.',
          '**Leitor que quer controle local total e privacidade.** Uma vez instalado, a geração roda inteiramente na sua própria GPU — nenhuma imagem ou prompt sai da sua máquina.',
          '**Leitor que quer um projeto mantido com uma história de governança clara.** A aquisição da empresa comercial pela Adobe em 2025 não interrompeu o projeto de código aberto; ele continua sob mantenedores da comunidade nomeados e de longa data.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o InvokeAI não é indicado',
        items: [
          '**Leitor que quer o modelo ou nó experimental mais novo no mesmo dia em que é lançado.** É amplamente relatado que o ComfyUI adiciona suporte a grandes lançamentos de modelos abertos no dia do lançamento; a abordagem de integração centrada na tela do InvokeAI ainda não construiu essa mesma reputação de cobertura imediata no dia do lançamento.',
          '**Leitor que quer especificamente um fluxo de trabalho somente de grafo de nós, sem tela.** O InvokeAI inclui um editor de nós, mas seu recurso definidor é a tela unificada — leitores que queiram exclusivamente construir pipelines baseados em nós podem preferir o design centrado em nós do ComfyUI.',
          '**Leitor que dependia da assinatura paga em nuvem da Invoke para colaboração em equipe ou acesso a GPU hospedada.** Esse serviço foi descontinuado em 31 de outubro de 2025; atualmente não há nenhum substituto pago de marca InvokeAI, então avalie outras ferramentas hospedadas ou de colaboração em equipe se essa era a característica decisiva.',
          '**Leitor com hardware de VRAM muito baixa que quer especificamente rodar modelos da classe FLUX.** O FLUX.1 pede pelo menos cerca de 10 GB de VRAM e 32 GB de RAM do sistema, segundo os próprios requisitos publicados pelo InvokeAI; leitores com placas de 4-6 GB devem planejar em torno do SD 1.5, ou usar uma alternativa em nuvem.',
          '**Leitor que quer a maior biblioteca de tutoriais e extensões da comunidade especificamente para Stable Diffusion.** A WebUI do AUTOMATIC1111 tem a história mais longa e o maior volume de tutoriais da comunidade e extensões de terceiros construídos especificamente em torno dela, mesmo que seu próprio ritmo de desenvolvimento principal seja mais lento que o do ComfyUI ou do InvokeAI em 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O InvokeAI é gratuito?',
            a: 'Sim. A Community Edition de código aberto é gratuita para baixar, autohospedar e usar comercialmente sob a licença Apache-2.0, sem limite de receita. A empresa que antes vendia uma versão paga hospedada na nuvem, a Invoke, foi adquirida pela Adobe em outubro de 2025 e encerrou esse serviço em 31 de outubro de 2025 — atualmente não existe nenhum nível pago de marca InvokeAI.',
          },
          {
            q: 'A Adobe comprou o InvokeAI?',
            a: 'A Adobe adquiriu a empresa Invoke, que havia construído uma plataforma comercial hospedada sobre o projeto de código aberto InvokeAI, em outubro de 2025 (anunciado na Adobe MAX 2025). A equipe fundadora da Invoke, incluindo o CEO Kent Keirsey, entrou para o grupo Firefly Foundry da Adobe. O serviço comercial hospedado encerrou suas operações em 31 de outubro de 2025. O projeto de código aberto InvokeAI em si não foi adquirido e continua sob os mantenedores independentes da comunidade Lincoln Stein e Vic (Blessedcoolant).',
          },
          {
            q: 'Qual licença o InvokeAI usa?',
            a: 'O software do InvokeAI tem licença Apache-2.0, uma licença de código aberto permissiva sem limite de receita e sem exigência de copyleft para o código que você construir em cima dela. Isso difere do ComfyUI (GPL-3.0) e da WebUI Stable Diffusion do AUTOMATIC1111 (AGPL-3.0), ambas com termos de copyleft mais rígidos para uso derivado ou em rede. Isto é um resumo, não aconselhamento jurídico — leia o arquivo de licença no GitHub antes de uma decisão de implantação comercial.',
          },
          {
            q: 'O que é a tela unificada do InvokeAI?',
            a: 'A tela unificada é o espaço de trabalho central do InvokeAI, onde cada geração, inpainting ou outpainting se torna uma camada persistente e editável em vez de um resultado descartável de uso único. Os leitores podem mascarar uma região com uma ferramenta de pincel, regenerar apenas essa área e empilhar camadas ao longo do tempo, mais próximo de trabalhar em um editor de imagens por camadas do que em uma única caixa de prompt de gerar e descartar.',
          },
          {
            q: 'Quais modelos o InvokeAI suporta?',
            a: 'De acordo com a documentação atual, o InvokeAI é compatível com Stable Diffusion 1.5, 2.0, SDXL e 3.5 (Medium e Large), várias variantes do FLUX (dev, schnell, Kontext, Krea, Redux, Fill e FLUX.2 Klein), além de modelos mais recentes como CogView4 e Qwen-Image, nos formatos `.ckpt`, `diffusers` e alguns `.gguf`. Essa lista é atualizada com frequência — confira o [repositório GitHub do InvokeAI](https://github.com/invoke-ai/InvokeAI) para a lista atual de modelos compatíveis antes de presumir suporte a um novo lançamento específico.',
          },
          {
            q: 'Quanta VRAM o InvokeAI precisa?',
            a: 'Depende do modelo: o Stable Diffusion 1.5 precisa de apenas 4 GB de VRAM e 8 GB de RAM do sistema, o SDXL pede 8 GB de VRAM e 16 GB de RAM, o FLUX.1 pede cerca de 10 GB de VRAM e 32 GB de RAM, e a variante maior FLUX.2 Klein (9B) pede cerca de 24 GB de VRAM e 32 GB de RAM. São mínimos publicados pela própria documentação do InvokeAI e podem mudar conforme novas variantes de modelos são lançadas.',
          },
          {
            q: 'O InvokeAI é melhor que o ComfyUI ou o AUTOMATIC1111?',
            a: 'Depende do que você valoriza. É amplamente relatado que o ComfyUI adiciona suporte a lançamentos de modelos abertos totalmente novos mais rápido e oferece o controle mais granular em nível de nó; a WebUI do AUTOMATIC1111 tem o maior volume de tutoriais e extensões da comunidade construídos especificamente para Stable Diffusion, embora seu próprio desenvolvimento principal tenha desacelerado em relação aos outros dois em 2026. A vantagem do InvokeAI é sua tela unificada: camadas persistentes e não destrutivas que fazem a edição iterativa parecer mais uma ferramenta de pintura digital, além da licença mais permissiva (Apache-2.0) dos três.',
          },
          {
            q: 'Onde baixar o InvokeAI?',
            a: 'A fonte oficial é o [repositório GitHub invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI), e o caminho de instalação recomendado é o instalador descrito no [guia de instalação do invoke.ai](https://invoke.ai/start-here/installation/), que gerencia automaticamente a configuração do ambiente Python no Windows, macOS e Linux.',
          },
          {
            q: 'O que aconteceu com os planos de assinatura pagos da Invoke?',
            a: 'Foram descontinuados. A Invoke, a empresa que vendia níveis de assinatura pagos hospedados na nuvem ao lado do software gratuito de código aberto, foi adquirida pela Adobe em outubro de 2025, e seu serviço comercial hospedado encerrou as operações em 31 de outubro de 2025. Artigos antigos ou páginas de preços em cache descrevendo planos "Starter", "Indie", "Professional" ou "Enterprise" descrevem, em 2026, um serviço que não existe mais.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O InvokeAI merece sua reputação como a mais orientada a estúdio entre as interfaces comuns de Stable Diffusion, construída em torno de uma tela unificada genuinamente distinta com camadas persistentes e não destrutivas que recompensa leitores que fazem composição iterativa de estilo artístico em vez de geração de prompt único. Sua licença Apache-2.0 é a mais permissiva entre as principais opções, e autohospedar continua totalmente gratuito, sem limite de receita — um fato que vale a pena declarar claramente, dada a quantidade de informações de preços desatualizadas sobre "planos de assinatura da Invoke" que ainda circulam depois que a empresa por trás do serviço comercial hospedado foi adquirida pela Adobe em outubro de 2025 e esse serviço foi encerrado. O próprio projeto de código aberto não fez parte desse acordo e continua com desenvolvimento ativo sob mantenedores da comunidade nomeados. O trade-off honesto: é amplamente relatado que o ComfyUI adiciona suporte a lançamentos de modelos totalmente novos mais rápido, e o AUTOMATIC1111 ainda carrega o maior volume de tutoriais e extensões da comunidade construídos especificamente em torno dele. Para um leitor que quer uma tela polida baseada em camadas e uma licença permissiva sem amarras, o InvokeAI continua sendo uma escolha razoável e, atualmente, gratuita.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[invoke-ai/InvokeAI no GitHub](https://github.com/invoke-ai/InvokeAI) — código-fonte oficial, arquivo de licença, compatibilidade atual de modelos e notas de lançamento.',
          '[InvokeAI — documentação oficial](https://invoke.ai/) — guias de instalação, requisitos do sistema e documentação de recursos.',
          '[Requisitos do sistema do InvokeAI](https://invoke.ai/start-here/system-requirements/) — requisitos oficiais de VRAM, RAM, GPU e sistema operacional por modelo.',
          '[Apache License 2.0 — arquivo LICENSE do InvokeAI no GitHub](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) — texto legal completo da licença de software do InvokeAI.',
          '[Adobe Newsroom — anúncio da Adobe Firefly Foundry](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry) — anúncio oficial da Adobe sobre a entrada da equipe da Invoke.',
          '[LICENSE do ComfyUI no GitHub](https://github.com/comfy-org/ComfyUI/blob/master/LICENSE) — texto da licença GPL-3.0 para comparação.',
          '[LICENSE do AUTOMATIC1111/stable-diffusion-webui no GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — texto da licença AGPL-3.0 para comparação.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Stable Diffusion (2026)](/power-local-llm/stable-diffusion-review) — a família de modelos abertos subjacente que InvokeAI, ComfyUI e AUTOMATIC1111 executam.',
          '[Geração local de imagens por IA vs. nuvem](/power-local-llm/local-ai-image-generation-vs-cloud) — comparação de ferramentas locais de imagem com serviços em nuvem como Midjourney e Adobe Firefly.',
          '[Diretório de software de LLM local 2026](/power-local-llm/local-llm-software-directory) — diretório completo de apps e ferramentas para todas as plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/invokeai-review-hero-ar.webp',
    title: 'مراجعة InvokeAI (2026): استوديو احترافي لـ Stable Diffusion',
    seoTitle: 'InvokeAI 2026: اللوحة الموحدة والطبقات ودليل الأسعار',
    intro:
      'InvokeAI هي واجهة مجانية ومفتوحة المصدر وذاتية الاستضافة لتشغيل نماذج Stable Diffusion وFLUX على وحدة معالجة الرسومات الخاصة بك، مبنية حول "لوحة موحدة" (Unified Canvas) تعتمد على تحرير غير مدمّر قائم على الطبقات، بدلاً من رسم بياني للعقد أو واجهة تبويبات بسيطة. يتم صيانتها من قبل مجتمع مفتوح المصدر بموجب ترخيص Apache-2.0، بعد أن استحوذت Adobe على الشركة التي أنشأتها في الأصل، Invoke، في أكتوبر 2025 وتوقفت خدمتها التجارية المستضافة. تغطي هذه المراجعة ما هي InvokeAI فعلياً، وترخيصها وتكلفتها الحقيقية (لا توجد حالياً أي خطة مدفوعة)، ومتطلبات الأجهزة، والنماذج المدعومة، وكيف تقارَن بـ ComfyUI وAUTOMATIC1111 وFooocus وSwarmUI.',
    metaDescription:
      'مراجعة InvokeAI 2026: استوديو مجاني برخصة Apache-2.0 بلوحة موحدة لـ Stable Diffusion/FLUX. تغطي استحواذ Adobe على Invoke، والنماذج المدعومة حالياً، ومتطلبات VRAM، ومقارنة صادقة مع ComfyUI وAUTOMATIC1111.',
    twitterDescription:
      'مراجعة InvokeAI 2026: استوديو Stable Diffusion ذو اللوحة الموحدة، مجاني ومفتوح المصدر بالكامل (Apache-2.0) منذ استحواذ Adobe على الشركة التي وراءه في أكتوبر 2025. الترخيص ومتطلبات الأجهزة والمقارنة مع ComfyUI وA1111.',
    audience:
      'القراء الذين يقررون ما إذا كانوا سيستضيفون InvokeAI بأنفسهم لتوليد الصور المحلي القائم على الطبقات — تغطي شروط الترخيص، واستحواذ Adobe في 2025 وأثره على الأسعار، ومتطلبات الأجهزة، والمقارنة مع ComfyUI وAUTOMATIC1111 وFooocus.',
    readTime: '11 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'InvokeAI review',
    targetKeywords: [
      'مراجعة invokeai',
      'invokeai مقابل comfyui',
      'سعر invokeai',
      'اللوحة الموحدة invokeai',
      'ترخيص invokeai',
      'متطلبات تشغيل invokeai',
      'invokeai مقابل automatic1111',
      'هل invokeai مجاني',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion 2.0', 'Stable Diffusion XL', 'Stable Diffusion 3.5 Medium', 'Stable Diffusion 3.5 Large', 'FLUX.1 dev', 'FLUX.1 schnell', 'FLUX.1 Kontext', 'FLUX.2 Klein', 'CogView4', 'Qwen-Image'],
    current_hardware_mentioned: ['4 GB VRAM', '8 GB VRAM', '10 GB VRAM', '12 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 3060', 'Apple Silicon M1', 'Intel Arc'],
    leadAnswerBlock:
      '**InvokeAI هي واجهة مجانية ومفتوحة المصدر وذاتية الاستضافة لـ Stable Diffusion وFLUX، مبنية حول لوحة موحدة بطبقات دائمة وغير مدمّرة — تختلف عن الرسم البياني للعقد في ComfyUI وواجهة التبويبات في AUTOMATIC1111.** وهي مرخّصة بموجب Apache-2.0 دون سقف للإيرادات، لذا فإن الاستضافة الذاتية لا تكلف شيئاً سوى أجهزتك الخاصة. الشركة التي سوّقتها تجارياً في الأصل، Invoke، استحوذت عليها Adobe في أكتوبر 2025؛ وتوقفت خدمة الاشتراك السحابي التابعة لها في 31 أكتوبر 2025، ولا توجد حالياً أي خطة مدفوعة نشطة — يستمر المشروع مفتوح المصدر بشكل مستقل تحت رعاية المجتمع. تتراوح متطلبات الأجهزة من 4 جيجابايت VRAM لـ SD 1.5 إلى 24 جيجابايت VRAM للنسخة الأكبر من FLUX.2 Klein — تحقق من المتطلبات الحالية على [invoke.ai](https://invoke.ai/start-here/system-requirements/) قبل شراء الأجهزة.',
    quickAnswerTop: {
      ar: {
        question: 'هل InvokeAI مجاني، وهل توجد خطة مدفوعة؟',
        answer:
          'InvokeAI مجاني تماماً ومفتوح المصدر بموجب ترخيص Apache-2.0، دون سقف للإيرادات للاستخدام التجاري. الشركة التي وراءه، Invoke، استحوذت عليها Adobe في أكتوبر 2025 وأغلقت خدمة اشتراكها السحابي المدفوعة في 31 أكتوبر 2025 — منذ عام 2026 لا توجد أي خطة مدفوعة نشطة؛ ولم يتبقَّ سوى إصدار Community Edition المجاني وذاتي الاستضافة.',
        bullets: [
          'ترخيص Apache-2.0، ذاتي الاستضافة، بلا حد أدنى للإيرادات للاستخدام التجاري.',
          'استحوذت Adobe على Invoke (الشركة) في أكتوبر 2025؛ وانتهت الخدمة السحابية في 31 أكتوبر 2025.',
          'يدعم SD 1.5 وSDXL وSD 3.5 والعديد من نسخ FLUX في واجهة واحدة.',
          'لوحة موحدة بطبقات دائمة لتحرير غير مدمّر بالحذف والإضافة (inpainting/outpainting).',
          'الحد الأدنى للأجهزة: 4 جيجابايت VRAM لـ SD 1.5، وحتى 24 جيجابايت VRAM لنماذج FLUX.2 الأكبر.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هي InvokeAI', anchor: 'what-is-invokeai' },
      { label: 'استحواذ Adobe موضحاً', anchor: 'adobe-acquisition' },
      { label: 'اللوحة الموحدة والطبقات', anchor: 'unified-canvas' },
      { label: 'النماذج المدعومة', anchor: 'model-support' },
      { label: 'كيفية تثبيت InvokeAI', anchor: 'how-to-install' },
      { label: 'الترخيص والتكلفة', anchor: 'license-and-cost' },
      { label: 'متطلبات الأجهزة', anchor: 'hardware-requirements' },
      { label: 'InvokeAI مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن تناسب InvokeAI', anchor: 'who-should-use' },
      { label: 'لمن لا تناسب InvokeAI', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الخلاصة',
        isTldr: true,
        items: [
          'InvokeAI واجهة مجانية ومفتوحة المصدر لتشغيل نماذج Stable Diffusion وFLUX محلياً، مبنية حول لوحة موحدة بتحرير دائم وقائم على الطبقات وغير مدمّر.',
          'مرخّصة بموجب Apache-2.0 — بلا سقف للإيرادات وبلا التزامات copyleft على الكود اللاحق؛ الاستضافة الذاتية لا تكلف شيئاً سوى أجهزتك الخاصة.',
          'استحوذت Adobe على الشركة التي وراء InvokeAI، Invoke، في أكتوبر 2025؛ وتوقفت خدمتها التجارية المستضافة في 31 أكتوبر 2025. لا توجد حالياً أي خطة مدفوعة نشطة.',
          'يستمر المشروع مفتوح المصدر بشكل مستقل تحت رعاية المجتمع، بقيادة القيّمَين طويلَي الأمد Lincoln Stein ([lstein](https://github.com/lstein)) وVic ([Blessedcoolant](https://github.com/blessedcoolant)).',
          'يدعم SD 1.5 وSD 2.0 وSDXL وSD 3.5 والعديد من نسخ FLUX في واجهة واحدة، إضافة إلى نماذج أحدث مثل CogView4 وQwen-Image — تحقق من الدعم الحالي على [GitHub](https://github.com/invoke-ai/InvokeAI) قبل الاعتماد على نموذج معين.',
          'تتغير متطلبات الأجهزة حسب النموذج: 4 جيجابايت VRAM تكفي لـ SD 1.5، ويحتاج SDXL إلى 8 جيجابايت، بينما تحتاج نسخ FLUX الأكبر إلى ما بين 10 و24 جيجابايت حسب النموذج.',
        ],
      },
      whatIsInvokeAI: {
        id: 'what-is-invokeai',
        title: 'ما هي InvokeAI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI هي واجهة مجانية ومفتوحة المصدر لتشغيل نماذج صور Stable Diffusion وFLUX على وحدة معالجة الرسومات الخاصة بك، مبنية حول لوحة موحدة بطبقات دائمة وغير مدمّرة بدلاً من رسم بياني للعقد أو واجهة تبويبات بسيطة.' },
          { type: 'plain-terms', text: 'تخيّلها كاستوديو رسم رقمي لصور الذكاء الاصطناعي — كل عملية توليد تتحول إلى طبقة يمكنك العودة إليها وإخفاء أجزاء منها وإعادة توليدها، بدلاً من نتيجة واحدة إما أن تحتفظ بها أو تتخلص منها.' },
        ],
        content: [
          'InvokeAI هو تطبيق واجهة أمامية يحمّل أوزان نماذج Stable Diffusion وFLUX وينفذ الاستدلال على أجهزتك الخاصة. مثل واجهة AUTOMATIC1111 وComfyUI وFooocus، لا يتضمن أوزان النموذج نفسها — فهي تأتي من Stability AI وBlack Forest Labs وناشري نماذج آخرين، ويتم تنزيلها بشكل منفصل (راجع [مراجعة Stable Diffusion](/power-local-llm/stable-diffusion-review) للاطلاع على خلفية عائلة النماذج الأساسية وشروط ترخيصها الخاصة).',
          'ما يميز InvokeAI هو لوحتها الموحدة: مساحة عمل واحدة تتحول فيها كل عملية توليد أو إعادة تلوين داخلي أو خارجي إلى طبقة دائمة بدلاً من مخرج يمكن التخلص منه. يمكن العودة إلى الطبقات وإعادة إخفاء أجزاء منها وإعادة توليدها لاحقاً، لذا تُعامل الصورة أشبه بتركيبة مستمرة أكثر من كونها عرضاً لمرة واحدة. يستهدف هذا التصميم سير عمل احترافي بأسلوب الاستوديو — أقرب إلى طريقة عمل الفنان الرقمي في محرر صور قائم على الطبقات منه إلى أداة تكتب فيها موجّهاً ثم تنتهي.',
          'بدأ المشروع في أغسطس 2022 كأحد أوائل النسخ المجتمعية المتفرّعة من تطبيق CompVis المرجعي لـ Stable Diffusion، وكان يصونه في البداية Lincoln Stein تحت اسم المستودع `lstein/stable-diffusion` قبل أن يُعاد تسميته إلى InvokeAI. لاحقاً، تشكّلت شركة باسم Invoke حول المشروع لبناء نسخة تجارية مستضافة فوق نفس النواة مفتوحة المصدر — تاريخ هذه الشركة مشمول في القسم التالي، إذ تغيّر بشكل جوهري في عام 2025.',
        ],
      },
      adobeAcquisition: {
        id: 'adobe-acquisition',
        title: 'استحواذ Adobe موضحاً',
        snippetBlocks: [
          { type: 'one-sentence', text: 'استحوذت Adobe على شركة Invoke في أكتوبر 2025؛ وانضم فريقها المؤسس إلى مجموعة Firefly Foundry التابعة لـ Adobe، وتوقفت الخدمة التجارية المستضافة في 31 أكتوبر 2025، ويستمر مشروع InvokeAI مفتوح المصدر بشكل مستقل تحت قيّمي المجتمع.' },
          { type: 'plain-terms', text: 'الشركة التي كانت تبيع سابقاً نسخة مدفوعة مستضافة على السحابة من InvokeAI لم تعد موجودة كشركة منفصلة — فريقها يعمل الآن في Adobe — لكن البرنامج المجاني الذي يمكنك تنزيله وتشغيله بنفسك لم يكن جزءاً من تلك الصفقة، وهو مستمر.' },
        ],
        content: [
          'هذه هي الحقيقة الأهم التي يجب فهمها بشكل صحيح عن InvokeAI في عام 2026، ومن السهل العثور على معلومات قديمة تصفها بشكل خاطئ. أعلنت Adobe في مؤتمر Adobe MAX 2025 (20-21 أكتوبر 2025) أنها استحوذت على Invoke، الشركة التي تقف وراء النسخة التجارية المستضافة على السحابة من InvokeAI، وأن فريقها — بما في ذلك الرئيس التنفيذي Kent Keirsey — انضم إلى مبادرة "Firefly Foundry" الجديدة التابعة لـ Adobe، والتي تساعد الشركات على بناء نماذج توليدية مخصصة فوق أساس Firefly من Adobe.',
          'توقفت منصة Invoke التجارية المستضافة، التي كانت تبيع سابقاً مستويات اشتراك للتوليد السحابي وميزات التعاون الجماعي، عن العمل في 31 أكتوبر 2025. إذا وجدت مقالاً قديماً أو جدول مقارنة أو صفحة أسعار محفوظة تصف خطط اشتراك InvokeAI بمسميات "Starter" أو "Indie" أو "Professional" أو "Enterprise"، فهذا يصف خدمة لم تعد موجودة — لا تخطط ميزانيتك بناءً على تلك الأرقام.',
          'لم يُغلَق مشروع InvokeAI مفتوح المصدر نفسه. انتقلت المسؤولية إلى Lincoln Stein ([lstein](https://github.com/lstein)) وVic ([Blessedcoolant](https://github.com/blessedcoolant))، وهما قيّمان رئيسيان طويلا الأمد شاركا منذ الأيام الأولى للمشروع، واستمر التطوير بشكل مستقل عن Adobe تحت منظمة [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) على GitHub. تغطي هذه المراجعة هذا المشروع المستمر، المجاني وذاتي الاستضافة، مفتوح المصدر — وليس الخدمة التجارية المتوقفة.',
        ],
        note: 'الحقائق الواردة في هذا القسم مستمدة من إعلان Adobe الرسمي في أكتوبر 2025 ومن تقارير مستقلة متعددة من الصحافة التقنية؛ تحقق مباشرة من [github.com/invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) لمعرفة قائمة القيّمين الحالية وحالة المشروع قبل الاعتماد على أي ملخص من طرف ثالث، بما في ذلك هذا الملخص.',
      },
      unifiedCanvas: {
        id: 'unified-canvas',
        title: 'اللوحة الموحدة والطبقات',
        itemHeadings: true,
        columns: ['الميزة', 'ما تفعله'],
        rows: [
          { 'الميزة': 'طبقات دائمة', 'ما تفعله': 'تتحول كل عملية توليد أو إعادة تلوين داخلي أو خارجي إلى طبقتها الخاصة التي تبقى قابلة للتعديل بعد إغلاق المشروع وإعادة فتحه' },
          { 'الميزة': 'الإخفاء بالفرشاة', 'ما تفعله': 'ارسم قناعاً مباشرة على اللوحة للتحكم بدقة في المنطقة التي يُعاد توليدها، بدلاً من استخدام محرر أقنعة منفصل' },
          { 'الميزة': 'إعادة التلوين الداخلي/الخارجي', 'ما تفعله': 'أعد توليد منطقة مُخفاة في مكانها، أو وسّع اللوحة إلى ما بعد حدود الصورة الأصلية، دون بدء مشروع جديد' },
          { 'الميزة': 'تكامل ControlNet', 'ما تفعله': 'وجّه التركيب والوضعية باستخدام نماذج ControlNet مباشرة داخل نفس مساحة عمل اللوحة' },
          { 'الميزة': 'محرر سير عمل قائم على العقد', 'ما تفعله': 'رسم بياني للعقد منفصل واختياري لخطوط الإنتاج المتقدمة أو القابلة للتكرار، للقراء الذين يريدون هذا المستوى من التحكم إلى جانب اللوحة' },
          { 'الميزة': 'إدارة اللوحات والمعرض', 'ما تفعله': 'تنظّم عمليات التوليد في لوحات مع الاحتفاظ بالبيانات الوصفية، بحيث يبقى الموجّه والإعدادات مرتبطين بالصورة التي أنتجتهما' },
        ],
        content: [
          'اللوحة الموحدة هي ما يشير إليه معظم المراجعين والمستخدمين باعتبارها الميزة المحدِّدة لـ InvokeAI مقارنة بـ AUTOMATIC1111 وComfyUI. فبدلاً من توليد صورة واحدة في كل مرة وإعادة استيرادها يدوياً لمزيد من التعديل، تتعامل InvokeAI مع اللوحة كمساحة عمل مستمرة واحدة: يمكنك إخفاء جزء من منطقة، وإعادة توليدها، وإضافة طبقة جديدة فوقها، والتنقل بين هذه الحالات دون مغادرة اللوحة أو فقدان النسخ السابقة.',
          'هذا أقرب حقاً إلى طريقة عمل فنان رقمي محترف في محرر صور قائم على الطبقات، مقارنة بحلقة "التوليد، الفحص، إعادة التوليد" القائمة على التبويبات في واجهة AUTOMATIC1111، أو نهج الرسم البياني للعقد أولاً في ComfyUI، حيث يتطلب تركيب خط إنتاج للتحرير توصيل العقد قبل رؤية أي صورة على الإطلاق. تقدم InvokeAI أيضاً محرر سير عمل قائم على العقد اختيارياً خاصاً بها للقراء الذين يريدون هذا المستوى من التحكم، بحيث تتكامل اللوحة والرسم البياني للعقد بدلاً من أن يستبعد أحدهما الآخر داخل نفس التطبيق.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'النماذج المدعومة',
        content: [
          '**تدعم InvokeAI مجموعة واسعة ومتنامية بنشاط من نماذج الصور والفيديو المفتوحة في واجهة واحدة، بدلاً من أن تُبنى حول عائلة نماذج محددة.** وفقاً لوثائقها الحالية، تشمل نقاط التفتيش والصيغ المدعومة Stable Diffusion 1.5 وStable Diffusion 2.0 وSDXL وStable Diffusion 3.5 (Medium وLarge)، وعدة نسخ من FLUX (dev وschnell وKontext وKrea وRedux وFill وأحدث نسخة FLUX.2 Klein)، بالإضافة إلى CogView4 وQwen-Image. كما تحمّل النماذج بصيغ `.ckpt` و`diffusers` وبعض صيغ `.gguf` المُكمَّمة.',
          'تتغير هذه القائمة بشكل متكرر مع صدور نماذج مفتوحة جديدة، لذا تعامل معها كلقطة وليست جرداً دائماً — تحقق من ملاحظات دعم النماذج الحالية في [مستودع InvokeAI على GitHub](https://github.com/invoke-ai/InvokeAI) أو ملاحظات إصداراته قبل افتراض دعم نموذج جديد محدد في يوم إطلاقه.',
          'تحفظ صادقة، تُتناول بمزيد من التفصيل في قسم "لمن لا تناسب InvokeAI" أدناه: يعطي قيّمو InvokeAI الأولوية لدمج النماذج بشكل نظيف في سير عمل اللوحة الموحدة ومحرر العقد، وهو ما يستغرق عادة وقتاً أطول من مجرد إضافة دعم عبر سطر الأوامر. من المعروف على نطاق واسع أن ComfyUI يضيف دعماً لإصدارات النماذج المفتوحة الكبيرة الجديدة في نفس يوم إطلاقها (ما يُعرف بدعم "اليوم صفر")؛ لم تبنِ InvokeAI حتى الآن نفس السمعة في تغطية يوم الإطلاق الفوري اعتباراً من عام 2026.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'كيفية تثبيت InvokeAI',
        content: [
          'يتّبع تثبيت InvokeAI نفس النمط الأساسي عبر أنظمة التشغيل المدعومة، باستخدام المشغّل الرسمي بدلاً من إعداد يدوي للبيئة.',
        ],
        numberedItems: [
          { title: 'تحقق من وحدة معالجة الرسومات ونظام التشغيل مقابل متطلبات النظام', whyItMatters: 'تعمل InvokeAI على Windows 10 فأحدث، وmacOS 14 فأحدث، وLinux (Ubuntu 20.04 فأحدث مُختبر جيداً)؛ تأكد من أن وحدة معالجة الرسومات وذاكرة VRAM لديك تلبي متطلبات النموذج الذي تخطط لاستخدامه قبل التثبيت.' },
          { title: 'نزّل مشغّل InvokeAI', whyItMatters: 'يتولى المشغّل، المتوفر عبر [دليل التثبيت الرسمي](https://invoke.ai/start-here/installation/) وإصدارات GitHub، إعداد بيئة Python والاعتماديات تلقائياً بدلاً من الحاجة إلى تثبيت يدوي لبيئة افتراضية.' },
          { title: 'ثبّت التطبيق وشغّله', whyItMatters: 'يقوم المشغّل بتثبيت الواجهة الخلفية لـ InvokeAI وفتح واجهة الويب في المتصفح — لا يلزم إعداد خادم ويب منفصل للاستخدام المحلي.' },
          { title: 'نزّل أو اختر نموذجاً', whyItMatters: 'اختر نموذجاً أولياً (مثل نقطة تفتيش SD 1.5 أو SDXL) عبر مدير النماذج المدمج، أو وجّه InvokeAI إلى ملف نموذج قمت بتنزيله بالفعل من Hugging Face أو Civitai.' },
          { title: 'افتح اللوحة الموحدة وابدأ التوليد', whyItMatters: 'أدخل موجّهاً، واضبط الدقة وعدد الخطوات، وولّد مباشرة على اللوحة — عادة ما تكون أول عملية توليد أبطأ أثناء تحميل النموذج إلى VRAM.' },
          { title: 'أضِف ControlNet أو LoRAs أو محرر العقد عند الحاجة', whyItMatters: 'هذه طبقات اختيارية فوق سير العمل الأساسي — يمكن لمعظم القراء تجاهلها في مشاريعهم الأولى وإضافتها بعد الشعور بالراحة مع اللوحة.' },
        ],
        note: 'قد تتغير خطوات التثبيت الدقيقة ومتطلبات حزم النظام (مثل Python 3.11-3.12، وتعريفات وحدة معالجة الرسومات) بين الإصدارات — اتّبع [دليل التثبيت الحالي لـ invoke.ai](https://invoke.ai/start-here/installation/) بدلاً من دليل عام، بما في ذلك هذا الدليل، للحصول على الصياغة الدقيقة للأوامر.',
      },
      licenseAndCost: {
        id: 'license-and-cost',
        title: 'الترخيص والتكلفة',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'إصدار Community Edition مفتوح المصدر من InvokeAI مرخّص بموجب Apache-2.0 دون سقف للإيرادات، وهو مجاني تماماً للاستضافة الذاتية؛ أما مستويات السحابة المدفوعة السابقة للشركة فقد أُوقفت عند استحواذ Adobe على Invoke في أكتوبر 2025.' },
          { type: 'plain-terms', text: 'لا يوجد اليوم سوى نسخة واحدة من InvokeAI يمكنك الحصول عليها فعلياً — النسخة المجانية التي تشغّلها بنفسك — لأن الخدمة السحابية المدفوعة التي كانت تعمل جنباً إلى جنب معها قد أُغلقت.' },
        ],
        columns: ['العنصر', 'الحالة', 'التكلفة'],
        rows: [
          { 'العنصر': 'إصدار Community Edition مفتوح المصدر (ذاتي الاستضافة)', 'الحالة': 'يصونه المجتمع بنشاط', 'التكلفة': 'مجاني — Apache-2.0، بلا سقف للإيرادات' },
          { 'العنصر': 'اشتراك Invoke السحابي (Starter/Indie/Professional/Enterprise)', 'الحالة': 'متوقف — انتهت الخدمة في 31-10-2025', 'التكلفة': 'لا ينطبق — لم يعد متاحاً' },
          { 'العنصر': 'Adobe Firefly Foundry (العمل الحالي للفريق المستحوَذ عليه)', 'الحالة': 'خط منتجات منفصل تابع لـ Adobe، وليس استمراراً لـ InvokeAI', 'التكلفة': 'تحدده Adobe — خارج نطاق هذه المراجعة' },
        ],
        content: [
          'ترخيص برنامج InvokeAI هو Apache-2.0، وهو أحد أكثر تراخيص المصدر المفتوح تساهلاً: يسمح بالاستخدام التجاري والتعديل وإعادة التوزيع دون حد أدنى للإيرادات ودون التزام copyleft بفتح الكود الخاص بك المبني فوقه. هذا ترخيص أكثر تساهلاً بشكل ملحوظ من ComfyUI (GPL-3.0) أو واجهة Stable Diffusion WebUI الخاصة بـ AUTOMATIC1111 (AGPL-3.0)، حيث يحمل كلاهما التزامات copyleft أقوى للاستخدام المشتق أو الشبكي — وهو فرق حقيقي وقابل للتحقق، وليس ادعاءً تسويقياً.',
          'وبما أن استضافة InvokeAI ذاتياً مجانية بموجب هذا الترخيص، فإن التكلفة الوحيدة المستمرة هي أجهزتك الخاصة والكهرباء — نفس بنية التكلفة لأي واجهة أخرى ذاتية الاستضافة لـ Stable Diffusion أو FLUX. لا توجد أي رسوم اشتراك يتتبعها PromptQuorum، وحتى وقت كتابة هذه المراجعة لا توجد أي خطة رسمية مدفوعة تحمل علامة Invoke لمقارنتها بها، لأن الشركة التي كانت تبيع واحدة لم تعد تشغّلها. إذا تغيّر ذلك تحت إدارة جديدة، تحقق من الشروط الحالية مباشرة على [invoke.ai](https://invoke.ai) وفي [مستودع GitHub](https://github.com/invoke-ai/InvokeAI) قبل افتراض أن تفصيل التكاليف هذا لا يزال ساري المفعول.',
        ],
        note: 'تعكس معلومات الترخيص والتكلفة نص ترخيص Apache-2.0 على [github.com/invoke-ai/InvokeAI/blob/main/LICENSE](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) والتغطية الإعلامية العامة حول استحواذ Adobe في أكتوبر 2025، محدثة بتاريخ 06-09-2026. هذه ليست استشارة قانونية — اقرأ ملف الترخيص بنفسك قبل اتخاذ قرار نشر تجاري.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'متطلبات الأجهزة',
        itemHeadings: true,
        columns: ['النموذج', 'الحد الأدنى لـ VRAM', 'الحد الأدنى لذاكرة النظام'],
        rows: [
          { 'النموذج': 'Stable Diffusion 1.5', 'الحد الأدنى لـ VRAM': '4 جيجابايت VRAM', 'الحد الأدنى لذاكرة النظام': '8 جيجابايت RAM' },
          { 'النموذج': 'SDXL', 'الحد الأدنى لـ VRAM': '8 جيجابايت VRAM', 'الحد الأدنى لذاكرة النظام': '16 جيجابايت RAM' },
          { 'النموذج': 'FLUX.1', 'الحد الأدنى لـ VRAM': '10 جيجابايت VRAM', 'الحد الأدنى لذاكرة النظام': '32 جيجابايت RAM' },
          { 'النموذج': 'FLUX.2 Klein (4B)', 'الحد الأدنى لـ VRAM': '12 جيجابايت VRAM', 'الحد الأدنى لذاكرة النظام': '16 جيجابايت RAM' },
          { 'النموذج': 'FLUX.2 Klein (9B)', 'الحد الأدنى لـ VRAM': '24 جيجابايت VRAM', 'الحد الأدنى لذاكرة النظام': '32 جيجابايت RAM' },
        ],
        content: [
          'تعمل InvokeAI على Windows 10 فأحدث، وmacOS 14 فأحدث، وLinux، مع الإشارة تحديداً إلى Ubuntu 20.04 فأحدث كمُختبر جيداً. تُدعم وحدات معالجة الرسومات من NVIDIA بدءاً من سلسلة GTX 10 على Windows وLinux؛ وتُدعم وحدات AMD على Linux فقط؛ وتُدعم وحدات Intel Arc (Alchemist وBattlemage فأحدث) على Windows وLinux x86_64. تعمل أجهزة Mac ذات معالجات Apple Silicon (M1 فأحدث)، مع التوصية بذاكرة موحدة لا تقل عن 16 جيجابايت للاستخدام المريح. التوليد بالاعتماد على المعالج فقط ممكن على أجهزة Linux ARM64 لكنه بطيء دون وحدة معالجة رسومات.',
          'تتطلب InvokeAI بايثون 3.11 أو 3.12 للعمل خارج المشغّل المدمج. يدير المشغّل الرسمي هذا الاعتماد تلقائياً لمعظم القراء، لذا فإن إدارة بيئة بايثون يدوياً اختيارية وليست إلزامية في التثبيتات النموذجية.',
        ],
        note: 'أرقام VRAM وRAM هي حدود دنيا مأخوذة من [صفحة متطلبات النظام في invoke.ai](https://invoke.ai/start-here/system-requirements/) وقد تتغير مع نسخ نماذج جديدة — تعامل معها كإرشاد للتخطيط وتأكد من الأرقام الحالية قبل شراء أجهزة لنموذج معين.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'InvokeAI مقابل البدائل',
        columns: ['الخيار', 'الأفضل لـ', 'أسلوب الواجهة', 'الترخيص', 'المفاضلة الرئيسية'],
        rows: [
          {
            'الخيار': 'InvokeAI',
            'الأفضل لـ': 'تركيب غير مدمّر قائم على الطبقات بواجهة استوديو مصقولة',
            'أسلوب الواجهة': 'لوحة موحدة + محرر عقد اختياري',
            'الترخيص': 'Apache-2.0، بلا سقف للإيرادات',
            'المفاضلة الرئيسية': 'أبطأ عموماً من ComfyUI في إضافة دعم للنماذج الجديدة تماماً',
          },
          {
            'الخيار': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'الأفضل لـ': 'أقصى قدر من التحكم وأسرع دعم لإصدارات النماذج الجديدة تماماً',
            'أسلوب الواجهة': 'رسم بياني للعقد، كل شيء موصّل يدوياً',
            'الترخيص': 'GPL-3.0',
            'المفاضلة الرئيسية': 'أصعب منحنى تعلّم بين الخيارات الشائعة؛ لا توجد لوحة موحدة مدمجة',
          },
          {
            'الخيار': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'الأفضل لـ': 'أكبر نظام إضافات ودروس مجتمعية مخصصة لـ Stable Diffusion تحديداً',
            'أسلوب الواجهة': 'واجهة ويب قائمة على التبويبات',
            'الترخيص': 'AGPL-3.0',
            'المفاضلة الرئيسية': 'وتيرة تطوير أساسية أبطأ من ComfyUI وInvokeAI اعتباراً من 2026؛ لا توجد لوحة طبقات دائمة',
          },
          {
            'الخيار': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'الأفضل لـ': 'أقل عدد من النقرات للوصول إلى أول صورة جيدة، بإعداد بسيط للغاية',
            'أسلوب الواجهة': 'واجهة نافذة واحدة مبسطة وذات خيارات ثابتة',
            'الترخيص': 'GPL-3.0',
            'المفاضلة الرئيسية': 'في وضع دعم طويل الأمد محدود (إصلاح الأخطاء فقط) وفقاً لملف README الخاص به، وSDXL فقط، دون خطط لمعماريات أحدث',
          },
          {
            'الخيار': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)',
            'الأفضل لـ': 'تنسيق متعدد وحدات معالجة الرسومات ومتعدد الأطراف الخلفية (يمكنه تشغيل ComfyUI كطرف خلفي)',
            'أسلوب الواجهة': 'واجهة ويب معيارية فوق أطراف خلفية قابلة للتبديل',
            'الترخيص': 'MIT',
            'المفاضلة الرئيسية': 'قاعدة مستخدمين أصغر من الخيارات الأربعة الأخرى؛ كان يُسمى سابقاً "StableSwarmUI" من Stability AI قبل تفرّع مستقل في 2024',
          },
        ],
        note: 'هذا ملخص لتحديد المواقع استناداً إلى وثائق كل مشروع وملفات الترخيص الخاصة به حتى تاريخ 06-09-2026، وليس اختباراً عملياً. راجع [توليد الصور بالذكاء الاصطناعي محلياً مقابل السحابة](/power-local-llm/local-ai-image-generation-vs-cloud) لمعرفة كيف تقارَن هذه الخيارات المحلية بأدوات سحابية مثل Midjourney وAdobe Firefly، و[مراجعة Stable Diffusion](/power-local-llm/stable-diffusion-review) لعائلة النماذج الأساسية التي تشغّلها كل هذه الواجهات.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن تناسب InvokeAI',
        items: [
          '**القارئ الذي يريد سير عمل تحرير غير مدمّر قائم على الطبقات.** تعتمد اللوحة الموحدة على طبقات دائمة يمكنك العودة إليها وإعادة إخفاء أجزاء منها، أقرب إلى استوديو رسم رقمي منه إلى حلقة توليد وتخلّص لمرة واحدة.',
          '**القارئ الذي يريد واجهة مصقولة دون بناء رسم بياني للعقد من الصفر.** لوحة InvokeAI قابلة للاستخدام دون توصيل أي شيء، مع بقاء محرر العقد متاحاً للقراء الذين يريدونه.',
          '**القارئ أو الاستوديو الصغير الذي يريد أكثر تراخيص المصدر المفتوح تساهلاً.** لا يفرض Apache-2.0 سقفاً للإيرادات ولا التزام copyleft على الكود المبني فوقه، وهو فرق حقيقي مقارنة بتراخيص عائلة GPL في ComfyUI وAUTOMATIC1111 بالنسبة للفرق التي تطوّر أدوات خاصة حول النموذج.',
          '**القارئ الذي يريد تحكماً محلياً كاملاً وخصوصية.** بعد التثبيت، يعمل التوليد بالكامل على وحدة معالجة الرسومات الخاصة بك — لا تغادر أي صورة أو موجّه جهازك.',
          '**القارئ الذي يريد مشروعاً مصاناً بقصة حوكمة واضحة.** لم يوقف استحواذ Adobe على الشركة التجارية في 2025 المشروع مفتوح المصدر؛ فهو مستمر تحت قيّمين معروفين وطويلي الأمد من المجتمع.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا تناسب InvokeAI',
        items: [
          '**القارئ الذي يريد أحدث نموذج أو عقدة تجريبية في نفس يوم صدورها.** من المعروف على نطاق واسع أن ComfyUI يضيف دعماً لإصدارات النماذج المفتوحة الكبيرة الجديدة في يوم إطلاقها؛ لم يبنِ نهج التكامل القائم على اللوحة أولاً في InvokeAI حتى الآن نفس السمعة في التغطية الفورية ليوم الإطلاق.',
          '**القارئ الذي يريد تحديداً سير عمل قائم على العقد فقط دون لوحة.** تتضمن InvokeAI محرر عقد، لكن ميزتها المحدِّدة هي اللوحة الموحدة — قد يفضّل القراء الذين يريدون حصرياً بناء خطوط إنتاج قائمة على العقد تصميم ComfyUI الذي يضع العقد أولاً.',
          '**القارئ الذي كان يعتمد على اشتراك Invoke السحابي المدفوع للتعاون الجماعي أو الوصول إلى وحدات معالجة رسومات مستضافة.** توقفت هذه الخدمة في 31 أكتوبر 2025؛ ولا يوجد حالياً أي بديل مدفوع يحمل علامة InvokeAI، لذا قيّم أدوات أخرى مستضافة أو للتعاون الجماعي إذا كانت تلك هي الميزة الحاسمة.',
          '**القارئ صاحب الأجهزة منخفضة VRAM جداً الذي يريد تحديداً تشغيل نماذج من فئة FLUX.** يتطلب FLUX.1 ما لا يقل عن نحو 10 جيجابايت VRAM و32 جيجابايت من ذاكرة النظام وفقاً للمتطلبات المنشورة من InvokeAI نفسها؛ يجب على القراء ذوي البطاقات من 4-6 جيجابايت التخطيط حول SD 1.5 بدلاً من ذلك، أو استخدام بديل سحابي.',
          '**القارئ الذي يريد أكبر مكتبة دروس وإضافات مجتمعية مخصصة لـ Stable Diffusion تحديداً.** تتمتع واجهة AUTOMATIC1111 بأطول تاريخ وأكبر حجم من الدروس المجتمعية والإضافات من أطراف ثالثة المبنية خصيصاً حولها، حتى وإن كانت وتيرة تطويرها الأساسية أبطأ من ComfyUI أو InvokeAI اعتباراً من 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل InvokeAI مجاني؟',
            a: 'نعم. إصدار Community Edition مفتوح المصدر مجاني للتنزيل والاستضافة الذاتية والاستخدام التجاري بموجب ترخيص Apache-2.0، دون سقف للإيرادات. الشركة التي كانت تبيع سابقاً نسخة مدفوعة مستضافة على السحابة، Invoke، استحوذت عليها Adobe في أكتوبر 2025 وأغلقت تلك الخدمة في 31 أكتوبر 2025 — لا توجد حالياً أي خطة مدفوعة تحمل علامة InvokeAI.',
          },
          {
            q: 'هل اشترت Adobe شركة InvokeAI؟',
            a: 'استحوذت Adobe على شركة Invoke، التي بنت منصة تجارية مستضافة فوق مشروع InvokeAI مفتوح المصدر، في أكتوبر 2025 (أُعلن ذلك في مؤتمر Adobe MAX 2025). انضم الفريق المؤسس لـ Invoke، بما في ذلك الرئيس التنفيذي Kent Keirsey، إلى مجموعة Firefly Foundry التابعة لـ Adobe. توقفت الخدمة التجارية المستضافة عن العمل في 31 أكتوبر 2025. لم يُستحوَذ على مشروع InvokeAI مفتوح المصدر نفسه، وهو مستمر تحت قيّمي المجتمع المستقلَّين Lincoln Stein وVic (Blessedcoolant).',
          },
          {
            q: 'ما الترخيص الذي تستخدمه InvokeAI؟',
            a: 'برنامج InvokeAI مرخّص بموجب Apache-2.0، وهو ترخيص مصدر مفتوح متساهل دون سقف للإيرادات ودون التزام copyleft على الكود الذي تبنيه فوقه. يختلف هذا عن ComfyUI (GPL-3.0) وواجهة Stable Diffusion WebUI الخاصة بـ AUTOMATIC1111 (AGPL-3.0)، حيث يحمل كلاهما شروط copyleft أكثر صرامة للاستخدام المشتق أو الشبكي. هذا ملخص وليس استشارة قانونية — اقرأ ملف الترخيص على GitHub قبل اتخاذ قرار نشر تجاري.',
          },
          {
            q: 'ما هي اللوحة الموحدة في InvokeAI؟',
            a: 'اللوحة الموحدة هي مساحة العمل المركزية في InvokeAI، حيث تتحول كل عملية توليد أو إعادة تلوين داخلي أو خارجي إلى طبقة دائمة وقابلة للتعديل بدلاً من مخرج يمكن التخلص منه لمرة واحدة. يمكن للقراء إخفاء منطقة بأداة فرشاة، وإعادة توليد تلك المنطقة فقط، وتكديس الطبقات بمرور الوقت، وهو أقرب إلى العمل في محرر صور قائم على الطبقات منه إلى صندوق موجّه واحد للتوليد والتخلص.',
          },
          {
            q: 'ما النماذج التي تدعمها InvokeAI؟',
            a: 'وفقاً للوثائق الحالية، تدعم InvokeAI Stable Diffusion 1.5 و2.0 وSDXL و3.5 (Medium وLarge)، وعدة نسخ من FLUX (dev وschnell وKontext وKrea وRedux وFill وFLUX.2 Klein)، إضافة إلى نماذج أحدث مثل CogView4 وQwen-Image، بصيغ `.ckpt` و`diffusers` وبعض صيغ `.gguf`. يتم تحديث هذه القائمة بشكل متكرر — راجع [مستودع InvokeAI على GitHub](https://github.com/invoke-ai/InvokeAI) للحصول على القائمة الحالية للنماذج المدعومة قبل افتراض دعم إصدار جديد محدد.',
          },
          {
            q: 'كم من VRAM تحتاجه InvokeAI؟',
            a: 'يعتمد ذلك على النموذج: يحتاج Stable Diffusion 1.5 إلى 4 جيجابايت VRAM فقط و8 جيجابايت من ذاكرة النظام، ويتطلب SDXL 8 جيجابايت VRAM و16 جيجابايت RAM، ويتطلب FLUX.1 نحو 10 جيجابايت VRAM و32 جيجابايت RAM، بينما تتطلب نسخة FLUX.2 Klein الأكبر (9B) نحو 24 جيجابايت VRAM و32 جيجابايت RAM. هذه حدود دنيا نشرتها وثائق InvokeAI نفسها وقد تتغير مع صدور نسخ نماذج جديدة.',
          },
          {
            q: 'هل InvokeAI أفضل من ComfyUI أو AUTOMATIC1111؟',
            a: 'يعتمد ذلك على ما تقدّره. من المعروف على نطاق واسع أن ComfyUI يضيف دعماً لإصدارات النماذج المفتوحة الجديدة تماماً بأسرع وقت، ويوفّر أدق تحكم على مستوى العقد؛ بينما تمتلك واجهة AUTOMATIC1111 أكبر حجم من الدروس المجتمعية والإضافات المبنية خصيصاً لـ Stable Diffusion، رغم أن تطويرها الأساسي الخاص قد تباطأ مقارنة بالاثنين الآخرين اعتباراً من 2026. تكمن ميزة InvokeAI في لوحتها الموحدة: طبقات دائمة وغير مدمّرة تجعل التحرير التكراري يشبه أداة رسم رقمي أكثر، إضافة إلى أكثر التراخيص الثلاثة تساهلاً (Apache-2.0).',
          },
          {
            q: 'من أين يمكن تنزيل InvokeAI؟',
            a: 'المصدر الرسمي هو [مستودع GitHub الخاص بـ invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI)، ومسار التثبيت الموصى به هو المشغّل الموصوف في [دليل التثبيت الخاص بـ invoke.ai](https://invoke.ai/start-here/installation/)، والذي يتولى إعداد بيئة Python تلقائياً على Windows وmacOS وLinux.',
          },
          {
            q: 'ماذا حدث لخطط الاشتراك المدفوعة الخاصة بـ Invoke؟',
            a: 'تم إيقافها. Invoke، الشركة التي كانت تبيع مستويات اشتراك مدفوعة مستضافة على السحابة إلى جانب البرنامج المجاني مفتوح المصدر، استحوذت عليها Adobe في أكتوبر 2025، وتوقفت خدمتها التجارية المستضافة عن العمل في 31 أكتوبر 2025. المقالات القديمة أو صفحات الأسعار المحفوظة التي تصف خططاً بمسميات "Starter" أو "Indie" أو "Professional" أو "Enterprise" تصف، اعتباراً من عام 2026، خدمة لم تعد موجودة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'تستحق InvokeAI سمعتها كأكثر واجهات Stable Diffusion الشائعة توجهاً نحو الاستوديو، مبنية حول لوحة موحدة مميزة حقاً بطبقات دائمة وغير مدمّرة تكافئ القراء الذين يمارسون تركيباً تكرارياً بأسلوب فني بدلاً من توليد موجّه واحد. ترخيصها Apache-2.0 هو الأكثر تساهلاً بين الخيارات الرئيسية، وتظل الاستضافة الذاتية مجانية تماماً دون سقف للإيرادات — وهي حقيقة تستحق أن تُذكر بوضوح نظراً لكمية معلومات التسعير القديمة عن "خطط اشتراك Invoke" التي لا تزال متداولة بعد أن استحوذت Adobe على الشركة التي وراء الخدمة التجارية المستضافة في أكتوبر 2025 وأغلقت تلك الخدمة. المشروع مفتوح المصدر نفسه لم يكن جزءاً من تلك الصفقة، ويستمر بتطوير نشط تحت قيّمين معروفين من المجتمع. المفاضلة الصادقة: من المعروف على نطاق واسع أن ComfyUI يضيف دعماً لإصدارات النماذج الجديدة تماماً بشكل أسرع، ولا يزال AUTOMATIC1111 يحمل أكبر حجم من الدروس المجتمعية والإضافات المبنية خصيصاً حوله. بالنسبة للقارئ الذي يريد لوحة مصقولة قائمة على الطبقات وترخيصاً متساهلاً دون قيود، تظل InvokeAI خياراً معقولاً ومجانياً حالياً.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[invoke-ai/InvokeAI على GitHub](https://github.com/invoke-ai/InvokeAI) — الكود المصدري الرسمي، وملف الترخيص، ودعم النماذج الحالي، وملاحظات الإصدار.',
          '[InvokeAI — الوثائق الرسمية](https://invoke.ai/) — أدلة التثبيت، ومتطلبات النظام، ووثائق الميزات.',
          '[متطلبات نظام InvokeAI](https://invoke.ai/start-here/system-requirements/) — المتطلبات الرسمية لـ VRAM وRAM ووحدة معالجة الرسومات ونظام التشغيل حسب النموذج.',
          '[Apache License 2.0 — ملف LICENSE الخاص بـ InvokeAI على GitHub](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) — النص القانوني الكامل لترخيص برنامج InvokeAI.',
          '[غرفة أخبار Adobe — إعلان Adobe Firefly Foundry](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry) — الإعلان الرسمي من Adobe حول انضمام فريق Invoke.',
          '[ملف LICENSE الخاص بـ ComfyUI على GitHub](https://github.com/comfy-org/ComfyUI/blob/master/LICENSE) — نص ترخيص GPL-3.0 للمقارنة.',
          '[ملف LICENSE الخاص بـ AUTOMATIC1111/stable-diffusion-webui على GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — نص ترخيص AGPL-3.0 للمقارنة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Stable Diffusion (2026)](/power-local-llm/stable-diffusion-review) — عائلة النماذج المفتوحة الأساسية التي تشغّلها InvokeAI وComfyUI وAUTOMATIC1111.',
          '[توليد الصور بالذكاء الاصطناعي محلياً مقابل السحابة](/power-local-llm/local-ai-image-generation-vs-cloud) — مقارنة أدوات الصور المحلية بخدمات سحابية مثل Midjourney وAdobe Firefly.',
          '[دليل برمجيات LLM المحلية 2026](/power-local-llm/local-llm-software-directory) — دليل شامل للتطبيقات والأدوات على جميع المنصات.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/invokeai-review-hero-zh.webp',
    title: 'InvokeAI评测(2026):专业级Stable Diffusion工作室',
    seoTitle: 'InvokeAI 2026评测:统一画布、图层与定价指南',
    intro:
      'InvokeAI是一款免费、开源、可自托管的界面,用于在自己的GPU上运行Stable Diffusion和FLUX图像模型。它围绕"统一画布"(Unified Canvas)构建,支持基于图层的非破坏性编辑,而不是节点图或简单的选项卡式布局。在最初创建它的公司Invoke于2025年10月被Adobe收购、其商业托管服务终止后,该项目由开源社区在Apache-2.0许可证下维护。本评测涵盖InvokeAI的真实定位、真实的许可与费用(目前没有任何付费方案)、硬件要求、支持的模型,以及与ComfyUI、AUTOMATIC1111、Fooocus和SwarmUI的比较。',
    metaDescription:
      'InvokeAI 2026评测:面向Stable Diffusion/FLUX的免费Apache-2.0统一画布工作室。涵盖Adobe收购Invoke事件、当前支持的模型、VRAM要求,以及与ComfyUI和AUTOMATIC1111的客观比较。',
    twitterDescription:
      'InvokeAI 2026评测:自2025年10月Adobe收购其背后公司以来,这款拥有统一画布的Stable Diffusion工作室依然完全免费、开源(Apache-2.0)。许可证、硬件要求,以及与ComfyUI和A1111的比较。',
    audience:
      '面向正在决定是否自托管InvokeAI以进行基于图层的本地图像生成的读者——涵盖许可条款、2025年Adobe收购事件及其对定价的影响、硬件要求,以及与ComfyUI、AUTOMATIC1111和Fooocus的比较。',
    readTime: '11分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'InvokeAI review',
    targetKeywords: [
      'invokeai 评测',
      'invokeai vs comfyui',
      'invokeai 价格',
      'invokeai 统一画布',
      'invokeai 许可证',
      'invokeai 系统要求',
      'invokeai vs automatic1111',
      'invokeai 是否免费',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion 2.0', 'Stable Diffusion XL', 'Stable Diffusion 3.5 Medium', 'Stable Diffusion 3.5 Large', 'FLUX.1 dev', 'FLUX.1 schnell', 'FLUX.1 Kontext', 'FLUX.2 Klein', 'CogView4', 'Qwen-Image'],
    current_hardware_mentioned: ['4 GB VRAM', '8 GB VRAM', '10 GB VRAM', '12 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 3060', 'Apple Silicon M1', 'Intel Arc'],
    leadAnswerBlock:
      '**InvokeAI是一款免费、开源、可自托管的Stable Diffusion与FLUX界面,围绕拥有持久化、非破坏性图层的统一画布构建——不同于ComfyUI的节点图和AUTOMATIC1111的选项卡式布局。** 它采用Apache-2.0许可证,没有收入上限,因此自托管除了自备硬件外不产生任何费用。最初将其商业化的公司Invoke于2025年10月被Adobe收购;其托管云订阅服务已于2025年10月31日终止运营,目前没有任何在售的付费方案——开源项目在社区主导下独立继续发展。硬件需求从SD 1.5的4 GB VRAM到更大的FLUX.2 Klein变体所需的24 GB VRAM不等——购买硬件前请在[invoke.ai](https://invoke.ai/start-here/system-requirements/)上确认最新要求。',
    quickAnswerTop: {
      zh: {
        question: 'InvokeAI是免费的吗?有付费方案吗?',
        answer:
          'InvokeAI在Apache-2.0许可证下完全免费且开源,商业使用没有收入上限。其背后的公司Invoke已于2025年10月被Adobe收购,并于2025年10月31日关闭了付费云订阅服务——自2026年起已不存在任何在售的付费方案,只剩下免费、可自托管的Community Edition。',
        bullets: [
          'Apache-2.0许可证,自托管,商业使用无收入门槛。',
          'Invoke(公司)于2025年10月被Adobe收购;云服务已于2025年10月31日终止。',
          '在一个界面中支持SD 1.5、SDXL、SD 3.5及多个FLUX变体。',
          '拥有持久化图层的统一画布,支持非破坏性的局部重绘/扩展绘制。',
          '最低硬件要求:SD 1.5为4 GB VRAM,更大的FLUX.2模型最高需24 GB VRAM。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'InvokeAI是什么', anchor: 'what-is-invokeai' },
      { label: 'Adobe收购事件详解', anchor: 'adobe-acquisition' },
      { label: '统一画布与图层', anchor: 'unified-canvas' },
      { label: '支持的模型', anchor: 'model-support' },
      { label: '如何安装InvokeAI', anchor: 'how-to-install' },
      { label: '许可证与费用', anchor: 'license-and-cost' },
      { label: '硬件要求', anchor: 'hardware-requirements' },
      { label: 'InvokeAI与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用InvokeAI', anchor: 'who-should-use' },
      { label: '谁不适合使用InvokeAI', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点速览',
        isTldr: true,
        items: [
          'InvokeAI是一款免费开源界面,用于在本地运行Stable Diffusion和FLUX模型,围绕支持持久化、基于图层、非破坏性编辑的统一画布构建。',
          '它采用Apache-2.0许可证——没有收入上限,对下游代码也没有copyleft义务;自托管除了自备硬件外不产生任何费用。',
          'InvokeAI背后的公司Invoke已于2025年10月被Adobe收购;其商业托管服务已于2025年10月31日终止运营。目前没有任何在售的付费方案。',
          '开源项目在社区主导下独立继续发展,由长期核心维护者Lincoln Stein([lstein](https://github.com/lstein))和Vic([Blessedcoolant](https://github.com/blessedcoolant))领导。',
          '它在一个界面中支持SD 1.5、SD 2.0、SDXL、SD 3.5及多个FLUX变体,以及CogView4、Qwen-Image等更新的模型——在依赖某个特定模型前,请前往[GitHub](https://github.com/invoke-ai/InvokeAI)确认当前支持情况。',
          '硬件需求因模型而异:4 GB VRAM可覆盖SD 1.5,SDXL需要8 GB,更大的FLUX变体则需要10到24 GB不等,具体取决于模型。',
        ],
      },
      whatIsInvokeAI: {
        id: 'what-is-invokeai',
        title: 'InvokeAI是什么',
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI是一款免费开源界面,用于在自己的GPU上运行Stable Diffusion和FLUX图像模型,围绕拥有持久化、非破坏性图层的统一画布构建,而不是节点图或简单的选项卡式布局。' },
          { type: 'plain-terms', text: '可以把它想象成一个用于AI图像的数字绘画工作室——每次生成都会变成一个图层,你可以重新访问、遮罩并重新生成,而不是一个只能保留或丢弃的一次性结果。' },
        ],
        content: [
          'InvokeAI是一个前端应用程序,加载Stable Diffusion和FLUX模型权重并在你自己的硬件上执行推理。与AUTOMATIC1111的Stable Diffusion WebUI、ComfyUI和Fooocus一样,它本身不包含模型权重——这些权重来自Stability AI、Black Forest Labs和其他模型发布方,需要单独下载(有关底层模型系列及其自身许可条款的背景信息,请参见[Stable Diffusion评测](/power-local-llm/stable-diffusion-review))。',
          'InvokeAI的与众不同之处在于其统一画布:一个单一工作区,每次生成、局部重绘或扩展绘制都会变成一个持久化的图层,而不是一次性丢弃的输出。图层可以在之后重新访问、重新遮罩并重新生成,因此一张图像更像是一个持续进行中的合成作品,而不是一次性的渲染结果。这种设计针对的是专业、工作室风格的工作流程——比起单纯输入提示词就完事的工具,更接近数字艺术家在基于图层的图像编辑器中的工作方式。',
          '该项目始于2022年8月,是Stable Diffusion的CompVis参考实现最早的社区分支之一,最初由Lincoln Stein以`lstein/stable-diffusion`这个仓库名维护,后来更名为InvokeAI。后来,一家名为Invoke的公司围绕该项目成立,在同一个开源核心之上构建商业托管版本——这家公司的历史将在下一节介绍,因为它在2025年发生了重大变化。',
        ],
      },
      adobeAcquisition: {
        id: 'adobe-acquisition',
        title: 'Adobe收购事件详解',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Adobe于2025年10月收购了Invoke公司;其创始团队加入了Adobe的Firefly Foundry团队,商业托管服务已于2025年10月31日终止运营,而开源项目InvokeAI则在社区维护者的带领下独立继续发展。' },
          { type: 'plain-terms', text: '曾经销售InvokeAI付费云托管版本的公司作为独立企业已不复存在——其团队现在在Adobe工作——但你可以自行下载并运行的免费软件并不在这笔交易范围内,并将继续发展。' },
        ],
        content: [
          '这是关于2026年InvokeAI最重要的事实,而且很容易找到对此描述有误的过时信息。Adobe在2025年Adobe MAX大会(2025年10月20日至21日)上宣布,已收购Invoke这家InvokeAI商业云托管版本背后的公司,其团队——包括首席执行官Kent Keirsey——已加入Adobe新推出的"Firefly Foundry"计划,该计划帮助企业基于Adobe的Firefly基础构建定制生成式模型。',
          'Invoke此前曾出售用于云端生成和团队协作功能的订阅套餐,其商业托管平台已于2025年10月31日停止运营。如果你发现某篇旧文章、对比表格或缓存的定价页面描述了InvokeAI的"Starter"、"Indie"、"Professional"或"Enterprise"订阅方案,那描述的是一项已不复存在的服务——不要按照那些数字来做预算。',
          '开源项目InvokeAI本身并未终止。项目管理权已移交给Lincoln Stein([lstein](https://github.com/lstein))和Vic([Blessedcoolant](https://github.com/blessedcoolant)),两人都是自项目早期就参与其中的长期核心维护者,开发工作在[invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI)这个GitHub组织下独立于Adobe持续进行。本评测涵盖的是这个仍在持续发展的免费、可自托管的开源项目——而不是已停止的商业服务。',
        ],
        note: '本节事实来自Adobe自身2025年10月的官方公告以及多家独立科技媒体的报道;在信任任何第三方摘要(包括本文)之前,请直接前往[github.com/invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI)确认最新的维护者名单和项目状态。',
      },
      unifiedCanvas: {
        id: 'unified-canvas',
        title: '统一画布与图层',
        itemHeadings: true,
        columns: ['功能', '作用'],
        rows: [
          { '功能': '持久化图层', '作用': '每次生成、局部重绘或扩展绘制都会成为独立的图层,关闭并重新打开项目后仍可编辑' },
          { '功能': '笔刷遮罩', '作用': '直接在画布上绘制遮罩,精确控制哪个区域被重新生成,而不必使用单独的遮罩编辑器' },
          { '功能': '局部重绘/扩展绘制', '作用': '原地重新生成被遮罩的区域,或将画布扩展到原始图像边界之外,而无需新建项目' },
          { '功能': 'ControlNet集成', '作用': '直接在同一个画布工作区内使用ControlNet模型引导构图和姿态' },
          { '功能': '基于节点的工作流编辑器', '作用': '为需要在画布之外获得这种控制级别的读者提供的独立、可选的节点图,用于高级或可重复的生成流程' },
          { '功能': '面板与画廊管理', '作用': '将生成结果整理为保留元数据的面板,使提示词和设置始终与生成它们的图像绑定在一起' },
        ],
        content: [
          '统一画布是大多数评测者和用户认为InvokeAI相对于AUTOMATIC1111和ComfyUI的决定性特征。InvokeAI没有采用一次生成一张图像、然后手动重新导入以进行进一步编辑的方式,而是将画布视为一个连续的单一工作区:你可以遮罩一个区域、重新生成它、在其上添加新图层,并在这些状态之间切换,而无需离开画布或丢失之前的版本。',
          '这确实更接近专业数字艺术家在基于图层的图像编辑器中的工作方式,而不是AUTOMATIC1111 WebUI基于选项卡的"生成、检查、重新生成"循环,也不是ComfyUI那种节点图优先的方式——在ComfyUI中,组建一个编辑流程需要先连接节点,才能看到任何图像。InvokeAI还自带一个可选的节点式工作流编辑器,供希望获得这种控制级别的读者使用,因此在同一应用程序中,画布与节点图是互补关系,而非互斥关系。',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: '支持的模型',
        content: [
          '**InvokeAI在单一界面中支持广泛且持续积极增长的开放权重图像与视频模型,而不是围绕某一个特定模型系列构建。** 根据其现有文档,支持的检查点和格式包括Stable Diffusion 1.5、Stable Diffusion 2.0、SDXL、Stable Diffusion 3.5(Medium和Large)、多个FLUX变体(dev、schnell、Kontext、Krea、Redux、Fill以及较新的FLUX.2 Klein),此外还有CogView4和Qwen-Image。它还能加载`.ckpt`、`diffusers`格式以及部分经过量化的`.gguf`格式模型。',
          '由于新的开放权重模型不断发布,这份列表变化频繁,应将其视为一个快照,而非永久清单——在假定支持某个特定新模型于发布当天可用之前,请前往[InvokeAI的GitHub仓库](https://github.com/invoke-ai/InvokeAI)或其发行说明确认最新的模型支持情况。',
          '下文"谁不适合使用InvokeAI"部分会进一步展开的一个客观说明是:InvokeAI的维护者优先考虑将模型干净地整合进统一画布和节点编辑器工作流,这往往比单纯添加命令行支持耗时更长。业界普遍认为ComfyUI能在主要开放权重新模型发布当天就提供支持(所谓的"零日"支持);截至2026年,InvokeAI尚未在发布当天的即时覆盖方面建立起同样的声誉。',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: '如何安装InvokeAI',
        content: [
          '在所有受支持的操作系统上,安装InvokeAI都遵循大致相同的流程,使用官方启动器,而不是手动配置环境。',
        ],
        numberedItems: [
          { title: '对照系统要求检查你的GPU和操作系统', whyItMatters: 'InvokeAI可在Windows 10及以上、macOS 14及以上,以及Linux(Ubuntu 20.04及以上测试较为充分)上运行;安装前请确认你的GPU和VRAM满足你计划使用的模型的要求。' },
          { title: '下载InvokeAI启动器', whyItMatters: '通过[官方安装指南](https://invoke.ai/start-here/installation/)和GitHub发行版获取的启动器,会自动处理Python环境和依赖项设置,而不需要手动安装虚拟环境。' },
          { title: '安装并启动应用程序', whyItMatters: '启动器会安装InvokeAI的后端,并打开基于浏览器的网页界面——本地使用无需单独配置网页服务器。' },
          { title: '下载或选择一个模型', whyItMatters: '通过内置的模型管理器选择一个起始模型(例如SD 1.5或SDXL检查点),或让InvokeAI指向你已经从Hugging Face或Civitai下载好的模型文件。' },
          { title: '打开统一画布并开始生成', whyItMatters: '输入提示词,设置分辨率和步数,然后直接在画布上生成——在模型加载进VRAM时,首次生成通常会较慢。' },
          { title: '根据需要添加ControlNet、LoRA或节点编辑器', whyItMatters: '这些都是叠加在基础工作流之上的可选图层——大多数读者在最初的几个项目中可以忽略它们,等熟悉画布后再添加。' },
        ],
        note: '具体的安装步骤和系统包要求(例如Python 3.11-3.12、GPU驱动)可能随版本变化——请遵循[invoke.ai的最新安装指南](https://invoke.ai/start-here/installation/)而非通用教程(包括本文)来获取准确的命令语法。',
      },
      licenseAndCost: {
        id: 'license-and-cost',
        title: '许可证与费用',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI的开源Community Edition采用无收入上限的Apache-2.0许可证,自托管完全免费;该公司此前的付费云端方案已在2025年10月Adobe收购Invoke时终止。' },
          { type: 'plain-terms', text: '如今真正能获取到的InvokeAI版本只有一个——即你自己运行的免费版本——因为原本与之并行存在的付费云服务已经关闭。' },
        ],
        columns: ['项目', '状态', '费用'],
        rows: [
          { '项目': '开源Community Edition(自托管)', '状态': '由社区积极维护', '费用': '免费——Apache-2.0,无收入上限' },
          { '项目': 'Invoke云端订阅(Starter/Indie/Professional/Enterprise)', '状态': '已终止——服务于2025年10月31日结束', '费用': '不适用——已不再提供' },
          { '项目': 'Adobe Firefly Foundry(被收购团队当前的工作)', '状态': 'Adobe独立的产品线,而非InvokeAI的延续', '费用': '由Adobe自行定价——不在本评测范围内' },
        ],
        content: [
          'InvokeAI的软件许可证是Apache-2.0,这是可用的最宽松的开源许可证之一:它允许商业使用、修改和再分发,没有收入门槛,也没有要求你必须开源在其之上构建的自有代码的copyleft义务。相比之下,ComfyUI(GPL-3.0)和AUTOMATIC1111的Stable Diffusion WebUI(AGPL-3.0)都带有更强的copyleft义务,适用于衍生使用或网络使用场景——这是一个真实、可核实的差异,而非营销说辞。',
          '由于在此许可证下自托管InvokeAI是免费的,唯一的持续成本就是你自己的硬件和电费——这与任何其他自托管的Stable Diffusion或FLUX界面的成本结构相同。PromptQuorum没有追踪到任何订阅费用,截至本评测时,由于曾经销售付费方案的公司已不再运营该服务,也不存在任何官方Invoke品牌的付费方案可供比较。如果这一情况在新的治理结构下发生变化,请在假定本文的费用细分仍然适用之前,直接在[invoke.ai](https://invoke.ai)和[GitHub仓库](https://github.com/invoke-ai/InvokeAI)上确认最新条款。',
        ],
        note: '许可证与费用信息反映了[github.com/invoke-ai/InvokeAI/blob/main/LICENSE](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE)上的Apache-2.0许可证正文,以及关于2025年10月Adobe收购事件的公开报道,信息截至2026年9月6日。这不是法律建议——在做出商业部署决定之前,请自行阅读许可证文件。',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: '硬件要求',
        itemHeadings: true,
        columns: ['模型', '最低VRAM', '最低系统内存'],
        rows: [
          { '模型': 'Stable Diffusion 1.5', '最低VRAM': '4 GB VRAM', '最低系统内存': '8 GB RAM' },
          { '模型': 'SDXL', '最低VRAM': '8 GB VRAM', '最低系统内存': '16 GB RAM' },
          { '模型': 'FLUX.1', '最低VRAM': '10 GB VRAM', '最低系统内存': '32 GB RAM' },
          { '模型': 'FLUX.2 Klein (4B)', '最低VRAM': '12 GB VRAM', '最低系统内存': '16 GB RAM' },
          { '模型': 'FLUX.2 Klein (9B)', '最低VRAM': '24 GB VRAM', '最低系统内存': '32 GB RAM' },
        ],
        content: [
          'InvokeAI可在Windows 10及以上、macOS 14及以上和Linux上运行,其中Ubuntu 20.04及以上被特别指出测试较为充分。GTX 10系列及以上的NVIDIA GPU在Windows和Linux上均受支持;AMD GPU仅在Linux上受支持;Intel Arc GPU(Alchemist、Battlemage及更新型号)在Windows和Linux x86_64上受支持。搭载Apple Silicon的Mac(M1及更新型号)可以运行,建议配备16 GB以上统一内存以获得流畅体验。仅使用CPU的生成方式在Linux ARM64设备上是可行的,但在没有GPU的情况下速度较慢。',
          'InvokeAI在捆绑启动器之外运行时需要Python 3.11或3.12。对于大多数读者而言,官方启动器会自动管理这一依赖项,因此在典型安装中手动管理Python环境是可选的,而非必需的。',
        ],
        note: 'VRAM和RAM数值是从[invoke.ai的系统要求页面](https://invoke.ai/start-here/system-requirements/)中提取的最低值,可能随新模型变体的推出而变化——请将其作为规划参考,并在为特定模型购买硬件之前确认最新数值。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'InvokeAI与替代方案对比',
        columns: ['选项', '最适合', '界面风格', '许可证', '主要权衡'],
        rows: [
          {
            '选项': 'InvokeAI',
            '最适合': '拥有精致工作室风格界面的基于图层的非破坏性合成',
            '界面风格': '统一画布 + 可选节点编辑器',
            '许可证': 'Apache-2.0,无收入上限',
            '主要权衡': '对全新模型的支持速度通常比ComfyUI慢',
          },
          {
            '选项': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '最适合': '最大程度的控制以及对全新模型发布的最快支持',
            '界面风格': '节点图,一切均需手动连接',
            '许可证': 'GPL-3.0',
            '主要权衡': '主流选项中学习曲线最陡峭;没有内置的统一画布',
          },
          {
            '选项': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            '最适合': '专门针对Stable Diffusion规模最大的扩展生态和社区教程',
            '界面风格': '基于选项卡的网页界面',
            '许可证': 'AGPL-3.0',
            '主要权衡': '截至2026年,核心开发节奏比ComfyUI和InvokeAI更慢;没有持久化图层画布',
          },
          {
            '选项': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '最适合': '以最少点击次数获得第一张满意图像,配置极简',
            '界面风格': '简化的单窗口、决策已固定的界面',
            '许可证': 'GPL-3.0',
            '主要权衡': '根据其自身README,处于有限的长期支持模式(仅修复漏洞),仅支持SDXL,没有支持更新架构的计划',
          },
          {
            '选项': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)',
            '最适合': '多GPU与多后端编排(可将ComfyUI作为后端驱动)',
            '界面风格': '基于可插拔后端的模块化网页界面',
            '许可证': 'MIT',
            '主要权衡': '用户群体比其他四者更小;曾是Stability AI的"StableSwarmUI",于2024年独立分叉',
          },
        ],
        note: '这是截至2026年9月6日基于各项目自身文档和许可证文件得出的定位总结,而非实测基准测试。有关这些本地方案与Midjourney、Adobe Firefly等云端工具的比较,请参见[本地AI图像生成与云端对比](/power-local-llm/local-ai-image-generation-vs-cloud);有关这些界面背后共同运行的模型系列,请参见[Stable Diffusion评测](/power-local-llm/stable-diffusion-review)。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用InvokeAI',
        items: [
          '**希望获得基于图层的非破坏性编辑工作流的读者。** 统一画布围绕可重新访问和重新遮罩的持久化图层构建,比起一次性的生成-丢弃循环,更接近数字绘画工作室。',
          '**希望获得精致界面而不必从零搭建节点图的读者。** InvokeAI的画布无需任何连线即可使用,同时仍为需要这种控制级别的读者保留了节点编辑器。',
          '**希望获得最宽松开源许可证的读者或小型工作室。** Apache-2.0没有收入上限,也没有要求开源在其之上构建的代码的copyleft义务——对于围绕该模型开发专有工具的团队而言,这与ComfyUI和AUTOMATIC1111所采用的GPL系列许可证是一个实质性差异。',
          '**希望获得完全本地控制和隐私保护的读者。** 安装完成后,生成过程完全在你自己的GPU上运行——没有任何图像或提示词会离开你的机器。',
          '**希望使用治理结构清晰、有人持续维护的项目的读者。** 2025年Adobe对商业公司的收购并未终止开源项目;该项目在具名、长期的社区维护者带领下继续发展。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用InvokeAI',
        items: [
          '**希望在最新实验性模型或节点发布当天就能使用的读者。** 业界普遍认为ComfyUI能在主要开放权重新模型发布当天就提供支持;InvokeAI以画布为核心的整合方式尚未在发布当天的即时覆盖方面建立起同样的声誉。',
          '**特别希望获得纯节点图工作流、不需要画布的读者。** InvokeAI包含节点编辑器,但其决定性特征是统一画布——只想专门构建基于节点的流程的读者,可能更偏好以节点为先的ComfyUI设计。',
          '**曾依赖Invoke付费云托管订阅进行团队协作或获取托管GPU访问的读者。** 该服务已于2025年10月31日终止;目前没有任何InvokeAI品牌的付费替代方案,如果这曾是你选择的决定性功能,请评估其他托管工具或团队协作工具。',
          '**特别希望运行FLUX级别模型、但硬件VRAM非常有限的读者。** 根据InvokeAI自身公布的要求,FLUX.1最低大约需要10 GB VRAM和32 GB系统内存;拥有4-6 GB显卡的读者应转而围绕SD 1.5进行规划,或使用云端替代方案。',
          '**希望获得专门针对Stable Diffusion规模最大的社区教程和扩展库的读者。** AUTOMATIC1111的WebUI拥有最悠久的历史,以及围绕它专门构建的最大数量的社区教程和第三方扩展,尽管截至2026年其自身的核心开发节奏比ComfyUI或InvokeAI更慢。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'InvokeAI是免费的吗?',
            a: '是的。开源Community Edition可在Apache-2.0许可证下免费下载、自托管并用于商业用途,没有收入上限。此前销售付费云托管版本的公司Invoke已于2025年10月被Adobe收购,并于2025年10月31日关闭了该服务——目前不存在任何InvokeAI品牌的付费方案。',
          },
          {
            q: 'Adobe收购了InvokeAI吗?',
            a: 'Adobe于2025年10月收购了在开源项目InvokeAI之上构建了商业托管平台的Invoke公司(在2025年Adobe MAX大会上宣布)。Invoke的创始团队(包括首席执行官Kent Keirsey)已加入Adobe的Firefly Foundry团队。商业托管服务已于2025年10月31日停止运营。开源项目InvokeAI本身并未被收购,由独立的社区维护者Lincoln Stein和Vic(Blessedcoolant)继续维护。',
          },
          {
            q: 'InvokeAI使用什么许可证?',
            a: 'InvokeAI的软件采用Apache-2.0许可证,这是一种宽松的开源许可证,没有收入上限,对你在其之上构建的代码也没有copyleft要求。这与ComfyUI(GPL-3.0)和AUTOMATIC1111的Stable Diffusion WebUI(AGPL-3.0)不同,两者对衍生使用或网络使用都有更严格的copyleft条款。这只是一个摘要,并非法律建议——在做出商业部署决定之前,请在GitHub上阅读许可证文件。',
          },
          {
            q: 'InvokeAI的统一画布是什么?',
            a: '统一画布是InvokeAI的核心工作区,每次生成、局部重绘或扩展绘制都会变成一个持久化、可编辑的图层,而不是一次性可丢弃的输出。读者可以用笔刷工具遮罩某个区域,只重新生成该区域,并随时间叠加图层——这比单一的生成-丢弃提示词框更接近在基于图层的图像编辑器中工作。',
          },
          {
            q: 'InvokeAI支持哪些模型?',
            a: '根据现有文档,InvokeAI支持Stable Diffusion 1.5、2.0、SDXL和3.5(Medium和Large)、多个FLUX变体(dev、schnell、Kontext、Krea、Redux、Fill和FLUX.2 Klein),以及CogView4、Qwen-Image等更新的模型,支持`.ckpt`、`diffusers`格式以及部分`.gguf`格式。此列表更新频繁——在假定支持某个特定新发布模型之前,请前往[InvokeAI的GitHub仓库](https://github.com/invoke-ai/InvokeAI)确认当前支持的模型列表。',
          },
          {
            q: 'InvokeAI需要多少VRAM?',
            a: '这取决于模型:Stable Diffusion 1.5只需4 GB VRAM和8 GB系统内存,SDXL需要8 GB VRAM和16 GB内存,FLUX.1大约需要10 GB VRAM和32 GB内存,而更大的FLUX.2 Klein变体(9B)大约需要24 GB VRAM和32 GB内存。这些是InvokeAI自身文档发布的最低值,可能随新模型变体的推出而变化。',
          },
          {
            q: 'InvokeAI比ComfyUI或AUTOMATIC1111更好吗?',
            a: '这取决于你看重什么。业界普遍认为ComfyUI对全新开放权重模型发布的支持速度最快,并提供最精细的节点级控制;AUTOMATIC1111的WebUI拥有专门针对Stable Diffusion构建的最大数量社区教程和扩展,尽管截至2026年其自身的核心开发相对另外两者已经放缓。InvokeAI的优势在于其统一画布:持久化、非破坏性的图层让迭代编辑更像使用数字绘画工具,再加上三者中最宽松的许可证(Apache-2.0)。',
          },
          {
            q: '在哪里下载InvokeAI?',
            a: '官方来源是[invoke-ai/InvokeAI GitHub仓库](https://github.com/invoke-ai/InvokeAI),推荐的安装方式是[invoke.ai安装指南](https://invoke.ai/start-here/installation/)中描述的启动器,它会在Windows、macOS和Linux上自动处理Python环境配置。',
          },
          {
            q: 'Invoke的付费订阅方案怎么了?',
            a: '已经终止。曾在免费开源软件之外销售付费云托管订阅套餐的Invoke公司,已于2025年10月被Adobe收购,其商业托管服务已于2025年10月31日停止运营。描述"Starter"、"Indie"、"Professional"或"Enterprise"方案的旧文章或缓存的定价页面,截至2026年描述的都是一项已不复存在的服务。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'InvokeAI凭借其真正独特的、拥有持久化非破坏性图层的统一画布,在主流Stable Diffusion界面中赢得了最偏向工作室风格的声誉,尤其适合进行迭代式、艺术风格合成而非一次性提示词生成的读者。其Apache-2.0许可证是主要选项中最宽松的,自托管在没有收入上限的情况下依然完全免费——鉴于在商业托管服务背后的公司于2025年10月被Adobe收购、该服务随之终止后,关于"Invoke订阅方案"的过时定价信息仍在流传,这一点值得明确说明。开源项目本身并不在那笔交易范围内,而是在具名的社区维护者带领下持续积极开发。诚实地说,其中的权衡在于:业界普遍认为ComfyUI对全新模型发布的支持更快,而AUTOMATIC1111仍然拥有围绕它专门构建的最大数量社区教程和扩展。对于希望获得精致的基于图层画布、以及不附加任何条件的宽松许可证的读者而言,InvokeAI依然是一个合理且目前免费的选择。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[GitHub上的invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI)——官方源代码、许可证文件、当前模型支持情况和发行说明。',
          '[InvokeAI——官方文档](https://invoke.ai/)——安装指南、系统要求和功能文档。',
          '[InvokeAI系统要求](https://invoke.ai/start-here/system-requirements/)——按模型划分的官方VRAM、RAM、GPU和操作系统要求。',
          '[Apache License 2.0——GitHub上的InvokeAI LICENSE文件](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE)——InvokeAI软件许可证的完整法律文本。',
          '[Adobe新闻中心——Adobe Firefly Foundry公告](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry)——Adobe关于Invoke团队加入的官方公告。',
          '[GitHub上的ComfyUI LICENSE](https://github.com/comfy-org/ComfyUI/blob/master/LICENSE)——用于比较的GPL-3.0许可证文本。',
          '[GitHub上的AUTOMATIC1111/stable-diffusion-webui LICENSE](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt)——用于比较的AGPL-3.0许可证文本。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Stable Diffusion评测(2026)](/power-local-llm/stable-diffusion-review)——InvokeAI、ComfyUI和AUTOMATIC1111共同运行的底层开放权重模型系列。',
          '[本地AI图像生成与云端对比](/power-local-llm/local-ai-image-generation-vs-cloud)——本地图像工具与Midjourney、Adobe Firefly等云端服务的比较。',
          '[本地LLM软件目录2026](/power-local-llm/local-llm-software-directory)——覆盖所有平台的全面应用与工具目录。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/invokeai-review-hero-ko.webp',
    title: 'InvokeAI 리뷰(2026): 전문가급 Stable Diffusion 스튜디오',
    seoTitle: 'InvokeAI 2026: 통합 캔버스, 레이어, 가격 가이드',
    intro:
      'InvokeAI는 자신의 GPU에서 Stable Diffusion과 FLUX 이미지 모델을 실행하기 위한 무료 오픈소스 셀프 호스팅 인터페이스로, 노드 그래프나 단순한 탭 레이아웃 대신 레이어 기반의 비파괴 편집을 지원하는 "통합 캔버스(Unified Canvas)"를 중심으로 설계되었습니다. 원래 InvokeAI를 만든 회사인 Invoke가 2025년 10월 Adobe에 인수되고 상용 호스팅 서비스가 종료된 이후에는 Apache-2.0 라이선스 하에 오픈소스 커뮤니티가 유지 관리하고 있습니다. 이 리뷰에서는 InvokeAI가 실제로 무엇인지, 실제 라이선스와 비용(현재 유료 요금제는 존재하지 않음), 하드웨어 요구사항, 지원 모델, 그리고 ComfyUI, AUTOMATIC1111, Fooocus, SwarmUI와의 비교를 다룹니다.',
    metaDescription:
      'InvokeAI 2026 리뷰: Stable Diffusion/FLUX를 위한 무료 Apache-2.0 통합 캔버스 스튜디오. Adobe의 Invoke 인수, 현재 지원 모델, VRAM 요구사항, ComfyUI 및 AUTOMATIC1111과의 정직한 비교.',
    twitterDescription:
      'InvokeAI 2026 리뷰: 2025년 10월 Adobe가 개발사를 인수한 이후에도 완전 무료·오픈소스(Apache-2.0)로 남아있는 통합 캔버스 기반 Stable Diffusion 스튜디오. 라이선스, 하드웨어 요구사항, ComfyUI 및 A1111과의 비교.',
    audience:
      '레이어 기반 로컬 이미지 생성을 위해 InvokeAI를 셀프 호스팅할지 고민하는 독자 대상 — 라이선스 조건, 2025년 Adobe 인수와 가격에 미친 영향, 하드웨어 요구사항, ComfyUI·AUTOMATIC1111·Fooocus와의 비교를 다룬다.',
    readTime: '11분 소요',
    educationalLevel: 'Intermediate',
    primaryTerm: 'InvokeAI review',
    targetKeywords: [
      'invokeai 리뷰',
      'invokeai vs comfyui',
      'invokeai 가격',
      'invokeai 통합 캔버스',
      'invokeai 라이선스',
      'invokeai 시스템 요구사항',
      'invokeai vs automatic1111',
      'invokeai 무료',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion 2.0', 'Stable Diffusion XL', 'Stable Diffusion 3.5 Medium', 'Stable Diffusion 3.5 Large', 'FLUX.1 dev', 'FLUX.1 schnell', 'FLUX.1 Kontext', 'FLUX.2 Klein', 'CogView4', 'Qwen-Image'],
    current_hardware_mentioned: ['4 GB VRAM', '8 GB VRAM', '10 GB VRAM', '12 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 3060', 'Apple Silicon M1', 'Intel Arc'],
    leadAnswerBlock:
      '**InvokeAI는 영구적이고 비파괴적인 레이어를 중심으로 한 통합 캔버스를 갖춘 무료 오픈소스 셀프 호스팅 Stable Diffusion/FLUX 인터페이스입니다. ComfyUI의 노드 그래프나 AUTOMATIC1111의 탭 기반 레이아웃과는 다릅니다.** 수익 상한선이 없는 Apache-2.0 라이선스로 제공되므로, 셀프 호스팅은 자신의 하드웨어 비용 외에는 아무 비용도 들지 않습니다. 이를 원래 상용화했던 회사 Invoke는 2025년 10월 Adobe에 인수되었으며, 호스팅형 클라우드 구독 서비스는 2025년 10월 31일에 종료되었고, 현재 활성화된 유료 요금제는 존재하지 않습니다 — 오픈소스 프로젝트는 커뮤니티 주도로 독립적으로 계속됩니다. 하드웨어 요구사항은 SD 1.5의 4GB VRAM부터 더 큰 FLUX.2 Klein 변형의 24GB VRAM까지 다양합니다 — 하드웨어를 구매하기 전에 [invoke.ai](https://invoke.ai/start-here/system-requirements/)에서 최신 요구사항을 확인하세요.',
    quickAnswerTop: {
      ko: {
        question: 'InvokeAI는 무료인가요? 유료 요금제가 있나요?',
        answer:
          'InvokeAI는 Apache-2.0 라이선스 하에 완전히 무료이며 오픈소스이고, 상업적 사용에 수익 상한선이 없습니다. 그 배후 회사인 Invoke는 2025년 10월 Adobe에 인수되었으며 2025년 10월 31일에 유료 클라우드 구독 서비스를 종료했습니다 — 2026년 기준으로 활성화된 유료 요금제는 없으며, 무료로 셀프 호스팅할 수 있는 Community Edition만 남아 있습니다.',
        bullets: [
          'Apache-2.0 라이선스, 셀프 호스팅, 상업적 사용에 수익 임계값 없음.',
          'Invoke(회사)는 2025년 10월 Adobe에 인수되었으며, 클라우드 서비스는 2025년 10월 31일에 종료됨.',
          '하나의 인터페이스에서 SD 1.5, SDXL, SD 3.5 및 여러 FLUX 변형을 지원.',
          '비파괴적 인페인팅/아웃페인팅을 위한 영구 레이어를 갖춘 통합 캔버스.',
          '최소 하드웨어: SD 1.5는 4GB VRAM, 더 큰 FLUX.2 모델은 최대 24GB VRAM 필요.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'InvokeAI란 무엇인가', anchor: 'what-is-invokeai' },
      { label: 'Adobe 인수 설명', anchor: 'adobe-acquisition' },
      { label: '통합 캔버스와 레이어', anchor: 'unified-canvas' },
      { label: '지원 모델', anchor: 'model-support' },
      { label: 'InvokeAI 설치 방법', anchor: 'how-to-install' },
      { label: '라이선스와 비용', anchor: 'license-and-cost' },
      { label: '하드웨어 요구사항', anchor: 'hardware-requirements' },
      { label: 'InvokeAI 대 대안', anchor: 'vs-alternatives' },
      { label: 'InvokeAI가 적합한 사람', anchor: 'who-should-use' },
      { label: 'InvokeAI가 적합하지 않은 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '요약',
        isTldr: true,
        items: [
          'InvokeAI는 Stable Diffusion과 FLUX 모델을 로컬에서 실행하기 위한 무료 오픈소스 인터페이스로, 영구적이고 레이어 기반이며 비파괴적인 편집을 지원하는 통합 캔버스를 중심으로 구축되었다.',
          'Apache-2.0 라이선스 하에 제공되며 — 수익 상한선이 없고 후속 코드에 대한 카피레프트 의무도 없어, 셀프 호스팅은 자신의 하드웨어 외에는 비용이 들지 않는다.',
          'InvokeAI의 배후 회사인 Invoke는 2025년 10월 Adobe에 인수되었으며, 상용 호스팅 서비스는 2025년 10월 31일에 종료되었다. 현재 활성화된 유료 요금제는 존재하지 않는다.',
          '오픈소스 프로젝트는 오랜 공동 관리자인 Lincoln Stein([lstein](https://github.com/lstein))과 Vic([Blessedcoolant](https://github.com/blessedcoolant))의 주도로 커뮤니티 하에 독립적으로 계속된다.',
          '하나의 인터페이스에서 SD 1.5, SD 2.0, SDXL, SD 3.5 및 여러 FLUX 변형을 지원하며, CogView4와 Qwen-Image 같은 더 새로운 모델도 지원한다 — 특정 모델에 의존하기 전에 [GitHub](https://github.com/invoke-ai/InvokeAI)에서 현재 지원 여부를 확인할 것.',
          '하드웨어 요구사항은 모델에 따라 다르다: SD 1.5는 4GB VRAM으로 충분하고, SDXL은 8GB가 필요하며, 더 큰 FLUX 변형은 모델에 따라 10~24GB가 필요하다.',
        ],
      },
      whatIsInvokeAI: {
        id: 'what-is-invokeai',
        title: 'InvokeAI란 무엇인가',
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI는 자신의 GPU에서 Stable Diffusion과 FLUX 이미지 모델을 실행하기 위한 무료 오픈소스 인터페이스로, 노드 그래프나 단순한 탭 레이아웃 대신 영구적이고 비파괴적인 레이어를 중심으로 한 통합 캔버스를 갖추고 있다.' },
          { type: 'plain-terms', text: 'AI 이미지를 위한 디지털 회화 스튜디오라고 생각하면 됩니다 — 각 생성 결과는 유지하거나 버리는 것만 가능한 일회성 결과물이 아니라, 다시 방문하고 마스킹하고 재생성할 수 있는 레이어가 됩니다.' },
        ],
        content: [
          'InvokeAI는 Stable Diffusion과 FLUX 모델 가중치를 불러와 자신의 하드웨어에서 추론을 실행하는 프런트엔드 애플리케이션입니다. AUTOMATIC1111의 Stable Diffusion WebUI, ComfyUI, Fooocus와 마찬가지로 모델 가중치 자체는 포함되어 있지 않으며 — 이는 Stability AI, Black Forest Labs 및 기타 모델 배포처에서 제공되어 별도로 다운로드해야 합니다(기본이 되는 모델 계열과 그 자체 라이선스 조건에 대한 배경 지식은 [Stable Diffusion 리뷰](/power-local-llm/stable-diffusion-review) 참고).',
          'InvokeAI를 차별화하는 것은 통합 캔버스입니다: 모든 생성, 인페인팅, 아웃페인팅이 일회용 출력물이 아니라 영구적인 레이어가 되는 단일 작업 공간입니다. 레이어는 나중에 다시 방문하고, 다시 마스킹하고, 다시 생성할 수 있어, 이미지는 한 번의 렌더링이라기보다는 진행 중인 합성 작업처럼 다뤄집니다. 이 설계는 프롬프트만 입력하면 끝나는 도구보다는 레이어 기반 이미지 편집기에서 디지털 아티스트가 작업하는 방식에 더 가까운, 전문적이고 스튜디오 스타일의 워크플로를 지향합니다.',
          '이 프로젝트는 2022년 8월, Stable Diffusion의 CompVis 참조 구현에서 가장 초기의 커뮤니티 포크 중 하나로 시작되었으며, 처음에는 Lincoln Stein이 `lstein/stable-diffusion`이라는 저장소 이름으로 관리하다가 이후 InvokeAI로 이름이 바뀌었습니다. 이후 Invoke라는 회사가 같은 오픈소스 코어 위에 상용 호스팅 버전을 구축하기 위해 프로젝트를 중심으로 결성되었습니다 — 이 회사의 역사는 2025년에 큰 변화를 겪었기 때문에 다음 섹션에서 다룹니다.',
        ],
      },
      adobeAcquisition: {
        id: 'adobe-acquisition',
        title: 'Adobe 인수 설명',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Adobe는 2025년 10월 Invoke 회사를 인수했다. 창립 팀은 Adobe의 Firefly Foundry 그룹에 합류했고, 상용 호스팅 서비스는 2025년 10월 31일에 종료되었으며, 오픈소스 프로젝트 InvokeAI는 커뮤니티 관리자들 아래에서 독립적으로 계속된다.' },
          { type: 'plain-terms', text: '한때 InvokeAI의 유료 클라우드 호스팅 버전을 판매하던 회사는 더 이상 별도의 기업으로 존재하지 않습니다 — 그 팀은 이제 Adobe에서 일합니다 — 하지만 직접 다운로드하여 실행할 수 있는 무료 소프트웨어는 이 거래에 포함되지 않았으며 계속 유지됩니다.' },
        ],
        content: [
          '이것이 2026년 InvokeAI에 대해 정확히 알아야 할 가장 중요한 사실이며, 이를 잘못 설명하는 오래된 정보를 찾기는 쉽습니다. Adobe는 2025년 Adobe MAX(2025년 10월 20~21일)에서 InvokeAI의 상용 클라우드 호스팅 버전을 담당했던 회사 Invoke를 인수했으며, CEO Kent Keirsey를 포함한 그 팀이 기업들이 Adobe의 Firefly 기반 위에 맞춤형 생성 모델을 구축하도록 돕는 새로운 "Firefly Foundry" 이니셔티브에 합류했다고 발표했습니다.',
          '이전에 클라우드 기반 생성 및 팀 협업 기능을 위한 구독 등급을 판매하던 Invoke의 상용 호스팅 플랫폼은 2025년 10월 31일에 운영을 종료했습니다. "Starter", "Indie", "Professional" 또는 "Enterprise" InvokeAI 구독 요금제를 설명하는 오래된 기사, 비교표, 또는 캐시된 가격 페이지를 발견한다면, 이는 더 이상 존재하지 않는 서비스를 설명하는 것입니다 — 그 수치를 기준으로 예산을 세우지 마세요.',
          '오픈소스 프로젝트 InvokeAI 자체는 종료되지 않았습니다. 관리 책임은 프로젝트 초창기부터 참여해온 오랜 핵심 관리자인 Lincoln Stein([lstein](https://github.com/lstein))과 Vic([Blessedcoolant](https://github.com/blessedcoolant))에게 넘어갔으며, 개발은 [invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) GitHub 조직 아래에서 Adobe와 독립적으로 계속되고 있습니다. 이 리뷰는 종료된 상용 서비스가 아니라, 계속 진행 중인 이 무료 셀프 호스팅 오픈소스 프로젝트를 다룹니다.',
        ],
        note: '이 섹션의 사실은 Adobe 자체의 2025년 10월 공식 발표와 여러 독립적인 기술 언론 보도를 바탕으로 합니다. 이 글을 포함한 어떤 제3자 요약도 신뢰하기 전에 [github.com/invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI)에서 최신 관리자 목록과 프로젝트 상태를 직접 확인하세요.',
      },
      unifiedCanvas: {
        id: 'unified-canvas',
        title: '통합 캔버스와 레이어',
        itemHeadings: true,
        columns: ['기능', '작동 방식'],
        rows: [
          { '기능': '영구 레이어', '작동 방식': '모든 생성, 인페인팅, 아웃페인팅이 각각의 레이어가 되며, 프로젝트를 닫았다가 다시 열어도 편집 가능한 상태를 유지한다' },
          { '기능': '브러시 기반 마스킹', '작동 방식': '별도의 마스크 편집기를 사용하는 대신 캔버스에 직접 마스크를 그려 어느 영역을 재생성할지 정확히 제어한다' },
          { '기능': '인페인팅/아웃페인팅', '작동 방식': '새 프로젝트를 시작하지 않고도 마스킹된 영역을 제자리에서 재생성하거나, 원본 이미지 경계 너머로 캔버스를 확장한다' },
          { '기능': 'ControlNet 통합', '작동 방식': '동일한 캔버스 작업 공간 내에서 직접 ControlNet 모델을 사용해 구도와 포즈를 유도한다' },
          { '기능': '노드 기반 워크플로 편집기', '작동 방식': '캔버스 외에 이 정도의 제어 수준을 원하는 독자를 위한, 고급 또는 반복 가능한 파이프라인용 별도의 선택적 노드 그래프' },
          { '기능': '보드 및 갤러리 관리', '작동 방식': '메타데이터가 보존된 보드로 생성물을 정리하여, 프롬프트와 설정이 그것을 생성한 이미지에 계속 연결되어 있게 한다' },
        ],
        content: [
          '통합 캔버스는 대부분의 리뷰어와 사용자가 AUTOMATIC1111 및 ComfyUI 대비 InvokeAI의 결정적인 특징으로 꼽는 요소입니다. 한 번에 하나의 이미지를 생성하고 추가 편집을 위해 수동으로 다시 가져오는 대신, InvokeAI는 캔버스를 하나의 연속적인 작업 공간으로 취급합니다: 특정 영역을 마스킹하고, 재생성하고, 그 위에 새 레이어를 추가하고, 캔버스를 벗어나거나 이전 버전을 잃지 않고도 이러한 상태들 사이를 이동할 수 있습니다.',
          '이는 AUTOMATIC1111 WebUI의 탭 기반 "생성, 확인, 재생성" 루프나, 편집 파이프라인을 구성하려면 이미지를 보기도 전에 노드를 연결해야 하는 ComfyUI의 노드 그래프 우선 방식보다, 전문 디지털 아티스트가 레이어 기반 이미지 편집기에서 작업하는 방식에 진정으로 더 가깝습니다. InvokeAI는 또한 이러한 제어 수준을 원하는 독자를 위해 자체적인 선택적 노드 기반 워크플로 편집기를 함께 제공하므로, 같은 애플리케이션 내에서 캔버스와 노드 그래프는 서로 배타적이 아니라 상호 보완적입니다.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: '지원 모델',
        content: [
          '**InvokeAI는 특정 모델 계열을 중심으로 구축된 것이 아니라, 하나의 인터페이스에서 폭넓고 지속적으로 성장하는 오픈 웨이트 이미지 및 비디오 모델을 지원한다.** 현재 문서에 따르면, 지원되는 체크포인트와 형식에는 Stable Diffusion 1.5, Stable Diffusion 2.0, SDXL, Stable Diffusion 3.5(Medium 및 Large), 여러 FLUX 변형(dev, schnell, Kontext, Krea, Redux, Fill, 그리고 더 새로운 FLUX.2 Klein), 그리고 CogView4와 Qwen-Image가 포함됩니다. 또한 `.ckpt`, `diffusers` 형식과 일부 `.gguf` 양자화 형식의 모델도 불러올 수 있습니다.',
          '이 목록은 새로운 오픈 웨이트 모델이 출시될 때마다 자주 변경되므로, 영구적인 목록이 아니라 특정 시점의 스냅샷으로 간주해야 합니다 — 특정 신규 모델이 출시 당일부터 지원된다고 가정하기 전에 [InvokeAI GitHub 저장소](https://github.com/invoke-ai/InvokeAI)나 릴리스 노트에서 최신 모델 지원 현황을 확인하세요.',
          '아래 "InvokeAI가 적합하지 않은 사람" 섹션에서 더 자세히 다룰 정직한 유의사항: InvokeAI 관리자들은 단순히 명령줄 지원을 추가하는 것보다 시간이 더 걸리는 경향이 있는, 통합 캔버스와 노드 편집기 워크플로에 모델을 깔끔하게 통합하는 것을 우선시합니다. ComfyUI는 주요 신규 오픈 웨이트 모델이 출시된 당일에 지원을 추가하는 것으로 널리 알려져 있는데(이른바 "데이 제로" 지원), InvokeAI는 2026년 기준으로 출시 당일 즉각적인 대응이라는 측면에서 아직 같은 수준의 평판을 쌓지 못했습니다.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'InvokeAI 설치 방법',
        content: [
          'InvokeAI 설치는 수동 환경 구성이 아니라 공식 런처를 사용하여, 지원되는 모든 운영체제에서 기본적으로 동일한 방식으로 진행됩니다.',
        ],
        numberedItems: [
          { title: 'GPU와 OS를 시스템 요구사항과 대조 확인', whyItMatters: 'InvokeAI는 Windows 10 이상, macOS 14 이상, Linux(Ubuntu 20.04 이상에서 테스트가 잘 되어 있음)에서 실행된다; 설치 전에 사용할 모델의 요구사항을 GPU와 VRAM이 충족하는지 확인할 것.' },
          { title: 'InvokeAI 런처 다운로드', whyItMatters: '[공식 설치 가이드](https://invoke.ai/start-here/installation/)와 GitHub 릴리스에서 제공되는 런처는 수동 가상 환경 설치 없이 Python 환경과 종속성을 자동으로 처리한다.' },
          { title: '애플리케이션 설치 및 실행', whyItMatters: '런처가 InvokeAI 백엔드를 설치하고 브라우저 기반 웹 인터페이스를 연다 — 로컬 사용에는 별도의 웹 서버 구성이 필요하지 않다.' },
          { title: '모델 다운로드 또는 선택', whyItMatters: '내장된 모델 관리자를 통해 초기 모델(예: SD 1.5 또는 SDXL 체크포인트)을 선택하거나, Hugging Face나 Civitai에서 이미 다운로드한 모델 파일을 InvokeAI가 가리키도록 설정한다.' },
          { title: '통합 캔버스를 열고 생성하기', whyItMatters: '프롬프트를 입력하고 해상도와 스텝 수를 설정한 뒤 캔버스에서 직접 생성한다 — 모델이 VRAM에 로드되는 동안 첫 생성은 일반적으로 더 느리다.' },
          { title: '필요에 따라 ControlNet, LoRA, 노드 편집기 추가', whyItMatters: '이는 기본 워크플로 위에 얹는 선택적 레이어이다 — 대부분의 독자는 처음 몇 개의 프로젝트에서는 무시해도 되며, 캔버스에 익숙해진 후 추가하면 된다.' },
        ],
        note: '정확한 설치 단계와 시스템 패키지 요구사항(예: Python 3.11-3.12, GPU 드라이버)은 릴리스마다 달라질 수 있다 — 정확한 명령어 구문은 이 글을 포함한 범용 가이드가 아니라 [invoke.ai의 최신 설치 가이드](https://invoke.ai/start-here/installation/)를 따를 것.',
      },
      licenseAndCost: {
        id: 'license-and-cost',
        title: '라이선스와 비용',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'InvokeAI의 오픈소스 Community Edition은 수익 상한선이 없는 Apache-2.0 라이선스 하에 제공되며 셀프 호스팅이 완전히 무료다; 회사의 기존 유료 클라우드 요금제는 2025년 10월 Adobe가 Invoke를 인수하면서 중단되었다.' },
          { type: 'plain-terms', text: '한때 나란히 존재하던 유료 클라우드 서비스가 종료되었기 때문에, 오늘날 실제로 얻을 수 있는 InvokeAI 버전은 하나뿐입니다 — 직접 운영하는 무료 버전입니다.' },
        ],
        columns: ['항목', '상태', '비용'],
        rows: [
          { '항목': '오픈소스 Community Edition(셀프 호스팅)', '상태': '커뮤니티가 적극적으로 유지 관리', '비용': '무료 — Apache-2.0, 수익 상한선 없음' },
          { '항목': 'Invoke 호스팅 클라우드 구독(Starter/Indie/Professional/Enterprise)', '상태': '중단됨 — 서비스는 2025년 10월 31일 종료', '비용': '해당 없음 — 더 이상 이용 불가' },
          { '항목': 'Adobe Firefly Foundry(인수된 팀의 현재 업무)', '상태': 'InvokeAI의 연속이 아닌 별도의 Adobe 제품 라인', '비용': 'Adobe가 결정 — 이 리뷰의 범위 밖' },
        ],
        content: [
          'InvokeAI의 소프트웨어 라이선스는 Apache-2.0으로, 이용 가능한 가장 관대한 오픈소스 라이선스 중 하나입니다: 수익 임계값 없이 상업적 사용, 수정, 재배포를 허용하며, 그 위에 구축한 자체 코드를 오픈소스화해야 하는 카피레프트 요건도 없습니다. 이는 파생 사용이나 네트워크 사용에 대해 더 강한 카피레프트 의무를 부과하는 ComfyUI(GPL-3.0)나 AUTOMATIC1111의 Stable Diffusion WebUI(AGPL-3.0)보다 눈에 띄게 관대한 라이선스입니다 — 이는 마케팅 주장이 아니라 실제로 확인 가능한 차이입니다.',
          '이 라이선스 하에서 InvokeAI를 셀프 호스팅하는 것이 무료이기 때문에, 지속적으로 드는 유일한 비용은 자신의 하드웨어와 전기 요금뿐입니다 — 다른 셀프 호스팅 Stable Diffusion이나 FLUX 인터페이스와 동일한 비용 구조입니다. PromptQuorum이 추적하는 구독료는 없으며, 이 리뷰 작성 시점 기준으로는 판매하던 회사가 더 이상 이를 운영하지 않기 때문에 비교할 만한 공식 Invoke 브랜드 유료 요금제도 전혀 존재하지 않습니다. 만약 새로운 운영 체제 하에서 이 상황이 바뀐다면, 이 비용 분석이 여전히 유효하다고 가정하기 전에 [invoke.ai](https://invoke.ai)와 [GitHub 저장소](https://github.com/invoke-ai/InvokeAI)에서 최신 조건을 직접 확인하세요.',
        ],
        note: '라이선스 및 비용 정보는 [github.com/invoke-ai/InvokeAI/blob/main/LICENSE](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE)의 Apache-2.0 라이선스 본문과 2025년 10월 Adobe 인수에 대한 공개 보도를 반영하며, 2026년 9월 6일 기준 정보입니다. 이는 법률 자문이 아닙니다 — 상업적 배포 결정을 내리기 전에 직접 라이선스 파일을 읽어보세요.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: '하드웨어 요구사항',
        itemHeadings: true,
        columns: ['모델', '최소 VRAM', '최소 시스템 RAM'],
        rows: [
          { '모델': 'Stable Diffusion 1.5', '최소 VRAM': '4GB VRAM', '최소 시스템 RAM': '8GB RAM' },
          { '모델': 'SDXL', '최소 VRAM': '8GB VRAM', '최소 시스템 RAM': '16GB RAM' },
          { '모델': 'FLUX.1', '최소 VRAM': '10GB VRAM', '최소 시스템 RAM': '32GB RAM' },
          { '모델': 'FLUX.2 Klein (4B)', '최소 VRAM': '12GB VRAM', '최소 시스템 RAM': '16GB RAM' },
          { '모델': 'FLUX.2 Klein (9B)', '최소 VRAM': '24GB VRAM', '최소 시스템 RAM': '32GB RAM' },
        ],
        content: [
          'InvokeAI는 Windows 10 이상, macOS 14 이상, Linux에서 실행되며, 그중 Ubuntu 20.04 이상이 특히 테스트가 잘 되어 있다고 명시되어 있습니다. GTX 10 시리즈 이상의 NVIDIA GPU는 Windows와 Linux에서 지원되고, AMD GPU는 Linux에서만 지원되며, Intel Arc GPU(Alchemist, Battlemage 및 그 이후)는 Windows와 Linux x86_64에서 지원됩니다. Apple Silicon Mac(M1 이상)도 작동하며, 원활한 사용을 위해 16GB 이상의 통합 메모리가 권장됩니다. GPU 없이 CPU만으로 생성하는 것은 Linux ARM64 기기에서 가능하지만 속도가 느립니다.',
          'InvokeAI는 번들 런처 외부에서 실행하려면 Python 3.11 또는 3.12가 필요합니다. 공식 런처는 대부분의 독자에게 이 종속성을 자동으로 관리해주므로, 일반적인 설치에서는 Python 환경을 수동으로 관리하는 것이 필수가 아니라 선택 사항입니다.',
        ],
        note: 'VRAM과 RAM 수치는 [invoke.ai의 시스템 요구사항 페이지](https://invoke.ai/start-here/system-requirements/)에서 가져온 최솟값이며, 새로운 모델 변형이 출시되면서 바뀔 수 있습니다 — 계획 참고용으로 다루고, 특정 모델용 하드웨어를 구매하기 전에 최신 수치를 확인하세요.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'InvokeAI 대 대안',
        columns: ['옵션', '최적 용도', '인터페이스 방식', '라이선스', '핵심 트레이드오프'],
        rows: [
          {
            '옵션': 'InvokeAI',
            '최적 용도': '세련된 스튜디오 스타일 UI를 갖춘 레이어 기반 비파괴 합성',
            '인터페이스 방식': '통합 캔버스 + 선택적 노드 편집기',
            '라이선스': 'Apache-2.0, 수익 상한선 없음',
            '핵심 트레이드오프': '완전히 새로운 모델에 대한 지원 속도가 ComfyUI보다 일반적으로 느림',
          },
          {
            '옵션': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '최적 용도': '최대의 제어력과 완전히 새로운 모델 출시에 대한 가장 빠른 지원',
            '인터페이스 방식': '노드 그래프, 모든 것을 수동으로 연결',
            '라이선스': 'GPL-3.0',
            '핵심 트레이드오프': '주요 옵션 중 가장 가파른 학습 곡선; 내장된 통합 캔버스 없음',
          },
          {
            '옵션': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            '최적 용도': 'Stable Diffusion 전용으로는 가장 큰 확장 프로그램 생태계와 커뮤니티 튜토리얼',
            '인터페이스 방식': '탭 기반 웹 UI',
            '라이선스': 'AGPL-3.0',
            '핵심 트레이드오프': '2026년 기준 ComfyUI와 InvokeAI보다 핵심 개발 속도가 느림; 영구 레이어 캔버스 없음',
          },
          {
            '옵션': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '최적 용도': '첫 좋은 이미지까지 클릭 수가 가장 적고 설정이 최소화됨',
            '인터페이스 방식': '단순화된 단일 창의, 선택지가 고정된 UI',
            '라이선스': 'GPL-3.0',
            '핵심 트레이드오프': '자체 README에 따르면 제한적인 장기 지원 모드(버그 수정만), SDXL 전용, 새로운 아키텍처 지원 계획 없음',
          },
          {
            '옵션': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)',
            '최적 용도': '멀티 GPU 및 멀티 백엔드 오케스트레이션(ComfyUI를 백엔드로 구동 가능)',
            '인터페이스 방식': '교체 가능한 백엔드 위의 모듈식 웹 UI',
            '라이선스': 'MIT',
            '핵심 트레이드오프': '다른 네 가지보다 사용자 기반이 작음; 2024년 독립 포크 이전에는 Stability AI의 "StableSwarmUI"였음',
          },
        ],
        note: '이는 2026년 9월 6일 기준으로 각 프로젝트 자체의 문서와 라이선스 파일을 근거로 한 포지셔닝 요약이며, 실제 벤치마크가 아닙니다. 이러한 로컬 옵션이 Midjourney, Adobe Firefly 같은 클라우드 도구와 어떻게 비교되는지는 [로컬 AI 이미지 생성 대 클라우드](/power-local-llm/local-ai-image-generation-vs-cloud)를, 이 모든 UI가 실행하는 기본 모델 계열에 대해서는 [Stable Diffusion 리뷰](/power-local-llm/stable-diffusion-review)를 참고하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'InvokeAI가 적합한 사람',
        items: [
          '**레이어 기반의 비파괴 편집 워크플로를 원하는 독자.** 통합 캔버스는 다시 방문하고 다시 마스킹할 수 있는 영구 레이어를 중심으로 하며, 한 번의 생성-폐기 루프보다는 디지털 회화 스튜디오에 더 가깝다.',
          '**노드 그래프를 처음부터 구축하지 않고도 세련된 인터페이스를 원하는 독자.** InvokeAI의 캔버스는 아무것도 연결하지 않고도 사용할 수 있으며, 그것을 원하는 독자를 위한 노드 편집기도 여전히 제공된다.',
          '**가장 관대한 오픈소스 라이선스를 원하는 독자 또는 소규모 스튜디오.** Apache-2.0에는 수익 상한선이 없고 그 위에 구축한 코드에 대한 카피레프트 의무도 없다 — 이는 모델 주변에 자체 독점 도구를 개발하는 팀에게 ComfyUI 및 AUTOMATIC1111의 GPL 계열 라이선스와 실질적인 차이가 있다.',
          '**완전한 로컬 제어와 프라이버시를 원하는 독자.** 설치가 완료되면 생성은 전적으로 자신의 GPU에서 실행되며 — 어떤 이미지나 프롬프트도 자신의 기기를 벗어나지 않는다.',
          '**명확한 거버넌스 이야기를 가진, 유지 관리되는 프로젝트를 원하는 독자.** 2025년 Adobe의 상용 회사 인수는 오픈소스 프로젝트를 멈추지 않았다; 이는 실명이 공개된 오랜 커뮤니티 관리자들 아래에서 계속된다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'InvokeAI가 적합하지 않은 사람',
        items: [
          '**최신 실험적 모델이나 노드를 출시 당일에 사용하고 싶은 독자.** ComfyUI는 주요 신규 오픈 웨이트 모델 출시 당일에 지원을 추가하는 것으로 널리 알려져 있다; InvokeAI의 캔버스 우선 통합 방식은 아직 그와 같은 즉각적인 출시 당일 대응 평판을 쌓지 못했다.',
          '**캔버스 없이 노드 그래프만 있는 워크플로를 특별히 원하는 독자.** InvokeAI에는 노드 편집기가 포함되어 있지만, 그 결정적인 특징은 통합 캔버스다 — 노드 기반 파이프라인 구축만을 원하는 독자는 노드 우선 설계인 ComfyUI를 선호할 수 있다.',
          '**팀 협업이나 호스팅된 GPU 접근을 위해 Invoke의 유료 클라우드 호스팅 구독에 의존하던 독자.** 이 서비스는 2025년 10월 31일에 중단되었다; 현재 InvokeAI 브랜드의 유료 대체 서비스는 존재하지 않으므로, 그것이 결정적인 기능이었다면 다른 호스팅형 도구나 팀 협업 도구를 검토할 것.',
          '**VRAM이 매우 낮은 하드웨어로 특별히 FLUX급 모델을 실행하고 싶은 독자.** InvokeAI 자체가 공개한 요구사항에 따르면 FLUX.1은 최소 약 10GB VRAM과 32GB 시스템 RAM이 필요하다; 4~6GB 카드를 가진 독자는 대신 SD 1.5를 기준으로 계획을 세우거나 클라우드 대안을 사용해야 한다.',
          '**Stable Diffusion 전용으로 가장 큰 커뮤니티 튜토리얼 및 확장 프로그램 라이브러리를 원하는 독자.** AUTOMATIC1111의 WebUI는 가장 오랜 역사를 가지고 있으며 그것을 중심으로 특별히 구축된 커뮤니티 튜토리얼과 서드파티 확장 프로그램의 양이 가장 많지만, 2026년 기준으로 그 자체의 핵심 개발 속도는 ComfyUI나 InvokeAI보다 느리다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'InvokeAI는 무료인가요?',
            a: '네. 오픈소스 Community Edition은 Apache-2.0 라이선스 하에 다운로드, 셀프 호스팅, 상업적 사용이 모두 무료이며 수익 상한선이 없습니다. 이전에 유료 클라우드 호스팅 버전을 판매하던 회사 Invoke는 2025년 10월 Adobe에 인수되어 2025년 10월 31일에 그 서비스를 종료했습니다 — 현재 InvokeAI 브랜드의 유료 요금제는 전혀 존재하지 않습니다.',
          },
          {
            q: 'Adobe가 InvokeAI를 인수했나요?',
            a: 'Adobe는 오픈소스 프로젝트 InvokeAI 위에 상용 호스팅 플랫폼을 구축했던 회사 Invoke를 2025년 10월에 인수했습니다(2025년 Adobe MAX에서 발표). CEO Kent Keirsey를 포함한 Invoke의 창립 팀은 Adobe의 Firefly Foundry 그룹에 합류했습니다. 상용 호스팅 서비스는 2025년 10월 31일에 운영을 종료했습니다. 오픈소스 프로젝트 InvokeAI 자체는 인수되지 않았으며, 독립적인 커뮤니티 관리자인 Lincoln Stein과 Vic(Blessedcoolant) 아래에서 계속됩니다.',
          },
          {
            q: 'InvokeAI는 어떤 라이선스를 사용하나요?',
            a: 'InvokeAI의 소프트웨어는 Apache-2.0 라이선스 하에 제공되며, 이는 수익 상한선이 없고 그 위에 구축하는 코드에 대한 카피레프트 요건도 없는 관대한 오픈소스 라이선스입니다. 이는 파생 사용이나 네트워크 사용에 대해 더 엄격한 카피레프트 조건을 가진 ComfyUI(GPL-3.0) 및 AUTOMATIC1111의 Stable Diffusion WebUI(AGPL-3.0)와 다릅니다. 이는 요약일 뿐 법률 자문이 아닙니다 — 상업적 배포 결정을 내리기 전에 GitHub에서 라이선스 파일을 읽어보세요.',
          },
          {
            q: 'InvokeAI의 통합 캔버스란 무엇인가요?',
            a: '통합 캔버스는 InvokeAI의 핵심 작업 공간으로, 모든 생성, 인페인팅, 아웃페인팅이 일회용으로 버려지는 결과물이 아니라 영구적이고 편집 가능한 레이어가 됩니다. 독자는 브러시 도구로 특정 영역을 마스킹하고 그 영역만 재생성하며 시간이 지남에 따라 레이어를 쌓을 수 있어, 단일한 생성-폐기 프롬프트 상자보다는 레이어 기반 이미지 편집기에서 작업하는 것에 더 가깝습니다.',
          },
          {
            q: 'InvokeAI는 어떤 모델을 지원하나요?',
            a: '현재 문서에 따르면 InvokeAI는 Stable Diffusion 1.5, 2.0, SDXL, 3.5(Medium 및 Large), 여러 FLUX 변형(dev, schnell, Kontext, Krea, Redux, Fill, FLUX.2 Klein), 그리고 CogView4, Qwen-Image 같은 더 새로운 모델을 `.ckpt`, `diffusers` 형식과 일부 `.gguf` 형식으로 지원합니다. 이 목록은 자주 업데이트되므로 — 특정 신규 출시 모델에 대한 지원을 가정하기 전에 [InvokeAI GitHub 저장소](https://github.com/invoke-ai/InvokeAI)에서 현재 지원 모델 목록을 확인하세요.',
          },
          {
            q: 'InvokeAI에는 VRAM이 얼마나 필요한가요?',
            a: '모델에 따라 다릅니다: Stable Diffusion 1.5는 단 4GB VRAM과 8GB 시스템 RAM만 필요하고, SDXL은 8GB VRAM과 16GB RAM을 요구하며, FLUX.1은 약 10GB VRAM과 32GB RAM을, 더 큰 FLUX.2 Klein 변형(9B)은 약 24GB VRAM과 32GB RAM을 요구합니다. 이는 InvokeAI 자체 문서에서 공개한 최솟값이며 새로운 모델 변형이 출시되면서 바뀔 수 있습니다.',
          },
          {
            q: 'InvokeAI가 ComfyUI나 AUTOMATIC1111보다 나은가요?',
            a: '무엇을 중요하게 여기느냐에 따라 다릅니다. ComfyUI는 완전히 새로운 오픈 웨이트 모델 출시에 가장 빠르게 지원을 추가하는 것으로 널리 알려져 있으며 가장 세밀한 노드 수준의 제어를 제공합니다; AUTOMATIC1111의 WebUI는 Stable Diffusion 전용으로 특별히 구축된 커뮤니티 튜토리얼과 확장 프로그램의 양이 가장 많지만, 2026년 기준으로 그 자체의 핵심 개발은 다른 두 가지에 비해 느려졌습니다. InvokeAI의 강점은 통합 캔버스입니다: 반복적인 편집을 디지털 회화 도구처럼 느껴지게 하는 영구적이고 비파괴적인 레이어, 그리고 셋 중 가장 관대한 라이선스(Apache-2.0)입니다.',
          },
          {
            q: 'InvokeAI는 어디서 다운로드하나요?',
            a: '공식 소스는 [invoke-ai/InvokeAI GitHub 저장소](https://github.com/invoke-ai/InvokeAI)이며, 권장되는 설치 방법은 [invoke.ai 설치 가이드](https://invoke.ai/start-here/installation/)에 설명된 런처로, Windows, macOS, Linux에서 Python 환경 구성을 자동으로 처리합니다.',
          },
          {
            q: 'Invoke의 유료 구독 요금제는 어떻게 되었나요?',
            a: '중단되었습니다. 무료 오픈소스 소프트웨어와 함께 유료 클라우드 호스팅 구독 등급을 판매하던 Invoke는 2025년 10월 Adobe에 인수되었으며, 상용 호스팅 서비스는 2025년 10월 31일에 운영을 종료했습니다. "Starter", "Indie", "Professional", "Enterprise" 요금제를 설명하는 오래된 기사나 캐시된 가격 페이지는 2026년 기준으로 더 이상 존재하지 않는 서비스를 설명하는 것입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'InvokeAI는 일회성 프롬프트 생성이 아니라 반복적이고 예술적인 스타일의 합성 작업을 하는 독자에게 보상을 주는, 진정으로 독특한 영구적·비파괴적 레이어를 갖춘 통합 캔버스를 중심으로 구축되어, 주류 Stable Diffusion 인터페이스 중 가장 스튜디오 지향적이라는 평판을 얻을 자격이 있습니다. Apache-2.0 라이선스는 주요 옵션 중 가장 관대하며, 셀프 호스팅은 수익 상한선 없이 여전히 완전 무료입니다 — 이는 상용 호스팅 서비스 배후의 회사가 2025년 10월 Adobe에 인수되고 그 서비스가 종료된 이후에도 "Invoke 구독 요금제"에 관한 오래된 가격 정보가 여전히 많이 떠돌고 있다는 점을 고려할 때 명확히 밝혀둘 가치가 있는 사실입니다. 오픈소스 프로젝트 자체는 그 거래에 포함되지 않았으며, 실명이 공개된 커뮤니티 관리자들 아래에서 활발한 개발이 계속되고 있습니다. 정직한 트레이드오프는 다음과 같습니다: ComfyUI는 완전히 새로운 모델 출시에 대한 지원을 더 빠르게 추가하는 것으로 널리 알려져 있고, AUTOMATIC1111은 여전히 그것을 중심으로 특별히 구축된 커뮤니티 튜토리얼과 확장 프로그램의 양이 가장 많습니다. 세련된 레이어 기반 캔버스와 조건 없는 관대한 라이선스를 원하는 독자에게 InvokeAI는 여전히 합리적이며 현재로서는 무료인 선택지입니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 invoke-ai/InvokeAI](https://github.com/invoke-ai/InvokeAI) — 공식 소스 코드, 라이선스 파일, 현재 모델 지원 현황, 릴리스 노트.',
          '[InvokeAI — 공식 문서](https://invoke.ai/) — 설치 가이드, 시스템 요구사항, 기능 문서.',
          '[InvokeAI 시스템 요구사항](https://invoke.ai/start-here/system-requirements/) — 모델별 공식 VRAM, RAM, GPU, OS 요구사항.',
          '[Apache License 2.0 — GitHub의 InvokeAI LICENSE 파일](https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE) — InvokeAI 소프트웨어 라이선스의 전체 법적 문서.',
          '[Adobe 뉴스룸 — Adobe Firefly Foundry 발표](https://news.adobe.com/news/2025/10/adobe-max-2025-firefly-foundry) — Invoke 팀 합류에 관한 Adobe의 공식 발표.',
          '[GitHub의 ComfyUI LICENSE](https://github.com/comfy-org/ComfyUI/blob/master/LICENSE) — 비교용 GPL-3.0 라이선스 본문.',
          '[GitHub의 AUTOMATIC1111/stable-diffusion-webui LICENSE](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — 비교용 AGPL-3.0 라이선스 본문.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Stable Diffusion 리뷰(2026)](/power-local-llm/stable-diffusion-review) — InvokeAI, ComfyUI, AUTOMATIC1111이 모두 실행하는 기본 오픈 웨이트 모델 계열.',
          '[로컬 AI 이미지 생성 대 클라우드](/power-local-llm/local-ai-image-generation-vs-cloud) — Midjourney, Adobe Firefly 같은 클라우드 서비스와 로컬 이미지 도구의 비교.',
          '[로컬 LLM 소프트웨어 디렉터리 2026](/power-local-llm/local-llm-software-directory) — 모든 플랫폼을 아우르는 종합 앱 및 도구 디렉터리.',
        ],
      },
    },
  },
}
