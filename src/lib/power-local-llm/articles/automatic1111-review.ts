// AUTOMATIC1111 Stable Diffusion WebUI Review (2026): tab-based local UI for Stable Diffusion
// Slug: automatic1111-review
// Category: Image & Video Generation
// Companion piece to: stable-diffusion-review, real-esrgan-ai-image-upscaler-review, local-ai-image-generation-vs-cloud
// Note: AUTOMATIC1111 is a FRONT-END UI that runs Stable Diffusion model weights — distinct from
// Stable Diffusion itself (the model, covered in stable-diffusion-review.ts) and from ComfyUI's
// node-graph approach, InvokeAI, and Fooocus. This article focuses on the UI/app layer.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { starsFor } from '@/lib/power-local-llm/app-facts'

const ST = {
  en: starsFor('en'), de: starsFor('de'), fr: starsFor('fr'), ja: starsFor('ja'), zh: starsFor('zh'),
  es: starsFor('es'), pt: starsFor('pt'), ar: starsFor('ar'), ko: starsFor('ko'),
}

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/automatic1111-review-hero-en.webp',
    title: 'AUTOMATIC1111 Review: Stable Diffusion WebUI Explained',
    seoTitle: 'AUTOMATIC1111 Review: Stable Diffusion WebUI Guide',
    intro:
      'AUTOMATIC1111 — formally "Stable Diffusion web UI" — is a free, open-source, tab-based web interface for running Stable Diffusion models on your own GPU. Released on GitHub on August 22, 2022, one month after Stable Diffusion\'s public launch, it became the first widely adopted graphical front-end for local image generation and is still described by third-party reviewers as one of the most-used and most-documented options in the category, thanks to a huge extension ecosystem (ControlNet, LoRA training, and thousands of community scripts). This review covers what AUTOMATIC1111 actually is, how it differs from Stable Diffusion the model and from newer UIs like ComfyUI, Forge, and InvokeAI, its real maintenance status heading into 2026, license terms, hardware needs, and honest guidance on who should — and should not — use it today.',
    metaDescription:
      'AUTOMATIC1111 review: what Stable Diffusion WebUI is, its verified maintenance status, AGPL-3.0 license, ControlNet, hardware needs and alternatives.',
    twitterDescription:
      'AUTOMATIC1111 review 2026: the original Stable Diffusion WebUI explained — verified maintenance status, license, extension ecosystem, hardware needs, and how it stacks up against Forge, ComfyUI, and InvokeAI.',
    audience:
      'Readers deciding whether to install AUTOMATIC1111\'s Stable Diffusion WebUI for local image generation — covers verified maintenance status, license terms, hardware requirements, the extension ecosystem, and how it compares with actively maintained forks and alternative UIs.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AUTOMATIC1111 review',
    targetKeywords: [
      'automatic1111 review',
      'stable diffusion webui',
      'automatic1111 install',
      'automatic1111 vs comfyui',
      'automatic1111 vs forge',
      'automatic1111 controlnet',
      'stable diffusion webui maintenance',
      'automatic1111 license',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL', 'ControlNet', 'Stable Diffusion WebUI Forge', 'ComfyUI', 'InvokeAI', 'Fooocus'],
    current_hardware_mentioned: ['2 GB VRAM', '4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '12 GB VRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Warning: AUTOMATIC1111 has had no update since 2 March 2026 (last release v1.10.1, 9 February 2025), so it may be unmaintained — check before relying on it.** **AUTOMATIC1111 (Stable Diffusion web UI) is a free, open-source (AGPL-3.0) browser interface for running Stable Diffusion models locally, not the model itself.**',
    quickAnswerTop: {
      en: {
        question: 'Is AUTOMATIC1111 still maintained, and is it the same thing as Stable Diffusion?',
        answer:
          'No update has been published since 2 March 2026. AUTOMATIC1111 is not Stable Diffusion: it is a separate, free open-source web interface that loads Stable Diffusion model weights and lets you generate images through a browser tab. Its last tagged release, v1.10.1, was published on 9 February 2025, and the `dev` branch has had no commits since 2 March 2026. Forge, its most-used fork, calls the original "almost static now", yet Forge has had no push since 31 July 2025. It still works for many setups; readers who need newer model architectures should compare ComfyUI, InvokeAI or SD.Next.',
        bullets: [
          'AUTOMATIC1111 is a UI/front-end, not a model — you still need to download Stable Diffusion weights separately and load them into it.',
          'Verified on GitHub: the last tagged release (v1.10.1) was published on 9 February 2025, and the last commit on the `dev` branch is from 2 March 2026 — check the repository for the current state.',
          'Free and open source under the AGPL-3.0 license; no official paid tier or hosted plan exists.',
          'The extension ecosystem — especially the ControlNet extension for pose and composition guidance — is the main reason it remains widely used despite slower core development.',
          'Actively maintained alternatives: ComfyUI, InvokeAI and SD.Next all had pushes on 2026-11-02, while Forge, the fork built on AUTOMATIC1111, has had no push since 31 July 2025.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What AUTOMATIC1111 Is', anchor: 'what-is-automatic1111' },
      { label: 'History: Why AUTOMATIC1111 Exists', anchor: 'history' },
      { label: 'How to Install and Generate Your First Image', anchor: 'how-to-install' },
      { label: 'Maintenance Status: Verified', anchor: 'maintenance-status' },
      { label: 'Extensions and the ControlNet Ecosystem', anchor: 'extensions-controlnet' },
      { label: 'Hardware Requirements', anchor: 'hardware-requirements' },
      { label: 'License and Pricing', anchor: 'license-pricing' },
      { label: 'AUTOMATIC1111 vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use AUTOMATIC1111', anchor: 'who-should-use' },
      { label: 'Who Should Not Use AUTOMATIC1111', anchor: 'who-should-not-use' },
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
          'AUTOMATIC1111 (Stable Diffusion web UI) is a free, open-source, tab-based web interface for running Stable Diffusion locally — it is the front-end app, not the model itself.',
          'Released on GitHub on August 22, 2022, by a pseudonymous developer using the handle "AUTOMATIC1111," one month after Stable Diffusion\'s public release, filling the gap for a graphical local interface.',
          'Licensed under AGPL-3.0. Self-hosted only, with no official paid tier or hosted plan.',
          'Its main codebase has slowed since mid-2024: the last tagged release (v1.10.1) was published on 9 February 2025, and the last commit on the `dev` branch is from 2 March 2026 — check GitHub for the current state.',
          'The extension ecosystem, especially the ControlNet extension for pose/composition guidance, is its biggest remaining advantage — one of the largest and most documented sets of community add-ons of any local image-generation UI.',
          'Actively maintained alternatives include ComfyUI, InvokeAI and SD.Next (pushes on 2026-11-02); Forge, the AUTOMATIC1111 fork, has had no push since 31 July 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No update since 2 March 2026 (last release v1.10.1, 9 February 2025). AUTOMATIC1111 may be unmaintained: check that it still works for your GPU and model before you rely on it.',
          },
        ],
      },
      whatIsAutomatic1111: {
        id: 'what-is-automatic1111',
        title: 'What AUTOMATIC1111 Is',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 is a free, open-source, browser-based user interface that loads Stable Diffusion model files and lets you generate images through tabs, buttons, and text fields instead of a command line.' },
          { type: 'plain-terms', text: 'If Stable Diffusion is the engine, AUTOMATIC1111 is one of several dashboards you can bolt onto it — it does not generate images on its own, and you still need to download separate Stable Diffusion model weights before it can do anything.' },
        ],
        content: [
          'AUTOMATIC1111, officially named "Stable Diffusion web UI," is a Python application built on the [Gradio](https://www.gradio.app/) library that provides a browser-based, tab-organized interface for text-to-image (txt2img), image-to-image (img2img), inpainting, outpainting, and upscaling workflows using Stable Diffusion models. It runs entirely on your own machine and GPU — no image or prompt is sent to a third-party server unless you deliberately install an extension that does so.',
          'The project name comes from its creator\'s GitHub handle, AUTOMATIC1111 — a pseudonymous developer whose real identity has not been publicly disclosed. The project is often referred to simply as "A1111" in community discussion.',
          '**AUTOMATIC1111 is a UI, not a model.** It does not ship with Stable Diffusion weights included — you must separately download a checkpoint file (SD 1.5, SDXL, or a community fine-tune) and place it in the correct folder before you can generate anything. See [PromptQuorum\'s Stable Diffusion review](/power-local-llm/stable-diffusion-review) for what the underlying model actually is and its license terms by version.',
          'It is one of several competing front-ends for Stable Diffusion, alongside [ComfyUI](https://github.com/comfy-org/ComfyUI) (a node-graph-based interface offering more granular workflow control), [InvokeAI](https://github.com/invoke-ai/InvokeAI) (a more polished, professionally oriented UI), [Fooocus](https://github.com/lllyasviel/Fooocus) (a simplified interface aimed at the fewest clicks to a usable image), and [Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (a fork of AUTOMATIC1111 itself, covered in the maintenance section below).',
        ],
      },
      history: {
        id: 'history',
        title: 'History: Why AUTOMATIC1111 Exists',
        content: [
          'Stability AI, the CompVis research group at LMU Munich, and Runway ML publicly released Stable Diffusion on August 22, 2022. At launch, Stable Diffusion shipped as model weights and command-line scripts — there was no official graphical interface for typing a prompt and clicking a button.',
          `AUTOMATIC1111 published the first version of Stable Diffusion web UI on GitHub the same day, August 22, 2022, building on earlier community scripts and adding a Gradio-based browser interface. The timing put it in the right place at the right moment: as Stable Diffusion's popularity exploded through late 2022, AUTOMATIC1111's UI became the default way most hobbyists actually ran it, accumulating tens of thousands of GitHub stars within months and, now over ${ST.en('automatic1111-webui', 'bare')} stars — among the most-starred repositories in the local AI image-generation category.`,
          'Because it arrived first and absorbed most of the early community contributions, extension authors, and tutorial writers, AUTOMATIC1111 became the de facto standard reference implementation that later UIs (Forge, ComfyUI extensions, and community documentation sites) still describe features and workflows in relation to, even where those newer tools have since taken a different technical approach.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'How to Install AUTOMATIC1111 and Generate Your First Image',
        content: [
          'Installation and first-run steps are broadly the same across Windows, Linux, and Mac, though exact commands differ by platform — always confirm the current steps on the project\'s own wiki before starting, since dependency versions can change.',
        ],
        numberedItems: [
          { title: 'Install prerequisites: Python and Git', whyItMatters: 'AUTOMATIC1111 is not a single-file installer — it requires a compatible Python version and Git already installed on your system before its own setup script can run.' },
          { title: 'Clone or download the repository', whyItMatters: 'Get the code from the official [GitHub repository](https://github.com/AUTOMATIC1111/stable-diffusion-webui) using `git clone`, or download it as a ZIP — cloning makes future updates via `git pull` far simpler.' },
          { title: 'Run the platform launch script', whyItMatters: '`webui-user.bat` on Windows or `webui.sh` on Linux/Mac automatically creates a Python virtual environment and installs the required dependencies on first run — this step can take several minutes and needs a stable internet connection.' },
          { title: 'Download a Stable Diffusion checkpoint', whyItMatters: 'AUTOMATIC1111 ships with no model weights included. Download a checkpoint file (e.g. from [Hugging Face](https://huggingface.co/stabilityai)) and place it in the `models/Stable-diffusion` folder — see [PromptQuorum\'s Stable Diffusion review](/power-local-llm/stable-diffusion-review) for version and license details.' },
          { title: 'Open the local web interface', whyItMatters: 'Once setup finishes, the script starts a local web server (typically at `http://127.0.0.1:7860`) and the UI opens automatically in your browser — everything from here runs locally, not in the cloud.' },
          { title: 'Enter a prompt in the txt2img tab and click Generate', whyItMatters: 'Type a description, leave default sampling settings for your first run, and click Generate — first-run inference is typically slower while the model loads into VRAM.' },
          { title: 'Install extensions once comfortable', whyItMatters: 'The built-in Extensions tab lets you add community tools like ControlNet directly from a list — see the extensions section below before installing anything from an unfamiliar source.' },
        ],
        note: 'Exact commands, dependency versions, and troubleshooting steps change over time — follow the project\'s current [installation wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) rather than a generic guide, since GPU driver and Python version compatibility issues are the most common source of install failures.',
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'Maintenance Status: Verified',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 has had no update since 2 March 2026: its last tagged release was v1.10.1 (published 9 February 2025), and its own most popular fork describes the original project as "almost static now" in its README.' },
          { type: 'plain-terms', text: 'The project still runs and is still widely used, but nobody has pushed an update to it since 2 March 2026, so support for newer model types is more likely to appear in actively developed tools such as ComfyUI, InvokeAI or SD.Next.' },
        ],
        columns: ['Signal', 'Verified status', 'Source'],
        rows: [
          { 'Signal': 'Last tagged release', 'Verified status': 'v1.10.1 — code from July 27, 2024; release notes published February 9, 2025', 'Source': '[GitHub releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)' },
          { 'Signal': '`master` branch last commit', 'Verified status': 'July 27, 2024', 'Source': '[GitHub commit history](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commits/master)' },
          { 'Signal': '`dev` branch last commit', 'Verified status': '2 March 2026 (merge of PR #17313); no commits on `dev` since', 'Source': 'GitHub commit history (verify current date before citing)' },
          { 'Signal': 'Open issues', 'Verified status': '2,429 open (GitHub issue search, 2026-11-02)', 'Source': '[GitHub issues](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues)' },
          { 'Signal': 'Fork maintainer\'s own assessment', 'Verified status': '"Because original SD-WebUI is almost static now, Forge will sync with original WebUI every 90 days, or when important fixes" — a direct quote from the Forge project\'s own README', 'Source': '[Forge README](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Signal': 'Forge (fork) last push', 'Verified status': '31 July 2025; its latest GitHub release is dated 5 February 2024', 'Source': '[Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Signal': 'ControlNet extension last push', 'Verified status': '12 August 2024; no GitHub releases', 'Source': '[sd-webui-controlnet on GitHub](https://github.com/Mikubill/sd-webui-controlnet)' },
        ],
        content: [
          'This section states what could be verified directly against the GitHub API on 2026-11-02, rather than repeating secondhand claims. AUTOMATIC1111 has had no update since 2 March 2026: the stable `master` branch, which most one-click installers and documentation point to, has not changed since 27 July 2024, and the `dev` branch has no commits after 2 March 2026. The repository is not archived and the maintainer has not announced that it is abandoned, but it should be treated as possibly unmaintained.',
          'The most credible outside signal comes from lllyasviel, the developer of Forge, a fork built on AUTOMATIC1111\'s codebase. Forge\'s README says it will "sync with original WebUI every 90 days, or when important fixes," because "original SD-WebUI is almost static now." That is a fork maintainer\'s description of AUTOMATIC1111\'s pace, not a rumor. Forge itself has had no push since 31 July 2025, so it is no longer evidence of an active alternative.',
          'None of this means AUTOMATIC1111 stops working. It remains functional for Stable Diffusion 1.5 and SDXL workflows, and its install base and tutorial coverage are still larger than most alternatives\'. The practical implication is about the future: readers who need support for newer model architectures or bug-fix turnaround should compare ComfyUI, InvokeAI and SD.Next, which all had pushes on 2026-11-02, using the comparison table below.',
        ],
        note: 'GitHub activity data changes continuously: the figures above were verified against the GitHub API on 2026-11-02. Check [the repository](https://github.com/AUTOMATIC1111/stable-diffusion-webui) for the current numbers before relying on this table for a time-sensitive decision.',
      },
      extensionsControlnet: {
        id: 'extensions-controlnet',
        title: 'Extensions and the ControlNet Ecosystem',
        content: [
          'AUTOMATIC1111\'s built-in Extensions tab lets users install community-built add-ons directly from a curated list or a Git URL, without editing code. This extension system, combined with the size of the userbase since 2022, produced one of the largest catalogs of Stable Diffusion tooling of any UI.',
          'The single most widely used extension is [sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) (often just called "ControlNet" in the UI), which lets a reference image — a pose skeleton, a depth map, a canny-edge outline, or a rough sketch — guide the composition of a generated image far more precisely than a text prompt alone. It is widely regarded in community usage as the extension that most changed how people work in AUTOMATIC1111, and it remains one of the most-starred Stable Diffusion extensions on GitHub. PromptQuorum covers ControlNet in more depth in a dedicated article (see Related Reading below).',
          'Beyond ControlNet, the extension list includes tools for LoRA (Low-Rank Adaptation) training and management, image browsing and tagging, prompt-history tracking, and workflow automation scripts. Because extensions are community-maintained and independent of AUTOMATIC1111\'s own release cadence, individual extensions can be actively updated even during periods when the core project sees fewer commits — but this also means extension quality and update frequency vary widely by author, so check an extension\'s own repository activity before relying on it for a production workflow.',
        ],
        note: 'Always review an extension\'s source and permissions before installing it — an extension runs as part of the same Python process as AUTOMATIC1111 itself and is not sandboxed.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Hardware Requirements',
        itemHeadings: true,
        columns: ['Workload', 'Minimum VRAM', 'Comfortable VRAM', 'Notes'],
        rows: [
          { 'Workload': 'SD 1.5 checkpoints', 'Minimum VRAM': '4 GB VRAM (2 GB reported working)', 'Comfortable VRAM': '6–8 GB VRAM', 'Notes': 'Lightest workload; runs on most GPUs from the last decade per the project\'s own documentation' },
          { 'Workload': 'SDXL checkpoints', 'Minimum VRAM': '8 GB VRAM (with optimizations)', 'Comfortable VRAM': '12 GB+ VRAM', 'Notes': 'Native 1024×1024 output is heavier per image than SD 1.5' },
          { 'Workload': 'ControlNet extension active', 'Minimum VRAM': 'Adds roughly 1–2 GB VRAM on top of base checkpoint', 'Comfortable VRAM': 'Budget accordingly', 'Notes': 'Exact overhead depends on which ControlNet model and preprocessor are loaded' },
          { 'Workload': 'AMD / Intel GPUs, Apple Silicon', 'Minimum VRAM': 'Supported via separate setup paths', 'Comfortable VRAM': 'Performance varies by platform', 'Notes': 'NVIDIA is the officially recommended and best-supported path; AMD, Intel, and Apple Silicon each require different installation instructions documented on the project wiki' },
        ],
        note: 'Exact VRAM usage depends on resolution, batch size, active extensions, and command-line optimization flags (e.g. `--medvram`, `--lowvram`) — treat these as planning ranges and check the project\'s current [Dependencies wiki page](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies) for up-to-date guidance.',
      },
      licensePricing: {
        id: 'license-pricing',
        title: 'License and Pricing',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 is licensed under AGPL-3.0 (GNU Affero General Public License v3.0) and is free to download, self-host, and modify, with no official paid tier or hosted plan of any kind.' },
          { type: 'plain-terms', text: 'There is no subscription, no premium version, and no company selling AUTOMATIC1111 as a product — it is a community-maintained open-source project you run yourself, and your only cost is your own hardware and electricity.' },
        ],
        content: [
          'AUTOMATIC1111\'s codebase is published under the AGPL-3.0 license, confirmed directly on its [GitHub repository](https://github.com/AUTOMATIC1111/stable-diffusion-webui). AGPL-3.0 is a strong copyleft license: it permits free use, modification, and redistribution, but if you modify the code and run it as a network service that other people interact with, the license generally requires you to make your modified source available to those users as well. This differs from the Stable Diffusion model weights themselves, which carry their own separate license terms depending on which version you download — see [PromptQuorum\'s Stable Diffusion review](/power-local-llm/stable-diffusion-review) for those specifics, since the UI\'s license and the model\'s license are two separate legal documents.',
          'There is no official paid tier, subscription, or hosted version of AUTOMATIC1111 offered by its maintainer. Third-party cloud services exist that host AUTOMATIC1111 instances for a fee (rented GPU time), but these are independent businesses, not an official product — verify any such service\'s own terms and pricing separately before paying for one, and note that using a third-party host means your prompts and images pass through that provider\'s infrastructure rather than staying fully local.',
        ],
        note: 'License text can be read in full in the project\'s [LICENSE.txt on GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — this section is a summary, not legal advice, and AGPL-3.0\'s network-use clause specifically matters if you plan to offer AUTOMATIC1111 as a hosted service to others.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AUTOMATIC1111 vs. Alternatives',
        columns: ['Option', 'Best for', 'Maintenance pace (2026)', 'License', 'Key trade-off'],
        rows: [
          {
            'Option': 'AUTOMATIC1111 (Stable Diffusion web UI)',
            'Best for': 'One of the largest tutorial/extension catalogs, tab-based simplicity',
            'Maintenance pace (2026)': 'No update since 2 March 2026; `master` unchanged since 27 July 2024',
            'License': 'AGPL-3.0',
            'Key trade-off': 'Most-documented option, but newer model support tends to land in forks first',
          },
          {
            'Option': '[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Best for': 'AUTOMATIC1111-familiar UI with faster feature and new-model support',
            'Maintenance pace (2026)': 'No push since 31 July 2025; latest GitHub release 5 February 2024',
            'License': 'AGPL-3.0',
            'Key trade-off': 'Smaller community than AUTOMATIC1111 itself; still tracks the original codebase\'s general structure',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Best for': 'Granular, node-graph-based control over the generation pipeline',
            'Maintenance pace (2026)': 'Actively developed, frequent commits',
            'License': 'GPL-3.0',
            'Key trade-off': 'Steeper learning curve than AUTOMATIC1111\'s tab layout; node graphs are more powerful but less approachable for beginners',
          },
          {
            'Option': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Best for': 'Polished, professionally oriented interface with a canvas-based workflow',
            'Maintenance pace (2026)': 'Actively developed',
            'License': 'Apache-2.0',
            'Key trade-off': 'Smaller extension ecosystem than AUTOMATIC1111; more opinionated UI with less community-script sprawl',
          },
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Best for': 'Fewest clicks to a usable image, minimal configuration',
            'Maintenance pace (2026)': 'Last push 1 December 2025; latest release v2.5.5 (12 August 2024)',
            'License': 'GPL-3.0',
            'Key trade-off': 'Deliberately fewer settings and less extension support in exchange for simplicity',
          },
          {
            'Option': '[SD.Next](https://github.com/vladmandic/sdnext)',
            'Best for': 'AUTOMATIC1111-like all-in-one UI with broader model and hardware support',
            'Maintenance pace (2026)': 'Actively developed, frequent commits',
            'License': 'Apache-2.0',
            'Key trade-off': 'Smaller community and tutorial base than AUTOMATIC1111 despite feature parity or advantages',
          },
        ],
        note: 'Maintenance pace is based on public push and release activity verified on GitHub on 2026-11-02 and can change — check each project\'s own repository before choosing based on activity level alone. See [Stable Diffusion Review](/power-local-llm/stable-diffusion-review) for the underlying model comparison and [Local AI Image Generation vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) for local-vs-cloud trade-offs.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use AUTOMATIC1111',
        items: [
          '**Reader who wants one of the largest bases of tutorials and community answers.** Because it was first to market and has the longest install history, a large share of forum posts, YouTube tutorials, and Stack Overflow-style answers about Stable Diffusion UIs reference AUTOMATIC1111 specifically.',
          '**Reader who wants ControlNet and a mature extension catalog.** The ControlNet extension and thousands of other community add-ons are widely used; check each extension\'s repository before relying on it, since the main ControlNet extension was last pushed to on 12 August 2024.',
          '**Reader who prefers a tab-based interface over a node graph.** AUTOMATIC1111\'s layout — text fields, sliders, and buttons organized into tabs — is generally easier for a first-time user to approach than ComfyUI\'s node-based canvas.',
          '**Reader who wants full local control and privacy.** Once installed, generation happens entirely on your own GPU; no prompt or image data leaves your machine unless you install an extension that does so.',
          '**Reader on a budget who wants zero licensing cost for the UI itself.** AGPL-3.0 means the software is free to use, modify, and redistribute, with no subscription of any kind.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use AUTOMATIC1111',
        items: [
          '**Reader who wants support for the newest model architectures.** With no update since 2 March 2026, new model support is more likely to appear in actively developed tools such as ComfyUI, InvokeAI or SD.Next — compare those first.',
          '**Reader who wants a one-click app with zero command-line exposure.** Installation requires Python and Git and, on some systems, manual troubleshooting of dependency versions — readers who want a fully polished consumer app experience may prefer Fooocus\'s simplified installer or a cloud tool instead.',
          '**Reader who needs guaranteed active core-repository bug fixes on a predictable schedule.** With over 2,400 open issues and no new tagged release since July 2024 on the `master` branch, readers with a hard reliability requirement should not assume fast turnaround on a newly filed bug report.',
          '**Reader who wants maximum workflow control over multi-step pipelines.** ComfyUI\'s node-graph approach generally offers more precise control over complex, multi-stage generation pipelines than AUTOMATIC1111\'s tab-based layout.',
          '**Enterprise team that needs a vendor-supported product with an SLA.** AUTOMATIC1111 is a community project with no official support contract, paid tier, or service-level agreement — teams needing contractual support should evaluate a commercial cloud image-generation product instead.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is AUTOMATIC1111 the same as Stable Diffusion?',
            a: 'No. Stable Diffusion is the underlying open-weights model family; AUTOMATIC1111 (Stable Diffusion web UI) is a separate, free front-end interface that loads those model weights and lets you generate images through a browser. You need both: the model weights (downloaded separately) and a UI like AUTOMATIC1111 to actually use them.',
          },
          {
            q: 'Is AUTOMATIC1111 still maintained in 2026?',
            a: 'No update has been published since 2 March 2026. Its last tagged release, v1.10.1, was published on 9 February 2025, and the `dev` branch has had no commits since 2 March 2026. Forge\'s README calls the original "almost static now", and Forge itself has had no push since 31 July 2025. It still works, but treat it as possibly unmaintained and compare ComfyUI, InvokeAI or SD.Next.',
          },
          {
            q: 'Is AUTOMATIC1111 free?',
            a: 'Yes. It is licensed under AGPL-3.0 and free to download, self-host, and modify. There is no official paid tier, subscription, or hosted plan — your only cost is your own hardware and electricity. You will still need to separately download Stable Diffusion model weights, which carry their own license terms.',
          },
          {
            q: 'What is ControlNet in AUTOMATIC1111?',
            a: 'ControlNet is the single most widely used community extension for AUTOMATIC1111. It lets a reference image — such as a pose skeleton, depth map, or edge outline — guide the composition of a generated image with far more precision than a text prompt alone. It is installed through the built-in Extensions tab and is not part of AUTOMATIC1111\'s core codebase.',
          },
          {
            q: 'What hardware do I need to run AUTOMATIC1111?',
            a: 'For SD 1.5 checkpoints, 4 GB VRAM is the documented minimum (with some reports of 2 GB working), with 6–8 GB more comfortable. For SDXL checkpoints, expect to need 8 GB VRAM with memory optimizations enabled, and 12 GB or more for comfortable use. NVIDIA GPUs are the officially recommended and best-supported path; AMD, Intel, and Apple Silicon are supported through separate, platform-specific setup instructions.',
          },
          {
            q: 'What is the difference between AUTOMATIC1111 and Forge?',
            a: 'Forge is a fork of AUTOMATIC1111\'s codebase built by lllyasviel to add performance optimizations and newer model support such as Flux. Per its README it syncs with the original roughly every 90 days or for important fixes. Its last push on GitHub was on 31 July 2025 and its latest GitHub release is dated 5 February 2024, so it is no longer a clearly more active choice — check its repository before choosing it.',
          },
          {
            q: 'What is the difference between AUTOMATIC1111 and ComfyUI?',
            a: 'AUTOMATIC1111 uses a tab-based interface (text fields, sliders, buttons) that is generally easier for beginners to approach. ComfyUI uses a node-graph interface where you connect blocks representing each processing step, offering more granular control over complex pipelines at the cost of a steeper learning curve. ComfyUI also sees more frequent development activity as of 2026.',
          },
          {
            q: 'Where do I download AUTOMATIC1111?',
            a: 'The official source is the [AUTOMATIC1111/stable-diffusion-webui repository on GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui), which includes the code, an installation wiki, and links to platform-specific setup instructions for NVIDIA, AMD, Intel, and Apple Silicon hardware. You will separately need to download Stable Diffusion model weights (e.g. from Hugging Face) to use with it.',
          },
          {
            q: 'Is Stable Diffusion WebUI Forge still maintained?',
            a: 'Its last push on GitHub was on 31 July 2025, and its latest GitHub release is dated 5 February 2024. Its README says it is based on SD-WebUI 1.10.1. Check the repository for newer activity before choosing it.',
          },
          {
            q: 'Is the ControlNet extension for AUTOMATIC1111 still maintained?',
            a: 'The sd-webui-controlnet repository was last pushed to on 12 August 2024 and has no GitHub releases. It is still widely used, but check its repository and open issues before relying on it for a production workflow.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'AUTOMATIC1111 earned its place as the default local Stable Diffusion interface by being first, and its ecosystem — the ControlNet extension above all, alongside thousands of other community tools, tutorials, and forum answers — is still its strongest asset. But the project has had no update since 2 March 2026, its last tagged release is v1.10.1, its fork Forge has had no push since 31 July 2025, and the leading ControlNet extension was last pushed to on 12 August 2024. It still installs and runs on SD 1.5 and SDXL checkpoints, so readers already using it have no urgent reason to switch. Readers starting fresh should compare ComfyUI, InvokeAI and SD.Next, which are actively developed, rather than defaulting to AUTOMATIC1111 on name recognition, and should confirm it works for their GPU and model first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AUTOMATIC1111/stable-diffusion-webui on GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — official repository, code, releases, and commit history.',
          '[AUTOMATIC1111/stable-diffusion-webui Releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — verified release dates, including v1.10.1 (code from July 27, 2024; published February 9, 2025).',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — full AGPL-3.0 license text.',
          '[AUTOMATIC1111/stable-diffusion-webui Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) — installation guides for NVIDIA, AMD, Intel, and Apple Silicon.',
          '[Stable Diffusion WebUI Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge) — README statement on AUTOMATIC1111\'s development pace and Forge\'s 90-day sync policy.',
          '[Mikubill/sd-webui-controlnet on GitHub](https://github.com/Mikubill/sd-webui-controlnet) — the ControlNet extension for AUTOMATIC1111.',
          '[ComfyUI on GitHub](https://github.com/comfy-org/ComfyUI), [InvokeAI on GitHub](https://github.com/invoke-ai/InvokeAI), [Fooocus on GitHub](https://github.com/lllyasviel/Fooocus), and [SD.Next on GitHub](https://github.com/vladmandic/sdnext) — alternative UI repositories referenced for comparison.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Stable Diffusion Review: Open-Weights Text-to-Image Models](/power-local-llm/stable-diffusion-review) — what the underlying model actually is, license terms by version, and hardware requirements.',
          '[Real-ESRGAN Review: AI Image Upscaler](/power-local-llm/real-esrgan-ai-image-upscaler-review) — a complementary local tool for upscaling images generated in AUTOMATIC1111 or any other UI.',
          '[Local AI Image Generation vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) — a deeper comparison of local image-generation options against cloud tools like Midjourney and Adobe Firefly.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/automatic1111-review-hero-de.webp',
    title: 'AUTOMATIC1111-Rezension: Stable Diffusion WebUI erklärt',
    seoTitle: 'AUTOMATIC1111-Rezension: Stable Diffusion WebUI Guide',
    intro:
      'AUTOMATIC1111 — offiziell "Stable Diffusion web UI" — ist eine kostenlose Open-Source-Weboberfläche mit Tab-Struktur zum lokalen Ausführen von Stable-Diffusion-Modellen auf der eigenen GPU. Am 22. August 2022 auf GitHub veröffentlicht, einen Monat nach dem öffentlichen Start von Stable Diffusion, wurde es zur ersten weit verbreiteten grafischen Oberfläche für lokale Bildgenerierung und gilt bei Drittanbieter-Reviews weiterhin als eine der meistgenutzten und am besten dokumentierten Optionen der Kategorie — dank eines riesigen Extension-Ökosystems (ControlNet, LoRA-Training und tausende Community-Skripte). Diese Rezension erklärt, was AUTOMATIC1111 tatsächlich ist, wie es sich vom Modell Stable Diffusion und von neueren Oberflächen wie ComfyUI, Forge und InvokeAI unterscheidet, den realen Wartungsstatus mit Blick auf 2026, die Lizenzbedingungen, den Hardware-Bedarf und eine ehrliche Einschätzung, für wen es sich heute eignet — und für wen nicht.',
    metaDescription:
      'AUTOMATIC1111-Review: Was Stable Diffusion WebUI ist, geprüfter Wartungsstatus, AGPL-3.0-Lizenz, ControlNet, Hardwarebedarf und Alternativen im Vergleich.',
    twitterDescription:
      'AUTOMATIC1111-Rezension 2026: die ursprüngliche Stable Diffusion WebUI erklärt — verifizierter Wartungsstatus, Lizenz, Extension-Ökosystem, Hardware-Bedarf und Vergleich mit Forge, ComfyUI und InvokeAI.',
    audience:
      'Leser, die entscheiden möchten, ob sie AUTOMATIC1111s Stable Diffusion WebUI für lokale Bildgenerierung installieren — inkl. verifiziertem Wartungsstatus, Lizenzbedingungen, Hardware-Anforderungen, Extension-Ökosystem und Vergleich mit aktiv gepflegten Forks und alternativen Oberflächen.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AUTOMATIC1111 review',
    targetKeywords: [
      'automatic1111 test',
      'stable diffusion webui',
      'automatic1111 installieren',
      'automatic1111 vs comfyui',
      'automatic1111 vs forge',
      'automatic1111 controlnet',
      'stable diffusion webui wartung',
      'automatic1111 lizenz',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL', 'ControlNet', 'Stable Diffusion WebUI Forge', 'ComfyUI', 'InvokeAI', 'Fooocus'],
    current_hardware_mentioned: ['2 GB VRAM', '4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '12 GB VRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Warnung: AUTOMATIC1111 hat seit dem 2. März 2026 kein Update erhalten (letzte Version v1.10.1, 9. Februar 2025) und ist womöglich ungepflegt — prüfen Sie es vor dem Einsatz.** **AUTOMATIC1111 (Stable Diffusion web UI) ist eine kostenlose, quelloffene (AGPL-3.0) Browseroberfläche zum lokalen Ausführen von Stable-Diffusion-Modellen, nicht das Modell selbst.**',
    quickAnswerTop: {
      de: {
        question: 'Wird AUTOMATIC1111 noch gepflegt, und ist es dasselbe wie Stable Diffusion?',
        answer:
          'Seit dem 2. März 2026 wurde kein Update veröffentlicht. AUTOMATIC1111 ist nicht Stable Diffusion: Es ist eine eigenständige, kostenlose, quelloffene Weboberfläche, die Stable-Diffusion-Modellgewichte lädt und Bilder über einen Browser-Tab erzeugt. Die letzte getaggte Version v1.10.1 wurde am 9. Februar 2025 veröffentlicht, und der `dev`-Branch hat seit dem 2. März 2026 keine Commits mehr. Forge, der meistgenutzte Fork, nennt das Original „almost static now“, doch auch Forge hat seit dem 31. Juli 2025 keinen Push erhalten. Es funktioniert in vielen Setups weiter; wer neuere Modellarchitekturen braucht, sollte ComfyUI, InvokeAI oder SD.Next vergleichen.',
        bullets: [
          'AUTOMATIC1111 ist eine Oberfläche/ein Frontend, kein Modell — Sie müssen Stable-Diffusion-Gewichte separat herunterladen und laden.',
          'Auf GitHub geprüft: Die letzte getaggte Version (v1.10.1) wurde am 9. Februar 2025 veröffentlicht, der letzte Commit im `dev`-Branch stammt vom 2. März 2026 — den aktuellen Stand finden Sie im Repository.',
          'Kostenlos und Open Source unter der AGPL-3.0-Lizenz; es gibt keine offizielle kostenpflichtige Stufe oder gehostete Version.',
          'Das Extension-Ökosystem — insbesondere die ControlNet-Extension für Posen- und Kompositionssteuerung — ist der Hauptgrund, warum es trotz langsamerer Kernentwicklung breit genutzt bleibt.',
          'Aktiv gepflegte Alternativen: ComfyUI, InvokeAI und SD.Next hatten am 2026-11-02 Pushes, während Forge, der auf AUTOMATIC1111 aufbauende Fork, seit dem 31. Juli 2025 keinen Push mehr hatte.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was AUTOMATIC1111 ist', anchor: 'what-is-automatic1111' },
      { label: 'Geschichte: Warum AUTOMATIC1111 existiert', anchor: 'history' },
      { label: 'Installation und erstes Bild', anchor: 'how-to-install' },
      { label: 'Wartungsstatus: verifiziert', anchor: 'maintenance-status' },
      { label: 'Extensions und das ControlNet-Ökosystem', anchor: 'extensions-controlnet' },
      { label: 'Hardware-Anforderungen', anchor: 'hardware-requirements' },
      { label: 'Lizenz und Preise', anchor: 'license-pricing' },
      { label: 'AUTOMATIC1111 vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen sich AUTOMATIC1111 eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich AUTOMATIC1111 nicht eignet', anchor: 'who-should-not-use' },
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
          'AUTOMATIC1111 (Stable Diffusion web UI) ist eine kostenlose Open-Source-Weboberfläche mit Tab-Struktur zum lokalen Ausführen von Stable Diffusion — es ist die Frontend-App, nicht das Modell selbst.',
          'Am 22. August 2022 von einem pseudonymen Entwickler unter dem Namen "AUTOMATIC1111" auf GitHub veröffentlicht, einen Monat nach dem öffentlichen Start von Stable Diffusion, und schloss die Lücke einer grafischen lokalen Oberfläche.',
          'Lizenziert unter AGPL-3.0. Ausschließlich Self-Hosting, ohne offizielle kostenpflichtige Stufe oder gehostete Version.',
          'Die Hauptcodebasis ist seit Mitte 2024 langsamer geworden: Die letzte getaggte Version (v1.10.1) wurde am 9. Februar 2025 veröffentlicht, der letzte Commit im `dev`-Branch stammt vom 2. März 2026 — den aktuellen Stand finden Sie auf GitHub.',
          'Das Extension-Ökosystem, insbesondere die ControlNet-Extension für Posen-/Kompositionssteuerung, ist der größte verbleibende Vorteil — eines der größten und am besten dokumentierten Sets an Community-Erweiterungen jeder lokalen Bildgenerierungs-UI.',
          'Aktiv gepflegte Alternativen sind unter anderem ComfyUI, InvokeAI und SD.Next (Pushes am 2026-11-02); Forge, der AUTOMATIC1111-Fork, hatte seit dem 31. Juli 2025 keinen Push.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Kein Update seit dem 2. März 2026 (letzte Version v1.10.1, 9. Februar 2025). AUTOMATIC1111 ist womöglich ungepflegt: Prüfen Sie, ob es mit Ihrer GPU und Ihrem Modell noch funktioniert, bevor Sie sich darauf verlassen.',
          },
        ],
      },
      whatIsAutomatic1111: {
        id: 'what-is-automatic1111',
        title: 'Was AUTOMATIC1111 ist',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 ist eine kostenlose Open-Source-Browser-Oberfläche, die Stable-Diffusion-Modelldateien lädt und Bildgenerierung über Tabs, Schaltflächen und Textfelder statt einer Kommandozeile ermöglicht.' },
          { type: 'plain-terms', text: 'Wenn Stable Diffusion der Motor ist, ist AUTOMATIC1111 eines von mehreren Armaturenbrettern, die man daran anschließen kann — es generiert selbst keine Bilder, und Sie müssen weiterhin separate Stable-Diffusion-Modellgewichte herunterladen, bevor es überhaupt etwas tun kann.' },
        ],
        content: [
          'AUTOMATIC1111, offiziell "Stable Diffusion web UI" genannt, ist eine Python-Anwendung auf Basis der [Gradio](https://www.gradio.app/)-Bibliothek, die eine browserbasierte, in Tabs organisierte Oberfläche für Text-zu-Bild (txt2img), Bild-zu-Bild (img2img), Inpainting, Outpainting und Upscaling mit Stable-Diffusion-Modellen bietet. Es läuft vollständig auf der eigenen Maschine und GPU — kein Bild und kein Prompt wird an einen Drittserver gesendet, es sei denn, Sie installieren bewusst eine Extension, die das tut.',
          'Der Projektname stammt vom GitHub-Nutzernamen des Erstellers, AUTOMATIC1111 — ein pseudonymer Entwickler, dessen wahre Identität nicht öffentlich bekannt ist. In der Community wird das Projekt oft einfach "A1111" genannt.',
          '**AUTOMATIC1111 ist eine Oberfläche, kein Modell.** Es wird nicht mit enthaltenen Stable-Diffusion-Gewichten ausgeliefert — Sie müssen separat eine Checkpoint-Datei (SD 1.5, SDXL oder ein Community-Finetune) herunterladen und im richtigen Ordner ablegen, bevor Sie etwas generieren können. Siehe [PromptQuorums Stable-Diffusion-Rezension](/de/power-local-llm/stable-diffusion-review) dazu, was das zugrunde liegende Modell tatsächlich ist und welche Lizenzbedingungen je Version gelten.',
          'Es ist eines von mehreren konkurrierenden Frontends für Stable Diffusion, neben [ComfyUI](https://github.com/comfy-org/ComfyUI) (eine node-graph-basierte Oberfläche mit feinerer Workflow-Kontrolle), [InvokeAI](https://github.com/invoke-ai/InvokeAI) (eine polierte, professioneller ausgerichtete Oberfläche), [Fooocus](https://github.com/lllyasviel/Fooocus) (eine vereinfachte Oberfläche mit möglichst wenigen Klicks zu einem brauchbaren Bild) und [Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (ein Fork von AUTOMATIC1111 selbst, siehe Wartungsabschnitt unten).',
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: Warum AUTOMATIC1111 existiert',
        content: [
          'Stability AI, die CompVis-Forschungsgruppe der LMU München und Runway ML veröffentlichten Stable Diffusion am 22. August 2022 öffentlich. Zum Start wurde Stable Diffusion als Modellgewichte und Kommandozeilen-Skripte ausgeliefert — es gab keine offizielle grafische Oberfläche zum Eintippen eines Prompts und Klicken eines Buttons.',
          `AUTOMATIC1111 veröffentlichte die erste Version von Stable Diffusion web UI am selben Tag, dem 22. August 2022, aufbauend auf früheren Community-Skripten und ergänzt um eine Gradio-basierte Browser-Oberfläche. Das Timing brachte das Projekt zur richtigen Zeit an die richtige Stelle: Als die Popularität von Stable Diffusion Ende 2022 explodierte, wurde AUTOMATIC1111s Oberfläche der Standardweg, auf dem die meisten Hobbyisten es tatsächlich ausführten — mit zehntausenden GitHub-Stars innerhalb weniger Monate und, inzwischen über ${ST.de('automatic1111-webui', 'bare')} Stars — eines der meist-gestarrten Repositories der Kategorie lokale KI-Bildgenerierung.`,
          'Weil es zuerst da war und den Großteil der frühen Community-Beiträge, Extension-Autoren und Tutorial-Autoren an sich zog, wurde AUTOMATIC1111 zur De-facto-Referenzimplementierung, auf die spätere Oberflächen (Forge, ComfyUI-Extensions und Community-Dokumentationsseiten) Funktionen und Workflows weiterhin beziehen — selbst dort, wo diese neueren Tools inzwischen einen anderen technischen Ansatz verfolgen.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'AUTOMATIC1111 installieren und das erste Bild erzeugen',
        content: [
          'Installation und erste Schritte sind unter Windows, Linux und Mac grundsätzlich ähnlich, auch wenn sich die genauen Befehle je Plattform unterscheiden — prüfen Sie vor dem Start immer die aktuellen Schritte im Wiki des Projekts, da sich Abhängigkeitsversionen ändern können.',
        ],
        numberedItems: [
          { title: 'Voraussetzungen installieren: Python und Git', whyItMatters: 'AUTOMATIC1111 ist kein Ein-Datei-Installer — es benötigt eine kompatible Python-Version und bereits installiertes Git, bevor das eigene Setup-Skript laufen kann.' },
          { title: 'Repository klonen oder herunterladen', whyItMatters: 'Holen Sie den Code aus dem offiziellen [GitHub-Repository](https://github.com/AUTOMATIC1111/stable-diffusion-webui) per `git clone` oder als ZIP — Klonen macht spätere Updates per `git pull` deutlich einfacher.' },
          { title: 'Plattform-Startskript ausführen', whyItMatters: '`webui-user.bat` unter Windows oder `webui.sh` unter Linux/Mac erstellt beim ersten Start automatisch eine Python-Virtualumgebung und installiert die benötigten Abhängigkeiten — dieser Schritt kann mehrere Minuten dauern und braucht eine stabile Internetverbindung.' },
          { title: 'Stable-Diffusion-Checkpoint herunterladen', whyItMatters: 'AUTOMATIC1111 wird ohne enthaltene Modellgewichte ausgeliefert. Laden Sie eine Checkpoint-Datei (z. B. von [Hugging Face](https://huggingface.co/stabilityai)) herunter und legen Sie sie im Ordner `models/Stable-diffusion` ab — Details zu Version und Lizenz in [PromptQuorums Stable-Diffusion-Rezension](/de/power-local-llm/stable-diffusion-review).' },
          { title: 'Lokale Weboberfläche öffnen', whyItMatters: 'Nach Abschluss des Setups startet das Skript einen lokalen Webserver (typischerweise unter `http://127.0.0.1:7860`), und die Oberfläche öffnet sich automatisch im Browser — ab hier läuft alles lokal, nicht in der Cloud.' },
          { title: 'Prompt im txt2img-Tab eingeben und auf Generate klicken', whyItMatters: 'Geben Sie eine Beschreibung ein, lassen Sie beim ersten Durchlauf die Standard-Sampling-Einstellungen und klicken Sie auf Generate — der erste Lauf ist meist langsamer, während das Modell in den VRAM geladen wird.' },
          { title: 'Extensions installieren, sobald Sie sich sicher fühlen', whyItMatters: 'Der eingebaute Extensions-Tab lässt Sie Community-Tools wie ControlNet direkt aus einer Liste hinzufügen — siehe den Extensions-Abschnitt unten, bevor Sie etwas aus einer unbekannten Quelle installieren.' },
        ],
        note: 'Genaue Befehle, Abhängigkeitsversionen und Fehlerbehebungsschritte ändern sich mit der Zeit — folgen Sie dem aktuellen [Installations-Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) des Projekts statt einer generischen Anleitung, da GPU-Treiber- und Python-Versionskompatibilität die häufigste Fehlerquelle bei der Installation sind.',
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'Wartungsstatus: verifiziert',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 hat seit dem 2. März 2026 kein Update erhalten: Die letzte getaggte Version war v1.10.1 (veröffentlicht am 9. Februar 2025), und der beliebteste Fork beschreibt das Originalprojekt in seinem README als „almost static now“.' },
          { type: 'plain-terms', text: 'Das Projekt läuft weiter und wird weiterhin viel genutzt, doch seit dem 2. März 2026 hat niemand ein Update eingespielt; Unterstützung für neuere Modelltypen taucht daher eher in aktiv entwickelten Tools wie ComfyUI, InvokeAI oder SD.Next auf.' },
        ],
        columns: ['Signal', 'Verifizierter Status', 'Quelle'],
        rows: [
          { 'Signal': 'Letzter getaggter Release', 'Verifizierter Status': 'v1.10.1 — Code vom 27. Juli 2024; Release Notes veröffentlicht am 9. Februar 2025', 'Quelle': '[GitHub Releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)' },
          { 'Signal': 'Letzter Commit im `master`-Branch', 'Verifizierter Status': '27. Juli 2024', 'Quelle': '[GitHub-Commit-Verlauf](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commits/master)' },
          { 'Signal': 'Letzter Commit im `dev`-Branch', 'Verifizierter Status': '2. März 2026 (Merge von PR #17313); seitdem keine Commits auf `dev`', 'Quelle': 'GitHub-Commit-Verlauf (aktuelles Datum vor Zitat prüfen)' },
          { 'Signal': 'Offene Issues', 'Verifizierter Status': '2.429 offen (GitHub-Issue-Suche, 2026-11-02)', 'Quelle': '[GitHub Issues](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues)' },
          { 'Signal': 'Einschätzung des Fork-Maintainers', 'Verifizierter Status': '"Because original SD-WebUI is almost static now, Forge will sync with original WebUI every 90 days, or when important fixes" — Originalzitat aus dem README des Forge-Projekts', 'Quelle': '[Forge README](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Signal': 'Forge (Fork): letzter Push', 'Verifizierter Status': '31. Juli 2025; das neueste GitHub-Release datiert vom 5. Februar 2024', 'Quelle': '[Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Signal': 'ControlNet-Erweiterung: letzter Push', 'Verifizierter Status': '12. August 2024; keine GitHub-Releases', 'Quelle': '[sd-webui-controlnet auf GitHub](https://github.com/Mikubill/sd-webui-controlnet)' },
        ],
        content: [
          'Dieser Abschnitt nennt, was sich am 2026-11-02 direkt über die GitHub-API prüfen ließ, statt Aussagen aus zweiter Hand zu wiederholen. AUTOMATIC1111 hat seit dem 2. März 2026 kein Update erhalten: Der stabile `master`-Branch, auf den die meisten Ein-Klick-Installer und Dokumentationen verweisen, hat sich seit dem 27. Juli 2024 nicht geändert, und der `dev`-Branch hat keine Commits nach dem 2. März 2026. Das Repository ist nicht archiviert, und der Maintainer hat es nicht als aufgegeben erklärt, dennoch sollte es als möglicherweise ungepflegt gelten.',
          'Das glaubwürdigste Signal von außen kommt von lllyasviel, dem Entwickler von Forge, einem Fork auf Basis der AUTOMATIC1111-Codebasis. Forges README sagt, es werde „sync with original WebUI every 90 days, or when important fixes“, weil „original SD-WebUI is almost static now“. Das ist die Beschreibung des Entwicklungstempos von AUTOMATIC1111 durch einen Fork-Maintainer, kein Gerücht. Forge selbst hat seit dem 31. Juli 2025 keinen Push erhalten und ist damit kein Beleg mehr für eine aktive Alternative.',
          'All das bedeutet nicht, dass AUTOMATIC1111 aufhört zu funktionieren. Es bleibt für Stable-Diffusion-1.5- und SDXL-Workflows funktionsfähig, und Nutzerbasis und Tutorial-Abdeckung sind weiterhin größer als bei den meisten Alternativen. Die praktische Folge betrifft die Zukunft: Wer Unterstützung für neuere Modellarchitekturen oder schnelle Fehlerbehebung braucht, sollte ComfyUI, InvokeAI und SD.Next vergleichen, die am 2026-11-02 alle Pushes hatten – siehe die Vergleichstabelle unten.',
        ],
        note: 'GitHub-Aktivitätsdaten ändern sich laufend: Die obigen Angaben wurden am 2026-11-02 über die GitHub-API geprüft. Prüfen Sie [das Repository](https://github.com/AUTOMATIC1111/stable-diffusion-webui) auf aktuelle Zahlen, bevor Sie sich bei einer zeitkritischen Entscheidung auf diese Tabelle verlassen.',
      },
      extensionsControlnet: {
        id: 'extensions-controlnet',
        title: 'Extensions und das ControlNet-Ökosystem',
        content: [
          'Der eingebaute Extensions-Tab von AUTOMATIC1111 lässt Nutzer Community-Erweiterungen direkt aus einer kuratierten Liste oder per Git-URL installieren, ohne Code zu bearbeiten. Dieses Extension-System hat zusammen mit der Größe der Nutzerbasis seit 2022 einen der größten Kataloge an Stable-Diffusion-Tools aller Oberflächen hervorgebracht.',
          'Die mit Abstand meistgenutzte Extension ist [sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) (in der Oberfläche oft einfach "ControlNet" genannt), mit der ein Referenzbild — ein Pose-Skelett, eine Tiefenkarte, eine Canny-Kantenzeichnung oder eine grobe Skizze — die Komposition eines generierten Bildes weitaus präziser steuert als ein Textprompt allein. In der Community-Nutzung gilt sie weithin als die Extension, die die Arbeitsweise in AUTOMATIC1111 am stärksten verändert hat, und bleibt eine der meist-gestarrten Stable-Diffusion-Extensions auf GitHub. PromptQuorum behandelt ControlNet ausführlicher in einem eigenen Artikel (siehe Weiterführende Artikel unten).',
          'Über ControlNet hinaus umfasst die Extension-Liste Tools für LoRA-Training (Low-Rank Adaptation) und -Verwaltung, Bild-Browsing und -Tagging, Prompt-Verlauf und Workflow-Automatisierungsskripte. Da Extensions von der Community gepflegt und unabhängig vom eigenen Release-Rhythmus von AUTOMATIC1111 sind, können einzelne Extensions auch in Phasen, in denen das Kernprojekt weniger Commits sieht, aktiv aktualisiert werden — das bedeutet aber auch, dass Qualität und Aktualisierungsfrequenz je nach Autor stark variieren. Prüfen Sie die Repository-Aktivität einer Extension, bevor Sie sich für einen produktiven Workflow darauf verlassen.',
        ],
        note: 'Prüfen Sie vor der Installation immer Quelle und Berechtigungen einer Extension — eine Extension läuft im selben Python-Prozess wie AUTOMATIC1111 selbst und ist nicht isoliert (Sandbox).',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Hardware-Anforderungen',
        itemHeadings: true,
        columns: ['Workload', 'Minimum VRAM', 'Komfortabel', 'Hinweise'],
        rows: [
          { 'Workload': 'SD-1.5-Checkpoints', 'Minimum VRAM': '4 GB VRAM (2 GB laut Berichten funktionsfähig)', 'Komfortabel': '6–8 GB VRAM', 'Hinweise': 'Leichteste Last; läuft laut Projektdokumentation auf den meisten GPUs des letzten Jahrzehnts' },
          { 'Workload': 'SDXL-Checkpoints', 'Minimum VRAM': '8 GB VRAM (mit Optimierungen)', 'Komfortabel': '12 GB+ VRAM', 'Hinweise': 'Natives 1024×1024-Output ist pro Bild schwerer als SD 1.5' },
          { 'Workload': 'Aktive ControlNet-Extension', 'Minimum VRAM': 'Zusätzlich ca. 1–2 GB VRAM zum Basis-Checkpoint', 'Komfortabel': 'Entsprechend einplanen', 'Hinweise': 'Genauer Zusatzbedarf hängt vom geladenen ControlNet-Modell und Preprocessor ab' },
          { 'Workload': 'AMD-/Intel-GPUs, Apple Silicon', 'Minimum VRAM': 'Über separate Setup-Wege unterstützt', 'Komfortabel': 'Leistung variiert je Plattform', 'Hinweise': 'NVIDIA ist der offiziell empfohlene und am besten unterstützte Weg; AMD, Intel und Apple Silicon erfordern jeweils eigene, im Projekt-Wiki dokumentierte Installationsanleitungen' },
        ],
        note: 'Der genaue VRAM-Bedarf hängt von Auflösung, Batch-Größe, aktiven Extensions und Kommandozeilen-Optimierungsflags (z. B. `--medvram`, `--lowvram`) ab — betrachten Sie dies als Planungsspanne und prüfen Sie die aktuelle [Dependencies-Wiki-Seite](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies) des Projekts für aktuelle Hinweise.',
      },
      licensePricing: {
        id: 'license-pricing',
        title: 'Lizenz und Preise',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 steht unter der AGPL-3.0-Lizenz (GNU Affero General Public License v3.0) und ist kostenlos herunterladbar, selbst hostbar und veränderbar, ohne jegliche offizielle kostenpflichtige Stufe oder gehostete Version.' },
          { type: 'plain-terms', text: 'Es gibt kein Abonnement, keine Premium-Version und kein Unternehmen, das AUTOMATIC1111 als Produkt verkauft — es ist ein von der Community gepflegtes Open-Source-Projekt, das Sie selbst betreiben, und die einzigen Kosten sind Ihre eigene Hardware und der Stromverbrauch.' },
        ],
        content: [
          'Die Codebasis von AUTOMATIC1111 ist unter der AGPL-3.0-Lizenz veröffentlicht, direkt bestätigt im [GitHub-Repository](https://github.com/AUTOMATIC1111/stable-diffusion-webui). AGPL-3.0 ist eine starke Copyleft-Lizenz: Sie erlaubt kostenlose Nutzung, Veränderung und Weiterverbreitung, aber wenn Sie den Code verändern und als Netzwerkdienst betreiben, mit dem andere Personen interagieren, verlangt die Lizenz in der Regel, dass Sie auch diesen Nutzern den veränderten Quellcode zur Verfügung stellen. Das unterscheidet sich von den Stable-Diffusion-Modellgewichten selbst, die je nach heruntergeladener Version eigene, separate Lizenzbedingungen tragen — Details dazu in [PromptQuorums Stable-Diffusion-Rezension](/de/power-local-llm/stable-diffusion-review), da die Lizenz der Oberfläche und die Lizenz des Modells zwei getrennte rechtliche Dokumente sind.',
          'Es gibt keine offizielle kostenpflichtige Stufe, kein Abonnement und keine gehostete Version von AUTOMATIC1111 durch den Maintainer. Drittanbieter-Cloud-Dienste, die AUTOMATIC1111-Instanzen gegen Gebühr hosten (gemietete GPU-Zeit), existieren zwar, sind aber unabhängige Unternehmen, kein offizielles Produkt — prüfen Sie die Bedingungen und Preise eines solchen Dienstes separat, bevor Sie dafür bezahlen, und beachten Sie, dass die Nutzung eines Drittanbieter-Hosts bedeutet, dass Ihre Prompts und Bilder über dessen Infrastruktur laufen, statt vollständig lokal zu bleiben.',
        ],
        note: 'Den vollständigen Lizenztext finden Sie in der [LICENSE.txt auf GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) des Projekts — dieser Abschnitt ist eine Zusammenfassung, keine Rechtsberatung, und die Netzwerknutzungsklausel der AGPL-3.0 ist besonders relevant, wenn Sie AUTOMATIC1111 als gehosteten Dienst für andere anbieten möchten.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AUTOMATIC1111 vs. Alternativen',
        columns: ['Option', 'Am besten für', 'Wartungstempo (2026)', 'Lizenz', 'Wichtigster Kompromiss'],
        rows: [
          {
            'Option': 'AUTOMATIC1111 (Stable Diffusion web UI)',
            'Am besten für': 'Eine der größten Tutorial-/Extension-Basen, einfache Tab-Struktur',
            'Wartungstempo (2026)': 'Kein Update seit dem 2. März 2026; `master` unverändert seit dem 27. Juli 2024',
            'Lizenz': 'AGPL-3.0',
            'Wichtigster Kompromiss': 'Am besten dokumentierte Option, aber neuere Modellunterstützung landet meist zuerst in Forks',
          },
          {
            'Option': '[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Am besten für': 'AUTOMATIC1111-vertraute Oberfläche mit schnellerer Funktions- und Modellunterstützung',
            'Wartungstempo (2026)': 'Kein Push seit dem 31. Juli 2025; neuestes GitHub-Release vom 5. Februar 2024',
            'Lizenz': 'AGPL-3.0',
            'Wichtigster Kompromiss': 'Kleinere Community als AUTOMATIC1111 selbst; folgt weiterhin der grundsätzlichen Struktur der Original-Codebasis',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Am besten für': 'Feingranulare, node-graph-basierte Kontrolle über die Generierungspipeline',
            'Wartungstempo (2026)': 'Aktiv entwickelt, häufige Commits',
            'Lizenz': 'GPL-3.0',
            'Wichtigster Kompromiss': 'Steilere Lernkurve als AUTOMATIC1111s Tab-Layout; Node-Graphen sind mächtiger, aber für Einsteiger weniger zugänglich',
          },
          {
            'Option': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Am besten für': 'Polierte, professionell ausgerichtete Oberfläche mit Canvas-basiertem Workflow',
            'Wartungstempo (2026)': 'Aktiv entwickelt',
            'Lizenz': 'Apache-2.0',
            'Wichtigster Kompromiss': 'Kleineres Extension-Ökosystem als AUTOMATIC1111; stärker vorgegebene Oberfläche mit weniger Community-Skript-Wildwuchs',
          },
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Am besten für': 'Wenigste Klicks zu einem brauchbaren Bild, minimale Konfiguration',
            'Wartungstempo (2026)': 'Letzter Push am 1. Dezember 2025; neuestes Release v2.5.5 (12. August 2024)',
            'Lizenz': 'GPL-3.0',
            'Wichtigster Kompromiss': 'Bewusst weniger Einstellungen und weniger Extension-Unterstützung zugunsten von Einfachheit',
          },
          {
            'Option': '[SD.Next](https://github.com/vladmandic/sdnext)',
            'Am besten für': 'AUTOMATIC1111-ähnliche All-in-one-Oberfläche mit breiterer Modell- und Hardware-Unterstützung',
            'Wartungstempo (2026)': 'Aktiv entwickelt, häufige Commits',
            'Lizenz': 'Apache-2.0',
            'Wichtigster Kompromiss': 'Kleinere Community und Tutorial-Basis als AUTOMATIC1111 trotz gleichwertiger oder besserer Funktionen',
          },
        ],
        note: 'Das Wartungstempo beruht auf öffentlicher Push- und Release-Aktivität, die am 2026-11-02 auf GitHub geprüft wurde, und kann sich ändern — prüfen Sie das jeweilige Repository, bevor Sie allein nach der Aktivität entscheiden. Siehe [Stable-Diffusion-Review](/power-local-llm/stable-diffusion-review) für den Modellvergleich und [Lokale KI-Bildgenerierung vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) für Vor- und Nachteile von lokal gegenüber Cloud.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich AUTOMATIC1111 eignet',
        items: [
          '**Leser, die eine der größten Basen an Tutorials und Community-Antworten möchten.** Weil es zuerst am Markt war und die längste Installationshistorie hat, bezieht sich ein großer Teil der Forenbeiträge, YouTube-Tutorials und Stack-Overflow-artigen Antworten zu Stable-Diffusion-Oberflächen speziell auf AUTOMATIC1111.',
          '**Leser, die ControlNet und einen ausgereiften Erweiterungskatalog wollen.** Die ControlNet-Erweiterung und Tausende weitere Community-Add-ons sind weit verbreitet; prüfen Sie das Repository jeder Erweiterung, bevor Sie sich darauf verlassen, denn die wichtigste ControlNet-Erweiterung erhielt ihren letzten Push am 12. August 2024.',
          '**Leser, die eine Tab-basierte Oberfläche einem Node-Graphen vorziehen.** Das Layout von AUTOMATIC1111 — Textfelder, Regler und Schaltflächen in Tabs organisiert — ist für Erstnutzer in der Regel zugänglicher als ComfyUIs node-basierte Arbeitsfläche.',
          '**Leser, die vollständige lokale Kontrolle und Privatsphäre möchten.** Einmal installiert, läuft die Generierung vollständig auf der eigenen GPU; kein Prompt und kein Bild verlässt die Maschine, es sei denn, Sie installieren eine Extension, die das tut.',
          '**Leser mit begrenztem Budget, die keine Lizenzkosten für die Oberfläche selbst möchten.** AGPL-3.0 bedeutet, dass die Software kostenlos nutzbar, veränderbar und weiterverbreitbar ist, ohne jegliches Abonnement.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich AUTOMATIC1111 nicht eignet',
        items: [
          '**Leser, die Unterstützung für die neuesten Modellarchitekturen wollen.** Ohne Update seit dem 2. März 2026 taucht neue Modellunterstützung eher in aktiv entwickelten Tools wie ComfyUI, InvokeAI oder SD.Next auf — vergleichen Sie diese zuerst.',
          '**Leser, die eine Ein-Klick-App ohne jede Kommandozeilen-Berührung möchten.** Die Installation erfordert Python und Git und auf manchen Systemen manuelle Fehlerbehebung bei Abhängigkeitsversionen — Leser, die eine vollständig polierte Konsumenten-App-Erfahrung möchten, greifen besser zu Fooocus\' vereinfachtem Installer oder einem Cloud-Tool.',
          '**Leser, die garantiert aktive Fehlerbehebungen im Kern-Repository nach planbarem Zeitplan brauchen.** Mit über 2.400 offenen Issues und keinem neuen getaggten Release seit Juli 2024 im `master`-Branch sollten Leser mit harten Zuverlässigkeitsanforderungen nicht von schneller Bearbeitung eines neu gemeldeten Bugs ausgehen.',
          '**Leser, die maximale Workflow-Kontrolle über mehrstufige Pipelines möchten.** ComfyUIs Node-Graph-Ansatz bietet in der Regel präzisere Kontrolle über komplexe, mehrstufige Generierungspipelines als AUTOMATIC1111s Tab-Layout.',
          '**Unternehmensteam, das ein herstellerunterstütztes Produkt mit SLA braucht.** AUTOMATIC1111 ist ein Community-Projekt ohne offiziellen Support-Vertrag, kostenpflichtige Stufe oder Service-Level-Agreement — Teams mit vertraglichem Support-Bedarf sollten stattdessen ein kommerzielles Cloud-Bildgenerierungsprodukt prüfen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist AUTOMATIC1111 dasselbe wie Stable Diffusion?',
            a: 'Nein. Stable Diffusion ist die zugrunde liegende offene Modellfamilie; AUTOMATIC1111 (Stable Diffusion web UI) ist eine separate, kostenlose Frontend-Oberfläche, die diese Modellgewichte lädt und Bildgenerierung über einen Browser ermöglicht. Sie brauchen beides: die Modellgewichte (separat heruntergeladen) und eine Oberfläche wie AUTOMATIC1111, um sie tatsächlich zu nutzen.',
          },
          {
            q: 'Wird AUTOMATIC1111 2026 noch gepflegt?',
            a: 'Seit dem 2. März 2026 wurde kein Update veröffentlicht. Die letzte getaggte Version v1.10.1 erschien am 9. Februar 2025, und der `dev`-Branch hat seit dem 2. März 2026 keine Commits. Forges README nennt das Original „almost static now“, und Forge selbst hatte seit dem 31. Juli 2025 keinen Push. Es funktioniert weiterhin, sollte aber als möglicherweise ungepflegt gelten; vergleichen Sie ComfyUI, InvokeAI oder SD.Next.',
          },
          {
            q: 'Ist AUTOMATIC1111 kostenlos?',
            a: 'Ja. Es steht unter der AGPL-3.0-Lizenz und ist kostenlos herunterladbar, selbst hostbar und veränderbar. Es gibt keine offizielle kostenpflichtige Stufe, kein Abonnement und keine gehostete Version — die einzigen Kosten sind Ihre eigene Hardware und der Stromverbrauch. Sie müssen weiterhin separat Stable-Diffusion-Modellgewichte herunterladen, die ihre eigenen Lizenzbedingungen tragen.',
          },
          {
            q: 'Was ist ControlNet in AUTOMATIC1111?',
            a: 'ControlNet ist die mit Abstand meistgenutzte Community-Extension für AUTOMATIC1111. Sie lässt ein Referenzbild — etwa ein Pose-Skelett, eine Tiefenkarte oder eine Kantenzeichnung — die Komposition eines generierten Bildes weitaus präziser steuern als ein Textprompt allein. Sie wird über den eingebauten Extensions-Tab installiert und ist nicht Teil der Kern-Codebasis von AUTOMATIC1111.',
          },
          {
            q: 'Welche Hardware brauche ich, um AUTOMATIC1111 auszuführen?',
            a: 'Für SD-1.5-Checkpoints sind 4 GB VRAM das dokumentierte Minimum (mit einzelnen Berichten, dass auch 2 GB funktionieren), 6–8 GB sind komfortabler. Für SDXL-Checkpoints sollten Sie mit 8 GB VRAM bei aktivierten Speicheroptimierungen rechnen, 12 GB oder mehr für komfortable Nutzung. NVIDIA-GPUs sind der offiziell empfohlene und am besten unterstützte Weg; AMD, Intel und Apple Silicon werden über separate, plattformspezifische Anleitungen unterstützt.',
          },
          {
            q: 'Was ist der Unterschied zwischen AUTOMATIC1111 und Forge?',
            a: 'Forge ist ein Fork der AUTOMATIC1111-Codebasis, von lllyasviel gebaut, um Performance-Optimierungen und neuere Modellunterstützung wie Flux zu ergänzen. Laut README gleicht er sich etwa alle 90 Tage oder bei wichtigen Fixes mit dem Original ab. Sein letzter Push auf GitHub erfolgte am 31. Juli 2025, sein neuestes GitHub-Release datiert vom 5. Februar 2024; er ist damit keine eindeutig aktivere Wahl mehr — prüfen Sie sein Repository, bevor Sie ihn wählen.',
          },
          {
            q: 'Was ist der Unterschied zwischen AUTOMATIC1111 und ComfyUI?',
            a: 'AUTOMATIC1111 nutzt eine Tab-basierte Oberfläche (Textfelder, Regler, Schaltflächen), die für Einsteiger in der Regel zugänglicher ist. ComfyUI nutzt eine Node-Graph-Oberfläche, bei der Sie Blöcke verbinden, die jeden Verarbeitungsschritt repräsentieren, was feinere Kontrolle über komplexe Pipelines auf Kosten einer steileren Lernkurve bietet. ComfyUI zeigt 2026 zudem häufigere Entwicklungsaktivität.',
          },
          {
            q: 'Wo lade ich AUTOMATIC1111 herunter?',
            a: 'Die offizielle Quelle ist das [AUTOMATIC1111/stable-diffusion-webui-Repository auf GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui), das den Code, ein Installations-Wiki und Links zu plattformspezifischen Setup-Anleitungen für NVIDIA-, AMD-, Intel- und Apple-Silicon-Hardware enthält. Sie müssen separat Stable-Diffusion-Modellgewichte (z. B. von Hugging Face) herunterladen, um es zu nutzen.',
          },
          {
            q: 'Wird Stable Diffusion WebUI Forge noch gepflegt?',
            a: 'Sein letzter Push auf GitHub erfolgte am 31. Juli 2025, das neueste GitHub-Release datiert vom 5. Februar 2024. Laut README basiert er auf SD-WebUI 1.10.1. Prüfen Sie das Repository auf neuere Aktivität, bevor Sie ihn wählen.',
          },
          {
            q: 'Wird die ControlNet-Erweiterung für AUTOMATIC1111 noch gepflegt?',
            a: 'Das Repository sd-webui-controlnet erhielt seinen letzten Push am 12. August 2024 und hat keine GitHub-Releases. Die Erweiterung ist weiterhin weit verbreitet, doch prüfen Sie Repository und offene Issues, bevor Sie sich in einem Produktions-Workflow darauf verlassen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'AUTOMATIC1111 hat sich seinen Platz als Standardoberfläche für lokales Stable Diffusion verdient, weil es als Erstes da war, und sein Ökosystem — allen voran die ControlNet-Erweiterung, dazu Tausende weitere Community-Tools, Tutorials und Forenantworten — ist weiterhin seine größte Stärke. Doch das Projekt hat seit dem 2. März 2026 kein Update erhalten, die letzte getaggte Version ist v1.10.1, der Fork Forge hatte seit dem 31. Juli 2025 keinen Push, und die führende ControlNet-Erweiterung erhielt ihren letzten Push am 12. August 2024. Es lässt sich weiterhin installieren und läuft mit SD-1.5- und SDXL-Checkpoints, sodass bestehende Nutzer keinen dringenden Grund zum Wechsel haben. Wer neu einsteigt, sollte ComfyUI, InvokeAI und SD.Next vergleichen, die aktiv entwickelt werden, statt AUTOMATIC1111 nur wegen des Bekanntheitsgrads zu wählen, und zuerst prüfen, ob es mit der eigenen GPU und dem eigenen Modell funktioniert.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[AUTOMATIC1111/stable-diffusion-webui auf GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — offizielles Repository, Code, Releases und Commit-Verlauf.',
          '[AUTOMATIC1111/stable-diffusion-webui Releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — verifizierte Release-Daten, einschließlich v1.10.1 (Code vom 27. Juli 2024; veröffentlicht am 9. Februar 2025).',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — vollständiger AGPL-3.0-Lizenztext.',
          '[AUTOMATIC1111/stable-diffusion-webui Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) — Installationsanleitungen für NVIDIA, AMD, Intel und Apple Silicon.',
          '[Stable Diffusion WebUI Forge auf GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge) — README-Aussage zum Entwicklungstempo von AUTOMATIC1111 und Forges 90-Tage-Sync-Richtlinie.',
          '[Mikubill/sd-webui-controlnet auf GitHub](https://github.com/Mikubill/sd-webui-controlnet) — die ControlNet-Extension für AUTOMATIC1111.',
          '[ComfyUI auf GitHub](https://github.com/comfy-org/ComfyUI), [InvokeAI auf GitHub](https://github.com/invoke-ai/InvokeAI), [Fooocus auf GitHub](https://github.com/lllyasviel/Fooocus) und [SD.Next auf GitHub](https://github.com/vladmandic/sdnext) — zum Vergleich herangezogene alternative UI-Repositories.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Stable-Diffusion-Rezension: Offene Text-zu-Bild-Modelle](/de/power-local-llm/stable-diffusion-review) — was das zugrunde liegende Modell tatsächlich ist, Lizenzbedingungen je Version und Hardware-Anforderungen.',
          '[Real-ESRGAN-Rezension: KI-Bild-Upscaler](/de/power-local-llm/real-esrgan-ai-image-upscaler-review) — ein ergänzendes lokales Tool zum Hochskalieren von in AUTOMATIC1111 oder jeder anderen Oberfläche generierten Bildern.',
          '[Lokale KI-Bildgenerierung vs. Cloud](/de/power-local-llm/local-ai-image-generation-vs-cloud) — ein tieferer Vergleich lokaler Bildgenerierungsoptionen mit Cloud-Tools wie Midjourney und Adobe Firefly.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/automatic1111-review-hero-es.webp',
    title: 'Reseña de AUTOMATIC1111: Stable Diffusion WebUI explicado',
    seoTitle: 'AUTOMATIC1111 Reseña: Guía de Stable Diffusion WebUI',
    intro:
      'AUTOMATIC1111 — formalmente "Stable Diffusion web UI" — es una interfaz web gratuita, de código abierto y organizada en pestañas para ejecutar modelos Stable Diffusion en tu propia GPU. Publicado en GitHub el 22 de agosto de 2022, un mes después del lanzamiento público de Stable Diffusion, se convirtió en la primera interfaz gráfica ampliamente adoptada para generación local de imágenes y sigue siendo descrito por reseñas de terceros como una de las opciones más usadas y mejor documentadas de la categoría, gracias a un enorme ecosistema de extensiones (ControlNet, entrenamiento de LoRA y miles de scripts de la comunidad). Esta reseña explica qué es realmente AUTOMATIC1111, en qué se diferencia del modelo Stable Diffusion y de interfaces más nuevas como ComfyUI, Forge e InvokeAI, su estado real de mantenimiento de cara a 2026, los términos de licencia, los requisitos de hardware y una guía honesta sobre quién debería —y quién no debería— usarlo hoy.',
    metaDescription:
      'Reseña de AUTOMATIC1111: qué es Stable Diffusion WebUI, estado de mantenimiento verificado, licencia AGPL-3.0, ControlNet, hardware y alternativas.',
    twitterDescription:
      'Reseña de AUTOMATIC1111 2026: la Stable Diffusion WebUI original explicada — estado de mantenimiento verificado, licencia, ecosistema de extensiones, requisitos de hardware y comparación con Forge, ComfyUI e InvokeAI.',
    audience:
      'Lectores que deciden si instalar Stable Diffusion WebUI de AUTOMATIC1111 para generación local de imágenes — cubre el estado de mantenimiento verificado, los términos de licencia, los requisitos de hardware, el ecosistema de extensiones y la comparación con forks activamente mantenidos e interfaces alternativas.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AUTOMATIC1111 review',
    targetKeywords: [
      'automatic1111 reseña',
      'stable diffusion webui',
      'instalar automatic1111',
      'automatic1111 vs comfyui',
      'automatic1111 vs forge',
      'automatic1111 controlnet',
      'mantenimiento stable diffusion webui',
      'licencia automatic1111',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL', 'ControlNet', 'Stable Diffusion WebUI Forge', 'ComfyUI', 'InvokeAI', 'Fooocus'],
    current_hardware_mentioned: ['2 GB VRAM', '4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '12 GB VRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Aviso: AUTOMATIC1111 no recibe actualizaciones desde el 2 de marzo de 2026 (última versión v1.10.1, 9 de febrero de 2025) y puede estar sin mantenimiento — compruébalo antes de usarlo.** **AUTOMATIC1111 es una interfaz web gratuita y open source (AGPL-3.0) para ejecutar Stable Diffusion en local, no el modelo.**',
    quickAnswerTop: {
      es: {
        question: '¿Sigue manteniéndose AUTOMATIC1111, y es lo mismo que Stable Diffusion?',
        answer:
          'No se ha publicado ninguna actualización desde el 2 de marzo de 2026. AUTOMATIC1111 no es Stable Diffusion: es una interfaz web independiente, gratuita y open source que carga los pesos de modelos de Stable Diffusion y permite generar imágenes desde una pestaña del navegador. Su última versión etiquetada, v1.10.1, se publicó el 9 de febrero de 2025, y la rama `dev` no tiene commits desde el 2 de marzo de 2026. Forge, su fork más usado, describe el original como «almost static now», pero Forge no ha recibido ningún push desde el 31 de julio de 2025. Sigue funcionando en muchas configuraciones; quien necesite arquitecturas de modelo más nuevas debería comparar ComfyUI, InvokeAI o SD.Next.',
        bullets: [
          'AUTOMATIC1111 es una interfaz/frontend, no un modelo — igual necesitas descargar por separado los pesos de Stable Diffusion y cargarlos en ella.',
          'Verificado en GitHub: la última versión etiquetada (v1.10.1) se publicó el 9 de febrero de 2025, y el último commit de la rama `dev` es del 2 de marzo de 2026 — consulta el repositorio para ver el estado actual.',
          'Gratuito y de código abierto bajo la licencia AGPL-3.0; no existe ningún nivel de pago oficial ni plan alojado.',
          'El ecosistema de extensiones —especialmente la extensión ControlNet para guiar pose y composición— es la principal razón por la que sigue siendo ampliamente usado pese al desarrollo más lento del núcleo.',
          'Alternativas con mantenimiento activo: ComfyUI, InvokeAI y SD.Next tuvieron pushes el 2026-11-02, mientras que Forge, el fork basado en AUTOMATIC1111, no ha recibido ninguno desde el 31 de julio de 2025.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es AUTOMATIC1111', anchor: 'what-is-automatic1111' },
      { label: 'Historia: por qué existe AUTOMATIC1111', anchor: 'history' },
      { label: 'Cómo instalarlo y generar tu primera imagen', anchor: 'how-to-install' },
      { label: 'Estado de mantenimiento: verificado', anchor: 'maintenance-status' },
      { label: 'Extensiones y el ecosistema ControlNet', anchor: 'extensions-controlnet' },
      { label: 'Requisitos de hardware', anchor: 'hardware-requirements' },
      { label: 'Licencia y precios', anchor: 'license-pricing' },
      { label: 'AUTOMATIC1111 vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar AUTOMATIC1111', anchor: 'who-should-use' },
      { label: 'Quién no debería usar AUTOMATIC1111', anchor: 'who-should-not-use' },
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
          'AUTOMATIC1111 (Stable Diffusion web UI) es una interfaz web gratuita, de código abierto y organizada en pestañas para ejecutar Stable Diffusion de forma local — es la aplicación frontend, no el modelo en sí.',
          'Publicado en GitHub el 22 de agosto de 2022 por un desarrollador seudónimo bajo el nombre "AUTOMATIC1111", un mes después del lanzamiento público de Stable Diffusion, cubriendo la falta de una interfaz gráfica local.',
          'Con licencia AGPL-3.0. Solo de autoalojamiento, sin ningún nivel de pago oficial ni plan alojado.',
          'Su código principal se ha ralentizado desde mediados de 2024: la última versión etiquetada (v1.10.1) se publicó el 9 de febrero de 2025, y el último commit de la rama `dev` es del 2 de marzo de 2026 — consulta GitHub para ver el estado actual.',
          'El ecosistema de extensiones, especialmente la extensión ControlNet para guiar pose/composición, es su mayor ventaja restante — uno de los conjuntos más grandes y mejor documentados de complementos de la comunidad de cualquier UI de generación local de imágenes.',
          'Entre las alternativas con mantenimiento activo están ComfyUI, InvokeAI y SD.Next (pushes el 2026-11-02); Forge, el fork de AUTOMATIC1111, no ha recibido ningún push desde el 31 de julio de 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sin actualizaciones desde el 2 de marzo de 2026 (última versión v1.10.1, 9 de febrero de 2025). AUTOMATIC1111 puede estar sin mantenimiento: comprueba que sigue funcionando con tu GPU y tu modelo antes de depender de él.',
          },
        ],
      },
      whatIsAutomatic1111: {
        id: 'what-is-automatic1111',
        title: 'Qué es AUTOMATIC1111',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 es una interfaz de usuario gratuita, de código abierto y basada en navegador que carga archivos de modelo Stable Diffusion y permite generar imágenes mediante pestañas, botones y campos de texto en lugar de una línea de comandos.' },
          { type: 'plain-terms', text: 'Si Stable Diffusion es el motor, AUTOMATIC1111 es uno de varios tableros que puedes conectarle — no genera imágenes por sí solo, y de todos modos necesitas descargar pesos de modelo Stable Diffusion por separado antes de que pueda hacer algo.' },
        ],
        content: [
          'AUTOMATIC1111, llamado oficialmente "Stable Diffusion web UI", es una aplicación en Python construida sobre la biblioteca [Gradio](https://www.gradio.app/) que ofrece una interfaz basada en navegador y organizada en pestañas para flujos de texto a imagen (txt2img), imagen a imagen (img2img), inpainting, outpainting y escalado con modelos Stable Diffusion. Funciona por completo en tu propia máquina y GPU — ninguna imagen o prompt se envía a un servidor de terceros a menos que instales deliberadamente una extensión que lo haga.',
          'El nombre del proyecto proviene del nombre de usuario de GitHub de su creador, AUTOMATIC1111 — un desarrollador seudónimo cuya identidad real no se ha revelado públicamente. En la comunidad, el proyecto suele llamarse simplemente "A1111".',
          '**AUTOMATIC1111 es una interfaz, no un modelo.** No incluye pesos de Stable Diffusion — debes descargar por separado un archivo de checkpoint (SD 1.5, SDXL o un ajuste fino de la comunidad) y colocarlo en la carpeta correcta antes de poder generar algo. Consulta la [reseña de Stable Diffusion de PromptQuorum](/es/power-local-llm/stable-diffusion-review) para saber qué es realmente el modelo subyacente y sus términos de licencia según la versión.',
          'Es una de varias interfaces frontend que compiten por Stable Diffusion, junto a [ComfyUI](https://github.com/comfy-org/ComfyUI) (una interfaz basada en grafo de nodos con control de flujo más granular), [InvokeAI](https://github.com/invoke-ai/InvokeAI) (una interfaz más pulida y orientada a uso profesional), [Fooocus](https://github.com/lllyasviel/Fooocus) (una interfaz simplificada pensada para llegar a una imagen usable con el menor número de clics) y [Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (un fork del propio AUTOMATIC1111, cubierto en la sección de mantenimiento más abajo).',
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: por qué existe AUTOMATIC1111',
        content: [
          'Stability AI, el grupo de investigación CompVis de la LMU de Múnich y Runway ML lanzaron públicamente Stable Diffusion el 22 de agosto de 2022. En el lanzamiento, Stable Diffusion se distribuyó como pesos de modelo y scripts de línea de comandos — no existía una interfaz gráfica oficial para escribir un prompt y pulsar un botón.',
          `AUTOMATIC1111 publicó la primera versión de Stable Diffusion web UI en GitHub ese mismo día, el 22 de agosto de 2022, construyendo sobre scripts previos de la comunidad y añadiendo una interfaz de navegador basada en Gradio. El momento lo situó en el lugar correcto en el momento adecuado: cuando la popularidad de Stable Diffusion se disparó a finales de 2022, la interfaz de AUTOMATIC1111 se convirtió en la forma por defecto en que la mayoría de aficionados realmente lo ejecutaban, acumulando decenas de miles de estrellas de GitHub en pocos meses y, hoy más de ${ST.es('automatic1111-webui', 'bare')} estrellas — entre los repositorios con más estrellas de la categoría de generación local de imágenes con IA.`,
          'Por haber llegado primero y absorber la mayoría de las contribuciones tempranas de la comunidad, autores de extensiones y creadores de tutoriales, AUTOMATIC1111 se convirtió en la implementación de referencia de facto a la que interfaces posteriores (Forge, extensiones de ComfyUI y sitios de documentación de la comunidad) siguen refiriéndose para describir funciones y flujos de trabajo, incluso cuando esas herramientas más nuevas han adoptado desde entonces un enfoque técnico diferente.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Cómo instalar AUTOMATIC1111 y generar tu primera imagen',
        content: [
          'Los pasos de instalación y primer uso son en gran medida los mismos en Windows, Linux y Mac, aunque los comandos exactos difieren según la plataforma — confirma siempre los pasos actuales en la wiki del propio proyecto antes de empezar, ya que las versiones de dependencias pueden cambiar.',
        ],
        numberedItems: [
          { title: 'Instala los prerrequisitos: Python y Git', whyItMatters: 'AUTOMATIC1111 no es un instalador de un solo archivo — requiere una versión de Python compatible y Git ya instalados en tu sistema antes de que su propio script de configuración pueda ejecutarse.' },
          { title: 'Clona o descarga el repositorio', whyItMatters: 'Obtén el código del [repositorio oficial de GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui) con `git clone`, o descárgalo como ZIP — clonar hace que futuras actualizaciones con `git pull` sean mucho más sencillas.' },
          { title: 'Ejecuta el script de lanzamiento de tu plataforma', whyItMatters: '`webui-user.bat` en Windows o `webui.sh` en Linux/Mac crea automáticamente un entorno virtual de Python e instala las dependencias necesarias en la primera ejecución — este paso puede tardar varios minutos y requiere una conexión a internet estable.' },
          { title: 'Descarga un checkpoint de Stable Diffusion', whyItMatters: 'AUTOMATIC1111 no incluye pesos de modelo. Descarga un archivo de checkpoint (por ejemplo, desde [Hugging Face](https://huggingface.co/stabilityai)) y colócalo en la carpeta `models/Stable-diffusion` — consulta la [reseña de Stable Diffusion de PromptQuorum](/es/power-local-llm/stable-diffusion-review) para detalles de versión y licencia.' },
          { title: 'Abre la interfaz web local', whyItMatters: 'Una vez terminada la configuración, el script inicia un servidor web local (normalmente en `http://127.0.0.1:7860`) y la interfaz se abre automáticamente en tu navegador — desde aquí todo funciona localmente, no en la nube.' },
          { title: 'Escribe un prompt en la pestaña txt2img y haz clic en Generate', whyItMatters: 'Escribe una descripción, deja la configuración de muestreo predeterminada en tu primera ejecución, y haz clic en Generate — la primera inferencia suele ser más lenta mientras el modelo se carga en la VRAM.' },
          { title: 'Instala extensiones una vez que te sientas cómodo', whyItMatters: 'La pestaña Extensions integrada te permite añadir herramientas de la comunidad como ControlNet directamente desde una lista — consulta la sección de extensiones más abajo antes de instalar algo de una fuente desconocida.' },
        ],
        note: 'Los comandos exactos, versiones de dependencias y pasos de solución de problemas cambian con el tiempo — sigue la [wiki de instalación](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) actual del proyecto en lugar de una guía genérica, ya que los problemas de compatibilidad de drivers de GPU y versión de Python son la causa más común de fallos de instalación.',
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'Estado de mantenimiento: verificado',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 no recibe actualizaciones desde el 2 de marzo de 2026: su última versión etiquetada fue v1.10.1 (publicada el 9 de febrero de 2025), y su fork más popular describe el proyecto original como «almost static now» en su README.' },
          { type: 'plain-terms', text: 'El proyecto sigue funcionando y se usa mucho, pero nadie ha publicado una actualización desde el 2 de marzo de 2026, por lo que el soporte para nuevos tipos de modelo aparecerá antes en herramientas con desarrollo activo como ComfyUI, InvokeAI o SD.Next.' },
        ],
        columns: ['Señal', 'Estado verificado', 'Fuente'],
        rows: [
          { 'Señal': 'Última versión etiquetada', 'Estado verificado': 'v1.10.1 — código del 27 de julio de 2024; notas de versión publicadas el 9 de febrero de 2025', 'Fuente': '[GitHub releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)' },
          { 'Señal': 'Último commit en la rama `master`', 'Estado verificado': '27 de julio de 2024', 'Fuente': '[Historial de commits de GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commits/master)' },
          { 'Señal': 'Último commit en la rama `dev`', 'Estado verificado': '2 de marzo de 2026 (fusión de la PR #17313); sin commits en `dev` desde entonces', 'Fuente': 'Historial de commits de GitHub (verifica la fecha actual antes de citarlo)' },
          { 'Señal': 'Issues abiertos', 'Estado verificado': '2.429 abiertas (búsqueda de issues de GitHub, 2026-11-02)', 'Fuente': '[GitHub issues](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues)' },
          { 'Señal': 'Valoración propia del mantenedor del fork', 'Estado verificado': '"Because original SD-WebUI is almost static now, Forge will sync with original WebUI every 90 days, or when important fixes" — cita textual del propio README del proyecto Forge', 'Fuente': '[Forge README](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Señal': 'Fork Forge: último push', 'Estado verificado': '31 de julio de 2025; su última release de GitHub es del 5 de febrero de 2024', 'Fuente': '[Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Señal': 'Extensión ControlNet: último push', 'Estado verificado': '12 de agosto de 2024; sin releases de GitHub', 'Fuente': '[sd-webui-controlnet en GitHub](https://github.com/Mikubill/sd-webui-controlnet)' },
        ],
        content: [
          'Esta sección recoge lo que pudo verificarse directamente con la API de GitHub el 2026-11-02, en lugar de repetir afirmaciones de segunda mano. AUTOMATIC1111 no recibe actualizaciones desde el 2 de marzo de 2026: la rama estable `master`, a la que apuntan la mayoría de instaladores de un clic y de la documentación, no ha cambiado desde el 27 de julio de 2024, y la rama `dev` no tiene commits posteriores al 2 de marzo de 2026. El repositorio no está archivado y el mantenedor no ha anunciado su abandono, pero debe tratarse como posiblemente sin mantenimiento.',
          'La señal externa más creíble viene de lllyasviel, el desarrollador de Forge, un fork construido sobre el código de AUTOMATIC1111. El README de Forge dice que se sincronizará «with original WebUI every 90 days, or when important fixes», porque «original SD-WebUI is almost static now». Es el mantenedor de un fork describiendo el ritmo de AUTOMATIC1111, no un rumor. El propio Forge no ha recibido ningún push desde el 31 de julio de 2025, así que ya no prueba que exista una alternativa activa.',
          'Nada de esto significa que AUTOMATIC1111 deje de funcionar. Sigue siendo funcional para flujos de Stable Diffusion 1.5 y SDXL, y su base instalada y su cobertura de tutoriales siguen siendo mayores que las de la mayoría de alternativas. La implicación práctica es de futuro: quien necesite soporte para arquitecturas de modelo más nuevas o correcciones rápidas debería comparar ComfyUI, InvokeAI y SD.Next, que tuvieron pushes el 2026-11-02, con la tabla comparativa de abajo.',
        ],
        note: 'Los datos de actividad de GitHub cambian continuamente: las cifras anteriores se verificaron con la API de GitHub el 2026-11-02. Consulta [el repositorio](https://github.com/AUTOMATIC1111/stable-diffusion-webui) para ver las cifras actuales antes de apoyarte en esta tabla para una decisión urgente.',
      },
      extensionsControlnet: {
        id: 'extensions-controlnet',
        title: 'Extensiones y el ecosistema ControlNet',
        content: [
          'La pestaña Extensions integrada de AUTOMATIC1111 permite a los usuarios instalar complementos creados por la comunidad directamente desde una lista curada o una URL de Git, sin editar código. Este sistema de extensiones, combinado con el tamaño de la base de usuarios desde 2022, produjo uno de los catálogos más grandes de herramientas para Stable Diffusion de cualquier interfaz.',
          'La extensión más usada con diferencia es [sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) (a menudo llamada simplemente "ControlNet" en la interfaz), que permite que una imagen de referencia —un esqueleto de pose, un mapa de profundidad, un contorno de bordes canny o un boceto aproximado— guíe la composición de una imagen generada con mucha más precisión que un prompt de texto por sí solo. En el uso de la comunidad se la considera ampliamente la extensión que más cambió la forma de trabajar en AUTOMATIC1111, y sigue siendo una de las extensiones de Stable Diffusion con más estrellas en GitHub. PromptQuorum trata ControlNet con más profundidad en un artículo dedicado (ver Lecturas relacionadas más abajo).',
          'Más allá de ControlNet, la lista de extensiones incluye herramientas para entrenamiento y gestión de LoRA (Low-Rank Adaptation), navegación y etiquetado de imágenes, seguimiento del historial de prompts y scripts de automatización de flujos de trabajo. Como las extensiones las mantiene la comunidad y son independientes del propio ritmo de versiones de AUTOMATIC1111, extensiones individuales pueden actualizarse activamente incluso durante periodos en los que el proyecto principal ve menos commits — pero esto también significa que la calidad y la frecuencia de actualización varían mucho según el autor, así que revisa la actividad del propio repositorio de una extensión antes de depender de ella en un flujo de trabajo de producción.',
        ],
        note: 'Revisa siempre el código fuente y los permisos de una extensión antes de instalarla — una extensión se ejecuta dentro del mismo proceso de Python que AUTOMATIC1111 y no está aislada (sandboxed).',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Requisitos de hardware',
        itemHeadings: true,
        columns: ['Carga de trabajo', 'VRAM mínima', 'VRAM cómoda', 'Notas'],
        rows: [
          { 'Carga de trabajo': 'Checkpoints SD 1.5', 'VRAM mínima': '4 GB VRAM (hay reportes de 2 GB funcionando)', 'VRAM cómoda': '6–8 GB VRAM', 'Notas': 'Carga más ligera; funciona en la mayoría de GPU de la última década según la propia documentación del proyecto' },
          { 'Carga de trabajo': 'Checkpoints SDXL', 'VRAM mínima': '8 GB VRAM (con optimizaciones)', 'VRAM cómoda': '12 GB+ VRAM', 'Notas': 'La salida nativa 1024×1024 es más pesada por imagen que SD 1.5' },
          { 'Carga de trabajo': 'Extensión ControlNet activa', 'VRAM mínima': 'Añade aproximadamente 1–2 GB VRAM sobre el checkpoint base', 'VRAM cómoda': 'Presupuesta en consecuencia', 'Notas': 'El sobrecoste exacto depende del modelo ControlNet y el preprocesador cargados' },
          { 'Carga de trabajo': 'GPU AMD / Intel, Apple Silicon', 'VRAM mínima': 'Soportado mediante rutas de configuración separadas', 'VRAM cómoda': 'El rendimiento varía según la plataforma', 'Notas': 'NVIDIA es la ruta oficialmente recomendada y mejor soportada; AMD, Intel y Apple Silicon requieren instrucciones de instalación distintas, documentadas en la wiki del proyecto' },
        ],
        note: 'El uso exacto de VRAM depende de la resolución, el tamaño de lote, las extensiones activas y las opciones de optimización de línea de comandos (por ejemplo, `--medvram`, `--lowvram`) — trátalo como un rango de planificación y consulta la [página de dependencias de la wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies) actual del proyecto para orientación actualizada.',
      },
      licensePricing: {
        id: 'license-pricing',
        title: 'Licencia y precios',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 tiene licencia AGPL-3.0 (GNU Affero General Public License v3.0) y es gratuito para descargar, autoalojar y modificar, sin ningún nivel de pago oficial ni plan alojado.' },
          { type: 'plain-terms', text: 'No hay suscripción, ni versión premium, ni una empresa que venda AUTOMATIC1111 como producto — es un proyecto de código abierto mantenido por la comunidad que ejecutas tú mismo, y tu único coste es tu propio hardware y la electricidad.' },
        ],
        content: [
          'El código base de AUTOMATIC1111 está publicado bajo la licencia AGPL-3.0, confirmado directamente en su [repositorio de GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui). AGPL-3.0 es una licencia copyleft fuerte: permite el uso, modificación y redistribución gratuitos, pero si modificas el código y lo ejecutas como un servicio de red con el que otras personas interactúan, la licencia generalmente exige que también pongas el código fuente modificado a disposición de esos usuarios. Esto difiere de los propios pesos del modelo Stable Diffusion, que llevan sus propios términos de licencia separados según la versión que descargues — consulta la [reseña de Stable Diffusion de PromptQuorum](/es/power-local-llm/stable-diffusion-review) para esos detalles, ya que la licencia de la interfaz y la del modelo son dos documentos legales separados.',
          'No existe ningún nivel de pago oficial, suscripción o versión alojada de AUTOMATIC1111 ofrecida por su mantenedor. Existen servicios en la nube de terceros que alojan instancias de AUTOMATIC1111 mediante pago (tiempo de GPU alquilado), pero son negocios independientes, no un producto oficial — verifica los términos y precios de cualquiera de esos servicios por separado antes de pagar por uno, y ten en cuenta que usar un alojamiento de terceros implica que tus prompts e imágenes pasan por la infraestructura de ese proveedor en lugar de permanecer totalmente locales.',
        ],
        note: 'El texto completo de la licencia se puede leer en el [LICENSE.txt en GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) del proyecto — esta sección es un resumen, no asesoría legal, y la cláusula de uso en red de AGPL-3.0 es especialmente relevante si planeas ofrecer AUTOMATIC1111 como servicio alojado a terceros.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AUTOMATIC1111 vs. alternativas',
        columns: ['Opción', 'Mejor para', 'Ritmo de mantenimiento (2026)', 'Licencia', 'Compromiso clave'],
        rows: [
          {
            'Opción': 'AUTOMATIC1111 (Stable Diffusion web UI)',
            'Mejor para': 'Una de las mayores bases de tutoriales/extensiones, sencillez de pestañas',
            'Ritmo de mantenimiento (2026)': 'Sin actualizaciones desde el 2 de marzo de 2026; `master` sin cambios desde el 27 de julio de 2024',
            'Licencia': 'AGPL-3.0',
            'Compromiso clave': 'La opción mejor documentada, pero el soporte de modelos nuevos suele llegar primero a forks',
          },
          {
            'Opción': '[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Mejor para': 'Interfaz familiar tipo AUTOMATIC1111 con soporte más rápido de funciones y modelos nuevos',
            'Ritmo de mantenimiento (2026)': 'Sin push desde el 31 de julio de 2025; última release de GitHub del 5 de febrero de 2024',
            'Licencia': 'AGPL-3.0',
            'Compromiso clave': 'Comunidad más pequeña que AUTOMATIC1111; sigue la estructura general del código base original',
          },
          {
            'Opción': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Mejor para': 'Control granular basado en grafo de nodos sobre el pipeline de generación',
            'Ritmo de mantenimiento (2026)': 'Desarrollado activamente, commits frecuentes',
            'Licencia': 'GPL-3.0',
            'Compromiso clave': 'Curva de aprendizaje más pronunciada que el layout de pestañas de AUTOMATIC1111; los grafos de nodos son más potentes pero menos accesibles para principiantes',
          },
          {
            'Opción': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Mejor para': 'Interfaz pulida y orientada a uso profesional con flujo de trabajo basado en lienzo',
            'Ritmo de mantenimiento (2026)': 'Desarrollado activamente',
            'Licencia': 'Apache-2.0',
            'Compromiso clave': 'Ecosistema de extensiones más pequeño que AUTOMATIC1111; interfaz más rígida con menos scripts de comunidad dispersos',
          },
          {
            'Opción': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Mejor para': 'Mínimos clics hasta una imagen utilizable, configuración mínima',
            'Ritmo de mantenimiento (2026)': 'Último push el 1 de diciembre de 2025; última release v2.5.5 (12 de agosto de 2024)',
            'Licencia': 'GPL-3.0',
            'Compromiso clave': 'Deliberadamente menos ajustes y menos soporte de extensiones a cambio de simplicidad',
          },
          {
            'Opción': '[SD.Next](https://github.com/vladmandic/sdnext)',
            'Mejor para': 'Interfaz todo en uno tipo AUTOMATIC1111 con soporte de modelo y hardware más amplio',
            'Ritmo de mantenimiento (2026)': 'Desarrollado activamente, commits frecuentes',
            'Licencia': 'Apache-2.0',
            'Compromiso clave': 'Comunidad y base de tutoriales más pequeñas que AUTOMATIC1111 pese a igualar o superar sus funciones',
          },
        ],
        note: 'El ritmo de mantenimiento se basa en la actividad pública de push y releases verificada en GitHub el 2026-11-02 y puede cambiar — consulta el repositorio de cada proyecto antes de elegir solo por su nivel de actividad. Consulta la [reseña de Stable Diffusion](/power-local-llm/stable-diffusion-review) para la comparación de modelos y [Generación local de imágenes con IA frente a la nube](/power-local-llm/local-ai-image-generation-vs-cloud) para las ventajas e inconvenientes de local frente a nube.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar AUTOMATIC1111',
        items: [
          '**El lector que quiere una de las mayores bases de tutoriales y respuestas de la comunidad.** Por haber llegado primero al mercado y tener el historial de instalación más largo, una gran parte de las publicaciones en foros, tutoriales de YouTube y respuestas al estilo Stack Overflow sobre interfaces de Stable Diffusion hacen referencia específicamente a AUTOMATIC1111.',
          '**Lector que quiere ControlNet y un catálogo de extensiones maduro.** La extensión ControlNet y miles de complementos comunitarios más se usan mucho; revisa el repositorio de cada extensión antes de depender de ella, ya que la principal extensión ControlNet recibió su último push el 12 de agosto de 2024.',
          '**El lector que prefiere una interfaz basada en pestañas frente a un grafo de nodos.** El diseño de AUTOMATIC1111 —campos de texto, deslizadores y botones organizados en pestañas— es generalmente más accesible para un usuario primerizo que el lienzo basado en nodos de ComfyUI.',
          '**El lector que quiere control local total y privacidad.** Una vez instalado, la generación ocurre por completo en tu propia GPU; ningún prompt o dato de imagen sale de tu máquina a menos que instales una extensión que lo haga.',
          '**El lector con presupuesto ajustado que quiere coste de licencia cero para la interfaz en sí.** AGPL-3.0 significa que el software es gratuito de usar, modificar y redistribuir, sin ningún tipo de suscripción.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar AUTOMATIC1111',
        items: [
          '**Lector que quiere soporte para las arquitecturas de modelo más recientes.** Sin actualizaciones desde el 2 de marzo de 2026, el soporte para modelos nuevos aparecerá antes en herramientas con desarrollo activo como ComfyUI, InvokeAI o SD.Next — compáralas primero.',
          '**El lector que quiere una aplicación de un clic sin ninguna exposición a la línea de comandos.** La instalación requiere Python y Git y, en algunos sistemas, solución manual de problemas de versiones de dependencias — los lectores que quieran una experiencia de aplicación de consumo totalmente pulida pueden preferir el instalador simplificado de Fooocus o una herramienta en la nube.',
          '**El lector que necesita correcciones de errores garantizadas y activas en el repositorio principal con un calendario predecible.** Con más de 2.400 issues abiertos y ninguna nueva versión etiquetada desde julio de 2024 en la rama `master`, los lectores con un requisito de fiabilidad estricto no deberían asumir una resolución rápida de un error recién reportado.',
          '**El lector que quiere el máximo control de flujo sobre pipelines de varios pasos.** El enfoque de grafo de nodos de ComfyUI generalmente ofrece un control más preciso sobre pipelines de generación complejos y de varias etapas que el layout de pestañas de AUTOMATIC1111.',
          '**El equipo empresarial que necesita un producto con soporte de proveedor y un SLA.** AUTOMATIC1111 es un proyecto de la comunidad sin contrato de soporte oficial, nivel de pago ni acuerdo de nivel de servicio — los equipos que necesiten soporte contractual deberían evaluar en su lugar un producto comercial de generación de imágenes en la nube.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es AUTOMATIC1111 lo mismo que Stable Diffusion?',
            a: 'No. Stable Diffusion es la familia de modelos abiertos subyacente; AUTOMATIC1111 (Stable Diffusion web UI) es una interfaz frontend gratuita y separada que carga esos pesos de modelo y permite generar imágenes desde un navegador. Necesitas ambos: los pesos del modelo (descargados por separado) y una interfaz como AUTOMATIC1111 para usarlos realmente.',
          },
          {
            q: '¿Sigue manteniéndose AUTOMATIC1111 en 2026?',
            a: 'No se ha publicado ninguna actualización desde el 2 de marzo de 2026. Su última versión etiquetada, v1.10.1, se publicó el 9 de febrero de 2025, y la rama `dev` no tiene commits desde el 2 de marzo de 2026. El README de Forge describe el original como «almost static now», y el propio Forge no ha recibido ningún push desde el 31 de julio de 2025. Sigue funcionando, pero trátalo como posiblemente sin mantenimiento y compara ComfyUI, InvokeAI o SD.Next.',
          },
          {
            q: '¿Es gratis AUTOMATIC1111?',
            a: 'Sí. Tiene licencia AGPL-3.0 y es gratuito de descargar, autoalojar y modificar. No existe ningún nivel de pago oficial, suscripción ni plan alojado — tu único coste es tu propio hardware y la electricidad. Igualmente necesitarás descargar por separado los pesos del modelo Stable Diffusion, que tienen sus propios términos de licencia.',
          },
          {
            q: '¿Qué es ControlNet en AUTOMATIC1111?',
            a: 'ControlNet es la extensión de la comunidad más usada con diferencia para AUTOMATIC1111. Permite que una imagen de referencia —como un esqueleto de pose, un mapa de profundidad o un contorno de bordes— guíe la composición de una imagen generada con mucha más precisión que un prompt de texto por sí solo. Se instala a través de la pestaña Extensions integrada y no forma parte del código base principal de AUTOMATIC1111.',
          },
          {
            q: '¿Qué hardware necesito para ejecutar AUTOMATIC1111?',
            a: 'Para checkpoints SD 1.5, 4 GB de VRAM es el mínimo documentado (con algunos reportes de que 2 GB funcionan), siendo 6–8 GB más cómodo. Para checkpoints SDXL, espera necesitar 8 GB de VRAM con optimizaciones de memoria activadas, y 12 GB o más para un uso cómodo. Las GPU NVIDIA son la ruta oficialmente recomendada y mejor soportada; AMD, Intel y Apple Silicon se admiten mediante instrucciones de configuración separadas y específicas de cada plataforma.',
          },
          {
            q: '¿Cuál es la diferencia entre AUTOMATIC1111 y Forge?',
            a: 'Forge es un fork del código de AUTOMATIC1111, creado por lllyasviel para añadir optimizaciones de rendimiento y soporte de modelos más nuevos como Flux. Según su README, se sincroniza con el original aproximadamente cada 90 días o para correcciones importantes. Su último push en GitHub fue el 31 de julio de 2025 y su última release de GitHub es del 5 de febrero de 2024, así que ya no es una opción claramente más activa — consulta su repositorio antes de elegirlo.',
          },
          {
            q: '¿Cuál es la diferencia entre AUTOMATIC1111 y ComfyUI?',
            a: 'AUTOMATIC1111 usa una interfaz basada en pestañas (campos de texto, deslizadores, botones) que generalmente es más accesible para principiantes. ComfyUI usa una interfaz de grafo de nodos donde conectas bloques que representan cada paso de procesamiento, ofreciendo un control más granular sobre pipelines complejos a costa de una curva de aprendizaje más pronunciada. ComfyUI también muestra una actividad de desarrollo más frecuente en 2026.',
          },
          {
            q: '¿Dónde descargo AUTOMATIC1111?',
            a: 'La fuente oficial es el [repositorio AUTOMATIC1111/stable-diffusion-webui en GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui), que incluye el código, una wiki de instalación y enlaces a instrucciones de configuración específicas para hardware NVIDIA, AMD, Intel y Apple Silicon. Necesitarás descargar por separado los pesos del modelo Stable Diffusion (por ejemplo, desde Hugging Face) para usarlo.',
          },
          {
            q: '¿Sigue manteniéndose Stable Diffusion WebUI Forge?',
            a: 'Su último push en GitHub fue el 31 de julio de 2025, y su última release de GitHub es del 5 de febrero de 2024. Su README indica que se basa en SD-WebUI 1.10.1. Consulta el repositorio por si hay actividad más reciente antes de elegirlo.',
          },
          {
            q: '¿Sigue manteniéndose la extensión ControlNet para AUTOMATIC1111?',
            a: 'El repositorio sd-webui-controlnet recibió su último push el 12 de agosto de 2024 y no tiene releases de GitHub. Se sigue usando mucho, pero revisa su repositorio y sus issues abiertas antes de depender de ella en un flujo de producción.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'AUTOMATIC1111 se ganó su lugar como interfaz local por defecto de Stable Diffusion por ser la primera, y su ecosistema — la extensión ControlNet sobre todo, junto a miles de herramientas comunitarias, tutoriales y respuestas en foros — sigue siendo su mayor activo. Pero el proyecto no recibe actualizaciones desde el 2 de marzo de 2026, su última versión etiquetada es v1.10.1, su fork Forge no ha recibido ningún push desde el 31 de julio de 2025, y la principal extensión ControlNet recibió su último push el 12 de agosto de 2024. Sigue instalándose y funcionando con checkpoints de SD 1.5 y SDXL, así que quienes ya lo usan no tienen un motivo urgente para cambiar. Quien empiece de cero debería comparar ComfyUI, InvokeAI y SD.Next, con desarrollo activo, en lugar de elegir AUTOMATIC1111 solo por su fama, y comprobar primero que funciona con su GPU y su modelo.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[AUTOMATIC1111/stable-diffusion-webui en GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — repositorio oficial, código, versiones e historial de commits.',
          '[AUTOMATIC1111/stable-diffusion-webui Releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — fechas de versión verificadas, incluyendo v1.10.1 (código del 27 de julio de 2024; publicado el 9 de febrero de 2025).',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — texto completo de la licencia AGPL-3.0.',
          '[AUTOMATIC1111/stable-diffusion-webui Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) — guías de instalación para NVIDIA, AMD, Intel y Apple Silicon.',
          '[Stable Diffusion WebUI Forge en GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge) — declaración del README sobre el ritmo de desarrollo de AUTOMATIC1111 y la política de sincronización cada 90 días de Forge.',
          '[Mikubill/sd-webui-controlnet en GitHub](https://github.com/Mikubill/sd-webui-controlnet) — la extensión ControlNet para AUTOMATIC1111.',
          '[ComfyUI en GitHub](https://github.com/comfy-org/ComfyUI), [InvokeAI en GitHub](https://github.com/invoke-ai/InvokeAI), [Fooocus en GitHub](https://github.com/lllyasviel/Fooocus) y [SD.Next en GitHub](https://github.com/vladmandic/sdnext) — repositorios de interfaces alternativas referenciados para la comparación.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Stable Diffusion: modelos abiertos de texto a imagen](/es/power-local-llm/stable-diffusion-review) — qué es realmente el modelo subyacente, términos de licencia según la versión y requisitos de hardware.',
          '[Reseña de Real-ESRGAN: escalador de imágenes con IA](/es/power-local-llm/real-esrgan-ai-image-upscaler-review) — una herramienta local complementaria para escalar imágenes generadas en AUTOMATIC1111 o cualquier otra interfaz.',
          '[Generación de imágenes con IA local vs. la nube](/es/power-local-llm/local-ai-image-generation-vs-cloud) — una comparación más profunda de opciones de generación local de imágenes frente a herramientas en la nube como Midjourney y Adobe Firefly.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/automatic1111-review-hero-fr.webp',
    title: 'Avis AUTOMATIC1111: Stable Diffusion WebUI expliqué',
    seoTitle: 'AUTOMATIC1111 Avis: Guide Stable Diffusion WebUI',
    intro:
      'AUTOMATIC1111 — officiellement "Stable Diffusion web UI" — est une interface web gratuite, open source et organisée en onglets pour exécuter des modèles Stable Diffusion sur votre propre GPU. Publiée sur GitHub le 22 août 2022, un mois après le lancement public de Stable Diffusion, elle est devenue la première interface graphique largement adoptée pour la génération d\'images en local et reste décrite par des avis tiers comme l\'une des options les plus utilisées et les mieux documentées de la catégorie, grâce à un immense écosystème d\'extensions (ControlNet, entraînement de LoRA et des milliers de scripts communautaires). Cet avis explique ce qu\'est réellement AUTOMATIC1111, en quoi il diffère du modèle Stable Diffusion et des interfaces plus récentes comme ComfyUI, Forge et InvokeAI, son véritable état de maintenance à l\'approche de 2026, ses conditions de licence, ses besoins matériels, et un avis honnête sur qui devrait — et ne devrait pas — l\'utiliser aujourd\'hui.',
    metaDescription:
      'Avis AUTOMATIC1111 : ce qu\'est Stable Diffusion WebUI, état de maintenance vérifié, licence AGPL-3.0, ControlNet, matériel requis et alternatives.',
    twitterDescription:
      'Avis AUTOMATIC1111 2026 : le Stable Diffusion WebUI original expliqué — état de maintenance vérifié, licence, écosystème d\'extensions, besoins matériels et comparaison avec Forge, ComfyUI et InvokeAI.',
    audience:
      'Lecteurs qui hésitent à installer Stable Diffusion WebUI d\'AUTOMATIC1111 pour la génération d\'images en local — couvre l\'état de maintenance vérifié, les conditions de licence, les besoins matériels, l\'écosystème d\'extensions et la comparaison avec des forks activement maintenus et des interfaces alternatives.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AUTOMATIC1111 review',
    targetKeywords: [
      'automatic1111 avis',
      'stable diffusion webui',
      'installer automatic1111',
      'automatic1111 vs comfyui',
      'automatic1111 vs forge',
      'automatic1111 controlnet',
      'maintenance stable diffusion webui',
      'licence automatic1111',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL', 'ControlNet', 'Stable Diffusion WebUI Forge', 'ComfyUI', 'InvokeAI', 'Fooocus'],
    current_hardware_mentioned: ['2 GB VRAM', '4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '12 GB VRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Avertissement : aucune mise à jour d\'AUTOMATIC1111 depuis le 2 mars 2026 (dernière version v1.10.1, 9 février 2025) ; le projet n\'est peut-être plus maintenu — vérifiez avant usage.** **AUTOMATIC1111 est une interface web gratuite et open source (AGPL-3.0) pour exécuter Stable Diffusion en local, pas le modèle.**',
    quickAnswerTop: {
      fr: {
        question: 'AUTOMATIC1111 est-il encore maintenu, et est-ce la même chose que Stable Diffusion ?',
        answer:
          'Aucune mise à jour n\'a été publiée depuis le 2 mars 2026. AUTOMATIC1111 n\'est pas Stable Diffusion : c\'est une interface web distincte, gratuite et open source, qui charge les poids de modèles Stable Diffusion et permet de générer des images dans un onglet de navigateur. Sa dernière version étiquetée, v1.10.1, a été publiée le 9 février 2025, et la branche `dev` n\'a plus de commit depuis le 2 mars 2026. Forge, son fork le plus utilisé, qualifie l\'original de « almost static now », mais Forge n\'a lui-même reçu aucun push depuis le 31 juillet 2025. Il fonctionne encore dans de nombreuses configurations ; qui a besoin de nouvelles architectures de modèles devrait comparer ComfyUI, InvokeAI ou SD.Next.',
        bullets: [
          'AUTOMATIC1111 est une interface/un frontend, pas un modèle — vous devez quand même télécharger séparément les poids de Stable Diffusion et les charger dedans.',
          'Vérifié sur GitHub : la dernière version étiquetée (v1.10.1) a été publiée le 9 février 2025, et le dernier commit de la branche `dev` date du 2 mars 2026 — consultez le dépôt pour l\'état actuel.',
          'Gratuit et open source sous licence AGPL-3.0 ; il n\'existe aucun palier payant officiel ni offre hébergée.',
          'L\'écosystème d\'extensions — notamment l\'extension ControlNet pour guider pose et composition — est la principale raison pour laquelle il reste largement utilisé malgré un développement de base plus lent.',
          'Alternatives activement maintenues : ComfyUI, InvokeAI et SD.Next ont reçu des pushes le 2026-11-02, tandis que Forge, le fork bâti sur AUTOMATIC1111, n\'en a reçu aucun depuis le 31 juillet 2025.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce qu\'AUTOMATIC1111', anchor: 'what-is-automatic1111' },
      { label: 'Historique : pourquoi AUTOMATIC1111 existe', anchor: 'history' },
      { label: 'Installer et générer sa première image', anchor: 'how-to-install' },
      { label: 'État de maintenance : vérifié', anchor: 'maintenance-status' },
      { label: 'Extensions et l\'écosystème ControlNet', anchor: 'extensions-controlnet' },
      { label: 'Configuration matérielle requise', anchor: 'hardware-requirements' },
      { label: 'Licence et tarifs', anchor: 'license-pricing' },
      { label: 'AUTOMATIC1111 vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser AUTOMATIC1111', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser AUTOMATIC1111', anchor: 'who-should-not-use' },
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
          'AUTOMATIC1111 (Stable Diffusion web UI) est une interface web gratuite, open source et organisée en onglets pour exécuter Stable Diffusion en local — c\'est l\'application frontend, pas le modèle lui-même.',
          'Publié sur GitHub le 22 août 2022 par un développeur pseudonyme sous le nom "AUTOMATIC1111", un mois après le lancement public de Stable Diffusion, comblant l\'absence d\'interface graphique locale.',
          'Sous licence AGPL-3.0. Uniquement auto-hébergé, sans aucun palier payant officiel ni offre hébergée.',
          'Sa base de code principale a ralenti depuis mi-2024 : la dernière version étiquetée (v1.10.1) a été publiée le 9 février 2025, et le dernier commit de la branche `dev` date du 2 mars 2026 — consultez GitHub pour l\'état actuel.',
          'L\'écosystème d\'extensions, notamment l\'extension ControlNet pour guider pose/composition, reste son plus grand atout — l\'un des plus vastes catalogues d\'extensions communautaires parmi les interfaces de génération d\'images en local.',
          'Parmi les alternatives activement maintenues figurent ComfyUI, InvokeAI et SD.Next (pushes le 2026-11-02) ; Forge, le fork d\'AUTOMATIC1111, n\'a reçu aucun push depuis le 31 juillet 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Aucune mise à jour depuis le 2 mars 2026 (dernière version v1.10.1, 9 février 2025). AUTOMATIC1111 n\'est peut-être plus maintenu : vérifiez qu\'il fonctionne encore avec votre GPU et votre modèle avant de vous y fier.',
          },
        ],
      },
      whatIsAutomatic1111: {
        id: 'what-is-automatic1111',
        title: 'Qu\'est-ce qu\'AUTOMATIC1111',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 est une interface utilisateur gratuite, open source et basée sur navigateur, qui charge des fichiers de modèle Stable Diffusion et permet de générer des images via des onglets, boutons et champs de texte plutôt qu\'une ligne de commande.' },
          { type: 'plain-terms', text: 'Si Stable Diffusion est le moteur, AUTOMATIC1111 est l\'un des tableaux de bord que l\'on peut y brancher — il ne génère pas d\'images à lui seul, et vous devez quand même télécharger séparément des poids de modèle Stable Diffusion avant qu\'il puisse faire quoi que ce soit.' },
        ],
        content: [
          'AUTOMATIC1111, officiellement nommé "Stable Diffusion web UI", est une application Python construite sur la bibliothèque [Gradio](https://www.gradio.app/) qui propose une interface basée sur navigateur, organisée en onglets, pour des flux texte-vers-image (txt2img), image-vers-image (img2img), inpainting, outpainting et upscaling avec des modèles Stable Diffusion. Elle fonctionne entièrement sur votre propre machine et GPU — aucune image ni aucun prompt n\'est envoyé à un serveur tiers, sauf si vous installez délibérément une extension qui le fait.',
          'Le nom du projet vient du pseudonyme GitHub de son créateur, AUTOMATIC1111 — un développeur pseudonyme dont l\'identité réelle n\'a pas été rendue publique. Le projet est souvent simplement appelé "A1111" dans les discussions communautaires.',
          '**AUTOMATIC1111 est une interface, pas un modèle.** Il n\'est pas livré avec des poids Stable Diffusion inclus — vous devez télécharger séparément un fichier checkpoint (SD 1.5, SDXL ou un fine-tune communautaire) et le placer dans le bon dossier avant de pouvoir générer quoi que ce soit. Voir [l\'avis Stable Diffusion de PromptQuorum](/fr/power-local-llm/stable-diffusion-review) pour savoir ce qu\'est réellement le modèle sous-jacent et ses conditions de licence selon la version.',
          'C\'est l\'un des nombreux frontends concurrents pour Stable Diffusion, aux côtés de [ComfyUI](https://github.com/comfy-org/ComfyUI) (une interface à base de graphe de nœuds offrant un contrôle plus granulaire du workflow), [InvokeAI](https://github.com/invoke-ai/InvokeAI) (une interface plus soignée, orientée usage professionnel), [Fooocus](https://github.com/lllyasviel/Fooocus) (une interface simplifiée visant le moins de clics possible pour obtenir une image exploitable), et [Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (un fork d\'AUTOMATIC1111 lui-même, traité dans la section maintenance ci-dessous).',
        ],
      },
      history: {
        id: 'history',
        title: 'Historique : pourquoi AUTOMATIC1111 existe',
        content: [
          'Stability AI, le groupe de recherche CompVis de la LMU de Munich et Runway ML ont publiquement lancé Stable Diffusion le 22 août 2022. Au lancement, Stable Diffusion était distribué sous forme de poids de modèle et de scripts en ligne de commande — il n\'existait aucune interface graphique officielle pour taper un prompt et cliquer sur un bouton.',
          `AUTOMATIC1111 a publié la première version de Stable Diffusion web UI sur GitHub ce même jour, le 22 août 2022, en s'appuyant sur des scripts communautaires antérieurs et en ajoutant une interface navigateur basée sur Gradio. Le timing l'a placé au bon endroit au bon moment : quand la popularité de Stable Diffusion a explosé fin 2022, l'interface d'AUTOMATIC1111 est devenue la manière par défaut dont la plupart des amateurs l'utilisaient réellement, accumulant des dizaines de milliers d'étoiles GitHub en quelques mois et, désormais plus de ${ST.fr('automatic1111-webui', 'bare')} étoiles — parmi les dépôts les plus étoilés de la catégorie génération d'images IA en local.`,
          'Étant arrivé le premier et ayant absorbé la majorité des contributions communautaires précoces, des auteurs d\'extensions et des rédacteurs de tutoriels, AUTOMATIC1111 est devenu l\'implémentation de référence de facto à laquelle les interfaces ultérieures (Forge, extensions ComfyUI, sites de documentation communautaire) continuent de se référer pour décrire fonctionnalités et workflows, même là où ces outils plus récents ont depuis adopté une approche technique différente.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Comment installer AUTOMATIC1111 et générer sa première image',
        content: [
          'Les étapes d\'installation et de première utilisation sont globalement les mêmes sous Windows, Linux et Mac, bien que les commandes exactes diffèrent selon la plateforme — confirmez toujours les étapes actuelles sur le wiki du projet avant de commencer, car les versions de dépendances peuvent changer.',
        ],
        numberedItems: [
          { title: 'Installer les prérequis : Python et Git', whyItMatters: 'AUTOMATIC1111 n\'est pas un installateur en un seul fichier — il nécessite une version compatible de Python et Git déjà installés sur votre système avant que son propre script d\'installation puisse s\'exécuter.' },
          { title: 'Cloner ou télécharger le dépôt', whyItMatters: 'Récupérez le code depuis le [dépôt GitHub officiel](https://github.com/AUTOMATIC1111/stable-diffusion-webui) via `git clone`, ou téléchargez-le en ZIP — cloner rend les futures mises à jour via `git pull` bien plus simples.' },
          { title: 'Exécuter le script de lancement de la plateforme', whyItMatters: '`webui-user.bat` sous Windows ou `webui.sh` sous Linux/Mac crée automatiquement un environnement virtuel Python et installe les dépendances requises au premier lancement — cette étape peut prendre plusieurs minutes et nécessite une connexion internet stable.' },
          { title: 'Télécharger un checkpoint Stable Diffusion', whyItMatters: 'AUTOMATIC1111 n\'inclut aucun poids de modèle. Téléchargez un fichier checkpoint (par exemple depuis [Hugging Face](https://huggingface.co/stabilityai)) et placez-le dans le dossier `models/Stable-diffusion` — voir [l\'avis Stable Diffusion de PromptQuorum](/fr/power-local-llm/stable-diffusion-review) pour les détails de version et de licence.' },
          { title: 'Ouvrir l\'interface web locale', whyItMatters: 'Une fois la configuration terminée, le script démarre un serveur web local (généralement sur `http://127.0.0.1:7860`) et l\'interface s\'ouvre automatiquement dans votre navigateur — à partir de là, tout fonctionne en local, pas dans le cloud.' },
          { title: 'Saisir un prompt dans l\'onglet txt2img et cliquer sur Generate', whyItMatters: 'Tapez une description, laissez les réglages d\'échantillonnage par défaut pour votre premier essai, et cliquez sur Generate — la première inférence est généralement plus lente le temps que le modèle se charge en VRAM.' },
          { title: 'Installer des extensions une fois à l\'aise', whyItMatters: 'L\'onglet Extensions intégré permet d\'ajouter des outils communautaires comme ControlNet directement depuis une liste — voir la section extensions ci-dessous avant d\'installer quoi que ce soit provenant d\'une source inconnue.' },
        ],
        note: 'Les commandes exactes, versions de dépendances et étapes de dépannage évoluent avec le temps — suivez le [wiki d\'installation](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) actuel du projet plutôt qu\'un guide générique, les problèmes de compatibilité de pilotes GPU et de version Python étant la cause la plus courante d\'échec d\'installation.',
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'État de maintenance : vérifié',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 n\'a reçu aucune mise à jour depuis le 2 mars 2026 : sa dernière version étiquetée était v1.10.1 (publiée le 9 février 2025), et son fork le plus populaire décrit le projet d\'origine comme « almost static now » dans son README.' },
          { type: 'plain-terms', text: 'Le projet fonctionne encore et reste très utilisé, mais personne n\'y a poussé de mise à jour depuis le 2 mars 2026 ; la prise en charge des nouveaux types de modèles apparaît donc plutôt dans des outils activement développés comme ComfyUI, InvokeAI ou SD.Next.' },
        ],
        columns: ['Signal', 'État vérifié', 'Source'],
        rows: [
          { 'Signal': 'Dernière version taguée', 'État vérifié': 'v1.10.1 — code du 27 juillet 2024 ; notes de version publiées le 9 février 2025', 'Source': '[GitHub releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)' },
          { 'Signal': 'Dernier commit sur la branche `master`', 'État vérifié': '27 juillet 2024', 'Source': '[Historique de commits GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commits/master)' },
          { 'Signal': 'Dernier commit sur la branche `dev`', 'État vérifié': '2 mars 2026 (fusion de la PR #17313) ; aucun commit sur `dev` depuis', 'Source': 'Historique de commits GitHub (vérifiez la date actuelle avant de citer)' },
          { 'Signal': 'Issues ouvertes', 'État vérifié': '2 429 ouvertes (recherche d\'issues GitHub, 2026-11-02)', 'Source': '[GitHub issues](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues)' },
          { 'Signal': 'Évaluation du mainteneur du fork', 'État vérifié': '"Because original SD-WebUI is almost static now, Forge will sync with original WebUI every 90 days, or when important fixes" — citation directe du README du projet Forge', 'Source': '[Forge README](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Signal': 'Fork Forge : dernier push', 'État vérifié': '31 juillet 2025 ; sa dernière release GitHub date du 5 février 2024', 'Source': '[Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Signal': 'Extension ControlNet : dernier push', 'État vérifié': '12 août 2024 ; aucune release GitHub', 'Source': '[sd-webui-controlnet sur GitHub](https://github.com/Mikubill/sd-webui-controlnet)' },
        ],
        content: [
          'Cette section indique ce qui a pu être vérifié directement auprès de l\'API GitHub le 2026-11-02, plutôt que de répéter des affirmations de seconde main. AUTOMATIC1111 n\'a reçu aucune mise à jour depuis le 2 mars 2026 : la branche stable `master`, vers laquelle pointent la plupart des installeurs en un clic et de la documentation, n\'a pas changé depuis le 27 juillet 2024, et la branche `dev` n\'a aucun commit après le 2 mars 2026. Le dépôt n\'est pas archivé et le mainteneur n\'a pas annoncé son abandon, mais il faut le considérer comme potentiellement non maintenu.',
          'Le signal extérieur le plus crédible vient de lllyasviel, développeur de Forge, un fork bâti sur la base de code d\'AUTOMATIC1111. Le README de Forge indique qu\'il se synchronisera « with original WebUI every 90 days, or when important fixes », parce que « original SD-WebUI is almost static now ». C\'est le mainteneur d\'un fork qui décrit le rythme d\'AUTOMATIC1111, pas une rumeur. Forge lui-même n\'a reçu aucun push depuis le 31 juillet 2025 : il ne prouve donc plus l\'existence d\'une alternative active.',
          'Rien de tout cela ne signifie qu\'AUTOMATIC1111 cesse de fonctionner. Il reste utilisable pour les workflows Stable Diffusion 1.5 et SDXL, et sa base installée et sa couverture de tutoriels restent supérieures à celles de la plupart des alternatives. L\'implication pratique concerne l\'avenir : qui a besoin de nouvelles architectures de modèles ou de corrections rapides devrait comparer ComfyUI, InvokeAI et SD.Next, tous poussés le 2026-11-02, grâce au tableau comparatif ci-dessous.',
        ],
        note: 'Les données d\'activité GitHub évoluent en continu : les chiffres ci-dessus ont été vérifiés auprès de l\'API GitHub le 2026-11-02. Consultez [le dépôt](https://github.com/AUTOMATIC1111/stable-diffusion-webui) pour les valeurs actuelles avant de vous fier à ce tableau pour une décision urgente.',
      },
      extensionsControlnet: {
        id: 'extensions-controlnet',
        title: 'Extensions et l\'écosystème ControlNet',
        content: [
          'L\'onglet Extensions intégré d\'AUTOMATIC1111 permet aux utilisateurs d\'installer des modules communautaires directement depuis une liste organisée ou une URL Git, sans modifier de code. Ce système d\'extensions, combiné à la taille de la base d\'utilisateurs depuis 2022, a produit l\'un des plus vastes catalogues d\'outils Stable Diffusion parmi toutes les interfaces.',
          'L\'extension la plus utilisée de loin est [sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) (souvent simplement appelée "ControlNet" dans l\'interface), qui permet à une image de référence — un squelette de pose, une carte de profondeur, un contour de bords canny, ou une esquisse approximative — de guider la composition d\'une image générée avec bien plus de précision qu\'un prompt texte seul. Elle est largement considérée par la communauté comme l\'extension qui a le plus changé la façon de travailler dans AUTOMATIC1111, et reste l\'une des extensions Stable Diffusion les plus étoilées sur GitHub. PromptQuorum traite ControlNet plus en détail dans un article dédié (voir Lectures complémentaires ci-dessous).',
          'Au-delà de ControlNet, la liste d\'extensions comprend des outils pour l\'entraînement et la gestion de LoRA (Low-Rank Adaptation), la navigation et l\'étiquetage d\'images, le suivi de l\'historique des prompts, et des scripts d\'automatisation de workflow. Comme les extensions sont maintenues par la communauté et indépendantes du propre rythme de sortie d\'AUTOMATIC1111, certaines extensions peuvent être mises à jour activement même pendant des périodes où le projet principal voit moins de commits — mais cela signifie aussi que la qualité et la fréquence des mises à jour varient fortement selon l\'auteur, donc vérifiez l\'activité du dépôt d\'une extension avant de vous y fier pour un workflow de production.',
        ],
        note: 'Vérifiez toujours la source et les permissions d\'une extension avant de l\'installer — une extension s\'exécute dans le même processus Python qu\'AUTOMATIC1111 lui-même et n\'est pas isolée (sandboxée).',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Configuration matérielle requise',
        itemHeadings: true,
        columns: ['Charge de travail', 'VRAM minimum', 'VRAM confortable', 'Remarques'],
        rows: [
          { 'Charge de travail': 'Checkpoints SD 1.5', 'VRAM minimum': '4 Go VRAM (2 Go signalés fonctionnels)', 'VRAM confortable': '6–8 Go VRAM', 'Remarques': 'Charge la plus légère ; fonctionne sur la plupart des GPU de la dernière décennie selon la documentation du projet' },
          { 'Charge de travail': 'Checkpoints SDXL', 'VRAM minimum': '8 Go VRAM (avec optimisations)', 'VRAM confortable': '12 Go+ VRAM', 'Remarques': 'La sortie native 1024×1024 est plus lourde par image que SD 1.5' },
          { 'Charge de travail': 'Extension ControlNet active', 'VRAM minimum': 'Ajoute environ 1–2 Go VRAM au checkpoint de base', 'VRAM confortable': 'À prévoir en conséquence', 'Remarques': 'Le surcoût exact dépend du modèle ControlNet et du préprocesseur chargés' },
          { 'Charge de travail': 'GPU AMD / Intel, Apple Silicon', 'VRAM minimum': 'Pris en charge via des voies de configuration séparées', 'VRAM confortable': 'Performance variable selon la plateforme', 'Remarques': 'NVIDIA est la voie officiellement recommandée et la mieux prise en charge ; AMD, Intel et Apple Silicon nécessitent chacun des instructions d\'installation distinctes, documentées sur le wiki du projet' },
        ],
        note: 'L\'usage exact de VRAM dépend de la résolution, de la taille de lot, des extensions actives et des drapeaux d\'optimisation en ligne de commande (par ex. `--medvram`, `--lowvram`) — à considérer comme des fourchettes de planification, et consultez la [page wiki des dépendances](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies) actuelle du projet pour des indications à jour.',
      },
      licensePricing: {
        id: 'license-pricing',
        title: 'Licence et tarifs',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 est sous licence AGPL-3.0 (GNU Affero General Public License v3.0) et est gratuit à télécharger, auto-héberger et modifier, sans aucun palier payant officiel ni offre hébergée.' },
          { type: 'plain-terms', text: 'Il n\'y a ni abonnement, ni version premium, ni entreprise vendant AUTOMATIC1111 comme produit — c\'est un projet open source maintenu par la communauté que vous exécutez vous-même, et votre seul coût est votre propre matériel et l\'électricité.' },
        ],
        content: [
          'La base de code d\'AUTOMATIC1111 est publiée sous licence AGPL-3.0, confirmée directement sur son [dépôt GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui). AGPL-3.0 est une licence copyleft forte : elle autorise l\'usage, la modification et la redistribution gratuits, mais si vous modifiez le code et l\'exécutez comme un service réseau avec lequel d\'autres personnes interagissent, la licence exige généralement que vous mettiez également le code source modifié à la disposition de ces utilisateurs. Cela diffère des poids du modèle Stable Diffusion lui-même, qui portent leurs propres conditions de licence distinctes selon la version téléchargée — voir [l\'avis Stable Diffusion de PromptQuorum](/fr/power-local-llm/stable-diffusion-review) pour ces détails, la licence de l\'interface et celle du modèle étant deux documents juridiques séparés.',
          'Il n\'existe aucun palier payant officiel, abonnement ou version hébergée d\'AUTOMATIC1111 proposé par son mainteneur. Des services cloud tiers existent pour héberger des instances d\'AUTOMATIC1111 contre paiement (temps GPU loué), mais ce sont des entreprises indépendantes, pas un produit officiel — vérifiez séparément les conditions et tarifs de tout service de ce type avant de payer, et notez qu\'utiliser un hébergement tiers signifie que vos prompts et images transitent par l\'infrastructure de ce fournisseur plutôt que de rester entièrement en local.',
        ],
        note: 'Le texte complet de la licence peut être lu dans le [LICENSE.txt sur GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) du projet — cette section est un résumé, pas un conseil juridique, et la clause d\'usage réseau de l\'AGPL-3.0 est particulièrement pertinente si vous envisagez de proposer AUTOMATIC1111 comme service hébergé à d\'autres.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AUTOMATIC1111 vs. alternatives',
        columns: ['Option', 'Idéal pour', 'Rythme de maintenance (2026)', 'Licence', 'Compromis clé'],
        rows: [
          {
            'Option': 'AUTOMATIC1111 (Stable Diffusion web UI)',
            'Idéal pour': 'Une des plus grandes bases de tutoriels/extensions, simplicité des onglets',
            'Rythme de maintenance (2026)': 'Aucune mise à jour depuis le 2 mars 2026 ; `master` inchangée depuis le 27 juillet 2024',
            'Licence': 'AGPL-3.0',
            'Compromis clé': 'Option la mieux documentée, mais le support des nouveaux modèles arrive souvent d\'abord dans des forks',
          },
          {
            'Option': '[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Idéal pour': 'Interface familière type AUTOMATIC1111 avec support plus rapide des fonctionnalités et nouveaux modèles',
            'Rythme de maintenance (2026)': 'Aucun push depuis le 31 juillet 2025 ; dernière release GitHub du 5 février 2024',
            'Licence': 'AGPL-3.0',
            'Compromis clé': 'Communauté plus petite qu\'AUTOMATIC1111 lui-même ; suit toujours la structure générale de la base de code originale',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Idéal pour': 'Contrôle granulaire du pipeline de génération via un graphe de nœuds',
            'Rythme de maintenance (2026)': 'Développé activement, commits fréquents',
            'Licence': 'GPL-3.0',
            'Compromis clé': 'Courbe d\'apprentissage plus raide que la disposition en onglets d\'AUTOMATIC1111 ; les graphes de nœuds sont plus puissants mais moins accessibles aux débutants',
          },
          {
            'Option': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Idéal pour': 'Interface soignée, orientée usage professionnel, avec workflow basé sur un canevas',
            'Rythme de maintenance (2026)': 'Développé activement',
            'Licence': 'Apache-2.0',
            'Compromis clé': 'Écosystème d\'extensions plus restreint qu\'AUTOMATIC1111 ; interface plus normée avec moins de scripts communautaires dispersés',
          },
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Idéal pour': 'Le moins de clics possible pour obtenir une image exploitable, configuration minimale',
            'Rythme de maintenance (2026)': 'Dernier push le 1er décembre 2025 ; dernière release v2.5.5 (12 août 2024)',
            'Licence': 'GPL-3.0',
            'Compromis clé': 'Volontairement moins de réglages et moins de support d\'extensions en échange de la simplicité',
          },
          {
            'Option': '[SD.Next](https://github.com/vladmandic/sdnext)',
            'Idéal pour': 'Interface tout-en-un type AUTOMATIC1111 avec un support de modèles et de matériel plus large',
            'Rythme de maintenance (2026)': 'Développé activement, commits fréquents',
            'Licence': 'Apache-2.0',
            'Compromis clé': 'Communauté et base de tutoriels plus restreintes qu\'AUTOMATIC1111 malgré des fonctionnalités équivalentes ou supérieures',
          },
        ],
        note: 'Le rythme de maintenance repose sur l\'activité publique de push et de release vérifiée sur GitHub le 2026-11-02 et peut changer — consultez le dépôt de chaque projet avant de choisir sur la seule base de l\'activité. Voir l\'[avis Stable Diffusion](/power-local-llm/stable-diffusion-review) pour la comparaison des modèles et [Génération d\'images IA locale vs cloud](/power-local-llm/local-ai-image-generation-vs-cloud) pour les compromis local/cloud.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser AUTOMATIC1111',
        items: [
          '**Le lecteur qui veut l\'une des plus grandes bases de tutoriels et de réponses communautaires.** Étant arrivé le premier sur le marché et ayant l\'historique d\'installation le plus long, une grande partie des posts de forum, tutoriels YouTube et réponses type Stack Overflow sur les interfaces Stable Diffusion font spécifiquement référence à AUTOMATIC1111.',
          '**Lecteur qui veut ControlNet et un catalogue d\'extensions mature.** L\'extension ControlNet et des milliers d\'autres modules communautaires sont très utilisés ; consultez le dépôt de chaque extension avant de vous y fier, car l\'extension ControlNet principale a reçu son dernier push le 12 août 2024.',
          '**Le lecteur qui préfère une interface à onglets à un graphe de nœuds.** La disposition d\'AUTOMATIC1111 — champs de texte, curseurs et boutons organisés en onglets — est généralement plus abordable pour un débutant que le canevas à nœuds de ComfyUI.',
          '**Le lecteur qui veut un contrôle local total et la confidentialité.** Une fois installé, la génération se fait entièrement sur votre propre GPU ; aucun prompt ni donnée d\'image ne quitte votre machine, sauf si vous installez une extension qui le fait.',
          '**Le lecteur à budget serré qui veut un coût de licence nul pour l\'interface elle-même.** L\'AGPL-3.0 signifie que le logiciel est gratuit à utiliser, modifier et redistribuer, sans aucun abonnement.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser AUTOMATIC1111',
        items: [
          '**Lecteur qui veut la prise en charge des architectures de modèles les plus récentes.** Sans mise à jour depuis le 2 mars 2026, la prise en charge de nouveaux modèles apparaît plutôt dans des outils activement développés comme ComfyUI, InvokeAI ou SD.Next — comparez-les d\'abord.',
          '**Le lecteur qui veut une application en un clic sans aucune exposition à la ligne de commande.** L\'installation nécessite Python et Git et, sur certains systèmes, un dépannage manuel des versions de dépendances — les lecteurs voulant une expérience d\'application grand public totalement soignée préféreront peut-être l\'installateur simplifié de Fooocus ou un outil cloud.',
          '**Le lecteur qui a besoin de corrections de bugs actives et garanties sur le dépôt principal selon un calendrier prévisible.** Avec plus de 2 400 issues ouvertes et aucune nouvelle version taguée depuis juillet 2024 sur la branche `master`, les lecteurs ayant une exigence de fiabilité stricte ne devraient pas présumer d\'un traitement rapide d\'un bug nouvellement signalé.',
          '**Le lecteur qui veut un contrôle maximal du workflow sur des pipelines multi-étapes.** L\'approche par graphe de nœuds de ComfyUI offre généralement un contrôle plus précis sur des pipelines de génération complexes et multi-étapes que la disposition en onglets d\'AUTOMATIC1111.',
          '**L\'équipe d\'entreprise qui a besoin d\'un produit soutenu par un éditeur avec un SLA.** AUTOMATIC1111 est un projet communautaire sans contrat de support officiel, palier payant ni accord de niveau de service — les équipes ayant besoin d\'un support contractuel devraient plutôt évaluer un produit commercial cloud de génération d\'images.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'AUTOMATIC1111 est-il la même chose que Stable Diffusion ?',
            a: 'Non. Stable Diffusion est la famille de modèles ouverts sous-jacente ; AUTOMATIC1111 (Stable Diffusion web UI) est une interface frontend gratuite et distincte qui charge ces poids de modèle et permet de générer des images depuis un navigateur. Il vous faut les deux : les poids du modèle (téléchargés séparément) et une interface comme AUTOMATIC1111 pour réellement les utiliser.',
          },
          {
            q: 'AUTOMATIC1111 est-il encore maintenu en 2026 ?',
            a: 'Aucune mise à jour n\'a été publiée depuis le 2 mars 2026. Sa dernière version étiquetée, v1.10.1, date du 9 février 2025, et la branche `dev` n\'a aucun commit depuis le 2 mars 2026. Le README de Forge qualifie l\'original de « almost static now », et Forge lui-même n\'a reçu aucun push depuis le 31 juillet 2025. Il fonctionne encore, mais considérez-le comme potentiellement non maintenu et comparez ComfyUI, InvokeAI ou SD.Next.',
          },
          {
            q: 'AUTOMATIC1111 est-il gratuit ?',
            a: 'Oui. Il est sous licence AGPL-3.0 et gratuit à télécharger, auto-héberger et modifier. Il n\'existe aucun palier payant officiel, abonnement ou offre hébergée — votre seul coût est votre propre matériel et l\'électricité. Vous devrez tout de même télécharger séparément les poids du modèle Stable Diffusion, qui ont leurs propres conditions de licence.',
          },
          {
            q: 'Qu\'est-ce que ControlNet dans AUTOMATIC1111 ?',
            a: 'ControlNet est de loin l\'extension communautaire la plus utilisée pour AUTOMATIC1111. Elle permet à une image de référence — comme un squelette de pose, une carte de profondeur ou un contour de bords — de guider la composition d\'une image générée avec bien plus de précision qu\'un prompt texte seul. Elle s\'installe via l\'onglet Extensions intégré et ne fait pas partie de la base de code principale d\'AUTOMATIC1111.',
          },
          {
            q: 'Quel matériel me faut-il pour exécuter AUTOMATIC1111 ?',
            a: 'Pour les checkpoints SD 1.5, 4 Go de VRAM constituent le minimum documenté (certains rapports mentionnant 2 Go fonctionnels), 6–8 Go étant plus confortables. Pour les checkpoints SDXL, prévoyez environ 8 Go de VRAM avec les optimisations mémoire activées, et 12 Go ou plus pour un usage confortable. Les GPU NVIDIA constituent la voie officiellement recommandée et la mieux prise en charge ; AMD, Intel et Apple Silicon sont pris en charge via des instructions de configuration distinctes et spécifiques à chaque plateforme.',
          },
          {
            q: 'Quelle est la différence entre AUTOMATIC1111 et Forge ?',
            a: 'Forge est un fork de la base de code d\'AUTOMATIC1111, créé par lllyasviel pour ajouter des optimisations de performance et la prise en charge de modèles plus récents comme Flux. Selon son README, il se synchronise avec l\'original environ tous les 90 jours ou pour des correctifs importants. Son dernier push sur GitHub date du 31 juillet 2025 et sa dernière release GitHub du 5 février 2024 : ce n\'est donc plus un choix clairement plus actif — consultez son dépôt avant de le choisir.',
          },
          {
            q: 'Quelle est la différence entre AUTOMATIC1111 et ComfyUI ?',
            a: 'AUTOMATIC1111 utilise une interface à onglets (champs de texte, curseurs, boutons) généralement plus abordable pour les débutants. ComfyUI utilise une interface à graphe de nœuds où vous connectez des blocs représentant chaque étape de traitement, offrant un contrôle plus granulaire sur des pipelines complexes au prix d\'une courbe d\'apprentissage plus raide. ComfyUI affiche aussi une activité de développement plus fréquente en 2026.',
          },
          {
            q: 'Où télécharger AUTOMATIC1111 ?',
            a: 'La source officielle est le [dépôt AUTOMATIC1111/stable-diffusion-webui sur GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui), qui inclut le code, un wiki d\'installation et des liens vers des instructions de configuration spécifiques au matériel NVIDIA, AMD, Intel et Apple Silicon. Vous devrez télécharger séparément des poids de modèle Stable Diffusion (par exemple depuis Hugging Face) pour l\'utiliser.',
          },
          {
            q: 'Stable Diffusion WebUI Forge est-il toujours maintenu ?',
            a: 'Son dernier push sur GitHub date du 31 juillet 2025, et sa dernière release GitHub du 5 février 2024. Son README indique qu\'il repose sur SD-WebUI 1.10.1. Consultez le dépôt pour une activité plus récente avant de le choisir.',
          },
          {
            q: 'L\'extension ControlNet pour AUTOMATIC1111 est-elle toujours maintenue ?',
            a: 'Le dépôt sd-webui-controlnet a reçu son dernier push le 12 août 2024 et n\'a aucune release GitHub. Elle reste très utilisée, mais consultez son dépôt et ses issues ouvertes avant de vous y fier pour un workflow de production.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'AUTOMATIC1111 a mérité sa place d\'interface locale par défaut pour Stable Diffusion en étant la première, et son écosystème — l\'extension ControlNet avant tout, ainsi que des milliers d\'autres outils communautaires, tutoriels et réponses de forum — reste son principal atout. Mais le projet n\'a reçu aucune mise à jour depuis le 2 mars 2026, sa dernière version étiquetée est v1.10.1, son fork Forge n\'a reçu aucun push depuis le 31 juillet 2025, et l\'extension ControlNet principale a reçu son dernier push le 12 août 2024. Il s\'installe et fonctionne encore avec des checkpoints SD 1.5 et SDXL, donc les utilisateurs actuels n\'ont pas de raison urgente de changer. Qui démarre devrait comparer ComfyUI, InvokeAI et SD.Next, activement développés, plutôt que de choisir AUTOMATIC1111 pour sa seule notoriété, et vérifier d\'abord qu\'il fonctionne avec son GPU et son modèle.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AUTOMATIC1111/stable-diffusion-webui sur GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — dépôt officiel, code, versions et historique de commits.',
          '[AUTOMATIC1111/stable-diffusion-webui Releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — dates de versions vérifiées, dont v1.10.1 (code du 27 juillet 2024 ; publié le 9 février 2025).',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — texte complet de la licence AGPL-3.0.',
          '[AUTOMATIC1111/stable-diffusion-webui Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) — guides d\'installation pour NVIDIA, AMD, Intel et Apple Silicon.',
          '[Stable Diffusion WebUI Forge sur GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge) — déclaration du README sur le rythme de développement d\'AUTOMATIC1111 et la politique de synchronisation tous les 90 jours de Forge.',
          '[Mikubill/sd-webui-controlnet sur GitHub](https://github.com/Mikubill/sd-webui-controlnet) — l\'extension ControlNet pour AUTOMATIC1111.',
          '[ComfyUI sur GitHub](https://github.com/comfy-org/ComfyUI), [InvokeAI sur GitHub](https://github.com/invoke-ai/InvokeAI), [Fooocus sur GitHub](https://github.com/lllyasviel/Fooocus) et [SD.Next sur GitHub](https://github.com/vladmandic/sdnext) — dépôts d\'interfaces alternatives référencés pour la comparaison.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Stable Diffusion : modèles ouverts texte-vers-image](/fr/power-local-llm/stable-diffusion-review) — ce qu\'est réellement le modèle sous-jacent, ses conditions de licence selon la version, et ses besoins matériels.',
          '[Avis Real-ESRGAN : agrandisseur d\'images IA](/fr/power-local-llm/real-esrgan-ai-image-upscaler-review) — un outil local complémentaire pour agrandir des images générées dans AUTOMATIC1111 ou toute autre interface.',
          '[Génération d\'images IA locale vs. cloud](/fr/power-local-llm/local-ai-image-generation-vs-cloud) — une comparaison plus approfondie des options de génération d\'images en local face à des outils cloud comme Midjourney et Adobe Firefly.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/automatic1111-review-hero-ja.webp',
    title: 'AUTOMATIC1111レビュー: Stable Diffusion WebUIを解説',
    seoTitle: 'AUTOMATIC1111レビュー:導入と保守状況',
    intro:
      'AUTOMATIC1111（正式名称「Stable Diffusion web UI」）は、自分のGPU上でStable Diffusionモデルを実行するための、無料・オープンソースでタブ形式のWebインターフェースです。Stable Diffusionの一般公開から1か月後の2022年8月22日にGitHubで公開され、ローカル画像生成向けとして広く採用された最初のグラフィカルなフロントエンドとなり、巨大な拡張機能エコシステム（ControlNet、LoRAトレーニング、数千のコミュニティスクリプト）のおかげで、第三者レビューでも今なおこのカテゴリで最も使われ、最もドキュメント化されたオプションの一つとされています。本レビューでは、AUTOMATIC1111が実際に何であるか、モデルであるStable Diffusion自体や、ComfyUI、Forge、InvokeAIといった新しいUIとの違い、2026年に向けた実際のメンテナンス状況、ライセンス条件、ハードウェア要件、そして今日誰が使うべきで誰が使うべきでないかについての正直な指針を扱います。',
    metaDescription:
      'AUTOMATIC1111とは何か、保守状況の検証結果、AGPL-3.0ライセンス、ControlNet、必要なハードウェア、代替ツールとの比較を解説するレビューです。',
    twitterDescription:
      'AUTOMATIC1111レビュー2026: 元祖Stable Diffusion WebUIを解説 — 検証済みのメンテナンス状況、ライセンス、拡張機能エコシステム、ハードウェア要件、Forge・ComfyUI・InvokeAIとの比較。',
    audience:
      'ローカル画像生成のためにAUTOMATIC1111のStable Diffusion WebUIを導入すべきか検討している読者向け — 検証済みのメンテナンス状況、ライセンス条件、ハードウェア要件、拡張機能エコシステム、活発に開発されているフォークや代替UIとの比較を扱う。',
    readTime: '12分で読了',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AUTOMATIC1111 review',
    targetKeywords: [
      'automatic1111 レビュー',
      'stable diffusion webui',
      'automatic1111 インストール',
      'automatic1111 vs comfyui',
      'automatic1111 vs forge',
      'automatic1111 controlnet',
      'stable diffusion webui メンテナンス',
      'automatic1111 ライセンス',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL', 'ControlNet', 'Stable Diffusion WebUI Forge', 'ComfyUI', 'InvokeAI', 'Fooocus'],
    current_hardware_mentioned: ['2 GB VRAM', '4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '12 GB VRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**警告:AUTOMATIC1111は2026年3月2日以降更新されておらず(最新リリースはv1.10.1、2025年2月9日)、メンテナンスされていない可能性があります。利用前に確認してください。** **AUTOMATIC1111(Stable Diffusion web UI)は、Stable Diffusionモデルをローカルで動かす無料のオープンソース(AGPL-3.0)のブラウザUIで、モデルそのものではありません。**',
    quickAnswerTop: {
      ja: {
        question: 'AUTOMATIC1111はまだメンテナンスされていますか。Stable Diffusionと同じものですか。',
        answer:
          '2026年3月2日以降、更新は公開されていません。AUTOMATIC1111はStable Diffusionそのものではなく、Stable Diffusionのモデル重みを読み込み、ブラウザのタブから画像を生成する、独立した無料のオープンソースのWebインターフェースです。最後のタグ付きリリースv1.10.1は2025年2月9日に公開され、`dev`ブランチには2026年3月2日以降コミットがありません。最も使われているフォークのForgeは元のプロジェクトを「almost static now」と呼んでいますが、Forge自身も2025年7月31日以降プッシュがありません。多くの環境でまだ動作しますが、新しいモデルアーキテクチャが必要な場合は、ComfyUI、InvokeAI、SD.Nextを比較してください。',
        bullets: [
          'AUTOMATIC1111はUI／フロントエンドであり、モデルではありません — Stable Diffusionの重みは別途ダウンロードして読み込む必要があります。',
          'GitHubで確認済み:最後のタグ付きリリース(v1.10.1)は2025年2月9日に公開され、`dev`ブランチの最後のコミットは2026年3月2日です。現在の状態はリポジトリで確認してください。',
          'AGPL-3.0ライセンスの下で無料かつオープンソース。公式の有料プランやホスティングプランは存在しません。',
          '拡張機能エコシステム、特にポーズや構図を誘導するControlNet拡張機能が、中核開発の減速にもかかわらず広く使われ続けている主な理由です。',
          '積極的にメンテナンスされている代替:ComfyUI、InvokeAI、SD.Nextは2026-11-02にプッシュがありました。一方、AUTOMATIC1111をベースにしたフォークのForgeは2025年7月31日以降プッシュがありません。',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'AUTOMATIC1111とは', anchor: 'what-is-automatic1111' },
      { label: '歴史: AUTOMATIC1111が存在する理由', anchor: 'history' },
      { label: 'インストールと最初の画像生成方法', anchor: 'how-to-install' },
      { label: 'メンテナンス状況: 検証結果', anchor: 'maintenance-status' },
      { label: '拡張機能とControlNetエコシステム', anchor: 'extensions-controlnet' },
      { label: 'ハードウェア要件', anchor: 'hardware-requirements' },
      { label: 'ライセンスと価格', anchor: 'license-pricing' },
      { label: 'AUTOMATIC1111 vs. 代替ツール', anchor: 'vs-alternatives' },
      { label: 'AUTOMATIC1111を使うべき人', anchor: 'who-should-use' },
      { label: 'AUTOMATIC1111を使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'AUTOMATIC1111（Stable Diffusion web UI）は、Stable Diffusionをローカルで実行するための無料・オープンソースでタブ形式のWebインターフェースであり、フロントエンドアプリであってモデル自体ではありません。',
          'Stable Diffusionの一般公開から1か月後の2022年8月22日、「AUTOMATIC1111」というハンドルネームを使う匿名の開発者によってGitHubで公開され、グラフィカルなローカルインターフェースの空白を埋めました。',
          'AGPL-3.0ライセンスの下で提供。セルフホスト専用で、公式の有料プランやホスティングプランはありません。',
          'メインのコードベースは2024年半ば以降ペースが落ちています。最後のタグ付きリリース(v1.10.1)は2025年2月9日に公開され、`dev`ブランチの最後のコミットは2026年3月2日です。現在の状態はGitHubで確認してください。',
          '拡張機能エコシステム、特にポーズ／構図誘導のためのControlNet拡張機能は、残された最大の強みです。ローカル画像生成UIの中でも最大級かつ最もドキュメント化されたコミュニティ拡張機能群の一つです。',
          '積極的にメンテナンスされている代替には、ComfyUI、InvokeAI、SD.Next(2026-11-02にプッシュ)があります。AUTOMATIC1111のフォークであるForgeは、2025年7月31日以降プッシュがありません。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年3月2日以降更新なし(最新リリースはv1.10.1、2025年2月9日)。AUTOMATIC1111はメンテナンスされていない可能性があります。頼る前に、お使いのGPUとモデルで動作することを確認してください。',
          },
        ],
      },
      whatIsAutomatic1111: {
        id: 'what-is-automatic1111',
        title: 'AUTOMATIC1111とは',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111は、Stable Diffusionのモデルファイルを読み込み、コマンドラインではなくタブ、ボタン、テキストフィールドを通じて画像を生成できる、無料・オープンソースのブラウザベースのユーザーインターフェースです。' },
          { type: 'plain-terms', text: 'Stable Diffusionがエンジンだとすれば、AUTOMATIC1111はそれに取り付けられる複数のダッシュボードのうちの一つです — それ単体では画像を生成できず、何かをする前に別途Stable Diffusionのモデル重みをダウンロードする必要があります。' },
        ],
        content: [
          '正式名称「Stable Diffusion web UI」であるAUTOMATIC1111は、[Gradio](https://www.gradio.app/)ライブラリ上に構築されたPythonアプリケーションで、Stable Diffusionモデルを使ったtxt2img（テキストから画像）、img2img（画像から画像）、インペインティング、アウトペインティング、アップスケーリングのワークフローを、ブラウザベースでタブ形式に整理されたインターフェースとして提供します。すべて自分のマシンとGPU上で完結して動作し、意図的にそうする拡張機能をインストールしない限り、画像やプロンプトが第三者サーバーに送信されることはありません。',
          'プロジェクト名は、開発者のGitHubハンドルネームであるAUTOMATIC1111に由来します — 実際の身元は公にされていない匿名の開発者です。コミュニティ内では単に「A1111」と呼ばれることも多くあります。',
          '**AUTOMATIC1111はUIであり、モデルではありません。** Stable Diffusionの重みは同梱されておらず、何かを生成する前に、チェックポイントファイル（SD 1.5、SDXL、またはコミュニティによるファインチューン）を別途ダウンロードして正しいフォルダに配置する必要があります。基盤となるモデル自体が実際何であるか、バージョンごとのライセンス条件については[PromptQuorumのStable Diffusionレビュー](/ja/power-local-llm/stable-diffusion-review)を参照してください。',
          'これはStable Diffusion向けに競合する複数のフロントエンドの一つであり、[ComfyUI](https://github.com/comfy-org/ComfyUI)（より細かなワークフロー制御を提供するノードグラフベースのインターフェース）、[InvokeAI](https://github.com/invoke-ai/InvokeAI)（より洗練されたプロ志向のUI）、[Fooocus](https://github.com/lllyasviel/Fooocus)（使える画像に到達するまでのクリック数を最小限に抑えたシンプルなインターフェース）、そして[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)（AUTOMATIC1111自体のフォークで、下記のメンテナンスのセクションで扱う）と並んで存在しています。',
        ],
      },
      history: {
        id: 'history',
        title: '歴史: AUTOMATIC1111が存在する理由',
        content: [
          'Stability AI、ミュンヘン大学（LMU）のCompVis研究グループ、Runway MLは、2022年8月22日にStable Diffusionを一般公開しました。公開時点でStable Diffusionはモデル重みとコマンドラインスクリプトとして提供され、プロンプトを入力してボタンをクリックするための公式なグラフィカルインターフェースは存在しませんでした。',
          `AUTOMATIC1111は同じ日、2022年8月22日にStable Diffusion web UIの最初のバージョンをGitHubで公開し、それ以前のコミュニティスクリプトを土台にしつつ、Gradioベースのブラウザインターフェースを追加しました。このタイミングが功を奏し、2022年後半にStable Diffusionの人気が爆発的に高まる中、AUTOMATIC1111のUIはほとんどの愛好家が実際に使う標準的な方法となり、数か月のうちに数万のGitHubスターを集め、現在は${ST.ja('automatic1111-webui', 'bare')}を超えるスターを獲得しています — ローカルAI画像生成カテゴリの中でも最もスターを集めたリポジトリの一つです。`,
          '最初に登場し、初期のコミュニティ貢献、拡張機能の作者、チュートリアル執筆者の大半を吸収したことで、AUTOMATIC1111は事実上の標準リファレンス実装となり、後発のUI（Forge、ComfyUIの拡張機能、コミュニティのドキュメントサイト）は、それらの新しいツールがすでに異なる技術的アプローチを取っている場合でも、機能やワークフローをAUTOMATIC1111との対比で説明し続けています。',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'AUTOMATIC1111をインストールして最初の画像を生成する方法',
        content: [
          'インストールと初回起動の手順は、Windows、Linux、Macで大枠は同じですが、正確なコマンドはプラットフォームによって異なります — 依存関係のバージョンは変わることがあるため、開始前に必ずプロジェクト自身のWikiで現在の手順を確認してください。',
        ],
        numberedItems: [
          { title: '前提条件をインストールする: PythonとGit', whyItMatters: 'AUTOMATIC1111は単一ファイルのインストーラーではありません — 独自のセットアップスクリプトを実行する前に、互換性のあるPythonのバージョンとGitがシステムにインストールされている必要があります。' },
          { title: 'リポジトリをクローンまたはダウンロードする', whyItMatters: '[公式GitHubリポジトリ](https://github.com/AUTOMATIC1111/stable-diffusion-webui)から`git clone`でコードを取得するか、ZIPとしてダウンロードします — クローンしておくと、`git pull`による今後の更新がはるかに簡単になります。' },
          { title: 'プラットフォームの起動スクリプトを実行する', whyItMatters: 'Windowsでは`webui-user.bat`、Linux/Macでは`webui.sh`が、初回実行時にPythonの仮想環境を自動的に作成し、必要な依存関係をインストールします — この手順には数分かかることがあり、安定したインターネット接続が必要です。' },
          { title: 'Stable Diffusionのチェックポイントをダウンロードする', whyItMatters: 'AUTOMATIC1111にはモデル重みが含まれていません。（例えば[Hugging Face](https://huggingface.co/stabilityai)から）チェックポイントファイルをダウンロードし、`models/Stable-diffusion`フォルダに配置してください — バージョンとライセンスの詳細は[PromptQuorumのStable Diffusionレビュー](/ja/power-local-llm/stable-diffusion-review)を参照してください。' },
          { title: 'ローカルのWebインターフェースを開く', whyItMatters: 'セットアップが完了すると、スクリプトはローカルWebサーバー（通常は`http://127.0.0.1:7860`）を起動し、UIがブラウザで自動的に開きます — ここから先はすべてクラウドではなくローカルで動作します。' },
          { title: 'txt2imgタブにプロンプトを入力してGenerateをクリックする', whyItMatters: '説明文を入力し、初回はデフォルトのサンプリング設定のままGenerateをクリックします — モデルがVRAMに読み込まれる間、初回の推論は通常より遅くなります。' },
          { title: '慣れてきたら拡張機能をインストールする', whyItMatters: '組み込みのExtensionsタブから、ControlNetのようなコミュニティツールをリストから直接追加できます — 見慣れないソースから何かをインストールする前に、下記の拡張機能のセクションを確認してください。' },
        ],
        note: '正確なコマンド、依存関係のバージョン、トラブルシューティングの手順は時間とともに変化します — GPUドライバーとPythonのバージョン互換性がインストール失敗の最も一般的な原因であるため、汎用的なガイドではなく、プロジェクトの現在の[インストールWiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki)に従ってください。',
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'メンテナンス状況: 検証結果',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111は2026年3月2日以降更新されていません。最後のタグ付きリリースはv1.10.1(2025年2月9日公開)で、最も人気のあるフォークは自身のREADMEで元のプロジェクトを「almost static now」と説明しています。' },
          { type: 'plain-terms', text: 'プロジェクトは今も動作し広く使われていますが、2026年3月2日以降は誰も更新をプッシュしていないため、新しいモデルタイプへの対応は、ComfyUI、InvokeAI、SD.Nextなど積極的に開発されているツールに先に現れる可能性が高いです。' },
        ],
        columns: ['シグナル', '検証済みの状況', '出典'],
        rows: [
          { 'シグナル': '最後にタグ付けされたリリース', '検証済みの状況': 'v1.10.1 — コードは2024年7月27日のもの。リリースノートは2025年2月9日に公開', '出典': '[GitHubリリース](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)' },
          { 'シグナル': '`master`ブランチの最終コミット', '検証済みの状況': '2024年7月27日', '出典': '[GitHubコミット履歴](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commits/master)' },
          { 'シグナル': '`dev`ブランチの最終コミット', '検証済みの状況': '2026年3月2日(PR #17313のマージ)。それ以降`dev`へのコミットなし', '出典': 'GitHubコミット履歴（引用前に最新日付を確認）' },
          { 'シグナル': 'オープンなIssue数', '検証済みの状況': '2,429件がオープン(GitHub Issue検索、2026-11-02)', '出典': '[GitHub Issues](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues)' },
          { 'シグナル': 'フォーク開発者自身の評価', '検証済みの状況': '「Because original SD-WebUI is almost static now, Forge will sync with original WebUI every 90 days, or when important fixes」— Forgeプロジェクト自身のREADMEからの直接引用', '出典': '[Forge README](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'シグナル': 'Forge(フォーク)の最終プッシュ', '検証済みの状況': '2025年7月31日。最新のGitHubリリースは2024年2月5日付', '出典': '[Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'シグナル': 'ControlNet拡張の最終プッシュ', '検証済みの状況': '2024年8月12日。GitHubリリースなし', '出典': '[GitHubのsd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet)' },
        ],
        content: [
          'このセクションは、二次情報を繰り返すのではなく、2026-11-02にGitHub APIで直接確認できた内容を示します。AUTOMATIC1111は2026年3月2日以降更新されていません。ワンクリックインストーラーや多くのドキュメントが指す安定版の`master`ブランチは2024年7月27日から変わっておらず、`dev`ブランチにも2026年3月2日より後のコミットはありません。リポジトリはアーカイブされておらず、メンテナーが放棄を表明したわけでもありませんが、メンテナンスされていない可能性があるものとして扱うべきです。',
          '最も信頼できる外部のシグナルは、AUTOMATIC1111のコードベースを土台にしたフォークForgeの開発者、lllyasvielによるものです。ForgeのREADMEは「sync with original WebUI every 90 days, or when important fixes」と述べており、その理由として「original SD-WebUI is almost static now」を挙げています。これは噂ではなく、フォークのメンテナーによるAUTOMATIC1111の開発ペースの説明です。Forge自身も2025年7月31日以降プッシュがなく、活発な代替の証拠にはもうなりません。',
          'これはAUTOMATIC1111が動かなくなるという意味ではありません。Stable Diffusion 1.5とSDXLのワークフローでは引き続き機能し、利用者数とチュートリアルの量も、ほとんどの代替より多いままです。実際の影響は将来にあります。新しいモデルアーキテクチャへの対応や迅速なバグ修正が必要な読者は、2026-11-02にプッシュがあったComfyUI、InvokeAI、SD.Nextを、下の比較表で比べてください。',
        ],
        note: 'GitHubの活動データは絶えず変化します。上記の数値は2026-11-02にGitHub APIで確認したものです。時間的に重要な判断にこの表を使う前に、[リポジトリ](https://github.com/AUTOMATIC1111/stable-diffusion-webui)で最新の数値を確認してください。',
      },
      extensionsControlnet: {
        id: 'extensions-controlnet',
        title: '拡張機能とControlNetエコシステム',
        content: [
          'AUTOMATIC1111の組み込みExtensionsタブでは、コードを編集することなく、厳選されたリストやGitのURLから直接コミュニティ製の拡張機能をインストールできます。この拡張機能システムは、2022年以降のユーザーベースの規模と相まって、どのUIよりも大規模なStable Diffusionツールのカタログの一つを生み出しました。',
          '圧倒的に最も広く使われている拡張機能は[sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet)（UI上ではしばしば単に「ControlNet」と呼ばれる）で、ポーズのスケルトン、深度マップ、Canny法によるエッジの輪郭、あるいは大まかなスケッチといった参照画像によって、テキストプロンプトだけよりもはるかに精密に生成画像の構図を誘導できます。コミュニティの利用実態においては、AUTOMATIC1111での作業の仕方を最も変えた拡張機能として広く認識されており、GitHub上でも最もスターを集めているStable Diffusion拡張機能の一つであり続けています。PromptQuorumはControlNetについて専用の記事でより詳しく扱っています（下記の関連記事を参照）。',
          'ControlNetのほかにも、拡張機能のリストにはLoRA（Low-Rank Adaptation）のトレーニングと管理、画像の閲覧とタグ付け、プロンプト履歴の追跡、ワークフロー自動化スクリプトのためのツールが含まれます。拡張機能はコミュニティによって維持され、AUTOMATIC1111自体のリリースペースとは独立しているため、中核プロジェクトのコミットが減る期間中でも、個々の拡張機能は活発に更新され続けることがあります — ただしこれは、品質と更新頻度が作者によって大きく異なることも意味するため、本番のワークフローで依存する前に、その拡張機能自身のリポジトリの活動状況を確認してください。',
        ],
        note: '拡張機能をインストールする前には必ずソースと権限を確認してください — 拡張機能はAUTOMATIC1111自体と同じPythonプロセス内で実行され、サンドボックス化されていません。',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'ハードウェア要件',
        itemHeadings: true,
        columns: ['ワークロード', '最小VRAM', '快適なVRAM', '注記'],
        rows: [
          { 'ワークロード': 'SD 1.5チェックポイント', '最小VRAM': '4 GB VRAM（2 GBでも動作したという報告あり）', '快適なVRAM': '6〜8 GB VRAM', '注記': '最も軽いワークロード。プロジェクト自身のドキュメントによれば過去10年間のほとんどのGPUで動作' },
          { 'ワークロード': 'SDXLチェックポイント', '最小VRAM': '8 GB VRAM（最適化あり）', '快適なVRAM': '12 GB以上のVRAM', '注記': 'ネイティブの1024×1024出力は、画像あたりSD 1.5より負荷が大きい' },
          { 'ワークロード': 'ControlNet拡張機能を有効化', '最小VRAM': 'ベースのチェックポイントに加えておよそ1〜2 GBのVRAMを追加消費', '快適なVRAM': 'それに応じて予算を確保', '注記': '正確な追加負荷は、どのControlNetモデルとプリプロセッサを読み込むかによって異なる' },
          { 'ワークロード': 'AMD／IntelのGPU、Apple Silicon', '最小VRAM': '別途のセットアップ経路でサポート', '快適なVRAM': 'パフォーマンスはプラットフォームにより異なる', '注記': 'NVIDIAが公式に推奨され最もサポートされている経路。AMD、Intel、Apple Siliconはそれぞれ異なるインストール手順が必要で、プロジェクトのWikiに記載されている' },
        ],
        note: '正確なVRAM使用量は、解像度、バッチサイズ、有効な拡張機能、コマンドラインの最適化フラグ（例: `--medvram`、`--lowvram`）によって異なります — これらは計画のための目安として扱い、最新の情報についてはプロジェクトの現在の[Dependencies Wikiページ](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies)を確認してください。',
      },
      licensePricing: {
        id: 'license-pricing',
        title: 'ライセンスと価格',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111はAGPL-3.0（GNU Affero General Public License v3.0）の下でライセンスされており、ダウンロード、セルフホスト、改変はいずれも無料で、公式の有料プランやホスティングプランは一切ありません。' },
          { type: 'plain-terms', text: 'サブスクリプションもプレミアム版も、AUTOMATIC1111を製品として販売する企業もありません — これは自分自身で運用する、コミュニティによって維持されるオープンソースプロジェクトであり、唯一のコストは自分自身のハードウェアと電気代です。' },
        ],
        content: [
          'AUTOMATIC1111のコードベースはAGPL-3.0ライセンスの下で公開されており、これは[GitHubリポジトリ](https://github.com/AUTOMATIC1111/stable-diffusion-webui)で直接確認できます。AGPL-3.0は強力なコピーレフトライセンスです。無料での利用、改変、再配布を認めていますが、コードを改変して他の人が対話するネットワークサービスとして運用する場合、一般的にライセンス上、その利用者に対しても改変後のソースコードを提供することが求められます。これは、ダウンロードするバージョンごとに独自の別個のライセンス条件を持つStable Diffusionのモデル重み自体とは異なります — UIのライセンスとモデルのライセンスは二つの別個の法的文書であるため、詳細については[PromptQuorumのStable Diffusionレビュー](/ja/power-local-llm/stable-diffusion-review)を参照してください。',
          'メンテナーが提供する公式の有料プラン、サブスクリプション、ホスティング版のAUTOMATIC1111は存在しません。有料でAUTOMATIC1111のインスタンスをホストする（レンタルGPU時間を提供する）サードパーティのクラウドサービスは存在しますが、これらは公式製品ではなく独立した事業者です — そうしたサービスに料金を支払う前に、そのサービス自身の利用規約と価格を個別に確認してください。またサードパーティのホストを使うということは、プロンプトと画像が完全にローカルにとどまるのではなく、そのプロバイダーのインフラを経由することを意味する点にも注意してください。',
        ],
        note: 'ライセンスの全文はプロジェクトの[GitHub上のLICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt)で読むことができます — このセクションは要約であり法的助言ではありません。AGPL-3.0のネットワーク利用条項は、AUTOMATIC1111を他者向けのホスティングサービスとして提供しようとする場合に特に重要です。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AUTOMATIC1111 vs. 代替ツール',
        columns: ['選択肢', '最適な用途', 'メンテナンスペース（2026年）', 'ライセンス', '主なトレードオフ'],
        rows: [
          {
            '選択肢': 'AUTOMATIC1111（Stable Diffusion web UI）',
            '最適な用途': '最大級の一つとされるチュートリアル・拡張機能の蓄積、タブ形式のシンプルさ',
            'メンテナンスペース（2026年）': '2026年3月2日以降更新なし。`master`は2024年7月27日から変更なし',
            'ライセンス': 'AGPL-3.0',
            '主なトレードオフ': '最もドキュメント化された選択肢だが、新しいモデルへの対応は先にフォークに反映される傾向',
          },
          {
            '選択肢': '[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            '最適な用途': 'AUTOMATIC1111に近い操作感で機能や新モデルへの対応がより速い',
            'メンテナンスペース（2026年）': '2025年7月31日以降プッシュなし。最新のGitHubリリースは2024年2月5日',
            'ライセンス': 'AGPL-3.0',
            '主なトレードオフ': 'AUTOMATIC1111自体よりコミュニティは小規模。元のコードベースの全体構造は引き続き踏襲',
          },
          {
            '選択肢': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '最適な用途': '生成パイプラインに対するノードグラフベースのきめ細かな制御',
            'メンテナンスペース（2026年）': '活発に開発、頻繁なコミット',
            'ライセンス': 'GPL-3.0',
            '主なトレードオフ': 'AUTOMATIC1111のタブレイアウトより学習曲線が急。ノードグラフはより強力だが初心者には取っつきにくい',
          },
          {
            '選択肢': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            '最適な用途': 'キャンバスベースのワークフローを持つ、洗練されたプロ志向のインターフェース',
            'メンテナンスペース（2026年）': '活発に開発',
            'ライセンス': 'Apache-2.0',
            '主なトレードオフ': 'AUTOMATIC1111より拡張機能エコシステムは小規模。より方向性の定まったUIでコミュニティスクリプトの乱立は少ない',
          },
          {
            '選択肢': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '最適な用途': '使える画像に到達するまでのクリック数が最少、設定は最小限',
            'メンテナンスペース（2026年）': '最終プッシュは2025年12月1日。最新リリースはv2.5.5(2024年8月12日)',
            'ライセンス': 'GPL-3.0',
            '主なトレードオフ': 'シンプルさと引き換えに、意図的に設定項目と拡張機能サポートを少なくしている',
          },
          {
            '選択肢': '[SD.Next](https://github.com/vladmandic/sdnext)',
            '最適な用途': 'モデルとハードウェアの対応範囲がより広い、AUTOMATIC1111的なオールインワンUI',
            'メンテナンスペース（2026年）': '活発に開発、頻繁なコミット',
            'ライセンス': 'Apache-2.0',
            '主なトレードオフ': '機能面で同等かそれ以上にもかかわらず、AUTOMATIC1111よりコミュニティとチュートリアル基盤は小規模',
          },
        ],
        note: '保守のペースは、2026-11-02にGitHubで確認した公開のプッシュとリリースの活動に基づいており、変わる可能性があります。活動量だけで選ぶ前に、各プロジェクトのリポジトリを確認してください。基盤モデルの比較は[Stable Diffusionレビュー](/power-local-llm/stable-diffusion-review)、ローカルとクラウドの得失は[ローカルAI画像生成とクラウドの比較](/power-local-llm/local-ai-image-generation-vs-cloud)をご覧ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AUTOMATIC1111を使うべき人',
        items: [
          '**最大級とされるチュートリアルとコミュニティの回答基盤を求める読者。** 最初に市場に登場し、最も長いインストール実績を持つため、Stable Diffusion UIに関するフォーラム投稿、YouTubeチュートリアル、Stack Overflow風の回答の多くが、AUTOMATIC1111を具体的に参照しています。',
          '**ControlNetと成熟した拡張機能カタログが欲しい読者。** ControlNet拡張と数千のコミュニティ製アドオンは広く使われていますが、頼る前に各拡張機能のリポジトリを確認してください。主要なControlNet拡張の最後のプッシュは2024年8月12日です。',
          '**ノードグラフよりタブ形式のインターフェースを好む読者。** テキストフィールド、スライダー、ボタンがタブに整理されたAUTOMATIC1111のレイアウトは、ComfyUIのノードベースのキャンバスよりも、初めて使う人にとって一般的に取っつきやすいものです。',
          '**完全なローカル制御とプライバシーを求める読者。** インストール後は、生成がすべて自分自身のGPU上で行われます。意図的にそうする拡張機能をインストールしない限り、プロンプトや画像データが自分のマシンから外に出ることはありません。',
          '**UI自体のライセンス費用をゼロにしたい、予算に限りのある読者。** AGPL-3.0であることは、このソフトウェアがサブスクリプションなしに無料で利用、改変、再配布できることを意味します。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AUTOMATIC1111を使うべきでない人',
        items: [
          '**最新のモデルアーキテクチャへの対応を求める読者。** 2026年3月2日以降更新がないため、新しいモデルへの対応は、ComfyUI、InvokeAI、SD.Nextなど積極的に開発されているツールに先に現れる可能性が高いです。まずそれらを比較してください。',
          '**コマンドライン操作に一切触れたくない、ワンクリックのアプリを求める読者。** インストールにはPythonとGitが必要で、システムによっては依存関係のバージョンを手動でトラブルシューティングする必要があります — 完全に洗練された一般消費者向けアプリの体験を求める読者は、Fooocusの簡略化されたインストーラーやクラウドツールの方が向いているかもしれません。',
          '**予測可能なスケジュールでの、保証された活発な中核リポジトリのバグ修正が必要な読者。** `master`ブランチで2,400件を超えるオープンIssueがあり、2024年7月以降新しいタグ付きリリースがないことを踏まえると、厳格な信頼性要件を持つ読者は、新しく報告されたバグへの迅速な対応を前提とすべきではありません。',
          '**多段階パイプラインに対する最大限のワークフロー制御を求める読者。** ComfyUIのノードグラフアプローチは、一般的にAUTOMATIC1111のタブ形式レイアウトよりも、複雑で多段階の生成パイプラインに対してより精密な制御を提供します。',
          '**SLA付きのベンダーサポート製品を必要とする企業チーム。** AUTOMATIC1111は公式のサポート契約、有料プラン、サービスレベル契約のないコミュニティプロジェクトです — 契約に基づくサポートが必要なチームは、代わりに商用のクラウド画像生成製品を検討すべきです。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'AUTOMATIC1111はStable Diffusionと同じものですか。',
            a: 'いいえ。Stable Diffusionは基盤となるオープンウェイトのモデルファミリーであり、AUTOMATIC1111（Stable Diffusion web UI）は、それらのモデル重みを読み込みブラウザから画像を生成できるようにする、別個の無料フロントエンドインターフェースです。実際に使うには両方が必要です。モデル重み（別途ダウンロード）と、AUTOMATIC1111のようなUIです。',
          },
          {
            q: 'AUTOMATIC1111は2026年時点でまだメンテナンスされていますか。',
            a: '2026年3月2日以降、更新は公開されていません。最後のタグ付きリリースv1.10.1は2025年2月9日に公開され、`dev`ブランチには2026年3月2日以降コミットがありません。ForgeのREADMEは元のプロジェクトを「almost static now」と呼んでおり、Forge自身も2025年7月31日以降プッシュがありません。まだ動作はしますが、メンテナンスされていない可能性があるものとして扱い、ComfyUI、InvokeAI、SD.Nextを比較してください。',
          },
          {
            q: 'AUTOMATIC1111は無料ですか。',
            a: 'はい。AGPL-3.0ライセンスの下で提供されており、ダウンロード、セルフホスト、改変はいずれも無料です。公式の有料プラン、サブスクリプション、ホスティングプランは存在しません — 唯一のコストは自分自身のハードウェアと電気代です。それでも、独自のライセンス条件を持つStable Diffusionのモデル重みは別途ダウンロードする必要があります。',
          },
          {
            q: 'AUTOMATIC1111におけるControlNetとは何ですか。',
            a: 'ControlNetは、AUTOMATIC1111向けの圧倒的に最も広く使われているコミュニティ拡張機能です。ポーズのスケルトン、深度マップ、エッジの輪郭といった参照画像によって、テキストプロンプトだけよりもはるかに精密に生成画像の構図を誘導できます。組み込みのExtensionsタブからインストールされ、AUTOMATIC1111の中核コードベースの一部ではありません。',
          },
          {
            q: 'AUTOMATIC1111を実行するにはどのようなハードウェアが必要ですか。',
            a: 'SD 1.5のチェックポイントでは、ドキュメント上の最小要件は4 GBのVRAMです（一部では2 GBでも動作したという報告があります）。6〜8 GBあればより快適です。SDXLのチェックポイントでは、メモリ最適化を有効にした状態で8 GBのVRAMが必要になると想定してください。快適に使うには12 GB以上が目安です。NVIDIAのGPUが公式に推奨され最もサポートされている経路です。AMD、Intel、Apple Siliconは、それぞれ別個のプラットフォーム固有のセットアップ手順によってサポートされています。',
          },
          {
            q: 'AUTOMATIC1111とForgeの違いは何ですか。',
            a: 'ForgeはAUTOMATIC1111のコードベースのフォークで、lllyasvielがパフォーマンスの最適化とFluxなど新しいモデルへの対応を加えるために作りました。READMEによれば、元のプロジェクトとは約90日ごと、または重要な修正があるときに同期します。GitHubでの最後のプッシュは2025年7月31日、最新のGitHubリリースは2024年2月5日付で、もはや明らかに活発な選択肢とは言えません。選ぶ前にリポジトリを確認してください。',
          },
          {
            q: 'AUTOMATIC1111とComfyUIの違いは何ですか。',
            a: 'AUTOMATIC1111はタブ形式のインターフェース（テキストフィールド、スライダー、ボタン）を使用しており、一般的に初心者にとって取っつきやすいものです。ComfyUIは、処理の各ステップを表すブロックを接続していくノードグラフ形式のインターフェースを使用しており、複雑なパイプラインに対してより細かな制御を提供しますが、その分学習曲線は急になります。ComfyUIは2026年時点でも、より頻繁な開発活動を示しています。',
          },
          {
            q: 'AUTOMATIC1111はどこでダウンロードできますか。',
            a: '公式のソースは[GitHub上のAUTOMATIC1111/stable-diffusion-webuiリポジトリ](https://github.com/AUTOMATIC1111/stable-diffusion-webui)で、コード、インストールWiki、NVIDIA、AMD、Intel、Apple Siliconのハードウェアごとのセットアップ手順へのリンクが含まれています。利用するには、Stable Diffusionのモデル重み（例えばHugging Faceから）を別途ダウンロードする必要があります。',
          },
          {
            q: 'Stable Diffusion WebUI Forgeは今もメンテナンスされていますか?',
            a: 'GitHubでの最後のプッシュは2025年7月31日で、最新のGitHubリリースは2024年2月5日付です。READMEによれば、SD-WebUI 1.10.1をベースにしています。選ぶ前に、リポジトリでより新しい活動がないか確認してください。',
          },
          {
            q: 'AUTOMATIC1111用のControlNet拡張は今もメンテナンスされていますか?',
            a: 'sd-webui-controlnetリポジトリの最後のプッシュは2024年8月12日で、GitHubリリースはありません。今も広く使われていますが、本番のワークフローで頼る前に、リポジトリとオープンなIssueを確認してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'AUTOMATIC1111は、最初に登場したことでローカルStable Diffusionの標準的なインターフェースとしての地位を築きました。そのエコシステム——とりわけControlNet拡張、数千のコミュニティツール、チュートリアル、フォーラムの回答——は今も最大の強みです。しかし、このプロジェクトは2026年3月2日以降更新されておらず、最後のタグ付きリリースはv1.10.1で、フォークのForgeは2025年7月31日以降プッシュがなく、主要なControlNet拡張の最後のプッシュは2024年8月12日です。SD 1.5とSDXLのチェックポイントではまだインストールして動作するため、すでに使っている読者がただちに乗り換える理由はありません。新しく始める読者は、知名度だけでAUTOMATIC1111を選ぶのではなく、積極的に開発されているComfyUI、InvokeAI、SD.Nextと比較し、まず自分のGPUとモデルで動作することを確認してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHub上のAUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — 公式リポジトリ、コード、リリース、コミット履歴。',
          '[AUTOMATIC1111/stable-diffusion-webui Releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — v1.10.1を含む検証済みのリリース日（コードは2024年7月27日のもの、2025年2月9日に公開）。',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — AGPL-3.0ライセンスの全文。',
          '[AUTOMATIC1111/stable-diffusion-webui Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) — NVIDIA、AMD、Intel、Apple Siliconのインストールガイド。',
          '[GitHub上のStable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) — AUTOMATIC1111の開発ペースとForgeの90日同期方針についてのREADMEの記述。',
          '[GitHub上のMikubill/sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) — AUTOMATIC1111向けのControlNet拡張機能。',
          '[GitHub上のComfyUI](https://github.com/comfy-org/ComfyUI)、[GitHub上のInvokeAI](https://github.com/invoke-ai/InvokeAI)、[GitHub上のFooocus](https://github.com/lllyasviel/Fooocus)、[GitHub上のSD.Next](https://github.com/vladmandic/sdnext) — 比較のために参照した代替UIのリポジトリ。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Stable Diffusionレビュー: オープンウェイトのテキスト画像生成モデル](/ja/power-local-llm/stable-diffusion-review) — 基盤となるモデルが実際何であるか、バージョンごとのライセンス条件、ハードウェア要件について。',
          '[Real-ESRGANレビュー: AI画像アップスケーラー](/ja/power-local-llm/real-esrgan-ai-image-upscaler-review) — AUTOMATIC1111や他の任意のUIで生成した画像をアップスケーリングするための補完的なローカルツール。',
          '[ローカルAI画像生成 vs. クラウド](/ja/power-local-llm/local-ai-image-generation-vs-cloud) — MidjourneyやAdobe Fireflyのようなクラウドツールと対比した、ローカル画像生成オプションのより詳細な比較。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/automatic1111-review-hero-pt.webp',
    title: 'Análise do AUTOMATIC1111: Stable Diffusion WebUI explicado',
    seoTitle: 'AUTOMATIC1111 Análise: Guia do Stable Diffusion WebUI',
    intro:
      'O AUTOMATIC1111 — formalmente "Stable Diffusion web UI" — é uma interface web gratuita, de código aberto e organizada em abas para rodar modelos Stable Diffusion na sua própria GPU. Lançado no GitHub em 22 de agosto de 2022, um mês após o lançamento público do Stable Diffusion, tornou-se a primeira interface gráfica amplamente adotada para geração local de imagens e ainda é descrito por análises de terceiros como uma das opções mais usadas e mais bem documentadas da categoria, graças a um enorme ecossistema de extensões (ControlNet, treinamento de LoRA e milhares de scripts da comunidade). Esta análise explica o que o AUTOMATIC1111 realmente é, em que difere do modelo Stable Diffusion e de interfaces mais novas como ComfyUI, Forge e InvokeAI, seu real estado de manutenção de cara para 2026, os termos de licença, os requisitos de hardware, e uma orientação honesta sobre quem deve — e quem não deve — usá-lo hoje.',
    metaDescription:
      'Análise do AUTOMATIC1111: o que é o Stable Diffusion WebUI, status de manutenção verificado, licença AGPL-3.0, ControlNet, hardware e alternativas.',
    twitterDescription:
      'Análise do AUTOMATIC1111 2026: o Stable Diffusion WebUI original explicado — status de manutenção verificado, licença, ecossistema de extensões, requisitos de hardware e comparação com Forge, ComfyUI e InvokeAI.',
    audience:
      'Leitores que estão decidindo se instalam o Stable Diffusion WebUI do AUTOMATIC1111 para geração local de imagens — cobre status de manutenção verificado, termos de licença, requisitos de hardware, o ecossistema de extensões e a comparação com forks ativamente mantidos e interfaces alternativas.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AUTOMATIC1111 review',
    targetKeywords: [
      'automatic1111 análise',
      'stable diffusion webui',
      'instalar automatic1111',
      'automatic1111 vs comfyui',
      'automatic1111 vs forge',
      'automatic1111 controlnet',
      'manutenção stable diffusion webui',
      'licença automatic1111',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL', 'ControlNet', 'Stable Diffusion WebUI Forge', 'ComfyUI', 'InvokeAI', 'Fooocus'],
    current_hardware_mentioned: ['2 GB VRAM', '4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '12 GB VRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Aviso: o AUTOMATIC1111 não recebe atualizações desde 2 de março de 2026 (última versão v1.10.1, 9 de fevereiro de 2025) e pode estar sem manutenção — confira antes de usar.** **O AUTOMATIC1111 é uma interface gratuita e open source (AGPL-3.0) para rodar o Stable Diffusion localmente, não o modelo.**',
    quickAnswerTop: {
      pt: {
        question: 'O AUTOMATIC1111 ainda é mantido, e é a mesma coisa que o Stable Diffusion?',
        answer:
          'Nenhuma atualização foi publicada desde 2 de março de 2026. O AUTOMATIC1111 não é o Stable Diffusion: é uma interface web separada, gratuita e open source, que carrega pesos de modelos do Stable Diffusion e permite gerar imagens em uma aba do navegador. Sua última versão com tag, v1.10.1, foi publicada em 9 de fevereiro de 2025, e a branch `dev` não tem commits desde 2 de março de 2026. O Forge, seu fork mais usado, chama o original de «almost static now», mas o próprio Forge não recebe push desde 31 de julho de 2025. Ele ainda funciona em muitas configurações; quem precisa de arquiteturas de modelo mais novas deve comparar ComfyUI, InvokeAI ou SD.Next.',
        bullets: [
          'O AUTOMATIC1111 é uma interface/frontend, não um modelo — você ainda precisa baixar os pesos do Stable Diffusion separadamente e carregá-los nele.',
          'Verificado no GitHub: a última versão com tag (v1.10.1) foi publicada em 9 de fevereiro de 2025, e o último commit da branch `dev` é de 2 de março de 2026 — consulte o repositório para ver o estado atual.',
          'Gratuito e de código aberto sob a licença AGPL-3.0; não existe nenhum nível pago oficial nem plano hospedado.',
          'O ecossistema de extensões — especialmente a extensão ControlNet para orientar pose e composição — é o principal motivo pelo qual continua amplamente usado apesar do desenvolvimento mais lento do núcleo.',
          'Alternativas com manutenção ativa: ComfyUI, InvokeAI e SD.Next tiveram pushes em 2026-11-02, enquanto o Forge, o fork baseado no AUTOMATIC1111, não recebe push desde 31 de julho de 2025.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o AUTOMATIC1111', anchor: 'what-is-automatic1111' },
      { label: 'História: por que o AUTOMATIC1111 existe', anchor: 'history' },
      { label: 'Como instalar e gerar sua primeira imagem', anchor: 'how-to-install' },
      { label: 'Status de manutenção: verificado', anchor: 'maintenance-status' },
      { label: 'Extensões e o ecossistema ControlNet', anchor: 'extensions-controlnet' },
      { label: 'Requisitos de hardware', anchor: 'hardware-requirements' },
      { label: 'Licença e preços', anchor: 'license-pricing' },
      { label: 'AUTOMATIC1111 vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deve usar o AUTOMATIC1111', anchor: 'who-should-use' },
      { label: 'Quem não deve usar o AUTOMATIC1111', anchor: 'who-should-not-use' },
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
          'O AUTOMATIC1111 (Stable Diffusion web UI) é uma interface web gratuita, de código aberto e organizada em abas para rodar o Stable Diffusion localmente — é o aplicativo frontend, não o modelo em si.',
          'Lançado no GitHub em 22 de agosto de 2022 por um desenvolvedor pseudônimo usando o nome "AUTOMATIC1111", um mês após o lançamento público do Stable Diffusion, preenchendo a lacuna de uma interface gráfica local.',
          'Licenciado sob AGPL-3.0. Somente autoalojado, sem nenhum nível pago oficial nem plano hospedado.',
          'Seu código principal desacelerou desde meados de 2024: a última versão com tag (v1.10.1) foi publicada em 9 de fevereiro de 2025, e o último commit da branch `dev` é de 2 de março de 2026 — consulte o GitHub para ver o estado atual.',
          'O ecossistema de extensões, especialmente a extensão ControlNet para orientar pose/composição, é sua maior vantagem restante — um dos maiores e mais bem documentados conjuntos de complementos da comunidade entre as UIs de geração local de imagens.',
          'Entre as alternativas com manutenção ativa estão ComfyUI, InvokeAI e SD.Next (pushes em 2026-11-02); o Forge, o fork do AUTOMATIC1111, não recebe push desde 31 de julho de 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sem atualizações desde 2 de março de 2026 (última versão v1.10.1, 9 de fevereiro de 2025). O AUTOMATIC1111 pode estar sem manutenção: confirme que ele ainda funciona com sua GPU e seu modelo antes de depender dele.',
          },
        ],
      },
      whatIsAutomatic1111: {
        id: 'what-is-automatic1111',
        title: 'O que é o AUTOMATIC1111',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O AUTOMATIC1111 é uma interface de usuário gratuita, de código aberto e baseada em navegador que carrega arquivos de modelo Stable Diffusion e permite gerar imagens por meio de abas, botões e campos de texto em vez de uma linha de comando.' },
          { type: 'plain-terms', text: 'Se o Stable Diffusion é o motor, o AUTOMATIC1111 é um dos vários painéis que você pode acoplar a ele — ele não gera imagens sozinho, e você ainda precisa baixar pesos de modelo Stable Diffusion separados antes que ele possa fazer qualquer coisa.' },
        ],
        content: [
          'O AUTOMATIC1111, oficialmente chamado "Stable Diffusion web UI", é uma aplicação Python construída sobre a biblioteca [Gradio](https://www.gradio.app/) que oferece uma interface baseada em navegador, organizada em abas, para fluxos de texto para imagem (txt2img), imagem para imagem (img2img), inpainting, outpainting e upscaling usando modelos Stable Diffusion. Ele roda inteiramente na sua própria máquina e GPU — nenhuma imagem ou prompt é enviado a um servidor de terceiros, a menos que você instale deliberadamente uma extensão que faça isso.',
          'O nome do projeto vem do nome de usuário do GitHub de seu criador, AUTOMATIC1111 — um desenvolvedor pseudônimo cuja identidade real não foi divulgada publicamente. Na comunidade, o projeto costuma ser chamado simplesmente de "A1111".',
          '**O AUTOMATIC1111 é uma interface, não um modelo.** Ele não vem com pesos do Stable Diffusion incluídos — você precisa baixar separadamente um arquivo de checkpoint (SD 1.5, SDXL ou um fine-tune da comunidade) e colocá-lo na pasta correta antes de poder gerar qualquer coisa. Veja a [análise do Stable Diffusion do PromptQuorum](/pt/power-local-llm/stable-diffusion-review) para saber o que o modelo subjacente realmente é e seus termos de licença por versão.',
          'É uma das várias interfaces frontend concorrentes para o Stable Diffusion, ao lado do [ComfyUI](https://github.com/comfy-org/ComfyUI) (uma interface baseada em grafo de nós que oferece controle de fluxo mais granular), do [InvokeAI](https://github.com/invoke-ai/InvokeAI) (uma interface mais polida, voltada ao uso profissional), do [Fooocus](https://github.com/lllyasviel/Fooocus) (uma interface simplificada voltada ao menor número de cliques até uma imagem utilizável) e do [Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (um fork do próprio AUTOMATIC1111, abordado na seção de manutenção abaixo).',
        ],
      },
      history: {
        id: 'history',
        title: 'História: por que o AUTOMATIC1111 existe',
        content: [
          'A Stability AI, o grupo de pesquisa CompVis da LMU de Munique e a Runway ML lançaram publicamente o Stable Diffusion em 22 de agosto de 2022. No lançamento, o Stable Diffusion foi distribuído como pesos de modelo e scripts de linha de comando — não havia uma interface gráfica oficial para digitar um prompt e clicar em um botão.',
          `O AUTOMATIC1111 publicou a primeira versão do Stable Diffusion web UI no GitHub no mesmo dia, 22 de agosto de 2022, construindo sobre scripts anteriores da comunidade e adicionando uma interface de navegador baseada em Gradio. O momento colocou o projeto no lugar certo na hora certa: à medida que a popularidade do Stable Diffusion explodiu no final de 2022, a UI do AUTOMATIC1111 se tornou a forma padrão pela qual a maioria dos entusiastas de fato o executava, acumulando dezenas de milhares de estrelas no GitHub em poucos meses e, hoje mais de ${ST.pt('automatic1111-webui', 'bare')} estrelas — entre os repositórios com mais estrelas da categoria de geração local de imagens com IA.`,
          'Por ter chegado primeiro e absorvido a maior parte das contribuições iniciais da comunidade, autores de extensões e criadores de tutoriais, o AUTOMATIC1111 se tornou a implementação de referência de facto à qual interfaces posteriores (Forge, extensões do ComfyUI e sites de documentação da comunidade) ainda se referem para descrever recursos e fluxos de trabalho, mesmo quando essas ferramentas mais novas já adotaram uma abordagem técnica diferente.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Como instalar o AUTOMATIC1111 e gerar sua primeira imagem',
        content: [
          'Os passos de instalação e primeira execução são, em geral, os mesmos no Windows, Linux e Mac, embora os comandos exatos variem por plataforma — sempre confirme os passos atuais na própria wiki do projeto antes de começar, já que as versões de dependências podem mudar.',
        ],
        numberedItems: [
          { title: 'Instale os pré-requisitos: Python e Git', whyItMatters: 'O AUTOMATIC1111 não é um instalador de arquivo único — ele exige uma versão compatível do Python e o Git já instalados no seu sistema antes que seu próprio script de configuração possa rodar.' },
          { title: 'Clone ou baixe o repositório', whyItMatters: 'Obtenha o código do [repositório oficial no GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui) via `git clone`, ou baixe como ZIP — clonar torna as atualizações futuras via `git pull` muito mais simples.' },
          { title: 'Execute o script de inicialização da sua plataforma', whyItMatters: 'O `webui-user.bat` no Windows ou `webui.sh` no Linux/Mac cria automaticamente um ambiente virtual Python e instala as dependências necessárias na primeira execução — esse passo pode levar vários minutos e precisa de uma conexão estável com a internet.' },
          { title: 'Baixe um checkpoint do Stable Diffusion', whyItMatters: 'O AUTOMATIC1111 não vem com pesos de modelo incluídos. Baixe um arquivo de checkpoint (por exemplo, do [Hugging Face](https://huggingface.co/stabilityai)) e coloque-o na pasta `models/Stable-diffusion` — veja a [análise do Stable Diffusion do PromptQuorum](/pt/power-local-llm/stable-diffusion-review) para detalhes de versão e licença.' },
          { title: 'Abra a interface web local', whyItMatters: 'Quando a configuração terminar, o script inicia um servidor web local (normalmente em `http://127.0.0.1:7860`) e a interface abre automaticamente no seu navegador — a partir daqui, tudo roda localmente, não na nuvem.' },
          { title: 'Digite um prompt na aba txt2img e clique em Generate', whyItMatters: 'Digite uma descrição, deixe as configurações de amostragem padrão na primeira execução e clique em Generate — a primeira inferência costuma ser mais lenta enquanto o modelo é carregado na VRAM.' },
          { title: 'Instale extensões quando estiver confortável', whyItMatters: 'A aba Extensions integrada permite adicionar ferramentas da comunidade como o ControlNet diretamente de uma lista — veja a seção de extensões abaixo antes de instalar algo de uma fonte desconhecida.' },
        ],
        note: 'Os comandos exatos, versões de dependências e passos de solução de problemas mudam com o tempo — siga a [wiki de instalação](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) atual do projeto em vez de um guia genérico, já que problemas de compatibilidade de driver de GPU e versão do Python são a causa mais comum de falhas na instalação.',
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'Status de manutenção: verificado',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'O AUTOMATIC1111 não recebe atualizações desde 2 de março de 2026: sua última versão com tag foi a v1.10.1 (publicada em 9 de fevereiro de 2025), e seu fork mais popular descreve o projeto original como «almost static now» no README.' },
          { type: 'plain-terms', text: 'O projeto ainda roda e continua muito usado, mas ninguém publica uma atualização desde 2 de março de 2026; por isso, o suporte a novos tipos de modelo tende a aparecer antes em ferramentas com desenvolvimento ativo, como ComfyUI, InvokeAI ou SD.Next.' },
        ],
        columns: ['Sinal', 'Status verificado', 'Fonte'],
        rows: [
          { 'Sinal': 'Último release com tag', 'Status verificado': 'v1.10.1 — código de 27 de julho de 2024; notas de lançamento publicadas em 9 de fevereiro de 2025', 'Fonte': '[GitHub releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)' },
          { 'Sinal': 'Último commit na branch `master`', 'Status verificado': '27 de julho de 2024', 'Fonte': '[Histórico de commits do GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commits/master)' },
          { 'Sinal': 'Último commit na branch `dev`', 'Status verificado': '2 de março de 2026 (merge da PR #17313); sem commits na `dev` desde então', 'Fonte': 'Histórico de commits do GitHub (verifique a data atual antes de citar)' },
          { 'Sinal': 'Issues abertas', 'Status verificado': '2.429 abertas (busca de issues do GitHub, 2026-11-02)', 'Fonte': '[GitHub issues](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues)' },
          { 'Sinal': 'Avaliação do próprio mantenedor do fork', 'Status verificado': '"Because original SD-WebUI is almost static now, Forge will sync with original WebUI every 90 days, or when important fixes" — citação direta do próprio README do projeto Forge', 'Fonte': '[Forge README](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Sinal': 'Fork Forge: último push', 'Status verificado': '31 de julho de 2025; a última release do GitHub é de 5 de fevereiro de 2024', 'Fonte': '[Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'Sinal': 'Extensão ControlNet: último push', 'Status verificado': '12 de agosto de 2024; sem releases no GitHub', 'Fonte': '[sd-webui-controlnet no GitHub](https://github.com/Mikubill/sd-webui-controlnet)' },
        ],
        content: [
          'Esta seção apresenta o que foi possível verificar diretamente na API do GitHub em 2026-11-02, em vez de repetir afirmações de segunda mão. O AUTOMATIC1111 não recebe atualizações desde 2 de março de 2026: a branch estável `master`, para a qual apontam a maioria dos instaladores de um clique e da documentação, não muda desde 27 de julho de 2024, e a branch `dev` não tem commits depois de 2 de março de 2026. O repositório não está arquivado e o mantenedor não anunciou seu abandono, mas ele deve ser tratado como possivelmente sem manutenção.',
          'O sinal externo mais crível vem de lllyasviel, desenvolvedor do Forge, um fork construído sobre o código do AUTOMATIC1111. O README do Forge diz que ele vai se sincronizar «with original WebUI every 90 days, or when important fixes», porque «original SD-WebUI is almost static now». É o mantenedor de um fork descrevendo o ritmo do AUTOMATIC1111, não um boato. O próprio Forge não recebe push desde 31 de julho de 2025, portanto já não comprova uma alternativa ativa.',
          'Nada disso significa que o AUTOMATIC1111 deixe de funcionar. Ele continua funcional para fluxos com Stable Diffusion 1.5 e SDXL, e sua base instalada e a cobertura de tutoriais ainda são maiores que as da maioria das alternativas. A implicação prática é para o futuro: quem precisa de suporte a arquiteturas de modelo mais novas ou de correções rápidas deve comparar ComfyUI, InvokeAI e SD.Next, que tiveram pushes em 2026-11-02, usando a tabela comparativa abaixo.',
        ],
        note: 'Os dados de atividade do GitHub mudam continuamente: os números acima foram verificados na API do GitHub em 2026-11-02. Consulte [o repositório](https://github.com/AUTOMATIC1111/stable-diffusion-webui) para ver os números atuais antes de basear uma decisão urgente nesta tabela.',
      },
      extensionsControlnet: {
        id: 'extensions-controlnet',
        title: 'Extensões e o ecossistema ControlNet',
        content: [
          'A aba Extensions integrada do AUTOMATIC1111 permite que os usuários instalem complementos criados pela comunidade diretamente de uma lista selecionada ou de uma URL do Git, sem editar código. Esse sistema de extensões, combinado com o tamanho da base de usuários desde 2022, produziu um dos maiores catálogos de ferramentas para Stable Diffusion entre todas as interfaces.',
          'A extensão mais usada, de longe, é a [sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) (frequentemente chamada apenas de "ControlNet" na interface), que permite que uma imagem de referência — um esqueleto de pose, um mapa de profundidade, um contorno de bordas canny ou um esboço aproximado — guie a composição de uma imagem gerada com muito mais precisão do que apenas um prompt de texto. No uso da comunidade, ela é amplamente vista como a extensão que mais mudou a forma de trabalhar no AUTOMATIC1111, e continua sendo uma das extensões de Stable Diffusion com mais estrelas no GitHub. O PromptQuorum aborda o ControlNet com mais profundidade em um artigo dedicado (veja Leituras relacionadas abaixo).',
          'Além do ControlNet, a lista de extensões inclui ferramentas para treinamento e gerenciamento de LoRA (Low-Rank Adaptation), navegação e marcação de imagens, rastreamento do histórico de prompts e scripts de automação de fluxo de trabalho. Como as extensões são mantidas pela comunidade e independentes do próprio ritmo de lançamento do AUTOMATIC1111, extensões individuais podem ser atualizadas ativamente mesmo em períodos em que o projeto principal recebe menos commits — mas isso também significa que a qualidade e a frequência de atualização variam bastante conforme o autor, então verifique a atividade do próprio repositório de uma extensão antes de depender dela em um fluxo de trabalho de produção.',
        ],
        note: 'Sempre revise a fonte e as permissões de uma extensão antes de instalá-la — uma extensão roda no mesmo processo Python que o próprio AUTOMATIC1111 e não é isolada (sandboxed).',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Requisitos de hardware',
        itemHeadings: true,
        columns: ['Carga de trabalho', 'VRAM mínima', 'VRAM confortável', 'Notas'],
        rows: [
          { 'Carga de trabalho': 'Checkpoints SD 1.5', 'VRAM mínima': '4 GB de VRAM (há relatos de 2 GB funcionando)', 'VRAM confortável': '6–8 GB de VRAM', 'Notas': 'Carga mais leve; roda na maioria das GPUs da última década, segundo a própria documentação do projeto' },
          { 'Carga de trabalho': 'Checkpoints SDXL', 'VRAM mínima': '8 GB de VRAM (com otimizações)', 'VRAM confortável': '12 GB+ de VRAM', 'Notas': 'A saída nativa de 1024×1024 é mais pesada por imagem do que o SD 1.5' },
          { 'Carga de trabalho': 'Extensão ControlNet ativa', 'VRAM mínima': 'Adiciona aproximadamente 1–2 GB de VRAM ao checkpoint base', 'VRAM confortável': 'Planeje de acordo', 'Notas': 'O consumo extra exato depende de qual modelo ControlNet e pré-processador estão carregados' },
          { 'Carga de trabalho': 'GPUs AMD / Intel, Apple Silicon', 'VRAM mínima': 'Suportado por caminhos de configuração separados', 'VRAM confortável': 'O desempenho varia por plataforma', 'Notas': 'A NVIDIA é o caminho oficialmente recomendado e melhor suportado; AMD, Intel e Apple Silicon exigem instruções de instalação distintas, documentadas na wiki do projeto' },
        ],
        note: 'O uso exato de VRAM depende da resolução, do tamanho do lote, das extensões ativas e das flags de otimização de linha de comando (por exemplo, `--medvram`, `--lowvram`) — trate isso como faixas de planejamento e consulte a [página de dependências da wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies) atual do projeto para orientações atualizadas.',
      },
      licensePricing: {
        id: 'license-pricing',
        title: 'Licença e preços',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O AUTOMATIC1111 tem licença AGPL-3.0 (GNU Affero General Public License v3.0) e é gratuito para baixar, autoalojar e modificar, sem nenhum nível pago oficial ou plano hospedado de qualquer tipo.' },
          { type: 'plain-terms', text: 'Não há assinatura, não há versão premium, e nenhuma empresa vende o AUTOMATIC1111 como produto — é um projeto de código aberto mantido pela comunidade que você mesmo executa, e o único custo é o seu próprio hardware e a eletricidade.' },
        ],
        content: [
          'A base de código do AUTOMATIC1111 é publicada sob a licença AGPL-3.0, confirmada diretamente no [repositório do GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui). A AGPL-3.0 é uma licença copyleft forte: ela permite uso, modificação e redistribuição gratuitos, mas se você modificar o código e executá-lo como um serviço de rede com o qual outras pessoas interagem, a licença geralmente exige que você também disponibilize o código-fonte modificado para esses usuários. Isso difere dos próprios pesos do modelo Stable Diffusion, que carregam seus próprios termos de licença separados dependendo da versão baixada — veja a [análise do Stable Diffusion do PromptQuorum](/pt/power-local-llm/stable-diffusion-review) para esses detalhes, já que a licença da interface e a do modelo são dois documentos jurídicos separados.',
          'Não existe nenhum nível pago oficial, assinatura ou versão hospedada do AUTOMATIC1111 oferecida por seu mantenedor. Existem serviços de nuvem de terceiros que hospedam instâncias do AUTOMATIC1111 mediante pagamento (tempo de GPU alugado), mas são negócios independentes, não um produto oficial — verifique os termos e preços de qualquer serviço desse tipo separadamente antes de pagar por ele, e observe que usar um provedor de hospedagem terceirizado significa que seus prompts e imagens passam pela infraestrutura desse provedor em vez de permanecerem totalmente locais.',
        ],
        note: 'O texto completo da licença pode ser lido no [LICENSE.txt no GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) do projeto — esta seção é um resumo, não uma orientação jurídica, e a cláusula de uso em rede da AGPL-3.0 é especialmente relevante se você planeja oferecer o AUTOMATIC1111 como um serviço hospedado para terceiros.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AUTOMATIC1111 vs. alternativas',
        columns: ['Opção', 'Melhor para', 'Ritmo de manutenção (2026)', 'Licença', 'Principal trade-off'],
        rows: [
          {
            'Opção': 'AUTOMATIC1111 (Stable Diffusion web UI)',
            'Melhor para': 'Uma das maiores bases de tutoriais/extensões, simplicidade em abas',
            'Ritmo de manutenção (2026)': 'Sem atualizações desde 2 de março de 2026; `master` sem mudanças desde 27 de julho de 2024',
            'Licença': 'AGPL-3.0',
            'Principal trade-off': 'Opção mais bem documentada, mas o suporte a modelos novos tende a chegar primeiro a forks',
          },
          {
            'Opção': '[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Melhor para': 'Interface familiar ao AUTOMATIC1111 com suporte mais rápido a recursos e modelos novos',
            'Ritmo de manutenção (2026)': 'Sem push desde 31 de julho de 2025; última release do GitHub de 5 de fevereiro de 2024',
            'Licença': 'AGPL-3.0',
            'Principal trade-off': 'Comunidade menor que o próprio AUTOMATIC1111; ainda segue a estrutura geral da base de código original',
          },
          {
            'Opção': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Melhor para': 'Controle granular baseado em grafo de nós sobre o pipeline de geração',
            'Ritmo de manutenção (2026)': 'Desenvolvido ativamente, commits frequentes',
            'Licença': 'GPL-3.0',
            'Principal trade-off': 'Curva de aprendizado mais íngreme que o layout de abas do AUTOMATIC1111; os grafos de nós são mais poderosos, mas menos acessíveis a iniciantes',
          },
          {
            'Opção': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Melhor para': 'Interface polida e voltada ao uso profissional com fluxo de trabalho baseado em tela (canvas)',
            'Ritmo de manutenção (2026)': 'Desenvolvido ativamente',
            'Licença': 'Apache-2.0',
            'Principal trade-off': 'Ecossistema de extensões menor que o AUTOMATIC1111; UI mais rígida com menos dispersão de scripts da comunidade',
          },
          {
            'Opção': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Melhor para': 'Menos cliques até uma imagem utilizável, configuração mínima',
            'Ritmo de manutenção (2026)': 'Último push em 1 de dezembro de 2025; última release v2.5.5 (12 de agosto de 2024)',
            'Licença': 'GPL-3.0',
            'Principal trade-off': 'Deliberadamente menos configurações e menos suporte a extensões em troca de simplicidade',
          },
          {
            'Opção': '[SD.Next](https://github.com/vladmandic/sdnext)',
            'Melhor para': 'UI tudo-em-um estilo AUTOMATIC1111 com suporte mais amplo a modelos e hardware',
            'Ritmo de manutenção (2026)': 'Desenvolvido ativamente, commits frequentes',
            'Licença': 'Apache-2.0',
            'Principal trade-off': 'Comunidade e base de tutoriais menores que o AUTOMATIC1111 apesar da paridade ou vantagem em recursos',
          },
        ],
        note: 'O ritmo de manutenção baseia-se na atividade pública de push e releases verificada no GitHub em 2026-11-02 e pode mudar — consulte o repositório de cada projeto antes de escolher apenas pelo nível de atividade. Veja a [análise do Stable Diffusion](/power-local-llm/stable-diffusion-review) para a comparação de modelos e [Geração local de imagens com IA vs. nuvem](/power-local-llm/local-ai-image-generation-vs-cloud) para os prós e contras de local vs. nuvem.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deve usar o AUTOMATIC1111',
        items: [
          '**Leitor que quer uma das maiores bases de tutoriais e respostas da comunidade.** Por ter chegado primeiro ao mercado e ter o histórico de instalação mais longo, boa parte dos posts de fórum, tutoriais do YouTube e respostas no estilo Stack Overflow sobre interfaces de Stable Diffusion se referem especificamente ao AUTOMATIC1111.',
          '**Leitor que quer o ControlNet e um catálogo maduro de extensões.** A extensão ControlNet e milhares de outros complementos da comunidade são muito usados; confira o repositório de cada extensão antes de depender dela, pois a principal extensão ControlNet recebeu seu último push em 12 de agosto de 2024.',
          '**Leitor que prefere uma interface baseada em abas a um grafo de nós.** O layout do AUTOMATIC1111 — campos de texto, controles deslizantes e botões organizados em abas — costuma ser mais acessível para um usuário iniciante do que a tela baseada em nós do ComfyUI.',
          '**Leitor que quer controle local total e privacidade.** Uma vez instalado, a geração acontece inteiramente na sua própria GPU; nenhum dado de prompt ou imagem sai da sua máquina, a menos que você instale uma extensão que faça isso.',
          '**Leitor com orçamento limitado que quer custo de licença zero para a própria interface.** A AGPL-3.0 significa que o software é gratuito para usar, modificar e redistribuir, sem qualquer tipo de assinatura.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deve usar o AUTOMATIC1111',
        items: [
          '**Leitor que quer suporte às arquiteturas de modelo mais recentes.** Sem atualizações desde 2 de março de 2026, o suporte a novos modelos tende a aparecer antes em ferramentas com desenvolvimento ativo, como ComfyUI, InvokeAI ou SD.Next — compare-as primeiro.',
          '**Leitor que quer um aplicativo de um clique sem nenhuma exposição à linha de comando.** A instalação exige Python e Git e, em alguns sistemas, solução manual de problemas de versões de dependências — leitores que queiram uma experiência de aplicativo de consumo totalmente polida podem preferir o instalador simplificado do Fooocus ou uma ferramenta de nuvem.',
          '**Leitor que precisa de correções de bugs ativas e garantidas no repositório principal em um cronograma previsível.** Com mais de 2.400 issues abertas e nenhum release novo com tag desde julho de 2024 na branch `master`, leitores com um requisito rígido de confiabilidade não devem presumir uma resolução rápida de um bug recém-reportado.',
          '**Leitor que quer controle máximo de fluxo de trabalho sobre pipelines de várias etapas.** A abordagem de grafo de nós do ComfyUI geralmente oferece controle mais preciso sobre pipelines de geração complexos e de múltiplas etapas do que o layout em abas do AUTOMATIC1111.',
          '**Equipe empresarial que precisa de um produto com suporte de fornecedor e SLA.** O AUTOMATIC1111 é um projeto da comunidade sem contrato de suporte oficial, nível pago ou acordo de nível de serviço — equipes que precisam de suporte contratual devem avaliar, em vez disso, um produto comercial de geração de imagens em nuvem.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O AUTOMATIC1111 é a mesma coisa que o Stable Diffusion?',
            a: 'Não. O Stable Diffusion é a família de modelos de pesos abertos subjacente; o AUTOMATIC1111 (Stable Diffusion web UI) é uma interface frontend gratuita e separada que carrega esses pesos de modelo e permite gerar imagens a partir de um navegador. Você precisa de ambos: os pesos do modelo (baixados separadamente) e uma UI como o AUTOMATIC1111 para realmente usá-los.',
          },
          {
            q: 'O AUTOMATIC1111 ainda é mantido em 2026?',
            a: 'Nenhuma atualização foi publicada desde 2 de março de 2026. Sua última versão com tag, v1.10.1, foi publicada em 9 de fevereiro de 2025, e a branch `dev` não tem commits desde 2 de março de 2026. O README do Forge chama o original de «almost static now», e o próprio Forge não recebe push desde 31 de julho de 2025. Ele ainda funciona, mas trate-o como possivelmente sem manutenção e compare ComfyUI, InvokeAI ou SD.Next.',
          },
          {
            q: 'O AUTOMATIC1111 é gratuito?',
            a: 'Sim. Tem licença AGPL-3.0 e é gratuito para baixar, autoalojar e modificar. Não existe nenhum nível pago oficial, assinatura ou plano hospedado — o único custo é o seu próprio hardware e a eletricidade. Você ainda vai precisar baixar separadamente os pesos do modelo Stable Diffusion, que têm seus próprios termos de licença.',
          },
          {
            q: 'O que é o ControlNet no AUTOMATIC1111?',
            a: 'O ControlNet é, de longe, a extensão da comunidade mais usada para o AUTOMATIC1111. Ele permite que uma imagem de referência — como um esqueleto de pose, um mapa de profundidade ou um contorno de bordas — guie a composição de uma imagem gerada com muito mais precisão do que apenas um prompt de texto. Ele é instalado pela aba Extensions integrada e não faz parte da base de código principal do AUTOMATIC1111.',
          },
          {
            q: 'Que hardware eu preciso para rodar o AUTOMATIC1111?',
            a: 'Para checkpoints SD 1.5, 4 GB de VRAM é o mínimo documentado (com alguns relatos de 2 GB funcionando), sendo 6–8 GB mais confortável. Para checkpoints SDXL, espere precisar de 8 GB de VRAM com otimizações de memória ativadas, e 12 GB ou mais para uso confortável. As GPUs NVIDIA são o caminho oficialmente recomendado e melhor suportado; AMD, Intel e Apple Silicon são suportados por instruções de configuração separadas e específicas de cada plataforma.',
          },
          {
            q: 'Qual é a diferença entre o AUTOMATIC1111 e o Forge?',
            a: 'O Forge é um fork do código do AUTOMATIC1111, criado por lllyasviel para adicionar otimizações de desempenho e suporte a modelos mais novos, como o Flux. Segundo o README, ele se sincroniza com o original aproximadamente a cada 90 dias ou para correções importantes. Seu último push no GitHub foi em 31 de julho de 2025 e sua última release do GitHub é de 5 de fevereiro de 2024; portanto, já não é uma escolha claramente mais ativa — consulte o repositório antes de escolhê-lo.',
          },
          {
            q: 'Qual é a diferença entre o AUTOMATIC1111 e o ComfyUI?',
            a: 'O AUTOMATIC1111 usa uma interface baseada em abas (campos de texto, controles deslizantes, botões) que costuma ser mais acessível para iniciantes. O ComfyUI usa uma interface de grafo de nós, na qual você conecta blocos que representam cada etapa de processamento, oferecendo controle mais granular sobre pipelines complexos ao custo de uma curva de aprendizado mais íngreme. O ComfyUI também apresenta atividade de desenvolvimento mais frequente em 2026.',
          },
          {
            q: 'Onde eu baixo o AUTOMATIC1111?',
            a: 'A fonte oficial é o [repositório AUTOMATIC1111/stable-diffusion-webui no GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui), que inclui o código, uma wiki de instalação e links para instruções de configuração específicas para hardware NVIDIA, AMD, Intel e Apple Silicon. Você vai precisar baixar separadamente os pesos do modelo Stable Diffusion (por exemplo, do Hugging Face) para usá-lo.',
          },
          {
            q: 'O Stable Diffusion WebUI Forge ainda é mantido?',
            a: 'Seu último push no GitHub foi em 31 de julho de 2025, e sua última release do GitHub é de 5 de fevereiro de 2024. O README informa que ele é baseado no SD-WebUI 1.10.1. Consulte o repositório para ver se há atividade mais recente antes de escolhê-lo.',
          },
          {
            q: 'A extensão ControlNet para o AUTOMATIC1111 ainda é mantida?',
            a: 'O repositório sd-webui-controlnet recebeu seu último push em 12 de agosto de 2024 e não tem releases no GitHub. Ela continua muito usada, mas consulte o repositório e as issues abertas antes de depender dela em um fluxo de produção.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O AUTOMATIC1111 conquistou seu lugar como interface local padrão do Stable Diffusion por ter sido o primeiro, e seu ecossistema — a extensão ControlNet acima de tudo, além de milhares de outras ferramentas da comunidade, tutoriais e respostas em fóruns — continua sendo seu maior ativo. Mas o projeto não recebe atualizações desde 2 de março de 2026, sua última versão com tag é a v1.10.1, o fork Forge não recebe push desde 31 de julho de 2025, e a principal extensão ControlNet recebeu seu último push em 12 de agosto de 2024. Ele ainda instala e roda com checkpoints SD 1.5 e SDXL, então quem já o usa não tem motivo urgente para trocar. Quem está começando deve comparar ComfyUI, InvokeAI e SD.Next, com desenvolvimento ativo, em vez de escolher o AUTOMATIC1111 só pelo nome, e confirmar antes que ele funciona com sua GPU e seu modelo.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[AUTOMATIC1111/stable-diffusion-webui no GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — repositório oficial, código, releases e histórico de commits.',
          '[AUTOMATIC1111/stable-diffusion-webui Releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — datas de release verificadas, incluindo a v1.10.1 (código de 27 de julho de 2024; publicado em 9 de fevereiro de 2025).',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — texto completo da licença AGPL-3.0.',
          '[AUTOMATIC1111/stable-diffusion-webui Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) — guias de instalação para NVIDIA, AMD, Intel e Apple Silicon.',
          '[Stable Diffusion WebUI Forge no GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge) — declaração do README sobre o ritmo de desenvolvimento do AUTOMATIC1111 e a política de sincronização de 90 dias do Forge.',
          '[Mikubill/sd-webui-controlnet no GitHub](https://github.com/Mikubill/sd-webui-controlnet) — a extensão ControlNet para o AUTOMATIC1111.',
          '[ComfyUI no GitHub](https://github.com/comfy-org/ComfyUI), [InvokeAI no GitHub](https://github.com/invoke-ai/InvokeAI), [Fooocus no GitHub](https://github.com/lllyasviel/Fooocus) e [SD.Next no GitHub](https://github.com/vladmandic/sdnext) — repositórios de interfaces alternativas referenciados para comparação.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Stable Diffusion: modelos abertos de texto para imagem](/pt/power-local-llm/stable-diffusion-review) — o que o modelo subjacente realmente é, termos de licença por versão e requisitos de hardware.',
          '[Análise do Real-ESRGAN: upscaler de imagens com IA](/pt/power-local-llm/real-esrgan-ai-image-upscaler-review) — uma ferramenta local complementar para ampliar imagens geradas no AUTOMATIC1111 ou em qualquer outra UI.',
          '[Geração local de imagens com IA vs. nuvem](/pt/power-local-llm/local-ai-image-generation-vs-cloud) — uma comparação mais aprofundada das opções de geração local de imagens frente a ferramentas de nuvem como Midjourney e Adobe Firefly.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/automatic1111-review-hero-ar.webp',
    title: 'مراجعة AUTOMATIC1111: شرح Stable Diffusion WebUI',
    seoTitle: 'مراجعة AUTOMATIC1111: دليل Stable Diffusion WebUI',
    intro:
      'AUTOMATIC1111 — واسمه الرسمي "Stable Diffusion web UI" — هو واجهة ويب مجانية ومفتوحة المصدر ومنظّمة في تبويبات لتشغيل نماذج Stable Diffusion على معالج الرسومات (GPU) الخاص بك. صدر على GitHub في 22 أغسطس 2022، أي بعد شهر واحد من الإطلاق العام لـ Stable Diffusion، وأصبح أول واجهة رسومية تُعتمد على نطاق واسع لتوليد الصور محليًا، ولا تزال مراجعات جهات خارجية تصفها بأنها من أكثر الخيارات استخدامًا وتوثيقًا في هذه الفئة، بفضل نظام إضافات ضخم (ControlNet وتدريب LoRA وآلاف السكربتات المجتمعية). تتناول هذه المراجعة ما هو AUTOMATIC1111 فعليًا، وكيف يختلف عن نموذج Stable Diffusion نفسه وعن واجهات أحدث مثل ComfyUI وForge وInvokeAI، وحالة صيانته الحقيقية مع اقتراب 2026، وشروط الترخيص، ومتطلبات العتاد، وإرشادات صادقة حول من يجب أن يستخدمه — ومن لا ينبغي له ذلك — اليوم.',
    metaDescription:
      'مراجعة AUTOMATIC1111: ما هي واجهة Stable Diffusion WebUI، وحالة صيانتها الموثّقة، وترخيص AGPL-3.0، وControlNet، ومتطلبات العتاد، ومقارنتها بالبدائل.',
    twitterDescription:
      'مراجعة AUTOMATIC1111 2026: شرح واجهة Stable Diffusion WebUI الأصلية — حالة الصيانة الموثقة، والترخيص، ونظام الإضافات، ومتطلبات العتاد، ومقارنته مع Forge وComfyUI وInvokeAI.',
    audience:
      'للقراء الذين يفكرون في تثبيت واجهة Stable Diffusion WebUI الخاصة بـ AUTOMATIC1111 لتوليد الصور محليًا — يغطي حالة الصيانة الموثقة، وشروط الترخيص، ومتطلبات العتاد، ونظام الإضافات، ومقارنته بالنسخ المشتقة والواجهات البديلة التي لا تزال قيد التطوير الفعّال.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AUTOMATIC1111 review',
    targetKeywords: [
      'مراجعة automatic1111',
      'stable diffusion webui',
      'تثبيت automatic1111',
      'automatic1111 مقابل comfyui',
      'automatic1111 مقابل forge',
      'automatic1111 controlnet',
      'صيانة stable diffusion webui',
      'ترخيص automatic1111',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL', 'ControlNet', 'Stable Diffusion WebUI Forge', 'ComfyUI', 'InvokeAI', 'Fooocus'],
    current_hardware_mentioned: ['2 GB VRAM', '4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '12 GB VRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**تحذير: لم يتلقَّ AUTOMATIC1111 أي تحديث منذ 2 مارس 2026 (آخر إصدار v1.10.1 بتاريخ 9 فبراير 2025)، وقد يكون غير مصان — تحقق قبل الاعتماد عليه.** **AUTOMATIC1111 (واجهة Stable Diffusion web UI) واجهة متصفح مجانية ومفتوحة المصدر (AGPL-3.0) لتشغيل نماذج Stable Diffusion محليًا، وليست النموذج نفسه.**',
    quickAnswerTop: {
      ar: {
        question: 'هل ما زال AUTOMATIC1111 تحت الصيانة، وهل هو نفسه Stable Diffusion؟',
        answer:
          'لم يُنشر أي تحديث منذ 2 مارس 2026. AUTOMATIC1111 ليس Stable Diffusion: إنه واجهة ويب منفصلة ومجانية ومفتوحة المصدر تحمّل أوزان نماذج Stable Diffusion وتتيح توليد الصور عبر تبويب في المتصفح. نُشر آخر إصدار موسوم v1.10.1 في 9 فبراير 2025، ولا توجد التزامات (commits) في فرع `dev` منذ 2 مارس 2026. ويصف Forge، أكثر نسخ المشروع المتفرعة استخدامًا، الأصل بأنه «almost static now»، لكن Forge نفسه لم يتلقَّ أي دفعة تعديلات منذ 31 يوليو 2025. ما زال يعمل في كثير من الإعدادات؛ ومن يحتاج إلى معماريات نماذج أحدث فعليه مقارنة ComfyUI أو InvokeAI أو SD.Next.',
        bullets: [
          'AUTOMATIC1111 هو واجهة/برنامج أمامي وليس نموذجًا — لا تزال بحاجة إلى تنزيل أوزان Stable Diffusion بشكل منفصل وتحميلها فيه.',
          'تم التحقق على GitHub: نُشر آخر إصدار موسوم (v1.10.1) في 9 فبراير 2025، وآخر التزام في فرع `dev` بتاريخ 2 مارس 2026 — راجع المستودع لمعرفة الحالة الراهنة.',
          'مجاني ومفتوح المصدر بموجب ترخيص AGPL-3.0؛ لا يوجد أي مستوى مدفوع رسمي أو خطة استضافة.',
          'نظام الإضافات — وخصوصًا إضافة ControlNet لتوجيه الوضعية والتكوين — هو السبب الرئيسي وراء استمرار استخدامه على نطاق واسع رغم تباطؤ تطوير النواة.',
          'بدائل مصانة بنشاط: تلقّت ComfyUI وInvokeAI وSD.Next دفعات تعديلات في 2026-11-02، بينما لم يتلقَّ Forge، النسخة المتفرعة المبنية على AUTOMATIC1111، أي دفعة منذ 31 يوليو 2025.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو AUTOMATIC1111', anchor: 'what-is-automatic1111' },
      { label: 'التاريخ: لماذا يوجد AUTOMATIC1111', anchor: 'history' },
      { label: 'طريقة التثبيت وتوليد أول صورة', anchor: 'how-to-install' },
      { label: 'حالة الصيانة: موثقة', anchor: 'maintenance-status' },
      { label: 'الإضافات ونظام ControlNet', anchor: 'extensions-controlnet' },
      { label: 'متطلبات العتاد', anchor: 'hardware-requirements' },
      { label: 'الترخيص والأسعار', anchor: 'license-pricing' },
      { label: 'AUTOMATIC1111 مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب AUTOMATIC1111', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب AUTOMATIC1111', anchor: 'who-should-not-use' },
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
          'AUTOMATIC1111 (Stable Diffusion web UI) هو واجهة ويب مجانية ومفتوحة المصدر ومنظّمة في تبويبات لتشغيل Stable Diffusion محليًا — إنه تطبيق الواجهة الأمامية وليس النموذج نفسه.',
          'صدر على GitHub في 22 أغسطس 2022 من قِبل مطوّر مجهول الهوية يستخدم الاسم المستعار "AUTOMATIC1111"، بعد شهر واحد من الإطلاق العام لـ Stable Diffusion، ليسد الفجوة في غياب واجهة رسومية محلية.',
          'مرخّص بموجب AGPL-3.0. استضافة ذاتية فقط، دون أي مستوى مدفوع رسمي أو خطة استضافة.',
          'تباطأت شيفرته الرئيسية منذ منتصف 2024: نُشر آخر إصدار موسوم (v1.10.1) في 9 فبراير 2025، وآخر التزام في فرع `dev` بتاريخ 2 مارس 2026 — راجع GitHub لمعرفة الحالة الراهنة.',
          'يظل نظام الإضافات، وخصوصًا إضافة ControlNet لتوجيه الوضعية/التكوين، أكبر ميزة متبقية له — أحد أكبر مجموعات الإضافات المجتمعية وأكثرها توثيقًا بين واجهات توليد الصور المحلية.',
          'من البدائل المصانة بنشاط ComfyUI وInvokeAI وSD.Next (دفعات تعديلات في 2026-11-02)؛ أما Forge، النسخة المتفرعة من AUTOMATIC1111، فلم يتلقَّ أي دفعة منذ 31 يوليو 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تحديث منذ 2 مارس 2026 (آخر إصدار v1.10.1 بتاريخ 9 فبراير 2025). قد يكون AUTOMATIC1111 غير مصان: تأكد أنه ما زال يعمل مع بطاقتك الرسومية ونموذجك قبل أن تعتمد عليه.',
          },
        ],
      },
      whatIsAutomatic1111: {
        id: 'what-is-automatic1111',
        title: 'ما هو AUTOMATIC1111',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 هو واجهة مستخدم مجانية ومفتوحة المصدر تعمل عبر المتصفح، تُحمّل ملفات نموذج Stable Diffusion وتتيح توليد الصور عبر تبويبات وأزرار وحقول نصية بدلًا من سطر أوامر.' },
          { type: 'plain-terms', text: 'إذا كان Stable Diffusion هو المحرك، فإن AUTOMATIC1111 هو إحدى عدة لوحات تحكم يمكن ربطها به — فهو لا يولّد الصور بمفرده، وما زلت بحاجة إلى تنزيل أوزان نموذج Stable Diffusion بشكل منفصل قبل أن يتمكن من فعل أي شيء.' },
        ],
        content: [
          'AUTOMATIC1111، المسمى رسميًا "Stable Diffusion web UI"، هو تطبيق بلغة Python مبني على مكتبة [Gradio](https://www.gradio.app/) يوفّر واجهة تعمل عبر المتصفح ومنظّمة في تبويبات لسير عمل تحويل النص إلى صورة (txt2img)، وتحويل الصورة إلى صورة (img2img)، والرسم الداخلي (inpainting)، والرسم الخارجي (outpainting)، وتكبير الدقة باستخدام نماذج Stable Diffusion. يعمل بالكامل على جهازك ومعالج الرسومات الخاص بك — لا تُرسل أي صورة أو نص توجيهي (prompt) إلى خادم خارجي إلا إذا ثبّتّ عمدًا إضافة تقوم بذلك.',
          'يأتي اسم المشروع من اسم مستخدم منشئه على GitHub، AUTOMATIC1111 — وهو مطوّر مجهول الهوية لم يُكشف عن هويته الحقيقية علنًا. يُشار إلى المشروع غالبًا بالاختصار "A1111" في نقاشات المجتمع.',
          '**AUTOMATIC1111 هو واجهة وليس نموذجًا.** لا يأتي مزوّدًا بأوزان Stable Diffusion — يجب عليك تنزيل ملف نقطة تفتيش (checkpoint) بشكل منفصل (SD 1.5 أو SDXL أو نسخة مُحسّنة من المجتمع) ووضعه في المجلد الصحيح قبل أن تتمكن من توليد أي شيء. راجع [مراجعة Stable Diffusion من PromptQuorum](/ar/power-local-llm/stable-diffusion-review) لمعرفة ما هو النموذج الأساسي فعليًا وشروط ترخيصه حسب الإصدار.',
          'إنه واحد من عدة واجهات أمامية منافسة لـ Stable Diffusion، إلى جانب [ComfyUI](https://github.com/comfy-org/ComfyUI) (واجهة قائمة على رسم بياني للعُقد توفّر تحكمًا أكثر تفصيلًا في سير العمل)، و[InvokeAI](https://github.com/invoke-ai/InvokeAI) (واجهة أكثر احترافية وتناسق)، و[Fooocus](https://github.com/lllyasviel/Fooocus) (واجهة مبسطة تهدف إلى أقل عدد من النقرات للوصول إلى صورة قابلة للاستخدام)، و[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (نسخة مشتقة من AUTOMATIC1111 نفسه، تُتناول في قسم الصيانة أدناه).',
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: لماذا يوجد AUTOMATIC1111',
        content: [
          'أطلقت Stability AI ومجموعة أبحاث CompVis في جامعة LMU ميونخ وRunway ML علنًا Stable Diffusion في 22 أغسطس 2022. عند الإطلاق، تم توزيع Stable Diffusion كأوزان نموذج وسكربتات سطر أوامر — ولم تكن هناك واجهة رسومية رسمية لكتابة نص توجيهي والنقر على زر.',
          `نشر AUTOMATIC1111 أول إصدار من Stable Diffusion web UI على GitHub في اليوم نفسه، 22 أغسطس 2022، معتمدًا على سكربتات مجتمعية سابقة ومضيفًا واجهة متصفح مبنية على Gradio. وضع هذا التوقيت المشروع في المكان الصحيح في اللحظة المناسبة: فمع انفجار شعبية Stable Diffusion في أواخر 2022، أصبحت واجهة AUTOMATIC1111 الطريقة الافتراضية التي استخدمها بها معظم الهواة فعليًا، حيث جمعت عشرات الآلاف من نجوم GitHub خلال أشهر، وتجاوزت اليوم ${ST.ar('automatic1111-webui', 'bare')} نجمة — من بين المستودعات الأكثر تقييمًا بالنجوم في فئة توليد الصور المحلية بالذكاء الاصطناعي.`,
          'ولأنه وصل أولًا واستحوذ على معظم المساهمات المجتمعية المبكرة ومطوّري الإضافات وكتّاب الدروس التعليمية، أصبح AUTOMATIC1111 التطبيق المرجعي الفعلي الذي لا تزال الواجهات اللاحقة (Forge، وإضافات ComfyUI، ومواقع التوثيق المجتمعية) تصف الميزات وسير العمل بالإشارة إليه، حتى عندما تبنّت هذه الأدوات الأحدث نهجًا تقنيًا مختلفًا منذ ذلك الحين.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'كيفية تثبيت AUTOMATIC1111 وتوليد أول صورة',
        content: [
          'خطوات التثبيت والتشغيل الأول متشابهة إلى حد كبير عبر Windows وLinux وMac، رغم اختلاف الأوامر الدقيقة حسب المنصة — تأكد دائمًا من الخطوات الحالية على ويكي المشروع نفسه قبل البدء، لأن إصدارات الاعتماديات قد تتغير.',
        ],
        numberedItems: [
          { title: 'تثبيت المتطلبات الأساسية: Python وGit', whyItMatters: 'AUTOMATIC1111 ليس مثبّتًا بملف واحد — فهو يتطلب إصدارًا متوافقًا من Python وGit مثبّتَين مسبقًا على نظامك قبل أن يتمكن سكربت الإعداد الخاص به من العمل.' },
          { title: 'استنساخ أو تنزيل المستودع', whyItMatters: 'احصل على الشيفرة من [مستودع GitHub الرسمي](https://github.com/AUTOMATIC1111/stable-diffusion-webui) عبر `git clone`، أو نزّلها كملف ZIP — الاستنساخ يجعل التحديثات المستقبلية عبر `git pull` أسهل بكثير.' },
          { title: 'تشغيل سكربت الإطلاق الخاص بمنصتك', whyItMatters: 'يقوم `webui-user.bat` على Windows أو `webui.sh` على Linux/Mac تلقائيًا بإنشاء بيئة Python افتراضية وتثبيت الاعتماديات المطلوبة عند التشغيل الأول — قد تستغرق هذه الخطوة عدة دقائق وتحتاج اتصالًا مستقرًا بالإنترنت.' },
          { title: 'تنزيل نقطة تفتيش (checkpoint) لـ Stable Diffusion', whyItMatters: 'لا يأتي AUTOMATIC1111 بأوزان نموذج مضمّنة. نزّل ملف نقطة تفتيش (مثلًا من [Hugging Face](https://huggingface.co/stabilityai)) وضعه في مجلد `models/Stable-diffusion` — راجع [مراجعة Stable Diffusion من PromptQuorum](/ar/power-local-llm/stable-diffusion-review) لتفاصيل الإصدار والترخيص.' },
          { title: 'فتح واجهة الويب المحلية', whyItMatters: 'بمجرد انتهاء الإعداد، يبدأ السكربت خادم ويب محليًا (عادة على `http://127.0.0.1:7860`) وتفتح الواجهة تلقائيًا في متصفحك — من هذه النقطة، يعمل كل شيء محليًا وليس في السحابة.' },
          { title: 'كتابة نص توجيهي في تبويب txt2img والنقر على Generate', whyItMatters: 'اكتب وصفًا، واترك إعدادات أخذ العينات الافتراضية في تشغيلك الأول، وانقر على Generate — عادة ما يكون الاستدلال الأول أبطأ أثناء تحميل النموذج إلى ذاكرة VRAM.' },
          { title: 'تثبيت الإضافات بعد أن تشعر بالارتياح', whyItMatters: 'يتيح لك تبويب Extensions المدمج إضافة أدوات مجتمعية مثل ControlNet مباشرة من قائمة — راجع قسم الإضافات أدناه قبل تثبيت أي شيء من مصدر غير معروف.' },
        ],
        note: 'الأوامر الدقيقة وإصدارات الاعتماديات وخطوات استكشاف الأخطاء تتغير مع الوقت — اتّبع [ويكي التثبيت](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) الحالي للمشروع بدلًا من دليل عام، لأن مشاكل توافق تعريفات GPU وإصدار Python هي السبب الأكثر شيوعًا لفشل التثبيت.',
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'حالة الصيانة: موثقة',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'لم يتلقَّ AUTOMATIC1111 أي تحديث منذ 2 مارس 2026: كان آخر إصدار موسوم v1.10.1 (نُشر في 9 فبراير 2025)، ويصف أشهر نسخة متفرعة منه المشروع الأصلي في README الخاص بها بأنه «almost static now».' },
          { type: 'plain-terms', text: 'ما زال المشروع يعمل ويُستخدم على نطاق واسع، لكن لم يدفع أحد تحديثًا إليه منذ 2 مارس 2026، لذا فمن الأرجح أن يظهر دعم أنواع النماذج الأحدث أولًا في أدوات تُطوَّر بنشاط مثل ComfyUI أو InvokeAI أو SD.Next.' },
        ],
        columns: ['المؤشر', 'الحالة الموثقة', 'المصدر'],
        rows: [
          { 'المؤشر': 'آخر إصدار موسوم', 'الحالة الموثقة': 'v1.10.1 — الشيفرة بتاريخ 27 يوليو 2024؛ نُشرت ملاحظات الإصدار في 9 فبراير 2025', 'المصدر': '[إصدارات GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)' },
          { 'المؤشر': 'آخر تحديث في فرع `master`', 'الحالة الموثقة': '27 يوليو 2024', 'المصدر': '[سجل تحديثات GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commits/master)' },
          { 'المؤشر': 'آخر تحديث في فرع `dev`', 'الحالة الموثقة': '2 مارس 2026 (دمج PR #17313)؛ لا التزامات في `dev` منذ ذلك الحين', 'المصدر': 'سجل تحديثات GitHub (تحقق من التاريخ الحالي قبل الاستشهاد به)' },
          { 'المؤشر': 'المشكلات (issues) المفتوحة', 'الحالة الموثقة': '2,429 مفتوحة (بحث المشكلات في GitHub، 2026-11-02)', 'المصدر': '[مشكلات GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues)' },
          { 'المؤشر': 'تقييم مطوّر النسخة المشتقة نفسه', 'الحالة الموثقة': '"Because original SD-WebUI is almost static now, Forge will sync with original WebUI every 90 days, or when important fixes" — اقتباس مباشر من ملف README الخاص بمشروع Forge نفسه', 'المصدر': '[Forge README](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'المؤشر': 'Forge (نسخة متفرعة): آخر دفعة', 'الحالة الموثقة': '31 يوليو 2025؛ وأحدث إصدار له على GitHub بتاريخ 5 فبراير 2024', 'المصدر': '[Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { 'المؤشر': 'إضافة ControlNet: آخر دفعة', 'الحالة الموثقة': '12 أغسطس 2024؛ لا توجد إصدارات على GitHub', 'المصدر': '[sd-webui-controlnet على GitHub](https://github.com/Mikubill/sd-webui-controlnet)' },
        ],
        content: [
          'يعرض هذا القسم ما أمكن التحقق منه مباشرة عبر واجهة GitHub البرمجية في 2026-11-02، بدل تكرار ادعاءات من مصادر ثانوية. لم يتلقَّ AUTOMATIC1111 أي تحديث منذ 2 مارس 2026: فرع `master` المستقر، الذي تشير إليه أغلب مثبّتات النقرة الواحدة والوثائق، لم يتغيّر منذ 27 يوليو 2024، ولا توجد في فرع `dev` أي التزامات بعد 2 مارس 2026. المستودع غير مؤرشف ولم يعلن المشرف التخلي عنه، لكن ينبغي التعامل معه على أنه قد يكون غير مصان.',
          'أوثق إشارة خارجية تأتي من lllyasviel، مطوّر Forge، وهو نسخة متفرعة مبنية على شيفرة AUTOMATIC1111. يقول README الخاص بـ Forge إنه سيتزامن «with original WebUI every 90 days, or when important fixes» لأن «original SD-WebUI is almost static now». هذا وصف من مشرف نسخة متفرعة لوتيرة AUTOMATIC1111، وليس شائعة. وForge نفسه لم يتلقَّ أي دفعة منذ 31 يوليو 2025، فلم يعد دليلًا على وجود بديل نشط.',
          'لا يعني ذلك كله أن AUTOMATIC1111 سيتوقف عن العمل. فهو ما زال يعمل مع سير عمل Stable Diffusion 1.5 وSDXL، وما زالت قاعدة مستخدميه وتغطية الشروحات أكبر من معظم البدائل. والأثر العملي يخص المستقبل: من يحتاج إلى دعم معماريات نماذج أحدث أو إلى إصلاح سريع للأخطاء عليه مقارنة ComfyUI وInvokeAI وSD.Next، التي تلقّت جميعها دفعات تعديلات في 2026-11-02، عبر جدول المقارنة أدناه.',
        ],
        note: 'تتغيّر بيانات نشاط GitHub باستمرار: تم التحقق من الأرقام أعلاه عبر واجهة GitHub البرمجية في 2026-11-02. راجع [المستودع](https://github.com/AUTOMATIC1111/stable-diffusion-webui) لمعرفة الأرقام الحالية قبل الاعتماد على هذا الجدول في قرار عاجل.',
      },
      extensionsControlnet: {
        id: 'extensions-controlnet',
        title: 'الإضافات ونظام ControlNet',
        content: [
          'يتيح تبويب Extensions المدمج في AUTOMATIC1111 للمستخدمين تثبيت إضافات من صنع المجتمع مباشرة من قائمة مُنسّقة أو من رابط Git، دون تعديل أي شيفرة. أنتج هذا النظام، إلى جانب حجم قاعدة المستخدمين منذ 2022، أحد أكبر كتالوجات أدوات Stable Diffusion بين جميع الواجهات.',
          'الإضافة الأكثر استخدامًا على الإطلاق هي [sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) (يُشار إليها غالبًا باسم "ControlNet" فقط في الواجهة)، والتي تتيح لصورة مرجعية — هيكل عظمي لوضعية، أو خريطة عمق، أو مخطط حواف canny، أو رسم تخطيطي تقريبي — توجيه تكوين الصورة المولّدة بدقة أكبر بكثير من مجرد نص توجيهي نصي. يُنظر إليها على نطاق واسع في استخدام المجتمع بأنها الإضافة التي غيّرت طريقة العمل في AUTOMATIC1111 أكثر من غيرها، ولا تزال من بين إضافات Stable Diffusion الأكثر تقييمًا بالنجوم على GitHub. تتناول PromptQuorum ControlNet بمزيد من التفصيل في مقال مخصص (انظر قراءات ذات صلة أدناه).',
          'إلى جانب ControlNet، تشمل قائمة الإضافات أدوات لتدريب وإدارة LoRA (Low-Rank Adaptation)، وتصفح الصور ووضع العلامات عليها، وتتبّع سجل النصوص التوجيهية، وسكربتات أتمتة سير العمل. ولأن الإضافات يصونها المجتمع وهي مستقلة عن وتيرة إصدارات AUTOMATIC1111 نفسها، يمكن تحديث إضافات فردية بنشاط حتى في الفترات التي يشهد فيها المشروع الأساسي تحديثات أقل — لكن هذا يعني أيضًا أن الجودة ووتيرة التحديث تتفاوتان بشكل كبير حسب المطوّر، لذا تحقق من نشاط مستودع الإضافة نفسه قبل الاعتماد عليها في سير عمل إنتاجي.',
        ],
        note: 'راجع دائمًا مصدر الإضافة وصلاحياتها قبل تثبيتها — تعمل الإضافة ضمن نفس عملية Python التي يعمل بها AUTOMATIC1111 نفسه، وهي غير معزولة (sandboxed).',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'متطلبات العتاد',
        itemHeadings: true,
        columns: ['حمل العمل', 'أدنى ذاكرة VRAM', 'ذاكرة VRAM مريحة', 'ملاحظات'],
        rows: [
          { 'حمل العمل': 'نقاط تفتيش SD 1.5', 'أدنى ذاكرة VRAM': '4 غيغابايت VRAM (وردت تقارير عن عمله بـ 2 غيغابايت)', 'ذاكرة VRAM مريحة': '6–8 غيغابايت VRAM', 'ملاحظات': 'أخف حمل عمل؛ يعمل على معظم معالجات الرسومات من العقد الماضي وفقًا لتوثيق المشروع نفسه' },
          { 'حمل العمل': 'نقاط تفتيش SDXL', 'أدنى ذاكرة VRAM': '8 غيغابايت VRAM (مع التحسينات)', 'ذاكرة VRAM مريحة': '12 غيغابايت+ VRAM', 'ملاحظات': 'الإخراج الأصلي بدقة 1024×1024 أثقل لكل صورة مقارنة بـ SD 1.5' },
          { 'حمل العمل': 'تفعيل إضافة ControlNet', 'أدنى ذاكرة VRAM': 'يضيف نحو 1–2 غيغابايت VRAM فوق نقطة التفتيش الأساسية', 'ذاكرة VRAM مريحة': 'خطط وفقًا لذلك', 'ملاحظات': 'العبء الإضافي الدقيق يعتمد على نموذج ControlNet والمعالج المسبق المُحمَّلين' },
          { 'حمل العمل': 'معالجات رسومات AMD / Intel، Apple Silicon', 'أدنى ذاكرة VRAM': 'مدعومة عبر مسارات إعداد منفصلة', 'ذاكرة VRAM مريحة': 'يختلف الأداء حسب المنصة', 'ملاحظات': 'معالجات NVIDIA هي المسار الموصى به رسميًا والأفضل دعمًا؛ تتطلب AMD وIntel وApple Silicon كل منها تعليمات تثبيت مختلفة موثقة في ويكي المشروع' },
        ],
        note: 'يعتمد استهلاك VRAM الدقيق على الدقة وحجم الدفعة والإضافات المفعّلة وخيارات التحسين في سطر الأوامر (مثل `--medvram` و`--lowvram`) — اعتبر هذه نطاقات تخطيطية وراجع [صفحة الاعتماديات في الويكي](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies) الحالية للمشروع للحصول على إرشادات محدّثة.',
      },
      licensePricing: {
        id: 'license-pricing',
        title: 'الترخيص والأسعار',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 مرخّص بموجب AGPL-3.0 (GNU Affero General Public License v3.0) وهو مجاني للتنزيل والاستضافة الذاتية والتعديل، دون أي مستوى مدفوع رسمي أو خطة استضافة من أي نوع.' },
          { type: 'plain-terms', text: 'لا يوجد اشتراك، ولا نسخة مميزة (premium)، ولا شركة تبيع AUTOMATIC1111 كمنتج — إنه مشروع مفتوح المصدر يصونه المجتمع تُشغّله بنفسك، وتكلفتك الوحيدة هي عتادك الخاص والكهرباء.' },
        ],
        content: [
          'قاعدة شيفرة AUTOMATIC1111 منشورة بموجب ترخيص AGPL-3.0، وهو أمر مؤكَّد مباشرة على [مستودع GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui) الخاص به. AGPL-3.0 هو ترخيص "copyleft" قوي: يسمح بالاستخدام والتعديل وإعادة التوزيع مجانًا، لكن إذا عدّلت الشيفرة وشغّلتها كخدمة شبكية يتفاعل معها آخرون، فإن الترخيص يتطلب عمومًا أن تتيح أيضًا شيفرة المصدر المعدّلة لهؤلاء المستخدمين. يختلف هذا عن أوزان نموذج Stable Diffusion نفسه، التي تحمل شروط ترخيص منفصلة خاصة بها حسب الإصدار الذي تنزّله — راجع [مراجعة Stable Diffusion من PromptQuorum](/ar/power-local-llm/stable-diffusion-review) لهذه التفاصيل، إذ إن ترخيص الواجهة وترخيص النموذج وثيقتان قانونيتان منفصلتان.',
          'لا يوجد أي مستوى مدفوع رسمي أو اشتراك أو نسخة مستضافة من AUTOMATIC1111 يقدّمها القائم على صيانته. توجد خدمات سحابية تابعة لجهات خارجية تستضيف نسخًا من AUTOMATIC1111 مقابل رسوم (وقت معالج رسومات مستأجَر)، لكنها أعمال مستقلة وليست منتجًا رسميًا — تحقق من شروط وأسعار أي خدمة من هذا النوع بشكل منفصل قبل الدفع مقابلها، ولاحظ أن استخدام مضيف تابع لجهة خارجية يعني أن النصوص التوجيهية والصور تمر عبر بنية ذلك المزوّد بدلًا من أن تبقى محلية بالكامل.',
        ],
        note: 'يمكن قراءة النص الكامل للترخيص في ملف [LICENSE.txt على GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) الخاص بالمشروع — هذا القسم ملخّص وليس استشارة قانونية، وبند الاستخدام الشبكي في AGPL-3.0 ذو صلة خاصة إذا كنت تخطط لتقديم AUTOMATIC1111 كخدمة مستضافة للآخرين.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AUTOMATIC1111 مقابل البدائل',
        columns: ['الخيار', 'الأفضل لـ', 'وتيرة الصيانة (2026)', 'الترخيص', 'المفاضلة الرئيسية'],
        rows: [
          {
            'الخيار': 'AUTOMATIC1111 (Stable Diffusion web UI)',
            'الأفضل لـ': 'إحدى أكبر قواعد الدروس والإضافات، وبساطة قائمة على التبويبات',
            'وتيرة الصيانة (2026)': 'لا تحديث منذ 2 مارس 2026؛ `master` دون تغيير منذ 27 يوليو 2024',
            'الترخيص': 'AGPL-3.0',
            'المفاضلة الرئيسية': 'الخيار الأكثر توثيقًا، لكن دعم النماذج الأحدث يميل إلى الوصول أولًا إلى النسخ المشتقة',
          },
          {
            'الخيار': '[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'الأفضل لـ': 'واجهة مألوفة تشبه AUTOMATIC1111 مع دعم أسرع للميزات والنماذج الجديدة',
            'وتيرة الصيانة (2026)': 'لا دفعات منذ 31 يوليو 2025؛ وأحدث إصدار على GitHub بتاريخ 5 فبراير 2024',
            'الترخيص': 'AGPL-3.0',
            'المفاضلة الرئيسية': 'مجتمع أصغر من AUTOMATIC1111 نفسه؛ لا يزال يتّبع البنية العامة لقاعدة الشيفرة الأصلية',
          },
          {
            'الخيار': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'الأفضل لـ': 'تحكم دقيق قائم على رسم بياني للعُقد في خط أنابيب التوليد',
            'وتيرة الصيانة (2026)': 'قيد تطوير فعّال، تحديثات متكررة',
            'الترخيص': 'GPL-3.0',
            'المفاضلة الرئيسية': 'منحنى تعلّم أكثر حدّة من تخطيط تبويبات AUTOMATIC1111؛ الرسوم البيانية للعُقد أكثر قوة لكنها أقل سهولة للمبتدئين',
          },
          {
            'الخيار': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'الأفضل لـ': 'واجهة أنيقة وموجهة للاستخدام الاحترافي مع سير عمل قائم على لوحة رسم (canvas)',
            'وتيرة الصيانة (2026)': 'قيد تطوير فعّال',
            'الترخيص': 'Apache-2.0',
            'المفاضلة الرئيسية': 'نظام إضافات أصغر من AUTOMATIC1111؛ واجهة أكثر تقييدًا مع سكربتات مجتمعية متفرقة أقل',
          },
          {
            'الخيار': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'الأفضل لـ': 'أقل عدد من النقرات للوصول إلى صورة قابلة للاستخدام، بإعدادات دنيا',
            'وتيرة الصيانة (2026)': 'آخر دفعة في 1 ديسمبر 2025؛ وأحدث إصدار v2.5.5 (12 أغسطس 2024)',
            'الترخيص': 'GPL-3.0',
            'المفاضلة الرئيسية': 'إعدادات أقل عمدًا ودعم إضافات أقل مقابل البساطة',
          },
          {
            'الخيار': '[SD.Next](https://github.com/vladmandic/sdnext)',
            'الأفضل لـ': 'واجهة شاملة تشبه AUTOMATIC1111 مع دعم أوسع للنماذج والعتاد',
            'وتيرة الصيانة (2026)': 'قيد تطوير فعّال، تحديثات متكررة',
            'الترخيص': 'Apache-2.0',
            'المفاضلة الرئيسية': 'مجتمع وقاعدة دروس تعليمية أصغر من AUTOMATIC1111 رغم تكافؤ الميزات أو تفوّقها',
          },
        ],
        note: 'تستند وتيرة الصيانة إلى نشاط الدفعات والإصدارات العام الذي تم التحقق منه على GitHub في 2026-11-02، وقد تتغيّر — راجع مستودع كل مشروع قبل الاختيار بناءً على مستوى النشاط وحده. انظر [مراجعة Stable Diffusion](/power-local-llm/stable-diffusion-review) لمقارنة النماذج الأساسية، و[توليد الصور بالذكاء الاصطناعي محليًا مقابل السحابة](/power-local-llm/local-ai-image-generation-vs-cloud) لمفاضلات المحلي مقابل السحابي.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب AUTOMATIC1111',
        items: [
          '**القارئ الذي يريد إحدى أكبر قواعد الدروس التعليمية وإجابات المجتمع.** نظرًا لكونه الأول في السوق وله أطول تاريخ تثبيت، يشير جزء كبير من منشورات المنتديات ودروس YouTube والإجابات على طراز Stack Overflow حول واجهات Stable Diffusion إلى AUTOMATIC1111 تحديدًا.',
          '**القارئ الذي يريد ControlNet وفهرس إضافات ناضجًا.** إضافة ControlNet وآلاف الإضافات المجتمعية الأخرى شائعة الاستخدام؛ راجع مستودع كل إضافة قبل الاعتماد عليها، لأن آخر دفعة تلقتها إضافة ControlNet الرئيسية كانت في 12 أغسطس 2024.',
          '**القارئ الذي يفضّل واجهة قائمة على التبويبات على رسم بياني للعُقد.** تخطيط AUTOMATIC1111 — حقول نصية وأشرطة تمرير وأزرار منظّمة في تبويبات — عادة ما يكون أسهل بالنسبة لمستخدم جديد مقارنة بلوحة العُقد في ComfyUI.',
          '**القارئ الذي يريد تحكمًا محليًا كاملًا وخصوصية.** بمجرد التثبيت، يتم التوليد بالكامل على معالج الرسومات الخاص بك؛ ولا يغادر أي نص توجيهي أو بيانات صورة جهازك ما لم تُثبّت إضافة تفعل ذلك.',
          '**القارئ ذو الميزانية المحدودة الذي يريد تكلفة ترخيص صفرية للواجهة نفسها.** يعني AGPL-3.0 أن البرنامج مجاني للاستخدام والتعديل وإعادة التوزيع، دون أي نوع من الاشتراك.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب AUTOMATIC1111',
        items: [
          '**القارئ الذي يريد دعم أحدث معماريات النماذج.** مع غياب أي تحديث منذ 2 مارس 2026، من الأرجح أن يظهر دعم النماذج الجديدة أولًا في أدوات تُطوَّر بنشاط مثل ComfyUI أو InvokeAI أو SD.Next — قارن بينها أولًا.',
          '**القارئ الذي يريد تطبيقًا بنقرة واحدة دون أي تعامل مع سطر الأوامر.** يتطلب التثبيت Python وGit، وعلى بعض الأنظمة استكشاف يدوي لمشاكل إصدارات الاعتماديات وحلها — القراء الراغبون في تجربة تطبيق استهلاكي مصقول بالكامل قد يفضّلون مثبّت Fooocus المبسّط أو أداة سحابية بدلًا من ذلك.',
          '**القارئ الذي يحتاج إلى إصلاحات أخطاء نشطة ومضمونة في المستودع الأساسي وفق جدول زمني يمكن التنبؤ به.** مع أكثر من 2,400 مشكلة مفتوحة وعدم صدور إصدار موسوم جديد منذ يوليو 2024 على فرع `master`، لا ينبغي للقراء ذوي متطلبات الموثوقية الصارمة افتراض معالجة سريعة لخلل مُبلَّغ عنه حديثًا.',
          '**القارئ الذي يريد أقصى تحكم في سير العمل عبر خطوط أنابيب متعددة الخطوات.** يوفّر نهج الرسم البياني للعُقد في ComfyUI عمومًا تحكمًا أدق في خطوط أنابيب التوليد المعقدة متعددة المراحل مقارنة بتخطيط تبويبات AUTOMATIC1111.',
          '**الفريق المؤسسي الذي يحتاج إلى منتج مدعوم من مورّد مع اتفاقية مستوى خدمة (SLA).** AUTOMATIC1111 مشروع مجتمعي دون عقد دعم رسمي أو مستوى مدفوع أو اتفاقية مستوى خدمة — ينبغي للفرق التي تحتاج دعمًا تعاقديًا تقييم منتج تجاري سحابي لتوليد الصور بدلًا من ذلك.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل AUTOMATIC1111 هو نفسه Stable Diffusion؟',
            a: 'لا. Stable Diffusion هو عائلة النماذج المفتوحة الأوزان الأساسية؛ أما AUTOMATIC1111 (Stable Diffusion web UI) فهو واجهة أمامية مجانية ومنفصلة تُحمّل أوزان ذلك النموذج وتتيح توليد الصور من متصفح. تحتاج إلى كليهما: أوزان النموذج (تُنزَّل بشكل منفصل) وواجهة مثل AUTOMATIC1111 لاستخدامها فعليًا.',
          },
          {
            q: 'هل ما زال AUTOMATIC1111 تحت الصيانة في 2026؟',
            a: 'لم يُنشر أي تحديث منذ 2 مارس 2026. نُشر آخر إصدار موسوم v1.10.1 في 9 فبراير 2025، ولا توجد التزامات في فرع `dev` منذ 2 مارس 2026. يصف README الخاص بـ Forge الأصل بأنه «almost static now»، وForge نفسه لم يتلقَّ أي دفعة منذ 31 يوليو 2025. ما زال يعمل، لكن تعامل معه على أنه قد يكون غير مصان وقارن ComfyUI أو InvokeAI أو SD.Next.',
          },
          {
            q: 'هل AUTOMATIC1111 مجاني؟',
            a: 'نعم. مرخّص بموجب AGPL-3.0 ومجاني للتنزيل والاستضافة الذاتية والتعديل. لا يوجد أي مستوى مدفوع رسمي أو اشتراك أو خطة استضافة — تكلفتك الوحيدة هي عتادك الخاص والكهرباء. ستحتاج مع ذلك إلى تنزيل أوزان نموذج Stable Diffusion بشكل منفصل، وهي تحمل شروط ترخيص خاصة بها.',
          },
          {
            q: 'ما هو ControlNet في AUTOMATIC1111؟',
            a: 'ControlNet هو الإضافة المجتمعية الأكثر استخدامًا على الإطلاق لـ AUTOMATIC1111. يتيح لصورة مرجعية — مثل هيكل عظمي لوضعية، أو خريطة عمق، أو مخطط حواف — توجيه تكوين الصورة المولّدة بدقة أكبر بكثير من مجرد نص توجيهي نصي. يُثبَّت عبر تبويب Extensions المدمج وليس جزءًا من قاعدة شيفرة AUTOMATIC1111 الأساسية.',
          },
          {
            q: 'ما العتاد الذي أحتاجه لتشغيل AUTOMATIC1111؟',
            a: 'بالنسبة لنقاط تفتيش SD 1.5، فإن 4 غيغابايت من VRAM هو الحد الأدنى الموثق (مع بعض التقارير عن عمله بـ 2 غيغابايت)، بينما 6–8 غيغابايت أكثر راحة. بالنسبة لنقاط تفتيش SDXL، توقع الحاجة إلى 8 غيغابايت من VRAM مع تفعيل تحسينات الذاكرة، و12 غيغابايت أو أكثر للاستخدام المريح. معالجات NVIDIA هي المسار الموصى به رسميًا والأفضل دعمًا؛ تُدعم AMD وIntel وApple Silicon عبر تعليمات إعداد منفصلة وخاصة بكل منصة.',
          },
          {
            q: 'ما الفرق بين AUTOMATIC1111 وForge؟',
            a: 'Forge نسخة متفرعة من شيفرة AUTOMATIC1111، بناها lllyasviel لإضافة تحسينات الأداء ودعم نماذج أحدث مثل Flux. بحسب README الخاص به، يتزامن مع الأصل كل 90 يومًا تقريبًا أو عند الإصلاحات المهمة. وكانت آخر دفعة له على GitHub في 31 يوليو 2025، وأحدث إصدار له على GitHub بتاريخ 5 فبراير 2024، فلم يعد خيارًا أكثر نشاطًا بوضوح — راجع مستودعه قبل اختياره.',
          },
          {
            q: 'ما الفرق بين AUTOMATIC1111 وComfyUI؟',
            a: 'يستخدم AUTOMATIC1111 واجهة قائمة على التبويبات (حقول نصية وأشرطة تمرير وأزرار) عادة ما تكون أسهل للمبتدئين. يستخدم ComfyUI واجهة رسم بياني للعُقد حيث تربط كتلًا تمثّل كل خطوة معالجة، مما يوفّر تحكمًا أدق في خطوط الأنابيب المعقدة على حساب منحنى تعلّم أكثر حدّة. كما يُظهر ComfyUI نشاط تطوير أكثر تكرارًا في 2026.',
          },
          {
            q: 'من أين أنزّل AUTOMATIC1111؟',
            a: 'المصدر الرسمي هو [مستودع AUTOMATIC1111/stable-diffusion-webui على GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui)، الذي يتضمن الشيفرة وويكي تثبيت وروابط لتعليمات إعداد خاصة بعتاد NVIDIA وAMD وIntel وApple Silicon. ستحتاج إلى تنزيل أوزان نموذج Stable Diffusion بشكل منفصل (مثلًا من Hugging Face) لاستخدامه.',
          },
          {
            q: 'هل ما زال Stable Diffusion WebUI Forge مصانًا؟',
            a: 'كانت آخر دفعة له على GitHub في 31 يوليو 2025، وأحدث إصدار له على GitHub بتاريخ 5 فبراير 2024. ويذكر README أنه مبني على SD-WebUI 1.10.1. راجع المستودع بحثًا عن نشاط أحدث قبل اختياره.',
          },
          {
            q: 'هل ما زالت إضافة ControlNet لـ AUTOMATIC1111 مصانة؟',
            a: 'تلقّى مستودع sd-webui-controlnet آخر دفعة في 12 أغسطس 2024 ولا توجد له إصدارات على GitHub. ما زالت شائعة الاستخدام، لكن راجع مستودعها ومشكلاتها المفتوحة قبل الاعتماد عليها في سير عمل إنتاجي.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'استحق AUTOMATIC1111 مكانته واجهةً محلية افتراضية لـ Stable Diffusion لأنه كان الأول، وما زال نظامه البيئي — وفي مقدمته إضافة ControlNet، إلى جانب آلاف الأدوات المجتمعية والشروحات وإجابات المنتديات — أكبر أصوله. لكن المشروع لم يتلقَّ أي تحديث منذ 2 مارس 2026، وآخر إصدار موسوم له v1.10.1، ونسخته المتفرعة Forge لم تتلقَّ أي دفعة منذ 31 يوليو 2025، وآخر دفعة تلقتها إضافة ControlNet الرئيسية كانت في 12 أغسطس 2024. ما زال يُثبَّت ويعمل مع نقاط SD 1.5 وSDXL، فلا يوجد سبب عاجل للتحول لمن يستخدمه بالفعل. أما من يبدأ من جديد فعليه مقارنة ComfyUI وInvokeAI وSD.Next، وهي تُطوَّر بنشاط، بدل اختيار AUTOMATIC1111 لمجرد شهرته، وأن يتأكد أولًا من أنه يعمل مع بطاقته الرسومية ونموذجه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[AUTOMATIC1111/stable-diffusion-webui على GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — المستودع الرسمي، والشيفرة، والإصدارات، وسجل التحديثات.',
          '[إصدارات AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — تواريخ إصدارات موثقة، بما في ذلك v1.10.1 (الشيفرة بتاريخ 27 يوليو 2024؛ نُشرت في 9 فبراير 2025).',
          '[ملف LICENSE.txt الخاص بـ AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — النص الكامل لترخيص AGPL-3.0.',
          '[ويكي AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) — أدلة التثبيت لـ NVIDIA وAMD وIntel وApple Silicon.',
          '[Stable Diffusion WebUI Forge على GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge) — تصريح ملف README حول وتيرة تطوير AUTOMATIC1111 وسياسة المزامنة كل 90 يومًا الخاصة بـ Forge.',
          '[Mikubill/sd-webui-controlnet على GitHub](https://github.com/Mikubill/sd-webui-controlnet) — إضافة ControlNet لـ AUTOMATIC1111.',
          '[ComfyUI على GitHub](https://github.com/comfy-org/ComfyUI)، و[InvokeAI على GitHub](https://github.com/invoke-ai/InvokeAI)، و[Fooocus على GitHub](https://github.com/lllyasviel/Fooocus)، و[SD.Next على GitHub](https://github.com/vladmandic/sdnext) — مستودعات واجهات بديلة أُشير إليها للمقارنة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Stable Diffusion: نماذج تحويل النص إلى صورة مفتوحة الأوزان](/ar/power-local-llm/stable-diffusion-review) — ما هو النموذج الأساسي فعليًا، وشروط الترخيص حسب الإصدار، ومتطلبات العتاد.',
          '[مراجعة Real-ESRGAN: أداة تكبير الصور بالذكاء الاصطناعي](/ar/power-local-llm/real-esrgan-ai-image-upscaler-review) — أداة محلية مكمّلة لتكبير الصور المولَّدة في AUTOMATIC1111 أو أي واجهة أخرى.',
          '[توليد الصور المحلي بالذكاء الاصطناعي مقابل السحابة](/ar/power-local-llm/local-ai-image-generation-vs-cloud) — مقارنة أعمق لخيارات توليد الصور المحلية مقابل أدوات سحابية مثل Midjourney وAdobe Firefly.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/automatic1111-review-hero-zh.webp',
    title: 'AUTOMATIC1111评测：详解Stable Diffusion WebUI',
    seoTitle: 'AUTOMATIC1111评测：安装、维护状态与替代品',
    intro:
      'AUTOMATIC1111——正式名称为"Stable Diffusion web UI"——是一款免费、开源、采用标签页布局的Web界面，用于在自己的GPU上运行Stable Diffusion模型。它于2022年8月22日在GitHub上发布，比Stable Diffusion公开发布晚了一个月，成为第一个被广泛采用的本地图像生成图形前端，并且至今仍被第三方评测称为该类别中使用最广泛、文档最完善的选择之一，这得益于其庞大的扩展生态系统（ControlNet、LoRA训练以及数千个社区脚本）。本评测将说明AUTOMATIC1111究竟是什么，它与Stable Diffusion模型本身以及ComfyUI、Forge、InvokeAI等更新的界面有何不同，展望2026年的真实维护状态、许可条款、硬件需求，并诚实地说明如今谁应该——以及谁不应该——使用它。',
    metaDescription:
      'AUTOMATIC1111评测：Stable Diffusion WebUI 是什么、经核实的维护状态、AGPL-3.0 许可证、ControlNet、硬件需求以及可选替代品对比。',
    twitterDescription:
      'AUTOMATIC1111评测2026：详解最初的Stable Diffusion WebUI——经核实的维护状态、许可、扩展生态系统、硬件需求，以及与Forge、ComfyUI、InvokeAI的对比。',
    audience:
      '面向正在考虑是否安装AUTOMATIC1111的Stable Diffusion WebUI以进行本地图像生成的读者——涵盖经核实的维护状态、许可条款、硬件需求、扩展生态系统，以及与仍在积极维护的分支和替代界面的对比。',
    readTime: '12分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AUTOMATIC1111 review',
    targetKeywords: [
      'automatic1111 评测',
      'stable diffusion webui',
      'automatic1111 安装',
      'automatic1111 对比 comfyui',
      'automatic1111 对比 forge',
      'automatic1111 controlnet',
      'stable diffusion webui 维护',
      'automatic1111 许可证',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL', 'ControlNet', 'Stable Diffusion WebUI Forge', 'ComfyUI', 'InvokeAI', 'Fooocus'],
    current_hardware_mentioned: ['2 GB VRAM', '4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '12 GB VRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**警告：AUTOMATIC1111 自 2026 年 3 月 2 日起没有更新（最新版本 v1.10.1，发布于 2025 年 2 月 9 日），可能已无人维护——使用前请先确认。** **AUTOMATIC1111（Stable Diffusion web UI）是在本地运行 Stable Diffusion 模型的免费开源（AGPL-3.0）浏览器界面，而不是模型本身。**',
    quickAnswerTop: {
      zh: {
        question: 'AUTOMATIC1111还在维护吗？它和Stable Diffusion是同一回事吗？',
        answer:
          '自 2026 年 3 月 2 日起没有发布任何更新。AUTOMATIC1111 不是 Stable Diffusion：它是一个独立的免费开源网页界面，加载 Stable Diffusion 模型权重，并让你在浏览器标签页中生成图像。其最新的带标签版本 v1.10.1 发布于 2025 年 2 月 9 日，`dev` 分支自 2026 年 3 月 2 日起没有新的提交。使用最多的分支 Forge 称原项目“almost static now”，但 Forge 自身也已自 2025 年 7 月 31 日起没有推送。它在许多配置下仍能工作；需要更新的模型架构的读者应比较 ComfyUI、InvokeAI 或 SD.Next。',
        bullets: [
          'AUTOMATIC1111是界面/前端，不是模型——你仍然需要单独下载Stable Diffusion的权重并加载到其中。',
          '已在 GitHub 上核实：最新的带标签版本（v1.10.1）发布于 2025 年 2 月 9 日，`dev` 分支的最后一次提交是 2026 年 3 月 2 日——请查看仓库了解当前状态。',
          '在AGPL-3.0许可下免费且开源；不存在任何官方付费层级或托管方案。',
          '扩展生态系统——尤其是用于引导姿势和构图的ControlNet扩展——是它在核心开发放缓的情况下仍被广泛使用的主要原因。',
          '仍在积极维护的替代品：ComfyUI、InvokeAI 和 SD.Next 都在 2026-11-02 有推送，而基于 AUTOMATIC1111 的分支 Forge 自 2025 年 7 月 31 日起没有推送。',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'AUTOMATIC1111是什么', anchor: 'what-is-automatic1111' },
      { label: '历史：AUTOMATIC1111为何存在', anchor: 'history' },
      { label: '如何安装并生成第一张图像', anchor: 'how-to-install' },
      { label: '维护状态：经核实', anchor: 'maintenance-status' },
      { label: '扩展与ControlNet生态系统', anchor: 'extensions-controlnet' },
      { label: '硬件要求', anchor: 'hardware-requirements' },
      { label: '许可与价格', anchor: 'license-pricing' },
      { label: 'AUTOMATIC1111对比替代方案', anchor: 'vs-alternatives' },
      { label: '谁应该使用AUTOMATIC1111', anchor: 'who-should-use' },
      { label: '谁不应该使用AUTOMATIC1111', anchor: 'who-should-not-use' },
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
          'AUTOMATIC1111（Stable Diffusion web UI）是一款免费、开源、标签页式的Web界面，用于在本地运行Stable Diffusion——它是前端应用程序，而不是模型本身。',
          '由一位使用"AUTOMATIC1111"这一化名的匿名开发者于2022年8月22日在GitHub上发布，比Stable Diffusion公开发布晚一个月，填补了本地图形界面的空白。',
          '采用AGPL-3.0许可。仅支持自托管，没有任何官方付费层级或托管方案。',
          '其主代码库自 2024 年中以来明显放缓：最新的带标签版本（v1.10.1）发布于 2025 年 2 月 9 日，`dev` 分支的最后一次提交是 2026 年 3 月 2 日——请查看 GitHub 了解当前状态。',
          '扩展生态系统，尤其是用于姿势/构图引导的ControlNet扩展，是它保留下来的最大优势——在所有本地图像生成界面中，属于规模最大、文档最完善的社区扩展集合之一。',
          '仍在积极维护的替代品包括 ComfyUI、InvokeAI 和 SD.Next（2026-11-02 有推送）；AUTOMATIC1111 的分支 Forge 自 2025 年 7 月 31 日起没有推送。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '自 2026 年 3 月 2 日起没有更新（最新版本 v1.10.1，发布于 2025 年 2 月 9 日）。AUTOMATIC1111 可能已无人维护：在依赖它之前，请确认它仍能在你的 GPU 和模型上正常运行。',
          },
        ],
      },
      whatIsAutomatic1111: {
        id: 'what-is-automatic1111',
        title: 'AUTOMATIC1111是什么',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111是一款免费、开源、基于浏览器的用户界面，它加载Stable Diffusion模型文件，并让你通过标签页、按钮和文本字段而不是命令行来生成图像。' },
          { type: 'plain-terms', text: '如果说Stable Diffusion是引擎，那么AUTOMATIC1111就是可以安装在其上的多种仪表盘之一——它本身并不能生成图像，你仍然需要先单独下载Stable Diffusion的模型权重，它才能做任何事情。' },
        ],
        content: [
          '正式名称为"Stable Diffusion web UI"的AUTOMATIC1111，是一款基于[Gradio](https://www.gradio.app/)库构建的Python应用程序，为使用Stable Diffusion模型的文本生成图像（txt2img）、图像生成图像（img2img）、局部重绘（inpainting）、扩展绘制（outpainting）和放大等工作流，提供了一个基于浏览器、按标签页组织的界面。它完全在你自己的机器和GPU上运行——除非你有意安装会这样做的扩展，否则不会有任何图像或提示词被发送到第三方服务器。',
          '该项目的名称来自其创建者的GitHub用户名AUTOMATIC1111——这是一位真实身份未公开的匿名开发者。在社区讨论中，该项目常被简称为"A1111"。',
          '**AUTOMATIC1111是一个界面，而不是模型。** 它并不自带Stable Diffusion权重——你必须单独下载一个检查点文件（SD 1.5、SDXL或某个社区微调版本），并将其放入正确的文件夹，之后才能生成任何内容。关于底层模型究竟是什么以及各版本的许可条款，请参阅[PromptQuorum的Stable Diffusion评测](/zh/power-local-llm/stable-diffusion-review)。',
          '它是Stable Diffusion众多相互竞争的前端之一，与之并列的还有[ComfyUI](https://github.com/comfy-org/ComfyUI)（基于节点图的界面，提供更细粒度的工作流控制）、[InvokeAI](https://github.com/invoke-ai/InvokeAI)（更精致、面向专业用途的界面）、[Fooocus](https://github.com/lllyasviel/Fooocus)（简化界面，力求以最少的点击获得可用的图像），以及[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)（AUTOMATIC1111自身的一个分支，将在下方的维护部分详述）。',
        ],
      },
      history: {
        id: 'history',
        title: '历史：AUTOMATIC1111为何存在',
        content: [
          'Stability AI、慕尼黑大学（LMU）的CompVis研究小组以及Runway ML于2022年8月22日公开发布了Stable Diffusion。发布之初，Stable Diffusion是以模型权重和命令行脚本的形式提供的——当时并没有官方的图形界面可以让用户输入提示词并点击按钮。',
          `AUTOMATIC1111在同一天，即2022年8月22日，在GitHub上发布了Stable Diffusion web UI的第一个版本，它在早期社区脚本的基础上，加入了基于Gradio的浏览器界面。这个时机让它恰好出现在正确的时间点：随着Stable Diffusion的人气在2022年底爆炸式增长，AUTOMATIC1111的界面成为大多数爱好者实际使用它的默认方式，短短几个月内积累了数万个GitHub星标，目前已超过${ST.zh('automatic1111-webui', 'bare')}个星标——在本地AI图像生成类别中属于星标数最高的仓库之一。`,
          '由于率先进入市场并吸引了早期大部分社区贡献、扩展开发者和教程作者，AUTOMATIC1111成为事实上的标准参考实现——后来的界面（Forge、ComfyUI的扩展以及社区文档网站）在描述功能和工作流时，至今仍然会以它作为参照，即便这些较新的工具已经采用了不同的技术路线。',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: '如何安装AUTOMATIC1111并生成第一张图像',
        content: [
          '在Windows、Linux和Mac上的安装及首次运行步骤大体相同，但具体命令因平台而异——由于依赖版本可能会变化，开始之前请始终在项目自己的Wiki上确认当前步骤。',
        ],
        numberedItems: [
          { title: '安装前提条件：Python和Git', whyItMatters: 'AUTOMATIC1111不是单文件安装程序——在其自身的安装脚本运行之前，系统上必须已经安装了兼容版本的Python和Git。' },
          { title: '克隆或下载仓库', whyItMatters: '通过`git clone`从[官方GitHub仓库](https://github.com/AUTOMATIC1111/stable-diffusion-webui)获取代码，或以ZIP格式下载——克隆能让日后通过`git pull`进行的更新简单得多。' },
          { title: '运行对应平台的启动脚本', whyItMatters: 'Windows上的`webui-user.bat`或Linux/Mac上的`webui.sh`会在首次运行时自动创建Python虚拟环境并安装所需依赖——这一步可能需要几分钟时间，并需要稳定的网络连接。' },
          { title: '下载一个Stable Diffusion检查点', whyItMatters: 'AUTOMATIC1111不附带任何模型权重。请下载一个检查点文件（例如从[Hugging Face](https://huggingface.co/stabilityai)下载），并将其放入`models/Stable-diffusion`文件夹——版本和许可细节请参阅[PromptQuorum的Stable Diffusion评测](/zh/power-local-llm/stable-diffusion-review)。' },
          { title: '打开本地Web界面', whyItMatters: '设置完成后，脚本会启动一个本地Web服务器（通常在`http://127.0.0.1:7860`），界面会自动在浏览器中打开——从此以后一切都在本地运行，而不是在云端。' },
          { title: '在txt2img标签页中输入提示词并点击Generate', whyItMatters: '输入一段描述，首次运行时保留默认的采样设置，然后点击Generate——由于模型需要加载到显存（VRAM）中，首次推理通常会较慢。' },
          { title: '熟悉之后再安装扩展', whyItMatters: '内置的Extensions标签页可以让你直接从列表中添加ControlNet等社区工具——在从不熟悉的来源安装任何内容之前，请先参阅下方的扩展部分。' },
        ],
        note: '具体命令、依赖版本和故障排除步骤会随时间变化——请遵循项目当前的[安装Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki)，而不是通用指南，因为GPU驱动和Python版本兼容性问题是安装失败最常见的原因。',
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: '维护状态：经核实',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111 自 2026 年 3 月 2 日起没有更新：最新的带标签版本是 v1.10.1（发布于 2025 年 2 月 9 日），其最受欢迎的分支在自己的 README 中称原项目“almost static now”。' },
          { type: 'plain-terms', text: '该项目仍可运行且使用广泛，但自 2026 年 3 月 2 日起没有人推送过更新，因此对新模型类型的支持更可能先出现在 ComfyUI、InvokeAI 或 SD.Next 等积极开发的工具中。' },
        ],
        columns: ['信号', '经核实的状态', '来源'],
        rows: [
          { '信号': '最后一个带标签的版本', '经核实的状态': 'v1.10.1——代码来自2024年7月27日；发布说明于2025年2月9日公布', '来源': '[GitHub releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)' },
          { '信号': '`master`分支的最后一次提交', '经核实的状态': '2024年7月27日', '来源': '[GitHub提交历史](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commits/master)' },
          { '信号': '`dev`分支的最后一次提交', '经核实的状态': '2026 年 3 月 2 日（合并 PR #17313）；此后 `dev` 没有新提交', '来源': 'GitHub提交历史（引用前请核实当前日期）' },
          { '信号': '开放的Issue数量', '经核实的状态': '2,429 个开放（GitHub issue 搜索，2026-11-02）', '来源': '[GitHub issues](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues)' },
          { '信号': '分支维护者自己的评价', '经核实的状态': '"Because original SD-WebUI is almost static now, Forge will sync with original WebUI every 90 days, or when important fixes"——直接引自Forge项目自己的README', '来源': '[Forge README](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { '信号': 'Forge（分支）最后一次推送', '经核实的状态': '2025 年 7 月 31 日；其最新的 GitHub release 日期为 2024 年 2 月 5 日', '来源': '[Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { '信号': 'ControlNet 扩展最后一次推送', '经核实的状态': '2024 年 8 月 12 日；没有 GitHub release', '来源': '[GitHub 上的 sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet)' },
        ],
        content: [
          '本节说明的是 2026-11-02 能直接通过 GitHub API 核实的内容，而不是转述二手说法。AUTOMATIC1111 自 2026 年 3 月 2 日起没有更新：多数一键安装包和文档所指向的稳定 `master` 分支自 2024 年 7 月 27 日起没有变化，`dev` 分支在 2026 年 3 月 2 日之后也没有提交。仓库没有被归档，维护者也没有宣布放弃，但应将其视为可能已无人维护。',
          '最可信的外部信号来自 Forge 的开发者 lllyasviel，Forge 是基于 AUTOMATIC1111 代码库的分支。Forge 的 README 写道它会“sync with original WebUI every 90 days, or when important fixes”，原因是“original SD-WebUI is almost static now”。这是分支维护者对 AUTOMATIC1111 开发节奏的描述，而不是传言。Forge 自身也已自 2025 年 7 月 31 日起没有推送，因此它不再能证明存在活跃的替代品。',
          '这并不意味着 AUTOMATIC1111 会停止工作。它在 Stable Diffusion 1.5 和 SDXL 工作流中仍然可用，其用户基数和教程覆盖面也仍然大于多数替代品。实际影响在于未来：需要支持更新模型架构或快速修复漏洞的读者，应使用下面的对比表比较在 2026-11-02 都有推送的 ComfyUI、InvokeAI 和 SD.Next。',
        ],
        note: 'GitHub 活跃度数据在不断变化：上述数字已于 2026-11-02 通过 GitHub API 核实。在依据此表做出时间敏感的决定之前，请查看[仓库](https://github.com/AUTOMATIC1111/stable-diffusion-webui)获取当前数值。',
      },
      extensionsControlnet: {
        id: 'extensions-controlnet',
        title: '扩展与ControlNet生态系统',
        content: [
          'AUTOMATIC1111内置的Extensions标签页让用户可以直接从精选列表或Git URL安装社区构建的插件，而无需编辑代码。这一扩展系统再加上自2022年以来庞大的用户基数，共同催生了所有界面中规模最大的Stable Diffusion工具目录之一。',
          '迄今为止使用最广泛的扩展是[sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet)（在界面中通常直接被称为"ControlNet"），它可以让参考图像——姿势骨架、深度图、Canny边缘轮廓或粗略草图——比单靠文本提示词更精确地引导生成图像的构图。在社区使用中，它被广泛认为是最大程度改变了AUTOMATIC1111使用方式的扩展，并且至今仍是GitHub上星标最多的Stable Diffusion扩展之一。PromptQuorum在专门的文章中更深入地介绍了ControlNet（见下方相关阅读）。',
          '除ControlNet之外，扩展列表还包括用于LoRA（低秩适应）训练与管理、图像浏览与打标、提示词历史追踪以及工作流自动化脚本的工具。由于扩展由社区维护，独立于AUTOMATIC1111自身的发布节奏，即便核心项目的提交减少，个别扩展仍可能被积极更新——但这也意味着不同作者维护的扩展在质量和更新频率上差异很大，因此在生产工作流中依赖某个扩展之前，请先查看该扩展自身仓库的活跃程度。',
        ],
        note: '安装扩展之前请务必检查其来源和权限——扩展与AUTOMATIC1111本身运行在同一个Python进程中，并没有沙盒隔离。',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: '硬件要求',
        itemHeadings: true,
        columns: ['工作负载', '最低显存', '较为舒适的显存', '说明'],
        rows: [
          { '工作负载': 'SD 1.5检查点', '最低显存': '4 GB VRAM（有报告称2 GB也可运行）', '较为舒适的显存': '6–8 GB VRAM', '说明': '负载最轻；据项目自身文档，可在过去十年内的大多数GPU上运行' },
          { '工作负载': 'SDXL检查点', '最低显存': '8 GB VRAM（配合优化）', '较为舒适的显存': '12 GB以上VRAM', '说明': '原生1024×1024输出每张图像的负载比SD 1.5更重' },
          { '工作负载': '启用ControlNet扩展', '最低显存': '在基础检查点之上额外增加约1–2 GB VRAM', '较为舒适的显存': '请相应预留', '说明': '具体额外开销取决于所加载的ControlNet模型和预处理器' },
          { '工作负载': 'AMD／Intel GPU、Apple Silicon', '最低显存': '通过单独的安装路径支持', '较为舒适的显存': '性能因平台而异', '说明': 'NVIDIA是官方推荐且支持最完善的路径；AMD、Intel和Apple Silicon各自需要不同的安装说明，详见项目Wiki' },
        ],
        note: '具体的VRAM占用取决于分辨率、批处理大小、启用的扩展以及命令行优化参数（例如`--medvram`、`--lowvram`）——请将这些数字视为规划范围，并查阅项目当前的[Dependencies Wiki页面](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies)以获取最新指导。',
      },
      licensePricing: {
        id: 'license-pricing',
        title: '许可与价格',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111采用AGPL-3.0（GNU Affero通用公共许可证v3.0）许可，可免费下载、自托管和修改，不存在任何官方付费层级或托管方案。' },
          { type: 'plain-terms', text: '没有订阅，没有高级版本，也没有任何公司把AUTOMATIC1111作为产品出售——它是一个由社区维护的开源项目，由你自己运行，唯一的成本是你自己的硬件和电费。' },
        ],
        content: [
          'AUTOMATIC1111的代码库以AGPL-3.0许可证发布，这一点可以在其[GitHub仓库](https://github.com/AUTOMATIC1111/stable-diffusion-webui)上直接确认。AGPL-3.0是一种强著佐权（copyleft）许可证：它允许免费使用、修改和再分发，但如果你修改了代码并将其作为供他人交互的网络服务运行，该许可证通常要求你也向这些用户提供修改后的源代码。这与Stable Diffusion模型权重本身不同——后者根据所下载的版本，携带各自独立的许可条款；关于这些细节，请参阅[PromptQuorum的Stable Diffusion评测](/zh/power-local-llm/stable-diffusion-review)，因为界面的许可证和模型的许可证是两份独立的法律文件。',
          '其维护者并未提供任何官方付费层级、订阅或托管版本的AUTOMATIC1111。存在一些第三方云服务，收费托管AUTOMATIC1111实例（出租GPU时长），但这些是独立的商业机构，而非官方产品——在为此类服务付费之前，请单独核实其自身的条款和价格，并注意使用第三方托管服务意味着你的提示词和图像会经过该提供商的基础设施，而不是完全保留在本地。',
        ],
        note: '完整许可证文本可在项目的[GitHub LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt)中阅读——本节只是摘要，并非法律建议；如果你计划将AUTOMATIC1111作为托管服务提供给他人，AGPL-3.0的网络使用条款尤其值得关注。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AUTOMATIC1111对比替代方案',
        columns: ['选项', '最适合', '维护节奏（2026年）', '许可证', '主要权衡'],
        rows: [
          {
            '选项': 'AUTOMATIC1111（Stable Diffusion web UI）',
            '最适合': '规模最大之一的教程与扩展积累，标签页式的简洁操作',
            '维护节奏（2026年）': '自 2026 年 3 月 2 日起没有更新；`master` 自 2024 年 7 月 27 日起未变',
            '许可证': 'AGPL-3.0',
            '主要权衡': '文档最完善的选项，但对新模型的支持往往先出现在分支中',
          },
          {
            '选项': '[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            '最适合': '与AUTOMATIC1111类似但对新功能和新模型支持更快的界面',
            '维护节奏（2026年）': '自 2025 年 7 月 31 日起没有推送；最新 GitHub release 为 2024 年 2 月 5 日',
            '许可证': 'AGPL-3.0',
            '主要权衡': '社区规模小于AUTOMATIC1111本身；仍大体沿用原始代码库的整体结构',
          },
          {
            '选项': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '最适合': '通过节点图对生成流水线进行细粒度控制',
            '维护节奏（2026年）': '积极开发，提交频繁',
            '许可证': 'GPL-3.0',
            '主要权衡': '学习曲线比AUTOMATIC1111的标签页布局更陡峭；节点图更强大，但对初学者不太友好',
          },
          {
            '选项': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            '最适合': '面向专业用途、更为精致，采用画布式工作流的界面',
            '维护节奏（2026年）': '积极开发',
            '许可证': 'Apache-2.0',
            '主要权衡': '扩展生态系统小于AUTOMATIC1111；界面更为规范统一，社区脚本较为分散的情况较少',
          },
          {
            '选项': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '最适合': '以最少的点击获得可用的图像，配置最少',
            '维护节奏（2026年）': '最后一次推送为 2025 年 12 月 1 日；最新版本 v2.5.5（2024 年 8 月 12 日）',
            '许可证': 'GPL-3.0',
            '主要权衡': '为换取简洁性，有意减少了设置项和扩展支持',
          },
          {
            '选项': '[SD.Next](https://github.com/vladmandic/sdnext)',
            '最适合': '类似AUTOMATIC1111的一体化界面，对模型和硬件的支持更广',
            '维护节奏（2026年）': '积极开发，提交频繁',
            '许可证': 'Apache-2.0',
            '主要权衡': '尽管在功能上与AUTOMATIC1111相当甚至更优，但社区和教程基础更小',
          },
        ],
        note: '维护节奏基于 2026-11-02 在 GitHub 上核实的公开推送和发布记录，可能会变化——仅凭活跃度做选择之前，请查看各项目自己的仓库。底层模型对比请见[Stable Diffusion 评测](/power-local-llm/stable-diffusion-review)，本地与云端的取舍请见[本地 AI 图像生成与云端对比](/power-local-llm/local-ai-image-generation-vs-cloud)。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁应该使用AUTOMATIC1111',
        items: [
          '**希望获得规模最大之一的教程基础和社区解答的读者。** 由于最早进入市场、拥有最长的安装历史，大量关于Stable Diffusion界面的论坛帖子、YouTube教程和类似Stack Overflow的解答都专门提到了AUTOMATIC1111。',
          '**想要 ControlNet 和成熟扩展目录的读者。** ControlNet 扩展和数千个其他社区插件使用广泛；依赖某个扩展之前请查看它自己的仓库，因为主要的 ControlNet 扩展最后一次推送是在 2024 年 8 月 12 日。',
          '**更喜欢标签页界面而不是节点图的读者。** AUTOMATIC1111的布局——将文本字段、滑块和按钮组织在标签页中——对初次使用的用户来说，通常比ComfyUI基于节点的画布更容易上手。',
          '**希望完全本地控制和隐私的读者。** 安装完成后，生成过程完全在你自己的GPU上进行；除非你安装了会这样做的扩展，否则不会有任何提示词或图像数据离开你的机器。',
          '**预算有限、希望界面本身零许可成本的读者。** AGPL-3.0意味着该软件可以免费使用、修改和再分发，无需任何形式的订阅。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不应该使用AUTOMATIC1111',
        items: [
          '**想要支持最新模型架构的读者。** 由于自 2026 年 3 月 2 日起没有更新，对新模型的支持更可能先出现在 ComfyUI、InvokeAI 或 SD.Next 等积极开发的工具中——请先比较它们。',
          '**希望完全不接触命令行、一键即用的读者。** 安装需要Python和Git，在某些系统上还需要手动排查依赖版本问题——希望获得完全打磨的消费级应用体验的读者，可能更适合Fooocus的简化安装程序或某个云端工具。',
          '**需要按可预测时间表获得有保证的活跃核心仓库漏洞修复的读者。** 由于`master`分支上有超过2,400个开放Issue，且自2024年7月以来没有发布过新的带标签版本，对可靠性有严格要求的读者不应假定新报告的漏洞会得到快速处理。',
          '**希望对多步骤流水线拥有最大工作流控制权的读者。** 相比AUTOMATIC1111的标签页布局，ComfyUI的节点图方式通常能对复杂的多阶段生成流水线提供更精确的控制。',
          '**需要有厂商支持并附带SLA的企业团队。** AUTOMATIC1111是一个社区项目，没有官方支持合同、付费层级或服务级别协议——需要合同保障支持的团队应该改为评估商用的云端图像生成产品。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'AUTOMATIC1111和Stable Diffusion是同一回事吗？',
            a: '不是。Stable Diffusion是底层的开放权重模型家族；AUTOMATIC1111（Stable Diffusion web UI）是一个独立的免费前端界面，用于加载这些模型权重并让你可以通过浏览器生成图像。你需要两者兼备：模型权重（单独下载）以及像AUTOMATIC1111这样的界面才能真正使用它们。',
          },
          {
            q: 'AUTOMATIC1111在2026年还在维护吗？',
            a: '自 2026 年 3 月 2 日起没有发布任何更新。其最新的带标签版本 v1.10.1 发布于 2025 年 2 月 9 日，`dev` 分支自 2026 年 3 月 2 日起没有提交。Forge 的 README 称原项目“almost static now”，而 Forge 自身也已自 2025 年 7 月 31 日起没有推送。它仍可使用，但应视为可能已无人维护，并比较 ComfyUI、InvokeAI 或 SD.Next。',
          },
          {
            q: 'AUTOMATIC1111免费吗？',
            a: '是的。它采用AGPL-3.0许可，可以免费下载、自托管和修改。不存在任何官方付费层级、订阅或托管方案——唯一的成本是你自己的硬件和电费。你仍然需要单独下载Stable Diffusion模型权重，这些权重携带各自独立的许可条款。',
          },
          {
            q: 'AUTOMATIC1111中的ControlNet是什么？',
            a: 'ControlNet是迄今为止AUTOMATIC1111使用最广泛的社区扩展。它可以让参考图像——例如姿势骨架、深度图或边缘轮廓——比单靠文本提示词更精确地引导生成图像的构图。它通过内置的Extensions标签页安装，并不属于AUTOMATIC1111的核心代码库。',
          },
          {
            q: '运行AUTOMATIC1111需要什么硬件？',
            a: '对于SD 1.5检查点，文档记载的最低要求是4 GB显存（部分报告称2 GB也能运行），6–8 GB会更为舒适。对于SDXL检查点，在启用内存优化的情况下大约需要8 GB显存，若要舒适使用则需要12 GB或更多。NVIDIA GPU是官方推荐且支持最完善的路径；AMD、Intel和Apple Silicon则通过各自独立的、针对特定平台的安装说明获得支持。',
          },
          {
            q: 'AUTOMATIC1111和Forge有什么区别？',
            a: 'Forge 是 AUTOMATIC1111 代码库的分支，由 lllyasviel 创建，用来增加性能优化和对 Flux 等较新模型的支持。根据其 README，它大约每 90 天或在有重要修复时与原项目同步。它在 GitHub 上最后一次推送是在 2025 年 7 月 31 日，最新的 GitHub release 日期为 2024 年 2 月 5 日，因此已不再是明显更活跃的选择——选择之前请查看它的仓库。',
          },
          {
            q: 'AUTOMATIC1111和ComfyUI有什么区别？',
            a: 'AUTOMATIC1111使用标签页式界面（文本字段、滑块、按钮），对初学者来说通常更容易上手。ComfyUI使用节点图界面，你需要连接代表每个处理步骤的模块，这为复杂流水线提供了更细粒度的控制，但代价是更陡峭的学习曲线。截至2026年，ComfyUI也表现出更频繁的开发活动。',
          },
          {
            q: '在哪里下载AUTOMATIC1111？',
            a: '官方来源是[GitHub上的AUTOMATIC1111/stable-diffusion-webui仓库](https://github.com/AUTOMATIC1111/stable-diffusion-webui)，其中包含代码、安装Wiki，以及针对NVIDIA、AMD、Intel和Apple Silicon硬件的特定安装说明链接。你还需要单独下载Stable Diffusion模型权重（例如从Hugging Face）才能使用它。',
          },
          {
            q: 'Stable Diffusion WebUI Forge 还在维护吗？',
            a: '它在 GitHub 上最后一次推送是在 2025 年 7 月 31 日，最新的 GitHub release 日期为 2024 年 2 月 5 日。其 README 称它基于 SD-WebUI 1.10.1。选择之前，请查看仓库是否有更新的动态。',
          },
          {
            q: 'AUTOMATIC1111 的 ControlNet 扩展还在维护吗？',
            a: 'sd-webui-controlnet 仓库最后一次推送是在 2024 年 8 月 12 日，没有 GitHub release。它仍被广泛使用，但在生产工作流中依赖它之前，请查看其仓库和未解决的 issue。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'AUTOMATIC1111 凭借“第一个出现”赢得了本地 Stable Diffusion 默认界面的地位，其生态——首推 ControlNet 扩展，加上数千个社区工具、教程和论坛回答——仍是它最大的资产。但该项目自 2026 年 3 月 2 日起没有更新，最新的带标签版本是 v1.10.1，其分支 Forge 自 2025 年 7 月 31 日起没有推送，主要的 ControlNet 扩展最后一次推送是在 2024 年 8 月 12 日。它仍可安装，并能在 SD 1.5 和 SDXL 检查点上运行，因此已经在用的读者没有急着切换的理由。新入门的读者应比较仍在积极开发的 ComfyUI、InvokeAI 和 SD.Next，而不是仅凭知名度默认选择 AUTOMATIC1111，并先确认它能在自己的 GPU 和模型上运行。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[GitHub上的AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — 官方仓库、代码、发布版本与提交历史。',
          '[AUTOMATIC1111/stable-diffusion-webui Releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — 经核实的发布日期，包括v1.10.1（代码来自2024年7月27日；于2025年2月9日发布）。',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — AGPL-3.0许可证全文。',
          '[AUTOMATIC1111/stable-diffusion-webui Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) — 面向NVIDIA、AMD、Intel和Apple Silicon的安装指南。',
          '[GitHub上的Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) — README中关于AUTOMATIC1111开发节奏以及Forge 90天同步政策的说明。',
          '[GitHub上的Mikubill/sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) — AUTOMATIC1111的ControlNet扩展。',
          '[GitHub上的ComfyUI](https://github.com/comfy-org/ComfyUI)、[GitHub上的InvokeAI](https://github.com/invoke-ai/InvokeAI)、[GitHub上的Fooocus](https://github.com/lllyasviel/Fooocus)以及[GitHub上的SD.Next](https://github.com/vladmandic/sdnext) — 用于对比而引用的替代界面仓库。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Stable Diffusion评测：开放权重文本生成图像模型](/zh/power-local-llm/stable-diffusion-review) — 底层模型究竟是什么、各版本的许可条款以及硬件要求。',
          '[Real-ESRGAN评测：AI图像放大工具](/zh/power-local-llm/real-esrgan-ai-image-upscaler-review) — 一款用于放大在AUTOMATIC1111或任何其他界面中生成的图像的补充本地工具。',
          '[本地AI图像生成对比云端](/zh/power-local-llm/local-ai-image-generation-vs-cloud) — 将本地图像生成选项与Midjourney、Adobe Firefly等云端工具进行更深入的对比。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/automatic1111-review-hero-ko.webp',
    title: 'AUTOMATIC1111 리뷰: Stable Diffusion WebUI 완전 정리',
    seoTitle: 'AUTOMATIC1111 리뷰: 설치, 유지보수 상태, 대안',
    intro:
      'AUTOMATIC1111 — 공식 명칭 "Stable Diffusion web UI" — 는 자신의 GPU에서 Stable Diffusion 모델을 실행하기 위한 무료 오픈소스 탭 방식 웹 인터페이스입니다. Stable Diffusion 공개 출시 한 달 뒤인 2022년 8월 22일 GitHub에 공개되어 로컬 이미지 생성용으로 널리 채택된 최초의 그래픽 프런트엔드가 되었으며, ControlNet, LoRA 학습, 수천 개의 커뮤니티 스크립트로 이루어진 거대한 확장 기능 생태계 덕분에 제3자 리뷰에서도 여전히 이 카테고리에서 가장 많이 사용되고 문서화가 가장 잘된 옵션 중 하나로 꼽힙니다. 이 리뷰에서는 AUTOMATIC1111이 실제로 무엇인지, 모델 자체인 Stable Diffusion 및 ComfyUI·Forge·InvokeAI 같은 더 새로운 UI와 어떻게 다른지, 2026년을 앞둔 실제 유지보수 상태, 라이선스 조건, 하드웨어 요구 사항, 그리고 오늘날 누가 사용해야 하고 누가 사용하지 말아야 하는지에 대한 솔직한 안내를 다룹니다.',
    metaDescription:
      'AUTOMATIC1111이 무엇인지, 확인된 유지보수 상태, AGPL-3.0 라이선스, ControlNet, 필요한 하드웨어, 대안과의 비교를 정리한 리뷰입니다.',
    twitterDescription:
      'AUTOMATIC1111 리뷰 2026: 원조 Stable Diffusion WebUI 완전 정리 — 검증된 유지보수 상태, 라이선스, 확장 기능 생태계, 하드웨어 요구 사항, Forge·ComfyUI·InvokeAI와의 비교.',
    audience:
      '로컬 이미지 생성을 위해 AUTOMATIC1111의 Stable Diffusion WebUI를 설치할지 고민하는 독자 — 검증된 유지보수 상태, 라이선스 조건, 하드웨어 요구 사항, 확장 기능 생태계, 그리고 여전히 활발히 유지보수되는 포크 및 대체 UI와의 비교를 다룹니다.',
    readTime: '12분 소요',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AUTOMATIC1111 review',
    targetKeywords: [
      'automatic1111 리뷰',
      'stable diffusion webui',
      'automatic1111 설치',
      'automatic1111 vs comfyui',
      'automatic1111 vs forge',
      'automatic1111 controlnet',
      'stable diffusion webui 유지보수',
      'automatic1111 라이선스',
    ],
    current_models_mentioned: ['Stable Diffusion 1.5', 'Stable Diffusion XL', 'ControlNet', 'Stable Diffusion WebUI Forge', 'ComfyUI', 'InvokeAI', 'Fooocus'],
    current_hardware_mentioned: ['2 GB VRAM', '4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '12 GB VRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**경고: AUTOMATIC1111은 2026년 3월 2일 이후 업데이트가 없으며(최신 릴리스 v1.10.1, 2025년 2월 9일) 유지보수되지 않을 수 있습니다. 사용 전에 확인하시기 바랍니다.** **AUTOMATIC1111(Stable Diffusion web UI)은 Stable Diffusion 모델을 로컬에서 실행하는 무료 오픈소스(AGPL-3.0) 브라우저 인터페이스이며, 모델 자체가 아닙니다.**',
    quickAnswerTop: {
      ko: {
        question: 'AUTOMATIC1111은 아직도 유지보수되고 있나요? Stable Diffusion과 같은 것인가요?',
        answer:
          '2026년 3월 2일 이후 공개된 업데이트가 없습니다. AUTOMATIC1111은 Stable Diffusion이 아니라, Stable Diffusion 모델 가중치를 불러와 브라우저 탭에서 이미지를 생성하는 별도의 무료 오픈소스 웹 인터페이스입니다. 마지막 태그 릴리스인 v1.10.1은 2025년 2월 9일에 공개되었고, `dev` 브랜치에는 2026년 3월 2일 이후 커밋이 없습니다. 가장 많이 쓰이는 포크인 Forge는 원본을 "almost static now"라고 부르지만, Forge 자신도 2025년 7월 31일 이후 푸시가 없습니다. 많은 환경에서 여전히 작동하지만, 더 새로운 모델 아키텍처가 필요하다면 ComfyUI, InvokeAI, SD.Next를 비교해 보시기 바랍니다.',
        bullets: [
          'AUTOMATIC1111은 UI/프런트엔드이지 모델이 아닙니다 — Stable Diffusion 가중치는 여전히 별도로 다운로드해 불러와야 합니다.',
          'GitHub에서 확인됨: 마지막 태그 릴리스(v1.10.1)는 2025년 2월 9일에 공개되었고, `dev` 브랜치의 마지막 커밋은 2026년 3월 2일입니다. 현재 상태는 저장소에서 확인하시기 바랍니다.',
          'AGPL-3.0 라이선스 아래 무료이자 오픈소스이며, 공식 유료 등급이나 호스팅 플랜은 존재하지 않습니다.',
          '확장 기능 생태계 — 특히 포즈와 구도를 유도하는 ControlNet 확장 기능 — 이 핵심 개발 속도가 느려졌음에도 여전히 널리 사용되는 주된 이유입니다.',
          '활발히 유지보수되는 대안: ComfyUI, InvokeAI, SD.Next는 2026-11-02에 푸시가 있었으며, AUTOMATIC1111을 기반으로 한 포크 Forge는 2025년 7월 31일 이후 푸시가 없습니다.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'AUTOMATIC1111이란', anchor: 'what-is-automatic1111' },
      { label: '역사: AUTOMATIC1111이 존재하는 이유', anchor: 'history' },
      { label: '설치 및 첫 이미지 생성 방법', anchor: 'how-to-install' },
      { label: '유지보수 상태: 검증 결과', anchor: 'maintenance-status' },
      { label: '확장 기능과 ControlNet 생태계', anchor: 'extensions-controlnet' },
      { label: '하드웨어 요구 사항', anchor: 'hardware-requirements' },
      { label: '라이선스와 가격', anchor: 'license-pricing' },
      { label: 'AUTOMATIC1111 vs. 대안', anchor: 'vs-alternatives' },
      { label: 'AUTOMATIC1111을 사용해야 할 사람', anchor: 'who-should-use' },
      { label: 'AUTOMATIC1111을 사용하지 말아야 할 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '요약',
        isTldr: true,
        items: [
          'AUTOMATIC1111(Stable Diffusion web UI)은 Stable Diffusion을 로컬에서 실행하기 위한 무료 오픈소스 탭 방식 웹 인터페이스입니다 — 모델 자체가 아니라 프런트엔드 애플리케이션입니다.',
          'Stable Diffusion 공개 출시 한 달 뒤인 2022년 8월 22일, "AUTOMATIC1111"이라는 가명을 쓰는 익명의 개발자가 GitHub에 공개했으며, 그래픽 방식의 로컬 인터페이스가 없던 공백을 채웠습니다.',
          'AGPL-3.0 라이선스로 제공됩니다. 오직 셀프 호스팅만 가능하며 공식 유료 등급이나 호스팅 플랜은 없습니다.',
          '핵심 코드베이스는 2024년 중반 이후 속도가 느려졌습니다. 마지막 태그 릴리스(v1.10.1)는 2025년 2월 9일에 공개되었고, `dev` 브랜치의 마지막 커밋은 2026년 3월 2일입니다. 현재 상태는 GitHub에서 확인하시기 바랍니다.',
          '확장 기능 생태계, 특히 포즈/구도 유도를 위한 ControlNet 확장 기능은 남아 있는 가장 큰 강점입니다 — 로컬 이미지 생성 UI 중에서도 가장 크고 문서화가 잘된 커뮤니티 확장 기능 모음 중 하나입니다.',
          '활발히 유지보수되는 대안으로는 ComfyUI, InvokeAI, SD.Next(2026-11-02 푸시)가 있으며, AUTOMATIC1111의 포크인 Forge는 2025년 7월 31일 이후 푸시가 없습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026년 3월 2일 이후 업데이트 없음(최신 릴리스 v1.10.1, 2025년 2월 9일). AUTOMATIC1111은 유지보수되지 않을 수 있습니다. 의존하기 전에 사용 중인 GPU와 모델에서 여전히 작동하는지 확인하시기 바랍니다.',
          },
        ],
      },
      whatIsAutomatic1111: {
        id: 'what-is-automatic1111',
        title: 'AUTOMATIC1111이란',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111은 Stable Diffusion 모델 파일을 불러와 명령줄이 아닌 탭, 버튼, 텍스트 필드를 통해 이미지를 생성할 수 있게 해주는 무료 오픈소스 브라우저 기반 사용자 인터페이스입니다.' },
          { type: 'plain-terms', text: 'Stable Diffusion이 엔진이라면 AUTOMATIC1111은 거기에 연결할 수 있는 여러 대시보드 중 하나입니다 — 그 자체로는 이미지를 생성하지 못하며, 무언가를 하려면 여전히 별도의 Stable Diffusion 모델 가중치를 다운로드해야 합니다.' },
        ],
        content: [
          '공식 명칭이 "Stable Diffusion web UI"인 AUTOMATIC1111은 [Gradio](https://www.gradio.app/) 라이브러리 위에 구축된 Python 애플리케이션으로, Stable Diffusion 모델을 사용한 텍스트-이미지 변환(txt2img), 이미지-이미지 변환(img2img), 인페인팅, 아웃페인팅, 업스케일링 워크플로를 위해 브라우저 기반의 탭으로 정리된 인터페이스를 제공합니다. 완전히 자신의 컴퓨터와 GPU에서 실행되며, 의도적으로 그렇게 하는 확장 기능을 설치하지 않는 한 어떤 이미지나 프롬프트도 제3자 서버로 전송되지 않습니다.',
          '프로젝트 이름은 제작자의 GitHub 사용자명인 AUTOMATIC1111에서 유래했습니다 — 실제 신원이 공개되지 않은 익명의 개발자입니다. 커뮤니티에서는 이 프로젝트를 흔히 그냥 "A1111"이라고 부릅니다.',
          '**AUTOMATIC1111은 UI이지 모델이 아닙니다.** Stable Diffusion 가중치가 함께 제공되지 않으므로, 무언가를 생성하기 전에 체크포인트 파일(SD 1.5, SDXL 또는 커뮤니티 파인튜닝 모델)을 별도로 다운로드해 올바른 폴더에 넣어야 합니다. 기반이 되는 모델이 실제로 무엇인지, 버전별 라이선스 조건은 무엇인지는 [PromptQuorum의 Stable Diffusion 리뷰](/ko/power-local-llm/stable-diffusion-review)를 참고하세요.',
          '이는 Stable Diffusion을 위해 경쟁하는 여러 프런트엔드 중 하나로, [ComfyUI](https://github.com/comfy-org/ComfyUI)(더 세밀한 워크플로 제어를 제공하는 노드 그래프 기반 인터페이스), [InvokeAI](https://github.com/invoke-ai/InvokeAI)(더 세련되고 전문가 지향적인 UI), [Fooocus](https://github.com/lllyasviel/Fooocus)(사용 가능한 이미지까지 클릭 수를 최소화한 단순화된 인터페이스), 그리고 [Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)(AUTOMATIC1111 자체의 포크로, 아래 유지보수 섹션에서 다룹니다)와 나란히 존재합니다.',
        ],
      },
      history: {
        id: 'history',
        title: '역사: AUTOMATIC1111이 존재하는 이유',
        content: [
          'Stability AI, 뮌헨 루트비히 막시밀리안 대학교(LMU)의 CompVis 연구 그룹, Runway ML은 2022년 8월 22일 Stable Diffusion을 공개적으로 출시했습니다. 출시 당시 Stable Diffusion은 모델 가중치와 명령줄 스크립트 형태로 제공되었으며, 프롬프트를 입력하고 버튼을 클릭할 수 있는 공식 그래픽 인터페이스는 없었습니다.',
          `AUTOMATIC1111은 같은 날인 2022년 8월 22일, 이전의 커뮤니티 스크립트를 기반으로 Gradio 기반 브라우저 인터페이스를 추가한 Stable Diffusion web UI의 첫 버전을 GitHub에 공개했습니다. 이 타이밍 덕분에 적절한 순간에 적절한 위치를 차지하게 되었습니다 — 2022년 말 Stable Diffusion의 인기가 폭발적으로 늘어나면서 AUTOMATIC1111의 UI는 대부분의 애호가들이 실제로 이를 사용하는 기본적인 방식이 되었고, 몇 달 만에 수만 개의 GitHub 스타를 모았으며 현재 ${ST.ko('automatic1111-webui', 'bare')}개 이상의 스타를 기록했습니다 — 로컬 AI 이미지 생성 카테고리에서 가장 많은 스타를 받은 저장소 중 하나입니다.`,
          '가장 먼저 등장해 초기 커뮤니티 기여, 확장 기능 제작자, 튜토리얼 작성자 대부분을 흡수했기 때문에 AUTOMATIC1111은 사실상의 표준 참조 구현이 되었으며, 이후 등장한 UI들(Forge, ComfyUI 확장 기능, 커뮤니티 문서 사이트)은 그 새로운 도구들이 이미 다른 기술적 접근 방식을 취하고 있는 경우에도 여전히 AUTOMATIC1111을 기준으로 기능과 워크플로를 설명하고 있습니다.',
        ],
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'AUTOMATIC1111 설치 및 첫 이미지 생성 방법',
        content: [
          '설치와 첫 실행 단계는 Windows, Linux, Mac에서 대체로 동일하지만 정확한 명령어는 플랫폼마다 다릅니다 — 의존성 버전이 바뀔 수 있으므로 시작하기 전에 항상 프로젝트 자체 위키에서 현재 단계를 확인하세요.',
        ],
        numberedItems: [
          { title: '사전 요구 사항 설치: Python과 Git', whyItMatters: 'AUTOMATIC1111은 단일 파일 설치 프로그램이 아닙니다 — 자체 설정 스크립트를 실행하기 전에 호환되는 버전의 Python과 Git이 이미 시스템에 설치되어 있어야 합니다.' },
          { title: '저장소 클론 또는 다운로드', whyItMatters: '[공식 GitHub 저장소](https://github.com/AUTOMATIC1111/stable-diffusion-webui)에서 `git clone`으로 코드를 가져오거나 ZIP으로 다운로드하세요 — 클론해 두면 이후 `git pull`을 통한 업데이트가 훨씬 간단해집니다.' },
          { title: '플랫폼별 실행 스크립트 실행', whyItMatters: 'Windows의 `webui-user.bat` 또는 Linux/Mac의 `webui.sh`는 처음 실행할 때 자동으로 Python 가상 환경을 만들고 필요한 의존성을 설치합니다 — 이 과정은 몇 분이 걸릴 수 있으며 안정적인 인터넷 연결이 필요합니다.' },
          { title: 'Stable Diffusion 체크포인트 다운로드', whyItMatters: 'AUTOMATIC1111에는 모델 가중치가 포함되어 있지 않습니다. (예: [Hugging Face](https://huggingface.co/stabilityai)에서) 체크포인트 파일을 다운로드해 `models/Stable-diffusion` 폴더에 넣으세요 — 버전 및 라이선스 세부 사항은 [PromptQuorum의 Stable Diffusion 리뷰](/ko/power-local-llm/stable-diffusion-review)를 참고하세요.' },
          { title: '로컬 웹 인터페이스 열기', whyItMatters: '설정이 끝나면 스크립트가 로컬 웹 서버(보통 `http://127.0.0.1:7860`)를 시작하고 UI가 브라우저에서 자동으로 열립니다 — 이 시점부터는 모든 것이 클라우드가 아닌 로컬에서 실행됩니다.' },
          { title: 'txt2img 탭에 프롬프트를 입력하고 Generate 클릭', whyItMatters: '설명을 입력하고 첫 실행에서는 기본 샘플링 설정을 그대로 둔 채 Generate를 클릭하세요 — 모델이 VRAM에 로드되는 동안 첫 추론은 보통 더 느립니다.' },
          { title: '익숙해지면 확장 기능 설치', whyItMatters: '내장된 Extensions 탭을 사용하면 ControlNet 같은 커뮤니티 도구를 목록에서 바로 추가할 수 있습니다 — 낯선 출처에서 무언가를 설치하기 전에 아래 확장 기능 섹션을 참고하세요.' },
        ],
        note: 'GPU 드라이버와 Python 버전 호환성 문제가 설치 실패의 가장 흔한 원인이므로, 정확한 명령어, 의존성 버전, 문제 해결 단계는 시간이 지나면서 바뀝니다 — 일반적인 가이드보다는 프로젝트의 현재 [설치 위키](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki)를 따르세요.',
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: '유지보수 상태: 검증 결과',
        itemHeadings: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111은 2026년 3월 2일 이후 업데이트가 없습니다. 마지막 태그 릴리스는 v1.10.1(2025년 2월 9일 공개)이며, 가장 인기 있는 포크는 자체 README에서 원본 프로젝트를 "almost static now"라고 설명합니다.' },
          { type: 'plain-terms', text: '프로젝트는 여전히 실행되고 널리 쓰이지만, 2026년 3월 2일 이후 아무도 업데이트를 푸시하지 않았으므로 새로운 모델 유형에 대한 지원은 ComfyUI, InvokeAI, SD.Next처럼 활발히 개발되는 도구에 먼저 나타날 가능성이 큽니다.' },
        ],
        columns: ['신호', '검증된 상태', '출처'],
        rows: [
          { '신호': '마지막으로 태그가 지정된 릴리스', '검증된 상태': 'v1.10.1 — 코드는 2024년 7월 27일 기준; 릴리스 노트는 2025년 2월 9일 공개', '출처': '[GitHub releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)' },
          { '신호': '`master` 브랜치의 마지막 커밋', '검증된 상태': '2024년 7월 27일', '출처': '[GitHub 커밋 기록](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commits/master)' },
          { '신호': '`dev` 브랜치의 마지막 커밋', '검증된 상태': '2026년 3월 2일(PR #17313 병합). 이후 `dev`에 커밋 없음', '출처': 'GitHub 커밋 기록(인용 전 최신 날짜 확인 필요)' },
          { '신호': '열려 있는 이슈 수', '검증된 상태': '2,429건 열림(GitHub 이슈 검색, 2026-11-02)', '출처': '[GitHub issues](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues)' },
          { '신호': '포크 유지관리자 자신의 평가', '검증된 상태': '"Because original SD-WebUI is almost static now, Forge will sync with original WebUI every 90 days, or when important fixes" — Forge 프로젝트 자체 README에서 직접 인용', '출처': '[Forge README](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { '신호': 'Forge(포크) 마지막 푸시', '검증된 상태': '2025년 7월 31일. 최신 GitHub 릴리스는 2024년 2월 5일자', '출처': '[Forge on GitHub](https://github.com/lllyasviel/stable-diffusion-webui-forge)' },
          { '신호': 'ControlNet 확장 마지막 푸시', '검증된 상태': '2024년 8월 12일. GitHub 릴리스 없음', '출처': '[GitHub의 sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet)' },
        ],
        content: [
          '이 섹션은 2차 정보를 반복하는 대신 2026-11-02에 GitHub API로 직접 확인할 수 있었던 내용을 정리합니다. AUTOMATIC1111은 2026년 3월 2일 이후 업데이트가 없습니다. 대부분의 원클릭 설치 프로그램과 문서가 가리키는 안정판 `master` 브랜치는 2024년 7월 27일 이후 바뀌지 않았고, `dev` 브랜치에도 2026년 3월 2일 이후 커밋이 없습니다. 저장소는 보관(archived) 처리되지 않았고 메인테이너가 포기를 선언하지도 않았지만, 유지보수되지 않을 수 있는 프로젝트로 취급해야 합니다.',
          '가장 신뢰할 만한 외부 신호는 AUTOMATIC1111 코드베이스 위에 만들어진 포크 Forge의 개발자 lllyasviel에게서 나옵니다. Forge의 README는 "sync with original WebUI every 90 days, or when important fixes"라고 밝히며, 그 이유로 "original SD-WebUI is almost static now"를 듭니다. 이는 소문이 아니라 포크 메인테이너가 AUTOMATIC1111의 개발 속도를 설명한 것입니다. Forge 자신도 2025년 7월 31일 이후 푸시가 없어, 더 이상 활발한 대안의 증거가 되지 못합니다.',
          '이것이 AUTOMATIC1111이 작동을 멈춘다는 뜻은 아닙니다. Stable Diffusion 1.5와 SDXL 워크플로에서는 여전히 작동하며, 사용자 기반과 튜토리얼 범위도 대부분의 대안보다 큽니다. 실질적인 영향은 앞으로의 일입니다. 더 새로운 모델 아키텍처 지원이나 빠른 버그 수정이 필요하다면, 아래 비교표를 이용해 2026-11-02에 모두 푸시가 있었던 ComfyUI, InvokeAI, SD.Next를 비교해 보시기 바랍니다.',
        ],
        note: 'GitHub 활동 데이터는 계속 바뀝니다. 위 수치는 2026-11-02에 GitHub API로 확인한 것입니다. 시간에 민감한 결정에 이 표를 사용하기 전에 [저장소](https://github.com/AUTOMATIC1111/stable-diffusion-webui)에서 현재 수치를 확인하시기 바랍니다.',
      },
      extensionsControlnet: {
        id: 'extensions-controlnet',
        title: '확장 기능과 ControlNet 생태계',
        content: [
          'AUTOMATIC1111에 내장된 Extensions 탭을 사용하면 코드를 수정하지 않고도 엄선된 목록이나 Git URL에서 직접 커뮤니티 제작 확장 기능을 설치할 수 있습니다. 이 확장 기능 시스템은 2022년 이후 사용자 기반의 규모와 맞물려 어떤 UI보다도 큰 규모의 Stable Diffusion 도구 카탈로그 중 하나를 만들어냈습니다.',
          '단연 가장 널리 사용되는 확장 기능은 [sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet)(UI에서는 흔히 그냥 "ControlNet"이라고 불림)으로, 포즈 스켈레톤, 뎁스 맵, Canny 엣지 윤곽선, 또는 대략적인 스케치 같은 참조 이미지를 통해 텍스트 프롬프트만으로는 불가능할 만큼 훨씬 정밀하게 생성 이미지의 구도를 유도할 수 있습니다. 커뮤니티 사용에서 이는 AUTOMATIC1111에서 작업하는 방식을 가장 크게 바꾼 확장 기능으로 널리 인정받고 있으며, GitHub에서 가장 많은 스타를 받은 Stable Diffusion 확장 기능 중 하나로 남아 있습니다. PromptQuorum은 전용 글에서 ControlNet을 더 깊이 다룹니다(아래 관련 글 참고).',
          'ControlNet 외에도 확장 기능 목록에는 LoRA(Low-Rank Adaptation) 학습 및 관리, 이미지 탐색 및 태깅, 프롬프트 기록 추적, 워크플로 자동화 스크립트를 위한 도구가 포함됩니다. 확장 기능은 커뮤니티가 유지관리하며 AUTOMATIC1111 자체의 릴리스 속도와는 독립적이기 때문에, 핵심 프로젝트의 커밋이 줄어드는 시기에도 개별 확장 기능은 활발히 업데이트될 수 있습니다 — 다만 이는 제작자에 따라 품질과 업데이트 빈도가 크게 다르다는 뜻이기도 하므로, 프로덕션 워크플로에서 의존하기 전에 해당 확장 기능 자체 저장소의 활동을 확인하세요.',
        ],
        note: '확장 기능을 설치하기 전에는 항상 소스와 권한을 검토하세요 — 확장 기능은 AUTOMATIC1111 자체와 동일한 Python 프로세스 내에서 실행되며 샌드박스로 격리되어 있지 않습니다.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: '하드웨어 요구 사항',
        itemHeadings: true,
        columns: ['워크로드', '최소 VRAM', '쾌적한 VRAM', '참고'],
        rows: [
          { '워크로드': 'SD 1.5 체크포인트', '최소 VRAM': '4 GB VRAM(2 GB에서도 작동했다는 보고 있음)', '쾌적한 VRAM': '6~8 GB VRAM', '참고': '가장 가벼운 워크로드; 프로젝트 자체 문서에 따르면 지난 10년간 대부분의 GPU에서 실행 가능' },
          { '워크로드': 'SDXL 체크포인트', '최소 VRAM': '8 GB VRAM(최적화 적용 시)', '쾌적한 VRAM': '12 GB 이상 VRAM', '참고': '네이티브 1024×1024 출력은 이미지당 SD 1.5보다 부하가 더 큼' },
          { '워크로드': 'ControlNet 확장 기능 활성화', '최소 VRAM': '기본 체크포인트에 약 1~2 GB VRAM 추가', '쾌적한 VRAM': '그에 맞춰 여유 확보', '참고': '정확한 추가 부하는 로드된 ControlNet 모델과 전처리기에 따라 달라짐' },
          { '워크로드': 'AMD/Intel GPU, Apple Silicon', '최소 VRAM': '별도의 설정 경로를 통해 지원', '쾌적한 VRAM': '플랫폼에 따라 성능이 다름', '참고': 'NVIDIA가 공식적으로 권장되고 가장 잘 지원되는 경로이며, AMD·Intel·Apple Silicon은 각각 프로젝트 위키에 문서화된 별도의 설치 방법이 필요함' },
        ],
        note: '정확한 VRAM 사용량은 해상도, 배치 크기, 활성화된 확장 기능, 명령줄 최적화 플래그(예: `--medvram`, `--lowvram`)에 따라 달라집니다 — 이를 계획용 범위로 간주하고, 최신 지침은 프로젝트의 현재 [Dependencies 위키 페이지](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies)를 확인하세요.',
      },
      licensePricing: {
        id: 'license-pricing',
        title: '라이선스와 가격',
        snippetBlocks: [
          { type: 'one-sentence', text: 'AUTOMATIC1111은 AGPL-3.0(GNU Affero General Public License v3.0) 라이선스로 제공되며, 다운로드·셀프 호스팅·수정이 모두 무료이고 공식 유료 등급이나 호스팅 플랜은 전혀 없습니다.' },
          { type: 'plain-terms', text: '구독도, 프리미엄 버전도 없으며, AUTOMATIC1111을 제품으로 판매하는 회사도 없습니다 — 이는 직접 운영하는, 커뮤니티가 유지관리하는 오픈소스 프로젝트이며 유일한 비용은 자신의 하드웨어와 전기 요금입니다.' },
        ],
        content: [
          'AUTOMATIC1111의 코드베이스는 AGPL-3.0 라이선스로 공개되어 있으며, 이는 [GitHub 저장소](https://github.com/AUTOMATIC1111/stable-diffusion-webui)에서 직접 확인할 수 있습니다. AGPL-3.0은 강력한 카피레프트 라이선스입니다. 무료 사용, 수정, 재배포를 허용하지만, 코드를 수정해 다른 사람이 상호작용하는 네트워크 서비스로 운영할 경우 일반적으로 그 이용자들에게도 수정된 소스 코드를 제공할 것을 요구합니다. 이는 다운로드하는 버전에 따라 각각 독립적인 라이선스 조건을 갖는 Stable Diffusion 모델 가중치 자체와는 다릅니다 — UI의 라이선스와 모델의 라이선스는 서로 별개의 법적 문서이므로, 자세한 내용은 [PromptQuorum의 Stable Diffusion 리뷰](/ko/power-local-llm/stable-diffusion-review)를 참고하세요.',
          '유지관리자가 제공하는 공식 유료 등급, 구독, 호스팅 버전의 AUTOMATIC1111은 존재하지 않습니다. 유료로(임대 GPU 시간) AUTOMATIC1111 인스턴스를 호스팅하는 제3자 클라우드 서비스가 존재하지만, 이들은 공식 제품이 아닌 독립적인 사업체입니다 — 그러한 서비스에 비용을 지불하기 전에 해당 서비스 자체의 약관과 가격을 별도로 확인하고, 제3자 호스팅을 사용하면 프롬프트와 이미지가 완전히 로컬에 머무는 대신 해당 제공업체의 인프라를 거친다는 점에 유의하세요.',
        ],
        note: '전체 라이선스 원문은 프로젝트의 [GitHub LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt)에서 읽을 수 있습니다 — 이 섹션은 요약이며 법률 자문이 아닙니다. AUTOMATIC1111을 다른 사람에게 호스팅 서비스로 제공할 계획이라면 AGPL-3.0의 네트워크 사용 조항이 특히 중요합니다.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AUTOMATIC1111 vs. 대안',
        columns: ['옵션', '적합한 경우', '유지보수 속도(2026년)', '라이선스', '핵심 트레이드오프'],
        rows: [
          {
            '옵션': 'AUTOMATIC1111(Stable Diffusion web UI)',
            '적합한 경우': '가장 큰 축에 속하는 튜토리얼·확장 기능 기반, 탭 기반의 단순함',
            '유지보수 속도(2026년)': '2026년 3월 2일 이후 업데이트 없음. `master`는 2024년 7월 27일 이후 변경 없음',
            '라이선스': 'AGPL-3.0',
            '핵심 트레이드오프': '문서화가 가장 잘된 옵션이지만 새 모델 지원은 포크에 먼저 반영되는 경향',
          },
          {
            '옵션': '[Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            '적합한 경우': 'AUTOMATIC1111에 익숙한 UI에 더 빠른 기능·신모델 지원',
            '유지보수 속도(2026년)': '2025년 7월 31일 이후 푸시 없음. 최신 GitHub 릴리스는 2024년 2월 5일',
            '라이선스': 'AGPL-3.0',
            '핵심 트레이드오프': 'AUTOMATIC1111 자체보다 커뮤니티가 작음; 원본 코드베이스의 전반적 구조는 여전히 따름',
          },
          {
            '옵션': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '적합한 경우': '생성 파이프라인에 대한 노드 그래프 기반의 세밀한 제어',
            '유지보수 속도(2026년)': '활발히 개발 중, 잦은 커밋',
            '라이선스': 'GPL-3.0',
            '핵심 트레이드오프': 'AUTOMATIC1111의 탭 레이아웃보다 학습 곡선이 가파름; 노드 그래프는 더 강력하지만 초보자에게는 접근성이 떨어짐',
          },
          {
            '옵션': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            '적합한 경우': '캔버스 기반 워크플로를 갖춘 세련되고 전문가 지향적인 인터페이스',
            '유지보수 속도(2026년)': '활발히 개발 중',
            '라이선스': 'Apache-2.0',
            '핵심 트레이드오프': 'AUTOMATIC1111보다 확장 기능 생태계가 작음; 더 정형화된 UI로 커뮤니티 스크립트의 난립이 적음',
          },
          {
            '옵션': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '적합한 경우': '사용 가능한 이미지까지 클릭 수가 가장 적음, 최소한의 설정',
            '유지보수 속도(2026년)': '마지막 푸시는 2025년 12월 1일. 최신 릴리스 v2.5.5(2024년 8월 12일)',
            '라이선스': 'GPL-3.0',
            '핵심 트레이드오프': '단순함을 대가로 설정 항목과 확장 기능 지원을 의도적으로 줄임',
          },
          {
            '옵션': '[SD.Next](https://github.com/vladmandic/sdnext)',
            '적합한 경우': '더 넓은 모델·하드웨어 지원을 갖춘 AUTOMATIC1111 스타일의 올인원 UI',
            '유지보수 속도(2026년)': '활발히 개발 중, 잦은 커밋',
            '라이선스': 'Apache-2.0',
            '핵심 트레이드오프': '기능 면에서 동등하거나 앞섬에도 불구하고 AUTOMATIC1111보다 커뮤니티와 튜토리얼 기반이 작음',
          },
        ],
        note: '유지보수 속도는 2026-11-02에 GitHub에서 확인한 공개 푸시 및 릴리스 활동을 기준으로 하며 바뀔 수 있습니다. 활동 수준만으로 고르기 전에 각 프로젝트의 저장소를 확인하시기 바랍니다. 기반 모델 비교는 [Stable Diffusion 리뷰](/power-local-llm/stable-diffusion-review), 로컬과 클라우드의 장단점은 [로컬 AI 이미지 생성과 클라우드 비교](/power-local-llm/local-ai-image-generation-vs-cloud)를 참고하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AUTOMATIC1111을 사용해야 할 사람',
        items: [
          '**가장 큰 축에 속하는 튜토리얼 및 커뮤니티 답변 기반을 원하는 독자.** 시장에 가장 먼저 나왔고 가장 긴 설치 이력을 가지고 있기 때문에, Stable Diffusion UI 관련 포럼 게시물, 유튜브 튜토리얼, Stack Overflow 형식의 답변 상당수가 AUTOMATIC1111을 구체적으로 언급합니다.',
          '**ControlNet과 성숙한 확장 기능 목록을 원하는 독자.** ControlNet 확장과 수천 개의 커뮤니티 애드온은 널리 쓰이지만, 의존하기 전에 각 확장 기능의 저장소를 확인하시기 바랍니다. 주요 ControlNet 확장의 마지막 푸시는 2024년 8월 12일입니다.',
          '**노드 그래프보다 탭 기반 인터페이스를 선호하는 독자.** 텍스트 필드, 슬라이더, 버튼을 탭으로 정리한 AUTOMATIC1111의 레이아웃은 ComfyUI의 노드 기반 캔버스보다 처음 사용하는 사람에게 일반적으로 더 접근하기 쉽습니다.',
          '**완전한 로컬 제어와 프라이버시를 원하는 독자.** 설치 후에는 생성이 전적으로 자신의 GPU에서 이루어집니다. 의도적으로 그렇게 하는 확장 기능을 설치하지 않는 한 어떤 프롬프트나 이미지 데이터도 자신의 컴퓨터를 벗어나지 않습니다.',
          '**UI 자체에 대한 라이선스 비용을 0으로 유지하고 싶은 예산이 제한된 독자.** AGPL-3.0이라는 것은 어떤 종류의 구독도 없이 소프트웨어를 무료로 사용·수정·재배포할 수 있다는 뜻입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AUTOMATIC1111을 사용하지 말아야 할 사람',
        items: [
          '**최신 모델 아키텍처 지원을 원하는 독자.** 2026년 3월 2일 이후 업데이트가 없으므로 새 모델 지원은 ComfyUI, InvokeAI, SD.Next처럼 활발히 개발되는 도구에 먼저 나타날 가능성이 큽니다. 먼저 이들을 비교해 보시기 바랍니다.',
          '**명령줄을 전혀 접하고 싶지 않은, 원클릭 앱을 원하는 독자.** 설치에는 Python과 Git이 필요하며, 일부 시스템에서는 의존성 버전 문제를 수동으로 해결해야 합니다 — 완전히 다듬어진 소비자용 앱 경험을 원하는 독자는 Fooocus의 단순화된 설치 프로그램이나 클라우드 도구를 선호할 수 있습니다.',
          '**예측 가능한 일정에 따른, 보장된 활발한 핵심 저장소 버그 수정이 필요한 독자.** `master` 브랜치에 2,400건이 넘는 이슈가 열려 있고 2024년 7월 이후 새로 태그가 지정된 릴리스가 없는 상황에서, 엄격한 신뢰성 요구 사항이 있는 독자는 새로 보고된 버그가 빠르게 처리될 것이라고 가정해서는 안 됩니다.',
          '**다단계 파이프라인에 대한 최대한의 워크플로 제어를 원하는 독자.** ComfyUI의 노드 그래프 방식은 일반적으로 AUTOMATIC1111의 탭 기반 레이아웃보다 복잡한 다단계 생성 파이프라인에 대해 더 정밀한 제어를 제공합니다.',
          '**SLA를 갖춘 벤더 지원 제품이 필요한 기업 팀.** AUTOMATIC1111은 공식 지원 계약, 유료 등급, 서비스 수준 계약이 없는 커뮤니티 프로젝트입니다 — 계약상의 지원이 필요한 팀은 대신 상용 클라우드 이미지 생성 제품을 평가해야 합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'AUTOMATIC1111은 Stable Diffusion과 같은 것인가요?',
            a: '아닙니다. Stable Diffusion은 기반이 되는 오픈 가중치 모델 계열이고, AUTOMATIC1111(Stable Diffusion web UI)은 그 모델 가중치를 불러와 브라우저에서 이미지를 생성할 수 있게 해주는 별도의 무료 프런트엔드 인터페이스입니다. 실제로 사용하려면 모델 가중치(별도로 다운로드)와 AUTOMATIC1111 같은 UI 둘 다 필요합니다.',
          },
          {
            q: 'AUTOMATIC1111은 2026년에도 유지보수되고 있나요?',
            a: '2026년 3월 2일 이후 공개된 업데이트가 없습니다. 마지막 태그 릴리스 v1.10.1은 2025년 2월 9일에 공개되었고, `dev` 브랜치에는 2026년 3월 2일 이후 커밋이 없습니다. Forge의 README는 원본을 "almost static now"라고 부르며, Forge 자신도 2025년 7월 31일 이후 푸시가 없습니다. 여전히 작동하지만 유지보수되지 않을 수 있는 프로젝트로 취급하고 ComfyUI, InvokeAI, SD.Next를 비교해 보시기 바랍니다.',
          },
          {
            q: 'AUTOMATIC1111은 무료인가요?',
            a: '네. AGPL-3.0 라이선스로 제공되며 다운로드, 셀프 호스팅, 수정이 모두 무료입니다. 공식 유료 등급, 구독, 호스팅 플랜은 존재하지 않습니다 — 유일한 비용은 자신의 하드웨어와 전기 요금입니다. 다만 독자적인 라이선스 조건을 가진 Stable Diffusion 모델 가중치는 여전히 별도로 다운로드해야 합니다.',
          },
          {
            q: 'AUTOMATIC1111의 ControlNet은 무엇인가요?',
            a: 'ControlNet은 AUTOMATIC1111용으로 단연 가장 널리 사용되는 커뮤니티 확장 기능입니다. 포즈 스켈레톤, 뎁스 맵, 엣지 윤곽선 같은 참조 이미지를 통해 텍스트 프롬프트만으로는 불가능할 만큼 훨씬 정밀하게 생성 이미지의 구도를 유도할 수 있게 해줍니다. 내장된 Extensions 탭을 통해 설치되며, AUTOMATIC1111의 핵심 코드베이스에는 포함되어 있지 않습니다.',
          },
          {
            q: 'AUTOMATIC1111을 실행하려면 어떤 하드웨어가 필요한가요?',
            a: 'SD 1.5 체크포인트의 경우 문서화된 최소 요구 사항은 4 GB VRAM이며(2 GB에서도 작동했다는 보고도 일부 있습니다), 6~8 GB면 더 쾌적합니다. SDXL 체크포인트의 경우 메모리 최적화를 활성화한 상태에서 8 GB VRAM 정도가 필요하며, 쾌적하게 사용하려면 12 GB 이상이 필요합니다. NVIDIA GPU가 공식적으로 권장되고 가장 잘 지원되는 경로이며, AMD·Intel·Apple Silicon은 각각 별도의 플랫폼별 설정 지침을 통해 지원됩니다.',
          },
          {
            q: 'AUTOMATIC1111과 Forge의 차이는 무엇인가요?',
            a: 'Forge는 lllyasviel이 성능 최적화와 Flux 같은 더 새로운 모델 지원을 더하기 위해 만든 AUTOMATIC1111 코드베이스의 포크입니다. README에 따르면 원본과는 약 90일마다 또는 중요한 수정이 있을 때 동기화합니다. GitHub에서의 마지막 푸시는 2025년 7월 31일이고 최신 GitHub 릴리스는 2024년 2월 5일자라서, 더 이상 확실히 더 활발한 선택지라고 하기 어렵습니다. 고르기 전에 저장소를 확인하시기 바랍니다.',
          },
          {
            q: 'AUTOMATIC1111과 ComfyUI의 차이는 무엇인가요?',
            a: 'AUTOMATIC1111은 초보자에게 일반적으로 더 접근하기 쉬운 탭 기반 인터페이스(텍스트 필드, 슬라이더, 버튼)를 사용합니다. ComfyUI는 각 처리 단계를 나타내는 블록을 연결하는 노드 그래프 인터페이스를 사용하여 복잡한 파이프라인에 대해 더 세밀한 제어를 제공하지만, 그 대가로 학습 곡선이 더 가파릅니다. ComfyUI는 2026년 기준으로도 더 잦은 개발 활동을 보이고 있습니다.',
          },
          {
            q: 'AUTOMATIC1111은 어디서 다운로드하나요?',
            a: '공식 출처는 [GitHub의 AUTOMATIC1111/stable-diffusion-webui 저장소](https://github.com/AUTOMATIC1111/stable-diffusion-webui)로, 코드, 설치 위키, NVIDIA·AMD·Intel·Apple Silicon 하드웨어별 설정 지침 링크가 포함되어 있습니다. 이를 사용하려면 Stable Diffusion 모델 가중치(예: Hugging Face에서)를 별도로 다운로드해야 합니다.',
          },
          {
            q: 'Stable Diffusion WebUI Forge는 아직 유지보수되고 있나요?',
            a: 'GitHub에서의 마지막 푸시는 2025년 7월 31일이고, 최신 GitHub 릴리스는 2024년 2월 5일자입니다. README에 따르면 SD-WebUI 1.10.1을 기반으로 합니다. 고르기 전에 저장소에서 더 새로운 활동이 있는지 확인하시기 바랍니다.',
          },
          {
            q: 'AUTOMATIC1111용 ControlNet 확장은 아직 유지보수되고 있나요?',
            a: 'sd-webui-controlnet 저장소의 마지막 푸시는 2024년 8월 12일이며 GitHub 릴리스는 없습니다. 여전히 널리 쓰이지만, 프로덕션 워크플로에서 의존하기 전에 저장소와 열려 있는 이슈를 확인하시기 바랍니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'AUTOMATIC1111은 가장 먼저 나왔다는 점에서 로컬 Stable Diffusion의 기본 인터페이스 자리를 얻었고, 그 생태계 — 무엇보다 ControlNet 확장, 그리고 수천 개의 커뮤니티 도구, 튜토리얼, 포럼 답변 — 는 여전히 가장 큰 자산입니다. 그러나 이 프로젝트는 2026년 3월 2일 이후 업데이트가 없고, 마지막 태그 릴리스는 v1.10.1이며, 포크 Forge는 2025년 7월 31일 이후 푸시가 없고, 주요 ControlNet 확장의 마지막 푸시는 2024년 8월 12일입니다. SD 1.5와 SDXL 체크포인트에서는 여전히 설치되고 실행되므로, 이미 사용 중인 독자가 서둘러 바꿀 이유는 없습니다. 새로 시작하는 독자는 인지도만으로 AUTOMATIC1111을 고르지 말고 활발히 개발되는 ComfyUI, InvokeAI, SD.Next와 비교하며, 먼저 자신의 GPU와 모델에서 작동하는지 확인하시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — 공식 저장소, 코드, 릴리스, 커밋 기록.',
          '[AUTOMATIC1111/stable-diffusion-webui Releases](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases) — v1.10.1(코드는 2024년 7월 27일 기준; 2025년 2월 9일 공개)을 포함한 검증된 릴리스 날짜.',
          '[AUTOMATIC1111/stable-diffusion-webui LICENSE.txt](https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt) — AGPL-3.0 라이선스 전문.',
          '[AUTOMATIC1111/stable-diffusion-webui Wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki) — NVIDIA, AMD, Intel, Apple Silicon용 설치 가이드.',
          '[GitHub의 Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) — AUTOMATIC1111의 개발 속도와 Forge의 90일 동기화 정책에 대한 README 진술.',
          '[GitHub의 Mikubill/sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) — AUTOMATIC1111용 ControlNet 확장 기능.',
          '[GitHub의 ComfyUI](https://github.com/comfy-org/ComfyUI), [GitHub의 InvokeAI](https://github.com/invoke-ai/InvokeAI), [GitHub의 Fooocus](https://github.com/lllyasviel/Fooocus), [GitHub의 SD.Next](https://github.com/vladmandic/sdnext) — 비교를 위해 참조한 대체 UI 저장소.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Stable Diffusion 리뷰: 오픈 가중치 텍스트-이미지 모델](/ko/power-local-llm/stable-diffusion-review) — 기반 모델이 실제로 무엇인지, 버전별 라이선스 조건, 하드웨어 요구 사항.',
          '[Real-ESRGAN 리뷰: AI 이미지 업스케일러](/ko/power-local-llm/real-esrgan-ai-image-upscaler-review) — AUTOMATIC1111이나 다른 어떤 UI에서 생성한 이미지를 업스케일링하기 위한 보완적인 로컬 도구.',
          '[로컬 AI 이미지 생성 vs. 클라우드](/ko/power-local-llm/local-ai-image-generation-vs-cloud) — Midjourney, Adobe Firefly 같은 클라우드 도구와 대비한 로컬 이미지 생성 옵션의 더 심층적인 비교.',
        ],
      },
    },
  },
}
