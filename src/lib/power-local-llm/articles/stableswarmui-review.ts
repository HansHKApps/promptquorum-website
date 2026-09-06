// SwarmUI Review (formerly StableSwarmUI) (2026): multi-GPU Stable Diffusion web UI
// Slug: stableswarmui-review (kept for continuity — the project itself is now named "SwarmUI",
// not "StableSwarmUI"; see History section below for the exact rename story)
// Companion piece to: stable-diffusion-review, local-ai-image-generation-vs-cloud
// Verified facts (2026-09-06): project renamed from StableSwarmUI (Stability-AI org) to
// independent SwarmUI (mcmonkeyprojects org) in June 2024; MIT License; ComfyUI-backend
// architecture; multi-GPU + multi-user support. Sources cited in the Sources section.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/stableswarmui-review-hero-en.webp',
    title: 'SwarmUI Review (2026): The Multi-GPU Stable Diffusion Web UI',
    seoTitle: 'SwarmUI Review 2026: Multi-GPU ComfyUI-Based Image UI',
    intro:
      'SwarmUI — formerly named StableSwarmUI — is a free, open-source, modular web interface for local Stable Diffusion, FLUX, and other image and video generation models, built to drive multiple GPUs and multiple users from one shared install. It uses [ComfyUI](https://github.com/comfy-org/ComfyUI) as its underlying inference engine: instead of building a competing image-generation backend from scratch, SwarmUI wraps ComfyUI in a form-based Generate tab for everyday use while still exposing the raw ComfyUI node graph for readers who want full manual control. This review covers what SwarmUI actually is today (including the honest history of its rename and its now-fully-independent relationship to Stability AI), its multi-GPU and multi-user architecture, model support, installation, licensing, and how it compares with single-user tools like AUTOMATIC1111 and Fooocus.',
    metaDescription:
      'SwarmUI review 2026: the multi-GPU, multi-user Stable Diffusion web UI built on ComfyUI. Covers the StableSwarmUI rename, MIT license, model support, and setup.',
    twitterDescription:
      'SwarmUI review 2026: formerly StableSwarmUI, now an independent, MIT-licensed, ComfyUI-based web UI for multi-GPU Stable Diffusion and FLUX generation. Setup, architecture, and honest trade-offs.',
    audience:
      'Readers with multiple GPUs or shared/multi-user setups deciding whether SwarmUI\'s ComfyUI-backed, form-based interface fits better than AUTOMATIC1111, Fooocus, or raw ComfyUI.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'SwarmUI review',
    targetKeywords: [
      'swarmui review',
      'stableswarmui vs swarmui',
      'swarmui multi gpu',
      'swarmui comfyui backend',
      'swarmui vs automatic1111',
      'swarmui vs comfyui',
      'swarmui install',
      'swarmui stability ai',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL 1.0', 'Stable Diffusion 3.5', 'FLUX.1 dev', 'FLUX.1 schnell'],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**SwarmUI is a free, MIT-licensed, ComfyUI-backed web interface for Stable Diffusion and FLUX built specifically to run across multiple GPUs and multiple users from a single shared install.** It was originally released by Stability AI as "StableSwarmUI" and became fully independent — with no ongoing Stability AI involvement — as "SwarmUI" under maintainer Alex "mcmonkey" Goodwin in June 2024. Under the hood it runs [ComfyUI](https://github.com/comfy-org/ComfyUI) as its inference engine, so it inherits ComfyUI\'s model support (Stable Diffusion, SDXL, SD 3.5, FLUX) while presenting a simpler form-based Generate tab on top of it. Readers with one GPU and no need for multi-user access are usually better served by [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) or [Fooocus](https://github.com/lllyasviel/Fooocus).',
    quickAnswerTop: {
      en: {
        question: 'What is SwarmUI, and is it still made by Stability AI?',
        answer:
          'SwarmUI is a free, open-source web interface for Stable Diffusion and FLUX that can drive multiple GPUs and multiple users from one install. It is not currently made by Stability AI: it started at Stability AI as "StableSwarmUI," but Stability AI stopped maintaining it and the original developer, Alex "mcmonkey" Goodwin, took it fully independent under the new name "SwarmUI" in June 2024. It has had no ongoing Stability AI involvement since.',
        bullets: [
          'Current name: SwarmUI. Former name: StableSwarmUI (used only through June 2024, under Stability AI).',
          'Current maintainer: Alex "mcmonkey" Goodwin, independently — not Stability AI.',
          'Current repository: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) on GitHub (the old Stability-AI/StableSwarmUI repo is archived/discontinued).',
          'License: MIT (permissive, free for commercial and personal use).',
          'Architecture: SwarmUI runs ComfyUI as its backend inference engine, then adds a simpler form-based UI, multi-GPU job distribution, and multi-user accounts on top.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What SwarmUI Is', anchor: 'what-is-swarmui' },
      { label: 'History: From StableSwarmUI to Independent SwarmUI', anchor: 'history' },
      { label: 'How the ComfyUI-Backend Architecture Works', anchor: 'architecture' },
      { label: 'Multi-GPU and Multi-User Support', anchor: 'multi-gpu-multi-user' },
      { label: 'Supported Models', anchor: 'model-support' },
      { label: 'How to Install SwarmUI', anchor: 'installation' },
      { label: 'Pricing and License', anchor: 'pricing-license' },
      { label: 'SwarmUI vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use SwarmUI', anchor: 'who-should-use' },
      { label: 'Who Should Not Use SwarmUI', anchor: 'who-should-not-use' },
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
          'SwarmUI (formerly StableSwarmUI) is a free, open-source, MIT-licensed web UI for Stable Diffusion and FLUX, built to run across multiple GPUs and multiple users from one install.',
          'It started at Stability AI as "StableSwarmUI"; Stability AI stopped maintaining it and the original developer, Alex "mcmonkey" Goodwin, made it fully independent as "SwarmUI" in June 2024 — no ongoing Stability AI involvement since.',
          'Current repository: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI); the old repository was at Stability-AI/StableSwarmUI.',
          'SwarmUI runs [ComfyUI](https://github.com/comfy-org/ComfyUI) as its backend inference engine — it does not replace ComfyUI\'s generation code, it wraps it in a friendlier Generate tab while still exposing the raw node graph.',
          'It supports every model ComfyUI supports, including Stable Diffusion 1.5/XL, Stable Diffusion 3.5, and FLUX; exact model coverage tracks ComfyUI\'s own updates.',
          'Best for readers with multiple GPUs or shared/team access who want ComfyUI\'s model support without building a node graph from scratch for every job; single-GPU casual users are usually better served by AUTOMATIC1111 or Fooocus.',
        ],
      },
      whatIsSwarmUI: {
        id: 'what-is-swarmui',
        title: 'What SwarmUI Is',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI is a free, open-source web interface for Stable Diffusion and FLUX image generation that runs ComfyUI as its backend and adds multi-GPU job distribution and multi-user accounts on top.' },
          { type: 'plain-terms', text: 'Think of it as a friendlier control panel bolted onto ComfyUI — you get a simple form to type a prompt and pick a model, but the actual image generation underneath is still ComfyUI doing the work, now able to split jobs across several GPUs or several people.' },
        ],
        content: [
          '**SwarmUI is a modular, form-based web UI for local image and video generation, distinct from the raw node-graph interface ComfyUI ships with by default.** It targets the same underlying models as ComfyUI — Stable Diffusion, SDXL, SD 3.5, FLUX — but presents them through a simpler "Generate" tab with dropdowns and sliders, aimed at readers who find a full node graph slower for routine generation.',
          'The name "Swarm" refers to its original core feature: coordinating a "swarm" of GPUs so that several graphics cards can work on the same batch of images at once, rather than one GPU processing a queue alone. That multi-GPU job distribution, plus built-in multi-user login and per-user model access, is what separates SwarmUI from single-user tools like AUTOMATIC1111\'s Stable Diffusion WebUI or Fooocus.',
          'SwarmUI is written in C#/.NET on the server side with a web front end, and ships as a self-hosted application — there is no official hosted/cloud version. Everything runs on hardware you control, whether that is one gaming GPU or a small multi-GPU workstation.',
        ],
      },
      history: {
        id: 'history',
        title: 'History: From StableSwarmUI to Independent SwarmUI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI began as "StableSwarmUI," an official Stability AI project, and became a fully independent, community-maintained project under the new name "SwarmUI" in June 2024 after Stability AI stopped maintaining it.' },
          { type: 'plain-terms', text: 'Stability AI built the first version and put its name on it, then walked away from maintaining it; the original developer kept building it on his own under a new name instead of letting it die.' },
        ],
        content: [
          '**The project was first published under the Stability AI GitHub organization as "StableSwarmUI," developed primarily by Alex "mcmonkey" Goodwin.** Public release notes and discussion threads on the original [Stability-AI/StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI) repository document its early feature announcements while it carried Stability AI\'s name and copyright.',
          'In June 2024, Stability AI stopped maintaining StableSwarmUI. Rather than the project going dormant, mcmonkey took it independent, publishing a "Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI" and renaming the project to "SwarmUI" at a new repository, [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI). Existing installs could migrate by updating and running a provided migration script (`migrate-windows.bat` on Windows, or manually repointing the Git remote to `mcmonkeyprojects/SwarmUI` on Linux/Mac).',
          '**As of this review (2026-09-06), SwarmUI has no ongoing affiliation with Stability AI** — it is maintained independently by mcmonkey and community contributors, under the MIT License, with copyright attributed to "Alex \'mcmonkey\' Goodwin" for the 2024–2026 period covered by the current license file. The original Stability-AI/StableSwarmUI repository is no longer the actively developed codebase; the current, maintained project lives at mcmonkeyprojects/SwarmUI.',
          '**Why this article keeps the slug "stableswarmui-review" despite the rename:** readers searching for the tool by its original, better-known name still land here — the article body and title use the current, correct name "SwarmUI" throughout, and this section states the rename plainly so no one is misled about who maintains the project today.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'How the ComfyUI-Backend Architecture Works',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI does not contain its own image-generation engine — it runs ComfyUI as a backend process and sends generation jobs to it, then renders the results in its own simplified interface.' },
          { type: 'plain-terms', text: 'ComfyUI does the actual math of turning a prompt into an image; SwarmUI is the layer on top that decides which backend gets which job and shows you a simpler screen instead of ComfyUI\'s node graph.' },
        ],
        columns: ['Layer', 'What it does', 'Can you access it directly?'],
        rows: [
          { 'Layer': 'SwarmUI web UI', 'What it does': 'Form-based Generate tab, job queue, multi-user accounts, multi-GPU routing', 'Can you access it directly?': 'Yes — this is the default interface' },
          { 'Layer': 'ComfyUI backend(s)', 'What it does': 'Runs the actual diffusion model inference (Stable Diffusion, SDXL, FLUX, etc.)', 'Can you access it directly?': 'Yes, via the built-in Comfy Workflow tab and node graph' },
          { 'Layer': 'GPU hardware', 'What it does': 'Executes the model computation for each ComfyUI backend instance', 'Can you access it directly?': 'N/A — managed by SwarmUI\'s backend scheduler' },
        ],
        content: [
          'SwarmUI can auto-install and self-start a ComfyUI backend for you on first run, or connect to one or more ComfyUI instances you already run yourself, including remote instances over a network. Each configured backend is treated as a worker: when you submit a generation request, SwarmUI\'s scheduler assigns it to an available backend instance.',
          'Because the underlying inference engine is unmodified ComfyUI, SwarmUI inherits ComfyUI\'s model compatibility, custom-node ecosystem, and workflow format almost entirely. The built-in "ComfyUI Backend Extension" also exposes a direct pass-through route (`ComfyBackendDirect`) so existing ComfyUI automation scripts and API integrations can keep working against a SwarmUI-managed backend.',
          'This is the key architectural difference from AUTOMATIC1111\'s Stable Diffusion WebUI, which ships its own, separate inference pipeline rather than wrapping ComfyUI. SwarmUI\'s trade-off is that it depends on ComfyUI staying compatible and installed correctly — if ComfyUI itself has an issue, SwarmUI inherits it, since SwarmUI is not doing its own independent inference.',
        ],
      },
      multiGpuMultiUser: {
        id: 'multi-gpu-multi-user',
        title: 'Multi-GPU and Multi-User Support',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI can distribute generation jobs across several GPUs on the same machine or across a small network of machines, and supports multiple logged-in user accounts with per-user model and permission settings from a single install.' },
          { type: 'plain-terms', text: 'Instead of one GPU working through a queue of image requests one at a time, SwarmUI can hand different requests to different GPUs at once, and it can tell users apart so a shared server does not mix up who asked for what.' },
        ],
        content: [
          '**Multi-GPU support is the feature the project is named for.** SwarmUI can run one ComfyUI backend per available GPU on a machine (or across multiple machines on a network) and load-balance incoming generation jobs across all of them — useful for large batch/grid generations, or for a household or small team sharing a multi-GPU workstation instead of each person needing their own dedicated card.',
          '**Multi-user support** adds login accounts, per-user model access controls, and a shared job queue, so a single SwarmUI install can serve several people without each running a separate copy of the software or fighting over one GPU\'s queue. Neither AUTOMATIC1111\'s Stable Diffusion WebUI nor stock ComfyUI ships this kind of built-in multi-user account system — both are designed around a single local user.',
          'This combination is what makes SwarmUI a meaningfully different tool from single-GPU, single-user apps rather than just "ComfyUI with a nicer skin": the job-distribution and account layers solve a real coordination problem that only shows up once you have more than one GPU or more than one person who wants to generate images on the same hardware.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Supported Models',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI supports every model family ComfyUI supports for image generation, including Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5, and FLUX, plus select video and audio models as ComfyUI adds support for them.' },
          { type: 'plain-terms', text: 'Because SwarmUI runs ComfyUI underneath, it can generally load any model checkpoint ComfyUI can load, without SwarmUI needing separate code for each new model family.' },
        ],
        columns: ['Model family', 'Type', 'Notes'],
        rows: [
          { 'Model family': 'Stable Diffusion 1.5', 'Type': 'Image', 'Notes': 'Widely supported legacy checkpoint format; large community LoRA/checkpoint ecosystem via ComfyUI' },
          { 'Model family': 'Stable Diffusion XL 1.0', 'Type': 'Image', 'Notes': '1024×1024-native model; supported the same way as in stock ComfyUI' },
          { 'Model family': 'Stable Diffusion 3.5', 'Type': 'Image', 'Notes': 'Newer multimodal diffusion transformer architecture; requires the current Community License terms Stability AI publishes for SD 3.5 itself, independent of SwarmUI' },
          { 'Model family': 'FLUX (Black Forest Labs)', 'Type': 'Image', 'Notes': 'Supported via ComfyUI\'s FLUX nodes; license depends on the specific FLUX variant (schnell vs. dev), not on SwarmUI' },
          { 'Model family': 'Video/audio models', 'Type': 'Video, audio', 'Notes': 'Supported as ComfyUI itself adds and updates support — check current ComfyUI and SwarmUI release notes for exact model coverage before relying on a specific one' },
        ],
        note: 'Model support tracks ComfyUI\'s own compatibility list, which changes over time — verify current support for any specific checkpoint on the [SwarmUI GitHub repository](https://github.com/mcmonkeyprojects/SwarmUI) or [ComfyUI GitHub repository](https://github.com/comfy-org/ComfyUI) before committing a workflow to it. Each model\'s own license (RAIL-M, Stability AI Community License, Apache 2.0, etc.) applies regardless of which UI you load it in — see the [Stable Diffusion Review](/power-local-llm/stable-diffusion-review) for a breakdown of those license differences by version.',
      },
      installation: {
        id: 'installation',
        title: 'How to Install SwarmUI',
        content: [
          'SwarmUI installs on Windows, Linux, and macOS with a similar overall shape across platforms — the exact commands differ slightly, so this is the general sequence rather than platform-specific instructions.',
        ],
        numberedItems: [
          { title: 'Confirm you have a supported GPU and enough VRAM', whyItMatters: 'SwarmUI\'s VRAM requirements follow whatever model you plan to run through ComfyUI — for example, roughly 8 GB VRAM is a reasonable floor for SDXL, more for SD 3.5 or FLUX; check the model\'s own requirements before installing.' },
          { title: 'Download the SwarmUI installer for your OS', whyItMatters: 'Get the current release from the [mcmonkeyprojects/SwarmUI GitHub repository](https://github.com/mcmonkeyprojects/SwarmUI) — this is the maintained, independent repository, not the archived Stability-AI/StableSwarmUI one.' },
          { title: 'Let SwarmUI auto-install ComfyUI as a backend', whyItMatters: 'The "Self-Start" backend option lets SwarmUI configure, download, and launch a ComfyUI backend automatically, which is the recommended path for a first install rather than manually wiring up an existing ComfyUI instance.' },
          { title: 'Download a model checkpoint', whyItMatters: 'Get a Stable Diffusion, SDXL, SD 3.5, or FLUX checkpoint from a source like Hugging Face, place it in the models folder SwarmUI\'s setup documentation specifies, and confirm that model\'s own license terms for your intended use.' },
          { title: 'Configure additional GPU backends if you have more than one card', whyItMatters: 'Add each additional GPU as its own backend instance in SwarmUI\'s backend settings so jobs can be distributed across all of them instead of just the first one detected.' },
          { title: 'Set up user accounts if multiple people will share the install', whyItMatters: 'Create separate logins with SwarmUI\'s multi-user settings so a shared server keeps each person\'s jobs, models, and permissions separate.' },
        ],
        note: 'Exact installation steps, dependency versions, and folder paths change between releases — follow the current instructions in the [SwarmUI GitHub README](https://github.com/mcmonkeyprojects/SwarmUI) rather than a generic guide, including this one, for anything beyond the general shape above.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Pricing and License',
        content: [
          '**SwarmUI is free and open source under the MIT License — there is no paid tier, subscription, or hosted version sold by the project itself.** You pay only for your own hardware and electricity, the same as any self-hosted tool.',
          'The MIT License is permissive: it allows commercial use, modification, and redistribution with attribution, and carries no revenue cap or registration requirement of the kind that applies to some of the models you might run through it (for example, Stability AI\'s Community License on SD 3.5 requires registration above certain revenue). SwarmUI\'s own license does not impose that — but the license of whatever model checkpoint you load still applies independently, since SwarmUI does not change a model\'s own licensing terms.',
          'Because there is no official hosted SwarmUI service, "pricing" for this tool is entirely about the hardware you already own or choose to buy — there is no membership tier to compare, unlike Stability AI\'s own hosted API and membership plans covered in the [Stable Diffusion Review](/power-local-llm/stable-diffusion-review#pricing).',
        ],
        note: 'License terms can change between releases — confirm the current license text in the `LICENSE` file at the [SwarmUI GitHub repository](https://github.com/mcmonkeyprojects/SwarmUI) before a commercial deployment decision. This is not legal advice.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'SwarmUI vs. Alternatives',
        columns: ['Option', 'Best for', 'Multi-GPU/multi-user', 'Architecture', 'Key trade-off'],
        rows: [
          {
            'Option': 'SwarmUI',
            'Best for': 'Multiple GPUs or multiple users sharing one install, form-based control over a ComfyUI backend',
            'Multi-GPU/multi-user': 'Yes — built in',
            'Architecture': 'Wraps ComfyUI as the inference engine',
            'Key trade-off': 'Depends on ComfyUI compatibility underneath; more moving parts than a single-user app',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Best for': 'Full manual control over every generation step via a node graph',
            'Multi-GPU/multi-user': 'No — single-user by default',
            'Architecture': 'Standalone node-graph inference engine',
            'Key trade-off': 'Steepest learning curve of the group; no built-in multi-GPU job distribution or accounts',
          },
          {
            'Option': '[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Best for': 'Single-GPU users who want the largest extension ecosystem for a form-based UI',
            'Multi-GPU/multi-user': 'No — single-user, single-GPU by design',
            'Architecture': 'Own separate inference pipeline, not ComfyUI-based',
            'Key trade-off': 'No built-in multi-GPU/multi-user support; separate codebase from ComfyUI\'s ecosystem',
          },
          {
            'Option': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Best for': 'Polished, professional-feeling single-user creative workflow with a unified canvas',
            'Multi-GPU/multi-user': 'No — single-user focus',
            'Architecture': 'Own inference pipeline',
            'Key trade-off': 'Smaller node/extension ecosystem than ComfyUI; not built around multi-GPU distribution',
          },
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Best for': 'Fastest path to a first good image with the fewest settings to configure',
            'Multi-GPU/multi-user': 'No — single-user, minimal-configuration design',
            'Architecture': 'Own simplified inference pipeline built on Stable Diffusion',
            'Key trade-off': 'Deliberately limited configurability in exchange for simplicity; not aimed at multi-GPU setups',
          },
        ],
        note: 'This is a positioning summary, not a benchmark ranking — see the [Stable Diffusion Review](/power-local-llm/stable-diffusion-review) for license and VRAM detail on the underlying models these UIs all run, and [Local AI Image Generation vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) for a broader local-vs-cloud comparison.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use SwarmUI',
        items: [
          '**Reader with more than one GPU.** SwarmUI\'s job-distribution scheduler is the only tool in this comparison built specifically to keep several cards busy on the same batch of work.',
          '**Household, team, or lab sharing one machine.** Built-in multi-user accounts let several people generate images from the same install without stepping on each other\'s jobs or models.',
          '**Reader who wants ComfyUI\'s model support without building every workflow as a node graph.** The form-based Generate tab covers common cases; the node graph is still there when you need it.',
          '**Reader already comfortable with ComfyUI who wants a friendlier daily-use layer on top of it.** SwarmUI does not ask you to give up ComfyUI — it exposes it directly via the Comfy Workflow tab.',
          '**Reader who wants a permissively licensed (MIT), actively and independently maintained project** with a clear, documented history rather than an abandoned fork.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use SwarmUI',
        items: [
          '**Casual single-GPU user who just wants the simplest possible first image.** [Fooocus](https://github.com/lllyasviel/Fooocus) has fewer settings and a shorter path to a first result; SwarmUI\'s multi-GPU/multi-user layer is unused overhead for a single casual user.',
          '**Reader who wants the single largest extension/custom-script ecosystem for a form-based UI.** [AUTOMATIC1111\'s Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) has a longer track record and larger extension catalog for that specific use case.',
          '**Reader who wants full manual node-graph control without any wrapping layer.** Use [ComfyUI](https://github.com/comfy-org/ComfyUI) directly rather than through SwarmUI if you never want the simplified Generate tab at all.',
          '**Reader who wants a single-user, unified-canvas creative tool with a more polished built-in editor.** [InvokeAI](https://github.com/invoke-ai/InvokeAI) targets that use case more directly than SwarmUI\'s multi-GPU/multi-user focus.',
          '**Reader who mistakenly expects an official Stability AI product or support channel.** SwarmUI has had no ongoing Stability AI affiliation since June 2024 — support comes from the independent maintainer and community, not from Stability AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is StableSwarmUI still the correct name for this project?',
            a: 'No. The project was renamed from "StableSwarmUI" to "SwarmUI" in June 2024, when it moved from the Stability AI GitHub organization to the independent [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) repository under maintainer Alex "mcmonkey" Goodwin. "StableSwarmUI" is the former name; current documentation, releases, and the GitHub repository all use "SwarmUI."',
          },
          {
            q: 'Is SwarmUI still made or maintained by Stability AI?',
            a: 'No, as of this review (2026-09-06). Stability AI originally released the project as StableSwarmUI but stopped maintaining it; the original developer took it fully independent in June 2024. There is no ongoing Stability AI involvement in SwarmUI\'s current development.',
          },
          {
            q: 'Does SwarmUI use ComfyUI, or is it a separate image-generation engine?',
            a: 'SwarmUI uses ComfyUI as its backend inference engine rather than shipping its own separate generation pipeline. SwarmUI\'s Generate tab sends jobs to one or more ComfyUI backend instances, and the built-in Comfy Workflow tab exposes the underlying ComfyUI node graph directly when you want full manual control.',
          },
          {
            q: 'What models does SwarmUI support?',
            a: 'SwarmUI supports the same model families ComfyUI supports, including Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5, and FLUX. Since SwarmUI runs ComfyUI underneath, its model coverage tracks ComfyUI\'s own updates — check the current SwarmUI and ComfyUI GitHub repositories for the latest supported model list.',
          },
          {
            q: 'Is SwarmUI free?',
            a: 'Yes. SwarmUI is free and open source under the MIT License, with no paid tier or subscription sold by the project. You still need to check the license of whatever model checkpoint you load (Stable Diffusion, FLUX, etc.), since those licenses are separate from SwarmUI\'s own MIT License.',
          },
          {
            q: 'How is SwarmUI different from AUTOMATIC1111 or Fooocus for a single-GPU user?',
            a: 'AUTOMATIC1111\'s Stable Diffusion WebUI and Fooocus both ship their own standalone inference pipelines and are designed around one user on one GPU, with no built-in multi-GPU job distribution or multi-user accounts. SwarmUI is built specifically to add both of those — multi-GPU load balancing and multi-user logins — on top of ComfyUI, which is unnecessary overhead if you only have one GPU and one user.',
          },
          {
            q: 'Can multiple people use SwarmUI at the same time?',
            a: 'Yes. SwarmUI has built-in multi-user support with separate login accounts, per-user model access controls, and a shared job queue, so several people can generate images from one shared install without a separate copy of the software each.',
          },
          {
            q: 'Where do I download SwarmUI?',
            a: 'The current, maintained repository is [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) on GitHub. The older Stability-AI/StableSwarmUI repository reflects the discontinued, pre-June-2024 version and is not the actively developed codebase.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'SwarmUI earns a specific, narrow recommendation: it is the clearest option for readers who have more than one GPU, or more than one person, wanting to share a single Stable Diffusion / FLUX install — a coordination problem that AUTOMATIC1111, Fooocus, and stock ComfyUI simply do not address. Its ComfyUI-backend architecture means it inherits that project\'s model support and node-graph power without forcing every routine job through a node graph, at the cost of depending on ComfyUI\'s own compatibility underneath. The project\'s history is worth knowing honestly: it began as Stability AI\'s "StableSwarmUI," Stability AI stopped maintaining it, and the original developer carried it forward independently as "SwarmUI" in June 2024 — there is no ongoing Stability AI affiliation today. Readers with a single GPU and no multi-user need are usually better served by Fooocus for simplicity or AUTOMATIC1111 for its larger single-user extension ecosystem; readers who want SwarmUI\'s specific multi-GPU or multi-user capability should get it from the current, maintained [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) repository, not the archived Stability-AI one.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[mcmonkeyprojects/SwarmUI — GitHub repository](https://github.com/mcmonkeyprojects/SwarmUI) — current, maintained project, README, license, and releases.',
          '[Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI — GitHub Discussion #2](https://github.com/mcmonkeyprojects/SwarmUI/discussions/2) — the maintainer\'s own account of the June 2024 rename and migration steps.',
          '[Stability-AI/StableSwarmUI — GitHub repository (archived/discontinued)](https://github.com/Stability-AI/StableSwarmUI) — original project under Stability AI, no longer actively developed.',
          '[ComfyUI Backend Extension README — SwarmUI GitHub](https://github.com/mcmonkeyprojects/SwarmUI/blob/master/src/BuiltinExtensions/ComfyUIBackend/README.md) — documents the ComfyUI-backend architecture and the ComfyBackendDirect pass-through.',
          '[ComfyUI — GitHub repository](https://github.com/comfy-org/ComfyUI) — the inference engine SwarmUI runs as its backend.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Stable Diffusion Review (2026)](/power-local-llm/stable-diffusion-review) — the underlying model family SwarmUI runs, including license terms and VRAM needs by version.',
          '[Local AI Image Generation vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) — broader comparison of local image models and UIs against cloud tools like Midjourney and Adobe Firefly.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory) — comprehensive local AI software directory for all platforms.',
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
    heroImage: '/images/stableswarmui-review-hero-de.webp',
    title: 'SwarmUI Test (2026): Die Multi-GPU-Weboberfläche für Stable Diffusion',
    seoTitle: 'SwarmUI Test 2026: Multi-GPU-UI auf ComfyUI-Basis',
    intro:
      'SwarmUI — früher StableSwarmUI genannt — ist eine kostenlose, quelloffene, modulare Weboberfläche für lokales Stable Diffusion, FLUX und andere Bild- und Videogenerierungsmodelle, die speziell dafür gebaut wurde, mehrere GPUs und mehrere Nutzer aus einer gemeinsamen Installation heraus anzusteuern. Es nutzt [ComfyUI](https://github.com/comfy-org/ComfyUI) als zugrunde liegende Inferenz-Engine: Statt ein konkurrierendes Bildgenerierungs-Backend von Grund auf neu zu bauen, umhüllt SwarmUI ComfyUI mit einem formularbasierten „Generate"-Tab für den Alltagsgebrauch und legt dabei den rohen ComfyUI-Node-Graph für Leser frei, die volle manuelle Kontrolle wollen. Dieser Test erklärt, was SwarmUI heute tatsächlich ist (inklusive der ehrlichen Geschichte seiner Umbenennung und seines inzwischen vollständig unabhängigen Verhältnisses zu Stability AI), seine Multi-GPU- und Multi-User-Architektur, die Modellunterstützung, die Installation, die Lizenz und den Vergleich mit Single-User-Tools wie AUTOMATIC1111 und Fooocus.',
    metaDescription:
      'SwarmUI Test 2026: die Multi-GPU-, Multi-User-Weboberfläche für Stable Diffusion auf ComfyUI-Basis. Umbenennung von StableSwarmUI, MIT-Lizenz, Modellunterstützung und Einrichtung.',
    twitterDescription:
      'SwarmUI Test 2026: früher StableSwarmUI, jetzt eine unabhängige, MIT-lizenzierte, ComfyUI-basierte Weboberfläche für Multi-GPU-Stable-Diffusion- und FLUX-Generierung. Einrichtung, Architektur und ehrliche Kompromisse.',
    audience:
      'Leser mit mehreren GPUs oder gemeinsam genutzten Multi-User-Setups, die entscheiden möchten, ob SwarmUIs ComfyUI-basierte, formularbasierte Oberfläche besser passt als AUTOMATIC1111, Fooocus oder rohes ComfyUI.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'SwarmUI review',
    targetKeywords: [
      'swarmui test',
      'stableswarmui vs swarmui',
      'swarmui multi gpu',
      'swarmui comfyui backend',
      'swarmui vs automatic1111',
      'swarmui vs comfyui',
      'swarmui installieren',
      'swarmui stability ai',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL 1.0', 'Stable Diffusion 3.5', 'FLUX.1 dev', 'FLUX.1 schnell'],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**SwarmUI ist eine kostenlose, MIT-lizenzierte, auf ComfyUI basierende Weboberfläche für Stable Diffusion und FLUX, die speziell für den Betrieb über mehrere GPUs und mehrere Nutzer aus einer gemeinsamen Installation gebaut wurde.** Es wurde ursprünglich von Stability AI als „StableSwarmUI" veröffentlicht und wurde im Juni 2024 unter dem Maintainer Alex „mcmonkey" Goodwin als „SwarmUI" vollständig unabhängig — ohne laufende Beteiligung von Stability AI. Unter der Haube läuft [ComfyUI](https://github.com/comfy-org/ComfyUI) als Inferenz-Engine, wodurch SwarmUI die Modellunterstützung von ComfyUI (Stable Diffusion, SDXL, SD 3.5, FLUX) übernimmt und gleichzeitig einen einfacheren formularbasierten „Generate"-Tab obendrauf anbietet. Leser mit nur einer GPU und ohne Multi-User-Bedarf sind meist mit [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) oder [Fooocus](https://github.com/lllyasviel/Fooocus) besser bedient.',
    quickAnswerTop: {
      de: {
        question: 'Was ist SwarmUI, und wird es noch von Stability AI entwickelt?',
        answer:
          'SwarmUI ist eine kostenlose, quelloffene Weboberfläche für Stable Diffusion und FLUX, die mehrere GPUs und mehrere Nutzer aus einer Installation heraus ansteuern kann. Es wird derzeit nicht von Stability AI entwickelt: Es begann bei Stability AI als „StableSwarmUI", aber Stability AI stellte die Pflege ein, und der ursprüngliche Entwickler, Alex „mcmonkey" Goodwin, machte es im Juni 2024 unter dem neuen Namen „SwarmUI" vollständig unabhängig. Seitdem gibt es keine laufende Beteiligung von Stability AI mehr.',
        bullets: [
          'Aktueller Name: SwarmUI. Früherer Name: StableSwarmUI (nur bis Juni 2024, unter Stability AI genutzt).',
          'Aktueller Maintainer: Alex „mcmonkey" Goodwin, unabhängig — nicht Stability AI.',
          'Aktuelles Repository: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) auf GitHub (das alte Repository Stability-AI/StableSwarmUI ist archiviert/eingestellt).',
          'Lizenz: MIT (permissiv, kostenlos für kommerzielle und private Nutzung).',
          'Architektur: SwarmUI betreibt ComfyUI als Backend-Inferenz-Engine und ergänzt es um eine einfachere formularbasierte Oberfläche, Multi-GPU-Job-Verteilung und Multi-User-Konten.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was SwarmUI ist', anchor: 'what-is-swarmui' },
      { label: 'Geschichte: Von StableSwarmUI zum unabhängigen SwarmUI', anchor: 'history' },
      { label: 'Wie die ComfyUI-Backend-Architektur funktioniert', anchor: 'architecture' },
      { label: 'Multi-GPU- und Multi-User-Unterstützung', anchor: 'multi-gpu-multi-user' },
      { label: 'Unterstützte Modelle', anchor: 'model-support' },
      { label: 'SwarmUI installieren', anchor: 'installation' },
      { label: 'Preise und Lizenz', anchor: 'pricing-license' },
      { label: 'SwarmUI vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen sich SwarmUI eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich SwarmUI nicht eignet', anchor: 'who-should-not-use' },
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
          'SwarmUI (früher StableSwarmUI) ist eine kostenlose, quelloffene, MIT-lizenzierte Weboberfläche für Stable Diffusion und FLUX, gebaut für den Betrieb über mehrere GPUs und mehrere Nutzer aus einer Installation.',
          'Es begann bei Stability AI als „StableSwarmUI"; Stability AI stellte die Pflege ein, und der ursprüngliche Entwickler, Alex „mcmonkey" Goodwin, machte es im Juni 2024 als „SwarmUI" vollständig unabhängig — seitdem keine laufende Beteiligung von Stability AI mehr.',
          'Aktuelles Repository: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI); das alte Repository lag bei Stability-AI/StableSwarmUI.',
          'SwarmUI betreibt [ComfyUI](https://github.com/comfy-org/ComfyUI) als Backend-Inferenz-Engine — es ersetzt nicht den Generierungscode von ComfyUI, sondern umhüllt ihn mit einem freundlicheren „Generate"-Tab, während der rohe Node-Graph weiterhin zugänglich bleibt.',
          'Es unterstützt jedes Modell, das ComfyUI unterstützt, einschließlich Stable Diffusion 1.5/XL, Stable Diffusion 3.5 und FLUX; die genaue Modellabdeckung folgt den eigenen Updates von ComfyUI.',
          'Am besten geeignet für Leser mit mehreren GPUs oder gemeinsamem/Team-Zugriff, die ComfyUIs Modellunterstützung nutzen wollen, ohne jeden Auftrag als Node-Graph aufzubauen; Einzel-GPU-Gelegenheitsnutzer sind meist mit AUTOMATIC1111 oder Fooocus besser bedient.',
        ],
      },
      whatIsSwarmUI: {
        id: 'what-is-swarmui',
        title: 'Was SwarmUI ist',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI ist eine kostenlose, quelloffene Weboberfläche für die Bildgenerierung mit Stable Diffusion und FLUX, die ComfyUI als Backend betreibt und dieses um Multi-GPU-Job-Verteilung und Multi-User-Konten ergänzt.' },
          { type: 'plain-terms', text: 'Stellen Sie es sich als freundlicheres Bedienfeld vor, das an ComfyUI angeflanscht ist — Sie erhalten ein einfaches Formular für Prompt und Modellwahl, aber die eigentliche Bildgenerierung darunter macht weiterhin ComfyUI, jetzt aber fähig, Aufträge auf mehrere GPUs oder mehrere Personen zu verteilen.' },
        ],
        content: [
          '**SwarmUI ist eine modulare, formularbasierte Weboberfläche für lokale Bild- und Videogenerierung, die sich von der rohen Node-Graph-Oberfläche unterscheidet, mit der ComfyUI standardmäßig ausgeliefert wird.** Es zielt auf dieselben zugrunde liegenden Modelle wie ComfyUI ab — Stable Diffusion, SDXL, SD 3.5, FLUX —, präsentiert sie aber über einen einfacheren „Generate"-Tab mit Dropdowns und Reglern, gedacht für Leser, denen ein voller Node-Graph für die routinemäßige Generierung zu langsam ist.',
          'Der Name „Swarm" bezieht sich auf das ursprüngliche Kernfeature: das Koordinieren eines „Schwarms" von GPUs, damit mehrere Grafikkarten gleichzeitig an derselben Bild-Charge arbeiten können, statt dass eine GPU allein eine Warteschlange abarbeitet. Diese Multi-GPU-Job-Verteilung, zusammen mit eingebautem Multi-User-Login und nutzerbezogenem Modellzugriff, unterscheidet SwarmUI von Single-User-Tools wie AUTOMATIC1111s Stable Diffusion WebUI oder Fooocus.',
          'SwarmUI ist serverseitig in C#/.NET mit einem Web-Frontend geschrieben und wird als selbst gehostete Anwendung ausgeliefert — es gibt keine offizielle gehostete Cloud-Version. Alles läuft auf Hardware, die Sie selbst kontrollieren, egal ob das eine Gaming-GPU oder eine kleine Multi-GPU-Workstation ist.',
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: Von StableSwarmUI zum unabhängigen SwarmUI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI begann als „StableSwarmUI", ein offizielles Stability-AI-Projekt, und wurde im Juni 2024 unter dem neuen Namen „SwarmUI" ein vollständig unabhängiges, community-gepflegtes Projekt, nachdem Stability AI die Pflege eingestellt hatte.' },
          { type: 'plain-terms', text: 'Stability AI baute die erste Version und setzte seinen Namen darauf, zog sich dann aber von der Pflege zurück; der ursprüngliche Entwickler baute es stattdessen unter neuem Namen eigenständig weiter, statt es sterben zu lassen.' },
        ],
        content: [
          '**Das Projekt wurde zunächst unter der Stability-AI-GitHub-Organisation als „StableSwarmUI" veröffentlicht, primär entwickelt von Alex „mcmonkey" Goodwin.** Öffentliche Release-Notizen und Diskussions-Threads im ursprünglichen Repository [Stability-AI/StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI) dokumentieren frühe Feature-Ankündigungen aus der Zeit, als es noch Name und Urheberrecht von Stability AI trug.',
          'Im Juni 2024 stellte Stability AI die Pflege von StableSwarmUI ein. Statt das Projekt einschlafen zu lassen, machte mcmonkey es unabhängig, veröffentlichte einen „Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI" und benannte das Projekt in „SwarmUI" um, mit neuem Repository unter [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI). Bestehende Installationen konnten migrieren, indem sie aktualisiert und ein bereitgestelltes Migrationsskript ausgeführt wurde (`migrate-windows.bat` unter Windows, oder manuelles Umbiegen der Git-Remote auf `mcmonkeyprojects/SwarmUI` unter Linux/Mac).',
          '**Zum Zeitpunkt dieses Tests (2026-09-06) besteht keine laufende Zugehörigkeit von SwarmUI zu Stability AI** — es wird unabhängig von mcmonkey und Community-Mitwirkenden unter der MIT-Lizenz gepflegt, mit Urheberrechtszuordnung an „Alex \'mcmonkey\' Goodwin" für den Zeitraum 2024–2026, den die aktuelle Lizenzdatei abdeckt. Das ursprüngliche Repository Stability-AI/StableSwarmUI ist nicht mehr die aktiv entwickelte Codebasis; das aktuelle, gepflegte Projekt liegt bei mcmonkeyprojects/SwarmUI.',
          '**Warum dieser Artikel den Slug „stableswarmui-review" trotz der Umbenennung behält:** Leser, die das Tool unter seinem ursprünglichen, bekannteren Namen suchen, landen weiterhin hier — Artikeltext und Titel verwenden durchgängig den aktuellen, korrekten Namen „SwarmUI", und dieser Abschnitt legt die Umbenennung klar dar, damit niemand über die heutige Projektpflege getäuscht wird.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Wie die ComfyUI-Backend-Architektur funktioniert',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI enthält keine eigene Bildgenerierungs-Engine — es betreibt ComfyUI als Backend-Prozess, sendet Generierungsaufträge dorthin und rendert die Ergebnisse in seiner eigenen vereinfachten Oberfläche.' },
          { type: 'plain-terms', text: 'ComfyUI erledigt die eigentliche Rechenarbeit, aus einem Prompt ein Bild zu machen; SwarmUI ist die Schicht darüber, die entscheidet, welches Backend welchen Auftrag bekommt, und Ihnen einen einfacheren Bildschirm statt ComfyUIs Node-Graph zeigt.' },
        ],
        columns: ['Schicht', 'Was sie tut', 'Direkt zugänglich?'],
        rows: [
          { 'Schicht': 'SwarmUI-Weboberfläche', 'Was sie tut': 'Formularbasierter „Generate"-Tab, Job-Warteschlange, Multi-User-Konten, Multi-GPU-Routing', 'Direkt zugänglich?': 'Ja — dies ist die Standardoberfläche' },
          { 'Schicht': 'ComfyUI-Backend(s)', 'Was sie tut': 'Führt die eigentliche Diffusionsmodell-Inferenz aus (Stable Diffusion, SDXL, FLUX usw.)', 'Direkt zugänglich?': 'Ja, über den eingebauten „Comfy Workflow"-Tab und Node-Graph' },
          { 'Schicht': 'GPU-Hardware', 'Was sie tut': 'Führt die Modellberechnung für jede ComfyUI-Backend-Instanz aus', 'Direkt zugänglich?': 'Entfällt — vom Backend-Scheduler von SwarmUI verwaltet' },
        ],
        content: [
          'SwarmUI kann beim ersten Start automatisch ein ComfyUI-Backend installieren und selbst starten, oder sich mit einer oder mehreren bereits selbst betriebenen ComfyUI-Instanzen verbinden, einschließlich entfernter Instanzen über ein Netzwerk. Jedes konfigurierte Backend wird als Worker behandelt: Wenn Sie eine Generierungsanfrage senden, weist der Scheduler von SwarmUI sie einer verfügbaren Backend-Instanz zu.',
          'Da die zugrunde liegende Inferenz-Engine unverändertes ComfyUI ist, übernimmt SwarmUI dessen Modellkompatibilität, Custom-Node-Ökosystem und Workflow-Format fast vollständig. Die eingebaute „ComfyUI Backend Extension" stellt zudem eine direkte Durchgangsroute (`ComfyBackendDirect`) bereit, damit bestehende ComfyUI-Automatisierungsskripte und API-Integrationen weiter gegen ein von SwarmUI verwaltetes Backend funktionieren.',
          'Das ist der zentrale architektonische Unterschied zu AUTOMATIC1111s Stable Diffusion WebUI, das eine eigene, separate Inferenz-Pipeline mitbringt, statt ComfyUI zu umhüllen. Der Kompromiss von SwarmUI: Es hängt davon ab, dass ComfyUI selbst kompatibel bleibt und korrekt installiert ist — hat ComfyUI selbst ein Problem, erbt SwarmUI es, da SwarmUI keine eigene unabhängige Inferenz durchführt.',
        ],
      },
      multiGpuMultiUser: {
        id: 'multi-gpu-multi-user',
        title: 'Multi-GPU- und Multi-User-Unterstützung',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI kann Generierungsaufträge auf mehrere GPUs derselben Maschine oder über ein kleines Netzwerk von Maschinen verteilen und unterstützt mehrere angemeldete Nutzerkonten mit nutzerbezogenen Modell- und Berechtigungseinstellungen aus einer einzigen Installation.' },
          { type: 'plain-terms', text: 'Statt dass eine GPU eine Warteschlange von Bildanfragen nacheinander abarbeitet, kann SwarmUI unterschiedliche Anfragen gleichzeitig an unterschiedliche GPUs geben, und es kann Nutzer auseinanderhalten, damit ein gemeinsam genutzter Server nicht durcheinanderbringt, wer was angefordert hat.' },
        ],
        content: [
          '**Multi-GPU-Unterstützung ist das Feature, nach dem das Projekt benannt ist.** SwarmUI kann pro verfügbarer GPU auf einer Maschine (oder über mehrere Maschinen in einem Netzwerk) je ein ComfyUI-Backend betreiben und eingehende Generierungsaufträge über alle verteilen — nützlich für große Batch-/Grid-Generierungen oder für einen Haushalt bzw. ein kleines Team, das sich eine Multi-GPU-Workstation teilt, statt dass jede Person eine eigene dedizierte Karte braucht.',
          '**Multi-User-Unterstützung** ergänzt Login-Konten, nutzerbezogene Modellzugriffskontrollen und eine gemeinsame Job-Warteschlange, sodass eine einzige SwarmUI-Installation mehrere Personen bedienen kann, ohne dass jede eine separate Kopie der Software betreibt oder sich um die Warteschlange einer einzelnen GPU streitet. Weder AUTOMATIC1111s Stable Diffusion WebUI noch das Standard-ComfyUI liefern ein solches eingebautes Multi-User-Kontosystem mit — beide sind auf einen einzelnen lokalen Nutzer ausgelegt.',
          'Diese Kombination macht SwarmUI zu einem eigenständig anderen Tool als Single-GPU-, Single-User-Apps und nicht nur zu „ComfyUI mit hübscherer Oberfläche": Die Job-Verteilungs- und Konten-Schicht löst ein reales Koordinationsproblem, das erst auftritt, sobald man mehr als eine GPU oder mehr als eine Person hat, die auf derselben Hardware Bilder generieren möchte.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Unterstützte Modelle',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI unterstützt jede Modellfamilie, die ComfyUI für die Bildgenerierung unterstützt, einschließlich Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5 und FLUX, plus ausgewählte Video- und Audiomodelle, sobald ComfyUI dafür Unterstützung ergänzt.' },
          { type: 'plain-terms', text: 'Da SwarmUI darunter ComfyUI betreibt, kann es grundsätzlich jeden Modell-Checkpoint laden, den auch ComfyUI laden kann, ohne dass SwarmUI für jede neue Modellfamilie eigenen Code bräuchte.' },
        ],
        columns: ['Modellfamilie', 'Typ', 'Hinweise'],
        rows: [
          { 'Modellfamilie': 'Stable Diffusion 1.5', 'Typ': 'Bild', 'Hinweise': 'Weit verbreitetes älteres Checkpoint-Format; großes Community-LoRA-/Checkpoint-Ökosystem über ComfyUI' },
          { 'Modellfamilie': 'Stable Diffusion XL 1.0', 'Typ': 'Bild', 'Hinweise': '1024×1024-natives Modell; unterstützt genauso wie im Standard-ComfyUI' },
          { 'Modellfamilie': 'Stable Diffusion 3.5', 'Typ': 'Bild', 'Hinweise': 'Neuere multimodale Diffusion-Transformer-Architektur; erfordert die aktuellen Community-License-Bedingungen, die Stability AI für SD 3.5 selbst veröffentlicht, unabhängig von SwarmUI' },
          { 'Modellfamilie': 'FLUX (Black Forest Labs)', 'Typ': 'Bild', 'Hinweise': 'Unterstützt über ComfyUIs FLUX-Nodes; Lizenz hängt von der spezifischen FLUX-Variante ab (schnell vs. dev), nicht von SwarmUI' },
          { 'Modellfamilie': 'Video-/Audiomodelle', 'Typ': 'Video, Audio', 'Hinweise': 'Unterstützt, sobald ComfyUI selbst Unterstützung ergänzt und aktualisiert — prüfen Sie aktuelle ComfyUI- und SwarmUI-Release-Notizen für die genaue Modellabdeckung, bevor Sie sich auf ein bestimmtes Modell verlassen' },
        ],
        note: 'Die Modellunterstützung folgt ComfyUIs eigener Kompatibilitätsliste, die sich mit der Zeit ändert — prüfen Sie die aktuelle Unterstützung für einen bestimmten Checkpoint im [SwarmUI-GitHub-Repository](https://github.com/mcmonkeyprojects/SwarmUI) oder [ComfyUI-GitHub-Repository](https://github.com/comfy-org/ComfyUI), bevor Sie einen Workflow darauf festlegen. Die jeweilige Lizenz eines Modells (RAIL-M, Stability AI Community License, Apache 2.0 usw.) gilt unabhängig davon, in welcher Oberfläche Sie es laden — siehe den [Stable-Diffusion-Test](/de/power-local-llm/stable-diffusion-review) für eine Aufschlüsselung dieser Lizenzunterschiede je Version.',
      },
      installation: {
        id: 'installation',
        title: 'SwarmUI installieren',
        content: [
          'SwarmUI lässt sich unter Windows, Linux und macOS mit einem plattformübergreifend ähnlichen Ablauf installieren — die genauen Befehle unterscheiden sich leicht, daher ist dies der allgemeine Ablauf und keine plattformspezifische Anleitung.',
        ],
        numberedItems: [
          { title: 'GPU-Unterstützung und ausreichend VRAM prüfen', whyItMatters: 'Der VRAM-Bedarf von SwarmUI richtet sich nach dem Modell, das Sie über ComfyUI ausführen möchten — für SDXL sind etwa 8 GB VRAM ein vernünftiger Richtwert, für SD 3.5 oder FLUX mehr; prüfen Sie die Anforderungen des jeweiligen Modells vor der Installation.' },
          { title: 'SwarmUI-Installer für Ihr Betriebssystem herunterladen', whyItMatters: 'Beziehen Sie die aktuelle Version aus dem [mcmonkeyprojects/SwarmUI-GitHub-Repository](https://github.com/mcmonkeyprojects/SwarmUI) — dies ist das gepflegte, unabhängige Repository, nicht das archivierte Stability-AI/StableSwarmUI.' },
          { title: 'SwarmUI ComfyUI automatisch als Backend installieren lassen', whyItMatters: 'Die „Self-Start"-Backend-Option lässt SwarmUI ein ComfyUI-Backend automatisch konfigurieren, herunterladen und starten — dies ist für eine Erstinstallation der empfohlene Weg statt der manuellen Anbindung einer bestehenden ComfyUI-Instanz.' },
          { title: 'Einen Modell-Checkpoint herunterladen', whyItMatters: 'Besorgen Sie sich einen Stable-Diffusion-, SDXL-, SD-3.5- oder FLUX-Checkpoint von einer Quelle wie Hugging Face, legen Sie ihn im Modellordner ab, den die Setup-Dokumentation von SwarmUI angibt, und prüfen Sie die Lizenzbedingungen dieses Modells für Ihren geplanten Einsatz.' },
          { title: 'Zusätzliche GPU-Backends konfigurieren, falls mehr als eine Karte vorhanden ist', whyItMatters: 'Fügen Sie jede zusätzliche GPU als eigene Backend-Instanz in den Backend-Einstellungen von SwarmUI hinzu, damit Aufträge auf alle verteilt werden können statt nur auf die zuerst erkannte.' },
          { title: 'Nutzerkonten einrichten, falls mehrere Personen die Installation teilen', whyItMatters: 'Erstellen Sie separate Logins über die Multi-User-Einstellungen von SwarmUI, damit ein gemeinsam genutzter Server die Aufträge, Modelle und Berechtigungen jeder Person getrennt hält.' },
        ],
        note: 'Genaue Installationsschritte, Abhängigkeitsversionen und Ordnerpfade ändern sich zwischen Releases — folgen Sie für alles über den obigen allgemeinen Ablauf hinaus der aktuellen Anleitung im [SwarmUI-GitHub-README](https://github.com/mcmonkeyprojects/SwarmUI) statt einer generischen Anleitung wie dieser.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Preise und Lizenz',
        content: [
          '**SwarmUI ist kostenlos und quelloffen unter der MIT-Lizenz — es gibt keine kostenpflichtige Stufe, kein Abonnement und keine vom Projekt selbst verkaufte gehostete Version.** Sie zahlen nur für Ihre eigene Hardware und den Strom, wie bei jedem selbst gehosteten Tool.',
          'Die MIT-Lizenz ist permissiv: Sie erlaubt kommerzielle Nutzung, Modifikation und Weiterverbreitung mit Namensnennung und enthält keine Umsatzgrenze oder Registrierungspflicht, wie sie für manche Modelle gilt, die Sie darüber ausführen könnten (zum Beispiel erfordert Stability AIs Community License für SD 3.5 eine Registrierung oberhalb bestimmter Umsatzgrenzen). Die eigene Lizenz von SwarmUI schreibt das nicht vor — aber die Lizenz des jeweils geladenen Modell-Checkpoints gilt weiterhin unabhängig davon, da SwarmUI die Lizenzbedingungen eines Modells nicht verändert.',
          'Da es keinen offiziellen gehosteten SwarmUI-Dienst gibt, dreht sich „Preise" für dieses Tool ausschließlich um die Hardware, die Sie bereits besitzen oder kaufen möchten — es gibt keine Mitgliedschaftsstufe zum Vergleich, anders als bei Stability AIs eigenen gehosteten API- und Mitgliedschaftsplänen, die im [Stable-Diffusion-Test](/de/power-local-llm/stable-diffusion-review#pricing) behandelt werden.',
        ],
        note: 'Lizenzbedingungen können sich zwischen Releases ändern — prüfen Sie den aktuellen Lizenztext in der `LICENSE`-Datei im [SwarmUI-GitHub-Repository](https://github.com/mcmonkeyprojects/SwarmUI), bevor Sie eine kommerzielle Einsatzentscheidung treffen. Dies ist keine Rechtsberatung.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'SwarmUI vs. Alternativen',
        columns: ['Option', 'Am besten für', 'Multi-GPU/Multi-User', 'Architektur', 'Wichtigster Kompromiss'],
        rows: [
          {
            'Option': 'SwarmUI',
            'Am besten für': 'Mehrere GPUs oder mehrere Nutzer, die sich eine Installation teilen; formularbasierte Kontrolle über ein ComfyUI-Backend',
            'Multi-GPU/Multi-User': 'Ja — eingebaut',
            'Architektur': 'Umhüllt ComfyUI als Inferenz-Engine',
            'Wichtigster Kompromiss': 'Hängt von ComfyUIs Kompatibilität darunter ab; mehr bewegliche Teile als eine Single-User-App',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Am besten für': 'Volle manuelle Kontrolle über jeden Generierungsschritt über einen Node-Graph',
            'Multi-GPU/Multi-User': 'Nein — standardmäßig Single-User',
            'Architektur': 'Eigenständige Node-Graph-Inferenz-Engine',
            'Wichtigster Kompromiss': 'Steilste Lernkurve der Gruppe; keine eingebaute Multi-GPU-Job-Verteilung oder Konten',
          },
          {
            'Option': '[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Am besten für': 'Single-GPU-Nutzer, die das größte Erweiterungs-Ökosystem für eine formularbasierte UI wollen',
            'Multi-GPU/Multi-User': 'Nein — per Design Single-User, Single-GPU',
            'Architektur': 'Eigene separate Inferenz-Pipeline, nicht auf ComfyUI-Basis',
            'Wichtigster Kompromiss': 'Keine eingebaute Multi-GPU-/Multi-User-Unterstützung; separate Codebasis vom ComfyUI-Ökosystem',
          },
          {
            'Option': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Am besten für': 'Ausgereifter, professionell wirkender Single-User-Kreativ-Workflow mit einheitlicher Leinwand',
            'Multi-GPU/Multi-User': 'Nein — Fokus auf Single-User',
            'Architektur': 'Eigene Inferenz-Pipeline',
            'Wichtigster Kompromiss': 'Kleineres Node-/Erweiterungs-Ökosystem als ComfyUI; nicht auf Multi-GPU-Verteilung ausgelegt',
          },
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Am besten für': 'Schnellster Weg zu einem ersten guten Bild mit den wenigsten zu konfigurierenden Einstellungen',
            'Multi-GPU/Multi-User': 'Nein — Single-User, minimal-konfigurierbares Design',
            'Architektur': 'Eigene vereinfachte, auf Stable Diffusion aufbauende Inferenz-Pipeline',
            'Wichtigster Kompromiss': 'Bewusst eingeschränkte Konfigurierbarkeit zugunsten von Einfachheit; nicht auf Multi-GPU-Setups ausgelegt',
          },
        ],
        note: 'Dies ist eine Einordnung, keine Benchmark-Rangliste — siehe den [Stable-Diffusion-Test](/de/power-local-llm/stable-diffusion-review) für Lizenz- und VRAM-Details zu den zugrunde liegenden Modellen, die alle diese Oberflächen ausführen, und [Lokale KI-Bildgenerierung vs. Cloud](/de/power-local-llm/local-ai-image-generation-vs-cloud) für einen breiteren Vergleich von lokal und Cloud.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich SwarmUI eignet',
        items: [
          '**Leser mit mehr als einer GPU.** Der Job-Verteilungs-Scheduler von SwarmUI ist das einzige Tool in diesem Vergleich, das speziell dafür gebaut ist, mehrere Karten an derselben Arbeits-Charge auszulasten.',
          '**Haushalt, Team oder Labor, das sich eine Maschine teilt.** Eingebaute Multi-User-Konten lassen mehrere Personen über dieselbe Installation Bilder generieren, ohne sich gegenseitig Aufträge oder Modelle zu überschreiben.',
          '**Leser, der ComfyUIs Modellunterstützung nutzen möchte, ohne jeden Workflow als Node-Graph aufzubauen.** Der formularbasierte „Generate"-Tab deckt gängige Fälle ab; der Node-Graph ist weiterhin verfügbar, wenn man ihn braucht.',
          '**Leser, der bereits mit ComfyUI vertraut ist und eine freundlichere Alltagsschicht darüber möchte.** SwarmUI verlangt nicht, ComfyUI aufzugeben — es macht es über den „Comfy Workflow"-Tab direkt zugänglich.',
          '**Leser, der ein permissiv lizenziertes (MIT), aktiv und unabhängig gepflegtes Projekt** mit klarer, dokumentierter Geschichte statt eines aufgegebenen Forks möchte.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich SwarmUI nicht eignet',
        items: [
          '**Gelegenheitsnutzer mit einer GPU, der einfach nur das erste Bild mit möglichst wenig Aufwand will.** [Fooocus](https://github.com/lllyasviel/Fooocus) hat weniger Einstellungen und einen kürzeren Weg zum ersten Ergebnis; SwarmUIs Multi-GPU-/Multi-User-Schicht ist für einen einzelnen Gelegenheitsnutzer ungenutzter Ballast.',
          '**Leser, der das größte Erweiterungs-/Skript-Ökosystem für eine formularbasierte UI möchte.** [AUTOMATIC1111s Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) hat eine längere Erfolgsbilanz und einen größeren Erweiterungskatalog für diesen speziellen Anwendungsfall.',
          '**Leser, der volle manuelle Node-Graph-Kontrolle ohne jede umhüllende Schicht möchte.** Nutzen Sie [ComfyUI](https://github.com/comfy-org/ComfyUI) direkt statt über SwarmUI, wenn Sie den vereinfachten „Generate"-Tab überhaupt nicht wollen.',
          '**Leser, der ein Single-User-Kreativ-Tool mit einheitlicher Leinwand und einem ausgefeilteren eingebauten Editor möchte.** [InvokeAI](https://github.com/invoke-ai/InvokeAI) zielt direkter auf diesen Anwendungsfall ab als SwarmUIs Fokus auf Multi-GPU/Multi-User.',
          '**Leser, der fälschlich ein offizielles Stability-AI-Produkt oder einen Stability-AI-Support-Kanal erwartet.** SwarmUI hat seit Juni 2024 keine laufende Zugehörigkeit zu Stability AI mehr — Support kommt vom unabhängigen Maintainer und der Community, nicht von Stability AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist StableSwarmUI noch der korrekte Name für dieses Projekt?',
            a: 'Nein. Das Projekt wurde im Juni 2024 von „StableSwarmUI" in „SwarmUI" umbenannt, als es von der Stability-AI-GitHub-Organisation zum unabhängigen Repository [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) unter Maintainer Alex „mcmonkey" Goodwin wechselte. „StableSwarmUI" ist der frühere Name; aktuelle Dokumentation, Releases und das GitHub-Repository verwenden durchgängig „SwarmUI".',
          },
          {
            q: 'Wird SwarmUI noch von Stability AI entwickelt oder gepflegt?',
            a: 'Nein, Stand dieses Tests (2026-09-06). Stability AI veröffentlichte das Projekt ursprünglich als StableSwarmUI, stellte die Pflege aber ein; der ursprüngliche Entwickler machte es im Juni 2024 vollständig unabhängig. Es gibt keine laufende Beteiligung von Stability AI an der heutigen Entwicklung von SwarmUI.',
          },
          {
            q: 'Nutzt SwarmUI ComfyUI, oder ist es eine eigenständige Bildgenerierungs-Engine?',
            a: 'SwarmUI nutzt ComfyUI als Backend-Inferenz-Engine, statt eine eigene separate Generierungs-Pipeline mitzuliefern. Der „Generate"-Tab von SwarmUI sendet Aufträge an eine oder mehrere ComfyUI-Backend-Instanzen, und der eingebaute „Comfy Workflow"-Tab macht den zugrunde liegenden ComfyUI-Node-Graph direkt zugänglich, wenn volle manuelle Kontrolle gewünscht ist.',
          },
          {
            q: 'Welche Modelle unterstützt SwarmUI?',
            a: 'SwarmUI unterstützt dieselben Modellfamilien wie ComfyUI, einschließlich Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5 und FLUX. Da SwarmUI darunter ComfyUI betreibt, folgt seine Modellabdeckung ComfyUIs eigenen Updates — prüfen Sie die aktuellen GitHub-Repositories von SwarmUI und ComfyUI für die neueste Liste unterstützter Modelle.',
          },
          {
            q: 'Ist SwarmUI kostenlos?',
            a: 'Ja. SwarmUI ist kostenlos und quelloffen unter der MIT-Lizenz, ohne kostenpflichtige Stufe oder Abonnement seitens des Projekts. Sie müssen weiterhin die Lizenz des jeweils geladenen Modell-Checkpoints prüfen (Stable Diffusion, FLUX usw.), da diese Lizenzen unabhängig von SwarmUIs eigener MIT-Lizenz sind.',
          },
          {
            q: 'Wie unterscheidet sich SwarmUI von AUTOMATIC1111 oder Fooocus für einen Single-GPU-Nutzer?',
            a: 'AUTOMATIC1111s Stable Diffusion WebUI und Fooocus bringen beide eigene eigenständige Inferenz-Pipelines mit und sind auf einen Nutzer mit einer GPU ausgelegt, ohne eingebaute Multi-GPU-Job-Verteilung oder Multi-User-Konten. SwarmUI ist speziell dafür gebaut, beides — Multi-GPU-Lastverteilung und Multi-User-Logins — auf ComfyUI aufzusetzen, was unnötiger Ballast ist, wenn Sie nur eine GPU und einen Nutzer haben.',
          },
          {
            q: 'Können mehrere Personen SwarmUI gleichzeitig nutzen?',
            a: 'Ja. SwarmUI verfügt über eingebaute Multi-User-Unterstützung mit getrennten Login-Konten, nutzerbezogenen Modellzugriffskontrollen und einer gemeinsamen Job-Warteschlange, sodass mehrere Personen über eine gemeinsame Installation Bilder generieren können, ohne jeweils eine eigene Kopie der Software zu benötigen.',
          },
          {
            q: 'Wo kann ich SwarmUI herunterladen?',
            a: 'Das aktuelle, gepflegte Repository ist [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) auf GitHub. Das ältere Repository Stability-AI/StableSwarmUI spiegelt die eingestellte Version von vor Juni 2024 wider und ist nicht die aktiv entwickelte Codebasis.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'SwarmUI verdient eine spezifische, eng gefasste Empfehlung: Es ist die klarste Option für Leser mit mehr als einer GPU oder mehr als einer Person, die sich eine einzige Stable-Diffusion-/FLUX-Installation teilen möchten — ein Koordinationsproblem, das AUTOMATIC1111, Fooocus und Standard-ComfyUI schlicht nicht adressieren. Seine ComfyUI-Backend-Architektur bedeutet, dass es die Modellunterstützung und Node-Graph-Leistungsfähigkeit dieses Projekts übernimmt, ohne jeden Routine-Auftrag durch einen Node-Graph zu zwingen — auf Kosten der Abhängigkeit von ComfyUIs eigener Kompatibilität darunter. Die Geschichte des Projekts sollte man ehrlich kennen: Es begann als Stability AIs „StableSwarmUI", Stability AI stellte die Pflege ein, und der ursprüngliche Entwickler führte es im Juni 2024 unabhängig weiter als „SwarmUI" — heute besteht keine laufende Zugehörigkeit zu Stability AI mehr. Leser mit einer einzelnen GPU und ohne Multi-User-Bedarf sind meist mit Fooocus wegen der Einfachheit oder mit AUTOMATIC1111 wegen des größeren Single-User-Erweiterungs-Ökosystems besser bedient; Leser, die SwarmUIs spezifische Multi-GPU- oder Multi-User-Fähigkeit wollen, sollten es aus dem aktuellen, gepflegten Repository [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) beziehen, nicht aus dem archivierten Stability-AI-Repository.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[mcmonkeyprojects/SwarmUI — GitHub-Repository](https://github.com/mcmonkeyprojects/SwarmUI) — aktuelles, gepflegtes Projekt, README, Lizenz und Releases.',
          '[Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI — GitHub Discussion #2](https://github.com/mcmonkeyprojects/SwarmUI/discussions/2) — die eigene Darstellung des Maintainers zur Umbenennung im Juni 2024 und den Migrationsschritten.',
          '[Stability-AI/StableSwarmUI — GitHub-Repository (archiviert/eingestellt)](https://github.com/Stability-AI/StableSwarmUI) — ursprüngliches Projekt unter Stability AI, nicht mehr aktiv entwickelt.',
          '[ComfyUI Backend Extension README — SwarmUI GitHub](https://github.com/mcmonkeyprojects/SwarmUI/blob/master/src/BuiltinExtensions/ComfyUIBackend/README.md) — dokumentiert die ComfyUI-Backend-Architektur und den ComfyBackendDirect-Durchgang.',
          '[ComfyUI — GitHub-Repository](https://github.com/comfy-org/ComfyUI) — die Inferenz-Engine, die SwarmUI als Backend betreibt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Stable Diffusion Test (2026)](/de/power-local-llm/stable-diffusion-review) — die zugrunde liegende Modellfamilie, die SwarmUI ausführt, inklusive Lizenzbedingungen und VRAM-Bedarf je Version.',
          '[Lokale KI-Bildgenerierung vs. Cloud](/de/power-local-llm/local-ai-image-generation-vs-cloud) — breiterer Vergleich lokaler Bildmodelle und Oberflächen mit Cloud-Tools wie Midjourney und Adobe Firefly.',
          '[Local LLM Software Directory 2026](/de/power-local-llm/local-llm-software-directory) — umfassendes Verzeichnis lokaler KI-Software für alle Plattformen.',
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
    heroImage: '/images/stableswarmui-review-hero-es.webp',
    title: 'Reseña de SwarmUI (2026): la interfaz web multi-GPU para Stable Diffusion',
    seoTitle: 'SwarmUI 2026: interfaz multi-GPU basada en ComfyUI',
    intro:
      'SwarmUI — antes llamada StableSwarmUI — es una interfaz web gratuita, de código abierto y modular para Stable Diffusion, FLUX y otros modelos locales de generación de imágenes y video, diseñada para operar varias GPU y varios usuarios desde una única instalación compartida. Usa [ComfyUI](https://github.com/comfy-org/ComfyUI) como motor de inferencia subyacente: en lugar de construir un backend de generación de imágenes desde cero, SwarmUI envuelve ComfyUI en una pestaña "Generate" basada en formularios para el uso diario, mientras sigue exponiendo el grafo de nodos de ComfyUI para quienes quieran control manual completo. Esta reseña cubre qué es SwarmUI hoy (incluida la historia honesta de su cambio de nombre y su relación ahora totalmente independiente con Stability AI), su arquitectura multi-GPU y multiusuario, el soporte de modelos, la instalación, la licencia y cómo se compara con herramientas de un solo usuario como AUTOMATIC1111 y Fooocus.',
    metaDescription:
      'Reseña de SwarmUI 2026: la interfaz web multi-GPU y multiusuario para Stable Diffusion, construida sobre ComfyUI. Cambio de nombre desde StableSwarmUI, licencia MIT, soporte de modelos e instalación.',
    twitterDescription:
      'Reseña de SwarmUI 2026: antes StableSwarmUI, ahora una interfaz web independiente, con licencia MIT y basada en ComfyUI para generación multi-GPU con Stable Diffusion y FLUX. Instalación, arquitectura y compromisos honestos.',
    audience:
      'Lectores con varias GPU o configuraciones compartidas/multiusuario que deciden si la interfaz de SwarmUI, basada en formularios y respaldada por ComfyUI, encaja mejor que AUTOMATIC1111, Fooocus o ComfyUI puro.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'SwarmUI review',
    targetKeywords: [
      'swarmui reseña',
      'stableswarmui vs swarmui',
      'swarmui multi gpu',
      'swarmui comfyui backend',
      'swarmui vs automatic1111',
      'swarmui vs comfyui',
      'instalar swarmui',
      'swarmui stability ai',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL 1.0', 'Stable Diffusion 3.5', 'FLUX.1 dev', 'FLUX.1 schnell'],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**SwarmUI es una interfaz web gratuita, con licencia MIT y basada en ComfyUI para Stable Diffusion y FLUX, construida específicamente para funcionar en varias GPU y con varios usuarios desde una única instalación compartida.** Fue publicada originalmente por Stability AI como "StableSwarmUI" y se volvió totalmente independiente —sin participación continua de Stability AI— como "SwarmUI" bajo el mantenedor Alex "mcmonkey" Goodwin en junio de 2024. Por debajo ejecuta [ComfyUI](https://github.com/comfy-org/ComfyUI) como motor de inferencia, por lo que hereda el soporte de modelos de ComfyUI (Stable Diffusion, SDXL, SD 3.5, FLUX) mientras presenta una pestaña "Generate" más simple basada en formularios. Los lectores con una sola GPU y sin necesidad de acceso multiusuario suelen estar mejor servidos con [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) o [Fooocus](https://github.com/lllyasviel/Fooocus).',
    quickAnswerTop: {
      es: {
        question: '¿Qué es SwarmUI, y sigue siendo desarrollado por Stability AI?',
        answer:
          'SwarmUI es una interfaz web gratuita y de código abierto para Stable Diffusion y FLUX que puede operar varias GPU y varios usuarios desde una sola instalación. Actualmente no está hecha por Stability AI: comenzó en Stability AI como "StableSwarmUI", pero Stability AI dejó de mantenerla y el desarrollador original, Alex "mcmonkey" Goodwin, la volvió totalmente independiente con el nuevo nombre "SwarmUI" en junio de 2024. No ha tenido participación continua de Stability AI desde entonces.',
        bullets: [
          'Nombre actual: SwarmUI. Nombre anterior: StableSwarmUI (usado solo hasta junio de 2024, bajo Stability AI).',
          'Mantenedor actual: Alex "mcmonkey" Goodwin, de forma independiente — no Stability AI.',
          'Repositorio actual: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) en GitHub (el antiguo repositorio Stability-AI/StableSwarmUI está archivado/descontinuado).',
          'Licencia: MIT (permisiva, gratuita para uso comercial y personal).',
          'Arquitectura: SwarmUI ejecuta ComfyUI como motor de inferencia backend y añade encima una interfaz más simple basada en formularios, distribución de trabajos multi-GPU y cuentas multiusuario.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es SwarmUI', anchor: 'what-is-swarmui' },
      { label: 'Historia: de StableSwarmUI al SwarmUI independiente', anchor: 'history' },
      { label: 'Cómo funciona la arquitectura basada en ComfyUI', anchor: 'architecture' },
      { label: 'Soporte multi-GPU y multiusuario', anchor: 'multi-gpu-multi-user' },
      { label: 'Modelos compatibles', anchor: 'model-support' },
      { label: 'Cómo instalar SwarmUI', anchor: 'installation' },
      { label: 'Precio y licencia', anchor: 'pricing-license' },
      { label: 'SwarmUI vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'A quién le conviene SwarmUI', anchor: 'who-should-use' },
      { label: 'A quién no le conviene SwarmUI', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        items: [
          'SwarmUI (antes StableSwarmUI) es una interfaz web gratuita, de código abierto y con licencia MIT para Stable Diffusion y FLUX, construida para operar varias GPU y varios usuarios desde una sola instalación.',
          'Comenzó en Stability AI como "StableSwarmUI"; Stability AI dejó de mantenerla y el desarrollador original, Alex "mcmonkey" Goodwin, la hizo totalmente independiente como "SwarmUI" en junio de 2024 — sin participación continua de Stability AI desde entonces.',
          'Repositorio actual: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI); el repositorio antiguo estaba en Stability-AI/StableSwarmUI.',
          'SwarmUI ejecuta [ComfyUI](https://github.com/comfy-org/ComfyUI) como motor de inferencia backend — no reemplaza el código de generación de ComfyUI, lo envuelve en una pestaña "Generate" más amigable mientras el grafo de nodos sigue expuesto.',
          'Soporta todos los modelos que soporta ComfyUI, incluyendo Stable Diffusion 1.5/XL, Stable Diffusion 3.5 y FLUX; la cobertura exacta de modelos sigue las propias actualizaciones de ComfyUI.',
          'Ideal para lectores con varias GPU o acceso compartido/en equipo que quieren el soporte de modelos de ComfyUI sin construir cada flujo de trabajo como un grafo de nodos; los usuarios casuales con una sola GPU suelen estar mejor servidos con AUTOMATIC1111 o Fooocus.',
        ],
      },
      whatIsSwarmUI: {
        id: 'what-is-swarmui',
        title: 'Qué es SwarmUI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI es una interfaz web gratuita y de código abierto para generación de imágenes con Stable Diffusion y FLUX que ejecuta ComfyUI como backend y añade distribución de trabajos multi-GPU y cuentas multiusuario.' },
          { type: 'plain-terms', text: 'Piénsalo como un panel de control más amigable montado sobre ComfyUI — obtienes un formulario simple para escribir un prompt y elegir un modelo, pero la generación de imágenes real por debajo sigue siendo obra de ComfyUI, ahora capaz de repartir trabajos entre varias GPU o varias personas.' },
        ],
        content: [
          '**SwarmUI es una interfaz web modular basada en formularios para generación local de imágenes y video, distinta de la interfaz de grafo de nodos que trae ComfyUI por defecto.** Apunta a los mismos modelos subyacentes que ComfyUI —Stable Diffusion, SDXL, SD 3.5, FLUX— pero los presenta mediante una pestaña "Generate" más simple con menús desplegables y controles deslizantes, pensada para lectores a quienes un grafo de nodos completo les resulta más lento para la generación rutinaria.',
          'El nombre "Swarm" (enjambre) hace referencia a su función original principal: coordinar un "enjambre" de GPU para que varias tarjetas gráficas trabajen a la vez en el mismo lote de imágenes, en lugar de que una sola GPU procese una cola sola. Esa distribución de trabajos multi-GPU, sumada al inicio de sesión multiusuario y al acceso a modelos por usuario integrados, es lo que separa a SwarmUI de herramientas de un solo usuario como Stable Diffusion WebUI de AUTOMATIC1111 o Fooocus.',
          'SwarmUI está escrita en C#/.NET del lado del servidor con un frontend web, y se distribuye como una aplicación autoalojada — no existe una versión oficial en la nube. Todo se ejecuta en hardware que tú controlas, ya sea una GPU de gaming o una pequeña estación de trabajo multi-GPU.',
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: de StableSwarmUI al SwarmUI independiente',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI comenzó como "StableSwarmUI", un proyecto oficial de Stability AI, y se convirtió en un proyecto totalmente independiente, mantenido por la comunidad, bajo el nuevo nombre "SwarmUI" en junio de 2024, después de que Stability AI dejara de mantenerlo.' },
          { type: 'plain-terms', text: 'Stability AI construyó la primera versión y le puso su nombre, y luego dejó de mantenerla; el desarrollador original siguió construyéndola por su cuenta bajo un nuevo nombre en lugar de dejarla morir.' },
        ],
        content: [
          '**El proyecto se publicó originalmente bajo la organización de GitHub de Stability AI como "StableSwarmUI", desarrollado principalmente por Alex "mcmonkey" Goodwin.** Las notas de lanzamiento públicas y los hilos de discusión en el repositorio original [Stability-AI/StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI) documentan sus primeros anuncios de funciones mientras llevaba el nombre y los derechos de autor de Stability AI.',
          'En junio de 2024, Stability AI dejó de mantener StableSwarmUI. En lugar de que el proyecto quedara inactivo, mcmonkey lo hizo independiente, publicando una "Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI" y renombrando el proyecto a "SwarmUI" en un nuevo repositorio, [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI). Las instalaciones existentes podían migrar actualizando y ejecutando un script de migración proporcionado (`migrate-windows.bat` en Windows, o redirigiendo manualmente el remoto de Git a `mcmonkeyprojects/SwarmUI` en Linux/Mac).',
          '**A la fecha de esta reseña (2026-09-06), SwarmUI no tiene afiliación continua con Stability AI** — es mantenido de forma independiente por mcmonkey y colaboradores de la comunidad, bajo la licencia MIT, con derechos de autor atribuidos a "Alex \'mcmonkey\' Goodwin" para el período 2024–2026 que cubre el archivo de licencia actual. El repositorio original Stability-AI/StableSwarmUI ya no es la base de código en desarrollo activo; el proyecto actual y mantenido vive en mcmonkeyprojects/SwarmUI.',
          '**Por qué este artículo conserva el slug "stableswarmui-review" a pesar del cambio de nombre:** los lectores que buscan la herramienta por su nombre original, más conocido, siguen llegando aquí — el cuerpo del artículo y el título usan el nombre actual y correcto, "SwarmUI", en todo momento, y esta sección expone el cambio de nombre con claridad para que nadie se confunda sobre quién mantiene el proyecto hoy.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Cómo funciona la arquitectura basada en ComfyUI',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI no contiene su propio motor de generación de imágenes — ejecuta ComfyUI como proceso backend y le envía los trabajos de generación, luego muestra los resultados en su propia interfaz simplificada.' },
          { type: 'plain-terms', text: 'ComfyUI hace el trabajo real de convertir un prompt en una imagen; SwarmUI es la capa superior que decide qué backend recibe cada trabajo y te muestra una pantalla más simple en lugar del grafo de nodos de ComfyUI.' },
        ],
        columns: ['Capa', 'Qué hace', '¿Se puede acceder directamente?'],
        rows: [
          { 'Capa': 'Interfaz web de SwarmUI', 'Qué hace': 'Pestaña "Generate" basada en formularios, cola de trabajos, cuentas multiusuario, enrutamiento multi-GPU', '¿Se puede acceder directamente?': 'Sí — es la interfaz predeterminada' },
          { 'Capa': 'Backend(s) de ComfyUI', 'Qué hace': 'Ejecuta la inferencia real del modelo de difusión (Stable Diffusion, SDXL, FLUX, etc.)', '¿Se puede acceder directamente?': 'Sí, mediante la pestaña integrada "Comfy Workflow" y el grafo de nodos' },
          { 'Capa': 'Hardware GPU', 'Qué hace': 'Ejecuta el cómputo del modelo para cada instancia de backend de ComfyUI', '¿Se puede acceder directamente?': 'No aplica — gestionado por el planificador de backend de SwarmUI' },
        ],
        content: [
          'SwarmUI puede instalar e iniciar automáticamente un backend de ComfyUI en el primer arranque, o conectarse a una o más instancias de ComfyUI que ya ejecutes tú mismo, incluidas instancias remotas en red. Cada backend configurado se trata como un worker: cuando envías una solicitud de generación, el planificador de SwarmUI la asigna a una instancia de backend disponible.',
          'Como el motor de inferencia subyacente es ComfyUI sin modificar, SwarmUI hereda casi por completo la compatibilidad de modelos, el ecosistema de nodos personalizados y el formato de flujo de trabajo de ComfyUI. La "ComfyUI Backend Extension" integrada también expone una ruta de paso directo (`ComfyBackendDirect`) para que los scripts de automatización e integraciones API de ComfyUI existentes sigan funcionando contra un backend gestionado por SwarmUI.',
          'Esta es la diferencia arquitectónica clave respecto a Stable Diffusion WebUI de AUTOMATIC1111, que trae su propia canalización de inferencia separada en lugar de envolver ComfyUI. La contrapartida de SwarmUI es que depende de que ComfyUI se mantenga compatible e instalado correctamente — si ComfyUI mismo tiene un problema, SwarmUI lo hereda, ya que SwarmUI no realiza su propia inferencia independiente.',
        ],
      },
      multiGpuMultiUser: {
        id: 'multi-gpu-multi-user',
        title: 'Soporte multi-GPU y multiusuario',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI puede distribuir trabajos de generación entre varias GPU en la misma máquina o entre una pequeña red de máquinas, y admite varias cuentas de usuario conectadas con configuraciones de modelos y permisos por usuario desde una sola instalación.' },
          { type: 'plain-terms', text: 'En lugar de que una GPU procese una cola de solicitudes de imágenes una por una, SwarmUI puede asignar solicitudes distintas a GPU distintas al mismo tiempo, y puede distinguir a los usuarios para que un servidor compartido no mezcle quién pidió qué.' },
        ],
        content: [
          '**El soporte multi-GPU es la característica que da nombre al proyecto.** SwarmUI puede ejecutar un backend de ComfyUI por cada GPU disponible en una máquina (o entre varias máquinas en red) y balancear la carga de los trabajos de generación entrantes entre todas ellas — útil para generaciones grandes por lotes/grid, o para un hogar o equipo pequeño que comparte una estación de trabajo multi-GPU en lugar de que cada persona necesite su propia tarjeta dedicada.',
          '**El soporte multiusuario** añade cuentas de inicio de sesión, controles de acceso a modelos por usuario y una cola de trabajos compartida, de modo que una sola instalación de SwarmUI puede atender a varias personas sin que cada una ejecute una copia separada del software o compita por la cola de una sola GPU. Ni Stable Diffusion WebUI de AUTOMATIC1111 ni ComfyUI de fábrica traen este tipo de sistema de cuentas multiusuario integrado — ambos están diseñados en torno a un único usuario local.',
          'Esta combinación es lo que hace de SwarmUI una herramienta significativamente distinta de las apps de una sola GPU y un solo usuario, y no solo "ComfyUI con una piel más bonita": la capa de distribución de trabajos y cuentas resuelve un problema de coordinación real que solo aparece cuando tienes más de una GPU o más de una persona que quiere generar imágenes en el mismo hardware.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Modelos compatibles',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI soporta cada familia de modelos que soporta ComfyUI para generación de imágenes, incluyendo Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5 y FLUX, además de modelos selectos de video y audio a medida que ComfyUI añade soporte para ellos.' },
          { type: 'plain-terms', text: 'Como SwarmUI ejecuta ComfyUI por debajo, en general puede cargar cualquier checkpoint de modelo que ComfyUI pueda cargar, sin que SwarmUI necesite código separado para cada nueva familia de modelos.' },
        ],
        columns: ['Familia de modelo', 'Tipo', 'Notas'],
        rows: [
          { 'Familia de modelo': 'Stable Diffusion 1.5', 'Tipo': 'Imagen', 'Notas': 'Formato de checkpoint clásico ampliamente soportado; gran ecosistema comunitario de LoRA/checkpoints vía ComfyUI' },
          { 'Familia de modelo': 'Stable Diffusion XL 1.0', 'Tipo': 'Imagen', 'Notas': 'Modelo nativo de 1024×1024; soportado igual que en el ComfyUI de fábrica' },
          { 'Familia de modelo': 'Stable Diffusion 3.5', 'Tipo': 'Imagen', 'Notas': 'Arquitectura más reciente de transformador de difusión multimodal; requiere los términos actuales de la Community License que Stability AI publica para SD 3.5, independientes de SwarmUI' },
          { 'Familia de modelo': 'FLUX (Black Forest Labs)', 'Tipo': 'Imagen', 'Notas': 'Soportado mediante los nodos FLUX de ComfyUI; la licencia depende de la variante específica de FLUX (schnell vs. dev), no de SwarmUI' },
          { 'Familia de modelo': 'Modelos de video/audio', 'Tipo': 'Video, audio', 'Notas': 'Soportados a medida que el propio ComfyUI añade y actualiza soporte — verifica las notas de lanzamiento actuales de ComfyUI y SwarmUI para la cobertura exacta de modelos antes de depender de uno en concreto' },
        ],
        note: 'El soporte de modelos sigue la propia lista de compatibilidad de ComfyUI, que cambia con el tiempo — verifica el soporte actual de cualquier checkpoint específico en el [repositorio de GitHub de SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) o el [repositorio de GitHub de ComfyUI](https://github.com/comfy-org/ComfyUI) antes de basar un flujo de trabajo en él. La licencia propia de cada modelo (RAIL-M, Stability AI Community License, Apache 2.0, etc.) aplica sin importar en qué interfaz lo cargues — consulta la [Reseña de Stable Diffusion](/es/power-local-llm/stable-diffusion-review) para un desglose de esas diferencias de licencia por versión.',
      },
      installation: {
        id: 'installation',
        title: 'Cómo instalar SwarmUI',
        content: [
          'SwarmUI se instala en Windows, Linux y macOS con una forma general similar entre plataformas — los comandos exactos difieren ligeramente, así que esta es la secuencia general y no instrucciones específicas por plataforma.',
        ],
        numberedItems: [
          { title: 'Confirma que tienes una GPU compatible y suficiente VRAM', whyItMatters: 'Los requisitos de VRAM de SwarmUI dependen del modelo que planees ejecutar a través de ComfyUI — por ejemplo, unos 8 GB de VRAM son un piso razonable para SDXL, más para SD 3.5 o FLUX; revisa los requisitos propios del modelo antes de instalar.' },
          { title: 'Descarga el instalador de SwarmUI para tu sistema operativo', whyItMatters: 'Obtén la versión actual del [repositorio de GitHub mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) — este es el repositorio mantenido e independiente, no el archivado Stability-AI/StableSwarmUI.' },
          { title: 'Deja que SwarmUI instale ComfyUI automáticamente como backend', whyItMatters: 'La opción de backend "Self-Start" permite que SwarmUI configure, descargue e inicie un backend de ComfyUI automáticamente, que es el camino recomendado para una primera instalación en lugar de conectar manualmente una instancia de ComfyUI existente.' },
          { title: 'Descarga un checkpoint de modelo', whyItMatters: 'Consigue un checkpoint de Stable Diffusion, SDXL, SD 3.5 o FLUX desde una fuente como Hugging Face, colócalo en la carpeta de modelos que especifica la documentación de configuración de SwarmUI, y confirma los términos de licencia de ese modelo para tu uso previsto.' },
          { title: 'Configura backends de GPU adicionales si tienes más de una tarjeta', whyItMatters: 'Añade cada GPU adicional como su propia instancia de backend en la configuración de backends de SwarmUI para que los trabajos puedan distribuirse entre todas en lugar de solo la primera detectada.' },
          { title: 'Configura cuentas de usuario si varias personas compartirán la instalación', whyItMatters: 'Crea inicios de sesión separados con la configuración multiusuario de SwarmUI para que un servidor compartido mantenga los trabajos, modelos y permisos de cada persona separados.' },
        ],
        note: 'Los pasos exactos de instalación, las versiones de dependencias y las rutas de carpetas cambian entre versiones — sigue las instrucciones actuales del [README de GitHub de SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) en lugar de una guía genérica, incluida esta, para cualquier cosa más allá de la forma general anterior.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Precio y licencia',
        content: [
          '**SwarmUI es gratuito y de código abierto bajo la licencia MIT — no hay un nivel de pago, suscripción ni versión alojada vendida por el propio proyecto.** Solo pagas por tu propio hardware y electricidad, igual que con cualquier herramienta autoalojada.',
          'La licencia MIT es permisiva: permite uso comercial, modificación y redistribución con atribución, y no impone un límite de ingresos ni un requisito de registro como el que aplica a algunos de los modelos que podrías ejecutar a través de ella (por ejemplo, la Community License de Stability AI para SD 3.5 exige registro por encima de ciertos ingresos). La propia licencia de SwarmUI no impone eso — pero la licencia del checkpoint de modelo que cargues sigue aplicando de forma independiente, ya que SwarmUI no cambia los términos de licencia propios de un modelo.',
          'Como no existe un servicio oficial de SwarmUI alojado, el "precio" de esta herramienta gira enteramente en torno al hardware que ya posees o decides comprar — no hay un nivel de membresía que comparar, a diferencia de los propios planes de API alojada y membresía de Stability AI cubiertos en la [Reseña de Stable Diffusion](/es/power-local-llm/stable-diffusion-review#pricing).',
        ],
        note: 'Los términos de la licencia pueden cambiar entre versiones — confirma el texto actual de la licencia en el archivo `LICENSE` del [repositorio de GitHub de SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) antes de una decisión de despliegue comercial. Esto no es asesoría legal.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'SwarmUI vs. alternativas',
        columns: ['Opción', 'Mejor para', 'Multi-GPU/multiusuario', 'Arquitectura', 'Principal contrapartida'],
        rows: [
          {
            'Opción': 'SwarmUI',
            'Mejor para': 'Varias GPU o varios usuarios compartiendo una instalación, control basado en formularios sobre un backend de ComfyUI',
            'Multi-GPU/multiusuario': 'Sí — integrado',
            'Arquitectura': 'Envuelve ComfyUI como motor de inferencia',
            'Principal contrapartida': 'Depende de la compatibilidad de ComfyUI por debajo; más piezas móviles que una app de un solo usuario',
          },
          {
            'Opción': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Mejor para': 'Control manual completo sobre cada paso de generación mediante un grafo de nodos',
            'Multi-GPU/multiusuario': 'No — un solo usuario por defecto',
            'Arquitectura': 'Motor de inferencia de grafo de nodos independiente',
            'Principal contrapartida': 'Curva de aprendizaje más pronunciada del grupo; sin distribución de trabajos multi-GPU ni cuentas integradas',
          },
          {
            'Opción': '[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Mejor para': 'Usuarios de una sola GPU que quieren el ecosistema de extensiones más grande para una interfaz basada en formularios',
            'Multi-GPU/multiusuario': 'No — un solo usuario, una sola GPU por diseño',
            'Arquitectura': 'Canalización de inferencia propia y separada, no basada en ComfyUI',
            'Principal contrapartida': 'Sin soporte integrado multi-GPU/multiusuario; base de código separada del ecosistema de ComfyUI',
          },
          {
            'Opción': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Mejor para': 'Flujo de trabajo creativo de un solo usuario, pulido y de aspecto profesional, con lienzo unificado',
            'Multi-GPU/multiusuario': 'No — enfoque en un solo usuario',
            'Arquitectura': 'Canalización de inferencia propia',
            'Principal contrapartida': 'Ecosistema de nodos/extensiones más pequeño que ComfyUI; no construido en torno a distribución multi-GPU',
          },
          {
            'Opción': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Mejor para': 'Camino más rápido a una primera buena imagen con la menor cantidad de ajustes que configurar',
            'Multi-GPU/multiusuario': 'No — diseño de un solo usuario y configuración mínima',
            'Arquitectura': 'Canalización de inferencia propia y simplificada construida sobre Stable Diffusion',
            'Principal contrapartida': 'Configurabilidad deliberadamente limitada a cambio de simplicidad; no orientada a configuraciones multi-GPU',
          },
        ],
        note: 'Esto es un resumen de posicionamiento, no un ranking de benchmarks — consulta la [Reseña de Stable Diffusion](/es/power-local-llm/stable-diffusion-review) para detalles de licencia y VRAM de los modelos subyacentes que ejecutan todas estas interfaces, y [Generación local de imágenes con IA vs. la nube](/es/power-local-llm/local-ai-image-generation-vs-cloud) para una comparación más amplia entre lo local y la nube.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'A quién le conviene SwarmUI',
        items: [
          '**Lector con más de una GPU.** El planificador de distribución de trabajos de SwarmUI es la única herramienta de esta comparación construida específicamente para mantener ocupadas varias tarjetas en el mismo lote de trabajo.',
          '**Hogar, equipo o laboratorio que comparte una máquina.** Las cuentas multiusuario integradas permiten que varias personas generen imágenes desde la misma instalación sin pisarse los trabajos o modelos entre sí.',
          '**Lector que quiere el soporte de modelos de ComfyUI sin construir cada flujo de trabajo como un grafo de nodos.** La pestaña "Generate" basada en formularios cubre los casos comunes; el grafo de nodos sigue ahí cuando lo necesites.',
          '**Lector ya cómodo con ComfyUI que quiere una capa de uso diario más amigable encima.** SwarmUI no te pide que renuncies a ComfyUI — lo expone directamente mediante la pestaña "Comfy Workflow".',
          '**Lector que quiere un proyecto con licencia permisiva (MIT), mantenido activa e independientemente**, con una historia clara y documentada en lugar de un fork abandonado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'A quién no le conviene SwarmUI',
        items: [
          '**Usuario casual de una sola GPU que solo quiere la primera imagen lo más simple posible.** [Fooocus](https://github.com/lllyasviel/Fooocus) tiene menos ajustes y un camino más corto a un primer resultado; la capa multi-GPU/multiusuario de SwarmUI es sobrecarga no utilizada para un solo usuario casual.',
          '**Lector que quiere el ecosistema de extensiones/scripts más grande para una interfaz basada en formularios.** [Stable Diffusion WebUI de AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) tiene una trayectoria más larga y un catálogo de extensiones más grande para ese caso de uso específico.',
          '**Lector que quiere control manual completo del grafo de nodos sin ninguna capa envolvente.** Usa [ComfyUI](https://github.com/comfy-org/ComfyUI) directamente en lugar de a través de SwarmUI si nunca quieres la pestaña "Generate" simplificada.',
          '**Lector que quiere una herramienta creativa de un solo usuario con lienzo unificado y un editor integrado más pulido.** [InvokeAI](https://github.com/invoke-ai/InvokeAI) apunta más directamente a ese caso de uso que el enfoque multi-GPU/multiusuario de SwarmUI.',
          '**Lector que espera erróneamente un producto oficial de Stability AI o un canal de soporte de Stability AI.** SwarmUI no tiene afiliación continua con Stability AI desde junio de 2024 — el soporte proviene del mantenedor independiente y la comunidad, no de Stability AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Sigue siendo "StableSwarmUI" el nombre correcto de este proyecto?',
            a: 'No. El proyecto se renombró de "StableSwarmUI" a "SwarmUI" en junio de 2024, cuando pasó de la organización de GitHub de Stability AI al repositorio independiente [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) bajo el mantenedor Alex "mcmonkey" Goodwin. "StableSwarmUI" es el nombre anterior; la documentación actual, los lanzamientos y el repositorio de GitHub usan "SwarmUI" en todo momento.',
          },
          {
            q: '¿Sigue SwarmUI siendo hecho o mantenido por Stability AI?',
            a: 'No, a la fecha de esta reseña (2026-09-06). Stability AI publicó originalmente el proyecto como StableSwarmUI pero dejó de mantenerlo; el desarrollador original lo volvió totalmente independiente en junio de 2024. No hay participación continua de Stability AI en el desarrollo actual de SwarmUI.',
          },
          {
            q: '¿SwarmUI usa ComfyUI, o es un motor de generación de imágenes separado?',
            a: 'SwarmUI usa ComfyUI como su motor de inferencia backend en lugar de traer su propia canalización de generación separada. La pestaña "Generate" de SwarmUI envía trabajos a una o más instancias de backend de ComfyUI, y la pestaña integrada "Comfy Workflow" expone directamente el grafo de nodos de ComfyUI subyacente cuando quieres control manual completo.',
          },
          {
            q: '¿Qué modelos soporta SwarmUI?',
            a: 'SwarmUI soporta las mismas familias de modelos que soporta ComfyUI, incluyendo Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5 y FLUX. Como SwarmUI ejecuta ComfyUI por debajo, su cobertura de modelos sigue las propias actualizaciones de ComfyUI — consulta los repositorios de GitHub actuales de SwarmUI y ComfyUI para la lista más reciente de modelos soportados.',
          },
          {
            q: '¿Es gratis SwarmUI?',
            a: 'Sí. SwarmUI es gratuito y de código abierto bajo la licencia MIT, sin nivel de pago ni suscripción vendida por el proyecto. Aun así debes revisar la licencia del checkpoint de modelo que cargues (Stable Diffusion, FLUX, etc.), ya que esas licencias son independientes de la propia licencia MIT de SwarmUI.',
          },
          {
            q: '¿En qué se diferencia SwarmUI de AUTOMATIC1111 o Fooocus para un usuario de una sola GPU?',
            a: 'Stable Diffusion WebUI de AUTOMATIC1111 y Fooocus traen ambos sus propias canalizaciones de inferencia independientes y están diseñados en torno a un usuario con una GPU, sin distribución de trabajos multi-GPU ni cuentas multiusuario integradas. SwarmUI está construido específicamente para añadir ambas cosas —balanceo de carga multi-GPU e inicios de sesión multiusuario— sobre ComfyUI, lo cual es sobrecarga innecesaria si solo tienes una GPU y un usuario.',
          },
          {
            q: '¿Pueden varias personas usar SwarmUI al mismo tiempo?',
            a: 'Sí. SwarmUI tiene soporte multiusuario integrado con cuentas de inicio de sesión separadas, controles de acceso a modelos por usuario y una cola de trabajos compartida, de modo que varias personas pueden generar imágenes desde una sola instalación compartida sin necesitar cada una su propia copia del software.',
          },
          {
            q: '¿Dónde descargo SwarmUI?',
            a: 'El repositorio actual y mantenido es [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) en GitHub. El repositorio más antiguo Stability-AI/StableSwarmUI refleja la versión descontinuada anterior a junio de 2024 y no es la base de código en desarrollo activo.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'SwarmUI se gana una recomendación específica y acotada: es la opción más clara para lectores que tienen más de una GPU, o más de una persona, que quieren compartir una única instalación de Stable Diffusion / FLUX — un problema de coordinación que AUTOMATIC1111, Fooocus y el ComfyUI de fábrica simplemente no abordan. Su arquitectura basada en el backend de ComfyUI significa que hereda el soporte de modelos y la potencia del grafo de nodos de ese proyecto sin forzar cada trabajo rutinario a pasar por un grafo de nodos, a costa de depender de la propia compatibilidad de ComfyUI por debajo. Vale la pena conocer la historia del proyecto con honestidad: comenzó como el "StableSwarmUI" de Stability AI, Stability AI dejó de mantenerlo, y el desarrollador original lo llevó adelante de forma independiente como "SwarmUI" en junio de 2024 — hoy no existe afiliación continua con Stability AI. Los lectores con una sola GPU y sin necesidad multiusuario suelen estar mejor servidos con Fooocus por su simplicidad o con AUTOMATIC1111 por su ecosistema de extensiones de un solo usuario más grande; los lectores que quieran la capacidad específica multi-GPU o multiusuario de SwarmUI deberían obtenerla del repositorio actual y mantenido [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI), no del repositorio archivado de Stability AI.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[mcmonkeyprojects/SwarmUI — repositorio de GitHub](https://github.com/mcmonkeyprojects/SwarmUI) — proyecto actual y mantenido, README, licencia y lanzamientos.',
          '[Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI — GitHub Discussion #2](https://github.com/mcmonkeyprojects/SwarmUI/discussions/2) — el relato propio del mantenedor sobre el cambio de nombre de junio de 2024 y los pasos de migración.',
          '[Stability-AI/StableSwarmUI — repositorio de GitHub (archivado/descontinuado)](https://github.com/Stability-AI/StableSwarmUI) — proyecto original bajo Stability AI, ya no desarrollado activamente.',
          '[README de la ComfyUI Backend Extension — GitHub de SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI/blob/master/src/BuiltinExtensions/ComfyUIBackend/README.md) — documenta la arquitectura basada en ComfyUI y el paso directo ComfyBackendDirect.',
          '[ComfyUI — repositorio de GitHub](https://github.com/comfy-org/ComfyUI) — el motor de inferencia que SwarmUI ejecuta como backend.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Stable Diffusion (2026)](/es/power-local-llm/stable-diffusion-review) — la familia de modelos subyacente que ejecuta SwarmUI, incluyendo términos de licencia y necesidades de VRAM por versión.',
          '[Generación local de imágenes con IA vs. la nube](/es/power-local-llm/local-ai-image-generation-vs-cloud) — comparación más amplia de modelos e interfaces locales de imagen frente a herramientas en la nube como Midjourney y Adobe Firefly.',
          '[Local LLM Software Directory 2026](/es/power-local-llm/local-llm-software-directory) — directorio completo de software de IA local para todas las plataformas.',
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
    heroImage: '/images/stableswarmui-review-hero-fr.webp',
    title: 'Avis SwarmUI (2026) : l\'interface web multi-GPU pour Stable Diffusion',
    seoTitle: 'SwarmUI 2026 : interface multi-GPU basée sur ComfyUI',
    intro:
      'SwarmUI — anciennement StableSwarmUI — est une interface web gratuite, open source et modulaire pour Stable Diffusion, FLUX et d\'autres modèles locaux de génération d\'images et de vidéos, conçue pour piloter plusieurs GPU et plusieurs utilisateurs depuis une seule installation partagée. Elle utilise [ComfyUI](https://github.com/comfy-org/ComfyUI) comme moteur d\'inférence sous-jacent : au lieu de construire un backend de génération d\'images concurrent à partir de zéro, SwarmUI enveloppe ComfyUI dans un onglet « Generate » basé sur des formulaires pour un usage quotidien, tout en exposant le graphe de nœuds brut de ComfyUI pour les lecteurs souhaitant un contrôle manuel complet. Cet avis couvre ce qu\'est réellement SwarmUI aujourd\'hui (y compris l\'histoire honnête de son changement de nom et sa relation désormais totalement indépendante avec Stability AI), son architecture multi-GPU et multi-utilisateurs, la prise en charge des modèles, l\'installation, la licence, et sa comparaison avec des outils mono-utilisateur comme AUTOMATIC1111 et Fooocus.',
    metaDescription:
      'Avis SwarmUI 2026 : l\'interface web multi-GPU et multi-utilisateurs pour Stable Diffusion, construite sur ComfyUI. Changement de nom depuis StableSwarmUI, licence MIT, modèles pris en charge et installation.',
    twitterDescription:
      'Avis SwarmUI 2026 : anciennement StableSwarmUI, désormais une interface web indépendante, sous licence MIT et basée sur ComfyUI pour la génération multi-GPU avec Stable Diffusion et FLUX. Installation, architecture et compromis honnêtes.',
    audience:
      'Lecteurs disposant de plusieurs GPU ou d\'installations partagées/multi-utilisateurs qui cherchent à savoir si l\'interface de SwarmUI, basée sur des formulaires et adossée à ComfyUI, convient mieux qu\'AUTOMATIC1111, Fooocus ou ComfyUI brut.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'SwarmUI review',
    targetKeywords: [
      'swarmui avis',
      'stableswarmui vs swarmui',
      'swarmui multi gpu',
      'swarmui comfyui backend',
      'swarmui vs automatic1111',
      'swarmui vs comfyui',
      'installer swarmui',
      'swarmui stability ai',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL 1.0', 'Stable Diffusion 3.5', 'FLUX.1 dev', 'FLUX.1 schnell'],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**SwarmUI est une interface web gratuite, sous licence MIT et adossée à ComfyUI pour Stable Diffusion et FLUX, spécifiquement conçue pour fonctionner sur plusieurs GPU et avec plusieurs utilisateurs depuis une seule installation partagée.** Elle a été publiée à l\'origine par Stability AI sous le nom « StableSwarmUI » et est devenue totalement indépendante — sans implication continue de Stability AI — sous le nom « SwarmUI », sous la direction du mainteneur Alex « mcmonkey » Goodwin, en juin 2024. En coulisses, elle exécute [ComfyUI](https://github.com/comfy-org/ComfyUI) comme moteur d\'inférence, héritant ainsi de la prise en charge des modèles de ComfyUI (Stable Diffusion, SDXL, SD 3.5, FLUX) tout en présentant un onglet « Generate » plus simple, basé sur des formulaires. Les lecteurs disposant d\'un seul GPU et sans besoin d\'accès multi-utilisateurs sont généralement mieux servis par [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) ou [Fooocus](https://github.com/lllyasviel/Fooocus).',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que SwarmUI, et est-il toujours développé par Stability AI ?',
        answer:
          'SwarmUI est une interface web gratuite et open source pour Stable Diffusion et FLUX, capable de piloter plusieurs GPU et plusieurs utilisateurs depuis une seule installation. Elle n\'est actuellement pas développée par Stability AI : le projet a démarré chez Stability AI sous le nom « StableSwarmUI », mais Stability AI a cessé de le maintenir et le développeur d\'origine, Alex « mcmonkey » Goodwin, l\'a rendu totalement indépendant sous le nouveau nom « SwarmUI » en juin 2024. Aucune implication continue de Stability AI depuis.',
        bullets: [
          'Nom actuel : SwarmUI. Ancien nom : StableSwarmUI (utilisé uniquement jusqu\'en juin 2024, sous Stability AI).',
          'Mainteneur actuel : Alex « mcmonkey » Goodwin, de manière indépendante — pas Stability AI.',
          'Dépôt actuel : [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) sur GitHub (l\'ancien dépôt Stability-AI/StableSwarmUI est archivé/abandonné).',
          'Licence : MIT (permissive, gratuite pour un usage commercial et personnel).',
          'Architecture : SwarmUI exécute ComfyUI comme moteur d\'inférence backend, puis ajoute par-dessus une interface plus simple basée sur des formulaires, une distribution de tâches multi-GPU et des comptes multi-utilisateurs.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que SwarmUI', anchor: 'what-is-swarmui' },
      { label: 'Histoire : de StableSwarmUI au SwarmUI indépendant', anchor: 'history' },
      { label: 'Comment fonctionne l\'architecture adossée à ComfyUI', anchor: 'architecture' },
      { label: 'Prise en charge multi-GPU et multi-utilisateurs', anchor: 'multi-gpu-multi-user' },
      { label: 'Modèles pris en charge', anchor: 'model-support' },
      { label: 'Comment installer SwarmUI', anchor: 'installation' },
      { label: 'Tarifs et licence', anchor: 'pricing-license' },
      { label: 'SwarmUI vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'À qui SwarmUI convient', anchor: 'who-should-use' },
      { label: 'À qui SwarmUI ne convient pas', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        items: [
          'SwarmUI (anciennement StableSwarmUI) est une interface web gratuite, open source et sous licence MIT pour Stable Diffusion et FLUX, conçue pour fonctionner sur plusieurs GPU et avec plusieurs utilisateurs depuis une seule installation.',
          'Le projet a démarré chez Stability AI sous le nom « StableSwarmUI » ; Stability AI a cessé de le maintenir et le développeur d\'origine, Alex « mcmonkey » Goodwin, l\'a rendu totalement indépendant sous le nom « SwarmUI » en juin 2024 — aucune implication continue de Stability AI depuis.',
          'Dépôt actuel : [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) ; l\'ancien dépôt se trouvait chez Stability-AI/StableSwarmUI.',
          'SwarmUI exécute [ComfyUI](https://github.com/comfy-org/ComfyUI) comme moteur d\'inférence backend — il ne remplace pas le code de génération de ComfyUI, il l\'enveloppe dans un onglet « Generate » plus convivial tout en laissant le graphe de nœuds brut accessible.',
          'Il prend en charge tous les modèles pris en charge par ComfyUI, y compris Stable Diffusion 1.5/XL, Stable Diffusion 3.5 et FLUX ; la couverture exacte des modèles suit les propres mises à jour de ComfyUI.',
          'Idéal pour les lecteurs disposant de plusieurs GPU ou d\'un accès partagé/en équipe qui veulent la prise en charge des modèles de ComfyUI sans construire chaque flux de travail comme un graphe de nœuds ; les utilisateurs occasionnels avec un seul GPU sont généralement mieux servis par AUTOMATIC1111 ou Fooocus.',
        ],
      },
      whatIsSwarmUI: {
        id: 'what-is-swarmui',
        title: 'Qu\'est-ce que SwarmUI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI est une interface web gratuite et open source pour la génération d\'images avec Stable Diffusion et FLUX qui exécute ComfyUI comme backend et y ajoute la distribution de tâches multi-GPU et des comptes multi-utilisateurs.' },
          { type: 'plain-terms', text: 'Voyez-la comme un panneau de contrôle plus convivial greffé sur ComfyUI — vous obtenez un formulaire simple pour saisir un prompt et choisir un modèle, mais la génération d\'images proprement dite en dessous reste l\'œuvre de ComfyUI, désormais capable de répartir les tâches entre plusieurs GPU ou plusieurs personnes.' },
        ],
        content: [
          '**SwarmUI est une interface web modulaire, basée sur des formulaires, pour la génération locale d\'images et de vidéos, distincte de l\'interface en graphe de nœuds brute livrée par défaut avec ComfyUI.** Elle cible les mêmes modèles sous-jacents que ComfyUI — Stable Diffusion, SDXL, SD 3.5, FLUX — mais les présente via un onglet « Generate » plus simple avec des menus déroulants et des curseurs, destiné aux lecteurs pour qui un graphe de nœuds complet ralentit la génération routinière.',
          'Le nom « Swarm » (essaim) fait référence à sa fonctionnalité centrale d\'origine : coordonner un « essaim » de GPU pour que plusieurs cartes graphiques travaillent en même temps sur le même lot d\'images, plutôt qu\'un seul GPU traitant une file d\'attente seul. Cette distribution de tâches multi-GPU, associée à une connexion multi-utilisateurs intégrée et à un accès aux modèles par utilisateur, distingue SwarmUI des outils mono-utilisateur comme Stable Diffusion WebUI d\'AUTOMATIC1111 ou Fooocus.',
          'SwarmUI est écrit en C#/.NET côté serveur avec un frontend web, et livré comme une application auto-hébergée — il n\'existe pas de version officielle hébergée/cloud. Tout fonctionne sur du matériel que vous contrôlez, qu\'il s\'agisse d\'un GPU de jeu ou d\'une petite station de travail multi-GPU.',
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire : de StableSwarmUI au SwarmUI indépendant',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI a démarré sous le nom « StableSwarmUI », un projet officiel de Stability AI, et est devenu un projet totalement indépendant, maintenu par la communauté, sous le nouveau nom « SwarmUI » en juin 2024, après que Stability AI a cessé de le maintenir.' },
          { type: 'plain-terms', text: 'Stability AI a construit la première version et y a apposé son nom, puis a cessé de la maintenir ; le développeur d\'origine a continué à la développer seul sous un nouveau nom plutôt que de la laisser mourir.' },
        ],
        content: [
          '**Le projet a d\'abord été publié sous l\'organisation GitHub de Stability AI sous le nom « StableSwarmUI », développé principalement par Alex « mcmonkey » Goodwin.** Les notes de version publiques et les fils de discussion sur le dépôt d\'origine [Stability-AI/StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI) documentent ses premières annonces de fonctionnalités alors qu\'il portait le nom et le droit d\'auteur de Stability AI.',
          'En juin 2024, Stability AI a cessé de maintenir StableSwarmUI. Plutôt que de laisser le projet s\'éteindre, mcmonkey l\'a rendu indépendant, publiant un « Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI » et renommant le projet en « SwarmUI » sur un nouveau dépôt, [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI). Les installations existantes pouvaient migrer en effectuant une mise à jour puis en exécutant un script de migration fourni (`migrate-windows.bat` sous Windows, ou en repointant manuellement la remote Git vers `mcmonkeyprojects/SwarmUI` sous Linux/Mac).',
          '**À la date de cet avis (06/09/2026), SwarmUI n\'a plus aucune affiliation continue avec Stability AI** — il est maintenu de manière indépendante par mcmonkey et des contributeurs de la communauté, sous licence MIT, avec un droit d\'auteur attribué à « Alex \'mcmonkey\' Goodwin » pour la période 2024-2026 couverte par le fichier de licence actuel. Le dépôt d\'origine Stability-AI/StableSwarmUI n\'est plus la base de code activement développée ; le projet actuel et maintenu se trouve chez mcmonkeyprojects/SwarmUI.',
          '**Pourquoi cet article conserve le slug « stableswarmui-review » malgré le changement de nom :** les lecteurs qui recherchent l\'outil sous son nom d\'origine, plus connu, arrivent toujours ici — le corps de l\'article et le titre utilisent systématiquement le nom actuel et correct « SwarmUI », et cette section expose clairement le changement de nom afin que personne ne se méprenne sur qui maintient le projet aujourd\'hui.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Comment fonctionne l\'architecture adossée à ComfyUI',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI ne contient pas son propre moteur de génération d\'images — il exécute ComfyUI comme processus backend et lui envoie les tâches de génération, puis affiche les résultats dans sa propre interface simplifiée.' },
          { type: 'plain-terms', text: 'ComfyUI effectue le travail réel qui transforme un prompt en image ; SwarmUI est la couche supérieure qui décide quel backend reçoit quelle tâche et vous montre un écran plus simple à la place du graphe de nœuds de ComfyUI.' },
        ],
        columns: ['Couche', 'Ce qu\'elle fait', 'Accessible directement ?'],
        rows: [
          { 'Couche': 'Interface web SwarmUI', 'Ce qu\'elle fait': 'Onglet « Generate » basé sur des formulaires, file d\'attente de tâches, comptes multi-utilisateurs, routage multi-GPU', 'Accessible directement ?': 'Oui — c\'est l\'interface par défaut' },
          { 'Couche': 'Backend(s) ComfyUI', 'Ce qu\'elle fait': 'Exécute l\'inférence réelle du modèle de diffusion (Stable Diffusion, SDXL, FLUX, etc.)', 'Accessible directement ?': 'Oui, via l\'onglet intégré « Comfy Workflow » et le graphe de nœuds' },
          { 'Couche': 'Matériel GPU', 'Ce qu\'elle fait': 'Exécute le calcul du modèle pour chaque instance de backend ComfyUI', 'Accessible directement ?': 'N/A — géré par le planificateur de backend de SwarmUI' },
        ],
        content: [
          'SwarmUI peut installer et démarrer automatiquement un backend ComfyUI au premier lancement, ou se connecter à une ou plusieurs instances ComfyUI que vous exécutez déjà vous-même, y compris des instances distantes sur un réseau. Chaque backend configuré est traité comme un worker : lorsque vous soumettez une demande de génération, le planificateur de SwarmUI l\'attribue à une instance de backend disponible.',
          'Comme le moteur d\'inférence sous-jacent est un ComfyUI non modifié, SwarmUI hérite presque entièrement de la compatibilité des modèles, de l\'écosystème de nœuds personnalisés et du format de flux de travail de ComfyUI. L\'extension intégrée « ComfyUI Backend Extension » expose également une route de passage direct (`ComfyBackendDirect`) afin que les scripts d\'automatisation et intégrations API ComfyUI existants continuent de fonctionner avec un backend géré par SwarmUI.',
          'C\'est la différence architecturale clé avec Stable Diffusion WebUI d\'AUTOMATIC1111, qui embarque son propre pipeline d\'inférence séparé plutôt que d\'envelopper ComfyUI. Le compromis de SwarmUI est qu\'il dépend du maintien de la compatibilité et de l\'installation correcte de ComfyUI — si ComfyUI lui-même rencontre un problème, SwarmUI en hérite, puisque SwarmUI n\'effectue pas sa propre inférence indépendante.',
        ],
      },
      multiGpuMultiUser: {
        id: 'multi-gpu-multi-user',
        title: 'Prise en charge multi-GPU et multi-utilisateurs',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI peut répartir les tâches de génération sur plusieurs GPU d\'une même machine ou sur un petit réseau de machines, et prend en charge plusieurs comptes utilisateurs connectés avec des réglages de modèles et de permissions par utilisateur depuis une seule installation.' },
          { type: 'plain-terms', text: 'Plutôt qu\'un seul GPU traitant une file de demandes d\'images l\'une après l\'autre, SwarmUI peut confier des demandes différentes à des GPU différents en même temps, et il peut distinguer les utilisateurs afin qu\'un serveur partagé ne mélange pas qui a demandé quoi.' },
        ],
        content: [
          '**La prise en charge multi-GPU est la fonctionnalité qui donne son nom au projet.** SwarmUI peut exécuter un backend ComfyUI par GPU disponible sur une machine (ou sur plusieurs machines en réseau) et équilibrer la charge des tâches de génération entrantes sur l\'ensemble — utile pour les générations par lots/grilles importantes, ou pour un foyer ou une petite équipe partageant une station de travail multi-GPU plutôt que chaque personne ait besoin de sa propre carte dédiée.',
          '**La prise en charge multi-utilisateurs** ajoute des comptes de connexion, des contrôles d\'accès aux modèles par utilisateur et une file d\'attente de tâches partagée, de sorte qu\'une seule installation de SwarmUI peut servir plusieurs personnes sans que chacune exécute une copie séparée du logiciel ou se dispute la file d\'attente d\'un seul GPU. Ni Stable Diffusion WebUI d\'AUTOMATIC1111 ni ComfyUI de base ne proposent ce type de système de comptes multi-utilisateurs intégré — les deux sont conçus autour d\'un seul utilisateur local.',
          'Cette combinaison est ce qui fait de SwarmUI un outil sensiblement différent des applications mono-GPU, mono-utilisateur, et pas seulement « ComfyUI avec une plus belle interface » : la couche de distribution des tâches et de gestion des comptes résout un véritable problème de coordination qui n\'apparaît que dès que vous avez plus d\'un GPU ou plus d\'une personne souhaitant générer des images sur le même matériel.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Modèles pris en charge',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI prend en charge toutes les familles de modèles prises en charge par ComfyUI pour la génération d\'images, y compris Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5 et FLUX, ainsi que certains modèles vidéo et audio à mesure que ComfyUI en ajoute la prise en charge.' },
          { type: 'plain-terms', text: 'Comme SwarmUI exécute ComfyUI en dessous, il peut généralement charger tout checkpoint de modèle que ComfyUI peut charger, sans que SwarmUI ait besoin d\'un code séparé pour chaque nouvelle famille de modèles.' },
        ],
        columns: ['Famille de modèle', 'Type', 'Remarques'],
        rows: [
          { 'Famille de modèle': 'Stable Diffusion 1.5', 'Type': 'Image', 'Remarques': 'Format de checkpoint historique largement pris en charge ; vaste écosystème communautaire de LoRA/checkpoints via ComfyUI' },
          { 'Famille de modèle': 'Stable Diffusion XL 1.0', 'Type': 'Image', 'Remarques': 'Modèle natif 1024×1024 ; pris en charge de la même manière que dans ComfyUI de base' },
          { 'Famille de modèle': 'Stable Diffusion 3.5', 'Type': 'Image', 'Remarques': 'Architecture plus récente de transformeur de diffusion multimodal ; nécessite les conditions actuelles de la Community License publiées par Stability AI pour SD 3.5 elle-même, indépendamment de SwarmUI' },
          { 'Famille de modèle': 'FLUX (Black Forest Labs)', 'Type': 'Image', 'Remarques': 'Pris en charge via les nœuds FLUX de ComfyUI ; la licence dépend de la variante FLUX spécifique (schnell vs. dev), pas de SwarmUI' },
          { 'Famille de modèle': 'Modèles vidéo/audio', 'Type': 'Vidéo, audio', 'Remarques': 'Pris en charge à mesure que ComfyUI lui-même ajoute et met à jour la prise en charge — vérifiez les notes de version actuelles de ComfyUI et SwarmUI pour la couverture exacte des modèles avant de vous fier à un modèle particulier' },
        ],
        note: 'La prise en charge des modèles suit la propre liste de compatibilité de ComfyUI, qui évolue dans le temps — vérifiez la prise en charge actuelle d\'un checkpoint spécifique sur le [dépôt GitHub de SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) ou le [dépôt GitHub de ComfyUI](https://github.com/comfy-org/ComfyUI) avant d\'y consacrer un flux de travail. La licence propre à chaque modèle (RAIL-M, Stability AI Community License, Apache 2.0, etc.) s\'applique quelle que soit l\'interface dans laquelle vous le chargez — consultez l\'[avis Stable Diffusion](/fr/power-local-llm/stable-diffusion-review) pour le détail de ces différences de licence par version.',
      },
      installation: {
        id: 'installation',
        title: 'Comment installer SwarmUI',
        content: [
          'SwarmUI s\'installe sous Windows, Linux et macOS selon une forme globale similaire d\'une plateforme à l\'autre — les commandes exactes diffèrent légèrement, il s\'agit donc ici de la séquence générale plutôt que d\'instructions spécifiques à une plateforme.',
        ],
        numberedItems: [
          { title: 'Vérifiez que votre GPU est pris en charge et dispose de suffisamment de VRAM', whyItMatters: 'Les besoins en VRAM de SwarmUI dépendent du modèle que vous prévoyez d\'exécuter via ComfyUI — par exemple, environ 8 Go de VRAM constituent un plancher raisonnable pour SDXL, davantage pour SD 3.5 ou FLUX ; vérifiez les exigences propres au modèle avant l\'installation.' },
          { title: 'Téléchargez l\'installateur de SwarmUI pour votre système d\'exploitation', whyItMatters: 'Récupérez la version actuelle depuis le [dépôt GitHub mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) — c\'est le dépôt maintenu et indépendant, pas l\'ancien Stability-AI/StableSwarmUI archivé.' },
          { title: 'Laissez SwarmUI installer automatiquement ComfyUI comme backend', whyItMatters: 'L\'option de backend « Self-Start » permet à SwarmUI de configurer, télécharger et lancer automatiquement un backend ComfyUI, ce qui est la voie recommandée pour une première installation plutôt que de connecter manuellement une instance ComfyUI existante.' },
          { title: 'Téléchargez un checkpoint de modèle', whyItMatters: 'Récupérez un checkpoint Stable Diffusion, SDXL, SD 3.5 ou FLUX depuis une source comme Hugging Face, placez-le dans le dossier de modèles indiqué par la documentation d\'installation de SwarmUI, et vérifiez les conditions de licence de ce modèle pour l\'usage prévu.' },
          { title: 'Configurez des backends GPU supplémentaires si vous avez plus d\'une carte', whyItMatters: 'Ajoutez chaque GPU supplémentaire comme sa propre instance de backend dans les paramètres de backend de SwarmUI afin que les tâches puissent être réparties sur tous plutôt que sur le seul premier détecté.' },
          { title: 'Configurez des comptes utilisateurs si plusieurs personnes partagent l\'installation', whyItMatters: 'Créez des connexions séparées avec les paramètres multi-utilisateurs de SwarmUI afin qu\'un serveur partagé garde les tâches, modèles et permissions de chaque personne distincts.' },
        ],
        note: 'Les étapes d\'installation précises, les versions des dépendances et les chemins de dossiers changent d\'une version à l\'autre — suivez les instructions actuelles du [README GitHub de SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) plutôt qu\'un guide générique, y compris celui-ci, pour tout ce qui dépasse la forme générale ci-dessus.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Tarifs et licence',
        content: [
          '**SwarmUI est gratuit et open source sous licence MIT — il n\'existe aucun palier payant, abonnement ou version hébergée vendue par le projet lui-même.** Vous ne payez que pour votre propre matériel et votre électricité, comme pour tout outil auto-hébergé.',
          'La licence MIT est permissive : elle autorise l\'usage commercial, la modification et la redistribution avec attribution, et n\'impose aucun plafond de revenus ni obligation d\'enregistrement du type de ceux qui s\'appliquent à certains modèles que vous pourriez exécuter via elle (par exemple, la Community License de Stability AI pour SD 3.5 exige un enregistrement au-delà d\'un certain revenu). La licence propre de SwarmUI n\'impose pas cela — mais la licence du checkpoint de modèle chargé continue de s\'appliquer indépendamment, car SwarmUI ne modifie pas les conditions de licence propres à un modèle.',
          'Comme il n\'existe pas de service SwarmUI officiel hébergé, le « tarif » de cet outil se résume entièrement au matériel que vous possédez déjà ou choisissez d\'acheter — il n\'y a pas de palier d\'abonnement à comparer, contrairement aux propres plans d\'API hébergée et d\'abonnement de Stability AI abordés dans l\'[avis Stable Diffusion](/fr/power-local-llm/stable-diffusion-review#pricing).',
        ],
        note: 'Les conditions de licence peuvent changer d\'une version à l\'autre — confirmez le texte de licence actuel dans le fichier `LICENSE` du [dépôt GitHub de SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) avant toute décision de déploiement commercial. Ceci n\'est pas un conseil juridique.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'SwarmUI vs. alternatives',
        columns: ['Option', 'Idéal pour', 'Multi-GPU/multi-utilisateurs', 'Architecture', 'Principal compromis'],
        rows: [
          {
            'Option': 'SwarmUI',
            'Idéal pour': 'Plusieurs GPU ou plusieurs utilisateurs partageant une installation, contrôle basé sur des formulaires d\'un backend ComfyUI',
            'Multi-GPU/multi-utilisateurs': 'Oui — intégré',
            'Architecture': 'Enveloppe ComfyUI comme moteur d\'inférence',
            'Principal compromis': 'Dépend de la compatibilité de ComfyUI en dessous ; plus de pièces mobiles qu\'une application mono-utilisateur',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Idéal pour': 'Contrôle manuel complet de chaque étape de génération via un graphe de nœuds',
            'Multi-GPU/multi-utilisateurs': 'Non — mono-utilisateur par défaut',
            'Architecture': 'Moteur d\'inférence en graphe de nœuds autonome',
            'Principal compromis': 'Courbe d\'apprentissage la plus abrupte du groupe ; pas de distribution de tâches multi-GPU ni de comptes intégrés',
          },
          {
            'Option': '[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Idéal pour': 'Utilisateurs mono-GPU voulant le plus grand écosystème d\'extensions pour une interface basée sur des formulaires',
            'Multi-GPU/multi-utilisateurs': 'Non — mono-utilisateur, mono-GPU par conception',
            'Architecture': 'Pipeline d\'inférence propre et séparé, non basé sur ComfyUI',
            'Principal compromis': 'Pas de prise en charge multi-GPU/multi-utilisateurs intégrée ; base de code séparée de l\'écosystème ComfyUI',
          },
          {
            'Option': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Idéal pour': 'Flux de travail créatif mono-utilisateur soigné, à l\'aspect professionnel, avec un canevas unifié',
            'Multi-GPU/multi-utilisateurs': 'Non — orienté mono-utilisateur',
            'Architecture': 'Pipeline d\'inférence propre',
            'Principal compromis': 'Écosystème de nœuds/extensions plus restreint que ComfyUI ; pas conçu autour de la distribution multi-GPU',
          },
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Idéal pour': 'Chemin le plus rapide vers une première bonne image avec le moins de réglages à configurer',
            'Multi-GPU/multi-utilisateurs': 'Non — conception mono-utilisateur, configuration minimale',
            'Architecture': 'Pipeline d\'inférence simplifié propre construit sur Stable Diffusion',
            'Principal compromis': 'Configurabilité délibérément limitée en échange de la simplicité ; non destiné aux configurations multi-GPU',
          },
        ],
        note: 'Ceci est un positionnement, pas un classement de benchmarks — voir l\'[avis Stable Diffusion](/fr/power-local-llm/stable-diffusion-review) pour le détail de licence et de VRAM des modèles sous-jacents que ces interfaces exécutent toutes, et [Génération locale d\'images IA vs. cloud](/fr/power-local-llm/local-ai-image-generation-vs-cloud) pour une comparaison plus large entre local et cloud.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui SwarmUI convient',
        items: [
          '**Lecteur disposant de plus d\'un GPU.** Le planificateur de distribution de tâches de SwarmUI est le seul outil de cette comparaison spécifiquement conçu pour maintenir plusieurs cartes occupées sur le même lot de travail.',
          '**Foyer, équipe ou laboratoire partageant une machine.** Les comptes multi-utilisateurs intégrés permettent à plusieurs personnes de générer des images depuis la même installation sans se marcher sur les pieds au niveau des tâches ou des modèles.',
          '**Lecteur voulant la prise en charge des modèles de ComfyUI sans construire chaque flux de travail comme un graphe de nœuds.** L\'onglet « Generate » basé sur des formulaires couvre les cas courants ; le graphe de nœuds reste disponible en cas de besoin.',
          '**Lecteur déjà à l\'aise avec ComfyUI qui veut une couche d\'usage quotidien plus conviviale par-dessus.** SwarmUI ne demande pas d\'abandonner ComfyUI — il l\'expose directement via l\'onglet « Comfy Workflow ».',
          '**Lecteur voulant un projet sous licence permissive (MIT), maintenu activement et de manière indépendante**, avec une histoire claire et documentée plutôt qu\'un fork abandonné.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui SwarmUI ne convient pas',
        items: [
          '**Utilisateur occasionnel mono-GPU qui veut simplement la première image la plus simple possible.** [Fooocus](https://github.com/lllyasviel/Fooocus) a moins de réglages et un chemin plus court vers un premier résultat ; la couche multi-GPU/multi-utilisateurs de SwarmUI est une surcharge inutilisée pour un seul utilisateur occasionnel.',
          '**Lecteur voulant le plus grand écosystème d\'extensions/scripts pour une interface basée sur des formulaires.** [Stable Diffusion WebUI d\'AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) a un historique plus long et un catalogue d\'extensions plus vaste pour ce cas d\'usage précis.',
          '**Lecteur voulant un contrôle manuel complet du graphe de nœuds sans aucune couche d\'enveloppe.** Utilisez [ComfyUI](https://github.com/comfy-org/ComfyUI) directement plutôt que via SwarmUI si vous ne voulez jamais de l\'onglet « Generate » simplifié.',
          '**Lecteur voulant un outil créatif mono-utilisateur avec canevas unifié et un éditeur intégré plus soigné.** [InvokeAI](https://github.com/invoke-ai/InvokeAI) cible ce cas d\'usage plus directement que l\'orientation multi-GPU/multi-utilisateurs de SwarmUI.',
          '**Lecteur s\'attendant à tort à un produit officiel Stability AI ou à un canal de support Stability AI.** SwarmUI n\'a plus aucune affiliation continue avec Stability AI depuis juin 2024 — le support vient du mainteneur indépendant et de la communauté, pas de Stability AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: '« StableSwarmUI » est-il toujours le bon nom pour ce projet ?',
            a: 'Non. Le projet a été renommé de « StableSwarmUI » en « SwarmUI » en juin 2024, lorsqu\'il est passé de l\'organisation GitHub de Stability AI au dépôt indépendant [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) sous la direction du mainteneur Alex « mcmonkey » Goodwin. « StableSwarmUI » est l\'ancien nom ; la documentation actuelle, les versions et le dépôt GitHub utilisent tous « SwarmUI ».',
          },
          {
            q: 'SwarmUI est-il toujours développé ou maintenu par Stability AI ?',
            a: 'Non, à la date de cet avis (06/09/2026). Stability AI a initialement publié le projet sous le nom StableSwarmUI mais a cessé de le maintenir ; le développeur d\'origine l\'a rendu totalement indépendant en juin 2024. Il n\'y a aucune implication continue de Stability AI dans le développement actuel de SwarmUI.',
          },
          {
            q: 'SwarmUI utilise-t-il ComfyUI, ou s\'agit-il d\'un moteur de génération d\'images distinct ?',
            a: 'SwarmUI utilise ComfyUI comme son moteur d\'inférence backend plutôt que d\'embarquer son propre pipeline de génération séparé. L\'onglet « Generate » de SwarmUI envoie les tâches à une ou plusieurs instances de backend ComfyUI, et l\'onglet intégré « Comfy Workflow » expose directement le graphe de nœuds ComfyUI sous-jacent lorsqu\'un contrôle manuel complet est souhaité.',
          },
          {
            q: 'Quels modèles SwarmUI prend-il en charge ?',
            a: 'SwarmUI prend en charge les mêmes familles de modèles que ComfyUI, y compris Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5 et FLUX. Comme SwarmUI exécute ComfyUI en dessous, sa couverture de modèles suit les propres mises à jour de ComfyUI — consultez les dépôts GitHub actuels de SwarmUI et ComfyUI pour la liste la plus récente des modèles pris en charge.',
          },
          {
            q: 'SwarmUI est-il gratuit ?',
            a: 'Oui. SwarmUI est gratuit et open source sous licence MIT, sans palier payant ni abonnement vendu par le projet. Vous devez tout de même vérifier la licence du checkpoint de modèle chargé (Stable Diffusion, FLUX, etc.), car ces licences sont indépendantes de la licence MIT propre à SwarmUI.',
          },
          {
            q: 'En quoi SwarmUI diffère-t-il d\'AUTOMATIC1111 ou Fooocus pour un utilisateur mono-GPU ?',
            a: 'Stable Diffusion WebUI d\'AUTOMATIC1111 et Fooocus embarquent tous deux leur propre pipeline d\'inférence autonome et sont conçus autour d\'un utilisateur avec un GPU, sans distribution de tâches multi-GPU ni comptes multi-utilisateurs intégrés. SwarmUI est spécifiquement conçu pour ajouter les deux — équilibrage de charge multi-GPU et connexions multi-utilisateurs — par-dessus ComfyUI, ce qui est une surcharge inutile si vous n\'avez qu\'un GPU et un utilisateur.',
          },
          {
            q: 'Plusieurs personnes peuvent-elles utiliser SwarmUI en même temps ?',
            a: 'Oui. SwarmUI dispose d\'une prise en charge multi-utilisateurs intégrée avec des comptes de connexion séparés, des contrôles d\'accès aux modèles par utilisateur et une file d\'attente de tâches partagée, de sorte que plusieurs personnes peuvent générer des images depuis une seule installation partagée sans que chacune ait besoin de sa propre copie du logiciel.',
          },
          {
            q: 'Où puis-je télécharger SwarmUI ?',
            a: 'Le dépôt actuel et maintenu est [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) sur GitHub. L\'ancien dépôt Stability-AI/StableSwarmUI reflète la version abandonnée d\'avant juin 2024 et n\'est pas la base de code activement développée.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'SwarmUI mérite une recommandation précise et ciblée : c\'est l\'option la plus claire pour les lecteurs disposant de plus d\'un GPU, ou de plus d\'une personne, souhaitant partager une seule installation Stable Diffusion / FLUX — un problème de coordination qu\'AUTOMATIC1111, Fooocus et ComfyUI de base n\'abordent tout simplement pas. Son architecture adossée à ComfyUI signifie qu\'elle hérite de la prise en charge des modèles et de la puissance du graphe de nœuds de ce projet sans forcer chaque tâche routinière à passer par un graphe de nœuds, au prix d\'une dépendance à la compatibilité propre de ComfyUI en dessous. L\'histoire du projet mérite d\'être connue honnêtement : il a démarré comme le « StableSwarmUI » de Stability AI, Stability AI a cessé de le maintenir, et le développeur d\'origine l\'a poursuivi de manière indépendante sous le nom « SwarmUI » en juin 2024 — aucune affiliation continue avec Stability AI n\'existe aujourd\'hui. Les lecteurs avec un seul GPU et sans besoin multi-utilisateurs sont généralement mieux servis par Fooocus pour sa simplicité ou par AUTOMATIC1111 pour son plus grand écosystème d\'extensions mono-utilisateur ; les lecteurs souhaitant la capacité multi-GPU ou multi-utilisateurs spécifique de SwarmUI devraient l\'obtenir depuis le dépôt actuel et maintenu [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI), pas depuis le dépôt archivé de Stability AI.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[mcmonkeyprojects/SwarmUI — dépôt GitHub](https://github.com/mcmonkeyprojects/SwarmUI) — projet actuel et maintenu, README, licence et versions.',
          '[Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI — GitHub Discussion #2](https://github.com/mcmonkeyprojects/SwarmUI/discussions/2) — le récit du mainteneur lui-même sur le changement de nom de juin 2024 et les étapes de migration.',
          '[Stability-AI/StableSwarmUI — dépôt GitHub (archivé/abandonné)](https://github.com/Stability-AI/StableSwarmUI) — projet d\'origine sous Stability AI, plus développé activement.',
          '[README de l\'extension ComfyUI Backend — GitHub de SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI/blob/master/src/BuiltinExtensions/ComfyUIBackend/README.md) — documente l\'architecture adossée à ComfyUI et le passage direct ComfyBackendDirect.',
          '[ComfyUI — dépôt GitHub](https://github.com/comfy-org/ComfyUI) — le moteur d\'inférence que SwarmUI exécute comme backend.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Stable Diffusion (2026)](/fr/power-local-llm/stable-diffusion-review) — la famille de modèles sous-jacente exécutée par SwarmUI, y compris les conditions de licence et les besoins en VRAM par version.',
          '[Génération locale d\'images IA vs. cloud](/fr/power-local-llm/local-ai-image-generation-vs-cloud) — comparaison plus large des modèles et interfaces d\'images locaux face à des outils cloud comme Midjourney et Adobe Firefly.',
          '[Local LLM Software Directory 2026](/fr/power-local-llm/local-llm-software-directory) — répertoire complet de logiciels d\'IA locale pour toutes les plateformes.',
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
    heroImage: '/images/stableswarmui-review-hero-ja.webp',
    title: 'SwarmUIレビュー(2026):マルチGPU対応のStable Diffusion用Web UI',
    seoTitle: 'SwarmUIレビュー2026:ComfyUIベースのマルチGPU UI',
    intro:
      'SwarmUI(旧名StableSwarmUI)は、ローカルのStable Diffusion、FLUX、その他の画像・動画生成モデル向けの無料・オープンソース・モジュール型Web UIで、複数のGPUと複数のユーザーを1つの共有インストールから運用するために作られています。バックエンドの推論エンジンとして[ComfyUI](https://github.com/comfy-org/ComfyUI)を使用します。独自の画像生成バックエンドをゼロから構築する代わりに、SwarmUIは日常利用向けのフォーム形式の「Generate」タブでComfyUIをラップしつつ、完全な手動制御を望む読者にはComfyUIの生のノードグラフも公開しています。本レビューでは、SwarmUIが現在実際に何であるか(名称変更の経緯とStability AIとの現在の完全独立の関係についての正確な情報を含む)、マルチGPU・マルチユーザーアーキテクチャ、対応モデル、インストール方法、ライセンス、そしてAUTOMATIC1111やFooocusのようなシングルユーザー向けツールとの比較を取り上げます。',
    metaDescription:
      'SwarmUIレビュー2026:ComfyUIをベースにしたマルチGPU・マルチユーザー対応のStable Diffusion用Web UI。StableSwarmUIからの改名、MITライセンス、対応モデル、セットアップを解説。',
    twitterDescription:
      'SwarmUIレビュー2026:旧StableSwarmUI、現在は独立したMITライセンスのComfyUIベースWeb UIで、マルチGPUによるStable DiffusionとFLUXの生成に対応。セットアップ、アーキテクチャ、正直なトレードオフを解説。',
    audience:
      '複数のGPUや共有・マルチユーザー環境を持ち、SwarmUIのComfyUIベースでフォーム形式のインターフェースがAUTOMATIC1111、Fooocus、素のComfyUIより適しているかを判断したい読者。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'SwarmUI review',
    targetKeywords: [
      'swarmui レビュー',
      'stableswarmui vs swarmui',
      'swarmui マルチgpu',
      'swarmui comfyui バックエンド',
      'swarmui vs automatic1111',
      'swarmui vs comfyui',
      'swarmui インストール',
      'swarmui stability ai',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL 1.0', 'Stable Diffusion 3.5', 'FLUX.1 dev', 'FLUX.1 schnell'],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**SwarmUIは、Stable DiffusionとFLUX向けの無料・MITライセンス・ComfyUIベースのWeb UIで、複数のGPUと複数のユーザーを1つの共有インストールから運用するために特別に作られています。** もともとはStability AIが「StableSwarmUI」として公開しましたが、2024年6月にメンテナーのAlex「mcmonkey」Goodwin氏のもとで「SwarmUI」として完全に独立し、それ以降Stability AIの継続的な関与はありません。内部では[ComfyUI](https://github.com/comfy-org/ComfyUI)を推論エンジンとして実行するため、ComfyUIのモデル対応(Stable Diffusion、SDXL、SD 3.5、FLUX)を引き継ぎながら、その上にシンプルなフォーム形式の「Generate」タブを提供します。GPUが1台のみでマルチユーザーアクセスが不要な読者は、通常[AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)や[Fooocus](https://github.com/lllyasviel/Fooocus)の方が適しています。',
    quickAnswerTop: {
      ja: {
        question: 'SwarmUIとは何ですか、また現在もStability AIが開発していますか?',
        answer:
          'SwarmUIは、Stable DiffusionとFLUX向けの無料・オープンソースのWeb UIで、1つのインストールから複数のGPUと複数のユーザーを運用できます。現在はStability AIが開発しているものではありません。Stability AIで「StableSwarmUI」として始まりましたが、Stability AIがメンテナンスを停止し、元の開発者であるAlex「mcmonkey」Goodwin氏が2024年6月に新名称「SwarmUI」として完全に独立させました。それ以降、Stability AIの継続的な関与はありません。',
        bullets: [
          '現在の名称:SwarmUI。旧名称:StableSwarmUI(2024年6月まで、Stability AIのもとで使用)。',
          '現在のメンテナー:Alex「mcmonkey」Goodwin氏、独立した立場で — Stability AIではありません。',
          '現在のリポジトリ:GitHub上の[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)(旧Stability-AI/StableSwarmUIリポジトリはアーカイブ/廃止済み)。',
          'ライセンス:MIT(パーミッシブ、商用・個人利用ともに無料)。',
          'アーキテクチャ:SwarmUIはバックエンドの推論エンジンとしてComfyUIを実行し、その上にシンプルなフォーム形式UI、マルチGPUジョブ分散、マルチユーザーアカウントを追加します。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'SwarmUIとは', anchor: 'what-is-swarmui' },
      { label: '歴史:StableSwarmUIから独立SwarmUIへ', anchor: 'history' },
      { label: 'ComfyUIバックエンドアーキテクチャの仕組み', anchor: 'architecture' },
      { label: 'マルチGPU・マルチユーザー対応', anchor: 'multi-gpu-multi-user' },
      { label: '対応モデル', anchor: 'model-support' },
      { label: 'SwarmUIのインストール方法', anchor: 'installation' },
      { label: '料金とライセンス', anchor: 'pricing-license' },
      { label: 'SwarmUI対代替ツール', anchor: 'vs-alternatives' },
      { label: 'SwarmUIが向いている人', anchor: 'who-should-use' },
      { label: 'SwarmUIが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        items: [
          'SwarmUI(旧StableSwarmUI)は、Stable DiffusionとFLUX向けの無料・オープンソース・MITライセンスのWeb UIで、1つのインストールから複数のGPUと複数のユーザーを運用するために作られています。',
          'Stability AIで「StableSwarmUI」として始まり、Stability AIがメンテナンスを停止した後、元の開発者Alex「mcmonkey」Goodwin氏が2024年6月に「SwarmUI」として完全に独立させました — それ以降Stability AIの継続的な関与はありません。',
          '現在のリポジトリ:[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)。旧リポジトリはStability-AI/StableSwarmUIにありました。',
          'SwarmUIはバックエンドの推論エンジンとして[ComfyUI](https://github.com/comfy-org/ComfyUI)を実行します — ComfyUIの生成コードを置き換えるのではなく、より使いやすい「Generate」タブでラップしつつ、生のノードグラフも引き続き公開しています。',
          'Stable Diffusion 1.5/XL、Stable Diffusion 3.5、FLUXを含む、ComfyUIが対応するすべてのモデルに対応しています。正確なモデル対応範囲はComfyUI自体の更新に追随します。',
          '複数のGPUや共有・チームアクセスを持ち、すべての作業をノードグラフとして組み立てずにComfyUIのモデル対応を利用したい読者に最適です。GPU1台のカジュアルユーザーは通常AUTOMATIC1111やFooocusの方が適しています。',
        ],
      },
      whatIsSwarmUI: {
        id: 'what-is-swarmui',
        title: 'SwarmUIとは',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUIは、Stable DiffusionとFLUXによる画像生成のための無料・オープンソースのWeb UIで、ComfyUIをバックエンドとして実行し、その上にマルチGPUジョブ分散とマルチユーザーアカウントを追加します。' },
          { type: 'plain-terms', text: 'ComfyUIに取り付けられた、より使いやすいコントロールパネルだと考えてください — プロンプトを入力しモデルを選ぶためのシンプルなフォームが手に入りますが、その下で実際に画像を生成しているのは依然としてComfyUIであり、今では複数のGPUや複数の人にジョブを分散できるようになっています。' },
        ],
        content: [
          '**SwarmUIは、ComfyUIが標準で提供する生のノードグラフインターフェースとは異なる、モジュール型・フォームベースのローカル画像・動画生成用Web UIです。** ComfyUIと同じ基盤モデル(Stable Diffusion、SDXL、SD 3.5、FLUX)を対象としていますが、ドロップダウンとスライダーを備えたよりシンプルな「Generate」タブを通じて提示します。これは、日常的な生成作業にフルのノードグラフでは遅いと感じる読者向けです。',
          '「Swarm」という名前は、複数のグラフィックカードが同じバッチの画像を同時に処理できるようGPUの「群れ」を調整するという、元々の中核機能を指しています(単一GPUが1つのキューを1人で処理するのとは対照的です)。このマルチGPUジョブ分散に加え、内蔵のマルチユーザーログインとユーザーごとのモデルアクセスが、SwarmUIをAUTOMATIC1111のStable Diffusion WebUIやFooocusのようなシングルユーザーツールと区別する要素です。',
          'SwarmUIはサーバー側がC#/.NETで書かれ、Webフロントエンドを備え、セルフホスト型アプリケーションとして提供されます — 公式のホスト型/クラウド版は存在しません。すべては、ゲーミングGPU1台であれ小規模なマルチGPUワークステーションであれ、自分が管理するハードウェア上で動作します。',
        ],
      },
      history: {
        id: 'history',
        title: '歴史:StableSwarmUIから独立SwarmUIへ',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUIは、Stability AIの公式プロジェクト「StableSwarmUI」として始まり、Stability AIがメンテナンスを停止した後、2024年6月に新名称「SwarmUI」として完全に独立したコミュニティ運営プロジェクトになりました。' },
          { type: 'plain-terms', text: 'Stability AIが最初のバージョンを作り自社の名前を付けましたが、その後メンテナンスから手を引きました。元の開発者は、プロジェクトを消滅させる代わりに、新しい名前のもとで独自に開発を続けました。' },
        ],
        content: [
          '**このプロジェクトは当初、Alex「mcmonkey」Goodwin氏を主な開発者として、Stability AIのGitHub組織のもとで「StableSwarmUI」として公開されました。** 元のリポジトリ[Stability-AI/StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI)の公開リリースノートやディスカッションスレッドには、Stability AIの名称と著作権を冠していた当時の初期の機能発表が記録されています。',
          '2024年6月、Stability AIはStableSwarmUIのメンテナンスを停止しました。プロジェクトを休止させる代わりに、mcmonkey氏はそれを独立させ、「Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI」を公開し、新しいリポジトリ[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)でプロジェクト名を「SwarmUI」に変更しました。既存のインストールは、更新して提供された移行スクリプトを実行することで移行できました(Windowsでは`migrate-windows.bat`、Linux/Macでは手動でGitリモートを`mcmonkeyprojects/SwarmUI`に向け直す方法)。',
          '**本レビュー執筆時点(2026-09-06)で、SwarmUIはStability AIとの継続的な提携関係を持っていません** — mcmonkey氏とコミュニティの貢献者によって独立して維持されており、ライセンスはMITで、現在のライセンスファイルが対象とする2024〜2026年の期間について著作権は「Alex \'mcmonkey\' Goodwin」に帰属しています。元のStability-AI/StableSwarmUIリポジトリはもはや積極的に開発されているコードベースではなく、現在維持されているプロジェクトはmcmonkeyprojects/SwarmUIにあります。',
          '**改名後もこの記事がスラッグ「stableswarmui-review」を維持している理由:** 元のより知られた名称でこのツールを検索する読者は今もこのページにたどり着きます — 記事本文とタイトルは一貫して現在の正しい名称「SwarmUI」を使用しており、このセクションで改名の経緯を明確に述べることで、現在誰がこのプロジェクトを維持しているかについて誤解が生じないようにしています。',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'ComfyUIバックエンドアーキテクチャの仕組み',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUIは独自の画像生成エンジンを持っていません — ComfyUIをバックエンドプロセスとして実行して生成ジョブを送り、その結果を独自の簡略化されたインターフェースでレンダリングします。' },
          { type: 'plain-terms', text: 'プロンプトを画像に変換する実際の計算はComfyUIが行い、SwarmUIはどのバックエンドがどのジョブを受け持つかを決め、ComfyUIのノードグラフの代わりにシンプルな画面を見せる上位レイヤーです。' },
        ],
        columns: ['レイヤー', '役割', '直接アクセス可能か'],
        rows: [
          { 'レイヤー': 'SwarmUI Web UI', '役割': 'フォーム形式の「Generate」タブ、ジョブキュー、マルチユーザーアカウント、マルチGPUルーティング', '直接アクセス可能か': 'はい — これがデフォルトインターフェースです' },
          { 'レイヤー': 'ComfyUIバックエンド', '役割': '実際の拡散モデル推論を実行(Stable Diffusion、SDXL、FLUXなど)', '直接アクセス可能か': 'はい、内蔵の「Comfy Workflow」タブとノードグラフ経由' },
          { 'レイヤー': 'GPUハードウェア', '役割': '各ComfyUIバックエンドインスタンスのモデル計算を実行', '直接アクセス可能か': '該当なし — SwarmUIのバックエンドスケジューラーが管理' },
        ],
        content: [
          'SwarmUIは初回起動時にComfyUIバックエンドを自動でインストール・自動起動できるほか、既にネットワーク越しに自分で実行している1つ以上のComfyUIインスタンス(リモートインスタンスを含む)に接続することもできます。設定された各バックエンドはワーカーとして扱われ、生成リクエストを送信すると、SwarmUIのスケジューラーが利用可能なバックエンドインスタンスに割り当てます。',
          '基盤となる推論エンジンが未改変のComfyUIであるため、SwarmUIはComfyUIのモデル互換性、カスタムノードエコシステム、ワークフロー形式をほぼそのまま引き継ぎます。内蔵の「ComfyUI Backend Extension」は直接パススルー経路(`ComfyBackendDirect`)も公開しており、既存のComfyUI自動化スクリプトやAPI連携がSwarmUI管理下のバックエンドに対して引き続き動作するようにしています。',
          'これが、ComfyUIをラップするのではなく独自の別個の推論パイプラインを備えるAUTOMATIC1111のStable Diffusion WebUIとの主要なアーキテクチャ上の違いです。SwarmUIのトレードオフは、ComfyUI自体が互換性を保ち正しくインストールされていることに依存する点です — ComfyUI自体に問題があれば、SwarmUIはそれを引き継ぎます。SwarmUIは独自の独立した推論を行っていないためです。',
        ],
      },
      multiGpuMultiUser: {
        id: 'multi-gpu-multi-user',
        title: 'マルチGPU・マルチユーザー対応',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUIは、同一マシン上の複数GPU、または複数マシンの小規模ネットワークにまたがって生成ジョブを分散でき、1つのインストールからユーザーごとのモデル・権限設定を伴う複数のログインユーザーアカウントに対応します。' },
          { type: 'plain-terms', text: '1台のGPUが画像リクエストのキューを1つずつ処理する代わりに、SwarmUIは異なるリクエストを異なるGPUに同時に割り当てることができ、ユーザーを区別できるため、共有サーバーで誰が何をリクエストしたか混同されません。' },
        ],
        content: [
          '**マルチGPU対応は、プロジェクト名の由来となった機能です。** SwarmUIは、マシン上の利用可能なGPUごとに(または複数マシンのネットワークにまたがって)ComfyUIバックエンドを1つずつ実行し、受信した生成ジョブをすべてに負荷分散できます — 大規模なバッチ/グリッド生成に便利で、あるいは各自が専用カードを必要とする代わりにマルチGPUワークステーションを共有する家庭や小規模チームにも便利です。',
          '**マルチユーザー対応** は、ログインアカウント、ユーザーごとのモデルアクセス制御、共有ジョブキューを追加し、1つのSwarmUIインストールで複数人に対応できるようにします。各人がソフトウェアの別コピーを実行したり、1つのGPUのキューを奪い合ったりする必要はありません。AUTOMATIC1111のStable Diffusion WebUIも標準のComfyUIも、このような内蔵マルチユーザーアカウントシステムを備えていません — どちらも単一のローカルユーザーを前提に設計されています。',
          'この組み合わせこそが、SwarmUIを単なる「見た目の良いComfyUI」ではなく、シングルGPU・シングルユーザーのアプリとは実質的に異なるツールにしている理由です。ジョブ分散とアカウントのレイヤーは、複数のGPUや同じハードウェアで画像を生成したい複数人が存在する場合にのみ現れる、現実の調整問題を解決します。',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: '対応モデル',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUIは、Stable Diffusion 1.5、Stable Diffusion XL、Stable Diffusion 3.5、FLUXを含む、ComfyUIが画像生成向けに対応するすべてのモデルファミリーに対応し、ComfyUIが対応を追加するにつれて一部の動画・音声モデルにも対応します。' },
          { type: 'plain-terms', text: 'SwarmUIは内部でComfyUIを実行しているため、ComfyUIが読み込めるモデルチェックポイントであれば、SwarmUIが新しいモデルファミリーごとに個別のコードを必要とすることなく、一般的に読み込むことができます。' },
        ],
        columns: ['モデルファミリー', 'タイプ', '備考'],
        rows: [
          { 'モデルファミリー': 'Stable Diffusion 1.5', 'タイプ': '画像', '備考': '広く対応する従来型チェックポイント形式。ComfyUI経由の大規模なコミュニティLoRA/チェックポイントエコシステム' },
          { 'モデルファミリー': 'Stable Diffusion XL 1.0', 'タイプ': '画像', '備考': '1024×1024ネイティブモデル。標準のComfyUIと同様に対応' },
          { 'モデルファミリー': 'Stable Diffusion 3.5', 'タイプ': '画像', '備考': '新しいマルチモーダル拡散トランスフォーマーアーキテクチャ。SwarmUIとは独立して、Stability AIがSD 3.5自体に対して公開する現行のCommunity License条件が必要' },
          { 'モデルファミリー': 'FLUX(Black Forest Labs)', 'タイプ': '画像', '備考': 'ComfyUIのFLUXノード経由で対応。ライセンスはSwarmUIではなく特定のFLUXバリアント(schnell対dev)に依存' },
          { 'モデルファミリー': '動画・音声モデル', 'タイプ': '動画、音声', '備考': 'ComfyUI自体が対応を追加・更新するにつれて対応 — 特定のモデルに依存する前に、ComfyUIとSwarmUIの最新リリースノートで正確なモデル対応範囲を確認してください' },
        ],
        note: 'モデル対応は、時間の経過とともに変化するComfyUI自体の互換性リストに従います — 特定のチェックポイントの現在の対応状況は、ワークフローをそれに固定する前に[SwarmUIのGitHubリポジトリ](https://github.com/mcmonkeyprojects/SwarmUI)または[ComfyUIのGitHubリポジトリ](https://github.com/comfy-org/ComfyUI)で確認してください。各モデル独自のライセンス(RAIL-M、Stability AI Community License、Apache 2.0など)は、どのUIで読み込むかにかかわらず適用されます — バージョンごとのライセンスの違いについては[Stable Diffusionレビュー](/ja/power-local-llm/stable-diffusion-review)を参照してください。',
      },
      installation: {
        id: 'installation',
        title: 'SwarmUIのインストール方法',
        content: [
          'SwarmUIはWindows、Linux、macOSにインストールでき、プラットフォームをまたいで全体的な流れは似ています — 正確なコマンドは若干異なるため、これはプラットフォーム固有の手順ではなく一般的な流れです。',
        ],
        numberedItems: [
          { title: '対応GPUと十分なVRAMがあることを確認する', whyItMatters: 'SwarmUIのVRAM要件は、ComfyUI経由で実行する予定のモデルに従います — 例えば、SDXLには約8 GBのVRAMが妥当な下限で、SD 3.5やFLUXにはそれ以上が必要です。インストール前にそのモデル自体の要件を確認してください。' },
          { title: 'お使いのOS向けのSwarmUIインストーラーをダウンロードする', whyItMatters: '[mcmonkeyprojects/SwarmUIのGitHubリポジトリ](https://github.com/mcmonkeyprojects/SwarmUI)から現行版を入手してください — こちらが維持されている独立したリポジトリであり、アーカイブされたStability-AI/StableSwarmUIではありません。' },
          { title: 'SwarmUIにComfyUIをバックエンドとして自動インストールさせる', whyItMatters: '「Self-Start」バックエンドオプションにより、SwarmUIがComfyUIバックエンドを自動的に設定・ダウンロード・起動できます。既存のComfyUIインスタンスを手動で接続するよりも、初回インストールにはこの方法が推奨されます。' },
          { title: 'モデルチェックポイントをダウンロードする', whyItMatters: 'Hugging Faceなどのソースから、Stable Diffusion、SDXL、SD 3.5、またはFLUXのチェックポイントを入手し、SwarmUIのセットアップドキュメントで指定されているモデルフォルダに配置し、想定する用途に対するそのモデル自体のライセンス条件を確認してください。' },
          { title: 'カードが複数ある場合は追加のGPUバックエンドを設定する', whyItMatters: '最初に検出された1台だけでなくすべてにジョブを分散できるよう、SwarmUIのバックエンド設定で追加のGPUをそれぞれ独自のバックエンドインスタンスとして追加してください。' },
          { title: '複数人でインストールを共有する場合はユーザーアカウントを設定する', whyItMatters: '共有サーバーが各人のジョブ、モデル、権限を分離して保持できるよう、SwarmUIのマルチユーザー設定で別々のログインを作成してください。' },
        ],
        note: '正確なインストール手順、依存関係のバージョン、フォルダパスはリリースごとに変わります — 上記の一般的な流れを超える内容については、本記事のような一般的なガイドではなく、[SwarmUIのGitHub README](https://github.com/mcmonkeyprojects/SwarmUI)の最新の手順に従ってください。',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: '料金とライセンス',
        content: [
          '**SwarmUIはMITライセンスのもとで無料かつオープンソースです — プロジェクト自体が販売する有料プラン、サブスクリプション、ホスト版は存在しません。** 他のセルフホスト型ツールと同様に、支払うのは自分のハードウェアと電気代だけです。',
          'MITライセンスはパーミッシブです。商用利用、改変、帰属表示付きの再配布を許可し、それを通じて実行する可能性のある一部のモデルに適用されるような収益上限や登録義務(例えば、Stability AIのSD 3.5向けCommunity Licenseは一定の収益を超えると登録を要求します)を課しません。SwarmUI自体のライセンスはそれを課しませんが、読み込んだモデルチェックポイント自体のライセンスは引き続き独立して適用されます。SwarmUIはモデル自体のライセンス条件を変更しないためです。',
          '公式のホスト型SwarmUIサービスは存在しないため、このツールの「料金」はすべて、すでに所有しているか購入を選ぶハードウェアに関わるものです — [Stable Diffusionレビュー](/ja/power-local-llm/stable-diffusion-review#pricing)で扱ったStability AI自身のホスト型APIやメンバーシッププランとは異なり、比較すべき会員プランは存在しません。',
        ],
        note: 'ライセンス条件はリリースごとに変わる可能性があります — 商用導入の判断を下す前に、[SwarmUIのGitHubリポジトリ](https://github.com/mcmonkeyprojects/SwarmUI)の`LICENSE`ファイルにある現行のライセンス文言を確認してください。これは法的助言ではありません。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'SwarmUI対代替ツール',
        columns: ['選択肢', '最適な用途', 'マルチGPU/マルチユーザー', 'アーキテクチャ', '主なトレードオフ'],
        rows: [
          {
            '選択肢': 'SwarmUI',
            '最適な用途': '1つのインストールを共有する複数GPUまたは複数ユーザー、ComfyUIバックエンドに対するフォーム形式の制御',
            'マルチGPU/マルチユーザー': 'はい — 内蔵',
            'アーキテクチャ': 'ComfyUIを推論エンジンとしてラップ',
            '主なトレードオフ': '内部のComfyUIの互換性に依存。シングルユーザーアプリより可動部分が多い',
          },
          {
            '選択肢': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '最適な用途': 'ノードグラフによる各生成ステップの完全な手動制御',
            'マルチGPU/マルチユーザー': 'いいえ — デフォルトでシングルユーザー',
            'アーキテクチャ': '独立したノードグラフ推論エンジン',
            '主なトレードオフ': 'グループ中で最も急な学習曲線。内蔵のマルチGPUジョブ分散やアカウントなし',
          },
          {
            '選択肢': '[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            '最適な用途': 'フォーム形式UI向けに最大級の拡張機能エコシステムを求めるシングルGPUユーザー',
            'マルチGPU/マルチユーザー': 'いいえ — 設計上シングルユーザー、シングルGPU',
            'アーキテクチャ': 'ComfyUIベースではない、独自の別個の推論パイプライン',
            '主なトレードオフ': '内蔵のマルチGPU/マルチユーザー対応なし。ComfyUIエコシステムとは別のコードベース',
          },
          {
            '選択肢': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            '最適な用途': '統一キャンバスを備えた、洗練されたプロフェッショナルな雰囲気のシングルユーザー創作ワークフロー',
            'マルチGPU/マルチユーザー': 'いいえ — シングルユーザー重視',
            'アーキテクチャ': '独自の推論パイプライン',
            '主なトレードオフ': 'ComfyUIよりノード/拡張機能エコシステムが小さい。マルチGPU分散を前提に構築されていない',
          },
          {
            '選択肢': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '最適な用途': '設定項目が最も少なく、最初の良い画像に最速でたどり着ける',
            'マルチGPU/マルチユーザー': 'いいえ — シングルユーザー、最小限の設定を前提とした設計',
            'アーキテクチャ': 'Stable Diffusion上に構築された独自の簡略化された推論パイプライン',
            '主なトレードオフ': 'シンプルさと引き換えに意図的に設定の自由度を制限。マルチGPU構成を対象としていない',
          },
        ],
        note: 'これはベンチマークによる順位付けではなく、位置づけの要約です — これらのUIがすべて実行する基盤モデルのライセンスとVRAMの詳細については[Stable Diffusionレビュー](/ja/power-local-llm/stable-diffusion-review)を、ローカルとクラウドのより広い比較については[ローカルAI画像生成 vs. クラウド](/ja/power-local-llm/local-ai-image-generation-vs-cloud)を参照してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'SwarmUIが向いている人',
        items: [
          '**複数のGPUを持つ読者。** SwarmUIのジョブ分散スケジューラーは、この比較の中で複数のカードを同じ作業バッチで稼働させ続けるために特別に作られた唯一のツールです。',
          '**1台のマシンを共有する家庭、チーム、または研究室。** 内蔵のマルチユーザーアカウントにより、複数人が同じインストールから互いのジョブやモデルを踏みにじることなく画像を生成できます。',
          '**すべてのワークフローをノードグラフとして組み立てずに、ComfyUIのモデル対応を利用したい読者。** フォーム形式の「Generate」タブが一般的なケースをカバーし、必要なときにはノードグラフも利用できます。',
          '**すでにComfyUIに慣れており、その上により使いやすい日常利用レイヤーを求める読者。** SwarmUIはComfyUIを手放すことを求めません — 「Comfy Workflow」タブを通じて直接公開しています。',
          '**放棄されたフォークではなく、明確で文書化された経緯を持ち、パーミッシブライセンス(MIT)で積極的かつ独立して維持されているプロジェクトを求める読者。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'SwarmUIが向いていない人',
        items: [
          '**シングルGPUのカジュアルユーザーで、可能な限りシンプルな最初の1枚が欲しいだけの人。** [Fooocus](https://github.com/lllyasviel/Fooocus)は設定が少なく、最初の結果までの道のりが短いです。SwarmUIのマルチGPU/マルチユーザーレイヤーは、1人のカジュアルユーザーにとっては使われないオーバーヘッドです。',
          '**フォーム形式UI向けに最大級の拡張機能/カスタムスクリプトエコシステムを求める読者。** [AUTOMATIC1111のStable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)は、その特定のユースケースにおいてより長い実績とより大きな拡張機能カタログを持っています。',
          '**ラップ層を一切介さない、ノードグラフの完全な手動制御を求める読者。** 簡略化された「Generate」タブが全く不要な場合は、SwarmUI経由ではなく[ComfyUI](https://github.com/comfy-org/ComfyUI)を直接使用してください。',
          '**統一キャンバスとより洗練された内蔵エディタを備えたシングルユーザー向け創作ツールを求める読者。** [InvokeAI](https://github.com/invoke-ai/InvokeAI)は、SwarmUIのマルチGPU/マルチユーザー重視よりも、その用途により直接的に対応しています。',
          '**公式のStability AI製品やStability AIのサポート窓口を誤って期待している読者。** SwarmUIは2024年6月以降Stability AIとの継続的な提携関係を持っていません — サポートはStability AIからではなく、独立したメンテナーとコミュニティから提供されます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'このプロジェクトの正しい名称は今もStableSwarmUIですか?',
            a: 'いいえ。このプロジェクトは2024年6月に「StableSwarmUI」から「SwarmUI」に改名され、Stability AIのGitHub組織から、メンテナーAlex「mcmonkey」Goodwin氏のもとで独立したリポジトリ[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)へ移行しました。「StableSwarmUI」は旧名称です。現在のドキュメント、リリース、GitHubリポジトリはすべて「SwarmUI」を使用しています。',
          },
          {
            q: 'SwarmUIは今もStability AIによって開発・維持されていますか?',
            a: '本レビュー時点(2026-09-06)ではいいえです。Stability AIはもともとこのプロジェクトをStableSwarmUIとして公開しましたが、メンテナンスを停止しました。元の開発者は2024年6月に完全に独立させました。現在のSwarmUIの開発にStability AIの継続的な関与はありません。',
          },
          {
            q: 'SwarmUIはComfyUIを使用していますか、それとも独立した画像生成エンジンですか?',
            a: 'SwarmUIは、独自の別個の生成パイプラインを備えるのではなく、ComfyUIをバックエンドの推論エンジンとして使用します。SwarmUIの「Generate」タブは1つ以上のComfyUIバックエンドインスタンスにジョブを送信し、内蔵の「Comfy Workflow」タブは、完全な手動制御を望むときに基盤のComfyUIノードグラフを直接公開します。',
          },
          {
            q: 'SwarmUIはどのモデルに対応していますか?',
            a: 'SwarmUIは、Stable Diffusion 1.5、Stable Diffusion XL、Stable Diffusion 3.5、FLUXを含む、ComfyUIと同じモデルファミリーに対応しています。SwarmUIは内部でComfyUIを実行しているため、そのモデル対応範囲はComfyUI自体の更新に追随します。最新の対応モデル一覧については、SwarmUIとComfyUIの現行のGitHubリポジトリを確認してください。',
          },
          {
            q: 'SwarmUIは無料ですか?',
            a: 'はい。SwarmUIはMITライセンスのもとで無料かつオープンソースであり、プロジェクトが販売する有料プランやサブスクリプションはありません。ただし、読み込むモデルチェックポイント(Stable Diffusion、FLUXなど)自体のライセンスは、SwarmUI自体のMITライセンスとは独立しているため、確認する必要があります。',
          },
          {
            q: 'シングルGPUユーザーにとって、SwarmUIはAUTOMATIC1111やFooocusとどう違いますか?',
            a: 'AUTOMATIC1111のStable Diffusion WebUIとFooocusはどちらも独自の独立した推論パイプラインを備えており、内蔵のマルチGPUジョブ分散やマルチユーザーアカウントなしに、GPU1台の1人のユーザーを前提に設計されています。SwarmUIは、その両方 — マルチGPU負荷分散とマルチユーザーログイン — をComfyUIの上に追加するために特別に作られており、GPUとユーザーが1つずつしかない場合には不要なオーバーヘッドになります。',
          },
          {
            q: '複数人が同時にSwarmUIを使用できますか?',
            a: 'はい。SwarmUIには、別々のログインアカウント、ユーザーごとのモデルアクセス制御、共有ジョブキューを備えた内蔵のマルチユーザー対応があり、それぞれがソフトウェアの独自のコピーを必要とすることなく、複数人が1つの共有インストールから画像を生成できます。',
          },
          {
            q: 'SwarmUIはどこからダウンロードできますか?',
            a: '現在維持されているリポジトリは、GitHub上の[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)です。古いStability-AI/StableSwarmUIリポジトリは2024年6月以前の廃止済みバージョンを反映したものであり、積極的に開発されているコードベースではありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'SwarmUIは、特定の狭い範囲での推奨に値します。すなわち、複数のGPU、または複数の人が1つのStable Diffusion/FLUXインストールを共有したいと考える読者にとって最も明確な選択肢であり、これはAUTOMATIC1111、Fooocus、標準のComfyUIが単純に対応していない調整の問題です。ComfyUIバックエンドアーキテクチャにより、すべての通常のジョブをノードグラフに通すことを強制せずに、そのプロジェクトのモデル対応とノードグラフの強力さを引き継いでいますが、その代償として内部のComfyUI自体の互換性に依存しています。このプロジェクトの経緯は正直に知っておく価値があります。それはStability AIの「StableSwarmUI」として始まり、Stability AIがメンテナンスを停止し、元の開発者が2024年6月に「SwarmUI」として独立してそれを引き継ぎました — 現在はStability AIとの継続的な提携関係はありません。GPU1台でマルチユーザーの必要がない読者は、シンプルさを求めるならFooocus、より大きなシングルユーザー向け拡張機能エコシステムを求めるならAUTOMATIC1111の方が通常適しています。SwarmUI特有のマルチGPUまたはマルチユーザー機能を求める読者は、アーカイブされたStability AIのリポジトリではなく、現在維持されている[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)リポジトリから入手すべきです。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[mcmonkeyprojects/SwarmUI — GitHubリポジトリ](https://github.com/mcmonkeyprojects/SwarmUI) — 現在維持されているプロジェクト、README、ライセンス、リリース情報。',
          '[Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI — GitHub Discussion #2](https://github.com/mcmonkeyprojects/SwarmUI/discussions/2) — 2024年6月の改名と移行手順に関するメンテナー自身の説明。',
          '[Stability-AI/StableSwarmUI — GitHubリポジトリ(アーカイブ済み/廃止)](https://github.com/Stability-AI/StableSwarmUI) — Stability AIのもとでの元のプロジェクト。現在は積極的に開発されていない。',
          '[ComfyUI Backend Extension README — SwarmUI GitHub](https://github.com/mcmonkeyprojects/SwarmUI/blob/master/src/BuiltinExtensions/ComfyUIBackend/README.md) — ComfyUIバックエンドアーキテクチャとComfyBackendDirectパススルーについて説明。',
          '[ComfyUI — GitHubリポジトリ](https://github.com/comfy-org/ComfyUI) — SwarmUIがバックエンドとして実行する推論エンジン。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Stable Diffusionレビュー(2026)](/ja/power-local-llm/stable-diffusion-review) — SwarmUIが実行する基盤モデルファミリーについて、バージョンごとのライセンス条件とVRAM要件を含めて解説。',
          '[ローカルAI画像生成 vs. クラウド](/ja/power-local-llm/local-ai-image-generation-vs-cloud) — MidjourneyやAdobe Fireflyのようなクラウドツールと比較した、ローカル画像モデルとUIのより広い比較。',
          '[Local LLM Software Directory 2026](/ja/power-local-llm/local-llm-software-directory) — すべてのプラットフォーム向けの包括的なローカルAIソフトウェアディレクトリ。',
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
    heroImage: '/images/stableswarmui-review-hero-pt.webp',
    title: 'Análise do SwarmUI (2026): a interface web multi-GPU para Stable Diffusion',
    seoTitle: 'SwarmUI 2026: interface multi-GPU baseada em ComfyUI',
    intro:
      'O SwarmUI — antes chamado StableSwarmUI — é uma interface web gratuita, de código aberto e modular para Stable Diffusion, FLUX e outros modelos locais de geração de imagem e vídeo, construída especificamente para operar várias GPUs e vários usuários a partir de uma única instalação compartilhada. Ele usa o [ComfyUI](https://github.com/comfy-org/ComfyUI) como mecanismo de inferência subjacente: em vez de construir um backend de geração de imagens concorrente do zero, o SwarmUI envolve o ComfyUI em uma aba "Generate" baseada em formulário para uso no dia a dia, enquanto ainda expõe o grafo de nós bruto do ComfyUI para quem quiser controle manual completo. Esta análise cobre o que o SwarmUI realmente é hoje (incluindo a história honesta de sua mudança de nome e sua relação agora totalmente independente com a Stability AI), sua arquitetura multi-GPU e multiusuário, suporte a modelos, instalação, licença e como ele se compara a ferramentas de usuário único como AUTOMATIC1111 e Fooocus.',
    metaDescription:
      'Análise do SwarmUI 2026: a interface web multi-GPU e multiusuário para Stable Diffusion, construída sobre o ComfyUI. Mudança de nome de StableSwarmUI, licença MIT, suporte a modelos e configuração.',
    twitterDescription:
      'Análise do SwarmUI 2026: antes StableSwarmUI, agora uma interface web independente, com licença MIT e baseada em ComfyUI para geração multi-GPU com Stable Diffusion e FLUX. Configuração, arquitetura e trade-offs honestos.',
    audience:
      'Leitores com várias GPUs ou configurações compartilhadas/multiusuário que estão decidindo se a interface do SwarmUI, baseada em formulário e apoiada no ComfyUI, se encaixa melhor do que o AUTOMATIC1111, o Fooocus ou o ComfyUI puro.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'SwarmUI review',
    targetKeywords: [
      'swarmui análise',
      'stableswarmui vs swarmui',
      'swarmui multi gpu',
      'swarmui comfyui backend',
      'swarmui vs automatic1111',
      'swarmui vs comfyui',
      'instalar swarmui',
      'swarmui stability ai',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL 1.0', 'Stable Diffusion 3.5', 'FLUX.1 dev', 'FLUX.1 schnell'],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**O SwarmUI é uma interface web gratuita, com licença MIT e apoiada no ComfyUI para Stable Diffusion e FLUX, construída especificamente para funcionar em várias GPUs e com vários usuários a partir de uma única instalação compartilhada.** Ele foi originalmente lançado pela Stability AI como "StableSwarmUI" e se tornou totalmente independente — sem envolvimento contínuo da Stability AI — como "SwarmUI", sob o mantenedor Alex "mcmonkey" Goodwin, em junho de 2024. Por baixo, ele executa o [ComfyUI](https://github.com/comfy-org/ComfyUI) como mecanismo de inferência, herdando assim o suporte a modelos do ComfyUI (Stable Diffusion, SDXL, SD 3.5, FLUX) enquanto apresenta uma aba "Generate" mais simples, baseada em formulário. Leitores com apenas uma GPU e sem necessidade de acesso multiusuário geralmente são mais bem atendidos pelo [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) ou pelo [Fooocus](https://github.com/lllyasviel/Fooocus).',
    quickAnswerTop: {
      pt: {
        question: 'O que é o SwarmUI, e ele ainda é feito pela Stability AI?',
        answer:
          'O SwarmUI é uma interface web gratuita e de código aberto para Stable Diffusion e FLUX que pode operar várias GPUs e vários usuários a partir de uma única instalação. Atualmente não é feito pela Stability AI: começou na Stability AI como "StableSwarmUI", mas a Stability AI parou de mantê-lo, e o desenvolvedor original, Alex "mcmonkey" Goodwin, o tornou totalmente independente sob o novo nome "SwarmUI" em junho de 2024. Não há envolvimento contínuo da Stability AI desde então.',
        bullets: [
          'Nome atual: SwarmUI. Nome anterior: StableSwarmUI (usado apenas até junho de 2024, sob a Stability AI).',
          'Mantenedor atual: Alex "mcmonkey" Goodwin, de forma independente — não a Stability AI.',
          'Repositório atual: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) no GitHub (o antigo repositório Stability-AI/StableSwarmUI está arquivado/descontinuado).',
          'Licença: MIT (permissiva, gratuita para uso comercial e pessoal).',
          'Arquitetura: o SwarmUI executa o ComfyUI como mecanismo de inferência de backend e adiciona por cima uma interface mais simples baseada em formulário, distribuição de trabalhos entre múltiplas GPUs e contas multiusuário.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o SwarmUI', anchor: 'what-is-swarmui' },
      { label: 'História: do StableSwarmUI ao SwarmUI independente', anchor: 'history' },
      { label: 'Como funciona a arquitetura baseada no ComfyUI', anchor: 'architecture' },
      { label: 'Suporte a múltiplas GPUs e multiusuário', anchor: 'multi-gpu-multi-user' },
      { label: 'Modelos suportados', anchor: 'model-support' },
      { label: 'Como instalar o SwarmUI', anchor: 'installation' },
      { label: 'Preço e licença', anchor: 'pricing-license' },
      { label: 'SwarmUI vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o SwarmUI é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o SwarmUI não é indicado', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        items: [
          'O SwarmUI (antes StableSwarmUI) é uma interface web gratuita, de código aberto e com licença MIT para Stable Diffusion e FLUX, construída para operar em várias GPUs e com vários usuários a partir de uma única instalação.',
          'Começou na Stability AI como "StableSwarmUI"; a Stability AI parou de mantê-lo, e o desenvolvedor original, Alex "mcmonkey" Goodwin, o tornou totalmente independente como "SwarmUI" em junho de 2024 — sem envolvimento contínuo da Stability AI desde então.',
          'Repositório atual: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI); o repositório antigo ficava em Stability-AI/StableSwarmUI.',
          'O SwarmUI executa o [ComfyUI](https://github.com/comfy-org/ComfyUI) como mecanismo de inferência de backend — ele não substitui o código de geração do ComfyUI, mas o envolve em uma aba "Generate" mais amigável, mantendo o grafo de nós bruto acessível.',
          'Suporta todos os modelos que o ComfyUI suporta, incluindo Stable Diffusion 1.5/XL, Stable Diffusion 3.5 e FLUX; a cobertura exata de modelos acompanha as próprias atualizações do ComfyUI.',
          'Ideal para leitores com várias GPUs ou acesso compartilhado/em equipe que querem o suporte a modelos do ComfyUI sem construir cada fluxo de trabalho como um grafo de nós; usuários casuais com uma única GPU geralmente são mais bem atendidos pelo AUTOMATIC1111 ou pelo Fooocus.',
        ],
      },
      whatIsSwarmUI: {
        id: 'what-is-swarmui',
        title: 'O que é o SwarmUI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O SwarmUI é uma interface web gratuita e de código aberto para geração de imagens com Stable Diffusion e FLUX que executa o ComfyUI como backend e adiciona distribuição de trabalhos entre múltiplas GPUs e contas multiusuário.' },
          { type: 'plain-terms', text: 'Pense nele como um painel de controle mais amigável acoplado ao ComfyUI — você obtém um formulário simples para digitar um prompt e escolher um modelo, mas a geração de imagens propriamente dita por baixo continua sendo feita pelo ComfyUI, agora capaz de distribuir trabalhos entre várias GPUs ou várias pessoas.' },
        ],
        content: [
          '**O SwarmUI é uma interface web modular baseada em formulário para geração local de imagens e vídeos, diferente da interface de grafo de nós bruta que o ComfyUI traz por padrão.** Ele visa os mesmos modelos subjacentes do ComfyUI — Stable Diffusion, SDXL, SD 3.5, FLUX — mas os apresenta por meio de uma aba "Generate" mais simples, com menus suspensos e controles deslizantes, voltada a leitores para quem um grafo de nós completo torna a geração de rotina mais lenta.',
          'O nome "Swarm" (enxame) se refere ao seu recurso central original: coordenar um "enxame" de GPUs para que várias placas de vídeo trabalhem ao mesmo tempo no mesmo lote de imagens, em vez de uma única GPU processando uma fila sozinha. Essa distribuição de trabalhos entre múltiplas GPUs, somada ao login multiusuário embutido e ao acesso a modelos por usuário, é o que separa o SwarmUI de ferramentas de usuário único como o Stable Diffusion WebUI do AUTOMATIC1111 ou o Fooocus.',
          'O SwarmUI é escrito em C#/.NET no lado do servidor, com um frontend web, e é distribuído como um aplicativo autogerenciado (self-hosted) — não existe uma versão oficial hospedada/em nuvem. Tudo roda no hardware que você controla, seja uma GPU de jogos ou uma pequena estação de trabalho multi-GPU.',
        ],
      },
      history: {
        id: 'history',
        title: 'História: do StableSwarmUI ao SwarmUI independente',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O SwarmUI começou como "StableSwarmUI", um projeto oficial da Stability AI, e se tornou um projeto totalmente independente, mantido pela comunidade, sob o novo nome "SwarmUI" em junho de 2024, depois que a Stability AI parou de mantê-lo.' },
          { type: 'plain-terms', text: 'A Stability AI construiu a primeira versão e colocou seu nome nela, depois deixou de mantê-la; o desenvolvedor original continuou a construí-la por conta própria sob um novo nome, em vez de deixá-la morrer.' },
        ],
        content: [
          '**O projeto foi publicado inicialmente sob a organização GitHub da Stability AI como "StableSwarmUI", desenvolvido principalmente por Alex "mcmonkey" Goodwin.** Notas de lançamento públicas e tópicos de discussão no repositório original [Stability-AI/StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI) documentam seus primeiros anúncios de recursos enquanto carregava o nome e os direitos autorais da Stability AI.',
          'Em junho de 2024, a Stability AI parou de manter o StableSwarmUI. Em vez de deixar o projeto ficar inativo, mcmonkey o tornou independente, publicando um "Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI" e renomeando o projeto para "SwarmUI" em um novo repositório, [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI). Instalações existentes podiam migrar atualizando e executando um script de migração fornecido (`migrate-windows.bat` no Windows, ou redirecionando manualmente o remote do Git para `mcmonkeyprojects/SwarmUI` no Linux/Mac).',
          '**Na data desta análise (06/09/2026), o SwarmUI não tem afiliação contínua com a Stability AI** — é mantido de forma independente por mcmonkey e colaboradores da comunidade, sob a licença MIT, com direitos autorais atribuídos a "Alex \'mcmonkey\' Goodwin" para o período de 2024–2026 coberto pelo arquivo de licença atual. O repositório original Stability-AI/StableSwarmUI não é mais a base de código em desenvolvimento ativo; o projeto atual e mantido está em mcmonkeyprojects/SwarmUI.',
          '**Por que este artigo mantém o slug "stableswarmui-review" apesar da mudança de nome:** leitores que buscam a ferramenta pelo nome original, mais conhecido, ainda chegam aqui — o corpo do artigo e o título usam o nome atual e correto, "SwarmUI", em todo o texto, e esta seção explica a mudança de nome com clareza para que ninguém seja induzido a erro sobre quem mantém o projeto hoje.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Como funciona a arquitetura baseada no ComfyUI',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'O SwarmUI não contém seu próprio mecanismo de geração de imagens — ele executa o ComfyUI como um processo de backend e envia os trabalhos de geração para ele, depois renderiza os resultados em sua própria interface simplificada.' },
          { type: 'plain-terms', text: 'O ComfyUI faz o trabalho real de transformar um prompt em imagem; o SwarmUI é a camada superior que decide qual backend recebe qual trabalho e mostra a você uma tela mais simples em vez do grafo de nós do ComfyUI.' },
        ],
        columns: ['Camada', 'O que faz', 'Acessível diretamente?'],
        rows: [
          { 'Camada': 'Interface web do SwarmUI', 'O que faz': 'Aba "Generate" baseada em formulário, fila de trabalhos, contas multiusuário, roteamento multi-GPU', 'Acessível diretamente?': 'Sim — esta é a interface padrão' },
          { 'Camada': 'Backend(s) do ComfyUI', 'O que faz': 'Executa a inferência real do modelo de difusão (Stable Diffusion, SDXL, FLUX etc.)', 'Acessível diretamente?': 'Sim, pela aba integrada "Comfy Workflow" e pelo grafo de nós' },
          { 'Camada': 'Hardware da GPU', 'O que faz': 'Executa o cálculo do modelo para cada instância de backend do ComfyUI', 'Acessível diretamente?': 'Não aplicável — gerenciado pelo agendador de backend do SwarmUI' },
        ],
        content: [
          'O SwarmUI pode instalar e iniciar automaticamente um backend do ComfyUI na primeira execução, ou se conectar a uma ou mais instâncias do ComfyUI que você já executa por conta própria, incluindo instâncias remotas em rede. Cada backend configurado é tratado como um worker: quando você envia uma solicitação de geração, o agendador do SwarmUI a atribui a uma instância de backend disponível.',
          'Como o mecanismo de inferência subjacente é o ComfyUI sem modificações, o SwarmUI herda quase por completo a compatibilidade de modelos, o ecossistema de nós personalizados e o formato de fluxo de trabalho do ComfyUI. A "ComfyUI Backend Extension" integrada também expõe uma rota de passagem direta (`ComfyBackendDirect`) para que scripts de automação e integrações de API do ComfyUI existentes continuem funcionando com um backend gerenciado pelo SwarmUI.',
          'Essa é a principal diferença arquitetônica em relação ao Stable Diffusion WebUI do AUTOMATIC1111, que traz seu próprio pipeline de inferência separado em vez de envolver o ComfyUI. O trade-off do SwarmUI é que ele depende da compatibilidade do próprio ComfyUI e de sua instalação correta — se o ComfyUI em si tiver um problema, o SwarmUI o herda, já que o SwarmUI não realiza sua própria inferência independente.',
        ],
      },
      multiGpuMultiUser: {
        id: 'multi-gpu-multi-user',
        title: 'Suporte a múltiplas GPUs e multiusuário',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O SwarmUI pode distribuir trabalhos de geração entre várias GPUs na mesma máquina ou em uma pequena rede de máquinas, e suporta várias contas de usuário conectadas com configurações de modelos e permissões por usuário a partir de uma única instalação.' },
          { type: 'plain-terms', text: 'Em vez de uma GPU processar uma fila de solicitações de imagem uma de cada vez, o SwarmUI pode entregar solicitações diferentes a GPUs diferentes ao mesmo tempo, e consegue distinguir usuários para que um servidor compartilhado não misture quem pediu o quê.' },
        ],
        content: [
          '**O suporte a múltiplas GPUs é o recurso que dá nome ao projeto.** O SwarmUI pode executar um backend do ComfyUI por GPU disponível em uma máquina (ou entre várias máquinas em rede) e balancear a carga dos trabalhos de geração recebidos entre todas elas — útil para gerações grandes em lote/grade, ou para uma casa ou equipe pequena que compartilha uma estação de trabalho multi-GPU em vez de cada pessoa precisar de sua própria placa dedicada.',
          '**O suporte multiusuário** adiciona contas de login, controles de acesso a modelos por usuário e uma fila de trabalhos compartilhada, de modo que uma única instalação do SwarmUI pode atender várias pessoas sem que cada uma execute uma cópia separada do software ou dispute a fila de uma única GPU. Nem o Stable Diffusion WebUI do AUTOMATIC1111 nem o ComfyUI padrão trazem esse tipo de sistema de contas multiusuário embutido — ambos são projetados em torno de um único usuário local.',
          'Essa combinação é o que torna o SwarmUI uma ferramenta significativamente diferente de aplicativos de GPU única e usuário único, e não apenas "ComfyUI com uma interface mais bonita": a camada de distribuição de trabalhos e contas resolve um problema real de coordenação que só aparece quando você tem mais de uma GPU ou mais de uma pessoa querendo gerar imagens no mesmo hardware.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'Modelos suportados',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'O SwarmUI suporta todas as famílias de modelos que o ComfyUI suporta para geração de imagens, incluindo Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5 e FLUX, além de modelos selecionados de vídeo e áudio à medida que o ComfyUI adiciona suporte a eles.' },
          { type: 'plain-terms', text: 'Como o SwarmUI executa o ComfyUI por baixo, ele geralmente consegue carregar qualquer checkpoint de modelo que o ComfyUI consiga carregar, sem que o SwarmUI precise de código separado para cada nova família de modelos.' },
        ],
        columns: ['Família de modelo', 'Tipo', 'Notas'],
        rows: [
          { 'Família de modelo': 'Stable Diffusion 1.5', 'Tipo': 'Imagem', 'Notas': 'Formato de checkpoint legado amplamente suportado; grande ecossistema comunitário de LoRAs/checkpoints via ComfyUI' },
          { 'Família de modelo': 'Stable Diffusion XL 1.0', 'Tipo': 'Imagem', 'Notas': 'Modelo nativo de 1024×1024; suportado da mesma forma que no ComfyUI padrão' },
          { 'Família de modelo': 'Stable Diffusion 3.5', 'Tipo': 'Imagem', 'Notas': 'Arquitetura mais recente de transformador de difusão multimodal; exige os termos atuais da Community License que a Stability AI publica para o próprio SD 3.5, independente do SwarmUI' },
          { 'Família de modelo': 'FLUX (Black Forest Labs)', 'Tipo': 'Imagem', 'Notas': 'Suportado via nós FLUX do ComfyUI; a licença depende da variante específica do FLUX (schnell vs. dev), não do SwarmUI' },
          { 'Família de modelo': 'Modelos de vídeo/áudio', 'Tipo': 'Vídeo, áudio', 'Notas': 'Suportados à medida que o próprio ComfyUI adiciona e atualiza suporte — verifique as notas de lançamento atuais do ComfyUI e do SwarmUI para a cobertura exata de modelos antes de depender de um específico' },
        ],
        note: 'O suporte a modelos acompanha a própria lista de compatibilidade do ComfyUI, que muda com o tempo — verifique o suporte atual de qualquer checkpoint específico no [repositório GitHub do SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) ou no [repositório GitHub do ComfyUI](https://github.com/comfy-org/ComfyUI) antes de basear um fluxo de trabalho nele. A licença própria de cada modelo (RAIL-M, Stability AI Community License, Apache 2.0 etc.) se aplica independentemente da interface em que você o carregar — veja a [Análise do Stable Diffusion](/pt/power-local-llm/stable-diffusion-review) para um detalhamento dessas diferenças de licença por versão.',
      },
      installation: {
        id: 'installation',
        title: 'Como instalar o SwarmUI',
        content: [
          'O SwarmUI é instalado no Windows, Linux e macOS com um formato geral semelhante entre plataformas — os comandos exatos diferem ligeiramente, então esta é a sequência geral, não instruções específicas por plataforma.',
        ],
        numberedItems: [
          { title: 'Confirme se você tem uma GPU suportada e VRAM suficiente', whyItMatters: 'Os requisitos de VRAM do SwarmUI seguem o modelo que você planeja executar pelo ComfyUI — por exemplo, cerca de 8 GB de VRAM é um piso razoável para o SDXL, mais para o SD 3.5 ou o FLUX; verifique os requisitos do próprio modelo antes de instalar.' },
          { title: 'Baixe o instalador do SwarmUI para o seu sistema operacional', whyItMatters: 'Obtenha a versão atual no [repositório GitHub mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) — este é o repositório mantido e independente, não o arquivado Stability-AI/StableSwarmUI.' },
          { title: 'Deixe o SwarmUI instalar automaticamente o ComfyUI como backend', whyItMatters: 'A opção de backend "Self-Start" permite que o SwarmUI configure, baixe e inicie um backend do ComfyUI automaticamente, que é o caminho recomendado para uma primeira instalação em vez de conectar manualmente uma instância existente do ComfyUI.' },
          { title: 'Baixe um checkpoint de modelo', whyItMatters: 'Obtenha um checkpoint de Stable Diffusion, SDXL, SD 3.5 ou FLUX de uma fonte como o Hugging Face, coloque-o na pasta de modelos especificada pela documentação de configuração do SwarmUI e confirme os termos de licença desse modelo para o uso pretendido.' },
          { title: 'Configure backends de GPU adicionais se tiver mais de uma placa', whyItMatters: 'Adicione cada GPU adicional como sua própria instância de backend nas configurações de backend do SwarmUI, para que os trabalhos possam ser distribuídos entre todas em vez de apenas a primeira detectada.' },
          { title: 'Configure contas de usuário se várias pessoas forem compartilhar a instalação', whyItMatters: 'Crie logins separados com as configurações multiusuário do SwarmUI para que um servidor compartilhado mantenha os trabalhos, modelos e permissões de cada pessoa separados.' },
        ],
        note: 'Os passos exatos de instalação, versões de dependências e caminhos de pastas mudam entre lançamentos — siga as instruções atuais do [README do GitHub do SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) em vez de um guia genérico, incluindo este, para qualquer coisa além do formato geral acima.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Preço e licença',
        content: [
          '**O SwarmUI é gratuito e de código aberto sob a licença MIT — não há plano pago, assinatura ou versão hospedada vendida pelo próprio projeto.** Você paga apenas pelo seu próprio hardware e eletricidade, como em qualquer ferramenta autogerenciada.',
          'A licença MIT é permissiva: permite uso comercial, modificação e redistribuição com atribuição, e não impõe um teto de receita ou exigência de registro como o que se aplica a alguns dos modelos que você poderia executar através dela (por exemplo, a Community License da Stability AI para o SD 3.5 exige registro acima de determinada receita). A própria licença do SwarmUI não impõe isso — mas a licença do checkpoint de modelo que você carregar continua a se aplicar de forma independente, já que o SwarmUI não altera os termos de licença próprios de um modelo.',
          'Como não existe um serviço oficial do SwarmUI hospedado, o "preço" desta ferramenta gira inteiramente em torno do hardware que você já possui ou decide comprar — não há plano de associação para comparar, diferente dos próprios planos de API hospedada e de associação da Stability AI abordados na [Análise do Stable Diffusion](/pt/power-local-llm/stable-diffusion-review#pricing).',
        ],
        note: 'Os termos de licença podem mudar entre lançamentos — confirme o texto de licença atual no arquivo `LICENSE` do [repositório GitHub do SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) antes de uma decisão de implantação comercial. Isso não é aconselhamento jurídico.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'SwarmUI vs. alternativas',
        columns: ['Opção', 'Melhor para', 'Multi-GPU/multiusuário', 'Arquitetura', 'Principal trade-off'],
        rows: [
          {
            'Opção': 'SwarmUI',
            'Melhor para': 'Várias GPUs ou vários usuários compartilhando uma instalação, controle baseado em formulário sobre um backend do ComfyUI',
            'Multi-GPU/multiusuário': 'Sim — embutido',
            'Arquitetura': 'Envolve o ComfyUI como mecanismo de inferência',
            'Principal trade-off': 'Depende da compatibilidade do ComfyUI por baixo; mais peças móveis do que um app de usuário único',
          },
          {
            'Opção': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Melhor para': 'Controle manual total sobre cada etapa de geração via grafo de nós',
            'Multi-GPU/multiusuário': 'Não — usuário único por padrão',
            'Arquitetura': 'Mecanismo de inferência de grafo de nós independente',
            'Principal trade-off': 'Curva de aprendizado mais acentuada do grupo; sem distribuição de trabalhos multi-GPU ou contas embutidas',
          },
          {
            'Opção': '[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'Melhor para': 'Usuários de GPU única que querem o maior ecossistema de extensões para uma interface baseada em formulário',
            'Multi-GPU/multiusuário': 'Não — usuário único, GPU única por design',
            'Arquitetura': 'Pipeline de inferência próprio e separado, não baseado no ComfyUI',
            'Principal trade-off': 'Sem suporte multi-GPU/multiusuário embutido; base de código separada do ecossistema do ComfyUI',
          },
          {
            'Opção': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Melhor para': 'Fluxo de trabalho criativo de usuário único, polido e com aparência profissional, com tela unificada',
            'Multi-GPU/multiusuário': 'Não — foco em usuário único',
            'Arquitetura': 'Pipeline de inferência próprio',
            'Principal trade-off': 'Ecossistema de nós/extensões menor que o do ComfyUI; não construído em torno de distribuição multi-GPU',
          },
          {
            'Opção': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Melhor para': 'Caminho mais rápido para uma primeira boa imagem com o menor número de configurações',
            'Multi-GPU/multiusuário': 'Não — design de usuário único e configuração mínima',
            'Arquitetura': 'Pipeline de inferência simplificado próprio, construído sobre o Stable Diffusion',
            'Principal trade-off': 'Configurabilidade deliberadamente limitada em troca de simplicidade; não voltado a configurações multi-GPU',
          },
        ],
        note: 'Este é um resumo de posicionamento, não um ranking de benchmarks — veja a [Análise do Stable Diffusion](/pt/power-local-llm/stable-diffusion-review) para detalhes de licença e VRAM dos modelos subjacentes que todas essas interfaces executam, e [Geração local de imagens com IA vs. nuvem](/pt/power-local-llm/local-ai-image-generation-vs-cloud) para uma comparação mais ampla entre local e nuvem.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o SwarmUI é indicado',
        items: [
          '**Leitor com mais de uma GPU.** O agendador de distribuição de trabalhos do SwarmUI é a única ferramenta desta comparação construída especificamente para manter várias placas ocupadas no mesmo lote de trabalho.',
          '**Casa, equipe ou laboratório que compartilha uma máquina.** Contas multiusuário embutidas permitem que várias pessoas gerem imagens a partir da mesma instalação sem atrapalhar os trabalhos ou modelos umas das outras.',
          '**Leitor que quer o suporte a modelos do ComfyUI sem construir cada fluxo de trabalho como um grafo de nós.** A aba "Generate" baseada em formulário cobre os casos comuns; o grafo de nós continua disponível quando necessário.',
          '**Leitor que já está confortável com o ComfyUI e quer uma camada de uso diário mais amigável por cima.** O SwarmUI não pede que você abra mão do ComfyUI — ele o expõe diretamente pela aba "Comfy Workflow".',
          '**Leitor que quer um projeto com licença permissiva (MIT), mantido ativa e independentemente**, com uma história clara e documentada em vez de um fork abandonado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o SwarmUI não é indicado',
        items: [
          '**Usuário casual de GPU única que só quer a primeira imagem da forma mais simples possível.** O [Fooocus](https://github.com/lllyasviel/Fooocus) tem menos configurações e um caminho mais curto até um primeiro resultado; a camada multi-GPU/multiusuário do SwarmUI é uma sobrecarga não utilizada para um único usuário casual.',
          '**Leitor que quer o maior ecossistema de extensões/scripts personalizados para uma interface baseada em formulário.** O [Stable Diffusion WebUI do AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) tem um histórico mais longo e um catálogo de extensões maior para esse caso de uso específico.',
          '**Leitor que quer controle manual total do grafo de nós sem nenhuma camada envolvente.** Use o [ComfyUI](https://github.com/comfy-org/ComfyUI) diretamente em vez de através do SwarmUI se você nunca quiser a aba "Generate" simplificada.',
          '**Leitor que quer uma ferramenta criativa de usuário único com tela unificada e um editor embutido mais polido.** O [InvokeAI](https://github.com/invoke-ai/InvokeAI) atende esse caso de uso de forma mais direta do que o foco multi-GPU/multiusuário do SwarmUI.',
          '**Leitor que espera erroneamente um produto oficial da Stability AI ou um canal de suporte da Stability AI.** O SwarmUI não tem afiliação contínua com a Stability AI desde junho de 2024 — o suporte vem do mantenedor independente e da comunidade, não da Stability AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: '"StableSwarmUI" ainda é o nome correto deste projeto?',
            a: 'Não. O projeto foi renomeado de "StableSwarmUI" para "SwarmUI" em junho de 2024, quando passou da organização GitHub da Stability AI para o repositório independente [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI), sob o mantenedor Alex "mcmonkey" Goodwin. "StableSwarmUI" é o nome anterior; a documentação atual, os lançamentos e o repositório GitHub usam "SwarmUI" em todo lugar.',
          },
          {
            q: 'O SwarmUI ainda é feito ou mantido pela Stability AI?',
            a: 'Não, até a data desta análise (06/09/2026). A Stability AI lançou originalmente o projeto como StableSwarmUI, mas parou de mantê-lo; o desenvolvedor original o tornou totalmente independente em junho de 2024. Não há envolvimento contínuo da Stability AI no desenvolvimento atual do SwarmUI.',
          },
          {
            q: 'O SwarmUI usa o ComfyUI, ou é um mecanismo de geração de imagens separado?',
            a: 'O SwarmUI usa o ComfyUI como seu mecanismo de inferência de backend, em vez de trazer seu próprio pipeline de geração separado. A aba "Generate" do SwarmUI envia trabalhos para uma ou mais instâncias de backend do ComfyUI, e a aba integrada "Comfy Workflow" expõe diretamente o grafo de nós subjacente do ComfyUI quando você quer controle manual total.',
          },
          {
            q: 'Quais modelos o SwarmUI suporta?',
            a: 'O SwarmUI suporta as mesmas famílias de modelos que o ComfyUI suporta, incluindo Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5 e FLUX. Como o SwarmUI executa o ComfyUI por baixo, sua cobertura de modelos acompanha as próprias atualizações do ComfyUI — verifique os repositórios GitHub atuais do SwarmUI e do ComfyUI para a lista mais recente de modelos suportados.',
          },
          {
            q: 'O SwarmUI é gratuito?',
            a: 'Sim. O SwarmUI é gratuito e de código aberto sob a licença MIT, sem plano pago ou assinatura vendida pelo projeto. Você ainda precisa verificar a licença do checkpoint de modelo que carregar (Stable Diffusion, FLUX etc.), já que essas licenças são independentes da própria licença MIT do SwarmUI.',
          },
          {
            q: 'Em que o SwarmUI é diferente do AUTOMATIC1111 ou do Fooocus para um usuário de GPU única?',
            a: 'O Stable Diffusion WebUI do AUTOMATIC1111 e o Fooocus trazem ambos seus próprios pipelines de inferência independentes e são projetados em torno de um usuário com uma GPU, sem distribuição de trabalhos multi-GPU ou contas multiusuário embutidas. O SwarmUI é construído especificamente para adicionar ambos — balanceamento de carga multi-GPU e logins multiusuário — sobre o ComfyUI, o que é uma sobrecarga desnecessária se você só tem uma GPU e um usuário.',
          },
          {
            q: 'Várias pessoas podem usar o SwarmUI ao mesmo tempo?',
            a: 'Sim. O SwarmUI tem suporte multiusuário embutido, com contas de login separadas, controles de acesso a modelos por usuário e uma fila de trabalhos compartilhada, de modo que várias pessoas podem gerar imagens a partir de uma única instalação compartilhada sem precisar cada uma de sua própria cópia do software.',
          },
          {
            q: 'Onde eu baixo o SwarmUI?',
            a: 'O repositório atual e mantido é o [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) no GitHub. O repositório mais antigo Stability-AI/StableSwarmUI reflete a versão descontinuada anterior a junho de 2024 e não é a base de código em desenvolvimento ativo.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O SwarmUI merece uma recomendação específica e restrita: é a opção mais clara para leitores que têm mais de uma GPU, ou mais de uma pessoa, querendo compartilhar uma única instalação de Stable Diffusion / FLUX — um problema de coordenação que o AUTOMATIC1111, o Fooocus e o ComfyUI padrão simplesmente não resolvem. Sua arquitetura baseada no backend do ComfyUI significa que ele herda o suporte a modelos e o poder do grafo de nós desse projeto, sem forçar cada trabalho de rotina a passar por um grafo de nós, ao custo de depender da própria compatibilidade do ComfyUI por baixo. Vale conhecer a história do projeto com honestidade: ele começou como o "StableSwarmUI" da Stability AI, a Stability AI parou de mantê-lo, e o desenvolvedor original o levou adiante de forma independente como "SwarmUI" em junho de 2024 — hoje não há afiliação contínua com a Stability AI. Leitores com uma única GPU e sem necessidade multiusuário geralmente são mais bem atendidos pelo Fooocus pela simplicidade, ou pelo AUTOMATIC1111 pelo ecossistema de extensões de usuário único maior; leitores que querem a capacidade específica multi-GPU ou multiusuário do SwarmUI devem obtê-la do repositório atual e mantido [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI), não do repositório arquivado da Stability AI.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[mcmonkeyprojects/SwarmUI — repositório GitHub](https://github.com/mcmonkeyprojects/SwarmUI) — projeto atual e mantido, README, licença e lançamentos.',
          '[Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI — GitHub Discussion #2](https://github.com/mcmonkeyprojects/SwarmUI/discussions/2) — o relato do próprio mantenedor sobre a mudança de nome de junho de 2024 e os passos de migração.',
          '[Stability-AI/StableSwarmUI — repositório GitHub (arquivado/descontinuado)](https://github.com/Stability-AI/StableSwarmUI) — projeto original sob a Stability AI, não mais desenvolvido ativamente.',
          '[README da ComfyUI Backend Extension — GitHub do SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI/blob/master/src/BuiltinExtensions/ComfyUIBackend/README.md) — documenta a arquitetura baseada no ComfyUI e a passagem direta ComfyBackendDirect.',
          '[ComfyUI — repositório GitHub](https://github.com/comfy-org/ComfyUI) — o mecanismo de inferência que o SwarmUI executa como backend.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Stable Diffusion (2026)](/pt/power-local-llm/stable-diffusion-review) — a família de modelos subjacente que o SwarmUI executa, incluindo termos de licença e necessidades de VRAM por versão.',
          '[Geração local de imagens com IA vs. nuvem](/pt/power-local-llm/local-ai-image-generation-vs-cloud) — comparação mais ampla de modelos e interfaces locais de imagem contra ferramentas em nuvem como Midjourney e Adobe Firefly.',
          '[Local LLM Software Directory 2026](/pt/power-local-llm/local-llm-software-directory) — diretório completo de software de IA local para todas as plataformas.',
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
    heroImage: '/images/stableswarmui-review-hero-ar.webp',
    title: 'مراجعة SwarmUI (2026): واجهة الويب متعددة GPU لـ Stable Diffusion',
    seoTitle: 'مراجعة SwarmUI 2026: واجهة متعددة GPU قائمة على ComfyUI',
    intro:
      'SwarmUI — الذي كان يُعرف سابقًا باسم StableSwarmUI — هو واجهة ويب مجانية ومفتوحة المصدر ومعيارية لـ Stable Diffusion وFLUX ونماذج توليد الصور والفيديو المحلية الأخرى، مُصممة لتشغيل عدة وحدات GPU وعدة مستخدمين من تثبيت واحد مشترك. يستخدم [ComfyUI](https://github.com/comfy-org/ComfyUI) كمحرك استدلال أساسي: فبدلاً من بناء واجهة خلفية منافسة لتوليد الصور من الصفر، يُغلّف SwarmUI ComfyUI بتبويب "Generate" قائم على النماذج للاستخدام اليومي، مع الاستمرار في إتاحة رسم العقد الخام الخاص بـ ComfyUI للقراء الراغبين في تحكم يدوي كامل. تتناول هذه المراجعة ما هو SwarmUI فعليًا اليوم (بما في ذلك القصة الصادقة لتغيير اسمه وعلاقته المستقلة تمامًا الآن مع Stability AI)، وبنيته متعددة GPU ومتعددة المستخدمين، ودعم النماذج، والتثبيت، والترخيص، ومقارنته بأدوات المستخدم الواحد مثل AUTOMATIC1111 وFooocus.',
    metaDescription:
      'مراجعة SwarmUI 2026: واجهة الويب متعددة GPU ومتعددة المستخدمين لـ Stable Diffusion، مبنية على ComfyUI. تغيير الاسم من StableSwarmUI، ترخيص MIT، دعم النماذج، والإعداد.',
    twitterDescription:
      'مراجعة SwarmUI 2026: كان يُعرف سابقًا باسم StableSwarmUI، وهو الآن واجهة ويب مستقلة مرخّصة بموجب MIT وقائمة على ComfyUI لتوليد الصور بـ Stable Diffusion وFLUX عبر عدة وحدات GPU. الإعداد والبنية والمقايضات الصادقة.',
    audience:
      'القراء الذين لديهم عدة وحدات GPU أو إعدادات مشتركة/متعددة المستخدمين ويقررون ما إذا كانت واجهة SwarmUI القائمة على النماذج والمدعومة بـ ComfyUI مناسبة أكثر من AUTOMATIC1111 أو Fooocus أو ComfyUI الخام.',
    readTime: '11 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'SwarmUI review',
    targetKeywords: [
      'مراجعة swarmui',
      'stableswarmui vs swarmui',
      'swarmui multi gpu',
      'swarmui comfyui backend',
      'swarmui vs automatic1111',
      'swarmui vs comfyui',
      'تثبيت swarmui',
      'swarmui stability ai',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL 1.0', 'Stable Diffusion 3.5', 'FLUX.1 dev', 'FLUX.1 schnell'],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**SwarmUI هو واجهة ويب مجانية مرخّصة بموجب MIT وقائمة على ComfyUI لـ Stable Diffusion وFLUX، مُصممة خصيصًا للعمل عبر عدة وحدات GPU ومع عدة مستخدمين من تثبيت واحد مشترك.** أصدرته Stability AI في الأصل باسم "StableSwarmUI"، وأصبح مستقلًا تمامًا — دون أي مشاركة مستمرة من Stability AI — تحت اسم "SwarmUI" بقيادة المشرف Alex "mcmonkey" Goodwin في يونيو 2024. في الخلفية، يشغّل [ComfyUI](https://github.com/comfy-org/ComfyUI) كمحرك استدلال، ما يجعله يرث دعم النماذج من ComfyUI (Stable Diffusion وSDXL وSD 3.5 وFLUX) بينما يقدّم تبويب "Generate" أبسط قائم على النماذج. القراء الذين لديهم وحدة GPU واحدة فقط ولا يحتاجون إلى وصول متعدد المستخدمين عادةً ما يكونون في وضع أفضل مع [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) أو [Fooocus](https://github.com/lllyasviel/Fooocus).',
    quickAnswerTop: {
      ar: {
        question: 'ما هو SwarmUI، وهل ما زالت Stability AI تطوّره؟',
        answer:
          'SwarmUI هو واجهة ويب مجانية ومفتوحة المصدر لـ Stable Diffusion وFLUX يمكنها تشغيل عدة وحدات GPU وعدة مستخدمين من تثبيت واحد. لا تصنعه Stability AI حاليًا: بدأ في Stability AI باسم "StableSwarmUI"، لكن Stability AI توقفت عن صيانته، وقام المطوّر الأصلي Alex "mcmonkey" Goodwin بجعله مستقلًا تمامًا تحت الاسم الجديد "SwarmUI" في يونيو 2024. لم تكن هناك مشاركة مستمرة من Stability AI منذ ذلك الحين.',
        bullets: [
          'الاسم الحالي: SwarmUI. الاسم السابق: StableSwarmUI (استُخدم فقط حتى يونيو 2024، تحت Stability AI).',
          'المشرف الحالي: Alex "mcmonkey" Goodwin، بشكل مستقل — وليس Stability AI.',
          'المستودع الحالي: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) على GitHub (المستودع القديم Stability-AI/StableSwarmUI مؤرشف/متوقف).',
          'الترخيص: MIT (تساهلي، مجاني للاستخدام التجاري والشخصي).',
          'البنية: يشغّل SwarmUI ComfyUI كمحرك استدلال خلفي، ثم يضيف فوقه واجهة أبسط قائمة على النماذج، وتوزيع مهام عبر عدة وحدات GPU، وحسابات متعددة المستخدمين.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو SwarmUI', anchor: 'what-is-swarmui' },
      { label: 'التاريخ: من StableSwarmUI إلى SwarmUI المستقل', anchor: 'history' },
      { label: 'كيف تعمل بنية الخلفية القائمة على ComfyUI', anchor: 'architecture' },
      { label: 'دعم عدة وحدات GPU وعدة مستخدمين', anchor: 'multi-gpu-multi-user' },
      { label: 'النماذج المدعومة', anchor: 'model-support' },
      { label: 'كيفية تثبيت SwarmUI', anchor: 'installation' },
      { label: 'السعر والترخيص', anchor: 'pricing-license' },
      { label: 'SwarmUI مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم SwarmUI', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم SwarmUI', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          'SwarmUI (المعروف سابقًا باسم StableSwarmUI) هو واجهة ويب مجانية ومفتوحة المصدر ومرخّصة بموجب MIT لـ Stable Diffusion وFLUX، مُصممة للعمل عبر عدة وحدات GPU ومع عدة مستخدمين من تثبيت واحد.',
          'بدأ في Stability AI باسم "StableSwarmUI"؛ توقفت Stability AI عن صيانته، وجعله المطوّر الأصلي Alex "mcmonkey" Goodwin مستقلًا تمامًا باسم "SwarmUI" في يونيو 2024 — دون أي مشاركة مستمرة من Stability AI منذ ذلك الحين.',
          'المستودع الحالي: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)؛ كان المستودع القديم في Stability-AI/StableSwarmUI.',
          'يشغّل SwarmUI [ComfyUI](https://github.com/comfy-org/ComfyUI) كمحرك استدلال خلفي — فهو لا يستبدل كود التوليد الخاص بـ ComfyUI، بل يُغلّفه بتبويب "Generate" أكثر سهولة مع إبقاء رسم العقد الخام متاحًا.',
          'يدعم كل النماذج التي يدعمها ComfyUI، بما في ذلك Stable Diffusion 1.5/XL وStable Diffusion 3.5 وFLUX؛ تتبع تغطية النماذج الدقيقة تحديثات ComfyUI نفسه.',
          'الأنسب للقراء الذين لديهم عدة وحدات GPU أو وصول مشترك/جماعي ويريدون دعم نماذج ComfyUI دون بناء كل سير عمل كرسم عقد؛ المستخدمون العاديون بوحدة GPU واحدة عادةً ما يكونون في وضع أفضل مع AUTOMATIC1111 أو Fooocus.',
        ],
      },
      whatIsSwarmUI: {
        id: 'what-is-swarmui',
        title: 'ما هو SwarmUI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI هو واجهة ويب مجانية ومفتوحة المصدر لتوليد الصور بـ Stable Diffusion وFLUX تشغّل ComfyUI كخلفية وتضيف فوقها توزيع مهام عبر عدة وحدات GPU وحسابات متعددة المستخدمين.' },
          { type: 'plain-terms', text: 'تخيّله كلوحة تحكم أكثر سهولة مُركّبة فوق ComfyUI — تحصل على نموذج بسيط لكتابة موجّه واختيار نموذج، لكن التوليد الفعلي للصورة أسفل ذلك يقوم به ComfyUI، والآن أصبح قادرًا على توزيع المهام عبر عدة وحدات GPU أو عدة أشخاص.' },
        ],
        content: [
          '**SwarmUI هو واجهة ويب معيارية قائمة على النماذج لتوليد الصور والفيديو محليًا، وتختلف عن واجهة رسم العقد الخام التي يأتي بها ComfyUI افتراضيًا.** يستهدف نفس النماذج الأساسية التي يستهدفها ComfyUI — Stable Diffusion وSDXL وSD 3.5 وFLUX — لكنه يقدّمها عبر تبويب "Generate" أبسط بقوائم منسدلة ومنزلقات، موجّه للقراء الذين يجدون أن رسم العقد الكامل أبطأ في التوليد الروتيني.',
          'يشير اسم "Swarm" (السرب) إلى ميزته الأساسية الأصلية: تنسيق "سرب" من وحدات GPU بحيث تعمل عدة بطاقات رسومية في وقت واحد على نفس دفعة الصور، بدلاً من معالجة وحدة GPU واحدة لقائمة انتظار بمفردها. هذا التوزيع للمهام عبر عدة وحدات GPU، إلى جانب تسجيل الدخول المدمج متعدد المستخدمين والوصول إلى النماذج لكل مستخدم، هو ما يميز SwarmUI عن أدوات المستخدم الواحد مثل Stable Diffusion WebUI من AUTOMATIC1111 أو Fooocus.',
          'كُتب SwarmUI بلغة C#/.NET من جانب الخادم مع واجهة أمامية على الويب، ويُوزَّع كتطبيق ذاتي الاستضافة — لا توجد نسخة سحابية/مستضافة رسمية. يعمل كل شيء على الأجهزة التي تتحكم بها، سواء كانت وحدة GPU للألعاب أو محطة عمل صغيرة متعددة GPU.',
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: من StableSwarmUI إلى SwarmUI المستقل',
        snippetBlocks: [
          { type: 'one-sentence', text: 'بدأ SwarmUI باسم "StableSwarmUI"، وهو مشروع رسمي من Stability AI، وأصبح مشروعًا مستقلًا تمامًا تديره المجتمع تحت الاسم الجديد "SwarmUI" في يونيو 2024، بعد أن توقفت Stability AI عن صيانته.' },
          { type: 'plain-terms', text: 'بنت Stability AI النسخة الأولى ووضعت اسمها عليها، ثم توقفت عن صيانتها؛ واصل المطوّر الأصلي تطويرها بنفسه تحت اسم جديد بدلاً من تركها تموت.' },
        ],
        content: [
          '**نُشر المشروع في البداية تحت منظمة GitHub الخاصة بـ Stability AI باسم "StableSwarmUI"، وطوّره بشكل أساسي Alex "mcmonkey" Goodwin.** توثّق ملاحظات الإصدار العامة وخيوط النقاش على المستودع الأصلي [Stability-AI/StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI) إعلانات الميزات المبكرة عندما كان يحمل اسم Stability AI وحقوق نشرها.',
          'في يونيو 2024، توقفت Stability AI عن صيانة StableSwarmUI. وبدلاً من ترك المشروع خاملاً، جعله mcmonkey مستقلًا، ونشر "Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI" وأعاد تسمية المشروع إلى "SwarmUI" في مستودع جديد، [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI). يمكن للتثبيتات الحالية الترحيل عن طريق التحديث وتشغيل نص برمجي للترحيل مُقدَّم (`migrate-windows.bat` على Windows، أو إعادة توجيه الأصل البعيد لـ Git يدويًا إلى `mcmonkeyprojects/SwarmUI` على Linux/Mac).',
          '**حتى تاريخ هذه المراجعة (2026-09-06)، لا يوجد لدى SwarmUI أي انتماء مستمر إلى Stability AI** — إذ يتم صيانته بشكل مستقل من قبل mcmonkey ومساهمي المجتمع، بموجب ترخيص MIT، مع نسبة حقوق النشر إلى "Alex \'mcmonkey\' Goodwin" للفترة 2024-2026 التي يغطيها ملف الترخيص الحالي. المستودع الأصلي Stability-AI/StableSwarmUI لم يعد قاعدة الكود قيد التطوير النشط؛ المشروع الحالي والمُصان موجود في mcmonkeyprojects/SwarmUI.',
          '**لماذا يحتفظ هذا المقال بالرابط الثابت "stableswarmui-review" رغم تغيير الاسم:** لا يزال القراء الذين يبحثون عن الأداة باسمها الأصلي الأكثر شهرة يصلون إلى هنا — يستخدم نص المقال وعنوانه الاسم الحالي والصحيح "SwarmUI" في كل مكان، ويوضح هذا القسم تغيير الاسم بوضوح حتى لا يُضلَّل أحد بشأن من يصون المشروع اليوم.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'كيف تعمل بنية الخلفية القائمة على ComfyUI',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'لا يحتوي SwarmUI على محرك توليد صور خاص به — بل يشغّل ComfyUI كعملية خلفية ويرسل إليه مهام التوليد، ثم يعرض النتائج في واجهته المبسطة الخاصة.' },
          { type: 'plain-terms', text: 'يقوم ComfyUI بالعمل الحسابي الفعلي لتحويل الموجّه إلى صورة؛ SwarmUI هو الطبقة العلوية التي تقرر أي خلفية تحصل على أي مهمة وتُظهر لك شاشة أبسط بدلاً من رسم عقد ComfyUI.' },
        ],
        columns: ['الطبقة', 'ماذا تفعل', 'هل يمكن الوصول إليها مباشرة؟'],
        rows: [
          { 'الطبقة': 'واجهة ويب SwarmUI', 'ماذا تفعل': 'تبويب "Generate" قائم على النماذج، قائمة انتظار المهام، حسابات متعددة المستخدمين، توجيه عبر عدة وحدات GPU', 'هل يمكن الوصول إليها مباشرة؟': 'نعم — هذه هي الواجهة الافتراضية' },
          { 'الطبقة': 'خلفية(خلفيات) ComfyUI', 'ماذا تفعل': 'تشغّل استدلال نموذج الانتشار الفعلي (Stable Diffusion، SDXL، FLUX، إلخ.)', 'هل يمكن الوصول إليها مباشرة؟': 'نعم، عبر تبويب "Comfy Workflow" المدمج ورسم العقد' },
          { 'الطبقة': 'عتاد GPU', 'ماذا تفعل': 'تنفّذ حساب النموذج لكل نسخة خلفية من ComfyUI', 'هل يمكن الوصول إليها مباشرة؟': 'لا ينطبق — تديرها جدولة الخلفية في SwarmUI' },
        ],
        content: [
          'يمكن لـ SwarmUI تثبيت وتشغيل خلفية ComfyUI تلقائيًا عند أول تشغيل، أو الاتصال بنسخة واحدة أو أكثر من ComfyUI تشغّلها بنفسك بالفعل، بما في ذلك النسخ البعيدة عبر الشبكة. تُعامل كل خلفية تم تكوينها كوحدة عمل: عندما تُرسل طلب توليد، تقوم جدولة SwarmUI بتعيينه لنسخة خلفية متاحة.',
          'بما أن محرك الاستدلال الأساسي هو ComfyUI دون تعديل، يرث SwarmUI تقريبًا بالكامل توافق النماذج ونظام العقد المخصصة الإيكولوجي وتنسيق سير العمل الخاص بـ ComfyUI. يوفّر "ComfyUI Backend Extension" المدمج أيضًا مسار تمرير مباشر (`ComfyBackendDirect`) بحيث تستمر نصوص الأتمتة وتكاملات API الخاصة بـ ComfyUI الموجودة في العمل مع خلفية تديرها SwarmUI.',
          'هذا هو الاختلاف المعماري الرئيسي عن Stable Diffusion WebUI من AUTOMATIC1111، الذي يأتي بخط أنابيب استدلال منفصل خاص به بدلاً من تغليف ComfyUI. المقايضة في SwarmUI هي اعتماده على بقاء ComfyUI متوافقًا ومُثبَّتًا بشكل صحيح — إذا كانت هناك مشكلة في ComfyUI نفسه، يرثها SwarmUI، لأن SwarmUI لا يقوم باستدلاله المستقل الخاص.',
        ],
      },
      multiGpuMultiUser: {
        id: 'multi-gpu-multi-user',
        title: 'دعم عدة وحدات GPU وعدة مستخدمين',
        snippetBlocks: [
          { type: 'one-sentence', text: 'يمكن لـ SwarmUI توزيع مهام التوليد عبر عدة وحدات GPU على نفس الجهاز أو عبر شبكة صغيرة من الأجهزة، ويدعم عدة حسابات مستخدمين مسجَّلين مع إعدادات نماذج وأذونات لكل مستخدم من تثبيت واحد.' },
          { type: 'plain-terms', text: 'بدلاً من أن تعالج وحدة GPU واحدة قائمة انتظار طلبات الصور واحدة تلو الأخرى، يمكن لـ SwarmUI تسليم طلبات مختلفة إلى وحدات GPU مختلفة في نفس الوقت، ويمكنه التمييز بين المستخدمين حتى لا يخلط خادم مشترك بين من طلب ماذا.' },
        ],
        content: [
          '**دعم عدة وحدات GPU هو الميزة التي سُمي المشروع باسمها.** يمكن لـ SwarmUI تشغيل خلفية ComfyUI واحدة لكل وحدة GPU متاحة على جهاز (أو عبر عدة أجهزة في شبكة) وموازنة تحميل مهام التوليد الواردة عبرها جميعًا — وهو مفيد للتوليدات الكبيرة بالدُفعات/الشبكات، أو لأسرة أو فريق صغير يشترك في محطة عمل متعددة GPU بدلاً من احتياج كل شخص لبطاقته المخصصة الخاصة.',
          '**دعم عدة المستخدمين** يضيف حسابات تسجيل دخول وضوابط وصول إلى النماذج لكل مستخدم وقائمة انتظار مهام مشتركة، بحيث يمكن لتثبيت SwarmUI واحد خدمة عدة أشخاص دون أن يشغّل كل منهم نسخة منفصلة من البرنامج أو يتنافسون على قائمة انتظار وحدة GPU واحدة. لا يقدّم Stable Diffusion WebUI من AUTOMATIC1111 ولا ComfyUI الأساسي هذا النوع من نظام الحسابات متعدد المستخدمين المدمج — كلاهما مصمم حول مستخدم محلي واحد.',
          'هذا المزيج هو ما يجعل SwarmUI أداة مختلفة بشكل جوهري عن تطبيقات وحدة GPU الواحدة والمستخدم الواحد، وليس مجرد "ComfyUI بواجهة أجمل": فطبقة توزيع المهام والحسابات تحل مشكلة تنسيق حقيقية لا تظهر إلا عندما يكون لديك أكثر من وحدة GPU واحدة أو أكثر من شخص واحد يريد توليد صور على نفس العتاد.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: 'النماذج المدعومة',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'يدعم SwarmUI كل عائلة نماذج يدعمها ComfyUI لتوليد الصور، بما في ذلك Stable Diffusion 1.5 وStable Diffusion XL وStable Diffusion 3.5 وFLUX، بالإضافة إلى نماذج فيديو وصوت مختارة كلما أضاف ComfyUI دعمًا لها.' },
          { type: 'plain-terms', text: 'بما أن SwarmUI يشغّل ComfyUI في الخلفية، يمكنه عمومًا تحميل أي نقطة تفتيش نموذج يمكن لـ ComfyUI تحميلها، دون أن يحتاج SwarmUI إلى كود منفصل لكل عائلة نماذج جديدة.' },
        ],
        columns: ['عائلة النموذج', 'النوع', 'ملاحظات'],
        rows: [
          { 'عائلة النموذج': 'Stable Diffusion 1.5', 'النوع': 'صورة', 'ملاحظات': 'تنسيق نقطة تفتيش قديم مدعوم على نطاق واسع؛ نظام إيكولوجي مجتمعي كبير من LoRA/نقاط التفتيش عبر ComfyUI' },
          { 'عائلة النموذج': 'Stable Diffusion XL 1.0', 'النوع': 'صورة', 'ملاحظات': 'نموذج أصلي بدقة 1024×1024؛ مدعوم بنفس طريقة ComfyUI الأساسي' },
          { 'عائلة النموذج': 'Stable Diffusion 3.5', 'النوع': 'صورة', 'ملاحظات': 'بنية محوّل انتشار متعدد الوسائط أحدث؛ تتطلب شروط Community License الحالية التي تنشرها Stability AI لـ SD 3.5 نفسه، بشكل مستقل عن SwarmUI' },
          { 'عائلة النموذج': 'FLUX (Black Forest Labs)', 'النوع': 'صورة', 'ملاحظات': 'مدعوم عبر عُقد FLUX الخاصة بـ ComfyUI؛ يعتمد الترخيص على نسخة FLUX المحددة (schnell مقابل dev)، وليس على SwarmUI' },
          { 'عائلة النموذج': 'نماذج الفيديو/الصوت', 'النوع': 'فيديو، صوت', 'ملاحظات': 'مدعومة كلما أضاف ComfyUI نفسه الدعم وحدّثه — تحقق من ملاحظات الإصدار الحالية لـ ComfyUI وSwarmUI لمعرفة التغطية الدقيقة للنماذج قبل الاعتماد على نموذج معيّن' },
        ],
        note: 'يتبع دعم النماذج قائمة توافق ComfyUI نفسها، التي تتغير بمرور الوقت — تحقق من الدعم الحالي لأي نقطة تفتيش محددة على [مستودع SwarmUI على GitHub](https://github.com/mcmonkeyprojects/SwarmUI) أو [مستودع ComfyUI على GitHub](https://github.com/comfy-org/ComfyUI) قبل الاعتماد عليه في سير عمل. ينطبق ترخيص كل نموذج الخاص به (RAIL-M، Stability AI Community License، Apache 2.0، إلخ.) بغض النظر عن الواجهة التي تحمّله فيها — راجع [مراجعة Stable Diffusion](/ar/power-local-llm/stable-diffusion-review) لتفصيل هذه الاختلافات في الترخيص حسب الإصدار.',
      },
      installation: {
        id: 'installation',
        title: 'كيفية تثبيت SwarmUI',
        content: [
          'يُثبَّت SwarmUI على Windows وLinux وmacOS بشكل عام متشابه عبر المنصات — تختلف الأوامر الدقيقة قليلاً، لذا هذا هو التسلسل العام وليس تعليمات خاصة بمنصة معينة.',
        ],
        numberedItems: [
          { title: 'تأكد من أن لديك وحدة GPU مدعومة وVRAM كافية', whyItMatters: 'تتبع متطلبات VRAM لـ SwarmUI النموذج الذي تخطط لتشغيله عبر ComfyUI — على سبيل المثال، حوالي 8 GB من VRAM حد أدنى معقول لـ SDXL، وأكثر لـ SD 3.5 أو FLUX؛ تحقق من متطلبات النموذج نفسه قبل التثبيت.' },
          { title: 'حمّل مثبّت SwarmUI الخاص بنظام التشغيل لديك', whyItMatters: 'احصل على الإصدار الحالي من [مستودع mcmonkeyprojects/SwarmUI على GitHub](https://github.com/mcmonkeyprojects/SwarmUI) — هذا هو المستودع المُصان والمستقل، وليس مستودع Stability-AI/StableSwarmUI المؤرشف.' },
          { title: 'دع SwarmUI يثبّت ComfyUI تلقائيًا كخلفية', whyItMatters: 'يتيح خيار الخلفية "Self-Start" لـ SwarmUI تكوين وتنزيل وتشغيل خلفية ComfyUI تلقائيًا، وهذا هو المسار الموصى به للتثبيت الأول بدلاً من ربط نسخة ComfyUI موجودة يدويًا.' },
          { title: 'حمّل نقطة تفتيش نموذج', whyItMatters: 'احصل على نقطة تفتيش Stable Diffusion أو SDXL أو SD 3.5 أو FLUX من مصدر مثل Hugging Face، وضعها في مجلد النماذج الذي تحدده وثائق إعداد SwarmUI، وتأكد من شروط ترخيص ذلك النموذج للاستخدام المقصود.' },
          { title: 'كوّن خلفيات GPU إضافية إذا كان لديك أكثر من بطاقة واحدة', whyItMatters: 'أضف كل وحدة GPU إضافية كنسخة خلفية خاصة بها في إعدادات الخلفية في SwarmUI حتى يمكن توزيع المهام عبر جميعها بدلاً من أول واحدة تُكتشف فقط.' },
          { title: 'أعدّ حسابات المستخدمين إذا كان عدة أشخاص سيشتركون في التثبيت', whyItMatters: 'أنشئ تسجيلات دخول منفصلة باستخدام إعدادات SwarmUI متعددة المستخدمين حتى يحافظ خادم مشترك على مهام ونماذج وأذونات كل شخص منفصلة.' },
        ],
        note: 'تتغير خطوات التثبيت الدقيقة وإصدارات التبعيات ومسارات المجلدات بين الإصدارات — اتبع التعليمات الحالية في [ملف README الخاص بـ SwarmUI على GitHub](https://github.com/mcmonkeyprojects/SwarmUI) بدلاً من دليل عام، بما في ذلك هذا الدليل، لأي شيء يتجاوز الشكل العام أعلاه.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'السعر والترخيص',
        content: [
          '**SwarmUI مجاني ومفتوح المصدر بموجب ترخيص MIT — لا توجد فئة مدفوعة أو اشتراك أو نسخة مستضافة يبيعها المشروع نفسه.** تدفع فقط مقابل عتادك وكهربائك، تمامًا مثل أي أداة ذاتية الاستضافة.',
          'ترخيص MIT تساهلي: يسمح بالاستخدام التجاري والتعديل وإعادة التوزيع مع نسبة الفضل، ولا يفرض سقفًا للإيرادات أو شرط تسجيل من النوع الذي ينطبق على بعض النماذج التي قد تشغّلها عبره (على سبيل المثال، تتطلب Community License من Stability AI لـ SD 3.5 تسجيلًا فوق إيرادات معينة). ترخيص SwarmUI نفسه لا يفرض ذلك — لكن ترخيص أي نقطة تفتيش نموذج تحمّلها يظل ساريًا بشكل مستقل، لأن SwarmUI لا يغيّر شروط ترخيص النموذج الخاصة به.',
          'بما أنه لا توجد خدمة SwarmUI مستضافة رسمية، فإن "سعر" هذه الأداة يدور بالكامل حول العتاد الذي تملكه بالفعل أو تختار شراءه — لا توجد فئة عضوية للمقارنة، على عكس خطط API المستضافة والعضوية الخاصة بـ Stability AI نفسها والمُغطاة في [مراجعة Stable Diffusion](/ar/power-local-llm/stable-diffusion-review#pricing).',
        ],
        note: 'يمكن أن تتغير شروط الترخيص بين الإصدارات — تأكد من نص الترخيص الحالي في ملف `LICENSE` في [مستودع SwarmUI على GitHub](https://github.com/mcmonkeyprojects/SwarmUI) قبل اتخاذ قرار نشر تجاري. هذا ليس استشارة قانونية.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'SwarmUI مقابل البدائل',
        columns: ['الخيار', 'الأنسب لـ', 'عدة GPU/عدة مستخدمين', 'البنية', 'المقايضة الرئيسية'],
        rows: [
          {
            'الخيار': 'SwarmUI',
            'الأنسب لـ': 'عدة وحدات GPU أو عدة مستخدمين يشتركون في تثبيت واحد، تحكم قائم على النماذج في خلفية ComfyUI',
            'عدة GPU/عدة مستخدمين': 'نعم — مدمج',
            'البنية': 'يغلّف ComfyUI كمحرك استدلال',
            'المقايضة الرئيسية': 'يعتمد على توافق ComfyUI في الخلفية؛ أجزاء متحركة أكثر من تطبيق المستخدم الواحد',
          },
          {
            'الخيار': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'الأنسب لـ': 'تحكم يدوي كامل في كل خطوة توليد عبر رسم عقد',
            'عدة GPU/عدة مستخدمين': 'لا — مستخدم واحد افتراضيًا',
            'البنية': 'محرك استدلال رسم عقد مستقل',
            'المقايضة الرئيسية': 'أشد منحنى تعلم في المجموعة؛ لا يوجد توزيع مهام عبر عدة GPU أو حسابات مدمجة',
          },
          {
            'الخيار': '[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            'الأنسب لـ': 'مستخدمو وحدة GPU الواحدة الراغبون في أكبر نظام إيكولوجي للإضافات لواجهة قائمة على النماذج',
            'عدة GPU/عدة مستخدمين': 'لا — مستخدم واحد ووحدة GPU واحدة بالتصميم',
            'البنية': 'خط أنابيب استدلال منفصل خاص به، غير قائم على ComfyUI',
            'المقايضة الرئيسية': 'لا يوجد دعم مدمج لعدة GPU/عدة مستخدمين؛ قاعدة كود منفصلة عن النظام الإيكولوجي لـ ComfyUI',
          },
          {
            'الخيار': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'الأنسب لـ': 'سير عمل إبداعي أنيق ذو طابع احترافي للمستخدم الواحد مع لوحة موحّدة',
            'عدة GPU/عدة مستخدمين': 'لا — تركيز على المستخدم الواحد',
            'البنية': 'خط أنابيب استدلال خاص به',
            'المقايضة الرئيسية': 'نظام إيكولوجي للعقد/الإضافات أصغر من ComfyUI؛ غير مبني حول توزيع عبر عدة GPU',
          },
          {
            'الخيار': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'الأنسب لـ': 'أسرع طريق إلى أول صورة جيدة بأقل عدد من الإعدادات المطلوبة',
            'عدة GPU/عدة مستخدمين': 'لا — تصميم للمستخدم الواحد بحد أدنى من الإعدادات',
            'البنية': 'خط أنابيب استدلال مبسّط خاص به مبني على Stable Diffusion',
            'المقايضة الرئيسية': 'قابلية تكوين محدودة عمدًا مقابل البساطة؛ غير موجّه لإعدادات عدة GPU',
          },
        ],
        note: 'هذا ملخص تموضع، وليس ترتيبًا قائمًا على اختبارات أداء — راجع [مراجعة Stable Diffusion](/ar/power-local-llm/stable-diffusion-review) لتفاصيل الترخيص وVRAM للنماذج الأساسية التي تشغّلها كل هذه الواجهات، و[توليد الصور المحلي بالذكاء الاصطناعي مقابل السحابة](/ar/power-local-llm/local-ai-image-generation-vs-cloud) لمقارنة أوسع بين المحلي والسحابي.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم SwarmUI',
        items: [
          '**القارئ الذي لديه أكثر من وحدة GPU واحدة.** جدولة توزيع المهام في SwarmUI هي الأداة الوحيدة في هذه المقارنة المصممة خصيصًا لإبقاء عدة بطاقات مشغولة بنفس دفعة العمل.',
          '**أسرة أو فريق أو مختبر يشترك في جهاز واحد.** تتيح الحسابات متعددة المستخدمين المدمجة لعدة أشخاص توليد الصور من نفس التثبيت دون التداخل في مهام أو نماذج بعضهم البعض.',
          '**القارئ الذي يريد دعم نماذج ComfyUI دون بناء كل سير عمل كرسم عقد.** يغطي تبويب "Generate" القائم على النماذج الحالات الشائعة؛ ويظل رسم العقد متاحًا عند الحاجة إليه.',
          '**القارئ المرتاح بالفعل مع ComfyUI ويريد طبقة استخدام يومي أكثر سهولة فوقه.** لا يطلب SwarmUI منك التخلي عن ComfyUI — بل يتيحه مباشرة عبر تبويب "Comfy Workflow".',
          '**القارئ الذي يريد مشروعًا مرخّصًا ترخيصًا تساهليًا (MIT)، ويُصان بنشاط واستقلالية**، بتاريخ واضح وموثّق بدلاً من فرع مهجور.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم SwarmUI',
        items: [
          '**المستخدم العادي بوحدة GPU واحدة الذي يريد فقط أبسط صورة أولى ممكنة.** لدى [Fooocus](https://github.com/lllyasviel/Fooocus) إعدادات أقل ومسار أقصر للحصول على أول نتيجة؛ طبقة SwarmUI متعددة GPU/متعددة المستخدمين هي عبء غير مستخدم لمستخدم عادي واحد.',
          '**القارئ الذي يريد أكبر نظام إيكولوجي للإضافات/النصوص المخصصة لواجهة قائمة على النماذج.** لدى [Stable Diffusion WebUI من AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) سجل أطول وكتالوج إضافات أكبر لهذه الحالة المحددة.',
          '**القارئ الذي يريد تحكمًا يدويًا كاملًا في رسم العقد دون أي طبقة تغليف.** استخدم [ComfyUI](https://github.com/comfy-org/ComfyUI) مباشرة بدلاً من عبر SwarmUI إذا كنت لا تريد أبدًا تبويب "Generate" المبسّط.',
          '**القارئ الذي يريد أداة إبداعية للمستخدم الواحد بلوحة موحّدة ومحرر مدمج أكثر أناقة.** يستهدف [InvokeAI](https://github.com/invoke-ai/InvokeAI) هذه الحالة بشكل مباشر أكثر من تركيز SwarmUI على عدة GPU/عدة مستخدمين.',
          '**القارئ الذي يتوقع خطأً منتجًا رسميًا من Stability AI أو قناة دعم من Stability AI.** لا يوجد لدى SwarmUI انتماء مستمر إلى Stability AI منذ يونيو 2024 — يأتي الدعم من المشرف المستقل والمجتمع، وليس من Stability AI.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل "StableSwarmUI" لا يزال الاسم الصحيح لهذا المشروع؟',
            a: 'لا. أُعيدت تسمية المشروع من "StableSwarmUI" إلى "SwarmUI" في يونيو 2024، عندما انتقل من منظمة GitHub الخاصة بـ Stability AI إلى المستودع المستقل [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) بقيادة المشرف Alex "mcmonkey" Goodwin. "StableSwarmUI" هو الاسم السابق؛ تستخدم الوثائق الحالية والإصدارات ومستودع GitHub جميعها "SwarmUI".',
          },
          {
            q: 'هل ما زالت Stability AI تصنع أو تصون SwarmUI؟',
            a: 'لا، حتى تاريخ هذه المراجعة (2026-09-06). أصدرت Stability AI المشروع في الأصل باسم StableSwarmUI لكنها توقفت عن صيانته؛ جعله المطوّر الأصلي مستقلًا تمامًا في يونيو 2024. لا توجد مشاركة مستمرة من Stability AI في تطوير SwarmUI الحالي.',
          },
          {
            q: 'هل يستخدم SwarmUI ComfyUI، أم أنه محرك توليد صور منفصل؟',
            a: 'يستخدم SwarmUI ComfyUI كمحرك استدلال خلفي بدلاً من تقديم خط أنابيب توليد منفصل خاص به. يرسل تبويب "Generate" في SwarmUI المهام إلى نسخة واحدة أو أكثر من خلفية ComfyUI، ويتيح تبويب "Comfy Workflow" المدمج الوصول المباشر إلى رسم عقد ComfyUI الأساسي عندما تريد تحكمًا يدويًا كاملًا.',
          },
          {
            q: 'ما النماذج التي يدعمها SwarmUI؟',
            a: 'يدعم SwarmUI نفس عائلات النماذج التي يدعمها ComfyUI، بما في ذلك Stable Diffusion 1.5 وStable Diffusion XL وStable Diffusion 3.5 وFLUX. بما أن SwarmUI يشغّل ComfyUI في الخلفية، تتبع تغطية نماذجه تحديثات ComfyUI نفسه — تحقق من مستودعات GitHub الحالية لـ SwarmUI وComfyUI لأحدث قائمة بالنماذج المدعومة.',
          },
          {
            q: 'هل SwarmUI مجاني؟',
            a: 'نعم. SwarmUI مجاني ومفتوح المصدر بموجب ترخيص MIT، دون فئة مدفوعة أو اشتراك يبيعه المشروع. ما زلت بحاجة إلى التحقق من ترخيص أي نقطة تفتيش نموذج تحمّلها (Stable Diffusion، FLUX، إلخ.)، لأن تلك التراخيص مستقلة عن ترخيص MIT الخاص بـ SwarmUI نفسه.',
          },
          {
            q: 'كيف يختلف SwarmUI عن AUTOMATIC1111 أو Fooocus بالنسبة لمستخدم وحدة GPU واحدة؟',
            a: 'يأتي كل من Stable Diffusion WebUI من AUTOMATIC1111 وFooocus بخطوط أنابيب استدلال مستقلة خاصة بهما، وهما مصممان حول مستخدم واحد بوحدة GPU واحدة، دون توزيع مهام عبر عدة GPU أو حسابات متعددة المستخدمين مدمجة. صُمم SwarmUI خصيصًا لإضافة كليهما — موازنة تحميل عبر عدة GPU وتسجيلات دخول متعددة المستخدمين — فوق ComfyUI، وهو عبء غير ضروري إذا كان لديك وحدة GPU واحدة فقط ومستخدم واحد.',
          },
          {
            q: 'هل يمكن لعدة أشخاص استخدام SwarmUI في نفس الوقت؟',
            a: 'نعم. يتمتع SwarmUI بدعم مدمج متعدد المستخدمين مع حسابات تسجيل دخول منفصلة، وضوابط وصول إلى النماذج لكل مستخدم، وقائمة انتظار مهام مشتركة، بحيث يمكن لعدة أشخاص توليد الصور من تثبيت مشترك واحد دون أن يحتاج كل منهم إلى نسخته الخاصة من البرنامج.',
          },
          {
            q: 'من أين أُحمّل SwarmUI؟',
            a: 'المستودع الحالي والمُصان هو [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) على GitHub. يعكس المستودع الأقدم Stability-AI/StableSwarmUI النسخة المتوقفة قبل يونيو 2024، وليس قاعدة الكود قيد التطوير النشط.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يستحق SwarmUI توصية محددة وضيقة النطاق: فهو الخيار الأوضح للقراء الذين لديهم أكثر من وحدة GPU واحدة، أو أكثر من شخص واحد، يريدون مشاركة تثبيت واحد لـ Stable Diffusion / FLUX — وهي مشكلة تنسيق لا يعالجها AUTOMATIC1111 وFooocus وComfyUI الأساسي ببساطة. تعني بنيته القائمة على خلفية ComfyUI أنه يرث دعم النماذج وقوة رسم العقد من ذلك المشروع دون إجبار كل مهمة روتينية على المرور عبر رسم عقد، على حساب الاعتماد على توافق ComfyUI نفسه في الخلفية. يستحق تاريخ المشروع أن يُعرف بصدق: بدأ باسم "StableSwarmUI" الخاص بـ Stability AI، وتوقفت Stability AI عن صيانته، وواصله المطوّر الأصلي بشكل مستقل باسم "SwarmUI" في يونيو 2024 — لا يوجد اليوم انتماء مستمر إلى Stability AI. القراء الذين لديهم وحدة GPU واحدة ولا يحتاجون إلى تعدد المستخدمين عادةً ما يكونون في وضع أفضل مع Fooocus لبساطته، أو مع AUTOMATIC1111 لنظامه الإيكولوجي الأكبر للإضافات للمستخدم الواحد؛ أما القراء الذين يريدون قدرة SwarmUI المحددة على عدة GPU أو عدة مستخدمين فيجب أن يحصلوا عليه من المستودع الحالي والمُصان [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)، وليس من مستودع Stability AI المؤرشف.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[mcmonkeyprojects/SwarmUI — مستودع GitHub](https://github.com/mcmonkeyprojects/SwarmUI) — المشروع الحالي والمُصان، ملف README، الترخيص، والإصدارات.',
          '[Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI — GitHub Discussion #2](https://github.com/mcmonkeyprojects/SwarmUI/discussions/2) — رواية المشرف نفسه لتغيير الاسم في يونيو 2024 وخطوات الترحيل.',
          '[Stability-AI/StableSwarmUI — مستودع GitHub (مؤرشف/متوقف)](https://github.com/Stability-AI/StableSwarmUI) — المشروع الأصلي تحت Stability AI، لم يعد قيد التطوير النشط.',
          '[README الخاص بـ ComfyUI Backend Extension — GitHub الخاص بـ SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI/blob/master/src/BuiltinExtensions/ComfyUIBackend/README.md) — يوثّق بنية الخلفية القائمة على ComfyUI وتمرير ComfyBackendDirect المباشر.',
          '[ComfyUI — مستودع GitHub](https://github.com/comfy-org/ComfyUI) — محرك الاستدلال الذي يشغّله SwarmUI كخلفية.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Stable Diffusion (2026)](/ar/power-local-llm/stable-diffusion-review) — عائلة النماذج الأساسية التي يشغّلها SwarmUI، بما في ذلك شروط الترخيص واحتياجات VRAM حسب الإصدار.',
          '[توليد الصور المحلي بالذكاء الاصطناعي مقابل السحابة](/ar/power-local-llm/local-ai-image-generation-vs-cloud) — مقارنة أوسع للنماذج والواجهات المحلية للصور مقابل أدوات سحابية مثل Midjourney وAdobe Firefly.',
          '[Local LLM Software Directory 2026](/ar/power-local-llm/local-llm-software-directory) — دليل شامل لبرامج الذكاء الاصطناعي المحلية لجميع المنصات.',
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
    heroImage: '/images/stableswarmui-review-hero-zh.webp',
    title: 'SwarmUI评测(2026):支持多GPU的Stable Diffusion网页界面',
    seoTitle: 'SwarmUI评测2026:基于ComfyUI的多GPU界面',
    intro:
      'SwarmUI(前身为StableSwarmUI)是一款免费、开源、模块化的网页界面,用于本地Stable Diffusion、FLUX及其他图像和视频生成模型,专为从单一共享安装中驱动多个GPU和多个用户而设计。它使用[ComfyUI](https://github.com/comfy-org/ComfyUI)作为底层推理引擎:SwarmUI不是从零构建一个与之竞争的图像生成后端,而是用面向日常使用的表单式"Generate"标签页包裹ComfyUI,同时仍向希望完全手动控制的读者开放ComfyUI原始的节点图。本评测涵盖SwarmUI如今究竟是什么(包括其改名历程的真实经过,以及它与Stability AI如今已完全独立的关系)、其多GPU与多用户架构、模型支持、安装方法、许可证,以及与AUTOMATIC1111、Fooocus等单用户工具的比较。',
    metaDescription:
      'SwarmUI评测2026:基于ComfyUI构建的多GPU、多用户Stable Diffusion网页界面。涵盖从StableSwarmUI改名的历程、MIT许可证、模型支持与安装设置。',
    twitterDescription:
      'SwarmUI评测2026:前身为StableSwarmUI,如今是一款独立的、MIT许可、基于ComfyUI的网页界面,用于多GPU的Stable Diffusion和FLUX生成。涵盖安装、架构与真实的权衡取舍。',
    audience:
      '拥有多个GPU或共享/多用户配置、正在判断SwarmUI这款基于ComfyUI、表单式的界面是否比AUTOMATIC1111、Fooocus或原生ComfyUI更适合自己的读者。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'SwarmUI review',
    targetKeywords: [
      'swarmui评测',
      'stableswarmui vs swarmui',
      'swarmui 多gpu',
      'swarmui comfyui后端',
      'swarmui vs automatic1111',
      'swarmui vs comfyui',
      'swarmui安装',
      'swarmui stability ai',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL 1.0', 'Stable Diffusion 3.5', 'FLUX.1 dev', 'FLUX.1 schnell'],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**SwarmUI是一款免费、MIT许可、基于ComfyUI构建的Stable Diffusion与FLUX网页界面,专为从单一共享安装中跨多个GPU和多个用户运行而设计。** 它最初由Stability AI以"StableSwarmUI"之名发布,并在维护者Alex "mcmonkey" Goodwin的主导下,于2024年6月完全独立为"SwarmUI"——此后不再有Stability AI的持续参与。在底层,它运行[ComfyUI](https://github.com/comfy-org/ComfyUI)作为推理引擎,因此继承了ComfyUI的模型支持(Stable Diffusion、SDXL、SD 3.5、FLUX),同时在其上呈现更简单的表单式"Generate"标签页。只有一个GPU、不需要多用户访问的读者,通常更适合使用[AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)或[Fooocus](https://github.com/lllyasviel/Fooocus)。',
    quickAnswerTop: {
      zh: {
        question: 'SwarmUI是什么?它现在还是Stability AI开发的吗?',
        answer:
          'SwarmUI是一款免费、开源的Stable Diffusion与FLUX网页界面,可以从单一安装中驱动多个GPU和多个用户。目前它并非由Stability AI开发:该项目最初在Stability AI以"StableSwarmUI"之名起步,但Stability AI停止了维护,原开发者Alex "mcmonkey" Goodwin于2024年6月以新名称"SwarmUI"使其完全独立。此后再无Stability AI的持续参与。',
        bullets: [
          '当前名称:SwarmUI。曾用名:StableSwarmUI(仅在Stability AI旗下使用至2024年6月)。',
          '当前维护者:Alex "mcmonkey" Goodwin,独立维护——并非Stability AI。',
          '当前仓库:GitHub上的[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)(旧的Stability-AI/StableSwarmUI仓库已归档/停止维护)。',
          '许可证:MIT(宽松许可,商用和个人使用均免费)。',
          '架构:SwarmUI运行ComfyUI作为后端推理引擎,并在其上叠加更简单的表单式界面、多GPU任务分发和多用户账户。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'SwarmUI是什么', anchor: 'what-is-swarmui' },
      { label: '历史:从StableSwarmUI到独立的SwarmUI', anchor: 'history' },
      { label: 'ComfyUI后端架构的工作原理', anchor: 'architecture' },
      { label: '多GPU与多用户支持', anchor: 'multi-gpu-multi-user' },
      { label: '支持的模型', anchor: 'model-support' },
      { label: '如何安装SwarmUI', anchor: 'installation' },
      { label: '价格与许可证', anchor: 'pricing-license' },
      { label: 'SwarmUI对比其他选择', anchor: 'vs-alternatives' },
      { label: '哪些人适合使用SwarmUI', anchor: 'who-should-use' },
      { label: '哪些人不适合使用SwarmUI', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '总评', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        items: [
          'SwarmUI(前身为StableSwarmUI)是一款免费、开源、MIT许可的Stable Diffusion与FLUX网页界面,专为从单一安装中跨多个GPU和多个用户运行而设计。',
          '它最初在Stability AI以"StableSwarmUI"之名起步;Stability AI停止维护后,原开发者Alex "mcmonkey" Goodwin于2024年6月使其完全独立为"SwarmUI"——此后再无Stability AI的持续参与。',
          '当前仓库:[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI);旧仓库位于Stability-AI/StableSwarmUI。',
          'SwarmUI运行[ComfyUI](https://github.com/comfy-org/ComfyUI)作为后端推理引擎——它并未取代ComfyUI的生成代码,而是用更友好的"Generate"标签页将其包裹起来,同时原始节点图依然可直接访问。',
          '它支持ComfyUI支持的所有模型,包括Stable Diffusion 1.5/XL、Stable Diffusion 3.5和FLUX;确切的模型覆盖范围随ComfyUI自身的更新而变化。',
          '最适合拥有多个GPU或共享/团队访问权限、希望利用ComfyUI的模型支持却不想把每个工作流都搭建成节点图的读者;只有单个GPU的普通用户通常更适合AUTOMATIC1111或Fooocus。',
        ],
      },
      whatIsSwarmUI: {
        id: 'what-is-swarmui',
        title: 'SwarmUI是什么',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI是一款免费、开源的Stable Diffusion与FLUX图像生成网页界面,运行ComfyUI作为后端,并在其上增加多GPU任务分发和多用户账户功能。' },
          { type: 'plain-terms', text: '可以把它想象成安装在ComfyUI之上、更友好的控制面板——你得到一个简单的表单来输入提示词、选择模型,但底层实际生成图像的工作仍由ComfyUI完成,只是现在能把任务分配给多个GPU或多个人。' },
        ],
        content: [
          '**SwarmUI是一款模块化、基于表单的本地图像与视频生成网页界面,不同于ComfyUI默认自带的原始节点图界面。** 它面向与ComfyUI相同的底层模型——Stable Diffusion、SDXL、SD 3.5、FLUX——但通过带下拉菜单和滑块的更简单的"Generate"标签页来呈现,面向那些觉得完整节点图在日常生成中速度较慢的读者。',
          '"Swarm"(蜂群)这个名字指的是其最初的核心功能:协调一"群"GPU,让多块显卡能同时处理同一批图像,而不是由单个GPU独自处理队列。这种多GPU任务分发,加上内置的多用户登录和按用户划分的模型访问权限,正是SwarmUI区别于AUTOMATIC1111的Stable Diffusion WebUI或Fooocus等单用户工具的地方。',
          'SwarmUI服务端用C#/.NET编写,配有网页前端,以自托管应用形式发布——不存在官方托管/云端版本。一切都运行在你自己掌控的硬件上,无论是一块游戏GPU还是一台小型多GPU工作站。',
        ],
      },
      history: {
        id: 'history',
        title: '历史:从StableSwarmUI到独立的SwarmUI',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI最初是Stability AI的官方项目"StableSwarmUI",在Stability AI停止维护后,于2024年6月以新名称"SwarmUI"成为一个完全独立、由社区维护的项目。' },
          { type: 'plain-terms', text: 'Stability AI打造了最初的版本并冠以自己的名字,随后却退出了维护;原开发者没有让项目就此消亡,而是以新名称独立继续开发。' },
        ],
        content: [
          '**该项目最初以"StableSwarmUI"之名发布在Stability AI的GitHub组织下,主要由Alex "mcmonkey" Goodwin开发。** 原始仓库[Stability-AI/StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI)上公开的发布说明和讨论帖记录了它在挂靠Stability AI名称与版权期间的早期功能公告。',
          '2024年6月,Stability AI停止维护StableSwarmUI。mcmonkey没有让项目就此闲置,而是使其独立,发布了一份《Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI》(从Stability的StableSwarmUI迁移到独立SwarmUI的指南),并在新仓库[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)下将项目更名为"SwarmUI"。现有安装可通过更新并运行官方提供的迁移脚本完成迁移(Windows上为`migrate-windows.bat`,或在Linux/Mac上手动将Git远程地址指向`mcmonkeyprojects/SwarmUI`)。',
          '**截至本评测撰写时(2026-09-06),SwarmUI与Stability AI之间不存在任何持续的隶属关系**——它由mcmonkey及社区贡献者独立维护,采用MIT许可证,当前许可证文件所涵盖的2024至2026年期间的版权归属于"Alex \'mcmonkey\' Goodwin"。原始的Stability-AI/StableSwarmUI仓库已不再是积极开发的代码库;当前维护的项目位于mcmonkeyprojects/SwarmUI。',
          '**为什么本文在改名后仍保留"stableswarmui-review"这个网址标识:** 那些以更知名的原始名称搜索这款工具的读者,依然会来到这个页面——正文和标题始终使用当前正确的名称"SwarmUI",本节也明确说明了改名的来龙去脉,以免任何人对当前项目的维护者产生误解。',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'ComfyUI后端架构的工作原理',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI本身不包含图像生成引擎——它将ComfyUI作为后端进程运行,把生成任务发送给它,再在自己简化的界面中呈现结果。' },
          { type: 'plain-terms', text: '把提示词变成图像的实际计算工作由ComfyUI完成;SwarmUI是上层的一层,负责决定哪个后端接手哪个任务,并向你展示一个比ComfyUI节点图更简单的界面。' },
        ],
        columns: ['层级', '作用', '能否直接访问'],
        rows: [
          { '层级': 'SwarmUI网页界面', '作用': '表单式"Generate"标签页、任务队列、多用户账户、多GPU路由', '能否直接访问': '可以——这是默认界面' },
          { '层级': 'ComfyUI后端', '作用': '执行实际的扩散模型推理(Stable Diffusion、SDXL、FLUX等)', '能否直接访问': '可以,通过内置的"Comfy Workflow"标签页和节点图' },
          { '层级': 'GPU硬件', '作用': '为每个ComfyUI后端实例执行模型计算', '能否直接访问': '不适用——由SwarmUI的后端调度器管理' },
        ],
        content: [
          'SwarmUI在首次运行时可以自动安装并自行启动一个ComfyUI后端,也可以连接到你自己已经运行的一个或多个ComfyUI实例,包括通过网络连接的远程实例。每个配置好的后端都被视为一个工作节点:当你提交一个生成请求时,SwarmUI的调度器会将其分配给一个可用的后端实例。',
          '由于底层推理引擎是未经修改的ComfyUI,SwarmUI几乎完整地继承了ComfyUI的模型兼容性、自定义节点生态系统和工作流格式。内置的"ComfyUI Backend Extension"还提供了一条直接透传路径(`ComfyBackendDirect`),让现有的ComfyUI自动化脚本和API集成能继续对接由SwarmUI管理的后端运行。',
          '这正是与AUTOMATIC1111的Stable Diffusion WebUI的关键架构区别——后者自带独立的推理管线,而非包裹ComfyUI。SwarmUI的权衡在于,它依赖于ComfyUI自身保持兼容并正确安装——如果ComfyUI本身出了问题,SwarmUI也会随之受影响,因为SwarmUI并不进行自己独立的推理。',
        ],
      },
      multiGpuMultiUser: {
        id: 'multi-gpu-multi-user',
        title: '多GPU与多用户支持',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI可以将生成任务分发到同一台机器上的多个GPU,或分发到一个小型的多机网络中,并支持从单一安装中管理多个登录用户账户,提供按用户划分的模型和权限设置。' },
          { type: 'plain-terms', text: '不同于单个GPU逐一处理图像请求队列,SwarmUI可以同时把不同的请求分配给不同的GPU,并能区分不同用户,避免共享服务器把谁请求了什么混淆在一起。' },
        ],
        content: [
          '**多GPU支持正是这个项目名称的由来。** SwarmUI可以为一台机器上每个可用的GPU(或跨网络中的多台机器)运行一个ComfyUI后端,并将传入的生成任务在所有后端之间做负载均衡——这对大批量/网格生成很有用,也方便一个家庭或小团队共用一台多GPU工作站,而不必让每个人都配备自己专用的显卡。',
          '**多用户支持** 增加了登录账户、按用户划分的模型访问控制和共享任务队列,使一个SwarmUI安装就能服务多个人,而不必让每个人各自运行一份软件副本,或争抢单个GPU的队列。无论是AUTOMATIC1111的Stable Diffusion WebUI还是原生ComfyUI,都没有这种内置的多用户账户系统——两者都是围绕单一本地用户设计的。',
          '这种组合正是让SwarmUI与单GPU、单用户应用有实质区别的原因,而不只是"外观更好看的ComfyUI":任务分发和账户这一层,解决了一个只有在拥有多个GPU、或有多人想在同一硬件上生成图像时才会出现的真实协调问题。',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: '支持的模型',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI支持ComfyUI用于图像生成所支持的每一个模型系列,包括Stable Diffusion 1.5、Stable Diffusion XL、Stable Diffusion 3.5和FLUX,并随着ComfyUI加入对相关模型的支持而支持部分视频和音频模型。' },
          { type: 'plain-terms', text: '由于SwarmUI在底层运行ComfyUI,它通常可以加载ComfyUI能够加载的任何模型检查点,SwarmUI无需为每个新模型系列单独编写代码。' },
        ],
        columns: ['模型系列', '类型', '备注'],
        rows: [
          { '模型系列': 'Stable Diffusion 1.5', '类型': '图像', '备注': '广泛支持的经典检查点格式;通过ComfyUI拥有庞大的社区LoRA/检查点生态系统' },
          { '模型系列': 'Stable Diffusion XL 1.0', '类型': '图像', '备注': '原生1024×1024模型;支持方式与原生ComfyUI相同' },
          { '模型系列': 'Stable Diffusion 3.5', '类型': '图像', '备注': '更新的多模态扩散Transformer架构;需要遵循Stability AI为SD 3.5本身发布的当前Community License条款,与SwarmUI无关' },
          { '模型系列': 'FLUX(Black Forest Labs)', '类型': '图像', '备注': '通过ComfyUI的FLUX节点支持;许可证取决于具体的FLUX变体(schnell与dev),与SwarmUI无关' },
          { '模型系列': '视频/音频模型', '类型': '视频、音频', '备注': '随ComfyUI自身加入并更新支持而支持——在依赖某个特定模型之前,请查看ComfyUI和SwarmUI最新的发布说明以确认确切的模型覆盖范围' },
        ],
        note: '模型支持遵循ComfyUI自身的兼容性列表,该列表会随时间变化——在将某个工作流固定使用某个特定检查点之前,请在[SwarmUI的GitHub仓库](https://github.com/mcmonkeyprojects/SwarmUI)或[ComfyUI的GitHub仓库](https://github.com/comfy-org/ComfyUI)上核实当前的支持情况。每个模型自身的许可证(RAIL-M、Stability AI Community License、Apache 2.0等)无论在哪个界面中加载都同样适用——关于各版本许可证差异的详细说明,请参阅[Stable Diffusion评测](/zh/power-local-llm/stable-diffusion-review)。',
      },
      installation: {
        id: 'installation',
        title: '如何安装SwarmUI',
        content: [
          'SwarmUI在Windows、Linux和macOS上的安装流程总体相似——具体命令略有不同,因此这里给出的是通用流程,而非针对特定平台的说明。',
        ],
        numberedItems: [
          { title: '确认你的GPU受支持且VRAM充足', whyItMatters: 'SwarmUI的VRAM需求取决于你计划通过ComfyUI运行的模型——例如,SDXL大约需要8 GB VRAM作为合理下限,SD 3.5或FLUX则需要更多;安装前请查看具体模型自身的要求。' },
          { title: '为你的操作系统下载SwarmUI安装程序', whyItMatters: '从[mcmonkeyprojects/SwarmUI的GitHub仓库](https://github.com/mcmonkeyprojects/SwarmUI)获取当前版本——这是持续维护的独立仓库,而非已归档的Stability-AI/StableSwarmUI。' },
          { title: '让SwarmUI自动将ComfyUI安装为后端', whyItMatters: '"Self-Start"后端选项可让SwarmUI自动配置、下载并启动一个ComfyUI后端,对于首次安装来说,这是推荐的方式,优于手动接入一个已有的ComfyUI实例。' },
          { title: '下载一个模型检查点', whyItMatters: '从Hugging Face等来源获取Stable Diffusion、SDXL、SD 3.5或FLUX的检查点,将其放入SwarmUI设置文档指定的模型文件夹,并确认该模型的许可证条款是否适用于你的预期用途。' },
          { title: '如果拥有多块显卡,配置额外的GPU后端', whyItMatters: '在SwarmUI的后端设置中,将每块额外的GPU添加为独立的后端实例,以便任务能够分发到所有GPU,而不仅仅是最先检测到的那一块。' },
          { title: '如果多人共用该安装,设置用户账户', whyItMatters: '通过SwarmUI的多用户设置创建独立的登录账户,让共享服务器能将每个人的任务、模型和权限分开管理。' },
        ],
        note: '具体的安装步骤、依赖版本和文件夹路径会随版本变化——对于超出上述通用流程的内容,请遵循[SwarmUI的GitHub README](https://github.com/mcmonkeyprojects/SwarmUI)中当前的说明,而不是包括本文在内的通用指南。',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: '价格与许可证',
        content: [
          '**SwarmUI在MIT许可证下免费且开源——项目本身不出售任何付费套餐、订阅或托管版本。** 你只需为自己的硬件和电费付费,和任何自托管工具一样。',
          'MIT许可证是宽松式的:它允许商业使用、修改和附带署名的再分发,不像你可能通过它运行的某些模型那样设有收入上限或注册要求(例如,Stability AI针对SD 3.5的Community License要求超过一定收入后必须注册)。SwarmUI自身的许可证并不施加这类限制——但你所加载的模型检查点自身的许可证依然独立适用,因为SwarmUI不会改变模型自身的许可证条款。',
          '由于不存在官方的托管SwarmUI服务,这款工具的"价格"完全取决于你已拥有或选择购买的硬件——没有可比较的会员套餐,这与[Stable Diffusion评测](/zh/power-local-llm/stable-diffusion-review#pricing)中介绍的Stability AI自身的托管API和会员计划不同。',
        ],
        note: '许可证条款可能随版本变化——在做出商业部署决定之前,请在[SwarmUI的GitHub仓库](https://github.com/mcmonkeyprojects/SwarmUI)的`LICENSE`文件中确认当前的许可证文本。本文不构成法律建议。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'SwarmUI对比其他选择',
        columns: ['选项', '最适合', '多GPU/多用户', '架构', '主要权衡'],
        rows: [
          {
            '选项': 'SwarmUI',
            '最适合': '多个GPU或多个用户共用一个安装,以表单方式控制ComfyUI后端',
            '多GPU/多用户': '是——内置',
            '架构': '将ComfyUI包裹为推理引擎',
            '主要权衡': '依赖底层ComfyUI的兼容性;比单用户应用有更多的活动部件',
          },
          {
            '选项': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '最适合': '通过节点图对每个生成步骤进行完全的手动控制',
            '多GPU/多用户': '否——默认单用户',
            '架构': '独立的节点图推理引擎',
            '主要权衡': '同组中学习曲线最陡;没有内置的多GPU任务分发或账户功能',
          },
          {
            '选项': '[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            '最适合': '希望获得表单式界面中最大扩展生态系统的单GPU用户',
            '多GPU/多用户': '否——设计上就是单用户、单GPU',
            '架构': '自有的独立推理管线,不基于ComfyUI',
            '主要权衡': '没有内置的多GPU/多用户支持;代码库与ComfyUI生态系统各自独立',
          },
          {
            '选项': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            '最适合': '打磨精细、专业感强、带统一画布的单用户创作工作流',
            '多GPU/多用户': '否——聚焦单用户',
            '架构': '自有推理管线',
            '主要权衡': '节点/扩展生态系统比ComfyUI小;并非围绕多GPU分发而设计',
          },
          {
            '选项': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '最适合': '用最少的设置项、最快得到第一张满意的图像',
            '多GPU/多用户': '否——单用户、极简配置的设计',
            '架构': '基于Stable Diffusion构建的自有简化推理管线',
            '主要权衡': '为换取简洁性而刻意限制可配置性;不面向多GPU配置',
          },
        ],
        note: '这是一份定位总结,而非基准测试排名——关于这些界面所运行的底层模型在许可证和VRAM方面的详细比较,请参阅[Stable Diffusion评测](/zh/power-local-llm/stable-diffusion-review);关于本地与云端更全面的比较,请参阅[本地AI图像生成对比云端](/zh/power-local-llm/local-ai-image-generation-vs-cloud)。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '哪些人适合使用SwarmUI',
        items: [
          '**拥有一块以上GPU的读者。** SwarmUI的任务分发调度器是本对比中唯一专为让多块显卡同时处理同一批工作而设计的工具。',
          '**共用一台机器的家庭、团队或实验室。** 内置的多用户账户让多人可以从同一个安装中生成图像,而不会互相干扰彼此的任务或模型。',
          '**希望利用ComfyUI的模型支持、又不想把每个工作流都搭建成节点图的读者。** 表单式的"Generate"标签页涵盖了常见场景;需要时节点图依然可用。',
          '**已经熟悉ComfyUI、希望在其之上获得更友好日常使用层的读者。** SwarmUI不要求你放弃ComfyUI——它通过"Comfy Workflow"标签页直接开放ComfyUI。',
          '**希望使用宽松许可(MIT)、持续且独立维护的项目、而非被放弃的分支的读者**,该项目有清晰、有据可查的历史。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '哪些人不适合使用SwarmUI',
        items: [
          '**只想用最简单方式得到第一张图像的单GPU普通用户。** [Fooocus](https://github.com/lllyasviel/Fooocus)的设置项更少,通往第一个结果的路径更短;对单个普通用户而言,SwarmUI的多GPU/多用户功能层是用不上的额外开销。',
          '**希望获得表单式界面中最大扩展/自定义脚本生态系统的读者。** [AUTOMATIC1111的Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)在这一特定用例上有更长的历史记录和更大的扩展目录。',
          '**希望完全手动控制节点图、不想经过任何包装层的读者。** 如果你完全不需要简化的"Generate"标签页,请直接使用[ComfyUI](https://github.com/comfy-org/ComfyUI),而非通过SwarmUI。',
          '**希望使用带统一画布、内置编辑器更精良的单用户创作工具的读者。** [InvokeAI](https://github.com/invoke-ai/InvokeAI)比SwarmUI偏重多GPU/多用户的方向,更直接地满足这一用例。',
          '**错误地期待获得官方Stability AI产品或Stability AI支持渠道的读者。** 自2024年6月以来,SwarmUI与Stability AI之间不存在任何持续的隶属关系——支持来自独立维护者和社区,而非Stability AI。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '"StableSwarmUI"现在还是这个项目的正确名称吗?',
            a: '不是。该项目于2024年6月从"StableSwarmUI"更名为"SwarmUI",当时它从Stability AI的GitHub组织迁移到由维护者Alex "mcmonkey" Goodwin主导的独立仓库[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)。"StableSwarmUI"是曾用名;当前的文档、版本发布和GitHub仓库都统一使用"SwarmUI"。',
          },
          {
            q: 'SwarmUI现在还是由Stability AI开发或维护的吗?',
            a: '截至本评测撰写时(2026-09-06)并非如此。Stability AI最初以StableSwarmUI之名发布了该项目,但后来停止了维护;原开发者在2024年6月使其完全独立。Stability AI目前并未持续参与SwarmUI的开发。',
          },
          {
            q: 'SwarmUI是使用ComfyUI,还是一个独立的图像生成引擎?',
            a: 'SwarmUI使用ComfyUI作为其后端推理引擎,而不是自带一套独立的生成管线。SwarmUI的"Generate"标签页会将任务发送给一个或多个ComfyUI后端实例,当你需要完全手动控制时,内置的"Comfy Workflow"标签页会直接开放底层的ComfyUI节点图。',
          },
          {
            q: 'SwarmUI支持哪些模型?',
            a: 'SwarmUI支持与ComfyUI相同的模型系列,包括Stable Diffusion 1.5、Stable Diffusion XL、Stable Diffusion 3.5和FLUX。由于SwarmUI在底层运行ComfyUI,其模型覆盖范围随ComfyUI自身的更新而变化——请查阅SwarmUI和ComfyUI当前的GitHub仓库以获取最新的支持模型列表。',
          },
          {
            q: 'SwarmUI是免费的吗?',
            a: '是的。SwarmUI在MIT许可证下免费且开源,项目本身不出售任何付费套餐或订阅。不过,你仍需检查所加载的模型检查点(Stable Diffusion、FLUX等)自身的许可证,因为这些许可证独立于SwarmUI自身的MIT许可证。',
          },
          {
            q: '对于单GPU用户来说,SwarmUI与AUTOMATIC1111或Fooocus有何不同?',
            a: 'AUTOMATIC1111的Stable Diffusion WebUI和Fooocus都自带独立的推理管线,设计上都是围绕单个用户使用单个GPU,没有内置的多GPU任务分发或多用户账户功能。SwarmUI则是专门为在ComfyUI之上增加这两项功能——多GPU负载均衡和多用户登录——而构建的,如果你只有一个GPU和一个用户,这些功能就是不必要的开销。',
          },
          {
            q: '多人可以同时使用SwarmUI吗?',
            a: '可以。SwarmUI内置多用户支持,具备独立的登录账户、按用户划分的模型访问控制和共享任务队列,使多人可以从一个共享安装中生成图像,而不需要每个人都拥有自己独立的软件副本。',
          },
          {
            q: '在哪里可以下载SwarmUI?',
            a: '当前维护的仓库是GitHub上的[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)。较旧的Stability-AI/StableSwarmUI仓库反映的是2024年6月之前已停止维护的版本,并非当前积极开发的代码库。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '总评',
        content:
          'SwarmUI值得获得一个具体而有限定条件的推荐:对于拥有多个GPU、或多人想共用一个Stable Diffusion / FLUX安装的读者来说,它是最清晰的选择——这是AUTOMATIC1111、Fooocus和原生ComfyUI根本没有解决的协调问题。它基于ComfyUI后端的架构,意味着它继承了该项目的模型支持和节点图能力,却不强迫每一个日常任务都通过节点图来完成,代价是依赖底层ComfyUI自身的兼容性。这个项目的历史值得如实了解:它始于Stability AI的"StableSwarmUI",Stability AI停止了维护,原开发者在2024年6月以"SwarmUI"之名独立将其延续下去——如今与Stability AI之间不存在任何持续的隶属关系。只有单个GPU、不需要多用户功能的读者,通常更适合追求简洁的Fooocus,或者拥有更大单用户扩展生态系统的AUTOMATIC1111;而想要SwarmUI特有的多GPU或多用户能力的读者,应当从当前维护的[mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)仓库获取,而非已归档的Stability AI仓库。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[mcmonkeyprojects/SwarmUI — GitHub仓库](https://github.com/mcmonkeyprojects/SwarmUI) — 当前维护的项目、README、许可证与版本发布信息。',
          '[Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI — GitHub Discussion #2](https://github.com/mcmonkeyprojects/SwarmUI/discussions/2) — 维护者本人对2024年6月改名及迁移步骤的说明。',
          '[Stability-AI/StableSwarmUI — GitHub仓库(已归档/停止维护)](https://github.com/Stability-AI/StableSwarmUI) — Stability AI旗下的原始项目,已不再积极开发。',
          '[ComfyUI Backend Extension README — SwarmUI GitHub](https://github.com/mcmonkeyprojects/SwarmUI/blob/master/src/BuiltinExtensions/ComfyUIBackend/README.md) — 记录了基于ComfyUI的后端架构以及ComfyBackendDirect透传机制。',
          '[ComfyUI — GitHub仓库](https://github.com/comfy-org/ComfyUI) — SwarmUI作为后端运行的推理引擎。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Stable Diffusion评测(2026)](/zh/power-local-llm/stable-diffusion-review) — SwarmUI所运行的底层模型系列,包括各版本的许可证条款和VRAM需求。',
          '[本地AI图像生成对比云端](/zh/power-local-llm/local-ai-image-generation-vs-cloud) — 将本地图像模型和界面与Midjourney、Adobe Firefly等云端工具进行更全面的比较。',
          '[Local LLM Software Directory 2026](/zh/power-local-llm/local-llm-software-directory) — 涵盖所有平台的全面本地AI软件目录。',
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
    heroImage: '/images/stableswarmui-review-hero-ko.webp',
    title: 'SwarmUI 리뷰(2026): 멀티 GPU를 지원하는 Stable Diffusion 웹 UI',
    seoTitle: 'SwarmUI 리뷰 2026: ComfyUI 기반 멀티 GPU UI',
    intro:
      'SwarmUI(이전 명칭 StableSwarmUI)는 로컬 Stable Diffusion, FLUX 및 기타 이미지·영상 생성 모델을 위한 무료 오픈소스 모듈형 웹 UI로, 하나의 공유 설치 환경에서 여러 GPU와 여러 사용자를 운영할 수 있도록 설계되었습니다. 기본 추론 엔진으로 [ComfyUI](https://github.com/comfy-org/ComfyUI)를 사용합니다. 경쟁 관계의 이미지 생성 백엔드를 처음부터 새로 구축하는 대신, SwarmUI는 일상적인 사용을 위한 폼 기반 "Generate" 탭으로 ComfyUI를 감싸면서도, 완전한 수동 제어를 원하는 독자에게는 ComfyUI의 원시 노드 그래프도 그대로 노출합니다. 이 리뷰에서는 SwarmUI가 오늘날 실제로 무엇인지(개명 과정의 정직한 역사와 Stability AI와의 현재 완전히 독립된 관계를 포함), 멀티 GPU 및 멀티 유저 아키텍처, 모델 지원, 설치 방법, 라이선스, 그리고 AUTOMATIC1111이나 Fooocus 같은 단일 사용자용 도구와의 비교를 다룹니다.',
    metaDescription:
      'SwarmUI 리뷰 2026: ComfyUI 기반으로 구축된 멀티 GPU·멀티 유저 Stable Diffusion 웹 UI. StableSwarmUI에서의 개명, MIT 라이선스, 모델 지원 및 설정을 다룹니다.',
    twitterDescription:
      'SwarmUI 리뷰 2026: 이전 StableSwarmUI, 현재는 독립적인 MIT 라이선스의 ComfyUI 기반 웹 UI로 멀티 GPU Stable Diffusion 및 FLUX 생성을 지원합니다. 설정, 아키텍처, 정직한 트레이드오프를 다룹니다.',
    audience:
      '여러 GPU 또는 공유·멀티 유저 환경을 보유하고 있으며, ComfyUI 기반의 폼 형식 인터페이스인 SwarmUI가 AUTOMATIC1111, Fooocus, 또는 순수 ComfyUI보다 더 적합한지 판단하려는 독자.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'SwarmUI review',
    targetKeywords: [
      'swarmui 리뷰',
      'stableswarmui vs swarmui',
      'swarmui 멀티 gpu',
      'swarmui comfyui 백엔드',
      'swarmui vs automatic1111',
      'swarmui vs comfyui',
      'swarmui 설치',
      'swarmui stability ai',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL 1.0', 'Stable Diffusion 3.5', 'FLUX.1 dev', 'FLUX.1 schnell'],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**SwarmUI는 하나의 공유 설치 환경에서 여러 GPU와 여러 사용자를 운영하도록 특별히 설계된, 무료이며 MIT 라이선스를 따르는 ComfyUI 기반 Stable Diffusion·FLUX 웹 UI입니다.** 원래 Stability AI가 "StableSwarmUI"라는 이름으로 출시했으나, 2024년 6월 유지관리자 Alex "mcmonkey" Goodwin의 주도 아래 "SwarmUI"로 완전히 독립했으며 — 이후 Stability AI의 지속적인 관여는 없습니다. 내부적으로는 [ComfyUI](https://github.com/comfy-org/ComfyUI)를 추론 엔진으로 실행하므로 ComfyUI의 모델 지원(Stable Diffusion, SDXL, SD 3.5, FLUX)을 그대로 물려받으면서도, 그 위에 더 단순한 폼 기반 "Generate" 탭을 제공합니다. GPU가 하나뿐이고 멀티 유저 접근이 필요 없는 독자라면 보통 [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)이나 [Fooocus](https://github.com/lllyasviel/Fooocus)가 더 적합합니다.',
    quickAnswerTop: {
      ko: {
        question: 'SwarmUI란 무엇이며, 지금도 Stability AI가 만들고 있습니까?',
        answer:
          'SwarmUI는 하나의 설치 환경에서 여러 GPU와 여러 사용자를 운영할 수 있는 무료 오픈소스 Stable Diffusion·FLUX 웹 UI입니다. 현재는 Stability AI가 만드는 것이 아닙니다. Stability AI에서 "StableSwarmUI"라는 이름으로 시작했지만, Stability AI가 유지관리를 중단했고 원 개발자인 Alex "mcmonkey" Goodwin이 2024년 6월 새 이름 "SwarmUI"로 완전히 독립시켰습니다. 그 이후로 Stability AI의 지속적인 관여는 없습니다.',
        bullets: [
          '현재 이름: SwarmUI. 이전 이름: StableSwarmUI(2024년 6월까지만 Stability AI 산하에서 사용).',
          '현재 유지관리자: Alex "mcmonkey" Goodwin, 독립적으로 — Stability AI가 아님.',
          '현재 저장소: GitHub의 [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)(기존 Stability-AI/StableSwarmUI 저장소는 보관 처리되어 더 이상 관리되지 않음).',
          '라이선스: MIT(허용적 라이선스, 상업적·개인적 용도 모두 무료).',
          '아키텍처: SwarmUI는 백엔드 추론 엔진으로 ComfyUI를 실행하고, 그 위에 더 단순한 폼 기반 UI, 멀티 GPU 작업 분산, 멀티 유저 계정을 추가합니다.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'SwarmUI란 무엇인가', anchor: 'what-is-swarmui' },
      { label: '역사: StableSwarmUI에서 독립적인 SwarmUI로', anchor: 'history' },
      { label: 'ComfyUI 백엔드 아키텍처의 작동 방식', anchor: 'architecture' },
      { label: '멀티 GPU 및 멀티 유저 지원', anchor: 'multi-gpu-multi-user' },
      { label: '지원 모델', anchor: 'model-support' },
      { label: 'SwarmUI 설치 방법', anchor: 'installation' },
      { label: '가격과 라이선스', anchor: 'pricing-license' },
      { label: 'SwarmUI 대 대안', anchor: 'vs-alternatives' },
      { label: 'SwarmUI가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'SwarmUI가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        items: [
          'SwarmUI(이전 StableSwarmUI)는 하나의 설치 환경에서 여러 GPU와 여러 사용자를 운영하도록 설계된, 무료이며 오픈소스이고 MIT 라이선스를 따르는 Stable Diffusion·FLUX 웹 UI입니다.',
          'Stability AI에서 "StableSwarmUI"라는 이름으로 시작했으며, Stability AI가 유지관리를 중단한 후 원 개발자 Alex "mcmonkey" Goodwin이 2024년 6월 "SwarmUI"로 완전히 독립시켰습니다 — 이후 Stability AI의 지속적인 관여는 없습니다.',
          '현재 저장소: [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI); 기존 저장소는 Stability-AI/StableSwarmUI에 있었습니다.',
          'SwarmUI는 백엔드 추론 엔진으로 [ComfyUI](https://github.com/comfy-org/ComfyUI)를 실행합니다 — ComfyUI의 생성 코드를 대체하는 것이 아니라, 더 친숙한 "Generate" 탭으로 감싸면서도 원시 노드 그래프는 그대로 접근 가능하게 유지합니다.',
          'Stable Diffusion 1.5/XL, Stable Diffusion 3.5, FLUX를 포함해 ComfyUI가 지원하는 모든 모델을 지원합니다. 정확한 모델 지원 범위는 ComfyUI 자체의 업데이트를 따릅니다.',
          '여러 GPU 또는 공유·팀 접근 환경을 갖추고, 모든 워크플로를 노드 그래프로 직접 구성하지 않고도 ComfyUI의 모델 지원을 활용하려는 독자에게 가장 적합합니다. GPU 한 대만 사용하는 일반 사용자는 보통 AUTOMATIC1111이나 Fooocus가 더 적합합니다.',
        ],
      },
      whatIsSwarmUI: {
        id: 'what-is-swarmui',
        title: 'SwarmUI란 무엇인가',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI는 Stable Diffusion과 FLUX를 이용한 이미지 생성을 위한 무료 오픈소스 웹 UI로, ComfyUI를 백엔드로 실행하고 그 위에 멀티 GPU 작업 분산과 멀티 유저 계정을 추가합니다.' },
          { type: 'plain-terms', text: 'ComfyUI에 덧붙여진, 더 친숙한 제어판이라고 생각하면 됩니다 — 프롬프트를 입력하고 모델을 선택하는 간단한 폼을 얻지만, 실제로 이미지를 생성하는 작업은 여전히 ComfyUI가 담당하며, 이제는 여러 GPU나 여러 사람에게 작업을 나눠줄 수 있게 되었습니다.' },
        ],
        content: [
          '**SwarmUI는 로컬 이미지·영상 생성을 위한 모듈형 폼 기반 웹 UI로, ComfyUI가 기본으로 제공하는 원시 노드 그래프 인터페이스와는 다릅니다.** ComfyUI와 동일한 기반 모델 — Stable Diffusion, SDXL, SD 3.5, FLUX — 을 대상으로 하지만, 드롭다운과 슬라이더를 갖춘 더 단순한 "Generate" 탭을 통해 이를 제공합니다. 이는 일상적인 생성 작업에서 전체 노드 그래프가 느리게 느껴지는 독자를 위한 것입니다.',
          '"Swarm"(무리)이라는 이름은 원래의 핵심 기능을 가리킵니다. 즉, 단일 GPU가 혼자 대기열을 처리하는 대신, 여러 그래픽 카드가 동시에 같은 이미지 배치를 작업할 수 있도록 GPU "무리"를 조율하는 것입니다. 이러한 멀티 GPU 작업 분산에, 내장된 멀티 유저 로그인과 사용자별 모델 접근 권한이 더해져, AUTOMATIC1111의 Stable Diffusion WebUI나 Fooocus 같은 단일 사용자용 도구와 SwarmUI를 구분 짓습니다.',
          'SwarmUI는 서버 측이 C#/.NET으로 작성되었고 웹 프런트엔드를 갖추었으며, 자체 호스팅 애플리케이션으로 배포됩니다 — 공식 호스팅/클라우드 버전은 존재하지 않습니다. 게이밍 GPU 한 대든 소규모 멀티 GPU 워크스테이션이든, 모든 작업은 사용자가 직접 관리하는 하드웨어에서 실행됩니다.',
        ],
      },
      history: {
        id: 'history',
        title: '역사: StableSwarmUI에서 독립적인 SwarmUI로',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI는 Stability AI의 공식 프로젝트인 "StableSwarmUI"로 시작했으며, Stability AI가 유지관리를 중단한 후 2024년 6월 새 이름 "SwarmUI"로 완전히 독립된 커뮤니티 운영 프로젝트가 되었습니다.' },
          { type: 'plain-terms', text: 'Stability AI가 첫 버전을 만들고 자사의 이름을 붙였다가, 이후 유지관리에서 손을 뗐습니다. 원 개발자는 프로젝트를 사라지게 두는 대신, 새로운 이름으로 독자적으로 계속 개발했습니다.' },
        ],
        content: [
          '**이 프로젝트는 처음에 Stability AI의 GitHub 조직 산하에서 "StableSwarmUI"라는 이름으로 공개되었으며, 주로 Alex "mcmonkey" Goodwin이 개발했습니다.** 원래 저장소인 [Stability-AI/StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI)에 공개된 릴리스 노트와 토론 스레드는 Stability AI의 이름과 저작권을 달고 있던 초기 기능 발표 내용을 기록하고 있습니다.',
          '2024년 6월, Stability AI는 StableSwarmUI 유지관리를 중단했습니다. 프로젝트를 방치하는 대신 mcmonkey는 이를 독립시켜 "Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI"(Stability의 StableSwarmUI에서 독립 SwarmUI로의 마이그레이션 가이드)를 공개하고, 새 저장소 [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)에서 프로젝트 이름을 "SwarmUI"로 변경했습니다. 기존 설치 환경은 업데이트 후 제공된 마이그레이션 스크립트를 실행하여 이전할 수 있었습니다(Windows에서는 `migrate-windows.bat`, 또는 Linux/Mac에서 Git 원격 저장소를 `mcmonkeyprojects/SwarmUI`로 수동 변경).',
          '**이 리뷰 작성 시점(2026-09-06) 기준으로, SwarmUI는 Stability AI와 지속적인 제휴 관계가 없습니다** — mcmonkey와 커뮤니티 기여자들이 독립적으로 유지관리하고 있으며, 라이선스는 MIT이고, 현재 라이선스 파일이 다루는 2024~2026년 기간에 대한 저작권은 "Alex \'mcmonkey\' Goodwin"에게 귀속됩니다. 원래의 Stability-AI/StableSwarmUI 저장소는 더 이상 활발히 개발되는 코드베이스가 아니며, 현재 유지관리되는 프로젝트는 mcmonkeyprojects/SwarmUI에 있습니다.',
          '**개명 이후에도 이 글이 "stableswarmui-review"라는 슬러그를 유지하는 이유:** 더 잘 알려진 원래 이름으로 이 도구를 검색하는 독자들도 여전히 이 페이지로 오게 됩니다 — 본문과 제목은 처음부터 끝까지 현재의 올바른 이름인 "SwarmUI"를 사용하며, 이 섹션에서 개명 사실을 명확히 밝혀 오늘날 누가 이 프로젝트를 유지관리하는지에 대해 누구도 오해하지 않도록 합니다.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'ComfyUI 백엔드 아키텍처의 작동 방식',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI는 자체 이미지 생성 엔진을 갖고 있지 않습니다 — ComfyUI를 백엔드 프로세스로 실행하여 생성 작업을 전달하고, 그 결과를 자체적으로 단순화된 인터페이스에 표시합니다.' },
          { type: 'plain-terms', text: '프롬프트를 이미지로 바꾸는 실제 연산은 ComfyUI가 수행합니다. SwarmUI는 어느 백엔드가 어떤 작업을 맡을지 결정하고, ComfyUI의 노드 그래프 대신 더 단순한 화면을 보여주는 상위 계층입니다.' },
        ],
        columns: ['계층', '역할', '직접 접근 가능 여부'],
        rows: [
          { '계층': 'SwarmUI 웹 UI', '역할': '폼 기반 "Generate" 탭, 작업 대기열, 멀티 유저 계정, 멀티 GPU 라우팅', '직접 접근 가능 여부': '가능 — 기본 인터페이스입니다' },
          { '계층': 'ComfyUI 백엔드', '역할': '실제 확산 모델 추론 실행(Stable Diffusion, SDXL, FLUX 등)', '직접 접근 가능 여부': '가능, 내장된 "Comfy Workflow" 탭과 노드 그래프를 통해' },
          { '계층': 'GPU 하드웨어', '역할': '각 ComfyUI 백엔드 인스턴스의 모델 연산 실행', '직접 접근 가능 여부': '해당 없음 — SwarmUI의 백엔드 스케줄러가 관리' },
        ],
        content: [
          'SwarmUI는 최초 실행 시 ComfyUI 백엔드를 자동으로 설치하고 스스로 시작할 수 있으며, 이미 직접 실행 중인 하나 이상의 ComfyUI 인스턴스(네트워크상의 원격 인스턴스 포함)에 연결할 수도 있습니다. 구성된 각 백엔드는 워커로 취급됩니다. 생성 요청을 제출하면 SwarmUI의 스케줄러가 이를 사용 가능한 백엔드 인스턴스에 할당합니다.',
          '기본 추론 엔진이 수정되지 않은 ComfyUI이기 때문에, SwarmUI는 ComfyUI의 모델 호환성, 커스텀 노드 생태계, 워크플로 형식을 거의 그대로 물려받습니다. 내장된 "ComfyUI Backend Extension"은 직접 전달 경로(`ComfyBackendDirect`)도 제공하여, 기존의 ComfyUI 자동화 스크립트와 API 통합이 SwarmUI가 관리하는 백엔드와 계속 연동될 수 있도록 합니다.',
          '이것이 자체 독립된 추론 파이프라인을 갖춘 AUTOMATIC1111의 Stable Diffusion WebUI와의 핵심적인 아키텍처 차이입니다. AUTOMATIC1111은 ComfyUI를 감싸지 않습니다. SwarmUI의 트레이드오프는 내부의 ComfyUI가 계속 호환성을 유지하고 올바르게 설치되어 있는지에 의존한다는 점입니다 — ComfyUI 자체에 문제가 생기면 SwarmUI도 그 영향을 그대로 받습니다. SwarmUI는 자체적으로 독립된 추론을 수행하지 않기 때문입니다.',
        ],
      },
      multiGpuMultiUser: {
        id: 'multi-gpu-multi-user',
        title: '멀티 GPU 및 멀티 유저 지원',
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI는 같은 컴퓨터의 여러 GPU 또는 소규모 네트워크상의 여러 컴퓨터에 걸쳐 생성 작업을 분산할 수 있으며, 하나의 설치 환경에서 사용자별 모델·권한 설정을 갖춘 여러 로그인 사용자 계정을 지원합니다.' },
          { type: 'plain-terms', text: '단일 GPU가 이미지 요청 대기열을 하나씩 처리하는 대신, SwarmUI는 서로 다른 요청을 서로 다른 GPU에 동시에 넘길 수 있으며, 사용자를 구분할 수 있어 공유 서버가 누가 무엇을 요청했는지 뒤섞이지 않습니다.' },
        ],
        content: [
          '**멀티 GPU 지원은 이 프로젝트의 이름이 유래한 기능입니다.** SwarmUI는 한 컴퓨터에서 사용 가능한 GPU마다(또는 네트워크상의 여러 컴퓨터에 걸쳐) ComfyUI 백엔드를 하나씩 실행하고, 들어오는 생성 작업을 모든 백엔드에 걸쳐 부하 분산할 수 있습니다 — 대규모 배치·그리드 생성에 유용하며, 각자가 전용 카드를 갖출 필요 없이 가정이나 소규모 팀이 멀티 GPU 워크스테이션을 공유하는 데도 유용합니다.',
          '**멀티 유저 지원**은 로그인 계정, 사용자별 모델 접근 제어, 공유 작업 대기열을 추가하여, 하나의 SwarmUI 설치 환경으로 여러 사람을 지원할 수 있게 합니다. 각자가 소프트웨어의 별도 사본을 실행하거나 단일 GPU의 대기열을 두고 경쟁할 필요가 없습니다. AUTOMATIC1111의 Stable Diffusion WebUI도, 기본 ComfyUI도 이런 종류의 내장 멀티 유저 계정 시스템을 제공하지 않습니다 — 둘 다 단일 로컬 사용자를 중심으로 설계되어 있습니다.',
          '이러한 조합이야말로 SwarmUI를 단일 GPU·단일 사용자 앱과 실질적으로 다른 도구로 만드는 요인이며, 단순히 "더 예쁜 ComfyUI"가 아닙니다. 작업 분산과 계정 계층은 하나 이상의 GPU 또는 같은 하드웨어에서 이미지를 생성하려는 하나 이상의 사람이 있을 때에만 나타나는 실질적인 조율 문제를 해결합니다.',
        ],
      },
      modelSupport: {
        id: 'model-support',
        title: '지원 모델',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'SwarmUI는 Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5, FLUX를 포함해 ComfyUI가 이미지 생성을 위해 지원하는 모든 모델 계열을 지원하며, ComfyUI가 지원을 추가함에 따라 일부 영상·오디오 모델도 지원합니다.' },
          { type: 'plain-terms', text: 'SwarmUI는 내부적으로 ComfyUI를 실행하기 때문에, 일반적으로 ComfyUI가 로드할 수 있는 모델 체크포인트라면 SwarmUI도 로드할 수 있으며, 새로운 모델 계열마다 별도의 코드가 필요하지 않습니다.' },
        ],
        columns: ['모델 계열', '유형', '참고 사항'],
        rows: [
          { '모델 계열': 'Stable Diffusion 1.5', '유형': '이미지', '참고 사항': '널리 지원되는 기존 체크포인트 형식; ComfyUI를 통한 대규모 커뮤니티 LoRA·체크포인트 생태계' },
          { '모델 계열': 'Stable Diffusion XL 1.0', '유형': '이미지', '참고 사항': '1024×1024 네이티브 모델; 기본 ComfyUI와 동일한 방식으로 지원' },
          { '모델 계열': 'Stable Diffusion 3.5', '유형': '이미지', '참고 사항': '더 새로운 멀티모달 확산 트랜스포머 아키텍처; SwarmUI와는 무관하게, Stability AI가 SD 3.5 자체에 대해 게시하는 현재의 Community License 조건이 적용됨' },
          { '모델 계열': 'FLUX(Black Forest Labs)', '유형': '이미지', '참고 사항': 'ComfyUI의 FLUX 노드를 통해 지원; 라이선스는 SwarmUI가 아니라 구체적인 FLUX 버전(schnell 대 dev)에 따라 달라짐' },
          { '모델 계열': '영상·오디오 모델', '유형': '영상, 오디오', '참고 사항': 'ComfyUI 자체가 지원을 추가·업데이트함에 따라 지원됨 — 특정 모델에 의존하기 전에 ComfyUI와 SwarmUI의 최신 릴리스 노트에서 정확한 모델 지원 범위를 확인하세요' },
        ],
        note: '모델 지원은 시간이 지나면서 변하는 ComfyUI 자체의 호환성 목록을 따릅니다 — 워크플로를 특정 체크포인트에 고정하기 전에 [SwarmUI GitHub 저장소](https://github.com/mcmonkeyprojects/SwarmUI)나 [ComfyUI GitHub 저장소](https://github.com/comfy-org/ComfyUI)에서 현재 지원 여부를 확인하세요. 각 모델 고유의 라이선스(RAIL-M, Stability AI Community License, Apache 2.0 등)는 어떤 UI에서 로드하든 동일하게 적용됩니다 — 버전별 라이선스 차이에 대한 자세한 내용은 [Stable Diffusion 리뷰](/ko/power-local-llm/stable-diffusion-review)를 참고하세요.',
      },
      installation: {
        id: 'installation',
        title: 'SwarmUI 설치 방법',
        content: [
          'SwarmUI는 Windows, Linux, macOS에서 전반적으로 비슷한 형태로 설치할 수 있습니다 — 정확한 명령어는 약간씩 다르므로, 이는 특정 플랫폼에 국한된 지침이 아니라 일반적인 순서입니다.',
        ],
        numberedItems: [
          { title: '지원되는 GPU와 충분한 VRAM이 있는지 확인하세요', whyItMatters: 'SwarmUI의 VRAM 요구 사항은 ComfyUI를 통해 실행하려는 모델에 따라 달라집니다 — 예를 들어, SDXL에는 약 8 GB VRAM이 적당한 최소치이며, SD 3.5나 FLUX는 그보다 더 필요합니다. 설치 전에 해당 모델 자체의 요구 사항을 확인하세요.' },
          { title: '사용 중인 운영체제용 SwarmUI 설치 프로그램을 다운로드하세요', whyItMatters: '[mcmonkeyprojects/SwarmUI GitHub 저장소](https://github.com/mcmonkeyprojects/SwarmUI)에서 현재 버전을 받으세요 — 이곳이 유지관리되는 독립 저장소이며, 보관 처리된 Stability-AI/StableSwarmUI가 아닙니다.' },
          { title: 'SwarmUI가 ComfyUI를 백엔드로 자동 설치하도록 하세요', whyItMatters: '"Self-Start" 백엔드 옵션을 사용하면 SwarmUI가 ComfyUI 백엔드를 자동으로 구성, 다운로드, 실행할 수 있으며, 기존 ComfyUI 인스턴스를 수동으로 연결하는 것보다 첫 설치에 권장되는 방법입니다.' },
          { title: '모델 체크포인트를 다운로드하세요', whyItMatters: 'Hugging Face 같은 출처에서 Stable Diffusion, SDXL, SD 3.5, 또는 FLUX 체크포인트를 받아 SwarmUI 설정 문서에서 지정한 모델 폴더에 넣고, 의도한 용도에 대해 해당 모델의 라이선스 조건을 확인하세요.' },
          { title: '카드가 두 개 이상이면 추가 GPU 백엔드를 구성하세요', whyItMatters: 'SwarmUI의 백엔드 설정에서 각 추가 GPU를 별도의 백엔드 인스턴스로 추가하여, 처음 감지된 GPU 하나뿐 아니라 모든 GPU에 작업이 분산될 수 있도록 하세요.' },
          { title: '여러 사람이 설치 환경을 공유할 경우 사용자 계정을 설정하세요', whyItMatters: 'SwarmUI의 멀티 유저 설정으로 별도의 로그인을 만들어, 공유 서버가 각 사람의 작업, 모델, 권한을 분리해서 유지하도록 하세요.' },
        ],
        note: '정확한 설치 단계, 의존성 버전, 폴더 경로는 릴리스마다 달라집니다 — 위의 일반적인 흐름을 넘어서는 내용은 이 글을 포함한 일반적인 가이드가 아니라 [SwarmUI GitHub README](https://github.com/mcmonkeyprojects/SwarmUI)의 현재 지침을 따르세요.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: '가격과 라이선스',
        content: [
          '**SwarmUI는 MIT 라이선스 아래 무료이며 오픈소스입니다 — 프로젝트 자체가 판매하는 유료 등급, 구독, 호스팅 버전은 존재하지 않습니다.** 다른 자체 호스팅 도구와 마찬가지로, 지불하는 것은 자신의 하드웨어와 전기 요금뿐입니다.',
          'MIT 라이선스는 허용적입니다. 상업적 사용, 수정, 저작자 표시를 조건으로 한 재배포를 허용하며, 이를 통해 실행할 수도 있는 일부 모델에 적용되는 것과 같은 수익 상한이나 등록 요건을 부과하지 않습니다(예를 들어, Stability AI의 SD 3.5용 Community License는 일정 수익을 초과하면 등록을 요구합니다). SwarmUI 자체의 라이선스는 그런 조건을 부과하지 않지만, 로드하는 모델 체크포인트 자체의 라이선스는 여전히 독립적으로 적용됩니다. SwarmUI는 모델 자체의 라이선스 조건을 변경하지 않기 때문입니다.',
          '공식 호스팅 SwarmUI 서비스가 존재하지 않기 때문에, 이 도구의 "가격"은 전적으로 이미 보유했거나 구매하기로 한 하드웨어에 관한 것입니다 — [Stable Diffusion 리뷰](/ko/power-local-llm/stable-diffusion-review#pricing)에서 다룬 Stability AI 자체의 호스팅 API 및 멤버십 플랜과 달리, 비교할 멤버십 등급이 없습니다.',
        ],
        note: '라이선스 조건은 릴리스마다 달라질 수 있습니다 — 상업적 배포를 결정하기 전에 [SwarmUI GitHub 저장소](https://github.com/mcmonkeyprojects/SwarmUI)의 `LICENSE` 파일에서 현재 라이선스 문구를 확인하세요. 이는 법률 자문이 아닙니다.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'SwarmUI 대 대안',
        columns: ['옵션', '최적 대상', '멀티 GPU/멀티 유저', '아키텍처', '주요 트레이드오프'],
        rows: [
          {
            '옵션': 'SwarmUI',
            '최적 대상': '하나의 설치 환경을 공유하는 여러 GPU 또는 여러 사용자, ComfyUI 백엔드에 대한 폼 기반 제어',
            '멀티 GPU/멀티 유저': '지원 — 내장',
            '아키텍처': 'ComfyUI를 추론 엔진으로 감쌈',
            '주요 트레이드오프': '내부 ComfyUI의 호환성에 의존; 단일 사용자 앱보다 움직이는 부품이 많음',
          },
          {
            '옵션': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '최적 대상': '노드 그래프를 통한 모든 생성 단계의 완전한 수동 제어',
            '멀티 GPU/멀티 유저': '미지원 — 기본적으로 단일 사용자',
            '아키텍처': '독립적인 노드 그래프 추론 엔진',
            '주요 트레이드오프': '그룹 중 가장 가파른 학습 곡선; 내장된 멀티 GPU 작업 분산이나 계정 기능 없음',
          },
          {
            '옵션': '[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)',
            '최적 대상': '폼 기반 UI에서 가장 큰 확장 기능 생태계를 원하는 단일 GPU 사용자',
            '멀티 GPU/멀티 유저': '미지원 — 설계상 단일 사용자, 단일 GPU',
            '아키텍처': 'ComfyUI에 기반하지 않은 자체 독립 추론 파이프라인',
            '주요 트레이드오프': '내장된 멀티 GPU/멀티 유저 지원 없음; ComfyUI 생태계와 별개의 코드베이스',
          },
          {
            '옵션': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            '최적 대상': '통합 캔버스를 갖춘, 정교하고 전문가다운 느낌의 단일 사용자 창작 워크플로',
            '멀티 GPU/멀티 유저': '미지원 — 단일 사용자에 초점',
            '아키텍처': '자체 추론 파이프라인',
            '주요 트레이드오프': 'ComfyUI보다 작은 노드·확장 기능 생태계; 멀티 GPU 분산을 중심으로 설계되지 않음',
          },
          {
            '옵션': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '최적 대상': '설정 항목이 가장 적으면서 가장 빠르게 첫 번째 만족스러운 이미지를 얻는 방법',
            '멀티 GPU/멀티 유저': '미지원 — 단일 사용자, 최소 구성 설계',
            '아키텍처': 'Stable Diffusion 위에 구축된 자체 단순화된 추론 파이프라인',
            '주요 트레이드오프': '단순함을 위해 의도적으로 제한된 구성 가능성; 멀티 GPU 구성을 대상으로 하지 않음',
          },
        ],
        note: '이는 벤치마크 순위가 아니라 포지셔닝 요약입니다 — 이 모든 UI가 실행하는 기반 모델의 라이선스와 VRAM에 대한 자세한 내용은 [Stable Diffusion 리뷰](/ko/power-local-llm/stable-diffusion-review)를, 로컬과 클라우드의 더 폭넓은 비교는 [로컬 AI 이미지 생성 대 클라우드](/ko/power-local-llm/local-ai-image-generation-vs-cloud)를 참조하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'SwarmUI가 적합한 사용자',
        items: [
          '**GPU가 두 개 이상인 독자.** SwarmUI의 작업 분산 스케줄러는 이 비교에서 유일하게 여러 카드를 같은 작업 배치에 계속 바쁘게 유지하도록 특별히 설계된 도구입니다.',
          '**하나의 컴퓨터를 공유하는 가정, 팀, 또는 연구실.** 내장된 멀티 유저 계정을 통해 여러 사람이 같은 설치 환경에서 서로의 작업이나 모델을 침범하지 않고 이미지를 생성할 수 있습니다.',
          '**모든 워크플로를 노드 그래프로 구성하지 않고도 ComfyUI의 모델 지원을 활용하고 싶은 독자.** 폼 기반 "Generate" 탭이 일반적인 경우를 다루며, 필요할 때는 노드 그래프도 여전히 사용할 수 있습니다.',
          '**이미 ComfyUI에 익숙하며 그 위에 더 친숙한 일상 사용 계층을 원하는 독자.** SwarmUI는 ComfyUI를 포기하라고 요구하지 않습니다 — "Comfy Workflow" 탭을 통해 직접 노출합니다.',
          '**허용적 라이선스(MIT)를 따르며, 방치된 포크가 아니라 명확하고 문서화된 이력을 가지고 활발하고 독립적으로 유지관리되는 프로젝트를 원하는 독자.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'SwarmUI가 적합하지 않은 사용자',
        items: [
          '**가능한 한 단순하게 첫 이미지 하나만 원하는 단일 GPU 일반 사용자.** [Fooocus](https://github.com/lllyasviel/Fooocus)는 설정 항목이 더 적고 첫 결과까지의 경로가 더 짧습니다. SwarmUI의 멀티 GPU/멀티 유저 계층은 단일 일반 사용자에게는 사용되지 않는 오버헤드입니다.',
          '**폼 기반 UI에서 가장 큰 확장 기능·커스텀 스크립트 생태계를 원하는 독자.** [AUTOMATIC1111의 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)는 그 특정 용도에서 더 오랜 실적과 더 큰 확장 기능 카탈로그를 가지고 있습니다.',
          '**어떤 감싸는 계층도 없이 노드 그래프에 대한 완전한 수동 제어를 원하는 독자.** 단순화된 "Generate" 탭이 전혀 필요 없다면 SwarmUI를 통하지 않고 [ComfyUI](https://github.com/comfy-org/ComfyUI)를 직접 사용하세요.',
          '**통합 캔버스와 더 정교한 내장 편집기를 갖춘 단일 사용자용 창작 도구를 원하는 독자.** [InvokeAI](https://github.com/invoke-ai/InvokeAI)는 SwarmUI의 멀티 GPU/멀티 유저 중심 접근보다 그 용도에 더 직접적으로 맞습니다.',
          '**공식 Stability AI 제품이나 Stability AI 지원 채널을 잘못 기대하는 독자.** SwarmUI는 2024년 6월 이후 Stability AI와 지속적인 제휴 관계가 없습니다 — 지원은 Stability AI가 아니라 독립적인 유지관리자와 커뮤니티에서 제공됩니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '"StableSwarmUI"가 여전히 이 프로젝트의 올바른 이름입니까?',
            a: '아닙니다. 이 프로젝트는 2024년 6월 "StableSwarmUI"에서 "SwarmUI"로 이름이 바뀌었으며, 이때 Stability AI의 GitHub 조직에서 유지관리자 Alex "mcmonkey" Goodwin이 이끄는 독립 저장소 [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)로 옮겨갔습니다. "StableSwarmUI"는 이전 이름이며, 현재의 문서, 릴리스, GitHub 저장소는 모두 "SwarmUI"를 사용합니다.',
          },
          {
            q: 'SwarmUI는 지금도 Stability AI가 만들거나 유지관리하고 있습니까?',
            a: '이 리뷰 작성 시점(2026-09-06) 기준으로는 아닙니다. Stability AI는 원래 이 프로젝트를 StableSwarmUI라는 이름으로 출시했지만 유지관리를 중단했으며, 원 개발자가 2024년 6월 이를 완전히 독립시켰습니다. 현재 SwarmUI 개발에 Stability AI의 지속적인 관여는 없습니다.',
          },
          {
            q: 'SwarmUI는 ComfyUI를 사용합니까, 아니면 별도의 이미지 생성 엔진입니까?',
            a: 'SwarmUI는 자체적인 별도의 생성 파이프라인을 갖추는 대신 ComfyUI를 백엔드 추론 엔진으로 사용합니다. SwarmUI의 "Generate" 탭은 하나 이상의 ComfyUI 백엔드 인스턴스에 작업을 전송하며, 완전한 수동 제어를 원할 때는 내장된 "Comfy Workflow" 탭이 기반이 되는 ComfyUI 노드 그래프를 직접 노출합니다.',
          },
          {
            q: 'SwarmUI는 어떤 모델을 지원합니까?',
            a: 'SwarmUI는 Stable Diffusion 1.5, Stable Diffusion XL, Stable Diffusion 3.5, FLUX를 포함해 ComfyUI와 동일한 모델 계열을 지원합니다. SwarmUI가 내부적으로 ComfyUI를 실행하기 때문에, 모델 지원 범위는 ComfyUI 자체의 업데이트를 따릅니다 — 최신 지원 모델 목록은 SwarmUI와 ComfyUI의 현재 GitHub 저장소를 확인하세요.',
          },
          {
            q: 'SwarmUI는 무료입니까?',
            a: '예. SwarmUI는 MIT 라이선스 아래 무료이며 오픈소스이고, 프로젝트가 판매하는 유료 등급이나 구독은 없습니다. 다만 로드하는 모델 체크포인트(Stable Diffusion, FLUX 등) 자체의 라이선스는 여전히 확인해야 합니다. 이러한 라이선스는 SwarmUI 자체의 MIT 라이선스와는 별개이기 때문입니다.',
          },
          {
            q: '단일 GPU 사용자에게 SwarmUI는 AUTOMATIC1111이나 Fooocus와 어떻게 다릅니까?',
            a: 'AUTOMATIC1111의 Stable Diffusion WebUI와 Fooocus는 둘 다 자체적인 독립 추론 파이프라인을 갖추고 있으며, 내장된 멀티 GPU 작업 분산이나 멀티 유저 계정 없이 GPU 하나를 사용하는 사용자 한 명을 중심으로 설계되었습니다. SwarmUI는 ComfyUI 위에 이 두 가지 — 멀티 GPU 부하 분산과 멀티 유저 로그인 — 를 추가하기 위해 특별히 만들어졌으며, GPU와 사용자가 각각 하나뿐이라면 이는 불필요한 오버헤드입니다.',
          },
          {
            q: '여러 사람이 동시에 SwarmUI를 사용할 수 있습니까?',
            a: '예. SwarmUI는 별도의 로그인 계정, 사용자별 모델 접근 제어, 공유 작업 대기열을 갖춘 내장 멀티 유저 지원 기능이 있어, 각자 소프트웨어의 자체 사본이 필요 없이 여러 사람이 하나의 공유 설치 환경에서 이미지를 생성할 수 있습니다.',
          },
          {
            q: 'SwarmUI는 어디에서 다운로드합니까?',
            a: '현재 유지관리되는 저장소는 GitHub의 [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)입니다. 더 오래된 Stability-AI/StableSwarmUI 저장소는 2024년 6월 이전에 중단된 버전을 반영하며, 현재 활발히 개발되는 코드베이스가 아닙니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'SwarmUI는 구체적이고 제한된 범위의 추천을 받을 만합니다. GPU가 두 개 이상이거나, 여러 사람이 하나의 Stable Diffusion / FLUX 설치 환경을 공유하려는 독자에게는 가장 명확한 선택지이며 — 이는 AUTOMATIC1111, Fooocus, 기본 ComfyUI가 전혀 다루지 않는 조율 문제입니다. ComfyUI 백엔드 기반 아키텍처 덕분에 SwarmUI는 모든 일상적인 작업을 노드 그래프로 강제하지 않으면서도 해당 프로젝트의 모델 지원과 노드 그래프의 강력함을 물려받지만, 그 대가로 내부 ComfyUI 자체의 호환성에 의존하게 됩니다. 이 프로젝트의 역사는 정직하게 알아둘 가치가 있습니다. Stability AI의 "StableSwarmUI"로 시작했고, Stability AI가 유지관리를 중단했으며, 원 개발자가 2024년 6월 "SwarmUI"라는 이름으로 독립적으로 이를 이어갔습니다 — 오늘날 Stability AI와의 지속적인 제휴 관계는 없습니다. GPU가 하나뿐이고 멀티 유저가 필요 없는 독자는 보통 단순함을 원한다면 Fooocus, 더 큰 단일 사용자 확장 기능 생태계를 원한다면 AUTOMATIC1111이 더 적합합니다. SwarmUI 특유의 멀티 GPU 또는 멀티 유저 기능을 원하는 독자는 보관 처리된 Stability AI 저장소가 아니라 현재 유지관리되는 [mcmonkeyprojects/SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) 저장소에서 받아야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[mcmonkeyprojects/SwarmUI — GitHub 저장소](https://github.com/mcmonkeyprojects/SwarmUI) — 현재 유지관리되는 프로젝트, README, 라이선스, 릴리스 정보.',
          '[Migration Guide From Stability\'s StableSwarmUI to independent SwarmUI — GitHub Discussion #2](https://github.com/mcmonkeyprojects/SwarmUI/discussions/2) — 2024년 6월 개명과 마이그레이션 단계에 대한 유지관리자 본인의 설명.',
          '[Stability-AI/StableSwarmUI — GitHub 저장소(보관됨/중단됨)](https://github.com/Stability-AI/StableSwarmUI) — Stability AI 산하의 원래 프로젝트, 더 이상 활발히 개발되지 않음.',
          '[ComfyUI Backend Extension README — SwarmUI GitHub](https://github.com/mcmonkeyprojects/SwarmUI/blob/master/src/BuiltinExtensions/ComfyUIBackend/README.md) — ComfyUI 백엔드 아키텍처와 ComfyBackendDirect 직접 전달 경로를 문서화.',
          '[ComfyUI — GitHub 저장소](https://github.com/comfy-org/ComfyUI) — SwarmUI가 백엔드로 실행하는 추론 엔진.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Stable Diffusion 리뷰(2026)](/ko/power-local-llm/stable-diffusion-review) — SwarmUI가 실행하는 기반 모델 계열, 버전별 라이선스 조건과 VRAM 요구 사항 포함.',
          '[로컬 AI 이미지 생성 대 클라우드](/ko/power-local-llm/local-ai-image-generation-vs-cloud) — Midjourney, Adobe Firefly 같은 클라우드 도구와 로컬 이미지 모델·UI를 더 폭넓게 비교.',
          '[Local LLM Software Directory 2026](/ko/power-local-llm/local-llm-software-directory) — 모든 플랫폼을 아우르는 종합 로컬 AI 소프트웨어 디렉터리.',
        ],
      },
    },
  },
}
