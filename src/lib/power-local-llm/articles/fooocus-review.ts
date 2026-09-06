// Fooocus Review (2026): minimalist, beginner-focused local Stable Diffusion UI
// Slug: fooocus-review
// Category: Image & Video Generation
// Companion piece to: stable-diffusion-review, local-ai-image-generation-vs-cloud
// Note: Fooocus is a front-end UI for Stable Diffusion XL, not a separate model — it hides
// most technical parameters (samplers, CFG scale, resolution grids) behind presets and a
// GPT-2-based prompt-expansion engine, aiming for a "just type a prompt" experience closer
// to Midjourney than to AUTOMATIC1111's tab-based UI or ComfyUI's node graph.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Image & Video Generation',
    heroImage: '/images/fooocus-review-hero-en.webp',
    title: 'Fooocus Review (2026): The Simplest Local Stable Diffusion UI',
    seoTitle: 'Fooocus Review 2026: Easiest Local Stable Diffusion UI',
    intro:
      'Fooocus is a free, open-source, offline image-generation interface for Stable Diffusion XL, created by Lvmin Zhang (GitHub handle lllyasviel, also known for [ControlNet](https://github.com/lllyasviel/ControlNet)). It deliberately hides almost every technical control — samplers, CFG scale, resolution grids — behind presets and an automatic prompt-expansion engine, so a reader can go from a blank text box to a finished image in roughly three clicks. This review covers what Fooocus actually does under the hood, its GPL-3.0 license, real hardware requirements, and — most importantly — its honest current maintenance status, since the original repository has publicly stated it is now in bug-fix-only mode.',
    metaDescription:
      'Fooocus review 2026: the beginner-friendly local Stable Diffusion UI from ControlNet creator lllyasviel — real VRAM requirements, GPL-3.0 license, and honest maintenance status (LTS/bug-fixes-only since 2024).',
    twitterDescription:
      'Fooocus review 2026: fewest-clicks local Stable Diffusion UI from ControlNet\'s creator — VRAM needs, GPT-2 prompt expansion, GPL-3.0 license, and the honest truth about its maintenance status.',
    audience:
      'Readers who want the simplest possible way to run Stable Diffusion locally without learning AUTOMATIC1111 or ComfyUI — covers install steps, hardware needs, and whether the project is still actively maintained.',
    readTime: '10 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'Fooocus review',
    targetKeywords: [
      'fooocus review',
      'fooocus vs comfyui',
      'fooocus vs automatic1111',
      'easiest stable diffusion ui',
      'fooocus vram requirements',
      'fooocus maintenance status',
      'fooocus download',
      'fooocus license',
    ],
    current_models_mentioned: ['Stable Diffusion XL', 'Juggernaut XL v8 (Rundiffusion)', 'realisticStockPhoto v2.0', 'animaPencilXL v5.0', 'FLUX.1'],
    current_hardware_mentioned: ['4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '8 GB system RAM', '32 GB system RAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Fooocus is a free, open-source local interface for Stable Diffusion XL that hides almost all technical settings behind presets, making it the easiest local image-generation UI to start with — but the original project is now in a "Limited Long-Term Support (LTS) with bug fixes only" state, with no new tagged release since August 2024.** It runs offline on a GPU with as little as 4 GB VRAM (Nvidia RTX 2000/3000/4000 series) and 8 GB system RAM, uses a GPT-2-based prompt-expansion engine to fill in style and detail automatically, and ships under the GPL-3.0 license. It has no newer-architecture support (no FLUX), so readers who want the latest models should also look at [ComfyUI](https://github.com/comfy-org/ComfyUI) or [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) — both from the same creator ecosystem. Verify current repository activity on [GitHub](https://github.com/lllyasviel/Fooocus) before treating it as actively developed.',
    quickAnswerTop: {
      en: {
        question: 'Is Fooocus still maintained, and how much VRAM does it need?',
        answer:
          'Fooocus is not abandoned, but its own README states the project entered "Limited Long-Term Support (LTS) with bug fixes only" mode — the last tagged release was v2.5.5 on August 12, 2024, and there are no plans to support newer architectures like FLUX. The GitHub repository is not archived and has still received commits (most recently pushed December 2025), and contributor mashb1t maintains an actively updated fork at github.com/mashb1t/Fooocus. Fooocus needs a minimum of 4 GB VRAM on an Nvidia RTX 2000/3000/4000-series GPU and 8 GB of system RAM (with virtual swap enabled) to run at all.',
        bullets: [
          'Creator: Lvmin Zhang (lllyasviel), a Stanford CS PhD candidate also known for creating ControlNet, which won the Marr Prize (ICCV 2023\'s top paper award).',
          'Status: original repo is in bug-fix-only mode since 2024; no FLUX or newer-model support planned. Not archived — still receives commits.',
          'Minimum hardware: 4 GB VRAM (Nvidia RTX 2000/3000/4000 series) and 8 GB system RAM with swap enabled; 8 GB VRAM needed on older GTX 900/1000-series cards.',
          'License: GPL-3.0 for the application code; the default SDXL checkpoints (Juggernaut XL, etc.) carry their own separate licenses.',
          'Distinctive feature: an offline GPT-2-based prompt-expansion engine ("Fooocus V2" style) that fills in missing detail automatically, similar to Midjourney\'s hidden pre-processing.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Fooocus Is', anchor: 'what-is-fooocus' },
      { label: 'Project History and Creator', anchor: 'project-history' },
      { label: 'Current Maintenance Status (2026)', anchor: 'maintenance-status' },
      { label: 'How to Install and Run Fooocus', anchor: 'how-to-install' },
      { label: 'Prompt Expansion and Built-In Styles', anchor: 'prompt-expansion-styles' },
      { label: 'License and Commercial Use', anchor: 'license-commercial-use' },
      { label: 'Hardware Requirements', anchor: 'hardware-requirements' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'Fooocus vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Fooocus', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Fooocus', anchor: 'who-should-not-use' },
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
          'Fooocus is a free, open-source, offline Stable Diffusion XL interface built to minimize manual tuning — the developer describes reaching a first image in fewer than three mouse clicks.',
          'It was created by Lvmin Zhang, whose GitHub handle is lllyasviel, a Stanford CS PhD candidate also known for creating [ControlNet](https://github.com/lllyasviel/ControlNet), whose paper won the Marr Prize (ICCV 2023\'s top paper award).',
          'The project\'s own README declares it is now in "Limited Long-Term Support (LTS) with bug fixes only" status: the last tagged release was v2.5.5 on August 12, 2024, and there are no current plans to support newer model architectures such as FLUX.',
          'The GitHub repository is not archived and has continued to receive commits (most recently pushed December 2025); contributor mashb1t maintains an actively updated fork at [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus).',
          'Minimum hardware is 4 GB VRAM on an Nvidia RTX 2000/3000/4000-series GPU plus 8 GB system RAM with virtual swap enabled; older GTX 900/1000-series cards need roughly 8 GB VRAM.',
          'Fooocus is GPL-3.0 licensed, 100% free with no paid tier — but the default SDXL checkpoints it downloads (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) carry their own separate licenses on Civitai/Hugging Face.',
        ],
      },
      whatIsFooocus: {
        id: 'what-is-fooocus',
        title: 'What Fooocus Is',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus is a free, offline, Gradio-based interface for Stable Diffusion XL that hides technical parameters behind presets and automatic prompt expansion, aiming for a "just type a prompt" experience.' },
          { type: 'plain-terms', text: 'If AUTOMATIC1111 and ComfyUI are a technical control panel and a wiring diagram, Fooocus is closer to a single "generate" button — it makes most of the decisions for you and only exposes advanced settings if you go looking for them.' },
        ],
        content: [
          '**Fooocus is a local, offline image-generation application built entirely on the Stable Diffusion XL (SDXL) architecture, distributed as free and open-source software under the GPL-3.0 license.** Unlike AUTOMATIC1111\'s tab-based technical interface or ComfyUI\'s node-graph editor, Fooocus deliberately removes most manual controls — no visible sampler picker, no CFG scale slider by default, no resolution grid — and replaces them with a small set of presets (General, Realistic, Anime) plus an "Advanced" panel a reader can ignore entirely.',
          'The project runs on [Gradio](https://www.gradio.app/), the same Python web-UI framework used by many other local AI tools, and its interface intentionally borrows the feature list of Midjourney and LeonardoAI, remapping each of their commands (`--style`, `--ar`, `V1–V4` variations, upscaling) onto a Fooocus equivalent so users coming from those cloud tools have a familiar mental model.',
          'The core design goal, stated directly in the project\'s own documentation, is that the number of mouse clicks between downloading Fooocus and generating a first image should be fewer than three. That single design constraint — rather than any specific model innovation — is what distinguishes Fooocus from other Stable Diffusion front ends: it is a UI/UX layer, not a new model.',
        ],
      },
      projectHistory: {
        id: 'project-history',
        title: 'Project History and Creator',
        content: [
          '**Fooocus was created by Lvmin Zhang, who publishes under the GitHub handle lllyasviel, and whose repository was first created on GitHub on August 9, 2023.** Zhang is a computer science PhD candidate at Stanford University researching controllable generative modeling and computer graphics.',
          'Zhang is independently well known in the Stable Diffusion community as the creator of [ControlNet](https://github.com/lllyasviel/ControlNet), the neural-network architecture that added precise spatial conditioning (pose, depth, edge maps) to text-to-image diffusion models. The ControlNet paper won the Marr Prize, the top paper award at the International Conference on Computer Vision (ICCV) 2023 — one of computer vision\'s most competitive conferences. Zhang has also released other local AI tools including [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (a performance-focused AUTOMATIC1111 fork), PaintsUndo, and IC-Light.',
          'Fooocus was built, in the project\'s own words, from a mixture of the [AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) and [ComfyUI](https://github.com/comfy-org/ComfyUI) codebases — reusing their proven inference techniques while presenting a radically simplified front end. As of September 2026 the project has accumulated more than 52,000 GitHub stars and over 8,600 forks, among the most-starred local image-generation tools on GitHub.',
          '**A safety note directly from the project itself: Fooocus has no official website.** The README explicitly warns that domains such as fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro, and fooocus.one are fake and have no relationship to the real project — the only official source is the [GitHub repository](https://github.com/lllyasviel/Fooocus) itself.',
        ],
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'Is Fooocus Still Maintained in 2026?',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus is not abandoned, but its own README states the original project is in "Limited Long-Term Support (LTS) with bug fixes only" mode, with no tagged release since August 2024 and no plans to support newer architectures like FLUX.' },
          { type: 'plain-terms', text: 'Think of it as a finished, stable tool rather than a growing one — the developer considers the SDXL-based feature set essentially complete and is not chasing every new model release.' },
        ],
        content: [
          'The [lllyasviel/Fooocus README](https://github.com/lllyasviel/Fooocus) carries a section titled **"Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only,"** which states the project — built entirely on the Stable Diffusion XL architecture — is now considered feature-complete, and that "future updates will focus exclusively on addressing any bugs that may arise." The README explicitly says there are no current plans to migrate to or incorporate newer model architectures such as FLUX, though it leaves the door open if the open-source community converges on a single dominant successor method.',
          'For readers who want the newest models, the README itself recommends alternative platforms — specifically [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (also from the same creator) and [ComfyUI](https://github.com/comfy-org/ComfyUI) or its simplified front end [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) — rather than promising FLUX support inside Fooocus itself.',
          'This is not the same as an abandoned project. The GitHub repository is **not archived**, remains open to issues and pull requests (314 open issues as of this review), and GitHub\'s own activity data shows commits landing as recently as December 2025 — over a year after the last tagged release. The README credits contributor **mashb1t** with "huge efforts" reducing the codebase\'s outstanding bugs, and mashb1t separately maintains a fork at [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus) that has continued to receive commits even more recently (last pushed October 2025) — though that fork also has not cut a new tagged release since August 2024, mirroring the upstream project\'s pace.',
          'The practical takeaway: Fooocus is stable and safe to install today, but a reader who specifically wants FLUX, SD 3.5, or other post-2024 model architectures inside a simplified UI will not find that in Fooocus and should look at ComfyUI, SwarmUI, or WebUI Forge instead.',
        ],
        note: 'Maintenance-status facts verified directly against the lllyasviel/Fooocus GitHub repository and README, and the mashb1t/Fooocus fork, on 2026-09-06 — repository push dates, release dates, and open-issue counts change over time; re-check [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) before assuming this status is current.',
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'How to Install and Run Fooocus',
        content: [
          'Fooocus ships a one-click Windows package, plus manual install paths for Linux, Mac, and Docker — there is no separate model download step for the default preset, since Fooocus fetches its own default checkpoint automatically on first launch.',
        ],
        numberedItems: [
          { title: 'Download the Windows package (or clone the repo on Linux/Mac)', whyItMatters: 'Windows users get a self-contained `.7z` package from the [GitHub Releases page](https://github.com/lllyasviel/Fooocus/releases) with an embedded Python environment — no separate Python install required. Linux and Mac users clone the repository and set up a Conda or venv environment instead.' },
          { title: 'Extract the package and run run.bat', whyItMatters: 'Uncompress the downloaded archive and double-click `run.bat` — this launches the General preset. `run_anime.bat` and `run_realistic.bat` launch the Anime and Realistic presets instead, each with a different default checkpoint.' },
          { title: 'Let Fooocus auto-download its default model', whyItMatters: 'On first launch, Fooocus automatically downloads the checkpoint for whichever preset you ran — Juggernaut XL v8 (Rundiffusion) for General, RealisticStockPhoto v2.0 for Realistic, or AnimaPencilXL v5.0 for Anime — into the `Fooocus/models/checkpoints` folder.' },
          { title: 'Type a prompt and press Generate', whyItMatters: 'No sampler, CFG scale, or resolution choice is required — Fooocus applies sensible defaults automatically. Advanced controls are available behind an "Advanced" toggle for readers who want them later.' },
          { title: 'Use Image Prompt, Inpaint, or Upscale/Vary as needed', whyItMatters: 'Fooocus maps Midjourney-style workflows (image prompting, inpainting, upscaling, subtle/strong variation) onto its own UI panels, using its own inpainting model and image-prompt algorithm rather than a standard SDXL ControlNet setup.' },
          { title: 'Switch to community checkpoints once comfortable', whyItMatters: 'Any SDXL checkpoint from Civitai or Hugging Face can be placed in the `models/checkpoints` folder and selected inside Fooocus, extending it beyond the three built-in presets.' },
        ],
        note: 'Exact folder paths, launcher flags, and dependency versions change between releases — follow the current setup instructions on the [lllyasviel/Fooocus GitHub page](https://github.com/lllyasviel/Fooocus) rather than a generic guide.',
      },
      promptExpansionStyles: {
        id: 'prompt-expansion-styles',
        title: 'Prompt Expansion and Built-In Styles',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus runs an offline GPT-2-based prompt-expansion model, exposed as a style called "Fooocus V2," that automatically adds detail to short or vague prompts before generation.' },
        ],
        content: [
          '**Fooocus\'s signature feature is an offline GPT-2-based prompt-processing engine, presented in the UI as the "Fooocus V2" style.** The project\'s own documentation compares it to Midjourney\'s hidden prompt pre-processing and LeonardoAI\'s "Prompt Magic" — the idea is that a short prompt like "house in garden" and a 1,000-word prompt should both produce polished, coherent results, because the expansion model fills in missing stylistic and compositional detail automatically.',
          'Beyond Fooocus V2, the interface ships several other built-in style presets, including "Fooocus Photograph," "Fooocus Negative," and a "cinematic-default" style, with additional SDXL styles contributed by community members credited in the project\'s README (twri, 3Diva, and Marc K3nt3L). Styles can be combined, and multiple styles stack in the Advanced panel for readers who want more control than the three top-level presets provide.',
          'Other under-the-hood techniques the README documents include a native refiner swap inside a single k-sampler (avoiding the momentum loss that happens when AUTOMATIC1111 or ComfyUI swap between two independent samplers), negative ADM guidance tuned for SDXL\'s highest resolution level, and Fooocus\'s own inpainting model and image-prompt algorithm rather than a standard SDXL ControlNet or IP-Adapter pipeline.',
        ],
      },
      licenseCommercialUse: {
        id: 'license-commercial-use',
        title: 'Fooocus License and Commercial Use',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus\'s application code is licensed under GPL-3.0 (GNU General Public License version 3), confirmed on its GitHub repository — but the default SDXL checkpoints it downloads are separate community models with their own, different licenses.' },
          { type: 'plain-terms', text: 'The Fooocus software itself is fully open source and free to use or modify; the pictures it generates depend on which checkpoint made them, and that checkpoint\'s own license — not Fooocus\'s — governs commercial use of those specific images.' },
        ],
        content: [
          'Fooocus is licensed under **GPL-3.0** (the GNU General Public License, version 3), as confirmed in the license metadata on its GitHub repository. GPL-3.0 permits free use, modification, and redistribution of the Fooocus codebase itself, provided any distributed derivative work is also released under GPL-3.0 (copyleft) — this applies to the application code, not to images you generate with it.',
          'The three default checkpoints Fooocus downloads automatically — Juggernaut XL v8 (Rundiffusion) for the General preset, RealisticStockPhoto v2.0 for Realistic, and AnimaPencilXL v5.0 for Anime — are community-trained Stable Diffusion XL fine-tunes hosted independently on platforms like Civitai and Hugging Face, and each carries its own separate license (commonly a CreativeML OpenRAIL-M variant, but terms vary by checkpoint and can change). Anyone planning to use generated images commercially should check the specific checkpoint\'s own license page before doing so — Fooocus\'s GPL-3.0 license does not automatically extend to, or override, a checkpoint\'s terms.',
          'The project itself carries no commercial dimension: the README states plainly that Fooocus is "a 100% non-commercial offline open-source software," with no official website, no paid product, and no company selling it — the only warning to heed is the fake-domain notice covered in the Project History section above.',
        ],
        note: 'This section summarizes publicly published license metadata as of 2026-09-06; it is not legal advice. Read the [Fooocus LICENSE file](https://github.com/lllyasviel/Fooocus/blob/main/LICENSE) and the specific checkpoint\'s license page before any commercial deployment.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Hardware Requirements',
        itemHeadings: true,
        columns: ['GPU', 'Min. VRAM', 'Min. RAM', 'Notes'],
        rows: [
          { 'GPU': 'Nvidia RTX 2000-4000', 'Min. VRAM': '4 GB VRAM', 'Min. RAM': '8 GB + swap', 'Notes': 'Fastest tier; RTX 4000-series quickest' },
          { 'GPU': 'Nvidia GTX 900/1000', 'Min. VRAM': '8 GB VRAM (6 GB reported by some)', 'Min. RAM': '8 GB + swap', 'Notes': 'Only marginally faster than CPU' },
          { 'GPU': 'Nvidia GTX below 900', 'Min. VRAM': 'Not supported', 'Min. RAM': '—', 'Notes': 'Use CPU-only mode instead' },
          { 'GPU': 'AMD GPU (Windows)', 'Min. VRAM': '8 GB VRAM (DirectML, beta)', 'Min. RAM': '8 GB + swap', 'Notes': '~3x slower than Nvidia RTX 3000' },
          { 'GPU': 'AMD GPU (Linux)', 'Min. VRAM': '8 GB VRAM (ROCm, beta)', 'Min. RAM': '8 GB + swap', 'Notes': '~1.5x slower than Nvidia RTX 3000' },
          { 'GPU': 'Apple M1/M2 (unofficial)', 'Min. VRAM': 'Shared system memory', 'Min. RAM': 'Shared', 'Notes': '~9x slower than Nvidia RTX 3000' },
          { 'GPU': 'CPU only', 'Min. VRAM': 'None (0 GB)', 'Min. RAM': '32 GB', 'Notes': '~17x slower than Nvidia RTX 3000' },
        ],
        content: [
          '**The minimum requirement to run Fooocus at all is 4 GB of Nvidia VRAM plus 8 GB of system RAM with virtual swap enabled**, per the specification table in the project\'s own README. This makes Fooocus one of the lower-barrier local Stable Diffusion UIs, since SDXL checkpoints often ask for 8–12 GB VRAM in other front ends without Fooocus\'s built-in memory-management optimizations.',
          'The project\'s own testing example cites a laptop with an Nvidia RTX 3060 (6 GB VRAM) and 16 GB system RAM generating images at roughly 1.35 seconds per sampling step — a useful real-world reference point, though actual speed depends on resolution, preset, and current GPU driver version.',
        ],
        note: 'Figures are drawn directly from the "Minimal Requirement" table in the lllyasviel/Fooocus README as of 2026-09-06 — AMD and Mac support are both explicitly marked as beta/unofficial by the project itself, and exact VRAM usage varies with resolution, batch size, and installed drivers.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing: Free, No Paid Tier',
        content: [
          '**Fooocus is entirely free with no paid tier, subscription, or official commercial product of any kind.** The application is GPL-3.0-licensed open-source software; the only cost to a reader is their own hardware and electricity, and the checkpoints it downloads by default (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) are likewise free to download.',
          'Unlike some other local AI tools that pair a free self-hosted app with an optional paid cloud tier, Fooocus has no such offering — the README is explicit that the project has no official website and no company behind it selling anything. Readers should treat any site claiming to sell a "Fooocus Pro" version, or any domain other than the [GitHub repository](https://github.com/lllyasviel/Fooocus) itself, as unaffiliated with the real project.',
        ],
        note: 'Confirmed directly from the project\'s own README as of 2026-09-06 — re-verify on [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) if evaluating this for a commercial deployment years from now.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Fooocus vs. Alternatives',
        columns: ['Option', 'Best for', 'Self-hostable', 'License / cost', 'Key trade-off'],
        rows: [
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Best for': 'Fewest clicks to a first image; zero manual parameter tuning for beginners',
            'Self-hostable': 'Yes — free, own GPU (min. 4 GB VRAM)',
            'License / cost': 'GPL-3.0 (app); default checkpoints carry their own separate licenses',
            'Key trade-off': 'Original repo is bug-fix-only since August 2024; SDXL-only, no FLUX support',
          },
          {
            'Option': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) / [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Best for': 'Tab-based technical UI with the largest extension ecosystem of any local SD front end',
            'Self-hostable': 'Yes — free, own GPU',
            'License / cost': 'AGPL-3.0, free',
            'Key trade-off': 'Exposes every parameter directly — a steeper learning curve than Fooocus',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Best for': 'Full pipeline control via a visual node graph; usually first to support new model releases',
            'Self-hostable': 'Yes — free, own GPU',
            'License / cost': 'GPL-3.0, free (separate paid ComfyUI cloud/API tier exists)',
            'Key trade-off': 'Node-graph interface has real setup complexity for a total beginner',
          },
          {
            'Option': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Best for': 'Polished professional UI with a unified canvas and team-oriented workflows',
            'Self-hostable': 'Yes — free, own GPU',
            'License / cost': 'Apache 2.0, free (Invoke\'s paid cloud tier was discontinued after Adobe\'s 2025 acquisition)',
            'Key trade-off': 'Smaller community extension ecosystem than AUTOMATIC1111 or ComfyUI',
          },
          {
            'Option': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) (formerly Stability AI\'s StableSwarmUI)',
            'Best for': 'A simplified tabbed front end running on top of the ComfyUI backend',
            'Self-hostable': 'Yes — free, own GPU',
            'License / cost': 'MIT license, free',
            'Key trade-off': 'Smaller community than ComfyUI or AUTOMATIC1111; not as beginner-focused as Fooocus',
          },
        ],
        note: 'This is a positioning summary, not a benchmark ranking. Licenses, star counts, and maintenance status were verified directly against each project\'s GitHub repository as of 2026-09-06 and can change — see [Stable Diffusion Review](/power-local-llm/stable-diffusion-review) for the underlying model family this article, and every UI above, relies on.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Fooocus',
        items: [
          '**Total beginner who has never run local AI image generation before.** Fooocus\'s preset-and-prompt-expansion design removes the steepest part of the Stable Diffusion learning curve — no sampler, CFG scale, or resolution decisions are required to get a usable result.',
          '**Reader who wants a Midjourney-like experience without a subscription or cloud dependency.** Fooocus\'s feature set deliberately mirrors Midjourney\'s command list (styles, variations, upscaling) while running entirely offline on local hardware.',
          '**Owner of a lower-VRAM GPU.** A 4 GB VRAM minimum (on Nvidia RTX 2000-series and up) is lower than what AUTOMATIC1111 or ComfyUI typically recommend for comfortable SDXL use, making Fooocus a reasonable entry point on older or budget GPUs.',
          '**Reader who is fine staying on SDXL-based models.** If the current preset lineup (general-purpose, realistic, anime) already covers your use case, Fooocus\'s stability and simplicity outweigh its lack of newer-architecture support.',
          '**Reader who wants Civitai-style prompt weighting to just work.** Fooocus uses AUTOMATIC1111\'s prompt-reweighting syntax, so prompts copied directly from Civitai behave as expected without reformatting.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Fooocus',
        items: [
          '**Reader who wants FLUX, SD 3.5, or any post-2024 model architecture.** Fooocus\'s own README states there are no current plans to support newer architectures — readers who want the newest models should use [ComfyUI](https://github.com/comfy-org/ComfyUI), [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI), or [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) instead.',
          '**Power user who wants fine-grained control over every step of the generation pipeline.** Fooocus\'s entire design philosophy is hiding parameters; readers who want to inspect or rewire every stage of a diffusion pipeline should use ComfyUI\'s node graph instead.',
          '**Reader relying on the original project for fast bug fixes or new features.** The original repository is explicitly in bug-fix-only mode with no committed roadmap — readers who need active feature development should evaluate the community-maintained [mashb1t/Fooocus fork](https://github.com/mashb1t/Fooocus) or a different UI entirely.',
          '**Team needing production-grade batch processing or an API-first workflow.** Fooocus is built around a single-user Gradio interface, not an API server — readers building an automated pipeline should look at ComfyUI\'s API mode or InvokeAI instead.',
          '**Reader who wants heavy ControlNet-style pose/depth conditioning.** Fooocus uses its own simplified "Image Prompt" system rather than exposing full ControlNet model selection; readers who need precise pose or depth control should use AUTOMATIC1111, WebUI Forge, or ComfyUI with dedicated ControlNet models.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Fooocus free?',
            a: 'Yes. Fooocus is free, open-source software licensed under GPL-3.0, with no paid tier, subscription, or official commercial product. The default SDXL checkpoints it downloads (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) are also free, though each carries its own separate license governing commercial use of generated images.',
          },
          {
            q: 'Is Fooocus still being updated?',
            a: 'It is in a reduced-activity state, not abandoned. The project\'s README states it is in "Limited Long-Term Support (LTS) with bug fixes only" mode: the last tagged release was v2.5.5 on August 12, 2024, and there are no plans to support newer model architectures like FLUX. The GitHub repository is not archived and has continued to receive commits as recently as December 2025, and contributor mashb1t maintains an actively updated fork at github.com/mashb1t/Fooocus.',
          },
          {
            q: 'Who created Fooocus?',
            a: 'Fooocus was created by Lvmin Zhang, who publishes under the GitHub handle lllyasviel. Zhang is a Stanford University computer science PhD candidate also known for creating ControlNet, whose paper won the Marr Prize (ICCV 2023\'s top paper award), as well as WebUI Forge, PaintsUndo, and IC-Light.',
          },
          {
            q: 'How much VRAM does Fooocus need?',
            a: 'The minimum is 4 GB VRAM on an Nvidia RTX 2000, 3000, or 4000-series GPU, plus 8 GB of system RAM with virtual swap enabled. Older Nvidia GTX 900/1000-series cards need roughly 8 GB VRAM, AMD GPUs need about 8 GB VRAM via DirectML (Windows, beta) or ROCm (Linux, beta), and CPU-only operation is possible with 32 GB of system RAM but runs roughly 17 times slower than an Nvidia RTX 3000-series GPU.',
          },
          {
            q: 'What is the GPT-2-based prompt expansion in Fooocus?',
            a: 'It is an offline prompt-processing engine, exposed in the UI as the "Fooocus V2" style, that automatically expands short or vague prompts with additional stylistic and compositional detail before generation — similar in concept to Midjourney\'s hidden prompt pre-processing or LeonardoAI\'s "Prompt Magic." It runs locally and does not require an internet connection.',
          },
          {
            q: 'Is Fooocus better than AUTOMATIC1111 or ComfyUI?',
            a: 'It depends on your goal. Fooocus is easier to start with because it hides technical parameters behind presets, at the cost of fine-grained control. AUTOMATIC1111\'s WebUI (or its WebUI Forge fork) exposes every parameter directly and has the largest extension ecosystem of any local Stable Diffusion front end. ComfyUI offers full pipeline control via a node graph and is usually first to support new model releases. Readers who outgrow Fooocus\'s presets typically move to one of those two.',
          },
          {
            q: 'Does Fooocus support FLUX or Stable Diffusion 3.5?',
            a: 'No. Fooocus is built entirely on the Stable Diffusion XL architecture, and its own README states there are no current plans to add support for newer architectures such as FLUX. Readers who want FLUX or SD 3.5 in a similarly local setup should use ComfyUI, SwarmUI, or WebUI Forge instead.',
          },
          {
            q: 'Where do I download Fooocus?',
            a: 'The only official source is the [lllyasviel/Fooocus GitHub repository](https://github.com/lllyasviel/Fooocus), where a one-click Windows package is published under Releases. The project\'s own README explicitly warns that domains like fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro, and fooocus.one are fake websites with no relationship to the real project.',
          },
          {
            q: 'What is the default model Fooocus uses?',
            a: 'Fooocus auto-downloads a different default SDXL checkpoint depending on which preset you launch: Juggernaut XL v8 (Rundiffusion) for the General preset, RealisticStockPhoto v2.0 for the Realistic preset, and AnimaPencilXL v5.0 for the Anime preset. All three are community-trained checkpoints hosted independently of Fooocus itself.',
          },
          {
            q: 'Can I use images generated with Fooocus commercially?',
            a: 'Fooocus\'s own GPL-3.0 license covers the application code, not the images it produces. Commercial use of a generated image is governed by the license of the specific checkpoint used to create it — the default checkpoints (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) each carry their own separate license, typically a CreativeML OpenRAIL-M variant, published on their Civitai or Hugging Face page. Check that page before commercial use.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Fooocus earns its reputation as the easiest way to run Stable Diffusion locally — the preset-and-prompt-expansion design genuinely removes the steepest part of the learning curve that makes AUTOMATIC1111 and ComfyUI intimidating to a first-time user, and it does so while running entirely offline on hardware as modest as a 4 GB VRAM GPU. The honest caveat is maintenance: the original project\'s own README places it in bug-fix-only mode with no tagged release since August 2024 and no plans to support FLUX or other post-2024 architectures, even though the repository remains active and non-archived. Readers who want the simplest possible entry point into local, SDXL-based image generation, and who don\'t need the newest model architectures or fine-grained pipeline control, will find Fooocus does exactly what it promises. Readers who want either more control (ComfyUI, AUTOMATIC1111/WebUI Forge) or newer models in a similarly local setup (ComfyUI, SwarmUI) should look past Fooocus to those instead — ideally after checking [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) directly for the project\'s current status.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[lllyasviel/Fooocus — GitHub repository and README](https://github.com/lllyasviel/Fooocus) — primary source for features, installation, minimal-requirement hardware table, license, and the "Limited Long-Term Support" maintenance-status statement.',
          '[lllyasviel/Fooocus — Releases](https://github.com/lllyasviel/Fooocus/releases) — release history and dates, including the most recent tagged release, v2.5.5 (August 12, 2024).',
          '[mashb1t/Fooocus — GitHub repository](https://github.com/mashb1t/Fooocus) — community-maintained fork with more recent commit activity than the upstream repository.',
          '[lllyasviel/ControlNet — GitHub repository](https://github.com/lllyasviel/ControlNet) — creator Lvmin Zhang\'s earlier project, referenced for background on the developer.',
          '[Lvmin Zhang — personal academic page](https://lllyasviel.github.io/lvmin_zhang/) — biographical and research background for the creator.',
          '[Scientific American — profile of Lvmin Zhang](https://www.scientificamerican.com/article/lvmin-zhang/) — independent profile covering Zhang\'s AI-tools work, including Fooocus and ControlNet.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Stable Diffusion Review: Free Local Text-to-Image Models](/power-local-llm/stable-diffusion-review) — the underlying open-weights model family Fooocus runs, including license terms and version history.',
          '[Local AI Image Generation vs. Cloud: FLUX, SD 3.5, Qwen-Image vs. Adobe Firefly & getimg.ai](/power-local-llm/local-ai-image-generation-vs-cloud) — a deeper comparison of local image model families for readers who outgrow Fooocus\'s SDXL-only scope.',
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
    heroImage: '/images/fooocus-review-hero-de.webp',
    title: 'Fooocus Test (2026): Die einfachste lokale Stable-Diffusion-Oberfläche',
    seoTitle: 'Fooocus Test 2026: Einfachste lokale Stable-Diffusion-UI',
    intro:
      'Fooocus ist eine kostenlose, quelloffene Bildgenerierungs-Oberfläche für Stable Diffusion XL, die vollständig offline läuft. Entwickelt wurde sie von Lvmin Zhang (GitHub-Name lllyasviel), der auch für [ControlNet](https://github.com/lllyasviel/ControlNet) bekannt ist. Fooocus blendet fast alle technischen Einstellungen aus — Sampler, CFG-Skala, Auflösungsraster — und ersetzt sie durch Voreinstellungen sowie eine automatische Prompt-Erweiterung, sodass man in rund drei Klicks vom leeren Textfeld zum fertigen Bild kommt. Dieser Test zeigt, was Fooocus technisch tatsächlich macht, seine GPL-3.0-Lizenz, die realen Hardware-Anforderungen und – besonders wichtig – den ehrlichen aktuellen Wartungsstatus, denn das Original-Repository hat öffentlich erklärt, sich nun im reinen Bugfix-Modus zu befinden.',
    metaDescription:
      'Fooocus Test 2026: die einsteigerfreundliche lokale Stable-Diffusion-UI von ControlNet-Entwickler lllyasviel — reale VRAM-Anforderungen, GPL-3.0-Lizenz und ehrlicher Wartungsstatus (LTS/nur Bugfixes seit 2024).',
    twitterDescription:
      'Fooocus Test 2026: die lokale Stable-Diffusion-UI mit den wenigsten Klicks, vom Schöpfer von ControlNet — VRAM-Bedarf, GPT-2-Prompt-Erweiterung, GPL-3.0-Lizenz und die ehrliche Wahrheit zum Wartungsstatus.',
    audience:
      'Leser, die Stable Diffusion so einfach wie möglich lokal betreiben wollen, ohne AUTOMATIC1111 oder ComfyUI lernen zu müssen — behandelt Installation, Hardware-Bedarf und ob das Projekt noch aktiv gepflegt wird.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'Fooocus Test',
    targetKeywords: [
      'fooocus test',
      'fooocus vs comfyui',
      'fooocus vs automatic1111',
      'einfachste stable diffusion ui',
      'fooocus vram anforderungen',
      'fooocus wartungsstatus',
      'fooocus download',
      'fooocus lizenz',
    ],
    current_models_mentioned: ['Stable Diffusion XL', 'Juggernaut XL v8 (Rundiffusion)', 'realisticStockPhoto v2.0', 'animaPencilXL v5.0', 'FLUX.1'],
    current_hardware_mentioned: ['4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '8 GB Arbeitsspeicher', '32 GB Arbeitsspeicher', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Fooocus ist eine kostenlose, quelloffene lokale Oberfläche für Stable Diffusion XL, die fast alle technischen Einstellungen hinter Voreinstellungen verbirgt und damit die einfachste lokale Bildgenerierungs-UI zum Einstieg ist — allerdings befindet sich das Originalprojekt inzwischen im Zustand „Limited Long-Term Support (LTS) mit ausschließlich Bugfixes", ohne neues Release-Tag seit August 2024.** Es läuft offline bereits ab 4 GB VRAM (Nvidia RTX 2000er/3000er/4000er-Serie) und 8 GB Arbeitsspeicher, nutzt eine GPT-2-basierte Prompt-Erweiterung, die Stil und Detail automatisch ergänzt, und steht unter der GPL-3.0-Lizenz. Neuere Architekturen wie FLUX werden nicht unterstützt — wer aktuellste Modelle sucht, sollte zusätzlich [ComfyUI](https://github.com/comfy-org/ComfyUI) oder [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) prüfen, beide vom selben Entwickler-Umfeld. Den aktuellen Repository-Status vor jeder Bewertung als „aktiv entwickelt" auf [GitHub](https://github.com/lllyasviel/Fooocus) prüfen.',
    quickAnswerTop: {
      de: {
        question: 'Wird Fooocus noch gepflegt, und wie viel VRAM braucht es?',
        answer:
          'Fooocus ist nicht aufgegeben, aber die eigene README erklärt, dass sich das Projekt im Zustand „Limited Long-Term Support (LTS) mit ausschließlich Bugfixes" befindet — das letzte getaggte Release war v2.5.5 am 12. August 2024, und es gibt keine Pläne, neuere Architekturen wie FLUX zu unterstützen. Das GitHub-Repository ist nicht archiviert und hat weiterhin Commits erhalten (zuletzt im Dezember 2025), und Mitwirkender mashb1t pflegt einen aktiv aktualisierten Fork unter github.com/mashb1t/Fooocus. Fooocus benötigt mindestens 4 GB VRAM auf einer Nvidia-RTX-2000er/3000er/4000er-GPU und 8 GB Arbeitsspeicher (mit aktivierter virtueller Auslagerung), um überhaupt zu laufen.',
        bullets: [
          'Entwickler: Lvmin Zhang (lllyasviel), Informatik-Doktorand an der Stanford University, ebenfalls bekannt als Schöpfer von ControlNet, dessen Paper den Marr Prize (den wichtigsten Paper-Preis der ICCV 2023) gewann.',
          'Status: Original-Repository seit 2024 im reinen Bugfix-Modus; keine FLUX- oder neuere-Modell-Unterstützung geplant. Nicht archiviert — erhält weiterhin Commits.',
          'Mindest-Hardware: 4 GB VRAM (Nvidia RTX 2000er/3000er/4000er-Serie) und 8 GB Arbeitsspeicher mit aktivierter Auslagerung; ältere GTX-900er/1000er-Karten benötigen 8 GB VRAM.',
          'Lizenz: GPL-3.0 für den Anwendungscode; die Standard-SDXL-Checkpoints (Juggernaut XL usw.) haben jeweils eigene, separate Lizenzen.',
          'Besonderheit: eine offline laufende, GPT-2-basierte Prompt-Erweiterung (Stil „Fooocus V2"), die fehlende Details automatisch ergänzt — ähnlich der verborgenen Vorverarbeitung von Midjourney.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Fooocus?', anchor: 'what-is-fooocus' },
      { label: 'Projektgeschichte und Entwickler', anchor: 'project-history' },
      { label: 'Aktueller Wartungsstatus (2026)', anchor: 'maintenance-status' },
      { label: 'Installation und erste Schritte', anchor: 'how-to-install' },
      { label: 'Prompt-Erweiterung und integrierte Stile', anchor: 'prompt-expansion-styles' },
      { label: 'Lizenz und kommerzielle Nutzung', anchor: 'license-commercial-use' },
      { label: 'Hardware-Anforderungen', anchor: 'hardware-requirements' },
      { label: 'Preise', anchor: 'pricing' },
      { label: 'Fooocus im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen sich Fooocus eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich Fooocus nicht eignet', anchor: 'who-should-not-use' },
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
          'Fooocus ist eine kostenlose, quelloffene, offline laufende Oberfläche für Stable Diffusion XL, die manuelle Feinabstimmung minimieren soll — laut Entwickler sind es weniger als drei Mausklicks bis zum ersten Bild.',
          'Entwickelt von Lvmin Zhang, GitHub-Name lllyasviel, Informatik-Doktorand an der Stanford University, ebenfalls bekannt als Schöpfer von [ControlNet](https://github.com/lllyasviel/ControlNet), dessen Paper den Marr Prize (wichtigster Paper-Preis der ICCV 2023) gewann.',
          'Die eigene README des Projekts erklärt, es befinde sich nun im Zustand „Limited Long-Term Support (LTS) mit ausschließlich Bugfixes": Das letzte getaggte Release war v2.5.5 am 12. August 2024, und aktuell sind keine Pläne vorhanden, neuere Architekturen wie FLUX zu unterstützen.',
          'Das GitHub-Repository ist nicht archiviert und erhielt weiterhin Commits (zuletzt im Dezember 2025); Mitwirkender mashb1t pflegt einen aktiv aktualisierten Fork unter [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus).',
          'Mindest-Hardware sind 4 GB VRAM auf einer Nvidia-RTX-2000er/3000er/4000er-GPU plus 8 GB Arbeitsspeicher mit aktivierter virtueller Auslagerung; ältere GTX-900er/1000er-Karten benötigen etwa 8 GB VRAM.',
          'Fooocus steht unter GPL-3.0, ist zu 100 % kostenlos ohne bezahlte Stufe — die standardmäßig heruntergeladenen SDXL-Checkpoints (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) haben jedoch jeweils eigene, separate Lizenzen auf Civitai/Hugging Face.',
        ],
      },
      whatIsFooocus: {
        id: 'what-is-fooocus',
        title: 'Was ist Fooocus?',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus ist eine kostenlose, offline laufende, Gradio-basierte Oberfläche für Stable Diffusion XL, die technische Parameter hinter Voreinstellungen und automatischer Prompt-Erweiterung verbirgt und ein reines „Prompt eingeben"-Erlebnis anstrebt.' },
          { type: 'plain-terms', text: 'Wenn AUTOMATIC1111 und ComfyUI ein technisches Bedienpult beziehungsweise ein Schaltplan sind, ist Fooocus eher ein einzelner „Generieren"-Knopf — es trifft die meisten Entscheidungen für einen selbst und zeigt erweiterte Einstellungen nur, wenn man aktiv danach sucht.' },
        ],
        content: [
          '**Fooocus ist eine lokale, offline laufende Bildgenerierungs-Anwendung, die vollständig auf der Stable-Diffusion-XL-Architektur (SDXL) basiert und als freie, quelloffene Software unter der GPL-3.0-Lizenz vertrieben wird.** Anders als AUTOMATIC1111s tab-basierte technische Oberfläche oder ComfyUIs Node-Graph-Editor entfernt Fooocus bewusst die meisten manuellen Steuerungen — kein sichtbarer Sampler-Auswähler, kein CFG-Skala-Regler standardmäßig, kein Auflösungsraster — und ersetzt sie durch eine kleine Auswahl an Voreinstellungen (General, Realistic, Anime) sowie ein „Advanced"-Panel, das man komplett ignorieren kann.',
          'Das Projekt läuft auf [Gradio](https://www.gradio.app/), demselben Python-Web-UI-Framework, das auch viele andere lokale KI-Tools nutzen. Die Oberfläche übernimmt bewusst die Befehlsliste von Midjourney und LeonardoAI und bildet deren Befehle (`--style`, `--ar`, V1–V4-Varianten, Upscaling) auf jeweils ein Fooocus-Äquivalent ab, damit Nutzer, die von diesen Cloud-Tools kommen, ein vertrautes mentales Modell vorfinden.',
          'Das zentrale Designziel, das die Projektdokumentation selbst formuliert, lautet: Zwischen Download und erstem generierten Bild sollen weniger als drei Mausklicks liegen. Genau diese eine Design-Vorgabe – nicht eine spezielle Modell-Innovation – unterscheidet Fooocus von anderen Stable-Diffusion-Oberflächen: Es ist eine UI/UX-Schicht, kein neues Modell.',
        ],
      },
      projectHistory: {
        id: 'project-history',
        title: 'Projektgeschichte und Entwickler',
        content: [
          '**Fooocus wurde von Lvmin Zhang entwickelt, der unter dem GitHub-Namen lllyasviel veröffentlicht; das Repository wurde am 9. August 2023 auf GitHub angelegt.** Zhang ist Informatik-Doktorand an der Stanford University und forscht zu steuerbarer generativer Modellierung und Computergrafik.',
          'In der Stable-Diffusion-Community ist Zhang unabhängig davon bekannt als Schöpfer von [ControlNet](https://github.com/lllyasviel/ControlNet), der neuronalen Netzwerkarchitektur, die Text-zu-Bild-Diffusionsmodellen präzise räumliche Konditionierung (Pose, Tiefe, Kantenkarten) hinzufügte. Das ControlNet-Paper gewann den Marr Prize, den wichtigsten Paper-Preis der International Conference on Computer Vision (ICCV) 2023 — eine der kompetitivsten Konferenzen im Bereich Computer Vision. Zhang hat außerdem weitere lokale KI-Tools veröffentlicht, darunter [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (ein leistungsoptimierter AUTOMATIC1111-Fork), PaintsUndo und IC-Light.',
          'Fooocus entstand, so das Projekt selbst, aus einer Mischung der Codebasen von [AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) und [ComfyUI](https://github.com/comfy-org/ComfyUI) — bewährte Inferenztechniken wurden übernommen, die Oberfläche jedoch radikal vereinfacht. Stand September 2026 hat das Projekt über 52.000 GitHub-Sterne und mehr als 8.600 Forks gesammelt und zählt damit zu den meistbewerteten lokalen Bildgenerierungs-Tools auf GitHub.',
          '**Ein Sicherheitshinweis direkt vom Projekt selbst: Fooocus hat keine offizielle Website.** Die README warnt ausdrücklich, dass Domains wie fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro und fooocus.one gefälscht sind und keinerlei Bezug zum echten Projekt haben — die einzige offizielle Quelle ist das [GitHub-Repository](https://github.com/lllyasviel/Fooocus) selbst.',
        ],
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'Wird Fooocus 2026 noch gepflegt?',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus ist nicht aufgegeben, aber die eigene README erklärt, dass sich das Originalprojekt im Zustand „Limited Long-Term Support (LTS) mit ausschließlich Bugfixes" befindet, mit keinem getaggten Release seit August 2024 und keinen Plänen für neuere Architekturen wie FLUX.' },
          { type: 'plain-terms', text: 'Man kann es eher als fertiges, stabiles Werkzeug betrachten denn als eines, das noch wächst — der Entwickler hält das SDXL-basierte Funktionsset für weitgehend abgeschlossen und jagt nicht jedem neuen Modell-Release hinterher.' },
        ],
        content: [
          'Die [README von lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) enthält einen Abschnitt mit dem Titel **„Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only"**, in dem erklärt wird, dass das Projekt — vollständig auf der Stable-Diffusion-XL-Architektur aufgebaut — inzwischen als funktional abgeschlossen gilt und dass sich „zukünftige Updates ausschließlich auf die Behebung eventuell auftretender Fehler konzentrieren werden". Die README stellt ausdrücklich klar, dass es aktuell keine Pläne gibt, zu neueren Modellarchitekturen wie FLUX zu migrieren oder diese zu integrieren — lässt die Tür aber offen, falls sich die Open-Source-Community auf eine einzige dominante Nachfolgemethode einigt.',
          'Leser:innen, die die neuesten Modelle nutzen möchten, verweist die README selbst auf alternative Plattformen — konkret [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (ebenfalls vom selben Entwickler) sowie [ComfyUI](https://github.com/comfy-org/ComfyUI) oder dessen vereinfachte Oberfläche [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) — statt FLUX-Unterstützung innerhalb von Fooocus selbst zu versprechen.',
          'Das ist nicht dasselbe wie ein aufgegebenes Projekt. Das GitHub-Repository ist **nicht archiviert**, bleibt offen für Issues und Pull Requests (314 offene Issues zum Zeitpunkt dieses Tests), und GitHubs eigene Aktivitätsdaten zeigen Commits noch im Dezember 2025 — über ein Jahr nach dem letzten getaggten Release. Die README dankt Mitwirkendem **mashb1t** für „enorme Anstrengungen" bei der Reduzierung offener Fehler im Code, und mashb1t pflegt separat einen Fork unter [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus), der noch aktueller Commits erhielt (zuletzt im Oktober 2025) — auch dieser Fork hat allerdings seit August 2024 kein neues getaggtes Release veröffentlicht und folgt damit dem Tempo des Original-Projekts.',
          'Die praktische Konsequenz: Fooocus ist heute stabil und sicher zu installieren, aber wer speziell FLUX, SD 3.5 oder andere Modellarchitekturen nach 2024 in einer vereinfachten Oberfläche sucht, findet das in Fooocus nicht und sollte stattdessen ComfyUI, SwarmUI oder WebUI Forge prüfen.',
        ],
        note: 'Die Fakten zum Wartungsstatus wurden am 2026-09-06 direkt anhand des GitHub-Repositorys und der README von lllyasviel/Fooocus sowie des Forks mashb1t/Fooocus verifiziert — Push-Daten, Release-Daten und die Zahl offener Issues ändern sich mit der Zeit; vor jeder erneuten Bewertung [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) erneut prüfen.',
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Installation und erste Schritte',
        content: [
          'Fooocus bietet ein One-Click-Paket für Windows sowie manuelle Installationswege für Linux, Mac und Docker — für die Standard-Voreinstellung ist kein separater Modell-Download nötig, da Fooocus beim ersten Start automatisch seinen Standard-Checkpoint lädt.',
        ],
        numberedItems: [
          { title: 'Windows-Paket herunterladen (oder unter Linux/Mac das Repository klonen)', whyItMatters: 'Windows-Nutzer erhalten von der [GitHub-Releases-Seite](https://github.com/lllyasviel/Fooocus/releases) ein eigenständiges `.7z`-Paket mit eingebetteter Python-Umgebung — eine separate Python-Installation ist nicht nötig. Linux- und Mac-Nutzer klonen stattdessen das Repository und richten eine Conda- oder venv-Umgebung ein.' },
          { title: 'Paket entpacken und run.bat ausführen', whyItMatters: 'Das heruntergeladene Archiv entpacken und per Doppelklick `run.bat` starten — das startet die General-Voreinstellung. `run_anime.bat` und `run_realistic.bat` starten stattdessen die Anime- bzw. Realistic-Voreinstellung, jeweils mit einem anderen Standard-Checkpoint.' },
          { title: 'Fooocus das Standardmodell automatisch laden lassen', whyItMatters: 'Beim ersten Start lädt Fooocus automatisch den Checkpoint für die gewählte Voreinstellung — Juggernaut XL v8 (Rundiffusion) für General, RealisticStockPhoto v2.0 für Realistic oder AnimaPencilXL v5.0 für Anime — in den Ordner `Fooocus/models/checkpoints`.' },
          { title: 'Prompt eingeben und auf Generieren klicken', whyItMatters: 'Sampler, CFG-Skala oder Auflösung müssen nicht gewählt werden — Fooocus wendet automatisch sinnvolle Standardwerte an. Erweiterte Einstellungen sind über einen „Advanced"-Schalter verfügbar, falls später gewünscht.' },
          { title: 'Image Prompt, Inpaint oder Upscale/Vary nach Bedarf nutzen', whyItMatters: 'Fooocus bildet Midjourney-artige Workflows (Bild-Prompting, Inpainting, Upscaling, sanfte/starke Variation) auf eigene UI-Panels ab und nutzt dafür ein eigenes Inpainting-Modell sowie einen eigenen Image-Prompt-Algorithmus statt eines Standard-SDXL-ControlNet-Setups.' },
          { title: 'Bei Bedarf zu Community-Checkpoints wechseln', whyItMatters: 'Jeder SDXL-Checkpoint von Civitai oder Hugging Face kann in den Ordner `models/checkpoints` gelegt und in Fooocus ausgewählt werden — so lässt sich das Tool über die drei integrierten Voreinstellungen hinaus erweitern.' },
        ],
        note: 'Genaue Ordnerpfade, Launcher-Flags und Abhängigkeitsversionen ändern sich zwischen Releases — die aktuelle Setup-Anleitung auf der [GitHub-Seite von lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) statt einer allgemeinen Anleitung befolgen.',
      },
      promptExpansionStyles: {
        id: 'prompt-expansion-styles',
        title: 'Prompt-Erweiterung und integrierte Stile',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus betreibt ein offline laufendes, GPT-2-basiertes Prompt-Erweiterungsmodell, das als Stil „Fooocus V2" verfügbar ist und kurzen oder vagen Prompts vor der Generierung automatisch Detail hinzufügt.' },
        ],
        content: [
          '**Das Markenzeichen von Fooocus ist eine offline laufende, GPT-2-basierte Prompt-Verarbeitung, die in der Oberfläche als Stil „Fooocus V2" angeboten wird.** Die Projektdokumentation selbst vergleicht sie mit Midjourneys verborgener Prompt-Vorverarbeitung und LeonardoAIs „Prompt Magic" — die Idee: Ein kurzer Prompt wie „Haus im Garten" und ein 1.000 Wörter langer Prompt sollen beide zu ausgefeilten, stimmigen Ergebnissen führen, weil das Erweiterungsmodell fehlende stilistische und kompositorische Details automatisch ergänzt.',
          'Neben Fooocus V2 bietet die Oberfläche weitere integrierte Stil-Voreinstellungen, darunter „Fooocus Photograph", „Fooocus Negative" und einen Stil namens „cinematic-default"; weitere SDXL-Stile stammen von Community-Mitgliedern, die in der README des Projekts genannt werden (twri, 3Diva und Marc K3nt3L). Stile lassen sich kombinieren und im Advanced-Panel stapeln, für Leser:innen, die mehr Kontrolle wollen, als die drei Top-Level-Voreinstellungen bieten.',
          'Weitere technische Kniffe, die die README dokumentiert, sind ein nativer Refiner-Wechsel innerhalb eines einzigen k-Samplers (der den Momentum-Verlust vermeidet, der entsteht, wenn AUTOMATIC1111 oder ComfyUI zwischen zwei unabhängigen Samplern wechseln), eine auf SDXLs höchste Auflösungsstufe abgestimmte Negative-ADM-Guidance sowie ein eigenes Inpainting-Modell und ein eigener Image-Prompt-Algorithmus anstelle einer Standard-SDXL-ControlNet- oder IP-Adapter-Pipeline.',
        ],
      },
      licenseCommercialUse: {
        id: 'license-commercial-use',
        title: 'Fooocus-Lizenz und kommerzielle Nutzung',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Der Anwendungscode von Fooocus steht unter der GPL-3.0-Lizenz (GNU General Public License, Version 3), bestätigt im GitHub-Repository — die standardmäßig heruntergeladenen SDXL-Checkpoints sind jedoch separate Community-Modelle mit jeweils eigener, abweichender Lizenz.' },
          { type: 'plain-terms', text: 'Die Fooocus-Software selbst ist vollständig quelloffen und kostenlos nutz- und veränderbar; welche Lizenz für die erzeugten Bilder gilt, hängt vom verwendeten Checkpoint ab — dessen Lizenz, nicht die von Fooocus, regelt die kommerzielle Nutzung dieser konkreten Bilder.' },
        ],
        content: [
          'Fooocus steht unter **GPL-3.0** (GNU General Public License, Version 3), wie die Lizenzangabe im GitHub-Repository bestätigt. GPL-3.0 erlaubt kostenlose Nutzung, Veränderung und Weitergabe der Fooocus-Codebasis selbst, sofern jedes verbreitete abgeleitete Werk ebenfalls unter GPL-3.0 (Copyleft) steht — das betrifft den Anwendungscode, nicht die damit erzeugten Bilder.',
          'Die drei standardmäßig heruntergeladenen Checkpoints — Juggernaut XL v8 (Rundiffusion) für die General-Voreinstellung, RealisticStockPhoto v2.0 für Realistic und AnimaPencilXL v5.0 für Anime — sind community-trainierte Stable-Diffusion-XL-Finetunes, die unabhängig auf Plattformen wie Civitai und Hugging Face gehostet werden, und jeder trägt seine eigene, separate Lizenz (häufig eine Variante der CreativeML-OpenRAIL-M-Lizenz, die Bedingungen variieren jedoch je Checkpoint und können sich ändern). Wer erzeugte Bilder kommerziell nutzen möchte, sollte vorher die Lizenzseite des jeweiligen Checkpoints prüfen — die GPL-3.0-Lizenz von Fooocus überträgt sich nicht automatisch auf die Bedingungen eines Checkpoints und hebt diese nicht auf.',
          'Das Projekt selbst hat keine kommerzielle Dimension: Die README stellt klar, dass Fooocus „a 100% non-commercial offline open-source software" ist — ohne offizielle Website, ohne bezahltes Produkt und ohne Unternehmen dahinter. Zu beachten ist nur der im Abschnitt „Projektgeschichte und Entwickler" beschriebene Hinweis auf gefälschte Domains.',
        ],
        note: 'Dieser Abschnitt fasst öffentlich zugängliche Lizenzangaben Stand 2026-09-06 zusammen; er stellt keine Rechtsberatung dar. Vor jeder kommerziellen Nutzung die [Fooocus-LICENSE-Datei](https://github.com/lllyasviel/Fooocus/blob/main/LICENSE) und die Lizenzseite des konkreten Checkpoints lesen.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Hardware-Anforderungen',
        itemHeadings: true,
        columns: ['GPU', 'Min. VRAM', 'Min. RAM', 'Hinweis'],
        rows: [
          { 'GPU': 'Nvidia RTX 2000-4000', 'Min. VRAM': '4 GB VRAM', 'Min. RAM': '8 GB + Auslagerung', 'Hinweis': 'Schnellste Stufe; RTX-4000er am schnellsten' },
          { 'GPU': 'Nvidia GTX 900/1000', 'Min. VRAM': '8 GB VRAM (teils 6 GB berichtet)', 'Min. RAM': '8 GB + Auslagerung', 'Hinweis': 'Nur geringfügig schneller als CPU' },
          { 'GPU': 'Nvidia GTX unter 900', 'Min. VRAM': 'Nicht unterstützt', 'Min. RAM': '—', 'Hinweis': 'Stattdessen reinen CPU-Modus nutzen' },
          { 'GPU': 'AMD-GPU (Windows)', 'Min. VRAM': '8 GB VRAM (DirectML, Beta)', 'Min. RAM': '8 GB + Auslagerung', 'Hinweis': '~3x langsamer als Nvidia RTX 3000' },
          { 'GPU': 'AMD-GPU (Linux)', 'Min. VRAM': '8 GB VRAM (ROCm, Beta)', 'Min. RAM': '8 GB + Auslagerung', 'Hinweis': '~1,5x langsamer als Nvidia RTX 3000' },
          { 'GPU': 'Apple M1/M2 (inoffiziell)', 'Min. VRAM': 'Gemeinsamer Arbeitsspeicher', 'Min. RAM': 'Gemeinsam genutzt', 'Hinweis': '~9x langsamer als Nvidia RTX 3000' },
          { 'GPU': 'Nur CPU', 'Min. VRAM': 'Keine (0 GB)', 'Min. RAM': '32 GB', 'Hinweis': '~17x langsamer als Nvidia RTX 3000' },
        ],
        content: [
          '**Um Fooocus überhaupt zu betreiben, sind mindestens 4 GB Nvidia-VRAM plus 8 GB Arbeitsspeicher mit aktivierter virtueller Auslagerung nötig**, laut der Spezifikationstabelle in der eigenen README des Projekts. Damit gehört Fooocus zu den lokalen Stable-Diffusion-Oberflächen mit den niedrigsten Einstiegshürden, denn SDXL-Checkpoints verlangen in anderen Oberflächen ohne Fooocus\' eingebaute Speicheroptimierungen häufig 8–12 GB VRAM.',
          'Das eigene Testbeispiel des Projekts nennt ein Laptop mit Nvidia RTX 3060 (6 GB VRAM) und 16 GB Arbeitsspeicher, das Bilder mit rund 1,35 Sekunden pro Sampling-Schritt erzeugt — ein nützlicher Praxis-Referenzwert, wobei die tatsächliche Geschwindigkeit von Auflösung, Voreinstellung und aktueller GPU-Treiberversion abhängt.',
        ],
        note: 'Die Werte stammen direkt aus der Tabelle „Minimal Requirement" in der README von lllyasviel/Fooocus, Stand 2026-09-06 — AMD- und Mac-Unterstützung sind vom Projekt selbst ausdrücklich als Beta/inoffiziell gekennzeichnet, und der tatsächliche VRAM-Bedarf variiert mit Auflösung, Batch-Größe und installierten Treibern.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise: kostenlos, keine bezahlte Stufe',
        content: [
          '**Fooocus ist vollständig kostenlos, ohne bezahlte Stufe, Abonnement oder offizielles kommerzielles Produkt jeglicher Art.** Die Anwendung ist GPL-3.0-lizenzierte Open-Source-Software; die einzigen Kosten für Leser:innen sind die eigene Hardware und der Stromverbrauch, und auch die standardmäßig heruntergeladenen Checkpoints (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) sind kostenlos.',
          'Anders als manche andere lokale KI-Tools, die eine kostenlose selbstgehostete App mit einer optionalen bezahlten Cloud-Stufe kombinieren, bietet Fooocus so etwas nicht — die README stellt ausdrücklich klar, dass das Projekt keine offizielle Website und kein Unternehmen dahinter hat, das irgendetwas verkauft. Websites, die eine „Fooocus Pro"-Version verkaufen wollen, oder jede Domain außer dem [GitHub-Repository](https://github.com/lllyasviel/Fooocus) selbst, sollten als nicht mit dem echten Projekt verbunden betrachtet werden.',
        ],
        note: 'Direkt aus der eigenen README des Projekts bestätigt, Stand 2026-09-06 — bei einer Bewertung für eine kommerzielle Nutzung Jahre später erneut auf [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) prüfen.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Fooocus im Vergleich zu Alternativen',
        columns: ['Option', 'Am besten für', 'Selbst hostbar', 'Lizenz / Kosten', 'Wichtigster Kompromiss'],
        rows: [
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Am besten für': 'Wenigste Klicks bis zum ersten Bild; keine manuelle Parameteranpassung für Einsteiger:innen nötig',
            'Selbst hostbar': 'Ja — kostenlos, eigene GPU (min. 4 GB VRAM)',
            'Lizenz / Kosten': 'GPL-3.0 (App); Standard-Checkpoints haben jeweils eigene Lizenzen',
            'Wichtigster Kompromiss': 'Original-Repository seit August 2024 nur im Bugfix-Modus; nur SDXL, kein FLUX',
          },
          {
            'Option': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) / [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Am besten für': 'Tab-basierte technische Oberfläche mit dem größten Erweiterungs-Ökosystem aller lokalen SD-Oberflächen',
            'Selbst hostbar': 'Ja — kostenlos, eigene GPU',
            'Lizenz / Kosten': 'AGPL-3.0, kostenlos',
            'Wichtigster Kompromiss': 'Zeigt jeden Parameter direkt an — steilere Lernkurve als Fooocus',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Am besten für': 'Volle Pipeline-Kontrolle über einen visuellen Node-Graph; meist zuerst mit neuen Modell-Releases',
            'Selbst hostbar': 'Ja — kostenlos, eigene GPU',
            'Lizenz / Kosten': 'GPL-3.0, kostenlos (separate bezahlte ComfyUI-Cloud/API-Stufe existiert)',
            'Wichtigster Kompromiss': 'Node-Graph-Oberfläche bedeutet echten Einrichtungsaufwand für absolute Einsteiger:innen',
          },
          {
            'Option': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Am besten für': 'Ausgereifte, professionelle Oberfläche mit einheitlicher Leinwand und teamorientierten Workflows',
            'Selbst hostbar': 'Ja — kostenlos, eigene GPU',
            'Lizenz / Kosten': 'Apache 2.0, kostenlos (bezahlte Invoke-Cloud-Stufe nach Adobe-Übernahme 2025 eingestellt)',
            'Wichtigster Kompromiss': 'Kleineres Erweiterungs-Ökosystem als AUTOMATIC1111 oder ComfyUI',
          },
          {
            'Option': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) (früher StableSwarmUI von Stability AI)',
            'Am besten für': 'Vereinfachte, tab-basierte Oberfläche auf Basis des ComfyUI-Backends',
            'Selbst hostbar': 'Ja — kostenlos, eigene GPU',
            'Lizenz / Kosten': 'MIT-Lizenz, kostenlos',
            'Wichtigster Kompromiss': 'Kleinere Community als ComfyUI oder AUTOMATIC1111; weniger einsteigerorientiert als Fooocus',
          },
        ],
        note: 'Dies ist eine Einordnung, keine Benchmark-Rangliste. Lizenzen, Sterne-Zahlen und Wartungsstatus wurden am 2026-09-06 direkt anhand des jeweiligen GitHub-Repositorys verifiziert und können sich ändern — siehe [Stable Diffusion Test](/power-local-llm/stable-diffusion-review) für die zugrunde liegende Modellfamilie, auf der dieser Artikel und jede der oben genannten Oberflächen aufbauen.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich Fooocus eignet',
        items: [
          '**Absolute Einsteiger:innen, die noch nie lokale KI-Bildgenerierung genutzt haben.** Das Design aus Voreinstellungen und Prompt-Erweiterung nimmt genau den steilsten Teil der Stable-Diffusion-Lernkurve — Sampler, CFG-Skala oder Auflösung müssen für ein brauchbares Ergebnis nicht entschieden werden.',
          '**Leser:innen, die ein Midjourney-artiges Erlebnis ohne Abo oder Cloud-Abhängigkeit wollen.** Der Funktionsumfang von Fooocus spiegelt bewusst Midjourneys Befehlsliste (Stile, Varianten, Upscaling) wider und läuft dabei vollständig offline auf lokaler Hardware.',
          '**Besitzer:innen einer GPU mit wenig VRAM.** Ein Minimum von 4 GB VRAM (ab Nvidia RTX 2000er-Serie) liegt unter dem, was AUTOMATIC1111 oder ComfyUI für einen komfortablen SDXL-Einsatz typischerweise empfehlen — ein vertretbarer Einstiegspunkt auf älteren oder günstigeren GPUs.',
          '**Leser:innen, die gut mit SDXL-basierten Modellen auskommen.** Wenn die aktuelle Voreinstellungs-Auswahl (Allzweck, Realistic, Anime) den eigenen Bedarf bereits abdeckt, überwiegen Stabilität und Einfachheit von Fooocus den Verzicht auf neuere Architekturen.',
          '**Leser:innen, denen Civitai-Prompt-Gewichtung ohne Umwege wichtig ist.** Fooocus nutzt AUTOMATIC1111s Syntax zur Prompt-Neugewichtung, sodass direkt von Civitai kopierte Prompts wie erwartet funktionieren, ohne umformatiert werden zu müssen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich Fooocus nicht eignet',
        items: [
          '**Leser:innen, die FLUX, SD 3.5 oder eine andere Modellarchitektur nach 2024 wollen.** Die eigene README von Fooocus erklärt, dass aktuell keine Pläne bestehen, neuere Architekturen zu unterstützen — wer die neuesten Modelle nutzen möchte, sollte stattdessen [ComfyUI](https://github.com/comfy-org/ComfyUI), [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) oder [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) verwenden.',
          '**Power-User, die jeden Schritt der Generierungs-Pipeline feingranular steuern wollen.** Fooocus\' gesamte Design-Philosophie besteht darin, Parameter zu verbergen; wer jede Stufe einer Diffusions-Pipeline einsehen oder umverdrahten möchte, sollte stattdessen ComfyUIs Node-Graph nutzen.',
          '**Leser:innen, die sich auf schnelle Bugfixes oder neue Funktionen des Original-Projekts verlassen.** Das Original-Repository befindet sich ausdrücklich im reinen Bugfix-Modus ohne festgelegten Fahrplan — wer aktive Weiterentwicklung braucht, sollte den community-gepflegten [mashb1t/Fooocus-Fork](https://github.com/mashb1t/Fooocus) oder eine ganz andere Oberfläche in Betracht ziehen.',
          '**Teams, die produktionsreife Stapelverarbeitung oder einen API-first-Workflow brauchen.** Fooocus ist um eine Einzelnutzer-Gradio-Oberfläche herum gebaut, nicht um einen API-Server — wer eine automatisierte Pipeline aufbaut, sollte ComfyUIs API-Modus oder InvokeAI in Betracht ziehen.',
          '**Leser:innen, die umfangreiche ControlNet-artige Pose-/Tiefen-Konditionierung brauchen.** Fooocus nutzt sein eigenes, vereinfachtes „Image Prompt"-System, statt die volle ControlNet-Modellauswahl offenzulegen; wer präzise Pose- oder Tiefenkontrolle braucht, sollte AUTOMATIC1111, WebUI Forge oder ComfyUI mit dedizierten ControlNet-Modellen nutzen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Fooocus kostenlos?',
            a: 'Ja. Fooocus ist kostenlose, quelloffene Software unter der GPL-3.0-Lizenz, ohne bezahlte Stufe, Abonnement oder offizielles kommerzielles Produkt. Die standardmäßig heruntergeladenen SDXL-Checkpoints (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) sind ebenfalls kostenlos, tragen aber jeweils eine eigene, separate Lizenz für die kommerzielle Nutzung erzeugter Bilder.',
          },
          {
            q: 'Wird Fooocus noch aktualisiert?',
            a: 'Es befindet sich in einem Zustand reduzierter Aktivität, ist aber nicht aufgegeben. Die README des Projekts erklärt, es befinde sich im Zustand „Limited Long-Term Support (LTS) mit ausschließlich Bugfixes": Das letzte getaggte Release war v2.5.5 am 12. August 2024, und es gibt keine Pläne, neuere Modellarchitekturen wie FLUX zu unterstützen. Das GitHub-Repository ist nicht archiviert und erhielt noch im Dezember 2025 Commits; Mitwirkender mashb1t pflegt einen aktiv aktualisierten Fork unter github.com/mashb1t/Fooocus.',
          },
          {
            q: 'Wer hat Fooocus entwickelt?',
            a: 'Fooocus wurde von Lvmin Zhang entwickelt, der unter dem GitHub-Namen lllyasviel veröffentlicht. Zhang ist Informatik-Doktorand an der Stanford University und ebenfalls bekannt als Schöpfer von ControlNet, dessen Paper den Marr Prize (wichtigster Paper-Preis der ICCV 2023) gewann, sowie von WebUI Forge, PaintsUndo und IC-Light.',
          },
          {
            q: 'Wie viel VRAM braucht Fooocus?',
            a: 'Das Minimum sind 4 GB VRAM auf einer Nvidia-GPU der RTX-2000er-, 3000er- oder 4000er-Serie plus 8 GB Arbeitsspeicher mit aktivierter virtueller Auslagerung. Ältere Nvidia-GTX-900er/1000er-Karten benötigen etwa 8 GB VRAM, AMD-GPUs etwa 8 GB VRAM über DirectML (Windows, Beta) oder ROCm (Linux, Beta), und reiner CPU-Betrieb ist mit 32 GB Arbeitsspeicher möglich, läuft aber rund 17-mal langsamer als eine Nvidia-RTX-3000er-GPU.',
          },
          {
            q: 'Was ist die GPT-2-basierte Prompt-Erweiterung in Fooocus?',
            a: 'Es handelt sich um eine offline laufende Prompt-Verarbeitung, in der Oberfläche als Stil „Fooocus V2" angeboten, die kurze oder vage Prompts vor der Generierung automatisch um stilistische und kompositorische Details erweitert — konzeptionell ähnlich Midjourneys verborgener Prompt-Vorverarbeitung oder LeonardoAIs „Prompt Magic". Sie läuft lokal und benötigt keine Internetverbindung.',
          },
          {
            q: 'Ist Fooocus besser als AUTOMATIC1111 oder ComfyUI?',
            a: 'Das hängt vom Ziel ab. Fooocus ist einfacher im Einstieg, da es technische Parameter hinter Voreinstellungen verbirgt — auf Kosten feingranularer Kontrolle. AUTOMATIC1111s WebUI (oder dessen Fork WebUI Forge) zeigt jeden Parameter direkt an und hat das größte Erweiterungs-Ökosystem aller lokalen Stable-Diffusion-Oberflächen. ComfyUI bietet volle Pipeline-Kontrolle über einen Node-Graph und unterstützt neue Modell-Releases meist als Erstes. Wer aus den Voreinstellungen von Fooocus herauswächst, wechselt in der Regel zu einer dieser beiden.',
          },
          {
            q: 'Unterstützt Fooocus FLUX oder Stable Diffusion 3.5?',
            a: 'Nein. Fooocus basiert vollständig auf der Stable-Diffusion-XL-Architektur, und die eigene README erklärt, dass aktuell keine Pläne bestehen, Unterstützung für neuere Architekturen wie FLUX hinzuzufügen. Wer FLUX oder SD 3.5 in einem ähnlich lokalen Setup nutzen möchte, sollte stattdessen ComfyUI, SwarmUI oder WebUI Forge verwenden.',
          },
          {
            q: 'Wo lade ich Fooocus herunter?',
            a: 'Die einzige offizielle Quelle ist das [GitHub-Repository lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus), wo unter Releases ein One-Click-Paket für Windows veröffentlicht wird. Die eigene README des Projekts warnt ausdrücklich, dass Domains wie fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro und fooocus.one gefälschte Websites ohne Bezug zum echten Projekt sind.',
          },
          {
            q: 'Welches Standardmodell verwendet Fooocus?',
            a: 'Fooocus lädt je nach gestarteter Voreinstellung automatisch einen anderen Standard-SDXL-Checkpoint: Juggernaut XL v8 (Rundiffusion) für die General-Voreinstellung, RealisticStockPhoto v2.0 für Realistic und AnimaPencilXL v5.0 für Anime. Alle drei sind community-trainierte Checkpoints, die unabhängig von Fooocus selbst gehostet werden.',
          },
          {
            q: 'Darf ich mit Fooocus erzeugte Bilder kommerziell nutzen?',
            a: 'Die eigene GPL-3.0-Lizenz von Fooocus deckt den Anwendungscode ab, nicht die erzeugten Bilder. Die kommerzielle Nutzung eines erzeugten Bildes richtet sich nach der Lizenz des konkret verwendeten Checkpoints — die Standard-Checkpoints (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) haben jeweils eine eigene, separate Lizenz, meist eine Variante der CreativeML-OpenRAIL-M-Lizenz, veröffentlicht auf ihrer Civitai- oder Hugging-Face-Seite. Diese Seite vor kommerzieller Nutzung prüfen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Fooocus verdient seinen Ruf als einfachster Weg, Stable Diffusion lokal zu betreiben — das Design aus Voreinstellungen und Prompt-Erweiterung nimmt tatsächlich genau den steilsten Teil der Lernkurve, der AUTOMATIC1111 und ComfyUI für Erstnutzer:innen einschüchternd macht, und tut dies, während es vollständig offline auf so bescheidener Hardware wie einer GPU mit 4 GB VRAM läuft. Der ehrliche Wermutstropfen ist die Pflege: Die eigene README des Original-Projekts stuft es als reinen Bugfix-Modus ein, ohne getaggtes Release seit August 2024 und ohne Pläne, FLUX oder andere Architekturen nach 2024 zu unterstützen — auch wenn das Repository aktiv und nicht archiviert bleibt. Leser:innen, die den einfachstmöglichen Einstieg in lokale, SDXL-basierte Bildgenerierung suchen und weder die neuesten Modellarchitekturen noch feingranulare Pipeline-Kontrolle brauchen, finden in Fooocus genau das, was es verspricht. Wer entweder mehr Kontrolle (ComfyUI, AUTOMATIC1111/WebUI Forge) oder neuere Modelle in einem ähnlich lokalen Setup (ComfyUI, SwarmUI) sucht, sollte stattdessen dorthin blicken — idealerweise nach einem direkten Blick auf [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) für den aktuellen Projektstatus.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[lllyasviel/Fooocus — GitHub-Repository und README](https://github.com/lllyasviel/Fooocus) — Hauptquelle für Funktionen, Installation, Hardware-Mindestanforderungstabelle, Lizenz und die Aussage zum Wartungsstatus „Limited Long-Term Support".',
          '[lllyasviel/Fooocus — Releases](https://github.com/lllyasviel/Fooocus/releases) — Release-Historie und Daten, einschließlich des jüngsten getaggten Releases v2.5.5 (12. August 2024).',
          '[mashb1t/Fooocus — GitHub-Repository](https://github.com/mashb1t/Fooocus) — community-gepflegter Fork mit aktuellerer Commit-Aktivität als das Original-Repository.',
          '[lllyasviel/ControlNet — GitHub-Repository](https://github.com/lllyasviel/ControlNet) — früheres Projekt von Entwickler Lvmin Zhang, als Hintergrund zum Entwickler herangezogen.',
          '[Lvmin Zhang — persönliche akademische Seite](https://lllyasviel.github.io/lvmin_zhang/) — biografischer und wissenschaftlicher Hintergrund des Entwicklers.',
          '[Scientific American — Porträt von Lvmin Zhang](https://www.scientificamerican.com/article/lvmin-zhang/) — unabhängiges Porträt über Zhangs KI-Tool-Arbeit, einschließlich Fooocus und ControlNet.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Stable Diffusion Test: Kostenlose lokale Text-zu-Bild-Modelle](/de/power-local-llm/stable-diffusion-review) — die zugrunde liegende offene Modellfamilie, auf der Fooocus läuft, samt Lizenzbedingungen und Versionshistorie.',
          '[Lokale KI-Bildgenerierung vs. Cloud: FLUX, SD 3.5, Qwen-Image vs. Adobe Firefly & getimg.ai](/de/power-local-llm/local-ai-image-generation-vs-cloud) — ein tieferer Vergleich lokaler Bildmodell-Familien für Leser:innen, die über Fooocus\' reinen SDXL-Fokus hinauswachsen.',
          '[Verzeichnis lokaler LLM-Software 2026](/de/power-local-llm/local-llm-software-directory) — umfassendes App- und Tool-Verzeichnis für alle Plattformen.',
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
    heroImage: '/images/fooocus-review-hero-es.webp',
    title: 'Fooocus: Análisis (2026) de la interfaz local de Stable Diffusion más sencilla',
    seoTitle: 'Fooocus: Análisis 2026 de la UI local de Stable Diffusion más fácil',
    intro:
      'Fooocus es una interfaz de generación de imágenes gratuita, de código abierto y totalmente offline para Stable Diffusion XL, creada por Lvmin Zhang (usuario de GitHub lllyasviel, también conocido por [ControlNet](https://github.com/lllyasviel/ControlNet)). Oculta deliberadamente casi todos los controles técnicos — samplers, escala CFG, cuadrículas de resolución — detrás de ajustes preestablecidos y un motor automático de expansión de prompts, de modo que se puede pasar de un cuadro de texto vacío a una imagen terminada en apenas tres clics. Este análisis cubre lo que Fooocus hace realmente por dentro, su licencia GPL-3.0, los requisitos reales de hardware y, sobre todo, su estado de mantenimiento actual, ya que el repositorio original ha declarado públicamente que ahora está en modo de solo corrección de errores.',
    metaDescription:
      'Fooocus, análisis 2026: la UI local de Stable Diffusion más fácil para principiantes, del creador de ControlNet, lllyasviel — requisitos reales de VRAM, licencia GPL-3.0 y estado de mantenimiento honesto (LTS/solo bugs desde 2024).',
    twitterDescription:
      'Fooocus, análisis 2026: la UI local de Stable Diffusion con menos clics, del creador de ControlNet — necesidades de VRAM, expansión de prompts con GPT-2, licencia GPL-3.0 y la verdad sobre su mantenimiento.',
    audience:
      'Lectores que quieren la forma más sencilla de ejecutar Stable Diffusion en local sin aprender AUTOMATIC1111 ni ComfyUI — cubre instalación, requisitos de hardware y si el proyecto sigue manteniéndose activamente.',
    readTime: '10 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'Fooocus análisis',
    targetKeywords: [
      'fooocus análisis',
      'fooocus vs comfyui',
      'fooocus vs automatic1111',
      'ui de stable diffusion más fácil',
      'requisitos vram fooocus',
      'estado de mantenimiento de fooocus',
      'descargar fooocus',
      'licencia de fooocus',
    ],
    current_models_mentioned: ['Stable Diffusion XL', 'Juggernaut XL v8 (Rundiffusion)', 'realisticStockPhoto v2.0', 'animaPencilXL v5.0', 'FLUX.1'],
    current_hardware_mentioned: ['4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '8 GB de RAM', '32 GB de RAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Fooocus es una interfaz local gratuita y de código abierto para Stable Diffusion XL que oculta casi todos los ajustes técnicos detrás de presets, lo que la convierte en la UI de generación de imágenes local más fácil para empezar — pero el proyecto original está ahora en estado de "Limited Long-Term Support (LTS) solo con corrección de errores", sin ningún lanzamiento etiquetado desde agosto de 2024.** Funciona offline con tan solo 4 GB de VRAM (Nvidia serie RTX 2000/3000/4000) y 8 GB de RAM del sistema, usa un motor de expansión de prompts basado en GPT-2 que añade estilo y detalle automáticamente, y se distribuye bajo licencia GPL-3.0. No admite arquitecturas más nuevas (no hay FLUX), así que quien quiera los modelos más recientes debería mirar también [ComfyUI](https://github.com/comfy-org/ComfyUI) o [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge), ambos del mismo entorno de desarrollo. Conviene verificar la actividad actual del repositorio en [GitHub](https://github.com/lllyasviel/Fooocus) antes de asumir que el desarrollo sigue activo.',
    quickAnswerTop: {
      es: {
        question: '¿Fooocus sigue teniendo mantenimiento y cuánta VRAM necesita?',
        answer:
          'Fooocus no está abandonado, pero su propio README indica que el proyecto entró en modo "Limited Long-Term Support (LTS) solo con corrección de errores" — el último lanzamiento etiquetado fue v2.5.5 el 12 de agosto de 2024, y no hay planes de admitir arquitecturas más nuevas como FLUX. El repositorio de GitHub no está archivado y sigue recibiendo commits (el más reciente en diciembre de 2025), y el colaborador mashb1t mantiene un fork actualizado activamente en github.com/mashb1t/Fooocus. Fooocus necesita como mínimo 4 GB de VRAM en una GPU Nvidia de la serie RTX 2000/3000/4000 y 8 GB de RAM del sistema (con memoria de intercambio virtual activada) para funcionar.',
        bullets: [
          'Creador: Lvmin Zhang (lllyasviel), doctorando en informática en Stanford, también conocido por crear ControlNet, cuyo artículo ganó el Marr Prize (el máximo premio a mejor artículo de ICCV 2023).',
          'Estado: el repositorio original está en modo solo corrección de errores desde 2024; no se planea soporte para FLUX ni modelos más nuevos. No está archivado — sigue recibiendo commits.',
          'Hardware mínimo: 4 GB de VRAM (Nvidia serie RTX 2000/3000/4000) y 8 GB de RAM con memoria de intercambio activada; las tarjetas GTX 900/1000 más antiguas necesitan 8 GB de VRAM.',
          'Licencia: GPL-3.0 para el código de la aplicación; los checkpoints SDXL por defecto (Juggernaut XL, etc.) tienen cada uno su propia licencia independiente.',
          'Función distintiva: un motor de expansión de prompts basado en GPT-2 que funciona offline (estilo "Fooocus V2") que añade automáticamente el detalle que falta, similar al preprocesamiento oculto de Midjourney.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Fooocus', anchor: 'what-is-fooocus' },
      { label: 'Historia del proyecto y su creador', anchor: 'project-history' },
      { label: 'Estado de mantenimiento actual (2026)', anchor: 'maintenance-status' },
      { label: 'Cómo instalar y ejecutar Fooocus', anchor: 'how-to-install' },
      { label: 'Expansión de prompts y estilos integrados', anchor: 'prompt-expansion-styles' },
      { label: 'Licencia y uso comercial', anchor: 'license-commercial-use' },
      { label: 'Requisitos de hardware', anchor: 'hardware-requirements' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Fooocus frente a otras alternativas', anchor: 'vs-alternatives' },
      { label: 'A quién le conviene Fooocus', anchor: 'who-should-use' },
      { label: 'A quién no le conviene Fooocus', anchor: 'who-should-not-use' },
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
          'Fooocus es una interfaz de Stable Diffusion XL gratuita, de código abierto y totalmente offline, diseñada para minimizar el ajuste manual — su desarrollador afirma que se llega a la primera imagen en menos de tres clics.',
          'Fue creada por Lvmin Zhang, cuyo usuario de GitHub es lllyasviel, doctorando en informática en Stanford, también conocido por crear [ControlNet](https://github.com/lllyasviel/ControlNet), cuyo artículo ganó el Marr Prize (máximo premio a mejor artículo de ICCV 2023).',
          'El propio README del proyecto declara que ahora está en estado "Limited Long-Term Support (LTS) solo con corrección de errores": el último lanzamiento etiquetado fue v2.5.5 el 12 de agosto de 2024, y actualmente no hay planes de admitir arquitecturas de modelo más nuevas como FLUX.',
          'El repositorio de GitHub no está archivado y ha seguido recibiendo commits (el más reciente en diciembre de 2025); el colaborador mashb1t mantiene un fork actualizado activamente en [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus).',
          'El hardware mínimo es 4 GB de VRAM en una GPU Nvidia serie RTX 2000/3000/4000 más 8 GB de RAM con memoria de intercambio virtual activada; las tarjetas GTX 900/1000 más antiguas necesitan alrededor de 8 GB de VRAM.',
          'Fooocus está bajo licencia GPL-3.0, es 100% gratuito sin ningún nivel de pago — pero los checkpoints SDXL por defecto que descarga (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) tienen cada uno su propia licencia independiente en Civitai/Hugging Face.',
        ],
      },
      whatIsFooocus: {
        id: 'what-is-fooocus',
        title: 'Qué es Fooocus',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus es una interfaz gratuita, offline y basada en Gradio para Stable Diffusion XL que oculta los parámetros técnicos tras presets y una expansión automática de prompts, buscando una experiencia de "solo escribir el prompt".' },
          { type: 'plain-terms', text: 'Si AUTOMATIC1111 y ComfyUI son un panel de control técnico y un diagrama de cableado, Fooocus se parece más a un único botón de "generar": toma casi todas las decisiones por ti y solo muestra opciones avanzadas si las buscas activamente.' },
        ],
        content: [
          '**Fooocus es una aplicación de generación de imágenes local y offline, construida enteramente sobre la arquitectura Stable Diffusion XL (SDXL) y distribuida como software libre y de código abierto bajo licencia GPL-3.0.** A diferencia de la interfaz técnica basada en pestañas de AUTOMATIC1111 o el editor de nodos de ComfyUI, Fooocus elimina deliberadamente la mayoría de los controles manuales — sin selector visible de sampler, sin control deslizante de escala CFG por defecto, sin cuadrícula de resolución — y los sustituye por un pequeño conjunto de presets (General, Realistic, Anime) más un panel "Advanced" que se puede ignorar por completo.',
          'El proyecto funciona sobre [Gradio](https://www.gradio.app/), el mismo framework de interfaz web en Python que usan muchas otras herramientas de IA local, y su interfaz toma prestada de forma intencionada la lista de funciones de Midjourney y LeonardoAI, reasignando cada uno de sus comandos (`--style`, `--ar`, variaciones V1–V4, escalado) a su equivalente en Fooocus, para que quienes vienen de esas herramientas en la nube tengan un modelo mental familiar.',
          'El objetivo central de diseño, expresado directamente en la propia documentación del proyecto, es que entre descargar Fooocus y generar la primera imagen debe haber menos de tres clics de ratón. Esa única restricción de diseño — más que cualquier innovación de modelo concreta — es lo que distingue a Fooocus de otras interfaces de Stable Diffusion: es una capa de UI/UX, no un modelo nuevo.',
        ],
      },
      projectHistory: {
        id: 'project-history',
        title: 'Historia del proyecto y su creador',
        content: [
          '**Fooocus fue creado por Lvmin Zhang, que publica bajo el usuario de GitHub lllyasviel; su repositorio se creó en GitHub el 9 de agosto de 2023.** Zhang es doctorando en informática en la Universidad de Stanford, investigando modelado generativo controlable y gráficos por computadora.',
          'Zhang es conocido de forma independiente en la comunidad de Stable Diffusion por crear [ControlNet](https://github.com/lllyasviel/ControlNet), la arquitectura de red neuronal que añadió condicionamiento espacial preciso (pose, profundidad, mapas de bordes) a los modelos de difusión de texto a imagen. El artículo de ControlNet ganó el Marr Prize, el premio al mejor artículo de la International Conference on Computer Vision (ICCV) 2023, una de las conferencias más competitivas en visión por computadora. Zhang también ha publicado otras herramientas de IA local, incluyendo [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (un fork de AUTOMATIC1111 centrado en el rendimiento), PaintsUndo e IC-Light.',
          'Fooocus se construyó, según palabras del propio proyecto, a partir de una mezcla de las bases de código de [AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) y [ComfyUI](https://github.com/comfy-org/ComfyUI) — reutilizando sus técnicas de inferencia probadas mientras presenta una interfaz radicalmente simplificada. En septiembre de 2026, el proyecto acumula más de 52.000 estrellas en GitHub y más de 8.600 forks, situándose entre las herramientas locales de generación de imágenes con más valoraciones en GitHub.',
          '**Un aviso de seguridad directamente del propio proyecto: Fooocus no tiene sitio web oficial.** El README advierte explícitamente que dominios como fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro y fooocus.one son falsos y no tienen ninguna relación con el proyecto real — la única fuente oficial es el [repositorio de GitHub](https://github.com/lllyasviel/Fooocus).',
        ],
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: '¿Sigue manteniéndose Fooocus en 2026?',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus no está abandonado, pero su propio README indica que el proyecto original está en estado "Limited Long-Term Support (LTS) solo con corrección de errores", sin lanzamientos etiquetados desde agosto de 2024 y sin planes de admitir arquitecturas más nuevas como FLUX.' },
          { type: 'plain-terms', text: 'Puede pensarse más como una herramienta terminada y estable que como una en crecimiento — el desarrollador considera que el conjunto de funciones basado en SDXL está esencialmente completo y no persigue cada nuevo lanzamiento de modelo.' },
        ],
        content: [
          'El [README de lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) incluye una sección titulada **"Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only"**, que indica que el proyecto — construido enteramente sobre la arquitectura Stable Diffusion XL — se considera ahora funcionalmente completo, y que "las futuras actualizaciones se centrarán exclusivamente en solucionar los errores que puedan surgir". El README aclara explícitamente que no hay planes actuales de migrar o incorporar arquitecturas de modelo más nuevas como FLUX, aunque deja abierta la puerta si la comunidad de código abierto converge en un único método sucesor dominante.',
          'Para quienes quieran los modelos más recientes, el propio README recomienda plataformas alternativas — en concreto [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (también del mismo creador) y [ComfyUI](https://github.com/comfy-org/ComfyUI) o su interfaz simplificada [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) — en lugar de prometer soporte para FLUX dentro del propio Fooocus.',
          'Esto no es lo mismo que un proyecto abandonado. El repositorio de GitHub **no está archivado**, permanece abierto a issues y pull requests (314 issues abiertos en el momento de este análisis), y los propios datos de actividad de GitHub muestran commits tan recientes como diciembre de 2025 — más de un año después del último lanzamiento etiquetado. El README agradece al colaborador **mashb1t** sus "enormes esfuerzos" por reducir los errores pendientes del código, y mashb1t mantiene por separado un fork en [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus) que ha seguido recibiendo commits aún más recientes (el último en octubre de 2025) — aunque ese fork tampoco ha lanzado una nueva versión etiquetada desde agosto de 2024, reflejando el mismo ritmo que el proyecto original.',
          'La conclusión práctica: Fooocus es estable y seguro de instalar hoy, pero quien busque específicamente FLUX, SD 3.5 u otras arquitecturas posteriores a 2024 dentro de una interfaz simplificada no lo encontrará en Fooocus y debería mirar en su lugar ComfyUI, SwarmUI o WebUI Forge.',
        ],
        note: 'Los datos sobre el estado de mantenimiento se verificaron directamente en el repositorio de GitHub y el README de lllyasviel/Fooocus, y en el fork mashb1t/Fooocus, el 2026-09-06 — las fechas de push, las fechas de lanzamiento y el número de issues abiertos cambian con el tiempo; conviene comprobar de nuevo [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) antes de dar por válido este estado.',
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Cómo instalar y ejecutar Fooocus',
        content: [
          'Fooocus ofrece un paquete de un solo clic para Windows, además de rutas de instalación manual para Linux, Mac y Docker — no hace falta un paso de descarga de modelo aparte para el preset por defecto, porque Fooocus obtiene su propio checkpoint por defecto automáticamente en el primer arranque.',
        ],
        numberedItems: [
          { title: 'Descarga el paquete de Windows (o clona el repositorio en Linux/Mac)', whyItMatters: 'Los usuarios de Windows obtienen un paquete `.7z` autocontenido desde la [página de Releases en GitHub](https://github.com/lllyasviel/Fooocus/releases) con un entorno de Python incorporado — no hace falta instalar Python aparte. Los usuarios de Linux y Mac clonan el repositorio y configuran un entorno Conda o venv en su lugar.' },
          { title: 'Descomprime el paquete y ejecuta run.bat', whyItMatters: 'Descomprime el archivo descargado y haz doble clic en `run.bat` — esto inicia el preset General. `run_anime.bat` y `run_realistic.bat` inician en su lugar los presets Anime y Realistic, cada uno con un checkpoint por defecto distinto.' },
          { title: 'Deja que Fooocus descargue automáticamente su modelo por defecto', whyItMatters: 'En el primer arranque, Fooocus descarga automáticamente el checkpoint del preset que hayas ejecutado — Juggernaut XL v8 (Rundiffusion) para General, RealisticStockPhoto v2.0 para Realistic o AnimaPencilXL v5.0 para Anime — en la carpeta `Fooocus/models/checkpoints`.' },
          { title: 'Escribe un prompt y pulsa Generar', whyItMatters: 'No hace falta elegir sampler, escala CFG ni resolución — Fooocus aplica valores por defecto razonables automáticamente. Los controles avanzados están disponibles tras un interruptor "Advanced" para quien quiera usarlos más adelante.' },
          { title: 'Usa Image Prompt, Inpaint o Upscale/Vary según lo necesites', whyItMatters: 'Fooocus traduce flujos de trabajo al estilo Midjourney (prompt de imagen, inpainting, escalado, variación sutil/fuerte) a sus propios paneles de interfaz, usando su propio modelo de inpainting y su propio algoritmo de prompt de imagen en lugar de una configuración estándar de ControlNet para SDXL.' },
          { title: 'Cambia a checkpoints de la comunidad cuando te sientas cómodo', whyItMatters: 'Cualquier checkpoint SDXL de Civitai o Hugging Face puede colocarse en la carpeta `models/checkpoints` y seleccionarse dentro de Fooocus, ampliando la herramienta más allá de los tres presets incluidos.' },
        ],
        note: 'Las rutas exactas de carpetas, los parámetros del lanzador y las versiones de dependencias cambian entre lanzamientos — sigue las instrucciones de configuración actuales en la [página de GitHub de lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) en lugar de una guía genérica.',
      },
      promptExpansionStyles: {
        id: 'prompt-expansion-styles',
        title: 'Expansión de prompts y estilos integrados',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus ejecuta un modelo offline de expansión de prompts basado en GPT-2, disponible como estilo "Fooocus V2", que añade detalle automáticamente a prompts cortos o vagos antes de generar la imagen.' },
        ],
        content: [
          '**La función distintiva de Fooocus es un motor de procesamiento de prompts basado en GPT-2 que funciona offline, presentado en la interfaz como el estilo "Fooocus V2".** La propia documentación del proyecto lo compara con el preprocesamiento oculto de prompts de Midjourney y con "Prompt Magic" de LeonardoAI — la idea es que un prompt corto como "casa en un jardín" y un prompt de 1.000 palabras produzcan ambos resultados pulidos y coherentes, porque el modelo de expansión añade automáticamente el detalle estilístico y compositivo que falta.',
          'Además de Fooocus V2, la interfaz incluye otros presets de estilo integrados, como "Fooocus Photograph", "Fooocus Negative" y un estilo "cinematic-default", con estilos SDXL adicionales aportados por miembros de la comunidad reconocidos en el README del proyecto (twri, 3Diva y Marc K3nt3L). Los estilos pueden combinarse, y varios se pueden apilar en el panel Advanced para quien quiera más control del que ofrecen los tres presets principales.',
          'Otras técnicas internas que documenta el README incluyen un intercambio nativo de refiner dentro de un único k-sampler (evitando la pérdida de momentum que ocurre cuando AUTOMATIC1111 o ComfyUI intercambian entre dos samplers independientes), una guía ADM negativa ajustada al nivel de resolución más alto de SDXL, y un modelo de inpainting propio junto con un algoritmo de prompt de imagen propio, en lugar de una pipeline estándar de ControlNet o IP-Adapter para SDXL.',
        ],
      },
      licenseCommercialUse: {
        id: 'license-commercial-use',
        title: 'Licencia de Fooocus y uso comercial',
        snippetBlocks: [
          { type: 'one-sentence', text: 'El código de la aplicación Fooocus está licenciado bajo GPL-3.0 (GNU General Public License versión 3), confirmado en su repositorio de GitHub — pero los checkpoints SDXL por defecto que descarga son modelos de la comunidad independientes, cada uno con su propia licencia distinta.' },
          { type: 'plain-terms', text: 'El propio software Fooocus es totalmente de código abierto y libre de usar o modificar; las imágenes que genera dependen del checkpoint que las creó, y es la licencia de ese checkpoint — no la de Fooocus — la que rige el uso comercial de esas imágenes concretas.' },
        ],
        content: [
          'Fooocus está licenciado bajo **GPL-3.0** (GNU General Public License, versión 3), tal como confirman los metadatos de licencia de su repositorio en GitHub. GPL-3.0 permite usar, modificar y redistribuir libremente el código base de Fooocus, siempre que cualquier trabajo derivado que se distribuya también se publique bajo GPL-3.0 (copyleft) — esto aplica al código de la aplicación, no a las imágenes que generes con ella.',
          'Los tres checkpoints por defecto que Fooocus descarga automáticamente — Juggernaut XL v8 (Rundiffusion) para el preset General, RealisticStockPhoto v2.0 para Realistic y AnimaPencilXL v5.0 para Anime — son ajustes finos de Stable Diffusion XL entrenados por la comunidad, alojados de forma independiente en plataformas como Civitai y Hugging Face, y cada uno tiene su propia licencia independiente (habitualmente una variante de CreativeML OpenRAIL-M, aunque las condiciones varían según el checkpoint y pueden cambiar). Quien planee usar imágenes generadas de forma comercial debería revisar antes la página de licencia del checkpoint concreto — la licencia GPL-3.0 de Fooocus no se extiende automáticamente a las condiciones de un checkpoint, ni las anula.',
          'El propio proyecto no tiene ninguna dimensión comercial: el README afirma claramente que Fooocus es "a 100% non-commercial offline open-source software", sin sitio web oficial, sin producto de pago y sin ninguna empresa que lo venda — el único aviso a tener en cuenta es la advertencia sobre dominios falsos mencionada en la sección de historia del proyecto.',
        ],
        note: 'Esta sección resume metadatos de licencia publicados públicamente a fecha de 2026-09-06; no constituye asesoramiento legal. Lee el [archivo LICENSE de Fooocus](https://github.com/lllyasviel/Fooocus/blob/main/LICENSE) y la página de licencia del checkpoint concreto antes de cualquier despliegue comercial.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Requisitos de hardware',
        itemHeadings: true,
        columns: ['GPU', 'VRAM mín.', 'RAM mín.', 'Notas'],
        rows: [
          { 'GPU': 'Nvidia RTX 2000-4000', 'VRAM mín.': '4 GB VRAM', 'RAM mín.': '8 GB + intercambio', 'Notas': 'Nivel más rápido; RTX 4000 es la más veloz' },
          { 'GPU': 'Nvidia GTX 900/1000', 'VRAM mín.': '8 GB VRAM (algunos reportan 6 GB)', 'RAM mín.': '8 GB + intercambio', 'Notas': 'Solo algo más rápida que la CPU' },
          { 'GPU': 'Nvidia GTX anterior a 900', 'VRAM mín.': 'No compatible', 'RAM mín.': '—', 'Notas': 'Usa el modo solo CPU en su lugar' },
          { 'GPU': 'GPU AMD (Windows)', 'VRAM mín.': '8 GB VRAM (DirectML, beta)', 'RAM mín.': '8 GB + intercambio', 'Notas': '~3 veces más lenta que Nvidia RTX 3000' },
          { 'GPU': 'GPU AMD (Linux)', 'VRAM mín.': '8 GB VRAM (ROCm, beta)', 'RAM mín.': '8 GB + intercambio', 'Notas': '~1,5 veces más lenta que Nvidia RTX 3000' },
          { 'GPU': 'Apple M1/M2 (no oficial)', 'VRAM mín.': 'Memoria compartida del sistema', 'RAM mín.': 'Compartida', 'Notas': '~9 veces más lenta que Nvidia RTX 3000' },
          { 'GPU': 'Solo CPU', 'VRAM mín.': 'Ninguna (0 GB)', 'RAM mín.': '32 GB', 'Notas': '~17 veces más lenta que Nvidia RTX 3000' },
        ],
        content: [
          '**El requisito mínimo para ejecutar Fooocus es 4 GB de VRAM Nvidia más 8 GB de RAM del sistema con memoria de intercambio virtual activada**, según la tabla de especificaciones del propio README del proyecto. Esto convierte a Fooocus en una de las interfaces locales de Stable Diffusion con menor barrera de entrada, ya que los checkpoints SDXL suelen pedir entre 8 y 12 GB de VRAM en otras interfaces sin las optimizaciones de gestión de memoria integradas de Fooocus.',
          'El propio ejemplo de pruebas del proyecto cita un portátil con una Nvidia RTX 3060 (6 GB de VRAM) y 16 GB de RAM del sistema generando imágenes a aproximadamente 1,35 segundos por paso de muestreo — una referencia práctica útil, aunque la velocidad real depende de la resolución, el preset y la versión actual del controlador de la GPU.',
        ],
        note: 'Las cifras proceden directamente de la tabla "Minimal Requirement" del README de lllyasviel/Fooocus, a fecha de 2026-09-06 — el propio proyecto marca explícitamente el soporte de AMD y Mac como beta/no oficial, y el uso real de VRAM varía según resolución, tamaño de lote y controladores instalados.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios: gratis, sin nivel de pago',
        content: [
          '**Fooocus es completamente gratuito, sin nivel de pago, suscripción ni producto comercial oficial de ningún tipo.** La aplicación es software de código abierto bajo licencia GPL-3.0; el único coste para el lector es su propio hardware y la electricidad, y los checkpoints que descarga por defecto (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) también son gratuitos.',
          'A diferencia de otras herramientas locales de IA que combinan una app gratuita autoalojada con un nivel de pago opcional en la nube, Fooocus no ofrece nada así — el README es explícito al indicar que el proyecto no tiene sitio web oficial ni ninguna empresa detrás que venda algo. Cualquier sitio que afirme vender una versión "Fooocus Pro", o cualquier dominio distinto del propio [repositorio de GitHub](https://github.com/lllyasviel/Fooocus), debe considerarse sin relación con el proyecto real.',
        ],
        note: 'Confirmado directamente en el propio README del proyecto a fecha de 2026-09-06 — vuelve a verificarlo en [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) si evalúas esto para un despliegue comercial años después.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Fooocus frente a otras alternativas',
        columns: ['Opción', 'Mejor para', 'Autoalojable', 'Licencia / coste', 'Compromiso clave'],
        rows: [
          {
            'Opción': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Mejor para': 'Menos clics hasta la primera imagen; cero ajuste manual de parámetros para principiantes',
            'Autoalojable': 'Sí — gratis, GPU propia (mín. 4 GB VRAM)',
            'Licencia / coste': 'GPL-3.0 (app); los checkpoints por defecto tienen cada uno su propia licencia',
            'Compromiso clave': 'El repositorio original está solo con corrección de errores desde agosto de 2024; solo SDXL, sin FLUX',
          },
          {
            'Opción': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) / [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Mejor para': 'Interfaz técnica basada en pestañas con el mayor ecosistema de extensiones de cualquier interfaz local de SD',
            'Autoalojable': 'Sí — gratis, GPU propia',
            'Licencia / coste': 'AGPL-3.0, gratis',
            'Compromiso clave': 'Muestra directamente cada parámetro — curva de aprendizaje más pronunciada que Fooocus',
          },
          {
            'Opción': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Mejor para': 'Control total del pipeline mediante un grafo de nodos visual; suele ser el primero en soportar nuevos modelos',
            'Autoalojable': 'Sí — gratis, GPU propia',
            'Licencia / coste': 'GPL-3.0, gratis (existe un nivel de pago aparte para nube/API de ComfyUI)',
            'Compromiso clave': 'La interfaz de grafo de nodos supone una complejidad real para un principiante total',
          },
          {
            'Opción': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Mejor para': 'Interfaz profesional pulida con lienzo unificado y flujos de trabajo orientados a equipos',
            'Autoalojable': 'Sí — gratis, GPU propia',
            'Licencia / coste': 'Apache 2.0, gratis (el nivel de pago de Invoke Cloud se descontinuó tras la adquisición de Adobe en 2025)',
            'Compromiso clave': 'Ecosistema de extensiones de la comunidad más pequeño que AUTOMATIC1111 o ComfyUI',
          },
          {
            'Opción': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) (antes StableSwarmUI de Stability AI)',
            'Mejor para': 'Interfaz simplificada por pestañas construida sobre el backend de ComfyUI',
            'Autoalojable': 'Sí — gratis, GPU propia',
            'Licencia / coste': 'Licencia MIT, gratis',
            'Compromiso clave': 'Comunidad más pequeña que ComfyUI o AUTOMATIC1111; menos orientada a principiantes que Fooocus',
          },
        ],
        note: 'Esto es un resumen de posicionamiento, no un ranking de rendimiento. Las licencias, el número de estrellas y el estado de mantenimiento se verificaron directamente en el repositorio de GitHub de cada proyecto a fecha de 2026-09-06 y pueden cambiar — consulta [Stable Diffusion: Análisis](/es/power-local-llm/stable-diffusion-review) para conocer la familia de modelos subyacente de la que depende este artículo y todas las interfaces mencionadas arriba.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'A quién le conviene Fooocus',
        items: [
          '**Principiante absoluto que nunca ha ejecutado generación de imágenes con IA en local.** El diseño de presets y expansión de prompts de Fooocus elimina la parte más empinada de la curva de aprendizaje de Stable Diffusion — no hace falta decidir sampler, escala CFG ni resolución para obtener un resultado utilizable.',
          '**Lector que quiere una experiencia similar a Midjourney sin suscripción ni dependencia de la nube.** El conjunto de funciones de Fooocus refleja deliberadamente la lista de comandos de Midjourney (estilos, variaciones, escalado) mientras funciona totalmente offline en hardware local.',
          '**Propietario de una GPU con poca VRAM.** Un mínimo de 4 GB de VRAM (a partir de la serie Nvidia RTX 2000) es inferior a lo que AUTOMATIC1111 o ComfyUI suelen recomendar para un uso cómodo de SDXL, lo que convierte a Fooocus en un punto de entrada razonable en GPUs más antiguas o económicas.',
          '**Lector que se conforma con modelos basados en SDXL.** Si la gama actual de presets (uso general, realista, anime) ya cubre tu caso de uso, la estabilidad y sencillez de Fooocus compensan su falta de soporte para arquitecturas más nuevas.',
          '**Lector al que le importa que la ponderación de prompts estilo Civitai simplemente funcione.** Fooocus usa la sintaxis de reponderación de prompts de AUTOMATIC1111, así que los prompts copiados directamente de Civitai se comportan como se espera sin necesidad de reformatearlos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'A quién no le conviene Fooocus',
        items: [
          '**Lector que quiera FLUX, SD 3.5 o cualquier arquitectura de modelo posterior a 2024.** El propio README de Fooocus indica que actualmente no hay planes de admitir arquitecturas más nuevas — quien quiera los modelos más recientes debería usar en su lugar [ComfyUI](https://github.com/comfy-org/ComfyUI), [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) o [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge).',
          '**Usuario avanzado que quiera control detallado sobre cada paso del pipeline de generación.** Toda la filosofía de diseño de Fooocus consiste en ocultar parámetros; quien quiera inspeccionar o recablear cada etapa de una pipeline de difusión debería usar en su lugar el grafo de nodos de ComfyUI.',
          '**Lector que dependa del proyecto original para correcciones rápidas o funciones nuevas.** El repositorio original está explícitamente en modo solo corrección de errores, sin una hoja de ruta comprometida — quien necesite desarrollo activo de funciones debería evaluar el [fork mashb1t/Fooocus mantenido por la comunidad](https://github.com/mashb1t/Fooocus) o una interfaz completamente distinta.',
          '**Equipos que necesiten procesamiento por lotes de nivel productivo o un flujo de trabajo orientado a API.** Fooocus está construido en torno a una interfaz Gradio para un solo usuario, no a un servidor API — quien esté construyendo una pipeline automatizada debería mirar el modo API de ComfyUI o InvokeAI en su lugar.',
          '**Lector que necesite condicionamiento intenso de pose/profundidad al estilo ControlNet.** Fooocus usa su propio sistema simplificado de "Image Prompt" en lugar de exponer la selección completa de modelos ControlNet; quien necesite control preciso de pose o profundidad debería usar AUTOMATIC1111, WebUI Forge o ComfyUI con modelos ControlNet dedicados.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Fooocus?',
            a: 'Sí. Fooocus es software gratuito y de código abierto bajo licencia GPL-3.0, sin nivel de pago, suscripción ni producto comercial oficial. Los checkpoints SDXL por defecto que descarga (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) también son gratuitos, aunque cada uno tiene su propia licencia independiente que rige el uso comercial de las imágenes generadas.',
          },
          {
            q: '¿Se sigue actualizando Fooocus?',
            a: 'Está en un estado de actividad reducida, no abandonado. El README del proyecto indica que está en modo "Limited Long-Term Support (LTS) solo con corrección de errores": el último lanzamiento etiquetado fue v2.5.5 el 12 de agosto de 2024, y no hay planes de admitir arquitecturas de modelo más nuevas como FLUX. El repositorio de GitHub no está archivado y ha seguido recibiendo commits tan recientes como diciembre de 2025, y el colaborador mashb1t mantiene un fork actualizado activamente en github.com/mashb1t/Fooocus.',
          },
          {
            q: '¿Quién creó Fooocus?',
            a: 'Fooocus fue creado por Lvmin Zhang, que publica bajo el usuario de GitHub lllyasviel. Zhang es doctorando en informática en la Universidad de Stanford, también conocido por crear ControlNet, cuyo artículo ganó el Marr Prize (máximo premio a mejor artículo de ICCV 2023), así como WebUI Forge, PaintsUndo e IC-Light.',
          },
          {
            q: '¿Cuánta VRAM necesita Fooocus?',
            a: 'El mínimo son 4 GB de VRAM en una GPU Nvidia de la serie RTX 2000, 3000 o 4000, más 8 GB de RAM del sistema con memoria de intercambio virtual activada. Las tarjetas Nvidia GTX 900/1000 más antiguas necesitan alrededor de 8 GB de VRAM, las GPU AMD necesitan unos 8 GB de VRAM mediante DirectML (Windows, beta) o ROCm (Linux, beta), y el funcionamiento solo con CPU es posible con 32 GB de RAM del sistema, aunque va aproximadamente 17 veces más lento que una GPU Nvidia serie RTX 3000.',
          },
          {
            q: '¿Qué es la expansión de prompts basada en GPT-2 de Fooocus?',
            a: 'Es un motor de procesamiento de prompts que funciona offline, presentado en la interfaz como el estilo "Fooocus V2", que expande automáticamente prompts cortos o vagos con detalle estilístico y compositivo adicional antes de generar la imagen — conceptualmente similar al preprocesamiento oculto de prompts de Midjourney o a "Prompt Magic" de LeonardoAI. Funciona en local y no requiere conexión a internet.',
          },
          {
            q: '¿Es mejor Fooocus que AUTOMATIC1111 o ComfyUI?',
            a: 'Depende de tu objetivo. Fooocus es más fácil para empezar porque oculta los parámetros técnicos tras presets, a costa de un control detallado. La WebUI de AUTOMATIC1111 (o su fork WebUI Forge) muestra directamente cada parámetro y tiene el mayor ecosistema de extensiones de cualquier interfaz local de Stable Diffusion. ComfyUI ofrece control total del pipeline mediante un grafo de nodos y suele ser el primero en soportar nuevos lanzamientos de modelos. Quien supere las posibilidades de los presets de Fooocus suele pasar a una de estas dos.',
          },
          {
            q: '¿Fooocus admite FLUX o Stable Diffusion 3.5?',
            a: 'No. Fooocus está construido enteramente sobre la arquitectura Stable Diffusion XL, y su propio README indica que actualmente no hay planes de añadir soporte para arquitecturas más nuevas como FLUX. Quien quiera FLUX o SD 3.5 en una configuración igualmente local debería usar en su lugar ComfyUI, SwarmUI o WebUI Forge.',
          },
          {
            q: '¿Dónde puedo descargar Fooocus?',
            a: 'La única fuente oficial es el [repositorio de GitHub lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus), donde se publica un paquete de un solo clic para Windows en la sección Releases. El propio README del proyecto advierte explícitamente que dominios como fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro y fooocus.one son sitios web falsos sin ninguna relación con el proyecto real.',
          },
          {
            q: '¿Cuál es el modelo por defecto que usa Fooocus?',
            a: 'Fooocus descarga automáticamente un checkpoint SDXL por defecto distinto según el preset que ejecutes: Juggernaut XL v8 (Rundiffusion) para el preset General, RealisticStockPhoto v2.0 para Realistic y AnimaPencilXL v5.0 para Anime. Los tres son checkpoints entrenados por la comunidad y alojados de forma independiente del propio Fooocus.',
          },
          {
            q: '¿Puedo usar comercialmente las imágenes generadas con Fooocus?',
            a: 'La propia licencia GPL-3.0 de Fooocus cubre el código de la aplicación, no las imágenes que produce. El uso comercial de una imagen generada se rige por la licencia del checkpoint concreto usado para crearla — los checkpoints por defecto (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) tienen cada uno su propia licencia independiente, normalmente una variante de CreativeML OpenRAIL-M, publicada en su página de Civitai o Hugging Face. Revisa esa página antes de un uso comercial.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Fooocus se gana su reputación como la forma más sencilla de ejecutar Stable Diffusion en local — el diseño de presets y expansión de prompts elimina realmente la parte más empinada de la curva de aprendizaje que hace que AUTOMATIC1111 y ComfyUI resulten intimidantes para quien empieza, y lo hace funcionando totalmente offline con hardware tan modesto como una GPU de 4 GB de VRAM. La salvedad honesta es el mantenimiento: el propio README del proyecto original lo sitúa en modo solo corrección de errores, sin lanzamiento etiquetado desde agosto de 2024 y sin planes de admitir FLUX u otras arquitecturas posteriores a 2024, aunque el repositorio sigue activo y no archivado. Quien busque el punto de entrada más sencillo posible a la generación de imágenes local basada en SDXL, y no necesite las arquitecturas de modelo más recientes ni control detallado del pipeline, encontrará en Fooocus exactamente lo que promete. Quien busque más control (ComfyUI, AUTOMATIC1111/WebUI Forge) o modelos más nuevos en una configuración igualmente local (ComfyUI, SwarmUI) debería mirar más allá de Fooocus hacia esas opciones — idealmente después de comprobar directamente en [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) el estado actual del proyecto.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[lllyasviel/Fooocus — repositorio de GitHub y README](https://github.com/lllyasviel/Fooocus) — fuente principal sobre funciones, instalación, tabla de requisitos mínimos de hardware, licencia y la declaración de estado de mantenimiento "Limited Long-Term Support".',
          '[lllyasviel/Fooocus — Releases](https://github.com/lllyasviel/Fooocus/releases) — historial y fechas de lanzamientos, incluido el más reciente etiquetado, v2.5.5 (12 de agosto de 2024).',
          '[mashb1t/Fooocus — repositorio de GitHub](https://github.com/mashb1t/Fooocus) — fork mantenido por la comunidad con actividad de commits más reciente que el repositorio original.',
          '[lllyasviel/ControlNet — repositorio de GitHub](https://github.com/lllyasviel/ControlNet) — proyecto anterior del creador Lvmin Zhang, referenciado como contexto sobre el desarrollador.',
          '[Lvmin Zhang — página académica personal](https://lllyasviel.github.io/lvmin_zhang/) — trayectoria biográfica y de investigación del creador.',
          '[Scientific American — perfil de Lvmin Zhang](https://www.scientificamerican.com/article/lvmin-zhang/) — perfil independiente sobre el trabajo de Zhang en herramientas de IA, incluyendo Fooocus y ControlNet.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Stable Diffusion: Análisis de los modelos locales gratuitos de texto a imagen](/es/power-local-llm/stable-diffusion-review) — la familia de modelos abiertos subyacente sobre la que funciona Fooocus, incluidas las condiciones de licencia y el historial de versiones.',
          '[Generación de imágenes con IA local frente a la nube: FLUX, SD 3.5, Qwen-Image frente a Adobe Firefly y getimg.ai](/es/power-local-llm/local-ai-image-generation-vs-cloud) — una comparación más profunda de familias de modelos de imagen locales para quien supere el enfoque exclusivo en SDXL de Fooocus.',
          '[Directorio de software de LLM local 2026](/es/power-local-llm/local-llm-software-directory) — directorio completo de aplicaciones y herramientas para todas las plataformas.',
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
    heroImage: '/images/fooocus-review-hero-fr.webp',
    title: 'Fooocus : test (2026) de l\'interface Stable Diffusion locale la plus simple',
    seoTitle: 'Fooocus : test 2026 de l\'UI Stable Diffusion locale la plus facile',
    intro:
      'Fooocus est une interface de génération d\'images gratuite, open source et entièrement hors ligne pour Stable Diffusion XL, créée par Lvmin Zhang (identifiant GitHub lllyasviel, également connu pour [ControlNet](https://github.com/lllyasviel/ControlNet)). Elle masque délibérément presque tous les réglages techniques — samplers, échelle CFG, grilles de résolution — derrière des préréglages et un moteur automatique d\'expansion de prompt, permettant de passer d\'un champ de texte vide à une image finie en environ trois clics. Ce test présente ce que Fooocus fait réellement en coulisses, sa licence GPL-3.0, les besoins matériels réels et, surtout, son état de maintenance actuel honnête, le dépôt d\'origine ayant publiquement déclaré être désormais en mode correctifs uniquement.',
    metaDescription:
      'Fooocus, test 2026 : l\'UI Stable Diffusion locale la plus accessible aux débutants, du créateur de ControlNet lllyasviel — besoins réels en VRAM, licence GPL-3.0 et état de maintenance honnête (LTS/correctifs seuls depuis 2024).',
    twitterDescription:
      'Fooocus, test 2026 : l\'UI Stable Diffusion locale demandant le moins de clics, du créateur de ControlNet — besoins en VRAM, expansion de prompt par GPT-2, licence GPL-3.0 et la vérité sur sa maintenance.',
    audience:
      'Lecteurs qui veulent la façon la plus simple d\'exécuter Stable Diffusion en local sans apprendre AUTOMATIC1111 ni ComfyUI — couvre l\'installation, les besoins matériels et si le projet est encore activement maintenu.',
    readTime: '10 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'Fooocus test',
    targetKeywords: [
      'fooocus test',
      'fooocus vs comfyui',
      'fooocus vs automatic1111',
      'ui stable diffusion la plus simple',
      'besoins vram fooocus',
      'statut de maintenance fooocus',
      'télécharger fooocus',
      'licence fooocus',
    ],
    current_models_mentioned: ['Stable Diffusion XL', 'Juggernaut XL v8 (Rundiffusion)', 'realisticStockPhoto v2.0', 'animaPencilXL v5.0', 'FLUX.1'],
    current_hardware_mentioned: ['4 Go VRAM', '6 Go VRAM', '8 Go VRAM', '8 Go de RAM', '32 Go de RAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Fooocus est une interface locale gratuite et open source pour Stable Diffusion XL qui masque presque tous les réglages techniques derrière des préréglages, ce qui en fait l\'UI de génération d\'images locale la plus simple pour débuter — mais le projet d\'origine est désormais en état de « Limited Long-Term Support (LTS) avec correctifs uniquement », sans nouvelle version taguée depuis août 2024.** Elle fonctionne hors ligne dès 4 Go de VRAM (Nvidia séries RTX 2000/3000/4000) et 8 Go de RAM système, utilise un moteur d\'expansion de prompt basé sur GPT-2 qui ajoute automatiquement style et détail, et est distribuée sous licence GPL-3.0. Elle ne prend pas en charge les architectures plus récentes (pas de FLUX) — les lecteurs voulant les modèles les plus récents devraient aussi regarder [ComfyUI](https://github.com/comfy-org/ComfyUI) ou [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge), tous deux issus du même écosystème de développement. Vérifier l\'activité actuelle du dépôt sur [GitHub](https://github.com/lllyasviel/Fooocus) avant de le considérer comme activement développé.',
    quickAnswerTop: {
      fr: {
        question: 'Fooocus est-il encore maintenu, et de combien de VRAM a-t-il besoin ?',
        answer:
          'Fooocus n\'est pas abandonné, mais son propre README indique que le projet est entré en mode « Limited Long-Term Support (LTS) avec correctifs uniquement » — la dernière version taguée était la v2.5.5, publiée le 12 août 2024, et aucun support des architectures plus récentes comme FLUX n\'est prévu. Le dépôt GitHub n\'est pas archivé et continue de recevoir des commits (le plus récent en décembre 2025), et le contributeur mashb1t maintient un fork activement mis à jour sur github.com/mashb1t/Fooocus. Fooocus nécessite au minimum 4 Go de VRAM sur un GPU Nvidia des séries RTX 2000/3000/4000 et 8 Go de RAM système (avec la mémoire d\'échange virtuelle activée) pour fonctionner.',
        bullets: [
          'Créateur : Lvmin Zhang (lllyasviel), doctorant en informatique à Stanford, également connu pour avoir créé ControlNet, dont l\'article a remporté le Marr Prize (le prix du meilleur article de l\'ICCV 2023).',
          'Statut : le dépôt d\'origine est en mode correctifs uniquement depuis 2024 ; aucun support de FLUX ou de modèles plus récents n\'est prévu. Non archivé — reçoit toujours des commits.',
          'Matériel minimal : 4 Go de VRAM (Nvidia séries RTX 2000/3000/4000) et 8 Go de RAM avec mémoire d\'échange activée ; les cartes GTX 900/1000 plus anciennes nécessitent 8 Go de VRAM.',
          'Licence : GPL-3.0 pour le code applicatif ; les checkpoints SDXL par défaut (Juggernaut XL, etc.) ont chacun leur propre licence distincte.',
          'Fonction distinctive : un moteur d\'expansion de prompt basé sur GPT-2 fonctionnant hors ligne (style « Fooocus V2 ») qui ajoute automatiquement les détails manquants, similaire au prétraitement caché de Midjourney.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Fooocus', anchor: 'what-is-fooocus' },
      { label: 'Historique du projet et créateur', anchor: 'project-history' },
      { label: 'État de maintenance actuel (2026)', anchor: 'maintenance-status' },
      { label: 'Comment installer et lancer Fooocus', anchor: 'how-to-install' },
      { label: 'Expansion de prompt et styles intégrés', anchor: 'prompt-expansion-styles' },
      { label: 'Licence et usage commercial', anchor: 'license-commercial-use' },
      { label: 'Configuration matérielle requise', anchor: 'hardware-requirements' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Fooocus face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'À qui Fooocus s\'adresse', anchor: 'who-should-use' },
      { label: 'À qui Fooocus ne convient pas', anchor: 'who-should-not-use' },
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
          'Fooocus est une interface Stable Diffusion XL gratuite, open source et entièrement hors ligne, conçue pour minimiser les réglages manuels — le développeur indique atteindre une première image en moins de trois clics de souris.',
          'Créée par Lvmin Zhang, dont l\'identifiant GitHub est lllyasviel, doctorant en informatique à Stanford, également connu pour avoir créé [ControlNet](https://github.com/lllyasviel/ControlNet), dont l\'article a remporté le Marr Prize (prix du meilleur article de l\'ICCV 2023).',
          'Le README du projet déclare lui-même qu\'il est désormais en état « Limited Long-Term Support (LTS) avec correctifs uniquement » : la dernière version taguée était la v2.5.5, le 12 août 2024, et aucun projet actuel de prise en charge d\'architectures plus récentes comme FLUX n\'existe.',
          'Le dépôt GitHub n\'est pas archivé et a continué de recevoir des commits (le plus récent en décembre 2025) ; le contributeur mashb1t maintient un fork activement mis à jour sur [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus).',
          'Le matériel minimal est de 4 Go de VRAM sur un GPU Nvidia des séries RTX 2000/3000/4000 plus 8 Go de RAM système avec mémoire d\'échange virtuelle activée ; les cartes GTX 900/1000 plus anciennes nécessitent environ 8 Go de VRAM.',
          'Fooocus est sous licence GPL-3.0, 100 % gratuit sans aucune formule payante — mais les checkpoints SDXL téléchargés par défaut (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) ont chacun leur propre licence distincte sur Civitai/Hugging Face.',
        ],
      },
      whatIsFooocus: {
        id: 'what-is-fooocus',
        title: 'Qu\'est-ce que Fooocus',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus est une interface gratuite, hors ligne, basée sur Gradio, pour Stable Diffusion XL, qui masque les paramètres techniques derrière des préréglages et une expansion automatique de prompt, visant une expérience « il suffit de taper un prompt ».' },
          { type: 'plain-terms', text: 'Si AUTOMATIC1111 et ComfyUI sont un tableau de bord technique et un schéma de câblage, Fooocus se rapproche davantage d\'un simple bouton « générer » — il prend la plupart des décisions à votre place et n\'affiche les réglages avancés que si vous allez les chercher.' },
        ],
        content: [
          '**Fooocus est une application locale et hors ligne de génération d\'images, entièrement construite sur l\'architecture Stable Diffusion XL (SDXL), distribuée en tant que logiciel libre et open source sous licence GPL-3.0.** Contrairement à l\'interface technique par onglets d\'AUTOMATIC1111 ou à l\'éditeur de graphe de nœuds de ComfyUI, Fooocus supprime délibérément la plupart des contrôles manuels — pas de sélecteur de sampler visible, pas de curseur d\'échelle CFG par défaut, pas de grille de résolution — et les remplace par un petit ensemble de préréglages (General, Realistic, Anime) plus un panneau « Advanced » que l\'on peut ignorer entièrement.',
          'Le projet fonctionne sur [Gradio](https://www.gradio.app/), le même framework d\'interface web Python utilisé par de nombreux autres outils d\'IA locale, et son interface reprend volontairement la liste de fonctionnalités de Midjourney et LeonardoAI, transposant chacune de leurs commandes (`--style`, `--ar`, variations V1–V4, upscaling) vers un équivalent Fooocus, afin que les utilisateurs venant de ces outils cloud retrouvent un modèle mental familier.',
          'L\'objectif de conception central, formulé directement dans la documentation du projet, est que le nombre de clics de souris entre le téléchargement de Fooocus et la génération d\'une première image doit être inférieur à trois. Cette seule contrainte de conception — plutôt qu\'une innovation de modèle spécifique — distingue Fooocus des autres interfaces Stable Diffusion : c\'est une couche UI/UX, pas un nouveau modèle.',
        ],
      },
      projectHistory: {
        id: 'project-history',
        title: 'Historique du projet et créateur',
        content: [
          '**Fooocus a été créé par Lvmin Zhang, qui publie sous l\'identifiant GitHub lllyasviel ; son dépôt a été créé sur GitHub le 9 août 2023.** Zhang est doctorant en informatique à l\'université de Stanford, où il étudie la modélisation générative contrôlable et l\'infographie.',
          'Zhang est par ailleurs bien connu dans la communauté Stable Diffusion comme le créateur de [ControlNet](https://github.com/lllyasviel/ControlNet), l\'architecture de réseau de neurones qui a ajouté un conditionnement spatial précis (pose, profondeur, cartes de contours) aux modèles de diffusion texte-image. L\'article de ControlNet a remporté le Marr Prize, la plus haute distinction pour un article à l\'International Conference on Computer Vision (ICCV) 2023 — l\'une des conférences les plus compétitives de la vision par ordinateur. Zhang a également publié d\'autres outils d\'IA locale, dont [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (un fork d\'AUTOMATIC1111 axé sur la performance), PaintsUndo et IC-Light.',
          'Fooocus a été construit, selon les termes mêmes du projet, à partir d\'un mélange des bases de code d\'[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) et de [ComfyUI](https://github.com/comfy-org/ComfyUI) — en réutilisant leurs techniques d\'inférence éprouvées tout en présentant une interface radicalement simplifiée. En septembre 2026, le projet totalise plus de 52 000 étoiles GitHub et plus de 8 600 forks, l\'un des outils locaux de génération d\'images les plus étoilés sur GitHub.',
          '**Une mise en garde de sécurité émanant directement du projet lui-même : Fooocus n\'a pas de site web officiel.** Le README avertit explicitement que des domaines comme fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro et fooocus.one sont des faux sans aucun lien avec le vrai projet — la seule source officielle est le [dépôt GitHub](https://github.com/lllyasviel/Fooocus) lui-même.',
        ],
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'Fooocus est-il encore maintenu en 2026 ?',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus n\'est pas abandonné, mais son propre README indique que le projet d\'origine est en état « Limited Long-Term Support (LTS) avec correctifs uniquement », sans version taguée depuis août 2024 et sans projet de support des architectures plus récentes comme FLUX.' },
          { type: 'plain-terms', text: 'On peut le considérer comme un outil stable et abouti plutôt qu\'en pleine croissance — le développeur estime que l\'ensemble de fonctionnalités basé sur SDXL est essentiellement terminé et ne court pas après chaque nouvelle sortie de modèle.' },
        ],
        content: [
          'Le [README de lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) comporte une section intitulée **« Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only »**, indiquant que le projet — entièrement construit sur l\'architecture Stable Diffusion XL — est désormais considéré comme fonctionnellement complet, et que « les futures mises à jour se concentreront exclusivement sur la correction des bugs pouvant survenir ». Le README précise explicitement qu\'il n\'existe actuellement aucun projet de migration vers des architectures de modèle plus récentes comme FLUX, tout en laissant la porte ouverte si la communauté open source converge vers une seule méthode successeure dominante.',
          'Pour les lecteurs souhaitant les modèles les plus récents, le README lui-même recommande des plateformes alternatives — en particulier [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (également du même créateur) et [ComfyUI](https://github.com/comfy-org/ComfyUI) ou son interface simplifiée [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) — plutôt que de promettre un support de FLUX au sein même de Fooocus.',
          'Ce n\'est pas la même chose qu\'un projet abandonné. Le dépôt GitHub **n\'est pas archivé**, reste ouvert aux issues et pull requests (314 issues ouvertes au moment de ce test), et les données d\'activité GitHub elles-mêmes montrent des commits aussi récents que décembre 2025 — plus d\'un an après la dernière version taguée. Le README remercie le contributeur **mashb1t** pour ses « efforts considérables » ayant réduit les bugs restants du code, et mashb1t maintient séparément un fork sur [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus) qui a continué de recevoir des commits encore plus récents (le dernier en octobre 2025) — même si ce fork n\'a lui non plus publié aucune nouvelle version taguée depuis août 2024, reflétant le même rythme que le projet d\'origine.',
          'La conclusion pratique : Fooocus est stable et sûr à installer aujourd\'hui, mais un lecteur cherchant spécifiquement FLUX, SD 3.5 ou d\'autres architectures de modèle postérieures à 2024 dans une interface simplifiée ne les trouvera pas dans Fooocus et devrait plutôt se tourner vers ComfyUI, SwarmUI ou WebUI Forge.',
        ],
        note: 'Les faits relatifs à l\'état de maintenance ont été vérifiés directement sur le dépôt GitHub et le README de lllyasviel/Fooocus, ainsi que sur le fork mashb1t/Fooocus, le 2026-09-06 — les dates de push, les dates de version et le nombre d\'issues ouvertes évoluent avec le temps ; revérifier [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) avant de considérer ce statut comme actuel.',
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Comment installer et lancer Fooocus',
        content: [
          'Fooocus propose un package Windows en un clic, ainsi que des méthodes d\'installation manuelle pour Linux, Mac et Docker — aucune étape de téléchargement de modèle séparée n\'est nécessaire pour le préréglage par défaut, Fooocus récupérant automatiquement son checkpoint par défaut au premier lancement.',
        ],
        numberedItems: [
          { title: 'Télécharger le package Windows (ou cloner le dépôt sous Linux/Mac)', whyItMatters: 'Les utilisateurs Windows obtiennent un package `.7z` autonome depuis la [page Releases de GitHub](https://github.com/lllyasviel/Fooocus/releases), avec un environnement Python intégré — aucune installation Python séparée n\'est nécessaire. Les utilisateurs Linux et Mac clonent plutôt le dépôt et configurent un environnement Conda ou venv.' },
          { title: 'Extraire le package et exécuter run.bat', whyItMatters: 'Décompresser l\'archive téléchargée et double-cliquer sur `run.bat` — cela lance le préréglage General. `run_anime.bat` et `run_realistic.bat` lancent respectivement les préréglages Anime et Realistic, chacun avec un checkpoint par défaut différent.' },
          { title: 'Laisser Fooocus télécharger automatiquement son modèle par défaut', whyItMatters: 'Au premier lancement, Fooocus télécharge automatiquement le checkpoint correspondant au préréglage exécuté — Juggernaut XL v8 (Rundiffusion) pour General, RealisticStockPhoto v2.0 pour Realistic, ou AnimaPencilXL v5.0 pour Anime — dans le dossier `Fooocus/models/checkpoints`.' },
          { title: 'Saisir un prompt et cliquer sur Generate', whyItMatters: 'Aucun choix de sampler, d\'échelle CFG ou de résolution n\'est requis — Fooocus applique automatiquement des valeurs par défaut sensées. Les réglages avancés restent disponibles derrière un bouton « Advanced » pour ceux qui le souhaitent plus tard.' },
          { title: 'Utiliser Image Prompt, Inpaint ou Upscale/Vary selon les besoins', whyItMatters: 'Fooocus transpose les flux de travail façon Midjourney (prompt image, inpainting, upscaling, variation subtile/forte) sur ses propres panneaux d\'interface, en utilisant son propre modèle d\'inpainting et son propre algorithme de prompt image plutôt qu\'une configuration ControlNet SDXL standard.' },
          { title: 'Passer à des checkpoints communautaires une fois à l\'aise', whyItMatters: 'N\'importe quel checkpoint SDXL provenant de Civitai ou Hugging Face peut être placé dans le dossier `models/checkpoints` et sélectionné dans Fooocus, étendant l\'outil au-delà des trois préréglages intégrés.' },
        ],
        note: 'Les chemins de dossiers exacts, les paramètres du lanceur et les versions de dépendances changent d\'une version à l\'autre — suivre les instructions de configuration actuelles sur la [page GitHub de lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) plutôt qu\'un guide générique.',
      },
      promptExpansionStyles: {
        id: 'prompt-expansion-styles',
        title: 'Expansion de prompt et styles intégrés',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus exécute un modèle d\'expansion de prompt basé sur GPT-2, fonctionnant hors ligne, proposé comme style « Fooocus V2 », qui ajoute automatiquement du détail aux prompts courts ou vagues avant la génération.' },
        ],
        content: [
          '**La fonctionnalité phare de Fooocus est un moteur de traitement de prompt basé sur GPT-2, fonctionnant hors ligne, présenté dans l\'interface comme le style « Fooocus V2 ».** La documentation du projet elle-même le compare au prétraitement caché des prompts de Midjourney et au « Prompt Magic » de LeonardoAI — l\'idée étant qu\'un prompt court comme « maison dans un jardin » et un prompt de 1 000 mots doivent tous deux produire des résultats soignés et cohérents, le modèle d\'expansion complétant automatiquement les détails stylistiques et compositionnels manquants.',
          'Au-delà de Fooocus V2, l\'interface propose plusieurs autres styles préréglés intégrés, dont « Fooocus Photograph », « Fooocus Negative » et un style « cinematic-default », avec des styles SDXL supplémentaires apportés par des membres de la communauté crédités dans le README du projet (twri, 3Diva et Marc K3nt3L). Les styles peuvent être combinés, et plusieurs se cumulent dans le panneau Advanced pour les lecteurs souhaitant plus de contrôle que n\'en offrent les trois préréglages principaux.',
          'Parmi les autres techniques internes documentées par le README figurent un basculement natif du refiner au sein d\'un seul k-sampler (évitant la perte de momentum qui survient lorsque AUTOMATIC1111 ou ComfyUI basculent entre deux samplers indépendants), un guidage ADM négatif ajusté au niveau de résolution le plus élevé de SDXL, ainsi qu\'un modèle d\'inpainting et un algorithme de prompt image propres à Fooocus plutôt qu\'un pipeline ControlNet ou IP-Adapter SDXL standard.',
        ],
      },
      licenseCommercialUse: {
        id: 'license-commercial-use',
        title: 'Licence Fooocus et usage commercial',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Le code applicatif de Fooocus est sous licence GPL-3.0 (GNU General Public License version 3), confirmée sur son dépôt GitHub — mais les checkpoints SDXL téléchargés par défaut sont des modèles communautaires distincts, chacun avec sa propre licence différente.' },
          { type: 'plain-terms', text: 'Le logiciel Fooocus lui-même est entièrement open source et libre d\'utilisation ou de modification ; la licence applicable aux images générées dépend du checkpoint qui les a produites, et c\'est la licence de ce checkpoint — pas celle de Fooocus — qui régit l\'usage commercial de ces images précises.' },
        ],
        content: [
          'Fooocus est sous licence **GPL-3.0** (GNU General Public License, version 3), comme le confirment les métadonnées de licence sur son dépôt GitHub. La GPL-3.0 autorise l\'utilisation, la modification et la redistribution libres du code de Fooocus, à condition que tout travail dérivé distribué soit également publié sous GPL-3.0 (copyleft) — cela concerne le code applicatif, pas les images générées avec.',
          'Les trois checkpoints par défaut que Fooocus télécharge automatiquement — Juggernaut XL v8 (Rundiffusion) pour le préréglage General, RealisticStockPhoto v2.0 pour Realistic et AnimaPencilXL v5.0 pour Anime — sont des affinages Stable Diffusion XL entraînés par la communauté, hébergés indépendamment sur des plateformes comme Civitai et Hugging Face, chacun avec sa propre licence distincte (généralement une variante de CreativeML OpenRAIL-M, mais les conditions varient selon le checkpoint et peuvent changer). Quiconque prévoit d\'utiliser des images générées à des fins commerciales devrait vérifier au préalable la page de licence du checkpoint concerné — la licence GPL-3.0 de Fooocus ne s\'étend pas automatiquement aux conditions d\'un checkpoint et ne les annule pas.',
          'Le projet lui-même n\'a aucune dimension commerciale : le README indique clairement que Fooocus est « a 100% non-commercial offline open-source software », sans site web officiel, sans produit payant et sans société derrière qui le vende — le seul point de vigilance est l\'avertissement sur les faux domaines évoqué dans la section Historique du projet.',
        ],
        note: 'Cette section résume des métadonnées de licence publiées publiquement à la date du 2026-09-06 ; elle ne constitue pas un conseil juridique. Lire le [fichier LICENSE de Fooocus](https://github.com/lllyasviel/Fooocus/blob/main/LICENSE) et la page de licence du checkpoint concerné avant tout déploiement commercial.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Configuration matérielle requise',
        itemHeadings: true,
        columns: ['GPU', 'VRAM min.', 'RAM min.', 'Remarques'],
        rows: [
          { 'GPU': 'Nvidia RTX 2000-4000', 'VRAM min.': '4 Go VRAM', 'RAM min.': '8 Go + échange', 'Remarques': 'Niveau le plus rapide ; RTX 4000 la plus rapide' },
          { 'GPU': 'Nvidia GTX 900/1000', 'VRAM min.': '8 Go VRAM (6 Go signalés par certains)', 'RAM min.': '8 Go + échange', 'Remarques': 'Seulement légèrement plus rapide que le CPU' },
          { 'GPU': 'Nvidia GTX antérieure à 900', 'VRAM min.': 'Non prise en charge', 'RAM min.': '—', 'Remarques': 'Utiliser plutôt le mode CPU seul' },
          { 'GPU': 'GPU AMD (Windows)', 'VRAM min.': '8 Go VRAM (DirectML, bêta)', 'RAM min.': '8 Go + échange', 'Remarques': '~3x plus lent qu\'une Nvidia RTX 3000' },
          { 'GPU': 'GPU AMD (Linux)', 'VRAM min.': '8 Go VRAM (ROCm, bêta)', 'RAM min.': '8 Go + échange', 'Remarques': '~1,5x plus lent qu\'une Nvidia RTX 3000' },
          { 'GPU': 'Apple M1/M2 (non officiel)', 'VRAM min.': 'Mémoire système partagée', 'RAM min.': 'Partagée', 'Remarques': '~9x plus lent qu\'une Nvidia RTX 3000' },
          { 'GPU': 'CPU seul', 'VRAM min.': 'Aucune (0 Go)', 'RAM min.': '32 Go', 'Remarques': '~17x plus lent qu\'une Nvidia RTX 3000' },
        ],
        content: [
          '**Le minimum requis pour exécuter Fooocus est de 4 Go de VRAM Nvidia plus 8 Go de RAM système avec la mémoire d\'échange virtuelle activée**, selon le tableau de spécifications du README du projet lui-même. Cela fait de Fooocus l\'une des interfaces locales Stable Diffusion les plus accessibles, les checkpoints SDXL demandant souvent 8 à 12 Go de VRAM dans d\'autres interfaces dépourvues des optimisations de gestion mémoire intégrées de Fooocus.',
          'L\'exemple de test du projet lui-même cite un ordinateur portable équipé d\'une Nvidia RTX 3060 (6 Go de VRAM) et de 16 Go de RAM système générant des images en environ 1,35 seconde par étape d\'échantillonnage — un repère pratique utile, la vitesse réelle dépendant toutefois de la résolution, du préréglage et de la version actuelle du pilote GPU.',
        ],
        note: 'Les chiffres proviennent directement du tableau « Minimal Requirement » du README de lllyasviel/Fooocus, à la date du 2026-09-06 — le projet lui-même signale explicitement le support AMD et Mac comme bêta/non officiel, et l\'utilisation réelle de VRAM varie selon la résolution, la taille de lot et les pilotes installés.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs : gratuit, aucune formule payante',
        content: [
          '**Fooocus est entièrement gratuit, sans formule payante, abonnement ni produit commercial officiel d\'aucune sorte.** L\'application est un logiciel open source sous licence GPL-3.0 ; le seul coût pour le lecteur est son propre matériel et son électricité, et les checkpoints téléchargés par défaut (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) sont eux aussi gratuits.',
          'Contrairement à d\'autres outils d\'IA locale qui associent une application gratuite auto-hébergée à une formule cloud payante optionnelle, Fooocus n\'offre rien de tel — le README précise explicitement que le projet n\'a pas de site web officiel et aucune société derrière qui vende quoi que ce soit. Tout site prétendant vendre une version « Fooocus Pro », ou tout domaine autre que le [dépôt GitHub](https://github.com/lllyasviel/Fooocus) lui-même, doit être considéré comme sans lien avec le vrai projet.',
        ],
        note: 'Confirmé directement à partir du README du projet lui-même à la date du 2026-09-06 — revérifier sur [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) en cas d\'évaluation pour un déploiement commercial des années plus tard.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Fooocus face aux alternatives',
        columns: ['Option', 'Idéal pour', 'Auto-hébergeable', 'Licence / coût', 'Compromis principal'],
        rows: [
          {
            'Option': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Idéal pour': 'Le moins de clics jusqu\'à la première image ; aucun réglage manuel de paramètre pour les débutants',
            'Auto-hébergeable': 'Oui — gratuit, GPU personnel (min. 4 Go VRAM)',
            'Licence / coût': 'GPL-3.0 (appli) ; les checkpoints par défaut ont chacun leur propre licence',
            'Compromis principal': 'Dépôt d\'origine en correctifs uniquement depuis août 2024 ; SDXL seul, pas de FLUX',
          },
          {
            'Option': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) / [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Idéal pour': 'Interface technique par onglets avec le plus grand écosystème d\'extensions de toutes les interfaces SD locales',
            'Auto-hébergeable': 'Oui — gratuit, GPU personnel',
            'Licence / coût': 'AGPL-3.0, gratuit',
            'Compromis principal': 'Expose directement chaque paramètre — courbe d\'apprentissage plus raide que Fooocus',
          },
          {
            'Option': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Idéal pour': 'Contrôle total du pipeline via un graphe de nœuds visuel ; généralement le premier à supporter les nouveaux modèles',
            'Auto-hébergeable': 'Oui — gratuit, GPU personnel',
            'Licence / coût': 'GPL-3.0, gratuit (formule cloud/API ComfyUI payante distincte existe)',
            'Compromis principal': 'L\'interface en graphe de nœuds représente une réelle complexité pour un débutant total',
          },
          {
            'Option': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Idéal pour': 'Interface professionnelle soignée avec canevas unifié et flux de travail orientés équipe',
            'Auto-hébergeable': 'Oui — gratuit, GPU personnel',
            'Licence / coût': 'Apache 2.0, gratuit (l\'offre payante Invoke Cloud a été abandonnée après le rachat par Adobe en 2025)',
            'Compromis principal': 'Écosystème d\'extensions communautaires plus restreint qu\'AUTOMATIC1111 ou ComfyUI',
          },
          {
            'Option': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) (anciennement StableSwarmUI de Stability AI)',
            'Idéal pour': 'Interface simplifiée par onglets fonctionnant sur le backend ComfyUI',
            'Auto-hébergeable': 'Oui — gratuit, GPU personnel',
            'Licence / coût': 'Licence MIT, gratuit',
            'Compromis principal': 'Communauté plus petite que ComfyUI ou AUTOMATIC1111 ; moins orientée débutants que Fooocus',
          },
        ],
        note: 'Ceci est un résumé de positionnement, pas un classement de performance. Licences, nombres d\'étoiles et état de maintenance ont été vérifiés directement sur le dépôt GitHub de chaque projet à la date du 2026-09-06 et peuvent évoluer — voir [Stable Diffusion : test](/fr/power-local-llm/stable-diffusion-review) pour la famille de modèles sous-jacente sur laquelle reposent cet article et chacune des interfaces citées ci-dessus.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui Fooocus s\'adresse',
        items: [
          '**Débutant total n\'ayant jamais fait de génération d\'images IA en local.** La conception de Fooocus autour des préréglages et de l\'expansion de prompt supprime la partie la plus raide de la courbe d\'apprentissage de Stable Diffusion — aucun choix de sampler, d\'échelle CFG ou de résolution n\'est nécessaire pour obtenir un résultat utilisable.',
          '**Lecteur voulant une expérience proche de Midjourney sans abonnement ni dépendance au cloud.** L\'ensemble des fonctionnalités de Fooocus reflète délibérément la liste de commandes de Midjourney (styles, variations, upscaling) tout en fonctionnant entièrement hors ligne sur du matériel local.',
          '**Propriétaire d\'un GPU à faible VRAM.** Un minimum de 4 Go de VRAM (à partir de la série Nvidia RTX 2000) est inférieur à ce qu\'AUTOMATIC1111 ou ComfyUI recommandent généralement pour un usage confortable de SDXL, ce qui fait de Fooocus un point d\'entrée raisonnable sur des GPU plus anciens ou économiques.',
          '**Lecteur satisfait de rester sur des modèles basés sur SDXL.** Si la gamme actuelle de préréglages (usage général, réaliste, anime) couvre déjà le cas d\'usage recherché, la stabilité et la simplicité de Fooocus compensent l\'absence de support d\'architectures plus récentes.',
          '**Lecteur voulant que la pondération de prompt façon Civitai fonctionne sans effort.** Fooocus utilise la syntaxe de repondération de prompt d\'AUTOMATIC1111, de sorte que les prompts copiés directement depuis Civitai se comportent comme attendu sans reformatage.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui Fooocus ne convient pas',
        items: [
          '**Lecteur voulant FLUX, SD 3.5 ou toute architecture de modèle postérieure à 2024.** Le README de Fooocus indique lui-même qu\'aucun support d\'architectures plus récentes n\'est actuellement prévu — les lecteurs voulant les modèles les plus récents devraient utiliser plutôt [ComfyUI](https://github.com/comfy-org/ComfyUI), [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) ou [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge).',
          '**Utilisateur avancé voulant un contrôle fin sur chaque étape du pipeline de génération.** Toute la philosophie de conception de Fooocus consiste à masquer les paramètres ; qui veut inspecter ou recâbler chaque étape d\'un pipeline de diffusion devrait plutôt utiliser le graphe de nœuds de ComfyUI.',
          '**Lecteur dépendant du projet d\'origine pour des correctifs rapides ou de nouvelles fonctionnalités.** Le dépôt d\'origine est explicitement en mode correctifs uniquement, sans feuille de route engagée — qui a besoin d\'un développement actif de fonctionnalités devrait évaluer le [fork mashb1t/Fooocus maintenu par la communauté](https://github.com/mashb1t/Fooocus) ou une interface totalement différente.',
          '**Équipe ayant besoin d\'un traitement par lots de niveau production ou d\'un flux orienté API.** Fooocus est construit autour d\'une interface Gradio mono-utilisateur, pas d\'un serveur API — qui construit un pipeline automatisé devrait plutôt regarder le mode API de ComfyUI ou InvokeAI.',
          '**Lecteur ayant besoin d\'un conditionnement lourd de pose/profondeur façon ControlNet.** Fooocus utilise son propre système simplifié « Image Prompt » plutôt que d\'exposer la sélection complète de modèles ControlNet ; qui a besoin d\'un contrôle précis de pose ou de profondeur devrait utiliser AUTOMATIC1111, WebUI Forge ou ComfyUI avec des modèles ControlNet dédiés.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Fooocus est-il gratuit ?',
            a: 'Oui. Fooocus est un logiciel gratuit et open source sous licence GPL-3.0, sans formule payante, abonnement ni produit commercial officiel. Les checkpoints SDXL téléchargés par défaut (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) sont eux aussi gratuits, mais chacun possède sa propre licence distincte régissant l\'usage commercial des images générées.',
          },
          {
            q: 'Fooocus est-il encore mis à jour ?',
            a: 'Il est dans un état d\'activité réduite, pas abandonné. Le README du projet indique qu\'il est en mode « Limited Long-Term Support (LTS) avec correctifs uniquement » : la dernière version taguée était la v2.5.5, le 12 août 2024, et aucun support d\'architectures de modèle plus récentes comme FLUX n\'est prévu. Le dépôt GitHub n\'est pas archivé et a continué de recevoir des commits aussi récents que décembre 2025, et le contributeur mashb1t maintient un fork activement mis à jour sur github.com/mashb1t/Fooocus.',
          },
          {
            q: 'Qui a créé Fooocus ?',
            a: 'Fooocus a été créé par Lvmin Zhang, qui publie sous l\'identifiant GitHub lllyasviel. Zhang est doctorant en informatique à l\'université de Stanford, également connu pour avoir créé ControlNet, dont l\'article a remporté le Marr Prize (prix du meilleur article de l\'ICCV 2023), ainsi que WebUI Forge, PaintsUndo et IC-Light.',
          },
          {
            q: 'De combien de VRAM Fooocus a-t-il besoin ?',
            a: 'Le minimum est de 4 Go de VRAM sur un GPU Nvidia des séries RTX 2000, 3000 ou 4000, plus 8 Go de RAM système avec la mémoire d\'échange virtuelle activée. Les cartes Nvidia GTX 900/1000 plus anciennes nécessitent environ 8 Go de VRAM, les GPU AMD environ 8 Go de VRAM via DirectML (Windows, bêta) ou ROCm (Linux, bêta), et un fonctionnement CPU seul est possible avec 32 Go de RAM système mais tourne environ 17 fois plus lentement qu\'un GPU Nvidia de série RTX 3000.',
          },
          {
            q: 'Qu\'est-ce que l\'expansion de prompt basée sur GPT-2 dans Fooocus ?',
            a: 'C\'est un moteur de traitement de prompt fonctionnant hors ligne, proposé dans l\'interface comme le style « Fooocus V2 », qui enrichit automatiquement les prompts courts ou vagues avec des détails stylistiques et compositionnels supplémentaires avant la génération — un concept proche du prétraitement caché des prompts de Midjourney ou du « Prompt Magic » de LeonardoAI. Il fonctionne en local et ne nécessite pas de connexion internet.',
          },
          {
            q: 'Fooocus est-il meilleur qu\'AUTOMATIC1111 ou ComfyUI ?',
            a: 'Cela dépend de l\'objectif. Fooocus est plus simple pour débuter car il masque les paramètres techniques derrière des préréglages, au prix d\'un contrôle fin. La WebUI d\'AUTOMATIC1111 (ou son fork WebUI Forge) expose directement chaque paramètre et dispose du plus grand écosystème d\'extensions de toutes les interfaces Stable Diffusion locales. ComfyUI offre un contrôle total du pipeline via un graphe de nœuds et est généralement le premier à supporter les nouvelles sorties de modèles. Les lecteurs qui dépassent les possibilités des préréglages de Fooocus passent en général à l\'une de ces deux options.',
          },
          {
            q: 'Fooocus prend-il en charge FLUX ou Stable Diffusion 3.5 ?',
            a: 'Non. Fooocus est entièrement construit sur l\'architecture Stable Diffusion XL, et son propre README indique qu\'aucun ajout de support pour des architectures plus récentes comme FLUX n\'est actuellement prévu. Les lecteurs voulant FLUX ou SD 3.5 dans une configuration tout aussi locale devraient utiliser plutôt ComfyUI, SwarmUI ou WebUI Forge.',
          },
          {
            q: 'Où télécharger Fooocus ?',
            a: 'La seule source officielle est le [dépôt GitHub lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus), où un package Windows en un clic est publié dans la section Releases. Le README du projet met explicitement en garde contre les domaines comme fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro et fooocus.one, qui sont de faux sites sans aucun lien avec le vrai projet.',
          },
          {
            q: 'Quel est le modèle par défaut utilisé par Fooocus ?',
            a: 'Fooocus télécharge automatiquement un checkpoint SDXL par défaut différent selon le préréglage lancé : Juggernaut XL v8 (Rundiffusion) pour le préréglage General, RealisticStockPhoto v2.0 pour Realistic et AnimaPencilXL v5.0 pour Anime. Les trois sont des checkpoints entraînés par la communauté, hébergés indépendamment de Fooocus lui-même.',
          },
          {
            q: 'Puis-je utiliser commercialement les images générées avec Fooocus ?',
            a: 'La licence GPL-3.0 propre à Fooocus couvre le code applicatif, pas les images produites. L\'usage commercial d\'une image générée est régi par la licence du checkpoint précis utilisé pour la créer — les checkpoints par défaut (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) possèdent chacun leur propre licence distincte, généralement une variante de CreativeML OpenRAIL-M, publiée sur leur page Civitai ou Hugging Face. Vérifier cette page avant tout usage commercial.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Fooocus mérite sa réputation de moyen le plus simple d\'exécuter Stable Diffusion en local — la conception autour des préréglages et de l\'expansion de prompt supprime réellement la partie la plus raide de la courbe d\'apprentissage qui rend AUTOMATIC1111 et ComfyUI intimidants pour un premier utilisateur, tout en fonctionnant entièrement hors ligne sur un matériel aussi modeste qu\'un GPU à 4 Go de VRAM. La réserve honnête concerne la maintenance : le README du projet d\'origine le place lui-même en mode correctifs uniquement, sans version taguée depuis août 2024 et sans projet de support de FLUX ou d\'autres architectures postérieures à 2024, même si le dépôt reste actif et non archivé. Les lecteurs cherchant le point d\'entrée le plus simple possible dans la génération d\'images locale basée sur SDXL, sans avoir besoin des architectures de modèle les plus récentes ni d\'un contrôle fin du pipeline, trouveront dans Fooocus exactement ce qu\'il promet. Ceux qui recherchent soit davantage de contrôle (ComfyUI, AUTOMATIC1111/WebUI Forge), soit des modèles plus récents dans une configuration tout aussi locale (ComfyUI, SwarmUI), devraient regarder au-delà de Fooocus — idéalement après avoir vérifié directement sur [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) l\'état actuel du projet.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[lllyasviel/Fooocus — dépôt GitHub et README](https://github.com/lllyasviel/Fooocus) — source principale pour les fonctionnalités, l\'installation, le tableau de configuration matérielle minimale, la licence et la déclaration d\'état de maintenance « Limited Long-Term Support ».',
          '[lllyasviel/Fooocus — Releases](https://github.com/lllyasviel/Fooocus/releases) — historique et dates des versions, y compris la plus récente taguée, v2.5.5 (12 août 2024).',
          '[mashb1t/Fooocus — dépôt GitHub](https://github.com/mashb1t/Fooocus) — fork maintenu par la communauté avec une activité de commits plus récente que le dépôt d\'origine.',
          '[lllyasviel/ControlNet — dépôt GitHub](https://github.com/lllyasviel/ControlNet) — projet antérieur du créateur Lvmin Zhang, cité en contexte sur le développeur.',
          '[Lvmin Zhang — page académique personnelle](https://lllyasviel.github.io/lvmin_zhang/) — parcours biographique et de recherche du créateur.',
          '[Scientific American — portrait de Lvmin Zhang](https://www.scientificamerican.com/article/lvmin-zhang/) — portrait indépendant sur le travail de Zhang en matière d\'outils d\'IA, dont Fooocus et ControlNet.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Stable Diffusion : test des modèles locaux gratuits de texte à image](/fr/power-local-llm/stable-diffusion-review) — la famille de modèles ouverts sous-jacente sur laquelle fonctionne Fooocus, avec conditions de licence et historique des versions.',
          '[Génération d\'images IA locale contre cloud : FLUX, SD 3.5, Qwen-Image contre Adobe Firefly et getimg.ai](/fr/power-local-llm/local-ai-image-generation-vs-cloud) — une comparaison plus approfondie des familles de modèles d\'images locaux pour les lecteurs dépassant le périmètre SDXL exclusif de Fooocus.',
          '[Répertoire des logiciels LLM locaux 2026](/fr/power-local-llm/local-llm-software-directory) — répertoire complet d\'applications et d\'outils pour toutes les plateformes.',
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
    heroImage: '/images/fooocus-review-hero-ja.webp',
    title: 'Fooocusレビュー(2026):最もシンプルなローカルStable Diffusion UI',
    seoTitle: 'Fooocusレビュー2026:最も簡単なローカルStable Diffusion UI',
    intro:
      'Fooocusは、Stable Diffusion XL向けの無料・オープンソース・完全オフラインの画像生成インターフェースです。開発者はLvmin Zhang氏(GitHubアカウント名lllyasviel、[ControlNet](https://github.com/lllyasviel/ControlNet)の開発者としても知られています)。Fooocusはサンプラー、CFGスケール、解像度グリッドといった技術的な設定のほぼすべてを意図的に隠し、プリセットと自動プロンプト拡張エンジンに置き換えることで、空のテキストボックスから約3クリックで画像が完成する体験を実現しています。このレビューでは、Fooocusが実際に内部で何をしているか、GPL-3.0ライセンス、実際のハードウェア要件、そして最も重要な現在のメンテナンス状況について正直に解説します。オリジナルのリポジトリは公式に、現在はバグ修正のみのモードに入ったと表明しています。',
    metaDescription:
      'Fooocusレビュー2026:ControlNet開発者lllyasvielによる初心者向けローカルStable Diffusion UI — 実際のVRAM要件、GPL-3.0ライセンス、正直なメンテナンス状況(2024年以降LTS/バグ修正のみ)。',
    twitterDescription:
      'Fooocusレビュー2026:ControlNet開発者による、最もクリック数の少ないローカルStable Diffusion UI — VRAM要件、GPT-2ベースのプロンプト拡張、GPL-3.0ライセンス、そしてメンテナンス状況の本当のところ。',
    audience:
      'AUTOMATIC1111やComfyUIを学ばずに、できるだけシンプルにStable Diffusionをローカルで動かしたい読者向け — インストール手順、ハードウェア要件、プロジェクトが今も活発に保守されているかを解説します。',
    readTime: '10分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'Fooocus レビュー',
    targetKeywords: [
      'fooocus レビュー',
      'fooocus vs comfyui',
      'fooocus vs automatic1111',
      '最も簡単な stable diffusion ui',
      'fooocus vram 要件',
      'fooocus メンテナンス状況',
      'fooocus ダウンロード',
      'fooocus ライセンス',
    ],
    current_models_mentioned: ['Stable Diffusion XL', 'Juggernaut XL v8 (Rundiffusion)', 'realisticStockPhoto v2.0', 'animaPencilXL v5.0', 'FLUX.1'],
    current_hardware_mentioned: ['4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '8 GBシステムRAM', '32 GBシステムRAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Fooocusは、ほぼすべての技術設定をプリセットの背後に隠す、無料・オープンソースのStable Diffusion XL用ローカルインターフェースで、最も導入しやすいローカル画像生成UIです — ただし、オリジナルプロジェクトは現在「Limited Long-Term Support(LTS)with Bug Fixes Only」の状態にあり、2024年8月以降タグ付きリリースはありません。** 最小4 GB VRAM(Nvidia RTX 2000/3000/4000シリーズ)と8 GBシステムRAMがあればオフラインで動作し、GPT-2ベースのプロンプト拡張エンジンでスタイルやディテールを自動的に補完し、GPL-3.0ライセンスの下で配布されています。新しいアーキテクチャ(FLUXなど)には対応していないため、最新モデルを求める読者は同じ開発者エコシステムの[ComfyUI](https://github.com/comfy-org/ComfyUI)や[WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)も確認すべきです。「積極的に開発されている」と判断する前に、[GitHub](https://github.com/lllyasviel/Fooocus)で現在のリポジトリの活動状況を確認してください。',
    quickAnswerTop: {
      ja: {
        question: 'Fooocusは今もメンテナンスされていますか?VRAMはどのくらい必要ですか?',
        answer:
          'Fooocusは放棄されたわけではありませんが、公式のREADMEはプロジェクトが「Limited Long-Term Support(LTS)with Bug Fixes Only」モードに入ったと明記しています — 最後のタグ付きリリースは2024年8月12日のv2.5.5で、FLUXのような新しいアーキテクチャをサポートする計画はありません。GitHubリポジトリはアーカイブされておらず、コミットは続いています(直近は2025年12月)。また、コントリビューターのmashb1t氏がgithub.com/mashb1t/Fooocusで活発に更新されるフォークを維持しています。Fooocusを動作させるには、最低でもNvidia RTX 2000/3000/4000シリーズGPUで4 GB VRAM、8 GBのシステムRAM(仮想スワップ有効)が必要です。',
        bullets: [
          '開発者:Lvmin Zhang(lllyasviel)、スタンフォード大学コンピュータサイエンス博士課程の学生。ControlNetの開発者としても知られ、その論文はMarr Prize(ICCV 2023の最優秀論文賞)を受賞しました。',
          '状況:オリジナルリポジトリは2024年以降バグ修正のみのモード。FLUXや新しいモデルのサポート計画はなし。アーカイブされておらず、コミットは継続中。',
          '最小ハードウェア:4 GB VRAM(Nvidia RTX 2000/3000/4000シリーズ)と、スワップを有効にした8 GBシステムRAM。古いGTX 900/1000シリーズは8 GB VRAMが必要。',
          'ライセンス:アプリケーションコードはGPL-3.0。デフォルトのSDXLチェックポイント(Juggernaut XLなど)はそれぞれ独自の別ライセンスを持つ。',
          '特徴的な機能:不足しているディテールを自動的に補完するオフラインのGPT-2ベースのプロンプト拡張エンジン(「Fooocus V2」スタイル)。Midjourneyの非公開の前処理に似ている。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Fooocusとは', anchor: 'what-is-fooocus' },
      { label: 'プロジェクトの歴史と開発者', anchor: 'project-history' },
      { label: '現在のメンテナンス状況(2026年)', anchor: 'maintenance-status' },
      { label: 'インストールと実行方法', anchor: 'how-to-install' },
      { label: 'プロンプト拡張と内蔵スタイル', anchor: 'prompt-expansion-styles' },
      { label: 'ライセンスと商用利用', anchor: 'license-commercial-use' },
      { label: 'ハードウェア要件', anchor: 'hardware-requirements' },
      { label: '料金', anchor: 'pricing' },
      { label: 'Fooocusと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Fooocusが向いている人', anchor: 'who-should-use' },
      { label: 'Fooocusが向いていない人', anchor: 'who-should-not-use' },
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
          'Fooocusは、手動調整を最小限に抑えるよう設計された、無料・オープンソース・完全オフラインのStable Diffusion XLインターフェースです — 開発者によれば、最初の画像生成までに必要なマウスクリックは3回未満です。',
          '開発者はLvmin Zhang氏、GitHubアカウント名lllyasviel。スタンフォード大学コンピュータサイエンス博士課程の学生で、[ControlNet](https://github.com/lllyasviel/ControlNet)の開発者としても知られ、その論文はMarr Prize(ICCV 2023の最優秀論文賞)を受賞しました。',
          'プロジェクトの公式READMEは現在「Limited Long-Term Support(LTS)with Bug Fixes Only」状態であると明記しています。最後のタグ付きリリースは2024年8月12日のv2.5.5で、FLUXのような新しいモデルアーキテクチャをサポートする現在の計画はありません。',
          'GitHubリポジトリはアーカイブされておらず、コミットは継続しています(直近は2025年12月)。コントリビューターのmashb1t氏は[github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus)で活発に更新されるフォークを維持しています。',
          '最小ハードウェアはNvidia RTX 2000/3000/4000シリーズGPUで4 GB VRAM、加えて仮想スワップを有効にした8 GBシステムRAM。古いGTX 900/1000シリーズは約8 GB VRAMが必要です。',
          'FooocusはGPL-3.0ライセンスで、有料プランなしの100%無料です — ただし、デフォルトでダウンロードされるSDXLチェックポイント(Juggernaut XL、RealisticStockPhoto、AnimaPencilXL)はそれぞれCivitai/Hugging Face上で独自の別ライセンスを持ちます。',
        ],
      },
      whatIsFooocus: {
        id: 'what-is-fooocus',
        title: 'Fooocusとは',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocusは、技術パラメータをプリセットと自動プロンプト拡張の背後に隠し、「プロンプトを入力するだけ」の体験を目指す、無料でオフライン動作するGradioベースのStable Diffusion XLインターフェースです。' },
          { type: 'plain-terms', text: 'AUTOMATIC1111やComfyUIが技術的な操作パネルや配線図だとすれば、Fooocusは単一の「生成」ボタンに近い存在です — ほとんどの判断を代わりに行い、詳細設定は自分から探しに行かない限り表示されません。' },
        ],
        content: [
          '**Fooocusは、Stable Diffusion XL(SDXL)アーキテクチャを完全に基盤とし、GPL-3.0ライセンスの下で無料・オープンソースソフトウェアとして配布されている、ローカルでオフライン動作する画像生成アプリケーションです。** AUTOMATIC1111のタブベースの技術的インターフェースやComfyUIのノードグラフエディタとは異なり、Fooocusは意図的にほとんどの手動制御を排除しています — 表示されるサンプラー選択肢はなく、デフォルトでCFGスケールのスライダーもなく、解像度グリッドもありません — そのかわりに少数のプリセット(General、Realistic、Anime)と、完全に無視できる「Advanced」パネルを用意しています。',
          'このプロジェクトは、多くの他のローカルAIツールでも使われているPython製Web UIフレームワーク[Gradio](https://www.gradio.app/)上で動作します。インターフェースはMidjourneyやLeonardoAIの機能リストを意図的に踏襲しており、それぞれのコマンド(`--style`、`--ar`、V1〜V4のバリエーション、アップスケーリング)をFooocusの対応機能に置き換えています。これにより、これらのクラウドツールから移行してきたユーザーが馴染みやすいメンタルモデルを得られます。',
          'プロジェクトの公式ドキュメントが直接述べている中核的な設計目標は、Fooocusのダウンロードから最初の画像生成までのマウスクリック数を3回未満に抑えることです。この単一の設計上の制約こそが — 特定のモデル面での革新ではなく — Fooocusを他のStable Diffusionフロントエンドと差別化しています。それはUI/UXレイヤーであり、新しいモデルではないのです。',
        ],
      },
      projectHistory: {
        id: 'project-history',
        title: 'プロジェクトの歴史と開発者',
        content: [
          '**FooocusはLvmin Zhang氏が開発し、GitHubアカウント名lllyasvielとして公開しています。リポジトリは2023年8月9日にGitHub上で作成されました。** Zhang氏はスタンフォード大学のコンピュータサイエンス博士課程の学生で、制御可能な生成モデリングとコンピュータグラフィックスを研究しています。',
          'Zhang氏はStable Diffusionコミュニティでは独立して、テキストから画像への拡散モデルに正確な空間的条件付け(ポーズ、深度、エッジマップ)を加えたニューラルネットワークアーキテクチャである[ControlNet](https://github.com/lllyasviel/ControlNet)の開発者としても知られています。ControlNetの論文は、コンピュータビジョン分野で最も競争が激しい会議の一つであるInternational Conference on Computer Vision(ICCV)2023において、最優秀論文賞であるMarr Prizeを受賞しました。Zhang氏はほかにも、パフォーマンス重視のAUTOMATIC1111フォークである[WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)、PaintsUndo、IC-Lightなど、複数のローカルAIツールを公開しています。',
          'Fooocusは、プロジェクト自身の言葉によれば、[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)と[ComfyUI](https://github.com/comfy-org/ComfyUI)のコードベースを組み合わせて構築されました — 実績のある推論技術を再利用しながら、大幅に簡素化されたフロントエンドを提供しています。2026年9月時点で、このプロジェクトは52,000を超えるGitHubスターと8,600を超えるフォークを集めており、GitHub上で最も星の多いローカル画像生成ツールの一つとなっています。',
          '**プロジェクト自身からの安全に関する注意事項:Fooocusには公式ウェブサイトが存在しません。** READMEは、fooocus.com、fooocus.net、fooocus.ai、fooocus.org、fooocus.pro、fooocus.oneといったドメインは偽物であり、本物のプロジェクトとは一切関係がないと明確に警告しています — 唯一の公式情報源は[GitHubリポジトリ](https://github.com/lllyasviel/Fooocus)自体です。',
        ],
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'Fooocusは2026年も保守されていますか?',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocusは放棄されたわけではありませんが、公式READMEはオリジナルプロジェクトが「Limited Long-Term Support(LTS)with Bug Fixes Only」状態にあり、2024年8月以降タグ付きリリースがなく、FLUXなどの新しいアーキテクチャをサポートする計画もないと明記しています。' },
          { type: 'plain-terms', text: '成長し続けるツールというより、完成し安定したツールだと考える方が近いでしょう — 開発者はSDXLベースの機能セットをほぼ完成したと見なしており、新しいモデルのリリースを追いかけ続けてはいません。' },
        ],
        content: [
          '[lllyasviel/FooocusのREADME](https://github.com/lllyasviel/Fooocus)には、**「Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only」**というタイトルのセクションがあり、Stable Diffusion XLアーキテクチャを完全に基盤とするこのプロジェクトは、いまや機能的に完成したものとみなされており、「今後のアップデートは発生し得るバグの修正のみに専念する」と述べられています。READMEは、FLUXのような新しいモデルアーキテクチャへの移行・統合の計画は現時点でないと明記していますが、オープンソースコミュニティが単一の支配的な後継手法に収斂すれば、状況が変わる可能性にも言及しています。',
          '最新モデルを求める読者に対して、README自体が代替プラットフォームを推奨しています — 具体的には(同じ開発者による)[WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)、および[ComfyUI](https://github.com/comfy-org/ComfyUI)やその簡易フロントエンドである[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)です。Fooocus自体でのFLUXサポートを約束するのではなく、これらへの移行を促しています。',
          'これは放棄されたプロジェクトとは異なります。GitHubリポジトリは**アーカイブされておらず**、issueやプルリクエストにも開かれています(このレビュー執筆時点でオープンなissueは314件)。GitHub自体の活動データによれば、直近では2025年12月にもコミットが行われています — 最後のタグ付きリリースから1年以上が経過した後です。READMEはコントリビューターの**mashb1t**氏に対し、コード内の未解決バグを削減した「多大な努力」への謝辞を述べています。mashb1t氏は別途[github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus)でフォークを維持しており、こちらはさらに新しいコミット(直近は2025年10月)を受けています — ただし、このフォークも2024年8月以降新しいタグ付きリリースを出しておらず、本家プロジェクトと同様のペースとなっています。',
          '実用的な結論としては、Fooocusは今日でも安定していて安全にインストールできますが、FLUX、SD 3.5、あるいは2024年以降の他のモデルアーキテクチャをシンプルなUIで求める読者には、Fooocusではそれを見つけられないため、代わりにComfyUI、SwarmUI、WebUI Forgeを検討すべきです。',
        ],
        note: 'メンテナンス状況に関する事実は、2026年9月6日時点でlllyasviel/FooocusのGitHubリポジトリとREADME、およびmashb1t/Fooocusフォークを直接確認して検証しています — プッシュ日時、リリース日、オープンなissue数は時間とともに変化します。この状況が現在も当てはまるかどうかは、判断前に[github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)で再確認してください。',
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'インストールと実行方法',
        content: [
          'Fooocusには、Windows向けのワンクリックパッケージに加えて、Linux、Mac、Docker向けの手動インストール手順が用意されています — デフォルトプリセットについては、初回起動時にFooocusが自動的にデフォルトチェックポイントを取得するため、別途モデルをダウンロードする手順は不要です。',
        ],
        numberedItems: [
          { title: 'Windowsパッケージをダウンロードする(またはLinux/Macでリポジトリをクローンする)', whyItMatters: 'Windowsユーザーは、[GitHubのReleasesページ](https://github.com/lllyasviel/Fooocus/releases)からPython環境が内蔵された自己完結型の`.7z`パッケージを取得できます — 別途Pythonをインストールする必要はありません。LinuxおよびMacユーザーはリポジトリをクローンし、代わりにCondaまたはvenv環境を構築します。' },
          { title: 'パッケージを展開してrun.batを実行する', whyItMatters: 'ダウンロードしたアーカイブを解凍し、`run.bat`をダブルクリックします — これによりGeneralプリセットが起動します。`run_anime.bat`と`run_realistic.bat`はそれぞれAnimeとRealisticプリセットを起動し、それぞれ異なるデフォルトチェックポイントを使用します。' },
          { title: 'Fooocusにデフォルトモデルを自動ダウンロードさせる', whyItMatters: '初回起動時、Fooocusは実行したプリセットに応じたチェックポイントを自動ダウンロードします — Generalの場合はJuggernaut XL v8(Rundiffusion)、Realisticの場合はRealisticStockPhoto v2.0、Animeの場合はAnimaPencilXL v5.0を`Fooocus/models/checkpoints`フォルダに保存します。' },
          { title: 'プロンプトを入力してGenerateをクリックする', whyItMatters: 'サンプラー、CFGスケール、解像度の選択は不要です — Fooocusが自動的に妥当なデフォルト値を適用します。詳細設定は「Advanced」トグルの背後にあり、後で必要になった読者が利用できます。' },
          { title: '必要に応じてImage Prompt、Inpaint、Upscale/Varyを使う', whyItMatters: 'Fooocusは、Midjourney風のワークフロー(画像プロンプト、インペインティング、アップスケーリング、微弱/強めのバリエーション)を独自のUIパネルにマッピングしており、標準的なSDXLのControlNet設定ではなく、独自のインペインティングモデルと画像プロンプトアルゴリズムを使用しています。' },
          { title: '慣れてきたらコミュニティのチェックポイントに切り替える', whyItMatters: 'CivitaiやHugging FaceのSDXLチェックポイントは、`models/checkpoints`フォルダに配置してFooocus内で選択できます。これにより、内蔵の3つのプリセットを超えて機能を拡張できます。' },
        ],
        note: '正確なフォルダパス、ランチャーのフラグ、依存関係のバージョンはリリースごとに変わります — 一般的なガイドではなく、[lllyasviel/FooocusのGitHubページ](https://github.com/lllyasviel/Fooocus)にある最新のセットアップ手順に従ってください。',
      },
      promptExpansionStyles: {
        id: 'prompt-expansion-styles',
        title: 'プロンプト拡張と内蔵スタイル',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocusはオフラインで動作するGPT-2ベースのプロンプト拡張モデルを実行し、「Fooocus V2」というスタイルとして提供されています。これは生成前に、短い、または曖昧なプロンプトへ自動的にディテールを追加します。' },
        ],
        content: [
          '**Fooocusを象徴する機能は、オフラインで動作するGPT-2ベースのプロンプト処理エンジンで、UI上では「Fooocus V2」スタイルとして提供されています。** プロジェクトのドキュメント自体が、これをMidjourneyの非公開のプロンプト前処理やLeonardoAIの「Prompt Magic」と比較しています — その考え方は、「庭にある家」のような短いプロンプトと1,000語のプロンプトの両方が、洗練された一貫性のある結果を生むべきだというものです。これは拡張モデルが不足しているスタイルや構図のディテールを自動的に補完するためです。',
          'Fooocus V2に加えて、このインターフェースには「Fooocus Photograph」、「Fooocus Negative」、「cinematic-default」といった他の内蔵スタイルプリセットも用意されており、プロジェクトのREADMEでクレジットされているコミュニティメンバー(twri、3Diva、Marc K3nt3L)が提供した追加のSDXLスタイルもあります。スタイルは組み合わせることができ、3つのトップレベルプリセットが提供する以上の制御を求める読者向けに、Advancedパネル内で複数を重ねることもできます。',
          'READMEが記録しているその他の内部技術には、単一のk-サンプラー内でのネイティブなリファイナー切り替え(AUTOMATIC1111やComfyUIが2つの独立したサンプラー間で切り替える際に発生するモメンタムの損失を回避する)、SDXLの最高解像度レベル向けに調整されたネガティブADMガイダンス、そして標準的なSDXLのControlNetやIP-Adapterパイプラインの代わりに使用される独自のインペインティングモデルと画像プロンプトアルゴリズムがあります。',
        ],
      },
      licenseCommercialUse: {
        id: 'license-commercial-use',
        title: 'Fooocusのライセンスと商用利用',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocusのアプリケーションコードは、GitHubリポジトリで確認できるとおりGPL-3.0(GNU General Public License バージョン3)の下でライセンスされています — しかし、デフォルトでダウンロードされるSDXLチェックポイントは別のコミュニティモデルであり、それぞれ異なる独自のライセンスを持っています。' },
          { type: 'plain-terms', text: 'Fooocusソフトウェア自体は完全にオープンソースで、無料で使用・改変できます。生成された画像に適用されるライセンスは、それを生成したチェックポイントによって決まります — その画像の商用利用を規定するのは、Fooocusのライセンスではなく、そのチェックポイントのライセンスです。' },
        ],
        content: [
          'Fooocusは**GPL-3.0**(GNU General Public License バージョン3)の下でライセンスされています。これはGitHubリポジトリのライセンスメタデータで確認できます。GPL-3.0は、配布される派生物もGPL-3.0(コピーレフト)の下でリリースされることを条件に、Fooocusのコードベース自体の自由な使用、改変、再配布を認めています — これはアプリケーションコードに適用されるものであり、それを使って生成した画像には適用されません。',
          'Fooocusが自動的にダウンロードする3つのデフォルトチェックポイント — Generalプリセット向けのJuggernaut XL v8(Rundiffusion)、Realistic向けのRealisticStockPhoto v2.0、Anime向けのAnimaPencilXL v5.0 — は、CivitaiやHugging Faceといったプラットフォームで独立してホストされているコミュニティ訓練のStable Diffusion XLファインチューンであり、それぞれ独自の別ライセンス(多くはCreativeML OpenRAIL-Mのバリアントですが、条件はチェックポイントごとに異なり、変更される可能性があります)を持っています。生成した画像を商用利用する予定がある人は、事前にその特定のチェックポイントのライセンスページを確認するべきです — FooocusのGPL-3.0ライセンスは、チェックポイントの条件に自動的に及ぶものではなく、それを上書きするものでもありません。',
          'プロジェクト自体には商業的な側面はありません。READMEは、Fooocusが「a 100% non-commercial offline open-source software」であり、公式ウェブサイトも有料製品もなく、それを販売する企業も存在しないと明確に述べています — 唯一注意すべきなのは、上記の「プロジェクトの歴史と開発者」セクションで触れた偽ドメインに関する警告です。',
        ],
        note: 'このセクションは、2026年9月6日時点で公開されているライセンスのメタデータをまとめたものであり、法的助言ではありません。商用展開の前には、[FooocusのLICENSEファイル](https://github.com/lllyasviel/Fooocus/blob/main/LICENSE)と、該当する特定のチェックポイントのライセンスページを必ず確認してください。',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'ハードウェア要件',
        itemHeadings: true,
        columns: ['GPU', '最小VRAM', '最小RAM', '備考'],
        rows: [
          { 'GPU': 'Nvidia RTX 2000-4000', '最小VRAM': '4 GB VRAM', '最小RAM': '8 GB + スワップ', '備考': '最速クラス。RTX 4000シリーズが最も速い' },
          { 'GPU': 'Nvidia GTX 900/1000', '最小VRAM': '8 GB VRAM(一部で6 GBの報告あり)', '最小RAM': '8 GB + スワップ', '備考': 'CPUよりわずかに速い程度' },
          { 'GPU': 'Nvidia GTX 900より前', '最小VRAM': '非対応', '最小RAM': '—', '備考': '代わりにCPUのみモードを使用' },
          { 'GPU': 'AMD GPU(Windows)', '最小VRAM': '8 GB VRAM(DirectML、ベータ)', '最小RAM': '8 GB + スワップ', '備考': 'Nvidia RTX 3000より約3倍遅い' },
          { 'GPU': 'AMD GPU(Linux)', '最小VRAM': '8 GB VRAM(ROCm、ベータ)', '最小RAM': '8 GB + スワップ', '備考': 'Nvidia RTX 3000より約1.5倍遅い' },
          { 'GPU': 'Apple M1/M2(非公式)', '最小VRAM': '共有システムメモリ', '最小RAM': '共有', '備考': 'Nvidia RTX 3000より約9倍遅い' },
          { 'GPU': 'CPUのみ', '最小VRAM': 'なし(0 GB)', '最小RAM': '32 GB', '備考': 'Nvidia RTX 3000より約17倍遅い' },
        ],
        content: [
          '**Fooocusを動作させるための最小要件は、Nvidia VRAM 4 GBに加えて、仮想スワップを有効にした8 GBのシステムRAMです**。これはプロジェクト自身のREADMEにある仕様表に基づいています。これにより、Fooocusはローカル動作するStable Diffusionインターフェースの中でも導入のハードルが低い部類に入ります。というのも、SDXLチェックポイントは他のインターフェースでは、Fooocusのような内蔵メモリ管理最適化がない場合、8〜12 GBのVRAMを要求することが多いためです。',
          'プロジェクト自身のテスト例では、Nvidia RTX 3060(6 GB VRAM)と16 GBのシステムRAMを搭載したノートPCが、サンプリング1ステップあたり約1.35秒で画像を生成したとされています — これは実際の速度の目安として参考になりますが、実際の速度は解像度、プリセット、現在のGPUドライバーのバージョンによって異なります。',
        ],
        note: 'これらの数値は、2026年9月6日時点のlllyasviel/FooocusのREADMEにある「Minimal Requirement」表から直接引用したものです — AMDおよびMacのサポートは、プロジェクト自身によって明示的にベータ/非公式と分類されており、実際のVRAM使用量は解像度、バッチサイズ、インストールされているドライバーによって変動します。',
      },
      pricing: {
        id: 'pricing',
        title: '料金:無料、有料プランなし',
        content: [
          '**Fooocusは完全に無料で、有料プラン、サブスクリプション、いかなる種類の公式商用製品も存在しません。** このアプリケーションはGPL-3.0ライセンスのオープンソースソフトウェアであり、読者にかかる唯一のコストは自身のハードウェアと電気代です。デフォルトでダウンロードされるチェックポイント(Juggernaut XL、RealisticStockPhoto、AnimaPencilXL)も同様に無料です。',
          '無料の自己ホスト型アプリとオプションの有料クラウドプランを組み合わせている他のローカルAIツールとは異なり、Fooocusにはそのようなものは一切ありません — READMEは、このプロジェクトには公式ウェブサイトも、何かを販売する企業の存在もないことを明確に述べています。「Fooocus Pro」版を販売すると主張するサイトや、[GitHubリポジトリ](https://github.com/lllyasviel/Fooocus)以外のドメインは、本物のプロジェクトとは無関係と見なすべきです。',
        ],
        note: '2026年9月6日時点でプロジェクト自身のREADMEから直接確認済みです — 数年後に商用展開のために評価する場合は、[github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)で再確認してください。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Fooocusと代替ツールの比較',
        columns: ['選択肢', '最適な用途', 'セルフホスト', 'ライセンス/費用', '主なトレードオフ'],
        rows: [
          {
            '選択肢': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '最適な用途': '最初の画像までのクリック数が最少。初心者に手動パラメータ調整が一切不要',
            'セルフホスト': '可能 — 無料、自前のGPU(最小4 GB VRAM)',
            'ライセンス/費用': 'GPL-3.0(アプリ)。デフォルトチェックポイントはそれぞれ独自のライセンス',
            '主なトレードオフ': 'オリジナルリポジトリは2024年8月以降バグ修正のみ。SDXL限定でFLUX非対応',
          },
          {
            '選択肢': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) / [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            '最適な用途': 'ローカルSDフロントエンドの中で最大の拡張機能エコシステムを持つタブ式の技術的UI',
            'セルフホスト': '可能 — 無料、自前のGPU',
            'ライセンス/費用': 'AGPL-3.0、無料',
            '主なトレードオフ': 'すべてのパラメータを直接表示 — Fooocusより学習曲線が急',
          },
          {
            '選択肢': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '最適な用途': 'ビジュアルなノードグラフによるパイプラインの完全な制御。新しいモデルへの対応が最も早いことが多い',
            'セルフホスト': '可能 — 無料、自前のGPU',
            'ライセンス/費用': 'GPL-3.0、無料(別途有料のComfyUIクラウド/APIプランあり)',
            '主なトレードオフ': 'ノードグラフのインターフェースは完全な初心者には本当の意味でセットアップが複雑',
          },
          {
            '選択肢': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            '最適な用途': '統一キャンバスとチーム向けワークフローを備えた洗練されたプロフェッショナルUI',
            'セルフホスト': '可能 — 無料、自前のGPU',
            'ライセンス/費用': 'Apache 2.0、無料(有料のInvoke Cloudプランは2025年のAdobe買収後に終了)',
            '主なトレードオフ': 'AUTOMATIC1111やComfyUIよりコミュニティ拡張機能のエコシステムが小さい',
          },
          {
            '選択肢': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)(旧Stability AIのStableSwarmUI)',
            '最適な用途': 'ComfyUIバックエンド上で動作する簡素化されたタブ式フロントエンド',
            'セルフホスト': '可能 — 無料、自前のGPU',
            'ライセンス/費用': 'MITライセンス、無料',
            '主なトレードオフ': 'ComfyUIやAUTOMATIC1111よりコミュニティが小さい。Fooocusほど初心者向けではない',
          },
        ],
        note: 'これは位置づけの要約であり、ベンチマークによる順位付けではありません。ライセンス、スター数、メンテナンス状況は2026年9月6日時点で各プロジェクトのGitHubリポジトリを直接確認して検証したもので、変更される可能性があります — この記事と上記の各UIが依存する基盤モデルファミリーについては、[Stable Diffusionレビュー](/ja/power-local-llm/stable-diffusion-review)を参照してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Fooocusが向いている人',
        items: [
          '**ローカルAI画像生成をこれまで一度も行ったことがない完全な初心者。** Fooocusのプリセットとプロンプト拡張による設計は、Stable Diffusionの学習曲線で最も急な部分を取り除きます — 使える結果を得るためにサンプラー、CFGスケール、解像度を決める必要はありません。',
          '**サブスクリプションやクラウド依存なしにMidjourneyに近い体験を求める読者。** Fooocusの機能セットは、意図的にMidjourneyのコマンドリスト(スタイル、バリエーション、アップスケーリング)を反映しつつ、ローカルハードウェア上で完全にオフラインで動作します。',
          '**VRAMが少ないGPUの所有者。** 最小4 GB VRAM(Nvidia RTX 2000シリーズ以上)は、AUTOMATIC1111やComfyUIが快適なSDXL利用のために通常推奨する値より低く、古いまたは安価なGPUでもFooocusは妥当な入り口になります。',
          '**SDXLベースのモデルで十分な読者。** 現在のプリセットラインナップ(汎用、リアル、アニメ)が既に自分の用途をカバーしているなら、Fooocusの安定性とシンプルさは、新しいアーキテクチャへの非対応というデメリットを上回ります。',
          '**Civitaiスタイルのプロンプト重み付けがそのまま使えることを重視する読者。** FooocusはAUTOMATIC1111のプロンプト再重み付け構文を使用しているため、Civitaiから直接コピーしたプロンプトも、書式を変更せずに期待どおりに動作します。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Fooocusが向いていない人',
        items: [
          '**FLUX、SD 3.5、または2024年以降のモデルアーキテクチャを求める読者。** FooocusのREADME自体が、新しいアーキテクチャをサポートする現在の計画はないと明記しています — 最新モデルを求める読者は、代わりに[ComfyUI](https://github.com/comfy-org/ComfyUI)、[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)、[WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)を使用すべきです。',
          '**生成パイプラインのあらゆる段階を細かく制御したいパワーユーザー。** Fooocusの設計思想全体は、パラメータを隠すことにあります — 拡散パイプラインの各段階を確認したり配線し直したりしたい人は、代わりにComfyUIのノードグラフを使用すべきです。',
          '**迅速なバグ修正や新機能をオリジナルプロジェクトに頼っている読者。** オリジナルリポジトリは明確にバグ修正のみのモードにあり、確定したロードマップもありません — 積極的な機能開発が必要な人は、[コミュニティが保守するmashb1t/Fooocusフォーク](https://github.com/mashb1t/Fooocus)や、まったく別のUIを検討すべきです。',
          '**本番レベルのバッチ処理やAPIファーストのワークフローが必要なチーム。** FooocusはAPIサーバーではなく、単一ユーザー向けのGradioインターフェースを中心に構築されています — 自動化されたパイプラインを構築するチームは、代わりにComfyUIのAPIモードやInvokeAIを検討すべきです。',
          '**ControlNet相当の強力なポーズ/深度コンディショニングが必要な読者。** Fooocusは、完全なControlNetモデル選択を公開する代わりに、独自の簡素化された「Image Prompt」システムを使用しています — 正確なポーズや深度の制御が必要な人は、専用のControlNetモデルを使ったAUTOMATIC1111、WebUI Forge、ComfyUIを使用すべきです。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Fooocusは無料ですか?',
            a: 'はい。FooocusはGPL-3.0ライセンスの下で提供される無料のオープンソースソフトウェアで、有料プラン、サブスクリプション、公式の商用製品はありません。デフォルトでダウンロードされるSDXLチェックポイント(Juggernaut XL、RealisticStockPhoto、AnimaPencilXL)も無料ですが、それぞれ生成画像の商用利用を規定する独自の別ライセンスを持っています。',
          },
          {
            q: 'Fooocusは今も更新されていますか?',
            a: '放棄されたわけではなく、活動が縮小した状態にあります。プロジェクトのREADMEは「Limited Long-Term Support(LTS)with Bug Fixes Only」モードにあると述べています。最後のタグ付きリリースは2024年8月12日のv2.5.5で、FLUXのような新しいモデルアーキテクチャをサポートする計画はありません。GitHubリポジトリはアーカイブされておらず、2025年12月にもコミットが行われています。コントリビューターのmashb1t氏は、github.com/mashb1t/Fooocusで活発に更新されるフォークを維持しています。',
          },
          {
            q: 'Fooocusは誰が開発しましたか?',
            a: 'FooocusはLvmin Zhang氏が開発し、GitHubアカウント名lllyasvielとして公開しています。Zhang氏はスタンフォード大学のコンピュータサイエンス博士課程の学生で、ControlNetの開発者としても知られています。ControlNetの論文はMarr Prize(ICCV 2023の最優秀論文賞)を受賞しました。また、WebUI Forge、PaintsUndo、IC-Lightの開発者でもあります。',
          },
          {
            q: 'FooocusはどのくらいのVRAMが必要ですか?',
            a: '最小要件は、Nvidia RTX 2000、3000、4000シリーズのいずれかのGPUで4 GB VRAM、加えて仮想スワップを有効にした8 GBのシステムRAMです。古いNvidia GTX 900/1000シリーズは約8 GB VRAM、AMD GPUはDirectML(Windows、ベータ)またはROCm(Linux、ベータ)経由で約8 GB VRAMが必要です。CPUのみでの動作も32 GBのシステムRAMがあれば可能ですが、Nvidia RTX 3000シリーズGPUと比べておよそ17倍遅くなります。',
          },
          {
            q: 'FooocusのGPT-2ベースのプロンプト拡張とは何ですか?',
            a: 'これはオフラインで動作するプロンプト処理エンジンで、UI上では「Fooocus V2」スタイルとして提供されています。生成前に、短い、または曖昧なプロンプトへ、スタイルや構図に関する追加のディテールを自動的に補完します — 概念的にはMidjourneyの非公開のプロンプト前処理や、LeonardoAIの「Prompt Magic」に似ています。ローカルで動作し、インターネット接続は不要です。',
          },
          {
            q: 'FooocusはAUTOMATIC1111やComfyUIより優れていますか?',
            a: '目的によります。Fooocusは技術パラメータをプリセットの背後に隠すため、始めやすい反面、細かい制御は犠牲になります。AUTOMATIC1111のWebUI(またはそのフォークであるWebUI Forge)はすべてのパラメータを直接公開しており、ローカルStable Diffusionフロントエンドの中で最大の拡張機能エコシステムを持っています。ComfyUIはノードグラフによってパイプラインの完全な制御を提供し、新しいモデルのリリースに対応するのが最も早いことが多いです。Fooocusのプリセットでは物足りなくなった読者は、通常これら2つのいずれかに移行します。',
          },
          {
            q: 'FooocusはFLUXやStable Diffusion 3.5に対応していますか?',
            a: 'いいえ。Fooocusは完全にStable Diffusion XLアーキテクチャを基盤としており、公式README自体が、FLUXのような新しいアーキテクチャのサポートを追加する現在の計画はないと述べています。同様にローカルなセットアップでFLUXやSD 3.5を求める読者は、代わりにComfyUI、SwarmUI、WebUI Forgeを使用すべきです。',
          },
          {
            q: 'Fooocusはどこでダウンロードできますか?',
            a: '唯一の公式情報源は[GitHubリポジトリlllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)で、ReleasesセクションにWindows向けのワンクリックパッケージが公開されています。プロジェクトのREADME自体が、fooocus.com、fooocus.net、fooocus.ai、fooocus.org、fooocus.pro、fooocus.oneといったドメインは、本物のプロジェクトとは一切関係のない偽サイトであると明確に警告しています。',
          },
          {
            q: 'Fooocusが使用するデフォルトモデルは何ですか?',
            a: 'Fooocusは、起動したプリセットに応じて異なるデフォルトのSDXLチェックポイントを自動ダウンロードします。Generalプリセットの場合はJuggernaut XL v8(Rundiffusion)、Realisticの場合はRealisticStockPhoto v2.0、Animeの場合はAnimaPencilXL v5.0です。いずれもFooocus自体とは独立してホストされている、コミュニティが訓練したチェックポイントです。',
          },
          {
            q: 'Fooocusで生成した画像は商用利用できますか?',
            a: 'FooocusのGPL-3.0ライセンス自体は、アプリケーションコードを対象としており、生成された画像は対象としていません。生成画像の商用利用は、それを作成するために使用した特定のチェックポイントのライセンスによって規定されます — デフォルトのチェックポイント(Juggernaut XL、RealisticStockPhoto、AnimaPencilXL)はそれぞれ独自の別ライセンス(多くの場合CreativeML OpenRAIL-Mのバリアント)を持ち、CivitaiまたはHugging Faceのページで公開されています。商用利用の前にそのページを確認してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'FooocusはStable Diffusionをローカルで動かす最も簡単な方法という評判にふさわしい存在です — プリセットとプロンプト拡張による設計は、AUTOMATIC1111やComfyUIを初めてのユーザーにとって威圧的なものにしている、学習曲線の最も急な部分を実際に取り除いています。しかも、4 GB VRAMのGPUという控えめなハードウェアで完全にオフライン動作しながらそれを実現しています。正直に言うべき懸念点はメンテナンスです。オリジナルプロジェクト自身のREADMEは、これをバグ修正のみのモードに位置づけており、2024年8月以降タグ付きリリースがなく、FLUXや2024年以降の他のアーキテクチャをサポートする計画もありません。ただしリポジトリは活発で、アーカイブもされていません。SDXLベースのローカル画像生成への最もシンプルな入り口を求め、最新のモデルアーキテクチャや細かいパイプライン制御を必要としない読者にとって、Fooocusはまさに約束どおりのものを提供します。より高い制御性(ComfyUI、AUTOMATIC1111/WebUI Forge)、あるいは同様にローカルなセットアップでの新しいモデル(ComfyUI、SwarmUI)を求める読者は、Fooocusではなくそちらを検討すべきです — できれば、[github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)でプロジェクトの現在の状況を直接確認したうえで判断してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[lllyasviel/Fooocus — GitHubリポジトリとREADME](https://github.com/lllyasviel/Fooocus) — 機能、インストール、ハードウェア最小要件の表、ライセンス、「Limited Long-Term Support」というメンテナンス状況の記述に関する一次情報源。',
          '[lllyasviel/Fooocus — Releases](https://github.com/lllyasviel/Fooocus/releases) — 最新のタグ付きリリースv2.5.5(2024年8月12日)を含むリリース履歴と日付。',
          '[mashb1t/Fooocus — GitHubリポジトリ](https://github.com/mashb1t/Fooocus) — 本家リポジトリよりも新しいコミット活動を持つ、コミュニティが保守するフォーク。',
          '[lllyasviel/ControlNet — GitHubリポジトリ](https://github.com/lllyasviel/ControlNet) — 開発者Lvmin Zhang氏の以前のプロジェクトで、開発者の背景情報として参照。',
          '[Lvmin Zhang — 個人の学術ページ](https://lllyasviel.github.io/lvmin_zhang/) — 開発者の経歴と研究に関する背景情報。',
          '[Scientific American — Lvmin Zhang氏のプロフィール](https://www.scientificamerican.com/article/lvmin-zhang/) — FooocusやControlNetを含むZhang氏のAIツールに関する取り組みを扱った独立系メディアのプロフィール記事。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Stable Diffusionレビュー:無料のローカルText-to-Imageモデル](/ja/power-local-llm/stable-diffusion-review) — Fooocusが動作する基盤となるオープンウェイトモデルファミリーについて、ライセンス条件やバージョン履歴を含めて解説。',
          '[ローカルAI画像生成 vs. クラウド:FLUX、SD 3.5、Qwen-Image vs. Adobe Firefly & getimg.ai](/ja/power-local-llm/local-ai-image-generation-vs-cloud) — FooocusのSDXL限定という範囲を超えたい読者向けに、ローカル画像モデルファミリーをより深く比較。',
          '[ローカルLLMソフトウェアディレクトリ2026](/ja/power-local-llm/local-llm-software-directory) — 全プラットフォーム対応の包括的なアプリ・ツールディレクトリ。',
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
    heroImage: '/images/fooocus-review-hero-pt.webp',
    title: 'Fooocus: Análise (2026) da interface local de Stable Diffusion mais simples',
    seoTitle: 'Fooocus: Análise 2026 da UI local de Stable Diffusion mais fácil',
    intro:
      'Fooocus é uma interface de geração de imagens gratuita, de código aberto e totalmente offline para Stable Diffusion XL, criada por Lvmin Zhang (usuário do GitHub lllyasviel, também conhecido pelo [ControlNet](https://github.com/lllyasviel/ControlNet)). Ela oculta deliberadamente quase todos os controles técnicos — samplers, escala CFG, grades de resolução — atrás de predefinições e um mecanismo automático de expansão de prompt, permitindo ir de uma caixa de texto vazia a uma imagem finalizada em cerca de três cliques. Esta análise mostra o que o Fooocus realmente faz por baixo dos panos, sua licença GPL-3.0, os requisitos reais de hardware e, o mais importante, seu status de manutenção atual de forma honesta, já que o repositório original declarou publicamente estar agora em modo de apenas correções de bugs.',
    metaDescription:
      'Fooocus, análise 2026: a UI local de Stable Diffusion mais fácil para iniciantes, do criador do ControlNet, lllyasviel — requisitos reais de VRAM, licença GPL-3.0 e status de manutenção honesto (LTS/apenas correções desde 2024).',
    twitterDescription:
      'Fooocus, análise 2026: a UI local de Stable Diffusion com menos cliques, do criador do ControlNet — necessidades de VRAM, expansão de prompt com GPT-2, licença GPL-3.0 e a verdade sobre sua manutenção.',
    audience:
      'Leitores que querem a forma mais simples de rodar Stable Diffusion localmente sem aprender AUTOMATIC1111 ou ComfyUI — cobre instalação, requisitos de hardware e se o projeto ainda é mantido ativamente.',
    readTime: '10 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'Fooocus análise',
    targetKeywords: [
      'fooocus análise',
      'fooocus vs comfyui',
      'fooocus vs automatic1111',
      'ui de stable diffusion mais fácil',
      'requisitos de vram fooocus',
      'status de manutenção do fooocus',
      'baixar fooocus',
      'licença do fooocus',
    ],
    current_models_mentioned: ['Stable Diffusion XL', 'Juggernaut XL v8 (Rundiffusion)', 'realisticStockPhoto v2.0', 'animaPencilXL v5.0', 'FLUX.1'],
    current_hardware_mentioned: ['4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '8 GB de RAM', '32 GB de RAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Fooocus é uma interface local gratuita e de código aberto para Stable Diffusion XL que esconde quase todos os ajustes técnicos atrás de predefinições, tornando-se a UI local de geração de imagens mais fácil para começar — mas o projeto original está agora em estado de "Limited Long-Term Support (LTS) com apenas correções de bugs", sem nenhum lançamento com tag desde agosto de 2024.** Ele roda offline com apenas 4 GB de VRAM (Nvidia série RTX 2000/3000/4000) e 8 GB de RAM do sistema, usa um mecanismo de expansão de prompt baseado em GPT-2 que adiciona estilo e detalhe automaticamente, e é distribuído sob a licença GPL-3.0. Ele não oferece suporte a arquiteturas mais novas (sem FLUX), então quem quiser os modelos mais recentes deve também considerar o [ComfyUI](https://github.com/comfy-org/ComfyUI) ou o [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge), ambos do mesmo ecossistema de desenvolvedor. Verifique a atividade atual do repositório no [GitHub](https://github.com/lllyasviel/Fooocus) antes de considerá-lo ativamente desenvolvido.',
    quickAnswerTop: {
      pt: {
        question: 'O Fooocus ainda é mantido, e quanta VRAM ele precisa?',
        answer:
          'O Fooocus não foi abandonado, mas seu próprio README declara que o projeto entrou em modo "Limited Long-Term Support (LTS) com apenas correções de bugs" — o último lançamento com tag foi a v2.5.5 em 12 de agosto de 2024, e não há planos de suportar arquiteturas mais novas como o FLUX. O repositório no GitHub não está arquivado e continua recebendo commits (o mais recente em dezembro de 2025), e o colaborador mashb1t mantém um fork atualizado ativamente em github.com/mashb1t/Fooocus. O Fooocus precisa de no mínimo 4 GB de VRAM em uma GPU Nvidia da série RTX 2000/3000/4000 e 8 GB de RAM do sistema (com memória de troca virtual ativada) para funcionar.',
        bullets: [
          'Criador: Lvmin Zhang (lllyasviel), doutorando em ciência da computação em Stanford, também conhecido por criar o ControlNet, cujo artigo venceu o Marr Prize (o principal prêmio de melhor artigo da ICCV 2023).',
          'Status: o repositório original está em modo apenas correções de bugs desde 2024; nenhum suporte a FLUX ou modelos mais novos está planejado. Não arquivado — continua recebendo commits.',
          'Hardware mínimo: 4 GB de VRAM (Nvidia série RTX 2000/3000/4000) e 8 GB de RAM com memória de troca ativada; placas GTX 900/1000 mais antigas precisam de 8 GB de VRAM.',
          'Licença: GPL-3.0 para o código da aplicação; os checkpoints SDXL padrão (Juggernaut XL, etc.) têm cada um sua própria licença separada.',
          'Recurso distintivo: um mecanismo de expansão de prompt baseado em GPT-2 que funciona offline (estilo "Fooocus V2") que preenche automaticamente detalhes ausentes, semelhante ao pré-processamento oculto do Midjourney.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Fooocus', anchor: 'what-is-fooocus' },
      { label: 'Histórico do projeto e criador', anchor: 'project-history' },
      { label: 'Status de manutenção atual (2026)', anchor: 'maintenance-status' },
      { label: 'Como instalar e executar o Fooocus', anchor: 'how-to-install' },
      { label: 'Expansão de prompt e estilos integrados', anchor: 'prompt-expansion-styles' },
      { label: 'Licença e uso comercial', anchor: 'license-commercial-use' },
      { label: 'Requisitos de hardware', anchor: 'hardware-requirements' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Fooocus vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Fooocus é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o Fooocus não é indicado', anchor: 'who-should-not-use' },
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
          'O Fooocus é uma interface de Stable Diffusion XL gratuita, de código aberto e totalmente offline, criada para minimizar o ajuste manual — o desenvolvedor descreve chegar à primeira imagem em menos de três cliques do mouse.',
          'Criado por Lvmin Zhang, cujo usuário no GitHub é lllyasviel, doutorando em ciência da computação em Stanford, também conhecido por criar o [ControlNet](https://github.com/lllyasviel/ControlNet), cujo artigo venceu o Marr Prize (principal prêmio de melhor artigo da ICCV 2023).',
          'O próprio README do projeto declara que ele está agora em status "Limited Long-Term Support (LTS) com apenas correções de bugs": o último lançamento com tag foi a v2.5.5 em 12 de agosto de 2024, e atualmente não há planos de suportar arquiteturas de modelo mais novas, como o FLUX.',
          'O repositório no GitHub não está arquivado e continuou recebendo commits (o mais recente em dezembro de 2025); o colaborador mashb1t mantém um fork atualizado ativamente em [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus).',
          'O hardware mínimo é 4 GB de VRAM em uma GPU Nvidia da série RTX 2000/3000/4000, mais 8 GB de RAM do sistema com memória de troca virtual ativada; placas GTX 900/1000 mais antigas precisam de cerca de 8 GB de VRAM.',
          'O Fooocus é licenciado sob GPL-3.0, 100% gratuito, sem nenhum nível pago — mas os checkpoints SDXL padrão que ele baixa (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) têm cada um sua própria licença separada no Civitai/Hugging Face.',
        ],
      },
      whatIsFooocus: {
        id: 'what-is-fooocus',
        title: 'O que é o Fooocus',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Fooocus é uma interface gratuita, offline e baseada em Gradio para Stable Diffusion XL que esconde parâmetros técnicos atrás de predefinições e expansão automática de prompt, buscando uma experiência de "basta digitar o prompt".' },
          { type: 'plain-terms', text: 'Se o AUTOMATIC1111 e o ComfyUI são um painel de controle técnico e um diagrama de fiação, o Fooocus se aproxima mais de um único botão de "gerar" — ele toma a maioria das decisões por você e só exibe configurações avançadas se você procurar por elas.' },
        ],
        content: [
          '**O Fooocus é um aplicativo local e offline de geração de imagens, construído inteiramente sobre a arquitetura Stable Diffusion XL (SDXL), distribuído como software livre e de código aberto sob a licença GPL-3.0.** Diferente da interface técnica baseada em abas do AUTOMATIC1111 ou do editor de grafo de nós do ComfyUI, o Fooocus remove deliberadamente a maioria dos controles manuais — sem seletor de sampler visível, sem controle deslizante de escala CFG por padrão, sem grade de resolução — e os substitui por um pequeno conjunto de predefinições (General, Realistic, Anime) mais um painel "Advanced" que pode ser totalmente ignorado.',
          'O projeto roda sobre o [Gradio](https://www.gradio.app/), o mesmo framework de interface web em Python usado por muitas outras ferramentas locais de IA, e sua interface toma emprestada intencionalmente a lista de recursos do Midjourney e do LeonardoAI, mapeando cada um de seus comandos (`--style`, `--ar`, variações V1–V4, upscaling) para um equivalente no Fooocus, para que quem vem dessas ferramentas em nuvem tenha um modelo mental familiar.',
          'O objetivo central de design, declarado diretamente na documentação do próprio projeto, é que o número de cliques de mouse entre baixar o Fooocus e gerar a primeira imagem deve ser menor que três. Essa única restrição de design — em vez de qualquer inovação de modelo específica — é o que diferencia o Fooocus de outras interfaces de Stable Diffusion: é uma camada de UI/UX, não um novo modelo.',
        ],
      },
      projectHistory: {
        id: 'project-history',
        title: 'Histórico do projeto e criador',
        content: [
          '**O Fooocus foi criado por Lvmin Zhang, que publica sob o usuário do GitHub lllyasviel; seu repositório foi criado no GitHub em 9 de agosto de 2023.** Zhang é doutorando em ciência da computação na Universidade de Stanford, pesquisando modelagem generativa controlável e computação gráfica.',
          'Zhang é conhecido de forma independente na comunidade de Stable Diffusion como o criador do [ControlNet](https://github.com/lllyasviel/ControlNet), a arquitetura de rede neural que adicionou condicionamento espacial preciso (pose, profundidade, mapas de bordas) aos modelos de difusão de texto para imagem. O artigo do ControlNet venceu o Marr Prize, o principal prêmio de melhor artigo da International Conference on Computer Vision (ICCV) 2023 — uma das conferências mais competitivas em visão computacional. Zhang também lançou outras ferramentas locais de IA, incluindo o [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (um fork do AUTOMATIC1111 focado em desempenho), PaintsUndo e IC-Light.',
          'O Fooocus foi construído, nas palavras do próprio projeto, a partir de uma mistura das bases de código do [AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) e do [ComfyUI](https://github.com/comfy-org/ComfyUI) — reaproveitando suas técnicas de inferência comprovadas enquanto apresenta uma interface radicalmente simplificada. Em setembro de 2026, o projeto acumulou mais de 52.000 estrelas no GitHub e mais de 8.600 forks, entre as ferramentas locais de geração de imagens mais avaliadas no GitHub.',
          '**Um aviso de segurança direto do próprio projeto: o Fooocus não tem site oficial.** O README avisa explicitamente que domínios como fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro e fooocus.one são falsos e não têm nenhuma relação com o projeto real — a única fonte oficial é o próprio [repositório no GitHub](https://github.com/lllyasviel/Fooocus).',
        ],
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'O Fooocus ainda é mantido em 2026?',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Fooocus não foi abandonado, mas seu próprio README declara que o projeto original está em estado "Limited Long-Term Support (LTS) com apenas correções de bugs", sem lançamento com tag desde agosto de 2024 e sem planos de suportar arquiteturas mais novas como o FLUX.' },
          { type: 'plain-terms', text: 'É melhor pensar nele como uma ferramenta acabada e estável do que como uma que ainda está crescendo — o desenvolvedor considera o conjunto de recursos baseado em SDXL essencialmente completo e não está correndo atrás de cada novo lançamento de modelo.' },
        ],
        content: [
          'O [README de lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) traz uma seção intitulada **"Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only"**, que declara que o projeto — construído inteiramente sobre a arquitetura Stable Diffusion XL — agora é considerado funcionalmente completo, e que "as atualizações futuras se concentrarão exclusivamente em corrigir quaisquer bugs que possam surgir". O README afirma explicitamente que não há planos atuais de migrar para ou incorporar arquiteturas de modelo mais novas, como o FLUX, embora deixe a porta aberta caso a comunidade de código aberto convirja para um único método sucessor dominante.',
          'Para leitores que querem os modelos mais recentes, o próprio README recomenda plataformas alternativas — especificamente o [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (também do mesmo criador) e o [ComfyUI](https://github.com/comfy-org/ComfyUI) ou sua interface simplificada, o [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) — em vez de prometer suporte a FLUX dentro do próprio Fooocus.',
          'Isso não é o mesmo que um projeto abandonado. O repositório no GitHub **não está arquivado**, permanece aberto a issues e pull requests (314 issues abertas no momento desta análise), e os próprios dados de atividade do GitHub mostram commits tão recentes quanto dezembro de 2025 — mais de um ano após o último lançamento com tag. O README agradece ao colaborador **mashb1t** por "enormes esforços" reduzindo os bugs pendentes do código, e mashb1t mantém separadamente um fork em [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus) que continuou recebendo commits ainda mais recentes (o último em outubro de 2025) — embora esse fork também não tenha lançado uma nova versão com tag desde agosto de 2024, refletindo o mesmo ritmo do projeto original.',
          'A conclusão prática: o Fooocus é estável e seguro para instalar hoje, mas um leitor que queira especificamente FLUX, SD 3.5 ou outras arquiteturas de modelo pós-2024 em uma interface simplificada não vai encontrar isso no Fooocus e deve procurar o ComfyUI, o SwarmUI ou o WebUI Forge em vez disso.',
        ],
        note: 'Os fatos sobre o status de manutenção foram verificados diretamente no repositório e no README do GitHub de lllyasviel/Fooocus, e no fork mashb1t/Fooocus, em 06/09/2026 — datas de push, datas de lançamento e a contagem de issues abertas mudam com o tempo; verifique novamente [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) antes de considerar esse status como atual.',
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Como instalar e executar o Fooocus',
        content: [
          'O Fooocus oferece um pacote de um clique para Windows, além de caminhos de instalação manual para Linux, Mac e Docker — não há uma etapa separada de download de modelo para a predefinição padrão, já que o Fooocus busca seu próprio checkpoint padrão automaticamente na primeira execução.',
        ],
        numberedItems: [
          { title: 'Baixe o pacote para Windows (ou clone o repositório no Linux/Mac)', whyItMatters: 'Usuários de Windows recebem um pacote `.7z` autocontido da [página de Releases no GitHub](https://github.com/lllyasviel/Fooocus/releases) com um ambiente Python embutido — não é necessário instalar Python separadamente. Usuários de Linux e Mac clonam o repositório e configuram um ambiente Conda ou venv em vez disso.' },
          { title: 'Extraia o pacote e execute o run.bat', whyItMatters: 'Descompacte o arquivo baixado e clique duas vezes em `run.bat` — isso inicia a predefinição General. `run_anime.bat` e `run_realistic.bat` iniciam, em vez disso, as predefinições Anime e Realistic, cada uma com um checkpoint padrão diferente.' },
          { title: 'Deixe o Fooocus baixar automaticamente seu modelo padrão', whyItMatters: 'Na primeira execução, o Fooocus baixa automaticamente o checkpoint para a predefinição que você executou — Juggernaut XL v8 (Rundiffusion) para General, RealisticStockPhoto v2.0 para Realistic, ou AnimaPencilXL v5.0 para Anime — na pasta `Fooocus/models/checkpoints`.' },
          { title: 'Digite um prompt e clique em Generate', whyItMatters: 'Não é necessário escolher sampler, escala CFG ou resolução — o Fooocus aplica automaticamente valores padrão sensatos. Controles avançados ficam disponíveis atrás de um alternador "Advanced" para quem quiser usá-los depois.' },
          { title: 'Use Image Prompt, Inpaint ou Upscale/Vary conforme necessário', whyItMatters: 'O Fooocus mapeia fluxos de trabalho no estilo Midjourney (prompt de imagem, inpainting, upscaling, variação sutil/forte) em seus próprios painéis de interface, usando seu próprio modelo de inpainting e algoritmo de prompt de imagem em vez de uma configuração padrão de ControlNet para SDXL.' },
          { title: 'Mude para checkpoints da comunidade quando estiver confortável', whyItMatters: 'Qualquer checkpoint SDXL do Civitai ou Hugging Face pode ser colocado na pasta `models/checkpoints` e selecionado dentro do Fooocus, estendendo-o além das três predefinições integradas.' },
        ],
        note: 'Caminhos exatos de pastas, flags do launcher e versões de dependências mudam entre lançamentos — siga as instruções de configuração atuais na [página do GitHub de lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) em vez de um guia genérico.',
      },
      promptExpansionStyles: {
        id: 'prompt-expansion-styles',
        title: 'Expansão de prompt e estilos integrados',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Fooocus executa um modelo offline de expansão de prompt baseado em GPT-2, exposto como um estilo chamado "Fooocus V2", que adiciona automaticamente detalhes a prompts curtos ou vagos antes da geração.' },
        ],
        content: [
          '**O recurso característico do Fooocus é um mecanismo de processamento de prompt baseado em GPT-2 que funciona offline, apresentado na interface como o estilo "Fooocus V2".** A própria documentação do projeto o compara ao pré-processamento oculto de prompts do Midjourney e ao "Prompt Magic" do LeonardoAI — a ideia é que um prompt curto como "casa em um jardim" e um prompt de 1.000 palavras devem produzir resultados igualmente polidos e coerentes, porque o modelo de expansão preenche automaticamente o detalhe estilístico e composicional que falta.',
          'Além do Fooocus V2, a interface traz vários outros estilos predefinidos integrados, incluindo "Fooocus Photograph", "Fooocus Negative" e um estilo "cinematic-default", com estilos SDXL adicionais contribuídos por membros da comunidade creditados no README do projeto (twri, 3Diva e Marc K3nt3L). Os estilos podem ser combinados, e vários se acumulam no painel Advanced para leitores que queiram mais controle do que as três predefinições de nível superior oferecem.',
          'Outras técnicas internas documentadas pelo README incluem uma troca nativa de refiner dentro de um único k-sampler (evitando a perda de momentum que ocorre quando o AUTOMATIC1111 ou o ComfyUI alternam entre dois samplers independentes), orientação ADM negativa ajustada para o nível de resolução mais alto do SDXL, e um modelo de inpainting próprio junto com um algoritmo de prompt de imagem próprio, em vez de um pipeline padrão de ControlNet ou IP-Adapter para SDXL.',
        ],
      },
      licenseCommercialUse: {
        id: 'license-commercial-use',
        title: 'Licença do Fooocus e uso comercial',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O código da aplicação do Fooocus é licenciado sob GPL-3.0 (GNU General Public License versão 3), confirmado em seu repositório no GitHub — mas os checkpoints SDXL padrão que ele baixa são modelos separados da comunidade, cada um com sua própria licença diferente.' },
          { type: 'plain-terms', text: 'O software Fooocus em si é totalmente de código aberto e livre para usar ou modificar; a licença aplicável às imagens geradas depende de qual checkpoint as criou, e é a licença desse checkpoint — não a do Fooocus — que rege o uso comercial dessas imagens específicas.' },
        ],
        content: [
          'O Fooocus é licenciado sob **GPL-3.0** (GNU General Public License, versão 3), como confirmado nos metadados de licença de seu repositório no GitHub. A GPL-3.0 permite o uso, a modificação e a redistribuição livres do código-base do Fooocus, desde que qualquer trabalho derivado distribuído também seja lançado sob GPL-3.0 (copyleft) — isso se aplica ao código da aplicação, não às imagens que você gera com ele.',
          'Os três checkpoints padrão que o Fooocus baixa automaticamente — Juggernaut XL v8 (Rundiffusion) para a predefinição General, RealisticStockPhoto v2.0 para Realistic e AnimaPencilXL v5.0 para Anime — são ajustes finos de Stable Diffusion XL treinados pela comunidade, hospedados de forma independente em plataformas como Civitai e Hugging Face, e cada um tem sua própria licença separada (geralmente uma variante da CreativeML OpenRAIL-M, mas os termos variam de acordo com o checkpoint e podem mudar). Quem planeja usar imagens geradas comercialmente deve verificar a página de licença do checkpoint específico antes de fazê-lo — a licença GPL-3.0 do Fooocus não se estende automaticamente aos termos de um checkpoint, nem os substitui.',
          'O próprio projeto não tem nenhuma dimensão comercial: o README declara claramente que o Fooocus é "a 100% non-commercial offline open-source software", sem site oficial, sem produto pago e sem nenhuma empresa vendendo-o — o único aviso a se observar é o alerta sobre domínios falsos abordado na seção de histórico do projeto acima.',
        ],
        note: 'Esta seção resume metadados de licença publicados publicamente em 06/09/2026; não constitui aconselhamento jurídico. Leia o [arquivo LICENSE do Fooocus](https://github.com/lllyasviel/Fooocus/blob/main/LICENSE) e a página de licença do checkpoint específico antes de qualquer implantação comercial.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'Requisitos de hardware',
        itemHeadings: true,
        columns: ['GPU', 'VRAM mín.', 'RAM mín.', 'Observações'],
        rows: [
          { 'GPU': 'Nvidia RTX 2000-4000', 'VRAM mín.': '4 GB VRAM', 'RAM mín.': '8 GB + troca', 'Observações': 'Nível mais rápido; RTX 4000 é a mais veloz' },
          { 'GPU': 'Nvidia GTX 900/1000', 'VRAM mín.': '8 GB VRAM (alguns relatam 6 GB)', 'RAM mín.': '8 GB + troca', 'Observações': 'Só um pouco mais rápida que a CPU' },
          { 'GPU': 'Nvidia GTX anterior a 900', 'VRAM mín.': 'Não suportada', 'RAM mín.': '—', 'Observações': 'Use o modo somente CPU em vez disso' },
          { 'GPU': 'GPU AMD (Windows)', 'VRAM mín.': '8 GB VRAM (DirectML, beta)', 'RAM mín.': '8 GB + troca', 'Observações': '~3x mais lenta que a Nvidia RTX 3000' },
          { 'GPU': 'GPU AMD (Linux)', 'VRAM mín.': '8 GB VRAM (ROCm, beta)', 'RAM mín.': '8 GB + troca', 'Observações': '~1,5x mais lenta que a Nvidia RTX 3000' },
          { 'GPU': 'Apple M1/M2 (não oficial)', 'VRAM mín.': 'Memória compartilhada do sistema', 'RAM mín.': 'Compartilhada', 'Observações': '~9x mais lenta que a Nvidia RTX 3000' },
          { 'GPU': 'Somente CPU', 'VRAM mín.': 'Nenhuma (0 GB)', 'RAM mín.': '32 GB', 'Observações': '~17x mais lenta que a Nvidia RTX 3000' },
        ],
        content: [
          '**O requisito mínimo para rodar o Fooocus é 4 GB de VRAM Nvidia mais 8 GB de RAM do sistema com memória de troca virtual ativada**, de acordo com a tabela de especificações do próprio README do projeto. Isso torna o Fooocus uma das interfaces locais de Stable Diffusion com menor barreira de entrada, já que os checkpoints SDXL costumam exigir de 8 a 12 GB de VRAM em outras interfaces sem as otimizações de gerenciamento de memória embutidas do Fooocus.',
          'O próprio exemplo de teste do projeto cita um laptop com uma Nvidia RTX 3060 (6 GB de VRAM) e 16 GB de RAM do sistema gerando imagens em aproximadamente 1,35 segundo por passo de amostragem — uma referência prática útil, embora a velocidade real dependa da resolução, da predefinição e da versão atual do driver da GPU.',
        ],
        note: 'Os números vêm diretamente da tabela "Minimal Requirement" do README de lllyasviel/Fooocus em 06/09/2026 — o suporte a AMD e Mac é explicitamente marcado como beta/não oficial pelo próprio projeto, e o uso real de VRAM varia com resolução, tamanho de lote e drivers instalados.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços: gratuito, sem nível pago',
        content: [
          '**O Fooocus é totalmente gratuito, sem nível pago, assinatura ou produto comercial oficial de qualquer tipo.** O aplicativo é software de código aberto licenciado sob GPL-3.0; o único custo para o leitor é o próprio hardware e a eletricidade, e os checkpoints que ele baixa por padrão (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) também são gratuitos.',
          'Diferente de outras ferramentas locais de IA que combinam um aplicativo gratuito autoexecutável com um nível de nuvem pago opcional, o Fooocus não tem nenhuma oferta assim — o README é explícito ao afirmar que o projeto não tem site oficial nem nenhuma empresa por trás vendendo qualquer coisa. Qualquer site que alegue vender uma versão "Fooocus Pro", ou qualquer domínio diferente do próprio [repositório no GitHub](https://github.com/lllyasviel/Fooocus), deve ser considerado sem relação com o projeto real.',
        ],
        note: 'Confirmado diretamente no próprio README do projeto em 06/09/2026 — reverifique em [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) se estiver avaliando isso para uma implantação comercial anos depois.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Fooocus vs. alternativas',
        columns: ['Opção', 'Melhor para', 'Autoexecutável', 'Licença / custo', 'Principal trade-off'],
        rows: [
          {
            'Opção': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'Melhor para': 'Menos cliques até a primeira imagem; zero ajuste manual de parâmetros para iniciantes',
            'Autoexecutável': 'Sim — gratuito, GPU própria (mín. 4 GB VRAM)',
            'Licença / custo': 'GPL-3.0 (app); checkpoints padrão têm cada um sua própria licença',
            'Principal trade-off': 'Repositório original está em apenas correções desde agosto de 2024; só SDXL, sem FLUX',
          },
          {
            'Opção': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) / [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'Melhor para': 'Interface técnica baseada em abas com o maior ecossistema de extensões entre as interfaces locais de SD',
            'Autoexecutável': 'Sim — gratuito, GPU própria',
            'Licença / custo': 'AGPL-3.0, gratuito',
            'Principal trade-off': 'Expõe cada parâmetro diretamente — curva de aprendizado mais íngreme que o Fooocus',
          },
          {
            'Opção': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'Melhor para': 'Controle total do pipeline via grafo de nós visual; geralmente o primeiro a suportar novos modelos',
            'Autoexecutável': 'Sim — gratuito, GPU própria',
            'Licença / custo': 'GPL-3.0, gratuito (existe um nível pago separado de nuvem/API do ComfyUI)',
            'Principal trade-off': 'Interface de grafo de nós tem complexidade real de configuração para um iniciante total',
          },
          {
            'Opção': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'Melhor para': 'Interface profissional refinada com tela unificada e fluxos de trabalho voltados para equipes',
            'Autoexecutável': 'Sim — gratuito, GPU própria',
            'Licença / custo': 'Apache 2.0, gratuito (o nível pago do Invoke Cloud foi descontinuado após a aquisição pela Adobe em 2025)',
            'Principal trade-off': 'Ecossistema de extensões da comunidade menor que AUTOMATIC1111 ou ComfyUI',
          },
          {
            'Opção': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) (antigo StableSwarmUI da Stability AI)',
            'Melhor para': 'Interface simplificada em abas rodando sobre o backend do ComfyUI',
            'Autoexecutável': 'Sim — gratuito, GPU própria',
            'Licença / custo': 'Licença MIT, gratuito',
            'Principal trade-off': 'Comunidade menor que ComfyUI ou AUTOMATIC1111; menos voltado para iniciantes que o Fooocus',
          },
        ],
        note: 'Este é um resumo de posicionamento, não um ranking de desempenho. Licenças, número de estrelas e status de manutenção foram verificados diretamente no repositório no GitHub de cada projeto em 06/09/2026 e podem mudar — veja [Stable Diffusion: Análise](/pt/power-local-llm/stable-diffusion-review) para a família de modelos subjacente da qual este artigo e todas as interfaces acima dependem.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Fooocus é indicado',
        items: [
          '**Iniciante total que nunca rodou geração de imagens com IA local antes.** O design de predefinições e expansão de prompt do Fooocus remove a parte mais íngreme da curva de aprendizado do Stable Diffusion — nenhuma decisão de sampler, escala CFG ou resolução é necessária para obter um resultado utilizável.',
          '**Leitor que quer uma experiência parecida com o Midjourney sem assinatura ou dependência de nuvem.** O conjunto de recursos do Fooocus espelha deliberadamente a lista de comandos do Midjourney (estilos, variações, upscaling) enquanto roda inteiramente offline em hardware local.',
          '**Dono de uma GPU com pouca VRAM.** Um mínimo de 4 GB de VRAM (a partir da série Nvidia RTX 2000) é menor do que o AUTOMATIC1111 ou o ComfyUI normalmente recomendam para um uso confortável de SDXL, tornando o Fooocus um ponto de entrada razoável em GPUs mais antigas ou de orçamento limitado.',
          '**Leitor que fica satisfeito permanecendo em modelos baseados em SDXL.** Se a linha atual de predefinições (uso geral, realista, anime) já cobre seu caso de uso, a estabilidade e a simplicidade do Fooocus superam sua falta de suporte a arquiteturas mais novas.',
          '**Leitor que quer que a ponderação de prompt estilo Civitai simplesmente funcione.** O Fooocus usa a sintaxe de reponderação de prompt do AUTOMATIC1111, então prompts copiados diretamente do Civitai se comportam como esperado sem precisar de reformatação.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Fooocus não é indicado',
        items: [
          '**Leitor que quer FLUX, SD 3.5 ou qualquer arquitetura de modelo pós-2024.** O próprio README do Fooocus declara que não há planos atuais de suportar arquiteturas mais novas — leitores que querem os modelos mais recentes devem usar o [ComfyUI](https://github.com/comfy-org/ComfyUI), o [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) ou o [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) em vez disso.',
          '**Usuário avançado que quer controle granular sobre cada etapa do pipeline de geração.** Toda a filosofia de design do Fooocus é esconder parâmetros; leitores que queiram inspecionar ou reconectar cada estágio de um pipeline de difusão devem usar o grafo de nós do ComfyUI em vez disso.',
          '**Leitor que depende do projeto original para correções rápidas de bugs ou novos recursos.** O repositório original está explicitamente em modo apenas correções de bugs, sem roteiro comprometido — quem precisa de desenvolvimento ativo de recursos deve avaliar o [fork mashb1t/Fooocus mantido pela comunidade](https://github.com/mashb1t/Fooocus) ou uma interface totalmente diferente.',
          '**Equipe que precisa de processamento em lote de nível de produção ou de um fluxo de trabalho API-first.** O Fooocus é construído em torno de uma interface Gradio para um único usuário, não um servidor de API — quem estiver construindo um pipeline automatizado deve olhar para o modo API do ComfyUI ou o InvokeAI em vez disso.',
          '**Leitor que precisa de condicionamento pesado de pose/profundidade estilo ControlNet.** O Fooocus usa seu próprio sistema simplificado de "Image Prompt" em vez de expor a seleção completa de modelos ControlNet; quem precisa de controle preciso de pose ou profundidade deve usar AUTOMATIC1111, WebUI Forge ou ComfyUI com modelos ControlNet dedicados.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Fooocus é gratuito?',
            a: 'Sim. O Fooocus é um software gratuito e de código aberto licenciado sob GPL-3.0, sem nível pago, assinatura ou produto comercial oficial. Os checkpoints SDXL padrão que ele baixa (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) também são gratuitos, embora cada um tenha sua própria licença separada, que rege o uso comercial das imagens geradas.',
          },
          {
            q: 'O Fooocus ainda está sendo atualizado?',
            a: 'Ele está em um estado de atividade reduzida, não abandonado. O README do projeto declara que está em modo "Limited Long-Term Support (LTS) com apenas correções de bugs": o último lançamento com tag foi a v2.5.5 em 12 de agosto de 2024, e não há planos de suportar arquiteturas de modelo mais novas como o FLUX. O repositório no GitHub não está arquivado e continuou recebendo commits tão recentemente quanto dezembro de 2025, e o colaborador mashb1t mantém um fork atualizado ativamente em github.com/mashb1t/Fooocus.',
          },
          {
            q: 'Quem criou o Fooocus?',
            a: 'O Fooocus foi criado por Lvmin Zhang, que publica sob o usuário do GitHub lllyasviel. Zhang é doutorando em ciência da computação na Universidade de Stanford, também conhecido por criar o ControlNet, cujo artigo venceu o Marr Prize (principal prêmio de melhor artigo da ICCV 2023), além do WebUI Forge, PaintsUndo e IC-Light.',
          },
          {
            q: 'Quanta VRAM o Fooocus precisa?',
            a: 'O mínimo é 4 GB de VRAM em uma GPU Nvidia da série RTX 2000, 3000 ou 4000, mais 8 GB de RAM do sistema com memória de troca virtual ativada. Placas Nvidia GTX 900/1000 mais antigas precisam de cerca de 8 GB de VRAM, GPUs AMD precisam de cerca de 8 GB de VRAM via DirectML (Windows, beta) ou ROCm (Linux, beta), e a operação somente com CPU é possível com 32 GB de RAM do sistema, mas roda cerca de 17 vezes mais devagar que uma GPU Nvidia da série RTX 3000.',
          },
          {
            q: 'O que é a expansão de prompt baseada em GPT-2 no Fooocus?',
            a: 'É um mecanismo de processamento de prompt que funciona offline, exposto na interface como o estilo "Fooocus V2", que expande automaticamente prompts curtos ou vagos com detalhes estilísticos e composicionais adicionais antes da geração — conceitualmente semelhante ao pré-processamento oculto de prompts do Midjourney ou ao "Prompt Magic" do LeonardoAI. Ele roda localmente e não requer conexão com a internet.',
          },
          {
            q: 'O Fooocus é melhor que o AUTOMATIC1111 ou o ComfyUI?',
            a: 'Depende do seu objetivo. O Fooocus é mais fácil para começar porque esconde parâmetros técnicos atrás de predefinições, ao custo de controle granular. O WebUI do AUTOMATIC1111 (ou seu fork WebUI Forge) expõe cada parâmetro diretamente e tem o maior ecossistema de extensões entre as interfaces locais de Stable Diffusion. O ComfyUI oferece controle total do pipeline via grafo de nós e geralmente é o primeiro a suportar novos lançamentos de modelos. Leitores que superam as predefinições do Fooocus normalmente migram para uma dessas duas opções.',
          },
          {
            q: 'O Fooocus suporta FLUX ou Stable Diffusion 3.5?',
            a: 'Não. O Fooocus é construído inteiramente sobre a arquitetura Stable Diffusion XL, e seu próprio README declara que não há planos atuais de adicionar suporte a arquiteturas mais novas como o FLUX. Leitores que querem FLUX ou SD 3.5 em uma configuração igualmente local devem usar o ComfyUI, o SwarmUI ou o WebUI Forge em vez disso.',
          },
          {
            q: 'Onde eu baixo o Fooocus?',
            a: 'A única fonte oficial é o [repositório no GitHub lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus), onde um pacote de um clique para Windows é publicado na seção Releases. O próprio README do projeto avisa explicitamente que domínios como fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro e fooocus.one são sites falsos sem nenhuma relação com o projeto real.',
          },
          {
            q: 'Qual é o modelo padrão que o Fooocus usa?',
            a: 'O Fooocus baixa automaticamente um checkpoint SDXL padrão diferente dependendo da predefinição que você inicia: Juggernaut XL v8 (Rundiffusion) para a predefinição General, RealisticStockPhoto v2.0 para Realistic e AnimaPencilXL v5.0 para Anime. Os três são checkpoints treinados pela comunidade e hospedados independentemente do próprio Fooocus.',
          },
          {
            q: 'Posso usar comercialmente imagens geradas com o Fooocus?',
            a: 'A própria licença GPL-3.0 do Fooocus cobre o código da aplicação, não as imagens que ele produz. O uso comercial de uma imagem gerada é regido pela licença do checkpoint específico usado para criá-la — os checkpoints padrão (Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) têm cada um sua própria licença separada, geralmente uma variante da CreativeML OpenRAIL-M, publicada em sua página no Civitai ou Hugging Face. Verifique essa página antes do uso comercial.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Fooocus merece sua reputação como a forma mais fácil de rodar Stable Diffusion localmente — o design de predefinições e expansão de prompt realmente remove a parte mais íngreme da curva de aprendizado que torna o AUTOMATIC1111 e o ComfyUI intimidadores para quem está começando, e faz isso rodando inteiramente offline em hardware tão modesto quanto uma GPU com 4 GB de VRAM. A ressalva honesta é a manutenção: o próprio README do projeto original o coloca em modo apenas correções de bugs, sem lançamento com tag desde agosto de 2024 e sem planos de suportar FLUX ou outras arquiteturas pós-2024, mesmo que o repositório permaneça ativo e não arquivado. Leitores que querem o ponto de entrada mais simples possível para a geração de imagens local baseada em SDXL, e que não precisam das arquiteturas de modelo mais recentes nem de controle granular do pipeline, vão descobrir que o Fooocus entrega exatamente o que promete. Leitores que querem mais controle (ComfyUI, AUTOMATIC1111/WebUI Forge) ou modelos mais novos em uma configuração igualmente local (ComfyUI, SwarmUI) devem olhar além do Fooocus para essas opções — idealmente depois de verificar diretamente em [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) o status atual do projeto.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[lllyasviel/Fooocus — repositório e README no GitHub](https://github.com/lllyasviel/Fooocus) — fonte primária para recursos, instalação, tabela de requisitos mínimos de hardware, licença e a declaração de status de manutenção "Limited Long-Term Support".',
          '[lllyasviel/Fooocus — Releases](https://github.com/lllyasviel/Fooocus/releases) — histórico e datas de lançamentos, incluindo o mais recente com tag, v2.5.5 (12 de agosto de 2024).',
          '[mashb1t/Fooocus — repositório no GitHub](https://github.com/mashb1t/Fooocus) — fork mantido pela comunidade com atividade de commits mais recente que o repositório original.',
          '[lllyasviel/ControlNet — repositório no GitHub](https://github.com/lllyasviel/ControlNet) — projeto anterior do criador Lvmin Zhang, referenciado como contexto sobre o desenvolvedor.',
          '[Lvmin Zhang — página acadêmica pessoal](https://lllyasviel.github.io/lvmin_zhang/) — histórico biográfico e de pesquisa do criador.',
          '[Scientific American — perfil de Lvmin Zhang](https://www.scientificamerican.com/article/lvmin-zhang/) — perfil independente sobre o trabalho de Zhang em ferramentas de IA, incluindo Fooocus e ControlNet.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Stable Diffusion: Análise dos modelos locais gratuitos de texto para imagem](/pt/power-local-llm/stable-diffusion-review) — a família de modelos abertos subjacente sobre a qual o Fooocus roda, incluindo termos de licença e histórico de versões.',
          '[Geração de imagens com IA local vs. nuvem: FLUX, SD 3.5, Qwen-Image vs. Adobe Firefly e getimg.ai](/pt/power-local-llm/local-ai-image-generation-vs-cloud) — uma comparação mais aprofundada de famílias de modelos de imagem locais para leitores que superam o escopo exclusivo de SDXL do Fooocus.',
          '[Diretório de software de LLM local 2026](/pt/power-local-llm/local-llm-software-directory) — diretório completo de aplicativos e ferramentas para todas as plataformas.',
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
    heroImage: '/images/fooocus-review-hero-ar.webp',
    title: 'مراجعة Fooocus (2026): أبسط واجهة محلية لـ Stable Diffusion',
    seoTitle: 'مراجعة Fooocus 2026: أسهل واجهة محلية لـ Stable Diffusion',
    intro:
      'Fooocus هي واجهة مجانية ومفتوحة المصدر لتوليد الصور تعمل بالكامل دون اتصال بالإنترنت، مخصصة لـ Stable Diffusion XL، طوّرها Lvmin Zhang (اسمه على GitHub هو lllyasviel، والمعروف أيضًا بمشروع [ControlNet](https://github.com/lllyasviel/ControlNet)). تُخفي Fooocus عمدًا معظم الإعدادات التقنية — كالـ samplers ومقياس CFG وشبكات الدقة — خلف إعدادات مسبقة ومحرك تلقائي لتوسيع الطلبات النصية (prompt)، بحيث يمكن الانتقال من حقل نص فارغ إلى صورة جاهزة في نحو ثلاث نقرات. تستعرض هذه المراجعة ما تفعله Fooocus فعليًا خلف الكواليس، ورخصة GPL-3.0 الخاصة بها، ومتطلبات الأجهزة الحقيقية، والأهم من ذلك، حالة الصيانة الحالية بصراحة، إذ أعلن المستودع الأصلي علنًا أنه أصبح الآن في وضع إصلاح الأخطاء فقط.',
    metaDescription:
      'مراجعة Fooocus 2026: أسهل واجهة محلية لـ Stable Diffusion للمبتدئين، من مطوّر ControlNet لللyasviel — متطلبات VRAM الحقيقية، رخصة GPL-3.0، وحالة صيانة صريحة (LTS/إصلاح أخطاء فقط منذ 2024).',
    twitterDescription:
      'مراجعة Fooocus 2026: واجهة Stable Diffusion المحلية الأقل نقرات، من مطوّر ControlNet — احتياجات VRAM، توسيع الطلبات النصية عبر GPT-2، رخصة GPL-3.0، والحقيقة عن صيانتها.',
    audience:
      'القراء الراغبون في أبسط طريقة لتشغيل Stable Diffusion محليًا دون تعلّم AUTOMATIC1111 أو ComfyUI — يغطي خطوات التثبيت ومتطلبات الأجهزة وما إذا كان المشروع لا يزال يُصان بشكل فعّال.',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'مراجعة Fooocus',
    targetKeywords: [
      'مراجعة fooocus',
      'fooocus مقابل comfyui',
      'fooocus مقابل automatic1111',
      'أسهل واجهة stable diffusion',
      'متطلبات vram في fooocus',
      'حالة صيانة fooocus',
      'تحميل fooocus',
      'رخصة fooocus',
    ],
    current_models_mentioned: ['Stable Diffusion XL', 'Juggernaut XL v8 (Rundiffusion)', 'realisticStockPhoto v2.0', 'animaPencilXL v5.0', 'FLUX.1'],
    current_hardware_mentioned: ['4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '8 GB ذاكرة نظام', '32 GB ذاكرة نظام', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Fooocus واجهة محلية مجانية ومفتوحة المصدر لـ Stable Diffusion XL تُخفي معظم الإعدادات التقنية خلف إعدادات مسبقة، ما يجعلها أسهل واجهة محلية لتوليد الصور للبدء بها — لكن المشروع الأصلي أصبح الآن في حالة "Limited Long-Term Support (LTS) مع إصلاح الأخطاء فقط"، دون أي إصدار جديد موسوم منذ أغسطس 2024.** تعمل دون اتصال بالإنترنت بحد أدنى 4 GB من VRAM (سلسلة Nvidia RTX 2000/3000/4000) و8 GB من ذاكرة النظام، وتستخدم محرك توسيع طلبات نصية (prompt) قائمًا على GPT-2 يضيف الأسلوب والتفاصيل تلقائيًا، وتُوزَّع بموجب رخصة GPL-3.0. لا تدعم المعماريات الأحدث (لا يوجد دعم لـ FLUX)، لذا يجب على القراء الراغبين في أحدث النماذج الاطلاع أيضًا على [ComfyUI](https://github.com/comfy-org/ComfyUI) أو [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)، وكلاهما من نفس بيئة المطوّر. تحقّق من نشاط المستودع الحالي على [GitHub](https://github.com/lllyasviel/Fooocus) قبل افتراض أنه لا يزال قيد التطوير الفعّال.',
    quickAnswerTop: {
      ar: {
        question: 'هل لا تزال Fooocus تُصان، وكم من VRAM تحتاج؟',
        answer:
          'لم يُهجَر مشروع Fooocus، لكن ملف README الخاص به يُصرّح بأن المشروع دخل وضع "Limited Long-Term Support (LTS) مع إصلاح الأخطاء فقط" — كان آخر إصدار موسوم هو v2.5.5 بتاريخ 12 أغسطس 2024، ولا توجد خطط لدعم معماريات أحدث مثل FLUX. مستودع GitHub غير مؤرشف ولا يزال يستقبل التزامات (commits) (آخرها في ديسمبر 2025)، ويحتفظ المساهم mashb1t بنسخة (fork) محدَّثة بنشاط على github.com/mashb1t/Fooocus. تحتاج Fooocus إلى حد أدنى قدره 4 GB من VRAM على بطاقة Nvidia من سلسلة RTX 2000/3000/4000، و8 GB من ذاكرة النظام (مع تفعيل الذاكرة التبادلية الافتراضية) لتعمل أصلًا.',
        bullets: [
          'المطوّر: Lvmin Zhang (اسمه على GitHub: lllyasviel)، طالب دكتوراه في علوم الحاسوب في جامعة Stanford، ومعروف أيضًا بتطوير ControlNet، الذي فاز بحثه بجائزة Marr Prize (أعلى جائزة لأفضل بحث في مؤتمر ICCV 2023).',
          'الحالة: المستودع الأصلي في وضع إصلاح الأخطاء فقط منذ 2024؛ لا توجد خطط لدعم FLUX أو نماذج أحدث. غير مؤرشف — لا يزال يستقبل التزامات (commits).',
          'الحد الأدنى من الأجهزة: 4 GB من VRAM (سلسلة Nvidia RTX 2000/3000/4000) و8 GB من ذاكرة النظام مع تفعيل الذاكرة التبادلية؛ تحتاج بطاقات GTX 900/1000 الأقدم إلى 8 GB من VRAM.',
          'الرخصة: GPL-3.0 لكود التطبيق؛ نقاط التفتيش (checkpoints) الافتراضية لـ SDXL (مثل Juggernaut XL) لكل منها رخصتها الخاصة المنفصلة.',
          'الميزة المميزة: محرك توسيع طلبات نصية (prompt) يعمل دون اتصال بالإنترنت وقائم على GPT-2 (بأسلوب "Fooocus V2") يملأ التفاصيل الناقصة تلقائيًا، بشكل مشابه للمعالجة المسبقة الخفية في Midjourney.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هي Fooocus', anchor: 'what-is-fooocus' },
      { label: 'تاريخ المشروع ومطوّره', anchor: 'project-history' },
      { label: 'حالة الصيانة الحالية (2026)', anchor: 'maintenance-status' },
      { label: 'كيفية تثبيت وتشغيل Fooocus', anchor: 'how-to-install' },
      { label: 'توسيع الطلبات النصية والأساليب المدمجة', anchor: 'prompt-expansion-styles' },
      { label: 'الرخصة والاستخدام التجاري', anchor: 'license-commercial-use' },
      { label: 'متطلبات الأجهزة', anchor: 'hardware-requirements' },
      { label: 'الأسعار', anchor: 'pricing' },
      { label: 'Fooocus مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن تناسب Fooocus', anchor: 'who-should-use' },
      { label: 'لمن لا تناسب Fooocus', anchor: 'who-should-not-use' },
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
          'Fooocus واجهة مجانية ومفتوحة المصدر لـ Stable Diffusion XL تعمل بالكامل دون اتصال بالإنترنت، صُمِّمت لتقليل الضبط اليدوي إلى أدنى حد — يذكر المطوّر أن الوصول إلى أول صورة يتطلب أقل من ثلاث نقرات بالماوس.',
          'طوّرها Lvmin Zhang، واسمه على GitHub هو lllyasviel، طالب دكتوراه في علوم الحاسوب في جامعة Stanford، ومعروف أيضًا بتطوير [ControlNet](https://github.com/lllyasviel/ControlNet)، الذي فاز بحثه بجائزة Marr Prize (أعلى جائزة لأفضل بحث في مؤتمر ICCV 2023).',
          'يُصرّح ملف README الخاص بالمشروع بأنه أصبح الآن في حالة "Limited Long-Term Support (LTS) مع إصلاح الأخطاء فقط": كان آخر إصدار موسوم هو v2.5.5 بتاريخ 12 أغسطس 2024، ولا توجد حاليًا خطط لدعم معماريات نماذج أحدث مثل FLUX.',
          'مستودع GitHub غير مؤرشف واستمر في استقبال التزامات (commits) (آخرها في ديسمبر 2025)؛ يحتفظ المساهم mashb1t بنسخة (fork) محدَّثة بنشاط على [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus).',
          'الحد الأدنى من الأجهزة هو 4 GB من VRAM على بطاقة Nvidia من سلسلة RTX 2000/3000/4000 بالإضافة إلى 8 GB من ذاكرة النظام مع تفعيل الذاكرة التبادلية الافتراضية؛ تحتاج بطاقات GTX 900/1000 الأقدم إلى نحو 8 GB من VRAM.',
          'تخضع Fooocus لرخصة GPL-3.0، وهي مجانية بنسبة 100% دون أي مستوى مدفوع — لكن نقاط التفتيش الافتراضية لـ SDXL التي تُحمَّل تلقائيًا (Juggernaut XL وRealisticStockPhoto وAnimaPencilXL) لكل منها رخصتها الخاصة المنفصلة على Civitai/Hugging Face.',
        ],
      },
      whatIsFooocus: {
        id: 'what-is-fooocus',
        title: 'ما هي Fooocus',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus واجهة مجانية تعمل دون اتصال بالإنترنت ومبنية على Gradio لـ Stable Diffusion XL، تُخفي المعاملات التقنية خلف إعدادات مسبقة وتوسيع تلقائي للطلبات النصية، بهدف تحقيق تجربة "اكتب الطلب فقط".' },
          { type: 'plain-terms', text: 'إذا كانت AUTOMATIC1111 وComfyUI أشبه بلوحة تحكم تقنية ومخطط توصيلات، فإن Fooocus أقرب إلى زر واحد لـ"التوليد" — تتخذ معظم القرارات نيابةً عنك، ولا تُظهر الإعدادات المتقدمة إلا إذا بحثت عنها بنفسك.' },
        ],
        content: [
          '**Fooocus تطبيق محلي لتوليد الصور يعمل دون اتصال بالإنترنت، مبني بالكامل على معمارية Stable Diffusion XL (SDXL)، ويُوزَّع كبرمجية حرة ومفتوحة المصدر بموجب رخصة GPL-3.0.** على عكس واجهة AUTOMATIC1111 التقنية القائمة على علامات التبويب أو محرر الرسم البياني العقدي (node graph) في ComfyUI، تُزيل Fooocus عمدًا معظم عناصر التحكم اليدوي — لا يوجد محدد sampler ظاهر، ولا شريط تمرير لمقياس CFG افتراضيًا، ولا شبكة دقة — وتستبدلها بمجموعة صغيرة من الإعدادات المسبقة (General وRealistic وAnime) بالإضافة إلى لوحة "Advanced" يمكن تجاهلها تمامًا.',
          'يعمل المشروع على إطار [Gradio](https://www.gradio.app/)، وهو نفس إطار واجهة الويب بلغة Python المستخدم في العديد من أدوات الذكاء الاصطناعي المحلية الأخرى. وتستعير واجهته عمدًا قائمة ميزات Midjourney وLeonardoAI، مع تحويل كل أمر من أوامرهما (`--style`، `--ar`، اختلافات V1–V4، تكبير الدقة) إلى ما يُعادله في Fooocus، حتى يجد المستخدمون القادمون من تلك الأدوات السحابية نموذجًا ذهنيًا مألوفًا.',
          'هدف التصميم المحوري، كما ورد صراحةً في وثائق المشروع نفسه، هو أن يكون عدد نقرات الماوس بين تحميل Fooocus وتوليد أول صورة أقل من ثلاث نقرات. هذا القيد التصميمي الواحد — وليس أي ابتكار نموذجي محدد — هو ما يميز Fooocus عن واجهات Stable Diffusion الأخرى: إنها طبقة واجهة/تجربة مستخدم (UI/UX)، وليست نموذجًا جديدًا.',
        ],
      },
      projectHistory: {
        id: 'project-history',
        title: 'تاريخ المشروع ومطوّره',
        content: [
          '**طوّر Fooocus Lvmin Zhang، الذي ينشر باسم lllyasviel على GitHub؛ وأُنشئ مستودعه على GitHub في 9 أغسطس 2023.** Zhang طالب دكتوراه في علوم الحاسوب في جامعة Stanford، ويبحث في النمذجة التوليدية القابلة للتحكم والرسوميات الحاسوبية.',
          'يُعرف Zhang بشكل مستقل في مجتمع Stable Diffusion بأنه مطوّر [ControlNet](https://github.com/lllyasviel/ControlNet)، معمارية الشبكة العصبية التي أضافت تكييفًا مكانيًا دقيقًا (الوضعية، العمق، خرائط الحواف) إلى نماذج الانتشار من النص إلى الصورة. فاز بحث ControlNet بجائزة Marr Prize، وهي أعلى جائزة لأفضل بحث في المؤتمر الدولي لرؤية الحاسوب (ICCV) لعام 2023 — أحد أكثر مؤتمرات رؤية الحاسوب تنافسية. أصدر Zhang أيضًا أدوات ذكاء اصطناعي محلية أخرى، منها [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (نسخة (fork) من AUTOMATIC1111 تركّز على الأداء)، وPaintsUndo، وIC-Light.',
          'بُنيت Fooocus، بحسب المشروع نفسه، من مزيج من قاعدتَي كود [AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) و[ComfyUI](https://github.com/comfy-org/ComfyUI) — مع إعادة استخدام تقنيات الاستدلال المُثبتة فيهما، مع تقديم واجهة مبسّطة بشكل جذري. حتى سبتمبر 2026، جمع المشروع أكثر من 52,000 نجمة على GitHub وأكثر من 8,600 نسخة (fork)، ما يجعله من بين أكثر أدوات توليد الصور المحلية تقييمًا على GitHub.',
          '**ملاحظة أمنية من المشروع نفسه مباشرةً: لا تملك Fooocus موقعًا رسميًا.** يُحذّر ملف README صراحةً من أن نطاقات مثل fooocus.com وfooocus.net وfooocus.ai وfooocus.org وfooocus.pro وfooocus.one مزيّفة ولا علاقة لها بالمشروع الحقيقي — والمصدر الرسمي الوحيد هو [مستودع GitHub](https://github.com/lllyasviel/Fooocus) نفسه.',
        ],
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'هل لا تزال Fooocus تُصان في 2026؟',
        snippetBlocks: [
          { type: 'one-sentence', text: 'لم يُهجَر مشروع Fooocus، لكن ملف README الخاص به يُصرّح بأن المشروع الأصلي في حالة "Limited Long-Term Support (LTS) مع إصلاح الأخطاء فقط"، دون أي إصدار موسوم منذ أغسطس 2024، ودون خطط لدعم معماريات أحدث مثل FLUX.' },
          { type: 'plain-terms', text: 'يمكن اعتباره أداة مستقرة ومكتملة أكثر من كونه أداة لا تزال تنمو — يرى المطوّر أن مجموعة الميزات القائمة على SDXL مكتملة أساسًا، ولا يسعى وراء كل إصدار نموذج جديد.' },
        ],
        content: [
          'يتضمن [ملف README لـ lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) قسمًا بعنوان **"Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only"**، يُصرّح بأن المشروع — المبني بالكامل على معمارية Stable Diffusion XL — يُعتبر الآن مكتملًا وظيفيًا، وأن "التحديثات المستقبلية ستركّز حصريًا على معالجة أي أخطاء قد تظهر". ويوضّح README صراحةً عدم وجود خطط حالية للانتقال إلى معماريات نماذج أحدث مثل FLUX أو دمجها، مع ترك الباب مفتوحًا إذا اتفق مجتمع المصادر المفتوحة على طريقة خَلَف واحدة مهيمنة.',
          'بالنسبة إلى القراء الراغبين في أحدث النماذج، يوصي ملف README نفسه بمنصات بديلة — تحديدًا [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) (من المطوّر نفسه أيضًا) و[ComfyUI](https://github.com/comfy-org/ComfyUI) أو واجهته المبسّطة [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) — بدلًا من الوعد بدعم FLUX داخل Fooocus نفسها.',
          'هذا لا يعني أن المشروع مهجور. مستودع GitHub **غير مؤرشف**، ولا يزال مفتوحًا لتلقي المشكلات (issues) وطلبات الدمج (pull requests) (314 مشكلة مفتوحة وقت كتابة هذه المراجعة)، وتُظهر بيانات النشاط في GitHub نفسها التزامات (commits) وصلت إلى ديسمبر 2025 — أي بعد أكثر من عام على آخر إصدار موسوم. يشكر ملف README المساهم **mashb1t** على "جهود هائلة" في تقليل الأخطاء المتبقية في الكود، ويحتفظ mashb1t بشكل منفصل بنسخة (fork) على [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus) استمرت في استقبال التزامات (commits) أحدث (آخرها في أكتوبر 2025) — رغم أن هذه النسخة أيضًا لم تُصدر إصدارًا موسومًا جديدًا منذ أغسطس 2024، مواكبةً وتيرة المشروع الأصلي نفسها.',
          'الخلاصة العملية: Fooocus مستقرة وآمنة للتثبيت اليوم، لكن القارئ الذي يبحث تحديدًا عن FLUX أو SD 3.5 أو أي معماريات نماذج ما بعد 2024 ضمن واجهة مبسّطة لن يجد ذلك في Fooocus، وعليه النظر بدلًا منها إلى ComfyUI أو SwarmUI أو WebUI Forge.',
        ],
        note: 'تم التحقق من حقائق حالة الصيانة مباشرةً من مستودع GitHub وملف README الخاصَين بـ lllyasviel/Fooocus، ومن نسخة (fork) mashb1t/Fooocus، بتاريخ 2026-09-06 — تواريخ الدفع (push)، وتواريخ الإصدارات، وعدد المشكلات المفتوحة تتغير مع الوقت؛ يُنصح بإعادة التحقق من [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) قبل افتراض أن هذه الحالة لا تزال سارية.',
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'كيفية تثبيت وتشغيل Fooocus',
        content: [
          'توفّر Fooocus حزمة تثبيت بنقرة واحدة لنظام Windows، بالإضافة إلى مسارات تثبيت يدوية لـ Linux وMac وDocker — لا تحتاج إلى خطوة تحميل نموذج منفصلة للإعداد المسبق الافتراضي، لأن Fooocus تجلب نقطة التفتيش (checkpoint) الافتراضية الخاصة بها تلقائيًا عند أول تشغيل.',
        ],
        numberedItems: [
          { title: 'حمّل حزمة Windows (أو استنسخ (clone) المستودع على Linux/Mac)', whyItMatters: 'يحصل مستخدمو Windows على حزمة `.7z` مستقلة من [صفحة Releases على GitHub](https://github.com/lllyasviel/Fooocus/releases) تتضمن بيئة Python مدمجة — لا حاجة إلى تثبيت Python بشكل منفصل. أما مستخدمو Linux وMac فيستنسخون المستودع ويُعِدّون بيئة Conda أو venv بدلًا من ذلك.' },
          { title: 'استخرج الحزمة وشغّل run.bat', whyItMatters: 'فُك ضغط الأرشيف الذي تم تحميله وانقر نقرًا مزدوجًا على `run.bat` — يُشغّل هذا الإعداد المسبق العام (General). يُشغّل `run_anime.bat` و`run_realistic.bat` بدلًا من ذلك الإعدادين المسبقين Anime وRealistic، ولكل منهما نقطة تفتيش (checkpoint) افتراضية مختلفة.' },
          { title: 'اترك Fooocus تُحمّل نموذجها الافتراضي تلقائيًا', whyItMatters: 'عند أول تشغيل، تُحمّل Fooocus تلقائيًا نقطة التفتيش (checkpoint) الخاصة بالإعداد المسبق الذي شغّلته — Juggernaut XL v8 (Rundiffusion) لـ General، وRealisticStockPhoto v2.0 لـ Realistic، أو AnimaPencilXL v5.0 لـ Anime — إلى مجلد `Fooocus/models/checkpoints`.' },
          { title: 'اكتب الطلب النصي (prompt) واضغط على Generate', whyItMatters: 'لا حاجة إلى اختيار sampler أو مقياس CFG أو الدقة — تطبّق Fooocus تلقائيًا قيمًا افتراضية معقولة. تظل عناصر التحكم المتقدمة متاحة خلف مفتاح "Advanced" لمن يرغب في استخدامها لاحقًا.' },
          { title: 'استخدم Image Prompt أو Inpaint أو Upscale/Vary حسب الحاجة', whyItMatters: 'تُترجم Fooocus سير العمل بأسلوب Midjourney (طلب الصورة، الرسم الداخلي (inpainting)، تكبير الدقة، التنويع الخفيف/القوي) إلى لوحات واجهتها الخاصة، مستخدمةً نموذج الرسم الداخلي الخاص بها وخوارزمية طلب الصورة الخاصة بها بدلًا من إعداد ControlNet قياسي لـ SDXL.' },
          { title: 'انتقل إلى نقاط تفتيش المجتمع عند اكتساب الخبرة', whyItMatters: 'يمكن وضع أي نقطة تفتيش (checkpoint) لـ SDXL من Civitai أو Hugging Face في مجلد `models/checkpoints` واختيارها داخل Fooocus، ما يوسّع الأداة إلى ما هو أبعد من الإعدادات المسبقة الثلاثة المدمجة.' },
        ],
        note: 'تتغير مسارات المجلدات الدقيقة، وعلامات (flags) المُشغِّل، وإصدارات التبعيات بين الإصدارات — اتبع تعليمات الإعداد الحالية على [صفحة GitHub الخاصة بـ lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) بدلًا من دليل عام.',
      },
      promptExpansionStyles: {
        id: 'prompt-expansion-styles',
        title: 'توسيع الطلبات النصية والأساليب المدمجة',
        snippetBlocks: [
          { type: 'one-sentence', text: 'تُشغّل Fooocus نموذج توسيع طلبات نصية (prompt) يعمل دون اتصال بالإنترنت وقائمًا على GPT-2، مُتاح كأسلوب باسم "Fooocus V2"، يضيف تفاصيل تلقائيًا إلى الطلبات القصيرة أو الغامضة قبل التوليد.' },
        ],
        content: [
          '**الميزة المميزة لـ Fooocus هي محرك معالجة طلبات نصية (prompt) يعمل دون اتصال بالإنترنت وقائم على GPT-2، يُعرَض في الواجهة كأسلوب "Fooocus V2".** تُقارِن وثائق المشروع نفسها هذه الميزة بالمعالجة المسبقة الخفية للطلبات في Midjourney وبميزة "Prompt Magic" في LeonardoAI — والفكرة هي أن طلبًا قصيرًا مثل "بيت في حديقة" وطلبًا مكوّنًا من 1,000 كلمة يجب أن ينتجا كلاهما نتائج متماسكة ومصقولة، لأن نموذج التوسيع يملأ تلقائيًا التفاصيل الأسلوبية والتركيبية الناقصة.',
          'إلى جانب Fooocus V2، تتضمن الواجهة عدة أساليب مسبقة مدمجة أخرى، منها "Fooocus Photograph" و"Fooocus Negative" وأسلوب "cinematic-default"، بالإضافة إلى أساليب SDXL إضافية ساهم بها أعضاء المجتمع المذكورون في ملف README الخاص بالمشروع (twri وثري ديفا 3Diva وMarc K3nt3L). يمكن دمج الأساليب، ويمكن تكديس عدة أساليب في لوحة Advanced لمن يرغب في تحكم أكبر مما توفره الإعدادات المسبقة الثلاثة الرئيسية.',
          'من بين التقنيات الداخلية الأخرى الموثقة في README تبديل أصلي للمُصفّي (refiner) داخل k-sampler واحد (لتفادي فقدان الزخم الذي يحدث عندما يُبدّل AUTOMATIC1111 أو ComfyUI بين اثنين من الـ samplers المستقلين)، وتوجيه ADM سلبي مُعاير لأعلى مستوى دقة في SDXL، بالإضافة إلى نموذج رسم داخلي (inpainting) خاص وخوارزمية طلب صورة خاصة بدلًا من خط أنابيب (pipeline) ControlNet أو IP-Adapter القياسي لـ SDXL.',
        ],
      },
      licenseCommercialUse: {
        id: 'license-commercial-use',
        title: 'رخصة Fooocus والاستخدام التجاري',
        snippetBlocks: [
          { type: 'one-sentence', text: 'يخضع كود تطبيق Fooocus لرخصة GPL-3.0 (رخصة جنو العمومية العامة، الإصدار 3)، وهو ما تؤكده بيانات الرخصة على مستودع GitHub الخاص به — لكن نقاط التفتيش (checkpoints) الافتراضية لـ SDXL التي تُحمَّل هي نماذج مجتمعية منفصلة، ولكل منها رخصتها الخاصة المختلفة.' },
          { type: 'plain-terms', text: 'برمجية Fooocus نفسها مفتوحة المصدر بالكامل وحرة الاستخدام أو التعديل؛ أما الرخصة المطبَّقة على الصور المُولَّدة فتعتمد على نقطة التفتيش (checkpoint) التي أنتجتها، ورخصة تلك النقطة — وليست رخصة Fooocus — هي التي تحكم الاستخدام التجاري لتلك الصور المحددة.' },
        ],
        content: [
          'تخضع Fooocus لرخصة **GPL-3.0** (رخصة جنو العمومية العامة، الإصدار 3)، كما تؤكد بيانات الرخصة الوصفية على مستودعها في GitHub. تسمح رخصة GPL-3.0 بالاستخدام والتعديل وإعادة التوزيع الحر لقاعدة كود Fooocus نفسها، شريطة أن يُنشر أي عمل مشتق يُوزَّع أيضًا بموجب GPL-3.0 (نسخ متروك — copyleft) — وينطبق هذا على كود التطبيق، وليس على الصور التي تُولّدها به.',
          'نقاط التفتيش (checkpoints) الافتراضية الثلاث التي تُحمّلها Fooocus تلقائيًا — Juggernaut XL v8 (Rundiffusion) للإعداد المسبق General، وRealisticStockPhoto v2.0 لـ Realistic، وAnimaPencilXL v5.0 لـ Anime — هي إصدارات مُحسَّنة (fine-tunes) من Stable Diffusion XL دُرِّبها المجتمع، ومُستضافة بشكل مستقل على منصات مثل Civitai وHugging Face، ولكل منها رخصتها الخاصة المنفصلة (غالبًا نسخة من رخصة CreativeML OpenRAIL-M، لكن الشروط تختلف حسب نقطة التفتيش وقد تتغيّر). ينبغي لكل من يخطط لاستخدام الصور المُولَّدة تجاريًا مراجعة صفحة رخصة نقطة التفتيش المحددة أولًا — فرخصة GPL-3.0 الخاصة بـ Fooocus لا تمتد تلقائيًا إلى شروط أي نقطة تفتيش، ولا تُلغيها.',
          'ليس للمشروع نفسه أي بُعد تجاري: يُصرّح ملف README بوضوح بأن Fooocus هي "a 100% non-commercial offline open-source software"، دون موقع رسمي أو منتج مدفوع أو أي شركة تبيعه — والتحذير الوحيد الذي ينبغي أخذه بعين الاعتبار هو التنبيه المتعلق بالنطاقات المزيفة الوارد في قسم تاريخ المشروع أعلاه.',
        ],
        note: 'يلخّص هذا القسم بيانات ترخيص منشورة علنًا بتاريخ 2026-09-06؛ ولا يُعدّ استشارة قانونية. يُرجى قراءة [ملف LICENSE الخاص بـ Fooocus](https://github.com/lllyasviel/Fooocus/blob/main/LICENSE) وصفحة رخصة نقطة التفتيش المحددة قبل أي استخدام تجاري.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: 'متطلبات الأجهزة',
        itemHeadings: true,
        columns: ['GPU', 'الحد الأدنى VRAM', 'الحد الأدنى RAM', 'ملاحظات'],
        rows: [
          { 'GPU': 'Nvidia RTX 2000-4000', 'الحد الأدنى VRAM': '4 GB VRAM', 'الحد الأدنى RAM': '8 GB + ذاكرة تبادلية', 'ملاحظات': 'الفئة الأسرع؛ سلسلة RTX 4000 هي الأسرع' },
          { 'GPU': 'Nvidia GTX 900/1000', 'الحد الأدنى VRAM': '8 GB VRAM (يُبلغ البعض عن 6 GB)', 'الحد الأدنى RAM': '8 GB + ذاكرة تبادلية', 'ملاحظات': 'أسرع من المعالج قليلًا فقط' },
          { 'GPU': 'Nvidia GTX أقدم من 900', 'الحد الأدنى VRAM': 'غير مدعومة', 'الحد الأدنى RAM': '—', 'ملاحظات': 'استخدم وضع المعالج فقط بدلًا منها' },
          { 'GPU': 'بطاقة AMD (Windows)', 'الحد الأدنى VRAM': '8 GB VRAM (DirectML، بيتا)', 'الحد الأدنى RAM': '8 GB + ذاكرة تبادلية', 'ملاحظات': 'أبطأ بنحو 3 أضعاف من Nvidia RTX 3000' },
          { 'GPU': 'بطاقة AMD (Linux)', 'الحد الأدنى VRAM': '8 GB VRAM (ROCm، بيتا)', 'الحد الأدنى RAM': '8 GB + ذاكرة تبادلية', 'ملاحظات': 'أبطأ بنحو 1.5 ضعف من Nvidia RTX 3000' },
          { 'GPU': 'Apple M1/M2 (غير رسمي)', 'الحد الأدنى VRAM': 'ذاكرة نظام مشتركة', 'الحد الأدنى RAM': 'مشتركة', 'ملاحظات': 'أبطأ بنحو 9 أضعاف من Nvidia RTX 3000' },
          { 'GPU': 'المعالج فقط', 'الحد الأدنى VRAM': 'لا يوجد (0 GB)', 'الحد الأدنى RAM': '32 GB', 'ملاحظات': 'أبطأ بنحو 17 ضعفًا من Nvidia RTX 3000' },
        ],
        content: [
          '**الحد الأدنى لتشغيل Fooocus هو 4 GB من VRAM من Nvidia بالإضافة إلى 8 GB من ذاكرة النظام مع تفعيل الذاكرة التبادلية الافتراضية**، وفقًا لجدول المواصفات في ملف README الخاص بالمشروع نفسه. هذا يجعل Fooocus من بين واجهات Stable Diffusion المحلية الأقل عتبةً للدخول، إذ غالبًا ما تتطلب نقاط تفتيش SDXL من 8 إلى 12 GB من VRAM في واجهات أخرى تفتقر إلى تحسينات إدارة الذاكرة المدمجة في Fooocus.',
          'يذكر مثال الاختبار الخاص بالمشروع نفسه جهاز لابتوب مزوّدًا ببطاقة Nvidia RTX 3060 (6 GB VRAM) و16 GB من ذاكرة النظام يُولّد الصور في نحو 1.35 ثانية لكل خطوة أخذ عينات (sampling) — وهو مرجع عملي مفيد، رغم أن السرعة الفعلية تعتمد على الدقة والإعداد المسبق وإصدار مُشغّل (driver) البطاقة الرسومية الحالي.',
        ],
        note: 'الأرقام مأخوذة مباشرةً من جدول "Minimal Requirement" في ملف README الخاص بـ lllyasviel/Fooocus، بتاريخ 2026-09-06 — يُصنّف المشروع نفسه صراحةً دعم AMD وMac كدعم تجريبي (بيتا)/غير رسمي، ويختلف الاستخدام الفعلي لذاكرة VRAM حسب الدقة وحجم الدفعة (batch) ومُشغِّلات الأجهزة (drivers) المثبَّتة.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار: مجانية، بلا مستوى مدفوع',
        content: [
          '**Fooocus مجانية بالكامل، دون أي مستوى مدفوع أو اشتراك أو منتج تجاري رسمي من أي نوع.** التطبيق برمجية مفتوحة المصدر مرخّصة بموجب GPL-3.0؛ والتكلفة الوحيدة على القارئ هي جهازه وفاتورة الكهرباء، ونقاط التفتيش (checkpoints) التي تُحمَّل افتراضيًا (Juggernaut XL وRealisticStockPhoto وAnimaPencilXL) مجانية أيضًا.',
          'على عكس بعض أدوات الذكاء الاصطناعي المحلية الأخرى التي تجمع بين تطبيق مجاني ذاتي الاستضافة ومستوى سحابي مدفوع اختياري، لا تقدّم Fooocus أي شيء من هذا القبيل — يُصرّح ملف README بوضوح بأن المشروع لا يملك موقعًا رسميًا ولا شركة وراءه تبيع أي شيء. أي موقع يدّعي بيع نسخة "Fooocus Pro"، أو أي نطاق غير [مستودع GitHub](https://github.com/lllyasviel/Fooocus) نفسه، ينبغي اعتباره غير مرتبط بالمشروع الحقيقي.',
        ],
        note: 'مؤكَّد مباشرةً من ملف README الخاص بالمشروع نفسه بتاريخ 2026-09-06 — يُنصح بإعادة التحقق على [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) إذا كنت تُقيّم هذا لاستخدام تجاري بعد سنوات من الآن.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Fooocus مقابل البدائل',
        columns: ['الخيار', 'الأفضل لـ', 'إمكانية الاستضافة الذاتية', 'الرخصة / التكلفة', 'أهم مقايضة'],
        rows: [
          {
            'الخيار': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            'الأفضل لـ': 'أقل عدد من النقرات للوصول إلى أول صورة؛ لا ضبط يدوي للمعاملات للمبتدئين',
            'إمكانية الاستضافة الذاتية': 'نعم — مجانية، بطاقة رسومية خاصة (حد أدنى 4 GB VRAM)',
            'الرخصة / التكلفة': 'GPL-3.0 (التطبيق)؛ نقاط التفتيش الافتراضية لكل منها رخصتها الخاصة',
            'أهم مقايضة': 'المستودع الأصلي في وضع إصلاح الأخطاء فقط منذ أغسطس 2024؛ SDXL فقط، بلا FLUX',
          },
          {
            'الخيار': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) / [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            'الأفضل لـ': 'واجهة تقنية قائمة على علامات التبويب بأكبر نظام إضافات (extensions) بين واجهات SD المحلية',
            'إمكانية الاستضافة الذاتية': 'نعم — مجانية، بطاقة رسومية خاصة',
            'الرخصة / التكلفة': 'AGPL-3.0، مجانية',
            'أهم مقايضة': 'تُظهر كل معامل مباشرةً — منحنى تعلّم أكثر حدة من Fooocus',
          },
          {
            'الخيار': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            'الأفضل لـ': 'تحكم كامل في خط الأنابيب (pipeline) عبر رسم بياني عقدي (node graph) مرئي؛ عادةً الأول في دعم النماذج الجديدة',
            'إمكانية الاستضافة الذاتية': 'نعم — مجانية، بطاقة رسومية خاصة',
            'الرخصة / التكلفة': 'GPL-3.0، مجانية (يوجد مستوى سحابي/API مدفوع منفصل لـ ComfyUI)',
            'أهم مقايضة': 'واجهة الرسم البياني العقدي تنطوي على تعقيد إعداد حقيقي للمبتدئ تمامًا',
          },
          {
            'الخيار': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            'الأفضل لـ': 'واجهة احترافية مصقولة بلوحة موحّدة وسير عمل موجّه للفرق',
            'إمكانية الاستضافة الذاتية': 'نعم — مجانية، بطاقة رسومية خاصة',
            'الرخصة / التكلفة': 'Apache 2.0، مجانية (توقفت خطة Invoke Cloud المدفوعة بعد استحواذ Adobe عام 2025)',
            'أهم مقايضة': 'نظام إضافات مجتمعي أصغر من AUTOMATIC1111 أو ComfyUI',
          },
          {
            'الخيار': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) (المعروف سابقًا باسم StableSwarmUI من Stability AI)',
            'الأفضل لـ': 'واجهة مبسّطة قائمة على علامات التبويب تعمل فوق نظام ComfyUI الخلفي (backend)',
            'إمكانية الاستضافة الذاتية': 'نعم — مجانية، بطاقة رسومية خاصة',
            'الرخصة / التكلفة': 'رخصة MIT، مجانية',
            'أهم مقايضة': 'مجتمع أصغر من ComfyUI أو AUTOMATIC1111؛ أقل تركيزًا على المبتدئين من Fooocus',
          },
        ],
        note: 'هذا ملخص توضع (positioning)، وليس ترتيبًا مبنيًا على قياس أداء (benchmark). جرى التحقق من التراخيص وعدد النجوم وحالة الصيانة مباشرةً من مستودع GitHub الخاص بكل مشروع بتاريخ 2026-09-06، وقد تتغيّر — راجع [مراجعة Stable Diffusion](/ar/power-local-llm/stable-diffusion-review) للاطلاع على عائلة النماذج الأساسية التي تعتمد عليها هذه المقالة وكل واجهة من الواجهات المذكورة أعلاه.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن تناسب Fooocus',
        items: [
          '**المبتدئ تمامًا الذي لم يُشغّل توليد صور بالذكاء الاصطناعي محليًا من قبل.** يُزيل تصميم Fooocus القائم على الإعدادات المسبقة وتوسيع الطلبات النصية أكثر أجزاء منحنى تعلّم Stable Diffusion حدة — لا حاجة إلى تحديد sampler أو مقياس CFG أو الدقة للحصول على نتيجة قابلة للاستخدام.',
          '**القارئ الراغب في تجربة قريبة من Midjourney دون اشتراك أو اعتماد على السحابة.** تعكس مجموعة ميزات Fooocus عمدًا قائمة أوامر Midjourney (الأساليب، التنويعات، تكبير الدقة) بينما تعمل بالكامل دون اتصال بالإنترنت على أجهزة محلية.',
          '**مالك بطاقة رسومية بذاكرة VRAM محدودة.** الحد الأدنى البالغ 4 GB من VRAM (بدءًا من سلسلة Nvidia RTX 2000) أقل مما يوصي به عادةً AUTOMATIC1111 أو ComfyUI للاستخدام المريح لـ SDXL، ما يجعل Fooocus نقطة دخول معقولة على بطاقات رسومية أقدم أو أقل تكلفة.',
          '**القارئ المكتفي بالنماذج القائمة على SDXL.** إذا كانت مجموعة الإعدادات المسبقة الحالية (الاستخدام العام، الواقعي، الأنمي) تغطي بالفعل حالة الاستخدام لديك، فإن استقرار Fooocus وبساطتها يفوقان افتقارها لدعم المعماريات الأحدث.',
          '**القارئ الذي يريد أن يعمل ترجيح الطلبات النصية بأسلوب Civitai بلا عناء.** تستخدم Fooocus صياغة إعادة ترجيح الطلبات النصية الخاصة بـ AUTOMATIC1111، لذا تتصرف الطلبات المنسوخة مباشرة من Civitai كما هو متوقع دون الحاجة لإعادة تنسيقها.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا تناسب Fooocus',
        items: [
          '**القارئ الراغب في FLUX أو SD 3.5 أو أي معمارية نماذج ما بعد 2024.** يُصرّح ملف README الخاص بـ Fooocus بأنه لا توجد حاليًا خطط لدعم معماريات أحدث — على القراء الراغبين في أحدث النماذج استخدام [ComfyUI](https://github.com/comfy-org/ComfyUI) أو [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) أو [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) بدلًا من ذلك.',
          '**المستخدم المتقدم الراغب في تحكم دقيق في كل خطوة من خط أنابيب (pipeline) التوليد.** تقوم فلسفة تصميم Fooocus بأكملها على إخفاء المعاملات؛ على من يريد فحص أو إعادة توصيل كل مرحلة من مراحل خط أنابيب الانتشار استخدام الرسم البياني العقدي في ComfyUI بدلًا من ذلك.',
          '**القارئ المعتمد على المشروع الأصلي للحصول على إصلاحات سريعة للأخطاء أو ميزات جديدة.** المستودع الأصلي في وضع إصلاح الأخطاء فقط صراحةً، دون خارطة طريق مُلتزَم بها — على من يحتاج إلى تطوير ميزات فعّال تقييم [نسخة (fork) mashb1t/Fooocus التي يصونها المجتمع](https://github.com/mashb1t/Fooocus) أو واجهة مختلفة تمامًا.',
          '**فريق يحتاج إلى معالجة دفعية (batch) بمستوى إنتاجي أو سير عمل يعتمد على API بالدرجة الأولى.** بُنيت Fooocus حول واجهة Gradio لمستخدم واحد، وليست خادم API — على من يبني خط أنابيب آليًا النظر إلى وضع API في ComfyUI أو InvokeAI بدلًا من ذلك.',
          '**القارئ المحتاج إلى تكييف قوي للوضعية/العمق بأسلوب ControlNet.** تستخدم Fooocus نظامها المبسّط الخاص "Image Prompt" بدلًا من إتاحة الاختيار الكامل لنماذج ControlNet؛ على من يحتاج إلى تحكم دقيق في الوضعية أو العمق استخدام AUTOMATIC1111 أو WebUI Forge أو ComfyUI مع نماذج ControlNet مخصصة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Fooocus مجانية؟',
            a: 'نعم. Fooocus برمجية مجانية ومفتوحة المصدر مرخّصة بموجب GPL-3.0، دون مستوى مدفوع أو اشتراك أو منتج تجاري رسمي. نقاط التفتيش (checkpoints) الافتراضية لـ SDXL التي تُحمَّل (Juggernaut XL وRealisticStockPhoto وAnimaPencilXL) مجانية أيضًا، لكن لكل منها رخصتها الخاصة المنفصلة التي تحكم الاستخدام التجاري للصور المُولَّدة.',
          },
          {
            q: 'هل لا تزال Fooocus تُحدَّث؟',
            a: 'هي في حالة نشاط منخفض، وليست مهجورة. يُصرّح ملف README الخاص بالمشروع بأنه في وضع "Limited Long-Term Support (LTS) مع إصلاح الأخطاء فقط": كان آخر إصدار موسوم هو v2.5.5 بتاريخ 12 أغسطس 2024، ولا توجد خطط لدعم معماريات نماذج أحدث مثل FLUX. مستودع GitHub غير مؤرشف واستمر في استقبال التزامات (commits) حتى ديسمبر 2025، ويحتفظ المساهم mashb1t بنسخة (fork) محدَّثة بنشاط على github.com/mashb1t/Fooocus.',
          },
          {
            q: 'من طوّر Fooocus؟',
            a: 'طوّر Fooocus Lvmin Zhang، الذي ينشر باسم lllyasviel على GitHub. Zhang طالب دكتوراه في علوم الحاسوب في جامعة Stanford، ومعروف أيضًا بتطوير ControlNet، الذي فاز بحثه بجائزة Marr Prize (أعلى جائزة لأفضل بحث في مؤتمر ICCV 2023)، بالإضافة إلى WebUI Forge وPaintsUndo وIC-Light.',
          },
          {
            q: 'كم من VRAM تحتاج Fooocus؟',
            a: 'الحد الأدنى هو 4 GB من VRAM على بطاقة Nvidia من سلسلة RTX 2000 أو 3000 أو 4000، بالإضافة إلى 8 GB من ذاكرة النظام مع تفعيل الذاكرة التبادلية الافتراضية. تحتاج بطاقات Nvidia GTX 900/1000 الأقدم إلى نحو 8 GB من VRAM، وتحتاج بطاقات AMD إلى نحو 8 GB من VRAM عبر DirectML (على Windows، بيتا) أو ROCm (على Linux، بيتا)، ويمكن التشغيل بالمعالج فقط مع 32 GB من ذاكرة النظام، لكنه يعمل بشكل أبطأ بنحو 17 مرة من بطاقة Nvidia من سلسلة RTX 3000.',
          },
          {
            q: 'ما هو توسيع الطلبات النصية القائم على GPT-2 في Fooocus؟',
            a: 'هو محرك معالجة طلبات نصية (prompt) يعمل دون اتصال بالإنترنت، يُعرَض في الواجهة كأسلوب "Fooocus V2"، يوسّع تلقائيًا الطلبات القصيرة أو الغامضة بتفاصيل أسلوبية وتركيبية إضافية قبل التوليد — وهو مشابه من حيث المفهوم للمعالجة المسبقة الخفية للطلبات في Midjourney أو ميزة "Prompt Magic" في LeonardoAI. يعمل محليًا ولا يتطلب اتصالًا بالإنترنت.',
          },
          {
            q: 'هل Fooocus أفضل من AUTOMATIC1111 أو ComfyUI؟',
            a: 'يعتمد ذلك على هدفك. Fooocus أسهل للبدء بها لأنها تُخفي المعاملات التقنية خلف إعدادات مسبقة، على حساب التحكم الدقيق. تُظهر واجهة AUTOMATIC1111 (أو نسختها WebUI Forge) كل معامل مباشرةً، وتملك أكبر نظام إضافات (extensions) بين واجهات Stable Diffusion المحلية. تُقدّم ComfyUI تحكمًا كاملًا في خط الأنابيب عبر رسم بياني عقدي، وعادةً ما تكون الأولى في دعم إصدارات النماذج الجديدة. عادةً ما ينتقل القراء الذين يتجاوزون إمكانات إعدادات Fooocus المسبقة إلى أحد هذين الخيارين.',
          },
          {
            q: 'هل تدعم Fooocus نموذج FLUX أو Stable Diffusion 3.5؟',
            a: 'لا. تُبنى Fooocus بالكامل على معمارية Stable Diffusion XL، ويُصرّح ملف README الخاص بها بأنه لا توجد حاليًا خطط لإضافة دعم لمعماريات أحدث مثل FLUX. على القراء الراغبين في استخدام FLUX أو SD 3.5 ضمن إعداد محلي مماثل استخدام ComfyUI أو SwarmUI أو WebUI Forge بدلًا من ذلك.',
          },
          {
            q: 'من أين أحمّل Fooocus؟',
            a: 'المصدر الرسمي الوحيد هو [مستودع GitHub الخاص بـ lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)، حيث تُنشَر حزمة تثبيت بنقرة واحدة لنظام Windows في قسم Releases. يُحذّر ملف README الخاص بالمشروع صراحةً من أن نطاقات مثل fooocus.com وfooocus.net وfooocus.ai وfooocus.org وfooocus.pro وfooocus.one مواقع مزيّفة لا علاقة لها بالمشروع الحقيقي.',
          },
          {
            q: 'ما هو النموذج الافتراضي الذي تستخدمه Fooocus؟',
            a: 'تُحمّل Fooocus تلقائيًا نقطة تفتيش (checkpoint) افتراضية مختلفة لـ SDXL حسب الإعداد المسبق الذي تُشغّله: Juggernaut XL v8 (Rundiffusion) للإعداد General، وRealisticStockPhoto v2.0 لـ Realistic، وAnimaPencilXL v5.0 لـ Anime. جميعها نقاط تفتيش دُرِّبها المجتمع ومُستضافة بشكل مستقل عن Fooocus نفسها.',
          },
          {
            q: 'هل يمكنني استخدام الصور المُولَّدة بواسطة Fooocus تجاريًا؟',
            a: 'تُغطي رخصة GPL-3.0 الخاصة بـ Fooocus كود التطبيق، وليس الصور التي تُنتجها. يخضع الاستخدام التجاري للصورة المُولَّدة لرخصة نقطة التفتيش (checkpoint) المحددة المستخدمة في إنشائها — نقاط التفتيش الافتراضية (Juggernaut XL وRealisticStockPhoto وAnimaPencilXL) لكل منها رخصتها الخاصة المنفصلة، غالبًا ما تكون نسخة من رخصة CreativeML OpenRAIL-M، منشورة على صفحتها في Civitai أو Hugging Face. يُرجى مراجعة تلك الصفحة قبل الاستخدام التجاري.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'تستحق Fooocus سمعتها كأسهل طريقة لتشغيل Stable Diffusion محليًا — يُزيل تصميمها القائم على الإعدادات المسبقة وتوسيع الطلبات النصية فعليًا أكثر أجزاء منحنى التعلّم حدة، وهو ما يجعل AUTOMATIC1111 وComfyUI مخيفَين للمستخدم لأول مرة، وتفعل ذلك مع العمل بالكامل دون اتصال بالإنترنت على أجهزة متواضعة كبطاقة رسومية بذاكرة VRAM قدرها 4 GB. أما التحفظ الصريح فيتعلق بالصيانة: يضع ملف README الخاص بالمشروع الأصلي نفسه في وضع إصلاح الأخطاء فقط، دون إصدار موسوم منذ أغسطس 2024، ودون خطط لدعم FLUX أو معماريات أخرى ما بعد 2024، رغم أن المستودع يظل نشطًا وغير مؤرشف. سيجد القراء الراغبون في أبسط نقطة دخول ممكنة إلى توليد الصور المحلي القائم على SDXL، والذين لا يحتاجون إلى أحدث معماريات النماذج أو تحكم دقيق في خط الأنابيب، أن Fooocus تُقدّم بالضبط ما تَعِد به. أما من يبحث عن تحكم أكبر (ComfyUI، AUTOMATIC1111/WebUI Forge) أو نماذج أحدث ضمن إعداد محلي مماثل (ComfyUI، SwarmUI) فعليه النظر إلى ما هو أبعد من Fooocus صوب تلك الخيارات — ويُفضَّل بعد التحقق مباشرةً من [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus) من الحالة الراهنة للمشروع.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[lllyasviel/Fooocus — مستودع GitHub وملف README](https://github.com/lllyasviel/Fooocus) — المصدر الأساسي للميزات، والتثبيت، وجدول الحد الأدنى لمتطلبات الأجهزة، والرخصة، وتصريح حالة الصيانة "Limited Long-Term Support".',
          '[lllyasviel/Fooocus — Releases](https://github.com/lllyasviel/Fooocus/releases) — سجل الإصدارات وتواريخها، بما في ذلك أحدث إصدار موسوم، v2.5.5 (12 أغسطس 2024).',
          '[mashb1t/Fooocus — مستودع GitHub](https://github.com/mashb1t/Fooocus) — نسخة (fork) يصونها المجتمع بنشاط أحدث في الالتزامات (commits) من المستودع الأصلي.',
          '[lllyasviel/ControlNet — مستودع GitHub](https://github.com/lllyasviel/ControlNet) — مشروع سابق للمطوّر Lvmin Zhang، أُشير إليه كخلفية عن المطوّر.',
          '[Lvmin Zhang — الصفحة الأكاديمية الشخصية](https://lllyasviel.github.io/lvmin_zhang/) — خلفية سيرة ذاتية وبحثية عن المطوّر.',
          '[Scientific American — ملف تعريفي عن Lvmin Zhang](https://www.scientificamerican.com/article/lvmin-zhang/) — ملف تعريفي مستقل يغطي عمل Zhang في أدوات الذكاء الاصطناعي، بما في ذلك Fooocus وControlNet.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Stable Diffusion: نماذج مجانية محلية للتحويل من نص إلى صورة](/ar/power-local-llm/stable-diffusion-review) — عائلة النماذج المفتوحة الأساسية التي تعمل عليها Fooocus، بما في ذلك شروط الرخصة وتاريخ الإصدارات.',
          '[توليد الصور بالذكاء الاصطناعي محليًا مقابل السحابة: FLUX وSD 3.5 وQwen-Image مقابل Adobe Firefly وgetimg.ai](/ar/power-local-llm/local-ai-image-generation-vs-cloud) — مقارنة أعمق لعائلات نماذج الصور المحلية للقراء الذين يتجاوزون نطاق Fooocus المقتصر على SDXL.',
          '[دليل برمجيات النماذج اللغوية المحلية 2026](/ar/power-local-llm/local-llm-software-directory) — دليل شامل للتطبيقات والأدوات لجميع المنصات.',
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
    heroImage: '/images/fooocus-review-hero-zh.webp',
    title: 'Fooocus评测(2026):最简单的本地Stable Diffusion界面',
    seoTitle: 'Fooocus评测2026:最易用的本地Stable Diffusion UI',
    intro:
      'Fooocus是一款免费、开源、完全离线运行的Stable Diffusion XL图像生成界面,由Lvmin Zhang(GitHub用户名lllyasviel,同时也是[ControlNet](https://github.com/lllyasviel/ControlNet)的开发者)创建。它刻意隐藏了几乎所有技术参数——采样器、CFG比例、分辨率网格——转而用预设和自动提示词扩展引擎取代,让用户能在约三次点击内从空白文本框生成一张完整图像。本评测介绍Fooocus实际的工作原理、GPL-3.0许可证、真实硬件需求,以及最重要的一点——诚实说明其当前的维护状态,因为原始仓库已公开声明现已进入仅修复漏洞的阶段。',
    metaDescription:
      'Fooocus评测2026:ControlNet开发者lllyasviel打造的新手友好型本地Stable Diffusion UI——真实VRAM需求、GPL-3.0许可证,以及诚实的维护状态(2024年起仅提供LTS/漏洞修复)。',
    twitterDescription:
      'Fooocus评测2026:来自ControlNet开发者、点击次数最少的本地Stable Diffusion UI——VRAM需求、基于GPT-2的提示词扩展、GPL-3.0许可证,以及维护状态的真相。',
    audience:
      '希望以最简单方式在本地运行Stable Diffusion、无需学习AUTOMATIC1111或ComfyUI的读者——涵盖安装步骤、硬件需求,以及该项目是否仍在积极维护。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Beginner',
    primaryTerm: 'Fooocus 评测',
    targetKeywords: [
      'fooocus 评测',
      'fooocus vs comfyui',
      'fooocus vs automatic1111',
      '最简单的 stable diffusion ui',
      'fooocus vram 要求',
      'fooocus 维护状态',
      'fooocus 下载',
      'fooocus 许可证',
    ],
    current_models_mentioned: ['Stable Diffusion XL', 'Juggernaut XL v8 (Rundiffusion)', 'realisticStockPhoto v2.0', 'animaPencilXL v5.0', 'FLUX.1'],
    current_hardware_mentioned: ['4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '8 GB系统内存', '32 GB系统内存', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Fooocus是一款免费开源的Stable Diffusion XL本地界面,将几乎所有技术设置都隐藏在预设背后,是最容易上手的本地图像生成UI——但原始项目目前已进入"Limited Long-Term Support(LTS)with Bug Fixes Only"(有限长期支持,仅修复漏洞)状态,自2024年8月以来未发布任何带标签的新版本。** 它最低只需4 GB VRAM(Nvidia RTX 2000/3000/4000系列)和8 GB系统内存即可离线运行,使用基于GPT-2的提示词扩展引擎自动补充风格和细节,并以GPL-3.0许可证发布。它不支持更新的架构(不支持FLUX),因此想要最新模型的读者也应查看同一开发者生态下的[ComfyUI](https://github.com/comfy-org/ComfyUI)或[WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)。在认定其仍在积极开发之前,请先在[GitHub](https://github.com/lllyasviel/Fooocus)上核实仓库的当前活跃度。',
    quickAnswerTop: {
      zh: {
        question: 'Fooocus还在维护吗?需要多少VRAM?',
        answer:
          'Fooocus并未被放弃,但其官方README声明该项目已进入"Limited Long-Term Support(LTS)with Bug Fixes Only"模式——最后一个带标签的版本是2024年8月12日发布的v2.5.5,且没有计划支持FLUX等更新的架构。GitHub仓库并未被归档,仍在持续接收提交(最近一次在2025年12月),贡献者mashb1t在github.com/mashb1t/Fooocus上维护着一个持续活跃更新的分支(fork)。要让Fooocus运行起来,至少需要Nvidia RTX 2000/3000/4000系列GPU上的4 GB VRAM,以及8 GB系统内存(需启用虚拟交换空间)。',
        bullets: [
          '开发者:Lvmin Zhang(lllyasviel),斯坦福大学计算机科学博士生,同时也是ControlNet的开发者,其论文获得了Marr Prize(ICCV 2023最佳论文奖)。',
          '状态:原始仓库自2024年起进入仅修复漏洞模式;未计划支持FLUX或更新的模型。未被归档——仍在接收提交。',
          '最低硬件要求:4 GB VRAM(Nvidia RTX 2000/3000/4000系列)以及启用交换空间的8 GB系统内存;较老的GTX 900/1000系列需要8 GB VRAM。',
          '许可证:应用程序代码采用GPL-3.0;默认的SDXL检查点(Juggernaut XL等)各自拥有独立的单独许可证。',
          '特色功能:一个离线运行、基于GPT-2的提示词扩展引擎("Fooocus V2"风格),可自动补全缺失的细节,类似于Midjourney的隐藏预处理机制。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Fooocus是什么', anchor: 'what-is-fooocus' },
      { label: '项目历史与开发者', anchor: 'project-history' },
      { label: '当前维护状态(2026年)', anchor: 'maintenance-status' },
      { label: '如何安装和运行Fooocus', anchor: 'how-to-install' },
      { label: '提示词扩展与内置风格', anchor: 'prompt-expansion-styles' },
      { label: '许可证与商业使用', anchor: 'license-commercial-use' },
      { label: '硬件要求', anchor: 'hardware-requirements' },
      { label: '价格', anchor: 'pricing' },
      { label: 'Fooocus与其他替代方案对比', anchor: 'vs-alternatives' },
      { label: '哪些人适合使用Fooocus', anchor: 'who-should-use' },
      { label: '哪些人不适合使用Fooocus', anchor: 'who-should-not-use' },
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
          'Fooocus是一款免费、开源、完全离线运行的Stable Diffusion XL界面,旨在最大限度地减少手动调整——开发者表示,生成第一张图像所需的鼠标点击次数不到三次。',
          '由Lvmin Zhang创建,其GitHub用户名为lllyasviel,斯坦福大学计算机科学博士生,同时也是[ControlNet](https://github.com/lllyasviel/ControlNet)的开发者,其论文获得了Marr Prize(ICCV 2023最佳论文奖)。',
          '该项目自己的README声明,项目现已进入"Limited Long-Term Support(LTS)with Bug Fixes Only"状态:最后一个带标签的版本是2024年8月12日发布的v2.5.5,目前没有计划支持FLUX等更新的模型架构。',
          'GitHub仓库并未被归档,并持续接收提交(最近一次在2025年12月);贡献者mashb1t在[github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus)上维护着一个持续活跃更新的分支。',
          '最低硬件要求是Nvidia RTX 2000/3000/4000系列GPU上的4 GB VRAM,加上启用虚拟交换空间的8 GB系统内存;较老的GTX 900/1000系列大约需要8 GB VRAM。',
          'Fooocus采用GPL-3.0许可证,100%免费,没有任何付费层级——但其默认下载的SDXL检查点(Juggernaut XL、RealisticStockPhoto、AnimaPencilXL)在Civitai/Hugging Face上各自拥有独立的单独许可证。',
        ],
      },
      whatIsFooocus: {
        id: 'what-is-fooocus',
        title: 'Fooocus是什么',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus是一款免费、离线运行、基于Gradio的Stable Diffusion XL界面,将技术参数隐藏在预设和自动提示词扩展背后,力求实现"只需输入提示词"的体验。' },
          { type: 'plain-terms', text: '如果说AUTOMATIC1111和ComfyUI分别是一个技术控制面板和一张接线图,那么Fooocus更接近于单一的"生成"按钮——它替你做出大部分决定,只有当你主动去寻找高级设置时才会显示出来。' },
        ],
        content: [
          '**Fooocus是一款本地、离线运行的图像生成应用程序,完全基于Stable Diffusion XL(SDXL)架构构建,以GPL-3.0许可证发布为自由开源软件。** 与AUTOMATIC1111基于标签页的技术界面或ComfyUI的节点图编辑器不同,Fooocus刻意去掉了大部分手动控制——没有可见的采样器选择器,默认没有CFG比例滑块,没有分辨率网格——转而提供一小组预设(General、Realistic、Anime)以及一个完全可以忽略的"Advanced"面板。',
          '该项目运行在[Gradio](https://www.gradio.app/)之上,这是许多其他本地AI工具也在使用的Python Web UI框架。其界面有意借鉴了Midjourney和LeonardoAI的功能列表,将它们的每个命令(`--style`、`--ar`、V1~V4变体、放大)都映射为Fooocus中的对应功能,让来自这些云端工具的用户也能拥有熟悉的心理模型。',
          '该项目自身文档直接指出的核心设计目标是:从下载Fooocus到生成第一张图像之间,鼠标点击次数应少于三次。正是这一单一的设计约束——而非某项具体的模型创新——将Fooocus与其他Stable Diffusion前端区分开来:它是一层UI/UX,而不是一个新模型。',
        ],
      },
      projectHistory: {
        id: 'project-history',
        title: '项目历史与开发者',
        content: [
          '**Fooocus由Lvmin Zhang创建,他以GitHub用户名lllyasviel发布作品;其仓库于2023年8月9日在GitHub上创建。** Zhang是斯坦福大学计算机科学博士生,研究方向为可控生成式建模与计算机图形学。',
          'Zhang在Stable Diffusion社区中独立地以[ControlNet](https://github.com/lllyasviel/ControlNet)的开发者身份而闻名,该神经网络架构为文本到图像的扩散模型增加了精确的空间条件控制(姿态、深度、边缘图)。ControlNet的论文获得了Marr Prize——国际计算机视觉大会(ICCV)2023年的最佳论文奖,该会议是计算机视觉领域竞争最激烈的会议之一。Zhang还发布了其他本地AI工具,包括专注于性能的AUTOMATIC1111分支[WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)、PaintsUndo和IC-Light。',
          '按照项目自身的说法,Fooocus是结合了[AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)和[ComfyUI](https://github.com/comfy-org/ComfyUI)代码库构建而成的——沿用了它们经过验证的推理技术,同时呈现出一个大幅简化的前端。截至2026年9月,该项目已累积超过52,000个GitHub星标和超过8,600个分支(fork),是GitHub上星标最多的本地图像生成工具之一。',
          '**来自项目本身的一条安全提示:Fooocus没有官方网站。** README明确警告,诸如fooocus.com、fooocus.net、fooocus.ai、fooocus.org、fooocus.pro、fooocus.one等域名均为假冒网站,与真实项目没有任何关系——唯一官方来源是[GitHub仓库](https://github.com/lllyasviel/Fooocus)本身。',
        ],
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: '2026年Fooocus是否仍在维护?',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus并未被放弃,但其官方README声明原始项目已进入"Limited Long-Term Support(LTS)with Bug Fixes Only"状态,自2024年8月以来没有带标签的新版本,也没有计划支持FLUX等更新的架构。' },
          { type: 'plain-terms', text: '可以把它看作一个已经完成、稳定的工具,而不是一个仍在成长的工具——开发者认为基于SDXL的功能集已基本完备,不再追逐每一次新模型发布。' },
        ],
        content: [
          '[lllyasviel/Fooocus的README](https://github.com/lllyasviel/Fooocus)中有一节标题为**"Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only"**,声明该项目——完全基于Stable Diffusion XL架构构建——现已被视为功能完备,"未来的更新将专注于修复可能出现的任何漏洞"。README明确表示,目前没有迁移到或整合FLUX等更新模型架构的计划,不过如果开源社区最终收敛到某一种占主导地位的后继方法,情况也可能改变。',
          '对于希望使用最新模型的读者,README本身推荐了替代平台——具体来说是(同样出自同一位开发者的)[WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge),以及[ComfyUI](https://github.com/comfy-org/ComfyUI)或其简化前端[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI),而不是承诺在Fooocus内部支持FLUX。',
          '这与项目被放弃并不相同。GitHub仓库**并未被归档**,仍然接受issue和拉取请求(截至本评测撰写时有314个未解决的issue),GitHub自身的活动数据显示最近的提交时间为2025年12月——比最后一次带标签的版本晚了一年多。README感谢贡献者**mashb1t**"付出巨大努力"减少了代码中遗留的漏洞,而mashb1t还单独在[github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus)维护着一个分支,提交活动更为新近(最近一次在2025年10月)——不过该分支自2024年8月以来同样没有发布新的带标签版本,与主项目的节奏相同。',
          '实际的结论是:Fooocus在今天依然稳定,安装也很安全,但如果读者专门想在一个简化界面中使用FLUX、SD 3.5或其他2024年以后的模型架构,Fooocus无法满足这一需求,应转而考虑ComfyUI、SwarmUI或WebUI Forge。',
        ],
        note: '维护状态相关事实已于2026-09-06直接对照lllyasviel/Fooocus的GitHub仓库和README,以及mashb1t/Fooocus分支进行核实——推送日期、发布日期和未解决issue数量会随时间变化;在假定该状态仍然有效之前,请重新查看[github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)。',
      },
      howToInstall: {
        id: 'how-to-install',
        title: '如何安装和运行Fooocus',
        content: [
          'Fooocus为Windows提供了一键安装包,同时也为Linux、Mac和Docker提供了手动安装方式——默认预设不需要单独下载模型的步骤,因为Fooocus会在首次启动时自动获取其默认检查点。',
        ],
        numberedItems: [
          { title: '下载Windows安装包(或在Linux/Mac上克隆仓库)', whyItMatters: 'Windows用户可以从[GitHub Releases页面](https://github.com/lllyasviel/Fooocus/releases)获取一个内置Python环境的独立`.7z`安装包——无需单独安装Python。Linux和Mac用户则改为克隆仓库并配置Conda或venv环境。' },
          { title: '解压安装包并运行run.bat', whyItMatters: '解压下载的压缩包,双击运行`run.bat`——这将启动General预设。`run_anime.bat`和`run_realistic.bat`则分别启动Anime和Realistic预设,各自使用不同的默认检查点。' },
          { title: '让Fooocus自动下载其默认模型', whyItMatters: '首次启动时,Fooocus会自动下载与所运行预设对应的检查点——General对应Juggernaut XL v8(Rundiffusion)、Realistic对应RealisticStockPhoto v2.0、Anime对应AnimaPencilXL v5.0——并存放到`Fooocus/models/checkpoints`文件夹中。' },
          { title: '输入提示词并点击Generate', whyItMatters: '无需选择采样器、CFG比例或分辨率——Fooocus会自动应用合理的默认值。高级控制项隐藏在"Advanced"开关背后,供以后需要时使用。' },
          { title: '按需使用Image Prompt、Inpaint或Upscale/Vary', whyItMatters: 'Fooocus将Midjourney风格的工作流(图像提示、局部重绘、放大、轻微/强烈变化)映射到自己的UI面板上,使用自有的局部重绘模型和图像提示算法,而非标准的SDXL ControlNet配置。' },
          { title: '熟悉后切换到社区检查点', whyItMatters: '任何来自Civitai或Hugging Face的SDXL检查点都可以放入`models/checkpoints`文件夹,并在Fooocus中选择使用,从而扩展至内置三种预设之外的更多可能性。' },
        ],
        note: '确切的文件夹路径、启动器参数和依赖版本会因版本不同而变化——请遵循[lllyasviel/Fooocus的GitHub页面](https://github.com/lllyasviel/Fooocus)上最新的安装说明,而不是通用指南。',
      },
      promptExpansionStyles: {
        id: 'prompt-expansion-styles',
        title: '提示词扩展与内置风格',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus运行一个离线的、基于GPT-2的提示词扩展模型,以"Fooocus V2"风格的形式提供,会在生成前自动为简短或模糊的提示词补充细节。' },
        ],
        content: [
          '**Fooocus的标志性功能是一个离线运行、基于GPT-2的提示词处理引擎,在界面中以"Fooocus V2"风格呈现。** 项目自身的文档将其与Midjourney隐藏的提示词预处理以及LeonardoAI的"Prompt Magic"相比较——其理念是,无论是"花园里的房子"这样的简短提示词,还是长达1,000字的提示词,都应该产生精致、连贯的结果,因为扩展模型会自动补充缺失的风格和构图细节。',
          '除了Fooocus V2之外,该界面还提供了其他几种内置的预设风格,包括"Fooocus Photograph"、"Fooocus Negative"以及一种名为"cinematic-default"的风格,另外还有由项目README中列出的社区成员(twri、3Diva和Marc K3nt3L)贡献的额外SDXL风格。这些风格可以组合使用,也可以在Advanced面板中叠加多个,以满足希望获得比三个顶层预设更多控制权的读者。',
          'README还记录了其他一些底层技术,包括在单个k-sampler内进行原生的精炼模型(refiner)切换(避免了AUTOMATIC1111或ComfyUI在两个独立采样器之间切换时发生的动量损失),针对SDXL最高分辨率层级调整的负向ADM引导,以及使用自有的局部重绘模型和图像提示算法,而不是标准的SDXL ControlNet或IP-Adapter流水线。',
        ],
      },
      licenseCommercialUse: {
        id: 'license-commercial-use',
        title: 'Fooocus许可证与商业使用',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus的应用程序代码采用GPL-3.0(GNU通用公共许可证第3版)许可,这一点已在其GitHub仓库中确认——但其默认下载的SDXL检查点属于独立的社区模型,各自拥有不同的独立许可证。' },
          { type: 'plain-terms', text: 'Fooocus软件本身完全开源,可自由使用或修改;生成图像所适用的许可证取决于生成该图像所使用的检查点——决定这些具体图像商业使用条件的是该检查点的许可证,而不是Fooocus的许可证。' },
        ],
        content: [
          'Fooocus采用**GPL-3.0**(GNU通用公共许可证第3版)许可,这一点已通过其GitHub仓库中的许可证元数据得到确认。GPL-3.0允许自由使用、修改和再分发Fooocus代码库本身,前提是任何分发的衍生作品也必须以GPL-3.0(著佐权/copyleft)方式发布——这适用于应用程序代码,而不适用于你用它生成的图像。',
          'Fooocus自动下载的三个默认检查点——General预设对应的Juggernaut XL v8(Rundiffusion)、Realistic对应的RealisticStockPhoto v2.0,以及Anime对应的AnimaPencilXL v5.0——都是由社区训练的Stable Diffusion XL微调模型,独立托管在Civitai和Hugging Face等平台上,每一个都拥有自己独立的许可证(通常是CreativeML OpenRAIL-M的某个变体,但具体条款因检查点而异,且可能发生变化)。任何计划将生成图像用于商业用途的人,都应事先查看该特定检查点自身的许可证页面——Fooocus的GPL-3.0许可证不会自动延伸到某个检查点的条款,也不会取代这些条款。',
          '该项目本身没有任何商业维度:README明确声明Fooocus是"a 100% non-commercial offline open-source software"(100%非商业离线开源软件),没有官方网站、没有付费产品,也没有任何公司在销售它——唯一需要留意的是上文"项目历史与开发者"一节中提到的关于假冒域名的警告。',
        ],
        note: '本节总结了截至2026-09-06公开发布的许可证元数据;不构成法律建议。任何商业部署前,请阅读[Fooocus的LICENSE文件](https://github.com/lllyasviel/Fooocus/blob/main/LICENSE)以及具体检查点的许可证页面。',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: '硬件要求',
        itemHeadings: true,
        columns: ['GPU', '最低VRAM', '最低RAM', '说明'],
        rows: [
          { 'GPU': 'Nvidia RTX 2000-4000', '最低VRAM': '4 GB VRAM', '最低RAM': '8 GB + 交换空间', '说明': '速度最快的档位;RTX 4000系列最快' },
          { 'GPU': 'Nvidia GTX 900/1000', '最低VRAM': '8 GB VRAM(部分用户报告6 GB)', '最低RAM': '8 GB + 交换空间', '说明': '仅比CPU略快' },
          { 'GPU': 'Nvidia GTX 900以下', '最低VRAM': '不支持', '最低RAM': '—', '说明': '请改用纯CPU模式' },
          { 'GPU': 'AMD GPU(Windows)', '最低VRAM': '8 GB VRAM(DirectML,测试版)', '最低RAM': '8 GB + 交换空间', '说明': '比Nvidia RTX 3000慢约3倍' },
          { 'GPU': 'AMD GPU(Linux)', '最低VRAM': '8 GB VRAM(ROCm,测试版)', '最低RAM': '8 GB + 交换空间', '说明': '比Nvidia RTX 3000慢约1.5倍' },
          { 'GPU': 'Apple M1/M2(非官方)', '最低VRAM': '共享系统内存', '最低RAM': '共享', '说明': '比Nvidia RTX 3000慢约9倍' },
          { 'GPU': '仅CPU', '最低VRAM': '无(0 GB)', '最低RAM': '32 GB', '说明': '比Nvidia RTX 3000慢约17倍' },
        ],
        content: [
          '**根据项目自身README中的规格表,运行Fooocus的最低要求是4 GB的Nvidia VRAM,加上启用虚拟交换空间的8 GB系统内存。** 这使Fooocus成为门槛较低的本地Stable Diffusion界面之一,因为在没有Fooocus内置内存管理优化的其他前端中,SDXL检查点往往需要8~12 GB的VRAM。',
          '项目自身的测试示例提到,一台配备Nvidia RTX 3060(6 GB VRAM)和16 GB系统内存的笔记本电脑,每个采样步骤大约耗时1.35秒生成图像——这是一个有用的实际参考值,不过实际速度还取决于分辨率、预设以及当前GPU驱动版本。',
        ],
        note: '这些数字直接引用自2026-09-06时lllyasviel/Fooocus的README中"Minimal Requirement"表格——项目自身明确将AMD和Mac支持标记为测试版/非官方,实际VRAM使用量会随分辨率、批处理大小和已安装的驱动程序而变化。',
      },
      pricing: {
        id: 'pricing',
        title: '价格:免费,无付费层级',
        content: [
          '**Fooocus完全免费,没有任何形式的付费层级、订阅或官方商业产品。** 该应用是采用GPL-3.0许可证的开源软件;读者唯一需要承担的成本是自己的硬件和电费,其默认下载的检查点(Juggernaut XL、RealisticStockPhoto、AnimaPencilXL)同样也是免费的。',
          '与一些将免费自托管应用与可选付费云端层级相结合的其他本地AI工具不同,Fooocus没有此类产品——README明确表示该项目没有官方网站,也没有任何公司在背后销售任何东西。任何声称销售"Fooocus Pro"版本的网站,或除[GitHub仓库](https://github.com/lllyasviel/Fooocus)本身之外的任何域名,都应被视为与真实项目无关。',
        ],
        note: '截至2026-09-06,已直接从项目自身的README中确认——如果多年后再次评估此项目用于商业部署,请重新查阅[github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)。',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Fooocus与其他替代方案对比',
        columns: ['选项', '最适合', '可自托管', '许可证/费用', '主要取舍'],
        rows: [
          {
            '选项': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '最适合': '生成第一张图像所需点击次数最少;新手无需任何手动参数调整',
            '可自托管': '是——免费,自备GPU(最低4 GB VRAM)',
            '许可证/费用': 'GPL-3.0(应用程序);默认检查点各自拥有独立许可证',
            '主要取舍': '原始仓库自2024年8月起仅提供漏洞修复;仅支持SDXL,不支持FLUX',
          },
          {
            '选项': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) / [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            '最适合': '基于标签页的技术界面,拥有本地SD前端中最大的扩展生态系统',
            '可自托管': '是——免费,自备GPU',
            '许可证/费用': 'AGPL-3.0,免费',
            '主要取舍': '直接暴露每个参数——学习曲线比Fooocus更陡峭',
          },
          {
            '选项': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '最适合': '通过可视化节点图对流水线进行完全控制;通常最早支持新模型',
            '可自托管': '是——免费,自备GPU',
            '许可证/费用': 'GPL-3.0,免费(另有单独的付费ComfyUI云端/API层级)',
            '主要取舍': '节点图界面对完全的新手来说存在真正的上手复杂度',
          },
          {
            '选项': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            '最适合': '精致的专业界面,配有统一画布和面向团队的工作流',
            '可自托管': '是——免费,自备GPU',
            '许可证/费用': 'Apache 2.0,免费(付费的Invoke Cloud层级已在Adobe于2025年收购后停止服务)',
            '主要取舍': '社区扩展生态系统比AUTOMATIC1111或ComfyUI更小',
          },
          {
            '选项': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)(前身为Stability AI的StableSwarmUI)',
            '最适合': '运行在ComfyUI后端之上的简化标签式前端',
            '可自托管': '是——免费,自备GPU',
            '许可证/费用': 'MIT许可证,免费',
            '主要取舍': '社区规模比ComfyUI或AUTOMATIC1111更小;不如Fooocus那样面向新手',
          },
        ],
        note: '这是一份定位性总结,而非基准性能排名。许可证、星标数量和维护状态均于2026-09-06直接对照各项目的GitHub仓库进行核实,且可能发生变化——关于本文以及上述每一个界面所依赖的底层模型系列,可参见[Stable Diffusion评测](/zh/power-local-llm/stable-diffusion-review)。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '哪些人适合使用Fooocus',
        items: [
          '**从未使用过本地AI图像生成的完全新手。** Fooocus基于预设和提示词扩展的设计,消除了Stable Diffusion学习曲线中最陡峭的部分——无需就采样器、CFG比例或分辨率做出决定,即可获得可用的结果。',
          '**希望获得类似Midjourney的体验、但不想订阅或依赖云端的读者。** Fooocus的功能集有意反映了Midjourney的命令列表(风格、变体、放大),同时完全在本地硬件上离线运行。',
          '**VRAM较少的GPU拥有者。** 最低4 GB VRAM(Nvidia RTX 2000系列及以上)低于AUTOMATIC1111或ComfyUI通常建议的舒适运行SDXL所需的配置,使Fooocus在较旧或经济型GPU上也是一个合理的入门选择。',
          '**满足于使用基于SDXL模型的读者。** 如果目前的预设阵容(通用、写实、动漫)已经覆盖了你的使用场景,那么Fooocus的稳定性和简单性足以弥补其不支持更新架构的不足。',
          '**希望Civitai风格的提示词权重开箱即用的读者。** Fooocus使用AUTOMATIC1111的提示词重新加权语法,因此直接从Civitai复制的提示词无需重新格式化即可按预期工作。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '哪些人不适合使用Fooocus',
        items: [
          '**希望使用FLUX、SD 3.5或任何2024年以后模型架构的读者。** Fooocus自己的README表示目前没有支持更新架构的计划——希望使用最新模型的读者应改用[ComfyUI](https://github.com/comfy-org/ComfyUI)、[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)或[WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)。',
          '**希望对生成流水线的每一步都进行精细控制的高级用户。** Fooocus的整个设计理念就是隐藏参数;想要检查或重新连接扩散流水线每个阶段的读者,应改用ComfyUI的节点图。',
          '**依赖原始项目获得快速漏洞修复或新功能的读者。** 原始仓库已明确处于仅修复漏洞模式,没有明确的路线图——需要积极功能开发的用户,应评估[由社区维护的mashb1t/Fooocus分支](https://github.com/mashb1t/Fooocus)或完全不同的界面。',
          '**需要生产级批处理或API优先工作流的团队。** Fooocus围绕单用户Gradio界面构建,而非API服务器——正在构建自动化流水线的团队应改为考虑ComfyUI的API模式或InvokeAI。',
          '**需要类似ControlNet的强力姿态/深度条件控制的读者。** Fooocus使用自有的简化版"Image Prompt"系统,而不是开放完整的ControlNet模型选择;需要精确姿态或深度控制的读者,应使用配备专用ControlNet模型的AUTOMATIC1111、WebUI Forge或ComfyUI。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Fooocus是免费的吗?',
            a: '是的。Fooocus是采用GPL-3.0许可证的免费开源软件,没有付费层级、订阅或官方商业产品。它默认下载的SDXL检查点(Juggernaut XL、RealisticStockPhoto、AnimaPencilXL)同样也是免费的,不过每一个都拥有各自独立的许可证,用以规定生成图像的商业使用条件。',
          },
          {
            q: 'Fooocus还在更新吗?',
            a: '它处于活动减少的状态,但并未被放弃。该项目的README表示其处于"Limited Long-Term Support(LTS)with Bug Fixes Only"模式:最后一个带标签的版本是2024年8月12日发布的v2.5.5,没有计划支持FLUX等更新的模型架构。GitHub仓库并未被归档,最近一次提交发生在2025年12月,贡献者mashb1t在github.com/mashb1t/Fooocus上维护着一个持续活跃更新的分支。',
          },
          {
            q: 'Fooocus是谁开发的?',
            a: 'Fooocus由Lvmin Zhang开发,他以GitHub用户名lllyasviel发布作品。Zhang是斯坦福大学计算机科学博士生,同时也是ControlNet的开发者,其论文获得了Marr Prize(ICCV 2023最佳论文奖),此外他还开发了WebUI Forge、PaintsUndo和IC-Light。',
          },
          {
            q: 'Fooocus需要多少VRAM?',
            a: '最低要求是在Nvidia RTX 2000、3000或4000系列GPU上配备4 GB VRAM,再加上启用虚拟交换空间的8 GB系统内存。较老的Nvidia GTX 900/1000系列大约需要8 GB VRAM,AMD GPU通过DirectML(Windows,测试版)或ROCm(Linux,测试版)大约需要8 GB VRAM,仅使用CPU运行也是可行的(需要32 GB系统内存),但速度比Nvidia RTX 3000系列GPU大约慢17倍。',
          },
          {
            q: 'Fooocus中基于GPT-2的提示词扩展是什么?',
            a: '这是一个离线运行的提示词处理引擎,在界面中以"Fooocus V2"风格呈现,会在生成前自动为简短或模糊的提示词补充额外的风格和构图细节——在概念上类似于Midjourney隐藏的提示词预处理,或LeonardoAI的"Prompt Magic"。它在本地运行,不需要联网。',
          },
          {
            q: 'Fooocus比AUTOMATIC1111或ComfyUI更好吗?',
            a: '这取决于你的目标。Fooocus更容易上手,因为它将技术参数隐藏在预设背后,代价是精细控制能力有所降低。AUTOMATIC1111的WebUI(或其分支WebUI Forge)直接暴露每一个参数,并拥有本地Stable Diffusion前端中最大的扩展生态系统。ComfyUI通过节点图提供对流水线的完全控制,通常最早支持新模型发布。当读者超出Fooocus预设所能提供的范围时,通常会转向这两者之一。',
          },
          {
            q: 'Fooocus支持FLUX或Stable Diffusion 3.5吗?',
            a: '不支持。Fooocus完全基于Stable Diffusion XL架构构建,其官方README表示目前没有计划添加对FLUX等更新架构的支持。希望在同样本地化的环境中使用FLUX或SD 3.5的读者,应改用ComfyUI、SwarmUI或WebUI Forge。',
          },
          {
            q: '在哪里可以下载Fooocus?',
            a: '唯一的官方来源是[GitHub仓库lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus),其中在Releases部分发布了适用于Windows的一键安装包。项目自身的README明确警告,诸如fooocus.com、fooocus.net、fooocus.ai、fooocus.org、fooocus.pro、fooocus.one等域名都是与真实项目毫无关系的假冒网站。',
          },
          {
            q: 'Fooocus使用的默认模型是什么?',
            a: 'Fooocus会根据你启动的预设自动下载不同的默认SDXL检查点:General预设对应Juggernaut XL v8(Rundiffusion),Realistic预设对应RealisticStockPhoto v2.0,Anime预设对应AnimaPencilXL v5.0。这三者都是由社区训练的检查点,独立于Fooocus本身进行托管。',
          },
          {
            q: '我可以将Fooocus生成的图像用于商业用途吗?',
            a: 'Fooocus自身的GPL-3.0许可证覆盖的是应用程序代码,而不是它生成的图像。生成图像的商业使用受创建该图像所用具体检查点的许可证约束——默认检查点(Juggernaut XL、RealisticStockPhoto、AnimaPencilXL)各自拥有独立的许可证,通常是CreativeML OpenRAIL-M的某个变体,发布在其Civitai或Hugging Face页面上。请在商业使用前查看该页面。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '总评',
        content:
          'Fooocus当之无愧地享有"在本地运行Stable Diffusion最简单方式"的声誉——其基于预设和提示词扩展的设计,确实消除了让AUTOMATIC1111和ComfyUI对首次使用者显得望而生畏的学习曲线中最陡峭的部分,而且是在完全离线、硬件要求低至4 GB VRAM显卡的条件下实现的。需要诚实指出的隐忧在于维护:原始项目自身的README已将其定位为仅修复漏洞模式,自2024年8月以来没有带标签的版本发布,也没有计划支持FLUX或其他2024年以后的架构,尽管该仓库仍保持活跃且未被归档。对于希望获得最简单的本地SDXL图像生成入门方式、且不需要最新模型架构或精细流水线控制的读者来说,Fooocus恰好能兑现它所承诺的一切。而希望获得更多控制权(ComfyUI、AUTOMATIC1111/WebUI Forge)或在同样本地化环境中使用更新模型(ComfyUI、SwarmUI)的读者,则应越过Fooocus,转向这些选项——最好先直接在[github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)上核实项目当前的状态。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[lllyasviel/Fooocus — GitHub仓库与README](https://github.com/lllyasviel/Fooocus) — 关于功能、安装、硬件最低要求表、许可证以及"Limited Long-Term Support"维护状态声明的主要信息来源。',
          '[lllyasviel/Fooocus — Releases](https://github.com/lllyasviel/Fooocus/releases) — 版本历史与日期,包括最新的带标签版本v2.5.5(2024年8月12日)。',
          '[mashb1t/Fooocus — GitHub仓库](https://github.com/mashb1t/Fooocus) — 由社区维护、提交活动比原始仓库更为新近的分支。',
          '[lllyasviel/ControlNet — GitHub仓库](https://github.com/lllyasviel/ControlNet) — 开发者Lvmin Zhang此前的项目,用作了解该开发者背景的参考。',
          '[Lvmin Zhang — 个人学术主页](https://lllyasviel.github.io/lvmin_zhang/) — 该开发者的履历与研究背景。',
          '[Scientific American — Lvmin Zhang人物简介](https://www.scientificamerican.com/article/lvmin-zhang/) — 独立媒体对Zhang在AI工具方面工作(包括Fooocus和ControlNet)的报道。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Stable Diffusion评测:免费的本地文本生成图像模型](/zh/power-local-llm/stable-diffusion-review) — Fooocus所运行的底层开放权重模型系列,包括许可条款和版本历史。',
          '[本地AI图像生成 vs. 云端:FLUX、SD 3.5、Qwen-Image 对比 Adobe Firefly 与 getimg.ai](/zh/power-local-llm/local-ai-image-generation-vs-cloud) — 面向那些超出Fooocus纯SDXL范围的读者,对本地图像模型系列进行更深入的比较。',
          '[2026年本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory) — 覆盖所有平台的全面应用与工具目录。',
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
    heroImage: '/images/fooocus-review-hero-ko.webp',
    title: 'Fooocus 리뷰(2026): 가장 간단한 로컬 Stable Diffusion UI',
    seoTitle: 'Fooocus 리뷰 2026: 가장 쉬운 로컬 Stable Diffusion UI',
    intro:
      'Fooocus는 Stable Diffusion XL을 위한 무료 오픈소스 오프라인 이미지 생성 인터페이스로, Lvmin Zhang(GitHub 아이디 lllyasviel, [ControlNet](https://github.com/lllyasviel/ControlNet) 개발자로도 잘 알려져 있음)이 만들었습니다. 샘플러, CFG 스케일, 해상도 그리드 같은 기술적 설정 대부분을 의도적으로 숨기고, 프리셋과 자동 프롬프트 확장 엔진으로 대체하여 빈 텍스트 상자에서 완성된 이미지까지 약 세 번의 클릭만으로 도달할 수 있게 설계되었습니다. 이 리뷰에서는 Fooocus가 실제로 내부에서 어떻게 작동하는지, GPL-3.0 라이선스, 실제 하드웨어 요구 사항, 그리고 가장 중요한 현재 유지 관리 상태를 정직하게 다룹니다. 원본 저장소는 현재 버그 수정만 진행하는 상태에 들어갔다고 공식적으로 밝혔습니다.',
    metaDescription:
      'Fooocus 리뷰 2026: ControlNet 개발자 lllyasviel이 만든 초보자 친화적 로컬 Stable Diffusion UI — 실제 VRAM 요구 사항, GPL-3.0 라이선스, 그리고 정직한 유지 관리 상태(2024년 이후 LTS/버그 수정만 진행).',
    twitterDescription:
      'Fooocus 리뷰 2026: ControlNet 개발자가 만든, 클릭 수가 가장 적은 로컬 Stable Diffusion UI — VRAM 요구 사항, GPT-2 기반 프롬프트 확장, GPL-3.0 라이선스, 그리고 유지 관리 상태의 진실.',
    audience:
      'AUTOMATIC1111이나 ComfyUI를 배우지 않고 Stable Diffusion을 최대한 간단하게 로컬에서 실행하고 싶은 독자 — 설치 방법, 하드웨어 요구 사항, 프로젝트가 여전히 활발히 유지 관리되고 있는지를 다룹니다.',
    readTime: '10분 읽기',
    educationalLevel: 'Beginner',
    primaryTerm: 'Fooocus 리뷰',
    targetKeywords: [
      'fooocus 리뷰',
      'fooocus vs comfyui',
      'fooocus vs automatic1111',
      '가장 쉬운 stable diffusion ui',
      'fooocus vram 요구 사항',
      'fooocus 유지 관리 상태',
      'fooocus 다운로드',
      'fooocus 라이선스',
    ],
    current_models_mentioned: ['Stable Diffusion XL', 'Juggernaut XL v8 (Rundiffusion)', 'realisticStockPhoto v2.0', 'animaPencilXL v5.0', 'FLUX.1'],
    current_hardware_mentioned: ['4 GB VRAM', '6 GB VRAM', '8 GB VRAM', '8 GB 시스템 RAM', '32 GB 시스템 RAM', 'NVIDIA RTX 3060', 'NVIDIA RTX 4090'],
    leadAnswerBlock:
      '**Fooocus는 거의 모든 기술적 설정을 프리셋 뒤에 숨긴 무료 오픈소스 Stable Diffusion XL 로컬 인터페이스로, 시작하기 가장 쉬운 로컬 이미지 생성 UI입니다 — 다만 원본 프로젝트는 현재 "Limited Long-Term Support(LTS) with Bug Fixes Only" 상태이며, 2024년 8월 이후 태그가 지정된 새 릴리스가 없습니다.** 최소 4 GB VRAM(Nvidia RTX 2000/3000/4000 시리즈)과 8 GB 시스템 RAM만 있으면 오프라인으로 실행되며, GPT-2 기반 프롬프트 확장 엔진이 스타일과 디테일을 자동으로 보완하고, GPL-3.0 라이선스로 배포됩니다. FLUX 같은 최신 아키텍처는 지원하지 않으므로, 최신 모델을 원하는 독자는 같은 개발자 생태계의 [ComfyUI](https://github.com/comfy-org/ComfyUI)나 [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)도 함께 확인해야 합니다. 현재도 활발히 개발되고 있다고 단정하기 전에 [GitHub](https://github.com/lllyasviel/Fooocus)에서 저장소의 현재 활동 상태를 확인하시기 바랍니다.',
    quickAnswerTop: {
      ko: {
        question: 'Fooocus는 아직 유지 관리되고 있나요? VRAM은 얼마나 필요한가요?',
        answer:
          'Fooocus는 방치된 것은 아니지만, 자체 README에는 프로젝트가 "Limited Long-Term Support(LTS) with Bug Fixes Only" 모드에 들어갔다고 명시되어 있습니다 — 마지막으로 태그가 지정된 릴리스는 2024년 8월 12일의 v2.5.5였으며, FLUX 같은 최신 아키텍처를 지원할 계획은 없습니다. GitHub 저장소는 보관(archive) 처리되지 않았으며 여전히 커밋을 받고 있고(가장 최근은 2025년 12월), 기여자 mashb1t가 github.com/mashb1t/Fooocus에서 활발히 업데이트되는 포크를 유지 관리하고 있습니다. Fooocus를 실행하려면 최소한 Nvidia RTX 2000/3000/4000 시리즈 GPU에서 4 GB VRAM과, 가상 스왑이 활성화된 8 GB 시스템 RAM이 필요합니다.',
        bullets: [
          '개발자: Lvmin Zhang(lllyasviel), 스탠퍼드 대학교 컴퓨터공학 박사과정 학생이며, ControlNet 개발자로도 알려져 있습니다. 해당 논문은 Marr Prize(ICCV 2023 최우수 논문상)를 수상했습니다.',
          '상태: 원본 저장소는 2024년부터 버그 수정만 진행하는 모드입니다. FLUX나 최신 모델 지원 계획은 없습니다. 보관 처리되지 않았으며 계속 커밋을 받고 있습니다.',
          '최소 하드웨어: 4 GB VRAM(Nvidia RTX 2000/3000/4000 시리즈)과 스왑이 활성화된 8 GB 시스템 RAM. 구형 GTX 900/1000 시리즈는 8 GB VRAM이 필요합니다.',
          '라이선스: 애플리케이션 코드는 GPL-3.0입니다. 기본 SDXL 체크포인트(Juggernaut XL 등)는 각각 별도의 독자적인 라이선스를 가집니다.',
          '차별화된 기능: 부족한 디테일을 자동으로 채워 넣는, 오프라인으로 작동하는 GPT-2 기반 프롬프트 확장 엔진("Fooocus V2" 스타일)으로, Midjourney의 숨겨진 전처리와 유사합니다.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Fooocus란 무엇인가', anchor: 'what-is-fooocus' },
      { label: '프로젝트 역사와 개발자', anchor: 'project-history' },
      { label: '현재 유지 관리 상태(2026년)', anchor: 'maintenance-status' },
      { label: 'Fooocus 설치 및 실행 방법', anchor: 'how-to-install' },
      { label: '프롬프트 확장과 내장 스타일', anchor: 'prompt-expansion-styles' },
      { label: '라이선스와 상업적 이용', anchor: 'license-commercial-use' },
      { label: '하드웨어 요구 사항', anchor: 'hardware-requirements' },
      { label: '가격', anchor: 'pricing' },
      { label: 'Fooocus와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Fooocus가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'Fooocus가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
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
          'Fooocus는 수동 조정을 최소화하도록 설계된 무료 오픈소스 완전 오프라인 Stable Diffusion XL 인터페이스입니다 — 개발자는 마우스 클릭 3회 미만으로 첫 이미지를 얻을 수 있다고 설명합니다.',
          'GitHub 아이디 lllyasviel을 사용하는 Lvmin Zhang이 개발했으며, 스탠퍼드 대학교 컴퓨터공학 박사과정 학생이자 [ControlNet](https://github.com/lllyasviel/ControlNet) 개발자로도 알려져 있습니다. 해당 논문은 Marr Prize(ICCV 2023 최우수 논문상)를 수상했습니다.',
          '프로젝트 자체 README는 현재 "Limited Long-Term Support(LTS) with Bug Fixes Only" 상태라고 명시하고 있습니다. 마지막으로 태그가 지정된 릴리스는 2024년 8월 12일의 v2.5.5이며, FLUX 같은 최신 모델 아키텍처를 지원할 현재 계획은 없습니다.',
          'GitHub 저장소는 보관 처리되지 않았으며 계속 커밋을 받고 있습니다(가장 최근은 2025년 12월). 기여자 mashb1t는 [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus)에서 활발히 업데이트되는 포크를 유지 관리하고 있습니다.',
          '최소 하드웨어는 Nvidia RTX 2000/3000/4000 시리즈 GPU에서 4 GB VRAM과 가상 스왑이 활성화된 8 GB 시스템 RAM입니다. 구형 GTX 900/1000 시리즈는 약 8 GB VRAM이 필요합니다.',
          'Fooocus는 GPL-3.0 라이선스를 따르며 유료 등급 없이 100% 무료입니다 — 다만 기본으로 다운로드되는 SDXL 체크포인트(Juggernaut XL, RealisticStockPhoto, AnimaPencilXL)는 Civitai/Hugging Face에서 각각 별도의 독자적인 라이선스를 가집니다.',
        ],
      },
      whatIsFooocus: {
        id: 'what-is-fooocus',
        title: 'Fooocus란 무엇인가',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus는 기술적 매개변수를 프리셋과 자동 프롬프트 확장 뒤에 숨겨 "프롬프트만 입력하면 되는" 경험을 목표로 하는, 무료로 오프라인 작동하는 Gradio 기반 Stable Diffusion XL 인터페이스입니다.' },
          { type: 'plain-terms', text: 'AUTOMATIC1111과 ComfyUI가 각각 기술적인 제어판과 배선도라면, Fooocus는 단일한 "생성" 버튼에 더 가깝습니다 — 대부분의 결정을 대신 내려주며, 직접 찾아보지 않는 한 고급 설정은 표시되지 않습니다.' },
        ],
        content: [
          '**Fooocus는 Stable Diffusion XL(SDXL) 아키텍처를 완전히 기반으로 구축된 로컬 오프라인 이미지 생성 애플리케이션으로, GPL-3.0 라이선스 하에 자유 오픈소스 소프트웨어로 배포됩니다.** AUTOMATIC1111의 탭 기반 기술적 인터페이스나 ComfyUI의 노드 그래프 편집기와 달리, Fooocus는 대부분의 수동 제어를 의도적으로 제거합니다 — 눈에 보이는 샘플러 선택기도 없고, 기본적으로 CFG 스케일 슬라이더도 없으며, 해상도 그리드도 없습니다 — 그 대신 소수의 프리셋(General, Realistic, Anime)과 완전히 무시해도 되는 "Advanced" 패널을 제공합니다.',
          '이 프로젝트는 다른 여러 로컬 AI 도구에서도 사용되는 동일한 Python 웹 UI 프레임워크인 [Gradio](https://www.gradio.app/) 위에서 작동합니다. 인터페이스는 Midjourney와 LeonardoAI의 기능 목록을 의도적으로 차용하여, 각각의 명령어(`--style`, `--ar`, V1~V4 변형, 업스케일링)를 Fooocus의 해당 기능으로 매핑함으로써, 이러한 클라우드 도구에서 넘어온 사용자가 익숙한 사고 모델을 가질 수 있게 합니다.',
          '프로젝트 자체 문서에서 직접 밝힌 핵심 설계 목표는, Fooocus를 다운로드한 시점부터 첫 이미지를 생성하기까지 마우스 클릭 횟수가 3회 미만이어야 한다는 것입니다. 특정 모델의 혁신이 아니라 바로 이 단일한 설계상의 제약이야말로 Fooocus를 다른 Stable Diffusion 프런트엔드와 차별화하는 요소입니다. 즉, 새로운 모델이 아니라 UI/UX 레이어라는 점입니다.',
        ],
      },
      projectHistory: {
        id: 'project-history',
        title: '프로젝트 역사와 개발자',
        content: [
          '**Fooocus는 GitHub 아이디 lllyasviel로 활동하는 Lvmin Zhang이 개발했으며, 저장소는 2023년 8월 9일 GitHub에 처음 생성되었습니다.** Zhang은 스탠퍼드 대학교 컴퓨터공학 박사과정 학생으로, 제어 가능한 생성 모델링과 컴퓨터 그래픽스를 연구하고 있습니다.',
          'Zhang은 Stable Diffusion 커뮤니티에서 독립적으로 [ControlNet](https://github.com/lllyasviel/ControlNet)의 개발자로 잘 알려져 있습니다. ControlNet은 텍스트-이미지 확산 모델에 정밀한 공간적 조건(포즈, 깊이, 에지 맵)을 추가한 신경망 아키텍처입니다. ControlNet 논문은 컴퓨터 비전 분야에서 가장 경쟁이 치열한 학회 중 하나인 국제 컴퓨터 비전 학회(ICCV) 2023에서 최우수 논문상인 Marr Prize를 수상했습니다. Zhang은 또한 성능에 초점을 맞춘 AUTOMATIC1111 포크인 [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge), PaintsUndo, IC-Light 등 다른 로컬 AI 도구도 공개했습니다.',
          '프로젝트 자체의 설명에 따르면, Fooocus는 [AUTOMATIC1111 Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)와 [ComfyUI](https://github.com/comfy-org/ComfyUI)의 코드베이스를 혼합하여 구축되었습니다 — 검증된 추론 기술을 재사용하면서도 대폭 단순화된 프런트엔드를 제공합니다. 2026년 9월 기준, 이 프로젝트는 52,000개 이상의 GitHub 스타와 8,600개 이상의 포크를 기록하며, GitHub에서 가장 많은 별을 받은 로컬 이미지 생성 도구 중 하나가 되었습니다.',
          '**프로젝트 자체가 직접 밝히는 보안 주의 사항: Fooocus에는 공식 웹사이트가 없습니다.** README는 fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro, fooocus.one 같은 도메인이 가짜이며 실제 프로젝트와 아무런 관련이 없다고 명확히 경고합니다 — 유일한 공식 출처는 [GitHub 저장소](https://github.com/lllyasviel/Fooocus) 그 자체입니다.',
        ],
      },
      maintenanceStatus: {
        id: 'maintenance-status',
        title: 'Fooocus는 2026년에도 유지 관리되고 있나요?',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus는 방치된 것은 아니지만, 자체 README에는 원본 프로젝트가 "Limited Long-Term Support(LTS) with Bug Fixes Only" 상태이며, 2024년 8월 이후 태그가 지정된 릴리스가 없고, FLUX 같은 최신 아키텍처를 지원할 계획도 없다고 명시되어 있습니다.' },
          { type: 'plain-terms', text: '계속 성장하는 도구라기보다는 완성되어 안정화된 도구로 보는 편이 더 정확합니다 — 개발자는 SDXL 기반 기능 세트가 사실상 완성되었다고 보고 있으며, 새로운 모델이 나올 때마다 쫓아가지는 않습니다.' },
        ],
        content: [
          '[lllyasviel/Fooocus의 README](https://github.com/lllyasviel/Fooocus)에는 **"Project Status: Limited Long-Term Support (LTS) with Bug Fixes Only"**라는 제목의 섹션이 있으며, Stable Diffusion XL 아키텍처를 완전히 기반으로 하는 이 프로젝트가 이제 기능적으로 완성된 것으로 간주되며 "앞으로의 업데이트는 발생할 수 있는 버그 수정에만 전념할 것"이라고 밝히고 있습니다. README는 FLUX 같은 최신 모델 아키텍처로 마이그레이션하거나 이를 통합할 현재 계획이 없다고 명확히 밝히면서도, 오픈소스 커뮤니티가 하나의 지배적인 후속 방식으로 수렴한다면 상황이 바뀔 수 있다는 여지도 남겨두고 있습니다.',
          '최신 모델을 원하는 독자를 위해 README 자체가 대안 플랫폼을 권장하고 있습니다 — 구체적으로는(같은 개발자가 만든) [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)와 [ComfyUI](https://github.com/comfy-org/ComfyUI), 또는 그 단순화된 프런트엔드인 [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)입니다. Fooocus 자체에서 FLUX를 지원하겠다고 약속하는 대신 이런 대안을 안내하고 있습니다.',
          '이는 방치된 프로젝트와는 다릅니다. GitHub 저장소는 **보관(archive) 처리되지 않았고**, 이슈와 풀 리퀘스트에도 여전히 열려 있으며(이 리뷰 작성 시점 기준 미해결 이슈 314건), GitHub 자체 활동 데이터에 따르면 가장 최근 커밋이 2025년 12월에도 있었습니다 — 마지막 태그 릴리스로부터 1년 이상 지난 시점입니다. README는 기여자 **mashb1t**가 코드에 남아 있던 버그를 줄이는 데 "엄청난 노력"을 기울였다고 감사를 표하고 있으며, mashb1t는 별도로 [github.com/mashb1t/Fooocus](https://github.com/mashb1t/Fooocus)에서 포크를 유지 관리하며 더욱 최근의 커밋(가장 최근 2025년 10월)을 받고 있습니다 — 다만 이 포크 역시 2024년 8월 이후 새로운 태그 릴리스를 내지 않아, 본가 프로젝트와 같은 속도를 보이고 있습니다.',
          '실질적인 결론은 다음과 같습니다. Fooocus는 오늘날에도 안정적이고 안전하게 설치할 수 있지만, 단순화된 UI에서 FLUX, SD 3.5, 또는 2024년 이후의 다른 모델 아키텍처를 특별히 원하는 독자라면 Fooocus에서는 이를 찾을 수 없으며, 대신 ComfyUI, SwarmUI, WebUI Forge를 살펴봐야 합니다.',
        ],
        note: '유지 관리 상태에 관한 사실은 2026년 9월 6일 기준으로 lllyasviel/Fooocus의 GitHub 저장소 및 README, 그리고 mashb1t/Fooocus 포크를 직접 확인하여 검증했습니다 — 푸시 날짜, 릴리스 날짜, 미해결 이슈 수는 시간이 지나면 변할 수 있으므로, 이 상태가 여전히 유효한지 [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)에서 다시 확인하시기 바랍니다.',
      },
      howToInstall: {
        id: 'how-to-install',
        title: 'Fooocus 설치 및 실행 방법',
        content: [
          'Fooocus는 Windows용 원클릭 패키지를 제공하며, Linux, Mac, Docker를 위한 수동 설치 방법도 마련되어 있습니다 — Fooocus가 첫 실행 시 기본 체크포인트를 자동으로 가져오기 때문에, 기본 프리셋에는 별도의 모델 다운로드 단계가 필요하지 않습니다.',
        ],
        numberedItems: [
          { title: 'Windows 패키지를 다운로드하거나(또는 Linux/Mac에서 저장소를 클론)', whyItMatters: 'Windows 사용자는 [GitHub Releases 페이지](https://github.com/lllyasviel/Fooocus/releases)에서 Python 환경이 내장된 독립 실행형 `.7z` 패키지를 받을 수 있습니다 — 별도로 Python을 설치할 필요가 없습니다. Linux와 Mac 사용자는 대신 저장소를 클론하고 Conda 또는 venv 환경을 구성합니다.' },
          { title: '패키지를 압축 해제하고 run.bat를 실행', whyItMatters: '다운로드한 압축 파일을 풀고 `run.bat`를 더블 클릭합니다 — 이렇게 하면 General 프리셋이 실행됩니다. `run_anime.bat`와 `run_realistic.bat`는 각각 Anime과 Realistic 프리셋을 실행하며, 각기 다른 기본 체크포인트를 사용합니다.' },
          { title: 'Fooocus가 기본 모델을 자동으로 다운로드하도록 둠', whyItMatters: '첫 실행 시 Fooocus는 실행한 프리셋에 해당하는 체크포인트를 자동으로 다운로드합니다 — General은 Juggernaut XL v8(Rundiffusion), Realistic은 RealisticStockPhoto v2.0, Anime은 AnimaPencilXL v5.0을 `Fooocus/models/checkpoints` 폴더에 저장합니다.' },
          { title: '프롬프트를 입력하고 Generate를 클릭', whyItMatters: '샘플러, CFG 스케일, 해상도를 선택할 필요가 없습니다 — Fooocus가 합리적인 기본값을 자동으로 적용합니다. 고급 제어는 나중에 필요할 경우를 위해 "Advanced" 토글 뒤에 마련되어 있습니다.' },
          { title: '필요에 따라 Image Prompt, Inpaint, Upscale/Vary를 사용', whyItMatters: 'Fooocus는 Midjourney 스타일의 워크플로(이미지 프롬프트, 인페인팅, 업스케일링, 미세/강한 변형)를 자체 UI 패널에 매핑하며, 표준 SDXL ControlNet 구성 대신 자체 인페인팅 모델과 이미지 프롬프트 알고리즘을 사용합니다.' },
          { title: '익숙해지면 커뮤니티 체크포인트로 전환', whyItMatters: 'Civitai나 Hugging Face의 어떤 SDXL 체크포인트든 `models/checkpoints` 폴더에 넣고 Fooocus 안에서 선택할 수 있으며, 이를 통해 내장된 세 가지 프리셋을 넘어 기능을 확장할 수 있습니다.' },
        ],
        note: '정확한 폴더 경로, 실행기 플래그, 종속성 버전은 릴리스마다 달라집니다 — 일반적인 가이드 대신 [lllyasviel/Fooocus의 GitHub 페이지](https://github.com/lllyasviel/Fooocus)에 있는 최신 설정 안내를 따르시기 바랍니다.',
      },
      promptExpansionStyles: {
        id: 'prompt-expansion-styles',
        title: '프롬프트 확장과 내장 스타일',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus는 "Fooocus V2" 스타일로 제공되는, 오프라인으로 작동하는 GPT-2 기반 프롬프트 확장 모델을 실행하며, 생성 전에 짧거나 모호한 프롬프트에 자동으로 디테일을 추가합니다.' },
        ],
        content: [
          '**Fooocus의 대표적인 기능은 오프라인으로 작동하는 GPT-2 기반 프롬프트 처리 엔진으로, UI에서는 "Fooocus V2" 스타일로 제공됩니다.** 프로젝트 자체 문서는 이를 Midjourney의 숨겨진 프롬프트 전처리 및 LeonardoAI의 "Prompt Magic"과 비교합니다 — 그 취지는 "정원에 있는 집"처럼 짧은 프롬프트든 1,000단어짜리 프롬프트든 모두 정제되고 일관된 결과물을 만들어야 한다는 것이며, 이는 확장 모델이 누락된 스타일 및 구도 디테일을 자동으로 채워 넣기 때문입니다.',
          'Fooocus V2 외에도 이 인터페이스에는 "Fooocus Photograph", "Fooocus Negative", "cinematic-default" 스타일 등 여러 내장 프리셋 스타일이 포함되어 있으며, 프로젝트 README에 이름이 올라 있는 커뮤니티 구성원(twri, 3Diva, Marc K3nt3L)이 기여한 추가 SDXL 스타일도 있습니다. 스타일은 조합할 수 있으며, 상위 세 가지 프리셋이 제공하는 것보다 더 많은 제어를 원하는 독자를 위해 Advanced 패널에서 여러 스타일을 겹쳐 사용할 수도 있습니다.',
          'README에 기록된 그 밖의 내부 기술로는, 단일 k-샘플러 내에서 이루어지는 네이티브 리파이너 교체(AUTOMATIC1111이나 ComfyUI가 두 개의 독립적인 샘플러 사이를 전환할 때 발생하는 모멘텀 손실을 방지함), SDXL의 최고 해상도 레벨에 맞춰 조정된 네거티브 ADM 가이던스, 그리고 표준 SDXL ControlNet이나 IP-Adapter 파이프라인 대신 사용되는 자체 인페인팅 모델과 이미지 프롬프트 알고리즘이 있습니다.',
        ],
      },
      licenseCommercialUse: {
        id: 'license-commercial-use',
        title: 'Fooocus 라이선스와 상업적 이용',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Fooocus의 애플리케이션 코드는 GitHub 저장소에서 확인되는 대로 GPL-3.0(GNU 일반 공중 사용 허가서 버전 3) 라이선스를 따릅니다 — 다만 기본으로 다운로드되는 SDXL 체크포인트는 별도의 커뮤니티 모델이며, 각각 다른 독자적인 라이선스를 가집니다.' },
          { type: 'plain-terms', text: 'Fooocus 소프트웨어 자체는 완전히 오픈소스이며 자유롭게 사용하거나 수정할 수 있습니다. 생성된 이미지에 적용되는 라이선스는 그 이미지를 만든 체크포인트에 따라 달라지며, 해당 특정 이미지의 상업적 이용을 규율하는 것은 Fooocus의 라이선스가 아니라 그 체크포인트의 라이선스입니다.' },
        ],
        content: [
          'Fooocus는 **GPL-3.0**(GNU 일반 공중 사용 허가서 버전 3) 라이선스를 따르며, 이는 GitHub 저장소의 라이선스 메타데이터에서 확인됩니다. GPL-3.0은 배포되는 모든 파생 저작물 또한 GPL-3.0(카피레프트)으로 공개된다는 조건 하에, Fooocus 코드베이스 자체의 자유로운 사용, 수정, 재배포를 허용합니다 — 이는 애플리케이션 코드에 적용되며, 그것으로 생성한 이미지에는 적용되지 않습니다.',
          'Fooocus가 자동으로 다운로드하는 세 가지 기본 체크포인트 — General 프리셋용 Juggernaut XL v8(Rundiffusion), Realistic용 RealisticStockPhoto v2.0, Anime용 AnimaPencilXL v5.0 — 은 커뮤니티가 학습시킨 Stable Diffusion XL 파인튜닝 모델로, Civitai와 Hugging Face 같은 플랫폼에서 독립적으로 호스팅되며, 각각 별도의 독자적인 라이선스(일반적으로 CreativeML OpenRAIL-M의 변형이지만, 조건은 체크포인트마다 다르며 변경될 수 있음)를 가집니다. 생성한 이미지를 상업적으로 사용할 계획이라면, 그 전에 해당 특정 체크포인트 자체의 라이선스 페이지를 확인해야 합니다 — Fooocus의 GPL-3.0 라이선스는 체크포인트의 조건에 자동으로 적용되지 않으며, 이를 무효화하지도 않습니다.',
          '프로젝트 자체에는 어떠한 상업적 측면도 없습니다. README는 Fooocus가 "a 100% non-commercial offline open-source software"(100% 비상업적 오프라인 오픈소스 소프트웨어)라고 명확히 밝히고 있으며, 공식 웹사이트도, 유료 제품도, 이를 판매하는 회사도 존재하지 않습니다 — 유일하게 유의해야 할 점은 위의 프로젝트 역사 섹션에서 다룬 가짜 도메인에 관한 경고입니다.',
        ],
        note: '이 섹션은 2026년 9월 6일 기준으로 공개된 라이선스 메타데이터를 요약한 것이며, 법률 자문이 아닙니다. 상업적 배포 전에는 [Fooocus의 LICENSE 파일](https://github.com/lllyasviel/Fooocus/blob/main/LICENSE)과 해당 특정 체크포인트의 라이선스 페이지를 반드시 확인하시기 바랍니다.',
      },
      hardwareRequirements: {
        id: 'hardware-requirements',
        title: '하드웨어 요구 사항',
        itemHeadings: true,
        columns: ['GPU', '최소 VRAM', '최소 RAM', '비고'],
        rows: [
          { 'GPU': 'Nvidia RTX 2000-4000', '최소 VRAM': '4 GB VRAM', '최소 RAM': '8 GB + 스왑', '비고': '가장 빠른 등급, RTX 4000 시리즈가 가장 빠름' },
          { 'GPU': 'Nvidia GTX 900/1000', '최소 VRAM': '8 GB VRAM(일부는 6 GB로 보고)', '최소 RAM': '8 GB + 스왑', '비고': 'CPU보다 약간만 빠름' },
          { 'GPU': 'Nvidia GTX 900 이전', '최소 VRAM': '지원되지 않음', '최소 RAM': '—', '비고': '대신 CPU 전용 모드 사용' },
          { 'GPU': 'AMD GPU(Windows)', '최소 VRAM': '8 GB VRAM(DirectML, 베타)', '최소 RAM': '8 GB + 스왑', '비고': 'Nvidia RTX 3000보다 약 3배 느림' },
          { 'GPU': 'AMD GPU(Linux)', '최소 VRAM': '8 GB VRAM(ROCm, 베타)', '최소 RAM': '8 GB + 스왑', '비고': 'Nvidia RTX 3000보다 약 1.5배 느림' },
          { 'GPU': 'Apple M1/M2(비공식)', '최소 VRAM': '공유 시스템 메모리', '최소 RAM': '공유', '비고': 'Nvidia RTX 3000보다 약 9배 느림' },
          { 'GPU': 'CPU 전용', '최소 VRAM': '없음(0 GB)', '최소 RAM': '32 GB', '비고': 'Nvidia RTX 3000보다 약 17배 느림' },
        ],
        content: [
          '**Fooocus를 실행하기 위한 최소 요구 사항은 Nvidia VRAM 4 GB에 가상 스왑이 활성화된 8 GB 시스템 RAM**이며, 이는 프로젝트 자체 README의 사양표에 근거합니다. Fooocus의 내장 메모리 관리 최적화가 없는 다른 프런트엔드에서는 SDXL 체크포인트가 흔히 8~12 GB의 VRAM을 요구한다는 점에서, Fooocus는 진입 장벽이 낮은 로컬 Stable Diffusion 인터페이스 중 하나입니다.',
          '프로젝트 자체 테스트 사례에서는 Nvidia RTX 3060(6 GB VRAM)과 16 GB 시스템 RAM을 탑재한 노트북이 샘플링 단계당 약 1.35초 만에 이미지를 생성했다고 언급하고 있습니다 — 실제 속도는 해상도, 프리셋, 현재 GPU 드라이버 버전에 따라 달라지지만, 유용한 실제 참고치입니다.',
        ],
        note: '이 수치는 2026년 9월 6일 기준 lllyasviel/Fooocus의 README에 있는 "Minimal Requirement" 표에서 직접 가져온 것입니다 — 프로젝트 자체가 AMD와 Mac 지원을 명시적으로 베타/비공식으로 표시하고 있으며, 실제 VRAM 사용량은 해상도, 배치 크기, 설치된 드라이버에 따라 달라집니다.',
      },
      pricing: {
        id: 'pricing',
        title: '가격: 무료, 유료 등급 없음',
        content: [
          '**Fooocus는 완전히 무료이며, 어떠한 형태의 유료 등급, 구독, 공식 상업 제품도 없습니다.** 이 애플리케이션은 GPL-3.0 라이선스를 따르는 오픈소스 소프트웨어이며, 독자에게 드는 유일한 비용은 자신의 하드웨어와 전기 요금뿐입니다. 기본으로 다운로드되는 체크포인트(Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) 역시 무료입니다.',
          '무료 자체 호스팅 앱과 선택적 유료 클라우드 등급을 결합한 다른 로컬 AI 도구들과 달리, Fooocus에는 그런 것이 전혀 없습니다 — README는 이 프로젝트에 공식 웹사이트가 없으며 무언가를 판매하는 회사도 뒤에 없다고 명확히 밝히고 있습니다. "Fooocus Pro" 버전을 판매한다고 주장하는 사이트나 [GitHub 저장소](https://github.com/lllyasviel/Fooocus) 자체가 아닌 다른 도메인은 실제 프로젝트와 무관한 것으로 간주해야 합니다.',
        ],
        note: '2026년 9월 6일 기준으로 프로젝트 자체 README에서 직접 확인했습니다 — 몇 년 뒤 상업적 배포를 위해 이를 평가할 경우 [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)에서 다시 확인하시기 바랍니다.',
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Fooocus와 대안 비교',
        columns: ['옵션', '적합한 용도', '자체 호스팅', '라이선스 / 비용', '주요 트레이드오프'],
        rows: [
          {
            '옵션': '[Fooocus](https://github.com/lllyasviel/Fooocus)',
            '적합한 용도': '첫 이미지까지 클릭 수가 가장 적음; 초보자용 수동 매개변수 조정이 전혀 필요 없음',
            '자체 호스팅': '가능 — 무료, 자체 GPU(최소 4 GB VRAM)',
            '라이선스 / 비용': 'GPL-3.0(앱); 기본 체크포인트는 각각 별도의 라이선스',
            '주요 트레이드오프': '원본 저장소가 2024년 8월부터 버그 수정만 진행; SDXL 전용, FLUX 미지원',
          },
          {
            '옵션': '[AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) / [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)',
            '적합한 용도': '로컬 SD 프런트엔드 중 가장 큰 확장 생태계를 갖춘 탭 기반 기술적 UI',
            '자체 호스팅': '가능 — 무료, 자체 GPU',
            '라이선스 / 비용': 'AGPL-3.0, 무료',
            '주요 트레이드오프': '모든 매개변수를 직접 노출함 — Fooocus보다 학습 곡선이 가파름',
          },
          {
            '옵션': '[ComfyUI](https://github.com/comfy-org/ComfyUI)',
            '적합한 용도': '시각적 노드 그래프를 통한 파이프라인의 완전한 제어; 대체로 새 모델을 가장 먼저 지원',
            '자체 호스팅': '가능 — 무료, 자체 GPU',
            '라이선스 / 비용': 'GPL-3.0, 무료(별도의 유료 ComfyUI 클라우드/API 등급 존재)',
            '주요 트레이드오프': '노드 그래프 인터페이스는 완전한 초보자에게 실질적인 설정 복잡성을 안겨줌',
          },
          {
            '옵션': '[InvokeAI](https://github.com/invoke-ai/InvokeAI)',
            '적합한 용도': '통합 캔버스와 팀 지향 워크플로를 갖춘 세련된 전문가용 UI',
            '자체 호스팅': '가능 — 무료, 자체 GPU',
            '라이선스 / 비용': 'Apache 2.0, 무료(유료 Invoke Cloud 등급은 2025년 Adobe 인수 후 종료됨)',
            '주요 트레이드오프': 'AUTOMATIC1111이나 ComfyUI보다 커뮤니티 확장 생태계가 작음',
          },
          {
            '옵션': '[SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI)(구 Stability AI의 StableSwarmUI)',
            '적합한 용도': 'ComfyUI 백엔드 위에서 실행되는 단순화된 탭 기반 프런트엔드',
            '자체 호스팅': '가능 — 무료, 자체 GPU',
            '라이선스 / 비용': 'MIT 라이선스, 무료',
            '주요 트레이드오프': 'ComfyUI나 AUTOMATIC1111보다 커뮤니티가 작음; Fooocus만큼 초보자 중심은 아님',
          },
        ],
        note: '이는 포지셔닝을 요약한 것이며 벤치마크 순위가 아닙니다. 라이선스, 스타 수, 유지 관리 상태는 2026년 9월 6일 기준으로 각 프로젝트의 GitHub 저장소를 직접 확인하여 검증한 것이며 변경될 수 있습니다 — 이 글과 위의 각 UI가 의존하는 기반 모델 계열에 대해서는 [Stable Diffusion 리뷰](/ko/power-local-llm/stable-diffusion-review)를 참고하시기 바랍니다.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Fooocus가 적합한 사용자',
        items: [
          '**로컬 AI 이미지 생성을 한 번도 해본 적 없는 완전한 초보자.** Fooocus의 프리셋 및 프롬프트 확장 설계는 Stable Diffusion 학습 곡선에서 가장 가파른 부분을 제거합니다 — 사용 가능한 결과를 얻는 데 샘플러, CFG 스케일, 해상도에 대한 결정이 필요하지 않습니다.',
          '**구독이나 클라우드 의존 없이 Midjourney와 유사한 경험을 원하는 독자.** Fooocus의 기능 세트는 Midjourney의 명령어 목록(스타일, 변형, 업스케일링)을 의도적으로 반영하면서도 로컬 하드웨어에서 완전히 오프라인으로 작동합니다.',
          '**VRAM이 적은 GPU 소유자.** 최소 4 GB VRAM(Nvidia RTX 2000 시리즈 이상)은 AUTOMATIC1111이나 ComfyUI가 편안한 SDXL 사용을 위해 일반적으로 권장하는 수준보다 낮아, 구형이나 저가형 GPU에서도 Fooocus가 합리적인 진입점이 됩니다.',
          '**SDXL 기반 모델로도 충분한 독자.** 현재의 프리셋 라인업(범용, 실사, 애니메이션)이 이미 사용 사례를 충족한다면, Fooocus의 안정성과 단순함이 최신 아키텍처 미지원이라는 단점을 상쇄합니다.',
          '**Civitai 스타일의 프롬프트 가중치가 그대로 작동하기를 원하는 독자.** Fooocus는 AUTOMATIC1111의 프롬프트 재가중치 문법을 사용하므로, Civitai에서 그대로 복사한 프롬프트도 재포맷 없이 예상대로 작동합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Fooocus가 적합하지 않은 사용자',
        items: [
          '**FLUX, SD 3.5, 또는 2024년 이후 모델 아키텍처를 원하는 독자.** Fooocus 자체 README는 최신 아키텍처를 지원할 현재 계획이 없다고 밝히고 있습니다 — 최신 모델을 원하는 독자는 대신 [ComfyUI](https://github.com/comfy-org/ComfyUI), [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI), 또는 [WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)를 사용해야 합니다.',
          '**생성 파이프라인의 모든 단계를 세밀하게 제어하고 싶은 파워 유저.** Fooocus의 전체 설계 철학은 매개변수를 숨기는 것입니다. 확산 파이프라인의 각 단계를 검사하거나 다시 연결하고 싶은 독자는 대신 ComfyUI의 노드 그래프를 사용해야 합니다.',
          '**원본 프로젝트에 빠른 버그 수정이나 새 기능을 의존하는 독자.** 원본 저장소는 명확히 버그 수정만 진행하는 모드이며 확정된 로드맵도 없습니다 — 적극적인 기능 개발이 필요한 사용자는 [커뮤니티가 유지 관리하는 mashb1t/Fooocus 포크](https://github.com/mashb1t/Fooocus)나 완전히 다른 UI를 검토해야 합니다.',
          '**프로덕션급 배치 처리나 API 우선 워크플로가 필요한 팀.** Fooocus는 API 서버가 아니라 단일 사용자용 Gradio 인터페이스를 중심으로 구축되어 있습니다 — 자동화된 파이프라인을 구축하는 팀은 대신 ComfyUI의 API 모드나 InvokeAI를 살펴봐야 합니다.',
          '**ControlNet 수준의 강력한 포즈/깊이 조건화가 필요한 독자.** Fooocus는 완전한 ControlNet 모델 선택을 노출하는 대신 자체적으로 단순화된 "Image Prompt" 시스템을 사용합니다. 정밀한 포즈나 깊이 제어가 필요한 독자는 전용 ControlNet 모델을 사용하는 AUTOMATIC1111, WebUI Forge, 또는 ComfyUI를 사용해야 합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Fooocus는 무료인가요?',
            a: '네. Fooocus는 GPL-3.0 라이선스를 따르는 무료 오픈소스 소프트웨어이며, 유료 등급, 구독, 공식 상업 제품이 없습니다. 기본으로 다운로드되는 SDXL 체크포인트(Juggernaut XL, RealisticStockPhoto, AnimaPencilXL) 역시 무료이지만, 각각 생성된 이미지의 상업적 이용을 규율하는 별도의 독자적인 라이선스를 가집니다.',
          },
          {
            q: 'Fooocus는 아직 업데이트되고 있나요?',
            a: '방치된 것이 아니라 활동이 줄어든 상태입니다. 프로젝트의 README는 "Limited Long-Term Support(LTS) with Bug Fixes Only" 모드라고 밝히고 있습니다: 마지막으로 태그가 지정된 릴리스는 2024년 8월 12일의 v2.5.5였으며, FLUX 같은 최신 모델 아키텍처를 지원할 계획은 없습니다. GitHub 저장소는 보관 처리되지 않았으며 2025년 12월에도 커밋을 받았고, 기여자 mashb1t가 github.com/mashb1t/Fooocus에서 활발히 업데이트되는 포크를 유지 관리하고 있습니다.',
          },
          {
            q: 'Fooocus는 누가 만들었나요?',
            a: 'Fooocus는 GitHub 아이디 lllyasviel로 활동하는 Lvmin Zhang이 만들었습니다. Zhang은 스탠퍼드 대학교 컴퓨터공학 박사과정 학생이며, ControlNet 개발자로도 알려져 있습니다. ControlNet 논문은 Marr Prize(ICCV 2023 최우수 논문상)를 수상했으며, Zhang은 WebUI Forge, PaintsUndo, IC-Light도 개발했습니다.',
          },
          {
            q: 'Fooocus는 VRAM이 얼마나 필요한가요?',
            a: '최소 요구 사항은 Nvidia RTX 2000, 3000, 4000 시리즈 중 하나의 GPU에서 4 GB VRAM과, 가상 스왑이 활성화된 8 GB 시스템 RAM입니다. 구형 Nvidia GTX 900/1000 시리즈는 약 8 GB VRAM이 필요하며, AMD GPU는 DirectML(Windows, 베타) 또는 ROCm(Linux, 베타)을 통해 약 8 GB VRAM이 필요합니다. CPU 전용 작동도 32 GB 시스템 RAM으로 가능하지만, Nvidia RTX 3000 시리즈 GPU보다 약 17배 느립니다.',
          },
          {
            q: 'Fooocus의 GPT-2 기반 프롬프트 확장이란 무엇인가요?',
            a: '이는 오프라인으로 작동하는 프롬프트 처리 엔진으로, UI에서는 "Fooocus V2" 스타일로 제공되며, 생성 전에 짧거나 모호한 프롬프트에 추가적인 스타일 및 구도 디테일을 자동으로 확장해줍니다 — 개념적으로 Midjourney의 숨겨진 프롬프트 전처리나 LeonardoAI의 "Prompt Magic"과 유사합니다. 로컬에서 작동하며 인터넷 연결이 필요하지 않습니다.',
          },
          {
            q: 'Fooocus가 AUTOMATIC1111이나 ComfyUI보다 나은가요?',
            a: '목적에 따라 다릅니다. Fooocus는 기술적 매개변수를 프리셋 뒤에 숨기기 때문에 시작하기 더 쉽지만, 그 대가로 세밀한 제어는 부족합니다. AUTOMATIC1111의 WebUI(또는 그 포크인 WebUI Forge)는 모든 매개변수를 직접 노출하며, 로컬 Stable Diffusion 프런트엔드 중 가장 큰 확장 생태계를 갖추고 있습니다. ComfyUI는 노드 그래프를 통해 파이프라인의 완전한 제어를 제공하며 대체로 새 모델 출시를 가장 먼저 지원합니다. Fooocus의 프리셋으로는 부족해진 독자는 대개 이 두 가지 중 하나로 옮겨갑니다.',
          },
          {
            q: 'Fooocus는 FLUX나 Stable Diffusion 3.5를 지원하나요?',
            a: '아니요. Fooocus는 Stable Diffusion XL 아키텍처를 완전히 기반으로 구축되어 있으며, 자체 README는 FLUX 같은 최신 아키텍처 지원을 추가할 현재 계획이 없다고 밝히고 있습니다. 동일하게 로컬화된 환경에서 FLUX나 SD 3.5를 원하는 독자는 대신 ComfyUI, SwarmUI, 또는 WebUI Forge를 사용해야 합니다.',
          },
          {
            q: 'Fooocus는 어디서 다운로드하나요?',
            a: '유일한 공식 출처는 [GitHub 저장소 lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)이며, Releases 섹션에 Windows용 원클릭 패키지가 게시되어 있습니다. 프로젝트 자체 README는 fooocus.com, fooocus.net, fooocus.ai, fooocus.org, fooocus.pro, fooocus.one 같은 도메인이 실제 프로젝트와 아무 관련 없는 가짜 웹사이트라고 명확히 경고합니다.',
          },
          {
            q: 'Fooocus가 사용하는 기본 모델은 무엇인가요?',
            a: 'Fooocus는 실행하는 프리셋에 따라 서로 다른 기본 SDXL 체크포인트를 자동으로 다운로드합니다: General 프리셋은 Juggernaut XL v8(Rundiffusion), Realistic은 RealisticStockPhoto v2.0, Anime은 AnimaPencilXL v5.0입니다. 세 가지 모두 커뮤니티가 학습시킨 체크포인트로, Fooocus 자체와는 독립적으로 호스팅됩니다.',
          },
          {
            q: 'Fooocus로 생성한 이미지를 상업적으로 사용할 수 있나요?',
            a: 'Fooocus 자체의 GPL-3.0 라이선스는 애플리케이션 코드를 대상으로 하며, 그것이 만들어내는 이미지를 대상으로 하지 않습니다. 생성된 이미지의 상업적 이용은 그것을 만드는 데 사용된 특정 체크포인트의 라이선스에 따라 규율됩니다 — 기본 체크포인트(Juggernaut XL, RealisticStockPhoto, AnimaPencilXL)는 각각 별도의 독자적인 라이선스(일반적으로 CreativeML OpenRAIL-M의 변형)를 가지며, 해당 Civitai 또는 Hugging Face 페이지에 게시되어 있습니다. 상업적 이용 전에 해당 페이지를 확인하시기 바랍니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'Fooocus는 로컬에서 Stable Diffusion을 실행하는 가장 쉬운 방법이라는 평판을 받을 만합니다 — 프리셋과 프롬프트 확장을 기반으로 한 설계는 처음 사용하는 사람에게 AUTOMATIC1111과 ComfyUI를 위협적으로 느끼게 만드는 학습 곡선의 가장 가파른 부분을 실제로 제거하며, 이를 4 GB VRAM GPU라는 소박한 하드웨어에서 완전히 오프라인으로 실행하면서 해냅니다. 정직하게 짚어야 할 우려 사항은 유지 관리입니다: 원본 프로젝트 자체의 README는 이를 버그 수정만 진행하는 모드로 규정하고 있으며, 2024년 8월 이후 태그가 지정된 릴리스가 없고, FLUX나 다른 2024년 이후 아키텍처를 지원할 계획도 없습니다. 다만 저장소는 여전히 활발하며 보관 처리되지 않았습니다. SDXL 기반 로컬 이미지 생성에 가능한 한 가장 간단한 진입점을 원하고, 최신 모델 아키텍처나 세밀한 파이프라인 제어가 필요하지 않은 독자라면, Fooocus가 약속하는 바를 정확히 그대로 제공한다는 것을 알게 될 것입니다. 더 많은 제어(ComfyUI, AUTOMATIC1111/WebUI Forge)나 동일하게 로컬화된 환경에서의 최신 모델(ComfyUI, SwarmUI)을 원하는 독자는 Fooocus를 넘어 그런 대안을 살펴봐야 합니다 — 가급적 [github.com/lllyasviel/Fooocus](https://github.com/lllyasviel/Fooocus)에서 프로젝트의 현재 상태를 직접 확인한 뒤에 판단하는 것이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[lllyasviel/Fooocus — GitHub 저장소 및 README](https://github.com/lllyasviel/Fooocus) — 기능, 설치, 하드웨어 최소 요구 사항 표, 라이선스, 그리고 "Limited Long-Term Support" 유지 관리 상태 명시에 대한 1차 출처.',
          '[lllyasviel/Fooocus — Releases](https://github.com/lllyasviel/Fooocus/releases) — 최신 태그 릴리스인 v2.5.5(2024년 8월 12일)를 포함한 릴리스 이력과 날짜.',
          '[mashb1t/Fooocus — GitHub 저장소](https://github.com/mashb1t/Fooocus) — 본가 저장소보다 더 최근의 커밋 활동을 보이는, 커뮤니티가 유지 관리하는 포크.',
          '[lllyasviel/ControlNet — GitHub 저장소](https://github.com/lllyasviel/ControlNet) — 개발자 Lvmin Zhang의 이전 프로젝트로, 개발자에 대한 배경 정보로 참조함.',
          '[Lvmin Zhang — 개인 학술 페이지](https://lllyasviel.github.io/lvmin_zhang/) — 개발자의 이력 및 연구 배경.',
          '[Scientific American — Lvmin Zhang 프로필](https://www.scientificamerican.com/article/lvmin-zhang/) — Fooocus와 ControlNet을 포함한 Zhang의 AI 도구 작업을 다룬 독립 매체의 프로필 기사.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Stable Diffusion 리뷰: 무료 로컬 텍스트-이미지 모델](/ko/power-local-llm/stable-diffusion-review) — Fooocus가 작동하는 기반이 되는 오픈 웨이트 모델 계열로, 라이선스 조건과 버전 이력을 포함합니다.',
          '[로컬 AI 이미지 생성 vs. 클라우드: FLUX, SD 3.5, Qwen-Image vs. Adobe Firefly & getimg.ai](/ko/power-local-llm/local-ai-image-generation-vs-cloud) — Fooocus의 SDXL 전용 범위를 넘어서고자 하는 독자를 위한, 로컬 이미지 모델 계열에 대한 더 깊은 비교.',
          '[2026년 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 모든 플랫폼을 아우르는 종합 앱 및 도구 디렉터리.',
        ],
      },
    },
  },
}
