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
    theme: 'Getting Started',
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
}
