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
}
