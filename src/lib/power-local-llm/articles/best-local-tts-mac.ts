// Best Local TTS Engine for Mac: Piper, Kokoro, XTTS v2, and Bark on Apple Silicon
// Slug: best-local-tts-mac
// Companion to: piper-tts-review.ts, xtts-v2-review.ts, coqui-tts-review.ts, bark-tts-review.ts
// (per-engine deep dives), local-tts-voice-cloning-piper-coqui-xtts.ts (licensing),
// apple-silicon-local-llm-guide-2026.ts and mlx-vs-ollama-vs-llama-cpp-mac.ts (Apple Silicon/MLX facts)

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/best-local-tts-mac-hero-en.webp',
    title: 'Best Local TTS Engine for Mac (2026): What Actually Uses Apple Silicon',
    seoTitle: 'Best Local TTS for Mac 2026: Apple Silicon Guide',
    intro:
      'Most "best local TTS" roundups treat every Mac the same, but Apple Silicon changes which engine actually makes sense. [Piper](/power-local-llm/piper-tts-review) runs entirely on CPU and never touches the GPU at all — on an Apple Silicon Mac or an Intel one, it performs about the same. [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) can run through Apple\'s own [MLX](https://github.com/ml-explore/mlx) framework via the community project [mlx-audio](https://github.com/Blaizzy/mlx-audio), which is built specifically for Apple Silicon\'s Metal GPU. [XTTS v2](/power-local-llm/xtts-v2-review), by contrast, does not support Apple\'s Metal Performance Shaders (MPS) backend at all — a tracked [GitHub issue](https://github.com/coqui-ai/TTS/issues/3649) documents that MPS device use just hangs — so it runs CPU-only on any Mac. This guide compares what each engine actually does on Apple Silicon, notes where Intel Macs are limited to the CPU-only options, and tells you which one to install.',
    metaDescription:
      'Piper is CPU-only on every Mac. Kokoro can use Metal via MLX. XTTS v2\'s MPS support is a known broken GitHub issue. Here is the local TTS engine to actually install on Apple Silicon.',
    twitterDescription:
      'Best local TTS for Mac 2026: Piper never touches the GPU, Kokoro can run through Apple\'s MLX framework, and XTTS v2\'s Metal (MPS) support is a documented broken GitHub issue. Here is what to actually install on Apple Silicon vs. Intel.',
    audience:
      'Developers and hobbyists building voice apps, accessibility tools, or audiobook pipelines on Apple Silicon Macs who need to pick a local text-to-speech engine that actually uses the hardware.',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'best local TTS for Mac',
    targetKeywords: [
      'best local tts mac',
      'best text to speech apple silicon',
      'kokoro tts mac',
      'piper tts mac',
      'xtts v2 apple silicon',
      'local tts mlx metal',
      'text to speech m4 m5 mac',
      'local tts intel mac',
    ],
    current_models_mentioned: ['Piper', 'Kokoro-82M', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M-series', 'M4', 'M5', 'Intel Mac'],
    leadAnswerBlock:
      '**Kokoro-82M is the best local TTS engine for Apple Silicon Macs if you want GPU acceleration, since it can run through Apple\'s own [MLX](https://github.com/ml-explore/mlx) framework via the community project [mlx-audio](https://github.com/Blaizzy/mlx-audio); [Piper](/power-local-llm/piper-tts-review) is the best choice if you want the simplest, most portable install that behaves identically on Intel and Apple Silicon Macs alike, since it never uses the GPU on either.** [XTTS v2](/power-local-llm/xtts-v2-review) is the pick if you specifically need voice cloning, but its Metal (MPS) support is a documented broken [GitHub issue](https://github.com/coqui-ai/TTS/issues/3649) — expect CPU-only performance on any Mac. [Bark](/power-local-llm/bark-tts-review) has experimental MPS support behind an environment variable, with some operations still falling back to CPU.',
    quickAnswerTop: {
      question: 'What is the best local text-to-speech engine for Mac?',
      answer:
        'Use Kokoro-82M (via the community mlx-audio project) if you want a local TTS engine that runs through Apple Silicon\'s Metal GPU using Apple\'s own MLX framework — it is small (82 million parameters), Apache-2.0 licensed, and available in quantized variants for lower memory use. Use Piper if you want the simplest possible setup that works identically on any Mac, Apple Silicon or Intel, since it is CPU-only by design and was built to run in real time even on a Raspberry Pi. Use XTTS v2 only if you specifically need voice cloning from a short audio sample — but know that its Apple Silicon GPU (MPS) support is a documented, unresolved GitHub issue, so it runs on CPU alone on a Mac, and its Coqui Public Model License (CPML) is non-commercial. Avoid Bark unless you specifically want its non-speech sounds (laughter, sighs); its Apple Silicon GPU support is explicitly labeled experimental by its own maintainers, and its GitHub repository has had no commits since April 2024.',
        bullets: [
          'Kokoro-82M: 82M parameters, Apache-2.0, can run via Apple\'s MLX framework through the community mlx-audio project — the only engine here with a real Apple Silicon GPU path.',
          'Piper: CPU-only by design (ONNX Runtime), GPL-3.0-or-later, performs the same on Intel and Apple Silicon Macs since it never uses the GPU on either.',
          'XTTS v2: voice cloning from ~6 seconds of audio, but Apple Silicon MPS (Metal) support is a documented broken GitHub issue — CPU-only on Mac, non-commercial CPML license.',
          'Bark: experimental Apple Silicon MPS support via an environment variable, with some operations still falling back to CPU; MIT license but no commits since April 2024.',
          'Intel Macs are limited to the CPU-only paths (Piper, and XTTS v2/Bark in CPU mode) — the MLX-accelerated Kokoro path requires Apple Silicon.',
      ],
      updatedDate: '2026-09-11',
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Best Choice by Use Case', anchor: 'best-choice' },
      { label: 'Comparison: Apple Silicon Fitness', anchor: 'comparison' },
      { label: 'Which Engines Actually Use the GPU on a Mac?', anchor: 'gpu-acceleration' },
      { label: 'Install Kokoro with MLX Acceleration', anchor: 'install-walkthrough' },
      { label: 'Intel Mac Limitations', anchor: 'intel-macs' },
      { label: 'When Not to Use Any of These', anchor: 'limitations' },
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
            text: 'For local text-to-speech on Apple Silicon, Kokoro-82M is the only one of the four major local engines with a real Metal GPU path (via the community mlx-audio project on Apple\'s MLX framework); Piper is the simplest CPU-only option that behaves identically on Intel Macs; XTTS v2 offers voice cloning but its Apple Silicon MPS support is a documented broken GitHub issue; and Bark\'s MPS support is explicitly experimental.',
          },
          {
            type: 'plain-terms',
            text: 'Not every free text-to-speech program you can run on a Mac actually uses the Mac\'s graphics chip — some just run on the regular processor, which works fine but is slower than it could be. Kokoro is the one built to take advantage of Apple\'s own chip design through a project called MLX; the others either skip the GPU by design (Piper) or try to use it but run into unresolved problems (XTTS v2, Bark).',
          },
        ],
        items: [
          'Kokoro-82M: Apache-2.0, 82M parameters, runs via Apple\'s MLX framework through the community mlx-audio project — the real Apple Silicon acceleration path.',
          'Piper: GPL-3.0-or-later, CPU-only by design via ONNX Runtime — same performance profile on Intel and Apple Silicon Macs.',
          'XTTS v2: non-commercial CPML license, voice cloning from ~6 seconds of audio, but Metal (MPS) support is a tracked, unresolved GitHub issue — runs CPU-only on Mac.',
          'Bark: MIT license, experimental Apple Silicon MPS support behind an environment variable, no commits to its public repository since April 2024.',
          'Intel Macs cannot use the MLX-accelerated Kokoro path at all — MLX requires Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This guide compares the four local TTS engines PromptQuorum has independently reviewed (Piper, Kokoro, XTTS v2, Bark). Each has its own dedicated review linked throughout for install commands, licensing detail, and full limitations.',
          },
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: 'Which Local TTS Engine Should You Actually Install?',
        content: [
          '**The right engine depends on whether you need GPU acceleration, voice cloning, or the widest possible Mac compatibility — no single engine wins on all three.** Kokoro is the only engine here with a genuine Apple Silicon GPU path; Piper is the most portable; XTTS v2 is the only one that clones voices.',
        ],
        items: [
          '🏆 **Best overall for Apple Silicon:** [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) via [mlx-audio](https://github.com/Blaizzy/mlx-audio) — the only engine covered here with a real Metal GPU path, small enough (82M parameters) to run comfortably on any Apple Silicon Mac.',
          '**Best for simplicity and Intel compatibility:** [Piper](/power-local-llm/piper-tts-review) — CPU-only by design, so install and performance are identical whether you are on an M-series chip or an older Intel Mac.',
          '**Best if you need voice cloning:** [XTTS v2](/power-local-llm/xtts-v2-review) — clones a voice from ~6 seconds of reference audio, but runs CPU-only on any Mac and is licensed for non-commercial use only.',
          '**Best for expressive, non-speech audio:** [Bark](/power-local-llm/bark-tts-review) — laughter, sighs, and simple music from text, with experimental (partial) Apple Silicon GPU support, though its repository has been dormant since April 2024.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Which Engine?',
        content: [
          '**Match the engine to your Mac and your actual requirement, not to whichever one has the most GitHub stars.** GPU acceleration only matters if you are generating enough audio, often enough, for CPU-only synthesis to feel slow.',
        ],
        items: [
          '🧭 **Apple Silicon Mac, want the fastest local option:** Kokoro via mlx-audio — the only engine here written to use Metal through MLX.',
          '🧭 **Any Mac, including an older Intel model:** Piper — CPU-only by design, so there is nothing Apple-Silicon-specific to configure or troubleshoot.',
          '🧭 **Need to clone a specific voice from a short recording:** XTTS v2 — accept that it will run on CPU only on a Mac, and that its license is non-commercial.',
          '🧭 **Want laughter, sighs, or ambient sound, not just speech:** Bark — but budget extra install time for its experimental Apple Silicon path, and confirm current maintenance status first.',
          '❌ **Skip Bark if you need active maintenance or guaranteed performance** — its public repository has shown no commits since April 2024, independent of the Apple Silicon question.',
          '❌ **Skip XTTS v2 if you are building a commercial product** — its Coqui Public Model License (CPML) is non-commercial, and Coqui AI, the company that released it, shut down its paid services in December 2023.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'How Do Piper, Kokoro, XTTS v2, and Bark Compare on Apple Silicon Fitness?',
        content: [
          '**Kokoro is the only engine in this comparison with a genuine, purpose-built Apple Silicon GPU path; the rest are CPU-only by design or by unresolved bug.** The table below scores each engine on the four factors that actually decide Mac fitness: whether it uses Apple Silicon acceleration, how much memory it needs, how much friction the macOS install has, and voice quality.',
        ],
        columns: ['Engine', 'Apple Silicon accel', 'RAM footprint', 'macOS install', 'Voice quality'],
        rows: [
          {
            'Engine': '[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)',
            'Apple Silicon accel': 'Yes — Metal via MLX (mlx-audio)',
            'RAM footprint': 'Low (82M params, quantized variants exist)',
            'macOS install': 'pip install + mlx-audio, Apple Silicon only',
            'Voice quality': 'Natural, close to larger cloud models',
          },
          {
            'Engine': '[Piper](/power-local-llm/piper-tts-review)',
            'Apple Silicon accel': 'None by design — CPU-only ONNX Runtime',
            'RAM footprint': 'Very low (~50–100MB per voice)',
            'macOS install': '`pip install piper-tts`, no GPU setup',
            'Voice quality': 'Clear, some robotic prosody',
          },
          {
            'Engine': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Apple Silicon accel': 'None — MPS hangs (GH issue #3649)',
            'RAM footprint': 'Moderate–high (full cloning model)',
            'macOS install': '`pip install coqui-tts`, CPU-only on Mac',
            'Voice quality': 'High, clones a specific voice',
          },
          {
            'Engine': '[Bark](/power-local-llm/bark-tts-review)',
            'Apple Silicon accel': 'Experimental — `SUNO_ENABLE_MPS=True`',
            'RAM footprint': 'High (use small-models flag to reduce)',
            'macOS install': 'pip install from GitHub, no PyPI package',
            'Voice quality': 'Expressive, non-deterministic',
          },
        ],
        note: 'Voice-quality ratings are qualitative descriptions based on each engine\'s documented architecture and PromptQuorum\'s dedicated reviews (linked per row), not a blind listening test PromptQuorum conducted — no numeric MOS (Mean Opinion Score) or benchmark figures are claimed here.',
      },
      gpuAcceleration: {
        id: 'gpu-acceleration',
        title: 'Which Engines Actually Use the GPU on a Mac?',
        content: [
          '**Only Kokoro has a real, purpose-built path to Apple Silicon\'s Metal GPU; Piper skips the GPU entirely by design, and XTTS v2 and Bark both have unresolved or partial GPU support on Mac.** This is the single biggest factor separating these engines on Apple Silicon, and it is easy to assume "runs on a Mac" means "uses the Mac\'s GPU" — it usually does not.',
        ],
        items: [
          '**Kokoro-82M runs through Apple\'s own [MLX](https://github.com/ml-explore/mlx) framework via the community project [mlx-audio](https://github.com/Blaizzy/mlx-audio), which requires Apple Silicon and Python 3.10–3.12.** MLX is Apple\'s open-source machine learning framework, built from the ground up for Metal on Apple Silicon\'s unified memory architecture — the same framework the site\'s [Apple Silicon local LLM guide](/local-llms/apple-silicon-local-llm-guide-2026) and [MLX vs. Ollama vs. llama.cpp comparison](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) cover for language models. The official Kokoro-82M weights, released by hexgrad on Hugging Face, are natively a PyTorch model; the MLX path is a community port, not an official Apple or hexgrad release, and mlx-audio also offers quantized (bf16, 8-bit, 4-bit) variants for lower memory use.',
          '**Piper never touches the GPU on any platform, Apple Silicon included — this is by design, not a limitation.** Piper converts text to phonemes with espeak-ng, then synthesizes audio with a model exported to [ONNX Runtime](https://onnxruntime.ai/) for fast CPU inference. That design choice is exactly why Piper runs in real time even on a Raspberry Pi — see PromptQuorum\'s [Piper TTS review](/power-local-llm/piper-tts-review) for the full architecture and install steps.',
          '**XTTS v2\'s Apple Silicon Metal (MPS) support does not currently work.** A tracked issue on the [coqui-ai/TTS GitHub repository](https://github.com/coqui-ai/TTS/issues/3649), titled "Unable to use xtts_v2 with mps device on Apple Silicon," documents that attempting to run XTTS v2 on the MPS device hangs rather than completing. Coqui\'s own project does not list Apple Silicon GPU support as officially supported. In practice, this means XTTS v2 runs on CPU only on a Mac, through the same [Coqui TTS toolkit](/power-local-llm/coqui-tts-review) (MPL-2.0 licensed) that runs it on other platforms.',
          '**Bark has experimental Apple Silicon MPS support, gated behind an environment variable.** Setting `SUNO_ENABLE_MPS=True` enables Metal acceleration, per discussion on the [suno-ai/bark GitHub repository](https://github.com/suno-ai/bark), but some PyTorch operators Bark depends on were not implemented for MPS at the time, causing partial fallback to CPU for those steps. Bark also supports a `SUNO_USE_SMALL_MODELS=True` flag specifically to reduce memory pressure on Macs with less unified memory.',
        ],
        note: 'Apple Silicon acceleration status for community-maintained TTS projects can change between releases faster than this article is refreshed — check each project\'s own GitHub issues and README before assuming current behavior matches what is described here.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'How Do You Install Kokoro with MLX Acceleration on a Mac?',
        content:
          'This walkthrough installs the community mlx-audio project to run Kokoro-82M through Apple\'s MLX framework, using the setup documented in the [mlx-audio GitHub repository](https://github.com/Blaizzy/mlx-audio).',
        numberedItems: [
          {
            title: 'Confirm you are on Apple Silicon with a supported Python version.',
            whyItMatters: 'mlx-audio requires an Apple Silicon Mac (M-series chip) and Python 3.10–3.12; MLX does not run on Intel Macs at all, so this path is Apple-Silicon-only.',
          },
          {
            title: 'Install mlx-audio.',
            whyItMatters: 'Run `pip install mlx-audio` in a Python virtual environment. This pulls in MLX itself (version 0.31 or later) alongside the audio pipeline.',
          },
          {
            title: 'Run a first synthesis from the command line.',
            whyItMatters: 'The package ships a CLI entry point that downloads the Kokoro-82M weights on first use and synthesizes a WAV file from a text string — check the project\'s current README for the exact command, since CLI flags can change between releases.',
          },
          {
            title: 'Pick a voice and, optionally, a quantized model variant.',
            whyItMatters: 'Kokoro-82M ships with 54 voice presets across several languages. mlx-audio also offers bf16, 8-bit, and 4-bit quantized variants — lower precision trades a small amount of quality for a smaller memory footprint, useful on a Mac with less unified memory.',
          },
          {
            title: 'Integrate into your own Python application.',
            whyItMatters: 'For anything beyond one-off CLI synthesis, call mlx-audio\'s Python API directly rather than shelling out to the CLI repeatedly, avoiding the model-reload cost on every call.',
          },
        ],
        note: 'This is a community project, not an official Apple or hexgrad release — verify current install instructions against the [mlx-audio repository](https://github.com/Blaizzy/mlx-audio) before deploying, since command names and flags can change.',
      },
      intelMacs: {
        id: 'intel-macs',
        title: 'What Changes on an Intel Mac?',
        content: [
          '**On an Intel Mac, the MLX-accelerated Kokoro path is unavailable entirely — MLX requires Apple Silicon and will not run at all on Intel hardware.** Every other engine covered here still works on Intel, because none of them depend on Apple\'s Neural Engine or Apple Silicon-specific GPU acceleration to function; they simply run on CPU.',
        ],
        items: [
          '**Piper is unaffected by the Intel/Apple Silicon distinction.** It is CPU-only by design on every platform, so an Intel Mac performs comparably to an Apple Silicon Mac for Piper specifically, hardware generation aside.',
          '**Kokoro still runs on an Intel Mac through its official PyTorch weights, just without the MLX acceleration path.** You lose the Apple Silicon-specific Metal route via mlx-audio, but the model itself (82M parameters) is small enough to run acceptably on CPU.',
          '**XTTS v2 and Bark run identically on Intel and Apple Silicon Macs, since both currently run CPU-only on any Mac anyway** — XTTS v2 because MPS support is broken, and Bark because MPS support is experimental and partial. Neither loses meaningful capability moving from Apple Silicon to Intel, since neither has a mature accelerated path on Apple Silicon to begin with.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'When Should You Not Use Any of These Engines?',
        content: [
          '**None of the four engines in this comparison are the right choice for every Mac TTS use case — each has situations where a different tool, or a cloud API, fits better.**',
        ],
        items: [
          '❌ **Need a guaranteed commercial license with cloned voices.** XTTS v2\'s CPML license is non-commercial, with no confirmed active path to a commercial license since Coqui AI shut down its paid services in December 2023 — see PromptQuorum\'s [ElevenLabs comparison](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) for a managed commercial cloud alternative.',
          '❌ **Need guaranteed active maintenance.** Bark\'s public GitHub repository has shown no commits since April 5, 2024; if ongoing fixes and updates matter for your project, Piper (actively maintained by the Open Home Foundation) or Kokoro (an actively used community ecosystem around mlx-audio) are safer bets.',
          '❌ **Need production-grade Apple Silicon GPU support today, with no community-project dependency.** Kokoro\'s MLX path runs through a community project, not an official Apple or hexgrad release — treat it as good, but not vendor-guaranteed.',
          '❌ **Need real-time interactive voice on very limited Apple Silicon memory (8GB base configurations) while also running a large local LLM at the same time.** Stacking a large XTTS v2 or Bark process alongside an LLM on a memory-constrained Mac can be tight; Piper\'s and Kokoro\'s small footprints leave more headroom.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the best local TTS engine for Apple Silicon Macs?',
            a: 'Kokoro-82M, run through the community mlx-audio project, is the best choice if you specifically want Apple Silicon GPU (Metal) acceleration via Apple\'s own MLX framework. If you want the simplest install that works the same on any Mac, Piper is the better pick, since it is CPU-only by design on every platform.',
          },
          {
            q: 'Does Piper use the GPU on a Mac?',
            a: 'No. Piper is CPU-only by design on every platform, including Apple Silicon and Intel Macs. It converts text to phonemes with espeak-ng and synthesizes audio through ONNX Runtime, which is why it runs in real time even on a Raspberry Pi without any GPU at all.',
          },
          {
            q: 'Can Kokoro-82M run on Apple Silicon with GPU acceleration?',
            a: 'Yes, through the community project mlx-audio, which runs Kokoro-82M via Apple\'s own MLX framework — built specifically for Metal on Apple Silicon\'s unified memory architecture. The official Kokoro-82M weights from hexgrad are a PyTorch model; the MLX path is a community port, not an official release, and requires an Apple Silicon Mac (Intel Macs cannot use it) and Python 3.10–3.12.',
          },
          {
            q: 'Does XTTS v2 work on Apple Silicon?',
            a: 'It runs, but CPU-only. XTTS v2\'s Metal (MPS) device support is a documented, unresolved issue tracked on the coqui-ai/TTS GitHub repository (issue #3649), where attempting MPS device use hangs rather than completing. Coqui\'s project does not officially support Apple Silicon GPU acceleration for XTTS v2, so expect CPU-only performance on any Mac.',
          },
          {
            q: 'Is Bark accelerated on Apple Silicon?',
            a: 'Partially, and experimentally. Setting the SUNO_ENABLE_MPS=True environment variable enables Metal GPU acceleration for Bark, but some PyTorch operators it depends on have not been implemented for MPS, so some processing steps still fall back to CPU. Bark\'s own maintainers describe this support as experimental, not production-ready.',
          },
          {
            q: 'Can I use any of these engines on an Intel Mac?',
            a: 'Piper, XTTS v2, and Bark all run on Intel Macs, since none of them require Apple Silicon-specific acceleration to function — they run on CPU either by design (Piper) or because their GPU acceleration paths are unresolved or partial anyway (XTTS v2, Bark). Kokoro\'s MLX-accelerated path specifically requires Apple Silicon and will not run on an Intel Mac at all, though Kokoro\'s official PyTorch weights still run on Intel without MLX acceleration.',
          },
          {
            q: 'Which of these engines can clone a specific voice?',
            a: 'Only XTTS v2, among the four covered here, clones a voice from a short reference audio clip (as little as 6 seconds, per its official model card). Piper, Kokoro, and Bark all use pre-trained or preset voices rather than cloning an arbitrary voice on the fly. See PromptQuorum\'s dedicated XTTS v2 review for full cloning details and licensing.',
          },
          {
            q: 'Do any of these local TTS engines require a paid license for Apple Silicon Mac use?',
            a: 'No engine covered here charges specifically for macOS or Apple Silicon use. Piper (GPL-3.0-or-later), Kokoro (Apache-2.0), and Bark (MIT) are all free and open-source software regardless of platform. XTTS v2 is free to use but under a non-commercial license (CPML) — that restriction applies equally on Apple Silicon, Intel, Windows, or Linux, and is unrelated to which Mac you use it on.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'On Apple Silicon specifically, Kokoro-82M stands apart because it is the only one of these four engines with a genuine, purpose-built path to the Mac\'s Metal GPU, through the community mlx-audio project built on Apple\'s own MLX framework — and it is small enough (82 million parameters, Apache-2.0 licensed) that this acceleration is worth setting up. Piper remains the right default when simplicity and cross-hardware consistency matter more than raw speed: it is CPU-only everywhere, so there is nothing Apple-Silicon-specific to configure, troubleshoot, or worry will regress on an Intel Mac. XTTS v2 is worth the CPU-only performance hit only if you specifically need voice cloning and can live with its non-commercial license; Bark is worth considering only for its distinctive non-speech sounds, with the caveat that both its Apple Silicon acceleration and its overall maintenance status are unsettled. If unsure, start with Piper for the simplest install, move to Kokoro via mlx-audio once you confirm you want the Metal acceleration, and reach for XTTS v2 only when voice cloning is a hard requirement.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Kokoro-82M on Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — the official model card: parameters, license, and architecture.',
          '[mlx-audio on GitHub](https://github.com/Blaizzy/mlx-audio) — the community project that runs Kokoro-82M via Apple\'s MLX framework on Apple Silicon.',
          '[coqui-ai/TTS GitHub issue #3649](https://github.com/coqui-ai/TTS/issues/3649) — "Unable to use xtts_v2 with mps device on Apple Silicon," documenting the unresolved MPS hang.',
          '[suno-ai/bark GitHub repository](https://github.com/suno-ai/bark) — issues and pull requests documenting experimental Apple Silicon MPS support via SUNO_ENABLE_MPS.',
          '[Apple MLX Framework](https://github.com/ml-explore/mlx) — Apple\'s official open-source machine learning framework with native Metal GPU acceleration for Apple Silicon.',
          '[Piper TTS Review](/power-local-llm/piper-tts-review) — PromptQuorum\'s dedicated review, including install commands and license history.',
          '[XTTS v2 Review](/power-local-llm/xtts-v2-review), [Coqui TTS Review](/power-local-llm/coqui-tts-review), and [Bark TTS Review](/power-local-llm/bark-tts-review) — PromptQuorum\'s dedicated reviews of the other engines covered here.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Piper TTS Review](/power-local-llm/piper-tts-review) — the fast, CPU-only, permissively licensed engine covered in this comparison, in full depth.',
          '[XTTS v2 Review](/power-local-llm/xtts-v2-review) — the voice-cloning model covered here, including its non-commercial CPML license.',
          '[Coqui TTS Review](/power-local-llm/coqui-tts-review) — the toolkit that runs XTTS v2 (and other models), MPL-2.0 licensed.',
          '[Bark TTS Review](/power-local-llm/bark-tts-review) — the expressive, non-speech-audio engine covered here, including its maintenance status.',
          '[Apple Silicon Local LLM Guide](/local-llms/apple-silicon-local-llm-guide-2026) — memory tiers, Metal GPU acceleration, and Mac selection for local AI beyond TTS.',
          '[MLX vs. Ollama vs. llama.cpp on Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — the same MLX framework this guide covers for Kokoro, explained for local language models.',
          '[ElevenLabs vs. Piper vs. XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — the cloud-vs-local comparison for readers weighing a managed commercial option instead.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Local TTS Engine for Mac (2026): What Actually Uses Apple Silicon',
      description:
        'Piper is CPU-only on every Mac. Kokoro can use Metal via MLX. XTTS v2\'s MPS support is a known broken GitHub issue. Here is the local TTS engine to actually install on Apple Silicon.',
      url: 'https://promptquorum.com/power-local-llm/best-local-tts-mac',
      inLanguage: 'en',
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers evaluating local text-to-speech engines for Apple Silicon Macs' },
      about: [
        { '@type': 'Thing', name: 'Piper' },
        { '@type': 'Thing', name: 'Kokoro-82M' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Bark' },
        { '@type': 'Thing', name: 'Apple Silicon' },
        { '@type': 'Thing', name: 'MLX' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/best-local-tts-mac' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Best Local TTS Engine for Mac (2026)', item: 'https://promptquorum.com/power-local-llm/best-local-tts-mac' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/best-local-tts-mac-hero-de.webp',
    title: 'Die beste lokale TTS-Engine für Mac (2026): Was wirklich Apple Silicon nutzt',
    seoTitle: 'Beste lokale TTS für Mac 2026: Apple-Silicon-Guide',
    intro:
      'Die meisten „beste lokale TTS"-Übersichten behandeln jeden Mac gleich, doch Apple Silicon verändert, welche Engine tatsächlich sinnvoll ist. [Piper](/power-local-llm/piper-tts-review) läuft vollständig auf der CPU und nutzt die GPU überhaupt nicht — auf einem Apple-Silicon-Mac oder einem Intel-Mac verhält es sich etwa gleich. [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) kann über Apples eigenes [MLX](https://github.com/ml-explore/mlx)-Framework laufen, via das Community-Projekt [mlx-audio](https://github.com/Blaizzy/mlx-audio), das speziell für die Metal-GPU von Apple Silicon gebaut wurde. [XTTS v2](/power-local-llm/xtts-v2-review) unterstützt dagegen Apples Metal Performance Shaders (MPS) Backend überhaupt nicht — ein verfolgtes [GitHub-Issue](https://github.com/coqui-ai/TTS/issues/3649) dokumentiert, dass die MPS-Gerätenutzung einfach hängen bleibt — es läuft daher auf jedem Mac nur auf der CPU. Dieser Leitfaden vergleicht, was jede Engine auf Apple Silicon tatsächlich leistet, weist darauf hin, wo Intel-Macs auf die reinen CPU-Optionen beschränkt sind, und sagt Ihnen, welche Sie installieren sollten.',
    metaDescription:
      'Piper läuft auf jedem Mac nur auf der CPU. Kokoro kann Metal über MLX nutzen. Die MPS-Unterstützung von XTTS v2 ist ein bekanntes, defektes GitHub-Issue. Hier ist die lokale TTS-Engine, die Sie auf Apple Silicon tatsächlich installieren sollten.',
    twitterDescription:
      'Beste lokale TTS für Mac 2026: Piper nutzt nie die GPU, Kokoro kann über Apples MLX-Framework laufen, und die Metal-(MPS)-Unterstützung von XTTS v2 ist ein dokumentiertes, defektes GitHub-Issue. Was Sie auf Apple Silicon vs. Intel tatsächlich installieren sollten.',
    audience:
      'Entwickler und Hobbyisten, die Sprachanwendungen, Barrierefreiheits-Tools oder Hörbuch-Pipelines auf Apple-Silicon-Macs entwickeln und eine lokale Text-zu-Sprache-Engine wählen müssen, die die Hardware tatsächlich nutzt.',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'beste lokale TTS für Mac',
    targetKeywords: [
      'beste lokale tts mac',
      'beste text-to-speech apple silicon',
      'kokoro tts mac',
      'piper tts mac',
      'xtts v2 apple silicon',
      'lokale tts mlx metal',
      'text-to-speech m4 m5 mac',
      'lokale tts intel mac',
    ],
    current_models_mentioned: ['Piper', 'Kokoro-82M', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M-series', 'M4', 'M5', 'Intel Mac'],
    leadAnswerBlock:
      '**Kokoro-82M ist die beste lokale TTS-Engine für Apple-Silicon-Macs, wenn Sie GPU-Beschleunigung wollen, da es über Apples eigenes [MLX](https://github.com/ml-explore/mlx)-Framework via das Community-Projekt [mlx-audio](https://github.com/Blaizzy/mlx-audio) laufen kann; [Piper](/power-local-llm/piper-tts-review) ist die beste Wahl, wenn Sie die einfachste, portabelste Installation wollen, die sich auf Intel- und Apple-Silicon-Macs identisch verhält, da es auf keinem von beiden die GPU nutzt.** [XTTS v2](/power-local-llm/xtts-v2-review) ist die Wahl, wenn Sie speziell Voice-Cloning benötigen, doch seine Metal-(MPS)-Unterstützung ist ein dokumentiertes, defektes [GitHub-Issue](https://github.com/coqui-ai/TTS/issues/3649) — erwarten Sie auf jedem Mac reine CPU-Leistung. [Bark](/power-local-llm/bark-tts-review) hat experimentelle MPS-Unterstützung hinter einer Umgebungsvariable, wobei einige Operationen weiterhin auf die CPU zurückfallen.',
    quickAnswerTop: {
      question: 'Was ist die beste lokale Text-zu-Sprache-Engine für Mac?',
      answer:
        'Nutzen Sie Kokoro-82M (über das Community-Projekt mlx-audio), wenn Sie eine lokale TTS-Engine wollen, die über die Metal-GPU von Apple Silicon läuft, mit Apples eigenem MLX-Framework — sie ist klein (82 Millionen Parameter), Apache-2.0-lizenziert und in quantisierten Varianten für geringeren Speicherverbrauch verfügbar. Nutzen Sie Piper, wenn Sie die einfachstmögliche Einrichtung wollen, die auf jedem Mac identisch funktioniert, Apple Silicon oder Intel, da es von Grund auf nur auf der CPU läuft und dafür gebaut wurde, sogar auf einem Raspberry Pi in Echtzeit zu laufen. Nutzen Sie XTTS v2 nur, wenn Sie speziell Voice-Cloning aus einer kurzen Audioprobe benötigen — wissen Sie aber, dass die Apple-Silicon-GPU-(MPS)-Unterstützung ein dokumentiertes, ungelöstes GitHub-Issue ist, sodass es auf einem Mac ausschließlich auf der CPU läuft, und seine Coqui Public Model License (CPML) ist nicht-kommerziell. Vermeiden Sie Bark, es sei denn, Sie wollen speziell dessen Nicht-Sprach-Klänge (Lachen, Seufzer); seine Apple-Silicon-GPU-Unterstützung wird von den eigenen Maintainern ausdrücklich als experimentell bezeichnet, und sein GitHub-Repository hatte seit April 2024 keine Commits mehr.',
      bullets: [
        'Kokoro-82M: 82M Parameter, Apache-2.0, kann über Apples MLX-Framework via das Community-Projekt mlx-audio laufen — die einzige Engine hier mit einem echten Apple-Silicon-GPU-Pfad.',
        'Piper: von Grund auf nur CPU (ONNX Runtime), GPL-3.0-or-later, verhält sich auf Intel- und Apple-Silicon-Macs gleich, da es auf keinem von beiden die GPU nutzt.',
        'XTTS v2: Voice-Cloning aus ~6 Sekunden Audio, doch die Apple-Silicon-MPS-(Metal)-Unterstützung ist ein dokumentiertes, defektes GitHub-Issue — nur CPU auf Mac, nicht-kommerzielle CPML-Lizenz.',
        'Bark: experimentelle Apple-Silicon-MPS-Unterstützung über eine Umgebungsvariable, wobei einige Operationen weiterhin auf die CPU zurückfallen; MIT-Lizenz, aber keine Commits seit April 2024.',
        'Intel-Macs sind auf die reinen CPU-Pfade beschränkt (Piper und XTTS v2/Bark im CPU-Modus) — der MLX-beschleunigte Kokoro-Pfad erfordert Apple Silicon.',
      ],
      updatedDate: '2026-09-11',
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Beste Wahl nach Anwendungsfall', anchor: 'best-choice' },
      { label: 'Vergleich: Apple-Silicon-Eignung', anchor: 'comparison' },
      { label: 'Welche Engines nutzen die GPU auf einem Mac tatsächlich?', anchor: 'gpu-acceleration' },
      { label: 'Kokoro mit MLX-Beschleunigung installieren', anchor: 'install-walkthrough' },
      { label: 'Einschränkungen auf Intel-Macs', anchor: 'intel-macs' },
      { label: 'Wann keine dieser Engines nutzen', anchor: 'limitations' },
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
            text: 'Für lokale Text-zu-Sprache auf Apple Silicon ist Kokoro-82M die einzige der vier großen lokalen Engines mit einem echten Metal-GPU-Pfad (via das Community-Projekt mlx-audio auf Apples MLX-Framework); Piper ist die einfachste reine-CPU-Option, die sich auf Intel-Macs identisch verhält; XTTS v2 bietet Voice-Cloning, doch seine Apple-Silicon-MPS-Unterstützung ist ein dokumentiertes, defektes GitHub-Issue; und Barks MPS-Unterstützung ist ausdrücklich experimentell.',
          },
          {
            type: 'plain-terms',
            text: 'Nicht jedes kostenlose Text-zu-Sprache-Programm, das auf einem Mac läuft, nutzt tatsächlich den Grafikchip des Macs — manche laufen einfach auf dem normalen Prozessor, was gut funktioniert, aber langsamer ist als möglich. Kokoro ist dasjenige, das gebaut wurde, um Apples eigenes Chipdesign über ein Projekt namens MLX zu nutzen; die anderen überspringen die GPU entweder von Grund auf (Piper) oder versuchen sie zu nutzen, stoßen aber auf ungelöste Probleme (XTTS v2, Bark).',
          },
        ],
        items: [
          'Kokoro-82M: Apache-2.0, 82M Parameter, läuft über Apples MLX-Framework via das Community-Projekt mlx-audio — der echte Apple-Silicon-Beschleunigungspfad.',
          'Piper: GPL-3.0-or-later, von Grund auf nur CPU via ONNX Runtime — gleiches Leistungsprofil auf Intel- und Apple-Silicon-Macs.',
          'XTTS v2: nicht-kommerzielle CPML-Lizenz, Voice-Cloning aus ~6 Sekunden Audio, doch die Metal-(MPS)-Unterstützung ist ein verfolgtes, ungelöstes GitHub-Issue — läuft auf Mac nur mit CPU.',
          'Bark: MIT-Lizenz, experimentelle Apple-Silicon-MPS-Unterstützung hinter einer Umgebungsvariable, keine Commits im öffentlichen Repository seit April 2024.',
          'Intel-Macs können den MLX-beschleunigten Kokoro-Pfad überhaupt nicht nutzen — MLX erfordert Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Leitfaden vergleicht die vier lokalen TTS-Engines, die PromptQuorum unabhängig getestet hat (Piper, Kokoro, XTTS v2, Bark). Jede hat ihren eigenen dedizierten Test, durchgängig verlinkt, für Installationsbefehle, Lizenzdetails und vollständige Einschränkungen.',
          },
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: 'Welche lokale TTS-Engine sollten Sie tatsächlich installieren?',
        content: [
          '**Die richtige Engine hängt davon ab, ob Sie GPU-Beschleunigung, Voice-Cloning oder möglichst breite Mac-Kompatibilität benötigen — keine einzelne Engine gewinnt in allen drei Punkten.** Kokoro ist die einzige Engine hier mit einem echten Apple-Silicon-GPU-Pfad; Piper ist am portabelsten; XTTS v2 ist die einzige, die Stimmen klont.',
        ],
        items: [
          '🏆 **Insgesamt am besten für Apple Silicon:** [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) via [mlx-audio](https://github.com/Blaizzy/mlx-audio) — die einzige hier behandelte Engine mit einem echten Metal-GPU-Pfad, klein genug (82M Parameter), um auf jedem Apple-Silicon-Mac bequem zu laufen.',
          '**Am besten für Einfachheit und Intel-Kompatibilität:** [Piper](/power-local-llm/piper-tts-review) — von Grund auf nur CPU, sodass Installation und Leistung identisch sind, egal ob auf einem M-Series-Chip oder einem älteren Intel-Mac.',
          '**Am besten, wenn Sie Voice-Cloning benötigen:** [XTTS v2](/power-local-llm/xtts-v2-review) — klont eine Stimme aus ~6 Sekunden Referenzaudio, läuft aber auf jedem Mac nur mit CPU und ist ausschließlich für nicht-kommerzielle Nutzung lizenziert.',
          '**Am besten für ausdrucksstarkes, nicht-sprachliches Audio:** [Bark](/power-local-llm/bark-tts-review) — Lachen, Seufzer und einfache Musik aus Text, mit experimenteller (teilweiser) Apple-Silicon-GPU-Unterstützung, wobei sein Repository seit April 2024 ruht.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer sollte welche Engine nutzen?',
        content: [
          '**Wählen Sie die Engine passend zu Ihrem Mac und Ihrer tatsächlichen Anforderung, nicht danach, welche die meisten GitHub-Sterne hat.** GPU-Beschleunigung ist nur wichtig, wenn Sie genug Audio, oft genug, generieren, dass reine CPU-Synthese sich langsam anfühlt.',
        ],
        items: [
          '🧭 **Apple-Silicon-Mac, wollen die schnellste lokale Option:** Kokoro via mlx-audio — die einzige hier behandelte Engine, die geschrieben wurde, um Metal über MLX zu nutzen.',
          '🧭 **Jeder Mac, auch ein älteres Intel-Modell:** Piper — von Grund auf nur CPU, sodass es nichts Apple-Silicon-Spezifisches zu konfigurieren oder zu beheben gibt.',
          '🧭 **Müssen eine bestimmte Stimme aus einer kurzen Aufnahme klonen:** XTTS v2 — akzeptieren Sie, dass es auf einem Mac nur mit CPU läuft und seine Lizenz nicht-kommerziell ist.',
          '🧭 **Wollen Lachen, Seufzer oder Umgebungsgeräusche, nicht nur Sprache:** Bark — kalkulieren Sie aber zusätzliche Installationszeit für seinen experimentellen Apple-Silicon-Pfad ein, und prüfen Sie vorab den aktuellen Pflegestatus.',
          '❌ **Überspringen Sie Bark, wenn Sie aktive Pflege oder garantierte Leistung benötigen** — sein öffentliches Repository zeigt seit April 2024 keine Commits mehr, unabhängig von der Apple-Silicon-Frage.',
          '❌ **Überspringen Sie XTTS v2, wenn Sie ein kommerzielles Produkt bauen** — seine Coqui Public Model License (CPML) ist nicht-kommerziell, und Coqui AI, das Unternehmen, das es veröffentlichte, stellte seine kostenpflichtigen Dienste im Dezember 2023 ein.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Wie schneiden Piper, Kokoro, XTTS v2 und Bark bei der Apple-Silicon-Eignung ab?',
        content: [
          '**Kokoro ist die einzige Engine in diesem Vergleich mit einem echten, speziell gebauten Apple-Silicon-GPU-Pfad; die übrigen sind von Grund auf oder wegen eines ungelösten Bugs nur CPU.** Die Tabelle unten bewertet jede Engine anhand der vier Faktoren, die die Mac-Eignung tatsächlich entscheiden: ob sie Apple-Silicon-Beschleunigung nutzt, wie viel Speicher sie braucht, wie reibungslos die macOS-Installation ist, und die Sprachqualität.',
        ],
        columns: ['Engine', 'Apple-Silicon-Beschl.', 'RAM-Bedarf', 'macOS-Installation', 'Sprachqualität'],
        rows: [
          {
            'Engine': '[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)',
            'Apple-Silicon-Beschl.': 'Ja — Metal via MLX (mlx-audio)',
            'RAM-Bedarf': 'Niedrig (82M Param., quant. Varianten)',
            'macOS-Installation': 'pip install + mlx-audio, nur Apple Silicon',
            'Sprachqualität': 'Natürlich, nah an größeren Cloud-Modellen',
          },
          {
            'Engine': '[Piper](/power-local-llm/piper-tts-review)',
            'Apple-Silicon-Beschl.': 'Keine (Design) — nur CPU, ONNX Runtime',
            'RAM-Bedarf': 'Sehr niedrig (~50–100MB pro Stimme)',
            'macOS-Installation': '`pip install piper-tts`, kein GPU-Setup',
            'Sprachqualität': 'Klar, etwas robotische Prosodie',
          },
          {
            'Engine': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Apple-Silicon-Beschl.': 'Keine — MPS hängt (GH-Issue #3649)',
            'RAM-Bedarf': 'Mittel–hoch (volles Cloning-Modell)',
            'macOS-Installation': '`pip install coqui-tts`, nur CPU auf Mac',
            'Sprachqualität': 'Hoch, klont eine bestimmte Stimme',
          },
          {
            'Engine': '[Bark](/power-local-llm/bark-tts-review)',
            'Apple-Silicon-Beschl.': 'Experimentell — `SUNO_ENABLE_MPS=True`',
            'RAM-Bedarf': 'Hoch (Small-Models-Flag zum Reduzieren)',
            'macOS-Installation': 'pip install von GitHub, kein PyPI-Paket',
            'Sprachqualität': 'Ausdrucksstark, nicht-deterministisch',
          },
        ],
        note: 'Die Sprachqualitäts-Bewertungen sind qualitative Beschreibungen, basierend auf der dokumentierten Architektur jeder Engine und PromptQuorums dedizierten Tests (pro Zeile verlinkt), kein von PromptQuorum durchgeführter Blind-Hörtest — es werden hier keine numerischen MOS-Werte (Mean Opinion Score) oder Benchmark-Zahlen behauptet.',
      },
      gpuAcceleration: {
        id: 'gpu-acceleration',
        title: 'Welche Engines nutzen die GPU auf einem Mac tatsächlich?',
        content: [
          '**Nur Kokoro hat einen echten, speziell gebauten Pfad zur Metal-GPU von Apple Silicon; Piper überspringt die GPU von Grund auf, und sowohl XTTS v2 als auch Bark haben auf Mac ungelöste oder teilweise GPU-Unterstützung.** Dies ist der einzelne größte Unterschied zwischen diesen Engines auf Apple Silicon, und es ist leicht anzunehmen, „läuft auf einem Mac" bedeute „nutzt die GPU des Macs" — das ist meist nicht der Fall.',
        ],
        items: [
          '**Kokoro-82M läuft über Apples eigenes [MLX](https://github.com/ml-explore/mlx)-Framework via das Community-Projekt [mlx-audio](https://github.com/Blaizzy/mlx-audio), das Apple Silicon und Python 3.10–3.12 erfordert.** MLX ist Apples Open-Source-Machine-Learning-Framework, von Grund auf für Metal auf der Unified-Memory-Architektur von Apple Silicon gebaut — dasselbe Framework, das der [Apple-Silicon-Leitfaden für lokale LLMs](/local-llms/apple-silicon-local-llm-guide-2026) und der [Vergleich MLX vs. Ollama vs. llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) für Sprachmodelle behandeln. Die offiziellen Kokoro-82M-Gewichte, veröffentlicht von hexgrad auf Hugging Face, sind nativ ein PyTorch-Modell; der MLX-Pfad ist ein Community-Port, keine offizielle Apple- oder hexgrad-Veröffentlichung, und mlx-audio bietet zudem quantisierte (bf16, 8-bit, 4-bit) Varianten für geringeren Speicherverbrauch.',
          '**Piper berührt auf keiner Plattform die GPU, Apple Silicon eingeschlossen — das ist Design, keine Einschränkung.** Piper wandelt Text mit espeak-ng in Phoneme um und synthetisiert dann Audio mit einem Modell, das für schnelle CPU-Inferenz nach [ONNX Runtime](https://onnxruntime.ai/) exportiert wurde. Genau diese Design-Entscheidung ist der Grund, warum Piper sogar auf einem Raspberry Pi in Echtzeit läuft — siehe PromptQuorums [Piper-TTS-Test](/power-local-llm/piper-tts-review) für die vollständige Architektur und Installationsschritte.',
          '**Die Apple-Silicon-Metal-(MPS)-Unterstützung von XTTS v2 funktioniert derzeit nicht.** Ein verfolgtes Issue im [coqui-ai/TTS-GitHub-Repository](https://github.com/coqui-ai/TTS/issues/3649), betitelt „Unable to use xtts_v2 with mps device on Apple Silicon", dokumentiert, dass der Versuch, XTTS v2 auf dem MPS-Gerät auszuführen, hängen bleibt, statt abzuschließen. Coquis eigenes Projekt führt Apple-Silicon-GPU-Unterstützung nicht als offiziell unterstützt auf. In der Praxis bedeutet das, dass XTTS v2 auf einem Mac nur auf der CPU läuft, über dasselbe [Coqui-TTS-Toolkit](/power-local-llm/coqui-tts-review) (MPL-2.0-lizenziert), das es auf anderen Plattformen ausführt.',
          '**Bark hat experimentelle Apple-Silicon-MPS-Unterstützung, geschützt hinter einer Umgebungsvariable.** Das Setzen von `SUNO_ENABLE_MPS=True` aktiviert Metal-Beschleunigung, laut Diskussion im [suno-ai/bark-GitHub-Repository](https://github.com/suno-ai/bark), doch einige PyTorch-Operatoren, von denen Bark abhängt, waren zum Zeitpunkt nicht für MPS implementiert, was bei diesen Schritten zu teilweisem CPU-Fallback führt. Bark unterstützt zudem ein `SUNO_USE_SMALL_MODELS=True`-Flag speziell zur Reduzierung des Speicherdrucks auf Macs mit weniger Unified Memory.',
        ],
        note: 'Der Apple-Silicon-Beschleunigungsstatus für Community-gepflegte TTS-Projekte kann sich zwischen Releases schneller ändern, als dieser Artikel aktualisiert wird — prüfen Sie vor der Annahme, dass das aktuelle Verhalten dem hier beschriebenen entspricht, die eigenen GitHub-Issues und das README jedes Projekts.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Wie installieren Sie Kokoro mit MLX-Beschleunigung auf einem Mac?',
        content:
          'Diese Anleitung installiert das Community-Projekt mlx-audio, um Kokoro-82M über Apples MLX-Framework auszuführen, nach dem im [mlx-audio-GitHub-Repository](https://github.com/Blaizzy/mlx-audio) dokumentierten Setup.',
        numberedItems: [
          {
            title: 'Bestätigen Sie, dass Sie Apple Silicon mit einer unterstützten Python-Version nutzen.',
            whyItMatters: 'mlx-audio erfordert einen Apple-Silicon-Mac (M-Series-Chip) und Python 3.10–3.12; MLX läuft auf Intel-Macs überhaupt nicht, dieser Pfad ist also nur für Apple Silicon.',
          },
          {
            title: 'Installieren Sie mlx-audio.',
            whyItMatters: 'Führen Sie `pip install mlx-audio` in einer Python-Virtual-Environment aus. Das zieht MLX selbst (Version 0.31 oder neuer) zusammen mit der Audio-Pipeline mit ein.',
          },
          {
            title: 'Führen Sie eine erste Synthese über die Kommandozeile aus.',
            whyItMatters: 'Das Paket liefert einen CLI-Einstiegspunkt, der beim ersten Gebrauch die Kokoro-82M-Gewichte herunterlädt und aus einer Textzeichenkette eine WAV-Datei synthetisiert — prüfen Sie das aktuelle README des Projekts für den genauen Befehl, da CLI-Flags sich zwischen Releases ändern können.',
          },
          {
            title: 'Wählen Sie eine Stimme und optional eine quantisierte Modellvariante.',
            whyItMatters: 'Kokoro-82M liefert 54 Stimmpresets über mehrere Sprachen hinweg. mlx-audio bietet zudem bf16-, 8-bit- und 4-bit-quantisierte Varianten — geringere Präzision tauscht etwas Qualität gegen einen kleineren Speicherbedarf, nützlich auf einem Mac mit weniger Unified Memory.',
          },
          {
            title: 'Integrieren Sie es in Ihre eigene Python-Anwendung.',
            whyItMatters: 'Für alles über einmalige CLI-Synthese hinaus rufen Sie die Python-API von mlx-audio direkt auf, statt wiederholt die CLI aufzurufen, um die Kosten für das erneute Laden des Modells bei jedem Aufruf zu vermeiden.',
          },
        ],
        note: 'Dies ist ein Community-Projekt, keine offizielle Apple- oder hexgrad-Veröffentlichung — prüfen Sie die aktuellen Installationsanweisungen im [mlx-audio-Repository](https://github.com/Blaizzy/mlx-audio), bevor Sie es einsetzen, da sich Befehlsnamen und Flags ändern können.',
      },
      intelMacs: {
        id: 'intel-macs',
        title: 'Was ändert sich auf einem Intel-Mac?',
        content: [
          '**Auf einem Intel-Mac ist der MLX-beschleunigte Kokoro-Pfad vollständig nicht verfügbar — MLX erfordert Apple Silicon und läuft auf Intel-Hardware überhaupt nicht.** Jede andere hier behandelte Engine funktioniert weiterhin auf Intel, da keine von ihnen für ihre Funktion auf Apples Neural Engine oder Apple-Silicon-spezifische GPU-Beschleunigung angewiesen ist — sie laufen einfach auf der CPU.',
        ],
        items: [
          '**Piper ist von der Intel/Apple-Silicon-Unterscheidung unberührt.** Es ist auf jeder Plattform von Grund auf nur CPU, sodass ein Intel-Mac speziell für Piper vergleichbar mit einem Apple-Silicon-Mac abschneidet, Hardware-Generation ausgeklammert.',
          '**Kokoro läuft auf einem Intel-Mac weiterhin über seine offiziellen PyTorch-Gewichte, nur ohne den MLX-Beschleunigungspfad.** Sie verlieren den Apple-Silicon-spezifischen Metal-Weg via mlx-audio, doch das Modell selbst (82M Parameter) ist klein genug, um auf der CPU akzeptabel zu laufen.',
          '**XTTS v2 und Bark laufen auf Intel- und Apple-Silicon-Macs identisch, da beide derzeit auf jedem Mac ohnehin nur mit CPU laufen** — XTTS v2, weil die MPS-Unterstützung defekt ist, und Bark, weil die MPS-Unterstützung experimentell und teilweise ist. Keines der beiden verliert nennenswerte Fähigkeiten beim Wechsel von Apple Silicon zu Intel, da keines von beiden von Anfang an einen ausgereiften beschleunigten Pfad auf Apple Silicon hat.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wann sollten Sie keine dieser Engines nutzen?',
        content: [
          '**Keine der vier Engines in diesem Vergleich ist die richtige Wahl für jeden Mac-TTS-Anwendungsfall — jede hat Situationen, in denen ein anderes Werkzeug oder eine Cloud-API besser passt.**',
        ],
        items: [
          '❌ **Benötigen eine garantierte kommerzielle Lizenz mit geklonten Stimmen.** Die CPML-Lizenz von XTTS v2 ist nicht-kommerziell, ohne bestätigten aktiven Weg zu einer kommerziellen Lizenz, seit Coqui AI seine kostenpflichtigen Dienste im Dezember 2023 einstellte — siehe PromptQuorums [ElevenLabs-Vergleich](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) für eine verwaltete kommerzielle Cloud-Alternative.',
          '❌ **Benötigen garantierte aktive Pflege.** Barks öffentliches GitHub-Repository zeigt seit dem 5. April 2024 keine Commits mehr; wenn laufende Fixes und Updates für Ihr Projekt wichtig sind, sind Piper (aktiv gepflegt von der Open Home Foundation) oder Kokoro (ein aktiv genutztes Community-Ökosystem rund um mlx-audio) sicherere Wetten.',
          '❌ **Benötigen heute produktionsreife Apple-Silicon-GPU-Unterstützung, ohne Abhängigkeit von einem Community-Projekt.** Der MLX-Pfad von Kokoro läuft über ein Community-Projekt, keine offizielle Apple- oder hexgrad-Veröffentlichung — behandeln Sie ihn als gut, aber nicht vom Hersteller garantiert.',
          '❌ **Benötigen interaktive Echtzeit-Sprache auf sehr begrenztem Apple-Silicon-Speicher (8GB-Basiskonfigurationen), während gleichzeitig ein großes lokales LLM läuft.** Einen großen XTTS-v2- oder Bark-Prozess neben einem LLM auf einem speicherbegrenzten Mac zu stapeln, kann eng werden; die kleinen Speicherbedarfe von Piper und Kokoro lassen mehr Spielraum.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist die beste lokale TTS-Engine für Apple-Silicon-Macs?',
            a: 'Kokoro-82M, ausgeführt über das Community-Projekt mlx-audio, ist die beste Wahl, wenn Sie speziell Apple-Silicon-GPU-(Metal)-Beschleunigung über Apples eigenes MLX-Framework wollen. Wenn Sie die einfachste Installation wollen, die auf jedem Mac gleich funktioniert, ist Piper die bessere Wahl, da es auf jeder Plattform von Grund auf nur CPU nutzt.',
          },
          {
            q: 'Nutzt Piper die GPU auf einem Mac?',
            a: 'Nein. Piper ist auf jeder Plattform von Grund auf nur CPU, Apple Silicon und Intel-Macs eingeschlossen. Es wandelt Text mit espeak-ng in Phoneme um und synthetisiert Audio über ONNX Runtime, weshalb es sogar auf einem Raspberry Pi ohne jede GPU in Echtzeit läuft.',
          },
          {
            q: 'Kann Kokoro-82M auf Apple Silicon mit GPU-Beschleunigung laufen?',
            a: 'Ja, über das Community-Projekt mlx-audio, das Kokoro-82M via Apples eigenes MLX-Framework ausführt — speziell für Metal auf der Unified-Memory-Architektur von Apple Silicon gebaut. Die offiziellen Kokoro-82M-Gewichte von hexgrad sind ein PyTorch-Modell; der MLX-Pfad ist ein Community-Port, keine offizielle Veröffentlichung, und erfordert einen Apple-Silicon-Mac (Intel-Macs können ihn nicht nutzen) sowie Python 3.10–3.12.',
          },
          {
            q: 'Funktioniert XTTS v2 auf Apple Silicon?',
            a: 'Es läuft, aber nur mit CPU. Die Metal-(MPS)-Geräteunterstützung von XTTS v2 ist ein dokumentiertes, ungelöstes Issue im coqui-ai/TTS-GitHub-Repository (Issue #3649), bei dem der Versuch, das MPS-Gerät zu nutzen, hängen bleibt, statt abzuschließen. Coquis Projekt unterstützt Apple-Silicon-GPU-Beschleunigung für XTTS v2 nicht offiziell, erwarten Sie also auf jedem Mac reine CPU-Leistung.',
          },
          {
            q: 'Ist Bark auf Apple Silicon beschleunigt?',
            a: 'Teilweise und experimentell. Das Setzen der Umgebungsvariable SUNO_ENABLE_MPS=True aktiviert Metal-GPU-Beschleunigung für Bark, doch einige PyTorch-Operatoren, von denen es abhängt, wurden nicht für MPS implementiert, sodass einige Verarbeitungsschritte weiterhin auf die CPU zurückfallen. Barks eigene Maintainer beschreiben diese Unterstützung als experimentell, nicht produktionsreif.',
          },
          {
            q: 'Kann ich eine dieser Engines auf einem Intel-Mac nutzen?',
            a: 'Piper, XTTS v2 und Bark laufen alle auf Intel-Macs, da keine von ihnen Apple-Silicon-spezifische Beschleunigung für ihre Funktion benötigt — sie laufen entweder von Grund auf auf der CPU (Piper) oder weil ihre GPU-Beschleunigungspfade ohnehin ungelöst oder teilweise sind (XTTS v2, Bark). Kokoros MLX-beschleunigter Pfad erfordert speziell Apple Silicon und läuft auf einem Intel-Mac überhaupt nicht, doch Kokoros offizielle PyTorch-Gewichte laufen auch auf Intel ohne MLX-Beschleunigung.',
          },
          {
            q: 'Welche dieser Engines kann eine bestimmte Stimme klonen?',
            a: 'Nur XTTS v2 klont unter den hier behandelten vier eine Stimme aus einem kurzen Referenzaudioclip (nach eigener Model-Card bereits ab 6 Sekunden). Piper, Kokoro und Bark nutzen alle vortrainierte oder voreingestellte Stimmen, statt eine beliebige Stimme spontan zu klonen. Siehe PromptQuorums dedizierten XTTS-v2-Test für vollständige Cloning-Details und Lizenzierung.',
          },
          {
            q: 'Benötigt eine dieser lokalen TTS-Engines eine bezahlte Lizenz für die Nutzung auf einem Apple-Silicon-Mac?',
            a: 'Keine hier behandelte Engine berechnet speziell für macOS- oder Apple-Silicon-Nutzung. Piper (GPL-3.0-or-later), Kokoro (Apache-2.0) und Bark (MIT) sind alle kostenlose und quelloffene Software, unabhängig von der Plattform. XTTS v2 ist kostenlos nutzbar, aber unter einer nicht-kommerziellen Lizenz (CPML) — diese Einschränkung gilt gleichermaßen auf Apple Silicon, Intel, Windows oder Linux und hängt nicht davon ab, welchen Mac Sie nutzen.',
          },
          {
            q: 'Muss ich bei der Verwendung dieser lokalen TTS-Engines die DSGVO beachten?',
            a: 'Diese Engines sind lokale, selbst gehostete Open-Source-Tools, die vollständig auf dem Gerät laufen, ohne dass Audioclips oder Text zu einem Cloud-Anbieter übertragen werden. Das reduziert grundsätzlich Fragen zur Datenresidenz und zur Übermittlung an Dritte, die bei einer Cloud-TTS-API entstehen würden, und kann helfen, die Verarbeitungspflichten aus DSGVO-Artikel 28 zu vereinfachen, wenn Sie Auftragsverarbeitung minimieren wollen. Das ist jedoch keine Zertifizierung: Keines dieser Tools ist offiziell als „DSGVO-konform" zertifiziert, und ob Ihre konkrete Nutzung — etwa das Verarbeiten von Sprachaufnahmen echter Personen für Voice-Cloning mit XTTS v2 — vollständig konform ist, hängt von Ihrer gesamten Datenverarbeitung ab, nicht nur vom lokalen Betrieb der Engine. Prüfen Sie dies unabhängig, idealerweise mit rechtlicher Beratung, bevor Sie personenbezogene Sprachdaten verarbeiten.',
          },
          {
            q: 'Ist eine dieser Engines für den deutschen Mittelstand geeignet?',
            a: 'Piper und Kokoro sind für Mittelstandsanwendungen wie automatisierte Ansagen, interne Tools oder Prototypen gut geeignet: kostenlos, selbst gehostet, ohne laufende Kosten pro Zeichen oder API-Abonnement einer Cloud-TTS. XTTS v2 ist wegen seiner nicht-kommerziellen CPML-Lizenz für ein kommerzielles Mittelstandsprodukt derzeit nicht ohne separate Vereinbarung geeignet — behandeln Sie es allenfalls als internes Forschungs- oder Prototyping-Werkzeug. Für alle vier gilt: Da es sich um selbst gehostete Software handelt, liegt die Verantwortung für IT-Sicherheit und Systempflege beim Mittelstandsunternehmen selbst, nicht bei einem Cloud-Anbieter.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Speziell auf Apple Silicon sticht Kokoro-82M hervor, weil es unter diesen vier Engines die einzige mit einem echten, speziell gebauten Pfad zur Metal-GPU des Macs ist, über das Community-Projekt mlx-audio, aufgebaut auf Apples eigenem MLX-Framework — und es ist klein genug (82 Millionen Parameter, Apache-2.0-lizenziert), dass sich diese Beschleunigung einzurichten lohnt. Piper bleibt die richtige Standardwahl, wenn Einfachheit und plattformübergreifende Konsistenz wichtiger sind als reine Geschwindigkeit: Es ist überall nur CPU, sodass es nichts Apple-Silicon-Spezifisches zu konfigurieren, zu beheben oder auf einem Intel-Mac zu befürchten gibt, dass es zurückfällt. XTTS v2 lohnt die reine-CPU-Leistungseinbuße nur, wenn Sie speziell Voice-Cloning benötigen und mit seiner nicht-kommerziellen Lizenz leben können; Bark lohnt eine Überlegung nur wegen seiner charakteristischen Nicht-Sprach-Klänge, mit dem Vorbehalt, dass sowohl seine Apple-Silicon-Beschleunigung als auch sein Pflegestatus insgesamt ungeklärt sind. Im Zweifel starten Sie mit Piper für die einfachste Installation, wechseln zu Kokoro via mlx-audio, sobald Sie bestätigt haben, dass Sie die Metal-Beschleunigung wollen, und greifen nur dann zu XTTS v2, wenn Voice-Cloning eine harte Anforderung ist.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Kokoro-82M auf Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — die offizielle Model-Card: Parameter, Lizenz und Architektur.',
          '[mlx-audio auf GitHub](https://github.com/Blaizzy/mlx-audio) — das Community-Projekt, das Kokoro-82M via Apples MLX-Framework auf Apple Silicon ausführt.',
          '[coqui-ai/TTS-GitHub-Issue #3649](https://github.com/coqui-ai/TTS/issues/3649) — „Unable to use xtts_v2 with mps device on Apple Silicon", dokumentiert das ungelöste MPS-Hängen.',
          '[suno-ai/bark-GitHub-Repository](https://github.com/suno-ai/bark) — Issues und Pull-Requests, die experimentelle Apple-Silicon-MPS-Unterstützung via SUNO_ENABLE_MPS dokumentieren.',
          '[Apple-MLX-Framework](https://github.com/ml-explore/mlx) — Apples offizielles Open-Source-Machine-Learning-Framework mit nativer Metal-GPU-Beschleunigung für Apple Silicon.',
          '[Piper-TTS-Test](/power-local-llm/piper-tts-review) — PromptQuorums dedizierter Test, einschließlich Installationsbefehlen und Lizenzhistorie.',
          '[XTTS-v2-Test](/power-local-llm/xtts-v2-review), [Coqui-TTS-Test](/power-local-llm/coqui-tts-review) und [Bark-TTS-Test](/power-local-llm/bark-tts-review) — PromptQuorums dedizierte Tests der übrigen hier behandelten Engines.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Piper-TTS-Test](/power-local-llm/piper-tts-review) — die schnelle, reine-CPU, freizügig lizenzierte Engine aus diesem Vergleich, in voller Tiefe.',
          '[XTTS-v2-Test](/power-local-llm/xtts-v2-review) — das hier behandelte Voice-Cloning-Modell, einschließlich seiner nicht-kommerziellen CPML-Lizenz.',
          '[Coqui-TTS-Test](/power-local-llm/coqui-tts-review) — das Toolkit, das XTTS v2 (und andere Modelle) ausführt, MPL-2.0-lizenziert.',
          '[Bark-TTS-Test](/power-local-llm/bark-tts-review) — die ausdrucksstarke, nicht-sprachliche lokale TTS-Engine aus diesem Vergleich, einschließlich ihres Pflegestatus.',
          '[Apple-Silicon-Leitfaden für lokale LLMs](/local-llms/apple-silicon-local-llm-guide-2026) — Speicherstufen, Metal-GPU-Beschleunigung und Mac-Auswahl für lokale KI über TTS hinaus.',
          '[MLX vs. Ollama vs. llama.cpp auf Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — dasselbe MLX-Framework, das dieser Leitfaden für Kokoro behandelt, erklärt für lokale Sprachmodelle.',
          '[ElevenLabs vs. Piper vs. XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — der Cloud-vs-lokal-Vergleich für Leser, die eine verwaltete kommerzielle Option in Betracht ziehen.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Die beste lokale TTS-Engine für Mac (2026): Was wirklich Apple Silicon nutzt',
      description:
        'Piper läuft auf jedem Mac nur auf der CPU. Kokoro kann Metal über MLX nutzen. Die MPS-Unterstützung von XTTS v2 ist ein bekanntes, defektes GitHub-Issue. Hier ist die lokale TTS-Engine, die Sie auf Apple Silicon tatsächlich installieren sollten.',
      url: 'https://promptquorum.com/de/power-local-llm/best-local-tts-mac',
      inLanguage: 'de',
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die lokale Text-zu-Sprache-Engines für Apple-Silicon-Macs evaluieren' },
      about: [
        { '@type': 'Thing', name: 'Piper' },
        { '@type': 'Thing', name: 'Kokoro-82M' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Bark' },
        { '@type': 'Thing', name: 'Apple Silicon' },
        { '@type': 'Thing', name: 'MLX' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/best-local-tts-mac' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Die beste lokale TTS-Engine für Mac (2026)', item: 'https://promptquorum.com/de/power-local-llm/best-local-tts-mac' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/best-local-tts-mac-hero-fr.webp',
    title: 'Meilleur moteur TTS local pour Mac (2026) : ce qui utilise vraiment Apple Silicon',
    seoTitle: 'Meilleur TTS local pour Mac 2026 : guide Apple Silicon',
    intro:
      'La plupart des comparatifs « meilleur TTS local » traitent tous les Mac de la même façon, mais Apple Silicon change quel moteur a réellement du sens. [Piper](/power-local-llm/piper-tts-review) tourne entièrement sur le CPU et ne touche jamais le GPU — sur un Mac Apple Silicon ou Intel, il se comporte à peu près pareil. [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) peut tourner via le framework [MLX](https://github.com/ml-explore/mlx) d\'Apple, grâce au projet communautaire [mlx-audio](https://github.com/Blaizzy/mlx-audio), conçu spécifiquement pour le GPU Metal d\'Apple Silicon. [XTTS v2](/power-local-llm/xtts-v2-review), en revanche, ne prend pas du tout en charge le backend Metal Performance Shaders (MPS) d\'Apple — une [issue GitHub](https://github.com/coqui-ai/TTS/issues/3649) suivie documente que l\'utilisation du périphérique MPS se contente de bloquer — il tourne donc uniquement sur CPU sur tout Mac. Ce guide compare ce que chaque moteur fait réellement sur Apple Silicon, signale où les Mac Intel sont limités aux options CPU uniquement, et indique lequel installer.',
    metaDescription:
      'Piper est CPU uniquement sur tout Mac. Kokoro peut utiliser Metal via MLX. Le support MPS de XTTS v2 est une issue GitHub connue et cassée. Voici le moteur TTS local à installer sur Apple Silicon.',
    twitterDescription:
      'Meilleur TTS local pour Mac 2026 : Piper ne touche jamais le GPU, Kokoro peut tourner via le framework MLX d\'Apple, et le support Metal (MPS) de XTTS v2 est une issue GitHub documentée et cassée. Ce qu\'il faut réellement installer sur Apple Silicon vs. Intel.',
    audience:
      'Développeurs et amateurs construisant des applications vocales, des outils d\'accessibilité ou des pipelines de livres audio sur Mac Apple Silicon, qui doivent choisir un moteur de synthèse vocale local exploitant réellement le matériel.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'meilleur TTS local pour Mac',
    targetKeywords: [
      'meilleur tts local mac',
      'meilleure synthèse vocale apple silicon',
      'kokoro tts mac',
      'piper tts mac',
      'xtts v2 apple silicon',
      'tts local mlx metal',
      'synthèse vocale m4 m5 mac',
      'tts local mac intel',
    ],
    current_models_mentioned: ['Piper', 'Kokoro-82M', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M-series', 'M4', 'M5', 'Intel Mac'],
    leadAnswerBlock:
      '**Kokoro-82M est le meilleur moteur TTS local pour les Mac Apple Silicon si vous voulez l\'accélération GPU, puisqu\'il peut tourner via le framework [MLX](https://github.com/ml-explore/mlx) d\'Apple grâce au projet communautaire [mlx-audio](https://github.com/Blaizzy/mlx-audio) ; [Piper](/power-local-llm/piper-tts-review) est le meilleur choix si vous voulez l\'installation la plus simple et la plus portable, qui se comporte à l\'identique sur Mac Intel et Apple Silicon, puisqu\'il n\'utilise jamais le GPU sur aucun des deux.** [XTTS v2](/power-local-llm/xtts-v2-review) est le choix si vous avez spécifiquement besoin de clonage vocal, mais son support Metal (MPS) est une [issue GitHub](https://github.com/coqui-ai/TTS/issues/3649) documentée et cassée — attendez-vous à des performances CPU uniquement sur tout Mac. [Bark](/power-local-llm/bark-tts-review) a un support MPS expérimental derrière une variable d\'environnement, certaines opérations continuant de retomber sur le CPU.',
    quickAnswerTop: {
      question: 'Quel est le meilleur moteur de synthèse vocale local pour Mac ?',
      answer:
        'Utilisez Kokoro-82M (via le projet communautaire mlx-audio) si vous voulez un moteur TTS local qui tourne via le GPU Metal d\'Apple Silicon en utilisant le framework MLX d\'Apple — il est petit (82 millions de paramètres), sous licence Apache-2.0, et disponible en variantes quantifiées pour réduire l\'utilisation mémoire. Utilisez Piper si vous voulez l\'installation la plus simple possible, fonctionnant à l\'identique sur tout Mac, Apple Silicon ou Intel, puisqu\'il est conçu pour être CPU uniquement et construit pour tourner en temps réel même sur un Raspberry Pi. Utilisez XTTS v2 uniquement si vous avez spécifiquement besoin de cloner une voix à partir d\'un court échantillon audio — mais sachez que son support GPU (MPS) sur Apple Silicon est une issue GitHub documentée et non résolue, il tourne donc uniquement sur CPU sur un Mac, et sa licence Coqui Public Model License (CPML) est non commerciale. Évitez Bark sauf si vous voulez spécifiquement ses sons non vocaux (rires, soupirs) ; son support GPU sur Apple Silicon est explicitement qualifié d\'expérimental par ses propres mainteneurs, et son dépôt GitHub n\'a reçu aucun commit depuis avril 2024.',
      bullets: [
        'Kokoro-82M : 82M paramètres, Apache-2.0, peut tourner via le framework MLX d\'Apple grâce au projet communautaire mlx-audio — le seul moteur ici avec un vrai chemin GPU Apple Silicon.',
        'Piper : CPU uniquement par conception (ONNX Runtime), GPL-3.0-or-later, performances identiques sur Mac Intel et Apple Silicon puisqu\'il n\'utilise le GPU sur aucun des deux.',
        'XTTS v2 : clonage vocal à partir de ~6 secondes d\'audio, mais le support Apple Silicon MPS (Metal) est une issue GitHub documentée et cassée — CPU uniquement sur Mac, licence CPML non commerciale.',
        'Bark : support Apple Silicon MPS expérimental via une variable d\'environnement, certaines opérations continuant de retomber sur le CPU ; licence MIT mais aucun commit depuis avril 2024.',
        'Les Mac Intel sont limités aux chemins CPU uniquement (Piper, et XTTS v2/Bark en mode CPU) — le chemin Kokoro accéléré par MLX nécessite Apple Silicon.',
      ],
      updatedDate: '2026-09-11',
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Meilleur choix par cas d\'usage', anchor: 'best-choice' },
      { label: 'Comparatif : adéquation Apple Silicon', anchor: 'comparison' },
      { label: 'Quels moteurs utilisent vraiment le GPU sur un Mac ?', anchor: 'gpu-acceleration' },
      { label: 'Installer Kokoro avec l\'accélération MLX', anchor: 'install-walkthrough' },
      { label: 'Limitations sur Mac Intel', anchor: 'intel-macs' },
      { label: 'Quand n\'utiliser aucun de ces moteurs', anchor: 'limitations' },
      { label: 'Questions fréquemment posées', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour la synthèse vocale locale sur Apple Silicon, Kokoro-82M est le seul des quatre grands moteurs locaux avec un vrai chemin GPU Metal (via le projet communautaire mlx-audio sur le framework MLX d\'Apple) ; Piper est l\'option CPU uniquement la plus simple, identique sur Mac Intel ; XTTS v2 offre le clonage vocal mais son support MPS sur Apple Silicon est une issue GitHub documentée et cassée ; et le support MPS de Bark est explicitement expérimental.',
          },
          {
            type: 'plain-terms',
            text: 'Tout programme gratuit de synthèse vocale exécutable sur un Mac n\'utilise pas forcément la puce graphique du Mac — certains tournent simplement sur le processeur classique, ce qui fonctionne mais reste plus lent que possible. Kokoro est conçu pour exploiter la puce Apple via un projet appelé MLX ; les autres évitent le GPU par conception (Piper) ou tentent de l\'utiliser mais rencontrent des problèmes non résolus (XTTS v2, Bark).',
          },
        ],
        items: [
          'Kokoro-82M : Apache-2.0, 82M paramètres, tourne via le framework MLX d\'Apple grâce au projet communautaire mlx-audio — le vrai chemin d\'accélération Apple Silicon.',
          'Piper : GPL-3.0-or-later, CPU uniquement par conception via ONNX Runtime — même profil de performance sur Mac Intel et Apple Silicon.',
          'XTTS v2 : licence CPML non commerciale, clonage vocal à partir de ~6 secondes d\'audio, mais le support Metal (MPS) est une issue GitHub suivie et non résolue — CPU uniquement sur Mac.',
          'Bark : licence MIT, support Apple Silicon MPS expérimental derrière une variable d\'environnement, aucun commit sur son dépôt public depuis avril 2024.',
          'Les Mac Intel ne peuvent pas du tout utiliser le chemin Kokoro accéléré par MLX — MLX nécessite Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce guide compare les quatre moteurs TTS locaux que PromptQuorum a testés indépendamment (Piper, Kokoro, XTTS v2, Bark). Chacun dispose de son propre test dédié, lié tout au long de l\'article, pour les commandes d\'installation, le détail des licences et les limitations complètes.',
          },
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: 'Quel moteur TTS local installer réellement ?',
        content: [
          '**Le bon moteur dépend de si vous avez besoin d\'accélération GPU, de clonage vocal, ou de la plus large compatibilité Mac possible — aucun moteur ne gagne sur les trois.** Kokoro est le seul ici avec un vrai chemin GPU Apple Silicon ; Piper est le plus portable ; XTTS v2 est le seul à cloner des voix.',
        ],
        items: [
          '🏆 **Meilleur choix global pour Apple Silicon :** [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) via [mlx-audio](https://github.com/Blaizzy/mlx-audio) — le seul moteur ici avec un vrai chemin GPU Metal, assez petit (82M paramètres) pour tourner confortablement sur tout Mac Apple Silicon.',
          '**Meilleur choix pour la simplicité et la compatibilité Intel :** [Piper](/power-local-llm/piper-tts-review) — CPU uniquement par conception, donc installation et performances identiques que ce soit sur une puce M-series ou un ancien Mac Intel.',
          '**Meilleur choix si vous avez besoin de clonage vocal :** [XTTS v2](/power-local-llm/xtts-v2-review) — clone une voix à partir de ~6 secondes d\'audio de référence, mais tourne uniquement sur CPU sur tout Mac et n\'est licencié que pour un usage non commercial.',
          '**Meilleur choix pour l\'audio expressif non vocal :** [Bark](/power-local-llm/bark-tts-review) — rires, soupirs et musique simple à partir de texte, avec un support GPU Apple Silicon expérimental (partiel), sachant que son dépôt est dormant depuis avril 2024.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser quel moteur ?',
        content: [
          '**Associez le moteur à votre Mac et à votre besoin réel, pas à celui qui a le plus d\'étoiles GitHub.** L\'accélération GPU n\'est importante que si vous générez suffisamment d\'audio, assez souvent, pour que la synthèse CPU uniquement paraisse lente.',
        ],
        items: [
          '🧭 **Mac Apple Silicon, voulez l\'option locale la plus rapide :** Kokoro via mlx-audio — le seul moteur ici écrit pour utiliser Metal via MLX.',
          '🧭 **Tout Mac, y compris un ancien modèle Intel :** Piper — CPU uniquement par conception, rien de spécifique à Apple Silicon à configurer ou dépanner.',
          '🧭 **Besoin de cloner une voix spécifique à partir d\'un court enregistrement :** XTTS v2 — acceptez qu\'il tournera uniquement sur CPU sur un Mac, et que sa licence est non commerciale.',
          '🧭 **Voulez des rires, soupirs ou sons d\'ambiance, pas seulement de la parole :** Bark — mais prévoyez un temps d\'installation supplémentaire pour son chemin Apple Silicon expérimental, et vérifiez d\'abord son statut de maintenance actuel.',
          '❌ **Évitez Bark si vous avez besoin d\'une maintenance active ou de performances garanties** — son dépôt public n\'a affiché aucun commit depuis avril 2024, indépendamment de la question Apple Silicon.',
          '❌ **Évitez XTTS v2 si vous construisez un produit commercial** — sa licence Coqui Public Model License (CPML) est non commerciale, et Coqui AI, l\'entreprise qui l\'a publié, a arrêté ses services payants en décembre 2023.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comment Piper, Kokoro, XTTS v2 et Bark se comparent-ils pour l\'adéquation Apple Silicon ?',
        content: [
          '**Kokoro est le seul moteur de ce comparatif avec un vrai chemin GPU Apple Silicon conçu pour cela ; les autres sont CPU uniquement par conception ou à cause d\'un bug non résolu.** Le tableau ci-dessous note chaque moteur sur les quatre facteurs qui déterminent réellement l\'adéquation Mac : s\'il utilise l\'accélération Apple Silicon, sa consommation mémoire, la fluidité de l\'installation macOS, et la qualité vocale.',
        ],
        columns: ['Moteur', 'Accél. Apple Silicon', 'Empreinte RAM', 'Installation macOS', 'Qualité vocale'],
        rows: [
          {
            'Moteur': '[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)',
            'Accél. Apple Silicon': 'Oui — Metal via MLX (mlx-audio)',
            'Empreinte RAM': 'Faible (82M param., variantes quantif.)',
            'Installation macOS': 'pip install + mlx-audio, Apple Silicon uniquement',
            'Qualité vocale': 'Naturelle, proche de modèles cloud plus grands',
          },
          {
            'Moteur': '[Piper](/power-local-llm/piper-tts-review)',
            'Accél. Apple Silicon': 'Aucune (conception) — CPU, ONNX Runtime',
            'Empreinte RAM': 'Très faible (~50–100Mo par voix)',
            'Installation macOS': '`pip install piper-tts`, aucune config GPU',
            'Qualité vocale': 'Claire, prosodie parfois robotique',
          },
          {
            'Moteur': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Accél. Apple Silicon': 'Aucune — MPS bloque (issue GH #3649)',
            'Empreinte RAM': 'Modérée à élevée (modèle de clonage complet)',
            'Installation macOS': '`pip install coqui-tts`, CPU uniquement sur Mac',
            'Qualité vocale': 'Élevée, clone une voix spécifique',
          },
          {
            'Moteur': '[Bark](/power-local-llm/bark-tts-review)',
            'Accél. Apple Silicon': 'Expérimentale — `SUNO_ENABLE_MPS=True`',
            'Empreinte RAM': 'Élevée (flag small-models pour réduire)',
            'Installation macOS': 'pip install depuis GitHub, pas de paquet PyPI',
            'Qualité vocale': 'Expressive, non déterministe',
          },
        ],
        note: 'Les notes de qualité vocale sont des descriptions qualitatives basées sur l\'architecture documentée de chaque moteur et les tests dédiés de PromptQuorum (liés par ligne), pas un test d\'écoute à l\'aveugle mené par PromptQuorum — aucun score MOS (Mean Opinion Score) ni chiffre de benchmark n\'est revendiqué ici.',
      },
      gpuAcceleration: {
        id: 'gpu-acceleration',
        title: 'Quels moteurs utilisent vraiment le GPU sur un Mac ?',
        content: [
          '**Seul Kokoro a un vrai chemin, conçu pour cela, vers le GPU Metal d\'Apple Silicon ; Piper évite entièrement le GPU par conception, et XTTS v2 comme Bark ont un support GPU non résolu ou partiel sur Mac.** C\'est le facteur le plus important qui distingue ces moteurs sur Apple Silicon, et il est facile de supposer que « tourne sur un Mac » signifie « utilise le GPU du Mac » — ce n\'est généralement pas le cas.',
        ],
        items: [
          '**Kokoro-82M tourne via le framework [MLX](https://github.com/ml-explore/mlx) d\'Apple grâce au projet communautaire [mlx-audio](https://github.com/Blaizzy/mlx-audio), qui nécessite Apple Silicon et Python 3.10–3.12.** MLX est le framework de machine learning open source d\'Apple, construit depuis zéro pour Metal sur l\'architecture à mémoire unifiée d\'Apple Silicon — le même framework que couvrent le [guide LLM local Apple Silicon](/local-llms/apple-silicon-local-llm-guide-2026) et le [comparatif MLX vs. Ollama vs. llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) pour les modèles de langage. Les poids officiels de Kokoro-82M, publiés par hexgrad sur Hugging Face, sont nativement un modèle PyTorch ; le chemin MLX est un portage communautaire, pas une publication officielle d\'Apple ou hexgrad, et mlx-audio propose aussi des variantes quantifiées (bf16, 8-bit, 4-bit) pour réduire l\'utilisation mémoire.',
          '**Piper ne touche jamais le GPU, sur aucune plateforme, Apple Silicon inclus — c\'est un choix de conception, pas une limitation.** Piper convertit le texte en phonèmes avec espeak-ng, puis synthétise l\'audio avec un modèle exporté vers [ONNX Runtime](https://onnxruntime.ai/) pour une inférence CPU rapide. Ce choix de conception explique précisément pourquoi Piper tourne en temps réel même sur un Raspberry Pi — voir le [test Piper TTS](/power-local-llm/piper-tts-review) de PromptQuorum pour l\'architecture complète et les étapes d\'installation.',
          '**Le support Apple Silicon Metal (MPS) de XTTS v2 ne fonctionne actuellement pas.** Une issue suivie sur le [dépôt GitHub coqui-ai/TTS](https://github.com/coqui-ai/TTS/issues/3649), intitulée « Unable to use xtts_v2 with mps device on Apple Silicon », documente que tenter d\'exécuter XTTS v2 sur le périphérique MPS bloque au lieu de se terminer. Le propre projet de Coqui ne liste pas le support GPU Apple Silicon comme officiellement supporté. En pratique, cela signifie que XTTS v2 tourne uniquement sur CPU sur un Mac, via le même [toolkit Coqui TTS](/power-local-llm/coqui-tts-review) (licencié MPL-2.0) qui l\'exécute sur d\'autres plateformes.',
          '**Bark dispose d\'un support Apple Silicon MPS expérimental, protégé par une variable d\'environnement.** Définir `SUNO_ENABLE_MPS=True` active l\'accélération Metal, selon les discussions sur le [dépôt GitHub suno-ai/bark](https://github.com/suno-ai/bark), mais certains opérateurs PyTorch dont Bark dépend n\'étaient pas implémentés pour MPS au moment de la rédaction, entraînant un repli partiel sur CPU pour ces étapes. Bark prend aussi en charge un flag `SUNO_USE_SMALL_MODELS=True` spécifiquement pour réduire la pression mémoire sur les Mac disposant de moins de mémoire unifiée.',
        ],
        note: 'Le statut de l\'accélération Apple Silicon pour les projets TTS maintenus par la communauté peut changer entre les versions plus vite que cet article n\'est mis à jour — vérifiez les issues GitHub et le README de chaque projet avant de supposer que le comportement actuel correspond à ce qui est décrit ici.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Comment installer Kokoro avec l\'accélération MLX sur un Mac ?',
        content:
          'Ce guide installe le projet communautaire mlx-audio pour exécuter Kokoro-82M via le framework MLX d\'Apple, en suivant la configuration documentée dans le [dépôt GitHub mlx-audio](https://github.com/Blaizzy/mlx-audio).',
        numberedItems: [
          {
            title: 'Confirmez que vous êtes sur Apple Silicon avec une version Python prise en charge.',
            whyItMatters: 'mlx-audio nécessite un Mac Apple Silicon (puce M-series) et Python 3.10–3.12 ; MLX ne tourne pas du tout sur Mac Intel, ce chemin est donc réservé à Apple Silicon.',
          },
          {
            title: 'Installez mlx-audio.',
            whyItMatters: 'Exécutez `pip install mlx-audio` dans un environnement virtuel Python. Cela entraîne MLX lui-même (version 0.31 ou ultérieure) avec le pipeline audio.',
          },
          {
            title: 'Lancez une première synthèse en ligne de commande.',
            whyItMatters: 'Le paquet fournit un point d\'entrée CLI qui télécharge les poids de Kokoro-82M à la première utilisation et synthétise un fichier WAV à partir d\'une chaîne de texte — vérifiez le README actuel du projet pour la commande exacte, car les options CLI peuvent changer entre versions.',
          },
          {
            title: 'Choisissez une voix et, éventuellement, une variante de modèle quantifiée.',
            whyItMatters: 'Kokoro-82M propose 54 préréglages de voix dans plusieurs langues. mlx-audio propose aussi des variantes quantifiées bf16, 8-bit et 4-bit — une précision réduite échange un peu de qualité contre une empreinte mémoire plus petite, utile sur un Mac avec moins de mémoire unifiée.',
          },
          {
            title: 'Intégrez-le dans votre propre application Python.',
            whyItMatters: 'Pour tout usage au-delà de la synthèse CLI ponctuelle, appelez directement l\'API Python de mlx-audio plutôt que d\'invoquer la CLI à répétition, ce qui évite le coût de rechargement du modèle à chaque appel.',
          },
        ],
        note: 'Il s\'agit d\'un projet communautaire, pas d\'une publication officielle d\'Apple ou hexgrad — vérifiez les instructions d\'installation actuelles sur le [dépôt mlx-audio](https://github.com/Blaizzy/mlx-audio) avant déploiement, car les noms de commandes et options peuvent changer.',
      },
      intelMacs: {
        id: 'intel-macs',
        title: 'Qu\'est-ce qui change sur un Mac Intel ?',
        content: [
          '**Sur un Mac Intel, le chemin Kokoro accéléré par MLX est totalement indisponible — MLX nécessite Apple Silicon et ne tourne pas du tout sur du matériel Intel.** Tous les autres moteurs ici couverts fonctionnent encore sur Intel, car aucun ne dépend du Neural Engine d\'Apple ni d\'une accélération GPU spécifique à Apple Silicon pour fonctionner ; ils tournent simplement sur CPU.',
        ],
        items: [
          '**Piper n\'est pas affecté par la distinction Intel/Apple Silicon.** Il est CPU uniquement par conception sur toute plateforme, donc un Mac Intel performe de manière comparable à un Mac Apple Silicon spécifiquement pour Piper, génération matérielle mise à part.',
          '**Kokoro tourne encore sur un Mac Intel via ses poids PyTorch officiels, simplement sans le chemin d\'accélération MLX.** Vous perdez le chemin Metal spécifique à Apple Silicon via mlx-audio, mais le modèle lui-même (82M paramètres) est assez petit pour tourner de façon acceptable sur CPU.',
          '**XTTS v2 et Bark tournent de façon identique sur Mac Intel et Apple Silicon, puisque les deux fonctionnent de toute façon uniquement sur CPU sur tout Mac actuellement** — XTTS v2 parce que le support MPS est cassé, et Bark parce que le support MPS est expérimental et partiel. Aucun des deux ne perd de capacité significative en passant d\'Apple Silicon à Intel, puisqu\'aucun n\'a de chemin accéléré mature sur Apple Silicon au départ.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Quand ne pas utiliser aucun de ces moteurs ?',
        content: [
          '**Aucun des quatre moteurs de ce comparatif n\'est le bon choix pour chaque cas d\'usage TTS sur Mac — chacun a des situations où un autre outil, ou une API cloud, convient mieux.**',
        ],
        items: [
          '❌ **Besoin d\'une licence commerciale garantie avec voix clonées.** La licence CPML de XTTS v2 est non commerciale, sans voie confirmée et active vers une licence commerciale depuis que Coqui AI a arrêté ses services payants en décembre 2023 — voir le [comparatif ElevenLabs](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) de PromptQuorum pour une alternative cloud commerciale gérée.',
          '❌ **Besoin d\'une maintenance active garantie.** Le dépôt GitHub public de Bark n\'affiche aucun commit depuis le 5 avril 2024 ; si les correctifs et mises à jour continus comptent pour votre projet, Piper (activement maintenu par l\'Open Home Foundation) ou Kokoro (un écosystème communautaire activement utilisé autour de mlx-audio) sont des paris plus sûrs.',
          '❌ **Besoin d\'un support GPU Apple Silicon de qualité production dès aujourd\'hui, sans dépendance à un projet communautaire.** Le chemin MLX de Kokoro passe par un projet communautaire, pas une publication officielle d\'Apple ou hexgrad — considérez-le comme bon, mais non garanti par un éditeur.',
          '❌ **Besoin de voix interactive en temps réel sur une mémoire Apple Silicon très limitée (configurations de base 8Go) tout en faisant tourner simultanément un grand LLM local.** Empiler un gros processus XTTS v2 ou Bark à côté d\'un LLM sur un Mac à mémoire contrainte peut être serré ; les faibles empreintes de Piper et Kokoro laissent plus de marge.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Quel est le meilleur moteur TTS local pour les Mac Apple Silicon ?',
            a: 'Kokoro-82M, exécuté via le projet communautaire mlx-audio, est le meilleur choix si vous voulez spécifiquement l\'accélération GPU (Metal) Apple Silicon via le framework MLX d\'Apple. Si vous voulez l\'installation la plus simple qui fonctionne pareil sur tout Mac, Piper est le meilleur choix, puisqu\'il est CPU uniquement par conception sur toute plateforme.',
          },
          {
            q: 'Piper utilise-t-il le GPU sur un Mac ?',
            a: 'Non. Piper est CPU uniquement par conception sur toute plateforme, Apple Silicon et Mac Intel inclus. Il convertit le texte en phonèmes avec espeak-ng et synthétise l\'audio via ONNX Runtime, ce qui explique pourquoi il tourne en temps réel même sur un Raspberry Pi sans aucun GPU.',
          },
          {
            q: 'Kokoro-82M peut-il tourner sur Apple Silicon avec accélération GPU ?',
            a: 'Oui, via le projet communautaire mlx-audio, qui exécute Kokoro-82M via le framework MLX d\'Apple — construit spécifiquement pour Metal sur l\'architecture à mémoire unifiée d\'Apple Silicon. Les poids officiels de Kokoro-82M par hexgrad sont un modèle PyTorch ; le chemin MLX est un portage communautaire, pas une publication officielle, et nécessite un Mac Apple Silicon (les Mac Intel ne peuvent pas l\'utiliser) et Python 3.10–3.12.',
          },
          {
            q: 'XTTS v2 fonctionne-t-il sur Apple Silicon ?',
            a: 'Il fonctionne, mais uniquement sur CPU. Le support du périphérique Metal (MPS) de XTTS v2 est une issue documentée et non résolue suivie sur le dépôt GitHub coqui-ai/TTS (issue #3649), où tenter d\'utiliser le périphérique MPS bloque au lieu de se terminer. Le projet de Coqui ne prend pas officiellement en charge l\'accélération GPU Apple Silicon pour XTTS v2, attendez-vous donc à des performances CPU uniquement sur tout Mac.',
          },
          {
            q: 'Bark est-il accéléré sur Apple Silicon ?',
            a: 'Partiellement, et expérimentalement. Définir la variable d\'environnement SUNO_ENABLE_MPS=True active l\'accélération GPU Metal pour Bark, mais certains opérateurs PyTorch dont il dépend n\'ont pas été implémentés pour MPS, donc certaines étapes de traitement continuent de retomber sur CPU. Les mainteneurs de Bark décrivent eux-mêmes ce support comme expérimental, pas prêt pour la production.',
          },
          {
            q: 'Puis-je utiliser l\'un de ces moteurs sur un Mac Intel ?',
            a: 'Piper, XTTS v2 et Bark tournent tous sur Mac Intel, puisqu\'aucun ne nécessite d\'accélération spécifique à Apple Silicon pour fonctionner — ils tournent soit sur CPU par conception (Piper), soit parce que leurs chemins d\'accélération GPU sont de toute façon non résolus ou partiels (XTTS v2, Bark). Le chemin accéléré par MLX de Kokoro nécessite spécifiquement Apple Silicon et ne tourne pas du tout sur un Mac Intel, bien que les poids PyTorch officiels de Kokoro tournent quand même sur Intel sans accélération MLX.',
          },
          {
            q: 'Lequel de ces moteurs peut cloner une voix spécifique ?',
            a: 'Seul XTTS v2, parmi les quatre couverts ici, clone une voix à partir d\'un court extrait audio de référence (à partir de 6 secondes seulement, selon sa fiche modèle officielle). Piper, Kokoro et Bark utilisent tous des voix pré-entraînées ou préréglées plutôt que de cloner une voix arbitraire à la volée. Voir le test XTTS v2 dédié de PromptQuorum pour les détails complets du clonage et la licence.',
          },
          {
            q: 'L\'un de ces moteurs TTS locaux nécessite-t-il une licence payante pour un usage sur Mac Apple Silicon ?',
            a: 'Aucun moteur couvert ici ne facture spécifiquement l\'usage macOS ou Apple Silicon. Piper (GPL-3.0-or-later), Kokoro (Apache-2.0) et Bark (MIT) sont tous des logiciels gratuits et open source, quelle que soit la plateforme. XTTS v2 est gratuit d\'usage mais sous une licence non commerciale (CPML) — cette restriction s\'applique de la même façon sur Apple Silicon, Intel, Windows ou Linux, et n\'a rien à voir avec le Mac que vous utilisez.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Spécifiquement sur Apple Silicon, Kokoro-82M se démarque car c\'est le seul de ces quatre moteurs avec un vrai chemin, conçu pour cela, vers le GPU Metal du Mac, via le projet communautaire mlx-audio construit sur le framework MLX d\'Apple — et il est assez petit (82 millions de paramètres, licencié Apache-2.0) pour que cette accélération vaille la peine d\'être configurée. Piper reste le bon choix par défaut quand la simplicité et la cohérence multi-matériel comptent plus que la vitesse brute : il est CPU uniquement partout, donc rien de spécifique à Apple Silicon à configurer, dépanner, ou craindre de voir régresser sur un Mac Intel. XTTS v2 vaut la perte de performance CPU uniquement seulement si vous avez spécifiquement besoin de clonage vocal et pouvez vivre avec sa licence non commerciale ; Bark mérite considération uniquement pour ses sons non vocaux distinctifs, avec la réserve que son accélération Apple Silicon comme son statut de maintenance global restent incertains. En cas de doute, commencez par Piper pour l\'installation la plus simple, passez à Kokoro via mlx-audio une fois confirmé que vous voulez l\'accélération Metal, et n\'utilisez XTTS v2 que lorsque le clonage vocal est une exigence stricte.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Kokoro-82M sur Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — la fiche modèle officielle : paramètres, licence et architecture.',
          '[mlx-audio sur GitHub](https://github.com/Blaizzy/mlx-audio) — le projet communautaire qui exécute Kokoro-82M via le framework MLX d\'Apple sur Apple Silicon.',
          '[Issue GitHub coqui-ai/TTS #3649](https://github.com/coqui-ai/TTS/issues/3649) — « Unable to use xtts_v2 with mps device on Apple Silicon », documentant le blocage MPS non résolu.',
          '[Dépôt GitHub suno-ai/bark](https://github.com/suno-ai/bark) — issues et pull requests documentant le support Apple Silicon MPS expérimental via SUNO_ENABLE_MPS.',
          '[Framework Apple MLX](https://github.com/ml-explore/mlx) — le framework de machine learning open source officiel d\'Apple avec accélération GPU Metal native pour Apple Silicon.',
          '[Test Piper TTS](/power-local-llm/piper-tts-review) — le test dédié de PromptQuorum, incluant les commandes d\'installation et l\'historique des licences.',
          '[Test XTTS v2](/power-local-llm/xtts-v2-review), [Test Coqui TTS](/power-local-llm/coqui-tts-review) et [Test Bark TTS](/power-local-llm/bark-tts-review) — les tests dédiés de PromptQuorum pour les autres moteurs couverts ici.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test Piper TTS](/power-local-llm/piper-tts-review) — le moteur rapide, CPU uniquement, sous licence permissive couvert dans ce comparatif, en profondeur.',
          '[Test XTTS v2](/power-local-llm/xtts-v2-review) — le modèle de clonage vocal couvert ici, incluant sa licence CPML non commerciale.',
          '[Test Coqui TTS](/power-local-llm/coqui-tts-review) — le toolkit qui exécute XTTS v2 (et d\'autres modèles), sous licence MPL-2.0.',
          '[Test Bark TTS](/power-local-llm/bark-tts-review) — le moteur TTS local expressif et non vocal couvert ici, incluant son statut de maintenance.',
          '[Guide LLM local Apple Silicon](/local-llms/apple-silicon-local-llm-guide-2026) — niveaux de mémoire, accélération GPU Metal et choix de Mac pour l\'IA locale au-delà du TTS.',
          '[MLX vs. Ollama vs. llama.cpp sur Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — le même framework MLX couvert ici pour Kokoro, expliqué pour les modèles de langage locaux.',
          '[ElevenLabs vs. Piper vs. XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — le comparatif cloud vs. local pour les lecteurs envisageant une option commerciale gérée.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleur moteur TTS local pour Mac (2026) : ce qui utilise vraiment Apple Silicon',
      description:
        'Piper est CPU uniquement sur tout Mac. Kokoro peut utiliser Metal via MLX. Le support MPS de XTTS v2 est une issue GitHub connue et cassée. Voici le moteur TTS local à installer sur Apple Silicon.',
      url: 'https://promptquorum.com/fr/power-local-llm/best-local-tts-mac',
      inLanguage: 'fr',
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs évaluant des moteurs de synthèse vocale locaux pour Mac Apple Silicon' },
      about: [
        { '@type': 'Thing', name: 'Piper' },
        { '@type': 'Thing', name: 'Kokoro-82M' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Bark' },
        { '@type': 'Thing', name: 'Apple Silicon' },
        { '@type': 'Thing', name: 'MLX' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/best-local-tts-mac' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Meilleur moteur TTS local pour Mac (2026)', item: 'https://promptquorum.com/fr/power-local-llm/best-local-tts-mac' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/best-local-tts-mac-hero-es.webp',
    title: 'Mejor motor TTS local para Mac (2026): qué usa realmente Apple Silicon',
    seoTitle: 'Mejor TTS local para Mac 2026: guía Apple Silicon',
    intro:
      'La mayoría de las comparativas de "mejor TTS local" tratan todos los Mac igual, pero Apple Silicon cambia qué motor tiene realmente sentido. [Piper](/power-local-llm/piper-tts-review) corre completamente en la CPU y nunca toca la GPU — en un Mac Apple Silicon o uno Intel, rinde más o menos igual. [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) puede correr a través del framework [MLX](https://github.com/ml-explore/mlx) propio de Apple mediante el proyecto comunitario [mlx-audio](https://github.com/Blaizzy/mlx-audio), diseñado específicamente para la GPU Metal de Apple Silicon. [XTTS v2](/power-local-llm/xtts-v2-review), en cambio, no soporta en absoluto el backend Metal Performance Shaders (MPS) de Apple — un [issue de GitHub](https://github.com/coqui-ai/TTS/issues/3649) rastreado documenta que usar el dispositivo MPS simplemente se cuelga — así que corre solo en CPU en cualquier Mac. Esta guía compara qué hace realmente cada motor en Apple Silicon, señala dónde los Mac Intel quedan limitados a las opciones solo-CPU, y te dice cuál instalar.',
    metaDescription:
      'Piper es solo CPU en todo Mac. Kokoro puede usar Metal vía MLX. El soporte MPS de XTTS v2 es un issue de GitHub conocido y roto. Este es el motor TTS local que realmente hay que instalar en Apple Silicon.',
    twitterDescription:
      'Mejor TTS local para Mac 2026: Piper nunca toca la GPU, Kokoro puede correr vía el framework MLX de Apple, y el soporte Metal (MPS) de XTTS v2 es un issue de GitHub documentado y roto. Lo que realmente hay que instalar en Apple Silicon vs. Intel.',
    audience:
      'Desarrolladores y aficionados que construyen apps de voz, herramientas de accesibilidad o pipelines de audiolibros en Mac Apple Silicon y necesitan elegir un motor de texto a voz local que realmente aproveche el hardware.',
    readTime: '13 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mejor TTS local para Mac',
    targetKeywords: [
      'mejor tts local mac',
      'mejor texto a voz apple silicon',
      'kokoro tts mac',
      'piper tts mac',
      'xtts v2 apple silicon',
      'tts local mlx metal',
      'texto a voz m4 m5 mac',
      'tts local mac intel',
    ],
    current_models_mentioned: ['Piper', 'Kokoro-82M', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M-series', 'M4', 'M5', 'Intel Mac'],
    leadAnswerBlock:
      '**Kokoro-82M es el mejor motor TTS local para Mac Apple Silicon si quieres aceleración por GPU, ya que puede correr a través del framework [MLX](https://github.com/ml-explore/mlx) propio de Apple mediante el proyecto comunitario [mlx-audio](https://github.com/Blaizzy/mlx-audio); [Piper](/power-local-llm/piper-tts-review) es la mejor opción si quieres la instalación más simple y portable, que se comporta igual en Mac Intel y Apple Silicon, ya que nunca usa la GPU en ninguno de los dos.** [XTTS v2](/power-local-llm/xtts-v2-review) es la opción si necesitas específicamente clonación de voz, pero su soporte Metal (MPS) es un [issue de GitHub](https://github.com/coqui-ai/TTS/issues/3649) documentado y roto — espera rendimiento solo-CPU en cualquier Mac. [Bark](/power-local-llm/bark-tts-review) tiene soporte MPS experimental detrás de una variable de entorno, con algunas operaciones que aún recaen en la CPU.',
    quickAnswerTop: {
      question: '¿Cuál es el mejor motor de texto a voz local para Mac?',
      answer:
        'Usa Kokoro-82M (vía el proyecto comunitario mlx-audio) si quieres un motor TTS local que corra en la GPU Metal de Apple Silicon usando el framework MLX propio de Apple — es pequeño (82 millones de parámetros), con licencia Apache-2.0, y disponible en variantes cuantizadas para menor uso de memoria. Usa Piper si quieres la configuración más simple posible que funcione igual en cualquier Mac, Apple Silicon o Intel, ya que es solo-CPU por diseño y fue construido para correr en tiempo real incluso en una Raspberry Pi. Usa XTTS v2 solo si necesitas específicamente clonar una voz a partir de una muestra de audio corta — pero ten en cuenta que su soporte de GPU (MPS) en Apple Silicon es un issue de GitHub documentado y sin resolver, así que corre solo en CPU en un Mac, y su licencia Coqui Public Model License (CPML) es no comercial. Evita Bark a menos que quieras específicamente sus sonidos no verbales (risas, suspiros); su soporte de GPU en Apple Silicon está explícitamente etiquetado como experimental por sus propios mantenedores, y su repositorio de GitHub no ha tenido commits desde abril de 2024.',
      bullets: [
        'Kokoro-82M: 82M parámetros, Apache-2.0, puede correr vía el framework MLX de Apple mediante el proyecto comunitario mlx-audio — el único motor aquí con una ruta real de GPU Apple Silicon.',
        'Piper: solo-CPU por diseño (ONNX Runtime), GPL-3.0-or-later, rinde igual en Mac Intel y Apple Silicon ya que nunca usa la GPU en ninguno de los dos.',
        'XTTS v2: clonación de voz a partir de ~6 segundos de audio, pero el soporte Apple Silicon MPS (Metal) es un issue de GitHub documentado y roto — solo CPU en Mac, licencia CPML no comercial.',
        'Bark: soporte Apple Silicon MPS experimental vía una variable de entorno, con algunas operaciones que aún recaen en la CPU; licencia MIT pero sin commits desde abril de 2024.',
        'Los Mac Intel quedan limitados a las rutas solo-CPU (Piper, y XTTS v2/Bark en modo CPU) — la ruta Kokoro acelerada por MLX requiere Apple Silicon.',
      ],
      updatedDate: '2026-09-11',
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Mejor opción por caso de uso', anchor: 'best-choice' },
      { label: 'Comparativa: idoneidad en Apple Silicon', anchor: 'comparison' },
      { label: '¿Qué motores usan realmente la GPU en un Mac?', anchor: 'gpu-acceleration' },
      { label: 'Instalar Kokoro con aceleración MLX', anchor: 'install-walkthrough' },
      { label: 'Limitaciones en Mac Intel', anchor: 'intel-macs' },
      { label: 'Cuándo no usar ninguno de estos motores', anchor: 'limitations' },
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
            text: 'Para texto a voz local en Apple Silicon, Kokoro-82M es el único de los cuatro motores locales principales con una ruta real de GPU Metal (vía el proyecto comunitario mlx-audio sobre el framework MLX de Apple); Piper es la opción solo-CPU más simple, con el mismo comportamiento en Mac Intel; XTTS v2 ofrece clonación de voz pero su soporte MPS en Apple Silicon es un issue de GitHub documentado y roto; y el soporte MPS de Bark es explícitamente experimental.',
          },
          {
            type: 'plain-terms',
            text: 'No todo programa gratuito de texto a voz que puedes correr en un Mac usa realmente el chip gráfico del Mac — algunos simplemente corren en el procesador normal, lo cual funciona bien pero es más lento de lo que podría ser. Kokoro es el que está construido para aprovechar el propio diseño de chip de Apple a través de un proyecto llamado MLX; los otros o bien evitan la GPU por diseño (Piper) o intentan usarla pero chocan con problemas sin resolver (XTTS v2, Bark).',
          },
        ],
        items: [
          'Kokoro-82M: Apache-2.0, 82M parámetros, corre vía el framework MLX de Apple mediante el proyecto comunitario mlx-audio — la ruta real de aceleración en Apple Silicon.',
          'Piper: GPL-3.0-or-later, solo-CPU por diseño vía ONNX Runtime — mismo perfil de rendimiento en Mac Intel y Apple Silicon.',
          'XTTS v2: licencia CPML no comercial, clonación de voz a partir de ~6 segundos de audio, pero el soporte Metal (MPS) es un issue de GitHub rastreado y sin resolver — corre solo con CPU en Mac.',
          'Bark: licencia MIT, soporte Apple Silicon MPS experimental detrás de una variable de entorno, sin commits en su repositorio público desde abril de 2024.',
          'Los Mac Intel no pueden usar en absoluto la ruta Kokoro acelerada por MLX — MLX requiere Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta guía compara los cuatro motores TTS locales que PromptQuorum ha revisado de forma independiente (Piper, Kokoro, XTTS v2, Bark). Cada uno tiene su propia reseña dedicada, enlazada a lo largo del artículo, con comandos de instalación, detalles de licencia y limitaciones completas.',
          },
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '¿Qué motor TTS local deberías instalar realmente?',
        content: [
          '**El motor correcto depende de si necesitas aceleración por GPU, clonación de voz, o la mayor compatibilidad posible con Mac — ningún motor gana en los tres frentes.** Kokoro es el único aquí con una ruta real de GPU Apple Silicon; Piper es el más portable; XTTS v2 es el único que clona voces.',
        ],
        items: [
          '🏆 **Mejor opción general para Apple Silicon:** [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) vía [mlx-audio](https://github.com/Blaizzy/mlx-audio) — el único motor aquí con una ruta real de GPU Metal, lo bastante pequeño (82M parámetros) para correr cómodamente en cualquier Mac Apple Silicon.',
          '**Mejor opción para simplicidad y compatibilidad con Intel:** [Piper](/power-local-llm/piper-tts-review) — solo-CPU por diseño, así que la instalación y el rendimiento son idénticos tanto en un chip serie M como en un Mac Intel antiguo.',
          '**Mejor opción si necesitas clonación de voz:** [XTTS v2](/power-local-llm/xtts-v2-review) — clona una voz a partir de ~6 segundos de audio de referencia, pero corre solo con CPU en cualquier Mac y su licencia es exclusivamente para uso no comercial.',
          '**Mejor opción para audio expresivo no verbal:** [Bark](/power-local-llm/bark-tts-review) — risas, suspiros y música simple a partir de texto, con soporte de GPU Apple Silicon experimental (parcial), aunque su repositorio está inactivo desde abril de 2024.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '¿Quién debería usar cada motor?',
        content: [
          '**Elige el motor según tu Mac y tu necesidad real, no según cuál tenga más estrellas en GitHub.** La aceleración por GPU solo importa si generas suficiente audio, con suficiente frecuencia, como para que la síntesis solo-CPU se sienta lenta.',
        ],
        items: [
          '🧭 **Mac Apple Silicon, quieres la opción local más rápida:** Kokoro vía mlx-audio — el único motor aquí escrito para usar Metal a través de MLX.',
          '🧭 **Cualquier Mac, incluido un modelo Intel antiguo:** Piper — solo-CPU por diseño, así que no hay nada específico de Apple Silicon que configurar o solucionar.',
          '🧭 **Necesitas clonar una voz específica a partir de una grabación corta:** XTTS v2 — acepta que correrá solo con CPU en un Mac, y que su licencia es no comercial.',
          '🧭 **Quieres risas, suspiros o sonido ambiente, no solo voz:** Bark — pero presupuesta tiempo extra de instalación por su ruta experimental en Apple Silicon, y confirma primero su estado de mantenimiento actual.',
          '❌ **Evita Bark si necesitas mantenimiento activo o rendimiento garantizado** — su repositorio público no muestra commits desde abril de 2024, independientemente del tema Apple Silicon.',
          '❌ **Evita XTTS v2 si estás construyendo un producto comercial** — su licencia Coqui Public Model License (CPML) es no comercial, y Coqui AI, la empresa que lo lanzó, cerró sus servicios de pago en diciembre de 2023.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '¿Cómo se comparan Piper, Kokoro, XTTS v2 y Bark en idoneidad para Apple Silicon?',
        content: [
          '**Kokoro es el único motor de esta comparativa con una ruta real y construida específicamente para la GPU de Apple Silicon; el resto son solo-CPU por diseño o por un bug sin resolver.** La tabla siguiente puntúa cada motor en los cuatro factores que realmente determinan la idoneidad en Mac: si usa aceleración Apple Silicon, cuánta memoria necesita, cuánta fricción tiene la instalación en macOS, y la calidad de voz.',
        ],
        columns: ['Motor', 'Aceleración Apple Silicon', 'Uso de RAM', 'Instalación macOS', 'Calidad de voz'],
        rows: [
          {
            'Motor': '[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)',
            'Aceleración Apple Silicon': 'Sí — Metal vía MLX (mlx-audio)',
            'Uso de RAM': 'Bajo (82M param., existen variantes cuantiz.)',
            'Instalación macOS': 'pip install + mlx-audio, solo Apple Silicon',
            'Calidad de voz': 'Natural, cercana a modelos cloud grandes',
          },
          {
            'Motor': '[Piper](/power-local-llm/piper-tts-review)',
            'Aceleración Apple Silicon': 'Ninguna (diseño) — CPU, ONNX Runtime',
            'Uso de RAM': 'Muy bajo (~50–100MB por voz)',
            'Instalación macOS': '`pip install piper-tts`, sin config de GPU',
            'Calidad de voz': 'Clara, prosodia algo robótica',
          },
          {
            'Motor': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Aceleración Apple Silicon': 'Ninguna — MPS se cuelga (issue GH #3649)',
            'Uso de RAM': 'Moderado-alto (modelo de clonación completo)',
            'Instalación macOS': '`pip install coqui-tts`, solo CPU en Mac',
            'Calidad de voz': 'Alta, clona una voz específica',
          },
          {
            'Motor': '[Bark](/power-local-llm/bark-tts-review)',
            'Aceleración Apple Silicon': 'Experimental — `SUNO_ENABLE_MPS=True`',
            'Uso de RAM': 'Alto (flag small-models para reducir)',
            'Instalación macOS': 'pip install desde GitHub, sin paquete PyPI',
            'Calidad de voz': 'Expresiva, no determinista',
          },
        ],
        note: 'Las valoraciones de calidad de voz son descripciones cualitativas basadas en la arquitectura documentada de cada motor y en las reseñas dedicadas de PromptQuorum (enlazadas en cada fila), no una prueba de escucha a ciegas realizada por PromptQuorum — no se afirma aquí ningún puntaje MOS (Mean Opinion Score) numérico ni cifra de benchmark.',
      },
      gpuAcceleration: {
        id: 'gpu-acceleration',
        title: '¿Qué motores usan realmente la GPU en un Mac?',
        content: [
          '**Solo Kokoro tiene una ruta real, construida específicamente, hacia la GPU Metal de Apple Silicon; Piper evita la GPU por completo por diseño, y tanto XTTS v2 como Bark tienen soporte de GPU sin resolver o parcial en Mac.** Este es el factor individual más importante que separa a estos motores en Apple Silicon, y es fácil asumir que "funciona en un Mac" significa "usa la GPU del Mac" — normalmente no es así.',
        ],
        items: [
          '**Kokoro-82M corre a través del framework [MLX](https://github.com/ml-explore/mlx) propio de Apple mediante el proyecto comunitario [mlx-audio](https://github.com/Blaizzy/mlx-audio), que requiere Apple Silicon y Python 3.10–3.12.** MLX es el framework de machine learning open source de Apple, construido desde cero para Metal sobre la arquitectura de memoria unificada de Apple Silicon — el mismo framework que cubre la [guía de LLM local para Apple Silicon](/local-llms/apple-silicon-local-llm-guide-2026) y la [comparativa MLX vs. Ollama vs. llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) para modelos de lenguaje. Los pesos oficiales de Kokoro-82M, publicados por hexgrad en Hugging Face, son nativamente un modelo PyTorch; la ruta MLX es un port comunitario, no una publicación oficial de Apple o hexgrad, y mlx-audio también ofrece variantes cuantizadas (bf16, 8-bit, 4-bit) para menor uso de memoria.',
          '**Piper nunca toca la GPU en ninguna plataforma, Apple Silicon incluido — esto es por diseño, no una limitación.** Piper convierte texto a fonemas con espeak-ng, y luego sintetiza audio con un modelo exportado a [ONNX Runtime](https://onnxruntime.ai/) para inferencia rápida en CPU. Esa decisión de diseño es exactamente por qué Piper corre en tiempo real incluso en una Raspberry Pi — ver la [reseña de Piper TTS](/power-local-llm/piper-tts-review) de PromptQuorum para la arquitectura completa y los pasos de instalación.',
          '**El soporte de Metal (MPS) de XTTS v2 en Apple Silicon actualmente no funciona.** Un issue rastreado en el [repositorio de GitHub coqui-ai/TTS](https://github.com/coqui-ai/TTS/issues/3649), titulado "Unable to use xtts_v2 with mps device on Apple Silicon", documenta que intentar correr XTTS v2 en el dispositivo MPS se cuelga en lugar de completarse. El propio proyecto de Coqui no lista el soporte de GPU en Apple Silicon como oficialmente soportado. En la práctica, esto significa que XTTS v2 corre solo con CPU en un Mac, a través del mismo [toolkit Coqui TTS](/power-local-llm/coqui-tts-review) (con licencia MPL-2.0) que lo ejecuta en otras plataformas.',
          '**Bark tiene soporte experimental de Apple Silicon MPS, protegido detrás de una variable de entorno.** Establecer `SUNO_ENABLE_MPS=True` activa la aceleración Metal, según la discusión en el [repositorio de GitHub suno-ai/bark](https://github.com/suno-ai/bark), pero algunos operadores de PyTorch de los que depende Bark no estaban implementados para MPS al momento de escribir esto, causando un fallback parcial a CPU para esos pasos. Bark también soporta un flag `SUNO_USE_SMALL_MODELS=True` específicamente para reducir la presión de memoria en Mac con menos memoria unificada.',
        ],
        note: 'El estado de la aceleración en Apple Silicon para proyectos TTS mantenidos por la comunidad puede cambiar entre versiones más rápido de lo que este artículo se actualiza — revisa los issues de GitHub y el README de cada proyecto antes de asumir que el comportamiento actual coincide con lo descrito aquí.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: '¿Cómo instalar Kokoro con aceleración MLX en un Mac?',
        content:
          'Esta guía instala el proyecto comunitario mlx-audio para correr Kokoro-82M a través del framework MLX de Apple, siguiendo la configuración documentada en el [repositorio de GitHub mlx-audio](https://github.com/Blaizzy/mlx-audio).',
        numberedItems: [
          {
            title: 'Confirma que estás en Apple Silicon con una versión de Python compatible.',
            whyItMatters: 'mlx-audio requiere un Mac Apple Silicon (chip serie M) y Python 3.10–3.12; MLX no corre en absoluto en Mac Intel, así que esta ruta es exclusiva de Apple Silicon.',
          },
          {
            title: 'Instala mlx-audio.',
            whyItMatters: 'Ejecuta `pip install mlx-audio` en un entorno virtual de Python. Esto trae MLX en sí (versión 0.31 o posterior) junto con el pipeline de audio.',
          },
          {
            title: 'Ejecuta una primera síntesis desde la línea de comandos.',
            whyItMatters: 'El paquete incluye un punto de entrada CLI que descarga los pesos de Kokoro-82M en el primer uso y sintetiza un archivo WAV a partir de una cadena de texto — revisa el README actual del proyecto para el comando exacto, ya que las opciones de la CLI pueden cambiar entre versiones.',
          },
          {
            title: 'Elige una voz y, opcionalmente, una variante de modelo cuantizada.',
            whyItMatters: 'Kokoro-82M incluye 54 presets de voz en varios idiomas. mlx-audio también ofrece variantes cuantizadas bf16, 8-bit y 4-bit — una precisión menor intercambia algo de calidad por un menor uso de memoria, útil en un Mac con menos memoria unificada.',
          },
          {
            title: 'Intégralo en tu propia aplicación Python.',
            whyItMatters: 'Para cualquier uso más allá de la síntesis puntual por CLI, llama directamente a la API de Python de mlx-audio en lugar de invocar la CLI repetidamente, evitando el costo de recargar el modelo en cada llamada.',
          },
        ],
        note: 'Este es un proyecto comunitario, no una publicación oficial de Apple o hexgrad — verifica las instrucciones de instalación actuales en el [repositorio mlx-audio](https://github.com/Blaizzy/mlx-audio) antes de desplegar, ya que los nombres de comandos y flags pueden cambiar.',
      },
      intelMacs: {
        id: 'intel-macs',
        title: '¿Qué cambia en un Mac Intel?',
        content: [
          '**En un Mac Intel, la ruta Kokoro acelerada por MLX no está disponible en absoluto — MLX requiere Apple Silicon y no corre en hardware Intel.** Todos los demás motores cubiertos aquí siguen funcionando en Intel, porque ninguno depende del Neural Engine de Apple ni de aceleración de GPU específica de Apple Silicon para funcionar; simplemente corren en CPU.',
        ],
        items: [
          '**Piper no se ve afectado por la distinción Intel/Apple Silicon.** Es solo-CPU por diseño en toda plataforma, así que un Mac Intel rinde de forma comparable a un Mac Apple Silicon específicamente para Piper, dejando aparte la generación de hardware.',
          '**Kokoro sigue corriendo en un Mac Intel a través de sus pesos PyTorch oficiales, simplemente sin la ruta de aceleración MLX.** Pierdes la ruta Metal específica de Apple Silicon vía mlx-audio, pero el modelo en sí (82M parámetros) es lo bastante pequeño para correr de forma aceptable en CPU.',
          '**XTTS v2 y Bark corren de forma idéntica en Mac Intel y Apple Silicon, ya que ambos actualmente corren solo con CPU en cualquier Mac de todos modos** — XTTS v2 porque el soporte MPS está roto, y Bark porque el soporte MPS es experimental y parcial. Ninguno de los dos pierde capacidad significativa al pasar de Apple Silicon a Intel, ya que ninguno tiene una ruta acelerada madura en Apple Silicon para empezar.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '¿Cuándo no deberías usar ninguno de estos motores?',
        content: [
          '**Ninguno de los cuatro motores de esta comparativa es la opción correcta para todo caso de uso de TTS en Mac — cada uno tiene situaciones donde otra herramienta, o una API cloud, encaja mejor.**',
        ],
        items: [
          '❌ **Necesitas una licencia comercial garantizada con voces clonadas.** La licencia CPML de XTTS v2 es no comercial, sin una vía activa confirmada hacia una licencia comercial desde que Coqui AI cerró sus servicios de pago en diciembre de 2023 — ver la [comparativa con ElevenLabs](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) de PromptQuorum para una alternativa cloud comercial gestionada.',
          '❌ **Necesitas mantenimiento activo garantizado.** El repositorio público de GitHub de Bark no muestra commits desde el 5 de abril de 2024; si las correcciones y actualizaciones continuas importan para tu proyecto, Piper (mantenido activamente por Open Home Foundation) o Kokoro (un ecosistema comunitario activamente usado en torno a mlx-audio) son apuestas más seguras.',
          '❌ **Necesitas soporte de GPU en Apple Silicon de nivel producción hoy mismo, sin depender de un proyecto comunitario.** La ruta MLX de Kokoro pasa por un proyecto comunitario, no una publicación oficial de Apple o hexgrad — trátala como buena, pero no garantizada por un proveedor.',
          '❌ **Necesitas voz interactiva en tiempo real en memoria Apple Silicon muy limitada (configuraciones base de 8GB) mientras también corres un LLM local grande a la vez.** Apilar un proceso grande de XTTS v2 o Bark junto a un LLM en un Mac con memoria ajustada puede ser justo; las huellas pequeñas de Piper y Kokoro dejan más margen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es el mejor motor TTS local para Mac Apple Silicon?',
            a: 'Kokoro-82M, ejecutado a través del proyecto comunitario mlx-audio, es la mejor opción si quieres específicamente aceleración de GPU (Metal) en Apple Silicon vía el framework MLX propio de Apple. Si quieres la instalación más simple que funcione igual en cualquier Mac, Piper es la mejor opción, ya que es solo-CPU por diseño en toda plataforma.',
          },
          {
            q: '¿Piper usa la GPU en un Mac?',
            a: 'No. Piper es solo-CPU por diseño en toda plataforma, incluidos Apple Silicon y Mac Intel. Convierte texto a fonemas con espeak-ng y sintetiza audio a través de ONNX Runtime, por lo que corre en tiempo real incluso en una Raspberry Pi sin ninguna GPU.',
          },
          {
            q: '¿Puede Kokoro-82M correr en Apple Silicon con aceleración por GPU?',
            a: 'Sí, a través del proyecto comunitario mlx-audio, que ejecuta Kokoro-82M vía el framework MLX propio de Apple — construido específicamente para Metal sobre la arquitectura de memoria unificada de Apple Silicon. Los pesos oficiales de Kokoro-82M de hexgrad son un modelo PyTorch; la ruta MLX es un port comunitario, no una publicación oficial, y requiere un Mac Apple Silicon (los Mac Intel no pueden usarla) y Python 3.10–3.12.',
          },
          {
            q: '¿XTTS v2 funciona en Apple Silicon?',
            a: 'Funciona, pero solo con CPU. El soporte del dispositivo Metal (MPS) de XTTS v2 es un issue documentado y sin resolver rastreado en el repositorio de GitHub coqui-ai/TTS (issue #3649), donde intentar usar el dispositivo MPS se cuelga en lugar de completarse. El proyecto de Coqui no soporta oficialmente la aceleración por GPU en Apple Silicon para XTTS v2, así que espera rendimiento solo-CPU en cualquier Mac.',
          },
          {
            q: '¿Bark está acelerado en Apple Silicon?',
            a: 'Parcialmente, y de forma experimental. Establecer la variable de entorno SUNO_ENABLE_MPS=True activa la aceleración por GPU Metal para Bark, pero algunos operadores de PyTorch de los que depende no se han implementado para MPS, así que algunos pasos de procesamiento aún recaen en la CPU. Los propios mantenedores de Bark describen este soporte como experimental, no listo para producción.',
          },
          {
            q: '¿Puedo usar alguno de estos motores en un Mac Intel?',
            a: 'Piper, XTTS v2 y Bark corren todos en Mac Intel, ya que ninguno requiere aceleración específica de Apple Silicon para funcionar — corren solo con CPU ya sea por diseño (Piper) o porque sus rutas de aceleración por GPU están de todos modos sin resolver o son parciales (XTTS v2, Bark). La ruta acelerada por MLX de Kokoro requiere específicamente Apple Silicon y no corre en absoluto en un Mac Intel, aunque los pesos PyTorch oficiales de Kokoro sí corren en Intel sin aceleración MLX.',
          },
          {
            q: '¿Cuál de estos motores puede clonar una voz específica?',
            a: 'Solo XTTS v2, entre los cuatro cubiertos aquí, clona una voz a partir de un clip de audio de referencia corto (tan solo 6 segundos, según su ficha oficial de modelo). Piper, Kokoro y Bark usan todos voces pre-entrenadas o preestablecidas en lugar de clonar una voz arbitraria al vuelo. Ver la reseña dedicada de XTTS v2 de PromptQuorum para los detalles completos de clonación y licencia.',
          },
          {
            q: '¿Alguno de estos motores TTS locales requiere una licencia de pago para uso en Mac Apple Silicon?',
            a: 'Ningún motor cubierto aquí cobra específicamente por el uso en macOS o Apple Silicon. Piper (GPL-3.0-or-later), Kokoro (Apache-2.0) y Bark (MIT) son todos software gratuito y de código abierto, independientemente de la plataforma. XTTS v2 es gratuito de usar pero bajo una licencia no comercial (CPML) — esa restricción aplica igual en Apple Silicon, Intel, Windows o Linux, y no tiene relación con qué Mac uses.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Específicamente en Apple Silicon, Kokoro-82M destaca porque es el único de estos cuatro motores con una ruta real, construida específicamente, hacia la GPU Metal del Mac, a través del proyecto comunitario mlx-audio construido sobre el framework MLX propio de Apple — y es lo bastante pequeño (82 millones de parámetros, con licencia Apache-2.0) como para que valga la pena configurar esta aceleración. Piper sigue siendo la opción por defecto correcta cuando la simplicidad y la consistencia entre hardware importan más que la velocidad bruta: es solo-CPU en todas partes, así que no hay nada específico de Apple Silicon que configurar, solucionar, o temer que falle en un Mac Intel. XTTS v2 vale la pena por la pérdida de rendimiento solo-CPU únicamente si necesitas específicamente clonación de voz y puedes vivir con su licencia no comercial; Bark merece consideración solo por sus sonidos distintivos no verbales, con la advertencia de que tanto su aceleración en Apple Silicon como su estado general de mantenimiento están sin resolver. Si tienes dudas, empieza con Piper para la instalación más simple, pasa a Kokoro vía mlx-audio una vez que confirmes que quieres la aceleración Metal, y recurre a XTTS v2 solo cuando la clonación de voz sea un requisito estricto.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Kokoro-82M en Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — la ficha oficial del modelo: parámetros, licencia y arquitectura.',
          '[mlx-audio en GitHub](https://github.com/Blaizzy/mlx-audio) — el proyecto comunitario que ejecuta Kokoro-82M vía el framework MLX de Apple en Apple Silicon.',
          '[Issue de GitHub coqui-ai/TTS #3649](https://github.com/coqui-ai/TTS/issues/3649) — "Unable to use xtts_v2 with mps device on Apple Silicon", que documenta el bloqueo de MPS sin resolver.',
          '[Repositorio de GitHub suno-ai/bark](https://github.com/suno-ai/bark) — issues y pull requests que documentan el soporte experimental de Apple Silicon MPS vía SUNO_ENABLE_MPS.',
          '[Framework MLX de Apple](https://github.com/ml-explore/mlx) — el framework oficial de machine learning open source de Apple con aceleración nativa de GPU Metal para Apple Silicon.',
          '[Reseña de Piper TTS](/power-local-llm/piper-tts-review) — la reseña dedicada de PromptQuorum, incluyendo comandos de instalación e historial de licencias.',
          '[Reseña de XTTS v2](/power-local-llm/xtts-v2-review), [Reseña de Coqui TTS](/power-local-llm/coqui-tts-review) y [Reseña de Bark TTS](/power-local-llm/bark-tts-review) — las reseñas dedicadas de PromptQuorum de los demás motores cubiertos aquí.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Piper TTS](/power-local-llm/piper-tts-review) — el motor rápido, solo-CPU, con licencia permisiva cubierto en esta comparativa, en profundidad completa.',
          '[Reseña de XTTS v2](/power-local-llm/xtts-v2-review) — el modelo de clonación de voz cubierto aquí, incluyendo su licencia CPML no comercial.',
          '[Reseña de Coqui TTS](/power-local-llm/coqui-tts-review) — el toolkit que ejecuta XTTS v2 (y otros modelos), con licencia MPL-2.0.',
          '[Reseña de Bark TTS](/power-local-llm/bark-tts-review) — el motor TTS local expresivo y no verbal cubierto aquí, incluyendo su estado de mantenimiento.',
          '[Guía de LLM local para Apple Silicon](/local-llms/apple-silicon-local-llm-guide-2026) — niveles de memoria, aceleración de GPU Metal y elección de Mac para IA local más allá del TTS.',
          '[MLX vs. Ollama vs. llama.cpp en Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — el mismo framework MLX cubierto aquí para Kokoro, explicado para modelos de lenguaje locales.',
          '[ElevenLabs vs. Piper vs. XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — la comparativa cloud vs. local para lectores que consideran una opción comercial gestionada.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejor motor TTS local para Mac (2026): qué usa realmente Apple Silicon',
      description:
        'Piper es solo CPU en todo Mac. Kokoro puede usar Metal vía MLX. El soporte MPS de XTTS v2 es un issue de GitHub conocido y roto. Este es el motor TTS local que realmente hay que instalar en Apple Silicon.',
      url: 'https://promptquorum.com/es/power-local-llm/best-local-tts-mac',
      inLanguage: 'es',
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores que evalúan motores de texto a voz locales para Mac Apple Silicon' },
      about: [
        { '@type': 'Thing', name: 'Piper' },
        { '@type': 'Thing', name: 'Kokoro-82M' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Bark' },
        { '@type': 'Thing', name: 'Apple Silicon' },
        { '@type': 'Thing', name: 'MLX' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/best-local-tts-mac' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Mejor motor TTS local para Mac (2026)', item: 'https://promptquorum.com/es/power-local-llm/best-local-tts-mac' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/best-local-tts-mac-hero-pt.webp',
    title: 'Melhor mecanismo de TTS local para Mac (2026): o que realmente usa o Apple Silicon',
    seoTitle: 'Melhor TTS local para Mac 2026: guia Apple Silicon',
    intro:
      'A maioria dos comparativos de "melhor TTS local" trata todo Mac da mesma forma, mas o Apple Silicon muda qual mecanismo realmente faz sentido. O [Piper](/power-local-llm/piper-tts-review) roda inteiramente na CPU e nunca toca na GPU — em um Mac Apple Silicon ou em um Intel, o desempenho é parecido. O [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) pode rodar através do framework [MLX](https://github.com/ml-explore/mlx) da própria Apple, via o projeto comunitário [mlx-audio](https://github.com/Blaizzy/mlx-audio), construído especificamente para a GPU Metal do Apple Silicon. Já o [XTTS v2](/power-local-llm/xtts-v2-review) não oferece nenhum suporte ao backend Metal Performance Shaders (MPS) da Apple — uma [issue no GitHub](https://github.com/coqui-ai/TTS/issues/3649) acompanhada documenta que usar o dispositivo MPS simplesmente trava — então ele roda apenas na CPU em qualquer Mac. Este guia compara o que cada mecanismo realmente faz no Apple Silicon, aponta onde os Macs Intel ficam limitados às opções somente-CPU, e diz qual instalar.',
    metaDescription:
      'O Piper é somente CPU em todo Mac. O Kokoro pode usar Metal via MLX. O suporte MPS do XTTS v2 é uma issue conhecida e quebrada no GitHub. Este é o mecanismo de TTS local para realmente instalar no Apple Silicon.',
    twitterDescription:
      'Melhor TTS local para Mac 2026: o Piper nunca toca na GPU, o Kokoro pode rodar via o framework MLX da Apple, e o suporte Metal (MPS) do XTTS v2 é uma issue documentada e quebrada no GitHub. O que realmente instalar no Apple Silicon vs. Intel.',
    audience:
      'Desenvolvedores e entusiastas que constroem apps de voz, ferramentas de acessibilidade ou pipelines de audiolivros em Macs Apple Silicon e precisam escolher um mecanismo de texto para voz local que realmente aproveite o hardware.',
    readTime: '13 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'melhor TTS local para Mac',
    targetKeywords: [
      'melhor tts local mac',
      'melhor texto para voz apple silicon',
      'kokoro tts mac',
      'piper tts mac',
      'xtts v2 apple silicon',
      'tts local mlx metal',
      'texto para voz m4 m5 mac',
      'tts local mac intel',
    ],
    current_models_mentioned: ['Piper', 'Kokoro-82M', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M-series', 'M4', 'M5', 'Intel Mac'],
    leadAnswerBlock:
      '**O Kokoro-82M é o melhor mecanismo de TTS local para Macs Apple Silicon se você quer aceleração por GPU, já que pode rodar através do framework [MLX](https://github.com/ml-explore/mlx) da própria Apple via o projeto comunitário [mlx-audio](https://github.com/Blaizzy/mlx-audio); o [Piper](/power-local-llm/piper-tts-review) é a melhor escolha se você quer a instalação mais simples e portátil, que se comporta de forma idêntica em Macs Intel e Apple Silicon, já que nunca usa a GPU em nenhum dos dois.** O [XTTS v2](/power-local-llm/xtts-v2-review) é a escolha se você precisa especificamente de clonagem de voz, mas seu suporte Metal (MPS) é uma [issue no GitHub](https://github.com/coqui-ai/TTS/issues/3649) documentada e quebrada — espere desempenho somente-CPU em qualquer Mac. O [Bark](/power-local-llm/bark-tts-review) tem suporte MPS experimental atrás de uma variável de ambiente, com algumas operações ainda recaindo na CPU.',
    quickAnswerTop: {
      question: 'Qual é o melhor mecanismo de texto para voz local para Mac?',
      answer:
        'Use o Kokoro-82M (via o projeto comunitário mlx-audio) se você quer um mecanismo de TTS local que roda na GPU Metal do Apple Silicon usando o framework MLX da própria Apple — ele é pequeno (82 milhões de parâmetros), licenciado sob Apache-2.0, e disponível em variantes quantizadas para menor uso de memória. Use o Piper se você quer a configuração mais simples possível, que funciona de forma idêntica em qualquer Mac, Apple Silicon ou Intel, já que ele é somente-CPU por design e foi construído para rodar em tempo real até em uma Raspberry Pi. Use o XTTS v2 apenas se você precisa especificamente de clonar uma voz a partir de uma amostra de áudio curta — mas saiba que seu suporte de GPU (MPS) no Apple Silicon é uma issue documentada e sem solução no GitHub, então ele roda apenas na CPU em um Mac, e sua licença Coqui Public Model License (CPML) é não comercial. Evite o Bark a menos que você queira especificamente seus sons não verbais (risadas, suspiros); seu suporte de GPU no Apple Silicon é explicitamente rotulado como experimental pelos próprios mantenedores, e seu repositório no GitHub não recebe commits desde abril de 2024.',
      bullets: [
        'Kokoro-82M: 82M parâmetros, Apache-2.0, pode rodar via o framework MLX da Apple através do projeto comunitário mlx-audio — o único mecanismo aqui com um caminho real de GPU no Apple Silicon.',
        'Piper: somente-CPU por design (ONNX Runtime), GPL-3.0-or-later, desempenho igual em Macs Intel e Apple Silicon, já que nunca usa a GPU em nenhum dos dois.',
        'XTTS v2: clonagem de voz a partir de ~6 segundos de áudio, mas o suporte Apple Silicon MPS (Metal) é uma issue documentada e quebrada no GitHub — somente CPU no Mac, licença CPML não comercial.',
        'Bark: suporte Apple Silicon MPS experimental via uma variável de ambiente, com algumas operações ainda recaindo na CPU; licença MIT, mas sem commits desde abril de 2024.',
        'Macs Intel ficam limitados aos caminhos somente-CPU (Piper, e XTTS v2/Bark em modo CPU) — o caminho Kokoro acelerado por MLX exige Apple Silicon.',
      ],
      updatedDate: '2026-09-11',
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Melhor escolha por caso de uso', anchor: 'best-choice' },
      { label: 'Comparativo: adequação ao Apple Silicon', anchor: 'comparison' },
      { label: 'Quais mecanismos realmente usam a GPU em um Mac?', anchor: 'gpu-acceleration' },
      { label: 'Instalar o Kokoro com aceleração MLX', anchor: 'install-walkthrough' },
      { label: 'Limitações em Macs Intel', anchor: 'intel-macs' },
      { label: 'Quando não usar nenhum desses mecanismos', anchor: 'limitations' },
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
            text: 'Para texto para voz local no Apple Silicon, o Kokoro-82M é o único dos quatro principais mecanismos locais com um caminho real de GPU Metal (via o projeto comunitário mlx-audio sobre o framework MLX da Apple); o Piper é a opção somente-CPU mais simples, com comportamento idêntico em Macs Intel; o XTTS v2 oferece clonagem de voz, mas seu suporte MPS no Apple Silicon é uma issue documentada e quebrada no GitHub; e o suporte MPS do Bark é explicitamente experimental.',
          },
          {
            type: 'plain-terms',
            text: 'Nem todo programa gratuito de texto para voz que roda em um Mac realmente usa o chip gráfico do Mac — alguns simplesmente rodam no processador comum, o que funciona bem mas é mais lento do que poderia ser. O Kokoro é o que foi construído para aproveitar o design de chip da própria Apple através de um projeto chamado MLX; os outros ou pulam a GPU por design (Piper) ou tentam usá-la mas esbarram em problemas sem solução (XTTS v2, Bark).',
          },
        ],
        items: [
          'Kokoro-82M: Apache-2.0, 82M parâmetros, roda via o framework MLX da Apple através do projeto comunitário mlx-audio — o caminho real de aceleração no Apple Silicon.',
          'Piper: GPL-3.0-or-later, somente-CPU por design via ONNX Runtime — mesmo perfil de desempenho em Macs Intel e Apple Silicon.',
          'XTTS v2: licença CPML não comercial, clonagem de voz a partir de ~6 segundos de áudio, mas o suporte Metal (MPS) é uma issue acompanhada e sem solução no GitHub — roda somente com CPU no Mac.',
          'Bark: licença MIT, suporte Apple Silicon MPS experimental atrás de uma variável de ambiente, sem commits em seu repositório público desde abril de 2024.',
          'Macs Intel não conseguem usar o caminho Kokoro acelerado por MLX de forma alguma — o MLX exige Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este guia compara os quatro mecanismos de TTS local que a PromptQuorum revisou de forma independente (Piper, Kokoro, XTTS v2, Bark). Cada um tem sua própria análise dedicada, referenciada ao longo do artigo, com comandos de instalação, detalhes de licenciamento e limitações completas.',
          },
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: 'Qual mecanismo de TTS local você deveria realmente instalar?',
        content: [
          '**O mecanismo certo depende de você precisar de aceleração por GPU, clonagem de voz, ou a maior compatibilidade possível com Macs — nenhum mecanismo vence nos três aspectos.** O Kokoro é o único aqui com um caminho real de GPU no Apple Silicon; o Piper é o mais portátil; o XTTS v2 é o único que clona vozes.',
        ],
        items: [
          '🏆 **Melhor opção geral para Apple Silicon:** [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) via [mlx-audio](https://github.com/Blaizzy/mlx-audio) — o único mecanismo aqui com um caminho real de GPU Metal, pequeno o suficiente (82M parâmetros) para rodar confortavelmente em qualquer Mac Apple Silicon.',
          '**Melhor opção para simplicidade e compatibilidade com Intel:** [Piper](/power-local-llm/piper-tts-review) — somente-CPU por design, então instalação e desempenho são idênticos, seja em um chip série M ou em um Mac Intel mais antigo.',
          '**Melhor opção se você precisa de clonagem de voz:** [XTTS v2](/power-local-llm/xtts-v2-review) — clona uma voz a partir de ~6 segundos de áudio de referência, mas roda somente com CPU em qualquer Mac e é licenciado apenas para uso não comercial.',
          '**Melhor opção para áudio expressivo não verbal:** [Bark](/power-local-llm/bark-tts-review) — risadas, suspiros e música simples a partir de texto, com suporte de GPU Apple Silicon experimental (parcial), embora seu repositório esteja inativo desde abril de 2024.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar qual mecanismo?',
        content: [
          '**Combine o mecanismo com seu Mac e sua real necessidade, não com aquele que tem mais estrelas no GitHub.** A aceleração por GPU só importa se você gera áudio suficiente, com frequência suficiente, para que a síntese somente-CPU pareça lenta.',
        ],
        items: [
          '🧭 **Mac Apple Silicon, quer a opção local mais rápida:** Kokoro via mlx-audio — o único mecanismo aqui escrito para usar Metal através do MLX.',
          '🧭 **Qualquer Mac, incluindo um modelo Intel mais antigo:** Piper — somente-CPU por design, então não há nada específico do Apple Silicon para configurar ou resolver.',
          '🧭 **Precisa clonar uma voz específica a partir de uma gravação curta:** XTTS v2 — aceite que ele rodará somente com CPU em um Mac, e que sua licença é não comercial.',
          '🧭 **Quer risadas, suspiros ou som ambiente, não apenas fala:** Bark — mas reserve tempo extra de instalação para seu caminho experimental no Apple Silicon, e confirme antes o status de manutenção atual.',
          '❌ **Evite o Bark se você precisa de manutenção ativa ou desempenho garantido** — seu repositório público não mostra commits desde abril de 2024, independentemente da questão do Apple Silicon.',
          '❌ **Evite o XTTS v2 se você está construindo um produto comercial** — sua licença Coqui Public Model License (CPML) é não comercial, e a Coqui AI, a empresa que o lançou, encerrou seus serviços pagos em dezembro de 2023.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Como Piper, Kokoro, XTTS v2 e Bark se comparam na adequação ao Apple Silicon?',
        content: [
          '**O Kokoro é o único mecanismo desta comparação com um caminho real, construído especificamente, para a GPU do Apple Silicon; os demais são somente-CPU por design ou por causa de um bug sem solução.** A tabela abaixo pontua cada mecanismo nos quatro fatores que realmente definem a adequação a um Mac: se usa aceleração Apple Silicon, quanta memória exige, quanto atrito tem a instalação no macOS, e a qualidade de voz.',
        ],
        columns: ['Mecanismo', 'Aceleração Apple Silicon', 'Uso de RAM', 'Instalação macOS', 'Qualidade de voz'],
        rows: [
          {
            'Mecanismo': '[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)',
            'Aceleração Apple Silicon': 'Sim — Metal via MLX (mlx-audio)',
            'Uso de RAM': 'Baixo (82M param., há variantes quantiz.)',
            'Instalação macOS': 'pip install + mlx-audio, só Apple Silicon',
            'Qualidade de voz': 'Natural, próxima de modelos cloud maiores',
          },
          {
            'Mecanismo': '[Piper](/power-local-llm/piper-tts-review)',
            'Aceleração Apple Silicon': 'Nenhuma (design) — CPU, ONNX Runtime',
            'Uso de RAM': 'Muito baixo (~50–100MB por voz)',
            'Instalação macOS': '`pip install piper-tts`, sem config de GPU',
            'Qualidade de voz': 'Clara, prosódia um pouco robótica',
          },
          {
            'Mecanismo': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Aceleração Apple Silicon': 'Nenhuma — MPS trava (issue GH #3649)',
            'Uso de RAM': 'Moderado a alto (modelo de clonagem completo)',
            'Instalação macOS': '`pip install coqui-tts`, só CPU no Mac',
            'Qualidade de voz': 'Alta, clona uma voz específica',
          },
          {
            'Mecanismo': '[Bark](/power-local-llm/bark-tts-review)',
            'Aceleração Apple Silicon': 'Experimental — `SUNO_ENABLE_MPS=True`',
            'Uso de RAM': 'Alto (flag small-models para reduzir)',
            'Instalação macOS': 'pip install do GitHub, sem pacote PyPI',
            'Qualidade de voz': 'Expressiva, não determinística',
          },
        ],
        note: 'As avaliações de qualidade de voz são descrições qualitativas baseadas na arquitetura documentada de cada mecanismo e nas análises dedicadas da PromptQuorum (referenciadas em cada linha), não um teste de audição às cegas conduzido pela PromptQuorum — nenhuma pontuação MOS (Mean Opinion Score) numérica ou número de benchmark é afirmado aqui.',
      },
      gpuAcceleration: {
        id: 'gpu-acceleration',
        title: 'Quais mecanismos realmente usam a GPU em um Mac?',
        content: [
          '**Apenas o Kokoro tem um caminho real, construído especificamente, para a GPU Metal do Apple Silicon; o Piper evita a GPU por completo, por design, e tanto o XTTS v2 quanto o Bark têm suporte de GPU sem solução ou parcial no Mac.** Este é o maior fator individual que separa esses mecanismos no Apple Silicon, e é fácil assumir que "roda em um Mac" significa "usa a GPU do Mac" — geralmente não é o caso.',
        ],
        items: [
          '**O Kokoro-82M roda através do framework [MLX](https://github.com/ml-explore/mlx) da própria Apple, via o projeto comunitário [mlx-audio](https://github.com/Blaizzy/mlx-audio), que exige Apple Silicon e Python 3.10–3.12.** O MLX é o framework de machine learning de código aberto da Apple, construído do zero para Metal na arquitetura de memória unificada do Apple Silicon — o mesmo framework coberto pelo [guia de LLM local para Apple Silicon](/local-llms/apple-silicon-local-llm-guide-2026) e pela [comparação MLX vs. Ollama vs. llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) para modelos de linguagem. Os pesos oficiais do Kokoro-82M, publicados pela hexgrad no Hugging Face, são nativamente um modelo PyTorch; o caminho MLX é um port da comunidade, não um lançamento oficial da Apple ou da hexgrad, e o mlx-audio também oferece variantes quantizadas (bf16, 8-bit, 4-bit) para menor uso de memória.',
          '**O Piper nunca toca na GPU em nenhuma plataforma, Apple Silicon incluído — isso é design, não limitação.** O Piper converte texto em fonemas com espeak-ng, depois sintetiza áudio com um modelo exportado para o [ONNX Runtime](https://onnxruntime.ai/) para inferência rápida na CPU. Essa escolha de design é exatamente o motivo pelo qual o Piper roda em tempo real até em uma Raspberry Pi — veja a [análise do Piper TTS](/power-local-llm/piper-tts-review) da PromptQuorum para a arquitetura completa e os passos de instalação.',
          '**O suporte Apple Silicon Metal (MPS) do XTTS v2 atualmente não funciona.** Uma issue acompanhada no [repositório coqui-ai/TTS no GitHub](https://github.com/coqui-ai/TTS/issues/3649), intitulada "Unable to use xtts_v2 with mps device on Apple Silicon", documenta que tentar rodar o XTTS v2 no dispositivo MPS trava em vez de completar. O próprio projeto da Coqui não lista o suporte de GPU do Apple Silicon como oficialmente suportado. Na prática, isso significa que o XTTS v2 roda somente com CPU em um Mac, através do mesmo [toolkit Coqui TTS](/power-local-llm/coqui-tts-review) (licenciado sob MPL-2.0) que o executa em outras plataformas.',
          '**O Bark tem suporte Apple Silicon MPS experimental, protegido por uma variável de ambiente.** Definir `SUNO_ENABLE_MPS=True` ativa a aceleração Metal, segundo discussões no [repositório suno-ai/bark no GitHub](https://github.com/suno-ai/bark), mas alguns operadores do PyTorch dos quais o Bark depende não estavam implementados para MPS no momento, causando fallback parcial para CPU nessas etapas. O Bark também suporta uma flag `SUNO_USE_SMALL_MODELS=True` especificamente para reduzir a pressão de memória em Macs com menos memória unificada.',
        ],
        note: 'O status da aceleração no Apple Silicon para projetos de TTS mantidos pela comunidade pode mudar entre versões mais rápido do que este artigo é atualizado — verifique as issues no GitHub e o README de cada projeto antes de assumir que o comportamento atual corresponde ao descrito aqui.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Como instalar o Kokoro com aceleração MLX em um Mac?',
        content:
          'Este passo a passo instala o projeto comunitário mlx-audio para rodar o Kokoro-82M através do framework MLX da Apple, seguindo a configuração documentada no [repositório mlx-audio no GitHub](https://github.com/Blaizzy/mlx-audio).',
        numberedItems: [
          {
            title: 'Confirme que você está em um Apple Silicon com uma versão de Python compatível.',
            whyItMatters: 'O mlx-audio exige um Mac Apple Silicon (chip série M) e Python 3.10–3.12; o MLX não roda em Macs Intel de forma alguma, então esse caminho é exclusivo do Apple Silicon.',
          },
          {
            title: 'Instale o mlx-audio.',
            whyItMatters: 'Execute `pip install mlx-audio` em um ambiente virtual Python. Isso traz o próprio MLX (versão 0.31 ou posterior) junto com o pipeline de áudio.',
          },
          {
            title: 'Execute uma primeira síntese pela linha de comando.',
            whyItMatters: 'O pacote traz um ponto de entrada de CLI que baixa os pesos do Kokoro-82M no primeiro uso e sintetiza um arquivo WAV a partir de uma string de texto — verifique o README atual do projeto para o comando exato, já que as flags da CLI podem mudar entre versões.',
          },
          {
            title: 'Escolha uma voz e, opcionalmente, uma variante de modelo quantizada.',
            whyItMatters: 'O Kokoro-82M vem com 54 presets de voz em vários idiomas. O mlx-audio também oferece variantes quantizadas bf16, 8-bit e 4-bit — precisão menor troca um pouco de qualidade por uma pegada de memória menor, útil em um Mac com menos memória unificada.',
          },
          {
            title: 'Integre em sua própria aplicação Python.',
            whyItMatters: 'Para qualquer uso além da síntese pontual via CLI, chame a API Python do mlx-audio diretamente em vez de invocar a CLI repetidamente, evitando o custo de recarregar o modelo a cada chamada.',
          },
        ],
        note: 'Este é um projeto comunitário, não um lançamento oficial da Apple ou da hexgrad — verifique as instruções de instalação atuais no [repositório mlx-audio](https://github.com/Blaizzy/mlx-audio) antes de implantar, já que nomes de comandos e flags podem mudar.',
      },
      intelMacs: {
        id: 'intel-macs',
        title: 'O que muda em um Mac Intel?',
        content: [
          '**Em um Mac Intel, o caminho Kokoro acelerado por MLX fica totalmente indisponível — o MLX exige Apple Silicon e não roda em hardware Intel de forma alguma.** Todos os outros mecanismos cobertos aqui continuam funcionando em Intel, porque nenhum depende do Neural Engine da Apple ou de aceleração de GPU específica do Apple Silicon para funcionar; eles simplesmente rodam na CPU.',
        ],
        items: [
          '**O Piper não é afetado pela distinção Intel/Apple Silicon.** Ele é somente-CPU por design em toda plataforma, então um Mac Intel tem desempenho comparável a um Mac Apple Silicon especificamente para o Piper, deixando de lado a geração do hardware.',
          '**O Kokoro ainda roda em um Mac Intel através de seus pesos PyTorch oficiais, apenas sem o caminho de aceleração MLX.** Você perde o caminho Metal específico do Apple Silicon via mlx-audio, mas o modelo em si (82M parâmetros) é pequeno o suficiente para rodar de forma aceitável na CPU.',
          '**O XTTS v2 e o Bark rodam de forma idêntica em Macs Intel e Apple Silicon, já que ambos atualmente rodam somente com CPU em qualquer Mac de qualquer forma** — o XTTS v2 porque o suporte MPS está quebrado, e o Bark porque o suporte MPS é experimental e parcial. Nenhum dos dois perde capacidade significativa ao migrar de Apple Silicon para Intel, já que nenhum tem um caminho acelerado maduro no Apple Silicon para começar.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Quando você não deveria usar nenhum desses mecanismos?',
        content: [
          '**Nenhum dos quatro mecanismos desta comparação é a escolha certa para todo caso de uso de TTS em Mac — cada um tem situações em que outra ferramenta, ou uma API na nuvem, se encaixa melhor.**',
        ],
        items: [
          '❌ **Precisa de uma licença comercial garantida com vozes clonadas.** A licença CPML do XTTS v2 é não comercial, sem um caminho ativo confirmado para uma licença comercial desde que a Coqui AI encerrou seus serviços pagos em dezembro de 2023 — veja a [comparação com ElevenLabs](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) da PromptQuorum para uma alternativa comercial gerenciada na nuvem.',
          '❌ **Precisa de manutenção ativa garantida.** O repositório público do Bark no GitHub não mostra commits desde 5 de abril de 2024; se correções e atualizações contínuas importam para seu projeto, o Piper (mantido ativamente pela Open Home Foundation) ou o Kokoro (um ecossistema comunitário ativamente usado em torno do mlx-audio) são apostas mais seguras.',
          '❌ **Precisa de suporte de GPU de nível produção no Apple Silicon hoje, sem depender de um projeto comunitário.** O caminho MLX do Kokoro passa por um projeto comunitário, não um lançamento oficial da Apple ou da hexgrad — trate-o como bom, mas não garantido por um fornecedor.',
          '❌ **Precisa de voz interativa em tempo real em memória Apple Silicon muito limitada (configurações básicas de 8GB) enquanto também roda um LLM local grande ao mesmo tempo.** Empilhar um processo grande de XTTS v2 ou Bark junto a um LLM em um Mac com memória restrita pode ficar apertado; as pegadas pequenas do Piper e do Kokoro deixam mais margem.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é o melhor mecanismo de TTS local para Macs Apple Silicon?',
            a: 'O Kokoro-82M, executado através do projeto comunitário mlx-audio, é a melhor escolha se você quer especificamente aceleração de GPU (Metal) no Apple Silicon via o framework MLX da própria Apple. Se você quer a instalação mais simples que funciona igual em qualquer Mac, o Piper é a melhor escolha, já que é somente-CPU por design em toda plataforma.',
          },
          {
            q: 'O Piper usa a GPU em um Mac?',
            a: 'Não. O Piper é somente-CPU por design em toda plataforma, incluindo Apple Silicon e Macs Intel. Ele converte texto em fonemas com espeak-ng e sintetiza áudio através do ONNX Runtime, por isso roda em tempo real até em uma Raspberry Pi sem nenhuma GPU.',
          },
          {
            q: 'O Kokoro-82M pode rodar no Apple Silicon com aceleração por GPU?',
            a: 'Sim, através do projeto comunitário mlx-audio, que executa o Kokoro-82M via o framework MLX da própria Apple — construído especificamente para Metal na arquitetura de memória unificada do Apple Silicon. Os pesos oficiais do Kokoro-82M da hexgrad são um modelo PyTorch; o caminho MLX é um port da comunidade, não um lançamento oficial, e exige um Mac Apple Silicon (Macs Intel não conseguem usá-lo) e Python 3.10–3.12.',
          },
          {
            q: 'O XTTS v2 funciona no Apple Silicon?',
            a: 'Ele roda, mas somente com CPU. O suporte ao dispositivo Metal (MPS) do XTTS v2 é uma issue documentada e sem solução, acompanhada no repositório coqui-ai/TTS no GitHub (issue #3649), onde tentar usar o dispositivo MPS trava em vez de completar. O projeto da Coqui não suporta oficialmente a aceleração de GPU do Apple Silicon para o XTTS v2, então espere desempenho somente-CPU em qualquer Mac.',
          },
          {
            q: 'O Bark é acelerado no Apple Silicon?',
            a: 'Parcialmente, e de forma experimental. Definir a variável de ambiente SUNO_ENABLE_MPS=True ativa a aceleração de GPU Metal para o Bark, mas alguns operadores do PyTorch dos quais ele depende não foram implementados para MPS, então algumas etapas de processamento ainda recaem na CPU. Os próprios mantenedores do Bark descrevem esse suporte como experimental, não pronto para produção.',
          },
          {
            q: 'Posso usar algum desses mecanismos em um Mac Intel?',
            a: 'Piper, XTTS v2 e Bark rodam todos em Macs Intel, já que nenhum deles exige aceleração específica do Apple Silicon para funcionar — eles rodam somente com CPU, seja por design (Piper) ou porque seus caminhos de aceleração de GPU estão de qualquer forma sem solução ou são parciais (XTTS v2, Bark). O caminho acelerado por MLX do Kokoro exige especificamente Apple Silicon e não roda em um Mac Intel de forma alguma, embora os pesos PyTorch oficiais do Kokoro ainda rodem em Intel sem aceleração MLX.',
          },
          {
            q: 'Qual desses mecanismos consegue clonar uma voz específica?',
            a: 'Apenas o XTTS v2, entre os quatro cobertos aqui, clona uma voz a partir de um clipe de áudio de referência curto (a partir de apenas 6 segundos, segundo sua ficha oficial de modelo). Piper, Kokoro e Bark usam vozes pré-treinadas ou predefinidas, em vez de clonar uma voz arbitrária na hora. Veja a análise dedicada do XTTS v2 da PromptQuorum para detalhes completos de clonagem e licenciamento.',
          },
          {
            q: 'Algum desses mecanismos de TTS local exige uma licença paga para uso em Mac Apple Silicon?',
            a: 'Nenhum mecanismo coberto aqui cobra especificamente pelo uso em macOS ou Apple Silicon. Piper (GPL-3.0-or-later), Kokoro (Apache-2.0) e Bark (MIT) são todos softwares gratuitos e de código aberto, independentemente da plataforma. O XTTS v2 é gratuito para uso, mas sob uma licença não comercial (CPML) — essa restrição se aplica igualmente no Apple Silicon, Intel, Windows ou Linux, e não tem relação com qual Mac você usa.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'Especificamente no Apple Silicon, o Kokoro-82M se destaca porque é o único desses quatro mecanismos com um caminho real, construído especificamente, para a GPU Metal do Mac, através do projeto comunitário mlx-audio construído sobre o framework MLX da própria Apple — e é pequeno o suficiente (82 milhões de parâmetros, licenciado sob Apache-2.0) para que valha a pena configurar essa aceleração. O Piper continua sendo a escolha padrão certa quando simplicidade e consistência entre diferentes hardwares importam mais do que velocidade bruta: ele é somente-CPU em todo lugar, então não há nada específico do Apple Silicon para configurar, resolver, ou temer que regrida em um Mac Intel. O XTTS v2 vale a perda de desempenho somente-CPU apenas se você precisa especificamente de clonagem de voz e pode conviver com sua licença não comercial; o Bark merece consideração apenas por seus sons distintos não verbais, com a ressalva de que tanto sua aceleração no Apple Silicon quanto seu status geral de manutenção permanecem incertos. Na dúvida, comece com o Piper para a instalação mais simples, migre para o Kokoro via mlx-audio assim que confirmar que quer a aceleração Metal, e recorra ao XTTS v2 apenas quando a clonagem de voz for um requisito rígido.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Kokoro-82M no Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — a ficha oficial do modelo: parâmetros, licença e arquitetura.',
          '[mlx-audio no GitHub](https://github.com/Blaizzy/mlx-audio) — o projeto comunitário que executa o Kokoro-82M via o framework MLX da Apple no Apple Silicon.',
          '[Issue #3649 do coqui-ai/TTS no GitHub](https://github.com/coqui-ai/TTS/issues/3649) — "Unable to use xtts_v2 with mps device on Apple Silicon", que documenta a travada não resolvida do MPS.',
          '[Repositório suno-ai/bark no GitHub](https://github.com/suno-ai/bark) — issues e pull requests que documentam o suporte experimental Apple Silicon MPS via SUNO_ENABLE_MPS.',
          '[Framework MLX da Apple](https://github.com/ml-explore/mlx) — o framework oficial de machine learning de código aberto da Apple, com aceleração nativa de GPU Metal para Apple Silicon.',
          '[Análise do Piper TTS](/power-local-llm/piper-tts-review) — a análise dedicada da PromptQuorum, incluindo comandos de instalação e histórico de licenciamento.',
          '[Análise do XTTS v2](/power-local-llm/xtts-v2-review), [Análise do Coqui TTS](/power-local-llm/coqui-tts-review) e [Análise do Bark TTS](/power-local-llm/bark-tts-review) — as análises dedicadas da PromptQuorum dos demais mecanismos cobertos aqui.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Piper TTS](/power-local-llm/piper-tts-review) — o mecanismo rápido, somente-CPU e com licença permissiva coberto nesta comparação, em profundidade total.',
          '[Análise do XTTS v2](/power-local-llm/xtts-v2-review) — o modelo de clonagem de voz coberto aqui, incluindo sua licença CPML não comercial.',
          '[Análise do Coqui TTS](/power-local-llm/coqui-tts-review) — o toolkit que executa o XTTS v2 (e outros modelos), licenciado sob MPL-2.0.',
          '[Análise do Bark TTS](/power-local-llm/bark-tts-review) — o mecanismo de TTS local expressivo e não verbal coberto aqui, incluindo seu status de manutenção.',
          '[Guia de LLM local para Apple Silicon](/local-llms/apple-silicon-local-llm-guide-2026) — níveis de memória, aceleração de GPU Metal e escolha de Mac para IA local além do TTS.',
          '[MLX vs. Ollama vs. llama.cpp no Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — o mesmo framework MLX coberto aqui para o Kokoro, explicado para modelos de linguagem locais.',
          '[ElevenLabs vs. Piper vs. XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — a comparação nuvem vs. local para leitores que consideram uma opção comercial gerenciada.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhor mecanismo de TTS local para Mac (2026): o que realmente usa o Apple Silicon',
      description:
        'O Piper é somente CPU em todo Mac. O Kokoro pode usar Metal via MLX. O suporte MPS do XTTS v2 é uma issue conhecida e quebrada no GitHub. Este é o mecanismo de TTS local para realmente instalar no Apple Silicon.',
      url: 'https://promptquorum.com/pt/power-local-llm/best-local-tts-mac',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores avaliando mecanismos de texto para voz locais para Macs Apple Silicon' },
      about: [
        { '@type': 'Thing', name: 'Piper' },
        { '@type': 'Thing', name: 'Kokoro-82M' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Bark' },
        { '@type': 'Thing', name: 'Apple Silicon' },
        { '@type': 'Thing', name: 'MLX' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/best-local-tts-mac' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Melhor mecanismo de TTS local para Mac (2026)', item: 'https://promptquorum.com/pt/power-local-llm/best-local-tts-mac' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/best-local-tts-mac-hero-ja.webp',
    title: 'Mac向けベストなローカルTTSエンジン(2026):実際にApple Siliconを使うのはどれか',
    seoTitle: 'Mac向けベストなローカルTTS 2026:Apple Siliconガイド',
    intro:
      '「ベストなローカルTTS」比較記事の多くは、どのMacでも同じように扱いますが、Apple Siliconによって実際に理にかなうエンジンは変わります。[Piper](/power-local-llm/piper-tts-review)はすべてCPU上で動作し、GPUには一切触れません — Apple SiliconのMacでもIntel Macでも、性能はほぼ同じです。[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)は、コミュニティプロジェクトである[mlx-audio](https://github.com/Blaizzy/mlx-audio)を通じて、Apple自身の[MLX](https://github.com/ml-explore/mlx)フレームワーク経由で動かすことができます。このフレームワークは、Apple SiliconのMetal GPU向けに特別に作られています。対照的に、[XTTS v2](/power-local-llm/xtts-v2-review)はAppleのMetal Performance Shaders(MPS)バックエンドを一切サポートしていません — 追跡されている[GitHub issue](https://github.com/coqui-ai/TTS/issues/3649)は、MPSデバイスを使用しようとするとハングするだけだと記録しています。そのため、どのMacでもCPUのみで動作します。このガイドでは、各エンジンがApple Siliconで実際に何をするのかを比較し、Intel MacがCPUのみの選択肢に限定される部分を指摘し、どれをインストールすべきかを伝えます。',
    metaDescription:
      'PiperはどのMacでもCPUのみ。KokoroはMLX経由でMetalを使用可能。XTTS v2のMPS対応は既知の壊れたGitHub issue。Apple Siliconで実際にインストールすべきローカルTTSエンジンを解説。',
    twitterDescription:
      'Mac向けベストなローカルTTS 2026:PiperはGPUに一切触れず、KokoroはAppleのMLXフレームワーク経由で動作し、XTTS v2のMetal(MPS)対応は文書化された壊れたGitHub issue。Apple SiliconとIntelで実際にインストールすべきものを解説。',
    audience:
      'Apple Silicon Mac上で音声アプリ、アクセシビリティツール、オーディオブックのパイプラインを構築しており、実際にハードウェアを使うローカルのテキスト読み上げエンジンを選ぶ必要がある開発者や個人開発者。',
    readTime: '13分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac向けベストなローカルTTS',
    targetKeywords: [
      'mac ベストなローカルtts',
      'apple silicon ベストなテキスト読み上げ',
      'kokoro tts mac',
      'piper tts mac',
      'xtts v2 apple silicon',
      'ローカルtts mlx metal',
      'テキスト読み上げ m4 m5 mac',
      'ローカルtts intel mac',
    ],
    current_models_mentioned: ['Piper', 'Kokoro-82M', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M-series', 'M4', 'M5', 'Intel Mac'],
    leadAnswerBlock:
      '**GPUアクセラレーションが欲しいなら、Kokoro-82MがApple Silicon Mac向けのベストなローカルTTSエンジンです。コミュニティプロジェクトの[mlx-audio](https://github.com/Blaizzy/mlx-audio)を通じて、Apple自身の[MLX](https://github.com/ml-explore/mlx)フレームワーク経由で動作できるからです。[Piper](/power-local-llm/piper-tts-review)は、IntelでもApple Siliconでも同じように動く、最もシンプルで可搬性の高いインストールが欲しい場合のベストな選択です。どちらでもGPUを一切使わないためです。** 声のクローニングが特に必要なら[XTTS v2](/power-local-llm/xtts-v2-review)が選択肢になりますが、そのMetal(MPS)対応は文書化された壊れた[GitHub issue](https://github.com/coqui-ai/TTS/issues/3649)であり、どのMacでもCPUのみの性能になると考えてください。[Bark](/power-local-llm/bark-tts-review)は環境変数の背後に実験的なMPS対応があり、一部の処理は今もCPUにフォールバックします。',
    quickAnswerTop: {
      question: 'Mac向けベストなローカルテキスト読み上げエンジンは何ですか?',
      answer:
        'Apple SiliconのMetal GPUを、Apple自身のMLXフレームワークを使って動かすローカルTTSエンジンが欲しいなら、Kokoro-82M(コミュニティのmlx-audioプロジェクト経由)を使ってください。小型(8200万パラメータ)でApache-2.0ライセンスであり、メモリ使用量を抑えるための量子化バリアントも用意されています。Apple SiliconでもIntelでも同じように動作する、可能な限りシンプルなセットアップが欲しいなら、Piperを使ってください。設計上CPUのみで動作し、Raspberry Piでもリアルタイムで動くように作られています。短い音声サンプルから声をクローンする必要がある場合に限りXTTS v2を使ってください — ただし、そのApple SiliconのGPU(MPS)対応は文書化された未解決のGitHub issueであり、Macでは事実上CPUのみで動作すること、そしてそのCoqui Public Model License(CPML)は非商用であることを理解しておいてください。特に非音声サウンド(笑い声、ため息)が欲しい場合を除き、Barkは避けてください。そのApple SiliconのGPU対応はメンテナー自身によって明確に実験的とラベル付けされており、GitHubリポジトリは2024年4月以降コミットがありません。',
      bullets: [
        'Kokoro-82M:8200万パラメータ、Apache-2.0、コミュニティのmlx-audioプロジェクトを通じてAppleのMLXフレームワーク経由で動作 — ここで唯一の本物のApple Silicon GPU経路。',
        'Piper:設計上CPUのみ(ONNX Runtime)、GPL-3.0-or-later、IntelでもApple SiliconのMacでも同じ性能プロファイル — どちらでもGPUを使わないため。',
        'XTTS v2:約6秒の音声から声をクローン。ただしApple SiliconのMPS(Metal)対応は文書化された壊れたGitHub issue — MacではCPUのみ、非商用のCPMLライセンス。',
        'Bark:環境変数を介した実験的なApple Silicon MPS対応。一部の処理は今もCPUにフォールバック。MITライセンスだが2024年4月以降コミットなし。',
        'Intel MacはCPUのみの経路(Piper、CPUモードのXTTS v2/Bark)に限定される — MLXアクセラレーションのKokoro経路にはApple Siliconが必要。',
      ],
      updatedDate: '2026-09-11',
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: '用途別のベストな選択', anchor: 'best-choice' },
      { label: '比較:Apple Silicon適合性', anchor: 'comparison' },
      { label: 'MacでGPUを実際に使うエンジンはどれか', anchor: 'gpu-acceleration' },
      { label: 'MLXアクセラレーションでKokoroをインストールする', anchor: 'install-walkthrough' },
      { label: 'Intel Macでの制限', anchor: 'intel-macs' },
      { label: 'これらを使うべきでない場合', anchor: 'limitations' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
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
            text: 'Apple Silicon上のローカルテキスト読み上げについて、4大ローカルエンジンのうち本物のMetal GPU経路(Apple自身のMLXフレームワーク上でコミュニティのmlx-audioプロジェクトを通じて)を持つのはKokoro-82Mだけであり、PiperはIntel Macでも同じように動くシンプルなCPUのみの選択肢、XTTS v2は声のクローニングを提供するがApple SiliconのMPS対応は文書化された壊れたGitHub issue、BarkのMPS対応は明確に実験的である。',
          },
          {
            type: 'plain-terms',
            text: 'Macで動く無料のテキスト読み上げプログラムのすべてが、実際にMacのグラフィックチップを使っているわけではありません — 一部は通常のプロセッサだけで動作します。それでも問題なく動きますが、本来出せるはずの速度より遅くなります。KokoroはMLXというプロジェクトを通じてApple独自のチップ設計を活かすように作られたもので、他のエンジンは設計上GPUをスキップする(Piper)か、GPUを使おうとして未解決の問題にぶつかる(XTTS v2、Bark)かのどちらかです。',
          },
        ],
        items: [
          'Kokoro-82M:Apache-2.0、8200万パラメータ、コミュニティのmlx-audioプロジェクトを通じてAppleのMLXフレームワーク経由で動作 — 本物のApple Siliconアクセラレーション経路。',
          'Piper:GPL-3.0-or-later、ONNX Runtime経由で設計上CPUのみ — IntelでもApple SiliconのMacでも同じ性能プロファイル。',
          'XTTS v2:非商用のCPMLライセンス、約6秒の音声から声をクローン。ただしMetal(MPS)対応は追跡された未解決のGitHub issue — MacではCPUのみで動作。',
          'Bark:MITライセンス、環境変数の背後にある実験的なApple Silicon MPS対応。公開リポジトリは2024年4月以降コミットなし。',
          'Intel MacはMLXアクセラレーションのKokoro経路を一切使えない — MLXにはApple Siliconが必要。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このガイドでは、PromptQuorumが独自にレビューした4つのローカルTTSエンジン(Piper、Kokoro、XTTS v2、Bark)を比較します。それぞれ専用レビューへのリンクがあり、インストールコマンド、ライセンスの詳細、限界の全体像を確認できます。',
          },
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '実際にインストールすべきローカルTTSエンジンはどれか?',
        content: [
          '**適切なエンジンは、GPUアクセラレーション、声のクローニング、Macの互換性の広さのどれが必要かによって決まります — どのエンジンも3つすべてで勝つわけではありません。** Kokoroはここで唯一本物のApple Silicon GPU経路を持つエンジンであり、Piperは最も可搬性が高く、XTTS v2は唯一声をクローンできます。',
        ],
        items: [
          '🏆 **Apple Silicon向けの総合ベスト:** [mlx-audio](https://github.com/Blaizzy/mlx-audio)経由の[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) — ここで扱う中で唯一本物のMetal GPU経路を持ち、小型(8200万パラメータ)なのでどのApple Silicon Macでも快適に動く。',
          '**シンプルさとIntel互換性のベスト:** [Piper](/power-local-llm/piper-tts-review) — 設計上CPUのみなので、M系チップでも古いIntel Macでも、インストールと性能が同じ。',
          '**声のクローニングが必要な場合のベスト:** [XTTS v2](/power-local-llm/xtts-v2-review) — 約6秒の参照音声から声をクローンできるが、どのMacでもCPUのみで動作し、非商用利用のみのライセンス。',
          '**表現力豊かな非音声オーディオのベスト:** [Bark](/power-local-llm/bark-tts-review) — テキストから笑い声、ため息、簡単な音楽を生成。Apple SiliconのGPU対応は実験的(部分的)で、リポジトリは2024年4月以降休止中。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'どのエンジンを使うべきなのは誰か?',
        content: [
          '**GitHubスターの数が最も多いエンジンではなく、自分のMacと実際の要件にエンジンを合わせましょう。** GPUアクセラレーションが重要になるのは、CPUのみの合成が遅く感じるほど十分な量・頻度で音声を生成する場合だけです。',
        ],
        items: [
          '🧭 **Apple Silicon Macで、最速のローカル選択肢が欲しい:** mlx-audio経由のKokoro — ここで唯一MLX経由でMetalを使うように書かれたエンジン。',
          '🧭 **古いIntelモデルを含む、どのMacでも使いたい:** Piper — 設計上CPUのみなので、Apple Silicon固有の設定やトラブルシューティングは一切不要。',
          '🧭 **短い録音から特定の声をクローンする必要がある:** XTTS v2 — Macでは実質CPUのみで動作すること、そしてライセンスが非商用であることを受け入れること。',
          '🧭 **音声だけでなく笑い声、ため息、環境音が欲しい:** Bark — ただし実験的なApple Silicon経路のために余分なインストール時間を見込み、まず現在のメンテナンス状況を確認すること。',
          '❌ **アクティブなメンテナンスや確実な性能が必要なら、Barkは避ける** — 公開リポジトリは2024年4月以降コミットがなく、これはApple Siliconの問題とは無関係。',
          '❌ **商用製品を構築しているなら、XTTS v2は避ける** — Coqui Public Model License(CPML)は非商用であり、これを公開した企業Coqui AIは2023年12月に有料サービスを終了している。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'PiperとKokoro、XTTS v2、BarkはApple Silicon適合性でどう比較されるか?',
        content: [
          '**Kokoroはこの比較の中で唯一、本物の、目的を持って作られたApple Silicon GPU経路を持つエンジンです。残りは設計上、または未解決のバグによりCPUのみです。** 下の表は、実際にMac適合性を左右する4つの要因で各エンジンを評価しています:Apple Siliconアクセラレーションを使うか、必要なメモリ量、macOSインストールの手間、そして音声品質です。',
        ],
        columns: ['エンジン', 'Apple Silicon対応', 'RAMフットプリント', 'macOSインストール', '音声品質'],
        rows: [
          {
            'エンジン': '[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)',
            'Apple Silicon対応': 'あり — MLX経由のMetal(mlx-audio)',
            'RAMフットプリント': '低(8200万パラメータ、量子化版あり)',
            'macOSインストール': 'pip install + mlx-audio、Apple Silicon専用',
            '音声品質': '自然、大規模クラウドモデルに近い',
          },
          {
            'エンジン': '[Piper](/power-local-llm/piper-tts-review)',
            'Apple Silicon対応': '設計上なし — CPUのみのONNX Runtime',
            'RAMフットプリント': '非常に低(1音声あたり約50〜100MB)',
            'macOSインストール': '`pip install piper-tts`、GPU設定不要',
            '音声品質': '明瞭だが、やや機械的な抑揚',
          },
          {
            'エンジン': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Apple Silicon対応': 'なし — MPSがハング(GH issue #3649)',
            'RAMフットプリント': '中〜高(フルクローニングモデル)',
            'macOSインストール': '`pip install coqui-tts`、MacではCPUのみ',
            '音声品質': '高品質、特定の声をクローン',
          },
          {
            'エンジン': '[Bark](/power-local-llm/bark-tts-review)',
            'Apple Silicon対応': '実験的 — `SUNO_ENABLE_MPS=True`',
            'RAMフットプリント': '高(small-modelsフラグで削減可能)',
            'macOSインストール': 'GitHubからpip install、PyPIパッケージなし',
            '音声品質': '表現力豊か、非決定的',
          },
        ],
        note: '音声品質の評価は、各エンジンの文書化されたアーキテクチャとPromptQuorumの専用レビュー(各行にリンク)に基づく定性的な説明であり、PromptQuorumが実施したブラインドリスニングテストではありません。数値的なMOS(平均オピニオン評点)やベンチマーク数値はここでは主張していません。',
      },
      gpuAcceleration: {
        id: 'gpu-acceleration',
        title: 'MacでGPUを実際に使うエンジンはどれか?',
        content: [
          '**本物の、目的を持って作られたApple SiliconのMetal GPU経路を持つのはKokoroだけです。Piperは設計上GPUを完全にスキップし、XTTS v2とBarkはどちらもMacでのGPU対応が未解決または部分的です。** これはApple Silicon上でこれらのエンジンを分ける最大の要因であり、「Macで動く」ことは「MacのGPUを使う」ことだと思い込みがちですが、通常はそうではありません。',
        ],
        items: [
          '**Kokoro-82Mは、コミュニティプロジェクトの[mlx-audio](https://github.com/Blaizzy/mlx-audio)を通じて、Apple自身の[MLX](https://github.com/ml-explore/mlx)フレームワーク経由で動作し、Apple SiliconとPython 3.10〜3.12を必要とします。** MLXはAppleのオープンソース機械学習フレームワークで、Apple Siliconの統合メモリアーキテクチャ上のMetalのために一から作られています — これは、言語モデル向けにサイトの[Apple Silicon local LLMガイド](/local-llms/apple-silicon-local-llm-guide-2026)と[MLX vs. Ollama vs. llama.cppの比較](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)で扱っているのと同じフレームワークです。Hugging Face上でhexgradが公開した公式のKokoro-82Mの重みは、ネイティブにはPyTorchモデルです。MLX経路はコミュニティによる移植であり、Appleやhexgradによる公式リリースではありません。また、mlx-audioはメモリ使用量を抑えるための量子化(bf16、8ビット、4ビット)バリアントも提供しています。',
          '**Piperは、Apple Siliconを含むどのプラットフォームでもGPUに一切触れません — これは設計であり、制約ではありません。** Piperはespeak-ngでテキストを音素に変換し、高速なCPU推論向けに[ONNX Runtime](https://onnxruntime.ai/)にエクスポートされたモデルで音声を合成します。この設計上の選択こそ、Piperが Raspberry Piでもリアルタイムに動く理由です — 完全なアーキテクチャとインストール手順はPromptQuorumの[Piper TTSレビュー](/power-local-llm/piper-tts-review)を参照してください。',
          '**XTTS v2のApple SiliconのMetal(MPS)対応は現時点では機能しません。** [coqui-ai/TTS GitHubリポジトリ](https://github.com/coqui-ai/TTS/issues/3649)で追跡されているissue「Unable to use xtts_v2 with mps device on Apple Silicon」は、MPSデバイスでXTTS v2を実行しようとすると、完了せずにハングすることを記録しています。Coqui自身のプロジェクトも、Apple SiliconのGPU対応を公式にサポートしているとは記載していません。実際には、これはXTTS v2がMacではCPUのみで動作することを意味し、他のプラットフォームでも同じ[Coqui TTSツールキット](/power-local-llm/coqui-tts-review)(MPL-2.0ライセンス)を通じて実行されます。',
          '**Barkには実験的なApple Silicon MPS対応があり、環境変数の背後にあります。** `SUNO_ENABLE_MPS=True`を設定するとMetalアクセラレーションが有効になります([suno-ai/bark GitHubリポジトリ](https://github.com/suno-ai/bark)での議論による)。ただし、Barkが依存する一部のPyTorchオペレーターは当時MPS向けに実装されておらず、それらのステップは部分的にCPUへフォールバックします。Barkは、統合メモリの少ないMacでのメモリ負荷を軽減するための`SUNO_USE_SMALL_MODELS=True`フラグもサポートしています。',
        ],
        note: 'コミュニティが保守するTTSプロジェクトのApple Siliconアクセラレーション状況は、この記事が更新されるよりも速くリリース間で変わる可能性があります — ここに書かれている内容が現在の動作と一致すると想定する前に、各プロジェクト自身のGitHub issueとREADMEを確認してください。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'MLXアクセラレーションでKokoroをMacにインストールするには?',
        content:
          'このウォークスルーでは、コミュニティのmlx-audioプロジェクトをインストールし、[mlx-audio GitHubリポジトリ](https://github.com/Blaizzy/mlx-audio)に文書化されたセットアップを使って、AppleのMLXフレームワーク経由でKokoro-82Mを動かします。',
        numberedItems: [
          {
            title: 'サポートされているPythonバージョンのApple Siliconであることを確認する。',
            whyItMatters: 'mlx-audioにはApple Silicon Mac(M系チップ)とPython 3.10〜3.12が必要です。MLXはIntel Macでは一切動作しないため、この経路はApple Silicon専用です。',
          },
          {
            title: 'mlx-audioをインストールする。',
            whyItMatters: 'Python仮想環境で`pip install mlx-audio`を実行します。これによりMLX自体(バージョン0.31以降)がオーディオパイプラインと一緒にインストールされます。',
          },
          {
            title: 'コマンドラインから最初の音声合成を実行する。',
            whyItMatters: 'このパッケージには、初回使用時にKokoro-82Mの重みをダウンロードし、テキスト文字列からWAVファイルを合成するCLIエントリポイントが同梱されています — CLIフラグはリリース間で変わる可能性があるため、正確なコマンドはプロジェクトの現在のREADMEを確認してください。',
          },
          {
            title: '声を選び、任意で量子化モデルバリアントを選ぶ。',
            whyItMatters: 'Kokoro-82Mには複数の言語にわたる54種類の声プリセットが同梱されています。mlx-audioはbf16、8ビット、4ビットの量子化バリアントも提供しており、精度を少し下げる代わりにメモリフットプリントを小さくできます。統合メモリの少ないMacで有用です。',
          },
          {
            title: '自分のPythonアプリケーションに統合する。',
            whyItMatters: '一度きりのCLI合成を超える用途では、CLIを繰り返し呼び出すのではなく、mlx-audioのPython APIを直接呼び出して、呼び出しごとのモデル再読み込みのコストを避けてください。',
          },
        ],
        note: 'これはコミュニティプロジェクトであり、Appleやhexgradの公式リリースではありません — デプロイ前に[mlx-audioリポジトリ](https://github.com/Blaizzy/mlx-audio)で現在のインストール手順を確認してください。コマンド名やフラグは変わる可能性があります。',
      },
      intelMacs: {
        id: 'intel-macs',
        title: 'Intel Macでは何が変わるか?',
        content: [
          '**Intel Macでは、MLXアクセラレーションのKokoro経路は完全に利用できません — MLXにはApple Siliconが必要で、Intelハードウェアでは一切動作しません。** ここで扱う他のすべてのエンジンはIntelでも引き続き動作します。どれもApple Neural Engineや Apple Silicon固有のGPUアクセラレーションに依存して機能しているわけではなく、単にCPUで動くだけだからです。',
        ],
        items: [
          '**PiperはIntel/Apple Siliconの区別の影響を受けません。** どのプラットフォームでも設計上CPUのみなので、Piperに限って言えば、Intel Macでもハードウェア世代を別にすればApple Silicon Macと同等の性能を発揮します。',
          '**Kokoroは公式のPyTorchの重みを通じてIntel Macでも引き続き動作しますが、MLXアクセラレーション経路は使えません。** mlx-audio経由のApple Silicon固有のMetal経路は失いますが、モデル自体(8200万パラメータ)は小さいため、CPUでも十分実用的に動作します。',
          '**XTTS v2とBarkは、IntelでもApple Siliconでも同一に動作します。どちらも現時点でどのMacでもCPUのみで動作しているためです** — XTTS v2はMPS対応が壊れているため、Barkは MPS対応が実験的かつ部分的であるためです。どちらもApple Siliconでもともと成熟したアクセラレーション経路を持っていないため、Apple SiliconからIntelに移っても実質的な機能の喪失はありません。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'これらのエンジンをどれも使うべきでないのはどんなときか?',
        content: [
          '**この比較にある4つのエンジンはどれも、すべてのMac TTSのユースケースに適しているわけではありません — それぞれ、別のツールやクラウドAPIの方が適している状況があります。**',
        ],
        items: [
          '❌ **クローンした声を伴う、確実な商用ライセンスが必要な場合。** XTTS v2のCPMLライセンスは非商用であり、Coqui AIが2023年12月に有料サービスを終了して以来、商用ライセンスへの確認された有効な道筋はありません — マネージド型の商用クラウド代替については、PromptQuorumの[ElevenLabs比較](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)を参照してください。',
          '❌ **確実なアクティブメンテナンスが必要な場合。** Barkの公開GitHubリポジトリは2024年4月5日以降コミットがありません。継続的な修正やアップデートがプロジェクトにとって重要なら、Piper(Open Home Foundationがアクティブに保守)やKokoro(mlx-audioを中心とした活発に利用されているコミュニティエコシステム)の方が安全な選択です。',
          '❌ **コミュニティプロジェクトへの依存なしに、今すぐ本番グレードのApple Silicon GPU対応が必要な場合。** KokoroのMLX経路はコミュニティプロジェクトを通じて動作しており、Appleやhexgradの公式リリースではありません — 良いものではあっても、ベンダー保証があるわけではないと考えてください。',
          '❌ **非常に限られたApple Siliconメモリ(8GBベース構成)で、同時に大規模なローカルLLMも動かしながらリアルタイムの対話型音声が必要な場合。** メモリが限られたMac上で大きなXTTS v2やBarkのプロセスをLLMと並行して動かすのはきついことがあります。PiperとKokoroの小さなフットプリントの方が余裕を残せます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Apple Silicon Mac向けのベストなローカルTTSエンジンは何ですか?',
            a: 'Apple自身のMLXフレームワーク経由でApple SiliconのGPU(Metal)アクセラレーションが特に欲しい場合、コミュニティのmlx-audioプロジェクトを通じて動かすKokoro-82Mが最良の選択です。どのMacでも同じように動く、最もシンプルなインストールが欲しい場合は、どのプラットフォームでも設計上CPUのみで動作するPiperの方が良い選択です。',
          },
          {
            q: 'PiperはMacでGPUを使いますか?',
            a: 'いいえ。Piperは、Apple SiliconとIntel Macを含むすべてのプラットフォームで設計上CPUのみです。espeak-ngでテキストを音素に変換し、ONNX Runtimeを通じて音声を合成します。これが、GPUなしでもRaspberry Piでリアルタイムに動作できる理由です。',
          },
          {
            q: 'Kokoro-82MはApple SiliconでGPUアクセラレーションを使って動きますか?',
            a: 'はい、コミュニティプロジェクトのmlx-audioを通じて可能です。これはAppleのMLXフレームワーク経由でKokoro-82Mを動かします — Apple Siliconの統合メモリアーキテクチャ上のMetal向けに特別に作られたフレームワークです。hexgradによる公式のKokoro-82Mの重みは PyTorchモデルです。MLX経路はコミュニティによる移植であり、公式リリースではなく、Apple Silicon Mac(Intel Macでは使えません)とPython 3.10〜3.12を必要とします。',
          },
          {
            q: 'XTTS v2はApple Siliconで動きますか?',
            a: '動きますが、CPUのみです。XTTS v2のMetal(MPS)デバイス対応は、coqui-ai/TTSのGitHubリポジトリで追跡されている文書化された未解決の問題(issue #3649)であり、MPSデバイスを使おうとすると完了せずにハングします。Coquiのプロジェクトは、XTTS v2に対するApple SiliconのGPUアクセラレーションを公式にサポートしていないため、どのMacでもCPUのみの性能を想定してください。',
          },
          {
            q: 'BarkはApple Siliconでアクセラレーションされていますか?',
            a: '部分的に、かつ実験的にです。SUNO_ENABLE_MPS=True環境変数を設定すると、BarkのMetal GPUアクセラレーションが有効になりますが、依存する一部のPyTorchオペレーターがMPS向けに実装されていないため、一部の処理ステップは今もCPUにフォールバックします。Barkのメンテナー自身も、これは実験的であり、本番向けではないと説明しています。',
          },
          {
            q: 'Intel Macでこれらのエンジンを使えますか?',
            a: 'Piper、XTTS v2、Barkはいずれも、機能するのにApple Silicon固有のアクセラレーションを必要としないため、Intel Macで動作します — 設計上CPUで動作する(Piper)か、GPUアクセラレーション経路が未解決・部分的なためいずれにせよCPUで動作する(XTTS v2、Bark)かのどちらかです。KokoroのMLXアクセラレーション経路は特にApple Siliconを必要とし、Intel Macでは一切動作しませんが、Kokoroの公式PyTorchの重みはMLXアクセラレーションなしでもIntelで引き続き動作します。',
          },
          {
            q: 'これらのエンジンの中で特定の声をクローンできるのはどれですか?',
            a: 'ここで扱う4つのうち、短い参照音声クリップ(公式のモデルカードによればわずか6秒)から声をクローンできるのはXTTS v2だけです。Piper、Kokoro、Barkはいずれも、その場で任意の声をクローンするのではなく、事前学習済みまたはプリセットの声を使用します。完全なクローニングの詳細とライセンスについては、PromptQuorumの専用のXTTS v2レビューを参照してください。',
          },
          {
            q: 'これらのローカルTTSエンジンのうち、Apple Silicon Macでの利用に有料ライセンスが必要なものはありますか?',
            a: 'ここで扱うエンジンのうち、macOSやApple Silicon利用そのものに料金を課すものはありません。Piper(GPL-3.0-or-later)、Kokoro(Apache-2.0)、Bark(MIT)はいずれもプラットフォームに関係なく無料のオープンソースソフトウェアです。XTTS v2は利用自体は無料ですが、非商用ライセンス(CPML)の下にあります — この制限はApple Silicon、Intel、Windows、Linuxのいずれでも等しく適用され、どのMacを使うかとは無関係です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Apple Siliconに限って言えば、Kokoro-82Mはこの4つのエンジンの中で唯一、Apple自身のMLXフレームワーク上に構築されたコミュニティのmlx-audioプロジェクトを通じて、MacのMetal GPUへの本物の、目的を持って作られた経路を持つため際立っています — そして、それは十分に小さい(8200万パラメータ、Apache-2.0ライセンス)ため、このアクセラレーションをセットアップする価値があります。シンプルさとハードウェア間の一貫性が生の速度より重要な場合、Piperが引き続き適切なデフォルトです。あらゆるプラットフォームでCPUのみなので、Apple Silicon固有の設定、トラブルシューティング、Intel Macでの退行の心配が一切不要です。XTTS v2は、声のクローニングが特に必要で、非商用ライセンスを受け入れられる場合に限り、CPUのみの性能低下に見合う価値があります。Barkは、その独特な非音声サウンドのために検討する価値があるだけで、Apple Siliconのアクセラレーションと全体的なメンテナンス状況のどちらも不安定である点に注意してください。迷ったら、まずはPiperで最もシンプルなインストールから始め、Metalアクセラレーションが欲しいと確信したらmlx-audio経由のKokoroに移行し、声のクローニングが必須要件になったときだけXTTS v2に手を伸ばしてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Hugging Face上のKokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) — 公式モデルカード:パラメータ、ライセンス、アーキテクチャ。',
          '[GitHub上のmlx-audio](https://github.com/Blaizzy/mlx-audio) — Apple SiliconでAppleのMLXフレームワーク経由でKokoro-82Mを動かすコミュニティプロジェクト。',
          '[coqui-ai/TTS GitHub issue #3649](https://github.com/coqui-ai/TTS/issues/3649) — 「Unable to use xtts_v2 with mps device on Apple Silicon」、未解決のMPSハングを記録。',
          '[suno-ai/bark GitHubリポジトリ](https://github.com/suno-ai/bark) — SUNO_ENABLE_MPSを介した実験的なApple Silicon MPS対応を記録するissueとプルリクエスト。',
          '[Apple MLXフレームワーク](https://github.com/ml-explore/mlx) — Apple SiliconにネイティブなMetal GPUアクセラレーションを備えた、Appleの公式オープンソース機械学習フレームワーク。',
          '[Piper TTSレビュー](/power-local-llm/piper-tts-review) — インストールコマンドとライセンス履歴を含む、PromptQuorumの専用レビュー。',
          '[XTTS v2レビュー](/power-local-llm/xtts-v2-review)、[Coqui TTSレビュー](/power-local-llm/coqui-tts-review)、[Bark TTSレビュー](/power-local-llm/bark-tts-review) — ここで扱う他のエンジンについてのPromptQuorumの専用レビュー。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Piper TTSレビュー](/power-local-llm/piper-tts-review) — この比較で扱った、高速でCPUのみの、寛容なライセンスのエンジンを詳しく解説。',
          '[XTTS v2レビュー](/power-local-llm/xtts-v2-review) — ここで扱った声のクローニングモデル。非商用のCPMLライセンスを含む。',
          '[Coqui TTSレビュー](/power-local-llm/coqui-tts-review) — XTTS v2(および他のモデル)を実行するツールキット。MPL-2.0ライセンス。',
          '[Bark TTSレビュー](/power-local-llm/bark-tts-review) — ここで扱った表現力豊かな非音声オーディオエンジン。メンテナンス状況を含む。',
          '[Apple Silicon local LLMガイド](/local-llms/apple-silicon-local-llm-guide-2026) — メモリ階層、Metal GPUアクセラレーション、TTS以外のローカルAI向けのMac選び。',
          '[MLX vs. Ollama vs. llama.cpp on Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — このガイドがKokoroで扱っているのと同じMLXフレームワークを、ローカル言語モデル向けに解説。',
          '[ElevenLabs vs. Piper vs. XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — マネージド型の商用オプションを検討している読者向けの、クラウドとローカルの比較。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mac向けベストなローカルTTSエンジン(2026):実際にApple Siliconを使うのはどれか',
      description:
        'PiperはどのMacでもCPUのみ。KokoroはMLX経由でMetalを使用可能。XTTS v2のMPS対応は既知の壊れたGitHub issue。Apple Siliconで実際にインストールすべきローカルTTSエンジンを解説。',
      url: 'https://promptquorum.com/ja/power-local-llm/best-local-tts-mac',
      inLanguage: 'ja',
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Apple Silicon Mac向けのローカルテキスト読み上げエンジンを評価する開発者' },
      about: [
        { '@type': 'Thing', name: 'Piper' },
        { '@type': 'Thing', name: 'Kokoro-82M' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Bark' },
        { '@type': 'Thing', name: 'Apple Silicon' },
        { '@type': 'Thing', name: 'MLX' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/best-local-tts-mac' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Mac向けベストなローカルTTSエンジン(2026)', item: 'https://promptquorum.com/ja/power-local-llm/best-local-tts-mac' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/best-local-tts-mac-hero-zh.webp',
    title: 'Mac 最佳本地 TTS 引擎(2026):哪个真正用上了 Apple Silicon',
    seoTitle: 'Mac 最佳本地 TTS 2026:Apple Silicon 指南',
    intro:
      '大多数"最佳本地 TTS"横评把每台 Mac 都一视同仁,但 Apple Silicon 实际上改变了哪个引擎才真正划算。[Piper](/power-local-llm/piper-tts-review) 完全在 CPU 上运行,从不触碰 GPU —— 无论是在 Apple Silicon Mac 还是 Intel Mac 上,表现都差不多。[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) 可以通过社区项目 [mlx-audio](https://github.com/Blaizzy/mlx-audio),经由 Apple 自家的 [MLX](https://github.com/ml-explore/mlx) 框架运行,而这个框架正是专为 Apple Silicon 的 Metal GPU 打造的。相比之下,[XTTS v2](/power-local-llm/xtts-v2-review) 完全不支持 Apple 的 Metal Performance Shaders(MPS)后端 —— 一个持续跟踪的 [GitHub issue](https://github.com/coqui-ai/TTS/issues/3649) 记录了使用 MPS 设备只会卡死不动 —— 因此它在任何 Mac 上都只能跑 CPU。本指南比较各引擎在 Apple Silicon 上实际的表现,指出 Intel Mac 被限制在哪些纯 CPU 选项上,并告诉你该安装哪一个。',
    metaDescription:
      'Piper 在所有 Mac 上都只用 CPU。Kokoro 可以通过 MLX 使用 Metal。XTTS v2 的 MPS 支持是已知的失效 GitHub issue。这里是 Apple Silicon 上真正该安装的本地 TTS 引擎。',
    twitterDescription:
      'Mac 最佳本地 TTS 2026:Piper 从不触碰 GPU,Kokoro 可以通过 Apple 的 MLX 框架运行,XTTS v2 的 Metal(MPS)支持是已记录的失效 GitHub issue。这里是在 Apple Silicon 与 Intel 上真正该安装的引擎。',
    audience:
      '正在 Apple Silicon Mac 上构建语音应用、无障碍工具或有声书流水线,需要挑选真正用上硬件的本地文本转语音引擎的开发者和个人开发者。',
    readTime: '阅读约13分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac 最佳本地 TTS',
    targetKeywords: [
      'mac 最佳本地tts',
      'apple silicon 最佳文本转语音',
      'kokoro tts mac',
      'piper tts mac',
      'xtts v2 apple silicon',
      '本地tts mlx metal',
      '文本转语音 m4 m5 mac',
      '本地tts intel mac',
    ],
    current_models_mentioned: ['Piper', 'Kokoro-82M', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M-series', 'M4', 'M5', 'Intel Mac'],
    leadAnswerBlock:
      '**如果你想要 GPU 加速,Kokoro-82M 是 Apple Silicon Mac 上最好的本地 TTS 引擎,因为它可以通过社区项目 [mlx-audio](https://github.com/Blaizzy/mlx-audio),经由 Apple 自家的 [MLX](https://github.com/ml-explore/mlx) 框架运行;如果你想要最简单、可移植性最强的安装方式,在 Intel 和 Apple Silicon Mac 上表现完全一致,[Piper](/power-local-llm/piper-tts-review) 是最佳选择,因为它在两者上都不使用 GPU。** 如果你特别需要声音克隆,[XTTS v2](/power-local-llm/xtts-v2-review) 是可选项,但它的 Metal(MPS)支持是一个已记录的失效 [GitHub issue](https://github.com/coqui-ai/TTS/issues/3649) —— 预计在任何 Mac 上都只有 CPU 性能。[Bark](/power-local-llm/bark-tts-review) 在一个环境变量背后有实验性的 MPS 支持,部分运算仍会退回到 CPU。',
    quickAnswerTop: {
      question: 'Mac 上最好的本地文本转语音引擎是什么?',
      answer:
        '如果你想要一个通过 Apple 自家 MLX 框架、真正跑在 Apple Silicon Metal GPU 上的本地 TTS 引擎,使用 Kokoro-82M(通过社区 mlx-audio 项目)——它体积小(8200 万参数)、采用 Apache-2.0 许可,并提供量化版本以降低内存占用。如果你想要在任何 Mac(无论 Apple Silicon 还是 Intel)上表现一致、尽可能简单的安装方式,使用 Piper——它在设计上只用 CPU,并且被设计为即使在 Raspberry Pi 上也能实时运行。只有在你特别需要从一段短音频样本克隆声音时才使用 XTTS v2——但要知道,它在 Apple Silicon 上的 GPU(MPS)支持是一个已记录但未解决的 GitHub issue,因此在 Mac 上实际只能用 CPU 运行,而且它的 Coqui Public Model License(CPML)是非商用的。除非你特别想要它的非语音音效(笑声、叹息),否则应避免使用 Bark;它自己的维护者明确将其 Apple Silicon GPU 支持标注为实验性,而且其 GitHub 仓库自 2024 年 4 月以来没有任何提交。',
      bullets: [
        'Kokoro-82M:8200 万参数,Apache-2.0,可通过社区 mlx-audio 项目经由 Apple 的 MLX 框架运行 —— 这里唯一拥有真正 Apple Silicon GPU 路径的引擎。',
        'Piper:设计上只用 CPU(ONNX Runtime),GPL-3.0-or-later,在 Intel 和 Apple Silicon Mac 上表现一致,因为两者都不使用 GPU。',
        'XTTS v2:可从约 6 秒音频克隆声音,但 Apple Silicon 的 MPS(Metal)支持是已记录的失效 GitHub issue —— 在 Mac 上只能用 CPU,许可为非商用 CPML。',
        'Bark:通过环境变量提供实验性的 Apple Silicon MPS 支持,部分运算仍会退回到 CPU;MIT 许可,但自 2024 年 4 月起无提交。',
        'Intel Mac 被限制在纯 CPU 路径(Piper,以及 CPU 模式下的 XTTS v2/Bark)—— MLX 加速的 Kokoro 路径需要 Apple Silicon。',
      ],
      updatedDate: '2026-09-11',
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: '按场景选择最佳引擎', anchor: 'best-choice' },
      { label: '比较:Apple Silicon 适配度', anchor: 'comparison' },
      { label: '哪些引擎真正在 Mac 上用 GPU?', anchor: 'gpu-acceleration' },
      { label: '用 MLX 加速安装 Kokoro', anchor: 'install-walkthrough' },
      { label: 'Intel Mac 上有何不同', anchor: 'intel-macs' },
      { label: '什么时候都不该用这些引擎', anchor: 'limitations' },
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
            text: '在 Apple Silicon 上做本地文本转语音,四大本地引擎中只有 Kokoro-82M 拥有真正的 Metal GPU 路径(通过社区 mlx-audio 项目跑在 Apple 自家的 MLX 框架上);Piper 是在 Intel Mac 上表现一致的简单纯 CPU 选项;XTTS v2 提供声音克隆,但其 Apple Silicon MPS 支持是已记录的失效 GitHub issue;Bark 的 MPS 支持则明确是实验性的。',
          },
          {
            type: 'plain-terms',
            text: '并不是所有能在 Mac 上运行的免费文本转语音程序都真正用上了 Mac 的显卡芯片——有些只在普通处理器上运行,虽然能用,但比本可以达到的速度要慢。Kokoro 是通过一个叫 MLX 的项目专门设计来利用 Apple 自家芯片架构的;其他引擎要么在设计上直接跳过 GPU(Piper),要么试图使用 GPU 却遇到了尚未解决的问题(XTTS v2、Bark)。',
          },
        ],
        items: [
          'Kokoro-82M:Apache-2.0,8200 万参数,通过社区 mlx-audio 项目经由 Apple 的 MLX 框架运行 —— 真正的 Apple Silicon 加速路径。',
          'Piper:GPL-3.0-or-later,通过 ONNX Runtime 在设计上只用 CPU —— 在 Intel 和 Apple Silicon Mac 上性能表现一致。',
          'XTTS v2:非商用 CPML 许可,可从约 6 秒音频克隆声音,但其 Metal(MPS)支持是已跟踪但未解决的 GitHub issue —— 在 Mac 上只用 CPU 运行。',
          'Bark:MIT 许可,通过环境变量提供实验性的 Apple Silicon MPS 支持,公开仓库自 2024 年 4 月起无提交。',
          'Intel Mac 完全无法使用 MLX 加速的 Kokoro 路径 —— MLX 需要 Apple Silicon。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本指南比较 PromptQuorum 独立评测过的四款本地 TTS 引擎(Piper、Kokoro、XTTS v2、Bark)。每一款都有各自的专门评测链接,可查看安装命令、许可细节和完整的局限说明。',
          },
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '究竟该安装哪一款本地 TTS 引擎?',
        content: [
          '**正确的引擎取决于你是否需要 GPU 加速、声音克隆,还是最广泛的 Mac 兼容性 —— 没有一款引擎能在三者上全部胜出。** Kokoro 是这里唯一拥有真正 Apple Silicon GPU 路径的引擎;Piper 可移植性最强;XTTS v2 是唯一能克隆声音的。',
        ],
        items: [
          '🏆 **Apple Silicon 上的综合最佳:** 通过 [mlx-audio](https://github.com/Blaizzy/mlx-audio) 运行的 [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) —— 这里唯一拥有真正 Metal GPU 路径的引擎,体积足够小(8200 万参数),能在任何 Apple Silicon Mac 上流畅运行。',
          '**简单性和 Intel 兼容性最佳:** [Piper](/power-local-llm/piper-tts-review) —— 设计上只用 CPU,因此无论是在 M 系列芯片还是老款 Intel Mac 上,安装和性能都完全一致。',
          '**需要声音克隆时最佳:** [XTTS v2](/power-local-llm/xtts-v2-review) —— 可从约 6 秒的参考音频克隆声音,但在任何 Mac 上都只能用 CPU 运行,且许可仅限非商用。',
          '**富有表现力的非语音音效最佳:** [Bark](/power-local-llm/bark-tts-review) —— 能从文本生成笑声、叹息和简单音乐,Apple Silicon 上的 GPU 支持是实验性(部分)的,且其仓库自 2024 年 4 月起已处于休眠状态。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁应该用哪一款引擎?',
        content: [
          '**把引擎匹配到你的 Mac 和实际需求上,而不是匹配到 GitHub 星标最多的那一款。** 只有当你生成音频的数量和频率足以让纯 CPU 合成显得慢时,GPU 加速才真正重要。',
        ],
        items: [
          '🧭 **Apple Silicon Mac,想要最快的本地选项:** 通过 mlx-audio 运行的 Kokoro —— 这里唯一专门编写以通过 MLX 使用 Metal 的引擎。',
          '🧭 **包括老款 Intel 机型在内的任何 Mac:** Piper —— 设计上只用 CPU,没有任何 Apple Silicon 专属配置或排查问题需要处理。',
          '🧭 **需要从一段短录音克隆特定声音:** XTTS v2 —— 接受它在 Mac 上实际只能用 CPU 运行,且其许可为非商用。',
          '🧭 **想要笑声、叹息或环境音,而不只是语音:** Bark —— 但要为其实验性的 Apple Silicon 路径预留额外的安装时间,并先确认当前的维护状态。',
          '❌ **如果你需要活跃维护或有保证的性能,跳过 Bark** —— 其公开仓库自 2024 年 4 月起没有任何提交,这与 Apple Silicon 问题无关。',
          '❌ **如果你在构建商业产品,跳过 XTTS v2** —— 其 Coqui Public Model License(CPML)为非商用,发布该模型的公司 Coqui AI 已于 2023 年 12 月终止付费服务。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Piper、Kokoro、XTTS v2 和 Bark 在 Apple Silicon 适配度上如何比较?',
        content: [
          '**Kokoro 是这个比较中唯一拥有真正、专门构建的 Apple Silicon GPU 路径的引擎;其余引擎要么设计上只用 CPU,要么因未解决的 bug 而只能用 CPU。** 下表从真正决定 Mac 适配度的四个因素为各引擎打分:是否使用 Apple Silicon 加速、所需内存量、macOS 安装的繁琐程度,以及音质。',
        ],
        columns: ['引擎', 'Apple Silicon 加速', 'RAM 占用', 'macOS 安装', '音质'],
        rows: [
          {
            '引擎': '[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)',
            'Apple Silicon 加速': '有 —— 通过 MLX 使用 Metal(mlx-audio)',
            'RAM 占用': '低(8200 万参数,有量化版本)',
            'macOS 安装': 'pip install + mlx-audio,仅限 Apple Silicon',
            '音质': '自然,接近大型云端模型',
          },
          {
            '引擎': '[Piper](/power-local-llm/piper-tts-review)',
            'Apple Silicon 加速': '设计上无 —— 纯 CPU ONNX Runtime',
            'RAM 占用': '非常低(每个声音约 50~100MB)',
            'macOS 安装': '`pip install piper-tts`,无需 GPU 配置',
            '音质': '清晰,但语调略显机械',
          },
          {
            '引擎': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Apple Silicon 加速': '无 —— MPS 会卡死(GH issue #3649)',
            'RAM 占用': '中到高(完整克隆模型)',
            'macOS 安装': '`pip install coqui-tts`,Mac 上只用 CPU',
            '音质': '高品质,可克隆特定声音',
          },
          {
            '引擎': '[Bark](/power-local-llm/bark-tts-review)',
            'Apple Silicon 加速': '实验性 —— `SUNO_ENABLE_MPS=True`',
            'RAM 占用': '高(可用 small-models 标志降低)',
            'macOS 安装': '从 GitHub pip install,无 PyPI 包',
            '音质': '富有表现力,非确定性',
          },
        ],
        note: '音质评分是基于各引擎已公开的架构和 PromptQuorum 的专门评测(每行均有链接)所作的定性描述,并非 PromptQuorum 进行的盲听测试,这里没有给出任何数值化的 MOS(平均意见得分)或基准测试数字。',
      },
      gpuAcceleration: {
        id: 'gpu-acceleration',
        title: '哪些引擎真正在 Mac 上用 GPU?',
        content: [
          '**只有 Kokoro 拥有一条真正、专门构建通往 Apple Silicon Metal GPU 的路径;Piper 在设计上完全跳过 GPU,而 XTTS v2 和 Bark 在 Mac 上的 GPU 支持都是未解决或部分的。** 这是在 Apple Silicon 上区分这些引擎的最大因素,人们很容易以为"能在 Mac 上运行"就等于"用上了 Mac 的 GPU"——但通常并非如此。',
        ],
        items: [
          '**Kokoro-82M 通过社区项目 [mlx-audio](https://github.com/Blaizzy/mlx-audio),经由 Apple 自家的 [MLX](https://github.com/ml-explore/mlx) 框架运行,需要 Apple Silicon 和 Python 3.10~3.12。** MLX 是 Apple 的开源机器学习框架,从底层为 Apple Silicon 统一内存架构上的 Metal 打造 —— 与本站 [Apple Silicon 本地 LLM 指南](/local-llms/apple-silicon-local-llm-guide-2026) 和 [MLX 对比 Ollama 对比 llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) 中针对语言模型讲解的是同一个框架。hexgrad 在 Hugging Face 上发布的官方 Kokoro-82M 权重原生是 PyTorch 模型;MLX 路径是社区移植版本,并非 Apple 或 hexgrad 的官方发布,mlx-audio 还提供 bf16、8 位、4 位量化版本以降低内存占用。',
          '**Piper 在任何平台(包括 Apple Silicon)上都从不触碰 GPU —— 这是设计使然,而非局限。** Piper 用 espeak-ng 将文本转换为音素,再通过导出到 [ONNX Runtime](https://onnxruntime.ai/) 的模型进行快速 CPU 推理合成音频。正是这个设计选择让 Piper 即便在 Raspberry Pi 上也能实时运行 —— 完整架构和安装步骤参见 PromptQuorum 的 [Piper TTS 评测](/power-local-llm/piper-tts-review)。',
          '**XTTS v2 的 Apple Silicon Metal(MPS)支持目前并不能正常工作。** [coqui-ai/TTS GitHub 仓库](https://github.com/coqui-ai/TTS/issues/3649) 中跟踪的一个 issue,标题为"Unable to use xtts_v2 with mps device on Apple Silicon",记录了在 MPS 设备上尝试运行 XTTS v2 只会卡死而无法完成。Coqui 自己的项目也没有将 Apple Silicon GPU 支持列为正式支持。实际上,这意味着 XTTS v2 在 Mac 上只能用 CPU 运行,而运行它所用的正是在其他平台上运行它的同一个 [Coqui TTS 工具包](/power-local-llm/coqui-tts-review)(MPL-2.0 许可)。',
          '**Bark 有实验性的 Apple Silicon MPS 支持,隐藏在一个环境变量背后。** 设置 `SUNO_ENABLE_MPS=True` 可启用 Metal 加速,依据是 [suno-ai/bark GitHub 仓库](https://github.com/suno-ai/bark) 上的讨论,但 Bark 依赖的一部分 PyTorch 算子当时尚未针对 MPS 实现,导致这些步骤部分退回到 CPU。Bark 还支持 `SUNO_USE_SMALL_MODELS=True` 标志,专门用来降低统一内存较少的 Mac 上的内存压力。',
        ],
        note: '社区维护的 TTS 项目在 Apple Silicon 上的加速状态,变化速度可能快于本文的更新周期 —— 在假设这里描述的内容与当前行为一致之前,请查阅各项目自己的 GitHub issue 和 README。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: '如何在 Mac 上用 MLX 加速安装 Kokoro?',
        content:
          '本教程安装社区 mlx-audio 项目,使用 [mlx-audio GitHub 仓库](https://github.com/Blaizzy/mlx-audio) 中记录的配置方法,通过 Apple 的 MLX 框架运行 Kokoro-82M。',
        numberedItems: [
          {
            title: '确认你使用的是 Apple Silicon,且 Python 版本受支持。',
            whyItMatters: 'mlx-audio 需要 Apple Silicon Mac(M 系列芯片)和 Python 3.10~3.12;MLX 在 Intel Mac 上完全无法运行,因此这条路径仅限 Apple Silicon。',
          },
          {
            title: '安装 mlx-audio。',
            whyItMatters: '在 Python 虚拟环境中运行 `pip install mlx-audio`。这会连同音频流水线一起拉取 MLX 本体(0.31 或更高版本)。',
          },
          {
            title: '从命令行运行首次合成。',
            whyItMatters: '该软件包自带一个 CLI 入口,首次使用时会下载 Kokoro-82M 权重,并从文本字符串合成 WAV 文件 —— CLI 参数可能随版本变化,请在部署前查阅项目当前的 README 确认准确命令。',
          },
          {
            title: '选择一个声音,并可选择量化模型版本。',
            whyItMatters: 'Kokoro-82M 内置 54 种覆盖多种语言的声音预设。mlx-audio 还提供 bf16、8 位、4 位量化版本 —— 以略微牺牲质量为代价换取更小的内存占用,对统一内存较少的 Mac 很有用。',
          },
          {
            title: '集成到你自己的 Python 应用中。',
            whyItMatters: '如果需求超出一次性的命令行合成,请直接调用 mlx-audio 的 Python API,而不是反复调用 CLI,以避免每次调用都重新加载模型的开销。',
          },
        ],
        note: '这是一个社区项目,并非 Apple 或 hexgrad 的官方发布 —— 部署前请到 [mlx-audio 仓库](https://github.com/Blaizzy/mlx-audio) 核实当前的安装说明,命令名称和参数可能会变化。',
      },
      intelMacs: {
        id: 'intel-macs',
        title: 'Intel Mac 上有何不同?',
        content: [
          '**在 Intel Mac 上,MLX 加速的 Kokoro 路径完全不可用 —— MLX 需要 Apple Silicon,在 Intel 硬件上根本无法运行。** 这里介绍的其他所有引擎在 Intel 上仍能正常工作,因为它们都不依赖 Apple 的神经网络引擎或 Apple Silicon 专属的 GPU 加速才能运行,只是单纯在 CPU 上运行而已。',
        ],
        items: [
          '**Piper 不受 Intel 与 Apple Silicon 区别的影响。** 它在所有平台上设计上都只用 CPU,因此单就 Piper 而言,Intel Mac 的表现与 Apple Silicon Mac 相当,硬件世代差异除外。',
          '**Kokoro 通过其官方 PyTorch 权重仍能在 Intel Mac 上运行,只是没有 MLX 加速路径。** 你会失去通过 mlx-audio 使用的 Apple Silicon 专属 Metal 路径,但模型本身(8200 万参数)足够小,在 CPU 上也能可接受地运行。',
          '**XTTS v2 和 Bark 在 Intel 和 Apple Silicon Mac 上表现一致,因为两者目前在任何 Mac 上本来就只用 CPU 运行** —— XTTS v2 是因为 MPS 支持已损坏,Bark 是因为 MPS 支持是实验性且部分的。由于两者在 Apple Silicon 上本来就没有成熟的加速路径,从 Apple Silicon 换到 Intel 都不会有实质性的能力损失。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '什么时候都不该使用这些引擎?',
        content: [
          '**这个比较中的四款引擎没有一款适合所有 Mac TTS 使用场景 —— 每一款都有更适合用其他工具或云端 API 的情况。**',
        ],
        items: [
          '❌ **需要带声音克隆功能且有保证的商业许可。** XTTS v2 的 CPML 许可为非商用,自 Coqui AI 于 2023 年 12 月终止付费服务以来,没有已确认的有效商业许可途径 —— 如需托管式商业云端替代方案,参见 PromptQuorum 的 [ElevenLabs 对比](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)。',
          '❌ **需要有保证的活跃维护。** Bark 的公开 GitHub 仓库自 2024 年 4 月 5 日起没有任何提交;如果持续的修复和更新对你的项目很重要,Piper(由 Open Home Foundation 积极维护)或 Kokoro(围绕 mlx-audio 形成的活跃社区生态)是更安全的选择。',
          '❌ **需要今天就有生产级 Apple Silicon GPU 支持,且不依赖社区项目。** Kokoro 的 MLX 路径是通过一个社区项目运行的,并非 Apple 或 hexgrad 的官方发布 —— 把它当作是好用、但没有厂商保证的方案。',
          '❌ **需要在内存非常有限的 Apple Silicon(8GB 基础配置)上,同时运行一个大型本地 LLM 并进行实时交互式语音。** 在内存受限的 Mac 上同时运行大型 XTTS v2 或 Bark 进程和 LLM 可能会很吃紧;Piper 和 Kokoro 更小的内存占用能留出更多余量。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Apple Silicon Mac 上最好的本地 TTS 引擎是什么?',
            a: '如果你特别想要通过 Apple 自家 MLX 框架实现 Apple Silicon GPU(Metal)加速,通过社区 mlx-audio 项目运行的 Kokoro-82M 是最佳选择。如果你想要在任何 Mac 上表现一致的最简单安装方式,Piper 是更好的选择,因为它在所有平台上设计上都只用 CPU。',
          },
          {
            q: 'Piper 在 Mac 上使用 GPU 吗?',
            a: '不。Piper 在包括 Apple Silicon 和 Intel Mac 在内的所有平台上,设计上都只用 CPU。它用 espeak-ng 将文本转换为音素,并通过 ONNX Runtime 合成音频,这正是它即使没有任何 GPU 也能在 Raspberry Pi 上实时运行的原因。',
          },
          {
            q: 'Kokoro-82M 能在 Apple Silicon 上使用 GPU 加速运行吗?',
            a: '可以,通过社区项目 mlx-audio,它经由 Apple 自家的 MLX 框架运行 Kokoro-82M —— 该框架专为 Apple Silicon 统一内存架构上的 Metal 打造。hexgrad 发布的官方 Kokoro-82M 权重是 PyTorch 模型;MLX 路径是社区移植版本,而非官方发布,需要 Apple Silicon Mac(Intel Mac 无法使用)以及 Python 3.10~3.12。',
          },
          {
            q: 'XTTS v2 能在 Apple Silicon 上运行吗?',
            a: '能运行,但只能用 CPU。XTTS v2 的 Metal(MPS)设备支持是一个已记录但未解决的问题,在 coqui-ai/TTS 的 GitHub 仓库中被跟踪(issue #3649),尝试使用 MPS 设备只会卡死而无法完成。Coqui 的项目没有正式支持 XTTS v2 的 Apple Silicon GPU 加速,因此请预期在任何 Mac 上都只有 CPU 性能。',
          },
          {
            q: 'Bark 在 Apple Silicon 上有加速吗?',
            a: '部分且实验性地有。设置 SUNO_ENABLE_MPS=True 环境变量可启用 Bark 的 Metal GPU 加速,但其依赖的一部分 PyTorch 算子尚未针对 MPS 实现,因此部分处理步骤仍会退回到 CPU。Bark 自己的维护者也将其描述为实验性,尚未达到生产级别。',
          },
          {
            q: '我能在 Intel Mac 上使用这些引擎吗?',
            a: 'Piper、XTTS v2 和 Bark 都能在 Intel Mac 上运行,因为它们都不需要 Apple Silicon 专属加速才能运行 —— 要么是设计上就用 CPU(Piper),要么是因为其 GPU 加速路径本来就未解决或只是部分实现,所以反正也是用 CPU(XTTS v2、Bark)。Kokoro 的 MLX 加速路径专门需要 Apple Silicon,在 Intel Mac 上完全无法运行,但 Kokoro 的官方 PyTorch 权重在没有 MLX 加速的情况下仍能在 Intel 上运行。',
          },
          {
            q: '这些引擎中哪一个可以克隆特定声音?',
            a: '在这里介绍的四款引擎中,只有 XTTS v2 能从一段简短的参考音频片段(根据官方模型卡,最短仅需 6 秒)克隆声音。Piper、Kokoro 和 Bark 都使用预训练或预设声音,而不是即时克隆任意声音。完整的克隆细节和许可信息,参见 PromptQuorum 的专门 XTTS v2 评测。',
          },
          {
            q: '这些本地 TTS 引擎中,是否有任何一个在 Apple Silicon Mac 上使用需要付费许可?',
            a: '这里介绍的引擎中,没有任何一个专门针对 macOS 或 Apple Silicon 使用收费。Piper(GPL-3.0-or-later)、Kokoro(Apache-2.0)和 Bark(MIT)无论平台如何都是免费开源软件。XTTS v2 本身可以免费使用,但采用非商用许可(CPML)—— 这一限制在 Apple Silicon、Intel、Windows 或 Linux 上同等适用,与你使用哪种 Mac 无关。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '单就 Apple Silicon 而言,Kokoro-82M 在这四款引擎中脱颖而出,因为它是唯一通过社区 mlx-audio 项目、建立在 Apple 自家 MLX 框架之上,拥有一条真正、专门构建通往 Mac Metal GPU 的路径的引擎 —— 而且它体积足够小(8200 万参数,Apache-2.0 许可),值得为此配置这份加速。当简单性和跨硬件一致性比原始速度更重要时,Piper 仍是正确的默认选择:它在任何平台上都只用 CPU,因此没有任何 Apple Silicon 专属配置、排查或在 Intel Mac 上出现退步的担忧。只有在你特别需要声音克隆、且能接受其非商用许可的情况下,XTTS v2 才值得承受纯 CPU 带来的性能损失;Bark 只值得因其独特的非语音音效而考虑,但要注意它的 Apple Silicon 加速和整体维护状态都不稳定。如果拿不定主意,先从 Piper 开始安装最简单的方案,确认自己确实想要 Metal 加速后再迁移到通过 mlx-audio 运行的 Kokoro,只有在声音克隆成为硬性需求时才转向 XTTS v2。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Hugging Face 上的 Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) —— 官方模型卡:参数、许可和架构。',
          '[GitHub 上的 mlx-audio](https://github.com/Blaizzy/mlx-audio) —— 在 Apple Silicon 上通过 Apple 的 MLX 框架运行 Kokoro-82M 的社区项目。',
          '[coqui-ai/TTS GitHub issue #3649](https://github.com/coqui-ai/TTS/issues/3649) —— "Unable to use xtts_v2 with mps device on Apple Silicon",记录了未解决的 MPS 卡死问题。',
          '[suno-ai/bark GitHub 仓库](https://github.com/suno-ai/bark) —— 记录通过 SUNO_ENABLE_MPS 实现实验性 Apple Silicon MPS 支持的 issue 与 pull request。',
          '[Apple MLX 框架](https://github.com/ml-explore/mlx) —— Apple 的官方开源机器学习框架,为 Apple Silicon 提供原生 Metal GPU 加速。',
          '[Piper TTS 评测](/power-local-llm/piper-tts-review) —— PromptQuorum 的专门评测,包含安装命令和许可历史。',
          '[XTTS v2 评测](/power-local-llm/xtts-v2-review)、[Coqui TTS 评测](/power-local-llm/coqui-tts-review) 和 [Bark TTS 评测](/power-local-llm/bark-tts-review) —— PromptQuorum 对本文涉及的其他引擎的专门评测。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Piper TTS 评测](/power-local-llm/piper-tts-review) —— 本比较中涉及的快速、纯 CPU、宽松许可引擎的详细解读。',
          '[XTTS v2 评测](/power-local-llm/xtts-v2-review) —— 本文涉及的声音克隆模型,包含其非商用 CPML 许可。',
          '[Coqui TTS 评测](/power-local-llm/coqui-tts-review) —— 运行 XTTS v2(及其他模型)的工具包,MPL-2.0 许可。',
          '[Bark TTS 评测](/power-local-llm/bark-tts-review) —— 本文涉及的富有表现力的非语音音频引擎,包含其维护状态。',
          '[Apple Silicon 本地 LLM 指南](/local-llms/apple-silicon-local-llm-guide-2026) —— 内存分级、Metal GPU 加速,以及 TTS 之外本地 AI 的 Mac 选购建议。',
          '[MLX 对比 Ollama 对比 llama.cpp(Mac 版)](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) —— 本指南在 Kokoro 上涉及的同一个 MLX 框架,针对本地语言模型的解读。',
          '[ElevenLabs 对比 Piper 对比 XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) —— 为考虑托管式商业方案的读者准备的云端与本地对比。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mac 最佳本地 TTS 引擎(2026):哪个真正用上了 Apple Silicon',
      description:
        'Piper 在所有 Mac 上都只用 CPU。Kokoro 可以通过 MLX 使用 Metal。XTTS v2 的 MPS 支持是已知的失效 GitHub issue。这里是 Apple Silicon 上真正该安装的本地 TTS 引擎。',
      url: 'https://promptquorum.com/zh/power-local-llm/best-local-tts-mac',
      inLanguage: 'zh',
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估 Apple Silicon Mac 本地文本转语音引擎的开发者' },
      about: [
        { '@type': 'Thing', name: 'Piper' },
        { '@type': 'Thing', name: 'Kokoro-82M' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Bark' },
        { '@type': 'Thing', name: 'Apple Silicon' },
        { '@type': 'Thing', name: 'MLX' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/best-local-tts-mac' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Mac 最佳本地 TTS 引擎(2026)', item: 'https://promptquorum.com/zh/power-local-llm/best-local-tts-mac' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/best-local-tts-mac-hero-ar.webp',
    title: 'أفضل محرك TTS محلي لأجهزة Mac (2026): ما الذي يستخدم Apple Silicon فعليًا',
    seoTitle: 'أفضل TTS محلي لـ Mac 2026: دليل Apple Silicon',
    intro:
      'تتعامل معظم مقالات "أفضل TTS محلي" مع كل جهاز Mac بالطريقة نفسها، لكن Apple Silicon يغيّر فعليًا أي محرك يكون منطقيًا. يعمل [Piper](/power-local-llm/piper-tts-review) بالكامل على المعالج CPU ولا يلمس وحدة معالجة الرسومات GPU إطلاقًا — يعمل بأداء متقارب سواء على جهاز Mac بمعالج Apple Silicon أو بمعالج Intel. يمكن تشغيل [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) عبر إطار عمل [MLX](https://github.com/ml-explore/mlx) الخاص بشركة Apple، من خلال مشروع المجتمع [mlx-audio](https://github.com/Blaizzy/mlx-audio)، وهو مبني خصيصًا لوحدة معالجة الرسومات Metal في معالجات Apple Silicon. في المقابل، لا يدعم [XTTS v2](/power-local-llm/xtts-v2-review) خلفية Metal Performance Shaders (MPS) من Apple على الإطلاق — إذ توثّق [مشكلة GitHub](https://github.com/coqui-ai/TTS/issues/3649) متابَعة أن استخدام جهاز MPS يتسبب فقط في التعليق (hang) — لذا يعمل على المعالج CPU فقط على أي جهاز Mac. يقارن هذا الدليل ما يفعله كل محرك فعليًا على Apple Silicon، ويشير إلى أين تقتصر أجهزة Mac بمعالج Intel على الخيارات القائمة على المعالج CPU فقط، ويخبرك بأيها يجب تثبيته.',
    metaDescription:
      'يعمل Piper بالمعالج CPU فقط على كل جهاز Mac. يمكن لـ Kokoro استخدام Metal عبر MLX. دعم MPS في XTTS v2 هو مشكلة GitHub معطوبة معروفة. إليك محرك TTS المحلي الذي يجب تثبيته فعليًا على Apple Silicon.',
    twitterDescription:
      'أفضل TTS محلي لـ Mac 2026: لا يلمس Piper وحدة GPU إطلاقًا، ويمكن تشغيل Kokoro عبر إطار عمل MLX من Apple، ودعم Metal (MPS) في XTTS v2 هو مشكلة GitHub معطوبة وموثّقة. إليك ما يجب تثبيته فعليًا على Apple Silicon مقابل Intel.',
    audience:
      'المطورون والهواة الذين يبنون تطبيقات صوتية أو أدوات لإمكانية الوصول أو خطوط معالجة الكتب الصوتية على أجهزة Mac بمعالج Apple Silicon، ويحتاجون إلى اختيار محرك تحويل نص إلى كلام محلي يستخدم العتاد فعليًا.',
    readTime: '13 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'أفضل TTS محلي لـ Mac',
    targetKeywords: [
      'افضل tts محلي mac',
      'افضل تحويل نص الى كلام apple silicon',
      'kokoro tts mac',
      'piper tts mac',
      'xtts v2 apple silicon',
      'tts محلي mlx metal',
      'تحويل نص الى كلام m4 m5 mac',
      'tts محلي intel mac',
    ],
    current_models_mentioned: ['Piper', 'Kokoro-82M', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M-series', 'M4', 'M5', 'Intel Mac'],
    leadAnswerBlock:
      '**إذا أردت تسريع GPU، فإن Kokoro-82M هو أفضل محرك TTS محلي لأجهزة Mac بمعالج Apple Silicon، لأنه يمكن تشغيله عبر إطار عمل [MLX](https://github.com/ml-explore/mlx) الخاص بشركة Apple من خلال مشروع المجتمع [mlx-audio](https://github.com/Blaizzy/mlx-audio)؛ أما [Piper](/power-local-llm/piper-tts-review) فهو الخيار الأفضل إذا أردت أبسط تثبيت وأكثره قابلية للنقل، والذي يتصرف بالطريقة نفسها على أجهزة Intel وApple Silicon على حد سواء، لأنه لا يستخدم وحدة GPU في أي منهما.** يُعد [XTTS v2](/power-local-llm/xtts-v2-review) الخيار المناسب إن احتجت تحديدًا إلى استنساخ الصوت، لكن دعمه لـ Metal (MPS) هو [مشكلة GitHub](https://github.com/coqui-ai/TTS/issues/3649) معطوبة وموثّقة — توقّع أداءً قائمًا على المعالج CPU فقط على أي جهاز Mac. يمتلك [Bark](/power-local-llm/bark-tts-review) دعمًا تجريبيًا لـ MPS خلف متغيّر بيئي، مع استمرار تراجع بعض العمليات إلى المعالج CPU.',
    quickAnswerTop: {
      question: 'ما هو أفضل محرك تحويل نص إلى كلام محلي لجهاز Mac؟',
      answer:
        'استخدم Kokoro-82M (عبر مشروع المجتمع mlx-audio) إذا أردت محرك TTS محليًا يعمل عبر وحدة GPU من نوع Metal الخاصة بمعالجات Apple Silicon باستخدام إطار عمل MLX الخاص بشركة Apple — فهو صغير الحجم (82 مليون معامل)، ومرخّص بموجب Apache-2.0، ومتوفر بصيغ مُكمَّمة (quantized) لتقليل استهلاك الذاكرة. استخدم Piper إذا أردت أبسط إعداد ممكن يعمل بالطريقة نفسها على أي جهاز Mac، سواء بمعالج Apple Silicon أو Intel، لأنه مصمَّم أصلًا للعمل على المعالج CPU فقط وبُني ليعمل في الزمن الحقيقي حتى على جهاز Raspberry Pi. استخدم XTTS v2 فقط إذا احتجت تحديدًا إلى استنساخ صوت من عينة صوتية قصيرة — لكن اعلم أن دعمه لوحدة GPU على Apple Silicon (عبر MPS) هو مشكلة GitHub موثّقة وغير محلولة، لذا يعمل عمليًا بالمعالج CPU فقط على جهاز Mac، وأن ترخيصه Coqui Public Model License (CPML) غير تجاري. تجنّب Bark ما لم ترغب تحديدًا في أصواته غير الكلامية (الضحك، التنهد)؛ فدعمه لوحدة GPU على Apple Silicon موصوف صراحةً بأنه تجريبي من قِبل القائمين على صيانته أنفسهم، ومستودعه على GitHub لم يشهد أي تحديثات (commits) منذ أبريل 2024.',
      bullets: [
        'Kokoro-82M: 82 مليون معامل، مرخّص بموجب Apache-2.0، يعمل عبر إطار عمل MLX من Apple من خلال مشروع المجتمع mlx-audio — المحرك الوحيد هنا الذي يمتلك مسار GPU حقيقيًا على Apple Silicon.',
        'Piper: يعمل بالمعالج CPU فقط بحكم التصميم (ONNX Runtime)، مرخّص بموجب GPL-3.0-or-later، ويقدّم أداءً متطابقًا على أجهزة Intel وApple Silicon لأنه لا يستخدم وحدة GPU في أي منهما.',
        'XTTS v2: يستنسخ الصوت من نحو 6 ثوانٍ من الصوت، لكن دعمه لـ MPS (Metal) على Apple Silicon هو مشكلة GitHub معطوبة وموثّقة — يعمل بالمعالج CPU فقط على جهاز Mac، وترخيصه CPML غير تجاري.',
        'Bark: دعم تجريبي لـ MPS على Apple Silicon عبر متغيّر بيئي، مع استمرار تراجع بعض العمليات إلى المعالج CPU؛ مرخّص بموجب MIT لكن دون أي تحديثات منذ أبريل 2024.',
        'تقتصر أجهزة Mac بمعالج Intel على المسارات القائمة على المعالج CPU فقط (Piper، وXTTS v2/Bark في وضع CPU) — يتطلب مسار Kokoro المسرَّع عبر MLX معالج Apple Silicon.',
      ],
      updatedDate: '2026-09-11',
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'أفضل اختيار حسب حالة الاستخدام', anchor: 'best-choice' },
      { label: 'مقارنة: مدى الملاءمة لـ Apple Silicon', anchor: 'comparison' },
      { label: 'أي المحركات يستخدم GPU فعليًا على Mac؟', anchor: 'gpu-acceleration' },
      { label: 'تثبيت Kokoro بتسريع MLX', anchor: 'install-walkthrough' },
      { label: 'ما الذي يتغيّر على أجهزة Intel Mac', anchor: 'intel-macs' },
      { label: 'متى لا تستخدم أيًا من هذه المحركات', anchor: 'limitations' },
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
            text: 'بالنسبة لتحويل النص إلى كلام محليًا على Apple Silicon، فإن Kokoro-82M هو المحرك الوحيد من بين المحركات المحلية الأربعة الرئيسية الذي يمتلك مسار GPU حقيقيًا من نوع Metal (عبر مشروع المجتمع mlx-audio على إطار عمل MLX الخاص بشركة Apple)؛ ويُعد Piper الخيار الأبسط القائم على المعالج CPU فقط والذي يتصرف بالطريقة نفسها على أجهزة Intel Mac؛ ويوفّر XTTS v2 استنساخ الصوت لكن دعمه لـ MPS على Apple Silicon هو مشكلة GitHub معطوبة وموثّقة؛ ودعم Bark لـ MPS تجريبي صراحةً.',
          },
          {
            type: 'plain-terms',
            text: 'ليس كل برنامج مجاني لتحويل النص إلى كلام يمكن تشغيله على جهاز Mac يستخدم فعليًا شريحة الرسومات في الجهاز — بعضها يعمل فقط على المعالج العادي، وهو ما يعمل بشكل جيد لكنه أبطأ مما يمكن أن يكون عليه. Kokoro هو المحرك المُصمَّم للاستفادة من تصميم شريحة Apple الخاصة عبر مشروع يُدعى MLX؛ أما المحركات الأخرى فإما أنها تتجاوز وحدة GPU بحكم التصميم (Piper) أو تحاول استخدامها لكنها تواجه مشكلات غير محلولة (XTTS v2، Bark).',
          },
        ],
        items: [
          'Kokoro-82M: مرخّص بموجب Apache-2.0، بـ 82 مليون معامل، يعمل عبر إطار عمل MLX من Apple من خلال مشروع المجتمع mlx-audio — مسار التسريع الحقيقي على Apple Silicon.',
          'Piper: مرخّص بموجب GPL-3.0-or-later، يعمل بالمعالج CPU فقط بحكم التصميم عبر ONNX Runtime — أداء متطابق على أجهزة Intel وApple Silicon.',
          'XTTS v2: ترخيص CPML غير تجاري، يستنسخ الصوت من نحو 6 ثوانٍ من الصوت، لكن دعمه لـ Metal (MPS) هو مشكلة GitHub متابَعة وغير محلولة — يعمل بالمعالج CPU فقط على جهاز Mac.',
          'Bark: مرخّص بموجب MIT، دعم تجريبي لـ MPS على Apple Silicon خلف متغيّر بيئي. لم يشهد المستودع العلني أي تحديثات منذ أبريل 2024.',
          'لا يمكن لأجهزة Mac بمعالج Intel استخدام مسار Kokoro المسرَّع عبر MLX إطلاقًا — يتطلب MLX معالج Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'يقارن هذا الدليل أربعة محركات TTS محلية راجعتها PromptQuorum بشكل مستقل (Piper وKokoro وXTTS v2 وBark). لكل منها مراجعة مخصصة مرتبطة على مدار المقال لتفاصيل أوامر التثبيت والترخيص والقيود الكاملة.',
          },
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: 'أي محرك TTS محلي يجب تثبيته فعليًا؟',
        content: [
          '**يعتمد المحرك المناسب على ما إذا كنت تحتاج إلى تسريع GPU أو استنساخ الصوت أو أوسع توافق ممكن مع أجهزة Mac — لا يتفوق أي محرك في الجوانب الثلاثة كلها.** Kokoro هو المحرك الوحيد هنا الذي يمتلك مسار GPU حقيقيًا على Apple Silicon؛ وPiper هو الأكثر قابلية للنقل؛ وXTTS v2 هو الوحيد الذي يستنسخ الأصوات.',
        ],
        items: [
          '🏆 **الأفضل بشكل عام لـ Apple Silicon:** [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) عبر [mlx-audio](https://github.com/Blaizzy/mlx-audio) — المحرك الوحيد المُتناوَل هنا الذي يمتلك مسار GPU حقيقيًا من نوع Metal، وصغير بما يكفي (82 مليون معامل) ليعمل براحة على أي جهاز Mac بمعالج Apple Silicon.',
          '**الأفضل للبساطة والتوافق مع Intel:** [Piper](/power-local-llm/piper-tts-review) — يعمل بالمعالج CPU فقط بحكم التصميم، لذا فإن التثبيت والأداء متطابقان سواء كنت تستخدم شريحة من سلسلة M أو جهاز Mac أقدم بمعالج Intel.',
          '**الأفضل إذا احتجت إلى استنساخ الصوت:** [XTTS v2](/power-local-llm/xtts-v2-review) — يستنسخ صوتًا من نحو 6 ثوانٍ من الصوت المرجعي، لكنه يعمل بالمعالج CPU فقط على أي جهاز Mac ومرخّص للاستخدام غير التجاري فقط.',
          '**الأفضل للصوت التعبيري غير الكلامي:** [Bark](/power-local-llm/bark-tts-review) — يولّد الضحك والتنهد وموسيقى بسيطة من النص، مع دعم تجريبي (جزئي) لوحدة GPU على Apple Silicon، مع ملاحظة أن مستودعه خامل منذ أبريل 2024.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم أي محرك؟',
        content: [
          '**طابِق المحرك مع جهاز Mac الخاص بك ومتطلبك الفعلي، لا مع أي محرك يحمل أكبر عدد من نجوم GitHub.** لا يهم تسريع GPU إلا إذا كنت تولّد كمية كافية من الصوت، وبتكرار كافٍ، بحيث يبدو التركيب القائم على المعالج CPU فقط بطيئًا.',
        ],
        items: [
          '🧭 **جهاز Mac بمعالج Apple Silicon، وتريد أسرع خيار محلي:** Kokoro عبر mlx-audio — المحرك الوحيد هنا المكتوب لاستخدام Metal عبر MLX.',
          '🧭 **أي جهاز Mac، بما في ذلك طراز Intel أقدم:** Piper — يعمل بالمعالج CPU فقط بحكم التصميم، لذا لا يوجد أي إعداد أو استكشاف أخطاء خاص بمعالج Apple Silicon.',
          '🧭 **تحتاج إلى استنساخ صوت معيّن من تسجيل قصير:** XTTS v2 — تقبّل أنه سيعمل بالمعالج CPU فقط على جهاز Mac، وأن ترخيصه غير تجاري.',
          '🧭 **تريد الضحك أو التنهد أو الصوت المحيطي، لا مجرد الكلام:** Bark — لكن خصّص وقتًا إضافيًا للتثبيت بسبب مساره التجريبي على Apple Silicon، وتحقّق أولًا من حالة الصيانة الحالية.',
          '❌ **تجنّب Bark إذا احتجت إلى صيانة نشطة أو أداء مضمون** — لم يشهد مستودعه العلني أي تحديثات منذ أبريل 2024، وهذا مستقل عن مسألة Apple Silicon.',
          '❌ **تجنّب XTTS v2 إذا كنت تبني منتجًا تجاريًا** — ترخيصه Coqui Public Model License (CPML) غير تجاري، وقد أوقفت الشركة التي أصدرته، Coqui AI، خدماتها المدفوعة في ديسمبر 2023.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'كيف تقارَن Piper وKokoro وXTTS v2 وBark من حيث الملاءمة لـ Apple Silicon؟',
        content: [
          '**Kokoro هو المحرك الوحيد في هذه المقارنة الذي يمتلك مسار GPU حقيقيًا ومبنيًا خصيصًا لـ Apple Silicon؛ أما الباقي فيعمل بالمعالج CPU فقط إما بحكم التصميم أو بسبب علة غير محلولة.** يقيّم الجدول أدناه كل محرك وفق أربعة عوامل تحدد فعليًا الملاءمة مع جهاز Mac: هل يستخدم تسريع Apple Silicon، وحجم الذاكرة المطلوبة، ومدى صعوبة تثبيته على macOS، وجودة الصوت.',
        ],
        columns: ['المحرك', 'تسريع Apple Silicon', 'استهلاك RAM', 'تثبيت macOS', 'جودة الصوت'],
        rows: [
          {
            'المحرك': '[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)',
            'تسريع Apple Silicon': 'نعم — Metal عبر MLX (mlx-audio)',
            'استهلاك RAM': 'منخفض (82 مليون معامل، مع صيغ مُكمَّمة)',
            'تثبيت macOS': 'pip install + mlx-audio، لـ Apple Silicon فقط',
            'جودة الصوت': 'طبيعية، قريبة من نماذج السحابة الكبيرة',
          },
          {
            'المحرك': '[Piper](/power-local-llm/piper-tts-review)',
            'تسريع Apple Silicon': 'لا يوجد بحكم التصميم — ONNX Runtime بالمعالج CPU فقط',
            'استهلاك RAM': 'منخفض جدًا (نحو 50-100 ميغابايت لكل صوت)',
            'تثبيت macOS': '`pip install piper-tts`، دون إعداد GPU',
            'جودة الصوت': 'واضحة، مع نبرة آلية بعض الشيء',
          },
          {
            'المحرك': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'تسريع Apple Silicon': 'لا يوجد — MPS يتعلّق (GH issue #3649)',
            'استهلاك RAM': 'متوسط إلى مرتفع (نموذج استنساخ كامل)',
            'تثبيت macOS': '`pip install coqui-tts`، CPU فقط على Mac',
            'جودة الصوت': 'عالية، تستنسخ صوتًا معيّنًا',
          },
          {
            'المحرك': '[Bark](/power-local-llm/bark-tts-review)',
            'تسريع Apple Silicon': 'تجريبي — `SUNO_ENABLE_MPS=True`',
            'استهلاك RAM': 'مرتفع (يمكن تقليله بعلامة small-models)',
            'تثبيت macOS': 'pip install من GitHub، لا توجد حزمة PyPI',
            'جودة الصوت': 'تعبيرية، غير حتمية',
          },
        ],
        note: 'تقييمات جودة الصوت هي أوصاف نوعية مبنية على البنية الموثّقة لكل محرك ومراجعات PromptQuorum المخصصة (المرتبطة في كل صف)، وليست اختبار استماع أعمى (blind listening test) أجرته PromptQuorum — لا تُدّعى هنا أي أرقام MOS (متوسط درجة الرأي) عددية أو أرقام قياس مرجعية.',
      },
      gpuAcceleration: {
        id: 'gpu-acceleration',
        title: 'أي المحركات يستخدم GPU فعليًا على جهاز Mac؟',
        content: [
          '**Kokoro هو المحرك الوحيد الذي يمتلك مسارًا حقيقيًا ومبنيًا خصيصًا لوحدة GPU من نوع Metal في معالجات Apple Silicon؛ ويتجاوز Piper وحدة GPU كليًا بحكم التصميم، بينما يمتلك كل من XTTS v2 وBark دعم GPU غير محلول أو جزئي على جهاز Mac.** هذا هو أكبر عامل يفصل بين هذه المحركات على Apple Silicon، ومن السهل افتراض أن "يعمل على Mac" تعني "يستخدم وحدة GPU الخاصة بجهاز Mac" — وعادةً ما لا يكون الأمر كذلك.',
        ],
        items: [
          '**يعمل Kokoro-82M عبر إطار عمل [MLX](https://github.com/ml-explore/mlx) الخاص بشركة Apple من خلال مشروع المجتمع [mlx-audio](https://github.com/Blaizzy/mlx-audio)، الذي يتطلب معالج Apple Silicon وإصدار Python 3.10-3.12.** إطار عمل MLX هو إطار تعلّم آلي مفتوح المصدر من Apple، بُني من الصفر لتقنية Metal على بنية الذاكرة الموحّدة في معالجات Apple Silicon — وهو الإطار نفسه الذي يتناوله [دليل نماذج اللغة المحلية على Apple Silicon](/local-llms/apple-silicon-local-llm-guide-2026) و[مقارنة MLX مقابل Ollama مقابل llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) الخاصان بالموقع بالنسبة لنماذج اللغة. أوزان Kokoro-82M الرسمية التي أصدرها hexgrad على Hugging Face هي أصلًا نموذج PyTorch؛ ومسار MLX هو منفذ (port) من المجتمع وليس إصدارًا رسميًا من Apple أو hexgrad، كما يوفّر mlx-audio أيضًا صيغًا مُكمَّمة (bf16، وبت 8، وبت 4) لتقليل استهلاك الذاكرة.',
          '**لا يلمس Piper وحدة GPU إطلاقًا على أي منصة، بما في ذلك Apple Silicon — وهذا بحكم التصميم لا كقيد.** يحوّل Piper النص إلى صوتيات (phonemes) باستخدام espeak-ng، ثم يركّب الصوت بنموذج مُصدَّر إلى [ONNX Runtime](https://onnxruntime.ai/) لاستدلال سريع على المعالج CPU. هذا الخيار التصميمي هو السبب الدقيق الذي يجعل Piper يعمل في الزمن الحقيقي حتى على جهاز Raspberry Pi — راجع [مراجعة Piper TTS](/power-local-llm/piper-tts-review) الخاصة بـ PromptQuorum للاطلاع على البنية الكاملة وخطوات التثبيت.',
          '**دعم XTTS v2 لتقنية Metal (MPS) على Apple Silicon لا يعمل حاليًا.** توثّق مشكلة متابَعة على [مستودع coqui-ai/TTS على GitHub](https://github.com/coqui-ai/TTS/issues/3649)، بعنوان "Unable to use xtts_v2 with mps device on Apple Silicon"، أن محاولة تشغيل XTTS v2 على جهاز MPS تتسبب في التعليق بدلًا من إتمام العملية. كما لا يُدرج مشروع Coqui نفسه دعم GPU على Apple Silicon ضمن الدعم الرسمي. عمليًا، هذا يعني أن XTTS v2 يعمل بالمعالج CPU فقط على جهاز Mac، عبر نفس [أداة Coqui TTS](/power-local-llm/coqui-tts-review) (المرخّصة بموجب MPL-2.0) التي تشغّله على المنصات الأخرى.',
          '**يمتلك Bark دعمًا تجريبيًا لـ MPS على Apple Silicon، محجوبًا خلف متغيّر بيئي.** يؤدي ضبط `SUNO_ENABLE_MPS=True` إلى تفعيل تسريع Metal، وفق نقاش على [مستودع suno-ai/bark على GitHub](https://github.com/suno-ai/bark)، لكن بعض عمليات PyTorch التي يعتمد عليها Bark لم تكن مُنفَّذة لـ MPS في ذلك الوقت، ما يتسبب في تراجع جزئي إلى المعالج CPU لتلك الخطوات. يدعم Bark أيضًا علامة `SUNO_USE_SMALL_MODELS=True` مخصصة لتقليل ضغط الذاكرة على أجهزة Mac ذات الذاكرة الموحّدة الأقل.',
        ],
        note: 'يمكن أن تتغيّر حالة تسريع Apple Silicon لمشاريع TTS التي يصونها المجتمع بين الإصدارات بوتيرة أسرع من وتيرة تحديث هذا المقال — تحقّق من مشكلات GitHub وملف README الخاصين بكل مشروع قبل افتراض أن ما هو موصوف هنا يطابق السلوك الحالي.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'كيف تثبّت Kokoro بتسريع MLX على جهاز Mac؟',
        content:
          'يثبّت هذا الشرح مشروع المجتمع mlx-audio لتشغيل Kokoro-82M عبر إطار عمل MLX الخاص بشركة Apple، باستخدام الإعداد الموثّق في [مستودع mlx-audio على GitHub](https://github.com/Blaizzy/mlx-audio).',
        numberedItems: [
          {
            title: 'تأكّد من أنك تستخدم معالج Apple Silicon وإصدار Python مدعومًا.',
            whyItMatters: 'يتطلب mlx-audio جهاز Mac بمعالج Apple Silicon (من سلسلة M) وإصدار Python 3.10-3.12؛ لا يعمل MLX إطلاقًا على أجهزة Intel Mac، لذا فهذا المسار مخصص لمعالج Apple Silicon فقط.',
          },
          {
            title: 'ثبّت mlx-audio.',
            whyItMatters: 'شغّل `pip install mlx-audio` داخل بيئة Python افتراضية. سيؤدي هذا إلى تثبيت MLX نفسه (الإصدار 0.31 أو أحدث) إلى جانب خط معالجة الصوت.',
          },
          {
            title: 'شغّل عملية تركيب صوتي أولى من سطر الأوامر.',
            whyItMatters: 'تأتي الحزمة مع نقطة دخول CLI تنزّل أوزان Kokoro-82M عند الاستخدام الأول وتركّب ملف WAV من سلسلة نصية — تحقّق من README الحالي للمشروع للحصول على الأمر الدقيق، لأن علامات CLI قد تتغيّر بين الإصدارات.',
          },
          {
            title: 'اختر صوتًا، واختياريًا صيغة نموذج مُكمَّمة.',
            whyItMatters: 'يأتي Kokoro-82M مزوّدًا بـ 54 نمطًا صوتيًا مُعدًّا مسبقًا عبر عدة لغات. يوفّر mlx-audio أيضًا صيغًا مُكمَّمة بدقة bf16 وبت 8 وبت 4 — تقايض دقة أقل قليلًا مقابل حجم ذاكرة أصغر، وهو أمر مفيد على جهاز Mac بذاكرة موحّدة أقل.',
          },
          {
            title: 'ادمجه في تطبيق Python الخاص بك.',
            whyItMatters: 'لأي استخدام يتجاوز التركيب الصوتي لمرة واحدة عبر سطر الأوامر، استدعِ واجهة برمجة Python الخاصة بـ mlx-audio مباشرةً بدلًا من استدعاء CLI مرارًا، لتجنّب تكلفة إعادة تحميل النموذج مع كل استدعاء.',
          },
        ],
        note: 'هذا مشروع مجتمعي وليس إصدارًا رسميًا من Apple أو hexgrad — تحقّق من تعليمات التثبيت الحالية على [مستودع mlx-audio](https://github.com/Blaizzy/mlx-audio) قبل النشر، إذ قد تتغيّر أسماء الأوامر والعلامات.',
      },
      intelMacs: {
        id: 'intel-macs',
        title: 'ما الذي يتغيّر على جهاز Mac بمعالج Intel؟',
        content: [
          '**على جهاز Mac بمعالج Intel، لا يتوفر مسار Kokoro المسرَّع عبر MLX إطلاقًا — يتطلب MLX معالج Apple Silicon ولن يعمل إطلاقًا على عتاد Intel.** تستمر جميع المحركات الأخرى المُتناوَلة هنا في العمل على Intel، لأن أيًا منها لا يعتمد على محرك Apple العصبي أو على تسريع GPU الخاص بمعالج Apple Silicon كي يعمل؛ فهي ببساطة تعمل على المعالج CPU.',
        ],
        items: [
          '**لا يتأثر Piper بالفرق بين Intel وApple Silicon.** يعمل بالمعالج CPU فقط بحكم التصميم على كل منصة، لذا فإن جهاز Mac بمعالج Intel يقدّم أداءً مماثلًا لجهاز Mac بمعالج Apple Silicon بالنسبة لـ Piper تحديدًا، بصرف النظر عن جيل العتاد.',
          '**يستمر Kokoro في العمل على جهاز Mac بمعالج Intel عبر أوزانه الرسمية من PyTorch، لكن دون مسار تسريع MLX.** ستفقد مسار Metal الخاص بمعالج Apple Silicon عبر mlx-audio، لكن النموذج نفسه (82 مليون معامل) صغير بما يكفي ليعمل بشكل مقبول على المعالج CPU.',
          '**يعمل XTTS v2 وBark بالطريقة نفسها على أجهزة Mac بمعالج Intel وApple Silicon، لأن كلاهما يعمل حاليًا بالمعالج CPU فقط على أي جهاز Mac على أي حال** — وذلك بالنسبة إلى XTTS v2 لأن دعم MPS معطوب، وبالنسبة إلى Bark لأن دعم MPS تجريبي وجزئي. لا يفقد أي منهما قدرة معتبرة عند الانتقال من Apple Silicon إلى Intel، لأن أيًا منهما لا يمتلك أصلًا مسار تسريع ناضجًا على Apple Silicon.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'متى لا يجب استخدام أي من هذه المحركات؟',
        content: [
          '**لا تعد أي من المحركات الأربعة في هذه المقارنة الخيار الصحيح لكل حالة استخدام TTS على Mac — لكل منها حالات تكون فيها أداة أخرى أو واجهة برمجة سحابية أنسب.**',
        ],
        items: [
          '❌ **تحتاج ترخيصًا تجاريًا مضمونًا مع أصوات مستنسَخة.** ترخيص CPML الخاص بـ XTTS v2 غير تجاري، دون مسار مؤكد وفعّال نحو ترخيص تجاري منذ أن أوقفت Coqui AI خدماتها المدفوعة في ديسمبر 2023 — راجع [مقارنة PromptQuorum مع ElevenLabs](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) للاطلاع على بديل سحابي تجاري مُدار.',
          '❌ **تحتاج صيانة نشطة مضمونة.** لم يشهد مستودع Bark العلني على GitHub أي تحديثات منذ 5 أبريل 2024؛ إذا كانت الإصلاحات والتحديثات المستمرة مهمة لمشروعك، فإن Piper (الذي تصونه بنشاط مؤسسة Open Home Foundation) أو Kokoro (بنظام مجتمعي نشط حول mlx-audio) خيار أكثر أمانًا.',
          '❌ **تحتاج دعم GPU على مستوى الإنتاج على Apple Silicon اليوم، دون الاعتماد على مشروع مجتمعي.** يعمل مسار Kokoro عبر MLX من خلال مشروع مجتمعي، وليس إصدارًا رسميًا من Apple أو hexgrad — اعتبره جيدًا لكن دون ضمان من مزوّد.',
          '❌ **تحتاج صوتًا تفاعليًا في الزمن الحقيقي على ذاكرة Apple Silicon محدودة جدًا (تكوينات أساسية بـ 8 غيغابايت) مع تشغيل نموذج لغة محلي كبير في الوقت نفسه.** قد يكون تشغيل عملية كبيرة من XTTS v2 أو Bark إلى جانب نموذج لغة على جهاز Mac محدود الذاكرة أمرًا ضيقًا؛ توفّر بصمة Piper وKokoro الأصغر مساحة أكبر.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو أفضل محرك TTS محلي لأجهزة Mac بمعالج Apple Silicon؟',
            a: 'إذا أردت تحديدًا تسريع GPU (Metal) على معالج Apple Silicon عبر إطار عمل MLX الخاص بشركة Apple، فإن Kokoro-82M المُشغَّل عبر مشروع المجتمع mlx-audio هو الخيار الأفضل. إذا أردت أبسط تثبيت يعمل بالطريقة نفسها على أي جهاز Mac، فإن Piper خيار أفضل، لأنه يعمل بالمعالج CPU فقط بحكم التصميم على كل منصة.',
          },
          {
            q: 'هل يستخدم Piper وحدة GPU على جهاز Mac؟',
            a: 'لا. يعمل Piper بالمعالج CPU فقط بحكم التصميم على كل منصة، بما في ذلك أجهزة Apple Silicon وIntel Mac. يحوّل النص إلى صوتيات باستخدام espeak-ng ويركّب الصوت عبر ONNX Runtime، وهذا هو السبب في قدرته على العمل في الزمن الحقيقي حتى على جهاز Raspberry Pi دون أي وحدة GPU إطلاقًا.',
          },
          {
            q: 'هل يمكن تشغيل Kokoro-82M على Apple Silicon بتسريع GPU؟',
            a: 'نعم، عبر مشروع المجتمع mlx-audio، الذي يشغّل Kokoro-82M عبر إطار عمل MLX الخاص بشركة Apple — وهو مبني خصيصًا لتقنية Metal على بنية الذاكرة الموحّدة في معالجات Apple Silicon. أوزان Kokoro-82M الرسمية من hexgrad هي نموذج PyTorch؛ مسار MLX هو منفذ من المجتمع وليس إصدارًا رسميًا، ويتطلب جهاز Mac بمعالج Apple Silicon (لا يمكن لأجهزة Intel Mac استخدامه) وإصدار Python 3.10-3.12.',
          },
          {
            q: 'هل يعمل XTTS v2 على معالج Apple Silicon؟',
            a: 'يعمل، لكن بالمعالج CPU فقط. دعم XTTS v2 لجهاز Metal (MPS) هو مشكلة موثّقة وغير محلولة، مُتابَعة على مستودع coqui-ai/TTS على GitHub (المشكلة رقم 3649)، حيث تتسبب محاولة استخدام جهاز MPS في التعليق بدلًا من إتمام العملية. لا يدعم مشروع Coqui رسميًا تسريع GPU على Apple Silicon لـ XTTS v2، لذا توقّع أداءً قائمًا على المعالج CPU فقط على أي جهاز Mac.',
          },
          {
            q: 'هل Bark مسرَّع على معالج Apple Silicon؟',
            a: 'بشكل جزئي وتجريبي. يؤدي ضبط متغيّر البيئة SUNO_ENABLE_MPS=True إلى تفعيل تسريع Metal GPU لـ Bark، لكن بعض عمليات PyTorch التي يعتمد عليها لم تُنفَّذ لـ MPS، لذا لا تزال بعض خطوات المعالجة تتراجع إلى المعالج CPU. يصف القائمون على صيانة Bark هذا الدعم أنفسهم بأنه تجريبي وليس جاهزًا للإنتاج.',
          },
          {
            q: 'هل يمكنني استخدام أي من هذه المحركات على جهاز Mac بمعالج Intel؟',
            a: 'يعمل كل من Piper وXTTS v2 وBark على أجهزة Mac بمعالج Intel، لأن أيًا منها لا يتطلب تسريعًا خاصًا بمعالج Apple Silicon كي يعمل — فهي إما تعمل على المعالج CPU بحكم التصميم (Piper) أو لأن مسارات تسريع GPU الخاصة بها غير محلولة أو جزئية على أي حال (XTTS v2، Bark). أما مسار Kokoro المسرَّع عبر MLX فيتطلب تحديدًا معالج Apple Silicon ولن يعمل إطلاقًا على جهاز Mac بمعالج Intel، رغم أن أوزان Kokoro الرسمية من PyTorch تستمر في العمل على Intel دون تسريع MLX.',
          },
          {
            q: 'أي من هذه المحركات يمكنه استنساخ صوت معيّن؟',
            a: 'من بين المحركات الأربعة المُتناوَلة هنا، يستنسخ XTTS v2 وحده صوتًا من مقطع صوتي مرجعي قصير (بحد أدنى 6 ثوانٍ فقط بحسب بطاقة النموذج الرسمية). يستخدم كل من Piper وKokoro وBark أصواتًا مُدرَّبة مسبقًا أو مُعدَّة مسبقًا بدلًا من استنساخ أي صوت فوريًا. للاطلاع على تفاصيل الاستنساخ الكاملة والترخيص، راجع مراجعة XTTS v2 المخصصة من PromptQuorum.',
          },
          {
            q: 'هل يتطلب أي من محركات TTS المحلية هذه ترخيصًا مدفوعًا لاستخدامه على جهاز Mac بمعالج Apple Silicon؟',
            a: 'لا يفرض أي محرك مُتناوَل هنا رسومًا خاصة باستخدام macOS أو Apple Silicon. Piper (بموجب GPL-3.0-or-later) وKokoro (بموجب Apache-2.0) وBark (بموجب MIT) كلها برمجيات مجانية ومفتوحة المصدر بصرف النظر عن المنصة. يمكن استخدام XTTS v2 مجانًا، لكن بموجب ترخيص غير تجاري (CPML) — وهذا القيد يسري بالتساوي على Apple Silicon وIntel وWindows وLinux، ولا علاقة له بجهاز Mac الذي تستخدمه.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'على معالج Apple Silicon تحديدًا، يتميّز Kokoro-82M لأنه المحرك الوحيد من بين هذه المحركات الأربعة الذي يمتلك مسارًا حقيقيًا ومبنيًا خصيصًا لوحدة GPU من نوع Metal في جهاز Mac، عبر مشروع المجتمع mlx-audio المبني على إطار عمل MLX الخاص بشركة Apple نفسها — وهو صغير بما يكفي (82 مليون معامل، مرخّص بموجب Apache-2.0) لدرجة أن هذا التسريع يستحق الإعداد. يبقى Piper الخيار الافتراضي الصحيح عندما تكون البساطة والاتساق عبر العتاد أهم من السرعة الخام: فهو يعمل بالمعالج CPU فقط في كل مكان، لذا لا يوجد أي إعداد أو استكشاف أخطاء خاص بمعالج Apple Silicon، ولا قلق من تراجع الأداء على جهاز Mac بمعالج Intel. لا يستحق XTTS v2 التضحية بالأداء الناتجة عن العمل بالمعالج CPU فقط إلا إذا احتجت تحديدًا إلى استنساخ الصوت وتقبّلت ترخيصه غير التجاري؛ ولا يستحق Bark النظر فيه إلا لأصواته غير الكلامية المميزة، مع ملاحظة أن كلًا من تسريعه على Apple Silicon وحالة صيانته العامة غير مستقرَّين. إن لم تكن متأكدًا، ابدأ بـ Piper لأبسط تثبيت، ثم انتقل إلى Kokoro عبر mlx-audio بمجرد أن تتأكد من رغبتك في تسريع Metal، ولا تلجأ إلى XTTS v2 إلا عندما يصبح استنساخ الصوت متطلبًا أساسيًا صارمًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Kokoro-82M على Hugging Face](https://huggingface.co/hexgrad/Kokoro-82M) — بطاقة النموذج الرسمية: المعاملات والترخيص والبنية.',
          '[mlx-audio على GitHub](https://github.com/Blaizzy/mlx-audio) — المشروع المجتمعي الذي يشغّل Kokoro-82M عبر إطار عمل MLX الخاص بشركة Apple على معالجات Apple Silicon.',
          '[مشكلة GitHub رقم 3649 في coqui-ai/TTS](https://github.com/coqui-ai/TTS/issues/3649) — "Unable to use xtts_v2 with mps device on Apple Silicon"، توثّق تعليق MPS غير المحلول.',
          '[مستودع suno-ai/bark على GitHub](https://github.com/suno-ai/bark) — مشكلات وطلبات دمج توثّق دعم MPS التجريبي على Apple Silicon عبر SUNO_ENABLE_MPS.',
          '[إطار عمل Apple MLX](https://github.com/ml-explore/mlx) — إطار التعلّم الآلي مفتوح المصدر الرسمي من Apple، مع تسريع GPU أصلي من نوع Metal لمعالجات Apple Silicon.',
          '[مراجعة Piper TTS](/power-local-llm/piper-tts-review) — مراجعة PromptQuorum المخصصة، بما في ذلك أوامر التثبيت وسجل الترخيص.',
          '[مراجعة XTTS v2](/power-local-llm/xtts-v2-review)، و[مراجعة Coqui TTS](/power-local-llm/coqui-tts-review)، و[مراجعة Bark TTS](/power-local-llm/bark-tts-review) — مراجعات PromptQuorum المخصصة للمحركات الأخرى المُتناوَلة هنا.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Piper TTS](/power-local-llm/piper-tts-review) — المحرك السريع القائم على المعالج CPU فقط بترخيص متساهل المُتناوَل في هذه المقارنة، بعمق كامل.',
          '[مراجعة XTTS v2](/power-local-llm/xtts-v2-review) — نموذج استنساخ الصوت المُتناوَل هنا، بما في ذلك ترخيصه CPML غير التجاري.',
          '[مراجعة Coqui TTS](/power-local-llm/coqui-tts-review) — الأداة التي تشغّل XTTS v2 (ونماذج أخرى)، مرخّصة بموجب MPL-2.0.',
          '[مراجعة Bark TTS](/power-local-llm/bark-tts-review) — محرك الصوت التعبيري غير الكلامي المُتناوَل هنا، بما في ذلك حالة صيانته.',
          '[دليل نماذج اللغة المحلية على Apple Silicon](/local-llms/apple-silicon-local-llm-guide-2026) — مستويات الذاكرة، وتسريع GPU من نوع Metal، واختيار جهاز Mac للذكاء الاصطناعي المحلي بما يتجاوز TTS.',
          '[MLX مقابل Ollama مقابل llama.cpp على Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — إطار عمل MLX نفسه الذي يتناوله هذا الدليل بالنسبة لـ Kokoro، مشروحًا لنماذج اللغة المحلية.',
          '[ElevenLabs مقابل Piper مقابل XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — مقارنة السحابة مقابل المحلي للقراء الذين يفكرون في خيار تجاري مُدار.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل محرك TTS محلي لأجهزة Mac (2026): ما الذي يستخدم Apple Silicon فعليًا',
      description:
        'يعمل Piper بالمعالج CPU فقط على كل جهاز Mac. يمكن لـ Kokoro استخدام Metal عبر MLX. دعم MPS في XTTS v2 هو مشكلة GitHub معطوبة معروفة. إليك محرك TTS المحلي الذي يجب تثبيته فعليًا على Apple Silicon.',
      url: 'https://promptquorum.com/ar/power-local-llm/best-local-tts-mac',
      inLanguage: 'ar',
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مطورون يقيّمون محركات تحويل نص إلى كلام محلية لأجهزة Mac بمعالج Apple Silicon' },
      about: [
        { '@type': 'Thing', name: 'Piper' },
        { '@type': 'Thing', name: 'Kokoro-82M' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Bark' },
        { '@type': 'Thing', name: 'Apple Silicon' },
        { '@type': 'Thing', name: 'MLX' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/best-local-tts-mac' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'أفضل محرك TTS محلي لأجهزة Mac (2026)', item: 'https://promptquorum.com/ar/power-local-llm/best-local-tts-mac' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/best-local-tts-mac-hero-ko.webp',
    title: 'Mac용 최고의 로컬 TTS 엔진(2026): 실제로 Apple Silicon을 사용하는 것은 무엇인가',
    seoTitle: 'Mac용 최고의 로컬 TTS 2026: Apple Silicon 가이드',
    intro:
      '대부분의 "최고의 로컬 TTS" 비교 글은 모든 Mac을 동일하게 취급하지만, Apple Silicon에 따라 실제로 어떤 엔진이 적합한지가 달라집니다. [Piper](/power-local-llm/piper-tts-review)는 전적으로 CPU에서 실행되며 GPU를 전혀 사용하지 않습니다 — Apple Silicon Mac에서든 Intel Mac에서든 성능이 거의 동일합니다. [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)은 커뮤니티 프로젝트인 [mlx-audio](https://github.com/Blaizzy/mlx-audio)를 통해 Apple의 자체 [MLX](https://github.com/ml-explore/mlx) 프레임워크로 실행할 수 있으며, 이 프레임워크는 Apple Silicon의 Metal GPU를 위해 특별히 제작되었습니다. 반면 [XTTS v2](/power-local-llm/xtts-v2-review)는 Apple의 Metal Performance Shaders(MPS) 백엔드를 전혀 지원하지 않습니다 — 추적 중인 [GitHub 이슈](https://github.com/coqui-ai/TTS/issues/3649)는 MPS 장치를 사용하면 그저 멈춰버린다는 사실을 기록하고 있습니다 — 따라서 어떤 Mac에서도 CPU로만 실행됩니다. 이 가이드는 각 엔진이 Apple Silicon에서 실제로 어떻게 작동하는지 비교하고, Intel Mac이 CPU 전용 옵션에 제한되는 지점을 짚어주며, 무엇을 설치해야 하는지 알려드립니다.',
    metaDescription:
      'Piper는 모든 Mac에서 CPU로만 작동합니다. Kokoro는 MLX를 통해 Metal을 사용할 수 있습니다. XTTS v2의 MPS 지원은 알려진 결함이 있는 GitHub 이슈입니다. Apple Silicon에서 실제로 설치해야 할 로컬 TTS 엔진을 안내합니다.',
    twitterDescription:
      'Mac용 최고의 로컬 TTS 2026: Piper는 GPU를 전혀 사용하지 않으며, Kokoro는 Apple의 MLX 프레임워크를 통해 실행할 수 있고, XTTS v2의 Metal(MPS) 지원은 문서화된 결함이 있는 GitHub 이슈입니다. Apple Silicon과 Intel에서 실제로 설치해야 할 것을 안내합니다.',
    audience:
      'Apple Silicon Mac에서 음성 앱, 접근성 도구, 오디오북 파이프라인을 구축하며, 하드웨어를 실제로 활용하는 로컬 텍스트 음성 변환 엔진을 선택해야 하는 개발자와 취미 개발자.',
    readTime: '13분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac용 최고의 로컬 TTS',
    targetKeywords: [
      'mac 최고의 로컬tts',
      'apple silicon 최고의 텍스트 음성 변환',
      'kokoro tts mac',
      'piper tts mac',
      'xtts v2 apple silicon',
      '로컬tts mlx metal',
      '텍스트 음성 변환 m4 m5 mac',
      '로컬tts intel mac',
    ],
    current_models_mentioned: ['Piper', 'Kokoro-82M', 'XTTS v2', 'Bark'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M-series', 'M4', 'M5', 'Intel Mac'],
    leadAnswerBlock:
      '**GPU 가속을 원한다면 Kokoro-82M이 Apple Silicon Mac용 최고의 로컬 TTS 엔진입니다. 커뮤니티 프로젝트 [mlx-audio](https://github.com/Blaizzy/mlx-audio)를 통해 Apple의 자체 [MLX](https://github.com/ml-explore/mlx) 프레임워크로 실행할 수 있기 때문입니다. [Piper](/power-local-llm/piper-tts-review)는 Intel과 Apple Silicon에서 동일하게 작동하는 가장 간단하고 이식성 높은 설치를 원할 때 최선의 선택입니다. 어느 쪽에서도 GPU를 전혀 사용하지 않기 때문입니다.** 음성 클로닝이 특별히 필요하다면 [XTTS v2](/power-local-llm/xtts-v2-review)가 선택지가 되지만, Metal(MPS) 지원은 문서화된 결함이 있는 [GitHub 이슈](https://github.com/coqui-ai/TTS/issues/3649)이므로 어떤 Mac에서도 CPU 전용 성능을 예상해야 합니다. [Bark](/power-local-llm/bark-tts-review)는 환경 변수 뒤에 실험적인 MPS 지원이 있으며, 일부 처리는 여전히 CPU로 대체됩니다.',
    quickAnswerTop: {
      question: 'Mac용 최고의 로컬 텍스트 음성 변환 엔진은 무엇입니까?',
      answer:
        'Apple의 자체 MLX 프레임워크를 사용해 Apple Silicon의 Metal GPU로 실행되는 로컬 TTS 엔진을 원한다면 Kokoro-82M(커뮤니티 mlx-audio 프로젝트 경유)을 사용하십시오. 크기가 작고(8,200만 파라미터) Apache-2.0 라이선스이며, 메모리 사용량을 줄이기 위한 양자화 변형도 제공됩니다. Apple Silicon과 Intel에서 동일하게 작동하는 가능한 한 간단한 설정을 원한다면 Piper를 사용하십시오. 설계상 CPU로만 작동하며 Raspberry Pi에서도 실시간으로 실행되도록 만들어졌습니다. 짧은 오디오 샘플로부터 음성을 복제해야 하는 경우에만 XTTS v2를 사용하십시오 — 다만 Apple Silicon의 GPU(MPS) 지원은 문서화된 미해결 GitHub 이슈이므로 Mac에서는 사실상 CPU로만 작동하며, Coqui Public Model License(CPML)는 비상업적 라이선스라는 점을 알아두십시오. 비언어적 소리(웃음, 한숨)를 특별히 원하는 경우가 아니라면 Bark는 피하십시오. Apple Silicon GPU 지원은 관리자 자신에 의해 명시적으로 실험적이라고 표시되어 있으며, GitHub 저장소는 2024년 4월 이후 커밋이 없습니다.',
      bullets: [
        'Kokoro-82M: 8,200만 파라미터, Apache-2.0, 커뮤니티 mlx-audio 프로젝트를 통해 Apple의 MLX 프레임워크로 실행 — 이 중 유일하게 실제 Apple Silicon GPU 경로를 갖춘 엔진.',
        'Piper: 설계상 CPU 전용(ONNX Runtime), GPL-3.0-or-later, Intel과 Apple Silicon Mac에서 동일한 성능 프로필 — 어느 쪽에서도 GPU를 사용하지 않기 때문.',
        'XTTS v2: 약 6초의 오디오로 음성을 복제하지만, Apple Silicon의 MPS(Metal) 지원은 문서화된 결함이 있는 GitHub 이슈 — Mac에서는 CPU로만 작동, 비상업적 CPML 라이선스.',
        'Bark: 환경 변수를 통한 실험적 Apple Silicon MPS 지원, 일부 처리는 여전히 CPU로 대체됨. MIT 라이선스이지만 2024년 4월 이후 커밋 없음.',
        'Intel Mac은 CPU 전용 경로(Piper, 그리고 CPU 모드의 XTTS v2/Bark)로 제한됩니다 — MLX 가속 Kokoro 경로에는 Apple Silicon이 필요합니다.',
      ],
      updatedDate: '2026-09-11',
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: '사용 사례별 최선의 선택', anchor: 'best-choice' },
      { label: '비교: Apple Silicon 적합성', anchor: 'comparison' },
      { label: 'Mac에서 실제로 GPU를 사용하는 엔진은 무엇인가?', anchor: 'gpu-acceleration' },
      { label: 'MLX 가속으로 Kokoro 설치하기', anchor: 'install-walkthrough' },
      { label: 'Intel Mac에서 달라지는 점', anchor: 'intel-macs' },
      { label: '이 엔진들을 사용하지 말아야 할 때', anchor: 'limitations' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple Silicon에서의 로컬 텍스트 음성 변환에 대해, 4대 로컬 엔진 중 실제 Metal GPU 경로(Apple 자체 MLX 프레임워크 위에서 커뮤니티 mlx-audio 프로젝트를 통해)를 갖춘 것은 Kokoro-82M뿐이며, Piper는 Intel Mac에서도 동일하게 작동하는 간단한 CPU 전용 선택지이고, XTTS v2는 음성 클로닝을 제공하지만 Apple Silicon의 MPS 지원은 문서화된 결함이 있는 GitHub 이슈이며, Bark의 MPS 지원은 명시적으로 실험적입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Mac에서 실행할 수 있는 모든 무료 텍스트 음성 변환 프로그램이 실제로 Mac의 그래픽 칩을 사용하는 것은 아닙니다 — 일부는 일반 프로세서에서만 작동하며, 이는 문제없이 동작하지만 낼 수 있는 속도보다는 느립니다. Kokoro는 MLX라는 프로젝트를 통해 Apple 고유의 칩 설계를 활용하도록 만들어졌습니다. 다른 엔진들은 설계상 GPU를 건너뛰거나(Piper) GPU를 사용하려다 미해결 문제에 부딪힙니다(XTTS v2, Bark).',
          },
        ],
        items: [
          'Kokoro-82M: Apache-2.0, 8,200만 파라미터, 커뮤니티 mlx-audio 프로젝트를 통해 Apple의 MLX 프레임워크로 실행 — 실제 Apple Silicon 가속 경로.',
          'Piper: GPL-3.0-or-later, ONNX Runtime을 통해 설계상 CPU 전용 — Intel과 Apple Silicon Mac에서 동일한 성능 프로필.',
          'XTTS v2: 비상업적 CPML 라이선스, 약 6초의 오디오로 음성 복제. 다만 Metal(MPS) 지원은 추적 중인 미해결 GitHub 이슈 — Mac에서는 CPU로만 작동.',
          'Bark: MIT 라이선스, 환경 변수 뒤에 있는 실험적 Apple Silicon MPS 지원. 공개 저장소는 2024년 4월 이후 커밋 없음.',
          'Intel Mac은 MLX 가속 Kokoro 경로를 전혀 사용할 수 없습니다 — MLX에는 Apple Silicon이 필요합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 가이드는 PromptQuorum이 독자적으로 검토한 4개의 로컬 TTS 엔진(Piper, Kokoro, XTTS v2, Bark)을 비교합니다. 각 엔진에는 설치 명령어, 라이선스 세부 사항, 전체 한계 사항을 확인할 수 있는 전용 리뷰 링크가 곳곳에 연결되어 있습니다.',
          },
        ],
      },
      bestChoice: {
        id: 'best-choice',
        title: '실제로 어떤 로컬 TTS 엔진을 설치해야 합니까?',
        content: [
          '**적합한 엔진은 GPU 가속, 음성 클로닝, 폭넓은 Mac 호환성 중 무엇이 필요한지에 따라 달라집니다 — 세 가지 모두에서 우위를 차지하는 엔진은 없습니다.** Kokoro는 여기서 유일하게 실제 Apple Silicon GPU 경로를 갖춘 엔진이며, Piper는 이식성이 가장 뛰어나고, XTTS v2는 유일하게 음성을 복제할 수 있습니다.',
        ],
        items: [
          '🏆 **Apple Silicon에서 전반적으로 최선:** [mlx-audio](https://github.com/Blaizzy/mlx-audio)를 통한 [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) — 여기서 다루는 엔진 중 유일하게 실제 Metal GPU 경로를 갖추었고, 크기가 충분히 작아(8,200만 파라미터) 어떤 Apple Silicon Mac에서도 여유롭게 실행됩니다.',
          '**단순성과 Intel 호환성 면에서 최선:** [Piper](/power-local-llm/piper-tts-review) — 설계상 CPU 전용이므로 M 시리즈 칩이든 오래된 Intel Mac이든 설치와 성능이 동일합니다.',
          '**음성 클로닝이 필요한 경우 최선:** [XTTS v2](/power-local-llm/xtts-v2-review) — 약 6초의 참조 오디오로 음성을 복제할 수 있지만, 어떤 Mac에서도 CPU로만 작동하며 비상업적 용도로만 라이선스가 허용됩니다.',
          '**표현력 있는 비언어 오디오 면에서 최선:** [Bark](/power-local-llm/bark-tts-review) — 텍스트로부터 웃음, 한숨, 간단한 음악을 생성합니다. Apple Silicon GPU 지원은 실험적(부분적)이며, 저장소는 2024년 4월 이후 휴면 상태입니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '누가 어떤 엔진을 사용해야 합니까?',
        content: [
          '**GitHub 스타가 가장 많은 엔진이 아니라, 자신의 Mac과 실제 요구 사항에 맞는 엔진을 선택하십시오.** GPU 가속이 중요해지는 경우는 CPU 전용 합성이 느리게 느껴질 만큼 충분한 양과 빈도로 오디오를 생성할 때뿐입니다.',
        ],
        items: [
          '🧭 **Apple Silicon Mac에서 가장 빠른 로컬 옵션을 원함:** mlx-audio를 통한 Kokoro — 여기서 유일하게 MLX를 통해 Metal을 사용하도록 작성된 엔진.',
          '🧭 **오래된 Intel 모델을 포함한 모든 Mac:** Piper — 설계상 CPU 전용이므로 Apple Silicon 관련 설정이나 문제 해결이 전혀 필요 없습니다.',
          '🧭 **짧은 녹음으로부터 특정 음성을 복제해야 함:** XTTS v2 — Mac에서는 사실상 CPU로만 작동하며 라이선스가 비상업적이라는 점을 받아들이십시오.',
          '🧭 **음성뿐 아니라 웃음, 한숨, 주변음을 원함:** Bark — 다만 실험적인 Apple Silicon 경로를 위해 추가 설치 시간을 확보하고, 먼저 현재 유지보수 상태를 확인하십시오.',
          '❌ **활발한 유지보수나 확실한 성능이 필요하다면 Bark는 피하십시오** — 공개 저장소는 2024년 4월 이후 커밋이 없으며, 이는 Apple Silicon 문제와는 무관합니다.',
          '❌ **상업용 제품을 개발 중이라면 XTTS v2는 피하십시오** — Coqui Public Model License(CPML)는 비상업적이며, 이를 공개한 회사 Coqui AI는 2023년 12월에 유료 서비스를 종료했습니다.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Piper, Kokoro, XTTS v2, Bark는 Apple Silicon 적합성 면에서 어떻게 비교됩니까?',
        content: [
          '**Kokoro는 이 비교에서 유일하게 실제로, 목적을 갖고 구축된 Apple Silicon GPU 경로를 가진 엔진입니다. 나머지는 설계상 또는 미해결 버그로 인해 CPU 전용입니다.** 아래 표는 Mac 적합성을 실제로 좌우하는 네 가지 요소로 각 엔진을 평가합니다: Apple Silicon 가속 사용 여부, 필요한 메모리 양, macOS 설치의 번거로움, 음성 품질입니다.',
        ],
        columns: ['엔진', 'Apple Silicon 가속', 'RAM 사용량', 'macOS 설치', '음성 품질'],
        rows: [
          {
            '엔진': '[Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)',
            'Apple Silicon 가속': '있음 — MLX를 통한 Metal(mlx-audio)',
            'RAM 사용량': '낮음(8,200만 파라미터, 양자화 버전 존재)',
            'macOS 설치': 'pip install + mlx-audio, Apple Silicon 전용',
            '음성 품질': '자연스러움, 대형 클라우드 모델에 근접',
          },
          {
            '엔진': '[Piper](/power-local-llm/piper-tts-review)',
            'Apple Silicon 가속': '설계상 없음 — CPU 전용 ONNX Runtime',
            'RAM 사용량': '매우 낮음(음성당 약 50~100MB)',
            'macOS 설치': '`pip install piper-tts`, GPU 설정 불필요',
            '음성 품질': '명료하지만 다소 기계적인 억양',
          },
          {
            '엔진': '[XTTS v2](/power-local-llm/xtts-v2-review)',
            'Apple Silicon 가속': '없음 — MPS가 멈춤(GH 이슈 #3649)',
            'RAM 사용량': '중간~높음(완전한 클로닝 모델)',
            'macOS 설치': '`pip install coqui-tts`, Mac에서는 CPU 전용',
            '음성 품질': '고품질, 특정 음성 복제 가능',
          },
          {
            '엔진': '[Bark](/power-local-llm/bark-tts-review)',
            'Apple Silicon 가속': '실험적 — `SUNO_ENABLE_MPS=True`',
            'RAM 사용량': '높음(small-models 플래그로 감소 가능)',
            'macOS 설치': 'GitHub에서 pip install, PyPI 패키지 없음',
            '음성 품질': '표현력 있음, 비결정적',
          },
        ],
        note: '음성 품질 평가는 각 엔진의 문서화된 아키텍처와 PromptQuorum의 전용 리뷰(각 행에 링크됨)를 기반으로 한 정성적 설명이며, PromptQuorum이 실시한 블라인드 청취 테스트가 아닙니다. 여기서는 수치화된 MOS(평균 의견 점수)나 벤치마크 수치를 주장하지 않습니다.',
      },
      gpuAcceleration: {
        id: 'gpu-acceleration',
        title: 'Mac에서 실제로 GPU를 사용하는 엔진은 무엇입니까?',
        content: [
          '**실제로, 목적을 갖고 구축된 Apple Silicon Metal GPU 경로를 가진 것은 Kokoro뿐입니다. Piper는 설계상 GPU를 완전히 건너뛰며, XTTS v2와 Bark는 모두 Mac에서 GPU 지원이 미해결이거나 부분적입니다.** 이는 Apple Silicon에서 이 엔진들을 가르는 가장 큰 요인이며, "Mac에서 실행된다"는 것이 곧 "Mac의 GPU를 사용한다"는 뜻이라고 가정하기 쉽지만, 대개는 그렇지 않습니다.',
        ],
        items: [
          '**Kokoro-82M은 커뮤니티 프로젝트 [mlx-audio](https://github.com/Blaizzy/mlx-audio)를 통해 Apple의 자체 [MLX](https://github.com/ml-explore/mlx) 프레임워크로 실행되며, Apple Silicon과 Python 3.10~3.12가 필요합니다.** MLX는 Apple의 오픈소스 머신러닝 프레임워크로, Apple Silicon의 통합 메모리 아키텍처 위에서 Metal을 위해 처음부터 구축되었습니다 — 이는 이 사이트의 [Apple Silicon 로컬 LLM 가이드](/local-llms/apple-silicon-local-llm-guide-2026)와 [MLX 대 Ollama 대 llama.cpp 비교](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)가 언어 모델에 대해 다루는 것과 동일한 프레임워크입니다. Hugging Face에서 hexgrad가 공개한 공식 Kokoro-82M 가중치는 원래 PyTorch 모델입니다. MLX 경로는 커뮤니티 이식판이며 Apple이나 hexgrad의 공식 릴리스가 아닙니다. mlx-audio는 또한 메모리 사용량을 줄이기 위한 bf16, 8비트, 4비트 양자화 변형도 제공합니다.',
          '**Piper는 Apple Silicon을 포함한 어떤 플랫폼에서도 GPU를 전혀 사용하지 않습니다 — 이는 설계이지 제약이 아닙니다.** Piper는 espeak-ng로 텍스트를 음소로 변환한 다음, 빠른 CPU 추론을 위해 [ONNX Runtime](https://onnxruntime.ai/)으로 내보낸 모델로 오디오를 합성합니다. 이 설계 선택이야말로 Piper가 Raspberry Pi에서도 실시간으로 실행되는 이유입니다 — 전체 아키텍처와 설치 단계는 PromptQuorum의 [Piper TTS 리뷰](/power-local-llm/piper-tts-review)를 참조하십시오.',
          '**XTTS v2의 Apple Silicon Metal(MPS) 지원은 현재 작동하지 않습니다.** [coqui-ai/TTS GitHub 저장소](https://github.com/coqui-ai/TTS/issues/3649)에서 추적 중인 이슈("Unable to use xtts_v2 with mps device on Apple Silicon")는 MPS 장치에서 XTTS v2를 실행하려는 시도가 완료되지 않고 멈춰버린다는 사실을 기록하고 있습니다. Coqui 자체 프로젝트도 XTTS v2에 대한 Apple Silicon GPU 지원을 공식적으로 지원한다고 명시하지 않습니다. 실제로 이는 XTTS v2가 Mac에서 CPU로만 작동한다는 것을 의미하며, 다른 플랫폼에서도 이를 실행하는 동일한 [Coqui TTS 툴킷](/power-local-llm/coqui-tts-review)(MPL-2.0 라이선스)을 통해 실행됩니다.',
          '**Bark는 환경 변수 뒤에 실험적인 Apple Silicon MPS 지원을 갖추고 있습니다.** `SUNO_ENABLE_MPS=True`를 설정하면 [suno-ai/bark GitHub 저장소](https://github.com/suno-ai/bark)에서의 논의에 따라 Metal 가속이 활성화되지만, Bark가 의존하는 일부 PyTorch 연산자는 당시 MPS용으로 구현되지 않아 해당 단계들이 부분적으로 CPU로 대체됩니다. Bark는 또한 통합 메모리가 적은 Mac에서 메모리 부담을 줄이기 위해 특별히 `SUNO_USE_SMALL_MODELS=True` 플래그도 지원합니다.',
        ],
        note: '커뮤니티가 유지보수하는 TTS 프로젝트의 Apple Silicon 가속 상태는 이 글이 업데이트되는 속도보다 릴리스 간에 더 빠르게 변할 수 있습니다 — 여기에 설명된 내용이 현재 동작과 일치한다고 가정하기 전에 각 프로젝트의 GitHub 이슈와 README를 직접 확인하십시오.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Mac에서 MLX 가속으로 Kokoro를 설치하는 방법은?',
        content:
          '이 안내는 [mlx-audio GitHub 저장소](https://github.com/Blaizzy/mlx-audio)에 문서화된 설정을 사용해 커뮤니티 mlx-audio 프로젝트를 설치하고, Apple의 MLX 프레임워크를 통해 Kokoro-82M을 실행합니다.',
        numberedItems: [
          {
            title: 'Apple Silicon이며 지원되는 Python 버전인지 확인합니다.',
            whyItMatters: 'mlx-audio는 Apple Silicon Mac(M 시리즈 칩)과 Python 3.10~3.12를 필요로 합니다. MLX는 Intel Mac에서는 전혀 실행되지 않으므로, 이 경로는 Apple Silicon 전용입니다.',
          },
          {
            title: 'mlx-audio를 설치합니다.',
            whyItMatters: 'Python 가상 환경에서 `pip install mlx-audio`를 실행합니다. 이 명령은 오디오 파이프라인과 함께 MLX 자체(버전 0.31 이상)를 함께 가져옵니다.',
          },
          {
            title: '명령줄에서 첫 음성 합성을 실행합니다.',
            whyItMatters: '이 패키지에는 처음 사용 시 Kokoro-82M 가중치를 다운로드하고 텍스트 문자열로부터 WAV 파일을 합성하는 CLI 진입점이 포함되어 있습니다 — CLI 플래그는 릴리스마다 변경될 수 있으므로 정확한 명령어는 프로젝트의 현재 README를 확인하십시오.',
          },
          {
            title: '음성을 선택하고, 원한다면 양자화 모델 변형도 선택합니다.',
            whyItMatters: 'Kokoro-82M에는 여러 언어에 걸친 54개의 음성 프리셋이 포함되어 있습니다. mlx-audio는 또한 bf16, 8비트, 4비트 양자화 변형을 제공하며, 정밀도를 약간 낮추는 대신 메모리 사용량을 줄일 수 있습니다. 통합 메모리가 적은 Mac에서 유용합니다.',
          },
          {
            title: '자신의 Python 애플리케이션에 통합합니다.',
            whyItMatters: '일회성 CLI 합성을 넘어서는 용도라면 CLI를 반복 호출하는 대신 mlx-audio의 Python API를 직접 호출하여, 호출마다 모델을 다시 로드하는 비용을 피하십시오.',
          },
        ],
        note: '이는 커뮤니티 프로젝트이며 Apple이나 hexgrad의 공식 릴리스가 아닙니다 — 배포하기 전에 [mlx-audio 저장소](https://github.com/Blaizzy/mlx-audio)에서 현재 설치 지침을 확인하십시오. 명령어 이름과 플래그는 변경될 수 있습니다.',
      },
      intelMacs: {
        id: 'intel-macs',
        title: 'Intel Mac에서는 무엇이 달라집니까?',
        content: [
          '**Intel Mac에서는 MLX 가속 Kokoro 경로를 전혀 사용할 수 없습니다 — MLX에는 Apple Silicon이 필요하며 Intel 하드웨어에서는 전혀 작동하지 않습니다.** 여기서 다루는 다른 모든 엔진은 Intel에서도 계속 작동합니다. 어느 것도 작동하기 위해 Apple Neural Engine이나 Apple Silicon 전용 GPU 가속에 의존하지 않으며, 단순히 CPU에서 실행되기 때문입니다.',
        ],
        items: [
          '**Piper는 Intel과 Apple Silicon의 구분에 영향받지 않습니다.** 모든 플랫폼에서 설계상 CPU 전용이므로, Piper에 한해서는 하드웨어 세대를 제외하면 Intel Mac이 Apple Silicon Mac과 비슷한 성능을 보입니다.',
          '**Kokoro는 공식 PyTorch 가중치를 통해 Intel Mac에서도 계속 작동하지만, MLX 가속 경로는 사용할 수 없습니다.** mlx-audio를 통한 Apple Silicon 전용 Metal 경로는 잃게 되지만, 모델 자체(8,200만 파라미터)가 충분히 작아 CPU에서도 수용할 만한 수준으로 작동합니다.',
          '**XTTS v2와 Bark는 Intel과 Apple Silicon Mac에서 동일하게 작동합니다. 어차피 둘 다 현재 어떤 Mac에서도 CPU로만 작동하기 때문입니다** — XTTS v2는 MPS 지원이 결함이 있기 때문이고, Bark는 MPS 지원이 실험적이고 부분적이기 때문입니다. 둘 다 애초에 Apple Silicon에서 성숙한 가속 경로를 갖추지 못했으므로, Apple Silicon에서 Intel로 이동해도 실질적인 기능 손실은 없습니다.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '이 엔진들을 사용하지 말아야 할 때는 언제입니까?',
        content: [
          '**이 비교에 포함된 네 가지 엔진 모두가 모든 Mac TTS 사용 사례에 적합한 선택은 아닙니다 — 각각 다른 도구나 클라우드 API가 더 적합한 상황이 있습니다.**',
        ],
        items: [
          '❌ **복제된 음성과 함께 확실한 상업용 라이선스가 필요한 경우.** XTTS v2의 CPML 라이선스는 비상업적이며, Coqui AI가 2023년 12월에 유료 서비스를 종료한 이후 상업용 라이선스로 이어지는 확인된 유효한 경로가 없습니다 — 관리형 상업용 클라우드 대안은 PromptQuorum의 [ElevenLabs 비교](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts)를 참조하십시오.',
          '❌ **확실한 활발한 유지보수가 필요한 경우.** Bark의 공개 GitHub 저장소는 2024년 4월 5일 이후 커밋이 없습니다. 지속적인 수정과 업데이트가 프로젝트에 중요하다면 Piper(Open Home Foundation이 활발히 유지보수)나 Kokoro(mlx-audio를 중심으로 활발하게 사용되는 커뮤니티 생태계)가 더 안전한 선택입니다.',
          '❌ **커뮤니티 프로젝트에 의존하지 않고 오늘 당장 프로덕션급 Apple Silicon GPU 지원이 필요한 경우.** Kokoro의 MLX 경로는 커뮤니티 프로젝트를 통해 작동하며 Apple이나 hexgrad의 공식 릴리스가 아닙니다 — 좋기는 하지만 벤더가 보장하는 것은 아니라고 여기십시오.',
          '❌ **매우 제한된 Apple Silicon 메모리(8GB 기본 구성)에서 대형 로컬 LLM을 동시에 실행하면서 실시간 대화형 음성이 필요한 경우.** 메모리가 제한된 Mac에서 큰 XTTS v2나 Bark 프로세스를 LLM과 함께 실행하는 것은 빠듯할 수 있습니다. Piper와 Kokoro의 작은 메모리 사용량이 더 많은 여유를 남깁니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Apple Silicon Mac용 최고의 로컬 TTS 엔진은 무엇입니까?',
            a: 'Apple의 자체 MLX 프레임워크를 통해 Apple Silicon GPU(Metal) 가속을 특별히 원한다면, 커뮤니티 mlx-audio 프로젝트를 통해 실행되는 Kokoro-82M이 최선의 선택입니다. 어떤 Mac에서도 동일하게 작동하는 가장 간단한 설치를 원한다면, 모든 플랫폼에서 설계상 CPU로만 작동하는 Piper가 더 나은 선택입니다.',
          },
          {
            q: 'Piper는 Mac에서 GPU를 사용합니까?',
            a: '아닙니다. Piper는 Apple Silicon과 Intel Mac을 포함한 모든 플랫폼에서 설계상 CPU 전용입니다. espeak-ng로 텍스트를 음소로 변환하고 ONNX Runtime을 통해 오디오를 합성하며, 이 덕분에 GPU가 전혀 없어도 Raspberry Pi에서 실시간으로 실행됩니다.',
          },
          {
            q: 'Kokoro-82M은 Apple Silicon에서 GPU 가속으로 실행할 수 있습니까?',
            a: '네, 커뮤니티 프로젝트 mlx-audio를 통해 가능합니다. 이는 Apple의 MLX 프레임워크를 통해 Kokoro-82M을 실행하며, 이 프레임워크는 Apple Silicon의 통합 메모리 아키텍처 위에서 Metal을 위해 특별히 제작되었습니다. hexgrad가 공개한 공식 Kokoro-82M 가중치는 PyTorch 모델입니다. MLX 경로는 커뮤니티 이식판이지 공식 릴리스가 아니며, Apple Silicon Mac(Intel Mac에서는 사용 불가)과 Python 3.10~3.12가 필요합니다.',
          },
          {
            q: 'XTTS v2는 Apple Silicon에서 작동합니까?',
            a: '작동하지만 CPU로만 작동합니다. XTTS v2의 Metal(MPS) 장치 지원은 coqui-ai/TTS GitHub 저장소에서 추적 중인 문서화된 미해결 문제(이슈 #3649)로, MPS 장치를 사용하려 하면 완료되지 않고 멈춰버립니다. Coqui의 프로젝트는 XTTS v2에 대한 Apple Silicon GPU 가속을 공식적으로 지원하지 않으므로 어떤 Mac에서도 CPU 전용 성능을 예상해야 합니다.',
          },
          {
            q: 'Bark는 Apple Silicon에서 가속됩니까?',
            a: '부분적으로, 그리고 실험적으로 가속됩니다. SUNO_ENABLE_MPS=True 환경 변수를 설정하면 Bark의 Metal GPU 가속이 활성화되지만, 의존하는 일부 PyTorch 연산자가 MPS용으로 구현되지 않아 일부 처리 단계는 여전히 CPU로 대체됩니다. Bark의 관리자 자신도 이를 실험적이며 프로덕션 준비가 되지 않았다고 설명합니다.',
          },
          {
            q: 'Intel Mac에서도 이 엔진들을 사용할 수 있습니까?',
            a: 'Piper, XTTS v2, Bark 모두 Intel Mac에서 작동합니다. 작동하는 데 Apple Silicon 전용 가속이 필요하지 않기 때문입니다 — 설계상 CPU에서 작동하거나(Piper), GPU 가속 경로가 어차피 미해결이거나 부분적이어서 CPU에서 작동합니다(XTTS v2, Bark). Kokoro의 MLX 가속 경로는 특별히 Apple Silicon을 필요로 하며 Intel Mac에서는 전혀 작동하지 않지만, Kokoro의 공식 PyTorch 가중치는 MLX 가속 없이도 Intel에서 계속 작동합니다.',
          },
          {
            q: '이 엔진들 중 특정 음성을 복제할 수 있는 것은 무엇입니까?',
            a: '여기서 다루는 네 가지 엔진 중 XTTS v2만이 짧은 참조 오디오 클립(공식 모델 카드에 따르면 최소 6초)으로부터 음성을 복제할 수 있습니다. Piper, Kokoro, Bark는 모두 즉석에서 임의의 음성을 복제하는 대신 사전 학습되었거나 미리 설정된 음성을 사용합니다. 전체 클로닝 세부 사항과 라이선스는 PromptQuorum의 전용 XTTS v2 리뷰를 참조하십시오.',
          },
          {
            q: '이 로컬 TTS 엔진들 중 Apple Silicon Mac에서 사용하는 데 유료 라이선스가 필요한 것이 있습니까?',
            a: '여기서 다루는 엔진 중 macOS나 Apple Silicon 사용 자체에 요금을 부과하는 것은 없습니다. Piper(GPL-3.0-or-later), Kokoro(Apache-2.0), Bark(MIT)는 모두 플랫폼과 무관하게 무료 오픈소스 소프트웨어입니다. XTTS v2는 사용 자체는 무료이지만 비상업적 라이선스(CPML) 하에 있습니다 — 이 제한은 Apple Silicon, Intel, Windows, Linux 어디에서든 동일하게 적용되며, 어떤 Mac을 사용하는지와는 무관합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Apple Silicon에 한해서는, Kokoro-82M이 이 네 가지 엔진 중 유일하게 Apple 자체 MLX 프레임워크 위에 구축된 커뮤니티 mlx-audio 프로젝트를 통해 Mac의 Metal GPU에 실제로, 목적을 갖고 구축된 경로를 갖추고 있어 돋보입니다 — 그리고 충분히 작아서(8,200만 파라미터, Apache-2.0 라이선스) 이 가속을 설정할 가치가 있습니다. 단순성과 하드웨어 간 일관성이 순수한 속도보다 중요할 때는 Piper가 여전히 올바른 기본 선택입니다. 모든 플랫폼에서 CPU 전용이므로 Apple Silicon 관련 설정이나 문제 해결, Intel Mac에서의 성능 저하 걱정이 전혀 없습니다. XTTS v2는 음성 클로닝이 특별히 필요하고 비상업적 라이선스를 받아들일 수 있는 경우에만 CPU 전용 성능 저하를 감수할 가치가 있습니다. Bark는 독특한 비언어적 소리 때문에만 고려할 가치가 있으며, Apple Silicon 가속과 전반적인 유지보수 상태가 모두 불안정하다는 점에 유의해야 합니다. 확신이 서지 않는다면 가장 간단한 설치인 Piper로 시작하고, Metal 가속을 원한다는 확신이 서면 mlx-audio를 통한 Kokoro로 옮겨가며, 음성 클로닝이 필수 요건이 될 때만 XTTS v2로 손을 뻗으십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Hugging Face의 Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) — 공식 모델 카드: 파라미터, 라이선스, 아키텍처.',
          '[GitHub의 mlx-audio](https://github.com/Blaizzy/mlx-audio) — Apple Silicon에서 Apple의 MLX 프레임워크를 통해 Kokoro-82M을 실행하는 커뮤니티 프로젝트.',
          '[coqui-ai/TTS GitHub 이슈 #3649](https://github.com/coqui-ai/TTS/issues/3649) — "Unable to use xtts_v2 with mps device on Apple Silicon", 미해결 MPS 멈춤 현상을 기록.',
          '[suno-ai/bark GitHub 저장소](https://github.com/suno-ai/bark) — SUNO_ENABLE_MPS를 통한 실험적 Apple Silicon MPS 지원을 기록한 이슈 및 풀 리퀘스트.',
          '[Apple MLX 프레임워크](https://github.com/ml-explore/mlx) — Apple Silicon용 네이티브 Metal GPU 가속을 갖춘 Apple의 공식 오픈소스 머신러닝 프레임워크.',
          '[Piper TTS 리뷰](/power-local-llm/piper-tts-review) — 설치 명령어와 라이선스 이력을 포함한 PromptQuorum의 전용 리뷰.',
          '[XTTS v2 리뷰](/power-local-llm/xtts-v2-review), [Coqui TTS 리뷰](/power-local-llm/coqui-tts-review), [Bark TTS 리뷰](/power-local-llm/bark-tts-review) — 여기서 다루는 다른 엔진들에 대한 PromptQuorum의 전용 리뷰.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Piper TTS 리뷰](/power-local-llm/piper-tts-review) — 이 비교에서 다룬 빠르고 CPU 전용이며 관대한 라이선스를 가진 엔진을 심층적으로 다룹니다.',
          '[XTTS v2 리뷰](/power-local-llm/xtts-v2-review) — 여기서 다룬 음성 클로닝 모델로, 비상업적 CPML 라이선스를 포함합니다.',
          '[Coqui TTS 리뷰](/power-local-llm/coqui-tts-review) — XTTS v2(및 다른 모델)를 실행하는 툴킷으로, MPL-2.0 라이선스입니다.',
          '[Bark TTS 리뷰](/power-local-llm/bark-tts-review) — 여기서 다룬 표현력 있는 비언어 오디오 엔진으로, 유지보수 상태를 포함합니다.',
          '[Apple Silicon 로컬 LLM 가이드](/local-llms/apple-silicon-local-llm-guide-2026) — TTS를 넘어선 로컬 AI를 위한 메모리 계층, Metal GPU 가속, Mac 선택.',
          '[Mac에서의 MLX 대 Ollama 대 llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — 이 가이드가 Kokoro에 대해 다루는 것과 동일한 MLX 프레임워크를 로컬 언어 모델 관점에서 설명합니다.',
          '[ElevenLabs 대 Piper 대 XTTS v2](/power-local-llm/elevenlabs-vs-local-tts-piper-xtts) — 관리형 상업용 옵션을 고려하는 독자를 위한 클라우드 대 로컬 비교.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mac용 최고의 로컬 TTS 엔진(2026): 실제로 Apple Silicon을 사용하는 것은 무엇인가',
      description:
        'Piper는 모든 Mac에서 CPU로만 작동합니다. Kokoro는 MLX를 통해 Metal을 사용할 수 있습니다. XTTS v2의 MPS 지원은 알려진 결함이 있는 GitHub 이슈입니다. Apple Silicon에서 실제로 설치해야 할 로컬 TTS 엔진을 안내합니다.',
      url: 'https://promptquorum.com/ko/power-local-llm/best-local-tts-mac',
      inLanguage: 'ko',
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Apple Silicon Mac용 로컬 텍스트 음성 변환 엔진을 평가하는 개발자' },
      about: [
        { '@type': 'Thing', name: 'Piper' },
        { '@type': 'Thing', name: 'Kokoro-82M' },
        { '@type': 'Thing', name: 'XTTS v2' },
        { '@type': 'Thing', name: 'Bark' },
        { '@type': 'Thing', name: 'Apple Silicon' },
        { '@type': 'Thing', name: 'MLX' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/best-local-tts-mac' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Mac용 최고의 로컬 TTS 엔진(2026)', item: 'https://promptquorum.com/ko/power-local-llm/best-local-tts-mac' },
      ],
    },
  },
}
