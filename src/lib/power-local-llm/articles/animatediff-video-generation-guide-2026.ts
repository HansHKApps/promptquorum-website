// AnimateDiff Guide (2026): Turn Any Stable Diffusion Checkpoint Into Video
// Slug: animatediff-video-generation-guide-2026
// Category: Image & Video Generation
// Sibling/theme-mate: local-ai-video-generation-vs-cloud.ts (native video models: Wan 2.2, LTX-2, HunyuanVideo),
// local-ai-image-generation-vs-cloud.ts (still-image local vs. cloud)

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Image & Video Generation',
    heroImage: '/images/animatediff-video-generation-guide-2026-hero-en.webp',
    title: 'AnimateDiff Guide 2026: Animate Any Stable Diffusion Model',
    seoTitle: 'AnimateDiff 2026: Free Local AI Video From SD Models',
    intro:
      'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) is an open-source motion module that adds animation capability to existing Stable Diffusion checkpoints without retraining the base model. Instead of a standalone video model, it is a plug-in component: pair it with a Stable Diffusion 1.5 or SDXL checkpoint you already use, and the motion module injects temporal (frame-to-frame) coherence so the same style, character, or art direction that model already produces as a still image comes out as a short animated clip. It runs entirely on your own GPU through ComfyUI or the AUTOMATIC1111 WebUI, at no cost, and the project is Apache 2.0 licensed — with one caveat worth knowing before you plan any commercial use, covered in the license section below.',
    metaDescription:
      'AnimateDiff turns Stable Diffusion checkpoints into video with no retraining. ComfyUI and A1111 setup, VRAM needs, motion LoRAs, and license fine print.',
    twitterDescription:
      'AnimateDiff review 2026: free, Apache-2.0 motion module that animates any Stable Diffusion checkpoint. Setup, VRAM needs, motion LoRAs, and the license caveat most guides skip.',
    audience:
      'Digital artists and hobbyists already running Stable Diffusion locally who want short stylized animation clips from their existing checkpoints and LoRAs, without a cloud video subscription.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'View AnimateDiff on GitHub →', url: 'https://github.com/guoyww/AnimateDiff', productName: 'AnimateDiff', productCategory: 'software' },
      { label: 'Check RTX 4070 Ti Super 16GB price on Amazon', url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB', productName: 'NVIDIA RTX 4070 Ti Super 16GB', productCategory: 'gpu', priceRange: '770-1179' },
    ],
    primaryTerm: 'AnimateDiff',
    targetKeywords: [
      'animatediff guide',
      'animatediff comfyui setup',
      'animatediff vs stable video diffusion',
      'animatediff motion lora',
      'stable diffusion video generation local',
      'animatediff vram requirements',
      'animatediff automatic1111',
      'animatediff license commercial use',
    ],
    current_models_mentioned: [
      'AnimateDiff v3 (v3_sd15_mm)',
      'AnimateDiff mm_sd_v15_v2',
      'AnimateDiff SDXL beta (mm_sdxl_v10_beta)',
      'AnimateDiff-Lightning',
      'Stable Diffusion 1.5',
      'Stable Diffusion XL',
    ],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', 'RTX 3060 12GB', 'RTX 4070 Ti Super 16GB', 'RTX 4090 24GB'],
    leadAnswerBlock:
      '**AnimateDiff is the pick for readers who already run Stable Diffusion locally and want to animate an existing checkpoint or LoRA without retraining anything.** It is a free, Apache 2.0-licensed motion module — not a full video model — used through the community-maintained ComfyUI-AnimateDiff-Evolved node or the AUTOMATIC1111 sd-webui-animatediff extension, generating short (roughly 2-second, 16-frame) clips on consumer GPUs. Readers who want longer, more coherent, or photorealistic video should compare it with newer native video models in [Local AI Video Generation vs. Cloud](/power-local-llm/local-ai-video-generation-vs-cloud); readers with no local GPU at all should read [Cloud GPU Rental](/power-local-llm/cloud-gpu-rental-guide-2026) first.',
    quickAnswerTop: {
      en: {
        question: 'What is AnimateDiff and is it free to use?',
        answer:
          'AnimateDiff is a free, open-source motion module (Apache 2.0 code license) that adds animation to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining it. Run it through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 sd-webui-animatediff extension on your own GPU — there is no subscription, but the project README states the release is for academic use, and the checkpoint you animate carries its own license (often CreativeML OpenRAIL-M for SD1.5), so commercial use needs its own check.',
        bullets: [
          '8-12 GB VRAM typical for basic SD1.5 AnimateDiff text-to-video at moderate resolution; SDXL variants need roughly 13 GB+.',
          'Default motion module output is a 16-frame window, about 2 seconds at 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) is the most actively developed integration.',
          '8 motion LoRAs exist for basic camera moves (zoom, pan, tilt, roll), roughly 77 MB each.',
          'Code is Apache 2.0, but the official repo states the release is for academic use — verify commercial terms before monetizing output.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What AnimateDiff Is', anchor: 'what-is-animatediff' },
      { label: 'How the Motion Module Works', anchor: 'how-it-works' },
      { label: 'Setup: ComfyUI and AUTOMATIC1111', anchor: 'setup' },
      { label: 'Hardware and VRAM Requirements', anchor: 'hardware-vram' },
      { label: 'Motion LoRAs and Limitations', anchor: 'motion-loras-limitations' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'AnimateDiff vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'License Clarity', anchor: 'license' },
      { label: 'Who Should Use AnimateDiff', anchor: 'who-should-use' },
      { label: 'Who Should Not Use AnimateDiff', anchor: 'who-should-not-use' },
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
          { type: 'one-sentence', text: 'AnimateDiff is a free, Apache 2.0-licensed motion module that animates an existing Stable Diffusion checkpoint without retraining it, run locally through ComfyUI or AUTOMATIC1111.' },
          { type: 'plain-terms', text: 'Think of it as a plug-in you attach to a Stable Diffusion model you already use — the model still draws in its usual style, but AnimateDiff adds the frame-to-frame motion so the output is a short clip instead of a still image.' },
        ],
        items: [
          'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) is a plug-and-play motion module for Stable Diffusion 1.5 and SDXL checkpoints — no fine-tuning of the base model required.',
          'It is used almost entirely through two community integrations: ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) and the AUTOMATIC1111 sd-webui-animatediff extension (maintained by continue-revolution).',
          'SD1.5-based AnimateDiff typically runs on 8-12 GB VRAM for basic text-to-video; SDXL support (mm_sdxl_v10_beta) needs roughly 13 GB+ per the official repo.',
          'The default motion module output is a 16-frame clip, about 2 seconds — longer clips use a community sliding-window technique that trades some temporal consistency at window boundaries.',
          '8 official motion LoRAs (zoom in/out, pan left/right, tilt up/down, roll clockwise/counter-clockwise) add basic camera movement, roughly 77 MB each.',
          'AnimateDiff-Lightning (ByteDance, arXiv:2403.12706) is a separate, distilled variant that generates in 1, 2, 4, or 8 steps instead of the standard 20-50, trading some quality for speed.',
          'The AnimateDiff code is Apache 2.0, but the official README states the release is for academic use — and the SD1.5 checkpoint you pair it with usually carries its own license (commonly CreativeML OpenRAIL-M), so "fully free for commercial use" is not an accurate claim without checking both.',
        ],
      },
      whatIsAnimateDiff: {
        id: 'what-is-animatediff',
        title: 'What Is AnimateDiff?',
        content: [
          '**AnimateDiff is a motion module, not a standalone video-generation model.** It attaches to a Stable Diffusion 1.5 or SDXL checkpoint you already have — including community fine-tunes and LoRAs — and adds temporal (frame-to-frame) coherence so that model produces short animated clips in its existing visual style, without retraining the checkpoint itself.',
          'The project is the official implementation of the paper [Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning," ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725), maintained on GitHub at [github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff).',
          'This is a different lineage from newer native video-generation models like Wan 2.2, LTX-2, or HunyuanVideo, which are trained from the ground up on video data — see [Local AI Video Generation vs. Cloud](/power-local-llm/local-ai-video-generation-vs-cloud) for that comparison. AnimateDiff\'s specific value is style preservation: because it reuses your existing checkpoint rather than a separately trained video model, output keeps the exact character, art style, or LoRA you already rely on for still images.',
          'A separate, distilled release — [AnimateDiff-Lightning (Lin & Yang, ByteDance, "Cross-Model Diffusion Distillation," arXiv:2403.12706)](https://arxiv.org/abs/2403.12706) — trades some quality for speed, generating in as few as 1, 2, 4, or 8 diffusion steps instead of the usual 20-50, using progressive adversarial diffusion distillation.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'How Does the Motion Module Work?',
        content: [
          '**The motion module is a separate set of trained weights that gets inserted into the Stable Diffusion U-Net alongside the checkpoint\'s existing layers, without modifying that checkpoint.** During generation, the motion module\'s temporal attention layers coordinate what would otherwise be a batch of independent still-image generations into a coherent sequence of frames.',
          'Three motion module releases exist for SD1.5: `mm_sd_v15_v2.ckpt` (about 1.7 GB) and the newer `v3_sd15_mm.ckpt` (about 1.56 GB), which improves motion amplitude and adds motion-LoRA compatibility. A separate SDXL motion module, `mm_sdxl_v10_beta.ckpt` (about 950 MB), targets the larger SDXL checkpoint family via a beta branch.',
          'Because the motion module is a drop-in component rather than a fine-tune of your checkpoint, any SD1.5 checkpoint and most SD1.5 LoRAs you already have installed can be animated without downloading a separate "video" version of that model — the trade-off is that the motion module itself, not your checkpoint, decides how much movement the output can express.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'How Do You Set Up AnimateDiff?',
        itemHeadings: true,
        content: [
          '**Most AnimateDiff use in 2026 goes through one of two community integrations, since the base repository is a research codebase rather than a polished app.** ComfyUI-AnimateDiff-Evolved is the more actively developed option; the AUTOMATIC1111 extension covers readers already standardized on that WebUI.',
        ],
        columns: ['Route', 'Best for', 'Setup steps'],
        rows: [
          {
            'Route': 'ComfyUI-AnimateDiff-Evolved',
            'Best for': 'Node-based control, active development, motion-LoRA and context-window options',
            'Setup steps': 'Install via ComfyUI Manager or clone into custom_nodes; download a motion module checkpoint; build/load a text-to-video workflow graph',
          },
          {
            'Route': 'sd-webui-animatediff (AUTOMATIC1111)',
            'Best for': 'Readers already using AUTOMATIC1111 WebUI for still images who want a familiar interface',
            'Setup steps': 'Install via the WebUI Extensions tab (or clone into extensions/); download a motion module; enable the AnimateDiff panel under a txt2img tab',
          },
        ],
        numberedItems: [
          'Install ComfyUI if you do not already have it, then open ComfyUI Manager and search for "AnimateDiff Evolved" (repository: [Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) — install and restart.',
          'Download a motion module checkpoint (`v3_sd15_mm.ckpt` for SD1.5, or `mm_sdxl_v10_beta.ckpt` for SDXL) into the `ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/` folder.',
          'Load or build a workflow: an SD1.5 or SDXL checkpoint loader feeding into an AnimateDiff Loader node, then a standard KSampler and a video-combine or GIF-output node in place of a single-image save node.',
          'Set the frame count (16 is the module\'s native window) and frame rate, write your prompt as you would for a still image, and queue the generation — expect several minutes on a consumer GPU depending on resolution and frame count.',
          'For AUTOMATIC1111 instead: install [continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff) from the Extensions tab, download the same motion module into the extension\'s model folder, then enable the AnimateDiff panel under the txt2img tab and generate as usual.',
        ],
        note: 'Exact folder paths and menu labels change between ComfyUI and extension versions — check the linked repository\'s README for the current install path before troubleshooting a missing-node error. Verified against the repositories\' documentation, 2026-09-02.',
      },
      hardwareVram: {
        id: 'hardware-vram',
        title: 'How Much VRAM Does AnimateDiff Need?',
        content: [
          '**SD1.5-based AnimateDiff workflows commonly run on 8-12 GB VRAM for basic text-to-video generation at moderate resolution (roughly 512x512, the module\'s native 16-frame window); SDXL support needs meaningfully more.**',
          'The official repository states SDXL inference "usually requires ~13 GB VRAM," depending on the personalized checkpoint and generation settings used. Community reports for SD1.5 workflows vary with resolution, frame count, and whether ControlNet is layered in — expect the lower end of the 8-12 GB range for a single short clip at default settings, and the higher end (or beyond, toward 16 GB+) once you add higher resolution, more frames, or multiple ControlNets in a video-to-video pipeline. These are hedged, community-reported ranges rather than a single verified benchmark, since exact VRAM use depends heavily on your specific workflow.',
          'Practical guidance: an 8 GB card is a workable starting point for SD1.5 text-to-video experimentation at default settings; a 12 GB card gives comfortable headroom for SD1.5 workflows with ControlNet; a 16 GB card (e.g. an RTX 4070 Ti Super) is the more comfortable minimum once you move to SDXL-based AnimateDiff or heavier video-to-video pipelines. Readers whose GPU falls short of these tiers, or who have no local GPU, should compare renting one — see [Cloud GPU Rental Guide 2026](/power-local-llm/cloud-gpu-rental-guide-2026) — against buying, in [Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) (the same VRAM-tier guidance applies to AnimateDiff as to other local generative-AI workloads).',
        ],
      },
      motionLorasLimitations: {
        id: 'motion-loras-limitations',
        title: 'What Are Motion LoRAs, and What Are AnimateDiff\'s Limitations?',
        content: [
          '**Motion LoRAs are small (roughly 77 MB) add-on weights that steer AnimateDiff toward a specific camera movement — zoom in, zoom out, pan left, pan right, tilt up, tilt down, roll clockwise, or roll counter-clockwise — compatible with the `mm_sd_v15_v2` motion module.** They work the same way image LoRAs do: load one alongside your motion module to bias output toward that movement, without changing the checkpoint\'s visual style.',
          'The most-cited limitations, drawn from the project\'s own issue tracker and community write-ups, cluster around three areas:',
        ],
        items: [
          '**Short native clip length.** The motion module\'s trained window is 16 frames (about 2 seconds at 8 fps). Community sliding-window techniques (processing overlapping 16-frame windows and blending the results) extend total length, but temporal consistency typically degrades at each window boundary, and results become unreliable much beyond roughly 30-60 frames.',
          '**Flickering, especially on faces and fine detail.** Temporal consistency breaks down most often on fast movement, detailed faces at lower resolution, and busy backgrounds with multiple subjects — a known, frequently discussed limitation rather than an edge case.',
          '**Limited motion range.** Especially on the original v1 motion module, camera and subject movement trends toward slow pans and small motions rather than dramatic action; later modules (v2, v3) and motion LoRAs improve this but do not remove it entirely.',
          '**Prompt-following degradation vs. a still image from the same checkpoint.** Because the motion module has to reconcile every frame with its neighbors, prompts that render precisely as a single still image can render less precisely once temporal coherence is enforced across 16 frames.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free and Apache 2.0 code',
            'What it means in real use': 'No subscription, no per-generation cost, and the codebase is open for inspection and modification.',
            'Limitation / caveat': 'The official repo states the release is for academic use — check the license section before assuming unrestricted commercial rights.',
          },
          {
            'Benefit': 'No retraining needed',
            'What it means in real use': 'Any compatible SD1.5 checkpoint or LoRA you already use can be animated directly.',
            'Limitation / caveat': 'Output quality and style fidelity depend entirely on how good that checkpoint already is at still images.',
          },
          {
            'Benefit': 'Runs on consumer GPUs',
            'What it means in real use': 'SD1.5 workflows are workable from roughly 8 GB VRAM; no cloud account required.',
            'Limitation / caveat': 'SDXL support needs meaningfully more (~13 GB+), and heavier ControlNet or video-to-video pipelines push higher still.',
          },
          {
            'Benefit': 'Motion LoRAs for camera control',
            'What it means in real use': '8 official LoRAs give basic zoom, pan, tilt, and roll movement without retraining anything.',
            'Limitation / caveat': 'Covers basic camera moves only — no precise, direction-by-timestamp camera path control the way some commercial tools offer.',
          },
          {
            'Benefit': 'Active community tooling',
            'What it means in real use': 'ComfyUI-AnimateDiff-Evolved and the AUTOMATIC1111 extension are both actively maintained and widely documented.',
            'Limitation / caveat': 'The official base repository itself is a research codebase, not a polished end-user app — you are relying on community integrations for a usable workflow.',
          },
          {
            'Benefit': 'AnimateDiff-Lightning for speed',
            'What it means in real use': 'The distilled variant generates in 1-8 steps instead of 20-50, cutting generation time substantially.',
            'Limitation / caveat': 'Fewer diffusion steps trades some quality and detail for that speed.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnimateDiff vs. Alternatives',
        columns: ['Tool', 'Approach', 'Best for', 'Key limitation vs. AnimateDiff'],
        rows: [
          {
            'Tool': 'AnimateDiff',
            'Approach': 'Motion module attached to an existing SD1.5/SDXL checkpoint, no retraining',
            'Best for': 'Stylized or anime-style motion loops that reuse a checkpoint or LoRA you already have',
            'Key limitation vs. AnimateDiff': '—',
          },
          {
            'Tool': 'Stable Video Diffusion (SVD)',
            'Approach': 'Separately trained image-to-video model from Stability AI, different lineage from Stable Diffusion\'s text-to-image line',
            'Best for': 'Animating a single existing image into short motion, rather than generating style-matched clips from a checkpoint',
            'Key limitation vs. AnimateDiff': 'Does not preserve a specific checkpoint\'s or LoRA\'s exact visual style the way AnimateDiff does — it animates the input image, not a text-to-image model\'s learned style.',
          },
          {
            'Tool': 'Deforum',
            'Approach': 'Older keyframe-and-parameter-interpolation technique — 2D/3D camera transforms applied between successive diffusion frames',
            'Best for': 'Camera-path-driven "zoom into infinity" style animations and slow parameter drifts',
            'Key limitation vs. AnimateDiff': 'No learned motion prior — coherence relies on frame-to-frame parameter interpolation rather than a trained temporal-attention module, so subject motion (as opposed to camera motion) is far less natural.',
          },
          {
            'Tool': 'Commercial cloud video models (Runway, Pika, Sora-class models)',
            'Approach': 'Proprietary, cloud-hosted video generation via subscription or credits',
            'Best for': 'Longer, higher-fidelity, more temporally coherent video, and photorealistic or cinematic output',
            'Key limitation vs. AnimateDiff': 'Ongoing subscription cost, no local privacy, and no way to reuse a specific open-source checkpoint\'s exact trained style — see [Local AI Video Generation vs. Cloud](/power-local-llm/local-ai-video-generation-vs-cloud) for a full cost and quality comparison against newer local video models.',
          },
        ],
        note: 'This table compares approach and fit, not a scored ranking — each tool solves a different job. For newer native video models (Wan 2.2, LTX-2, HunyuanVideo) that compete more directly with commercial cloud video at longer clip lengths, see the dedicated comparison linked above rather than this AnimateDiff-focused guide.',
      },
      license: {
        id: 'license',
        title: 'Is AnimateDiff Free to Use Commercially?',
        content: [
          '**The AnimateDiff code itself is released under the Apache 2.0 license, but the project\'s own README states the release is for academic use — so "fully free for commercial use" is not an accurate claim without checking further.** This is exactly the kind of overclaim to avoid: Apache 2.0 normally permits commercial use of the code, but the authors\' own academic-use framing on top of it means readers planning to sell or commercially distribute output should read the repository\'s current license terms directly rather than relying on the Apache 2.0 label alone.',
          'A second, separate licensing layer applies to whatever Stable Diffusion checkpoint you animate. The original Stable Diffusion 1.5 checkpoint (and many community fine-tunes derived from it) is distributed under the CreativeML OpenRAIL-M license, which permits commercial use but carries its own use-based restrictions (for example, prohibitions on generating certain categories of harmful content) that are separate from — and do not get overridden by — AnimateDiff\'s own licensing.',
          'In practice: check both licenses before any commercial use — the AnimateDiff release terms in its repository, and the license attached to the specific checkpoint you are animating (OpenRAIL-M terms for the original SD1.5 checkpoint, or whatever license a specific community fine-tune specifies, since fine-tunes can carry different terms than the base model). This is not legal advice; consult the current license text or a legal professional before commercial deployment.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use AnimateDiff',
        items: [
          '**Reader who already has a Stable Diffusion checkpoint or LoRA they like.** AnimateDiff\'s core value is reusing that exact visual style in motion, without retraining anything.',
          '**Reader who wants stylized, anime-style, or illustrative motion loops.** The technique holds up best on the kind of content Stable Diffusion checkpoints are already strong at — art styles rather than photorealism.',
          '**Reader comfortable in ComfyUI or AUTOMATIC1111.** Setup assumes familiarity with one of those interfaces; there is no dedicated standalone AnimateDiff app.',
          '**Reader who wants short clips (a few seconds) rather than long-form video.** The 16-frame native window fits loops, GIFs, and short stylized clips better than a narrative sequence.',
          '**Reader with a mid-range consumer GPU (8 GB+ VRAM) who wants zero recurring cost.** No subscription, no credits, no cloud account for local generation.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use AnimateDiff',
        items: [
          '**Reader who needs photorealistic, long-form, or precisely camera-controlled video.** Native video models — local ones like Wan 2.2 or LTX-2, or commercial ones like Runway or Pika — handle this better; see [Local AI Video Generation vs. Cloud](/power-local-llm/local-ai-video-generation-vs-cloud).',
          '**Reader with no Stable Diffusion checkpoint they already like.** Without a starting point worth animating, there is little advantage over a native video model that generates directly from a text prompt.',
          '**Reader who needs guaranteed commercial-use rights without reading license text.** The academic-use framing in AnimateDiff\'s own README, plus the separate checkpoint license, means this is not a zero-diligence "free for commercial use" tool — see the License Clarity section above.',
          '**Reader without any local GPU, or a card under roughly 8 GB VRAM.** SD1.5-based AnimateDiff is workable from 8 GB, but readers below that tier should consider [Cloud GPU Rental](/power-local-llm/cloud-gpu-rental-guide-2026) or a cloud video service instead.',
          '**Reader who wants a one-click app experience.** Both ComfyUI and AUTOMATIC1111 assume some comfort with node graphs or extension settings — this is not a polished consumer product.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is AnimateDiff?',
            a: 'AnimateDiff is an open-source motion module that adds animation capability to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining that checkpoint. It is the official implementation of Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning" (ICLR 2024 Spotlight, arXiv:2307.04725), maintained at github.com/guoyww/AnimateDiff under an Apache 2.0 code license.',
          },
          {
            q: 'Is AnimateDiff free?',
            a: 'Yes — the code is free to download and run, and there is no subscription for local generation on your own hardware. Generation cost is the electricity and GPU time you already own, not a fee to AnimateDiff itself.',
          },
          {
            q: 'Is AnimateDiff free for commercial use?',
            a: 'Not automatically. The code is Apache 2.0 licensed, but the project\'s own README states the release is for academic use, and the Stable Diffusion checkpoint you animate typically carries its own separate license (commonly CreativeML OpenRAIL-M for SD1.5), which permits commercial use but with its own content restrictions. Check both license texts before commercial deployment — this is not legal advice.',
          },
          {
            q: 'How do I install AnimateDiff in ComfyUI?',
            a: 'Install the community-maintained ComfyUI-AnimateDiff-Evolved node ([github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) via ComfyUI Manager or by cloning it into your custom_nodes folder, then download a motion module checkpoint (v3_sd15_mm.ckpt for SD1.5 or mm_sdxl_v10_beta.ckpt for SDXL) into that node\'s models folder before building a text-to-video workflow.',
          },
          {
            q: 'Does AnimateDiff work with AUTOMATIC1111?',
            a: 'Yes, via the community-maintained sd-webui-animatediff extension ([github.com/continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff)), installed through the WebUI\'s Extensions tab. It adds an AnimateDiff panel under the standard txt2img tab.',
          },
          {
            q: 'How much VRAM does AnimateDiff need?',
            a: 'SD1.5-based AnimateDiff commonly runs on 8-12 GB VRAM for basic text-to-video at moderate resolution and the module\'s native 16-frame window. SDXL support needs meaningfully more — the official repository states SDXL inference usually requires roughly 13 GB VRAM, depending on the checkpoint and settings used. Heavier resolution, longer clips, or ControlNet layering push requirements higher.',
          },
          {
            q: 'How long are AnimateDiff clips?',
            a: 'The motion module\'s native, trained window is 16 frames — about 2 seconds at 8 fps. Community sliding-window techniques can extend total length by processing overlapping 16-frame windows and blending them, but temporal consistency typically degrades at each window boundary, and results become unreliable much beyond roughly 30-60 frames.',
          },
          {
            q: 'What are motion LoRAs?',
            a: 'Motion LoRAs are small (roughly 77 MB) add-on weight files, compatible with the mm_sd_v15_v2 motion module, that bias generation toward one of 8 basic camera movements: zoom in, zoom out, pan left, pan right, tilt up, tilt down, roll clockwise, or roll counter-clockwise. They load alongside the motion module the same way an image LoRA loads alongside a checkpoint.',
          },
          {
            q: 'Why does my AnimateDiff output flicker?',
            a: 'Flickering — especially on faces and fine detail — is a widely reported limitation, not a configuration mistake. Temporal consistency breaks down most often on fast movement, detailed faces at lower resolution, and busy backgrounds with multiple subjects; later motion modules (v2, v3) and motion LoRAs reduce but do not eliminate it.',
          },
          {
            q: 'What is AnimateDiff-Lightning?',
            a: 'AnimateDiff-Lightning is a separate, distilled release from ByteDance (Lin & Yang, "AnimateDiff-Lightning: Cross-Model Diffusion Distillation," arXiv:2403.12706) that uses progressive adversarial diffusion distillation to generate in as few as 1, 2, 4, or 8 diffusion steps instead of the usual 20-50 — substantially faster, at some cost to quality and detail.',
          },
          {
            q: 'How is AnimateDiff different from Stable Video Diffusion?',
            a: 'AnimateDiff attaches a motion module to an existing Stable Diffusion text-to-image checkpoint, preserving that checkpoint\'s exact visual style. Stable Video Diffusion (SVD) is a separately trained image-to-video model from Stability AI with a different lineage — it animates a given input image rather than reusing a text-to-image checkpoint\'s learned style. Choose AnimateDiff to keep a specific checkpoint or LoRA\'s look; choose SVD to animate a specific existing image.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'AnimateDiff earns its place as the most direct way to animate a Stable Diffusion checkpoint you already like, without retraining anything or leaving your own hardware. The trade-off is real and specific: clips are short by default (16 frames, about 2 seconds, extendable but with quality loss at longer lengths), motion range and prompt-following degrade somewhat compared to a still image from the same checkpoint, and the license picture requires two separate checks — the project\'s own academic-use framing on top of its Apache 2.0 code, and whatever license the checkpoint you animate carries — before any commercial use. For readers who already have a stylized SD1.5 or SDXL checkpoint and want short, style-matched motion loops on their own GPU at zero recurring cost, AnimateDiff through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 extension is the practical starting point. Readers who need longer, more coherent, or photorealistic video should compare it against newer native video models in [Local AI Video Generation vs. Cloud](/power-local-llm/local-ai-video-generation-vs-cloud) instead.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[AnimateDiff official repository](https://github.com/guoyww/AnimateDiff) — code, motion module downloads, license terms.',
          '[Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning," ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725) — the original paper.',
          '[Lin & Yang (ByteDance), "AnimateDiff-Lightning: Cross-Model Diffusion Distillation," arXiv:2403.12706](https://arxiv.org/abs/2403.12706) — the distilled few-step variant.',
          '[ComfyUI-AnimateDiff-Evolved (Kosinkadink)](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) — the community ComfyUI integration.',
          '[sd-webui-animatediff (continue-revolution)](https://github.com/continue-revolution/sd-webui-animatediff) — the community AUTOMATIC1111 extension.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local AI Video Generation vs. Cloud 2026](/power-local-llm/local-ai-video-generation-vs-cloud) — newer native video models (Wan 2.2, LTX-2, HunyuanVideo) compared against commercial cloud video, for readers who need longer or more coherent clips than AnimateDiff produces.',
          '[Local AI Image Generation vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) — the still-image side of the same local-vs-cloud decision; the checkpoint you pick there is what AnimateDiff animates.',
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — VRAM-tier hardware guidance that applies to AnimateDiff as much as to local language models.',
          '[Cloud GPU Rental Guide 2026](/power-local-llm/cloud-gpu-rental-guide-2026) — for readers without a locally capable GPU who still want to run AnimateDiff workflows.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — the full local-AI tool directory, including the image-generation and visual-AI tier AnimateDiff belongs to.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Image & Video Generation',
    heroImage: '/images/animatediff-video-generation-guide-2026-hero-de.webp',
    title: 'AnimateDiff 2026: Stable-Diffusion-Modelle animieren, Kosten & VRAM',
    seoTitle: 'AnimateDiff 2026: Kostenlose lokale KI-Videoanimation',
    intro:
      'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) ist ein Open-Source-Motion-Modul, das vorhandene Stable-Diffusion-Checkpoints animationsfähig macht, ohne das Basismodell neu zu trainieren. Statt eines eigenständigen Video-Modells handelt es sich um eine Plug-in-Komponente: Sie kombinieren es mit einem bereits genutzten Stable-Diffusion-1.5- oder SDXL-Checkpoint, und das Motion-Modul fügt die zeitliche Kohärenz zwischen den Frames hinzu — derselbe Stil, dieselbe Figur, dieselbe künstlerische Ausrichtung, die dieses Modell bereits als Einzelbild liefert, wird zu einem kurzen animierten Clip. Es läuft vollständig auf der eigenen GPU über ComfyUI oder die AUTOMATIC1111 WebUI, kostenlos, und das Projekt steht unter Apache-2.0-Lizenz — mit einem Vorbehalt, den Sie vor jeder kommerziellen Nutzung kennen sollten (siehe Lizenzabschnitt unten).',
    metaDescription:
      'AnimateDiff macht aus Stable-Diffusion-Checkpoints Videos, ohne Neu-Training. ComfyUI- & A1111-Setup, VRAM-Bedarf, Motion-LoRAs und die Lizenz-Feinheiten im Detail.',
    twitterDescription:
      'AnimateDiff im Test 2026: kostenloses, Apache-2.0-lizenziertes Motion-Modul, das jeden Stable-Diffusion-Checkpoint animiert. Setup, VRAM-Bedarf, Motion-LoRAs und der Lizenz-Vorbehalt, den viele Guides auslassen.',
    audience:
      'Digitale Künstler und Hobbyisten, die bereits lokal Stable Diffusion nutzen und aus ihren vorhandenen Checkpoints und LoRAs kurze stilisierte Animationsclips erstellen möchten, ohne ein Cloud-Video-Abo.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'AnimateDiff auf GitHub ansehen →', url: 'https://github.com/guoyww/AnimateDiff', productName: 'AnimateDiff', productCategory: 'software' },
      { label: 'RTX 4070 Ti Super 16GB Preis bei Amazon prüfen', url: 'https://www.amazon.de/s?k=RTX+4070+Ti+Super+16GB', productName: 'NVIDIA RTX 4070 Ti Super 16GB', productCategory: 'gpu', priceRange: '770-1179' },
    ],
    primaryTerm: 'AnimateDiff',
    targetKeywords: [
      'animatediff anleitung',
      'animatediff comfyui setup',
      'animatediff vs stable video diffusion',
      'animatediff motion lora',
      'stable diffusion video generierung lokal',
      'animatediff vram anforderungen',
      'animatediff automatic1111',
      'animatediff lizenz kommerzielle nutzung',
    ],
    current_models_mentioned: [
      'AnimateDiff v3 (v3_sd15_mm)',
      'AnimateDiff mm_sd_v15_v2',
      'AnimateDiff SDXL beta (mm_sdxl_v10_beta)',
      'AnimateDiff-Lightning',
      'Stable Diffusion 1.5',
      'Stable Diffusion XL',
    ],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', 'RTX 3060 12GB', 'RTX 4070 Ti Super 16GB', 'RTX 4090 24GB'],
    leadAnswerBlock:
      '**AnimateDiff ist die richtige Wahl für Leser, die bereits lokal Stable Diffusion nutzen und einen vorhandenen Checkpoint oder ein LoRA animieren möchten, ohne irgendetwas neu zu trainieren.** Es handelt sich um ein kostenloses, Apache-2.0-lizenziertes Motion-Modul — kein vollständiges Video-Modell —, das über den community-gepflegten ComfyUI-AnimateDiff-Evolved-Node oder die AUTOMATIC1111-Erweiterung sd-webui-animatediff genutzt wird und kurze Clips (rund 2 Sekunden, 16 Frames) auf Consumer-GPUs erzeugt. Wer längere, kohärentere oder fotorealistische Videos möchte, sollte es mit neueren nativen Video-Modellen in [Lokale KI-Videogenerierung vs. Cloud](/de/power-local-llm/local-ai-video-generation-vs-cloud) vergleichen; wer keine lokale GPU besitzt, sollte zuerst [Cloud-GPU-Miete](/de/power-local-llm/cloud-gpu-rental-guide-2026) lesen.',
    quickAnswerTop: {
      en: {
        question: 'What is AnimateDiff and is it free to use?',
        answer:
          'AnimateDiff is a free, open-source motion module (Apache 2.0 code license) that adds animation to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining it. Run it through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 sd-webui-animatediff extension on your own GPU — there is no subscription, but the project README states the release is for academic use, and the checkpoint you animate carries its own license (often CreativeML OpenRAIL-M for SD1.5), so commercial use needs its own check.',
        bullets: [
          '8-12 GB VRAM typical for basic SD1.5 AnimateDiff text-to-video at moderate resolution; SDXL variants need roughly 13 GB+.',
          'Default motion module output is a 16-frame window, about 2 seconds at 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) is the most actively developed integration.',
          '8 motion LoRAs exist for basic camera moves (zoom, pan, tilt, roll), roughly 77 MB each.',
          'Code is Apache 2.0, but the official repo states the release is for academic use — verify commercial terms before monetizing output.',
        ],
        updatedDate: '2026-09',
      },
      de: {
        question: 'Was ist AnimateDiff und ist es kostenlos nutzbar?',
        answer:
          'AnimateDiff ist ein kostenloses Open-Source-Motion-Modul (Apache-2.0-Code-Lizenz), das einen vorhandenen Stable-Diffusion-1.5- oder SDXL-Checkpoint animationsfähig macht, ohne ihn neu zu trainieren. Sie nutzen es über ComfyUI-AnimateDiff-Evolved oder die AUTOMATIC1111-Erweiterung sd-webui-animatediff auf der eigenen GPU — es gibt kein Abo, aber das Projekt-README gibt an, dass die Veröffentlichung für den akademischen Gebrauch bestimmt ist, und der animierte Checkpoint trägt seine eigene Lizenz (bei SD1.5 häufig CreativeML OpenRAIL-M) — kommerzielle Nutzung braucht also eine eigene Prüfung.',
        bullets: [
          '8-12 GB VRAM typisch für einfaches SD1.5-AnimateDiff-Text-zu-Video bei moderater Auflösung; SDXL-Varianten brauchen etwa 13 GB+.',
          'Standardausgabe des Motion-Moduls ist ein 16-Frame-Fenster, etwa 2 Sekunden bei 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (gepflegt von Kosinkadink) ist die aktivste Integration.',
          '8 Motion-LoRAs für grundlegende Kamerabewegungen (Zoom, Schwenk, Neigung, Rollen), je rund 77 MB.',
          'Code ist Apache 2.0, aber das offizielle Repo nennt den Release für akademischen Gebrauch — kommerzielle Bedingungen vor Monetarisierung prüfen.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was AnimateDiff ist', anchor: 'what-is-animatediff' },
      { label: 'Wie das Motion-Modul funktioniert', anchor: 'how-it-works' },
      { label: 'Setup: ComfyUI und AUTOMATIC1111', anchor: 'setup' },
      { label: 'Hardware- und VRAM-Anforderungen', anchor: 'hardware-vram' },
      { label: 'Motion-LoRAs und Einschränkungen', anchor: 'motion-loras-limitations' },
      { label: 'Kompromisse: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'AnimateDiff vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Lizenzklarheit', anchor: 'license' },
      { label: 'Wer AnimateDiff nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer AnimateDiff nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AnimateDiff ist ein kostenloses, Apache-2.0-lizenziertes Motion-Modul, das einen vorhandenen Stable-Diffusion-Checkpoint animiert, ohne ihn neu zu trainieren, lokal ausgeführt über ComfyUI oder AUTOMATIC1111.' },
          { type: 'plain-terms', text: 'Stellen Sie es sich als Plug-in vor, das Sie an ein bereits genutztes Stable-Diffusion-Modell anhängen — das Modell zeichnet weiterhin in seinem gewohnten Stil, aber AnimateDiff fügt die Bewegung zwischen den Frames hinzu, sodass ein kurzer Clip statt eines Einzelbilds entsteht.' },
        ],
        items: [
          'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) ist ein Plug-and-Play-Motion-Modul für Stable-Diffusion-1.5- und SDXL-Checkpoints — kein Fine-Tuning des Basismodells nötig.',
          'Genutzt wird es fast ausschließlich über zwei Community-Integrationen: ComfyUI-AnimateDiff-Evolved (gepflegt von Kosinkadink) und die AUTOMATIC1111-Erweiterung sd-webui-animatediff (gepflegt von continue-revolution).',
          'SD1.5-basiertes AnimateDiff läuft typischerweise mit 8-12 GB VRAM für einfaches Text-zu-Video; SDXL-Unterstützung (mm_sdxl_v10_beta) braucht laut offiziellem Repo rund 13 GB+.',
          'Die Standardausgabe des Motion-Moduls ist ein 16-Frame-Clip, etwa 2 Sekunden — längere Clips nutzen eine Community-Sliding-Window-Technik, die an den Fenstergrenzen etwas zeitliche Konsistenz kostet.',
          '8 offizielle Motion-LoRAs (Zoom rein/raus, Schwenk links/rechts, Neigung hoch/runter, Rollen im/gegen Uhrzeigersinn) fügen grundlegende Kamerabewegung hinzu, je rund 77 MB.',
          'AnimateDiff-Lightning (ByteDance, arXiv:2403.12706) ist eine separate, destillierte Variante, die in 1, 2, 4 oder 8 Schritten statt der üblichen 20-50 generiert — Geschwindigkeit gegen etwas Qualität getauscht.',
          'Der AnimateDiff-Code ist Apache 2.0, aber das offizielle README gibt an, dass der Release für akademischen Gebrauch bestimmt ist — und der animierte SD1.5-Checkpoint trägt meist seine eigene Lizenz (häufig CreativeML OpenRAIL-M), weshalb „vollständig frei für kommerzielle Nutzung" ohne Prüfung beider Lizenzen keine korrekte Aussage ist.',
        ],
      },
      whatIsAnimateDiff: {
        id: 'what-is-animatediff',
        title: 'Was ist AnimateDiff?',
        content: [
          '**AnimateDiff ist ein Motion-Modul, kein eigenständiges Video-Generierungsmodell.** Es dockt an einen bereits vorhandenen Stable-Diffusion-1.5- oder SDXL-Checkpoint an — einschließlich Community-Fine-Tunes und LoRAs — und fügt zeitliche Kohärenz zwischen den Frames hinzu, sodass dieses Modell kurze animierte Clips in seinem bestehenden visuellen Stil erzeugt, ohne den Checkpoint selbst neu zu trainieren.',
          'Das Projekt ist die offizielle Implementierung des Papers [Guo et al., „AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning", ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725), gepflegt auf GitHub unter [github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff).',
          'Das ist eine andere Abstammungslinie als bei neueren, nativ trainierten Video-Modellen wie Wan 2.2, LTX-2 oder HunyuanVideo, die von Grund auf auf Videodaten trainiert wurden — siehe [Lokale KI-Videogenerierung vs. Cloud](/de/power-local-llm/local-ai-video-generation-vs-cloud) für diesen Vergleich. Der spezifische Wert von AnimateDiff liegt in der Stilerhaltung: Da es einen vorhandenen Checkpoint statt eines separat trainierten Video-Modells wiederverwendet, behält die Ausgabe genau die Figur, den Kunststil oder das LoRA, auf das Sie bereits bei Einzelbildern setzen.',
          'Eine separate, destillierte Veröffentlichung — [AnimateDiff-Lightning (Lin & Yang, ByteDance, „Cross-Model Diffusion Distillation", arXiv:2403.12706)](https://arxiv.org/abs/2403.12706) — tauscht etwas Qualität gegen Geschwindigkeit und generiert in nur 1, 2, 4 oder 8 Diffusionsschritten statt der üblichen 20-50, mittels progressiver adversarieller Diffusions-Destillation.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Wie funktioniert das Motion-Modul?',
        content: [
          '**Das Motion-Modul ist ein separater Satz trainierter Gewichte, der neben den vorhandenen Layern des Checkpoints in das Stable-Diffusion-U-Net eingefügt wird, ohne diesen Checkpoint zu verändern.** Während der Generierung koordinieren die zeitlichen Attention-Layer des Motion-Moduls, was sonst eine Reihe unabhängiger Einzelbild-Generierungen wäre, zu einer kohärenten Bildfolge.',
          'Für SD1.5 existieren drei Motion-Modul-Versionen: `mm_sd_v15_v2.ckpt` (ca. 1,7 GB) und das neuere `v3_sd15_mm.ckpt` (ca. 1,56 GB), das die Bewegungsamplitude verbessert und Motion-LoRA-Kompatibilität hinzufügt. Ein separates SDXL-Motion-Modul, `mm_sdxl_v10_beta.ckpt` (ca. 950 MB), zielt über einen Beta-Branch auf die größere SDXL-Checkpoint-Familie.',
          'Da das Motion-Modul eine Drop-in-Komponente und kein Fine-Tune Ihres Checkpoints ist, lässt sich jeder kompatible SD1.5-Checkpoint und die meisten bereits installierten SD1.5-LoRAs direkt animieren, ohne eine separate „Video"-Version dieses Modells herunterzuladen — der Kompromiss ist, dass das Motion-Modul selbst, nicht Ihr Checkpoint, bestimmt, wie viel Bewegung die Ausgabe ausdrücken kann.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Wie richtet man AnimateDiff ein?',
        itemHeadings: true,
        content: [
          '**Die meiste AnimateDiff-Nutzung 2026 läuft über eine von zwei Community-Integrationen, da das Basis-Repository eher eine Forschungs-Codebasis als eine fertige App ist.** ComfyUI-AnimateDiff-Evolved ist die aktiver entwickelte Option; die AUTOMATIC1111-Erweiterung deckt Leser ab, die bereits auf diese WebUI setzen.',
        ],
        columns: ['Weg', 'Am besten für', 'Setup-Schritte'],
        rows: [
          {
            'Weg': 'ComfyUI-AnimateDiff-Evolved',
            'Am besten für': 'Node-basierte Kontrolle, aktive Entwicklung, Motion-LoRA- und Context-Window-Optionen',
            'Setup-Schritte': 'Installation über ComfyUI Manager oder Klonen in custom_nodes; Motion-Modul-Checkpoint herunterladen; Text-zu-Video-Workflow-Graph aufbauen/laden',
          },
          {
            'Weg': 'sd-webui-animatediff (AUTOMATIC1111)',
            'Am besten für': 'Leser, die AUTOMATIC1111 WebUI bereits für Einzelbilder nutzen und eine vertraute Oberfläche wollen',
            'Setup-Schritte': 'Installation über den Extensions-Tab der WebUI (oder Klonen in extensions/); Motion-Modul herunterladen; AnimateDiff-Panel unter einem txt2img-Tab aktivieren',
          },
        ],
        numberedItems: [
          'Installieren Sie ComfyUI, falls noch nicht vorhanden, öffnen Sie dann den ComfyUI Manager und suchen Sie nach „AnimateDiff Evolved" (Repository: [Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) — installieren und neu starten.',
          'Laden Sie einen Motion-Modul-Checkpoint herunter (`v3_sd15_mm.ckpt` für SD1.5 oder `mm_sdxl_v10_beta.ckpt` für SDXL) in den Ordner `ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/`.',
          'Laden oder bauen Sie einen Workflow: ein SD1.5- oder SDXL-Checkpoint-Loader speist einen AnimateDiff-Loader-Node, danach ein Standard-KSampler und ein Video-Combine- bzw. GIF-Output-Node anstelle eines einzelnen Bild-Speicher-Nodes.',
          'Stellen Sie die Frame-Anzahl (16 ist das native Fenster des Moduls) und die Framerate ein, schreiben Sie Ihren Prompt wie für ein Einzelbild und starten Sie die Generierung — rechnen Sie je nach Auflösung und Frame-Anzahl mit mehreren Minuten auf einer Consumer-GPU.',
          'Für AUTOMATIC1111 stattdessen: [continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff) über den Extensions-Tab installieren, dasselbe Motion-Modul in den Modell-Ordner der Erweiterung laden, dann das AnimateDiff-Panel unter dem txt2img-Tab aktivieren und wie gewohnt generieren.',
        ],
        note: 'Genaue Ordnerpfade und Menübezeichnungen ändern sich zwischen ComfyUI- und Erweiterungsversionen — prüfen Sie vor der Fehlersuche bei fehlenden Nodes das README des verlinkten Repositorys auf den aktuellen Installationspfad. Gegen die Dokumentation der Repositories geprüft, 2026-09-02.',
      },
      hardwareVram: {
        id: 'hardware-vram',
        title: 'Wie viel VRAM benötigt AnimateDiff?',
        content: [
          '**SD1.5-basierte AnimateDiff-Workflows laufen für einfaches Text-zu-Video bei moderater Auflösung (etwa 512x512, das native 16-Frame-Fenster des Moduls) üblicherweise mit 8-12 GB VRAM; SDXL-Unterstützung braucht deutlich mehr.**',
          'Das offizielle Repository gibt an, dass SDXL-Inferenz „üblicherweise ~13 GB VRAM" benötigt, abhängig vom personalisierten Checkpoint und den Generierungseinstellungen. Community-Berichte für SD1.5-Workflows variieren je nach Auflösung, Frame-Anzahl und ob ControlNet eingebunden ist — rechnen Sie mit dem unteren Ende der 8-12-GB-Spanne bei einem kurzen Clip mit Standardeinstellungen und mit dem oberen Ende (oder darüber, Richtung 16 GB+), sobald höhere Auflösung, mehr Frames oder mehrere ControlNets in einer Video-zu-Video-Pipeline hinzukommen. Dies sind vorsichtig formulierte, community-berichtete Spannen statt eines einzelnen verifizierten Benchmarks, da der tatsächliche VRAM-Bedarf stark vom konkreten Workflow abhängt.',
          'Praktische Richtwerte: Eine 8-GB-Karte ist ein brauchbarer Einstieg für SD1.5-Text-zu-Video-Experimente mit Standardeinstellungen; eine 12-GB-Karte bietet komfortablen Spielraum für SD1.5-Workflows mit ControlNet; eine 16-GB-Karte (z. B. eine RTX 4070 Ti Super) ist das komfortablere Minimum, sobald Sie zu SDXL-basiertem AnimateDiff oder schwereren Video-zu-Video-Pipelines wechseln. Leser, deren GPU unter diesen Stufen liegt oder die keine lokale GPU besitzen, sollten Miete — siehe [Cloud-GPU-Miete-Guide 2026](/de/power-local-llm/cloud-gpu-rental-guide-2026) — gegen Kauf abwägen, im [Besten GPU-Kaufratgeber für lokale LLMs 2026](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) (dieselbe VRAM-Stufen-Richtlinie gilt für AnimateDiff wie für andere lokale generative KI-Workloads).',
        ],
      },
      motionLorasLimitations: {
        id: 'motion-loras-limitations',
        title: 'Was sind Motion-LoRAs, und wo liegen die Grenzen von AnimateDiff?',
        content: [
          '**Motion-LoRAs sind kleine (rund 77 MB) Zusatzgewichte, die AnimateDiff auf eine bestimmte Kamerabewegung ausrichten — Zoom rein, Zoom raus, Schwenk links, Schwenk rechts, Neigung hoch, Neigung runter, Rollen im Uhrzeigersinn oder gegen den Uhrzeigersinn —, kompatibel mit dem Motion-Modul `mm_sd_v15_v2`.** Sie funktionieren genauso wie Bild-LoRAs: Man lädt eines neben dem Motion-Modul, um die Ausgabe zu dieser Bewegung hin zu verzerren, ohne den visuellen Stil des Checkpoints zu ändern.',
          'Die am häufigsten genannten Einschränkungen, entnommen aus dem projekteigenen Issue-Tracker und Community-Berichten, gruppieren sich um drei Bereiche:',
        ],
        items: [
          '**Kurze native Clip-Länge.** Das trainierte Fenster des Motion-Moduls umfasst 16 Frames (rund 2 Sekunden bei 8 fps). Community-Sliding-Window-Techniken (Verarbeitung überlappender 16-Frame-Fenster und Verschmelzung der Ergebnisse) verlängern die Gesamtdauer, aber die zeitliche Konsistenz nimmt an jeder Fenstergrenze typischerweise ab, und Ergebnisse werden deutlich über etwa 30-60 Frames hinaus unzuverlässig.',
          '**Flackern, besonders bei Gesichtern und feinen Details.** Zeitliche Konsistenz bricht am häufigsten bei schneller Bewegung, detaillierten Gesichtern in niedrigerer Auflösung und belebten Hintergründen mit mehreren Motiven zusammen — eine bekannte, häufig diskutierte Einschränkung und kein Randfall.',
          '**Begrenzter Bewegungsspielraum.** Besonders beim ursprünglichen v1-Motion-Modul tendieren Kamera- und Motivbewegung zu langsamen Schwenks und kleinen Bewegungen statt dramatischer Aktion; spätere Module (v2, v3) und Motion-LoRAs verbessern dies, beseitigen es aber nicht vollständig.',
          '**Prompt-Treue-Verschlechterung gegenüber einem Einzelbild desselben Checkpoints.** Da das Motion-Modul jeden Frame mit seinen Nachbarn abgleichen muss, können Prompts, die als einzelnes Standbild präzise wiedergegeben werden, weniger präzise ausfallen, sobald zeitliche Kohärenz über 16 Frames erzwungen wird.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Kompromisse: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Vorbehalt'],
        rows: [
          {
            'Vorteil': 'Kostenlos und Apache-2.0-Code',
            'Was das in der Praxis bedeutet': 'Kein Abo, keine Kosten pro Generierung, und die Codebasis ist offen für Prüfung und Anpassung.',
            'Einschränkung / Vorbehalt': 'Das offizielle Repo nennt den Release für akademischen Gebrauch — vor uneingeschränkter kommerzieller Nutzung den Lizenzabschnitt prüfen.',
          },
          {
            'Vorteil': 'Kein Neu-Training nötig',
            'Was das in der Praxis bedeutet': 'Jeder kompatible SD1.5-Checkpoint oder LoRA, den Sie bereits nutzen, lässt sich direkt animieren.',
            'Einschränkung / Vorbehalt': 'Ausgabequalität und Stiltreue hängen vollständig davon ab, wie gut dieser Checkpoint bereits bei Einzelbildern ist.',
          },
          {
            'Vorteil': 'Läuft auf Consumer-GPUs',
            'Was das in der Praxis bedeutet': 'SD1.5-Workflows sind ab rund 8 GB VRAM brauchbar; kein Cloud-Konto nötig.',
            'Einschränkung / Vorbehalt': 'SDXL-Unterstützung braucht deutlich mehr (~13 GB+), und schwerere ControlNet- oder Video-zu-Video-Pipelines treiben den Bedarf weiter nach oben.',
          },
          {
            'Vorteil': 'Motion-LoRAs für Kamerakontrolle',
            'Was das in der Praxis bedeutet': '8 offizielle LoRAs bieten grundlegende Zoom-, Schwenk-, Neigungs- und Roll-Bewegung ohne Neu-Training.',
            'Einschränkung / Vorbehalt': 'Deckt nur grundlegende Kamerabewegungen ab — keine präzise, Zeitstempel-basierte Kamerapfad-Kontrolle wie bei manchen kommerziellen Tools.',
          },
          {
            'Vorteil': 'Aktives Community-Tooling',
            'Was das in der Praxis bedeutet': 'ComfyUI-AnimateDiff-Evolved und die AUTOMATIC1111-Erweiterung werden beide aktiv gepflegt und gut dokumentiert.',
            'Einschränkung / Vorbehalt': 'Das offizielle Basis-Repository selbst ist eine Forschungs-Codebasis, keine fertige Endnutzer-App — Sie verlassen sich für einen nutzbaren Workflow auf Community-Integrationen.',
          },
          {
            'Vorteil': 'AnimateDiff-Lightning für Geschwindigkeit',
            'Was das in der Praxis bedeutet': 'Die destillierte Variante generiert in 1-8 statt 20-50 Schritten und verkürzt die Generierungszeit deutlich.',
            'Einschränkung / Vorbehalt': 'Weniger Diffusionsschritte kosten für diese Geschwindigkeit etwas Qualität und Detail.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnimateDiff vs. Alternativen',
        columns: ['Tool', 'Ansatz', 'Am besten für', 'Wichtigste Einschränkung ggü. AnimateDiff'],
        rows: [
          {
            'Tool': 'AnimateDiff',
            'Ansatz': 'Motion-Modul angedockt an einen vorhandenen SD1.5/SDXL-Checkpoint, kein Neu-Training',
            'Am besten für': 'Stilisierte oder Anime-artige Bewegungsloops, die einen bereits vorhandenen Checkpoint oder ein LoRA wiederverwenden',
            'Wichtigste Einschränkung ggü. AnimateDiff': '—',
          },
          {
            'Tool': 'Stable Video Diffusion (SVD)',
            'Ansatz': 'Separat trainiertes Bild-zu-Video-Modell von Stability AI, andere Abstammungslinie als Stable Diffusions Text-zu-Bild-Reihe',
            'Am besten für': 'Ein bereits vorhandenes Einzelbild in kurze Bewegung zu animieren statt stilkonsistente Clips aus einem Checkpoint zu erzeugen',
            'Wichtigste Einschränkung ggü. AnimateDiff': 'Erhält nicht den exakten visuellen Stil eines bestimmten Checkpoints oder LoRA wie AnimateDiff — animiert das Eingabebild, nicht den gelernten Stil eines Text-zu-Bild-Modells.',
          },
          {
            'Tool': 'Deforum',
            'Ansatz': 'Ältere Keyframe- und Parameter-Interpolationstechnik — 2D-/3D-Kameratransformationen zwischen aufeinanderfolgenden Diffusions-Frames',
            'Am besten für': 'Kamerapfad-getriebene „Zoom-ins-Unendliche"-Animationen und langsame Parameterdrifts',
            'Wichtigste Einschränkung ggü. AnimateDiff': 'Kein gelerntes Bewegungs-Prior — Kohärenz beruht auf Frame-zu-Frame-Parameterinterpolation statt einem trainierten zeitlichen Attention-Modul, weshalb Motivbewegung (im Gegensatz zu Kamerabewegung) deutlich weniger natürlich wirkt.',
          },
          {
            'Tool': 'Kommerzielle Cloud-Video-Modelle (Runway, Pika, Sora-Klasse)',
            'Ansatz': 'Proprietäre, Cloud-gehostete Videogenerierung per Abo oder Credits',
            'Am besten für': 'Längeres, hochwertigeres, zeitlich kohärenteres Video sowie fotorealistische oder filmische Ausgabe',
            'Wichtigste Einschränkung ggü. AnimateDiff': 'Laufende Abo-Kosten, keine lokale Privatsphäre und keine Möglichkeit, den exakten trainierten Stil eines bestimmten Open-Source-Checkpoints wiederzuverwenden — siehe [Lokale KI-Videogenerierung vs. Cloud](/de/power-local-llm/local-ai-video-generation-vs-cloud) für einen vollständigen Kosten- und Qualitätsvergleich mit neueren lokalen Video-Modellen.',
          },
        ],
        note: 'Diese Tabelle vergleicht Ansatz und Eignung, keine bewertete Rangfolge — jedes Tool löst eine andere Aufgabe. Für neuere native Video-Modelle (Wan 2.2, LTX-2, HunyuanVideo), die bei längeren Clip-Längen direkter mit kommerziellem Cloud-Video konkurrieren, siehe den oben verlinkten dedizierten Vergleich statt diesen AnimateDiff-fokussierten Guide.',
      },
      license: {
        id: 'license',
        title: 'Ist AnimateDiff kommerziell frei nutzbar?',
        content: [
          '**Der AnimateDiff-Code selbst steht unter Apache-2.0-Lizenz, aber das projekteigene README nennt den Release für akademischen Gebrauch — „vollständig frei für kommerzielle Nutzung" ist daher ohne weitere Prüfung keine korrekte Aussage.** Genau diese Art von Überinterpretation gilt es zu vermeiden: Apache 2.0 erlaubt normalerweise kommerzielle Nutzung des Codes, aber die zusätzliche akademische Rahmung der Autoren bedeutet, dass Leser, die Ausgaben verkaufen oder kommerziell verbreiten wollen, die aktuellen Lizenzbedingungen im Repository direkt lesen sollten, statt sich allein auf das Apache-2.0-Label zu verlassen.',
          'Eine zweite, separate Lizenzebene betrifft den jeweils animierten Stable-Diffusion-Checkpoint. Der ursprüngliche Stable-Diffusion-1.5-Checkpoint (und viele davon abgeleitete Community-Fine-Tunes) wird unter der CreativeML-OpenRAIL-M-Lizenz vertrieben, die kommerzielle Nutzung erlaubt, aber eigene nutzungsbasierte Einschränkungen mitbringt (etwa Verbote, bestimmte Kategorien schädlicher Inhalte zu erzeugen) — getrennt von AnimateDiffs eigener Lizenzierung und nicht durch diese aufgehoben.',
          'In der Praxis: Prüfen Sie vor jeder kommerziellen Nutzung beide Lizenzen — die AnimateDiff-Release-Bedingungen im Repository und die Lizenz des konkret animierten Checkpoints (OpenRAIL-M-Bedingungen für den ursprünglichen SD1.5-Checkpoint, oder welche Lizenz ein bestimmtes Community-Fine-Tune angibt, da Fine-Tunes andere Bedingungen als das Basismodell tragen können). Dies ist keine Rechtsberatung; konsultieren Sie vor kommerziellem Einsatz den aktuellen Lizenztext oder eine Rechtsperson.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer AnimateDiff nutzen sollte',
        items: [
          '**Leser, die bereits einen Stable-Diffusion-Checkpoint oder ein LoRA haben, das ihnen gefällt.** Der Kernwert von AnimateDiff liegt darin, genau diesen visuellen Stil in Bewegung zu bringen, ohne irgendetwas neu zu trainieren.',
          '**Leser, die stilisierte, Anime-artige oder illustrative Bewegungsloops möchten.** Die Technik hält sich am besten bei der Art Inhalt, für die Stable-Diffusion-Checkpoints bereits stark sind — Kunststile statt Fotorealismus.',
          '**Leser, die mit ComfyUI oder AUTOMATIC1111 vertraut sind.** Das Setup setzt Vertrautheit mit einer dieser Oberflächen voraus; eine eigenständige AnimateDiff-App gibt es nicht.',
          '**Leser, die kurze Clips (wenige Sekunden) statt Langform-Video möchten.** Das native 16-Frame-Fenster passt besser zu Loops, GIFs und kurzen stilisierten Clips als zu einer erzählerischen Sequenz.',
          '**Leser mit einer Mittelklasse-Consumer-GPU (8 GB+ VRAM), die keine laufenden Kosten wollen.** Kein Abo, keine Credits, kein Cloud-Konto für die lokale Generierung.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer AnimateDiff nicht nutzen sollte',
        items: [
          '**Leser, die fotorealistisches, langes oder präzise kamerakontrolliertes Video brauchen.** Native Video-Modelle — lokale wie Wan 2.2 oder LTX-2, oder kommerzielle wie Runway oder Pika — leisten das besser; siehe [Lokale KI-Videogenerierung vs. Cloud](/de/power-local-llm/local-ai-video-generation-vs-cloud).',
          '**Leser ohne einen Stable-Diffusion-Checkpoint, der ihnen bereits gefällt.** Ohne einen animationswürdigen Ausgangspunkt gibt es kaum einen Vorteil gegenüber einem nativen Video-Modell, das direkt aus einem Textprompt generiert.',
          '**Leser, die garantierte kommerzielle Nutzungsrechte ohne Lizenztext-Lektüre brauchen.** Die akademische Rahmung im eigenen README von AnimateDiff plus die separate Checkpoint-Lizenz bedeuten, dass dies kein sorgloses „frei für kommerzielle Nutzung"-Tool ist — siehe den Abschnitt Lizenzklarheit oben.',
          '**Leser ohne lokale GPU oder mit einer Karte unter rund 8 GB VRAM.** SD1.5-basiertes AnimateDiff ist ab 8 GB brauchbar, aber Leser unterhalb dieser Stufe sollten stattdessen [Cloud-GPU-Miete](/de/power-local-llm/cloud-gpu-rental-guide-2026) oder einen Cloud-Video-Dienst in Betracht ziehen.',
          '**Leser, die eine Ein-Klick-App-Erfahrung wollen.** Sowohl ComfyUI als auch AUTOMATIC1111 setzen etwas Vertrautheit mit Node-Graphen oder Erweiterungseinstellungen voraus — kein poliertes Endverbraucherprodukt.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist AnimateDiff?',
            a: 'AnimateDiff ist ein Open-Source-Motion-Modul, das einen vorhandenen Stable-Diffusion-1.5- oder SDXL-Checkpoint animationsfähig macht, ohne diesen Checkpoint neu zu trainieren. Es ist die offizielle Implementierung von Guo et al., „AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning" (ICLR 2024 Spotlight, arXiv:2307.04725), gepflegt unter github.com/guoyww/AnimateDiff unter Apache-2.0-Code-Lizenz.',
          },
          {
            q: 'Ist AnimateDiff kostenlos?',
            a: 'Ja — der Code ist kostenlos herunterladbar und ausführbar, und es gibt kein Abo für lokale Generierung auf der eigenen Hardware. Die Generierungskosten sind der Strom und die GPU-Zeit, die Sie bereits besitzen, keine Gebühr an AnimateDiff selbst.',
          },
          {
            q: 'Ist AnimateDiff kostenlos für kommerzielle Nutzung?',
            a: 'Nicht automatisch. Der Code steht unter Apache-2.0-Lizenz, aber das projekteigene README nennt den Release für akademischen Gebrauch, und der animierte Stable-Diffusion-Checkpoint trägt üblicherweise seine eigene separate Lizenz (bei SD1.5 häufig CreativeML OpenRAIL-M), die kommerzielle Nutzung erlaubt, aber mit eigenen Inhaltsbeschränkungen. Prüfen Sie vor kommerziellem Einsatz beide Lizenztexte — dies ist keine Rechtsberatung.',
          },
          {
            q: 'Wie installiere ich AnimateDiff in ComfyUI?',
            a: 'Installieren Sie den community-gepflegten Node ComfyUI-AnimateDiff-Evolved ([github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) über den ComfyUI Manager oder durch Klonen in Ihren custom_nodes-Ordner, laden Sie dann einen Motion-Modul-Checkpoint (v3_sd15_mm.ckpt für SD1.5 oder mm_sdxl_v10_beta.ckpt für SDXL) in den Modell-Ordner dieses Nodes, bevor Sie einen Text-zu-Video-Workflow aufbauen.',
          },
          {
            q: 'Funktioniert AnimateDiff mit AUTOMATIC1111?',
            a: 'Ja, über die community-gepflegte Erweiterung sd-webui-animatediff ([github.com/continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff)), installiert über den Extensions-Tab der WebUI. Sie fügt ein AnimateDiff-Panel unter dem Standard-txt2img-Tab hinzu.',
          },
          {
            q: 'Wie viel VRAM benötigt AnimateDiff?',
            a: 'SD1.5-basiertes AnimateDiff läuft für einfaches Text-zu-Video bei moderater Auflösung und dem nativen 16-Frame-Fenster des Moduls üblicherweise mit 8-12 GB VRAM. SDXL-Unterstützung braucht deutlich mehr — das offizielle Repository gibt an, dass SDXL-Inferenz je nach Checkpoint und Einstellungen üblicherweise rund 13 GB VRAM benötigt. Höhere Auflösung, längere Clips oder ControlNet-Schichtung treiben den Bedarf weiter nach oben.',
          },
          {
            q: 'Wie lang sind AnimateDiff-Clips?',
            a: 'Das native, trainierte Fenster des Motion-Moduls umfasst 16 Frames — rund 2 Sekunden bei 8 fps. Community-Sliding-Window-Techniken können die Gesamtdauer verlängern, indem überlappende 16-Frame-Fenster verarbeitet und verschmolzen werden, aber die zeitliche Konsistenz nimmt an jeder Fenstergrenze typischerweise ab, und Ergebnisse werden deutlich über etwa 30-60 Frames hinaus unzuverlässig.',
          },
          {
            q: 'Was sind Motion-LoRAs?',
            a: 'Motion-LoRAs sind kleine (rund 77 MB) Zusatzgewichtsdateien, kompatibel mit dem Motion-Modul mm_sd_v15_v2, die die Generierung auf eine von 8 grundlegenden Kamerabewegungen ausrichten: Zoom rein, Zoom raus, Schwenk links, Schwenk rechts, Neigung hoch, Neigung runter, Rollen im Uhrzeigersinn oder gegen den Uhrzeigersinn. Sie werden genauso neben dem Motion-Modul geladen wie ein Bild-LoRA neben einem Checkpoint.',
          },
          {
            q: 'Warum flackert meine AnimateDiff-Ausgabe?',
            a: 'Flackern — besonders bei Gesichtern und feinen Details — ist eine weit verbreitet berichtete Einschränkung, kein Konfigurationsfehler. Zeitliche Konsistenz bricht am häufigsten bei schneller Bewegung, detaillierten Gesichtern in niedrigerer Auflösung und belebten Hintergründen mit mehreren Motiven zusammen; spätere Motion-Module (v2, v3) und Motion-LoRAs verringern, beseitigen aber nicht.',
          },
          {
            q: 'Was ist AnimateDiff-Lightning?',
            a: 'AnimateDiff-Lightning ist eine separate, destillierte Veröffentlichung von ByteDance (Lin & Yang, „AnimateDiff-Lightning: Cross-Model Diffusion Distillation", arXiv:2403.12706), die mit progressiver adversarieller Diffusions-Destillation in nur 1, 2, 4 oder 8 Diffusionsschritten statt der üblichen 20-50 generiert — deutlich schneller, mit etwas Qualitäts- und Detailverlust.',
          },
          {
            q: 'Wie unterscheidet sich AnimateDiff von Stable Video Diffusion?',
            a: 'AnimateDiff dockt ein Motion-Modul an einen vorhandenen Stable-Diffusion-Text-zu-Bild-Checkpoint an und erhält dessen exakten visuellen Stil. Stable Video Diffusion (SVD) ist ein separat trainiertes Bild-zu-Video-Modell von Stability AI mit anderer Abstammungslinie — es animiert ein gegebenes Eingabebild statt den gelernten Stil eines Text-zu-Bild-Checkpoints wiederzuverwenden. Wählen Sie AnimateDiff, um den Look eines bestimmten Checkpoints oder LoRA zu erhalten; wählen Sie SVD, um ein konkretes vorhandenes Bild zu animieren.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'AnimateDiff verdient seinen Platz als direktester Weg, einen bereits geschätzten Stable-Diffusion-Checkpoint zu animieren, ohne irgendetwas neu zu trainieren oder die eigene Hardware zu verlassen. Der Kompromiss ist real und konkret: Clips sind standardmäßig kurz (16 Frames, rund 2 Sekunden, erweiterbar, aber mit Qualitätsverlust bei größerer Länge), Bewegungsspielraum und Prompt-Treue verschlechtern sich etwas gegenüber einem Einzelbild desselben Checkpoints, und die Lizenzlage erfordert zwei separate Prüfungen — die eigene akademische Rahmung des Projekts zusätzlich zu seinem Apache-2.0-Code, und welche Lizenz der animierte Checkpoint trägt — vor jeder kommerziellen Nutzung. Für Leser, die bereits einen stilisierten SD1.5- oder SDXL-Checkpoint besitzen und kurze, stilkonsistente Bewegungsloops auf der eigenen GPU ohne laufende Kosten möchten, ist AnimateDiff über ComfyUI-AnimateDiff-Evolved oder die AUTOMATIC1111-Erweiterung der praktische Einstiegspunkt. Leser, die längeres, kohärenteres oder fotorealistisches Video brauchen, sollten es stattdessen mit neueren nativen Video-Modellen in [Lokale KI-Videogenerierung vs. Cloud](/de/power-local-llm/local-ai-video-generation-vs-cloud) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[AnimateDiff offizielles Repository](https://github.com/guoyww/AnimateDiff) — Code, Motion-Modul-Downloads, Lizenzbedingungen.',
          '[Guo et al., „AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning", ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725) — das Originalpaper.',
          '[Lin & Yang (ByteDance), „AnimateDiff-Lightning: Cross-Model Diffusion Distillation", arXiv:2403.12706](https://arxiv.org/abs/2403.12706) — die destillierte Few-Step-Variante.',
          '[ComfyUI-AnimateDiff-Evolved (Kosinkadink)](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) — die Community-ComfyUI-Integration.',
          '[sd-webui-animatediff (continue-revolution)](https://github.com/continue-revolution/sd-webui-animatediff) — die Community-AUTOMATIC1111-Erweiterung.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Lokale KI-Videogenerierung vs. Cloud 2026](/de/power-local-llm/local-ai-video-generation-vs-cloud) — neuere native Video-Modelle (Wan 2.2, LTX-2, HunyuanVideo) im Vergleich zu kommerziellem Cloud-Video, für Leser, die längere oder kohärentere Clips als AnimateDiff brauchen.',
          '[Lokale KI-Bildgenerierung vs. Cloud](/de/power-local-llm/local-ai-image-generation-vs-cloud) — die Einzelbild-Seite derselben lokal-vs-Cloud-Entscheidung; der dort gewählte Checkpoint ist das, was AnimateDiff animiert.',
          '[Bester GPU-Kaufratgeber für lokale LLMs 2026](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — VRAM-Stufen-Hardwareberatung, die für AnimateDiff genauso gilt wie für lokale Sprachmodelle.',
          '[Cloud-GPU-Miete-Guide 2026](/de/power-local-llm/cloud-gpu-rental-guide-2026) — für Leser ohne lokal ausreichende GPU, die trotzdem AnimateDiff-Workflows nutzen möchten.',
          '[Lokales LLM-Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — das vollständige lokale-KI-Tool-Verzeichnis, einschließlich der Bildgenerierungs- und Visual-AI-Schicht, zu der AnimateDiff gehört.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Image & Video Generation',
    heroImage: '/images/animatediff-video-generation-guide-2026-hero-fr.webp',
    title: 'AnimateDiff : animer un modèle Stable Diffusion (guide 2026)',
    seoTitle: 'AnimateDiff 2026 : génération vidéo IA locale gratuite',
    intro:
      'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) est un module de mouvement open source qui ajoute une capacité d\'animation à un checkpoint Stable Diffusion existant, sans réentraîner le modèle de base. Plutôt qu\'un modèle vidéo autonome, il s\'agit d\'un composant enfichable : vous l\'associez à un checkpoint Stable Diffusion 1.5 ou SDXL que vous utilisez déjà, et le module de mouvement ajoute la cohérence temporelle (d\'une image à l\'autre) afin que le même style, personnage ou direction artistique que ce modèle produit déjà en image fixe ressorte sous forme de court clip animé. Il tourne entièrement sur votre propre GPU via ComfyUI ou l\'interface AUTOMATIC1111, gratuitement, et le projet est sous licence Apache 2.0 — avec une nuance à connaître avant toute utilisation commerciale, détaillée dans la section sur la licence ci-dessous.',
    metaDescription:
      'AnimateDiff transforme des checkpoints Stable Diffusion en vidéo, sans réentraînement. Installation ComfyUI/A1111, besoins VRAM, motion LoRAs et licence en détail.',
    twitterDescription:
      'AnimateDiff 2026 : module de mouvement gratuit, sous licence Apache 2.0, qui anime n\'importe quel checkpoint Stable Diffusion. Installation, VRAM, motion LoRAs et la nuance de licence que peu de guides mentionnent.',
    audience:
      'Artistes numériques et amateurs utilisant déjà Stable Diffusion en local qui veulent créer de courts clips animés stylisés à partir de leurs checkpoints et LoRA existants, sans abonnement vidéo cloud.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Voir AnimateDiff sur GitHub →', url: 'https://github.com/guoyww/AnimateDiff', productName: 'AnimateDiff', productCategory: 'software' },
      { label: 'Vérifier le prix de la RTX 4070 Ti Super 16Go sur Amazon', url: 'https://www.amazon.fr/s?k=RTX+4070+Ti+Super+16GB', productName: 'NVIDIA RTX 4070 Ti Super 16GB', productCategory: 'gpu', priceRange: '770-1179' },
    ],
    primaryTerm: 'AnimateDiff',
    targetKeywords: [
      'animatediff guide',
      'animatediff comfyui installation',
      'animatediff vs stable video diffusion',
      'animatediff motion lora',
      'génération vidéo stable diffusion locale',
      'animatediff vram requis',
      'animatediff automatic1111',
      'animatediff licence usage commercial',
    ],
    current_models_mentioned: [
      'AnimateDiff v3 (v3_sd15_mm)',
      'AnimateDiff mm_sd_v15_v2',
      'AnimateDiff SDXL beta (mm_sdxl_v10_beta)',
      'AnimateDiff-Lightning',
      'Stable Diffusion 1.5',
      'Stable Diffusion XL',
    ],
    current_hardware_mentioned: ['8 Go VRAM', '12 Go VRAM', '16 Go VRAM', 'RTX 3060 12Go', 'RTX 4070 Ti Super 16Go', 'RTX 4090 24Go'],
    leadAnswerBlock:
      '**AnimateDiff est le bon choix pour les lecteurs qui utilisent déjà Stable Diffusion en local et veulent animer un checkpoint ou un LoRA existant sans rien réentraîner.** C\'est un module de mouvement gratuit, sous licence Apache 2.0 — pas un modèle vidéo complet —, utilisé via le nœud communautaire ComfyUI-AnimateDiff-Evolved ou l\'extension AUTOMATIC1111 sd-webui-animatediff, générant de courts clips (environ 2 secondes, 16 images) sur des GPU grand public. Les lecteurs qui veulent des vidéos plus longues, plus cohérentes ou photoréalistes devraient le comparer aux modèles vidéo natifs plus récents dans [Génération vidéo IA locale vs. cloud](/fr/power-local-llm/local-ai-video-generation-vs-cloud) ; ceux qui n\'ont pas de GPU local devraient d\'abord lire [Location de GPU cloud](/fr/power-local-llm/cloud-gpu-rental-guide-2026).',
    quickAnswerTop: {
      en: {
        question: 'What is AnimateDiff and is it free to use?',
        answer:
          'AnimateDiff is a free, open-source motion module (Apache 2.0 code license) that adds animation to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining it. Run it through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 sd-webui-animatediff extension on your own GPU — there is no subscription, but the project README states the release is for academic use, and the checkpoint you animate carries its own license (often CreativeML OpenRAIL-M for SD1.5), so commercial use needs its own check.',
        bullets: [
          '8-12 GB VRAM typical for basic SD1.5 AnimateDiff text-to-video at moderate resolution; SDXL variants need roughly 13 GB+.',
          'Default motion module output is a 16-frame window, about 2 seconds at 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) is the most actively developed integration.',
          '8 motion LoRAs exist for basic camera moves (zoom, pan, tilt, roll), roughly 77 MB each.',
          'Code is Apache 2.0, but the official repo states the release is for academic use — verify commercial terms before monetizing output.',
        ],
        updatedDate: '2026-09',
      },
      fr: {
        question: 'Qu\'est-ce qu\'AnimateDiff et est-ce gratuit ?',
        answer:
          'AnimateDiff est un module de mouvement open source gratuit (licence de code Apache 2.0) qui ajoute l\'animation à un checkpoint Stable Diffusion 1.5 ou SDXL existant sans le réentraîner. Utilisez-le via ComfyUI-AnimateDiff-Evolved ou l\'extension AUTOMATIC1111 sd-webui-animatediff sur votre propre GPU — pas d\'abonnement, mais le README du projet précise que la publication est destinée à un usage académique, et le checkpoint animé porte sa propre licence (souvent CreativeML OpenRAIL-M pour SD1.5) — l\'usage commercial nécessite donc sa propre vérification.',
        bullets: [
          '8-12 Go de VRAM typiques pour du texte-vers-vidéo AnimateDiff SD1.5 basique en résolution modérée ; les variantes SDXL demandent environ 13 Go+.',
          'La sortie par défaut du module de mouvement est une fenêtre de 16 images, environ 2 secondes à 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintenu par Kosinkadink) est l\'intégration la plus activement développée.',
          '8 motion LoRAs existent pour les mouvements de caméra basiques (zoom, panoramique, inclinaison, roulis), environ 77 Mo chacun.',
          'Le code est Apache 2.0, mais le dépôt officiel précise que la publication est destinée à un usage académique — vérifiez les conditions commerciales avant de monétiser la sortie.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce qu\'AnimateDiff', anchor: 'what-is-animatediff' },
      { label: 'Comment fonctionne le module de mouvement', anchor: 'how-it-works' },
      { label: 'Installation : ComfyUI et AUTOMATIC1111', anchor: 'setup' },
      { label: 'Matériel et besoins en VRAM', anchor: 'hardware-vram' },
      { label: 'Motion LoRAs et limites', anchor: 'motion-loras-limitations' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'AnimateDiff vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Clarté sur la licence', anchor: 'license' },
      { label: 'Qui devrait utiliser AnimateDiff', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser AnimateDiff', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AnimateDiff est un module de mouvement gratuit, sous licence Apache 2.0, qui anime un checkpoint Stable Diffusion existant sans le réentraîner, exécuté localement via ComfyUI ou AUTOMATIC1111.' },
          { type: 'plain-terms', text: 'Voyez-le comme un module que vous greffez sur un modèle Stable Diffusion déjà utilisé — le modèle continue de dessiner dans son style habituel, mais AnimateDiff ajoute le mouvement d\'une image à l\'autre pour obtenir un court clip au lieu d\'une image fixe.' },
        ],
        items: [
          'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) est un module de mouvement plug-and-play pour les checkpoints Stable Diffusion 1.5 et SDXL — aucun fine-tuning du modèle de base nécessaire.',
          'Il est utilisé presque exclusivement via deux intégrations communautaires : ComfyUI-AnimateDiff-Evolved (maintenu par Kosinkadink) et l\'extension AUTOMATIC1111 sd-webui-animatediff (maintenue par continue-revolution).',
          'AnimateDiff basé sur SD1.5 tourne généralement avec 8-12 Go de VRAM pour du texte-vers-vidéo basique ; le support SDXL (mm_sdxl_v10_beta) demande environ 13 Go+ selon le dépôt officiel.',
          'La sortie par défaut du module de mouvement est un clip de 16 images, environ 2 secondes — les clips plus longs utilisent une technique communautaire de fenêtre glissante, qui coûte un peu de cohérence temporelle aux limites des fenêtres.',
          '8 motion LoRAs officiels (zoom avant/arrière, panoramique gauche/droite, inclinaison haut/bas, roulis horaire/antihoraire) ajoutent un mouvement de caméra basique, environ 77 Mo chacun.',
          'AnimateDiff-Lightning (ByteDance, arXiv:2403.12706) est une variante distillée séparée qui génère en 1, 2, 4 ou 8 étapes au lieu des 20-50 habituelles, échangeant de la qualité contre de la vitesse.',
          'Le code AnimateDiff est Apache 2.0, mais le README officiel précise que la publication est destinée à un usage académique — et le checkpoint SD1.5 animé porte généralement sa propre licence (souvent CreativeML OpenRAIL-M), donc affirmer « entièrement libre d\'usage commercial » sans vérifier les deux n\'est pas exact.',
        ],
      },
      whatIsAnimateDiff: {
        id: 'what-is-animatediff',
        title: 'Qu\'est-ce qu\'AnimateDiff ?',
        content: [
          '**AnimateDiff est un module de mouvement, pas un modèle de génération vidéo autonome.** Il se greffe sur un checkpoint Stable Diffusion 1.5 ou SDXL que vous avez déjà — y compris les fine-tunes communautaires et LoRA — et ajoute la cohérence temporelle (d\'une image à l\'autre) pour que ce modèle produise de courts clips animés dans son style visuel existant, sans réentraîner le checkpoint lui-même.',
          'Le projet est l\'implémentation officielle de l\'article [Guo et al., « AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning », ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725), maintenu sur GitHub à [github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff).',
          'C\'est une lignée différente des modèles vidéo natifs plus récents comme Wan 2.2, LTX-2 ou HunyuanVideo, entraînés depuis zéro sur des données vidéo — voir [Génération vidéo IA locale vs. cloud](/fr/power-local-llm/local-ai-video-generation-vs-cloud) pour cette comparaison. La valeur spécifique d\'AnimateDiff est la préservation du style : parce qu\'il réutilise votre checkpoint existant plutôt qu\'un modèle vidéo entraîné séparément, la sortie conserve exactement le personnage, le style artistique ou le LoRA sur lequel vous comptez déjà pour vos images fixes.',
          'Une publication distincte et distillée — [AnimateDiff-Lightning (Lin & Yang, ByteDance, « Cross-Model Diffusion Distillation », arXiv:2403.12706)](https://arxiv.org/abs/2403.12706) — échange un peu de qualité contre de la vitesse, générant en aussi peu que 1, 2, 4 ou 8 étapes de diffusion au lieu des 20-50 habituelles, via une distillation adversariale progressive.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Comment fonctionne le module de mouvement ?',
        content: [
          '**Le module de mouvement est un ensemble séparé de poids entraînés inséré dans le U-Net de Stable Diffusion aux côtés des couches existantes du checkpoint, sans modifier ce checkpoint.** Pendant la génération, les couches d\'attention temporelle du module de mouvement coordonnent ce qui serait autrement un lot de générations d\'images fixes indépendantes en une séquence cohérente d\'images.',
          'Trois versions du module de mouvement existent pour SD1.5 : `mm_sd_v15_v2.ckpt` (environ 1,7 Go) et le plus récent `v3_sd15_mm.ckpt` (environ 1,56 Go), qui améliore l\'amplitude du mouvement et ajoute la compatibilité avec les motion LoRAs. Un module de mouvement SDXL séparé, `mm_sdxl_v10_beta.ckpt` (environ 950 Mo), cible la famille de checkpoints SDXL plus large via une branche bêta.',
          'Comme le module de mouvement est un composant enfichable plutôt qu\'un fine-tune de votre checkpoint, tout checkpoint SD1.5 compatible et la plupart des LoRA SD1.5 déjà installés peuvent être animés directement, sans télécharger une version « vidéo » séparée de ce modèle — le compromis est que le module de mouvement lui-même, pas votre checkpoint, détermine l\'amplitude de mouvement que la sortie peut exprimer.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Comment installer AnimateDiff ?',
        itemHeadings: true,
        content: [
          '**La majorité de l\'usage d\'AnimateDiff en 2026 passe par l\'une de deux intégrations communautaires, le dépôt de base étant une base de code de recherche plutôt qu\'une application aboutie.** ComfyUI-AnimateDiff-Evolved est l\'option la plus activement développée ; l\'extension AUTOMATIC1111 couvre les lecteurs déjà standardisés sur cette interface.',
        ],
        columns: ['Voie', 'Idéal pour', 'Étapes d\'installation'],
        rows: [
          {
            'Voie': 'ComfyUI-AnimateDiff-Evolved',
            'Idéal pour': 'Contrôle par nœuds, développement actif, options motion LoRA et fenêtre de contexte',
            'Étapes d\'installation': 'Installation via ComfyUI Manager ou clonage dans custom_nodes ; téléchargement d\'un checkpoint de module de mouvement ; construction/chargement d\'un graphe de workflow texte-vers-vidéo',
          },
          {
            'Voie': 'sd-webui-animatediff (AUTOMATIC1111)',
            'Idéal pour': 'Lecteurs déjà utilisateurs d\'AUTOMATIC1111 pour les images fixes qui veulent une interface familière',
            'Étapes d\'installation': 'Installation via l\'onglet Extensions de la WebUI (ou clonage dans extensions/) ; téléchargement d\'un module de mouvement ; activation du panneau AnimateDiff sous un onglet txt2img',
          },
        ],
        numberedItems: [
          'Installez ComfyUI si ce n\'est pas déjà fait, puis ouvrez ComfyUI Manager et recherchez « AnimateDiff Evolved » (dépôt : [Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) — installez et redémarrez.',
          'Téléchargez un checkpoint de module de mouvement (`v3_sd15_mm.ckpt` pour SD1.5, ou `mm_sdxl_v10_beta.ckpt` pour SDXL) dans le dossier `ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/`.',
          'Chargez ou construisez un workflow : un loader de checkpoint SD1.5 ou SDXL alimentant un nœud AnimateDiff Loader, puis un KSampler standard et un nœud video-combine ou de sortie GIF à la place d\'un nœud de sauvegarde d\'image unique.',
          'Réglez le nombre d\'images (16 est la fenêtre native du module) et la fréquence d\'images, écrivez votre prompt comme pour une image fixe, et lancez la génération — comptez plusieurs minutes sur un GPU grand public selon la résolution et le nombre d\'images.',
          'Pour AUTOMATIC1111 à la place : installez [continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff) depuis l\'onglet Extensions, téléchargez le même module de mouvement dans le dossier de modèles de l\'extension, puis activez le panneau AnimateDiff sous l\'onglet txt2img et générez comme d\'habitude.',
        ],
        note: 'Les chemins de dossiers et libellés de menus exacts changent entre les versions de ComfyUI et de l\'extension — vérifiez le README du dépôt lié pour le chemin d\'installation actuel avant de diagnostiquer une erreur de nœud manquant. Vérifié par rapport à la documentation des dépôts, le 2026-09-02.',
      },
      hardwareVram: {
        id: 'hardware-vram',
        title: 'De combien de VRAM AnimateDiff a-t-il besoin ?',
        content: [
          '**Les workflows AnimateDiff basés sur SD1.5 tournent couramment avec 8-12 Go de VRAM pour du texte-vers-vidéo basique en résolution modérée (environ 512x512, la fenêtre native de 16 images du module) ; le support SDXL demande sensiblement plus.**',
          'Le dépôt officiel indique que l\'inférence SDXL « nécessite habituellement environ 13 Go de VRAM », selon le checkpoint personnalisé et les paramètres de génération utilisés. Les retours communautaires pour les workflows SD1.5 varient selon la résolution, le nombre d\'images, et la présence ou non de ControlNet — attendez-vous au bas de la fourchette 8-12 Go pour un clip court avec les réglages par défaut, et au haut de la fourchette (voire au-delà, vers 16 Go+) une fois que vous ajoutez une résolution plus élevée, plus d\'images, ou plusieurs ControlNets dans un pipeline vidéo-vers-vidéo. Ce sont des fourchettes prudentes rapportées par la communauté plutôt qu\'un benchmark unique vérifié, car l\'usage réel de VRAM dépend fortement du workflow spécifique.',
          'Conseil pratique : une carte à 8 Go est un point de départ viable pour l\'expérimentation texte-vers-vidéo SD1.5 aux réglages par défaut ; une carte à 12 Go offre une marge confortable pour les workflows SD1.5 avec ControlNet ; une carte à 16 Go (par ex. une RTX 4070 Ti Super) est le minimum plus confortable une fois que vous passez à AnimateDiff basé sur SDXL ou à des pipelines vidéo-vers-vidéo plus lourds. Les lecteurs dont le GPU est en deçà de ces paliers, ou qui n\'ont pas de GPU local, devraient comparer la location — voir [Guide de location de GPU cloud 2026](/fr/power-local-llm/cloud-gpu-rental-guide-2026) — à l\'achat, dans le [Meilleur guide d\'achat de GPU pour LLM locaux 2026](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) (les mêmes paliers de VRAM s\'appliquent à AnimateDiff qu\'aux autres charges de travail d\'IA générative locale).',
        ],
      },
      motionLorasLimitations: {
        id: 'motion-loras-limitations',
        title: 'Que sont les motion LoRAs, et quelles sont les limites d\'AnimateDiff ?',
        content: [
          '**Les motion LoRAs sont de petits poids additionnels (environ 77 Mo) qui orientent AnimateDiff vers un mouvement de caméra spécifique — zoom avant, zoom arrière, panoramique gauche, panoramique droite, inclinaison haut, inclinaison bas, roulis horaire ou antihoraire — compatibles avec le module de mouvement `mm_sd_v15_v2`.** Ils fonctionnent comme les LoRA d\'image : on en charge un aux côtés du module de mouvement pour orienter la sortie vers ce mouvement, sans changer le style visuel du checkpoint.',
          'Les limites les plus citées, issues du suivi d\'incidents du projet lui-même et de retours communautaires, se regroupent autour de trois axes :',
        ],
        items: [
          '**Durée native de clip courte.** La fenêtre entraînée du module de mouvement est de 16 images (environ 2 secondes à 8 fps). Les techniques communautaires de fenêtre glissante (traitement de fenêtres de 16 images qui se chevauchent puis fusion des résultats) prolongent la durée totale, mais la cohérence temporelle se dégrade généralement à chaque limite de fenêtre, et les résultats deviennent peu fiables bien au-delà d\'environ 30-60 images.',
          '**Scintillement, surtout sur les visages et les détails fins.** La cohérence temporelle se dégrade le plus souvent lors de mouvements rapides, de visages détaillés à basse résolution, et d\'arrière-plans chargés avec plusieurs sujets — une limite connue et fréquemment discutée, pas un cas marginal.',
          '**Amplitude de mouvement limitée.** Surtout sur le module de mouvement v1 d\'origine, le mouvement de caméra et de sujet tend vers des panoramiques lents et de petits mouvements plutôt qu\'une action spectaculaire ; les modules ultérieurs (v2, v3) et les motion LoRAs améliorent cela sans l\'éliminer entièrement.',
          '**Dégradation du suivi de prompt par rapport à une image fixe du même checkpoint.** Comme le module de mouvement doit concilier chaque image avec ses voisines, des prompts qui se rendent précisément en image fixe unique peuvent se rendre moins précisément une fois la cohérence temporelle imposée sur 16 images.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Gratuit et code Apache 2.0',
            'Ce que cela signifie en pratique': 'Aucun abonnement, aucun coût par génération, et la base de code est ouverte à l\'inspection et à la modification.',
            'Limite / réserve': 'Le dépôt officiel indique une publication à usage académique — vérifiez la section licence avant de présumer des droits commerciaux sans restriction.',
          },
          {
            'Avantage': 'Aucun réentraînement nécessaire',
            'Ce que cela signifie en pratique': 'Tout checkpoint SD1.5 compatible ou LoRA déjà utilisé peut être animé directement.',
            'Limite / réserve': 'La qualité de sortie et la fidélité au style dépendent entièrement de la qualité de ce checkpoint en image fixe.',
          },
          {
            'Avantage': 'Tourne sur des GPU grand public',
            'Ce que cela signifie en pratique': 'Les workflows SD1.5 sont viables dès environ 8 Go de VRAM ; aucun compte cloud requis.',
            'Limite / réserve': 'Le support SDXL demande sensiblement plus (~13 Go+), et les pipelines ControlNet ou vidéo-vers-vidéo plus lourds font grimper les besoins davantage.',
          },
          {
            'Avantage': 'Motion LoRAs pour le contrôle caméra',
            'Ce que cela signifie en pratique': '8 LoRAs officiels offrent un mouvement de zoom, panoramique, inclinaison et roulis basique sans rien réentraîner.',
            'Limite / réserve': 'Couvre uniquement les mouvements de caméra basiques — aucun contrôle précis de trajectoire caméra par horodatage comme le proposent certains outils commerciaux.',
          },
          {
            'Avantage': 'Outillage communautaire actif',
            'Ce que cela signifie en pratique': 'ComfyUI-AnimateDiff-Evolved et l\'extension AUTOMATIC1111 sont toutes deux activement maintenues et largement documentées.',
            'Limite / réserve': 'Le dépôt de base officiel lui-même est une base de code de recherche, pas une application utilisateur finale aboutie — vous dépendez des intégrations communautaires pour un workflow utilisable.',
          },
          {
            'Avantage': 'AnimateDiff-Lightning pour la vitesse',
            'Ce que cela signifie en pratique': 'La variante distillée génère en 1-8 étapes au lieu de 20-50, réduisant substantiellement le temps de génération.',
            'Limite / réserve': 'Moins d\'étapes de diffusion échange un peu de qualité et de détail contre cette vitesse.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnimateDiff vs. alternatives',
        columns: ['Outil', 'Approche', 'Idéal pour', 'Limite clé vs. AnimateDiff'],
        rows: [
          {
            'Outil': 'AnimateDiff',
            'Approche': 'Module de mouvement greffé sur un checkpoint SD1.5/SDXL existant, aucun réentraînement',
            'Idéal pour': 'Boucles de mouvement stylisées ou de style anime réutilisant un checkpoint ou LoRA déjà possédé',
            'Limite clé vs. AnimateDiff': '—',
          },
          {
            'Outil': 'Stable Video Diffusion (SVD)',
            'Approche': 'Modèle image-vers-vidéo entraîné séparément par Stability AI, lignée différente de la ligne texte-vers-image de Stable Diffusion',
            'Idéal pour': 'Animer une image existante en un court mouvement, plutôt que générer des clips au style cohérent depuis un checkpoint',
            'Limite clé vs. AnimateDiff': 'Ne préserve pas le style visuel exact d\'un checkpoint ou LoRA spécifique comme AnimateDiff — il anime l\'image d\'entrée, pas le style appris d\'un modèle texte-vers-image.',
          },
          {
            'Outil': 'Deforum',
            'Approche': 'Technique plus ancienne d\'interpolation de keyframes et de paramètres — transformations de caméra 2D/3D appliquées entre images de diffusion successives',
            'Idéal pour': 'Animations pilotées par trajectoire caméra du type « zoom vers l\'infini » et dérives lentes de paramètres',
            'Limite clé vs. AnimateDiff': 'Aucun a priori de mouvement appris — la cohérence repose sur l\'interpolation de paramètres d\'une image à l\'autre plutôt que sur un module d\'attention temporelle entraîné, donc le mouvement du sujet (par opposition au mouvement de caméra) est bien moins naturel.',
          },
          {
            'Outil': 'Modèles vidéo cloud commerciaux (Runway, Pika, modèles de classe Sora)',
            'Approche': 'Génération vidéo propriétaire hébergée sur le cloud, par abonnement ou crédits',
            'Idéal pour': 'Vidéo plus longue, plus fidèle, plus cohérente dans le temps, et sortie photoréaliste ou cinématique',
            'Limite clé vs. AnimateDiff': 'Coût d\'abonnement continu, aucune confidentialité locale, et aucun moyen de réutiliser le style entraîné exact d\'un checkpoint open source spécifique — voir [Génération vidéo IA locale vs. cloud](/fr/power-local-llm/local-ai-video-generation-vs-cloud) pour une comparaison complète de coût et de qualité face aux modèles vidéo locaux plus récents.',
          },
        ],
        note: 'Ce tableau compare l\'approche et l\'adéquation, pas un classement noté — chaque outil résout un problème différent. Pour les modèles vidéo natifs plus récents (Wan 2.2, LTX-2, HunyuanVideo) qui rivalisent plus directement avec la vidéo cloud commerciale sur des clips plus longs, consultez la comparaison dédiée liée ci-dessus plutôt que ce guide centré sur AnimateDiff.',
      },
      license: {
        id: 'license',
        title: 'AnimateDiff est-il libre d\'usage commercial ?',
        content: [
          '**Le code AnimateDiff lui-même est publié sous licence Apache 2.0, mais le README du projet précise que la publication est destinée à un usage académique — affirmer « entièrement libre d\'usage commercial » n\'est donc pas exact sans vérification supplémentaire.** C\'est exactement le type de surenchère à éviter : Apache 2.0 permet normalement l\'usage commercial du code, mais le cadrage académique ajouté par les auteurs signifie que les lecteurs prévoyant de vendre ou de distribuer commercialement leurs sorties devraient lire directement les conditions de licence actuelles du dépôt plutôt que de se fier uniquement à l\'étiquette Apache 2.0.',
          'Une seconde couche de licence, distincte, s\'applique au checkpoint Stable Diffusion animé. Le checkpoint Stable Diffusion 1.5 d\'origine (et de nombreux fine-tunes communautaires qui en dérivent) est distribué sous licence CreativeML OpenRAIL-M, qui autorise l\'usage commercial mais comporte ses propres restrictions basées sur l\'usage (par exemple, l\'interdiction de générer certaines catégories de contenu nuisible) — distinctes de la licence propre d\'AnimateDiff et non annulées par celle-ci.',
          'En pratique : vérifiez les deux licences avant tout usage commercial — les conditions de publication d\'AnimateDiff dans son dépôt, et la licence attachée au checkpoint spécifique animé (conditions OpenRAIL-M pour le checkpoint SD1.5 d\'origine, ou toute licence spécifiée par un fine-tune communautaire particulier, car les fine-tunes peuvent porter des conditions différentes du modèle de base). Ceci n\'est pas un conseil juridique ; consultez le texte de licence actuel ou un professionnel du droit avant un déploiement commercial.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser AnimateDiff',
        items: [
          '**Lecteur qui possède déjà un checkpoint ou LoRA Stable Diffusion qu\'il apprécie.** La valeur centrale d\'AnimateDiff est de réutiliser exactement ce style visuel en mouvement, sans rien réentraîner.',
          '**Lecteur qui veut des boucles de mouvement stylisées, de style anime ou illustratives.** La technique tient le mieux sur le type de contenu où les checkpoints Stable Diffusion excellent déjà — les styles artistiques plutôt que le photoréalisme.',
          '**Lecteur à l\'aise avec ComfyUI ou AUTOMATIC1111.** L\'installation suppose une familiarité avec l\'une de ces interfaces ; il n\'existe pas d\'application AnimateDiff autonome dédiée.',
          '**Lecteur qui veut des clips courts (quelques secondes) plutôt qu\'une vidéo longue.** La fenêtre native de 16 images convient mieux aux boucles, GIFs et courts clips stylisés qu\'à une séquence narrative.',
          '**Lecteur avec un GPU grand public milieu de gamme (8 Go+ de VRAM) qui veut zéro coût récurrent.** Aucun abonnement, aucun crédit, aucun compte cloud pour la génération locale.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser AnimateDiff',
        items: [
          '**Lecteur qui a besoin de vidéo photoréaliste, longue ou avec un contrôle caméra précis.** Les modèles vidéo natifs — locaux comme Wan 2.2 ou LTX-2, ou commerciaux comme Runway ou Pika — le gèrent mieux ; voir [Génération vidéo IA locale vs. cloud](/fr/power-local-llm/local-ai-video-generation-vs-cloud).',
          '**Lecteur sans checkpoint Stable Diffusion qu\'il apprécie déjà.** Sans point de départ digne d\'être animé, l\'avantage sur un modèle vidéo natif générant directement depuis un prompt texte est faible.',
          '**Lecteur qui a besoin de droits d\'usage commercial garantis sans lire de texte de licence.** Le cadrage académique dans le README propre d\'AnimateDiff, plus la licence de checkpoint séparée, signifient que ce n\'est pas un outil « libre d\'usage commercial » sans diligence — voir la section Clarté sur la licence ci-dessus.',
          '**Lecteur sans GPU local, ou avec une carte sous environ 8 Go de VRAM.** AnimateDiff basé sur SD1.5 est viable dès 8 Go, mais les lecteurs en deçà devraient envisager la [location de GPU cloud](/fr/power-local-llm/cloud-gpu-rental-guide-2026) ou un service vidéo cloud à la place.',
          '**Lecteur qui veut une expérience d\'application en un clic.** ComfyUI et AUTOMATIC1111 supposent tous deux une certaine aisance avec les graphes de nœuds ou les réglages d\'extension — ce n\'est pas un produit grand public abouti.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'AnimateDiff ?',
            a: 'AnimateDiff est un module de mouvement open source qui ajoute une capacité d\'animation à un checkpoint Stable Diffusion 1.5 ou SDXL existant sans le réentraîner. C\'est l\'implémentation officielle de Guo et al., « AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning » (ICLR 2024 Spotlight, arXiv:2307.04725), maintenu sur github.com/guoyww/AnimateDiff sous licence de code Apache 2.0.',
          },
          {
            q: 'AnimateDiff est-il gratuit ?',
            a: 'Oui — le code est gratuit à télécharger et exécuter, et il n\'y a aucun abonnement pour la génération locale sur votre propre matériel. Le coût de génération est l\'électricité et le temps GPU que vous possédez déjà, pas des frais versés à AnimateDiff lui-même.',
          },
          {
            q: 'AnimateDiff est-il gratuit pour un usage commercial ?',
            a: 'Pas automatiquement. Le code est sous licence Apache 2.0, mais le README du projet précise que la publication est destinée à un usage académique, et le checkpoint Stable Diffusion animé porte généralement sa propre licence distincte (souvent CreativeML OpenRAIL-M pour SD1.5), qui autorise l\'usage commercial mais avec ses propres restrictions de contenu. Vérifiez les deux textes de licence avant un déploiement commercial — ceci n\'est pas un conseil juridique.',
          },
          {
            q: 'Comment installer AnimateDiff dans ComfyUI ?',
            a: 'Installez le nœud communautaire ComfyUI-AnimateDiff-Evolved ([github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) via ComfyUI Manager ou en le clonant dans votre dossier custom_nodes, puis téléchargez un checkpoint de module de mouvement (v3_sd15_mm.ckpt pour SD1.5 ou mm_sdxl_v10_beta.ckpt pour SDXL) dans le dossier de modèles de ce nœud avant de construire un workflow texte-vers-vidéo.',
          },
          {
            q: 'AnimateDiff fonctionne-t-il avec AUTOMATIC1111 ?',
            a: 'Oui, via l\'extension communautaire sd-webui-animatediff ([github.com/continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff)), installée via l\'onglet Extensions de la WebUI. Elle ajoute un panneau AnimateDiff sous l\'onglet txt2img standard.',
          },
          {
            q: 'De combien de VRAM AnimateDiff a-t-il besoin ?',
            a: 'AnimateDiff basé sur SD1.5 tourne couramment avec 8-12 Go de VRAM pour du texte-vers-vidéo basique en résolution modérée et la fenêtre native de 16 images du module. Le support SDXL demande sensiblement plus — le dépôt officiel indique que l\'inférence SDXL nécessite habituellement environ 13 Go de VRAM, selon le checkpoint et les réglages utilisés. Une résolution plus élevée, des clips plus longs, ou l\'ajout de ControlNet font grimper les besoins.',
          },
          {
            q: 'Quelle est la durée des clips AnimateDiff ?',
            a: 'La fenêtre native entraînée du module de mouvement est de 16 images — environ 2 secondes à 8 fps. Les techniques communautaires de fenêtre glissante peuvent prolonger la durée totale en traitant des fenêtres de 16 images qui se chevauchent puis en les fusionnant, mais la cohérence temporelle se dégrade généralement à chaque limite de fenêtre, et les résultats deviennent peu fiables bien au-delà d\'environ 30-60 images.',
          },
          {
            q: 'Que sont les motion LoRAs ?',
            a: 'Les motion LoRAs sont de petits fichiers de poids additionnels (environ 77 Mo), compatibles avec le module de mouvement mm_sd_v15_v2, qui orientent la génération vers l\'un des 8 mouvements de caméra basiques : zoom avant, zoom arrière, panoramique gauche, panoramique droite, inclinaison haut, inclinaison bas, roulis horaire ou antihoraire. Ils se chargent aux côtés du module de mouvement de la même façon qu\'un LoRA d\'image se charge aux côtés d\'un checkpoint.',
          },
          {
            q: 'Pourquoi ma sortie AnimateDiff scintille-t-elle ?',
            a: 'Le scintillement — surtout sur les visages et les détails fins — est une limite largement rapportée, pas une erreur de configuration. La cohérence temporelle se dégrade le plus souvent lors de mouvements rapides, de visages détaillés à basse résolution, et d\'arrière-plans chargés avec plusieurs sujets ; les modules de mouvement ultérieurs (v2, v3) et les motion LoRAs réduisent le phénomène sans l\'éliminer.',
          },
          {
            q: 'Qu\'est-ce qu\'AnimateDiff-Lightning ?',
            a: 'AnimateDiff-Lightning est une publication distincte et distillée de ByteDance (Lin & Yang, « AnimateDiff-Lightning: Cross-Model Diffusion Distillation », arXiv:2403.12706) qui utilise une distillation adversariale progressive pour générer en aussi peu que 1, 2, 4 ou 8 étapes de diffusion au lieu des 20-50 habituelles — nettement plus rapide, au prix d\'une certaine qualité et de détails.',
          },
          {
            q: 'En quoi AnimateDiff diffère-t-il de Stable Video Diffusion ?',
            a: 'AnimateDiff greffe un module de mouvement sur un checkpoint texte-vers-image Stable Diffusion existant, préservant le style visuel exact de ce checkpoint. Stable Video Diffusion (SVD) est un modèle image-vers-vidéo entraîné séparément par Stability AI, de lignée différente — il anime une image d\'entrée donnée plutôt que de réutiliser le style appris d\'un checkpoint texte-vers-image. Choisissez AnimateDiff pour conserver le look d\'un checkpoint ou LoRA spécifique ; choisissez SVD pour animer une image existante précise.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'AnimateDiff mérite sa place comme la façon la plus directe d\'animer un checkpoint Stable Diffusion déjà apprécié, sans rien réentraîner ni quitter son propre matériel. Le compromis est réel et concret : les clips sont courts par défaut (16 images, environ 2 secondes, extensibles mais avec perte de qualité sur des durées plus longues), l\'amplitude de mouvement et le suivi de prompt se dégradent quelque peu par rapport à une image fixe du même checkpoint, et la situation de licence exige deux vérifications distinctes — le cadrage académique propre du projet en plus de son code Apache 2.0, et la licence portée par le checkpoint animé — avant tout usage commercial. Pour les lecteurs qui possèdent déjà un checkpoint SD1.5 ou SDXL stylisé et veulent de courtes boucles de mouvement au style cohérent sur leur propre GPU sans coût récurrent, AnimateDiff via ComfyUI-AnimateDiff-Evolved ou l\'extension AUTOMATIC1111 est le point de départ pratique. Les lecteurs qui ont besoin de vidéo plus longue, plus cohérente ou photoréaliste devraient plutôt le comparer aux modèles vidéo natifs plus récents dans [Génération vidéo IA locale vs. cloud](/fr/power-local-llm/local-ai-video-generation-vs-cloud).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Dépôt officiel AnimateDiff](https://github.com/guoyww/AnimateDiff) — code, téléchargements de modules de mouvement, conditions de licence.',
          '[Guo et al., « AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning », ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725) — l\'article original.',
          '[Lin & Yang (ByteDance), « AnimateDiff-Lightning: Cross-Model Diffusion Distillation », arXiv:2403.12706](https://arxiv.org/abs/2403.12706) — la variante distillée à peu d\'étapes.',
          '[ComfyUI-AnimateDiff-Evolved (Kosinkadink)](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) — l\'intégration communautaire ComfyUI.',
          '[sd-webui-animatediff (continue-revolution)](https://github.com/continue-revolution/sd-webui-animatediff) — l\'extension communautaire AUTOMATIC1111.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Génération vidéo IA locale vs. cloud 2026](/fr/power-local-llm/local-ai-video-generation-vs-cloud) — modèles vidéo natifs plus récents (Wan 2.2, LTX-2, HunyuanVideo) comparés à la vidéo cloud commerciale, pour les lecteurs ayant besoin de clips plus longs ou plus cohérents qu\'AnimateDiff.',
          '[Génération d\'images IA locale vs. cloud](/fr/power-local-llm/local-ai-image-generation-vs-cloud) — le volet image fixe de la même décision local-vs-cloud ; le checkpoint choisi là-bas est ce qu\'AnimateDiff anime.',
          '[Meilleur guide d\'achat de GPU pour LLM locaux 2026](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — conseils matériels par palier de VRAM applicables à AnimateDiff autant qu\'aux modèles de langage locaux.',
          '[Guide de location de GPU cloud 2026](/fr/power-local-llm/cloud-gpu-rental-guide-2026) — pour les lecteurs sans GPU local suffisant qui veulent quand même exécuter des workflows AnimateDiff.',
          '[Répertoire de logiciels LLM locaux 2026](/fr/power-local-llm/local-llm-software-directory-2026) — le répertoire complet d\'outils IA locale, incluant la couche génération d\'images et IA visuelle à laquelle appartient AnimateDiff.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Image & Video Generation',
    heroImage: '/images/animatediff-video-generation-guide-2026-hero-ja.webp',
    title: 'AnimateDiffでStable Diffusionを動画化：2026年ガイド',
    seoTitle: 'AnimateDiff 2026：無料ローカルAI動画生成ガイド',
    intro:
      'AnimateDiff（github.com/guoyww/AnimateDiff）は、既存のStable Diffusionチェックポイントにアニメーション機能を追加するオープンソースのモーションモジュールで、ベースモデル自体の再学習は不要です。単体の動画モデルではなく、プラグイン型のコンポーネントとして機能します。すでに使用しているStable Diffusion 1.5またはSDXLのチェックポイントと組み合わせることで、モーションモジュールがフレーム間の時間的一貫性を付加し、そのモデルが静止画で生成するのと同じスタイル・キャラクター・アートディレクションを、そのまま短いアニメーションクリップとして出力します。ComfyUIまたはAUTOMATIC1111 WebUI経由で自分のGPU上で完全に無料で動作し、プロジェクトはApache 2.0ライセンスですが、商用利用を検討する前に知っておくべき注意点が1つあります（下記のライセンスの章で解説）。',
    metaDescription:
      'AnimateDiffは再学習なしでStable Diffusionチェックポイントを動画化。ComfyUI/A1111のセットアップ、VRAM要件、モーションLoRA、ライセンスの注意点まで解説。',
    twitterDescription:
      'AnimateDiff 2026年版レビュー：無料・Apache 2.0ライセンスのモーションモジュールで、任意のStable Diffusionチェックポイントをアニメーション化。セットアップ、VRAM要件、モーションLoRA、多くのガイドが省くライセンスの注意点も解説。',
    audience:
      'すでにローカルでStable Diffusionを使用しており、クラウド動画サービスの契約なしに、既存のチェックポイントやLoRAから短いスタイル調のアニメーションクリップを作りたいデジタルアーティストやホビイスト。',
    readTime: '11分で読了',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'AnimateDiffをGitHubで見る →', url: 'https://github.com/guoyww/AnimateDiff', productName: 'AnimateDiff', productCategory: 'software' },
      { label: 'RTX 4070 Ti Super 16GBの価格をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=RTX+4070+Ti+Super+16GB', productName: 'NVIDIA RTX 4070 Ti Super 16GB', productCategory: 'gpu', priceRange: '770-1179' },
    ],
    primaryTerm: 'AnimateDiff',
    targetKeywords: [
      'AnimateDiff 使い方',
      'AnimateDiff ComfyUI セットアップ',
      'AnimateDiff Stable Video Diffusion 比較',
      'AnimateDiff motion lora',
      'Stable Diffusion 動画生成 ローカル',
      'AnimateDiff VRAM 必要量',
      'AnimateDiff AUTOMATIC1111',
      'AnimateDiff ライセンス 商用利用',
    ],
    current_models_mentioned: [
      'AnimateDiff v3（v3_sd15_mm）',
      'AnimateDiff mm_sd_v15_v2',
      'AnimateDiff SDXL beta（mm_sdxl_v10_beta）',
      'AnimateDiff-Lightning',
      'Stable Diffusion 1.5',
      'Stable Diffusion XL',
    ],
    current_hardware_mentioned: ['8GB VRAM', '12GB VRAM', '16GB VRAM', 'RTX 3060 12GB', 'RTX 4070 Ti Super 16GB', 'RTX 4090 24GB'],
    leadAnswerBlock:
      '**AnimateDiffは、すでにローカルでStable Diffusionを使っており、何も再学習せずに既存のチェックポイントやLoRAをアニメーション化したい読者に適しています。** これは完全な動画モデルではなく、無料でApache 2.0ライセンスのモーションモジュールであり、コミュニティが保守するComfyUI-AnimateDiff-Evolvedノードや、AUTOMATIC1111のsd-webui-animatediff拡張機能を通じて使用し、コンシューマー向けGPUで短いクリップ（約2秒、16フレーム）を生成します。より長く、一貫性が高く、フォトリアルな動画が必要な読者は、[ローカルAI動画生成 vs. クラウド](/ja/power-local-llm/local-ai-video-generation-vs-cloud)で新しいネイティブ動画モデルと比較してください。ローカルGPUがない読者は、まず[クラウドGPUレンタル](/ja/power-local-llm/cloud-gpu-rental-guide-2026)をご覧ください。',
    quickAnswerTop: {
      en: {
        question: 'What is AnimateDiff and is it free to use?',
        answer:
          'AnimateDiff is a free, open-source motion module (Apache 2.0 code license) that adds animation to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining it. Run it through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 sd-webui-animatediff extension on your own GPU — there is no subscription, but the project README states the release is for academic use, and the checkpoint you animate carries its own license (often CreativeML OpenRAIL-M for SD1.5), so commercial use needs its own check.',
        bullets: [
          '8-12 GB VRAM typical for basic SD1.5 AnimateDiff text-to-video at moderate resolution; SDXL variants need roughly 13 GB+.',
          'Default motion module output is a 16-frame window, about 2 seconds at 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) is the most actively developed integration.',
          '8 motion LoRAs exist for basic camera moves (zoom, pan, tilt, roll), roughly 77 MB each.',
          'Code is Apache 2.0, but the official repo states the release is for academic use — verify commercial terms before monetizing output.',
        ],
        updatedDate: '2026-09',
      },
      ja: {
        question: 'AnimateDiffとは何ですか？無料で使えますか？',
        answer:
          'AnimateDiffは、既存のStable Diffusion 1.5またはSDXLチェックポイントを再学習せずにアニメーション化できる、無料のオープンソース・モーションモジュール（Apache 2.0コードライセンス）です。ComfyUI-AnimateDiff-Evolvedまたは AUTOMATIC1111のsd-webui-animatediff拡張機能を使って自分のGPUで実行します。サブスクリプションはありませんが、プロジェクトのREADMEには本リリースは学術用途向けと明記されており、アニメーション化するチェックポイント自体も独自のライセンス（SD1.5では多くの場合CreativeML OpenRAIL-M）を持つため、商用利用には別途確認が必要です。',
        bullets: [
          '基本的なSD1.5ベースのAnimateDiffテキスト動画生成（中程度の解像度）では8-12GBのVRAMが一般的。SDXL版は約13GB以上必要。',
          'モーションモジュールの標準出力は16フレームのウィンドウで、8fpsで約2秒。',
          'ComfyUI-AnimateDiff-Evolved（Kosinkadink氏が保守）が最も活発に開発されている統合。',
          '基本的なカメラワーク（ズーム、パン、チルト、ロール）用の8種のモーションLoRAがあり、各約77MB。',
          'コードはApache 2.0だが、公式リポジトリは本リリースを学術用途向けと明記——収益化前に商用条件を確認すること。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'AnimateDiffとは', anchor: 'what-is-animatediff' },
      { label: 'モーションモジュールの仕組み', anchor: 'how-it-works' },
      { label: 'セットアップ：ComfyUIとAUTOMATIC1111', anchor: 'setup' },
      { label: 'ハードウェアとVRAM要件', anchor: 'hardware-vram' },
      { label: 'モーションLoRAと制限事項', anchor: 'motion-loras-limitations' },
      { label: 'トレードオフ：メリットと制限', anchor: 'tradeoffs' },
      { label: 'AnimateDiff vs. 代替ツール', anchor: 'vs-alternatives' },
      { label: 'ライセンスの明確化', anchor: 'license' },
      { label: 'AnimateDiffを使うべき人', anchor: 'who-should-use' },
      { label: 'AnimateDiffを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AnimateDiffは、既存のStable Diffusionチェックポイントを再学習なしでアニメーション化できる、無料でApache 2.0ライセンスのモーションモジュールで、ComfyUIまたはAUTOMATIC1111経由でローカル実行する。' },
          { type: 'plain-terms', text: 'すでに使っているStable Diffusionモデルに取り付けるプラグインのようなものと考えてください——モデルはいつも通りのスタイルで描き続けますが、AnimateDiffがフレーム間の動きを加えることで、静止画の代わりに短いクリップが出力されます。' },
        ],
        items: [
          'AnimateDiff（github.com/guoyww/AnimateDiff）は、Stable Diffusion 1.5とSDXLチェックポイント向けのプラグアンドプレイ型モーションモジュールで、ベースモデルのファインチューニングは不要。',
          'ほぼ全て2つのコミュニティ統合を通じて使用される：ComfyUI-AnimateDiff-Evolved（Kosinkadink氏保守）とAUTOMATIC1111拡張のsd-webui-animatediff（continue-revolution氏保守）。',
          'SD1.5ベースのAnimateDiffは基本的なテキスト動画生成で8-12GBのVRAMで動作するのが一般的。SDXL対応（mm_sdxl_v10_beta）は公式リポジトリによると約13GB以上必要。',
          'モーションモジュールの標準出力は16フレームのクリップ（約2秒）——より長いクリップにはコミュニティのスライディングウィンドウ手法を使うが、ウィンドウの境界で多少の時間的一貫性が失われる。',
          '公式のモーションLoRAが8種類あり（ズームイン/アウト、左右パン、上下チルト、時計回り/反時計回りロール）、基本的なカメラワークを追加できる。各約77MB。',
          'AnimateDiff-Lightning（ByteDance、arXiv:2403.12706）は別系統の蒸留版で、通常の20-50ステップの代わりに1、2、4、8ステップで生成でき、速度と引き換えに多少の品質を犠牲にする。',
          'AnimateDiffのコードはApache 2.0だが、公式READMEは本リリースを学術用途向けと明記している——さらにアニメーション化するSD1.5チェックポイント自体も独自のライセンス（多くの場合CreativeML OpenRAIL-M）を持つため、両方を確認せずに「完全に商用利用無料」と主張するのは正確ではない。',
        ],
      },
      whatIsAnimateDiff: {
        id: 'what-is-animatediff',
        title: 'AnimateDiffとは何ですか？',
        content: [
          '**AnimateDiffは単体の動画生成モデルではなく、モーションモジュールです。** すでに持っているStable Diffusion 1.5またはSDXLチェックポイント（コミュニティのファインチューンやLoRAを含む）に接続し、フレーム間の時間的一貫性を付加することで、そのモデルがチェックポイント自体を再学習することなく、既存のビジュアルスタイルのまま短いアニメーションクリップを生成できるようにします。',
          'このプロジェクトは論文[Guo et al., 「AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning」, ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725)の公式実装で、GitHub上の[github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)で保守されています。',
          'これは、動画データからゼロから学習された、Wan 2.2、LTX-2、HunyuanVideoなどの新しいネイティブ動画生成モデルとは異なる系統です——その比較については[ローカルAI動画生成 vs. クラウド](/ja/power-local-llm/local-ai-video-generation-vs-cloud)を参照してください。AnimateDiff特有の価値はスタイルの保持にあります：個別に学習された動画モデルではなく、すでに持っているチェックポイントを再利用するため、出力は静止画ですでに使っている特定のキャラクター、アートスタイル、LoRAをそのまま維持します。',
          '別系統の蒸留版である[AnimateDiff-Lightning（Lin & Yang, ByteDance, 「Cross-Model Diffusion Distillation」, arXiv:2403.12706）](https://arxiv.org/abs/2403.12706)は、段階的な敵対的拡散蒸留を用いて、通常の20-50ステップではなく最短1、2、4、8ステップで生成でき、速度と引き換えに多少の品質を犠牲にします。',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'モーションモジュールはどう機能しますか？',
        content: [
          '**モーションモジュールは、チェックポイントの既存レイヤーと並んでStable DiffusionのU-Netに挿入される、別途学習された重みのセットであり、そのチェックポイント自体は変更しません。** 生成中、モーションモジュールの時間的アテンションレイヤーが、本来なら独立した静止画生成のバッチになるはずのものを、一貫性のあるフレームシーケンスへと調整します。',
          'SD1.5向けには3つのモーションモジュールが存在します：`mm_sd_v15_v2.ckpt`（約1.7GB）と、より新しい`v3_sd15_mm.ckpt`（約1.56GB）で、後者は動きの振幅を改善し、モーションLoRAとの互換性を追加しています。別のSDXL用モーションモジュール`mm_sdxl_v10_beta.ckpt`（約950MB）は、ベータブランチを通じてより大きなSDXLチェックポイント群を対象としています。',
          'モーションモジュールはチェックポイントのファインチューンではなくドロップイン型のコンポーネントであるため、すでにインストール済みの互換性のあるSD1.5チェックポイントやほとんどのSD1.5 LoRAは、その「動画版」を別途ダウンロードすることなく直接アニメーション化できます——ただしトレードオフとして、出力がどれだけ動きを表現できるかは、チェックポイントではなくモーションモジュール自体が決定します。',
        ],
      },
      setup: {
        id: 'setup',
        title: 'AnimateDiffのセットアップ方法は？',
        itemHeadings: true,
        content: [
          '**2026年時点でのAnimateDiff利用の大半は、2つのコミュニティ統合のいずれかを経由しています。ベースリポジトリは洗練されたアプリではなく研究用コードベースだからです。** ComfyUI-AnimateDiff-Evolvedはより活発に開発されている選択肢であり、AUTOMATIC1111拡張はそのWebUIをすでに標準として使っている読者をカバーします。',
        ],
        columns: ['ルート', '最適な用途', 'セットアップ手順'],
        rows: [
          {
            'ルート': 'ComfyUI-AnimateDiff-Evolved',
            '最適な用途': 'ノードベースの制御、活発な開発、モーションLoRAとコンテキストウィンドウのオプション',
            'セットアップ手順': 'ComfyUI Manager経由でインストールまたはcustom_nodesにクローン、モーションモジュールのチェックポイントをダウンロード、テキスト動画ワークフローグラフを構築/読み込み',
          },
          {
            'ルート': 'sd-webui-animatediff（AUTOMATIC1111）',
            '最適な用途': 'すでにAUTOMATIC1111 WebUIで静止画を作っており、慣れたインターフェースを使いたい読者',
            'セットアップ手順': 'WebUIのExtensionsタブ経由でインストール（またはextensions/にクローン）、モーションモジュールをダウンロード、txt2imgタブ下でAnimateDiffパネルを有効化',
          },
        ],
        numberedItems: [
          'ComfyUIをまだ持っていなければインストールし、ComfyUI Managerを開いて「AnimateDiff Evolved」を検索（リポジトリ：[Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)）——インストールして再起動する。',
          'モーションモジュールのチェックポイント（SD1.5用の`v3_sd15_mm.ckpt`、またはSDXL用の`mm_sdxl_v10_beta.ckpt`）を`ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/`フォルダにダウンロードする。',
          'ワークフローを読み込むか構築する：SD1.5またはSDXLチェックポイントローダーをAnimateDiff Loaderノードに接続し、標準のKSampler、そして単一画像保存ノードの代わりにvideo-combineまたはGIF出力ノードを追加する。',
          'フレーム数（モジュールのネイティブウィンドウは16）とフレームレートを設定し、静止画と同様にプロンプトを書いて生成をキューに入れる——解像度とフレーム数によっては、コンシューマー向けGPUで数分かかることを想定する。',
          'AUTOMATIC1111の場合は代わりに：Extensionsタブから[continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff)をインストールし、同じモーションモジュールを拡張機能のモデルフォルダにダウンロードした後、txt2imgタブ下でAnimateDiffパネルを有効化していつも通り生成する。',
        ],
        note: '正確なフォルダパスやメニュー名はComfyUIや拡張機能のバージョンによって変わります——ノードが見つからないエラーのトラブルシューティングの前に、リンク先リポジトリのREADMEで最新のインストールパスを確認してください。各リポジトリのドキュメントに基づき2026-09-02時点で確認済み。',
      },
      hardwareVram: {
        id: 'hardware-vram',
        title: 'AnimateDiffにはどれくらいのVRAMが必要ですか？',
        content: [
          '**SD1.5ベースのAnimateDiffワークフローは、中程度の解像度（モジュールのネイティブな16フレームウィンドウで約512x512）での基本的なテキスト動画生成であれば、8-12GBのVRAMで動作するのが一般的です。SDXL対応にはかなり多くが必要です。**',
          '公式リポジトリによると、SDXL推論は「通常約13GBのVRAM」を必要とし、これは使用するパーソナライズされたチェックポイントや生成設定によって異なります。SD1.5ワークフローに関するコミュニティの報告は、解像度、フレーム数、ControlNetを組み合わせるかどうかによってばらつきがあります——標準設定での短いクリップ1本であれば8-12GBの範囲の下限を、高解像度・多フレーム・video-to-videoパイプラインでの複数ControlNet併用であれば上限（あるいはそれ以上、16GB超）を想定してください。これらは単一の検証済みベンチマークではなく、実際のワークフローに大きく左右される、慎重に幅を持たせたコミュニティ報告値です。',
          '実用的な目安：8GBカードは標準設定でのSD1.5テキスト動画生成の実験には十分な出発点であり、12GBカードはControlNetを併用するSD1.5ワークフローに快適な余裕を与え、16GBカード（例：RTX 4070 Ti Super）はSDXLベースのAnimateDiffやより重いvideo-to-videoパイプラインに移行する際のより快適な最低ラインです。GPUがこれらの水準に届かない、あるいはローカルGPUを持たない読者は、[クラウドGPUレンタルガイド2026](/ja/power-local-llm/cloud-gpu-rental-guide-2026)でのレンタルと、[ローカルLLM向けベストGPU購入ガイド2026](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026)での購入を比較検討してください（同じVRAM水準のガイダンスが、他のローカル生成AIワークロードと同様にAnimateDiffにも当てはまります）。',
        ],
      },
      motionLorasLimitations: {
        id: 'motion-loras-limitations',
        title: 'モーションLoRAとは何ですか？AnimateDiffの限界は？',
        content: [
          '**モーションLoRAは、AnimateDiffを特定のカメラワーク——ズームイン、ズームアウト、左パン、右パン、上チルト、下チルト、時計回りロール、反時計回りロール——に誘導する小型（約77MB）の追加重みで、`mm_sd_v15_v2`モーションモジュールと互換性があります。** これらは画像用LoRAと同じ仕組みで動作し、モーションモジュールと並べて読み込むことで、チェックポイントのビジュアルスタイルを変えずに出力をその動きに寄せることができます。',
          'プロジェクト自体のイシュートラッカーやコミュニティのレビューから最も頻繁に挙げられる限界は、大きく3つの領域に集約されます：',
        ],
        items: [
          '**ネイティブなクリップの長さが短い。** モーションモジュールの学習済みウィンドウは16フレーム（8fpsで約2秒）です。コミュニティのスライディングウィンドウ手法（重なり合う16フレームウィンドウを処理して結果をブレンドする）は総尺を延ばしますが、各ウィンドウの境界で時間的一貫性が失われやすく、おおよそ30-60フレームを大きく超えると結果は信頼できなくなります。',
          '**特に顔や細部でのちらつき。** 時間的一貫性が最も崩れやすいのは、速い動き、低解像度での詳細な顔、複数の被写体がある複雑な背景です——これは例外的なケースではなく、既知で頻繁に議論される限界です。',
          '**限定的な動きの範囲。** 特にオリジナルのv1モーションモジュールでは、カメラや被写体の動きは劇的なアクションではなく、ゆっくりしたパンや小さな動きに傾く傾向があります。後続のモジュール（v2、v3）やモーションLoRAはこれを改善しますが、完全には解消しません。',
          '**同じチェックポイントの静止画と比べたプロンプト追従性の低下。** モーションモジュールは各フレームを隣接フレームと整合させる必要があるため、単一の静止画としては正確にレンダリングされるプロンプトでも、16フレームにわたって時間的一貫性を強制すると、正確さが低下する場合があります。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ：メリットと制限',
        columns: ['メリット', '実際の使用における意味', '制限・注意点'],
        rows: [
          {
            'メリット': '無料でApache 2.0コード',
            '実際の使用における意味': 'サブスクリプションも生成ごとの費用もなく、コードベースは検証や改変のために公開されている。',
            '制限・注意点': '公式リポジトリは学術用途向けのリリースと明記——無制限の商用権を前提とする前にライセンスの章を確認すること。',
          },
          {
            'メリット': '再学習が不要',
            '実際の使用における意味': 'すでに使っている互換性のあるSD1.5チェックポイントやLoRAを直接アニメーション化できる。',
            '制限・注意点': '出力品質とスタイルの忠実度は、そのチェックポイントの静止画としての完成度に完全に依存する。',
          },
          {
            'メリット': 'コンシューマー向けGPUで動作',
            '実際の使用における意味': 'SD1.5ワークフローは約8GBのVRAMから実用的で、クラウドアカウントは不要。',
            '制限・注意点': 'SDXL対応にはかなり多く（約13GB以上）必要で、重いControlNetやvideo-to-videoパイプラインではさらに要求が上がる。',
          },
          {
            'メリット': 'カメラ制御用のモーションLoRA',
            '実際の使用における意味': '8種類の公式LoRAが、何も再学習せずに基本的なズーム、パン、チルト、ロールの動きを提供する。',
            '制限・注意点': '基本的なカメラワークのみをカバー——一部の商用ツールが提供するような、タイムスタンプごとの精密なカメラパス制御はない。',
          },
          {
            'メリット': '活発なコミュニティツール',
            '実際の使用における意味': 'ComfyUI-AnimateDiff-EvolvedとAUTOMATIC1111拡張は、どちらも活発に保守され、広く文書化されている。',
            '制限・注意点': '公式のベースリポジトリ自体は研究用コードベースであり、洗練されたエンドユーザー向けアプリではない——実用的なワークフローはコミュニティの統合に依存している。',
          },
          {
            'メリット': '速度重視のAnimateDiff-Lightning',
            '実際の使用における意味': '蒸留版は20-50ステップの代わりに1-8ステップで生成でき、生成時間を大幅に短縮する。',
            '制限・注意点': 'ステップ数の削減は、その速度と引き換えに多少の品質と細部を犠牲にする。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnimateDiff vs. 代替ツール',
        columns: ['ツール', 'アプローチ', '最適な用途', 'AnimateDiffと比べた主な限界'],
        rows: [
          {
            'ツール': 'AnimateDiff',
            'アプローチ': '既存のSD1.5/SDXLチェックポイントにモーションモジュールを接続、再学習なし',
            '最適な用途': 'すでに持っているチェックポイントやLoRAを再利用したスタイル調・アニメ調の動きのループ',
            'AnimateDiffと比べた主な限界': '—',
          },
          {
            'ツール': 'Stable Video Diffusion（SVD）',
            'アプローチ': 'Stability AIによる個別学習の画像動画モデルで、Stable Diffusionのテキスト画像系列とは異なる系統',
            '最適な用途': 'チェックポイントからスタイルの一致するクリップを生成するのではなく、既存の1枚の画像を短い動きにアニメーション化する',
            'AnimateDiffと比べた主な限界': 'AnimateDiffのように特定のチェックポイントやLoRAの正確なビジュアルスタイルを保持しない——入力画像をアニメーション化するのであって、テキスト画像モデルの学習済みスタイルを利用するわけではない。',
          },
          {
            'ツール': 'Deforum',
            'アプローチ': 'より古いキーフレーム・パラメータ補間技術——連続する拡散フレーム間に適用される2D/3Dカメラ変換',
            '最適な用途': 'カメラパス主導の「無限ズーム」風アニメーションや、緩やかなパラメータの変化',
            'AnimateDiffと比べた主な限界': '学習済みの動きの事前知識がない——一貫性は訓練済みの時間的アテンションモジュールではなく、フレーム間のパラメータ補間に依存するため、被写体の動き（カメラの動きとは対照的に）ははるかに不自然になる。',
          },
          {
            'ツール': '商用クラウド動画モデル（Runway、Pika、Soraクラスのモデル）',
            'アプローチ': 'サブスクリプションまたはクレジット制のクラウドホスト型独自動画生成',
            '最適な用途': 'より長く、忠実度が高く、時間的に一貫性のある動画、フォトリアルまたは映画的な出力',
            'AnimateDiffと比べた主な限界': '継続的なサブスクリプション費用、ローカルでのプライバシーの欠如、そして特定のオープンソースチェックポイントの正確な学習スタイルを再利用する手段がないこと——より新しいローカル動画モデルとの完全なコストと品質の比較は[ローカルAI動画生成 vs. クラウド](/ja/power-local-llm/local-ai-video-generation-vs-cloud)を参照。',
          },
        ],
        note: 'この表はアプローチと適性を比較するものであり、点数付けのランキングではありません——各ツールは異なる課題を解決します。より長いクリップ長で商用クラウド動画とより直接的に競合する新しいネイティブ動画モデル（Wan 2.2、LTX-2、HunyuanVideo）については、このAnimateDiff中心のガイドではなく、上記でリンクした専用の比較記事を参照してください。',
      },
      license: {
        id: 'license',
        title: 'AnimateDiffは商用利用が無料ですか？',
        content: [
          '**AnimateDiffのコード自体はApache 2.0ライセンスで公開されていますが、プロジェクト自体のREADMEには本リリースは学術用途向けと明記されているため、さらなる確認なしに「完全に商用利用無料」と主張するのは正確ではありません。** これはまさに避けるべき過大な主張の典型例です：Apache 2.0は通常コードの商用利用を許可しますが、著者ら自身が加えた学術用途という枠組みがあるため、出力を販売または商用配布する予定の読者は、Apache 2.0というラベルだけに頼らず、リポジトリの最新のライセンス条項を直接読むべきです。',
          '2つ目の別のライセンス層は、アニメーション化に使うStable Diffusionチェックポイントに適用されます。オリジナルのStable Diffusion 1.5チェックポイント（およびそこから派生した多くのコミュニティファインチューン）はCreativeML OpenRAIL-Mライセンスの下で配布されており、商用利用は許可されているものの、独自の使用条件に基づく制限（例えば特定のカテゴリの有害コンテンツの生成禁止など）を伴います。これはAnimateDiff自体のライセンスとは別であり、それによって上書きされることもありません。',
          '実務上：商用利用の前に両方のライセンスを確認してください——リポジトリ内のAnimateDiffのリリース条項と、アニメーション化する特定のチェックポイントに付随するライセンス（オリジナルのSD1.5チェックポイントであればOpenRAIL-M条項、特定のコミュニティファインチューンであればそのファインチューンが指定するライセンス、ファインチューンはベースモデルと異なる条項を持つ場合があるため）。これは法的助言ではありません。商用展開の前に、最新のライセンス条文または法律の専門家に相談してください。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AnimateDiffを使うべき人',
        items: [
          '**気に入っているStable Diffusionチェックポイントまたは LoRAをすでに持っている読者。** AnimateDiffの核心的な価値は、何も再学習せずに、まさにそのビジュアルスタイルを動きの中で再現できることです。',
          '**スタイル調、アニメ調、イラスト調の動きのループを求める読者。** この技術は、Stable Diffusionチェックポイントがすでに得意とする種類のコンテンツ——フォトリアルではなくアートスタイル——で最も安定した結果を出します。',
          '**ComfyUIまたはAUTOMATIC1111に慣れている読者。** セットアップはこれらのインターフェースのいずれかに慣れていることを前提としており、専用のスタンドアロンAnimateDiffアプリは存在しません。',
          '**長編動画ではなく短いクリップ（数秒）を求める読者。** ネイティブな16フレームウィンドウは、物語的なシーケンスよりもループ、GIF、短いスタイル調クリップに向いています。',
          '**継続コストゼロを望む、ミドルレンジのコンシューマー向けGPU（8GB以上のVRAM）を持つ読者。** ローカル生成にはサブスクリプションもクレジットもクラウドアカウントも不要です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AnimateDiffを使うべきでない人',
        items: [
          '**フォトリアルで長編、または精密なカメラ制御が必要な動画を求める読者。** Wan 2.2やLTX-2などのローカルネイティブ動画モデル、あるいはRunwayやPikaなどの商用モデルの方が、これらをより上手く処理します。[ローカルAI動画生成 vs. クラウド](/ja/power-local-llm/local-ai-video-generation-vs-cloud)を参照してください。',
          '**すでに気に入っているStable Diffusionチェックポイントを持たない読者。** アニメーション化する価値のある出発点がなければ、テキストプロンプトから直接生成するネイティブ動画モデルに対する優位性はほとんどありません。',
          '**ライセンス条文を読まずに確実な商用利用権を必要とする読者。** AnimateDiff自身のREADMEにある学術用途の枠組みに加え、別途のチェックポイントライセンスがあるため、これは注意義務なしの「商用利用無料」ツールではありません——上記のライセンスの明確化の章を参照してください。',
          '**ローカルGPUを持たない、または約8GB未満のVRAMのカードしかない読者。** SD1.5ベースのAnimateDiffは8GBから実用的ですが、それを下回る読者は代わりに[クラウドGPUレンタル](/ja/power-local-llm/cloud-gpu-rental-guide-2026)やクラウド動画サービスを検討すべきです。',
          '**ワンクリックアプリ体験を求める読者。** ComfyUIとAUTOMATIC1111はどちらも、ノードグラフや拡張機能の設定にある程度慣れていることを前提としています——洗練された一般消費者向け製品ではありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'AnimateDiffとは何ですか？',
            a: 'AnimateDiffは、既存のStable Diffusion 1.5またはSDXLチェックポイントを、そのチェックポイント自体を再学習することなくアニメーション化できるオープンソースのモーションモジュールです。これはGuo et al., 「AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning」（ICLR 2024 Spotlight、arXiv:2307.04725）の公式実装で、github.com/guoyww/AnimateDiffでApache 2.0コードライセンスの下で保守されています。',
          },
          {
            q: 'AnimateDiffは無料ですか？',
            a: 'はい——コードは無料でダウンロードして実行でき、自分のハードウェアでのローカル生成にサブスクリプションは不要です。生成コストは、AnimateDiffへの料金ではなく、すでに所有している電気代とGPU時間です。',
          },
          {
            q: 'AnimateDiffは商用利用でも無料ですか？',
            a: '自動的にはそうではありません。コードはApache 2.0ライセンスですが、プロジェクト自体のREADMEには本リリースが学術用途向けであると明記されており、アニメーション化するStable Diffusionチェックポイントも通常、独自の別ライセンス（SD1.5では多くの場合CreativeML OpenRAIL-M）を持ち、商用利用は許可されているものの独自のコンテンツ制限があります。商用展開の前に両方のライセンス条文を確認してください——これは法的助言ではありません。',
          },
          {
            q: 'ComfyUIでAnimateDiffをどうインストールしますか？',
            a: 'コミュニティが保守するComfyUI-AnimateDiff-Evolvedノード（github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved）をComfyUI Manager経由でインストールするか、custom_nodesフォルダにクローンし、その後モーションモジュールのチェックポイント（SD1.5用のv3_sd15_mm.ckpt、またはSDXL用のmm_sdxl_v10_beta.ckpt）をそのノードのmodelsフォルダにダウンロードしてから、テキスト動画ワークフローを構築してください。',
          },
          {
            q: 'AnimateDiffはAUTOMATIC1111で動作しますか？',
            a: 'はい、コミュニティが保守するsd-webui-animatediff拡張機能（github.com/continue-revolution/sd-webui-animatediff）経由で、WebUIのExtensionsタブからインストールできます。標準のtxt2imgタブ下にAnimateDiffパネルが追加されます。',
          },
          {
            q: 'AnimateDiffにはどれくらいのVRAMが必要ですか？',
            a: 'SD1.5ベースのAnimateDiffは、中程度の解像度とモジュールのネイティブな16フレームウィンドウでの基本的なテキスト動画生成であれば、8-12GBのVRAMで動作するのが一般的です。SDXL対応にはかなり多くが必要です——公式リポジトリによると、SDXL推論は使用するチェックポイントや設定によって通常約13GBのVRAMを必要とします。より高い解像度、より長いクリップ、ControlNetの重ね掛けは要求をさらに引き上げます。',
          },
          {
            q: 'AnimateDiffのクリップの長さはどれくらいですか？',
            a: 'モーションモジュールのネイティブな学習済みウィンドウは16フレーム——8fpsで約2秒です。コミュニティのスライディングウィンドウ手法は、重なり合う16フレームウィンドウを処理してブレンドすることで総尺を延ばせますが、各ウィンドウの境界で時間的一貫性が失われやすく、おおよそ30-60フレームを大きく超えると結果は信頼できなくなります。',
          },
          {
            q: 'モーションLoRAとは何ですか？',
            a: 'モーションLoRAは、mm_sd_v15_v2モーションモジュールと互換性のある小型（約77MB）の追加重みファイルで、生成を8つの基本的なカメラワークのいずれかに誘導します：ズームイン、ズームアウト、左パン、右パン、上チルト、下チルト、時計回りロール、反時計回りロールです。これらは、画像LoRAがチェックポイントと並んで読み込まれるのと同じように、モーションモジュールと並んで読み込まれます。',
          },
          {
            q: 'なぜAnimateDiffの出力がちらつくのですか？',
            a: 'ちらつき——特に顔や細部での——は、設定ミスではなく広く報告されている限界です。時間的一貫性が最も崩れやすいのは、速い動き、低解像度での詳細な顔、複数の被写体がある複雑な背景です。後続のモーションモジュール（v2、v3）やモーションLoRAはこれを軽減しますが、完全には解消しません。',
          },
          {
            q: 'AnimateDiff-Lightningとは何ですか？',
            a: 'AnimateDiff-Lightningは、ByteDance（Lin & Yang, 「AnimateDiff-Lightning: Cross-Model Diffusion Distillation」, arXiv:2403.12706）による別系統の蒸留版で、段階的な敵対的拡散蒸留を用いて、通常の20-50ステップの代わりに最短1、2、4、8ステップで生成します——大幅に高速ですが、多少の品質と細部を犠牲にします。',
          },
          {
            q: 'AnimateDiffはStable Video Diffusionとどう違いますか？',
            a: 'AnimateDiffは既存のStable Diffusionテキスト画像チェックポイントにモーションモジュールを接続し、そのチェックポイントの正確なビジュアルスタイルを保持します。Stable Video Diffusion（SVD）は、Stability AIによる別系統の個別学習画像動画モデルで、テキスト画像チェックポイントの学習済みスタイルを再利用するのではなく、与えられた入力画像をアニメーション化します。特定のチェックポイントやLoRAの見た目を保ちたいならAnimateDiffを、既存の特定の1枚の画像をアニメーション化したいならSVDを選んでください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'AnimateDiffは、すでに気に入っているStable Diffusionチェックポイントを、何も再学習せず、自分のハードウェアから離れることもなくアニメーション化する最も直接的な方法として、その地位を確立しています。トレードオフは実在し具体的です：クリップはデフォルトで短く（16フレーム、約2秒、延長は可能だが長くなるほど品質が低下する）、動きの範囲とプロンプト追従性は同じチェックポイントの静止画と比べてやや低下し、商用利用の前にはライセンスの状況について2つの別々の確認——Apache 2.0コードに加えたプロジェクト自体の学術用途という枠組み、そしてアニメーション化するチェックポイントが持つライセンス——が必要です。すでにスタイル調のSD1.5またはSDXLチェックポイントを持ち、継続コストゼロで自分のGPU上で短いスタイル一致の動きのループを求める読者にとって、ComfyUI-AnimateDiff-EvolvedまたはAUTOMATIC1111拡張経由のAnimateDiffは実用的な出発点です。より長く、一貫性が高く、フォトリアルな動画が必要な読者は、代わりに[ローカルAI動画生成 vs. クラウド](/ja/power-local-llm/local-ai-video-generation-vs-cloud)で新しいネイティブ動画モデルと比較すべきです。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[AnimateDiff公式リポジトリ](https://github.com/guoyww/AnimateDiff) — コード、モーションモジュールのダウンロード、ライセンス条項。',
          '[Guo et al., 「AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning」, ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725) — 原論文。',
          '[Lin & Yang（ByteDance）, 「AnimateDiff-Lightning: Cross-Model Diffusion Distillation」, arXiv:2403.12706](https://arxiv.org/abs/2403.12706) — 少ステップ蒸留版。',
          '[ComfyUI-AnimateDiff-Evolved（Kosinkadink）](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) — コミュニティによるComfyUI統合。',
          '[sd-webui-animatediff（continue-revolution）](https://github.com/continue-revolution/sd-webui-animatediff) — コミュニティによるAUTOMATIC1111拡張機能。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルAI動画生成 vs. クラウド 2026](/ja/power-local-llm/local-ai-video-generation-vs-cloud) — AnimateDiffより長く一貫性のあるクリップが必要な読者向けに、新しいネイティブ動画モデル（Wan 2.2、LTX-2、HunyuanVideo）を商用クラウド動画と比較。',
          '[ローカルAI画像生成 vs. クラウド](/ja/power-local-llm/local-ai-image-generation-vs-cloud) — 同じローカル対クラウドの判断の静止画側の記事。そこで選んだチェックポイントがAnimateDiffでアニメーション化されるものになる。',
          '[ローカルLLM向けベストGPU購入ガイド2026](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — ローカルの言語モデルと同様にAnimateDiffにも当てはまるVRAM水準別のハードウェアガイダンス。',
          '[クラウドGPUレンタルガイド2026](/ja/power-local-llm/cloud-gpu-rental-guide-2026) — ローカルで十分なGPUを持たないがAnimateDiffのワークフローを実行したい読者向け。',
          '[ローカルLLMソフトウェアディレクトリ2026](/ja/power-local-llm/local-llm-software-directory-2026) — AnimateDiffが属する画像生成・ビジュアルAI層を含む、ローカルAIツールの完全なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Image & Video Generation',
    heroImage: '/images/animatediff-video-generation-guide-2026-hero-zh.webp',
    title: 'AnimateDiff 2026指南：让Stable Diffusion模型动起来',
    seoTitle: 'AnimateDiff 2026：免费本地AI视频生成完整指南',
    intro:
      'AnimateDiff（github.com/guoyww/AnimateDiff）是一款开源运动模块，可为现有的Stable Diffusion检查点添加动画能力，无需重新训练基础模型。它不是一个独立的视频模型，而是一个即插即用的组件：将它与您已经在使用的Stable Diffusion 1.5或SDXL检查点搭配，运动模块会注入帧间的时间一致性，让该模型原本以静态图像呈现的风格、角色或艺术方向，变成一段短暂的动画片段。它完全通过ComfyUI或AUTOMATIC1111 WebUI在您自己的GPU上运行，免费使用，项目采用Apache 2.0许可证——但在规划任何商业用途前，有一点需要注意，详见下方许可证部分。',
    metaDescription:
      'AnimateDiff无需重新训练即可让Stable Diffusion检查点生成视频。ComfyUI与A1111安装、VRAM需求、运动LoRA与许可证细节全面解析。',
    twitterDescription:
      'AnimateDiff 2026评测：免费、Apache 2.0许可的运动模块，可为任意Stable Diffusion检查点添加动画。安装、VRAM需求、运动LoRA，以及多数指南忽略的许可证细节。',
    audience:
      '已经在本地使用Stable Diffusion的数字艺术家和爱好者，希望用现有检查点和LoRA制作简短的风格化动画片段，而无需订阅云端视频服务。',
    readTime: '11分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: '在GitHub查看AnimateDiff →', url: 'https://github.com/guoyww/AnimateDiff', productName: 'AnimateDiff', productCategory: 'software' },
      { label: '在Amazon查看RTX 4070 Ti Super 16GB价格', url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB', productName: 'NVIDIA RTX 4070 Ti Super 16GB', productCategory: 'gpu', priceRange: '770-1179' },
    ],
    primaryTerm: 'AnimateDiff',
    targetKeywords: [
      'AnimateDiff 使用教程',
      'AnimateDiff ComfyUI 安装',
      'AnimateDiff 对比 Stable Video Diffusion',
      'AnimateDiff motion lora',
      '本地 Stable Diffusion 视频生成',
      'AnimateDiff VRAM 需求',
      'AnimateDiff AUTOMATIC1111',
      'AnimateDiff 许可证 商业使用',
    ],
    current_models_mentioned: [
      'AnimateDiff v3（v3_sd15_mm）',
      'AnimateDiff mm_sd_v15_v2',
      'AnimateDiff SDXL beta（mm_sdxl_v10_beta）',
      'AnimateDiff-Lightning',
      'Stable Diffusion 1.5',
      'Stable Diffusion XL',
    ],
    current_hardware_mentioned: ['8GB VRAM', '12GB VRAM', '16GB VRAM', 'RTX 3060 12GB', 'RTX 4070 Ti Super 16GB', 'RTX 4090 24GB'],
    leadAnswerBlock:
      '**AnimateDiff适合已经在本地使用Stable Diffusion、并希望在不重新训练任何东西的情况下为现有检查点或LoRA添加动画的读者。** 它是一款免费、采用Apache 2.0许可证的运动模块——而非完整的视频模型——通过社区维护的ComfyUI-AnimateDiff-Evolved节点或AUTOMATIC1111的sd-webui-animatediff扩展使用，在消费级GPU上生成短片段（约2秒、16帧）。希望获得更长、更连贯或更具照片级真实感视频的读者，应在[本地AI视频生成 vs. 云端](/zh/power-local-llm/local-ai-video-generation-vs-cloud)中与更新的原生视频模型进行比较；完全没有本地GPU的读者应先阅读[云端GPU租赁指南](/zh/power-local-llm/cloud-gpu-rental-guide-2026)。',
    quickAnswerTop: {
      en: {
        question: 'What is AnimateDiff and is it free to use?',
        answer:
          'AnimateDiff is a free, open-source motion module (Apache 2.0 code license) that adds animation to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining it. Run it through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 sd-webui-animatediff extension on your own GPU — there is no subscription, but the project README states the release is for academic use, and the checkpoint you animate carries its own license (often CreativeML OpenRAIL-M for SD1.5), so commercial use needs its own check.',
        bullets: [
          '8-12 GB VRAM typical for basic SD1.5 AnimateDiff text-to-video at moderate resolution; SDXL variants need roughly 13 GB+.',
          'Default motion module output is a 16-frame window, about 2 seconds at 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) is the most actively developed integration.',
          '8 motion LoRAs exist for basic camera moves (zoom, pan, tilt, roll), roughly 77 MB each.',
          'Code is Apache 2.0, but the official repo states the release is for academic use — verify commercial terms before monetizing output.',
        ],
        updatedDate: '2026-09',
      },
      zh: {
        question: 'AnimateDiff是什么？可以免费使用吗？',
        answer:
          'AnimateDiff是一款免费的开源运动模块（Apache 2.0代码许可证），可为现有的Stable Diffusion 1.5或SDXL检查点添加动画能力，而无需重新训练该检查点。您可以通过ComfyUI-AnimateDiff-Evolved或AUTOMATIC1111的sd-webui-animatediff扩展在自己的GPU上运行它——没有订阅费，但项目README明确说明该发布版本用于学术用途，而您所动画化的检查点也带有自己的许可证（SD1.5通常为CreativeML OpenRAIL-M），因此商业使用需要单独核实。',
        bullets: [
          '基础的SD1.5 AnimateDiff文本转视频在中等分辨率下通常需要8-12GB VRAM；SDXL版本大约需要13GB以上。',
          '运动模块默认输出为16帧窗口，8fps下约2秒。',
          'ComfyUI-AnimateDiff-Evolved（由Kosinkadink维护）是开发最活跃的集成方案。',
          '现有8种基础运动LoRA（缩放、平移、倾斜、旋转），每个约77MB。',
          '代码采用Apache 2.0许可证，但官方仓库说明该发布版本用于学术用途——在将输出变现前请核实商业条款。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'AnimateDiff是什么', anchor: 'what-is-animatediff' },
      { label: '运动模块的工作原理', anchor: 'how-it-works' },
      { label: '安装：ComfyUI与AUTOMATIC1111', anchor: 'setup' },
      { label: '硬件与VRAM需求', anchor: 'hardware-vram' },
      { label: '运动LoRA与局限性', anchor: 'motion-loras-limitations' },
      { label: '权衡：优点与局限', anchor: 'tradeoffs' },
      { label: 'AnimateDiff 对比 替代方案', anchor: 'vs-alternatives' },
      { label: '许可证解析', anchor: 'license' },
      { label: '谁适合使用AnimateDiff', anchor: 'who-should-use' },
      { label: '谁不适合使用AnimateDiff', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AnimateDiff是一款免费、采用Apache 2.0许可证的运动模块，可在不重新训练的情况下为现有Stable Diffusion检查点添加动画，通过ComfyUI或AUTOMATIC1111在本地运行。' },
          { type: 'plain-terms', text: '可以把它想象成挂载在您已使用的Stable Diffusion模型上的插件——模型仍以其惯常风格作画，但AnimateDiff增加了帧与帧之间的运动，让输出成为一段短片，而不是单张静态图像。' },
        ],
        items: [
          'AnimateDiff（github.com/guoyww/AnimateDiff）是面向Stable Diffusion 1.5和SDXL检查点的即插即用运动模块——无需微调基础模型。',
          '它几乎完全通过两种社区集成方案使用：ComfyUI-AnimateDiff-Evolved（由Kosinkadink维护）和AUTOMATIC1111的sd-webui-animatediff扩展（由continue-revolution维护）。',
          '基于SD1.5的AnimateDiff通常在8-12GB VRAM下运行基础文本转视频；根据官方仓库说明，SDXL支持（mm_sdxl_v10_beta）大约需要13GB以上。',
          '运动模块的默认输出为16帧片段，约2秒——更长的片段使用社区的滑动窗口技术，会在窗口边界处损失一定的时间一致性。',
          '官方提供8种运动LoRA（放大/缩小、左移/右移、上倾/下倾、顺时针/逆时针旋转），可添加基础镜头运动，每个约77MB。',
          'AnimateDiff-Lightning（ByteDance，arXiv:2403.12706）是一个独立的蒸馏版本，可用1、2、4或8步生成，而非常规的20-50步，以速度换取部分质量。',
          'AnimateDiff代码采用Apache 2.0许可证，但官方README说明该发布版本用于学术用途——而您所动画化的SD1.5检查点通常带有自己的许可证（常见为CreativeML OpenRAIL-M），因此在未核实二者的情况下宣称"完全免费用于商业用途"并不准确。',
        ],
      },
      whatIsAnimateDiff: {
        id: 'what-is-animatediff',
        title: 'AnimateDiff是什么？',
        content: [
          '**AnimateDiff是一款运动模块，而非独立的视频生成模型。** 它挂载在您已拥有的Stable Diffusion 1.5或SDXL检查点上——包括社区微调模型和LoRA——并添加帧间的时间一致性，使该模型能够以其现有的视觉风格生成短暂的动画片段，而无需重新训练检查点本身。',
          '该项目是论文[Guo等人，《AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning》，ICLR 2024 Spotlight，arXiv:2307.04725](https://arxiv.org/abs/2307.04725)的官方实现，维护在GitHub上的[github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)。',
          '这与Wan 2.2、LTX-2或HunyuanVideo等从零开始基于视频数据训练的更新一代原生视频模型属于不同的技术路线——相关比较请参见[本地AI视频生成 vs. 云端](/zh/power-local-llm/local-ai-video-generation-vs-cloud)。AnimateDiff的独特价值在于风格保留：由于它复用您现有的检查点而非单独训练的视频模型，输出能够保持您在静态图像中已依赖的确切角色、艺术风格或LoRA。',
          '另有一个独立的蒸馏版本——[AnimateDiff-Lightning（Lin与Yang，ByteDance，《Cross-Model Diffusion Distillation》，arXiv:2403.12706）](https://arxiv.org/abs/2403.12706)——以部分质量换取速度，通过渐进式对抗扩散蒸馏，仅需1、2、4或8个扩散步骤即可生成，而非通常的20-50步。',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '运动模块是如何工作的？',
        content: [
          '**运动模块是一组独立训练的权重，被插入到Stable Diffusion的U-Net中，与检查点现有的层并列，而不会修改该检查点本身。** 在生成过程中，运动模块的时间注意力层会将本来会是一批独立静态图像生成的结果，协调成一段连贯的帧序列。',
          'SD1.5存在三个运动模块版本：`mm_sd_v15_v2.ckpt`（约1.7GB）和更新的`v3_sd15_mm.ckpt`（约1.56GB），后者改善了运动幅度并增加了运动LoRA兼容性。另有一个独立的SDXL运动模块`mm_sdxl_v10_beta.ckpt`（约950MB），通过一个beta分支针对更大的SDXL检查点系列。',
          '由于运动模块是一个即插即用的组件，而非对您检查点的微调，任何兼容的SD1.5检查点以及您已安装的大多数SD1.5 LoRA都可以直接动画化，无需下载该模型的独立"视频"版本——代价是，输出能表达多少运动幅度，取决于运动模块本身而非您的检查点。',
        ],
      },
      setup: {
        id: 'setup',
        title: '如何安装AnimateDiff？',
        itemHeadings: true,
        content: [
          '**2026年绝大多数的AnimateDiff使用都通过两种社区集成方案之一进行，因为基础代码仓库更像是一个研究代码库，而非成熟的应用程序。** ComfyUI-AnimateDiff-Evolved是开发更活跃的选项；AUTOMATIC1111扩展则适合已经以该WebUI为标准的读者。',
        ],
        columns: ['途径', '最适合', '安装步骤'],
        rows: [
          {
            '途径': 'ComfyUI-AnimateDiff-Evolved',
            '最适合': '基于节点的精细控制、活跃的开发、运动LoRA与上下文窗口选项',
            '安装步骤': '通过ComfyUI Manager安装或克隆到custom_nodes；下载运动模块检查点；构建/加载文本转视频工作流图',
          },
          {
            '途径': 'sd-webui-animatediff（AUTOMATIC1111）',
            '最适合': '已经使用AUTOMATIC1111 WebUI生成静态图像、希望沿用熟悉界面的读者',
            '安装步骤': '通过WebUI的Extensions标签安装（或克隆到extensions/）；下载运动模块；在txt2img标签下启用AnimateDiff面板',
          },
        ],
        numberedItems: [
          '如果尚未安装ComfyUI则先安装，然后打开ComfyUI Manager，搜索"AnimateDiff Evolved"（仓库：[Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)）——安装并重启。',
          '下载一个运动模块检查点（SD1.5用`v3_sd15_mm.ckpt`，或SDXL用`mm_sdxl_v10_beta.ckpt`），放入`ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/`文件夹。',
          '加载或构建工作流：一个SD1.5或SDXL检查点加载器接入AnimateDiff Loader节点，随后是标准KSampler，以及用于替代单图保存节点的video-combine或GIF输出节点。',
          '设置帧数（16为模块的原生窗口）和帧率，像编写静态图像那样撰写提示词，然后排队生成——根据分辨率和帧数，在消费级GPU上预计需要数分钟。',
          '若改用AUTOMATIC1111：从Extensions标签安装[continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff)，将同一运动模块下载到该扩展的模型文件夹中，然后在txt2img标签下启用AnimateDiff面板并照常生成。',
        ],
        note: 'ComfyUI与扩展版本之间的具体文件夹路径和菜单标签会有变化——在排查"节点缺失"错误前，请查看所链接仓库的README以获取当前安装路径。已根据各仓库文档核实，截至2026-09-02。',
      },
      hardwareVram: {
        id: 'hardware-vram',
        title: 'AnimateDiff需要多少VRAM？',
        content: [
          '**基于SD1.5的AnimateDiff工作流在中等分辨率（约512x512，模块原生的16帧窗口）下进行基础文本转视频时，通常在8-12GB VRAM下运行；SDXL支持则需要明显更多。**',
          '官方仓库说明SDXL推理"通常需要约13GB VRAM"，具体取决于所使用的个性化检查点和生成设置。社区对SD1.5工作流的报告因分辨率、帧数以及是否叠加ControlNet而有所不同——在默认设置下生成单个短片段时，预计接近8-12GB区间的下限；而在提高分辨率、增加帧数，或在图生图管线中叠加多个ControlNet时，预计接近区间上限（甚至超出，达到16GB以上）。这些是经过谨慎表述的社区报告范围，而非单一经过验证的基准测试，因为实际VRAM占用高度取决于具体工作流。',
          '实用建议：8GB显卡是SD1.5文本转视频默认设置实验的可行起点；12GB显卡为搭配ControlNet的SD1.5工作流提供了充裕余量；16GB显卡（例如RTX 4070 Ti Super）在转向基于SDXL的AnimateDiff或更重的图生图管线时是更舒适的最低配置。GPU未达到这些档位、或没有本地GPU的读者，应在[2026年云端GPU租赁指南](/zh/power-local-llm/cloud-gpu-rental-guide-2026)中比较租用与购买——参见[2026年本地LLM最佳GPU选购指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026)（同样的VRAM档位建议适用于AnimateDiff，与其他本地生成式AI工作负载一致）。',
        ],
      },
      motionLorasLimitations: {
        id: 'motion-loras-limitations',
        title: '什么是运动LoRA？AnimateDiff有哪些局限性？',
        content: [
          '**运动LoRA是小型（约77MB）附加权重，用于引导AnimateDiff产生特定的镜头运动——放大、缩小、左移、右移、上倾、下倾、顺时针旋转或逆时针旋转——与`mm_sd_v15_v2`运动模块兼容。** 它们的工作方式与图像LoRA相同：与运动模块一并加载，使输出偏向该运动方向，而不改变检查点的视觉风格。',
          '根据项目自身的问题追踪器和社区评测，最常被提及的局限性集中在三个方面：',
        ],
        items: [
          '**原生片段时长较短。** 运动模块的训练窗口为16帧（8fps下约2秒）。社区的滑动窗口技术（处理重叠的16帧窗口并混合结果）可以延长总时长，但时间一致性通常会在每个窗口边界处下降，超过约30-60帧后结果会明显变得不可靠。',
          '**闪烁，尤其在面部和精细细节上。** 时间一致性最常在快速运动、低分辨率下的精细面部，以及包含多个主体的复杂背景中崩溃——这是一个已知且被频繁讨论的局限，而非个别边缘情况。',
          '**运动幅度有限。** 特别是在最初的v1运动模块上，镜头和主体运动倾向于缓慢的平移和微小的移动，而非戏剧性的动作；后续模块（v2、v3）和运动LoRA有所改善，但并未完全消除这一问题。',
          '**相比同一检查点的静态图像，提示词遵循度有所下降。** 由于运动模块必须让每一帧与相邻帧保持协调，单张静态图像能够精确呈现的提示词，在16帧上强制保持时间一致性后，可能呈现得不那么精确。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优点': '免费且代码采用Apache 2.0',
            '实际使用中的意义': '没有订阅费，没有单次生成费用，代码库开放供检查和修改。',
            '局限 / 注意事项': '官方仓库说明该发布版本用于学术用途——在假定拥有不受限的商业权利前，请先查看许可证部分。',
          },
          {
            '优点': '无需重新训练',
            '实际使用中的意义': '任何您已使用的兼容SD1.5检查点或LoRA都可以直接动画化。',
            '局限 / 注意事项': '输出质量和风格保真度完全取决于该检查点在静态图像方面本身的水平。',
          },
          {
            '优点': '可在消费级GPU上运行',
            '实际使用中的意义': 'SD1.5工作流从约8GB VRAM起即可实用；无需云端账户。',
            '局限 / 注意事项': 'SDXL支持需要明显更多（约13GB以上），更重的ControlNet或图生图管线会进一步推高需求。',
          },
          {
            '优点': '用于镜头控制的运动LoRA',
            '实际使用中的意义': '8种官方LoRA无需重新训练即可提供基础的缩放、平移、倾斜和旋转运动。',
            '局限 / 注意事项': '仅覆盖基础镜头运动——不像部分商用工具那样提供按时间戳精确控制的镜头路径。',
          },
          {
            '优点': '活跃的社区工具',
            '实际使用中的意义': 'ComfyUI-AnimateDiff-Evolved和AUTOMATIC1111扩展都得到积极维护，并有广泛的文档记录。',
            '局限 / 注意事项': '官方基础代码库本身是一个研究代码库，而非成熟的终端用户应用——可用的工作流依赖于社区集成方案。',
          },
          {
            '优点': '追求速度的AnimateDiff-Lightning',
            '实际使用中的意义': '蒸馏版本仅需1-8步生成，而非20-50步，大幅缩短生成时间。',
            '局限 / 注意事项': '更少的扩散步骤以部分质量和细节换取这种速度。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnimateDiff 对比 替代方案',
        columns: ['工具', '方法', '最适合', '相对AnimateDiff的主要局限'],
        rows: [
          {
            '工具': 'AnimateDiff',
            '方法': '将运动模块挂载到现有的SD1.5/SDXL检查点上，无需重新训练',
            '最适合': '复用已有检查点或LoRA的风格化或动漫风格运动循环',
            '相对AnimateDiff的主要局限': '—',
          },
          {
            '工具': 'Stable Video Diffusion（SVD）',
            '方法': '由Stability AI单独训练的图生视频模型，与Stable Diffusion的文生图路线属于不同谱系',
            '最适合': '将一张已有图像动画化为短暂运动，而非从检查点生成风格一致的片段',
            '相对AnimateDiff的主要局限': '不像AnimateDiff那样保留特定检查点或LoRA的确切视觉风格——它动画化的是输入图像，而非某个文生图模型的学习风格。',
          },
          {
            '工具': 'Deforum',
            '方法': '较早的关键帧与参数插值技术——在连续扩散帧之间应用2D/3D镜头变换',
            '最适合': '由镜头路径驱动的"无限缩放"式动画和缓慢的参数漂移',
            '相对AnimateDiff的主要局限': '没有习得的运动先验——一致性依赖于逐帧的参数插值，而非经过训练的时间注意力模块，因此主体运动（相对于镜头运动）明显更不自然。',
          },
          {
            '工具': '商用云端视频模型（Runway、Pika、Sora级模型）',
            '方法': '通过订阅或积分提供的专有云端托管视频生成',
            '最适合': '更长、保真度更高、时间上更连贯的视频，以及照片级真实感或电影感的输出',
            '相对AnimateDiff的主要局限': '持续的订阅费用、没有本地隐私保护，也无法复用特定开源检查点的确切训练风格——完整的成本与质量对比请参见[本地AI视频生成 vs. 云端](/zh/power-local-llm/local-ai-video-generation-vs-cloud)，其中对比了更新的本地视频模型。',
          },
        ],
        note: '本表比较的是方法与适用性，而非评分排名——每种工具解决的问题不同。对于在更长片段长度上与商用云端视频更直接竞争的更新一代原生视频模型（Wan 2.2、LTX-2、HunyuanVideo），请参见上方链接的专门对比文章，而非本篇以AnimateDiff为核心的指南。',
      },
      license: {
        id: 'license',
        title: 'AnimateDiff可以免费用于商业用途吗？',
        content: [
          '**AnimateDiff代码本身采用Apache 2.0许可证发布，但项目自身的README说明该发布版本用于学术用途——因此在未进一步核实的情况下，宣称"完全免费用于商业用途"并不准确。** 这正是应当避免的过度宣称类型：Apache 2.0通常允许代码的商业使用，但作者附加的学术用途表述意味着，计划出售或商业分发输出的读者应直接阅读仓库中当前的许可证条款，而不应仅依赖Apache 2.0这一标签。',
          '第二层独立的许可要求适用于您所动画化的Stable Diffusion检查点。原始的Stable Diffusion 1.5检查点（以及从中衍生的许多社区微调模型）以CreativeML OpenRAIL-M许可证分发，该许可证允许商业使用，但附带其自身基于使用方式的限制（例如禁止生成某些类别的有害内容）——这与AnimateDiff自身的许可证是分开的，也不会被后者取代。',
          '实践中：在任何商业使用前，请核实两份许可证——仓库中AnimateDiff的发布条款，以及您所动画化的具体检查点所附带的许可证（原始SD1.5检查点适用OpenRAIL-M条款，或特定社区微调模型指定的任何许可证，因为微调模型可能带有与基础模型不同的条款）。这不构成法律建议；在商业部署前，请查阅当前的许可证文本或咨询法律专业人士。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用AnimateDiff',
        items: [
          '**已经拥有喜欢的Stable Diffusion检查点或LoRA的读者。** AnimateDiff的核心价值在于，在不重新训练任何东西的情况下，将这种确切的视觉风格转化为动态。',
          '**希望获得风格化、动漫风格或插画风格运动循环的读者。** 该技术在Stable Diffusion检查点已经擅长的内容类型上表现最佳——艺术风格而非照片级真实感。',
          '**熟悉ComfyUI或AUTOMATIC1111的读者。** 安装过程假定用户熟悉其中一个界面；目前没有专门的独立AnimateDiff应用程序。',
          '**希望获得短片段（数秒）而非长篇视频的读者。** 原生16帧窗口更适合循环、GIF和短暂的风格化片段，而非叙事性序列。',
          '**拥有中端消费级GPU（8GB以上VRAM）、希望零持续成本的读者。** 本地生成无需订阅、无需积分、无需云端账户。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用AnimateDiff',
        items: [
          '**需要照片级真实感、长篇或精确镜头控制视频的读者。** 无论是Wan 2.2或LTX-2等本地原生视频模型，还是Runway或Pika等商用模型，在这方面都表现更好；参见[本地AI视频生成 vs. 云端](/zh/power-local-llm/local-ai-video-generation-vs-cloud)。',
          '**没有已经喜欢的Stable Diffusion检查点的读者。** 若没有值得动画化的起点，相比能够直接从文本提示生成的原生视频模型，优势不大。',
          '**需要在不阅读许可证文本的情况下获得有保障商业使用权的读者。** AnimateDiff自身README中的学术用途表述，加上单独的检查点许可证，意味着这并非一个无需尽职调查的"免费商用"工具——参见上方的许可证解析部分。',
          '**没有本地GPU、或显卡VRAM低于约8GB的读者。** 基于SD1.5的AnimateDiff从8GB起即可实用，但低于该档位的读者应改为考虑[云端GPU租赁](/zh/power-local-llm/cloud-gpu-rental-guide-2026)或云端视频服务。',
          '**希望获得一键式应用体验的读者。** ComfyUI和AUTOMATIC1111都假定用户对节点图或扩展设置有一定的熟悉度——这不是一款打磨精良的大众消费级产品。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'AnimateDiff是什么？',
            a: 'AnimateDiff是一款开源运动模块，可为现有的Stable Diffusion 1.5或SDXL检查点添加动画能力，而无需重新训练该检查点。它是论文Guo等人《AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning》（ICLR 2024 Spotlight，arXiv:2307.04725）的官方实现，维护在github.com/guoyww/AnimateDiff，采用Apache 2.0代码许可证。',
          },
          {
            q: 'AnimateDiff是免费的吗？',
            a: '是的——代码可免费下载和运行，在自己的硬件上进行本地生成无需订阅。生成成本只是您已经拥有的电费和GPU使用时间，而非支付给AnimateDiff本身的费用。',
          },
          {
            q: 'AnimateDiff可以免费用于商业用途吗？',
            a: '并非自动如此。代码采用Apache 2.0许可证，但项目自身的README说明该发布版本用于学术用途，而您所动画化的Stable Diffusion检查点通常带有自己独立的许可证（SD1.5常见为CreativeML OpenRAIL-M），该许可证允许商业使用，但附带自身的内容限制。在商业部署前请核实两份许可证文本——这不构成法律建议。',
          },
          {
            q: '如何在ComfyUI中安装AnimateDiff？',
            a: '通过ComfyUI Manager安装社区维护的ComfyUI-AnimateDiff-Evolved节点（github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved），或将其克隆到您的custom_nodes文件夹，然后在构建文本转视频工作流之前，将运动模块检查点（SD1.5用v3_sd15_mm.ckpt，或SDXL用mm_sdxl_v10_beta.ckpt）下载到该节点的models文件夹中。',
          },
          {
            q: 'AnimateDiff可以在AUTOMATIC1111中使用吗？',
            a: '可以，通过社区维护的sd-webui-animatediff扩展（github.com/continue-revolution/sd-webui-animatediff），从WebUI的Extensions标签安装。它会在标准的txt2img标签下添加一个AnimateDiff面板。',
          },
          {
            q: 'AnimateDiff需要多少VRAM？',
            a: '基于SD1.5的AnimateDiff在中等分辨率和模块原生的16帧窗口下进行基础文本转视频时，通常在8-12GB VRAM下运行。SDXL支持需要明显更多——官方仓库说明，根据所用检查点和设置，SDXL推理通常需要约13GB VRAM。更高的分辨率、更长的片段，或叠加ControlNet会进一步推高需求。',
          },
          {
            q: 'AnimateDiff生成的片段有多长？',
            a: '运动模块原生训练的窗口为16帧——8fps下约2秒。社区的滑动窗口技术可以通过处理重叠的16帧窗口并进行混合来延长总时长，但时间一致性通常会在每个窗口边界处下降，超过约30-60帧后结果会明显变得不可靠。',
          },
          {
            q: '什么是运动LoRA？',
            a: '运动LoRA是与mm_sd_v15_v2运动模块兼容的小型（约77MB）附加权重文件，可将生成引导至8种基础镜头运动之一：放大、缩小、左移、右移、上倾、下倾、顺时针旋转或逆时针旋转。它们与运动模块一并加载，方式与图像LoRA与检查点一并加载相同。',
          },
          {
            q: '为什么我的AnimateDiff输出会闪烁？',
            a: '闪烁——尤其是在面部和精细细节上——是一个被广泛报告的局限，而非配置错误。时间一致性最常在快速运动、低分辨率下的精细面部，以及包含多个主体的复杂背景中崩溃；后续的运动模块（v2、v3）和运动LoRA可以减轻但无法完全消除这一问题。',
          },
          {
            q: '什么是AnimateDiff-Lightning？',
            a: 'AnimateDiff-Lightning是ByteDance发布的一个独立蒸馏版本（Lin与Yang，《AnimateDiff-Lightning: Cross-Model Diffusion Distillation》，arXiv:2403.12706），通过渐进式对抗扩散蒸馏，仅需1、2、4或8个扩散步骤即可生成，而非通常的20-50步——速度大幅提升，但会牺牲一定的质量和细节。',
          },
          {
            q: 'AnimateDiff与Stable Video Diffusion有什么区别？',
            a: 'AnimateDiff将运动模块挂载到现有的Stable Diffusion文生图检查点上，保留该检查点的确切视觉风格。Stable Video Diffusion（SVD）是Stability AI单独训练的图生视频模型，谱系不同——它动画化的是给定的输入图像，而非复用某个文生图检查点的学习风格。若想保留特定检查点或LoRA的外观，请选择AnimateDiff；若想动画化一张具体的现有图像，请选择SVD。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'AnimateDiff凭借在不重新训练任何东西、也无需离开自有硬件的情况下动画化您已喜欢的Stable Diffusion检查点这一点，确立了其作为最直接方法的地位。这种权衡是真实且具体的：片段默认较短（16帧，约2秒，可延长但时长越长质量损失越大），运动幅度和提示词遵循度相比同一检查点的静态图像有所下降，而在任何商业使用之前，许可证情况都需要两项独立核实——项目自身在Apache 2.0代码之上附加的学术用途表述，以及您所动画化的检查点所带有的许可证。对于已经拥有风格化SD1.5或SDXL检查点、希望在自己的GPU上以零持续成本获得简短、风格一致的运动循环的读者，通过ComfyUI-AnimateDiff-Evolved或AUTOMATIC1111扩展使用AnimateDiff是实用的起点。需要更长、更连贯或照片级真实感视频的读者，则应改为在[本地AI视频生成 vs. 云端](/zh/power-local-llm/local-ai-video-generation-vs-cloud)中与更新的原生视频模型进行比较。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[AnimateDiff官方仓库](https://github.com/guoyww/AnimateDiff) — 代码、运动模块下载、许可证条款。',
          '[Guo等人，《AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning》，ICLR 2024 Spotlight，arXiv:2307.04725](https://arxiv.org/abs/2307.04725) — 原始论文。',
          '[Lin与Yang（ByteDance），《AnimateDiff-Lightning: Cross-Model Diffusion Distillation》，arXiv:2403.12706](https://arxiv.org/abs/2403.12706) — 少步数蒸馏版本。',
          '[ComfyUI-AnimateDiff-Evolved（Kosinkadink）](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) — 社区ComfyUI集成方案。',
          '[sd-webui-animatediff（continue-revolution）](https://github.com/continue-revolution/sd-webui-animatediff) — 社区AUTOMATIC1111扩展。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[2026年本地AI视频生成 vs. 云端](/zh/power-local-llm/local-ai-video-generation-vs-cloud) — 面向需要比AnimateDiff更长或更连贯片段的读者，将更新的原生视频模型（Wan 2.2、LTX-2、HunyuanVideo）与商用云端视频进行对比。',
          '[本地AI图像生成 vs. 云端](/zh/power-local-llm/local-ai-image-generation-vs-cloud) — 同一本地对比云端决策的静态图像一侧；您在那里选择的检查点，正是AnimateDiff将要动画化的对象。',
          '[2026年本地LLM最佳GPU选购指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 按VRAM档位划分的硬件建议，同样适用于AnimateDiff和本地语言模型。',
          '[2026年云端GPU租赁指南](/zh/power-local-llm/cloud-gpu-rental-guide-2026) — 面向没有足够本地GPU、但仍希望运行AnimateDiff工作流的读者。',
          '[2026年本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory-2026) — 完整的本地AI工具目录，涵盖AnimateDiff所属的图像生成与视觉AI层级。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Image & Video Generation',
    heroImage: '/images/animatediff-video-generation-guide-2026-hero-es.webp',
    title: 'AnimateDiff 2026: anima cualquier modelo Stable Diffusion',
    seoTitle: 'AnimateDiff 2026: video IA local gratis desde modelos SD',
    intro:
      'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) es un módulo de movimiento de código abierto que añade capacidad de animación a checkpoints de Stable Diffusion existentes sin reentrenar el modelo base. En lugar de un modelo de video independiente, es un componente conectable: lo combinas con un checkpoint de Stable Diffusion 1.5 o SDXL que ya usas, y el módulo de movimiento inyecta coherencia temporal (de fotograma a fotograma) para que el mismo estilo, personaje o dirección artística que ese modelo ya produce como imagen fija salga como un breve clip animado. Funciona enteramente en tu propia GPU a través de ComfyUI o la WebUI de AUTOMATIC1111, sin costo, y el proyecto tiene licencia Apache 2.0 — con una salvedad que conviene conocer antes de planear cualquier uso comercial, cubierta en la sección de licencia más abajo.',
    metaDescription:
      'AnimateDiff convierte checkpoints de Stable Diffusion en video sin reentrenar. Instalación en ComfyUI y A1111, VRAM necesaria, motion LoRAs y la letra pequeña de la licencia.',
    twitterDescription:
      'AnimateDiff 2026: módulo de movimiento gratuito con licencia Apache 2.0 que anima cualquier checkpoint de Stable Diffusion. Instalación, VRAM, motion LoRAs y el matiz de licencia que muchas guías omiten.',
    audience:
      'Artistas digitales y aficionados que ya usan Stable Diffusion en local y quieren crear breves clips animados y estilizados a partir de sus checkpoints y LoRA existentes, sin una suscripción de video en la nube.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Ver AnimateDiff en GitHub →', url: 'https://github.com/guoyww/AnimateDiff', productName: 'AnimateDiff', productCategory: 'software' },
      { label: 'Ver precio de la RTX 4070 Ti Super 16GB en Amazon', url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB', productName: 'NVIDIA RTX 4070 Ti Super 16GB', productCategory: 'gpu', priceRange: '770-1179' },
    ],
    primaryTerm: 'AnimateDiff',
    targetKeywords: [
      'animatediff guía',
      'animatediff comfyui instalación',
      'animatediff vs stable video diffusion',
      'animatediff motion lora',
      'generación de video stable diffusion local',
      'animatediff requisitos vram',
      'animatediff automatic1111',
      'animatediff licencia uso comercial',
    ],
    current_models_mentioned: [
      'AnimateDiff v3 (v3_sd15_mm)',
      'AnimateDiff mm_sd_v15_v2',
      'AnimateDiff SDXL beta (mm_sdxl_v10_beta)',
      'AnimateDiff-Lightning',
      'Stable Diffusion 1.5',
      'Stable Diffusion XL',
    ],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', 'RTX 3060 12GB', 'RTX 4070 Ti Super 16GB', 'RTX 4090 24GB'],
    leadAnswerBlock:
      '**AnimateDiff es la opción para lectores que ya usan Stable Diffusion en local y quieren animar un checkpoint o LoRA existente sin reentrenar nada.** Es un módulo de movimiento gratuito con licencia Apache 2.0 — no un modelo de video completo —, usado a través del nodo comunitario ComfyUI-AnimateDiff-Evolved o la extensión sd-webui-animatediff de AUTOMATIC1111, generando clips cortos (unos 2 segundos, 16 fotogramas) en GPU de consumo. Los lectores que quieran video más largo, coherente o fotorrealista deberían compararlo con modelos de video nativos más nuevos en [Generación de video IA local vs. la nube](/es/power-local-llm/local-ai-video-generation-vs-cloud); quienes no tengan GPU local deberían leer primero [Alquiler de GPU en la nube](/es/power-local-llm/cloud-gpu-rental-guide-2026).',
    quickAnswerTop: {
      en: {
        question: 'What is AnimateDiff and is it free to use?',
        answer:
          'AnimateDiff is a free, open-source motion module (Apache 2.0 code license) that adds animation to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining it. Run it through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 sd-webui-animatediff extension on your own GPU — there is no subscription, but the project README states the release is for academic use, and the checkpoint you animate carries its own license (often CreativeML OpenRAIL-M for SD1.5), so commercial use needs its own check.',
        bullets: [
          '8-12 GB VRAM typical for basic SD1.5 AnimateDiff text-to-video at moderate resolution; SDXL variants need roughly 13 GB+.',
          'Default motion module output is a 16-frame window, about 2 seconds at 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) is the most actively developed integration.',
          '8 motion LoRAs exist for basic camera moves (zoom, pan, tilt, roll), roughly 77 MB each.',
          'Code is Apache 2.0, but the official repo states the release is for academic use — verify commercial terms before monetizing output.',
        ],
        updatedDate: '2026-09',
      },
      es: {
        question: '¿Qué es AnimateDiff y es gratis usarlo?',
        answer:
          'AnimateDiff es un módulo de movimiento de código abierto y gratuito (licencia de código Apache 2.0) que añade animación a un checkpoint existente de Stable Diffusion 1.5 o SDXL sin reentrenarlo. Se usa a través de ComfyUI-AnimateDiff-Evolved o la extensión sd-webui-animatediff de AUTOMATIC1111 en tu propia GPU — no hay suscripción, pero el README del proyecto indica que la publicación es para uso académico, y el checkpoint que animas tiene su propia licencia (a menudo CreativeML OpenRAIL-M para SD1.5), por lo que el uso comercial requiere una verificación aparte.',
        bullets: [
          '8-12 GB de VRAM típicos para texto a video básico con AnimateDiff SD1.5 en resolución moderada; las variantes SDXL necesitan aproximadamente 13 GB o más.',
          'La salida por defecto del módulo de movimiento es una ventana de 16 fotogramas, unos 2 segundos a 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (mantenido por Kosinkadink) es la integración más activamente desarrollada.',
          'Existen 8 motion LoRAs para movimientos básicos de cámara (zoom, paneo, inclinación, giro), unos 77 MB cada uno.',
          'El código es Apache 2.0, pero el repositorio oficial indica que la publicación es para uso académico — verifica los términos comerciales antes de monetizar la salida.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es AnimateDiff', anchor: 'what-is-animatediff' },
      { label: 'Cómo funciona el módulo de movimiento', anchor: 'how-it-works' },
      { label: 'Instalación: ComfyUI y AUTOMATIC1111', anchor: 'setup' },
      { label: 'Hardware y requisitos de VRAM', anchor: 'hardware-vram' },
      { label: 'Motion LoRAs y limitaciones', anchor: 'motion-loras-limitations' },
      { label: 'Compensaciones: ventajas vs. limitaciones', anchor: 'tradeoffs' },
      { label: 'AnimateDiff vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Claridad sobre la licencia', anchor: 'license' },
      { label: 'Quién debería usar AnimateDiff', anchor: 'who-should-use' },
      { label: 'Quién no debería usar AnimateDiff', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AnimateDiff es un módulo de movimiento gratuito con licencia Apache 2.0 que anima un checkpoint de Stable Diffusion existente sin reentrenarlo, ejecutado en local a través de ComfyUI o AUTOMATIC1111.' },
          { type: 'plain-terms', text: 'Piénsalo como un complemento que conectas a un modelo de Stable Diffusion que ya usas — el modelo sigue dibujando en su estilo habitual, pero AnimateDiff añade el movimiento de un fotograma a otro para que la salida sea un clip corto en vez de una imagen fija.' },
        ],
        items: [
          'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) es un módulo de movimiento plug-and-play para checkpoints de Stable Diffusion 1.5 y SDXL — no requiere ajuste fino del modelo base.',
          'Se usa casi exclusivamente a través de dos integraciones comunitarias: ComfyUI-AnimateDiff-Evolved (mantenido por Kosinkadink) y la extensión de AUTOMATIC1111 sd-webui-animatediff (mantenida por continue-revolution).',
          'AnimateDiff basado en SD1.5 suele funcionar con 8-12 GB de VRAM para texto a video básico; el soporte de SDXL (mm_sdxl_v10_beta) necesita aproximadamente 13 GB o más según el repositorio oficial.',
          'La salida por defecto del módulo de movimiento es un clip de 16 fotogramas, unos 2 segundos — los clips más largos usan una técnica comunitaria de ventana deslizante que sacrifica algo de coherencia temporal en los límites de cada ventana.',
          'Existen 8 motion LoRAs oficiales (zoom in/out, paneo izquierda/derecha, inclinación arriba/abajo, giro horario/antihorario) que añaden movimiento básico de cámara, unos 77 MB cada uno.',
          'AnimateDiff-Lightning (ByteDance, arXiv:2403.12706) es una variante destilada separada que genera en 1, 2, 4 u 8 pasos en vez de los 20-50 habituales, cambiando algo de calidad por velocidad.',
          'El código de AnimateDiff es Apache 2.0, pero el README oficial indica que la publicación es para uso académico — y el checkpoint SD1.5 que animas suele tener su propia licencia (a menudo CreativeML OpenRAIL-M), por lo que decir "totalmente libre para uso comercial" sin verificar ambas no es exacto.',
        ],
      },
      whatIsAnimateDiff: {
        id: 'what-is-animatediff',
        title: '¿Qué es AnimateDiff?',
        content: [
          '**AnimateDiff es un módulo de movimiento, no un modelo de generación de video independiente.** Se conecta a un checkpoint de Stable Diffusion 1.5 o SDXL que ya tienes — incluyendo ajustes finos comunitarios y LoRA — y añade coherencia temporal (de fotograma a fotograma) para que ese modelo produzca breves clips animados en su estilo visual existente, sin reentrenar el checkpoint en sí.',
          'El proyecto es la implementación oficial del artículo [Guo et al., «AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning», ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725), mantenido en GitHub en [github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff).',
          'Es un linaje distinto al de los modelos de video nativos más recientes como Wan 2.2, LTX-2 o HunyuanVideo, entrenados desde cero con datos de video — consulta [Generación de video IA local vs. la nube](/es/power-local-llm/local-ai-video-generation-vs-cloud) para esa comparación. El valor específico de AnimateDiff es la preservación del estilo: como reutiliza tu checkpoint existente en lugar de un modelo de video entrenado por separado, la salida mantiene exactamente el personaje, estilo artístico o LoRA en el que ya confías para imágenes fijas.',
          'Una publicación separada y destilada — [AnimateDiff-Lightning (Lin y Yang, ByteDance, «Cross-Model Diffusion Distillation», arXiv:2403.12706)](https://arxiv.org/abs/2403.12706) — cambia algo de calidad por velocidad, generando en tan solo 1, 2, 4 u 8 pasos de difusión en lugar de los 20-50 habituales, mediante destilación de difusión adversarial progresiva.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '¿Cómo funciona el módulo de movimiento?',
        content: [
          '**El módulo de movimiento es un conjunto separado de pesos entrenados que se inserta en la U-Net de Stable Diffusion junto a las capas existentes del checkpoint, sin modificar ese checkpoint.** Durante la generación, las capas de atención temporal del módulo de movimiento coordinan lo que de otro modo sería un lote de generaciones de imágenes fijas independientes en una secuencia coherente de fotogramas.',
          'Existen tres versiones del módulo de movimiento para SD1.5: `mm_sd_v15_v2.ckpt` (unos 1,7 GB) y el más reciente `v3_sd15_mm.ckpt` (unos 1,56 GB), que mejora la amplitud del movimiento y añade compatibilidad con motion LoRAs. Un módulo de movimiento SDXL separado, `mm_sdxl_v10_beta.ckpt` (unos 950 MB), apunta a la familia más grande de checkpoints SDXL a través de una rama beta.',
          'Como el módulo de movimiento es un componente conectable en lugar de un ajuste fino de tu checkpoint, cualquier checkpoint SD1.5 compatible y la mayoría de los LoRA SD1.5 que ya tengas instalados pueden animarse directamente, sin descargar una versión «de video» separada de ese modelo — la contrapartida es que el módulo de movimiento en sí, no tu checkpoint, decide cuánto movimiento puede expresar la salida.',
        ],
      },
      setup: {
        id: 'setup',
        title: '¿Cómo se instala AnimateDiff?',
        itemHeadings: true,
        content: [
          '**La mayor parte del uso de AnimateDiff en 2026 pasa por una de dos integraciones comunitarias, ya que el repositorio base es más una base de código de investigación que una app pulida.** ComfyUI-AnimateDiff-Evolved es la opción con desarrollo más activo; la extensión de AUTOMATIC1111 cubre a los lectores ya estandarizados en esa WebUI.',
        ],
        columns: ['Vía', 'Ideal para', 'Pasos de instalación'],
        rows: [
          {
            'Vía': 'ComfyUI-AnimateDiff-Evolved',
            'Ideal para': 'Control basado en nodos, desarrollo activo, opciones de motion LoRA y ventana de contexto',
            'Pasos de instalación': 'Instalar vía ComfyUI Manager o clonar en custom_nodes; descargar un checkpoint de módulo de movimiento; construir/cargar un grafo de workflow texto a video',
          },
          {
            'Vía': 'sd-webui-animatediff (AUTOMATIC1111)',
            'Ideal para': 'Lectores que ya usan AUTOMATIC1111 WebUI para imágenes fijas y quieren una interfaz familiar',
            'Pasos de instalación': 'Instalar vía la pestaña Extensions de la WebUI (o clonar en extensions/); descargar un módulo de movimiento; activar el panel AnimateDiff bajo una pestaña txt2img',
          },
        ],
        numberedItems: [
          'Instala ComfyUI si aún no lo tienes, luego abre ComfyUI Manager y busca «AnimateDiff Evolved» (repositorio: [Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) — instala y reinicia.',
          'Descarga un checkpoint de módulo de movimiento (`v3_sd15_mm.ckpt` para SD1.5, o `mm_sdxl_v10_beta.ckpt` para SDXL) en la carpeta `ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/`.',
          'Carga o construye un workflow: un cargador de checkpoint SD1.5 o SDXL que alimenta un nodo AnimateDiff Loader, luego un KSampler estándar y un nodo video-combine o de salida GIF en lugar de un nodo de guardado de imagen única.',
          'Configura el número de fotogramas (16 es la ventana nativa del módulo) y la velocidad de fotogramas, escribe tu prompt como lo harías para una imagen fija, y encola la generación — espera varios minutos en una GPU de consumo según la resolución y el número de fotogramas.',
          'Para AUTOMATIC1111 en su lugar: instala [continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff) desde la pestaña Extensions, descarga el mismo módulo de movimiento en la carpeta de modelos de la extensión, luego activa el panel AnimateDiff bajo la pestaña txt2img y genera como de costumbre.',
        ],
        note: 'Las rutas exactas de carpetas y las etiquetas de menú cambian entre versiones de ComfyUI y de la extensión — revisa el README del repositorio enlazado para la ruta de instalación actual antes de solucionar un error de nodo faltante. Verificado contra la documentación de los repositorios, 2026-09-02.',
      },
      hardwareVram: {
        id: 'hardware-vram',
        title: '¿Cuánta VRAM necesita AnimateDiff?',
        content: [
          '**Los workflows de AnimateDiff basados en SD1.5 suelen funcionar con 8-12 GB de VRAM para texto a video básico en resolución moderada (aproximadamente 512x512, la ventana nativa de 16 fotogramas del módulo); el soporte de SDXL necesita bastante más.**',
          'El repositorio oficial indica que la inferencia SDXL «normalmente requiere ~13 GB de VRAM», dependiendo del checkpoint personalizado y la configuración de generación usada. Los reportes de la comunidad para workflows SD1.5 varían según la resolución, el número de fotogramas y si se añade ControlNet — espera el extremo inferior del rango 8-12 GB para un clip corto con la configuración por defecto, y el extremo superior (o más, hacia 16 GB+) al añadir mayor resolución, más fotogramas, o múltiples ControlNets en un pipeline de video a video. Son rangos comunitarios reportados con cautela, no un único benchmark verificado, ya que el uso real de VRAM depende mucho del workflow específico.',
          'Guía práctica: una tarjeta de 8 GB es un punto de partida viable para experimentar con texto a video SD1.5 en configuración por defecto; una tarjeta de 12 GB da margen cómodo para workflows SD1.5 con ControlNet; una tarjeta de 16 GB (por ejemplo, una RTX 4070 Ti Super) es el mínimo más cómodo al pasar a AnimateDiff basado en SDXL o pipelines de video a video más pesados. Los lectores cuya GPU quede por debajo de estos niveles, o que no tengan GPU local, deberían comparar alquilar — ver [Guía de alquiler de GPU en la nube 2026](/es/power-local-llm/cloud-gpu-rental-guide-2026) — frente a comprar, en la [Mejor guía de compra de GPU para LLM locales 2026](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) (la misma orientación por nivel de VRAM aplica a AnimateDiff igual que a otras cargas de trabajo de IA generativa local).',
        ],
      },
      motionLorasLimitations: {
        id: 'motion-loras-limitations',
        title: '¿Qué son los motion LoRAs y cuáles son las limitaciones de AnimateDiff?',
        content: [
          '**Los motion LoRAs son pesos adicionales pequeños (unos 77 MB) que orientan a AnimateDiff hacia un movimiento de cámara específico — zoom in, zoom out, paneo izquierda, paneo derecha, inclinación arriba, inclinación abajo, giro horario o antihorario — compatibles con el módulo de movimiento `mm_sd_v15_v2`.** Funcionan igual que los LoRA de imagen: se carga uno junto al módulo de movimiento para sesgar la salida hacia ese movimiento, sin cambiar el estilo visual del checkpoint.',
          'Las limitaciones más citadas, extraídas del propio registro de incidencias del proyecto y de reseñas de la comunidad, se agrupan en tres áreas:',
        ],
        items: [
          '**Duración nativa de clip corta.** La ventana entrenada del módulo de movimiento es de 16 fotogramas (unos 2 segundos a 8 fps). Las técnicas comunitarias de ventana deslizante (procesar ventanas superpuestas de 16 fotogramas y mezclar los resultados) extienden la duración total, pero la coherencia temporal suele degradarse en cada límite de ventana, y los resultados se vuelven poco fiables bastante más allá de unos 30-60 fotogramas.',
          '**Parpadeo, especialmente en rostros y detalles finos.** La coherencia temporal se rompe con más frecuencia en movimientos rápidos, rostros detallados en resolución más baja, y fondos ocupados con varios sujetos — una limitación conocida y frecuentemente comentada, no un caso extremo.',
          '**Rango de movimiento limitado.** Especialmente en el módulo de movimiento v1 original, el movimiento de cámara y sujeto tiende hacia paneos lentos y movimientos pequeños en lugar de acción dramática; los módulos posteriores (v2, v3) y los motion LoRAs mejoran esto sin eliminarlo por completo.',
          '**Degradación del seguimiento del prompt frente a una imagen fija del mismo checkpoint.** Como el módulo de movimiento debe conciliar cada fotograma con sus vecinos, prompts que se renderizan con precisión como una sola imagen fija pueden renderizarse con menos precisión una vez que se impone coherencia temporal en 16 fotogramas.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compensaciones: ventajas vs. limitaciones',
        columns: ['Ventaja', 'Qué significa en uso real', 'Limitación / matiz'],
        rows: [
          {
            'Ventaja': 'Gratuito y código Apache 2.0',
            'Qué significa en uso real': 'Sin suscripción, sin costo por generación, y la base de código está abierta para inspección y modificación.',
            'Limitación / matiz': 'El repositorio oficial indica una publicación para uso académico — revisa la sección de licencia antes de asumir derechos comerciales sin restricciones.',
          },
          {
            'Ventaja': 'No requiere reentrenamiento',
            'Qué significa en uso real': 'Cualquier checkpoint SD1.5 compatible o LoRA que ya uses puede animarse directamente.',
            'Limitación / matiz': 'La calidad de salida y la fidelidad de estilo dependen por completo de qué tan bueno sea ya ese checkpoint en imágenes fijas.',
          },
          {
            'Ventaja': 'Funciona en GPU de consumo',
            'Qué significa en uso real': 'Los workflows SD1.5 son viables desde unos 8 GB de VRAM; no se necesita cuenta en la nube.',
            'Limitación / matiz': 'El soporte SDXL necesita bastante más (~13 GB+), y los pipelines de ControlNet o video a video más pesados elevan aún más los requisitos.',
          },
          {
            'Ventaja': 'Motion LoRAs para control de cámara',
            'Qué significa en uso real': '8 LoRAs oficiales dan movimiento básico de zoom, paneo, inclinación y giro sin reentrenar nada.',
            'Limitación / matiz': 'Cubre solo movimientos básicos de cámara — sin control preciso de trayectoria de cámara por marca de tiempo como ofrecen algunas herramientas comerciales.',
          },
          {
            'Ventaja': 'Herramientas comunitarias activas',
            'Qué significa en uso real': 'ComfyUI-AnimateDiff-Evolved y la extensión de AUTOMATIC1111 están ambas activamente mantenidas y ampliamente documentadas.',
            'Limitación / matiz': 'El propio repositorio base oficial es una base de código de investigación, no una app pulida para usuario final — dependes de integraciones comunitarias para un workflow usable.',
          },
          {
            'Ventaja': 'AnimateDiff-Lightning para velocidad',
            'Qué significa en uso real': 'La variante destilada genera en 1-8 pasos en vez de 20-50, reduciendo sustancialmente el tiempo de generación.',
            'Limitación / matiz': 'Menos pasos de difusión sacrifican algo de calidad y detalle por esa velocidad.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnimateDiff vs. alternativas',
        columns: ['Herramienta', 'Enfoque', 'Ideal para', 'Limitación clave frente a AnimateDiff'],
        rows: [
          {
            'Herramienta': 'AnimateDiff',
            'Enfoque': 'Módulo de movimiento conectado a un checkpoint SD1.5/SDXL existente, sin reentrenamiento',
            'Ideal para': 'Bucles de movimiento estilizados o de estilo anime que reutilizan un checkpoint o LoRA ya existente',
            'Limitación clave frente a AnimateDiff': '—',
          },
          {
            'Herramienta': 'Stable Video Diffusion (SVD)',
            'Enfoque': 'Modelo imagen a video entrenado por separado por Stability AI, linaje distinto al de la línea texto a imagen de Stable Diffusion',
            'Ideal para': 'Animar una imagen existente en un movimiento corto, en lugar de generar clips con estilo consistente desde un checkpoint',
            'Limitación clave frente a AnimateDiff': 'No preserva el estilo visual exacto de un checkpoint o LoRA específico como lo hace AnimateDiff — anima la imagen de entrada, no el estilo aprendido de un modelo texto a imagen.',
          },
          {
            'Herramienta': 'Deforum',
            'Enfoque': 'Técnica más antigua de interpolación de keyframes y parámetros — transformaciones de cámara 2D/3D aplicadas entre fotogramas de difusión sucesivos',
            'Ideal para': 'Animaciones impulsadas por trayectoria de cámara tipo «zoom al infinito» y derivas lentas de parámetros',
            'Limitación clave frente a AnimateDiff': 'Sin un prior de movimiento aprendido — la coherencia depende de la interpolación de parámetros de un fotograma a otro en lugar de un módulo de atención temporal entrenado, por lo que el movimiento del sujeto (a diferencia del movimiento de cámara) resulta mucho menos natural.',
          },
          {
            'Herramienta': 'Modelos de video comerciales en la nube (Runway, Pika, modelos de clase Sora)',
            'Enfoque': 'Generación de video propietaria alojada en la nube mediante suscripción o créditos',
            'Ideal para': 'Video más largo, de mayor fidelidad, más coherente en el tiempo, y salida fotorrealista o cinematográfica',
            'Limitación clave frente a AnimateDiff': 'Costo de suscripción continuo, sin privacidad local, y sin forma de reutilizar el estilo entrenado exacto de un checkpoint específico de código abierto — consulta [Generación de video IA local vs. la nube](/es/power-local-llm/local-ai-video-generation-vs-cloud) para una comparación completa de costo y calidad frente a modelos de video locales más nuevos.',
          },
        ],
        note: 'Esta tabla compara enfoque y adecuación, no un ranking puntuado — cada herramienta resuelve un problema distinto. Para modelos de video nativos más nuevos (Wan 2.2, LTX-2, HunyuanVideo) que compiten más directamente con el video comercial en la nube en clips más largos, consulta la comparación dedicada enlazada arriba en lugar de esta guía centrada en AnimateDiff.',
      },
      license: {
        id: 'license',
        title: '¿Es AnimateDiff libre de usar comercialmente?',
        content: [
          '**El código de AnimateDiff en sí se publica bajo licencia Apache 2.0, pero el propio README del proyecto indica que la publicación es para uso académico — por lo que afirmar «totalmente libre para uso comercial» no es exacto sin verificarlo.** Esto es exactamente el tipo de afirmación exagerada que hay que evitar: Apache 2.0 normalmente permite el uso comercial del código, pero el marco académico añadido por los autores significa que los lectores que planeen vender o distribuir comercialmente la salida deberían leer directamente los términos de licencia actuales del repositorio en lugar de confiar solo en la etiqueta Apache 2.0.',
          'Una segunda capa de licencia, separada, se aplica al checkpoint de Stable Diffusion que animes. El checkpoint original de Stable Diffusion 1.5 (y muchos ajustes finos comunitarios derivados de él) se distribuye bajo la licencia CreativeML OpenRAIL-M, que permite el uso comercial pero conlleva sus propias restricciones basadas en el uso (por ejemplo, prohibiciones de generar ciertas categorías de contenido dañino) — separadas de la licencia propia de AnimateDiff y no anuladas por ella.',
          'En la práctica: verifica ambas licencias antes de cualquier uso comercial — los términos de publicación de AnimateDiff en su repositorio, y la licencia adjunta al checkpoint específico que animes (términos OpenRAIL-M para el checkpoint SD1.5 original, o la licencia que especifique un ajuste fino comunitario concreto, ya que los ajustes finos pueden tener términos distintos al modelo base). Esto no es asesoría legal; consulta el texto de licencia vigente o a un profesional del derecho antes de un despliegue comercial.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar AnimateDiff',
        items: [
          '**Lector que ya tiene un checkpoint o LoRA de Stable Diffusion que le gusta.** El valor central de AnimateDiff es reutilizar exactamente ese estilo visual en movimiento, sin reentrenar nada.',
          '**Lector que quiere bucles de movimiento estilizados, de estilo anime o ilustrativos.** La técnica funciona mejor en el tipo de contenido en el que los checkpoints de Stable Diffusion ya destacan — estilos artísticos en lugar de fotorrealismo.',
          '**Lector cómodo con ComfyUI o AUTOMATIC1111.** La instalación asume familiaridad con una de esas interfaces; no existe una app AnimateDiff independiente dedicada.',
          '**Lector que quiere clips cortos (unos segundos) en lugar de video largo.** La ventana nativa de 16 fotogramas se ajusta mejor a bucles, GIFs y clips estilizados cortos que a una secuencia narrativa.',
          '**Lector con una GPU de consumo de gama media (8 GB+ de VRAM) que quiere costo recurrente cero.** Sin suscripción, sin créditos, sin cuenta en la nube para la generación local.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar AnimateDiff',
        items: [
          '**Lector que necesita video fotorrealista, de formato largo, o con control de cámara preciso.** Los modelos de video nativos — locales como Wan 2.2 o LTX-2, o comerciales como Runway o Pika — manejan esto mejor; ver [Generación de video IA local vs. la nube](/es/power-local-llm/local-ai-video-generation-vs-cloud).',
          '**Lector sin un checkpoint de Stable Diffusion que ya le guste.** Sin un punto de partida que valga la pena animar, hay poca ventaja frente a un modelo de video nativo que genera directamente desde un prompt de texto.',
          '**Lector que necesita derechos de uso comercial garantizados sin leer texto legal.** El marco de uso académico en el propio README de AnimateDiff, más la licencia separada del checkpoint, significan que esto no es una herramienta «libre para uso comercial» sin diligencia previa — ver la sección Claridad sobre la licencia arriba.',
          '**Lector sin GPU local, o con una tarjeta por debajo de unos 8 GB de VRAM.** AnimateDiff basado en SD1.5 es viable desde 8 GB, pero los lectores por debajo de ese nivel deberían considerar [Alquiler de GPU en la nube](/es/power-local-llm/cloud-gpu-rental-guide-2026) o un servicio de video en la nube en su lugar.',
          '**Lector que quiere una experiencia de app de un solo clic.** Tanto ComfyUI como AUTOMATIC1111 asumen cierta comodidad con grafos de nodos o configuraciones de extensión — no es un producto de consumo pulido.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es AnimateDiff?',
            a: 'AnimateDiff es un módulo de movimiento de código abierto que añade capacidad de animación a un checkpoint existente de Stable Diffusion 1.5 o SDXL sin reentrenar ese checkpoint. Es la implementación oficial de Guo et al., «AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning» (ICLR 2024 Spotlight, arXiv:2307.04725), mantenido en github.com/guoyww/AnimateDiff bajo licencia de código Apache 2.0.',
          },
          {
            q: '¿Es gratis AnimateDiff?',
            a: 'Sí — el código es gratuito para descargar y ejecutar, y no hay suscripción para la generación local en tu propio hardware. El costo de generación es la electricidad y el tiempo de GPU que ya posees, no una tarifa hacia AnimateDiff en sí.',
          },
          {
            q: '¿Es AnimateDiff gratis para uso comercial?',
            a: 'No automáticamente. El código tiene licencia Apache 2.0, pero el propio README del proyecto indica que la publicación es para uso académico, y el checkpoint de Stable Diffusion que animas típicamente tiene su propia licencia separada (comúnmente CreativeML OpenRAIL-M para SD1.5), que permite el uso comercial pero con sus propias restricciones de contenido. Verifica ambos textos de licencia antes de un despliegue comercial — esto no es asesoría legal.',
          },
          {
            q: '¿Cómo instalo AnimateDiff en ComfyUI?',
            a: 'Instala el nodo comunitario ComfyUI-AnimateDiff-Evolved ([github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) vía ComfyUI Manager o clonándolo en tu carpeta custom_nodes, luego descarga un checkpoint de módulo de movimiento (v3_sd15_mm.ckpt para SD1.5 o mm_sdxl_v10_beta.ckpt para SDXL) en la carpeta de modelos de ese nodo antes de construir un workflow texto a video.',
          },
          {
            q: '¿Funciona AnimateDiff con AUTOMATIC1111?',
            a: 'Sí, mediante la extensión comunitaria sd-webui-animatediff ([github.com/continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff)), instalada a través de la pestaña Extensions de la WebUI. Añade un panel AnimateDiff bajo la pestaña txt2img estándar.',
          },
          {
            q: '¿Cuánta VRAM necesita AnimateDiff?',
            a: 'AnimateDiff basado en SD1.5 suele funcionar con 8-12 GB de VRAM para texto a video básico en resolución moderada y la ventana nativa de 16 fotogramas del módulo. El soporte de SDXL necesita bastante más — el repositorio oficial indica que la inferencia SDXL normalmente requiere unos 13 GB de VRAM, dependiendo del checkpoint y la configuración usados. Mayor resolución, clips más largos, o añadir ControlNet elevan más los requisitos.',
          },
          {
            q: '¿Cuánto duran los clips de AnimateDiff?',
            a: 'La ventana nativa entrenada del módulo de movimiento es de 16 fotogramas — unos 2 segundos a 8 fps. Las técnicas comunitarias de ventana deslizante pueden extender la duración total procesando ventanas superpuestas de 16 fotogramas y mezclándolas, pero la coherencia temporal suele degradarse en cada límite de ventana, y los resultados se vuelven poco fiables bastante más allá de unos 30-60 fotogramas.',
          },
          {
            q: '¿Qué son los motion LoRAs?',
            a: 'Los motion LoRAs son archivos de pesos adicionales pequeños (unos 77 MB), compatibles con el módulo de movimiento mm_sd_v15_v2, que sesgan la generación hacia uno de 8 movimientos básicos de cámara: zoom in, zoom out, paneo izquierda, paneo derecha, inclinación arriba, inclinación abajo, giro horario o antihorario. Se cargan junto al módulo de movimiento de la misma forma en que un LoRA de imagen se carga junto a un checkpoint.',
          },
          {
            q: '¿Por qué parpadea mi salida de AnimateDiff?',
            a: 'El parpadeo — especialmente en rostros y detalles finos — es una limitación ampliamente reportada, no un error de configuración. La coherencia temporal se rompe con más frecuencia en movimientos rápidos, rostros detallados en resolución más baja, y fondos ocupados con varios sujetos; los módulos de movimiento posteriores (v2, v3) y los motion LoRAs reducen esto pero no lo eliminan.',
          },
          {
            q: '¿Qué es AnimateDiff-Lightning?',
            a: 'AnimateDiff-Lightning es una publicación separada y destilada de ByteDance (Lin y Yang, «AnimateDiff-Lightning: Cross-Model Diffusion Distillation», arXiv:2403.12706) que usa destilación de difusión adversarial progresiva para generar en tan solo 1, 2, 4 u 8 pasos de difusión en vez de los 20-50 habituales — sustancialmente más rápido, con cierto costo en calidad y detalle.',
          },
          {
            q: '¿En qué se diferencia AnimateDiff de Stable Video Diffusion?',
            a: 'AnimateDiff conecta un módulo de movimiento a un checkpoint texto a imagen existente de Stable Diffusion, preservando el estilo visual exacto de ese checkpoint. Stable Video Diffusion (SVD) es un modelo imagen a video entrenado por separado por Stability AI, de linaje distinto — anima una imagen de entrada dada en lugar de reutilizar el estilo aprendido de un checkpoint texto a imagen. Elige AnimateDiff para mantener el aspecto de un checkpoint o LoRA específico; elige SVD para animar una imagen existente concreta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'AnimateDiff se gana su lugar como la forma más directa de animar un checkpoint de Stable Diffusion que ya te gusta, sin reentrenar nada ni salir de tu propio hardware. La contrapartida es real y concreta: los clips son cortos por defecto (16 fotogramas, unos 2 segundos, ampliables pero con pérdida de calidad en duraciones mayores), el rango de movimiento y el seguimiento del prompt se degradan algo frente a una imagen fija del mismo checkpoint, y el panorama de licencias requiere dos verificaciones separadas — el marco de uso académico propio del proyecto además de su código Apache 2.0, y la licencia que lleve el checkpoint que animes — antes de cualquier uso comercial. Para lectores que ya tienen un checkpoint SD1.5 o SDXL estilizado y quieren bucles de movimiento cortos y consistentes en estilo en su propia GPU sin costo recurrente, AnimateDiff a través de ComfyUI-AnimateDiff-Evolved o la extensión de AUTOMATIC1111 es el punto de partida práctico. Los lectores que necesiten video más largo, coherente o fotorrealista deberían compararlo en su lugar con modelos de video nativos más nuevos en [Generación de video IA local vs. la nube](/es/power-local-llm/local-ai-video-generation-vs-cloud).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Repositorio oficial de AnimateDiff](https://github.com/guoyww/AnimateDiff) — código, descargas de módulos de movimiento, términos de licencia.',
          '[Guo et al., «AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning», ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725) — el artículo original.',
          '[Lin y Yang (ByteDance), «AnimateDiff-Lightning: Cross-Model Diffusion Distillation», arXiv:2403.12706](https://arxiv.org/abs/2403.12706) — la variante destilada de pocos pasos.',
          '[ComfyUI-AnimateDiff-Evolved (Kosinkadink)](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) — la integración comunitaria de ComfyUI.',
          '[sd-webui-animatediff (continue-revolution)](https://github.com/continue-revolution/sd-webui-animatediff) — la extensión comunitaria de AUTOMATIC1111.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Generación de video IA local vs. la nube 2026](/es/power-local-llm/local-ai-video-generation-vs-cloud) — modelos de video nativos más nuevos (Wan 2.2, LTX-2, HunyuanVideo) comparados con el video comercial en la nube, para lectores que necesiten clips más largos o coherentes que los de AnimateDiff.',
          '[Generación de imágenes IA local vs. la nube](/es/power-local-llm/local-ai-image-generation-vs-cloud) — el lado de imagen fija de la misma decisión local vs. nube; el checkpoint que elijas ahí es lo que AnimateDiff anima.',
          '[Mejor guía de compra de GPU para LLM locales 2026](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — orientación de hardware por nivel de VRAM aplicable a AnimateDiff tanto como a los modelos de lenguaje locales.',
          '[Guía de alquiler de GPU en la nube 2026](/es/power-local-llm/cloud-gpu-rental-guide-2026) — para lectores sin una GPU local suficiente que aun así quieran ejecutar workflows de AnimateDiff.',
          '[Directorio de software LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — el directorio completo de herramientas de IA local, incluyendo la capa de generación de imágenes e IA visual a la que pertenece AnimateDiff.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Image & Video Generation',
    heroImage: '/images/animatediff-video-generation-guide-2026-hero-pt.webp',
    title: 'AnimateDiff 2026: anime qualquer modelo Stable Diffusion',
    seoTitle: 'AnimateDiff 2026: vídeo IA local grátis a partir do SD',
    intro:
      'O AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) é um módulo de movimento de código aberto que adiciona capacidade de animação a checkpoints existentes do Stable Diffusion, sem retreinar o modelo base. Em vez de um modelo de vídeo independente, é um componente plugável: você o combina com um checkpoint do Stable Diffusion 1.5 ou SDXL que já usa, e o módulo de movimento injeta coerência temporal (quadro a quadro) para que o mesmo estilo, personagem ou direção artística que aquele modelo já produz em imagem estática saia como um clipe animado curto. Ele roda inteiramente na sua própria GPU via ComfyUI ou na WebUI do AUTOMATIC1111, sem custo, e o projeto tem licença Apache 2.0 — com uma ressalva importante antes de qualquer uso comercial, detalhada na seção de licença abaixo.',
    metaDescription:
      'O AnimateDiff transforma checkpoints do Stable Diffusion em vídeo sem retreinar. Instalação no ComfyUI e A1111, VRAM necessária, motion LoRAs e detalhes da licença.',
    twitterDescription:
      'AnimateDiff 2026: módulo de movimento gratuito com licença Apache 2.0 que anima qualquer checkpoint do Stable Diffusion. Instalação, VRAM, motion LoRAs e a ressalva de licença que a maioria dos guias ignora.',
    audience:
      'Artistas digitais e entusiastas que já usam o Stable Diffusion localmente e querem criar clipes animados curtos e estilizados a partir de seus checkpoints e LoRAs existentes, sem assinatura de vídeo em nuvem.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Ver AnimateDiff no GitHub →', url: 'https://github.com/guoyww/AnimateDiff', productName: 'AnimateDiff', productCategory: 'software' },
      { label: 'Ver preço da RTX 4070 Ti Super 16GB na Amazon', url: 'https://www.amazon.com.br/s?k=RTX+4070+Ti+Super+16GB', productName: 'NVIDIA RTX 4070 Ti Super 16GB', productCategory: 'gpu', priceRange: '770-1179' },
    ],
    primaryTerm: 'AnimateDiff',
    targetKeywords: [
      'animatediff guia',
      'animatediff comfyui instalação',
      'animatediff vs stable video diffusion',
      'animatediff motion lora',
      'geração de vídeo stable diffusion local',
      'animatediff requisitos vram',
      'animatediff automatic1111',
      'animatediff licença uso comercial',
    ],
    current_models_mentioned: [
      'AnimateDiff v3 (v3_sd15_mm)',
      'AnimateDiff mm_sd_v15_v2',
      'AnimateDiff SDXL beta (mm_sdxl_v10_beta)',
      'AnimateDiff-Lightning',
      'Stable Diffusion 1.5',
      'Stable Diffusion XL',
    ],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', 'RTX 3060 12GB', 'RTX 4070 Ti Super 16GB', 'RTX 4090 24GB'],
    leadAnswerBlock:
      '**O AnimateDiff é a escolha certa para leitores que já usam o Stable Diffusion localmente e querem animar um checkpoint ou LoRA existente sem retreinar nada.** É um módulo de movimento gratuito, com licença Apache 2.0 — não um modelo de vídeo completo —, usado através do nó mantido pela comunidade ComfyUI-AnimateDiff-Evolved ou da extensão sd-webui-animatediff do AUTOMATIC1111, gerando clipes curtos (cerca de 2 segundos, 16 quadros) em GPUs domésticas. Leitores que querem vídeos mais longos, mais coerentes ou fotorrealistas devem compará-lo com modelos de vídeo nativos mais recentes em [Geração de vídeo IA local vs. nuvem](/pt/power-local-llm/local-ai-video-generation-vs-cloud); quem não tem GPU local deve ler primeiro [Aluguel de GPU em nuvem](/pt/power-local-llm/cloud-gpu-rental-guide-2026).',
    quickAnswerTop: {
      en: {
        question: 'What is AnimateDiff and is it free to use?',
        answer:
          'AnimateDiff is a free, open-source motion module (Apache 2.0 code license) that adds animation to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining it. Run it through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 sd-webui-animatediff extension on your own GPU — there is no subscription, but the project README states the release is for academic use, and the checkpoint you animate carries its own license (often CreativeML OpenRAIL-M for SD1.5), so commercial use needs its own check.',
        bullets: [
          '8-12 GB VRAM typical for basic SD1.5 AnimateDiff text-to-video at moderate resolution; SDXL variants need roughly 13 GB+.',
          'Default motion module output is a 16-frame window, about 2 seconds at 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) is the most actively developed integration.',
          '8 motion LoRAs exist for basic camera moves (zoom, pan, tilt, roll), roughly 77 MB each.',
          'Code is Apache 2.0, but the official repo states the release is for academic use — verify commercial terms before monetizing output.',
        ],
        updatedDate: '2026-09',
      },
      pt: {
        question: 'O que é o AnimateDiff e ele é gratuito?',
        answer:
          'O AnimateDiff é um módulo de movimento gratuito e de código aberto (licença de código Apache 2.0) que adiciona animação a um checkpoint existente do Stable Diffusion 1.5 ou SDXL sem retreiná-lo. Use-o pelo ComfyUI-AnimateDiff-Evolved ou pela extensão sd-webui-animatediff do AUTOMATIC1111 na sua própria GPU — não há assinatura, mas o README do projeto informa que o lançamento é para uso acadêmico, e o checkpoint animado carrega sua própria licença (frequentemente CreativeML OpenRAIL-M para SD1.5), então o uso comercial exige verificação própria.',
        bullets: [
          '8-12 GB de VRAM típicos para texto-em-vídeo básico com AnimateDiff SD1.5 em resolução moderada; variantes SDXL precisam de cerca de 13 GB ou mais.',
          'A saída padrão do módulo de movimento é uma janela de 16 quadros, cerca de 2 segundos a 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (mantido por Kosinkadink) é a integração mais ativamente desenvolvida.',
          'Existem 8 motion LoRAs para movimentos básicos de câmera (zoom, panorâmica, inclinação, rotação), cerca de 77 MB cada.',
          'O código é Apache 2.0, mas o repositório oficial informa que o lançamento é para uso acadêmico — verifique os termos comerciais antes de monetizar a saída.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o AnimateDiff', anchor: 'what-is-animatediff' },
      { label: 'Como funciona o módulo de movimento', anchor: 'how-it-works' },
      { label: 'Instalação: ComfyUI e AUTOMATIC1111', anchor: 'setup' },
      { label: 'Hardware e requisitos de VRAM', anchor: 'hardware-vram' },
      { label: 'Motion LoRAs e limitações', anchor: 'motion-loras-limitations' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'AnimateDiff vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Clareza sobre a licença', anchor: 'license' },
      { label: 'Quem deveria usar o AnimateDiff', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o AnimateDiff', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'O AnimateDiff é um módulo de movimento gratuito, com licença Apache 2.0, que anima um checkpoint existente do Stable Diffusion sem retreiná-lo, executado localmente via ComfyUI ou AUTOMATIC1111.' },
          { type: 'plain-terms', text: 'Pense nele como um plugin que você conecta a um modelo do Stable Diffusion que já usa — o modelo continua desenhando no seu estilo habitual, mas o AnimateDiff adiciona o movimento entre os quadros, gerando um clipe curto em vez de uma imagem estática.' },
        ],
        items: [
          'O AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) é um módulo de movimento plug-and-play para checkpoints do Stable Diffusion 1.5 e SDXL — não exige fine-tuning do modelo base.',
          'É usado quase exclusivamente por meio de duas integrações mantidas pela comunidade: ComfyUI-AnimateDiff-Evolved (mantido por Kosinkadink) e a extensão sd-webui-animatediff do AUTOMATIC1111 (mantida por continue-revolution).',
          'O AnimateDiff baseado em SD1.5 costuma rodar com 8-12 GB de VRAM para texto-em-vídeo básico; o suporte a SDXL (mm_sdxl_v10_beta) precisa de cerca de 13 GB ou mais, segundo o repositório oficial.',
          'A saída padrão do módulo de movimento é um clipe de 16 quadros, cerca de 2 segundos — clipes mais longos usam uma técnica comunitária de janela deslizante, que custa um pouco de coerência temporal nas bordas das janelas.',
          'Existem 8 motion LoRAs oficiais (zoom in/out, panorâmica esquerda/direita, inclinação para cima/baixo, rotação horária/anti-horária) que adicionam movimento básico de câmera, cerca de 77 MB cada.',
          'O AnimateDiff-Lightning (ByteDance, arXiv:2403.12706) é uma variante destilada separada que gera em 1, 2, 4 ou 8 passos em vez dos 20-50 habituais, trocando velocidade por um pouco de qualidade.',
          'O código do AnimateDiff é Apache 2.0, mas o README oficial informa que o lançamento é para uso acadêmico — e o checkpoint SD1.5 animado geralmente carrega sua própria licença (frequentemente CreativeML OpenRAIL-M), então afirmar "totalmente livre para uso comercial" sem verificar as duas não é uma afirmação precisa.',
        ],
      },
      whatIsAnimateDiff: {
        id: 'what-is-animatediff',
        title: 'O que é o AnimateDiff?',
        content: [
          '**O AnimateDiff é um módulo de movimento, não um modelo de geração de vídeo independente.** Ele se conecta a um checkpoint do Stable Diffusion 1.5 ou SDXL que você já possui — incluindo fine-tunes e LoRAs da comunidade — e adiciona coerência temporal (quadro a quadro) para que esse modelo produza clipes animados curtos no seu estilo visual existente, sem retreinar o checkpoint em si.',
          'O projeto é a implementação oficial do artigo [Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning", ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725), mantido no GitHub em [github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff).',
          'Trata-se de uma linhagem diferente dos modelos de vídeo nativos mais recentes, como Wan 2.2, LTX-2 ou HunyuanVideo, treinados do zero em dados de vídeo — veja [Geração de vídeo IA local vs. nuvem](/pt/power-local-llm/local-ai-video-generation-vs-cloud) para essa comparação. O valor específico do AnimateDiff é a preservação de estilo: como ele reutiliza seu checkpoint existente em vez de um modelo de vídeo treinado separadamente, a saída mantém exatamente o personagem, o estilo artístico ou o LoRA em que você já confia para imagens estáticas.',
          'Um lançamento separado e destilado — o [AnimateDiff-Lightning (Lin e Yang, ByteDance, "Cross-Model Diffusion Distillation", arXiv:2403.12706)](https://arxiv.org/abs/2403.12706) — troca um pouco de qualidade por velocidade, gerando em apenas 1, 2, 4 ou 8 passos de difusão em vez dos 20-50 habituais, usando destilação de difusão adversarial progressiva.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Como funciona o módulo de movimento?',
        content: [
          '**O módulo de movimento é um conjunto separado de pesos treinados inserido na U-Net do Stable Diffusion ao lado das camadas existentes do checkpoint, sem modificar esse checkpoint.** Durante a geração, as camadas de atenção temporal do módulo de movimento coordenam o que de outra forma seria um lote de gerações independentes de imagens estáticas em uma sequência coerente de quadros.',
          'Existem três versões do módulo de movimento para SD1.5: `mm_sd_v15_v2.ckpt` (cerca de 1,7 GB) e a mais recente `v3_sd15_mm.ckpt` (cerca de 1,56 GB), que melhora a amplitude de movimento e adiciona compatibilidade com motion LoRAs. Um módulo de movimento SDXL separado, `mm_sdxl_v10_beta.ckpt` (cerca de 950 MB), tem como alvo a família maior de checkpoints SDXL por meio de um branch beta.',
          'Como o módulo de movimento é um componente plugável, não um fine-tune do seu checkpoint, qualquer checkpoint SD1.5 compatível e a maioria dos LoRAs SD1.5 já instalados podem ser animados diretamente, sem baixar uma versão "de vídeo" separada desse modelo — a contrapartida é que o próprio módulo de movimento, não o seu checkpoint, determina quanto movimento a saída pode expressar.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'Como instalar o AnimateDiff?',
        itemHeadings: true,
        content: [
          '**A maior parte do uso do AnimateDiff em 2026 passa por uma de duas integrações da comunidade, já que o repositório base é mais uma base de código de pesquisa do que um app polido.** O ComfyUI-AnimateDiff-Evolved é a opção mais ativamente desenvolvida; a extensão do AUTOMATIC1111 atende leitores já padronizados nessa WebUI.',
        ],
        columns: ['Caminho', 'Ideal para', 'Passos de instalação'],
        rows: [
          {
            'Caminho': 'ComfyUI-AnimateDiff-Evolved',
            'Ideal para': 'Controle baseado em nós, desenvolvimento ativo, opções de motion LoRA e janela de contexto',
            'Passos de instalação': 'Instalar via ComfyUI Manager ou clonar em custom_nodes; baixar um checkpoint de módulo de movimento; construir/carregar um grafo de workflow texto-em-vídeo',
          },
          {
            'Caminho': 'sd-webui-animatediff (AUTOMATIC1111)',
            'Ideal para': 'Leitores que já usam o AUTOMATIC1111 WebUI para imagens estáticas e querem uma interface familiar',
            'Passos de instalação': 'Instalar via aba Extensions da WebUI (ou clonar em extensions/); baixar um módulo de movimento; ativar o painel AnimateDiff em uma aba txt2img',
          },
        ],
        numberedItems: [
          'Instale o ComfyUI se ainda não tiver, depois abra o ComfyUI Manager e procure por "AnimateDiff Evolved" (repositório: [Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) — instale e reinicie.',
          'Baixe um checkpoint de módulo de movimento (`v3_sd15_mm.ckpt` para SD1.5, ou `mm_sdxl_v10_beta.ckpt` para SDXL) na pasta `ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/`.',
          'Carregue ou construa um workflow: um carregador de checkpoint SD1.5 ou SDXL alimentando um nó AnimateDiff Loader, depois um KSampler padrão e um nó video-combine ou de saída GIF no lugar de um nó de salvamento de imagem única.',
          'Defina o número de quadros (16 é a janela nativa do módulo) e a taxa de quadros, escreva seu prompt como faria para uma imagem estática, e coloque a geração na fila — espere vários minutos em uma GPU doméstica, dependendo da resolução e do número de quadros.',
          'Para o AUTOMATIC1111 em vez disso: instale o [continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff) pela aba Extensions, baixe o mesmo módulo de movimento na pasta de modelos da extensão, depois ative o painel AnimateDiff sob a aba txt2img e gere normalmente.',
        ],
        note: 'Os caminhos exatos de pastas e os rótulos de menu mudam entre versões do ComfyUI e da extensão — verifique o README do repositório vinculado para o caminho de instalação atual antes de solucionar um erro de nó ausente. Verificado com base na documentação dos repositórios, em 02/09/2026.',
      },
      hardwareVram: {
        id: 'hardware-vram',
        title: 'Quanta VRAM o AnimateDiff precisa?',
        content: [
          '**Workflows do AnimateDiff baseados em SD1.5 costumam rodar com 8-12 GB de VRAM para texto-em-vídeo básico em resolução moderada (cerca de 512x512, a janela nativa de 16 quadros do módulo); o suporte a SDXL precisa de bem mais.**',
          'O repositório oficial informa que a inferência SDXL "normalmente requer ~13 GB de VRAM", dependendo do checkpoint personalizado e das configurações de geração usadas. Relatos da comunidade para workflows SD1.5 variam conforme a resolução, o número de quadros e se há ControlNet envolvido — espere a ponta inferior da faixa de 8-12 GB para um clipe curto com configurações padrão, e a ponta superior (ou além, rumo a 16 GB+) ao adicionar resolução maior, mais quadros, ou múltiplos ControlNets em um pipeline vídeo-para-vídeo. Essas são faixas relatadas com cautela pela comunidade, não um único benchmark verificado, já que o uso real de VRAM depende muito do workflow específico.',
          'Orientação prática: uma placa de 8 GB é um ponto de partida viável para experimentação com texto-em-vídeo SD1.5 em configurações padrão; uma placa de 12 GB oferece folga confortável para workflows SD1.5 com ControlNet; uma placa de 16 GB (por exemplo, uma RTX 4070 Ti Super) é o mínimo mais confortável ao migrar para o AnimateDiff baseado em SDXL ou pipelines vídeo-para-vídeo mais pesados. Leitores cuja GPU fique abaixo desses níveis, ou que não tenham GPU local, devem comparar alugar — veja o [Guia de aluguel de GPU em nuvem 2026](/pt/power-local-llm/cloud-gpu-rental-guide-2026) — com comprar, no [Melhor guia de compra de GPU para LLMs locais 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) (a mesma orientação por nível de VRAM se aplica ao AnimateDiff tanto quanto a outras cargas de trabalho locais de IA generativa).',
        ],
      },
      motionLorasLimitations: {
        id: 'motion-loras-limitations',
        title: 'O que são motion LoRAs e quais são as limitações do AnimateDiff?',
        content: [
          '**Motion LoRAs são pesos adicionais pequenos (cerca de 77 MB) que direcionam o AnimateDiff para um movimento de câmera específico — zoom in, zoom out, panorâmica esquerda, panorâmica direita, inclinação para cima, inclinação para baixo, rotação horária ou anti-horária — compatíveis com o módulo de movimento `mm_sd_v15_v2`.** Eles funcionam da mesma forma que LoRAs de imagem: você carrega um junto com o módulo de movimento para inclinar a saída em direção àquele movimento, sem mudar o estilo visual do checkpoint.',
          'As limitações mais citadas, extraídas do próprio rastreador de issues do projeto e de análises da comunidade, se agrupam em três áreas:',
        ],
        items: [
          '**Duração nativa de clipe curta.** A janela treinada do módulo de movimento é de 16 quadros (cerca de 2 segundos a 8 fps). Técnicas comunitárias de janela deslizante (processando janelas sobrepostas de 16 quadros e mesclando os resultados) estendem a duração total, mas a coerência temporal costuma se degradar em cada borda de janela, e os resultados ficam pouco confiáveis bem além de cerca de 30-60 quadros.',
          '**Cintilação, especialmente em rostos e detalhes finos.** A coerência temporal se quebra com mais frequência em movimentos rápidos, rostos detalhados em resolução mais baixa, e fundos movimentados com múltiplos sujeitos — uma limitação conhecida e frequentemente discutida, não um caso isolado.',
          '**Faixa de movimento limitada.** Especialmente no módulo de movimento v1 original, o movimento de câmera e do sujeito tende a panorâmicas lentas e pequenos movimentos, em vez de ação dramática; módulos posteriores (v2, v3) e motion LoRAs melhoram isso sem eliminá-lo completamente.',
          '**Degradação da fidelidade ao prompt em relação a uma imagem estática do mesmo checkpoint.** Como o módulo de movimento precisa conciliar cada quadro com seus vizinhos, prompts que renderizam com precisão como uma única imagem estática podem renderizar com menos precisão quando a coerência temporal é imposta em 16 quadros.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'O que isso significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Gratuito e código Apache 2.0',
            'O que isso significa na prática': 'Sem assinatura, sem custo por geração, e a base de código está aberta para inspeção e modificação.',
            'Limitação / ressalva': 'O repositório oficial indica lançamento para uso acadêmico — verifique a seção de licença antes de presumir direitos comerciais irrestritos.',
          },
          {
            'Benefício': 'Não exige retreinamento',
            'O que isso significa na prática': 'Qualquer checkpoint SD1.5 compatível ou LoRA que você já use pode ser animado diretamente.',
            'Limitação / ressalva': 'A qualidade da saída e a fidelidade de estilo dependem inteiramente de quão bom aquele checkpoint já é em imagens estáticas.',
          },
          {
            'Benefício': 'Roda em GPUs domésticas',
            'O que isso significa na prática': 'Workflows SD1.5 são viáveis a partir de cerca de 8 GB de VRAM; nenhuma conta em nuvem é necessária.',
            'Limitação / ressalva': 'O suporte a SDXL precisa de bem mais (~13 GB+), e pipelines mais pesados de ControlNet ou vídeo-para-vídeo elevam ainda mais os requisitos.',
          },
          {
            'Benefício': 'Motion LoRAs para controle de câmera',
            'O que isso significa na prática': '8 LoRAs oficiais oferecem movimento básico de zoom, panorâmica, inclinação e rotação sem retreinar nada.',
            'Limitação / ressalva': 'Cobre apenas movimentos básicos de câmera — sem controle preciso de trajetória de câmera por timestamp, como alguns ferramentas comerciais oferecem.',
          },
          {
            'Benefício': 'Ferramental comunitário ativo',
            'O que isso significa na prática': 'O ComfyUI-AnimateDiff-Evolved e a extensão do AUTOMATIC1111 são ambos ativamente mantidos e amplamente documentados.',
            'Limitação / ressalva': 'O próprio repositório base oficial é uma base de código de pesquisa, não um app polido para usuário final — você depende de integrações da comunidade para um workflow utilizável.',
          },
          {
            'Benefício': 'AnimateDiff-Lightning para velocidade',
            'O que isso significa na prática': 'A variante destilada gera em 1-8 passos em vez de 20-50, reduzindo substancialmente o tempo de geração.',
            'Limitação / ressalva': 'Menos passos de difusão trocam um pouco de qualidade e detalhe por essa velocidade.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnimateDiff vs. alternativas',
        columns: ['Ferramenta', 'Abordagem', 'Ideal para', 'Principal limitação frente ao AnimateDiff'],
        rows: [
          {
            'Ferramenta': 'AnimateDiff',
            'Abordagem': 'Módulo de movimento conectado a um checkpoint SD1.5/SDXL existente, sem retreinamento',
            'Ideal para': 'Loops de movimento estilizados ou no estilo anime que reutilizam um checkpoint ou LoRA já existente',
            'Principal limitação frente ao AnimateDiff': '—',
          },
          {
            'Ferramenta': 'Stable Video Diffusion (SVD)',
            'Abordagem': 'Modelo imagem-para-vídeo treinado separadamente pela Stability AI, linhagem diferente da linha texto-para-imagem do Stable Diffusion',
            'Ideal para': 'Animar uma imagem existente em um movimento curto, em vez de gerar clipes com estilo consistente a partir de um checkpoint',
            'Principal limitação frente ao AnimateDiff': 'Não preserva o estilo visual exato de um checkpoint ou LoRA específico como o AnimateDiff faz — ele anima a imagem de entrada, não o estilo aprendido de um modelo texto-para-imagem.',
          },
          {
            'Ferramenta': 'Deforum',
            'Abordagem': 'Técnica mais antiga de interpolação de keyframes e parâmetros — transformações de câmera 2D/3D aplicadas entre quadros de difusão sucessivos',
            'Ideal para': 'Animações guiadas por trajetória de câmera do tipo "zoom ao infinito" e derivas lentas de parâmetros',
            'Principal limitação frente ao AnimateDiff': 'Sem um prior de movimento aprendido — a coerência depende da interpolação de parâmetros quadro a quadro em vez de um módulo de atenção temporal treinado, então o movimento do sujeito (em oposição ao movimento de câmera) é muito menos natural.',
          },
          {
            'Ferramenta': 'Modelos de vídeo comerciais em nuvem (Runway, Pika, modelos de classe Sora)',
            'Abordagem': 'Geração de vídeo proprietária hospedada em nuvem, por assinatura ou créditos',
            'Ideal para': 'Vídeo mais longo, de maior fidelidade, mais coerente no tempo, e saída fotorrealista ou cinematográfica',
            'Principal limitação frente ao AnimateDiff': 'Custo de assinatura contínuo, nenhuma privacidade local, e nenhuma forma de reutilizar o estilo treinado exato de um checkpoint de código aberto específico — veja [Geração de vídeo IA local vs. nuvem](/pt/power-local-llm/local-ai-video-generation-vs-cloud) para uma comparação completa de custo e qualidade frente a modelos de vídeo locais mais recentes.',
          },
        ],
        note: 'Esta tabela compara abordagem e adequação, não um ranking pontuado — cada ferramenta resolve um problema diferente. Para modelos de vídeo nativos mais recentes (Wan 2.2, LTX-2, HunyuanVideo) que competem mais diretamente com o vídeo comercial em nuvem em clipes mais longos, veja a comparação dedicada linkada acima em vez deste guia focado em AnimateDiff.',
      },
      license: {
        id: 'license',
        title: 'O AnimateDiff é livre para uso comercial?',
        content: [
          '**O código do AnimateDiff em si é lançado sob licença Apache 2.0, mas o próprio README do projeto informa que o lançamento é para uso acadêmico — então afirmar "totalmente livre para uso comercial" não é preciso sem verificação adicional.** Esse é exatamente o tipo de exagero a evitar: a Apache 2.0 normalmente permite o uso comercial do código, mas o enquadramento acadêmico adicionado pelos autores significa que leitores planejando vender ou distribuir comercialmente a saída devem ler diretamente os termos de licença atuais do repositório, em vez de confiar apenas no rótulo Apache 2.0.',
          'Uma segunda camada de licença, separada, se aplica ao checkpoint do Stable Diffusion que você animar. O checkpoint original do Stable Diffusion 1.5 (e muitos fine-tunes da comunidade derivados dele) é distribuído sob a licença CreativeML OpenRAIL-M, que permite uso comercial mas carrega suas próprias restrições baseadas em uso (por exemplo, proibições de gerar certas categorias de conteúdo prejudicial) — separadas da própria licença do AnimateDiff e não anuladas por ela.',
          'Na prática: verifique as duas licenças antes de qualquer uso comercial — os termos de lançamento do AnimateDiff em seu repositório, e a licença anexada ao checkpoint específico que você animar (termos OpenRAIL-M para o checkpoint SD1.5 original, ou qualquer licença especificada por um fine-tune específico da comunidade, já que fine-tunes podem carregar termos diferentes do modelo base). Isto não é aconselhamento jurídico; consulte o texto de licença atual ou um profissional jurídico antes de qualquer implantação comercial.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o AnimateDiff',
        items: [
          '**Leitor que já tem um checkpoint ou LoRA do Stable Diffusion de que gosta.** O valor central do AnimateDiff é reutilizar exatamente esse estilo visual em movimento, sem retreinar nada.',
          '**Leitor que quer loops de movimento estilizados, no estilo anime ou ilustrativos.** A técnica se sai melhor no tipo de conteúdo em que checkpoints do Stable Diffusion já são fortes — estilos artísticos em vez de fotorrealismo.',
          '**Leitor confortável com ComfyUI ou AUTOMATIC1111.** A instalação pressupõe familiaridade com uma dessas interfaces; não existe um app AnimateDiff independente dedicado.',
          '**Leitor que quer clipes curtos (poucos segundos) em vez de vídeo longo.** A janela nativa de 16 quadros se encaixa melhor em loops, GIFs e clipes estilizados curtos do que em uma sequência narrativa.',
          '**Leitor com uma GPU doméstica de gama média (8 GB+ de VRAM) que quer custo recorrente zero.** Sem assinatura, sem créditos, sem conta em nuvem para geração local.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o AnimateDiff',
        items: [
          '**Leitor que precisa de vídeo fotorrealista, de longa duração, ou com controle preciso de câmera.** Modelos de vídeo nativos — locais como Wan 2.2 ou LTX-2, ou comerciais como Runway ou Pika — lidam melhor com isso; veja [Geração de vídeo IA local vs. nuvem](/pt/power-local-llm/local-ai-video-generation-vs-cloud).',
          '**Leitor sem um checkpoint do Stable Diffusion de que já goste.** Sem um ponto de partida que valha a pena animar, há pouca vantagem sobre um modelo de vídeo nativo que gera diretamente a partir de um prompt de texto.',
          '**Leitor que precisa de direitos de uso comercial garantidos sem ler texto de licença.** O enquadramento de uso acadêmico no próprio README do AnimateDiff, mais a licença separada do checkpoint, significam que esta não é uma ferramenta "livre para uso comercial" sem diligência — veja a seção Clareza sobre a licença acima.',
          '**Leitor sem GPU local, ou com uma placa abaixo de cerca de 8 GB de VRAM.** O AnimateDiff baseado em SD1.5 é viável a partir de 8 GB, mas leitores abaixo desse nível devem considerar [Aluguel de GPU em nuvem](/pt/power-local-llm/cloud-gpu-rental-guide-2026) ou um serviço de vídeo em nuvem em vez disso.',
          '**Leitor que quer uma experiência de app com um clique.** Tanto o ComfyUI quanto o AUTOMATIC1111 pressupõem certo conforto com grafos de nós ou configurações de extensão — não é um produto de consumo polido.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o AnimateDiff?',
            a: 'O AnimateDiff é um módulo de movimento de código aberto que adiciona capacidade de animação a um checkpoint existente do Stable Diffusion 1.5 ou SDXL sem retreinar esse checkpoint. É a implementação oficial de Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning" (ICLR 2024 Spotlight, arXiv:2307.04725), mantida em github.com/guoyww/AnimateDiff sob licença de código Apache 2.0.',
          },
          {
            q: 'O AnimateDiff é gratuito?',
            a: 'Sim — o código é gratuito para baixar e executar, e não há assinatura para geração local no seu próprio hardware. O custo de geração é a eletricidade e o tempo de GPU que você já possui, não uma taxa para o AnimateDiff em si.',
          },
          {
            q: 'O AnimateDiff é gratuito para uso comercial?',
            a: 'Não automaticamente. O código tem licença Apache 2.0, mas o próprio README do projeto informa que o lançamento é para uso acadêmico, e o checkpoint do Stable Diffusion que você anima geralmente carrega sua própria licença separada (frequentemente CreativeML OpenRAIL-M para SD1.5), que permite uso comercial mas com suas próprias restrições de conteúdo. Verifique ambos os textos de licença antes de uma implantação comercial — isto não é aconselhamento jurídico.',
          },
          {
            q: 'Como instalo o AnimateDiff no ComfyUI?',
            a: 'Instale o nó mantido pela comunidade ComfyUI-AnimateDiff-Evolved ([github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) via ComfyUI Manager ou clonando-o na sua pasta custom_nodes, depois baixe um checkpoint de módulo de movimento (v3_sd15_mm.ckpt para SD1.5 ou mm_sdxl_v10_beta.ckpt para SDXL) na pasta de modelos desse nó antes de construir um workflow texto-em-vídeo.',
          },
          {
            q: 'O AnimateDiff funciona com o AUTOMATIC1111?',
            a: 'Sim, via a extensão mantida pela comunidade sd-webui-animatediff ([github.com/continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff)), instalada pela aba Extensions da WebUI. Ela adiciona um painel AnimateDiff sob a aba txt2img padrão.',
          },
          {
            q: 'Quanta VRAM o AnimateDiff precisa?',
            a: 'O AnimateDiff baseado em SD1.5 costuma rodar com 8-12 GB de VRAM para texto-em-vídeo básico em resolução moderada e a janela nativa de 16 quadros do módulo. O suporte a SDXL precisa de bem mais — o repositório oficial informa que a inferência SDXL normalmente requer cerca de 13 GB de VRAM, dependendo do checkpoint e das configurações usadas. Resolução mais alta, clipes mais longos, ou adicionar ControlNet elevam ainda mais os requisitos.',
          },
          {
            q: 'Quanto duram os clipes do AnimateDiff?',
            a: 'A janela nativa treinada do módulo de movimento é de 16 quadros — cerca de 2 segundos a 8 fps. Técnicas comunitárias de janela deslizante podem estender a duração total processando janelas sobrepostas de 16 quadros e mesclando-as, mas a coerência temporal costuma se degradar em cada borda de janela, e os resultados ficam pouco confiáveis bem além de cerca de 30-60 quadros.',
          },
          {
            q: 'O que são motion LoRAs?',
            a: 'Motion LoRAs são arquivos de pesos adicionais pequenos (cerca de 77 MB), compatíveis com o módulo de movimento mm_sd_v15_v2, que direcionam a geração para um de 8 movimentos básicos de câmera: zoom in, zoom out, panorâmica esquerda, panorâmica direita, inclinação para cima, inclinação para baixo, rotação horária ou anti-horária. Eles são carregados junto com o módulo de movimento da mesma forma que um LoRA de imagem é carregado junto com um checkpoint.',
          },
          {
            q: 'Por que minha saída do AnimateDiff pisca (cintila)?',
            a: 'A cintilação — especialmente em rostos e detalhes finos — é uma limitação amplamente relatada, não um erro de configuração. A coerência temporal se quebra com mais frequência em movimentos rápidos, rostos detalhados em resolução mais baixa, e fundos movimentados com múltiplos sujeitos; módulos de movimento posteriores (v2, v3) e motion LoRAs reduzem isso, mas não eliminam.',
          },
          {
            q: 'O que é o AnimateDiff-Lightning?',
            a: 'O AnimateDiff-Lightning é um lançamento separado e destilado da ByteDance (Lin e Yang, "AnimateDiff-Lightning: Cross-Model Diffusion Distillation", arXiv:2403.12706) que usa destilação de difusão adversarial progressiva para gerar em apenas 1, 2, 4 ou 8 passos de difusão em vez dos 20-50 habituais — substancialmente mais rápido, com algum custo em qualidade e detalhe.',
          },
          {
            q: 'Como o AnimateDiff difere do Stable Video Diffusion?',
            a: 'O AnimateDiff conecta um módulo de movimento a um checkpoint texto-para-imagem existente do Stable Diffusion, preservando o estilo visual exato desse checkpoint. O Stable Video Diffusion (SVD) é um modelo imagem-para-vídeo treinado separadamente pela Stability AI, de linhagem diferente — ele anima uma imagem de entrada dada em vez de reutilizar o estilo aprendido de um checkpoint texto-para-imagem. Escolha o AnimateDiff para manter o visual de um checkpoint ou LoRA específico; escolha o SVD para animar uma imagem existente específica.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O AnimateDiff conquista seu lugar como a forma mais direta de animar um checkpoint do Stable Diffusion que você já gosta, sem retreinar nada nem sair do seu próprio hardware. A contrapartida é real e concreta: os clipes são curtos por padrão (16 quadros, cerca de 2 segundos, extensíveis mas com perda de qualidade em durações maiores), a faixa de movimento e a fidelidade ao prompt se degradam um pouco em relação a uma imagem estática do mesmo checkpoint, e o panorama de licenças exige duas verificações separadas — o enquadramento acadêmico próprio do projeto além do seu código Apache 2.0, e a licença que o checkpoint animado carrega — antes de qualquer uso comercial. Para leitores que já têm um checkpoint SD1.5 ou SDXL estilizado e querem loops de movimento curtos e consistentes em estilo na própria GPU sem custo recorrente, o AnimateDiff via ComfyUI-AnimateDiff-Evolved ou a extensão do AUTOMATIC1111 é o ponto de partida prático. Leitores que precisam de vídeo mais longo, coerente ou fotorrealista devem compará-lo com modelos de vídeo nativos mais recentes em [Geração de vídeo IA local vs. nuvem](/pt/power-local-llm/local-ai-video-generation-vs-cloud) em vez disso.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Repositório oficial do AnimateDiff](https://github.com/guoyww/AnimateDiff) — código, downloads de módulos de movimento, termos de licença.',
          '[Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning", ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725) — o artigo original.',
          '[Lin e Yang (ByteDance), "AnimateDiff-Lightning: Cross-Model Diffusion Distillation", arXiv:2403.12706](https://arxiv.org/abs/2403.12706) — a variante destilada de poucos passos.',
          '[ComfyUI-AnimateDiff-Evolved (Kosinkadink)](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) — a integração comunitária para ComfyUI.',
          '[sd-webui-animatediff (continue-revolution)](https://github.com/continue-revolution/sd-webui-animatediff) — a extensão comunitária para AUTOMATIC1111.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Geração de vídeo IA local vs. nuvem 2026](/pt/power-local-llm/local-ai-video-generation-vs-cloud) — modelos de vídeo nativos mais recentes (Wan 2.2, LTX-2, HunyuanVideo) comparados ao vídeo comercial em nuvem, para leitores que precisam de clipes mais longos ou coerentes do que o AnimateDiff produz.',
          '[Geração de imagens IA local vs. nuvem](/pt/power-local-llm/local-ai-image-generation-vs-cloud) — o lado de imagem estática da mesma decisão local vs. nuvem; o checkpoint escolhido ali é o que o AnimateDiff anima.',
          '[Melhor guia de compra de GPU para LLMs locais 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — orientação de hardware por nível de VRAM aplicável ao AnimateDiff tanto quanto a modelos de linguagem locais.',
          '[Guia de aluguel de GPU em nuvem 2026](/pt/power-local-llm/cloud-gpu-rental-guide-2026) — para leitores sem uma GPU local suficiente que ainda assim querem rodar workflows do AnimateDiff.',
          '[Diretório de software LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — o diretório completo de ferramentas de IA local, incluindo a camada de geração de imagens e IA visual à qual o AnimateDiff pertence.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Image & Video Generation',
    heroImage: '/images/animatediff-video-generation-guide-2026-hero-ar.webp',
    title: 'دليل AnimateDiff 2026: حرّك أي نموذج Stable Diffusion',
    seoTitle: 'AnimateDiff 2026: توليد فيديو محلي مجاني بالذكاء الاصطناعي',
    intro:
      'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) هو وحدة حركة مفتوحة المصدر تضيف قدرة على التحريك إلى نقاط فحص Stable Diffusion الموجودة بالفعل، دون إعادة تدريب النموذج الأساسي. بدلاً من كونه نموذج فيديو مستقلاً، فهو مكوّن إضافي يُركَّب: تجمعه مع نقطة فحص Stable Diffusion 1.5 أو SDXL تستخدمها بالفعل، وتضيف وحدة الحركة اتساقاً زمنياً (بين الإطارات) بحيث يخرج نفس الأسلوب أو الشخصية أو التوجه الفني الذي ينتجه ذلك النموذج بالفعل كصورة ثابتة في صورة مقطع متحرك قصير. يعمل بالكامل على وحدة معالجة الرسومات الخاصة بك عبر ComfyUI أو واجهة AUTOMATIC1111، مجاناً، والمشروع مرخّص بموجب Apache 2.0 — مع تحفظ واحد يستحق المعرفة قبل التخطيط لأي استخدام تجاري، موضح في قسم الترخيص أدناه.',
    metaDescription:
      'يحوّل AnimateDiff نقاط فحص Stable Diffusion إلى فيديو دون إعادة تدريب. إعداد ComfyUI وA1111، متطلبات VRAM، motion LoRAs، وتفاصيل الترخيص.',
    twitterDescription:
      'مراجعة AnimateDiff 2026: وحدة حركة مجانية مرخّصة بموجب Apache 2.0 تحرّك أي نقطة فحص Stable Diffusion. الإعداد، متطلبات VRAM، motion LoRAs، وتفصيل الترخيص الذي تتجاهله معظم الأدلة.',
    audience:
      'الفنانون الرقميون والهواة الذين يستخدمون بالفعل Stable Diffusion محلياً ويريدون إنشاء مقاطع متحركة قصيرة ذات طابع فني من نقاط الفحص وLoRAs الموجودة لديهم، دون اشتراك في خدمة فيديو سحابية.',
    readTime: '11 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'عرض AnimateDiff على GitHub ←', url: 'https://github.com/guoyww/AnimateDiff', productName: 'AnimateDiff', productCategory: 'software' },
      { label: 'تحقق من سعر RTX 4070 Ti Super 16GB على أمازون', url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB', productName: 'NVIDIA RTX 4070 Ti Super 16GB', productCategory: 'gpu', priceRange: '770-1179' },
    ],
    primaryTerm: 'AnimateDiff',
    targetKeywords: [
      'شرح AnimateDiff',
      'تثبيت AnimateDiff ComfyUI',
      'AnimateDiff مقابل Stable Video Diffusion',
      'AnimateDiff motion lora',
      'توليد فيديو Stable Diffusion محلي',
      'متطلبات VRAM لـ AnimateDiff',
      'AnimateDiff AUTOMATIC1111',
      'ترخيص AnimateDiff للاستخدام التجاري',
    ],
    current_models_mentioned: [
      'AnimateDiff v3 (v3_sd15_mm)',
      'AnimateDiff mm_sd_v15_v2',
      'AnimateDiff SDXL beta (mm_sdxl_v10_beta)',
      'AnimateDiff-Lightning',
      'Stable Diffusion 1.5',
      'Stable Diffusion XL',
    ],
    current_hardware_mentioned: ['8 GB VRAM', '12 GB VRAM', '16 GB VRAM', 'RTX 3060 12GB', 'RTX 4070 Ti Super 16GB', 'RTX 4090 24GB'],
    leadAnswerBlock:
      '**يُعد AnimateDiff الخيار المناسب للقراء الذين يستخدمون بالفعل Stable Diffusion محلياً ويريدون تحريك نقطة فحص أو LoRA موجودة دون إعادة تدريب أي شيء.** إنه وحدة حركة مجانية مرخّصة بموجب Apache 2.0 — وليس نموذج فيديو كاملاً — تُستخدم عبر عقدة ComfyUI-AnimateDiff-Evolved التي يصونها المجتمع أو امتداد sd-webui-animatediff الخاص بـ AUTOMATIC1111، وتولّد مقاطع قصيرة (نحو ثانيتين، 16 إطاراً) على وحدات معالجة رسومات استهلاكية. القراء الذين يريدون فيديو أطول أو أكثر اتساقاً أو واقعياً فوتوغرافياً يجب أن يقارنوه بنماذج الفيديو الأصلية الأحدث في [توليد الفيديو المحلي بالذكاء الاصطناعي مقابل السحابة](/ar/power-local-llm/local-ai-video-generation-vs-cloud)؛ من لا يملك وحدة معالجة رسومات محلية عليه قراءة [دليل استئجار وحدات معالجة الرسومات السحابية](/ar/power-local-llm/cloud-gpu-rental-guide-2026) أولاً.',
    quickAnswerTop: {
      en: {
        question: 'What is AnimateDiff and is it free to use?',
        answer:
          'AnimateDiff is a free, open-source motion module (Apache 2.0 code license) that adds animation to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining it. Run it through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 sd-webui-animatediff extension on your own GPU — there is no subscription, but the project README states the release is for academic use, and the checkpoint you animate carries its own license (often CreativeML OpenRAIL-M for SD1.5), so commercial use needs its own check.',
        bullets: [
          '8-12 GB VRAM typical for basic SD1.5 AnimateDiff text-to-video at moderate resolution; SDXL variants need roughly 13 GB+.',
          'Default motion module output is a 16-frame window, about 2 seconds at 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) is the most actively developed integration.',
          '8 motion LoRAs exist for basic camera moves (zoom, pan, tilt, roll), roughly 77 MB each.',
          'Code is Apache 2.0, but the official repo states the release is for academic use — verify commercial terms before monetizing output.',
        ],
        updatedDate: '2026-09',
      },
      ar: {
        question: 'ما هو AnimateDiff وهل استخدامه مجاني؟',
        answer:
          'AnimateDiff هو وحدة حركة مجانية مفتوحة المصدر (ترخيص كود Apache 2.0) تضيف تحريكاً إلى نقطة فحص Stable Diffusion 1.5 أو SDXL موجودة دون إعادة تدريبها. شغّلها عبر ComfyUI-AnimateDiff-Evolved أو امتداد sd-webui-animatediff الخاص بـ AUTOMATIC1111 على وحدة معالجة الرسومات الخاصة بك — لا يوجد اشتراك، لكن ملف README الخاص بالمشروع ينص على أن الإصدار مخصص للاستخدام الأكاديمي، ونقطة الفحص التي تحرّكها تحمل ترخيصها الخاص (غالباً CreativeML OpenRAIL-M بالنسبة لـ SD1.5)، لذا يحتاج الاستخدام التجاري إلى تحقق منفصل.',
        bullets: [
          '8-12 جيجابايت VRAM نموذجياً لتوليد نص إلى فيديو أساسي بـ SD1.5 في دقة متوسطة؛ نسخ SDXL تحتاج نحو 13 جيجابايت أو أكثر.',
          'المخرج الافتراضي لوحدة الحركة هو نافذة 16 إطاراً، نحو ثانيتين عند 8 إطارات في الثانية.',
          'ComfyUI-AnimateDiff-Evolved (يصونها Kosinkadink) هو التكامل الأكثر تطويراً بنشاط.',
          'توجد 8 من motion LoRAs لحركات الكاميرا الأساسية (تكبير، تحريك أفقي، إمالة، دوران)، نحو 77 ميجابايت لكل منها.',
          'الكود مرخّص بموجب Apache 2.0، لكن المستودع الرسمي ينص على أن الإصدار مخصص للاستخدام الأكاديمي — تحقق من الشروط التجارية قبل تسييل المخرجات.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو AnimateDiff', anchor: 'what-is-animatediff' },
      { label: 'كيف تعمل وحدة الحركة', anchor: 'how-it-works' },
      { label: 'الإعداد: ComfyUI وAUTOMATIC1111', anchor: 'setup' },
      { label: 'الأجهزة ومتطلبات VRAM', anchor: 'hardware-vram' },
      { label: 'motion LoRAs والقيود', anchor: 'motion-loras-limitations' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'AnimateDiff مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'وضوح الترخيص', anchor: 'license' },
      { label: 'من يجب أن يستخدم AnimateDiff', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم AnimateDiff', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'ملخص سريع',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AnimateDiff وحدة حركة مجانية مرخّصة بموجب Apache 2.0 تحرّك نقطة فحص Stable Diffusion موجودة دون إعادة تدريبها، تعمل محلياً عبر ComfyUI أو AUTOMATIC1111.' },
          { type: 'plain-terms', text: 'تخيّلها كإضافة تُركّبها على نموذج Stable Diffusion تستخدمه بالفعل — يستمر النموذج في الرسم بأسلوبه المعتاد، لكن AnimateDiff يضيف الحركة بين الإطارات لتخرج النتيجة كمقطع قصير بدلاً من صورة ثابتة.' },
        ],
        items: [
          'AnimateDiff ([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)) وحدة حركة جاهزة للتشغيل الفوري لنقاط فحص Stable Diffusion 1.5 وSDXL — لا حاجة لضبط دقيق للنموذج الأساسي.',
          'يُستخدم حصرياً تقريباً عبر تكاملين يصونهما المجتمع: ComfyUI-AnimateDiff-Evolved (يصونه Kosinkadink) وامتداد AUTOMATIC1111 المسمى sd-webui-animatediff (يصونه continue-revolution).',
          'يعمل AnimateDiff المعتمد على SD1.5 عادة بـ 8-12 جيجابايت VRAM لتوليد نص إلى فيديو أساسي؛ يحتاج دعم SDXL (mm_sdxl_v10_beta) نحو 13 جيجابايت أو أكثر وفقاً للمستودع الرسمي.',
          'المخرج الافتراضي لوحدة الحركة هو مقطع من 16 إطاراً، نحو ثانيتين — تستخدم المقاطع الأطول تقنية نافذة منزلقة يطوّرها المجتمع، تكلف بعض الاتساق الزمني عند حدود النوافذ.',
          'توجد 8 من motion LoRAs رسمية (تكبير للداخل/للخارج، تحريك أفقي يساراً/يميناً، إمالة لأعلى/لأسفل، دوران باتجاه عقارب الساعة/عكسه) تضيف حركة كاميرا أساسية، نحو 77 ميجابايت لكل منها.',
          'AnimateDiff-Lightning (ByteDance، arXiv:2403.12706) نسخة مقطّرة منفصلة تولّد بـ 1 أو 2 أو 4 أو 8 خطوات بدلاً من 20-50 خطوة المعتادة، مقايضة السرعة ببعض الجودة.',
          'كود AnimateDiff مرخّص بموجب Apache 2.0، لكن ملف README الرسمي ينص على أن الإصدار مخصص للاستخدام الأكاديمي — ونقطة فحص SD1.5 التي تحرّكها عادة ما تحمل ترخيصها الخاص (غالباً CreativeML OpenRAIL-M)، لذا فإن القول بأنه "مجاني بالكامل للاستخدام التجاري" دون التحقق من كليهما ليس ادعاءً دقيقاً.',
        ],
      },
      whatIsAnimateDiff: {
        id: 'what-is-animatediff',
        title: 'ما هو AnimateDiff؟',
        content: [
          '**AnimateDiff وحدة حركة، وليس نموذج توليد فيديو مستقلاً.** يُركَّب على نقطة فحص Stable Diffusion 1.5 أو SDXL تملكها بالفعل — بما في ذلك عمليات الضبط الدقيق وLoRAs الخاصة بالمجتمع — ويضيف اتساقاً زمنياً (بين الإطارات) بحيث ينتج ذلك النموذج مقاطع متحركة قصيرة بأسلوبه البصري الحالي، دون إعادة تدريب نقطة الفحص نفسها.',
          'المشروع هو التنفيذ الرسمي للورقة البحثية [Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning", ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725)، ويُصان على GitHub في [github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff).',
          'هذا سلسلة تقنية مختلفة عن نماذج الفيديو الأصلية الأحدث مثل Wan 2.2 وLTX-2 وHunyuanVideo، المدرَّبة من الصفر على بيانات فيديو — راجع [توليد الفيديو المحلي بالذكاء الاصطناعي مقابل السحابة](/ar/power-local-llm/local-ai-video-generation-vs-cloud) لتلك المقارنة. القيمة الخاصة بـ AnimateDiff هي الحفاظ على الأسلوب: نظراً لأنه يعيد استخدام نقطة الفحص الموجودة بدلاً من نموذج فيديو مدرَّب بشكل منفصل، تحافظ المخرجات على الشخصية أو الأسلوب الفني أو LoRA نفسه الذي تعتمد عليه بالفعل في الصور الثابتة.',
          'يوجد إصدار مقطّر منفصل — [AnimateDiff-Lightning (Lin وYang، ByteDance، "Cross-Model Diffusion Distillation"، arXiv:2403.12706)](https://arxiv.org/abs/2403.12706) — يقايض بعض الجودة بالسرعة، فيولّد بعدد خطوات انتشار لا يتجاوز 1 أو 2 أو 4 أو 8 بدلاً من 20-50 خطوة المعتادة، باستخدام تقطير انتشار تنافسي تدريجي.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'كيف تعمل وحدة الحركة؟',
        content: [
          '**وحدة الحركة هي مجموعة منفصلة من الأوزان المدرَّبة تُدرَج داخل شبكة U-Net الخاصة بـ Stable Diffusion جنباً إلى جنب مع طبقات نقطة الفحص الموجودة، دون تعديل تلك النقطة.** أثناء التوليد، تنسّق طبقات الانتباه الزمني الخاصة بوحدة الحركة ما كان سيكون دفعة من عمليات توليد صور ثابتة مستقلة إلى تسلسل إطارات متسق.',
          'توجد ثلاثة إصدارات لوحدة الحركة الخاصة بـ SD1.5: `mm_sd_v15_v2.ckpt` (نحو 1.7 جيجابايت) والأحدث `v3_sd15_mm.ckpt` (نحو 1.56 جيجابايت)، الذي يحسّن سعة الحركة ويضيف توافقاً مع motion LoRAs. توجد وحدة حركة منفصلة لـ SDXL تسمى `mm_sdxl_v10_beta.ckpt` (نحو 950 ميجابايت)، تستهدف عائلة نقاط فحص SDXL الأكبر عبر فرع تجريبي (بيتا).',
          'بما أن وحدة الحركة مكوّن جاهز للتركيب وليست ضبطاً دقيقاً لنقطة فحصك، يمكن تحريك أي نقطة فحص SD1.5 متوافقة ومعظم LoRAs الخاصة بـ SD1.5 المثبَّتة بالفعل مباشرة، دون تنزيل نسخة "فيديو" منفصلة من ذلك النموذج — والمقايضة هي أن وحدة الحركة نفسها، وليس نقطة الفحص، هي التي تحدد مقدار الحركة التي يمكن أن تعبّر عنها المخرجات.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'كيف تُعِدّ AnimateDiff؟',
        itemHeadings: true,
        content: [
          '**يمر معظم استخدام AnimateDiff في 2026 عبر أحد تكاملَين يصونهما المجتمع، نظراً لأن المستودع الأساسي قاعدة كود بحثية أكثر منه تطبيقاً مصقولاً.** ComfyUI-AnimateDiff-Evolved هو الخيار الأكثر تطويراً بنشاط؛ ويغطي امتداد AUTOMATIC1111 القراء المعتادين بالفعل على تلك الواجهة.',
        ],
        columns: ['المسار', 'الأفضل لـ', 'خطوات الإعداد'],
        rows: [
          {
            'المسار': 'ComfyUI-AnimateDiff-Evolved',
            'الأفضل لـ': 'تحكم قائم على العُقد، تطوير نشط، خيارات motion LoRA ونافذة السياق',
            'خطوات الإعداد': 'التثبيت عبر ComfyUI Manager أو الاستنساخ في custom_nodes؛ تنزيل نقطة فحص لوحدة الحركة؛ بناء/تحميل مخطط سير عمل من نص إلى فيديو',
          },
          {
            'المسار': 'sd-webui-animatediff (AUTOMATIC1111)',
            'الأفضل لـ': 'القراء الذين يستخدمون بالفعل واجهة AUTOMATIC1111 للصور الثابتة ويريدون واجهة مألوفة',
            'خطوات الإعداد': 'التثبيت عبر تبويب Extensions في الواجهة (أو الاستنساخ في extensions/)؛ تنزيل وحدة حركة؛ تفعيل لوحة AnimateDiff ضمن تبويب txt2img',
          },
        ],
        numberedItems: [
          'ثبّت ComfyUI إذا لم يكن لديك بالفعل، ثم افتح ComfyUI Manager وابحث عن "AnimateDiff Evolved" (المستودع: [Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) — ثبّت وأعد التشغيل.',
          'نزّل نقطة فحص لوحدة الحركة (`v3_sd15_mm.ckpt` لـ SD1.5، أو `mm_sdxl_v10_beta.ckpt` لـ SDXL) إلى مجلد `ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/`.',
          'حمّل أو ابنِ سير عمل: أداة تحميل نقطة فحص SD1.5 أو SDXL تغذّي عقدة AnimateDiff Loader، ثم عقدة KSampler قياسية وعقدة video-combine أو مخرج GIF بدلاً من عقدة حفظ صورة واحدة.',
          'اضبط عدد الإطارات (16 هي النافذة الأصلية للوحدة) ومعدل الإطارات، واكتب مطالبتك كما تفعل لصورة ثابتة، ثم أدخل التوليد في قائمة الانتظار — توقع عدة دقائق على وحدة معالجة رسومات استهلاكية حسب الدقة وعدد الإطارات.',
          'بالنسبة لـ AUTOMATIC1111 بدلاً من ذلك: ثبّت [continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff) من تبويب Extensions، نزّل نفس وحدة الحركة إلى مجلد النماذج الخاص بالامتداد، ثم فعّل لوحة AnimateDiff ضمن تبويب txt2img وولّد كالمعتاد.',
        ],
        note: 'مسارات المجلدات وتسميات القوائم الدقيقة تتغير بين إصدارات ComfyUI والامتداد — تحقق من ملف README الخاص بالمستودع المرتبط لمعرفة مسار التثبيت الحالي قبل استكشاف خطأ عقدة مفقودة وإصلاحه. تم التحقق مقارنة بوثائق المستودعات بتاريخ 2026-09-02.',
      },
      hardwareVram: {
        id: 'hardware-vram',
        title: 'كم من VRAM يحتاج AnimateDiff؟',
        content: [
          '**تعمل سير عمل AnimateDiff المعتمدة على SD1.5 عادة بـ 8-12 جيجابايت VRAM لتوليد نص إلى فيديو أساسي بدقة متوسطة (نحو 512×512، نافذة الوحدة الأصلية المكونة من 16 إطاراً)؛ يحتاج دعم SDXL أكثر من ذلك بكثير.**',
          'يذكر المستودع الرسمي أن استدلال SDXL "يتطلب عادة نحو 13 جيجابايت VRAM"، حسب نقطة الفحص المخصصة وإعدادات التوليد المستخدمة. تتفاوت تقارير المجتمع بشأن سير عمل SD1.5 حسب الدقة وعدد الإطارات، وما إذا كان ControlNet مضافاً — توقع الحد الأدنى من نطاق 8-12 جيجابايت لمقطع قصير واحد بإعدادات افتراضية، والحد الأعلى (أو أكثر، نحو 16 جيجابايت وما فوق) عند إضافة دقة أعلى، أو مزيد من الإطارات، أو عدة ControlNets في خط أنابيب فيديو إلى فيديو. هذه نطاقات مُبلَّغ عنها من المجتمع بحذر وليست معياراً واحداً مُتحقَّقاً منه، لأن استخدام VRAM الفعلي يعتمد بشدة على سير العمل المحدد.',
          'إرشاد عملي: بطاقة 8 جيجابايت نقطة انطلاق قابلة للتطبيق للتجريب مع نص إلى فيديو SD1.5 بالإعدادات الافتراضية؛ بطاقة 12 جيجابايت تمنح هامشاً مريحاً لسير عمل SD1.5 مع ControlNet؛ بطاقة 16 جيجابايت (مثل RTX 4070 Ti Super) هي الحد الأدنى الأكثر راحة عند الانتقال إلى AnimateDiff المعتمد على SDXL أو خطوط أنابيب فيديو إلى فيديو أثقل. القراء الذين تقل وحدة معالجة الرسومات لديهم عن هذه المستويات، أو لا يملكون وحدة معالجة رسومات محلية، يجب أن يقارنوا الاستئجار — راجع [دليل استئجار وحدات معالجة الرسومات السحابية 2026](/ar/power-local-llm/cloud-gpu-rental-guide-2026) — بالشراء، في [أفضل دليل شراء وحدة معالجة رسومات للنماذج اللغوية المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) (تنطبق نفس إرشادات مستويات VRAM على AnimateDiff كما تنطبق على أعباء عمل الذكاء الاصطناعي التوليدي المحلي الأخرى).',
        ],
      },
      motionLorasLimitations: {
        id: 'motion-loras-limitations',
        title: 'ما هي motion LoRAs، وما هي قيود AnimateDiff؟',
        content: [
          '**motion LoRAs هي أوزان إضافية صغيرة (نحو 77 ميجابايت) توجّه AnimateDiff نحو حركة كاميرا محددة — تكبير للداخل، تكبير للخارج، تحريك أفقي يساراً، تحريك أفقي يميناً، إمالة لأعلى، إمالة لأسفل، دوران باتجاه عقارب الساعة، أو عكس عقارب الساعة — متوافقة مع وحدة الحركة `mm_sd_v15_v2`.** تعمل بنفس طريقة LoRAs الصور: تُحمَّل واحدة منها إلى جانب وحدة الحركة لتوجيه المخرجات نحو تلك الحركة، دون تغيير الأسلوب البصري لنقطة الفحص.',
          'أكثر القيود ذكراً، المستمدة من متتبع المشكلات الخاص بالمشروع نفسه ومراجعات المجتمع، تتجمع حول ثلاثة مجالات:',
        ],
        items: [
          '**مدة مقطع أصلية قصيرة.** نافذة وحدة الحركة المدرَّبة هي 16 إطاراً (نحو ثانيتين عند 8 إطارات في الثانية). تُطيل تقنيات النافذة المنزلقة التي يطوّرها المجتمع (معالجة نوافذ متداخلة من 16 إطاراً ودمج النتائج) المدة الإجمالية، لكن الاتساق الزمني يتدهور عادة عند كل حد نافذة، وتصبح النتائج غير موثوقة بشكل كبير بعد نحو 30-60 إطاراً.',
          '**الوميض، خاصة في الوجوه والتفاصيل الدقيقة.** ينهار الاتساق الزمني في أغلب الأحيان مع الحركة السريعة، والوجوه المفصّلة بدقة منخفضة، والخلفيات المزدحمة بعدة موضوعات — قيد معروف ومناقَش بكثرة وليس حالة استثنائية.',
          '**نطاق حركة محدود.** خاصة في وحدة الحركة الأصلية v1، يميل تحرك الكاميرا والموضوع نحو التحريك البطيء والحركات الصغيرة بدلاً من الأحداث الدرامية؛ تحسّن الوحدات اللاحقة (v2، v3) وmotion LoRAs من ذلك دون إزالته كلياً.',
          '**تدهور مطابقة المطالبة مقارنة بصورة ثابتة من نفس نقطة الفحص.** بما أن وحدة الحركة يجب أن توفّق كل إطار مع الإطارات المجاورة، فإن المطالبات التي تُصيَّر بدقة كصورة ثابتة واحدة قد تُصيَّر بدقة أقل بمجرد فرض الاتساق الزمني عبر 16 إطاراً.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ماذا تعني في الاستخدام الفعلي', 'القيد / التحفظ'],
        rows: [
          {
            'الميزة': 'مجاني وكود Apache 2.0',
            'ماذا تعني في الاستخدام الفعلي': 'لا اشتراك، ولا تكلفة لكل توليد، وقاعدة الكود مفتوحة للفحص والتعديل.',
            'القيد / التحفظ': 'يذكر المستودع الرسمي إصداراً للاستخدام الأكاديمي — تحقق من قسم الترخيص قبل افتراض حقوق تجارية غير مقيدة.',
          },
          {
            'الميزة': 'لا حاجة لإعادة التدريب',
            'ماذا تعني في الاستخدام الفعلي': 'يمكن تحريك أي نقطة فحص SD1.5 متوافقة أو LoRA تستخدمها بالفعل مباشرة.',
            'القيد / التحفظ': 'تعتمد جودة المخرجات وإخلاص الأسلوب كلياً على مدى جودة تلك النقطة بالفعل في الصور الثابتة.',
          },
          {
            'الميزة': 'يعمل على وحدات معالجة رسومات استهلاكية',
            'ماذا تعني في الاستخدام الفعلي': 'سير عمل SD1.5 قابل للتطبيق من نحو 8 جيجابايت VRAM؛ لا حاجة لحساب سحابي.',
            'القيد / التحفظ': 'يحتاج دعم SDXL أكثر بكثير (~13 جيجابايت وما فوق)، وتزيد خطوط أنابيب ControlNet أو فيديو إلى فيديو الأثقل المتطلبات أكثر.',
          },
          {
            'الميزة': 'motion LoRAs للتحكم بالكاميرا',
            'ماذا تعني في الاستخدام الفعلي': 'تمنح 8 LoRAs رسمية حركة أساسية للتكبير والتحريك الأفقي والإمالة والدوران دون إعادة تدريب أي شيء.',
            'القيد / التحفظ': 'تغطي حركات كاميرا أساسية فقط — بلا تحكم دقيق بمسار الكاميرا حسب الطابع الزمني كما تقدمه بعض الأدوات التجارية.',
          },
          {
            'الميزة': 'أدوات مجتمعية نشطة',
            'ماذا تعني في الاستخدام الفعلي': 'تتم صيانة ComfyUI-AnimateDiff-Evolved وامتداد AUTOMATIC1111 كلاهما بنشاط وتوثيقهما على نطاق واسع.',
            'القيد / التحفظ': 'المستودع الأساسي الرسمي نفسه قاعدة كود بحثية، وليس تطبيقاً مصقولاً للمستخدم النهائي — تعتمد على تكاملات المجتمع للحصول على سير عمل قابل للاستخدام.',
          },
          {
            'الميزة': 'AnimateDiff-Lightning من أجل السرعة',
            'ماذا تعني في الاستخدام الفعلي': 'تولّد النسخة المقطّرة بـ 1-8 خطوات بدلاً من 20-50، ما يقلص وقت التوليد بشكل كبير.',
            'القيد / التحفظ': 'خطوات انتشار أقل تقايض بعض الجودة والتفاصيل مقابل تلك السرعة.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnimateDiff مقابل البدائل',
        columns: ['الأداة', 'المنهج', 'الأفضل لـ', 'القيد الرئيسي مقارنة بـ AnimateDiff'],
        rows: [
          {
            'الأداة': 'AnimateDiff',
            'المنهج': 'وحدة حركة مُركَّبة على نقطة فحص SD1.5/SDXL موجودة، دون إعادة تدريب',
            'الأفضل لـ': 'حلقات حركة ذات طابع فني أو أسلوب أنمي تعيد استخدام نقطة فحص أو LoRA موجودة بالفعل',
            'القيد الرئيسي مقارنة بـ AnimateDiff': '—',
          },
          {
            'الأداة': 'Stable Video Diffusion (SVD)',
            'المنهج': 'نموذج صورة إلى فيديو مدرَّب بشكل منفصل من Stability AI، سلسلة تقنية مختلفة عن خط نص إلى صورة الخاص بـ Stable Diffusion',
            'الأفضل لـ': 'تحريك صورة موجودة إلى حركة قصيرة، بدلاً من توليد مقاطع متسقة الأسلوب من نقطة فحص',
            'القيد الرئيسي مقارنة بـ AnimateDiff': 'لا يحافظ على الأسلوب البصري الدقيق لنقطة فحص أو LoRA محددة كما يفعل AnimateDiff — فهو يحرّك صورة الإدخال، وليس الأسلوب المتعلَّم لنموذج نص إلى صورة.',
          },
          {
            'الأداة': 'Deforum',
            'المنهج': 'تقنية أقدم لاستيفاء الإطارات المفتاحية والمعاملات — تحويلات كاميرا ثنائية/ثلاثية الأبعاد تُطبَّق بين إطارات الانتشار المتتالية',
            'الأفضل لـ': 'رسوم متحركة موجَّهة بمسار كاميرا على نمط "التكبير إلى ما لا نهاية" وانحرافات معاملات بطيئة',
            'القيد الرئيسي مقارنة بـ AnimateDiff': 'لا يوجد تصور حركة متعلَّم مسبقاً — يعتمد الاتساق على استيفاء المعاملات من إطار لآخر بدلاً من وحدة انتباه زمني مدرَّبة، لذا فإن حركة الموضوع (بخلاف حركة الكاميرا) أقل طبيعية بكثير.',
          },
          {
            'الأداة': 'نماذج فيديو سحابية تجارية (Runway، Pika، نماذج من فئة Sora)',
            'المنهج': 'توليد فيديو مملوك ومستضاف سحابياً عبر اشتراك أو أرصدة',
            'الأفضل لـ': 'فيديو أطول، وأعلى إخلاصاً، وأكثر اتساقاً زمنياً، ومخرجات واقعية فوتوغرافياً أو سينمائية',
            'القيد الرئيسي مقارنة بـ AnimateDiff': 'تكلفة اشتراك مستمرة، وانعدام الخصوصية المحلية، ولا وسيلة لإعادة استخدام الأسلوب المدرَّب الدقيق لنقطة فحص مفتوحة المصدر محددة — راجع [توليد الفيديو المحلي بالذكاء الاصطناعي مقابل السحابة](/ar/power-local-llm/local-ai-video-generation-vs-cloud) لمقارنة كاملة للتكلفة والجودة مقابل نماذج الفيديو المحلية الأحدث.',
          },
        ],
        note: 'هذا الجدول يقارن المنهج والملاءمة، وليس ترتيباً مُقيَّماً — كل أداة تحل مشكلة مختلفة. بالنسبة لنماذج الفيديو الأصلية الأحدث (Wan 2.2، LTX-2، HunyuanVideo) التي تنافس بشكل مباشر أكثر الفيديو السحابي التجاري بمقاطع أطول، راجع المقارنة المخصصة المرتبطة أعلاه بدلاً من هذا الدليل المرتكز على AnimateDiff.',
      },
      license: {
        id: 'license',
        title: 'هل AnimateDiff مجاني للاستخدام التجاري؟',
        content: [
          '**كود AnimateDiff نفسه يُصدَر بموجب ترخيص Apache 2.0، لكن ملف README الخاص بالمشروع نفسه ينص على أن الإصدار مخصص للاستخدام الأكاديمي — لذا فإن القول بأنه "مجاني بالكامل للاستخدام التجاري" ليس ادعاءً دقيقاً دون مزيد من التحقق.** هذا بالضبط نوع الادعاء المبالغ فيه الذي يجب تجنبه: يسمح Apache 2.0 عادة بالاستخدام التجاري للكود، لكن الإطار الأكاديمي الذي أضافه المؤلفون فوقه يعني أن القراء الذين يخططون لبيع المخرجات أو توزيعها تجارياً يجب أن يقرأوا شروط الترخيص الحالية في المستودع مباشرة، بدلاً من الاعتماد على تسمية Apache 2.0 وحدها.',
          'تنطبق طبقة ترخيص ثانية منفصلة على أي نقطة فحص Stable Diffusion تحرّكها. تُوزَّع نقطة فحص Stable Diffusion 1.5 الأصلية (والعديد من عمليات الضبط الدقيق المجتمعية المشتقة منها) بموجب ترخيص CreativeML OpenRAIL-M، الذي يسمح بالاستخدام التجاري لكنه يحمل قيوداً خاصة به قائمة على الاستخدام (مثل حظر توليد فئات معينة من المحتوى الضار) — منفصلة عن ترخيص AnimateDiff نفسه ولا يتم إلغاؤها بواسطته.',
          'من الناحية العملية: تحقق من كلا الترخيصين قبل أي استخدام تجاري — شروط إصدار AnimateDiff في مستودعه، والترخيص المرفق بنقطة الفحص المحددة التي تحرّكها (شروط OpenRAIL-M بالنسبة لنقطة فحص SD1.5 الأصلية، أو أي ترخيص تحدده نسخة ضبط دقيق مجتمعية معينة، إذ يمكن أن تحمل عمليات الضبط الدقيق شروطاً مختلفة عن النموذج الأساسي). هذا ليس استشارة قانونية؛ استشر نص الترخيص الحالي أو محترفاً قانونياً قبل أي نشر تجاري.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم AnimateDiff',
        items: [
          '**القارئ الذي يملك بالفعل نقطة فحص أو LoRA لـ Stable Diffusion يعجبه.** القيمة الأساسية لـ AnimateDiff هي إعادة استخدام ذلك الأسلوب البصري بالتحديد في صورة متحركة، دون إعادة تدريب أي شيء.',
          '**القارئ الذي يريد حلقات حركة ذات طابع فني أو أسلوب أنمي أو توضيحي.** تعمل التقنية بشكل أفضل مع نوع المحتوى الذي تتفوق فيه نقاط فحص Stable Diffusion بالفعل — الأساليب الفنية بدلاً من الواقعية الفوتوغرافية.',
          '**القارئ المرتاح مع ComfyUI أو AUTOMATIC1111.** يفترض الإعداد إلماماً بإحدى هاتين الواجهتين؛ لا يوجد تطبيق AnimateDiff مستقل مخصص.',
          '**القارئ الذي يريد مقاطع قصيرة (بضع ثوانٍ) بدلاً من فيديو طويل.** تناسب النافذة الأصلية المكونة من 16 إطاراً الحلقات وصور GIF والمقاطع القصيرة ذات الطابع الفني أكثر من التسلسل السردي.',
          '**القارئ الذي يملك وحدة معالجة رسومات استهلاكية متوسطة (8 جيجابايت وما فوق من VRAM) ويريد تكلفة متكررة صفرية.** لا اشتراك، ولا أرصدة، ولا حساب سحابي للتوليد المحلي.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم AnimateDiff',
        items: [
          '**القارئ الذي يحتاج فيديو واقعياً فوتوغرافياً أو طويلاً أو بتحكم دقيق بالكاميرا.** تتعامل نماذج الفيديو الأصلية بشكل أفضل مع ذلك — المحلية منها مثل Wan 2.2 أو LTX-2، أو التجارية مثل Runway أو Pika؛ راجع [توليد الفيديو المحلي بالذكاء الاصطناعي مقابل السحابة](/ar/power-local-llm/local-ai-video-generation-vs-cloud).',
          '**القارئ الذي لا يملك نقطة فحص Stable Diffusion يعجبه بالفعل.** بدون نقطة انطلاق تستحق التحريك، هناك ميزة قليلة مقارنة بنموذج فيديو أصلي يولّد مباشرة من مطالبة نصية.',
          '**القارئ الذي يحتاج حقوق استخدام تجارية مضمونة دون قراءة نص الترخيص.** إطار الاستخدام الأكاديمي في ملف README الخاص بـ AnimateDiff نفسه، بالإضافة إلى ترخيص نقطة الفحص المنفصل، يعني أن هذه ليست أداة "مجانية للاستخدام التجاري" بلا عناية واجبة — راجع قسم وضوح الترخيص أعلاه.',
          '**القارئ الذي لا يملك وحدة معالجة رسومات محلية، أو يملك بطاقة أقل من نحو 8 جيجابايت VRAM.** AnimateDiff المعتمد على SD1.5 قابل للتطبيق من 8 جيجابايت، لكن القراء دون ذلك المستوى يجب أن ينظروا في [استئجار وحدة معالجة رسومات سحابية](/ar/power-local-llm/cloud-gpu-rental-guide-2026) أو خدمة فيديو سحابية بدلاً من ذلك.',
          '**القارئ الذي يريد تجربة تطبيق بنقرة واحدة.** يفترض كل من ComfyUI وAUTOMATIC1111 قدراً من الارتياح مع مخططات العُقد أو إعدادات الامتدادات — إنه ليس منتجاً استهلاكياً مصقولاً.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو AnimateDiff؟',
            a: 'AnimateDiff وحدة حركة مفتوحة المصدر تضيف قدرة على التحريك إلى نقطة فحص Stable Diffusion 1.5 أو SDXL موجودة دون إعادة تدريب تلك النقطة. إنه التنفيذ الرسمي لورقة Guo et al.، "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning" (ICLR 2024 Spotlight، arXiv:2307.04725)، ويُصان على github.com/guoyww/AnimateDiff بموجب ترخيص كود Apache 2.0.',
          },
          {
            q: 'هل AnimateDiff مجاني؟',
            a: 'نعم — الكود مجاني للتنزيل والتشغيل، ولا يوجد اشتراك للتوليد المحلي على أجهزتك الخاصة. تكلفة التوليد هي الكهرباء ووقت وحدة معالجة الرسومات التي تملكها بالفعل، وليست رسوماً لـ AnimateDiff نفسه.',
          },
          {
            q: 'هل AnimateDiff مجاني للاستخدام التجاري؟',
            a: 'ليس تلقائياً. الكود مرخّص بموجب Apache 2.0، لكن ملف README الخاص بالمشروع نفسه ينص على أن الإصدار مخصص للاستخدام الأكاديمي، ونقطة فحص Stable Diffusion التي تحرّكها عادة ما تحمل ترخيصها المنفصل الخاص (غالباً CreativeML OpenRAIL-M بالنسبة لـ SD1.5)، الذي يسمح بالاستخدام التجاري لكن مع قيود محتوى خاصة به. تحقق من كلا نصي الترخيص قبل أي نشر تجاري — هذا ليس استشارة قانونية.',
          },
          {
            q: 'كيف أثبّت AnimateDiff في ComfyUI؟',
            a: 'ثبّت عقدة ComfyUI-AnimateDiff-Evolved التي يصونها المجتمع ([github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) عبر ComfyUI Manager أو باستنساخها في مجلد custom_nodes الخاص بك، ثم نزّل نقطة فحص لوحدة الحركة (v3_sd15_mm.ckpt لـ SD1.5 أو mm_sdxl_v10_beta.ckpt لـ SDXL) إلى مجلد النماذج الخاص بتلك العقدة قبل بناء سير عمل من نص إلى فيديو.',
          },
          {
            q: 'هل يعمل AnimateDiff مع AUTOMATIC1111؟',
            a: 'نعم، عبر امتداد sd-webui-animatediff الذي يصونه المجتمع ([github.com/continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff))، ويُثبَّت من تبويب Extensions في الواجهة. يضيف لوحة AnimateDiff ضمن تبويب txt2img القياسي.',
          },
          {
            q: 'كم من VRAM يحتاج AnimateDiff؟',
            a: 'يعمل AnimateDiff المعتمد على SD1.5 عادة بـ 8-12 جيجابايت VRAM لتوليد نص إلى فيديو أساسي بدقة متوسطة ونافذة الوحدة الأصلية المكونة من 16 إطاراً. يحتاج دعم SDXL أكثر بكثير — يذكر المستودع الرسمي أن استدلال SDXL يتطلب عادة نحو 13 جيجابايت VRAM، حسب نقطة الفحص والإعدادات المستخدمة. تزيد الدقة الأعلى والمقاطع الأطول أو تكديس ControlNet المتطلبات أكثر.',
          },
          {
            q: 'ما مدة مقاطع AnimateDiff؟',
            a: 'النافذة المدرَّبة الأصلية لوحدة الحركة هي 16 إطاراً — نحو ثانيتين عند 8 إطارات في الثانية. يمكن لتقنيات النافذة المنزلقة التي يطوّرها المجتمع إطالة المدة الإجمالية عبر معالجة نوافذ متداخلة من 16 إطاراً ودمجها، لكن الاتساق الزمني يتدهور عادة عند كل حد نافذة، وتصبح النتائج غير موثوقة بشكل كبير بعد نحو 30-60 إطاراً.',
          },
          {
            q: 'ما هي motion LoRAs؟',
            a: 'motion LoRAs هي ملفات أوزان إضافية صغيرة (نحو 77 ميجابايت)، متوافقة مع وحدة الحركة mm_sd_v15_v2، توجّه التوليد نحو واحدة من 8 حركات كاميرا أساسية: تكبير للداخل، تكبير للخارج، تحريك أفقي يساراً، تحريك أفقي يميناً، إمالة لأعلى، إمالة لأسفل، دوران باتجاه عقارب الساعة، أو عكس عقارب الساعة. تُحمَّل إلى جانب وحدة الحركة بنفس الطريقة التي تُحمَّل بها LoRA صورة إلى جانب نقطة فحص.',
          },
          {
            q: 'لماذا يومض مخرج AnimateDiff الخاص بي؟',
            a: 'الوميض — خاصة في الوجوه والتفاصيل الدقيقة — قيد مُبلَّغ عنه على نطاق واسع، وليس خطأ في الإعداد. ينهار الاتساق الزمني في أغلب الأحيان مع الحركة السريعة، والوجوه المفصّلة بدقة منخفضة، والخلفيات المزدحمة بعدة موضوعات؛ تقلل وحدات الحركة اللاحقة (v2، v3) وmotion LoRAs من ذلك دون إزالته كلياً.',
          },
          {
            q: 'ما هو AnimateDiff-Lightning؟',
            a: 'AnimateDiff-Lightning إصدار مقطّر منفصل من ByteDance (Lin وYang، "AnimateDiff-Lightning: Cross-Model Diffusion Distillation"، arXiv:2403.12706) يستخدم تقطير انتشار تنافسي تدريجي للتوليد بعدد خطوات انتشار لا يتجاوز 1 أو 2 أو 4 أو 8 بدلاً من 20-50 خطوة المعتادة — أسرع بشكل كبير، مع بعض التكلفة في الجودة والتفاصيل.',
          },
          {
            q: 'كيف يختلف AnimateDiff عن Stable Video Diffusion؟',
            a: 'يُركِّب AnimateDiff وحدة حركة على نقطة فحص نص إلى صورة موجودة من Stable Diffusion، محافظاً على الأسلوب البصري الدقيق لتلك النقطة. Stable Video Diffusion (SVD) نموذج صورة إلى فيديو مدرَّب بشكل منفصل من Stability AI، بسلسلة تقنية مختلفة — فهو يحرّك صورة إدخال معطاة بدلاً من إعادة استخدام الأسلوب المتعلَّم لنقطة فحص نص إلى صورة. اختر AnimateDiff للحفاظ على مظهر نقطة فحص أو LoRA محددة؛ اختر SVD لتحريك صورة موجودة محددة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يكتسب AnimateDiff مكانته باعتباره الطريقة الأكثر مباشرة لتحريك نقطة فحص Stable Diffusion تعجبك بالفعل، دون إعادة تدريب أي شيء أو مغادرة أجهزتك الخاصة. المقايضة حقيقية ومحددة: المقاطع قصيرة افتراضياً (16 إطاراً، نحو ثانيتين، قابلة للإطالة لكن بفقدان جودة عند مدد أطول)، ويتدهور نطاق الحركة ومطابقة المطالبة إلى حد ما مقارنة بصورة ثابتة من نفس نقطة الفحص، وتتطلب صورة الترخيص تحققين منفصلين — إطار الاستخدام الأكاديمي الخاص بالمشروع فوق كوده المرخّص بموجب Apache 2.0، والترخيص الذي تحمله نقطة الفحص التي تحرّكها — قبل أي استخدام تجاري. بالنسبة للقراء الذين يملكون بالفعل نقطة فحص SD1.5 أو SDXL ذات طابع فني ويريدون حلقات حركة قصيرة ومتسقة الأسلوب على وحدة معالجة الرسومات الخاصة بهم دون تكلفة متكررة، يُعد AnimateDiff عبر ComfyUI-AnimateDiff-Evolved أو امتداد AUTOMATIC1111 نقطة الانطلاق العملية. أما القراء الذين يحتاجون فيديو أطول أو أكثر اتساقاً أو واقعياً فوتوغرافياً فيجب أن يقارنوه بدلاً من ذلك بنماذج الفيديو الأصلية الأحدث في [توليد الفيديو المحلي بالذكاء الاصطناعي مقابل السحابة](/ar/power-local-llm/local-ai-video-generation-vs-cloud).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[مستودع AnimateDiff الرسمي](https://github.com/guoyww/AnimateDiff) — الكود، تنزيلات وحدات الحركة، شروط الترخيص.',
          '[Guo et al.، "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning"، ICLR 2024 Spotlight، arXiv:2307.04725](https://arxiv.org/abs/2307.04725) — الورقة البحثية الأصلية.',
          '[Lin وYang (ByteDance)، "AnimateDiff-Lightning: Cross-Model Diffusion Distillation"، arXiv:2403.12706](https://arxiv.org/abs/2403.12706) — النسخة المقطّرة قليلة الخطوات.',
          '[ComfyUI-AnimateDiff-Evolved (Kosinkadink)](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) — تكامل ComfyUI المجتمعي.',
          '[sd-webui-animatediff (continue-revolution)](https://github.com/continue-revolution/sd-webui-animatediff) — امتداد AUTOMATIC1111 المجتمعي.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[توليد الفيديو المحلي بالذكاء الاصطناعي مقابل السحابة 2026](/ar/power-local-llm/local-ai-video-generation-vs-cloud) — مقارنة نماذج الفيديو الأصلية الأحدث (Wan 2.2، LTX-2، HunyuanVideo) بالفيديو السحابي التجاري، للقراء الذين يحتاجون مقاطع أطول أو أكثر اتساقاً مما ينتجه AnimateDiff.',
          '[توليد الصور المحلي بالذكاء الاصطناعي مقابل السحابة](/ar/power-local-llm/local-ai-image-generation-vs-cloud) — الجانب الخاص بالصورة الثابتة من نفس قرار المحلي مقابل السحابة؛ نقطة الفحص التي تختارها هناك هي ما يحرّكه AnimateDiff.',
          '[أفضل دليل شراء وحدة معالجة رسومات للنماذج اللغوية المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — إرشادات أجهزة حسب مستوى VRAM تنطبق على AnimateDiff بقدر انطباقها على نماذج اللغة المحلية.',
          '[دليل استئجار وحدات معالجة الرسومات السحابية 2026](/ar/power-local-llm/cloud-gpu-rental-guide-2026) — للقراء الذين لا يملكون وحدة معالجة رسومات محلية كافية لكنهم يريدون تشغيل سير عمل AnimateDiff.',
          '[دليل برمجيات النماذج اللغوية المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — الدليل الكامل لأدوات الذكاء الاصطناعي المحلي، بما في ذلك طبقة توليد الصور والذكاء الاصطناعي البصري التي ينتمي إليها AnimateDiff.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-02',
    dateModified: '2026-09-02',
    next_refresh_due: '2027-03-02',
    theme: 'Image & Video Generation',
    heroImage: '/images/animatediff-video-generation-guide-2026-hero-ko.webp',
    title: 'AnimateDiff 2026 가이드: Stable Diffusion 모델 애니메이션화',
    seoTitle: 'AnimateDiff 2026: 무료 로컬 AI 영상 생성 가이드',
    intro:
      'AnimateDiff([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff))는 기존 Stable Diffusion 체크포인트에 애니메이션 기능을 추가하는 오픈소스 모션 모듈로, 기본 모델을 재학습할 필요가 없습니다. 독립된 영상 모델이 아니라 플러그인 형태의 구성 요소로 작동합니다. 이미 사용 중인 Stable Diffusion 1.5 또는 SDXL 체크포인트와 결합하면, 모션 모듈이 프레임 간 시간적 일관성을 더해 해당 모델이 정지 이미지로 이미 만들어내는 것과 동일한 스타일, 캐릭터, 아트 방향을 짧은 애니메이션 클립으로 출력합니다. ComfyUI나 AUTOMATIC1111 WebUI를 통해 자신의 GPU에서 완전히 무료로 실행되며, 프로젝트는 Apache 2.0 라이선스를 따릅니다 — 다만 상업적 활용을 계획하기 전에 알아둘 만한 한 가지 유의사항이 있으며, 아래 라이선스 섹션에서 다룹니다.',
    metaDescription:
      'AnimateDiff는 재학습 없이 Stable Diffusion 체크포인트를 영상으로 바꿉니다. ComfyUI·A1111 설치, VRAM 요구사항, motion LoRA, 라이선스 세부사항까지 정리했습니다.',
    twitterDescription:
      'AnimateDiff 2026 리뷰: 무료, Apache 2.0 라이선스 모션 모듈로 어떤 Stable Diffusion 체크포인트든 애니메이션화. 설치, VRAM 요구사항, motion LoRA, 대부분의 가이드가 생략하는 라이선스 유의사항까지.',
    audience:
      '이미 로컬에서 Stable Diffusion을 사용 중이며 클라우드 영상 구독 없이 기존 체크포인트와 LoRA로 짧은 스타일화된 애니메이션 클립을 만들고 싶은 디지털 아티스트와 취미 사용자.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'GitHub에서 AnimateDiff 보기 →', url: 'https://github.com/guoyww/AnimateDiff', productName: 'AnimateDiff', productCategory: 'software' },
      { label: 'Amazon에서 RTX 4070 Ti Super 16GB 가격 확인', url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB', productName: 'NVIDIA RTX 4070 Ti Super 16GB', productCategory: 'gpu', priceRange: '770-1179' },
    ],
    primaryTerm: 'AnimateDiff',
    targetKeywords: [
      'AnimateDiff 사용법',
      'AnimateDiff ComfyUI 설치',
      'AnimateDiff Stable Video Diffusion 비교',
      'AnimateDiff motion lora',
      'Stable Diffusion 영상 생성 로컬',
      'AnimateDiff VRAM 요구사항',
      'AnimateDiff AUTOMATIC1111',
      'AnimateDiff 라이선스 상업적 이용',
    ],
    current_models_mentioned: [
      'AnimateDiff v3 (v3_sd15_mm)',
      'AnimateDiff mm_sd_v15_v2',
      'AnimateDiff SDXL beta (mm_sdxl_v10_beta)',
      'AnimateDiff-Lightning',
      'Stable Diffusion 1.5',
      'Stable Diffusion XL',
    ],
    current_hardware_mentioned: ['8GB VRAM', '12GB VRAM', '16GB VRAM', 'RTX 3060 12GB', 'RTX 4070 Ti Super 16GB', 'RTX 4090 24GB'],
    leadAnswerBlock:
      '**AnimateDiff는 이미 로컬에서 Stable Diffusion을 사용하고 있고, 아무것도 재학습하지 않고 기존 체크포인트나 LoRA를 애니메이션화하고 싶은 독자에게 적합합니다.** 완전한 영상 모델이 아니라 무료이며 Apache 2.0 라이선스를 따르는 모션 모듈로, 커뮤니티가 유지 관리하는 ComfyUI-AnimateDiff-Evolved 노드나 AUTOMATIC1111의 sd-webui-animatediff 확장을 통해 사용하며, 소비자용 GPU에서 짧은 클립(약 2초, 16프레임)을 생성합니다. 더 길고 일관되거나 사실적인 영상을 원하는 독자는 [로컬 AI 영상 생성 vs. 클라우드](/ko/power-local-llm/local-ai-video-generation-vs-cloud)에서 최신 네이티브 영상 모델과 비교해 보아야 하며, 로컬 GPU가 전혀 없는 독자는 먼저 [클라우드 GPU 대여 가이드](/ko/power-local-llm/cloud-gpu-rental-guide-2026)를 읽어보시기 바랍니다.',
    quickAnswerTop: {
      en: {
        question: 'What is AnimateDiff and is it free to use?',
        answer:
          'AnimateDiff is a free, open-source motion module (Apache 2.0 code license) that adds animation to an existing Stable Diffusion 1.5 or SDXL checkpoint without retraining it. Run it through ComfyUI-AnimateDiff-Evolved or the AUTOMATIC1111 sd-webui-animatediff extension on your own GPU — there is no subscription, but the project README states the release is for academic use, and the checkpoint you animate carries its own license (often CreativeML OpenRAIL-M for SD1.5), so commercial use needs its own check.',
        bullets: [
          '8-12 GB VRAM typical for basic SD1.5 AnimateDiff text-to-video at moderate resolution; SDXL variants need roughly 13 GB+.',
          'Default motion module output is a 16-frame window, about 2 seconds at 8 fps.',
          'ComfyUI-AnimateDiff-Evolved (maintained by Kosinkadink) is the most actively developed integration.',
          '8 motion LoRAs exist for basic camera moves (zoom, pan, tilt, roll), roughly 77 MB each.',
          'Code is Apache 2.0, but the official repo states the release is for academic use — verify commercial terms before monetizing output.',
        ],
        updatedDate: '2026-09',
      },
      ko: {
        question: 'AnimateDiff는 무엇이고 무료로 사용할 수 있나요?',
        answer:
          'AnimateDiff는 기존 Stable Diffusion 1.5 또는 SDXL 체크포인트를 재학습하지 않고도 애니메이션을 추가하는 무료 오픈소스 모션 모듈(Apache 2.0 코드 라이선스)입니다. ComfyUI-AnimateDiff-Evolved나 AUTOMATIC1111의 sd-webui-animatediff 확장을 통해 자신의 GPU에서 실행합니다 — 구독료는 없지만, 프로젝트 README에는 이 릴리스가 학술적 용도를 위한 것이라고 명시되어 있으며, 애니메이션화하는 체크포인트 역시 자체 라이선스(SD1.5의 경우 흔히 CreativeML OpenRAIL-M)를 가지므로 상업적 이용은 별도 확인이 필요합니다.',
        bullets: [
          '중간 해상도의 기본 SD1.5 AnimateDiff 텍스트-투-비디오에는 일반적으로 8-12GB VRAM이면 충분하며, SDXL 버전은 약 13GB 이상이 필요합니다.',
          '모션 모듈의 기본 출력은 16프레임 윈도우로, 8fps에서 약 2초입니다.',
          'ComfyUI-AnimateDiff-Evolved(Kosinkadink가 유지 관리)가 가장 활발히 개발되는 통합입니다.',
          '기본적인 카메라 움직임(줌, 팬, 틸트, 롤)을 위한 8종의 motion LoRA가 있으며 각각 약 77MB입니다.',
          '코드는 Apache 2.0이지만, 공식 저장소는 릴리스가 학술적 용도를 위한 것이라고 명시합니다 — 결과물을 수익화하기 전에 상업적 조건을 확인하세요.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'AnimateDiff란?', anchor: 'what-is-animatediff' },
      { label: '모션 모듈의 작동 방식', anchor: 'how-it-works' },
      { label: '설치: ComfyUI와 AUTOMATIC1111', anchor: 'setup' },
      { label: '하드웨어 및 VRAM 요구사항', anchor: 'hardware-vram' },
      { label: 'Motion LoRA와 한계점', anchor: 'motion-loras-limitations' },
      { label: '장단점: 이점 vs. 한계', anchor: 'tradeoffs' },
      { label: 'AnimateDiff vs. 대안', anchor: 'vs-alternatives' },
      { label: '라이선스 명확히 하기', anchor: 'license' },
      { label: 'AnimateDiff를 사용해야 할 사람', anchor: 'who-should-use' },
      { label: 'AnimateDiff를 사용하지 말아야 할 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'AnimateDiff는 기존 Stable Diffusion 체크포인트를 재학습 없이 애니메이션화하는 무료, Apache 2.0 라이선스 모션 모듈로, ComfyUI나 AUTOMATIC1111을 통해 로컬에서 실행됩니다.' },
          { type: 'plain-terms', text: '이미 사용 중인 Stable Diffusion 모델에 연결하는 플러그인이라고 생각하면 됩니다 — 모델은 여전히 익숙한 스타일로 그림을 그리지만, AnimateDiff가 프레임 간 움직임을 더해 정지 이미지 대신 짧은 클립이 출력됩니다.' },
        ],
        items: [
          'AnimateDiff([github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff))는 Stable Diffusion 1.5와 SDXL 체크포인트용 플러그 앤 플레이 모션 모듈입니다 — 기본 모델의 파인튜닝이 필요 없습니다.',
          '거의 전적으로 두 가지 커뮤니티 통합을 통해 사용됩니다: ComfyUI-AnimateDiff-Evolved(Kosinkadink 유지 관리)와 AUTOMATIC1111 확장인 sd-webui-animatediff(continue-revolution 유지 관리).',
          'SD1.5 기반 AnimateDiff는 일반적으로 기본 텍스트-투-비디오에 8-12GB VRAM으로 실행됩니다. 공식 저장소에 따르면 SDXL 지원(mm_sdxl_v10_beta)은 약 13GB 이상이 필요합니다.',
          '모션 모듈의 기본 출력은 16프레임 클립(약 2초)입니다 — 더 긴 클립은 커뮤니티의 슬라이딩 윈도우 기법을 사용하며, 윈도우 경계에서 시간적 일관성을 다소 희생합니다.',
          '공식 motion LoRA가 8종 있으며(줌 인/아웃, 좌우 팬, 상하 틸트, 시계/반시계 방향 롤) 기본적인 카메라 움직임을 추가하고 각각 약 77MB입니다.',
          'AnimateDiff-Lightning(ByteDance, arXiv:2403.12706)은 별도의 증류 버전으로, 일반적인 20-50스텝 대신 1, 2, 4, 8스텝으로 생성하며 속도를 위해 약간의 품질을 희생합니다.',
          'AnimateDiff 코드는 Apache 2.0이지만 공식 README는 릴리스가 학술적 용도를 위한 것이라고 명시합니다 — 그리고 애니메이션화하는 SD1.5 체크포인트도 보통 자체 라이선스(흔히 CreativeML OpenRAIL-M)를 가지므로, 둘 다 확인하지 않은 채 "상업적 이용에 완전히 자유롭다"고 주장하는 것은 정확하지 않습니다.',
        ],
      },
      whatIsAnimateDiff: {
        id: 'what-is-animatediff',
        title: 'AnimateDiff란 무엇인가요?',
        content: [
          '**AnimateDiff는 독립적인 영상 생성 모델이 아니라 모션 모듈입니다.** 이미 보유한 Stable Diffusion 1.5 또는 SDXL 체크포인트(커뮤니티 파인튜닝 및 LoRA 포함)에 연결되어 프레임 간 시간적 일관성을 추가함으로써, 체크포인트 자체를 재학습하지 않고도 해당 모델이 기존 시각적 스타일 그대로 짧은 애니메이션 클립을 만들어내도록 합니다.',
          '이 프로젝트는 논문 [Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning", ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725)의 공식 구현이며, GitHub의 [github.com/guoyww/AnimateDiff](https://github.com/guoyww/AnimateDiff)에서 유지 관리됩니다.',
          '이는 영상 데이터로 처음부터 학습된 Wan 2.2, LTX-2, HunyuanVideo와 같은 최신 네이티브 영상 모델과는 다른 계열입니다 — 해당 비교는 [로컬 AI 영상 생성 vs. 클라우드](/ko/power-local-llm/local-ai-video-generation-vs-cloud)를 참고하세요. AnimateDiff만의 특별한 가치는 스타일 보존에 있습니다: 별도로 학습된 영상 모델이 아니라 이미 보유한 체크포인트를 재사용하기 때문에, 결과물은 정지 이미지에서 이미 의존하고 있는 캐릭터, 아트 스타일, LoRA를 정확히 그대로 유지합니다.',
          '별도의 증류된 릴리스인 [AnimateDiff-Lightning(Lin & Yang, ByteDance, "Cross-Model Diffusion Distillation", arXiv:2403.12706)](https://arxiv.org/abs/2403.12706)은 속도를 위해 약간의 품질을 희생하며, 점진적 적대적 확산 증류를 사용해 일반적인 20-50스텝 대신 단 1, 2, 4, 8스텝만으로 생성합니다.',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '모션 모듈은 어떻게 작동하나요?',
        content: [
          '**모션 모듈은 체크포인트의 기존 레이어와 나란히 Stable Diffusion의 U-Net에 삽입되는 별도로 학습된 가중치 세트이며, 해당 체크포인트를 수정하지 않습니다.** 생성 과정에서 모션 모듈의 시간적 어텐션 레이어는 원래는 독립적인 정지 이미지 생성의 배치였을 것을 일관된 프레임 시퀀스로 조정합니다.',
          'SD1.5용으로 세 가지 모션 모듈 버전이 존재합니다: `mm_sd_v15_v2.ckpt`(약 1.7GB)와 더 최신 버전인 `v3_sd15_mm.ckpt`(약 1.56GB)로, 후자는 움직임의 폭을 개선하고 motion LoRA 호환성을 추가합니다. 별도의 SDXL 모션 모듈인 `mm_sdxl_v10_beta.ckpt`(약 950MB)는 베타 브랜치를 통해 더 큰 SDXL 체크포인트 계열을 대상으로 합니다.',
          '모션 모듈은 체크포인트의 파인튜닝이 아니라 플러그인 방식의 구성 요소이므로, 이미 설치되어 있는 호환 가능한 SD1.5 체크포인트와 대부분의 SD1.5 LoRA를 해당 모델의 별도 "영상" 버전을 다운로드할 필요 없이 바로 애니메이션화할 수 있습니다 — 다만 트레이드오프로, 출력이 표현할 수 있는 움직임의 정도는 체크포인트가 아니라 모션 모듈 자체가 결정합니다.',
        ],
      },
      setup: {
        id: 'setup',
        title: 'AnimateDiff는 어떻게 설치하나요?',
        itemHeadings: true,
        content: [
          '**2026년 현재 AnimateDiff 사용의 대부분은 두 가지 커뮤니티 통합 중 하나를 통해 이루어지는데, 기본 저장소가 완성된 앱이라기보다 연구용 코드베이스이기 때문입니다.** ComfyUI-AnimateDiff-Evolved가 더 활발히 개발되는 옵션이며, AUTOMATIC1111 확장은 이미 해당 WebUI를 표준으로 사용하는 독자를 위한 것입니다.',
        ],
        columns: ['경로', '적합한 대상', '설치 단계'],
        rows: [
          {
            '경로': 'ComfyUI-AnimateDiff-Evolved',
            '적합한 대상': '노드 기반 제어, 활발한 개발, motion LoRA 및 컨텍스트 윈도우 옵션',
            '설치 단계': 'ComfyUI Manager를 통해 설치하거나 custom_nodes에 클론; 모션 모듈 체크포인트 다운로드; 텍스트-투-비디오 워크플로 그래프 구성/불러오기',
          },
          {
            '경로': 'sd-webui-animatediff (AUTOMATIC1111)',
            '적합한 대상': '이미 정지 이미지용으로 AUTOMATIC1111 WebUI를 사용 중이며 익숙한 인터페이스를 원하는 독자',
            '설치 단계': 'WebUI의 Extensions 탭을 통해 설치(또는 extensions/에 클론); 모션 모듈 다운로드; txt2img 탭 아래에서 AnimateDiff 패널 활성화',
          },
        ],
        numberedItems: [
          '아직 ComfyUI가 없다면 설치한 뒤 ComfyUI Manager를 열고 "AnimateDiff Evolved"를 검색합니다(저장소: [Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)) — 설치 후 재시작합니다.',
          '모션 모듈 체크포인트(SD1.5용 `v3_sd15_mm.ckpt` 또는 SDXL용 `mm_sdxl_v10_beta.ckpt`)를 `ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/` 폴더에 다운로드합니다.',
          '워크플로를 불러오거나 구성합니다: SD1.5 또는 SDXL 체크포인트 로더를 AnimateDiff Loader 노드에 연결한 뒤, 표준 KSampler와 단일 이미지 저장 노드 대신 video-combine 또는 GIF 출력 노드를 배치합니다.',
          '프레임 수(모듈의 기본 윈도우는 16)와 프레임 레이트를 설정하고, 정지 이미지와 동일한 방식으로 프롬프트를 작성한 뒤 생성 대기열에 넣습니다 — 해상도와 프레임 수에 따라 소비자용 GPU에서 몇 분이 걸릴 것으로 예상하세요.',
          'AUTOMATIC1111을 대신 사용하려면: Extensions 탭에서 [continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff)를 설치하고, 동일한 모션 모듈을 해당 확장의 모델 폴더에 다운로드한 다음, txt2img 탭 아래에서 AnimateDiff 패널을 활성화하고 평소처럼 생성합니다.',
        ],
        note: '정확한 폴더 경로와 메뉴 명칭은 ComfyUI 및 확장 버전에 따라 달라집니다 — 노드 누락 오류를 해결하기 전에 링크된 저장소의 README에서 현재 설치 경로를 확인하세요. 2026-09-02 기준 각 저장소의 문서에 대조하여 확인함.',
      },
      hardwareVram: {
        id: 'hardware-vram',
        title: 'AnimateDiff에는 얼마나 많은 VRAM이 필요한가요?',
        content: [
          '**SD1.5 기반 AnimateDiff 워크플로는 중간 해상도(모듈의 기본 16프레임 윈도우 기준 약 512x512)에서 기본적인 텍스트-투-비디오 생성 시 일반적으로 8-12GB VRAM으로 실행됩니다. SDXL 지원에는 훨씬 더 많은 VRAM이 필요합니다.**',
          '공식 저장소는 SDXL 추론이 사용하는 개인화된 체크포인트와 생성 설정에 따라 "일반적으로 약 13GB VRAM이 필요"하다고 명시합니다. SD1.5 워크플로에 대한 커뮤니티 보고는 해상도, 프레임 수, ControlNet 사용 여부에 따라 달라집니다 — 기본 설정에서 짧은 클립 하나라면 8-12GB 범위의 하단을, 더 높은 해상도, 더 많은 프레임, 또는 비디오-투-비디오 파이프라인에서 여러 ControlNet을 추가하면 상단(혹은 16GB 이상)을 예상하세요. 이는 단일한 검증된 벤치마크가 아니라, 실제 VRAM 사용량이 구체적인 워크플로에 크게 좌우되기 때문에 신중하게 표현된 커뮤니티 보고 범위입니다.',
          '실용적인 지침: 8GB 카드는 기본 설정의 SD1.5 텍스트-투-비디오 실험에 실행 가능한 출발점이며, 12GB 카드는 ControlNet을 사용하는 SD1.5 워크플로에 여유를 제공하고, 16GB 카드(예: RTX 4070 Ti Super)는 SDXL 기반 AnimateDiff나 더 무거운 비디오-투-비디오 파이프라인으로 넘어갈 때 더 편안한 최소 사양입니다. GPU가 이러한 등급에 미치지 못하거나 로컬 GPU가 없는 독자는 [2026 클라우드 GPU 대여 가이드](/ko/power-local-llm/cloud-gpu-rental-guide-2026)에서 대여를, [2026 로컬 LLM용 최고의 GPU 구매 가이드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026)에서 구매를 비교해 보아야 합니다(동일한 VRAM 등급 지침이 다른 로컬 생성형 AI 작업과 마찬가지로 AnimateDiff에도 적용됩니다).',
        ],
      },
      motionLorasLimitations: {
        id: 'motion-loras-limitations',
        title: 'Motion LoRA란 무엇이며, AnimateDiff의 한계는 무엇인가요?',
        content: [
          '**Motion LoRA는 AnimateDiff를 특정 카메라 움직임 — 줌 인, 줌 아웃, 좌측 팬, 우측 팬, 상단 틸트, 하단 틸트, 시계 방향 롤, 반시계 방향 롤 — 로 유도하는 작은(약 77MB) 추가 가중치이며, `mm_sd_v15_v2` 모션 모듈과 호환됩니다.** 이미지 LoRA와 동일한 방식으로 작동합니다: 모션 모듈과 함께 하나를 불러와 체크포인트의 시각적 스타일을 바꾸지 않으면서 결과물을 해당 움직임 쪽으로 기울입니다.',
          '프로젝트 자체의 이슈 트래커와 커뮤니티 리뷰에서 가장 자주 언급되는 한계는 세 가지 영역으로 나뉩니다:',
        ],
        items: [
          '**짧은 기본 클립 길이.** 모션 모듈이 학습된 윈도우는 16프레임(8fps에서 약 2초)입니다. 커뮤니티의 슬라이딩 윈도우 기법(중첩되는 16프레임 윈도우를 처리하고 결과를 블렌딩)은 전체 길이를 늘리지만, 각 윈도우 경계에서 시간적 일관성이 일반적으로 저하되며, 약 30-60프레임을 크게 넘어서면 결과가 신뢰하기 어려워집니다.',
          '**특히 얼굴과 세부 디테일에서의 깜빡임.** 시간적 일관성은 빠른 움직임, 저해상도의 세밀한 얼굴, 여러 피사체가 있는 복잡한 배경에서 가장 자주 무너집니다 — 이는 예외적인 사례가 아니라 잘 알려져 있고 자주 논의되는 한계입니다.',
          '**제한된 움직임 범위.** 특히 원조인 v1 모션 모듈에서는 카메라 및 피사체 움직임이 극적인 동작보다는 느린 팬과 작은 움직임으로 치우치는 경향이 있습니다. 이후 모듈(v2, v3)과 motion LoRA가 이를 개선하지만 완전히 없애지는 못합니다.',
          '**동일 체크포인트의 정지 이미지 대비 프롬프트 이행도 저하.** 모션 모듈이 각 프레임을 인접 프레임과 조화시켜야 하기 때문에, 단일 정지 이미지로는 정확하게 렌더링되는 프롬프트가 16프레임에 걸쳐 시간적 일관성이 강제되면 덜 정확하게 렌더링될 수 있습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점 vs. 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의사항'],
        rows: [
          {
            '이점': '무료이며 Apache 2.0 코드',
            '실제 사용에서의 의미': '구독료가 없고, 생성당 비용도 없으며, 코드베이스가 검토와 수정을 위해 공개되어 있습니다.',
            '한계 / 유의사항': '공식 저장소는 릴리스가 학술적 용도를 위한 것이라고 명시합니다 — 무제한 상업적 권리를 가정하기 전에 라이선스 섹션을 확인하세요.',
          },
          {
            '이점': '재학습 불필요',
            '실제 사용에서의 의미': '이미 사용 중인 호환 가능한 SD1.5 체크포인트나 LoRA를 바로 애니메이션화할 수 있습니다.',
            '한계 / 유의사항': '출력 품질과 스타일 충실도는 해당 체크포인트가 정지 이미지에서 이미 얼마나 우수한지에 전적으로 좌우됩니다.',
          },
          {
            '이점': '소비자용 GPU에서 실행',
            '실제 사용에서의 의미': 'SD1.5 워크플로는 약 8GB VRAM부터 실용적이며, 클라우드 계정이 필요 없습니다.',
            '한계 / 유의사항': 'SDXL 지원에는 훨씬 더 많은 용량(~13GB 이상)이 필요하며, 더 무거운 ControlNet이나 비디오-투-비디오 파이프라인은 요구사항을 더욱 높입니다.',
          },
          {
            '이점': '카메라 제어를 위한 motion LoRA',
            '실제 사용에서의 의미': '8종의 공식 LoRA가 아무것도 재학습하지 않고도 기본적인 줌, 팬, 틸트, 롤 움직임을 제공합니다.',
            '한계 / 유의사항': '기본적인 카메라 움직임만 다룹니다 — 일부 상업용 도구가 제공하는 타임스탬프별 정밀한 카메라 경로 제어는 없습니다.',
          },
          {
            '이점': '활발한 커뮤니티 도구',
            '실제 사용에서의 의미': 'ComfyUI-AnimateDiff-Evolved와 AUTOMATIC1111 확장 모두 활발히 유지 관리되며 폭넓게 문서화되어 있습니다.',
            '한계 / 유의사항': '공식 기본 저장소 자체는 완성된 최종 사용자용 앱이 아니라 연구용 코드베이스입니다 — 사용 가능한 워크플로를 위해 커뮤니티 통합에 의존하게 됩니다.',
          },
          {
            '이점': '속도를 위한 AnimateDiff-Lightning',
            '실제 사용에서의 의미': '증류 버전은 20-50스텝 대신 1-8스텝으로 생성하여 생성 시간을 크게 단축합니다.',
            '한계 / 유의사항': '확산 스텝 수가 적을수록 그 속도를 대가로 약간의 품질과 디테일을 희생합니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'AnimateDiff vs. 대안',
        columns: ['도구', '접근 방식', '적합한 대상', 'AnimateDiff 대비 주요 한계'],
        rows: [
          {
            '도구': 'AnimateDiff',
            '접근 방식': '기존 SD1.5/SDXL 체크포인트에 모션 모듈을 연결, 재학습 불필요',
            '적합한 대상': '이미 보유한 체크포인트나 LoRA를 재사용하는 스타일화되거나 애니메 스타일의 움직임 루프',
            'AnimateDiff 대비 주요 한계': '—',
          },
          {
            '도구': 'Stable Video Diffusion (SVD)',
            '접근 방식': 'Stability AI가 별도로 학습한 이미지-투-비디오 모델로, Stable Diffusion의 텍스트-투-이미지 계열과는 다른 계보',
            '적합한 대상': '체크포인트에서 스타일이 일치하는 클립을 생성하기보다, 이미 존재하는 이미지 한 장을 짧은 움직임으로 애니메이션화',
            'AnimateDiff 대비 주요 한계': 'AnimateDiff처럼 특정 체크포인트나 LoRA의 정확한 시각적 스타일을 보존하지 않습니다 — 입력 이미지를 애니메이션화할 뿐, 텍스트-투-이미지 모델이 학습한 스타일을 재사용하지 않습니다.',
          },
          {
            '도구': 'Deforum',
            '접근 방식': '더 오래된 키프레임 및 파라미터 보간 기법 — 연속된 확산 프레임 사이에 적용되는 2D/3D 카메라 변환',
            '적합한 대상': '카메라 경로 기반의 "무한 줌" 스타일 애니메이션과 느린 파라미터 드리프트',
            'AnimateDiff 대비 주요 한계': '학습된 움직임 사전 지식이 없습니다 — 일관성은 학습된 시간적 어텐션 모듈이 아니라 프레임 간 파라미터 보간에 의존하므로, 피사체의 움직임(카메라 움직임과 대비하여)이 훨씬 부자연스럽습니다.',
          },
          {
            '도구': '상업용 클라우드 영상 모델(Runway, Pika, Sora급 모델)',
            '접근 방식': '구독 또는 크레딧을 통한 독점적인 클라우드 호스팅 영상 생성',
            '적합한 대상': '더 길고, 충실도가 높으며, 시간적으로 더 일관된 영상, 그리고 사실적이거나 영화적인 결과물',
            'AnimateDiff 대비 주요 한계': '지속적인 구독 비용, 로컬 프라이버시 부재, 특정 오픈소스 체크포인트의 정확한 학습 스타일을 재사용할 방법이 없음 — 최신 로컬 영상 모델과의 전체 비용·품질 비교는 [로컬 AI 영상 생성 vs. 클라우드](/ko/power-local-llm/local-ai-video-generation-vs-cloud)를 참고하세요.',
          },
        ],
        note: '이 표는 점수를 매긴 순위가 아니라 접근 방식과 적합성을 비교한 것입니다 — 각 도구는 서로 다른 과제를 해결합니다. 더 긴 클립 길이에서 상업용 클라우드 영상과 더 직접적으로 경쟁하는 최신 네이티브 영상 모델(Wan 2.2, LTX-2, HunyuanVideo)에 대해서는 이 AnimateDiff 중심 가이드 대신 위에 링크된 전용 비교 글을 참고하세요.',
      },
      license: {
        id: 'license',
        title: 'AnimateDiff는 상업적으로 무료로 이용할 수 있나요?',
        content: [
          '**AnimateDiff 코드 자체는 Apache 2.0 라이선스로 배포되지만, 프로젝트 자체 README에는 릴리스가 학술적 용도를 위한 것이라고 명시되어 있습니다 — 따라서 추가 확인 없이 "상업적 이용에 완전히 자유롭다"고 말하는 것은 정확하지 않습니다.** 이것이야말로 피해야 할 과장된 주장의 전형입니다: Apache 2.0은 일반적으로 코드의 상업적 이용을 허용하지만, 저자들이 그 위에 덧붙인 학술적 용도 프레이밍은 결과물을 판매하거나 상업적으로 배포하려는 독자가 Apache 2.0 라벨만 믿지 말고 저장소의 현재 라이선스 조건을 직접 읽어야 함을 의미합니다.',
          '두 번째로 별도의 라이선스 계층이 애니메이션화하는 Stable Diffusion 체크포인트에 적용됩니다. 원본 Stable Diffusion 1.5 체크포인트(및 이로부터 파생된 많은 커뮤니티 파인튜닝)는 CreativeML OpenRAIL-M 라이선스로 배포되며, 이는 상업적 이용을 허용하지만 자체적인 사용 기반 제한(예: 특정 범주의 유해 콘텐츠 생성 금지)을 수반합니다 — 이는 AnimateDiff 자체 라이선스와는 별개이며, 그것에 의해 무효화되지 않습니다.',
          '실무적으로는: 상업적 이용 전에 두 라이선스를 모두 확인하세요 — 저장소에 명시된 AnimateDiff의 릴리스 조건, 그리고 애니메이션화하는 구체적인 체크포인트에 첨부된 라이선스(원본 SD1.5 체크포인트의 경우 OpenRAIL-M 조건, 또는 특정 커뮤니티 파인튜닝이 명시하는 라이선스 — 파인튜닝은 기본 모델과 다른 조건을 가질 수 있으므로)입니다. 이는 법률 자문이 아닙니다. 상업적 배포 전에 현재 라이선스 조문이나 법률 전문가에게 상담하시기 바랍니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'AnimateDiff를 사용해야 할 사람',
        items: [
          '**이미 마음에 드는 Stable Diffusion 체크포인트나 LoRA를 보유한 독자.** AnimateDiff의 핵심 가치는 아무것도 재학습하지 않고 바로 그 시각적 스타일을 움직임으로 재현하는 것입니다.',
          '**스타일화되거나 애니메 스타일, 또는 일러스트 느낌의 움직임 루프를 원하는 독자.** 이 기술은 Stable Diffusion 체크포인트가 이미 강점을 가진 콘텐츠 종류 — 사실주의가 아닌 아트 스타일 — 에서 가장 잘 작동합니다.',
          '**ComfyUI나 AUTOMATIC1111에 익숙한 독자.** 설치 과정은 두 인터페이스 중 하나에 대한 익숙함을 전제로 합니다. 전용 독립형 AnimateDiff 앱은 존재하지 않습니다.',
          '**장편 영상이 아닌 짧은 클립(수 초)을 원하는 독자.** 기본 16프레임 윈도우는 서사적 시퀀스보다는 루프, GIF, 짧은 스타일화된 클립에 더 잘 맞습니다.',
          '**지속적인 비용을 원하지 않는, 중급 사양 소비자용 GPU(8GB 이상 VRAM)를 보유한 독자.** 로컬 생성에는 구독료도, 크레딧도, 클라우드 계정도 필요 없습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'AnimateDiff를 사용하지 말아야 할 사람',
        items: [
          '**사실적이고 장편이며 정밀한 카메라 제어가 필요한 영상이 필요한 독자.** Wan 2.2나 LTX-2 같은 로컬 네이티브 영상 모델, 또는 Runway나 Pika 같은 상업용 모델이 이를 더 잘 처리합니다. [로컬 AI 영상 생성 vs. 클라우드](/ko/power-local-llm/local-ai-video-generation-vs-cloud)를 참고하세요.',
          '**이미 마음에 드는 Stable Diffusion 체크포인트가 없는 독자.** 애니메이션화할 가치가 있는 출발점이 없다면, 텍스트 프롬프트에서 직접 생성하는 네이티브 영상 모델에 비해 얻을 이점이 거의 없습니다.',
          '**라이선스 문서를 읽지 않고도 보장된 상업적 이용 권리가 필요한 독자.** AnimateDiff 자체 README에 있는 학술적 용도 프레이밍에 더해 별도의 체크포인트 라이선스까지 있다는 것은, 이것이 별도 확인이 필요 없는 "상업적으로 무료" 도구가 아니라는 뜻입니다 — 위의 라이선스 명확히 하기 섹션을 참고하세요.',
          '**로컬 GPU가 없거나 약 8GB VRAM 미만의 카드를 가진 독자.** SD1.5 기반 AnimateDiff는 8GB부터 실용적이지만, 그 등급 미만의 독자는 대신 [클라우드 GPU 대여](/ko/power-local-llm/cloud-gpu-rental-guide-2026)나 클라우드 영상 서비스를 고려해야 합니다.',
          '**원클릭 앱 경험을 원하는 독자.** ComfyUI와 AUTOMATIC1111 모두 노드 그래프나 확장 설정에 어느 정도 익숙함을 전제로 합니다 — 완성도 높은 일반 소비자 제품이 아닙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'AnimateDiff란 무엇인가요?',
            a: 'AnimateDiff는 기존 Stable Diffusion 1.5 또는 SDXL 체크포인트를 해당 체크포인트를 재학습하지 않고도 애니메이션화할 수 있게 해주는 오픈소스 모션 모듈입니다. Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning"(ICLR 2024 Spotlight, arXiv:2307.04725)의 공식 구현이며, github.com/guoyww/AnimateDiff에서 Apache 2.0 코드 라이선스로 유지 관리됩니다.',
          },
          {
            q: 'AnimateDiff는 무료인가요?',
            a: '네 — 코드는 무료로 다운로드하여 실행할 수 있으며, 자신의 하드웨어에서 로컬 생성을 하는 데 구독료가 필요 없습니다. 생성 비용은 이미 보유한 전기료와 GPU 사용 시간일 뿐, AnimateDiff 자체에 내는 요금이 아닙니다.',
          },
          {
            q: 'AnimateDiff는 상업적 이용에도 무료인가요?',
            a: '자동으로 그렇지는 않습니다. 코드는 Apache 2.0 라이선스이지만, 프로젝트 자체 README는 릴리스가 학술적 용도를 위한 것이라고 명시하며, 애니메이션화하는 Stable Diffusion 체크포인트도 대개 별도의 자체 라이선스(SD1.5의 경우 흔히 CreativeML OpenRAIL-M)를 가지는데, 이는 상업적 이용을 허용하지만 자체 콘텐츠 제한이 있습니다. 상업적 배포 전에 두 라이선스 문서를 모두 확인하세요 — 이는 법률 자문이 아닙니다.',
          },
          {
            q: 'ComfyUI에서 AnimateDiff는 어떻게 설치하나요?',
            a: 'ComfyUI Manager를 통해 커뮤니티가 유지 관리하는 ComfyUI-AnimateDiff-Evolved 노드([github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved))를 설치하거나 custom_nodes 폴더에 클론한 뒤, 텍스트-투-비디오 워크플로를 구성하기 전에 모션 모듈 체크포인트(SD1.5용 v3_sd15_mm.ckpt 또는 SDXL용 mm_sdxl_v10_beta.ckpt)를 해당 노드의 models 폴더에 다운로드하세요.',
          },
          {
            q: 'AnimateDiff는 AUTOMATIC1111에서도 작동하나요?',
            a: '네, 커뮤니티가 유지 관리하는 sd-webui-animatediff 확장([github.com/continue-revolution/sd-webui-animatediff](https://github.com/continue-revolution/sd-webui-animatediff))을 통해 WebUI의 Extensions 탭에서 설치합니다. 표준 txt2img 탭 아래에 AnimateDiff 패널이 추가됩니다.',
          },
          {
            q: 'AnimateDiff에는 VRAM이 얼마나 필요한가요?',
            a: 'SD1.5 기반 AnimateDiff는 중간 해상도와 모듈의 기본 16프레임 윈도우에서 기본적인 텍스트-투-비디오 생성 시 일반적으로 8-12GB VRAM으로 실행됩니다. SDXL 지원에는 훨씬 더 많은 용량이 필요합니다 — 공식 저장소는 사용하는 체크포인트와 설정에 따라 SDXL 추론이 일반적으로 약 13GB VRAM을 필요로 한다고 명시합니다. 더 높은 해상도, 더 긴 클립, 또는 ControlNet을 겹치면 요구사항이 더 높아집니다.',
          },
          {
            q: 'AnimateDiff 클립은 얼마나 긴가요?',
            a: '모션 모듈의 기본 학습 윈도우는 16프레임 — 8fps에서 약 2초입니다. 커뮤니티의 슬라이딩 윈도우 기법은 중첩되는 16프레임 윈도우를 처리하고 블렌딩하여 전체 길이를 늘릴 수 있지만, 시간적 일관성은 각 윈도우 경계에서 일반적으로 저하되며, 약 30-60프레임을 크게 넘어서면 결과가 신뢰하기 어려워집니다.',
          },
          {
            q: 'Motion LoRA란 무엇인가요?',
            a: 'Motion LoRA는 mm_sd_v15_v2 모션 모듈과 호환되는 작은(약 77MB) 추가 가중치 파일로, 생성 결과를 8가지 기본적인 카메라 움직임 중 하나로 유도합니다: 줌 인, 줌 아웃, 좌측 팬, 우측 팬, 상단 틸트, 하단 틸트, 시계 방향 롤, 반시계 방향 롤입니다. 이미지 LoRA가 체크포인트와 함께 불러와지는 것과 같은 방식으로 모션 모듈과 함께 불러와집니다.',
          },
          {
            q: '왜 제 AnimateDiff 결과물이 깜빡이나요?',
            a: '깜빡임 — 특히 얼굴과 세부 디테일에서 — 은 설정 오류가 아니라 널리 보고된 한계입니다. 시간적 일관성은 빠른 움직임, 저해상도의 세밀한 얼굴, 여러 피사체가 있는 복잡한 배경에서 가장 자주 무너집니다. 이후 모션 모듈(v2, v3)과 motion LoRA가 이를 줄여주지만 완전히 없애지는 못합니다.',
          },
          {
            q: 'AnimateDiff-Lightning이란 무엇인가요?',
            a: 'AnimateDiff-Lightning은 ByteDance가 발표한 별도의 증류 버전(Lin & Yang, "AnimateDiff-Lightning: Cross-Model Diffusion Distillation", arXiv:2403.12706)으로, 점진적 적대적 확산 증류를 사용해 일반적인 20-50스텝 대신 단 1, 2, 4, 8스텝만으로 생성합니다 — 훨씬 빠르지만 품질과 디테일 면에서 다소 손해를 봅니다.',
          },
          {
            q: 'AnimateDiff는 Stable Video Diffusion과 어떻게 다른가요?',
            a: 'AnimateDiff는 기존 Stable Diffusion 텍스트-투-이미지 체크포인트에 모션 모듈을 연결하여 해당 체크포인트의 정확한 시각적 스타일을 보존합니다. Stable Video Diffusion(SVD)은 Stability AI가 별도로 학습한 이미지-투-비디오 모델로 계보가 다릅니다 — 텍스트-투-이미지 체크포인트가 학습한 스타일을 재사용하는 대신 주어진 입력 이미지를 애니메이션화합니다. 특정 체크포인트나 LoRA의 룩을 유지하고 싶다면 AnimateDiff를, 이미 존재하는 특정 이미지를 애니메이션화하고 싶다면 SVD를 선택하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'AnimateDiff는 아무것도 재학습하지 않고 자신의 하드웨어를 벗어나지 않고도, 이미 마음에 드는 Stable Diffusion 체크포인트를 애니메이션화하는 가장 직접적인 방법으로서 그 위치를 확립했습니다. 이 트레이드오프는 실제적이고 구체적입니다: 클립은 기본적으로 짧고(16프레임, 약 2초, 연장은 가능하지만 길이가 늘어날수록 품질이 저하됨), 움직임 범위와 프롬프트 이행도는 동일 체크포인트의 정지 이미지와 비교해 다소 저하되며, 상업적 이용 전에는 라이선스 상황에 대해 두 가지 별도 확인이 필요합니다 — Apache 2.0 코드 위에 얹힌 프로젝트 자체의 학술적 용도 프레이밍, 그리고 애니메이션화하는 체크포인트가 지닌 라이선스입니다. 이미 스타일화된 SD1.5나 SDXL 체크포인트를 보유하고 있으며 지속적인 비용 없이 자신의 GPU에서 짧고 스타일이 일치하는 움직임 루프를 원하는 독자에게는, ComfyUI-AnimateDiff-Evolved나 AUTOMATIC1111 확장을 통한 AnimateDiff가 실용적인 출발점입니다. 더 길고 일관되거나 사실적인 영상이 필요한 독자는 대신 [로컬 AI 영상 생성 vs. 클라우드](/ko/power-local-llm/local-ai-video-generation-vs-cloud)에서 최신 네이티브 영상 모델과 비교해 보아야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[AnimateDiff 공식 저장소](https://github.com/guoyww/AnimateDiff) — 코드, 모션 모듈 다운로드, 라이선스 조건.',
          '[Guo et al., "AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning", ICLR 2024 Spotlight, arXiv:2307.04725](https://arxiv.org/abs/2307.04725) — 원 논문.',
          '[Lin & Yang(ByteDance), "AnimateDiff-Lightning: Cross-Model Diffusion Distillation", arXiv:2403.12706](https://arxiv.org/abs/2403.12706) — 소수 스텝 증류 버전.',
          '[ComfyUI-AnimateDiff-Evolved(Kosinkadink)](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) — 커뮤니티 ComfyUI 통합.',
          '[sd-webui-animatediff(continue-revolution)](https://github.com/continue-revolution/sd-webui-animatediff) — 커뮤니티 AUTOMATIC1111 확장.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[2026 로컬 AI 영상 생성 vs. 클라우드](/ko/power-local-llm/local-ai-video-generation-vs-cloud) — AnimateDiff보다 더 길거나 일관된 클립이 필요한 독자를 위해 최신 네이티브 영상 모델(Wan 2.2, LTX-2, HunyuanVideo)을 상업용 클라우드 영상과 비교합니다.',
          '[로컬 AI 이미지 생성 vs. 클라우드](/ko/power-local-llm/local-ai-image-generation-vs-cloud) — 동일한 로컬 vs. 클라우드 결정의 정지 이미지 쪽 이야기입니다. 그곳에서 선택한 체크포인트가 바로 AnimateDiff가 애니메이션화하는 대상입니다.',
          '[2026 로컬 LLM용 최고의 GPU 구매 가이드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 로컬 언어 모델과 마찬가지로 AnimateDiff에도 적용되는 VRAM 등급별 하드웨어 가이드입니다.',
          '[2026 클라우드 GPU 대여 가이드](/ko/power-local-llm/cloud-gpu-rental-guide-2026) — 로컬에 충분한 GPU가 없지만 그래도 AnimateDiff 워크플로를 실행하고 싶은 독자를 위한 가이드입니다.',
          '[2026 로컬 LLM 소프트웨어 디렉토리](/ko/power-local-llm/local-llm-software-directory-2026) — AnimateDiff가 속한 이미지 생성 및 비주얼 AI 계층을 포함한 전체 로컬 AI 도구 디렉토리입니다.',
        ],
      },
    },
  },
}
