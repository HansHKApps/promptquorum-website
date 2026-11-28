// Power Local LLM — Local AI Video Generation vs. Cloud 2026: Wan 2.2, LTX-2, HunyuanVideo Compared
// Slug: local-ai-video-generation-vs-cloud
// Category: Image & Video Generation

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-02-21',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'Invideo vs Local AI Video: One Costs a GPU Plus Your Weekend — the Other a Cloud Subscription',
    seoTitle: 'Cloud vs Local AI Video 2026: invideo vs Wan 2.2 & LTX-2',
    intro:
      'There are two doors into AI video in 2026. Door one is local: free, open video models running on your own GPU — unlimited generations, with inference running on your own hardware (model downloads and update checks still use the network), no subscription, but you build the entire workflow yourself. Door two is cloud: invideo, a hosted service that markets an agent-driven route from a script or idea to an edited video, straight from your browser. Neither door is "better." This guide gives you the license fine print most comparisons skip, the real hardware requirements, and a decision tool that maps your situation to a recommendation.',
    metaDescription:
      'Local AI video models (Wan 2.2, LTX-2, HunyuanVideo) are free to download if your GPU can run them. How they compare with invideo\'s cloud service.',
    twitterDescription:
      'Cloud vs local AI video in 2026: invideo is a hosted subscription service. Wan 2.2, LTX-2, HunyuanVideo are free to download for your own GPU — if it\'s big enough.',
    audience:
      'Creators and developers deciding between free local video generation on their own GPU and invideo\'s all-in-one cloud pipeline — covers hardware requirements, licensing fine print, and workflow tradeoffs.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI video generation',
    targetKeywords: [
      'cloud vs local ai video',
      'invideo vs local ai video',
      'wan 2.2 vs ltx-2',
      'best open source video model 2026',
      'hunyuanvideo local',
      'run ai video generation locally',
      'wan 2.2 vram requirements',
      'ltx-2 license',
      'local video generation gpu',
    ],
    current_models_mentioned: [
      'Wan 2.2 (T2V-A14B, I2V-A14B, TI2V-5B)',
      'LTX-2.5 / LTX-2.3',
      'HunyuanVideo 1.5',
      'MiniMax H3',
      'Kling 3.0',
      'Veo 3.1',
      'Seedance 2.5',
    ],
    current_hardware_mentioned: ['6 GB VRAM', '8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'RTX 3060', 'RTX 3090', 'RTX 4090'],
    leadAnswerBlock:
      '**For most people with a 12GB+ GPU, Wan 2.2 is a strong local AI video model in 2026** — Apache 2.0 licensed with no revenue caps or territory restrictions, and free to download (hardware and electricity still cost money). **Invideo is the better choice if you don\'t have that GPU, or want a finished narrated video rather than a raw clip** — it is a browser-based hosted service whose paid plans (Starter, Plus, Max) differ in model access; check its live pricing page. **HunyuanVideo 1.5 is a community favorite for a cinematic look, but its license excludes the EU, UK, and South Korea entirely** — skip it if you\'re in those regions.',
    quickAnswerTop: {
      en: {
        question: 'Should I generate AI video locally or use invideo\'s cloud pipeline?',
        answer:
          'Generate locally if you have a 12GB+ GPU, want to generate without per-clip fees, and value privacy — Wan 2.2 (Apache 2.0, permissive commercial use — check the model card) is a sensible starting point. Use invideo if you don\'t have suitable hardware, don\'t want to manage the setup, or need a complete finished video (script, voiceover, music, subtitles) rather than a raw clip — it is a hosted subscription service with a free plan; check current prices on its pricing page.',
        bullets: [
          'Under 12 GB VRAM → invideo is the practical choice; below this tier, local options are limited to quantized, entry-quality output.',
          '12 GB VRAM → LTX-Video 0.9.5, a practical local option at this tier.',
          '16–24 GB+ VRAM → Wan 2.2 (strong quality, Apache 2.0 — permissive commercial use with no revenue threshold or territory exclusion (standard Apache terms such as attribution notices apply; check the model card)) or LTX-2 (speed + synchronized audio).',
          'In the EU, UK, or South Korea → HunyuanVideo 1.5\'s license excludes you; use Wan 2.2 or LTX-2 instead.',
          'Need a finished narrated video, not a raw clip → local models only generate silent (LTX excepted) 5–20 second clips; invideo offers a hosted workflow around the clip; check its pricing page for what each plan includes.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Why 2026 Is a Strange Moment for AI Video', anchor: '#market-context' },
      { label: 'The Local Door: Three Free Models on Your Own GPU', anchor: '#local-models' },
      { label: 'Wan 2.2 (Alibaba)', anchor: '#wan-2-2' },
      { label: 'LTX-2 (Lightricks)', anchor: '#ltx-2' },
      { label: 'HunyuanVideo 1.5 (Tencent)', anchor: '#hunyuanvideo' },
      { label: 'One to Watch: MiniMax H3', anchor: '#one-to-watch' },
      { label: 'The Hardware Gate', anchor: '#hardware-gate' },
      { label: 'The DIY Reality: What "Free" Asks of You', anchor: '#diy-reality' },
      { label: 'The Cloud Door: What invideo Bundles', anchor: '#invideo-bundle' },
      { label: 'Cloud or Local: Which Door Is Yours?', anchor: '#decision-guide' },
      { label: 'Who Should Choose invideo?', anchor: '#who-should-choose' },
      { label: 'See Them in Action', anchor: '#video-roundup' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Try Before You Decide', anchor: '#try-before-you-decide' },
      { label: 'The Verdict', anchor: '#verdict' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Wan 2.2 is a strong local video model under the permissive Apache 2.0 license.** Permissive commercial use with no revenue threshold or territory exclusion (standard Apache terms such as attribution notices apply; check the model card).',
          '**Invideo is a hosted alternative** with a free plan and paid Starter, Plus, and Max plans; its pricing page lists access to all models, including all Seedance models, for Plus and Max. Prices vary — check the live page.',
          '**HunyuanVideo 1.5\'s license explicitly excludes the EU, UK, and South Korea** — for both the model and its outputs. Readers in those regions should use Wan 2.2 or LTX-2 instead.',
          '**LTX-2 is positioned as a speed-focused model and is the only one of this local trio with built-in synchronized audio**, free commercially for companies under $10M annual revenue.',
          '**12GB VRAM is the realistic floor for serious local video generation.** Below that, invideo becomes the more practical option.',
          '**Local models generate raw clips of 5–20 seconds (silent except for LTX-2), not finished videos.** Script, voiceover, music, subtitles, and editing are separate tools you assemble yourself — invideo aims to bring these steps into one hosted workflow.',
          '**No open-weights "Wan 2.7" repository appeared on the official Wan GitHub page when checked on 27 November 2026.** Alibaba announced [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) in April 2026 as a model available on Alibaba Cloud. Be cautious with third-party pages offering "Wan 2.7 weights".',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Why 2026 Is a Strange Moment for AI Video',
        content:
          'The proprietary video market has been turbulent. In March 2026, [Engadget reported](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html), citing The Information, that ByteDance had paused the global rollout of Seedance 2.0 after cease-and-desist letters from Disney and Paramount Skydance. PromptQuorum has not independently verified that report, and availability has changed since: invideo\'s pricing page now lists Seedance 2.0 and 2.5.\n\nThat kind of churn is what makes both doors attractive. Open models you have already downloaded keep running regardless of vendor changes. A multi-model service such as invideo offers several models in one account, but which models it offers can change, so your workflow is not guaranteed to stay unaffected.',
      },
      localModels: {
        id: 'local-models',
        title: 'The Local Door: Three Free Models on Your Own GPU',
        content:
          'This guide compares three widely used open-weights systems for local video generation. All three run through ComfyUI, a node-based interface installed on your own machine — not a chat-style tool like Ollama. These are diffusion models, not LLMs.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 is a strong all-around local video model in 2026 — Apache 2.0, high quality, no territory restrictions — while LTX-2 focuses on speed and adds synchronized audio, and HunyuanVideo 1.5 is a community favorite for a cinematic look but excludes EU/UK/South Korea users by license.' },
          { type: 'plain-terms', text: 'If you just want one answer: get a 12GB+ GPU and run Wan 2.2. It has high quality and a permissive Apache 2.0 license.' },
        ],
        columns: ['Model', 'License', 'VRAM', 'Output', 'Standout feature'],
        rows: [
          { 'Model': 'Wan 2.2 (Alibaba)', 'License': 'Apache 2.0 — permissive, no revenue threshold or territory exclusion', 'VRAM': '6–8GB (5B) / 15–25GB (14B)', 'Output': '480p/720p, ~5s clips', 'Standout feature': '14B and compact 5B variants' },
          { 'Model': 'LTX-2 (Lightricks)', 'License': 'LTX Community License — free under $10M revenue', 'VRAM': '18–20GB quantized, 32GB+ full', 'Output': '480p–1080p, 5–20s, with audio', 'Standout feature': 'Synced audio+video (only one of these three)' },
          { 'Model': 'HunyuanVideo 1.5 (Tencent)', 'License': 'Tencent Community License — excludes EU/UK/South Korea', 'VRAM': '14GB minimum, 24GB comfortable', 'Output': '480p/720p, up to 10s', 'Standout feature': 'Cinematic lighting; 14GB minimum with offloading' },
        ],
        note:
          '⚠️ Caution: no open-weights "Wan 2.7" repository appeared on the [official Wan GitHub page](https://github.com/Wan-Video) when checked on 27 November 2026; Alibaba announced [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) as available on Alibaba Cloud. Be cautious with pages offering "Wan 2.7 open weights" and download only from official GitHub or Hugging Face repositories.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — strong quality, Apache 2.0',
        content:
          'Wan 2.2 is widely used among open video models, with many community derivatives built on top (see its Hugging Face model page for current download counts). It ships in three variants — T2V-A14B and I2V-A14B (mixture-of-experts, 27B total / 14B active parameters), plus a compact TI2V-5B that handles both text- and image-to-video on as little as 6–8GB VRAM. The 14B tier needs 15GB (GGUF Q3) to 25GB (FP8); the official unquantized command asks for 80GB. Its license is Apache 2.0 — genuinely free, permissive commercial use with no revenue threshold or territory exclusion (standard Apache terms such as attribution notices apply; check the model card).\n\n**Speed, concretely:** the [official Wan 2.2 repository](https://github.com/Wan-Video/Wan2.2) says that, without specific optimization, the compact TI2V-5B model can generate a 5-second 720p clip in under 9 minutes on a single consumer-grade GPU. That is the developer\'s figure, which PromptQuorum has not verified, and it does not describe the 14B variants. The repository says its TI2V-5B example command runs on a GPU with at least 24GB VRAM (for example an RTX 4090), so do not expect that time on a 6–8GB card. A 20-second sequence means generating 4 separate 5-second clips, which is under 36 minutes of raw generation if each takes the stated time, plus manual editing to join them. This is arithmetic on the per-clip figure, not a measured 20-second benchmark.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — speed plus synchronized sound',
        content:
          'LTX-2 is the only open model in this trio that generates synchronized audio and video in a single pass — footsteps, ambience, and effects arrive with the picture. It is also positioned as a fast model, though it is not the lightest on VRAM (see the figures below). The architecture is a 22B diffusion transformer; LTX-2.3 (March 2026) remains fully supported alongside the current LTX-2.5 release. The license is the LTX Community License — free for commercial use if your company\'s total revenue is under $10M per year, with a paid commercial license required above that threshold. (Some third-party write-ups incorrectly call it Apache 2.0 — the [official license page](https://ltx.io/model/license) is the only reliable source.) Hardware needs run 18–20GB VRAM quantized, 32GB+ at full precision; on 12GB cards, the older LTX-Video 0.9.5 remains the practical choice.\n\n**Speed, concretely:** LTX-2 is often described as fast, but we found no independently verified minutes-per-clip figure for an RTX 4090, so we do not quote one. For the newer LTX-2.5, the developer reports a 10-second 720p image-to-video clip in 6.8 seconds on two datacenter-class NVIDIA GB200 superchips, not a consumer GPU ([VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights), which describes the figure as vendor-reported and not independently verified). It says nothing about what a home GPU will deliver.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — the cinematic look, with a legal catch',
        content:
          'Tencent\'s 8.3B model, released November 2025, is a community favorite for cinematic lighting and texture, with modest VRAM needs: 14GB minimum with offloading, 24GB comfortable. It generates 480p/720p natively, up to 1080p via built-in super-resolution, clips up to 10 seconds.\n\n**Speed, concretely:** Tencent\'s [repository](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) says that, with its 480p image-to-video step-distilled model, a single RTX 4090 can generate a video within 75 seconds. That is the developer\'s figure, which PromptQuorum has not verified. The note does not state the clip length, so we do not project it to longer sequences.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'License warning — read before downloading. HunyuanVideo 1.5 uses the Tencent Hunyuan Community License, not Apache 2.0. The license does not apply in the European Union, the United Kingdom, or South Korea — per the license text, users in those regions are not authorized to use the model or its outputs. It also requires a separate license from Tencent if your products had more than 100 million monthly active users in the month before the model\'s release date, and it bars using the model or its outputs to improve other AI models (other than Tencent Hunyuan and its derivatives). If you\'re in the EU, UK, or South Korea, skip this model and consider Wan 2.2 (Apache 2.0, permissive commercial use with no territory exclusion) instead.',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'One to Watch: MiniMax H3',
        content:
          'Released August 3, 2026, MiniMax H3 is a 33.1B omni-modal model with native stereo audio, day-one ComfyUI support, and quantized versions that run on an RTX 3060. Two caveats before treating it as a fourth pick: the local release caps at 768p (the full 2K pipeline stays hosted-only), and its [Community License](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE) excludes the EU, the UK, South Korea, and the US from its licensed territory and requires separate authorization above $20M in yearly revenue — read it before committing (this is not legal advice). Early signs are strong, but a recent release and production-ready are different things.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'The Hardware Gate',
        content: [
          'Local video generation is free the way a puppy is free: the model weights cost nothing, but the GPU is the real price of entry. Skip local generation entirely if your GPU has under 12GB VRAM and you\'re not planning to upgrade — below that tier only the quantized 5B variant of Wan 2.2 is usable, at entry quality, and a cloud platform is likely the easier route.',
          'Not sure what any of this means for your machine? These guides break it down: [VRAM Calculator](/local-llms/vram-calculator-local-llm) for exact requirements per model, [How Much VRAM Do You Need?](/local-llms/how-much-vram-local-llm) for charts across model sizes, [Best GPUs for Local AI](/local-llms/best-gpus-for-local-llms) and [Best Budget GPUs](/local-llms/best-budget-gpus-local-llm) for hardware picks, and [GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon) for platform comparisons. One honest caveat: those guides use the LLM VRAM formula (parameters × bits ÷ 8). Video diffusion models also scale VRAM with resolution and clip length, so treat their numbers as a floor, not a ceiling, for video workloads.',
        ],
        columns: ['Your GPU', 'What you can run'],
        rows: [
          { 'Your GPU': '6–8GB VRAM', 'What you can run': 'Wan 2.2 TI2V-5B (quantized) — usable, entry quality' },
          { 'Your GPU': '12GB VRAM', 'What you can run': 'LTX-Video 0.9.5 — a practical option at this tier' },
          { 'Your GPU': '16GB VRAM', 'What you can run': 'HunyuanVideo 1.5 (license permitting), Wan 2.2 14B at GGUF Q3' },
          { 'Your GPU': '24GB+ VRAM', 'What you can run': 'All three: Wan 2.2 14B (quantized), LTX-2 quantized, HunyuanVideo 1.5 (license permitting)' },
        ],
        note:
          'Rough GPU cost, from the [InsiderLLM GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US eBay listing data, not a quote or offer): used RTX 3090 sold listings are about $1,500–1,725 (median $1,650; 225 sold listings, 13–23 November 2026; dated 2026-11-23). Used RTX 4090 sold listings were $2,575–3,010 (median $2,860) in the figure dated 2026-10-15. GPU prices move — verify current pricing before buying rather than trusting these figures past a few months.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'What Running Local Video Generation Actually Involves',
        content:
          'With local models, you are not installing a video tool — you are assembling a pipeline.\n\n**The generation setup.** ComfyUI is node-based: you build, or import and debug, a workflow graph of loaders, samplers, and decoders. Expect CUDA version mismatches, PyTorch pins, and the occasional `flash_attn` install error before your first frame renders.\n\n**The prompting.** Video models need structured prompts — shot type, camera movement, lighting, subject action — not one-liners. A typical ComfyUI workflow gives you no system-prompt layer. The [Wan 2.2](https://github.com/Wan-Video/Wan2.2) and [HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) repositories offer prompt extension or rewriting, but it relies on a separate language model or API that you set up yourself. Our guides on [system prompts vs. user prompts](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) and [prompt engineering for local models](/local-llms/prompt-engineering-for-local-models) cover fundamentals that transfer directly to video prompting.\n\n**Everything around the clip.** Local models output raw, silent (LTX excepted) clips of 5–20 seconds. Script, voiceover, music, stock footage, subtitles, and editing are each separate tools you choose, install, and wire together yourself.\n\nIf your goal is a short, style-matched motion loop from an SD1.5/SDXL checkpoint you already use — rather than a native video model — [AnimateDiff](/power-local-llm/animatediff-video-generation-guide) is a lighter-weight, checkpoint-based alternative worth comparing before assembling a full native-video pipeline.',
        promptExamples: [
          { label: 'Weak (one-liner)', text: 'A dog on a beach' },
          { label: 'Structured (what video models need)', text: 'Golden retriever sprinting along a wet shoreline at golden hour, low tracking shot following from the side, shallow depth of field, warm backlight, gentle slow motion, cinematic 24fps' },
        ],
        note:
          'Subject and action, camera behavior, lighting, style — four ingredients in one sentence is the difference between a slot machine and a camera. If that DIY stack sounds exciting, the local door is yours. If it sounded exhausting, keep reading.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'The Cloud Door: What invideo Bundles',
        highlight: true,
        itemHeadings: true,
        content:
          'Invideo is one example of the cloud door — not the only one, and it\'s worth knowing how it differs from the others before assuming "cloud" means one thing. Per their public descriptions (PromptQuorum has not tested any of these three services), Runway integrates directly into professional editors (Premiere Pro, Final Cut, DaVinci Resolve), aimed at hybrid AI-plus-editor workflows rather than a finished, assembled video. Per the same descriptions, Luma AI\'s Dream Machine specializes in native 16-bit HDR output for VFX compositing pipelines (After Effects, Nuke) — a different audience entirely. Per the same descriptions, Pika focuses on fast raw clip generation; PromptQuorum has not verified whether it offers script, voiceover, or stock-footage assembly, so check that before relying on it for the work around the clip. In its own description, invideo combines storyboarding, script writing, and timeline editing with access to generation models such as Kling, Veo, and Seedance.\n\nInvideo is not a single video model but a hosted service. When checked on 27 November 2026, [its homepage](https://invideo.io/) presented an agent-driven video editor with storyboarding from a script or idea, script writing, and a multitrack timeline, and its site also lists AI voice and music tools. PromptQuorum has not tested it, so check that voiceover and subtitles work the way you need. It runs in the browser — your GPU is irrelevant.\n\nFor anyone who wants to start making videos today rather than researching GPUs and quantization formats, invideo is the practical choice: no local hardware requirement, no ComfyUI installation or CUDA troubleshooting, and one hosted workspace for the steps around the clip. It\'s particularly well suited to creators who care more about the finished video than about controlling the underlying generation model — and since a free plan exists, you can find out whether that fits before spending anything.\n\nThree things stand out for this comparison:\n\n- **Several models, one account.** invideo\'s pricing page lists access to all models, including all Seedance models, for Plus and Max; Starter covers selected models and not Seedance 2.5. The line-up can change.\n- **Agent access is built in.** invideo offers an [MCP server](https://invideo.io/ai/mcp) that lets AI agents work in its timeline editor.\n- **There is a free plan.** invideo\'s [plan-limits page](https://invideo.io/help/billing/plan-limits/) describes a weekly limit for it; check the export and watermark rules before relying on it.\n\n**Speed, concretely — and the honest catch:** invideo says raw generation is fast. But invideo\'s own FAQ puts full end-to-end production of a short film at 2–5 days, not minutes — because choosing and assembling among multiple generated options, not the generation itself, is what takes the time. [invideo\'s FAQ](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) describes 2 days as a floor for 1–3 minute films with assets locked early. That figure covers a finished film, while the local figure above covers only raw, unedited TI2V-5B clips, so the two are not directly comparable. A hosted service removes the local setup, but production still takes time.\n\nPlans listed by invideo (for prices, see [invideo\'s pricing page](https://invideo.io/pricing/)):',
        blockquote:
          '**Want to create AI videos without the local setup?** If you don\'t have a powerful GPU — or simply don\'t want to spend hours installing and configuring local AI video tools — invideo is worth trying. [Try invideo\'s free version →](https://invideo.io/pricing/)',
        columns: ['Plan', 'Credits per seat/mo', 'Model access'],
        rows: [
          { 'Plan': 'Free', 'Credits per seat/mo': 'Weekly limit', 'Model access': 'Check the pricing page' },
          { 'Plan': 'Starter', 'Credits per seat/mo': '400', 'Model access': 'Selected models; no Seedance 2.5' },
          { 'Plan': 'Plus', 'Credits per seat/mo': '2,000', 'Model access': 'All models, per invideo' },
          { 'Plan': 'Max', 'Credits per seat/mo': 'From 5,000', 'Model access': 'All models, per invideo' },
        ],
        note:
          'Plan names, credits, and model access as shown on invideo\'s [pricing](https://invideo.io/pricing/) and [plan-limits](https://invideo.io/help/billing/plan-limits/) pages when checked on 27 November 2026. No prices are quoted here: the page showed a limited-time sale when viewed from Europe, and the plans differ from those this guide listed earlier. Check the live page before relying on any detail.',
        affiliateLinks: [
          { url: 'https://invideo.io/pricing/', productName: 'invideo', productCategory: 'video-generation', label: 'Try invideo\'s Free Version →' },
        ],
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Cloud or Local: Which Door Is Yours?',
        content: 'The short version, mapped to common situations:',
        columns: ['Your situation', 'Recommendation'],
        rows: [
          { 'Your situation': 'No GPU, or under 12GB VRAM', 'Recommendation': 'Invideo (cloud) — local options are entry-level below this tier' },
          { 'Your situation': 'Want a finished video with voiceover, not raw clips', 'Recommendation': 'Invideo (cloud) — local models don\'t assemble a full production' },
          { 'Your situation': 'Deadline-driven, zero setup tolerance', 'Recommendation': 'Invideo (cloud)' },
          { 'Your situation': '12GB+ GPU, comfortable with setup, want privacy and $0 marginal cost', 'Recommendation': 'Local: LTX-Video (12GB) or Wan 2.2 (24GB for the 14B models, quantized)' },
          { 'Your situation': 'In the EU, UK, or South Korea', 'Recommendation': 'Local = Wan 2.2 or LTX-2 only (HunyuanVideo\'s license excludes you)' },
          { 'Your situation': 'Need automation/API at scale without building it', 'Recommendation': 'Invideo (cloud, MCP server)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'Who Should Choose invideo?',
        content:
          '**Invideo is probably the better choice if you:**\n\n- Don\'t own a powerful GPU\n- Want to start creating videos immediately\n- Don\'t want to install and configure ComfyUI, CUDA, models, or Python environments\n- Want an integrated workflow rather than assembling multiple local tools\n- Need scripts, voice, music, subtitles, and video generation in one workflow\n- Care more about finished videos than experimenting with the underlying models\n\n**Local AI is probably the better choice if you:**\n\n- Already own suitable GPU hardware\n- Want maximum control\n- Want to experiment with models and workflows\n- Have strong technical skills\n- Prioritize keeping generation locally controlled\n- Expect to generate very large volumes and want to optimize marginal generation cost',
        blockquote:
          '**Not sure which route is right for you?** If you want to avoid the hardware and technical setup, the easiest experiment is simply to try invideo and see whether its workflow fits your needs. [Try invideo for free →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'See Them in Action',
        items: [
          '[4 Open Source AI Video Models Compared — Which One\'s Actually Free?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — side-by-side output of LTX 2.3, Wan 2.2, HunyuanVideo 1.5, and MiniMax H3, including the license fine print.',
          '[Invideo Agent One Review](https://www.youtube.com/watch?v=uUHO9byu0c0) — the full prompt-to-finished-video workflow.',
          '[Wan 2.2 Full Local Demo](https://www.youtube.com/watch?v=fs62ML_ZgEs) — honest render times on consumer hardware (launch week, July 2025).',
          '[Low-VRAM Wan 2.2 Tutorial](https://www.youtube.com/watch?v=tQu0DjtOEyg) — running the 14B model on a 6GB laptop (2025).',
        ],
        note:
          'These are third-party videos, not produced by PromptQuorum or invideo. Included for reference only — no endorsement of the channel or its other content is implied.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can I run AI video generation on 8GB of VRAM?',
            a: 'Barely. Wan 2.2\'s TI2V-5B variant runs on 6–8GB quantized, at reduced quality and short clip lengths. For the serious models, 12GB is the real floor — and below that, a cloud tool like invideo is the practical answer.',
          },
          {
            q: 'Is Wan 2.2 really free for commercial use?',
            a: 'Yes. It\'s Apache 2.0 — permissive commercial use with no revenue threshold or territory exclusion (standard Apache terms such as attribution notices apply; check the model card), and no rights claimed over your outputs. It is one of the more permissively licensed top local models.',
          },
          {
            q: 'Can I use HunyuanVideo in the EU or UK?',
            a: 'Not under the license as written. The Tencent Hunyuan Community License states that it does not apply in the EU, UK, or South Korea — per the license text, that covers both the model itself and its outputs. Check the license yourself (this is not legal advice) and consider Wan 2.2 or LTX-2 instead.',
          },
          {
            q: 'Do I need a GPU to use invideo?',
            a: 'No. Invideo runs entirely in the browser; all generation happens on their infrastructure. An ordinary laptop should be enough.',
          },
          {
            q: 'Can local models produce a complete YouTube video with voiceover?',
            a: 'Not by themselves. Local models generate raw clips of 5–20 seconds (LTX-2 includes synchronized audio; the others are silent). Script, voiceover, music, subtitles, and editing each require separate tools that you assemble into a pipeline yourself.',
          },
          {
            q: 'What\'s the actual catch with "free" local AI video?',
            a: 'Hardware cost (a capable GPU), setup time (ComfyUI and its dependencies), and the DIY pipeline required around the raw output clips. The model weights carry no per-generation fee; hardware and electricity still cost money.',
          },
          {
            q: 'Is there a Wan 2.7 or newer Wan model?',
            a: 'No newer open-weights Wan repository appeared on the official Wan GitHub page when checked on 27 November 2026. Alibaba announced [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) in April 2026 as available on Alibaba Cloud. Be cautious with any other site offering "Wan 2.7 weights" — download only from the official GitHub or Hugging Face repositories.',
          },
          {
            q: 'I\'m a complete beginner. Where should I start?',
            a: 'Invideo\'s free plan is a way to try the cloud workflow without buying hardware and to judge whether AI video serves your goals; the plan has limits. If you later buy a capable GPU and want full control and privacy, the local door stays open.',
          },
          {
            q: 'What\'s different about running these local models on Mac vs Windows?',
            a: 'ComfyUI runs on Apple Silicon (M1–M4) via PyTorch\'s MPS backend. Plan for slower generation than on a comparable NVIDIA GPU; we have no controlled benchmark and quote no speed ratio. The bigger practical issue is software support: CUDA-specific optimizations these models lean on (flash-attention, GGUF/FP8 quantization tooling) are far less mature on Mac, so several community workflows and installation guides assume Windows or Linux with an NVIDIA card and may need adjustment, or simply won\'t run as documented. One upside: Apple Silicon\'s unified memory can let you fit a larger model in memory than a discrete GPU with equivalent VRAM would allow, even though it runs slower. If you\'re buying hardware specifically for local video generation, Windows or Linux plus NVIDIA is the well-supported path; a Mac you already own is fine for experimenting, not the recommended target for serious throughput.',
          },
          {
            q: 'Can I keep the same character consistent across multiple local video clips?',
            a: 'Yes, with extra work — none of the three models guarantee this out of the box across separate generations. The two working approaches: feed the same reference image into image-to-video mode (all three support I2V), or train a small LoRA on your character. Wan 2.2 and LTX-2 both have documented LoRA workflows for this — LTX-2\'s version is called IC-LoRA (in-context LoRA) and explicitly supports multi-character consistency. Training a LoRA on your character is the more involved route, aimed at more consistent results than a prompt or a single reference image; we have not tested how large the difference is. Invideo\'s brand-kit and AI avatar features solve the same underlying problem differently — a fixed avatar and voice profile you configure once and reuse, no training required.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Try Before You Decide',
        content:
          'You don\'t need to commit to a local GPU setup — or a paid subscription — just to evaluate the cloud workflow. Before buying hardware or spending a weekend on ComfyUI, it\'s worth spending five minutes the other way first:\n\n1. Try invideo\'s free version.\n2. Create one short video.\n3. Evaluate the output quality and how the workflow felt.\n4. Compare that experience against the setup effort a local install would take.\n\nThat turns the comparison from something you read about into something you can test yourself in less time than it takes to read the rest of this article.',
        blockquote:
          '[Try invideo\'s free version →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'The Verdict',
        content:
          'Go local if you have (or will buy) a 12GB+ GPU, enjoy building your own tools, and value privacy and generating without per-clip fees over convenience. Wan 2.2 is a solid foundation — high quality, Apache 2.0 — with LTX-2 as the speed-and-sound specialist.\n\nGo cloud if you don\'t have the hardware, don\'t want the setup, or need finished videos rather than raw clips. For most people who simply want to make AI-generated videos, the cloud route is the easier starting point: if you don\'t already have the hardware and technical interest local generation requires, a hosted service such as invideo takes the local setup off your hands. There is a free plan to test with; paid plans and their limits are listed on invideo\'s pricing page. The simplest way to find out whether it fits your workflow is to try the free version.\n\nBoth doors lead to AI video. The question was never which technology is better — it\'s which workflow fits your machine, your patience, and your goals.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Wan 2.2 on GitHub](https://github.com/Wan-Video/Wan2.2) — official repository, license, and setup instructions.',
          '[Wan 2.2 on Hugging Face](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B) — official model card and download.',
          '[LTX model license](https://ltx.io/model/license) — official LTX Community License terms.',
          '[LTX-2 model page](https://ltx.io/model/ltx-2-3) — official architecture and release details.',
          '[HunyuanVideo 1.5 on GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) — official repository and LICENSE file, including the EU/UK/South Korea exclusion.',
          '[Engadget: ByteDance has reportedly suspended the global rollout of its new AI video generator](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) — press report from March 2026.',
          '[Alibaba Cloud Community: Wan2.7-Video announcement](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) — April 2026.',
          '[invideo plan limits](https://invideo.io/help/billing/plan-limits/) — official plan and credit limits.',
          '[Invideo pricing](https://invideo.io/pricing/) — official plan and pricing details.',
          '[Invideo MCP server](https://invideo.io/ai/mcp) — official automation documentation.',
          '[MiniMax H3 on GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — official repository.',
          '[MiniMax H3 on Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — official model weights.',
          '[Invideo: How Long Does It Take to Make an AI Short Film?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — invideo\'s own end-to-end production timeline figures (2–5 days).',
          '[ComfyUI system requirements](https://docs.comfy.org/installation/system_requirements) — official Mac/Apple Silicon MPS support documentation.',
          '[LTX Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — official character-consistency (IC-LoRA) guide.',
          '[InsiderLLM: NVIDIA GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — source of the used-GPU price figures (US eBay listing data).',
          '[Runway](https://runwayml.com/) — official site; basis for the public description cited above (not tested by PromptQuorum).',
          '[Luma AI](https://lumalabs.ai/) — official site; basis for the public description cited above (not tested by PromptQuorum).',
          '[Pika](https://pika.art/) — official site; basis for the public description cited above (not tested by PromptQuorum).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnimateDiff Guide 2026: Animate Any Stable Diffusion Model](/power-local-llm/animatediff-video-generation-guide) — a single-tool deep dive for animating your existing SD1.5/SDXL checkpoints and LoRAs, distinct from the native video models compared here.',
          '[Local AI Image Generation vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) — the companion piece, same structure, for images instead of video.',
          '[VRAM Calculator for Local Models](/local-llms/vram-calculator-local-llm) — exact VRAM requirements per model and quantization.',
          '[How Much VRAM Do You Need?](/local-llms/how-much-vram-local-llm) — charts across model sizes from 7B to 70B.',
          '[Best GPUs for Local AI in 2026](/local-llms/best-gpus-for-local-llms) — hardware picks by budget tier.',
          '[Best Budget GPUs for Local AI](/local-llms/best-budget-gpus-local-llm) — entry-level hardware options.',
          '[GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon) — platform comparison for local inference.',
          '[System Prompts vs. User Prompts](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — prompt structuring fundamentals that transfer to video prompting.',
          '[Prompt Engineering for Local Models](/local-llms/prompt-engineering-for-local-models) — structured prompting techniques.',
          '[OpenShorts Review](/power-local-llm/openshorts-review) and [pyVideoTrans Review](/power-local-llm/pyvideotrans-review) — two tools for video you already have rather than video generators: one cuts long videos into captioned vertical clips, the other translates and dubs videos.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-02-21',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-ar.webp',
    title: 'Invideo مقابل الفيديو المحلي بالذكاء الاصطناعي: أحدهما يكلّفك معالج رسومات وعطلتك، والآخر اشتراكًا سحابيًا',
    seoTitle: 'الفيديو السحابي مقابل المحلي بالذكاء الاصطناعي 2026: invideo مقابل Wan 2.2 وLTX-2',
    intro:
      'هناك بابان للدخول إلى عالم الفيديو بالذكاء الاصطناعي في 2026. الباب الأول محلي: نماذج فيديو مفتوحة ومجانية تعمل على معالج الرسومات (GPU) الخاص بك — توليد غير محدود، مع تشغيل الاستدلال على عتادك الخاص (تنزيلات النماذج وفحوصات التحديث لا تزال تستخدم الشبكة)، بلا اشتراك، لكنك تبني سير العمل بأكمله بنفسك. الباب الثاني سحابي: invideo، خدمة مستضافة تعرض مسارًا بمساعدة وكلاء الذكاء الاصطناعي من نص أو فكرة إلى فيديو بعد المونتاج، مباشرة من المتصفح. لا يوجد باب "أفضل" من الآخر. يقدّم هذا الدليل تفاصيل التراخيص الدقيقة التي تتجاهلها معظم المقارنات، ومتطلبات العتاد الحقيقية، وأداة قرار تربط وضعك بتوصية محددة.',
    metaDescription:
      'نماذج الفيديو المحلية (Wan 2.2 وLTX-2 وHunyuanVideo) مجانية التنزيل إن كان معالج رسوماتك يشغّلها. إليك مقارنتها بخدمة invideo السحابية.',
    twitterDescription:
      'الفيديو السحابي مقابل المحلي في 2026: invideo خدمة مستضافة باشتراك. يمكن تنزيل Wan 2.2 وLTX-2 وHunyuanVideo مجانًا لمعالج رسوماتك — إن كان قويًا بما يكفي.',
    audience:
      'المبدعون والمطورون الذين يترددون بين توليد الفيديو المحلي المجاني على معالج الرسومات الخاص بهم وخط إنتاج invideo السحابي المتكامل — يغطي متطلبات العتاد، وتفاصيل التراخيص، والمفاضلات في سير العمل.',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'توليد الفيديو المحلي بالذكاء الاصطناعي',
    targetKeywords: [
      'الفيديو السحابي مقابل المحلي بالذكاء الاصطناعي',
      'Invideo مقابل الفيديو المحلي بالذكاء الاصطناعي',
      'Wan 2.2 مقابل LTX-2',
      'أفضل نموذج فيديو مفتوح المصدر 2026',
      'HunyuanVideo محليًا',
      'تشغيل توليد الفيديو بالذكاء الاصطناعي محليًا',
      'متطلبات VRAM لـ Wan 2.2',
      'ترخيص LTX-2',
      'معالج رسومات لتوليد الفيديو المحلي',
    ],
    current_models_mentioned: [
      'Wan 2.2 (T2V-A14B, I2V-A14B, TI2V-5B)',
      'LTX-2.5 / LTX-2.3',
      'HunyuanVideo 1.5',
      'MiniMax H3',
      'Kling 3.0',
      'Veo 3.1',
      'Seedance 2.5',
    ],
    current_hardware_mentioned: ['6 GB VRAM', '8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'RTX 3060', 'RTX 3090', 'RTX 4090'],
    leadAnswerBlock:
      '**بالنسبة لمعظم من يملكون معالج رسومات بذاكرة 12 جيجابايت فأكثر، يُعد Wan 2.2 نموذج فيديو محلياً قوياً بالذكاء الاصطناعي في 2026** — مرخّص بموجب Apache 2.0 بلا سقف إيرادات أو قيود جغرافية، وتنزيله مجاني (ويبقى للعتاد والكهرباء تكلفتهما). **يُعد invideo الخيار الأفضل إذا لم يتوفر لديك ذلك المعالج، أو إذا أردت فيديو سرديًا جاهزًا بدلًا من مقطع خام** — وهو خدمة مستضافة عبر المتصفح تختلف خططها المدفوعة (Starter وPlus وMax) في الوصول إلى النماذج؛ راجع صفحة الأسعار الحالية. **يحظى HunyuanVideo 1.5 بشعبية في المجتمع بسبب مظهره السينمائي، لكن ترخيصه يستبعد الاتحاد الأوروبي والمملكة المتحدة وكوريا الجنوبية تمامًا** — تجنّبه إذا كنت في هذه المناطق.',
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أولّد الفيديو بالذكاء الاصطناعي محليًا أم أستخدم خط إنتاج invideo السحابي؟',
        answer:
          'ولّد الفيديو محليًا إذا كنت تملك معالج رسومات بذاكرة 12 جيجابايت فأكثر، وتريد التوليد بلا رسوم لكل مقطع، وتُقدّر الخصوصية — يُعد Wan 2.2 (مرخّص بموجب Apache 2.0 — استخدام تجاري متساهل؛ راجع بطاقة النموذج) نقطة بداية معقولة. استخدم invideo إذا لم يتوفر لديك العتاد المناسب، أو لا تريد إدارة الإعداد، أو تحتاج فيديو كاملًا وجاهزًا (نص، تعليق صوتي، موسيقى، ترجمة نصية) بدلًا من مقطع خام — فهو خدمة مستضافة باشتراك ولديها خطة مجانية؛ راجع الأسعار الحالية في صفحة الأسعار.',
        bullets: [
          'أقل من 12 جيجابايت VRAM ← يُعد invideo الخيار العملي؛ دون هذا المستوى تقتصر الخيارات المحلية على مخرجات مكمَّمة بجودة مبتدئة.',
          '12 جيجابايت VRAM ← LTX-Video 0.9.5، خيار محلي عملي في هذا المستوى.',
          '16 إلى 24+ جيجابايت VRAM ← Wan 2.2 (جودة قوية، Apache 2.0 — استخدام تجاري متساهل بلا حد أدنى للإيرادات ولا استبعاد جغرافي؛ تسري الشروط القياسية لـ Apache مثل إشعارات الإسناد، راجع بطاقة النموذج) أو LTX-2 (سرعة + صوت متزامن).',
          'إذا كنت في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية ← ترخيص HunyuanVideo 1.5 يستبعدك؛ استخدم Wan 2.2 أو LTX-2 بدلًا منه.',
          'تحتاج فيديو سرديًا جاهزًا، لا مقطعًا خامًا ← النماذج المحلية تولّد فقط مقاطع صامتة (باستثناء LTX) مدتها 5 إلى 20 ثانية؛ يقدّم invideo سير عمل مستضافًا حول المقطع؛ راجع صفحة الأسعار لمعرفة ما تتضمنه كل خطة.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'أبرز النقاط', anchor: '#key-takeaways' },
      { label: 'لماذا يمثل عام 2026 لحظة غريبة لفيديو الذكاء الاصطناعي', anchor: '#market-context' },
      { label: 'الباب المحلي: ثلاثة نماذج مجانية على معالج الرسومات الخاص بك', anchor: '#local-models' },
      { label: 'Wan 2.2 (Alibaba)', anchor: '#wan-2-2' },
      { label: 'LTX-2 (Lightricks)', anchor: '#ltx-2' },
      { label: 'HunyuanVideo 1.5 (Tencent)', anchor: '#hunyuanvideo' },
      { label: 'نموذج يستحق المتابعة: MiniMax H3', anchor: '#one-to-watch' },
      { label: 'حاجز العتاد', anchor: '#hardware-gate' },
      { label: 'الواقع المحلي: ما الذي تتطلبه "المجانية" منك', anchor: '#diy-reality' },
      { label: 'الباب السحابي: ما الذي تجمعه invideo', anchor: '#invideo-bundle' },
      { label: 'سحابي أم محلي: أي باب يناسبك؟', anchor: '#decision-guide' },
      { label: 'من يجب أن يختار invideo؟', anchor: '#who-should-choose' },
      { label: 'شاهدها قيد التطبيق', anchor: '#video-roundup' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'جرّب قبل أن تقرر', anchor: '#try-before-you-decide' },
      { label: 'الخلاصة', anchor: '#verdict' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**يُعد Wan 2.2 نموذج فيديو محلياً قوياً برخصة Apache 2.0 المتساهلة.** استخدام تجاري متساهل بلا حد أدنى للإيرادات ولا استبعاد جغرافي (تسري الشروط القياسية لـ Apache مثل إشعارات الإسناد؛ راجع بطاقة النموذج).',
          '**invideo بديل مستضاف** لديه خطة مجانية وخطط مدفوعة هي Starter وPlus وMax؛ وتذكر صفحة أسعاره أن Plus وMax تتيحان الوصول إلى جميع النماذج، بما فيها جميع نماذج Seedance. الأسعار متفاوتة — راجع الصفحة الحالية.',
          '**يستبعد ترخيص HunyuanVideo 1.5 صراحةً الاتحاد الأوروبي والمملكة المتحدة وكوريا الجنوبية** — يشمل ذلك النموذج نفسه ومخرجاته. يجب على القراء في هذه المناطق استخدام Wan 2.2 أو LTX-2 بدلًا منه.',
          '**يُقدَّم LTX-2 بوصفه نموذجًا يركّز على السرعة، وهو الوحيد بين هذا الثلاثي المحلي الذي يتضمن صوتًا متزامنًا مدمجًا**، وهو مجاني تجاريًا للشركات التي تقل إيراداتها السنوية عن 10 ملايين دولار.',
          '**12 جيجابايت VRAM هو الحد الأدنى الواقعي لتوليد الفيديو المحلي الجاد.** دون ذلك، يصبح invideo الخيار الأكثر عملية.',
          '**تولّد النماذج المحلية مقاطع خامًا مدتها 5 إلى 20 ثانية (صامتة باستثناء LTX-2)، لا فيديوهات جاهزة.** النص، والتعليق الصوتي، والموسيقى، والترجمة النصية، والمونتاج أدوات منفصلة تجمّعها بنفسك — بينما تسعى invideo إلى جمع هذه الخطوات في سير عمل مستضاف واحد.',
          '**عند التحقق في 27 نوفمبر 2026، لم تعرض صفحة Wan الرسمية على GitHub أي مستودع بأوزان مفتوحة باسم "Wan 2.7".** وقد أعلنت Alibaba في أبريل 2026 عن [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) بوصفه نموذجًا متاحًا على Alibaba Cloud. توخَّ الحذر من صفحات الجهات الخارجية التي تعرض "أوزان Wan 2.7".',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'لماذا يمثل عام 2026 لحظة غريبة لفيديو الذكاء الاصطناعي',
        content:
          'شهدت سوق الفيديو الاحتكارية اضطرابًا. في مارس 2026 [أفاد موقع Engadget](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) نقلًا عن The Information بأن ByteDance أوقفت مؤقتًا الطرح العالمي لنموذج Seedance 2.0 بعد خطابات إنذار بالتوقف عن المخالفة من Disney وParamount Skydance. لم تتحقق PromptQuorum من هذا التقرير بشكل مستقل، وقد تغيّر التوافر منذ ذلك الحين: تدرج صفحة أسعار invideo الآن Seedance 2.0 و2.5.\n\nمثل هذه التقلبات هي ما يجعل كلا البابين جذابين. تظل النماذج المفتوحة التي نزّلتها بالفعل تعمل مهما تغيّر الموردون. وتوفّر خدمة متعددة النماذج مثل invideo عدة نماذج في حساب واحد، لكن قائمة النماذج المتاحة قد تتغير، لذا لا ضمان بأن سير عملك لن يتأثر.',
      },
      localModels: {
        id: 'local-models',
        title: 'الباب المحلي: ثلاثة نماذج مجانية على معالج الرسومات الخاص بك',
        content:
          'يقارن هذا الدليل ثلاثة أنظمة مفتوحة الأوزان واسعة الاستخدام لتوليد الفيديو المحلي. تعمل الأنظمة الثلاثة عبر ComfyUI، واجهة قائمة على العُقد تُثبّت على جهازك الخاص — وليست أداة محادثة مثل Ollama. هذه نماذج انتشار (diffusion)، وليست نماذج لغوية كبيرة (LLM).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'يُعد Wan 2.2 نموذج فيديو محلياً قوياً وشاملاً في 2026 — مرخّص بموجب Apache 2.0، بجودة عالية، بلا قيود جغرافية — بينما يركّز LTX-2 على السرعة ويضيف الصوت المتزامن، ويحظى HunyuanVideo 1.5 بشعبية في المجتمع لمظهره السينمائي لكن ترخيصه يستبعد مستخدمي الاتحاد الأوروبي والمملكة المتحدة وكوريا الجنوبية.' },
          { type: 'plain-terms', text: 'إذا أردت إجابة واحدة فقط: احصل على معالج رسومات بذاكرة 12 جيجابايت فأكثر وشغّل Wan 2.2. فهو يمتلك جودة عالية وترخيص Apache 2.0 المتساهل.' },
        ],
        columns: ['النموذج', 'الترخيص', 'VRAM', 'المخرجات', 'الميزة البارزة'],
        rows: [
          { 'النموذج': 'Wan 2.2 (Alibaba)', 'الترخيص': 'Apache 2.0 — متساهل، بلا حد أدنى للإيرادات ولا استبعاد جغرافي', 'VRAM': '6–8GB (5B) / 15–25GB (14B)', 'المخرجات': '480p/720p، مقاطع ~5 ثوانٍ', 'الميزة البارزة': 'إصدارا 14B و5B المدمج' },
          { 'النموذج': 'LTX-2 (Lightricks)', 'الترخيص': 'LTX Community License — مجاني لمن تقل إيراداته عن 10 ملايين دولار', 'VRAM': '18–20GB مُكمَّم، 32GB+ بدقة كاملة', 'المخرجات': '480p–1080p، 5–20 ثانية، مع صوت', 'الميزة البارزة': 'صوت وفيديو متزامنان (وحده بين الثلاثة)' },
          { 'النموذج': 'HunyuanVideo 1.5 (Tencent)', 'الترخيص': 'Tencent Community License — يستبعد الاتحاد الأوروبي/المملكة المتحدة/كوريا الجنوبية', 'VRAM': '14GB كحد أدنى، 24GB بشكل مريح', 'المخرجات': '480p/720p، حتى 10 ثوانٍ', 'الميزة البارزة': 'إضاءة سينمائية؛ 14GB كحد أدنى مع التفريغ' },
        ],
        note:
          '⚠️ تنبيه: عند التحقق في 27 نوفمبر 2026، لم تعرض [صفحة Wan الرسمية على GitHub](https://github.com/Wan-Video) أي مستودع بأوزان مفتوحة باسم "Wan 2.7"؛ وقد أعلنت Alibaba أن [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) متاح على Alibaba Cloud. توخَّ الحذر من الصفحات التي تعرض "أوزان Wan 2.7 المفتوحة" ولا تُحمّل إلا من مستودعات GitHub أو Hugging Face الرسمية.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — جودة قوية، برخصة Apache 2.0',
        content:
          'يُستخدم Wan 2.2 على نطاق واسع بين نماذج الفيديو المفتوحة، مع مشتقات مجتمعية كثيرة مبنية عليه (راجع صفحة النموذج على Hugging Face لمعرفة أعداد التنزيل الحالية). يأتي في ثلاثة إصدارات — T2V-A14B وI2V-A14B (خليط خبراء، 27B إجمالي / 14B نشط)، إضافة إلى TI2V-5B المدمج الذي يعالج التحويل من نص وصورة إلى فيديو بذاكرة تصل إلى 6–8 جيجابايت فقط. يحتاج مستوى 14B ما بين 15 جيجابايت (GGUF Q3) إلى 25 جيجابايت (FP8)؛ بينما يطلب الأمر الرسمي غير المُكمَّم 80 جيجابايت. ترخيصه هو Apache 2.0 — مجاني فعليًا، استخدام تجاري متساهل بلا حد أدنى للإيرادات ولا استبعاد جغرافي (تسري الشروط القياسية لـ Apache مثل إشعارات الإسناد؛ راجع بطاقة النموذج).\n\n**السرعة، بالأرقام:** يذكر [مستودع Wan 2.2 الرسمي](https://github.com/Wan-Video/Wan2.2) أن النموذج المدمج TI2V-5B يستطيع، دون تحسينات خاصة، توليد مقطع 720p مدته 5 ثوانٍ في أقل من 9 دقائق على معالج رسومات استهلاكي واحد. هذا رقم المطوّر ولم تتحقق منه PromptQuorum، وهو لا يصف نسخ 14B. ويذكر المستودع أن أمر المثال الخاص بـ TI2V-5B يعمل على معالج رسومات بذاكرة 24GB على الأقل (مثل RTX 4090)، فلا تتوقع هذا الزمن على بطاقة بذاكرة 6–8GB. وتسلسل مدته 20 ثانية يعني توليد 4 مقاطع منفصلة مدة كل منها 5 ثوانٍ، أي أقل من 36 دقيقة من التوليد الخام إذا استغرق كل مقطع الزمن المذكور، يضاف إليها المونتاج اليدوي لوصلها. وهذا حساب مبني على رقم المقطع الواحد، لا قياس فعلي لـ 20 ثانية.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — سرعة مع صوت متزامن',
        content:
          'LTX-2 هو النموذج المفتوح الوحيد بين الثلاثة الذي يولّد صوتًا وفيديو متزامنين في خطوة واحدة — تصل خطى الأقدام والأصوات المحيطة والمؤثرات مع الصورة نفسها. ويُقدَّم أيضًا بوصفه نموذجًا سريعًا، لكنه ليس الأخف استهلاكًا لـ VRAM (راجع الأرقام أدناه). البنية عبارة عن محوّل انتشار (diffusion transformer) بحجم 22B؛ يبقى LTX-2.3 (مارس 2026) مدعومًا بالكامل جنبًا إلى جنب مع إصدار LTX-2.5 الحالي. الترخيص هو LTX Community License — مجاني للاستخدام التجاري إذا كان إجمالي إيرادات شركتك أقل من 10 ملايين دولار سنويًا، مع الحاجة إلى ترخيص تجاري مدفوع فوق هذا الحد. (تصفه بعض المقالات الخارجية خطأً بأنه Apache 2.0 — [صفحة الترخيص الرسمية](https://ltx.io/model/license) هي المصدر الموثوق الوحيد.) تحتاج متطلبات العتاد ما بين 18–20 جيجابايت VRAM مُكمَّمًا، و32 جيجابايت فأكثر بالدقة الكاملة؛ وعلى بطاقات 12 جيجابايت، يبقى الإصدار الأقدم LTX-Video 0.9.5 الخيار العملي.\n\n**السرعة، بالأرقام:** يوصف LTX-2 كثيرًا بأنه سريع، لكننا لم نجد رقمًا متحققًا منه بشكل مستقل لعدد الدقائق لكل مقطع على RTX 4090، لذا لا نذكر رقمًا. أما LTX-2.5 الأحدث فيذكر مطوّره توليد مقطع صورة إلى فيديو بدقة 720p ومدة 10 ثوانٍ في 6.8 ثانية على شريحتين فائقتين من نوع NVIDIA GB200 من فئة مراكز البيانات، لا على معالج استهلاكي ([VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights)، التي تصف الرقم بأنه من الشركة وغير متحقق منه بشكل مستقل). وهو لا يدل على ما سيقدمه معالج منزلي.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — المظهر السينمائي، مع عائق قانوني',
        content:
          'نموذج Tencent بحجم 8.3B، الصادر في نوفمبر 2025، هو المفضل لدى المجتمع للإضاءة والملمس السينمائيين، واحتياجه من VRAM متوسط: 14 جيجابايت كحد أدنى مع التفريغ (offloading)، و24 جيجابايت بشكل مريح. يولّد بدقة 480p/720p أصليًا، وحتى 1080p عبر تقنية دقة فائقة مدمجة، بمقاطع تصل إلى 10 ثوانٍ.\n\n**السرعة، بالأرقام:** يذكر [مستودع Tencent](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) أنه باستخدام نموذجه المقطَّر الخطوات لتحويل الصورة إلى فيديو بدقة 480p، تستطيع بطاقة RTX 4090 واحدة توليد فيديو خلال 75 ثانية. هذا رقم المطوّر ولم تتحقق منه PromptQuorum. ولا تذكر الملاحظة مدة المقطع، لذا لا نُسقطه على تسلسلات أطول.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'تحذير بشأن الترخيص — اقرأ قبل التحميل. يستخدم HunyuanVideo 1.5 ترخيص Tencent Hunyuan Community License، وليس Apache 2.0. لا ينطبق هذا الترخيص في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية — بحسب نص الترخيص، لا يُخوَّل مستخدمو هذه المناطق استخدام النموذج أو مخرجاته. كما يشترط ترخيصًا منفصلًا من Tencent إذا تجاوز عدد المستخدمين النشطين شهريًا لمنتجاتك 100 مليون في الشهر السابق لتاريخ إصدار النموذج، ويحظر استخدام النموذج أو مخرجاته لتحسين نماذج ذكاء اصطناعي أخرى (باستثناء Tencent Hunyuan ومشتقاته). إذا كنت في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية، تجنّب هذا النموذج وفكّر في Wan 2.2 (Apache 2.0، استخدام تجاري متساهل بلا استبعاد جغرافي).',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'نموذج يستحق المتابعة: MiniMax H3',
        content:
          'صدر في 3 أغسطس 2026، وMiniMax H3 هو نموذج شامل الوسائط (omni-modal) بحجم 33.1B، يدعم صوتًا مجسّمًا (stereo) أصليًا، ودعمًا فوريًا لـ ComfyUI منذ اليوم الأول، وإصدارات مُكمَّمة تعمل على معالج RTX 3060. هناك تحفظان قبل اعتباره خيارًا رابعًا: يقتصر الإصدار المحلي على دقة 768p (يبقى خط الأنابيب الكامل بدقة 2K حصريًا للنسخة السحابية)، ويستثني [ترخيصه المجتمعي](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE) الاتحاد الأوروبي والمملكة المتحدة وكوريا الجنوبية والولايات المتحدة من النطاق المرخّص، ويشترط تصريحًا منفصلًا إذا تجاوزت الإيرادات السنوية 20 مليون دولار — اقرأه قبل الالتزام به (هذا ليس استشارة قانونية). المؤشرات الأولية قوية، لكن الإصدار الحديث لا يعني الجاهزية للإنتاج.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'حاجز العتاد',
        content: [
          'توليد الفيديو المحلي "مجاني" بالطريقة نفسها التي يكون بها الجرو مجانيًا: أوزان النموذج لا تكلّف شيئًا، لكن معالج الرسومات هو الثمن الحقيقي للدخول. تجنّب التوليد المحلي كليًا إذا كان معالج الرسومات لديك أقل من 12 جيجابايت VRAM ولا تنوي الترقية — فدون هذا المستوى لا يصلح للاستخدام سوى إصدار Wan 2.2 TI2V-5B المُكمَّم، وبجودة مبتدئة فقط، والمنصة السحابية هي على الأرجح الطريق الأسهل.',
          'لست متأكدًا مما يعنيه كل هذا لجهازك؟ توضح هذه الأدلة التفاصيل: [حاسبة VRAM](/ar/local-llms/vram-calculator-local-llm) لمعرفة المتطلبات الدقيقة لكل نموذج، [كم تحتاج من VRAM؟](/ar/local-llms/how-much-vram-local-llm) لجداول عبر أحجام النماذج، [أفضل معالجات الرسومات للذكاء الاصطناعي المحلي](/ar/local-llms/best-gpus-for-local-llms) و[أفضل معالجات الرسومات الاقتصادية](/ar/local-llms/best-budget-gpus-local-llm) لاختيارات العتاد، و[معالج الرسومات مقابل المعالج المركزي مقابل Apple Silicon](/ar/local-llms/gpu-vs-cpu-vs-apple-silicon) لمقارنات المنصات. تنبيه صادق واحد: تستخدم هذه الأدلة معادلة VRAM الخاصة بالنماذج اللغوية الكبيرة (المعاملات × البتات ÷ 8). أما نماذج انتشار الفيديو فتتغير احتياجاتها من VRAM أيضًا حسب الدقة وطول المقطع، فاعتبر أرقامها حدًا أدنى لا حدًا أقصى لأعباء عمل الفيديو.',
        ],
        columns: ['معالج الرسومات لديك', 'ما يمكنك تشغيله'],
        rows: [
          { 'معالج الرسومات لديك': '6–8GB VRAM', 'ما يمكنك تشغيله': 'Wan 2.2 TI2V-5B (مُكمَّم) — قابل للاستخدام، جودة أساسية' },
          { 'معالج الرسومات لديك': '12GB VRAM', 'ما يمكنك تشغيله': 'LTX-Video 0.9.5 — خيار عملي في هذا المستوى' },
          { 'معالج الرسومات لديك': '16GB VRAM', 'ما يمكنك تشغيله': 'HunyuanVideo 1.5 (إن سمح الترخيص)، Wan 2.2 14B بصيغة GGUF Q3' },
          { 'معالج الرسومات لديك': '24GB+ VRAM', 'ما يمكنك تشغيله': 'الثلاثة جميعًا: Wan 2.2 14B (مُكمَّم)، وLTX-2 مُكمَّم، وHunyuanVideo 1.5 (إن سمح الترخيص)' },
        ],
        note:
          'تكلفة تقريبية لبطاقات الرسومات، من [متتبّع أسعار GPU لدى InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (بيانات قوائم eBay الأمريكية، وليست عرض سعر): قوائم بيع RTX 3090 المستعملة نحو 1,500–1,725$ (الوسيط 1,650$؛ 225 عملية بيع، 13–23 نوفمبر 2026؛ بتاريخ 2026-11-23). أما قوائم بيع RTX 4090 المستعملة فكانت 2,575–3,010$ (الوسيط 2,860$) في الرقم المؤرَّخ في 2026-10-15. أسعار بلدك قد تختلف حسب الضرائب والرسوم الجمركية. أسعار معالجات الرسومات متغيرة — تحقق من الأسعار الحالية قبل الشراء بدلًا من الاعتماد على هذه الأرقام بعد مرور أشهر قليلة.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'ما الذي يتطلبه فعليًا تشغيل توليد الفيديو المحلي',
        content:
          'مع النماذج المحلية، أنت لا تُثبّت أداة فيديو — بل تجمّع خط إنتاج كامل.\n\n**إعداد التوليد.** ComfyUI قائم على العُقد: تبني، أو تستورد وتُصلح، مخطط سير عمل من المُحمِّلات وأدوات أخذ العينات وفكّاكات التشفير. توقّع تعارضات في إصدارات CUDA، وتثبيتات مضبوطة لـ PyTorch، وأخطاء تثبيت عرضية لـ `flash_attn` قبل أن يظهر أول إطار.\n\n**كتابة الأوامر النصية.** تحتاج نماذج الفيديو أوامر نصية مُهيكلة — نوع اللقطة، حركة الكاميرا، الإضاءة، حركة الموضوع — لا جملة واحدة مختصرة. لا يوفّر سير عمل ComfyUI المعتاد طبقة أوامر نظام. ويقدّم مستودعا [Wan 2.2](https://github.com/Wan-Video/Wan2.2) و[HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) توسيع الأوامر النصية أو إعادة صياغتها، لكن ذلك يعتمد على نموذج لغوي منفصل أو واجهة برمجية تُعدّها بنفسك. تغطي أدلتنا حول [أوامر النظام مقابل أوامر المستخدم](/ar/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) و[هندسة الأوامر للنماذج المحلية](/ar/local-llms/prompt-engineering-for-local-models) أساسيات تنتقل مباشرة إلى كتابة أوامر الفيديو.\n\n**كل ما يحيط بالمقطع.** تُخرج النماذج المحلية مقاطع خامًا صامتة (باستثناء LTX) مدتها 5 إلى 20 ثانية. النص، والتعليق الصوتي، والموسيقى، واللقطات الأرشيفية، والترجمة النصية، والمونتاج — كل منها أداة منفصلة تختارها وتثبّتها وتربطها بنفسك.',
        promptExamples: [
          { label: 'ضعيف (جملة واحدة)', text: 'A dog on a beach' },
          { label: 'مُهيكل (ما تحتاجه نماذج الفيديو)', text: 'Golden retriever sprinting along a wet shoreline at golden hour, low tracking shot following from the side, shallow depth of field, warm backlight, gentle slow motion, cinematic 24fps' },
        ],
        note:
          'الموضوع وحركته، سلوك الكاميرا، الإضاءة، الأسلوب — أربعة مكوّنات في جملة واحدة هي الفارق بين آلة قمار وكاميرا حقيقية. إذا بدت هذه الحزمة من العمل اليدوي مثيرة، فالباب المحلي مناسب لك. وإذا بدت مرهقة، تابع القراءة.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'الباب السحابي: ما الذي تجمعه invideo',
        highlight: true,
        itemHeadings: true,
        content:
          'Invideo مجرد مثال واحد على الباب السحابي — وليس المثال الوحيد، ومن المفيد معرفة كيف يختلف عن غيره قبل افتراض أن كلمة "سحابي" تعني شيئًا واحدًا. بحسب أوصافها العامة (ولم تختبر PromptQuorum أياً من هذه الخدمات الثلاث)، يندمج Runway مباشرة في محرّرات احترافية (Premiere Pro، Final Cut، DaVinci Resolve)، ويستهدف سير عمل هجينًا بين الذكاء الاصطناعي والمحرّر لا فيديو جاهزًا ومُجمَّعًا. بحسب الأوصاف نفسها، تتخصص Dream Machine من Luma AI في مخرجات HDR أصلية بعمق 16 بت لخطوط أنابيب تركيب المؤثرات البصرية (After Effects، Nuke) — جمهور مختلف تمامًا. وبحسب الأوصاف نفسها، تركّز Pika على التوليد السريع للمقاطع الخام؛ ولم تتحقق PromptQuorum مما إذا كانت تقدّم كتابة النص أو التعليق الصوتي أو تجميع اللقطات الأرشيفية، فتحقق من ذلك قبل الاعتماد عليها في العمل المحيط بالمقطع. وبحسب وصف invideo لنفسها، فهي تجمع بين لوحة القصة وكتابة النص والمونتاج على الخط الزمني مع الوصول إلى نماذج توليد مثل Kling وVeo وSeedance.\n\nInvideo ليس نموذج فيديو واحدًا، بل خدمة مستضافة. عند التحقق في 27 نوفمبر 2026، كانت [صفحتها الرئيسية](https://invideo.io/) تعرض محرّر فيديو يعتمد على الوكلاء، مع لوحة قصة من نص أو فكرة، وكتابة النصوص، وخط زمني متعدد المسارات، كما يدرج الموقع أدوات صوت وموسيقى بالذكاء الاصطناعي. لم تختبرها PromptQuorum، لذا تحقق من أن التعليق الصوتي والترجمة النصية يعملان بالشكل الذي تحتاجه. تعمل عبر المتصفح — معالج الرسومات لديك غير ذي صلة.\n\nلكل من يريد البدء في صناعة الفيديوهات اليوم بدلًا من البحث عن معالجات الرسومات وصيغ التكميم، يُعد invideo الخيار العملي: بلا حاجة لعتاد محلي، بلا تثبيت لـ ComfyUI أو استكشاف أخطاء CUDA، ومساحة عمل مستضافة للخطوات المحيطة بالمقطع. وهو مناسب بوجه خاص للمبدعين الذين يهتمون بالفيديو الجاهز أكثر من اهتمامهم بالتحكم في نموذج التوليد الأساسي — وبما أن هناك خطة مجانية، يمكنك معرفة ما إذا كانت تناسبك قبل إنفاق أي مبلغ.\n\nتبرز ثلاثة أمور في هذه المقارنة:\n\n- **عدة نماذج في حساب واحد.** تذكر صفحة أسعار invideo أن Plus وMax تتيحان الوصول إلى جميع النماذج، بما فيها جميع نماذج Seedance؛ أما Starter فتشمل نماذج مختارة دون Seedance 2.5. وقد تتغير القائمة.\n- **وصول الوكلاء مدمج.** توفّر invideo [خادم MCP](https://invideo.io/ai/mcp) يتيح لوكلاء الذكاء الاصطناعي العمل في محرّر الخط الزمني.\n- **هناك خطة مجانية.** تصف [صفحة حدود الخطط](https://invideo.io/help/billing/plan-limits/) لدى invideo حدًا أسبوعيًا لها؛ تحقق من قواعد التصدير والعلامة المائية قبل الاعتماد عليها.\n\n**السرعة، بالأرقام — والملاحظة الصادقة:** تقول invideo إن التوليد الخام سريع. لكن الأسئلة الشائعة الرسمية لـ invideo تضع الإنتاج الكامل من البداية للنهاية لفيلم قصير عند 2 إلى 5 أيام، لا دقائق — لأن اختيار وتجميع الخيارات المولَّدة المتعددة، لا التوليد نفسه، هو ما يستغرق الوقت. تصف [الأسئلة الشائعة لدى invideo](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) يومين بأنهما حد أدنى لأفلام من 1 إلى 3 دقائق عندما تكون العناصر جاهزة مبكرًا. ويشمل هذا الرقم فيلمًا مكتملًا، بينما يشمل الرقم المحلي أعلاه مقاطع TI2V-5B الخام غير المُحرَّرة فقط، لذا لا يمكن مقارنتهما مباشرة. الخدمة المستضافة تلغي الإعداد المحلي، لكن الإنتاج يظل يستغرق وقتًا.\n\nالخطط التي تدرجها invideo (لمعرفة الأسعار راجع [صفحة أسعار invideo](https://invideo.io/pricing/)):',
        blockquote:
          '**تريد إنشاء فيديوهات بالذكاء الاصطناعي دون إعداد محلي؟** إذا لم يتوفر لديك معالج رسومات قوي — أو ببساطة لا تريد قضاء ساعات في تثبيت أدوات الفيديو المحلية بالذكاء الاصطناعي وضبطها — تستحق invideo التجربة. [جرّب النسخة المجانية من invideo ←](https://invideo.io/pricing/)',
        columns: ['الخطة', 'الرصيد للمقعد شهريًا', 'الوصول إلى النماذج'],
        rows: [
          { 'الخطة': 'Free', 'الرصيد للمقعد شهريًا': 'حد أسبوعي', 'الوصول إلى النماذج': 'راجع صفحة الأسعار' },
          { 'الخطة': 'Starter', 'الرصيد للمقعد شهريًا': '400', 'الوصول إلى النماذج': 'نماذج مختارة؛ دون Seedance 2.5' },
          { 'الخطة': 'Plus', 'الرصيد للمقعد شهريًا': '2,000', 'الوصول إلى النماذج': 'جميع النماذج بحسب invideo' },
          { 'الخطة': 'Max', 'الرصيد للمقعد شهريًا': 'من 5,000', 'الوصول إلى النماذج': 'جميع النماذج بحسب invideo' },
        ],
        note:
          'أسماء الخطط والرصيد والوصول إلى النماذج كما وردت في صفحتي [الأسعار](https://invideo.io/pricing/) و[حدود الخطط](https://invideo.io/help/billing/plan-limits/) لدى invideo عند التحقق في 27 نوفمبر 2026. لا نذكر هنا أي أسعار: فعند العرض من أوروبا كانت الصفحة تعرض تخفيضًا لفترة محدودة، كما تختلف الخطط عمّا أدرجه هذا الدليل سابقًا. راجع الصفحة الحية قبل الاعتماد على أي تفصيل.',
        affiliateLinks: [
          { url: 'https://invideo.io/pricing/', productName: 'invideo', productCategory: 'video-generation', label: 'جرّب النسخة المجانية من invideo ←' },
        ],
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'سحابي أم محلي: أي باب يناسبك؟',
        content: 'النسخة المختصرة، مربوطة بأوضاع شائعة:',
        columns: ['وضعك', 'التوصية'],
        rows: [
          { 'وضعك': 'بلا معالج رسومات، أو أقل من 12GB VRAM', 'التوصية': 'Invideo (سحابي) — الخيارات المحلية دون هذا المستوى بمستوى مبتدئ' },
          { 'وضعك': 'تريد فيديو جاهزًا بتعليق صوتي، لا مقاطع خامًا', 'التوصية': 'Invideo (سحابي) — لا تُجمّع النماذج المحلية إنتاجًا كاملًا' },
          { 'وضعك': 'محكوم بموعد نهائي، لا تحمّل صفر للإعداد', 'التوصية': 'Invideo (سحابي)' },
          { 'وضعك': 'معالج رسومات 12GB+، مرتاح للإعداد، تريد الخصوصية وتكلفة هامشية صفرية', 'التوصية': 'محليًا: LTX-Video (12GB) أو Wan 2.2 (24GB لنماذج 14B المُكمَّمة)' },
          { 'وضعك': 'في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية', 'التوصية': 'محليًا فقط Wan 2.2 أو LTX-2 (ترخيص HunyuanVideo يستبعدك)' },
          { 'وضعك': 'تحتاج أتمتة/واجهة برمجية على نطاق واسع دون بنائها بنفسك', 'التوصية': 'Invideo (سحابي، خادم MCP)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'من يجب أن يختار invideo؟',
        content:
          '**يُعد invideo على الأرجح الخيار الأفضل إذا كنت:**\n\n- لا تملك معالج رسومات قويًا\n- تريد البدء في إنشاء الفيديوهات فورًا\n- لا تريد تثبيت وضبط ComfyUI أو CUDA أو النماذج أو بيئات Python\n- تريد سير عمل متكاملًا بدلًا من تجميع أدوات محلية متعددة\n- تحتاج النصوص والصوت والموسيقى والترجمة النصية وتوليد الفيديو في سير عمل واحد\n- تهتم بالفيديوهات الجاهزة أكثر من التجريب بالنماذج الأساسية\n\n**يُعد الذكاء الاصطناعي المحلي على الأرجح الخيار الأفضل إذا كنت:**\n\n- تملك بالفعل عتاد معالج رسومات مناسبًا\n- تريد أقصى قدر من التحكم\n- تريد التجريب بالنماذج وسير العمل\n- تمتلك مهارات تقنية قوية\n- تُقدّم إبقاء التوليد تحت تحكم محلي\n- تتوقع توليد أحجام كبيرة جدًا وتريد تحسين تكلفة التوليد الهامشية',
        blockquote:
          '**لست متأكدًا من المسار المناسب لك؟** إذا أردت تجنّب العتاد والإعداد التقني، فأبسط تجربة هي ببساطة تجربة invideo لمعرفة ما إذا كان سير عملها يناسب احتياجاتك. [جرّب invideo مجانًا ←](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'شاهدها قيد التطبيق',
        items: [
          '[4 Open Source AI Video Models Compared — Which One\'s Actually Free?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — مقارنة مباشرة لمخرجات LTX 2.3 وWan 2.2 وHunyuanVideo 1.5 وMiniMax H3، بما فيها تفاصيل التراخيص الدقيقة.',
          '[Invideo Agent One Review](https://www.youtube.com/watch?v=uUHO9byu0c0) — سير العمل الكامل من الأمر النصي إلى الفيديو الجاهز.',
          '[Wan 2.2 Full Local Demo](https://www.youtube.com/watch?v=fs62ML_ZgEs) — أزمنة تصيير صادقة على عتاد استهلاكي (أسبوع الإطلاق، يوليو 2025).',
          '[Low-VRAM Wan 2.2 Tutorial](https://www.youtube.com/watch?v=tQu0DjtOEyg) — تشغيل نموذج 14B على حاسوب محمول بذاكرة 6 جيجابايت (2025).',
        ],
        note:
          'هذه مقاطع فيديو من جهات خارجية، لم تُنتجها PromptQuorum ولا invideo. مُدرجة للرجوع فقط — لا تعني إقرارًا بالقناة أو محتواها الآخر.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني تشغيل توليد الفيديو بالذكاء الاصطناعي على 8 جيجابايت VRAM؟',
            a: 'بالكاد. يعمل إصدار Wan 2.2 من طراز TI2V-5B على 6–8 جيجابايت مُكمَّم، بجودة مخفَّضة وأطوال مقاطع قصيرة. بالنسبة للنماذج الجادة، 12 جيجابايت هو الحد الأدنى الحقيقي — ودون ذلك، تُعد أداة سحابية مثل invideo الإجابة العملية.',
          },
          {
            q: 'هل Wan 2.2 مجاني فعلًا للاستخدام التجاري؟',
            a: 'نعم. ترخيصه Apache 2.0 — استخدام تجاري متساهل بلا حد أدنى للإيرادات ولا استبعاد جغرافي (تسري الشروط القياسية لـ Apache مثل إشعارات الإسناد؛ راجع بطاقة النموذج)، وبلا مطالبة بحقوق على مخرجاتك. إنه من أكثر النماذج المحلية الكبرى تساهلاً في الترخيص.',
          },
          {
            q: 'هل يمكنني استخدام HunyuanVideo في الاتحاد الأوروبي أو المملكة المتحدة؟',
            a: 'ليس بموجب الترخيص كما هو مكتوب. ينص ترخيص Tencent Hunyuan Community License على أنه لا ينطبق في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية — وبحسب نص الترخيص يشمل ذلك النموذج نفسه ومخرجاته. راجع الترخيص بنفسك (هذا ليس استشارة قانونية) وفكّر في استخدام Wan 2.2 أو LTX-2 بدلًا منه.',
          },
          {
            q: 'هل أحتاج معالج رسومات لاستخدام invideo؟',
            a: 'لا. تعمل invideo بالكامل عبر المتصفح؛ يحدث كل التوليد على بنيتها التحتية. يُفترض أن يكفي حاسوب محمول عادي.',
          },
          {
            q: 'هل يمكن للنماذج المحلية إنتاج فيديو يوتيوب كامل بتعليق صوتي؟',
            a: 'ليس بمفردها. تولّد النماذج المحلية مقاطع خامًا مدتها 5 إلى 20 ثانية (يتضمن LTX-2 صوتًا متزامنًا؛ بينما البقية صامتة). يتطلب النص والتعليق الصوتي والموسيقى والترجمة النصية والمونتاج كل منها أدوات منفصلة تجمّعها بنفسك في خط إنتاج.',
          },
          {
            q: 'ما هو العائق الحقيقي وراء "مجانية" الفيديو المحلي بالذكاء الاصطناعي؟',
            a: 'تكلفة العتاد (معالج رسومات قادر)، ووقت الإعداد (ComfyUI وتبعياته)، وخط الإنتاج اليدوي المطلوب حول المقاطع الخام. لا توجد رسوم لكل توليد على أوزان النموذج؛ لكن العتاد والكهرباء يظلان مكلفين.',
          },
          {
            q: 'هل يوجد Wan 2.7 أو نموذج Wan أحدث؟',
            a: 'عند التحقق في 27 نوفمبر 2026، لم تعرض صفحة Wan الرسمية على GitHub أي مستودع أحدث بأوزان مفتوحة. وقد أعلنت Alibaba في أبريل 2026 أن [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) متاح على Alibaba Cloud. توخَّ الحذر من أي موقع آخر يعرض "أوزان Wan 2.7" — لا تُحمّل إلا من مستودعات GitHub أو Hugging Face الرسمية.',
          },
          {
            q: 'أنا مبتدئ تمامًا. من أين أبدأ؟',
            a: 'تتيح لك الخطة المجانية من invideo تجربة سير العمل السحابي دون شراء عتاد، والحكم على ما إذا كان الفيديو بالذكاء الاصطناعي يخدم أهدافك؛ ولهذه الخطة حدود. إذا اشتريت لاحقًا معالج رسومات قادرًا وأردت تحكمًا كاملًا وخصوصية، يبقى الباب المحلي مفتوحًا.',
          },
          {
            q: 'ما الفرق في تشغيل هذه النماذج المحلية على Mac مقابل Windows؟',
            a: 'يعمل ComfyUI على Apple Silicon (M1–M4) عبر واجهة MPS الخلفية في PyTorch. توقّع توليدًا أبطأ مما هو عليه على معالج NVIDIA مماثل؛ ليس لدينا قياس أداء مضبوط ولا نذكر نسبة سرعة. المشكلة العملية الأكبر هي دعم البرمجيات: تحسينات خاصة بـ CUDA تعتمد عليها هذه النماذج (flash-attention، أدوات تكميم GGUF/FP8) أقل نضجًا بكثير على Mac، لذا قد تفترض عدة أدلة تثبيت وسير عمل مجتمعية استخدام Windows أو Linux مع بطاقة NVIDIA، وقد تحتاج تعديلًا، أو ببساطة لن تعمل كما هو موثّق. ميزة واحدة: يمكن للذاكرة الموحّدة في Apple Silicon أن تسمح لك بتحميل نموذج أكبر في الذاكرة مما تسمح به بطاقة رسومات منفصلة بذاكرة مكافئة، رغم أنه يعمل بشكل أبطأ. إذا كنت تشتري عتادًا خصيصًا لتوليد الفيديو المحلي، فإن Windows أو Linux مع NVIDIA هو المسار المدعوم جيدًا؛ أما جهاز Mac الذي تملكه بالفعل فهو مناسب للتجريب، لا الهدف الموصى به لإنتاجية جادة.',
          },
          {
            q: 'هل يمكنني الحفاظ على ثبات الشخصية نفسها عبر عدة مقاطع فيديو محلية؟',
            a: 'نعم، مع جهد إضافي — لا يضمن أي من النماذج الثلاثة ذلك تلقائيًا عبر توليدات منفصلة. النهجان العمليان: تغذية صورة مرجعية واحدة في وضع تحويل الصورة إلى فيديو (تدعمه الثلاثة جميعًا)، أو تدريب LoRA صغير على شخصيتك. يمتلك كل من Wan 2.2 وLTX-2 سير عمل موثّق لـ LoRA لهذا الغرض — يُسمّى إصدار LTX-2 بـ IC-LoRA (LoRA سياقي) ويدعم صراحة اتساق شخصيات متعددة. تدريب LoRA على شخصيتك هو المسار الأكثر تطلبًا، وهدفه نتائج أكثر اتساقًا مما يعطيه أمر نصي أو صورة مرجعية واحدة؛ ولم نختبر حجم الفرق. تحلّ ميزات هوية العلامة التجارية والصور الرمزية بالذكاء الاصطناعي في invideo المشكلة نفسها بطريقة مختلفة — صورة رمزية وملف صوتي ثابتان تضبطهما مرة واحدة وتعيد استخدامهما، دون حاجة للتدريب.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'جرّب قبل أن تقرر',
        content:
          'لست بحاجة للالتزام بإعداد معالج رسومات محلي — أو اشتراك مدفوع — لمجرد تقييم سير العمل السحابي. قبل شراء عتاد أو قضاء عطلة نهاية أسبوع مع ComfyUI، يستحق الأمر قضاء خمس دقائق في الاتجاه المعاكس أولًا:\n\n1. جرّب النسخة المجانية من invideo.\n2. أنشئ فيديو قصيرًا واحدًا.\n3. قيّم جودة المخرجات وشعورك تجاه سير العمل.\n4. قارن تلك التجربة بجهد الإعداد الذي سيتطلبه تثبيت محلي.\n\nهذا يحوّل المقارنة من شيء تقرأ عنه إلى شيء يمكنك اختباره بنفسك في وقت أقل مما يستغرقه قراءة بقية هذا المقال.',
        blockquote:
          '[جرّب النسخة المجانية من invideo ←](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'اختر المسار المحلي إذا كنت تملك (أو ستشتري) معالج رسومات بذاكرة 12 جيجابايت فأكثر، وتستمتع ببناء أدواتك الخاصة، وتُقدّم الخصوصية والتوليد بلا رسوم لكل مقطع على الراحة. يُعد Wan 2.2 أساساً متيناً — جودة عالية، Apache 2.0 — مع LTX-2 كمتخصص في السرعة والصوت.\n\nاختر المسار السحابي إذا لم يتوفر لديك العتاد، أو لا تريد الإعداد، أو تحتاج فيديوهات جاهزة بدلًا من مقاطع خام. بالنسبة لمعظم من يريدون فقط صناعة فيديوهات مولَّدة بالذكاء الاصطناعي، يُعد المسار السحابي نقطة البداية الأسهل: إذا لم يتوفر لديك بالفعل العتاد والاهتمام التقني اللذان يتطلبهما التوليد المحلي، فإن خدمة مستضافة مثل invideo تعفيك من الإعداد المحلي. توجد خطة مجانية للتجربة؛ أما الخطط المدفوعة وحدودها فمذكورة في صفحة أسعار invideo. أبسط طريقة لمعرفة ما إذا كانت تناسب سير عملك هي تجربة النسخة المجانية.\n\nكلا البابين يؤديان إلى فيديو الذكاء الاصطناعي. لم يكن السؤال يومًا أي تقنية أفضل — بل أي سير عمل يناسب جهازك، وصبرك، وأهدافك.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Wan 2.2 on GitHub](https://github.com/Wan-Video/Wan2.2) — المستودع الرسمي، والترخيص، وتعليمات الإعداد.',
          '[Wan 2.2 on Hugging Face](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B) — بطاقة النموذج الرسمية والتحميل.',
          '[LTX model license](https://ltx.io/model/license) — شروط ترخيص LTX Community License الرسمية.',
          '[LTX-2 model page](https://ltx.io/model/ltx-2-3) — تفاصيل البنية والإصدار الرسمية.',
          '[HunyuanVideo 1.5 on GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) — المستودع الرسمي وملف الترخيص، بما فيه استبعاد الاتحاد الأوروبي/المملكة المتحدة/كوريا الجنوبية.',
          '[Engadget: ByteDance has reportedly suspended the global rollout of its new AI video generator](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) — تقرير صحفي من مارس 2026 (بالإنجليزية).',
          '[Alibaba Cloud Community: إعلان Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) — أبريل 2026 (بالإنجليزية).',
          '[حدود خطط invideo](https://invideo.io/help/billing/plan-limits/) — الحدود الرسمية للخطط والرصيد.',
          '[Invideo pricing](https://invideo.io/pricing/) — تفاصيل الخطط والأسعار الرسمية.',
          '[Invideo MCP server](https://invideo.io/ai/mcp) — توثيق الأتمتة الرسمي.',
          '[MiniMax H3 on GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — المستودع الرسمي.',
          '[MiniMax H3 on Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — أوزان النموذج الرسمية.',
          '[Invideo: How Long Does It Take to Make an AI Short Film?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — أرقام الجدول الزمني للإنتاج من البداية للنهاية الخاصة بـ invideo (2 إلى 5 أيام).',
          '[ComfyUI system requirements](https://docs.comfy.org/installation/system_requirements) — توثيق دعم Mac/Apple Silicon MPS الرسمي.',
          '[LTX Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — الدليل الرسمي لاتساق الشخصيات (IC-LoRA).',
          '[InsiderLLM: NVIDIA GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — مصدر أرقام أسعار GPU المستعملة (بيانات قوائم eBay الأمريكية).',
          '[Runway](https://runwayml.com/) — الموقع الرسمي للخدمة (الوصف العام المشار إليه أعلاه؛ لم تختبرها PromptQuorum).',
          '[Luma AI](https://lumalabs.ai/) — الموقع الرسمي للخدمة (الوصف العام المشار إليه أعلاه؛ لم تختبرها PromptQuorum).',
          '[Pika](https://pika.art/) — الموقع الرسمي للخدمة (الوصف العام المشار إليه أعلاه؛ لم تختبرها PromptQuorum).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[دليل AnimateDiff 2026: حرّك أي نموذج Stable Diffusion](/ar/power-local-llm/animatediff-video-generation-guide) — دليل متعمق لأداة واحدة لتحريك نقاط فحص وLoRAs الخاصة بـ SD1.5/SDXL الموجودة لديك، مختلف عن نماذج الفيديو الأصلية المقارنة هنا.',
          '[توليد الصور المحلي بالذكاء الاصطناعي مقابل السحابي](/ar/power-local-llm/local-ai-image-generation-vs-cloud) — المقال المكمّل، بالبنية نفسها، للصور بدلًا من الفيديو.',
          '[حاسبة VRAM للنماذج المحلية](/ar/local-llms/vram-calculator-local-llm) — متطلبات VRAM الدقيقة لكل نموذج وتكميم.',
          '[كم تحتاج من VRAM؟](/ar/local-llms/how-much-vram-local-llm) — جداول عبر أحجام النماذج من 7B إلى 70B.',
          '[أفضل معالجات الرسومات للذكاء الاصطناعي المحلي في 2026](/ar/local-llms/best-gpus-for-local-llms) — اختيارات عتاد حسب الميزانية.',
          '[أفضل معالجات الرسومات الاقتصادية للذكاء الاصطناعي المحلي](/ar/local-llms/best-budget-gpus-local-llm) — خيارات عتاد للمستوى الأساسي.',
          '[معالج الرسومات مقابل المعالج المركزي مقابل Apple Silicon](/ar/local-llms/gpu-vs-cpu-vs-apple-silicon) — مقارنة منصات للاستدلال المحلي.',
          '[أوامر النظام مقابل أوامر المستخدم](/ar/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — أساسيات هيكلة الأوامر التي تنتقل إلى أوامر الفيديو.',
          '[هندسة الأوامر للنماذج المحلية](/ar/local-llms/prompt-engineering-for-local-models) — تقنيات كتابة أوامر مُهيكلة.',
          '[مراجعة OpenShorts](/ar/power-local-llm/openshorts-review) و[مراجعة pyVideoTrans](/ar/power-local-llm/pyvideotrans-review) — أداتان للفيديوهات الموجودة لديك وليستا مولّدات فيديو: إحداهما تقصّ الفيديوهات الطويلة إلى مقاطع رأسية بترجمة مضمّنة، والأخرى تترجم الفيديو وتدبلجه.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-02-21',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-de.webp',
    title: 'Invideo vs. lokale KI-Videogenerierung: Die eine kostet eine GPU plus Ihr Wochenende – die andere ein Cloud-Abo',
    seoTitle: 'Cloud vs. lokale KI-Videos 2026: invideo vs. Wan 2.2 & LTX-2',
    intro:
      'Es gibt zwei Türen in die KI-Videogenerierung des Jahres 2026. Tür eins ist lokal: kostenlose, offene Videomodelle, die auf Ihrer eigenen GPU laufen – unbegrenzte Generierungen, Inferenz auf Ihrer eigenen Hardware (Modell-Downloads und Update-Prüfungen nutzen weiterhin das Netz), kein Abonnement, aber Sie bauen den gesamten Workflow selbst auf. Tür zwei ist die Cloud: invideo, ein gehosteter Dienst, der laut eigener Darstellung agentengestützt vom Skript oder von der Idee zum geschnittenen Video führt, direkt im Browser. Keine der beiden Türen ist grundsätzlich "besser". Dieser Leitfaden liefert das Kleingedruckte der Lizenzen, das die meisten Vergleiche auslassen, die tatsächlichen Hardware-Anforderungen und ein Entscheidungswerkzeug, das Ihre Situation auf eine Empfehlung abbildet.',
    metaDescription:
      'Lokale KI-Videomodelle (Wan 2.2, LTX-2, HunyuanVideo) sind gratis ladbar, wenn Ihre GPU sie schafft. So unterscheiden sie sich von invideos Cloud-Dienst.',
    twitterDescription:
      'Cloud vs. lokale KI-Videos 2026: invideo ist ein gehosteter Abo-Dienst. Wan 2.2, LTX-2 und HunyuanVideo lassen sich kostenlos für die eigene GPU laden – wenn sie groß genug ist.',
    audience:
      'Kreative und Entwickler, die zwischen kostenloser lokaler Videogenerierung auf der eigenen GPU und invideos Rundum-Cloud-Pipeline entscheiden – behandelt Hardware-Anforderungen, Lizenz-Kleingedrucktes und Workflow-Abwägungen.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale KI-Videogenerierung',
    targetKeywords: [
      'cloud vs. lokale ki-videogenerierung',
      'invideo vs. lokale ki-videos',
      'wan 2.2 vs ltx-2',
      'bestes open-source-videomodell 2026',
      'hunyuanvideo lokal',
      'ki-videogenerierung lokal ausführen',
      'wan 2.2 vram anforderungen',
      'ltx-2 lizenz',
      'gpu für lokale videogenerierung',
    ],
    current_models_mentioned: [
      'Wan 2.2 (T2V-A14B, I2V-A14B, TI2V-5B)',
      'LTX-2.5 / LTX-2.3',
      'HunyuanVideo 1.5',
      'MiniMax H3',
      'Kling 3.0',
      'Veo 3.1',
      'Seedance 2.5',
    ],
    current_hardware_mentioned: ['6 GB VRAM', '8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'RTX 3060', 'RTX 3090', 'RTX 4090'],
    leadAnswerBlock:
      '**Für die meisten Menschen mit einer GPU ab 12 GB ist Wan 2.2 ein starkes lokales KI-Videomodell im Jahr 2026** – Apache-2.0-lizenziert, ohne Umsatzgrenzen oder Gebietsbeschränkungen, kostenlos herunterladbar (Hardware und Strom kosten weiterhin Geld). **Invideo ist die bessere Wahl, wenn Sie diese GPU nicht besitzen oder ein fertiges, erzähltes Video statt eines rohen Clips wollen** – ein gehosteter Dienst im Browser, dessen kostenpflichtige Pläne (Starter, Plus, Max) sich beim Modellzugang unterscheiden; prüfen Sie die aktuelle Preisseite. **HunyuanVideo 1.5 ist in der Community für seinen filmischen Look beliebt, aber seine Lizenz schließt die EU, das Vereinigte Königreich und Südkorea vollständig aus** – überspringen Sie es, wenn Sie in diesen Regionen ansässig sind.',
    quickAnswerTop: {
      de: {
        question: 'Sollte ich KI-Videos lokal generieren oder invideos Cloud-Pipeline nutzen?',
        answer:
          'Generieren Sie lokal, wenn Sie eine GPU ab 12 GB haben, ohne Gebühren pro Clip generieren wollen und Wert auf Privatsphäre legen – Wan 2.2 (Apache 2.0, freizügige kommerzielle Nutzung – prüfen Sie die Modellkarte) ist ein sinnvoller Einstieg. Nutzen Sie invideo, wenn Sie keine passende Hardware haben, das Setup nicht selbst verwalten wollen oder ein vollständig fertiges Video (Skript, Voiceover, Musik, Untertitel) statt eines rohen Clips brauchen – es ist ein gehosteter Abo-Dienst mit kostenlosem Plan; aktuelle Preise stehen auf der Preisseite.',
        bullets: [
          'Unter 12 GB VRAM → invideo ist die praktische Wahl; unterhalb dieser Stufe bleiben lokal nur quantisierte Ergebnisse auf Einstiegsniveau.',
          '12 GB VRAM → LTX-Video 0.9.5, eine praktikable lokale Option auf dieser Stufe.',
          '16–24 GB+ VRAM → Wan 2.2 (starke Qualität, Apache 2.0 – freizügige kommerzielle Nutzung ohne Umsatzschwelle und ohne Gebietsausschluss; übliche Apache-Bedingungen wie Namensnennungshinweise gelten, prüfen Sie die Modellkarte) oder LTX-2 (Geschwindigkeit + synchronisierter Ton).',
          'In der EU, im Vereinigten Königreich oder in Südkorea → HunyuanVideo 1.5s Lizenz schließt Sie aus; nutzen Sie stattdessen Wan 2.2 oder LTX-2.',
          'Brauchen Sie ein fertiges, erzähltes Video statt eines rohen Clips → lokale Modelle generieren nur stumme (Ausnahme: LTX) Clips von 5–20 Sekunden; invideo bietet einen gehosteten Workflow rund um den Clip; was die Pläne enthalten, steht auf der Preisseite.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Warum 2026 ein merkwürdiger Moment für KI-Video ist', anchor: '#market-context' },
      { label: 'Die lokale Tür: Drei kostenlose Modelle auf Ihrer eigenen GPU', anchor: '#local-models' },
      { label: 'Wan 2.2 (Alibaba)', anchor: '#wan-2-2' },
      { label: 'LTX-2 (Lightricks)', anchor: '#ltx-2' },
      { label: 'HunyuanVideo 1.5 (Tencent)', anchor: '#hunyuanvideo' },
      { label: 'Einer zum Beobachten: MiniMax H3', anchor: '#one-to-watch' },
      { label: 'Die Hardware-Hürde', anchor: '#hardware-gate' },
      { label: 'Die DIY-Realität: Was "kostenlos" von Ihnen verlangt', anchor: '#diy-reality' },
      { label: 'Die Cloud-Tür: Was invideo bündelt', anchor: '#invideo-bundle' },
      { label: 'Cloud oder lokal: Welche Tür ist Ihre?', anchor: '#decision-guide' },
      { label: 'Wer sollte invideo wählen?', anchor: '#who-should-choose' },
      { label: 'Sehen Sie sie in Aktion', anchor: '#video-roundup' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Testen, bevor Sie entscheiden', anchor: '#try-before-you-decide' },
      { label: 'Das Fazit', anchor: '#verdict' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'Weiterführende Themen', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Wan 2.2 ist ein starkes lokales Videomodell unter der freizügigen Apache-2.0-Lizenz.** Freizügige kommerzielle Nutzung ohne Umsatzschwelle und ohne Gebietsausschluss (übliche Apache-Bedingungen wie Namensnennungshinweise gelten; prüfen Sie die Modellkarte).',
          '**Invideo ist eine gehostete Alternative** mit einem kostenlosen Plan sowie den kostenpflichtigen Plänen Starter, Plus und Max; laut Preisseite haben Plus und Max Zugang zu allen Modellen, einschließlich aller Seedance-Modelle. Die Preise variieren – prüfen Sie die aktuelle Seite.',
          '**HunyuanVideo 1.5s Lizenz schließt die EU, das Vereinigte Königreich und Südkorea ausdrücklich aus** – das betrifft sowohl das Modell als auch seine Ausgaben. Leser in diesen Regionen sollten stattdessen Wan 2.2 oder LTX-2 nutzen.',
          '**LTX-2 ist als auf Geschwindigkeit ausgelegtes Modell positioniert und als einziges dieser drei lokalen Modelle mit eingebautem synchronisiertem Ton ausgestattet**, kommerziell kostenlos für Unternehmen mit weniger als 10 Mio. $ Jahresumsatz.',
          '**12 GB VRAM sind die realistische Untergrenze für ernsthafte lokale Videogenerierung.** Darunter wird invideo zur praktischeren Option.',
          '**Lokale Modelle erzeugen rohe Clips von 5–20 Sekunden (stumm, außer bei LTX-2), keine fertigen Videos.** Skript, Voiceover, Musik, Untertitel und Schnitt sind separate Werkzeuge, die Sie selbst zusammenstellen – invideo will diese Schritte in einem gehosteten Workflow bündeln.',
          '**Bei der Prüfung am 27. November 2026 fand sich auf der offiziellen Wan-Seite bei GitHub kein Repository mit offenen Gewichten für "Wan 2.7".** Alibaba hat [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) im April 2026 als in der Alibaba Cloud verfügbares Modell angekündigt. Seien Sie vorsichtig bei Drittseiten, die "Wan-2.7-Gewichte" anbieten.',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Warum 2026 ein merkwürdiger Moment für KI-Video ist',
        content:
          'Der proprietäre Videomarkt war turbulent. Im März 2026 [berichtete Engadget](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) unter Berufung auf The Information, ByteDance habe den weltweiten Rollout von Seedance 2.0 nach Unterlassungsschreiben von Disney und Paramount Skydance pausiert. PromptQuorum hat diesen Bericht nicht unabhängig überprüft, und die Verfügbarkeit hat sich seither geändert: invideos Preisseite führt inzwischen Seedance 2.0 und 2.5 auf.\n\nSolche Umbrüche machen beide Türen attraktiv. Bereits heruntergeladene offene Modelle laufen unabhängig von Änderungen eines Anbieters weiter. Ein Multi-Modell-Dienst wie invideo bietet mehrere Modelle in einem Konto, doch das Angebot kann sich ändern – dass Ihr Workflow davon unberührt bleibt, ist nicht garantiert.',
      },
      localModels: {
        id: 'local-models',
        title: 'Die lokale Tür: Drei kostenlose Modelle auf Ihrer eigenen GPU',
        content:
          'Dieser Leitfaden vergleicht drei weit verbreitete Open-Weights-Systeme für die lokale Videogenerierung. Alle drei laufen über ComfyUI, eine knotenbasierte Oberfläche, die auf Ihrem eigenen Rechner installiert wird – kein Chat-Tool wie Ollama. Es handelt sich um Diffusionsmodelle, nicht um LLMs.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 ist 2026 ein starkes lokales Allround-Videomodell – Apache 2.0, hohe Qualität, keine Gebietsbeschränkungen –, während LTX-2 auf Geschwindigkeit setzt und synchronisierten Ton liefert und HunyuanVideo 1.5 in der Community für seinen filmischen Look beliebt ist, per Lizenz aber Nutzer aus der EU/UK/Südkorea ausschließt.' },
          { type: 'plain-terms', text: 'Wenn Sie nur eine Antwort wollen: Besorgen Sie sich eine GPU ab 12 GB und nutzen Sie Wan 2.2. Es bietet hohe Qualität und eine freizügige Apache-2.0-Lizenz.' },
        ],
        columns: ['Modell', 'Lizenz', 'VRAM', 'Ausgabe', 'Besonderes Merkmal'],
        rows: [
          { 'Modell': 'Wan 2.2 (Alibaba)', 'Lizenz': 'Apache 2.0 – freizügig, ohne Umsatzschwelle und Gebietsausschluss', 'VRAM': '6–8 GB (5B) / 15–25 GB (14B)', 'Ausgabe': '480p/720p, ~5-Sekunden-Clips', 'Besonderes Merkmal': '14B- und kompakte 5B-Variante' },
          { 'Modell': 'LTX-2 (Lightricks)', 'Lizenz': 'LTX Community License – kostenlos unter 10 Mio. $ Umsatz', 'VRAM': '18–20 GB quantisiert, 32 GB+ voll', 'Ausgabe': '480p–1080p, 5–20 s, mit Ton', 'Besonderes Merkmal': 'Audio+Video synchron (nur eines dieser drei)' },
          { 'Modell': 'HunyuanVideo 1.5 (Tencent)', 'Lizenz': 'Tencent Community License – schließt EU/UK/Südkorea aus', 'VRAM': 'mind. 14 GB, 24 GB komfortabel', 'Ausgabe': '480p/720p, bis zu 10 s', 'Besonderes Merkmal': 'Filmisches Licht; ab 14 GB mit Offloading' },
        ],
        note:
          '⚠️ Hinweis: Bei der Prüfung am 27. November 2026 fand sich auf der [offiziellen Wan-Seite bei GitHub](https://github.com/Wan-Video) kein Repository mit offenen Gewichten für "Wan 2.7"; Alibaba hat [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) als in der Alibaba Cloud verfügbar angekündigt. Seien Sie vorsichtig bei Seiten, die "Wan 2.7 Open Weights" anbieten, und laden Sie nur aus offiziellen GitHub- oder Hugging-Face-Repositories.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) – starke Qualität, Apache 2.0',
        content:
          'Wan 2.2 wird unter den offenen Videomodellen breit genutzt, mit vielen darauf aufbauenden Community-Derivaten (aktuelle Download-Zahlen finden Sie auf der Hugging-Face-Modellseite). Es erscheint in drei Varianten – T2V-A14B und I2V-A14B (Mixture-of-Experts, 27B gesamt / 14B aktive Parameter) sowie ein kompaktes TI2V-5B, das sowohl Text- als auch Bild-zu-Video mit nur 6–8 GB VRAM verarbeitet. Die 14B-Stufe benötigt 15 GB (GGUF Q3) bis 25 GB (FP8); der offizielle unquantisierte Befehl verlangt 80 GB. Die Lizenz ist Apache 2.0 – wirklich kostenlos, freizügige kommerzielle Nutzung ohne Umsatzschwelle und ohne Gebietsausschluss (übliche Apache-Bedingungen wie Namensnennungshinweise gelten; prüfen Sie die Modellkarte).\n\n**Geschwindigkeit, konkret:** Laut [offiziellem Wan-2.2-Repository](https://github.com/Wan-Video/Wan2.2) kann das kompakte Modell TI2V-5B ohne spezielle Optimierung einen 5-sekündigen 720p-Clip in weniger als 9 Minuten auf einer einzelnen Consumer-GPU erzeugen. Das ist die Angabe des Entwicklers, die PromptQuorum nicht überprüft hat, und sie beschreibt nicht die 14B-Varianten. Laut Repository läuft der Beispielbefehl für TI2V-5B auf einer GPU mit mindestens 24 GB VRAM (etwa einer RTX 4090); erwarten Sie diese Zeit also nicht auf einer 6–8-GB-Karte. Für eine 20-Sekunden-Sequenz müssen 4 separate 5-Sekunden-Clips erzeugt werden, also weniger als 36 Minuten reine Generierungszeit, wenn jeder die genannte Zeit braucht, plus manueller Schnitt zum Zusammenfügen. Das ist eine Rechnung mit dem Pro-Clip-Wert, kein gemessener 20-Sekunden-Benchmark.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) – Geschwindigkeit plus synchronisierter Ton',
        content:
          'LTX-2 ist das einzige offene Modell dieses Trios, das synchronisierten Ton und Bild in einem einzigen Durchgang generiert – Schritte, Umgebungsgeräusche und Effekte kommen zusammen mit dem Bild. Es ist außerdem als schnelles Modell positioniert, beim VRAM-Bedarf aber nicht das sparsamste (siehe die Zahlen unten). Die Architektur ist ein 22B-Diffusions-Transformer; LTX-2.3 (März 2026) wird weiterhin vollständig unterstützt, parallel zur aktuellen LTX-2.5-Version. Die Lizenz ist die LTX Community License – kostenlos für kommerzielle Nutzung, wenn der Gesamtumsatz Ihres Unternehmens unter 10 Mio. $ pro Jahr liegt, darüber ist eine kostenpflichtige kommerzielle Lizenz erforderlich. (Einige Drittanbieter-Artikel nennen es fälschlich Apache 2.0 – die [offizielle Lizenzseite](https://ltx.io/model/license) ist die einzig verlässliche Quelle.) Der Hardware-Bedarf liegt bei 18–20 GB VRAM quantisiert, 32 GB+ bei voller Präzision; auf 12-GB-Karten bleibt das ältere LTX-Video 0.9.5 die praktische Wahl.\n\n**Geschwindigkeit, konkret:** LTX-2 wird oft als schnell beschrieben, wir haben aber keine unabhängig verifizierte Minuten-pro-Clip-Angabe für eine RTX 4090 gefunden und nennen deshalb keine. Für das neuere LTX-2.5 gibt der Entwickler an, einen 10-sekündigen 720p-Bild-zu-Video-Clip in 6,8 Sekunden auf zwei NVIDIA-GB200-Superchips der Rechenzentrumsklasse zu erzeugen, nicht auf einer Consumer-GPU ([VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights), wo der Wert als Herstellerangabe ohne unabhängige Prüfung bezeichnet wird). Er sagt nichts darüber aus, was eine GPU zu Hause leistet.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) – der filmische Look, mit einem juristischen Haken',
        content:
          'Tencents 8,3B-Modell, veröffentlicht im November 2025, ist ein Community-Favorit für filmische Beleuchtung und Textur mit moderatem VRAM-Bedarf: 14 GB Minimum mit Offloading, 24 GB komfortabel. Es generiert nativ 480p/720p, über eingebaute Super-Resolution bis zu 1080p, Clips bis zu 10 Sekunden.\n\n**Geschwindigkeit, konkret:** Laut Tencents [Repository](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) kann eine einzelne RTX 4090 mit dem schrittdestillierten 480p-Bild-zu-Video-Modell ein Video innerhalb von 75 Sekunden erzeugen. Das ist die Angabe des Entwicklers, die PromptQuorum nicht überprüft hat. Die Cliplänge wird dort nicht genannt, deshalb rechnen wir den Wert nicht auf längere Sequenzen hoch.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Lizenzwarnung – vor dem Download lesen. HunyuanVideo 1.5 nutzt die Tencent Hunyuan Community License, nicht Apache 2.0. Die Lizenz gilt nicht in der Europäischen Union, im Vereinigten Königreich oder in Südkorea – laut Lizenztext sind Nutzer in diesen Regionen nicht berechtigt, das Modell oder seine Ausgaben zu verwenden. Außerdem ist eine separate Lizenz von Tencent erforderlich, wenn Ihre Produkte im Monat vor dem Release-Datum des Modells mehr als 100 Millionen monatlich aktive Nutzer hatten, und das Modell oder seine Ausgaben dürfen nicht zur Verbesserung anderer KI-Modelle verwendet werden (ausgenommen Tencent Hunyuan und dessen Derivate). Wenn Sie in der EU, im UK oder in Südkorea sind, überspringen Sie dieses Modell und erwägen Sie stattdessen Wan 2.2 (Apache 2.0, freizügige kommerzielle Nutzung ohne Gebietsausschluss).',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'Einer zum Beobachten: MiniMax H3',
        content:
          'Veröffentlicht am 3. August 2026, ist MiniMax H3 ein 33,1B-Omni-Modal-Modell mit nativem Stereo-Ton, ComfyUI-Unterstützung ab dem ersten Tag und quantisierten Versionen, die auf einer RTX 3060 laufen. Zwei Vorbehalte, bevor Sie es als vierte Wahl behandeln: Das lokale Release deckelt bei 768p (die vollständige 2K-Pipeline bleibt nur gehostet verfügbar), und seine [Community License](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE) nimmt die EU, das Vereinigte Königreich, Südkorea und die USA vom Lizenzgebiet aus und verlangt ab mehr als 20 Mio. $ Jahresumsatz eine gesonderte Genehmigung – lesen Sie sie, bevor Sie sich festlegen (dies ist keine Rechtsberatung). Die ersten Anzeichen sind stark, aber ein aktuelles Release und Produktionsreife sind zwei verschiedene Dinge.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'Die Hardware-Hürde',
        content: [
          'Lokale Videogenerierung ist so kostenlos wie ein Welpe kostenlos ist: Die Modellgewichte kosten nichts, aber die GPU ist der eigentliche Preis des Einstiegs. Verzichten Sie ganz auf lokale Generierung, wenn Ihre GPU unter 12 GB VRAM hat und Sie kein Upgrade planen – unterhalb dieser Stufe ist nur die quantisierte 5B-Variante von Wan 2.2 nutzbar, und zwar in Einsteigerqualität, und eine Cloud-Plattform ist dann wahrscheinlich der einfachere Weg.',
          'Nicht sicher, was das für Ihre Maschine bedeutet? Diese Leitfäden schlüsseln es auf: [VRAM-Rechner](/de/local-llms/vram-calculator-local-llm) für exakte Anforderungen pro Modell, [Wie viel VRAM brauchen Sie?](/de/local-llms/how-much-vram-local-llm) für Übersichten über Modellgrößen hinweg, [Beste GPUs für lokale KI](/de/local-llms/best-gpus-for-local-llms) und [Beste Budget-GPUs](/de/local-llms/best-budget-gpus-local-llm) für Hardware-Empfehlungen sowie [GPU vs. CPU vs. Apple Silicon](/de/local-llms/gpu-vs-cpu-vs-apple-silicon) für Plattformvergleiche. Ein ehrlicher Vorbehalt: Diese Leitfäden nutzen die LLM-VRAM-Formel (Parameter × Bits ÷ 8). Video-Diffusionsmodelle skalieren den VRAM-Bedarf zusätzlich mit Auflösung und Cliplänge – behandeln Sie deren Zahlen für Video-Workloads also als Untergrenze, nicht als Obergrenze.',
        ],
        columns: ['Ihre GPU', 'Was Sie ausführen können'],
        rows: [
          { 'Ihre GPU': '6–8 GB VRAM', 'Was Sie ausführen können': 'Wan 2.2 TI2V-5B (quantisiert) – brauchbar, Einstiegsqualität' },
          { 'Ihre GPU': '12 GB VRAM', 'Was Sie ausführen können': 'LTX-Video 0.9.5 – eine praktikable Option auf dieser Stufe' },
          { 'Ihre GPU': '16 GB VRAM', 'Was Sie ausführen können': 'HunyuanVideo 1.5 (falls Lizenz erlaubt), Wan 2.2 14B bei GGUF Q3' },
          { 'Ihre GPU': '24 GB+ VRAM', 'Was Sie ausführen können': 'Alle drei: Wan 2.2 14B (quantisiert), LTX-2 quantisiert, HunyuanVideo 1.5 (falls die Lizenz es erlaubt)' },
        ],
        note:
          'Grobe GPU-Kosten laut [GPU-Preis-Tracker von InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US-eBay-Angebotsdaten, kein Preisangebot): Gebrauchte RTX 3090 wurden für etwa 1.500–1.725 $ verkauft (Median 1.650 $; 225 Verkäufe, 13.–23. November 2026; Stand 2026-11-23). Für gebrauchte RTX 4090 nannte der Wert mit Stand 2026-10-15 Verkäufe für 2.575–3.010 $ (Median 2.860 $). Preise in Deutschland weichen wegen Steuern und Importkosten ab. GPU-Preise bewegen sich – prüfen Sie die aktuelle Preislage, statt sich über mehr als ein paar Monate hinweg auf diese Zahlen zu verlassen.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'Was der Betrieb lokaler Videogenerierung tatsächlich bedeutet',
        content:
          'Mit lokalen Modellen installieren Sie kein Videotool – Sie bauen eine Pipeline zusammen.\n\n**Das Generierungs-Setup.** ComfyUI ist knotenbasiert: Sie bauen einen Workflow-Graphen aus Loadern, Samplern und Decodern selbst auf – oder importieren und debuggen einen bestehenden. Rechnen Sie mit CUDA-Versionskonflikten, PyTorch-Pins und dem gelegentlichen `flash_attn`-Installationsfehler, bevor Ihr erstes Bild gerendert wird.\n\n**Das Prompten.** Videomodelle brauchen strukturierte Prompts – Einstellungsgröße, Kamerabewegung, Beleuchtung, Handlung des Subjekts – keine Einzeiler. Ein typischer ComfyUI-Workflow hat keine System-Prompt-Ebene. Die Repositories von [Wan 2.2](https://github.com/Wan-Video/Wan2.2) und [HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) bieten zwar eine Prompt-Erweiterung bzw. -Umformulierung, sie setzt aber ein separates Sprachmodell oder eine API voraus, die Sie selbst einrichten. Unsere Leitfäden zu [System-Prompts vs. User-Prompts](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) und [Prompt Engineering für lokale Modelle](/de/local-llms/prompt-engineering-for-local-models) behandeln Grundlagen, die sich direkt auf Video-Prompting übertragen lassen.\n\n**Alles rund um den Clip.** Lokale Modelle geben rohe, stumme (Ausnahme: LTX) Clips von 5–20 Sekunden aus. Skript, Voiceover, Musik, Stock-Footage, Untertitel und Schnitt sind jeweils separate Werkzeuge, die Sie selbst auswählen, installieren und miteinander verbinden.',
        promptExamples: [
          { label: 'Schwach (Einzeiler)', text: 'Ein Hund am Strand' },
          { label: 'Strukturiert (was Videomodelle brauchen)', text: 'Golden Retriever sprintet bei goldenem Licht an einer nassen Küstenlinie entlang, niedriger seitlicher Tracking-Shot, geringe Schärfentiefe, warmes Gegenlicht, sanfte Zeitlupe, filmisches 24-fps-Bild' },
        ],
        note:
          'Subjekt und Handlung, Kameraverhalten, Beleuchtung, Stil – vier Zutaten in einem Satz sind der Unterschied zwischen einem Glücksspielautomaten und einer Kamera. Wenn dieser DIY-Stack aufregend klingt, ist die lokale Tür Ihre. Wenn es anstrengend klang, lesen Sie weiter.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'Die Cloud-Tür: Was invideo bündelt',
        highlight: true,
        itemHeadings: true,
        content:
          'Invideo ist ein Beispiel für die Cloud-Tür – nicht das einzige, und es lohnt sich zu wissen, wie es sich von den anderen unterscheidet, bevor Sie annehmen, "Cloud" bedeute nur eine Sache. Laut ihren öffentlichen Beschreibungen (PromptQuorum hat keinen dieser drei Dienste getestet) integriert sich Runway direkt in professionelle Editoren (Premiere Pro, Final Cut, DaVinci Resolve) und zielt auf hybride KI-plus-Editor-Workflows statt auf ein fertiges, zusammengesetztes Video. Laut denselben Beschreibungen spezialisiert sich Luma AIs Dream Machine auf natives 16-Bit-HDR-Output für VFX-Compositing-Pipelines (After Effects, Nuke) – ein völlig anderes Publikum. Laut denselben Beschreibungen konzentriert sich Pika auf die schnelle Generierung roher Clips; ob der Dienst Skript, Voiceover oder Stock-Footage-Zusammenstellung bietet, hat PromptQuorum nicht geprüft – klären Sie das, bevor Sie sich für die Arbeit rund um den Clip darauf verlassen. In der eigenen Darstellung verbindet invideo Storyboarding, Skripterstellung und Timeline-Schnitt mit Zugang zu Generierungsmodellen wie Kling, Veo und Seedance.\n\nInvideo ist kein einzelnes Videomodell, sondern ein gehosteter Dienst. Bei der Prüfung am 27. November 2026 zeigte [die Startseite](https://invideo.io/) einen agentengestützten Videoeditor mit Storyboarding aus Skript oder Idee, Skripterstellung und Mehrspur-Timeline; die Website führt außerdem KI-Werkzeuge für Stimme und Musik auf. PromptQuorum hat den Dienst nicht getestet – prüfen Sie also, ob Voiceover und Untertitel so funktionieren, wie Sie es brauchen. Er läuft im Browser – Ihre GPU spielt keine Rolle.\n\nFür alle, die heute mit dem Videomachen anfangen wollen, statt GPUs und Quantisierungsformate zu recherchieren, ist invideo die praktische Wahl: keine lokale Hardware-Anforderung, keine ComfyUI-Installation oder CUDA-Fehlersuche, und ein gehosteter Arbeitsbereich für die Schritte rund um den Clip. Es eignet sich besonders für Kreative, denen das fertige Video wichtiger ist als die Kontrolle über das zugrunde liegende Generierungsmodell – und da es einen kostenlosen Plan gibt, können Sie herausfinden, ob das zu Ihnen passt, bevor Sie etwas ausgeben.\n\nDrei Dinge stechen für diesen Vergleich hervor:\n\n- **Mehrere Modelle, ein Konto.** Laut invideos Preisseite haben Plus und Max Zugang zu allen Modellen, einschließlich aller Seedance-Modelle; Starter umfasst ausgewählte Modelle ohne Seedance 2.5. Das Angebot kann sich ändern.\n- **Agentenzugang ist eingebaut.** invideo bietet einen [MCP-Server](https://invideo.io/ai/mcp), über den KI-Agenten im Timeline-Editor arbeiten können.\n- **Es gibt einen kostenlosen Plan.** invideos [Seite zu den Planlimits](https://invideo.io/help/billing/plan-limits/) beschreibt dafür ein Wochenlimit; prüfen Sie die Regeln zu Export und Wasserzeichen, bevor Sie sich darauf verlassen.\n\n**Geschwindigkeit, konkret – und der ehrliche Haken:** Laut invideo ist die Roh-Generierung schnell. Aber invideos eigene FAQ nennt für die vollständige End-to-End-Produktion eines Kurzfilms 2–5 Tage, nicht Minuten – denn nicht die Generierung selbst kostet Zeit, sondern das Auswählen und Zusammenstellen aus mehreren generierten Optionen. Die [invideo-FAQ](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) nennt 2 Tage als Untergrenze für Filme von 1–3 Minuten, wenn die Assets früh feststehen. Dieser Wert gilt für einen fertigen Film, der lokale Wert oben nur für rohe, ungeschnittene TI2V-5B-Clips; beide sind daher nicht direkt vergleichbar. Ein gehosteter Dienst erspart die lokale Einrichtung, die Produktion braucht trotzdem Zeit.\n\nVon invideo aufgeführte Pläne (Preise siehe [invideos Preisseite](https://invideo.io/pricing/)):',
        blockquote:
          '**Möchten Sie KI-Videos ohne lokales Setup erstellen?** Wenn Sie keine leistungsstarke GPU besitzen – oder schlicht keine Stunden mit der Installation und Konfiguration lokaler KI-Videotools verbringen wollen – lohnt sich ein Test von invideo. [Invideos kostenlose Version testen →](https://invideo.io/pricing/)',
        columns: ['Plan', 'Credits pro Platz/Monat', 'Modellzugang'],
        rows: [
          { 'Plan': 'Free', 'Credits pro Platz/Monat': 'Wochenlimit', 'Modellzugang': 'Siehe Preisseite' },
          { 'Plan': 'Starter', 'Credits pro Platz/Monat': '400', 'Modellzugang': 'Ausgewählte Modelle; ohne Seedance 2.5' },
          { 'Plan': 'Plus', 'Credits pro Platz/Monat': '2.000', 'Modellzugang': 'Alle Modelle, laut invideo' },
          { 'Plan': 'Max', 'Credits pro Platz/Monat': 'ab 5.000', 'Modellzugang': 'Alle Modelle, laut invideo' },
        ],
        note:
          'Plannamen, Credits und Modellzugang laut invideos [Preisseite](https://invideo.io/pricing/) und [Seite zu den Planlimits](https://invideo.io/help/billing/plan-limits/), geprüft am 27. November 2026. Hier werden keine Preise genannt: Beim Abruf aus Europa zeigte die Seite eine zeitlich begrenzte Rabattaktion, und die Pläne weichen von den früher in diesem Leitfaden aufgeführten ab. Prüfen Sie die aktuelle Seite, bevor Sie sich auf eine Angabe verlassen.',
        affiliateLinks: [
          { url: 'https://invideo.io/pricing/', productName: 'invideo', productCategory: 'video-generation', label: 'Invideos kostenlose Version testen →' },
        ],
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Cloud oder lokal: Welche Tür ist Ihre?',
        content: 'Die Kurzversion, auf typische Situationen abgebildet:',
        columns: ['Ihre Situation', 'Empfehlung'],
        rows: [
          { 'Ihre Situation': 'Keine GPU, oder unter 12 GB VRAM', 'Empfehlung': 'Invideo (Cloud) – lokale Optionen sind darunter nur Einstiegsniveau' },
          { 'Ihre Situation': 'Wollen ein fertiges Video mit Voiceover, keine rohen Clips', 'Empfehlung': 'Invideo (Cloud) – lokale Modelle stellen keine vollständige Produktion zusammen' },
          { 'Ihre Situation': 'Termindruck, keine Toleranz für Setup', 'Empfehlung': 'Invideo (Cloud)' },
          { 'Ihre Situation': 'GPU ab 12 GB, Setup ist kein Problem, wollen Privatsphäre und 0 $ Grenzkosten', 'Empfehlung': 'Lokal: LTX-Video (12 GB) oder Wan 2.2 (24 GB für die quantisierten 14B-Modelle)' },
          { 'Ihre Situation': 'In der EU, im Vereinigten Königreich oder in Südkorea', 'Empfehlung': 'Lokal = nur Wan 2.2 oder LTX-2 (HunyuanVideos Lizenz schließt Sie aus)' },
          { 'Ihre Situation': 'Brauchen Automatisierung/API im großen Maßstab, ohne sie selbst zu bauen', 'Empfehlung': 'Invideo (Cloud, MCP-Server)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'Wer sollte invideo wählen?',
        content:
          '**Invideo ist vermutlich die bessere Wahl, wenn Sie:**\n\n- keine leistungsstarke GPU besitzen\n- sofort mit dem Erstellen von Videos beginnen wollen\n- ComfyUI, CUDA, Modelle oder Python-Umgebungen nicht installieren und konfigurieren wollen\n- einen integrierten Workflow statt der Zusammenstellung mehrerer lokaler Tools bevorzugen\n- Skripte, Stimme, Musik, Untertitel und Videogenerierung in einem Workflow brauchen\n- fertige Videos wichtiger finden als das Experimentieren mit den zugrunde liegenden Modellen\n\n**Lokale KI ist vermutlich die bessere Wahl, wenn Sie:**\n\n- bereits passende GPU-Hardware besitzen\n- maximale Kontrolle wollen\n- mit Modellen und Workflows experimentieren wollen\n- über starke technische Fähigkeiten verfügen\n- Wert darauf legen, die Generierung lokal unter Kontrolle zu behalten\n- sehr große Mengen generieren und die Grenzkosten pro Generierung optimieren wollen',
        blockquote:
          '**Nicht sicher, welcher Weg zu Ihnen passt?** Wenn Sie Hardware und technisches Setup vermeiden möchten, ist das einfachste Experiment, invideo einfach auszuprobieren und zu sehen, ob der Workflow zu Ihnen passt. [Invideo kostenlos testen →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'Sehen Sie sie in Aktion',
        items: [
          '[4 Open-Source-KI-Videomodelle im Vergleich – welches ist wirklich kostenlos?](https://www.youtube.com/watch?v=NHdYVssM6Aw) – Ausgabe von LTX 2.3, Wan 2.2, HunyuanVideo 1.5 und MiniMax H3 im direkten Vergleich, inklusive Lizenz-Kleingedrucktem.',
          '[Invideo Agent One Review](https://www.youtube.com/watch?v=uUHO9byu0c0) – der vollständige Workflow von Prompt bis fertigem Video.',
          '[Wan 2.2 vollständige lokale Demo](https://www.youtube.com/watch?v=fs62ML_ZgEs) – ehrliche Renderzeiten auf Consumer-Hardware (Launch-Woche, Juli 2025).',
          '[Wan-2.2-Tutorial mit wenig VRAM](https://www.youtube.com/watch?v=tQu0DjtOEyg) – das 14B-Modell auf einem 6-GB-Laptop (2025).',
        ],
        note:
          'Dies sind Videos von Drittanbietern, nicht produziert von PromptQuorum oder invideo. Nur zu Referenzzwecken eingebunden – keine Empfehlung des Kanals oder seiner sonstigen Inhalte impliziert.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Kann ich KI-Videogenerierung mit 8 GB VRAM ausführen?',
            a: 'Knapp. Wan 2.2s TI2V-5B-Variante läuft quantisiert auf 6–8 GB, mit reduzierter Qualität und kurzen Cliplängen. Für die ernsthaften Modelle sind 12 GB die reale Untergrenze – und darunter ist ein Cloud-Tool wie invideo die praktische Antwort.',
          },
          {
            q: 'Ist Wan 2.2 wirklich kostenlos für kommerzielle Nutzung?',
            a: 'Ja. Es ist Apache 2.0 – freizügige kommerzielle Nutzung ohne Umsatzschwelle und ohne Gebietsausschluss (übliche Apache-Bedingungen wie Namensnennungshinweise gelten; prüfen Sie die Modellkarte), keine Rechte, die an Ihren Ausgaben beansprucht werden. Es gehört zu den freizügiger lizenzierten Top-Lokalmodellen.',
          },
          {
            q: 'Kann ich HunyuanVideo in der EU oder im UK nutzen?',
            a: 'Nicht nach dem Wortlaut der Lizenz. Die Tencent Hunyuan Community License besagt, dass sie in der EU, im UK und in Südkorea nicht gilt – laut Lizenztext betrifft das sowohl das Modell selbst als auch seine Ausgaben. Prüfen Sie die Lizenz selbst (dies ist keine Rechtsberatung) und erwägen Sie stattdessen Wan 2.2 oder LTX-2.',
          },
          {
            q: 'Brauche ich eine GPU, um invideo zu nutzen?',
            a: 'Nein. Invideo läuft vollständig im Browser; die gesamte Generierung findet auf der Infrastruktur des Anbieters statt. Ein gewöhnlicher Laptop sollte ausreichen.',
          },
          {
            q: 'Können lokale Modelle ein vollständiges YouTube-Video mit Voiceover erzeugen?',
            a: 'Nicht von sich aus. Lokale Modelle generieren rohe Clips von 5–20 Sekunden (LTX-2 inklusive synchronisiertem Ton, die anderen sind stumm). Skript, Voiceover, Musik, Untertitel und Schnitt erfordern jeweils separate Werkzeuge, die Sie selbst zu einer Pipeline zusammenstellen.',
          },
          {
            q: 'Was ist der tatsächliche Haken bei "kostenlosen" lokalen KI-Videos?',
            a: 'Hardware-Kosten (eine leistungsfähige GPU), Setup-Zeit (ComfyUI und seine Abhängigkeiten) und die DIY-Pipeline rund um die rohen Ausgabe-Clips. Für die Modellgewichte fällt keine Gebühr pro Generierung an; Hardware und Strom kosten weiterhin Geld.',
          },
          {
            q: 'Gibt es ein Wan 2.7 oder ein neueres Wan-Modell?',
            a: 'Bei der Prüfung am 27. November 2026 fand sich auf der offiziellen Wan-Seite bei GitHub kein neueres Wan-Repository mit offenen Gewichten. Alibaba hat [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) im April 2026 als in der Alibaba Cloud verfügbar angekündigt. Seien Sie vorsichtig bei anderen Seiten, die "Wan-2.7-Gewichte" anbieten – laden Sie nur aus den offiziellen GitHub- oder Hugging-Face-Repositories herunter.',
          },
          {
            q: 'Ich bin kompletter Anfänger. Wo sollte ich anfangen?',
            a: 'Mit invideos kostenlosem Plan können Sie den Cloud-Workflow ohne Hardwarekauf ausprobieren und beurteilen, ob KI-Video Ihren Zielen dient; der Plan hat Limits. Wenn Sie später eine leistungsfähige GPU kaufen und volle Kontrolle sowie Privatsphäre wollen, bleibt die lokale Tür offen.',
          },
          {
            q: 'Was ist beim Ausführen dieser lokalen Modelle auf Mac vs. Windows anders?',
            a: 'ComfyUI läuft auf Apple Silicon (M1–M4) über PyTorchs MPS-Backend. Rechnen Sie mit langsamerer Generierung als auf einer vergleichbaren NVIDIA-GPU; wir haben keinen kontrollierten Benchmark und nennen keinen Geschwindigkeitsfaktor. Das größere praktische Problem ist die Software-Unterstützung: CUDA-spezifische Optimierungen, auf die diese Modelle setzen (Flash-Attention, GGUF/FP8-Quantisierungswerkzeuge), sind auf dem Mac deutlich weniger ausgereift, sodass mehrere Community-Workflows und Installationsanleitungen Windows oder Linux mit einer NVIDIA-Karte voraussetzen und Anpassungen brauchen oder schlicht nicht wie dokumentiert laufen. Ein Vorteil: Der einheitliche Speicher (Unified Memory) von Apple Silicon kann ein größeres Modell im Speicher unterbringen, als eine dedizierte GPU mit gleichem VRAM erlauben würde, auch wenn die Ausführung langsamer ist. Wenn Sie speziell für lokale Videogenerierung Hardware kaufen, ist Windows oder Linux plus NVIDIA der gut unterstützte Weg; ein bereits vorhandener Mac eignet sich zum Experimentieren, ist aber nicht die empfohlene Zielplattform für ernsthaften Durchsatz.',
          },
          {
            q: 'Kann ich denselben Charakter über mehrere lokale Video-Clips hinweg konsistent halten?',
            a: 'Ja, mit zusätzlichem Aufwand – keines der drei Modelle garantiert das standardmäßig über separate Generierungen hinweg. Die zwei funktionierenden Ansätze: dasselbe Referenzbild in den Bild-zu-Video-Modus einspeisen (alle drei unterstützen I2V), oder eine kleine LoRA auf Ihren Charakter trainieren. Sowohl Wan 2.2 als auch LTX-2 haben dokumentierte LoRA-Workflows dafür – LTX-2s Variante heißt IC-LoRA (In-Context-LoRA) und unterstützt ausdrücklich Konsistenz über mehrere Charaktere hinweg. Eine LoRA auf Ihren Charakter zu trainieren ist der aufwendigere Weg und zielt auf konsistentere Ergebnisse als ein Prompt oder ein einzelnes Referenzbild; wie groß der Unterschied ist, haben wir nicht getestet. Invideos Brand-Kit- und KI-Avatar-Funktionen lösen dasselbe zugrunde liegende Problem anders – ein einmal konfiguriertes, wiederverwendbares Avatar- und Stimmprofil, ohne Training.',
          },
          {
            q: 'Muss ich bei der Nutzung lokaler KI-Videomodelle die DSGVO beachten?',
            a: 'Bei lokaler Generierung mit Wan 2.2, LTX-2 oder HunyuanVideo läuft die Inferenz auf Ihrem eigenen Rechner; Eingabebilder und generierte Videos werden dabei nicht an einen Cloud-Dienst übermittelt (Modell-Downloads sowie etwaige Update- oder Telemetrie-Funktionen von ComfyUI und Erweiterungen bleiben davon unberührt). Das kann Fragen zur Auftragsverarbeitung (Art. 28 DSGVO) für diesen Verarbeitungsschritt entfallen lassen. Bei invideo als Cloud-Dienst werden Ihre Skripte, Eingaben und Videos vom Anbieter und gegebenenfalls von eingebundenen Modellanbietern verarbeitet; prüfen Sie vor dem Hochladen personenbezogener oder sensibler Inhalte Auftragsverarbeitungsvertrag, Serverstandort und Datenschutzerklärung. Ob Ihr Einsatz insgesamt datenschutzkonform ist, hängt von Rechtsgrundlage sowie Ihren technischen und organisatorischen Maßnahmen ab; dies ist keine Rechtsberatung.',
          },
          {
            q: 'Eignet sich diese Vergleichsentscheidung für den deutschen Mittelstand?',
            a: 'Ja, mit unterschiedlichen Schwerpunkten je nach Ressourcen. Für kleinere Mittelstandsunternehmen ohne eigene GPU-Infrastruktur oder IT-Abteilung für die ComfyUI-Wartung kann ein gehosteter Dienst wie invideo näherliegen: Es ist keine Hardware-Investition nötig; Kosten, Planlimits und die Eignung der Funktionen für Skript, Voiceover und Untertitel sollten Sie vorab auf den aktuellen Anbieterseiten prüfen. Unternehmen mit vorhandener GPU-Hardware (z. B. aus anderen KI-Projekten) und Interesse an voller Datenkontrolle sollten Wan 2.2 prüfen – Apache 2.0 sieht keine Umsatzschwelle vor, und es fallen keine Gebühren pro Video an (Hardware, Strom und Betrieb kosten weiterhin Geld).',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Testen, bevor Sie entscheiden',
        content:
          'Sie müssen sich nicht auf ein lokales GPU-Setup – oder ein kostenpflichtiges Abonnement – festlegen, nur um den Cloud-Workflow zu bewerten. Bevor Sie Hardware kaufen oder ein Wochenende mit ComfyUI verbringen, lohnt es sich, zunächst fünf Minuten den anderen Weg zu gehen:\n\n1. Testen Sie invideos kostenlose Version.\n2. Erstellen Sie ein kurzes Video.\n3. Bewerten Sie die Ausgabequalität und wie sich der Workflow angefühlt hat.\n4. Vergleichen Sie diese Erfahrung mit dem Setup-Aufwand einer lokalen Installation.\n\nDas verwandelt den Vergleich von etwas, worüber Sie lesen, in etwas, das Sie selbst testen können – in weniger Zeit, als den Rest dieses Artikels zu lesen braucht.',
        blockquote:
          '[Invideos kostenlose Version testen →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'Das Fazit',
        content:
          'Gehen Sie lokal, wenn Sie eine GPU ab 12 GB haben (oder kaufen werden), gerne eigene Werkzeuge aufbauen und Privatsphäre sowie das Generieren ohne Gebühren pro Clip höher gewichten als Bequemlichkeit. Wan 2.2 ist eine solide Grundlage – hohe Qualität, Apache 2.0 –, mit LTX-2 als Spezialist für Geschwindigkeit und Ton.\n\nGehen Sie in die Cloud, wenn Sie die Hardware nicht haben, das Setup nicht wollen oder fertige Videos statt roher Clips brauchen. Für die meisten Menschen, die einfach nur KI-generierte Videos machen wollen, ist die Cloud-Route der einfachere Einstieg: Wenn Sie nicht bereits die Hardware und das technische Interesse mitbringen, die lokale Generierung erfordert, nimmt Ihnen ein gehosteter Dienst wie invideo das lokale Setup ab. Zum Testen gibt es einen kostenlosen Plan; kostenpflichtige Pläne und ihre Limits stehen auf invideos Preisseite. Der einfachste Weg herauszufinden, ob es zu Ihrem Workflow passt, ist, die kostenlose Version zu testen.\n\nBeide Türen führen zu KI-Video. Die Frage war nie, welche Technologie besser ist – sondern welcher Workflow zu Ihrer Maschine, Ihrer Geduld und Ihren Zielen passt.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Wan 2.2 auf GitHub](https://github.com/Wan-Video/Wan2.2) – offizielles Repository, Lizenz und Setup-Anleitung.',
          '[Wan 2.2 auf Hugging Face](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B) – offizielle Modellkarte und Download.',
          '[LTX-Modelllizenz](https://ltx.io/model/license) – offizielle Bedingungen der LTX Community License.',
          '[LTX-2-Modellseite](https://ltx.io/model/ltx-2-3) – offizielle Architektur- und Release-Details.',
          '[HunyuanVideo 1.5 auf GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) – offizielles Repository und LICENSE-Datei, inklusive des EU/UK/Südkorea-Ausschlusses.',
          '[Engadget: ByteDance has reportedly suspended the global rollout of its new AI video generator](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) – Pressebericht vom März 2026 (Englisch).',
          '[Alibaba Cloud Community: Ankündigung von Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) – April 2026 (Englisch).',
          '[invideo Planlimits](https://invideo.io/help/billing/plan-limits/) – offizielle Plan- und Credit-Limits.',
          '[Invideo-Preise](https://invideo.io/pricing/) – offizielle Plan- und Preisdetails.',
          '[Invideo-MCP-Server](https://invideo.io/ai/mcp) – offizielle Automatisierungsdokumentation.',
          '[MiniMax H3 auf GitHub](https://github.com/MiniMax-AI/MiniMax-H3) – offizielles Repository.',
          '[MiniMax H3 auf Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) – offizielle Modellgewichte.',
          '[Invideo: Wie lange dauert es, einen KI-Kurzfilm zu erstellen?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) – invideos eigene End-to-End-Produktionszeit-Zahlen (2–5 Tage).',
          '[ComfyUI-Systemanforderungen](https://docs.comfy.org/installation/system_requirements) – offizielle Dokumentation zur Mac-/Apple-Silicon-MPS-Unterstützung.',
          '[LTX-Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) – offizieller Leitfaden zur Charakterkonsistenz (IC-LoRA).',
          '[InsiderLLM: NVIDIA GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) – Quelle der Gebrauchtpreise für GPUs (US-eBay-Angebotsdaten).',
          '[Runway](https://runwayml.com/) – offizielle Website; Grundlage der oben genannten öffentlichen Beschreibung (von PromptQuorum nicht getestet).',
          '[Luma AI](https://lumalabs.ai/) – offizielle Website; Grundlage der oben genannten öffentlichen Beschreibung (von PromptQuorum nicht getestet).',
          '[Pika](https://pika.art/) – offizielle Website; Grundlage der oben genannten öffentlichen Beschreibung (von PromptQuorum nicht getestet).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Themen',
        items: [
          '[AnimateDiff 2026: Stable-Diffusion-Modelle animieren, Kosten & VRAM](/de/power-local-llm/animatediff-video-generation-guide) – Deep-Dive zu einem einzelnen Tool für die Animation vorhandener SD1.5/SDXL-Checkpoints und LoRAs, anders als die hier verglichenen nativen Video-Modelle.',
          '[Lokale KI-Bildgenerierung vs. Cloud](/de/power-local-llm/local-ai-image-generation-vs-cloud) – das begleitende Stück, gleiche Struktur, für Bilder statt Video.',
          '[VRAM-Rechner für lokale Modelle](/de/local-llms/vram-calculator-local-llm) – exakte VRAM-Anforderungen pro Modell und Quantisierung.',
          '[Wie viel VRAM brauchen Sie?](/de/local-llms/how-much-vram-local-llm) – Übersichten über Modellgrößen von 7B bis 70B.',
          '[Beste GPUs für lokale KI 2026](/de/local-llms/best-gpus-for-local-llms) – Hardware-Empfehlungen nach Budgetstufe.',
          '[Beste Budget-GPUs für lokale KI](/de/local-llms/best-budget-gpus-local-llm) – Einstiegs-Hardware-Optionen.',
          '[GPU vs. CPU vs. Apple Silicon](/de/local-llms/gpu-vs-cpu-vs-apple-silicon) – Plattformvergleich für lokale Inferenz.',
          '[System-Prompts vs. User-Prompts](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) – Grundlagen der Prompt-Strukturierung, die sich auf Video-Prompting übertragen lassen.',
          '[Prompt Engineering für lokale Modelle](/de/local-llms/prompt-engineering-for-local-models) – strukturierte Prompting-Techniken.',
          '[OpenShorts Rezension](/de/power-local-llm/openshorts-review) und [pyVideoTrans Rezension](/de/power-local-llm/pyvideotrans-review) — zwei Werkzeuge für vorhandene Videos statt Videogeneratoren: das eine schneidet lange Videos in untertitelte Hochformat-Clips, das andere übersetzt und vertont Videos.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-02-21',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-es.webp',
    title: 'Invideo vs. IA de Video Local: Una Cuesta una GPU Más Tu Fin de Semana — la Otra, una Suscripción en la Nube',
    seoTitle: 'IA de Video en la Nube vs Local 2026: invideo vs Wan 2.2 y LTX-2',
    intro:
      'Hay dos puertas de entrada a la IA de video en 2026. La puerta uno es local: modelos de video abiertos y gratuitos que corren en tu propia GPU — generaciones ilimitadas, con la inferencia corriendo en tu propio hardware (las descargas de modelos y las comprobaciones de actualizaciones siguen usando la red), sin suscripción, pero tienes que construir todo el flujo de trabajo tú mismo. La puerta dos es la nube: invideo, un servicio alojado que anuncia un recorrido asistido por agentes desde un guion o una idea hasta un video editado, directo desde tu navegador. Ninguna puerta es "mejor". Esta guía te da la letra pequeña de las licencias que la mayoría de las comparaciones omiten, los requisitos reales de hardware y una herramienta de decisión que asocia tu situación con una recomendación.',
    metaDescription:
      'Los modelos de video IA local (Wan 2.2, LTX-2, HunyuanVideo) se descargan gratis si tu GPU puede con ellos. Así se comparan con la nube de invideo.',
    twitterDescription:
      'IA de video, nube vs. local en 2026: invideo es un servicio alojado por suscripción. Wan 2.2, LTX-2 y HunyuanVideo se descargan gratis para tu GPU, si es lo bastante potente.',
    audience:
      'Creadores y desarrolladores que deciden entre la generación de video local gratuita en su propia GPU y el pipeline todo-en-uno en la nube de invideo — cubre requisitos de hardware, letra pequeña de licencias y compensaciones de flujo de trabajo.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'generación de video con IA local',
    targetKeywords: [
      'ia de video en la nube vs local',
      'invideo vs ia de video local',
      'wan 2.2 vs ltx-2',
      'mejor modelo de video open source 2026',
      'hunyuanvideo local',
      'generar video con ia localmente',
      'requisitos de vram para wan 2.2',
      'licencia de ltx-2',
      'gpu para generación de video local',
    ],
    current_models_mentioned: [
      'Wan 2.2 (T2V-A14B, I2V-A14B, TI2V-5B)',
      'LTX-2.5 / LTX-2.3',
      'HunyuanVideo 1.5',
      'MiniMax H3',
      'Kling 3.0',
      'Veo 3.1',
      'Seedance 2.5',
    ],
    current_hardware_mentioned: ['6 GB VRAM', '8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'RTX 3060', 'RTX 3090', 'RTX 4090'],
    leadAnswerBlock:
      '**Para la mayoría de las personas con una GPU de 12 GB o más, Wan 2.2 es un modelo de video con IA local sólido en 2026** — con licencia Apache 2.0, sin límites de ingresos ni restricciones territoriales, y de descarga gratuita (el hardware y la electricidad siguen costando dinero). **Invideo es la mejor opción si no tienes esa GPU, o quieres un video narrado terminado en lugar de un clip en bruto** — es un servicio alojado en el navegador cuyos planes de pago (Starter, Plus, Max) difieren en el acceso a modelos; consulta su página de precios actual. **HunyuanVideo 1.5 es muy apreciado en la comunidad por su look cinematográfico, pero su licencia excluye por completo a la UE, el Reino Unido y Corea del Sur** — evítalo si estás en esas regiones.',
    quickAnswerTop: {
      es: {
        question: '¿Debería generar video con IA de forma local o usar el pipeline en la nube de invideo?',
        answer:
          'Genera de forma local si tienes una GPU de 12 GB o más, quieres generar sin tarifas por clip y valoras la privacidad — Wan 2.2 (Apache 2.0, uso comercial permisivo — revisa la ficha del modelo) es un punto de partida razonable. Usa invideo si no tienes el hardware adecuado, no quieres gestionar la configuración, o necesitas un video completo terminado (guion, locución, música, subtítulos) en lugar de un clip en bruto — es un servicio alojado por suscripción con un plan gratuito; consulta los precios actuales en su página de precios.',
        bullets: [
          'Menos de 12 GB de VRAM → invideo es la opción práctica; por debajo de este nivel, las opciones locales se limitan a resultados cuantizados de nivel básico.',
          '12 GB de VRAM → LTX-Video 0.9.5, una opción local práctica en este nivel.',
          '16–24 GB+ de VRAM → Wan 2.2 (buena calidad, Apache 2.0 — uso comercial permisivo sin umbral de ingresos ni exclusión territorial; se aplican los términos estándar de Apache, como los avisos de atribución, revisa la ficha del modelo) o LTX-2 (velocidad + audio sincronizado).',
          'En la UE, el Reino Unido o Corea del Sur → la licencia de HunyuanVideo 1.5 te excluye; usa Wan 2.2 o LTX-2 en su lugar.',
          'Necesitas un video narrado terminado, no un clip en bruto → los modelos locales solo generan clips silenciosos (excepto LTX) de 5 a 20 segundos; invideo ofrece un flujo de trabajo alojado alrededor del clip; consulta en su página de precios qué incluye cada plan.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Por qué 2026 es un momento extraño para la IA de video', anchor: '#market-context' },
      { label: 'La puerta local: tres modelos gratuitos en tu propia GPU', anchor: '#local-models' },
      { label: 'Wan 2.2 (Alibaba)', anchor: '#wan-2-2' },
      { label: 'LTX-2 (Lightricks)', anchor: '#ltx-2' },
      { label: 'HunyuanVideo 1.5 (Tencent)', anchor: '#hunyuanvideo' },
      { label: 'Uno para vigilar: MiniMax H3', anchor: '#one-to-watch' },
      { label: 'El filtro del hardware', anchor: '#hardware-gate' },
      { label: 'La realidad del DIY: lo que "gratis" te exige', anchor: '#diy-reality' },
      { label: 'La puerta de la nube: qué incluye invideo', anchor: '#invideo-bundle' },
      { label: 'Nube o local: ¿cuál es tu puerta?', anchor: '#decision-guide' },
      { label: '¿Quién debería elegir invideo?', anchor: '#who-should-choose' },
      { label: 'Míralos en acción', anchor: '#video-roundup' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Pruébalo antes de decidir', anchor: '#try-before-you-decide' },
      { label: 'El veredicto', anchor: '#verdict' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Wan 2.2 es un modelo de video local sólido bajo la licencia permisiva Apache 2.0.** Uso comercial permisivo sin umbral de ingresos ni exclusión territorial (se aplican los términos estándar de Apache, como los avisos de atribución; revisa la ficha del modelo).',
          '**Invideo es una alternativa alojada** con un plan gratuito y los planes de pago Starter, Plus y Max; su página de precios indica que Plus y Max tienen acceso a todos los modelos, incluidos todos los Seedance. Los precios varían: consulta la página actual.',
          '**La licencia de HunyuanVideo 1.5 excluye explícitamente a la UE, el Reino Unido y Corea del Sur** — tanto para el modelo como para sus resultados. Los lectores en esas regiones deben usar Wan 2.2 o LTX-2 en su lugar.',
          '**LTX-2 se presenta como un modelo orientado a la velocidad y es el único de este trío local con audio sincronizado integrado**, gratuito para uso comercial en empresas con ingresos anuales inferiores a $10M.',
          '**12 GB de VRAM es el piso realista para generación de video local en serio.** Por debajo de eso, invideo se vuelve la opción más práctica.',
          '**Los modelos locales generan clips en bruto de 5 a 20 segundos (silenciosos, salvo con LTX-2), no videos terminados.** Guion, locución, música, subtítulos y edición son herramientas separadas que tú mismo ensamblas — invideo busca reunir estos pasos en un solo flujo de trabajo alojado.',
          '**Al comprobarlo el 27 de noviembre de 2026, la página oficial de Wan en GitHub no mostraba ningún repositorio con pesos abiertos de "Wan 2.7".** Alibaba anunció [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) en abril de 2026 como modelo disponible en Alibaba Cloud. Ten cuidado con las páginas de terceros que ofrecen "pesos de Wan 2.7".',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Por qué 2026 es un momento extraño para la IA de video',
        content:
          'El mercado propietario de video ha sido turbulento. En marzo de 2026, [Engadget informó](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html), citando a The Information, de que ByteDance había pausado el lanzamiento global de Seedance 2.0 tras cartas de cese y desista de Disney y Paramount Skydance. PromptQuorum no ha verificado esa información de forma independiente, y la disponibilidad ha cambiado desde entonces: la página de precios de invideo ya incluye Seedance 2.0 y 2.5.\n\nEse tipo de vaivenes es lo que hace atractivas ambas puertas. Los modelos abiertos que ya has descargado siguen funcionando aunque cambie un proveedor. Un servicio multimodelo como invideo ofrece varios modelos en una sola cuenta, pero su oferta puede cambiar, así que no está garantizado que tu flujo de trabajo no se vea afectado.',
      },
      localModels: {
        id: 'local-models',
        title: 'La puerta local: tres modelos gratuitos en tu propia GPU',
        content:
          'Esta guía compara tres sistemas de pesos abiertos muy utilizados para generar video en local. Los tres corren a través de ComfyUI, una interfaz basada en nodos que instalas en tu propia máquina — no una herramienta tipo chat como Ollama. Son modelos de difusión, no LLMs.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 es un modelo de video local sólido en general en 2026 — Apache 2.0, alta calidad, sin restricciones territoriales — mientras que LTX-2 se centra en la velocidad y añade audio sincronizado, y HunyuanVideo 1.5 es apreciado en la comunidad por su look cinematográfico pero excluye por licencia a los usuarios de la UE/Reino Unido/Corea del Sur.' },
          { type: 'plain-terms', text: 'Si solo quieres una respuesta: consigue una GPU de 12 GB o más y corre Wan 2.2. Ofrece alta calidad y una licencia permisiva Apache 2.0.' },
        ],
        columns: ['Modelo', 'Licencia', 'VRAM', 'Salida', 'Característica destacada'],
        rows: [
          { 'Modelo': 'Wan 2.2 (Alibaba)', 'Licencia': 'Apache 2.0 — permisiva, sin umbral de ingresos ni exclusión territorial', 'VRAM': '6–8GB (5B) / 15–25GB (14B)', 'Salida': '480p/720p, clips de ~5s', 'Característica destacada': 'Variantes 14B y 5B compacta' },
          { 'Modelo': 'LTX-2 (Lightricks)', 'Licencia': 'LTX Community License — gratis por debajo de $10M en ingresos', 'VRAM': '18–20GB cuantizado, 32GB+ completo', 'Salida': '480p–1080p, 5–20s, con audio', 'Característica destacada': 'Audio y video sincronizados (solo uno de estos tres)' },
          { 'Modelo': 'HunyuanVideo 1.5 (Tencent)', 'Licencia': 'Tencent Community License — excluye a UE/Reino Unido/Corea del Sur', 'VRAM': '14GB mínimo, 24GB cómodo', 'Salida': '480p/720p, hasta 10s', 'Característica destacada': 'Luz cinematográfica; mínimo 14GB con offloading' },
        ],
        note:
          '⚠️ Precaución: al comprobarlo el 27 de noviembre de 2026, la [página oficial de Wan en GitHub](https://github.com/Wan-Video) no mostraba ningún repositorio con pesos abiertos de "Wan 2.7"; Alibaba anunció [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) como disponible en Alibaba Cloud. Ten cuidado con las páginas que ofrecen "pesos abiertos de Wan 2.7" y descarga solo desde repositorios oficiales de GitHub o Hugging Face.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — calidad sólida, Apache 2.0',
        content:
          'Wan 2.2 es ampliamente utilizado entre los modelos de video abiertos, con muchos derivados de la comunidad construidos sobre él (consulta su página de modelo en Hugging Face para ver las descargas actuales). Se distribuye en tres variantes — T2V-A14B e I2V-A14B (mezcla de expertos, 27B parámetros totales / 14B activos), más una TI2V-5B compacta que gestiona tanto texto-a-video como imagen-a-video con apenas 6–8GB de VRAM. El nivel 14B necesita entre 15GB (GGUF Q3) y 25GB (FP8); el comando oficial sin cuantizar pide 80GB. Su licencia es Apache 2.0 — verdaderamente gratuita, uso comercial permisivo sin umbral de ingresos ni exclusión territorial (se aplican los términos estándar de Apache, como los avisos de atribución; revisa la ficha del modelo).\n\n**Velocidad, en concreto:** el [repositorio oficial de Wan 2.2](https://github.com/Wan-Video/Wan2.2) indica que, sin optimizaciones específicas, el modelo compacto TI2V-5B puede generar un clip de 5 segundos a 720p en menos de 9 minutos con una sola GPU de consumo. Es la cifra del desarrollador, que PromptQuorum no ha verificado, y no describe las variantes 14B. Según el repositorio, su comando de ejemplo para TI2V-5B funciona en una GPU con al menos 24 GB de VRAM (por ejemplo, una RTX 4090), así que no esperes ese tiempo en una tarjeta de 6–8 GB. Una secuencia de 20 segundos implica generar 4 clips separados de 5 segundos, es decir, menos de 36 minutos de generación en bruto si cada uno tarda lo indicado, más la edición manual para unirlos. Es un cálculo a partir de la cifra por clip, no un benchmark medido de 20 segundos.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — velocidad más sonido sincronizado',
        content:
          'LTX-2 es el único modelo abierto de este trío que genera audio y video sincronizados en un solo paso — pasos, ambiente y efectos llegan junto con la imagen. También se presenta como un modelo rápido, aunque no es el más ligero en VRAM (consulta las cifras más abajo). La arquitectura es un transformador de difusión de 22B; LTX-2.3 (marzo de 2026) sigue siendo totalmente compatible junto al actual LTX-2.5. La licencia es la LTX Community License — gratuita para uso comercial si los ingresos totales de tu empresa son inferiores a $10M al año, con una licencia comercial de pago requerida por encima de ese umbral. (Algunos análisis de terceros la llaman incorrectamente Apache 2.0 — la [página oficial de la licencia](https://ltx.io/model/license) es la única fuente fiable.) Los requisitos de hardware van de 18–20GB de VRAM cuantizado a 32GB+ a precisión completa; en tarjetas de 12GB, el más antiguo LTX-Video 0.9.5 sigue siendo la opción práctica.\n\n**Velocidad, en concreto:** a LTX-2 se le suele describir como rápido, pero no hemos encontrado ninguna cifra de minutos por clip en una RTX 4090 verificada de forma independiente, así que no citamos ninguna. Para el más reciente LTX-2.5, el desarrollador reporta un clip de imagen a video de 10 segundos a 720p en 6.8 segundos con dos superchips NVIDIA GB200 de clase centro de datos, no con una GPU de consumo ([VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights), que describe la cifra como dato del proveedor sin verificación independiente). No dice nada sobre lo que rendirá una GPU doméstica.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — el look cinematográfico, con una trampa legal',
        content:
          'El modelo de 8.3B de Tencent, lanzado en noviembre de 2025, es el favorito de la comunidad por su iluminación y textura cinematográficas, con necesidades moderadas de VRAM: 14GB mínimo con offloading, 24GB cómodo. Genera de forma nativa 480p/720p, hasta 1080p mediante superresolución integrada, con clips de hasta 10 segundos.\n\n**Velocidad, en concreto:** el [repositorio de Tencent](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) indica que, con su modelo de imagen a video a 480p destilado en pasos, una sola RTX 4090 puede generar un video en menos de 75 segundos. Es la cifra del desarrollador, que PromptQuorum no ha verificado. La nota no indica la duración del clip, así que no la extrapolamos a secuencias más largas.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Advertencia de licencia — lee antes de descargar. HunyuanVideo 1.5 usa la Tencent Hunyuan Community License, no Apache 2.0. La licencia no aplica en la Unión Europea, el Reino Unido ni Corea del Sur — según el texto de la licencia, los usuarios en esas regiones no están autorizados a usar el modelo ni sus resultados. Además, requiere una licencia aparte de Tencent si tus productos tuvieron más de 100 millones de usuarios activos mensuales en el mes anterior a la fecha de lanzamiento del modelo, y prohíbe usar el modelo o sus resultados para mejorar otros modelos de IA (salvo Tencent Hunyuan y sus derivados). Si estás en la UE, el Reino Unido o Corea del Sur, evita este modelo y considera Wan 2.2 (Apache 2.0, uso comercial permisivo sin exclusión territorial).',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'Uno para vigilar: MiniMax H3',
        content:
          'Lanzado el 3 de agosto de 2026, MiniMax H3 es un modelo omni-modal de 33.1B con audio estéreo nativo, compatibilidad con ComfyUI desde el primer día y versiones cuantizadas que corren en una RTX 3060. Dos advertencias antes de tratarlo como una cuarta opción: el lanzamiento local se limita a 768p (el pipeline completo de 2K sigue siendo solo alojado), y su [Community License](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE) excluye del territorio licenciado a la UE, el Reino Unido, Corea del Sur y EE. UU., y exige una autorización aparte por encima de $20M de ingresos anuales — léela antes de comprometerte (esto no es asesoramiento legal). Las señales iniciales son sólidas, pero un lanzamiento reciente y estar listo para producción son cosas distintas.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'El filtro del hardware',
        content: [
          'La generación de video local es gratis de la misma manera en que un cachorro es gratis: los pesos del modelo no cuestan nada, pero la GPU es el verdadero precio de entrada. Sáltate por completo la generación local si tu GPU tiene menos de 12 GB de VRAM y no planeas actualizarla — por debajo de ese nivel solo la variante cuantizada de 5B de Wan 2.2 es utilizable, con calidad de entrada, y una plataforma en la nube probablemente sea el camino más sencillo.',
          '¿No estás seguro de qué significa todo esto para tu equipo? Estas guías lo explican: [Calculadora de VRAM](/es/local-llms/vram-calculator-local-llm) para requisitos exactos por modelo, [¿Cuánta VRAM necesitas?](/es/local-llms/how-much-vram-local-llm) para tablas comparativas entre tamaños de modelo, [Mejores GPU para IA local](/es/local-llms/best-gpus-for-local-llms) y [Mejores GPU económicas](/es/local-llms/best-budget-gpus-local-llm) para recomendaciones de hardware, y [GPU vs CPU vs Apple Silicon](/es/local-llms/gpu-vs-cpu-vs-apple-silicon) para comparaciones de plataformas. Una advertencia honesta: esas guías usan la fórmula de VRAM para LLMs (parámetros × bits ÷ 8). Los modelos de difusión de video también escalan la VRAM con la resolución y la duración del clip, así que trata esas cifras como un piso, no un techo, para cargas de trabajo de video.',
        ],
        columns: ['Tu GPU', 'Qué puedes correr'],
        rows: [
          { 'Tu GPU': '6–8GB VRAM', 'Qué puedes correr': 'Wan 2.2 TI2V-5B (cuantizado) — utilizable, calidad de entrada' },
          { 'Tu GPU': '12GB VRAM', 'Qué puedes correr': 'LTX-Video 0.9.5 — una opción práctica en este nivel' },
          { 'Tu GPU': '16GB VRAM', 'Qué puedes correr': 'HunyuanVideo 1.5 (si la licencia lo permite), Wan 2.2 14B en GGUF Q3' },
          { 'Tu GPU': '24GB+ VRAM', 'Qué puedes correr': 'Los tres: Wan 2.2 14B (cuantizado), LTX-2 cuantizado, HunyuanVideo 1.5 (si la licencia lo permite)' },
        ],
        note:
          'Costo aproximado de GPU, según el [rastreador de precios de GPU de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (datos de listados de eBay EE. UU., no una cotización ni una oferta): los listados vendidos de RTX 3090 usadas rondan los $1,500–1,725 (mediana $1,650; 225 ventas, 13–23 de noviembre de 2026; con fecha 2026-11-23). En la cifra con fecha 2026-10-15, los de RTX 4090 usadas estaban en $2,575–3,010 (mediana $2,860). Los precios de GPU varían — verifica el precio actual antes de comprar en lugar de confiar en estas cifras pasados unos meses. Los precios en tu país pueden variar según impuestos locales.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'Lo que realmente implica correr generación de video local',
        content:
          'Con modelos locales, no estás instalando una herramienta de video — estás ensamblando un pipeline.\n\n**La configuración de generación.** ComfyUI está basado en nodos: construyes, o importas y depuras, un grafo de flujo de trabajo con loaders, samplers y decoders. Espera desajustes de versión de CUDA, versiones fijadas de PyTorch y algún que otro error de instalación de `flash_attn` antes de que se renderice tu primer frame.\n\n**El prompting.** Los modelos de video necesitan prompts estructurados — tipo de plano, movimiento de cámara, iluminación, acción del sujeto — no frases de una línea. Un flujo de trabajo típico de ComfyUI no tiene capa de system prompt. Los repositorios de [Wan 2.2](https://github.com/Wan-Video/Wan2.2) y [HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) ofrecen ampliación o reescritura de prompts, pero requiere un modelo de lenguaje aparte o una API que configuras tú. Nuestras guías sobre [system prompts vs. user prompts](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) y [prompt engineering para modelos locales](/es/local-llms/prompt-engineering-for-local-models) cubren fundamentos que se transfieren directamente al prompting de video.\n\n**Todo lo que rodea al clip.** Los modelos locales generan clips en bruto y silenciosos (excepto LTX) de 5 a 20 segundos. Guion, locución, música, imágenes de stock, subtítulos y edición son herramientas separadas que tú eliges, instalas y conectas entre sí.',
        promptExamples: [
          { label: 'Débil (una línea)', text: 'Un perro en una playa' },
          { label: 'Estructurado (lo que necesitan los modelos de video)', text: 'Golden retriever corriendo por una orilla mojada durante la hora dorada, plano de seguimiento bajo desde el lateral, poca profundidad de campo, contraluz cálido, cámara lenta suave, 24fps cinematográfico' },
        ],
        note:
          'Sujeto y acción, comportamiento de cámara, iluminación, estilo — cuatro ingredientes en una sola frase marcan la diferencia entre una tragamonedas y una cámara. Si ese stack DIY te suena emocionante, la puerta local es la tuya. Si te sonó agotador, sigue leyendo.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'La puerta de la nube: qué incluye invideo',
        highlight: true,
        itemHeadings: true,
        content:
          'Invideo es un ejemplo de la puerta de la nube — no el único, y vale la pena saber en qué se diferencia de los demás antes de asumir que "nube" significa una sola cosa. Según sus descripciones públicas (PromptQuorum no ha probado ninguno de estos tres servicios), Runway se integra directamente en editores profesionales (Premiere Pro, Final Cut, DaVinci Resolve), orientado a flujos de trabajo híbridos de IA más editor en lugar de un video terminado y ensamblado. Según las mismas descripciones, Dream Machine de Luma AI se especializa en salida HDR nativa de 16 bits para pipelines de composición VFX (After Effects, Nuke) — una audiencia completamente distinta. Según las mismas descripciones, Pika se centra en la generación rápida de clips en bruto; PromptQuorum no ha verificado si ofrece guion, locución o montaje de imágenes de stock, así que compruébalo antes de contar con él para el trabajo alrededor del clip. Según su propia descripción, invideo combina storyboard, redacción de guiones y edición en línea de tiempo con acceso a modelos de generación como Kling, Veo y Seedance.\n\nInvideo no es un único modelo de video, sino un servicio alojado. Al comprobarlo el 27 de noviembre de 2026, [su página de inicio](https://invideo.io/) presentaba un editor de video con agentes, con storyboard a partir de un guion o una idea, redacción de guiones y una línea de tiempo multipista; el sitio también ofrece herramientas de voz y música con IA. PromptQuorum no lo ha probado, así que comprueba que la locución y los subtítulos funcionen como necesitas. Corre en el navegador — tu GPU es irrelevante.\n\nTres cosas destacan para esta comparación:\n\n- **Varios modelos, una cuenta.** La página de precios de invideo indica que Plus y Max tienen acceso a todos los modelos, incluidos todos los Seedance; Starter cubre modelos seleccionados, sin Seedance 2.5. La oferta puede cambiar.\n- **El acceso para agentes viene integrado.** invideo ofrece un [servidor MCP](https://invideo.io/ai/mcp) que permite a agentes de IA trabajar en su editor de línea de tiempo.\n- **Hay un plan gratuito.** La [página de límites de planes](https://invideo.io/help/billing/plan-limits/) de invideo describe un límite semanal; revisa las reglas de exportación y marca de agua antes de contar con él.\n\n**Velocidad, en concreto — y la trampa honesta:** según invideo, la generación en bruto es rápida. Pero el propio FAQ de invideo sitúa la producción completa de extremo a extremo de un cortometraje en 2 a 5 días, no minutos — porque elegir y ensamblar entre múltiples opciones generadas, no la generación en sí, es lo que consume el tiempo. El [FAQ de invideo](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) describe 2 días como mínimo para películas de 1 a 3 minutos con los recursos definidos pronto. Esa cifra corresponde a una película terminada, mientras que la cifra local anterior solo cubre clips TI2V-5B en bruto y sin editar, así que no son directamente comparables. Un servicio alojado elimina la configuración local, pero la producción sigue llevando tiempo.\n\nPlanes que lista invideo (para los precios, consulta la [página de precios de invideo](https://invideo.io/pricing/)):',
        blockquote:
          '**¿Quieres crear videos con IA sin la configuración local?** Si no tienes una GPU potente — o simplemente no quieres pasar horas instalando y configurando herramientas locales de IA de video — vale la pena probar invideo. [Prueba la versión gratuita de invideo →](https://invideo.io/pricing/)',
        columns: ['Plan', 'Créditos por puesto/mes', 'Acceso a modelos'],
        rows: [
          { 'Plan': 'Free', 'Créditos por puesto/mes': 'Límite semanal', 'Acceso a modelos': 'Ver la página de precios' },
          { 'Plan': 'Starter', 'Créditos por puesto/mes': '400', 'Acceso a modelos': 'Modelos seleccionados; sin Seedance 2.5' },
          { 'Plan': 'Plus', 'Créditos por puesto/mes': '2,000', 'Acceso a modelos': 'Todos los modelos, según invideo' },
          { 'Plan': 'Max', 'Créditos por puesto/mes': 'Desde 5,000', 'Acceso a modelos': 'Todos los modelos, según invideo' },
        ],
        note:
          'Nombres de planes, créditos y acceso a modelos según las páginas de [precios](https://invideo.io/pricing/) y de [límites de planes](https://invideo.io/help/billing/plan-limits/) de invideo, comprobadas el 27 de noviembre de 2026. Aquí no se citan precios: vista desde Europa, la página mostraba una oferta por tiempo limitado, y los planes difieren de los que esta guía listaba antes. Consulta la página actual antes de fiarte de cualquier dato.',
        affiliateLinks: [
          { url: 'https://invideo.io/pricing/', productName: 'invideo', productCategory: 'video-generation', label: 'Prueba la versión gratuita de invideo →' },
        ],
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Nube o local: ¿cuál es tu puerta?',
        content: 'La versión corta, mapeada a situaciones comunes:',
        columns: ['Tu situación', 'Recomendación'],
        rows: [
          { 'Tu situación': 'Sin GPU, o menos de 12GB de VRAM', 'Recomendación': 'Invideo (nube) — las opciones locales son básicas por debajo de este nivel' },
          { 'Tu situación': 'Quieres un video terminado con locución, no clips en bruto', 'Recomendación': 'Invideo (nube) — los modelos locales no ensamblan una producción completa' },
          { 'Tu situación': 'Con plazo urgente, cero tolerancia a la configuración', 'Recomendación': 'Invideo (nube)' },
          { 'Tu situación': 'GPU de 12GB+, cómodo con la configuración, quieres privacidad y $0 de costo marginal', 'Recomendación': 'Local: LTX-Video (12GB) o Wan 2.2 (24GB para los modelos 14B cuantizados)' },
          { 'Tu situación': 'En la UE, el Reino Unido o Corea del Sur', 'Recomendación': 'Local = solo Wan 2.2 o LTX-2 (la licencia de HunyuanVideo te excluye)' },
          { 'Tu situación': 'Necesitas automatización/API a escala sin construirla', 'Recomendación': 'Invideo (nube, servidor MCP)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: '¿Quién debería elegir invideo?',
        content:
          '**Invideo probablemente sea la mejor opción si:**\n\n- No tienes una GPU potente\n- Quieres empezar a crear videos de inmediato\n- No quieres instalar y configurar ComfyUI, CUDA, modelos o entornos de Python\n- Quieres un flujo de trabajo integrado en lugar de ensamblar varias herramientas locales\n- Necesitas guiones, voz, música, subtítulos y generación de video en un solo flujo de trabajo\n- Te importa más el video terminado que experimentar con los modelos subyacentes\n\n**La IA local probablemente sea la mejor opción si:**\n\n- Ya tienes el hardware de GPU adecuado\n- Quieres el máximo control\n- Quieres experimentar con modelos y flujos de trabajo\n- Tienes habilidades técnicas sólidas\n- Priorizas mantener la generación controlada localmente\n- Esperas generar volúmenes muy grandes y quieres optimizar el costo marginal de generación',
        blockquote:
          '**¿No estás seguro de cuál ruta es la adecuada para ti?** Si quieres evitar el hardware y la configuración técnica, el experimento más sencillo es simplemente probar invideo y ver si su flujo de trabajo se ajusta a tus necesidades. [Prueba invideo gratis →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'Míralos en acción',
        items: [
          '[4 modelos de video con IA open source comparados — ¿cuál es realmente gratis?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — comparación directa de resultados de LTX 2.3, Wan 2.2, HunyuanVideo 1.5 y MiniMax H3, incluyendo la letra pequeña de las licencias.',
          '[Reseña de invideo Agent One](https://www.youtube.com/watch?v=uUHO9byu0c0) — el flujo de trabajo completo de prompt a video terminado.',
          '[Demo local completa de Wan 2.2](https://www.youtube.com/watch?v=fs62ML_ZgEs) — tiempos de renderizado honestos en hardware de consumo (semana de lanzamiento, julio de 2025).',
          '[Tutorial de Wan 2.2 con poca VRAM](https://www.youtube.com/watch?v=tQu0DjtOEyg) — corriendo el modelo 14B en una laptop de 6GB (2025).',
        ],
        note:
          'Estos son videos de terceros, no producidos por PromptQuorum ni por invideo. Incluidos solo como referencia — no implican ningún respaldo al canal ni a su otro contenido.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo generar AI video con 8GB de VRAM?',
            a: 'Apenas. La variante TI2V-5B de Wan 2.2 corre en 6–8GB cuantizada, con calidad reducida y clips cortos. Para los modelos serios, 12GB es el piso real — y por debajo de eso, una herramienta en la nube como invideo es la respuesta práctica.',
          },
          {
            q: '¿Es Wan 2.2 realmente gratis para uso comercial?',
            a: 'Sí. Es Apache 2.0 — uso comercial permisivo sin umbral de ingresos ni exclusión territorial (se aplican los términos estándar de Apache, como los avisos de atribución; revisa la ficha del modelo), sin derechos reclamados sobre tus resultados. Es uno de los principales modelos locales con la licencia más permisiva.',
          },
          {
            q: '¿Puedo usar HunyuanVideo en la UE o el Reino Unido?',
            a: 'No según el texto de la licencia. La Tencent Hunyuan Community License indica que no aplica en la UE, el Reino Unido ni Corea del Sur — según el texto de la licencia, eso cubre tanto el modelo en sí como sus resultados. Revisa la licencia por tu cuenta (esto no es asesoramiento legal) y considera usar Wan 2.2 o LTX-2 en su lugar.',
          },
          {
            q: '¿Necesito una GPU para usar invideo?',
            a: 'No. Invideo corre completamente en el navegador; toda la generación ocurre en su infraestructura. Una laptop común debería bastar.',
          },
          {
            q: '¿Pueden los modelos locales producir un video completo de YouTube con locución?',
            a: 'No por sí solos. Los modelos locales generan clips en bruto de 5 a 20 segundos (LTX-2 incluye audio sincronizado; los demás son silenciosos). Guion, locución, música, subtítulos y edición requieren cada uno herramientas separadas que tú mismo ensamblas en un pipeline.',
          },
          {
            q: '¿Cuál es la trampa real de la IA de video local "gratuita"?',
            a: 'El costo del hardware (una GPU capaz), el tiempo de configuración (ComfyUI y sus dependencias), y el pipeline DIY necesario alrededor de los clips de salida en bruto. Los pesos del modelo no tienen tarifa por generación; el hardware y la electricidad siguen costando dinero.',
          },
          {
            q: '¿Existe un Wan 2.7 o un modelo Wan más reciente?',
            a: 'Al comprobarlo el 27 de noviembre de 2026, la página oficial de Wan en GitHub no mostraba ningún repositorio más reciente con pesos abiertos. Alibaba anunció [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) en abril de 2026 como disponible en Alibaba Cloud. Ten cuidado con cualquier otro sitio que ofrezca "pesos de Wan 2.7": descarga solo desde los repositorios oficiales de GitHub o Hugging Face.',
          },
          {
            q: 'Soy un principiante total. ¿Por dónde debería empezar?',
            a: 'El plan gratuito de invideo permite probar el flujo de trabajo en la nube sin comprar hardware y juzgar si la IA de video sirve a tus objetivos; tiene límites. Si más adelante compras una GPU capaz y quieres control total y privacidad, la puerta local sigue abierta.',
          },
          {
            q: '¿Qué diferencia hay al correr estos modelos locales en Mac vs Windows?',
            a: 'ComfyUI corre en Apple Silicon (M1–M4) a través del backend MPS de PyTorch. Cuenta con una generación más lenta que en una GPU NVIDIA comparable; no tenemos un benchmark controlado ni damos una proporción de velocidad. El problema práctico mayor es el soporte de software: las optimizaciones específicas de CUDA en las que se apoyan estos modelos (flash-attention, herramientas de cuantización GGUF/FP8) son mucho menos maduras en Mac, así que varios flujos de trabajo y guías de instalación de la comunidad asumen Windows o Linux con una tarjeta NVIDIA y pueden necesitar ajustes, o simplemente no correr como está documentado. Una ventaja: la memoria unificada de Apple Silicon puede permitirte encajar un modelo más grande en memoria de lo que permitiría una GPU discreta con la misma VRAM, aunque corra más lento. Si estás comprando hardware específicamente para generación de video local, Windows o Linux más NVIDIA es el camino bien soportado; un Mac que ya tienes está bien para experimentar, no el objetivo recomendado para volumen serio.',
          },
          {
            q: '¿Puedo mantener el mismo personaje consistente entre varios clips de video local?',
            a: 'Sí, con trabajo extra — ninguno de los tres modelos garantiza esto de fábrica entre generaciones separadas. Los dos enfoques que funcionan: alimentar la misma imagen de referencia en modo imagen-a-video (los tres admiten I2V), o entrenar un pequeño LoRA de tu personaje. Wan 2.2 y LTX-2 tienen flujos de trabajo LoRA documentados para esto — la versión de LTX-2 se llama IC-LoRA (in-context LoRA) y admite explícitamente consistencia multi-personaje. Entrenar un LoRA con tu personaje es la vía más laboriosa y busca resultados más consistentes que un prompt o una sola imagen de referencia; no hemos comprobado cuán grande es la diferencia. Las funciones de kit de marca y avatar de IA de invideo resuelven el mismo problema subyacente de otra forma — un avatar y perfil de voz fijos que configuras una vez y reutilizas, sin necesidad de entrenamiento.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Pruébalo antes de decidir',
        content:
          'No necesitas comprometerte con una configuración de GPU local — ni con una suscripción de pago — solo para evaluar el flujo de trabajo en la nube. Antes de comprar hardware o de pasar un fin de semana con ComfyUI, vale la pena dedicar cinco minutos a la otra vía primero:\n\n1. Prueba la versión gratuita de invideo.\n2. Crea un video corto.\n3. Evalúa la calidad del resultado y cómo se sintió el flujo de trabajo.\n4. Compara esa experiencia con el esfuerzo de configuración que requeriría una instalación local.\n\nEso convierte la comparación de algo que lees en algo que puedes probar tú mismo en menos tiempo del que toma leer el resto de este artículo.',
        blockquote:
          '[Prueba la versión gratuita de invideo →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'El veredicto',
        content:
          'Ve por lo local si tienes (o vas a comprar) una GPU de 12GB o más, disfrutas construir tus propias herramientas y valoras la privacidad y generar sin tarifas por clip por encima de la comodidad. Wan 2.2 es una base sólida — alta calidad, Apache 2.0 — con LTX-2 como el especialista en velocidad y sonido.\n\nVe por la nube si no tienes el hardware, no quieres la configuración, o necesitas videos terminados en lugar de clips en bruto. Para la mayoría de las personas que simplemente quieren hacer videos generados con IA, la ruta en la nube es el punto de partida más fácil: si no tienes ya el hardware y el interés técnico que requiere la generación local, un servicio alojado como invideo te ahorra la configuración local. Hay un plan gratuito para probar; los planes de pago y sus límites figuran en la página de precios de invideo. La forma más sencilla de averiguar si te encaja es probar la versión gratuita.\n\nAmbas puertas llevan a la IA de video. La pregunta nunca fue cuál tecnología es mejor — sino qué flujo de trabajo se ajusta a tu equipo, tu paciencia y tus objetivos.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Wan 2.2 en GitHub](https://github.com/Wan-Video/Wan2.2) — repositorio oficial, licencia e instrucciones de configuración.',
          '[Wan 2.2 en Hugging Face](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B) — ficha oficial del modelo y descarga.',
          '[Licencia del modelo LTX](https://ltx.io/model/license) — términos oficiales de la LTX Community License.',
          '[Página del modelo LTX-2](https://ltx.io/model/ltx-2-3) — arquitectura oficial y detalles de lanzamiento.',
          '[HunyuanVideo 1.5 en GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) — repositorio oficial y archivo LICENSE, incluyendo la exclusión de UE/Reino Unido/Corea del Sur.',
          '[Engadget: ByteDance has reportedly suspended the global rollout of its new AI video generator](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) — noticia de marzo de 2026 (en inglés).',
          '[Alibaba Cloud Community: anuncio de Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) — abril de 2026 (en inglés).',
          '[Límites de planes de invideo](https://invideo.io/help/billing/plan-limits/) — límites oficiales de planes y créditos.',
          '[Precios de invideo](https://invideo.io/pricing/) — detalles oficiales de planes y precios.',
          '[Servidor MCP de invideo](https://invideo.io/ai/mcp) — documentación oficial de automatización.',
          '[MiniMax H3 en GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — repositorio oficial.',
          '[MiniMax H3 en Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — pesos oficiales del modelo.',
          '[Invideo: ¿Cuánto tiempo toma hacer un cortometraje con IA?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — cifras propias de invideo sobre el tiempo de producción de extremo a extremo (2–5 días).',
          '[Requisitos del sistema de ComfyUI](https://docs.comfy.org/installation/system_requirements) — documentación oficial de soporte MPS para Mac/Apple Silicon.',
          '[Blog de LTX: Cómo usar IC-LoRA en LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — guía oficial de consistencia de personaje (IC-LoRA).',
          '[InsiderLLM: NVIDIA GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — fuente de las cifras de precios de GPU usadas (datos de anuncios de eBay en EE. UU.).',
          '[Runway](https://runwayml.com/) — sitio oficial; base de la descripción pública citada arriba (no probado por PromptQuorum).',
          '[Luma AI](https://lumalabs.ai/) — sitio oficial; base de la descripción pública citada arriba (no probado por PromptQuorum).',
          '[Pika](https://pika.art/) — sitio oficial; base de la descripción pública citada arriba (no probado por PromptQuorum).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[AnimateDiff 2026: anima cualquier modelo Stable Diffusion](/es/power-local-llm/animatediff-video-generation-guide) — análisis a fondo de una sola herramienta para animar tus checkpoints y LoRA SD1.5/SDXL existentes, distinta de los modelos de video nativos comparados aquí.',
          '[Generación de imágenes con IA local vs. la nube](/es/power-local-llm/local-ai-image-generation-vs-cloud) — la pieza complementaria, misma estructura, para imágenes en lugar de video.',
          '[Calculadora de VRAM para modelos locales](/es/local-llms/vram-calculator-local-llm) — requisitos exactos de VRAM por modelo y cuantización.',
          '[¿Cuánta VRAM necesitas?](/es/local-llms/how-much-vram-local-llm) — tablas comparativas entre tamaños de modelo, de 7B a 70B.',
          '[Mejores GPU para IA local en 2026](/es/local-llms/best-gpus-for-local-llms) — recomendaciones de hardware por nivel de presupuesto.',
          '[Mejores GPU económicas para IA local](/es/local-llms/best-budget-gpus-local-llm) — opciones de hardware de nivel de entrada.',
          '[GPU vs CPU vs Apple Silicon](/es/local-llms/gpu-vs-cpu-vs-apple-silicon) — comparación de plataformas para inferencia local.',
          '[System Prompts vs. User Prompts](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — fundamentos de estructuración de prompts que se transfieren al prompting de video.',
          '[Prompt Engineering para modelos locales](/es/local-llms/prompt-engineering-for-local-models) — técnicas de prompting estructurado.',
          '[Reseña de OpenShorts](/es/power-local-llm/openshorts-review) y [Reseña de pyVideoTrans](/es/power-local-llm/pyvideotrans-review) — dos herramientas para vídeos que ya tienes, no generadores de vídeo: una convierte vídeos largos en clips verticales con subtítulos y la otra traduce y dobla vídeos.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-02-21',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-fr.webp',
    title: 'Invideo vs vidéo IA locale : l\'une coûte un GPU et votre week-end, l\'autre un abonnement cloud',
    seoTitle: 'Vidéo IA cloud vs locale 2026 : invideo vs Wan 2.2 & LTX-2',
    intro:
      'Deux portes s\'ouvrent sur la vidéo IA en 2026. Porte une : le local — des modèles vidéo ouverts et gratuits tournant sur votre propre GPU, générations illimitées, inférence sur votre propre matériel (les téléchargements de modèles et les vérifications de mises à jour utilisent toujours le réseau), aucun abonnement, mais vous construisez tout le pipeline vous-même. Porte deux : le cloud — invideo, un service hébergé qui met en avant un parcours assisté par agents, du script ou de l\'idée à la vidéo montée, directement dans votre navigateur. Aucune des deux n\'est « meilleure ». Ce guide donne les clauses de licence que la plupart des comparatifs ignorent, les vraies exigences matérielles, et un outil de décision qui associe votre situation à une recommandation.',
    metaDescription:
      'Les modèles de vidéo IA locale (Wan 2.2, LTX-2, HunyuanVideo) se téléchargent gratuitement si votre GPU suit. Comparaison avec le cloud d\'invideo.',
    twitterDescription:
      'Vidéo IA cloud vs locale en 2026 : invideo est un service hébergé par abonnement. Wan 2.2, LTX-2 et HunyuanVideo se téléchargent gratuitement pour votre GPU, s\'il est assez puissant.',
    audience:
      'Créateurs et développeurs hésitant entre la génération vidéo locale gratuite sur leur propre GPU et le pipeline cloud tout-en-un d\'invideo — matériel requis, clauses de licence et compromis de workflow.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'génération de vidéo IA locale',
    targetKeywords: [
      'vidéo ia cloud vs locale',
      'invideo vs vidéo ia locale',
      'wan 2.2 vs ltx-2',
      'meilleur modèle vidéo open source 2026',
      'hunyuanvideo en local',
      'générer des vidéos ia en local',
      'wan 2.2 vram nécessaire',
      'licence ltx-2',
      'gpu pour génération vidéo locale',
    ],
    current_models_mentioned: [
      'Wan 2.2 (T2V-A14B, I2V-A14B, TI2V-5B)',
      'LTX-2.5 / LTX-2.3',
      'HunyuanVideo 1.5',
      'MiniMax H3',
      'Kling 3.0',
      'Veo 3.1',
      'Seedance 2.5',
    ],
    current_hardware_mentioned: ['6 GB VRAM', '8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'RTX 3060', 'RTX 3090', 'RTX 4090'],
    leadAnswerBlock:
      '**Pour la majorité des utilisateurs avec un GPU 12 Go+, Wan 2.2 est un modèle de vidéo IA locale solide en 2026** — licence Apache 2.0 sans plafond de revenus ni restriction territoriale, et téléchargeable gratuitement (le matériel et l\'électricité restent à votre charge). **Invideo est le meilleur choix si vous n\'avez pas ce GPU, ou si vous voulez une vidéo narrée finie plutôt qu\'un clip brut** — c\'est un service hébergé dans le navigateur dont les offres payantes (Starter, Plus, Max) diffèrent par l\'accès aux modèles ; consultez sa page tarifs actuelle. **HunyuanVideo 1.5 est apprécié de la communauté pour son rendu cinématographique, mais sa licence exclut totalement l\'UE, le Royaume-Uni et la Corée du Sud** — évitez ce modèle si vous êtes dans ces régions.',
    quickAnswerTop: {
      fr: {
        question: 'Dois-je générer mes vidéos IA en local ou utiliser le pipeline cloud d\'invideo ?',
        answer:
          'Générez en local si vous avez un GPU 12 Go+, voulez générer sans frais par clip et privilégiez la confidentialité — Wan 2.2 (Apache 2.0, usage commercial permissif — consultez la fiche du modèle) est un point de départ raisonnable. Utilisez invideo si vous n\'avez pas le matériel adapté, ne voulez pas gérer l\'installation, ou avez besoin d\'une vidéo complète et finie (script, voix off, musique, sous-titres) plutôt que d\'un clip brut — c\'est un service hébergé par abonnement avec une offre gratuite ; consultez les tarifs actuels sur sa page tarifs.',
        bullets: [
          'Moins de 12 Go de VRAM → invideo est le choix pratique ; en dessous de ce seuil, les options locales se limitent à un rendu quantifié d\'entrée de gamme.',
          '12 Go de VRAM → LTX-Video 0.9.5, une option locale pratique à ce niveau.',
          '16–24 Go+ de VRAM → Wan 2.2 (qualité solide, Apache 2.0 — usage commercial permissif sans seuil de revenus ni exclusion territoriale ; les conditions Apache standard, comme les mentions d\'attribution, s\'appliquent, consultez la fiche du modèle) ou LTX-2 (vitesse + audio synchronisé).',
          'Dans l\'UE, au Royaume-Uni ou en Corée du Sud → la licence de HunyuanVideo 1.5 vous exclut ; utilisez plutôt Wan 2.2 ou LTX-2.',
          'Besoin d\'une vidéo narrée finie, pas d\'un clip brut → les modèles locaux ne génèrent que des clips silencieux (LTX excepté) de 5 à 20 secondes ; invideo propose un workflow hébergé autour du clip ; le contenu de chaque offre figure sur sa page tarifs.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Pourquoi 2026 est un moment étrange pour la vidéo IA', anchor: '#market-context' },
      { label: 'La porte locale : trois modèles gratuits sur votre GPU', anchor: '#local-models' },
      { label: 'Wan 2.2 (Alibaba)', anchor: '#wan-2-2' },
      { label: 'LTX-2 (Lightricks)', anchor: '#ltx-2' },
      { label: 'HunyuanVideo 1.5 (Tencent)', anchor: '#hunyuanvideo' },
      { label: 'À surveiller : MiniMax H3', anchor: '#one-to-watch' },
      { label: 'Le verrou matériel', anchor: '#hardware-gate' },
      { label: 'La réalité du DIY : ce que « gratuit » vous demande', anchor: '#diy-reality' },
      { label: 'La porte cloud : ce qu\'invideo regroupe', anchor: '#invideo-bundle' },
      { label: 'Cloud ou local : quelle porte est la vôtre ?', anchor: '#decision-guide' },
      { label: 'Qui devrait choisir invideo ?', anchor: '#who-should-choose' },
      { label: 'Les voir en action', anchor: '#video-roundup' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Testez avant de décider', anchor: '#try-before-you-decide' },
      { label: 'Le verdict', anchor: '#verdict' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Lectures associées', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Wan 2.2 est un modèle vidéo local solide sous licence permissive Apache 2.0.** Usage commercial permissif sans seuil de revenus ni exclusion territoriale (les conditions Apache standard, comme les mentions d\'attribution, s\'appliquent ; consultez la fiche du modèle).',
          '**Invideo est une alternative hébergée** avec une offre gratuite et les offres payantes Starter, Plus et Max ; sa page tarifs indique que Plus et Max donnent accès à tous les modèles, dont tous les modèles Seedance. Les prix varient : consultez la page actuelle.',
          '**La licence de HunyuanVideo 1.5 exclut explicitement l\'UE, le Royaume-Uni et la Corée du Sud** — pour le modèle comme pour ses sorties. Les lecteurs de ces régions doivent utiliser Wan 2.2 ou LTX-2.',
          '**LTX-2 est présenté comme un modèle axé sur la vitesse et c\'est le seul de ce trio local avec audio synchronisé intégré**, gratuit commercialement pour les entreprises générant moins de 10 M$ de revenus annuels.',
          '**12 Go de VRAM est le plancher réaliste pour une génération vidéo locale sérieuse.** En dessous, invideo devient l\'option la plus pratique.',
          '**Les modèles locaux génèrent des clips bruts de 5 à 20 secondes (silencieux, sauf avec LTX-2), pas des vidéos finies.** Script, voix off, musique, sous-titres et montage sont des outils séparés que vous assemblez vous-même — invideo vise à réunir ces étapes dans un seul workflow hébergé.',
          '**Lors de la vérification du 27 novembre 2026, la page officielle de Wan sur GitHub ne montrait aucun dépôt de poids ouverts « Wan 2.7 ».** Alibaba a annoncé [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) en avril 2026 comme modèle disponible sur Alibaba Cloud. Méfiez-vous des pages tierces proposant des « poids Wan 2.7 ».',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Pourquoi 2026 est un moment étrange pour la vidéo IA',
        content:
          'Le marché de la vidéo propriétaire a été agité. En mars 2026, [Engadget a rapporté](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html), en citant The Information, que ByteDance avait suspendu le déploiement mondial de Seedance 2.0 après des mises en demeure de Disney et Paramount Skydance. PromptQuorum n\'a pas vérifié cette information de manière indépendante, et la disponibilité a changé depuis : la page tarifs d\'invideo mentionne désormais Seedance 2.0 et 2.5.\n\nCe type de bouleversement rend les deux portes attrayantes. Les modèles ouverts déjà téléchargés continuent de fonctionner quels que soient les changements d\'un fournisseur. Un service multimodèle comme invideo propose plusieurs modèles dans un seul compte, mais son catalogue peut évoluer : rien ne garantit que votre workflow ne sera pas affecté.',
      },
      localModels: {
        id: 'local-models',
        title: 'La porte locale : trois modèles gratuits sur votre GPU',
        content:
          'Ce guide compare trois systèmes à poids ouverts très utilisés pour la génération vidéo locale. Tous trois fonctionnent via ComfyUI, une interface à nœuds installée sur votre machine — pas un outil conversationnel comme Ollama. Ce sont des modèles de diffusion, pas des LLM.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 est un modèle vidéo local polyvalent solide en 2026 — Apache 2.0, haute qualité, aucune restriction territoriale — tandis que LTX-2 mise sur la vitesse et ajoute l\'audio synchronisé, et HunyuanVideo 1.5 est apprécié de la communauté pour son rendu cinématographique mais exclut par licence les utilisateurs de l\'UE, du Royaume-Uni et de Corée du Sud.' },
          { type: 'plain-terms', text: 'Pour une réponse unique : prenez un GPU 12 Go+ et utilisez Wan 2.2. Haute qualité et licence permissive Apache 2.0.' },
        ],
        columns: ['Modèle', 'Licence', 'VRAM', 'Sortie', 'Point fort'],
        rows: [
          { 'Modèle': 'Wan 2.2 (Alibaba)', 'Licence': 'Apache 2.0 — permissive, sans seuil de revenus ni exclusion territoriale', 'VRAM': '6–8 Go (5B) / 15–25 Go (14B)', 'Sortie': '480p/720p, clips ~5 s', 'Point fort': 'Variantes 14B et 5B compacte' },
          { 'Modèle': 'LTX-2 (Lightricks)', 'Licence': 'LTX Community License — gratuit sous 10 M$ de revenus', 'VRAM': '18–20 Go quantifié, 32 Go+ en pleine précision', 'Sortie': '480p–1080p, 5–20 s, avec audio', 'Point fort': 'Audio+vidéo synchronisés (un seul de ces trois)' },
          { 'Modèle': 'HunyuanVideo 1.5 (Tencent)', 'Licence': 'Tencent Community License — exclut UE/Royaume-Uni/Corée du Sud', 'VRAM': '14 Go minimum, 24 Go confortable', 'Sortie': '480p/720p, jusqu\'à 10 s', 'Point fort': 'Éclairage cinéma ; 14 Go min. avec déchargement' },
        ],
        note:
          '⚠️ Prudence : lors de la vérification du 27 novembre 2026, la [page officielle de Wan sur GitHub](https://github.com/Wan-Video) ne montrait aucun dépôt de poids ouverts « Wan 2.7 » ; Alibaba a annoncé [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) comme disponible sur Alibaba Cloud. Méfiez-vous des pages proposant des « poids ouverts Wan 2.7 » et ne téléchargez que depuis des dépôts officiels GitHub ou Hugging Face.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — qualité solide, Apache 2.0',
        content:
          'Wan 2.2 est largement utilisé parmi les modèles vidéo ouverts, avec de nombreux dérivés communautaires construits dessus (voir sa page de modèle Hugging Face pour les téléchargements actuels). Il se décline en trois variantes — T2V-A14B et I2V-A14B (mélange d\'experts, 27B de paramètres au total / 14B actifs), plus un TI2V-5B compact qui gère à la fois le texte-vers-vidéo et l\'image-vers-vidéo sur seulement 6–8 Go de VRAM. Le palier 14B nécessite 15 Go (GGUF Q3) à 25 Go (FP8) ; la commande officielle non quantifiée demande 80 Go. Sa licence est Apache 2.0 — véritablement gratuite, usage commercial permissif sans seuil de revenus ni exclusion territoriale (les conditions Apache standard, comme les mentions d\'attribution, s\'appliquent ; consultez la fiche du modèle).\n\n**Vitesse, concrètement :** le [dépôt officiel de Wan 2.2](https://github.com/Wan-Video/Wan2.2) indique que, sans optimisation particulière, le modèle compact TI2V-5B peut générer un clip 720p de 5 secondes en moins de 9 minutes sur un seul GPU grand public. C\'est le chiffre du développeur, que PromptQuorum n\'a pas vérifié, et il ne décrit pas les variantes 14B. D\'après le dépôt, sa commande d\'exemple pour TI2V-5B tourne sur un GPU d\'au moins 24 Go de VRAM (une RTX 4090, par exemple) : n\'attendez pas ce temps sur une carte de 6–8 Go. Une séquence de 20 secondes suppose de générer 4 clips distincts de 5 secondes, soit moins de 36 minutes de génération brute si chacun prend la durée indiquée, plus le montage manuel pour les raccorder. C\'est un calcul à partir du chiffre par clip, pas un benchmark de 20 secondes mesuré.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 sur GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 sur Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — vitesse et son synchronisé',
        content:
          'LTX-2 est le seul modèle ouvert de ce trio à générer audio et vidéo synchronisés en une seule passe — pas, ambiance et effets arrivent avec l\'image. Il est aussi présenté comme un modèle rapide, sans être le plus léger en VRAM (voir les chiffres plus bas). L\'architecture est un transformeur de diffusion 22B ; LTX-2.3 (mars 2026) reste pleinement pris en charge aux côtés de la version actuelle LTX-2.5. La licence est la LTX Community License — gratuite pour un usage commercial si le revenu total de votre entreprise est inférieur à 10 M$ par an, une licence commerciale payante étant requise au-delà. (Certains articles tiers la qualifient à tort d\'Apache 2.0 — la [page de licence officielle](https://ltx.io/model/license) est la seule source fiable.) Le besoin matériel va de 18–20 Go de VRAM quantifiée à 32 Go+ en pleine précision ; sur les cartes 12 Go, l\'ancien LTX-Video 0.9.5 reste le choix pratique.\n\n**Vitesse, concrètement :** LTX-2 est souvent décrit comme rapide, mais nous n\'avons trouvé aucun chiffre en minutes par clip sur RTX 4090 vérifié de manière indépendante ; nous n\'en citons donc aucun. Pour le plus récent LTX-2.5, le développeur annonce un clip image-vers-vidéo 720p de 10 secondes en 6,8 secondes sur deux superpuces NVIDIA GB200 de classe datacenter, et non sur un GPU grand public ([VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights), qui présente ce chiffre comme fourni par l\'éditeur et non vérifié de manière indépendante). Il ne dit rien des performances d\'un GPU domestique.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 sur GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 sur Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — le rendu cinématographique, avec un piège juridique',
        content:
          'Le modèle 8,3B de Tencent, sorti en novembre 2025, est un favori communautaire pour l\'éclairage et les textures cinématographiques, avec des besoins modérés en VRAM : 14 Go minimum avec déchargement, 24 Go confortable. Il génère nativement en 480p/720p, jusqu\'à 1080p via super-résolution intégrée, des clips jusqu\'à 10 secondes.\n\n**Vitesse, concrètement :** le [dépôt de Tencent](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) indique qu\'avec son modèle image-vers-vidéo 480p distillé en étapes, une seule RTX 4090 peut générer une vidéo en moins de 75 secondes. C\'est le chiffre du développeur, que PromptQuorum n\'a pas vérifié. La note ne précise pas la durée du clip ; nous ne l\'extrapolons donc pas à des séquences plus longues.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 sur GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 sur Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Avertissement de licence — à lire avant de télécharger. HunyuanVideo 1.5 utilise la Tencent Hunyuan Community License, pas Apache 2.0. Cette licence ne s\'applique pas dans l\'Union européenne, au Royaume-Uni ou en Corée du Sud — d\'après le texte de la licence, les utilisateurs de ces régions ne sont pas autorisés à utiliser le modèle ni ses sorties. Elle exige aussi une licence distincte de Tencent si vos produits comptaient plus de 100 millions d\'utilisateurs actifs mensuels le mois précédant la date de sortie du modèle, et interdit d\'utiliser le modèle ou ses sorties pour améliorer d\'autres modèles d\'IA (hors Tencent Hunyuan et ses dérivés). Si vous êtes dans l\'UE, au Royaume-Uni ou en Corée du Sud, évitez ce modèle et envisagez Wan 2.2 (Apache 2.0, usage commercial permissif sans exclusion territoriale).',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'À surveiller : MiniMax H3',
        content:
          'Sorti le 3 août 2026, MiniMax H3 est un modèle omni-modal de 33,1B avec audio stéréo natif, prise en charge ComfyUI dès le premier jour, et des versions quantifiées tournant sur une RTX 3060. Deux réserves avant d\'en faire un quatrième choix : la version locale plafonne à 768p (le pipeline complet 2K reste réservé à l\'hébergement cloud), et sa [Community License](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE) exclut du territoire concédé l\'UE, le Royaume-Uni, la Corée du Sud et les États-Unis, et exige une autorisation distincte au-delà de 20 M$ de revenus annuels — lisez-la avant de vous engager (ceci n\'est pas un conseil juridique). Les premiers signaux sont encourageants, mais une version récente et une maturité de production sont deux choses différentes.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 sur GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 sur Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'Le verrou matériel',
        content: [
          'La génération vidéo locale est gratuite comme un chiot est gratuit : les poids du modèle ne coûtent rien, mais le GPU est le vrai prix d\'entrée. Évitez complètement le local si votre GPU a moins de 12 Go de VRAM et que vous ne prévoyez pas de mise à niveau — en dessous de ce seuil, seule la variante quantifiée 5B de Wan 2.2 est utilisable, à une qualité d\'entrée de gamme, et une plateforme cloud sera probablement la voie la plus simple.',
          'Vous ne savez pas ce que cela signifie pour votre machine ? Ces guides détaillent tout : [Calculateur de VRAM](/fr/local-llms/vram-calculator-local-llm) pour les besoins exacts par modèle, [De combien de VRAM avez-vous besoin ?](/fr/local-llms/how-much-vram-local-llm) pour des tableaux par taille de modèle, [Meilleurs GPU pour l\'IA locale](/fr/local-llms/best-gpus-for-local-llms) et [Meilleurs GPU petit budget](/fr/local-llms/best-budget-gpus-local-llm) pour des choix matériels, et [GPU vs CPU vs Apple Silicon](/fr/local-llms/gpu-vs-cpu-vs-apple-silicon) pour comparer les plateformes. Un avertissement honnête : ces guides utilisent la formule VRAM des LLM (paramètres × bits ÷ 8). Les modèles de diffusion vidéo font aussi varier la VRAM selon la résolution et la durée du clip — considérez leurs chiffres comme un plancher, pas un plafond, pour les charges vidéo.',
        ],
        columns: ['Votre GPU', 'Ce que vous pouvez exécuter'],
        rows: [
          { 'Votre GPU': '6–8 Go VRAM', 'Ce que vous pouvez exécuter': 'Wan 2.2 TI2V-5B (quantifié) — utilisable, qualité d\'entrée' },
          { 'Votre GPU': '12 Go VRAM', 'Ce que vous pouvez exécuter': 'LTX-Video 0.9.5 — une option pratique à ce niveau' },
          { 'Votre GPU': '16 Go VRAM', 'Ce que vous pouvez exécuter': 'HunyuanVideo 1.5 (si la licence le permet), Wan 2.2 14B en GGUF Q3' },
          { 'Votre GPU': '24 Go+ VRAM', 'Ce que vous pouvez exécuter': 'Les trois : Wan 2.2 14B (quantifié), LTX-2 quantifié, HunyuanVideo 1.5 (si la licence le permet)' },
        ],
        note:
          'Coût approximatif des GPU, d\'après le [suivi des prix des GPU d\'InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (données d\'annonces eBay États-Unis, ni devis ni offre) : les annonces vendues de RTX 3090 d\'occasion tournent autour de 1 500–1 725 $ (médiane 1 650 $ ; 225 ventes, 13–23 novembre 2026 ; chiffre daté du 2026-11-23). Dans le chiffre daté du 2026-10-15, celles de RTX 4090 d\'occasion étaient à 2 575–3 010 $ (médiane 2 860 $). Les prix en France varient selon les taxes et les frais d\'importation. Les prix des GPU évoluent — vérifiez les tarifs actuels avant d\'acheter plutôt que de vous fier à ces chiffres au-delà de quelques mois.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'Ce qu\'implique vraiment la génération vidéo locale',
        content:
          'Avec les modèles locaux, vous n\'installez pas un outil vidéo — vous assemblez un pipeline.\n\n**La configuration de la génération.** ComfyUI fonctionne par nœuds : vous construisez, ou importez et déboguez, un graphe de workflow composé de loaders, samplers et decoders. Attendez-vous à des incompatibilités de versions CUDA, des épinglages PyTorch, et parfois une erreur d\'installation `flash_attn` avant la première image rendue.\n\n**Le prompting.** Les modèles vidéo ont besoin de prompts structurés — type de plan, mouvement de caméra, éclairage, action du sujet — pas de phrases uniques. Un workflow ComfyUI classique n\'a pas de couche de prompt système. Les dépôts de [Wan 2.2](https://github.com/Wan-Video/Wan2.2) et de [HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) proposent une extension ou une réécriture de prompt, mais elle repose sur un modèle de langage séparé ou une API que vous configurez vous-même. Nos guides sur [prompts système vs prompts utilisateur](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) et [prompt engineering pour modèles locaux](/fr/local-llms/prompt-engineering-for-local-models) couvrent des fondamentaux qui s\'appliquent directement au prompting vidéo.\n\n**Tout ce qui entoure le clip.** Les modèles locaux produisent des clips bruts, silencieux (LTX excepté), de 5 à 20 secondes. Script, voix off, musique, images d\'archives, sous-titres et montage sont chacun des outils séparés que vous choisissez, installez et connectez vous-même.',
        promptExamples: [
          { label: 'Faible (une ligne)', text: 'Un chien sur une plage' },
          { label: 'Structuré (ce dont les modèles vidéo ont besoin)', text: 'Golden retriever sprintant le long d\'un rivage humide à l\'heure dorée, plan de suivi bas depuis le côté, faible profondeur de champ, contre-jour chaud, léger ralenti, cinématographique 24 im/s' },
        ],
        note:
          'Sujet et action, comportement de caméra, éclairage, style — quatre ingrédients dans une phrase font la différence entre une machine à sous et une caméra. Si cette pile DIY vous enthousiasme, la porte locale est pour vous. Si elle vous semble épuisante, continuez la lecture.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'La porte cloud : ce qu\'invideo regroupe',
        highlight: true,
        itemHeadings: true,
        content:
          'Invideo est un exemple de porte cloud — pas le seul, et il vaut la peine de comprendre en quoi il diffère des autres avant de supposer que « cloud » désigne une seule chose. D\'après leurs descriptions publiques (PromptQuorum n\'a testé aucun de ces trois services), Runway s\'intègre directement dans les logiciels de montage professionnels (Premiere Pro, Final Cut, DaVinci Resolve), visant des workflows hybrides IA-plus-monteur plutôt qu\'une vidéo assemblée et finie. D\'après les mêmes descriptions, Dream Machine de Luma AI se spécialise dans la sortie HDR native 16 bits pour les pipelines de compositing VFX (After Effects, Nuke) — un public entièrement différent. D\'après les mêmes descriptions, Pika se concentre sur la génération rapide de clips bruts ; PromptQuorum n\'a pas vérifié s\'il propose script, voix off ou assemblage d\'images d\'archives : vérifiez-le avant de compter dessus pour le travail autour du clip. Selon sa propre description, invideo associe storyboard, écriture de script et montage sur timeline à l\'accès à des modèles de génération comme Kling, Veo et Seedance.\n\nInvideo n\'est pas un modèle vidéo unique, mais un service hébergé. Lors de la vérification du 27 novembre 2026, [sa page d\'accueil](https://invideo.io/) présentait un éditeur vidéo piloté par agents, avec storyboard à partir d\'un script ou d\'une idée, écriture de script et timeline multipiste ; le site répertorie aussi des outils IA de voix et de musique. PromptQuorum ne l\'a pas testé : vérifiez que la voix off et les sous-titres répondent à vos besoins. Il tourne dans le navigateur — votre GPU n\'a aucune importance.\n\nPour qui veut commencer à faire des vidéos aujourd\'hui plutôt que de rechercher GPU et formats de quantification, invideo est le choix pratique : aucune exigence matérielle locale, aucune installation ComfyUI ni dépannage CUDA, et un espace de travail hébergé pour les étapes autour du clip. Il convient particulièrement aux créateurs qui se soucient davantage de la vidéo finie que du contrôle du modèle de génération sous-jacent — et comme il existe une offre gratuite, vous pouvez vérifier si cela vous convient avant de dépenser quoi que ce soit.\n\nTrois éléments ressortent pour ce comparatif :\n\n- **Plusieurs modèles, un seul compte.** La page tarifs d\'invideo indique que Plus et Max donnent accès à tous les modèles, dont tous les modèles Seedance ; Starter couvre une sélection, sans Seedance 2.5. Le catalogue peut évoluer.\n- **L\'accès pour les agents est intégré.** invideo propose un [serveur MCP](https://invideo.io/ai/mcp) qui permet à des agents IA de travailler dans son éditeur à timeline.\n- **Il existe une offre gratuite.** La [page des limites des offres](https://invideo.io/help/billing/plan-limits/) d\'invideo décrit une limite hebdomadaire ; vérifiez les règles d\'export et de filigrane avant de compter dessus.\n\n**Vitesse, concrètement — et le piège honnête :** selon invideo, la génération brute est rapide. Mais la propre FAQ d\'invideo situe la production complète de bout en bout d\'un court-métrage entre 2 et 5 jours, pas quelques minutes — car choisir et assembler parmi plusieurs options générées, pas la génération elle-même, est ce qui prend du temps. La [FAQ d\'invideo](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) présente 2 jours comme un plancher pour des films de 1 à 3 minutes dont les éléments sont arrêtés tôt. Ce chiffre porte sur un film terminé, alors que le chiffre local ci-dessus ne couvre que des clips TI2V-5B bruts et non montés : les deux ne sont pas directement comparables. Un service hébergé supprime la configuration locale, mais la production prend quand même du temps.\n\nOffres répertoriées par invideo (pour les prix, consultez la [page tarifs d\'invideo](https://invideo.io/pricing/)) :',
        blockquote:
          '**Envie de créer des vidéos IA sans installation locale ?** Si vous n\'avez pas de GPU puissant — ou si vous ne voulez tout simplement pas passer des heures à installer et configurer des outils vidéo IA locaux — invideo mérite d\'être essayé. [Essayer la version gratuite d\'invideo →](https://invideo.io/pricing/)',
        columns: ['Offre', 'Crédits par siège/mois', 'Accès aux modèles'],
        rows: [
          { 'Offre': 'Gratuite', 'Crédits par siège/mois': 'Limite hebdo', 'Accès aux modèles': 'Voir la page tarifs' },
          { 'Offre': 'Starter', 'Crédits par siège/mois': '400', 'Accès aux modèles': 'Sélection ; sans Seedance 2.5' },
          { 'Offre': 'Plus', 'Crédits par siège/mois': '2 000', 'Accès aux modèles': 'Tous les modèles, selon invideo' },
          { 'Offre': 'Max', 'Crédits par siège/mois': 'Dès 5 000', 'Accès aux modèles': 'Tous les modèles, selon invideo' },
        ],
        note:
          'Noms des offres, crédits et accès aux modèles d\'après les pages [tarifs](https://invideo.io/pricing/) et [limites des offres](https://invideo.io/help/billing/plan-limits/) d\'invideo, vérifiées le 27 novembre 2026. Aucun prix n\'est cité ici : consultée depuis l\'Europe, la page affichait une promotion à durée limitée, et les offres diffèrent de celles que ce guide listait auparavant. Consultez la page en ligne avant de vous fier à un détail.',
        affiliateLinks: [
          { url: 'https://invideo.io/pricing/', productName: 'invideo', productCategory: 'video-generation', label: 'Essayer la version gratuite d\'invideo →' },
        ],
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Cloud ou local : quelle porte est la vôtre ?',
        content: 'La version courte, appliquée à des situations courantes :',
        columns: ['Votre situation', 'Recommandation'],
        rows: [
          { 'Votre situation': 'Aucun GPU, ou moins de 12 Go de VRAM', 'Recommandation': 'Invideo (cloud) — en dessous de ce seuil, le local reste d\'entrée de gamme' },
          { 'Votre situation': 'Vidéo finie avec voix off souhaitée, pas des clips bruts', 'Recommandation': 'Invideo (cloud) — les modèles locaux n\'assemblent pas une production complète' },
          { 'Votre situation': 'Délai serré, aucune tolérance à la configuration', 'Recommandation': 'Invideo (cloud)' },
          { 'Votre situation': 'GPU 12 Go+, à l\'aise avec la configuration, veut confidentialité et coût marginal de 0 $', 'Recommandation': 'Local : LTX-Video (12 Go) ou Wan 2.2 (24 Go pour les modèles 14B quantifiés)' },
          { 'Votre situation': 'Dans l\'UE, au Royaume-Uni ou en Corée du Sud', 'Recommandation': 'Local = Wan 2.2 ou LTX-2 uniquement (la licence de HunyuanVideo vous exclut)' },
          { 'Votre situation': 'Besoin d\'automatisation/API à grande échelle sans la construire', 'Recommandation': 'Invideo (cloud, serveur MCP)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'Qui devrait choisir invideo ?',
        content:
          '**Invideo est probablement le meilleur choix si vous :**\n\n- Ne possédez pas de GPU puissant\n- Voulez commencer à créer des vidéos immédiatement\n- Ne voulez pas installer et configurer ComfyUI, CUDA, des modèles ou des environnements Python\n- Préférez un workflow intégré plutôt que d\'assembler plusieurs outils locaux\n- Avez besoin de scripts, voix, musique, sous-titres et génération vidéo dans un seul workflow\n- Vous souciez davantage des vidéos finies que d\'expérimenter avec les modèles sous-jacents\n\n**L\'IA locale est probablement le meilleur choix si vous :**\n\n- Possédez déjà un GPU adapté\n- Voulez un contrôle maximal\n- Voulez expérimenter avec les modèles et workflows\n- Avez de solides compétences techniques\n- Priorisez le contrôle local de la génération\n- Prévoyez de générer de très gros volumes et voulez optimiser le coût marginal par génération',
        blockquote:
          '**Vous ne savez pas quelle voie vous convient ?** Si vous voulez éviter le matériel et la configuration technique, l\'expérience la plus simple consiste à essayer invideo et voir si son workflow répond à vos besoins. [Essayer invideo gratuitement →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'Les voir en action',
        items: [
          '[4 modèles vidéo IA open source comparés — lequel est vraiment gratuit ?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — comparatif côte à côte de LTX 2.3, Wan 2.2, HunyuanVideo 1.5 et MiniMax H3, avec les clauses de licence en détail.',
          '[Test d\'invideo Agent One](https://www.youtube.com/watch?v=uUHO9byu0c0) — le workflow complet prompt-vers-vidéo-finie.',
          '[Démo locale complète de Wan 2.2](https://www.youtube.com/watch?v=fs62ML_ZgEs) — temps de rendu honnêtes sur du matériel grand public (semaine de lancement, juillet 2025).',
          '[Tutoriel Wan 2.2 en faible VRAM](https://www.youtube.com/watch?v=tQu0DjtOEyg) — faire tourner le modèle 14B sur un ordinateur portable 6 Go (2025).',
        ],
        note:
          'Ce sont des vidéos tierces, non produites par PromptQuorum ou invideo. Incluses à titre de référence uniquement — aucune approbation de la chaîne ou de son autre contenu n\'est impliquée.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Puis-je faire de la génération vidéo IA avec 8 Go de VRAM ?',
            a: 'À peine. La variante TI2V-5B de Wan 2.2 tourne sur 6–8 Go quantifiés, à qualité réduite et clips courts. Pour les modèles sérieux, 12 Go est le vrai plancher — et en dessous, un outil cloud comme invideo est la réponse pratique.',
          },
          {
            q: 'Wan 2.2 est-il vraiment gratuit pour un usage commercial ?',
            a: 'Oui. Il est sous licence Apache 2.0 — usage commercial permissif sans seuil de revenus ni exclusion territoriale (les conditions Apache standard, comme les mentions d\'attribution, s\'appliquent ; consultez la fiche du modèle), aucun droit revendiqué sur vos sorties. C\'est l\'un des modèles locaux haut de gamme à la licence la plus permissive.',
          },
          {
            q: 'Puis-je utiliser HunyuanVideo dans l\'UE ou au Royaume-Uni ?',
            a: 'Pas selon le texte de la licence. La Tencent Hunyuan Community License indique qu\'elle ne s\'applique pas dans l\'UE, au Royaume-Uni ni en Corée du Sud — selon le texte de la licence, cela couvre à la fois le modèle et ses sorties. Vérifiez la licence vous-même (ceci n\'est pas un conseil juridique) et envisagez plutôt Wan 2.2 ou LTX-2.',
          },
          {
            q: 'Ai-je besoin d\'un GPU pour utiliser invideo ?',
            a: 'Non. Invideo tourne entièrement dans le navigateur ; toute la génération se fait sur leur infrastructure. Un ordinateur portable ordinaire devrait suffire.',
          },
          {
            q: 'Les modèles locaux peuvent-ils produire une vidéo YouTube complète avec voix off ?',
            a: 'Pas seuls. Les modèles locaux génèrent des clips bruts de 5 à 20 secondes (LTX-2 inclut l\'audio synchronisé ; les autres sont silencieux). Script, voix off, musique, sous-titres et montage nécessitent chacun des outils séparés que vous assemblez vous-même en pipeline.',
          },
          {
            q: 'Quel est le vrai piège de la vidéo IA locale « gratuite » ?',
            a: 'Le coût matériel (un GPU capable), le temps de configuration (ComfyUI et ses dépendances), et le pipeline DIY nécessaire autour des clips bruts produits. Les poids du modèle n\'entraînent aucun frais par génération ; le matériel et l\'électricité restent payants.',
          },
          {
            q: 'Existe-t-il un Wan 2.7 ou un modèle Wan plus récent ?',
            a: 'Lors de la vérification du 27 novembre 2026, la page officielle de Wan sur GitHub ne montrait aucun dépôt plus récent à poids ouverts. Alibaba a annoncé [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) en avril 2026 comme disponible sur Alibaba Cloud. Méfiez-vous de tout autre site proposant des « poids Wan 2.7 » : ne téléchargez que depuis les dépôts officiels GitHub ou Hugging Face.',
          },
          {
            q: 'Je suis totalement débutant. Par où commencer ?',
            a: 'L\'offre gratuite d\'invideo permet d\'essayer le workflow cloud sans acheter de matériel et de juger si la vidéo IA répond à vos objectifs ; elle comporte des limites. Si vous achetez plus tard un GPU capable et voulez un contrôle et une confidentialité totaux, la porte locale reste ouverte.',
          },
          {
            q: 'Quelle différence pour faire tourner ces modèles locaux sur Mac vs Windows ?',
            a: 'ComfyUI tourne sur Apple Silicon (M1–M4) via le backend MPS de PyTorch. Prévoyez une génération plus lente que sur un GPU NVIDIA comparable ; nous n\'avons pas de benchmark contrôlé et n\'avançons aucun ratio de vitesse. Le problème pratique le plus important est le support logiciel : les optimisations spécifiques à CUDA sur lesquelles s\'appuient ces modèles (flash-attention, outils de quantification GGUF/FP8) sont bien moins matures sur Mac, donc plusieurs workflows et guides d\'installation communautaires supposent Windows ou Linux avec une carte NVIDIA et peuvent nécessiter des ajustements, voire ne pas fonctionner tels quels. Un avantage : la mémoire unifiée d\'Apple Silicon peut permettre de loger un modèle plus grand en mémoire qu\'un GPU dédié à VRAM équivalente, même si l\'exécution est plus lente. Si vous achetez du matériel spécifiquement pour la génération vidéo locale, Windows ou Linux avec NVIDIA est la voie bien supportée ; un Mac que vous possédez déjà convient pour expérimenter, pas comme cible recommandée pour un débit sérieux.',
          },
          {
            q: 'Puis-je garder le même personnage cohérent sur plusieurs clips vidéo locaux ?',
            a: 'Oui, avec du travail supplémentaire — aucun des trois modèles ne garantit cela nativement entre générations séparées. Deux approches fonctionnent : fournir la même image de référence en mode image-vers-vidéo (les trois supportent l\'I2V), ou entraîner un petit LoRA sur votre personnage. Wan 2.2 et LTX-2 disposent tous deux de workflows LoRA documentés pour cela — la version de LTX-2 s\'appelle IC-LoRA (in-context LoRA) et supporte explicitement la cohérence multi-personnages. Entraîner un LoRA sur votre personnage est la voie la plus exigeante ; elle vise des résultats plus cohérents qu\'un prompt ou une seule image de référence, et nous n\'avons pas mesuré l\'ampleur de la différence. Les fonctionnalités de kit de marque et d\'avatar IA d\'invideo résolvent le même problème sous-jacent différemment — un avatar et un profil vocal fixes que vous configurez une fois et réutilisez, sans entraînement requis.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Testez avant de décider',
        content:
          'Pas besoin de vous engager dans une configuration GPU locale — ni dans un abonnement payant — juste pour évaluer le workflow cloud. Avant d\'acheter du matériel ou de passer un week-end sur ComfyUI, cela vaut la peine de passer cinq minutes dans l\'autre sens d\'abord :\n\n1. Essayez la version gratuite d\'invideo.\n2. Créez une courte vidéo.\n3. Évaluez la qualité du résultat et le ressenti du workflow.\n4. Comparez cette expérience à l\'effort de configuration qu\'exigerait une installation locale.\n\nCela transforme la comparaison d\'une lecture en un test que vous pouvez faire vous-même en moins de temps qu\'il n\'en faut pour lire le reste de cet article.',
        blockquote:
          '[Essayer la version gratuite d\'invideo →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'Le verdict',
        content:
          'Choisissez le local si vous avez (ou allez acheter) un GPU 12 Go+, aimez construire vos propres outils, et privilégiez la confidentialité et la génération sans frais par clip plutôt que la commodité. Wan 2.2 est une base solide — haute qualité, Apache 2.0 — avec LTX-2 comme spécialiste vitesse et son.\n\nChoisissez le cloud si vous n\'avez pas le matériel, ne voulez pas de la configuration, ou avez besoin de vidéos finies plutôt que de clips bruts. Pour la plupart des gens qui veulent simplement créer des vidéos générées par IA, la voie cloud est le point de départ le plus simple : si vous n\'avez pas déjà le matériel et l\'intérêt technique que demande la génération locale, un service hébergé comme invideo vous épargne l\'installation locale. Une offre gratuite permet de tester ; les offres payantes et leurs limites figurent sur la page tarifs d\'invideo. Le moyen le plus simple de savoir si cela convient à votre workflow est d\'essayer la version gratuite.\n\nLes deux portes mènent à la vidéo IA. La question n\'a jamais été quelle technologie est meilleure — mais quel workflow correspond à votre machine, votre patience et vos objectifs.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Wan 2.2 sur GitHub](https://github.com/Wan-Video/Wan2.2) — dépôt officiel, licence et instructions d\'installation.',
          '[Wan 2.2 sur Hugging Face](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B) — fiche modèle officielle et téléchargement.',
          '[Licence du modèle LTX](https://ltx.io/model/license) — conditions officielles de la LTX Community License.',
          '[Page du modèle LTX-2](https://ltx.io/model/ltx-2-3) — architecture officielle et détails de la sortie.',
          '[HunyuanVideo 1.5 sur GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) — dépôt officiel et fichier LICENSE, incluant l\'exclusion UE/Royaume-Uni/Corée du Sud.',
          '[Engadget: ByteDance has reportedly suspended the global rollout of its new AI video generator](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) — article de presse de mars 2026 (en anglais).',
          '[Alibaba Cloud Community : annonce de Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) — avril 2026 (en anglais).',
          '[Limites des offres invideo](https://invideo.io/help/billing/plan-limits/) — limites officielles des offres et crédits.',
          '[Tarifs invideo](https://invideo.io/pricing/) — détails officiels des offres et prix.',
          '[Serveur MCP invideo](https://invideo.io/ai/mcp) — documentation officielle d\'automatisation.',
          '[MiniMax H3 sur GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — dépôt officiel.',
          '[MiniMax H3 sur Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — poids officiels du modèle.',
          '[Invideo : combien de temps faut-il pour créer un court-métrage IA ?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — chiffres officiels d\'invideo sur le délai de production de bout en bout (2–5 jours).',
          '[Configuration système ComfyUI](https://docs.comfy.org/installation/system_requirements) — documentation officielle du support MPS Mac/Apple Silicon.',
          '[Blog LTX : comment utiliser IC-LoRA dans LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — guide officiel de cohérence de personnage (IC-LoRA).',
          '[InsiderLLM: NVIDIA GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — source des prix de GPU d\'occasion cités (données d\'annonces eBay américaines).',
          '[Runway](https://runwayml.com/) — site officiel ; base de la description publique citée ci-dessus (non testé par PromptQuorum).',
          '[Luma AI](https://lumalabs.ai/) — site officiel ; base de la description publique citée ci-dessus (non testé par PromptQuorum).',
          '[Pika](https://pika.art/) — site officiel ; base de la description publique citée ci-dessus (non testé par PromptQuorum).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[AnimateDiff : animer un modèle Stable Diffusion (guide 2026)](/fr/power-local-llm/animatediff-video-generation-guide) — analyse approfondie d\'un outil unique pour animer vos checkpoints et LoRA SD1.5/SDXL existants, distinct des modèles vidéo natifs comparés ici.',
          '[Génération d\'images IA locale vs cloud](/fr/power-local-llm/local-ai-image-generation-vs-cloud) — l\'article compagnon, même structure, pour les images plutôt que la vidéo.',
          '[Calculateur de VRAM pour modèles locaux](/fr/local-llms/vram-calculator-local-llm) — besoins exacts en VRAM par modèle et quantification.',
          '[De combien de VRAM avez-vous besoin ?](/fr/local-llms/how-much-vram-local-llm) — tableaux par taille de modèle, de 7B à 70B.',
          '[Meilleurs GPU pour l\'IA locale en 2026](/fr/local-llms/best-gpus-for-local-llms) — choix matériels par budget.',
          '[Meilleurs GPU petit budget pour l\'IA locale](/fr/local-llms/best-budget-gpus-local-llm) — options matérielles d\'entrée de gamme.',
          '[GPU vs CPU vs Apple Silicon](/fr/local-llms/gpu-vs-cpu-vs-apple-silicon) — comparatif de plateformes pour l\'inférence locale.',
          '[Prompts système vs prompts utilisateur](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — fondamentaux de structuration de prompts applicables à la vidéo.',
          '[Prompt engineering pour modèles locaux](/fr/local-llms/prompt-engineering-for-local-models) — techniques de prompting structuré.',
          '[Test d\'OpenShorts](/fr/power-local-llm/openshorts-review) et [Test de pyVideoTrans](/fr/power-local-llm/pyvideotrans-review) — deux outils pour des vidéos existantes plutôt que des générateurs de vidéo : l\'un découpe de longues vidéos en clips verticaux sous-titrés, l\'autre traduit et double des vidéos.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-02-21',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-ja.webp',
    title: 'Invideo vs ローカルAI動画生成：一方はGPUと週末の時間、もう一方はクラウドの定額契約',
    seoTitle: 'クラウドvsローカルAI動画2026：invideo vs Wan 2.2＆LTX-2',
    intro:
      '2026年のAI動画には、2つの入り口があります。1つ目はローカルです。無料でオープンな動画モデルを自分のGPUで動かします。生成回数は無制限、推論は自分のハードウェア上で実行され（モデルのダウンロードや更新確認では引き続きネットワークを使用します）、サブスクリプション不要です。ただし、ワークフロー全体を自分で組み立てる必要があります。2つ目はクラウドです。invideoはホスト型サービスで、台本やアイデアから編集済みの動画まで、AIエージェントが支援する流れを打ち出しています。ブラウザから利用できます。どちらの入り口が「優れている」ということはありません。本ガイドでは、多くの比較記事が見落としがちなライセンスの細則、実際に必要なハードウェア要件、そしてあなたの状況に合った選択肢を示す判断ツールを紹介します。',
    metaDescription:
      'ローカルAI動画モデル（Wan 2.2、LTX-2、HunyuanVideo）は、対応GPUがあれば無料でダウンロードして使えます。invideoのクラウドサービスとの違いを、VRAMとライセンスの面から比較します。',
    twitterDescription:
      '2026年のクラウド vs ローカルAI動画：invideoは定額制のホスト型サービスです。Wan 2.2、LTX-2、HunyuanVideoは十分なGPUがあれば、無料でダウンロードできます。',
    audience:
      '自分のGPUで無料のローカル動画生成を行うか、invideoのオールインワン型クラウドパイプラインを使うかを検討しているクリエイターと開発者向け。ハードウェア要件、ライセンスの細則、ワークフロー上のトレードオフを扱います。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルAI動画生成',
    targetKeywords: [
      'クラウド vs ローカル AI動画',
      'Invideo vs ローカルAI動画',
      'Wan 2.2 vs LTX-2',
      '2026年 最高のオープンソース動画モデル',
      'HunyuanVideo ローカル',
      'AI動画生成 ローカル 実行',
      'Wan 2.2 VRAM 要件',
      'LTX-2 ライセンス',
      'ローカル動画生成 GPU',
    ],
    current_models_mentioned: [
      'Wan 2.2 (T2V-A14B, I2V-A14B, TI2V-5B)',
      'LTX-2.5 / LTX-2.3',
      'HunyuanVideo 1.5',
      'MiniMax H3',
      'Kling 3.0',
      'Veo 3.1',
      'Seedance 2.5',
    ],
    current_hardware_mentioned: ['6 GB VRAM', '8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'RTX 3060', 'RTX 3090', 'RTX 4090'],
    leadAnswerBlock:
      '**12GB以上のGPUを持つほとんどの人にとって、2026年時点で有力なローカルAI動画モデルのひとつがWan 2.2です。** Apache 2.0ライセンスで、収益上限も地域制限もなく、無料でダウンロードできます（ハードウェアと電気代は別途かかります）。**そのGPUがない場合、あるいは生の映像クリップではなく完成したナレーション付き動画が欲しい場合は、invideoの方が良い選択です。** invideoはブラウザで使うホスト型サービスで、有料プラン（Starter、Plus、Max）は利用できるモデルが異なります。最新の料金ページを確認してください。**HunyuanVideo 1.5は映画的な見た目でコミュニティの人気がありますが、そのライセンスはEU、英国、韓国を完全に除外しています。** これらの地域にお住まいの方は避けてください。',
    quickAnswerTop: {
      ja: {
        question: 'AI動画はローカルで生成すべきか、invideoのクラウドパイプラインを使うべきか？',
        answer:
          '12GB以上のGPUを持ち、クリップごとの料金なしの生成とプライバシーを重視するならローカル生成がおすすめです。Wan 2.2（Apache 2.0、寛容な商用利用。モデルカードを確認）が無難な出発点です。適切なハードウェアがない、セットアップを管理したくない、あるいは生のクリップではなく完成した動画（台本・ナレーション・音楽・字幕付き）が必要な場合はinvideoを使ってください。invideoは無料プランもある定額制のホスト型サービスです。最新の料金は料金ページで確認してください。',
        bullets: [
          'VRAM 12GB未満 → invideoが現実的な選択です。このクラス以下では、ローカルの選択肢は量子化した入門レベルの出力に限られます。',
          'VRAM 12GB → LTX-Video 0.9.5が、このクラスで実用的なローカル選択肢のひとつです。',
          'VRAM 16〜24GB以上 → Wan 2.2（高品質、Apache 2.0 — 収益しきい値や地域による除外のない寛容な商用利用。帰属表示など標準的なApacheの条件は適用されるため、モデルカードを確認）またはLTX-2（速度＋同期音声）。',
          'EU、英国、韓国にお住まいの場合 → HunyuanVideo 1.5の対象外です。代わりにWan 2.2かLTX-2を使ってください。',
          '生のクリップではなく完成したナレーション付き動画が必要な場合 → ローカルモデルは無音（LTXを除く）の5〜20秒のクリップしか生成できません。invideoはクリップ周辺の作業向けのホスト型ワークフローを提供しています。各プランの内容は料金ページで確認してください。',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'なぜ2026年はAI動画にとって奇妙な時期なのか', anchor: '#market-context' },
      { label: 'ローカルという入り口：自分のGPUで動く3つの無料モデル', anchor: '#local-models' },
      { label: 'Wan 2.2（Alibaba）', anchor: '#wan-2-2' },
      { label: 'LTX-2（Lightricks）', anchor: '#ltx-2' },
      { label: 'HunyuanVideo 1.5（Tencent）', anchor: '#hunyuanvideo' },
      { label: '注目株：MiniMax H3', anchor: '#one-to-watch' },
      { label: 'ハードウェアという関門', anchor: '#hardware-gate' },
      { label: 'DIYの現実：「無料」が求めるもの', anchor: '#diy-reality' },
      { label: 'クラウドという入り口：invideoがまとめて提供するもの', anchor: '#invideo-bundle' },
      { label: 'クラウドかローカルか：あなたに合う入り口は？', anchor: '#decision-guide' },
      { label: 'Invideoを選ぶべきなのは誰か？', anchor: '#who-should-choose' },
      { label: '実際の動作を見る', anchor: '#video-roundup' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '決める前に試す', anchor: '#try-before-you-decide' },
      { label: '結論', anchor: '#verdict' },
      { label: '出典', anchor: '#sources' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Wan 2.2は、寛容なApache 2.0ライセンスで提供される有力なローカル動画モデルです。** 収益しきい値や地域による除外のない寛容な商用利用が可能です（帰属表示など標準的なApacheの条件は適用されます。モデルカードを確認してください）。',
          '**invideoはホスト型の選択肢です。** 無料プランと有料のStarter、Plus、Maxプランがあり、料金ページによるとPlusとMaxではすべてのSeedanceモデルを含む全モデルを利用できます。料金は条件により異なるため、最新のページを確認してください。',
          '**HunyuanVideo 1.5のライセンスは、EU、英国、韓国を明確に除外しています。** モデル本体だけでなく、その出力にも適用されます。これらの地域の読者は代わりにWan 2.2かLTX-2を使ってください。',
          '**LTX-2は速度重視のモデルと位置づけられており、このローカル3モデルの中で唯一、組み込みの同期音声を持ちます。** 年間売上高$10M未満の企業なら商用利用も無料です。',
          '**本格的なローカル動画生成の現実的な最低ラインはVRAM 12GBです。** それ未満では、invideoの方が実用的な選択肢になります。',
          '**ローカルモデルが生成するのは5〜20秒の生クリップ（LTX-2を除き無音）であり、完成した動画ではありません。** 台本、ナレーション、音楽、字幕、編集はそれぞれ別のツールで自分で組み立てる必要があります。invideoは、こうした工程を1つのホスト型ワークフローにまとめることを目指しています。',
          '**2026年11月27日の確認時点で、Wanの公式GitHubページに「Wan 2.7」のオープンウェイトのリポジトリはありませんでした。** Alibabaは2026年4月に[Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009)をAlibaba Cloudで利用できるモデルとして発表しています。「Wan 2.7のウェイト」を提供する第三者のページには注意してください。',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'なぜ2026年はAI動画にとって奇妙な時期なのか',
        content:
          'プロプライエタリな動画市場は揺れ動いてきました。2026年3月、[Engadgetは](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html)The Informationを引用し、DisneyとParamount Skydanceからの停止要求書を受けて、ByteDanceがSeedance 2.0のグローバル展開を一時停止したと報じました。PromptQuorumはこの報道を独自には検証していません。その後、提供状況は変わっており、現在invideoの料金ページにはSeedance 2.0と2.5が掲載されています。\n\nこうした変化があるからこそ、両方の入り口に魅力があります。ダウンロード済みのオープンモデルは、提供元の変化に関係なく動き続けます。invideoのようなマルチモデルサービスは1つのアカウントで複数のモデルを提供しますが、ラインナップは変わる可能性があり、ワークフローに影響がないとは保証できません。',
      },
      localModels: {
        id: 'local-models',
        title: 'ローカルという入り口：自分のGPUで動く3つの無料モデル',
        content:
          'このガイドでは、ローカル動画生成で広く使われている3つのオープンウェイトシステムを比較します。3つとも、ComfyUIというノードベースのインターフェース上で動作します。これは自分のマシンにインストールするもので、Ollamaのようなチャット形式のツールではありません。これらは拡散モデル（diffusion model）であり、LLMではありません。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2は2026年時点でバランスの取れた有力なローカル動画モデルです。Apache 2.0で高品質、地域制限なし。一方LTX-2は速度を重視して同期音声にも対応し、HunyuanVideo 1.5は映画的な見た目で人気がありますが、ライセンス上EU/英国/韓国のユーザーは利用できません。' },
          { type: 'plain-terms', text: '一つだけ答えが欲しいなら、VRAM 12GB以上のGPUを用意してWan 2.2を使ってください。品質が高く、ライセンスも寛容なApache 2.0です。' },
        ],
        columns: ['モデル', 'ライセンス', 'VRAM', '出力', '特長'],
        rows: [
          { 'モデル': 'Wan 2.2（Alibaba）', 'ライセンス': 'Apache 2.0 — 寛容、収益しきい値・地域除外なし', 'VRAM': '6〜8GB（5B）／15〜25GB（14B）', '出力': '480p/720p、約5秒のクリップ', '特長': '14Bと軽量な5Bの構成' },
          { 'モデル': 'LTX-2（Lightricks）', 'ライセンス': 'LTXコミュニティライセンス — 年間売上$10M未満は無料', 'VRAM': '量子化で18〜20GB、フル精度で32GB以上', '出力': '480p〜1080p、5〜20秒、音声付き', '特長': '映像と音声を同期生成（3モデルで唯一）' },
          { 'モデル': 'HunyuanVideo 1.5（Tencent）', 'ライセンス': 'Tencentコミュニティライセンス — EU/英国/韓国を除外', 'VRAM': '最低14GB、快適には24GB', '出力': '480p/720p、最長10秒', '特長': '映画的な光の表現。オフロード時は最低14GB' },
        ],
        note:
          '⚠️ ご注意：2026年11月27日の確認時点で、[Wanの公式GitHubページ](https://github.com/Wan-Video)に「Wan 2.7」のオープンウェイトのリポジトリはありませんでした。Alibabaは[Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009)をAlibaba Cloudで利用できると発表しています。「Wan 2.7のオープンウェイト」を提供すると謳うページには注意し、公式のGitHubまたはHugging Faceリポジトリからのみダウンロードしてください。',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2（Alibaba）— 高品質でApache 2.0',
        content:
          'Wan 2.2はオープンな動画モデルの中で広く使われており、多くのコミュニティ派生版が作られています（最新のダウンロード数はHugging Faceのモデルページをご確認ください）。T2V-A14BとI2V-A14B（Mixture-of-Experts、合計27B／アクティブ14Bパラメータ）に加え、テキストと画像の両方から動画を生成できるコンパクトなTI2V-5Bの3種類が提供されており、TI2V-5Bはわずか6〜8GBのVRAMで動作します。14Bクラスは15GB（GGUF Q3）から25GB（FP8）が必要で、公式の非量子化版は80GBを要求します。ライセンスはApache 2.0で、収益しきい値や地域による除外のない寛容な商用利用が認められた無料モデルです（帰属表示など標準的なApacheの条件は適用されます。モデルカードを確認してください）。\n\n**速度について具体的に：** [Wan 2.2の公式リポジトリ](https://github.com/Wan-Video/Wan2.2)によると、特別な最適化なしで、コンパクトなTI2V-5Bモデルは一般向けGPU1枚で5秒の720pクリップを9分未満で生成できます。これは開発元の数値でPromptQuorumは検証しておらず、14B版を示すものでもありません。同リポジトリによると、TI2V-5Bのサンプルコマンドの動作環境はVRAM 24GB以上のGPU（RTX 4090など）です。6〜8GBのカードで同じ時間は期待しないでください。20秒のシーケンスには5秒のクリップを4本別々に生成する必要があり、各クリップがこの時間で済めば生の生成時間は36分未満で、さらにつなぎ合わせる手作業の編集が必要です。これはクリップ単位の数値を使った計算で、実測した20秒のベンチマークではありません。',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2（Lightricks）— 速度と同期サウンド',
        content:
          'LTX-2は、この3つの中で唯一、1回のパスで同期した音声と映像を生成するモデルです。足音、環境音、効果音が映像と同時に生成されます。高速なモデルとも位置づけられていますが、VRAM消費が最も軽いわけではありません（後述の数値を参照）。アーキテクチャは22Bの拡散トランスフォーマーで、LTX-2.3（2026年3月）は現行のLTX-2.5リリースと並んで引き続き完全サポートされています。ライセンスはLTXコミュニティライセンスで、会社の年間総売上が$10M未満であれば商用利用は無料、それを超える場合は有料の商用ライセンスが必要です（一部のサードパーティ記事はApache 2.0だと誤って記載していますが、[公式ライセンスページ](https://ltx.io/model/license)のみが信頼できる情報源です）。ハードウェア要件は量子化で18〜20GB、フル精度で32GB以上のVRAMです。12GBのカードでは、旧世代のLTX-Video 0.9.5が現実的な選択肢として残ります。\n\n**速度について具体的に：** LTX-2は高速とよく言われますが、RTX 4090でのクリップあたりの所要時間を独立に検証した数値は見つからなかったため、掲載しません。より新しいLTX-2.5について開発元は、10秒の720p画像→動画クリップを、一般向けGPUではなくデータセンター級のNVIDIA GB200スーパーチップ2基で6.8秒で生成したと報告しています（[VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights)は、この数値は提供元の発表で独立検証されていないと説明しています）。家庭用GPUの性能については何も示していません。',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5（Tencent）— 映画的な見た目、ただし法的な注意点あり',
        content:
          '2025年11月にリリースされたTencentの8.3Bモデルは、映画的なライティングと質感でコミュニティの人気を集めており、VRAM要件は比較的控えめです。オフロードを使えば最低14GB、快適に使うなら24GBが目安です。ネイティブで480p/720pを生成し、内蔵の超解像機能で1080pまで対応、クリップ長は最長10秒です。\n\n**速度について具体的に：** Tencentの[リポジトリ](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5)によると、480pの画像→動画ステップ蒸留モデルを使えば、RTX 4090 1枚で75秒以内に動画を生成できます。これは開発元の数値で、PromptQuorumは検証していません。クリップの長さは記載されていないため、より長いシーケンスには換算しません。',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'ライセンスに関する警告 — ダウンロード前にお読みください。HunyuanVideo 1.5はTencent Hunyuanコミュニティライセンスを採用しており、Apache 2.0ではありません。このライセンスは欧州連合、英国、韓国には適用されません。ライセンス文面によると、これらの地域のユーザーは、モデル本体もその出力も利用する権限がありません。また、モデルのリリース日の前月に自社製品の月間アクティブユーザーが1億人を超えていた場合は、Tencentから別途ライセンスを取得する必要があります。モデルやその出力を、他のAIモデル（Tencent Hunyuanとその派生物を除く）の改善に使うことも禁止されています。EU、英国、韓国にお住まいの場合はこのモデルを避け、Wan 2.2（Apache 2.0、地域による除外のない寛容な商用利用）をご検討ください。',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: '注目株：MiniMax H3',
        content:
          '2026年8月3日にリリースされたMiniMax H3は、ネイティブなステレオ音声、リリース初日からのComfyUIサポート、そしてRTX 3060でも動く量子化バージョンを備えた33.1Bのオムニモーダルモデルです。これを4つ目の選択肢として扱う前に、2つの注意点があります。ローカル版の解像度は768pが上限で（フル2Kパイプラインはホスト型のみ）、その[コミュニティライセンス](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE)はEU、英国、韓国、米国を許諾地域から除外し、年間売上が$20Mを超える場合は別途の許可を求めています。決定する前に本文を確認してください（法的助言ではありません）。初期の評判は良好ですが、最近公開されたことと本番運用に耐えることは別の話です。',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'ハードウェアという関門',
        content: [
          'ローカル動画生成が「無料」なのは、子犬が「無料」なのと同じ意味です。モデルの重み自体にはコストがかかりませんが、GPUこそが本当の参入コストです。GPUのVRAMが12GB未満で、アップグレードの予定もない場合は、ローカル生成は最初から見送るべきです。このクラス以下で実用になるのは量子化版のWan 2.2 TI2V-5Bのみで、品質もエントリーレベルです。その場合はクラウドプラットフォームの方が手軽な選択肢になりやすいでしょう。',
          '自分のマシンがどのクラスに当たるか分からない場合は、以下のガイドが参考になります。モデルごとの正確な要件は[VRAM Calculator](/ja/local-llms/vram-calculator-local-llm)、モデルサイズ別の一覧表は[How Much VRAM Do You Need?](/ja/local-llms/how-much-vram-local-llm)、ハードウェア選びには[Best GPUs for Local AI](/ja/local-llms/best-gpus-for-local-llms)と[Best Budget GPUs](/ja/local-llms/best-budget-gpus-local-llm)、プラットフォーム比較には[GPU vs CPU vs Apple Silicon](/ja/local-llms/gpu-vs-cpu-vs-apple-silicon)をご覧ください。一つ正直に断っておくと、これらのガイドはLLM用のVRAM計算式（パラメータ数×ビット数÷8）を使っています。動画拡散モデルの場合はVRAM使用量が解像度とクリップ長にも比例して増えるため、これらの数字は動画ワークロードにおいては下限であり上限ではないと考えてください。',
        ],
        columns: ['お使いのGPU', '実行可能なモデル'],
        rows: [
          { 'お使いのGPU': 'VRAM 6〜8GB', '実行可能なモデル': 'Wan 2.2 TI2V-5B（量子化）— 実用的、エントリー品質' },
          { 'お使いのGPU': 'VRAM 12GB', '実行可能なモデル': 'LTX-Video 0.9.5 — このクラスで実用的な選択肢のひとつ' },
          { 'お使いのGPU': 'VRAM 16GB', '実行可能なモデル': 'HunyuanVideo 1.5（ライセンス条件が合えば）、Wan 2.2 14B（GGUF Q3）' },
          { 'お使いのGPU': 'VRAM 24GB以上', '実行可能なモデル': '3モデルすべて：量子化したWan 2.2 14B、量子化LTX-2、HunyuanVideo 1.5（ライセンス条件が合えば）' },
        ],
        note:
          'GPUのおおよその費用（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)より。eBay米国の出品データであり、見積もりやオファーではありません）：中古RTX 3090の落札実績は約$1,500-1,725です（中央値$1,650、落札225件、2026年11月13〜23日、2026-11-23付）。中古RTX 4090の落札実績は、2026-10-15付の数値では$2,575-3,010（中央値$2,860）でした。日本での価格は税や輸入コストにより異なります。GPU価格は変動が大きいため、数か月以上前のこの数字を鵜呑みにせず、購入前に必ず最新価格を確認してください。',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'ローカル動画生成の運用が実際に求めること',
        content:
          'ローカルモデルを使うということは、動画ツールを1つインストールするのではなく、パイプライン全体を自分で組み立てるということです。\n\n**生成環境の構築。** ComfyUIはノードベースです。ローダー、サンプラー、デコーダーからなるワークフローグラフを、自分で構築するか、あるいはインポートしてデバッグする必要があります。最初のフレームがレンダリングされるまでに、CUDAバージョンの不一致、PyTorchのバージョン固定、`flash_attn`のインストールエラーなどに遭遇することを覚悟してください。\n\n**プロンプトの作成。** 動画モデルには、ショットタイプ、カメラの動き、ライティング、被写体の動作といった構造化されたプロンプトが必要で、一行だけの指示では不十分です。一般的なComfyUIのワークフローにはシステムプロンプト層がありません。[Wan 2.2](https://github.com/Wan-Video/Wan2.2)と[HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5)の公式リポジトリにはプロンプトの拡張・書き換え機能がありますが、自分で用意する別の言語モデルやAPIが必要です。[system prompts vs. user prompts](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)と[prompt engineering for local models](/ja/local-llms/prompt-engineering-for-local-models)のガイドで扱う基本は、そのまま動画プロンプティングにも応用できます。\n\n**クリップの周辺にあるすべて。** ローカルモデルが出力するのは、5〜20秒の無音（LTXを除く）の生クリップです。台本、ナレーション、音楽、ストック映像、字幕、編集は、それぞれ別のツールを自分で選び、インストールし、つなぎ合わせる必要があります。',
        promptExamples: [
          { label: '弱い例（一行だけ）', text: 'A dog on a beach（浜辺の犬）' },
          { label: '構造化された例（動画モデルに必要なもの）', text: 'Golden retriever sprinting along a wet shoreline at golden hour, low tracking shot following from the side, shallow depth of field, warm backlight, gentle slow motion, cinematic 24fps（黄金色の夕暮れ時、濡れた海岸線を走るゴールデンレトリバー。横から追う低アングルのトラッキングショット、浅い被写界深度、暖色の逆光、緩やかなスローモーション、シネマティックな24fps）' },
        ],
        note:
          '被写体と動作、カメラの動き、ライティング、スタイル。この4つの要素を1つの文に詰め込めるかどうかが、スロットマシンとカメラの違いを分けます。このDIYスタックにワクワクするなら、ローカルという入り口はあなたに向いています。疲れそうだと感じたなら、この先を読み進めてください。',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'クラウドという入り口：invideoがまとめて提供するもの',
        highlight: true,
        itemHeadings: true,
        content:
          'Invideoはクラウドという入り口の一例であり、唯一の選択肢ではありません。「クラウド」がすべて同じ意味だと思い込む前に、他のサービスとどう違うのか知っておく価値があります。公開されている説明によると（PromptQuorumはこの3サービスをいずれもテストしていません）、Runwayはプロ向け編集ソフト（Premiere Pro、Final Cut、DaVinci Resolve）に直接統合されており、完成した1本の動画を組み立てるというより、AIと編集者を組み合わせたハイブリッドワークフローを想定しています。同じ説明によれば、Luma AIのDream Machineは、VFX合成パイプライン（After Effects、Nuke）向けのネイティブ16ビットHDR出力に特化しており、まったく異なる層のユーザーを対象としています。同じ説明によれば、Pikaは高速な生クリップ生成を中心としています。台本、ナレーション、ストック映像の組み立てに対応するかどうかはPromptQuorumでは確認していないため、クリップ周辺の作業に使う前にご確認ください。invideo自身の説明では、絵コンテ作成、台本作成、タイムライン編集と、Kling、Veo、Seedanceなどの生成モデルへのアクセスを組み合わせています。\n\ninvideoは単一の動画モデルではなく、ホスト型サービスです。2026年11月27日の確認時点で、[公式トップページ](https://invideo.io/)は、台本やアイデアからの絵コンテ作成、台本作成、マルチトラックのタイムラインを備えたエージェント型の動画エディターを紹介していました。サイトにはAI音声・音楽ツールも掲載されています。PromptQuorumはこのサービスをテストしていないため、ナレーションや字幕が必要な形で使えるか確認してください。ブラウザ上で動作するため、自分のGPU性能は関係ありません。\n\nGPUの調査や量子化フォーマットの勉強ではなく、今すぐ動画作りを始めたい人にとって、invideoは現実的な選択肢です。ローカルハードウェアも、ComfyUIのインストールも、CUDAのトラブルシューティングも不要で、クリップ周辺の工程を扱うホスト型の作業環境があります。生成モデルそのものを細かく制御することより、完成した動画を重視するクリエイターに特に向いています。無料プランがあるため、何かを支払う前にそれが自分に合うかどうかを確かめられます。\n\nこの比較において特に際立つ点が3つあります。\n\n- **1つのアカウントで複数のモデル。** invideoの料金ページによると、PlusとMaxではすべてのSeedanceモデルを含む全モデルを利用できます。Starterは一部のモデルのみで、Seedance 2.5は含まれません。ラインナップは変わる可能性があります。\n- **エージェント連携が組み込まれている。** invideoは、AIエージェントがタイムラインエディターで作業できる[MCPサーバー](https://invideo.io/ai/mcp)を提供しています。\n- **無料プランがある。** invideoの[プラン上限ページ](https://invideo.io/help/billing/plan-limits/)には週単位の上限が記載されています。利用前に、書き出しや透かしの条件を確認してください。\n\n**速度について具体的に、そして正直な注意点：** invideoによれば、生の生成は高速です。しかし、invideo自身のFAQによれば、ショートフィルムのエンドツーエンドの制作全体には数分ではなく2〜5日かかるとされています。時間がかかるのは生成そのものではなく、複数の生成候補の中から選び、組み立てる作業だからです。[invideoのFAQ](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/)は、素材を早い段階で確定した1〜3分の作品について2日を最低ラインとしています。これは完成した作品の数値で、上のローカルの数値は未編集のTI2V-5Bの生クリップのみを対象とするため、直接は比較できません。ホスト型サービスならローカルの設定は不要ですが、制作にはやはり時間がかかります。\n\ninvideoが掲載しているプラン（料金は[invideoの料金ページ](https://invideo.io/pricing/)を参照）：',
        blockquote:
          '**ローカルセットアップなしでAI動画を作りたいですか？** パワフルなGPUを持っていない、あるいはローカルAI動画ツールのインストールと設定に何時間もかけたくないなら、invideoを試してみる価値があります。[Invideoの無料版を試す →](https://invideo.io/pricing/)',
        columns: ['プラン', '席あたり月間クレジット', '利用できるモデル'],
        rows: [
          { 'プラン': 'Free', '席あたり月間クレジット': '週単位の上限あり', '利用できるモデル': '料金ページを確認' },
          { 'プラン': 'Starter', '席あたり月間クレジット': '400', '利用できるモデル': '一部モデル（Seedance 2.5を除く）' },
          { 'プラン': 'Plus', '席あたり月間クレジット': '2,000', '利用できるモデル': '全モデル（invideoによる）' },
          { 'プラン': 'Max', '席あたり月間クレジット': '5,000から', '利用できるモデル': '全モデル（invideoによる）' },
        ],
        note:
          'プラン名、クレジット、利用できるモデルは、2026年11月27日に確認したinvideoの[料金ページ](https://invideo.io/pricing/)と[プラン上限ページ](https://invideo.io/help/billing/plan-limits/)に基づきます。ここでは料金を掲載しません。欧州からの閲覧では期間限定セールが表示されており、プラン内容も本ガイドが以前掲載したものと異なるためです。利用前に必ず最新のページを確認してください。',
        affiliateLinks: [
          { url: 'https://invideo.io/pricing/', productName: 'invideo', productCategory: 'video-generation', label: 'invideoの無料版を試す →' },
        ],
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'クラウドかローカルか：あなたに合う入り口は？',
        content: '短くまとめると、よくある状況ごとの推奨は次のとおりです。',
        columns: ['あなたの状況', '推奨'],
        rows: [
          { 'あなたの状況': 'GPUがない、またはVRAM 12GB未満', '推奨': 'Invideo（クラウド）— このクラス以下のローカルの選択肢は入門レベルです' },
          { 'あなたの状況': '生のクリップではなく、ナレーション付きの完成した動画が欲しい', '推奨': 'Invideo（クラウド）— ローカルモデルは完全な制作物を組み立ててくれません' },
          { 'あなたの状況': '納期優先で、セットアップの手間を一切許容できない', '推奨': 'Invideo（クラウド）' },
          { 'あなたの状況': 'VRAM 12GB以上のGPUがあり、セットアップに抵抗がなく、プライバシーと限界費用$0を重視する', '推奨': 'ローカル：LTX-Video（12GB）またはWan 2.2（量子化した14Bモデルには24GB）' },
          { 'あなたの状況': 'EU、英国、韓国在住', '推奨': 'ローカルはWan 2.2かLTX-2のみ（HunyuanVideoのライセンス対象外）' },
          { 'あなたの状況': '自分で構築せずに大規模な自動化・APIが必要', '推奨': 'Invideo（クラウド、MCPサーバー）' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'Invideoを選ぶべきなのは誰か？',
        content:
          '**Invideoの方が良い選択になりやすいのは、次のような方です。**\n\n- パワフルなGPUを持っていない\n- すぐに動画制作を始めたい\n- ComfyUI、CUDA、モデル、Python環境のインストールや設定をしたくない\n- 複数のローカルツールを組み合わせるより、統合されたワークフローが欲しい\n- 台本、音声、音楽、字幕、動画生成を1つのワークフローで済ませたい\n- 基盤となるモデルを試すことより、完成した動画そのものを重視する\n\n**ローカルAIの方が良い選択になりやすいのは、次のような方です。**\n\n- すでに適切なGPUハードウェアを持っている\n- 最大限のコントロールが欲しい\n- モデルやワークフローを自由に試したい\n- 高い技術スキルを持っている\n- 生成をローカルで完結させることを優先する\n- 非常に大量の生成を見込んでおり、限界生成コストを最適化したい',
        blockquote:
          '**どちらのルートが自分に合うか分からないですか？** ハードウェアと技術的なセットアップを避けたいなら、一番手軽な実験方法は、まずinvideoを試してワークフローが自分に合うか確かめることです。[Invideoを無料で試す →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: '実際の動作を見る',
        items: [
          '[4 Open Source AI Video Models Compared — Which One\'s Actually Free?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — LTX 2.3、Wan 2.2、HunyuanVideo 1.5、MiniMax H3の出力を並べて比較。ライセンスの細則も解説。',
          '[Invideo Agent One Review](https://www.youtube.com/watch?v=uUHO9byu0c0) — プロンプトから完成動画までの全ワークフローを紹介。',
          '[Wan 2.2 Full Local Demo](https://www.youtube.com/watch?v=fs62ML_ZgEs) — コンシューマー向けハードウェアでの正直なレンダリング時間（発売週、2025年7月）。',
          '[Low-VRAM Wan 2.2 Tutorial](https://www.youtube.com/watch?v=tQu0DjtOEyg) — 14BモデルをVRAM 6GBのノートPCで動かす方法（2025年）。',
        ],
        note:
          'これらはサードパーティによる動画であり、PromptQuorumやinvideoが制作したものではありません。参考情報として掲載しているのみで、チャンネルやその他のコンテンツを推奨する意図はありません。',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'VRAM 8GBでAI動画生成は実行できますか？',
            a: 'ぎりぎり可能です。Wan 2.2のTI2V-5Bバリアントは量子化すれば6〜8GBで動作しますが、品質は下がり、クリップ長も短くなります。本格的なモデルを動かすなら、実質的な最低ラインは12GBです。それを下回る場合は、invideoのようなクラウドツールが現実的な答えです。',
          },
          {
            q: 'Wan 2.2は本当に商用利用が無料ですか？',
            a: 'はい。Apache 2.0ライセンスで、収益しきい値や地域による除外のない寛容な商用利用が認められており（帰属表示など標準的なApacheの条件は適用されます。モデルカードを確認してください）、あなたの生成物に対する権利主張もありません。トップクラスのローカルモデルの中でも、ライセンスが寛容なモデルのひとつです。',
          },
          {
            q: 'HunyuanVideoはEUや英国で使えますか？',
            a: 'ライセンスの文言上は、いいえ。Tencent Hunyuanコミュニティライセンスは、EU、英国、韓国には適用されないと定めており、ライセンス本文によればこれはモデル本体だけでなくその出力にも及びます。ライセンスはご自身でご確認ください（法的助言ではありません）。代わりにWan 2.2かLTX-2の利用もご検討ください。',
          },
          {
            q: 'Invideoを使うのにGPUは必要ですか？',
            a: '不要です。Invideoはすべてブラウザ上で動作し、生成処理はすべてinvideo側のインフラで行われます。一般的なノートPCでも使えるはずです。',
          },
          {
            q: 'ローカルモデルだけでナレーション付きの完成したYouTube動画を作れますか？',
            a: 'それ単体では作れません。ローカルモデルが生成するのは5〜20秒の生クリップです（LTX-2は同期音声を含みますが、他は無音です）。台本、ナレーション、音楽、字幕、編集はそれぞれ別のツールが必要で、パイプラインとして自分で組み立てる必要があります。',
          },
          {
            q: '「無料」のローカルAI動画には、実際どんな落とし穴がありますか？',
            a: 'ハードウェア費用（対応可能なGPU）、セットアップにかかる時間（ComfyUIとその依存関係）、そして生の出力クリップの周りに必要なDIYパイプラインです。モデルの重みには生成ごとの料金はありませんが、ハードウェアと電気代はかかります。',
          },
          {
            q: 'Wan 2.7や、それより新しいWanモデルはありますか？',
            a: '2026年11月27日の確認時点で、Wanの公式GitHubページに、より新しいオープンウェイトのリポジトリはありませんでした。Alibabaは2026年4月に[Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009)をAlibaba Cloudで利用できると発表しています。「Wan 2.7のウェイト」を提供すると謳うほかのサイトには注意し、公式のGitHubかHugging Faceリポジトリからのみダウンロードしてください。',
          },
          {
            q: '完全な初心者です。何から始めればいいですか？',
            a: 'invideoの無料プランなら、ハードウェアを購入せずにクラウドのワークフローを試し、AI動画が自分の目的に合うかを判断できます（プランには上限があります）。後から対応可能なGPUを購入し、フルコントロールとプライバシーが欲しくなったら、ローカルという入り口はいつでも開いています。',
          },
          {
            q: 'これらのローカルモデルをMacとWindowsで動かす場合、何が違いますか？',
            a: 'ComfyUIはApple Silicon（M1〜M4）上でも、PyTorchのMPSバックエンド経由で動作します。同等クラスのNVIDIA GPUより生成が遅いことを想定してください。統制されたベンチマークはないため、速度の比率は示しません。より実務的な問題はソフトウェアサポートです。これらのモデルが依存するCUDA固有の最適化（flash-attention、GGUF/FP8量子化ツール群）はMac上では成熟度が低く、多くのコミュニティ製ワークフローやインストールガイドはWindowsまたはNVIDIAカード搭載のLinuxを前提としているため、調整が必要になったり、ドキュメント通りには動かなかったりする場合があります。一つ利点があるとすれば、Apple Siliconのユニファイドメモリにより、同等のVRAMを持つディスクリートGPUよりも大きなモデルをメモリに収められる場合があることです。速度は遅くなりますが。ローカル動画生成専用にハードウェアを購入するなら、WindowsまたはLinux＋NVIDIAがサポートの充実した選択肢です。すでに持っているMacで試すのは問題ありませんが、本格的なスループットを求めるなら推奨される選択肢ではありません。',
          },
          {
            q: '複数のローカル動画クリップにわたって、同じキャラクターの一貫性を保てますか？',
            a: 'はい、ただし追加の作業が必要です。3モデルのいずれも、別々の生成間でこれを標準機能として保証していません。実用的な方法は2つあります。同じ参照画像をimage-to-videoモード（3モデルともI2Vをサポート）に入力する方法、またはキャラクター用に小さなLoRAを学習させる方法です。Wan 2.2とLTX-2の両方に、これ用の文書化されたLoRAワークフローがあります。LTX-2版はIC-LoRA（in-context LoRA）と呼ばれ、複数キャラクターの一貫性を明示的にサポートしています。キャラクター用LoRAの学習は手間のかかる方法で、プロンプトや参照画像1枚より一貫した結果を狙うものです。差の大きさは検証していません。InvideoのブランドキットとAIアバター機能は、同じ根本的な課題を別の方法で解決します。一度設定すれば繰り返し使える固定のアバターと音声プロファイルで、学習は不要です。',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: '決める前に試す',
        content:
          'ローカルGPUのセットアップや有料サブスクリプションにコミットしなくても、クラウドワークフローを評価することはできます。ハードウェアを購入したり、週末をComfyUIに費やしたりする前に、まず逆方向に5分使ってみる価値があります。\n\n1. Invideoの無料版を試す。\n2. 短い動画を1本作成する。\n3. 出力品質と、ワークフローの使い心地を評価する。\n4. その体験を、ローカルインストールにかかるセットアップの手間と比較する。\n\nこうすることで、比較は単に読むものから、この記事の残りを読み終えるより短い時間で自分自身で試せるものへと変わります。',
        blockquote:
          '[Invideoの無料版を試す →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'VRAM 12GB以上のGPUを持っている（あるいはこれから購入する予定がある）、自分のツールを組み立てるのが好き、そしてプライバシーとクリップごとの料金がかからない生成を利便性より重視するなら、ローカルを選んでください。Wan 2.2は堅実な土台です。高品質、Apache 2.0。速度と音声を重視するならLTX-2が専門です。\n\nハードウェアがない、セットアップをしたくない、あるいは生のクリップではなく完成した動画が必要なら、クラウドを選んでください。単にAI生成の動画を作りたいだけのほとんどの人にとって、クラウドの方が入り口として簡単です。ローカル生成に必要なハードウェアと技術的な関心がまだないなら、invideoのようなホスト型サービスを使えば、ローカル環境の構築は不要です。試用には無料プランがあり、有料プランとその上限はinvideoの料金ページに掲載されています。自分のワークフローに合うかどうかを知る一番簡単な方法は、無料版を試してみることです。\n\nどちらの入り口も、AI動画へとつながっています。問われるべきなのは、どちらの技術が優れているかではなく、どちらのワークフローが自分のマシン、忍耐力、目的に合っているかです。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Wan 2.2 on GitHub](https://github.com/Wan-Video/Wan2.2) — 公式リポジトリ、ライセンス、セットアップ手順。',
          '[Wan 2.2 on Hugging Face](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B) — 公式モデルカードとダウンロード。',
          '[LTX model license](https://ltx.io/model/license) — 公式のLTXコミュニティライセンス条項。',
          '[LTX-2 model page](https://ltx.io/model/ltx-2-3) — 公式のアーキテクチャとリリース詳細。',
          '[HunyuanVideo 1.5 on GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) — 公式リポジトリとLICENSEファイル。EU/英国/韓国の除外を含む。',
          '[Engadget: ByteDance has reportedly suspended the global rollout of its new AI video generator](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) — 2026年3月の報道（英語）。',
          '[Alibaba Cloud Community：Wan2.7-Videoの発表](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) — 2026年4月（英語）。',
          '[invideoのプラン上限](https://invideo.io/help/billing/plan-limits/) — プランとクレジットの公式な上限。',
          '[Invideo pricing](https://invideo.io/pricing/) — 公式プランと料金の詳細。',
          '[Invideo MCP server](https://invideo.io/ai/mcp) — 公式の自動化ドキュメント。',
          '[MiniMax H3 on GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — 公式リポジトリ。',
          '[MiniMax H3 on Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 公式モデルウェイト。',
          '[Invideo: How Long Does It Take to Make an AI Short Film?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — invideo自身によるエンドツーエンドの制作時間データ（2〜5日）。',
          '[ComfyUI system requirements](https://docs.comfy.org/installation/system_requirements) — 公式のMac/Apple Silicon MPSサポートドキュメント。',
          '[LTX Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — 公式のキャラクター一貫性（IC-LoRA）ガイド。',
          '[InsiderLLM: NVIDIA GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — 中古GPU価格の出典（米国eBayの出品データ）。',
          '[Runway](https://runwayml.com/) — 公式サイト。上記で引用した公開説明の根拠（PromptQuorumは未テスト）。',
          '[Luma AI](https://lumalabs.ai/) — 公式サイト。上記で引用した公開説明の根拠（PromptQuorumは未テスト）。',
          '[Pika](https://pika.art/) — 公式サイト。上記で引用した公開説明の根拠（PromptQuorumは未テスト）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[AnimateDiffでStable Diffusionを動画化：2026年ガイド](/ja/power-local-llm/animatediff-video-generation-guide) — 既存のSD1.5/SDXLチェックポイントやLoRAをアニメーション化する単体ツールの詳細ガイド。ここで比較しているネイティブ動画モデルとは異なるアプローチ。',
          '[Local AI Image Generation vs. Cloud](/ja/power-local-llm/local-ai-image-generation-vs-cloud) — 動画ではなく画像を対象にした、同じ構成の姉妹記事。',
          '[VRAM Calculator for Local Models](/ja/local-llms/vram-calculator-local-llm) — モデルと量子化ごとの正確なVRAM要件。',
          '[How Much VRAM Do You Need?](/ja/local-llms/how-much-vram-local-llm) — 7Bから70Bまでのモデルサイズ別の一覧表。',
          '[Best GPUs for Local AI in 2026](/ja/local-llms/best-gpus-for-local-llms) — 予算クラス別のハードウェア選び。',
          '[Best Budget GPUs for Local AI](/ja/local-llms/best-budget-gpus-local-llm) — エントリー向けハードウェアの選択肢。',
          '[GPU vs CPU vs Apple Silicon](/ja/local-llms/gpu-vs-cpu-vs-apple-silicon) — ローカル推論のプラットフォーム比較。',
          '[System Prompts vs. User Prompts](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — 動画プロンプティングにも応用できるプロンプト構造の基本。',
          '[Prompt Engineering for Local Models](/ja/local-llms/prompt-engineering-for-local-models) — 構造化されたプロンプティングの手法。',
          '[OpenShortsレビュー](/ja/power-local-llm/openshorts-review)と[pyVideoTransレビュー](/ja/power-local-llm/pyvideotrans-review) — 動画生成ではなく手元の動画を扱う2つのツール。一方は長い動画を字幕付きの縦型クリップに切り出し、もう一方は動画を翻訳して吹き替えます。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-02-21',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-ko.webp',
    title: 'Invideo vs 로컬 AI 비디오: 한쪽은 GPU와 주말 시간, 다른 한쪽은 클라우드 구독',
    seoTitle: '클라우드 vs 로컬 AI 비디오 2026: invideo vs Wan 2.2 & LTX-2',
    intro:
      '2026년 AI 비디오로 들어가는 문은 두 개입니다. 첫 번째 문은 로컬입니다. 무료이며 개방형인 비디오 모델을 자신의 GPU에서 실행합니다 — 생성 횟수 제한 없음, 추론은 자신의 하드웨어에서 실행됨(모델 다운로드와 업데이트 확인에는 여전히 네트워크를 사용합니다), 구독료 없음, 하지만 전체 워크플로우를 직접 구축해야 합니다. 두 번째 문은 클라우드입니다. Invideo는 스크립트나 아이디어에서 편집된 비디오까지 AI 에이전트가 돕는 흐름을 내세우는 호스티드 서비스이며, 브라우저에서 바로 사용합니다. 어느 쪽 문도 "더 낫다"고 할 수 없습니다. 이 가이드는 대부분의 비교 글이 건너뛰는 라이선스 세부 조항, 실제 하드웨어 요구사항, 그리고 여러분의 상황을 추천으로 연결해주는 의사결정 도구를 제공합니다.',
    metaDescription:
      '로컬 AI 비디오 모델(Wan 2.2, LTX-2, HunyuanVideo)은 GPU가 지원하면 무료로 내려받을 수 있습니다. invideo 클라우드 서비스와 비교합니다.',
    twitterDescription:
      '2026년 클라우드 vs 로컬 AI 비디오: invideo는 구독형 호스티드 서비스입니다. Wan 2.2, LTX-2, HunyuanVideo는 GPU가 충분하다면 무료로 내려받을 수 있습니다.',
    audience:
      '자신의 GPU에서 무료로 로컬 비디오를 생성할지, invideo의 올인원 클라우드 파이프라인을 사용할지 결정하려는 창작자와 개발자를 위한 글입니다 — 하드웨어 요구사항, 라이선스 세부 조항, 워크플로우 절충점을 다룹니다.',
    readTime: '10분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 AI 비디오 생성',
    targetKeywords: [
      '클라우드 vs 로컬 ai 비디오',
      'invideo vs 로컬 ai 비디오',
      'wan 2.2 vs ltx-2 비교',
      '2026 최고 오픈소스 비디오 모델',
      'hunyuanvideo 로컬 실행',
      'ai 비디오 생성 로컬 실행 방법',
      'wan 2.2 vram 요구사항',
      'ltx-2 라이선스',
      '로컬 비디오 생성 gpu',
    ],
    current_models_mentioned: [
      'Wan 2.2 (T2V-A14B, I2V-A14B, TI2V-5B)',
      'LTX-2.5 / LTX-2.3',
      'HunyuanVideo 1.5',
      'MiniMax H3',
      'Kling 3.0',
      'Veo 3.1',
      'Seedance 2.5',
    ],
    current_hardware_mentioned: ['6 GB VRAM', '8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'RTX 3060', 'RTX 3090', 'RTX 4090'],
    leadAnswerBlock:
      '**12GB 이상의 GPU를 보유한 대부분의 사용자에게는 Wan 2.2가 2026년 유력한 로컬 AI 비디오 모델입니다** — Apache 2.0 라이선스로 매출 상한이나 지역 제한이 전혀 없으며, 무료로 내려받을 수 있습니다(하드웨어와 전기 비용은 별도입니다). **해당 GPU가 없거나, 원시 클립이 아닌 완성된 내레이션 비디오를 원한다면 invideo가 더 나은 선택입니다** — 브라우저 기반 호스티드 서비스이며, 유료 플랜(Starter, Plus, Max)에 따라 이용할 수 있는 모델이 다릅니다. 최신 요금 페이지를 확인하십시오. **HunyuanVideo 1.5는 영화적인 화질로 커뮤니티에서 인기가 있지만 라이선스가 EU, 영국, 대한민국을 완전히 제외합니다** — 이들 지역에 거주한다면 이 모델은 건너뛰어야 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'AI 비디오를 로컬에서 생성해야 할까요, invideo의 클라우드 파이프라인을 사용해야 할까요?',
        answer:
          '12GB 이상의 GPU가 있고, 클립당 요금 없는 생성과 프라이버시를 중시한다면 로컬에서 생성하십시오 — Wan 2.2(Apache 2.0, 상업적 사용 허용 — 모델 카드 확인)가 무난한 출발점입니다. 적합한 하드웨어가 없거나 직접 설정을 관리하고 싶지 않거나 원시 클립이 아닌 완성된 비디오(스크립트, 음성, 음악, 자막)가 필요하다면 invideo를 사용하십시오 — 무료 플랜이 있는 구독형 호스티드 서비스이며, 현재 요금은 요금 페이지에서 확인하십시오.',
        bullets: [
          'VRAM 12GB 미만 → invideo가 현실적인 선택입니다. 이 등급 이하에서는 로컬 선택지가 양자화된 입문 수준의 결과물로 제한됩니다.',
          'VRAM 12GB → LTX-Video 0.9.5가 이 등급에서 실용적인 로컬 옵션입니다.',
          'VRAM 16~24GB 이상 → Wan 2.2(우수한 품질, Apache 2.0 — 매출 기준이나 지역 제외 없는 상업적 사용 허용, 귀속 표시 등 Apache 표준 조건 적용, 모델 카드 확인) 또는 LTX-2(속도 + 동기화된 오디오).',
          'EU, 영국, 대한민국 거주 → HunyuanVideo 1.5의 라이선스가 여러분을 제외합니다. 대신 Wan 2.2나 LTX-2를 사용하십시오.',
          '원시 클립이 아닌 완성된 내레이션 비디오가 필요한 경우 → 로컬 모델은 5~20초 길이의 무음(LTX 제외) 클립만 생성합니다. Invideo는 클립 주변 작업을 위한 호스티드 워크플로우를 제공합니다. 플랜별 구성은 요금 페이지에서 확인하십시오.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '2026년이 AI 비디오에 있어 이례적인 시기인 이유', anchor: '#market-context' },
      { label: '로컬 문: 자신의 GPU에서 실행하는 무료 모델 3종', anchor: '#local-models' },
      { label: 'Wan 2.2 (Alibaba)', anchor: '#wan-2-2' },
      { label: 'LTX-2 (Lightricks)', anchor: '#ltx-2' },
      { label: 'HunyuanVideo 1.5 (Tencent)', anchor: '#hunyuanvideo' },
      { label: '주목할 모델: MiniMax H3', anchor: '#one-to-watch' },
      { label: '하드웨어 관문', anchor: '#hardware-gate' },
      { label: 'DIY의 현실: "무료"가 요구하는 것', anchor: '#diy-reality' },
      { label: '클라우드 문: invideo가 제공하는 것', anchor: '#invideo-bundle' },
      { label: '클라우드냐 로컬이냐: 어느 문이 나에게 맞을까?', anchor: '#decision-guide' },
      { label: '누가 invideo를 선택해야 할까?', anchor: '#who-should-choose' },
      { label: '실제로 보기', anchor: '#video-roundup' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '결정 전에 먼저 시도해보기', anchor: '#try-before-you-decide' },
      { label: '결론', anchor: '#verdict' },
      { label: '출처', anchor: '#sources' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Wan 2.2는 관대한 Apache 2.0 라이선스로 제공되는 우수한 로컬 비디오 모델입니다.** 매출 기준이나 지역 제외 없이 상업적 사용이 허용됩니다(귀속 표시 등 Apache의 표준 조건은 적용되므로 모델 카드를 확인하십시오)',
          '**Invideo는 호스티드 방식의 대안입니다.** 무료 플랜과 유료 Starter, Plus, Max 플랜이 있으며, 요금 페이지에 따르면 Plus와 Max는 모든 Seedance 모델을 포함한 전체 모델을 이용할 수 있습니다. 가격은 조건에 따라 다르므로 최신 페이지를 확인하십시오.',
          '**HunyuanVideo 1.5의 라이선스는 EU, 영국, 대한민국을 명시적으로 제외합니다** — 모델 자체와 그 결과물 모두에 적용됩니다. 해당 지역의 독자는 대신 Wan 2.2나 LTX-2를 사용해야 합니다.',
          '**LTX-2는 속도에 중점을 둔 모델로 소개되며, 이 로컬 3종 중 동기화된 오디오를 내장한 유일한 모델입니다.** 연 매출 $10M 미만의 기업에는 상업적으로 무료입니다.',
          '**진지한 로컬 비디오 생성의 현실적인 최저 기준은 VRAM 12GB입니다.** 그 이하에서는 invideo가 더 실용적인 선택이 됩니다.',
          '**로컬 모델은 완성된 비디오가 아니라 5~20초 길이의 원시 클립(LTX-2를 제외하면 무음)을 생성합니다.** 스크립트, 음성, 음악, 자막, 편집은 각각 별도의 도구를 직접 조합해야 합니다 — invideo는 이러한 단계를 하나의 호스티드 워크플로우로 묶는 것을 지향합니다.',
          '**2026년 11월 27일 확인 시점에 Wan 공식 GitHub 페이지에는 "Wan 2.7" 오픈 웨이트 저장소가 없었습니다.** Alibaba는 2026년 4월 [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009)를 Alibaba Cloud에서 이용할 수 있는 모델로 발표했습니다. "Wan 2.7 가중치"를 제공한다는 제3자 페이지는 주의하십시오.',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: '2026년이 AI 비디오에 있어 이례적인 시기인 이유',
        content:
          '독점(proprietary) 비디오 시장은 변동이 컸습니다. 2026년 3월 [Engadget은](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) The Information을 인용해, Disney와 Paramount Skydance의 중지 요청서(cease-and-desist letter) 이후 ByteDance가 Seedance 2.0의 글로벌 출시를 일시 중단했다고 보도했습니다. PromptQuorum은 이 보도를 독자적으로 검증하지 않았으며, 이후 제공 상황은 달라졌습니다. 현재 invideo 요금 페이지에는 Seedance 2.0과 2.5가 올라 있습니다.\n\n이런 변화 때문에 두 문 모두 매력이 있습니다. 이미 내려받은 오픈 모델은 공급사의 변화와 관계없이 계속 실행됩니다. invideo 같은 멀티 모델 서비스는 한 계정에서 여러 모델을 제공하지만, 제공 목록은 바뀔 수 있으므로 워크플로우에 영향이 없다고 보장할 수는 없습니다.',
      },
      localModels: {
        id: 'local-models',
        title: '로컬 문: 자신의 GPU에서 실행하는 무료 모델 3종',
        content:
          '이 가이드는 로컬 비디오 생성에 널리 쓰이는 오픈 웨이트 시스템 세 가지를 비교합니다. 세 모델 모두 자신의 컴퓨터에 설치하는 노드 기반 인터페이스인 ComfyUI를 통해 실행됩니다 — Ollama 같은 채팅형 도구가 아닙니다. 이들은 LLM이 아니라 디퓨전(diffusion) 모델입니다.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2는 2026년 전반적으로 우수한 로컬 비디오 모델입니다 — Apache 2.0, 높은 품질, 지역 제한 없음 — LTX-2는 속도에 중점을 두고 동기화된 오디오를 더하며, HunyuanVideo 1.5는 영화적인 화질로 인기가 있지만 라이선스상 EU/영국/대한민국 사용자를 제외합니다.' },
          { type: 'plain-terms', text: '하나의 답만 원한다면: 12GB 이상의 GPU를 마련하고 Wan 2.2를 실행하십시오. 높은 품질에 관대한 Apache 2.0 라이선스입니다.' },
        ],
        columns: ['모델', '라이선스', 'VRAM', '출력', '특징'],
        rows: [
          { '모델': 'Wan 2.2 (Alibaba)', '라이선스': 'Apache 2.0 — 허용적, 매출 기준·지역 제외 없음', 'VRAM': '6~8GB (5B) / 15~25GB (14B)', '출력': '480p/720p, 약 5초 클립', '특징': '14B와 소형 5B 구성' },
          { '모델': 'LTX-2 (Lightricks)', '라이선스': 'LTX 커뮤니티 라이선스 — 매출 $10M 미만은 무료', 'VRAM': '18~20GB 양자화, 32GB 이상(풀 정밀도)', '출력': '480p~1080p, 5~20초, 오디오 포함', '특징': '오디오+비디오 동기 생성(3종 중 유일)' },
          { '모델': 'HunyuanVideo 1.5 (Tencent)', '라이선스': 'Tencent 커뮤니티 라이선스 — EU/영국/대한민국 제외', 'VRAM': '최소 14GB, 24GB 권장', '출력': '480p/720p, 최대 10초', '특징': '영화적인 조명; 오프로딩 시 최소 14GB' },
        ],
        note:
          '⚠️ 주의: 2026년 11월 27일 확인 시점에 [Wan 공식 GitHub 페이지](https://github.com/Wan-Video)에는 "Wan 2.7" 오픈 웨이트 저장소가 없었습니다. Alibaba는 [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009)를 Alibaba Cloud에서 이용할 수 있다고 발표했습니다. "Wan 2.7 오픈 웨이트"를 제공한다는 페이지는 주의하고, 공식 GitHub 또는 Hugging Face 저장소에서만 다운로드하십시오.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — 높은 품질, Apache 2.0',
        content:
          'Wan 2.2는 오픈 비디오 모델 중 널리 사용되며, 수많은 커뮤니티 파생 모델이 그 위에 구축되었습니다(최신 다운로드 수는 Hugging Face 모델 페이지를 확인하십시오). T2V-A14B와 I2V-A14B(전문가 혼합 구조, 총 27B / 활성 14B 파라미터), 그리고 6~8GB VRAM만으로 텍스트-투-비디오와 이미지-투-비디오를 모두 처리하는 소형 TI2V-5B까지 세 가지 변형으로 출시되었습니다. 14B 등급은 15GB(GGUF Q3)에서 25GB(FP8)까지 필요하며, 공식 비양자화 실행에는 80GB가 요구됩니다. 라이선스는 Apache 2.0으로 진정한 무료이며, 매출 기준이나 지역 제외 없이 상업적 사용이 허용됩니다(귀속 표시 등 Apache의 표준 조건은 적용되므로 모델 카드를 확인하십시오).\n\n**구체적인 속도:** [Wan 2.2 공식 저장소](https://github.com/Wan-Video/Wan2.2)에 따르면, 별도 최적화 없이 경량 TI2V-5B 모델은 일반 소비자용 GPU 한 장으로 5초 길이의 720p 클립을 9분 이내에 생성할 수 있습니다. 이는 개발사의 수치로 PromptQuorum은 검증하지 않았으며, 14B 버전을 설명하지도 않습니다. 저장소에 따르면 TI2V-5B 예시 명령은 VRAM 24GB 이상의 GPU(예: RTX 4090)에서 실행되므로, 6~8GB 카드에서 같은 시간을 기대하지 마십시오. 20초 시퀀스는 5초 클립 4개를 따로 생성해야 하며, 각 클립이 명시된 시간 안에 끝난다면 원시 생성 시간은 36분 미만이고 이를 이어 붙이는 수작업 편집이 추가됩니다. 이는 클립당 수치로 계산한 값이며 실제로 측정한 20초 벤치마크가 아닙니다.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — 속도와 동기화된 사운드',
        content:
          'LTX-2는 이 3종 중 유일하게 동기화된 오디오와 비디오를 한 번에 생성하는 모델입니다 — 발소리, 주변음, 효과음이 영상과 함께 도착합니다. 빠른 모델로도 소개되지만, VRAM 요구량이 가장 낮은 것은 아닙니다(아래 수치 참조). 아키텍처는 22B 디퓨전 트랜스포머이며, 현재의 LTX-2.5 릴리스와 함께 LTX-2.3(2026년 3월)도 계속 지원됩니다. 라이선스는 LTX 커뮤니티 라이선스로, 회사의 연간 총매출이 $10M 미만이면 상업적 사용이 무료이며 그 이상이면 유료 상업 라이선스가 필요합니다. (일부 서드파티 자료는 이를 Apache 2.0으로 잘못 표기하고 있습니다 — [공식 라이선스 페이지](https://ltx.io/model/license)만이 신뢰할 수 있는 출처입니다.) 하드웨어 요구사항은 양자화 시 18~20GB VRAM, 풀 정밀도에서는 32GB 이상입니다. 12GB 카드에서는 이전 버전인 LTX-Video 0.9.5가 현실적인 선택입니다.\n\n**구체적인 속도:** LTX-2는 빠르다고 자주 소개되지만, RTX 4090에서의 클립당 소요 시간을 독립적으로 검증한 수치는 찾지 못했으므로 제시하지 않습니다. 더 새로운 LTX-2.5에 대해 개발사는 소비자용 GPU가 아닌 데이터센터급 NVIDIA GB200 슈퍼칩 2개로 10초 길이의 720p 이미지-투-비디오 클립을 6.8초에 생성했다고 밝혔습니다([VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights)는 이 수치가 업체 발표이며 독립 검증되지 않았다고 설명합니다). 가정용 GPU의 성능을 알려 주는 수치는 아닙니다.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — 영화적인 화질과 법적인 함정',
        content:
          '2025년 11월 출시된 Tencent의 8.3B 모델은 영화적인 조명과 질감 표현으로 커뮤니티의 사랑을 받고 있으며, VRAM 요구량은 비교적 낮은 편입니다: 오프로딩 시 최소 14GB, 24GB에서 쾌적하게 동작합니다. 480p/720p를 기본으로 생성하며, 내장된 초해상도(super-resolution) 기능으로 최대 1080p까지, 클립 길이는 최대 10초까지 지원합니다.\n\n**구체적인 속도:** Tencent의 [저장소](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5)에 따르면, 480p 이미지-투-비디오 스텝 증류 모델을 사용하면 RTX 4090 한 장으로 75초 이내에 영상을 생성할 수 있습니다. 이는 개발사의 수치로 PromptQuorum은 검증하지 않았습니다. 클립 길이는 명시되어 있지 않으므로 더 긴 시퀀스로 환산하지 않습니다.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: '라이선스 경고 — 다운로드하기 전에 반드시 읽으십시오. HunyuanVideo 1.5는 Apache 2.0이 아니라 Tencent Hunyuan 커뮤니티 라이선스를 사용합니다. 이 라이선스는 유럽연합(EU), 영국, 대한민국에는 적용되지 않습니다 — 라이선스 문구에 따르면 해당 지역의 사용자는 이 모델이나 그 결과물을 사용할 권한이 없습니다. 또한 모델 출시일 직전 달에 귀하의 제품 월간 활성 사용자가 1억 명을 넘었다면 Tencent로부터 별도 라이선스를 받아야 하며, 모델이나 그 결과물을 다른 AI 모델(Tencent Hunyuan 및 그 파생 모델 제외)을 개선하는 데 사용하는 것은 금지됩니다. EU, 영국, 대한민국에 거주한다면 이 모델은 건너뛰고 Wan 2.2(Apache 2.0, 지역 제외 없는 상업적 사용 허용)를 검토하십시오.',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: '주목할 모델: MiniMax H3',
        content:
          '2026년 8월 3일 출시된 MiniMax H3는 네이티브 스테레오 오디오, 출시 첫날부터의 ComfyUI 지원, RTX 3060에서도 실행 가능한 양자화 버전을 갖춘 331억 파라미터 규모의 옴니모달 모델입니다. 네 번째 선택지로 다루기 전에 두 가지 유의점이 있습니다. 로컬 릴리스는 768p로 상한이 설정되어 있으며(완전한 2K 파이프라인은 호스티드 버전에서만 제공됩니다), [커뮤니티 라이선스](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE)는 EU, 영국, 대한민국, 미국을 허가 지역에서 제외하며, 연 매출이 $20M를 넘으면 별도 승인을 요구합니다. 사용 전에 라이선스를 직접 확인하십시오(법률 자문이 아닙니다). 초기 반응은 좋지만, 최근 출시되었다는 것과 실무에 바로 투입 가능하다는 것은 별개의 문제입니다.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: '하드웨어 관문',
        content: [
          '로컬 비디오 생성은 강아지가 "공짜"인 것과 같은 의미로 무료입니다. 모델 가중치 자체는 비용이 들지 않지만, GPU가 진짜 입장료입니다. GPU의 VRAM이 12GB 미만이고 업그레이드 계획이 없다면 로컬 생성은 아예 건너뛰십시오 — 이 등급 이하에서는 양자화된 Wan 2.2 TI2V-5B 변형만 입문 수준 품질로 사용할 수 있으며, 이 경우에는 클라우드 플랫폼이 더 쉬운 경로일 가능성이 높습니다.',
          '이 내용이 자신의 컴퓨터에 어떻게 적용되는지 잘 모르시겠습니까? 다음 가이드가 자세히 설명합니다: 모델별 정확한 요구사항은 [VRAM 계산기](/ko/local-llms/vram-calculator-local-llm), 모델 크기별 도표는 [필요한 VRAM은 얼마인가?](/ko/local-llms/how-much-vram-local-llm), 하드웨어 선택은 [로컬 AI를 위한 최고의 GPU](/ko/local-llms/best-gpus-for-local-llms)와 [최고의 예산형 GPU](/ko/local-llms/best-budget-gpus-local-llm), 플랫폼 비교는 [GPU vs CPU vs Apple Silicon](/ko/local-llms/gpu-vs-cpu-vs-apple-silicon)을 참고하십시오. 한 가지 솔직한 유의점: 이 가이드들은 LLM용 VRAM 공식(파라미터 수 × 비트 ÷ 8)을 사용합니다. 비디오 디퓨전 모델은 해상도와 클립 길이에 따라서도 VRAM 사용량이 달라지므로, 이 수치들은 비디오 작업에서는 상한이 아니라 최저 기준으로 받아들이십시오.',
        ],
        columns: ['보유 GPU', '실행 가능한 것'],
        rows: [
          { '보유 GPU': 'VRAM 6~8GB', '실행 가능한 것': 'Wan 2.2 TI2V-5B(양자화) — 사용 가능, 입문 수준 품질' },
          { '보유 GPU': 'VRAM 12GB', '실행 가능한 것': 'LTX-Video 0.9.5 — 이 등급에서 실용적인 옵션' },
          { '보유 GPU': 'VRAM 16GB', '실행 가능한 것': 'HunyuanVideo 1.5(라이선스 허용 시), Wan 2.2 14B(GGUF Q3)' },
          { '보유 GPU': 'VRAM 24GB 이상', '실행 가능한 것': '3종 모두: Wan 2.2 14B(양자화), LTX-2 양자화, HunyuanVideo 1.5(라이선스 허용 시)' },
        ],
        note:
          'GPU 대략적인 비용([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) 기준, eBay 미국 목록 데이터이며 견적이나 제안이 아닙니다): 중고 RTX 3090 낙찰 기록은 약 $1,500~1,725입니다(중앙값 $1,650, 낙찰 225건, 2026년 11월 13~23일, 2026-11-23 기준). 중고 RTX 4090 낙찰 기록은 2026-10-15 기준 수치로 $2,575~3,010(중앙값 $2,860)이었습니다. 한국에서는 가격이 다를 수 있습니다. GPU 가격은 변동하므로, 몇 달이 지난 이 수치를 그대로 믿기보다 구매 전 현재 시세를 확인하십시오.',
      },
      diyReality: {
        id: 'diy-reality',
        title: '로컬 비디오 생성을 실제로 실행한다는 것의 의미',
        content:
          '로컬 모델을 사용한다는 것은 비디오 도구 하나를 설치하는 것이 아니라 파이프라인 전체를 조립한다는 뜻입니다.\n\n**생성 환경 설정.** ComfyUI는 노드 기반 도구입니다. 로더, 샘플러, 디코더로 이루어진 워크플로우 그래프를 직접 구축하거나, 가져와서 디버깅해야 합니다. 첫 프레임이 렌더링되기 전까지 CUDA 버전 불일치, PyTorch 버전 고정, 이따금 발생하는 `flash_attn` 설치 오류를 각오해야 합니다.\n\n**프롬프트 작성.** 비디오 모델은 한 줄짜리 프롬프트가 아니라 구조화된 프롬프트가 필요합니다 — 샷 종류, 카메라 움직임, 조명, 피사체의 동작 등입니다. 일반적인 ComfyUI 워크플로우에는 시스템 프롬프트 레이어가 없습니다. [Wan 2.2](https://github.com/Wan-Video/Wan2.2)와 [HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) 저장소는 프롬프트 확장 또는 재작성 기능을 제공하지만, 직접 설정해야 하는 별도의 언어 모델이나 API가 필요합니다. [시스템 프롬프트와 사용자 프롬프트의 차이](/ko/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)와 [로컬 모델을 위한 프롬프트 엔지니어링](/ko/local-llms/prompt-engineering-for-local-models) 가이드는 비디오 프롬프트 작성에도 그대로 적용되는 기본 원칙을 다룹니다.\n\n**클립 주변의 모든 것.** 로컬 모델은 5~20초 길이의 원시 무음(LTX 제외) 클립을 출력합니다. 스크립트, 음성, 음악, 스톡 영상, 자막, 편집은 각각 선택하고 설치하고 서로 연결해야 하는 별도의 도구입니다.',
        promptExamples: [
          { label: '약한 프롬프트 (한 줄짜리)', text: '해변의 개' },
          { label: '구조화된 프롬프트 (비디오 모델이 필요로 하는 형태)', text: '황금빛 시간대에 젖은 해안선을 질주하는 골든 리트리버, 낮은 위치에서 측면으로 따라가는 트래킹 샷, 얕은 피사계 심도, 따뜻한 역광, 부드러운 슬로우 모션, 시네마틱 24fps' },
        ],
        note:
          '피사체와 동작, 카메라의 움직임, 조명, 스타일 — 한 문장 안에 담긴 이 네 가지 요소가 슬롯머신과 카메라의 차이를 만듭니다. 이런 DIY 조합이 흥미롭게 느껴진다면 로컬 문이 여러분의 것입니다. 지치는 이야기로 들렸다면 계속 읽어보십시오.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: '클라우드 문: invideo가 제공하는 것',
        highlight: true,
        itemHeadings: true,
        content:
          'Invideo는 클라우드 문의 한 예시일 뿐, 유일한 선택지는 아닙니다. "클라우드"가 하나의 방식만을 의미한다고 단정하기 전에, 다른 서비스들과 어떻게 다른지 알아둘 가치가 있습니다. 공개된 설명에 따르면(PromptQuorum은 이 세 서비스를 테스트하지 않았습니다) Runway는 완성된 조립 비디오보다는 AI와 편집기를 결합한 하이브리드 워크플로우를 지향하며 전문 편집 도구(Premiere Pro, Final Cut, DaVinci Resolve)에 직접 통합됩니다. 같은 설명에 따르면 Luma AI의 Dream Machine은 VFX 합성 파이프라인(After Effects, Nuke)을 위한 네이티브 16비트 HDR 출력을 전문으로 합니다 — 완전히 다른 대상 사용자층입니다. 같은 설명에 따르면 Pika는 빠른 원시 클립 생성에 중점을 둡니다. 스크립트, 음성, 스톡 영상 조립 기능을 제공하는지는 PromptQuorum이 확인하지 않았으므로, 클립 주변 작업에 사용하기 전에 확인하십시오. invideo 자체 설명에 따르면 이 서비스는 스토리보드, 스크립트 작성, 타임라인 편집을 Kling, Veo, Seedance 같은 생성 모델 이용과 결합합니다.\n\nInvideo는 단일 비디오 모델이 아니라 호스티드 서비스입니다. 2026년 11월 27일 확인 시점에 [공식 홈페이지](https://invideo.io/)는 스크립트나 아이디어 기반 스토리보드, 스크립트 작성, 멀티트랙 타임라인을 갖춘 에이전트형 비디오 편집기를 소개했으며, 사이트에는 AI 음성·음악 도구도 올라 있습니다. PromptQuorum은 이 서비스를 테스트하지 않았으므로 음성과 자막이 필요한 방식으로 작동하는지 확인하십시오. 브라우저에서 실행되므로 여러분의 GPU는 무관합니다.\n\nGPU와 양자화 방식을 조사하기보다 오늘 당장 비디오 제작을 시작하고 싶은 사람에게는 invideo가 현실적인 선택입니다. 로컬 하드웨어 요구사항이 없고, ComfyUI 설치나 CUDA 문제 해결이 필요 없으며, 클립 주변 단계를 위한 호스티드 작업 공간을 제공합니다. 기반 생성 모델을 직접 제어하는 것보다 완성된 비디오 자체를 더 중시하는 창작자에게 특히 적합합니다 — 무료 플랜이 있으므로 비용을 들이기 전에 이것이 맞는지 확인할 수 있습니다.\n\n이 비교에서 눈에 띄는 세 가지가 있습니다:\n\n- **한 계정, 여러 모델.** invideo 요금 페이지에 따르면 Plus와 Max는 모든 Seedance 모델을 포함한 전체 모델을 이용할 수 있고, Starter는 일부 모델만 포함하며 Seedance 2.5는 제외됩니다. 제공 목록은 바뀔 수 있습니다.\n- **에이전트 연동이 내장되어 있습니다.** invideo는 AI 에이전트가 타임라인 편집기에서 작업할 수 있는 [MCP 서버](https://invideo.io/ai/mcp)를 제공합니다.\n- **무료 플랜이 있습니다.** invideo의 [플랜 한도 페이지](https://invideo.io/help/billing/plan-limits/)에는 주간 한도가 설명되어 있습니다. 사용하기 전에 내보내기와 워터마크 규정을 확인하십시오.\n\n**구체적인 속도 — 그리고 솔직한 함정:** invideo에 따르면 원시 생성은 빠릅니다. 하지만 invideo 자체 FAQ에 따르면 단편 영상의 완전한 엔드투엔드 제작에는 몇 분이 아니라 2~5일이 걸립니다 — 생성 자체가 아니라 여러 생성 결과 중에서 선택하고 조립하는 과정이 시간이 걸리는 지점이기 때문입니다. [invideo FAQ](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/)는 소재를 일찍 확정한 1~3분 영상의 최저 기준을 2일로 설명합니다. 이 수치는 완성된 영상 기준이고, 위의 로컬 수치는 편집하지 않은 TI2V-5B 원시 클립만 해당하므로 직접 비교할 수 없습니다. 호스팅 서비스는 로컬 설정을 없애 주지만 제작에는 여전히 시간이 듭니다.\n\ninvideo가 안내하는 플랜(가격은 [invideo 요금제 페이지](https://invideo.io/pricing/) 참조):',
        blockquote:
          '**로컬 설정 없이 AI 비디오를 만들고 싶으신가요?** 강력한 GPU가 없거나, 로컬 AI 비디오 도구를 설치하고 설정하는 데 시간을 쓰고 싶지 않다면 invideo를 시도해볼 만합니다. [Invideo 무료 버전 사용해보기 →](https://invideo.io/pricing/)',
        columns: ['플랜', '좌석당 월간 크레딧', '이용 가능 모델'],
        rows: [
          { '플랜': 'Free', '좌석당 월간 크레딧': '주간 한도', '이용 가능 모델': '요금 페이지 확인' },
          { '플랜': 'Starter', '좌석당 월간 크레딧': '400', '이용 가능 모델': '일부 모델(Seedance 2.5 제외)' },
          { '플랜': 'Plus', '좌석당 월간 크레딧': '2,000', '이용 가능 모델': '전체 모델(invideo 기준)' },
          { '플랜': 'Max', '좌석당 월간 크레딧': '5,000부터', '이용 가능 모델': '전체 모델(invideo 기준)' },
        ],
        note:
          '플랜 이름, 크레딧, 이용 가능 모델은 2026년 11월 27일에 확인한 invideo의 [요금 페이지](https://invideo.io/pricing/)와 [플랜 한도 페이지](https://invideo.io/help/billing/plan-limits/) 기준입니다. 여기서는 가격을 적지 않습니다. 유럽에서 접속했을 때 기간 한정 할인이 표시되었고, 플랜 구성도 이 가이드가 이전에 안내한 내용과 다르기 때문입니다. 어떤 세부 사항이든 믿기 전에 실시간 페이지를 확인하십시오.',
        affiliateLinks: [
          { url: 'https://invideo.io/pricing/', productName: 'invideo', productCategory: 'video-generation', label: 'invideo 무료 버전 사용해보기 →' },
        ],
      },
      decisionGuide: {
        id: 'decision-guide',
        title: '클라우드냐 로컬이냐: 어느 문이 나에게 맞을까?',
        content: '간단히 정리하면, 흔한 상황별로 다음과 같습니다:',
        columns: ['나의 상황', '추천'],
        rows: [
          { '나의 상황': 'GPU가 없거나 VRAM 12GB 미만', '추천': 'Invideo(클라우드) — 이 등급 이하의 로컬 선택지는 입문 수준입니다' },
          { '나의 상황': '원시 클립이 아니라 음성이 포함된 완성된 비디오를 원함', '추천': 'Invideo(클라우드) — 로컬 모델은 완전한 제작물을 조립해주지 않습니다' },
          { '나의 상황': '마감이 급하고 설정에 시간을 쓸 여유가 전혀 없음', '추천': 'Invideo(클라우드)' },
          { '나의 상황': 'VRAM 12GB 이상 GPU 보유, 설정에 익숙함, 프라이버시와 $0 한계비용을 원함', '추천': '로컬: LTX-Video(12GB) 또는 Wan 2.2(양자화한 14B 모델에는 24GB)' },
          { '나의 상황': 'EU, 영국, 대한민국 거주', '추천': '로컬 = Wan 2.2 또는 LTX-2만 가능(HunyuanVideo는 라이선스상 제외됨)' },
          { '나의 상황': '직접 구축하지 않고 규모 있는 자동화/API가 필요함', '추천': 'Invideo(클라우드, MCP 서버)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: '누가 invideo를 선택해야 할까?',
        content:
          '**다음에 해당한다면 invideo가 더 나은 선택일 가능성이 높습니다:**\n\n- 강력한 GPU를 보유하고 있지 않음\n- 즉시 비디오 제작을 시작하고 싶음\n- ComfyUI, CUDA, 모델, Python 환경을 설치하고 설정하고 싶지 않음\n- 여러 로컬 도구를 조합하기보다 통합된 워크플로우를 원함\n- 스크립트, 음성, 음악, 자막, 비디오 생성을 하나의 워크플로우에서 처리하고 싶음\n- 기반 모델을 실험하는 것보다 완성된 비디오 자체를 더 중시함\n\n**다음에 해당한다면 로컬 AI가 더 나은 선택일 가능성이 높습니다:**\n\n- 이미 적합한 GPU 하드웨어를 보유하고 있음\n- 최대한의 통제권을 원함\n- 모델과 워크플로우를 실험하고 싶음\n- 강한 기술적 역량이 있음\n- 생성 과정을 로컬에서 통제된 상태로 유지하는 것을 우선시함\n- 매우 많은 양을 생성할 예정이며 한계 생성 비용을 최적화하고 싶음',
        blockquote:
          '**어느 쪽이 맞는지 확실하지 않으신가요?** 하드웨어와 기술적 설정을 피하고 싶다면 가장 쉬운 실험은 invideo를 직접 사용해보고 그 워크플로우가 자신에게 맞는지 확인하는 것입니다. [Invideo 무료로 사용해보기 →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: '실제로 보기',
        items: [
          '[4가지 오픈소스 AI 비디오 모델 비교 — 정말 무료인 것은 어느 것인가?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — LTX 2.3, Wan 2.2, HunyuanVideo 1.5, MiniMax H3의 결과물을 나란히 비교하며 라이선스 세부 조항까지 다룹니다.',
          '[Invideo Agent One 리뷰](https://www.youtube.com/watch?v=uUHO9byu0c0) — 프롬프트에서 완성된 비디오까지의 전체 워크플로우를 다룹니다.',
          '[Wan 2.2 전체 로컬 데모](https://www.youtube.com/watch?v=fs62ML_ZgEs) — 소비자용 하드웨어에서의 솔직한 렌더링 시간을 다룹니다(출시 주간, 2025년 7월).',
          '[저VRAM Wan 2.2 튜토리얼](https://www.youtube.com/watch?v=tQu0DjtOEyg) — 6GB 노트북에서 14B 모델을 실행하는 방법을 다룹니다(2025년).',
        ],
        note:
          '이 영상들은 서드파티 콘텐츠이며 PromptQuorum이나 invideo가 제작한 것이 아닙니다. 참고용으로만 포함되었으며, 해당 채널이나 다른 콘텐츠에 대한 보증을 의미하지 않습니다.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'VRAM 8GB로 AI 비디오 생성을 실행할 수 있나요?',
            a: '간신히 가능합니다. Wan 2.2의 TI2V-5B 변형은 6~8GB 양자화 환경에서 실행되지만 품질과 클립 길이가 제한됩니다. 진지한 모델을 사용하려면 12GB가 실질적인 최저 기준입니다 — 그 이하라면 invideo 같은 클라우드 도구가 현실적인 답입니다.',
          },
          {
            q: 'Wan 2.2는 정말 상업적으로 무료인가요?',
            a: '그렇습니다. Apache 2.0 라이선스로 매출 기준이나 지역 제외 없이 상업적 사용이 허용되며(귀속 표시 등 Apache의 표준 조건은 적용되므로 모델 카드를 확인하십시오), 결과물에 대한 권리도 주장하지 않습니다. 최상위급 로컬 모델 중 라이선스가 관대한 편에 속합니다.',
          },
          {
            q: 'HunyuanVideo를 EU나 영국에서 사용할 수 있나요?',
            a: '라이선스 문언상으로는 아닙니다. Tencent Hunyuan 커뮤니티 라이선스는 EU, 영국, 대한민국에는 적용되지 않는다고 명시하며, 라이선스 본문에 따르면 이는 모델 자체와 그 결과물 모두에 해당됩니다. 라이선스를 직접 확인하시고(법률 자문이 아닙니다) 대신 Wan 2.2나 LTX-2 사용을 고려하십시오.',
          },
          {
            q: 'Invideo를 사용하려면 GPU가 필요한가요?',
            a: '아니요. Invideo는 완전히 브라우저에서 실행되며 모든 생성 작업은 자체 인프라에서 이루어집니다. 일반적인 노트북으로도 사용할 수 있을 것입니다.',
          },
          {
            q: '로컬 모델로 음성이 포함된 완성된 유튜브 비디오를 만들 수 있나요?',
            a: '단독으로는 불가능합니다. 로컬 모델은 5~20초 길이의 원시 클립을 생성합니다(LTX-2는 동기화된 오디오를 포함하고, 나머지는 무음입니다). 스크립트, 음성, 음악, 자막, 편집은 각각 별도의 도구가 필요하며 직접 파이프라인으로 조립해야 합니다.',
          },
          {
            q: '"무료" 로컬 AI 비디오의 진짜 함정은 무엇인가요?',
            a: '하드웨어 비용(성능 좋은 GPU), 설정 시간(ComfyUI와 그 의존성), 그리고 원시 출력 클립 주변에 필요한 DIY 파이프라인입니다. 모델 가중치에는 생성당 요금이 없지만, 하드웨어와 전기 비용은 듭니다.',
          },
          {
            q: 'Wan 2.7이나 더 새로운 Wan 모델이 있나요?',
            a: '2026년 11월 27일 확인 시점에 Wan 공식 GitHub 페이지에는 더 새로운 오픈 웨이트 저장소가 없었습니다. Alibaba는 2026년 4월 [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009)를 Alibaba Cloud에서 이용할 수 있다고 발표했습니다. "Wan 2.7 가중치"를 제공한다는 다른 사이트는 주의하고, 공식 GitHub나 Hugging Face 저장소에서만 다운로드하십시오.',
          },
          {
            q: '완전 초보자입니다. 어디서 시작해야 할까요?',
            a: 'Invideo의 무료 플랜으로는 하드웨어를 사지 않고 클라우드 워크플로우를 시험해 보고 AI 비디오가 자신의 목표에 맞는지 판단할 수 있습니다. 이 플랜에는 한도가 있습니다. 이후에 성능 좋은 GPU를 구매해 완전한 통제권과 프라이버시를 원한다면 로컬 문은 언제든 열려 있습니다.',
          },
          {
            q: 'Mac과 Windows에서 이 로컬 모델을 실행하는 것은 무엇이 다른가요?',
            a: 'ComfyUI는 PyTorch의 MPS 백엔드를 통해 Apple Silicon(M1~M4)에서도 실행됩니다. 비슷한 급의 NVIDIA GPU보다 생성이 느리다고 예상하십시오. 통제된 벤치마크가 없으므로 속도 배율은 제시하지 않습니다. 더 실질적인 문제는 소프트웨어 지원입니다. 이 모델들이 의존하는 CUDA 전용 최적화(flash-attention, GGUF/FP8 양자화 도구)는 Mac에서는 성숙도가 훨씬 떨어지므로, 여러 커뮤니티 워크플로우와 설치 가이드가 Windows나 Linux + NVIDIA 카드를 전제로 하고 있어 조정이 필요하거나 문서대로 아예 동작하지 않을 수 있습니다. 한 가지 장점은, Apple Silicon의 통합 메모리 덕분에 동일한 VRAM 용량의 개별 GPU보다 더 큰 모델을 메모리에 담을 수 있다는 점입니다. 속도는 더 느리더라도 말입니다. 로컬 비디오 생성을 위해 하드웨어를 구입하는 것이라면 Windows나 Linux에 NVIDIA를 조합하는 것이 잘 지원되는 경로이며, 이미 보유한 Mac은 실험용으로는 괜찮지만 진지한 처리량을 위한 권장 대상은 아닙니다.',
          },
          {
            q: '여러 로컬 비디오 클립에 걸쳐 같은 캐릭터를 일관되게 유지할 수 있나요?',
            a: '가능하지만 추가 작업이 필요합니다 — 세 모델 모두 별도의 생성 간에 이를 기본적으로 보장하지 않습니다. 실제로 통하는 두 가지 방법이 있습니다. 동일한 참조 이미지를 이미지-투-비디오 모드에 입력하거나(세 모델 모두 I2V를 지원합니다), 캐릭터에 대해 소형 LoRA를 학습시키는 것입니다. Wan 2.2와 LTX-2 모두 이를 위한 문서화된 LoRA 워크플로우를 제공합니다 — LTX-2의 버전은 IC-LoRA(인컨텍스트 LoRA)라고 불리며 다중 캐릭터 일관성을 명시적으로 지원합니다. 캐릭터로 LoRA를 학습시키는 것은 손이 더 가는 방법으로, 프롬프트나 참조 이미지 한 장보다 일관된 결과를 목표로 합니다. 차이가 얼마나 큰지는 테스트하지 않았습니다. Invideo의 브랜드 키트와 AI 아바타 기능은 동일한 근본 문제를 다르게 해결합니다 — 한 번 설정하고 재사용하는 고정된 아바타와 음성 프로필로, 별도의 학습이 필요 없습니다.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: '결정 전에 먼저 시도해보기',
        content:
          '클라우드 워크플로우를 평가하기 위해 로컬 GPU 환경을 구축하거나 유료 구독을 결제할 필요는 없습니다. 하드웨어를 구매하거나 ComfyUI에 주말을 쏟기 전에, 먼저 반대 방향으로 5분을 써보는 것이 좋습니다:\n\n1. Invideo의 무료 버전을 사용해보십시오.\n2. 짧은 비디오 하나를 만들어보십시오.\n3. 결과물 품질과 워크플로우가 어떻게 느껴졌는지 평가하십시오.\n4. 그 경험을 로컬 설치에 드는 노력과 비교해보십시오.\n\n이렇게 하면 이 비교가 단순히 읽는 것에서 그치지 않고, 이 글의 나머지를 읽는 것보다 짧은 시간 안에 직접 테스트해볼 수 있는 것으로 바뀝니다.',
        blockquote:
          '[Invideo 무료 버전 사용해보기 →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          '12GB 이상의 GPU를 이미 보유했거나 구매할 계획이 있고, 직접 도구를 구축하는 것을 즐기며, 편의성보다 프라이버시와 클립당 요금 없는 생성을 더 중시한다면 로컬을 선택하십시오. Wan 2.2가 탄탄한 토대입니다 — 높은 품질, Apache 2.0 — 속도와 사운드에 특화된 LTX-2도 함께 고려하십시오.\n\n하드웨어가 없거나, 설정을 원하지 않거나, 원시 클립이 아닌 완성된 비디오가 필요하다면 클라우드를 선택하십시오. 단순히 AI로 비디오를 만들고 싶은 대부분의 사람에게는 클라우드 경로가 더 쉬운 출발점입니다. 로컬 생성에 필요한 하드웨어와 기술적 관심이 이미 없다면, invideo 같은 호스티드 서비스를 쓰면 로컬 설정이 필요 없습니다. 시험용 무료 플랜이 있으며, 유료 플랜과 한도는 invideo 요금 페이지에 안내되어 있습니다. 자신의 워크플로우에 맞는지 알아보는 가장 간단한 방법은 무료 버전을 먼저 시도해보는 것입니다.\n\n두 문 모두 AI 비디오로 이어집니다. 애초에 질문은 어느 기술이 더 나은가가 아니라, 어느 워크플로우가 여러분의 컴퓨터, 인내심, 목표에 맞는가였습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Wan 2.2 GitHub](https://github.com/Wan-Video/Wan2.2) — 공식 저장소, 라이선스, 설치 안내.',
          '[Wan 2.2 Hugging Face](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B) — 공식 모델 카드 및 다운로드.',
          '[LTX 모델 라이선스](https://ltx.io/model/license) — 공식 LTX 커뮤니티 라이선스 조항.',
          '[LTX-2 모델 페이지](https://ltx.io/model/ltx-2-3) — 공식 아키텍처 및 출시 세부정보.',
          '[HunyuanVideo 1.5 GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) — EU/영국/대한민국 제외 조항을 포함한 공식 저장소 및 LICENSE 파일.',
          '[Engadget: ByteDance has reportedly suspended the global rollout of its new AI video generator](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) — 2026년 3월 언론 보도(영문).',
          '[Alibaba Cloud Community: Wan2.7-Video 발표](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) — 2026년 4월(영문).',
          '[invideo 플랜 한도](https://invideo.io/help/billing/plan-limits/) — 플랜 및 크레딧 공식 한도.',
          '[Invideo 요금제](https://invideo.io/pricing/) — 공식 플랜 및 가격 세부정보.',
          '[Invideo MCP 서버](https://invideo.io/ai/mcp) — 공식 자동화 문서.',
          '[MiniMax H3 GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — 공식 저장소.',
          '[MiniMax H3 Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 공식 모델 가중치.',
          '[Invideo: AI 단편 영화 제작에 걸리는 시간은?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — invideo 자체의 엔드투엔드 제작 시간 수치(2~5일).',
          '[ComfyUI 시스템 요구사항](https://docs.comfy.org/installation/system_requirements) — Mac/Apple Silicon MPS 지원에 관한 공식 문서.',
          '[LTX 블로그: LTX-2에서 IC-LoRA 사용법](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — 공식 캐릭터 일관성(IC-LoRA) 가이드.',
          '[InsiderLLM: NVIDIA GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — 중고 GPU 가격 수치의 출처(미국 eBay 매물 데이터).',
          '[Runway](https://runwayml.com/) — 공식 사이트. 위에서 인용한 공개 설명의 근거(PromptQuorum 미테스트).',
          '[Luma AI](https://lumalabs.ai/) — 공식 사이트. 위에서 인용한 공개 설명의 근거(PromptQuorum 미테스트).',
          '[Pika](https://pika.art/) — 공식 사이트. 위에서 인용한 공개 설명의 근거(PromptQuorum 미테스트).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[AnimateDiff 2026 가이드: Stable Diffusion 모델 애니메이션화](/ko/power-local-llm/animatediff-video-generation-guide) — 기존 SD1.5/SDXL 체크포인트와 LoRA를 애니메이션화하는 단일 도구 심층 가이드로, 여기서 비교한 네이티브 영상 모델과는 다른 접근입니다.',
          '[로컬 AI 이미지 생성 vs. 클라우드](/ko/power-local-llm/local-ai-image-generation-vs-cloud) — 동일한 구조로 비디오 대신 이미지를 다루는 자매 글입니다.',
          '[로컬 모델용 VRAM 계산기](/ko/local-llms/vram-calculator-local-llm) — 모델과 양자화 방식별 정확한 VRAM 요구사항.',
          '[필요한 VRAM은 얼마인가?](/ko/local-llms/how-much-vram-local-llm) — 7B부터 70B까지 모델 크기별 도표.',
          '[2026년 로컬 AI를 위한 최고의 GPU](/ko/local-llms/best-gpus-for-local-llms) — 예산 등급별 하드웨어 선택.',
          '[로컬 AI를 위한 최고의 예산형 GPU](/ko/local-llms/best-budget-gpus-local-llm) — 입문용 하드웨어 옵션.',
          '[GPU vs CPU vs Apple Silicon](/ko/local-llms/gpu-vs-cpu-vs-apple-silicon) — 로컬 추론을 위한 플랫폼 비교.',
          '[시스템 프롬프트 vs. 사용자 프롬프트](/ko/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — 비디오 프롬프트 작성에도 적용되는 프롬프트 구조화 기초.',
          '[로컬 모델을 위한 프롬프트 엔지니어링](/ko/local-llms/prompt-engineering-for-local-models) — 구조화된 프롬프트 작성 기법.',
          '[OpenShorts 리뷰](/ko/power-local-llm/openshorts-review)와 [pyVideoTrans 리뷰](/ko/power-local-llm/pyvideotrans-review) — 영상 생성기가 아니라 이미 가진 영상을 다루는 두 도구로, 하나는 긴 영상을 자막이 들어간 세로 클립으로 자르고 다른 하나는 영상을 번역하고 더빙합니다.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-02-21',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-pt.webp',
    title: 'Invideo vs Vídeo IA Local: Um Custa uma GPU Mais o Seu Fim de Semana — o Outro, uma Assinatura na Nuvem',
    seoTitle: 'IA de Vídeo na Nuvem vs Local 2026: invideo vs Wan 2.2 e LTX-2',
    intro:
      'Existem duas portas de entrada para o vídeo com IA em 2026. A primeira porta é local: modelos de vídeo abertos e gratuitos rodando na sua própria GPU — gerações ilimitadas, com a inferência rodando no seu próprio hardware (downloads de modelos e verificações de atualização ainda usam a rede), sem assinatura, mas você monta todo o fluxo de trabalho sozinho. A segunda porta é a nuvem: o invideo, um serviço hospedado que anuncia um caminho assistido por agentes, do roteiro ou da ideia até o vídeo editado, direto do seu navegador. Nenhuma das portas é "melhor". Este guia traz as letras miúdas de licenciamento que a maioria das comparações ignora, os requisitos reais de hardware e uma ferramenta de decisão que mapeia sua situação para uma recomendação.',
    metaDescription:
      'Modelos de vídeo IA locais (Wan 2.2, LTX-2, HunyuanVideo) podem ser baixados de graça se sua GPU aguentar. Veja a comparação com a nuvem do invideo.',
    twitterDescription:
      'IA de vídeo na nuvem vs local em 2026: o invideo é um serviço hospedado por assinatura. Wan 2.2, LTX-2 e HunyuanVideo podem ser baixados de graça para a sua GPU, se ela for potente o bastante.',
    audience:
      'Criadores e desenvolvedores decidindo entre a geração de vídeo local gratuita na própria GPU e o pipeline tudo-em-um na nuvem do invideo — cobre requisitos de hardware, letras miúdas de licenciamento e trade-offs de fluxo de trabalho.',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'geração de vídeo IA local',
    targetKeywords: [
      'ia de vídeo nuvem vs local',
      'invideo vs ia de vídeo local',
      'wan 2.2 vs ltx-2',
      'melhor modelo de vídeo open source 2026',
      'hunyuanvideo local',
      'como rodar geração de vídeo ia localmente',
      'requisitos de vram wan 2.2',
      'licença ltx-2',
      'gpu para geração de vídeo local',
    ],
    current_models_mentioned: [
      'Wan 2.2 (T2V-A14B, I2V-A14B, TI2V-5B)',
      'LTX-2.5 / LTX-2.3',
      'HunyuanVideo 1.5',
      'MiniMax H3',
      'Kling 3.0',
      'Veo 3.1',
      'Seedance 2.5',
    ],
    current_hardware_mentioned: ['6 GB VRAM', '8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'RTX 3060', 'RTX 3090', 'RTX 4090'],
    leadAnswerBlock:
      '**Para a maioria das pessoas com uma GPU de 12GB+, o Wan 2.2 é um modelo de vídeo IA local sólido em 2026** — licenciado sob Apache 2.0, sem limite de receita ou restrição territorial, e pode ser baixado gratuitamente (hardware e energia continuam custando dinheiro). **O invideo é a escolha melhor se você não tem essa GPU, ou quer um vídeo narrado e finalizado em vez de um clipe bruto** — é um serviço hospedado no navegador cujos planos pagos (Starter, Plus, Max) diferem no acesso a modelos; confira a página de preços atual. **O HunyuanVideo 1.5 é querido na comunidade pelo visual cinematográfico, mas sua licença exclui completamente a União Europeia, o Reino Unido e a Coreia do Sul** — evite-o se você estiver nessas regiões.',
    quickAnswerTop: {
      pt: {
        question: 'Devo gerar vídeo com IA localmente ou usar o pipeline na nuvem do invideo?',
        answer:
          'Gere localmente se você tem uma GPU de 12GB+, quer gerar sem taxa por clipe e valoriza privacidade — o Wan 2.2 (Apache 2.0, uso comercial permissivo — confira o model card) é um ponto de partida razoável. Use o invideo se você não tem o hardware adequado, não quer gerenciar a configuração, ou precisa de um vídeo completo e finalizado (roteiro, locução, música, legendas) em vez de um clipe bruto — é um serviço hospedado por assinatura com um plano gratuito; confira os preços atuais na página de preços.',
        bullets: [
          'Menos de 12 GB de VRAM → o invideo é a escolha prática; abaixo desse patamar, as opções locais se limitam a resultados quantizados de nível básico.',
          '12 GB de VRAM → LTX-Video 0.9.5, uma opção local prática nesse patamar.',
          '16–24 GB+ de VRAM → Wan 2.2 (boa qualidade, Apache 2.0 — uso comercial permissivo sem limite de receita nem exclusão territorial; aplicam-se os termos padrão da Apache, como avisos de atribuição, confira o model card) ou LTX-2 (velocidade + áudio sincronizado).',
          'Na União Europeia, Reino Unido ou Coreia do Sul → a licença do HunyuanVideo 1.5 exclui você; use o Wan 2.2 ou o LTX-2 em vez disso.',
          'Precisa de um vídeo narrado e finalizado, não de um clipe bruto → modelos locais só geram clipes silenciosos (exceto o LTX) de 5–20 segundos; o invideo oferece um fluxo de trabalho hospedado em torno do clipe; veja na página de preços o que cada plano inclui.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Por Que 2026 É um Momento Estranho para Vídeo IA', anchor: '#market-context' },
      { label: 'A Porta Local: Três Modelos Gratuitos na Sua Própria GPU', anchor: '#local-models' },
      { label: 'Wan 2.2 (Alibaba)', anchor: '#wan-2-2' },
      { label: 'LTX-2 (Lightricks)', anchor: '#ltx-2' },
      { label: 'HunyuanVideo 1.5 (Tencent)', anchor: '#hunyuanvideo' },
      { label: 'Um Para Ficar de Olho: MiniMax H3', anchor: '#one-to-watch' },
      { label: 'A Barreira do Hardware', anchor: '#hardware-gate' },
      { label: 'A Realidade DIY: O Que o "Gratuito" Exige de Você', anchor: '#diy-reality' },
      { label: 'A Porta da Nuvem: O Que o invideo Reúne', anchor: '#invideo-bundle' },
      { label: 'Nuvem ou Local: Qual É a Sua Porta?', anchor: '#decision-guide' },
      { label: 'Quem Deveria Escolher o invideo?', anchor: '#who-should-choose' },
      { label: 'Veja-os em Ação', anchor: '#video-roundup' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Teste Antes de Decidir', anchor: '#try-before-you-decide' },
      { label: 'O Veredito', anchor: '#verdict' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Leitura Relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O Wan 2.2 é um modelo de vídeo local sólido sob a licença permissiva Apache 2.0.** Uso comercial permissivo sem limite de receita nem exclusão territorial (aplicam-se os termos padrão da Apache, como avisos de atribuição; confira o model card).',
          '**O invideo é uma alternativa hospedada** com um plano gratuito e os planos pagos Starter, Plus e Max; a página de preços informa que Plus e Max têm acesso a todos os modelos, incluindo todos os Seedance. Os preços variam — confira a página atual.',
          '**A licença do HunyuanVideo 1.5 exclui explicitamente a União Europeia, o Reino Unido e a Coreia do Sul** — tanto para o modelo quanto para seus resultados. Leitores nessas regiões devem usar o Wan 2.2 ou o LTX-2.',
          '**O LTX-2 é posicionado como um modelo focado em velocidade e é o único deste trio local com áudio sincronizado embutido**, gratuito comercialmente para empresas com receita anual abaixo de $10 milhões.',
          '**12GB de VRAM é o piso realista para geração de vídeo local séria.** Abaixo disso, o invideo se torna a opção mais prática.',
          '**Modelos locais geram clipes brutos de 5 a 20 segundos (silenciosos, exceto no LTX-2), não vídeos finalizados.** Roteiro, locução, música, legendas e edição são ferramentas separadas que você mesmo monta — o invideo busca reunir essas etapas em um único fluxo de trabalho hospedado.',
          '**Na verificação de 27 de novembro de 2026, a página oficial do Wan no GitHub não mostrava nenhum repositório com pesos abertos do "Wan 2.7".** A Alibaba anunciou o [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) em abril de 2026 como modelo disponível na Alibaba Cloud. Tenha cuidado com páginas de terceiros que oferecem "pesos do Wan 2.7".',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Por Que 2026 É um Momento Estranho para Vídeo IA',
        content:
          'O mercado de vídeo proprietário tem sido turbulento. Em março de 2026, o [Engadget noticiou](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html), citando o The Information, que a ByteDance havia pausado o lançamento global do Seedance 2.0 após cartas de cessar-e-desistir da Disney e da Paramount Skydance. A PromptQuorum não verificou essa informação de forma independente, e a disponibilidade mudou desde então: a página de preços do invideo agora lista o Seedance 2.0 e o 2.5.\n\nEsse tipo de reviravolta é o que torna as duas portas atraentes. Modelos abertos que você já baixou continuam rodando independentemente de mudanças de um fornecedor. Um serviço multimodelo como o invideo oferece vários modelos em uma só conta, mas o catálogo pode mudar, então não há garantia de que seu fluxo de trabalho não será afetado.',
      },
      localModels: {
        id: 'local-models',
        title: 'A Porta Local: Três Modelos Gratuitos na Sua Própria GPU',
        content:
          'Este guia compara três sistemas de pesos abertos muito usados para geração de vídeo local. Todos os três rodam pelo ComfyUI, uma interface baseada em nós instalada na sua própria máquina — não uma ferramenta de chat como o Ollama. São modelos de difusão, não LLMs.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Wan 2.2 é um modelo de vídeo local de uso geral sólido em 2026 — Apache 2.0, alta qualidade, sem restrições territoriais — enquanto o LTX-2 foca em velocidade e traz áudio sincronizado, e o HunyuanVideo 1.5 é querido na comunidade pelo visual cinematográfico, mas exclui por licença os usuários da UE/Reino Unido/Coreia do Sul.' },
          { type: 'plain-terms', text: 'Se você quer só uma resposta: consiga uma GPU de 12GB+ e rode o Wan 2.2. Tem alta qualidade e a licença permissiva Apache 2.0.' },
        ],
        columns: ['Modelo', 'Licença', 'VRAM', 'Saída', 'Diferencial'],
        rows: [
          { 'Modelo': 'Wan 2.2 (Alibaba)', 'Licença': 'Apache 2.0 — permissiva, sem limite de receita nem exclusão territorial', 'VRAM': '6–8GB (5B) / 15–25GB (14B)', 'Saída': '480p/720p, clipes de ~5s', 'Diferencial': 'Variantes 14B e 5B compacta' },
          { 'Modelo': 'LTX-2 (Lightricks)', 'Licença': 'LTX Community License — gratuita abaixo de $10M de receita', 'VRAM': '18–20GB quantizado, 32GB+ full', 'Saída': '480p–1080p, 5–20s, com áudio', 'Diferencial': 'Áudio+vídeo sincronizados (só um destes três)' },
          { 'Modelo': 'HunyuanVideo 1.5 (Tencent)', 'Licença': 'Tencent Community License — exclui UE/Reino Unido/Coreia do Sul', 'VRAM': '14GB mínimo, 24GB confortável', 'Saída': '480p/720p, até 10s', 'Diferencial': 'Luz cinematográfica; mínimo 14GB com offloading' },
        ],
        note:
          '⚠️ Cuidado: na verificação de 27 de novembro de 2026, a [página oficial do Wan no GitHub](https://github.com/Wan-Video) não mostrava nenhum repositório com pesos abertos do "Wan 2.7"; a Alibaba anunciou o [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) como disponível na Alibaba Cloud. Tenha cuidado com páginas que oferecem "pesos abertos do Wan 2.7" e baixe apenas de repositórios oficiais no GitHub ou Hugging Face.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — qualidade sólida, Apache 2.0',
        content:
          'O Wan 2.2 é amplamente usado entre os modelos de vídeo abertos, com muitos derivados da comunidade construídos sobre ele (veja a página do modelo no Hugging Face para os downloads atuais). Ele vem em três variantes — T2V-A14B e I2V-A14B (mistura de especialistas, 27B de parâmetros totais / 14B ativos), além de um TI2V-5B compacto que lida com texto-para-vídeo e imagem-para-vídeo com apenas 6–8GB de VRAM. O patamar de 14B precisa de 15GB (GGUF Q3) a 25GB (FP8); o comando oficial não quantizado pede 80GB. Sua licença é Apache 2.0 — genuinamente gratuita, uso comercial permissivo sem limite de receita nem exclusão territorial (aplicam-se os termos padrão da Apache, como avisos de atribuição; confira o model card).\n\n**Velocidade, na prática:** o [repositório oficial do Wan 2.2](https://github.com/Wan-Video/Wan2.2) informa que, sem otimizações específicas, o modelo compacto TI2V-5B consegue gerar um clipe de 5 segundos em 720p em menos de 9 minutos em uma única GPU de consumo. É o número do desenvolvedor, não verificado pela PromptQuorum, e não descreve as variantes 14B. Segundo o repositório, o comando de exemplo do TI2V-5B roda em uma GPU com pelo menos 24GB de VRAM (por exemplo, uma RTX 4090), então não espere esse tempo em uma placa de 6–8GB. Uma sequência de 20 segundos exige gerar 4 clipes separados de 5 segundos, ou seja, menos de 36 minutos de geração bruta se cada um levar o tempo informado, mais a edição manual para juntá-los. É uma conta a partir do número por clipe, não um benchmark medido de 20 segundos.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — velocidade mais som sincronizado',
        content:
          'O LTX-2 é o único modelo aberto deste trio que gera áudio e vídeo sincronizados em uma única passagem — passos, ambiente e efeitos chegam junto com a imagem. Também é posicionado como um modelo rápido, embora não seja o mais leve em VRAM (veja os números abaixo). A arquitetura é um transformer de difusão de 22B; o LTX-2.3 (março de 2026) continua totalmente suportado ao lado do lançamento atual, o LTX-2.5. A licença é a LTX Community License — gratuita para uso comercial se a receita total da sua empresa for inferior a $10 milhões por ano, com licença comercial paga exigida acima desse limite. (Alguns textos de terceiros a chamam incorretamente de Apache 2.0 — a [página oficial de licença](https://ltx.io/model/license) é a única fonte confiável.) As necessidades de hardware ficam em 18–20GB de VRAM quantizado, 32GB+ em precisão completa; em placas de 12GB, o LTX-Video 0.9.5 mais antigo continua sendo a escolha prática.\n\n**Velocidade, na prática:** o LTX-2 é frequentemente descrito como rápido, mas não encontramos nenhum número de minutos por clipe em uma RTX 4090 verificado de forma independente, por isso não citamos nenhum. Para o mais novo LTX-2.5, o desenvolvedor relata um clipe de imagem para vídeo de 10 segundos em 720p em 6,8 segundos em dois superchips NVIDIA GB200 de classe datacenter, não em uma GPU de consumo ([VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights), que descreve o número como informado pelo fornecedor e sem verificação independente). Ele não diz nada sobre o que uma GPU doméstica vai entregar.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — o visual cinematográfico, com uma pegadinha jurídica',
        content:
          'O modelo de 8,3B da Tencent, lançado em novembro de 2025, é um favorito da comunidade pela iluminação e textura cinematográficas, com exigência moderada de VRAM: 14GB mínimo com offloading, 24GB confortável. Ele gera nativamente em 480p/720p, até 1080p via super-resolução embutida, clipes de até 10 segundos.\n\n**Velocidade, na prática:** o [repositório da Tencent](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) informa que, com o modelo de imagem para vídeo em 480p destilado em etapas, uma única RTX 4090 consegue gerar um vídeo em até 75 segundos. É o número do desenvolvedor, não verificado pela PromptQuorum. A nota não informa a duração do clipe, por isso não o projetamos para sequências mais longas.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Aviso de licença — leia antes de baixar. O HunyuanVideo 1.5 usa a Tencent Hunyuan Community License, não a Apache 2.0. A licença não se aplica na União Europeia, no Reino Unido ou na Coreia do Sul — conforme o texto da licença, usuários nessas regiões não estão autorizados a usar o modelo ou seus resultados. Também exige uma licença separada da Tencent se seus produtos tiveram mais de 100 milhões de usuários ativos mensais no mês anterior à data de lançamento do modelo, e proíbe usar o modelo ou seus resultados para melhorar outros modelos de IA (exceto o Tencent Hunyuan e seus derivados). Se você está na UE, no Reino Unido ou na Coreia do Sul, evite este modelo e considere o Wan 2.2 (Apache 2.0, uso comercial permissivo sem exclusão territorial).',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'Um Para Ficar de Olho: MiniMax H3',
        content:
          'Lançado em 3 de agosto de 2026, o MiniMax H3 é um modelo omni-modal de 33,1B com áudio estéreo nativo, suporte ao ComfyUI desde o primeiro dia, e versões quantizadas que rodam em uma RTX 3060. Duas ressalvas antes de tratá-lo como uma quarta opção: o lançamento local tem teto de 768p (o pipeline completo em 2K permanece hospedado apenas na nuvem), e sua [Community License](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE) exclui do território licenciado a UE, o Reino Unido, a Coreia do Sul e os EUA e exige autorização separada acima de $20 milhões de receita anual — leia antes de se comprometer (isto não é aconselhamento jurídico). Os primeiros sinais são fortes, mas um lançamento recente e estar pronto para produção são coisas diferentes.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'A Barreira do Hardware',
        content: [
          'A geração de vídeo local é gratuita do jeito que um filhote de cachorro é gratuito: os pesos do modelo não custam nada, mas a GPU é o verdadeiro preço de entrada. Evite a geração local por completo se sua GPU tem menos de 12GB de VRAM e você não planeja fazer upgrade — abaixo desse patamar apenas a variante quantizada de 5B do Wan 2.2 é utilizável, com qualidade de entrada, e uma plataforma na nuvem provavelmente é o caminho mais fácil.',
          'Não tem certeza do que isso significa para a sua máquina? Estes guias detalham tudo: [Calculadora de VRAM](/pt/local-llms/vram-calculator-local-llm) para requisitos exatos por modelo, [Quanto de VRAM Você Precisa?](/pt/local-llms/how-much-vram-local-llm) para gráficos entre tamanhos de modelo, [Melhores GPUs para IA Local](/pt/local-llms/best-gpus-for-local-llms) e [Melhores GPUs de Orçamento](/pt/local-llms/best-budget-gpus-local-llm) para escolhas de hardware, e [GPU vs CPU vs Apple Silicon](/pt/local-llms/gpu-vs-cpu-vs-apple-silicon) para comparações de plataforma. Uma ressalva honesta: esses guias usam a fórmula de VRAM para LLMs (parâmetros × bits ÷ 8). Modelos de difusão de vídeo também escalam a VRAM com resolução e duração do clipe, então trate os números deles como um piso, não um teto, para cargas de trabalho de vídeo.',
        ],
        columns: ['Sua GPU', 'O que você consegue rodar'],
        rows: [
          { 'Sua GPU': '6–8GB VRAM', 'O que você consegue rodar': 'Wan 2.2 TI2V-5B (quantizado) — utilizável, qualidade de entrada' },
          { 'Sua GPU': '12GB VRAM', 'O que você consegue rodar': 'LTX-Video 0.9.5 — uma opção prática nesse patamar' },
          { 'Sua GPU': '16GB VRAM', 'O que você consegue rodar': 'HunyuanVideo 1.5 (se a licença permitir), Wan 2.2 14B em GGUF Q3' },
          { 'Sua GPU': '24GB+ VRAM', 'O que você consegue rodar': 'Os três: Wan 2.2 14B (quantizado), LTX-2 quantizado, HunyuanVideo 1.5 (se a licença permitir)' },
        ],
        note:
          'Custo aproximado de GPU, segundo o [monitor de preços de GPU da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (dados de listagens do eBay EUA, sem ser cotação nem oferta): as listagens vendidas de RTX 3090 usadas ficam em cerca de $1.500–1.725 (mediana $1.650; 225 vendas, 13–23 de novembro de 2026; dado de 2026-11-23). No valor datado de 2026-10-15, as de RTX 4090 usadas estavam em $2.575–3.010 (mediana $2.860). Os preços no Brasil podem variar bastante devido a impostos de importação — verifique o preço atual antes de comprar em vez de confiar nesses números depois de alguns meses.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'O Que Rodar Geração de Vídeo Local Realmente Envolve',
        content:
          'Com modelos locais, você não está instalando uma ferramenta de vídeo — está montando um pipeline.\n\n**A configuração da geração.** O ComfyUI é baseado em nós: você constrói, ou importa e depura, um grafo de fluxo de trabalho com carregadores, samplers e decodificadores. Espere incompatibilidades de versão do CUDA, fixações de versão do PyTorch e o ocasional erro de instalação do `flash_attn` antes que seu primeiro frame seja renderizado.\n\n**O prompting.** Modelos de vídeo precisam de prompts estruturados — tipo de plano, movimento de câmera, iluminação, ação do sujeito — não de frases soltas. Um fluxo de trabalho típico do ComfyUI não tem camada de system prompt. Os repositórios do [Wan 2.2](https://github.com/Wan-Video/Wan2.2) e do [HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) oferecem extensão ou reescrita de prompts, mas isso depende de um modelo de linguagem separado ou de uma API que você mesmo configura. Nossos guias sobre [system prompts vs. user prompts](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) e [engenharia de prompt para modelos locais](/pt/local-llms/prompt-engineering-for-local-models) cobrem fundamentos que se aplicam diretamente ao prompting de vídeo.\n\n**Tudo ao redor do clipe.** Modelos locais geram clipes brutos e silenciosos (exceto o LTX) de 5 a 20 segundos. Roteiro, locução, música, imagens de banco, legendas e edição são ferramentas separadas que você escolhe, instala e conecta sozinho.',
        promptExamples: [
          { label: 'Fraco (frase solta)', text: 'Um cachorro na praia' },
          { label: 'Estruturado (o que os modelos de vídeo precisam)', text: 'Golden retriever correndo por uma orla molhada durante a hora dourada, plano baixo de acompanhamento pela lateral, profundidade de campo rasa, contraluz quente, câmera lenta suave, 24fps cinematográfico' },
        ],
        note:
          'Sujeito e ação, comportamento de câmera, iluminação, estilo — quatro ingredientes em uma frase fazem a diferença entre um caça-níqueis e uma câmera. Se essa pilha DIY parece empolgante, a porta local é sua. Se pareceu exaustiva, continue lendo.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'A Porta da Nuvem: O Que o invideo Reúne',
        highlight: true,
        itemHeadings: true,
        content:
          'O invideo é um exemplo da porta da nuvem — não o único, e vale a pena entender como ele difere dos outros antes de assumir que "nuvem" significa uma coisa só. Segundo as descrições públicas desses serviços (a PromptQuorum não testou nenhum dos três), o Runway se integra diretamente a editores profissionais (Premiere Pro, Final Cut, DaVinci Resolve), voltado para fluxos híbridos de IA mais editor em vez de um vídeo finalizado e montado. Segundo as mesmas descrições, o Dream Machine, da Luma AI, é especializado em saída nativa HDR de 16 bits para pipelines de composição de VFX (After Effects, Nuke) — um público totalmente diferente. Segundo as mesmas descrições, o Pika se concentra na geração rápida de clipes brutos; a PromptQuorum não verificou se ele oferece roteiro, locução ou montagem de imagens de banco, então confira antes de contar com ele para o trabalho ao redor do clipe. Na descrição do próprio serviço, o invideo combina storyboard, escrita de roteiro e edição em linha do tempo com acesso a modelos de geração como Kling, Veo e Seedance.\n\nO invideo não é um único modelo de vídeo, mas um serviço hospedado. Na verificação de 27 de novembro de 2026, [a página inicial](https://invideo.io/) apresentava um editor de vídeo com agentes, com storyboard a partir de um roteiro ou ideia, escrita de roteiro e linha do tempo multipista; o site também lista ferramentas de voz e música com IA. A PromptQuorum não testou o serviço, então confira se a locução e as legendas funcionam como você precisa. Ele roda no navegador — sua GPU é irrelevante.\n\nPara quem quer começar a fazer vídeos hoje em vez de pesquisar GPUs e formatos de quantização, o invideo é a escolha prática: nenhum requisito de hardware local, nenhuma instalação do ComfyUI ou solução de problemas de CUDA, e um ambiente hospedado para as etapas ao redor do clipe. É especialmente adequado para criadores que se importam mais com o vídeo finalizado do que em controlar o modelo de geração subjacente — e como existe um plano gratuito, você pode descobrir se ele se encaixa antes de gastar qualquer coisa.\n\nTrês coisas se destacam nesta comparação:\n\n- **Vários modelos, uma conta.** A página de preços do invideo informa que Plus e Max têm acesso a todos os modelos, incluindo todos os Seedance; o Starter cobre modelos selecionados, sem o Seedance 2.5. O catálogo pode mudar.\n- **O acesso para agentes vem embutido.** O invideo oferece um [servidor MCP](https://invideo.io/ai/mcp) que permite que agentes de IA trabalhem no editor de linha do tempo.\n- **Existe um plano gratuito.** A [página de limites dos planos](https://invideo.io/help/billing/plan-limits/) do invideo descreve um limite semanal; confira as regras de exportação e marca d\'água antes de contar com ele.\n\n**Velocidade, na prática — e a pegadinha honesta:** segundo o invideo, a geração bruta é rápida. Mas o próprio FAQ do invideo coloca a produção completa de ponta a ponta de um curta em 2 a 5 dias, não minutos — porque escolher e montar entre múltiplas opções geradas, não a geração em si, é o que consome tempo. O [FAQ do invideo](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) descreve 2 dias como piso para filmes de 1 a 3 minutos com os materiais definidos cedo. Esse número vale para um filme finalizado, enquanto o número local acima cobre apenas clipes TI2V-5B brutos e sem edição, então os dois não são diretamente comparáveis. Um serviço hospedado elimina a configuração local, mas a produção ainda leva tempo.\n\nPlanos listados pelo invideo (para preços, veja a [página de preços do invideo](https://invideo.io/pricing/)):',
        blockquote:
          '**Quer criar vídeos com IA sem a configuração local?** Se você não tem uma GPU potente — ou simplesmente não quer passar horas instalando e configurando ferramentas de vídeo IA locais — vale a pena experimentar o invideo. [Experimente a versão gratuita do invideo →](https://invideo.io/pricing/)',
        columns: ['Plano', 'Créditos por assento/mês', 'Acesso a modelos'],
        rows: [
          { 'Plano': 'Free', 'Créditos por assento/mês': 'Limite semanal', 'Acesso a modelos': 'Veja a página de preços' },
          { 'Plano': 'Starter', 'Créditos por assento/mês': '400', 'Acesso a modelos': 'Modelos selecionados; sem Seedance 2.5' },
          { 'Plano': 'Plus', 'Créditos por assento/mês': '2.000', 'Acesso a modelos': 'Todos os modelos, segundo o invideo' },
          { 'Plano': 'Max', 'Créditos por assento/mês': 'A partir de 5.000', 'Acesso a modelos': 'Todos os modelos, segundo o invideo' },
        ],
        note:
          'Nomes dos planos, créditos e acesso a modelos conforme as páginas de [preços](https://invideo.io/pricing/) e de [limites dos planos](https://invideo.io/help/billing/plan-limits/) do invideo, verificadas em 27 de novembro de 2026. Nenhum preço é citado aqui: vista da Europa, a página exibia uma promoção por tempo limitado, e os planos diferem dos que este guia listava antes. Confira a página ao vivo antes de confiar em qualquer detalhe.',
        affiliateLinks: [
          { url: 'https://invideo.io/pricing/', productName: 'invideo', productCategory: 'video-generation', label: 'Experimente a versão gratuita do invideo →' },
        ],
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Nuvem ou Local: Qual É a Sua Porta?',
        content: 'A versão resumida, mapeada para situações comuns:',
        columns: ['Sua situação', 'Recomendação'],
        rows: [
          { 'Sua situação': 'Sem GPU, ou abaixo de 12GB de VRAM', 'Recomendação': 'Invideo (nuvem) — abaixo desse patamar, as opções locais são básicas' },
          { 'Sua situação': 'Quer um vídeo finalizado com locução, não clipes brutos', 'Recomendação': 'Invideo (nuvem) — modelos locais não montam uma produção completa' },
          { 'Sua situação': 'Guiado por prazo, zero tolerância a configuração', 'Recomendação': 'Invideo (nuvem)' },
          { 'Sua situação': 'GPU de 12GB+, confortável com configuração, quer privacidade e custo marginal de $0', 'Recomendação': 'Local: LTX-Video (12GB) ou Wan 2.2 (24GB para os modelos 14B quantizados)' },
          { 'Sua situação': 'Na União Europeia, Reino Unido ou Coreia do Sul', 'Recomendação': 'Local = apenas Wan 2.2 ou LTX-2 (a licença do HunyuanVideo exclui você)' },
          { 'Sua situação': 'Precisa de automação/API em escala sem construir do zero', 'Recomendação': 'Invideo (nuvem, servidor MCP)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'Quem Deveria Escolher o invideo?',
        content:
          '**O invideo é provavelmente a melhor escolha se você:**\n\n- Não tem uma GPU potente\n- Quer começar a criar vídeos imediatamente\n- Não quer instalar e configurar ComfyUI, CUDA, modelos ou ambientes Python\n- Quer um fluxo de trabalho integrado em vez de montar várias ferramentas locais\n- Precisa de roteiros, voz, música, legendas e geração de vídeo em um único fluxo de trabalho\n- Se importa mais com vídeos finalizados do que em experimentar com os modelos subjacentes\n\n**A IA local é provavelmente a melhor escolha se você:**\n\n- Já possui hardware de GPU adequado\n- Quer controle máximo\n- Quer experimentar com modelos e fluxos de trabalho\n- Tem fortes habilidades técnicas\n- Prioriza manter a geração sob controle local\n- Espera gerar volumes muito grandes e quer otimizar o custo marginal de geração',
        blockquote:
          '**Não tem certeza de qual caminho é o certo para você?** Se você quer evitar o hardware e a configuração técnica, o experimento mais simples é apenas testar o invideo e ver se o fluxo de trabalho dele atende às suas necessidades. [Experimente o invideo gratuitamente →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'Veja-os em Ação',
        items: [
          '[4 Modelos de Vídeo IA Open Source Comparados — Qual É Realmente Gratuito?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — comparação lado a lado da saída do LTX 2.3, Wan 2.2, HunyuanVideo 1.5 e MiniMax H3, incluindo as letras miúdas de licenciamento.',
          '[Análise do invideo Agent One](https://www.youtube.com/watch?v=uUHO9byu0c0) — o fluxo de trabalho completo de prompt até vídeo finalizado.',
          '[Demonstração Local Completa do Wan 2.2](https://www.youtube.com/watch?v=fs62ML_ZgEs) — tempos de renderização honestos em hardware de consumo (semana de lançamento, julho de 2025).',
          '[Tutorial Wan 2.2 com VRAM Baixa](https://www.youtube.com/watch?v=tQu0DjtOEyg) — rodando o modelo 14B em um notebook com 6GB (2025).',
        ],
        note:
          'Estes são vídeos de terceiros, não produzidos pela PromptQuorum ou pelo invideo. Incluídos apenas para referência — nenhum endosso ao canal ou a outros conteúdos dele é implicado.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Posso rodar geração de vídeo IA com 8GB de VRAM?',
            a: 'Muito no limite. A variante TI2V-5B do Wan 2.2 roda com 6–8GB quantizado, com qualidade reduzida e clipes curtos. Para os modelos sérios, 12GB é o piso real — e abaixo disso, uma ferramenta na nuvem como o invideo é a resposta prática.',
          },
          {
            q: 'O Wan 2.2 é realmente gratuito para uso comercial?',
            a: 'Sim. É Apache 2.0 — uso comercial permissivo sem limite de receita nem exclusão territorial (aplicam-se os termos padrão da Apache, como avisos de atribuição; confira o model card), nenhum direito reivindicado sobre seus resultados. É um dos principais modelos locais com licença mais permissiva.',
          },
          {
            q: 'Posso usar o HunyuanVideo na União Europeia ou no Reino Unido?',
            a: 'Não, segundo o texto da licença. A Tencent Hunyuan Community License afirma que não se aplica na União Europeia, Reino Unido ou Coreia do Sul — conforme o texto da licença, isso cobre tanto o modelo em si quanto seus resultados. Confira a licença por conta própria (isto não é aconselhamento jurídico) e considere usar o Wan 2.2 ou o LTX-2 em vez disso.',
          },
          {
            q: 'Preciso de uma GPU para usar o invideo?',
            a: 'Não. O invideo roda inteiramente no navegador; toda a geração acontece na infraestrutura deles. Um notebook comum deve ser suficiente.',
          },
          {
            q: 'Modelos locais conseguem produzir um vídeo completo para YouTube com locução?',
            a: 'Não sozinhos. Modelos locais geram clipes brutos de 5 a 20 segundos (o LTX-2 inclui áudio sincronizado; os outros são silenciosos). Roteiro, locução, música, legendas e edição exigem cada um ferramentas separadas que você mesmo monta em um pipeline.',
          },
          {
            q: 'Qual é a pegadinha real do vídeo IA local "gratuito"?',
            a: 'O custo do hardware (uma GPU capaz), o tempo de configuração (ComfyUI e suas dependências), e o pipeline DIY necessário ao redor dos clipes de saída bruta. Os pesos do modelo não têm taxa por geração; hardware e energia continuam custando dinheiro.',
          },
          {
            q: 'Existe um Wan 2.7 ou um modelo Wan mais novo?',
            a: 'Na verificação de 27 de novembro de 2026, a página oficial do Wan no GitHub não mostrava nenhum repositório mais novo com pesos abertos. A Alibaba anunciou o [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) em abril de 2026 como disponível na Alibaba Cloud. Tenha cuidado com qualquer outro site que ofereça "pesos do Wan 2.7" — baixe apenas dos repositórios oficiais no GitHub ou Hugging Face.',
          },
          {
            q: 'Sou totalmente iniciante. Por onde devo começar?',
            a: 'O plano gratuito do invideo permite testar o fluxo de trabalho na nuvem sem comprar hardware e avaliar se o vídeo com IA atende aos seus objetivos; ele tem limites. Se depois você comprar uma GPU capaz e quiser controle total e privacidade, a porta local continua aberta.',
          },
          {
            q: 'Qual a diferença de rodar esses modelos locais no Mac vs Windows?',
            a: 'O ComfyUI roda em Apple Silicon (M1–M4) via backend MPS do PyTorch. Conte com uma geração mais lenta do que em uma GPU NVIDIA comparável; não temos benchmark controlado nem informamos uma proporção de velocidade. O problema prático maior é o suporte de software: otimizações específicas do CUDA nas quais esses modelos se apoiam (flash-attention, ferramentas de quantização GGUF/FP8) são bem menos maduras no Mac, então vários fluxos de trabalho e guias de instalação da comunidade assumem Windows ou Linux com uma placa NVIDIA e podem precisar de ajustes, ou simplesmente não vão rodar como documentado. Um lado positivo: a memória unificada do Apple Silicon pode permitir caber um modelo maior na memória do que uma GPU dedicada com VRAM equivalente permitiria, mesmo rodando mais devagar. Se você está comprando hardware especificamente para geração de vídeo local, Windows ou Linux mais NVIDIA é o caminho bem suportado; um Mac que você já tem serve para experimentar, não é o alvo recomendado para volume sério.',
          },
          {
            q: 'Consigo manter o mesmo personagem consistente entre vários clipes de vídeo local?',
            a: 'Sim, com trabalho extra — nenhum dos três modelos garante isso de fábrica entre gerações separadas. As duas abordagens que funcionam: alimentar a mesma imagem de referência no modo imagem-para-vídeo (todos os três suportam I2V), ou treinar uma pequena LoRA do seu personagem. O Wan 2.2 e o LTX-2 têm fluxos de trabalho de LoRA documentados para isso — a versão do LTX-2 é chamada de IC-LoRA (in-context LoRA) e suporta explicitamente consistência multi-personagem. Treinar uma LoRA do seu personagem é o caminho mais trabalhoso e busca resultados mais consistentes do que um prompt ou uma única imagem de referência; não testamos o tamanho da diferença. Os recursos de kit de marca e avatar de IA do invideo resolvem o mesmo problema de fundo de outra forma — um avatar fixo e um perfil de voz que você configura uma vez e reutiliza, sem necessidade de treinamento.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Teste Antes de Decidir',
        content:
          'Você não precisa se comprometer com uma configuração de GPU local — nem com uma assinatura paga — só para avaliar o fluxo de trabalho na nuvem. Antes de comprar hardware ou passar um fim de semana no ComfyUI, vale a pena gastar cinco minutos no outro sentido primeiro:\n\n1. Experimente a versão gratuita do invideo.\n2. Crie um vídeo curto.\n3. Avalie a qualidade da saída e como o fluxo de trabalho pareceu.\n4. Compare essa experiência com o esforço de configuração que uma instalação local exigiria.\n\nIsso transforma a comparação de algo que você lê sobre em algo que você mesmo pode testar em menos tempo do que leva para ler o resto deste artigo.',
        blockquote:
          '[Experimente a versão gratuita do invideo →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'O Veredito',
        content:
          'Vá pelo caminho local se você tem (ou vai comprar) uma GPU de 12GB+, gosta de construir suas próprias ferramentas, e valoriza privacidade e gerar sem taxa por clipe acima da conveniência. O Wan 2.2 é uma base sólida — alta qualidade, Apache 2.0 — com o LTX-2 como o especialista em velocidade e som.\n\nVá pela nuvem se você não tem o hardware, não quer a configuração, ou precisa de vídeos finalizados em vez de clipes brutos. Para a maioria das pessoas que simplesmente quer fazer vídeos gerados por IA, o caminho da nuvem é o ponto de partida mais fácil: se você ainda não tem o hardware e o interesse técnico que a geração local exige, um serviço hospedado como o invideo poupa você da configuração local. Há um plano gratuito para testar; os planos pagos e seus limites estão na página de preços do invideo. A forma mais simples de descobrir se ele se encaixa no seu fluxo de trabalho é experimentar a versão gratuita.\n\nAs duas portas levam ao vídeo com IA. A pergunta nunca foi qual tecnologia é melhor — é qual fluxo de trabalho se encaixa na sua máquina, na sua paciência e nos seus objetivos.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Wan 2.2 no GitHub](https://github.com/Wan-Video/Wan2.2) — repositório oficial, licença e instruções de configuração.',
          '[Wan 2.2 no Hugging Face](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B) — ficha oficial do modelo e download.',
          '[Licença do modelo LTX](https://ltx.io/model/license) — termos oficiais da LTX Community License.',
          '[Página do modelo LTX-2](https://ltx.io/model/ltx-2-3) — arquitetura oficial e detalhes de lançamento.',
          '[HunyuanVideo 1.5 no GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) — repositório oficial e arquivo LICENSE, incluindo a exclusão de UE/Reino Unido/Coreia do Sul.',
          '[Engadget: ByteDance has reportedly suspended the global rollout of its new AI video generator](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) — reportagem de março de 2026 (em inglês).',
          '[Alibaba Cloud Community: anúncio do Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009) — abril de 2026 (em inglês).',
          '[Limites dos planos do invideo](https://invideo.io/help/billing/plan-limits/) — limites oficiais de planos e créditos.',
          '[Preços do invideo](https://invideo.io/pricing/) — detalhes oficiais de planos e preços.',
          '[Servidor MCP do invideo](https://invideo.io/ai/mcp) — documentação oficial de automação.',
          '[MiniMax H3 no GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — repositório oficial.',
          '[MiniMax H3 no Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — pesos oficiais do modelo.',
          '[Invideo: Quanto Tempo Leva Para Fazer um Curta com IA?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — números da própria linha do tempo de produção de ponta a ponta do invideo (2–5 dias).',
          '[Requisitos de sistema do ComfyUI](https://docs.comfy.org/installation/system_requirements) — documentação oficial de suporte a Mac/Apple Silicon MPS.',
          '[Blog da LTX: Como Usar IC-LoRA no LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — guia oficial de consistência de personagem (IC-LoRA).',
          '[InsiderLLM: NVIDIA GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — fonte dos valores de GPUs usadas (dados de anúncios do eBay nos EUA).',
          '[Runway](https://runwayml.com/) — site oficial; base da descrição pública citada acima (não testado pela PromptQuorum).',
          '[Luma AI](https://lumalabs.ai/) — site oficial; base da descrição pública citada acima (não testado pela PromptQuorum).',
          '[Pika](https://pika.art/) — site oficial; base da descrição pública citada acima (não testado pela PromptQuorum).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[AnimateDiff 2026: anime qualquer modelo Stable Diffusion](/pt/power-local-llm/animatediff-video-generation-guide) — aprofundamento em uma única ferramenta para animar seus checkpoints e LoRAs SD1.5/SDXL existentes, diferente dos modelos de vídeo nativos comparados aqui.',
          '[Geração de Imagem IA Local vs. Nuvem](/pt/power-local-llm/local-ai-image-generation-vs-cloud) — a peça complementar, mesma estrutura, para imagens em vez de vídeo.',
          '[Calculadora de VRAM para Modelos Locais](/pt/local-llms/vram-calculator-local-llm) — requisitos exatos de VRAM por modelo e quantização.',
          '[Quanto de VRAM Você Precisa?](/pt/local-llms/how-much-vram-local-llm) — gráficos entre tamanhos de modelo de 7B a 70B.',
          '[Melhores GPUs para IA Local em 2026](/pt/local-llms/best-gpus-for-local-llms) — escolhas de hardware por faixa de orçamento.',
          '[Melhores GPUs de Orçamento para IA Local](/pt/local-llms/best-budget-gpus-local-llm) — opções de hardware de entrada.',
          '[GPU vs CPU vs Apple Silicon](/pt/local-llms/gpu-vs-cpu-vs-apple-silicon) — comparação de plataformas para inferência local.',
          '[System Prompts vs. User Prompts](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — fundamentos de estruturação de prompts que se aplicam ao prompting de vídeo.',
          '[Engenharia de Prompt para Modelos Locais](/pt/local-llms/prompt-engineering-for-local-models) — técnicas de prompting estruturado.',
          '[Análise do OpenShorts](/pt/power-local-llm/openshorts-review) e [Análise do pyVideoTrans](/pt/power-local-llm/pyvideotrans-review) — duas ferramentas para vídeos que você já tem, e não geradores de vídeo: uma corta vídeos longos em clipes verticais legendados, a outra traduz e dubla vídeos.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-02-21',
    designSkin: 'hub',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-zh.webp',
    title: 'Invideo 与本地 AI 视频对比：一个要付出 GPU 加你的周末，另一个是云端订阅',
    seoTitle: '云端 vs 本地 AI 视频 2026：invideo 对比 Wan 2.2 与 LTX-2',
    intro:
      '2026 年,通往 AI 视频有两扇门。第一扇是本地:免费、开放的视频模型运行在你自己的 GPU 上——无限次生成、推理在你自己的硬件上运行(模型下载和更新检查仍会使用网络)、无需订阅,但整个工作流程要你自己搭建。第二扇是云端:invideo,一项托管服务,主打由 AI 代理协助、从脚本或创意到剪辑成片的流程,直接在浏览器里使用。没有哪扇门"更好"。本指南提供大多数对比文章都会跳过的许可证细则、真实的硬件要求,以及一个能把你的实际情况映射到具体建议的决策工具。',
    metaDescription:
      '本地 AI 视频模型(Wan 2.2、LTX-2、HunyuanVideo)只要 GPU 够用就能免费下载。本文从显存、许可证和工作流角度对比它们与 invideo 云端服务。',
    twitterDescription:
      '2026 年云端 vs 本地 AI 视频对比:invideo 是订阅制托管服务。Wan 2.2、LTX-2、HunyuanVideo 可免费下载到自己的 GPU 上运行——前提是显卡够强。',
    audience:
      '面向在自己 GPU 上免费本地生成视频、与 invideo 一体化云端流水线之间做选择的创作者和开发者——涵盖硬件要求、许可证细则和工作流权衡。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地 AI 视频生成',
    targetKeywords: [
      '云端 vs 本地 AI 视频',
      'Invideo 对比本地 AI 视频',
      'Wan 2.2 对比 LTX-2',
      '2026 最佳开源视频模型',
      'HunyuanVideo 本地部署',
      '本地运行 AI 视频生成',
      'Wan 2.2 显存要求',
      'LTX-2 许可证',
      '本地视频生成显卡',
    ],
    current_models_mentioned: [
      'Wan 2.2 (T2V-A14B, I2V-A14B, TI2V-5B)',
      'LTX-2.5 / LTX-2.3',
      'HunyuanVideo 1.5',
      'MiniMax H3',
      'Kling 3.0',
      'Veo 3.1',
      'Seedance 2.5',
    ],
    current_hardware_mentioned: ['6 GB VRAM', '8 GB VRAM', '12 GB VRAM', '16 GB VRAM', '24 GB VRAM', 'RTX 3060', 'RTX 3090', 'RTX 4090'],
    leadAnswerBlock:
      '**对大多数拥有 12GB 以上显存 GPU 的用户来说,Wan 2.2 是 2026 年表现出色的本地 AI 视频模型**——采用 Apache 2.0 许可,无营收上限、无地区限制,可免费下载(硬件和电费仍需自付)。**如果你没有这样的 GPU,或者想要一段成品旁白视频而不是一段原始片段,invideo 是更好的选择**——它是一项基于浏览器的托管服务,付费套餐(Starter、Plus、Max)可用的模型不同;请查看其最新定价页面。**HunyuanVideo 1.5 的电影感画面受社区喜爱,但其许可证完全排除了欧盟、英国和韩国**——如果你身处这些地区,请跳过这个模型。',
    quickAnswerTop: {
      zh: {
        question: '我应该本地生成 AI 视频,还是使用 invideo 的云端流水线?',
        answer:
          '如果你拥有 12GB 以上显存的 GPU,想要不按片段收费地生成,并且看重隐私,就本地生成——Wan 2.2(Apache 2.0,商业用途宽松——请查看模型卡)是合理的起点。如果你没有合适的硬件、不想折腾配置,或者需要一段完整的成品视频(脚本、配音、音乐、字幕)而不是一段原始片段,就用 invideo——它是订阅制托管服务,设有免费套餐;当前价格请查看其定价页面。',
        bullets: [
          '显存低于 12 GB → invideo 是更实际的选择;这个档位以下,本地方案只能得到量化后的入门级输出。',
          '12 GB 显存 → LTX-Video 0.9.5,这个档位实用的本地选择。',
          '16–24 GB 以上显存 → Wan 2.2(质量出色、Apache 2.0——商业用途宽松,无营收门槛、无地区排除;适用 Apache 的标准条款,如署名声明,请查看模型卡)或 LTX-2(速度快 + 同步音频)。',
          '身处欧盟、英国或韩国 → HunyuanVideo 1.5 的许可证将你排除在外;改用 Wan 2.2 或 LTX-2。',
          '需要一段带旁白的成品视频,而不是原始片段 → 本地模型只能生成 5–20 秒的无声片段(LTX 除外);invideo 提供围绕片段后续工作的托管工作流;各套餐包含的内容请查看其定价页面。',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '为什么 2026 年是 AI 视频领域的一个奇怪时刻', anchor: '#market-context' },
      { label: '本地这扇门:你自己 GPU 上的三个免费模型', anchor: '#local-models' },
      { label: 'Wan 2.2(阿里巴巴)', anchor: '#wan-2-2' },
      { label: 'LTX-2(Lightricks)', anchor: '#ltx-2' },
      { label: 'HunyuanVideo 1.5(腾讯)', anchor: '#hunyuanvideo' },
      { label: '值得关注:MiniMax H3', anchor: '#one-to-watch' },
      { label: '硬件门槛', anchor: '#hardware-gate' },
      { label: '本地折腾的真相:"免费"到底要你付出什么', anchor: '#diy-reality' },
      { label: '云端这扇门:invideo 打包了什么', anchor: '#invideo-bundle' },
      { label: '云端还是本地:哪扇门属于你?', anchor: '#decision-guide' },
      { label: '谁应该选择 invideo?', anchor: '#who-should-choose' },
      { label: '看它们实际运行', anchor: '#video-roundup' },
      { label: '常见问题', anchor: '#faq' },
      { label: '决定前先试用', anchor: '#try-before-you-decide' },
      { label: '结论', anchor: '#verdict' },
      { label: '资料来源', anchor: '#sources' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Wan 2.2 是采用宽松 Apache 2.0 许可的优秀本地视频模型。** 商业用途宽松,无营收门槛、无地区排除(适用 Apache 的标准条款,如署名声明;请查看模型卡)。',
          '**Invideo 是一个托管型替代方案**,设有免费套餐以及付费的 Starter、Plus 和 Max 套餐;其定价页面称 Plus 和 Max 可使用全部模型,包括所有 Seedance 模型。价格不一——请查看实时页面。',
          '**HunyuanVideo 1.5 的许可证明确排除欧盟、英国和韩国**——模型本身和其输出内容均受限。这些地区的读者应改用 Wan 2.2 或 LTX-2。',
          '**LTX-2 定位为侧重速度的模型,也是这三个本地模型中唯一内置同步音频的**,年营收低于 1000 万美元的公司可免费商用。',
          '**12GB 显存是认真进行本地视频生成的现实底线。** 低于这个数字,invideo 是更实际的选择。',
          '**本地模型生成的是 5–20 秒的原始片段(除 LTX-2 外均无声),而不是成品视频。** 脚本、配音、音乐、字幕和剪辑都是需要你自己组装的独立工具——invideo 则致力于把这些步骤整合进一个托管工作流。',
          '**在 2026 年 11 月 27 日核查时,Wan 官方 GitHub 页面上没有"Wan 2.7"开放权重仓库。** 阿里巴巴于 2026 年 4 月发布了 [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009),称其可在阿里云上使用。请谨慎对待提供"Wan 2.7 权重"的第三方页面。',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: '为什么 2026 年是 AI 视频领域的一个奇怪时刻',
        content:
          '专有视频市场一直动荡不安。2026 年 3 月,[Engadget 援引](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html) The Information 报道称,在收到迪士尼和 Paramount Skydance 的停止侵权函后,字节跳动暂停了 Seedance 2.0 的全球推广。PromptQuorum 未独立核实该报道,而且此后可用情况已发生变化:invideo 的定价页面现已列出 Seedance 2.0 和 2.5。\n\n正是这类变动让两扇门都有吸引力。已经下载的开放模型不受供应商变化影响,可以继续运行。像 invideo 这样的多模型服务在一个账户内提供多个模型,但其模型阵容可能调整,因此无法保证你的工作流程不受影响。',
      },
      localModels: {
        id: 'local-models',
        title: '本地这扇门:你自己 GPU 上的三个免费模型',
        content:
          '本指南对比三个在本地视频生成中广泛使用的开放权重系统。三者都通过 ComfyUI 运行,这是一个安装在你自己机器上的基于节点的界面——不是像 Ollama 那样的聊天式工具。这些是扩散模型,不是大语言模型。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 是 2026 年综合表现出色的本地视频模型——Apache 2.0、质量高、无地区限制——而 LTX-2 侧重速度并支持同步音频,HunyuanVideo 1.5 的电影感画面受社区喜爱,但许可证将欧盟/英国/韩国用户排除在外。' },
          { type: 'plain-terms', text: '如果你只想要一个答案:准备一块 12GB 以上显存的 GPU,运行 Wan 2.2。它质量高,采用宽松的 Apache 2.0 许可证。' },
        ],
        columns: ['模型', '许可证', '显存', '输出', '突出特点'],
        rows: [
          { '模型': 'Wan 2.2(阿里巴巴)', '许可证': 'Apache 2.0——宽松,无营收门槛、无地区排除', '显存': '6–8GB(5B)/ 15–25GB(14B)', '输出': '480p/720p,约 5 秒片段', '突出特点': '提供 14B 和轻量 5B 版本' },
          { '模型': 'LTX-2(Lightricks)', '许可证': 'LTX 社区许可证——年营收低于 1000 万美元可免费使用', '显存': '量化版 18–20GB,完整精度 32GB 以上', '输出': '480p–1080p,5–20 秒,带音频', '突出特点': '音视频同步生成(三者中仅此一个)' },
          { '模型': 'HunyuanVideo 1.5(腾讯)', '许可证': '腾讯社区许可证——排除欧盟/英国/韩国', '显存': '最低 14GB,24GB 更舒适', '输出': '480p/720p,最长 10 秒', '突出特点': '电影感光影;卸载模式下最低 14GB' },
        ],
        note:
          '⚠️ 提醒:在 2026 年 11 月 27 日核查时,[Wan 官方 GitHub 页面](https://github.com/Wan-Video)上没有"Wan 2.7"开放权重仓库;阿里巴巴已发布 [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009),称其可在阿里云上使用。请谨慎对待声称提供"Wan 2.7 开放权重"的页面,只从官方 GitHub 或 Hugging Face 仓库下载。',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2(阿里巴巴)——质量出色,Apache 2.0',
        content:
          'Wan 2.2 在开放视频模型中应用广泛,并衍生出许多社区变体(当前下载量请查看其 Hugging Face 模型页面)。它提供三个版本——T2V-A14B 和 I2V-A14B(混合专家架构,总参数 27B / 激活参数 14B),以及一个紧凑的 TI2V-5B,支持文本转视频和图像转视频,最低只需 6–8GB 显存。14B 档位需要 15GB(GGUF Q3)到 25GB(FP8);官方非量化命令要求 80GB。它的许可证是 Apache 2.0——真正免费,商业用途宽松,无营收门槛、无地区排除(适用 Apache 的标准条款,如署名声明;请查看模型卡)。\n\n**具体速度:** [Wan 2.2 官方仓库](https://github.com/Wan-Video/Wan2.2)称,在没有专门优化的情况下,轻量的 TI2V-5B 模型可在单张消费级 GPU 上用不到 9 分钟生成一段 5 秒的 720p 片段。这是开发方的数据,PromptQuorum 未核实,也不代表 14B 版本。该仓库称其 TI2V-5B 示例命令可在显存至少 24GB 的 GPU(如 RTX 4090)上运行,因此不要指望在 6–8GB 显卡上达到这一速度。20 秒的序列需要分别生成 4 段 5 秒片段,若每段都用时如上,原始生成时间不到 36 分钟,另需手动剪辑拼接。这是基于单段数据的换算,并非实测的 20 秒基准。',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2(Lightricks)——速度加同步声音',
        content:
          'LTX-2 是这三者中唯一能在单次生成中同步输出音视频的开放模型——脚步声、环境音和特效都随画面一起生成。它也定位为速度较快的模型,但显存占用并非最低(见下文数据)。其架构是一个 22B 扩散 Transformer;LTX-2.3(2026 年 3 月发布)与当前的 LTX-2.5 版本并行获得完整支持。许可证是 LTX 社区许可证——如果你公司的总营收低于每年 1000 万美元,可免费商用,超过该门槛需要付费商业许可证。(部分第三方文章错误地称其为 Apache 2.0——[官方许可证页面](https://ltx.io/model/license)才是唯一可靠的来源。)硬件需求为量化版 18–20GB 显存,完整精度 32GB 以上;在 12GB 显卡上,更老的 LTX-Video 0.9.5 仍是实际可行的选择。\n\n**具体速度:** LTX-2 常被描述为速度快,但我们没有找到经独立验证的 RTX 4090 单段生成时间,因此不予引用。对于更新的 LTX-2.5,开发方称在两颗数据中心级 NVIDIA GB200 超级芯片(并非消费级 GPU)上,6.8 秒即可生成一段 10 秒的 720p 图生视频片段([VentureBeat](https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights) 指出该数据来自厂商,未经独立验证)。它无法说明家用 GPU 能达到什么水平。',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5(腾讯)——电影感画面,但有法律隐患',
        content:
          '腾讯的这个 8.3B 模型于 2025 年 11 月发布,以电影感的光影和质感受到社区青睐,显存需求也比较适中:通过卸载最低需要 14GB,24GB 更舒适。它原生生成 480p/720p,通过内置超分辨率可达 1080p,片段最长 10 秒。\n\n**具体速度:** 腾讯的[代码仓库](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5)称,使用其 480p 图生视频步数蒸馏模型,单张 RTX 4090 可在 75 秒内生成一段视频。这是开发方的数据,PromptQuorum 未核实。该说明未给出片段时长,因此我们不据此推算更长的序列。',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: '许可证警告——下载前请先阅读。HunyuanVideo 1.5 使用的是腾讯混元社区许可证,不是 Apache 2.0。该许可证不适用于欧盟、英国或韩国——根据许可证文本,这些地区的用户无权使用该模型或其输出内容。此外,如果在模型发布日期的前一个月,你的产品月活跃用户超过 1 亿,则需向腾讯另行申请许可;并且禁止使用该模型或其输出内容改进其他 AI 模型(腾讯混元及其衍生模型除外)。如果你身处欧盟、英国或韩国,请跳过这个模型,考虑改用 Wan 2.2(Apache 2.0,商业用途宽松且无地区排除)。',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: '值得关注:MiniMax H3',
        content:
          'MiniMax H3 于 2026 年 8 月 3 日发布,是一个 33.1B 全模态模型,原生支持立体声音频,首日就获得 ComfyUI 支持,还提供可在 RTX 3060 上运行的量化版本。在把它当作第四选择之前有两点需要注意:本地版本上限为 768p(完整 2K 流水线仍仅限托管使用),而且其[社区许可证](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE)将欧盟、英国、韩国和美国排除在许可地区之外,年营收超过 2000 万美元还需另行授权——使用前请阅读原文(这不构成法律建议)。早期迹象良好,但近期发布和真正可用于生产环境是两回事。',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: '硬件门槛',
        content: [
          '本地视频生成的"免费"就像小狗是"免费"的一样:模型权重不花钱,但 GPU 才是真正的入场费。如果你的 GPU 显存低于 12GB 且不打算升级,就完全跳过本地生成——在这个档位以下只有量化的 Wan 2.2 TI2V-5B 变体可用,且只是入门级质量,云端平台很可能是更省事的选择。',
          '不确定这些数字对你的机器意味着什么?这些指南能帮你理清:[显存计算器](/zh/local-llms/vram-calculator-local-llm) 提供每个模型的确切要求,[你需要多少显存?](/zh/local-llms/how-much-vram-local-llm) 提供跨模型规模的图表,[本地 AI 最佳 GPU](/zh/local-llms/best-gpus-for-local-llms) 和 [最佳预算 GPU](/zh/local-llms/best-budget-gpus-local-llm) 提供硬件选购建议,[GPU vs CPU vs Apple Silicon](/zh/local-llms/gpu-vs-cpu-vs-apple-silicon) 提供平台比较。一个诚实的提醒:那些指南使用的是大语言模型显存公式(参数量 × 位数 ÷ 8)。视频扩散模型的显存需求还会随分辨率和片段长度变化,所以对视频工作负载而言,把那些数字当作下限而非上限来看待。',
        ],
        columns: ['你的 GPU', '你能运行什么'],
        rows: [
          { '你的 GPU': '6–8GB 显存', '你能运行什么': 'Wan 2.2 TI2V-5B(量化版)——可用,入门质量' },
          { '你的 GPU': '12GB 显存', '你能运行什么': 'LTX-Video 0.9.5——这个档位实用的选择' },
          { '你的 GPU': '16GB 显存', '你能运行什么': 'HunyuanVideo 1.5(许可证允许的情况下)、Wan 2.2 14B 的 GGUF Q3 版本' },
          { '你的 GPU': '24GB 以上显存', '你能运行什么': '三者均可:量化版 Wan 2.2 14B、量化版 LTX-2、HunyuanVideo 1.5(许可证允许时)' },
        ],
        note:
          'GPU 大致成本,来自 [InsiderLLM GPU 价格追踪页](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(eBay 美国挂牌数据,并非报价或要约):二手 RTX 3090 成交记录约 $1,500–1,725(中位数 $1,650;225 笔成交,2026 年 11 月 13–23 日;数据日期 2026-11-23)。二手 RTX 4090 成交记录在日期为 2026-10-15 的数据中为 $2,575–3,010(中位数 $2,860)。不同地区的价格可能有差异。GPU 价格会波动——购买前请核实当前价格,不要在几个月后仍相信这些数字。',
      },
      diyReality: {
        id: 'diy-reality',
        title: '运行本地视频生成实际需要做什么',
        content:
          '使用本地模型,你安装的不是一个视频工具——而是在组装一条流水线。\n\n**生成环境搭建。** ComfyUI 是基于节点的:你需要搭建,或导入并调试,一张由加载器、采样器和解码器组成的工作流图。在渲染出第一帧之前,预计会遇到 CUDA 版本不匹配、PyTorch 版本锁定,以及偶尔出现的 `flash_attn` 安装错误。\n\n**提示词编写。** 视频模型需要结构化提示词——镜头类型、运镜方式、光照、主体动作——而不是一句话。常见的 ComfyUI 工作流没有系统提示层。[Wan 2.2](https://github.com/Wan-Video/Wan2.2) 和 [HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) 的代码仓库提供提示词扩写或改写功能,但需要你自行配置单独的语言模型或 API。我们关于[系统提示词与用户提示词](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)和[本地模型的提示词工程](/zh/local-llms/prompt-engineering-for-local-models)的指南涵盖的基础知识可以直接迁移到视频提示词编写上。\n\n**片段之外的一切。** 本地模型输出的是 5–20 秒的原始无声片段(LTX 除外)。脚本、配音、音乐、素材片段、字幕和剪辑,每一项都是你需要自己挑选、安装并串联起来的独立工具。',
        promptExamples: [
          { label: '薄弱(一句话)', text: 'A dog on a beach' },
          { label: '结构化(视频模型需要的)', text: 'Golden retriever sprinting along a wet shoreline at golden hour, low tracking shot following from the side, shallow depth of field, warm backlight, gentle slow motion, cinematic 24fps' },
        ],
        note:
          '主体与动作、运镜方式、光照、风格——一句话里包含这四个要素,决定了你是在开老虎机还是在操作摄影机。如果这套 DIY 组合听起来很有意思,本地这扇门就属于你。如果听起来很累人,请继续往下看。',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: '云端这扇门:invideo 打包了什么',
        highlight: true,
        itemHeadings: true,
        content:
          'Invideo 只是云端这扇门的一个例子——不是唯一的一个,在假设"云端"就代表某一种固定形式之前,值得先了解它与其他方案的区别。据其公开描述(PromptQuorum 未测试这三项服务中的任何一项),Runway 直接集成进专业剪辑软件(Premiere Pro、Final Cut、DaVinci Resolve),面向的是 AI 加剪辑师混合工作流,而不是一段成品的完整视频。同样据其公开描述,Luma AI 的 Dream Machine 专攻原生 16 位 HDR 输出,面向视效合成流水线(After Effects、Nuke)——完全是另一批受众。同样据公开描述,Pika 侧重快速生成原始片段;PromptQuorum 未核实它是否提供脚本、配音或素材库组装功能,因此在依赖它完成片段之外的工作前请先确认。按 invideo 自己的介绍,它把分镜、脚本撰写和时间线剪辑与 Kling、Veo、Seedance 等生成模型的使用结合在一起。\n\nInvideo 并非单一的视频模型,而是一项托管服务。在 2026 年 11 月 27 日核查时,[其首页](https://invideo.io/)展示的是一款 AI 代理驱动的视频编辑器,支持根据脚本或创意生成分镜、撰写脚本,并提供多轨时间线;网站还列出了 AI 语音和音乐工具。PromptQuorum 未测试该服务,请自行确认配音和字幕功能能否满足你的需要。它在浏览器中运行——你的 GPU 无关紧要。\n\n对于想今天就开始制作视频、而不是研究 GPU 和量化格式的人来说,invideo 是实际的选择:不需要本地硬件,不需要安装 ComfyUI 或排查 CUDA 问题,还为片段之外的各个步骤提供托管工作空间。它尤其适合那些更在意成品视频、而不在意控制底层生成模型的创作者——由于存在免费套餐,你可以先弄清楚它是否适合你,再决定是否付费。\n\n就本文的对比而言,有三点值得关注:\n\n- **一个账户,多个模型。** invideo 定价页面称 Plus 和 Max 可使用全部模型,包括所有 Seedance 模型;Starter 仅含部分模型,不含 Seedance 2.5。模型阵容可能调整。\n- **内置代理接入。** invideo 提供 [MCP 服务器](https://invideo.io/ai/mcp),让 AI 代理可以在其时间线编辑器中工作。\n- **设有免费套餐。** invideo 的[套餐限制页面](https://invideo.io/help/billing/plan-limits/)说明该套餐有每周额度限制;使用前请核实导出和水印规则。\n\n**具体速度——以及诚实的隐患:** invideo 称原始生成速度很快。但 invideo 自己的 FAQ 指出,一部短片的完整端到端制作需要 2–5 天,而不是几分钟——因为真正耗时的是在多个生成选项中挑选和组装,而不是生成本身。[invideo 的 FAQ](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) 称,素材提早确定时,1–3 分钟影片以 2 天为下限。该数字针对成片,而上文的本地数字只涵盖未剪辑的 TI2V-5B 原始片段,两者无法直接比较。托管服务省去了本地搭建,但制作仍需时间。\n\ninvideo 列出的套餐(价格见 [invideo 定价页面](https://invideo.io/pricing/)):',
        blockquote:
          '**想在没有本地搭建的情况下制作 AI 视频?** 如果你没有强大的 GPU——或者只是不想花几个小时安装和配置本地 AI 视频工具——invideo 值得一试。[试用 invideo 免费版 →](https://invideo.io/pricing/)',
        columns: ['套餐', '每席位每月额度', '可用模型'],
        rows: [
          { '套餐': 'Free', '每席位每月额度': '每周限额', '可用模型': '见定价页面' },
          { '套餐': 'Starter', '每席位每月额度': '400', '可用模型': '部分模型;不含 Seedance 2.5' },
          { '套餐': 'Plus', '每席位每月额度': '2,000', '可用模型': '全部模型(据 invideo)' },
          { '套餐': 'Max', '每席位每月额度': '5,000 起', '可用模型': '全部模型(据 invideo)' },
        ],
        note:
          '套餐名称、额度和可用模型依据 2026 年 11 月 27 日核查的 invideo [定价页面](https://invideo.io/pricing/)和[套餐限制页面](https://invideo.io/help/billing/plan-limits/)。本文不列出价格:从欧洲访问时该页面显示限时优惠,而且套餐已与本指南此前列出的不同。在依赖任何细节之前,请查看实时页面。',
        affiliateLinks: [
          { url: 'https://invideo.io/pricing/', productName: 'invideo', productCategory: 'video-generation', label: '试用 invideo 免费版 →' },
        ],
      },
      decisionGuide: {
        id: 'decision-guide',
        title: '云端还是本地:哪扇门属于你?',
        content: '简版对照,映射到常见情况:',
        columns: ['你的情况', '建议'],
        rows: [
          { '你的情况': '没有 GPU,或显存低于 12GB', '建议': 'Invideo(云端)——这个档位以下的本地方案只属入门级' },
          { '你的情况': '想要带配音的成品视频,不是原始片段', '建议': 'Invideo(云端)——本地模型无法组装完整的成品' },
          { '你的情况': '截止日期紧迫,零容忍搭建折腾', '建议': 'Invideo(云端)' },
          { '你的情况': '拥有 12GB 以上显存 GPU,愿意折腾搭建,看重隐私和 0 边际成本', '建议': '本地:LTX-Video(12GB)或 Wan 2.2(量化版 14B 模型需 24GB)' },
          { '你的情况': '身处欧盟、英国或韩国', '建议': '本地仅限 Wan 2.2 或 LTX-2(HunyuanVideo 的许可证将你排除在外)' },
          { '你的情况': '需要大规模自动化/API 而不想自己搭建', '建议': 'Invideo(云端,MCP 服务器)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: '谁应该选择 invideo?',
        content:
          '**如果你符合以下情况,invideo 可能是更好的选择:**\n\n- 没有强大的 GPU\n- 想立刻开始制作视频\n- 不想安装和配置 ComfyUI、CUDA、模型或 Python 环境\n- 想要一体化工作流,而不是拼凑多个本地工具\n- 需要在同一个工作流中完成脚本、配音、音乐、字幕和视频生成\n- 更在意成品视频,而不是折腾底层模型\n\n**如果你符合以下情况,本地 AI 可能是更好的选择:**\n\n- 已经拥有合适的 GPU 硬件\n- 想要最大程度的控制权\n- 想要试验模型和工作流\n- 具备较强的技术能力\n- 优先考虑让生成过程保持本地可控\n- 预计会有非常大的生成量,想优化边际生成成本',
        blockquote:
          '**不确定哪条路适合你?** 如果你想避开硬件和技术搭建,最简单的实验就是直接试用 invideo,看看它的工作流是否适合你的需求。[免费试用 invideo →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: '看它们实际运行',
        items: [
          '[4 款开源 AI 视频模型对比——哪一个真正免费?](https://www.youtube.com/watch?v=NHdYVssM6Aw)——LTX 2.3、Wan 2.2、HunyuanVideo 1.5 和 MiniMax H3 的并排输出对比,包含许可证细则。',
          '[Invideo Agent One 评测](https://www.youtube.com/watch?v=uUHO9byu0c0)——从提示词到成品视频的完整工作流。',
          '[Wan 2.2 完整本地演示](https://www.youtube.com/watch?v=fs62ML_ZgEs)——消费级硬件上的真实渲染时间(发布周,2025 年 7 月)。',
          '[低显存 Wan 2.2 教程](https://www.youtube.com/watch?v=tQu0DjtOEyg)——在 6GB 显存的笔记本电脑上运行 14B 模型(2025 年)。',
        ],
        note:
          '以上均为第三方视频,并非由 PromptQuorum 或 invideo 制作。仅供参考——不代表对相关频道或其其他内容的认可。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我能在 8GB 显存上运行 AI 视频生成吗?',
            a: '勉强可以。Wan 2.2 的 TI2V-5B 版本可在 6–8GB 量化条件下运行,但质量降低、片段较短。对于正经的模型,12GB 才是真正的底线——低于这个数字,像 invideo 这样的云端工具是更实际的答案。',
          },
          {
            q: 'Wan 2.2 真的可以免费商用吗?',
            a: '是的。它采用 Apache 2.0 许可——商业用途宽松,无营收门槛、无地区排除(适用 Apache 的标准条款,如署名声明;请查看模型卡),也不对你的输出内容主张任何权利。它是顶级本地模型中许可较为宽松的一个。',
          },
          {
            q: '我能在欧盟或英国使用 HunyuanVideo 吗?',
            a: '按许可证文本,不能。腾讯混元社区许可证规定不适用于欧盟、英国或韩国——根据许可证文本,这既包括模型本身,也包括其输出内容。请自行核对许可证(这不构成法律建议),并考虑改用 Wan 2.2 或 LTX-2。',
          },
          {
            q: '使用 invideo 需要 GPU 吗?',
            a: '不需要。Invideo 完全在浏览器中运行;所有生成过程都在他们的基础设施上完成。一台普通笔记本电脑应该就够用。',
          },
          {
            q: '本地模型能生成一段带配音的完整 YouTube 视频吗?',
            a: '单靠它们本身不行。本地模型生成的是 5–20 秒的原始片段(LTX-2 包含同步音频;其他都是无声的)。脚本、配音、音乐、字幕和剪辑各自需要单独的工具,由你自己组装成一条流水线。',
          },
          {
            q: '"免费"的本地 AI 视频实际的代价是什么?',
            a: '硬件成本(一块够强的 GPU)、搭建时间(ComfyUI 及其各种依赖),以及围绕原始输出片段所需的 DIY 流水线。模型权重不按生成次数收费;但硬件和电费仍需花钱。',
          },
          {
            q: '有 Wan 2.7 或更新的 Wan 模型吗?',
            a: '在 2026 年 11 月 27 日核查时,Wan 官方 GitHub 页面上没有更新的开放权重仓库。阿里巴巴于 2026 年 4 月发布了 [Wan2.7-Video](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009),称其可在阿里云上使用。请谨慎对待其他提供"Wan 2.7 权重"的网站——只从官方 GitHub 或 Hugging Face 仓库下载。',
          },
          {
            q: '我是完全的新手,应该从哪里开始?',
            a: '借助 Invideo 的免费套餐,你无需购买硬件就能试用云端工作流,判断 AI 视频是否符合你的目标;该套餐有使用限制。如果之后你买了一块够强的 GPU,想要完全的控制权和隐私,本地这扇门依然敞开。',
          },
          {
            q: '在 Mac 和 Windows 上运行这些本地模型有什么区别?',
            a: 'ComfyUI 可以通过 PyTorch 的 MPS 后端在 Apple Silicon(M1–M4)上运行。请预期其生成速度慢于同等级的 NVIDIA GPU;我们没有受控基准测试,不给出速度倍数。更实际的问题在于软件支持:这些模型依赖的 CUDA 专属优化(flash-attention、GGUF/FP8 量化工具)在 Mac 上远不够成熟,因此不少社区工作流和安装指南默认使用 Windows 或 Linux 加 NVIDIA 显卡,可能需要调整,或者干脆无法按文档运行。一个优势是:Apple Silicon 的统一内存能让你装下比同等显存的独立 GPU 更大的模型,尽管运行速度较慢。如果你是专门为本地视频生成购买硬件,Windows 或 Linux 加 NVIDIA 是支持完善的路线;如果你已经有一台 Mac,拿来做实验没问题,但不建议作为追求高产量的目标平台。',
          },
          {
            q: '我能在多个本地视频片段之间保持同一个角色一致吗?',
            a: '可以,但需要额外的功夫——这三个模型都不会在不同的独立生成之间自动保证这一点。两种有效的方法是:把同一张参考图片输入图像转视频模式(三者都支持 I2V),或者为你的角色训练一个小型 LoRA。Wan 2.2 和 LTX-2 都有针对这个用途的成熟 LoRA 工作流——LTX-2 的版本叫 IC-LoRA(上下文内 LoRA),明确支持多角色一致性。针对角色训练 LoRA 是更费工夫的路线,目标是比单靠提示词或单张参考图获得更一致的结果;差距有多大我们未做测试。Invideo 的品牌套装和 AI 数字人功能用不同的方式解决了同一个底层问题——一个只需配置一次、可反复使用的固定数字人和声音档案,无需训练。',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: '决定前先试用',
        content:
          '你不需要为了评估云端工作流而先投入一套本地 GPU 配置——或一份付费订阅。在购买硬件或花一个周末折腾 ComfyUI 之前,值得先花五分钟反过来试一试:\n\n1. 试用 invideo 的免费版本。\n2. 制作一段短视频。\n3. 评估输出质量以及工作流的使用体验。\n4. 将这次体验与本地安装所需的搭建成本做对比。\n\n这样一来,这个对比就从"读来的信息"变成了"你自己能测试的东西",而且花费的时间比读完本文剩余部分还要短。',
        blockquote:
          '[试用 invideo 免费版 →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '如果你拥有(或打算购买)12GB 以上显存的 GPU,喜欢自己搭建工具,并且看重隐私和不按片段收费的生成胜过便利性,那就选本地。Wan 2.2 是稳妥的基础选项——高质量、Apache 2.0——LTX-2 则是速度与音频方面的专才。\n\n如果你没有硬件、不想折腾搭建,或者需要成品视频而不是原始片段,那就选云端。对大多数只是想制作 AI 生成视频的人来说,云端路线是更轻松的起点:如果你本来就没有本地生成所需的硬件和技术兴趣,invideo 这类托管服务可以免去本地搭建。有免费套餐可供测试;付费套餐及其限制见 invideo 定价页面。判断它是否适合你工作流最简单的方法,就是先试用免费版本。\n\n两扇门都通向 AI 视频。问题从来不是哪种技术更好——而是哪种工作流适合你的设备、你的耐心和你的目标。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Wan 2.2 on GitHub](https://github.com/Wan-Video/Wan2.2)——官方仓库、许可证和安装说明。',
          '[Wan 2.2 on Hugging Face](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B)——官方模型卡及下载。',
          '[LTX model license](https://ltx.io/model/license)——LTX 社区许可证官方条款。',
          '[LTX-2 model page](https://ltx.io/model/ltx-2-3)——官方架构和发布详情。',
          '[HunyuanVideo 1.5 on GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5)——官方仓库和 LICENSE 文件,包含欧盟/英国/韩国排除条款。',
          '[Engadget: ByteDance has reportedly suspended the global rollout of its new AI video generator](https://www.engadget.com/ai/bytedance-has-reportedly-suspended-the-global-rollout-of-its-new-ai-video-generator-212326112.html)——2026 年 3 月的媒体报道(英文)。',
          '[Alibaba Cloud Community:Wan2.7-Video 发布公告](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video_603009)——2026 年 4 月(英文)。',
          '[invideo 套餐限制](https://invideo.io/help/billing/plan-limits/)——官方套餐及额度限制。',
          '[Invideo pricing](https://invideo.io/pricing/)——官方套餐及定价详情。',
          '[Invideo MCP server](https://invideo.io/ai/mcp)——官方自动化文档。',
          '[MiniMax H3 on GitHub](https://github.com/MiniMax-AI/MiniMax-H3)——官方仓库。',
          '[MiniMax H3 on Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3)——官方模型权重。',
          '[Invideo: How Long Does It Take to Make an AI Short Film?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/)——invideo 自己给出的端到端制作时间数据(2–5 天)。',
          '[ComfyUI system requirements](https://docs.comfy.org/installation/system_requirements)——官方 Mac/Apple Silicon MPS 支持文档。',
          '[LTX Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2)——官方角色一致性(IC-LoRA)指南。',
          '[InsiderLLM: NVIDIA GPU price tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)——二手 GPU 价格数据的来源(美国 eBay 挂牌数据)。',
          '[Runway](https://runwayml.com/)——官方网站;上文引用的公开描述的依据(PromptQuorum 未测试)。',
          '[Luma AI](https://lumalabs.ai/)——官方网站;上文引用的公开描述的依据(PromptQuorum 未测试)。',
          '[Pika](https://pika.art/)——官方网站;上文引用的公开描述的依据(PromptQuorum 未测试)。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[AnimateDiff 2026指南：让Stable Diffusion模型动起来](/zh/power-local-llm/animatediff-video-generation-guide)——针对单一工具的深度指南,用于为现有SD1.5/SDXL检查点和LoRA添加动画,与本文比较的原生视频模型不同。',
          '[本地 AI 图像生成 vs 云端](/zh/power-local-llm/local-ai-image-generation-vs-cloud)——姊妹篇,结构相同,主题是图像而非视频。',
          '[本地模型显存计算器](/zh/local-llms/vram-calculator-local-llm)——每个模型和量化方式的确切显存要求。',
          '[你需要多少显存?](/zh/local-llms/how-much-vram-local-llm)——涵盖 7B 到 70B 模型规模的图表。',
          '[2026 年本地 AI 最佳 GPU](/zh/local-llms/best-gpus-for-local-llms)——按预算档位推荐硬件。',
          '[本地 AI 最佳预算 GPU](/zh/local-llms/best-budget-gpus-local-llm)——入门级硬件选项。',
          '[GPU vs CPU vs Apple Silicon](/zh/local-llms/gpu-vs-cpu-vs-apple-silicon)——本地推理的平台对比。',
          '[系统提示词 vs 用户提示词](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)——可迁移到视频提示词编写的结构化提示词基础知识。',
          '[本地模型的提示词工程](/zh/local-llms/prompt-engineering-for-local-models)——结构化提示词技巧。',
          '[OpenShorts评测](/zh/power-local-llm/openshorts-review)和[pyVideoTrans评测](/zh/power-local-llm/pyvideotrans-review) — 两款处理现有视频而非生成视频的工具：一款把长视频剪成带字幕的竖屏片段，另一款负责视频翻译与配音。',
        ],
      },
    },
  },
}
