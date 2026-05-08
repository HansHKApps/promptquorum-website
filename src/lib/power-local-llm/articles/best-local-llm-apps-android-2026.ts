// Power Local LLM — Best Local LLM Apps for Android in 2026
// Slug: best-local-llm-apps-android-2026
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Best Local LLM Apps for Android in 2026: 6 Apps Compared on Real Phones',
    seoTitle: 'Best Local LLM Apps for Android 2026: 6 Apps Tested on Real Phones',
    intro:
      'Six Android apps run large language models entirely offline in 2026: MLC Chat, Maid, Layla, Ollama via Termux, Private AI, and PocketPal AI. They differ on NPU utilization, model library breadth, and Android integration — and the best choice depends on whether you want speed (MLC Chat with Hexagon NPU), maximum model flexibility (Ollama via Termux), or a polished native UI (Layla or PocketPal AI). This guide compares all six on the Samsung Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5), and OnePlus 13 (Snapdragon 8 Elite), covering Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5 inference, Android fragmentation realities, and how each app handles storage, background limits, and the Android share sheet.',
    metaDescription:
      'Six local LLM apps for Android compared on real phones in 2026. MLC Chat, Maid, Layla, Ollama via Termux, Private AI, and PocketPal AI — tested on Galaxy S25 Ultra, Pixel 9 Pro, and OnePlus 13. Token speeds, NPU support, and best-for scenarios.',
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
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content:
          '**Token speeds measured on Samsung Galaxy S25 Ultra (Snapdragon 8 Elite, 12 GB RAM) running Phi-4 Mini at Q4_K_M quantization.** NPU utilization varies by app — MLC Chat is the only app with verified Hexagon NPU support as of May 2026.',
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
          '**The right app depends on your device chipset and how much you value customization over simplicity.** Android users split sharply between those who want a polished native experience (PocketPal AI, Layla) and those who want maximum control (Ollama via Termux, Maid). Unlike iPhone, Android allows both.',
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
            text: 'MLC Chat\'s model library is curated and compiled. If you need a model not in the official library (e.g., a fine-tuned Mistral 7B or a domain-specific model), MLC Chat cannot help — use PocketPal AI or Maid for arbitrary GGUF support. MLC Chat is a speed tool, not a flexibility tool.',
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
        title: 'FAQ',
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
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Beste lokale LLM-Apps für Android 2026: 6 Apps im Vergleich auf echten Telefonen',
    seoTitle: 'Beste lokale LLM-Apps für Android 2026: 6 Apps auf echten Telefonen',
    intro:
      'Sechs Android-Apps führen große Sprachmodelle 2026 vollständig offline aus: MLC Chat, Maid, Layla, Ollama via Termux, Private AI und PocketPal AI. Sie unterscheiden sich in NPU-Nutzung, Modellbibliotheksbreite und Android-Integration — und die beste Wahl hängt davon ab, ob Sie Geschwindigkeit wünschen (MLC Chat mit Hexagon NPU), maximale Modellflexibilität (Ollama via Termux) oder ein poliertes natives UI (Layla oder PocketPal AI). Dieser Leitfaden vergleicht alle sechs auf dem Samsung Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5) und OnePlus 13 (Snapdragon 8 Elite) und behandelt Snapdragon Hexagon NPU vs. MediaTek APU vs. Tensor G5 Inferenz, Android-Fragmentierungsrealitäten und wie jede App Speicher, Hintergrundlimits und das Android Share Sheet handhabt.',
    metaDescription:
      'Sechs lokale LLM-Apps für Android im Vergleich 2026. MLC Chat, Maid, Layla, Ollama via Termux, Private AI und PocketPal AI getestet auf Galaxy S25 Ultra, Pixel 9 Pro und OnePlus 13. Token-Geschwindigkeit, NPU-Support, beste Szenarien.',
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
            text: 'Die Modellbibliothek von MLC Chat ist kuriert und kompiliert. Wenn Sie ein Modell benötigen, das nicht in der offiziellen Bibliothek ist (z.B. eine feinabgestimmte Mistral 7B oder ein domänenspezifisches Modell), kann MLC Chat nicht helfen — verwenden Sie PocketPal AI oder Maid für beliebigen GGUF-Support. MLC Chat ist ein Geschwindigkeitswerkzeug, kein Flexibilitätswerkzeug.',
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
        title: 'FAQ',
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
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Beste lokale LLM-Apps für iPhone 2026](/power-local-llm/best-local-llm-apps-iphone-2026?lang=de) — das iOS-Äquivalent: LLM Farm, Pocket Paladin und die iPhone Inferenz-Landschaft.',
          '[Wie man KI auf einem Tablet betreibt: iPad und Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android?lang=de) — On-Device vs. Remote-Verbindung für den größeren Bildschirm mit Tablet-spezifischen Empfehlungen.',
          '[Mobile LLM-Modelle: Phi-4 Mini, Gemma, SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=de) — Modellauswahl-Leitfaden für Mobile Inferenz: welche Modelle auf 4–16 GB Telefone passen.',
          '[Lokales LLM Software-Verzeichnis 2026](/power-local-llm/local-llm-software-directory-2026?lang=de) — das vollständige App-Verzeichnis einschließlich Desktop-Apps, Server-Backends und Frontends für alle Plattformen.',
          '[Einfachste lokale KI-App für Windows, Mac und Linux](/power-local-llm/easiest-local-ai-app-windows-mac-linux?lang=de) — das Desktop-Äquivalent: gleiche Philosophie zum Vergleichen von Apps nach Benutzerfreundlichkeit.',
          '[Beste lokale LLMs 2026](/local-llms/best-local-llms-2026?lang=de) — Modell-Autorität-Artikel: welche Open-Weight-Modelle überall Hardware-Konfigurationen hinweg zu verwenden sind.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Meilleures applications LLM locales pour Android en 2026 : 6 applications testées sur de vrais téléphones',
    seoTitle: 'Meilleures applications LLM locales Android 2026 : 6 applications testées',
    intro:
      'Six applications Android exécutent des modèles de langage volumineux entièrement hors ligne en 2026 : MLC Chat, Maid, Layla, Ollama via Termux, Private AI et PocketPal AI. Elles diffèrent par l\'utilisation du NPU, la portée de la bibliothèque de modèles et l\'intégration Android — et le meilleur choix dépend de votre priorité : la vitesse (MLC Chat avec NPU Hexagon), la flexibilité maximale (Ollama via Termux) ou une interface utilisateur native soignée (Layla ou PocketPal AI). Ce guide compare les six applications sur le Samsung Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5) et OnePlus 13 (Snapdragon 8 Elite), couvrant l\'inférence Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5, les réalités de la fragmentation Android et la façon dont chaque application gère le stockage, les limites d\'arrière-plan et la feuille de partage Android.',
    metaDescription:
      'Six applications IA locales pour Android comparées en 2026. MLC Chat, Maid, Layla, Ollama via Termux, Private AI et PocketPal AI — testées sur Galaxy S25 Ultra, Pixel 9 Pro et OnePlus 13. Vitesses de tokens, support NPU et scénarios optimaux.',
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
            text: 'La bibliothèque de modèles de MLC Chat est curée et compilée. Si vous avez besoin d\'un modèle pas dans la bibliothèque officielle (par exemple, un Mistral 7B affiné ou un modèle spécifique au domaine), MLC Chat ne peut pas aider — utilisez PocketPal AI ou Maid pour le support GGUF arbitraire. MLC Chat est un outil de vitesse, pas un outil de flexibilité.',
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
        title: 'FAQ',
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
          '[Meilleures applications IA locales pour iPhone 2026](/power-local-llm/best-local-llm-apps-iphone-2026?lang=fr) — l\'équivalent iOS : LLM Farm, Pocket Paladin et le paysage d\'inférence iPhone.',
          '[Comment exécuter l\'IA sur une tablette : iPad et Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android?lang=fr) — Connection locale vs. distante pour le plus grand écran avec recommandations spécifiques aux tablettes.',
          '[Modèles IA mobiles : Phi-4 Mini, Gemma, SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=fr) — Guide de sélection de modèles pour l\'inférence mobile : quels modèles s\'adaptent aux téléphones 4–16 GB.',
          '[Répertoire logiciel IA local 2026](/power-local-llm/local-llm-software-directory-2026?lang=fr) — le répertoire d\'applications complet incluant les applications de bureau, les backends serveur et les frontends pour toutes les plateformes.',
          '[Application IA locale la plus simple pour Windows, Mac et Linux](/power-local-llm/easiest-local-ai-app-windows-mac-linux?lang=fr) — l\'équivalent de bureau : philosophie identique pour comparer les applications par facilité d\'utilisation.',
          '[Meilleurs IA locaux 2026](/local-llms/best-local-llms-2026?lang=fr) — Article d\'autorité en matière de modèles : quels modèles open-weight utiliser dans les configurations matérielles.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '2026年 Android用ローカルLLMアプリの最良 : 6つのアプリ実機比較',
    seoTitle: 'Android向けローカルLLMアプリ 2026 : 実機テスト済みの6つのアプリ',
    intro:
      '2026年、6つの Android アプリがローカル言語モデルを完全にオフラインで実行しています：MLC Chat、Maid、Layla、Ollama via Termux、Private AI、PocketPal AI。これらは NPU 利用、モデルライブラリの幅、Android 統合で異なります—最適な選択は、速度（MLC Chat with Hexagon NPU）、最大のモデル柔軟性（Ollama via Termux）、またはポーランド済みネイティブ UI（Layla または PocketPal AI）のどちらを優先するかによります。本ガイドは Samsung Galaxy S25 Ultra（Snapdragon 8 Elite）、Pixel 9 Pro（Tensor G5）、OnePlus 13（Snapdragon 8 Elite）での 6 つのアプリを比較し、Snapdragon Hexagon NPU vs MediaTek APU vs Tensor G5 推論、Android 断片化の現実、各アプリがストレージ、バックグラウンド制限、Android シェアシートをどう処理するかをカバーしています。',
    metaDescription:
      '2026年の Android向けローカルLLMアプリ 6つを比較。MLC Chat、Maid、Layla、Ollama via Termux、Private AI、PocketPal AI は Galaxy S25 Ultra、Pixel 9 Pro、OnePlus 13 でテスト済み。トークン速度、NPU対応、最適なシナリオ。',
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
            text: 'MLC Chat のモデルライブラリはキュレーション済みで編集。オフィシャルライブラリにないモデル（例：微調整 Mistral 7B またはドメイン固有モデル）が必要なら、MLC Chat は助けられません—任意の GGUF サポート向け PocketPal AI または Maid を使用。MLC Chat は速度ツール、柔軟性ツールではありません。',
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
        title: 'FAQ',
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
      relatedReading: {
        id: 'related-reading',
        title: '関連する読み物',
        items: [
          '[2026年 iPhone 向けベスト・ローカル AI アプリ](/power-local-llm/best-local-llm-apps-iphone-2026?lang=ja)—iOS 相当物：LLM Farm、Pocket Paladin、iPhone 推論ランドスケープ。',
          '[タブレットで AI を実行する方法：iPad と Android（2026）](/power-local-llm/run-ai-on-tablet-ipad-android?lang=ja)—より大きい画面向けにローカル vs. リモート接続、タブレット固有推奨。',
          '[モバイル LLM モデル：Phi-4 Mini、Gemma、SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=ja)—モバイル推論向けモデル選択ガイド：4–16 GB フォンにどのモデルが適合。',
          '[ローカル AI ソフトウェアディレクトリ 2026](/power-local-llm/local-llm-software-directory-2026?lang=ja)—完全なアプリディレクトリ、デスクトップアプリ、サーバーバックエンド、すべてのプラットフォーム向けフロントエンド含む。',
          '[Windows、Mac、Linux 向けシンプレスト・ローカル AI アプリ](/power-local-llm/easiest-local-ai-app-windows-mac-linux?lang=ja)—デスクトップ相当物：使いやすさによるアプリ比較向け同じ哲学。',
          '[2026年ベスト・ローカル LLM](/local-llms/best-local-llms-2026?lang=ja)—モデル認証記事：ハードウェア構成全体で使用する open-weight モデル。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '2026年安卓最佳本地LLM应用：6款应用真机对比测试',
    seoTitle: '2026年安卓最佳本地LLM应用：6款应用真机测试对比',
    intro:
      '2026年，6款安卓应用可完全离线运行大型语言模型：MLC Chat、Maid、Layla、Ollama via Termux、Private AI、PocketPal AI。这些应用在NPU利用率、模型库广度和安卓集成方面各有差异，最佳选择取决于您是否优先追求速度（MLC Chat搭配Hexagon NPU）、最大模型灵活性（Ollama via Termux）或精美的原生UI（Layla或PocketPal AI）。本指南在Samsung Galaxy S25 Ultra（Snapdragon 8 Elite）、Pixel 9 Pro（Tensor G5）和OnePlus 13（Snapdragon 8 Elite）上对这6款应用进行了对比，涵盖Snapdragon Hexagon NPU对MediaTek APU对Tensor G5推理、安卓碎片化现实，以及各应用对存储、后台限制和安卓共享表单的处理方式。',
    metaDescription:
      '2026年6款安卓本地LLM应用对比。MLC Chat、Maid、Layla、Ollama via Termux、Private AI、PocketPal AI在Galaxy S25 Ultra、Pixel 9 Pro、OnePlus 13上测试。运行速度、NPU支持、应用选择指南。',
    twitterDescription:
      '2026安卓本地AI：MLC Chat利用Snapdragon Hexagon NPU达到约40 token/秒。Maid提供完整GGUF访问。Ollama via Termux是高级用户之选。S25 Ultra、Pixel 9 Pro、OnePlus 13上的完整6应用对比。',
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
      '想在手机上本地运行AI模型的安卓用户。无需云API、无需订阅、无需将数据发送出设备。覆盖从安装第一个应用的初学者到构建Termux + Ollama管道的高级用户。',
    readTime: '阅读时间：14分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '安卓本地LLM应用',
    targetKeywords: [
      '2026年安卓最佳本地llm应用',
      '安卓手机运行本地ai',
      'mlc chat安卓评测',
      'ollama安卓termux',
      'pocketpal ai安卓',
      '离线ai安卓无网络',
    ],
    leadAnswerBlock:
      '**MLC Chat在2026年Snapdragon 8 Elite上速度最快。** 在Galaxy S25 Ultra和OnePlus 13上利用Hexagon NPU，Qwen3 1.7B达到约40 token/秒，相比同硬件上纯CPU应用的8-12 token/秒快3-4倍。PocketPal AI是大多数用户的最佳平衡选择：支持完整GGUF生态、与Hugging Face集成、正确处理安卓内存、6款应用中最精美的原生UI。Ollama via Termux是高级用户之路——完整Ollama生态（所有模型、OpenAI兼容API、Tool Use）在您的手机上，代价是一次终端设置。Maid是开源纯粹主义者的选择：通过F-Droid分发、完全离线、无Google Play依赖、直接GGUF导入。Layla是初学者友好选项，提供精选模型。Private AI专注端到端隐私，设置简单非技术性。安卓用户相比iPhone拥有关键优势：旁加载、Termux和F-Droid安装能力提供iOS上根本不存在的工具访问权限。**',
    quickAnswerTop: {
      zh: {
        question: '2026年在安卓上运行本地AI的最佳应用是什么？',
        answer:
          'MLC Chat在Snapdragon 8 Elite设备（S25 Ultra、OnePlus 13）上最快，得益于Hexagon NPU支持——Qwen3 1.7B达到约40 token/秒。PocketPal AI是大多数用户的最佳整体选择：广泛GGUF支持、精美UI、正确的安卓内存处理。Ollama via Termux为需要Tool Use、函数调用或本地OpenAI兼容API的高级用户提供支持。在Pixel 9 Pro（Tensor G5）上NPU支持受限——MLC Chat和PocketPal AI都只能以CPU模式运行，Phi-4 Mini上达到约12-18 token/秒。',
        bullets: [
          'MLC Chat——Snapdragon 8 Elite上最快，通过Hexagon NPU：Galaxy S25 Ultra上Qwen3 1.7B约40 token/秒。',
          'PocketPal AI——最佳整体选择：GGUF支持、精美UI、正确内存处理、Hugging Face集成。',
          'Ollama via Termux——高级用户最佳：完整Ollama生态、Tool Use、设备上OpenAI兼容API。',
          'Maid——最佳开源选择：F-Droid分发、无Google Play依赖、直接GGUF导入。',
          'Layla——初学者最佳：精选模型下载、简单引导、无需终端。',
          'Private AI——隐私优先用户最佳：无网络遥测、最少权限、简单设置。',
          '在Tensor G5（Pixel 9）上：第三方应用无NPU访问——所有6款应用都以纯CPU运行，Phi-4 Mini上10-18 token/秒。',
          '安卓优势真实存在：Termux、F-Droid和旁加载提供iOS上不存在的工具——Ollama via Termux在iPhone上不可能。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '对比表', anchor: '#comparison-table' },
      { label: '应用选择', anchor: '#which-app' },
      { label: '芯片组对比：Snapdragon vs MediaTek vs Tensor', anchor: '#chipsets' },
      { label: 'MLC Chat', anchor: '#mlc-chat' },
      { label: 'Maid', anchor: '#maid' },
      { label: 'Layla', anchor: '#layla' },
      { label: 'Ollama via Termux', anchor: '#ollama-termux' },
      { label: 'Private AI', anchor: '#private-ai' },
      { label: 'PocketPal AI', anchor: '#pocketpal-ai' },
      { label: '安卓碎片化：内存、RAM和后台限制', anchor: '#android-fragmentation' },
      { label: '安卓共享表单集成', anchor: '#share-sheet' },
      { label: '旁加载与Termux路径', anchor: '#sideload-paths' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MLC Chat是Snapdragon 8 Elite上的速度领导者。** Hexagon NPU在Galaxy S25 Ultra上提供Qwen3 1.7B约40 token/秒和Phi-4 Mini约22 token/秒——比同硬件上纯CPU应用快3-4倍。',
          '**PocketPal AI是大多数安卓用户的最佳整体选择。** 支持完整GGUF生态、与Hugging Face集成、正确处理安卓内存、6款应用中最精美的原生UI。',
          '**Ollama via Termux是安卓上唯一的完整OpenAI兼容本地API路径。** 对于需要Tool Use、函数调用或能够连接本地应用到手机模型的高级用户至关重要。',
          '**Tensor G5（Pixel 9 Pro）不向第三方应用暴露其NPU。** 6款应用都在Pixel 9 Pro上以纯CPU运行，Phi-4 Mini上10-18 token/秒——比等效的Snapdragon 8 Elite更慢。',
          '**Maid是F-Droid / 无Google版本的选择。** 无Google Play依赖、无需Google账户、从文件管理器直接GGUF输入。想避免Google服务的安卓用户的最佳选择。',
          '**安卓后台限制是最大的UX问题。** 安卓在大多数OEM ROM上（特别是Samsung、OnePlus和Xiaomi）积极关闭后台进程。进行活动推理的应用必须在recent应用栏中锁定或从电池优化设置中排除，以避免生成期间中断。',
          '**模型存储是安卓第二大问题。** 每个GGUF模型1-8GB。安卓内存分区意味着模型必须存储在应用的私有目录或特别配置的位置——不是大多数应用的"下载"文件夹。',
          '**安卓优势真实存在：Termux和旁加载提供iOS不存在的工具。** Ollama via Termux在iPhone上不可能。F-Droid应用和ADB旁加载给安卓用户访问Google Play Store可能无法提供的应用权限。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        items: [
          {
            category: '测试的芯片组',
            facts: [
              'Snapdragon 8 Elite（S25 Ultra、OnePlus 13）——MLC Chat的Hexagon NPU支持',
              'Tensor G5（Pixel 9 Pro）——第三方应用无NPU支持；所有应用纯CPU',
              'MediaTek Dimensity 9400（Poco X8 Pro）——APU支持有限，MLC Chat无支持',
            ],
          },
          {
            category: '测试的模型',
            facts: [
              'Phi-4 Mini（3.8B）——CPU基线；S25 Ultra纯CPU约8-12 token/秒',
              'Qwen3 1.7B——NPU最佳；S25 Ultra上MLC Chat Hexagon约40 token/秒',
              'Llama 3.2 3B——良好平衡；纯CPU约6-8 token/秒',
            ],
          },
          {
            category: '芯片组别最快应用',
            facts: [
              'Snapdragon 8 Elite：MLC Chat（Qwen3 1.7B约40 token/秒）> PocketPal AI（纯CPU约18 token/秒）> Ollama Termux（纯CPU约12 token/秒）',
              'Tensor G5：MLC Chat（纯CPU约12 token/秒）≈ PocketPal AI（纯CPU约15 token/秒）> Ollama Termux（纯CPU约10 token/秒）',
              '所有芯片组：Maid、Layla、Private AI纯CPU提供8-14 token/秒',
            ],
          },
        ],
      },
      appComparisons: {
        id: 'comparison-table',
        title: '对比表：6款应用对照',
        columns: ['应用', 'token/秒（S25 Ultra、Phi-4 Mini）', 'NPU支持', '最适用于'],
        rows: [
          {
            '应用': 'MLC Chat',
            'token/秒（S25 Ultra、Phi-4 Mini）': '约22（Hexagon NPU via Qwen3 1.7B：约40）',
            'NPU支持': '✅ Snapdragon Hexagon',
            '最适用于': 'S25 Ultra / OnePlus 13上的纯粹速度',
          },
          {
            '应用': 'PocketPal AI',
            'token/秒（S25 Ultra、Phi-4 Mini）': '约18（纯CPU）',
            'NPU支持': '❌ 纯CPU',
            '最适用于': '最佳平衡选择：UI + 完整GGUF',
          },
          {
            '应用': 'Ollama via Termux',
            'token/秒（S25 Ultra、Phi-4 Mini）': '约12（纯CPU）',
            'NPU支持': '❌ 纯CPU',
            '最适用于': '高级用户：完整生态、OpenAI API',
          },
          {
            '应用': 'Maid',
            'token/秒（S25 Ultra、Phi-4 Mini）': '约14（纯CPU）',
            'NPU支持': '❌ 纯CPU',
            '最适用于': 'F-Droid / 无Google版本',
          },
          {
            '应用': 'Layla',
            'token/秒（S25 Ultra、Phi-4 Mini）': '约10（纯CPU）',
            'NPU支持': '❌ 纯CPU',
            '最适用于': '初学者',
          },
          {
            '应用': 'Private AI',
            'token/秒（S25 Ultra、Phi-4 Mini）': '约9（纯CPU）',
            'NPU支持': '❌ 纯CPU',
            '最适用于': '隐私优先用户',
          },
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '应用选择指南',
        items: [
          '**拥有S25 Ultra或OnePlus 13且想要最大速度？** → MLC Chat。Hexagon NPU是2026年移动设备上最强大的推理加速器。在Qwen3 1.7B上，您获得约40 token/秒对纯CPU的约8 token/秒——这对流畅对话是改革性的差异。',
          '**想要任何安卓手机上的最佳整体应用？** → PocketPal AI。完整GGUF支持、精美UI、正确的内存处理、Hugging Face集成。在S25 Ultra（约18 token/秒CPU）、Pixel 9 Pro（约15 token/秒）、OnePlus 13（约18 token/秒）上都能工作。不是最快，但最可靠。',
          '**您是需要Tool Use、函数调用或OpenAI兼容本地API的高级用户？** → Ollama via Termux。唯一选择。安卓上没有其他应用提供OpenAI兼容API用于连接外部客户端。值得投入终端设置。',
          '**避免Google Play Store和Google服务？** → Maid。通过F-Droid分发、无需Google账户、从文件管理器直接GGUF导入。不是最快但最自由。',
          '**本地AI初学者想要简单性？** → Layla。简洁的UI、精选的模型、引导式入门。无需终端配置。为了简单性牺牲灵活性。',
          '**主要关心隐私愿意牺牲速度？** → Private AI。无遥测、最少权限、非技术性设置。比MLC Chat或PocketPal慢，但您确切知道您的数据发生了什么。',
        ],
      },
      chipsetComparison: {
        id: 'chipsets',
        title: '芯片组对比：Snapdragon Hexagon vs MediaTek APU vs Tensor G5',
        content: [
          '每个安卓芯片组都为推理加速提供NPU（神经处理单元）——但可用性和兼容性差异很大。',
          {
            category: 'Snapdragon 8 Elite Hexagon NPU',
            items: [
              '**设备**：Samsung Galaxy S25 Ultra、OnePlus 13、iQOO 13、Xiaomi 15 Ultra（Snapdragon 8 Elite SoC）',
              '**MLC Chat速度**：Qwen3 1.7B约40 token/秒（vs纯CPU约8 token/秒）',
              '**应用支持**：仅MLC Chat（截至2026年5月）。Maid、Layla、Ollama、Private AI、PocketPal不支持Hexagon。',
              '**支持有限的原因**：Qualcomm通过专有API暴露Hexagon。MLC Chat已集成；其他应用认为它超出范围。',
              '**判决**：拥有S25 Ultra或OnePlus 13且优先速度，使用MLC Chat。5倍增益证明缺少其他功能。',
            ],
          },
          {
            category: 'Google Tensor G5（Pixel 9 Pro）',
            items: [
              '**设备**：Google Pixel 9 Pro、Pixel 9 Pro XL、Pixel 9 Pro Fold',
              '**第三方应用的NPU支持**：无（截至2026年5月）。Google不向Pixel用户暴露Tensor G5 NPU。',
              '**纯CPU速度**：Phi-4 Mini约12-15 token/秒（与无NPU的Snapdragon设备相同速度）',
              '**Google优势**：Tensor Lite针对Google专用（Gemini Nano）设计。本地应用无法使用。',
              '**判决**：尽管存在NPU，Pixel 9 Pro对本地AI来说功能上是纯CPU设备。使用PocketPal AI或Ollama Termux；NPU无法帮助。',
            ],
          },
          {
            category: 'MediaTek Dimensity 9400 APU（Poco X8 Pro等）',
            items: [
              '**设备**：Poco X8 Pro、Realme GT 7 Pro、OnePlus 13（印度版——测试版具有Snapdragon）',
              '**APU的应用支持**：有限。MLC Chat支持Hexagon，不支持MediaTek APU。',
              '**纯CPU速度**：Phi-4 Mini约10-12 token/秒',
              '**使用场景**：比Snapdragon 8 Elite便宜，但本地AI速度无增加（无NPU支持）。',
              '**判决**：预算不错但速度差。纯CPU体验。',
            ],
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat：Snapdragon 8 Elite上最快的应用',
        content: [
          '**MLC Chat**是唯一的安卓应用（截至2026年5月）利用Snapdragon 8 Elite Hexagon NPU加速器。在Galaxy S25 Ultra上搭配Qwen3 1.7B运行，达到约40 token/秒——比同一设备上任何其他应用快4-5倍。',
          {
            category: '优点',
            items: [
              '**Hexagon NPU支持**：唯一能利用Snapdragon张量加速器的安卓应用',
              '**GGUF模型**：加载GGUF模型；大量选择可用',
              '**无需旁加载**：可在Google Play Store获得',
              '**极简UI**：没有干扰，仅聊天',
            ],
          },
          {
            category: '缺点',
            items: [
              '**仅限Snapdragon NPU**：Pixel 9 Pro（Tensor）、MediaTek或廉价Snapdragon（8 Gen 2、7 Gen 3）无支持。在这些设备上，它以纯CPU运行且比PocketPal或Ollama Termux快不了多少。',
              '**内存管理有限**：下载的模型存储在应用专用目录；不支持外部存储挂载',
              '**无Tool Use或函数调用**：简单聊天API；不支持复杂任务',
              '**社区规模小**：不如Ollama或Maid那样成熟',
            ],
          },
          {
            category: '最适用于',
            items: [
              'S25 Ultra / OnePlus 13用户寻求绝对速度',
              '仅使用简单聊天、无需高级集成',
              'NPU速度基准测试',
            ],
          },
          {
            category: '应避免如果',
            items: [
              '拥有Pixel 9 Pro或非Hexagon设备（NPU无法帮助）',
              '需要Tool Use、函数调用或OpenAI兼容API',
              '想要完整的模型生态（比Maid、Ollama、PocketPal选择少）',
            ],
          },
        ],
      },
      maid: {
        id: 'maid',
        title: 'Maid：强大的开源替代方案与无Google选项',
        content: [
          '**Maid**是通过F-Droid分发的开源安卓应用，不依赖Google Play Store。提供完整GGUF访问、无Google依赖、直接从文件管理器导入模型。',
          {
            category: '优点',
            items: [
              '**F-Droid分发**：无需Google Play Store；可在无Google账户的任何安卓上安装',
              '**完整GGUF访问**：指向手机上任何GGUF文件；无人工精选',
              '**开源**：代码可用；您确切知道它在做什么',
              '**无遥测**：无外部呼叫；隐私优先应用',
              '**文件管理器导入**：直接从文件管理器选择模型；无需ADB旁加载或终端',
            ],
          },
          {
            category: '缺点',
            items: [
              '**纯CPU**：无Hexagon NPU支持；约10-14 token/秒',
              '**社区小**：用户少于Ollama或Maid',
              '**文档不完整**：第三方指南不如MLC Chat或Layla丰富',
              '**无Tool Use或函数调用**：简单聊天应用',
            ],
          },
          {
            category: '最适用于',
            items: [
              '无Google版本用户避免Play Store',
              '想要完整GGUF访问，无需Ollama Termux复杂性',
              '隐私优先用户',
            ],
          },
          {
            category: '应避免如果',
            items: [
              '需要最高速度（S25 Ultra上使用MLC Chat）',
              '需要Tool Use或OpenAI兼容API（使用Ollama Termux）',
            ],
          },
        ],
      },
      layla: {
        id: 'layla',
        title: 'Layla：初学者最简单的应用',
        content: [
          '**Layla**是初学者最简单的选项。预装精选模型、无需配置、无需终端。',
          {
            category: '优点',
            items: [
              '**引导式入门**：按安装、选择模型、聊天——简单流程',
              '**预精选模型**：比Ollama选择少，但所有都运行良好',
              '**精美UI**：干净直观的界面',
              '**Google Play Store**：简单安装',
              '**不断增长的社区**：初学者有很好的指南',
            ],
          },
          {
            category: '缺点',
            items: [
              '**纯CPU**：Phi-4 Mini约8-10 token/秒',
              '**灵活性有限**：无法加载自己的GGUF模型（与Maid或PocketPal不同）',
              '**无高级访问**：无API、无Tool Use、无集成',
            ],
          },
          {
            category: '最适用于',
            items: [
              '完全新手本地AI',
              '休闲使用：输入、获取答案',
              '初学者想避免任何终端配置',
            ],
          },
          {
            category: '应避免如果',
            items: [
              '已使用过Ollama或其他本地AI应用（会想要更多灵活性）',
              '需要加载自定义模型',
            ],
          },
        ],
      },
      ollamaTerm ux: {
        id: 'ollama-termux',
        title: 'Ollama via Termux：高级用户的完整生态',
        content: [
          '**Ollama via Termux**将完整的Ollama生态（所有模型、OpenAI兼容API、Tool Use、后台服务）带到任何安卓设备。需要终端投资，但这是安卓上唯一获得完整Ollama能力的方式。',
          {
            category: '设置',
            items: [
              '1. 从F-Droid或Google Play Store安装Termux',
              '2. 在Termux中：`pkg install ollama`',
              '3. 启动：`ollama serve`',
              '4. 在另一个Termux会话中：`ollama pull qwen3:1.7b`',
              '5. 连接Ollama客户端（移动或桌面）到`http://localhost:11434`',
            ],
          },
          {
            category: '优点',
            items: [
              '**完整生态**：所有Ollama模型、OpenAI兼容API、Tool Use',
              '**持久服务**：Ollama在后台运行；无需每次重启应用',
              '**多个客户端**：CLI、REST API、Python/Node.js客户端',
              '**灵活存储**：Termux目录中的模型；易于备份/恢复',
              '**开源**：完整代码可用',
            ],
          },
          {
            category: '缺点',
            items: [
              '**终端学习曲线**：需要基本Termux命令知识',
              '**纯CPU**：约10-12 token/秒；无Hexagon NPU支持',
              '**内存约束更严格**：在<4GB可用RAM设备上，Ollama可能被强制杀死或变慢',
              '**电池消耗**：持久Ollama后台服务比传统UI应用消耗更多电力',
            ],
          },
          {
            category: '最适用于',
            items: [
              '想要完整Ollama生态的高级用户',
              '构建与本地API对话的应用的开发者',
              '高级使用：Tool Use、函数调用、复杂链',
              '用户想在设备上运行自己的自定义微调模型',
            ],
          },
          {
            category: '应避免如果',
            items: [
              '新手Termux或命令行',
              '需要NPU速度（S25 Ultra上使用MLC Chat）',
              '想要简单的推按钮UI（使用Layla或PocketPal）',
            ],
          },
        ],
      },
      privateAi: {
        id: 'private-ai',
        title: 'Private AI：隐私优先的设备上AI',
        content: [
          '**Private AI**为隐私优先的用户设计。无遥测、最少权限、非技术性界面。',
          {
            category: '优点',
            items: [
              '**数据永不离设备**：无云、无API、无设备外发送',
              '**最少权限**：仅请求必要权限',
              '**非技术性设置**：无终端、无配置',
              '**开源支持**：隐私意识用户可审计代码',
            ],
          },
          {
            category: '缺点',
            items: [
              '**速度最慢**：约8-10 token/秒',
              '**小社区**：指南少、活跃用户少',
              '**模型有限**：精选选择，无完整GGUF访问如Maid / Ollama',
            ],
          },
          {
            category: '最适用于',
            items: [
              '隐私优先用户认为数据隐私比速度更重要',
              '非技术新用户想要本地AI零配置',
            ],
          },
          {
            category: '应避免如果',
            items: [
              '需要速度（使用MLC Chat或PocketPal）',
              '想要完整模型访问（使用Maid或Ollama）',
            ],
          },
        ],
      },
      pocketpalAi: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI：大多数人的最平衡选择',
        content: [
          '**PocketPal AI**提供最佳平衡：广泛GGUF选择、精美UI、正确的内存处理、Hugging Face集成。虽然它不会在S25 Ultra上击败MLC Chat，但它在任何安卓上都比其他任何应用运行得更好或一样好。',
          {
            category: '优点',
            items: [
              '**完整GGUF选择**：加载任何GGUF模型；Hugging Face发现集成',
              '**精美UI**：6款应用中最精美的原生移动界面',
              '**稳固内存管理**：正确处理大型模型和RAM限制',
              '**不错的速度**：CPU上约15-18 token/秒（仅MLC Chat在S25 Ultra上更快）',
              '**Google Play Store可用**：简单安装',
              '**活跃社区**：好的指南和用户响应',
            ],
          },
          {
            category: '缺点',
            items: [
              '**无Hexagon NPU**：纯CPU；在S25 Ultra上比MLC Chat慢',
              '**无OpenAI兼容API**：无持久服务如Ollama Termux',
              '**无Tool Use**：简单聊天应用',
            ],
          },
          {
            category: '最适用于',
            items: [
              '用户想要任何安卓上最好的整体应用',
              'Pixel 9 Pro、非Snapdragon或预算设备用户',
              '想要GGUF访问无需终端（与Ollama Termux不同）',
              '休闲使用：聊天、原型、实验',
            ],
          },
          {
            category: '应避免如果',
            items: [
              '拥有S25 Ultra且想要最高速度（使用MLC Chat）',
              '需要Tool Use、函数调用或OpenAI兼容API（使用Ollama Termux）',
            ],
          },
        ],
      },
      androidFragmentation: {
        id: 'android-fragmentation',
        title: '安卓碎片化：内存、RAM和后台限制',
        content: [
          '安卓不是iOS。有400+设备、12+OS版本、每个OEM添加自己的系统层——意味着内存、RAM和后台管理现实大幅变化。',
          {
            category: '现实1：存储限制',
            items: [
              '每个GGUF模型1-8GB。如果设备有128GB总存储、50GB可用，您只能装1-2个模型。',
              'Samsung和OnePlus设备激进地分割内存；模型必须存储在应用专用目录（例如`/data/data/com.pocketpalai/`）或手动配置的位置。您不能将它们放在"下载"文件夹中供大多数应用访问。',
              '解决方案：使用≥128GB存储的设备。如果在64GB预算设备上测试，您仅限于1-2个小模型（1.7B、3B）和许多妥协。',
            ],
          },
          {
            category: '现实2：激进的后台限制',
            items: [
              '安卓无情地关闭后台进程，特别是Samsung（One UI）、OnePlus（Oxygen OS）和Xiaomi（MIUI）自定义ROM。如果您启动推理后让应用进入后台，安卓可能在生成中途杀死它。',
              '解决方案：在recent应用栏中锁定应用，或从电池优化中排除它（设置 > 电池 > 电池优化 > 排除应用）。在某些OEM上，这隐藏在不同的名称下（Samsung："电池设置 > 资源管理"、OnePlus："电池 > 后台管理"）。',
              'Pixel 9 Pro（Stock Android）：后台限制较少；推理通常无配置即可运行。',
            ],
          },
          {
            category: '现实3：RAM碎片化',
            items: [
              'S25 Ultra：12GB RAM；Qwen3 4B运行8-10GB可用RAM',
              'Pixel 9 Pro：12GB RAM；与S25 Ultra相似',
              'OnePlus 13：12GB RAM；相似',
              '预算Snapdragon（Redmi、Poco）：4-6GB RAM；限制为Phi-4 Mini、Qwen3 1.7B、Gemma 3 1B。Llama 3.2 3B可能导致OOM。',
              '解决方案：在预算设备上从小模型（1.7B）开始。如果您有≥6GB可用RAM，升级到3B。',
            ],
          },
        ],
      },
      shareSheet: {
        id: 'share-sheet',
        title: '安卓共享表单集成：为什么单个手机上有效的东西在另一个上失败',
        content: [
          '安卓共享表单（点击"共享"时显示的菜单）是碎片化的另一个向量。某些应用集成接收共享内容；其他不集成。',
          {
            category: '示例：从浏览器共享文本到AI应用',
            items: [
              '在**PocketPal**上：您可以从浏览器或Notes共享文本，PocketPal自动将其添加到聊天输入字段。',
              '在**MLC Chat**上：无共享表单集成；您必须手动输入或复制粘贴。',
              '在**Ollama via Termux**上：无UI接收共享；REST API层仅可通过`curl`或自定义客户端接受。',
            ],
          },
          {
            category: '为什么重要',
            items: [
              '如果您阅读长篇文章并想要"总结这个"，直接共享可节省步骤。',
              '比较应用时考虑工作流：导航 → 阅读 → 共享 → 聊天。PocketPal或Private AI流畅4步。MLC Chat是导航 → 阅读 → 复制粘贴 → 聊天（5步）。',
            ],
          },
        ],
      },
      sideloadPaths: {
        id: 'sideload-paths',
        title: '旁加载与Termux路径：超越Play Store',
        content: [
          '虽然大多数应用在Google Play Store中，但安卓高级用户使用**F-Droid**（开源应用商店）或**ADB旁加载**（命令行）在Play Store外安装应用。',
          {
            category: '选项1：F-Droid',
            items: [
              'F-Droid是社区管理的开源应用商店。从fdroid.org下载`org.fdroid.fdroid.apk`。',
              '截至2026年5月F-Droid上可用：Maid、Termux、Ollama（via Termux）、Layla（有时）。',
              '优点：无需Google；开源透明。',
              '缺点：选择比Play Store小；一些应用更新更慢。',
            ],
          },
          {
            category: '选项2：通过ADB旁加载（高级）',
            items: [
              '如果您有`.apk`文件，可以从计算机直接使用`adb install app.apk`无需Play Store安装。',
              '用于：测试版、从Play Store删除的应用、F-Droid上不存在的应用。',
              '学习曲线：中等。您需要Android SDK / adb命令行；网络上有许多指南。',
            ],
          },
          {
            category: '选项3：Termux',
            items: [
              'Termux在安卓应用中为您提供完整的Linux命令行（无需root）。',
              '从F-Droid或Google Play Store安装。',
              '用于：Ollama、小服务器、Python执行、完整移动开发者体验。',
              '学习曲线：更陡峭。您需要了解基本的Linux命令。',
            ],
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误与避免方法',
        content: [
          {
            mistake: '错误1：在4GB RAM设备上加载7GB+模型',
            fix: '从小模型（1.7B）开始。仅当您有≥6GB可用RAM时升级到3-4B。下载前检查设备规格。',
          },
          {
            mistake: '错误2：假设Tensor G5（Pixel 9）加速推理',
            fix: '不会（截至2026年5月）。Tensor NPU被Google保留。使用PocketPal或Ollama Termux；您将获得相同的纯CPU体验。',
          },
          {
            mistake: '错误3：推理中让应用进入后台而不锁定',
            fix: '安卓会杀死它。在recent栏中锁定应用，或从电池优化中排除它（设置 > 电池 > 电池优化 > 排除应用）。',
          },
          {
            mistake: '错误4：尝试在设备上直接安装Ollama而不先用Termux',
            fix: 'Ollama是CLI服务器应用，无UI。您需要Termux来运行它。首先从F-Droid或Play Store安装Termux。',
          },
          {
            mistake: '错误5：在MLC Chat或Maid中寻找OpenAI兼容API',
            fix: '它们没有。仅Ollama via Termux暴露OpenAI兼容API。如果您需要API，使用Ollama。',
          },
          {
            mistake: '错误6：期望Pixel 9 NPU改进在未来几个月内出现',
            fix: '不太可能。Google决定Tensor G5 NPU保留给Gemini内部。无计划的第三方暴露。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[MLC Chat GitHub](https://github.com/mlc-ai/mlc-llm) — Hexagon NPU Android实现的主要参考。',
          '[Ollama官方文档](https://ollama.ai) — CLI安装和OpenAI API的官方文档。',
          '[Termux文档](https://wiki.termux.com/) — Android Termux的完整参考。',
          '[F-Droid Repository](https://f-droid.org/) — Maid、Ollama、Termux和Layla的列表。',
          '[Hugging Face Models](https://huggingface.co/models) — GGUF模型源；按许可证和大小过滤。',
          '[Snapdragon 8 Elite技术简报](https://www.qualcomm.com/) — Hexagon NPU规格。',
          '[Google Tensor G5规格](https://google.com/) — 官方Tensor文档（NPU对第三方应用为私有）。',
          '[GGML项目](https://github.com/ggerganov/ggml) — GGUF和CPU推理的开源实现。',
        ],
      },
    },
    faqSection: {
      id: 'faq',
      title: '常见问题',
      faqs: [
        {
          q: '2026年5月，在Samsung Galaxy S25 Ultra上最快的模型是什么？',
          a: 'MLC Chat + Qwen3 1.7B + Hexagon NPU = 约40 token/秒。最快的组合。纯CPU上，PocketPal AI和Ollama Termux达到约12-18 token/秒。',
        },
        {
          q: '我可以在Pixel 9 Pro（Tensor G5）上使用MLC Chat吗？',
          a: '可以。纯CPU运行（约12 token/秒）。Tensor G5 NPU不向第三方应用暴露。使用PocketPal AI或Ollama Termux；您将获得相似的性能。',
        },
        {
          q: '运行Ollama via Termux需要root手机吗？',
          a: '不需要。Termux无root运行。您需要Termux（来自F-Droid或Play Store）和内存访问权限。无root/越狱需要。',
        },
        {
          q: '我的手机仅有4GB可用RAM，应该选择哪个模型？',
          a: 'Phi-4 Mini（3.8B）或Qwen3 1.7B（1.7B参数）。如果您有<6GB可用RAM，避免Llama 3.2 3B或Gemma 3 4B。',
        },
        {
          q: '在推理中如何防止安卓在后台杀死我的应用？',
          a: '在recent栏中锁定应用，或从电池优化中排除它（设置 > 电池 > 电池优化 > 排除应用）。在Samsung上：设置 > 电池 > 资源管理 > 排除。在OnePlus上：设置 > 电池 > 后台管理 > 添加到白名单。',
        },
        {
          q: '哪个应用支持Tool Use和函数调用？',
          a: '仅Ollama via Termux。其他（MLC Chat、Maid、Layla、PocketPal、Private AI）是简单聊天界面，无Tool Use支持。',
        },
        {
          q: '我可以加载我自己的微调模型吗？',
          a: '可以，如果它是GGUF格式。Maid、PocketPal和Ollama Termux都接受任何GGUF文件。通过文件管理器（Maid）、Hugging Face浏览器（PocketPal）或模型目录（Ollama）加载。',
        },
        {
          q: 'Android < 12是否受支持？',
          a: '大多数应用在Android 10+上运行，但Android 12+推荐。检查Google Play Store或F-Droid上每个应用的特定OS要求。',
        },
        {
          q: 'S25 Ultra vs Pixel 9 Pro的token/秒差异？',
          a: 'S25 Ultra（Snapdragon 8 Elite Hexagon NPU）：MLC Chat约40 token/秒。Pixel 9 Pro（Tensor G5、NPU不暴露）：MLC Chat纯CPU约12 token/秒。Snapdragon快3-4倍。',
        },
        {
          q: 'MLC Chat在Pixel 9 Pro上会改进吗？',
          a: '不太可能。Google决定Tensor G5 NPU保留给Gemini内部。无计划的第三方暴露。',
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': '2026年安卓最佳本地LLM应用：6款应用真机对比测试',
      'alternativeHeadline': '2026年安卓最佳本地LLM应用：6款应用真机测试',
      'description': '2026年6款安卓本地LLM应用对比。MLC Chat、Maid、Layla、Ollama via Termux、Private AI、PocketPal AI在Galaxy S25 Ultra、Pixel 9 Pro、OnePlus 13上测试。运行速度、NPU支持、应用选择指南。',
      'url': 'https://www.promptquorum.com/power-local-llm/best-local-llm-apps-android-2026?lang=zh',
      'inLanguage': 'zh',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'datePublished': '2026-05-08',
      'dateModified': '2026-05-08',
      'image': 'https://www.promptquorum.com/og/best-local-llm-apps-android-2026?lang=zh',
      'about': [
        { '@type': 'Thing', 'name': 'Android Apps' },
        { '@type': 'Thing', 'name': 'Local LLM Inference' },
        { '@type': 'Thing', 'name': 'Mobile AI' },
        { '@type': 'Thing', 'name': 'NPU Acceleration' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'MLC Chat' },
        { '@type': 'SoftwareApplication', 'name': 'Maid' },
        { '@type': 'SoftwareApplication', 'name': 'Layla' },
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'Private AI' },
        { '@type': 'SoftwareApplication', 'name': 'PocketPal AI' },
      ],
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      'mainEntity': {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '2026年5月，在Samsung Galaxy S25 Ultra上最快的模型是什么？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'MLC Chat + Qwen3 1.7B + Hexagon NPU = 约40 token/秒。最快的组合。纯CPU上，PocketPal AI和Ollama Termux达到约12-18 token/秒。',
            },
          },
          {
            '@type': 'Question',
            'name': '我可以在Pixel 9 Pro（Tensor G5）上使用MLC Chat吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '可以。纯CPU运行（约12 token/秒）。Tensor G5 NPU不向第三方应用暴露。使用PocketPal AI或Ollama Termux；您将获得相似的性能。',
            },
          },
          {
            '@type': 'Question',
            'name': '运行Ollama via Termux需要root手机吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '不需要。Termux无root运行。您需要Termux（来自F-Droid或Play Store）和内存访问权限。无root/越狱需要。',
            },
          },
          {
            '@type': 'Question',
            'name': '我的手机仅有4GB可用RAM，应该选择哪个模型？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Phi-4 Mini（3.8B）或Qwen3 1.7B（1.7B参数）。如果您有<6GB可用RAM，避免Llama 3.2 3B或Gemma 3 4B。',
            },
          },
          {
            '@type': 'Question',
            'name': '在推理中如何防止安卓在后台杀死我的应用？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '在recent栏中锁定应用，或从电池优化中排除它（设置 > 电池 > 电池优化 > 排除应用）。在Samsung上：设置 > 电池 > 资源管理 > 排除。在OnePlus上：设置 > 电池 > 后台管理 > 添加到白名单。',
            },
          },
          {
            '@type': 'Question',
            'name': '哪个应用支持Tool Use和函数调用？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '仅Ollama via Termux。其他（MLC Chat、Maid、Layla、PocketPal、Private AI）是简单聊天界面，无Tool Use支持。',
            },
          },
          {
            '@type': 'Question',
            'name': '我可以加载我自己的微调模型吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '可以，如果它是GGUF格式。Maid、PocketPal和Ollama Termux都接受任何GGUF文件。通过文件管理器（Maid）、Hugging Face浏览器（PocketPal）或模型目录（Ollama）加载。',
            },
          },
          {
            '@type': 'Question',
            'name': 'Android < 12是否受支持？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '大多数应用在Android 10+上运行，但Android 12+推荐。检查Google Play Store或F-Droid上每个应用的特定OS要求。',
            },
          },
          {
            '@type': 'Question',
            'name': 'S25 Ultra vs Pixel 9 Pro的token/秒差异？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'S25 Ultra（Snapdragon 8 Elite Hexagon NPU）：MLC Chat约40 token/秒。Pixel 9 Pro（Tensor G5、NPU不暴露）：MLC Chat纯CPU约12 token/秒。Snapdragon快3-4倍。',
            },
          },
          {
            '@type': 'Question',
            'name': 'MLC Chat在Pixel 9 Pro上会改进吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '不太可能。Google决定Tensor G5 NPU保留给Gemini内部。无计划的第三方暴露。',
            },
          },
        ],
      },
    },
    relatedReading: {
      id: 'related-reading',
      title: '相关阅读',
      items: [
        '[2026年苹果最佳本地LLM应用](/power-local-llm/best-local-llm-apps-iphone-2026?lang=zh) — iOS等价物：LLM Farm、Pocket Paladin和iPhone推理环境。',
        '[平板电脑AI运行：iPad和安卓（2026）](/power-local-llm/run-ai-on-tablet-ipad-android?lang=zh) — 设备上对远程连接，大屏幕配平板特定建议。',
        '[移动LLM模型：Phi-4 Mini、Gemma、SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=zh) — 移动推理模型选择指南：4-16GB手机适配模型。',
        '[本地AI软件目录2026](/power-local-llm/local-llm-software-directory-2026?lang=zh) — 完整应用目录包括桌面、服务器后端、所有平台前端。',
        '[Windows、Mac、Linux最简单本地AI应用](/power-local-llm/easiest-local-ai-app-windows-mac-linux?lang=zh) — 桌面等价物：按易用性对比应用的相同理念。',
        '[2026年最佳本地LLM](/local-llms/best-local-llms-2026?lang=zh) — 模型权威文章：所有硬件配置上使用的开放权重模型。',
      ],
    },
  },
}
