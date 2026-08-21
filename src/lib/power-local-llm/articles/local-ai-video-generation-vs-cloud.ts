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
    dateModified: '2026-08-21',
    next_refresh_due: '2027-02-21',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'InVideo vs Local AI Video: One Costs $0 Plus Your Weekend — the Other Costs $17',
    seoTitle: 'Cloud vs Local AI Video 2026: InVideo vs Wan 2.2 & LTX-2',
    intro:
      'There are two doors into AI video in 2026. Door one is local: free, open video models running on your own GPU — unlimited generations, fully private, no subscription, but you build the entire workflow yourself. Door two is cloud: InVideo, where one prompt in gets you a finished narrated video out — script, stock footage, voiceover, music, and subtitles included, straight from your browser. Neither door is "better." This guide gives you the license fine print most comparisons skip, the real hardware requirements, and a decision tool that maps your situation to a recommendation.',
    metaDescription:
      'Local AI video models (Wan 2.2, LTX-2, HunyuanVideo) are free if your GPU can run them. InVideo\'s cloud does everything for $17/mo. Honest comparison: VRAM, licenses, fine print.',
    twitterDescription:
      'Cloud vs local AI video in 2026: InVideo bundles everything for $17/mo. Wan 2.2, LTX-2, HunyuanVideo run free on your own GPU — if it\'s big enough. Honest comparison.',
    audience:
      'Creators and developers deciding between free local video generation on their own GPU and InVideo\'s all-in-one cloud pipeline — covers hardware requirements, licensing fine print, and workflow tradeoffs.',
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
      '**For most people with a 12GB+ GPU, Wan 2.2 is the best local AI video model in 2026** — Apache 2.0 licensed with no revenue caps or territory restrictions, and the highest publicly verified quality score (VBench ~84.7%) of any open model, completely free. **InVideo is the better choice if you don\'t have that GPU, or want a finished narrated video rather than a raw clip** — its Plus plan, starting at $17/month (billed annually), bundles 200+ models (including Kling 3, Veo 3.1, and Seedance 2.5) into a single browser-based pipeline with script, voiceover, music, and subtitles included. **HunyuanVideo 1.5 has the most cinematic local look but its license excludes the EU, UK, and South Korea entirely** — skip it if you\'re in those regions.',
    quickAnswerTop: {
      en: {
        question: 'Should I generate AI video locally or use InVideo\'s cloud pipeline?',
        answer:
          'Generate locally if you have a 12GB+ GPU, want unlimited $0 generations, and value privacy — Wan 2.2 (Apache 2.0, no restrictions) is the safest starting point. Use InVideo if you don\'t have suitable hardware, don\'t want to manage the setup, or need a complete finished video (script, voiceover, music, subtitles) rather than a raw clip — its Plus plan starts at $17/month (billed annually).',
        bullets: [
          'Under 12 GB VRAM → InVideo is the practical choice; local models are unusable below this tier for serious quality.',
          '12 GB VRAM → LTX-Video 0.9.5, the only serious local option at this tier.',
          '16–24 GB+ VRAM → Wan 2.2 (top quality, Apache 2.0, zero restrictions) or LTX-2 (speed + synchronized audio).',
          'In the EU, UK, or South Korea → HunyuanVideo 1.5\'s license excludes you; use Wan 2.2 or LTX-2 instead.',
          'Need a finished narrated video, not a raw clip → local models only generate silent (LTX excepted) 5–20 second clips; InVideo handles the full production pipeline, starting at $17/month (billed annually).',
        ],
        updatedDate: '2026-08-21',
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
      { label: 'The Cloud Door: What InVideo Bundles', anchor: '#invideo-bundle' },
      { label: 'Cloud or Local: Which Door Is Yours?', anchor: '#decision-guide' },
      { label: 'Who Should Choose InVideo?', anchor: '#who-should-choose' },
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
          '**Wan 2.2 is the only top-tier local video model with zero license restrictions.** Apache 2.0, unrestricted commercial use, no revenue caps, no territory exclusions — and the highest verified open-source VBench quality score (~84.7%).',
          '**InVideo bundles 200+ models — including Kling 3, Veo 3.1, and Seedance 2.5 — into one browser-based pipeline** starting at $17/month (Plus plan, billed annually), with script, voiceover, music, and subtitles handled automatically.',
          '**HunyuanVideo 1.5\'s license explicitly excludes the EU, UK, and South Korea** — for both the model and its outputs. Readers in those regions should use Wan 2.2 or LTX-2 instead.',
          '**LTX-2 is the fastest of the local trio and the only one with built-in synchronized audio**, free commercially for companies under $10M annual revenue.',
          '**12GB VRAM is the realistic floor for serious local video generation.** Below that, InVideo becomes the more practical option.',
          '**Local models generate raw silent clips of 5–20 seconds, not finished videos.** Script, voiceover, music, subtitles, and editing are separate tools you assemble yourself — InVideo does all of this in one pass.',
          '**There is no "Wan 2.7."** Download pages offering it are SEO scams — official Wan releases stop at 2.2.',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Why 2026 Is a Strange Moment for AI Video',
        content:
          'The proprietary video market has been chaotic. OpenAI shut down the Sora consumer app in March 2026, less than six months after launch, after downloads fell roughly 66% from their peak (the API remains live separately). ByteDance\'s Seedance 2.0 ran into Hollywood lawsuits and a paused global rollout the same month, after cease-and-desist letters from Disney, Paramount, and Warner Bros. — it remains accessible in China but carries legal risk for international commercial use. Alibaba\'s HappyHorse model topped the quality leaderboards in April 2026 — and never opened to the public.\n\nThat chaos is exactly what makes both doors attractive. Open local models make you independent of vendor drama. And InVideo absorbs the drama for you: its subscription bundles access to 200+ models — including Kling 3, Veo 3.1, and Seedance 2.5 — so when one model disappears or gets sued, your workflow doesn\'t notice.',
      },
      localModels: {
        id: 'local-models',
        title: 'The Local Door: Three Free Models on Your Own GPU',
        content:
          'Three open-weights systems dominate local video generation right now, measured by downloads, community activity, and benchmark results. All three run through ComfyUI, a node-based interface installed on your own machine — not a chat-style tool like Ollama. These are diffusion models, not LLMs.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 is the best all-around local video model in 2026 — Apache 2.0, highest quality, no restrictions — while LTX-2 wins on speed and synchronized audio, and HunyuanVideo 1.5 offers the most cinematic look but excludes EU/UK/South Korea users by license.' },
          { type: 'plain-terms', text: 'If you just want one answer: get a 12GB+ GPU and run Wan 2.2. It has the best quality, the simplest license, and no fine print.' },
        ],
        columns: ['Model', 'License', 'VRAM', 'Output', 'Standout feature'],
        rows: [
          { 'Model': 'Wan 2.2 (Alibaba)', 'License': 'Apache 2.0 — unrestricted', 'VRAM': '6–8GB (5B) / 15–25GB (14B)', 'Output': '480p/720p, ~5s clips', 'Standout feature': 'Highest verified VBench quality (~84.7%)' },
          { 'Model': 'LTX-2 (Lightricks)', 'License': 'LTX Community License — free under $10M revenue', 'VRAM': '18–20GB quantized, 32GB+ full', 'Output': '480p–1080p, 5–20s, with audio', 'Standout feature': 'Only model with synchronized audio+video in one pass' },
          { 'Model': 'HunyuanVideo 1.5 (Tencent)', 'License': 'Tencent Community License — excludes EU/UK/South Korea', 'VRAM': '14GB minimum, 24GB comfortable', 'Output': '480p/720p, up to 10s', 'Standout feature': 'Community favorite for cinematic lighting; lightest on VRAM' },
        ],
        note:
          '⚠️ Scam alert: there is no "Wan 2.7." Download pages claiming to offer "Wan 2.7 open weights" are SEO scams. Official Wan releases stop at 2.2 — only download from the official GitHub or Hugging Face repositories linked below.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — the quality king, truly free',
        content:
          'Wan 2.2 is the most widely deployed open video model: its I2V-A14B repository alone recorded roughly 4.24 million Hugging Face downloads in a single month, with hundreds of community derivatives built on top. It ships in three variants — T2V-A14B and I2V-A14B (mixture-of-experts, 27B total / 14B active parameters), plus a compact TI2V-5B that handles both text- and image-to-video on as little as 6–8GB VRAM. The 14B tier needs 15GB (GGUF Q3) to 25GB (FP8); the official unquantized command asks for 80GB. Its license is Apache 2.0 — genuinely free, unrestricted commercial use, no revenue thresholds, no territory exclusions.\n\n**Speed, concretely:** a single 5-second clip takes roughly 4–9 minutes on an RTX 4090 (one independently reported figure — Wan 2.2 doesn\'t natively output longer clips in one pass). To build a 20-second sequence, you\'d generate 4 separate 5-second clips and stitch them — call it 16–36 minutes of raw generation time, plus manual editing to join them smoothly. That range is an extrapolation from the per-clip figure, not a directly measured 20-second benchmark.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — speed plus synchronized sound',
        content:
          'LTX-2 is the only open model in this trio that generates synchronized audio and video in a single pass — footsteps, ambience, and effects arrive with the picture. It is also the fastest of the three and the most forgiving on hardware. The architecture is a 22B diffusion transformer; LTX-2.3 (March 2026) remains fully supported alongside the current LTX-2.5 release. The license is the LTX Community License — free for commercial use if your company\'s total revenue is under $10M per year, with a paid commercial license required above that threshold. (Some third-party write-ups incorrectly call it Apache 2.0 — the [official license page](https://ltx.io/model/license) is the only reliable source.) Hardware needs run 18–20GB VRAM quantized, 32GB+ at full precision; on 12GB cards, the older LTX-Video 0.9.5 remains the practical choice.\n\n**Speed, concretely:** LTX-2 is qualitatively the fastest of the trio, with near-real-time previews on high-end consumer cards — but no independently verified minutes-per-clip figure on an RTX 4090 exists as of this writing, so we won\'t invent one. The one hard number available is from Lightricks\' own benchmark on datacenter-class "Nvidia superchips" (not a consumer GPU): a 10-second clip in about 6.8 seconds. Treat that as a ceiling for what the architecture can do on serious hardware, not what your home rig will see.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — the cinematic look, with a legal catch',
        content:
          'Tencent\'s 8.3B model, released November 2025, is a community favorite for cinematic lighting and texture, and the lightest of the trio on VRAM: 14GB minimum with offloading, 24GB comfortable, at roughly 75 seconds per 480p clip on an RTX 4090. It generates 480p/720p natively, up to 1080p via built-in super-resolution, clips up to 10 seconds.\n\n**Speed, concretely:** at ~75 seconds per 5-second 480p clip, that\'s roughly 15 seconds of render time per second of video. Its native max clip length is 10 seconds, so a 20-second sequence means two generations at max length — extrapolating the per-second rate, call it roughly 5 minutes of raw generation for 20 seconds of footage, before stitching. This is an extrapolation from the sourced 5-second figure, not a directly measured 10-second or 20-second benchmark.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'License warning — read before downloading. HunyuanVideo 1.5 uses the Tencent Hunyuan Community License, not Apache 2.0. The license does not apply in the European Union, the United Kingdom, or South Korea — users in those regions are not authorized to use the model or its outputs. It also caps use at 100 million monthly active users and prohibits training competing models on its outputs. If you\'re in the EU, UK, or South Korea, skip this model: Wan 2.2 covers the same quality tier with zero restrictions.',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'One to Watch: MiniMax H3',
        content:
          'Released August 3, 2026, MiniMax H3 is a 33.1B omni-modal model with native stereo audio, day-one ComfyUI support, and quantized versions that run on an RTX 3060. Two caveats before treating it as a fourth pick: the local release caps at 768p (the full 2K pipeline stays hosted-only), and its Community License reportedly carries its own geographic restrictions and a $20M revenue threshold — check the official model card before committing. Early signs are strong, but three weeks old and production-ready are different things.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'The Hardware Gate',
        content: [
          'Local video generation is free the way a puppy is free: the model weights cost nothing, but the GPU is the real price of entry. Skip local generation entirely if your GPU has under 12GB VRAM and you\'re not planning to upgrade — none of the three models above run at usable quality below that tier, and a cloud platform will get you better output faster.',
          'Not sure what any of this means for your machine? These guides break it down: [VRAM Calculator](/local-llms/vram-calculator-local-llm) for exact requirements per model, [How Much VRAM Do You Need?](/local-llms/how-much-vram-local-llm) for charts across model sizes, [Best GPUs for Local AI](/local-llms/best-gpus-for-local-llms) and [Best Budget GPUs](/local-llms/best-budget-gpus-local-llm) for hardware picks, and [GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon) for platform comparisons. One honest caveat: those guides use the LLM VRAM formula (parameters × bits ÷ 8). Video diffusion models also scale VRAM with resolution and clip length, so treat their numbers as a floor, not a ceiling, for video workloads.',
        ],
        columns: ['Your GPU', 'What you can run'],
        rows: [
          { 'Your GPU': '6–8GB VRAM', 'What you can run': 'Wan 2.2 TI2V-5B (quantized) — usable, entry quality' },
          { 'Your GPU': '12GB VRAM', 'What you can run': 'LTX-Video 0.9.5 — the only serious option at this tier' },
          { 'Your GPU': '16GB VRAM', 'What you can run': 'HunyuanVideo 1.5 (license permitting), Wan 2.2 14B at GGUF Q3' },
          { 'Your GPU': '24GB+ VRAM', 'What you can run': 'Everything: Wan 2.2 14B at high quality, LTX-2 quantized' },
        ],
        note:
          'Rough hardware cost as of August 2026: a used RTX 3060 12GB runs about $170–220, a used RTX 3090 stack about $900–1,100. GPU prices move — verify current pricing before buying rather than trusting these figures past a few months.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'What Running Local Video Generation Actually Involves',
        content:
          'With local models, you are not installing a video tool — you are assembling a pipeline.\n\n**The generation setup.** ComfyUI is node-based: you build, or import and debug, a workflow graph of loaders, samplers, and decoders. Expect CUDA version mismatches, PyTorch pins, and the occasional `flash_attn` install error before your first frame renders.\n\n**The prompting.** Video models need structured prompts — shot type, camera movement, lighting, subject action — not one-liners. There is no built-in prompt helper and no system-prompt layer; you write the full structure yourself. Our guides on [system prompts vs. user prompts](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) and [prompt engineering for local models](/local-llms/prompt-engineering-for-local-models) cover fundamentals that transfer directly to video prompting.\n\n**Everything around the clip.** Local models output raw, silent (LTX excepted) clips of 5–20 seconds. Script, voiceover, music, stock footage, subtitles, and editing are each separate tools you choose, install, and wire together yourself.',
        promptExamples: [
          { label: 'Weak (one-liner)', text: 'A dog on a beach' },
          { label: 'Structured (what video models need)', text: 'Golden retriever sprinting along a wet shoreline at golden hour, low tracking shot following from the side, shallow depth of field, warm backlight, gentle slow motion, cinematic 24fps' },
        ],
        note:
          'Subject and action, camera behavior, lighting, style — four ingredients in one sentence is the difference between a slot machine and a camera. If that DIY stack sounds exciting, the local door is yours. If it sounded exhausting, keep reading.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'The Cloud Door: What InVideo Bundles',
        sponsoredSlot: true,
        content:
          'InVideo is one example of the cloud door — not the only one, and it\'s worth knowing how it differs from the others before assuming "cloud" means one thing. Runway integrates directly into professional editors (Premiere Pro, Final Cut, DaVinci Resolve), aimed at hybrid AI-plus-editor workflows rather than a finished, assembled video. Luma AI\'s Dream Machine specializes in native 16-bit HDR output for VFX compositing pipelines (After Effects, Nuke) — a different audience entirely. Pika stays lightweight: fast raw clip generation with no built-in script, voiceover, or stock-footage assembly, so you still need separate tools for everything around the clip — the same DIY-pipeline problem as running a local model, just without the GPU requirement. What sets InVideo apart from all three is that it isn\'t primarily a raw-generation tool: it\'s a script-to-finished-video assembler that also gives you access to raw generation models (Kling, Veo, Seedance) when you need them.\n\nInVideo is not a video model — it\'s the whole production pipeline as a service. You type a topic or paste a script; its v4 agent returns a finished video of up to 30 minutes: AI-generated script, scenes assembled from a 16M+ asset stock library or freshly generated clips, AI voiceover in 50+ languages (including voice cloning), music, subtitles, and brand-kit styling. It runs in the browser — your GPU is irrelevant.\n\nFor anyone who wants to start making videos today rather than researching GPUs and quantization formats, InVideo is the practical choice: no local hardware requirement, no ComfyUI installation or CUDA troubleshooting, and a single workflow that already includes the script, voiceover, music, and subtitles most people actually need. It\'s particularly well suited to creators who care more about the finished video than about controlling the underlying generation model — and since the free tier exists, you can find out whether that fits before spending anything.\n\nThree things stand out for this comparison:\n\n- **Model chaos, absorbed.** All paid plans include access to 200+ models — Seedance 2.5, Veo 3.1, and Kling 3 among them. When a model gets sued or shut down, InVideo swaps it; your workflow continues.\n- **Automation is built in, not bolted on.** There\'s an official MCP server, so the entire prompt → script → footage → subtitles pipeline can be triggered programmatically — the kind of harness you\'d otherwise build yourself around ComfyUI.\n- **The free tier is a real test drive.** Watermarked and minute-limited, but enough to judge output quality before paying.\n\n**Speed, concretely — and the honest catch:** a single raw generation is fast, typically minutes. But InVideo\'s own FAQ puts full end-to-end production of a short film at 2–5 days, not minutes — because choosing and assembling among multiple generated options, not the generation itself, is what takes the time. Treat "2 days as a realistic floor" for a 1–3 minute finished film as the fair comparison point against the local door\'s 16–36 minutes of raw generation for 20 seconds of unedited footage: InVideo trades your setup and editing time for its own production time, it doesn\'t eliminate time entirely.\n\nCurrent plans, starting at $17/month (Plus plan, billed annually, verified August 2026 — check [InVideo\'s pricing page](https://invideo.io/pricing/) for live figures):',
        blockquote:
          '**Want to create AI videos without the local setup?** If you don\'t have a powerful GPU — or simply don\'t want to spend hours installing and configuring local AI video tools — InVideo is worth trying. [Try InVideo\'s free version →](https://invideo.io/pricing/)',
        columns: ['Plan', 'Price', 'Credits/mo', 'Best for'],
        rows: [
          { 'Plan': 'Free', 'Price': '$0', 'Credits/mo': 'limited', 'Best for': 'Testing the waters (watermarked)' },
          { 'Plan': 'Plus', 'Price': '$17/mo ($200/yr)', 'Credits/mo': '75', 'Best for': 'Regular creators — all AI models, 4 avatars & voice clones, 100 iStock assets, unlimited watermark-free exports' },
          { 'Plan': 'Max', 'Price': '$85/mo ($1,000/yr)', 'Credits/mo': '390', 'Best for': 'High-volume channels, 16 avatars' },
          { 'Plan': 'Generative', 'Price': '$170/mo ($2,000/yr)', 'Credits/mo': '800+', 'Best for': 'Short-film / production volume' },
          { 'Plan': 'Elite', 'Price': '$900/mo ($10,800/yr)', 'Credits/mo': '4,250+', 'Best for': 'Episodic and commercial scale' },
        ],
        note:
          'All prices above are annual-billing rates as of August 2026 — paying month-to-month costs more (InVideo\'s own FAQ cites Plus $20, Max $100, Generative $200, Elite $1,000 per month). Check InVideo\'s live pricing page before relying on any figure here; plans and prices change.',
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Cloud or Local: Which Door Is Yours?',
        content: 'The short version, mapped to common situations:',
        columns: ['Your situation', 'Recommendation'],
        rows: [
          { 'Your situation': 'No GPU, or under 12GB VRAM', 'Recommendation': 'InVideo (cloud) — no local model runs well below this tier' },
          { 'Your situation': 'Want a finished video with voiceover, not raw clips', 'Recommendation': 'InVideo (cloud) — local models don\'t assemble a full production' },
          { 'Your situation': 'Deadline-driven, zero setup tolerance', 'Recommendation': 'InVideo (cloud)' },
          { 'Your situation': '12GB+ GPU, comfortable with setup, want privacy and $0 marginal cost', 'Recommendation': 'Local: LTX-Video (12GB) or Wan 2.2 (24GB for full quality)' },
          { 'Your situation': 'In the EU, UK, or South Korea', 'Recommendation': 'Local = Wan 2.2 or LTX-2 only (HunyuanVideo\'s license excludes you)' },
          { 'Your situation': 'Need automation/API at scale without building it', 'Recommendation': 'InVideo (cloud, MCP server)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'Who Should Choose InVideo?',
        content:
          '**InVideo is probably the better choice if you:**\n\n- Don\'t own a powerful GPU\n- Want to start creating videos immediately\n- Don\'t want to install and configure ComfyUI, CUDA, models, or Python environments\n- Want an integrated workflow rather than assembling multiple local tools\n- Need scripts, voice, music, subtitles, and video generation in one workflow\n- Care more about finished videos than experimenting with the underlying models\n\n**Local AI is probably the better choice if you:**\n\n- Already own suitable GPU hardware\n- Want maximum control\n- Want to experiment with models and workflows\n- Have strong technical skills\n- Prioritize keeping generation locally controlled\n- Expect to generate very large volumes and want to optimize marginal generation cost',
        blockquote:
          '**Not sure which route is right for you?** If you want to avoid the hardware and technical setup, the easiest experiment is simply to try InVideo and see whether its workflow fits your needs. [Try InVideo for free →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'See Them in Action',
        items: [
          '[4 Open Source AI Video Models Compared — Which One\'s Actually Free?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — side-by-side output of LTX 2.3, Wan 2.2, HunyuanVideo 1.5, and MiniMax H3, including the license fine print.',
          '[InVideo Agent One Review](https://www.youtube.com/watch?v=uUHO9byu0c0) — the full prompt-to-finished-video workflow.',
          '[Wan 2.2 Full Local Demo](https://www.youtube.com/watch?v=fs62ML_ZgEs) — honest render times on consumer hardware (launch week, July 2025).',
          '[Low-VRAM Wan 2.2 Tutorial](https://www.youtube.com/watch?v=tQu0DjtOEyg) — running the 14B model on a 6GB laptop (2025).',
        ],
        note:
          'These are third-party videos, not produced by PromptQuorum or InVideo. Included for reference only — no endorsement of the channel or its other content is implied.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can I run AI video generation on 8GB of VRAM?',
            a: 'Barely. Wan 2.2\'s TI2V-5B variant runs on 6–8GB quantized, at reduced quality and short clip lengths. For the serious models, 12GB is the real floor — and below that, a cloud tool like InVideo is the practical answer.',
          },
          {
            q: 'Is Wan 2.2 really free for commercial use?',
            a: 'Yes. It\'s Apache 2.0 — unrestricted commercial use, no revenue caps, no territory exclusions, no rights claimed over your outputs. It\'s the only one of the top local models with zero license fine print.',
          },
          {
            q: 'Can I use HunyuanVideo in the EU or UK?',
            a: 'No. The Tencent Hunyuan Community License explicitly does not apply in the EU, UK, or South Korea — that covers both the model itself and its outputs. Use Wan 2.2 or LTX-2 instead.',
          },
          {
            q: 'Do I need a GPU to use InVideo?',
            a: 'No. InVideo runs entirely in the browser; all generation happens on their infrastructure. A five-year-old laptop works fine.',
          },
          {
            q: 'Can local models produce a complete YouTube video with voiceover?',
            a: 'Not by themselves. Local models generate raw clips of 5–20 seconds (LTX-2 includes synchronized audio; the others are silent). Script, voiceover, music, subtitles, and editing each require separate tools that you assemble into a pipeline yourself.',
          },
          {
            q: 'What\'s the actual catch with "free" local AI video?',
            a: 'Hardware cost (a capable GPU), setup time (ComfyUI and its dependencies), and the DIY pipeline required around the raw output clips. The model weights themselves genuinely cost $0 per generation, forever.',
          },
          {
            q: 'Is there a Wan 2.7 or newer Wan model?',
            a: 'No. Official Wan releases stop at 2.2. Any site offering "Wan 2.7 weights" is a scam — download only from the official GitHub or Hugging Face repositories.',
          },
          {
            q: 'I\'m a complete beginner. Where should I start?',
            a: 'InVideo\'s free tier — you\'ll have a finished, narrated video in minutes and can judge whether AI video serves your goals at all. If you later buy a capable GPU and want full control and privacy, the local door stays open.',
          },
          {
            q: 'What\'s different about running these local models on Mac vs Windows?',
            a: 'ComfyUI runs on Apple Silicon (M1–M4) via PyTorch\'s MPS backend, but expect roughly 3–5x slower generation than an equivalent NVIDIA GPU — usable, not competitive on speed. The bigger practical issue is software support: CUDA-specific optimizations these models lean on (flash-attention, GGUF/FP8 quantization tooling) are far less mature on Mac, so several community workflows and installation guides assume Windows or Linux with an NVIDIA card and may need adjustment, or simply won\'t run as documented. One upside: Apple Silicon\'s unified memory can let you fit a larger model in memory than a discrete GPU with equivalent VRAM would allow, even though it runs slower. If you\'re buying hardware specifically for local video generation, Windows or Linux plus NVIDIA is the well-supported path; a Mac you already own is fine for experimenting, not the recommended target for serious throughput.',
          },
          {
            q: 'Can I keep the same character consistent across multiple local video clips?',
            a: 'Yes, with extra work — none of the three models guarantee this out of the box across separate generations. The two working approaches: feed the same reference image into image-to-video mode (all three support I2V), or train a small LoRA on your character. Wan 2.2 and LTX-2 both have documented LoRA workflows for this — LTX-2\'s version is called IC-LoRA (in-context LoRA) and explicitly supports multi-character consistency. Community guidance is consistent on one point: a trained LoRA gives far more reliable results than prompting or a reference image alone. InVideo\'s brand-kit and AI avatar features solve the same underlying problem differently — a fixed avatar and voice profile you configure once and reuse, no training required.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Try Before You Decide',
        content:
          'You don\'t need to commit to a local GPU setup — or a paid subscription — just to evaluate the cloud workflow. Before buying hardware or spending a weekend on ComfyUI, it\'s worth spending five minutes the other way first:\n\n1. Try InVideo\'s free version.\n2. Create one short video.\n3. Evaluate the output quality and how the workflow felt.\n4. Compare that experience against the setup effort a local install would take.\n\nThat turns the comparison from something you read about into something you can test yourself in less time than it takes to read the rest of this article.',
        blockquote:
          '[Try InVideo\'s free version →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'The Verdict',
        content:
          'Go local if you have (or will buy) a 12GB+ GPU, enjoy building your own tools, and value privacy and unlimited $0 generations over convenience. Wan 2.2 is the safest foundation — top quality, Apache 2.0, no fine print — with LTX-2 as the speed-and-sound specialist.\n\nGo cloud if you don\'t have the hardware, don\'t want the setup, or need finished videos rather than raw clips. For most people who simply want to make AI-generated videos, the cloud route is the easier starting point: if you don\'t already have the hardware and technical interest local generation requires, InVideo removes most of that complexity in one prompt, with every model and asset bundled and automation included — starting at $0 to test and $17/month (billed annually) to remove the watermark. The simplest way to find out whether it fits your workflow is to try the free version.\n\nBoth doors lead to AI video. The question was never which technology is better — it\'s which workflow fits your machine, your patience, and your goals.',
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
          '[VBench-2.0 leaderboard](https://github.com/Vchitect/VBench) — independent benchmark used for quality and physics-faithfulness figures.',
          '[InVideo pricing](https://invideo.io/pricing/) — official plan and pricing details.',
          '[InVideo MCP server](https://invideo.io/ai/mcp) — official automation documentation.',
          '[MiniMax H3 on GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — official repository.',
          '[MiniMax H3 on Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — official model weights.',
          '[InVideo: How Long Does It Take to Make an AI Short Film?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — InVideo\'s own end-to-end production timeline figures (2–5 days).',
          '[ComfyUI system requirements](https://docs.comfy.org/installation/system_requirements) — official Mac/Apple Silicon MPS support documentation.',
          '[LTX Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — official character-consistency (IC-LoRA) guide.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local AI Image Generation vs. Cloud](/power-local-llm/local-ai-image-generation-vs-cloud) — the companion piece, same structure, for images instead of video.',
          '[VRAM Calculator for Local Models](/local-llms/vram-calculator-local-llm) — exact VRAM requirements per model and quantization.',
          '[How Much VRAM Do You Need?](/local-llms/how-much-vram-local-llm) — charts across model sizes from 7B to 70B.',
          '[Best GPUs for Local AI in 2026](/local-llms/best-gpus-for-local-llms) — hardware picks by budget tier.',
          '[Best Budget GPUs for Local AI](/local-llms/best-budget-gpus-local-llm) — entry-level hardware options.',
          '[GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon) — platform comparison for local inference.',
          '[System Prompts vs. User Prompts](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — prompt structuring fundamentals that transfer to video prompting.',
          '[Prompt Engineering for Local Models](/local-llms/prompt-engineering-for-local-models) — structured prompting techniques.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-08-21',
    next_refresh_due: '2027-02-21',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'InVideo مقابل الفيديو المحلي بالذكاء الاصطناعي: خيار بلا تكلفة يستهلك عطلتك مقابل خيار بـ 17 دولارًا',
    seoTitle: 'الفيديو السحابي مقابل المحلي بالذكاء الاصطناعي 2026: InVideo مقابل Wan 2.2 وLTX-2',
    intro:
      'هناك بابان للدخول إلى عالم الفيديو بالذكاء الاصطناعي في 2026. الباب الأول محلي: نماذج فيديو مفتوحة ومجانية تعمل على معالج الرسومات (GPU) الخاص بك — توليد غير محدود، خصوصية كاملة، بلا اشتراك، لكنك تبني سير العمل بأكمله بنفسك. الباب الثاني سحابي: InVideo، حيث يكفي إدخال أمر نصي واحد للحصول على فيديو سردي جاهز — نص، لقطات أرشيفية، تعليق صوتي، موسيقى، وترجمة نصية، كل ذلك مباشرة من المتصفح. لا يوجد باب "أفضل" من الآخر. يقدّم هذا الدليل تفاصيل التراخيص الدقيقة التي تتجاهلها معظم المقارنات، ومتطلبات العتاد الحقيقية، وأداة قرار تربط وضعك بتوصية محددة.',
    metaDescription:
      'نماذج الفيديو المحلية بالذكاء الاصطناعي (Wan 2.2 وLTX-2 وHunyuanVideo) مجانية إذا كان معالج الرسومات لديك يدعمها. تتولى منصة InVideo السحابية كل شيء مقابل 17 دولارًا شهريًا. مقارنة صادقة: VRAM، التراخيص، والتفاصيل الدقيقة.',
    twitterDescription:
      'الفيديو السحابي مقابل المحلي بالذكاء الاصطناعي في 2026: تجمع InVideo كل شيء مقابل 17 دولارًا شهريًا. تعمل Wan 2.2 وLTX-2 وHunyuanVideo مجانًا على معالج الرسومات الخاص بك — إن كان قويًا بما يكفي. مقارنة صادقة.',
    audience:
      'المبدعون والمطورون الذين يترددون بين توليد الفيديو المحلي المجاني على معالج الرسومات الخاص بهم وخط إنتاج InVideo السحابي المتكامل — يغطي متطلبات العتاد، وتفاصيل التراخيص، والمفاضلات في سير العمل.',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'توليد الفيديو المحلي بالذكاء الاصطناعي',
    targetKeywords: [
      'الفيديو السحابي مقابل المحلي بالذكاء الاصطناعي',
      'InVideo مقابل الفيديو المحلي بالذكاء الاصطناعي',
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
      '**بالنسبة لمعظم من يملكون معالج رسومات بذاكرة 12 جيجابايت فأكثر، يُعد Wan 2.2 أفضل نموذج فيديو محلي بالذكاء الاصطناعي في 2026** — مرخّص بموجب Apache 2.0 بلا سقف إيرادات أو قيود جغرافية، ويحمل أعلى درجة جودة موثقة علنًا (VBench ~84.7%) بين النماذج المفتوحة، وهو مجاني بالكامل. **يُعد InVideo الخيار الأفضل إذا لم يتوفر لديك ذلك المعالج، أو إذا أردت فيديو سرديًا جاهزًا بدلًا من مقطع خام** — تبدأ خطته Plus من 17 دولارًا شهريًا (بفوترة سنوية)، وتجمع أكثر من 200 نموذج (بما فيها Kling 3 وVeo 3.1 وSeedance 2.5) في خط إنتاج واحد يعمل عبر المتصفح، يتضمن النص والتعليق الصوتي والموسيقى والترجمة النصية. **يمتلك HunyuanVideo 1.5 المظهر السينمائي الأكثر جمالًا محليًا، لكن ترخيصه يستبعد الاتحاد الأوروبي والمملكة المتحدة وكوريا الجنوبية تمامًا** — تجنّبه إذا كنت في هذه المناطق.',
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أولّد الفيديو بالذكاء الاصطناعي محليًا أم أستخدم خط إنتاج InVideo السحابي؟',
        answer:
          'ولّد الفيديو محليًا إذا كنت تملك معالج رسومات بذاكرة 12 جيجابايت فأكثر، وتريد توليدًا غير محدود بتكلفة صفر دولار، وتُقدّر الخصوصية — يُعد Wan 2.2 (مرخّص بموجب Apache 2.0، بلا قيود) نقطة البداية الأكثر أمانًا. استخدم InVideo إذا لم يتوفر لديك العتاد المناسب، أو لا تريد إدارة الإعداد، أو تحتاج فيديو كاملًا وجاهزًا (نص، تعليق صوتي، موسيقى، ترجمة نصية) بدلًا من مقطع خام — تبدأ خطته Plus من 17 دولارًا شهريًا (بفوترة سنوية).',
        bullets: [
          'أقل من 12 جيجابايت VRAM ← يُعد InVideo الخيار العملي؛ النماذج المحلية غير قابلة للاستخدام بجودة جادة دون هذا المستوى.',
          '12 جيجابايت VRAM ← LTX-Video 0.9.5، الخيار المحلي الجاد الوحيد في هذا المستوى.',
          '16 إلى 24+ جيجابايت VRAM ← Wan 2.2 (أعلى جودة، Apache 2.0، بلا قيود) أو LTX-2 (سرعة + صوت متزامن).',
          'إذا كنت في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية ← ترخيص HunyuanVideo 1.5 يستبعدك؛ استخدم Wan 2.2 أو LTX-2 بدلًا منه.',
          'تحتاج فيديو سرديًا جاهزًا، لا مقطعًا خامًا ← النماذج المحلية تولّد فقط مقاطع صامتة (باستثناء LTX) مدتها 5 إلى 20 ثانية؛ يتولى InVideo خط الإنتاج الكامل، بدءًا من 17 دولارًا شهريًا (بفوترة سنوية).',
        ],
        updatedDate: '2026-08-21',
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
      { label: 'الباب السحابي: ما الذي تجمعه InVideo', anchor: '#invideo-bundle' },
      { label: 'سحابي أم محلي: أي باب يناسبك؟', anchor: '#decision-guide' },
      { label: 'من يجب أن يختار InVideo؟', anchor: '#who-should-choose' },
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
          '**Wan 2.2 هو النموذج المحلي الوحيد من الفئة الأولى الخالي تمامًا من قيود الترخيص.** مرخّص بموجب Apache 2.0، استخدام تجاري بلا قيود، بلا سقف إيرادات، بلا استبعاد جغرافي — وأعلى درجة جودة موثقة عبر VBench بين النماذج مفتوحة المصدر (~84.7%).',
          '**تجمع InVideo أكثر من 200 نموذج — بما فيها Kling 3 وVeo 3.1 وSeedance 2.5 — في خط إنتاج واحد يعمل عبر المتصفح** بدءًا من 17 دولارًا شهريًا (خطة Plus، بفوترة سنوية)، مع نص وتعليق صوتي وموسيقى وترجمة نصية تُدار تلقائيًا.',
          '**يستبعد ترخيص HunyuanVideo 1.5 صراحةً الاتحاد الأوروبي والمملكة المتحدة وكوريا الجنوبية** — يشمل ذلك النموذج نفسه ومخرجاته. يجب على القراء في هذه المناطق استخدام Wan 2.2 أو LTX-2 بدلًا منه.',
          '**LTX-2 هو الأسرع بين الثلاثي المحلي والوحيد الذي يتضمن صوتًا متزامنًا مدمجًا**، وهو مجاني تجاريًا للشركات التي تقل إيراداتها السنوية عن 10 ملايين دولار.',
          '**12 جيجابايت VRAM هو الحد الأدنى الواقعي لتوليد الفيديو المحلي الجاد.** دون ذلك، يصبح InVideo الخيار الأكثر عملية.',
          '**تولّد النماذج المحلية مقاطع خامًا صامتة مدتها 5 إلى 20 ثانية، لا فيديوهات جاهزة.** النص، والتعليق الصوتي، والموسيقى، والترجمة النصية، والمونتاج أدوات منفصلة تجمّعها بنفسك — بينما تنجز InVideo كل ذلك في خطوة واحدة.',
          '**لا وجود لإصدار "Wan 2.7".** صفحات التحميل التي تعرضه هي عمليات احتيال لتحسين محركات البحث — تتوقف إصدارات Wan الرسمية عند 2.2.',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'لماذا يمثل عام 2026 لحظة غريبة لفيديو الذكاء الاصطناعي',
        content:
          'شهدت سوق الفيديو الاحتكارية فوضى عارمة. أغلقت OpenAI تطبيق Sora الاستهلاكي في مارس 2026، بعد أقل من ستة أشهر من إطلاقه، عقب انخفاض التنزيلات بنحو 66% عن ذروتها (تبقى واجهة برمجة التطبيقات API نشطة بشكل منفصل). واجه نموذج Seedance 2.0 التابع لـ ByteDance دعاوى قضائية من هوليوود وتوقفًا مؤقتًا للطرح العالمي في الشهر نفسه، بعد إنذارات قانونية من Disney وParamount وWarner Bros. — لا يزال متاحًا في الصين لكنه يحمل مخاطر قانونية للاستخدام التجاري الدولي. تصدّر نموذج HappyHorse التابع لـ Alibaba قوائم الجودة في أبريل 2026 — ولم يُفتح للجمهور قط.\n\nهذه الفوضى بالذات هي ما يجعل كلا البابين جذابين. تمنحك النماذج المحلية المفتوحة استقلالًا عن دراما الموردين. أما InVideo فتمتصّ هذه الدراما نيابة عنك: يمنح اشتراكها الوصول إلى أكثر من 200 نموذج — بما فيها Kling 3 وVeo 3.1 وSeedance 2.5 — بحيث لا يتأثر سير عملك عندما يختفي نموذج ما أو يتعرض لدعوى قضائية.',
      },
      localModels: {
        id: 'local-models',
        title: 'الباب المحلي: ثلاثة نماذج مجانية على معالج الرسومات الخاص بك',
        content:
          'تهيمن ثلاثة أنظمة مفتوحة الأوزان على توليد الفيديو المحلي حاليًا، قياسًا بعدد التنزيلات ونشاط المجتمع ونتائج المقاييس. تعمل الأنظمة الثلاثة عبر ComfyUI، واجهة قائمة على العُقد تُثبّت على جهازك الخاص — وليست أداة محادثة مثل Ollama. هذه نماذج انتشار (diffusion)، وليست نماذج لغوية كبيرة (LLM).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'يُعد Wan 2.2 أفضل نموذج فيديو محلي شامل في 2026 — مرخّص بموجب Apache 2.0، بأعلى جودة، بلا قيود — بينما يتفوق LTX-2 في السرعة والصوت المتزامن، ويقدّم HunyuanVideo 1.5 المظهر السينمائي الأكثر جمالًا لكن ترخيصه يستبعد مستخدمي الاتحاد الأوروبي والمملكة المتحدة وكوريا الجنوبية.' },
          { type: 'plain-terms', text: 'إذا أردت إجابة واحدة فقط: احصل على معالج رسومات بذاكرة 12 جيجابايت فأكثر وشغّل Wan 2.2. فهو يمتلك أعلى جودة، وأبسط ترخيص، وبلا أي تفاصيل دقيقة مخفية.' },
        ],
        columns: ['النموذج', 'الترخيص', 'VRAM', 'المخرجات', 'الميزة البارزة'],
        rows: [
          { 'النموذج': 'Wan 2.2 (Alibaba)', 'الترخيص': 'Apache 2.0 — بلا قيود', 'VRAM': '6–8GB (5B) / 15–25GB (14B)', 'المخرجات': '480p/720p، مقاطع ~5 ثوانٍ', 'الميزة البارزة': 'أعلى جودة VBench موثقة (~84.7%)' },
          { 'النموذج': 'LTX-2 (Lightricks)', 'الترخيص': 'LTX Community License — مجاني لمن تقل إيراداته عن 10 ملايين دولار', 'VRAM': '18–20GB مُكمَّم، 32GB+ بدقة كاملة', 'المخرجات': '480p–1080p، 5–20 ثانية، مع صوت', 'الميزة البارزة': 'النموذج الوحيد بصوت وفيديو متزامنين في خطوة واحدة' },
          { 'النموذج': 'HunyuanVideo 1.5 (Tencent)', 'الترخيص': 'Tencent Community License — يستبعد الاتحاد الأوروبي/المملكة المتحدة/كوريا الجنوبية', 'VRAM': '14GB كحد أدنى، 24GB بشكل مريح', 'المخرجات': '480p/720p، حتى 10 ثوانٍ', 'الميزة البارزة': 'مفضّل المجتمع للإضاءة السينمائية؛ الأخف استهلاكًا لـ VRAM' },
        ],
        note:
          '⚠️ تحذير من الاحتيال: لا وجود لإصدار "Wan 2.7". صفحات التحميل التي تدّعي تقديم "أوزان Wan 2.7 المفتوحة" هي عمليات احتيال لتحسين محركات البحث. تتوقف إصدارات Wan الرسمية عند 2.2 — لا تُحمّل إلا من مستودعات GitHub أو Hugging Face الرسمية المرتبطة أدناه.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — ملك الجودة، مجاني حقًا',
        content:
          'Wan 2.2 هو النموذج المفتوح الأكثر انتشارًا لتوليد الفيديو: سجّل مستودع I2V-A14B وحده نحو 4.24 مليون تنزيل من Hugging Face في شهر واحد، إلى جانب مئات المشتقات المجتمعية المبنية عليه. يأتي في ثلاثة إصدارات — T2V-A14B وI2V-A14B (خليط خبراء، 27B إجمالي / 14B نشط)، إضافة إلى TI2V-5B المدمج الذي يعالج التحويل من نص وصورة إلى فيديو بذاكرة تصل إلى 6–8 جيجابايت فقط. يحتاج مستوى 14B ما بين 15 جيجابايت (GGUF Q3) إلى 25 جيجابايت (FP8)؛ بينما يطلب الأمر الرسمي غير المُكمَّم 80 جيجابايت. ترخيصه هو Apache 2.0 — مجاني فعليًا، استخدام تجاري بلا قيود، بلا حد أدنى للإيرادات، وبلا استبعاد جغرافي.\n\n**السرعة، بالأرقام:** يستغرق توليد مقطع واحد مدته 5 ثوانٍ نحو 4 إلى 9 دقائق على معالج RTX 4090 (رقم مُبلَّغ عنه بشكل مستقل — لا يُخرج Wan 2.2 أصلًا مقاطع أطول في خطوة واحدة). لبناء تسلسل مدته 20 ثانية، ستولّد 4 مقاطع منفصلة مدة كل منها 5 ثوانٍ ثم تدمجها — أي ما بين 16 و36 دقيقة من زمن التوليد الخام، إضافة إلى مونتاج يدوي لربطها بسلاسة. هذا النطاق استقراء من رقم المقطع الواحد، وليس قياسًا مباشرًا لمقطع مدته 20 ثانية.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — سرعة مع صوت متزامن',
        content:
          'LTX-2 هو النموذج المفتوح الوحيد بين الثلاثة الذي يولّد صوتًا وفيديو متزامنين في خطوة واحدة — تصل خطى الأقدام والأصوات المحيطة والمؤثرات مع الصورة نفسها. وهو أيضًا الأسرع بينها والأكثر تسامحًا مع العتاد. البنية عبارة عن محوّل انتشار (diffusion transformer) بحجم 22B؛ يبقى LTX-2.3 (مارس 2026) مدعومًا بالكامل جنبًا إلى جنب مع إصدار LTX-2.5 الحالي. الترخيص هو LTX Community License — مجاني للاستخدام التجاري إذا كان إجمالي إيرادات شركتك أقل من 10 ملايين دولار سنويًا، مع الحاجة إلى ترخيص تجاري مدفوع فوق هذا الحد. (تصفه بعض المقالات الخارجية خطأً بأنه Apache 2.0 — [صفحة الترخيص الرسمية](https://ltx.io/model/license) هي المصدر الموثوق الوحيد.) تحتاج متطلبات العتاد ما بين 18–20 جيجابايت VRAM مُكمَّمًا، و32 جيجابايت فأكثر بالدقة الكاملة؛ وعلى بطاقات 12 جيجابايت، يبقى الإصدار الأقدم LTX-Video 0.9.5 الخيار العملي.\n\n**السرعة، بالأرقام:** يُعد LTX-2 نوعيًا الأسرع بين الثلاثة، بمعاينات شبه فورية على البطاقات الاستهلاكية عالية الأداء — لكن لا يوجد حتى وقت كتابة هذا المقال رقم موثّق بشكل مستقل بالدقائق لكل مقطع على معالج RTX 4090، لذا لن نخترع واحدًا. الرقم الثابت الوحيد المتاح هو من قياس أداء Lightricks نفسها على "معالجات Nvidia الفائقة" (superchips) من فئة مراكز البيانات (وليست بطاقة استهلاكية): مقطع مدته 10 ثوانٍ في نحو 6.8 ثوانٍ. اعتبر هذا الرقم سقفًا لما يمكن أن تحققه البنية على عتاد احترافي جاد، وليس ما سيراه جهازك المنزلي.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — المظهر السينمائي، مع عائق قانوني',
        content:
          'نموذج Tencent بحجم 8.3B، الصادر في نوفمبر 2025، هو المفضل لدى المجتمع للإضاءة والملمس السينمائيين، وهو الأخف بين الثلاثة استهلاكًا لـ VRAM: 14 جيجابايت كحد أدنى مع التفريغ (offloading)، و24 جيجابايت بشكل مريح، بمعدل نحو 75 ثانية لكل مقطع 480p على معالج RTX 4090. يولّد بدقة 480p/720p أصليًا، وحتى 1080p عبر تقنية دقة فائقة مدمجة، بمقاطع تصل إلى 10 ثوانٍ.\n\n**السرعة، بالأرقام:** بمعدل ~75 ثانية لكل مقطع 480p مدته 5 ثوانٍ، فهذا يعادل نحو 15 ثانية من زمن التصيير لكل ثانية فيديو. أقصى طول أصلي للمقطع هو 10 ثوانٍ، لذا فإن تسلسلًا مدته 20 ثانية يعني توليدين بأقصى طول — وباستقراء المعدل لكل ثانية، فإن ذلك يعادل نحو 5 دقائق من زمن التوليد الخام لـ 20 ثانية من اللقطات، قبل الدمج. هذا استقراء من رقم الـ5 ثوانٍ الموثّق، وليس قياسًا مباشرًا لمقطع 10 أو 20 ثانية.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'تحذير بشأن الترخيص — اقرأ قبل التحميل. يستخدم HunyuanVideo 1.5 ترخيص Tencent Hunyuan Community License، وليس Apache 2.0. لا ينطبق هذا الترخيص في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية — لا يُخوَّل مستخدمو هذه المناطق استخدام النموذج أو مخرجاته. كما يحدّ الترخيص الاستخدام بسقف 100 مليون مستخدم نشط شهريًا، ويحظر تدريب نماذج منافسة على مخرجاته. إذا كنت في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية، تجنّب هذا النموذج: يوفّر Wan 2.2 مستوى الجودة نفسه بلا أي قيود.',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'نموذج يستحق المتابعة: MiniMax H3',
        content:
          'صدر في 3 أغسطس 2026، وMiniMax H3 هو نموذج شامل الوسائط (omni-modal) بحجم 33.1B، يدعم صوتًا مجسّمًا (stereo) أصليًا، ودعمًا فوريًا لـ ComfyUI منذ اليوم الأول، وإصدارات مُكمَّمة تعمل على معالج RTX 3060. هناك تحفظان قبل اعتباره خيارًا رابعًا: يقتصر الإصدار المحلي على دقة 768p (يبقى خط الأنابيب الكامل بدقة 2K حصريًا للنسخة السحابية)، ويحمل ترخيصه المجتمعي — بحسب ما يُذكر — قيودًا جغرافية خاصة به وحدًا أدنى للإيرادات قدره 20 مليون دولار — تحقق من بطاقة النموذج الرسمية قبل الالتزام به. المؤشرات الأولية قوية، لكن ثلاثة أسابيع من العمر لا تعني الجاهزية للإنتاج.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'حاجز العتاد',
        content: [
          'توليد الفيديو المحلي "مجاني" بالطريقة نفسها التي يكون بها الجرو مجانيًا: أوزان النموذج لا تكلّف شيئًا، لكن معالج الرسومات هو الثمن الحقيقي للدخول. تجنّب التوليد المحلي كليًا إذا كان معالج الرسومات لديك أقل من 12 جيجابايت VRAM ولا تنوي الترقية — فلا يعمل أي من النماذج الثلاثة أعلاه بجودة قابلة للاستخدام دون هذا المستوى، وستحصل من منصة سحابية على مخرجات أفضل وأسرع.',
          'لست متأكدًا مما يعنيه كل هذا لجهازك؟ توضح هذه الأدلة التفاصيل: [حاسبة VRAM](/ar/local-llms/vram-calculator-local-llm) لمعرفة المتطلبات الدقيقة لكل نموذج، [كم تحتاج من VRAM؟](/ar/local-llms/how-much-vram-local-llm) لجداول عبر أحجام النماذج، [أفضل معالجات الرسومات للذكاء الاصطناعي المحلي](/ar/local-llms/best-gpus-for-local-llms) و[أفضل معالجات الرسومات الاقتصادية](/ar/local-llms/best-budget-gpus-local-llm) لاختيارات العتاد، و[معالج الرسومات مقابل المعالج المركزي مقابل Apple Silicon](/ar/local-llms/gpu-vs-cpu-vs-apple-silicon) لمقارنات المنصات. تنبيه صادق واحد: تستخدم هذه الأدلة معادلة VRAM الخاصة بالنماذج اللغوية الكبيرة (المعاملات × البتات ÷ 8). أما نماذج انتشار الفيديو فتتغير احتياجاتها من VRAM أيضًا حسب الدقة وطول المقطع، فاعتبر أرقامها حدًا أدنى لا حدًا أقصى لأعباء عمل الفيديو.',
        ],
        columns: ['معالج الرسومات لديك', 'ما يمكنك تشغيله'],
        rows: [
          { 'معالج الرسومات لديك': '6–8GB VRAM', 'ما يمكنك تشغيله': 'Wan 2.2 TI2V-5B (مُكمَّم) — قابل للاستخدام، جودة أساسية' },
          { 'معالج الرسومات لديك': '12GB VRAM', 'ما يمكنك تشغيله': 'LTX-Video 0.9.5 — الخيار الجاد الوحيد في هذا المستوى' },
          { 'معالج الرسومات لديك': '16GB VRAM', 'ما يمكنك تشغيله': 'HunyuanVideo 1.5 (إن سمح الترخيص)، Wan 2.2 14B بصيغة GGUF Q3' },
          { 'معالج الرسومات لديك': '24GB+ VRAM', 'ما يمكنك تشغيله': 'كل شيء: Wan 2.2 14B بجودة عالية، LTX-2 مُكمَّم' },
        ],
        note:
          'تكلفة تقريبية للعتاد حتى أغسطس 2026: تتراوح تكلفة بطاقة RTX 3060 12GB مستعملة بين 170 و220 دولارًا، وتتراوح تكلفة تجميعة RTX 3090 مستعملة بين 900 و1,100 دولار. أسعار معالجات الرسومات متغيرة — تحقق من الأسعار الحالية قبل الشراء بدلًا من الاعتماد على هذه الأرقام بعد مرور أشهر قليلة.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'ما الذي يتطلبه فعليًا تشغيل توليد الفيديو المحلي',
        content:
          'مع النماذج المحلية، أنت لا تُثبّت أداة فيديو — بل تجمّع خط إنتاج كامل.\n\n**إعداد التوليد.** ComfyUI قائم على العُقد: تبني، أو تستورد وتُصلح، مخطط سير عمل من المُحمِّلات وأدوات أخذ العينات وفكّاكات التشفير. توقّع تعارضات في إصدارات CUDA، وتثبيتات مضبوطة لـ PyTorch، وأخطاء تثبيت عرضية لـ `flash_attn` قبل أن يظهر أول إطار.\n\n**كتابة الأوامر النصية.** تحتاج نماذج الفيديو أوامر نصية مُهيكلة — نوع اللقطة، حركة الكاميرا، الإضاءة، حركة الموضوع — لا جملة واحدة مختصرة. لا يوجد مساعد أوامر مدمج ولا طبقة أوامر نظام؛ تكتب الهيكل الكامل بنفسك. تغطي أدلتنا حول [أوامر النظام مقابل أوامر المستخدم](/ar/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) و[هندسة الأوامر للنماذج المحلية](/ar/local-llms/prompt-engineering-for-local-models) أساسيات تنتقل مباشرة إلى كتابة أوامر الفيديو.\n\n**كل ما يحيط بالمقطع.** تُخرج النماذج المحلية مقاطع خامًا صامتة (باستثناء LTX) مدتها 5 إلى 20 ثانية. النص، والتعليق الصوتي، والموسيقى، واللقطات الأرشيفية، والترجمة النصية، والمونتاج — كل منها أداة منفصلة تختارها وتثبّتها وتربطها بنفسك.',
        promptExamples: [
          { label: 'ضعيف (جملة واحدة)', text: 'A dog on a beach' },
          { label: 'مُهيكل (ما تحتاجه نماذج الفيديو)', text: 'Golden retriever sprinting along a wet shoreline at golden hour, low tracking shot following from the side, shallow depth of field, warm backlight, gentle slow motion, cinematic 24fps' },
        ],
        note:
          'الموضوع وحركته، سلوك الكاميرا، الإضاءة، الأسلوب — أربعة مكوّنات في جملة واحدة هي الفارق بين آلة قمار وكاميرا حقيقية. إذا بدت هذه الحزمة من العمل اليدوي مثيرة، فالباب المحلي مناسب لك. وإذا بدت مرهقة، تابع القراءة.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'الباب السحابي: ما الذي تجمعه InVideo',
        sponsoredSlot: true,
        content:
          'InVideo مجرد مثال واحد على الباب السحابي — وليس المثال الوحيد، ومن المفيد معرفة كيف يختلف عن غيره قبل افتراض أن كلمة "سحابي" تعني شيئًا واحدًا. يندمج Runway مباشرة في محرّرات احترافية (Premiere Pro، Final Cut، DaVinci Resolve)، ويستهدف سير عمل هجينًا بين الذكاء الاصطناعي والمحرّر لا فيديو جاهزًا ومُجمَّعًا. تتخصص Dream Machine من Luma AI في مخرجات HDR أصلية بعمق 16 بت لخطوط أنابيب تركيب المؤثرات البصرية (After Effects، Nuke) — جمهور مختلف تمامًا. تبقى Pika خفيفة الوزن: توليد مقاطع خام سريع بلا نص أو تعليق صوتي أو تجميع لقطات أرشيفية مدمج، ما يعني أنك ما زلت بحاجة لأدوات منفصلة لكل ما يحيط بالمقطع — مشكلة خط الإنتاج اليدوي نفسها التي تواجهها مع تشغيل نموذج محلي، لكن دون الحاجة إلى معالج رسومات. ما يميّز InVideo عن الثلاثة جميعًا هو أنها ليست أداة توليد خام بالدرجة الأولى: إنها مُجمِّع يحوّل النص إلى فيديو جاهز، ويمنحك أيضًا الوصول إلى نماذج توليد خام (Kling، Veo، Seedance) عند الحاجة إليها.\n\nInVideo ليست نموذج فيديو — بل خط الإنتاج بأكمله كخدمة. تكتب موضوعًا أو تلصق نصًا؛ ويُعيد وكيلها v4 فيديو جاهزًا تصل مدته إلى 30 دقيقة: نص مولَّد بالذكاء الاصطناعي، مشاهد مُجمَّعة من مكتبة أصول أرشيفية تضم أكثر من 16 مليون عنصر أو من مقاطع مولَّدة حديثًا، تعليق صوتي بالذكاء الاصطناعي بأكثر من 50 لغة (بما فيها استنساخ الصوت)، موسيقى، ترجمة نصية، وتنسيق حسب هوية العلامة التجارية. يعمل عبر المتصفح — معالج الرسومات لديك غير ذي صلة.\n\nلكل من يريد البدء في صناعة الفيديوهات اليوم بدلًا من البحث عن معالجات الرسومات وصيغ التكميم، يُعد InVideo الخيار العملي: بلا حاجة لعتاد محلي، بلا تثبيت لـ ComfyUI أو استكشاف أخطاء CUDA، وسير عمل واحد يتضمن بالفعل النص والتعليق الصوتي والموسيقى والترجمة النصية التي يحتاجها معظم الناس فعليًا. وهو مناسب بوجه خاص للمبدعين الذين يهتمون بالفيديو الجاهز أكثر من اهتمامهم بالتحكم في نموذج التوليد الأساسي — وبما أن الفئة المجانية موجودة، يمكنك معرفة ما إذا كانت تناسبك قبل إنفاق أي مبلغ.\n\nتبرز ثلاثة أمور في هذه المقارنة:\n\n- **فوضى النماذج، مُمتصة.** تشمل جميع الخطط المدفوعة الوصول إلى أكثر من 200 نموذج — من بينها Seedance 2.5 وVeo 3.1 وKling 3. عندما يتعرض نموذج ما لدعوى قضائية أو يُغلَق، تستبدله InVideo؛ ويستمر سير عملك دون توقف.\n- **الأتمتة مدمجة، لا مُضافة لاحقًا.** يوجد خادم MCP رسمي، بحيث يمكن تشغيل خط الإنتاج الكامل من الأمر النصي إلى النص إلى اللقطات إلى الترجمة النصية برمجيًا — وهو نوع الإطار الذي كنت ستبنيه بنفسك حول ComfyUI.\n- **الفئة المجانية اختبار حقيقي.** موسومة بعلامة مائية ومحدودة بالدقائق، لكنها كافية للحكم على جودة المخرجات قبل الدفع.\n\n**السرعة، بالأرقام — والملاحظة الصادقة:** التوليد الخام الواحد سريع، عادة في حدود دقائق. لكن الأسئلة الشائعة الرسمية لـ InVideo تضع الإنتاج الكامل من البداية للنهاية لفيلم قصير عند 2 إلى 5 أيام، لا دقائق — لأن اختيار وتجميع الخيارات المولَّدة المتعددة، لا التوليد نفسه، هو ما يستغرق الوقت. اعتبر "يومين كحد أدنى واقعي" لفيلم جاهز مدته 1 إلى 3 دقائق نقطة المقارنة العادلة مقابل 16 إلى 36 دقيقة من التوليد الخام للباب المحلي لـ 20 ثانية من اللقطات غير المُحرَّرة: تستبدل InVideo وقت الإعداد والمونتاج لديك بوقت إنتاجها الخاص، ولا تُلغي الوقت بالكامل.\n\nالخطط الحالية، بدءًا من 17 دولارًا شهريًا (خطة Plus، بفوترة سنوية، تم التحقق منها في أغسطس 2026 — راجع [صفحة أسعار InVideo](https://invideo.io/pricing/) للأرقام الحية):',
        blockquote:
          '**تريد إنشاء فيديوهات بالذكاء الاصطناعي دون إعداد محلي؟** إذا لم يتوفر لديك معالج رسومات قوي — أو ببساطة لا تريد قضاء ساعات في تثبيت أدوات الفيديو المحلية بالذكاء الاصطناعي وضبطها — تستحق InVideo التجربة. [جرّب النسخة المجانية من InVideo ←](https://invideo.io/pricing/)',
        columns: ['الخطة', 'السعر', 'الرصيد شهريًا', 'الأنسب لـ'],
        rows: [
          { 'الخطة': 'Free', 'السعر': '$0', 'الرصيد شهريًا': 'محدود', 'الأنسب لـ': 'اختبار الأداة (بعلامة مائية)' },
          { 'الخطة': 'Plus', 'السعر': '$17/mo ($200/yr)', 'الرصيد شهريًا': '75', 'الأنسب لـ': 'المبدعون المنتظمون — جميع نماذج الذكاء الاصطناعي، 4 صور رمزية واستنساخات صوتية، 100 عنصر من iStock، تصدير غير محدود بلا علامة مائية' },
          { 'الخطة': 'Max', 'السعر': '$85/mo ($1,000/yr)', 'الرصيد شهريًا': '390', 'الأنسب لـ': 'القنوات عالية الحجم، 16 صورة رمزية' },
          { 'الخطة': 'Generative', 'السعر': '$170/mo ($2,000/yr)', 'الرصيد شهريًا': '800+', 'الأنسب لـ': 'أحجام الأفلام القصيرة / الإنتاج' },
          { 'الخطة': 'Elite', 'السعر': '$900/mo ($10,800/yr)', 'الرصيد شهريًا': '4,250+', 'الأنسب لـ': 'الإنتاج الحلقي والتجاري الواسع' },
        ],
        note:
          'جميع الأسعار أعلاه هي أسعار الفوترة السنوية حتى أغسطس 2026 — الدفع الشهري أعلى تكلفة (تذكر الأسئلة الشائعة الرسمية لـ InVideo أن Plus بـ 20 دولارًا، وMax بـ 100 دولار، وGenerative بـ 200 دولار، وElite بـ 1,000 دولار شهريًا). راجع صفحة أسعار InVideo الحية قبل الاعتماد على أي رقم هنا؛ الخطط والأسعار تتغير.',
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'سحابي أم محلي: أي باب يناسبك؟',
        content: 'النسخة المختصرة، مربوطة بأوضاع شائعة:',
        columns: ['وضعك', 'التوصية'],
        rows: [
          { 'وضعك': 'بلا معالج رسومات، أو أقل من 12GB VRAM', 'التوصية': 'InVideo (سحابي) — لا يعمل أي نموذج محلي بشكل جيد دون هذا المستوى' },
          { 'وضعك': 'تريد فيديو جاهزًا بتعليق صوتي، لا مقاطع خامًا', 'التوصية': 'InVideo (سحابي) — لا تُجمّع النماذج المحلية إنتاجًا كاملًا' },
          { 'وضعك': 'محكوم بموعد نهائي، لا تحمّل صفر للإعداد', 'التوصية': 'InVideo (سحابي)' },
          { 'وضعك': 'معالج رسومات 12GB+، مرتاح للإعداد، تريد الخصوصية وتكلفة هامشية صفرية', 'التوصية': 'محليًا: LTX-Video (12GB) أو Wan 2.2 (24GB للجودة الكاملة)' },
          { 'وضعك': 'في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية', 'التوصية': 'محليًا فقط Wan 2.2 أو LTX-2 (ترخيص HunyuanVideo يستبعدك)' },
          { 'وضعك': 'تحتاج أتمتة/واجهة برمجية على نطاق واسع دون بنائها بنفسك', 'التوصية': 'InVideo (سحابي، خادم MCP)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'من يجب أن يختار InVideo؟',
        content:
          '**يُعد InVideo على الأرجح الخيار الأفضل إذا كنت:**\n\n- لا تملك معالج رسومات قويًا\n- تريد البدء في إنشاء الفيديوهات فورًا\n- لا تريد تثبيت وضبط ComfyUI أو CUDA أو النماذج أو بيئات Python\n- تريد سير عمل متكاملًا بدلًا من تجميع أدوات محلية متعددة\n- تحتاج النصوص والصوت والموسيقى والترجمة النصية وتوليد الفيديو في سير عمل واحد\n- تهتم بالفيديوهات الجاهزة أكثر من التجريب بالنماذج الأساسية\n\n**يُعد الذكاء الاصطناعي المحلي على الأرجح الخيار الأفضل إذا كنت:**\n\n- تملك بالفعل عتاد معالج رسومات مناسبًا\n- تريد أقصى قدر من التحكم\n- تريد التجريب بالنماذج وسير العمل\n- تمتلك مهارات تقنية قوية\n- تُقدّم إبقاء التوليد تحت تحكم محلي\n- تتوقع توليد أحجام كبيرة جدًا وتريد تحسين تكلفة التوليد الهامشية',
        blockquote:
          '**لست متأكدًا من المسار المناسب لك؟** إذا أردت تجنّب العتاد والإعداد التقني، فأبسط تجربة هي ببساطة تجربة InVideo لمعرفة ما إذا كان سير عملها يناسب احتياجاتك. [جرّب InVideo مجانًا ←](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'شاهدها قيد التطبيق',
        items: [
          '[4 Open Source AI Video Models Compared — Which One\'s Actually Free?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — مقارنة مباشرة لمخرجات LTX 2.3 وWan 2.2 وHunyuanVideo 1.5 وMiniMax H3، بما فيها تفاصيل التراخيص الدقيقة.',
          '[InVideo Agent One Review](https://www.youtube.com/watch?v=uUHO9byu0c0) — سير العمل الكامل من الأمر النصي إلى الفيديو الجاهز.',
          '[Wan 2.2 Full Local Demo](https://www.youtube.com/watch?v=fs62ML_ZgEs) — أزمنة تصيير صادقة على عتاد استهلاكي (أسبوع الإطلاق، يوليو 2025).',
          '[Low-VRAM Wan 2.2 Tutorial](https://www.youtube.com/watch?v=tQu0DjtOEyg) — تشغيل نموذج 14B على حاسوب محمول بذاكرة 6 جيجابايت (2025).',
        ],
        note:
          'هذه مقاطع فيديو من جهات خارجية، لم تُنتجها PromptQuorum ولا InVideo. مُدرجة للرجوع فقط — لا تعني إقرارًا بالقناة أو محتواها الآخر.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني تشغيل توليد الفيديو بالذكاء الاصطناعي على 8 جيجابايت VRAM؟',
            a: 'بالكاد. يعمل إصدار Wan 2.2 من طراز TI2V-5B على 6–8 جيجابايت مُكمَّم، بجودة مخفَّضة وأطوال مقاطع قصيرة. بالنسبة للنماذج الجادة، 12 جيجابايت هو الحد الأدنى الحقيقي — ودون ذلك، تُعد أداة سحابية مثل InVideo الإجابة العملية.',
          },
          {
            q: 'هل Wan 2.2 مجاني فعلًا للاستخدام التجاري؟',
            a: 'نعم. ترخيصه Apache 2.0 — استخدام تجاري بلا قيود، بلا سقف إيرادات، بلا استبعاد جغرافي، وبلا مطالبة بحقوق على مخرجاتك. إنه النموذج المحلي الوحيد من الفئة الأولى الخالي من أي تفاصيل ترخيص دقيقة.',
          },
          {
            q: 'هل يمكنني استخدام HunyuanVideo في الاتحاد الأوروبي أو المملكة المتحدة؟',
            a: 'لا. لا ينطبق ترخيص Tencent Hunyuan Community License صراحةً في الاتحاد الأوروبي أو المملكة المتحدة أو كوريا الجنوبية — يشمل ذلك النموذج نفسه ومخرجاته. استخدم Wan 2.2 أو LTX-2 بدلًا منه.',
          },
          {
            q: 'هل أحتاج معالج رسومات لاستخدام InVideo؟',
            a: 'لا. تعمل InVideo بالكامل عبر المتصفح؛ يحدث كل التوليد على بنيتها التحتية. يعمل حاسوب محمول عمره خمس سنوات دون مشكلة.',
          },
          {
            q: 'هل يمكن للنماذج المحلية إنتاج فيديو يوتيوب كامل بتعليق صوتي؟',
            a: 'ليس بمفردها. تولّد النماذج المحلية مقاطع خامًا مدتها 5 إلى 20 ثانية (يتضمن LTX-2 صوتًا متزامنًا؛ بينما البقية صامتة). يتطلب النص والتعليق الصوتي والموسيقى والترجمة النصية والمونتاج كل منها أدوات منفصلة تجمّعها بنفسك في خط إنتاج.',
          },
          {
            q: 'ما هو العائق الحقيقي وراء "مجانية" الفيديو المحلي بالذكاء الاصطناعي؟',
            a: 'تكلفة العتاد (معالج رسومات قادر)، ووقت الإعداد (ComfyUI وتبعياته)، وخط الإنتاج اليدوي المطلوب حول المقاطع الخام. أوزان النموذج نفسها لا تكلّف فعليًا شيئًا لكل توليد، إلى الأبد.',
          },
          {
            q: 'هل يوجد Wan 2.7 أو نموذج Wan أحدث؟',
            a: 'لا. تتوقف إصدارات Wan الرسمية عند 2.2. أي موقع يعرض "أوزان Wan 2.7" هو عملية احتيال — لا تُحمّل إلا من مستودعات GitHub أو Hugging Face الرسمية.',
          },
          {
            q: 'أنا مبتدئ تمامًا. من أين أبدأ؟',
            a: 'الفئة المجانية من InVideo — ستحصل على فيديو جاهز وسردي في دقائق ويمكنك الحكم على ما إذا كان الفيديو بالذكاء الاصطناعي يخدم أهدافك أصلًا. إذا اشتريت لاحقًا معالج رسومات قادرًا وأردت تحكمًا كاملًا وخصوصية، يبقى الباب المحلي مفتوحًا.',
          },
          {
            q: 'ما الفرق في تشغيل هذه النماذج المحلية على Mac مقابل Windows؟',
            a: 'يعمل ComfyUI على Apple Silicon (M1–M4) عبر واجهة MPS الخلفية في PyTorch، لكن توقّع توليدًا أبطأ بنحو 3 إلى 5 أضعاف مقارنة بمعالج رسومات NVIDIA مكافئ — قابل للاستخدام، لكن غير منافس من حيث السرعة. المشكلة العملية الأكبر هي دعم البرمجيات: تحسينات خاصة بـ CUDA تعتمد عليها هذه النماذج (flash-attention، أدوات تكميم GGUF/FP8) أقل نضجًا بكثير على Mac، لذا قد تفترض عدة أدلة تثبيت وسير عمل مجتمعية استخدام Windows أو Linux مع بطاقة NVIDIA، وقد تحتاج تعديلًا، أو ببساطة لن تعمل كما هو موثّق. ميزة واحدة: يمكن للذاكرة الموحّدة في Apple Silicon أن تسمح لك بتحميل نموذج أكبر في الذاكرة مما تسمح به بطاقة رسومات منفصلة بذاكرة مكافئة، رغم أنه يعمل بشكل أبطأ. إذا كنت تشتري عتادًا خصيصًا لتوليد الفيديو المحلي، فإن Windows أو Linux مع NVIDIA هو المسار المدعوم جيدًا؛ أما جهاز Mac الذي تملكه بالفعل فهو مناسب للتجريب، لا الهدف الموصى به لإنتاجية جادة.',
          },
          {
            q: 'هل يمكنني الحفاظ على ثبات الشخصية نفسها عبر عدة مقاطع فيديو محلية؟',
            a: 'نعم، مع جهد إضافي — لا يضمن أي من النماذج الثلاثة ذلك تلقائيًا عبر توليدات منفصلة. النهجان العمليان: تغذية صورة مرجعية واحدة في وضع تحويل الصورة إلى فيديو (تدعمه الثلاثة جميعًا)، أو تدريب LoRA صغير على شخصيتك. يمتلك كل من Wan 2.2 وLTX-2 سير عمل موثّق لـ LoRA لهذا الغرض — يُسمّى إصدار LTX-2 بـ IC-LoRA (LoRA سياقي) ويدعم صراحة اتساق شخصيات متعددة. توافق المجتمع واضح على نقطة واحدة: يمنح LoRA المُدرَّب نتائج أكثر موثوقية بكثير من مجرد الأوامر النصية أو الصورة المرجعية وحدها. تحلّ ميزات هوية العلامة التجارية والصور الرمزية بالذكاء الاصطناعي في InVideo المشكلة نفسها بطريقة مختلفة — صورة رمزية وملف صوتي ثابتان تضبطهما مرة واحدة وتعيد استخدامهما، دون حاجة للتدريب.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'جرّب قبل أن تقرر',
        content:
          'لست بحاجة للالتزام بإعداد معالج رسومات محلي — أو اشتراك مدفوع — لمجرد تقييم سير العمل السحابي. قبل شراء عتاد أو قضاء عطلة نهاية أسبوع مع ComfyUI، يستحق الأمر قضاء خمس دقائق في الاتجاه المعاكس أولًا:\n\n1. جرّب النسخة المجانية من InVideo.\n2. أنشئ فيديو قصيرًا واحدًا.\n3. قيّم جودة المخرجات وشعورك تجاه سير العمل.\n4. قارن تلك التجربة بجهد الإعداد الذي سيتطلبه تثبيت محلي.\n\nهذا يحوّل المقارنة من شيء تقرأ عنه إلى شيء يمكنك اختباره بنفسك في وقت أقل مما يستغرقه قراءة بقية هذا المقال.',
        blockquote:
          '[جرّب النسخة المجانية من InVideo ←](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'اختر المسار المحلي إذا كنت تملك (أو ستشتري) معالج رسومات بذاكرة 12 جيجابايت فأكثر، وتستمتع ببناء أدواتك الخاصة، وتُقدّر الخصوصية والتوليد غير المحدود بتكلفة صفر دولار على الراحة. يُعد Wan 2.2 الأساس الأكثر أمانًا — أعلى جودة، Apache 2.0، بلا تفاصيل دقيقة مخفية — مع LTX-2 كمتخصص في السرعة والصوت.\n\nاختر المسار السحابي إذا لم يتوفر لديك العتاد، أو لا تريد الإعداد، أو تحتاج فيديوهات جاهزة بدلًا من مقاطع خام. بالنسبة لمعظم من يريدون فقط صناعة فيديوهات مولَّدة بالذكاء الاصطناعي، يُعد المسار السحابي نقطة البداية الأسهل: إذا لم يتوفر لديك بالفعل العتاد والاهتمام التقني اللذان يتطلبهما التوليد المحلي، تُزيل InVideo معظم هذا التعقيد في أمر نصي واحد، مع كل نموذج وأصل مُجمَّع والأتمتة مُضمَّنة — بدءًا من 0 دولار للتجربة و17 دولارًا شهريًا (بفوترة سنوية) لإزالة العلامة المائية. أبسط طريقة لمعرفة ما إذا كانت تناسب سير عملك هي تجربة النسخة المجانية.\n\nكلا البابين يؤديان إلى فيديو الذكاء الاصطناعي. لم يكن السؤال يومًا أي تقنية أفضل — بل أي سير عمل يناسب جهازك، وصبرك، وأهدافك.',
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
          '[VBench-2.0 leaderboard](https://github.com/Vchitect/VBench) — مقياس مستقل يُستخدم لأرقام الجودة ومطابقة الفيزياء.',
          '[InVideo pricing](https://invideo.io/pricing/) — تفاصيل الخطط والأسعار الرسمية.',
          '[InVideo MCP server](https://invideo.io/ai/mcp) — توثيق الأتمتة الرسمي.',
          '[MiniMax H3 on GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — المستودع الرسمي.',
          '[MiniMax H3 on Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — أوزان النموذج الرسمية.',
          '[InVideo: How Long Does It Take to Make an AI Short Film?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — أرقام الجدول الزمني للإنتاج من البداية للنهاية الخاصة بـ InVideo (2 إلى 5 أيام).',
          '[ComfyUI system requirements](https://docs.comfy.org/installation/system_requirements) — توثيق دعم Mac/Apple Silicon MPS الرسمي.',
          '[LTX Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — الدليل الرسمي لاتساق الشخصيات (IC-LoRA).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[توليد الصور المحلي بالذكاء الاصطناعي مقابل السحابي](/ar/power-local-llm/local-ai-image-generation-vs-cloud) — المقال المكمّل، بالبنية نفسها، للصور بدلًا من الفيديو.',
          '[حاسبة VRAM للنماذج المحلية](/ar/local-llms/vram-calculator-local-llm) — متطلبات VRAM الدقيقة لكل نموذج وتكميم.',
          '[كم تحتاج من VRAM؟](/ar/local-llms/how-much-vram-local-llm) — جداول عبر أحجام النماذج من 7B إلى 70B.',
          '[أفضل معالجات الرسومات للذكاء الاصطناعي المحلي في 2026](/ar/local-llms/best-gpus-for-local-llms) — اختيارات عتاد حسب الميزانية.',
          '[أفضل معالجات الرسومات الاقتصادية للذكاء الاصطناعي المحلي](/ar/local-llms/best-budget-gpus-local-llm) — خيارات عتاد للمستوى الأساسي.',
          '[معالج الرسومات مقابل المعالج المركزي مقابل Apple Silicon](/ar/local-llms/gpu-vs-cpu-vs-apple-silicon) — مقارنة منصات للاستدلال المحلي.',
          '[أوامر النظام مقابل أوامر المستخدم](/ar/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — أساسيات هيكلة الأوامر التي تنتقل إلى أوامر الفيديو.',
          '[هندسة الأوامر للنماذج المحلية](/ar/local-llms/prompt-engineering-for-local-models) — تقنيات كتابة أوامر مُهيكلة.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-08-21',
    next_refresh_due: '2027-02-21',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'InVideo vs. lokale KI-Videogenerierung: Die eine kostet 0 $ plus Ihr Wochenende – die andere kostet 17 $',
    seoTitle: 'Cloud vs. lokale KI-Videos 2026: InVideo vs. Wan 2.2 & LTX-2',
    intro:
      'Es gibt zwei Türen in die KI-Videogenerierung des Jahres 2026. Tür eins ist lokal: kostenlose, offene Videomodelle, die auf Ihrer eigenen GPU laufen – unbegrenzte Generierungen, vollständig privat, kein Abonnement, aber Sie bauen den gesamten Workflow selbst auf. Tür zwei ist die Cloud: InVideo, wo ein einzelner Prompt am Ende ein fertiges, erzähltes Video ergibt – Skript, Stock-Footage, Voiceover, Musik und Untertitel inklusive, direkt aus dem Browser. Keine der beiden Türen ist grundsätzlich "besser". Dieser Leitfaden liefert das Kleingedruckte der Lizenzen, das die meisten Vergleiche auslassen, die tatsächlichen Hardware-Anforderungen und ein Entscheidungswerkzeug, das Ihre Situation auf eine Empfehlung abbildet.',
    metaDescription:
      'Lokale KI-Videomodelle (Wan 2.2, LTX-2, HunyuanVideo) sind kostenlos, wenn Ihre GPU sie ausführen kann. InVideos Cloud erledigt alles für 17 $/Monat. Ehrlicher Vergleich: VRAM, Lizenzen, Kleingedrucktes.',
    twitterDescription:
      'Cloud vs. lokale KI-Videos 2026: InVideo bündelt alles für 17 $/Monat. Wan 2.2, LTX-2, HunyuanVideo laufen kostenlos auf Ihrer eigenen GPU – wenn sie groß genug ist. Ehrlicher Vergleich.',
    audience:
      'Kreative und Entwickler, die zwischen kostenloser lokaler Videogenerierung auf der eigenen GPU und InVideos Rundum-Cloud-Pipeline entscheiden – behandelt Hardware-Anforderungen, Lizenz-Kleingedrucktes und Workflow-Abwägungen.',
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
      '**Für die meisten Menschen mit einer GPU ab 12 GB ist Wan 2.2 das beste lokale KI-Videomodell im Jahr 2026** – Apache-2.0-lizenziert, ohne Umsatzgrenzen oder Gebietsbeschränkungen, und mit dem höchsten öffentlich verifizierten Qualitätswert (VBench ~84,7 %) aller offenen Modelle, vollständig kostenlos. **InVideo ist die bessere Wahl, wenn Sie diese GPU nicht besitzen oder ein fertiges, erzähltes Video statt eines rohen Clips wollen** – der Plus-Plan ab 17 $/Monat (jährliche Abrechnung) bündelt über 200 Modelle (darunter Kling 3, Veo 3.1 und Seedance 2.5) in einer einzigen browserbasierten Pipeline mit Skript, Voiceover, Musik und Untertiteln. **HunyuanVideo 1.5 hat den filmischsten lokalen Look, aber seine Lizenz schließt die EU, das Vereinigte Königreich und Südkorea vollständig aus** – überspringen Sie es, wenn Sie in diesen Regionen ansässig sind.',
    quickAnswerTop: {
      de: {
        question: 'Sollte ich KI-Videos lokal generieren oder InVideos Cloud-Pipeline nutzen?',
        answer:
          'Generieren Sie lokal, wenn Sie eine GPU ab 12 GB haben, unbegrenzte Generierungen für 0 $ wollen und Wert auf Privatsphäre legen – Wan 2.2 (Apache 2.0, keine Einschränkungen) ist der sicherste Einstieg. Nutzen Sie InVideo, wenn Sie keine passende Hardware haben, das Setup nicht selbst verwalten wollen oder ein vollständig fertiges Video (Skript, Voiceover, Musik, Untertitel) statt eines rohen Clips brauchen – der Plus-Plan startet bei 17 $/Monat (jährliche Abrechnung).',
        bullets: [
          'Unter 12 GB VRAM → InVideo ist die praktische Wahl; lokale Modelle sind unterhalb dieser Stufe für ernsthafte Qualität unbrauchbar.',
          '12 GB VRAM → LTX-Video 0.9.5, die einzige ernsthafte lokale Option auf dieser Stufe.',
          '16–24 GB+ VRAM → Wan 2.2 (Top-Qualität, Apache 2.0, keine Einschränkungen) oder LTX-2 (Geschwindigkeit + synchronisierter Ton).',
          'In der EU, im Vereinigten Königreich oder in Südkorea → HunyuanVideo 1.5s Lizenz schließt Sie aus; nutzen Sie stattdessen Wan 2.2 oder LTX-2.',
          'Brauchen Sie ein fertiges, erzähltes Video statt eines rohen Clips → lokale Modelle generieren nur stumme (Ausnahme: LTX) Clips von 5–20 Sekunden; InVideo übernimmt die gesamte Produktionspipeline, ab 17 $/Monat (jährliche Abrechnung).',
        ],
        updatedDate: '2026-08-21',
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
      { label: 'Die Cloud-Tür: Was InVideo bündelt', anchor: '#invideo-bundle' },
      { label: 'Cloud oder lokal: Welche Tür ist Ihre?', anchor: '#decision-guide' },
      { label: 'Wer sollte InVideo wählen?', anchor: '#who-should-choose' },
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
          '**Wan 2.2 ist das einzige Top-Videomodell für den lokalen Einsatz ohne jegliche Lizenzeinschränkungen.** Apache 2.0, uneingeschränkte kommerzielle Nutzung, keine Umsatzgrenzen, keine Gebietsausschlüsse – und der höchste verifizierte Open-Source-VBench-Qualitätswert (~84,7 %).',
          '**InVideo bündelt über 200 Modelle – darunter Kling 3, Veo 3.1 und Seedance 2.5 – in einer browserbasierten Pipeline**, ab 17 $/Monat (Plus-Plan, jährliche Abrechnung), mit automatisch erledigtem Skript, Voiceover, Musik und Untertiteln.',
          '**HunyuanVideo 1.5s Lizenz schließt die EU, das Vereinigte Königreich und Südkorea ausdrücklich aus** – das betrifft sowohl das Modell als auch seine Ausgaben. Leser in diesen Regionen sollten stattdessen Wan 2.2 oder LTX-2 nutzen.',
          '**LTX-2 ist das schnellste der lokalen drei und das einzige mit eingebautem synchronisiertem Ton**, kommerziell kostenlos für Unternehmen mit weniger als 10 Mio. $ Jahresumsatz.',
          '**12 GB VRAM sind die realistische Untergrenze für ernsthafte lokale Videogenerierung.** Darunter wird InVideo zur praktischeren Option.',
          '**Lokale Modelle erzeugen rohe, stumme Clips von 5–20 Sekunden, keine fertigen Videos.** Skript, Voiceover, Musik, Untertitel und Schnitt sind separate Werkzeuge, die Sie selbst zusammenstellen – InVideo erledigt all das in einem Durchgang.',
          '**Es gibt kein "Wan 2.7".** Download-Seiten, die es anbieten, sind SEO-Betrug – offizielle Wan-Releases enden bei 2.2.',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Warum 2026 ein merkwürdiger Moment für KI-Video ist',
        content:
          'Der proprietäre Videomarkt war chaotisch. OpenAI stellte die Sora-Consumer-App im März 2026 ein, weniger als sechs Monate nach dem Start, nachdem die Downloads gegenüber ihrem Höchststand um rund 66 % gefallen waren (die API bleibt separat aktiv). ByteDances Seedance 2.0 geriet im selben Monat in Hollywood-Klagen und einen pausierten globalen Rollout, nach Unterlassungsschreiben von Disney, Paramount und Warner Bros. – es bleibt in China zugänglich, birgt aber Rechtsrisiken für die internationale kommerzielle Nutzung. Alibabas HappyHorse-Modell führte im April 2026 die Qualitäts-Ranglisten an – und wurde nie öffentlich zugänglich gemacht.\n\nGenau dieses Chaos macht beide Türen attraktiv. Offene lokale Modelle machen Sie unabhängig vom Anbieter-Drama. Und InVideo nimmt Ihnen das Drama ab: Das Abonnement bündelt Zugang zu über 200 Modellen – darunter Kling 3, Veo 3.1 und Seedance 2.5 –, sodass Ihr Workflow nichts davon bemerkt, wenn ein Modell verschwindet oder verklagt wird.',
      },
      localModels: {
        id: 'local-models',
        title: 'Die lokale Tür: Drei kostenlose Modelle auf Ihrer eigenen GPU',
        content:
          'Drei Open-Weights-Systeme dominieren derzeit die lokale Videogenerierung, gemessen an Downloads, Community-Aktivität und Benchmark-Ergebnissen. Alle drei laufen über ComfyUI, eine knotenbasierte Oberfläche, die auf Ihrem eigenen Rechner installiert wird – kein Chat-Tool wie Ollama. Es handelt sich um Diffusionsmodelle, nicht um LLMs.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 ist 2026 das beste lokale Allround-Videomodell – Apache 2.0, höchste Qualität, keine Einschränkungen –, während LTX-2 bei Geschwindigkeit und synchronisiertem Ton gewinnt und HunyuanVideo 1.5 den filmischsten Look bietet, per Lizenz aber Nutzer aus der EU/UK/Südkorea ausschließt.' },
          { type: 'plain-terms', text: 'Wenn Sie nur eine Antwort wollen: Besorgen Sie sich eine GPU ab 12 GB und nutzen Sie Wan 2.2. Es hat die beste Qualität, die einfachste Lizenz und kein Kleingedrucktes.' },
        ],
        columns: ['Modell', 'Lizenz', 'VRAM', 'Ausgabe', 'Besonderes Merkmal'],
        rows: [
          { 'Modell': 'Wan 2.2 (Alibaba)', 'Lizenz': 'Apache 2.0 – uneingeschränkt', 'VRAM': '6–8 GB (5B) / 15–25 GB (14B)', 'Ausgabe': '480p/720p, ~5-Sekunden-Clips', 'Besonderes Merkmal': 'Höchste verifizierte VBench-Qualität (~84,7 %)' },
          { 'Modell': 'LTX-2 (Lightricks)', 'Lizenz': 'LTX Community License – kostenlos unter 10 Mio. $ Umsatz', 'VRAM': '18–20 GB quantisiert, 32 GB+ voll', 'Ausgabe': '480p–1080p, 5–20 s, mit Ton', 'Besonderes Merkmal': 'Einziges Modell mit synchronisiertem Audio+Video in einem Durchgang' },
          { 'Modell': 'HunyuanVideo 1.5 (Tencent)', 'Lizenz': 'Tencent Community License – schließt EU/UK/Südkorea aus', 'VRAM': 'mind. 14 GB, 24 GB komfortabel', 'Ausgabe': '480p/720p, bis zu 10 s', 'Besonderes Merkmal': 'Community-Favorit für filmische Beleuchtung; sparsamster VRAM-Bedarf' },
        ],
        note:
          '⚠️ Betrugswarnung: Es gibt kein "Wan 2.7". Download-Seiten, die "Wan 2.7 Open Weights" anbieten, sind SEO-Betrug. Offizielle Wan-Releases enden bei 2.2 – laden Sie nur aus den offiziellen GitHub- oder Hugging-Face-Repositories herunter, die unten verlinkt sind.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) – der Qualitätskönig, wirklich kostenlos',
        content:
          'Wan 2.2 ist das am weitesten verbreitete offene Videomodell: Allein das I2V-A14B-Repository verzeichnete in einem einzigen Monat rund 4,24 Millionen Hugging-Face-Downloads, dazu Hunderte von Community-Derivaten. Es erscheint in drei Varianten – T2V-A14B und I2V-A14B (Mixture-of-Experts, 27B gesamt / 14B aktive Parameter) sowie ein kompaktes TI2V-5B, das sowohl Text- als auch Bild-zu-Video mit nur 6–8 GB VRAM verarbeitet. Die 14B-Stufe benötigt 15 GB (GGUF Q3) bis 25 GB (FP8); der offizielle unquantisierte Befehl verlangt 80 GB. Die Lizenz ist Apache 2.0 – wirklich kostenlos, uneingeschränkte kommerzielle Nutzung, keine Umsatzschwellen, keine Gebietsausschlüsse.\n\n**Geschwindigkeit, konkret:** Ein einzelner 5-Sekunden-Clip dauert auf einer RTX 4090 rund 4–9 Minuten (eine unabhängig berichtete Zahl – Wan 2.2 gibt nativ keine längeren Clips in einem Durchgang aus). Für eine 20-sekündige Sequenz würden Sie 4 separate 5-Sekunden-Clips generieren und zusammenfügen – das sind grob 16–36 Minuten reine Generierungszeit, plus manuellen Schnitt für einen sauberen Übergang. Diese Spanne ist eine Hochrechnung aus der Pro-Clip-Zahl, kein direkt gemessener 20-Sekunden-Benchmark.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) – Geschwindigkeit plus synchronisierter Ton',
        content:
          'LTX-2 ist das einzige offene Modell dieses Trios, das synchronisierten Ton und Bild in einem einzigen Durchgang generiert – Schritte, Umgebungsgeräusche und Effekte kommen zusammen mit dem Bild. Es ist außerdem das schnellste der drei und das nachsichtigste bei der Hardware. Die Architektur ist ein 22B-Diffusions-Transformer; LTX-2.3 (März 2026) wird weiterhin vollständig unterstützt, parallel zur aktuellen LTX-2.5-Version. Die Lizenz ist die LTX Community License – kostenlos für kommerzielle Nutzung, wenn der Gesamtumsatz Ihres Unternehmens unter 10 Mio. $ pro Jahr liegt, darüber ist eine kostenpflichtige kommerzielle Lizenz erforderlich. (Einige Drittanbieter-Artikel nennen es fälschlich Apache 2.0 – die [offizielle Lizenzseite](https://ltx.io/model/license) ist die einzig verlässliche Quelle.) Der Hardware-Bedarf liegt bei 18–20 GB VRAM quantisiert, 32 GB+ bei voller Präzision; auf 12-GB-Karten bleibt das ältere LTX-Video 0.9.5 die praktische Wahl.\n\n**Geschwindigkeit, konkret:** LTX-2 ist qualitativ das schnellste des Trios, mit nahezu Echtzeit-Vorschauen auf High-End-Consumer-Karten – aber es existiert bislang keine unabhängig verifizierte Minuten-pro-Clip-Zahl auf einer RTX 4090, weshalb wir keine erfinden. Die einzige belastbare Zahl stammt aus Lightricks\' eigenem Benchmark auf Rechenzentrums-Hardware der Klasse "Nvidia-Superchips" (keine Consumer-GPU): ein 10-Sekunden-Clip in etwa 6,8 Sekunden. Betrachten Sie das als Obergrenze dessen, was die Architektur auf ernsthafter Hardware leisten kann – nicht als das, was Ihr Heim-Rig zeigen wird.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) – der filmische Look, mit einem juristischen Haken',
        content:
          'Tencents 8,3B-Modell, veröffentlicht im November 2025, ist ein Community-Favorit für filmische Beleuchtung und Textur und das VRAM-sparsamste des Trios: 14 GB Minimum mit Offloading, 24 GB komfortabel, bei rund 75 Sekunden pro 480p-Clip auf einer RTX 4090. Es generiert nativ 480p/720p, über eingebaute Super-Resolution bis zu 1080p, Clips bis zu 10 Sekunden.\n\n**Geschwindigkeit, konkret:** Bei ~75 Sekunden pro 5-Sekunden-480p-Clip sind das rund 15 Sekunden Renderzeit pro Sekunde Video. Die native maximale Cliplänge liegt bei 10 Sekunden, sodass eine 20-Sekunden-Sequenz zwei Generierungen mit maximaler Länge bedeutet – hochgerechnet aus der Pro-Sekunde-Rate sind das rund 5 Minuten reine Generierungszeit für 20 Sekunden Filmmaterial, vor dem Zusammenfügen. Dies ist eine Hochrechnung aus der belegten 5-Sekunden-Zahl, kein direkt gemessener 10- oder 20-Sekunden-Benchmark.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Lizenzwarnung – vor dem Download lesen. HunyuanVideo 1.5 nutzt die Tencent Hunyuan Community License, nicht Apache 2.0. Die Lizenz gilt nicht in der Europäischen Union, im Vereinigten Königreich oder in Südkorea – Nutzer in diesen Regionen sind nicht berechtigt, das Modell oder seine Ausgaben zu verwenden. Sie begrenzt die Nutzung außerdem auf 100 Millionen monatlich aktive Nutzer und untersagt das Trainieren konkurrierender Modelle auf Basis ihrer Ausgaben. Wenn Sie in der EU, im UK oder in Südkorea sind, überspringen Sie dieses Modell: Wan 2.2 deckt dieselbe Qualitätsstufe ohne jegliche Einschränkungen ab.',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'Einer zum Beobachten: MiniMax H3',
        content:
          'Veröffentlicht am 3. August 2026, ist MiniMax H3 ein 33,1B-Omni-Modal-Modell mit nativem Stereo-Ton, ComfyUI-Unterstützung ab dem ersten Tag und quantisierten Versionen, die auf einer RTX 3060 laufen. Zwei Vorbehalte, bevor Sie es als vierte Wahl behandeln: Das lokale Release deckelt bei 768p (die vollständige 2K-Pipeline bleibt nur gehostet verfügbar), und seine Community License trägt Berichten zufolge eigene geografische Einschränkungen sowie eine Umsatzschwelle von 20 Mio. $ – prüfen Sie die offizielle Modellkarte, bevor Sie sich festlegen. Die ersten Anzeichen sind stark, aber drei Wochen alt und produktionsreif sind zwei verschiedene Dinge.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'Die Hardware-Hürde',
        content: [
          'Lokale Videogenerierung ist so kostenlos wie ein Welpe kostenlos ist: Die Modellgewichte kosten nichts, aber die GPU ist der eigentliche Preis des Einstiegs. Verzichten Sie ganz auf lokale Generierung, wenn Ihre GPU unter 12 GB VRAM hat und Sie kein Upgrade planen – keines der drei oben genannten Modelle läuft unterhalb dieser Stufe in brauchbarer Qualität, und eine Cloud-Plattform liefert Ihnen schneller bessere Ergebnisse.',
          'Nicht sicher, was das für Ihre Maschine bedeutet? Diese Leitfäden schlüsseln es auf: [VRAM-Rechner](/de/local-llms/vram-calculator-local-llm) für exakte Anforderungen pro Modell, [Wie viel VRAM brauchen Sie?](/de/local-llms/how-much-vram-local-llm) für Übersichten über Modellgrößen hinweg, [Beste GPUs für lokale KI](/de/local-llms/best-gpus-for-local-llms) und [Beste Budget-GPUs](/de/local-llms/best-budget-gpus-local-llm) für Hardware-Empfehlungen sowie [GPU vs. CPU vs. Apple Silicon](/de/local-llms/gpu-vs-cpu-vs-apple-silicon) für Plattformvergleiche. Ein ehrlicher Vorbehalt: Diese Leitfäden nutzen die LLM-VRAM-Formel (Parameter × Bits ÷ 8). Video-Diffusionsmodelle skalieren den VRAM-Bedarf zusätzlich mit Auflösung und Cliplänge – behandeln Sie deren Zahlen für Video-Workloads also als Untergrenze, nicht als Obergrenze.',
        ],
        columns: ['Ihre GPU', 'Was Sie ausführen können'],
        rows: [
          { 'Ihre GPU': '6–8 GB VRAM', 'Was Sie ausführen können': 'Wan 2.2 TI2V-5B (quantisiert) – brauchbar, Einstiegsqualität' },
          { 'Ihre GPU': '12 GB VRAM', 'Was Sie ausführen können': 'LTX-Video 0.9.5 – die einzige ernsthafte Option auf dieser Stufe' },
          { 'Ihre GPU': '16 GB VRAM', 'Was Sie ausführen können': 'HunyuanVideo 1.5 (falls Lizenz erlaubt), Wan 2.2 14B bei GGUF Q3' },
          { 'Ihre GPU': '24 GB+ VRAM', 'Was Sie ausführen können': 'Alles: Wan 2.2 14B in hoher Qualität, LTX-2 quantisiert' },
        ],
        note:
          'Grobe Hardware-Kosten, Stand August 2026: Eine gebrauchte RTX 3060 12GB kostet laut Geizhals.de/Kleinanzeigen.de für Neuware ab ca. 333 €, gebraucht ist mit ca. 200–260 € zu rechnen; ein gebrauchter RTX-3090-Stack liegt laut eBay.de-Gebrauchtangeboten bei ca. 1.000–1.150 €. GPU-Preise bewegen sich – prüfen Sie die aktuelle Preislage, statt sich über mehr als ein paar Monate hinweg auf diese Zahlen zu verlassen.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'Was der Betrieb lokaler Videogenerierung tatsächlich bedeutet',
        content:
          'Mit lokalen Modellen installieren Sie kein Videotool – Sie bauen eine Pipeline zusammen.\n\n**Das Generierungs-Setup.** ComfyUI ist knotenbasiert: Sie bauen einen Workflow-Graphen aus Loadern, Samplern und Decodern selbst auf – oder importieren und debuggen einen bestehenden. Rechnen Sie mit CUDA-Versionskonflikten, PyTorch-Pins und dem gelegentlichen `flash_attn`-Installationsfehler, bevor Ihr erstes Bild gerendert wird.\n\n**Das Prompten.** Videomodelle brauchen strukturierte Prompts – Einstellungsgröße, Kamerabewegung, Beleuchtung, Handlung des Subjekts – keine Einzeiler. Es gibt keinen eingebauten Prompt-Helfer und keine System-Prompt-Ebene; Sie schreiben die vollständige Struktur selbst. Unsere Leitfäden zu [System-Prompts vs. User-Prompts](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) und [Prompt Engineering für lokale Modelle](/de/local-llms/prompt-engineering-for-local-models) behandeln Grundlagen, die sich direkt auf Video-Prompting übertragen lassen.\n\n**Alles rund um den Clip.** Lokale Modelle geben rohe, stumme (Ausnahme: LTX) Clips von 5–20 Sekunden aus. Skript, Voiceover, Musik, Stock-Footage, Untertitel und Schnitt sind jeweils separate Werkzeuge, die Sie selbst auswählen, installieren und miteinander verbinden.',
        promptExamples: [
          { label: 'Schwach (Einzeiler)', text: 'Ein Hund am Strand' },
          { label: 'Strukturiert (was Videomodelle brauchen)', text: 'Golden Retriever sprintet bei goldenem Licht an einer nassen Küstenlinie entlang, niedriger seitlicher Tracking-Shot, geringe Schärfentiefe, warmes Gegenlicht, sanfte Zeitlupe, filmisches 24-fps-Bild' },
        ],
        note:
          'Subjekt und Handlung, Kameraverhalten, Beleuchtung, Stil – vier Zutaten in einem Satz sind der Unterschied zwischen einem Glücksspielautomaten und einer Kamera. Wenn dieser DIY-Stack aufregend klingt, ist die lokale Tür Ihre. Wenn es anstrengend klang, lesen Sie weiter.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'Die Cloud-Tür: Was InVideo bündelt',
        sponsoredSlot: true,
        content:
          'InVideo ist ein Beispiel für die Cloud-Tür – nicht das einzige, und es lohnt sich zu wissen, wie es sich von den anderen unterscheidet, bevor Sie annehmen, "Cloud" bedeute nur eine Sache. Runway integriert sich direkt in professionelle Editoren (Premiere Pro, Final Cut, DaVinci Resolve) und zielt auf hybride KI-plus-Editor-Workflows statt auf ein fertiges, zusammengesetztes Video. Luma AIs Dream Machine spezialisiert sich auf natives 16-Bit-HDR-Output für VFX-Compositing-Pipelines (After Effects, Nuke) – ein völlig anderes Publikum. Pika bleibt schlank: schnelle Roh-Clip-Generierung ohne eingebautes Skript, Voiceover oder Stock-Footage-Zusammenstellung, sodass Sie weiterhin separate Werkzeuge für alles rund um den Clip brauchen – dasselbe DIY-Pipeline-Problem wie beim lokalen Modell, nur ohne GPU-Anforderung. Was InVideo von allen dreien unterscheidet: Es ist nicht primär ein Roh-Generierungstool, sondern ein Skript-zu-fertigem-Video-Assembler, der Ihnen bei Bedarf zusätzlich Zugang zu Roh-Generierungsmodellen (Kling, Veo, Seedance) gibt.\n\nInVideo ist kein Videomodell – es ist die gesamte Produktionspipeline als Dienstleistung. Sie geben ein Thema ein oder fügen ein Skript ein; der v4-Agent liefert ein fertiges Video von bis zu 30 Minuten Länge: KI-generiertes Skript, Szenen zusammengestellt aus einer Stock-Bibliothek mit über 16 Mio. Assets oder frisch generierten Clips, KI-Voiceover in über 50 Sprachen (inklusive Stimmenklonung), Musik, Untertitel und Branding im eigenen Stil. Es läuft im Browser – Ihre GPU spielt keine Rolle.\n\nFür alle, die heute mit dem Videomachen anfangen wollen, statt GPUs und Quantisierungsformate zu recherchieren, ist InVideo die praktische Wahl: keine lokale Hardware-Anforderung, keine ComfyUI-Installation oder CUDA-Fehlersuche, und ein einziger Workflow, der bereits Skript, Voiceover, Musik und Untertitel enthält, die die meisten Menschen tatsächlich brauchen. Es eignet sich besonders für Kreative, denen das fertige Video wichtiger ist als die Kontrolle über das zugrunde liegende Generierungsmodell – und da es eine kostenlose Stufe gibt, können Sie herausfinden, ob das zu Ihnen passt, bevor Sie etwas ausgeben.\n\nDrei Dinge stechen für diesen Vergleich hervor:\n\n- **Modell-Chaos, abgefedert.** Alle kostenpflichtigen Pläne beinhalten Zugang zu über 200 Modellen – darunter Seedance 2.5, Veo 3.1 und Kling 3. Wenn ein Modell verklagt oder abgeschaltet wird, tauscht InVideo es aus; Ihr Workflow läuft weiter.\n- **Automatisierung ist eingebaut, nicht nachgerüstet.** Es gibt einen offiziellen MCP-Server, sodass die gesamte Pipeline Prompt → Skript → Filmmaterial → Untertitel programmatisch ausgelöst werden kann – die Art von Harness, die Sie sich sonst selbst um ComfyUI herum bauen müssten.\n- **Die kostenlose Stufe ist eine echte Probefahrt.** Mit Wasserzeichen und Minutenlimit, aber genug, um die Ausgabequalität zu beurteilen, bevor Sie zahlen.\n\n**Geschwindigkeit, konkret – und der ehrliche Haken:** Eine einzelne Roh-Generierung ist schnell, typischerweise Minuten. Aber InVideos eigene FAQ nennt für die vollständige End-to-End-Produktion eines Kurzfilms 2–5 Tage, nicht Minuten – denn nicht die Generierung selbst kostet Zeit, sondern das Auswählen und Zusammenstellen aus mehreren generierten Optionen. Betrachten Sie "2 Tage als realistische Untergrenze" für einen 1–3-minütigen fertigen Film als fairen Vergleichspunkt zu den 16–36 Minuten reiner Generierungszeit der lokalen Tür für 20 Sekunden ungeschnittenes Filmmaterial: InVideo tauscht Ihre Setup- und Schnittzeit gegen die eigene Produktionszeit – es eliminiert Zeit nicht vollständig.\n\nAktuelle Pläne, ab 17 $/Monat (Plus-Plan, jährliche Abrechnung, verifiziert im August 2026 – prüfen Sie [InVideos Preisseite](https://invideo.io/pricing/) für aktuelle Zahlen):',
        blockquote:
          '**Möchten Sie KI-Videos ohne lokales Setup erstellen?** Wenn Sie keine leistungsstarke GPU besitzen – oder schlicht keine Stunden mit der Installation und Konfiguration lokaler KI-Videotools verbringen wollen – lohnt sich ein Test von InVideo. [InVideos kostenlose Version testen →](https://invideo.io/pricing/)',
        columns: ['Plan', 'Preis', 'Credits/Monat', 'Am besten für'],
        rows: [
          { 'Plan': 'Free', 'Preis': '0 $', 'Credits/Monat': 'begrenzt', 'Am besten für': 'Erste Tests (mit Wasserzeichen)' },
          { 'Plan': 'Plus', 'Preis': '17 $/Monat (200 $/Jahr)', 'Credits/Monat': '75', 'Am besten für': 'Regelmäßige Creator – alle KI-Modelle, 4 Avatare & Stimmenklone, 100 iStock-Assets, unbegrenzte wasserzeichenfreie Exporte' },
          { 'Plan': 'Max', 'Preis': '85 $/Monat (1.000 $/Jahr)', 'Credits/Monat': '390', 'Am besten für': 'Vielproduzierende Kanäle, 16 Avatare' },
          { 'Plan': 'Generative', 'Preis': '170 $/Monat (2.000 $/Jahr)', 'Credits/Monat': '800+', 'Am besten für': 'Kurzfilm-/Produktionsvolumen' },
          { 'Plan': 'Elite', 'Preis': '900 $/Monat (10.800 $/Jahr)', 'Credits/Monat': '4.250+', 'Am besten für': 'Episodische und kommerzielle Skalierung' },
        ],
        note:
          'Alle oben genannten Preise sind Jahresabrechnungstarife, Stand August 2026 – monatliche Zahlung kostet mehr (InVideos eigene FAQ nennt Plus 20 $, Max 100 $, Generative 200 $, Elite 1.000 $ pro Monat). Prüfen Sie InVideos aktuelle Preisseite, bevor Sie sich auf eine Zahl hier verlassen; Pläne und Preise ändern sich.',
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Cloud oder lokal: Welche Tür ist Ihre?',
        content: 'Die Kurzversion, auf typische Situationen abgebildet:',
        columns: ['Ihre Situation', 'Empfehlung'],
        rows: [
          { 'Ihre Situation': 'Keine GPU, oder unter 12 GB VRAM', 'Empfehlung': 'InVideo (Cloud) – kein lokales Modell läuft unterhalb dieser Stufe gut' },
          { 'Ihre Situation': 'Wollen ein fertiges Video mit Voiceover, keine rohen Clips', 'Empfehlung': 'InVideo (Cloud) – lokale Modelle stellen keine vollständige Produktion zusammen' },
          { 'Ihre Situation': 'Termindruck, keine Toleranz für Setup', 'Empfehlung': 'InVideo (Cloud)' },
          { 'Ihre Situation': 'GPU ab 12 GB, Setup ist kein Problem, wollen Privatsphäre und 0 $ Grenzkosten', 'Empfehlung': 'Lokal: LTX-Video (12 GB) oder Wan 2.2 (24 GB für volle Qualität)' },
          { 'Ihre Situation': 'In der EU, im Vereinigten Königreich oder in Südkorea', 'Empfehlung': 'Lokal = nur Wan 2.2 oder LTX-2 (HunyuanVideos Lizenz schließt Sie aus)' },
          { 'Ihre Situation': 'Brauchen Automatisierung/API im großen Maßstab, ohne sie selbst zu bauen', 'Empfehlung': 'InVideo (Cloud, MCP-Server)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'Wer sollte InVideo wählen?',
        content:
          '**InVideo ist vermutlich die bessere Wahl, wenn Sie:**\n\n- keine leistungsstarke GPU besitzen\n- sofort mit dem Erstellen von Videos beginnen wollen\n- ComfyUI, CUDA, Modelle oder Python-Umgebungen nicht installieren und konfigurieren wollen\n- einen integrierten Workflow statt der Zusammenstellung mehrerer lokaler Tools bevorzugen\n- Skripte, Stimme, Musik, Untertitel und Videogenerierung in einem Workflow brauchen\n- fertige Videos wichtiger finden als das Experimentieren mit den zugrunde liegenden Modellen\n\n**Lokale KI ist vermutlich die bessere Wahl, wenn Sie:**\n\n- bereits passende GPU-Hardware besitzen\n- maximale Kontrolle wollen\n- mit Modellen und Workflows experimentieren wollen\n- über starke technische Fähigkeiten verfügen\n- Wert darauf legen, die Generierung lokal unter Kontrolle zu behalten\n- sehr große Mengen generieren und die Grenzkosten pro Generierung optimieren wollen',
        blockquote:
          '**Nicht sicher, welcher Weg zu Ihnen passt?** Wenn Sie Hardware und technisches Setup vermeiden möchten, ist das einfachste Experiment, InVideo einfach auszuprobieren und zu sehen, ob der Workflow zu Ihnen passt. [InVideo kostenlos testen →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'Sehen Sie sie in Aktion',
        items: [
          '[4 Open-Source-KI-Videomodelle im Vergleich – welches ist wirklich kostenlos?](https://www.youtube.com/watch?v=NHdYVssM6Aw) – Ausgabe von LTX 2.3, Wan 2.2, HunyuanVideo 1.5 und MiniMax H3 im direkten Vergleich, inklusive Lizenz-Kleingedrucktem.',
          '[InVideo Agent One Review](https://www.youtube.com/watch?v=uUHO9byu0c0) – der vollständige Workflow von Prompt bis fertigem Video.',
          '[Wan 2.2 vollständige lokale Demo](https://www.youtube.com/watch?v=fs62ML_ZgEs) – ehrliche Renderzeiten auf Consumer-Hardware (Launch-Woche, Juli 2025).',
          '[Wan-2.2-Tutorial mit wenig VRAM](https://www.youtube.com/watch?v=tQu0DjtOEyg) – das 14B-Modell auf einem 6-GB-Laptop (2025).',
        ],
        note:
          'Dies sind Videos von Drittanbietern, nicht produziert von PromptQuorum oder InVideo. Nur zu Referenzzwecken eingebunden – keine Empfehlung des Kanals oder seiner sonstigen Inhalte impliziert.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Kann ich KI-Videogenerierung mit 8 GB VRAM ausführen?',
            a: 'Knapp. Wan 2.2s TI2V-5B-Variante läuft quantisiert auf 6–8 GB, mit reduzierter Qualität und kurzen Cliplängen. Für die ernsthaften Modelle sind 12 GB die reale Untergrenze – und darunter ist ein Cloud-Tool wie InVideo die praktische Antwort.',
          },
          {
            q: 'Ist Wan 2.2 wirklich kostenlos für kommerzielle Nutzung?',
            a: 'Ja. Es ist Apache 2.0 – uneingeschränkte kommerzielle Nutzung, keine Umsatzgrenzen, keine Gebietsausschlüsse, keine Rechte, die an Ihren Ausgaben beansprucht werden. Es ist das einzige der Top-Lokalmodelle ohne jegliches Lizenz-Kleingedrucktes.',
          },
          {
            q: 'Kann ich HunyuanVideo in der EU oder im UK nutzen?',
            a: 'Nein. Die Tencent Hunyuan Community License gilt ausdrücklich nicht in der EU, im UK oder in Südkorea – das betrifft sowohl das Modell selbst als auch seine Ausgaben. Nutzen Sie stattdessen Wan 2.2 oder LTX-2.',
          },
          {
            q: 'Brauche ich eine GPU, um InVideo zu nutzen?',
            a: 'Nein. InVideo läuft vollständig im Browser; die gesamte Generierung findet auf der Infrastruktur des Anbieters statt. Ein fünf Jahre alter Laptop reicht völlig aus.',
          },
          {
            q: 'Können lokale Modelle ein vollständiges YouTube-Video mit Voiceover erzeugen?',
            a: 'Nicht von sich aus. Lokale Modelle generieren rohe Clips von 5–20 Sekunden (LTX-2 inklusive synchronisiertem Ton, die anderen sind stumm). Skript, Voiceover, Musik, Untertitel und Schnitt erfordern jeweils separate Werkzeuge, die Sie selbst zu einer Pipeline zusammenstellen.',
          },
          {
            q: 'Was ist der tatsächliche Haken bei "kostenlosen" lokalen KI-Videos?',
            a: 'Hardware-Kosten (eine leistungsfähige GPU), Setup-Zeit (ComfyUI und seine Abhängigkeiten) und die DIY-Pipeline rund um die rohen Ausgabe-Clips. Die Modellgewichte selbst kosten tatsächlich 0 $ pro Generierung, für immer.',
          },
          {
            q: 'Gibt es ein Wan 2.7 oder ein neueres Wan-Modell?',
            a: 'Nein. Offizielle Wan-Releases enden bei 2.2. Jede Seite, die "Wan-2.7-Gewichte" anbietet, ist Betrug – laden Sie nur aus den offiziellen GitHub- oder Hugging-Face-Repositories herunter.',
          },
          {
            q: 'Ich bin kompletter Anfänger. Wo sollte ich anfangen?',
            a: 'Mit InVideos kostenloser Stufe – Sie haben in Minuten ein fertiges, erzähltes Video und können beurteilen, ob KI-Video Ihren Zielen überhaupt dient. Wenn Sie später eine leistungsfähige GPU kaufen und volle Kontrolle sowie Privatsphäre wollen, bleibt die lokale Tür offen.',
          },
          {
            q: 'Was ist beim Ausführen dieser lokalen Modelle auf Mac vs. Windows anders?',
            a: 'ComfyUI läuft auf Apple Silicon (M1–M4) über PyTorchs MPS-Backend, aber rechnen Sie mit etwa 3- bis 5-mal langsamerer Generierung als bei einer vergleichbaren NVIDIA-GPU – brauchbar, aber nicht wettbewerbsfähig bei der Geschwindigkeit. Das größere praktische Problem ist die Software-Unterstützung: CUDA-spezifische Optimierungen, auf die diese Modelle setzen (Flash-Attention, GGUF/FP8-Quantisierungswerkzeuge), sind auf dem Mac deutlich weniger ausgereift, sodass mehrere Community-Workflows und Installationsanleitungen Windows oder Linux mit einer NVIDIA-Karte voraussetzen und Anpassungen brauchen oder schlicht nicht wie dokumentiert laufen. Ein Vorteil: Der einheitliche Speicher (Unified Memory) von Apple Silicon kann ein größeres Modell im Speicher unterbringen, als eine dedizierte GPU mit gleichem VRAM erlauben würde, auch wenn die Ausführung langsamer ist. Wenn Sie speziell für lokale Videogenerierung Hardware kaufen, ist Windows oder Linux plus NVIDIA der gut unterstützte Weg; ein bereits vorhandener Mac eignet sich zum Experimentieren, ist aber nicht die empfohlene Zielplattform für ernsthaften Durchsatz.',
          },
          {
            q: 'Kann ich denselben Charakter über mehrere lokale Video-Clips hinweg konsistent halten?',
            a: 'Ja, mit zusätzlichem Aufwand – keines der drei Modelle garantiert das standardmäßig über separate Generierungen hinweg. Die zwei funktionierenden Ansätze: dasselbe Referenzbild in den Bild-zu-Video-Modus einspeisen (alle drei unterstützen I2V), oder eine kleine LoRA auf Ihren Charakter trainieren. Sowohl Wan 2.2 als auch LTX-2 haben dokumentierte LoRA-Workflows dafür – LTX-2s Variante heißt IC-LoRA (In-Context-LoRA) und unterstützt ausdrücklich Konsistenz über mehrere Charaktere hinweg. Die Community ist sich in einem Punkt einig: eine trainierte LoRA liefert weit zuverlässigere Ergebnisse als Prompting oder ein Referenzbild allein. InVideos Brand-Kit- und KI-Avatar-Funktionen lösen dasselbe zugrunde liegende Problem anders – ein einmal konfiguriertes, wiederverwendbares Avatar- und Stimmprofil, ohne Training.',
          },
          {
            q: 'Muss ich bei der Nutzung lokaler KI-Videomodelle die DSGVO beachten?',
            a: 'Bei lokaler Generierung mit Wan 2.2, LTX-2 oder HunyuanVideo verlassen Ihre Eingabebilder, Referenzmaterialien und generierten Videos Ihren Rechner nicht – es findet keine Datenübertragung an einen Dritten statt, was die meisten DSGVO-Fragen zur Auftragsverarbeitung (Art. 28 DSGVO) von vornherein entschärft. Bei InVideo ist das anders: Als Cloud-SaaS verarbeitet der Anbieter Ihre Skripte, Eingaben und generierten Videos auf seiner eigenen Infrastruktur, was eine Prüfung des Auftragsverarbeitungsvertrags, des Serverstandorts und der jeweiligen Datenschutzerklärung erfordert, bevor Sie personenbezogene oder sensible Inhalte hochladen. Für Unternehmen mit strengen Anforderungen an BSI-Grundschutz oder Datenresidenz ist die lokale Route die konservativere Wahl.',
          },
          {
            q: 'Eignet sich diese Vergleichsentscheidung für den deutschen Mittelstand?',
            a: 'Ja, mit unterschiedlichen Schwerpunkten je nach Ressourcen. Kleinere Mittelstandsunternehmen ohne eigene GPU-Infrastruktur oder IT-Abteilung für ComfyUI-Wartung profitieren meist von InVideo: kein Hardware-Investment, planbare monatliche Kosten ab 17 $/Monat, und die Cloud-Pipeline übernimmt Skript, Voiceover und Untertitel ohne internes Know-how. Unternehmen mit vorhandener GPU-Hardware (z. B. aus anderen KI-Projekten) und Interesse an voller Datenkontrolle sollten Wan 2.2 prüfen – Apache 2.0 ohne Umsatzgrenzen passt zu praktisch jeder Unternehmensgröße und erlaubt unbegrenzte Generierungen ohne laufende Kosten pro Video.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Testen, bevor Sie entscheiden',
        content:
          'Sie müssen sich nicht auf ein lokales GPU-Setup – oder ein kostenpflichtiges Abonnement – festlegen, nur um den Cloud-Workflow zu bewerten. Bevor Sie Hardware kaufen oder ein Wochenende mit ComfyUI verbringen, lohnt es sich, zunächst fünf Minuten den anderen Weg zu gehen:\n\n1. Testen Sie InVideos kostenlose Version.\n2. Erstellen Sie ein kurzes Video.\n3. Bewerten Sie die Ausgabequalität und wie sich der Workflow angefühlt hat.\n4. Vergleichen Sie diese Erfahrung mit dem Setup-Aufwand einer lokalen Installation.\n\nDas verwandelt den Vergleich von etwas, worüber Sie lesen, in etwas, das Sie selbst testen können – in weniger Zeit, als den Rest dieses Artikels zu lesen braucht.',
        blockquote:
          '[InVideos kostenlose Version testen →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'Das Fazit',
        content:
          'Gehen Sie lokal, wenn Sie eine GPU ab 12 GB haben (oder kaufen werden), gerne eigene Werkzeuge aufbauen und Privatsphäre sowie unbegrenzte Generierungen für 0 $ höher gewichten als Bequemlichkeit. Wan 2.2 ist die sicherste Grundlage – Top-Qualität, Apache 2.0, kein Kleingedrucktes –, mit LTX-2 als Spezialist für Geschwindigkeit und Ton.\n\nGehen Sie in die Cloud, wenn Sie die Hardware nicht haben, das Setup nicht wollen oder fertige Videos statt roher Clips brauchen. Für die meisten Menschen, die einfach nur KI-generierte Videos machen wollen, ist die Cloud-Route der einfachere Einstieg: Wenn Sie nicht bereits die Hardware und das technische Interesse mitbringen, die lokale Generierung erfordert, nimmt Ihnen InVideo den Großteil dieser Komplexität in einem einzigen Prompt ab, mit gebündeltem Modell, Assets und Automatisierung – ab 0 $ zum Testen und 17 $/Monat (jährliche Abrechnung), um das Wasserzeichen zu entfernen. Der einfachste Weg herauszufinden, ob es zu Ihrem Workflow passt, ist, die kostenlose Version zu testen.\n\nBeide Türen führen zu KI-Video. Die Frage war nie, welche Technologie besser ist – sondern welcher Workflow zu Ihrer Maschine, Ihrer Geduld und Ihren Zielen passt.',
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
          '[VBench-2.0-Rangliste](https://github.com/Vchitect/VBench) – unabhängiger Benchmark, verwendet für Qualitäts- und Physik-Treue-Werte.',
          '[InVideo-Preise](https://invideo.io/pricing/) – offizielle Plan- und Preisdetails.',
          '[InVideo-MCP-Server](https://invideo.io/ai/mcp) – offizielle Automatisierungsdokumentation.',
          '[MiniMax H3 auf GitHub](https://github.com/MiniMax-AI/MiniMax-H3) – offizielles Repository.',
          '[MiniMax H3 auf Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) – offizielle Modellgewichte.',
          '[InVideo: Wie lange dauert es, einen KI-Kurzfilm zu erstellen?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) – InVideos eigene End-to-End-Produktionszeit-Zahlen (2–5 Tage).',
          '[ComfyUI-Systemanforderungen](https://docs.comfy.org/installation/system_requirements) – offizielle Dokumentation zur Mac-/Apple-Silicon-MPS-Unterstützung.',
          '[LTX-Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) – offizieller Leitfaden zur Charakterkonsistenz (IC-LoRA).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Themen',
        items: [
          '[Lokale KI-Bildgenerierung vs. Cloud](/de/power-local-llm/local-ai-image-generation-vs-cloud) – das begleitende Stück, gleiche Struktur, für Bilder statt Video.',
          '[VRAM-Rechner für lokale Modelle](/de/local-llms/vram-calculator-local-llm) – exakte VRAM-Anforderungen pro Modell und Quantisierung.',
          '[Wie viel VRAM brauchen Sie?](/de/local-llms/how-much-vram-local-llm) – Übersichten über Modellgrößen von 7B bis 70B.',
          '[Beste GPUs für lokale KI 2026](/de/local-llms/best-gpus-for-local-llms) – Hardware-Empfehlungen nach Budgetstufe.',
          '[Beste Budget-GPUs für lokale KI](/de/local-llms/best-budget-gpus-local-llm) – Einstiegs-Hardware-Optionen.',
          '[GPU vs. CPU vs. Apple Silicon](/de/local-llms/gpu-vs-cpu-vs-apple-silicon) – Plattformvergleich für lokale Inferenz.',
          '[System-Prompts vs. User-Prompts](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) – Grundlagen der Prompt-Strukturierung, die sich auf Video-Prompting übertragen lassen.',
          '[Prompt Engineering für lokale Modelle](/de/local-llms/prompt-engineering-for-local-models) – strukturierte Prompting-Techniken.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-08-21',
    next_refresh_due: '2027-02-21',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'InVideo vs. IA de Video Local: Una Opción Cuesta $0 Más Tu Fin de Semana — la Otra Cuesta $17',
    seoTitle: 'IA de Video en la Nube vs Local 2026: InVideo vs Wan 2.2 y LTX-2',
    intro:
      'Hay dos puertas de entrada a la IA de video en 2026. La puerta uno es local: modelos de video abiertos y gratuitos que corren en tu propia GPU — generaciones ilimitadas, totalmente privadas, sin suscripción, pero tienes que construir todo el flujo de trabajo tú mismo. La puerta dos es la nube: InVideo, donde con un solo prompt obtienes un video narrado terminado — guion, imágenes de stock, locución, música y subtítulos incluidos, directo desde tu navegador. Ninguna puerta es "mejor". Esta guía te da la letra pequeña de las licencias que la mayoría de las comparaciones omiten, los requisitos reales de hardware y una herramienta de decisión que asocia tu situación con una recomendación.',
    metaDescription:
      'Los modelos de video con IA local (Wan 2.2, LTX-2, HunyuanVideo) son gratis si tu GPU puede correrlos. La nube de InVideo lo hace todo por $17/mes. Comparación honesta: VRAM, licencias, letra pequeña.',
    twitterDescription:
      'IA de video: nube vs local en 2026. InVideo lo integra todo por $17/mes. Wan 2.2, LTX-2 y HunyuanVideo corren gratis en tu propia GPU — si es lo bastante potente. Comparación honesta.',
    audience:
      'Creadores y desarrolladores que deciden entre la generación de video local gratuita en su propia GPU y el pipeline todo-en-uno en la nube de InVideo — cubre requisitos de hardware, letra pequeña de licencias y compensaciones de flujo de trabajo.',
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
      '**Para la mayoría de las personas con una GPU de 12 GB o más, Wan 2.2 es el mejor modelo de video con IA local en 2026** — con licencia Apache 2.0, sin límites de ingresos ni restricciones territoriales, y la puntuación de calidad más alta verificada públicamente (VBench ~84.7%) de cualquier modelo abierto, totalmente gratis. **InVideo es la mejor opción si no tienes esa GPU, o quieres un video narrado terminado en lugar de un clip en bruto** — su plan Plus, desde $17/mes (facturado anualmente), integra más de 200 modelos (incluyendo Kling 3, Veo 3.1 y Seedance 2.5) en un solo pipeline basado en navegador, con guion, locución, música y subtítulos incluidos. **HunyuanVideo 1.5 tiene el look cinematográfico local más logrado, pero su licencia excluye por completo a la UE, el Reino Unido y Corea del Sur** — evítalo si estás en esas regiones.',
    quickAnswerTop: {
      es: {
        question: '¿Debería generar video con IA de forma local o usar el pipeline en la nube de InVideo?',
        answer:
          'Genera de forma local si tienes una GPU de 12 GB o más, quieres generaciones ilimitadas a $0 y valoras la privacidad — Wan 2.2 (Apache 2.0, sin restricciones) es el punto de partida más seguro. Usa InVideo si no tienes el hardware adecuado, no quieres gestionar la configuración, o necesitas un video completo terminado (guion, locución, música, subtítulos) en lugar de un clip en bruto — su plan Plus empieza en $17/mes (facturado anualmente).',
        bullets: [
          'Menos de 12 GB de VRAM → InVideo es la opción práctica; los modelos locales son inutilizables por debajo de este nivel para calidad seria.',
          '12 GB de VRAM → LTX-Video 0.9.5, la única opción local seria en este nivel.',
          '16–24 GB+ de VRAM → Wan 2.2 (máxima calidad, Apache 2.0, cero restricciones) o LTX-2 (velocidad + audio sincronizado).',
          'En la UE, el Reino Unido o Corea del Sur → la licencia de HunyuanVideo 1.5 te excluye; usa Wan 2.2 o LTX-2 en su lugar.',
          'Necesitas un video narrado terminado, no un clip en bruto → los modelos locales solo generan clips silenciosos (excepto LTX) de 5 a 20 segundos; InVideo gestiona todo el pipeline de producción, desde $17/mes (facturado anualmente).',
        ],
        updatedDate: '2026-08-21',
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
      { label: 'La puerta de la nube: qué incluye InVideo', anchor: '#invideo-bundle' },
      { label: 'Nube o local: ¿cuál es tu puerta?', anchor: '#decision-guide' },
      { label: '¿Quién debería elegir InVideo?', anchor: '#who-should-choose' },
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
          '**Wan 2.2 es el único modelo de video local de primer nivel sin restricciones de licencia.** Apache 2.0, uso comercial sin restricciones, sin límites de ingresos, sin exclusiones territoriales — y la puntuación de calidad VBench más alta verificada entre los modelos open source (~84.7%).',
          '**InVideo integra más de 200 modelos — incluyendo Kling 3, Veo 3.1 y Seedance 2.5 — en un solo pipeline basado en navegador**, desde $17/mes (plan Plus, facturado anualmente), con guion, locución, música y subtítulos gestionados automáticamente.',
          '**La licencia de HunyuanVideo 1.5 excluye explícitamente a la UE, el Reino Unido y Corea del Sur** — tanto para el modelo como para sus resultados. Los lectores en esas regiones deben usar Wan 2.2 o LTX-2 en su lugar.',
          '**LTX-2 es el más rápido del trío local y el único con audio sincronizado integrado**, gratuito para uso comercial en empresas con ingresos anuales inferiores a $10M.',
          '**12 GB de VRAM es el piso realista para generación de video local en serio.** Por debajo de eso, InVideo se vuelve la opción más práctica.',
          '**Los modelos locales generan clips silenciosos en bruto de 5 a 20 segundos, no videos terminados.** Guion, locución, música, subtítulos y edición son herramientas separadas que tú mismo ensamblas — InVideo hace todo esto en un solo paso.',
          '**No existe "Wan 2.7".** Las páginas de descarga que lo ofrecen son estafas de SEO — los lanzamientos oficiales de Wan se detienen en 2.2.',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Por qué 2026 es un momento extraño para la IA de video',
        content:
          'El mercado propietario de video ha sido caótico. OpenAI cerró la app de consumo Sora en marzo de 2026, menos de seis meses después de su lanzamiento, tras una caída de descargas de aproximadamente 66% desde su pico (la API sigue activa por separado). Seedance 2.0 de ByteDance se topó con demandas de Hollywood y un lanzamiento global pausado ese mismo mes, tras cartas de cese y desista de Disney, Paramount y Warner Bros. — sigue siendo accesible en China, pero conlleva riesgo legal para uso comercial internacional. El modelo HappyHorse de Alibaba encabezó las tablas de calidad en abril de 2026 — y nunca se abrió al público.\n\nEse caos es exactamente lo que hace atractivas a ambas puertas. Los modelos locales abiertos te hacen independiente del drama de los proveedores. E InVideo absorbe ese drama por ti: su suscripción integra acceso a más de 200 modelos — incluyendo Kling 3, Veo 3.1 y Seedance 2.5 — así que cuando un modelo desaparece o es demandado, tu flujo de trabajo ni se entera.',
      },
      localModels: {
        id: 'local-models',
        title: 'La puerta local: tres modelos gratuitos en tu propia GPU',
        content:
          'Tres sistemas de pesos abiertos dominan la generación de video local ahora mismo, medido por descargas, actividad de la comunidad y resultados de benchmarks. Los tres corren a través de ComfyUI, una interfaz basada en nodos que instalas en tu propia máquina — no una herramienta tipo chat como Ollama. Son modelos de difusión, no LLMs.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 es el mejor modelo de video local en general en 2026 — Apache 2.0, máxima calidad, sin restricciones — mientras que LTX-2 gana en velocidad y audio sincronizado, y HunyuanVideo 1.5 ofrece el look más cinematográfico pero excluye por licencia a los usuarios de la UE/Reino Unido/Corea del Sur.' },
          { type: 'plain-terms', text: 'Si solo quieres una respuesta: consigue una GPU de 12 GB o más y corre Wan 2.2. Tiene la mejor calidad, la licencia más simple y ninguna letra pequeña.' },
        ],
        columns: ['Modelo', 'Licencia', 'VRAM', 'Salida', 'Característica destacada'],
        rows: [
          { 'Modelo': 'Wan 2.2 (Alibaba)', 'Licencia': 'Apache 2.0 — sin restricciones', 'VRAM': '6–8GB (5B) / 15–25GB (14B)', 'Salida': '480p/720p, clips de ~5s', 'Característica destacada': 'Mayor calidad VBench verificada (~84.7%)' },
          { 'Modelo': 'LTX-2 (Lightricks)', 'Licencia': 'LTX Community License — gratis por debajo de $10M en ingresos', 'VRAM': '18–20GB cuantizado, 32GB+ completo', 'Salida': '480p–1080p, 5–20s, con audio', 'Característica destacada': 'Único modelo con audio y video sincronizados en un solo paso' },
          { 'Modelo': 'HunyuanVideo 1.5 (Tencent)', 'Licencia': 'Tencent Community License — excluye a UE/Reino Unido/Corea del Sur', 'VRAM': '14GB mínimo, 24GB cómodo', 'Salida': '480p/720p, hasta 10s', 'Característica destacada': 'Favorito de la comunidad por su iluminación cinematográfica; el más ligero en VRAM' },
        ],
        note:
          '⚠️ Alerta de estafa: no existe "Wan 2.7". Las páginas de descarga que afirman ofrecer "pesos abiertos de Wan 2.7" son estafas de SEO. Los lanzamientos oficiales de Wan se detienen en 2.2 — descarga solo desde los repositorios oficiales de GitHub o Hugging Face enlazados abajo.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — el rey de la calidad, verdaderamente gratis',
        content:
          'Wan 2.2 es el modelo de video abierto más ampliamente desplegado: solo su repositorio I2V-A14B registró aproximadamente 4.24 millones de descargas en Hugging Face en un solo mes, con cientos de derivados de la comunidad construidos sobre él. Se distribuye en tres variantes — T2V-A14B e I2V-A14B (mezcla de expertos, 27B parámetros totales / 14B activos), más una TI2V-5B compacta que gestiona tanto texto-a-video como imagen-a-video con apenas 6–8GB de VRAM. El nivel 14B necesita entre 15GB (GGUF Q3) y 25GB (FP8); el comando oficial sin cuantizar pide 80GB. Su licencia es Apache 2.0 — verdaderamente gratuita, uso comercial sin restricciones, sin umbrales de ingresos, sin exclusiones territoriales.\n\n**Velocidad, en concreto:** un solo clip de 5 segundos tarda aproximadamente entre 4 y 9 minutos en una RTX 4090 (una cifra reportada de forma independiente — Wan 2.2 no genera clips más largos de forma nativa en un solo paso). Para construir una secuencia de 20 segundos, generarías 4 clips separados de 5 segundos y los unirías — calcula entre 16 y 36 minutos de tiempo de generación en bruto, más la edición manual para unirlos de forma fluida. Ese rango es una extrapolación de la cifra por clip, no un benchmark de 20 segundos medido directamente.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — velocidad más sonido sincronizado',
        content:
          'LTX-2 es el único modelo abierto de este trío que genera audio y video sincronizados en un solo paso — pasos, ambiente y efectos llegan junto con la imagen. También es el más rápido de los tres y el más flexible en cuanto a hardware. La arquitectura es un transformador de difusión de 22B; LTX-2.3 (marzo de 2026) sigue siendo totalmente compatible junto al actual LTX-2.5. La licencia es la LTX Community License — gratuita para uso comercial si los ingresos totales de tu empresa son inferiores a $10M al año, con una licencia comercial de pago requerida por encima de ese umbral. (Algunos análisis de terceros la llaman incorrectamente Apache 2.0 — la [página oficial de la licencia](https://ltx.io/model/license) es la única fuente fiable.) Los requisitos de hardware van de 18–20GB de VRAM cuantizado a 32GB+ a precisión completa; en tarjetas de 12GB, el más antiguo LTX-Video 0.9.5 sigue siendo la opción práctica.\n\n**Velocidad, en concreto:** LTX-2 es cualitativamente el más rápido del trío, con vistas previas casi en tiempo real en tarjetas de consumo de gama alta — pero no existe una cifra de minutos por clip verificada de forma independiente en una RTX 4090 al momento de escribir esto, así que no vamos a inventar una. La única cifra concreta disponible proviene del propio benchmark de Lightricks en "superchips de Nvidia" de nivel datacenter (no una GPU de consumo): un clip de 10 segundos en unos 6.8 segundos. Trátalo como un techo de lo que la arquitectura puede hacer en hardware serio, no como lo que verá tu equipo en casa.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — el look cinematográfico, con una trampa legal',
        content:
          'El modelo de 8.3B de Tencent, lanzado en noviembre de 2025, es el favorito de la comunidad por su iluminación y textura cinematográficas, y el más ligero del trío en VRAM: 14GB mínimo con offloading, 24GB cómodo, a razón de unos 75 segundos por clip de 480p en una RTX 4090. Genera de forma nativa 480p/720p, hasta 1080p mediante superresolución integrada, con clips de hasta 10 segundos.\n\n**Velocidad, en concreto:** con ~75 segundos por clip de 480p de 5 segundos, eso son unos 15 segundos de renderizado por cada segundo de video. Su duración máxima nativa por clip es de 10 segundos, así que una secuencia de 20 segundos requiere dos generaciones al máximo de duración — extrapolando la tasa por segundo, calcula unos 5 minutos de generación en bruto para 20 segundos de metraje, antes de unirlos. Esto es una extrapolación de la cifra de 5 segundos que tenemos como fuente, no un benchmark de 10 o 20 segundos medido directamente.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Advertencia de licencia — lee antes de descargar. HunyuanVideo 1.5 usa la Tencent Hunyuan Community License, no Apache 2.0. La licencia no aplica en la Unión Europea, el Reino Unido ni Corea del Sur — usuarios en esas regiones no están autorizados a usar el modelo ni sus resultados. También limita el uso a 100 millones de usuarios activos mensuales y prohíbe entrenar modelos competidores con sus resultados. Si estás en la UE, el Reino Unido o Corea del Sur, evita este modelo: Wan 2.2 cubre el mismo nivel de calidad sin restricciones.',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'Uno para vigilar: MiniMax H3',
        content:
          'Lanzado el 3 de agosto de 2026, MiniMax H3 es un modelo omni-modal de 33.1B con audio estéreo nativo, compatibilidad con ComfyUI desde el primer día y versiones cuantizadas que corren en una RTX 3060. Dos advertencias antes de tratarlo como una cuarta opción: el lanzamiento local se limita a 768p (el pipeline completo de 2K sigue siendo solo alojado), y su Community License, según se informa, incluye sus propias restricciones geográficas y un umbral de ingresos de $20M — revisa la ficha oficial del modelo antes de comprometerte. Las señales iniciales son sólidas, pero tres semanas de existencia y estar listo para producción son cosas distintas.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'El filtro del hardware',
        content: [
          'La generación de video local es gratis de la misma manera en que un cachorro es gratis: los pesos del modelo no cuestan nada, pero la GPU es el verdadero precio de entrada. Sáltate por completo la generación local si tu GPU tiene menos de 12 GB de VRAM y no planeas actualizarla — ninguno de los tres modelos anteriores corre con calidad utilizable por debajo de ese nivel, y una plataforma en la nube te dará mejores resultados más rápido.',
          '¿No estás seguro de qué significa todo esto para tu equipo? Estas guías lo explican: [Calculadora de VRAM](/es/local-llms/vram-calculator-local-llm) para requisitos exactos por modelo, [¿Cuánta VRAM necesitas?](/es/local-llms/how-much-vram-local-llm) para tablas comparativas entre tamaños de modelo, [Mejores GPU para IA local](/es/local-llms/best-gpus-for-local-llms) y [Mejores GPU económicas](/es/local-llms/best-budget-gpus-local-llm) para recomendaciones de hardware, y [GPU vs CPU vs Apple Silicon](/es/local-llms/gpu-vs-cpu-vs-apple-silicon) para comparaciones de plataformas. Una advertencia honesta: esas guías usan la fórmula de VRAM para LLMs (parámetros × bits ÷ 8). Los modelos de difusión de video también escalan la VRAM con la resolución y la duración del clip, así que trata esas cifras como un piso, no un techo, para cargas de trabajo de video.',
        ],
        columns: ['Tu GPU', 'Qué puedes correr'],
        rows: [
          { 'Tu GPU': '6–8GB VRAM', 'Qué puedes correr': 'Wan 2.2 TI2V-5B (cuantizado) — utilizable, calidad de entrada' },
          { 'Tu GPU': '12GB VRAM', 'Qué puedes correr': 'LTX-Video 0.9.5 — la única opción seria en este nivel' },
          { 'Tu GPU': '16GB VRAM', 'Qué puedes correr': 'HunyuanVideo 1.5 (si la licencia lo permite), Wan 2.2 14B en GGUF Q3' },
          { 'Tu GPU': '24GB+ VRAM', 'Qué puedes correr': 'Todo: Wan 2.2 14B en alta calidad, LTX-2 cuantizado' },
        ],
        note:
          'Costo aproximado de hardware en agosto de 2026: una RTX 3060 12GB usada ronda los $170–220, una RTX 3090 usada ronda los $900–1,100. Los precios de GPU varían — verifica el precio actual antes de comprar en lugar de confiar en estas cifras pasados unos meses. Los precios en tu país pueden variar según impuestos locales.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'Lo que realmente implica correr generación de video local',
        content:
          'Con modelos locales, no estás instalando una herramienta de video — estás ensamblando un pipeline.\n\n**La configuración de generación.** ComfyUI está basado en nodos: construyes, o importas y depuras, un grafo de flujo de trabajo con loaders, samplers y decoders. Espera desajustes de versión de CUDA, versiones fijadas de PyTorch y algún que otro error de instalación de `flash_attn` antes de que se renderice tu primer frame.\n\n**El prompting.** Los modelos de video necesitan prompts estructurados — tipo de plano, movimiento de cámara, iluminación, acción del sujeto — no frases de una línea. No hay un asistente de prompts integrado ni una capa de system prompt; tú escribes toda la estructura. Nuestras guías sobre [system prompts vs. user prompts](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) y [prompt engineering para modelos locales](/es/local-llms/prompt-engineering-for-local-models) cubren fundamentos que se transfieren directamente al prompting de video.\n\n**Todo lo que rodea al clip.** Los modelos locales generan clips en bruto y silenciosos (excepto LTX) de 5 a 20 segundos. Guion, locución, música, imágenes de stock, subtítulos y edición son herramientas separadas que tú eliges, instalas y conectas entre sí.',
        promptExamples: [
          { label: 'Débil (una línea)', text: 'Un perro en una playa' },
          { label: 'Estructurado (lo que necesitan los modelos de video)', text: 'Golden retriever corriendo por una orilla mojada durante la hora dorada, plano de seguimiento bajo desde el lateral, poca profundidad de campo, contraluz cálido, cámara lenta suave, 24fps cinematográfico' },
        ],
        note:
          'Sujeto y acción, comportamiento de cámara, iluminación, estilo — cuatro ingredientes en una sola frase marcan la diferencia entre una tragamonedas y una cámara. Si ese stack DIY te suena emocionante, la puerta local es la tuya. Si te sonó agotador, sigue leyendo.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'La puerta de la nube: qué incluye InVideo',
        sponsoredSlot: true,
        content:
          'InVideo es un ejemplo de la puerta de la nube — no el único, y vale la pena saber en qué se diferencia de los demás antes de asumir que "nube" significa una sola cosa. Runway se integra directamente en editores profesionales (Premiere Pro, Final Cut, DaVinci Resolve), orientado a flujos de trabajo híbridos de IA más editor en lugar de un video terminado y ensamblado. Dream Machine de Luma AI se especializa en salida HDR nativa de 16 bits para pipelines de composición VFX (After Effects, Nuke) — una audiencia completamente distinta. Pika se mantiene ligero: generación rápida de clips en bruto sin guion, locución ni ensamblaje de imágenes de stock integrados, así que igual necesitas herramientas separadas para todo lo que rodea al clip — el mismo problema de pipeline DIY que correr un modelo local, solo que sin el requisito de GPU. Lo que distingue a InVideo de los tres es que no es principalmente una herramienta de generación en bruto: es un ensamblador de guion-a-video-terminado que además te da acceso a modelos de generación en bruto (Kling, Veo, Seedance) cuando los necesitas.\n\nInVideo no es un modelo de video — es todo el pipeline de producción como servicio. Escribes un tema o pegas un guion; su agente v4 devuelve un video terminado de hasta 30 minutos: guion generado por IA, escenas ensambladas desde una biblioteca de stock de más de 16M de activos o clips generados al momento, locución con IA en más de 50 idiomas (incluyendo clonación de voz), música, subtítulos y estilo de marca. Corre en el navegador — tu GPU es irrelevante.\n\nTres cosas destacan para esta comparación:\n\n- **El caos de los modelos, absorbido.** Todos los planes de pago incluyen acceso a más de 200 modelos — Seedance 2.5, Veo 3.1 y Kling 3 entre ellos. Cuando un modelo es demandado o cerrado, InVideo lo sustituye; tu flujo de trabajo continúa.\n- **La automatización viene integrada, no añadida.** Hay un servidor MCP oficial, así que todo el pipeline prompt → guion → metraje → subtítulos se puede activar de forma programática — el tipo de infraestructura que de otro modo tendrías que construir tú mismo alrededor de ComfyUI.\n- **El nivel gratuito es una prueba real.** Con marca de agua y minutos limitados, pero suficiente para juzgar la calidad del resultado antes de pagar.\n\n**Velocidad, en concreto — y la trampa honesta:** una sola generación en bruto es rápida, típicamente minutos. Pero el propio FAQ de InVideo sitúa la producción completa de extremo a extremo de un cortometraje en 2 a 5 días, no minutos — porque elegir y ensamblar entre múltiples opciones generadas, no la generación en sí, es lo que consume el tiempo. Trata "2 días como un piso realista" para un cortometraje terminado de 1 a 3 minutos como el punto de comparación justo frente a los 16–36 minutos de generación en bruto de la puerta local para 20 segundos de metraje sin editar: InVideo cambia tu tiempo de configuración y edición por su propio tiempo de producción, no elimina el tiempo por completo.\n\nPlanes actuales, desde $17/mes (plan Plus, facturado anualmente, verificado en agosto de 2026 — consulta la [página de precios de InVideo](https://invideo.io/pricing/) para cifras actualizadas):',
        blockquote:
          '**¿Quieres crear videos con IA sin la configuración local?** Si no tienes una GPU potente — o simplemente no quieres pasar horas instalando y configurando herramientas locales de IA de video — vale la pena probar InVideo. [Prueba la versión gratuita de InVideo →](https://invideo.io/pricing/)',
        columns: ['Plan', 'Precio', 'Créditos/mes', 'Ideal para'],
        rows: [
          { 'Plan': 'Free', 'Precio': '$0', 'Créditos/mes': 'limitados', 'Ideal para': 'Probar el terreno (con marca de agua)' },
          { 'Plan': 'Plus', 'Precio': '$17/mes ($200/año)', 'Créditos/mes': '75', 'Ideal para': 'Creadores habituales — todos los modelos de IA, 4 avatares y clonaciones de voz, 100 activos de iStock, exportaciones ilimitadas sin marca de agua' },
          { 'Plan': 'Max', 'Precio': '$85/mes ($1,000/año)', 'Créditos/mes': '390', 'Ideal para': 'Canales de alto volumen, 16 avatares' },
          { 'Plan': 'Generative', 'Precio': '$170/mes ($2,000/año)', 'Créditos/mes': '800+', 'Ideal para': 'Volumen de cortometrajes / producción' },
          { 'Plan': 'Elite', 'Precio': '$900/mes ($10,800/año)', 'Créditos/mes': '4,250+', 'Ideal para': 'Escala episódica y comercial' },
        ],
        note:
          'Todos los precios anteriores son tarifas de facturación anual a agosto de 2026 — pagar mes a mes cuesta más (el propio FAQ de InVideo cita Plus $20, Max $100, Generative $200, Elite $1,000 al mes). Consulta la página de precios en vivo de InVideo antes de confiar en cualquier cifra aquí; los planes y precios cambian.',
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Nube o local: ¿cuál es tu puerta?',
        content: 'La versión corta, mapeada a situaciones comunes:',
        columns: ['Tu situación', 'Recomendación'],
        rows: [
          { 'Tu situación': 'Sin GPU, o menos de 12GB de VRAM', 'Recomendación': 'InVideo (nube) — ningún modelo local corre bien por debajo de este nivel' },
          { 'Tu situación': 'Quieres un video terminado con locución, no clips en bruto', 'Recomendación': 'InVideo (nube) — los modelos locales no ensamblan una producción completa' },
          { 'Tu situación': 'Con plazo urgente, cero tolerancia a la configuración', 'Recomendación': 'InVideo (nube)' },
          { 'Tu situación': 'GPU de 12GB+, cómodo con la configuración, quieres privacidad y $0 de costo marginal', 'Recomendación': 'Local: LTX-Video (12GB) o Wan 2.2 (24GB para máxima calidad)' },
          { 'Tu situación': 'En la UE, el Reino Unido o Corea del Sur', 'Recomendación': 'Local = solo Wan 2.2 o LTX-2 (la licencia de HunyuanVideo te excluye)' },
          { 'Tu situación': 'Necesitas automatización/API a escala sin construirla', 'Recomendación': 'InVideo (nube, servidor MCP)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: '¿Quién debería elegir InVideo?',
        content:
          '**InVideo probablemente sea la mejor opción si:**\n\n- No tienes una GPU potente\n- Quieres empezar a crear videos de inmediato\n- No quieres instalar y configurar ComfyUI, CUDA, modelos o entornos de Python\n- Quieres un flujo de trabajo integrado en lugar de ensamblar varias herramientas locales\n- Necesitas guiones, voz, música, subtítulos y generación de video en un solo flujo de trabajo\n- Te importa más el video terminado que experimentar con los modelos subyacentes\n\n**La IA local probablemente sea la mejor opción si:**\n\n- Ya tienes el hardware de GPU adecuado\n- Quieres el máximo control\n- Quieres experimentar con modelos y flujos de trabajo\n- Tienes habilidades técnicas sólidas\n- Priorizas mantener la generación controlada localmente\n- Esperas generar volúmenes muy grandes y quieres optimizar el costo marginal de generación',
        blockquote:
          '**¿No estás seguro de cuál ruta es la adecuada para ti?** Si quieres evitar el hardware y la configuración técnica, el experimento más sencillo es simplemente probar InVideo y ver si su flujo de trabajo se ajusta a tus necesidades. [Prueba InVideo gratis →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'Míralos en acción',
        items: [
          '[4 modelos de video con IA open source comparados — ¿cuál es realmente gratis?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — comparación directa de resultados de LTX 2.3, Wan 2.2, HunyuanVideo 1.5 y MiniMax H3, incluyendo la letra pequeña de las licencias.',
          '[Reseña de InVideo Agent One](https://www.youtube.com/watch?v=uUHO9byu0c0) — el flujo de trabajo completo de prompt a video terminado.',
          '[Demo local completa de Wan 2.2](https://www.youtube.com/watch?v=fs62ML_ZgEs) — tiempos de renderizado honestos en hardware de consumo (semana de lanzamiento, julio de 2025).',
          '[Tutorial de Wan 2.2 con poca VRAM](https://www.youtube.com/watch?v=tQu0DjtOEyg) — corriendo el modelo 14B en una laptop de 6GB (2025).',
        ],
        note:
          'Estos son videos de terceros, no producidos por PromptQuorum ni por InVideo. Incluidos solo como referencia — no implican ningún respaldo al canal ni a su otro contenido.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo generar AI video con 8GB de VRAM?',
            a: 'Apenas. La variante TI2V-5B de Wan 2.2 corre en 6–8GB cuantizada, con calidad reducida y clips cortos. Para los modelos serios, 12GB es el piso real — y por debajo de eso, una herramienta en la nube como InVideo es la respuesta práctica.',
          },
          {
            q: '¿Es Wan 2.2 realmente gratis para uso comercial?',
            a: 'Sí. Es Apache 2.0 — uso comercial sin restricciones, sin límites de ingresos, sin exclusiones territoriales, sin derechos reclamados sobre tus resultados. Es el único de los principales modelos locales sin letra pequeña en la licencia.',
          },
          {
            q: '¿Puedo usar HunyuanVideo en la UE o el Reino Unido?',
            a: 'No. La Tencent Hunyuan Community License explícitamente no aplica en la UE, el Reino Unido ni Corea del Sur — eso cubre tanto al modelo en sí como a sus resultados. Usa Wan 2.2 o LTX-2 en su lugar.',
          },
          {
            q: '¿Necesito una GPU para usar InVideo?',
            a: 'No. InVideo corre completamente en el navegador; toda la generación ocurre en su infraestructura. Una laptop de cinco años funciona perfectamente.',
          },
          {
            q: '¿Pueden los modelos locales producir un video completo de YouTube con locución?',
            a: 'No por sí solos. Los modelos locales generan clips en bruto de 5 a 20 segundos (LTX-2 incluye audio sincronizado; los demás son silenciosos). Guion, locución, música, subtítulos y edición requieren cada uno herramientas separadas que tú mismo ensamblas en un pipeline.',
          },
          {
            q: '¿Cuál es la trampa real de la IA de video local "gratuita"?',
            a: 'El costo del hardware (una GPU capaz), el tiempo de configuración (ComfyUI y sus dependencias), y el pipeline DIY necesario alrededor de los clips de salida en bruto. Los pesos del modelo en sí realmente cuestan $0 por generación, para siempre.',
          },
          {
            q: '¿Existe un Wan 2.7 o un modelo Wan más reciente?',
            a: 'No. Los lanzamientos oficiales de Wan se detienen en 2.2. Cualquier sitio que ofrezca "pesos de Wan 2.7" es una estafa — descarga solo desde los repositorios oficiales de GitHub o Hugging Face.',
          },
          {
            q: 'Soy un principiante total. ¿Por dónde debería empezar?',
            a: 'El nivel gratuito de InVideo — tendrás un video terminado y narrado en minutos y podrás juzgar si la IA de video sirve a tus objetivos. Si más adelante compras una GPU capaz y quieres control total y privacidad, la puerta local sigue abierta.',
          },
          {
            q: '¿Qué diferencia hay al correr estos modelos locales en Mac vs Windows?',
            a: 'ComfyUI corre en Apple Silicon (M1–M4) a través del backend MPS de PyTorch, pero espera una generación aproximadamente de 3 a 5 veces más lenta que una GPU NVIDIA equivalente — utilizable, no competitiva en velocidad. El problema práctico mayor es el soporte de software: las optimizaciones específicas de CUDA en las que se apoyan estos modelos (flash-attention, herramientas de cuantización GGUF/FP8) son mucho menos maduras en Mac, así que varios flujos de trabajo y guías de instalación de la comunidad asumen Windows o Linux con una tarjeta NVIDIA y pueden necesitar ajustes, o simplemente no correr como está documentado. Una ventaja: la memoria unificada de Apple Silicon puede permitirte encajar un modelo más grande en memoria de lo que permitiría una GPU discreta con la misma VRAM, aunque corra más lento. Si estás comprando hardware específicamente para generación de video local, Windows o Linux más NVIDIA es el camino bien soportado; un Mac que ya tienes está bien para experimentar, no el objetivo recomendado para volumen serio.',
          },
          {
            q: '¿Puedo mantener el mismo personaje consistente entre varios clips de video local?',
            a: 'Sí, con trabajo extra — ninguno de los tres modelos garantiza esto de fábrica entre generaciones separadas. Los dos enfoques que funcionan: alimentar la misma imagen de referencia en modo imagen-a-video (los tres admiten I2V), o entrenar un pequeño LoRA de tu personaje. Wan 2.2 y LTX-2 tienen flujos de trabajo LoRA documentados para esto — la versión de LTX-2 se llama IC-LoRA (in-context LoRA) y admite explícitamente consistencia multi-personaje. La orientación de la comunidad es consistente en un punto: un LoRA entrenado da resultados mucho más fiables que el prompting o una imagen de referencia por sí solos. Las funciones de kit de marca y avatar de IA de InVideo resuelven el mismo problema subyacente de otra forma — un avatar y perfil de voz fijos que configuras una vez y reutilizas, sin necesidad de entrenamiento.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Pruébalo antes de decidir',
        content:
          'No necesitas comprometerte con una configuración de GPU local — ni con una suscripción de pago — solo para evaluar el flujo de trabajo en la nube. Antes de comprar hardware o de pasar un fin de semana con ComfyUI, vale la pena dedicar cinco minutos a la otra vía primero:\n\n1. Prueba la versión gratuita de InVideo.\n2. Crea un video corto.\n3. Evalúa la calidad del resultado y cómo se sintió el flujo de trabajo.\n4. Compara esa experiencia con el esfuerzo de configuración que requeriría una instalación local.\n\nEso convierte la comparación de algo que lees en algo que puedes probar tú mismo en menos tiempo del que toma leer el resto de este artículo.',
        blockquote:
          '[Prueba la versión gratuita de InVideo →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'El veredicto',
        content:
          'Ve por lo local si tienes (o vas a comprar) una GPU de 12GB o más, disfrutas construir tus propias herramientas y valoras la privacidad y las generaciones ilimitadas a $0 por encima de la comodidad. Wan 2.2 es la base más segura — máxima calidad, Apache 2.0, sin letra pequeña — con LTX-2 como el especialista en velocidad y sonido.\n\nVe por la nube si no tienes el hardware, no quieres la configuración, o necesitas videos terminados en lugar de clips en bruto. Para la mayoría de las personas que simplemente quieren hacer videos generados con IA, la ruta en la nube es el punto de partida más fácil: si no tienes ya el hardware y el interés técnico que requiere la generación local, InVideo elimina la mayor parte de esa complejidad en un solo prompt, con cada modelo y activo integrado y automatización incluida — desde $0 para probar y $17/mes (facturado anualmente) para quitar la marca de agua. La forma más sencilla de averiguar si te encaja es probar la versión gratuita.\n\nAmbas puertas llevan a la IA de video. La pregunta nunca fue cuál tecnología es mejor — sino qué flujo de trabajo se ajusta a tu equipo, tu paciencia y tus objetivos.',
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
          '[Tabla de posiciones VBench-2.0](https://github.com/Vchitect/VBench) — benchmark independiente usado para las cifras de calidad y fidelidad física.',
          '[Precios de InVideo](https://invideo.io/pricing/) — detalles oficiales de planes y precios.',
          '[Servidor MCP de InVideo](https://invideo.io/ai/mcp) — documentación oficial de automatización.',
          '[MiniMax H3 en GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — repositorio oficial.',
          '[MiniMax H3 en Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — pesos oficiales del modelo.',
          '[InVideo: ¿Cuánto tiempo toma hacer un cortometraje con IA?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — cifras propias de InVideo sobre el tiempo de producción de extremo a extremo (2–5 días).',
          '[Requisitos del sistema de ComfyUI](https://docs.comfy.org/installation/system_requirements) — documentación oficial de soporte MPS para Mac/Apple Silicon.',
          '[Blog de LTX: Cómo usar IC-LoRA en LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — guía oficial de consistencia de personaje (IC-LoRA).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Generación de imágenes con IA local vs. la nube](/es/power-local-llm/local-ai-image-generation-vs-cloud) — la pieza complementaria, misma estructura, para imágenes en lugar de video.',
          '[Calculadora de VRAM para modelos locales](/es/local-llms/vram-calculator-local-llm) — requisitos exactos de VRAM por modelo y cuantización.',
          '[¿Cuánta VRAM necesitas?](/es/local-llms/how-much-vram-local-llm) — tablas comparativas entre tamaños de modelo, de 7B a 70B.',
          '[Mejores GPU para IA local en 2026](/es/local-llms/best-gpus-for-local-llms) — recomendaciones de hardware por nivel de presupuesto.',
          '[Mejores GPU económicas para IA local](/es/local-llms/best-budget-gpus-local-llm) — opciones de hardware de nivel de entrada.',
          '[GPU vs CPU vs Apple Silicon](/es/local-llms/gpu-vs-cpu-vs-apple-silicon) — comparación de plataformas para inferencia local.',
          '[System Prompts vs. User Prompts](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — fundamentos de estructuración de prompts que se transfieren al prompting de video.',
          '[Prompt Engineering para modelos locales](/es/local-llms/prompt-engineering-for-local-models) — técnicas de prompting estructurado.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-08-21',
    next_refresh_due: '2027-02-21',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'InVideo vs vidéo IA locale : une option ne coûte rien (plus votre week-end), l\'autre coûte 17 $',
    seoTitle: 'Vidéo IA cloud vs locale 2026 : InVideo vs Wan 2.2 & LTX-2',
    intro:
      'Deux portes s\'ouvrent sur la vidéo IA en 2026. Porte une : le local — des modèles vidéo ouverts et gratuits tournant sur votre propre GPU, générations illimitées, confidentialité totale, aucun abonnement, mais vous construisez tout le pipeline vous-même. Porte deux : le cloud — InVideo, où un simple prompt donne une vidéo narrée finie : script, images d\'archives, voix off, musique et sous-titres inclus, directement depuis votre navigateur. Aucune des deux n\'est « meilleure ». Ce guide donne les clauses de licence que la plupart des comparatifs ignorent, les vraies exigences matérielles, et un outil de décision qui associe votre situation à une recommandation.',
    metaDescription:
      'Les modèles de vidéo IA locale (Wan 2.2, LTX-2, HunyuanVideo) sont gratuits si votre GPU suit. Le cloud InVideo fait tout pour 17 $/mois. Comparatif honnête : VRAM, licences, clauses.',
    twitterDescription:
      'Vidéo IA cloud vs locale en 2026 : InVideo regroupe tout pour 17 $/mois. Wan 2.2, LTX-2, HunyuanVideo tournent gratuitement sur votre GPU — s\'il est assez puissant. Comparatif honnête.',
    audience:
      'Créateurs et développeurs hésitant entre la génération vidéo locale gratuite sur leur propre GPU et le pipeline cloud tout-en-un d\'InVideo — matériel requis, clauses de licence et compromis de workflow.',
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
      '**Pour la majorité des utilisateurs avec un GPU 12 Go+, Wan 2.2 est le meilleur modèle de vidéo IA locale en 2026** — licence Apache 2.0 sans plafond de revenus ni restriction territoriale, et le meilleur score de qualité vérifié publiquement (VBench ~84,7 %) de tous les modèles ouverts, entièrement gratuit. **InVideo est le meilleur choix si vous n\'avez pas ce GPU, ou si vous voulez une vidéo narrée finie plutôt qu\'un clip brut** — son offre Plus, à partir de 17 $/mois (facturation annuelle), regroupe plus de 200 modèles (dont Kling 3, Veo 3.1 et Seedance 2.5) dans un pipeline unique dans le navigateur, avec script, voix off, musique et sous-titres inclus. **HunyuanVideo 1.5 offre le rendu local le plus cinématographique, mais sa licence exclut totalement l\'UE, le Royaume-Uni et la Corée du Sud** — évitez ce modèle si vous êtes dans ces régions.',
    quickAnswerTop: {
      fr: {
        question: 'Dois-je générer mes vidéos IA en local ou utiliser le pipeline cloud d\'InVideo ?',
        answer:
          'Générez en local si vous avez un GPU 12 Go+, voulez des générations illimitées à 0 $ et privilégiez la confidentialité — Wan 2.2 (Apache 2.0, sans restriction) est le point de départ le plus sûr. Utilisez InVideo si vous n\'avez pas le matériel adapté, ne voulez pas gérer l\'installation, ou avez besoin d\'une vidéo complète et finie (script, voix off, musique, sous-titres) plutôt que d\'un clip brut — son offre Plus démarre à 17 $/mois (facturation annuelle).',
        bullets: [
          'Moins de 12 Go de VRAM → InVideo est le choix pratique ; les modèles locaux sont inutilisables en dessous de ce seuil pour une qualité sérieuse.',
          '12 Go de VRAM → LTX-Video 0.9.5, seule option locale sérieuse à ce niveau.',
          '16–24 Go+ de VRAM → Wan 2.2 (meilleure qualité, Apache 2.0, aucune restriction) ou LTX-2 (vitesse + audio synchronisé).',
          'Dans l\'UE, au Royaume-Uni ou en Corée du Sud → la licence de HunyuanVideo 1.5 vous exclut ; utilisez plutôt Wan 2.2 ou LTX-2.',
          'Besoin d\'une vidéo narrée finie, pas d\'un clip brut → les modèles locaux ne génèrent que des clips silencieux (LTX excepté) de 5 à 20 secondes ; InVideo gère tout le pipeline de production, à partir de 17 $/mois (facturation annuelle).',
        ],
        updatedDate: '2026-08-21',
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
      { label: 'La porte cloud : ce qu\'InVideo regroupe', anchor: '#invideo-bundle' },
      { label: 'Cloud ou local : quelle porte est la vôtre ?', anchor: '#decision-guide' },
      { label: 'Qui devrait choisir InVideo ?', anchor: '#who-should-choose' },
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
          '**Wan 2.2 est le seul modèle vidéo local haut de gamme sans aucune restriction de licence.** Apache 2.0, usage commercial illimité, aucun plafond de revenus, aucune exclusion territoriale — et le meilleur score VBench vérifié parmi les modèles open source (~84,7 %).',
          '**InVideo regroupe plus de 200 modèles — dont Kling 3, Veo 3.1 et Seedance 2.5 — dans un pipeline unique dans le navigateur**, à partir de 17 $/mois (offre Plus, facturation annuelle), avec script, voix off, musique et sous-titres gérés automatiquement.',
          '**La licence de HunyuanVideo 1.5 exclut explicitement l\'UE, le Royaume-Uni et la Corée du Sud** — pour le modèle comme pour ses sorties. Les lecteurs de ces régions doivent utiliser Wan 2.2 ou LTX-2.',
          '**LTX-2 est le plus rapide du trio local et le seul avec audio synchronisé intégré**, gratuit commercialement pour les entreprises générant moins de 10 M$ de revenus annuels.',
          '**12 Go de VRAM est le plancher réaliste pour une génération vidéo locale sérieuse.** En dessous, InVideo devient l\'option la plus pratique.',
          '**Les modèles locaux génèrent des clips bruts et silencieux de 5 à 20 secondes, pas des vidéos finies.** Script, voix off, musique, sous-titres et montage sont des outils séparés que vous assemblez vous-même — InVideo fait tout cela en une seule passe.',
          '**Il n\'existe pas de « Wan 2.7 ».** Les pages proposant ce téléchargement sont des arnaques SEO — les versions officielles de Wan s\'arrêtent à 2.2.',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Pourquoi 2026 est un moment étrange pour la vidéo IA',
        content:
          'Le marché de la vidéo propriétaire a été chaotique. OpenAI a fermé l\'application grand public Sora en mars 2026, moins de six mois après son lancement, après une chute d\'environ 66 % des téléchargements depuis leur pic (l\'API reste active séparément). Seedance 2.0 de ByteDance a subi des poursuites hollywoodiennes et un déploiement mondial suspendu le même mois, suite à des mises en demeure de Disney, Paramount et Warner Bros. — il reste accessible en Chine mais présente un risque juridique pour un usage commercial international. HappyHorse d\'Alibaba a dominé les classements de qualité en avril 2026 — et n\'a jamais été ouvert au public.\n\nCe chaos est précisément ce qui rend les deux portes attrayantes. Les modèles ouverts locaux vous rendent indépendant des drames des éditeurs. Et InVideo absorbe ce drame à votre place : son abonnement donne accès à plus de 200 modèles — dont Kling 3, Veo 3.1 et Seedance 2.5 — donc quand un modèle disparaît ou est poursuivi en justice, votre workflow n\'en souffre pas.',
      },
      localModels: {
        id: 'local-models',
        title: 'La porte locale : trois modèles gratuits sur votre GPU',
        content:
          'Trois systèmes à poids ouverts dominent actuellement la génération vidéo locale, mesurés par téléchargements, activité communautaire et résultats de benchmarks. Tous trois fonctionnent via ComfyUI, une interface à nœuds installée sur votre machine — pas un outil conversationnel comme Ollama. Ce sont des modèles de diffusion, pas des LLM.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 est le meilleur modèle vidéo local polyvalent en 2026 — Apache 2.0, meilleure qualité, aucune restriction — tandis que LTX-2 gagne sur la vitesse et l\'audio synchronisé, et HunyuanVideo 1.5 offre le rendu le plus cinématographique mais exclut par licence les utilisateurs de l\'UE, du Royaume-Uni et de Corée du Sud.' },
          { type: 'plain-terms', text: 'Pour une réponse unique : prenez un GPU 12 Go+ et utilisez Wan 2.2. Meilleure qualité, licence la plus simple, aucune clause cachée.' },
        ],
        columns: ['Modèle', 'Licence', 'VRAM', 'Sortie', 'Point fort'],
        rows: [
          { 'Modèle': 'Wan 2.2 (Alibaba)', 'Licence': 'Apache 2.0 — sans restriction', 'VRAM': '6–8 Go (5B) / 15–25 Go (14B)', 'Sortie': '480p/720p, clips ~5 s', 'Point fort': 'Meilleure qualité VBench vérifiée (~84,7 %)' },
          { 'Modèle': 'LTX-2 (Lightricks)', 'Licence': 'LTX Community License — gratuit sous 10 M$ de revenus', 'VRAM': '18–20 Go quantifié, 32 Go+ en pleine précision', 'Sortie': '480p–1080p, 5–20 s, avec audio', 'Point fort': 'Seul modèle avec audio+vidéo synchronisés en une passe' },
          { 'Modèle': 'HunyuanVideo 1.5 (Tencent)', 'Licence': 'Tencent Community License — exclut UE/Royaume-Uni/Corée du Sud', 'VRAM': '14 Go minimum, 24 Go confortable', 'Sortie': '480p/720p, jusqu\'à 10 s', 'Point fort': 'Favori communautaire pour l\'éclairage cinématographique ; le plus léger en VRAM' },
        ],
        note:
          '⚠️ Alerte arnaque : il n\'existe pas de « Wan 2.7 ». Les pages proposant des « poids ouverts Wan 2.7 » sont des arnaques SEO. Les versions officielles de Wan s\'arrêtent à 2.2 — ne téléchargez que depuis les dépôts officiels GitHub ou Hugging Face liés ci-dessous.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — le roi de la qualité, vraiment gratuit',
        content:
          'Wan 2.2 est le modèle vidéo ouvert le plus largement déployé : son dépôt I2V-A14B a enregistré à lui seul environ 4,24 millions de téléchargements Hugging Face en un seul mois, avec des centaines de dérivés communautaires construits dessus. Il se décline en trois variantes — T2V-A14B et I2V-A14B (mélange d\'experts, 27B de paramètres au total / 14B actifs), plus un TI2V-5B compact qui gère à la fois le texte-vers-vidéo et l\'image-vers-vidéo sur seulement 6–8 Go de VRAM. Le palier 14B nécessite 15 Go (GGUF Q3) à 25 Go (FP8) ; la commande officielle non quantifiée demande 80 Go. Sa licence est Apache 2.0 — véritablement gratuite, usage commercial illimité, aucun seuil de revenus, aucune exclusion territoriale.\n\n**Vitesse, concrètement :** un clip de 5 secondes prend environ 4 à 9 minutes sur une RTX 4090 (un chiffre rapporté indépendamment — Wan 2.2 ne génère nativement pas de clips plus longs en une passe). Pour construire une séquence de 20 secondes, il faut générer 4 clips séparés de 5 secondes puis les assembler — soit 16 à 36 minutes de génération brute, plus le montage manuel pour les raccorder proprement. Cette fourchette est une extrapolation du chiffre par clip, pas un benchmark de 20 secondes mesuré directement.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 sur GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 sur Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — vitesse et son synchronisé',
        content:
          'LTX-2 est le seul modèle ouvert de ce trio à générer audio et vidéo synchronisés en une seule passe — pas, ambiance et effets arrivent avec l\'image. C\'est aussi le plus rapide des trois et le plus accessible côté matériel. L\'architecture est un transformeur de diffusion 22B ; LTX-2.3 (mars 2026) reste pleinement pris en charge aux côtés de la version actuelle LTX-2.5. La licence est la LTX Community License — gratuite pour un usage commercial si le revenu total de votre entreprise est inférieur à 10 M$ par an, une licence commerciale payante étant requise au-delà. (Certains articles tiers la qualifient à tort d\'Apache 2.0 — la [page de licence officielle](https://ltx.io/model/license) est la seule source fiable.) Le besoin matériel va de 18–20 Go de VRAM quantifiée à 32 Go+ en pleine précision ; sur les cartes 12 Go, l\'ancien LTX-Video 0.9.5 reste le choix pratique.\n\n**Vitesse, concrètement :** LTX-2 est qualitativement le plus rapide du trio, avec des aperçus quasi temps réel sur les cartes haut de gamme — mais aucun chiffre minutes-par-clip vérifié indépendamment sur RTX 4090 n\'existe à ce jour, nous n\'en inventerons donc pas. Le seul chiffre solide disponible vient du benchmark de Lightricks lui-même sur des « superpuces Nvidia » de classe datacenter (pas un GPU grand public) : un clip de 10 secondes en environ 6,8 secondes. Considérez cela comme un plafond de ce que l\'architecture peut faire sur du matériel professionnel, pas ce que verra votre machine personnelle.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 sur GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 sur Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — le rendu cinématographique, avec un piège juridique',
        content:
          'Le modèle 8,3B de Tencent, sorti en novembre 2025, est un favori communautaire pour l\'éclairage et les textures cinématographiques, et le plus léger des trois en VRAM : 14 Go minimum avec déchargement, 24 Go confortable, pour environ 75 secondes par clip 480p sur une RTX 4090. Il génère nativement en 480p/720p, jusqu\'à 1080p via super-résolution intégrée, des clips jusqu\'à 10 secondes.\n\n**Vitesse, concrètement :** à ~75 secondes pour un clip 480p de 5 secondes, cela représente environ 15 secondes de rendu par seconde de vidéo. Sa longueur de clip maximale native est de 10 secondes, donc une séquence de 20 secondes nécessite deux générations à la longueur maximale — en extrapolant le taux par seconde, comptez environ 5 minutes de génération brute pour 20 secondes de séquence, avant montage. Il s\'agit d\'une extrapolation du chiffre sourcé pour 5 secondes, pas d\'un benchmark mesuré directement à 10 ou 20 secondes.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 sur GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 sur Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Avertissement de licence — à lire avant de télécharger. HunyuanVideo 1.5 utilise la Tencent Hunyuan Community License, pas Apache 2.0. Cette licence ne s\'applique pas dans l\'Union européenne, au Royaume-Uni ou en Corée du Sud — les utilisateurs de ces régions ne sont pas autorisés à utiliser le modèle ni ses sorties. Elle plafonne aussi l\'usage à 100 millions d\'utilisateurs actifs mensuels et interdit d\'entraîner des modèles concurrents sur ses sorties. Si vous êtes dans l\'UE, au Royaume-Uni ou en Corée du Sud, évitez ce modèle : Wan 2.2 couvre le même niveau de qualité sans aucune restriction.',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'À surveiller : MiniMax H3',
        content:
          'Sorti le 3 août 2026, MiniMax H3 est un modèle omni-modal de 33,1B avec audio stéréo natif, prise en charge ComfyUI dès le premier jour, et des versions quantifiées tournant sur une RTX 3060. Deux réserves avant d\'en faire un quatrième choix : la version locale plafonne à 768p (le pipeline complet 2K reste réservé à l\'hébergement cloud), et sa Community License comporterait ses propres restrictions géographiques ainsi qu\'un seuil de revenus de 20 M$ — vérifiez la fiche modèle officielle avant de vous engager. Les premiers signaux sont encourageants, mais trois semaines d\'existence et une maturité de production sont deux choses différentes.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 sur GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 sur Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'Le verrou matériel',
        content: [
          'La génération vidéo locale est gratuite comme un chiot est gratuit : les poids du modèle ne coûtent rien, mais le GPU est le vrai prix d\'entrée. Évitez complètement le local si votre GPU a moins de 12 Go de VRAM et que vous ne prévoyez pas de mise à niveau — aucun des trois modèles ci-dessus ne tourne à une qualité utilisable en dessous de ce seuil, et une plateforme cloud vous donnera un meilleur résultat, plus vite.',
          'Vous ne savez pas ce que cela signifie pour votre machine ? Ces guides détaillent tout : [Calculateur de VRAM](/fr/local-llms/vram-calculator-local-llm) pour les besoins exacts par modèle, [De combien de VRAM avez-vous besoin ?](/fr/local-llms/how-much-vram-local-llm) pour des tableaux par taille de modèle, [Meilleurs GPU pour l\'IA locale](/fr/local-llms/best-gpus-for-local-llms) et [Meilleurs GPU petit budget](/fr/local-llms/best-budget-gpus-local-llm) pour des choix matériels, et [GPU vs CPU vs Apple Silicon](/fr/local-llms/gpu-vs-cpu-vs-apple-silicon) pour comparer les plateformes. Un avertissement honnête : ces guides utilisent la formule VRAM des LLM (paramètres × bits ÷ 8). Les modèles de diffusion vidéo font aussi varier la VRAM selon la résolution et la durée du clip — considérez leurs chiffres comme un plancher, pas un plafond, pour les charges vidéo.',
        ],
        columns: ['Votre GPU', 'Ce que vous pouvez exécuter'],
        rows: [
          { 'Votre GPU': '6–8 Go VRAM', 'Ce que vous pouvez exécuter': 'Wan 2.2 TI2V-5B (quantifié) — utilisable, qualité d\'entrée' },
          { 'Votre GPU': '12 Go VRAM', 'Ce que vous pouvez exécuter': 'LTX-Video 0.9.5 — seule option sérieuse à ce niveau' },
          { 'Votre GPU': '16 Go VRAM', 'Ce que vous pouvez exécuter': 'HunyuanVideo 1.5 (si la licence le permet), Wan 2.2 14B en GGUF Q3' },
          { 'Votre GPU': '24 Go+ VRAM', 'Ce que vous pouvez exécuter': 'Tout : Wan 2.2 14B en haute qualité, LTX-2 quantifié' },
        ],
        note:
          'Coût matériel approximatif en août 2026 : une RTX 3060 12 Go d\'occasion coûte environ 170–220 $, un lot de RTX 3090 d\'occasion environ 900–1 100 $ (prix constatés aux États-Unis ; nous n\'avons pas pu vérifier d\'équivalent fiable en euros sur les sites français à la date de rédaction). Les prix des GPU évoluent — vérifiez les tarifs actuels avant d\'acheter plutôt que de vous fier à ces chiffres au-delà de quelques mois.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'Ce qu\'implique vraiment la génération vidéo locale',
        content:
          'Avec les modèles locaux, vous n\'installez pas un outil vidéo — vous assemblez un pipeline.\n\n**La configuration de la génération.** ComfyUI fonctionne par nœuds : vous construisez, ou importez et déboguez, un graphe de workflow composé de loaders, samplers et decoders. Attendez-vous à des incompatibilités de versions CUDA, des épinglages PyTorch, et parfois une erreur d\'installation `flash_attn` avant la première image rendue.\n\n**Le prompting.** Les modèles vidéo ont besoin de prompts structurés — type de plan, mouvement de caméra, éclairage, action du sujet — pas de phrases uniques. Il n\'y a ni assistant de prompt intégré ni couche de prompt système ; vous écrivez toute la structure vous-même. Nos guides sur [prompts système vs prompts utilisateur](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) et [prompt engineering pour modèles locaux](/fr/local-llms/prompt-engineering-for-local-models) couvrent des fondamentaux qui s\'appliquent directement au prompting vidéo.\n\n**Tout ce qui entoure le clip.** Les modèles locaux produisent des clips bruts, silencieux (LTX excepté), de 5 à 20 secondes. Script, voix off, musique, images d\'archives, sous-titres et montage sont chacun des outils séparés que vous choisissez, installez et connectez vous-même.',
        promptExamples: [
          { label: 'Faible (une ligne)', text: 'Un chien sur une plage' },
          { label: 'Structuré (ce dont les modèles vidéo ont besoin)', text: 'Golden retriever sprintant le long d\'un rivage humide à l\'heure dorée, plan de suivi bas depuis le côté, faible profondeur de champ, contre-jour chaud, léger ralenti, cinématographique 24 im/s' },
        ],
        note:
          'Sujet et action, comportement de caméra, éclairage, style — quatre ingrédients dans une phrase font la différence entre une machine à sous et une caméra. Si cette pile DIY vous enthousiasme, la porte locale est pour vous. Si elle vous semble épuisante, continuez la lecture.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'La porte cloud : ce qu\'InVideo regroupe',
        sponsoredSlot: true,
        content:
          'InVideo est un exemple de porte cloud — pas le seul, et il vaut la peine de comprendre en quoi il diffère des autres avant de supposer que « cloud » désigne une seule chose. Runway s\'intègre directement dans les logiciels de montage professionnels (Premiere Pro, Final Cut, DaVinci Resolve), visant des workflows hybrides IA-plus-monteur plutôt qu\'une vidéo assemblée et finie. Dream Machine de Luma AI se spécialise dans la sortie HDR native 16 bits pour les pipelines de compositing VFX (After Effects, Nuke) — un public entièrement différent. Pika reste léger : génération rapide de clips bruts, sans script, voix off ou assemblage d\'images d\'archives intégré, donc vous avez toujours besoin d\'outils séparés pour tout ce qui entoure le clip — le même problème de pipeline DIY que la génération locale, mais sans l\'exigence de GPU. Ce qui distingue InVideo de ces trois-là, c\'est qu\'il n\'est pas d\'abord un outil de génération brute : c\'est un assembleur script-vers-vidéo-finie qui donne aussi accès à des modèles de génération brute (Kling, Veo, Seedance) quand vous en avez besoin.\n\nInVideo n\'est pas un modèle vidéo — c\'est tout le pipeline de production en tant que service. Vous saisissez un sujet ou collez un script ; son agent v4 renvoie une vidéo finie allant jusqu\'à 30 minutes : script généré par IA, scènes assemblées depuis une bibliothèque de plus de 16 millions d\'assets ou des clips fraîchement générés, voix off IA en plus de 50 langues (avec clonage de voix), musique, sous-titres et habillage de marque. Il tourne dans le navigateur — votre GPU n\'a aucune importance.\n\nPour qui veut commencer à faire des vidéos aujourd\'hui plutôt que de rechercher GPU et formats de quantification, InVideo est le choix pratique : aucune exigence matérielle locale, aucune installation ComfyUI ni dépannage CUDA, et un workflow unique qui inclut déjà le script, la voix off, la musique et les sous-titres dont la plupart des gens ont réellement besoin. Il convient particulièrement aux créateurs qui se soucient davantage de la vidéo finie que du contrôle du modèle de génération sous-jacent — et comme l\'offre gratuite existe, vous pouvez vérifier si cela vous convient avant de dépenser quoi que ce soit.\n\nTrois éléments ressortent pour ce comparatif :\n\n- **Le chaos des modèles, absorbé.** Tous les plans payants incluent l\'accès à plus de 200 modèles — dont Seedance 2.5, Veo 3.1 et Kling 3. Quand un modèle est poursuivi en justice ou fermé, InVideo le remplace ; votre workflow continue.\n- **L\'automatisation est intégrée, pas ajoutée après coup.** Il existe un serveur MCP officiel, donc tout le pipeline prompt → script → images → sous-titres peut être déclenché de façon programmatique — le genre de harnais que vous devriez sinon construire vous-même autour de ComfyUI.\n- **L\'offre gratuite est un vrai essai.** Filigranée et limitée en minutes, mais suffisante pour juger la qualité avant de payer.\n\n**Vitesse, concrètement — et le piège honnête :** une génération brute unique est rapide, typiquement en quelques minutes. Mais la propre FAQ d\'InVideo situe la production complète de bout en bout d\'un court-métrage entre 2 et 5 jours, pas quelques minutes — car choisir et assembler parmi plusieurs options générées, pas la génération elle-même, est ce qui prend du temps. Considérez « 2 jours comme plancher réaliste » pour un film fini de 1 à 3 minutes comme le point de comparaison équitable face aux 16–36 minutes de génération brute de la porte locale pour 20 secondes de séquence non montée : InVideo échange votre temps de configuration et de montage contre son propre temps de production, il ne supprime pas le temps entièrement.\n\nOffres actuelles, à partir de 17 $/mois (offre Plus, facturation annuelle, vérifié en août 2026 — consultez la [page tarifs d\'InVideo](https://invideo.io/pricing/) pour les chiffres à jour) :',
        blockquote:
          '**Envie de créer des vidéos IA sans installation locale ?** Si vous n\'avez pas de GPU puissant — ou si vous ne voulez tout simplement pas passer des heures à installer et configurer des outils vidéo IA locaux — InVideo mérite d\'être essayé. [Essayer la version gratuite d\'InVideo →](https://invideo.io/pricing/)',
        columns: ['Offre', 'Prix', 'Crédits/mois', 'Idéal pour'],
        rows: [
          { 'Offre': 'Gratuite', 'Prix': '0 $', 'Crédits/mois': 'limités', 'Idéal pour': 'Tester le terrain (filigrané)' },
          { 'Offre': 'Plus', 'Prix': '17 $/mois (200 $/an)', 'Crédits/mois': '75', 'Idéal pour': 'Créateurs réguliers — tous les modèles IA, 4 avatars et clones de voix, 100 assets iStock, exports illimités sans filigrane' },
          { 'Offre': 'Max', 'Prix': '85 $/mois (1 000 $/an)', 'Crédits/mois': '390', 'Idéal pour': 'Chaînes à fort volume, 16 avatars' },
          { 'Offre': 'Generative', 'Prix': '170 $/mois (2 000 $/an)', 'Crédits/mois': '800+', 'Idéal pour': 'Volume de production / courts-métrages' },
          { 'Offre': 'Elite', 'Prix': '900 $/mois (10 800 $/an)', 'Crédits/mois': '4 250+', 'Idéal pour': 'Échelle épisodique et commerciale' },
        ],
        note:
          'Tous les prix ci-dessus sont des tarifs en facturation annuelle en date d\'août 2026 — le paiement mensuel coûte plus cher (la propre FAQ d\'InVideo cite Plus à 20 $, Max à 100 $, Generative à 200 $, Elite à 1 000 $ par mois). Consultez la page tarifs en direct d\'InVideo avant de vous fier à un chiffre ici ; les offres et prix changent.',
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Cloud ou local : quelle porte est la vôtre ?',
        content: 'La version courte, appliquée à des situations courantes :',
        columns: ['Votre situation', 'Recommandation'],
        rows: [
          { 'Votre situation': 'Aucun GPU, ou moins de 12 Go de VRAM', 'Recommandation': 'InVideo (cloud) — aucun modèle local ne tourne bien en dessous de ce seuil' },
          { 'Votre situation': 'Vidéo finie avec voix off souhaitée, pas des clips bruts', 'Recommandation': 'InVideo (cloud) — les modèles locaux n\'assemblent pas une production complète' },
          { 'Votre situation': 'Délai serré, aucune tolérance à la configuration', 'Recommandation': 'InVideo (cloud)' },
          { 'Votre situation': 'GPU 12 Go+, à l\'aise avec la configuration, veut confidentialité et coût marginal de 0 $', 'Recommandation': 'Local : LTX-Video (12 Go) ou Wan 2.2 (24 Go pour la pleine qualité)' },
          { 'Votre situation': 'Dans l\'UE, au Royaume-Uni ou en Corée du Sud', 'Recommandation': 'Local = Wan 2.2 ou LTX-2 uniquement (la licence de HunyuanVideo vous exclut)' },
          { 'Votre situation': 'Besoin d\'automatisation/API à grande échelle sans la construire', 'Recommandation': 'InVideo (cloud, serveur MCP)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'Qui devrait choisir InVideo ?',
        content:
          '**InVideo est probablement le meilleur choix si vous :**\n\n- Ne possédez pas de GPU puissant\n- Voulez commencer à créer des vidéos immédiatement\n- Ne voulez pas installer et configurer ComfyUI, CUDA, des modèles ou des environnements Python\n- Préférez un workflow intégré plutôt que d\'assembler plusieurs outils locaux\n- Avez besoin de scripts, voix, musique, sous-titres et génération vidéo dans un seul workflow\n- Vous souciez davantage des vidéos finies que d\'expérimenter avec les modèles sous-jacents\n\n**L\'IA locale est probablement le meilleur choix si vous :**\n\n- Possédez déjà un GPU adapté\n- Voulez un contrôle maximal\n- Voulez expérimenter avec les modèles et workflows\n- Avez de solides compétences techniques\n- Priorisez le contrôle local de la génération\n- Prévoyez de générer de très gros volumes et voulez optimiser le coût marginal par génération',
        blockquote:
          '**Vous ne savez pas quelle voie vous convient ?** Si vous voulez éviter le matériel et la configuration technique, l\'expérience la plus simple consiste à essayer InVideo et voir si son workflow répond à vos besoins. [Essayer InVideo gratuitement →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'Les voir en action',
        items: [
          '[4 modèles vidéo IA open source comparés — lequel est vraiment gratuit ?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — comparatif côte à côte de LTX 2.3, Wan 2.2, HunyuanVideo 1.5 et MiniMax H3, avec les clauses de licence en détail.',
          '[Test d\'InVideo Agent One](https://www.youtube.com/watch?v=uUHO9byu0c0) — le workflow complet prompt-vers-vidéo-finie.',
          '[Démo locale complète de Wan 2.2](https://www.youtube.com/watch?v=fs62ML_ZgEs) — temps de rendu honnêtes sur du matériel grand public (semaine de lancement, juillet 2025).',
          '[Tutoriel Wan 2.2 en faible VRAM](https://www.youtube.com/watch?v=tQu0DjtOEyg) — faire tourner le modèle 14B sur un ordinateur portable 6 Go (2025).',
        ],
        note:
          'Ce sont des vidéos tierces, non produites par PromptQuorum ou InVideo. Incluses à titre de référence uniquement — aucune approbation de la chaîne ou de son autre contenu n\'est impliquée.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Puis-je faire de la génération vidéo IA avec 8 Go de VRAM ?',
            a: 'À peine. La variante TI2V-5B de Wan 2.2 tourne sur 6–8 Go quantifiés, à qualité réduite et clips courts. Pour les modèles sérieux, 12 Go est le vrai plancher — et en dessous, un outil cloud comme InVideo est la réponse pratique.',
          },
          {
            q: 'Wan 2.2 est-il vraiment gratuit pour un usage commercial ?',
            a: 'Oui. Il est sous licence Apache 2.0 — usage commercial illimité, aucun plafond de revenus, aucune exclusion territoriale, aucun droit revendiqué sur vos sorties. C\'est le seul des modèles locaux haut de gamme sans clause de licence cachée.',
          },
          {
            q: 'Puis-je utiliser HunyuanVideo dans l\'UE ou au Royaume-Uni ?',
            a: 'Non. La Tencent Hunyuan Community License ne s\'applique explicitement pas dans l\'UE, au Royaume-Uni ou en Corée du Sud — cela couvre à la fois le modèle et ses sorties. Utilisez plutôt Wan 2.2 ou LTX-2.',
          },
          {
            q: 'Ai-je besoin d\'un GPU pour utiliser InVideo ?',
            a: 'Non. InVideo tourne entièrement dans le navigateur ; toute la génération se fait sur leur infrastructure. Un ordinateur portable de cinq ans fait très bien l\'affaire.',
          },
          {
            q: 'Les modèles locaux peuvent-ils produire une vidéo YouTube complète avec voix off ?',
            a: 'Pas seuls. Les modèles locaux génèrent des clips bruts de 5 à 20 secondes (LTX-2 inclut l\'audio synchronisé ; les autres sont silencieux). Script, voix off, musique, sous-titres et montage nécessitent chacun des outils séparés que vous assemblez vous-même en pipeline.',
          },
          {
            q: 'Quel est le vrai piège de la vidéo IA locale « gratuite » ?',
            a: 'Le coût matériel (un GPU capable), le temps de configuration (ComfyUI et ses dépendances), et le pipeline DIY nécessaire autour des clips bruts produits. Les poids du modèle eux-mêmes ne coûtent vraiment 0 $ par génération, pour toujours.',
          },
          {
            q: 'Existe-t-il un Wan 2.7 ou un modèle Wan plus récent ?',
            a: 'Non. Les versions officielles de Wan s\'arrêtent à 2.2. Tout site proposant des « poids Wan 2.7 » est une arnaque — ne téléchargez que depuis les dépôts officiels GitHub ou Hugging Face.',
          },
          {
            q: 'Je suis totalement débutant. Par où commencer ?',
            a: 'L\'offre gratuite d\'InVideo — vous aurez une vidéo narrée finie en quelques minutes et pourrez juger si la vidéo IA répond à vos objectifs. Si vous achetez plus tard un GPU capable et voulez un contrôle et une confidentialité totaux, la porte locale reste ouverte.',
          },
          {
            q: 'Quelle différence pour faire tourner ces modèles locaux sur Mac vs Windows ?',
            a: 'ComfyUI tourne sur Apple Silicon (M1–M4) via le backend MPS de PyTorch, mais attendez-vous à une génération environ 3 à 5 fois plus lente qu\'un GPU NVIDIA équivalent — utilisable, mais pas compétitif en vitesse. Le problème pratique le plus important est le support logiciel : les optimisations spécifiques à CUDA sur lesquelles s\'appuient ces modèles (flash-attention, outils de quantification GGUF/FP8) sont bien moins matures sur Mac, donc plusieurs workflows et guides d\'installation communautaires supposent Windows ou Linux avec une carte NVIDIA et peuvent nécessiter des ajustements, voire ne pas fonctionner tels quels. Un avantage : la mémoire unifiée d\'Apple Silicon peut permettre de loger un modèle plus grand en mémoire qu\'un GPU dédié à VRAM équivalente, même si l\'exécution est plus lente. Si vous achetez du matériel spécifiquement pour la génération vidéo locale, Windows ou Linux avec NVIDIA est la voie bien supportée ; un Mac que vous possédez déjà convient pour expérimenter, pas comme cible recommandée pour un débit sérieux.',
          },
          {
            q: 'Puis-je garder le même personnage cohérent sur plusieurs clips vidéo locaux ?',
            a: 'Oui, avec du travail supplémentaire — aucun des trois modèles ne garantit cela nativement entre générations séparées. Deux approches fonctionnent : fournir la même image de référence en mode image-vers-vidéo (les trois supportent l\'I2V), ou entraîner un petit LoRA sur votre personnage. Wan 2.2 et LTX-2 disposent tous deux de workflows LoRA documentés pour cela — la version de LTX-2 s\'appelle IC-LoRA (in-context LoRA) et supporte explicitement la cohérence multi-personnages. Les retours communautaires convergent sur un point : un LoRA entraîné donne des résultats bien plus fiables qu\'un prompt ou une simple image de référence. Les fonctionnalités de kit de marque et d\'avatar IA d\'InVideo résolvent le même problème sous-jacent différemment — un avatar et un profil vocal fixes que vous configurez une fois et réutilisez, sans entraînement requis.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Testez avant de décider',
        content:
          'Pas besoin de vous engager dans une configuration GPU locale — ni dans un abonnement payant — juste pour évaluer le workflow cloud. Avant d\'acheter du matériel ou de passer un week-end sur ComfyUI, cela vaut la peine de passer cinq minutes dans l\'autre sens d\'abord :\n\n1. Essayez la version gratuite d\'InVideo.\n2. Créez une courte vidéo.\n3. Évaluez la qualité du résultat et le ressenti du workflow.\n4. Comparez cette expérience à l\'effort de configuration qu\'exigerait une installation locale.\n\nCela transforme la comparaison d\'une lecture en un test que vous pouvez faire vous-même en moins de temps qu\'il n\'en faut pour lire le reste de cet article.',
        blockquote:
          '[Essayer la version gratuite d\'InVideo →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'Le verdict',
        content:
          'Choisissez le local si vous avez (ou allez acheter) un GPU 12 Go+, aimez construire vos propres outils, et privilégiez la confidentialité et les générations illimitées à 0 $ plutôt que la commodité. Wan 2.2 est la base la plus sûre — meilleure qualité, Apache 2.0, aucune clause cachée — avec LTX-2 comme spécialiste vitesse et son.\n\nChoisissez le cloud si vous n\'avez pas le matériel, ne voulez pas de la configuration, ou avez besoin de vidéos finies plutôt que de clips bruts. Pour la plupart des gens qui veulent simplement créer des vidéos générées par IA, la voie cloud est le point de départ le plus simple : si vous n\'avez pas déjà le matériel et l\'intérêt technique que demande la génération locale, InVideo élimine l\'essentiel de cette complexité en un prompt, avec tous les modèles et assets regroupés et l\'automatisation incluse — à partir de 0 $ pour tester et 17 $/mois (facturation annuelle) pour retirer le filigrane. Le moyen le plus simple de savoir si cela convient à votre workflow est d\'essayer la version gratuite.\n\nLes deux portes mènent à la vidéo IA. La question n\'a jamais été quelle technologie est meilleure — mais quel workflow correspond à votre machine, votre patience et vos objectifs.',
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
          '[Classement VBench-2.0](https://github.com/Vchitect/VBench) — benchmark indépendant utilisé pour les chiffres de qualité et de fidélité physique.',
          '[Tarifs InVideo](https://invideo.io/pricing/) — détails officiels des offres et prix.',
          '[Serveur MCP InVideo](https://invideo.io/ai/mcp) — documentation officielle d\'automatisation.',
          '[MiniMax H3 sur GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — dépôt officiel.',
          '[MiniMax H3 sur Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — poids officiels du modèle.',
          '[InVideo : combien de temps faut-il pour créer un court-métrage IA ?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — chiffres officiels d\'InVideo sur le délai de production de bout en bout (2–5 jours).',
          '[Configuration système ComfyUI](https://docs.comfy.org/installation/system_requirements) — documentation officielle du support MPS Mac/Apple Silicon.',
          '[Blog LTX : comment utiliser IC-LoRA dans LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — guide officiel de cohérence de personnage (IC-LoRA).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Génération d\'images IA locale vs cloud](/fr/power-local-llm/local-ai-image-generation-vs-cloud) — l\'article compagnon, même structure, pour les images plutôt que la vidéo.',
          '[Calculateur de VRAM pour modèles locaux](/fr/local-llms/vram-calculator-local-llm) — besoins exacts en VRAM par modèle et quantification.',
          '[De combien de VRAM avez-vous besoin ?](/fr/local-llms/how-much-vram-local-llm) — tableaux par taille de modèle, de 7B à 70B.',
          '[Meilleurs GPU pour l\'IA locale en 2026](/fr/local-llms/best-gpus-for-local-llms) — choix matériels par budget.',
          '[Meilleurs GPU petit budget pour l\'IA locale](/fr/local-llms/best-budget-gpus-local-llm) — options matérielles d\'entrée de gamme.',
          '[GPU vs CPU vs Apple Silicon](/fr/local-llms/gpu-vs-cpu-vs-apple-silicon) — comparatif de plateformes pour l\'inférence locale.',
          '[Prompts système vs prompts utilisateur](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — fondamentaux de structuration de prompts applicables à la vidéo.',
          '[Prompt engineering pour modèles locaux](/fr/local-llms/prompt-engineering-for-local-models) — techniques de prompting structuré.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-08-21',
    next_refresh_due: '2027-02-21',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'InVideo vs ローカルAI動画生成：一方は$0＋週末の時間、もう一方は$17',
    seoTitle: 'クラウドvsローカルAI動画2026：InVideo vs Wan 2.2＆LTX-2',
    intro:
      '2026年のAI動画には、2つの入り口があります。1つ目はローカルです。無料でオープンな動画モデルを自分のGPUで動かします。生成回数は無制限、プライバシーも完全に守られ、サブスクリプション不要です。ただし、ワークフロー全体を自分で組み立てる必要があります。2つ目はクラウドです。InVideoでは、プロンプトを1つ入れるだけで、完成したナレーション付き動画が出来上がります。台本、ストック映像、ナレーション、音楽、字幕まで、すべてブラウザだけで揃います。どちらの入り口が「優れている」ということはありません。本ガイドでは、多くの比較記事が見落としがちなライセンスの細則、実際に必要なハードウェア要件、そしてあなたの状況に合った選択肢を示す判断ツールを紹介します。',
    metaDescription:
      'ローカルAI動画モデル（Wan 2.2、LTX-2、HunyuanVideo）は、GPUが対応していれば無料です。InVideoのクラウドなら月額$17ですべて完結します。VRAM、ライセンス、細則まで正直に比較します。',
    twitterDescription:
      '2026年のクラウド vs ローカルAI動画：InVideoは月額$17ですべてをまとめて提供。Wan 2.2、LTX-2、HunyuanVideoは十分なGPUがあれば自分のマシンで無料で動きます。正直な比較。',
    audience:
      '自分のGPUで無料のローカル動画生成を行うか、InVideoのオールインワン型クラウドパイプラインを使うかを検討しているクリエイターと開発者向け。ハードウェア要件、ライセンスの細則、ワークフロー上のトレードオフを扱います。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルAI動画生成',
    targetKeywords: [
      'クラウド vs ローカル AI動画',
      'InVideo vs ローカルAI動画',
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
      '**12GB以上のGPUを持つほとんどの人にとって、2026年時点で最良のローカルAI動画モデルはWan 2.2です。** Apache 2.0ライセンスで、収益上限も地域制限もなく、オープンモデルの中で公開検証済みの最高品質スコア（VBench約84.7%）を持ち、完全無料です。**そのGPUがない場合、あるいは生の映像クリップではなく完成したナレーション付き動画が欲しい場合は、InVideoの方が良い選択です。** Plusプランは月額$17から（年間契約）で、Kling 3、Veo 3.1、Seedance 2.5を含む200以上のモデルを1つのブラウザベースのパイプラインにまとめ、台本・ナレーション・音楽・字幕まで含まれます。**HunyuanVideo 1.5はローカルモデルの中で最も映画的な見た目ですが、そのライセンスはEU、英国、韓国を完全に除外しています。** これらの地域にお住まいの方は避けてください。',
    quickAnswerTop: {
      ja: {
        question: 'AI動画はローカルで生成すべきか、InVideoのクラウドパイプラインを使うべきか？',
        answer:
          '12GB以上のGPUを持ち、無制限で$0の生成とプライバシーを重視するならローカル生成がおすすめです。Wan 2.2（Apache 2.0、制限なし）が最も安全な出発点です。適切なハードウェアがない、セットアップを管理したくない、あるいは生のクリップではなく完成した動画（台本・ナレーション・音楽・字幕付き）が必要な場合はInVideoを使ってください。Plusプランは月額$17から（年間契約）です。',
        bullets: [
          'VRAM 12GB未満 → InVideoが現実的な選択です。このクラス以下ではローカルモデルは本格的な品質では使い物になりません。',
          'VRAM 12GB → LTX-Video 0.9.5が、このクラスで唯一の実用的なローカル選択肢です。',
          'VRAM 16〜24GB以上 → Wan 2.2（最高品質、Apache 2.0、制限なし）またはLTX-2（速度＋同期音声）。',
          'EU、英国、韓国にお住まいの場合 → HunyuanVideo 1.5の対象外です。代わりにWan 2.2かLTX-2を使ってください。',
          '生のクリップではなく完成したナレーション付き動画が必要な場合 → ローカルモデルは無音（LTXを除く）の5〜20秒のクリップしか生成できません。InVideoなら制作パイプライン全体を月額$17から（年間契約）でカバーします。',
        ],
        updatedDate: '2026-08-21',
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
      { label: 'クラウドという入り口：InVideoがまとめて提供するもの', anchor: '#invideo-bundle' },
      { label: 'クラウドかローカルか：あなたに合う入り口は？', anchor: '#decision-guide' },
      { label: 'InVideoを選ぶべきなのは誰か？', anchor: '#who-should-choose' },
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
          '**Wan 2.2は、ライセンス制限がゼロの唯一のトップクラス・ローカル動画モデルです。** Apache 2.0で商用利用も無制限、収益上限も地域制限もありません。さらにオープンソースのVBench品質スコアでも検証済み最高値（約84.7%）を記録しています。',
          '**InVideoは、Kling 3、Veo 3.1、Seedance 2.5を含む200以上のモデルを、1つのブラウザベースのパイプラインにまとめています。** 月額$17から（Plusプラン、年間契約）で、台本・ナレーション・音楽・字幕は自動で処理されます。',
          '**HunyuanVideo 1.5のライセンスは、EU、英国、韓国を明確に除外しています。** モデル本体だけでなく、その出力にも適用されます。これらの地域の読者は代わりにWan 2.2かLTX-2を使ってください。',
          '**LTX-2はローカル3モデルの中で最速で、唯一組み込みの同期音声を持ちます。** 年間売上高$10M未満の企業なら商用利用も無料です。',
          '**本格的なローカル動画生成の現実的な最低ラインはVRAM 12GBです。** それ未満では、InVideoの方が実用的な選択肢になります。',
          '**ローカルモデルが生成するのは5〜20秒の無音の生クリップであり、完成した動画ではありません。** 台本、ナレーション、音楽、字幕、編集はそれぞれ別のツールで自分で組み立てる必要があります。InVideoはこれをすべて一度に処理します。',
          '**「Wan 2.7」は存在しません。** それを提供すると謳うダウンロードページはSEO詐欺です。公式のWanリリースは2.2で止まっています。',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'なぜ2026年はAI動画にとって奇妙な時期なのか',
        content:
          'プロプライエタリな動画市場は混乱を続けています。OpenAIは2026年3月、ローンチからわずか6か月足らずでSoraのコンシューマー向けアプリを終了しました。ダウンロード数がピーク時から約66%減少したためです（APIは別途稼働を続けています）。ByteDanceのSeedance 2.0は同じ月、ハリウッドからの訴訟に直面し、グローバル展開を一時停止しました。Disney、Paramount、Warner Bros.からの停止要求書が原因です。中国国内では引き続き利用可能ですが、国際的な商用利用には法的リスクが伴います。AlibabaのHappyHorseモデルは2026年4月、品質リーダーボードで首位に立ちましたが、一般公開されることはありませんでした。\n\nこの混乱こそが、両方の入り口を魅力的なものにしています。オープンなローカルモデルは、ベンダーの騒動から独立した存在です。そしてInVideoは、その混乱をあなたの代わりに吸収します。サブスクリプションには、Kling 3、Veo 3.1、Seedance 2.5を含む200以上のモデルへのアクセスが含まれているため、あるモデルが消えたり訴訟を起こされたりしても、あなたのワークフローは影響を受けません。',
      },
      localModels: {
        id: 'local-models',
        title: 'ローカルという入り口：自分のGPUで動く3つの無料モデル',
        content:
          'ダウンロード数、コミュニティの活動、ベンチマーク結果で見ると、現時点でローカル動画生成を主導しているのは3つのオープンウェイトシステムです。3つとも、ComfyUIというノードベースのインターフェース上で動作します。これは自分のマシンにインストールするもので、Ollamaのようなチャット形式のツールではありません。これらは拡散モデル（diffusion model）であり、LLMではありません。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2は2026年時点で最もバランスの取れたローカル動画モデルです。Apache 2.0で最高品質、制限なし。一方LTX-2は速度と同期音声で優れ、HunyuanVideo 1.5は最も映画的な見た目を持ちますが、ライセンス上EU/英国/韓国のユーザーは利用できません。' },
          { type: 'plain-terms', text: '一つだけ答えが欲しいなら、VRAM 12GB以上のGPUを用意してWan 2.2を使ってください。品質が最も高く、ライセンスもシンプルで、細かい注意点もありません。' },
        ],
        columns: ['モデル', 'ライセンス', 'VRAM', '出力', '特長'],
        rows: [
          { 'モデル': 'Wan 2.2（Alibaba）', 'ライセンス': 'Apache 2.0 — 制限なし', 'VRAM': '6〜8GB（5B）／15〜25GB（14B）', '出力': '480p/720p、約5秒のクリップ', '特長': '検証済みVBench品質スコア最高値（約84.7%）' },
          { 'モデル': 'LTX-2（Lightricks）', 'ライセンス': 'LTXコミュニティライセンス — 年間売上$10M未満は無料', 'VRAM': '量子化で18〜20GB、フル精度で32GB以上', '出力': '480p〜1080p、5〜20秒、音声付き', '特長': '映像と音声を同時に同期生成できる唯一のモデル' },
          { 'モデル': 'HunyuanVideo 1.5（Tencent）', 'ライセンス': 'Tencentコミュニティライセンス — EU/英国/韓国を除外', 'VRAM': '最低14GB、快適には24GB', '出力': '480p/720p、最長10秒', '特長': '映画的なライティングでコミュニティの人気が高く、VRAM消費も最も軽い' },
        ],
        note:
          '⚠️ 詐欺注意：「Wan 2.7」は存在しません。「Wan 2.7のオープンウェイトを提供する」と謳うダウンロードページはSEO詐欺です。公式のWanリリースは2.2で止まっています。下記の公式GitHubまたはHugging Faceリポジトリからのみダウンロードしてください。',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2（Alibaba）— 品質の王者、正真正銘の無料',
        content:
          'Wan 2.2は最も広く使われているオープンな動画モデルです。I2V-A14Bリポジトリだけで、1か月あたり約424万件のHugging Faceダウンロードを記録し、数百のコミュニティ派生版が作られています。T2V-A14BとI2V-A14B（Mixture-of-Experts、合計27B／アクティブ14Bパラメータ）に加え、テキストと画像の両方から動画を生成できるコンパクトなTI2V-5Bの3種類が提供されており、TI2V-5Bはわずか6〜8GBのVRAMで動作します。14Bクラスは15GB（GGUF Q3）から25GB（FP8）が必要で、公式の非量子化版は80GBを要求します。ライセンスはApache 2.0で、商用利用も無制限、収益しきい値も地域制限も一切ない、正真正銘の無料モデルです。\n\n**速度について具体的に：** RTX 4090では5秒のクリップ1本の生成に約4〜9分かかります（これは独立した1件の報告値です。Wan 2.2はネイティブでは1回のパスでより長いクリップを出力しません）。20秒のシーケンスを作るには、5秒のクリップを4本生成してつなぎ合わせる必要があり、生の生成時間だけで約16〜36分、さらにスムーズにつなげるための手作業の編集が加わります。この範囲は1クリップあたりの数値からの外挿であり、20秒を直接計測したベンチマークではありません。',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2（Lightricks）— 速度と同期サウンド',
        content:
          'LTX-2は、この3つの中で唯一、1回のパスで同期した音声と映像を生成するモデルです。足音、環境音、効果音が映像と同時に生成されます。また3つの中で最速であり、ハードウェアへの要求も最も緩やかです。アーキテクチャは22Bの拡散トランスフォーマーで、LTX-2.3（2026年3月）は現行のLTX-2.5リリースと並んで引き続き完全サポートされています。ライセンスはLTXコミュニティライセンスで、会社の年間総売上が$10M未満であれば商用利用は無料、それを超える場合は有料の商用ライセンスが必要です（一部のサードパーティ記事はApache 2.0だと誤って記載していますが、[公式ライセンスページ](https://ltx.io/model/license)のみが信頼できる情報源です）。ハードウェア要件は量子化で18〜20GB、フル精度で32GB以上のVRAMです。12GBのカードでは、旧世代のLTX-Video 0.9.5が現実的な選択肢として残ります。\n\n**速度について具体的に：** LTX-2は定性的には3つの中で最速で、ハイエンドなコンシューマーカードではほぼリアルタイムのプレビューが可能です。ただし、本記事執筆時点でRTX 4090上での独立検証済みの「1クリップあたり何分」という数値は存在しないため、ここでは推測を書きません。唯一入手できる確かな数値は、Lightricks自身によるデータセンター級「NVIDIAスーパーチップ」（コンシューマー向けGPUではありません）でのベンチマークで、10秒のクリップを約6.8秒で生成したというものです。これは本格的なハードウェアでこのアーキテクチャが達成できる上限値として捉えるべきであり、自宅のマシンで得られる数値ではありません。',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5（Tencent）— 映画的な見た目、ただし法的な注意点あり',
        content:
          '2025年11月にリリースされたTencentの8.3Bモデルは、映画的なライティングと質感でコミュニティの人気を集めており、3つの中でVRAM消費が最も軽いモデルです。オフロードを使えば最低14GB、快適に使うなら24GBで、RTX 4090では480pのクリップ1本あたり約75秒かかります。ネイティブで480p/720pを生成し、内蔵の超解像機能で1080pまで対応、クリップ長は最長10秒です。\n\n**速度について具体的に：** 480pの5秒クリップ1本あたり約75秒ということは、動画1秒あたり約15秒のレンダリング時間がかかる計算です。ネイティブの最大クリップ長は10秒のため、20秒のシーケンスを作るには最大長での生成を2回行う必要があります。1秒あたりのレートから外挿すると、20秒分の映像を生成する生の時間はおよそ5分、これにつなぎ合わせの作業が加わります。これは5秒クリップの実測値からの外挿であり、10秒や20秒を直接計測したベンチマークではありません。',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'ライセンスに関する警告 — ダウンロード前にお読みください。HunyuanVideo 1.5はTencent Hunyuanコミュニティライセンスを採用しており、Apache 2.0ではありません。このライセンスは欧州連合、英国、韓国には適用されません。これらの地域のユーザーは、モデル本体もその出力も利用する権限がありません。また、月間アクティブユーザー数1億人という上限があり、その出力を使って競合モデルを学習させることも禁止されています。EU、英国、韓国にお住まいの場合は、このモデルを避けてください。Wan 2.2なら同等の品質クラスを、制限ゼロで利用できます。',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: '注目株：MiniMax H3',
        content:
          '2026年8月3日にリリースされたMiniMax H3は、ネイティブなステレオ音声、リリース初日からのComfyUIサポート、そしてRTX 3060でも動く量子化バージョンを備えた33.1Bのオムニモーダルモデルです。これを4つ目の選択肢として扱う前に、2つの注意点があります。ローカル版の解像度は768pが上限で（フル2Kパイプラインはホスト型のみ）、そのコミュニティライセンスには独自の地域制限と$20Mの売上しきい値があると報告されています。決定する前に必ず公式のモデルカードを確認してください。初期の評判は良好ですが、公開から3週間というのは、まだ本番運用に耐えるかどうかとは別の話です。',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'ハードウェアという関門',
        content: [
          'ローカル動画生成が「無料」なのは、子犬が「無料」なのと同じ意味です。モデルの重み自体にはコストがかかりませんが、GPUこそが本当の参入コストです。GPUのVRAMが12GB未満で、アップグレードの予定もない場合は、ローカル生成は最初から見送るべきです。上記3モデルはいずれも、このクラス以下では実用的な品質で動作せず、クラウドプラットフォームの方が速く良い結果を得られます。',
          '自分のマシンがどのクラスに当たるか分からない場合は、以下のガイドが参考になります。モデルごとの正確な要件は[VRAM Calculator](/ja/local-llms/vram-calculator-local-llm)、モデルサイズ別の一覧表は[How Much VRAM Do You Need?](/ja/local-llms/how-much-vram-local-llm)、ハードウェア選びには[Best GPUs for Local AI](/ja/local-llms/best-gpus-for-local-llms)と[Best Budget GPUs](/ja/local-llms/best-budget-gpus-local-llm)、プラットフォーム比較には[GPU vs CPU vs Apple Silicon](/ja/local-llms/gpu-vs-cpu-vs-apple-silicon)をご覧ください。一つ正直に断っておくと、これらのガイドはLLM用のVRAM計算式（パラメータ数×ビット数÷8）を使っています。動画拡散モデルの場合はVRAM使用量が解像度とクリップ長にも比例して増えるため、これらの数字は動画ワークロードにおいては下限であり上限ではないと考えてください。',
        ],
        columns: ['お使いのGPU', '実行可能なモデル'],
        rows: [
          { 'お使いのGPU': 'VRAM 6〜8GB', '実行可能なモデル': 'Wan 2.2 TI2V-5B（量子化）— 実用的、エントリー品質' },
          { 'お使いのGPU': 'VRAM 12GB', '実行可能なモデル': 'LTX-Video 0.9.5 — このクラスで唯一の実用的な選択肢' },
          { 'お使いのGPU': 'VRAM 16GB', '実行可能なモデル': 'HunyuanVideo 1.5（ライセンス条件が合えば）、Wan 2.2 14B（GGUF Q3）' },
          { 'お使いのGPU': 'VRAM 24GB以上', '実行可能なモデル': 'すべて対応：高品質のWan 2.2 14B、量子化LTX-2' },
        ],
        note:
          '2026年8月時点のおおよそのハードウェア費用（kakaku.com・price-rank.com調べ）：中古のRTX 3060 12GBは約¥28,000〜35,000、中古のRTX 3090は在庫不足の影響で価格が高騰しており約¥130,000〜180,000程度です。GPU価格は変動が大きいため、数か月以上前のこの数字を鵜呑みにせず、購入前に必ず最新価格を確認してください。',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'ローカル動画生成の運用が実際に求めること',
        content:
          'ローカルモデルを使うということは、動画ツールを1つインストールするのではなく、パイプライン全体を自分で組み立てるということです。\n\n**生成環境の構築。** ComfyUIはノードベースです。ローダー、サンプラー、デコーダーからなるワークフローグラフを、自分で構築するか、あるいはインポートしてデバッグする必要があります。最初のフレームがレンダリングされるまでに、CUDAバージョンの不一致、PyTorchのバージョン固定、`flash_attn`のインストールエラーなどに遭遇することを覚悟してください。\n\n**プロンプトの作成。** 動画モデルには、ショットタイプ、カメラの動き、ライティング、被写体の動作といった構造化されたプロンプトが必要で、一行だけの指示では不十分です。組み込みのプロンプトヘルパーもシステムプロンプト層もなく、構造全体を自分で書く必要があります。[system prompts vs. user prompts](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)と[prompt engineering for local models](/ja/local-llms/prompt-engineering-for-local-models)のガイドで扱う基本は、そのまま動画プロンプティングにも応用できます。\n\n**クリップの周辺にあるすべて。** ローカルモデルが出力するのは、5〜20秒の無音（LTXを除く）の生クリップです。台本、ナレーション、音楽、ストック映像、字幕、編集は、それぞれ別のツールを自分で選び、インストールし、つなぎ合わせる必要があります。',
        promptExamples: [
          { label: '弱い例（一行だけ）', text: 'A dog on a beach（浜辺の犬）' },
          { label: '構造化された例（動画モデルに必要なもの）', text: 'Golden retriever sprinting along a wet shoreline at golden hour, low tracking shot following from the side, shallow depth of field, warm backlight, gentle slow motion, cinematic 24fps（黄金色の夕暮れ時、濡れた海岸線を走るゴールデンレトリバー。横から追う低アングルのトラッキングショット、浅い被写界深度、暖色の逆光、緩やかなスローモーション、シネマティックな24fps）' },
        ],
        note:
          '被写体と動作、カメラの動き、ライティング、スタイル。この4つの要素を1つの文に詰め込めるかどうかが、スロットマシンとカメラの違いを分けます。このDIYスタックにワクワクするなら、ローカルという入り口はあなたに向いています。疲れそうだと感じたなら、この先を読み進めてください。',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'クラウドという入り口：InVideoがまとめて提供するもの',
        sponsoredSlot: true,
        content:
          'InVideoはクラウドという入り口の一例であり、唯一の選択肢ではありません。「クラウド」がすべて同じ意味だと思い込む前に、他のサービスとどう違うのか知っておく価値があります。Runwayはプロ向け編集ソフト（Premiere Pro、Final Cut、DaVinci Resolve）に直接統合されており、完成した1本の動画を組み立てるというより、AIと編集者を組み合わせたハイブリッドワークフローを想定しています。Luma AIのDream Machineは、VFX合成パイプライン（After Effects、Nuke）向けのネイティブ16ビットHDR出力に特化しており、まったく異なる層のユーザーを対象としています。Pikaは軽量さを維持しており、高速な生クリップ生成に特化する一方、台本・ナレーション・ストック映像の組み立て機能は内蔵していません。つまり、クリップの周辺にあるすべてのために別のツールが必要になる点は、ローカルモデルを動かすのと同じDIYパイプラインの問題であり、違いはGPUが不要という点だけです。この3つと比べてInVideoが際立っているのは、InVideoが主に生成専用ツールではないという点です。台本から完成動画までを組み立てるアセンブラーであり、必要なときにはKling、Veo、Seedanceといった生成モデルへのアクセスも提供します。\n\nInVideoは動画モデルではなく、制作パイプライン全体をサービスとして提供するものです。トピックを入力するか台本を貼り付けるだけで、v4エージェントが最長30分の完成した動画を返します。AI生成の台本、1,600万点以上のストック素材ライブラリまたは新規生成クリップから組み立てられたシーン、50以上の言語に対応するAIナレーション（音声クローンを含む）、音楽、字幕、ブランドキットのスタイリングまで含まれます。すべてブラウザ上で動作するため、自分のGPU性能は関係ありません。\n\nGPUの調査や量子化フォーマットの勉強ではなく、今すぐ動画作りを始めたい人にとって、InVideoは現実的な選択肢です。ローカルハードウェアも、ComfyUIのインストールも、CUDAのトラブルシューティングも不要で、台本・ナレーション・音楽・字幕まで、ほとんどの人が実際に必要とする要素を1つのワークフローで完結できます。生成モデルそのものを細かく制御することより、完成した動画を重視するクリエイターに特に向いています。無料プランがあるため、何かを支払う前にそれが自分に合うかどうかを確かめられます。\n\nこの比較において特に際立つ点が3つあります。\n\n- **モデルの混乱を吸収してくれる。** すべての有料プランには、Seedance 2.5、Veo 3.1、Kling 3を含む200以上のモデルへのアクセスが含まれます。あるモデルが訴訟を起こされたり停止したりしても、InVideoが差し替えてくれるため、あなたのワークフローは続行できます。\n- **自動化が後付けではなく組み込まれている。** 公式のMCPサーバーがあるため、プロンプト→台本→映像→字幕という一連のパイプライン全体をプログラムから起動できます。本来ComfyUIの周りに自分で構築するようなハーネスが、最初から用意されています。\n- **無料プランは本物の試乗になる。** 透かしと分数制限はありますが、支払う前に出力品質を判断するには十分です。\n\n**速度について具体的に、そして正直な注意点：** 1回の生成自体は速く、通常は数分です。しかし、InVideo自身のFAQによれば、ショートフィルムのエンドツーエンドの制作全体には数分ではなく2〜5日かかるとされています。時間がかかるのは生成そのものではなく、複数の生成候補の中から選び、組み立てる作業だからです。1〜3分の完成した映像に対して「現実的な最低ラインとして2日」という数字を、ローカルの入り口で20秒の未編集映像を作るのにかかる16〜36分の生の生成時間と公平に比較すべきです。InVideoは、あなた自身のセットアップ時間と編集時間を、InVideo側の制作時間と引き換えているのであり、時間そのものをゼロにするわけではありません。\n\n現在のプランは月額$17から（Plusプラン、年間契約、2026年8月時点で確認済み。最新の数字は[InVideoの料金ページ](https://invideo.io/pricing/)で確認してください）：',
        blockquote:
          '**ローカルセットアップなしでAI動画を作りたいですか？** パワフルなGPUを持っていない、あるいはローカルAI動画ツールのインストールと設定に何時間もかけたくないなら、InVideoを試してみる価値があります。[InVideoの無料版を試す →](https://invideo.io/pricing/)',
        columns: ['プラン', '価格', '月間クレジット', '最適な用途'],
        rows: [
          { 'プラン': 'Free', '価格': '$0', '月間クレジット': '制限あり', '最適な用途': 'お試し利用（透かしあり）' },
          { 'プラン': 'Plus', '価格': '$17/月（$200/年）', '月間クレジット': '75', '最適な用途': '定期的に制作するクリエイター向け — 全AIモデル、アバター4体＋音声クローン、iStock素材100点、透かしなしの無制限エクスポート' },
          { 'プラン': 'Max', '価格': '$85/月（$1,000/年）', '月間クレジット': '390', '最適な用途': '大量制作のチャンネル向け、アバター16体' },
          { 'プラン': 'Generative', '価格': '$170/月（$2,000/年）', '月間クレジット': '800以上', '最適な用途': 'ショートフィルム／制作ボリューム向け' },
          { 'プラン': 'Elite', '価格': '$900/月（$10,800/年）', '月間クレジット': '4,250以上', '最適な用途': 'シリーズ制作・商業規模向け' },
        ],
        note:
          '上記の価格はすべて2026年8月時点の年間契約レートです。月払いの場合はさらに高くなります（InVideo自身のFAQによると、Plus $20、Max $100、Generative $200、Elite $1,000／月）。プランと価格は変更されるため、依存する前に必ずInVideoの最新の料金ページを確認してください。',
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'クラウドかローカルか：あなたに合う入り口は？',
        content: '短くまとめると、よくある状況ごとの推奨は次のとおりです。',
        columns: ['あなたの状況', '推奨'],
        rows: [
          { 'あなたの状況': 'GPUがない、またはVRAM 12GB未満', '推奨': 'InVideo（クラウド）— このクラス以下ではどのローカルモデルもうまく動きません' },
          { 'あなたの状況': '生のクリップではなく、ナレーション付きの完成した動画が欲しい', '推奨': 'InVideo（クラウド）— ローカルモデルは完全な制作物を組み立ててくれません' },
          { 'あなたの状況': '納期優先で、セットアップの手間を一切許容できない', '推奨': 'InVideo（クラウド）' },
          { 'あなたの状況': 'VRAM 12GB以上のGPUがあり、セットアップに抵抗がなく、プライバシーと限界費用$0を重視する', '推奨': 'ローカル：LTX-Video（12GB）またはWan 2.2（フル品質には24GB）' },
          { 'あなたの状況': 'EU、英国、韓国在住', '推奨': 'ローカルはWan 2.2かLTX-2のみ（HunyuanVideoのライセンス対象外）' },
          { 'あなたの状況': '自分で構築せずに大規模な自動化・APIが必要', '推奨': 'InVideo（クラウド、MCPサーバー）' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'InVideoを選ぶべきなのは誰か？',
        content:
          '**InVideoの方が良い選択になりやすいのは、次のような方です。**\n\n- パワフルなGPUを持っていない\n- すぐに動画制作を始めたい\n- ComfyUI、CUDA、モデル、Python環境のインストールや設定をしたくない\n- 複数のローカルツールを組み合わせるより、統合されたワークフローが欲しい\n- 台本、音声、音楽、字幕、動画生成を1つのワークフローで済ませたい\n- 基盤となるモデルを試すことより、完成した動画そのものを重視する\n\n**ローカルAIの方が良い選択になりやすいのは、次のような方です。**\n\n- すでに適切なGPUハードウェアを持っている\n- 最大限のコントロールが欲しい\n- モデルやワークフローを自由に試したい\n- 高い技術スキルを持っている\n- 生成をローカルで完結させることを優先する\n- 非常に大量の生成を見込んでおり、限界生成コストを最適化したい',
        blockquote:
          '**どちらのルートが自分に合うか分からないですか？** ハードウェアと技術的なセットアップを避けたいなら、一番手軽な実験方法は、まずInVideoを試してワークフローが自分に合うか確かめることです。[InVideoを無料で試す →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: '実際の動作を見る',
        items: [
          '[4 Open Source AI Video Models Compared — Which One\'s Actually Free?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — LTX 2.3、Wan 2.2、HunyuanVideo 1.5、MiniMax H3の出力を並べて比較。ライセンスの細則も解説。',
          '[InVideo Agent One Review](https://www.youtube.com/watch?v=uUHO9byu0c0) — プロンプトから完成動画までの全ワークフローを紹介。',
          '[Wan 2.2 Full Local Demo](https://www.youtube.com/watch?v=fs62ML_ZgEs) — コンシューマー向けハードウェアでの正直なレンダリング時間（発売週、2025年7月）。',
          '[Low-VRAM Wan 2.2 Tutorial](https://www.youtube.com/watch?v=tQu0DjtOEyg) — 14BモデルをVRAM 6GBのノートPCで動かす方法（2025年）。',
        ],
        note:
          'これらはサードパーティによる動画であり、PromptQuorumやInVideoが制作したものではありません。参考情報として掲載しているのみで、チャンネルやその他のコンテンツを推奨する意図はありません。',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'VRAM 8GBでAI動画生成は実行できますか？',
            a: 'ぎりぎり可能です。Wan 2.2のTI2V-5Bバリアントは量子化すれば6〜8GBで動作しますが、品質は下がり、クリップ長も短くなります。本格的なモデルを動かすなら、実質的な最低ラインは12GBです。それを下回る場合は、InVideoのようなクラウドツールが現実的な答えです。',
          },
          {
            q: 'Wan 2.2は本当に商用利用が無料ですか？',
            a: 'はい。Apache 2.0ライセンスで、商用利用は無制限、収益上限も地域制限もなく、あなたの生成物に対する権利主張もありません。トップクラスのローカルモデルの中で、細かい注意点が一切ない唯一のモデルです。',
          },
          {
            q: 'HunyuanVideoはEUや英国で使えますか？',
            a: 'いいえ。Tencent Hunyuanコミュニティライセンスは、EU、英国、韓国には明確に適用されません。これはモデル本体だけでなく、その出力にも及びます。代わりにWan 2.2かLTX-2を使ってください。',
          },
          {
            q: 'InVideoを使うのにGPUは必要ですか？',
            a: '不要です。InVideoはすべてブラウザ上で動作し、生成処理はすべてInVideo側のインフラで行われます。5年前のノートPCでも問題なく使えます。',
          },
          {
            q: 'ローカルモデルだけでナレーション付きの完成したYouTube動画を作れますか？',
            a: 'それ単体では作れません。ローカルモデルが生成するのは5〜20秒の生クリップです（LTX-2は同期音声を含みますが、他は無音です）。台本、ナレーション、音楽、字幕、編集はそれぞれ別のツールが必要で、パイプラインとして自分で組み立てる必要があります。',
          },
          {
            q: '「無料」のローカルAI動画には、実際どんな落とし穴がありますか？',
            a: 'ハードウェア費用（対応可能なGPU）、セットアップにかかる時間（ComfyUIとその依存関係）、そして生の出力クリップの周りに必要なDIYパイプラインです。モデルの重み自体は、生成1回あたり本当に永久に$0です。',
          },
          {
            q: 'Wan 2.7や、それより新しいWanモデルはありますか？',
            a: 'いいえ。公式のWanリリースは2.2で止まっています。「Wan 2.7のウェイト」を提供すると謳うサイトは詐欺です。公式のGitHubかHugging Faceリポジトリからのみダウンロードしてください。',
          },
          {
            q: '完全な初心者です。何から始めればいいですか？',
            a: 'InVideoの無料プランから始めてください。数分でナレーション付きの完成した動画が手に入り、AI動画がそもそも自分の目的に合うかどうかを判断できます。後から対応可能なGPUを購入し、フルコントロールとプライバシーが欲しくなったら、ローカルという入り口はいつでも開いています。',
          },
          {
            q: 'これらのローカルモデルをMacとWindowsで動かす場合、何が違いますか？',
            a: 'ComfyUIはApple Silicon（M1〜M4）上でも、PyTorchのMPSバックエンド経由で動作しますが、同等のNVIDIA GPUと比べて生成速度はおよそ3〜5倍遅くなると考えてください。使えないわけではありませんが、速度面では競争力がありません。より実務的な問題はソフトウェアサポートです。これらのモデルが依存するCUDA固有の最適化（flash-attention、GGUF/FP8量子化ツール群）はMac上では成熟度が低く、多くのコミュニティ製ワークフローやインストールガイドはWindowsまたはNVIDIAカード搭載のLinuxを前提としているため、調整が必要になったり、ドキュメント通りには動かなかったりする場合があります。一つ利点があるとすれば、Apple Siliconのユニファイドメモリにより、同等のVRAMを持つディスクリートGPUよりも大きなモデルをメモリに収められる場合があることです。速度は遅くなりますが。ローカル動画生成専用にハードウェアを購入するなら、WindowsまたはLinux＋NVIDIAがサポートの充実した選択肢です。すでに持っているMacで試すのは問題ありませんが、本格的なスループットを求めるなら推奨される選択肢ではありません。',
          },
          {
            q: '複数のローカル動画クリップにわたって、同じキャラクターの一貫性を保てますか？',
            a: 'はい、ただし追加の作業が必要です。3モデルのいずれも、別々の生成間でこれを標準機能として保証していません。実用的な方法は2つあります。同じ参照画像をimage-to-videoモード（3モデルともI2Vをサポート）に入力する方法、またはキャラクター用に小さなLoRAを学習させる方法です。Wan 2.2とLTX-2の両方に、これ用の文書化されたLoRAワークフローがあります。LTX-2版はIC-LoRA（in-context LoRA）と呼ばれ、複数キャラクターの一貫性を明示的にサポートしています。コミュニティの見解は一致しており、学習済みのLoRAは、プロンプトや参照画像だけを使う場合よりもはるかに信頼できる結果を出します。InVideoのブランドキットとAIアバター機能は、同じ根本的な課題を別の方法で解決します。一度設定すれば繰り返し使える固定のアバターと音声プロファイルで、学習は不要です。',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: '決める前に試す',
        content:
          'ローカルGPUのセットアップや有料サブスクリプションにコミットしなくても、クラウドワークフローを評価することはできます。ハードウェアを購入したり、週末をComfyUIに費やしたりする前に、まず逆方向に5分使ってみる価値があります。\n\n1. InVideoの無料版を試す。\n2. 短い動画を1本作成する。\n3. 出力品質と、ワークフローの使い心地を評価する。\n4. その体験を、ローカルインストールにかかるセットアップの手間と比較する。\n\nこうすることで、比較は単に読むものから、この記事の残りを読み終えるより短い時間で自分自身で試せるものへと変わります。',
        blockquote:
          '[InVideoの無料版を試す →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'VRAM 12GB以上のGPUを持っている（あるいはこれから購入する予定がある）、自分のツールを組み立てるのが好き、そしてプライバシーと無制限で$0の生成を利便性より重視するなら、ローカルを選んでください。Wan 2.2が最も安全な土台です。最高品質、Apache 2.0、細かい注意点なし。速度と音声を重視するならLTX-2が専門です。\n\nハードウェアがない、セットアップをしたくない、あるいは生のクリップではなく完成した動画が必要なら、クラウドを選んでください。単にAI生成の動画を作りたいだけのほとんどの人にとって、クラウドの方が入り口として簡単です。ローカル生成に必要なハードウェアと技術的な関心がまだないなら、InVideoはそのほとんどの複雑さを1つのプロンプトで取り除いてくれます。すべてのモデルと素材がまとめられ、自動化も含まれており、お試しは$0から、透かしを外すには月額$17（年間契約）からです。自分のワークフローに合うかどうかを知る一番簡単な方法は、無料版を試してみることです。\n\nどちらの入り口も、AI動画へとつながっています。問われるべきなのは、どちらの技術が優れているかではなく、どちらのワークフローが自分のマシン、忍耐力、目的に合っているかです。',
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
          '[VBench-2.0 leaderboard](https://github.com/Vchitect/VBench) — 品質と物理的整合性の数値に使用された独立ベンチマーク。',
          '[InVideo pricing](https://invideo.io/pricing/) — 公式プランと料金の詳細。',
          '[InVideo MCP server](https://invideo.io/ai/mcp) — 公式の自動化ドキュメント。',
          '[MiniMax H3 on GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — 公式リポジトリ。',
          '[MiniMax H3 on Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 公式モデルウェイト。',
          '[InVideo: How Long Does It Take to Make an AI Short Film?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — InVideo自身によるエンドツーエンドの制作時間データ（2〜5日）。',
          '[ComfyUI system requirements](https://docs.comfy.org/installation/system_requirements) — 公式のMac/Apple Silicon MPSサポートドキュメント。',
          '[LTX Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — 公式のキャラクター一貫性（IC-LoRA）ガイド。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Local AI Image Generation vs. Cloud](/ja/power-local-llm/local-ai-image-generation-vs-cloud) — 動画ではなく画像を対象にした、同じ構成の姉妹記事。',
          '[VRAM Calculator for Local Models](/ja/local-llms/vram-calculator-local-llm) — モデルと量子化ごとの正確なVRAM要件。',
          '[How Much VRAM Do You Need?](/ja/local-llms/how-much-vram-local-llm) — 7Bから70Bまでのモデルサイズ別の一覧表。',
          '[Best GPUs for Local AI in 2026](/ja/local-llms/best-gpus-for-local-llms) — 予算クラス別のハードウェア選び。',
          '[Best Budget GPUs for Local AI](/ja/local-llms/best-budget-gpus-local-llm) — エントリー向けハードウェアの選択肢。',
          '[GPU vs CPU vs Apple Silicon](/ja/local-llms/gpu-vs-cpu-vs-apple-silicon) — ローカル推論のプラットフォーム比較。',
          '[System Prompts vs. User Prompts](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — 動画プロンプティングにも応用できるプロンプト構造の基本。',
          '[Prompt Engineering for Local Models](/ja/local-llms/prompt-engineering-for-local-models) — 構造化されたプロンプティングの手法。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-08-21',
    next_refresh_due: '2027-02-21',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'InVideo vs 로컬 AI 비디오: 한쪽은 $0에 주말 시간, 다른 한쪽은 $17',
    seoTitle: '클라우드 vs 로컬 AI 비디오 2026: InVideo vs Wan 2.2 & LTX-2',
    intro:
      '2026년 AI 비디오로 들어가는 문은 두 개입니다. 첫 번째 문은 로컬입니다. 무료이며 개방형인 비디오 모델을 자신의 GPU에서 실행합니다 — 생성 횟수 제한 없음, 완전한 프라이버시, 구독료 없음, 하지만 전체 워크플로우를 직접 구축해야 합니다. 두 번째 문은 클라우드입니다. InVideo는 프롬프트 하나만 입력하면 완성된 내레이션 비디오가 나옵니다 — 스크립트, 스톡 영상, 음성, 음악, 자막이 모두 포함되어 브라우저에서 바로 완성됩니다. 어느 쪽 문도 "더 낫다"고 할 수 없습니다. 이 가이드는 대부분의 비교 글이 건너뛰는 라이선스 세부 조항, 실제 하드웨어 요구사항, 그리고 여러분의 상황을 추천으로 연결해주는 의사결정 도구를 제공합니다.',
    metaDescription:
      '로컬 AI 비디오 모델(Wan 2.2, LTX-2, HunyuanVideo)은 GPU만 있으면 무료입니다. InVideo의 클라우드는 모든 것을 $17/월에 해결합니다. VRAM, 라이선스, 세부 조항까지 정직하게 비교합니다.',
    twitterDescription:
      '2026년 클라우드 vs 로컬 AI 비디오: InVideo는 모든 것을 $17/월에 번들로 제공합니다. Wan 2.2, LTX-2, HunyuanVideo는 자신의 GPU에서 무료로 실행됩니다 — GPU가 충분히 강력하다면요. 정직한 비교입니다.',
    audience:
      '자신의 GPU에서 무료로 로컬 비디오를 생성할지, InVideo의 올인원 클라우드 파이프라인을 사용할지 결정하려는 창작자와 개발자를 위한 글입니다 — 하드웨어 요구사항, 라이선스 세부 조항, 워크플로우 절충점을 다룹니다.',
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
      '**12GB 이상의 GPU를 보유한 대부분의 사용자에게는 Wan 2.2가 2026년 최고의 로컬 AI 비디오 모델입니다** — Apache 2.0 라이선스로 매출 상한이나 지역 제한이 전혀 없으며, 공개 검증된 오픈 모델 중 가장 높은 품질 점수(VBench 약 84.7%)를 완전 무료로 제공합니다. **해당 GPU가 없거나, 원시 클립이 아닌 완성된 내레이션 비디오를 원한다면 InVideo가 더 나은 선택입니다** — 월 $17(연간 결제)부터 시작하는 Plus 플랜은 Kling 3, Veo 3.1, Seedance 2.5를 포함한 200개 이상의 모델을 브라우저 기반의 단일 파이프라인으로 묶어 스크립트, 음성, 음악, 자막까지 포함합니다. **HunyuanVideo 1.5는 가장 영화적인 로컬 화질을 제공하지만 라이선스가 EU, 영국, 대한민국을 완전히 제외합니다** — 이들 지역에 거주한다면 이 모델은 건너뛰어야 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'AI 비디오를 로컬에서 생성해야 할까요, InVideo의 클라우드 파이프라인을 사용해야 할까요?',
        answer:
          '12GB 이상의 GPU가 있고, 무제한 $0 생성과 프라이버시를 중시한다면 로컬에서 생성하십시오 — Wan 2.2(Apache 2.0, 제한 없음)가 가장 안전한 출발점입니다. 적합한 하드웨어가 없거나 직접 설정을 관리하고 싶지 않거나 원시 클립이 아닌 완성된 비디오(스크립트, 음성, 음악, 자막)가 필요하다면 InVideo를 사용하십시오 — Plus 플랜은 월 $17(연간 결제)부터 시작합니다.',
        bullets: [
          'VRAM 12GB 미만 → InVideo가 현실적인 선택입니다. 이 등급 이하에서는 로컬 모델이 진지한 품질을 내기 어렵습니다.',
          'VRAM 12GB → LTX-Video 0.9.5가 이 등급에서 유일하게 진지하게 고려할 만한 로컬 옵션입니다.',
          'VRAM 16~24GB 이상 → Wan 2.2(최고 품질, Apache 2.0, 제한 없음) 또는 LTX-2(속도 + 동기화된 오디오).',
          'EU, 영국, 대한민국 거주 → HunyuanVideo 1.5의 라이선스가 여러분을 제외합니다. 대신 Wan 2.2나 LTX-2를 사용하십시오.',
          '원시 클립이 아닌 완성된 내레이션 비디오가 필요한 경우 → 로컬 모델은 5~20초 길이의 무음(LTX 제외) 클립만 생성합니다. InVideo는 월 $17(연간 결제)부터 전체 제작 파이프라인을 처리합니다.',
        ],
        updatedDate: '2026-08-21',
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
      { label: '클라우드 문: InVideo가 제공하는 것', anchor: '#invideo-bundle' },
      { label: '클라우드냐 로컬이냐: 어느 문이 나에게 맞을까?', anchor: '#decision-guide' },
      { label: '누가 InVideo를 선택해야 할까?', anchor: '#who-should-choose' },
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
          '**Wan 2.2는 라이선스 제한이 전혀 없는 유일한 최상위급 로컬 비디오 모델입니다.** Apache 2.0으로 상업적 사용에 제한이 없고, 매출 상한도 지역 제한도 없습니다 — 그리고 검증된 오픈소스 VBench 품질 점수 중 가장 높은 수치(약 84.7%)를 기록했습니다.',
          '**InVideo는 Kling 3, Veo 3.1, Seedance 2.5를 포함한 200개 이상의 모델을 하나의 브라우저 기반 파이프라인으로 묶습니다.** 월 $17(Plus 플랜, 연간 결제)부터 시작하며 스크립트, 음성, 음악, 자막이 자동으로 처리됩니다.',
          '**HunyuanVideo 1.5의 라이선스는 EU, 영국, 대한민국을 명시적으로 제외합니다** — 모델 자체와 그 결과물 모두에 적용됩니다. 해당 지역의 독자는 대신 Wan 2.2나 LTX-2를 사용해야 합니다.',
          '**LTX-2는 로컬 3종 중 가장 빠르며, 동기화된 오디오를 내장한 유일한 모델입니다.** 연 매출 $10M 미만의 기업에는 상업적으로 무료입니다.',
          '**진지한 로컬 비디오 생성의 현실적인 최저 기준은 VRAM 12GB입니다.** 그 이하에서는 InVideo가 더 실용적인 선택이 됩니다.',
          '**로컬 모델은 완성된 비디오가 아니라 5~20초 길이의 원시 무음 클립을 생성합니다.** 스크립트, 음성, 음악, 자막, 편집은 각각 별도의 도구를 직접 조합해야 합니다 — InVideo는 이 모든 것을 한 번에 처리합니다.',
          '**"Wan 2.7"이라는 모델은 존재하지 않습니다.** 이를 제공한다는 다운로드 페이지는 SEO 사기입니다 — 공식 Wan 릴리스는 2.2에서 멈춰 있습니다.',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: '2026년이 AI 비디오에 있어 이례적인 시기인 이유',
        content:
          '독점(proprietary) 비디오 시장은 혼란스러웠습니다. OpenAI는 출시 6개월도 채 되지 않은 2026년 3월, 다운로드 수가 최고점 대비 약 66% 하락한 후 소비자용 Sora 앱을 종료했습니다(API는 별도로 계속 운영됩니다). ByteDance의 Seedance 2.0은 같은 달 Disney, Paramount, Warner Bros.로부터 중지 요청서(cease-and-desist letter)를 받은 후 할리우드 소송에 휘말려 글로벌 출시가 중단되었습니다 — 중국 내에서는 계속 이용 가능하지만 국제 상업적 사용에는 법적 위험이 따릅니다. Alibaba의 HappyHorse 모델은 2026년 4월 품질 리더보드 1위를 차지했지만 일반에는 공개되지 않았습니다.\n\n바로 이런 혼란이 두 문 모두를 매력적으로 만듭니다. 개방형 로컬 모델은 여러분을 벤더의 드라마로부터 자유롭게 합니다. 그리고 InVideo는 그 드라마를 대신 흡수합니다. 이 구독 서비스는 Kling 3, Veo 3.1, Seedance 2.5를 포함한 200개 이상의 모델에 대한 접근을 번들로 제공하므로, 어떤 모델이 사라지거나 소송을 당해도 여러분의 워크플로우는 영향을 받지 않습니다.',
      },
      localModels: {
        id: 'local-models',
        title: '로컬 문: 자신의 GPU에서 실행하는 무료 모델 3종',
        content:
          '현재 다운로드 수, 커뮤니티 활동, 벤치마크 결과를 기준으로 로컬 비디오 생성 분야를 지배하는 오픈 웨이트 시스템은 세 가지입니다. 세 모델 모두 자신의 컴퓨터에 설치하는 노드 기반 인터페이스인 ComfyUI를 통해 실행됩니다 — Ollama 같은 채팅형 도구가 아닙니다. 이들은 LLM이 아니라 디퓨전(diffusion) 모델입니다.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2는 2026년 가장 전반적으로 우수한 로컬 비디오 모델입니다 — Apache 2.0, 최고 품질, 제한 없음 — LTX-2는 속도와 동기화된 오디오에서 앞서며, HunyuanVideo 1.5는 가장 영화적인 화질을 제공하지만 라이선스상 EU/영국/대한민국 사용자를 제외합니다.' },
          { type: 'plain-terms', text: '하나의 답만 원한다면: 12GB 이상의 GPU를 마련하고 Wan 2.2를 실행하십시오. 최고 품질, 가장 단순한 라이선스, 별다른 세부 조항이 없습니다.' },
        ],
        columns: ['모델', '라이선스', 'VRAM', '출력', '특징'],
        rows: [
          { '모델': 'Wan 2.2 (Alibaba)', '라이선스': 'Apache 2.0 — 제한 없음', 'VRAM': '6~8GB (5B) / 15~25GB (14B)', '출력': '480p/720p, 약 5초 클립', '특징': '검증된 VBench 품질 점수 최고치(약 84.7%)' },
          { '모델': 'LTX-2 (Lightricks)', '라이선스': 'LTX 커뮤니티 라이선스 — 매출 $10M 미만은 무료', 'VRAM': '18~20GB 양자화, 32GB 이상(풀 정밀도)', '출력': '480p~1080p, 5~20초, 오디오 포함', '특징': '한 번에 동기화된 오디오+비디오를 생성하는 유일한 모델' },
          { '모델': 'HunyuanVideo 1.5 (Tencent)', '라이선스': 'Tencent 커뮤니티 라이선스 — EU/영국/대한민국 제외', 'VRAM': '최소 14GB, 24GB 권장', '출력': '480p/720p, 최대 10초', '특징': '영화적인 조명 표현으로 커뮤니티에서 인기; VRAM 요구량이 가장 낮음' },
        ],
        note:
          '⚠️ 사기 경고: "Wan 2.7"이라는 모델은 존재하지 않습니다. "Wan 2.7 오픈 웨이트"를 제공한다는 다운로드 페이지는 SEO 사기입니다. 공식 Wan 릴리스는 2.2에서 멈춰 있습니다 — 아래 링크된 공식 GitHub 또는 Hugging Face 저장소에서만 다운로드하십시오.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — 품질의 왕, 진정한 무료',
        content:
          'Wan 2.2는 가장 널리 배포된 오픈 비디오 모델입니다. I2V-A14B 저장소 하나만으로도 한 달간 약 424만 회의 Hugging Face 다운로드를 기록했으며, 수백 개의 커뮤니티 파생 모델이 그 위에 구축되었습니다. T2V-A14B와 I2V-A14B(전문가 혼합 구조, 총 27B / 활성 14B 파라미터), 그리고 6~8GB VRAM만으로 텍스트-투-비디오와 이미지-투-비디오를 모두 처리하는 소형 TI2V-5B까지 세 가지 변형으로 출시되었습니다. 14B 등급은 15GB(GGUF Q3)에서 25GB(FP8)까지 필요하며, 공식 비양자화 실행에는 80GB가 요구됩니다. 라이선스는 Apache 2.0으로 진정한 무료이며 상업적 사용에 제한이 없고 매출 기준도, 지역 제외도 없습니다.\n\n**구체적인 속도:** 5초 클립 하나를 생성하는 데 RTX 4090 기준 약 4~9분이 걸립니다(독립적으로 보고된 수치 하나 기준 — Wan 2.2는 한 번에 더 긴 클립을 기본적으로 출력하지 않습니다). 20초 시퀀스를 만들려면 5초짜리 클립 4개를 별도로 생성한 뒤 이어 붙여야 합니다 — 원시 생성 시간만 약 16~36분이며, 매끄럽게 연결하기 위한 수작업 편집이 추가로 필요합니다. 이 수치는 클립당 수치로부터 추정한 값이며, 20초 클립을 직접 측정한 벤치마크가 아닙니다.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — 속도와 동기화된 사운드',
        content:
          'LTX-2는 이 3종 중 유일하게 동기화된 오디오와 비디오를 한 번에 생성하는 모델입니다 — 발소리, 주변음, 효과음이 영상과 함께 도착합니다. 세 모델 중 가장 빠르며 하드웨어 요구사항도 가장 관대합니다. 아키텍처는 22B 디퓨전 트랜스포머이며, 현재의 LTX-2.5 릴리스와 함께 LTX-2.3(2026년 3월)도 계속 지원됩니다. 라이선스는 LTX 커뮤니티 라이선스로, 회사의 연간 총매출이 $10M 미만이면 상업적 사용이 무료이며 그 이상이면 유료 상업 라이선스가 필요합니다. (일부 서드파티 자료는 이를 Apache 2.0으로 잘못 표기하고 있습니다 — [공식 라이선스 페이지](https://ltx.io/model/license)만이 신뢰할 수 있는 출처입니다.) 하드웨어 요구사항은 양자화 시 18~20GB VRAM, 풀 정밀도에서는 32GB 이상입니다. 12GB 카드에서는 이전 버전인 LTX-Video 0.9.5가 현실적인 선택입니다.\n\n**구체적인 속도:** LTX-2는 정성적으로 3종 중 가장 빠르며, 고급 소비자용 카드에서 거의 실시간에 가까운 미리보기를 제공합니다 — 다만 이 글 작성 시점 기준 RTX 4090에서의 독립적으로 검증된 클립당 소요 시간 수치는 존재하지 않으므로 임의로 만들어내지 않겠습니다. 확인 가능한 유일한 확정 수치는 Lightricks 자체가 데이터센터급 "Nvidia 슈퍼칩"(소비자용 GPU가 아님)에서 진행한 벤치마크로, 10초 클립을 약 6.8초 만에 생성했습니다. 이는 진지한 하드웨어에서 이 아키텍처가 낼 수 있는 상한선으로 봐야 하며, 가정용 장비에서 체감할 성능이 아닙니다.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — 영화적인 화질과 법적인 함정',
        content:
          '2025년 11월 출시된 Tencent의 8.3B 모델은 영화적인 조명과 질감 표현으로 커뮤니티의 사랑을 받고 있으며, VRAM 요구량이 3종 중 가장 낮습니다: 오프로딩 시 최소 14GB, 24GB에서 쾌적하게 동작하며 RTX 4090 기준 480p 클립 하나당 약 75초가 걸립니다. 480p/720p를 기본으로 생성하며, 내장된 초해상도(super-resolution) 기능으로 최대 1080p까지, 클립 길이는 최대 10초까지 지원합니다.\n\n**구체적인 속도:** 5초 480p 클립 하나당 약 75초라면, 영상 1초당 렌더링 시간은 약 15초입니다. 네이티브 최대 클립 길이가 10초이므로, 20초 시퀀스를 만들려면 최대 길이로 두 번 생성해야 합니다 — 초당 속도를 그대로 확장하면 20초 분량의 영상을 생성하는 데 원시 생성 시간만 약 5분이 걸리며, 이어붙이기 작업은 별도입니다. 이는 확인된 5초 수치로부터의 추정치이며, 10초나 20초를 직접 측정한 벤치마크가 아닙니다.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: '라이선스 경고 — 다운로드하기 전에 반드시 읽으십시오. HunyuanVideo 1.5는 Apache 2.0이 아니라 Tencent Hunyuan 커뮤니티 라이선스를 사용합니다. 이 라이선스는 유럽연합(EU), 영국, 대한민국에는 적용되지 않습니다 — 해당 지역의 사용자는 이 모델이나 그 결과물을 사용할 권한이 없습니다. 또한 월간 활성 사용자 1억 명을 상한으로 설정하고 있으며, 그 결과물로 경쟁 모델을 학습시키는 것을 금지합니다. EU, 영국, 대한민국에 거주한다면 이 모델은 건너뛰십시오. Wan 2.2가 제한 없이 동일한 품질 등급을 제공합니다.',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: '주목할 모델: MiniMax H3',
        content:
          '2026년 8월 3일 출시된 MiniMax H3는 네이티브 스테레오 오디오, 출시 첫날부터의 ComfyUI 지원, RTX 3060에서도 실행 가능한 양자화 버전을 갖춘 331억 파라미터 규모의 옴니모달 모델입니다. 네 번째 선택지로 다루기 전에 두 가지 유의점이 있습니다. 로컬 릴리스는 768p로 상한이 설정되어 있으며(완전한 2K 파이프라인은 호스티드 버전에서만 제공됩니다), 커뮤니티 라이선스에는 자체적인 지역 제한과 $20M 매출 기준이 포함되어 있다고 알려져 있으므로 사용 전에 공식 모델 카드를 확인해야 합니다. 초기 반응은 좋지만, 출시된 지 3주밖에 되지 않은 것과 실무에 바로 투입 가능한 것은 별개의 문제입니다.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: '하드웨어 관문',
        content: [
          '로컬 비디오 생성은 강아지가 "공짜"인 것과 같은 의미로 무료입니다. 모델 가중치 자체는 비용이 들지 않지만, GPU가 진짜 입장료입니다. GPU의 VRAM이 12GB 미만이고 업그레이드 계획이 없다면 로컬 생성은 아예 건너뛰십시오 — 위의 세 모델 모두 이 등급 이하에서는 실용적인 품질로 동작하지 않으며, 클라우드 플랫폼이 더 빠르게 더 나은 결과를 제공할 것입니다.',
          '이 내용이 자신의 컴퓨터에 어떻게 적용되는지 잘 모르시겠습니까? 다음 가이드가 자세히 설명합니다: 모델별 정확한 요구사항은 [VRAM 계산기](/ko/local-llms/vram-calculator-local-llm), 모델 크기별 도표는 [필요한 VRAM은 얼마인가?](/ko/local-llms/how-much-vram-local-llm), 하드웨어 선택은 [로컬 AI를 위한 최고의 GPU](/ko/local-llms/best-gpus-for-local-llms)와 [최고의 예산형 GPU](/ko/local-llms/best-budget-gpus-local-llm), 플랫폼 비교는 [GPU vs CPU vs Apple Silicon](/ko/local-llms/gpu-vs-cpu-vs-apple-silicon)을 참고하십시오. 한 가지 솔직한 유의점: 이 가이드들은 LLM용 VRAM 공식(파라미터 수 × 비트 ÷ 8)을 사용합니다. 비디오 디퓨전 모델은 해상도와 클립 길이에 따라서도 VRAM 사용량이 달라지므로, 이 수치들은 비디오 작업에서는 상한이 아니라 최저 기준으로 받아들이십시오.',
        ],
        columns: ['보유 GPU', '실행 가능한 것'],
        rows: [
          { '보유 GPU': 'VRAM 6~8GB', '실행 가능한 것': 'Wan 2.2 TI2V-5B(양자화) — 사용 가능, 입문 수준 품질' },
          { '보유 GPU': 'VRAM 12GB', '실행 가능한 것': 'LTX-Video 0.9.5 — 이 등급에서 유일하게 진지하게 고려할 만한 옵션' },
          { '보유 GPU': 'VRAM 16GB', '실행 가능한 것': 'HunyuanVideo 1.5(라이선스 허용 시), Wan 2.2 14B(GGUF Q3)' },
          { '보유 GPU': 'VRAM 24GB 이상', '실행 가능한 것': '모든 것 가능: Wan 2.2 14B 고품질, LTX-2 양자화' },
        ],
        note:
          '2026년 8월 기준 대략적인 하드웨어 비용: 중고 RTX 3060 12GB는 약 $170~220, 중고 RTX 3090 구성은 약 $900~1,100입니다. GPU 가격은 변동하므로, 몇 달이 지난 이 수치를 그대로 믿기보다 구매 전 현재 시세를 확인하십시오.',
      },
      diyReality: {
        id: 'diy-reality',
        title: '로컬 비디오 생성을 실제로 실행한다는 것의 의미',
        content:
          '로컬 모델을 사용한다는 것은 비디오 도구 하나를 설치하는 것이 아니라 파이프라인 전체를 조립한다는 뜻입니다.\n\n**생성 환경 설정.** ComfyUI는 노드 기반 도구입니다. 로더, 샘플러, 디코더로 이루어진 워크플로우 그래프를 직접 구축하거나, 가져와서 디버깅해야 합니다. 첫 프레임이 렌더링되기 전까지 CUDA 버전 불일치, PyTorch 버전 고정, 이따금 발생하는 `flash_attn` 설치 오류를 각오해야 합니다.\n\n**프롬프트 작성.** 비디오 모델은 한 줄짜리 프롬프트가 아니라 구조화된 프롬프트가 필요합니다 — 샷 종류, 카메라 움직임, 조명, 피사체의 동작 등입니다. 내장된 프롬프트 도우미도, 시스템 프롬프트 레이어도 없습니다. 전체 구조를 직접 작성해야 합니다. [시스템 프롬프트와 사용자 프롬프트의 차이](/ko/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)와 [로컬 모델을 위한 프롬프트 엔지니어링](/ko/local-llms/prompt-engineering-for-local-models) 가이드는 비디오 프롬프트 작성에도 그대로 적용되는 기본 원칙을 다룹니다.\n\n**클립 주변의 모든 것.** 로컬 모델은 5~20초 길이의 원시 무음(LTX 제외) 클립을 출력합니다. 스크립트, 음성, 음악, 스톡 영상, 자막, 편집은 각각 선택하고 설치하고 서로 연결해야 하는 별도의 도구입니다.',
        promptExamples: [
          { label: '약한 프롬프트 (한 줄짜리)', text: '해변의 개' },
          { label: '구조화된 프롬프트 (비디오 모델이 필요로 하는 형태)', text: '황금빛 시간대에 젖은 해안선을 질주하는 골든 리트리버, 낮은 위치에서 측면으로 따라가는 트래킹 샷, 얕은 피사계 심도, 따뜻한 역광, 부드러운 슬로우 모션, 시네마틱 24fps' },
        ],
        note:
          '피사체와 동작, 카메라의 움직임, 조명, 스타일 — 한 문장 안에 담긴 이 네 가지 요소가 슬롯머신과 카메라의 차이를 만듭니다. 이런 DIY 조합이 흥미롭게 느껴진다면 로컬 문이 여러분의 것입니다. 지치는 이야기로 들렸다면 계속 읽어보십시오.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: '클라우드 문: InVideo가 제공하는 것',
        sponsoredSlot: true,
        content:
          'InVideo는 클라우드 문의 한 예시일 뿐, 유일한 선택지는 아닙니다. "클라우드"가 하나의 방식만을 의미한다고 단정하기 전에, 다른 서비스들과 어떻게 다른지 알아둘 가치가 있습니다. Runway는 완성된 조립 비디오보다는 AI와 편집기를 결합한 하이브리드 워크플로우를 지향하며 전문 편집 도구(Premiere Pro, Final Cut, DaVinci Resolve)에 직접 통합됩니다. Luma AI의 Dream Machine은 VFX 합성 파이프라인(After Effects, Nuke)을 위한 네이티브 16비트 HDR 출력을 전문으로 합니다 — 완전히 다른 대상 사용자층입니다. Pika는 가볍게 유지됩니다. 스크립트, 음성, 스톡 영상 조립 기능이 내장되어 있지 않은 빠른 원시 클립 생성에 집중하므로, 클립 주변의 모든 것에 여전히 별도 도구가 필요합니다 — GPU가 필요 없다는 점만 빼면 로컬 모델을 실행하는 것과 동일한 DIY 파이프라인 문제입니다. 이 세 서비스와 InVideo를 구분 짓는 지점은, InVideo가 원시 생성 도구를 우선하지 않는다는 점입니다. 이는 스크립트에서 완성된 비디오까지 조립해주는 서비스이며, 필요할 때 원시 생성 모델(Kling, Veo, Seedance)에도 접근할 수 있게 해줍니다.\n\nInVideo는 비디오 모델이 아니라 제작 파이프라인 전체를 서비스로 제공합니다. 주제나 스크립트를 입력하면 v4 에이전트가 최대 30분 길이의 완성된 비디오를 반환합니다 — AI가 생성한 스크립트, 1,600만 개 이상의 자산 스톡 라이브러리 또는 새로 생성된 클립으로 조립된 장면, 50개 이상 언어(음성 복제 포함)의 AI 음성, 음악, 자막, 브랜드 키트 스타일링까지 포함됩니다. 브라우저에서 실행되므로 여러분의 GPU는 무관합니다.\n\nGPU와 양자화 방식을 조사하기보다 오늘 당장 비디오 제작을 시작하고 싶은 사람에게는 InVideo가 현실적인 선택입니다. 로컬 하드웨어 요구사항이 없고, ComfyUI 설치나 CUDA 문제 해결이 필요 없으며, 대부분의 사람이 실제로 필요로 하는 스크립트, 음성, 음악, 자막이 이미 포함된 하나의 워크플로우를 제공합니다. 기반 생성 모델을 직접 제어하는 것보다 완성된 비디오 자체를 더 중시하는 창작자에게 특히 적합합니다 — 무료 티어가 존재하므로 비용을 들이기 전에 이것이 맞는지 확인할 수 있습니다.\n\n이 비교에서 눈에 띄는 세 가지가 있습니다:\n\n- **모델의 혼란을 대신 흡수합니다.** 모든 유료 플랜은 Seedance 2.5, Veo 3.1, Kling 3를 포함해 200개 이상의 모델에 대한 접근을 포함합니다. 어떤 모델이 소송을 당하거나 서비스가 중단되어도 InVideo가 이를 교체해주므로 여러분의 워크플로우는 계속됩니다.\n- **자동화가 나중에 덧붙은 것이 아니라 기본으로 내장되어 있습니다.** 공식 MCP 서버가 있어 프롬프트 → 스크립트 → 영상 → 자막에 이르는 전체 파이프라인을 프로그래밍 방식으로 실행할 수 있습니다 — 그렇지 않으면 ComfyUI를 중심으로 직접 구축해야 할 종류의 하네스입니다.\n- **무료 티어는 실질적인 시험판입니다.** 워터마크가 있고 분량 제한이 있지만, 비용을 지불하기 전에 결과물 품질을 판단하기에는 충분합니다.\n\n**구체적인 속도 — 그리고 솔직한 함정:** 원시 생성 한 건은 보통 몇 분이면 끝날 만큼 빠릅니다. 하지만 InVideo 자체 FAQ에 따르면 단편 영상의 완전한 엔드투엔드 제작에는 몇 분이 아니라 2~5일이 걸립니다 — 생성 자체가 아니라 여러 생성 결과 중에서 선택하고 조립하는 과정이 시간이 걸리는 지점이기 때문입니다. 1~3분 길이의 완성된 영상에 대해 "현실적인 최저 기준은 2일"이라는 수치를, 편집되지 않은 20초 분량 영상의 원시 생성에 16~36분이 걸리는 로컬 문과 공정하게 비교할 기준점으로 삼으십시오. InVideo는 여러분의 설정 및 편집 시간을 자체 제작 시간으로 맞바꾸는 것이지, 시간 자체를 없애주는 것이 아닙니다.\n\n현재 요금제는 월 $17(Plus 플랜, 연간 결제, 2026년 8월 확인 기준 — 실시간 수치는 [InVideo 요금제 페이지](https://invideo.io/pricing/)에서 확인하십시오)부터 시작합니다:',
        blockquote:
          '**로컬 설정 없이 AI 비디오를 만들고 싶으신가요?** 강력한 GPU가 없거나, 로컬 AI 비디오 도구를 설치하고 설정하는 데 시간을 쓰고 싶지 않다면 InVideo를 시도해볼 만합니다. [InVideo 무료 버전 사용해보기 →](https://invideo.io/pricing/)',
        columns: ['플랜', '가격', '월간 크레딧', '적합한 대상'],
        rows: [
          { '플랜': 'Free', '가격': '$0', '월간 크레딧': '제한적', '적합한 대상': '테스트용(워터마크 있음)' },
          { '플랜': 'Plus', '가격': '$17/월 ($200/년)', '월간 크레딧': '75', '적합한 대상': '일반 창작자 — 모든 AI 모델, 아바타 및 음성 클론 4개, iStock 자산 100개, 무제한 워터마크 없는 내보내기' },
          { '플랜': 'Max', '가격': '$85/월 ($1,000/년)', '월간 크레딧': '390', '적합한 대상': '대량 제작 채널, 아바타 16개' },
          { '플랜': 'Generative', '가격': '$170/월 ($2,000/년)', '월간 크레딧': '800+', '적합한 대상': '단편 영화 / 제작 물량' },
          { '플랜': 'Elite', '가격': '$900/월 ($10,800/년)', '월간 크레딧': '4,250+', '적합한 대상': '에피소드 및 상업적 규모' },
        ],
        note:
          '위 가격은 모두 2026년 8월 기준 연간 결제 요율입니다 — 월별 결제는 더 비쌉니다(InVideo 자체 FAQ는 Plus $20, Max $100, Generative $200, Elite $1,000의 월별 요금을 명시합니다). 이 수치를 그대로 신뢰하기보다 InVideo의 실시간 요금제 페이지를 확인하십시오. 플랜과 가격은 변경될 수 있습니다.',
      },
      decisionGuide: {
        id: 'decision-guide',
        title: '클라우드냐 로컬이냐: 어느 문이 나에게 맞을까?',
        content: '간단히 정리하면, 흔한 상황별로 다음과 같습니다:',
        columns: ['나의 상황', '추천'],
        rows: [
          { '나의 상황': 'GPU가 없거나 VRAM 12GB 미만', '추천': 'InVideo(클라우드) — 이 등급 이하에서는 로컬 모델이 잘 동작하지 않습니다' },
          { '나의 상황': '원시 클립이 아니라 음성이 포함된 완성된 비디오를 원함', '추천': 'InVideo(클라우드) — 로컬 모델은 완전한 제작물을 조립해주지 않습니다' },
          { '나의 상황': '마감이 급하고 설정에 시간을 쓸 여유가 전혀 없음', '추천': 'InVideo(클라우드)' },
          { '나의 상황': 'VRAM 12GB 이상 GPU 보유, 설정에 익숙함, 프라이버시와 $0 한계비용을 원함', '추천': '로컬: LTX-Video(12GB) 또는 Wan 2.2(고품질을 위해 24GB)' },
          { '나의 상황': 'EU, 영국, 대한민국 거주', '추천': '로컬 = Wan 2.2 또는 LTX-2만 가능(HunyuanVideo는 라이선스상 제외됨)' },
          { '나의 상황': '직접 구축하지 않고 규모 있는 자동화/API가 필요함', '추천': 'InVideo(클라우드, MCP 서버)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: '누가 InVideo를 선택해야 할까?',
        content:
          '**다음에 해당한다면 InVideo가 더 나은 선택일 가능성이 높습니다:**\n\n- 강력한 GPU를 보유하고 있지 않음\n- 즉시 비디오 제작을 시작하고 싶음\n- ComfyUI, CUDA, 모델, Python 환경을 설치하고 설정하고 싶지 않음\n- 여러 로컬 도구를 조합하기보다 통합된 워크플로우를 원함\n- 스크립트, 음성, 음악, 자막, 비디오 생성을 하나의 워크플로우에서 처리하고 싶음\n- 기반 모델을 실험하는 것보다 완성된 비디오 자체를 더 중시함\n\n**다음에 해당한다면 로컬 AI가 더 나은 선택일 가능성이 높습니다:**\n\n- 이미 적합한 GPU 하드웨어를 보유하고 있음\n- 최대한의 통제권을 원함\n- 모델과 워크플로우를 실험하고 싶음\n- 강한 기술적 역량이 있음\n- 생성 과정을 로컬에서 통제된 상태로 유지하는 것을 우선시함\n- 매우 많은 양을 생성할 예정이며 한계 생성 비용을 최적화하고 싶음',
        blockquote:
          '**어느 쪽이 맞는지 확실하지 않으신가요?** 하드웨어와 기술적 설정을 피하고 싶다면 가장 쉬운 실험은 InVideo를 직접 사용해보고 그 워크플로우가 자신에게 맞는지 확인하는 것입니다. [InVideo 무료로 사용해보기 →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: '실제로 보기',
        items: [
          '[4가지 오픈소스 AI 비디오 모델 비교 — 정말 무료인 것은 어느 것인가?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — LTX 2.3, Wan 2.2, HunyuanVideo 1.5, MiniMax H3의 결과물을 나란히 비교하며 라이선스 세부 조항까지 다룹니다.',
          '[InVideo Agent One 리뷰](https://www.youtube.com/watch?v=uUHO9byu0c0) — 프롬프트에서 완성된 비디오까지의 전체 워크플로우를 다룹니다.',
          '[Wan 2.2 전체 로컬 데모](https://www.youtube.com/watch?v=fs62ML_ZgEs) — 소비자용 하드웨어에서의 솔직한 렌더링 시간을 다룹니다(출시 주간, 2025년 7월).',
          '[저VRAM Wan 2.2 튜토리얼](https://www.youtube.com/watch?v=tQu0DjtOEyg) — 6GB 노트북에서 14B 모델을 실행하는 방법을 다룹니다(2025년).',
        ],
        note:
          '이 영상들은 서드파티 콘텐츠이며 PromptQuorum이나 InVideo가 제작한 것이 아닙니다. 참고용으로만 포함되었으며, 해당 채널이나 다른 콘텐츠에 대한 보증을 의미하지 않습니다.',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'VRAM 8GB로 AI 비디오 생성을 실행할 수 있나요?',
            a: '간신히 가능합니다. Wan 2.2의 TI2V-5B 변형은 6~8GB 양자화 환경에서 실행되지만 품질과 클립 길이가 제한됩니다. 진지한 모델을 사용하려면 12GB가 실질적인 최저 기준입니다 — 그 이하라면 InVideo 같은 클라우드 도구가 현실적인 답입니다.',
          },
          {
            q: 'Wan 2.2는 정말 상업적으로 무료인가요?',
            a: '그렇습니다. Apache 2.0 라이선스로 상업적 사용에 제한이 없으며, 매출 상한도 지역 제한도 없고, 결과물에 대한 권리도 주장하지 않습니다. 세부 조항이 전혀 없는 유일한 최상위급 로컬 모델입니다.',
          },
          {
            q: 'HunyuanVideo를 EU나 영국에서 사용할 수 있나요?',
            a: '아니요. Tencent Hunyuan 커뮤니티 라이선스는 EU, 영국, 대한민국에는 명시적으로 적용되지 않으며, 이는 모델 자체와 그 결과물 모두에 해당됩니다. 대신 Wan 2.2나 LTX-2를 사용하십시오.',
          },
          {
            q: 'InVideo를 사용하려면 GPU가 필요한가요?',
            a: '아니요. InVideo는 완전히 브라우저에서 실행되며 모든 생성 작업은 자체 인프라에서 이루어집니다. 5년 된 노트북으로도 충분합니다.',
          },
          {
            q: '로컬 모델로 음성이 포함된 완성된 유튜브 비디오를 만들 수 있나요?',
            a: '단독으로는 불가능합니다. 로컬 모델은 5~20초 길이의 원시 클립을 생성합니다(LTX-2는 동기화된 오디오를 포함하고, 나머지는 무음입니다). 스크립트, 음성, 음악, 자막, 편집은 각각 별도의 도구가 필요하며 직접 파이프라인으로 조립해야 합니다.',
          },
          {
            q: '"무료" 로컬 AI 비디오의 진짜 함정은 무엇인가요?',
            a: '하드웨어 비용(성능 좋은 GPU), 설정 시간(ComfyUI와 그 의존성), 그리고 원시 출력 클립 주변에 필요한 DIY 파이프라인입니다. 모델 가중치 자체는 생성당 정말로 $0이며 앞으로도 그렇습니다.',
          },
          {
            q: 'Wan 2.7이나 더 새로운 Wan 모델이 있나요?',
            a: '없습니다. 공식 Wan 릴리스는 2.2에서 멈춰 있습니다. "Wan 2.7 가중치"를 제공한다는 사이트는 모두 사기이며, 공식 GitHub나 Hugging Face 저장소에서만 다운로드해야 합니다.',
          },
          {
            q: '완전 초보자입니다. 어디서 시작해야 할까요?',
            a: 'InVideo의 무료 티어로 시작하십시오 — 몇 분 안에 완성된 내레이션 비디오를 얻을 수 있으며, AI 비디오가 자신의 목표에 애초에 부합하는지 판단할 수 있습니다. 이후에 성능 좋은 GPU를 구매해 완전한 통제권과 프라이버시를 원한다면 로컬 문은 언제든 열려 있습니다.',
          },
          {
            q: 'Mac과 Windows에서 이 로컬 모델을 실행하는 것은 무엇이 다른가요?',
            a: 'ComfyUI는 PyTorch의 MPS 백엔드를 통해 Apple Silicon(M1~M4)에서도 실행되지만, 동급 NVIDIA GPU 대비 약 3~5배 느린 생성 속도를 각오해야 합니다 — 사용은 가능하지만 속도 면에서 경쟁력은 없습니다. 더 실질적인 문제는 소프트웨어 지원입니다. 이 모델들이 의존하는 CUDA 전용 최적화(flash-attention, GGUF/FP8 양자화 도구)는 Mac에서는 성숙도가 훨씬 떨어지므로, 여러 커뮤니티 워크플로우와 설치 가이드가 Windows나 Linux + NVIDIA 카드를 전제로 하고 있어 조정이 필요하거나 문서대로 아예 동작하지 않을 수 있습니다. 한 가지 장점은, Apple Silicon의 통합 메모리 덕분에 동일한 VRAM 용량의 개별 GPU보다 더 큰 모델을 메모리에 담을 수 있다는 점입니다. 속도는 더 느리더라도 말입니다. 로컬 비디오 생성을 위해 하드웨어를 구입하는 것이라면 Windows나 Linux에 NVIDIA를 조합하는 것이 잘 지원되는 경로이며, 이미 보유한 Mac은 실험용으로는 괜찮지만 진지한 처리량을 위한 권장 대상은 아닙니다.',
          },
          {
            q: '여러 로컬 비디오 클립에 걸쳐 같은 캐릭터를 일관되게 유지할 수 있나요?',
            a: '가능하지만 추가 작업이 필요합니다 — 세 모델 모두 별도의 생성 간에 이를 기본적으로 보장하지 않습니다. 실제로 통하는 두 가지 방법이 있습니다. 동일한 참조 이미지를 이미지-투-비디오 모드에 입력하거나(세 모델 모두 I2V를 지원합니다), 캐릭터에 대해 소형 LoRA를 학습시키는 것입니다. Wan 2.2와 LTX-2 모두 이를 위한 문서화된 LoRA 워크플로우를 제공합니다 — LTX-2의 버전은 IC-LoRA(인컨텍스트 LoRA)라고 불리며 다중 캐릭터 일관성을 명시적으로 지원합니다. 커뮤니티의 의견은 한 가지 점에서 일치합니다: 학습된 LoRA가 프롬프트나 참조 이미지만 사용하는 것보다 훨씬 더 안정적인 결과를 냅니다. InVideo의 브랜드 키트와 AI 아바타 기능은 동일한 근본 문제를 다르게 해결합니다 — 한 번 설정하고 재사용하는 고정된 아바타와 음성 프로필로, 별도의 학습이 필요 없습니다.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: '결정 전에 먼저 시도해보기',
        content:
          '클라우드 워크플로우를 평가하기 위해 로컬 GPU 환경을 구축하거나 유료 구독을 결제할 필요는 없습니다. 하드웨어를 구매하거나 ComfyUI에 주말을 쏟기 전에, 먼저 반대 방향으로 5분을 써보는 것이 좋습니다:\n\n1. InVideo의 무료 버전을 사용해보십시오.\n2. 짧은 비디오 하나를 만들어보십시오.\n3. 결과물 품질과 워크플로우가 어떻게 느껴졌는지 평가하십시오.\n4. 그 경험을 로컬 설치에 드는 노력과 비교해보십시오.\n\n이렇게 하면 이 비교가 단순히 읽는 것에서 그치지 않고, 이 글의 나머지를 읽는 것보다 짧은 시간 안에 직접 테스트해볼 수 있는 것으로 바뀝니다.',
        blockquote:
          '[InVideo 무료 버전 사용해보기 →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          '12GB 이상의 GPU를 이미 보유했거나 구매할 계획이 있고, 직접 도구를 구축하는 것을 즐기며, 편의성보다 프라이버시와 무제한 $0 생성을 더 중시한다면 로컬을 선택하십시오. Wan 2.2가 가장 안전한 토대입니다 — 최고 품질, Apache 2.0, 세부 조항 없음 — 속도와 사운드에 특화된 LTX-2도 함께 고려하십시오.\n\n하드웨어가 없거나, 설정을 원하지 않거나, 원시 클립이 아닌 완성된 비디오가 필요하다면 클라우드를 선택하십시오. 단순히 AI로 비디오를 만들고 싶은 대부분의 사람에게는 클라우드 경로가 더 쉬운 출발점입니다. 로컬 생성에 필요한 하드웨어와 기술적 관심이 이미 없다면, InVideo는 프롬프트 하나로 그 복잡함의 대부분을 없애줍니다. 모든 모델과 자산이 번들로 제공되고 자동화까지 포함되어 있으며, 테스트는 $0부터, 워터마크 제거는 월 $17(연간 결제)부터 시작합니다. 자신의 워크플로우에 맞는지 알아보는 가장 간단한 방법은 무료 버전을 먼저 시도해보는 것입니다.\n\n두 문 모두 AI 비디오로 이어집니다. 애초에 질문은 어느 기술이 더 나은가가 아니라, 어느 워크플로우가 여러분의 컴퓨터, 인내심, 목표에 맞는가였습니다.',
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
          '[VBench-2.0 리더보드](https://github.com/Vchitect/VBench) — 품질 및 물리적 사실성 수치에 사용된 독립 벤치마크.',
          '[InVideo 요금제](https://invideo.io/pricing/) — 공식 플랜 및 가격 세부정보.',
          '[InVideo MCP 서버](https://invideo.io/ai/mcp) — 공식 자동화 문서.',
          '[MiniMax H3 GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — 공식 저장소.',
          '[MiniMax H3 Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 공식 모델 가중치.',
          '[InVideo: AI 단편 영화 제작에 걸리는 시간은?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — InVideo 자체의 엔드투엔드 제작 시간 수치(2~5일).',
          '[ComfyUI 시스템 요구사항](https://docs.comfy.org/installation/system_requirements) — Mac/Apple Silicon MPS 지원에 관한 공식 문서.',
          '[LTX 블로그: LTX-2에서 IC-LoRA 사용법](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — 공식 캐릭터 일관성(IC-LoRA) 가이드.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 AI 이미지 생성 vs. 클라우드](/ko/power-local-llm/local-ai-image-generation-vs-cloud) — 동일한 구조로 비디오 대신 이미지를 다루는 자매 글입니다.',
          '[로컬 모델용 VRAM 계산기](/ko/local-llms/vram-calculator-local-llm) — 모델과 양자화 방식별 정확한 VRAM 요구사항.',
          '[필요한 VRAM은 얼마인가?](/ko/local-llms/how-much-vram-local-llm) — 7B부터 70B까지 모델 크기별 도표.',
          '[2026년 로컬 AI를 위한 최고의 GPU](/ko/local-llms/best-gpus-for-local-llms) — 예산 등급별 하드웨어 선택.',
          '[로컬 AI를 위한 최고의 예산형 GPU](/ko/local-llms/best-budget-gpus-local-llm) — 입문용 하드웨어 옵션.',
          '[GPU vs CPU vs Apple Silicon](/ko/local-llms/gpu-vs-cpu-vs-apple-silicon) — 로컬 추론을 위한 플랫폼 비교.',
          '[시스템 프롬프트 vs. 사용자 프롬프트](/ko/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — 비디오 프롬프트 작성에도 적용되는 프롬프트 구조화 기초.',
          '[로컬 모델을 위한 프롬프트 엔지니어링](/ko/local-llms/prompt-engineering-for-local-models) — 구조화된 프롬프트 작성 기법.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-08-21',
    next_refresh_due: '2027-02-21',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'InVideo vs Vídeo IA Local: Uma Opção Custa $0 Mais o Seu Fim de Semana — a Outra Custa $17',
    seoTitle: 'IA de Vídeo na Nuvem vs Local 2026: InVideo vs Wan 2.2 e LTX-2',
    intro:
      'Existem duas portas de entrada para o vídeo com IA em 2026. A primeira porta é local: modelos de vídeo abertos e gratuitos rodando na sua própria GPU — gerações ilimitadas, totalmente privadas, sem assinatura, mas você monta todo o fluxo de trabalho sozinho. A segunda porta é a nuvem: o InVideo, onde um único prompt gera um vídeo narrado e finalizado — roteiro, imagens de banco, locução, música e legendas incluídos, direto do seu navegador. Nenhuma das portas é "melhor". Este guia traz as letras miúdas de licenciamento que a maioria das comparações ignora, os requisitos reais de hardware e uma ferramenta de decisão que mapeia sua situação para uma recomendação.',
    metaDescription:
      'Modelos de vídeo IA locais (Wan 2.2, LTX-2, HunyuanVideo) são gratuitos se sua GPU aguentar. O InVideo na nuvem faz tudo por $17/mês. Comparação honesta: VRAM, licenças, letras miúdas.',
    twitterDescription:
      'IA de vídeo na nuvem vs local em 2026: o InVideo reúne tudo por $17/mês. Wan 2.2, LTX-2 e HunyuanVideo rodam de graça na sua própria GPU — se ela for grande o suficiente. Comparação honesta.',
    audience:
      'Criadores e desenvolvedores decidindo entre a geração de vídeo local gratuita na própria GPU e o pipeline tudo-em-um na nuvem do InVideo — cobre requisitos de hardware, letras miúdas de licenciamento e trade-offs de fluxo de trabalho.',
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
      '**Para a maioria das pessoas com uma GPU de 12GB+, o Wan 2.2 é o melhor modelo de vídeo IA local em 2026** — licenciado sob Apache 2.0, sem limite de receita ou restrição territorial, e com a maior pontuação de qualidade verificada publicamente (VBench ~84,7%) entre os modelos abertos, totalmente gratuito. **O InVideo é a escolha melhor se você não tem essa GPU, ou quer um vídeo narrado e finalizado em vez de um clipe bruto** — seu plano Plus, a partir de $17/mês (cobrado anualmente), reúne mais de 200 modelos (incluindo Kling 3, Veo 3.1 e Seedance 2.5) em um único pipeline pelo navegador, com roteiro, locução, música e legendas incluídos. **O HunyuanVideo 1.5 tem o visual local mais cinematográfico, mas sua licença exclui completamente a União Europeia, o Reino Unido e a Coreia do Sul** — evite-o se você estiver nessas regiões.',
    quickAnswerTop: {
      pt: {
        question: 'Devo gerar vídeo com IA localmente ou usar o pipeline na nuvem do InVideo?',
        answer:
          'Gere localmente se você tem uma GPU de 12GB+, quer gerações ilimitadas por $0 e valoriza privacidade — o Wan 2.2 (Apache 2.0, sem restrições) é o ponto de partida mais seguro. Use o InVideo se você não tem o hardware adequado, não quer gerenciar a configuração, ou precisa de um vídeo completo e finalizado (roteiro, locução, música, legendas) em vez de um clipe bruto — seu plano Plus começa em $17/mês (cobrado anualmente).',
        bullets: [
          'Menos de 12 GB de VRAM → o InVideo é a escolha prática; modelos locais são inviáveis abaixo desse patamar para qualidade séria.',
          '12 GB de VRAM → LTX-Video 0.9.5, a única opção local séria nesse patamar.',
          '16–24 GB+ de VRAM → Wan 2.2 (melhor qualidade, Apache 2.0, zero restrições) ou LTX-2 (velocidade + áudio sincronizado).',
          'Na União Europeia, Reino Unido ou Coreia do Sul → a licença do HunyuanVideo 1.5 exclui você; use o Wan 2.2 ou o LTX-2 em vez disso.',
          'Precisa de um vídeo narrado e finalizado, não de um clipe bruto → modelos locais só geram clipes silenciosos (exceto o LTX) de 5–20 segundos; o InVideo cuida do pipeline de produção completo, a partir de $17/mês (cobrado anualmente).',
        ],
        updatedDate: '2026-08-21',
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
      { label: 'A Porta da Nuvem: O Que o InVideo Reúne', anchor: '#invideo-bundle' },
      { label: 'Nuvem ou Local: Qual É a Sua Porta?', anchor: '#decision-guide' },
      { label: 'Quem Deveria Escolher o InVideo?', anchor: '#who-should-choose' },
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
          '**O Wan 2.2 é o único modelo de vídeo local de ponta com zero restrições de licença.** Apache 2.0, uso comercial irrestrito, sem limite de receita, sem exclusão territorial — e a maior pontuação de qualidade VBench verificada entre modelos open source (~84,7%).',
          '**O InVideo reúne mais de 200 modelos — incluindo Kling 3, Veo 3.1 e Seedance 2.5 — em um único pipeline pelo navegador**, a partir de $17/mês (plano Plus, cobrado anualmente), com roteiro, locução, música e legendas geridos automaticamente.',
          '**A licença do HunyuanVideo 1.5 exclui explicitamente a União Europeia, o Reino Unido e a Coreia do Sul** — tanto para o modelo quanto para seus resultados. Leitores nessas regiões devem usar o Wan 2.2 ou o LTX-2.',
          '**O LTX-2 é o mais rápido do trio local e o único com áudio sincronizado embutido**, gratuito comercialmente para empresas com receita anual abaixo de $10 milhões.',
          '**12GB de VRAM é o piso realista para geração de vídeo local séria.** Abaixo disso, o InVideo se torna a opção mais prática.',
          '**Modelos locais geram clipes brutos e silenciosos de 5 a 20 segundos, não vídeos finalizados.** Roteiro, locução, música, legendas e edição são ferramentas separadas que você mesmo monta — o InVideo faz tudo isso em uma única passagem.',
          '**Não existe "Wan 2.7".** Páginas de download que o oferecem são golpes de SEO — os lançamentos oficiais do Wan param no 2.2.',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: 'Por Que 2026 É um Momento Estranho para Vídeo IA',
        content:
          'O mercado de vídeo proprietário tem sido caótico. A OpenAI encerrou o aplicativo de consumo Sora em março de 2026, menos de seis meses após o lançamento, depois que os downloads caíram cerca de 66% em relação ao pico (a API continua ativa separadamente). O Seedance 2.0 da ByteDance enfrentou processos de Hollywood e teve o lançamento global pausado no mesmo mês, após cartas de cessar-e-desistir da Disney, Paramount e Warner Bros. — permanece acessível na China, mas carrega risco jurídico para uso comercial internacional. O modelo HappyHorse da Alibaba liderou os rankings de qualidade em abril de 2026 — e nunca foi aberto ao público.\n\nEsse caos é exatamente o que torna as duas portas atraentes. Modelos locais abertos tornam você independente do drama dos fornecedores. E o InVideo absorve o drama para você: sua assinatura reúne acesso a mais de 200 modelos — incluindo Kling 3, Veo 3.1 e Seedance 2.5 — para que, quando um modelo desaparecer ou for processado, seu fluxo de trabalho nem perceba.',
      },
      localModels: {
        id: 'local-models',
        title: 'A Porta Local: Três Modelos Gratuitos na Sua Própria GPU',
        content:
          'Três sistemas de pesos abertos dominam a geração de vídeo local hoje, medidos por downloads, atividade da comunidade e resultados de benchmark. Todos os três rodam pelo ComfyUI, uma interface baseada em nós instalada na sua própria máquina — não uma ferramenta de chat como o Ollama. São modelos de difusão, não LLMs.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Wan 2.2 é o melhor modelo de vídeo local de uso geral em 2026 — Apache 2.0, maior qualidade, sem restrições — enquanto o LTX-2 vence em velocidade e áudio sincronizado, e o HunyuanVideo 1.5 oferece o visual mais cinematográfico, mas exclui por licença os usuários da UE/Reino Unido/Coreia do Sul.' },
          { type: 'plain-terms', text: 'Se você quer só uma resposta: consiga uma GPU de 12GB+ e rode o Wan 2.2. Tem a melhor qualidade, a licença mais simples e nenhuma letra miúda.' },
        ],
        columns: ['Modelo', 'Licença', 'VRAM', 'Saída', 'Diferencial'],
        rows: [
          { 'Modelo': 'Wan 2.2 (Alibaba)', 'Licença': 'Apache 2.0 — irrestrita', 'VRAM': '6–8GB (5B) / 15–25GB (14B)', 'Saída': '480p/720p, clipes de ~5s', 'Diferencial': 'Maior qualidade VBench verificada (~84,7%)' },
          { 'Modelo': 'LTX-2 (Lightricks)', 'Licença': 'LTX Community License — gratuita abaixo de $10M de receita', 'VRAM': '18–20GB quantizado, 32GB+ full', 'Saída': '480p–1080p, 5–20s, com áudio', 'Diferencial': 'Único modelo com áudio+vídeo sincronizados em uma única passagem' },
          { 'Modelo': 'HunyuanVideo 1.5 (Tencent)', 'Licença': 'Tencent Community License — exclui UE/Reino Unido/Coreia do Sul', 'VRAM': '14GB mínimo, 24GB confortável', 'Saída': '480p/720p, até 10s', 'Diferencial': 'Favorito da comunidade pela iluminação cinematográfica; mais leve em VRAM' },
        ],
        note:
          '⚠️ Alerta de golpe: não existe "Wan 2.7". Páginas de download que afirmam oferecer "pesos abertos do Wan 2.7" são golpes de SEO. Os lançamentos oficiais do Wan param no 2.2 — baixe apenas dos repositórios oficiais no GitHub ou Hugging Face indicados abaixo.',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2 (Alibaba) — o rei da qualidade, verdadeiramente gratuito',
        content:
          'O Wan 2.2 é o modelo de vídeo aberto mais amplamente implantado: somente seu repositório I2V-A14B registrou aproximadamente 4,24 milhões de downloads no Hugging Face em um único mês, com centenas de derivados da comunidade construídos sobre ele. Ele vem em três variantes — T2V-A14B e I2V-A14B (mistura de especialistas, 27B de parâmetros totais / 14B ativos), além de um TI2V-5B compacto que lida com texto-para-vídeo e imagem-para-vídeo com apenas 6–8GB de VRAM. O patamar de 14B precisa de 15GB (GGUF Q3) a 25GB (FP8); o comando oficial não quantizado pede 80GB. Sua licença é Apache 2.0 — genuinamente gratuita, uso comercial irrestrito, sem limites de receita, sem exclusão territorial.\n\n**Velocidade, na prática:** um único clipe de 5 segundos leva aproximadamente 4–9 minutos em uma RTX 4090 (um número relatado de forma independente — o Wan 2.2 não gera clipes mais longos nativamente em uma única passagem). Para montar uma sequência de 20 segundos, você geraria 4 clipes separados de 5 segundos e os costuraria — algo como 16–36 minutos de geração bruta, mais a edição manual para unir tudo com fluidez. Essa faixa é uma extrapolação a partir do número por clipe, não um benchmark medido diretamente para 20 segundos.',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2 (Lightricks) — velocidade mais som sincronizado',
        content:
          'O LTX-2 é o único modelo aberto deste trio que gera áudio e vídeo sincronizados em uma única passagem — passos, ambiente e efeitos chegam junto com a imagem. Também é o mais rápido dos três e o mais tolerante em relação ao hardware. A arquitetura é um transformer de difusão de 22B; o LTX-2.3 (março de 2026) continua totalmente suportado ao lado do lançamento atual, o LTX-2.5. A licença é a LTX Community License — gratuita para uso comercial se a receita total da sua empresa for inferior a $10 milhões por ano, com licença comercial paga exigida acima desse limite. (Alguns textos de terceiros a chamam incorretamente de Apache 2.0 — a [página oficial de licença](https://ltx.io/model/license) é a única fonte confiável.) As necessidades de hardware ficam em 18–20GB de VRAM quantizado, 32GB+ em precisão completa; em placas de 12GB, o LTX-Video 0.9.5 mais antigo continua sendo a escolha prática.\n\n**Velocidade, na prática:** o LTX-2 é qualitativamente o mais rápido do trio, com pré-visualizações quase em tempo real em placas de consumo de ponta — mas não existe até o momento um número de minutos por clipe verificado de forma independente em uma RTX 4090, então não vamos inventar um. O único número concreto disponível vem do próprio benchmark da Lightricks em "superchips Nvidia" de nível datacenter (não uma GPU de consumo): um clipe de 10 segundos em cerca de 6,8 segundos. Trate isso como um teto do que a arquitetura consegue em hardware sério, não como o que a sua máquina em casa vai ver.',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5 (Tencent) — o visual cinematográfico, com uma pegadinha jurídica',
        content:
          'O modelo de 8,3B da Tencent, lançado em novembro de 2025, é um favorito da comunidade pela iluminação e textura cinematográficas, e o mais leve dos três em VRAM: 14GB mínimo com offloading, 24GB confortável, a cerca de 75 segundos por clipe de 480p em uma RTX 4090. Ele gera nativamente em 480p/720p, até 1080p via super-resolução embutida, clipes de até 10 segundos.\n\n**Velocidade, na prática:** a ~75 segundos por clipe de 480p de 5 segundos, isso é aproximadamente 15 segundos de renderização por segundo de vídeo. Seu comprimento máximo nativo de clipe é 10 segundos, então uma sequência de 20 segundos exige duas gerações no comprimento máximo — extrapolando a taxa por segundo, seriam aproximadamente 5 minutos de geração bruta para 20 segundos de material, antes da costura. Isso é uma extrapolação a partir do número de 5 segundos disponível na fonte, não um benchmark medido diretamente para 10 ou 20 segundos.',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Aviso de licença — leia antes de baixar. O HunyuanVideo 1.5 usa a Tencent Hunyuan Community License, não a Apache 2.0. A licença não se aplica na União Europeia, no Reino Unido ou na Coreia do Sul — usuários nessas regiões não estão autorizados a usar o modelo ou seus resultados. Também limita o uso a 100 milhões de usuários ativos mensais e proíbe treinar modelos concorrentes com seus resultados. Se você está na UE, Reino Unido ou Coreia do Sul, evite este modelo: o Wan 2.2 cobre o mesmo patamar de qualidade sem nenhuma restrição.',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: 'Um Para Ficar de Olho: MiniMax H3',
        content:
          'Lançado em 3 de agosto de 2026, o MiniMax H3 é um modelo omni-modal de 33,1B com áudio estéreo nativo, suporte ao ComfyUI desde o primeiro dia, e versões quantizadas que rodam em uma RTX 3060. Duas ressalvas antes de tratá-lo como uma quarta opção: o lançamento local tem teto de 768p (o pipeline completo em 2K permanece hospedado apenas na nuvem), e sua Community License reportedamente carrega suas próprias restrições geográficas e um limite de receita de $20 milhões — confira a ficha oficial do modelo antes de se comprometer. Os primeiros sinais são fortes, mas três semanas de existência e pronto para produção são coisas diferentes.',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: 'A Barreira do Hardware',
        content: [
          'A geração de vídeo local é gratuita do jeito que um filhote de cachorro é gratuito: os pesos do modelo não custam nada, mas a GPU é o verdadeiro preço de entrada. Evite a geração local por completo se sua GPU tem menos de 12GB de VRAM e você não planeja fazer upgrade — nenhum dos três modelos acima roda com qualidade utilizável abaixo desse patamar, e uma plataforma na nuvem vai te dar um resultado melhor mais rápido.',
          'Não tem certeza do que isso significa para a sua máquina? Estes guias detalham tudo: [Calculadora de VRAM](/pt/local-llms/vram-calculator-local-llm) para requisitos exatos por modelo, [Quanto de VRAM Você Precisa?](/pt/local-llms/how-much-vram-local-llm) para gráficos entre tamanhos de modelo, [Melhores GPUs para IA Local](/pt/local-llms/best-gpus-for-local-llms) e [Melhores GPUs de Orçamento](/pt/local-llms/best-budget-gpus-local-llm) para escolhas de hardware, e [GPU vs CPU vs Apple Silicon](/pt/local-llms/gpu-vs-cpu-vs-apple-silicon) para comparações de plataforma. Uma ressalva honesta: esses guias usam a fórmula de VRAM para LLMs (parâmetros × bits ÷ 8). Modelos de difusão de vídeo também escalam a VRAM com resolução e duração do clipe, então trate os números deles como um piso, não um teto, para cargas de trabalho de vídeo.',
        ],
        columns: ['Sua GPU', 'O que você consegue rodar'],
        rows: [
          { 'Sua GPU': '6–8GB VRAM', 'O que você consegue rodar': 'Wan 2.2 TI2V-5B (quantizado) — utilizável, qualidade de entrada' },
          { 'Sua GPU': '12GB VRAM', 'O que você consegue rodar': 'LTX-Video 0.9.5 — a única opção séria nesse patamar' },
          { 'Sua GPU': '16GB VRAM', 'O que você consegue rodar': 'HunyuanVideo 1.5 (se a licença permitir), Wan 2.2 14B em GGUF Q3' },
          { 'Sua GPU': '24GB+ VRAM', 'O que você consegue rodar': 'Tudo: Wan 2.2 14B em alta qualidade, LTX-2 quantizado' },
        ],
        note:
          'Custo aproximado de hardware em agosto de 2026: uma RTX 3060 12GB usada custa cerca de $170–220, um conjunto de RTX 3090 usadas cerca de $900–1.100. Os preços no Brasil podem variar bastante devido a impostos de importação — verifique o preço atual antes de comprar em vez de confiar nesses números depois de alguns meses.',
      },
      diyReality: {
        id: 'diy-reality',
        title: 'O Que Rodar Geração de Vídeo Local Realmente Envolve',
        content:
          'Com modelos locais, você não está instalando uma ferramenta de vídeo — está montando um pipeline.\n\n**A configuração da geração.** O ComfyUI é baseado em nós: você constrói, ou importa e depura, um grafo de fluxo de trabalho com carregadores, samplers e decodificadores. Espere incompatibilidades de versão do CUDA, fixações de versão do PyTorch e o ocasional erro de instalação do `flash_attn` antes que seu primeiro frame seja renderizado.\n\n**O prompting.** Modelos de vídeo precisam de prompts estruturados — tipo de plano, movimento de câmera, iluminação, ação do sujeito — não de frases soltas. Não existe um assistente de prompt embutido nem uma camada de system prompt; você mesmo escreve toda a estrutura. Nossos guias sobre [system prompts vs. user prompts](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) e [engenharia de prompt para modelos locais](/pt/local-llms/prompt-engineering-for-local-models) cobrem fundamentos que se aplicam diretamente ao prompting de vídeo.\n\n**Tudo ao redor do clipe.** Modelos locais geram clipes brutos e silenciosos (exceto o LTX) de 5 a 20 segundos. Roteiro, locução, música, imagens de banco, legendas e edição são ferramentas separadas que você escolhe, instala e conecta sozinho.',
        promptExamples: [
          { label: 'Fraco (frase solta)', text: 'Um cachorro na praia' },
          { label: 'Estruturado (o que os modelos de vídeo precisam)', text: 'Golden retriever correndo por uma orla molhada durante a hora dourada, plano baixo de acompanhamento pela lateral, profundidade de campo rasa, contraluz quente, câmera lenta suave, 24fps cinematográfico' },
        ],
        note:
          'Sujeito e ação, comportamento de câmera, iluminação, estilo — quatro ingredientes em uma frase fazem a diferença entre um caça-níqueis e uma câmera. Se essa pilha DIY parece empolgante, a porta local é sua. Se pareceu exaustiva, continue lendo.',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: 'A Porta da Nuvem: O Que o InVideo Reúne',
        sponsoredSlot: true,
        content:
          'O InVideo é um exemplo da porta da nuvem — não o único, e vale a pena entender como ele difere dos outros antes de assumir que "nuvem" significa uma coisa só. O Runway se integra diretamente a editores profissionais (Premiere Pro, Final Cut, DaVinci Resolve), voltado para fluxos híbridos de IA mais editor em vez de um vídeo finalizado e montado. O Dream Machine, da Luma AI, é especializado em saída nativa HDR de 16 bits para pipelines de composição de VFX (After Effects, Nuke) — um público totalmente diferente. O Pika permanece leve: geração de clipes brutos rápida sem roteiro embutido, locução ou montagem de imagens de banco, então você ainda precisa de ferramentas separadas para tudo ao redor do clipe — o mesmo problema de pipeline DIY de rodar um modelo local, só que sem a exigência de GPU. O que diferencia o InVideo desses três é que ele não é primariamente uma ferramenta de geração bruta: é um montador de roteiro-para-vídeo-finalizado que também te dá acesso a modelos de geração bruta (Kling, Veo, Seedance) quando você precisa deles.\n\nO InVideo não é um modelo de vídeo — é o pipeline de produção inteiro como serviço. Você digita um tema ou cola um roteiro; seu agente v4 devolve um vídeo finalizado de até 30 minutos: roteiro gerado por IA, cenas montadas a partir de uma biblioteca de mais de 16 milhões de ativos de banco ou clipes recém-gerados, locução por IA em mais de 50 idiomas (incluindo clonagem de voz), música, legendas e estilização com kit de marca. Ele roda no navegador — sua GPU é irrelevante.\n\nPara quem quer começar a fazer vídeos hoje em vez de pesquisar GPUs e formatos de quantização, o InVideo é a escolha prática: nenhum requisito de hardware local, nenhuma instalação do ComfyUI ou solução de problemas de CUDA, e um único fluxo de trabalho que já inclui o roteiro, a locução, a música e as legendas que a maioria das pessoas realmente precisa. É especialmente adequado para criadores que se importam mais com o vídeo finalizado do que em controlar o modelo de geração subjacente — e como existe um plano gratuito, você pode descobrir se ele se encaixa antes de gastar qualquer coisa.\n\nTrês coisas se destacam nesta comparação:\n\n- **O caos dos modelos, absorvido.** Todos os planos pagos incluem acesso a mais de 200 modelos — Seedance 2.5, Veo 3.1 e Kling 3 entre eles. Quando um modelo é processado ou desativado, o InVideo o substitui; seu fluxo de trabalho continua.\n- **A automação vem embutida, não parafusada depois.** Existe um servidor MCP oficial, então todo o pipeline prompt → roteiro → material → legendas pode ser acionado programaticamente — o tipo de arcabouço que você teria que montar sozinho ao redor do ComfyUI.\n- **O plano gratuito é um test-drive de verdade.** Com marca d\'água e limite de minutos, mas suficiente para avaliar a qualidade da saída antes de pagar.\n\n**Velocidade, na prática — e a pegadinha honesta:** uma única geração bruta é rápida, tipicamente minutos. Mas o próprio FAQ do InVideo coloca a produção completa de ponta a ponta de um curta em 2 a 5 dias, não minutos — porque escolher e montar entre múltiplas opções geradas, não a geração em si, é o que consome tempo. Trate "2 dias como piso realista" para um filme finalizado de 1 a 3 minutos como o ponto de comparação justo contra os 16–36 minutos de geração bruta da porta local para 20 segundos de material bruto: o InVideo troca seu tempo de configuração e edição pelo próprio tempo de produção, ele não elimina tempo completamente.\n\nPlanos atuais, a partir de $17/mês (plano Plus, cobrado anualmente, verificado em agosto de 2026 — confira a [página de preços do InVideo](https://invideo.io/pricing/) para números atualizados):',
        blockquote:
          '**Quer criar vídeos com IA sem a configuração local?** Se você não tem uma GPU potente — ou simplesmente não quer passar horas instalando e configurando ferramentas de vídeo IA locais — vale a pena experimentar o InVideo. [Experimente a versão gratuita do InVideo →](https://invideo.io/pricing/)',
        columns: ['Plano', 'Preço', 'Créditos/mês', 'Melhor para'],
        rows: [
          { 'Plano': 'Free', 'Preço': '$0', 'Créditos/mês': 'limitado', 'Melhor para': 'Testar as águas (com marca d\'água)' },
          { 'Plano': 'Plus', 'Preço': '$17/mês ($200/ano)', 'Créditos/mês': '75', 'Melhor para': 'Criadores regulares — todos os modelos de IA, 4 avatares e clones de voz, 100 ativos do iStock, exportações ilimitadas sem marca d\'água' },
          { 'Plano': 'Max', 'Preço': '$85/mês ($1.000/ano)', 'Créditos/mês': '390', 'Melhor para': 'Canais de alto volume, 16 avatares' },
          { 'Plano': 'Generative', 'Preço': '$170/mês ($2.000/ano)', 'Créditos/mês': '800+', 'Melhor para': 'Volume de curta-metragem / produção' },
          { 'Plano': 'Elite', 'Preço': '$900/mês ($10.800/ano)', 'Créditos/mês': '4.250+', 'Melhor para': 'Escala episódica e comercial' },
        ],
        note:
          'Todos os preços acima são taxas de cobrança anual em agosto de 2026 — pagar mês a mês custa mais (o próprio FAQ do InVideo cita Plus $20, Max $100, Generative $200, Elite $1.000 por mês). Confira a página de preços ao vivo do InVideo antes de confiar em qualquer número aqui; planos e preços mudam.',
      },
      decisionGuide: {
        id: 'decision-guide',
        title: 'Nuvem ou Local: Qual É a Sua Porta?',
        content: 'A versão resumida, mapeada para situações comuns:',
        columns: ['Sua situação', 'Recomendação'],
        rows: [
          { 'Sua situação': 'Sem GPU, ou abaixo de 12GB de VRAM', 'Recomendação': 'InVideo (nuvem) — nenhum modelo local roda bem abaixo desse patamar' },
          { 'Sua situação': 'Quer um vídeo finalizado com locução, não clipes brutos', 'Recomendação': 'InVideo (nuvem) — modelos locais não montam uma produção completa' },
          { 'Sua situação': 'Guiado por prazo, zero tolerância a configuração', 'Recomendação': 'InVideo (nuvem)' },
          { 'Sua situação': 'GPU de 12GB+, confortável com configuração, quer privacidade e custo marginal de $0', 'Recomendação': 'Local: LTX-Video (12GB) ou Wan 2.2 (24GB para qualidade máxima)' },
          { 'Sua situação': 'Na União Europeia, Reino Unido ou Coreia do Sul', 'Recomendação': 'Local = apenas Wan 2.2 ou LTX-2 (a licença do HunyuanVideo exclui você)' },
          { 'Sua situação': 'Precisa de automação/API em escala sem construir do zero', 'Recomendação': 'InVideo (nuvem, servidor MCP)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: 'Quem Deveria Escolher o InVideo?',
        content:
          '**O InVideo é provavelmente a melhor escolha se você:**\n\n- Não tem uma GPU potente\n- Quer começar a criar vídeos imediatamente\n- Não quer instalar e configurar ComfyUI, CUDA, modelos ou ambientes Python\n- Quer um fluxo de trabalho integrado em vez de montar várias ferramentas locais\n- Precisa de roteiros, voz, música, legendas e geração de vídeo em um único fluxo de trabalho\n- Se importa mais com vídeos finalizados do que em experimentar com os modelos subjacentes\n\n**A IA local é provavelmente a melhor escolha se você:**\n\n- Já possui hardware de GPU adequado\n- Quer controle máximo\n- Quer experimentar com modelos e fluxos de trabalho\n- Tem fortes habilidades técnicas\n- Prioriza manter a geração sob controle local\n- Espera gerar volumes muito grandes e quer otimizar o custo marginal de geração',
        blockquote:
          '**Não tem certeza de qual caminho é o certo para você?** Se você quer evitar o hardware e a configuração técnica, o experimento mais simples é apenas testar o InVideo e ver se o fluxo de trabalho dele atende às suas necessidades. [Experimente o InVideo gratuitamente →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: 'Veja-os em Ação',
        items: [
          '[4 Modelos de Vídeo IA Open Source Comparados — Qual É Realmente Gratuito?](https://www.youtube.com/watch?v=NHdYVssM6Aw) — comparação lado a lado da saída do LTX 2.3, Wan 2.2, HunyuanVideo 1.5 e MiniMax H3, incluindo as letras miúdas de licenciamento.',
          '[Análise do InVideo Agent One](https://www.youtube.com/watch?v=uUHO9byu0c0) — o fluxo de trabalho completo de prompt até vídeo finalizado.',
          '[Demonstração Local Completa do Wan 2.2](https://www.youtube.com/watch?v=fs62ML_ZgEs) — tempos de renderização honestos em hardware de consumo (semana de lançamento, julho de 2025).',
          '[Tutorial Wan 2.2 com VRAM Baixa](https://www.youtube.com/watch?v=tQu0DjtOEyg) — rodando o modelo 14B em um notebook com 6GB (2025).',
        ],
        note:
          'Estes são vídeos de terceiros, não produzidos pela PromptQuorum ou pelo InVideo. Incluídos apenas para referência — nenhum endosso ao canal ou a outros conteúdos dele é implicado.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Posso rodar geração de vídeo IA com 8GB de VRAM?',
            a: 'Muito no limite. A variante TI2V-5B do Wan 2.2 roda com 6–8GB quantizado, com qualidade reduzida e clipes curtos. Para os modelos sérios, 12GB é o piso real — e abaixo disso, uma ferramenta na nuvem como o InVideo é a resposta prática.',
          },
          {
            q: 'O Wan 2.2 é realmente gratuito para uso comercial?',
            a: 'Sim. É Apache 2.0 — uso comercial irrestrito, sem limite de receita, sem exclusão territorial, nenhum direito reivindicado sobre seus resultados. É o único entre os principais modelos locais sem nenhuma letra miúda na licença.',
          },
          {
            q: 'Posso usar o HunyuanVideo na União Europeia ou no Reino Unido?',
            a: 'Não. A Tencent Hunyuan Community License afirma explicitamente que não se aplica na União Europeia, Reino Unido ou Coreia do Sul — isso cobre tanto o modelo em si quanto seus resultados. Use o Wan 2.2 ou o LTX-2 em vez disso.',
          },
          {
            q: 'Preciso de uma GPU para usar o InVideo?',
            a: 'Não. O InVideo roda inteiramente no navegador; toda a geração acontece na infraestrutura deles. Um notebook de cinco anos atrás funciona bem.',
          },
          {
            q: 'Modelos locais conseguem produzir um vídeo completo para YouTube com locução?',
            a: 'Não sozinhos. Modelos locais geram clipes brutos de 5 a 20 segundos (o LTX-2 inclui áudio sincronizado; os outros são silenciosos). Roteiro, locução, música, legendas e edição exigem cada um ferramentas separadas que você mesmo monta em um pipeline.',
          },
          {
            q: 'Qual é a pegadinha real do vídeo IA local "gratuito"?',
            a: 'O custo do hardware (uma GPU capaz), o tempo de configuração (ComfyUI e suas dependências), e o pipeline DIY necessário ao redor dos clipes de saída bruta. Os pesos do modelo em si genuinamente custam $0 por geração, para sempre.',
          },
          {
            q: 'Existe um Wan 2.7 ou um modelo Wan mais novo?',
            a: 'Não. Os lançamentos oficiais do Wan param no 2.2. Qualquer site oferecendo "pesos do Wan 2.7" é um golpe — baixe apenas dos repositórios oficiais no GitHub ou Hugging Face.',
          },
          {
            q: 'Sou totalmente iniciante. Por onde devo começar?',
            a: 'Pelo plano gratuito do InVideo — você terá um vídeo narrado e finalizado em minutos e poderá julgar se o vídeo IA atende aos seus objetivos. Se depois você comprar uma GPU capaz e quiser controle total e privacidade, a porta local continua aberta.',
          },
          {
            q: 'Qual a diferença de rodar esses modelos locais no Mac vs Windows?',
            a: 'O ComfyUI roda em Apple Silicon (M1–M4) via backend MPS do PyTorch, mas espere uma geração cerca de 3–5x mais lenta do que uma GPU NVIDIA equivalente — utilizável, não competitiva em velocidade. O problema prático maior é o suporte de software: otimizações específicas do CUDA nas quais esses modelos se apoiam (flash-attention, ferramentas de quantização GGUF/FP8) são bem menos maduras no Mac, então vários fluxos de trabalho e guias de instalação da comunidade assumem Windows ou Linux com uma placa NVIDIA e podem precisar de ajustes, ou simplesmente não vão rodar como documentado. Um lado positivo: a memória unificada do Apple Silicon pode permitir caber um modelo maior na memória do que uma GPU dedicada com VRAM equivalente permitiria, mesmo rodando mais devagar. Se você está comprando hardware especificamente para geração de vídeo local, Windows ou Linux mais NVIDIA é o caminho bem suportado; um Mac que você já tem serve para experimentar, não é o alvo recomendado para volume sério.',
          },
          {
            q: 'Consigo manter o mesmo personagem consistente entre vários clipes de vídeo local?',
            a: 'Sim, com trabalho extra — nenhum dos três modelos garante isso de fábrica entre gerações separadas. As duas abordagens que funcionam: alimentar a mesma imagem de referência no modo imagem-para-vídeo (todos os três suportam I2V), ou treinar uma pequena LoRA do seu personagem. O Wan 2.2 e o LTX-2 têm fluxos de trabalho de LoRA documentados para isso — a versão do LTX-2 é chamada de IC-LoRA (in-context LoRA) e suporta explicitamente consistência multi-personagem. A orientação da comunidade é consistente em um ponto: uma LoRA treinada dá resultados muito mais confiáveis do que apenas prompting ou uma imagem de referência. Os recursos de kit de marca e avatar de IA do InVideo resolvem o mesmo problema de fundo de outra forma — um avatar fixo e um perfil de voz que você configura uma vez e reutiliza, sem necessidade de treinamento.',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: 'Teste Antes de Decidir',
        content:
          'Você não precisa se comprometer com uma configuração de GPU local — nem com uma assinatura paga — só para avaliar o fluxo de trabalho na nuvem. Antes de comprar hardware ou passar um fim de semana no ComfyUI, vale a pena gastar cinco minutos no outro sentido primeiro:\n\n1. Experimente a versão gratuita do InVideo.\n2. Crie um vídeo curto.\n3. Avalie a qualidade da saída e como o fluxo de trabalho pareceu.\n4. Compare essa experiência com o esforço de configuração que uma instalação local exigiria.\n\nIsso transforma a comparação de algo que você lê sobre em algo que você mesmo pode testar em menos tempo do que leva para ler o resto deste artigo.',
        blockquote:
          '[Experimente a versão gratuita do InVideo →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: 'O Veredito',
        content:
          'Vá pelo caminho local se você tem (ou vai comprar) uma GPU de 12GB+, gosta de construir suas próprias ferramentas, e valoriza privacidade e gerações ilimitadas por $0 acima da conveniência. O Wan 2.2 é a base mais segura — qualidade máxima, Apache 2.0, sem letras miúdas — com o LTX-2 como o especialista em velocidade e som.\n\nVá pela nuvem se você não tem o hardware, não quer a configuração, ou precisa de vídeos finalizados em vez de clipes brutos. Para a maioria das pessoas que simplesmente quer fazer vídeos gerados por IA, o caminho da nuvem é o ponto de partida mais fácil: se você ainda não tem o hardware e o interesse técnico que a geração local exige, o InVideo remove a maior parte dessa complexidade em um único prompt, com todos os modelos e ativos reunidos e a automação incluída — a partir de $0 para testar e $17/mês (cobrado anualmente) para remover a marca d\'água. A forma mais simples de descobrir se ele se encaixa no seu fluxo de trabalho é experimentar a versão gratuita.\n\nAs duas portas levam ao vídeo com IA. A pergunta nunca foi qual tecnologia é melhor — é qual fluxo de trabalho se encaixa na sua máquina, na sua paciência e nos seus objetivos.',
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
          '[Ranking VBench-2.0](https://github.com/Vchitect/VBench) — benchmark independente usado para os números de qualidade e fidelidade física.',
          '[Preços do InVideo](https://invideo.io/pricing/) — detalhes oficiais de planos e preços.',
          '[Servidor MCP do InVideo](https://invideo.io/ai/mcp) — documentação oficial de automação.',
          '[MiniMax H3 no GitHub](https://github.com/MiniMax-AI/MiniMax-H3) — repositório oficial.',
          '[MiniMax H3 no Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3) — pesos oficiais do modelo.',
          '[InVideo: Quanto Tempo Leva Para Fazer um Curta com IA?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/) — números da própria linha do tempo de produção de ponta a ponta do InVideo (2–5 dias).',
          '[Requisitos de sistema do ComfyUI](https://docs.comfy.org/installation/system_requirements) — documentação oficial de suporte a Mac/Apple Silicon MPS.',
          '[Blog da LTX: Como Usar IC-LoRA no LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2) — guia oficial de consistência de personagem (IC-LoRA).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[Geração de Imagem IA Local vs. Nuvem](/pt/power-local-llm/local-ai-image-generation-vs-cloud) — a peça complementar, mesma estrutura, para imagens em vez de vídeo.',
          '[Calculadora de VRAM para Modelos Locais](/pt/local-llms/vram-calculator-local-llm) — requisitos exatos de VRAM por modelo e quantização.',
          '[Quanto de VRAM Você Precisa?](/pt/local-llms/how-much-vram-local-llm) — gráficos entre tamanhos de modelo de 7B a 70B.',
          '[Melhores GPUs para IA Local em 2026](/pt/local-llms/best-gpus-for-local-llms) — escolhas de hardware por faixa de orçamento.',
          '[Melhores GPUs de Orçamento para IA Local](/pt/local-llms/best-budget-gpus-local-llm) — opções de hardware de entrada.',
          '[GPU vs CPU vs Apple Silicon](/pt/local-llms/gpu-vs-cpu-vs-apple-silicon) — comparação de plataformas para inferência local.',
          '[System Prompts vs. User Prompts](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — fundamentos de estruturação de prompts que se aplicam ao prompting de vídeo.',
          '[Engenharia de Prompt para Modelos Locais](/pt/local-llms/prompt-engineering-for-local-models) — técnicas de prompting estruturado.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-08-21',
    dateModified: '2026-08-21',
    next_refresh_due: '2027-02-21',
    theme: 'Image & Video Generation',
    heroImage: '/images/local-ai-video-generation-vs-cloud-hero-en.webp',
    title: 'InVideo 与本地 AI 视频对比：一个 0 美元加你的周末，另一个 17 美元',
    seoTitle: '云端 vs 本地 AI 视频 2026：InVideo 对比 Wan 2.2 与 LTX-2',
    intro:
      '2026 年,通往 AI 视频有两扇门。第一扇是本地:免费、开放的视频模型运行在你自己的 GPU 上——无限次生成、完全私密、无需订阅,但整个工作流程要你自己搭建。第二扇是云端:InVideo,输入一个提示词,输出的就是一段带旁白的完整视频——脚本、素材片段、配音、音乐和字幕全部包含在内,直接在浏览器里完成。没有哪扇门"更好"。本指南提供大多数对比文章都会跳过的许可证细则、真实的硬件要求,以及一个能把你的实际情况映射到具体建议的决策工具。',
    metaDescription:
      '本地 AI 视频模型(Wan 2.2、LTX-2、HunyuanVideo)如果你的 GPU 够用就是免费的。InVideo 的云端方案每月 17 美元包办一切。诚实对比:VRAM、许可证、细则条款。',
    twitterDescription:
      '2026 年云端 vs 本地 AI 视频对比:InVideo 每月 17 美元打包一切。Wan 2.2、LTX-2、HunyuanVideo 在自己的 GPU 上免费运行——前提是显卡够强。诚实对比。',
    audience:
      '面向在自己 GPU 上免费本地生成视频、与 InVideo 一体化云端流水线之间做选择的创作者和开发者——涵盖硬件要求、许可证细则和工作流权衡。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地 AI 视频生成',
    targetKeywords: [
      '云端 vs 本地 AI 视频',
      'InVideo 对比本地 AI 视频',
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
      '**对大多数拥有 12GB 以上显存 GPU 的用户来说,Wan 2.2 是 2026 年最好的本地 AI 视频模型**——采用 Apache 2.0 许可,无营收上限、无地区限制,且拥有所有开放模型中公开验证的最高质量分数(VBench 约 84.7%),完全免费。**如果你没有这样的 GPU,或者想要一段成品旁白视频而不是一段原始片段,InVideo 是更好的选择**——其 Plus 套餐起价为每月 17 美元(按年计费),将 200 多个模型(包括 Kling 3、Veo 3.1 和 Seedance 2.5)打包进一个基于浏览器的流水线,脚本、配音、音乐和字幕全部包含在内。**HunyuanVideo 1.5 拥有最具电影感的本地画面效果,但其许可证完全排除了欧盟、英国和韩国**——如果你身处这些地区,请跳过这个模型。',
    quickAnswerTop: {
      zh: {
        question: '我应该本地生成 AI 视频,还是使用 InVideo 的云端流水线?',
        answer:
          '如果你拥有 12GB 以上显存的 GPU,想要无限次 0 美元生成,并且看重隐私,就本地生成——Wan 2.2(Apache 2.0,无限制)是最安全的起点。如果你没有合适的硬件、不想折腾配置,或者需要一段完整的成品视频(脚本、配音、音乐、字幕)而不是一段原始片段,就用 InVideo——其 Plus 套餐起价为每月 17 美元(按年计费)。',
        bullets: [
          '显存低于 12 GB → InVideo 是更实际的选择;这个档位以下本地模型无法产出可用质量。',
          '12 GB 显存 → LTX-Video 0.9.5,这个档位唯一靠谱的本地选择。',
          '16–24 GB 以上显存 → Wan 2.2(顶级质量、Apache 2.0、零限制)或 LTX-2(速度快 + 同步音频)。',
          '身处欧盟、英国或韩国 → HunyuanVideo 1.5 的许可证将你排除在外;改用 Wan 2.2 或 LTX-2。',
          '需要一段带旁白的成品视频,而不是原始片段 → 本地模型只能生成 5–20 秒的无声片段(LTX 除外);InVideo 处理完整制作流程,起价为每月 17 美元(按年计费)。',
        ],
        updatedDate: '2026-08-21',
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
      { label: '云端这扇门:InVideo 打包了什么', anchor: '#invideo-bundle' },
      { label: '云端还是本地:哪扇门属于你?', anchor: '#decision-guide' },
      { label: '谁应该选择 InVideo?', anchor: '#who-should-choose' },
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
          '**Wan 2.2 是唯一零许可限制的顶级本地视频模型。** Apache 2.0 许可,商业用途不受限,无营收上限,无地区排除——同时拥有已验证开源模型中最高的 VBench 质量分数(约 84.7%)。',
          '**InVideo 将 200 多个模型——包括 Kling 3、Veo 3.1 和 Seedance 2.5——打包进一个基于浏览器的流水线**,起价为每月 17 美元(Plus 套餐,按年计费),脚本、配音、音乐和字幕全部自动处理。',
          '**HunyuanVideo 1.5 的许可证明确排除欧盟、英国和韩国**——模型本身和其输出内容均受限。这些地区的读者应改用 Wan 2.2 或 LTX-2。',
          '**LTX-2 是三者中速度最快、唯一内置同步音频的模型**,年营收低于 1000 万美元的公司可免费商用。',
          '**12GB 显存是认真进行本地视频生成的现实底线。** 低于这个数字,InVideo 是更实际的选择。',
          '**本地模型生成的是 5–20 秒的原始无声片段,而不是成品视频。** 脚本、配音、音乐、字幕和剪辑都是需要你自己组装的独立工具——InVideo 一次性完成所有这些工作。',
          '**不存在"Wan 2.7"。** 提供该版本下载的页面都是 SEO 骗局——Wan 官方发布到 2.2 为止。',
        ],
      },
      marketContext: {
        id: 'market-context',
        title: '为什么 2026 年是 AI 视频领域的一个奇怪时刻',
        content:
          '专有视频市场一直处于混乱状态。OpenAI 在 2026 年 3 月关闭了 Sora 消费者应用,距离上线不到六个月,原因是下载量较峰值下滑了约 66%(API 仍独立在线)。字节跳动的 Seedance 2.0 同月陷入好莱坞诉讼并暂停全球推广,起因是迪士尼、派拉蒙和华纳兄弟发出的停止侵权函——该模型在中国仍可使用,但国际商业用途面临法律风险。阿里巴巴的 HappyHorse 模型在 2026 年 4 月登顶质量排行榜——却从未向公众开放。\n\n这种混乱正是两扇门都吸引人的原因。开放的本地模型让你不受供应商风波的影响。而 InVideo 替你承担了这种混乱:它的订阅打包了 200 多个模型的访问权限——包括 Kling 3、Veo 3.1 和 Seedance 2.5——这样当某个模型消失或被起诉时,你的工作流程不会受到影响。',
      },
      localModels: {
        id: 'local-models',
        title: '本地这扇门:你自己 GPU 上的三个免费模型',
        content:
          '目前有三个开放权重系统主导着本地视频生成领域,以下载量、社区活跃度和基准测试结果衡量。三者都通过 ComfyUI 运行,这是一个安装在你自己机器上的基于节点的界面——不是像 Ollama 那样的聊天式工具。这些是扩散模型,不是大语言模型。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wan 2.2 是 2026 年综合表现最好的本地视频模型——Apache 2.0、质量最高、无限制——而 LTX-2 在速度和同步音频上胜出,HunyuanVideo 1.5 画面最具电影感,但许可证将欧盟/英国/韩国用户排除在外。' },
          { type: 'plain-terms', text: '如果你只想要一个答案:准备一块 12GB 以上显存的 GPU,运行 Wan 2.2。它质量最好、许可证最简单、没有任何细则条款。' },
        ],
        columns: ['模型', '许可证', '显存', '输出', '突出特点'],
        rows: [
          { '模型': 'Wan 2.2(阿里巴巴)', '许可证': 'Apache 2.0——无限制', '显存': '6–8GB(5B)/ 15–25GB(14B)', '输出': '480p/720p,约 5 秒片段', '突出特点': '已验证的最高 VBench 质量分数(约 84.7%)' },
          { '模型': 'LTX-2(Lightricks)', '许可证': 'LTX 社区许可证——年营收低于 1000 万美元可免费使用', '显存': '量化版 18–20GB,完整精度 32GB 以上', '输出': '480p–1080p,5–20 秒,带音频', '突出特点': '唯一能在单次生成中同步输出音视频的模型' },
          { '模型': 'HunyuanVideo 1.5(腾讯)', '许可证': '腾讯社区许可证——排除欧盟/英国/韩国', '显存': '最低 14GB,24GB 更舒适', '输出': '480p/720p,最长 10 秒', '突出特点': '社区偏爱的电影感光影效果;显存占用最轻' },
        ],
        note:
          '⚠️ 骗局提醒:不存在"Wan 2.7"。声称提供"Wan 2.7 开放权重"下载的页面都是 SEO 骗局。Wan 官方发布到 2.2 为止——只从下方链接的官方 GitHub 或 Hugging Face 仓库下载。',
      },
      wan22: {
        id: 'wan-2-2',
        title: 'Wan 2.2(阿里巴巴)——质量之王,真正免费',
        content:
          'Wan 2.2 是部署最广泛的开放视频模型:仅其 I2V-A14B 仓库单月就记录了约 424 万次 Hugging Face 下载量,还衍生出数百个社区变体。它提供三个版本——T2V-A14B 和 I2V-A14B(混合专家架构,总参数 27B / 激活参数 14B),以及一个紧凑的 TI2V-5B,支持文本转视频和图像转视频,最低只需 6–8GB 显存。14B 档位需要 15GB(GGUF Q3)到 25GB(FP8);官方非量化命令要求 80GB。它的许可证是 Apache 2.0——真正免费,商业用途不受限,无营收门槛,无地区排除。\n\n**具体速度:** 在 RTX 4090 上,单个 5 秒片段大约需要 4–9 分钟(这是一个独立报告的数据——Wan 2.2 原生不能一次输出更长的片段)。要制作一段 20 秒的序列,你需要生成 4 段独立的 5 秒片段再拼接——大约需要 16–36 分钟的原始生成时间,再加上手动剪辑以让它们平滑衔接。这个区间是从单片段数据推算得出的,不是直接测量的 20 秒基准测试结果。',
        affiliateLinks: [
          { url: 'https://github.com/Wan-Video/Wan2.2', productName: 'Wan 2.2 on GitHub', productCategory: 'video-model', label: 'Wan 2.2 on GitHub' },
          { url: 'https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B', productName: 'Wan 2.2 on Hugging Face', productCategory: 'video-model', label: 'Wan 2.2 on Hugging Face' },
        ],
      },
      ltx2: {
        id: 'ltx-2',
        title: 'LTX-2(Lightricks)——速度加同步声音',
        content:
          'LTX-2 是这三者中唯一能在单次生成中同步输出音视频的开放模型——脚步声、环境音和特效都随画面一起生成。它也是三者中最快、对硬件最宽容的。其架构是一个 22B 扩散 Transformer;LTX-2.3(2026 年 3 月发布)与当前的 LTX-2.5 版本并行获得完整支持。许可证是 LTX 社区许可证——如果你公司的总营收低于每年 1000 万美元,可免费商用,超过该门槛需要付费商业许可证。(部分第三方文章错误地称其为 Apache 2.0——[官方许可证页面](https://ltx.io/model/license)才是唯一可靠的来源。)硬件需求为量化版 18–20GB 显存,完整精度 32GB 以上;在 12GB 显卡上,更老的 LTX-Video 0.9.5 仍是实际可行的选择。\n\n**具体速度:** LTX-2 在定性层面是三者中最快的,在高端消费级显卡上能实现接近实时的预览——但截至本文撰写时,并不存在经独立验证的 RTX 4090 每片段耗时分钟数,因此我们不会编造一个。目前唯一确切的数据来自 Lightricks 自己在数据中心级"Nvidia superchips"(而非消费级 GPU)上的基准测试:一个 10 秒片段大约耗时 6.8 秒。请将其视为这套架构在专业级硬件上能达到的上限,而非你家用设备实际会看到的速度。',
        affiliateLinks: [
          { url: 'https://github.com/Lightricks/LTX-2', productName: 'LTX-2 on GitHub', productCategory: 'video-model', label: 'LTX-2 on GitHub' },
          { url: 'https://huggingface.co/Lightricks/LTX-2', productName: 'LTX-2 on Hugging Face', productCategory: 'video-model', label: 'LTX-2 on Hugging Face' },
        ],
      },
      hunyuanvideo: {
        id: 'hunyuanvideo',
        title: 'HunyuanVideo 1.5(腾讯)——电影感画面,但有法律隐患',
        content:
          '腾讯的这个 8.3B 模型于 2025 年 11 月发布,以电影感的光影和质感受到社区青睐,也是三者中显存占用最轻的:通过卸载最低需要 14GB,24GB 更舒适,在 RTX 4090 上生成一个 480p 片段约需 75 秒。它原生生成 480p/720p,通过内置超分辨率可达 1080p,片段最长 10 秒。\n\n**具体速度:** 以每个 5 秒 480p 片段约 75 秒计算,大约相当于每秒视频需要 15 秒渲染时间。它原生最大片段长度为 10 秒,所以一段 20 秒的序列需要两次最大长度的生成——按每秒速率推算,大约需要 5 分钟的原始生成时间才能得到 20 秒的画面,还不算拼接。这是从已有的 5 秒数据推算出的结果,不是直接测量的 10 秒或 20 秒基准测试。',
        affiliateLinks: [
          { url: 'https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on GitHub', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on GitHub' },
          { url: 'https://huggingface.co/tencent/HunyuanVideo-1.5', productName: 'HunyuanVideo 1.5 on Hugging Face', productCategory: 'video-model', label: 'HunyuanVideo 1.5 on Hugging Face' },
        ],
        callouts: [
          {
            type: 'warning',
            text: '许可证警告——下载前请先阅读。HunyuanVideo 1.5 使用的是腾讯混元社区许可证,不是 Apache 2.0。该许可证不适用于欧盟、英国或韩国——这些地区的用户无权使用该模型或其输出内容。它还将使用规模上限设定为月活跃用户 1 亿,并禁止使用其输出内容训练竞争模型。如果你身处欧盟、英国或韩国,请跳过这个模型:Wan 2.2 能提供同等质量档位,且零限制。',
          },
        ],
      },
      oneToWatch: {
        id: 'one-to-watch',
        title: '值得关注:MiniMax H3',
        content:
          'MiniMax H3 于 2026 年 8 月 3 日发布,是一个 33.1B 全模态模型,原生支持立体声音频,首日就获得 ComfyUI 支持,还提供可在 RTX 3060 上运行的量化版本。在把它当作第四选择之前有两点需要注意:本地版本上限为 768p(完整 2K 流水线仍仅限托管使用),而且据报道其社区许可证附带自己的地区限制和 2000 万美元营收门槛——在使用前请查看官方模型卡。早期迹象良好,但发布仅三周和真正可用于生产环境是两回事。',
        affiliateLinks: [
          { url: 'https://github.com/MiniMax-AI/MiniMax-H3', productName: 'MiniMax H3 on GitHub', productCategory: 'video-model', label: 'MiniMax H3 on GitHub' },
          { url: 'https://huggingface.co/MiniMaxAI/MiniMax-H3', productName: 'MiniMax H3 on Hugging Face', productCategory: 'video-model', label: 'MiniMax H3 on Hugging Face' },
        ],
      },
      hardwareGate: {
        id: 'hardware-gate',
        title: '硬件门槛',
        content: [
          '本地视频生成的"免费"就像小狗是"免费"的一样:模型权重不花钱,但 GPU 才是真正的入场费。如果你的 GPU 显存低于 12GB 且不打算升级,就完全跳过本地生成——上述三个模型没有一个能在这个档位以下达到可用质量,云端平台会更快给你更好的输出。',
          '不确定这些数字对你的机器意味着什么?这些指南能帮你理清:[显存计算器](/zh/local-llms/vram-calculator-local-llm) 提供每个模型的确切要求,[你需要多少显存?](/zh/local-llms/how-much-vram-local-llm) 提供跨模型规模的图表,[本地 AI 最佳 GPU](/zh/local-llms/best-gpus-for-local-llms) 和 [最佳预算 GPU](/zh/local-llms/best-budget-gpus-local-llm) 提供硬件选购建议,[GPU vs CPU vs Apple Silicon](/zh/local-llms/gpu-vs-cpu-vs-apple-silicon) 提供平台比较。一个诚实的提醒:那些指南使用的是大语言模型显存公式(参数量 × 位数 ÷ 8)。视频扩散模型的显存需求还会随分辨率和片段长度变化,所以对视频工作负载而言,把那些数字当作下限而非上限来看待。',
        ],
        columns: ['你的 GPU', '你能运行什么'],
        rows: [
          { '你的 GPU': '6–8GB 显存', '你能运行什么': 'Wan 2.2 TI2V-5B(量化版)——可用,入门质量' },
          { '你的 GPU': '12GB 显存', '你能运行什么': 'LTX-Video 0.9.5——这个档位唯一靠谱的选择' },
          { '你的 GPU': '16GB 显存', '你能运行什么': 'HunyuanVideo 1.5(许可证允许的情况下)、Wan 2.2 14B 的 GGUF Q3 版本' },
          { '你的 GPU': '24GB 以上显存', '你能运行什么': '全部选项:高质量的 Wan 2.2 14B、量化版 LTX-2' },
        ],
        note:
          '截至 2026 年 8 月的大致硬件成本:二手 RTX 3060 12GB 约 170–220 美元,二手 RTX 3090 组合约 900–1,100 美元。GPU 价格会波动——购买前请核实当前价格,不要在几个月后仍相信这些数字。',
      },
      diyReality: {
        id: 'diy-reality',
        title: '运行本地视频生成实际需要做什么',
        content:
          '使用本地模型,你安装的不是一个视频工具——而是在组装一条流水线。\n\n**生成环境搭建。** ComfyUI 是基于节点的:你需要搭建,或导入并调试,一张由加载器、采样器和解码器组成的工作流图。在渲染出第一帧之前,预计会遇到 CUDA 版本不匹配、PyTorch 版本锁定,以及偶尔出现的 `flash_attn` 安装错误。\n\n**提示词编写。** 视频模型需要结构化提示词——镜头类型、运镜方式、光照、主体动作——而不是一句话。没有内置的提示词助手,也没有系统提示层;完整结构要你自己写。我们关于[系统提示词与用户提示词](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)和[本地模型的提示词工程](/zh/local-llms/prompt-engineering-for-local-models)的指南涵盖的基础知识可以直接迁移到视频提示词编写上。\n\n**片段之外的一切。** 本地模型输出的是 5–20 秒的原始无声片段(LTX 除外)。脚本、配音、音乐、素材片段、字幕和剪辑,每一项都是你需要自己挑选、安装并串联起来的独立工具。',
        promptExamples: [
          { label: '薄弱(一句话)', text: 'A dog on a beach' },
          { label: '结构化(视频模型需要的)', text: 'Golden retriever sprinting along a wet shoreline at golden hour, low tracking shot following from the side, shallow depth of field, warm backlight, gentle slow motion, cinematic 24fps' },
        ],
        note:
          '主体与动作、运镜方式、光照、风格——一句话里包含这四个要素,决定了你是在开老虎机还是在操作摄影机。如果这套 DIY 组合听起来很有意思,本地这扇门就属于你。如果听起来很累人,请继续往下看。',
      },
      invideoBundle: {
        id: 'invideo-bundle',
        title: '云端这扇门:InVideo 打包了什么',
        sponsoredSlot: true,
        content:
          'InVideo 只是云端这扇门的一个例子——不是唯一的一个,在假设"云端"就代表某一种固定形式之前,值得先了解它与其他方案的区别。Runway 直接集成进专业剪辑软件(Premiere Pro、Final Cut、DaVinci Resolve),面向的是 AI 加剪辑师混合工作流,而不是一段成品的完整视频。Luma AI 的 Dream Machine 专攻原生 16 位 HDR 输出,面向视效合成流水线(After Effects、Nuke)——完全是另一批受众。Pika 保持轻量:快速生成原始片段,不内置脚本、配音或素材库组装,所以片段之外的一切你仍需要单独的工具——这与运行本地模型面临的 DIY 流水线问题相同,只是不需要 GPU。InVideo 与这三者的不同之处在于,它并非主要是一个原始生成工具:它是一个把脚本变成成品视频的组装器,同时在你需要时也提供原始生成模型(Kling、Veo、Seedance)的访问权限。\n\nInVideo 不是一个视频模型——它是把整条生产流水线作为服务提供给你。你输入一个主题或粘贴一段脚本;它的 v4 智能体会返回一段最长 30 分钟的成品视频:AI 生成的脚本、从超过 1600 万素材的素材库中挑选或全新生成的画面、50 多种语言的 AI 配音(包括声音克隆)、音乐、字幕和品牌套装样式。它在浏览器中运行——你的 GPU 无关紧要。\n\n对于想今天就开始制作视频、而不是研究 GPU 和量化格式的人来说,InVideo 是实际的选择:不需要本地硬件,不需要安装 ComfyUI 或排查 CUDA 问题,一套工作流就已经包含大多数人真正需要的脚本、配音、音乐和字幕。它尤其适合那些更在意成品视频、而不在意控制底层生成模型的创作者——由于存在免费套餐,你可以先弄清楚它是否适合你,再决定是否付费。\n\n就本文的对比而言,有三点值得关注:\n\n- **模型乱局,由 InVideo 承担。** 所有付费套餐都包含对 200 多个模型的访问权限——其中包括 Seedance 2.5、Veo 3.1 和 Kling 3。当某个模型被起诉或下线,InVideo 会替换它;你的工作流程照常继续。\n- **自动化是内置的,不是后加的。** 它提供官方 MCP 服务器,因此从提示词 → 脚本 → 素材 → 字幕的整条流水线都可以通过程序触发——这正是你原本需要围绕 ComfyUI 自己搭建的那种框架。\n- **免费套餐是真正的试驾。** 带水印且有分钟数限制,但足以在付费之前判断输出质量。\n\n**具体速度——以及诚实的隐患:** 单次原始生成很快,通常只需几分钟。但 InVideo 自己的 FAQ 指出,一部短片的完整端到端制作需要 2–5 天,而不是几分钟——因为真正耗时的是在多个生成选项中挑选和组装,而不是生成本身。将"2 天作为现实下限"用于一部 1–3 分钟的成品短片,作为与本地这扇门"20 秒未剪辑素材需要 16–36 分钟原始生成时间"的公平对比:InVideo 用它自己的制作时间换掉了你的搭建和剪辑时间,而不是彻底消除时间成本。\n\n当前套餐起价为每月 17 美元(Plus 套餐,按年计费,2026 年 8 月核实——具体数字请查看 [InVideo 的定价页面](https://invideo.io/pricing/)):',
        blockquote:
          '**想在没有本地搭建的情况下制作 AI 视频?** 如果你没有强大的 GPU——或者只是不想花几个小时安装和配置本地 AI 视频工具——InVideo 值得一试。[试用 InVideo 免费版 →](https://invideo.io/pricing/)',
        columns: ['套餐', '价格', '每月额度', '适合人群'],
        rows: [
          { '套餐': 'Free', '价格': '$0', '每月额度': '有限', '适合人群': '先试试水(带水印)' },
          { '套餐': 'Plus', '价格': '$17/月($200/年)', '每月额度': '75', '适合人群': '常规创作者——所有 AI 模型、4 个数字人及声音克隆、100 个 iStock 素材、无限次去水印导出' },
          { '套餐': 'Max', '价格': '$85/月($1,000/年)', '每月额度': '390', '适合人群': '高产量频道,16 个数字人' },
          { '套餐': 'Generative', '价格': '$170/月($2,000/年)', '每月额度': '800+', '适合人群': '短片/制作级产量' },
          { '套餐': 'Elite', '价格': '$900/月($10,800/年)', '每月额度': '4,250+', '适合人群': '系列剧和商业级规模' },
        ],
        note:
          '以上所有价格均为截至 2026 年 8 月的按年计费价——按月付费的成本更高(InVideo 自己的 FAQ 显示 Plus 为每月 20 美元、Max 为 100 美元、Generative 为 200 美元、Elite 为 1,000 美元)。在依赖此处任何数字之前,请查看 InVideo 的实时定价页面;套餐和价格会变动。',
      },
      decisionGuide: {
        id: 'decision-guide',
        title: '云端还是本地:哪扇门属于你?',
        content: '简版对照,映射到常见情况:',
        columns: ['你的情况', '建议'],
        rows: [
          { '你的情况': '没有 GPU,或显存低于 12GB', '建议': 'InVideo(云端)——这个档位以下没有本地模型能表现良好' },
          { '你的情况': '想要带配音的成品视频,不是原始片段', '建议': 'InVideo(云端)——本地模型无法组装完整的成品' },
          { '你的情况': '截止日期紧迫,零容忍搭建折腾', '建议': 'InVideo(云端)' },
          { '你的情况': '拥有 12GB 以上显存 GPU,愿意折腾搭建,看重隐私和 0 边际成本', '建议': '本地:LTX-Video(12GB)或 Wan 2.2(24GB 达到完整质量)' },
          { '你的情况': '身处欧盟、英国或韩国', '建议': '本地仅限 Wan 2.2 或 LTX-2(HunyuanVideo 的许可证将你排除在外)' },
          { '你的情况': '需要大规模自动化/API 而不想自己搭建', '建议': 'InVideo(云端,MCP 服务器)' },
        ],
      },
      whoShouldChoose: {
        id: 'who-should-choose',
        title: '谁应该选择 InVideo?',
        content:
          '**如果你符合以下情况,InVideo 可能是更好的选择:**\n\n- 没有强大的 GPU\n- 想立刻开始制作视频\n- 不想安装和配置 ComfyUI、CUDA、模型或 Python 环境\n- 想要一体化工作流,而不是拼凑多个本地工具\n- 需要在同一个工作流中完成脚本、配音、音乐、字幕和视频生成\n- 更在意成品视频,而不是折腾底层模型\n\n**如果你符合以下情况,本地 AI 可能是更好的选择:**\n\n- 已经拥有合适的 GPU 硬件\n- 想要最大程度的控制权\n- 想要试验模型和工作流\n- 具备较强的技术能力\n- 优先考虑让生成过程保持本地可控\n- 预计会有非常大的生成量,想优化边际生成成本',
        blockquote:
          '**不确定哪条路适合你?** 如果你想避开硬件和技术搭建,最简单的实验就是直接试用 InVideo,看看它的工作流是否适合你的需求。[免费试用 InVideo →](https://invideo.io/pricing/)',
      },
      videoRoundup: {
        id: 'video-roundup',
        title: '看它们实际运行',
        items: [
          '[4 款开源 AI 视频模型对比——哪一个真正免费?](https://www.youtube.com/watch?v=NHdYVssM6Aw)——LTX 2.3、Wan 2.2、HunyuanVideo 1.5 和 MiniMax H3 的并排输出对比,包含许可证细则。',
          '[InVideo Agent One 评测](https://www.youtube.com/watch?v=uUHO9byu0c0)——从提示词到成品视频的完整工作流。',
          '[Wan 2.2 完整本地演示](https://www.youtube.com/watch?v=fs62ML_ZgEs)——消费级硬件上的真实渲染时间(发布周,2025 年 7 月)。',
          '[低显存 Wan 2.2 教程](https://www.youtube.com/watch?v=tQu0DjtOEyg)——在 6GB 显存的笔记本电脑上运行 14B 模型(2025 年)。',
        ],
        note:
          '以上均为第三方视频,并非由 PromptQuorum 或 InVideo 制作。仅供参考——不代表对相关频道或其其他内容的认可。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我能在 8GB 显存上运行 AI 视频生成吗?',
            a: '勉强可以。Wan 2.2 的 TI2V-5B 版本可在 6–8GB 量化条件下运行,但质量降低、片段较短。对于正经的模型,12GB 才是真正的底线——低于这个数字,像 InVideo 这样的云端工具是更实际的答案。',
          },
          {
            q: 'Wan 2.2 真的可以免费商用吗?',
            a: '是的。它采用 Apache 2.0 许可——商业用途不受限,无营收上限,无地区排除,也不对你的输出内容主张任何权利。它是所有顶级本地模型中唯一没有许可证细则条款的。',
          },
          {
            q: '我能在欧盟或英国使用 HunyuanVideo 吗?',
            a: '不能。腾讯混元社区许可证明确规定不适用于欧盟、英国或韩国——这既包括模型本身,也包括其输出内容。请改用 Wan 2.2 或 LTX-2。',
          },
          {
            q: '使用 InVideo 需要 GPU 吗?',
            a: '不需要。InVideo 完全在浏览器中运行;所有生成过程都在他们的基础设施上完成。一台五年前的笔记本电脑就能正常使用。',
          },
          {
            q: '本地模型能生成一段带配音的完整 YouTube 视频吗?',
            a: '单靠它们本身不行。本地模型生成的是 5–20 秒的原始片段(LTX-2 包含同步音频;其他都是无声的)。脚本、配音、音乐、字幕和剪辑各自需要单独的工具,由你自己组装成一条流水线。',
          },
          {
            q: '"免费"的本地 AI 视频实际的代价是什么?',
            a: '硬件成本(一块够强的 GPU)、搭建时间(ComfyUI 及其各种依赖),以及围绕原始输出片段所需的 DIY 流水线。模型权重本身确实每次生成都是 0 美元,永远如此。',
          },
          {
            q: '有 Wan 2.7 或更新的 Wan 模型吗?',
            a: '没有。Wan 官方发布到 2.2 为止。任何提供"Wan 2.7 权重"的网站都是骗局——只从官方 GitHub 或 Hugging Face 仓库下载。',
          },
          {
            q: '我是完全的新手,应该从哪里开始?',
            a: 'InVideo 的免费套餐——几分钟内你就能拿到一段带旁白的成品视频,并判断 AI 视频是否真的对你有用。如果之后你买了一块够强的 GPU,想要完全的控制权和隐私,本地这扇门依然敞开。',
          },
          {
            q: '在 Mac 和 Windows 上运行这些本地模型有什么区别?',
            a: 'ComfyUI 可以通过 PyTorch 的 MPS 后端在 Apple Silicon(M1–M4)上运行,但生成速度大约比同等级 NVIDIA GPU 慢 3–5 倍——可用,但速度上不具竞争力。更实际的问题在于软件支持:这些模型依赖的 CUDA 专属优化(flash-attention、GGUF/FP8 量化工具)在 Mac 上远不够成熟,因此不少社区工作流和安装指南默认使用 Windows 或 Linux 加 NVIDIA 显卡,可能需要调整,或者干脆无法按文档运行。一个优势是:Apple Silicon 的统一内存能让你装下比同等显存的独立 GPU 更大的模型,尽管运行速度较慢。如果你是专门为本地视频生成购买硬件,Windows 或 Linux 加 NVIDIA 是支持完善的路线;如果你已经有一台 Mac,拿来做实验没问题,但不建议作为追求高产量的目标平台。',
          },
          {
            q: '我能在多个本地视频片段之间保持同一个角色一致吗?',
            a: '可以,但需要额外的功夫——这三个模型都不会在不同的独立生成之间自动保证这一点。两种有效的方法是:把同一张参考图片输入图像转视频模式(三者都支持 I2V),或者为你的角色训练一个小型 LoRA。Wan 2.2 和 LTX-2 都有针对这个用途的成熟 LoRA 工作流——LTX-2 的版本叫 IC-LoRA(上下文内 LoRA),明确支持多角色一致性。社区的共识很一致:训练好的 LoRA 比单纯依靠提示词或参考图片可靠得多。InVideo 的品牌套装和 AI 数字人功能用不同的方式解决了同一个底层问题——一个只需配置一次、可反复使用的固定数字人和声音档案,无需训练。',
          },
        ],
      },
      tryBeforeDecide: {
        id: 'try-before-you-decide',
        title: '决定前先试用',
        content:
          '你不需要为了评估云端工作流而先投入一套本地 GPU 配置——或一份付费订阅。在购买硬件或花一个周末折腾 ComfyUI 之前,值得先花五分钟反过来试一试:\n\n1. 试用 InVideo 的免费版本。\n2. 制作一段短视频。\n3. 评估输出质量以及工作流的使用体验。\n4. 将这次体验与本地安装所需的搭建成本做对比。\n\n这样一来,这个对比就从"读来的信息"变成了"你自己能测试的东西",而且花费的时间比读完本文剩余部分还要短。',
        blockquote:
          '[试用 InVideo 免费版 →](https://invideo.io/pricing/)',
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '如果你拥有(或打算购买)12GB 以上显存的 GPU,喜欢自己搭建工具,并且看重隐私和无限次 0 美元生成胜过便利性,那就选本地。Wan 2.2 是最安全的基础选项——顶级质量、Apache 2.0、没有细则条款——LTX-2 则是速度与音频方面的专才。\n\n如果你没有硬件、不想折腾搭建,或者需要成品视频而不是原始片段,那就选云端。对大多数只是想制作 AI 生成视频的人来说,云端路线是更轻松的起点:如果你本来就没有本地生成所需的硬件和技术兴趣,InVideo 用一个提示词就能替你消除大部分复杂性,所有模型和素材都已打包,还包含自动化功能——测试起价为 0 美元,去水印起价为每月 17 美元(按年计费)。判断它是否适合你工作流最简单的方法,就是先试用免费版本。\n\n两扇门都通向 AI 视频。问题从来不是哪种技术更好——而是哪种工作流适合你的设备、你的耐心和你的目标。',
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
          '[VBench-2.0 leaderboard](https://github.com/Vchitect/VBench)——独立基准测试,用于质量和物理真实性数据。',
          '[InVideo pricing](https://invideo.io/pricing/)——官方套餐及定价详情。',
          '[InVideo MCP server](https://invideo.io/ai/mcp)——官方自动化文档。',
          '[MiniMax H3 on GitHub](https://github.com/MiniMax-AI/MiniMax-H3)——官方仓库。',
          '[MiniMax H3 on Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3)——官方模型权重。',
          '[InVideo: How Long Does It Take to Make an AI Short Film?](https://invideo.io/faq/how-long-does-it-take-to-make-an-ai-short-film/)——InVideo 自己给出的端到端制作时间数据(2–5 天)。',
          '[ComfyUI system requirements](https://docs.comfy.org/installation/system_requirements)——官方 Mac/Apple Silicon MPS 支持文档。',
          '[LTX Blog: How to Use IC-LoRA in LTX-2](https://ltx.io/blog/how-to-use-ic-lora-in-ltx-2)——官方角色一致性(IC-LoRA)指南。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地 AI 图像生成 vs 云端](/zh/power-local-llm/local-ai-image-generation-vs-cloud)——姊妹篇,结构相同,主题是图像而非视频。',
          '[本地模型显存计算器](/zh/local-llms/vram-calculator-local-llm)——每个模型和量化方式的确切显存要求。',
          '[你需要多少显存?](/zh/local-llms/how-much-vram-local-llm)——涵盖 7B 到 70B 模型规模的图表。',
          '[2026 年本地 AI 最佳 GPU](/zh/local-llms/best-gpus-for-local-llms)——按预算档位推荐硬件。',
          '[本地 AI 最佳预算 GPU](/zh/local-llms/best-budget-gpus-local-llm)——入门级硬件选项。',
          '[GPU vs CPU vs Apple Silicon](/zh/local-llms/gpu-vs-cpu-vs-apple-silicon)——本地推理的平台对比。',
          '[系统提示词 vs 用户提示词](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)——可迁移到视频提示词编写的结构化提示词基础知识。',
          '[本地模型的提示词工程](/zh/local-llms/prompt-engineering-for-local-models)——结构化提示词技巧。',
        ],
      },
    },
  },
}
