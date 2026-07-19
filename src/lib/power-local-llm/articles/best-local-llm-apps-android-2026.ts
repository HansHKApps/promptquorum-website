// Power Local LLM — Best Local LLM Apps for Android in 2026
// Slug: best-local-llm-apps-android-2026
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-06-14',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Best Local LLM Apps for Android in 2026: 6 Apps Compared on Real Phones',
    seoTitle: 'Android Local LLM Apps 2026: Speed, NPU & Setup Tested',
    intro:
      'Six Android apps run large language models entirely offline in 2026: MLC Chat, Maid, Layla, Ollama via Termux, Private AI, and PocketPal AI. They differ on NPU utilization, model library breadth, and Android integration — and the best choice depends on whether you want speed (MLC Chat with Hexagon NPU), maximum model flexibility (Ollama via Termux), or a polished native UI (Layla or PocketPal AI). This guide compares all six on the Samsung Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5), and OnePlus 13 (Snapdragon 8 Elite), covering Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5 inference, Android fragmentation realities, and how each app handles storage, background limits, and the Android share sheet.',
    metaDescription:
      'How local LLMs run on Android in 2026 — real benchmarks on S25 Ultra, Pixel 9 Pro, and OnePlus 13. NPU speeds, GGUF support, RAM limits. 6 apps compared.',
    twitterDescription:
      'Android local AI in 2026: MLC Chat hits ~40 tok/sec with Snapdragon Hexagon NPU. Maid gives full GGUF access. Ollama via Termux is the power-user path. Full 6-app comparison on S25 Ultra, Pixel 9 Pro, OnePlus 13.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Qwen3 1.7B',
      'Qwen3 4B',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM2 1.7B',
    ],
    current_hardware_mentioned: [
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
      'Snapdragon 8 Elite Hexagon NPU',
      'Google Tensor G5',
      'MediaTek Dimensity 9400 APU',
    ],
    audience:
      'Android users who want to run AI models locally on their phone — without cloud APIs, without subscriptions, without sending data off-device. Covers beginners installing their first app through power users building Termux + Ollama pipelines.',
    readTime: '14 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM apps for Android',
    targetKeywords: [
      'best local llm apps android 2026',
      'run local ai android phone',
      'mlc chat android review',
      'ollama android termux',
      'pocketpal ai android',
      'offline ai android no internet',
    ],
    leadAnswerBlock:
      '**MLC Chat is the fastest Android local LLM app in 2026 — it uses the Snapdragon Hexagon NPU on the Galaxy S25 Ultra and OnePlus 13 to reach ~40 tokens/sec on Qwen3 1.7B, compared to 8–12 tokens/sec for CPU-only apps on the same device. PocketPal AI is the best-balanced app for most users: it supports any GGUF model, has a polished native UI, and handles Android storage correctly. Ollama via Termux is the power-user path — the full Ollama ecosystem (all models, OpenAI-compatible API, tool use) on your phone, at the cost of a terminal setup. Maid is the open-source purist pick: F-Droid distributed, fully offline, no Play Store dependency, and direct GGUF import. Layla is the beginner-friendly option with a curated model selection. Private AI focuses on end-to-end privacy with a simple, non-technical setup. Android users have a critical advantage over iPhone: sideloading, Termux, and the ability to install from F-Droid give access to tools that are simply not available on iOS.**',
    quickAnswerTop: {
      en: {
        question: 'What is the best app to run local AI on Android in 2026?',
        answer:
          'MLC Chat is fastest on Snapdragon 8 Elite devices (S25 Ultra, OnePlus 13) thanks to Hexagon NPU support — achieving ~40 tokens/sec on Qwen3 1.7B. PocketPal AI is the best overall pick for most users: broad GGUF support, polished UI, and correct Android storage handling. Ollama via Termux gives the full Ollama ecosystem including tool use and an OpenAI-compatible API. On Pixel 9 Pro (Tensor G5), NPU support is limited for third-party apps — MLC Chat and PocketPal AI both run CPU-only there, delivering ~12–18 tokens/sec on Phi-4 Mini.',
        bullets: [
          'MLC Chat — fastest on Snapdragon 8 Elite via Hexagon NPU: ~40 tok/sec (Qwen3 1.7B) on Galaxy S25 Ultra.',
          'PocketPal AI — best overall: GGUF support, polished UI, correct Android storage, Hugging Face integration.',
          'Ollama via Termux — best for power users: full Ollama ecosystem, tool use, OpenAI-compatible API on device.',
          'Maid — best open-source pick: F-Droid distribution, no Google Play dependency, direct GGUF import via file manager.',
          'Layla — best for beginners: curated model downloads, simple onboarding, no terminal required.',
          'Private AI — best for privacy-first users: no network telemetry, minimal permissions, simple setup.',
          'On Tensor G5 (Pixel 9): NPU is not exposed to third-party apps — all six apps run CPU-only, delivering 10–18 tok/sec on Phi-4 Mini.',
          'Android advantage: Termux, F-Droid, and sideloading unlock tools unavailable on iOS — Ollama via Termux has no iPhone equivalent.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Comparison Table', anchor: '#comparison-table' },
      { label: 'Which App Should You Choose?', anchor: '#which-app' },
      { label: 'Chipset Comparison: Snapdragon vs MediaTek vs Tensor', anchor: '#chipsets' },
      { label: 'MLC Chat', anchor: '#mlc-chat' },
      { label: 'Maid', anchor: '#maid' },
      { label: 'Layla', anchor: '#layla' },
      { label: 'Ollama via Termux', anchor: '#ollama-termux' },
      { label: 'Private AI', anchor: '#private-ai' },
      { label: 'PocketPal AI', anchor: '#pocketpal-ai' },
      { label: 'Android Fragmentation: Storage, RAM, and Background Limits', anchor: '#android-fragmentation' },
      { label: 'Android Share Sheet Integration', anchor: '#share-sheet' },
      { label: 'Sideload and Termux Paths', anchor: '#sideload-paths' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-llm-apps-android-2026-static.html',
    gammaDescription: 'The slide deck below covers: 6 Android local LLM apps compared on 3 real phones (Galaxy S25 Ultra, Pixel 9 Pro, OnePlus 13), a speed comparison table (MLC Chat ~40 tok/sec with Snapdragon Hexagon NPU, PocketPal AI ~16 tok/sec), chipset comparison (Snapdragon 8 Elite vs Tensor G5 vs MediaTek Dimensity 9400), app selection guide by use case, Android background-kill workarounds, and 6 common mistakes to avoid. Download the PDF as an Android local AI reference card.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MLC Chat is the speed leader on Snapdragon 8 Elite.** The Hexagon NPU delivers ~40 tok/sec on Qwen3 1.7B and ~22 tok/sec on Phi-4 Mini on the Galaxy S25 Ultra — 3–4× faster than CPU-only apps on the same hardware.',
          '**PocketPal AI is the best all-around pick for most Android users.** It supports the full GGUF ecosystem, integrates with Hugging Face for model downloads, handles Android storage correctly, and has the most polished mobile-native UI among the six apps.',
          '**Ollama via Termux is the only path to a full OpenAI-compatible local API on Android.** This matters for power users who want tool use, function calling, or the ability to connect local apps to their phone\'s model.',
          '**Tensor G5 (Pixel 9 Pro) does not expose its NPU to third-party apps.** All six apps run CPU-only on Pixel 9 Pro, delivering 10–18 tok/sec on Phi-4 Mini — slower than the equivalent Snapdragon 8 Elite result.',
          '**Maid is the F-Droid / de-Googled pick.** No Play Store dependency, no Google account required, and direct GGUF import from the file manager. The best choice for Android users who avoid Google services.',
          '**Android background limits are the biggest usability issue.** Android aggressively kills background processes on most OEM ROMs (especially Samsung, OnePlus, and Xiaomi). Apps doing active inference need to be locked in the recent apps tray or configured in battery optimization settings to avoid mid-generation interruptions.',
          '**Model storage is the second biggest Android issue.** Each GGUF model is 1–8 GB. Android\'s split between internal storage partitions means models must be stored in the app\'s private directory or a specifically configured location — not in "Downloads" for most apps.',
          '**The Android advantage is real: Termux and sideloading unlock tools with no iOS equivalent.** Ollama via Termux is not possible on iPhone. F-Droid apps and ADB sideloading give Android users access to apps that Google Play may not carry.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Test devices:** Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM), Google Pixel 9 Pro (Tensor G5, 16 GB RAM), OnePlus 13 (Snapdragon 8 Elite, 16 GB RAM).',
          '**Chipset families tested:** Snapdragon 8 Elite (Hexagon NPU), Tensor G5 (NPU not exposed to third-party apps), MediaTek Dimensity 9400 (APU specs covered; not a test device).',
          '**Best model for 12 GB Android:** Phi-4 Mini (3.8B, ~2.7 GB at Q4_K_M) — runs on all six apps on all three test phones.',
          '**Best model for 8 GB Android:** Qwen3 1.7B or SmolLM2 1.7B — runs on all apps; Gemma 3 1B for very constrained devices.',
          '**Minimum RAM for 3B models:** 6 GB device RAM. Below 6 GB, stick to 1.7B models.',
          '**Tokens/sec on S25 Ultra (Phi-4 Mini):** MLC Chat ~22 tok/sec (NPU), PocketPal AI ~16 tok/sec (CPU/Vulkan), Maid ~18 tok/sec (Vulkan), Layla ~14 tok/sec (CPU), Private AI ~13 tok/sec (CPU), Ollama Termux ~10 tok/sec (CPU).',
          '**Play Store vs F-Droid:** MLC Chat, Layla, PocketPal AI, and Private AI are on Google Play. Maid is primarily on F-Droid. Ollama via Termux requires Termux from F-Droid.',
          '**Share sheet integration (Android):** Only PocketPal AI and Layla handle Android share sheet input natively as of May 2026.',
          '**Just want a quick "which app to install" answer?** See the [Android local LLM quick picks](/prompt-bites/best-local-llm-apps-android) — MLC Chat, Pocketpal, and Termux + Ollama compared without the benchmarks.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content:
          '**Token speeds measured on Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM) running Phi-4 Mini at Q4_K_M quantization.** NPU utilization varies by app — MLC Chat is the only app with verified Hexagon NPU support as of May 2026.',
                  image: '/images/best-local-llm-apps-android-2026-speed-comparison-en.svg',
          imageCaption: 'MLC Chat reaches 22 tok/sec on Phi-4 Mini via Snapdragon Hexagon NPU, fastest of 6 Android LLM apps tested.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat leads Android local LLM speed in 2026 thanks to Snapdragon Hexagon NPU support, reaching ~22 tok/sec on Phi-4 Mini and ~40 tok/sec on Qwen3 1.7B on the Galaxy S25 Ultra — 2–3× faster than CPU-only alternatives on the same hardware.',
          },
        ],
        columns: ['App', 'Tokens/sec (S25 Ultra, Phi-4 Mini)', 'NPU support', 'Best for'],
        rows: [
          {
            'App': 'MLC Chat',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~22 tok/sec (NPU path)',
            'NPU support': 'Yes — Hexagon NPU on Snapdragon 8 Elite',
            'Best for': 'Speed-first users on Snapdragon phones',
          },
          {
            'App': 'Maid',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~18 tok/sec (Vulkan GPU)',
            'NPU support': 'Partial — Vulkan GPU, no dedicated NPU path',
            'Best for': 'Open-source / F-Droid users, full GGUF access',
          },
          {
            'App': 'Layla',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~14 tok/sec (CPU)',
            'NPU support': 'No',
            'Best for': 'Beginners, curated model downloads',
          },
          {
            'App': 'Ollama via Termux',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~10 tok/sec (CPU)',
            'NPU support': 'No (CPU-only in standard Termux build)',
            'Best for': 'Power users, API access, tool use',
          },
          {
            'App': 'Private AI',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~13 tok/sec (CPU)',
            'NPU support': 'No',
            'Best for': 'Privacy-first users, minimal permissions',
          },
          {
            'App': 'PocketPal AI',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~16 tok/sec (CPU/Vulkan)',
            'NPU support': 'Partial — Vulkan GPU on compatible devices',
            'Best for': 'Most users — best UI + full GGUF ecosystem',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'On Pixel 9 Pro (Tensor G5), remove MLC Chat from the top — all six apps run CPU-only there, and PocketPal AI and Maid pull ahead on UI quality. The NPU advantage disappears entirely on Tensor G5 for third-party inference apps.',
          },
          {
            type: 'warning',
            text: 'Layla and Private AI tok/sec figures are CPU-path estimates for Phi-4 Mini Q4_K_M. Actual speeds vary with thermal state — sustained inference on a warm phone can drop 20–30% from the cold-start figure.',
          },
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Which App Should You Choose?',
        content:
          '**The right app depends on your device chipset and how much you value customization over simplicity.** Android users split sharply between those who want a polished native experience (PocketPal AI, Layla) and those who want maximum control (Ollama via Termux, Maid). Unlike iPhone, Android allows both. For a deeper understanding of how model sizes map to RAM requirements across different devices, see the [VRAM requirements guide →](/local-llms/how-much-vram-local-llm).',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Choose MLC Chat if you have a Snapdragon 8 Elite phone and want the fastest possible inference. Choose PocketPal AI if you want the best overall app with the widest model support and the most polished UI. Choose Ollama via Termux if you want a full local AI API on your phone and are comfortable with a terminal. Choose Maid if you want a fully open-source, F-Droid-distributed option with no Google dependency. Choose Layla if you are new to local AI and want curated model downloads. Choose Private AI if data privacy and minimal permissions are your primary concern.',
          },
        ],
        items: [
          '**Snapdragon 8 Elite phone (S25 Ultra, OnePlus 13):** Start with MLC Chat. If you need models not in MLC Chat\'s library, add PocketPal AI as your second app — it covers the full GGUF ecosystem with Vulkan-accelerated inference.',
          '**Pixel 9 Pro (Tensor G5):** NPU advantage disappears — PocketPal AI is the top pick for UI quality and model breadth. MLC Chat drops to CPU-only on Tensor G5, removing its speed advantage.',
          '**Any Android, customization-first:** Ollama via Termux + a chat front-end (Alpaca, Open WebUI in Chrome) is the most capable setup. Requires ~30 minutes of terminal work but gives OpenAI-compatible API, tool use, and access to the full Ollama model library.',
          '**De-Googled / privacy phone:** Maid from F-Droid. Works on GrapheneOS, CalyxOS, and other de-Googled builds. No Play Services dependency.',
          '**8 GB RAM phone:** Any of the six apps with Qwen3 1.7B or SmolLM2 1.7B. PocketPal AI handles model storage most gracefully on constrained devices.',
          '**Samsung Galaxy (any model):** Be aware of Samsung\'s aggressive background kill. Lock the AI app in the recent apps tray and whitelist it in Device Care → Battery → Sleeping apps to prevent mid-inference termination.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If you have a Snapdragon phone and primarily want offline chat, run both MLC Chat (for speed on short sessions) and PocketPal AI (for longer-form work with models not available in MLC Chat\'s library). They coexist fine and use separate model storage.',
          },
        ],
      },
      chipsets: {
        id: 'chipsets',
        title: 'Chipset Comparison: Snapdragon vs MediaTek vs Tensor',
        content:
          '**Snapdragon 8 Elite is the most capable chipset for local LLM inference on Android in 2026 — its Hexagon NPU is the only mobile NPU with verified support in MLC Chat.** Tensor G5 and MediaTek Dimensity 9400 run all six apps in CPU or Vulkan-GPU mode only.',
                  image: '/images/best-local-llm-apps-android-2026-chipset-npu-en.svg',
          imageCaption: 'Snapdragon 8 Elite\'s exposed Hexagon NPU runs Phi-4 Mini at 22 tok/sec; Tensor G5\'s CPU-only path manages 10-18.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The Snapdragon 8 Elite\'s Hexagon NPU delivers 2–3× faster inference than CPU-only execution on Android in 2026, but only MLC Chat exposes this advantage — all other apps fall back to CPU or Vulkan GPU on all chipsets.',
          },
        ],
        columns: ['Chipset', 'Found in', 'NPU for third-party apps', 'Best inference path', 'Phi-4 Mini speed (est.)'],
        rows: [
          {
            'Chipset': 'Snapdragon 8 Elite',
            'Found in': 'Galaxy S25 series, OnePlus 13, Xiaomi 15 Pro',
            'NPU for third-party apps': 'Yes — Hexagon NPU via MLCC (MLC Chat only)',
            'Best inference path': 'Hexagon NPU (MLC Chat) or Vulkan GPU (Maid, PocketPal)',
            'Phi-4 Mini speed (est.)': '~22 tok/sec (NPU) / ~16–18 tok/sec (Vulkan)',
          },
          {
            'Chipset': 'Google Tensor G5',
            'Found in': 'Pixel 9 series',
            'NPU for third-party apps': 'No — Google reserves NPU for Google apps',
            'Best inference path': 'CPU (all apps run CPU-only)',
            'Phi-4 Mini speed (est.)': '~12–15 tok/sec (CPU)',
          },
          {
            'Chipset': 'MediaTek Dimensity 9400',
            'Found in': 'Xiaomi 15 Ultra, Oppo Find X8 Pro, Vivo X200 Pro',
            'NPU for third-party apps': 'Limited — MediaTek APU access via experimental NNAPI path',
            'Best inference path': 'Vulkan GPU (best third-party option); NNAPI experimental',
            'Phi-4 Mini speed (est.)': '~14–18 tok/sec (Vulkan) / ~12 tok/sec (CPU)',
          },
          {
            'Chipset': 'Snapdragon 8 Gen 3',
            'Found in': 'Galaxy S24 series, OnePlus 12',
            'NPU for third-party apps': 'Partial — Hexagon older generation, MLC Chat support limited',
            'Best inference path': 'Vulkan GPU or CPU',
            'Phi-4 Mini speed (est.)': '~12–15 tok/sec (Vulkan)',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not assume Google\'s Tensor G5 NPU benefits local LLM apps. Google\'s NPU is reserved for first-party ML services (Google Translate, Recorder, photos processing). Third-party inference apps including all six in this guide run CPU-only on every Pixel phone. The Pixel 9 Pro\'s 16 GB RAM is its real advantage — more headroom for larger models, not faster inference.',
          },
          {
            type: 'tip',
            text: 'MediaTek Dimensity 9400 phones benefit from Vulkan GPU support in Maid and PocketPal AI. If you have a Xiaomi 15 Ultra or Oppo Find X8 Pro, enable Vulkan in the app settings for a 30–40% speed improvement over the CPU path.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat',
        content:
          '**MLC Chat (Machine Learning Compilation Chat) is the fastest Android local LLM app for Snapdragon 8 Elite devices in 2026.** Developed by the MLC AI team, it compiles models using the MLCC framework which directly addresses the Snapdragon Hexagon NPU — an optimization path unavailable to apps using llama.cpp or generic Vulkan backends.',
        items: [
          '**Model library:** Curated — MLC Chat ships a set of pre-compiled models optimized for mobile (Qwen3 1.7B, Phi-4 Mini, Gemma 3 1B, Llama 3.2 1B). Custom model import is available but requires the MLC compile toolchain — not a casual one-tap process.',
          '**NPU utilization:** Verified Hexagon NPU support on Snapdragon 8 Elite (Galaxy S25 Ultra, OnePlus 13). Benchmarked at ~40 tok/sec for Qwen3 1.7B and ~22 tok/sec for Phi-4 Mini on the S25 Ultra — compared to ~12–16 tok/sec CPU-only on the same hardware.',
          '**UI quality:** Clean, functional, minimal. Chat interface only — no system prompt editor, no character cards, no multi-model switching. Suited for focused chat tasks, not power-user configuration.',
          '**Android share sheet:** Not supported as of May 2026. Cannot receive text from other apps via the standard share sheet.',
          '**Offline reliability:** Excellent. Once a model is compiled and cached, MLC Chat runs with zero network calls. Background process is stable compared to some llama.cpp-based apps.',
          '**Storage:** MLC Chat stores compiled model weights in its private app directory (~3 GB for Phi-4 Mini compiled for Snapdragon). These are not portable to other apps — a limitation versus GGUF-based apps.',
          '**Install path:** Google Play Store. Source code at [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'MLC Chat\'s model library is curated and compiled. If you need a model not in the official library (e.g., a fine-tuned Mistral Small or a domain-specific model), MLC Chat cannot help — use PocketPal AI or Maid for arbitrary GGUF support. MLC Chat is a speed tool, not a flexibility tool.',
          },
        ],
      },
      maid: {
        id: 'maid',
        title: 'Maid',
        content:
          '**Maid is the fully open-source, F-Droid-first Android local LLM app — built with Flutter, using llama.cpp as its inference backend, and distributed without Google Play dependency.** It supports direct GGUF import from the file manager, Vulkan GPU acceleration on compatible devices, and runs on de-Googled Android builds (GrapheneOS, CalyxOS).',
        items: [
          '**Model library:** Unrestricted. Any GGUF model file can be imported via Android\'s file manager or downloaded via URL. This includes models not on Hugging Face or not in curated app libraries.',
          '**NPU utilization:** Vulkan GPU path on compatible devices — not dedicated NPU. On Snapdragon 8 Elite, Vulkan delivers ~18 tok/sec for Phi-4 Mini, compared to ~22 tok/sec with MLC Chat\'s NPU path. No Hexagon NPU access.',
          '**UI quality:** Functional but less polished than PocketPal AI or Layla. System prompt editor, temperature controls, and basic chat history management are present. Character-card support is limited.',
          '**Android share sheet:** Not supported as of May 2026.',
          '**Offline reliability:** Excellent — llama.cpp-based inference is stable. Background limits from OEM ROMs (Samsung, OnePlus) still apply.',
          '**Storage:** Models stored in app-private directory or a user-specified path. GGUF files are portable between Maid and PocketPal AI if placed in shared accessible storage.',
          '**Install path:** F-Droid (primary), GitHub releases. Source code at [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid). Not on Google Play.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If you are on GrapheneOS or a de-Googled Android build, Maid is the best available option — it has no Google Play Services dependency. Install via the F-Droid client or download the APK directly from the GitHub releases page and sideload with ADB.',
          },
        ],
      },
      layla: {
        id: 'layla',
        title: 'Layla',
        content:
          '**Layla is the most beginner-accessible Android local LLM app — it abstracts model management behind a curated download flow, requires no terminal, and presents a polished chat interface without exposing inference settings.** The trade-off is a smaller model selection and CPU-only inference.',
        items: [
          '**Model library:** Curated, smaller set. Layla provides a managed download experience — select a model from the in-app library and it downloads and configures automatically. Custom GGUF import is not a primary feature.',
          '**NPU utilization:** CPU path only — no Vulkan GPU or Hexagon NPU. This makes Layla the slowest of the six on Snapdragon 8 Elite (~14 tok/sec for Phi-4 Mini) but consistent across all Android chipsets.',
          '**UI quality:** Highest of the six apps for first-time users. Chat-focused interface with clear conversation management, no settings overload, and smooth model switching.',
          '**Android share sheet:** Supported — Layla can receive text from other apps via the Android share sheet, making it one of two apps in this guide that integrate into the standard Android sharing workflow.',
          '**Offline reliability:** Good. Fully offline once model is downloaded. Less susceptible to background kills because it is not running a local server process (unlike Ollama via Termux).',
          '**Storage:** Layla manages model storage internally. No manual file management required.',
          '**Install path:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Layla\'s share sheet support makes it uniquely useful for Android workflows: highlight text in any app → Share → Layla → ask a question about it. This use case — quick in-context AI assist without switching apps — is where Layla outperforms every other app in this list.',
          },
        ],
      },
      ollamaTermux: {
        id: 'ollama-termux',
        title: 'Ollama via Termux',
        content:
          '**Ollama via Termux is the only Android path to a full local OpenAI-compatible API — including tool use, function calling, and the ability to connect third-party Android apps to a locally running model.** Setup takes 20–30 minutes and requires terminal comfort, but the result is the same Ollama ecosystem that desktop users run on Mac and Linux, now on a phone.',
        numberedItems: [
          'Install Termux from F-Droid (not the Play Store version — the Play Store build is outdated and breaks Ollama installs).',
          'In Termux: `pkg update && pkg install curl`',
          'Install Ollama: `curl -fsSL https://ollama.com/install.sh | sh` — this detects the Android ARM64 environment and installs the correct binary.',
          'Pull a model: `ollama pull qwen3:1.7b` or `ollama pull phi4-mini`.',
          'Start the server: `ollama serve` (keep this running in a Termux session or use a background widget).',
          'Interact via Termux: `ollama run phi4-mini` — or connect any app that supports an OpenAI-compatible endpoint at `http://localhost:11434`.',
        ],
        items: [
          '**Model library:** Unlimited — the full Ollama model library is available via `ollama pull [model-name]`. This is the widest model access of any app in this guide.',
          '**NPU utilization:** CPU-only in the standard Ollama ARM64 build. No Vulkan GPU or Hexagon NPU support in the standard Termux configuration as of May 2026. This makes Ollama the slowest in raw tok/sec (~10 tok/sec for Phi-4 Mini on S25 Ultra).',
          '**Tool use and function calling:** Supported — Ollama on Android handles tool use the same way it does on desktop. Connect any tool-use-capable frontend to localhost:11434.',
          '**Android share sheet:** Not directly supported. Workaround: use Termux:Widget shortcut to pipe clipboard content to `ollama run [model]`.',
          '**Background reliability:** Problematic on Samsung and OnePlus without battery optimization whitelist. Create a Termux:Widget shortcut for `ollama serve` and lock Termux in the recent apps tray. Samsung One UI requires explicitly disabling "Sleeping Apps" for Termux.',
          '**Install path:** Termux from F-Droid, then the Ollama install script via curl.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ollama via Termux on a phone will be noticeably slower than Ollama on a desktop — ~10 tok/sec on Phi-4 Mini on the S25 Ultra vs 60+ tok/sec on an RTX 4090. Use it for convenience (offline pocket API, quick queries away from the desk) not for performance. For large-model quality on mobile, remote connection to a home machine running Ollama via Open WebUI in Chrome remains the better option.',
          },
          {
            type: 'tip',
            text: 'Install the Termux:Widget addon and create a one-tap shortcut that runs `ollama serve`. This lets you start the Ollama server from your Android home screen widget without opening Termux. Once serving, any app configured to use `localhost:11434` connects automatically.',
          },
        ],
      },
      privateAI: {
        id: 'private-ai',
        title: 'Private AI',
        content:
          '**Private AI is the privacy-first Android local LLM app — designed for users who want all inference to stay on-device with minimal permissions, no network telemetry, and a simple non-technical setup.** It requests fewer permissions than any other app in this guide and does not ping external servers after initial model download.',
        items: [
          '**Model library:** Curated, privacy-screened set of models. Downloads are from verifiable sources. No access to arbitrary Hugging Face repos — trades flexibility for a controlled, auditable model supply.',
          '**NPU utilization:** CPU path only. Consistent across all chipsets at ~13 tok/sec on Phi-4 Mini (S25 Ultra).',
          '**UI quality:** Clean, minimal. Chat-focused with conversation export and no usage telemetry. Lacks advanced configuration options (temperature, top-p, system prompts) — intentionally simplified.',
          '**Android share sheet:** Not supported as of May 2026.',
          '**Offline reliability:** Best-in-class. Designed to run fully offline. No background network calls, no sync, no analytics.',
          '**Permissions:** Minimal — requests storage access and microphone (for voice input, optional). Does not request contacts, location, or advertising ID.',
          '**Install path:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If your use case involves sensitive professional text — legal drafts, medical notes, confidential business content — Private AI\'s minimal permissions and auditable no-telemetry architecture are meaningful. For general productivity use, PocketPal AI is a better overall choice, but Private AI\'s trust model is stronger.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI',
        content:
          '**PocketPal AI is the best all-around Android local LLM app for most users in 2026.** It combines the full GGUF model ecosystem (any model from Hugging Face), Vulkan GPU acceleration, the most polished native mobile UI of the six apps, direct Android share sheet support, and correct handling of Android storage — a combination no other single app in this guide matches.',
        items: [
          '**Model library:** Full GGUF ecosystem — browse and download directly from Hugging Face inside the app, or import local GGUF files. This covers the same breadth as Maid while adding a curated discovery interface.',
          '**NPU utilization:** Vulkan GPU path on compatible devices. On Snapdragon 8 Elite, delivers ~16 tok/sec on Phi-4 Mini — behind MLC Chat\'s NPU path (~22 tok/sec) but ahead of all CPU-only apps on the same device.',
          '**UI quality:** Best native mobile UI of the six apps. Gesture navigation, conversation management, system prompt editor, model benchmarking, and a per-model settings panel. Built with React Native + llama.rn.',
          '**Android share sheet:** Supported — PocketPal AI and Layla are the only two apps in this guide that integrate into Android\'s share sheet. Select text in any app → Share → PocketPal AI.',
          '**Offline reliability:** Excellent. No background server process (unlike Ollama via Termux) — inference runs in-process, avoiding Android background-kill issues that affect server-based approaches.',
          '**Storage:** Stores GGUF files in app-private storage by default, with an option to point to external storage. Model files are portable to Maid if moved to shared Android storage.',
          '**Install path:** Google Play Store. Source code at [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'PocketPal AI\'s in-app model benchmarking tool (runs a short prompt and measures tok/sec) is useful for comparing model sizes on your specific phone. Run it on Phi-4 Mini, Qwen3 1.7B, and Qwen3 4B to find your device\'s practical speed ceiling before committing to a model for daily use.',
          },
        ],
      },
      androidFragmentation: {
        id: 'android-fragmentation',
        title: 'Android Fragmentation: Storage, RAM, and Background Limits',
        content:
          '**Android fragmentation creates three practical problems for local LLM apps: storage partition conflicts, inconsistent RAM allocation, and aggressive OEM background-kill policies.** All three affect model reliability across Samsung, OnePlus, Pixel, and other Android OEM devices in ways that do not occur on iOS.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Android fragmentation means a local LLM app that works perfectly on a Pixel 9 Pro may crash mid-inference on a Galaxy S25 Ultra, not because of the app or model, but because Samsung\'s background-kill policy terminates the process to save battery. Each Android OEM customizes these policies differently — Pixel follows AOSP standards most closely; Samsung, OnePlus, and Xiaomi all have more aggressive background kill by default.',
          },
        ],
        items: [
          '**Storage partitions:** Android\'s `/data/user/0/` (private app storage) and `/sdcard/` (shared storage) are separate partitions. Most local LLM apps store models in private app storage, which is not browsable in the file manager without root. If you want to share a GGUF file between Maid and PocketPal AI, it must be copied to a shared location first.',
          '**RAM allocation:** Android does not give third-party apps a guaranteed memory allocation. If the system needs RAM, it kills background processes — including inference processes. On 12 GB RAM devices (S25 Ultra default), this is rarely an issue during active use. On 8 GB RAM phones, launching any other app during inference can interrupt it.',
          '**Samsung One UI background kill:** The most aggressive of the major Android OEMs. Navigate to Settings → Device Care → Battery → Background Usage Limits → Sleeping Apps, and manually remove any LLM app from this list. Also lock the app in the recent apps tray by tapping its icon.',
          '**OnePlus OxygenOS background kill:** Similar to Samsung. Go to Settings → Battery → Battery Optimization, find the LLM app, and set it to "Don\'t optimize". Additionally, lock the app in the recent apps overview.',
          '**Pixel (AOSP-nearest):** Background behavior is the most predictable. Apps requesting `FOREGROUND_SERVICE` permission (PocketPal AI and Maid do this) run reliably during active inference on Pixel. Battery optimizer exclusion is still recommended for very long sessions.',
          '**Xiaomi MIUI/HyperOS:** Most aggressive background kill after Samsung. The "Battery Saver" feature can terminate inference mid-generation. Go to Settings → Apps → Manage Apps → [app] → Battery Saver → No Restrictions.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not rely on Android\'s default background behavior for any local LLM app. On Samsung and OnePlus devices, the default policy will interrupt long inference sessions (>2 minutes) unless you explicitly whitelist the app in battery optimization settings. This is the number one cause of "the app stopped mid-response" reports for every app in this guide.',
          },
        ],
      },
      shareSheet: {
        id: 'share-sheet',
        title: 'Android Share Sheet Integration',
        content:
          '**Android share sheet integration — the ability to select text in any app and send it to a local AI — is supported by only two of the six apps: PocketPal AI and Layla.** This single feature makes local AI genuinely useful as a system-level tool rather than a standalone app.',
        items: [
          '**How it works:** Select any text in any Android app (web browser, email, PDF reader, messaging app) → tap Share → choose PocketPal AI or Layla → the selected text appears in the chat input field.',
          '**PocketPal AI share sheet:** Receives plain text. Opens a new conversation with the selected text pre-filled. You can then add a prompt (e.g., "Summarize this", "Translate to German", "Fact-check this") and send it to the local model.',
          '**Layla share sheet:** Same basic functionality. Slightly smoother UI transition from the share sheet into the chat interface.',
          '**MLC Chat, Maid, Ollama via Termux, Private AI:** Do not appear in the Android share sheet as of May 2026. Text must be manually copied and pasted into these apps.',
          '**Practical use cases:** Summarizing web articles while browsing, translating emails, drafting replies to messages, fact-checking paragraphs — all without the text leaving your device or touching a cloud API.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For power users who want share sheet integration with the full model library (including models not in Layla or PocketPal AI\'s curated sets), the workaround is: copy text → open PocketPal AI → load any GGUF model → paste. PocketPal AI\'s Hugging Face integration means you can load a custom model and still use it as a share-target app.',
          },
        ],
      },
      sideloadPaths: {
        id: 'sideload-paths',
        title: 'Sideload and Termux Paths: The Android Advantage',
        content:
          '**Android\'s sideloading and Termux ecosystem give Android users access to local AI tools that do not exist on iOS.** This is the sharpest practical difference between Android and iPhone for local AI use in 2026.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama via Termux — a full local LLM API server on a phone — is an Android-exclusive capability in 2026: Apple\'s iOS sandboxing prevents the equivalent setup on iPhone, making Android the only mobile platform for users who need a local OpenAI-compatible API on device.',
          },
        ],
        items: [
          '**Termux:** A Linux environment in an Android app. Install via F-Droid (not Play Store). Runs bash, Python, curl, and virtually any Linux ARM64 binary — including Ollama. Termux is not available on iOS; its equivalent (iSH) lacks network capabilities for serving local APIs.',
          '**F-Droid sideloading:** Install apps without Google Play — useful for Maid, Termux, and other open-source local AI tools. Download the F-Droid client APK, enable "Install from unknown sources" in Android security settings, install F-Droid, then install any F-Droid-listed app without a Google account.',
          '**ADB sideloading:** Advanced users can sideload APKs directly via Android Debug Bridge (`adb install [app.apk]`). This allows installing apps whose Play Store listing is region-restricted or has been removed.',
          '**Custom ROM advantage:** LineageOS, GrapheneOS, and CalyxOS users can disable Google Play entirely and use F-Droid + ADB as their sole app install paths. Maid and Termux work fully on these platforms. No iOS equivalent exists.',
          '**Llama.cpp server mode via Termux:** Beyond Ollama, llama.cpp itself can be compiled via Termux and run in server mode — giving an alternative local API that some users prefer for its lower memory overhead compared to Ollama.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The Termux + Ollama setup also works as a local API server for other apps on the same phone. For example, apps like Obsidian (with the Local REST API plugin) or custom Shortcuts-style automation can query `localhost:11434/api/generate` to run AI tasks without internet — a genuinely useful home-screen automation pattern.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        content: '**Most failures with Android local LLM apps come from four avoidable mistakes.**',
        items: [
          '**Installing Termux from the Play Store.** The Play Store version of Termux is outdated (Termux stopped updating it in 2020). The current maintained build is on F-Droid. `pkg install curl` and the Ollama install script both fail on the Play Store Termux version.',
          '**Expecting NPU speed on a Pixel phone.** Google\'s Tensor G5 NPU is not accessible to third-party apps. All six apps run CPU-only on every Pixel model. MLC Chat\'s NPU advantage applies only to Snapdragon 8 Elite and does not transfer to Pixel.',
          '**Skipping battery optimization whitelist on Samsung.** Galaxy phones kill background processes aggressively. A generation that takes more than 90 seconds will likely be interrupted by the background-kill policy unless Termux or the LLM app is explicitly whitelisted.',
          '**Downloading models too large for the device.** A 7B Q4_K_M model (~4.7 GB) requires ~6 GB of available RAM. On a 12 GB phone with system overhead, this is tight. On an 8 GB phone, it will OOM-kill the app mid-generation. Use Phi-4 Mini (3.8B, ~2.7 GB) for 8–10 GB devices and Qwen3 1.7B (~1.1 GB) for anything below.',
          '**Assuming storage in Downloads is accessible.** Most local LLM apps store model files in private app storage (`/data/user/0/[app-package]/`), which is not browsable from the file manager without root. If you download a GGUF to the Downloads folder expecting the app to find it, it will not — use the app\'s built-in import function or point to the correct path in settings.',
          '**Running two inference apps simultaneously.** Each app loads the model into RAM. Two 3B models on a 12 GB phone leaves ~5 GB for the OS, which triggers kills. If you use both MLC Chat and PocketPal AI, close one before opening the other.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'MLC Chat GitHub and documentation — [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)',
          'Maid GitHub (Mobile Artificial Intelligence) — [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
          'PocketPal AI GitHub — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Ollama official documentation — [ollama.com](https://ollama.com)',
          'Termux official documentation — [wiki.termux.com](https://wiki.termux.com)',
          'Snapdragon 8 Elite Hexagon NPU technical documentation — Qualcomm Developer Network',
          'MediaTek Dimensity 9400 APU specifications — MediaTek product page',
          'Google Tensor G5 chip overview — Google hardware documentation',
          'Android battery optimization and background process limits — Android developer documentation',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can a Pixel 9 Pro run a 7B model?',
            a: 'Yes, the Pixel 9 Pro has 16 GB RAM — enough headroom to run a 7B Q4_K_M model (~4.7 GB model weight) with system RAM still available. Speed is ~8–10 tok/sec at that size (CPU-only on Tensor G5). Use PocketPal AI or Maid with a 7B GGUF for this use case. For real-time conversation speed, stick to Phi-4 Mini (3.8B, ~14 tok/sec) on the Pixel 9 Pro.',
          },
          {
            q: 'Do these apps use the Snapdragon NPU?',
            a: 'Only MLC Chat uses the Snapdragon Hexagon NPU, and only on Snapdragon 8 Elite devices (Galaxy S25 series, OnePlus 13). The other five apps use CPU or Vulkan GPU. The Hexagon NPU delivers 2–3× faster inference in MLC Chat compared to the CPU path on the same device.',
          },
          {
            q: 'Can I run local AI on a Samsung Galaxy S22?',
            a: 'Yes, on 8 GB RAM variants. The Galaxy S22 runs Snapdragon 8 Gen 1 (or Exynos 2200 in some regions). PocketPal AI and Maid with Qwen3 1.7B or SmolLM2 1.7B work at ~8–12 tok/sec. Phi-4 Mini (3.8B) is feasible but tight on 8 GB RAM — close all other apps first. MLC Chat\'s NPU path is not verified on Snapdragon 8 Gen 1.',
          },
          {
            q: 'Do I need to root my phone for local AI?',
            a: 'No. All six apps in this guide work on unrooted Android phones. Termux requires enabling "Install from unknown sources" for the F-Droid APK, but this is not rooting. Root is only relevant for accessing app-private storage directories from a file manager — not required for inference.',
          },
          {
            q: 'Can I use these apps with Termux?',
            a: 'Ollama via Termux is its own complete setup — you install Ollama inside Termux and interact via the Termux terminal. The other five apps (MLC Chat, Maid, Layla, Private AI, PocketPal AI) are standalone Android apps that do not interact with Termux. Power users run both: Ollama in Termux for API access and PocketPal AI for a polished chat UI.',
          },
          {
            q: 'How do they handle Android background limits?',
            a: 'Background limits are the biggest reliability issue for Android local LLM apps. PocketPal AI and Maid request FOREGROUND_SERVICE permission, which makes them more resistant to background kill. Ollama via Termux is vulnerable to Samsung and OnePlus background-kill policies unless Termux is explicitly whitelisted in battery optimization settings. On Pixel, background behavior is most predictable. On Samsung One UI, manually whitelist any LLM app in Device Care → Battery → Sleeping Apps.',
          },
          {
            q: 'Can I share local AI output to other apps?',
            a: 'Yes, from any app — copy the AI response and paste it anywhere. For the reverse direction (sending text from another app to the AI), only PocketPal AI and Layla appear in the Android share sheet as of May 2026.',
          },
          {
            q: 'Do these support Android Auto?',
            a: 'No. None of the six apps support Android Auto as of May 2026. Android Auto restricts which apps can run while driving, and none of the local LLM apps have built the Auto-compatible interface required for certification.',
          },
          {
            q: 'Which app handles model storage best?',
            a: 'PocketPal AI handles model storage most gracefully — it integrates directly with Hugging Face for in-app downloads, correctly manages the Android storage partition split, and provides a model management UI. Maid is the best for users who want to manage GGUF files manually via the file system. MLC Chat uses proprietary compiled model format that is not portable to other apps.',
          },
          {
            q: 'Can I run multiple models simultaneously?',
            a: 'Only if your device has enough RAM for both models plus the Android OS overhead. On a 16 GB Pixel 9 Pro: two Phi-4 Mini models (2.7 GB each) leave ~10 GB for the OS — technically feasible but very tight. In practice, close one app before launching the other. Ollama via Termux supports model switching with a single `ollama serve` process, loading one model at a time.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Apps for iPhone 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the iOS equivalent: LLM Farm, Pocket Paladin, and the iPhone inference landscape.',
          '[How to Run AI on a Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — on-device vs remote connection for the larger screen, with tablet-specific recommendations.',
          '[Mobile LLM Models: Phi-4 Mini, Gemma, SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model selection guide for mobile inference: which models fit on 4–16 GB phones.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — the full app directory including desktop apps, server backends, and frontends for all platforms.',
          '[Easiest Local AI App for Windows, Mac, and Linux](/power-local-llm/easiest-local-ai-app-windows-mac-linux) — the desktop counterpart: same philosophy of comparing apps by ease-of-use.',
          '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — model authority article: which open-weight models to use across all hardware configurations.',
          '[Best Open-Source Alternatives to ChatGPT Plus](/prompt-bites/best-open-source-alternatives-to-chatgpt-plus) — Open WebUI, LibreChat, and Jan: feature comparison with ChatGPT Plus.',
          '[Best Qwen Model for Coding](/prompt-bites/best-qwen-model-for-coding) — Qwen3-Coder on Android via Termux + Ollama: feasibility and setup.',
          '[Best Local LLM Apps for Android: Quick Picks](/prompt-bites/best-local-llm-apps-android) — just want to know which app to install? Quick comparison of MLC Chat, Pocketpal, and Termux + Ollama without the benchmarks.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Local LLM Apps for Android 2026: 6 Apps Tested on Real Phones',
      datePublished: '2026-05-08',
      dateModified: '2026-06-14',
      url: 'https://www.promptquorum.com/power-local-llm/best-local-llm-apps-android-2026',
      inLanguage: 'en',
      image: 'https://www.promptquorum.com/api/og/best-local-llm-apps-android-2026',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        url: 'https://www.promptquorum.com/about',
        sameAs: [
          'https://www.linkedin.com/in/hanskuepper/',
          'https://x.com/HansKuepperAPPs',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Intermediate',
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-06-14',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Beste lokale LLM-Apps für Android 2026: 6 Apps im Vergleich auf echten Telefonen',
    seoTitle: 'Lokale LLMs auf Android 2026: NPU-Speed, GGUF & Setup-Leitfaden',
    intro:
      'Sechs Android-Apps führen große Sprachmodelle 2026 vollständig offline aus: MLC Chat, Maid, Layla, Ollama via Termux, Private AI und PocketPal AI. Sie unterscheiden sich in NPU-Nutzung, Modellbibliotheksbreite und Android-Integration — und die beste Wahl hängt davon ab, ob Sie Geschwindigkeit wünschen (MLC Chat mit Hexagon NPU), maximale Modellflexibilität (Ollama via Termux) oder ein poliertes natives UI (Layla oder PocketPal AI). Dieser Leitfaden vergleicht alle sechs auf dem Samsung Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5) und OnePlus 13 (Snapdragon 8 Elite) und behandelt Snapdragon Hexagon NPU vs. MediaTek APU vs. Tensor G5 Inferenz, Android-Fragmentierungsrealitäten und wie jede App Speicher, Hintergrundlimits und das Android Share Sheet handhabt.',
    metaDescription:
      'Wie lokale LLMs wirklich auf Android laufen — Benchmarks auf S25 Ultra, Pixel 9 Pro, OnePlus 13. NPU-Geschwindigkeit, GGUF-Support, RAM-Limits. 6 Apps verglichen.',
    twitterDescription:
      'Android lokale KI 2026: MLC Chat erreicht ~40 Token/Sek. mit Snapdragon Hexagon NPU. Maid bietet vollständigen GGUF-Zugriff. Ollama via Termux ist der Power-User-Weg. Vollständiger 6-App-Vergleich auf S25 Ultra, Pixel 9 Pro, OnePlus 13.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Qwen3 1.7B',
      'Qwen3 4B',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM2 1.7B',
    ],
    current_hardware_mentioned: [
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
      'Snapdragon 8 Elite Hexagon NPU',
      'Google Tensor G5',
      'MediaTek Dimensity 9400 APU',
    ],
    audience:
      'Android-Anwender, die KI-Modelle lokal auf ihrem Telefon ausführen möchten — ohne Cloud-APIs, ohne Abonnements, ohne Daten außerhalb des Geräts zu senden. Reicht von Anfängern, die ihre erste App installieren, bis zu Power-Usern, die Termux + Ollama-Pipelines aufbauen.',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale LLM-Apps für Android',
    targetKeywords: [
      'best local llm apps android 2026',
      'run local ai android phone',
      'mlc chat android review',
      'ollama android termux',
      'pocketpal ai android',
      'offline ai android no internet',
    ],
    leadAnswerBlock:
      '**MLC Chat ist die schnellste Android-App für lokale LLMs 2026 — sie nutzt die Snapdragon Hexagon NPU auf dem Galaxy S25 Ultra und OnePlus 13, um ~40 Token/Sek. auf Qwen3 1,7B zu erreichen, im Vergleich zu 8–12 Token/Sek. für reine CPU-Apps auf derselben Hardware. PocketPal AI ist die beste ausgewogene App für die meisten Nutzer: sie unterstützt jedes GGUF-Modell, hat ein poliertes natives UI und handhabt Android-Speicher korrekt. Ollama via Termux ist der Power-User-Weg — das vollständige Ollama-Ökosystem (alle Modelle, OpenAI-kompatibler API, Tool Use) auf Ihrem Telefon, auf Kosten einer Terminal-Einrichtung. Maid ist die puristische Open-Source-Wahl: über F-Droid verteilt, vollständig offline, keine Play Store-Abhängigkeit und direkter GGUF-Import. Layla ist die anfängerfreundliche Option mit kuratierter Modellauswahl. Private AI konzentriert sich auf End-to-End-Datenschutz mit einem einfachen, nicht-technischen Setup. Android-Benutzer haben einen kritischen Vorteil gegenüber dem iPhone: Sideloading, Termux und die Möglichkeit, Apps von F-Droid zu installieren, geben Zugang zu Tools, die auf iOS einfach nicht verfügbar sind.**',
    quickAnswerTop: {
      en: {
        question: 'Welche App ist die beste zum Ausführen lokaler KI auf Android 2026?',
        answer:
          'MLC Chat ist auf Snapdragon 8 Elite-Geräten (S25 Ultra, OnePlus 13) dank Hexagon NPU-Support am schnellsten — es erreicht ~40 Token/Sek. auf Qwen3 1,7B. PocketPal AI ist die beste Gesamtwahl für die meisten Nutzer: breiter GGUF-Support, poliertes UI und korrektes Android-Speicher-Handling. Ollama via Termux bietet das vollständige Ollama-Ökosystem einschließlich Tool Use und einem OpenAI-kompatiblen API. Auf dem Pixel 9 Pro (Tensor G5) ist NPU-Support für Drittanbieter-Apps begrenzt — MLC Chat und PocketPal AI laufen dort beide nur auf der CPU, und liefern ~12–18 Token/Sek. auf Phi-4 Mini.',
        bullets: [
          'MLC Chat — schnellste auf Snapdragon 8 Elite via Hexagon NPU: ~40 Token/Sek. (Qwen3 1,7B) auf Galaxy S25 Ultra.',
          'PocketPal AI — beste insgesamt: GGUF-Support, poliertes UI, korrektes Android-Speicher-Handling, Hugging Face Integration.',
          'Ollama via Termux — beste für Power-User: vollständiges Ollama-Ökosystem, Tool Use, OpenAI-kompatibler API auf dem Gerät.',
          'Maid — beste Open-Source-Wahl: F-Droid-Verbreitung, keine Google Play-Abhängigkeit, direkter GGUF-Import via Dateimanager.',
          'Layla — beste für Anfänger: kuratierte Modelldownloads, einfaches Onboarding, kein Terminal erforderlich.',
          'Private AI — beste für datenschutzorientierte Nutzer: keine Netzwerk-Telemetrie, minimale Berechtigungen, einfaches Setup.',
          'Auf Tensor G5 (Pixel 9): NPU ist nicht für Drittanbieter-Apps verfügbar — alle sechs Apps laufen nur auf CPU, mit 10–18 Token/Sek. auf Phi-4 Mini.',
          'Android-Vorteil: Termux, F-Droid und Sideloading ermöglichen Tools, die auf dem iPhone nicht verfügbar sind — Ollama via Termux hat kein iPhone-Äquivalent.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Schnelle Fakten', anchor: '#quick-facts' },
      { label: 'Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Welche App sollten Sie wählen?', anchor: '#which-app' },
      { label: 'Chipset-Vergleich: Snapdragon vs MediaTek vs Tensor', anchor: '#chipsets' },
      { label: 'MLC Chat', anchor: '#mlc-chat' },
      { label: 'Maid', anchor: '#maid' },
      { label: 'Layla', anchor: '#layla' },
      { label: 'Ollama via Termux', anchor: '#ollama-termux' },
      { label: 'Private AI', anchor: '#private-ai' },
      { label: 'PocketPal AI', anchor: '#pocketpal-ai' },
      { label: 'Android-Fragmentierung: Speicher, RAM und Hintergrundlimits', anchor: '#android-fragmentation' },
      { label: 'Android Share Sheet Integration', anchor: '#share-sheet' },
      { label: 'Sideload- und Termux-Wege', anchor: '#sideload-paths' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-llm-apps-android-2026-static.html',
    gammaDescription: 'Das Folien-Deck behandelt: 6 Android-Apps für lokale LLMs im Vergleich auf 3 echten Geräten (Galaxy S25 Ultra, Pixel 9 Pro, OnePlus 13), Geschwindigkeitsvergleich (MLC Chat ~40 Token/Sek. via Hexagon NPU), Chipset-Vergleich (Snapdragon 8 Elite vs Tensor G5 vs MediaTek Dimensity 9400), App-Auswahlguide, Android-Hintergrundlimits-Lösungen und 6 häufige Fehler. Laden Sie das PDF als Android-KI-Referenzkarte herunter.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MLC Chat ist der Geschwindigkeitsführer auf Snapdragon 8 Elite.** Die Hexagon NPU liefert ~40 Token/Sek. auf Qwen3 1,7B und ~22 Token/Sek. auf Phi-4 Mini auf dem Galaxy S25 Ultra — 3–4× schneller als reine CPU-Apps auf derselben Hardware.',
          '**PocketPal AI ist die beste Gesamtwahl für die meisten Android-Nutzer.** Sie unterstützt das vollständige GGUF-Ökosystem, integriert sich mit Hugging Face für Modelldownloads, handhabt Android-Speicher korrekt und hat das am meisten polierte mobile-native UI unter den sechs Apps.',
          '**Ollama via Termux ist der einzige Weg zu einem vollständigen OpenAI-kompatiblen lokalen API auf Android.** Dies ist wichtig für Power-User, die Tool Use, Function Calling oder die Möglichkeit möchten, lokale Apps mit dem Modell ihres Telefons zu verbinden.',
          '**Tensor G5 (Pixel 9 Pro) macht die NPU nicht für Drittanbieter-Apps verfügbar.** Alle sechs Apps laufen nur auf der CPU auf dem Pixel 9 Pro, mit 10–18 Token/Sek. auf Phi-4 Mini — langsamer als das äquivalente Snapdragon 8 Elite Ergebnis.',
          '**Maid ist die F-Droid / De-Googled-Wahl.** Keine Play Store-Abhängigkeit, kein Google-Konto erforderlich und direkter GGUF-Import aus dem Dateimanager. Die beste Wahl für Android-Nutzer, die Google-Dienste vermeiden.',
          '**Android-Hintergrundlimits sind das größte Usability-Problem.** Android beendet Hintergrundprozesse aggressiv auf den meisten OEM-ROMs (besonders Samsung, OnePlus und Xiaomi). Apps, die aktive Inferenz durchführen, müssen in der Übersicht der aktuellen Apps fixiert oder in den Batterieoptimierungseinstellungen konfiguriert werden, um Unterbrechungen mitten in der Generierung zu vermeiden.',
          '**Modellspeicher ist das zweitgrößte Android-Problem.** Jedes GGUF-Modell ist 1–8 GB groß. Androids Aufteilung zwischen internen Speicherpartitionen bedeutet, dass Modelle im privaten Verzeichnis der App oder an einem speziell konfigurierten Ort gespeichert werden müssen — nicht im "Downloads"-Ordner für die meisten Apps.',
          '**Der Android-Vorteil ist real: Termux und Sideloading ermöglichen Tools ohne iOS-Äquivalent.** Ollama via Termux ist auf dem iPhone nicht möglich. F-Droid-Apps und ADB-Sideloading geben Android-Nutzern Zugang zu Apps, die der Google Play Store möglicherweise nicht anbietet.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnelle Fakten',
        items: [
          '**Testgeräte:** Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM), Google Pixel 9 Pro (Tensor G5, 16 GB RAM), OnePlus 13 (Snapdragon 8 Elite, 16 GB RAM).',
          '**Getestete Chipset-Familien:** Snapdragon 8 Elite (Hexagon NPU), Tensor G5 (NPU nicht für Drittanbieter-Apps verfügbar), MediaTek Dimensity 9400 (APU-Spezifikationen abgedeckt; nicht getestetes Gerät).',
          '**Bestes Modell für 12 GB Android:** Phi-4 Mini (3,8B, ~2,7 GB bei Q4_K_M) — läuft auf allen sechs Apps auf allen drei Testgeräten.',
          '**Bestes Modell für 8 GB Android:** Qwen3 1,7B oder SmolLM2 1,7B — läuft auf allen Apps; Gemma 3 1B für sehr begrenzte Geräte.',
          '**Minimaler RAM für 3B-Modelle:** 6 GB Geräte-RAM. Darunter sollten Sie sich an 1,7B-Modelle halten.',
          '**Token/Sek. auf S25 Ultra (Phi-4 Mini):** MLC Chat ~22 Token/Sek. (NPU), PocketPal AI ~16 Token/Sek. (CPU/Vulkan), Maid ~18 Token/Sek. (Vulkan), Layla ~14 Token/Sek. (CPU), Private AI ~13 Token/Sek. (CPU), Ollama Termux ~10 Token/Sek. (CPU).',
          '**Play Store vs. F-Droid:** MLC Chat, Layla, PocketPal AI und Private AI sind im Google Play Store. Maid ist hauptsächlich auf F-Droid. Ollama via Termux erfordert Termux von F-Droid.',
          '**Share Sheet Integration (Android):** Nur PocketPal AI und Layla handhaben Android Share Sheet Input nativ ab Mai 2026.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Vergleichstabelle',
        content:
          '**Token-Geschwindigkeit gemessen auf Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM) mit Phi-4 Mini in Q4_K_M-Quantisierung.** Die NPU-Nutzung variiert zwischen Apps — MLC Chat ist die einzige App mit verifiziertem Hexagon NPU-Support ab Mai 2026.',
                  image: '/images/best-local-llm-apps-android-2026-speed-comparison-de.svg',
          imageCaption: 'MLC Chat erreicht 22 Tok/Sek. bei Phi-4 Mini via Snapdragon Hexagon NPU — die schnellste von 6 getesteten Android-Apps.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat führt die Android-Geschwindigkeit für lokale LLMs 2026 an, dank Snapdragon Hexagon NPU-Support und erreicht ~22 Token/Sek. auf Phi-4 Mini und ~40 Token/Sek. auf Qwen3 1,7B auf dem Galaxy S25 Ultra — 2–3× schneller als reine CPU-Alternativen auf derselben Hardware.',
          },
        ],
        columns: ['App', 'Token/Sek. (S25 Ultra, Phi-4 Mini)', 'NPU-Support', 'Am besten geeignet für'],
        rows: [
          {
            'App': 'MLC Chat',
            'Token/Sek. (S25 Ultra, Phi-4 Mini)': '~22 Token/Sek. (NPU-Pfad)',
            'NPU-Support': 'Ja — Hexagon NPU auf Snapdragon 8 Elite',
            'Am besten geeignet für': 'Geschwindigkeits-orientierte Nutzer auf Snapdragon-Telefonen',
          },
          {
            'App': 'Maid',
            'Token/Sek. (S25 Ultra, Phi-4 Mini)': '~18 Token/Sek. (Vulkan GPU)',
            'NPU-Support': 'Teilweise — Vulkan GPU, kein dedizierter NPU-Pfad',
            'Am besten geeignet für': 'Open-Source / F-Droid-Nutzer, vollständiger GGUF-Zugriff',
          },
          {
            'App': 'Layla',
            'Token/Sek. (S25 Ultra, Phi-4 Mini)': '~14 Token/Sek. (CPU)',
            'NPU-Support': 'Nein',
            'Am besten geeignet für': 'Anfänger, kuratierte Modelldownloads',
          },
          {
            'App': 'Ollama via Termux',
            'Token/Sek. (S25 Ultra, Phi-4 Mini)': '~10 Token/Sek. (CPU)',
            'NPU-Support': 'Nein (nur CPU im Standard-Termux-Build)',
            'Am besten geeignet für': 'Power-User, API-Zugriff, Tool Use',
          },
          {
            'App': 'Private AI',
            'Token/Sek. (S25 Ultra, Phi-4 Mini)': '~13 Token/Sek. (CPU)',
            'NPU-Support': 'Nein',
            'Am besten geeignet für': 'Datenschutz-orientierte Nutzer, minimale Berechtigungen',
          },
          {
            'App': 'PocketPal AI',
            'Token/Sek. (S25 Ultra, Phi-4 Mini)': '~16 Token/Sek. (CPU/Vulkan)',
            'NPU-Support': 'Teilweise — Vulkan GPU auf kompatiblen Geräten',
            'Am besten geeignet für': 'Die meisten Nutzer — bestes UI + vollständiges GGUF-Ökosystem',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Auf Pixel 9 Pro (Tensor G5) entfernen Sie MLC Chat aus der Top-Position — alle sechs Apps laufen dort nur auf der CPU, und PocketPal AI und Maid überholen bei UI-Qualität. Der NPU-Vorteil verschwindet vollständig auf Tensor G5 für Drittanbieter-Inferenz-Apps.',
          },
          {
            type: 'warning',
            text: 'Layla und Private AI Token/Sek.-Zahlen sind CPU-Pfad-Schätzungen für Phi-4 Mini Q4_K_M. Die tatsächlichen Geschwindigkeiten variieren mit dem thermalen Zustand — anhaltende Inferenz auf einem warmen Telefon kann 20–30% unter der Cold-Start-Zahl fallen.',
          },
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Welche App sollten Sie wählen?',
        content:
          '**Die richtige App hängt von Ihrem Geräte-Chipset und davon ab, wie viel Wert Sie auf Anpassung gegenüber Einfachheit legen.** Android-Nutzer teilen sich scharf zwischen denjenigen, die eine polierte native Erfahrung wünschen (PocketPal AI, Layla) und denjenigen, die maximale Kontrolle wünschen (Ollama via Termux, Maid). Im Gegensatz zum iPhone ermöglicht Android beides.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Wählen Sie MLC Chat, wenn Sie ein Snapdragon 8 Elite-Telefon haben und die schnellste mögliche Inferenz wünschen. Wählen Sie PocketPal AI, wenn Sie die beste Gesamtapp mit der breitesten Modellunterstützung und dem am meisten polierten UI wünschen. Wählen Sie Ollama via Termux, wenn Sie einen vollständigen lokalen KI-API auf Ihrem Telefon wünschen und mit einem Terminal vertraut sind. Wählen Sie Maid, wenn Sie eine vollständig Open-Source, F-Droid-verteilte Option ohne Google-Abhängigkeit wünschen. Wählen Sie Layla, wenn Sie neu bei lokaler KI sind und kuratierte Modelldownloads wünschen. Wählen Sie Private AI, wenn Datenschutz und minimale Berechtigungen Ihre primäre Sorge sind.',
          },
        ],
        items: [
          '**Snapdragon 8 Elite-Telefon (S25 Ultra, OnePlus 13):** Beginnen Sie mit MLC Chat. Wenn Sie Modelle benötigen, die nicht in der MLC Chat-Bibliothek sind, fügen Sie PocketPal AI als Ihre zweite App hinzu — sie deckt das vollständige GGUF-Ökosystem mit Vulkan-beschleunigter Inferenz ab.',
          '**Pixel 9 Pro (Tensor G5):** NPU-Vorteil verschwindet — PocketPal AI ist die Top-Wahl für UI-Qualität und Modellbreite. MLC Chat fällt auf Tensor G5 auf reine CPU zurück, wodurch sein Geschwindigkeitsvorteil verloren geht.',
          '**Jedes Android, Anpassung an erster Stelle:** Ollama via Termux + ein Chat-Frontend (Alpaca, Open WebUI im Chrome) ist das fähigste Setup. Erfordert ~30 Minuten Terminal-Arbeit, bietet aber OpenAI-kompatiblen API, Tool Use und Zugriff auf die vollständige Ollama-Modellbibliothek.',
          '**De-Googled / Privacy-Telefon:** Maid von F-Droid. Funktioniert auf GrapheneOS, CalyxOS und anderen De-Googled-Builds. Keine Play Services-Abhängigkeit.',
          '**8 GB RAM-Telefon:** Jede der sechs Apps mit Qwen3 1,7B oder SmolLM2 1,7B. PocketPal AI handhabt Modellspeicher bei eingeschränkten Geräten am elegantesten.',
          '**Samsung Galaxy (jedes Modell):** Seien Sie sich Samsungs aggressivem Hintergrund-Kill bewusst. Sperren Sie die KI-App in der Übersicht der aktuellen Apps und fügen Sie sie in Gerätewartung → Batterie → Schlafende Apps hinzu, um Unterbrechungen mitten in der Inferenz zu vermeiden.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie ein Snapdragon-Telefon haben und hauptsächlich Offline-Chat wünschen, führen Sie sowohl MLC Chat (für Geschwindigkeit bei kurzen Sessions) als auch PocketPal AI (für längere Arbeiten mit Modellen, die nicht in MLCs Bibliothek verfügbar sind) aus. Sie koexistieren gut und verwenden separaten Modellspeicher.',
          },
        ],
      },
      chipsets: {
        id: 'chipsets',
        title: 'Chipset-Vergleich: Snapdragon vs. MediaTek vs. Tensor',
        content:
          '**Snapdragon 8 Elite ist der fähigste Chipset für lokale LLM-Inferenz auf Android 2026 — seine Hexagon NPU ist die einzige mobile NPU mit verifiziertem Support in MLC Chat.** Tensor G5 und MediaTek Dimensity 9400 führen alle sechs Apps nur im CPU- oder Vulkan-GPU-Modus aus.',
                  image: '/images/best-local-llm-apps-android-2026-chipset-npu-de.svg',
          imageCaption: 'Der offene Hexagon NPU des Snapdragon 8 Elite betreibt Phi-4 Mini mit 22 Tok/Sek.; der reine CPU-Pfad des Tensor G5 schafft 10-18.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die Hexagon NPU des Snapdragon 8 Elite liefert 2–3× schnellere Inferenz als reine CPU-Ausführung auf Android 2026, aber nur MLC Chat offenbart diesen Vorteil — alle anderen Apps fallen auf CPU oder Vulkan GPU auf allen Chipsets zurück.',
          },
        ],
        columns: ['Chipset', 'Zu finden in', 'NPU für Drittanbieter-Apps', 'Bester Inferenzpfad', 'Phi-4 Mini Geschwindigkeit (geschätzt)'],
        rows: [
          {
            'Chipset': 'Snapdragon 8 Elite',
            'Zu finden in': 'Galaxy S25-Serie, OnePlus 13, Xiaomi 15 Pro',
            'NPU für Drittanbieter-Apps': 'Ja — Hexagon NPU via MLCC (nur MLC Chat)',
            'Bester Inferenzpfad': 'Hexagon NPU (MLC Chat) oder Vulkan GPU (Maid, PocketPal)',
            'Phi-4 Mini Geschwindigkeit (geschätzt)': '~22 Token/Sek. (NPU) / ~16–18 Token/Sek. (Vulkan)',
          },
          {
            'Chipset': 'Google Tensor G5',
            'Zu finden in': 'Pixel 9-Serie',
            'NPU für Drittanbieter-Apps': 'Nein — Google behält NPU für Google-Apps vor',
            'Bester Inferenzpfad': 'CPU (alle Apps laufen nur auf CPU)',
            'Phi-4 Mini Geschwindigkeit (geschätzt)': '~12–15 Token/Sek. (CPU)',
          },
          {
            'Chipset': 'MediaTek Dimensity 9400',
            'Zu finden in': 'Xiaomi 15 Ultra, Oppo Find X8 Pro, Vivo X200 Pro',
            'NPU für Drittanbieter-Apps': 'Begrenzt — MediaTek APU-Zugriff via experimenteller NNAPI-Pfad',
            'Bester Inferenzpfad': 'Vulkan GPU (beste Drittanbieter-Option); NNAPI experimentell',
            'Phi-4 Mini Geschwindigkeit (geschätzt)': '~14–18 Token/Sek. (Vulkan) / ~12 Token/Sek. (CPU)',
          },
          {
            'Chipset': 'Snapdragon 8 Gen 3',
            'Zu finden in': 'Galaxy S24-Serie, OnePlus 12',
            'NPU für Drittanbieter-Apps': 'Teilweise — Hexagon ältere Generation, MLC Chat-Support begrenzt',
            'Bester Inferenzpfad': 'Vulkan GPU oder CPU',
            'Phi-4 Mini Geschwindigkeit (geschätzt)': '~12–15 Token/Sek. (Vulkan)',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Gehen Sie nicht davon aus, dass Googles Tensor G5 NPU lokale LLM-Apps zugute kommt. Googles NPU ist für First-Party ML-Dienste (Google Translate, Recorder, Fotoverarbeitung) reserviert. Drittanbieter-Inferenz-Apps einschließlich aller sechs in diesem Leitfaden laufen nur auf CPU auf jedem Pixel-Telefon. Das 16 GB RAM des Pixel 9 Pro ist sein echter Vorteil — mehr Kopfraum für größere Modelle, nicht schnellere Inferenz.',
          },
          {
            type: 'tip',
            text: 'MediaTek Dimensity 9400-Telefone profitieren von Vulkan GPU-Support in Maid und PocketPal AI. Wenn Sie ein Xiaomi 15 Ultra oder Oppo Find X8 Pro haben, aktivieren Sie Vulkan in den App-Einstellungen für eine 30–40% Geschwindigkeitsverbesserung gegenüber dem CPU-Pfad.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat',
        content:
          '**MLC Chat (Machine Learning Compilation Chat) ist die schnellste Android-App für lokale LLMs auf Snapdragon 8 Elite-Geräten 2026.** Entwickelt vom MLC AI-Team, kompiliert es Modelle mit dem MLCC-Framework, das direkt die Snapdragon Hexagon NPU adressiert — ein Optimierungspfad, der Apps mit llama.cpp oder generischen Vulkan-Backends nicht verfügbar ist.',
        items: [
          '**Modellbibliothek:** Kuriert — MLC Chat wird mit einem Satz vorkompilierter Modelle ausgeliefert, optimiert für Mobilgeräte (Qwen3 1,7B, Phi-4 Mini, Gemma 3 1B, Llama 3.2 1B). Der Import von benutzerdefinierten Modellen ist verfügbar, erfordert aber die MLC-Compile-Toolchain — nicht einfach ein Eintipper-Prozess.',
          '**NPU-Nutzung:** Verifizierter Hexagon NPU-Support auf Snapdragon 8 Elite (Galaxy S25 Ultra, OnePlus 13). Gemessen auf ~40 Token/Sek. für Qwen3 1,7B und ~22 Token/Sek. für Phi-4 Mini auf dem S25 Ultra — im Vergleich zu ~12–16 Token/Sek. nur auf CPU auf derselben Hardware.',
          '**UI-Qualität:** Sauber, funktional, minimal. Nur Chat-Interface — kein Systemprompt-Editor, keine Character-Karten, kein Multi-Modell-Switching. Geeignet für fokussierte Chat-Aufgaben, nicht für Power-User-Konfiguration.',
          '**Android Share Sheet:** Nicht unterstützt ab Mai 2026. Kann über das Standard-Share Sheet keinen Text von anderen Apps empfangen.',
          '**Offline-Zuverlässigkeit:** Ausgezeichnet. Sobald ein Modell kompiliert und zwischengespeichert ist, läuft MLC Chat mit Null Netzwerkaufrufen. Der Hintergrundprozess ist stabil im Vergleich zu einigen llama.cpp-basierten Apps.',
          '**Speicher:** MLC Chat speichert kompilierte Modellgewichte in seinem privaten App-Verzeichnis (~3 GB für Phi-4 Mini für Snapdragon kompiliert). Diese sind nicht zu anderen Apps portierbar — eine Einschränkung gegenüber GGUF-basierten Apps.',
          '**Installationspfad:** Google Play Store. Quellcode unter [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Die Modellbibliothek von MLC Chat ist kuriert und kompiliert. Wenn Sie ein Modell benötigen, das nicht in der offiziellen Bibliothek ist (z.B. eine feinabgestimmte Mistral Small oder ein domänenspezifisches Modell), kann MLC Chat nicht helfen — verwenden Sie PocketPal AI oder Maid für beliebigen GGUF-Support. MLC Chat ist ein Geschwindigkeitswerkzeug, kein Flexibilitätswerkzeug.',
          },
        ],
      },
      maid: {
        id: 'maid',
        title: 'Maid',
        content:
          '**Maid ist die vollständig Open-Source, F-Droid-first Android-App für lokale LLMs — gebaut mit Flutter, nutzt llama.cpp als Inferenz-Backend und wird ohne Google Play-Abhängigkeit verteilt.** Sie unterstützt direkten GGUF-Import aus dem Dateimanager, Vulkan GPU-Beschleunigung auf kompatiblen Geräten und läuft auf De-Googled Android-Builds (GrapheneOS, CalyxOS).',
        items: [
          '**Modellbibliothek:** Unbegrenzt. Jede GGUF-Modelldatei kann via Android-Dateimanager oder URL-Download importiert werden. Dies schließt Modelle ein, die nicht auf Hugging Face oder in kuratierten App-Bibliotheken sind.',
          '**NPU-Nutzung:** Vulkan GPU-Pfad auf kompatiblen Geräten — nicht dedizierte NPU. Auf Snapdragon 8 Elite liefert Vulkan ~18 Token/Sek. für Phi-4 Mini, im Vergleich zu ~22 Token/Sek. mit MLCs NPU-Pfad. Kein Hexagon NPU-Zugriff.',
          '**UI-Qualität:** Funktional aber weniger poliert als PocketPal AI oder Layla. Systemprompt-Editor, Temperatur-Steuerelemente und grundlegende Chat-Historien-Verwaltung sind vorhanden. Character-Card-Support ist begrenzt.',
          '**Android Share Sheet:** Nicht unterstützt ab Mai 2026.',
          '**Offline-Zuverlässigkeit:** Ausgezeichnet — llama.cpp-basierte Inferenz ist stabil. Hintergrundlimits von OEM-ROMs (Samsung, OnePlus) gelten immer noch.',
          '**Speicher:** Modelle im App-privaten Verzeichnis oder an einem benutzerdefinierten Pfad gespeichert. GGUF-Dateien sind zwischen Maid und PocketPal AI portierbar, wenn sie in gemeinsam zugänglichem Speicher platziert werden.',
          '**Installationspfad:** F-Droid (primär), GitHub-Releases. Quellcode unter [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid). Nicht im Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie auf GrapheneOS oder einem De-Googled Android-Build sind, ist Maid die beste verfügbare Option — sie hat keine Google Play Services-Abhängigkeit. Installieren Sie via F-Droid-Client oder laden Sie die APK direkt von der GitHub-Release-Seite herunter und installieren Sie mit ADB.',
          },
        ],
      },
      layla: {
        id: 'layla',
        title: 'Layla',
        content:
          '**Layla ist die anfängerfreundlichste Android-App für lokale LLMs — sie abstrahiert die Modellverwaltung hinter einem kuratierten Download-Ablauf, benötigt kein Terminal und präsentiert eine polierte Chat-Oberfläche ohne Inferenz-Einstellungen freizulegen.** Der Kompromiss ist eine kleinere Modellauswahl und reine CPU-Inferenz.',
        items: [
          '**Modellbibliothek:** Kuriert, kleinere Auswahl. Layla bietet ein verwaltetes Download-Erlebnis — wählen Sie ein Modell aus der In-App-Bibliothek und es wird automatisch heruntergeladen und konfiguriert. Der Import von benutzerdefinierten GGUF ist keine primäre Funktion.',
          '**NPU-Nutzung:** Nur CPU-Pfad — kein Vulkan GPU oder Hexagon NPU. Dies macht Layla die langsamste der sechs auf Snapdragon 8 Elite (~14 Token/Sek. für Phi-4 Mini), aber konsistent über alle Android-Chipsets.',
          '**UI-Qualität:** Höchste der sechs Apps für Erstnutzer. Chat-fokussierte Oberfläche mit klarer Gesprächsverwaltung, keine Einstellungen-Überflutung und glattes Modell-Switching.',
          '**Android Share Sheet:** Unterstützt — Layla kann Text von anderen Apps via Android Share Sheet empfangen, was es zu einer von zwei Apps in diesem Leitfaden macht, die sich in den Standard-Android-Sharing-Workflow integrieren.',
          '**Offline-Zuverlässigkeit:** Gut. Vollständig offline nach Modelldownload. Weniger anfällig für Hintergrund-Kills, da es keinen lokalen Server-Prozess läuft (anders als Ollama via Termux).',
          '**Speicher:** Layla verwaltet Modellspeicher intern. Keine manuelle Dateiverwaltung erforderlich.',
          '**Installationspfad:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Layas Share Sheet Support macht es einzigartig nützlich für Android-Workflows: Text in einer beliebigen App hervorheben → Teilen → Layla → eine Frage dazu stellen. Dieser Anwendungsfall — schnelle kontextabhängige KI-Unterstützung ohne App-Wechsel — ist, wo Layla jede andere App in dieser Liste übertrifft.',
          },
        ],
      },
      ollamaTermux: {
        id: 'ollama-termux',
        title: 'Ollama via Termux',
        content:
          '**Ollama via Termux ist der einzige Android-Weg zu einem vollständigen lokalen OpenAI-kompatiblen API — einschließlich Tool Use, Function Calling und der Möglichkeit, Drittanbieter-Android-Apps mit einem lokal laufenden Modell zu verbinden.** Das Setup dauert 20–30 Minuten und erfordert Terminal-Vertrautheit, aber das Ergebnis ist das gleiche Ollama-Ökosystem, das Desktop-Nutzer auf Mac und Linux betreiben, nun auf einem Telefon.',
        numberedItems: [
          'Installieren Sie Termux von F-Droid (nicht die Play Store-Version — der Play Store-Build ist veraltet und bricht Ollama-Installationen).',
          'In Termux: `pkg update && pkg install curl`',
          'Installieren Sie Ollama: `curl -fsSL https://ollama.com/install.sh | sh` — dies erkennt die Android ARM64-Umgebung und installiert das richtige Binary.',
          'Ziehen Sie ein Modell: `ollama pull qwen3:1.7b` oder `ollama pull phi4-mini`.',
          'Starten Sie den Server: `ollama serve` (halten Sie dies in einer Termux-Sitzung laufen oder verwenden Sie ein Hintergrund-Widget).',
          'Interagieren Sie via Termux: `ollama run phi4-mini` — oder verbinden Sie eine beliebige App, die einen OpenAI-kompatiblen Endpoint auf `http://localhost:11434` unterstützt.',
        ],
        items: [
          '**Modellbibliothek:** Unbegrenzt — die vollständige Ollama-Modellbibliothek ist via `ollama pull [modell-name]` verfügbar. Dies ist der breiteste Modellzugriff aller Apps in diesem Leitfaden.',
          '**NPU-Nutzung:** Nur CPU im Standard-Ollama ARM64-Build. Kein Vulkan GPU oder Hexagon NPU-Support in der Standard-Termux-Konfiguration ab Mai 2026. Dies macht Ollama das langsamste in rohen Token/Sek. (~10 Token/Sek. für Phi-4 Mini auf S25 Ultra).',
          '**Tool Use und Function Calling:** Unterstützt — Ollama auf Android handhabt Tool Use gleich wie auf dem Desktop. Verbinden Sie ein Tool-Use-fähiges Frontend mit localhost:11434.',
          '**Android Share Sheet:** Nicht direkt unterstützt. Workaround: Verwenden Sie eine Termux:Widget-Verknüpfung, um Zwischenablage-Inhalt in `ollama run [modell]` zu leiten.',
          '**Hintergrund-Zuverlässigkeit:** Problematisch auf Samsung und OnePlus ohne Batterieoptimierungs-Whitelist. Erstellen Sie eine Termux:Widget-Verknüpfung für `ollama serve` und sperren Sie Termux in der aktuellen Apps-Übersicht. Samsung One UI erfordert explizites Deaktivieren von "Schlafende Apps" für Termux.',
          '**Installationspfad:** Termux von F-Droid, dann das Ollama-Installationsskript via curl.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ollama via Termux auf einem Telefon wird merklich langsamer sein als Ollama auf einem Desktop — ~10 Token/Sek. auf Phi-4 Mini auf dem S25 Ultra vs. 60+ Token/Sek. auf einem RTX 4090. Verwenden Sie es aus Bequemlichkeit (Offline Pocket API, schnelle Anfragen weg vom Schreibtisch), nicht um Leistung. Für große-Modell-Qualität auf Mobilgeräten bleibt die Remote-Verbindung zu einem Home-Machine-Ollama via Open WebUI im Chrome die bessere Option.',
          },
          {
            type: 'tip',
            text: 'Installieren Sie das Termux:Widget Add-on und erstellen Sie eine Ein-Tap-Verknüpfung, die `ollama serve` ausführt. Dies ermöglicht es Ihnen, den Ollama-Server von Ihrem Android Home Screen Widget aus zu starten, ohne Termux zu öffnen. Nach dem Starten verbindet sich eine beliebige App, die zu `localhost:11434` konfiguriert ist, automatisch.',
          },
        ],
      },
      privateAI: {
        id: 'private-ai',
        title: 'Private AI',
        content:
          '**Private AI ist die datenschutzorientierte Android-App für lokale LLMs — entworfen für Nutzer, die alle Inferenzen auf dem Gerät behalten möchten mit minimalen Berechtigungen, keiner Netzwerk-Telemetrie und einfachem nicht-technischem Setup.** Sie fordert weniger Berechtigungen an als jede andere App in diesem Leitfaden und sendet nach dem ersten Modelldownload keine externen Server an.',
        items: [
          '**Modellbibliothek:** Kuriert, datenschutz-überprüft. Downloads stammen von verifizierbaren Quellen. Kein Zugriff auf beliebige Hugging Face-Repos — tauscht Flexibilität gegen eine kontrollierte, überprüfbare Modellversorgung aus.',
          '**NPU-Nutzung:** Nur CPU-Pfad. Konsistent über alle Chipsets auf ~13 Token/Sek. auf Phi-4 Mini (S25 Ultra).',
          '**UI-Qualität:** Sauber, minimal. Chat-fokussiert mit Gesprächsexport und keiner Nutzungs-Telemetrie. Ermangelt erweiterte Konfigurationsoptionen (Temperatur, Top-P, System-Prompts) — absichtlich vereinfacht.',
          '**Android Share Sheet:** Nicht unterstützt ab Mai 2026.',
          '**Offline-Zuverlässigkeit:** Best-in-Class. Entworfen, um vollständig offline zu laufen. Keine Hintergrund-Netzwerk-Aufrufe, keine Synchronisierung, keine Analytik.',
          '**Berechtigungen:** Minimal — fordert Speicherzugriff und Mikrofon (für Spracheingabe, optional) an. Fordert keine Kontakte, Standort oder Werbe-ID an.',
          '**Installationspfad:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Ihr Anwendungsfall sensible professionelle Texte beinhaltet — Rechtsentwürfe, medizinische Notizen, vertrauliche Geschäftsinhalte — sind die minimalen Berechtigungen und die überprüfbare Architektur von Private AI mit keiner Telemetrie sinnvoll. Für allgemeine Produktivitätsnutzung ist PocketPal AI eine bessere Gesamtwahl, aber das Vertrauensmodell von Private AI ist stärker.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI',
        content:
          '**PocketPal AI ist die beste All-in-One Android-App für lokale LLMs für die meisten Nutzer 2026.** Sie kombiniert das vollständige GGUF-Modellökosystem (jedes Modell von Hugging Face), Vulkan GPU-Beschleunigung, das am meisten polierte native Mobile UI der sechs Apps, direkten Android Share Sheet Support und korrektes Handling von Android-Speicher — eine Kombination, die keine andere einzelne App in diesem Leitfaden bietet.',
        items: [
          '**Modellbibliothek:** Vollständiges GGUF-Ökosystem — durchsuchen und laden Sie direkt von Hugging Face in der App herunter, oder importieren Sie lokale GGUF-Dateien. Dies deckt die gleiche Breite wie Maid ab, während eine kuratierte Entdeckungs-Oberfläche hinzugefügt wird.',
          '**NPU-Nutzung:** Vulkan GPU-Pfad auf kompatiblen Geräten. Auf Snapdragon 8 Elite liefert ~16 Token/Sek. auf Phi-4 Mini — hinter MLCs NPU-Pfad (~22 Token/Sek.), aber vor allen reinen CPU-Apps auf derselben Hardware.',
          '**UI-Qualität:** Bestes natives Mobile UI der sechs Apps. Gesten-Navigation, Gesprächsverwaltung, System-Prompt-Editor, Modell-Benchmarking und ein Pro-Modell-Einstellungs-Panel. Gebaut mit React Native + llama.rn.',
          '**Android Share Sheet:** Unterstützt — PocketPal AI und Layla sind die einzigen zwei Apps in diesem Leitfaden, die sich in das Share Sheet von Android integrieren. Text in einer beliebigen App markieren → Teilen → PocketPal AI.',
          '**Offline-Zuverlässigkeit:** Ausgezeichnet. Kein Hintergrund-Server-Prozess (anders als Ollama via Termux) — Inferenz läuft In-Process, wodurch Android Hintergrund-Kill-Probleme vermieden werden, die server-basierte Ansätze betreffen.',
          '**Speicher:** Speichert GGUF-Dateien standardmäßig im privaten App-Speicher, mit einer Option, auf externen Speicher zu zeigen. Modelldateien sind zu Maid portierbar, wenn sie in gemeinsam genutzten Android-Speicher verschoben werden.',
          '**Installationspfad:** Google Play Store. Quellcode unter [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Das In-App-Modell-Benchmarking-Werkzeug von PocketPal AI (führt eine kurze Anfrage aus und misst Token/Sek.) ist nützlich zum Vergleichen von Modellgrößen auf Ihrem spezifischen Telefon. Führen Sie es auf Phi-4 Mini, Qwen3 1,7B und Qwen3 4B aus, um die praktische Geschwindigkeitsgrenze Ihres Geräts zu finden, bevor Sie sich täglich für ein Modell entscheiden.',
          },
        ],
      },
      androidFragmentation: {
        id: 'android-fragmentation',
        title: 'Android-Fragmentierung: Speicher, RAM und Hintergrundlimits',
        content:
          '**Android-Fragmentierung schafft drei praktische Probleme für lokale LLM-Apps: Speicherpartition-Konflikte, inkonsistente RAM-Zuteilung und aggressive OEM-Hintergrund-Kill-Richtlinien.** Alle drei beeinflussen die Modellzuverlässigkeit über Samsung, OnePlus, Pixel und andere Android OEM-Geräte in Wegen, die auf iOS nicht auftreten.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Android-Fragmentierung bedeutet, dass eine lokale LLM-App, die auf einem Pixel 9 Pro perfekt funktioniert, könnte auf einem Galaxy S25 Ultra mitten in der Inferenz abstürzen — nicht wegen der App oder des Modells, sondern weil Samsungs Hintergrund-Kill-Richtlinie den Prozess beendet, um Batterie zu sparen. Jeder Android OEM passt diese Richtlinien unterschiedlich an — Pixel folgt AOSP-Standards am nächsten; Samsung, OnePlus und Xiaomi haben alle aggressivere Hintergrund-Kills standardmäßig.',
          },
        ],
        items: [
          '**Speicherpartitionen:** Androids `/data/user/0/` (privater App-Speicher) und `/sdcard/` (gemeinsamer Speicher) sind separate Partitionen. Die meisten lokalen LLM-Apps speichern Modelle in privatem App-Speicher, das nicht ohne Root im Dateimanager durchsuchbar ist. Wenn Sie eine GGUF-Datei zwischen Maid und PocketPal AI teilen möchten, muss es zunächst an einen gemeinsamen Ort kopiert werden.',
          '**RAM-Zuteilung:** Android gibt Drittanbieter-Apps keine garantierte Speicherzuteilung. Wenn das System RAM benötigt, beendet es Hintergrundprozesse — einschließlich Inferenzprozesse. Auf 12 GB RAM-Geräten (S25 Ultra Standard) ist dies während aktiver Nutzung selten ein Problem. Auf 8 GB RAM-Telefonen kann das Starten einer anderen beliebigen App während der Inferenz es unterbrechen.',
          '**Samsung One UI Hintergrund-Kill:** Das aggressivste der großen Android-OEMs. Navigieren Sie zu Einstellungen → Gerätewartung → Batterie → Hintergrundnutzungs-Limits → Schlafende Apps, und entfernen Sie manuell eine beliebige LLM-App aus dieser Liste. Sperren Sie auch die App in der aktuellen Apps-Übersicht durch Tippen auf sein Symbol.',
          '**OnePlus OxygenOS Hintergrund-Kill:** Ähnlich wie Samsung. Gehen Sie zu Einstellungen → Batterie → Batterieoptimierung, finden Sie die LLM-App und setzen Sie sie auf "Nicht optimieren". Sperren Sie zusätzlich die App in der aktuellen Apps-Übersicht.',
          '**Pixel (AOSP-nächster):** Hintergrundverhalten ist am vorhersagbarsten. Apps, die `FOREGROUND_SERVICE` Berechtigung anfordert (PocketPal AI und Maid tun dies), laufen zuverlässig während aktiver Inferenz auf Pixel. Batterie-Optimierer-Ausschluss wird immer noch für sehr lange Sessions empfohlen.',
          '**Xiaomi MIUI/HyperOS:** Aggressivster Hintergrund-Kill nach Samsung. Die "Batteriespar"-Funktion kann die Inferenz mitten in der Generierung beenden. Gehen Sie zu Einstellungen → Apps → Apps verwalten → [App] → Batteriespar → Keine Einschränkungen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Verlassen Sie sich nicht auf das Standard-Android-Hintergrund-Verhalten für eine beliebige lokale LLM-App. Auf Samsung- und OnePlus-Geräten wird die Standard-Richtlinie lange Inferenz-Sessions (>2 Minuten) unterbrechen, sofern Sie nicht explizit die App in den Batterieoptimierungs-Einstellungen whitelist. Dies ist die Nummer-Eins-Ursache für "die App hat mitten in der Antwort gestoppt"-Berichte für jede App in diesem Leitfaden.',
          },
        ],
      },
      shareSheet: {
        id: 'share-sheet',
        title: 'Android Share Sheet Integration',
        content:
          '**Android Share Sheet Integration — die Möglichkeit, Text in beliebigen Apps auszuwählen und an lokale KI zu senden — wird von nur zwei der sechs Apps unterstützt: PocketPal AI und Layla.** Dieses einzelne Feature macht lokale KI echtsinnig als System-Level-Werkzeug statt als eigenständige App.',
        items: [
          '**Wie es funktioniert:** Markieren Sie beliebigen Text in einer beliebigen Android-App (Web-Browser, E-Mail, PDF-Leser, Messaging-App) → tippen Sie auf Teilen → wählen Sie PocketPal AI oder Layla → der ausgewählte Text erscheint im Chat-Eingabefeld.',
          '**PocketPal AI Share Sheet:** Empfängt einfachen Text. Öffnet ein neues Gespräch mit dem ausgewählten Text vor-ausgefüllt. Sie können dann einen Prompt hinzufügen (z.B. "Fasse das zusammen", "Übersetze ins Deutsche", "Überprüfe das") und sende es an das lokale Modell.',
          '**Layla Share Sheet:** Gleiche grundlegende Funktionalität. Etwas glatterer UI-Übergang vom Share Sheet in die Chat-Oberfläche.',
          '**MLC Chat, Maid, Ollama via Termux, Private AI:** Erscheinen ab Mai 2026 nicht im Android Share Sheet. Text muss manuell in diese Apps kopiert und eingefügt werden.',
          '**Praktische Anwendungsfälle:** Zusammenfassung von Web-Artikeln während des Browsens, Übersetzung von E-Mails, Entwürfe von Antworten auf Nachrichten, Überprüfung von Absätzen — alles ohne dass der Text Ihr Gerät verlässt oder einen Cloud-API berührt.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Power-User, die Share Sheet Integration mit der vollständigen Modellbibliothek wünschen (einschließlich Modellen, die nicht in Laylas oder PocketPal AIs kuratierten Sets sind), ist die Workaround: Text kopieren → PocketPal AI öffnen → beliebiges GGUF-Modell laden → einfügen. Die Hugging Face Integration von PocketPal AI bedeutet, dass Sie ein benutzerdefinierten Modell laden und es trotzdem als Share-Target-App verwenden können.',
          },
        ],
      },
      sideloadPaths: {
        id: 'sideload-paths',
        title: 'Sideload- und Termux-Wege: Der Android-Vorteil',
        content:
          '**Androids Sideloading und Termux-Ökosystem geben Android-Nutzern Zugang zu lokalen KI-Tools, die auf iOS nicht existieren.** Dies ist der schärfste praktische Unterschied zwischen Android und iPhone für lokale KI-Nutzung in 2026.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama via Termux — ein vollständiger lokaler LLM-API-Server auf einem Telefon — ist eine Android-exklusive Fähigkeit 2026: Apples iOS-Sandboxing verhindert das äquivalente Setup auf dem iPhone, was Android zur einzigen mobilen Plattform für Nutzer macht, die einen lokalen OpenAI-kompatiblen API auf dem Gerät benötigen.',
          },
        ],
        items: [
          '**Termux:** Eine Linux-Umgebung in einer Android-App. Installieren Sie via F-Droid (nicht Play Store). Führt bash, Python, curl und praktisch jedes Linux ARM64-Binary aus — einschließlich Ollama. Termux ist auf iOS nicht verfügbar; sein Äquivalent (iSH) ermangelt Netzwerkfähigkeiten zum Bereitstellen lokaler APIs.',
          '**F-Droid Sideloading:** Installieren Sie Apps ohne Google Play — nützlich für Maid, Termux und andere Open-Source lokale KI-Tools. Laden Sie den F-Droid Client APK herunter, aktivieren Sie "Installieren aus unbekannten Quellen" in Android-Sicherheitseinstellungen, installieren Sie F-Droid, dann installieren Sie eine beliebige F-Droid-gelistete App ohne Google-Konto.',
          '**ADB Sideloading:** Fortgeschrittene Nutzer können APKs direkt via Android Debug Bridge sideload (`adb install [app.apk]`). Dies ermöglicht das Installieren von Apps, deren Play Store-Listing regional eingeschränkt ist oder entfernt wurde.',
          '**Custom ROM Vorteil:** LineageOS, GrapheneOS und CalyxOS-Nutzer können Google Play komplett deaktivieren und F-Droid + ADB als ihre einzigen App-Installationspfade verwenden. Maid und Termux funktionieren vollständig auf diesen Plattformen. Kein iOS-Äquivalent existiert.',
          '**Llama.cpp Server Modus via Termux:** Über Ollama hinaus kann llama.cpp selbst via Termux kompiliert und im Server-Modus laufen — was einen alternativen lokalen API bietet, den einige Nutzer für seinen niedrigeren Speicher-Overhead im Vergleich zu Ollama bevorzugen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Das Termux + Ollama Setup funktioniert auch als lokaler API-Server für andere Apps auf demselben Telefon. Zum Beispiel können Apps wie Obsidian (mit dem Local REST API Plugin) oder benutzerdefinierte Shortcuts-artige Automatisierung `localhost:11434/api/generate` abfragen, um KI-Aufgaben ohne Internet auszuführen — ein echtsinnig nützliches Home-Screen-Automatisierungsmuster.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        content: '**Die meisten Fehler mit Android lokalen LLM-Apps kommen von vier vermeidbaren Fehlern.**',
        items: [
          '**Installation von Termux aus dem Play Store.** Die Play Store-Version von Termux ist veraltet (Termux hat 2020 aufgehört, sie zu aktualisieren). Der aktuell verwaltete Build ist auf F-Droid. `pkg install curl` und das Ollama-Installationsskript schlagen beide in der Play Store Termux-Version fehl.',
          '**Erwarten von NPU-Geschwindigkeit auf einem Pixel-Telefon.** Googles Tensor G5 NPU ist nicht für Drittanbieter-Apps zugänglich. Alle sechs Apps laufen nur auf der CPU auf jedem Pixel-Modell. MLCs NPU-Vorteil gilt nur für Snapdragon 8 Elite und übertritt nicht auf Pixel.',
          '**Überspringen der Batterieoptimierungs-Whitelist auf Samsung.** Galaxy-Telefone beenden Hintergrundprozesse aggressiv. Eine Generierung, die länger als 90 Sekunden dauert, wird wahrscheinlich durch die Hintergrund-Kill-Richtlinie unterbrochen, sofern Termux oder die LLM-App nicht explizit whitelist ist.',
          '**Herunterladen von Modellen, die zu groß für das Gerät sind.** Ein 7B Q4_K_M Modell (~4,7 GB) benötigt ~6 GB verfügbaren RAM. Auf einem 12 GB Telefon mit System-Overhead ist dies eng. Auf einem 8 GB Telefon, wird es OOM-kill die App mitten in der Generierung. Verwenden Sie Phi-4 Mini (3,8B, ~2,7 GB) für 8–10 GB-Geräte und Qwen3 1,7B (~1,1 GB) für alles darunter.',
          '**Annahme, dass Speicher in Downloads zugänglich ist.** Die meisten lokalen LLM-Apps speichern Modelldateien in privatem App-Speicher (`/data/user/0/[app-package]/`), das ohne Root nicht vom Dateimanager durchsuchbar ist. Wenn Sie eine GGUF zum Downloads-Ordner herunterladenc und erwartet, dass die App sie findet, wird sie nicht — verwenden Sie die In-App-Import-Funktion oder zeigen Sie auf den korrekten Pfad in den Einstellungen.',
          '**Gleichzeitiges Betreiben von zwei Inferenz-Apps.** Jede App lädt das Modell in RAM. Zwei 3B-Modelle auf einem 12 GB Telefon hinterlassen ~5 GB für das Betriebssystem, das Kills auslöst. Wenn Sie sowohl MLC Chat als auch PocketPal AI verwenden, schließen Sie eine, bevor Sie die andere öffnen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'MLC Chat GitHub und Dokumentation — [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)',
          'Maid GitHub (Mobile Artificial Intelligence) — [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
          'PocketPal AI GitHub — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Ollama offizielle Dokumentation — [ollama.com](https://ollama.com)',
          'Termux offizielle Dokumentation — [wiki.termux.com](https://wiki.termux.com)',
          'Snapdragon 8 Elite Hexagon NPU technische Dokumentation — Qualcomm Developer Network',
          'MediaTek Dimensity 9400 APU Spezifikationen — MediaTek Produkt-Seite',
          'Google Tensor G5 Chip Übersicht — Google Hardware-Dokumentation',
          'Android Batterieoptimierung und Hintergrundprozess-Limits — Android Developer-Dokumentation',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Kann ein Pixel 9 Pro ein 7B-Modell betreiben?',
            a: 'Ja, der Pixel 9 Pro hat 16 GB RAM — genug Kopfraum, um ein 7B Q4_K_M-Modell (~4,7 GB Modellgewicht) mit immer noch verfügbarem System-RAM zu betreiben. Die Geschwindigkeit ist ~8–10 Token/Sek. in dieser Größe (nur CPU auf Tensor G5). Verwenden Sie PocketPal AI oder Maid mit einem 7B GGUF für diesen Anwendungsfall. Für echtzeitliche Gesprächsgeschwindigkeit bleiben Sie bei Phi-4 Mini (3,8B, ~14 Token/Sek.) auf dem Pixel 9 Pro.',
          },
          {
            q: 'Nutzen diese Apps die Snapdragon NPU?',
            a: 'Nur MLC Chat nutzt die Snapdragon Hexagon NPU und nur auf Snapdragon 8 Elite-Geräten (Galaxy S25-Serie, OnePlus 13). Die anderen fünf Apps verwenden CPU oder Vulkan GPU. Die Hexagon NPU liefert 2–3× schnellere Inferenz in MLC Chat im Vergleich zum CPU-Pfad auf demselben Gerät.',
          },
          {
            q: 'Kann ich lokale KI auf einem Samsung Galaxy S22 betreiben?',
            a: 'Ja, auf 8 GB RAM Varianten. Das Galaxy S22 läuft Snapdragon 8 Gen 1 (oder Exynos 2200 in einigen Regionen). PocketPal AI und Maid mit Qwen3 1,7B oder SmolLM2 1,7B arbeiten bei ~8–12 Token/Sek. Phi-4 Mini (3,8B) ist machbar aber eng auf 8 GB RAM — schließen Sie alle anderen Apps zunächst. MLCs NPU-Pfad ist nicht auf Snapdragon 8 Gen 1 verifiziert.',
          },
          {
            q: 'Benötige ich Root mein Telefon für lokale KI?',
            a: 'Nein. Alle sechs Apps in diesem Leitfaden funktionieren auf unverwurzelten Android-Telefonen. Termux erfordert das Aktivieren von "Installieren aus unbekannten Quellen" für die F-Droid APK, aber dies ist kein Rooting. Root ist nur relevant zum Zugriff auf App-private Speicher-Verzeichnisse von einem Dateimanager — nicht erforderlich für Inferenz.',
          },
          {
            q: 'Kann ich diese Apps mit Termux verwenden?',
            a: 'Ollama via Termux ist sein eigenes vollständiges Setup — Sie installieren Ollama inside Termux und interagieren via Termux-Terminal. Die anderen fünf Apps (MLC Chat, Maid, Layla, Private AI, PocketPal AI) sind eigenständige Android-Apps, die nicht mit Termux interagieren. Power-User betreiben beide: Ollama in Termux für API-Zugriff und PocketPal AI für poliertes Chat UI.',
          },
          {
            q: 'Wie handhaben Sie Android-Hintergrundlimits?',
            a: 'Hintergrundlimits sind das größte Zuverlässigkeitsproblem für Android lokale LLM-Apps. PocketPal AI und Maid fordern FOREGROUND_SERVICE Berechtigung an, was sie widerstandsfähiger gegen Hintergrund-Kills macht. Ollama via Termux ist anfällig für Samsung und OnePlus Hintergrund-Kill-Richtlinien, sofern Termux nicht explizit in den Batterieoptimierungs-Einstellungen whitelist ist. Auf Pixel ist Hintergrund-Verhalten am vorhersagbarsten. Auf Samsung One UI whitelist Sie manuell beliebige LLM-Apps in Gerätewartung → Batterie → Schlafende Apps.',
          },
          {
            q: 'Kann ich lokale KI-Ausgabe zu anderen Apps teilen?',
            a: 'Ja, von beliebigen Apps — kopieren Sie die KI-Antwort und fügen Sie sie überall ein. Für die umgekehrte Richtung (Senden von Text von einer anderen App zur KI) erscheinen nur PocketPal AI und Layla ab Mai 2026 im Android Share Sheet.',
          },
          {
            q: 'Unterstützen diese Android Auto?',
            a: 'Nein. Keine der sechs Apps unterstützt Android Auto ab Mai 2026. Android Auto schränkt die Funktionalität Einschränkungen ein, die während des Fahrens ausgeführt werden können, und keine der lokalen LLM-Apps haben die Auto-kompatible Oberfläche gebaut, die für die Zertifizierung erforderlich ist.',
          },
          {
            q: 'Welche App handhabt Modellspeicher am besten?',
            a: 'PocketPal AI handhabt Modellspeicher am elegantesten — sie integriert sich direkt mit Hugging Face für In-App-Downloads, verwaltet die Android-Speicherpartition-Aufteilung korrekt und bietet ein Modellverwaltungs-UI. Maid ist am besten für Nutzer, die GGUF-Dateien manuell via Dateisystem verwalten möchten. MLC Chat verwendet proprietäres kompiliertes Modellformat, das nicht zu anderen Apps portierbar ist.',
          },
          {
            q: 'Kann ich mehrere Modelle gleichzeitig betreiben?',
            a: 'Nur wenn Ihr Gerät genug RAM für beide Modelle plus Android OS Overhead hat. Auf einem 16 GB Pixel 9 Pro: zwei Phi-4 Mini Modelle (2,7 GB jeweils) hinterlassen ~10 GB für das Betriebssystem — technisch machbar aber sehr eng. In der Praxis schließen Sie eine App, bevor Sie die andere öffnen. Ollama via Termux unterstützt Modellwechsel mit einem einzigen `ollama serve` Prozess, lädt jedes Modell auf einmal.',
          },
          {
            q: 'Muss ich DSGVO bei lokalen LLM-Apps auf Android berücksichtigen?',
            a: 'Bei lokaler Inferenz auf Android ist die Frage der DSGVO begrenzt, da Daten das Gerät nicht verlassen. Die Datenschutz-Grundverordnung gilt für Datenverarbeitung — lokale Modelle auf Ihrem Android-Telefon mit nichts außerhalb des Geräts senden erfüllt bereits DSGVO Art. 32 (Integrität und Verfügbarkeit). Es gibt keine Remote-Datenübertragung, keinen Drittanbieter-Zugriff. Beachten Sie: Sie sind immer noch verpflichtet, Berechtigungen zu handhaben (z.B. wenn die App die Kontakte-Liste liest, müssen Sie es dem Benutzer offenbaren). Apps wie Maid und Private AI mit minimalen Berechtigungen reduzieren dieses Risiko.',
          },
          {
            q: 'Sind lokale LLM-Apps für kleine und mittlere Unternehmen (KMU) in Deutschland geeignet?',
            a: 'Ja. Für deutsches KMU mit sensiblen Daten (Kundenlisten, interne Prozesse, Finanzinformationen) sind lokale LLM-Apps auf Android eine sinnvolle Option zum Datenschutz. Sie ermöglichen KI-Nutzung ohne Cloud-Abhängigkeit oder externe Datenverarbeitung. Besonderheiten für Mittelstand: (1) Verwenden Sie Apps mit minimalen Berechtigungen (Maid, Private AI) zum Vermeiden von Datenleaks. (2) Alle Inferenz bleibt auf dem Gerät — DSGVO Compliance ist automatisch. (3) Für Geschäftskritische Anwendungen (Texterkennung, Dokumentenanalyse) testen Sie mit echten Unternehmens-Daten im Piloten, nicht mit Testdaten. (4) Ollama via Termux ermöglicht lokale API-Integrationen mit bestehenden Business-Applikationen. Für größere Mittelständler kann eine lokale Server-Lösung (Ollama auf einem lokalen NAS oder Mini-PC) kostengünstiger als Cloud-APIs sein.',
          },
        ],
      },
      countrySpecific: {
        id: 'country-specific-de',
        title: 'Android-KI in Deutschland: DSGVO, Datensouveränität und Mittelstand',
        content: [
          'Das GSC-Signal ist eindeutig: der DE-Pfad für diese Seite erreicht 2,64% CTR mit 7 Klicks auf 265 Impressionen — ein klares Zeichen, dass deutsche Android-Nutzer aktiv nach offline-KI-Lösungen suchen. Der Hauptgrund: DSGVO-Compliance. Lokale LLM-Apps auf Android verarbeiten alle Daten auf dem Gerät — kein Cloud-Transfer, keine Datenschutzerklärung mit US-Anbietern notwendig.',
          'Für den deutschen Mittelstand (KMU, Kanzleien, Gesundheitsdienstleister) bietet Android + lokales LLM einen besonderen Vorteil: KI-Unterstützung auf Firmenhandys ohne IT-Infrastruktur-Kosten und ohne DSGVO-Risiko durch externe KI-APIs.',
        ],
        items: [
          '**DSGVO-Compliance auf Android:** Lokale Inferenz auf Android sendet keine Daten an externe Server. Nach DSGVO Art. 32 (Integrität und Vertraulichkeit) ist die lokale Verarbeitung die sicherste Option. Kein DPA (Auftragsverarbeitungsvertrag) mit dem App-Anbieter nötig, solange das Modell lokal läuft. Private AI und Maid sind hierfür am besten geeignet (minimale Berechtigungen, kein Google Play Services zwingend).',
          '**Empfohlene Apps für DACH-Unternehmenseinsatz:** Maid (F-Droid, kein Google-Konto nötig, GGUF-Import) für Datenschutz-Puristen. PocketPal AI (Play Store, Hugging Face-Integration) für komfortabelste GGUF-Auswahl. Ollama via Termux für IT-Teams, die lokale API-Integration in bestehende Prozesse benötigen.',
          '**Geeignete Modelle für deutsche Texte:** Qwen3 1.7B und Phi-4 Mini bieten gute Deutschkenntnisse auf Mobilgeräten. Für qualitativ hochwertige deutsche Ausgabe auf 12GB+ Geräten: Qwen3 4B. Deutsche Eingabe (Umlaute, ß) wird von allen genannten Modellen korrekt verarbeitet.',
          '**Samsung-Geräte in Deutschland:** Samsung Galaxy S25 Ultra und S24 Ultra sind in Deutschland sehr verbreitet. Wichtig: Samsung DeX-Modus (USB-C-Display) ermöglicht produktivere Nutzung von Ollama via Termux. Samsung Device Care muss für lokale KI-Apps konfiguriert werden (Batterieoptimierung deaktivieren für die App).',
          '**Play Store vs. F-Droid in Deutschland:** Beide Plattformen sind uneingeschränkt verfügbar. Datenschutzbewusste Nutzer bevorzugen F-Droid (Maid, Termux ohne Google-Konto). Deutsche Anleitungen zu Termux-Installation finden sich auf Heise Developer, c\'t und in der deutschen Ollama-Community auf GitHub.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Beste lokale LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — das iOS-Äquivalent: LLM Farm, Pocket Paladin und die iPhone Inferenz-Landschaft.',
          '[Wie man KI auf einem Tablet betreibt: iPad und Android (2026)](/de/power-local-llm/run-ai-on-tablet-ipad-android) — On-Device vs. Remote-Verbindung für den größeren Bildschirm mit Tablet-spezifischen Empfehlungen.',
          '[Mobile LLM-Modelle: Phi-4 Mini, Gemma, SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Modellauswahl-Leitfaden für Mobile Inferenz: welche Modelle auf 4–16 GB Telefone passen.',
          '[Lokales LLM Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — das vollständige App-Verzeichnis einschließlich Desktop-Apps, Server-Backends und Frontends für alle Plattformen.',
          '[Einfachste lokale KI-App für Windows, Mac und Linux](/de/power-local-llm/easiest-local-ai-app-windows-mac-linux) — das Desktop-Äquivalent: gleiche Philosophie zum Vergleichen von Apps nach Benutzerfreundlichkeit.',
          '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) — Modell-Autorität-Artikel: welche Open-Weight-Modelle überall Hardware-Konfigurationen hinweg zu verwenden sind.',
          '[Open-Source-Alternativen zu ChatGPT Plus](/de/prompt-bites/best-open-source-alternatives-to-chatgpt-plus) — Open WebUI, LibreChat und Jan: Funktionsvergleich mit ChatGPT Plus.',
          '[Bestes Qwen-Modell für das Coding](/de/prompt-bites/best-qwen-model-for-coding) — Qwen3-Coder auf Android via Termux + Ollama: Machbarkeit und Einrichtung.',
          '[Android LLM-Apps: Schnelle Empfehlungen](/de/prompt-bites/best-local-llm-apps-android) — nur wissen, welche App installieren? Schneller Vergleich ohne Benchmarks: MLC Chat, Pocketpal, Termux + Ollama.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste lokale LLM-Apps für Android 2026: 6 Apps im Vergleich auf echten Telefonen',
      datePublished: '2026-05-08',
      dateModified: '2026-06-14',
      url: 'https://www.promptquorum.com/de/power-local-llm/best-local-llm-apps-android-2026',
      inLanguage: 'de',
      image: 'https://www.promptquorum.com/api/og/best-local-llm-apps-android-2026?lang=de',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        url: 'https://www.promptquorum.com/about',
        sameAs: [
          'https://www.linkedin.com/in/hanskuepper/',
          'https://x.com/HansKuepperAPPs',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Intermediate',
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-06-14',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Meilleures applications LLM locales pour Android en 2026 : 6 applications testées sur de vrais téléphones',
    seoTitle: 'LLMs Locaux sur Android 2026 : Performance NPU & Configuration',
    intro:
      'Six applications Android exécutent des modèles de langage volumineux entièrement hors ligne en 2026 : MLC Chat, Maid, Layla, Ollama via Termux, Private AI et PocketPal AI. Elles diffèrent par l\'utilisation du NPU, la portée de la bibliothèque de modèles et l\'intégration Android — et le meilleur choix dépend de votre priorité : la vitesse (MLC Chat avec NPU Hexagon), la flexibilité maximale (Ollama via Termux) ou une interface utilisateur native soignée (Layla ou PocketPal AI). Ce guide compare les six applications sur le Samsung Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5) et OnePlus 13 (Snapdragon 8 Elite), couvrant l\'inférence Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5, les réalités de la fragmentation Android et la façon dont chaque application gère le stockage, les limites d\'arrière-plan et la feuille de partage Android.',
    metaDescription:
      'Comment les LLMs locaux fonctionnent sur Android 2026 — benchmarks sur S25 Ultra, Pixel 9 Pro, OnePlus 13. Vitesses NPU, support GGUF, limites RAM. 6 apps comparées.',
    twitterDescription:
      'IA locale sur Android en 2026 : MLC Chat atteint ~40 tok/sec avec NPU Hexagon Snapdragon. Maid offre un accès complet à GGUF. Ollama via Termux est la solution pour les utilisateurs avancés. Comparaison complète de 6 applications sur S25 Ultra, Pixel 9 Pro, OnePlus 13.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Qwen3 1.7B',
      'Qwen3 4B',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM2 1.7B',
    ],
    current_hardware_mentioned: [
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
      'Snapdragon 8 Elite Hexagon NPU',
      'Google Tensor G5',
      'MediaTek Dimensity 9400 APU',
    ],
    audience:
      'Utilisateurs Android qui souhaitent exécuter des modèles IA localement sur leur téléphone — sans API cloud, sans abonnements, sans envoi de données en dehors de l\'appareil. Couvre les débutants installant leur première application aux utilisateurs avancés construisant des pipelines Termux + Ollama.',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'meilleures applications LLM locales pour Android',
    targetKeywords: [
      'best local llm apps android 2026',
      'run local ai android phone',
      'mlc chat android review',
      'ollama android termux',
      'pocketpal ai android',
      'offline ai android no internet',
    ],
    leadAnswerBlock:
      '**MLC Chat est l\'application IA locale la plus rapide d\'Android en 2026 — elle utilise le NPU Hexagon Snapdragon sur le Galaxy S25 Ultra et OnePlus 13 pour atteindre ~40 tokens/sec sur Qwen3 1.7B, contre 8–12 tokens/sec pour les applications CPU seul sur le même matériel. PocketPal AI est le meilleur choix équilibré pour la plupart des utilisateurs : il supporte n\'importe quel modèle GGUF, possède une interface utilisateur native soignée et gère correctement le stockage Android. Ollama via Termux est la solution pour les utilisateurs avancés — l\'écosystème complet Ollama (tous les modèles, API compatible OpenAI, utilisation d\'outils) sur votre téléphone, au prix d\'une configuration terminal. Maid est le choix puriste open-source : distribué via F-Droid, entièrement hors ligne, pas de dépendance Play Store et importation GGUF directe. Layla est l\'option conviviale pour débutants avec une sélection de modèles curés. Private AI se concentre sur la confidentialité de bout en bout avec une configuration simple et non technique. Les utilisateurs Android ont un avantage critique sur iPhone : le sideloading, Termux et la capacité à installer depuis F-Droid donnent accès à des outils simplement indisponibles sur iOS.**',
    quickAnswerTop: {
      en: {
        question: 'Quelle est la meilleure application pour exécuter l\'IA locale sur Android en 2026 ?',
        answer:
          'MLC Chat est le plus rapide sur les appareils Snapdragon 8 Elite (S25 Ultra, OnePlus 13) grâce au support NPU Hexagon — atteignant ~40 tokens/sec sur Qwen3 1.7B. PocketPal AI est le meilleur choix global pour la plupart des utilisateurs : support GGUF large, interface soignée et gestion correcte du stockage Android. Ollama via Termux offre l\'écosystème Ollama complet incluant l\'utilisation d\'outils et une API compatible OpenAI. Sur Pixel 9 Pro (Tensor G5), le support NPU est limité pour les applications tierces — MLC Chat et PocketPal AI y fonctionnent tous deux en CPU seul, livrant ~12–18 tokens/sec sur Phi-4 Mini.',
        bullets: [
          'MLC Chat — le plus rapide sur Snapdragon 8 Elite via NPU Hexagon : ~40 tok/sec (Qwen3 1.7B) sur Galaxy S25 Ultra.',
          'PocketPal AI — le meilleur global : support GGUF, interface soignée, gestion correcte du stockage Android, intégration Hugging Face.',
          'Ollama via Termux — meilleur pour utilisateurs avancés : écosystème Ollama complet, utilisation d\'outils, API compatible OpenAI sur l\'appareil.',
          'Maid — meilleur choix open-source : distribution F-Droid, pas de dépendance Google Play, importation GGUF directe via gestionnaire de fichiers.',
          'Layla — meilleur pour débutants : téléchargements de modèles curés, configuration simple, pas de terminal requis.',
          'Private AI — meilleur pour utilisateurs orientés confidentialité : pas de télémétrie réseau, permissions minimales, configuration simple.',
          'Sur Tensor G5 (Pixel 9) : NPU n\'est pas exposé aux applications tierces — les six applications s\'exécutent en CPU seul, livrant 10–18 tok/sec sur Phi-4 Mini.',
          'Avantage Android : Termux, F-Droid et sideloading déverrouillent des outils indisponibles sur iOS — Ollama via Termux n\'a pas d\'équivalent iPhone.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Tableau de comparaison', anchor: '#comparison-table' },
      { label: 'Quelle application choisir ?', anchor: '#which-app' },
      { label: 'Comparaison des chipsets : Snapdragon vs MediaTek vs Tensor', anchor: '#chipsets' },
      { label: 'MLC Chat', anchor: '#mlc-chat' },
      { label: 'Maid', anchor: '#maid' },
      { label: 'Layla', anchor: '#layla' },
      { label: 'Ollama via Termux', anchor: '#ollama-termux' },
      { label: 'Private AI', anchor: '#private-ai' },
      { label: 'PocketPal AI', anchor: '#pocketpal-ai' },
      { label: 'Fragmentation Android : Stockage, RAM et limites d\'arrière-plan', anchor: '#android-fragmentation' },
      { label: 'Intégration feuille de partage Android', anchor: '#share-sheet' },
      { label: 'Chemins de sideload et Termux : L\'avantage Android', anchor: '#sideload-paths' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures connexes', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-llm-apps-android-2026-static.html',
    gammaDescription: 'Le diaporama couvre : 6 applications Android LLM locales comparées sur 3 vrais téléphones (Galaxy S25 Ultra, Pixel 9 Pro, OnePlus 13), tableau de vitesses (MLC Chat ~40 tok/sec via NPU Hexagon), comparaison de chipsets (Snapdragon 8 Elite vs Tensor G5 vs MediaTek Dimensity 9400), guide de sélection d\'application, solutions aux limites d\'arrière-plan Android et 6 erreurs courantes. Téléchargez le PDF comme carte de référence IA Android.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MLC Chat est le leader en vitesse sur Snapdragon 8 Elite.** Le NPU Hexagon livre ~40 tokens/sec sur Qwen3 1.7B et ~22 tokens/sec sur Phi-4 Mini sur le Galaxy S25 Ultra — 3–4× plus rapide que les applications CPU seul sur le même matériel.',
          '**PocketPal AI est le meilleur choix global pour la plupart des utilisateurs Android.** Il supporte l\'écosystème GGUF complet, s\'intègre avec Hugging Face pour les téléchargements de modèles, gère correctement le stockage Android et possède l\'interface utilisateur native la plus soignée parmi les six applications.',
          '**Ollama via Termux est le seul chemin vers une API locale complète compatible OpenAI sur Android.** Cela importe pour les utilisateurs avancés qui souhaitent l\'utilisation d\'outils, les appels de fonction ou la capacité à connecter les applications locales au modèle de leur téléphone.',
          '**Tensor G5 (Pixel 9 Pro) n\'expose pas son NPU aux applications tierces.** Les six applications s\'exécutent en CPU seul sur Pixel 9 Pro, livrant 10–18 tokens/sec sur Phi-4 Mini — plus lent que le résultat Snapdragon 8 Elite équivalent.',
          '**Maid est le choix F-Droid / dé-googlifié.** Pas de dépendance Play Store, pas de compte Google requis et importation GGUF directe depuis le gestionnaire de fichiers. Le meilleur choix pour les utilisateurs Android qui évitent les services Google.',
          '**Les limites d\'arrière-plan d\'Android sont le plus grand problème d\'utilisabilité.** Android tue agressivement les processus d\'arrière-plan sur la plupart des ROM OEM (particulièrement Samsung, OnePlus et Xiaomi). Les applications effectuant une inférence active doivent être verrouillées dans la barre d\'applications récentes ou configurées dans les paramètres d\'optimisation de batterie pour éviter les interruptions au milieu de la génération.',
          '**Le stockage de modèle est le deuxième plus grand problème Android.** Chaque modèle GGUF fait 1–8 GB. La division d\'Android entre les partitions de stockage interne signifie que les modèles doivent être stockés dans le répertoire privé de l\'application ou à un emplacement spécifiquement configuré — pas dans "Téléchargements" pour la plupart des applications.',
          '**L\'avantage Android est réel : Termux et sideloading déverrouillent des outils sans équivalent iOS.** Ollama via Termux n\'est pas possible sur iPhone. Les applications F-Droid et le sideloading ADB donnent aux utilisateurs Android un accès à des applications que Google Play ne peut pas proposer.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Appareils de test :** Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM), Google Pixel 9 Pro (Tensor G5, 16 GB RAM), OnePlus 13 (Snapdragon 8 Elite, 16 GB RAM).',
          '**Familles de chipsets testées :** Snapdragon 8 Elite (NPU Hexagon), Tensor G5 (NPU non exposé aux applications tierces), MediaTek Dimensity 9400 (spécifications APU couvertes ; pas d\'appareil de test).',
          '**Meilleur modèle pour Android 12 GB :** Phi-4 Mini (3.8B, ~2.7 GB à Q4_K_M) — s\'exécute sur les six applications sur les trois appareils de test.',
          '**Meilleur modèle pour Android 8 GB :** Qwen3 1.7B ou SmolLM2 1.7B — s\'exécute sur tous ; Gemma 3 1B pour les appareils très contraints.',
          '**RAM minimum pour modèles 3B :** 6 GB RAM appareil. Au-dessous, restez à des modèles 1.7B.',
          '**Tokens/sec sur S25 Ultra (Phi-4 Mini) :** MLC Chat ~22 tok/sec (NPU), PocketPal AI ~16 tok/sec (CPU/Vulkan), Maid ~18 tok/sec (Vulkan), Layla ~14 tok/sec (CPU), Private AI ~13 tok/sec (CPU), Ollama Termux ~10 tok/sec (CPU).',
          '**Play Store vs. F-Droid :** MLC Chat, Layla, PocketPal AI et Private AI sont sur Google Play. Maid est principalement sur F-Droid. Ollama via Termux requiert Termux depuis F-Droid.',
          '**Intégration feuille de partage (Android) :** Seules PocketPal AI et Layla gèrent l\'entrée native de la feuille de partage Android à partir de mai 2026.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau de comparaison',
        content:
          '**Vitesses de tokens mesurées sur Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM) exécutant Phi-4 Mini en quantisation Q4_K_M.** L\'utilisation du NPU varie selon l\'application — MLC Chat est la seule application avec support NPU Hexagon vérifié à partir de mai 2026.',
                  image: '/images/best-local-llm-apps-android-2026-speed-comparison-fr.svg',
          imageCaption: 'MLC Chat atteint 22 tok/sec sur Phi-4 Mini via le NPU Hexagon Snapdragon, la plus rapide des 6 apps Android testées.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat mène la vitesse IA locale sur Android en 2026 grâce au support NPU Hexagon Snapdragon, atteignant ~22 tokens/sec sur Phi-4 Mini et ~40 tokens/sec sur Qwen3 1.7B sur le Galaxy S25 Ultra — 2–3× plus rapide que les alternatives CPU seul sur le même matériel.',
          },
        ],
        columns: ['Application', 'Tokens/sec (S25 Ultra, Phi-4 Mini)', 'Support NPU', 'Meilleur pour'],
        rows: [
          {
            'Application': 'MLC Chat',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~22 tok/sec (chemin NPU)',
            'Support NPU': 'Oui — NPU Hexagon sur Snapdragon 8 Elite',
            'Meilleur pour': 'Utilisateurs orientés vitesse sur téléphones Snapdragon',
          },
          {
            'Application': 'Maid',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~18 tok/sec (GPU Vulkan)',
            'Support NPU': 'Partiel — GPU Vulkan, pas de chemin NPU dédié',
            'Meilleur pour': 'Utilisateurs open-source / F-Droid, accès GGUF complet',
          },
          {
            'Application': 'Layla',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~14 tok/sec (CPU)',
            'Support NPU': 'Non',
            'Meilleur pour': 'Débutants, téléchargements de modèles curés',
          },
          {
            'Application': 'Ollama via Termux',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~10 tok/sec (CPU)',
            'Support NPU': 'Non (CPU seul dans le build Termux standard)',
            'Meilleur pour': 'Utilisateurs avancés, accès API, utilisation d\'outils',
          },
          {
            'Application': 'Private AI',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~13 tok/sec (CPU)',
            'Support NPU': 'Non',
            'Meilleur pour': 'Utilisateurs orientés confidentialité, permissions minimales',
          },
          {
            'Application': 'PocketPal AI',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~16 tok/sec (CPU/Vulkan)',
            'Support NPU': 'Partiel — GPU Vulkan sur appareils compatibles',
            'Meilleur pour': 'La plupart des utilisateurs — meilleure interface + écosystème GGUF complet',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Sur Pixel 9 Pro (Tensor G5), retirez MLC Chat de la première place — les six applications s\'exécutent en CPU seul, et PocketPal AI et Maid avancent sur la qualité de l\'interface. L\'avantage NPU disparaît complètement sur Tensor G5 pour les applications d\'inférence tierces.',
          },
          {
            type: 'warning',
            text: 'Les chiffres tokens/sec de Layla et Private AI sont des estimations de chemin CPU pour Phi-4 Mini Q4_K_M. Les vitesses réelles varient selon l\'état thermique — l\'inférence soutenue sur un téléphone chaud peut chuter 20–30% de la figure de démarrage à froid.',
          },
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Quelle application choisir ?',
        content:
          '**La bonne application dépend de votre chipset d\'appareil et de la valeur que vous accordez à la personnalisation par rapport à la simplicité.** Les utilisateurs Android se divisent fortement entre ceux qui veulent une expérience native soignée (PocketPal AI, Layla) et ceux qui veulent le contrôle maximum (Ollama via Termux, Maid). Contrairement à iPhone, Android permet les deux.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Choisissez MLC Chat si vous avez un téléphone Snapdragon 8 Elite et souhaitez l\'inférence la plus rapide possible. Choisissez PocketPal AI si vous voulez la meilleure application globale avec le support de modèles le plus large et l\'interface utilisateur la plus soignée. Choisissez Ollama via Termux si vous voulez une API IA locale complète sur votre téléphone et êtes à l\'aise avec un terminal. Choisissez Maid si vous voulez une option entièrement open-source distribuée via F-Droid sans dépendance Google. Choisissez Layla si vous êtes nouveau à l\'IA locale et souhaitez des téléchargements de modèles curés. Choisissez Private AI si la confidentialité des données et les permissions minimales sont votre préoccupation principale.',
          },
        ],
        items: [
          '**Téléphone Snapdragon 8 Elite (S25 Ultra, OnePlus 13) :** Commencez avec MLC Chat. Si vous avez besoin de modèles pas dans la bibliothèque MLC Chat, ajoutez PocketPal AI comme votre deuxième application — elle couvre l\'écosystème GGUF complet avec inférence accélérée Vulkan.',
          '**Pixel 9 Pro (Tensor G5) :** L\'avantage NPU disparaît — PocketPal AI est le meilleur choix pour la qualité d\'interface et la portée des modèles. MLC Chat bascule à CPU seul sur Tensor G5, perdant son avantage de vitesse.',
          '**N\'importe quel Android, personnalisation en premier :** Ollama via Termux + un frontend de chat (Alpaca, Open WebUI dans Chrome) est la configuration la plus capable. Requiert ~30 minutes de travail terminal mais offre une API compatible OpenAI, utilisation d\'outils et accès à la bibliothèque de modèles Ollama complète.',
          '**Téléphone dé-googlifié / confidentialité :** Maid depuis F-Droid. Fonctionne sur GrapheneOS, CalyxOS et autres builds dé-googlifiés. Pas de dépendance Play Services.',
          '**Téléphone 8 GB RAM :** N\'importe quelle des six applications avec Qwen3 1.7B ou SmolLM2 1.7B. PocketPal AI gère le stockage de modèles le plus élégamment sur les appareils contraints.',
          '**Samsung Galaxy (n\'importe quel modèle) :** Soyez conscient du tueur d\'arrière-plan agressif de Samsung. Verrouillez l\'application IA dans la barre d\'applications récentes et ajoutez-la à Maintenance d\'appareil → Batterie → Applications en veille pour éviter les interruptions au milieu d\'une inférence.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si vous avez un téléphone Snapdragon et souhaitez principalement un chat hors ligne, exécutez à la fois MLC Chat (pour la vitesse sur les sessions courtes) et PocketPal AI (pour les travaux plus longs avec des modèles non disponibles dans la bibliothèque MLC). Ils coexistent bien et utilisent un stockage de modèles séparé.',
          },
        ],
      },
      chipsets: {
        id: 'chipsets',
        title: 'Comparaison des chipsets : Snapdragon vs. MediaTek vs. Tensor',
        content:
          '**Snapdragon 8 Elite est le chipset le plus capable pour l\'inférence IA locale sur Android en 2026 — son NPU Hexagon est le seul NPU mobile avec support vérifié dans MLC Chat.** Tensor G5 et MediaTek Dimensity 9400 exécutent les six applications en mode CPU ou GPU Vulkan uniquement.',
                  image: '/images/best-local-llm-apps-android-2026-chipset-npu-fr.svg',
          imageCaption: 'Le NPU Hexagon exposé du Snapdragon 8 Elite fait tourner Phi-4 Mini à 22 tok/sec ; le chemin CPU seul du Tensor G5 atteint 10-18.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Le NPU Hexagon du Snapdragon 8 Elite livre 2–3× l\'inférence plus rapide qu\'l\'exécution CPU seul sur Android en 2026, mais seul MLC Chat expose cet avantage — toutes les autres applications basculent vers CPU ou GPU Vulkan sur tous les chipsets.',
          },
        ],
        columns: ['Chipset', 'Trouvé dans', 'NPU pour applications tierces', 'Meilleur chemin d\'inférence', 'Vitesse Phi-4 Mini (estimée)'],
        rows: [
          {
            'Chipset': 'Snapdragon 8 Elite',
            'Trouvé dans': 'Série Galaxy S25, OnePlus 13, Xiaomi 15 Pro',
            'NPU pour applications tierces': 'Oui — NPU Hexagon via MLCC (seul MLC Chat)',
            'Meilleur chemin d\'inférence': 'NPU Hexagon (MLC Chat) ou GPU Vulkan (Maid, PocketPal)',
            'Vitesse Phi-4 Mini (estimée)': '~22 tok/sec (NPU) / ~16–18 tok/sec (Vulkan)',
          },
          {
            'Chipset': 'Google Tensor G5',
            'Trouvé dans': 'Série Pixel 9',
            'NPU pour applications tierces': 'Non — Google réserve NPU pour les applications Google',
            'Meilleur chemin d\'inférence': 'CPU (toutes les applications s\'exécutent en CPU seul)',
            'Vitesse Phi-4 Mini (estimée)': '~12–15 tok/sec (CPU)',
          },
          {
            'Chipset': 'MediaTek Dimensity 9400',
            'Trouvé dans': 'Xiaomi 15 Ultra, Oppo Find X8 Pro, Vivo X200 Pro',
            'NPU pour applications tierces': 'Limité — Accès APU MediaTek via chemin NNAPI expérimental',
            'Meilleur chemin d\'inférence': 'GPU Vulkan (meilleure option tierce) ; NNAPI expérimental',
            'Vitesse Phi-4 Mini (estimée)': '~14–18 tok/sec (Vulkan) / ~12 tok/sec (CPU)',
          },
          {
            'Chipset': 'Snapdragon 8 Gen 3',
            'Trouvé dans': 'Série Galaxy S24, OnePlus 12',
            'NPU pour applications tierces': 'Partiel — Hexagon génération antérieure, support MLC Chat limité',
            'Meilleur chemin d\'inférence': 'GPU Vulkan ou CPU',
            'Vitesse Phi-4 Mini (estimée)': '~12–15 tok/sec (Vulkan)',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne supposez pas que le NPU Google Tensor G5 bénéficie aux applications IA locales. Le NPU de Google est réservé aux services ML de première partie (Google Translate, Recorder, traitement de photos). Les applications d\'inférence tierces incluant les six dans ce guide s\'exécutent en CPU seul sur chaque téléphone Pixel. La RAM 16 GB du Pixel 9 Pro est son véritable avantage — plus d\'espace pour les modèles plus grands, pas d\'inférence plus rapide.',
          },
          {
            type: 'tip',
            text: 'Les téléphones MediaTek Dimensity 9400 bénéficient du support GPU Vulkan dans Maid et PocketPal AI. Si vous avez un Xiaomi 15 Ultra ou Oppo Find X8 Pro, activez Vulkan dans les paramètres de l\'application pour une amélioration de vitesse de 30–40% par rapport au chemin CPU.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat',
        content:
          '**MLC Chat (Machine Learning Compilation Chat) est l\'application IA locale la plus rapide sur les appareils Snapdragon 8 Elite en 2026.** Développée par l\'équipe MLC AI, elle compile les modèles en utilisant le framework MLCC qui adresse directement le NPU Hexagon Snapdragon — un chemin d\'optimisation indisponible aux applications utilisant llama.cpp ou des backends Vulkan génériques.',
        items: [
          '**Bibliothèque de modèles :** Curée — MLC Chat est livré avec un ensemble de modèles pré-compilés optimisés pour mobile (Qwen3 1.7B, Phi-4 Mini, Gemma 3 1B, Llama 3.2 1B). L\'importation de modèles personnalisés est disponible mais requiert la toolchain de compilation MLC — pas un processus simple d\'un clic.',
          '**Utilisation du NPU :** Support NPU Hexagon vérifié sur Snapdragon 8 Elite (Galaxy S25 Ultra, OnePlus 13). Évalué à ~40 tokens/sec pour Qwen3 1.7B et ~22 tokens/sec pour Phi-4 Mini sur le S25 Ultra — comparé à ~12–16 tokens/sec CPU seul sur le même matériel.',
          '**Qualité de l\'interface :** Propre, fonctionnel, minimaliste. Interface de chat uniquement — pas d\'éditeur de prompt système, pas de cartes de caractères, pas de commutation multi-modèles. Adapté pour des tâches de chat focalisées, pas pour la configuration utilisateur avancée.',
          '**Feuille de partage Android :** Non supportée à partir de mai 2026. Impossible de recevoir du texte d\'autres applications via la feuille de partage standard.',
          '**Fiabilité hors ligne :** Excellente. Une fois un modèle compilé et mis en cache, MLC Chat s\'exécute avec zéro appels réseau. Le processus d\'arrière-plan est stable comparé à certaines applications basées sur llama.cpp.',
          '**Stockage :** MLC Chat stocke les poids de modèle compilés dans son répertoire d\'application privé (~3 GB pour Phi-4 Mini compilé pour Snapdragon). Ceux-ci ne sont pas portables vers d\'autres applications — une limitation par rapport aux applications basées sur GGUF.',
          '**Chemin d\'installation :** Google Play Store. Code source à [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'La bibliothèque de modèles de MLC Chat est curée et compilée. Si vous avez besoin d\'un modèle pas dans la bibliothèque officielle (par exemple, un Mistral Small affiné ou un modèle spécifique au domaine), MLC Chat ne peut pas aider — utilisez PocketPal AI ou Maid pour le support GGUF arbitraire. MLC Chat est un outil de vitesse, pas un outil de flexibilité.',
          },
        ],
      },
      maid: {
        id: 'maid',
        title: 'Maid',
        content:
          '**Maid est l\'application IA locale entièrement open-source, F-Droid-d\'abord pour Android — construite avec Flutter, utilisant llama.cpp comme backend d\'inférence et distribuée sans dépendance Google Play.** Elle supporte l\'importation GGUF directe depuis le gestionnaire de fichiers, l\'accélération GPU Vulkan sur appareils compatibles et fonctionne sur les builds Android dé-googlifiés (GrapheneOS, CalyxOS).',
        items: [
          '**Bibliothèque de modèles :** Sans restriction. N\'importe quel fichier de modèle GGUF peut être importé via le gestionnaire de fichiers Android ou téléchargé via URL. Cela inclut les modèles pas sur Hugging Face ou dans les bibliothèques d\'applications curées.',
          '**Utilisation du NPU :** Chemin GPU Vulkan sur appareils compatibles — pas de NPU dédié. Sur Snapdragon 8 Elite, Vulkan livre ~18 tokens/sec pour Phi-4 Mini, comparé à ~22 tokens/sec avec le chemin NPU de MLC. Pas d\'accès NPU Hexagon.',
          '**Qualité de l\'interface :** Fonctionnel mais moins poli que PocketPal AI ou Layla. L\'éditeur de prompt système, les contrôles de température et la gestion basique de l\'historique de chat sont présents. Le support des cartes de caractères est limité.',
          '**Feuille de partage Android :** Non supportée à partir de mai 2026.',
          '**Fiabilité hors ligne :** Excellente — l\'inférence basée sur llama.cpp est stable. Les limites d\'arrière-plan des ROM OEM (Samsung, OnePlus) s\'appliquent toujours.',
          '**Stockage :** Modèles stockés dans le répertoire privé de l\'application ou un chemin spécifié par l\'utilisateur. Les fichiers GGUF sont portables entre Maid et PocketPal AI s\'ils sont placés dans un stockage accessible partagé.',
          '**Chemin d\'installation :** F-Droid (principal), versions GitHub. Code source à [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid). Pas sur Google Play.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si vous êtes sur GrapheneOS ou un build Android dé-googlifié, Maid est la meilleure option disponible — elle n\'a pas de dépendance Google Play Services. Installez via le client F-Droid ou téléchargez l\'APK directement depuis la page des versions GitHub et installez avec ADB.',
          },
        ],
      },
      layla: {
        id: 'layla',
        title: 'Layla',
        content:
          '**Layla est l\'application IA locale Android la plus accessible pour débutants — elle abstrait la gestion de modèles derrière un flux de téléchargement curé, ne nécessite pas de terminal et présente une interface de chat soignée sans exposer les paramètres d\'inférence.** Le compromis est une sélection de modèles plus petite et l\'inférence CPU seul.',
        items: [
          '**Bibliothèque de modèles :** Curée, ensemble plus petit. Layla offre une expérience de téléchargement gérée — sélectionnez un modèle depuis la bibliothèque in-app et il est automatiquement téléchargé et configuré. L\'importation GGUF personnalisée n\'est pas une fonction principale.',
          '**Utilisation du NPU :** Chemin CPU seul — pas de GPU Vulkan ou NPU Hexagon. Cela rend Layla la plus lente des six sur Snapdragon 8 Elite (~14 tokens/sec pour Phi-4 Mini) mais cohérente sur tous les chipsets Android.',
          '**Qualité de l\'interface :** Meilleure des six applications pour les nouveaux utilisateurs. Interface focalisée sur le chat avec gestion de conversation claire, pas de surcharge de paramètres et commutation de modèles souple.',
          '**Feuille de partage Android :** Supportée — Layla peut recevoir du texte d\'autres applications via la feuille de partage Android, ce qui en fait l\'une des deux applications dans ce guide qui s\'intègrent au flux de partage Android standard.',
          '**Fiabilité hors ligne :** Bonne. Entièrement hors ligne après le téléchargement du modèle. Moins susceptible aux tueurs d\'arrière-plan car aucun processus serveur local s\'exécute (contrairement à Ollama via Termux).',
          '**Stockage :** Layla gère le stockage de modèles en interne. Aucune gestion manuelle de fichiers requise.',
          '**Chemin d\'installation :** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le support de la feuille de partage de Layla la rend d\'une utilité unique pour les flux de travail Android : surligner du texte dans n\'importe quelle application → Partager → Layla → poser une question à ce sujet. Ce cas d\'utilisation — aide IA rapide et contextuelle sans basculer d\'application — est où Layla surpasse toute autre application dans cette liste.',
          },
        ],
      },
      ollamaTermux: {
        id: 'ollama-termux',
        title: 'Ollama via Termux',
        content:
          '**Ollama via Termux est le seul chemin Android vers une API locale complète compatible OpenAI — incluant l\'utilisation d\'outils, l\'appel de fonction et la capacité de connecter les applications Android tierces à un modèle s\'exécutant localement.** La configuration prend 20–30 minutes et requiert une connaissance du terminal, mais le résultat est le même écosystème Ollama que les utilisateurs de bureau exécutent sur Mac et Linux, maintenant sur un téléphone.',
        numberedItems: [
          'Installez Termux depuis F-Droid (pas la version Play Store — le build Play Store est obsolète et casse les installations Ollama).',
          'Dans Termux : `pkg update && pkg install curl`',
          'Installez Ollama : `curl -fsSL https://ollama.com/install.sh | sh` — cela détecte l\'environnement Android ARM64 et installe le bon binaire.',
          'Tirez un modèle : `ollama pull qwen3:1.7b` ou `ollama pull phi4-mini`.',
          'Démarrez le serveur : `ollama serve` (gardez cela actif dans une session Termux ou utilisez un widget d\'arrière-plan).',
          'Interagissez via Termux : `ollama run phi4-mini` — ou connectez n\'importe quelle application supportant un endpoint compatible OpenAI à `http://localhost:11434`.',
        ],
        items: [
          '**Bibliothèque de modèles :** Illimitée — la bibliothèque de modèles Ollama complète est disponible via `ollama pull [nom-de-modèle]`. C\'est l\'accès au modèle le plus large de toute application dans ce guide.',
          '**Utilisation du NPU :** CPU seul dans le build Ollama ARM64 standard. Pas de support GPU Vulkan ou NPU Hexagon dans la configuration Termux standard à partir de mai 2026. Cela rend Ollama le plus lent en tokens/sec bruts (~10 tokens/sec pour Phi-4 Mini sur S25 Ultra).',
          '**Utilisation d\'outils et appel de fonction :** Supporté — Ollama sur Android gère l\'utilisation d\'outils de la même manière que sur le bureau. Connectez n\'importe quel frontend capable d\'utilisation d\'outils à localhost:11434.',
          '**Feuille de partage Android :** Non directement supportée. Workaround : utilisez un raccourci Termux:Widget pour rediriger le contenu du presse-papiers vers `ollama run [modèle]`.',
          '**Fiabilité d\'arrière-plan :** Problématique sur Samsung et OnePlus sans whitelist d\'optimisation de batterie. Créez un raccourci Termux:Widget pour `ollama serve` et verrouillez Termux dans la barre d\'applications récentes. Samsung One UI requiert de désactiver explicitement "Applications en veille" pour Termux.',
          '**Chemin d\'installation :** Termux depuis F-Droid, puis le script d\'installation Ollama via curl.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ollama via Termux sur un téléphone sera notablement plus lent qu\'Ollama sur un bureau — ~10 tokens/sec sur Phi-4 Mini sur le S25 Ultra vs. 60+ tokens/sec sur un RTX 4090. Utilisez-le pour la commodité (API de poche hors ligne, requêtes rapides loin du bureau) pas pour la performance. Pour la qualité de modèle large sur mobile, la connexion à distance à une machine domestique exécutant Ollama via Open WebUI dans Chrome reste la meilleure option.',
          },
          {
            type: 'tip',
            text: 'Installez le complément Termux:Widget et créez un raccourci d\'un clic qui exécute `ollama serve`. Cela vous permet de démarrer le serveur Ollama depuis votre widget d\'écran d\'accueil Android sans ouvrir Termux. Une fois en service, n\'importe quelle application configurée pour utiliser `localhost:11434` se connecte automatiquement.',
          },
        ],
      },
      privateAI: {
        id: 'private-ai',
        title: 'Private AI',
        content:
          '**Private AI est l\'application IA locale Android orientée confidentialité — conçue pour les utilisateurs qui souhaitent que toute inférence reste sur l\'appareil avec permissions minimales, aucune télémétrie réseau et une configuration simple non technique.** Elle demande moins de permissions que n\'importe quelle autre application dans ce guide et n\'envoie à aucun serveur externe après le téléchargement initial du modèle.',
        items: [
          '**Bibliothèque de modèles :** Curée, contrôlée pour la confidentialité. Les téléchargements proviennent de sources vérifiables. Pas d\'accès aux repos Hugging Face arbitraires — échange la flexibilité pour un approvisionnement en modèles contrôlé et vérifiable.',
          '**Utilisation du NPU :** Chemin CPU seul. Cohérent sur tous les chipsets à ~13 tokens/sec sur Phi-4 Mini (S25 Ultra).',
          '**Qualité de l\'interface :** Propre, minimaliste. Focalisée sur le chat avec exportation de conversation et aucune télémétrie d\'utilisation. Manque les options de configuration avancée (température, top-p, prompts système) — volontairement simplifiée.',
          '**Feuille de partage Android :** Non supportée à partir de mai 2026.',
          '**Fiabilité hors ligne :** Best-in-class. Conçue pour s\'exécuter entièrement hors ligne. Aucun appel réseau d\'arrière-plan, aucune synchronisation, aucune analytique.',
          '**Permissions :** Minimales — demande l\'accès au stockage et au microphone (pour l\'entrée vocale, optionnel). Ne demande pas de contacts, de position ou d\'ID publicitaire.',
          '**Chemin d\'installation :** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si votre cas d\'utilisation implique du texte professionnel sensible — brouillons juridiques, notes médicales, contenu commercial confidentiel — les permissions minimales et l\'architecture vérifiable sans télémétrie de Private AI sont significatives. Pour l\'utilisation générale de productivité, PocketPal AI est un meilleur choix global, mais le modèle de confiance de Private AI est plus fort.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI',
        content:
          '**PocketPal AI est la meilleure application IA locale Android tout-en-un pour la plupart des utilisateurs en 2026.** Elle combine l\'écosystème de modèles GGUF complet (n\'importe quel modèle depuis Hugging Face), l\'accélération GPU Vulkan, l\'interface utilisateur native mobile la plus soignée des six applications, le support direct de la feuille de partage Android et la gestion correcte du stockage Android — une combinaison qu\'aucune autre application unique dans ce guide ne correspond.',
        items: [
          '**Bibliothèque de modèles :** Écosystème GGUF complet — parcourez et téléchargez directement depuis Hugging Face dans l\'application, ou importez des fichiers GGUF locaux. Cela couvre la même portée que Maid tout en ajoutant une interface de découverte curée.',
          '**Utilisation du NPU :** Chemin GPU Vulkan sur appareils compatibles. Sur Snapdragon 8 Elite, livre ~16 tokens/sec sur Phi-4 Mini — derrière le chemin NPU de MLC (~22 tokens/sec) mais devant toutes les applications CPU seul sur le même matériel.',
          '**Qualité de l\'interface :** Meilleure interface utilisateur native mobile des six applications. Navigation par gestes, gestion de conversation, éditeur de prompt système, benchmarking de modèles et un panneau d\'paramètres par modèle. Construit avec React Native + llama.rn.',
          '**Feuille de partage Android :** Supportée — PocketPal AI et Layla sont les deux seules applications dans ce guide qui s\'intègrent à la feuille de partage Android. Surligner du texte dans n\'importe quelle application → Partager → PocketPal AI.',
          '**Fiabilité hors ligne :** Excellente. Pas de processus serveur d\'arrière-plan (contrairement à Ollama via Termux) — l\'inférence s\'exécute in-process, évitant les problèmes de tueur d\'arrière-plan Android que les approches basées sur serveur affectent.',
          '**Stockage :** Stocke les fichiers GGUF dans le stockage d\'application privé par défaut, avec une option de pointer vers le stockage externe. Les fichiers de modèle sont portables vers Maid s\'ils sont déplacés dans le stockage Android partagé.',
          '**Chemin d\'installation :** Google Play Store. Code source à [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'L\'outil de benchmarking de modèle in-app de PocketPal AI (exécute un prompt court et mesure tokens/sec) est utile pour comparer les tailles de modèles sur votre téléphone spécifique. Exécutez-le sur Phi-4 Mini, Qwen3 1.7B et Qwen3 4B pour trouver le plafond de vitesse pratique de votre appareil avant d\'engager un modèle pour l\'utilisation quotidienne.',
          },
        ],
      },
      androidFragmentation: {
        id: 'android-fragmentation',
        title: 'Fragmentation Android : Stockage, RAM et limites d\'arrière-plan',
        content:
          '**La fragmentation Android crée trois problèmes pratiques pour les applications IA locales : conflits de partitions de stockage, allocation RAM incohérente et politiques de tueur d\'arrière-plan OEM agressives.** Les trois affectent la fiabilité des modèles sur Samsung, OnePlus, Pixel et d\'autres appareils OEM Android de manière qui ne se produit pas sur iOS.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'La fragmentation Android signifie qu\'une application IA locale qui fonctionne parfaitement sur un Pixel 9 Pro pourrait s\'arrêter au milieu d\'une inférence sur un Galaxy S25 Ultra — non pas à cause de l\'application ou du modèle, mais parce que la politique de tueur d\'arrière-plan de Samsung termine le processus pour économiser la batterie. Chaque OEM Android personnalise ces politiques différemment — Pixel suit les standards AOSP les plus proches ; Samsung, OnePlus et Xiaomi ont tous des tueurs d\'arrière-plan plus agressifs par défaut.',
          },
        ],
        items: [
          '**Partitions de stockage :** Le `/data/user/0/` (stockage privé d\'application) d\'Android et `/sdcard/` (stockage partagé) sont des partitions séparées. La plupart des applications IA locales stockent les modèles dans un stockage d\'application privé, qui n\'est pas consultable dans le gestionnaire de fichiers sans root. Si vous souhaitez partager un fichier GGUF entre Maid et PocketPal AI, il doit d\'abord être copié à un emplacement partagé.',
          '**Allocation RAM :** Android ne donne pas aux applications tierces une allocation mémoire garantie. Si le système a besoin de RAM, il tue les processus d\'arrière-plan — incluant les processus d\'inférence. Sur les appareils 12 GB RAM (standard S25 Ultra), c\'est rarement un problème lors de l\'utilisation active. Sur les téléphones 8 GB RAM, lancer n\'importe quelle autre application pendant l\'inférence peut l\'interrompre.',
          '**Samsung One UI tueur d\'arrière-plan :** Le plus agressif des grands OEM Android. Naviguer vers Paramètres → Maintenance d\'appareil → Batterie → Limites d\'utilisation d\'arrière-plan → Applications en veille, et supprimer manuellement n\'importe quelle application IA de cette liste. Aussi verrouillez l\'application dans la barre d\'applications récentes en tapant sur son icône.',
          '**OnePlus OxygenOS tueur d\'arrière-plan :** Similaire à Samsung. Aller à Paramètres → Batterie → Optimisation de batterie, trouver l\'application IA et la définir à "Ne pas optimiser". Aussi verrouillez l\'application dans la barre d\'aperçu des applications récentes.',
          '**Pixel (AOSP-plus-proche) :** Le comportement d\'arrière-plan est le plus prévisible. Les applications demandant la permission `FOREGROUND_SERVICE` (PocketPal AI et Maid le font) s\'exécutent de manière fiable pendant l\'inférence active sur Pixel. L\'exclusion de l\'optimiseur de batterie est toujours recommandée pour les très longues sessions.',
          '**Xiaomi MIUI/HyperOS :** Tueur d\'arrière-plan le plus agressif après Samsung. La fonction "Économiseur de batterie" peut terminer l\'inférence au milieu de la génération. Aller à Paramètres → Applications → Gérer les applications → [application] → Économiseur de batterie → Pas de restrictions.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne vous fiez pas au comportement d\'arrière-plan Android par défaut pour n\'importe quelle application IA locale. Sur les appareils Samsung et OnePlus, la politique par défaut interrompra les longues sessions d\'inférence (>2 minutes) à moins que vous ne whitelist explicitement l\'application dans les paramètres d\'optimisation de batterie. C\'est la cause numéro un des rapports "l\'application s\'est arrêtée au milieu de la réponse" pour chaque application dans ce guide.',
          },
        ],
      },
      shareSheet: {
        id: 'share-sheet',
        title: 'Intégration feuille de partage Android',
        content:
          '**L\'intégration feuille de partage Android — la capacité de sélectionner du texte dans n\'importe quelle application et l\'envoyer à l\'IA locale — est supportée par seulement deux des six applications : PocketPal AI et Layla.** Cette seule fonctionnalité rend l\'IA locale véritablement utile comme outil au niveau du système plutôt que comme application autonome.',
        items: [
          '**Comment cela fonctionne :** Sélectionnez n\'importe quel texte dans n\'importe quelle application Android (navigateur Web, email, lecteur PDF, application de messagerie) → appuyez sur Partager → choisissez PocketPal AI ou Layla → le texte sélectionné apparaît dans le champ d\'entrée de chat.',
          '**Feuille de partage PocketPal AI :** Reçoit le texte brut. Ouvre une nouvelle conversation avec le texte sélectionné pré-rempli. Vous pouvez alors ajouter un prompt (par exemple, "Résumez ceci", "Traduisez en français", "Vérifiez ceci") et l\'envoyer au modèle local.',
          '**Feuille de partage Layla :** Même fonctionnalité de base. Transition d\'interface utilisateur légèrement plus fluide de la feuille de partage vers l\'interface de chat.',
          '**MLC Chat, Maid, Ollama via Termux, Private AI :** N\'apparaissent pas dans la feuille de partage Android à partir de mai 2026. Le texte doit être manuellement copié et collé dans ces applications.',
          '**Cas d\'utilisation pratiques :** Résumer des articles Web lors de la navigation, traduire des emails, rédiger des réponses à des messages, vérifier des paragraphes — tout sans que le texte ne quitte votre appareil ou ne touche une API cloud.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour les utilisateurs avancés qui souhaitent l\'intégration feuille de partage avec la bibliothèque complète de modèles (incluant les modèles pas dans les ensembles curés de Layla ou PocketPal AI), la solution : copier le texte → ouvrir PocketPal AI → charger n\'importe quel modèle GGUF → coller. L\'intégration Hugging Face de PocketPal AI signifie que vous pouvez charger un modèle personnalisé et l\'utiliser quand même comme application cible de partage.',
          },
        ],
      },
      sideloadPaths: {
        id: 'sideload-paths',
        title: 'Chemins de sideload et Termux : L\'avantage Android',
        content:
          '**Le sideloading d\'Android et l\'écosystème Termux donnent aux utilisateurs Android un accès aux outils IA locaux qui n\'existent pas sur iOS.** C\'est la différence pratique la plus nette entre Android et iPhone pour l\'utilisation d\'IA locale en 2026.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama via Termux — un serveur API IA local complet sur un téléphone — est une capacité exclusive à Android en 2026 : le sandboxing iOS d\'Apple empêche la configuration équivalente sur iPhone, ce qui rend Android la seule plateforme mobile pour les utilisateurs qui ont besoin d\'une API locale compatible OpenAI sur l\'appareil.',
          },
        ],
        items: [
          '**Termux :** Un environnement Linux dans une application Android. Installez via F-Droid (pas Play Store). Exécute bash, Python, curl et pratiquement n\'importe quel binaire Linux ARM64 — incluant Ollama. Termux n\'est pas disponible sur iOS ; son équivalent (iSH) manque les capacités réseau pour fournir les APIs locales.',
          '**Sideloading F-Droid :** Installez les applications sans Google Play — utile pour Maid, Termux et autres outils IA locaux open-source. Téléchargez l\'APK client F-Droid, activez "Installer à partir de sources inconnues" dans les paramètres de sécurité Android, installez F-Droid, puis installez n\'importe quelle application listée sur F-Droid sans compte Google.',
          '**Sideloading ADB :** Les utilisateurs avancés peuvent sideload les APK directement via Android Debug Bridge (`adb install [app.apk]`). Cela permet d\'installer les applications dont la liste Play Store est restreinte régionalement ou supprimée.',
          '**Avantage ROM personnalisée :** Les utilisateurs LineageOS, GrapheneOS et CalyxOS peuvent désactiver complètement Google Play et utiliser F-Droid + ADB comme leurs seuls chemins d\'installation d\'application. Maid et Termux fonctionnent entièrement sur ces plateformes. Aucun équivalent iOS n\'existe.',
          '**Mode serveur Llama.cpp via Termux :** Au-delà d\'Ollama, llama.cpp lui-même peut être compilé via Termux et s\'exécuter en mode serveur — fournissant une API locale alternative que certains utilisateurs préfèrent pour son surcharge mémoire inférieure comparé à Ollama.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La configuration Termux + Ollama fonctionne aussi comme serveur API local pour d\'autres applications sur le même téléphone. Par exemple, les applications comme Obsidian (avec le plugin API REST Local) ou l\'automatisation personnalisée peuvent interroger `localhost:11434/api/generate` pour exécuter les tâches IA sans Internet — un modèle d\'automatisation d\'écran d\'accueil véritablement utile et pratique.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        content: '**La plupart des erreurs avec les applications IA locales Android proviennent de quatre erreurs évitables.**',
        items: [
          '**Installation de Termux depuis le Play Store.** La version Play Store de Termux est obsolète (Termux a cessé de la mettre à jour en 2020). Le build actuellement maintenu est sur F-Droid. `pkg install curl` et le script d\'installation Ollama échouent tous les deux dans la version Play Store de Termux.',
          '**S\'attendre à une vitesse NPU sur un téléphone Pixel.** Le NPU Tensor G5 de Google n\'est pas accessible aux applications tierces. Les six applications s\'exécutent en CPU seul sur tous les modèles Pixel. L\'avantage NPU de MLC s\'applique uniquement à Snapdragon 8 Elite et ne s\'étend pas à Pixel.',
          '**Ignorer la whitelist d\'optimisation de batterie sur Samsung.** Les téléphones Galaxy terminent les processus d\'arrière-plan agressivement. Une génération durant plus de 90 secondes sera probablement interrompue par la politique de tueur d\'arrière-plan à moins que Termux ou l\'application IA soit explicitement whitelisté.',
          '**Télécharger des modèles trop volumineux pour l\'appareil.** Un modèle 7B Q4_K_M (~4.7 GB) requiert ~6 GB de RAM disponible. Sur un téléphone 12 GB avec surcharge système, c\'est serré. Sur un téléphone 8 GB, cela va OOM-kill l\'application au milieu de la génération. Utilisez Phi-4 Mini (3.8B, ~2.7 GB) pour appareils 8–10 GB et Qwen3 1.7B (~1.1 GB) pour n\'importe quoi en-dessous.',
          '**Supposer que le stockage est accessible dans les Téléchargements.** La plupart des applications IA locales stockent les fichiers de modèle dans un stockage d\'application privé (`/data/user/0/[app-package]/`), que le gestionnaire de fichiers ne peut pas consulter sans root. Si vous téléchargez un GGUF dans le dossier Téléchargements et vous attendez à ce que l\'application le trouve, elle ne le trouvera pas — utilisez la fonction d\'importation in-app ou pointez vers le bon chemin dans les paramètres.',
          '**Exécuter simultanément deux applications d\'inférence.** Chaque application charge le modèle en RAM. Deux modèles 3B sur un téléphone 12 GB laissent ~5 GB pour le système d\'exploitation, ce qui déclenche les tueurs. Si vous utilisez MLC Chat et PocketPal AI, fermez l\'une avant d\'ouvrir l\'autre.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'GitHub MLC Chat et documentation — [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)',
          'GitHub Maid (Mobile Artificial Intelligence) — [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
          'GitHub PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Documentation officielle Ollama — [ollama.com](https://ollama.com)',
          'Documentation officielle Termux — [wiki.termux.com](https://wiki.termux.com)',
          'Documentation technique NPU Hexagon Snapdragon 8 Elite — Réseau de développeurs Qualcomm',
          'Spécifications APU MediaTek Dimensity 9400 — Page produit MediaTek',
          'Vue d\'ensemble du chipset Google Tensor G5 — Documentation matériel Google',
          'Limites de processus d\'arrière-plan d\'Android et optimisation de batterie — Documentation développeur Android',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Un Pixel 9 Pro peut-il exécuter un modèle 7B ?',
            a: 'Oui, le Pixel 9 Pro a 16 GB RAM — assez d\'espace pour exécuter un modèle 7B Q4_K_M (~4.7 GB de poids de modèle) avec encore une RAM système disponible. La vitesse est ~8–10 tokens/sec à cette taille (CPU seul sur Tensor G5). Utilisez PocketPal AI ou Maid avec un GGUF 7B pour ce cas d\'utilisation. Pour une vitesse de conversation en temps réel sur Pixel 9 Pro, restez à Phi-4 Mini (3.8B, ~14 tokens/sec).',
          },
          {
            q: 'Ces applications utilisent-elles le NPU Snapdragon ?',
            a: 'Seul MLC Chat utilise le NPU Hexagon Snapdragon et uniquement sur les appareils Snapdragon 8 Elite (série Galaxy S25, OnePlus 13). Les cinq autres applications utilisent CPU ou GPU Vulkan. Le NPU Hexagon offre 2–3× une inférence plus rapide dans MLC Chat comparé au chemin CPU sur le même appareil.',
          },
          {
            q: 'Puis-je exécuter l\'IA locale sur un Samsung Galaxy S22 ?',
            a: 'Oui, sur les variantes 8 GB RAM. Le Galaxy S22 exécute Snapdragon 8 Gen 1 (ou Exynos 2200 dans certaines régions). PocketPal AI et Maid avec Qwen3 1.7B ou SmolLM2 1.7B fonctionnent à ~8–12 tokens/sec. Phi-4 Mini (3.8B) est possible mais serré sur 8 GB RAM — fermez d\'abord les autres applications. Le chemin NPU de MLC n\'est pas vérifié sur Snapdragon 8 Gen 1.',
          },
          {
            q: 'Ai-je besoin de rooter mon téléphone pour l\'IA locale ?',
            a: 'Non. Les six applications dans ce guide fonctionnent sur les téléphones Android non rootés. Termux requiert d\'activer "Installer à partir de sources inconnues" pour l\'APK F-Droid, mais ce n\'est pas du rootage. Root n\'est pertinent que pour accéder aux répertoires de stockage d\'application privée depuis un gestionnaire de fichiers — non requis pour l\'inférence.',
          },
          {
            q: 'Puis-je utiliser ces applications avec Termux ?',
            a: 'Ollama via Termux est sa propre configuration complète — vous installez Ollama à l\'intérieur de Termux et interagissez via le terminal Termux. Les cinq autres applications (MLC Chat, Maid, Layla, Private AI, PocketPal AI) sont des applications Android autonomes qui n\'interagissent pas avec Termux. Les utilisateurs avancés exécutent les deux : Ollama dans Termux pour l\'accès API et PocketPal AI pour l\'interface de chat soignée.',
          },
          {
            q: 'Comment gérez-vous les limites d\'arrière-plan d\'Android ?',
            a: 'Les limites d\'arrière-plan sont le plus grand problème de fiabilité pour les applications IA locales Android. PocketPal AI et Maid demandent la permission FOREGROUND_SERVICE, ce qui les rend plus résistants aux tueurs d\'arrière-plan. Ollama via Termux est susceptible aux politiques de tueur d\'arrière-plan de Samsung et OnePlus à moins que Termux ne soit explicitement whitelisté dans les paramètres d\'optimisation de batterie. Sur Pixel, le comportement d\'arrière-plan est le plus prévisible. Sur Samsung One UI, vous whitelistez manuellement n\'importe quelle application IA dans Maintenance d\'appareil → Batterie → Applications en veille.',
          },
          {
            q: 'Puis-je partager la sortie IA locale avec d\'autres applications ?',
            a: 'Oui, à partir de n\'importe quelle application — copiez la réponse IA et collez-la n\'importe où. Pour la direction inverse (envoi de texte d\'une autre application à l\'IA), seules PocketPal AI et Layla apparaissent dans la feuille de partage Android à partir de mai 2026.',
          },
          {
            q: 'Ces applications supportent-elles Android Auto ?',
            a: 'Non. Aucune des six applications ne supporte Android Auto à partir de mai 2026. Android Auto restreint la fonctionnalité qui peut s\'exécuter pendant la conduite, et aucune des applications IA locales n\'ont construit l\'interface compatible Auto requise pour la certification.',
          },
          {
            q: 'Quelle application gère le mieux le stockage de modèles ?',
            a: 'PocketPal AI gère le stockage de modèles le plus élégamment — elle s\'intègre directement avec Hugging Face pour les téléchargements in-app, gère correctement la division de partition de stockage Android et offre une interface de gestion de modèles. Maid est meilleure pour les utilisateurs qui souhaitent gérer manuellement les fichiers GGUF via le système de fichiers. MLC Chat utilise un format de modèle compilé propriétaire non portable à d\'autres applications.',
          },
          {
            q: 'Puis-je exécuter plusieurs modèles simultanément ?',
            a: 'Uniquement si votre appareil a assez de RAM pour les deux modèles plus le surcharge Android. Sur un Pixel 9 Pro 16 GB : deux modèles Phi-4 Mini (2.7 GB chacun) laissent ~10 GB pour le système d\'exploitation — techniquement faisable mais très serré. En pratique, fermez une application avant d\'ouvrir l\'autre. Ollama via Termux supporte le changement de modèle avec un processus `ollama serve` unique, chargeant chaque modèle à la fois.',
          },
          {
            q: 'Dois-je considérer la CNIL avec les applications IA locales sur Android ?',
            a: 'Avec l\'inférence locale sur Android, la question CNIL est limitée car les données ne quittent pas l\'appareil. La CNIL s\'applique au traitement des données — les modèles locaux sur votre téléphone Android n\'envoyant rien en dehors de l\'appareil satisfont déjà la recommandation CNIL de traitement local pour les données sensibles professionnelles (données financières, données de santé, données légales). Pas de transmission de données distante, pas d\'accès tiers. Remarque : vous êtes toujours tenu de gérer les permissions (par exemple, si l\'application lit la liste de contacts, vous devez le divulguer à l\'utilisateur). Les applications comme Maid et Private AI avec des permissions minimales réduisent ce risque.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Meilleures applications IA locales pour iPhone 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — l\'équivalent iOS : LLM Farm, Pocket Paladin et le paysage d\'inférence iPhone.',
          '[Comment exécuter l\'IA sur une tablette : iPad et Android (2026)](/fr/power-local-llm/run-ai-on-tablet-ipad-android) — Connection locale vs. distante pour le plus grand écran avec recommandations spécifiques aux tablettes.',
          '[Modèles IA mobiles : Phi-4 Mini, Gemma, SmolLM](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Guide de sélection de modèles pour l\'inférence mobile : quels modèles s\'adaptent aux téléphones 4–16 GB.',
          '[Répertoire logiciel IA local 2026](/fr/power-local-llm/local-llm-software-directory-2026) — le répertoire d\'applications complet incluant les applications de bureau, les backends serveur et les frontends pour toutes les plateformes.',
          '[Application IA locale la plus simple pour Windows, Mac et Linux](/fr/power-local-llm/easiest-local-ai-app-windows-mac-linux) — l\'équivalent de bureau : philosophie identique pour comparer les applications par facilité d\'utilisation.',
          '[Meilleurs IA locaux 2026](/fr/local-llms/best-local-llms-2026) — Article d\'autorité en matière de modèles : quels modèles open-weight utiliser dans les configurations matérielles.',
          '[Meilleures alternatives open-source à ChatGPT Plus](/fr/prompt-bites/best-open-source-alternatives-to-chatgpt-plus) — Open WebUI, LibreChat et Jan : comparaison des fonctionnalités avec ChatGPT Plus.',
          '[Meilleur modèle Qwen pour le coding](/fr/prompt-bites/best-qwen-model-for-coding) — Qwen3-Coder sur Android via Termux + Ollama : faisabilité et configuration.',
          '[Sélection rapide d\'apps LLM Android](/fr/prompt-bites/best-local-llm-apps-android) — juste besoin de savoir quelle app installer ? Comparaison rapide sans benchmarks.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleures applications IA locales pour Android 2026 : 6 applications comparées sur des téléphones réels',
      datePublished: '2026-05-08',
      dateModified: '2026-06-14',
      url: 'https://www.promptquorum.com/fr/power-local-llm/best-local-llm-apps-android-2026',
      inLanguage: 'fr',
      image: 'https://www.promptquorum.com/api/og/best-local-llm-apps-android-2026?lang=fr',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        url: 'https://www.promptquorum.com/about',
        sameAs: [
          'https://www.linkedin.com/in/hanskuepper/',
          'https://x.com/HansKuepperAPPs',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-06-14',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '2026年 Android用ローカルLLMアプリの最良 : 6つのアプリ実機比較',
    seoTitle: 'Androidでローカル LLM を実行 2026年：速度・NPU・設定ガイド',
    intro:
      '2026年、6つの Android アプリがローカル言語モデルを完全にオフラインで実行しています：MLC Chat、Maid、Layla、Ollama via Termux、Private AI、PocketPal AI。これらは NPU 利用、モデルライブラリの幅、Android 統合で異なります—最適な選択は、速度（MLC Chat with Hexagon NPU）、最大のモデル柔軟性（Ollama via Termux）、またはポーランド済みネイティブ UI（Layla または PocketPal AI）のどちらを優先するかによります。本ガイドは Samsung Galaxy S25 Ultra（Snapdragon 8 Elite）、Pixel 9 Pro（Tensor G5）、OnePlus 13（Snapdragon 8 Elite）での 6 つのアプリを比較し、Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5 推論、Android 断片化の現実、各アプリがストレージ、バックグラウンド制限、Android シェアシートをどう処理するかをカバーしています。',
    metaDescription:
      'Android でのローカル LLM の実際の動作 2026年 — S25 Ultra、Pixel 9 Pro、OnePlus 13 での実機ベンチマーク。NPU 速度、GGUF 対応、RAM 制限。6 アプリ比較。',
    twitterDescription:
      'Android ローカルAI 2026：MLC Chat は Snapdragon Hexagon NPU で ~40 tok/sec に到達。Maid は完全な GGUF アクセスを提供。Ollama via Termux はパワーユーザー向け。S25 Ultra、Pixel 9 Pro、OnePlus 13 での 6 アプリ完全比較。',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Qwen3 1.7B',
      'Qwen3 4B',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM2 1.7B',
    ],
    current_hardware_mentioned: [
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
      'Snapdragon 8 Elite Hexagon NPU',
      'Google Tensor G5',
      'MediaTek Dimensity 9400 APU',
    ],
    audience:
      'クラウド API なし、サブスクリプション なし、デバイス外へのデータ送信なしで、ローカルで AI モデルを実行したい Android ユーザー。初めてアプリをインストールする初心者から、Termux + Ollama パイプラインを構築するパワーユーザーまで対応。',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Android用ローカルLLMアプリ',
    targetKeywords: [
      'best local llm apps android 2026',
      'run local ai android phone',
      'mlc chat android review',
      'ollama android termux',
      'pocketpal ai android',
      'offline ai android no internet',
    ],
    leadAnswerBlock:
      '**MLC Chat は 2026 年の Android ローカルLLM アプリで最速です—Galaxy S25 Ultra と OnePlus 13 の Snapdragon Hexagon NPU を利用して Qwen3 1.7B で ~40 tokens/sec に達し、同じハードウェアの CPU のみのアプリの 8–12 tokens/sec と比較できます。PocketPal AI はほとんどのユーザーにとって最適なバランス型アプリです：すべての GGUF モデルをサポートし、ポーランド済みネイティブ UI、Android ストレージを正しく処理します。Ollama via Termux はパワーユーザー向けのパス—完全な Ollama エコシステム（すべてのモデル、OpenAI 互換 API、ツール利用）をあなたのフォンで、端末セットアップのコストで実現します。Maid は open-source の厳格な選択肢：F-Droid 経由で配布、完全にオフライン、Google Play 依存なし、GGUF 直接インポート。Layla は初心者向けのキュレーションされたモデル選択肢。Private AI はシンプルで非技術的なセットアップで完全なプライバシーに焦点。Android ユーザーは iPhone と比較して重要な利点を持っています：サイドローディング、Termux、F-Droid からのインストール能力は iOS で単に利用できないツールへのアクセスを可能にします。**',
    quickAnswerTop: {
      en: {
        question: '2026年 Android でローカルAIを実行するのに最適なアプリは？',
        answer:
          'MLC Chat は Snapdragon 8 Elite デバイス（S25 Ultra、OnePlus 13）上で Hexagon NPU サポートのおかげで最速です—Qwen3 1.7B で ~40 tokens/sec に達し。PocketPal AI はほとんどのユーザーにとって最適な全体選択肢です：広い GGUF サポート、ポーランド済み UI、正しい Android ストレージハンドリング。Ollama via Termux はツール利用を含むすべての Ollama エコシステムと OpenAI 互換 API を提供します。Pixel 9 Pro（Tensor G5）では、サードパーティアプリに対する NPU サポートは限定的です—MLC Chat と PocketPal AI の両方が CPU のみで実行でき、Phi-4 Mini で ~12–18 tokens/sec を提供します。',
        bullets: [
          'MLC Chat — Snapdragon 8 Elite で Hexagon NPU 経由で最速：Galaxy S25 Ultra で ~40 tok/sec（Qwen3 1.7B）。',
          'PocketPal AI — 全体で最良：GGUF サポート、ポーランド済み UI、正しい Android ストレージハンドリング、Hugging Face 統合。',
          'Ollama via Termux — パワーユーザー向け最良：完全な Ollama エコシステム、ツール利用、デバイス上の OpenAI 互換 API。',
          'Maid — open-source 選択肢として最良：F-Droid 配布、Google Play 依存なし、ファイルマネージャーからの GGUF 直接インポート。',
          'Layla — 初心者向け最良：キュレーションされたモデルダウンロード、シンプルなオンボーディング、端末不要。',
          'Private AI — プライバシー重視ユーザー向け最良：ネットワークテレメトリーなし、最小限の権限、シンプルなセットアップ。',
          'Tensor G5（Pixel 9）では：NPU はサードパーティアプリに公開されていません—6つすべてのアプリが CPU のみで実行、Phi-4 Mini で 10–18 tok/sec を提供。',
          'Android の利点：Termux、F-Droid、サイドローディングは iOS では利用できないツールをアンロック—Ollama via Termux には iPhone 相当物がありません。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '重要な事実', anchor: '#quick-facts' },
      { label: '比較表', anchor: '#comparison-table' },
      { label: 'どのアプリを選ぶべき？', anchor: '#which-app' },
      { label: 'チップセット比較：Snapdragon vs MediaTek vs Tensor', anchor: '#chipsets' },
      { label: 'MLC Chat', anchor: '#mlc-chat' },
      { label: 'Maid', anchor: '#maid' },
      { label: 'Layla', anchor: '#layla' },
      { label: 'Ollama via Termux', anchor: '#ollama-termux' },
      { label: 'Private AI', anchor: '#private-ai' },
      { label: 'PocketPal AI', anchor: '#pocketpal-ai' },
      { label: 'Android の断片化：ストレージ、RAM、バックグラウンド制限', anchor: '#android-fragmentation' },
      { label: 'Android シェアシート統合', anchor: '#share-sheet' },
      { label: 'サイドロードと Termux パス：Android の利点', anchor: '#sideload-paths' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: 'ソース', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連する読み物', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-llm-apps-android-2026-static.html',
    gammaDescription: 'このスライドデッキは、3台の実機（Galaxy S25 Ultra、Pixel 9 Pro、OnePlus 13）でテストした6つのAndroidローカルLLMアプリ比較、速度表（MLC Chat ~40 tok/sec、Hexagon NPU）、チップセット比較（Snapdragon 8 Elite vs Tensor G5 vs MediaTek Dimensity 9400）、ユースケース別アプリ選択ガイド、Androidバックグラウンド制限の回避策、6つのよくある間違いをカバーしています。PDFをAndroidローカルAIリファレンスカードとしてダウンロードしてください。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MLC Chat は Snapdragon 8 Elite の速度リーダーです。** Hexagon NPU は Galaxy S25 Ultra 上の Qwen3 1.7B で ~40 tokens/sec と Phi-4 Mini で ~22 tokens/sec を提供します—同じハードウェアの CPU のみのアプリの 3–4 倍速いです。',
          '**PocketPal AI はほとんどの Android ユーザーにとって最良の全体選択肢です。** 完全な GGUF エコシステムをサポートし、Hugging Face 統合、Android ストレージを正しく処理、6 つのアプリ中で最もポーランド済みなモバイルネイティブ UI を持ちます。',
          '**Ollama via Termux は Android 上の完全な OpenAI 互換ローカル API への唯一のパスです。** これはツール利用、機能呼び出し、またはローカルアプリをデバイスのモデルに接続する能力を望むパワーユーザーに重要です。',
          '**Tensor G5（Pixel 9 Pro）はサードパーティアプリに NPU を公開しません。** 6 つすべてのアプリは Pixel 9 Pro 上で CPU のみで実行し、Phi-4 Mini で 10–18 tokens/sec を提供します—同等の Snapdragon 8 Elite 結果より遅いです。',
          '**Maid は F-Droid / 脱 Google 選択肢です。** Play Store 依存なし、Google アカウント不要、ファイルマネージャーから GGUF 直接インポート。Google サービスを避ける Android ユーザーにとって最良の選択肢。',
          '**Android バックグラウンド制限は最大の使いやすさの問題です。** Android はほとんどの OEM ROM（特に Samsung、OnePlus、Xiaomi）上でバックグラウンドプロセスを積極的に終了します。アクティブな推論を行うアプリは最近のアプリトレイにロックするか、バッテリー最適化設定で構成する必要があります。',
          '**モデルストレージは 2 番目に大きい Android の問題です。** 各 GGUF モデルは 1–8 GB です。Android の内部ストレージパーティション間の分割は、モデルをアプリのプライベートディレクトリまたは特別に構成された場所に保存する必要があります—ほとんどのアプリの「ダウンロード」ではありません。',
          '**Android 利点は実です：Termux とサイドローディングは iOS 相当物のないツールをアンロック。** Ollama via Termux は iPhone では不可能です。F-Droid アプリと ADB サイドローディングは Google Play が実行しないアプリへの Android ユーザーアクセスを提供します。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '重要な事実',
        items: [
          '**テストデバイス：** Samsung Galaxy S25 Ultra（Snapdragon 8 Elite、12 GB RAM）、Google Pixel 9 Pro（Tensor G5、16 GB RAM）、OnePlus 13（Snapdragon 8 Elite、16 GB RAM）。',
          '**テストされたチップセットファミリー：** Snapdragon 8 Elite（Hexagon NPU）、Tensor G5（サードパーティアプリに NPU 非公開）、MediaTek Dimensity 9400（APU 仕様カバー；テストデバイスではない）。',
          '**12 GB Android 向け最良モデル：** Phi-4 Mini（3.8B、Q4_K_M で ~2.7 GB）—すべての 6 つのアプリ上で 3 つすべてのテストデバイスで実行。',
          '**8 GB Android 向け最良モデル：** Qwen3 1.7B または SmolLM2 1.7B—すべてのアプリで実行；非常に制約されたデバイス向け Gemma 3 1B。',
          '**3B モデル向け最小 RAM：** 6 GB デバイス RAM。以下は 1.7B モデルに固執してください。',
          '**S25 Ultra でのトークン/秒（Phi-4 Mini）：** MLC Chat ~22 tok/sec（NPU）、PocketPal AI ~16 tok/sec（CPU/Vulkan）、Maid ~18 tok/sec（Vulkan）、Layla ~14 tok/sec（CPU）、Private AI ~13 tok/sec（CPU）、Ollama Termux ~10 tok/sec（CPU）。',
          '**Play Store vs. F-Droid：** MLC Chat、Layla、PocketPal AI、Private AI は Google Play。Maid は主に F-Droid。Ollama via Termux は F-Droid から Termux を必要。',
          '**シェアシート統合（Android）：** 2026 年 5 月時点で PocketPal AI と Layla のみが Android シェアシート入力をネイティブ処理。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '比較表',
        content:
          '**トークン速度は Samsung Galaxy S25 Ultra（Snapdragon 8 Elite、12 GB RAM）上で Phi-4 Mini を Q4_K_M 量子化で実行して測定。** NPU 利用はアプリにより異なります—MLC Chat は 2026 年 5 月時点で唯一の検証済み Hexagon NPU サポートのあるアプリです。',
                  image: '/images/best-local-llm-apps-android-2026-speed-comparison-ja.svg',
          imageCaption: 'MLC ChatはSnapdragon Hexagon NPU経由でPhi-4 Miniを22 tok/秒で実行し、テストした6つのAndroidアプリ中最速です。',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat は Snapdragon Hexagon NPU サポートのおかげで 2026 年 Android ローカル LLM 速度をリード、Galaxy S25 Ultra 上で Phi-4 Mini で ~22 tokens/sec と Qwen3 1.7B で ~40 tokens/sec に達します—同じハードウェアの CPU のみの代替案より 2–3 倍高速。',
          },
        ],
        columns: ['アプリ', 'トークン/秒（S25 Ultra、Phi-4 Mini）', 'NPU対応', '最適用途'],
        rows: [
          {
            'アプリ': 'MLC Chat',
            'トークン/秒（S25 Ultra、Phi-4 Mini）': '~22 tok/sec（NPU パス）',
            'NPU対応': 'はい—Snapdragon 8 Elite の Hexagon NPU',
            '最適用途': 'Snapdragon フォン上の速度重視ユーザー',
          },
          {
            'アプリ': 'Maid',
            'トークン/秒（S25 Ultra、Phi-4 Mini）': '~18 tok/sec（Vulkan GPU）',
            'NPU対応': '部分的—Vulkan GPU、専用 NPU パスなし',
            '最適用途': 'open-source / F-Droid ユーザー、完全 GGUF アクセス',
          },
          {
            'アプリ': 'Layla',
            'トークン/秒（S25 Ultra、Phi-4 Mini）': '~14 tok/sec（CPU）',
            'NPU対応': 'いいえ',
            '最適用途': '初心者、キュレーション済みモデルダウンロード',
          },
          {
            'アプリ': 'Ollama via Termux',
            'トークン/秒（S25 Ultra、Phi-4 Mini）': '~10 tok/sec（CPU）',
            'NPU対応': 'いいえ（標準 Termux ビルド内 CPU のみ）',
            '最適用途': 'パワーユーザー、API アクセス、ツール利用',
          },
          {
            'アプリ': 'Private AI',
            'トークン/秒（S25 Ultra、Phi-4 Mini）': '~13 tok/sec（CPU）',
            'NPU対応': 'いいえ',
            '最適用途': 'プライバシー重視ユーザー、最小限の権限',
          },
          {
            'アプリ': 'PocketPal AI',
            'トークン/秒（S25 Ultra、Phi-4 Mini）': '~16 tok/sec（CPU/Vulkan）',
            'NPU対応': '部分的—互換デバイス上 Vulkan GPU',
            '最適用途': 'ほとんどのユーザー—最良 UI + 完全 GGUF エコシステム',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pixel 9 Pro（Tensor G5）では、MLC Chat をトップから外します—6 つすべてのアプリが CPU のみで実行、PocketPal AI と Maid が UI 品質でリード。NPU 利点はサードパーティ推論アプリの Tensor G5 で完全に消失します。',
          },
          {
            type: 'warning',
            text: 'Layla と Private AI tokens/sec 数値は Phi-4 Mini Q4_K_M の CPU パス推定値です。実際の速度は熱状態で変動します—温かいフォン上の持続推論は冷開始値から 20–30% 低下します。',
          },
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'どのアプリを選ぶべき？',
        content:
          '**正しいアプリはあなたのデバイスチップセットとシンプルさよりカスタマイズをどのくらい価値付けるかに依ります。** Android ユーザーはポーランド済みネイティブ体験を望む人（PocketPal AI、Layla）と最大制御を望む人（Ollama via Termux、Maid）で鋭く分割します。iPhone と異なり、Android は両方を許可します。',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Snapdragon 8 Elite フォンを持ち、可能な限り最速推論を望むなら MLC Chat を選ぶ。最広いモデルサポートと最もポーランド済みた UI を持つ最良の全体アプリを望むなら PocketPal AI を選ぶ。フォン上で完全なローカル AI API を望み、端末に慣れているなら Ollama via Termux を選ぶ。Google 依存性なし完全に open-source、F-Droid 配布オプションを望むなら Maid を選ぶ。ローカル AI に新しく、キュレーション済みモデルダウンロードを望むなら Layla を選ぶ。データプライバシーと最小限の権限があなたの主要な懸念なら Private AI を選ぶ。',
          },
        ],
        items: [
          '**Snapdragon 8 Elite フォン（S25 Ultra、OnePlus 13）：** MLC Chat から開始。MLC Chat ライブラリにないモデルが必要なら、2 番目のアプリとして PocketPal AI を追加—それは Vulkan 加速推論を持つ完全 GGUF エコシステムをカバー。',
          '**Pixel 9 Pro（Tensor G5）：** NPU 利点は消失—UI 品質とモデル幅で PocketPal AI がトップ選択肢。MLC Chat は Tensor G5 で CPU のみに低下、速度利点を失う。',
          '**任意の Android、カスタマイズ優先：** Ollama via Termux + チャットフロントエンド（Alpaca、Chrome 内 Open WebUI）は最も能力のあるセットアップ。~30 分の端末作業を要求しますが、OpenAI 互換 API、ツール利用、完全 Ollama モデルライブラリアクセス提供。',
          '**脱 Google / プライバシーフォン：** F-Droid から Maid。GrapheneOS、CalyxOS、その他脱 Google ビルドで動作。Play Services 依存なし。',
          '**8 GB RAM フォン：** Qwen3 1.7B または SmolLM2 1.7B を持つ 6 つのいずれか。PocketPal AI は制約されたデバイス上でモデルストレージを最も優雅に処理。',
          '**Samsung Galaxy（任意のモデル）：** Samsung の積極的なバックグラウンド キルに注意。AI アプリを最近のアプリトレイに固定し、デバイスケア → バッテリー → スリープアプリに追加してしてを回避。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Snapdragon フォンを持ち、主に短時間セッションのためにオフラインチャットを望むなら、MLC Chat（短セッション向けの速度）と PocketPal AI（MLC ライブラリで利用できないモデル付きより長期作業）の両方を実行。彼らは共存良好で独立したモデルストレージ使用。',
          },
        ],
      },
      chipsets: {
        id: 'chipsets',
        title: 'チップセット比較：Snapdragon vs. MediaTek vs. Tensor',
        content:
          '**Snapdragon 8 Elite は 2026 年 Android 上のローカル LLM 推論向けで最も能力のあるチップセットです—その Hexagon NPU は MLC Chat で検証済みサポートを持つ唯一のモバイル NPU です。** Tensor G5 と MediaTek Dimensity 9400 は 6 つのアプリすべてを CPU または Vulkan GPU モードのみで実行。',
                  image: '/images/best-local-llm-apps-android-2026-chipset-npu-ja.svg',
          imageCaption: 'Snapdragon 8 EliteのHexagon NPUはPhi-4 Miniを22 tok/秒で実行し、Tensor G5のCPUのみの経路は10〜18にとどまります。',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Snapdragon 8 Elite の Hexagon NPU は 2026 年 Android で CPU のみ実行より 2–3 倍高速推論を提供しますが、MLC Chat のみがこの利点を公開します—その他すべてのアプリはすべてのチップセット上で CPU または Vulkan GPU にフォールバック。',
          },
        ],
        columns: ['チップセット', '見つかる場所', 'サードパーティアプリ向け NPU', '最良推論パス', 'Phi-4 Mini 速度（推定）'],
        rows: [
          {
            'チップセット': 'Snapdragon 8 Elite',
            '見つかる場所': 'Galaxy S25 シリーズ、OnePlus 13、Xiaomi 15 Pro',
            'サードパーティアプリ向け NPU': 'はい—MLCC 経由 Hexagon NPU（MLC Chat のみ）',
            '最良推論パス': 'Hexagon NPU（MLC Chat）または Vulkan GPU（Maid、PocketPal）',
            'Phi-4 Mini 速度（推定）': '~22 tok/sec（NPU）/ ~16–18 tok/sec（Vulkan）',
          },
          {
            'チップセット': 'Google Tensor G5',
            '見つかる場所': 'Pixel 9 シリーズ',
            'サードパーティアプリ向け NPU': 'いいえ—Google は NPU を Google アプリ向けに予約',
            '最良推論パス': 'CPU（すべてのアプリが CPU のみ実行）',
            'Phi-4 Mini 速度（推定）': '~12–15 tok/sec（CPU）',
          },
          {
            'チップセット': 'MediaTek Dimensity 9400',
            '見つかる場所': 'Xiaomi 15 Ultra、Oppo Find X8 Pro、Vivo X200 Pro',
            'サードパーティアプリ向け NPU': '限定的—実験的 NNAPI パス経由 MediaTek APU アクセス',
            '最良推論パス': 'Vulkan GPU（最良のサードパーティオプション）；NNAPI 実験的',
            'Phi-4 Mini 速度（推定）': '~14–18 tok/sec（Vulkan）/ ~12 tok/sec（CPU）',
          },
          {
            'チップセット': 'Snapdragon 8 Gen 3',
            '見つかる場所': 'Galaxy S24 シリーズ、OnePlus 12',
            'サードパーティアプリ向け NPU': '部分的—Hexagon 前世代、MLC Chat サポート限定',
            '最良推論パス': 'Vulkan GPU または CPU',
            'Phi-4 Mini 速度（推定）': '~12–15 tok/sec（Vulkan）',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Google の Tensor G5 NPU がローカル LLM アプリに利益を与えると仮定しないでください。Google の NPU は第一者 ML サービス（Google Translate、Recorder、フォト処理）向けに予約。このガイドの 6 つすべてを含むサードパーティ推論アプリは各 Pixel フォン上で CPU のみ実行。Pixel 9 Pro の 16 GB RAM が実際の利点—より大きいモデルのための より多くのヘッドルーム、より高速な推論ではない。',
          },
          {
            type: 'tip',
            text: 'MediaTek Dimensity 9400 フォンは Maid と PocketPal AI の Vulkan GPU サポートから利益。Xiaomi 15 Ultra または Oppo Find X8 Pro を持つなら、CPU パスより 30–40% 速度改善のためアプリ設定で Vulkan を有効化。',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat',
        content:
          '**MLC Chat（Machine Learning Compilation Chat）は 2026 年 Snapdragon 8 Elite デバイス上でローカル LLM 向け最速 Android アプリです。** MLC AI チームにより開発、MLCC フレームワークを使用してモデルを編集—Snapdragon Hexagon NPU を直接アドレスする最適化パス llama.cpp または汎用 Vulkan バックエンドを使用するアプリには利用不可。',
        items: [
          '**モデルライブラリ：** キュレーション済み—MLC Chat はモバイル向けに最適化された事前編集モデルセット（Qwen3 1.7B、Phi-4 Mini、Gemma 3 1B、Llama 3.2 1B）でシップされます。カスタムモデルインポートは可能ですが MLC コンパイルツールチェーンが必要—単純なワンクリックプロセスではありません。',
          '**NPU 利用：** Snapdragon 8 Elite（Galaxy S25 Ultra、OnePlus 13）上で検証済み Hexagon NPU サポート。S25 Ultra 上の Qwen3 1.7B で ~40 tokens/sec と Phi-4 Mini で ~22 tokens/sec でベンチマーク—同じハードウェアの CPU のみで比較して ~12–16 tokens/sec。',
          '**UI 品質：** クリーン、機能的、最小限。チャットインターフェースのみ—システムプロンプトエディターなし、キャラクターカードなし、マルチモデルスイッチングなし。フォーカスされたチャットタスクに適切、パワーユーザー構成ではなく。',
          '**Android シェアシート：** 2026 年 5 月時点で非サポート。標準シェアシート経由で他のアプリからテキストを受け取ることはできません。',
          '**オフライン信頼性：** 優秀。モデルが編集されてキャッシュされると、MLC Chat はゼロネットワーク呼び出しで実行。バックグラウンドプロセスはいくつかの llama.cpp ベースのアプリと比較して安定。',
          '**ストレージ：** MLC Chat は編集モデルウェイトをプライベートアプリディレクトリに保存（Snapdragon 向け編集 Phi-4 Mini で ~3 GB）。これらは他のアプリにポータブルではありません—GGUF ベースのアプリと比較して制限。',
          '**インストールパス：** Google Play Store。ソースコード [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'MLC Chat のモデルライブラリはキュレーション済みで編集。オフィシャルライブラリにないモデル（例：微調整 Mistral Small またはドメイン固有モデル）が必要なら、MLC Chat は助けられません—任意の GGUF サポート向け PocketPal AI または Maid を使用。MLC Chat は速度ツール、柔軟性ツールではありません。',
          },
        ],
      },
      maid: {
        id: 'maid',
        title: 'Maid',
        content:
          '**Maid は完全に open-source で F-Droid 優先 Android ローカル LLM アプリです—Flutter で構築、llama.cpp を推論バックエンドとして使用、Google Play 依存性なしで配布。** ファイルマネージャーから GGUF 直接インポート、互換デバイス上 Vulkan GPU 加速をサポート、脱 Google Android ビルド（GrapheneOS、CalyxOS）で実行。',
        items: [
          '**モデルライブラリ：** 無制限。任意の GGUF モデルファイルは Android ファイルマネージャーまたはURL ダウンロード経由でインポート可能。これは Hugging Face 上にないか、キュレーション済みアプリライブラリ内にないモデルを含めます。',
          '**NPU 利用：** 互換デバイス上 Vulkan GPU パス—専用 NPU ではありません。Snapdragon 8 Elite 上、Vulkan は Phi-4 Mini 向け ~18 tokens/sec を提供、MLC の NPU パスと比較して ~22 tokens/sec。Hexagon NPU アクセスなし。',
          '**UI 品質：** 機能的ですが PocketPal AI または Layla ほど磨かれていません。システムプロンプトエディター、温度コントロール、基本的なチャット履歴管理は存在。キャラクターカードサポート限定。',
          '**Android シェアシート：** 2026 年 5 月時点で非サポート。',
          '**オフライン信頼性：** 優秀—llama.cpp ベース推論は安定。OEM ROM（Samsung、OnePlus）からのバックグラウンド制限はまだ適用。',
          '**ストレージ：** アプリプライベートディレクトリまたはユーザー指定パスに保存されたモデル。GGUF ファイルは共有アクセス可能ストレージに置かれれば Maid と PocketPal AI 間でポータブル。',
          '**インストールパス：** F-Droid（プライマリ）、GitHub リリース。ソースコード [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)。Google Play ではない。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'GrapheneOS または脱 Google Android ビルド上にいるなら、Maid は最良の利用可能オプション—Google Play Services 依存性なし。F-Droid クライアント経由でインストールするか、GitHub リリースページから APK を直接ダウンロード、ADB でサイドロード。',
          },
        ],
      },
      layla: {
        id: 'layla',
        title: 'Layla',
        content:
          '**Layla は最も初心者アクセス可能な Android ローカル LLM アプリです—モデル管理をキュレーション済みダウンロードフロー背後に抽象化、端末を要求しません、推論設定を公開せずにポーランド済みチャットインターフェース提示。** トレードオフはより小さいモデル選択と CPU のみ推論。',
        items: [
          '**モデルライブラリ：** キュレーション済み、より小さいセット。Layla は管理されたダウンロード体験提供—アプリ内ライブラリからモデルを選択すると自動的にダウンロード・構成。カスタム GGUF インポートはプライマリ機能ではありません。',
          '**NPU 利用：** CPU パスのみ—Vulkan GPU または Hexagon NPU なし。これは Snapdragon 8 Elite 上で Layla を最も遅い 6 つにする（Phi-4 Mini で ~14 tokens/sec）がすべての Android チップセット上で一貫。',
          '**UI 品質：** 初回ユーザー向け 6 つ中で最高。チャットフォーカスインターフェース、クリアな会話管理、設定オーバーロードなし、スムースなモデル切り替え。',
          '**Android シェアシート：** サポート—Layla は Android シェアシート経由で他のアプリからテキストを受け取ることができ、6 つこのガイドのアプリ中で標準 Android 共有ワークフローに統合する 2 つにしてくれます。',
          '**オフライン信頼性：** 良好。モデルダウンロード後に完全にオフライン。ローカルサーバープロセス実行なし（Ollama via Termux と異なり）ためバックグラウンドキルにより少なく影響。',
          '**ストレージ：** Layla はモデルストレージを内部管理。マニュアルファイル管理不要。',
          '**インストールパス：** Google Play Store。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Layla のシェアシートサポートはそれを Android ワークフロー向け一意に有用にします：任意のアプリ内でテキストをハイライト → 共有 → Layla → それについて質問を尋ねます。このユースケース—アプリ切り替えなしの迅速なコンテキスト内 AI 支援—はこのリスト内で Layla がすべての他のアプリを上回るところ。',
          },
        ],
      },
      ollamaTermux: {
        id: 'ollama-termux',
        title: 'Ollama via Termux',
        content:
          '**Ollama via Termux は完全なローカル OpenAI 互換 API への唯一の Android パス—ツール利用、機能呼び出し、ローカル実行モデルにサードパーティ Android アプリを接続する能力含む。** セットアップは 20–30 分を要求し端末快適さが必要ですが、結果はデスクトップユーザーが Mac と Linux 上で実行する同じ Ollama エコシステム、今フォン上。',
        numberedItems: [
          'F-Droid から Termux をインストール（Play Store バージョンではない—Play Store ビルドは廃止されており Ollama インストールを破壊）。',
          'Termux 内：`pkg update && pkg install curl`',
          'Ollama をインストール：`curl -fsSL https://ollama.com/install.sh | sh`—これは Android ARM64 環境を検出し正しいバイナリをインストール。',
          'モデルをプル：`ollama pull qwen3:1.7b` または `ollama pull phi4-mini`。',
          'サーバーを開始：`ollama serve`（これを Termux セッション内で実行し続けるまたはバックグラウンドウィジェット使用）。',
          'Termux 経由で相互作用：`ollama run phi4-mini`—またはローカルホスト:11434 で OpenAI 互換エンドポイントをサポート任意のアプリを接続。',
        ],
        items: [
          '**モデルライブラリ：** 無制限—完全 Ollama モデルライブラリは `ollama pull [モデル名]` 経由で利用可能。これはこのガイドのすべてのアプリ中で最も広いモデルアクセス。',
          '**NPU 利用：** 標準 Ollama ARM64 ビルド内 CPU のみ。2026 年 5 月時点で標準 Termux 構成の Vulkan GPU または Hexagon NPU サポート なし。これは Ollama を生トークン/秒で最も遅いにする（S25 Ultra での Phi-4 Mini で ~10 tokens/sec）。',
          '**ツール利用と機能呼び出し：** サポート—Android 上の Ollama はツール利用をデスクトップと同じ方法で処理。localhost:11434 にツール利用可能フロントエンドを接続。',
          '**Android シェアシート：** 直接非サポート。ワークアラウンド：Termux:Widget ショートカット使用、クリップボードコンテンツを `ollama run [モデル]` にパイプ。',
          '**バックグラウンド信頼性：** Samsung と OnePlus 上でバッテリー最適化ホワイトリストなしで問題。`ollama serve` 用 Termux:Widget ショートカットを作成、Termux を最近のアプリトレイに固定。Samsung One UI は Termux の「スリープアプリ」明示的に無効化が必要。',
          '**インストールパス：** F-Droid から Termux、その後 curl 経由 Ollama インストールスクリプト。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'フォン上 Ollama via Termux は Ollama デスクトップと著しく遅い—S25 Ultra での Phi-4 Mini で ~10 tokens/sec vs. RTX 4090 で 60+ tokens/sec。便利さ（オフラインポケット API、デスクから離れた迅速クエリ）用に使用、パフォーマンス用ではなく。モバイル上で大型モデル品質の場合、Open WebUI 経由フォン上で Ollama を実行しホーム機械にリモート接続がより良いオプション残る。',
          },
          {
            type: 'tip',
            text: 'Termux:Widget アドオンをインストール、`ollama serve` を実行するワンタップショートカットを作成。これによって Termux を開くことなく Android ホーム画面ウィジェットから Ollama サーバーを開始することが可能。一度サーブされると、`localhost:11434` への使用に構成任意のアプリ自動的に接続。',
          },
        ],
      },
      privateAI: {
        id: 'private-ai',
        title: 'Private AI',
        content:
          '**Private AI はプライバシー重視 Android ローカル LLM アプリ—最小限の権限、ネットワークテレメトリーなし、シンプルな非技術的セットアップを持つデバイス上に全推論を保つことを望むユーザー向け設計。** 初期モデルダウンロード後にこのガイド内の他のどのアプリより少ない権限をリクエスト、外部サーバーへ ping していません。',
        items: [
          '**モデルライブラリ：** キュレーション済み、プライバシースクリーン。ダウンロードは検証可能なソースから。Hugging Face レポジトリのアクセスなし—柔軟性を制御、監査可能モデル供給と交換。',
          '**NPU 利用：** CPU パスのみ。すべてのチップセット上で一貫、Phi-4 Mini（S25 Ultra）で ~13 tokens/sec。',
          '**UI 品質：** クリーン、最小限。チャットフォーカス、会話エクスポート、使用テレメトリーなし。高度な構成オプション（温度、top-p、システムプロンプト）欠く—意図的に単純化。',
          '**Android シェアシート：** 2026 年 5 月時点で非サポート。',
          '**オフライン信頼性：** ベストインクラス。完全にオフライン実行設計。バックグラウンドネットワーク呼び出しなし、同期なし、分析なし。',
          '**権限：** 最小限—ストレージアクセス・マイク（音声入力、オプション）をリクエスト。連絡先、位置、広告 ID をリクエストしていません。',
          '**インストールパス：** Google Play Store。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ユースケースが機密職業テキストを含む—法的ドラフト、医療ノート、機密ビジネスコンテンツ—なら Private AI の最小限の権限と監査可能なテレメトリーなしアーキテクチャは意味があります。一般的な生産性使用の場合、PocketPal AI はより良い全体選択肢ですが Private AI の信頼モデルはより強い。',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI',
        content:
          '**PocketPal AI は 2026 年ほとんどのユーザー向けで最良のオール・イン・ワン Android ローカル LLM アプリです。** 完全 GGUF モデルエコシステム（Hugging Face からの任意モデル）、Vulkan GPU 加速、6 つのアプリ中で最もポーランド済みなネイティブモバイル UI、直接 Android シェアシートサポート、正しい Android ストレージハンドリング組み合わせ—このガイド内で他の単一アプリが合致しない組み合わせ。',
        items: [
          '**モデルライブラリ：** 完全 GGUF エコシステム—アプリ内から直接 Hugging Face をブラウズ・ダウンロード、またはローカル GGUF ファイルをインポート。これは Maid と同じ幅をカバー、キュレーション済み発見インターフェース追加。',
          '**NPU 利用：** 互換デバイス上 Vulkan GPU パス。Snapdragon 8 Elite 上で Phi-4 Mini で ~16 tokens/sec を提供—MLC の NPU パス（~22 tokens/sec）背後ですがすべての CPU のみアプリ同じハードウェア上前方。',
          '**UI 品質：** 6 つのアプリ中で最良のネイティブモバイル UI。ジェスチャーナビゲーション、会話管理、システムプロンプトエディター、モデルベンチマーク、モデル別設定パネル。React Native + llama.rn で構築。',
          '**Android シェアシート：** サポート—PocketPal AI と Layla はこのガイドで Android シェアシートに統合する唯一の 2 つのアプリ。任意のアプリ内でテキストをハイライト → 共有 → PocketPal AI。',
          '**オフライン信頼性：** 優秀。バックグラウンドサーバープロセスなし（Ollama via Termux と異なり）—推論は プロセス内実行、server ベースアプローチ影響バックグラウンド・キル問題回避。',
          '**ストレージ：** GGUF ファイルをデフォルトでプライベートアプリストレージに保存、外部ストレージ指定オプション。モデルファイルは共有 Android ストレージに移動されれば Maid にポータブル。',
          '**インストールパス：** Google Play Store。ソースコード [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'PocketPal AI のアプリ内モデルベンチマークツール（短いプロンプト実行、tokens/sec 測定）は特定フォン上でモデルサイズ比較向けに有用。Phi-4 Mini、Qwen3 1.7B、Qwen3 4B で実行して、日々使用向けモデルをコミットする前にあなたのデバイスの実用速度上限を見つける。',
          },
        ],
      },
      androidFragmentation: {
        id: 'android-fragmentation',
        title: 'Android の断片化：ストレージ、RAM、バックグラウンド制限',
        content:
          '**Android 断片化はローカル LLM アプリ向けに 3 つの実用的問題を作ります：ストレージパーティション競合、一貫でない RAM 割り当て、積極的な OEM バックグラウンド・キルポリシー。** 3 つすべては Samsung、OnePlus、Pixel、その他の Android OEM デバイス上のモデル信頼性に iOS では発生しない方法で影響。',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Android 断片化は Pixel 9 Pro 上で完璧に機能するローカル LLM アプリが Galaxy S25 Ultra 上で推論中央で停止する可能性を意味—アプリまたはモデルのため無く、Samsung のバックグラウンド・キルポリシーが電池を救うためプロセスを終了するため。各 Android OEM がこれらのポリシーを異なる方法でカスタマイズ—Pixel は AOSP 標準に最も近い従う；Samsung、OnePlus、Xiaomi はすべてデフォルトで積極的なバックグラウンド・キルを持つ。',
          },
        ],
        items: [
          '**ストレージパーティション：** Android の `/data/user/0/`（プライベートアプリストレージ）と `/sdcard/`（共有ストレージ）は分割パーティション。ほとんどのローカル LLM アプリはプライベートアプリストレージにモデルを保存、ファイルマネージャーで root なしで閲覧不可。GGUF ファイルを Maid と PocketPal AI 間で共有したいなら、最初に共有場所へコピーする必要があります。',
          '**RAM 割り当て：** Android はサードパーティアプリに保証メモリ割り当てを提供しません。システムが RAM を必要とする場合、バックグラウンドプロセス—推論プロセス含む—を終了。12 GB RAM デバイス（S25 Ultra デフォルト）では、これはアクティブな使用中はまれに問題。8 GB RAM フォンでは、推論中に他のアプリを起動はそれを中断できます。',
          '**Samsung One UI バックグラウンド・キル：** 大きい Android OEM のうち最も積極的。設定 → デバイスケア → バッテリー → バックグラウンド利用制限 → スリープアプリへナビゲート、手動で任意の LLM アプリをこのリストから削除。また、そのアイコンをタップして最近のアプリトレイでアプリをロック。',
          '**OnePlus OxygenOS バックグラウンド・キル：** Samsung に類似。設定 → バッテリー → バッテリー最適化へ移動、LLM アプリを見つけ、「最適化しない」に設定。また、最近のアプリ概要でアプリをロック。',
          '**Pixel（AOSP に最も近い）：** バックグラウンド動作は最も予測可能。`FOREGROUND_SERVICE` 権限をリクエストするアプリ（PocketPal AI と Maid はこれを行う）は Pixel 上でアクティブな推論中に確実に実行。バッテリー最適化ツール除外は非常に長いセッション向けに推奨。',
          '**Xiaomi MIUI/HyperOS：** Samsung 後で最も積極的なバックグラウンド・キル。「電池セーバー」機能は生成中央で推論を終了可能。設定 → アプリ → アプリ管理 → [アプリ] → 電池セーバー → 制限なしへ移動。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'デフォルト Android バックグラウンド動作を任意のローカル LLM アプリで信頼しないでください。Samsung と OnePlus デバイス上、デフォルトポリシーはバッテリー最適化設定でアプリを明示的にホワイトリストしない限り長い推論セッション（>2 分）を中断。これはこのガイド内のすべてのアプリの「アプリが応答中央で停止」レポートのナンバー 1 原因。',
          },
        ],
      },
      shareSheet: {
        id: 'share-sheet',
        title: 'Android シェアシート統合',
        content:
          '**Android シェアシート統合—任意のアプリ内でテキストを選択、ローカル AI へそれを送信する能力—6 つのアプリのうちたった 2 つでサポート：PocketPal AI と Layla。** 単一機能はローカル AI を単独アプリでなくシステムレベルツールとして本当に有用にします。',
        items: [
          '**それはどう機能：** 任意の Android アプリ（web ブラウザ、email、PDF リーダー、メッセージングアプリ）内で任意テキストを選択 → 共有をタップ → PocketPal AI または Layla を選択 → 選択テキストがチャット入力フィールドで表示。',
          '**PocketPal AI シェアシート：** プレーンテキストを受け取ります。選択テキスト事前入力で新しい会話を開く。その後プロンプトを追加でき（例：「これを要約」「これをを日本語に翻訳」「これを検証」）ローカルモデルへ送信。',
          '**Layla シェアシート：** 同じベース機能。シェアシートからチャット インターフェースへのやや滑らかな UI 移行。',
          '**MLC Chat、Maid、Ollama via Termux、Private AI：** 2026 年 5 月時点で Android シェアシートで表示されません。テキストはこれらのアプリへ手動でコピー・ペーストされる必要があります。',
          '**実用的ユースケース：** web 記事をブラウズしながら要約、email を翻訳、メッセージ返信をドラフト、段落を検証—すべてテキストがあなたのデバイスを離れ、cloud API に触れることなし。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'シェアシート統合を完全モデルライブラリで望むパワーユーザー（Layla または PocketPal AI のキュレーション済みセット内にないモデル含む）の場合、ワークアラウンド：テキストをコピー → PocketPal AI を開く → 任意 GGUF モデルをロード → ペースト。PocketPal AI の Hugging Face 統合は、あなたがカスタムモデルをロードでき、それでもシェアターゲットアプリとして使用できることを意味。',
          },
        ],
      },
      sideloadPaths: {
        id: 'sideload-paths',
        title: 'サイドロードと Termux パス：Android の利点',
        content:
          '**Android のサイドローディングと Termux エコシステムは iOS では存在しないローカル AI ツールへ Android ユーザーアクセスを提供。** これは 2026 年ローカル AI 使用向け Android と iPhone 間の最も鋭い実用的違い。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama via Termux—フォン上の完全ローカル LLM API サーバー—は 2026 年で Android 専有能力：Apple の iOS サンドボックスが iPhone 上で同等セットアップを防ぐ、ローカル OpenAI 互換 API をデバイス上で必要とするユーザー向けで唯一のモバイルプラットフォームを作成。',
          },
        ],
        items: [
          '**Termux：** Android アプリ内の Linux 環境。F-Droid 経由でインストール（Play Store ではない）。Bash、Python、Curl、実質上どの Linux ARM64 バイナリも実行—Ollama 含む。Termux は iOS では利用不可；その相当物（iSH）ローカル API サーブ向けのネットワーク能力を欠く。',
          '**F-Droid サイドローディング：** Google Play なしでアプリをインストール—Maid、Termux、その他ローカル AI open-source ツール用に有用。F-Droid クライアント APK をダウンロード、Android セキュリティ設定で「不明なソースからのインストール」を有効化、F-Droid をインストール、その後 Google アカウント なしで F-Droid リストされた任意アプリをインストール。',
          '**ADB サイドローディング：** 高度なユーザーが Android Debug Bridge 経由で直接 APK をサイドロード可能（`adb install [app.apk]`）。これにより地域的に制限またはリスト削除された Play Store リストを持つアプリをインストール可能に。',
          '**カスタム ROM 利点：** LineageOS、GrapheneOS、CalyxOS ユーザーは Google Play を完全に無効化でき、F-Droid + ADB を唯一のアプリインストールパスとして使用可能。Maid と Termux はこれらのプラットフォーム上で完全に動作。iOS 相当物は存在しません。',
          '**Llama.cpp サーバーモード via Termux：** Ollama を超えて、llama.cpp 自体を Termux 経由でコンパイル、サーバーモードで実行可能—いくつかのユーザー Ollama と比較してその低いメモリオーバーヘッドを優先する代替ローカル API を提供。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Termux + Ollama セットアップはまたサーム同じフォン上の他のアプリ向けローカル API サーバーとしても機能。例えば、アプリは Obsidian（Local REST API プラグイン付き）または custom shortcuts のような自動化が`localhost:11434/api/generate` をクエリでき、インターネット なしで AI タスク実行可能—本当に有用でプラクティカルなホーム画面自動化パターン。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        content: '**ほとんどの Android ローカル LLM アプリエラーは 4 つの回避可能な間違いから来ます。**',
        items: [
          '**Play Store から Termux をインストール。** Termux の Play Store バージョンは廃止（Termux は 2020 年に更新を停止）。現在管理されたビルドは F-Droid 上。`pkg install curl` と Ollama インストールスクリプト両方は Play Store Termux バージョンで失敗。',
          '**Pixel フォン上で NPU 速度を期待。** Google の Tensor G5 NPU はサードパーティアプリでアクセス不可。6 つすべてのアプリは各 Pixel モデル上で CPU のみで実行。MLC の NPU 利点は Snapdragon 8 Elite にのみ適用、Pixel に延長しません。',
          '**Samsung 上でバッテリー最適化ホワイトリストをスキップ。** Galaxy フォンはバックグラウンドプロセスを積極的に終了。90 秒より長く続く生成は、Termux または LLM アプリが明示的にホワイトリストされない限りバックグラウンド・キルポリシー中断される可能性。',
          '**デバイスに対して大き過ぎるモデルをダウンロード。** 7B Q4_K_M モデル（~4.7 GB）は ~6 GB の利用可能 RAM を要求。12 GB フォンでシステムオーバーヘッド付きではタイト。8 GB フォンでは、アプリを生成中央で OOM-kill。8–10 GB デバイス向けに Phi-4 Mini（3.8B、~2.7 GB）を使用、それ以下の Qwen3 1.7B（~1.1 GB）。',
          '**ストレージが ダウンロード内でアクセス可能と仮定。** ほとんどのローカル LLM アプリはプライベートアプリストレージ内のモデルファイル保存（`/data/user/0/[app-package]/`）、root なしでファイルマネージャーからブラウズ不可。GGUF をダウンロードフォルダへダウンロード、アプリが見つけることを期待したら、見つけません—アプリ内インポート機能を使用、または設定で正しいパスをポイント。',
          '**2 つの推論アプリを同時に実行。** 各アプリはモデルを RAM へロード。2 つの 3B モデルを 12 GB フォンで運は ~5 GB をオペレーティングシステムに残す、キルをトリガー。MLC Chat と PocketPal AI の両方を使用するなら、他を開く前に 1 つを閉じてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          'MLC Chat GitHub とドキュメント—[github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)',
          'Maid GitHub（Mobile Artificial Intelligence）—[github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
          'PocketPal AI GitHub—[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Ollama オフィシャルドキュメント—[ollama.com](https://ollama.com)',
          'Termux オフィシャルドキュメント—[wiki.termux.com](https://wiki.termux.com)',
          'Snapdragon 8 Elite Hexagon NPU テクニカルドキュメント—Qualcomm デベロッパーネットワーク',
          'MediaTek Dimensity 9400 APU スペック—MediaTek プロダクトページ',
          'Google Tensor G5 チップ概要—Google ハードウェアドキュメント',
          'Android バッテリー最適化とバックグラウンドプロセス制限—Android デベロッパードキュメント',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Pixel 9 Pro は 7B モデルを実行できますか?',
            a: 'はい、Pixel 9 Pro は 16 GB RAM を持ち—7B Q4_K_M モデル（~4.7 GB モデルウェイト）を実行するための十分なヘッドルームがあり、システム RAM がまだ利用可能。速度はこのサイズで ~8–10 tokens/sec（Tensor G5 上 CPU のみ）。このユースケース向けに PocketPal AI または Maid と 7B GGUF を使用。Pixel 9 Pro 上でリアルタイム会話速度向けに Phi-4 Mini（3.8B、~14 tokens/sec）で留まってください。',
          },
          {
            q: 'これらのアプリは Snapdragon NPU を利用しますか?',
            a: 'MLC Chat のみが Snapdragon Hexagon NPU を利用し、Snapdragon 8 Elite デバイス（Galaxy S25 シリーズ、OnePlus 13）上のみ。他の 5 つのアプリは CPU または Vulkan GPU を使用。Hexagon NPU は同じハードウェア上で CPU パスと比較して MLC Chat で 2–3 倍速い推論を提供。',
          },
          {
            q: 'Samsung Galaxy S22 上でローカル AI を実行できますか?',
            a: 'はい、8 GB RAM バリアント上。Galaxy S22 は Snapdragon 8 Gen 1（またはいくつかの地域で Exynos 2200）を実行。PocketPal AI と Maid は Qwen3 1.7B または SmolLM2 1.7B で ~8–12 tokens/sec で動作。Phi-4 Mini（3.8B）は 8 GB RAM では可能ですが タイト—最初に他のアプリを閉じてください。MLC NPU パスは Snapdragon 8 Gen 1 上で検証されていません。',
          },
          {
            q: 'ローカル AI 向けに自分のフォンをルート化する必要がありますか?',
            a: 'いいえ。このガイド内の 6 つのアプリはすべてルート化されていない Android フォンで機能。Termux は F-Droid APK 向けに「不明なソースからのインストール」を有効化が必要ですが、これはルート化ではありません。Root はファイルマネージャーからアプリプライベートストレージディレクトリへのアクセスのみに関連—推論には必要なし。',
          },
          {
            q: 'これらのアプリを Termux で使用できますか?',
            a: 'Ollama via Termux はその独自の完全セットアップ—Termux 内部に Ollama をインストール、Termux ターミナル経由で相互作用。他の 5 つのアプリ（MLC Chat、Maid、Layla、Private AI、PocketPal AI）は Termux と相互作用しない自立 Android アプリ。パワーユーザーは両方を実行：API アクセス向けに Termux 内 Ollama、ポーランド済みチャット UI 向けに PocketPal AI。',
          },
          {
            q: 'Android バックグラウンド制限をどう処理しますか?',
            a: 'バックグラウンド制限はローカル LLM Android アプリに対する最大の信頼性問題。PocketPal AI と Maid は FOREGROUND_SERVICE 権限をリクエスト、バックグラウンド・キルに対して耐性をさせます。Ollama via Termux は Samsung と OnePlus バックグラウンド・キルポリシーに影響可能、Termux がバッテリー最適化設定で明示的にホワイトリストされない限り。Pixel 上でバックグラウンド動作はより予測可能。Samsung One UI 上でバッテリー最適化 → スリープアプリ内でローカル LLM アプリを手動でホワイトリスト。',
          },
          {
            q: '他のアプリにローカル AI 出力を共有できますか?',
            a: 'はい、任意のアプリから—AI 応答をコピー、どこにでも ペースト。リバース方向（他のアプリから AI へテキストを送信）向けに、2026 年 5 月時点で PocketPal AI と Layla のみが Android シェアシートで表示。',
          },
          {
            q: 'これらのアプリは Android Auto をサポートしていますか?',
            a: 'いいえ。6 つのアプリのいずれも 2026 年 5 月時点で Android Auto をサポート。Android Auto は運転中に実行可能な機能を制限し、ローカル LLM アプリのいずれも認証向けに必要な Auto 互換インターフェース構築していません。',
          },
          {
            q: 'どのアプリがモデルストレージを最も良く処理しますか?',
            a: 'PocketPal AI がモデルストレージを最も優雅に処理—アプリ内からの Hugging Face に直接統合、Android ストレージパーティション分割を正しく処理、モデル管理 UI を提供。Maid はファイルシステム経由で手動 GGUF ファイル管理を望むユーザーのために最良。MLC Chat はプロプライエタリコンパイルされたモデルフォーマット使用、他のアプリへ非ポータブル。',
          },
          {
            q: '複数のモデルを同時に実行できますか?',
            a: 'デバイスが両方のモデル + Android OS オーバーヘッド向けに十分 RAM を持つ場合のみ。16 GB Pixel 9 Pro 上：2 つの Phi-4 Mini モデル（各 2.7 GB）はオペレーティングシステム向けに ~10 GB を残す—技術的に実行可能ですが非常にタイト。実際、1 つを閉じてから他を開いてください。Ollama via Termux は単一の `ollama serve` プロセスでモデル切り替えサポート、各モデルを一度にロード。',
          },
          {
            q: 'Android 上のローカル LLM アプリで日本の法律を考える必要がありますか?',
            a: 'Android 上でのローカル推論の場合、法的考慮は限定的です—データはデバイスを離れません。日本の「個人情報保護の方針」では、データ処理にはローカルで実行されるため、あなたの Android フォン上でサーバーが外に何も送信せずに日本の「個人情報保護の方針」に既に準拠。リモートデータ転送なし、サードパーティアクセスなし。備考：なお権限管理は責務残る（例：アプリが連絡先リストを読む場合、ユーザーに開示する必要）。最小限の権限を持つ Maid と Private AI のようなアプリはこのリスク削減。',
          },
        ],
      },
      countrySpecific: {
        id: 'country-specific-ja',
        title: '日本のAndroidユーザー向け：Play Store対応・日本語UI・PocketPal AI詳細ガイド',
        content: [
          'GSCデータでは「/ja/power-local-llm/best-local-llm-apps-android-2026」が4.98%のCTRを記録しており、これはサイト全体でJAパスの中でも特に高い数値です。日本のAndroid市場は韓国・中国製スマートフォン（Galaxy、Xperia、Pixel）が主流で、Snapdragon 8 Eliteを搭載した端末が普及しています。',
          'PocketPal AIは日本語UIに対応しており（英語UIだが日本語入力・出力を完全サポート）、Google Play Storeから直接インストール可能です。日本のPlayストアではすべての主要アプリが利用可能で、地域制限はありません。',
        ],
        items: [
          '**日本のPlayストア対応状況：** MLC Chat、PocketPal AI、Layla、Private AIはすべて日本のGoogle Play Storeで利用可能。Maidはメインがんでも扱いFですが、F-Droidも日本からアクセス可能。Termuxは日本のPlayストアでも検索可能（F-Droid版推奨）。',
          '**日本語入力とモデル選択：** Qwen3 1.7Bは日本語入出力に優れ、4GB RAM端末でも動作可能。日本語の漢字・ひらがな・カタカナ混在テキストでの精度はQwen3がPhi-4 MiniやLlama 3.2 3Bより高い。日本語でのコード補完用途には7Bモデル（Pixel 9 Pro 16GB等）が推奨。',
          '**PocketPal AIの日本語ワークフロー：** Hugging Face連携でQwen3モデルを直接ダウンロード可能。日本語システムプロンプト（「日本語で答えてください」）をアプリ内設定で保存できる。シェアシート対応なので、Webブラウザやメモアプリからテキストを共有して推論可能。',
          '**個人情報保護法との整合性：** 2022年改正個人情報保護法（PIPA）では、個人データの外部送信に原則として同意が必要。ローカルLLMはデータをデバイス外に送信しないため、個人情報を含む文書（名前、住所、医療情報）の処理に最も安全な選択肢。MaidとPrivate AIは特に権限が少なく、PIPAコンプライアンスの観点で推奨。',
          '**日本のコミュニティリソース：** Zennの「ローカルLLM Android」タグ、QiitaのMLC Chat記事、AndroidアプリをTermux経由でOllamaと接続するチュートリアル（日本語）が多数。Galaxy S25 Ultra + MLC Chat + Qwen3 1.7BのベンチマークはXやDiscordの「ローカルLLM日本語ユーザー会」で共有されている。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連する読み物',
        items: [
          '[2026年 iPhone 向けベスト・ローカル AI アプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026)—iOS 相当物：LLM Farm、Pocket Paladin、iPhone 推論ランドスケープ。',
          '[タブレットで AI を実行する方法：iPad と Android（2026）](/ja/power-local-llm/run-ai-on-tablet-ipad-android)—より大きい画面向けにローカル vs. リモート接続、タブレット固有推奨。',
          '[モバイル LLM モデル：Phi-4 Mini、Gemma、SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm)—モバイル推論向けモデル選択ガイド：4–16 GB フォンにどのモデルが適合。',
          '[ローカル AI ソフトウェアディレクトリ 2026](/ja/power-local-llm/local-llm-software-directory-2026)—完全なアプリディレクトリ、デスクトップアプリ、サーバーバックエンド、すべてのプラットフォーム向けフロントエンド含む。',
          '[Windows、Mac、Linux 向けシンプレスト・ローカル AI アプリ](/ja/power-local-llm/easiest-local-ai-app-windows-mac-linux)—デスクトップ相当物：使いやすさによるアプリ比較向け同じ哲学。',
          '[2026年ベスト・ローカル LLM](/ja/local-llms/best-local-llms-2026)—モデル認証記事：ハードウェア構成全体で使用する open-weight モデル。',
          '[ChatGPT Plusのオープンソース代替](/ja/prompt-bites/best-open-source-alternatives-to-chatgpt-plus)—Open WebUI、LibreChat、Jan：ChatGPT Plusとの機能比較。',
          '[コーディング向けベストQwenモデル](/ja/prompt-bites/best-qwen-model-for-coding)—Termux + OllamaでAndroid上のQwen3-Coder：実現可能性とセットアップ。',
          '[Android LLM アプリのクイックおすすめ](/ja/prompt-bites/best-local-llm-apps-android)—どのアプリをインストールすべきか素早く知りたい方向けの簡潔な比較（ベンチマークなし）。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026年 Android 向けベスト・ローカル LLM アプリ：6つのアプリを実スマートフォンで比較',
      datePublished: '2026-05-08',
      dateModified: '2026-06-14',
      url: 'https://www.promptquorum.com/ja/power-local-llm/best-local-llm-apps-android-2026',
      inLanguage: 'ja',
      image: 'https://www.promptquorum.com/api/og/best-local-llm-apps-android-2026?lang=ja',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        url: 'https://www.promptquorum.com/about',
        sameAs: [
          'https://www.linkedin.com/in/hanskuepper/',
          'https://x.com/HansKuepperAPPs',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Intermediate',
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-06-14',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '2026年安卓本地LLM最佳应用：6款应用对比',
    seoTitle: 'Android 本地 LLM 运行 2026：速度、NPU 与配置深度指南',
    intro:
      '2026年有6款安卓应用可完全离线运行大型语言模型：MLC Chat、Maid、Layla、Ollama via Termux、Private AI和PocketPal AI。它们在NPU利用、模型库广度和安卓集成方面各不相同——最佳选择取决于您是想要速度（MLC Chat搭配Hexagon NPU）、最大模型灵活性（Ollama via Termux），还是打磨精细的原生UI（Layla或PocketPal AI）。本指南在Samsung Galaxy S25 Ultra（Snapdragon 8 Elite）、Pixel 9 Pro（Tensor G5）和OnePlus 13（Snapdragon 8 Elite）上对所有6款应用进行对比，涵盖Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5推理、安卓碎片化现实以及每款应用如何处理存储、后台限制和安卓分享表。',
    metaDescription:
      'Android 上本地 LLM 的实际运行情况 2026 — S25 Ultra、Pixel 9 Pro、OnePlus 13 真机基准测试。NPU 速度、GGUF 支持、RAM 限制。6 款应用对比。',
    twitterDescription:
      '2026年安卓本地AI：MLC Chat搭配Snapdragon Hexagon NPU达到约40 token/秒。Maid提供完整GGUF访问。Ollama via Termux是高级用户路径。在S25 Ultra、Pixel 9 Pro、OnePlus 13上完整的6应用对比。',
    current_models_mentioned: ['Phi-4 Mini', 'Qwen3 1.7B', 'Qwen3 4B', 'Llama 3.2 3B', 'Gemma 3 4B', 'Gemma 3 1B', 'SmolLM2 1.7B'],
    current_hardware_mentioned: ['Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)', 'Pixel 9 Pro (Tensor G5)', 'OnePlus 13 (Snapdragon 8 Elite)', 'Snapdragon 8 Elite Hexagon NPU', 'Google Tensor G5', 'MediaTek Dimensity 9400 APU'],
    audience: '想在手机上本地运行AI模型的安卓用户 — 无云API、无订阅、无数据离线发送。涵盖从安装首个应用的初学者到构建Termux + Ollama管道的高级用户。',
    readTime: '阅读约14分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '安卓本地LLM应用',
    targetKeywords: ['2026年安卓最佳本地llm应用', '在安卓手机运行本地ai', 'mlc chat安卓评测', 'ollama安卓termux', 'pocketpal ai安卓', '离线ai安卓无网络'],
    leadAnswerBlock: '**MLC Chat是2026年最快的安卓本地LLM应用 — 它在Galaxy S25 Ultra和OnePlus 13上使用Snapdragon Hexagon NPU达到约40 token/秒（Qwen3 1.7B），相比同一设备上仅CPU应用的8-12 token/秒。PocketPal AI是大多数用户的最佳平衡：支持任何GGUF模型、精美原生UI、正确处理安卓存储。Ollama via Termux是高级用户路径 — 完整的Ollama生态（所有模型、OpenAI兼容API、Tool Use）在手机上，代价是终端设置。Maid是开源纯粹主义者之选：F-Droid分发、完全离线、无Play Store依赖、直接GGUF导入。Layla是初学者友好选项，拥有精选模型选择。Private AI专注端到端隐私，拥有简单、非技术性设置。安卓用户有关键优势超过iPhone：侧载、Termux和从F-Droid安装的能力提供iOS上根本不可用的工具访问。**',
    quickAnswerTop: { zh: { question: '2026年在安卓上运行本地AI的最佳应用是什么？', answer: 'MLC Chat在Snapdragon 8 Elite设备（S25 Ultra、OnePlus 13）上速度最快，感谢Hexagon NPU支持 — 在Qwen3 1.7B上达到约40 token/秒。PocketPal AI是大多数用户的最佳总体选择：广泛GGUF支持、精美UI和正确的安卓存储处理。Ollama via Termux提供完整Ollama生态，包括Tool Use和OpenAI兼容API。在Pixel 9 Pro（Tensor G5）上，NPU支持对第三方应用有限 — MLC Chat和PocketPal AI都在那里仅CPU运行，在Phi-4 Mini上提供约12-18 token/秒。', bullets: ['MLC Chat — 在Snapdragon 8 Elite上最快通过Hexagon NPU：约40 token/秒（Qwen3 1.7B）在Galaxy S25 Ultra上。', 'PocketPal AI — 最佳总体：GGUF支持、精美UI、正确安卓存储、Hugging Face集成。', 'Ollama via Termux — 最适合高级用户：完整Ollama生态、Tool Use、设备上OpenAI兼容API。', 'Maid — 最佳开源选择：F-Droid分发、无Google Play依赖、通过文件管理器直接GGUF导入。', 'Layla — 最适合初学者：精选模型下载、简单入门、不需终端。', 'Private AI — 最适合隐私优先用户：无网络遥测、最少权限、简单设置。', '在Tensor G5（Pixel 9）上：NPU未暴露给第三方应用 — 所有6款应用仅CPU运行，在Phi-4 Mini上提供10-18 token/秒。', '安卓优势：Termux、F-Droid和侧载解锁iOS上无同等物的工具 — Ollama via Termux在iPhone上不可能。'], updatedDate: '2026-05-08' } },
    toc: [{ label: '关键要点', anchor: '#key-takeaways' }, { label: '快速事实', anchor: '#quick-facts' }, { label: '对比表', anchor: '#comparison-table' }, { label: '应选择哪款应用？', anchor: '#which-app' }, { label: '芯片组对比：Snapdragon vs MediaTek vs Tensor', anchor: '#chipsets' }, { label: 'MLC Chat', anchor: '#mlc-chat' }, { label: 'Maid', anchor: '#maid' }, { label: 'Layla', anchor: '#layla' }, { label: 'Ollama via Termux', anchor: '#ollama-termux' }, { label: 'Private AI', anchor: '#private-ai' }, { label: 'PocketPal AI', anchor: '#pocketpal-ai' }, { label: '安卓碎片化：存储、RAM和后台限制', anchor: '#android-fragmentation' }, { label: '安卓分享表集成', anchor: '#share-sheet' }, { label: '侧载和Termux路径', anchor: '#sideload-paths' }, { label: '常见错误', anchor: '#common-mistakes' }, { label: '源', anchor: '#sources' }, { label: '常见问题', anchor: '#faq' }, { label: '相关阅读', anchor: '#related-reading' }],
    gammaEmbedUrl: '/presentations/best-local-llm-apps-android-2026-static.html',
    gammaDescription: '幻灯片涵盖：在3部真实手机（Galaxy S25 Ultra、Pixel 9 Pro、OnePlus 13）上对比的6款Android本地LLM应用，速度对比表（MLC Chat ~40 token/秒，Hexagon NPU），芯片组对比（Snapdragon 8 Elite vs Tensor G5 vs MediaTek Dimensity 9400），用例应用选择指南，Android后台限制解决方案和6个常见错误。将PDF下载为Android本地AI参考卡。',
    sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['**MLC Chat是Snapdragon 8 Elite上的速度领导者。** Hexagon NPU在Galaxy S25 Ultra上为Qwen3 1.7B提供约40 token/秒，为Phi-4 Mini提供约22 token/秒 — 比同一硬件上仅CPU应用快3-4倍。', '**PocketPal AI是大多数安卓用户的最佳全能之选。** 它支持完整GGUF生态，与Hugging Face集成以下载模型，正确处理安卓存储，在6款应用中拥有最精美的移动原生UI。', '**Ollama via Termux是安卓上访问完整OpenAI兼容本地API的唯一路径。** 这对想要Tool Use、函数调用或连接本地应用到手机模型的高级用户重要。', '**Tensor G5（Pixel 9 Pro）不向第三方应用暴露其NPU。** 所有6款应用在Pixel 9 Pro上仅CPU运行，在Phi-4 Mini上提供10-18 token/秒 — 比等效Snapdragon 8 Elite结果更慢。', '**Maid是F-Droid / de-Googled选择。** 无Play Store依赖、无需Google账户，从文件管理器直接GGUF导入。对避免Google服务的安卓用户是最佳选择。', '**安卓后台限制是最大的可用性问题。** 安卓在大多数OEM ROM（特别是Samsung、OnePlus和Xiaomi）上积极杀死后台进程。执行活跃推理的应用需在最近应用栏中锁定或在电池优化设置中配置以避免生成中断。', '**模型存储是第二大安卓问题。** 每个GGUF模型是1-8 GB。安卓在内部存储分区之间的拆分意味着模型必须存储在应用专用目录或特定配置位置 — 对大多数应用不在"下载"中。', '**安卓优势是真实的：Termux和侧载解锁无iOS同等物的工具。** Ollama via Termux在iPhone上不可能。F-Droid应用和ADB侧载给安卓用户访问Google Play可能不携带的应用。'] }, quickFacts: { id: 'quick-facts', title: '快速事实', items: ['**测试设备**：Samsung Galaxy S25 Ultra（Snapdragon 8 Elite、12 GB RAM）、Google Pixel 9 Pro（Tensor G5、16 GB RAM）、OnePlus 13（Snapdragon 8 Elite、16 GB RAM）。', '**测试的芯片组系列**：Snapdragon 8 Elite（Hexagon NPU）、Tensor G5（NPU未暴露给第三方应用）、MediaTek Dimensity 9400（APU规格覆盖；不是测试设备）。', '**12 GB安卓的最佳模型**：Phi-4 Mini（3.8B、Q4_K_M时约2.7 GB）— 在所有6款应用上在所有3台测试手机上运行。', '**8 GB安卓的最佳模型**：Qwen3 1.7B或SmolLM2 1.7B — 在所有应用上运行；对于非常受限的设备使用Gemma 3 1B。', '**3B模型的最少RAM**：6 GB设备RAM。低于6 GB，坚持1.7B模型。', '**S25 Ultra上的Token/秒（Phi-4 Mini）**：MLC Chat约22 token/秒（NPU）、PocketPal AI约16 token/秒（CPU/Vulkan）、Maid约18 token/秒（Vulkan）、Layla约14 token/秒（CPU）、Private AI约13 token/秒（CPU）、Ollama Termux约10 token/秒（CPU）。', '**Play Store vs F-Droid**：MLC Chat、Layla、PocketPal AI和Private AI在Google Play上。Maid主要在F-Droid上。Ollama via Termux需要Termux来自F-Droid。', '**分享表集成（安卓）**：截至2026年5月，仅PocketPal AI和Layla原生处理安卓分享表输入。'] }, comparisonTable: { id: 'comparison-table', title: '对比表', content: '**Token速度在Samsung Galaxy S25 Ultra（Snapdragon 8 Elite、12 GB RAM）上测量，运行Phi-4 Mini在Q4_K_M量化。** NPU利用因应用而异 — MLC Chat是截至2026年5月唯一拥有验证Hexagon NPU支持的应用。',           image: '/images/best-local-llm-apps-android-2026-speed-comparison-zh.svg',
          imageCaption: 'MLC Chat通过骁龙Hexagon NPU在Phi-4 Mini上达到22 tok/秒,是所测试的6款Android应用中最快的。',
snippetBlocks: [{ type: 'one-sentence', text: '2026年MLC Chat因Snapdragon Hexagon NPU支持领导安卓本地LLM速度，在Galaxy S25 Ultra上为Phi-4 Mini达到约22 token/秒，为Qwen3 1.7B达到约40 token/秒 — 比同一硬件上纯CPU替代品快2-3倍。' }], columns: ['应用', 'Token/秒（S25 Ultra、Phi-4 Mini）', 'NPU支持', '最适用于'], rows: [{ '应用': 'MLC Chat', 'Token/秒（S25 Ultra、Phi-4 Mini）': '约22 token/秒（NPU路径）', 'NPU支持': '是 — Snapdragon 8 Elite上Hexagon NPU', '最适用于': 'Snapdragon手机上的速度优先用户' }, { '应用': 'Maid', 'Token/秒（S25 Ultra、Phi-4 Mini）': '约18 token/秒（Vulkan GPU）', 'NPU支持': '部分 — Vulkan GPU，无专用NPU路径', '最适用于': '开源 / F-Droid用户，完整GGUF访问' }, { '应用': 'PocketPal AI', 'Token/秒（S25 Ultra、Phi-4 Mini）': '约16 token/秒（CPU/Vulkan）', 'NPU支持': '否 — 纯CPU或Vulkan', '最适用于': '完整GGUF支持的最佳平衡UI' }, { '应用': 'Layla', 'Token/秒（S25 Ultra、Phi-4 Mini）': '约14 token/秒（CPU）', 'NPU支持': '否 — 纯CPU', '最适用于': '初学者友好、精选模型库' }, { '应用': 'Ollama via Termux', 'Token/秒（S25 Ultra、Phi-4 Mini）': '约10 token/秒（CPU）', 'NPU支持': '否 — 纯CPU', '最适用于': '高级用户、完整生态、Tool Use' }, { '应用': 'Private AI', 'Token/秒（S25 Ultra、Phi-4 Mini）': '约13 token/秒（CPU）', 'NPU支持': '否 — 纯CPU', '最适用于': '隐私优先用户、最少权限' }] }, whichApp: { id: 'which-app', title: '应选择哪款应用？', content: '各有6款应用针对不同需求而优化。选择取决于您的硬件、您最关心的特性（速度、隐私、灵活性）以及您的技术舒适度。', items: ['**拥有S25 Ultra或OnePlus 13且想要最大速度？** → MLC Chat。Hexagon NPU是2026年移动设备上最强的推理加速器。在Qwen3 1.7B上，您获得约40 token/秒对纯CPU的约8 token/秒 — 这对流畅对话来说是革命性的差异。', '**想要任何安卓手机上的最佳总体应用？** → PocketPal AI。完整GGUF支持、精美UI、正确的内存处理、Hugging Face集成。在S25 Ultra（约18 token/秒CPU）、Pixel 9 Pro（约15 token/秒）、OnePlus 13（约18 token/秒）上工作。不是最快，但最可靠。', '**您是需要Tool Use、函数调用或OpenAI兼容本地API的高级用户？** → Ollama via Termux。唯一的选择。安卓上没有其他应用为连接外部客户端提供OpenAI兼容API。值得投入终端设置。', '**避免Google Play Store和Google服务？** → Maid。通过F-Droid分发、无需Google账户、从文件管理器直接GGUF导入。不是最快但最自由。', '**本地AI初学者想要简洁？** → Layla。清晰的UI、精选的模型、引导式入门。无需终端配置。为简洁牺牲灵活性。', '**主要关心隐私愿意牺牲速度？** → Private AI。无遥测、最少权限、非技术性设置。比MLC Chat或PocketPal慢，但您完全知道您的数据发生了什么。'] }, chipsets: { id: 'chipsets', title: '芯片组对比：Snapdragon vs MediaTek vs Tensor', content: '**Snapdragon 8 Elite是2026年安卓上本地LLM推理最强大的芯片组 — 其Hexagon NPU是唯一在MLC Chat中验证支持的移动NPU。** Tensor G5和MediaTek Dimensity 9400仅在CPU或Vulkan-GPU模式中运行所有6款应用。',           image: '/images/best-local-llm-apps-android-2026-chipset-npu-zh.svg',
          imageCaption: '骁龙8至尊版开放的Hexagon NPU可让Phi-4 Mini达到22 tok/秒;而Tensor G5仅CPU路径只能达到10-18。',
snippetBlocks: [{ type: 'one-sentence', text: 'Snapdragon 8 Elite的Hexagon NPU在2026年安卓上提供2-3倍比仅CPU执行更快的推理，但仅MLC Chat暴露这个优势 — 所有其他应用在所有芯片组上回退到CPU或Vulkan GPU。' }], columns: ['芯片组', '找到于', '第三方应用的NPU', '最佳推理路径', 'Phi-4 Mini速度（est.）'], rows: [{ '芯片组': 'Snapdragon 8 Elite', '找到于': 'Galaxy S25系列、OnePlus 13、Xiaomi 15 Pro', '第三方应用的NPU': '是 — Hexagon NPU通过MLCC（仅MLC Chat）', '最佳推理路径': 'Hexagon NPU（MLC Chat）或Vulkan GPU（Maid、PocketPal）', 'Phi-4 Mini速度（est.）': '约22 token/秒（NPU）/ 约16-18 token/秒（Vulkan）' }, { '芯片组': 'Google Tensor G5', '找到于': 'Pixel 9系列', '第三方应用的NPU': '否 — Google为Google应用保留NPU', '最佳推理路径': 'CPU（所有应用仅CPU运行）', 'Phi-4 Mini速度（est.）': '约12-15 token/秒（CPU）' }, { '芯片组': 'MediaTek Dimensity 9400', '找到于': 'Xiaomi 15 Ultra、Oppo Find X8 Pro、Vivo X200 Pro', '第三方应用的NPU': '有限 — MediaTek APU通过实验性NNAPI路径访问', '最佳推理路径': 'Vulkan GPU（最佳第三方选项）；NNAPI实验性', 'Phi-4 Mini速度（est.）': '约14-18 token/秒（Vulkan）/ 约12 token/秒（CPU）' }, { '芯片组': 'Snapdragon 8 Gen 3', '找到于': 'Galaxy S24系列、OnePlus 12', '第三方应用的NPU': '部分 — Hexagon更旧一代、MLC Chat支持有限', '最佳推理路径': 'Vulkan GPU或CPU', 'Phi-4 Mini速度（est.）': '约12-15 token/秒（Vulkan）' }], callouts: [{ type: 'warning', text: '不要假设Google的Tensor G5 NPU为本地LLM应用带来好处。Google的NPU为第一方ML服务保留（Google翻译、记录器、照片处理）。第三方推理应用（包括本指南中所有6款）在每部Pixel手机上仅CPU运行。Pixel 9 Pro的16 GB RAM是其真正优势 — 更多更大模型的空间，不是更快的推理。' }, { type: 'tip', text: 'MediaTek Dimensity 9400手机从Maid和PocketPal AI中的Vulkan GPU支持受益。如果您有Xiaomi 15 Ultra或Oppo Find X8 Pro，在应用设置中启用Vulkan以获得比CPU路径快30-40%。' }] }, mlcChat: { id: 'mlc-chat', title: 'MLC Chat', content: '**MLC Chat（机器学习编译聊天）是2026年Snapdragon 8 Elite设备上最快的安卓本地LLM应用。** 由MLC AI团队开发，它使用MLCC框架编译模型，该框架直接处理Snapdragon Hexagon NPU — 对使用llama.cpp或通用Vulkan后端的应用不可用的优化路径。', items: ['**模型库**：精选 — MLC Chat提供为移动优化的一组预编译模型（Qwen3 1.7B、Phi-4 Mini、Gemma 3 1B、Llama 3.2 1B）。自定义模型导入可用但需要MLC编译工具链 — 不是一个休闲的单击过程。', '**NPU利用**：在Snapdragon 8 Elite上验证的Hexagon NPU支持（Galaxy S25 Ultra、OnePlus 13）。在S25 Ultra上为Qwen3 1.7B基准测试约40 token/秒，为Phi-4 Mini约22 token/秒 — 相比同一硬件上仅CPU的约12-16 token/秒。', '**UI质量**：清洁、功能性、最少。仅聊天界面 — 无系统提示编辑器、无角色卡、无多模型切换。适合专注聊天任务，不是高级用户配置。', '**安卓分享表**：截至2026年5月不支持。无法通过标准分享表从其他应用接收文本。', '**离线可靠性**：优秀。一旦模型编译并缓存，MLC Chat运行零网络调用。相比一些llama.cpp基础应用，后台进程稳定。', '**存储**：MLC Chat在其专用应用目录中存储编译模型权重（Phi-4 Mini为Snapdragon编译约3 GB）。这些不可移植到其他应用 — 相比基于GGUF的应用的限制。', '**安装路径**：Google Play Store。源代码在[github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)。'], callouts: [{ type: 'warning', text: 'MLC Chat的模型库是精选和编译的。如果您需要官方库中没有的模型（例如，微调的Mistral Small或特定领域模型），MLC Chat无法帮助 — 对任意GGUF支持使用PocketPal AI或Maid。MLC Chat是速度工具，不是灵活性工具。' }] }, maid: { id: 'maid', title: 'Maid', content: '**Maid是精心制作的开源安卓应用，通过F-Droid分发，完全离线，无Google Play依赖。** 它支持任何GGUF格式模型，通过文件管理器直接导入，并运行所有推理完全在设备上。对避免Google服务的用户是首选。', items: ['**模型库**：完全自定义 — Maid加载任何GGUF文件。通过从文件管理器拖放或手动选择来导入。比任何其他应用更大的模型选择。', '**分发**：F-Droid主要（开源应用库），无Google Play。无需Google账户安装或更新。', '**UI质量**：极简但功能完整。聊天界面、模型选择、简单设置。没有闪耀但做其工作。', '**安卓分享表**：不支持。无法从其他应用接收文本。', '**离线**：完全。Maid不调用任何外部API或网络服务。', '**社区**：活跃，但比Ollama小。GitHub上的好支持。', '**安装路径**：F-Droid（推荐）或GitHub版本。Google Play上也可用但由于名称混淆（多个Maid应用）不推荐。'], callouts: [{ type: 'tip', text: '如果您进行F-Droid / de-Googled设置，Maid是您唯一的本地LLM选择。它与所有其他F-Droid应用（K-9 Mail、Fennec、Briar）完全兼容，无任何Google库。' }] }, layla: { id: 'layla', title: 'Layla', content: '**Layla是初学者友好的安卓本地LLM应用，拥有精选的模型、简单入门，完全离线推理。** 对想要在手机上运行AI但没有时间学习Ollama或Termux的用户，Layla提供"装即用"体验。', items: ['**模型库**：精选，但范围有限 — Llama、Mistral、Phi系列。比MLC Chat多，但比任意GGUF（PocketPal、Maid）少。', '**安装**：简单。Google Play上一键，自动处理模型下载，无终端设置。', '**UI质量**：精美、现代、直观。最喜欢初学者的设计。', '**安卓分享表**：支持。您可以从其他应用分享文本进行推理。', '**离线**：完全。一旦模型下载，Layla运行零网络。', '**权限**：最少。仅存储访问和网络（仅用于初始模型下载）。', '**速度**：中等。在S25 Ultra上约14 token/秒（CPU）。比MLC Chat慢但足够对话。'], callouts: [{ type: 'tip', text: '如果您有12GB+ RAM和Snapdragon或Tensor手机，并且想要最简单的入门路径，安装Layla。它是唯一在不知道quantization或GGUF的情况下正常工作的应用。' }] }, ollamaTermux: { id: 'ollama-termux', title: 'Ollama via Termux', content: '**Ollama via Termux将完整Ollama生态（所有模型、OpenAI兼容API、Tool Use、后台服务）带到任何安卓设备。** 需要终端投资，但这是在安卓上获得完整Ollama能力的唯一方式。', items: ['**设置**：不简单。安装Termux（F-Droid或Play Store），运行pkg install ollama，启动ollama serve。需要〜10分钟和终端舒适。', '**模型库**：完整 — Ollama提供的任何模型。Llama、Mistral、Phi、custom / fine-tuned、任何GGUF。', '**API访问**：完整OpenAI兼容API在http://localhost:11434。连接外部客户端、Tool Use、函数调用。安卓上唯一的应用提供这个。', '**性能**：中等。CPU仅，约10 token/秒在S25 Ultra上（Phi-4 Mini）。比MLC Chat或PocketPal慢但足够后台运行。', '**后台运行**：优秀。Termux可以在后台运行长达数小时，正确处理电池优化白名单。', '**离线**：完全。', '**社区**：大，成熟。Ollama拥有最好的安卓终端支持。'], callouts: [{ type: 'warning', text: 'Ollama via Termux需要Termux有效运行。如果您删除Termux或安卓杀死后台进程，Ollama停止。配置电池优化以解决：设置 > 电池 > 电池优化 > 排除Termux。在Samsung上：设置 > 设备保护 > 电池 > 资源管理 > 排除Termux。' }, { type: 'tip', text: '一旦Ollama在后台运行，使用任何支持OpenAI API的客户端。连接来自您的Pixel或S25 Ultra的多个应用到同一Ollama后端。这不可能与MLC Chat、PocketPal或Maid。' }] }, privateAI: { id: 'private-ai', title: 'Private AI', content: '**Private AI是专注隐私的安卓本地LLM应用，最少权限、无遥测、非技术性设置。** 对用户担心数据监听、网络跟踪或云依赖的用户。', items: ['**隐私承诺**：明确。无网络调用、无遥测、无Google Play Services依赖。代码审计对隐私透明。', '**模型库**：中等。预加载小模型，支持GGUF导入。不如Maid灵活但比MLC Chat多。', '**安装**：Play Store或F-Droid（两个版本）。无广告、无跟踪。', '**性能**：慢。约13 token/秒在S25 Ultra上（CPU）。交换速度以获得隐私。', '**权限**：最少在所有应用中。仅存储访问。无网络、无Google Play。', '**用户群**：专业人士（律师、医生）和隐私倡导者。'], callouts: [{ type: 'tip', text: '如果您在受监管行业（法律、医疗、金融）并且需要离线本地AI不发送任何数据，Private AI是明确的选择。性能权衡是值得的。' }] }, pocketpalAI: { id: 'pocketpal-ai', title: 'PocketPal AI', content: '**PocketPal AI是2026年大多数安卓用户的最佳平衡 — 完整GGUF支持、精美UI、Hugging Face集成和正确的内存处理。** 它不是最快（那是MLC Chat on Snapdragon），也不是最自由（那是Maid / Ollama），但最可靠和最抛光。', items: ['**模型库**：完整GGUF支持。直接Hugging Face导入，或通过GGUF URL/文件加载。模型选择比任何应用（除Ollama）大。', '**UI质量**：最好的。精美、现代、响应式。整个应用的一致设计。', '**Hugging Face集成**：独特。直接从Hugging Face浏览和下载模型，无需文件管理器。', '**安卓分享表**：支持。从其他应用分享文本。', '**性能**：中等。约16-18 token/秒在S25 Ultra上（CPU/Vulkan）。不是MLC Chat（NPU）的40但对话足够快。', '**离线**：完全。', '**社区**：增长中、活跃。GitHub上好的支持。', '**成本**：免费应用，可选订阅以获得云同步（但本地推理永远免费）。'], callouts: [{ type: 'tip', text: '如果您有Pixel 9 Pro（Tensor G5）和想要最快的非NPU应用，PocketPal AI是您的选择。它在所有Tensor设备上以相同速度运行，无需NPU依赖。' }] }, androidFragmentation: { id: 'android-fragmentation', title: '安卓碎片化：存储、RAM和后台限制', content: '安卓的最大挑战不是应用质量，而是碎片化。不同的OEM、Android版本、设备类别和电池优化设置造成您的应用在设备A上运行完全但在设备B上停止的情况。本地LLM应用特别受影响：它们需要持续的CPU，大量RAM，和持续的存储。', items: ['**后台杀死（最大问题）**：Samsung、OnePlus和Xiaomi所有积极杀死在后台运行的应用，以节省电池。如果您正在运行推理，安卓可能会终止应用，停止生成。修复：在recent tray中锁定应用，排除电池优化（设置 > 电池 > 电池优化 > 排除应用）。在Samsung上：设置 > 设备保护 > 电池 > 资源管理 > 排除。', '**存储碎片化（第二大问题）**：Android 11+强制分区存储。模型无法存储在Downloads中对大多数应用。必须进入应用专用目录（/data/data/[app]）。每个应用有其隔离的存储，所以2个GB模型无法在2个应用间共享。解决方法：使用Termux获得完整文件系统访问，或使用支持外部存储的应用（Maid）。', '**RAM约束**：8GB安卓设备无法同时运行3B + 系统应用。6GB可用RAM（来自8GB宣传）推荐使用1.7B-3B模型。12GB+ 设备可以3B-7B。检查设置 > 关于手机 > 可用存储以查看实际可用。', '**NPU / GPU碎片化**：Snapdragon Hexagon NPU与Tensor G5与MediaTek APU完全不同。仅MLC Chat暴露Hexagon。Tensor / MediaTek仅CPU可用。支持因OEM而异。', '**Android版本差异**：Android 12+ 具有更好的隔离但限制更多。Android 11有更多自由但较弱的后台管理。没有完美。检查应用要求。'], callouts: [{ type: 'warning', text: '如果您有Samsung手机并且应用在推理中停止，问题几乎总是Samsung的Device Care / 资源管理器。转到设置 > 设备保护 > 电池 > 资源管理，排除您的应用。这也适用于OnePlus（设置 > 电池 > 后台管理）和Xiaomi（设置 > 应用 > 权限 > 后台限制）。' }] }, shareSheet: { id: 'share-sheet', title: '安卓分享表集成', content: '安卓分享表让您从任何应用（浏览器、邮件、笔记）分享文本到您选择的应用处理。对本地LLM应用，这意味着：突出网页上的文本，点击分享，选择您的应用，接收推理结果。但并非所有应用都支持这个。', items: ['**支持分享表的**：PocketPal AI、Layla。您可以分享任何文本进行推理。', '**不支持**：MLC Chat、Maid、Ollama via Termux、Private AI。分享表从这些应用中打开它们但忽略分享的文本。', '**为什么是不同？**：许多应用缺少分享表集成代码。对MLC Chat，这不在优先级中（应用专注NPU速度）。对Ollama Termux，它太低级了（纯后端无前端处理）。', '**解决方法**：对不支持分享表的应用，复制文本，打开应用，粘贴进聊天。稍微不方便但与速度或灵活性同样有效。'] }, sideloadPaths: { id: 'sideload-paths', title: '侧载和Termux路径', content: '不是所有本地LLM应用都在Google Play上。对F-Droid应用（Maid）或Termux / Ollama，您需要了解安卓侧载。', items: ['**Termux（侧载F-Droid）**：Termux无法在Google Play上获得（Google限制）。从F-Droid安装：访问https://f-droid.org，安装F-Droid应用，搜索Termux。F-Droid是开源应用安全的中央库。无需root或高级ADB。', '**Maid（F-Droid）**：与Termux相同。F-Droid，搜索Maid，安装。', '**Google Play应用（MLC Chat、PocketPal、Layla、Private AI）**：标准 — 打开Play Store，搜索，安装。无侧载。', '**ADB侧载（高级）**：如果您想在没有Google Play或F-Droid的情况下安装APK，使用Android调试桥（ADB）。需要：USB数据线、开发者模式（设置 > 关于 > 生成版本号7x），adb命令行工具。Run adb install app.apk。可选，对大多数用户不需要。'] }, commonMistakes: { id: 'common-mistakes', title: '常见错误', content: '基于安卓本地AI社区的数百小时测试，以下是用户最常见的陷阱以及如何避免它们。', items: ['**错误 1：在Pixel 9 Pro上假设Tensor G5加速MLC Chat。** 不，Tensor G5 NPU被保留给Google的内部Gemini。MLC Chat在Pixel上仅CPU运行，约12 token/秒。修复：在S25 Ultra或OnePlus 13上使用MLC Chat以获得NPU；在Pixel上使用PocketPal或Ollama。', '**错误 2：将3B模型放在6GB可用RAM设备上然后抱怨它冻结。** 一个3B模型（量化）需要〜3.5-4GB RAM。加上系统开销（〜1.5GB）和应用开销（〜500MB），您已经在6GB设备上已满。修复：坚持1.7B-2B模型或获得8GB+设备。', '**错误 3：在Samsung手机上安装MLC Chat然后抱怨它在〜30秒后停止。** Samsung的Device Care（资源管理器）杀死后台进程以节省电池。应用无法运行。修复：排除电池优化或锁定recent tray中的应用。设置 > 设备保护 > 电池 > 资源管理 > [应用] > 不优化。', '**错误 4：在内存不足设备上运行大型模型，期望它"将交换到存储"。** 安卓没有交换。如果模型不适合RAM，推理失败。没有回退。修复：使用较小模型或升级设备。', '**错误 5：预期分享表从所有应用工作。** 仅PocketPal和Layla支持分享表。MLC Chat、Maid、Ollama、Private AI都不支持。修复：复制/粘贴对这些应用。', '**错误 6：在纯CPU设备上安装MLC Chat并期望NPU速度。** MLC Chat NPU支持仅Snapdragon 8 Elite。Pixel / MediaTek设备仅CPU。修复：在Snapdragon上使用MLC Chat；在其他地方使用PocketPal或Ollama。', '**错误 7：在Ollama via Termux中期望tool_use或函数调用立即工作。** 您需要配置openai模式 + system提示。标准聊天无法工作。修复：使用curl或第三方客户端配置OpenAI兼容API调用（参见Ollama文档）。', '**错误 8：让所有6款应用在后台同时运行。** 安卓将杀死其中多个。应该一次仅一个。修复：使用App Switcher（最近应用）杀死您不使用的应用。'] }, sources: { id: 'sources', title: '源', content: '所有token/秒基准是：Samsung Galaxy S25 Ultra（12GB RAM、Snapdragon 8 Elite）上的原始测试结果，使用公共安卓应用（截至2026年5月）和量化模型（GGUF格式）。', items: ['[MLC Chat GitHub](https://github.com/mlc-ai/mlc-llm) — MLC AI团队官方回购。星号5.8K。', '[Ollama GitHub](https://github.com/ollama/ollama) — Ollama项目。超过8万星。', '[Ollama Termux指南](https://github.com/ollama/ollama/blob/main/docs/faq.md#running-on-android) — 官方Termux设置。', '[Hugging Face模型](https://huggingface.co/models) — 开源模型库。Maid、PocketPal、Ollama来源。', '[F-Droid](https://f-droid.org) — 开源应用存储库。Maid、Termux来源。', '[GGUF格式](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) — 量化格式规范，所有6款应用使用。'] }, faq: { id: 'faq', title: '常见问题', faqs: [{ q: '2026年5月在Samsung Galaxy S25 Ultra上最快的模型是什么？', a: 'MLC Chat + Qwen3 1.7B + Hexagon NPU = 约40 token/秒。最快的组合。纯CPU，PocketPal AI和Ollama Termux约12-18 token/秒。' }, { q: '我可以在Pixel 9 Pro（Tensor G5）上使用MLC Chat吗？', a: '可以。纯CPU运行（约12 token/秒）。Tensor G5 NPU不向第三方应用暴露。使用PocketPal AI或Ollama Termux；您将获得相似的性能。' }, { q: '运行Ollama via Termux需要root手机吗？', a: '不需要。Termux无root运行。您需要Termux（来自F-Droid或Play Store）和内存访问权限。无root/越狱需要。' }, { q: '我的手机仅有4GB可用RAM，应该选择哪个模型？', a: 'Phi-4 Mini（3.8B）或Qwen3 1.7B（1.7B参数）。如果您有<6GB可用RAM，避免Llama 3.2 3B或Gemma 3 4B。' }, { q: '在推理中如何防止安卓在后台杀死我的应用？', a: '在recent栏中锁定应用，或从电池优化中排除它（设置 > 电池 > 电池优化 > 排除应用）。在Samsung上：设置 > 电池 > 资源管理 > 排除。在OnePlus上：设置 > 电池 > 后台管理 > 添加到白名单。' }, { q: '哪个应用支持Tool Use和函数调用？', a: '仅Ollama via Termux。其他（MLC Chat、Maid、Layla、PocketPal、Private AI）是简单聊天界面，无Tool Use支持。' }, { q: '我可以加载我自己的微调模型吗？', a: '可以，如果它是GGUF格式。Maid、PocketPal和Ollama Termux都接受任何GGUF文件。通过文件管理器（Maid）、Hugging Face浏览器（PocketPal）或模型目录（Ollama）加载。' }, { q: 'Android < 12是否受支持？', a: '大多数应用在Android 10+上运行，但Android 12+推荐。检查Google Play Store或F-Droid上每个应用的特定OS要求。' }, { q: 'S25 Ultra vs Pixel 9 Pro的token/秒差异？', a: 'S25 Ultra（Snapdragon 8 Elite Hexagon NPU）：MLC Chat约40 token/秒。Pixel 9 Pro（Tensor G5、NPU不暴露）：MLC Chat纯CPU约12 token/秒。Snapdragon快3-4倍。' }, { q: 'MLC Chat在Pixel 9 Pro上会改进吗？', a: '不太可能。Google决定Tensor G5 NPU保留给Gemini内部。无计划的第三方暴露。' }] }, countrySpecific: { id: 'country-specific-zh', title: '台灣與香港Android用戶：Play Store可用性、Qwen3最佳化與隱私保護', content: ['台灣和香港的Google Play Store完全可用，無需VPN，所有六款應用（MLC Chat、Maid、Layla、PocketPal AI、Private AI、Ollama via Termux）均可直接下載。台灣以高階Android旗艦機（Galaxy S25 Ultra、Pixel 9 Pro、Xiaomi 15 Ultra）的高普及率聞名，為本地LLM推理提供了理想的硬體基礎。', '中文（繁體）輸入和輸出方面，Qwen3是台灣和香港用戶的首選模型——阿里巴巴開發，對繁體字有最佳支援，推理速度在1.7B-4B範圍內表現優異。香港用戶需注意：目前沒有Android本地LLM應用支援粵語口語，書面繁體中文是最實用選項。'], items: ['**台港Play Store完整支援：** 六款應用均無地區限制。推薦安裝順序：PocketPal AI（最好的Hugging Face整合，直接下載Qwen3繁體中文優化版）→ 如需F-Droid則安裝Maid → 需要API集成的IT用戶安裝Termux + Ollama。', '**Qwen3在台灣Android的表現：** Galaxy S25 Ultra搭配MLC Chat + Qwen3 1.7B可達約40 token/秒（Hexagon NPU）。Pixel 9 Pro搭配PocketPal AI + Qwen3 1.7B約15 token/秒（CPU only，Tensor G5不開放第三方NPU）。繁體中文提示詞中指定「請以繁體中文回答」可改善輸出品質。', '**個資法合規（台灣）：** 台灣個人資料保護法（個資法）要求對個人資料的蒐集、處理需有法律依據或當事人同意。本地LLM不傳送數據至外部服務，是最符合個資法精神的AI方案。Medical、Legal、Finance相關用途尤其適合使用Maid或Private AI（最少權限）。', '**香港個人資料（私隱）條例：** 香港《個人資料（私隱）條例》（PDPO）要求個人資料不得在未獲同意的情況下轉移至第三方。本地LLM完全符合這一要求——數據不離開設備。商業用途建議選擇Private AI或Maid以最小化數據足跡。', '**PTT、Dcard技術社群的中文使用報告：** 巴哈姆特科技版和Dcard科技版有台灣用戶分享Samsung + MLC Chat、Pixel + PocketPal的實測報告（繁體中文）。PTT的AI_TECH板也有本地LLM Android討論。搜尋「本地LLM Android 台灣」或「MLC Chat 繁體」可找到實用設定建議。'] }, relatedReading: { id: 'related-reading', title: '相关阅读', items: ['[2026年苹果最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — iOS等价物：LLM Farm、Pocket Paladin和iPhone推理环境。', '[平板电脑AI运行：iPad和安卓（2026）](/zh/power-local-llm/run-ai-on-tablet-ipad-android) — 设备上对远程连接，大屏幕配平板特定建议。', '[移动LLM模型：Phi-4 Mini、Gemma、SmolLM](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 移动推理模型选择指南：4-16GB手机适配模型。', '[本地AI软件目录2026](/zh/power-local-llm/local-llm-software-directory-2026) — 完整应用目录包括桌面、服务器后端、所有平台前端。', '[Windows、Mac、Linux最简单本地AI应用](/zh/power-local-llm/easiest-local-ai-app-windows-mac-linux) — 桌面等价物：按易用性对比应用的相同理念。', '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) — 模型权威文章：所有硬件配置上使用的开放权重模型。', '[开源ChatGPT Plus替代方案](/zh/prompt-bites/best-open-source-alternatives-to-chatgpt-plus) — Open WebUI、LibreChat和Jan：功能与ChatGPT Plus对比。', '[最佳Qwen编码模型](/zh/prompt-bites/best-qwen-model-for-coding) — Qwen3-Coder通过Termux + Ollama在安卓上：可行性与设置指南。', '[Android 本地 LLM 快速推荐](/zh/prompt-bites/best-local-llm-apps-android) — 只想知道安装哪款应用？无需查看基准测试的快速对比。'] } }, schema: { '@context': 'https://schema.org', '@type': 'TechArticle', 'url': 'https://www.promptquorum.com/zh/power-local-llm/best-local-llm-apps-android-2026', 'headline': '2026年安卓本地LLM最佳应用：6款应用对比', 'description': '2026年6款本地LLM安卓应用在真实手机上对比。MLC Chat、Maid、Layla、Ollama via Termux、Private AI和PocketPal AI。', 'inLanguage': 'zh', 'author': { '@type': 'Organization', 'name': 'PromptQuorum' }, 'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, 'datePublished': '2026-05-08', 'dateModified': '2026-05-08', 'image': 'https://www.promptquorum.com/zh/og/best-local-llm-apps-android-2026', 'about': [{ '@type': 'Thing', 'name': '安卓应用' }, { '@type': 'Thing', 'name': '本地LLM推理' }, { '@type': 'Thing', 'name': '移动AI' }, { '@type': 'Thing', 'name': 'NPU加速' }], 'mentions': [{ '@type': 'SoftwareApplication', 'name': 'MLC Chat' }, { '@type': 'SoftwareApplication', 'name': 'Maid' }, { '@type': 'SoftwareApplication', 'name': 'Layla' }, { '@type': 'SoftwareApplication', 'name': 'Ollama' }, { '@type': 'SoftwareApplication', 'name': 'Private AI' }, { '@type': 'SoftwareApplication', 'name': 'PocketPal AI' }], 'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] }, 'mainEntity': { '@type': 'FAQPage', 'mainEntity': [{ '@type': 'Question', 'name': '2026年5月，在Samsung Galaxy S25 Ultra上最快的模型是什么？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'MLC Chat + Qwen3 1.7B + Hexagon NPU = 约40 token/秒。最快的组合。纯CPU上，PocketPal AI和Ollama Termux达到约12-18 token/秒。' } }, { '@type': 'Question', 'name': '我可以在Pixel 9 Pro（Tensor G5）上使用MLC Chat吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。纯CPU运行（约12 token/秒）。Tensor G5 NPU不向第三方应用暴露。使用PocketPal AI或Ollama Termux；您将获得相似的性能。' } }, { '@type': 'Question', 'name': '运行Ollama via Termux需要root手机吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '不需要。Termux无root运行。您需要Termux（来自F-Droid或Play Store）和内存访问权限。无root/越狱需要。' } }, { '@type': 'Question', 'name': '我的手机仅有4GB可用RAM，应该选择哪个模型？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Phi-4 Mini（3.8B）或Qwen3 1.7B（1.7B参数）。如果您有<6GB可用RAM，避免Llama 3.2 3B或Gemma 3 4B。' } }, { '@type': 'Question', 'name': '在推理中如何防止安卓在后台杀死我的应用？', 'acceptedAnswer': { '@type': 'Answer', 'text': '在recent栏中锁定应用，或从电池优化中排除它（设置 > 电池 > 电池优化 > 排除应用）。在Samsung上：设置 > 电池 > 资源管理 > 排除。在OnePlus上：设置 > 电池 > 后台管理 > 添加到白名单。' } }, { '@type': 'Question', 'name': '哪个应用支持Tool Use和函数调用？', 'acceptedAnswer': { '@type': 'Answer', 'text': '仅Ollama via Termux。其他（MLC Chat、Maid、Layla、PocketPal、Private AI）是简单聊天界面，无Tool Use支持。' } }, { '@type': 'Question', 'name': '我可以加载我自己的微调模型吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以，如果它是GGUF格式。Maid、PocketPal和Ollama Termux都接受任何GGUF文件。通过文件管理器（Maid）、Hugging Face浏览器（PocketPal）或模型目录（Ollama）加载。' } }, { '@type': 'Question', 'name': 'Android < 12是否受支持？', 'acceptedAnswer': { '@type': 'Answer', 'text': '大多数应用在Android 10+上运行，但Android 12+推荐。检查Google Play Store或F-Droid上每个应用的特定OS要求。' } }, { '@type': 'Question', 'name': 'S25 Ultra vs Pixel 9 Pro的token/秒差异？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'S25 Ultra（Snapdragon 8 Elite Hexagon NPU）：MLC Chat约40 token/秒。Pixel 9 Pro（Tensor G5、NPU不暴露）：MLC Chat纯CPU约12 token/秒。Snapdragon快3-4倍。' } }, { '@type': 'Question', 'name': 'MLC Chat在Pixel 9 Pro上会改进吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '不太可能。Google决定Tensor G5 NPU保留给Gemini内部。无计划的第三方暴露。' } }] } },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-06-14',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Las mejores apps de LLM local para Android en 2026: 6 apps comparadas en teléfonos reales',
    seoTitle: 'LLMs Locales en Android 2026: Velocidad, NPU y Configuración',
    intro:
      'Seis apps de Android ejecutan modelos de lenguaje grandes completamente sin conexión en 2026: MLC Chat, Maid, Layla, Ollama via Termux, Private AI y PocketPal AI. Difieren en la utilización del NPU, la amplitud de la biblioteca de modelos y la integración con Android — y la mejor opción depende de si quieres velocidad (MLC Chat con NPU Hexagon), máxima flexibilidad de modelos (Ollama via Termux) o una interfaz nativa pulida (Layla o PocketPal AI). Esta guía compara las seis en el Samsung Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5) y OnePlus 13 (Snapdragon 8 Elite), cubriendo la inferencia de Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5, las realidades de la fragmentación de Android y cómo cada app gestiona el almacenamiento, los límites en segundo plano y el panel compartir de Android.',
    metaDescription:
      'Cómo funcionan los LLMs locales en Android 2026 — benchmarks en S25 Ultra, Pixel 9 Pro y OnePlus 13. Velocidades NPU, soporte GGUF, límites RAM. 6 apps comparadas.',
    twitterDescription:
      'IA local en Android en 2026: MLC Chat alcanza ~40 tok/seg con NPU Hexagon de Snapdragon. Maid da acceso GGUF completo. Ollama via Termux es el camino para usuarios avanzados. Comparación completa de 6 apps en S25 Ultra, Pixel 9 Pro, OnePlus 13.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Qwen3 1.7B',
      'Qwen3 4B',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM2 1.7B',
    ],
    current_hardware_mentioned: [
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
      'Snapdragon 8 Elite Hexagon NPU',
      'Google Tensor G5',
      'MediaTek Dimensity 9400 APU',
    ],
    audience:
      'Usuarios de Android que quieren ejecutar modelos de IA localmente en su teléfono — sin APIs en la nube, sin suscripciones, sin enviar datos fuera del dispositivo. Abarca desde principiantes que instalan su primera app hasta usuarios avanzados que construyen pipelines de Termux + Ollama.',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'apps de LLM local para Android',
    targetKeywords: [
      'best local llm apps android 2026',
      'run local ai android phone',
      'mlc chat android review',
      'ollama android termux',
      'pocketpal ai android',
      'offline ai android no internet',
    ],
    leadAnswerBlock:
      '**MLC Chat es la app de LLM local más rápida para Android en 2026 — usa el NPU Hexagon de Snapdragon en el Galaxy S25 Ultra y OnePlus 13 para alcanzar ~40 tokens/seg en Qwen3 1.7B, frente a 8–12 tokens/seg de las apps solo-CPU en el mismo dispositivo. PocketPal AI es la mejor opción equilibrada para la mayoría de usuarios: soporta cualquier modelo GGUF, tiene una interfaz nativa pulida y gestiona correctamente el almacenamiento de Android. Ollama via Termux es el camino para usuarios avanzados — el ecosistema completo de Ollama (todos los modelos, API compatible con OpenAI, uso de herramientas) en tu teléfono, a costa de una configuración por terminal. Maid es la opción purista de código abierto: distribuida por F-Droid, completamente sin conexión, sin dependencia de Play Store e importación directa de GGUF. Layla es la opción amigable para principiantes con una selección curada de modelos. Private AI se centra en privacidad de extremo a extremo con una configuración sencilla y no técnica. Los usuarios de Android tienen una ventaja crítica sobre iPhone: el sideloading, Termux y la capacidad de instalar desde F-Droid dan acceso a herramientas que simplemente no están disponibles en iOS.**',
    quickAnswerTop: {
      en: {
        question: '¿Cuál es la mejor app para ejecutar IA local en Android en 2026?',
        answer:
          'MLC Chat es la más rápida en dispositivos Snapdragon 8 Elite (S25 Ultra, OnePlus 13) gracias al soporte NPU Hexagon — alcanzando ~40 tokens/seg en Qwen3 1.7B. PocketPal AI es la mejor opción general para la mayoría de usuarios: amplio soporte GGUF, interfaz pulida y correcta gestión del almacenamiento de Android. Ollama via Termux ofrece el ecosistema Ollama completo incluyendo uso de herramientas y una API compatible con OpenAI. En Pixel 9 Pro (Tensor G5), el soporte NPU es limitado para apps de terceros — MLC Chat y PocketPal AI ambas solo-CPU ahí, entregando ~12–18 tokens/seg en Phi-4 Mini.',
        bullets: [
          'MLC Chat — la más rápida en Snapdragon 8 Elite via NPU Hexagon: ~40 tok/seg (Qwen3 1.7B) en Galaxy S25 Ultra.',
          'PocketPal AI — la mejor en general: soporte GGUF, interfaz pulida, almacenamiento Android correcto, integración con Hugging Face.',
          'Ollama via Termux — la mejor para usuarios avanzados: ecosistema Ollama completo, uso de herramientas, API compatible con OpenAI en el dispositivo.',
          'Maid — la mejor opción de código abierto: distribución F-Droid, sin dependencia de Google Play, importación GGUF directa via gestor de archivos.',
          'Layla — la mejor para principiantes: descargas de modelos curados, incorporación sencilla, sin terminal requerido.',
          'Private AI — la mejor para usuarios orientados a la privacidad: sin telemetría de red, permisos mínimos, configuración sencilla.',
          'En Tensor G5 (Pixel 9): el NPU no está expuesto a apps de terceros — las seis apps corren solo-CPU, entregando 10–18 tok/seg en Phi-4 Mini.',
          'Ventaja Android: Termux, F-Droid y sideloading desbloquean herramientas no disponibles en iOS — Ollama via Termux no tiene equivalente en iPhone.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Tabla comparativa', anchor: '#comparison-table' },
      { label: '¿Qué app deberías elegir?', anchor: '#which-app' },
      { label: 'Comparativa de chipsets: Snapdragon vs MediaTek vs Tensor', anchor: '#chipsets' },
      { label: 'MLC Chat', anchor: '#mlc-chat' },
      { label: 'Maid', anchor: '#maid' },
      { label: 'Layla', anchor: '#layla' },
      { label: 'Ollama via Termux', anchor: '#ollama-termux' },
      { label: 'Private AI', anchor: '#private-ai' },
      { label: 'PocketPal AI', anchor: '#pocketpal-ai' },
      { label: 'Fragmentación Android: almacenamiento, RAM y límites en segundo plano', anchor: '#android-fragmentation' },
      { label: 'Integración con el panel compartir de Android', anchor: '#share-sheet' },
      { label: 'Rutas de sideload y Termux', anchor: '#sideload-paths' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-llm-apps-android-2026-static.html',
    gammaDescription: 'La presentación cubre: 6 apps de LLM local para Android comparadas en 3 teléfonos reales (Galaxy S25 Ultra, Pixel 9 Pro, OnePlus 13), tabla de velocidades (MLC Chat ~40 tok/seg con NPU Hexagon de Snapdragon, PocketPal AI ~16 tok/seg), comparativa de chipsets (Snapdragon 8 Elite vs Tensor G5 vs MediaTek Dimensity 9400), guía de selección de app por caso de uso, soluciones a los límites en segundo plano de Android y 6 errores comunes a evitar. Descarga el PDF como tarjeta de referencia de IA local para Android.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MLC Chat es el líder en velocidad en Snapdragon 8 Elite.** El NPU Hexagon entrega ~40 tok/seg en Qwen3 1.7B y ~22 tok/seg en Phi-4 Mini en el Galaxy S25 Ultra — 3–4× más rápido que las apps solo-CPU en el mismo hardware.',
          '**PocketPal AI es la mejor opción general para la mayoría de usuarios de Android.** Soporta el ecosistema GGUF completo, se integra con Hugging Face para descargar modelos, gestiona correctamente el almacenamiento de Android y tiene la interfaz nativa móvil más pulida de las seis apps.',
          '**Ollama via Termux es el único camino hacia una API local completa compatible con OpenAI en Android.** Esto importa para usuarios avanzados que quieren uso de herramientas, llamadas a funciones o la capacidad de conectar apps locales al modelo de su teléfono.',
          '**Tensor G5 (Pixel 9 Pro) no expone su NPU a apps de terceros.** Las seis apps corren solo-CPU en Pixel 9 Pro, entregando 10–18 tok/seg en Phi-4 Mini — más lento que el resultado equivalente en Snapdragon 8 Elite.',
          '**Maid es la opción F-Droid / sin Google.** Sin dependencia de Play Store, sin cuenta de Google requerida e importación GGUF directa desde el gestor de archivos. La mejor opción para usuarios de Android que evitan los servicios de Google.',
          '**Los límites en segundo plano de Android son el mayor problema de usabilidad.** Android elimina agresivamente los procesos en segundo plano en la mayoría de ROMs de fabricantes (especialmente Samsung, OnePlus y Xiaomi). Las apps que realizan inferencia activa necesitan estar fijadas en la bandeja de apps recientes o configuradas en los ajustes de optimización de batería para evitar interrupciones durante la generación.',
          '**El almacenamiento de modelos es el segundo mayor problema de Android.** Cada modelo GGUF ocupa 1–8 GB. La división de Android entre particiones de almacenamiento interno significa que los modelos deben almacenarse en el directorio privado de la app o en una ubicación configurada específicamente — no en "Descargas" para la mayoría de apps.',
          '**La ventaja de Android es real: Termux y el sideloading desbloquean herramientas sin equivalente en iOS.** Ollama via Termux no es posible en iPhone. Las apps de F-Droid y el sideloading con ADB dan a los usuarios de Android acceso a apps que Google Play puede no incluir.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Dispositivos de prueba:** Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM), Google Pixel 9 Pro (Tensor G5, 16 GB RAM), OnePlus 13 (Snapdragon 8 Elite, 16 GB RAM).',
          '**Familias de chipsets probadas:** Snapdragon 8 Elite (NPU Hexagon), Tensor G5 (NPU no expuesto a apps de terceros), MediaTek Dimensity 9400 (especificaciones APU cubiertas; no es un dispositivo de prueba).',
          '**Mejor modelo para Android de 12 GB:** Phi-4 Mini (3.8B, ~2.7 GB en Q4_K_M) — funciona en las seis apps en los tres teléfonos de prueba.',
          '**Mejor modelo para Android de 8 GB:** Qwen3 1.7B o SmolLM2 1.7B — funciona en todas las apps; Gemma 3 1B para dispositivos muy limitados.',
          '**RAM mínima para modelos 3B:** 6 GB de RAM del dispositivo. Por debajo de 6 GB, usa modelos de 1.7B.',
          '**Tokens/seg en S25 Ultra (Phi-4 Mini):** MLC Chat ~22 tok/seg (NPU), PocketPal AI ~16 tok/seg (CPU/Vulkan), Maid ~18 tok/seg (Vulkan), Layla ~14 tok/seg (CPU), Private AI ~13 tok/seg (CPU), Ollama Termux ~10 tok/seg (CPU).',
          '**Play Store vs F-Droid:** MLC Chat, Layla, PocketPal AI y Private AI están en Google Play. Maid está principalmente en F-Droid. Ollama via Termux requiere Termux desde F-Droid.',
          '**Integración con el panel compartir (Android):** Solo PocketPal AI y Layla gestionan la entrada del panel compartir de Android de forma nativa a partir de mayo de 2026.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa',
        content:
          '**Velocidades de tokens medidas en Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM) ejecutando Phi-4 Mini con cuantización Q4_K_M.** La utilización del NPU varía según la app — MLC Chat es la única app con soporte verificado de NPU Hexagon a partir de mayo de 2026.',
                  image: '/images/best-local-llm-apps-android-2026-speed-comparison-es.svg',
          imageCaption: 'MLC Chat alcanza 22 tok/seg en Phi-4 Mini vía Snapdragon Hexagon NPU, la más rápida de 6 apps Android probadas.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat lidera la velocidad de LLM local en Android en 2026 gracias al soporte del NPU Hexagon de Snapdragon, alcanzando ~22 tok/seg en Phi-4 Mini y ~40 tok/seg en Qwen3 1.7B en el Galaxy S25 Ultra — 2–3× más rápido que las alternativas solo-CPU en el mismo hardware.',
          },
        ],
        columns: ['App', 'Tokens/seg (S25 Ultra, Phi-4 Mini)', 'Soporte NPU', 'Ideal para'],
        rows: [
          {
            'App': 'MLC Chat',
            'Tokens/seg (S25 Ultra, Phi-4 Mini)': '~22 tok/seg (ruta NPU)',
            'Soporte NPU': 'Sí — NPU Hexagon en Snapdragon 8 Elite',
            'Ideal para': 'Usuarios que priorizan la velocidad en teléfonos Snapdragon',
          },
          {
            'App': 'Maid',
            'Tokens/seg (S25 Ultra, Phi-4 Mini)': '~18 tok/seg (GPU Vulkan)',
            'Soporte NPU': 'Parcial — GPU Vulkan, sin ruta NPU dedicada',
            'Ideal para': 'Usuarios de código abierto / F-Droid, acceso GGUF completo',
          },
          {
            'App': 'Layla',
            'Tokens/seg (S25 Ultra, Phi-4 Mini)': '~14 tok/seg (CPU)',
            'Soporte NPU': 'No',
            'Ideal para': 'Principiantes, descargas de modelos curados',
          },
          {
            'App': 'Ollama via Termux',
            'Tokens/seg (S25 Ultra, Phi-4 Mini)': '~10 tok/seg (CPU)',
            'Soporte NPU': 'No (solo CPU en la compilación estándar de Termux)',
            'Ideal para': 'Usuarios avanzados, acceso a API, uso de herramientas',
          },
          {
            'App': 'Private AI',
            'Tokens/seg (S25 Ultra, Phi-4 Mini)': '~13 tok/seg (CPU)',
            'Soporte NPU': 'No',
            'Ideal para': 'Usuarios que priorizan la privacidad, permisos mínimos',
          },
          {
            'App': 'PocketPal AI',
            'Tokens/seg (S25 Ultra, Phi-4 Mini)': '~16 tok/seg (CPU/Vulkan)',
            'Soporte NPU': 'Parcial — GPU Vulkan en dispositivos compatibles',
            'Ideal para': 'La mayoría de usuarios — mejor interfaz + ecosistema GGUF completo',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'En Pixel 9 Pro (Tensor G5), elimina MLC Chat del primer puesto — las seis apps corren solo-CPU ahí, y PocketPal AI y Maid destacan por calidad de interfaz. La ventaja del NPU desaparece por completo en Tensor G5 para apps de inferencia de terceros.',
          },
          {
            type: 'warning',
            text: 'Las cifras de tok/seg de Layla y Private AI son estimaciones de la ruta CPU para Phi-4 Mini Q4_K_M. Las velocidades reales varían con el estado térmico — la inferencia sostenida en un teléfono caliente puede caer un 20–30% respecto a la cifra de arranque en frío.',
          },
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '¿Qué app deberías elegir?',
        content:
          '**La app correcta depende del chipset de tu dispositivo y de cuánto valoras la personalización frente a la simplicidad.** Los usuarios de Android se dividen marcadamente entre quienes quieren una experiencia nativa pulida (PocketPal AI, Layla) y quienes quieren máximo control (Ollama via Termux, Maid). A diferencia de iPhone, Android permite ambas. Para comprender mejor cómo los tamaños de modelos se relacionan con los requisitos de RAM en diferentes dispositivos, consulta la [guía de requisitos de VRAM →](/local-llms/how-much-vram-local-llm).',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Elige MLC Chat si tienes un teléfono Snapdragon 8 Elite y quieres la inferencia más rápida posible. Elige PocketPal AI si quieres la mejor app general con el mayor soporte de modelos y la interfaz más pulida. Elige Ollama via Termux si quieres una API de IA local completa en tu teléfono y te sientes cómodo con un terminal. Elige Maid si quieres una opción completamente de código abierto, distribuida por F-Droid, sin dependencia de Google. Elige Layla si eres nuevo en IA local y quieres descargas de modelos curados. Elige Private AI si la privacidad de datos y los permisos mínimos son tu principal preocupación.',
          },
        ],
        items: [
          '**Teléfono Snapdragon 8 Elite (S25 Ultra, OnePlus 13):** Empieza con MLC Chat. Si necesitas modelos que no están en la biblioteca de MLC Chat, añade PocketPal AI como tu segunda app — cubre el ecosistema GGUF completo con inferencia acelerada por Vulkan.',
          '**Pixel 9 Pro (Tensor G5):** La ventaja del NPU desaparece — PocketPal AI es la mejor opción por calidad de interfaz y amplitud de modelos. MLC Chat pasa a solo-CPU en Tensor G5, perdiendo su ventaja de velocidad.',
          '**Cualquier Android, personalización primero:** Ollama via Termux + un front-end de chat (Alpaca, Open WebUI en Chrome) es la configuración más capaz. Requiere ~30 minutos de trabajo en terminal pero da acceso a API compatible con OpenAI, uso de herramientas y toda la biblioteca de modelos de Ollama.',
          '**Teléfono sin Google / privacidad:** Maid desde F-Droid. Funciona en GrapheneOS, CalyxOS y otras versiones sin Google. Sin dependencia de Play Services.',
          '**Teléfono con 8 GB de RAM:** Cualquiera de las seis apps con Qwen3 1.7B o SmolLM2 1.7B. PocketPal AI gestiona el almacenamiento de modelos con mayor elegancia en dispositivos limitados.',
          '**Samsung Galaxy (cualquier modelo):** Ten en cuenta la eliminación agresiva de procesos en segundo plano de Samsung. Fija la app de IA en la bandeja de recientes y añádela en el exclusivo de Cuidado del dispositivo → Batería → Apps en modo sueño para evitar interrupciones durante la inferencia.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si tienes un teléfono Snapdragon y principalmente quieres chat sin conexión, ejecuta tanto MLC Chat (para velocidad en sesiones cortas) como PocketPal AI (para trabajo más extenso con modelos no disponibles en la biblioteca de MLC Chat). Coexisten perfectamente y usan almacenamiento de modelos separado.',
          },
        ],
      },
      chipsets: {
        id: 'chipsets',
        title: 'Comparativa de chipsets: Snapdragon vs MediaTek vs Tensor',
        content:
          '**Snapdragon 8 Elite es el chipset más capaz para inferencia de LLM local en Android en 2026 — su NPU Hexagon es el único NPU móvil con soporte verificado en MLC Chat.** Tensor G5 y MediaTek Dimensity 9400 ejecutan las seis apps solo en modo CPU o GPU Vulkan.',
                  image: '/images/best-local-llm-apps-android-2026-chipset-npu-es.svg',
          imageCaption: 'El Hexagon NPU expuesto del Snapdragon 8 Elite ejecuta Phi-4 Mini a 22 tok/seg; la ruta solo-CPU del Tensor G5 llega a 10-18.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'El NPU Hexagon del Snapdragon 8 Elite entrega una inferencia 2–3× más rápida que la ejecución solo-CPU en Android en 2026, pero solo MLC Chat expone esta ventaja — todas las demás apps caen a CPU o GPU Vulkan en todos los chipsets.',
          },
        ],
        columns: ['Chipset', 'Se encuentra en', 'NPU para apps de terceros', 'Mejor ruta de inferencia', 'Velocidad Phi-4 Mini (est.)'],
        rows: [
          {
            'Chipset': 'Snapdragon 8 Elite',
            'Se encuentra en': 'Galaxy S25 series, OnePlus 13, Xiaomi 15 Pro',
            'NPU para apps de terceros': 'Sí — NPU Hexagon via MLCC (solo MLC Chat)',
            'Mejor ruta de inferencia': 'NPU Hexagon (MLC Chat) o GPU Vulkan (Maid, PocketPal)',
            'Velocidad Phi-4 Mini (est.)': '~22 tok/seg (NPU) / ~16–18 tok/seg (Vulkan)',
          },
          {
            'Chipset': 'Google Tensor G5',
            'Se encuentra en': 'Serie Pixel 9',
            'NPU para apps de terceros': 'No — Google reserva el NPU para sus propias apps',
            'Mejor ruta de inferencia': 'CPU (todas las apps corren solo-CPU)',
            'Velocidad Phi-4 Mini (est.)': '~12–15 tok/seg (CPU)',
          },
          {
            'Chipset': 'MediaTek Dimensity 9400',
            'Se encuentra en': 'Xiaomi 15 Ultra, Oppo Find X8 Pro, Vivo X200 Pro',
            'NPU para apps de terceros': 'Limitado — acceso a APU de MediaTek via ruta NNAPI experimental',
            'Mejor ruta de inferencia': 'GPU Vulkan (mejor opción para terceros); NNAPI experimental',
            'Velocidad Phi-4 Mini (est.)': '~14–18 tok/seg (Vulkan) / ~12 tok/seg (CPU)',
          },
          {
            'Chipset': 'Snapdragon 8 Gen 3',
            'Se encuentra en': 'Serie Galaxy S24, OnePlus 12',
            'NPU para apps de terceros': 'Parcial — Hexagon de generación anterior, soporte limitado en MLC Chat',
            'Mejor ruta de inferencia': 'GPU Vulkan o CPU',
            'Velocidad Phi-4 Mini (est.)': '~12–15 tok/seg (Vulkan)',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No asumas que el NPU Tensor G5 de Google beneficia a las apps de LLM local. El NPU de Google está reservado para servicios ML de primera parte (Google Translate, Grabadora, procesamiento de fotos). Las apps de inferencia de terceros, incluidas las seis de esta guía, corren solo-CPU en todos los teléfonos Pixel. Los 16 GB de RAM del Pixel 9 Pro son su verdadera ventaja — más margen para modelos más grandes, no inferencia más rápida.',
          },
          {
            type: 'tip',
            text: 'Los teléfonos MediaTek Dimensity 9400 se benefician del soporte de GPU Vulkan en Maid y PocketPal AI. Si tienes un Xiaomi 15 Ultra u Oppo Find X8 Pro, activa Vulkan en los ajustes de la app para obtener una mejora de velocidad del 30–40% respecto a la ruta CPU.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat',
        content:
          '**MLC Chat (Machine Learning Compilation Chat) es la app de LLM local más rápida para Android en dispositivos Snapdragon 8 Elite en 2026.** Desarrollada por el equipo de MLC AI, compila modelos usando el framework MLCC que se dirige directamente al NPU Hexagon de Snapdragon — una ruta de optimización no disponible para apps que usan llama.cpp o backends Vulkan genéricos.',
        items: [
          '**Biblioteca de modelos:** Curada — MLC Chat incluye un conjunto de modelos precompilados optimizados para móvil (Qwen3 1.7B, Phi-4 Mini, Gemma 3 1B, Llama 3.2 1B). La importación de modelos personalizados está disponible pero requiere la cadena de herramientas de compilación de MLC — no es un proceso de un solo toque.',
          '**Utilización del NPU:** Soporte verificado del NPU Hexagon en Snapdragon 8 Elite (Galaxy S25 Ultra, OnePlus 13). Medido en ~40 tok/seg para Qwen3 1.7B y ~22 tok/seg para Phi-4 Mini en el S25 Ultra — frente a ~12–16 tok/seg solo-CPU en el mismo hardware.',
          '**Calidad de interfaz:** Limpia, funcional, mínima. Solo interfaz de chat — sin editor de prompts del sistema, sin tarjetas de personaje, sin cambio de modelo múltiple. Adecuada para tareas de chat enfocadas, no para configuración de usuarios avanzados.',
          '**Panel compartir de Android:** No soportado a partir de mayo de 2026. No puede recibir texto de otras apps via el panel compartir estándar.',
          '**Fiabilidad sin conexión:** Excelente. Una vez que un modelo está compilado y en caché, MLC Chat funciona con cero llamadas de red. El proceso en segundo plano es estable en comparación con algunas apps basadas en llama.cpp.',
          '**Almacenamiento:** MLC Chat almacena los pesos del modelo compilado en su directorio privado de app (~3 GB para Phi-4 Mini compilado para Snapdragon). No son portables a otras apps — una limitación frente a las apps basadas en GGUF.',
          '**Ruta de instalación:** Google Play Store. Código fuente en [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'La biblioteca de modelos de MLC Chat es curada y compilada. Si necesitas un modelo que no está en la biblioteca oficial (por ejemplo, un Mistral Small ajustado o un modelo específico de dominio), MLC Chat no puede ayudarte — usa PocketPal AI o Maid para soporte GGUF arbitrario. MLC Chat es una herramienta de velocidad, no de flexibilidad.',
          },
        ],
      },
      maid: {
        id: 'maid',
        title: 'Maid',
        content:
          '**Maid es la app de LLM local para Android completamente de código abierto, con distribución prioritaria en F-Droid — construida con Flutter, usando llama.cpp como backend de inferencia y distribuida sin dependencia de Google Play.** Soporta importación directa de GGUF desde el gestor de archivos, aceleración GPU Vulkan en dispositivos compatibles y funciona en versiones de Android sin Google (GrapheneOS, CalyxOS).',
        items: [
          '**Biblioteca de modelos:** Sin restricciones. Cualquier archivo de modelo GGUF puede importarse via el gestor de archivos de Android o descargarse via URL. Esto incluye modelos que no están en Hugging Face o en bibliotecas curadas de apps.',
          '**Utilización del NPU:** Ruta GPU Vulkan en dispositivos compatibles — no NPU dedicado. En Snapdragon 8 Elite, Vulkan entrega ~18 tok/seg para Phi-4 Mini, frente a ~22 tok/seg con la ruta NPU de MLC Chat. Sin acceso al NPU Hexagon.',
          '**Calidad de interfaz:** Funcional pero menos pulida que PocketPal AI o Layla. Editor de prompts del sistema, controles de temperatura y gestión básica del historial de chat presentes. El soporte de tarjetas de personaje es limitado.',
          '**Panel compartir de Android:** No soportado a partir de mayo de 2026.',
          '**Fiabilidad sin conexión:** Excelente — la inferencia basada en llama.cpp es estable. Los límites en segundo plano de ROMs de fabricantes (Samsung, OnePlus) siguen aplicando.',
          '**Almacenamiento:** Modelos almacenados en el directorio privado de la app o en una ruta especificada por el usuario. Los archivos GGUF son portables entre Maid y PocketPal AI si se colocan en almacenamiento compartido accesible.',
          '**Ruta de instalación:** F-Droid (primaria), releases de GitHub. Código fuente en [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid). No disponible en Google Play.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si estás en GrapheneOS o una versión de Android sin Google, Maid es la mejor opción disponible — no tiene dependencia de Google Play Services. Instala via el cliente F-Droid o descarga el APK directamente desde la página de releases de GitHub y haz sideload con ADB.',
          },
        ],
      },
      layla: {
        id: 'layla',
        title: 'Layla',
        content:
          '**Layla es la app de LLM local para Android más accesible para principiantes — abstrae la gestión de modelos detrás de un flujo de descarga curado, no requiere terminal y presenta una interfaz de chat pulida sin exponer la configuración de inferencia.** La contrapartida es una selección de modelos más pequeña e inferencia solo-CPU.',
        items: [
          '**Biblioteca de modelos:** Curada, conjunto más pequeño. Layla ofrece una experiencia de descarga gestionada — selecciona un modelo de la biblioteca en la app y se descarga y configura automáticamente. La importación de GGUF personalizado no es una función principal.',
          '**Utilización del NPU:** Solo ruta CPU — sin GPU Vulkan ni NPU Hexagon. Esto hace de Layla la más lenta de las seis en Snapdragon 8 Elite (~14 tok/seg para Phi-4 Mini) pero consistente en todos los chipsets de Android.',
          '**Calidad de interfaz:** La más alta de las seis apps para usuarios primerizos. Interfaz centrada en el chat con gestión clara de conversaciones, sin sobrecarga de ajustes y cambio de modelo fluido.',
          '**Panel compartir de Android:** Soportado — Layla puede recibir texto de otras apps via el panel compartir de Android, convirtiéndola en una de las dos apps de esta guía que se integran en el flujo estándar de compartir de Android.',
          '**Fiabilidad sin conexión:** Buena. Completamente sin conexión una vez descargado el modelo. Menos susceptible a eliminaciones en segundo plano porque no ejecuta un proceso de servidor local (a diferencia de Ollama via Termux).',
          '**Almacenamiento:** Layla gestiona el almacenamiento de modelos internamente. No se requiere gestión manual de archivos.',
          '**Ruta de instalación:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El soporte del panel compartir de Layla la hace únicamente útil para flujos de trabajo en Android: resalta texto en cualquier app → Compartir → Layla → pregunta algo sobre ello. Este caso de uso — asistencia rápida de IA en contexto sin cambiar de app — es donde Layla supera a todas las demás apps de esta lista.',
          },
        ],
      },
      ollamaTermux: {
        id: 'ollama-termux',
        title: 'Ollama via Termux',
        content:
          '**Ollama via Termux es el único camino en Android hacia una API local completa compatible con OpenAI — incluyendo uso de herramientas, llamadas a funciones y la capacidad de conectar apps de terceros de Android a un modelo ejecutándose localmente.** La configuración lleva 20–30 minutos y requiere comodidad con el terminal, pero el resultado es el mismo ecosistema Ollama que los usuarios de escritorio ejecutan en Mac y Linux, ahora en un teléfono.',
        numberedItems: [
          'Instala Termux desde F-Droid (no la versión de Play Store — la compilación de Play Store está desactualizada y rompe las instalaciones de Ollama).',
          'En Termux: `pkg update && pkg install curl`',
          'Instala Ollama: `curl -fsSL https://ollama.com/install.sh | sh` — esto detecta el entorno Android ARM64 e instala el binario correcto.',
          'Descarga un modelo: `ollama pull qwen3:1.7b` o `ollama pull phi4-mini`.',
          'Inicia el servidor: `ollama serve` (mantenlo ejecutándose en una sesión de Termux o usa un widget en segundo plano).',
          'Interactúa via Termux: `ollama run phi4-mini` — o conecta cualquier app que soporte un endpoint compatible con OpenAI en `http://localhost:11434`.',
        ],
        items: [
          '**Biblioteca de modelos:** Ilimitada — la biblioteca completa de modelos de Ollama está disponible via `ollama pull [nombre-del-modelo]`. Este es el acceso más amplio a modelos de cualquier app de esta guía.',
          '**Utilización del NPU:** Solo CPU en la compilación estándar de Ollama ARM64. Sin soporte de GPU Vulkan ni NPU Hexagon en la configuración estándar de Termux a partir de mayo de 2026. Esto hace de Ollama el más lento en tok/seg brutos (~10 tok/seg para Phi-4 Mini en S25 Ultra).',
          '**Uso de herramientas y llamadas a funciones:** Soportado — Ollama en Android gestiona el uso de herramientas de la misma manera que en escritorio. Conecta cualquier frontend capaz de uso de herramientas a localhost:11434.',
          '**Panel compartir de Android:** No soportado directamente. Solución: usa un acceso directo de Termux:Widget para enviar el contenido del portapapeles a `ollama run [modelo]`.',
          '**Fiabilidad en segundo plano:** Problemática en Samsung y OnePlus sin lista blanca de optimización de batería. Crea un acceso directo de Termux:Widget para `ollama serve` y fija Termux en la bandeja de recientes. Samsung One UI requiere deshabilitar explícitamente "Apps en modo sueño" para Termux.',
          '**Ruta de instalación:** Termux desde F-Droid, luego el script de instalación de Ollama via curl.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ollama via Termux en un teléfono será notablemente más lento que Ollama en un escritorio — ~10 tok/seg en Phi-4 Mini en el S25 Ultra frente a 60+ tok/seg en una RTX 4090. Úsalo por conveniencia (API de bolsillo sin conexión, consultas rápidas lejos del escritorio) no por rendimiento. Para calidad de modelos grandes en móvil, la conexión remota a una máquina doméstica que ejecuta Ollama via Open WebUI en Chrome sigue siendo la mejor opción.',
          },
          {
            type: 'tip',
            text: 'Instala el complemento Termux:Widget y crea un acceso directo de un solo toque que ejecute `ollama serve`. Esto te permite iniciar el servidor de Ollama desde el widget de la pantalla de inicio de Android sin abrir Termux. Una vez sirviendo, cualquier app configurada para usar `localhost:11434` se conecta automáticamente.',
          },
        ],
      },
      privateAI: {
        id: 'private-ai',
        title: 'Private AI',
        content:
          '**Private AI es la app de LLM local para Android centrada en la privacidad — diseñada para usuarios que quieren que toda la inferencia permanezca en el dispositivo con permisos mínimos, sin telemetría de red y una configuración sencilla no técnica.** Solicita menos permisos que cualquier otra app de esta guía y no contacta servidores externos después de la descarga inicial del modelo.',
        items: [
          '**Biblioteca de modelos:** Conjunto curado y revisado para privacidad. Las descargas son de fuentes verificables. Sin acceso a repositorios arbitrarios de Hugging Face — intercambia flexibilidad por un suministro de modelos controlado y auditable.',
          '**Utilización del NPU:** Solo ruta CPU. Consistente en todos los chipsets en ~13 tok/seg en Phi-4 Mini (S25 Ultra).',
          '**Calidad de interfaz:** Limpia, mínima. Centrada en el chat con exportación de conversaciones y sin telemetría de uso. Carece de opciones de configuración avanzadas (temperatura, top-p, prompts del sistema) — simplificada intencionalmente.',
          '**Panel compartir de Android:** No soportado a partir de mayo de 2026.',
          '**Fiabilidad sin conexión:** La mejor de su clase. Diseñada para funcionar completamente sin conexión. Sin llamadas de red en segundo plano, sin sincronización, sin análisis.',
          '**Permisos:** Mínimos — solicita acceso al almacenamiento y micrófono (para entrada de voz, opcional). No solicita contactos, ubicación ni ID de publicidad.',
          '**Ruta de instalación:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si tu caso de uso implica texto profesional sensible — borradores legales, notas médicas, contenido empresarial confidencial — los permisos mínimos y la arquitectura auditable sin telemetría de Private AI son significativos. Para uso de productividad general, PocketPal AI es una mejor opción general, pero el modelo de confianza de Private AI es más sólido.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI',
        content:
          '**PocketPal AI es la mejor app de LLM local para Android en general para la mayoría de usuarios en 2026.** Combina el ecosistema completo de modelos GGUF (cualquier modelo de Hugging Face), aceleración GPU Vulkan, la interfaz nativa móvil más pulida de las seis apps, soporte directo del panel compartir de Android y correcta gestión del almacenamiento de Android — una combinación que ninguna otra app de esta guía iguala.',
        items: [
          '**Biblioteca de modelos:** Ecosistema GGUF completo — navega y descarga directamente desde Hugging Face dentro de la app, o importa archivos GGUF locales. Cubre la misma amplitud que Maid añadiendo una interfaz de descubrimiento curada.',
          '**Utilización del NPU:** Ruta GPU Vulkan en dispositivos compatibles. En Snapdragon 8 Elite, entrega ~16 tok/seg en Phi-4 Mini — por detrás de la ruta NPU de MLC Chat (~22 tok/seg) pero por delante de todas las apps solo-CPU en el mismo dispositivo.',
          '**Calidad de interfaz:** La mejor interfaz nativa móvil de las seis apps. Navegación por gestos, gestión de conversaciones, editor de prompts del sistema, benchmarking de modelos y un panel de ajustes por modelo. Construida con React Native + llama.rn.',
          '**Panel compartir de Android:** Soportado — PocketPal AI y Layla son las únicas dos apps de esta guía que se integran en el panel compartir de Android. Selecciona texto en cualquier app → Compartir → PocketPal AI.',
          '**Fiabilidad sin conexión:** Excelente. Sin proceso de servidor en segundo plano (a diferencia de Ollama via Termux) — la inferencia corre en proceso, evitando los problemas de eliminación en segundo plano de Android que afectan a los enfoques basados en servidor.',
          '**Almacenamiento:** Almacena archivos GGUF en almacenamiento privado de la app por defecto, con opción de apuntar a almacenamiento externo. Los archivos de modelos son portables a Maid si se mueven a almacenamiento compartido de Android.',
          '**Ruta de instalación:** Google Play Store. Código fuente en [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La herramienta de benchmarking de modelos dentro de la app de PocketPal AI (ejecuta un prompt corto y mide tok/seg) es útil para comparar tamaños de modelos en tu teléfono específico. Ejecútala en Phi-4 Mini, Qwen3 1.7B y Qwen3 4B para encontrar el techo de velocidad práctico de tu dispositivo antes de comprometerte con un modelo para uso diario.',
          },
        ],
      },
      androidFragmentation: {
        id: 'android-fragmentation',
        title: 'Fragmentación Android: almacenamiento, RAM y límites en segundo plano',
        content:
          '**La fragmentación de Android crea tres problemas prácticos para las apps de LLM local: conflictos de particiones de almacenamiento, asignación de RAM inconsistente y políticas agresivas de eliminación en segundo plano por parte de los fabricantes.** Los tres afectan la fiabilidad del modelo en dispositivos Samsung, OnePlus, Pixel y otros fabricantes de Android de formas que no ocurren en iOS.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'La fragmentación de Android significa que una app de LLM local que funciona perfectamente en un Pixel 9 Pro puede bloquearse a mitad de la inferencia en un Galaxy S25 Ultra, no por la app o el modelo, sino porque la política de eliminación en segundo plano de Samsung termina el proceso para ahorrar batería. Cada fabricante de Android personaliza estas políticas de manera diferente — Pixel sigue los estándares AOSP más de cerca; Samsung, OnePlus y Xiaomi tienen todos una eliminación en segundo plano más agresiva por defecto.',
          },
        ],
        items: [
          '**Particiones de almacenamiento:** El `/data/user/0/` de Android (almacenamiento privado de la app) y `/sdcard/` (almacenamiento compartido) son particiones separadas. La mayoría de apps de LLM local almacenan modelos en almacenamiento privado de la app, que no es navegable desde el gestor de archivos sin root. Si quieres compartir un archivo GGUF entre Maid y PocketPal AI, primero debe copiarse a una ubicación compartida.',
          '**Asignación de RAM:** Android no garantiza una asignación de memoria a las apps de terceros. Si el sistema necesita RAM, elimina procesos en segundo plano — incluidos los procesos de inferencia. En dispositivos con 12 GB de RAM (S25 Ultra por defecto), esto raramente es un problema durante el uso activo. En teléfonos con 8 GB de RAM, lanzar cualquier otra app durante la inferencia puede interrumpirla.',
          '**Eliminación en segundo plano de Samsung One UI:** La más agresiva de los principales fabricantes de Android. Ve a Ajustes → Cuidado del dispositivo → Batería → Límites de uso en segundo plano → Apps en modo sueño, y elimina manualmente cualquier app de LLM de esta lista. También fija la app en la bandeja de recientes tocando su icono.',
          '**Eliminación en segundo plano de OnePlus OxygenOS:** Similar a Samsung. Ve a Ajustes → Batería → Optimización de batería, encuentra la app de LLM y ponla en "No optimizar". Adicionalmente, fija la app en la vista general de recientes.',
          '**Pixel (más cercano a AOSP):** El comportamiento en segundo plano es el más predecible. Las apps que solicitan el permiso `FOREGROUND_SERVICE` (PocketPal AI y Maid lo hacen) se ejecutan de forma fiable durante la inferencia activa en Pixel. Aun así se recomienda la exclusión del optimizador de batería para sesiones muy largas.',
          '**Xiaomi MIUI/HyperOS:** La eliminación en segundo plano más agresiva después de Samsung. La función "Ahorro de batería" puede terminar la inferencia a mitad de la generación. Ve a Ajustes → Apps → Gestionar apps → [app] → Ahorro de batería → Sin restricciones.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No dependas del comportamiento en segundo plano predeterminado de Android para ninguna app de LLM local. En dispositivos Samsung y OnePlus, la política predeterminada interrumpirá las sesiones de inferencia largas (>2 minutos) a menos que explícitamente añadas la app a la lista blanca en los ajustes de optimización de batería. Esta es la causa número uno de los informes de "la app se detuvo a mitad de la respuesta" para todas las apps de esta guía.',
          },
        ],
      },
      shareSheet: {
        id: 'share-sheet',
        title: 'Integración con el panel compartir de Android',
        content:
          '**La integración con el panel compartir de Android — la capacidad de seleccionar texto en cualquier app y enviarlo a una IA local — solo está soportada por dos de las seis apps: PocketPal AI y Layla.** Esta única función hace que la IA local sea genuinamente útil como herramienta a nivel de sistema en lugar de una app independiente.',
        items: [
          '**Cómo funciona:** Selecciona cualquier texto en cualquier app de Android (navegador web, correo, lector de PDF, app de mensajería) → toca Compartir → elige PocketPal AI o Layla → el texto seleccionado aparece en el campo de entrada del chat.',
          '**Panel compartir de PocketPal AI:** Recibe texto sin formato. Abre una nueva conversación con el texto seleccionado pre-rellenado. Luego puedes añadir un prompt (p. ej., "Resume esto", "Traduce al español", "Verifica los hechos de esto") y enviarlo al modelo local.',
          '**Panel compartir de Layla:** La misma funcionalidad básica. Transición de interfaz ligeramente más fluida desde el panel compartir hacia la interfaz de chat.',
          '**MLC Chat, Maid, Ollama via Termux, Private AI:** No aparecen en el panel compartir de Android a partir de mayo de 2026. El texto debe copiarse y pegarse manualmente en estas apps.',
          '**Casos de uso prácticos:** Resumir artículos web mientras navegas, traducir correos, redactar respuestas a mensajes, verificar párrafos — todo sin que el texto salga de tu dispositivo ni toque una API en la nube.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para usuarios avanzados que quieren integración con el panel compartir con la biblioteca completa de modelos (incluidos modelos que no están en los conjuntos curados de Layla o PocketPal AI), la solución es: copia el texto → abre PocketPal AI → carga cualquier modelo GGUF → pega. La integración de Hugging Face de PocketPal AI significa que puedes cargar un modelo personalizado y seguir usándolo como app de destino de compartir.',
          },
        ],
      },
      sideloadPaths: {
        id: 'sideload-paths',
        title: 'Rutas de sideload y Termux: la ventaja de Android',
        content:
          '**El ecosistema de sideloading y Termux de Android da a los usuarios de Android acceso a herramientas de IA local que no existen en iOS.** Esta es la diferencia práctica más marcada entre Android e iPhone para el uso de IA local en 2026.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama via Termux — un servidor de API de LLM local completo en un teléfono — es una capacidad exclusiva de Android en 2026: el sandbox de iOS de Apple impide la configuración equivalente en iPhone, haciendo de Android la única plataforma móvil para usuarios que necesitan una API compatible con OpenAI en el dispositivo.',
          },
        ],
        items: [
          '**Termux:** Un entorno Linux en una app de Android. Instala via F-Droid (no Play Store). Ejecuta bash, Python, curl y prácticamente cualquier binario Linux ARM64 — incluido Ollama. Termux no está disponible en iOS; su equivalente (iSH) carece de capacidades de red para servir APIs locales.',
          '**Sideloading con F-Droid:** Instala apps sin Google Play — útil para Maid, Termux y otras herramientas de IA local de código abierto. Descarga el APK del cliente F-Droid, habilita "Instalar apps de origen desconocido" en los ajustes de seguridad de Android, instala F-Droid y luego instala cualquier app listada en F-Droid sin cuenta de Google.',
          '**Sideloading con ADB:** Los usuarios avanzados pueden hacer sideload de APKs directamente via Android Debug Bridge (`adb install [app.apk]`). Esto permite instalar apps cuya ficha de Play Store está restringida por región o ha sido eliminada.',
          '**Ventaja de las ROM personalizadas:** Los usuarios de LineageOS, GrapheneOS y CalyxOS pueden desactivar Google Play completamente y usar F-Droid + ADB como sus únicas rutas de instalación de apps. Maid y Termux funcionan completamente en estas plataformas. No existe equivalente en iOS.',
          '**Modo servidor de llama.cpp via Termux:** Más allá de Ollama, el propio llama.cpp puede compilarse via Termux y ejecutarse en modo servidor — dando una API local alternativa que algunos usuarios prefieren por su menor uso de memoria en comparación con Ollama.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La configuración de Termux + Ollama también funciona como servidor API local para otras apps en el mismo teléfono. Por ejemplo, apps como Obsidian (con el plugin Local REST API) o automatizaciones personalizadas similares a Shortcuts pueden consultar `localhost:11434/api/generate` para ejecutar tareas de IA sin internet — un patrón de automatización de pantalla de inicio genuinamente útil.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        content: '**La mayoría de fallos con apps de LLM local en Android provienen de cuatro errores evitables.**',
        items: [
          '**Instalar Termux desde Play Store.** La versión de Play Store de Termux está desactualizada (Termux dejó de actualizarla en 2020). La compilación actual mantenida está en F-Droid. `pkg install curl` y el script de instalación de Ollama fallan en la versión de Termux de Play Store.',
          '**Esperar velocidad NPU en un teléfono Pixel.** El NPU Tensor G5 de Google no es accesible para apps de terceros. Las seis apps corren solo-CPU en todos los modelos Pixel. La ventaja NPU de MLC Chat aplica solo en Snapdragon 8 Elite y no se transfiere a Pixel.',
          '**Omitir la lista blanca de optimización de batería en Samsung.** Los teléfonos Galaxy eliminan los procesos en segundo plano agresivamente. Una generación que dure más de 90 segundos probablemente será interrumpida por la política de eliminación en segundo plano a menos que Termux o la app de LLM estén explícitamente en la lista blanca.',
          '**Descargar modelos demasiado grandes para el dispositivo.** Un modelo 7B Q4_K_M (~4.7 GB) requiere ~6 GB de RAM disponible. En un teléfono de 12 GB con la sobrecarga del sistema, esto es ajustado. En un teléfono de 8 GB, hará que la app falle por OOM a mitad de la generación. Usa Phi-4 Mini (3.8B, ~2.7 GB) para dispositivos de 8–10 GB y Qwen3 1.7B (~1.1 GB) para todo lo que esté por debajo.',
          '**Asumir que el almacenamiento en Descargas es accesible.** La mayoría de apps de LLM local almacenan archivos de modelos en almacenamiento privado de la app (`/data/user/0/[paquete-de-la-app]/`), que no es navegable desde el gestor de archivos sin root. Si descargas un GGUF a la carpeta de Descargas esperando que la app lo encuentre, no lo hará — usa la función de importación integrada de la app o apunta a la ruta correcta en los ajustes.',
          '**Ejecutar dos apps de inferencia simultáneamente.** Cada app carga el modelo en RAM. Dos modelos de 3B en un teléfono de 12 GB dejan ~5 GB para el sistema operativo, lo que desencadena eliminaciones. Si usas tanto MLC Chat como PocketPal AI, cierra uno antes de abrir el otro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'MLC Chat GitHub y documentación — [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)',
          'Maid GitHub (Mobile Artificial Intelligence) — [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
          'PocketPal AI GitHub — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Documentación oficial de Ollama — [ollama.com](https://ollama.com)',
          'Documentación oficial de Termux — [wiki.termux.com](https://wiki.termux.com)',
          'Documentación técnica del NPU Hexagon del Snapdragon 8 Elite — Qualcomm Developer Network',
          'Especificaciones de la APU MediaTek Dimensity 9400 — página de producto de MediaTek',
          'Resumen del chip Google Tensor G5 — documentación de hardware de Google',
          'Optimización de batería y límites de procesos en segundo plano de Android — documentación para desarrolladores de Android',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: '¿Puede un Pixel 9 Pro ejecutar un modelo de 7B?',
            a: 'Sí, el Pixel 9 Pro tiene 16 GB de RAM — margen suficiente para ejecutar un modelo 7B Q4_K_M (~4.7 GB de peso del modelo) con RAM del sistema aún disponible. La velocidad es ~8–10 tok/seg en ese tamaño (solo-CPU en Tensor G5). Usa PocketPal AI o Maid con un GGUF de 7B para este caso de uso. Para velocidad de conversación en tiempo real, quédate con Phi-4 Mini (3.8B, ~14 tok/seg) en el Pixel 9 Pro.',
          },
          {
            q: '¿Estas apps usan el NPU de Snapdragon?',
            a: 'Solo MLC Chat usa el NPU Hexagon de Snapdragon, y solo en dispositivos Snapdragon 8 Elite (serie Galaxy S25, OnePlus 13). Las otras cinco apps usan CPU o GPU Vulkan. El NPU Hexagon entrega una inferencia 2–3× más rápida en MLC Chat en comparación con la ruta CPU en el mismo dispositivo.',
          },
          {
            q: '¿Puedo ejecutar IA local en un Samsung Galaxy S22?',
            a: 'Sí, en variantes con 8 GB de RAM. El Galaxy S22 ejecuta Snapdragon 8 Gen 1 (o Exynos 2200 en algunas regiones). PocketPal AI y Maid con Qwen3 1.7B o SmolLM2 1.7B funcionan a ~8–12 tok/seg. Phi-4 Mini (3.8B) es factible pero ajustado con 8 GB de RAM — cierra todas las demás apps primero. La ruta NPU de MLC Chat no está verificada en Snapdragon 8 Gen 1.',
          },
          {
            q: '¿Necesito rootear mi teléfono para IA local?',
            a: 'No. Las seis apps de esta guía funcionan en teléfonos Android sin rootear. Termux requiere habilitar "Instalar apps de origen desconocido" para el APK de F-Droid, pero eso no es rootear. El root solo es relevante para acceder a los directorios de almacenamiento privado de las apps desde un gestor de archivos — no es necesario para la inferencia.',
          },
          {
            q: '¿Puedo usar estas apps con Termux?',
            a: 'Ollama via Termux es su propia configuración completa — instalas Ollama dentro de Termux e interactúas via el terminal de Termux. Las otras cinco apps (MLC Chat, Maid, Layla, Private AI, PocketPal AI) son apps de Android independientes que no interactúan con Termux. Los usuarios avanzados ejecutan ambas: Ollama en Termux para acceso a API y PocketPal AI para una interfaz de chat pulida.',
          },
          {
            q: '¿Cómo gestionan los límites en segundo plano de Android?',
            a: 'Los límites en segundo plano son el mayor problema de fiabilidad para las apps de LLM local en Android. PocketPal AI y Maid solicitan el permiso FOREGROUND_SERVICE, lo que las hace más resistentes a la eliminación en segundo plano. Ollama via Termux es vulnerable a las políticas de eliminación en segundo plano de Samsung y OnePlus a menos que Termux esté explícitamente en la lista blanca en los ajustes de optimización de batería. En Pixel, el comportamiento en segundo plano es más predecible. En Samsung One UI, añade manualmente cualquier app de LLM a la lista blanca en Cuidado del dispositivo → Batería → Apps en modo sueño.',
          },
          {
            q: '¿Puedo compartir la salida de IA local a otras apps?',
            a: 'Sí, desde cualquier app — copia la respuesta de IA y pégala en cualquier lugar. Para la dirección inversa (enviar texto de otra app a la IA), solo PocketPal AI y Layla aparecen en el panel compartir de Android a partir de mayo de 2026.',
          },
          {
            q: '¿Estas apps soportan Android Auto?',
            a: 'No. Ninguna de las seis apps soporta Android Auto a partir de mayo de 2026. Android Auto restringe qué apps pueden ejecutarse mientras se conduce, y ninguna de las apps de LLM local ha construido la interfaz compatible con Auto requerida para la certificación.',
          },
          {
            q: '¿Qué app gestiona mejor el almacenamiento de modelos?',
            a: 'PocketPal AI gestiona el almacenamiento de modelos con más elegancia — se integra directamente con Hugging Face para descargas dentro de la app, gestiona correctamente la división de particiones de almacenamiento de Android y proporciona una interfaz de gestión de modelos. Maid es la mejor para usuarios que quieren gestionar archivos GGUF manualmente via el sistema de archivos. MLC Chat usa un formato de modelo compilado propietario que no es portable a otras apps.',
          },
          {
            q: '¿Puedo ejecutar varios modelos simultáneamente?',
            a: 'Solo si tu dispositivo tiene suficiente RAM para ambos modelos más la sobrecarga del sistema operativo Android. En un Pixel 9 Pro de 16 GB: dos modelos Phi-4 Mini (2.7 GB cada uno) dejan ~10 GB para el sistema operativo — técnicamente factible pero muy ajustado. En la práctica, cierra una app antes de abrir la otra. Ollama via Termux soporta el cambio de modelos con un único proceso `ollama serve`, cargando un modelo a la vez.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores apps de LLM local para iPhone 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el equivalente en iOS: LLM Farm, Pocket Paladin y el panorama de inferencia en iPhone.',
          '[Cómo ejecutar IA en una tableta: iPad y Android (2026)](/es/power-local-llm/run-ai-on-tablet-ipad-android) — en el dispositivo vs conexión remota para la pantalla más grande, con recomendaciones específicas para tabletas.',
          '[Modelos LLM móviles: Phi-4 Mini, Gemma, SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — guía de selección de modelos para inferencia móvil: qué modelos caben en teléfonos de 4–16 GB.',
          '[Directorio de software LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — el directorio completo de apps incluyendo apps de escritorio, backends de servidor y frontends para todas las plataformas.',
          '[La app de IA local más fácil para Windows, Mac y Linux](/es/power-local-llm/easiest-local-ai-app-windows-mac-linux) — el equivalente de escritorio: misma filosofía de comparar apps por facilidad de uso.',
          '[Mejores LLMs locales 2026](/es/local-llms/best-local-llms-2026) — artículo de autoridad sobre modelos: qué modelos de peso abierto usar en todas las configuraciones de hardware.',
          '[Mejores alternativas de código abierto a ChatGPT Plus](/es/prompt-bites/best-open-source-alternatives-to-chatgpt-plus) — Open WebUI, LibreChat y Jan: comparación de funciones con ChatGPT Plus.',
          '[Mejor modelo Qwen para programación](/es/prompt-bites/best-qwen-model-for-coding) — Qwen3-Coder en Android via Termux + Ollama: viabilidad y configuración.',
          '[Picks rápidos de apps LLM para Android](/es/prompt-bites/best-local-llm-apps-android) — ¿solo quieres saber qué app instalar? Comparación rápida sin benchmarks.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Las mejores apps de LLM local para Android en 2026: 6 apps comparadas en teléfonos reales',
      datePublished: '2026-05-08',
      dateModified: '2026-06-14',
      url: 'https://www.promptquorum.com/es/power-local-llm/best-local-llm-apps-android-2026',
      inLanguage: 'es',
      image: 'https://www.promptquorum.com/api/og/best-local-llm-apps-android-2026?lang=es',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        url: 'https://www.promptquorum.com/about',
        sameAs: [
          'https://www.linkedin.com/in/hanskuepper/',
          'https://x.com/HansKuepperAPPs',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Intermediate',
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-06-14',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Os melhores apps de LLM local para Android em 2026: 6 apps comparados em celulares reais',
    seoTitle: 'LLMs Locais no Android 2026: Velocidade, NPU e Configuração',
    intro:
      'Seis apps de Android executam modelos de linguagem grandes totalmente offline em 2026: MLC Chat, Maid, Layla, Ollama via Termux, Private AI e PocketPal AI. Eles diferem na utilização do NPU, na amplitude da biblioteca de modelos e na integração com o Android — e a melhor opção depende de você querer velocidade (MLC Chat com NPU Hexagon), máxima flexibilidade de modelos (Ollama via Termux) ou uma interface nativa refinada (Layla ou PocketPal AI). Este guia compara os seis no Samsung Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5) e OnePlus 13 (Snapdragon 8 Elite), cobrindo a inferência do Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5, as realidades da fragmentação do Android e como cada app gerencia o armazenamento, os limites em segundo plano e o painel de compartilhamento do Android.',
    metaDescription:
      'Como os LLMs locais rodam no Android 2026 — benchmarks no S25 Ultra, Pixel 9 Pro e OnePlus 13. Velocidades NPU, suporte GGUF, limites de RAM. 6 apps comparados.',
    twitterDescription:
      'IA local no Android em 2026: MLC Chat atinge ~40 tok/seg com NPU Hexagon da Snapdragon. Maid dá acesso GGUF completo. Ollama via Termux é o caminho para usuários avançados. Comparação completa de 6 apps no S25 Ultra, Pixel 9 Pro, OnePlus 13.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Qwen3 1.7B',
      'Qwen3 4B',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM2 1.7B',
    ],
    current_hardware_mentioned: [
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
      'Snapdragon 8 Elite Hexagon NPU',
      'Google Tensor G5',
      'MediaTek Dimensity 9400 APU',
    ],
    audience:
      'Usuários de Android que querem executar modelos de IA localmente no celular — sem APIs na nuvem, sem assinaturas, sem enviar dados para fora do dispositivo. Abrange desde iniciantes instalando o primeiro app até usuários avançados que constroem pipelines de Termux + Ollama.',
    readTime: '14 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'apps de LLM local para Android',
    targetKeywords: [
      'best local llm apps android 2026',
      'run local ai android phone',
      'mlc chat android review',
      'ollama android termux',
      'pocketpal ai android',
      'offline ai android no internet',
    ],
    leadAnswerBlock:
      '**O MLC Chat é o app de LLM local mais rápido para Android em 2026 — ele usa o NPU Hexagon da Snapdragon no Galaxy S25 Ultra e no OnePlus 13 para alcançar ~40 tokens/seg no Qwen3 1.7B, frente a 8–12 tokens/seg dos apps apenas-CPU no mesmo dispositivo. O PocketPal AI é o app mais equilibrado para a maioria dos usuários: suporta qualquer modelo GGUF, tem uma interface nativa refinada e gerencia o armazenamento do Android corretamente. Ollama via Termux é o caminho para usuários avançados — o ecossistema Ollama completo (todos os modelos, API compatível com OpenAI, uso de ferramentas) no seu celular, ao custo de uma configuração por terminal. Maid é a escolha purista de código aberto: distribuído pelo F-Droid, totalmente offline, sem dependência da Play Store e com importação direta de GGUF. Layla é a opção amigável para iniciantes com uma seleção curada de modelos. Private AI foca em privacidade de ponta a ponta com uma configuração simples e não técnica. Os usuários de Android têm uma vantagem crítica sobre o iPhone: o sideloading, o Termux e a capacidade de instalar pelo F-Droid dão acesso a ferramentas que simplesmente não estão disponíveis no iOS.**',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor app para executar IA local no Android em 2026?',
        answer:
          'O MLC Chat é o mais rápido em dispositivos Snapdragon 8 Elite (S25 Ultra, OnePlus 13) graças ao suporte ao NPU Hexagon — alcançando ~40 tokens/seg no Qwen3 1.7B. O PocketPal AI é a melhor escolha geral para a maioria dos usuários: amplo suporte a GGUF, interface refinada e correto gerenciamento do armazenamento do Android. Ollama via Termux dá o ecossistema Ollama completo, incluindo uso de ferramentas e uma API compatível com OpenAI. No Pixel 9 Pro (Tensor G5), o suporte a NPU é limitado para apps de terceiros — MLC Chat e PocketPal AI rodam ambos apenas-CPU ali, entregando ~12–18 tokens/seg no Phi-4 Mini.',
        bullets: [
          'MLC Chat — o mais rápido no Snapdragon 8 Elite via NPU Hexagon: ~40 tok/seg (Qwen3 1.7B) no Galaxy S25 Ultra.',
          'PocketPal AI — o melhor no geral: suporte a GGUF, interface refinada, armazenamento Android correto, integração com Hugging Face.',
          'Ollama via Termux — o melhor para usuários avançados: ecossistema Ollama completo, uso de ferramentas, API compatível com OpenAI no dispositivo.',
          'Maid — a melhor escolha de código aberto: distribuição F-Droid, sem dependência do Google Play, importação GGUF direta via gerenciador de arquivos.',
          'Layla — o melhor para iniciantes: downloads de modelos curados, integração simples, sem terminal necessário.',
          'Private AI — o melhor para usuários que priorizam a privacidade: sem telemetria de rede, permissões mínimas, configuração simples.',
          'No Tensor G5 (Pixel 9): o NPU não é exposto a apps de terceiros — os seis apps rodam apenas-CPU, entregando 10–18 tok/seg no Phi-4 Mini.',
          'Vantagem do Android: Termux, F-Droid e sideloading desbloqueiam ferramentas indisponíveis no iOS — Ollama via Termux não tem equivalente no iPhone.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Tabela comparativa', anchor: '#comparison-table' },
      { label: 'Qual app você deve escolher?', anchor: '#which-app' },
      { label: 'Comparativo de chipsets: Snapdragon vs MediaTek vs Tensor', anchor: '#chipsets' },
      { label: 'MLC Chat', anchor: '#mlc-chat' },
      { label: 'Maid', anchor: '#maid' },
      { label: 'Layla', anchor: '#layla' },
      { label: 'Ollama via Termux', anchor: '#ollama-termux' },
      { label: 'Private AI', anchor: '#private-ai' },
      { label: 'PocketPal AI', anchor: '#pocketpal-ai' },
      { label: 'Fragmentação do Android: armazenamento, RAM e limites em segundo plano', anchor: '#android-fragmentation' },
      { label: 'Integração com o painel de compartilhamento do Android', anchor: '#share-sheet' },
      { label: 'Caminhos de sideload e Termux', anchor: '#sideload-paths' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-llm-apps-android-2026-static.html',
    gammaDescription: 'A apresentação cobre: 6 apps de LLM local para Android comparados em 3 celulares reais (Galaxy S25 Ultra, Pixel 9 Pro, OnePlus 13), tabela de velocidades (MLC Chat ~40 tok/seg com NPU Hexagon da Snapdragon, PocketPal AI ~16 tok/seg), comparativo de chipsets (Snapdragon 8 Elite vs Tensor G5 vs MediaTek Dimensity 9400), guia de seleção de app por caso de uso, soluções para os limites em segundo plano do Android e 6 erros comuns a evitar. Baixe o PDF como cartão de referência de IA local para Android.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O MLC Chat é o líder em velocidade no Snapdragon 8 Elite.** O NPU Hexagon entrega ~40 tok/seg no Qwen3 1.7B e ~22 tok/seg no Phi-4 Mini no Galaxy S25 Ultra — 3–4× mais rápido que os apps apenas-CPU no mesmo hardware.',
          '**O PocketPal AI é a melhor escolha geral para a maioria dos usuários de Android.** Ele suporta o ecossistema GGUF completo, integra-se com o Hugging Face para downloads de modelos, gerencia o armazenamento do Android corretamente e tem a interface nativa móvel mais refinada dos seis apps.',
          '**Ollama via Termux é o único caminho para uma API local completa compatível com OpenAI no Android.** Isso importa para usuários avançados que querem uso de ferramentas, chamadas de funções ou a capacidade de conectar apps locais ao modelo do celular.',
          '**O Tensor G5 (Pixel 9 Pro) não expõe seu NPU para apps de terceiros.** Os seis apps rodam apenas-CPU no Pixel 9 Pro, entregando 10–18 tok/seg no Phi-4 Mini — mais lento que o resultado equivalente no Snapdragon 8 Elite.',
          '**Maid é a escolha F-Droid / sem Google.** Sem dependência da Play Store, sem conta Google necessária e com importação GGUF direta do gerenciador de arquivos. A melhor opção para usuários de Android que evitam os serviços do Google.',
          '**Os limites em segundo plano do Android são o maior problema de usabilidade.** O Android encerra agressivamente os processos em segundo plano na maioria das ROMs de fabricantes (especialmente Samsung, OnePlus e Xiaomi). Os apps que fazem inferência ativa precisam estar fixados na bandeja de apps recentes ou configurados nas configurações de otimização de bateria para evitar interrupções no meio da geração.',
          '**O armazenamento de modelos é o segundo maior problema do Android.** Cada modelo GGUF ocupa 1–8 GB. A divisão do Android entre partições de armazenamento interno significa que os modelos devem ser armazenados no diretório privado do app ou em um local configurado especificamente — não em "Downloads" para a maioria dos apps.',
          '**A vantagem do Android é real: Termux e sideloading desbloqueiam ferramentas sem equivalente no iOS.** Ollama via Termux não é possível no iPhone. Os apps do F-Droid e o sideloading com ADB dão aos usuários de Android acesso a apps que o Google Play pode não oferecer.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Dispositivos de teste:** Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM), Google Pixel 9 Pro (Tensor G5, 16 GB RAM), OnePlus 13 (Snapdragon 8 Elite, 16 GB RAM).',
          '**Famílias de chipsets testadas:** Snapdragon 8 Elite (NPU Hexagon), Tensor G5 (NPU não exposto a apps de terceiros), MediaTek Dimensity 9400 (especificações da APU cobertas; não é um dispositivo de teste).',
          '**Melhor modelo para Android de 12 GB:** Phi-4 Mini (3.8B, ~2.7 GB em Q4_K_M) — roda nos seis apps nos três celulares de teste.',
          '**Melhor modelo para Android de 8 GB:** Qwen3 1.7B ou SmolLM2 1.7B — roda em todos os apps; Gemma 3 1B para dispositivos muito limitados.',
          '**RAM mínima para modelos 3B:** 6 GB de RAM do dispositivo. Abaixo de 6 GB, use modelos de 1.7B.',
          '**Tokens/seg no S25 Ultra (Phi-4 Mini):** MLC Chat ~22 tok/seg (NPU), PocketPal AI ~16 tok/seg (CPU/Vulkan), Maid ~18 tok/seg (Vulkan), Layla ~14 tok/seg (CPU), Private AI ~13 tok/seg (CPU), Ollama Termux ~10 tok/seg (CPU).',
          '**Play Store vs F-Droid:** MLC Chat, Layla, PocketPal AI e Private AI estão no Google Play. Maid está principalmente no F-Droid. Ollama via Termux requer o Termux do F-Droid.',
          '**Integração com o painel de compartilhamento (Android):** Apenas PocketPal AI e Layla gerenciam a entrada do painel de compartilhamento do Android nativamente em maio de 2026.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa',
        content:
          '**Velocidades de token medidas no Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM) executando o Phi-4 Mini com quantização Q4_K_M.** A utilização do NPU varia conforme o app — o MLC Chat é o único app com suporte verificado ao NPU Hexagon em maio de 2026.',
                  image: '/images/best-local-llm-apps-android-2026-speed-comparison-pt.svg',
          imageCaption: 'O MLC Chat atinge 22 tok/seg no Phi-4 Mini via Snapdragon Hexagon NPU, o mais rápido entre 6 apps Android testados.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O MLC Chat lidera a velocidade de LLM local no Android em 2026 graças ao suporte ao NPU Hexagon da Snapdragon, alcançando ~22 tok/seg no Phi-4 Mini e ~40 tok/seg no Qwen3 1.7B no Galaxy S25 Ultra — 2–3× mais rápido que as alternativas apenas-CPU no mesmo hardware.',
          },
        ],
        columns: ['App', 'Tokens/sec (S25 Ultra, Phi-4 Mini)', 'NPU support', 'Best for'],
        rows: [
          {
            'App': 'MLC Chat',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~22 tok/seg (caminho NPU)',
            'NPU support': 'Sim — NPU Hexagon no Snapdragon 8 Elite',
            'Best for': 'Usuários que priorizam a velocidade em celulares Snapdragon',
          },
          {
            'App': 'Maid',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~18 tok/seg (GPU Vulkan)',
            'NPU support': 'Parcial — GPU Vulkan, sem caminho NPU dedicado',
            'Best for': 'Usuários de código aberto / F-Droid, acesso GGUF completo',
          },
          {
            'App': 'Layla',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~14 tok/seg (CPU)',
            'NPU support': 'Não',
            'Best for': 'Iniciantes, downloads de modelos curados',
          },
          {
            'App': 'Ollama via Termux',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~10 tok/seg (CPU)',
            'NPU support': 'Não (apenas CPU na compilação padrão do Termux)',
            'Best for': 'Usuários avançados, acesso a API, uso de ferramentas',
          },
          {
            'App': 'Private AI',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~13 tok/seg (CPU)',
            'NPU support': 'Não',
            'Best for': 'Usuários que priorizam a privacidade, permissões mínimas',
          },
          {
            'App': 'PocketPal AI',
            'Tokens/sec (S25 Ultra, Phi-4 Mini)': '~16 tok/seg (CPU/Vulkan)',
            'NPU support': 'Parcial — GPU Vulkan em dispositivos compatíveis',
            'Best for': 'A maioria dos usuários — melhor interface + ecossistema GGUF completo',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'No Pixel 9 Pro (Tensor G5), remova o MLC Chat do primeiro lugar — os seis apps rodam apenas-CPU ali, e PocketPal AI e Maid se destacam pela qualidade da interface. A vantagem do NPU desaparece por completo no Tensor G5 para apps de inferência de terceiros.',
          },
          {
            type: 'warning',
            text: 'As cifras de tok/seg de Layla e Private AI são estimativas do caminho CPU para o Phi-4 Mini Q4_K_M. As velocidades reais variam com o estado térmico — a inferência sustentada em um celular quente pode cair 20–30% em relação à cifra de partida a frio.',
          },
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Qual app você deve escolher?',
        content:
          '**O app certo depende do chipset do seu dispositivo e de quanto você valoriza a personalização frente à simplicidade.** Os usuários de Android se dividem nitidamente entre quem quer uma experiência nativa refinada (PocketPal AI, Layla) e quem quer controle máximo (Ollama via Termux, Maid). Ao contrário do iPhone, o Android permite ambos. Para entender melhor como os tamanhos de modelos se relacionam com os requisitos de RAM em diferentes dispositivos, veja o [guia de requisitos de VRAM →](/pt/local-llms/how-much-vram-local-llm).',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Escolha o MLC Chat se você tem um celular Snapdragon 8 Elite e quer a inferência mais rápida possível. Escolha o PocketPal AI se você quer o melhor app geral com o maior suporte de modelos e a interface mais refinada. Escolha Ollama via Termux se você quer uma API de IA local completa no celular e está confortável com um terminal. Escolha o Maid se você quer uma opção totalmente de código aberto, distribuída pelo F-Droid, sem dependência do Google. Escolha a Layla se você é novo em IA local e quer downloads de modelos curados. Escolha o Private AI se a privacidade de dados e as permissões mínimas são a sua principal preocupação.',
          },
        ],
        items: [
          '**Celular Snapdragon 8 Elite (S25 Ultra, OnePlus 13):** Comece com o MLC Chat. Se você precisa de modelos que não estão na biblioteca do MLC Chat, adicione o PocketPal AI como seu segundo app — ele cobre o ecossistema GGUF completo com inferência acelerada por Vulkan.',
          '**Pixel 9 Pro (Tensor G5):** A vantagem do NPU desaparece — o PocketPal AI é a melhor escolha pela qualidade da interface e amplitude de modelos. O MLC Chat passa para apenas-CPU no Tensor G5, perdendo sua vantagem de velocidade.',
          '**Qualquer Android, personalização em primeiro lugar:** Ollama via Termux + um front-end de chat (Alpaca, Open WebUI no Chrome) é a configuração mais capaz. Requer ~30 minutos de trabalho no terminal, mas dá acesso a API compatível com OpenAI, uso de ferramentas e toda a biblioteca de modelos do Ollama.',
          '**Celular sem Google / privacidade:** Maid pelo F-Droid. Funciona no GrapheneOS, CalyxOS e outras versões sem Google. Sem dependência do Play Services.',
          '**Celular com 8 GB de RAM:** Qualquer um dos seis apps com Qwen3 1.7B ou SmolLM2 1.7B. O PocketPal AI gerencia o armazenamento de modelos com mais elegância em dispositivos limitados.',
          '**Samsung Galaxy (qualquer modelo):** Esteja ciente do encerramento agressivo de processos em segundo plano da Samsung. Fixe o app de IA na bandeja de recentes e adicione-o à lista de exceções em Cuidado do dispositivo → Bateria → Apps em modo de suspensão para evitar a interrupção durante a inferência.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se você tem um celular Snapdragon e quer principalmente chat offline, execute tanto o MLC Chat (para velocidade em sessões curtas) quanto o PocketPal AI (para trabalho mais extenso com modelos não disponíveis na biblioteca do MLC Chat). Eles coexistem perfeitamente e usam armazenamento de modelos separado.',
          },
        ],
      },
      chipsets: {
        id: 'chipsets',
        title: 'Comparativo de chipsets: Snapdragon vs MediaTek vs Tensor',
        content:
          '**O Snapdragon 8 Elite é o chipset mais capaz para inferência de LLM local no Android em 2026 — seu NPU Hexagon é o único NPU móvel com suporte verificado no MLC Chat.** O Tensor G5 e o MediaTek Dimensity 9400 executam os seis apps apenas em modo CPU ou GPU Vulkan.',
                  image: '/images/best-local-llm-apps-android-2026-chipset-npu-pt.svg',
          imageCaption: 'O Hexagon NPU exposto do Snapdragon 8 Elite roda o Phi-4 Mini a 22 tok/seg; o caminho somente CPU do Tensor G5 atinge 10-18.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O NPU Hexagon do Snapdragon 8 Elite entrega uma inferência 2–3× mais rápida que a execução apenas-CPU no Android em 2026, mas apenas o MLC Chat expõe essa vantagem — todos os outros apps recorrem à CPU ou GPU Vulkan em todos os chipsets.',
          },
        ],
        columns: ['Chipset', 'Found in', 'NPU for third-party apps', 'Best inference path', 'Phi-4 Mini speed (est.)'],
        rows: [
          {
            'Chipset': 'Snapdragon 8 Elite',
            'Found in': 'Galaxy S25 series, OnePlus 13, Xiaomi 15 Pro',
            'NPU for third-party apps': 'Sim — NPU Hexagon via MLCC (apenas MLC Chat)',
            'Best inference path': 'NPU Hexagon (MLC Chat) ou GPU Vulkan (Maid, PocketPal)',
            'Phi-4 Mini speed (est.)': '~22 tok/seg (NPU) / ~16–18 tok/seg (Vulkan)',
          },
          {
            'Chipset': 'Google Tensor G5',
            'Found in': 'Série Pixel 9',
            'NPU for third-party apps': 'Não — o Google reserva o NPU para seus próprios apps',
            'Best inference path': 'CPU (todos os apps rodam apenas-CPU)',
            'Phi-4 Mini speed (est.)': '~12–15 tok/seg (CPU)',
          },
          {
            'Chipset': 'MediaTek Dimensity 9400',
            'Found in': 'Xiaomi 15 Ultra, Oppo Find X8 Pro, Vivo X200 Pro',
            'NPU for third-party apps': 'Limitado — acesso à APU da MediaTek via caminho NNAPI experimental',
            'Best inference path': 'GPU Vulkan (melhor opção para terceiros); NNAPI experimental',
            'Phi-4 Mini speed (est.)': '~14–18 tok/seg (Vulkan) / ~12 tok/seg (CPU)',
          },
          {
            'Chipset': 'Snapdragon 8 Gen 3',
            'Found in': 'Série Galaxy S24, OnePlus 12',
            'NPU for third-party apps': 'Parcial — Hexagon de geração anterior, suporte limitado no MLC Chat',
            'Best inference path': 'GPU Vulkan ou CPU',
            'Phi-4 Mini speed (est.)': '~12–15 tok/seg (Vulkan)',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não presuma que o NPU Tensor G5 do Google beneficia os apps de LLM local. O NPU do Google é reservado para serviços de ML de primeira parte (Google Tradutor, Gravador, processamento de fotos). Os apps de inferência de terceiros, incluindo os seis deste guia, rodam apenas-CPU em todos os celulares Pixel. Os 16 GB de RAM do Pixel 9 Pro são sua verdadeira vantagem — mais margem para modelos maiores, não inferência mais rápida.',
          },
          {
            type: 'tip',
            text: 'Os celulares MediaTek Dimensity 9400 se beneficiam do suporte a GPU Vulkan no Maid e no PocketPal AI. Se você tem um Xiaomi 15 Ultra ou Oppo Find X8 Pro, ative o Vulkan nas configurações do app para obter uma melhoria de velocidade de 30–40% em relação ao caminho CPU.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat',
        content:
          '**O MLC Chat (Machine Learning Compilation Chat) é o app de LLM local mais rápido para Android em dispositivos Snapdragon 8 Elite em 2026.** Desenvolvido pela equipe da MLC AI, ele compila modelos usando o framework MLCC, que mira diretamente o NPU Hexagon da Snapdragon — um caminho de otimização indisponível para apps que usam llama.cpp ou backends Vulkan genéricos.',
        items: [
          '**Biblioteca de modelos:** Curada — o MLC Chat inclui um conjunto de modelos pré-compilados otimizados para celular (Qwen3 1.7B, Phi-4 Mini, Gemma 3 1B, Llama 3.2 1B). A importação de modelos personalizados está disponível, mas requer a cadeia de ferramentas de compilação do MLC — não é um processo de um único toque.',
          '**Utilização do NPU:** Suporte verificado ao NPU Hexagon no Snapdragon 8 Elite (Galaxy S25 Ultra, OnePlus 13). Medido em ~40 tok/seg para o Qwen3 1.7B e ~22 tok/seg para o Phi-4 Mini no S25 Ultra — frente a ~12–16 tok/seg apenas-CPU no mesmo hardware.',
          '**Qualidade da interface:** Limpa, funcional, mínima. Apenas interface de chat — sem editor de prompt do sistema, sem cartões de personagem, sem troca de múltiplos modelos. Adequada para tarefas de chat focadas, não para configuração de usuários avançados.',
          '**Painel de compartilhamento do Android:** Não suportado em maio de 2026. Não pode receber texto de outros apps via o painel de compartilhamento padrão.',
          '**Confiabilidade offline:** Excelente. Depois que um modelo é compilado e armazenado em cache, o MLC Chat funciona com zero chamadas de rede. O processo em segundo plano é estável em comparação com alguns apps baseados em llama.cpp.',
          '**Armazenamento:** O MLC Chat armazena os pesos do modelo compilado em seu diretório privado de app (~3 GB para o Phi-4 Mini compilado para Snapdragon). Eles não são portáveis para outros apps — uma limitação frente aos apps baseados em GGUF.',
          '**Caminho de instalação:** Google Play Store. Código-fonte em [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A biblioteca de modelos do MLC Chat é curada e compilada. Se você precisa de um modelo que não está na biblioteca oficial (por exemplo, um Mistral Small com fine-tuning ou um modelo específico de domínio), o MLC Chat não pode ajudar — use o PocketPal AI ou o Maid para suporte GGUF arbitrário. O MLC Chat é uma ferramenta de velocidade, não de flexibilidade.',
          },
        ],
      },
      maid: {
        id: 'maid',
        title: 'Maid',
        content:
          '**Maid é o app de LLM local para Android totalmente de código aberto, com distribuição prioritária no F-Droid — construído com Flutter, usando llama.cpp como backend de inferência e distribuído sem dependência do Google Play.** Ele suporta importação direta de GGUF do gerenciador de arquivos, aceleração GPU Vulkan em dispositivos compatíveis e funciona em versões de Android sem Google (GrapheneOS, CalyxOS).',
        items: [
          '**Biblioteca de modelos:** Sem restrições. Qualquer arquivo de modelo GGUF pode ser importado via o gerenciador de arquivos do Android ou baixado via URL. Isso inclui modelos que não estão no Hugging Face ou em bibliotecas curadas de apps.',
          '**Utilização do NPU:** Caminho GPU Vulkan em dispositivos compatíveis — não NPU dedicado. No Snapdragon 8 Elite, o Vulkan entrega ~18 tok/seg para o Phi-4 Mini, frente a ~22 tok/seg com o caminho NPU do MLC Chat. Sem acesso ao NPU Hexagon.',
          '**Qualidade da interface:** Funcional, mas menos refinada que o PocketPal AI ou a Layla. Editor de prompt do sistema, controles de temperatura e gerenciamento básico do histórico de chat estão presentes. O suporte a cartões de personagem é limitado.',
          '**Painel de compartilhamento do Android:** Não suportado em maio de 2026.',
          '**Confiabilidade offline:** Excelente — a inferência baseada em llama.cpp é estável. Os limites em segundo plano de ROMs de fabricantes (Samsung, OnePlus) ainda se aplicam.',
          '**Armazenamento:** Modelos armazenados no diretório privado do app ou em um caminho especificado pelo usuário. Os arquivos GGUF são portáveis entre o Maid e o PocketPal AI se colocados em armazenamento compartilhado acessível.',
          '**Caminho de instalação:** F-Droid (primário), releases do GitHub. Código-fonte em [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid). Não disponível no Google Play.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se você está no GrapheneOS ou em uma versão de Android sem Google, o Maid é a melhor opção disponível — ele não tem dependência do Google Play Services. Instale via o cliente F-Droid ou baixe o APK diretamente da página de releases do GitHub e faça sideload com ADB.',
          },
        ],
      },
      layla: {
        id: 'layla',
        title: 'Layla',
        content:
          '**Layla é o app de LLM local para Android mais acessível para iniciantes — abstrai o gerenciamento de modelos por trás de um fluxo de download curado, não requer terminal e apresenta uma interface de chat refinada sem expor as configurações de inferência.** A contrapartida é uma seleção de modelos menor e inferência apenas-CPU.',
        items: [
          '**Biblioteca de modelos:** Curada, conjunto menor. A Layla oferece uma experiência de download gerenciada — selecione um modelo da biblioteca no app e ele baixa e configura automaticamente. A importação de GGUF personalizado não é um recurso principal.',
          '**Utilização do NPU:** Apenas caminho CPU — sem GPU Vulkan nem NPU Hexagon. Isso faz da Layla a mais lenta dos seis no Snapdragon 8 Elite (~14 tok/seg para o Phi-4 Mini), mas consistente em todos os chipsets de Android.',
          '**Qualidade da interface:** A mais alta dos seis apps para usuários de primeira viagem. Interface centrada no chat com gerenciamento claro de conversas, sem sobrecarga de configurações e troca de modelo fluida.',
          '**Painel de compartilhamento do Android:** Suportado — a Layla pode receber texto de outros apps via o painel de compartilhamento do Android, tornando-a um dos dois apps deste guia que se integram ao fluxo padrão de compartilhamento do Android.',
          '**Confiabilidade offline:** Boa. Totalmente offline depois que o modelo é baixado. Menos suscetível a encerramentos em segundo plano porque não executa um processo de servidor local (diferente do Ollama via Termux).',
          '**Armazenamento:** A Layla gerencia o armazenamento de modelos internamente. Nenhum gerenciamento manual de arquivos é necessário.',
          '**Caminho de instalação:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O suporte ao painel de compartilhamento da Layla a torna unicamente útil para fluxos de trabalho no Android: destaque texto em qualquer app → Compartilhar → Layla → pergunte algo sobre ele. Esse caso de uso — assistência rápida de IA em contexto sem trocar de app — é onde a Layla supera todos os outros apps desta lista.',
          },
        ],
      },
      ollamaTermux: {
        id: 'ollama-termux',
        title: 'Ollama via Termux',
        content:
          '**Ollama via Termux é o único caminho no Android para uma API local completa compatível com OpenAI — incluindo uso de ferramentas, chamadas de funções e a capacidade de conectar apps de terceiros do Android a um modelo rodando localmente.** A configuração leva 20–30 minutos e requer conforto com o terminal, mas o resultado é o mesmo ecossistema Ollama que os usuários de desktop executam no Mac e no Linux, agora em um celular.',
        numberedItems: [
          'Instale o Termux pelo F-Droid (não a versão da Play Store — a compilação da Play Store está desatualizada e quebra as instalações do Ollama).',
          'No Termux: `pkg update && pkg install curl`',
          'Instale o Ollama: `curl -fsSL https://ollama.com/install.sh | sh` — isso detecta o ambiente Android ARM64 e instala o binário correto.',
          'Baixe um modelo: `ollama pull qwen3:1.7b` ou `ollama pull phi4-mini`.',
          'Inicie o servidor: `ollama serve` (mantenha-o rodando em uma sessão do Termux ou use um widget em segundo plano).',
          'Interaja via Termux: `ollama run phi4-mini` — ou conecte qualquer app que suporte um endpoint compatível com OpenAI em `http://localhost:11434`.',
        ],
        items: [
          '**Biblioteca de modelos:** Ilimitada — a biblioteca completa de modelos do Ollama está disponível via `ollama pull [nome-do-modelo]`. Este é o acesso a modelos mais amplo de qualquer app deste guia.',
          '**Utilização do NPU:** Apenas CPU na compilação padrão do Ollama ARM64. Sem suporte a GPU Vulkan nem NPU Hexagon na configuração padrão do Termux em maio de 2026. Isso faz do Ollama o mais lento em tok/seg brutos (~10 tok/seg para o Phi-4 Mini no S25 Ultra).',
          '**Uso de ferramentas e chamadas de funções:** Suportado — o Ollama no Android gerencia o uso de ferramentas da mesma maneira que no desktop. Conecte qualquer frontend capaz de uso de ferramentas a localhost:11434.',
          '**Painel de compartilhamento do Android:** Não suportado diretamente. Solução: use um atalho do Termux:Widget para enviar o conteúdo da área de transferência para `ollama run [modelo]`.',
          '**Confiabilidade em segundo plano:** Problemática na Samsung e na OnePlus sem lista de exceções de otimização de bateria. Crie um atalho do Termux:Widget para `ollama serve` e fixe o Termux na bandeja de recentes. O Samsung One UI requer desativar explicitamente "Apps em modo de suspensão" para o Termux.',
          '**Caminho de instalação:** Termux pelo F-Droid, depois o script de instalação do Ollama via curl.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ollama via Termux em um celular será notavelmente mais lento que o Ollama em um desktop — ~10 tok/seg no Phi-4 Mini no S25 Ultra frente a 60+ tok/seg em uma RTX 4090. Use-o pela conveniência (API de bolso offline, consultas rápidas longe da mesa), não pelo desempenho. Para qualidade de modelos grandes no celular, a conexão remota a uma máquina doméstica rodando Ollama via Open WebUI no Chrome continua sendo a melhor opção.',
          },
          {
            type: 'tip',
            text: 'Instale o complemento Termux:Widget e crie um atalho de um único toque que execute `ollama serve`. Isso permite iniciar o servidor do Ollama a partir do widget da tela inicial do Android sem abrir o Termux. Uma vez servindo, qualquer app configurado para usar `localhost:11434` se conecta automaticamente.',
          },
        ],
      },
      privateAI: {
        id: 'private-ai',
        title: 'Private AI',
        content:
          '**Private AI é o app de LLM local para Android focado na privacidade — projetado para usuários que querem que toda a inferência permaneça no dispositivo com permissões mínimas, sem telemetria de rede e uma configuração simples e não técnica.** Ele solicita menos permissões que qualquer outro app deste guia e não contata servidores externos após o download inicial do modelo.',
        items: [
          '**Biblioteca de modelos:** Conjunto curado e revisado para privacidade. Os downloads são de fontes verificáveis. Sem acesso a repositórios arbitrários do Hugging Face — troca flexibilidade por um suprimento de modelos controlado e auditável.',
          '**Utilização do NPU:** Apenas caminho CPU. Consistente em todos os chipsets em ~13 tok/seg no Phi-4 Mini (S25 Ultra).',
          '**Qualidade da interface:** Limpa, mínima. Centrada no chat com exportação de conversas e sem telemetria de uso. Carece de opções de configuração avançadas (temperatura, top-p, prompts do sistema) — simplificada intencionalmente.',
          '**Painel de compartilhamento do Android:** Não suportado em maio de 2026.',
          '**Confiabilidade offline:** A melhor da categoria. Projetada para funcionar totalmente offline. Sem chamadas de rede em segundo plano, sem sincronização, sem análise.',
          '**Permissões:** Mínimas — solicita acesso ao armazenamento e ao microfone (para entrada de voz, opcional). Não solicita contatos, localização nem ID de publicidade.',
          '**Caminho de instalação:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se o seu caso de uso envolve texto profissional sensível — minutas jurídicas, anotações médicas, conteúdo empresarial confidencial — as permissões mínimas e a arquitetura auditável sem telemetria do Private AI são significativas. Para uso de produtividade geral, o PocketPal AI é uma escolha geral melhor, mas o modelo de confiança do Private AI é mais sólido.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI',
        content:
          '**O PocketPal AI é o melhor app de LLM local para Android no geral para a maioria dos usuários em 2026.** Ele combina o ecossistema completo de modelos GGUF (qualquer modelo do Hugging Face), aceleração GPU Vulkan, a interface nativa móvel mais refinada dos seis apps, suporte direto ao painel de compartilhamento do Android e correto gerenciamento do armazenamento do Android — uma combinação que nenhum outro app deste guia iguala.',
        items: [
          '**Biblioteca de modelos:** Ecossistema GGUF completo — navegue e baixe diretamente do Hugging Face dentro do app, ou importe arquivos GGUF locais. Isso cobre a mesma amplitude do Maid adicionando uma interface de descoberta curada.',
          '**Utilização do NPU:** Caminho GPU Vulkan em dispositivos compatíveis. No Snapdragon 8 Elite, entrega ~16 tok/seg no Phi-4 Mini — atrás do caminho NPU do MLC Chat (~22 tok/seg), mas à frente de todos os apps apenas-CPU no mesmo dispositivo.',
          '**Qualidade da interface:** A melhor interface nativa móvel dos seis apps. Navegação por gestos, gerenciamento de conversas, editor de prompt do sistema, benchmarking de modelos e um painel de configurações por modelo. Construído com React Native + llama.rn.',
          '**Painel de compartilhamento do Android:** Suportado — PocketPal AI e Layla são os únicos dois apps deste guia que se integram ao painel de compartilhamento do Android. Selecione texto em qualquer app → Compartilhar → PocketPal AI.',
          '**Confiabilidade offline:** Excelente. Sem processo de servidor em segundo plano (diferente do Ollama via Termux) — a inferência roda em processo, evitando os problemas de encerramento em segundo plano do Android que afetam as abordagens baseadas em servidor.',
          '**Armazenamento:** Armazena arquivos GGUF em armazenamento privado do app por padrão, com opção de apontar para armazenamento externo. Os arquivos de modelos são portáveis para o Maid se movidos para o armazenamento compartilhado do Android.',
          '**Caminho de instalação:** Google Play Store. Código-fonte em [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A ferramenta de benchmarking de modelos dentro do app do PocketPal AI (executa um prompt curto e mede tok/seg) é útil para comparar tamanhos de modelos no seu celular específico. Execute-a no Phi-4 Mini, Qwen3 1.7B e Qwen3 4B para encontrar o teto de velocidade prático do seu dispositivo antes de se comprometer com um modelo para uso diário.',
          },
        ],
      },
      androidFragmentation: {
        id: 'android-fragmentation',
        title: 'Fragmentação do Android: armazenamento, RAM e limites em segundo plano',
        content:
          '**A fragmentação do Android cria três problemas práticos para os apps de LLM local: conflitos de partições de armazenamento, alocação de RAM inconsistente e políticas agressivas de encerramento em segundo plano por parte dos fabricantes.** Os três afetam a confiabilidade do modelo em dispositivos Samsung, OnePlus, Pixel e outros fabricantes de Android de formas que não ocorrem no iOS.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'A fragmentação do Android significa que um app de LLM local que funciona perfeitamente em um Pixel 9 Pro pode travar no meio da inferência em um Galaxy S25 Ultra, não por causa do app ou do modelo, mas porque a política de encerramento em segundo plano da Samsung termina o processo para economizar bateria. Cada fabricante de Android personaliza essas políticas de forma diferente — o Pixel segue os padrões AOSP mais de perto; Samsung, OnePlus e Xiaomi têm todos um encerramento em segundo plano mais agressivo por padrão.',
          },
        ],
        items: [
          '**Partições de armazenamento:** O `/data/user/0/` do Android (armazenamento privado do app) e o `/sdcard/` (armazenamento compartilhado) são partições separadas. A maioria dos apps de LLM local armazena modelos no armazenamento privado do app, que não é navegável pelo gerenciador de arquivos sem root. Se você quer compartilhar um arquivo GGUF entre o Maid e o PocketPal AI, ele deve primeiro ser copiado para um local compartilhado.',
          '**Alocação de RAM:** O Android não garante uma alocação de memória aos apps de terceiros. Se o sistema precisa de RAM, ele encerra processos em segundo plano — incluindo os processos de inferência. Em dispositivos com 12 GB de RAM (S25 Ultra padrão), isso raramente é um problema durante o uso ativo. Em celulares com 8 GB de RAM, abrir qualquer outro app durante a inferência pode interrompê-la.',
          '**Encerramento em segundo plano do Samsung One UI:** O mais agressivo dos principais fabricantes de Android. Navegue até Configurações → Cuidado do dispositivo → Bateria → Limites de uso em segundo plano → Apps em modo de suspensão e remova manualmente qualquer app de LLM desta lista. Também fixe o app na bandeja de recentes tocando em seu ícone.',
          '**Encerramento em segundo plano do OnePlus OxygenOS:** Semelhante à Samsung. Vá até Configurações → Bateria → Otimização de bateria, encontre o app de LLM e defina-o como "Não otimizar". Adicionalmente, fixe o app na visão geral de recentes.',
          '**Pixel (mais próximo do AOSP):** O comportamento em segundo plano é o mais previsível. Os apps que solicitam a permissão `FOREGROUND_SERVICE` (PocketPal AI e Maid fazem isso) rodam de forma confiável durante a inferência ativa no Pixel. Ainda assim, a exclusão do otimizador de bateria é recomendada para sessões muito longas.',
          '**Xiaomi MIUI/HyperOS:** O encerramento em segundo plano mais agressivo depois da Samsung. O recurso "Economia de bateria" pode terminar a inferência no meio da geração. Vá até Configurações → Apps → Gerenciar apps → [app] → Economia de bateria → Sem restrições.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não dependa do comportamento em segundo plano padrão do Android para nenhum app de LLM local. Em dispositivos Samsung e OnePlus, a política padrão interromperá as sessões de inferência longas (>2 minutos) a menos que você adicione explicitamente o app à lista de exceções nas configurações de otimização de bateria. Essa é a causa número um dos relatos de "o app parou no meio da resposta" para todos os apps deste guia.',
          },
        ],
      },
      shareSheet: {
        id: 'share-sheet',
        title: 'Integração com o painel de compartilhamento do Android',
        content:
          '**A integração com o painel de compartilhamento do Android — a capacidade de selecionar texto em qualquer app e enviá-lo a uma IA local — é suportada por apenas dois dos seis apps: PocketPal AI e Layla.** Esse único recurso torna a IA local genuinamente útil como ferramenta em nível de sistema em vez de um app independente.',
        items: [
          '**Como funciona:** Selecione qualquer texto em qualquer app de Android (navegador web, e-mail, leitor de PDF, app de mensagens) → toque em Compartilhar → escolha PocketPal AI ou Layla → o texto selecionado aparece no campo de entrada do chat.',
          '**Painel de compartilhamento do PocketPal AI:** Recebe texto simples. Abre uma nova conversa com o texto selecionado pré-preenchido. Você pode então adicionar um prompt (por exemplo, "Resuma isto", "Traduza para o alemão", "Verifique os fatos disto") e enviá-lo ao modelo local.',
          '**Painel de compartilhamento da Layla:** A mesma funcionalidade básica. Transição de interface ligeiramente mais fluida do painel de compartilhamento para a interface de chat.',
          '**MLC Chat, Maid, Ollama via Termux, Private AI:** Não aparecem no painel de compartilhamento do Android em maio de 2026. O texto deve ser copiado e colado manualmente nesses apps.',
          '**Casos de uso práticos:** Resumir artigos da web enquanto navega, traduzir e-mails, redigir respostas a mensagens, verificar parágrafos — tudo sem que o texto saia do seu dispositivo ou toque uma API na nuvem.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para usuários avançados que querem integração com o painel de compartilhamento com a biblioteca completa de modelos (incluindo modelos que não estão nos conjuntos curados da Layla ou do PocketPal AI), a solução é: copie o texto → abra o PocketPal AI → carregue qualquer modelo GGUF → cole. A integração com o Hugging Face do PocketPal AI significa que você pode carregar um modelo personalizado e ainda usá-lo como app de destino de compartilhamento.',
          },
        ],
      },
      sideloadPaths: {
        id: 'sideload-paths',
        title: 'Caminhos de sideload e Termux: a vantagem do Android',
        content:
          '**O ecossistema de sideloading e Termux do Android dá aos usuários de Android acesso a ferramentas de IA local que não existem no iOS.** Esta é a diferença prática mais marcante entre Android e iPhone para o uso de IA local em 2026.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama via Termux — um servidor de API de LLM local completo em um celular — é uma capacidade exclusiva do Android em 2026: o sandbox do iOS da Apple impede a configuração equivalente no iPhone, tornando o Android a única plataforma móvel para usuários que precisam de uma API compatível com OpenAI no dispositivo.',
          },
        ],
        items: [
          '**Termux:** Um ambiente Linux em um app de Android. Instale via F-Droid (não a Play Store). Executa bash, Python, curl e praticamente qualquer binário Linux ARM64 — incluindo o Ollama. O Termux não está disponível no iOS; seu equivalente (iSH) carece de capacidades de rede para servir APIs locais.',
          '**Sideloading com F-Droid:** Instale apps sem o Google Play — útil para Maid, Termux e outras ferramentas de IA local de código aberto. Baixe o APK do cliente F-Droid, ative "Instalar apps de fontes desconhecidas" nas configurações de segurança do Android, instale o F-Droid e depois instale qualquer app listado no F-Droid sem conta Google.',
          '**Sideloading com ADB:** Usuários avançados podem fazer sideload de APKs diretamente via Android Debug Bridge (`adb install [app.apk]`). Isso permite instalar apps cuja listagem na Play Store é restrita por região ou foi removida.',
          '**Vantagem das ROMs personalizadas:** Os usuários de LineageOS, GrapheneOS e CalyxOS podem desativar o Google Play completamente e usar F-Droid + ADB como seus únicos caminhos de instalação de apps. Maid e Termux funcionam totalmente nessas plataformas. Não existe equivalente no iOS.',
          '**Modo servidor do llama.cpp via Termux:** Além do Ollama, o próprio llama.cpp pode ser compilado via Termux e executado em modo servidor — dando uma API local alternativa que alguns usuários preferem pelo seu menor uso de memória em comparação com o Ollama.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A configuração de Termux + Ollama também funciona como servidor de API local para outros apps no mesmo celular. Por exemplo, apps como o Obsidian (com o plugin Local REST API) ou automações personalizadas semelhantes ao Atalhos podem consultar `localhost:11434/api/generate` para executar tarefas de IA sem internet — um padrão de automação de tela inicial genuinamente útil.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        content: '**A maioria das falhas com apps de LLM local no Android vem de quatro erros evitáveis.**',
        items: [
          '**Instalar o Termux pela Play Store.** A versão da Play Store do Termux está desatualizada (o Termux parou de atualizá-la em 2020). A compilação atual mantida está no F-Droid. `pkg install curl` e o script de instalação do Ollama falham na versão do Termux da Play Store.',
          '**Esperar velocidade de NPU em um celular Pixel.** O NPU Tensor G5 do Google não é acessível a apps de terceiros. Os seis apps rodam apenas-CPU em todos os modelos Pixel. A vantagem de NPU do MLC Chat aplica-se apenas no Snapdragon 8 Elite e não se transfere para o Pixel.',
          '**Pular a lista de exceções de otimização de bateria na Samsung.** Os celulares Galaxy encerram os processos em segundo plano agressivamente. Uma geração que dure mais de 90 segundos provavelmente será interrompida pela política de encerramento em segundo plano a menos que o Termux ou o app de LLM estejam explicitamente na lista de exceções.',
          '**Baixar modelos grandes demais para o dispositivo.** Um modelo 7B Q4_K_M (~4.7 GB) requer ~6 GB de RAM disponível. Em um celular de 12 GB com a sobrecarga do sistema, isso é apertado. Em um celular de 8 GB, ele encerrará o app por OOM no meio da geração. Use o Phi-4 Mini (3.8B, ~2.7 GB) para dispositivos de 8–10 GB e o Qwen3 1.7B (~1.1 GB) para qualquer coisa abaixo disso.',
          '**Presumir que o armazenamento em Downloads é acessível.** A maioria dos apps de LLM local armazena arquivos de modelos em armazenamento privado do app (`/data/user/0/[pacote-do-app]/`), que não é navegável pelo gerenciador de arquivos sem root. Se você baixar um GGUF para a pasta Downloads esperando que o app o encontre, ele não o fará — use a função de importação integrada do app ou aponte para o caminho correto nas configurações.',
          '**Executar dois apps de inferência simultaneamente.** Cada app carrega o modelo na RAM. Dois modelos de 3B em um celular de 12 GB deixam ~5 GB para o sistema operacional, o que dispara encerramentos. Se você usa tanto o MLC Chat quanto o PocketPal AI, feche um antes de abrir o outro.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'MLC Chat GitHub e documentação — [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)',
          'Maid GitHub (Mobile Artificial Intelligence) — [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
          'PocketPal AI GitHub — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Documentação oficial do Ollama — [ollama.com](https://ollama.com)',
          'Documentação oficial do Termux — [wiki.termux.com](https://wiki.termux.com)',
          'Documentação técnica do NPU Hexagon do Snapdragon 8 Elite — Qualcomm Developer Network',
          'Especificações da APU MediaTek Dimensity 9400 — página de produto da MediaTek',
          'Resumo do chip Google Tensor G5 — documentação de hardware do Google',
          'Otimização de bateria e limites de processos em segundo plano do Android — documentação para desenvolvedores do Android',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Um Pixel 9 Pro consegue executar um modelo de 7B?',
            a: 'Sim, o Pixel 9 Pro tem 16 GB de RAM — margem suficiente para executar um modelo 7B Q4_K_M (~4.7 GB de peso do modelo) com RAM do sistema ainda disponível. A velocidade é ~8–10 tok/seg nesse tamanho (apenas-CPU no Tensor G5). Use o PocketPal AI ou o Maid com um GGUF de 7B para este caso de uso. Para velocidade de conversa em tempo real, fique com o Phi-4 Mini (3.8B, ~14 tok/seg) no Pixel 9 Pro.',
          },
          {
            q: 'Esses apps usam o NPU da Snapdragon?',
            a: 'Apenas o MLC Chat usa o NPU Hexagon da Snapdragon, e somente em dispositivos Snapdragon 8 Elite (série Galaxy S25, OnePlus 13). Os outros cinco apps usam CPU ou GPU Vulkan. O NPU Hexagon entrega uma inferência 2–3× mais rápida no MLC Chat em comparação com o caminho CPU no mesmo dispositivo.',
          },
          {
            q: 'Posso executar IA local em um Samsung Galaxy S22?',
            a: 'Sim, em variantes com 8 GB de RAM. O Galaxy S22 roda o Snapdragon 8 Gen 1 (ou Exynos 2200 em algumas regiões). PocketPal AI e Maid com Qwen3 1.7B ou SmolLM2 1.7B funcionam a ~8–12 tok/seg. O Phi-4 Mini (3.8B) é viável, mas apertado com 8 GB de RAM — feche todos os outros apps primeiro. O caminho NPU do MLC Chat não é verificado no Snapdragon 8 Gen 1.',
          },
          {
            q: 'Preciso fazer root no meu celular para IA local?',
            a: 'Não. Os seis apps deste guia funcionam em celulares Android sem root. O Termux requer ativar "Instalar apps de fontes desconhecidas" para o APK do F-Droid, mas isso não é root. O root só é relevante para acessar os diretórios de armazenamento privado dos apps a partir de um gerenciador de arquivos — não é necessário para a inferência.',
          },
          {
            q: 'Posso usar esses apps com o Termux?',
            a: 'Ollama via Termux é sua própria configuração completa — você instala o Ollama dentro do Termux e interage via o terminal do Termux. Os outros cinco apps (MLC Chat, Maid, Layla, Private AI, PocketPal AI) são apps de Android independentes que não interagem com o Termux. Usuários avançados executam ambos: Ollama no Termux para acesso a API e PocketPal AI para uma interface de chat refinada.',
          },
          {
            q: 'Como eles gerenciam os limites em segundo plano do Android?',
            a: 'Os limites em segundo plano são o maior problema de confiabilidade para os apps de LLM local no Android. PocketPal AI e Maid solicitam a permissão FOREGROUND_SERVICE, o que os torna mais resistentes ao encerramento em segundo plano. Ollama via Termux é vulnerável às políticas de encerramento em segundo plano da Samsung e da OnePlus a menos que o Termux esteja explicitamente na lista de exceções nas configurações de otimização de bateria. No Pixel, o comportamento em segundo plano é mais previsível. No Samsung One UI, adicione manualmente qualquer app de LLM à lista de exceções em Cuidado do dispositivo → Bateria → Apps em modo de suspensão.',
          },
          {
            q: 'Posso compartilhar a saída da IA local com outros apps?',
            a: 'Sim, a partir de qualquer app — copie a resposta da IA e cole em qualquer lugar. Para a direção inversa (enviar texto de outro app para a IA), apenas PocketPal AI e Layla aparecem no painel de compartilhamento do Android em maio de 2026.',
          },
          {
            q: 'Esses apps suportam o Android Auto?',
            a: 'Não. Nenhum dos seis apps suporta o Android Auto em maio de 2026. O Android Auto restringe quais apps podem rodar enquanto se dirige, e nenhum dos apps de LLM local construiu a interface compatível com Auto necessária para a certificação.',
          },
          {
            q: 'Qual app gerencia melhor o armazenamento de modelos?',
            a: 'O PocketPal AI gerencia o armazenamento de modelos com mais elegância — ele se integra diretamente com o Hugging Face para downloads dentro do app, gerencia corretamente a divisão de partições de armazenamento do Android e fornece uma interface de gerenciamento de modelos. O Maid é o melhor para usuários que querem gerenciar arquivos GGUF manualmente via o sistema de arquivos. O MLC Chat usa um formato de modelo compilado proprietário que não é portável para outros apps.',
          },
          {
            q: 'Posso executar vários modelos simultaneamente?',
            a: 'Só se o seu dispositivo tiver RAM suficiente para ambos os modelos mais a sobrecarga do sistema operacional Android. Em um Pixel 9 Pro de 16 GB: dois modelos Phi-4 Mini (2.7 GB cada) deixam ~10 GB para o sistema operacional — tecnicamente viável, mas muito apertado. Na prática, feche um app antes de abrir o outro. Ollama via Termux suporta a troca de modelos com um único processo `ollama serve`, carregando um modelo de cada vez.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores apps de LLM local para iPhone 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o equivalente no iOS: LLM Farm, Pocket Paladin e o panorama de inferência no iPhone.',
          '[Como executar IA em um tablet: iPad e Android (2026)](/pt/power-local-llm/run-ai-on-tablet-ipad-android) — no dispositivo vs conexão remota para a tela maior, com recomendações específicas para tablets.',
          '[Modelos de LLM móveis: Phi-4 Mini, Gemma, SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — guia de seleção de modelos para inferência móvel: quais modelos cabem em celulares de 4–16 GB.',
          '[Diretório de software de LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — o diretório completo de apps incluindo apps de desktop, backends de servidor e frontends para todas as plataformas.',
          '[O app de IA local mais fácil para Windows, Mac e Linux](/pt/power-local-llm/easiest-local-ai-app-windows-mac-linux) — o equivalente de desktop: a mesma filosofia de comparar apps por facilidade de uso.',
          '[Melhores LLMs locais 2026](/pt/local-llms/best-local-llms-2026) — artigo de autoridade sobre modelos: quais modelos de peso aberto usar em todas as configurações de hardware.',
          '[Melhores alternativas de código aberto ao ChatGPT Plus](/pt/prompt-bites/best-open-source-alternatives-to-chatgpt-plus) — Open WebUI, LibreChat e Jan: comparação de recursos com o ChatGPT Plus.',
          '[Melhor modelo Qwen para programação](/pt/prompt-bites/best-qwen-model-for-coding) — Qwen3-Coder no Android via Termux + Ollama: viabilidade e configuração.',
          '[Escolhas rápidas de apps LLM para Android](/pt/prompt-bites/best-local-llm-apps-android) — só quer saber qual app instalar? Comparação rápida sem benchmarks.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Os melhores apps de LLM local para Android em 2026: 6 apps comparados em celulares reais',
      datePublished: '2026-05-08',
      dateModified: '2026-06-14',
      url: 'https://www.promptquorum.com/pt/power-local-llm/best-local-llm-apps-android-2026',
      inLanguage: 'pt-BR',
      image: 'https://www.promptquorum.com/api/og/best-local-llm-apps-android-2026?lang=pt',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        url: 'https://www.promptquorum.com/about',
        sameAs: [
          'https://www.linkedin.com/in/hanskuepper/',
          'https://x.com/HansKuepperAPPs',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-06-14',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'أفضل تطبيقات النماذج اللغوية المحلية لنظام ⁨Android⁩ في ⁨2026⁩: مقارنة ⁨6⁩ تطبيقات على هواتف حقيقية',
    seoTitle: '⁨LLMs⁩ محلية على ⁨Android 2026⁩: الأداء و⁨NPU⁩ والإعداد',
    intro:
      'ستة تطبيقات Android تشغّل النماذج اللغوية الكبيرة بالكامل دون اتصال بالإنترنت في 2026: MLC Chat وMaid وLayla وOllama عبر Termux وPrivate AI وPocketPal AI. تتفاوت هذه التطبيقات في استخدام وحدة المعالجة العصبية (NPU) واتساع مكتبة النماذج والتكامل مع Android — ويعتمد الاختيار الأمثل على أولويتك: السرعة (MLC Chat مع NPU Hexagon) أو أقصى مرونة في النماذج (Ollama عبر Termux) أو واجهة مستخدم أصلية مصقولة (Layla أو PocketPal AI). يقارن هذا الدليل التطبيقات الستة على Samsung Galaxy S25 Ultra (Snapdragon 8 Elite) وPixel 9 Pro (Tensor G5) وOnePlus 13 (Snapdragon 8 Elite)، مع تغطية الاستدلال عبر Snapdragon Hexagon NPU مقابل MediaTek APU مقابل Tensor G5، وواقع تشرذم Android، وكيفية تعامل كل تطبيق مع التخزين وحدود الخلفية وقائمة المشاركة في Android.',
    metaDescription:
      'أداء النماذج اللغوية المحلية فعلياً على Android 2026: قياسات على S25 Ultra وPixel 9 Pro. سرعات NPU ودعم GGUF وحدود RAM. 6 تطبيقات.',
    twitterDescription:
      'الذكاء الاصطناعي المحلي على Android في 2026: يبلغ MLC Chat ~40 رمز/ث مع NPU Hexagon من Snapdragon. يوفر Maid وصولاً كاملاً إلى GGUF. برنامج Ollama عبر Termux هو مسار المستخدمين المتقدمين. مقارنة كاملة لـ 6 تطبيقات على S25 Ultra وPixel 9 Pro وOnePlus 13.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Qwen3 1.7B',
      'Qwen3 4B',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM2 1.7B',
    ],
    current_hardware_mentioned: [
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
      'Snapdragon 8 Elite Hexagon NPU',
      'Google Tensor G5',
      'MediaTek Dimensity 9400 APU',
    ],
    audience:
      'مستخدمو Android الراغبون في تشغيل نماذج الذكاء الاصطناعي محلياً على هواتفهم — دون واجهات برمجية سحابية، ودون اشتراكات، ودون إرسال البيانات خارج الجهاز. يشمل الدليل المبتدئين الذين يثبّتون تطبيقهم الأول وصولاً إلى المستخدمين المتقدمين الذين يبنون خطوط معالجة Termux + Ollama.',
    readTime: '14 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'تطبيقات النماذج اللغوية المحلية لنظام Android',
    targetKeywords: [
      'أفضل تطبيقات LLM محلية Android 2026',
      'تشغيل ذكاء اصطناعي محلي على هاتف Android',
      'مراجعة MLC Chat Android',
      'Ollama Android Termux',
      'PocketPal AI Android',
      'ذكاء اصطناعي دون إنترنت Android',
    ],
    leadAnswerBlock:
      '**MLC Chat هو أسرع تطبيق LLM محلي لنظام Android في 2026 — إذ يستخدم NPU Hexagon من Snapdragon على Galaxy S25 Ultra وOnePlus 13 ليصل إلى ~40 رمز/ث على Qwen3 1.7B، مقارنةً بـ 8–12 رمز/ث للتطبيقات المعتمدة على المعالج فقط على الجهاز ذاته. يُعدّ PocketPal AI أفضل تطبيق متوازن لمعظم المستخدمين: يدعم أي نموذج GGUF، ويمتلك واجهة مستخدم أصلية مصقولة، ويتعامل مع تخزين Android بشكل صحيح. برنامج Ollama عبر Termux هو مسار المستخدمين المتقدمين — المنظومة الكاملة لـ Ollama (جميع النماذج، وواجهة برمجية متوافقة مع OpenAI، واستخدام الأدوات) على هاتفك، بتكلفة إعداد عبر الطرفية. Maid هو الخيار المفضل لمحبي المصدر المفتوح: موزَّع عبر F-Droid، يعمل دون اتصال كامل، بلا اعتماد على Play Store، ويدعم استيراد GGUF مباشرة. Layla هو الخيار الملائم للمبتدئين مع مجموعة نماذج منتقاة. يركّز Private AI على الخصوصية الشاملة بإعداد بسيط غير تقني. يمتلك مستخدمو Android ميزة حاسمة على iPhone: التحميل الجانبي وTermux والقدرة على التثبيت من F-Droid تتيح الوصول إلى أدوات غير متاحة على نظام iOS.**',
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل تطبيق لتشغيل الذكاء الاصطناعي المحلي على Android في 2026؟',
        answer:
          'MLC Chat هو الأسرع على أجهزة Snapdragon 8 Elite (S25 Ultra وOnePlus 13) بفضل دعم NPU Hexagon — إذ يصل إلى ~40 رمز/ث على Qwen3 1.7B. PocketPal AI هو الخيار الأفضل بشكل عام لمعظم المستخدمين: دعم واسع لـ GGUF وواجهة مصقولة وإدارة صحيحة لتخزين Android. برنامج Ollama عبر Termux يوفر المنظومة الكاملة لـ Ollama بما في ذلك استخدام الأدوات وواجهة برمجية متوافقة مع OpenAI. على Pixel 9 Pro (Tensor G5)، دعم NPU محدود للتطبيقات الخارجية — يعمل MLC Chat وPocketPal AI كلاهما بالمعالج فقط هناك، بسرعة ~12–18 رمز/ث على Phi-4 Mini.',
        bullets: [
          'MLC Chat — الأسرع على Snapdragon 8 Elite عبر NPU Hexagon: ~40 رمز/ث (Qwen3 1.7B) على Galaxy S25 Ultra.',
          'PocketPal AI — الأفضل عموماً: دعم GGUF وواجهة مصقولة وتخزين Android صحيح وتكامل مع Hugging Face.',
          'Ollama عبر Termux — الأفضل للمستخدمين المتقدمين: منظومة Ollama الكاملة واستخدام الأدوات وواجهة برمجية متوافقة مع OpenAI على الجهاز.',
          'Maid — الخيار الأمثل للمصدر المفتوح: توزيع F-Droid، بلا اعتماد على Google Play، استيراد GGUF مباشر عبر مدير الملفات.',
          'Layla — الأفضل للمبتدئين: تنزيل نماذج منتقاة وإعداد بسيط بلا طرفية.',
          'Private AI — الأفضل لمستخدمي الخصوصية: بلا قياس عن بُعد للشبكة وأذونات محدودة وإعداد بسيط.',
          'على Tensor G5 (Pixel 9): NPU غير مكشوف للتطبيقات الخارجية — التطبيقات الستة تعمل بالمعالج فقط بسرعة 10–18 رمز/ث على Phi-4 Mini.',
          'ميزة Android: Termux وF-Droid والتحميل الجانبي تفتح أدوات غير متاحة على iOS — برنامج Ollama عبر Termux لا مكافئ له على iPhone.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'جدول المقارنة', anchor: '#comparison-table' },
      { label: 'أي تطبيق يناسبك؟', anchor: '#which-app' },
      { label: 'مقارنة الشرائح: Snapdragon مقابل MediaTek مقابل Tensor', anchor: '#chipsets' },
      { label: 'MLC Chat', anchor: '#mlc-chat' },
      { label: 'Maid', anchor: '#maid' },
      { label: 'Layla', anchor: '#layla' },
      { label: 'Ollama عبر Termux', anchor: '#ollama-termux' },
      { label: 'Private AI', anchor: '#private-ai' },
      { label: 'PocketPal AI', anchor: '#pocketpal-ai' },
      { label: 'تشرذم Android: التخزين والذاكرة وحدود الخلفية', anchor: '#android-fragmentation' },
      { label: 'التكامل مع قائمة المشاركة في Android', anchor: '#share-sheet' },
      { label: 'مسارات التحميل الجانبي وTermux', anchor: '#sideload-paths' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-llm-apps-android-2026-static.html',
    gammaDescription: 'يتناول عرض الشرائح أدناه: مقارنة 6 تطبيقات LLM محلية لنظام Android على 3 هواتف حقيقية (Galaxy S25 Ultra وPixel 9 Pro وOnePlus 13)، وجدول سرعات (MLC Chat ~40 رمز/ث مع NPU Hexagon من Snapdragon، وPocketPal AI ~16 رمز/ث)، ومقارنة الشرائح (Snapdragon 8 Elite مقابل Tensor G5 مقابل MediaTek Dimensity 9400)، ودليل اختيار التطبيق حسب حالة الاستخدام، وحلول لحدود الخلفية في Android، و6 أخطاء شائعة يجب تجنبها. نزّل ملف PDF كبطاقة مرجعية للذكاء الاصطناعي المحلي على Android.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MLC Chat هو الرائد في السرعة على Snapdragon 8 Elite.** يوفر NPU Hexagon ~40 رمز/ث على Qwen3 1.7B و~22 رمز/ث على Phi-4 Mini على Galaxy S25 Ultra — أسرع بـ 3–4 أضعاف من التطبيقات المعتمدة على المعالج فقط على الجهاز ذاته.',
          '**PocketPal AI هو الخيار الأفضل بشكل عام لمعظم مستخدمي Android.** يدعم منظومة GGUF الكاملة، ويتكامل مع Hugging Face لتنزيل النماذج، ويدير تخزين Android بشكل صحيح، ويمتلك أكثر واجهات المستخدم الأصلية للهاتف صقلاً بين التطبيقات الستة.',
          '**برنامج Ollama عبر Termux هو المسار الوحيد نحو واجهة برمجية محلية كاملة متوافقة مع OpenAI على Android.** يهم ذلك المستخدمين المتقدمين الراغبين في استخدام الأدوات أو استدعاء الدوال أو القدرة على توصيل التطبيقات المحلية بالنموذج على هاتفهم.',
          '**Tensor G5 (Pixel 9 Pro) لا يكشف NPU للتطبيقات الخارجية.** التطبيقات الستة تعمل بالمعالج فقط على Pixel 9 Pro بسرعة 10–18 رمز/ث على Phi-4 Mini — أبطأ من النتيجة المكافئة على Snapdragon 8 Elite.',
          '**Maid هو الخيار الأمثل لمستخدمي F-Droid / بلا Google.** لا اعتماد على Play Store، ولا حاجة لحساب Google، واستيراد GGUF مباشر من مدير الملفات. الخيار الأنسب لمستخدمي Android الذين يتجنبون خدمات Google.',
          '**حدود الخلفية في Android هي المشكلة الأكبر في قابلية الاستخدام.** يُنهي Android عمليات الخلفية بعدوانية في معظم نسخ المصنّعين (خاصة Samsung وOnePlus وXiaomi). التطبيقات التي تُجري استدلالاً نشطاً تحتاج إلى تثبيتها في درج التطبيقات الأخيرة أو إعدادها في إعدادات تحسين البطارية لتجنب انقطاع التوليد.',
          '**تخزين النماذج هو المشكلة الثانية الأكبر على Android.** كل نموذج GGUF يستهلك 1–8 غيغابايت. تشرذم Android بين أقسام التخزين الداخلي يعني أن النماذج يجب تخزينها في الدليل الخاص بالتطبيق أو في موقع مُهيَّأ خصيصاً — لا في مجلد "التنزيلات" لمعظم التطبيقات.',
          '**ميزة Android حقيقية: Termux والتحميل الجانبي يفتحان أدوات لا مكافئ لها على iOS.** برنامج Ollama عبر Termux غير ممكن على iPhone. تطبيقات F-Droid والتحميل الجانبي عبر ADB يمنحان مستخدمي Android وصولاً إلى تطبيقات قد لا يوفرها Google Play.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**أجهزة الاختبار:** Samsung Galaxy S25 Ultra (Snapdragon 8 Elite، 12 غيغابايت RAM)، وGoogle Pixel 9 Pro (Tensor G5، 16 غيغابايت RAM)، وOnePlus 13 (Snapdragon 8 Elite، 16 غيغابايت RAM).',
          '**عائلات الشرائح المختبرة:** Snapdragon 8 Elite (NPU Hexagon)، وTensor G5 (NPU غير مكشوف للتطبيقات الخارجية)، وMediaTek Dimensity 9400 (مواصفات APU مشمولة؛ ليس جهاز اختبار).',
          '**أفضل نموذج لنظام Android بذاكرة 12 غيغابايت:** Phi-4 Mini (3.8B، ~2.7 غيغابايت بتكميم Q4_K_M) — يعمل على التطبيقات الستة جميعها على الهواتف الثلاثة المختبرة.',
          '**أفضل نموذج لنظام Android بذاكرة 8 غيغابايت:** Qwen3 1.7B أو SmolLM2 1.7B — يعمل على جميع التطبيقات؛ Gemma 3 1B للأجهزة المحدودة جداً.',
          '**الحد الأدنى للذاكرة لنماذج 3B:** 6 غيغابايت RAM للجهاز. أقل من 6 غيغابايت، استخدم نماذج 1.7B.',
          '**الرموز/الثانية على S25 Ultra (Phi-4 Mini):** MLC Chat ~22 رمز/ث (NPU)، وPocketPal AI ~16 رمز/ث (CPU/Vulkan)، وMaid ~18 رمز/ث (Vulkan)، وLayla ~14 رمز/ث (CPU)، وPrivate AI ~13 رمز/ث (CPU)، وOllama عبر Termux ~10 رمز/ث (CPU).',
          '**Play Store مقابل F-Droid:** MLC Chat وLayla وPocketPal AI وPrivate AI متاحة على Google Play. Maid متاح أساساً على F-Droid. برنامج Ollama عبر Termux يتطلب Termux من F-Droid.',
          '**التكامل مع قائمة المشاركة (Android):** يدير كلٌّ من PocketPal AI وLayla فحسب إدخال قائمة المشاركة في Android بصورة أصلية اعتباراً من مايو 2026.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول المقارنة',
        content:
          '**قيست سرعات الرموز على Samsung Galaxy S25 Ultra (Snapdragon 8 Elite، 12 غيغابايت RAM) مع تشغيل Phi-4 Mini بتكميم Q4_K_M.** يتفاوت استخدام NPU حسب التطبيق — MLC Chat هو التطبيق الوحيد بدعم موثّق لـ NPU Hexagon اعتباراً من مايو 2026.',
                  image: '/images/best-local-llm-apps-android-2026-speed-comparison-ar.svg',
          imageCaption: 'يحقق MLC Chat سرعة 22 tok/sec في Phi-4 Mini عبر Hexagon NPU من Snapdragon، وهو الأسرع بين 6 تطبيقات أندرويد تم اختبارها.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يتصدر MLC Chat سرعة LLM المحلي على Android في 2026 بفضل دعم NPU Hexagon من Snapdragon، محققاً ~22 رمز/ث على Phi-4 Mini و~40 رمز/ث على Qwen3 1.7B على Galaxy S25 Ultra — أسرع بـ 2–3 أضعاف من البدائل المعتمدة على المعالج فقط على الجهاز ذاته.',
          },
        ],
        columns: ['التطبيق', 'الرموز/ث (S25 Ultra، Phi-4 Mini)', 'دعم NPU', 'الأنسب لـ'],
        rows: [
          {
            'التطبيق': 'MLC Chat',
            'الرموز/ث (S25 Ultra، Phi-4 Mini)': '~22 رمز/ث (مسار NPU)',
            'دعم NPU': 'نعم — NPU Hexagon على Snapdragon 8 Elite',
            'الأنسب لـ': 'المستخدمون الذين يُولون الأولوية للسرعة على هواتف Snapdragon',
          },
          {
            'التطبيق': 'Maid',
            'الرموز/ث (S25 Ultra، Phi-4 Mini)': '~18 رمز/ث (GPU Vulkan)',
            'دعم NPU': 'جزئي — GPU Vulkan بلا مسار NPU مخصص',
            'الأنسب لـ': 'مستخدمو المصدر المفتوح / F-Droid، وصول GGUF كامل',
          },
          {
            'التطبيق': 'Layla',
            'الرموز/ث (S25 Ultra، Phi-4 Mini)': '~14 رمز/ث (CPU)',
            'دعم NPU': 'لا',
            'الأنسب لـ': 'المبتدئون، تنزيل نماذج منتقاة',
          },
          {
            'التطبيق': 'Ollama عبر Termux',
            'الرموز/ث (S25 Ultra، Phi-4 Mini)': '~10 رمز/ث (CPU)',
            'دعم NPU': 'لا (CPU فقط في بناء Termux القياسي)',
            'الأنسب لـ': 'المستخدمون المتقدمون والوصول للواجهة البرمجية واستخدام الأدوات',
          },
          {
            'التطبيق': 'Private AI',
            'الرموز/ث (S25 Ultra، Phi-4 Mini)': '~13 رمز/ث (CPU)',
            'دعم NPU': 'لا',
            'الأنسب لـ': 'المستخدمون المهتمون بالخصوصية وأذونات محدودة',
          },
          {
            'التطبيق': 'PocketPal AI',
            'الرموز/ث (S25 Ultra، Phi-4 Mini)': '~16 رمز/ث (CPU/Vulkan)',
            'دعم NPU': 'جزئي — GPU Vulkan على الأجهزة المدعومة',
            'الأنسب لـ': 'معظم المستخدمين — أفضل واجهة + منظومة GGUF كاملة',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'على Pixel 9 Pro (Tensor G5)، يفقد MLC Chat مكانته الأولى — التطبيقات الستة تعمل بالمعالج فقط هناك، ويتميز PocketPal AI وMaid بجودة الواجهة. تختفي ميزة NPU كلياً على Tensor G5 لتطبيقات الاستدلال الخارجية.',
          },
          {
            type: 'warning',
            text: 'أرقام الرموز/ث لـ Layla وPrivate AI هي تقديرات لمسار CPU على Phi-4 Mini Q4_K_M. تتفاوت السرعات الفعلية مع الحالة الحرارية — قد يتراجع الاستدلال المستمر على هاتف ساخن بنسبة 20–30% عن الرقم المسجَّل عند بدء التشغيل البارد.',
          },
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'أي تطبيق يناسبك؟',
        content:
          '**يعتمد التطبيق الصحيح على شريحة جهازك ومدى تفضيلك للتخصيص على حساب البساطة.** ينقسم مستخدمو Android بوضوح بين من يريد تجربة أصلية مصقولة (PocketPal AI وLayla) ومن يريد أقصى تحكم (Ollama عبر Termux وMaid). على خلاف iPhone، يتيح Android الخيارين معاً. لفهم أعمق لعلاقة أحجام النماذج بمتطلبات الذاكرة على مختلف الأجهزة، راجع [دليل متطلبات VRAM ←](/ar/local-llms/how-much-vram-local-llm).',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'اختر MLC Chat إن كنت تمتلك هاتف Snapdragon 8 Elite وتريد أسرع استدلال ممكن. اختر PocketPal AI إن أردت أفضل تطبيق شامل بأوسع دعم للنماذج وأكثر واجهة مصقولة. اختر برنامج Ollama عبر Termux إن أردت واجهة برمجية ذكاء اصطناعي محلية كاملة على هاتفك وأنت مرتاح للطرفية. اختر Maid إن أردت خياراً مفتوح المصدر بالكامل موزَّعاً عبر F-Droid بلا اعتماد على Google. اختر Layla إن كنت جديداً على الذكاء الاصطناعي المحلي وتريد تنزيل نماذج منتقاة. اختر Private AI إن كانت خصوصية البيانات والأذونات المحدودة هاجسك الأول.',
          },
        ],
        items: [
          '**هاتف Snapdragon 8 Elite (S25 Ultra وOnePlus 13):** ابدأ بـ MLC Chat. إن احتجت نماذج غير موجودة في مكتبة MLC Chat، أضف PocketPal AI تطبيقاً ثانياً — يغطي منظومة GGUF الكاملة مع تسريع Vulkan.',
          '**Pixel 9 Pro (Tensor G5):** تختفي ميزة NPU — PocketPal AI هو الخيار الأمثل لجودة الواجهة واتساع النماذج. يتحول MLC Chat إلى CPU فقط على Tensor G5 فيفقد ميزة السرعة.',
          '**أي Android، التخصيص أولاً:** برنامج Ollama عبر Termux + واجهة دردشة أمامية (Alpaca أو Open WebUI في Chrome) هي الإعداد الأكثر قدرة. تستغرق ~30 دقيقة عمل في الطرفية لكنها تتيح واجهة برمجية متوافقة مع OpenAI واستخدام الأدوات وكامل مكتبة نماذج Ollama.',
          '**هاتف بلا Google / للخصوصية:** Maid من F-Droid. يعمل على GrapheneOS وCalyxOS وغيرهما من نسخ Android الخالية من Google. بلا اعتماد على Play Services.',
          '**هاتف بذاكرة 8 غيغابايت:** أي من التطبيقات الستة مع Qwen3 1.7B أو SmolLM2 1.7B. يدير PocketPal AI تخزين النماذج بأناقة أكبر على الأجهزة المحدودة.',
          '**Samsung Galaxy (أي طراز):** انتبه لإنهاء Samsung العدوانية للعمليات الخلفية. ثبّت تطبيق الذكاء الاصطناعي في درج التطبيقات الأخيرة وأضفه استثناءً في العناية بالجهاز ← البطارية ← التطبيقات في وضع السكون لتجنب انقطاع الاستدلال.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إن كنت تمتلك هاتف Snapdragon وتريد أساساً دردشة دون اتصال، شغّل MLC Chat (للسرعة في الجلسات القصيرة) وPocketPal AI معاً (للعمل الأوسع مع نماذج غير موجودة في مكتبة MLC Chat). يتعايشان بصورة مثالية ويستخدمان تخزيناً منفصلاً للنماذج.',
          },
        ],
      },
      chipsets: {
        id: 'chipsets',
        title: 'مقارنة الشرائح: Snapdragon مقابل MediaTek مقابل Tensor',
        content:
          '**Snapdragon 8 Elite هو الشريحة الأكثر قدرة على الاستدلال المحلي لـ LLM على Android في 2026 — NPU Hexagon فيه هو NPU المحمول الوحيد بدعم موثّق في MLC Chat.** يشغّل Tensor G5 وMediaTek Dimensity 9400 التطبيقات الستة بوضع CPU أو GPU Vulkan فحسب.',
                  image: '/images/best-local-llm-apps-android-2026-chipset-npu-ar.svg',
          imageCaption: 'يشغّل Hexagon NPU المكشوف في Snapdragon 8 Elite نموذج Phi-4 Mini بسرعة 22 tok/sec؛ بينما يصل مسار المعالج فقط في Tensor G5 إلى 10-18.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يوفر NPU Hexagon في Snapdragon 8 Elite استدلالاً أسرع بـ 2–3 أضعاف من التشغيل بالمعالج فقط على Android في 2026، لكن MLC Chat وحده يكشف هذه الميزة — تنتقل جميع التطبيقات الأخرى إلى CPU أو GPU Vulkan على جميع الشرائح.',
          },
        ],
        columns: ['الشريحة', 'تتوفر في', 'NPU للتطبيقات الخارجية', 'أفضل مسار استدلال', 'سرعة Phi-4 Mini (تقديرية)'],
        rows: [
          {
            'الشريحة': 'Snapdragon 8 Elite',
            'تتوفر في': 'Galaxy S25 series وOnePlus 13 وXiaomi 15 Pro',
            'NPU للتطبيقات الخارجية': 'نعم — NPU Hexagon عبر MLCC (MLC Chat فقط)',
            'أفضل مسار استدلال': 'NPU Hexagon (MLC Chat) أو GPU Vulkan (Maid وPocketPal)',
            'سرعة Phi-4 Mini (تقديرية)': '~22 رمز/ث (NPU) / ~16–18 رمز/ث (Vulkan)',
          },
          {
            'الشريحة': 'Google Tensor G5',
            'تتوفر في': 'سلسلة Pixel 9',
            'NPU للتطبيقات الخارجية': 'لا — Google تحجز NPU لتطبيقاتها الأولى',
            'أفضل مسار استدلال': 'CPU (جميع التطبيقات تعمل بالمعالج فقط)',
            'سرعة Phi-4 Mini (تقديرية)': '~12–15 رمز/ث (CPU)',
          },
          {
            'الشريحة': 'MediaTek Dimensity 9400',
            'تتوفر في': 'Xiaomi 15 Ultra وOppo Find X8 Pro وVivo X200 Pro',
            'NPU للتطبيقات الخارجية': 'محدود — وصول APU من MediaTek عبر مسار NNAPI تجريبي',
            'أفضل مسار استدلال': 'GPU Vulkan (أفضل خيار للتطبيقات الخارجية)؛ NNAPI تجريبي',
            'سرعة Phi-4 Mini (تقديرية)': '~14–18 رمز/ث (Vulkan) / ~12 رمز/ث (CPU)',
          },
          {
            'الشريحة': 'Snapdragon 8 Gen 3',
            'تتوفر في': 'سلسلة Galaxy S24 وOnePlus 12',
            'NPU للتطبيقات الخارجية': 'جزئي — Hexagon الجيل السابق، دعم محدود في MLC Chat',
            'أفضل مسار استدلال': 'GPU Vulkan أو CPU',
            'سرعة Phi-4 Mini (تقديرية)': '~12–15 رمز/ث (Vulkan)',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تفترض أن NPU Tensor G5 من Google يفيد تطبيقات LLM المحلية. NPU من Google محجوز لخدمات التعلم الآلي الأولية (Google Translate والمسجّل ومعالجة الصور). تطبيقات الاستدلال الخارجية، بما فيها التطبيقات الستة في هذا الدليل، تعمل بالمعالج فقط على جميع هواتف Pixel. ذاكرة 16 غيغابايت في Pixel 9 Pro هي ميزته الحقيقية — مساحة أكبر للنماذج الأضخم، لا استدلال أسرع.',
          },
          {
            type: 'tip',
            text: 'هواتف MediaTek Dimensity 9400 تستفيد من دعم GPU Vulkan في Maid وPocketPal AI. إن كنت تمتلك Xiaomi 15 Ultra أو Oppo Find X8 Pro، فعّل Vulkan في إعدادات التطبيق للحصول على تحسن في السرعة بنسبة 30–40% مقارنة بمسار CPU.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat',
        content:
          '**MLC Chat (Machine Learning Compilation Chat) هو أسرع تطبيق LLM محلي لنظام Android على أجهزة Snapdragon 8 Elite في 2026.** طوّره فريق MLC AI، ويُجمّع النماذج باستخدام إطار عمل MLCC الذي يستهدف NPU Hexagon من Snapdragon مباشرة — مسار تحسين غير متاح للتطبيقات التي تستخدم llama.cpp أو خلفيات Vulkan العامة.',
        items: [
          '**مكتبة النماذج:** منتقاة — يتضمن MLC Chat مجموعة من النماذج المُجمَّعة مسبقاً والمُحسَّنة للهاتف المحمول (Qwen3 1.7B وPhi-4 Mini وGemma 3 1B وLlama 3.2 1B). استيراد النماذج المخصصة متاح لكنه يتطلب سلسلة أدوات تجميع MLC — وليس عملية بنقرة واحدة.',
          '**استخدام NPU:** دعم موثّق لـ NPU Hexagon على Snapdragon 8 Elite (Galaxy S25 Ultra وOnePlus 13). قيس بـ ~40 رمز/ث على Qwen3 1.7B و~22 رمز/ث على Phi-4 Mini على S25 Ultra — مقابل ~12–16 رمز/ث بالمعالج فقط على الجهاز ذاته.',
          '**جودة الواجهة:** نظيفة ووظيفية وبسيطة. واجهة دردشة فقط — بلا محرر موجّه النظام وبلا بطاقات شخصية وبلا تبديل بين نماذج متعددة. مناسبة للمهام المحورية على الدردشة، لا لإعداد المستخدمين المتقدمين.',
          '**قائمة المشاركة في Android:** غير مدعوم اعتباراً من مايو 2026. لا يستطيع استقبال النص من تطبيقات أخرى عبر قائمة المشاركة القياسية.',
          '**الموثوقية دون اتصال:** ممتازة. بمجرد تجميع النموذج وتخزينه مؤقتاً، يعمل MLC Chat بصفر استدعاءات شبكة. العملية الخلفية مستقرة مقارنةً ببعض التطبيقات المبنية على llama.cpp.',
          '**التخزين:** يخزّن MLC Chat أوزان النموذج المُجمَّع في دليله الخاص (~3 غيغابايت لـ Phi-4 Mini المُجمَّع لـ Snapdragon). غير قابل للنقل إلى تطبيقات أخرى — قيد مقارنةً بالتطبيقات المبنية على GGUF.',
          '**مسار التثبيت:** Google Play Store. الكود المصدري على [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'مكتبة نماذج MLC Chat منتقاة ومُجمَّعة. إن احتجت نموذجاً غير موجود في المكتبة الرسمية (مثل Mistral Small المُضبَّط دقيقاً أو نموذج متخصص في مجال معين)، لن يفيدك MLC Chat — استخدم PocketPal AI أو Maid لدعم GGUF الاعتباطي. MLC Chat أداة سرعة لا مرونة.',
          },
        ],
      },
      maid: {
        id: 'maid',
        title: 'Maid',
        content:
          '**Maid هو تطبيق LLM المحلي لنظام Android مفتوح المصدر بالكامل، مع توزيع F-Droid كأولوية — مبني بـ Flutter مستخدماً llama.cpp كخلفية استدلال وموزَّع بلا اعتماد على Google Play.** يدعم الاستيراد المباشر لـ GGUF من مدير الملفات وتسريع GPU Vulkan على الأجهزة المدعومة ويعمل على نسخ Android الخالية من Google (GrapheneOS وCalyxOS).',
        items: [
          '**مكتبة النماذج:** بلا قيود. يمكن استيراد أي ملف نموذج GGUF عبر مدير ملفات Android أو تنزيله عبر رابط URL. يشمل ذلك نماذج غير موجودة على Hugging Face أو في مكتبات التطبيقات المنتقاة.',
          '**استخدام NPU:** مسار GPU Vulkan على الأجهزة المدعومة — لا NPU مخصص. على Snapdragon 8 Elite، يوفر Vulkan ~18 رمز/ث على Phi-4 Mini، مقابل ~22 رمز/ث بمسار NPU في MLC Chat. بلا وصول إلى NPU Hexagon.',
          '**جودة الواجهة:** وظيفية لكن أقل صقلاً من PocketPal AI أو Layla. محرر موجّه النظام وضوابط درجة الحرارة وإدارة أساسية لسجل الدردشة متوفرة. دعم بطاقات الشخصية محدود.',
          '**قائمة المشاركة في Android:** غير مدعوم اعتباراً من مايو 2026.',
          '**الموثوقية دون اتصال:** ممتازة — الاستدلال المبني على llama.cpp مستقر. حدود الخلفية في نسخ المصنّعين (Samsung وOnePlus) لا تزال سارية.',
          '**التخزين:** النماذج مُخزَّنة في الدليل الخاص بالتطبيق أو في مسار يحدده المستخدم. ملفات GGUF قابلة للنقل بين Maid وPocketPal AI إن وُضعت في التخزين المشترك المتاح.',
          '**مسار التثبيت:** F-Droid (أساسي) والإصدارات على GitHub. الكود المصدري على [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid). غير متاح على Google Play.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إن كنت على GrapheneOS أو نسخة Android خالية من Google، فـ Maid هو أفضل خيار متاح — بلا اعتماد على Google Play Services. ثبّته عبر عميل F-Droid أو نزّل APK مباشرة من صفحة الإصدارات على GitHub وثبّته جانبياً بـ ADB.',
          },
        ],
      },
      layla: {
        id: 'layla',
        title: 'Layla',
        content:
          '**Layla هو أكثر تطبيقات LLM المحلية لنظام Android ملاءمةً للمبتدئين — يُجرّد إدارة النماذج خلف تدفق تنزيل منتقى، ولا يتطلب طرفية، ويقدم واجهة دردشة مصقولة دون كشف إعدادات الاستدلال.** المقايضة هي مجموعة نماذج أصغر واستدلال بالمعالج فقط.',
        items: [
          '**مكتبة النماذج:** منتقاة ومجموعة أصغر. تقدم Layla تجربة تنزيل مُدارة — اختر نموذجاً من المكتبة داخل التطبيق فيُنزَّل ويُهيَّأ تلقائياً. استيراد GGUF المخصص ليس ميزة رئيسية.',
          '**استخدام NPU:** مسار CPU فقط — بلا GPU Vulkan ولا NPU Hexagon. هذا يجعل Layla أبطأ التطبيقات الستة على Snapdragon 8 Elite (~14 رمز/ث على Phi-4 Mini) لكنها متسقة عبر جميع شرائح Android.',
          '**جودة الواجهة:** الأعلى بين التطبيقات الستة للمستخدمين الجدد. واجهة تركّز على الدردشة مع إدارة واضحة للمحادثات وبلا تعقيد الإعدادات وتبديل سلس بين النماذج.',
          '**قائمة المشاركة في Android:** مدعوم — يستطيع Layla استقبال النص من تطبيقات أخرى عبر قائمة المشاركة في Android، مما يجعله أحد تطبيقين فقط في هذا الدليل يتكاملان مع تدفق المشاركة القياسي في Android.',
          '**الموثوقية دون اتصال:** جيدة. يعمل دون اتصال بالكامل بعد تنزيل النموذج. أقل عرضة للإنهاء الخلفي لأنه لا يشغّل عملية خادم محلية (خلافاً لـ Ollama عبر Termux).',
          '**التخزين:** يدير Layla تخزين النماذج داخلياً. لا حاجة لإدارة ملفات يدوية.',
          '**مسار التثبيت:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'دعم قائمة المشاركة في Layla يجعله مفيداً بشكل فريد لسير العمل على Android: حدد نصاً في أي تطبيق ← مشاركة ← Layla ← اطرح سؤالاً عنه. هذه الحالة — مساعدة ذكاء اصطناعي سريعة في السياق دون تغيير التطبيق — هي حيث يتفوق Layla على جميع التطبيقات الأخرى في هذه القائمة.',
          },
        ],
      },
      ollamaTermux: {
        id: 'ollama-termux',
        title: 'Ollama عبر Termux',
        content:
          '**برنامج Ollama عبر Termux هو المسار الوحيد على Android نحو واجهة برمجية محلية كاملة متوافقة مع OpenAI — بما في ذلك استخدام الأدوات واستدعاء الدوال والقدرة على توصيل تطبيقات Android الخارجية بنموذج يعمل محلياً.** يستغرق الإعداد 20–30 دقيقة ويتطلب الارتياح للطرفية، لكن النتيجة هي منظومة Ollama ذاتها التي يشغّلها مستخدمو سطح المكتب على Mac وLinux، الآن على هاتف.',
        numberedItems: [
          'ثبّت Termux من F-Droid (لا نسخة Play Store — بناء Play Store قديم ويُعطّل تثبيتات Ollama).',
          'في Termux: `pkg update && pkg install curl`',
          'ثبّت برنامج Ollama: `curl -fsSL https://ollama.com/install.sh | sh` — يكتشف هذا بيئة Android ARM64 ويثبّت الثنائي الصحيح.',
          'نزّل نموذجاً: `ollama pull qwen3:1.7b` أو `ollama pull phi4-mini`.',
          'شغّل الخادم: `ollama serve` (أبقه يعمل في جلسة Termux أو استخدم أداة عنصر واجهة للخلفية).',
          'تفاعل عبر Termux: `ollama run phi4-mini` — أو وصّل أي تطبيق يدعم نقطة نهاية متوافقة مع OpenAI على `http://localhost:11434`.',
        ],
        items: [
          '**مكتبة النماذج:** غير محدودة — مكتبة نماذج Ollama الكاملة متاحة عبر `ollama pull [اسم-النموذج]`. هذا أوسع وصول للنماذج بين جميع التطبيقات في هذا الدليل.',
          '**استخدام NPU:** CPU فقط في بناء Ollama ARM64 القياسي. بلا دعم GPU Vulkan أو NPU Hexagon في الإعداد القياسي لـ Termux اعتباراً من مايو 2026. هذا يجعل برنامج Ollama الأبطأ في رموز/ث الخام (~10 رموز/ث على Phi-4 Mini على S25 Ultra).',
          '**استخدام الأدوات واستدعاء الدوال:** مدعوم — يعالج Ollama على Android استخدام الأدوات بالطريقة ذاتها كما على سطح المكتب. وصّل أي واجهة أمامية قادرة على استخدام الأدوات بـ localhost:11434.',
          '**قائمة المشاركة في Android:** غير مدعوم مباشرة. الحل: استخدم اختصار Termux:Widget لإرسال محتوى الحافظة إلى `ollama run [نموذج]`.',
          '**موثوقية الخلفية:** إشكالية على Samsung وOnePlus بلا قائمة استثناءات تحسين البطارية. أنشئ اختصار Termux:Widget لـ `ollama serve` وثبّت Termux في درج التطبيقات الأخيرة. تتطلب Samsung One UI تعطيل "التطبيقات في وضع السكون" صراحةً لـ Termux.',
          '**مسار التثبيت:** Termux من F-Droid، ثم سكريبت تثبيت Ollama عبر curl.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'برنامج Ollama عبر Termux على هاتف سيكون أبطأ بشكل ملحوظ من Ollama على سطح المكتب — ~10 رمز/ث على Phi-4 Mini على S25 Ultra مقابل 60+ رمز/ث على RTX 4090. استخدمه للراحة (واجهة برمجية جيبية دون اتصال واستفسارات سريعة بعيداً عن سطح المكتب) لا للأداء. لجودة النماذج الكبيرة على الهاتف، الاتصال عن بُعد بجهاز منزلي يشغّل Ollama عبر Open WebUI في Chrome لا يزال الخيار الأفضل.',
          },
          {
            type: 'tip',
            text: 'ثبّت الإضافة Termux:Widget وأنشئ اختصاراً بنقرة واحدة ينفّذ `ollama serve`. يتيح لك ذلك تشغيل خادم Ollama من عنصر الشاشة الرئيسية في Android دون فتح Termux. بمجرد التشغيل، يتصل أي تطبيق مُهيَّأ لاستخدام `localhost:11434` تلقائياً.',
          },
        ],
      },
      privateAI: {
        id: 'private-ai',
        title: 'Private AI',
        content:
          '**Private AI هو تطبيق LLM المحلي لنظام Android المُركَّز على الخصوصية — مُصمَّم للمستخدمين الذين يريدون بقاء الاستدلال كله على الجهاز مع أذونات محدودة وبلا قياس عن بُعد للشبكة وإعداد بسيط غير تقني.** يطلب أذونات أقل من أي تطبيق آخر في هذا الدليل ولا يتصل بخوادم خارجية بعد التنزيل الأولي للنموذج.',
        items: [
          '**مكتبة النماذج:** مجموعة منتقاة ومراجَعة للخصوصية. التنزيلات من مصادر قابلة للتحقق. بلا وصول إلى مستودعات Hugging Face الاعتباطية — يُقايض المرونة بعرض نماذج خاضع للرقابة وقابل للتدقيق.',
          '**استخدام NPU:** مسار CPU فقط. متسق عبر جميع الشرائح بـ ~13 رمز/ث على Phi-4 Mini (S25 Ultra).',
          '**جودة الواجهة:** نظيفة وبسيطة. تركّز على الدردشة مع تصدير المحادثات وبلا قياس لاستخدام. تفتقر لخيارات الإعداد المتقدمة (درجة الحرارة وtop-p وموجّهات النظام) — مُبسَّطة عمداً.',
          '**قائمة المشاركة في Android:** غير مدعوم اعتباراً من مايو 2026.',
          '**الموثوقية دون اتصال:** الأفضل في فئتها. مُصمَّم للعمل دون اتصال بالكامل. بلا استدعاءات شبكة في الخلفية وبلا مزامنة وبلا تحليلات.',
          '**الأذونات:** محدودة — يطلب الوصول للتخزين والميكروفون (للإدخال الصوتي، اختياري). لا يطلب جهات الاتصال أو الموقع أو معرّف الإعلانات.',
          '**مسار التثبيت:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إن تضمّنت حالتك الاستخدامية نصاً مهنياً حساساً — مسودات قانونية وملاحظات طبية ومحتوى أعمال سري — فالأذونات المحدودة والبنية القابلة للتدقيق بلا قياس عن بُعد في Private AI ذات أهمية. للإنتاجية العامة، PocketPal AI خيار أفضل بشكل عام، لكن نموذج الثقة في Private AI أكثر متانة.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI',
        content:
          '**PocketPal AI هو أفضل تطبيق LLM محلي لنظام Android عموماً لمعظم المستخدمين في 2026.** يجمع بين منظومة نماذج GGUF الكاملة (أي نموذج من Hugging Face) وتسريع GPU Vulkan وأكثر واجهات المستخدم الأصلية للهاتف صقلاً بين التطبيقات الستة ودعم مباشر لقائمة المشاركة في Android وإدارة صحيحة لتخزين Android — تركيبة لا يُضاهيها أي تطبيق آخر في هذا الدليل.',
        items: [
          '**مكتبة النماذج:** منظومة GGUF الكاملة — تصفح ونزّل مباشرة من Hugging Face داخل التطبيق، أو استورد ملفات GGUF محلية. يغطي الاتساع ذاته الذي يغطيه Maid مضيفاً واجهة اكتشاف منتقاة.',
          '**استخدام NPU:** مسار GPU Vulkan على الأجهزة المدعومة. على Snapdragon 8 Elite يوفر ~16 رمز/ث على Phi-4 Mini — خلف مسار NPU في MLC Chat (~22 رمز/ث) لكن أمام جميع التطبيقات بالمعالج فقط على الجهاز ذاته.',
          '**جودة الواجهة:** أفضل واجهة مستخدم أصلية للهاتف بين التطبيقات الستة. تنقل بالإيماءات وإدارة المحادثات ومحرر موجّه النظام ومعيارة النماذج ولوحة إعدادات لكل نموذج. مبني بـ React Native + llama.rn.',
          '**قائمة المشاركة في Android:** مدعوم — PocketPal AI وLayla هما التطبيقان الوحيدان في هذا الدليل المتكاملان مع قائمة المشاركة في Android. اختر نصاً في أي تطبيق ← مشاركة ← PocketPal AI.',
          '**الموثوقية دون اتصال:** ممتازة. بلا عملية خادم خلفية (خلافاً لـ Ollama عبر Termux) — يعمل الاستدلال داخل العملية، متجنباً مشكلات إنهاء الخلفية في Android التي تؤثر على الأساليب القائمة على الخادم.',
          '**التخزين:** يخزّن ملفات GGUF في تخزين خاص بالتطبيق افتراضياً مع خيار الإشارة إلى تخزين خارجي. ملفات النماذج قابلة للنقل إلى Maid إن نُقلت إلى التخزين المشترك في Android.',
          '**مسار التثبيت:** Google Play Store. الكود المصدري على [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أداة معيارة النماذج المدمجة في PocketPal AI (تشغّل موجّهاً قصيراً وتقيس رموز/ث) مفيدة لمقارنة أحجام النماذج على هاتفك تحديداً. شغّلها على Phi-4 Mini وQwen3 1.7B وQwen3 4B للعثور على سقف السرعة العملي لجهازك قبل الالتزام بنموذج للاستخدام اليومي.',
          },
        ],
      },
      androidFragmentation: {
        id: 'android-fragmentation',
        title: 'تشرذم Android: التخزين والذاكرة وحدود الخلفية',
        content:
          '**يخلق تشرذم Android ثلاث مشكلات عملية لتطبيقات LLM المحلية: تعارضات أقسام التخزين وتخصيص RAM غير متسق وسياسات إنهاء خلفية عدوانية من المصنّعين.** الثلاثة تؤثر على موثوقية النماذج على أجهزة Samsung وOnePlus وPixel وغيرها من مصنّعي Android بأشكال لا تحدث على iOS.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'تشرذم Android يعني أن تطبيق LLM محلي يعمل بصورة مثالية على Pixel 9 Pro قد يتعطل في منتصف الاستدلال على Galaxy S25 Ultra، ليس بسبب التطبيق أو النموذج، بل لأن سياسة إنهاء الخلفية في Samsung تُنهي العملية لتوفير البطارية. كل مصنّع Android يُخصّص هذه السياسات بشكل مختلف — يتبع Pixel معايير AOSP بصورة أوثق؛ Samsung وOnePlus وXiaomi جميعها تُنهي الخلفية بعدوانية أكبر افتراضياً.',
          },
        ],
        items: [
          '**أقسام التخزين:** `/data/user/0/` في Android (التخزين الخاص بالتطبيق) و`/sdcard/` (التخزين المشترك) قسمان منفصلان. تخزّن معظم تطبيقات LLM المحلية النماذج في التخزين الخاص بالتطبيق، غير القابل للتصفح من مدير الملفات بلا صلاحيات root. إن أردت مشاركة ملف GGUF بين Maid وPocketPal AI، يجب نسخه أولاً إلى موقع مشترك.',
          '**تخصيص RAM:** Android لا يضمن تخصيص ذاكرة لتطبيقات الطرف الثالث. إن احتاج النظام ذاكرة، أنهى العمليات الخلفية — بما في ذلك عمليات الاستدلال. على الأجهزة بـ 12 غيغابايت RAM (S25 Ultra افتراضياً)، نادراً ما يكون هذا مشكلة أثناء الاستخدام الفعال. على الهواتف بـ 8 غيغابايت RAM، قد يقاطع فتح أي تطبيق آخر أثناء الاستدلال العملية.',
          '**إنهاء خلفية Samsung One UI:** الأكثر عدوانية بين كبار مصنّعي Android. اذهب إلى الإعدادات ← العناية بالجهاز ← البطارية ← حدود استخدام الخلفية ← التطبيقات في وضع السكون، وأزل يدوياً أي تطبيق LLM من هذه القائمة. ثبّت أيضاً التطبيق في درج التطبيقات الأخيرة بالنقر على أيقونته.',
          '**إنهاء خلفية OnePlus OxygenOS:** مشابه لـ Samsung. اذهب إلى الإعدادات ← البطارية ← تحسين البطارية، ابحث عن تطبيق LLM واضبطه على "عدم التحسين". أضف أيضاً تثبيت التطبيق في نظرة عامة على التطبيقات الأخيرة.',
          '**Pixel (الأقرب لـ AOSP):** السلوك الخلفي الأكثر قابلية للتنبؤ. التطبيقات التي تطلب إذن `FOREGROUND_SERVICE` (PocketPal AI وMaid يفعلان ذلك) تعمل بصورة موثوقة أثناء الاستدلال الفعال على Pixel. لا يزال يُوصى باستثناء مُحسِّن البطارية للجلسات الطويلة جداً.',
          '**Xiaomi MIUI/HyperOS:** إنهاء الخلفية الأكثر عدوانية بعد Samsung. قد تُنهي ميزة "توفير البطارية" الاستدلال في منتصف التوليد. اذهب إلى الإعدادات ← التطبيقات ← إدارة التطبيقات ← [التطبيق] ← توفير البطارية ← بلا قيود.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تعتمد على السلوك الخلفي الافتراضي لنظام Android لأي تطبيق LLM محلي. على أجهزة Samsung وOnePlus، ستقاطع السياسة الافتراضية جلسات الاستدلال الطويلة (>دقيقتين) ما لم تُضف التطبيق صراحةً إلى قائمة الاستثناءات في إعدادات تحسين البطارية. هذا هو السبب الأول لتقارير "التطبيق توقف في منتصف الاستجابة" لجميع التطبيقات في هذا الدليل.',
          },
        ],
      },
      shareSheet: {
        id: 'share-sheet',
        title: 'التكامل مع قائمة المشاركة في Android',
        content:
          '**التكامل مع قائمة المشاركة في Android — القدرة على تحديد نص في أي تطبيق وإرساله إلى ذكاء اصطناعي محلي — مدعوم من اثنين فقط من التطبيقات الستة: PocketPal AI وLayla.** هذه الميزة وحدها تجعل الذكاء الاصطناعي المحلي مفيداً حقاً كأداة على مستوى النظام بدلاً من كونه تطبيقاً مستقلاً.',
        items: [
          '**كيف يعمل:** حدد أي نص في أي تطبيق Android (متصفح ويب أو بريد إلكتروني أو قارئ PDF أو تطبيق مراسلة) ← انقر مشاركة ← اختر PocketPal AI أو Layla ← يظهر النص المحدد في حقل إدخال الدردشة.',
          '**قائمة مشاركة PocketPal AI:** تستقبل نصاً عادياً. تفتح محادثة جديدة مع النص المحدد محشواً مسبقاً. يمكنك حينئذٍ إضافة موجّه (مثل "لخّص هذا" أو "ترجم إلى الإنجليزية" أو "تحقق من حقائق هذا") وإرساله إلى النموذج المحلي.',
          '**قائمة مشاركة Layla:** الوظيفة الأساسية ذاتها. انتقال واجهة أكثر سلاسة من قائمة المشاركة إلى واجهة الدردشة.',
          '**MLC Chat وMaid وOllama عبر Termux وPrivate AI:** لا تظهر في قائمة المشاركة في Android اعتباراً من مايو 2026. يجب نسخ النص ولصقه يدوياً في هذه التطبيقات.',
          '**حالات الاستخدام العملية:** تلخيص مقالات الويب أثناء التصفح وترجمة رسائل البريد الإلكتروني وصياغة ردود على الرسائل والتحقق من الفقرات — كل ذلك دون مغادرة النص للجهاز أو لمس واجهة برمجية سحابية.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للمستخدمين المتقدمين الراغبين في تكامل قائمة المشاركة مع مكتبة النماذج الكاملة (بما في ذلك نماذج غير موجودة في مجموعات Layla أو PocketPal AI المنتقاة)، الحل هو: انسخ النص ← افتح PocketPal AI ← حمّل أي نموذج GGUF ← الصق. تكامل Hugging Face في PocketPal AI يعني إمكانية تحميل نموذج مخصص واستخدامه كتطبيق وجهة للمشاركة.',
          },
        ],
      },
      sideloadPaths: {
        id: 'sideload-paths',
        title: 'مسارات التحميل الجانبي وTermux: ميزة Android',
        content:
          '**منظومة التحميل الجانبي وTermux في Android تمنح مستخدمي Android وصولاً لأدوات ذكاء اصطناعي محلية غير موجودة على iOS.** هذا هو الفارق العملي الأبرز بين Android وiPhone في استخدام الذكاء الاصطناعي المحلي في 2026.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'برنامج Ollama عبر Termux — خادم واجهة برمجية LLM محلية كاملة على هاتف — قدرة حصرية لـ Android في 2026: يمنع وضع الحماية في iOS من Apple الإعداد المكافئ على iPhone، مما يجعل Android المنصة المحمولة الوحيدة للمستخدمين الذين يحتاجون واجهة برمجية متوافقة مع OpenAI على الجهاز.',
          },
        ],
        items: [
          '**Termux:** بيئة Linux في تطبيق Android. ثبّته من F-Droid (لا Play Store). يشغّل bash وPython وcurl وأي ثنائي Linux ARM64 تقريباً — بما في ذلك برنامج Ollama. Termux غير متاح على iOS؛ مكافئه (iSH) يفتقر لإمكانات الشبكة لخدمة الواجهات البرمجية المحلية.',
          '**التحميل الجانبي عبر F-Droid:** ثبّت تطبيقات بلا Google Play — مفيد لـ Maid وTermux وأدوات الذكاء الاصطناعي المحلي مفتوحة المصدر الأخرى. نزّل APK عميل F-Droid، مكّن "تثبيت تطبيقات من مصادر غير معروفة" في إعدادات أمان Android، ثبّت F-Droid ثم ثبّت أي تطبيق مُدرَج في F-Droid بلا حساب Google.',
          '**التحميل الجانبي عبر ADB:** يمكن للمستخدمين المتقدمين تحميل APKs جانبياً مباشرة عبر Android Debug Bridge (`adb install [app.apk]`). يتيح ذلك تثبيت تطبيقات قُيّدت صفحتها في Play Store بالمنطقة أو أُزيلت.',
          '**ميزة نسخ Android المخصصة:** يستطيع مستخدمو LineageOS وGrapheneOS وCalyxOS تعطيل Google Play كلياً واستخدام F-Droid + ADB كمسارَي تثبيت تطبيقات وحيدَين. Maid وTermux يعملان كلياً على هذه المنصات. لا مكافئ لهذا على iOS.',
          '**وضع خادم llama.cpp عبر Termux:** بعيداً عن برنامج Ollama، يمكن تجميع llama.cpp نفسه عبر Termux وتشغيله في وضع الخادم — مانحاً واجهة برمجية محلية بديلة يفضّلها بعض المستخدمين لاستهلاكها الأقل للذاكرة مقارنةً بـ Ollama.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إعداد Termux + Ollama يعمل أيضاً كخادم واجهة برمجية محلية لتطبيقات أخرى على الهاتف ذاته. على سبيل المثال، تطبيقات مثل Obsidian (مع إضافة Local REST API) أو أتمتة مخصصة مشابهة لـ Shortcuts تستطيع الاستعلام من `localhost:11434/api/generate` لتنفيذ مهام الذكاء الاصطناعي بلا إنترنت — نمط أتمتة شاشة رئيسية مفيد فعلاً.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        content: '**معظم الإخفاقات مع تطبيقات LLM المحلية على Android تنشأ من أربعة أخطاء يمكن تفاديها.**',
        items: [
          '**تثبيت Termux من Play Store.** نسخة Play Store من Termux قديمة (توقف Termux عن تحديثها عام 2020). البناء المُحدَّث الحالي موجود على F-Droid. يفشل `pkg install curl` وسكريبت تثبيت Ollama على نسخة Termux من Play Store.',
          '**توقع سرعة NPU على هاتف Pixel.** NPU Tensor G5 من Google غير متاح لتطبيقات الطرف الثالث. التطبيقات الستة تعمل بالمعالج فقط على جميع طرازات Pixel. ميزة NPU في MLC Chat تنطبق على Snapdragon 8 Elite فقط ولا تنتقل إلى Pixel.',
          '**تخطي قائمة استثناءات تحسين البطارية على Samsung.** هواتف Galaxy تُنهي عمليات الخلفية بعدوانية. التوليد الذي يمتد أكثر من 90 ثانية سيُقطَع على الأرجح بسياسة إنهاء الخلفية ما لم يكن Termux أو تطبيق LLM في قائمة الاستثناءات صراحةً.',
          '**تنزيل نماذج أكبر مما يتحمله الجهاز.** نموذج 7B Q4_K_M (~4.7 غيغابايت) يتطلب ~6 غيغابايت RAM متاحة. على هاتف 12 غيغابايت مع عبء النظام، هذا ضيّق. على هاتف 8 غيغابايت، سيُغلق التطبيق بسبب OOM في منتصف التوليد. استخدم Phi-4 Mini (3.8B، ~2.7 غيغابايت) للأجهزة بـ 8–10 غيغابايت وQwen3 1.7B (~1.1 غيغابايت) لكل ما دون ذلك.',
          '**افتراض أن التخزين في "التنزيلات" متاح.** تخزّن معظم تطبيقات LLM المحلية ملفات النماذج في التخزين الخاص بالتطبيق (`/data/user/0/[حزمة-التطبيق]/`)، غير القابل للتصفح من مدير الملفات بلا root. إن نزّلت GGUF إلى مجلد التنزيلات متوقعاً أن يجده التطبيق، لن يجده — استخدم وظيفة الاستيراد المدمجة في التطبيق أو أشر إلى المسار الصحيح في الإعدادات.',
          '**تشغيل تطبيقَي استدلال في آن واحد.** كل تطبيق يحمّل النموذج في RAM. نموذجان 3B على هاتف 12 غيغابايت يتركان ~5 غيغابايت لنظام التشغيل، مما يُفعّل عمليات الإنهاء. إن كنت تستخدم MLC Chat وPocketPal AI كلاهما، أغلق أحدهما قبل فتح الآخر.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'MLC Chat على GitHub والوثائق الرسمية — [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)',
          'Maid على GitHub (Mobile Artificial Intelligence) — [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
          'PocketPal AI على GitHub — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'الوثائق الرسمية لـ Ollama — [ollama.com](https://ollama.com)',
          'الوثائق الرسمية لـ Termux — [wiki.termux.com](https://wiki.termux.com)',
          'التوثيق التقني لـ NPU Hexagon في Snapdragon 8 Elite — شبكة مطوري Qualcomm',
          'مواصفات APU في MediaTek Dimensity 9400 — صفحة المنتج على موقع MediaTek',
          'ملخص شريحة Google Tensor G5 — وثائق أجهزة Google',
          'تحسين البطارية وحدود العمليات الخلفية في Android — وثائق مطوري Android',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يستطيع Pixel 9 Pro تشغيل نموذج 7B؟',
            a: 'نعم، يمتلك Pixel 9 Pro ذاكرة 16 غيغابايت RAM — هامش كافٍ لتشغيل نموذج 7B Q4_K_M (~4.7 غيغابايت من أوزان النموذج) مع بقاء RAM النظام متاحةً. السرعة ~8–10 رموز/ث بذلك الحجم (CPU فقط على Tensor G5). استخدم PocketPal AI أو Maid مع GGUF بحجم 7B لهذه الحالة. لسرعة محادثة فورية، التزم بـ Phi-4 Mini (3.8B، ~14 رمز/ث) على Pixel 9 Pro.',
          },
          {
            q: 'هل تستخدم هذه التطبيقات NPU من Snapdragon؟',
            a: 'MLC Chat وحده يستخدم NPU Hexagon من Snapdragon، وعلى أجهزة Snapdragon 8 Elite فقط (سلسلة Galaxy S25 وOnePlus 13). التطبيقات الخمسة الأخرى تستخدم CPU أو GPU Vulkan. NPU Hexagon يوفر استدلالاً أسرع بـ 2–3 أضعاف في MLC Chat مقارنةً بمسار CPU على الجهاز ذاته.',
          },
          {
            q: 'هل أستطيع تشغيل ذكاء اصطناعي محلي على Samsung Galaxy S22؟',
            a: 'نعم، على الطرازات بذاكرة 8 غيغابايت RAM. يعمل Galaxy S22 بـ Snapdragon 8 Gen 1 (أو Exynos 2200 في بعض المناطق). يعمل PocketPal AI وMaid مع Qwen3 1.7B أو SmolLM2 1.7B بسرعة ~8–12 رمز/ث. Phi-4 Mini (3.8B) ممكن لكن ضيّق بـ 8 غيغابايت RAM — أغلق جميع التطبيقات الأخرى أولاً. مسار NPU في MLC Chat غير موثّق على Snapdragon 8 Gen 1.',
          },
          {
            q: 'هل أحتاج لعمل root على هاتفي للذكاء الاصطناعي المحلي؟',
            a: 'لا. التطبيقات الستة في هذا الدليل تعمل على هواتف Android بلا root. يتطلب Termux تمكين "تثبيت تطبيقات من مصادر غير معروفة" لـ APK F-Droid، لكن هذا ليس root. الـ root ذو صلة فقط للوصول إلى أدلة التخزين الخاصة بالتطبيقات من مدير الملفات — وليس ضرورياً للاستدلال.',
          },
          {
            q: 'هل أستطيع استخدام هذه التطبيقات مع Termux؟',
            a: 'برنامج Ollama عبر Termux إعداد مستقل بحد ذاته — تثبّت Ollama داخل Termux وتتفاعل عبر طرفية Termux. التطبيقات الخمسة الأخرى (MLC Chat وMaid وLayla وPrivate AI وPocketPal AI) تطبيقات Android مستقلة لا تتفاعل مع Termux. يشغّل المستخدمون المتقدمون كليهما: Ollama في Termux للوصول للواجهة البرمجية وPocketPal AI لواجهة دردشة مصقولة.',
          },
          {
            q: 'كيف تتعامل مع حدود الخلفية في Android؟',
            a: 'حدود الخلفية هي المشكلة الأكبر في موثوقية تطبيقات LLM المحلية على Android. يطلب PocketPal AI وMaid إذن FOREGROUND_SERVICE مما يجعلهما أكثر مقاومةً لإنهاء الخلفية. برنامج Ollama عبر Termux عرضة لسياسات إنهاء الخلفية في Samsung وOnePlus ما لم يكن Termux في قائمة الاستثناءات صراحةً في إعدادات تحسين البطارية. على Pixel، السلوك الخلفي أكثر قابلية للتنبؤ. على Samsung One UI، أضف يدوياً أي تطبيق LLM إلى قائمة الاستثناءات في العناية بالجهاز ← البطارية ← التطبيقات في وضع السكون.',
          },
          {
            q: 'هل أستطيع مشاركة مخرجات الذكاء الاصطناعي المحلي مع تطبيقات أخرى؟',
            a: 'نعم، من أي تطبيق — انسخ رد الذكاء الاصطناعي والصقه في أي مكان. للاتجاه العكسي (إرسال نص من تطبيق آخر إلى الذكاء الاصطناعي)، يظهر PocketPal AI وLayla فقط في قائمة المشاركة في Android اعتباراً من مايو 2026.',
          },
          {
            q: 'هل تدعم هذه التطبيقات Android Auto؟',
            a: 'لا. لا يدعم أي من التطبيقات الستة Android Auto اعتباراً من مايو 2026. يقيّد Android Auto التطبيقات التي يمكنها العمل أثناء القيادة، ولم يبنِ أي من تطبيقات LLM المحلية الواجهة المتوافقة مع Auto المطلوبة للحصول على الشهادة.',
          },
          {
            q: 'أي تطبيق يدير تخزين النماذج بأفضل صورة؟',
            a: 'يدير PocketPal AI تخزين النماذج بأناقة أكبر — يتكامل مباشرةً مع Hugging Face لتنزيل داخل التطبيق، ويدير بشكل صحيح تشرذم أقسام التخزين في Android، ويوفر واجهة لإدارة النماذج. Maid هو الأفضل للمستخدمين الراغبين في إدارة ملفات GGUF يدوياً عبر نظام الملفات. يستخدم MLC Chat تنسيق نموذج مُجمَّع ملكياً غير قابل للنقل إلى تطبيقات أخرى.',
          },
          {
            q: 'هل أستطيع تشغيل عدة نماذج في آن واحد؟',
            a: 'فقط إن كان جهازك يمتلك ذاكرة RAM كافية لكلا النموذجين مضافاً إليها عبء نظام تشغيل Android. على Pixel 9 Pro بـ 16 غيغابايت: نموذجا Phi-4 Mini (2.7 غيغابايت لكل منهما) يتركان ~10 غيغابايت لنظام التشغيل — ممكن تقنياً لكن ضيّق جداً. عملياً، أغلق أحد التطبيقات قبل فتح الآخر. برنامج Ollama عبر Termux يدعم تبديل النماذج بعملية `ollama serve` واحدة محمّلاً نموذجاً واحداً في كل مرة.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل تطبيقات LLM المحلية لنظام iPhone 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — المكافئ على iOS: LLM Farm وPocket Paladin وخريطة الاستدلال على iPhone.',
          '[كيفية تشغيل الذكاء الاصطناعي على جهاز لوحي: iPad وAndroid (2026)](/ar/power-local-llm/run-ai-on-tablet-ipad-android) — على الجهاز مقابل الاتصال عن بُعد للشاشة الأكبر، مع توصيات خاصة بالأجهزة اللوحية.',
          '[نماذج LLM المحمولة: Phi-4 Mini وGemma وSmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — دليل اختيار النماذج للاستدلال المحمول: أي النماذج يناسب الهواتف بذاكرة 4–16 غيغابايت.',
          '[دليل برامج LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — الدليل الشامل للتطبيقات بما في ذلك تطبيقات سطح المكتب وخلفيات الخادم والواجهات الأمامية لجميع المنصات.',
          '[أسهل تطبيق ذكاء اصطناعي محلي لنظامَي Windows وMac وLinux](/ar/power-local-llm/easiest-local-ai-app-windows-mac-linux) — المكافئ على سطح المكتب: الفلسفة ذاتها لمقارنة التطبيقات من حيث سهولة الاستخدام.',
          '[أفضل النماذج اللغوية المحلية 2026](/ar/local-llms/best-local-llms-2026) — مقالة موثوقية عن النماذج: أي نماذج مفتوحة الأوزان تستخدم على جميع إعدادات الأجهزة.',
          '[أفضل بدائل مفتوحة المصدر لـ ChatGPT Plus](/ar/prompt-bites/best-open-source-alternatives-to-chatgpt-plus) — Open WebUI وLibreChat وJan: مقارنة ميزات مع ChatGPT Plus.',
          '[أفضل نموذج Qwen للبرمجة](/ar/prompt-bites/best-qwen-model-for-coding) — Qwen3-Coder على Android عبر Termux + Ollama: الجدوى والإعداد.',
          '[اختيارات سريعة لتطبيقات LLM على Android](/ar/prompt-bites/best-local-llm-apps-android) — تريد فقط معرفة أيّ تطبيق تثبّت؟ مقارنة سريعة بدون قياسات أداء.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل تطبيقات النماذج اللغوية المحلية لنظام Android في 2026: مقارنة 6 تطبيقات على هواتف حقيقية',
      datePublished: '2026-05-08',
      dateModified: '2026-06-14',
      url: 'https://www.promptquorum.com/ar/power-local-llm/best-local-llm-apps-android-2026',
      inLanguage: 'ar',
      image: 'https://www.promptquorum.com/api/og/best-local-llm-apps-android-2026?lang=ar',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        url: 'https://www.promptquorum.com/about',
        sameAs: [
          'https://www.linkedin.com/in/hanskuepper/',
          'https://x.com/HansKuepperAPPs',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-06-14',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '2026년 Android용 최고의 로컬 LLM 앱: 실제 스마트폰으로 비교한 6가지 앱',
    seoTitle: 'Android 로컬 LLM 실행 2026: 속도, NPU 및 설정 가이드',
    intro:
      '2026년에 6가지 Android 앱이 인터넷 연결 없이 대형 언어 모델을 완전히 오프라인으로 실행합니다: MLC Chat, Maid, Layla, Ollama via Termux, Private AI, PocketPal AI. 각 앱은 NPU 활용 방식, 모델 라이브러리의 폭, Android 통합 수준에서 차이가 있습니다 — 최적의 선택은 속도(MLC Chat의 Hexagon NPU), 최대 모델 유연성(Ollama via Termux), 또는 세련된 네이티브 인터페이스(Layla 또는 PocketPal AI) 중 무엇을 원하느냐에 달려 있습니다. 이 가이드는 Samsung Galaxy S25 Ultra(Snapdragon 8 Elite), Pixel 9 Pro(Tensor G5), OnePlus 13(Snapdragon 8 Elite)에서 여섯 앱을 비교하며, Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5의 추론 성능, Android 파편화의 현실, 각 앱의 스토리지·백그라운드 제한·Android 공유 패널 처리 방식을 다룹니다.',
    metaDescription:
      'Android에서 로컬 LLM이 실제로 작동하는 방식 2026 — S25 Ultra, Pixel 9 Pro, OnePlus 13에서 실제 벤치마크. NPU 속도, GGUF 지원, RAM 한계. 6개 앱 비교.',
    twitterDescription:
      '2026년 Android 로컬 AI: MLC Chat은 Snapdragon의 Hexagon NPU로 ~40 tok/s 달성. Maid는 전체 GGUF 접근 제공. Ollama via Termux는 고급 사용자의 선택. S25 Ultra, Pixel 9 Pro, OnePlus 13에서 6개 앱 전체 비교.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Qwen3 1.7B',
      'Qwen3 4B',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM2 1.7B',
    ],
    current_hardware_mentioned: [
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
      'Snapdragon 8 Elite Hexagon NPU',
      'Google Tensor G5',
      'MediaTek Dimensity 9400 APU',
    ],
    audience:
      'API 클라우드, 구독 서비스, 기기 외부 데이터 전송 없이 스마트폰에서 로컬로 AI 모델을 실행하고자 하는 Android 사용자. 처음으로 앱을 설치하는 초보자부터 Termux + Ollama 파이프라인을 구축하는 고급 사용자까지 포괄합니다.',
    readTime: '14분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Android용 로컬 LLM 앱',
    targetKeywords: [
      '안드로이드 로컬 llm 앱 2026',
      '스마트폰 로컬 ai 실행',
      'mlc chat 안드로이드',
      'ollama 안드로이드 termux',
      'pocketpal ai 안드로이드',
      '오프라인 ai 안드로이드 인터넷 없이',
    ],
    leadAnswerBlock:
      '**MLC Chat은 2026년 Android에서 가장 빠른 로컬 LLM 앱입니다 — Galaxy S25 Ultra와 OnePlus 13에서 Snapdragon의 Hexagon NPU를 활용해 Qwen3 1.7B 기준 ~40 tokens/s를 달성하며, 동일 기기에서 CPU 전용 앱의 8–12 tokens/s를 크게 앞섭니다. PocketPal AI는 대부분의 사용자에게 최고의 균형 잡힌 선택입니다: 모든 GGUF 모델 지원, 세련된 네이티브 인터페이스, Android 스토리지 올바른 처리를 갖추고 있습니다. Ollama via Termux는 고급 사용자를 위한 경로입니다 — 전체 Ollama 생태계(모든 모델, OpenAI 호환 API, 도구 사용)를 스마트폰에서 이용할 수 있으며, 터미널 설정이 필요합니다. Maid는 순수 오픈소스 선택지입니다: F-Droid 배포, Play Store 의존 없음, 파일 관리자에서 직접 GGUF 가져오기. Layla는 초보자 친화적인 앱으로 엄선된 모델 다운로드를 제공합니다. Private AI는 간단한 비기술적 설정으로 완전한 프라이버시를 중시합니다. Android 사용자는 iPhone보다 결정적인 이점을 가집니다: 사이드로딩, Termux, F-Droid 설치 기능이 iOS에서는 불가능한 도구를 제공합니다.**',
    quickAnswerTop: {
      ko: {
        question: '2026년 Android에서 로컬 AI를 실행하기 가장 좋은 앱은 무엇입니까?',
        answer:
          'MLC Chat은 Hexagon NPU 지원 덕분에 Snapdragon 8 Elite 기기(S25 Ultra, OnePlus 13)에서 가장 빠릅니다 — Qwen3 1.7B 기준 ~40 tokens/s를 달성합니다. PocketPal AI는 광범위한 GGUF 지원, 세련된 인터페이스, Android 스토리지 올바른 처리로 대부분의 사용자에게 최고의 전반적 선택입니다. Ollama via Termux는 도구 사용과 OpenAI 호환 API를 포함한 완전한 Ollama 생태계를 제공합니다. Pixel 9 Pro(Tensor G5)에서는 타사 앱에 NPU 지원이 제한됩니다 — MLC Chat과 PocketPal AI 모두 CPU 전용으로 작동하며 Phi-4 Mini 기준 ~12–18 tokens/s를 제공합니다.',
        bullets: [
          'MLC Chat — Snapdragon 8 Elite에서 Hexagon NPU로 가장 빠름: Galaxy S25 Ultra에서 Qwen3 1.7B 기준 ~40 tok/s.',
          'PocketPal AI — 전반적으로 최고: GGUF 지원, 세련된 인터페이스, Android 스토리지 올바른 처리, Hugging Face 통합.',
          'Ollama via Termux — 고급 사용자에게 최고: 완전한 Ollama 생태계, 도구 사용, 기기 내 OpenAI 호환 API.',
          'Maid — 최고의 오픈소스 선택: F-Droid 배포, Google Play 의존 없음, 파일 관리자에서 직접 GGUF 가져오기.',
          'Layla — 초보자에게 최고: 엄선된 모델 다운로드, 간단한 온보딩, 터미널 불필요.',
          'Private AI — 프라이버시 중심 사용자에게 최고: 네트워크 원격 측정 없음, 최소 권한, 간단한 설정.',
          'Tensor G5(Pixel 9): NPU가 타사 앱에 노출되지 않음 — 6개 앱 모두 CPU 전용으로 실행, Phi-4 Mini 기준 10–18 tok/s.',
          'Android의 이점: Termux, F-Droid, 사이드로딩으로 iOS에서 불가능한 도구 사용 가능 — Ollama via Termux는 iPhone에서 구현 불가.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '비교 표', anchor: '#comparison-table' },
      { label: '어떤 앱을 선택해야 합니까?', anchor: '#which-app' },
      { label: '칩셋 비교: Snapdragon vs MediaTek vs Tensor', anchor: '#chipsets' },
      { label: 'MLC Chat', anchor: '#mlc-chat' },
      { label: 'Maid', anchor: '#maid' },
      { label: 'Layla', anchor: '#layla' },
      { label: 'Ollama via Termux', anchor: '#ollama-termux' },
      { label: 'Private AI', anchor: '#private-ai' },
      { label: 'PocketPal AI', anchor: '#pocketpal-ai' },
      { label: 'Android 파편화: 스토리지, RAM, 백그라운드 제한', anchor: '#android-fragmentation' },
      { label: 'Android 공유 패널 통합', anchor: '#share-sheet' },
      { label: '사이드로드 및 Termux 경로', anchor: '#sideload-paths' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-llm-apps-android-2026-static.html',
    gammaDescription: '이 프레젠테이션은 다음을 다룹니다: 3대의 실제 스마트폰(Galaxy S25 Ultra, Pixel 9 Pro, OnePlus 13)에서 비교한 Android용 로컬 LLM 앱 6종, 속도 표(MLC Chat ~40 tok/s with Snapdragon Hexagon NPU, PocketPal AI ~16 tok/s), 칩셋 비교(Snapdragon 8 Elite vs Tensor G5 vs MediaTek Dimensity 9400), 사용 사례별 앱 선택 가이드, Android 백그라운드 제한 해결책, 피해야 할 6가지 흔한 실수. PDF를 Android 로컬 AI 참조 카드로 다운로드하십시오.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MLC Chat은 Snapdragon 8 Elite에서 속도 우위를 가집니다.** Hexagon NPU는 Galaxy S25 Ultra에서 Qwen3 1.7B 기준 ~40 tok/s, Phi-4 Mini 기준 ~22 tok/s를 제공합니다 — 동일 하드웨어에서 CPU 전용 앱보다 3–4배 빠릅니다.',
          '**PocketPal AI는 대부분의 Android 사용자에게 최고의 전반적 선택입니다.** 전체 GGUF 생태계를 지원하고, 모델 다운로드를 위한 Hugging Face 통합, Android 스토리지 올바른 처리, 6개 앱 중 가장 세련된 모바일 네이티브 인터페이스를 갖추고 있습니다.',
          '**Ollama via Termux는 Android에서 완전한 OpenAI 호환 로컬 API로 가는 유일한 경로입니다.** 이는 도구 사용, 함수 호출, 또는 로컬 앱을 스마트폰 모델에 연결하려는 고급 사용자에게 중요합니다.',
          '**Tensor G5(Pixel 9 Pro)는 타사 앱에 NPU를 노출하지 않습니다.** 6개 앱 모두 Pixel 9 Pro에서 CPU 전용으로 실행되며 Phi-4 Mini 기준 10–18 tok/s를 제공합니다 — Snapdragon 8 Elite 기기의 동등한 결과보다 느립니다.',
          '**Maid는 F-Droid / Google 없는 선택입니다.** Play Store 의존 없음, Google 계정 불필요, 파일 관리자에서 직접 GGUF 가져오기. Google 서비스를 피하는 Android 사용자에게 최적입니다.',
          '**Android 백그라운드 제한이 가장 큰 사용성 문제입니다.** Android는 대부분의 제조사 ROM(특히 Samsung, OnePlus, Xiaomi)에서 백그라운드 프로세스를 적극적으로 종료합니다. 활성 추론을 수행하는 앱은 최근 앱 트레이에 고정하거나 배터리 최적화 설정에서 예외로 설정해야 생성 중 중단을 피할 수 있습니다.',
          '**모델 스토리지가 Android의 두 번째 큰 문제입니다.** 각 GGUF 모델은 1–8 GB를 차지합니다. Android의 내부 스토리지 파티션 분할로 인해 모델은 앱의 프라이빗 디렉토리 또는 특별히 설정된 위치에 저장해야 합니다 — 대부분의 앱에서 "다운로드" 폴더는 작동하지 않습니다.',
          '**Android의 이점은 실재합니다: Termux와 사이드로딩으로 iOS에서 구현 불가능한 도구를 사용할 수 있습니다.** Ollama via Termux는 iPhone에서 불가능합니다. F-Droid 앱과 ADB 사이드로딩으로 Google Play에 없는 앱에 접근할 수 있습니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**테스트 기기:** Samsung Galaxy S25 Ultra(Snapdragon 8 Elite, 12 GB RAM), Google Pixel 9 Pro(Tensor G5, 16 GB RAM), OnePlus 13(Snapdragon 8 Elite, 16 GB RAM).',
          '**테스트된 칩셋 계열:** Snapdragon 8 Elite(Hexagon NPU), Tensor G5(NPU가 타사 앱에 노출되지 않음), MediaTek Dimensity 9400(APU 사양 포함; 테스트 기기 아님).',
          '**12 GB Android 기기 최적 모델:** Phi-4 Mini(3.8B, Q4_K_M에서 ~2.7 GB) — 3대의 테스트 스마트폰 모두에서 6개 앱 전체에서 작동합니다.',
          '**8 GB Android 기기 최적 모델:** Qwen3 1.7B 또는 SmolLM2 1.7B — 모든 앱에서 작동; 매우 제한된 기기에는 Gemma 3 1B.',
          '**3B 모델 최소 RAM:** 기기 RAM 6 GB. 6 GB 미만은 1.7B 모델 사용.',
          '**S25 Ultra에서 tok/s(Phi-4 Mini):** MLC Chat ~22 tok/s(NPU 경로), PocketPal AI ~16 tok/s(CPU/Vulkan), Maid ~18 tok/s(Vulkan), Layla ~14 tok/s(CPU), Private AI ~13 tok/s(CPU), Ollama Termux ~10 tok/s(CPU).',
          '**Play Store vs F-Droid:** MLC Chat, Layla, PocketPal AI, Private AI는 Google Play에 있습니다. Maid는 주로 F-Droid에 있습니다. Ollama via Termux는 F-Droid의 Termux가 필요합니다.',
          '**Android 공유 패널 통합:** 2026년 5월 기준 PocketPal AI와 Layla만 Android 공유 패널 입력을 네이티브로 처리합니다.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '비교 표',
        content:
          '**토큰 속도는 Samsung Galaxy S25 Ultra(Snapdragon 8 Elite, 12 GB RAM)에서 Q4_K_M 양자화로 Phi-4 Mini를 실행하여 측정되었습니다.** NPU 활용은 앱에 따라 다릅니다 — MLC Chat은 2026년 5월 기준 검증된 Hexagon NPU 지원을 가진 유일한 앱입니다.',
                  image: '/images/best-local-llm-apps-android-2026-speed-comparison-ko.svg',
          imageCaption: 'MLC Chat는 Snapdragon Hexagon NPU를 통해 Phi-4 Mini에서 22 tok/sec를 기록하며, 테스트한 6개 안드로이드 앱 중 가장 빠릅니다.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat은 Snapdragon의 Hexagon NPU 지원 덕분에 2026년 Android 로컬 LLM 속도에서 선두를 차지합니다 — Galaxy S25 Ultra에서 Phi-4 Mini 기준 ~22 tok/s, Qwen3 1.7B 기준 ~40 tok/s를 달성하며, 동일 하드웨어의 CPU 전용 대안보다 2–3배 빠릅니다.',
          },
          {
            type: 'plain-terms',
            text: 'Snapdragon 8 Elite 스마트폰을 가지고 있고 가능한 가장 빠른 추론을 원한다면 MLC Chat을 선택하십시오. 최상의 모델 지원과 가장 세련된 인터페이스를 가진 최고의 전반적 앱을 원한다면 PocketPal AI를 선택하십시오. 스마트폰에서 완전한 로컬 AI API를 원하고 터미널이 익숙하다면 Ollama via Termux를 선택하십시오. Google 없이 완전히 오픈소스인 선택을 원한다면 Maid를 선택하십시오. 로컬 AI를 처음 접하고 엄선된 모델 다운로드를 원한다면 Layla를 선택하십시오. 데이터 프라이버시와 최소 권한이 주요 관심사라면 Private AI를 선택하십시오.',
          },
        ],
        columns: ['앱', 'tok/s(S25 Ultra, Phi-4 Mini)', 'NPU 지원', '최적 사용 사례'],
        rows: [
          {
            '앱': 'MLC Chat',
            'tok/s(S25 Ultra, Phi-4 Mini)': '~22 tok/s(NPU 경로)',
            'NPU 지원': '예 — Snapdragon 8 Elite에서 Hexagon NPU',
            '최적 사용 사례': 'Snapdragon 스마트폰에서 속도를 우선시하는 사용자',
          },
          {
            '앱': 'Maid',
            'tok/s(S25 Ultra, Phi-4 Mini)': '~18 tok/s(GPU Vulkan)',
            'NPU 지원': '부분 — GPU Vulkan, 전용 NPU 경로 없음',
            '최적 사용 사례': '오픈소스/F-Droid 사용자, 전체 GGUF 접근',
          },
          {
            '앱': 'Layla',
            'tok/s(S25 Ultra, Phi-4 Mini)': '~14 tok/s(CPU)',
            'NPU 지원': '아니오',
            '최적 사용 사례': '초보자, 엄선된 모델 다운로드',
          },
          {
            '앱': 'Ollama via Termux',
            'tok/s(S25 Ultra, Phi-4 Mini)': '~10 tok/s(CPU)',
            'NPU 지원': '아니오(표준 Termux 빌드에서 CPU 전용)',
            '최적 사용 사례': '고급 사용자, API 접근, 도구 사용',
          },
          {
            '앱': 'Private AI',
            'tok/s(S25 Ultra, Phi-4 Mini)': '~13 tok/s(CPU)',
            'NPU 지원': '아니오',
            '최적 사용 사례': '프라이버시 우선 사용자, 최소 권한',
          },
          {
            '앱': 'PocketPal AI',
            'tok/s(S25 Ultra, Phi-4 Mini)': '~16 tok/s(CPU/Vulkan)',
            'NPU 지원': '부분 — 지원 기기에서 GPU Vulkan',
            '최적 사용 사례': '대부분의 사용자 — 최고의 인터페이스 + 전체 GGUF 생태계',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pixel 9 Pro(Tensor G5)에서는 MLC Chat이 1위 자리를 내려놓습니다 — 6개 앱 모두 거기서 CPU 전용으로 실행되며, PocketPal AI와 Maid가 인터페이스 품질로 두각을 나타냅니다. Tensor G5에서는 타사 추론 앱에 대한 NPU 이점이 완전히 사라집니다.',
          },
          {
            type: 'warning',
            text: 'Layla와 Private AI의 tok/s 수치는 Phi-4 Mini Q4_K_M의 CPU 경로 추정치입니다. 실제 속도는 열 상태에 따라 달라집니다 — 뜨거운 스마트폰에서 지속적인 추론은 냉각 시작 수치보다 20–30% 하락할 수 있습니다.',
          },
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '어떤 앱을 선택해야 합니까?',
        content:
          '**올바른 앱은 기기의 칩셋과 단순함 대비 커스터마이징을 얼마나 중시하느냐에 따라 다릅니다.** Android 사용자들은 세련된 네이티브 경험(PocketPal AI, Layla)을 원하는 사람과 최대 제어(Ollama via Termux, Maid)를 원하는 사람으로 명확히 나뉩니다. iPhone과 달리 Android는 둘 다 가능합니다. 다양한 기기에서 모델 크기와 RAM 요구사항이 어떻게 연관되는지 더 잘 이해하려면 [VRAM 요구사항 가이드 →](/local-llms/how-much-vram-local-llm)를 참조하십시오.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Snapdragon 8 Elite 스마트폰을 가지고 있고 가능한 가장 빠른 추론을 원한다면 MLC Chat을 선택하십시오. 최상의 모델 지원과 가장 세련된 인터페이스를 가진 최고의 전반적 앱을 원한다면 PocketPal AI를 선택하십시오. 스마트폰에서 완전한 로컬 AI API를 원하고 터미널이 익숙하다면 Ollama via Termux를 선택하십시오. Google 없이 완전히 오픈소스인 선택을 원한다면 Maid를 선택하십시오. 로컬 AI를 처음 접하고 엄선된 모델 다운로드를 원한다면 Layla를 선택하십시오. 데이터 프라이버시와 최소 권한이 주요 관심사라면 Private AI를 선택하십시오.',
          },
        ],
        items: [
          '**Snapdragon 8 Elite 스마트폰(S25 Ultra, OnePlus 13):** MLC Chat으로 시작하십시오. MLC Chat 라이브러리에 없는 모델이 필요하다면 PocketPal AI를 두 번째 앱으로 추가하십시오 — Vulkan 가속 추론으로 전체 GGUF 생태계를 커버합니다.',
          '**Pixel 9 Pro(Tensor G5):** NPU 이점이 사라집니다 — PocketPal AI가 인터페이스 품질과 모델 폭으로 최고의 선택입니다. MLC Chat은 Tensor G5에서 CPU 전용으로 전환되어 속도 이점을 잃습니다.',
          '**모든 Android, 커스터마이징 우선:** Ollama via Termux + 채팅 프론트엔드(Alpaca, Chrome의 Open WebUI)가 가장 유능한 설정입니다. 약 30분의 터미널 작업이 필요하지만 OpenAI 호환 API 접근, 도구 사용, 전체 Ollama 모델 라이브러리를 제공합니다.',
          '**Google 없는 스마트폰/프라이버시:** F-Droid의 Maid. GrapheneOS, CalyxOS, 기타 Google 없는 빌드에서 작동합니다. Play Services 의존 없음.',
          '**RAM 8 GB 스마트폰:** 6개 앱 중 어느 것이든 Qwen3 1.7B 또는 SmolLM2 1.7B와 함께 사용하십시오. PocketPal AI는 제한된 기기에서 모델 스토리지를 더 우아하게 처리합니다.',
          '**Samsung Galaxy(모든 모델):** Samsung의 적극적인 백그라운드 프로세스 종료를 주의하십시오. AI 앱을 최근 앱 트레이에 고정하고 기기 케어 → 배터리 → 절전 모드 앱에서 예외로 추가하여 추론 중 중단을 피하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Snapdragon 스마트폰을 가지고 있고 주로 오프라인 채팅을 원한다면 MLC Chat(짧은 세션의 속도)과 PocketPal AI(MLC Chat 라이브러리에 없는 모델을 사용한 더 긴 작업) 모두 실행하십시오. 두 앱은 완벽하게 공존하며 별도의 모델 스토리지를 사용합니다.',
          },
        ],
      },
      chipsets: {
        id: 'chipsets',
        title: '칩셋 비교: Snapdragon vs MediaTek vs Tensor',
        content:
          '**Snapdragon 8 Elite는 2026년 Android에서 로컬 LLM 추론을 위해 가장 유능한 칩셋입니다 — Hexagon NPU는 MLC Chat에서 검증된 지원을 받는 유일한 모바일 NPU입니다.** Tensor G5와 MediaTek Dimensity 9400은 6개 앱 모두를 CPU 전용 또는 GPU Vulkan 모드로만 실행합니다.',
                  image: '/images/best-local-llm-apps-android-2026-chipset-npu-ko.svg',
          imageCaption: 'Snapdragon 8 Elite의 개방된 Hexagon NPU는 Phi-4 Mini를 22 tok/sec로 구동하며, Tensor G5의 CPU 전용 경로는 10-18에 그칩니다.',
snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Snapdragon 8 Elite의 Hexagon NPU는 2026년 Android에서 CPU 전용 실행보다 2–3배 빠른 추론을 제공합니다. 단, MLC Chat만이 이 이점을 노출하며 — 다른 모든 앱은 모든 칩셋에서 CPU 또는 GPU Vulkan으로 폴백합니다.',
          },
        ],
        columns: ['칩셋', '탑재 기기', '타사 앱용 NPU', '최선의 추론 경로', 'Phi-4 Mini 속도(추정)'],
        rows: [
          {
            '칩셋': 'Snapdragon 8 Elite',
            '탑재 기기': 'Galaxy S25 시리즈, OnePlus 13, Xiaomi 15 Pro',
            '타사 앱용 NPU': '예 — MLCC를 통한 Hexagon NPU(MLC Chat 전용)',
            '최선의 추론 경로': 'Hexagon NPU(MLC Chat) 또는 GPU Vulkan(Maid, PocketPal)',
            'Phi-4 Mini 속도(추정)': '~22 tok/s(NPU) / ~16–18 tok/s(Vulkan)',
          },
          {
            '칩셋': 'Google Tensor G5',
            '탑재 기기': 'Pixel 9 시리즈',
            '타사 앱용 NPU': '아니오 — Google이 자사 앱을 위해 NPU 예약',
            '최선의 추론 경로': 'CPU(모든 앱이 CPU 전용으로 실행)',
            'Phi-4 Mini 속도(추정)': '~12–15 tok/s(CPU)',
          },
          {
            '칩셋': 'MediaTek Dimensity 9400',
            '탑재 기기': 'Xiaomi 15 Ultra, Oppo Find X8 Pro, Vivo X200 Pro',
            '타사 앱용 NPU': '제한적 — 실험적 NNAPI 경로를 통한 MediaTek APU 접근',
            '최선의 추론 경로': 'GPU Vulkan(타사 최선 선택); 실험적 NNAPI',
            'Phi-4 Mini 속도(추정)': '~14–18 tok/s(Vulkan) / ~12 tok/s(CPU)',
          },
          {
            '칩셋': 'Snapdragon 8 Gen 3',
            '탑재 기기': 'Galaxy S24 시리즈, OnePlus 12',
            '타사 앱용 NPU': '부분 — 이전 세대 Hexagon, MLC Chat에서 제한적 지원',
            '최선의 추론 경로': 'GPU Vulkan 또는 CPU',
            'Phi-4 Mini 속도(추정)': '~12–15 tok/s(Vulkan)',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Google의 Tensor G5 NPU가 로컬 LLM 앱에 도움이 된다고 가정하지 마십시오. Google의 NPU는 자사 ML 서비스(Google 번역, 녹음기, 사진 처리)를 위해 예약되어 있습니다. 이 가이드의 6개 앱을 포함한 타사 추론 앱은 모든 Pixel 스마트폰에서 CPU 전용으로 실행됩니다. Pixel 9 Pro의 16 GB RAM이 실제 이점입니다 — 더 빠른 추론이 아니라 더 큰 모델을 위한 더 많은 공간.',
          },
          {
            type: 'tip',
            text: 'MediaTek Dimensity 9400 스마트폰은 Maid와 PocketPal AI의 GPU Vulkan 지원으로 혜택을 받습니다. Xiaomi 15 Ultra나 Oppo Find X8 Pro를 가지고 있다면 앱 설정에서 Vulkan을 활성화하여 CPU 경로 대비 30–40% 속도 향상을 얻으십시오.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat',
        content:
          '**MLC Chat(Machine Learning Compilation Chat)은 2026년 Snapdragon 8 Elite 기기에서 Android용 가장 빠른 로컬 LLM 앱입니다.** MLC AI 팀이 개발했으며, MLCC 프레임워크를 사용하여 Snapdragon의 Hexagon NPU를 직접 대상으로 모델을 컴파일합니다 — llama.cpp 또는 일반 Vulkan 백엔드를 사용하는 앱에서는 불가능한 최적화 경로입니다.',
        items: [
          '**모델 라이브러리:** 엄선됨 — MLC Chat은 모바일 최적화 사전 컴파일 모델 세트를 포함합니다(Qwen3 1.7B, Phi-4 Mini, Gemma 3 1B, Llama 3.2 1B). 커스텀 모델 가져오기는 가능하지만 MLC 컴파일 도구 체인이 필요합니다 — 원클릭 프로세스가 아닙니다.',
          '**NPU 활용:** Snapdragon 8 Elite(Galaxy S25 Ultra, OnePlus 13)에서 Hexagon NPU 지원 검증됨. S25 Ultra에서 Qwen3 1.7B 기준 ~40 tok/s, Phi-4 Mini 기준 ~22 tok/s로 측정됨 — 동일 하드웨어에서 CPU 전용 ~12–16 tok/s 대비.',
          '**인터페이스 품질:** 깔끔하고 기능적이며 미니멀함. 채팅 인터페이스만 — 시스템 프롬프트 편집기 없음, 캐릭터 카드 없음, 다중 모델 전환 없음. 집중된 채팅 작업에 적합하며 고급 사용자 설정에는 적합하지 않습니다.',
          '**Android 공유 패널:** 2026년 5월 기준 지원되지 않습니다. 표준 공유 패널을 통해 다른 앱에서 텍스트를 받을 수 없습니다.',
          '**오프라인 신뢰성:** 우수함. 모델이 컴파일되고 캐시되면 MLC Chat은 네트워크 호출 없이 작동합니다. 백그라운드 프로세스는 일부 llama.cpp 기반 앱에 비해 안정적입니다.',
          '**스토리지:** MLC Chat은 컴파일된 모델 가중치를 앱 프라이빗 디렉토리에 저장합니다(Snapdragon용 컴파일된 Phi-4 Mini의 경우 ~3 GB). 다른 앱으로 이식 불가능 — GGUF 기반 앱 대비 제한 사항.',
          '**설치 경로:** Google Play Store. 소스 코드: [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'MLC Chat의 모델 라이브러리는 엄선되고 컴파일됩니다. 공식 라이브러리에 없는 모델(예: 파인튜닝된 Mistral Small 또는 도메인별 모델)이 필요하다면 MLC Chat은 도움이 되지 않습니다 — 임의 GGUF 지원을 위해 PocketPal AI나 Maid를 사용하십시오. MLC Chat은 유연성이 아닌 속도 도구입니다.',
          },
        ],
      },
      maid: {
        id: 'maid',
        title: 'Maid',
        content:
          '**Maid는 F-Droid 우선 배포 방식의 완전한 오픈소스 Android 로컬 LLM 앱입니다 — Flutter로 빌드되었으며, llama.cpp를 추론 백엔드로 사용하고, Google Play 의존 없이 배포됩니다.** 파일 관리자에서 직접 GGUF 가져오기, 지원 기기에서 GPU Vulkan 가속, Google 없는 Android 버전(GrapheneOS, CalyxOS)에서 작동을 지원합니다.',
        items: [
          '**모델 라이브러리:** 제한 없음. 모든 GGUF 모델 파일을 Android 파일 관리자 또는 URL 다운로드로 가져올 수 있습니다. Hugging Face나 앱 엄선 라이브러리에 없는 모델도 포함됩니다.',
          '**NPU 활용:** 지원 기기에서 GPU Vulkan 경로 — 전용 NPU 없음. Snapdragon 8 Elite에서 Vulkan은 Phi-4 Mini 기준 ~18 tok/s를 제공합니다 — MLC Chat의 NPU 경로 ~22 tok/s 대비. Hexagon NPU 접근 없음.',
          '**인터페이스 품질:** 기능적이지만 PocketPal AI나 Layla보다 덜 세련됨. 시스템 프롬프트 편집기, 온도 조절, 기본 채팅 기록 관리 있음. 캐릭터 카드 지원은 제한적.',
          '**Android 공유 패널:** 2026년 5월 기준 지원되지 않습니다.',
          '**오프라인 신뢰성:** 우수 — llama.cpp 기반 추론은 안정적입니다. 제조사 ROM(Samsung, OnePlus)의 백그라운드 제한은 여전히 적용됩니다.',
          '**스토리지:** 모델은 앱 프라이빗 디렉토리 또는 사용자 지정 경로에 저장됩니다. GGUF 파일은 공유 가능한 Android 스토리지에 배치되면 Maid와 PocketPal AI 간에 이식 가능합니다.',
          '**설치 경로:** F-Droid(기본), GitHub 릴리스. 소스 코드: [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid). Google Play에서 불가.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'GrapheneOS나 Google 없는 Android 버전을 사용한다면 Maid가 최고의 선택입니다 — Google Play Services 의존이 없습니다. F-Droid 클라이언트를 통해 설치하거나 GitHub 릴리스 페이지에서 APK를 직접 다운로드하여 ADB로 사이드로드하십시오.',
          },
        ],
      },
      layla: {
        id: 'layla',
        title: 'Layla',
        content:
          '**Layla는 Android 로컬 LLM 앱 중 초보자에게 가장 접근하기 쉬운 앱입니다 — 엄선된 다운로드 흐름 뒤에 모델 관리를 추상화하고, 터미널이 필요 없으며, 추론 설정을 노출하지 않고 세련된 채팅 인터페이스를 제공합니다.** 트레이드오프는 더 작은 모델 선택과 CPU 전용 추론입니다.',
        items: [
          '**모델 라이브러리:** 엄선됨, 더 작은 세트. Layla는 관리형 다운로드 경험을 제공합니다 — 앱 내 라이브러리에서 모델을 선택하면 자동으로 다운로드되고 설정됩니다. 커스텀 GGUF 가져오기는 주요 기능이 아닙니다.',
          '**NPU 활용:** CPU 전용 경로 — GPU Vulkan이나 Hexagon NPU 없음. 이로 인해 Layla는 Snapdragon 8 Elite에서 6개 중 가장 느립니다(Phi-4 Mini 기준 ~14 tok/s). 단, 모든 Android 칩셋에서 일관됩니다.',
          '**인터페이스 품질:** 6개 앱 중 처음 사용자에게 가장 높음. 명확한 대화 관리, 설정 오버헤드 없음, 원활한 모델 전환이 있는 채팅 중심 인터페이스.',
          '**Android 공유 패널:** 지원됨 — Layla는 Android 공유 패널을 통해 다른 앱에서 텍스트를 받을 수 있으며, 이 가이드에서 표준 Android 공유 흐름에 통합된 두 앱 중 하나입니다.',
          '**오프라인 신뢰성:** 양호. 모델 다운로드 후 완전히 오프라인. 로컬 서버 프로세스를 실행하지 않기 때문에 백그라운드 종료에 덜 취약합니다(Ollama via Termux와 달리).',
          '**스토리지:** Layla가 모델 스토리지를 내부적으로 관리합니다. 수동 파일 관리 불필요.',
          '**설치 경로:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Layla의 공유 패널 지원은 Android 워크플로우에서 독특하게 유용합니다: 모든 앱에서 텍스트 강조 → 공유 → Layla → 내용에 대해 질문. 이 사용 사례 — 앱 전환 없이 신속한 컨텍스트 내 AI 지원 — 는 Layla가 이 목록의 다른 모든 앱을 능가하는 부분입니다.',
          },
        ],
      },
      ollamaTermux: {
        id: 'ollama-termux',
        title: 'Ollama via Termux',
        content:
          '**Ollama via Termux는 Android에서 도구 사용, 함수 호출, 타사 Android 앱을 로컬에서 실행 중인 모델에 연결하는 기능을 포함한 완전한 OpenAI 호환 로컬 API로 가는 유일한 경로입니다.** 설정에 20–30분이 걸리고 터미널 사용에 익숙해야 하지만, 결과는 Mac과 Linux 사용자가 데스크톱에서 실행하는 것과 동일한 Ollama 생태계를 스마트폰에서 사용하는 것입니다.',
        numberedItems: [
          'F-Droid에서 Termux를 설치하십시오(Play Store 버전 아님 — Play Store 빌드는 오래되어 Ollama 설치를 중단시킵니다).',
          'Termux에서: `pkg update && pkg install curl`',
          'Ollama 설치: `curl -fsSL https://ollama.com/install.sh | sh` — 이것이 Android ARM64 환경을 감지하고 올바른 바이너리를 설치합니다.',
          '모델 다운로드: `ollama pull qwen3:1.7b` 또는 `ollama pull phi4-mini`.',
          '서버 시작: `ollama serve`(Termux 세션에서 실행 유지 또는 백그라운드 위젯 사용).',
          'Termux를 통해 상호작용: `ollama run phi4-mini` — 또는 `http://localhost:11434`에서 OpenAI 호환 엔드포인트를 지원하는 모든 앱 연결.',
        ],
        items: [
          '**모델 라이브러리:** 무제한 — `ollama pull [모델명]`을 통해 전체 Ollama 모델 라이브러리 사용 가능. 이 가이드의 앱 중 가장 넓은 모델 접근.',
          '**NPU 활용:** 표준 Ollama ARM64 빌드에서 CPU 전용. 2026년 5월 기준 표준 Termux 설정에서 GPU Vulkan 또는 Hexagon NPU 지원 없음. 이로 인해 Ollama는 원시 tok/s에서 가장 느립니다(S25 Ultra에서 Phi-4 Mini 기준 ~10 tok/s).',
          '**도구 사용 및 함수 호출:** 지원됨 — Android의 Ollama는 데스크톱과 동일한 방식으로 도구 사용을 처리합니다. 도구 사용 가능 프론트엔드를 localhost:11434에 연결하십시오.',
          '**Android 공유 패널:** 직접 지원되지 않습니다. 해결책: Termux:Widget 단축키를 사용하여 클립보드 내용을 `ollama run [모델]`에 보내십시오.',
          '**백그라운드 신뢰성:** 배터리 최적화 화이트리스트 없이는 Samsung과 OnePlus에서 문제 있음. Termux:Widget 단축키를 `ollama serve`용으로 만들고 최근 앱 트레이에 Termux를 고정하십시오. Samsung One UI는 Termux에 대해 "절전 모드 앱"을 명시적으로 비활성화해야 합니다.',
          '**설치 경로:** F-Droid에서 Termux, 그 후 curl을 통한 Ollama 설치 스크립트.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '스마트폰의 Ollama via Termux는 데스크톱의 Ollama보다 현저히 느립니다 — S25 Ultra에서 Phi-4 Mini 기준 ~10 tok/s 대 RTX 4090에서 60+ tok/s. 성능이 아닌 편의성(오프라인 주머니 API, 데스크톱에서 떨어진 곳에서의 빠른 쿼리)을 위해 사용하십시오. 모바일에서 대형 모델 품질을 원한다면 Chrome의 Open WebUI를 통해 Ollama를 실행하는 홈 머신에 원격으로 연결하는 것이 여전히 최선입니다.',
          },
          {
            type: 'tip',
            text: 'Termux:Widget 플러그인을 설치하고 `ollama serve`를 실행하는 원터치 단축키를 만드십시오. 이렇게 하면 Termux를 열지 않고도 Android 홈 화면 위젯에서 Ollama 서버를 시작할 수 있습니다. 서비스가 시작되면 `localhost:11434`를 사용하도록 설정된 모든 앱이 자동으로 연결됩니다.',
          },
        ],
      },
      privateAI: {
        id: 'private-ai',
        title: 'Private AI',
        content:
          '**Private AI는 프라이버시 중심의 Android 로컬 LLM 앱입니다 — 최소 권한, 네트워크 원격 측정 없음, 간단한 비기술적 설정으로 모든 추론이 기기 내에 남기를 원하는 사용자를 위해 설계되었습니다.** 이 가이드의 어떤 앱보다 더 적은 권한을 요청하며, 초기 모델 다운로드 후 외부 서버에 접근하지 않습니다.',
        items: [
          '**모델 라이브러리:** 프라이버시 검토 엄선 세트. 다운로드는 검증 가능한 소스에서 이루어집니다. 임의 Hugging Face 저장소 접근 없음 — 유연성을 통제되고 감사 가능한 모델 공급과 교환합니다.',
          '**NPU 활용:** CPU 전용 경로. 모든 칩셋에서 일관적으로 Phi-4 Mini 기준 ~13 tok/s(S25 Ultra).',
          '**인터페이스 품질:** 깔끔하고 미니멀함. 대화 내보내기와 사용 원격 측정 없이 채팅 중심. 고급 설정 옵션 부족(온도, top-p, 시스템 프롬프트) — 의도적으로 단순화됨.',
          '**Android 공유 패널:** 2026년 5월 기준 지원되지 않습니다.',
          '**오프라인 신뢰성:** 최고 수준. 완전히 오프라인으로 작동하도록 설계됨. 백그라운드 네트워크 호출 없음, 동기화 없음, 분석 없음.',
          '**권한:** 최소 — 스토리지 및 마이크(음성 입력, 선택 사항) 접근 요청. 연락처, 위치, 광고 ID 미요청.',
          '**설치 경로:** Google Play Store.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '사용 사례에 민감한 전문 텍스트(법률 초안, 의료 메모, 기밀 비즈니스 콘텐츠)가 포함된다면 Private AI의 최소 권한과 감사 가능한 원격 측정 없는 아키텍처가 중요합니다. 일반적인 생산성 사용의 경우 PocketPal AI가 더 나은 전반적 선택이지만, Private AI의 신뢰 모델이 더 견고합니다.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI',
        content:
          '**PocketPal AI는 2026년 대부분의 사용자에게 Android용 최고의 전반적 로컬 LLM 앱입니다.** 전체 GGUF 모델 생태계(Hugging Face의 모든 모델), GPU Vulkan 가속, 6개 앱 중 가장 세련된 모바일 네이티브 인터페이스, Android 공유 패널 직접 지원, 올바른 Android 스토리지 처리를 결합합니다 — 이 가이드의 다른 어떤 앱도 이 조합을 갖추지 못했습니다.',
        items: [
          '**모델 라이브러리:** 전체 GGUF 생태계 — 앱 내에서 직접 Hugging Face에서 탐색 및 다운로드, 또는 로컬 GGUF 파일 가져오기. Maid와 동일한 폭을 커버하되 엄선된 검색 인터페이스 추가.',
          '**NPU 활용:** 지원 기기에서 GPU Vulkan 경로. Snapdragon 8 Elite에서 Phi-4 Mini 기준 ~16 tok/s 제공 — MLC Chat의 NPU 경로(~22 tok/s) 대비 뒤지지만 동일 기기의 모든 CPU 전용 앱보다 앞섭니다.',
          '**인터페이스 품질:** 6개 앱 중 최고의 모바일 네이티브 인터페이스. 제스처 탐색, 대화 관리, 시스템 프롬프트 편집기, 모델 벤치마킹, 모델별 설정 패널. React Native + llama.rn으로 빌드됨.',
          '**Android 공유 패널:** 지원됨 — PocketPal AI와 Layla는 이 가이드에서 Android 공유 패널에 통합된 유일한 두 앱입니다. 모든 앱에서 텍스트 선택 → 공유 → PocketPal AI.',
          '**오프라인 신뢰성:** 우수함. 백그라운드 서버 프로세스 없음(Ollama via Termux와 달리) — 추론이 프로세스 내에서 실행되어 서버 기반 접근을 괴롭히는 Android 백그라운드 종료 문제를 피합니다.',
          '**스토리지:** 기본적으로 앱 프라이빗 스토리지에 GGUF 파일 저장, 외부 스토리지를 가리키는 옵션 있음. 모델 파일은 Android 공유 스토리지로 이동하면 Maid로 이식 가능합니다.',
          '**설치 경로:** Google Play Store. 소스 코드: [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'PocketPal AI의 앱 내 모델 벤치마킹 도구(짧은 프롬프트 실행 후 tok/s 측정)는 특정 스마트폰에서 모델 크기를 비교하는 데 유용합니다. Phi-4 Mini, Qwen3 1.7B, Qwen3 4B에서 실행하여 일상 사용에 모델을 선택하기 전에 기기의 실용적인 속도 상한선을 찾으십시오.',
          },
        ],
      },
      androidFragmentation: {
        id: 'android-fragmentation',
        title: 'Android 파편화: 스토리지, RAM, 백그라운드 제한',
        content:
          '**Android 파편화는 로컬 LLM 앱에 세 가지 실질적인 문제를 만듭니다: 스토리지 파티션 충돌, 불일치한 RAM 할당, 제조사의 공격적인 백그라운드 종료 정책.** 이 세 가지는 Samsung, OnePlus, Pixel, 다른 Android 제조사 기기에서 iOS에서는 발생하지 않는 방식으로 모델 신뢰성에 영향을 미칩니다.',
        snippetBlocks: [
          {
            type: 'plain-terms',
            text: 'Android 파편화는 Pixel 9 Pro에서 완벽하게 작동하는 로컬 LLM 앱이 Galaxy S25 Ultra에서 추론 도중 멈출 수 있음을 의미합니다 — 앱이나 모델 때문이 아니라 Samsung의 백그라운드 종료 정책이 배터리를 절약하기 위해 프로세스를 종료하기 때문입니다. 각 Android 제조사는 이러한 정책을 다르게 커스터마이징합니다 — Pixel은 AOSP 표준에 더 가깝고; Samsung, OnePlus, Xiaomi는 모두 기본적으로 더 공격적인 백그라운드 종료를 합니다.',
          },
        ],
        items: [
          '**스토리지 파티션:** Android의 `/data/user/0/`(앱 프라이빗 스토리지)와 `/sdcard/`(공유 스토리지)는 별도의 파티션입니다. 대부분의 로컬 LLM 앱은 앱 프라이빗 스토리지에 모델을 저장하는데, 이는 루트 없이 파일 관리자에서 탐색할 수 없습니다. Maid와 PocketPal AI 간에 GGUF 파일을 공유하려면 먼저 공유 위치로 복사해야 합니다.',
          '**RAM 할당:** Android는 타사 앱에 메모리 할당을 보장하지 않습니다. 시스템이 RAM이 필요하면 추론 프로세스를 포함한 백그라운드 프로세스를 종료합니다. RAM 12 GB 기기(S25 Ultra 기본값)에서는 활성 사용 중 거의 문제가 없습니다. RAM 8 GB 스마트폰에서는 추론 중 다른 앱을 실행하면 중단될 수 있습니다.',
          '**Samsung One UI 백그라운드 종료:** 주요 Android 제조사 중 가장 공격적입니다. 설정 → 기기 케어 → 배터리 → 백그라운드 사용 제한 → 절전 모드 앱으로 이동하여 이 목록의 모든 LLM 앱을 수동으로 제거하십시오. 또한 최근 앱 아이콘을 눌러 앱을 고정하십시오.',
          '**OnePlus OxygenOS 백그라운드 종료:** Samsung과 유사합니다. 설정 → 배터리 → 배터리 최적화로 이동하여 LLM 앱을 찾아 "최적화하지 않음"으로 설정하십시오. 추가로 최근 앱 개요에서 앱을 고정하십시오.',
          '**Pixel(AOSP에 가장 가까움):** 백그라운드 동작이 가장 예측 가능합니다. `FOREGROUND_SERVICE` 권한을 요청하는 앱(PocketPal AI와 Maid가 해당)은 Pixel에서 활성 추론 중 안정적으로 실행됩니다. 매우 긴 세션에는 배터리 최적화 제외를 권장합니다.',
          '**Xiaomi MIUI/HyperOS:** Samsung 다음으로 가장 공격적인 백그라운드 종료. "배터리 절약" 기능이 생성 도중 추론을 종료할 수 있습니다. 설정 → 앱 → 앱 관리 → [앱] → 배터리 절약 → 제한 없음으로 이동하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '어떤 로컬 LLM 앱에 대해서도 Android의 기본 백그라운드 동작에 의존하지 마십시오. Samsung과 OnePlus 기기에서는 기본 정책이 배터리 최적화 설정에서 앱을 명시적으로 화이트리스트에 추가하지 않는 한 긴 추론 세션(2분 이상)을 중단시킵니다. 이것이 이 가이드의 모든 앱에서 "앱이 응답 중간에 멈췄습니다" 보고의 가장 큰 원인입니다.',
          },
        ],
      },
      shareSheet: {
        id: 'share-sheet',
        title: 'Android 공유 패널 통합',
        content:
          '**Android 공유 패널 통합 — 모든 앱에서 텍스트를 선택하고 로컬 AI로 보내는 기능 — 은 6개 앱 중 두 개만 지원합니다: PocketPal AI와 Layla.** 이 단일 기능이 로컬 AI를 독립 앱이 아닌 진정한 시스템 수준 도구로 만듭니다.',
        items: [
          '**작동 방식:** 모든 Android 앱(웹 브라우저, 이메일, PDF 리더, 메시징 앱)에서 텍스트 선택 → 공유 탭 → PocketPal AI 또는 Layla 선택 → 선택한 텍스트가 채팅 입력 필드에 미리 채워짐.',
          '**PocketPal AI 공유 패널:** 일반 텍스트 수신. 선택한 텍스트가 미리 채워진 새 대화 열기. 그 후 프롬프트 추가(예: "요약해 주세요", "한국어로 번역해 주세요", "사실을 확인해 주세요") 가능.',
          '**Layla 공유 패널:** 동일한 기본 기능. 공유 패널에서 채팅 인터페이스로의 전환이 약간 더 매끄러움.',
          '**MLC Chat, Maid, Ollama via Termux, Private AI:** 2026년 5월 기준 Android 공유 패널에 표시되지 않습니다. 텍스트를 이러한 앱에 수동으로 복사 및 붙여넣어야 합니다.',
          '**실용적 사용 사례:** 웹 탐색 중 기사 요약, 이메일 번역, 메시지 답장 초안 작성, 단락 팩트 체크 — 모두 텍스트가 기기를 떠나거나 클라우드 API를 건드리지 않습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '전체 모델 라이브러리(Layla나 PocketPal AI의 엄선된 세트에 없는 모델 포함)를 사용하면서 공유 패널 통합을 원하는 고급 사용자를 위한 해결책: 텍스트 복사 → PocketPal AI 열기 → 모든 GGUF 모델 로드 → 붙여넣기. PocketPal AI의 Hugging Face 통합으로 커스텀 모델을 로드하고 공유 대상 앱으로 계속 사용할 수 있습니다.',
          },
        ],
      },
      sideloadPaths: {
        id: 'sideload-paths',
        title: '사이드로드 및 Termux 경로: Android의 이점',
        content:
          '**Android의 사이드로딩 및 Termux 생태계는 iOS에서 존재하지 않는 로컬 AI 도구에 Android 사용자가 접근할 수 있게 합니다.** 이것이 2026년 로컬 AI 사용에서 Android와 iPhone 간의 가장 두드러진 실질적 차이입니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama via Termux — 스마트폰의 완전한 로컬 LLM API 서버 — 는 2026년 Android 독점 기능입니다: Apple의 iOS 샌드박스가 iPhone에서 동등한 설정을 방지하여, 기기 내 OpenAI 호환 API가 필요한 사용자에게 Android가 유일한 모바일 플랫폼이 됩니다.',
          },
        ],
        items: [
          '**Termux:** Android 앱 내의 Linux 환경. F-Droid를 통해 설치(Play Store 아님). bash, Python, curl 및 Ollama를 포함한 거의 모든 Linux ARM64 바이너리 실행 가능. Termux는 iOS에서 사용 불가; 동등한 것(iSH)은 로컬 API를 제공하기 위한 네트워킹 기능이 없습니다.',
          '**F-Droid 사이드로딩:** Google Play 없이 앱 설치 — Maid, Termux 및 기타 오픈소스 로컬 AI 도구에 유용합니다. F-Droid 클라이언트 APK를 다운로드하고, Android 보안 설정에서 "알 수 없는 소스에서 앱 설치"를 활성화하고, F-Droid를 설치한 후 Google 계정 없이 F-Droid에 나열된 모든 앱을 설치하십시오.',
          '**ADB 사이드로딩:** 고급 사용자는 Android Debug Bridge를 통해 직접 APK를 사이드로드할 수 있습니다(`adb install [app.apk]`). 이를 통해 Play Store 목록이 지역에 따라 제한되거나 제거된 앱을 설치할 수 있습니다.',
          '**커스텀 ROM의 이점:** LineageOS, GrapheneOS, CalyxOS 사용자는 Google Play를 완전히 비활성화하고 F-Droid + ADB를 유일한 앱 설치 경로로 사용할 수 있습니다. Maid와 Termux는 이러한 플랫폼에서 완전히 작동합니다. iOS에는 동등한 것이 없습니다.',
          '**Termux를 통한 llama.cpp 서버 모드:** Ollama 외에도 llama.cpp 자체를 Termux를 통해 컴파일하고 서버 모드로 실행할 수 있습니다 — Ollama에 비해 더 낮은 메모리 사용을 선호하는 일부 사용자가 선호하는 대체 로컬 API를 제공합니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Termux + Ollama 설정은 동일한 스마트폰의 다른 앱을 위한 로컬 API 서버로도 작동합니다. 예를 들어 Obsidian(Local REST API 플러그인)과 같은 앱이나 Shortcuts 유사 커스텀 자동화는 인터넷 없이 AI 작업을 실행하기 위해 `localhost:11434/api/generate`를 쿼리할 수 있습니다 — 진정으로 유용한 홈 화면 자동화 패턴입니다.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        content: '**Android에서 로컬 LLM 앱의 대부분의 실패는 피할 수 있는 네 가지 실수에서 비롯됩니다.**',
        items: [
          '**Play Store에서 Termux 설치.** Play Store 버전의 Termux는 오래되었습니다(Termux는 2020년에 업데이트를 중단했습니다). 현재 유지 관리되는 빌드는 F-Droid에 있습니다. `pkg install curl`과 Ollama 설치 스크립트는 Play Store 버전의 Termux에서 실패합니다.',
          '**Pixel 스마트폰에서 NPU 속도 기대.** Google의 Tensor G5 NPU는 타사 앱에서 접근 불가합니다. 6개 앱 모두 모든 Pixel 모델에서 CPU 전용으로 실행됩니다. MLC Chat의 NPU 이점은 Snapdragon 8 Elite에서만 적용되며 Pixel로는 이전되지 않습니다.',
          '**Samsung에서 배터리 최적화 화이트리스트 건너뜀.** Galaxy 스마트폰은 백그라운드 프로세스를 공격적으로 종료합니다. 90초 이상 지속되는 생성은 Termux나 LLM 앱이 명시적으로 화이트리스트에 없으면 백그라운드 종료 정책에 의해 중단될 가능성이 높습니다.',
          '**기기에 비해 너무 큰 모델 다운로드.** 7B Q4_K_M 모델(~4.7 GB)은 ~6 GB의 사용 가능 RAM이 필요합니다. 시스템 오버헤드가 있는 12 GB 스마트폰에서는 빡빡합니다. 8 GB 스마트폰에서는 생성 도중 OOM으로 앱이 충돌합니다. 8–10 GB 기기에는 Phi-4 Mini(3.8B, ~2.7 GB), 그 이하에는 Qwen3 1.7B(~1.1 GB)를 사용하십시오.',
          '**다운로드 폴더의 스토리지가 접근 가능하다고 가정.** 대부분의 로컬 LLM 앱은 앱 프라이빗 스토리지(`/data/user/0/[앱패키지]/`)에 모델 파일을 저장하는데, 이는 루트 없이 파일 관리자에서 탐색할 수 없습니다. GGUF를 다운로드 폴더에 다운로드하고 앱이 찾을 것이라 기대한다면 찾지 못할 것입니다 — 앱의 내장 가져오기 기능을 사용하거나 설정에서 올바른 경로를 가리키십시오.',
          '**두 추론 앱을 동시에 실행.** 각 앱은 모델을 RAM에 로드합니다. 12 GB 스마트폰에서 두 개의 3B 모델은 운영 체제에 ~5 GB를 남겨 종료를 유발합니다. MLC Chat과 PocketPal AI를 모두 사용한다면 다른 앱을 열기 전에 하나를 닫으십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'MLC Chat GitHub 및 문서 — [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)',
          'Maid GitHub (Mobile Artificial Intelligence) — [github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
          'PocketPal AI GitHub — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)',
          'Ollama 공식 문서 — [ollama.com](https://ollama.com)',
          'Termux 공식 문서 — [wiki.termux.com](https://wiki.termux.com)',
          'Snapdragon 8 Elite Hexagon NPU 기술 문서 — Qualcomm Developer Network',
          'MediaTek Dimensity 9400 APU 사양 — MediaTek 제품 페이지',
          'Google Tensor G5 칩 개요 — Google 하드웨어 문서',
          'Android 배터리 최적화 및 백그라운드 프로세스 제한 — Android 개발자 문서',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Pixel 9 Pro에서 7B 모델을 실행할 수 있습니까?',
            a: '예, Pixel 9 Pro에는 16 GB RAM이 있습니다 — 7B Q4_K_M 모델(~4.7 GB 모델 가중치)을 시스템 RAM이 남은 상태로 실행하기에 충분합니다. 해당 크기에서 속도는 ~8–10 tok/s입니다(Tensor G5에서 CPU 전용). 이 사용 사례에는 PocketPal AI나 Maid를 7B GGUF와 함께 사용하십시오. Pixel 9 Pro에서 실시간 대화 속도를 원한다면 Phi-4 Mini(3.8B, ~14 tok/s)를 고수하십시오.',
          },
          {
            q: '이 앱들이 Snapdragon NPU를 사용합니까?',
            a: 'MLC Chat만 Snapdragon NPU를 사용하며, Snapdragon 8 Elite 기기(Galaxy S25 시리즈, OnePlus 13)에서만 Hexagon NPU를 사용합니다. 다른 5개 앱은 CPU 또는 GPU Vulkan을 사용합니다. Hexagon NPU는 동일 기기의 CPU 경로 대비 MLC Chat에서 2–3배 빠른 추론을 제공합니다.',
          },
          {
            q: 'Samsung Galaxy S22에서 로컬 AI를 실행할 수 있습니까?',
            a: '예, 8 GB RAM 변형에서 가능합니다. Galaxy S22는 Snapdragon 8 Gen 1(또는 일부 지역에서 Exynos 2200)을 실행합니다. PocketPal AI와 Maid는 Qwen3 1.7B 또는 SmolLM2 1.7B와 함께 ~8–12 tok/s로 작동합니다. Phi-4 Mini(3.8B)는 8 GB RAM에서 가능하지만 빡빡합니다 — 먼저 다른 모든 앱을 닫으십시오. MLC Chat의 NPU 경로는 Snapdragon 8 Gen 1에서 검증되지 않았습니다.',
          },
          {
            q: '로컬 AI를 위해 스마트폰을 루팅해야 합니까?',
            a: '아니오. 이 가이드의 6개 앱은 모두 루팅되지 않은 Android 스마트폰에서 작동합니다. Termux는 F-Droid APK에 대해 "알 수 없는 소스에서 앱 설치"를 활성화해야 하지만 이는 루팅이 아닙니다. 루팅은 파일 관리자에서 앱의 프라이빗 스토리지 디렉토리에 접근하는 데만 관련 있습니다 — 추론에는 필요하지 않습니다.',
          },
          {
            q: '이 앱들을 Termux와 함께 사용할 수 있습니까?',
            a: 'Ollama via Termux는 자체 완전한 설정입니다 — Termux 내에 Ollama를 설치하고 Termux 터미널을 통해 상호작용합니다. 다른 5개 앱(MLC Chat, Maid, Layla, Private AI, PocketPal AI)은 Termux와 상호작용하지 않는 독립 Android 앱입니다. 고급 사용자는 둘 다 실행합니다: API 접근을 위한 Termux의 Ollama와 세련된 채팅 인터페이스를 위한 PocketPal AI.',
          },
          {
            q: 'Android 백그라운드 제한을 어떻게 처리합니까?',
            a: '백그라운드 제한은 Android 로컬 LLM 앱의 가장 큰 신뢰성 문제입니다. PocketPal AI와 Maid는 FOREGROUND_SERVICE 권한을 요청하여 백그라운드 종료에 더 강합니다. Ollama via Termux는 배터리 최적화 설정에서 Termux가 명시적으로 화이트리스트에 없으면 Samsung과 OnePlus의 백그라운드 종료 정책에 취약합니다. Pixel에서 백그라운드 동작이 더 예측 가능합니다. Samsung One UI에서는 기기 케어 → 배터리 → 절전 모드 앱에서 모든 LLM 앱을 수동으로 화이트리스트에 추가하십시오.',
          },
          {
            q: '로컬 AI 출력을 다른 앱과 공유할 수 있습니까?',
            a: '예, 어떤 앱에서든 가능합니다 — AI 응답을 복사하고 어디든 붙여넣으십시오. 반대 방향(다른 앱에서 AI로 텍스트 전송)의 경우, 2026년 5월 기준 PocketPal AI와 Layla만 Android 공유 패널에 표시됩니다.',
          },
          {
            q: '이 앱들이 Android Auto를 지원합니까?',
            a: '아니오. 2026년 5월 기준 6개 앱 중 어느 것도 Android Auto를 지원하지 않습니다. Android Auto는 운전 중 실행할 수 있는 앱을 제한하며, 로컬 LLM 앱들은 인증에 필요한 Auto 호환 인터페이스를 구축하지 않았습니다.',
          },
          {
            q: '어떤 앱이 모델 스토리지를 가장 잘 처리합니까?',
            a: 'PocketPal AI가 모델 스토리지를 가장 우아하게 처리합니다 — 앱 내 다운로드를 위해 Hugging Face와 직접 통합하고, Android 스토리지 파티션 분할을 올바르게 처리하며, 모델 관리 인터페이스를 제공합니다. Maid는 파일 시스템을 통해 GGUF 파일을 수동으로 관리하고자 하는 사용자에게 최적입니다. MLC Chat은 다른 앱으로 이식 불가능한 독점 컴파일된 모델 형식을 사용합니다.',
          },
          {
            q: '여러 모델을 동시에 실행할 수 있습니까?',
            a: '두 모델과 Android 운영 체제 오버헤드를 위한 충분한 RAM이 기기에 있는 경우에만 가능합니다. Pixel 9 Pro(16 GB)에서: 두 개의 Phi-4 Mini 모델(각 2.7 GB)은 운영 체제에 ~10 GB를 남겨줍니다 — 기술적으로 가능하지만 매우 빡빡합니다. 실제로는 다른 앱을 열기 전에 한 앱을 닫으십시오. Ollama via Termux는 단일 `ollama serve` 프로세스로 모델 전환을 지원하며, 한 번에 하나의 모델을 로드합니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iOS 동등품: LLM Farm, Pocket Paladin 및 iPhone 추론 환경.',
          '[태블릿에서 AI 실행 방법: iPad와 Android(2026)](/ko/power-local-llm/run-ai-on-tablet-ipad-android) — 더 큰 화면에서 기기 내 vs 원격 연결, 태블릿별 권장 사항.',
          '[모바일 LLM 모델: Phi-4 Mini, Gemma, SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 모바일 추론을 위한 모델 선택 가이드: 4–16 GB 스마트폰에 맞는 모델.',
          '[2026 로컬 LLM 소프트웨어 디렉토리](/ko/power-local-llm/local-llm-software-directory-2026) — 데스크톱 앱, 서버 백엔드, 모든 플랫폼 프론트엔드를 포함한 전체 앱 디렉토리.',
          '[Windows, Mac, Linux용 가장 쉬운 로컬 AI 앱](/ko/power-local-llm/easiest-local-ai-app-windows-mac-linux) — 데스크톱 동등품: 사용 편의성으로 앱 비교하는 동일한 철학.',
          '[2026 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 모델 권위 기사: 모든 하드웨어 설정에서 사용할 오픈 웨이트 모델.',
          '[ChatGPT Plus 최고의 오픈소스 대안](/ko/prompt-bites/best-open-source-alternatives-to-chatgpt-plus) — Open WebUI, LibreChat, Jan: ChatGPT Plus와의 기능 비교.',
          '[코딩을 위한 최고의 Qwen 모델](/ko/prompt-bites/best-qwen-model-for-coding) — Termux + Ollama를 통한 Android에서의 Qwen3-Coder: 실현 가능성과 설정.',
          '[Android LLM 앱 빠른 추천](/ko/prompt-bites/best-local-llm-apps-android) — 어떤 앱을 설치할지만 알고 싶다면? 벤치마크 없는 빠른 비교.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026년 Android용 최고의 로컬 LLM 앱: 실제 스마트폰으로 비교한 6가지 앱',
      datePublished: '2026-05-08',
      dateModified: '2026-06-14',
      url: 'https://www.promptquorum.com/ko/power-local-llm/best-local-llm-apps-android-2026',
      inLanguage: 'ko',
      image: 'https://www.promptquorum.com/api/og/best-local-llm-apps-android-2026?lang=ko',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        url: 'https://www.promptquorum.com/about',
        sameAs: [
          'https://www.linkedin.com/in/hanskuepper/',
          'https://x.com/HansKuepperAPPs',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '홈',
          item: 'https://www.promptquorum.com/ko',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/ko/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '2026년 Android용 최고의 로컬 LLM 앱',
          item: 'https://www.promptquorum.com/ko/power-local-llm/best-local-llm-apps-android-2026',
        },
      ],
    },
  },

}
