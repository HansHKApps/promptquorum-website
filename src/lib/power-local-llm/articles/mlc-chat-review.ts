// MLC Chat Review: The Consumer App Built on the MLC LLM Compiler
// Slug: mlc-chat-review
// Companion to: mlc-llm-explained.ts (deep dive on the underlying MLC LLM/TVM compiler framework —
// this article focuses on the MLC Chat *app* specifically, cross-linked both ways),
// llava-review.ts / idefics-review.ts (MLC Chat is primarily text-only, no official vision support as of this review)
// FINAL entry in the 11-article local-AI-tools review series (Whisper.cpp, faster-whisper, Piper TTS,
// Coqui TTS, XTTS v2, Bark, StyleTTS 2, LLaVA, Ollama vision models, Idefics, MLC Chat).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/mlc-chat-review-hero-en.webp',
    title: 'MLC Chat Review (2026): The Mobile App Built on MLC LLM, Assessed Honestly',
    seoTitle: 'MLC Chat Review 2026: iOS, Android & Cross-Platform Setup',
    intro:
      'MLC Chat is the consumer-facing chat app built on top of the [MLC LLM](https://github.com/mlc-ai/mlc-llm) compiler and runtime — the project PromptQuorum covers in depth in [MLC LLM Explained](/power-local-llm/mlc-llm-explained). This review focuses specifically on the app experience: real download channels, actual setup steps, which models it ships with, and honest limitations, rather than re-explaining the underlying compilation technology. If you want the deeper technical picture of how MLC LLM compiles models for GPU-accelerated inference across platforms, read [MLC LLM Explained](/power-local-llm/mlc-llm-explained) first; this article assumes that context and stays focused on the app itself.',
    metaDescription:
      'MLC Chat review 2026: the mobile/desktop chat app built on MLC LLM. Real iOS App Store and Android APK download channels, actual setup steps, Apache-2.0 license, and honest limitations for on-device AI chat.',
    twitterDescription:
      'MLC Chat review 2026: the consumer chat app built on the MLC LLM compiler. Real download channels (iOS App Store, Android APK), actual setup steps, and an honest look at where it is — and is not — a good fit. Final entry in PromptQuorum\'s local AI tools review series.',
    audience:
      'Users and developers deciding whether to use MLC Chat for on-device AI chat on phones or desktop, who want a clear picture of the app experience separate from the underlying MLC LLM compiler technology.',
    readTime: '10 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'MLC Chat',
    targetKeywords: [
      'mlc chat review',
      'mlc chat app',
      'mlc chat ios',
      'mlc chat android',
      'mlc chat setup',
      'mlc llm app',
      'on-device llm app',
      'mlc chat vs ollama',
    ],
    current_models_mentioned: ['Llama 3', 'MLC LLM', 'Ollama', 'LM Studio', 'PocketPal AI'],
    current_hardware_mentioned: ['iOS', 'Android', 'NVIDIA GPU', 'AMD GPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**MLC Chat is a free, cross-platform chat app for running large language models directly on your own device**, built by the MLC AI team on top of their [MLC LLM](https://github.com/mlc-ai/mlc-llm) compiler and runtime, released under the Apache-2.0 license. It is available on the [iOS App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) and as a directly downloadable [Android APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) from MLC\'s own GitHub releases; desktop use is available through MLC LLM\'s Python, REST, and CLI interfaces rather than a separate packaged desktop app. Its distinguishing feature is GPU-accelerated on-device inference achieved through machine-learning compilation — compiling a model ahead of time for a specific hardware target (Metal on Apple GPUs, OpenCL on Android GPUs, Vulkan/CUDA/ROCm on desktop) — rather than relying on a single generic runtime. As of this review, MLC Chat does not officially support vision-language (image-input) models. For the deeper technical explanation of how the underlying compiler works, see PromptQuorum\'s [MLC LLM Explained](/power-local-llm/mlc-llm-explained).',
    quickAnswerTop: {
      en: {
        question: 'What is MLC Chat and how do I actually download and set it up?',
        answer:
          'MLC Chat is a free chat app that runs large language models locally on your device, built on the MLC LLM compiler and runtime from the MLC AI team, and licensed under Apache-2.0. On iOS, download it directly from the [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937). On Android, MLC does not currently list it on Google Play; download the APK directly from [MLC\'s own GitHub releases](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — this requires enabling installs from unknown sources, and the Android build depends on OpenCL GPU support, which is confirmed working on some devices (such as Samsung Galaxy models) but not reliably on others (such as Google Pixel phones). There is no separate packaged desktop app; on desktop, MLC LLM is used through its Python package, REST server, or command-line interface, documented at [llm.mlc.ai](https://llm.mlc.ai). MLC Chat currently supports text-based chat only — it does not officially support vision-language (image-input) models as of this review.',
        bullets: [
          'iOS: available directly on the [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937).',
          'Android: no Google Play listing confirmed; download the APK directly from [MLC\'s GitHub releases](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk).',
          'Android depends on OpenCL GPU support — confirmed working on some devices, not reliably on others (e.g., some Google Pixel models).',
          'Desktop: no separate packaged app; use MLC LLM\'s Python package, REST server, or CLI directly.',
          'License: Apache-2.0, per the [mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) repository.',
          'No official vision-language (image-input) model support as of this review — text chat only.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'History: MLC LLM and Machine Learning Compilation', anchor: 'history' },
      { label: 'What Makes MLC Chat Distinctive', anchor: 'distinctive' },
      { label: 'Real Setup Steps: iOS, Android, and Desktop', anchor: 'setup' },
      { label: 'License and Which Models It Supports', anchor: 'license-models' },
      { label: 'What MLC Chat Is Not Good For', anchor: 'limitations' },
      { label: 'Alternatives and Competitors', anchor: 'alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict: The Final Entry in This Series', anchor: 'verdict' },
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
            text: 'MLC Chat is a free, Apache-2.0-licensed chat app built on the MLC LLM compiler that runs large language models locally on iOS (via the App Store), Android (via a directly downloadable APK), and desktop (via MLC LLM\'s Python/REST/CLI interfaces), using GPU-accelerated on-device compilation rather than a generic runtime, and it does not officially support vision-language models as of this review.',
          },
          {
            type: 'plain-terms',
            text: 'MLC Chat is a free app that lets you chat with AI models directly on your phone or computer without an internet connection, by compiling those models specifically for your device\'s graphics chip — this review covers the real download links, setup steps, and where it does and does not work well.',
          },
        ],
        items: [
          'iOS: available directly on the App Store; Android: no confirmed Google Play listing, download the APK directly from MLC\'s GitHub releases.',
          'Distinguishing feature: models are compiled ahead-of-time for a specific hardware target (Metal, OpenCL, Vulkan, CUDA, ROCm) via machine-learning compilation, not run through one generic interpreter.',
          'License: Apache-2.0, per the mlc-ai/mlc-llm GitHub repository.',
          'No official vision-language (image-input) support as of this review — text chat only, with community workarounds existing but not officially supported.',
          'Android build depends on OpenCL GPU support, confirmed working on some devices but not reliably on others.',
          'This is the final entry in PromptQuorum\'s 11-article local AI tools review series.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review focuses on the MLC Chat app specifically. For the deeper technical explanation of the MLC LLM compiler and TVM-based runtime underneath it, see PromptQuorum\'s dedicated [MLC LLM Explained](/power-local-llm/mlc-llm-explained) article, which this review deliberately does not duplicate.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'History: MLC LLM and Machine Learning Compilation',
        content: [
          '**MLC Chat is built on [MLC LLM](https://github.com/mlc-ai/mlc-llm)**, described in the project\'s own repository as a "universal LLM deployment engine with ML compilation" that enables developing, optimizing, and deploying AI models across platforms. The MLC LLM repository\'s own documentation cites foundational research from [Apache TVM](https://tvm.apache.org) (2018) and related compiler work (TensorIR, MetaSchedule) as its technical lineage — TVM being the deep learning compiler stack the MLC project builds machine-learning compilation techniques on top of.',
          '**The distinction between "MLC LLM" and "MLC Chat" matters and is often blurred.** MLC LLM is the underlying compiler and runtime engine — the thing PromptQuorum covers in depth in [MLC LLM Explained](/power-local-llm/mlc-llm-explained). MLC Chat is the consumer-facing application built on top of it, packaged for iOS and Android specifically, that lets a non-technical user download a model and start chatting without touching the compiler directly.',
          '**MLC Chat is maintained by the same MLC AI team** (GitHub organization [mlc-ai](https://github.com/mlc-ai)) that maintains the MLC LLM project itself, and it is licensed under Apache-2.0, the same license as the underlying MLC LLM repository.',
        ],
        faqs: [
          {
            q: 'Is MLC Chat the same thing as MLC LLM?',
            a: 'No, though they are closely related and often used interchangeably. MLC LLM is the underlying compiler and runtime engine that compiles models for GPU-accelerated on-device inference across platforms — see PromptQuorum\'s dedicated MLC LLM Explained article. MLC Chat is the consumer-facing app, built by the same team on top of that engine, packaged specifically for iOS and Android.',
          },
        ],
      },
      distinctive: {
        id: 'distinctive',
        title: 'What Makes MLC Chat Distinctive',
        content: [
          'Most local LLM chat apps rely on a single, general-purpose inference runtime (like llama.cpp) that interprets a model file at run time on whatever hardware it finds. MLC Chat\'s underlying MLC LLM engine takes a different approach: it compiles a model ahead of time for a specific hardware target using machine-learning compilation techniques, then ships that compiled artifact to run on the target device.',
          'According to MLC LLM\'s own project documentation, this compilation approach targets a wide range of GPU backends depending on platform: Metal for Apple Silicon and Apple mobile GPUs, OpenCL for Android GPUs (Adreno and Mali), and Vulkan, CUDA, or ROCm on desktop Linux and Windows. The project also documents WebGPU and WebAssembly support for running models in a browser, and MLCEngine — the runtime component — exposes an OpenAI-compatible API across REST, Python, JavaScript, iOS, and Android interfaces.',
          'The practical upshot for MLC Chat specifically: because the underlying compilation is hardware-target-specific, the app can achieve GPU acceleration on mobile chips that a more generic runtime might not fully exploit — at the cost of needing a compiled build for each specific hardware/model combination, rather than one universal binary that works everywhere.',
        ],
        faqs: [
          {
            q: 'What makes MLC Chat different from a generic local LLM runner?',
            a: 'MLC Chat\'s underlying MLC LLM engine compiles a model ahead of time for a specific hardware target (Metal, OpenCL, Vulkan, CUDA, or ROCm depending on platform) using machine-learning compilation, rather than interpreting the model generically at run time. This is documented in MLC LLM\'s own project materials as its core distinguishing approach.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Real Setup Steps: iOS, Android, and Desktop',
        content: [
          'These steps reflect what PromptQuorum verified directly — MLC Chat\'s actual presence on the App Store, the Android APK distribution channel, and MLC LLM\'s documented quick-start path for desktop use.',
        ],
        numberedItems: [
          {
            title: 'iOS: download from the App Store.',
            whyItMatters: 'MLC Chat is listed directly on the [Apple App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) — a standard install, no sideloading required.',
          },
          {
            title: 'Android: download the APK directly from GitHub.',
            whyItMatters: 'MLC does not currently maintain a confirmed Google Play Store listing. The Android build is distributed as a direct APK download from [MLC\'s own GitHub releases](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk), which requires enabling "install from unknown sources" in Android settings.',
          },
          {
            title: 'Check Android GPU compatibility before relying on it.',
            whyItMatters: 'The Android build depends on OpenCL GPU support. This has been confirmed working on some devices (such as certain Samsung Galaxy models) but not reliably on others (such as some Google Pixel models with limited OpenCL support) — verify your specific device before assuming full GPU acceleration.',
          },
          {
            title: 'Desktop: use MLC LLM\'s Python package, REST server, or CLI directly.',
            whyItMatters: 'There is no separate packaged MLC Chat desktop application. Desktop users install the `mlc-llm` Python package in a conda environment and interact via `MLCEngine`\'s `chat.completions.create()` API, a REST server, or the command line, per [MLC LLM\'s quick-start documentation](https://llm.mlc.ai/docs/get_started/quick_start.html).',
          },
          {
            title: 'Pick a compiled model that matches your hardware.',
            whyItMatters: 'MLC LLM\'s quick-start documentation demonstrates the workflow using `Llama-3-8B-Instruct-q4f16_1-MLC`, an int4-quantized build, and documents needing at least 6 GB of free VRAM for it — a useful baseline for gauging hardware requirements before committing to a larger model.',
          },
        ],
      },
      licenseModels: {
        id: 'license-models',
        title: 'License and Which Models It Supports',
        content: [
          '**License: Apache-2.0.** Both the MLC Chat app and the underlying MLC LLM repository are released under the Apache-2.0 license, confirmed directly on the [mlc-ai/mlc-llm GitHub repository](https://github.com/mlc-ai/mlc-llm).',
          '**Model support is broader than any single quick-start example.** MLC LLM\'s own quick-start documentation demonstrates the workflow with `Llama-3-8B-Instruct-q4f16_1-MLC`, but the project\'s model library extends to other open-weight model families compiled for its supported hardware targets — PromptQuorum recommends checking [MLC LLM\'s own model list](https://llm.mlc.ai) directly for the current set, since compiled model availability changes as new releases land, rather than relying on any single cached list.',
          '**No official vision-language model support.** As of this review, MLC LLM does not officially support vision-language (image-input) models — it does not provide built-in modules for processing image and text inputs together in the chat app. Community projects exist that adapt vision-language model code to work with MLC LLM\'s compilation pipeline, but these are not officially maintained or supported by the MLC AI team, and PromptQuorum did not verify their current reliability.',
        ],
        faqs: [
          {
            q: 'What license does MLC Chat use?',
            a: 'Apache-2.0, confirmed directly on the mlc-ai/mlc-llm GitHub repository, which covers both the MLC LLM engine and the MLC Chat app built on top of it.',
          },
          {
            q: 'Does MLC Chat support vision models like LLaVA?',
            a: 'No, not officially, as of this review. MLC LLM does not provide official support for vision-language (image-input) models. Community-built workarounds exist that adapt vision-language model code to MLC LLM\'s pipeline, but these are unofficial and their current reliability was not verified for this review. For vision-capable local models, see PromptQuorum\'s LLaVA review, Idefics review, or Ollama vision models guide instead.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What MLC Chat Is Not Good For',
        content: [
          'MLC Chat is a genuinely useful cross-platform on-device chat app, but it is the wrong choice for the following situations:',
        ],
        items: [
          '**Desktop users who want the simplest possible setup.** MLC Chat has no packaged desktop application — desktop use means installing a Python package and working with a REST server, CLI, or Python API. Users who want a one-click desktop experience will find [Ollama](/power-local-llm/ollama-vision-models-review) or [LM Studio](https://lmstudio.ai) meaningfully more convenient, even though MLC Chat\'s mobile GPU compilation advantage does not apply on desktop the same way.',
          '**Vision or image-input tasks.** MLC LLM does not officially support vision-language models. If your use case involves running a model that can look at images, see PromptQuorum\'s [LLaVA review](/power-local-llm/llava-review), [Idefics review](/power-local-llm/idefics-review), or [Ollama vision models guide](/power-local-llm/ollama-vision-models-review) instead.',
          '**The largest available models.** Mobile hardware imposes real constraints — MLC LLM\'s own quick-start example needs at least 6 GB of free VRAM for an 8B-parameter model at int4 quantization, and phone GPUs and memory are more limited than a desktop GPU. Users wanting to run the largest available open-weight models locally are better served by desktop tools with more VRAM headroom.',
          '**Android users on hardware with limited OpenCL support.** The Android build\'s GPU acceleration depends on OpenCL, which is confirmed working on some devices but not reliably on others — check your specific device model before assuming a smooth experience.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives and Competitors',
        itemHeadings: true,
        columns: ['Tool', 'Best fit', 'License'],
        rows: [
          {
            'Tool': '[Ollama](/power-local-llm/ollama-vision-models-review)',
            'Best fit': 'Desktop-first simplicity via `ollama pull`/`ollama run`; broader vision-model support than MLC Chat',
            'License': 'MIT',
          },
          {
            'Tool': '[LM Studio](https://lmstudio.ai)',
            'Best fit': 'GUI-first desktop experience with a model browser built in',
            'License': 'Free, proprietary application',
          },
          {
            'Tool': '[llama.cpp](https://github.com/ggml-org/llama.cpp) directly',
            'Best fit': 'Maximum low-level control over inference without a compiled-ahead-of-time step',
            'License': 'MIT',
          },
          {
            'Tool': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Best fit': 'Another dedicated mobile local-LLM app; see PromptQuorum\'s own review for a direct comparison',
            'License': 'Varies — see PromptQuorum\'s PocketPal AI review',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is MLC Chat?',
            a: 'MLC Chat is a free, cross-platform chat app for running large language models directly on your own device, built by the MLC AI team on top of their MLC LLM compiler and runtime, and licensed under Apache-2.0.',
          },
          {
            q: 'Where can I download MLC Chat?',
            a: 'On iOS, download it directly from the App Store. On Android, MLC does not currently list it on Google Play — download the APK directly from MLC\'s own GitHub releases, which requires enabling installs from unknown sources. On desktop, there is no separate packaged app; use MLC LLM\'s Python package, REST server, or command-line interface instead.',
          },
          {
            q: 'Is MLC Chat free?',
            a: 'Yes. The app and the underlying MLC LLM engine are released under the Apache-2.0 open-source license.',
          },
          {
            q: 'Does MLC Chat support vision models?',
            a: 'No, not officially, as of this review. MLC LLM does not officially support vision-language (image-input) models. Unofficial community workarounds exist but were not verified for this review.',
          },
          {
            q: 'What makes MLC Chat different from Ollama or llama.cpp?',
            a: 'MLC Chat\'s underlying MLC LLM engine compiles models ahead of time for a specific hardware target (using techniques from the Apache TVM compiler lineage) rather than interpreting a model generically at run time, which the project positions as an advantage for GPU acceleration on mobile chips specifically. Ollama and llama.cpp use a more general-purpose runtime approach and, in Ollama\'s case, currently offer broader vision-model support.',
          },
          {
            q: 'Is this the last article in PromptQuorum\'s local AI tools series?',
            a: 'Yes. This MLC Chat review is the final entry in an 11-article series covering Whisper.cpp, faster-whisper, Piper TTS, Coqui TTS, XTTS v2, Bark, StyleTTS 2, LLaVA, Ollama vision models, Idefics, and MLC Chat.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict: The Final Entry in This Series',
        content:
          'MLC Chat delivers on a genuinely distinctive premise: cross-platform, GPU-accelerated on-device LLM chat achieved through machine-learning compilation rather than a one-size-fits-all runtime, with a real iOS App Store presence and a directly downloadable Android APK, all under a permissive Apache-2.0 license. It is not, however, the most convenient choice for desktop users — that workflow means a Python package and a REST/CLI interface rather than a packaged app — and it does not currently support vision-language models at all, officially. Choose MLC Chat specifically for mobile on-device chat where its compiled, hardware-target-specific approach pays off; choose [Ollama](/power-local-llm/ollama-vision-models-review) or [LM Studio](https://lmstudio.ai) for the simplest desktop experience, and PromptQuorum\'s [LLaVA](/power-local-llm/llava-review) or [Idefics](/power-local-llm/idefics-review) reviews for vision-capable local models instead. For the deeper technical picture of the compiler underneath MLC Chat, see PromptQuorum\'s [MLC LLM Explained](/power-local-llm/mlc-llm-explained). This review closes out PromptQuorum\'s 11-article series on local AI tools — from speech recognition (Whisper.cpp, faster-whisper) and speech synthesis (Piper, Coqui TTS, XTTS v2, Bark, StyleTTS 2) through vision-language models (LLaVA, Ollama vision models, Idefics) to this final entry on cross-platform on-device compilation.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[MLC Chat on the App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) — confirmed iOS availability.',
          '[MLC Chat Android APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — the direct Android download channel, hosted on MLC\'s own GitHub releases.',
          '[mlc-ai/mlc-llm on GitHub](https://github.com/mlc-ai/mlc-llm) — license (Apache-2.0), platform support, TVM lineage documentation.',
          '[MLC LLM quick-start documentation](https://llm.mlc.ai/docs/get_started/quick_start.html) — desktop setup steps, example model, VRAM requirement.',
          '[MLC LLM Android SDK documentation](https://llm.mlc.ai/docs/deploy/android.html) — Android OpenCL dependency and device compatibility notes.',
          'PromptQuorum research on MLC LLM vision-language model support, confirming no official VLM support and the existence of unofficial community workarounds (e.g., MLC-VLM-template) as of this review.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[MLC LLM Explained (2026)](/power-local-llm/mlc-llm-explained) — the deeper technical dive into the compiler and runtime underneath MLC Chat.',
          '[LLaVA Review (2026)](/power-local-llm/llava-review) — a vision-capable local model, for use cases MLC Chat does not officially support.',
          '[Idefics Review (2026)](/power-local-llm/idefics-review) — another open vision-language model option.',
          '[Ollama Vision Models (2026)](/power-local-llm/ollama-vision-models-review) — which vision models are actually pullable through Ollama today.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — another dedicated mobile local-LLM app, for direct comparison.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'MLC Chat Review (2026): The Mobile App Built on MLC LLM, Assessed Honestly',
      description:
        'MLC Chat review 2026: the mobile/desktop chat app built on MLC LLM. Real iOS App Store and Android APK download channels, actual setup steps, Apache-2.0 license, and honest limitations for on-device AI chat.',
      url: 'https://promptquorum.com/power-local-llm/mlc-chat-review',
      inLanguage: 'en',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Users and developers evaluating on-device LLM chat apps for mobile and desktop' },
      about: [
        { '@type': 'Thing', name: 'MLC Chat' },
        { '@type': 'Thing', name: 'MLC LLM' },
        { '@type': 'Thing', name: 'On-device inference' },
        { '@type': 'Thing', name: 'Machine learning compilation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/mlc-chat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'MLC Chat Review (2026)', item: 'https://promptquorum.com/power-local-llm/mlc-chat-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/mlc-chat-review-hero-de.webp',
    title: 'MLC-Chat-Test (2026): Die mobile App auf Basis von MLC LLM, ehrlich bewertet',
    seoTitle: 'MLC-Chat-Test 2026: iOS, Android & plattformübergreifendes Setup',
    intro:
      'MLC Chat ist die für Endnutzer gedachte Chat-App, die auf dem [MLC LLM](https://github.com/mlc-ai/mlc-llm)-Compiler und der zugehörigen Laufzeitumgebung aufbaut — dem Projekt, das PromptQuorum ausführlich in [MLC LLM erklärt](/de/power-local-llm/mlc-llm-explained) behandelt. Dieser Test konzentriert sich speziell auf das App-Erlebnis: echte Download-Kanäle, tatsächliche Einrichtungsschritte, mit welchen Modellen sie ausgeliefert wird, und ehrliche Einschränkungen, statt die zugrunde liegende Kompilierungstechnologie erneut zu erklären. Wer das tiefere technische Bild davon möchte, wie MLC LLM Modelle für GPU-beschleunigte Inferenz plattformübergreifend kompiliert, sollte zuerst [MLC LLM erklärt](/de/power-local-llm/mlc-llm-explained) lesen; dieser Artikel setzt diesen Kontext voraus und konzentriert sich auf die App selbst.',
    metaDescription:
      'MLC-Chat-Test 2026: die Mobile-/Desktop-Chat-App auf Basis von MLC LLM. Echte iOS-App-Store- und Android-APK-Download-Kanäle, tatsächliche Einrichtungsschritte, Apache-2.0-Lizenz und ehrliche Einschränkungen für KI-Chat auf dem Gerät.',
    twitterDescription:
      'MLC-Chat-Test 2026: die Endnutzer-Chat-App auf Basis des MLC-LLM-Compilers. Echte Download-Kanäle (iOS App Store, Android-APK), tatsächliche Einrichtungsschritte, und ein ehrlicher Blick darauf, wo sie passt — und wo nicht. Letzter Teil von PromptQuorums Serie zu lokalen KI-Tools.',
    audience:
      'Nutzer und Entwickler, die entscheiden möchten, ob MLC Chat für KI-Chat auf dem Gerät auf Smartphones oder Desktop geeignet ist, und ein klares Bild des App-Erlebnisses getrennt von der zugrunde liegenden MLC-LLM-Compiler-Technologie wünschen.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'MLC Chat',
    targetKeywords: [
      'mlc chat test',
      'mlc chat app',
      'mlc chat ios',
      'mlc chat android',
      'mlc chat einrichtung',
      'mlc llm app',
      'llm app auf dem gerät',
      'mlc chat vs ollama',
    ],
    current_models_mentioned: ['Llama 3', 'MLC LLM', 'Ollama', 'LM Studio', 'PocketPal AI'],
    current_hardware_mentioned: ['iOS', 'Android', 'NVIDIA GPU', 'AMD GPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**MLC Chat ist eine kostenlose, plattformübergreifende Chat-App zum Ausführen großer Sprachmodelle direkt auf dem eigenen Gerät**, entwickelt vom MLC-AI-Team auf Basis des eigenen [MLC LLM](https://github.com/mlc-ai/mlc-llm)-Compilers und der Laufzeitumgebung, veröffentlicht unter der Apache-2.0-Lizenz. Sie ist im [iOS App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) verfügbar und als direkt herunterladbare [Android-APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) über MLCs eigene GitHub-Releases; die Desktop-Nutzung erfolgt über MLC LLMs Python-, REST- und CLI-Schnittstellen statt über eine separat verpackte Desktop-App. Ihr Alleinstellungsmerkmal ist GPU-beschleunigte Inferenz auf dem Gerät, erreicht durch Machine-Learning-Kompilierung — ein Modell wird im Voraus für ein bestimmtes Hardware-Ziel kompiliert (Metal auf Apple-GPUs, OpenCL auf Android-GPUs, Vulkan/CUDA/ROCm auf dem Desktop) — statt sich auf eine einzige generische Laufzeitumgebung zu verlassen. Zum Zeitpunkt dieses Tests unterstützt MLC Chat offiziell keine Vision-Language-Modelle (Bildeingabe). Für die tiefere technische Erklärung, wie der zugrunde liegende Compiler funktioniert, siehe PromptQuorums [MLC LLM erklärt](/de/power-local-llm/mlc-llm-explained).',
    quickAnswerTop: {
      en: {
        question: 'Was ist MLC Chat und wie lade ich es tatsächlich herunter und richte es ein?',
        answer:
          'MLC Chat ist eine kostenlose Chat-App, die große Sprachmodelle lokal auf Ihrem Gerät ausführt, aufgebaut auf dem MLC-LLM-Compiler und der Laufzeitumgebung des MLC-AI-Teams, lizenziert unter Apache-2.0. Auf iOS laden Sie sie direkt aus dem [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) herunter. Auf Android listet MLC sie derzeit nicht im Google Play Store; laden Sie die APK direkt von [MLCs eigenen GitHub-Releases](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) herunter — dies erfordert die Aktivierung von Installationen aus unbekannten Quellen, und der Android-Build ist von OpenCL-GPU-Unterstützung abhängig, die auf manchen Geräten (etwa bestimmten Samsung-Galaxy-Modellen) bestätigt funktioniert, auf anderen (etwa manchen Google-Pixel-Modellen) jedoch nicht zuverlässig. Es gibt keine separat verpackte Desktop-App; auf dem Desktop wird MLC LLM über sein Python-Paket, einen REST-Server oder die Kommandozeile genutzt, dokumentiert unter [llm.mlc.ai](https://llm.mlc.ai). MLC Chat unterstützt derzeit nur textbasierten Chat — es unterstützt zum Zeitpunkt dieses Tests offiziell keine Vision-Language-Modelle (Bildeingabe).',
        bullets: [
          'iOS: direkt im [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) verfügbar.',
          'Android: kein bestätigter Google-Play-Eintrag; APK direkt von [MLCs GitHub-Releases](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) herunterladen.',
          'Android ist von OpenCL-GPU-Unterstützung abhängig — auf manchen Geräten bestätigt funktionierend, auf anderen nicht zuverlässig.',
          'Desktop: keine separat verpackte App; MLC LLMs Python-Paket, REST-Server oder CLI direkt nutzen.',
          'Lizenz: Apache-2.0, gemäß dem [mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)-Repository.',
          'Zum Zeitpunkt dieses Tests keine offizielle Unterstützung für Vision-Language-Modelle (Bildeingabe) — nur Text-Chat.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Geschichte: MLC LLM und Machine-Learning-Kompilierung', anchor: 'history' },
      { label: 'Was MLC Chat auszeichnet', anchor: 'distinctive' },
      { label: 'Echte Einrichtungsschritte: iOS, Android und Desktop', anchor: 'setup' },
      { label: 'Lizenz und welche Modelle unterstützt werden', anchor: 'license-models' },
      { label: 'Wofür MLC Chat nicht geeignet ist', anchor: 'limitations' },
      { label: 'Alternativen und Wettbewerber', anchor: 'alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit: Der letzte Teil dieser Serie', anchor: 'verdict' },
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
            text: 'MLC Chat ist eine kostenlose, Apache-2.0-lizenzierte Chat-App auf Basis des MLC-LLM-Compilers, die große Sprachmodelle lokal auf iOS (über den App Store), Android (über eine direkt herunterladbare APK) und Desktop (über MLC LLMs Python-/REST-/CLI-Schnittstellen) ausführt, mit GPU-beschleunigter Kompilierung auf dem Gerät statt einer generischen Laufzeitumgebung, und die zum Zeitpunkt dieses Tests offiziell keine Vision-Language-Modelle unterstützt.',
          },
          {
            type: 'plain-terms',
            text: 'MLC Chat ist eine kostenlose App, mit der Sie ohne Internetverbindung direkt auf Ihrem Smartphone oder Computer mit KI-Modellen chatten können, indem diese Modelle speziell für den Grafikchip Ihres Geräts kompiliert werden — dieser Test behandelt die echten Download-Links, Einrichtungsschritte und wo sie gut und wo weniger gut funktioniert.',
          },
        ],
        items: [
          'iOS: direkt im App Store verfügbar; Android: kein bestätigter Google-Play-Eintrag, APK direkt von MLCs GitHub-Releases herunterladen.',
          'Alleinstellungsmerkmal: Modelle werden im Voraus für ein bestimmtes Hardware-Ziel kompiliert (Metal, OpenCL, Vulkan, CUDA, ROCm) mittels Machine-Learning-Kompilierung, statt über einen generischen Interpreter zu laufen.',
          'Lizenz: Apache-2.0, gemäß dem GitHub-Repository mlc-ai/mlc-llm.',
          'Zum Zeitpunkt dieses Tests keine offizielle Unterstützung für Vision-Language-Modelle (Bildeingabe) — nur Text-Chat, mit inoffiziellen Community-Workarounds, die nicht offiziell unterstützt werden.',
          'Der Android-Build ist von OpenCL-GPU-Unterstützung abhängig, auf manchen Geräten bestätigt funktionierend, auf anderen nicht zuverlässig.',
          'Dies ist der letzte Teil von PromptQuorums elfteiliger Testreihe zu lokalen KI-Tools.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test konzentriert sich speziell auf die App MLC Chat. Für die tiefere technische Erklärung des MLC-LLM-Compilers und der TVM-basierten Laufzeitumgebung dahinter siehe PromptQuorums eigenen Artikel [MLC LLM erklärt](/de/power-local-llm/mlc-llm-explained), den dieser Test bewusst nicht dupliziert.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: MLC LLM und Machine-Learning-Kompilierung',
        content: [
          '**MLC Chat baut auf [MLC LLM](https://github.com/mlc-ai/mlc-llm) auf**, das im eigenen Repository des Projekts als "universelle LLM-Bereitstellungs-Engine mit ML-Kompilierung" beschrieben wird, die die Entwicklung, Optimierung und Bereitstellung von KI-Modellen plattformübergreifend ermöglicht. Die eigene Dokumentation des MLC-LLM-Repositorys zitiert grundlegende Forschung von [Apache TVM](https://tvm.apache.org) (2018) und verwandte Compiler-Arbeiten (TensorIR, MetaSchedule) als technische Abstammungslinie — TVM ist der Deep-Learning-Compiler-Stack, auf dem das MLC-Projekt seine Machine-Learning-Kompilierungstechniken aufbaut.',
          '**Die Unterscheidung zwischen "MLC LLM" und "MLC Chat" ist wichtig und wird oft verwischt.** MLC LLM ist der zugrunde liegende Compiler und die Laufzeit-Engine — das, was PromptQuorum ausführlich in [MLC LLM erklärt](/de/power-local-llm/mlc-llm-explained) behandelt. MLC Chat ist die darauf aufbauende, für Endnutzer gedachte Anwendung, speziell für iOS und Android verpackt, mit der ein technisch nicht versierter Nutzer ein Modell herunterladen und ohne direkten Kontakt mit dem Compiler chatten kann.',
          '**MLC Chat wird vom selben MLC-AI-Team gepflegt** (GitHub-Organisation [mlc-ai](https://github.com/mlc-ai)), das auch das MLC-LLM-Projekt selbst pflegt, und ist unter Apache-2.0 lizenziert, derselben Lizenz wie das zugrunde liegende MLC-LLM-Repository.',
        ],
        faqs: [
          {
            q: 'Ist MLC Chat dasselbe wie MLC LLM?',
            a: 'Nein, obwohl beide eng verwandt sind und oft synonym verwendet werden. MLC LLM ist der zugrunde liegende Compiler und die Laufzeit-Engine, die Modelle für GPU-beschleunigte Inferenz auf dem Gerät plattformübergreifend kompiliert — siehe PromptQuorums eigenen Artikel MLC LLM erklärt. MLC Chat ist die für Endnutzer gedachte App, vom selben Team auf Basis dieser Engine entwickelt, speziell für iOS und Android verpackt.',
          },
        ],
      },
      distinctive: {
        id: 'distinctive',
        title: 'Was MLC Chat auszeichnet',
        content: [
          'Die meisten lokalen LLM-Chat-Apps verlassen sich auf eine einzige, universelle Inferenz-Laufzeitumgebung (wie llama.cpp), die eine Modelldatei zur Laufzeit auf der jeweils vorgefundenen Hardware interpretiert. Die zugrunde liegende MLC-LLM-Engine von MLC Chat verfolgt einen anderen Ansatz: Sie kompiliert ein Modell im Voraus für ein bestimmtes Hardware-Ziel mittels Machine-Learning-Kompilierungstechniken und liefert dann dieses kompilierte Artefakt zur Ausführung auf dem Zielgerät.',
          'Laut MLC LLMs eigener Projektdokumentation adressiert dieser Kompilierungsansatz je nach Plattform eine breite Palette an GPU-Backends: Metal für Apple Silicon und mobile Apple-GPUs, OpenCL für Android-GPUs (Adreno und Mali) sowie Vulkan, CUDA oder ROCm auf Desktop-Linux und -Windows. Das Projekt dokumentiert außerdem WebGPU- und WebAssembly-Unterstützung zum Ausführen von Modellen im Browser, und MLCEngine — die Laufzeitkomponente — stellt eine OpenAI-kompatible API über REST-, Python-, JavaScript-, iOS- und Android-Schnittstellen bereit.',
          'Der praktische Nutzen speziell für MLC Chat: Da die zugrunde liegende Kompilierung hardware-zielspezifisch ist, kann die App GPU-Beschleunigung auf mobilen Chips erreichen, die eine generischere Laufzeitumgebung möglicherweise nicht vollständig ausnutzen würde — auf Kosten der Notwendigkeit eines kompilierten Builds für jede spezifische Hardware-/Modell-Kombination, statt einer einzigen universellen Binärdatei, die überall funktioniert.',
        ],
        faqs: [
          {
            q: 'Was unterscheidet MLC Chat von einem generischen lokalen LLM-Runner?',
            a: 'Die zugrunde liegende MLC-LLM-Engine von MLC Chat kompiliert ein Modell im Voraus für ein bestimmtes Hardware-Ziel (je nach Plattform Metal, OpenCL, Vulkan, CUDA oder ROCm) mittels Machine-Learning-Kompilierung, statt das Modell zur Laufzeit generisch zu interpretieren. Dies wird in MLC LLMs eigenen Projektmaterialien als zentraler Unterscheidungsansatz dokumentiert.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Echte Einrichtungsschritte: iOS, Android und Desktop',
        content: [
          'Diese Schritte spiegeln wider, was PromptQuorum direkt überprüft hat — die tatsächliche Präsenz von MLC Chat im App Store, den Android-APK-Vertriebskanal und MLC LLMs dokumentierten Schnellstart-Pfad für die Desktop-Nutzung.',
        ],
        numberedItems: [
          {
            title: 'iOS: aus dem App Store herunterladen.',
            whyItMatters: 'MLC Chat ist direkt im [Apple App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) gelistet — eine Standardinstallation, kein Sideloading erforderlich.',
          },
          {
            title: 'Android: die APK direkt von GitHub herunterladen.',
            whyItMatters: 'MLC pflegt derzeit keinen bestätigten Google-Play-Store-Eintrag. Der Android-Build wird als direkter APK-Download über [MLCs eigene GitHub-Releases](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) vertrieben, was das Aktivieren von "Installation aus unbekannten Quellen" in den Android-Einstellungen erfordert.',
          },
          {
            title: 'Android-GPU-Kompatibilität prüfen, bevor Sie sich darauf verlassen.',
            whyItMatters: 'Der Android-Build ist von OpenCL-GPU-Unterstützung abhängig. Dies wurde auf manchen Geräten (etwa bestimmten Samsung-Galaxy-Modellen) als funktionierend bestätigt, jedoch nicht zuverlässig auf anderen (etwa manchen Google-Pixel-Modellen mit eingeschränkter OpenCL-Unterstützung) — überprüfen Sie Ihr spezifisches Gerät, bevor Sie von voller GPU-Beschleunigung ausgehen.',
          },
          {
            title: 'Desktop: MLC LLMs Python-Paket, REST-Server oder CLI direkt nutzen.',
            whyItMatters: 'Es gibt keine separat verpackte MLC-Chat-Desktop-Anwendung. Desktop-Nutzer installieren das `mlc-llm`-Python-Paket in einer Conda-Umgebung und interagieren über die `chat.completions.create()`-API von `MLCEngine`, einen REST-Server oder die Kommandozeile, gemäß [MLC LLMs Schnellstart-Dokumentation](https://llm.mlc.ai/docs/get_started/quick_start.html).',
          },
          {
            title: 'Ein kompiliertes Modell wählen, das zu Ihrer Hardware passt.',
            whyItMatters: 'MLC LLMs Schnellstart-Dokumentation demonstriert den Arbeitsablauf anhand von `Llama-3-8B-Instruct-q4f16_1-MLC`, einem int4-quantisierten Build, und dokumentiert einen Bedarf von mindestens 6 GB freiem VRAM dafür — eine nützliche Ausgangsbasis, um Hardwareanforderungen einzuschätzen, bevor Sie sich für ein größeres Modell entscheiden.',
          },
        ],
      },
      licenseModels: {
        id: 'license-models',
        title: 'Lizenz und welche Modelle unterstützt werden',
        content: [
          '**Lizenz: Apache-2.0.** Sowohl die App MLC Chat als auch das zugrunde liegende MLC-LLM-Repository sind unter der Apache-2.0-Lizenz veröffentlicht, direkt bestätigt im [GitHub-Repository mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
          '**Die Modellunterstützung ist breiter als jedes einzelne Schnellstart-Beispiel.** MLC LLMs eigene Schnellstart-Dokumentation demonstriert den Arbeitsablauf mit `Llama-3-8B-Instruct-q4f16_1-MLC`, doch die Modellbibliothek des Projekts erstreckt sich auf weitere Open-Weight-Modellfamilien, kompiliert für seine unterstützten Hardware-Ziele — PromptQuorum empfiehlt, [MLC LLMs eigene Modellliste](https://llm.mlc.ai) direkt für den aktuellen Stand zu prüfen, da sich die Verfügbarkeit kompilierter Modelle mit neuen Releases ändert, statt sich auf eine einzelne zwischengespeicherte Liste zu verlassen.',
          '**Keine offizielle Unterstützung für Vision-Language-Modelle.** Zum Zeitpunkt dieses Tests unterstützt MLC LLM offiziell keine Vision-Language-Modelle (Bildeingabe) — es stellt keine eingebauten Module zur gemeinsamen Verarbeitung von Bild- und Texteingaben in der Chat-App bereit. Es existieren Community-Projekte, die Vision-Language-Modell-Code an MLC LLMs Kompilierungs-Pipeline anpassen, doch diese werden nicht offiziell vom MLC-AI-Team gepflegt oder unterstützt, und PromptQuorum hat deren aktuelle Zuverlässigkeit nicht überprüft.',
        ],
        faqs: [
          {
            q: 'Welche Lizenz verwendet MLC Chat?',
            a: 'Apache-2.0, direkt bestätigt im GitHub-Repository mlc-ai/mlc-llm, das sowohl die MLC-LLM-Engine als auch die darauf aufbauende App MLC Chat abdeckt.',
          },
          {
            q: 'Unterstützt MLC Chat Vision-Modelle wie LLaVA?',
            a: 'Nein, zum Zeitpunkt dieses Tests nicht offiziell. MLC LLM bietet keine offizielle Unterstützung für Vision-Language-Modelle (Bildeingabe). Es existieren von der Community entwickelte Workarounds, die Vision-Language-Modell-Code an MLC LLMs Pipeline anpassen, doch diese sind inoffiziell, und ihre aktuelle Zuverlässigkeit wurde für diesen Test nicht überprüft. Für Vision-fähige lokale Modelle siehe stattdessen PromptQuorums LLaVA-Test, Idefics-Test oder Ollama-Vision-Modelle-Leitfaden.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wofür MLC Chat nicht geeignet ist',
        content: [
          'MLC Chat ist eine tatsächlich nützliche plattformübergreifende Chat-App auf dem Gerät, aber die falsche Wahl für folgende Situationen:',
        ],
        items: [
          '**Desktop-Nutzer, die die einfachstmögliche Einrichtung wünschen.** MLC Chat hat keine verpackte Desktop-Anwendung — Desktop-Nutzung bedeutet, ein Python-Paket zu installieren und mit einem REST-Server, einer CLI oder einer Python-API zu arbeiten. Nutzer, die ein Ein-Klick-Desktop-Erlebnis wünschen, finden [Ollama](/de/power-local-llm/ollama-vision-models-review) oder [LM Studio](https://lmstudio.ai) deutlich bequemer, auch wenn MLC Chats Vorteil der mobilen GPU-Kompilierung auf dem Desktop nicht in gleicher Weise gilt.',
          '**Vision- oder Bildeingabe-Aufgaben.** MLC LLM unterstützt offiziell keine Vision-Language-Modelle. Wenn Ihr Anwendungsfall das Ausführen eines Modells umfasst, das Bilder betrachten kann, siehe stattdessen PromptQuorums [LLaVA-Test](/de/power-local-llm/llava-review), [Idefics-Test](/de/power-local-llm/idefics-review) oder [Ollama-Vision-Modelle-Leitfaden](/de/power-local-llm/ollama-vision-models-review).',
          '**Die größten verfügbaren Modelle.** Mobile Hardware bringt reale Einschränkungen mit sich — MLC LLMs eigenes Schnellstart-Beispiel benötigt mindestens 6 GB freies VRAM für ein 8B-Parameter-Modell bei int4-Quantisierung, und Telefon-GPUs und -Speicher sind begrenzter als eine Desktop-GPU. Nutzer, die die größten verfügbaren Open-Weight-Modelle lokal ausführen möchten, sind mit Desktop-Tools mit mehr VRAM-Spielraum besser bedient.',
          '**Android-Nutzer mit Hardware mit eingeschränkter OpenCL-Unterstützung.** Die GPU-Beschleunigung des Android-Builds hängt von OpenCL ab, das auf manchen Geräten bestätigt funktioniert, auf anderen jedoch nicht zuverlässig — überprüfen Sie Ihr spezifisches Gerätemodell, bevor Sie ein reibungsloses Erlebnis erwarten.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen und Wettbewerber',
        itemHeadings: true,
        columns: ['Tool', 'Am besten geeignet', 'Lizenz'],
        rows: [
          {
            'Tool': '[Ollama](/de/power-local-llm/ollama-vision-models-review)',
            'Am besten geeignet': 'Desktop-orientierte Einfachheit über `ollama pull`/`ollama run`; breitere Vision-Modell-Unterstützung als MLC Chat',
            'Lizenz': 'MIT',
          },
          {
            'Tool': '[LM Studio](https://lmstudio.ai)',
            'Am besten geeignet': 'GUI-orientiertes Desktop-Erlebnis mit eingebautem Modell-Browser',
            'Lizenz': 'Kostenlos, proprietäre Anwendung',
          },
          {
            'Tool': '[llama.cpp](https://github.com/ggml-org/llama.cpp) direkt',
            'Am besten geeignet': 'Maximale Low-Level-Kontrolle über die Inferenz ohne vorab kompilierten Schritt',
            'Lizenz': 'MIT',
          },
          {
            'Tool': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Am besten geeignet': 'Eine weitere dedizierte mobile lokale LLM-App; siehe PromptQuorums eigenen Test für einen direkten Vergleich',
            'Lizenz': 'Unterschiedlich — siehe PromptQuorums PocketPal-AI-Test',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist MLC Chat?',
            a: 'MLC Chat ist eine kostenlose, plattformübergreifende Chat-App zum Ausführen großer Sprachmodelle direkt auf dem eigenen Gerät, entwickelt vom MLC-AI-Team auf Basis des eigenen MLC-LLM-Compilers und der Laufzeitumgebung, lizenziert unter Apache-2.0.',
          },
          {
            q: 'Wo kann ich MLC Chat herunterladen?',
            a: 'Auf iOS laden Sie sie direkt aus dem App Store herunter. Auf Android listet MLC sie derzeit nicht im Google Play Store — laden Sie die APK direkt von MLCs eigenen GitHub-Releases herunter, was das Aktivieren von Installationen aus unbekannten Quellen erfordert. Auf dem Desktop gibt es keine separat verpackte App; nutzen Sie stattdessen MLC LLMs Python-Paket, REST-Server oder Kommandozeilenschnittstelle.',
          },
          {
            q: 'Ist MLC Chat kostenlos?',
            a: 'Ja. Die App und die zugrunde liegende MLC-LLM-Engine sind unter der Open-Source-Lizenz Apache-2.0 veröffentlicht.',
          },
          {
            q: 'Unterstützt MLC Chat Vision-Modelle?',
            a: 'Nein, zum Zeitpunkt dieses Tests nicht offiziell. MLC LLM unterstützt offiziell keine Vision-Language-Modelle (Bildeingabe). Es existieren inoffizielle Community-Workarounds, die für diesen Test jedoch nicht überprüft wurden.',
          },
          {
            q: 'Was unterscheidet MLC Chat von Ollama oder llama.cpp?',
            a: 'Die zugrunde liegende MLC-LLM-Engine von MLC Chat kompiliert Modelle im Voraus für ein bestimmtes Hardware-Ziel (mittels Techniken aus der Apache-TVM-Compiler-Abstammungslinie), statt ein Modell zur Laufzeit generisch zu interpretieren, was das Projekt als Vorteil speziell für GPU-Beschleunigung auf mobilen Chips positioniert. Ollama und llama.cpp verfolgen einen eher universellen Laufzeitansatz und bieten im Fall von Ollama derzeit breitere Vision-Modell-Unterstützung.',
          },
          {
            q: 'Ist dies der letzte Artikel in PromptQuorums Serie zu lokalen KI-Tools?',
            a: 'Ja. Dieser MLC-Chat-Test ist der letzte Teil einer elfteiligen Serie, die Whisper.cpp, faster-whisper, Piper TTS, Coqui TTS, XTTS v2, Bark, StyleTTS 2, LLaVA, Ollama-Vision-Modelle, Idefics und MLC Chat behandelt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit: Der letzte Teil dieser Serie',
        content:
          'MLC Chat löst ein tatsächlich unverwechselbares Versprechen ein: plattformübergreifenden, GPU-beschleunigten LLM-Chat auf dem Gerät, erreicht durch Machine-Learning-Kompilierung statt einer Einheitslösung für alle, mit einer echten Präsenz im iOS App Store und einer direkt herunterladbaren Android-APK, alles unter einer freizügigen Apache-2.0-Lizenz. Es ist jedoch nicht die bequemste Wahl für Desktop-Nutzer — dieser Workflow bedeutet ein Python-Paket und eine REST-/CLI-Schnittstelle statt einer verpackten App — und es unterstützt derzeit überhaupt keine Vision-Language-Modelle, offiziell. Wählen Sie MLC Chat speziell für mobilen Chat auf dem Gerät, wo sich sein kompilierter, hardware-zielspezifischer Ansatz auszahlt; wählen Sie [Ollama](/de/power-local-llm/ollama-vision-models-review) oder [LM Studio](https://lmstudio.ai) für das einfachste Desktop-Erlebnis, und PromptQuorums [LLaVA](/de/power-local-llm/llava-review)- oder [Idefics](/de/power-local-llm/idefics-review)-Tests stattdessen für Vision-fähige lokale Modelle. Für das tiefere technische Bild des Compilers hinter MLC Chat siehe PromptQuorums [MLC LLM erklärt](/de/power-local-llm/mlc-llm-explained). Dieser Test schließt PromptQuorums elfteilige Serie zu lokalen KI-Tools ab — von Spracherkennung (Whisper.cpp, faster-whisper) und Sprachsynthese (Piper, Coqui TTS, XTTS v2, Bark, StyleTTS 2) über Vision-Language-Modelle (LLaVA, Ollama-Vision-Modelle, Idefics) bis zu diesem letzten Teil über plattformübergreifende Kompilierung auf dem Gerät.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[MLC Chat im App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) — bestätigte iOS-Verfügbarkeit.',
          '[MLC-Chat-Android-APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — der direkte Android-Download-Kanal, gehostet auf MLCs eigenen GitHub-Releases.',
          '[mlc-ai/mlc-llm auf GitHub](https://github.com/mlc-ai/mlc-llm) — Lizenz (Apache-2.0), Plattformunterstützung, TVM-Abstammungsdokumentation.',
          '[MLC-LLM-Schnellstart-Dokumentation](https://llm.mlc.ai/docs/get_started/quick_start.html) — Desktop-Einrichtungsschritte, Beispielmodell, VRAM-Anforderung.',
          '[MLC-LLM-Android-SDK-Dokumentation](https://llm.mlc.ai/docs/deploy/android.html) — Android-OpenCL-Abhängigkeit und Hinweise zur Gerätekompatibilität.',
          'PromptQuorum-Recherche zur Vision-Language-Modell-Unterstützung von MLC LLM, die keine offizielle VLM-Unterstützung und die Existenz inoffizieller Community-Workarounds (z. B. MLC-VLM-template) zum Zeitpunkt dieses Tests bestätigt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[MLC LLM erklärt (2026)](/de/power-local-llm/mlc-llm-explained) — der tiefere technische Einblick in den Compiler und die Laufzeitumgebung hinter MLC Chat.',
          '[LLaVA-Test (2026)](/de/power-local-llm/llava-review) — ein Vision-fähiges lokales Modell, für Anwendungsfälle, die MLC Chat offiziell nicht unterstützt.',
          '[Idefics-Test (2026)](/de/power-local-llm/idefics-review) — eine weitere offene Vision-Language-Modell-Option.',
          '[Ollama-Vision-Modelle (2026)](/de/power-local-llm/ollama-vision-models-review) — welche Vision-Modelle heute tatsächlich über Ollama abrufbar sind.',
          '[PocketPal-AI-Test](/de/power-local-llm/pocketpal-ai-review) — eine weitere dedizierte mobile lokale LLM-App, für einen direkten Vergleich.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'MLC-Chat-Test (2026): Die mobile App auf Basis von MLC LLM, ehrlich bewertet',
      description:
        'MLC-Chat-Test 2026: die Mobile-/Desktop-Chat-App auf Basis von MLC LLM. Echte iOS-App-Store- und Android-APK-Download-Kanäle, tatsächliche Einrichtungsschritte, Apache-2.0-Lizenz und ehrliche Einschränkungen für KI-Chat auf dem Gerät.',
      url: 'https://promptquorum.com/de/power-local-llm/mlc-chat-review',
      inLanguage: 'de',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Nutzer und Entwickler, die KI-Chat-Apps auf dem Gerät für Mobilgeräte und Desktop bewerten' },
      about: [
        { '@type': 'Thing', name: 'MLC Chat' },
        { '@type': 'Thing', name: 'MLC LLM' },
        { '@type': 'Thing', name: 'On-device inference' },
        { '@type': 'Thing', name: 'Machine learning compilation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/mlc-chat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'MLC-Chat-Test (2026)', item: 'https://promptquorum.com/de/power-local-llm/mlc-chat-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/mlc-chat-review-hero-fr.webp',
    title: 'Avis sur MLC Chat (2026) : l\'application mobile construite sur MLC LLM, évaluée honnêtement',
    seoTitle: 'Avis MLC Chat 2026 : iOS, Android & configuration multiplateforme',
    intro:
      'MLC Chat est l\'application de chat grand public construite au-dessus du compilateur et de l\'environnement d\'exécution [MLC LLM](https://github.com/mlc-ai/mlc-llm) — le projet que PromptQuorum couvre en profondeur dans [MLC LLM expliqué](/fr/power-local-llm/mlc-llm-explained). Cet avis se concentre spécifiquement sur l\'expérience de l\'application : les canaux de téléchargement réels, les étapes de configuration effectives, les modèles fournis, et des limites honnêtes, plutôt que de réexpliquer la technologie de compilation sous-jacente. Pour la vision technique plus approfondie de la façon dont MLC LLM compile les modèles pour une inférence accélérée par GPU sur plusieurs plateformes, lisez d\'abord [MLC LLM expliqué](/fr/power-local-llm/mlc-llm-explained) ; cet article suppose ce contexte acquis et reste concentré sur l\'application elle-même.',
    metaDescription:
      'Avis MLC Chat 2026 : l\'application de chat mobile/desktop construite sur MLC LLM. Canaux de téléchargement réels App Store iOS et APK Android, étapes de configuration effectives, licence Apache-2.0, et limites honnêtes pour le chat IA sur l\'appareil.',
    twitterDescription:
      'Avis MLC Chat 2026 : l\'application de chat grand public construite sur le compilateur MLC LLM. Canaux de téléchargement réels (App Store iOS, APK Android), étapes de configuration effectives, et un regard honnête sur où elle convient — et où non. Dernier article de la série de PromptQuorum sur les outils d\'IA locale.',
    audience:
      'Utilisateurs et développeurs cherchant à savoir s\'il faut utiliser MLC Chat pour du chat IA sur l\'appareil sur mobile ou desktop, qui veulent une vision claire de l\'expérience de l\'application distincte de la technologie du compilateur MLC LLM sous-jacent.',
    readTime: '10 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'MLC Chat',
    targetKeywords: [
      'avis mlc chat',
      'application mlc chat',
      'mlc chat ios',
      'mlc chat android',
      'configuration mlc chat',
      'application mlc llm',
      'application llm sur l\'appareil',
      'mlc chat vs ollama',
    ],
    current_models_mentioned: ['Llama 3', 'MLC LLM', 'Ollama', 'LM Studio', 'PocketPal AI'],
    current_hardware_mentioned: ['iOS', 'Android', 'NVIDIA GPU', 'AMD GPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**MLC Chat est une application de chat gratuite et multiplateforme pour exécuter de grands modèles de langage directement sur votre propre appareil**, construite par l\'équipe MLC AI au-dessus de son compilateur et environnement d\'exécution [MLC LLM](https://github.com/mlc-ai/mlc-llm), publiée sous licence Apache-2.0. Elle est disponible sur l\'[App Store iOS](https://apps.apple.com/us/app/mlc-chat/id6448482937) et sous forme d\'[APK Android](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) directement téléchargeable depuis les propres publications GitHub de MLC ; l\'usage sur desktop se fait via les interfaces Python, REST et CLI de MLC LLM plutôt que via une application desktop packagée séparément. Sa caractéristique distinctive est l\'inférence accélérée par GPU sur l\'appareil, obtenue par compilation d\'apprentissage automatique — compiler un modèle à l\'avance pour une cible matérielle spécifique (Metal sur les GPU Apple, OpenCL sur les GPU Android, Vulkan/CUDA/ROCm sur desktop) — plutôt que de s\'appuyer sur un environnement d\'exécution générique unique. Au moment de cet avis, MLC Chat ne prend pas officiellement en charge les modèles vision-langage (entrée d\'image). Pour l\'explication technique plus approfondie du fonctionnement du compilateur sous-jacent, voir [MLC LLM expliqué](/fr/power-local-llm/mlc-llm-explained) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'Qu\'est-ce que MLC Chat et comment le télécharger et le configurer réellement ?',
        answer:
          'MLC Chat est une application de chat gratuite qui exécute de grands modèles de langage localement sur votre appareil, construite sur le compilateur et l\'environnement d\'exécution MLC LLM de l\'équipe MLC AI, et sous licence Apache-2.0. Sur iOS, téléchargez-la directement depuis l\'[App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937). Sur Android, MLC ne la répertorie pas actuellement sur Google Play ; téléchargez l\'APK directement depuis les [propres publications GitHub de MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — cela nécessite d\'activer l\'installation depuis des sources inconnues, et la version Android dépend du support GPU OpenCL, confirmé fonctionnel sur certains appareils (comme certains modèles Samsung Galaxy) mais pas de manière fiable sur d\'autres (comme certains téléphones Google Pixel). Il n\'existe pas d\'application desktop packagée séparément ; sur desktop, MLC LLM s\'utilise via son paquet Python, son serveur REST ou son interface en ligne de commande, documentés sur [llm.mlc.ai](https://llm.mlc.ai). MLC Chat prend actuellement en charge uniquement le chat textuel — il ne prend pas officiellement en charge les modèles vision-langage (entrée d\'image) au moment de cet avis.',
        bullets: [
          'iOS : disponible directement sur l\'[App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937).',
          'Android : aucune fiche Google Play confirmée ; téléchargez l\'APK directement depuis les [publications GitHub de MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk).',
          'Android dépend du support GPU OpenCL — confirmé fonctionnel sur certains appareils, pas de manière fiable sur d\'autres.',
          'Desktop : pas d\'application packagée séparément ; utilisez directement le paquet Python, le serveur REST ou la CLI de MLC LLM.',
          'Licence : Apache-2.0, selon le dépôt [mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
          'Aucune prise en charge officielle des modèles vision-langage (entrée d\'image) au moment de cet avis — chat textuel uniquement.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Histoire : MLC LLM et la compilation d\'apprentissage automatique', anchor: 'history' },
      { label: 'Ce qui distingue MLC Chat', anchor: 'distinctive' },
      { label: 'Étapes de configuration réelles : iOS, Android et desktop', anchor: 'setup' },
      { label: 'Licence et modèles pris en charge', anchor: 'license-models' },
      { label: 'Pour quoi MLC Chat n\'est pas adapté', anchor: 'limitations' },
      { label: 'Alternatives et concurrents', anchor: 'alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict : le dernier article de cette série', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat est une application de chat gratuite, sous licence Apache-2.0, construite sur le compilateur MLC LLM, qui exécute de grands modèles de langage localement sur iOS (via l\'App Store), Android (via un APK directement téléchargeable) et desktop (via les interfaces Python/REST/CLI de MLC LLM), en utilisant une compilation sur l\'appareil accélérée par GPU plutôt qu\'un environnement d\'exécution générique, et qui ne prend pas officiellement en charge les modèles vision-langage au moment de cet avis.',
          },
          {
            type: 'plain-terms',
            text: 'MLC Chat est une application gratuite qui vous permet de discuter avec des modèles d\'IA directement sur votre téléphone ou votre ordinateur sans connexion internet, en compilant ces modèles spécifiquement pour la puce graphique de votre appareil — cet avis couvre les vrais liens de téléchargement, les étapes de configuration, et où elle fonctionne bien ou moins bien.',
          },
        ],
        items: [
          'iOS : disponible directement sur l\'App Store ; Android : aucune fiche Google Play confirmée, téléchargez l\'APK directement depuis les publications GitHub de MLC.',
          'Caractéristique distinctive : les modèles sont compilés à l\'avance pour une cible matérielle spécifique (Metal, OpenCL, Vulkan, CUDA, ROCm) via la compilation d\'apprentissage automatique, plutôt qu\'exécutés via un interpréteur générique.',
          'Licence : Apache-2.0, selon le dépôt GitHub mlc-ai/mlc-llm.',
          'Aucune prise en charge officielle des modèles vision-langage (entrée d\'image) au moment de cet avis — chat textuel uniquement, avec des solutions de contournement communautaires existantes mais non officiellement prises en charge.',
          'La version Android dépend du support GPU OpenCL, confirmé fonctionnel sur certains appareils mais pas de manière fiable sur d\'autres.',
          'Ceci est le dernier article de la série de PromptQuorum en onze articles sur les outils d\'IA locale.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se concentre spécifiquement sur l\'application MLC Chat. Pour l\'explication technique plus approfondie du compilateur MLC LLM et de l\'environnement d\'exécution basé sur TVM en dessous, voir l\'article dédié de PromptQuorum [MLC LLM expliqué](/fr/power-local-llm/mlc-llm-explained), que cet avis ne duplique délibérément pas.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire : MLC LLM et la compilation d\'apprentissage automatique',
        content: [
          '**MLC Chat est construit sur [MLC LLM](https://github.com/mlc-ai/mlc-llm)**, décrit dans le dépôt propre du projet comme un "moteur de déploiement universel de LLM avec compilation ML" qui permet de développer, optimiser et déployer des modèles d\'IA sur plusieurs plateformes. La documentation propre du dépôt MLC LLM cite des recherches fondatrices d\'[Apache TVM](https://tvm.apache.org) (2018) et des travaux de compilation connexes (TensorIR, MetaSchedule) comme sa filiation technique — TVM étant la pile de compilateurs d\'apprentissage profond sur laquelle le projet MLC construit ses techniques de compilation d\'apprentissage automatique.',
          '**La distinction entre "MLC LLM" et "MLC Chat" compte et est souvent floue.** MLC LLM est le compilateur et le moteur d\'exécution sous-jacents — ce que PromptQuorum couvre en profondeur dans [MLC LLM expliqué](/fr/power-local-llm/mlc-llm-explained). MLC Chat est l\'application grand public construite par-dessus, packagée spécifiquement pour iOS et Android, qui permet à un utilisateur non technique de télécharger un modèle et de commencer à discuter sans toucher directement au compilateur.',
          '**MLC Chat est maintenu par la même équipe MLC AI** (organisation GitHub [mlc-ai](https://github.com/mlc-ai)) qui maintient le projet MLC LLM lui-même, et il est sous licence Apache-2.0, la même licence que le dépôt MLC LLM sous-jacent.',
        ],
        faqs: [
          {
            q: 'MLC Chat est-il la même chose que MLC LLM ?',
            a: 'Non, bien qu\'ils soient étroitement liés et souvent utilisés de manière interchangeable. MLC LLM est le compilateur et le moteur d\'exécution sous-jacents qui compilent les modèles pour une inférence accélérée par GPU sur l\'appareil, sur plusieurs plateformes — voir l\'article dédié de PromptQuorum, MLC LLM expliqué. MLC Chat est l\'application grand public, construite par la même équipe par-dessus ce moteur, packagée spécifiquement pour iOS et Android.',
          },
        ],
      },
      distinctive: {
        id: 'distinctive',
        title: 'Ce qui distingue MLC Chat',
        content: [
          'La plupart des applications de chat LLM locales s\'appuient sur un environnement d\'exécution d\'inférence unique et généraliste (comme llama.cpp) qui interprète un fichier de modèle au moment de l\'exécution sur le matériel qu\'il trouve. Le moteur MLC LLM sous-jacent de MLC Chat adopte une approche différente : il compile un modèle à l\'avance pour une cible matérielle spécifique à l\'aide de techniques de compilation d\'apprentissage automatique, puis livre cet artefact compilé pour qu\'il s\'exécute sur l\'appareil cible.',
          'Selon la documentation propre du projet MLC LLM, cette approche de compilation cible un large éventail de backends GPU selon la plateforme : Metal pour Apple Silicon et les GPU mobiles Apple, OpenCL pour les GPU Android (Adreno et Mali), et Vulkan, CUDA ou ROCm sur desktop Linux et Windows. Le projet documente également un support WebGPU et WebAssembly pour exécuter des modèles dans un navigateur, et MLCEngine — le composant d\'exécution — expose une API compatible OpenAI via des interfaces REST, Python, JavaScript, iOS et Android.',
          'La conséquence pratique spécifiquement pour MLC Chat : comme la compilation sous-jacente est spécifique à la cible matérielle, l\'application peut atteindre une accélération GPU sur des puces mobiles qu\'un environnement d\'exécution plus générique pourrait ne pas pleinement exploiter — au prix de la nécessité d\'une version compilée pour chaque combinaison matériel/modèle spécifique, plutôt qu\'un binaire universel unique qui fonctionne partout.',
        ],
        faqs: [
          {
            q: 'Qu\'est-ce qui différencie MLC Chat d\'un exécuteur LLM local générique ?',
            a: 'Le moteur MLC LLM sous-jacent de MLC Chat compile un modèle à l\'avance pour une cible matérielle spécifique (Metal, OpenCL, Vulkan, CUDA ou ROCm selon la plateforme) via la compilation d\'apprentissage automatique, plutôt que d\'interpréter le modèle de manière générique au moment de l\'exécution. Cela est documenté dans les propres supports du projet MLC LLM comme son approche distinctive centrale.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Étapes de configuration réelles : iOS, Android et desktop',
        content: [
          'Ces étapes reflètent ce que PromptQuorum a vérifié directement — la présence réelle de MLC Chat sur l\'App Store, le canal de distribution APK Android, et le parcours de démarrage rapide documenté de MLC LLM pour l\'usage desktop.',
        ],
        numberedItems: [
          {
            title: 'iOS : téléchargez depuis l\'App Store.',
            whyItMatters: 'MLC Chat est répertorié directement sur l\'[App Store d\'Apple](https://apps.apple.com/us/app/mlc-chat/id6448482937) — une installation standard, sans sideloading requis.',
          },
          {
            title: 'Android : téléchargez l\'APK directement depuis GitHub.',
            whyItMatters: 'MLC ne maintient actuellement pas de fiche confirmée sur le Google Play Store. La version Android est distribuée sous forme de téléchargement APK direct depuis les [propres publications GitHub de MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk), ce qui nécessite d\'activer "l\'installation depuis des sources inconnues" dans les paramètres Android.',
          },
          {
            title: 'Vérifiez la compatibilité GPU Android avant de vous y fier.',
            whyItMatters: 'La version Android dépend du support GPU OpenCL. Cela a été confirmé fonctionnel sur certains appareils (comme certains modèles Samsung Galaxy) mais pas de manière fiable sur d\'autres (comme certains modèles Google Pixel au support OpenCL limité) — vérifiez votre appareil spécifique avant de supposer une accélération GPU complète.',
          },
          {
            title: 'Desktop : utilisez directement le paquet Python, le serveur REST ou la CLI de MLC LLM.',
            whyItMatters: 'Il n\'existe pas d\'application desktop MLC Chat packagée séparément. Les utilisateurs desktop installent le paquet Python `mlc-llm` dans un environnement conda et interagissent via l\'API `chat.completions.create()` de `MLCEngine`, un serveur REST, ou la ligne de commande, selon la [documentation de démarrage rapide de MLC LLM](https://llm.mlc.ai/docs/get_started/quick_start.html).',
          },
          {
            title: 'Choisissez un modèle compilé adapté à votre matériel.',
            whyItMatters: 'La documentation de démarrage rapide de MLC LLM démontre le flux de travail avec `Llama-3-8B-Instruct-q4f16_1-MLC`, une version quantifiée en int4, et documente un besoin d\'au moins 6 Go de VRAM libre pour celle-ci — une base utile pour évaluer les exigences matérielles avant de s\'engager sur un modèle plus grand.',
          },
        ],
      },
      licenseModels: {
        id: 'license-models',
        title: 'Licence et modèles pris en charge',
        content: [
          '**Licence : Apache-2.0.** L\'application MLC Chat et le dépôt MLC LLM sous-jacent sont tous deux publiés sous licence Apache-2.0, confirmée directement sur le [dépôt GitHub mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
          '**La prise en charge des modèles est plus large que n\'importe quel exemple de démarrage rapide isolé.** La propre documentation de démarrage rapide de MLC LLM démontre le flux de travail avec `Llama-3-8B-Instruct-q4f16_1-MLC`, mais la bibliothèque de modèles du projet s\'étend à d\'autres familles de modèles à poids ouverts compilées pour ses cibles matérielles prises en charge — PromptQuorum recommande de consulter directement la [propre liste de modèles de MLC LLM](https://llm.mlc.ai) pour l\'ensemble actuel, car la disponibilité des modèles compilés change à mesure que de nouvelles versions sortent, plutôt que de se fier à une liste unique mise en cache.',
          '**Aucune prise en charge officielle des modèles vision-langage.** Au moment de cet avis, MLC LLM ne prend pas officiellement en charge les modèles vision-langage (entrée d\'image) — il ne fournit pas de modules intégrés pour traiter conjointement les entrées d\'image et de texte dans l\'application de chat. Des projets communautaires existent qui adaptent le code de modèles vision-langage pour fonctionner avec le pipeline de compilation de MLC LLM, mais ceux-ci ne sont pas officiellement maintenus ou pris en charge par l\'équipe MLC AI, et PromptQuorum n\'a pas vérifié leur fiabilité actuelle.',
        ],
        faqs: [
          {
            q: 'Quelle licence utilise MLC Chat ?',
            a: 'Apache-2.0, confirmée directement sur le dépôt GitHub mlc-ai/mlc-llm, qui couvre à la fois le moteur MLC LLM et l\'application MLC Chat construite par-dessus.',
          },
          {
            q: 'MLC Chat prend-il en charge des modèles de vision comme LLaVA ?',
            a: 'Non, pas officiellement, au moment de cet avis. MLC LLM ne fournit pas de prise en charge officielle des modèles vision-langage (entrée d\'image). Des solutions de contournement construites par la communauté existent qui adaptent le code de modèles vision-langage au pipeline de MLC LLM, mais elles sont officieuses et leur fiabilité actuelle n\'a pas été vérifiée pour cet avis. Pour des modèles locaux capables de vision, voir plutôt l\'avis LLaVA, l\'avis Idefics, ou le guide des modèles de vision Ollama de PromptQuorum.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Pour quoi MLC Chat n\'est pas adapté',
        content: [
          'MLC Chat est une application de chat sur l\'appareil, multiplateforme, réellement utile, mais c\'est le mauvais choix dans les situations suivantes :',
        ],
        items: [
          '**Les utilisateurs desktop qui veulent la configuration la plus simple possible.** MLC Chat n\'a pas d\'application desktop packagée — l\'usage sur desktop signifie installer un paquet Python et travailler avec un serveur REST, une CLI, ou une API Python. Les utilisateurs qui veulent une expérience desktop en un clic trouveront [Ollama](/fr/power-local-llm/ollama-vision-models-review) ou [LM Studio](https://lmstudio.ai) nettement plus pratiques, même si l\'avantage de compilation GPU mobile de MLC Chat ne s\'applique pas de la même manière sur desktop.',
          '**Les tâches de vision ou d\'entrée d\'image.** MLC LLM ne prend pas officiellement en charge les modèles vision-langage. Si votre cas d\'usage implique l\'exécution d\'un modèle capable de regarder des images, voir plutôt l\'[avis LLaVA](/fr/power-local-llm/llava-review), l\'[avis Idefics](/fr/power-local-llm/idefics-review), ou le [guide des modèles de vision Ollama](/fr/power-local-llm/ollama-vision-models-review) de PromptQuorum.',
          '**Les modèles disponibles les plus volumineux.** Le matériel mobile impose de réelles contraintes — le propre exemple de démarrage rapide de MLC LLM nécessite au moins 6 Go de VRAM libre pour un modèle de 8B paramètres en quantification int4, et les GPU et la mémoire des téléphones sont plus limités qu\'un GPU desktop. Les utilisateurs souhaitant exécuter localement les plus grands modèles à poids ouverts disponibles sont mieux servis par des outils desktop offrant plus de marge de VRAM.',
          '**Les utilisateurs Android sur du matériel au support OpenCL limité.** L\'accélération GPU de la version Android dépend d\'OpenCL, confirmée fonctionnelle sur certains appareils mais pas de manière fiable sur d\'autres — vérifiez votre modèle d\'appareil spécifique avant de supposer une expérience fluide.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives et concurrents',
        itemHeadings: true,
        columns: ['Outil', 'Meilleur usage', 'Licence'],
        rows: [
          {
            'Outil': '[Ollama](/fr/power-local-llm/ollama-vision-models-review)',
            'Meilleur usage': 'Simplicité orientée desktop via `ollama pull`/`ollama run` ; prise en charge de modèles de vision plus large que MLC Chat',
            'Licence': 'MIT',
          },
          {
            'Outil': '[LM Studio](https://lmstudio.ai)',
            'Meilleur usage': 'Expérience desktop orientée GUI avec un navigateur de modèles intégré',
            'Licence': 'Gratuit, application propriétaire',
          },
          {
            'Outil': '[llama.cpp](https://github.com/ggml-org/llama.cpp) directement',
            'Meilleur usage': 'Contrôle de bas niveau maximal sur l\'inférence sans étape de compilation préalable',
            'Licence': 'MIT',
          },
          {
            'Outil': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Meilleur usage': 'Une autre application mobile de LLM local dédiée ; voir l\'avis propre de PromptQuorum pour une comparaison directe',
            'Licence': 'Varie — voir l\'avis PocketPal AI de PromptQuorum',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qu\'est-ce que MLC Chat ?',
            a: 'MLC Chat est une application de chat gratuite et multiplateforme pour exécuter de grands modèles de langage directement sur votre propre appareil, construite par l\'équipe MLC AI au-dessus de son compilateur et environnement d\'exécution MLC LLM, et sous licence Apache-2.0.',
          },
          {
            q: 'Où puis-je télécharger MLC Chat ?',
            a: 'Sur iOS, téléchargez-la directement depuis l\'App Store. Sur Android, MLC ne la répertorie pas actuellement sur Google Play — téléchargez l\'APK directement depuis les propres publications GitHub de MLC, ce qui nécessite d\'activer l\'installation depuis des sources inconnues. Sur desktop, il n\'existe pas d\'application packagée séparément ; utilisez plutôt le paquet Python, le serveur REST, ou l\'interface en ligne de commande de MLC LLM.',
          },
          {
            q: 'MLC Chat est-il gratuit ?',
            a: 'Oui. L\'application et le moteur MLC LLM sous-jacent sont publiés sous la licence open source Apache-2.0.',
          },
          {
            q: 'MLC Chat prend-il en charge les modèles de vision ?',
            a: 'Non, pas officiellement, au moment de cet avis. MLC LLM ne prend pas officiellement en charge les modèles vision-langage (entrée d\'image). Des solutions de contournement communautaires officieuses existent mais n\'ont pas été vérifiées pour cet avis.',
          },
          {
            q: 'Qu\'est-ce qui différencie MLC Chat d\'Ollama ou de llama.cpp ?',
            a: 'Le moteur MLC LLM sous-jacent de MLC Chat compile les modèles à l\'avance pour une cible matérielle spécifique (en utilisant des techniques issues de la filiation du compilateur Apache TVM) plutôt que d\'interpréter un modèle de manière générique au moment de l\'exécution, ce que le projet présente comme un avantage pour l\'accélération GPU spécifiquement sur les puces mobiles. Ollama et llama.cpp adoptent une approche d\'exécution plus généraliste et, dans le cas d\'Ollama, offrent actuellement une prise en charge plus large des modèles de vision.',
          },
          {
            q: 'S\'agit-il du dernier article de la série de PromptQuorum sur les outils d\'IA locale ?',
            a: 'Oui. Cet avis MLC Chat est le dernier article d\'une série de onze articles couvrant Whisper.cpp, faster-whisper, Piper TTS, Coqui TTS, XTTS v2, Bark, StyleTTS 2, LLaVA, les modèles de vision Ollama, Idefics, et MLC Chat.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict : le dernier article de cette série',
        content:
          'MLC Chat tient une promesse réellement distinctive : un chat LLM sur l\'appareil, multiplateforme et accéléré par GPU, obtenu par compilation d\'apprentissage automatique plutôt qu\'un environnement d\'exécution universel, avec une présence réelle sur l\'App Store iOS et un APK Android directement téléchargeable, le tout sous une licence Apache-2.0 permissive. Ce n\'est cependant pas le choix le plus pratique pour les utilisateurs desktop — ce flux de travail signifie un paquet Python et une interface REST/CLI plutôt qu\'une application packagée — et il ne prend actuellement pas du tout en charge les modèles vision-langage, officiellement. Choisissez MLC Chat spécifiquement pour le chat mobile sur l\'appareil, là où son approche compilée et spécifique à la cible matérielle porte ses fruits ; choisissez [Ollama](/fr/power-local-llm/ollama-vision-models-review) ou [LM Studio](https://lmstudio.ai) pour l\'expérience desktop la plus simple, et les avis [LLaVA](/fr/power-local-llm/llava-review) ou [Idefics](/fr/power-local-llm/idefics-review) de PromptQuorum plutôt pour des modèles locaux capables de vision. Pour la vision technique plus approfondie du compilateur derrière MLC Chat, voir [MLC LLM expliqué](/fr/power-local-llm/mlc-llm-explained) de PromptQuorum. Cet avis clôt la série de PromptQuorum en onze articles sur les outils d\'IA locale — de la reconnaissance vocale (Whisper.cpp, faster-whisper) et la synthèse vocale (Piper, Coqui TTS, XTTS v2, Bark, StyleTTS 2) aux modèles vision-langage (LLaVA, modèles de vision Ollama, Idefics), jusqu\'à ce dernier article sur la compilation multiplateforme sur l\'appareil.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[MLC Chat sur l\'App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) — disponibilité iOS confirmée.',
          '[APK Android de MLC Chat](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — le canal de téléchargement Android direct, hébergé sur les propres publications GitHub de MLC.',
          '[mlc-ai/mlc-llm sur GitHub](https://github.com/mlc-ai/mlc-llm) — licence (Apache-2.0), support de plateformes, documentation de la filiation TVM.',
          '[Documentation de démarrage rapide de MLC LLM](https://llm.mlc.ai/docs/get_started/quick_start.html) — étapes de configuration desktop, modèle d\'exemple, exigence de VRAM.',
          '[Documentation du SDK Android de MLC LLM](https://llm.mlc.ai/docs/deploy/android.html) — dépendance OpenCL Android et remarques sur la compatibilité des appareils.',
          'Recherche de PromptQuorum sur la prise en charge des modèles vision-langage par MLC LLM, confirmant l\'absence de prise en charge officielle des VLM et l\'existence de solutions de contournement communautaires officieuses (par exemple MLC-VLM-template) au moment de cet avis.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[MLC LLM expliqué (2026)](/fr/power-local-llm/mlc-llm-explained) — l\'approfondissement technique du compilateur et de l\'environnement d\'exécution derrière MLC Chat.',
          '[Avis LLaVA (2026)](/fr/power-local-llm/llava-review) — un modèle local capable de vision, pour les cas d\'usage que MLC Chat ne prend pas officiellement en charge.',
          '[Avis Idefics (2026)](/fr/power-local-llm/idefics-review) — une autre option de modèle vision-langage ouvert.',
          '[Modèles de vision Ollama (2026)](/fr/power-local-llm/ollama-vision-models-review) — quels modèles de vision sont réellement téléchargeables via Ollama aujourd\'hui.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une autre application mobile de LLM local dédiée, pour comparaison directe.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Avis sur MLC Chat (2026) : l\'application mobile construite sur MLC LLM, évaluée honnêtement',
      description:
        'Avis MLC Chat 2026 : l\'application de chat mobile/desktop construite sur MLC LLM. Canaux de téléchargement réels App Store iOS et APK Android, étapes de configuration effectives, licence Apache-2.0, et limites honnêtes pour le chat IA sur l\'appareil.',
      url: 'https://promptquorum.com/fr/power-local-llm/mlc-chat-review',
      inLanguage: 'fr',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Utilisateurs et développeurs évaluant des applications de chat LLM sur l\'appareil pour mobile et desktop' },
      about: [
        { '@type': 'Thing', name: 'MLC Chat' },
        { '@type': 'Thing', name: 'MLC LLM' },
        { '@type': 'Thing', name: 'On-device inference' },
        { '@type': 'Thing', name: 'Machine learning compilation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/mlc-chat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Avis sur MLC Chat (2026)', item: 'https://promptquorum.com/fr/power-local-llm/mlc-chat-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/mlc-chat-review-hero-es.webp',
    title: 'Análisis de MLC Chat (2026): la app móvil construida sobre MLC LLM, evaluada con honestidad',
    seoTitle: 'Análisis de MLC Chat 2026: iOS, Android y configuración multiplataforma',
    intro:
      'MLC Chat es la aplicación de chat orientada al consumidor construida sobre el compilador y runtime [MLC LLM](https://github.com/mlc-ai/mlc-llm) — el proyecto que PromptQuorum cubre en profundidad en [MLC LLM explicado](/es/power-local-llm/mlc-llm-explained). Este análisis se centra específicamente en la experiencia de la app: canales de descarga reales, pasos de configuración reales, con qué modelos viene, y limitaciones honestas, en lugar de volver a explicar la tecnología de compilación subyacente. Si quieres la explicación técnica más profunda de cómo MLC LLM compila modelos para inferencia acelerada por GPU en distintas plataformas, lee primero [MLC LLM explicado](/es/power-local-llm/mlc-llm-explained); este artículo asume ese contexto y se centra en la app en sí.',
    metaDescription:
      'Análisis de MLC Chat 2026: la app de chat móvil/de escritorio construida sobre MLC LLM. Canales reales de descarga en App Store de iOS y APK de Android, pasos de configuración reales, licencia Apache-2.0 y limitaciones honestas para el chat de IA en el dispositivo.',
    twitterDescription:
      'Análisis de MLC Chat 2026: la app de chat para el consumidor construida sobre el compilador MLC LLM. Canales de descarga reales (App Store de iOS, APK de Android), pasos de configuración reales, y una mirada honesta a dónde encaja y dónde no. Último artículo de la serie de PromptQuorum sobre herramientas de IA local.',
    audience:
      'Usuarios y desarrolladores que deciden si usar MLC Chat para chat de IA en el dispositivo en teléfonos o escritorio, y que quieren una imagen clara de la experiencia de la app separada de la tecnología del compilador MLC LLM subyacente.',
    readTime: '10 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'MLC Chat',
    targetKeywords: [
      'análisis mlc chat',
      'app mlc chat',
      'mlc chat ios',
      'mlc chat android',
      'configuración mlc chat',
      'app mlc llm',
      'app llm en el dispositivo',
      'mlc chat vs ollama',
    ],
    current_models_mentioned: ['Llama 3', 'MLC LLM', 'Ollama', 'LM Studio', 'PocketPal AI'],
    current_hardware_mentioned: ['iOS', 'Android', 'NVIDIA GPU', 'AMD GPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**MLC Chat es una app de chat gratuita y multiplataforma para ejecutar modelos de lenguaje grandes directamente en tu propio dispositivo**, construida por el equipo de MLC AI sobre su compilador y runtime [MLC LLM](https://github.com/mlc-ai/mlc-llm), publicada bajo la licencia Apache-2.0. Está disponible en la [App Store de iOS](https://apps.apple.com/us/app/mlc-chat/id6448482937) y como [APK de Android](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) descargable directamente desde los propios lanzamientos de GitHub de MLC; el uso en escritorio se realiza mediante las interfaces Python, REST y CLI de MLC LLM en lugar de una app de escritorio empaquetada por separado. Su característica distintiva es la inferencia acelerada por GPU en el dispositivo, lograda mediante compilación de aprendizaje automático — compilar un modelo por adelantado para un objetivo de hardware específico (Metal en GPU de Apple, OpenCL en GPU de Android, Vulkan/CUDA/ROCm en escritorio) — en lugar de depender de un único runtime genérico. Al momento de este análisis, MLC Chat no admite oficialmente modelos de visión-lenguaje (entrada de imagen). Para la explicación técnica más profunda de cómo funciona el compilador subyacente, consulta [MLC LLM explicado](/es/power-local-llm/mlc-llm-explained) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: '¿Qué es MLC Chat y cómo lo descargo y configuro realmente?',
        answer:
          'MLC Chat es una app de chat gratuita que ejecuta modelos de lenguaje grandes localmente en tu dispositivo, construida sobre el compilador y runtime MLC LLM del equipo de MLC AI, y licenciada bajo Apache-2.0. En iOS, descárgala directamente desde la [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937). En Android, MLC no la incluye actualmente en Google Play; descarga el APK directamente desde los [propios lanzamientos de GitHub de MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — esto requiere habilitar la instalación desde fuentes desconocidas, y la versión de Android depende del soporte de GPU OpenCL, confirmado funcional en algunos dispositivos (como ciertos modelos Samsung Galaxy) pero no de forma fiable en otros (como algunos modelos Google Pixel). No existe una app de escritorio empaquetada por separado; en escritorio, MLC LLM se usa a través de su paquete de Python, un servidor REST, o su interfaz de línea de comandos, documentados en [llm.mlc.ai](https://llm.mlc.ai). MLC Chat actualmente solo admite chat basado en texto — no admite oficialmente modelos de visión-lenguaje (entrada de imagen) al momento de este análisis.',
        bullets: [
          'iOS: disponible directamente en la [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937).',
          'Android: sin listado confirmado en Google Play; descarga el APK directamente desde los [lanzamientos de GitHub de MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk).',
          'Android depende del soporte de GPU OpenCL — confirmado funcional en algunos dispositivos, no de forma fiable en otros.',
          'Escritorio: sin app empaquetada por separado; usa directamente el paquete de Python, el servidor REST o la CLI de MLC LLM.',
          'Licencia: Apache-2.0, según el repositorio [mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
          'Sin soporte oficial para modelos de visión-lenguaje (entrada de imagen) al momento de este análisis — solo chat de texto.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Historia: MLC LLM y la compilación de aprendizaje automático', anchor: 'history' },
      { label: 'Qué hace distintivo a MLC Chat', anchor: 'distinctive' },
      { label: 'Pasos de configuración reales: iOS, Android y escritorio', anchor: 'setup' },
      { label: 'Licencia y qué modelos admite', anchor: 'license-models' },
      { label: 'Para qué no es bueno MLC Chat', anchor: 'limitations' },
      { label: 'Alternativas y competidores', anchor: 'alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto: el último artículo de esta serie', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat es una app de chat gratuita, con licencia Apache-2.0, construida sobre el compilador MLC LLM, que ejecuta modelos de lenguaje grandes localmente en iOS (vía App Store), Android (vía un APK descargable directamente) y escritorio (vía las interfaces Python/REST/CLI de MLC LLM), usando compilación en el dispositivo acelerada por GPU en lugar de un runtime genérico, y que no admite oficialmente modelos de visión-lenguaje al momento de este análisis.',
          },
          {
            type: 'plain-terms',
            text: 'MLC Chat es una app gratuita que te permite chatear con modelos de IA directamente en tu teléfono o computadora sin conexión a internet, compilando esos modelos específicamente para el chip gráfico de tu dispositivo — este análisis cubre los enlaces de descarga reales, los pasos de configuración, y dónde funciona bien y dónde no.',
          },
        ],
        items: [
          'iOS: disponible directamente en la App Store; Android: sin listado confirmado en Google Play, descarga el APK directamente desde los lanzamientos de GitHub de MLC.',
          'Característica distintiva: los modelos se compilan por adelantado para un objetivo de hardware específico (Metal, OpenCL, Vulkan, CUDA, ROCm) mediante compilación de aprendizaje automático, en lugar de ejecutarse a través de un intérprete genérico.',
          'Licencia: Apache-2.0, según el repositorio de GitHub mlc-ai/mlc-llm.',
          'Sin soporte oficial para modelos de visión-lenguaje (entrada de imagen) al momento de este análisis — solo chat de texto, con soluciones alternativas de la comunidad que existen pero no cuentan con soporte oficial.',
          'La versión de Android depende del soporte de GPU OpenCL, confirmado funcional en algunos dispositivos pero no de forma fiable en otros.',
          'Este es el último artículo de la serie de PromptQuorum de once artículos sobre herramientas de IA local.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se centra específicamente en la app MLC Chat. Para la explicación técnica más profunda del compilador MLC LLM y el runtime basado en TVM que hay detrás, consulta el artículo dedicado de PromptQuorum [MLC LLM explicado](/es/power-local-llm/mlc-llm-explained), que este análisis deliberadamente no duplica.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: MLC LLM y la compilación de aprendizaje automático',
        content: [
          '**MLC Chat está construido sobre [MLC LLM](https://github.com/mlc-ai/mlc-llm)**, descrito en el propio repositorio del proyecto como un "motor universal de despliegue de LLM con compilación de ML" que permite desarrollar, optimizar y desplegar modelos de IA en distintas plataformas. La propia documentación del repositorio de MLC LLM cita investigación fundacional de [Apache TVM](https://tvm.apache.org) (2018) y trabajos de compilación relacionados (TensorIR, MetaSchedule) como su linaje técnico — siendo TVM la pila de compiladores de aprendizaje profundo sobre la que el proyecto MLC construye sus técnicas de compilación de aprendizaje automático.',
          '**La distinción entre "MLC LLM" y "MLC Chat" importa y suele ser confusa.** MLC LLM es el compilador y motor de ejecución subyacente — lo que PromptQuorum cubre en profundidad en [MLC LLM explicado](/es/power-local-llm/mlc-llm-explained). MLC Chat es la aplicación orientada al consumidor construida encima, empaquetada específicamente para iOS y Android, que permite a un usuario no técnico descargar un modelo y empezar a chatear sin tocar directamente el compilador.',
          '**MLC Chat lo mantiene el mismo equipo de MLC AI** (organización de GitHub [mlc-ai](https://github.com/mlc-ai)) que mantiene el propio proyecto MLC LLM, y está licenciado bajo Apache-2.0, la misma licencia que el repositorio de MLC LLM subyacente.',
        ],
        faqs: [
          {
            q: '¿MLC Chat es lo mismo que MLC LLM?',
            a: 'No, aunque están estrechamente relacionados y a menudo se usan de forma intercambiable. MLC LLM es el compilador y motor de ejecución subyacente que compila modelos para inferencia acelerada por GPU en el dispositivo en distintas plataformas — consulta el artículo dedicado de PromptQuorum, MLC LLM explicado. MLC Chat es la app orientada al consumidor, construida por el mismo equipo sobre ese motor, empaquetada específicamente para iOS y Android.',
          },
        ],
      },
      distinctive: {
        id: 'distinctive',
        title: 'Qué hace distintivo a MLC Chat',
        content: [
          'La mayoría de las apps de chat con LLM locales dependen de un único runtime de inferencia de propósito general (como llama.cpp) que interpreta un archivo de modelo en tiempo de ejecución sobre el hardware que encuentre. El motor MLC LLM subyacente de MLC Chat adopta un enfoque distinto: compila un modelo por adelantado para un objetivo de hardware específico usando técnicas de compilación de aprendizaje automático, y luego entrega ese artefacto compilado para ejecutarse en el dispositivo objetivo.',
          'Según la propia documentación del proyecto MLC LLM, este enfoque de compilación apunta a una amplia gama de backends de GPU según la plataforma: Metal para Apple Silicon y GPU móviles de Apple, OpenCL para GPU de Android (Adreno y Mali), y Vulkan, CUDA o ROCm en escritorio Linux y Windows. El proyecto también documenta soporte de WebGPU y WebAssembly para ejecutar modelos en un navegador, y MLCEngine — el componente de runtime — expone una API compatible con OpenAI a través de interfaces REST, Python, JavaScript, iOS y Android.',
          'El resultado práctico específicamente para MLC Chat: como la compilación subyacente es específica del objetivo de hardware, la app puede lograr aceleración por GPU en chips móviles que un runtime más genérico podría no aprovechar completamente — a costa de necesitar una compilación específica para cada combinación de hardware/modelo, en lugar de un único binario universal que funcione en todas partes.',
        ],
        faqs: [
          {
            q: '¿Qué diferencia a MLC Chat de un ejecutor de LLM local genérico?',
            a: 'El motor MLC LLM subyacente de MLC Chat compila un modelo por adelantado para un objetivo de hardware específico (Metal, OpenCL, Vulkan, CUDA o ROCm según la plataforma) mediante compilación de aprendizaje automático, en lugar de interpretar el modelo de forma genérica en tiempo de ejecución. Esto está documentado en los propios materiales del proyecto MLC LLM como su enfoque distintivo central.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Pasos de configuración reales: iOS, Android y escritorio',
        content: [
          'Estos pasos reflejan lo que PromptQuorum verificó directamente — la presencia real de MLC Chat en la App Store, el canal de distribución de APK de Android, y la ruta de inicio rápido documentada de MLC LLM para uso en escritorio.',
        ],
        numberedItems: [
          {
            title: 'iOS: descárgala desde la App Store.',
            whyItMatters: 'MLC Chat aparece listada directamente en la [App Store de Apple](https://apps.apple.com/us/app/mlc-chat/id6448482937) — una instalación estándar, sin necesidad de sideloading.',
          },
          {
            title: 'Android: descarga el APK directamente desde GitHub.',
            whyItMatters: 'MLC actualmente no mantiene un listado confirmado en Google Play Store. La versión de Android se distribuye como una descarga directa de APK desde los [propios lanzamientos de GitHub de MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk), lo que requiere habilitar "instalar desde fuentes desconocidas" en la configuración de Android.',
          },
          {
            title: 'Verifica la compatibilidad de GPU en Android antes de depender de ella.',
            whyItMatters: 'La versión de Android depende del soporte de GPU OpenCL. Esto se ha confirmado funcional en algunos dispositivos (como ciertos modelos Samsung Galaxy) pero no de forma fiable en otros (como algunos modelos Google Pixel con soporte limitado de OpenCL) — verifica tu dispositivo específico antes de asumir aceleración total por GPU.',
          },
          {
            title: 'Escritorio: usa directamente el paquete de Python, el servidor REST o la CLI de MLC LLM.',
            whyItMatters: 'No existe una aplicación de escritorio MLC Chat empaquetada por separado. Los usuarios de escritorio instalan el paquete de Python `mlc-llm` en un entorno conda e interactúan mediante la API `chat.completions.create()` de `MLCEngine`, un servidor REST, o la línea de comandos, según la [documentación de inicio rápido de MLC LLM](https://llm.mlc.ai/docs/get_started/quick_start.html).',
          },
          {
            title: 'Elige un modelo compilado que coincida con tu hardware.',
            whyItMatters: 'La documentación de inicio rápido de MLC LLM demuestra el flujo de trabajo usando `Llama-3-8B-Instruct-q4f16_1-MLC`, una compilación cuantizada en int4, y documenta la necesidad de al menos 6 GB de VRAM libre para ella — una base útil para estimar los requisitos de hardware antes de optar por un modelo más grande.',
          },
        ],
      },
      licenseModels: {
        id: 'license-models',
        title: 'Licencia y qué modelos admite',
        content: [
          '**Licencia: Apache-2.0.** Tanto la app MLC Chat como el repositorio de MLC LLM subyacente se publican bajo la licencia Apache-2.0, confirmada directamente en el [repositorio de GitHub mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
          '**El soporte de modelos es más amplio que cualquier ejemplo de inicio rápido por sí solo.** La propia documentación de inicio rápido de MLC LLM demuestra el flujo de trabajo con `Llama-3-8B-Instruct-q4f16_1-MLC`, pero la biblioteca de modelos del proyecto se extiende a otras familias de modelos de peso abierto compiladas para sus objetivos de hardware admitidos — PromptQuorum recomienda consultar directamente la [propia lista de modelos de MLC LLM](https://llm.mlc.ai) para el conjunto actual, ya que la disponibilidad de modelos compilados cambia a medida que se lanzan nuevas versiones, en lugar de depender de una única lista guardada en caché.',
          '**Sin soporte oficial para modelos de visión-lenguaje.** Al momento de este análisis, MLC LLM no admite oficialmente modelos de visión-lenguaje (entrada de imagen) — no proporciona módulos integrados para procesar entradas de imagen y texto conjuntamente en la app de chat. Existen proyectos de la comunidad que adaptan código de modelos de visión-lenguaje para funcionar con el pipeline de compilación de MLC LLM, pero estos no cuentan con mantenimiento ni soporte oficial del equipo de MLC AI, y PromptQuorum no verificó su fiabilidad actual.',
        ],
        faqs: [
          {
            q: '¿Qué licencia usa MLC Chat?',
            a: 'Apache-2.0, confirmada directamente en el repositorio de GitHub mlc-ai/mlc-llm, que cubre tanto el motor MLC LLM como la app MLC Chat construida sobre él.',
          },
          {
            q: '¿MLC Chat admite modelos de visión como LLaVA?',
            a: 'No, no oficialmente, al momento de este análisis. MLC LLM no proporciona soporte oficial para modelos de visión-lenguaje (entrada de imagen). Existen soluciones alternativas creadas por la comunidad que adaptan código de modelos de visión-lenguaje al pipeline de MLC LLM, pero son extraoficiales y su fiabilidad actual no se verificó para este análisis. Para modelos locales capaces de visión, consulta en su lugar el análisis de LLaVA, el análisis de Idefics, o la guía de modelos de visión de Ollama de PromptQuorum.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para qué no es bueno MLC Chat',
        content: [
          'MLC Chat es una app de chat en el dispositivo, multiplataforma, genuinamente útil, pero es la elección equivocada en las siguientes situaciones:',
        ],
        items: [
          '**Usuarios de escritorio que quieren la configuración más sencilla posible.** MLC Chat no tiene una aplicación de escritorio empaquetada — el uso en escritorio implica instalar un paquete de Python y trabajar con un servidor REST, una CLI, o una API de Python. Los usuarios que quieran una experiencia de escritorio de un solo clic encontrarán [Ollama](/es/power-local-llm/ollama-vision-models-review) o [LM Studio](https://lmstudio.ai) notablemente más cómodos, aunque la ventaja de compilación de GPU móvil de MLC Chat no aplique de la misma manera en escritorio.',
          '**Tareas de visión o entrada de imagen.** MLC LLM no admite oficialmente modelos de visión-lenguaje. Si tu caso de uso implica ejecutar un modelo que pueda mirar imágenes, consulta en su lugar el [análisis de LLaVA](/es/power-local-llm/llava-review), el [análisis de Idefics](/es/power-local-llm/idefics-review), o la [guía de modelos de visión de Ollama](/es/power-local-llm/ollama-vision-models-review) de PromptQuorum.',
          '**Los modelos disponibles más grandes.** El hardware móvil impone limitaciones reales — el propio ejemplo de inicio rápido de MLC LLM necesita al menos 6 GB de VRAM libre para un modelo de 8B parámetros con cuantización int4, y las GPU y la memoria de los teléfonos son más limitadas que una GPU de escritorio. Los usuarios que quieran ejecutar localmente los modelos de peso abierto más grandes disponibles estarán mejor atendidos con herramientas de escritorio con más margen de VRAM.',
          '**Usuarios de Android con hardware de soporte OpenCL limitado.** La aceleración por GPU de la versión de Android depende de OpenCL, confirmada funcional en algunos dispositivos pero no de forma fiable en otros — verifica tu modelo de dispositivo específico antes de asumir una experiencia fluida.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas y competidores',
        itemHeadings: true,
        columns: ['Herramienta', 'Mejor uso', 'Licencia'],
        rows: [
          {
            'Herramienta': '[Ollama](/es/power-local-llm/ollama-vision-models-review)',
            'Mejor uso': 'Simplicidad orientada a escritorio mediante `ollama pull`/`ollama run`; soporte de modelos de visión más amplio que MLC Chat',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[LM Studio](https://lmstudio.ai)',
            'Mejor uso': 'Experiencia de escritorio orientada a GUI con un navegador de modelos integrado',
            'Licencia': 'Gratuito, aplicación propietaria',
          },
          {
            'Herramienta': '[llama.cpp](https://github.com/ggml-org/llama.cpp) directamente',
            'Mejor uso': 'Máximo control de bajo nivel sobre la inferencia sin un paso de compilación previa',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Mejor uso': 'Otra app móvil dedicada de LLM local; consulta el propio análisis de PromptQuorum para una comparación directa',
            'Licencia': 'Varía — consulta el análisis de PocketPal AI de PromptQuorum',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es MLC Chat?',
            a: 'MLC Chat es una app de chat gratuita y multiplataforma para ejecutar modelos de lenguaje grandes directamente en tu propio dispositivo, construida por el equipo de MLC AI sobre su compilador y runtime MLC LLM, y licenciada bajo Apache-2.0.',
          },
          {
            q: '¿Dónde puedo descargar MLC Chat?',
            a: 'En iOS, descárgala directamente desde la App Store. En Android, MLC no la incluye actualmente en Google Play — descarga el APK directamente desde los propios lanzamientos de GitHub de MLC, lo que requiere habilitar la instalación desde fuentes desconocidas. En escritorio, no existe una app empaquetada por separado; usa en su lugar el paquete de Python, el servidor REST, o la interfaz de línea de comandos de MLC LLM.',
          },
          {
            q: '¿Es gratuito MLC Chat?',
            a: 'Sí. La app y el motor MLC LLM subyacente se publican bajo la licencia de código abierto Apache-2.0.',
          },
          {
            q: '¿MLC Chat admite modelos de visión?',
            a: 'No, no oficialmente, al momento de este análisis. MLC LLM no admite oficialmente modelos de visión-lenguaje (entrada de imagen). Existen soluciones alternativas extraoficiales de la comunidad, pero no se verificaron para este análisis.',
          },
          {
            q: '¿Qué diferencia a MLC Chat de Ollama o llama.cpp?',
            a: 'El motor MLC LLM subyacente de MLC Chat compila los modelos por adelantado para un objetivo de hardware específico (usando técnicas del linaje del compilador Apache TVM) en lugar de interpretar un modelo de forma genérica en tiempo de ejecución, algo que el proyecto presenta como una ventaja específicamente para la aceleración por GPU en chips móviles. Ollama y llama.cpp adoptan un enfoque de runtime más generalista y, en el caso de Ollama, ofrecen actualmente un soporte de modelos de visión más amplio.',
          },
          {
            q: '¿Es este el último artículo de la serie de PromptQuorum sobre herramientas de IA local?',
            a: 'Sí. Este análisis de MLC Chat es el último artículo de una serie de once que cubre Whisper.cpp, faster-whisper, Piper TTS, Coqui TTS, XTTS v2, Bark, StyleTTS 2, LLaVA, los modelos de visión de Ollama, Idefics y MLC Chat.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto: el último artículo de esta serie',
        content:
          'MLC Chat cumple una promesa genuinamente distintiva: chat con LLM en el dispositivo, multiplataforma y acelerado por GPU, logrado mediante compilación de aprendizaje automático en lugar de un runtime universal, con presencia real en la App Store de iOS y un APK de Android descargable directamente, todo bajo una licencia permisiva Apache-2.0. Sin embargo, no es la opción más cómoda para usuarios de escritorio — ese flujo de trabajo implica un paquete de Python y una interfaz REST/CLI en lugar de una app empaquetada — y actualmente no admite en absoluto modelos de visión-lenguaje, de forma oficial. Elige MLC Chat específicamente para chat móvil en el dispositivo, donde su enfoque compilado y específico del hardware objetivo da sus frutos; elige [Ollama](/es/power-local-llm/ollama-vision-models-review) o [LM Studio](https://lmstudio.ai) para la experiencia de escritorio más sencilla, y los análisis de [LLaVA](/es/power-local-llm/llava-review) o [Idefics](/es/power-local-llm/idefics-review) de PromptQuorum en su lugar para modelos locales capaces de visión. Para la imagen técnica más profunda del compilador detrás de MLC Chat, consulta [MLC LLM explicado](/es/power-local-llm/mlc-llm-explained) de PromptQuorum. Este análisis cierra la serie de PromptQuorum de once artículos sobre herramientas de IA local — desde el reconocimiento de voz (Whisper.cpp, faster-whisper) y la síntesis de voz (Piper, Coqui TTS, XTTS v2, Bark, StyleTTS 2) hasta los modelos de visión-lenguaje (LLaVA, modelos de visión de Ollama, Idefics), llegando a este último artículo sobre compilación multiplataforma en el dispositivo.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[MLC Chat en la App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) — disponibilidad en iOS confirmada.',
          '[APK de Android de MLC Chat](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — el canal de descarga directa de Android, alojado en los propios lanzamientos de GitHub de MLC.',
          '[mlc-ai/mlc-llm en GitHub](https://github.com/mlc-ai/mlc-llm) — licencia (Apache-2.0), soporte de plataformas, documentación del linaje TVM.',
          '[Documentación de inicio rápido de MLC LLM](https://llm.mlc.ai/docs/get_started/quick_start.html) — pasos de configuración en escritorio, modelo de ejemplo, requisito de VRAM.',
          '[Documentación del SDK de Android de MLC LLM](https://llm.mlc.ai/docs/deploy/android.html) — dependencia de OpenCL en Android y notas de compatibilidad de dispositivos.',
          'Investigación de PromptQuorum sobre el soporte de modelos de visión-lenguaje de MLC LLM, confirmando la ausencia de soporte oficial de VLM y la existencia de soluciones alternativas extraoficiales de la comunidad (por ejemplo, MLC-VLM-template) al momento de este análisis.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[MLC LLM explicado (2026)](/es/power-local-llm/mlc-llm-explained) — la inmersión técnica más profunda en el compilador y el runtime detrás de MLC Chat.',
          '[Análisis de LLaVA (2026)](/es/power-local-llm/llava-review) — un modelo local capaz de visión, para casos de uso que MLC Chat no admite oficialmente.',
          '[Análisis de Idefics (2026)](/es/power-local-llm/idefics-review) — otra opción de modelo de visión-lenguaje abierto.',
          '[Modelos de visión de Ollama (2026)](/es/power-local-llm/ollama-vision-models-review) — qué modelos de visión son realmente descargables mediante Ollama hoy.',
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — otra app móvil dedicada de LLM local, para comparación directa.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Análisis de MLC Chat (2026): la app móvil construida sobre MLC LLM, evaluada con honestidad',
      description:
        'Análisis de MLC Chat 2026: la app de chat móvil/de escritorio construida sobre MLC LLM. Canales reales de descarga en App Store de iOS y APK de Android, pasos de configuración reales, licencia Apache-2.0 y limitaciones honestas para el chat de IA en el dispositivo.',
      url: 'https://promptquorum.com/es/power-local-llm/mlc-chat-review',
      inLanguage: 'es',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Usuarios y desarrolladores que evalúan apps de chat con LLM en el dispositivo para móvil y escritorio' },
      about: [
        { '@type': 'Thing', name: 'MLC Chat' },
        { '@type': 'Thing', name: 'MLC LLM' },
        { '@type': 'Thing', name: 'On-device inference' },
        { '@type': 'Thing', name: 'Machine learning compilation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/mlc-chat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Análisis de MLC Chat (2026)', item: 'https://promptquorum.com/es/power-local-llm/mlc-chat-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/mlc-chat-review-hero-ja.webp',
    title: 'MLC Chat レビュー(2026):MLC LLM上に構築されたモバイルアプリを正直に評価する',
    seoTitle: 'MLC Chat レビュー2026:iOS、Android & クロスプラットフォームセットアップ',
    intro:
      'MLC Chatは、[MLC LLM](https://github.com/mlc-ai/mlc-llm)コンパイラとランタイムの上に構築された、一般ユーザー向けのチャットアプリだ——このプロジェクト自体はPromptQuorumの[MLC LLM解説](/ja/power-local-llm/mlc-llm-explained)で詳しく扱っている。本レビューは、基盤となるコンパイル技術を再度説明するのではなく、アプリ体験そのものに焦点を当てる:実際のダウンロード経路、実際のセットアップ手順、同梱されているモデル、そして正直な限界について扱う。MLC LLMがプラットフォーム横断でGPUアクセラレーテッド推論のためにモデルをどうコンパイルするかという、より深い技術的な全体像を知りたい場合は、先に[MLC LLM解説](/ja/power-local-llm/mlc-llm-explained)を読んでほしい。本記事はその文脈を前提とし、アプリ自体に焦点を絞る。',
    metaDescription:
      'MLC Chat レビュー2026:MLC LLM上に構築されたモバイル/デスクトップチャットアプリ。実際のiOS App StoreとAndroid APKのダウンロード経路、実際のセットアップ手順、Apache-2.0ライセンス、オンデバイスAIチャットの正直な限界。',
    twitterDescription:
      'MLC Chat レビュー2026:MLC LLMコンパイラ上に構築された一般ユーザー向けチャットアプリ。実際のダウンロード経路(iOS App Store、Android APK)、実際のセットアップ手順、そしてどこに向いていてどこに向いていないかの正直な考察。PromptQuorumのローカルAIツールレビューシリーズの最終回。',
    audience:
      'スマートフォンやデスクトップでのオンデバイスAIチャットにMLC Chatを使うべきか判断しようとしているユーザーや開発者で、基盤となるMLC LLMコンパイラ技術とは別に、アプリ体験そのものの明確な全体像を求める人。',
    readTime: '10分で読めます',
    educationalLevel: 'Beginner',
    primaryTerm: 'MLC Chat',
    targetKeywords: [
      'mlc chat レビュー',
      'mlc chat アプリ',
      'mlc chat ios',
      'mlc chat android',
      'mlc chat セットアップ',
      'mlc llm アプリ',
      'オンデバイス llm アプリ',
      'mlc chat vs ollama',
    ],
    current_models_mentioned: ['Llama 3', 'MLC LLM', 'Ollama', 'LM Studio', 'PocketPal AI'],
    current_hardware_mentioned: ['iOS', 'Android', 'NVIDIA GPU', 'AMD GPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**MLC Chatは、自分のデバイス上で直接大規模言語モデルを実行するための、無料でクロスプラットフォームなチャットアプリだ**。MLC AIチームが自社の[MLC LLM](https://github.com/mlc-ai/mlc-llm)コンパイラとランタイムの上に構築し、Apache-2.0ライセンスの下で公開している。[iOS App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)で利用可能なほか、MLC自身のGitHubリリースから直接ダウンロードできる[Android APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)としても提供されている。デスクトップでの利用は、独立したパッケージ化されたデスクトップアプリではなく、MLC LLMのPython、REST、CLIインターフェースを通じて行う。その際立った特徴は、機械学習コンパイルによって実現されるGPUアクセラレーテッドなオンデバイス推論だ——単一の汎用ランタイムに頼るのではなく、特定のハードウェアターゲット(AppleのGPU向けMetal、AndroidのGPU向けOpenCL、デスクトップ向けVulkan/CUDA/ROCm)向けにモデルを事前にコンパイルする。本レビュー時点で、MLC Chatはビジョン言語モデル(画像入力)を公式にはサポートしていない。基盤となるコンパイラの仕組みについてのより深い技術的説明は、PromptQuorumの[MLC LLM解説](/ja/power-local-llm/mlc-llm-explained)を参照してほしい。',
    quickAnswerTop: {
      en: {
        question: 'MLC Chatとは何か。実際にどうダウンロードしてセットアップすればよいか?',
        answer:
          'MLC ChatはMLC AIチームによるMLC LLMコンパイラとランタイムの上に構築された、デバイス上でローカルに大規模言語モデルを実行する無料のチャットアプリで、Apache-2.0の下でライセンスされている。iOSでは[App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)から直接ダウンロードできる。Androidでは、MLCは現在Google Playに掲載していない。[MLC自身のGitHubリリース](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)からAPKを直接ダウンロードする必要があり、「提供元不明のアプリ」のインストールを有効にする必要がある。またAndroid版はOpenCLのGPUサポートに依存しており、一部の端末(特定のSamsung Galaxyモデルなど)では動作が確認されているが、他の端末(一部のGoogle Pixelモデルなど)では確実に動作するとは限らない。独立したパッケージ化されたデスクトップアプリは存在しない。デスクトップでは、MLC LLMをPythonパッケージ、RESTサーバー、またはコマンドラインインターフェース経由で使用し、[llm.mlc.ai](https://llm.mlc.ai)に文書化されている。MLC Chatは現在テキストベースのチャットのみに対応しており、本レビュー時点でビジョン言語モデル(画像入力)は公式にはサポートしていない。',
        bullets: [
          'iOS:[App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)から直接利用可能。',
          'Android:Google Playへの掲載は確認されていない;[MLCのGitHubリリース](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)からAPKを直接ダウンロードする。',
          'AndroidはOpenCLのGPUサポートに依存しており、一部の端末では動作確認済みだが他では確実ではない。',
          'デスクトップ:独立したパッケージ化アプリはなし;MLC LLMのPythonパッケージ、RESTサーバー、CLIを直接使用する。',
          'ライセンス:[mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)リポジトリによればApache-2.0。',
          '本レビュー時点でビジョン言語モデル(画像入力)の公式サポートはなし——テキストチャットのみ。',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: '歴史:MLC LLMと機械学習コンパイル', anchor: 'history' },
      { label: 'MLC Chatを際立たせるもの', anchor: 'distinctive' },
      { label: '実際のセットアップ手順:iOS、Android、デスクトップ', anchor: 'setup' },
      { label: 'ライセンスと対応モデル', anchor: 'license-models' },
      { label: 'MLC Chatが向いていない用途', anchor: 'limitations' },
      { label: '代替ツールと競合', anchor: 'alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論:本シリーズの最終回', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC ChatはMLC LLMコンパイラ上に構築された無料でApache-2.0ライセンスのチャットアプリで、iOS(App Store経由)、Android(直接ダウンロード可能なAPK経由)、デスクトップ(MLC LLMのPython/REST/CLIインターフェース経由)で大規模言語モデルをローカルに実行し、汎用ランタイムではなくGPUアクセラレーテッドなオンデバイスコンパイルを用いており、本レビュー時点でビジョン言語モデルを公式にはサポートしていない。',
          },
          {
            type: 'plain-terms',
            text: 'MLC Chatは、そのモデルをデバイスのグラフィックチップ専用にコンパイルすることで、インターネット接続なしにスマートフォンやパソコン上で直接AIモデルとチャットできる無料アプリだ——本レビューは実際のダウンロードリンク、セットアップ手順、そしてどこでうまく機能しどこでそうでないかを扱う。',
          },
        ],
        items: [
          'iOS:App Storeから直接利用可能;Android:Google Playへの掲載は確認されておらず、MLCのGitHubリリースからAPKを直接ダウンロードする。',
          '際立った特徴:モデルは汎用インタープリターを通じて動作するのではなく、機械学習コンパイルによって特定のハードウェアターゲット(Metal、OpenCL、Vulkan、CUDA、ROCm)向けに事前にコンパイルされる。',
          'ライセンス:mlc-ai/mlc-llm GitHubリポジトリによればApache-2.0。',
          '本レビュー時点でビジョン言語モデル(画像入力)の公式サポートはなし——テキストチャットのみで、コミュニティによる非公式な回避策は存在するが公式にはサポートされていない。',
          'Android版はOpenCLのGPUサポートに依存しており、一部の端末では動作確認済みだが他では確実ではない。',
          'これはPromptQuorumの全11記事からなるローカルAIツールレビューシリーズの最終回である。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューはMLC Chatアプリそのものに焦点を当てている。その下にあるMLC LLMコンパイラとTVMベースのランタイムのより深い技術的説明については、PromptQuorumの専用記事[MLC LLM解説](/ja/power-local-llm/mlc-llm-explained)を参照してほしい。本レビューは意図的にその内容を重複させていない。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '歴史:MLC LLMと機械学習コンパイル',
        content: [
          '**MLC Chatは[MLC LLM](https://github.com/mlc-ai/mlc-llm)の上に構築されている**。このプロジェクト自身のリポジトリでは、プラットフォーム横断でAIモデルを開発・最適化・展開できる「ML コンパイルを備えたユニバーサルLLMデプロイメントエンジン」と説明されている。MLC LLMリポジトリ自身のドキュメントは、その技術的系譜として[Apache TVM](https://tvm.apache.org)(2018年)や関連するコンパイラ研究(TensorIR、MetaSchedule)を挙げている——TVMは、MLCプロジェクトが機械学習コンパイル技術を構築する基盤となるディープラーニングコンパイラスタックだ。',
          '**「MLC LLM」と「MLC Chat」の区別は重要であり、しばしば混同される。** MLC LLMは基盤となるコンパイラおよびランタイムエンジンであり——PromptQuorumが[MLC LLM解説](/ja/power-local-llm/mlc-llm-explained)で詳しく扱っているものだ。MLC Chatはその上に構築された一般ユーザー向けアプリケーションで、特にiOSとAndroid向けにパッケージ化されており、技術に詳しくないユーザーでもコンパイラに直接触れることなくモデルをダウンロードしてチャットを始められる。',
          '**MLC ChatはMLC LLMプロジェクト自体を保守しているのと同じMLC AIチーム**(GitHub組織[mlc-ai](https://github.com/mlc-ai))によって保守されており、基盤となるMLC LLMリポジトリと同じApache-2.0ライセンスの下でライセンスされている。',
        ],
        faqs: [
          {
            q: 'MLC ChatはMLC LLMと同じものか?',
            a: 'いいえ、密接に関連しており頻繁に同義語のように使われるが、同じではない。MLC LLMは、プラットフォーム横断でGPUアクセラレーテッドなオンデバイス推論のためにモデルをコンパイルする基盤コンパイラ・ランタイムエンジンだ——PromptQuorumの専用記事MLC LLM解説を参照。MLC Chatは、同じチームがそのエンジンの上に構築した、特にiOSとAndroid向けにパッケージ化された一般ユーザー向けアプリだ。',
          },
        ],
      },
      distinctive: {
        id: 'distinctive',
        title: 'MLC Chatを際立たせるもの',
        content: [
          'ほとんどのローカルLLMチャットアプリは、実行時に見つかったハードウェア上でモデルファイルを解釈する、単一の汎用推論ランタイム(llama.cppなど)に依存している。MLC Chatの基盤となるMLC LLMエンジンは異なるアプローチを取る:機械学習コンパイル技術を用いて特定のハードウェアターゲット向けにモデルを事前にコンパイルし、その後、コンパイル済みの成果物をターゲットデバイス上で実行するために配布する。',
          'MLC LLM自身のプロジェクトドキュメントによれば、このコンパイルアプローチはプラットフォームに応じて幅広いGPUバックエンドを対象とする:Apple SiliconおよびAppleのモバイルGPU向けのMetal、AndroidのGPU(AdrenoおよびMali)向けのOpenCL、そしてデスクトップのLinuxおよびWindows向けのVulkan、CUDA、またはROCmだ。プロジェクトはまた、ブラウザ内でモデルを実行するためのWebGPUおよびWebAssemblyサポートも文書化しており、ランタイムコンポーネントであるMLCEngineは、REST、Python、JavaScript、iOS、Androidの各インターフェースを通じてOpenAI互換のAPIを提供する。',
          'MLC Chatに特有の実務的な結果:基盤となるコンパイルがハードウェアターゲット固有であるため、より汎用的なランタイムでは十分に活用できないかもしれないモバイルチップ上でのGPUアクセラレーションを、このアプリは実現できる——ただしその代償として、どこでも動く単一のユニバーサルバイナリではなく、特定のハードウェア/モデルの組み合わせごとにコンパイルされたビルドが必要になる。',
        ],
        faqs: [
          {
            q: 'MLC Chatは汎用のローカルLLMランナーと何が違うのか?',
            a: 'MLC Chatの基盤となるMLC LLMエンジンは、実行時にモデルを汎用的に解釈するのではなく、機械学習コンパイルを用いて特定のハードウェアターゲット(プラットフォームに応じてMetal、OpenCL、Vulkan、CUDA、またはROCm)向けにモデルを事前にコンパイルする。これはMLC LLM自身のプロジェクト資料で、中核となる差別化アプローチとして文書化されている。',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: '実際のセットアップ手順:iOS、Android、デスクトップ',
        content: [
          '以下の手順は、PromptQuorumが直接確認した内容——App StoreにおけるMLC Chatの実際の存在、Android APK配布経路、そしてデスクトップ利用向けのMLC LLMの文書化されたクイックスタート経路——を反映している。',
        ],
        numberedItems: [
          {
            title: 'iOS:App Storeからダウンロードする。',
            whyItMatters: 'MLC Chatは[Apple App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)に直接掲載されている——標準的なインストールであり、サイドローディングは不要だ。',
          },
          {
            title: 'Android:GitHubから直接APKをダウンロードする。',
            whyItMatters: 'MLCは現在、確認されたGoogle Playストアの掲載を維持していない。Android版は[MLC自身のGitHubリリース](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)からの直接APKダウンロードとして配布されており、Androidの設定で「提供元不明のアプリのインストール」を有効にする必要がある。',
          },
          {
            title: '依存する前にAndroidのGPU互換性を確認する。',
            whyItMatters: 'Android版はOpenCLのGPUサポートに依存している。これは一部の端末(特定のSamsung Galaxyモデルなど)では動作が確認されているが、他の端末(OpenCLサポートが限定的な一部のGoogle Pixelモデルなど)では確実に動作するとは限らない——完全なGPUアクセラレーションを前提とする前に、自分の端末を確認してほしい。',
          },
          {
            title: 'デスクトップ:MLC LLMのPythonパッケージ、RESTサーバー、CLIを直接使用する。',
            whyItMatters: '独立したパッケージ化されたMLC Chatデスクトップアプリケーションは存在しない。デスクトップユーザーはconda環境に`mlc-llm`Pythonパッケージをインストールし、[MLC LLMのクイックスタートドキュメント](https://llm.mlc.ai/docs/get_started/quick_start.html)に従って、`MLCEngine`の`chat.completions.create()`API、RESTサーバー、またはコマンドラインを介して操作する。',
          },
          {
            title: 'ハードウェアに合ったコンパイル済みモデルを選ぶ。',
            whyItMatters: 'MLC LLMのクイックスタートドキュメントは、int4量子化されたビルドである`Llama-3-8B-Instruct-q4f16_1-MLC`を使ってワークフローを実演しており、それに対して最低6GBの空きVRAMが必要だと文書化している——より大きなモデルに取り組む前にハードウェア要件を見積もる際の有用な基準となる。',
          },
        ],
      },
      licenseModels: {
        id: 'license-models',
        title: 'ライセンスと対応モデル',
        content: [
          '**ライセンス:Apache-2.0。** MLC ChatアプリとMLC LLMリポジトリの両方がApache-2.0ライセンスの下で公開されていることは、[mlc-ai/mlc-llm GitHubリポジトリ](https://github.com/mlc-ai/mlc-llm)で直接確認できる。',
          '**モデル対応は単一のクイックスタート例より広い。** MLC LLM自身のクイックスタートドキュメントは`Llama-3-8B-Instruct-q4f16_1-MLC`を使ってワークフローを実演しているが、プロジェクトのモデルライブラリは、対応するハードウェアターゲット向けにコンパイルされた他のオープンウェイトモデルファミリーにも広がっている——PromptQuorumは、単一のキャッシュされたリストに頼るのではなく、コンパイル済みモデルの提供状況は新しいリリースとともに変わるため、[MLC LLM自身のモデルリスト](https://llm.mlc.ai)を直接確認することを推奨する。',
          '**ビジョン言語モデルの公式サポートはなし。** 本レビュー時点で、MLC LLMはビジョン言語モデル(画像入力)を公式にはサポートしておらず——チャットアプリ内で画像とテキストの入力を一緒に処理するための組み込みモジュールを提供していない。ビジョン言語モデルのコードをMLC LLMのコンパイルパイプラインに適応させるコミュニティプロジェクトは存在するが、これらはMLC AIチームによって公式に保守・サポートされているものではなく、PromptQuorumはその現在の信頼性を検証していない。',
        ],
        faqs: [
          {
            q: 'MLC Chatはどのライセンスを使用しているか?',
            a: 'Apache-2.0であり、これはmlc-ai/mlc-llm GitHubリポジトリで直接確認できる。これはMLC LLMエンジンとその上に構築されたMLC Chatアプリの両方をカバーしている。',
          },
          {
            q: 'MLC ChatはLLaVAのようなビジョンモデルに対応しているか?',
            a: '本レビュー時点では、いいえ、公式には対応していない。MLC LLMはビジョン言語モデル(画像入力)への公式な対応を提供していない。ビジョン言語モデルのコードをMLC LLMのパイプラインに適応させるコミュニティ製の回避策は存在するが、これらは非公式であり、その現在の信頼性は本レビューでは検証されていない。ビジョン対応のローカルモデルについては、代わりにPromptQuorumのLLaVAレビュー、Ideficsレビュー、またはOllamaビジョンモデルガイドを参照してほしい。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'MLC Chatが向いていない用途',
        content: [
          'MLC Chatは本当に有用なクロスプラットフォームのオンデバイスチャットアプリだが、以下の状況には向いていない。',
        ],
        items: [
          '**できるだけシンプルなセットアップを求めるデスクトップユーザー。** MLC Chatにはパッケージ化されたデスクトップアプリケーションが存在しない——デスクトップでの利用は、Pythonパッケージをインストールし、RESTサーバー、CLI、またはPython APIを扱うことを意味する。ワンクリックのデスクトップ体験を求めるユーザーには、[Ollama](/ja/power-local-llm/ollama-vision-models-review)や[LM Studio](https://lmstudio.ai)の方が明らかに便利だ。MLC Chatのモバイル向けGPUコンパイルの利点は、デスクトップでは同じようには当てはまらない。',
          '**ビジョンまたは画像入力タスク。** MLC LLMはビジョン言語モデルを公式にはサポートしていない。画像を見られるモデルを実行するユースケースであれば、代わりにPromptQuorumの[LLaVAレビュー](/ja/power-local-llm/llava-review)、[Ideficsレビュー](/ja/power-local-llm/idefics-review)、または[Ollamaビジョンモデルガイド](/ja/power-local-llm/ollama-vision-models-review)を参照してほしい。',
          '**入手可能な最大級のモデル。** モバイルハードウェアには現実的な制約がある——MLC LLM自身のクイックスタート例は、int4量子化された8Bパラメータモデルに最低6GBの空きVRAMを必要とし、スマートフォンのGPUとメモリはデスクトップGPUより限られている。入手可能な最大級のオープンウェイトモデルをローカルで実行したいユーザーには、VRAMの余裕が大きいデスクトップツールの方が適している。',
          '**OpenCLサポートが限定的なハードウェアを使うAndroidユーザー。** Android版のGPUアクセラレーションはOpenCLに依存しており、一部の端末では動作確認済みだが他では確実ではない——スムーズな体験を前提とする前に、自分の端末モデルを確認してほしい。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '代替ツールと競合',
        itemHeadings: true,
        columns: ['ツール', '最適な用途', 'ライセンス'],
        rows: [
          {
            'ツール': '[Ollama](/ja/power-local-llm/ollama-vision-models-review)',
            '最適な用途': '`ollama pull`/`ollama run`によるデスクトップ中心のシンプルさ;MLC Chatより幅広いビジョンモデル対応',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[LM Studio](https://lmstudio.ai)',
            '最適な用途': '内蔵のモデルブラウザを備えたGUI中心のデスクトップ体験',
            'ライセンス': '無料、プロプライエタリなアプリケーション',
          },
          {
            'ツール': '[llama.cpp](https://github.com/ggml-org/llama.cpp)を直接使用',
            '最適な用途': '事前コンパイルのステップなしに、推論への最大限の低レベル制御',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            '最適な用途': 'もう一つの専用モバイルローカルLLMアプリ;直接比較についてはPromptQuorum自身のレビューを参照',
            'ライセンス': '異なる——PromptQuorumのPocketPal AIレビューを参照',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'MLC Chatとは何か?',
            a: 'MLC Chatは、自分のデバイス上で直接大規模言語モデルを実行するための、無料でクロスプラットフォームなチャットアプリだ。MLC AIチームが自社のMLC LLMコンパイラとランタイムの上に構築し、Apache-2.0の下でライセンスされている。',
          },
          {
            q: 'MLC Chatはどこでダウンロードできるか?',
            a: 'iOSでは、App Storeから直接ダウンロードできる。Androidでは、MLCは現在Google Playに掲載していない——MLC自身のGitHubリリースからAPKを直接ダウンロードする必要があり、提供元不明のアプリのインストールを有効にする必要がある。デスクトップでは独立したパッケージ化アプリは存在せず、代わりにMLC LLMのPythonパッケージ、RESTサーバー、またはコマンドラインインターフェースを使用する。',
          },
          {
            q: 'MLC Chatは無料か?',
            a: 'はい。アプリと基盤となるMLC LLMエンジンは、オープンソースのApache-2.0ライセンスの下で公開されている。',
          },
          {
            q: 'MLC Chatはビジョンモデルに対応しているか?',
            a: '本レビュー時点では、いいえ、公式には対応していない。MLC LLMはビジョン言語モデル(画像入力)を公式にはサポートしていない。非公式なコミュニティの回避策は存在するが、本レビューでは検証されていない。',
          },
          {
            q: 'MLC ChatはOllamaやllama.cppと何が違うのか?',
            a: 'MLC Chatの基盤となるMLC LLMエンジンは、実行時にモデルを汎用的に解釈するのではなく、Apache TVMコンパイラの系譜に由来する技術を用いて特定のハードウェアターゲット向けにモデルを事前にコンパイルする。プロジェクトはこれを、特にモバイルチップ上でのGPUアクセラレーションにおける利点として位置づけている。OllamaとLlama.cppはより汎用的なランタイムアプローチを採用しており、Ollamaの場合は現在、より幅広いビジョンモデル対応を提供している。',
          },
          {
            q: 'これはPromptQuorumのローカルAIツールシリーズの最後の記事か?',
            a: 'はい。このMLC Chatレビューは、Whisper.cpp、faster-whisper、Piper TTS、Coqui TTS、XTTS v2、Bark、StyleTTS 2、LLaVA、Ollamaビジョンモデル、Idefics、MLC Chatを扱う全11記事シリーズの最終回である。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論:本シリーズの最終回',
        content:
          'MLC Chatは、本当に際立った前提を実現している:単一のランタイムに頼るのではなく機械学習コンパイルによって実現される、クロスプラットフォームでGPUアクセラレーテッドなオンデバイスLLMチャットであり、実際のiOS App Storeでの提供と直接ダウンロード可能なAndroid APKを備え、すべて寛容なApache-2.0ライセンスの下にある。しかし、デスクトップユーザーにとって最も便利な選択肢ではない——そのワークフローはパッケージ化されたアプリではなく、Pythonパッケージとレスト/CLIインターフェースを意味する——そして現時点でビジョン言語モデルには公式には全く対応していない。ハードウェアターゲット固有のコンパイルアプローチが効果を発揮するモバイルのオンデバイスチャットには特にMLC Chatを選び、最もシンプルなデスクトップ体験には[Ollama](/ja/power-local-llm/ollama-vision-models-review)や[LM Studio](https://lmstudio.ai)を選び、ビジョン対応のローカルモデルには代わりにPromptQuorumの[LLaVA](/ja/power-local-llm/llava-review)または[Idefics](/ja/power-local-llm/idefics-review)レビューを選んでほしい。MLC Chatの背後にあるコンパイラのより深い技術的全体像については、PromptQuorumの[MLC LLM解説](/ja/power-local-llm/mlc-llm-explained)を参照してほしい。本レビューは、PromptQuorumの全11記事からなるローカルAIツールシリーズを締めくくるものだ——音声認識(Whisper.cpp、faster-whisper)と音声合成(Piper、Coqui TTS、XTTS v2、Bark、StyleTTS 2)から、ビジョン言語モデル(LLaVA、Ollamaビジョンモデル、Idefics)を経て、クロスプラットフォームのオンデバイスコンパイルに関するこの最終回に至るまでを扱ってきた。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App Store上のMLC Chat](https://apps.apple.com/us/app/mlc-chat/id6448482937) — 確認済みのiOSでの提供状況。',
          '[MLC Chat Android APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — MLC自身のGitHubリリースでホストされている直接のAndroidダウンロード経路。',
          '[GitHub上のmlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) — ライセンス(Apache-2.0)、プラットフォーム対応、TVM系譜のドキュメント。',
          '[MLC LLMクイックスタートドキュメント](https://llm.mlc.ai/docs/get_started/quick_start.html) — デスクトップのセットアップ手順、サンプルモデル、VRAM要件。',
          '[MLC LLM Android SDKドキュメント](https://llm.mlc.ai/docs/deploy/android.html) — AndroidのOpenCL依存関係と端末互換性に関する注記。',
          'MLC LLMのビジョン言語モデル対応に関するPromptQuorumの調査。本レビュー時点で公式なVLM対応がないこと、および非公式なコミュニティの回避策(例:MLC-VLM-template)の存在を確認した。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[MLC LLM解説(2026)](/ja/power-local-llm/mlc-llm-explained) — MLC Chatの背後にあるコンパイラとランタイムをより深く掘り下げた記事。',
          '[LLaVAレビュー(2026)](/ja/power-local-llm/llava-review) — MLC Chatが公式にはサポートしていないユースケース向けの、ビジョン対応ローカルモデル。',
          '[Ideficsレビュー(2026)](/ja/power-local-llm/idefics-review) — もう一つのオープンなビジョン言語モデルの選択肢。',
          '[Ollamaビジョンモデル(2026)](/ja/power-local-llm/ollama-vision-models-review) — 今日Ollama経由で実際にpull可能なビジョンモデル。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — もう一つの専用モバイルローカルLLMアプリ、直接比較用。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'MLC Chat レビュー(2026):MLC LLM上に構築されたモバイルアプリを正直に評価する',
      description:
        'MLC Chat レビュー2026:MLC LLM上に構築されたモバイル/デスクトップチャットアプリ。実際のiOS App StoreとAndroid APKのダウンロード経路、実際のセットアップ手順、Apache-2.0ライセンス、オンデバイスAIチャットの正直な限界。',
      url: 'https://promptquorum.com/ja/power-local-llm/mlc-chat-review',
      inLanguage: 'ja',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'モバイルおよびデスクトップ向けのオンデバイスLLMチャットアプリを評価しているユーザーや開発者' },
      about: [
        { '@type': 'Thing', name: 'MLC Chat' },
        { '@type': 'Thing', name: 'MLC LLM' },
        { '@type': 'Thing', name: 'On-device inference' },
        { '@type': 'Thing', name: 'Machine learning compilation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/mlc-chat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'MLC Chat レビュー(2026)', item: 'https://promptquorum.com/ja/power-local-llm/mlc-chat-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/mlc-chat-review-hero-pt.webp',
    title: 'Análise do MLC Chat (2026): o app móvel construído sobre o MLC LLM, avaliado com honestidade',
    seoTitle: 'Análise do MLC Chat 2026: iOS, Android e configuração multiplataforma',
    intro:
      'O MLC Chat é o app de chat voltado ao consumidor, construído sobre o compilador e runtime [MLC LLM](https://github.com/mlc-ai/mlc-llm) — o projeto que o PromptQuorum cobre em profundidade em [MLC LLM Explicado](/pt/power-local-llm/mlc-llm-explained). Esta análise foca especificamente na experiência do app: canais reais de download, passos reais de configuração, quais modelos ele traz, e limitações honestas, em vez de reexplicar a tecnologia de compilação subjacente. Se você quer o panorama técnico mais profundo de como o MLC LLM compila modelos para inferência acelerada por GPU em várias plataformas, leia primeiro [MLC LLM Explicado](/pt/power-local-llm/mlc-llm-explained); este artigo assume esse contexto e mantém o foco no próprio app.',
    metaDescription:
      'Análise do MLC Chat 2026: o app de chat móvel/desktop construído sobre o MLC LLM. Canais reais de download na App Store da Apple e APK do Android, passos reais de configuração, licença Apache-2.0 e limitações honestas para chat de IA no dispositivo.',
    twitterDescription:
      'Análise do MLC Chat 2026: o app de chat para consumidores construído sobre o compilador MLC LLM. Canais reais de download (App Store da Apple, APK do Android), passos reais de configuração, e um olhar honesto sobre onde ele funciona bem — e onde não. Último artigo da série do PromptQuorum sobre ferramentas de IA local.',
    audience:
      'Usuários e desenvolvedores decidindo se devem usar o MLC Chat para chat de IA no dispositivo em celulares ou desktop, que querem um panorama claro da experiência do app, separado da tecnologia do compilador MLC LLM subjacente.',
    readTime: '10 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'MLC Chat',
    targetKeywords: [
      'análise mlc chat',
      'app mlc chat',
      'mlc chat ios',
      'mlc chat android',
      'configuração mlc chat',
      'app mlc llm',
      'app llm no dispositivo',
      'mlc chat vs ollama',
    ],
    current_models_mentioned: ['Llama 3', 'MLC LLM', 'Ollama', 'LM Studio', 'PocketPal AI'],
    current_hardware_mentioned: ['iOS', 'Android', 'NVIDIA GPU', 'AMD GPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**O MLC Chat é um app de chat gratuito e multiplataforma para rodar modelos de linguagem grandes diretamente no seu próprio dispositivo**, construído pela equipe MLC AI sobre seu compilador e runtime [MLC LLM](https://github.com/mlc-ai/mlc-llm), lançado sob a licença Apache-2.0. Está disponível na [App Store da Apple](https://apps.apple.com/us/app/mlc-chat/id6448482937) e como um [APK do Android](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) diretamente baixável a partir dos próprios lançamentos no GitHub da MLC; o uso em desktop é feito por meio das interfaces Python, REST e CLI do MLC LLM, em vez de um app de desktop empacotado separadamente. Sua característica distintiva é a inferência acelerada por GPU no dispositivo, alcançada por meio de compilação de aprendizado de máquina — compilar um modelo antecipadamente para um alvo de hardware específico (Metal em GPUs da Apple, OpenCL em GPUs Android, Vulkan/CUDA/ROCm em desktop) — em vez de depender de um único runtime genérico. No momento desta análise, o MLC Chat não oferece suporte oficial a modelos de visão-linguagem (entrada de imagem). Para a explicação técnica mais profunda de como o compilador subjacente funciona, veja [MLC LLM Explicado](/pt/power-local-llm/mlc-llm-explained) do PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'O que é o MLC Chat e como faço para baixá-lo e configurá-lo de fato?',
        answer:
          'O MLC Chat é um app de chat gratuito que roda modelos de linguagem grandes localmente no seu dispositivo, construído sobre o compilador e runtime MLC LLM da equipe MLC AI, e licenciado sob Apache-2.0. No iOS, baixe-o diretamente da [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937). No Android, a MLC atualmente não o lista na Google Play; baixe o APK diretamente dos [próprios lançamentos no GitHub da MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — isso exige habilitar a instalação de fontes desconhecidas, e a versão Android depende de suporte a GPU via OpenCL, confirmado funcionando em alguns aparelhos (como certos modelos Samsung Galaxy) mas não de forma confiável em outros (como alguns modelos Google Pixel). Não há um app de desktop empacotado separadamente; no desktop, o MLC LLM é usado por meio de seu pacote Python, servidor REST, ou interface de linha de comando, documentados em [llm.mlc.ai](https://llm.mlc.ai). O MLC Chat atualmente só oferece suporte a chat baseado em texto — ele não oferece suporte oficial a modelos de visão-linguagem (entrada de imagem) no momento desta análise.',
        bullets: [
          'iOS: disponível diretamente na [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937).',
          'Android: sem listagem confirmada na Google Play; baixe o APK diretamente dos [lançamentos no GitHub da MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk).',
          'O Android depende de suporte a GPU via OpenCL — confirmado funcionando em alguns aparelhos, não de forma confiável em outros.',
          'Desktop: sem app empacotado separadamente; use diretamente o pacote Python, servidor REST, ou CLI do MLC LLM.',
          'Licença: Apache-2.0, conforme o repositório [mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
          'Sem suporte oficial a modelos de visão-linguagem (entrada de imagem) no momento desta análise — apenas chat de texto.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'Resposta Rápida', anchor: 'quick-answer' },
      { label: 'História: MLC LLM e a Compilação de Aprendizado de Máquina', anchor: 'history' },
      { label: 'O Que Torna o MLC Chat Distinto', anchor: 'distinctive' },
      { label: 'Passos Reais de Configuração: iOS, Android e Desktop', anchor: 'setup' },
      { label: 'Licença e Quais Modelos Ele Suporta', anchor: 'license-models' },
      { label: 'Para que o MLC Chat Não Serve', anchor: 'limitations' },
      { label: 'Alternativas e Concorrentes', anchor: 'alternatives' },
      { label: 'Perguntas Frequentes', anchor: 'faq' },
      { label: 'Veredito: O Último Artigo Desta Série', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura Relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O MLC Chat é um app de chat gratuito, licenciado sob Apache-2.0, construído sobre o compilador MLC LLM, que roda modelos de linguagem grandes localmente no iOS (via App Store), Android (via um APK diretamente baixável) e desktop (via interfaces Python/REST/CLI do MLC LLM), usando compilação no dispositivo acelerada por GPU em vez de um runtime genérico, e que não oferece suporte oficial a modelos de visão-linguagem no momento desta análise.',
          },
          {
            type: 'plain-terms',
            text: 'O MLC Chat é um app gratuito que permite conversar com modelos de IA diretamente no seu celular ou computador sem conexão à internet, compilando esses modelos especificamente para o chip gráfico do seu dispositivo — esta análise cobre os links reais de download, os passos de configuração, e onde ele funciona bem ou não.',
          },
        ],
        items: [
          'iOS: disponível diretamente na App Store; Android: sem listagem confirmada na Google Play, baixe o APK diretamente dos lançamentos no GitHub da MLC.',
          'Característica distintiva: os modelos são compilados antecipadamente para um alvo de hardware específico (Metal, OpenCL, Vulkan, CUDA, ROCm) via compilação de aprendizado de máquina, em vez de rodarem por meio de um interpretador genérico.',
          'Licença: Apache-2.0, conforme o repositório GitHub mlc-ai/mlc-llm.',
          'Sem suporte oficial a modelos de visão-linguagem (entrada de imagem) no momento desta análise — apenas chat de texto, com soluções alternativas da comunidade existentes mas não oficialmente suportadas.',
          'A versão Android depende de suporte a GPU via OpenCL, confirmado funcionando em alguns aparelhos mas não de forma confiável em outros.',
          'Este é o último artigo da série do PromptQuorum de onze artigos sobre ferramentas de IA local.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise foca especificamente no app MLC Chat. Para a explicação técnica mais profunda do compilador MLC LLM e do runtime baseado em TVM por trás dele, veja o artigo dedicado do PromptQuorum [MLC LLM Explicado](/pt/power-local-llm/mlc-llm-explained), que esta análise deliberadamente não duplica.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'História: MLC LLM e a Compilação de Aprendizado de Máquina',
        content: [
          '**O MLC Chat é construído sobre o [MLC LLM](https://github.com/mlc-ai/mlc-llm)**, descrito no próprio repositório do projeto como um "motor universal de implantação de LLM com compilação de ML" que permite desenvolver, otimizar e implantar modelos de IA em várias plataformas. A própria documentação do repositório do MLC LLM cita pesquisas fundamentais do [Apache TVM](https://tvm.apache.org) (2018) e trabalhos relacionados de compilação (TensorIR, MetaSchedule) como sua linhagem técnica — sendo o TVM a pilha de compiladores de aprendizado profundo sobre a qual o projeto MLC constrói suas técnicas de compilação de aprendizado de máquina.',
          '**A distinção entre "MLC LLM" e "MLC Chat" importa e costuma ser confundida.** O MLC LLM é o compilador e motor de execução subjacente — o que o PromptQuorum cobre em profundidade em [MLC LLM Explicado](/pt/power-local-llm/mlc-llm-explained). O MLC Chat é o aplicativo voltado ao consumidor, construído em cima dele, empacotado especificamente para iOS e Android, que permite a um usuário não técnico baixar um modelo e começar a conversar sem lidar diretamente com o compilador.',
          '**O MLC Chat é mantido pela mesma equipe MLC AI** (organização do GitHub [mlc-ai](https://github.com/mlc-ai)) que mantém o próprio projeto MLC LLM, e é licenciado sob Apache-2.0, a mesma licença do repositório MLC LLM subjacente.',
        ],
        faqs: [
          {
            q: 'O MLC Chat é a mesma coisa que o MLC LLM?',
            a: 'Não, embora sejam intimamente relacionados e frequentemente usados de forma intercambiável. O MLC LLM é o compilador e motor de execução subjacente que compila modelos para inferência acelerada por GPU no dispositivo em várias plataformas — veja o artigo dedicado do PromptQuorum, MLC LLM Explicado. O MLC Chat é o app voltado ao consumidor, construído pela mesma equipe sobre esse motor, empacotado especificamente para iOS e Android.',
          },
        ],
      },
      distinctive: {
        id: 'distinctive',
        title: 'O Que Torna o MLC Chat Distinto',
        content: [
          'A maioria dos apps de chat com LLM local depende de um único runtime de inferência de propósito geral (como o llama.cpp) que interpreta um arquivo de modelo em tempo de execução no hardware que encontrar. O motor MLC LLM subjacente do MLC Chat adota uma abordagem diferente: ele compila um modelo antecipadamente para um alvo de hardware específico usando técnicas de compilação de aprendizado de máquina, e então entrega esse artefato compilado para rodar no dispositivo alvo.',
          'De acordo com a própria documentação do projeto MLC LLM, essa abordagem de compilação atinge uma ampla gama de backends de GPU dependendo da plataforma: Metal para Apple Silicon e GPUs móveis da Apple, OpenCL para GPUs Android (Adreno e Mali), e Vulkan, CUDA, ou ROCm em desktop Linux e Windows. O projeto também documenta suporte a WebGPU e WebAssembly para rodar modelos em um navegador, e o MLCEngine — o componente de runtime — expõe uma API compatível com a OpenAI por meio de interfaces REST, Python, JavaScript, iOS e Android.',
          'O resultado prático especificamente para o MLC Chat: como a compilação subjacente é específica para o alvo de hardware, o app pode alcançar aceleração por GPU em chips móveis que um runtime mais genérico talvez não conseguisse explorar totalmente — ao custo de precisar de uma compilação para cada combinação específica de hardware/modelo, em vez de um único binário universal que funcione em todo lugar.',
        ],
        faqs: [
          {
            q: 'O que diferencia o MLC Chat de um executor de LLM local genérico?',
            a: 'O motor MLC LLM subjacente do MLC Chat compila um modelo antecipadamente para um alvo de hardware específico (Metal, OpenCL, Vulkan, CUDA, ou ROCm dependendo da plataforma) usando compilação de aprendizado de máquina, em vez de interpretar o modelo de forma genérica em tempo de execução. Isso está documentado nos próprios materiais do projeto MLC LLM como sua abordagem distintiva central.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Passos Reais de Configuração: iOS, Android e Desktop',
        content: [
          'Estes passos refletem o que o PromptQuorum verificou diretamente — a presença real do MLC Chat na App Store, o canal de distribuição do APK Android, e o caminho de início rápido documentado do MLC LLM para uso em desktop.',
        ],
        numberedItems: [
          {
            title: 'iOS: baixe da App Store.',
            whyItMatters: 'O MLC Chat está listado diretamente na [App Store da Apple](https://apps.apple.com/us/app/mlc-chat/id6448482937) — uma instalação padrão, sem necessidade de sideloading.',
          },
          {
            title: 'Android: baixe o APK diretamente do GitHub.',
            whyItMatters: 'A MLC atualmente não mantém uma listagem confirmada na Google Play Store. A versão Android é distribuída como um download direto de APK a partir dos [próprios lançamentos no GitHub da MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk), o que exige habilitar "instalar de fontes desconhecidas" nas configurações do Android.',
          },
          {
            title: 'Verifique a compatibilidade de GPU no Android antes de depender dela.',
            whyItMatters: 'A versão Android depende de suporte a GPU via OpenCL. Isso foi confirmado funcionando em alguns aparelhos (como certos modelos Samsung Galaxy) mas não de forma confiável em outros (como alguns modelos Google Pixel com suporte limitado a OpenCL) — verifique seu aparelho específico antes de presumir aceleração total por GPU.',
          },
          {
            title: 'Desktop: use diretamente o pacote Python, servidor REST, ou CLI do MLC LLM.',
            whyItMatters: 'Não existe um aplicativo de desktop MLC Chat empacotado separadamente. Usuários de desktop instalam o pacote Python `mlc-llm` em um ambiente conda e interagem por meio da API `chat.completions.create()` do `MLCEngine`, um servidor REST, ou a linha de comando, conforme a [documentação de início rápido do MLC LLM](https://llm.mlc.ai/docs/get_started/quick_start.html).',
          },
          {
            title: 'Escolha um modelo compilado que combine com seu hardware.',
            whyItMatters: 'A documentação de início rápido do MLC LLM demonstra o fluxo de trabalho usando `Llama-3-8B-Instruct-q4f16_1-MLC`, uma versão quantizada em int4, e documenta a necessidade de pelo menos 6 GB de VRAM livre para ela — uma base útil para avaliar os requisitos de hardware antes de se comprometer com um modelo maior.',
          },
        ],
      },
      licenseModels: {
        id: 'license-models',
        title: 'Licença e Quais Modelos Ele Suporta',
        content: [
          '**Licença: Apache-2.0.** Tanto o app MLC Chat quanto o repositório MLC LLM subjacente são lançados sob a licença Apache-2.0, confirmada diretamente no [repositório GitHub mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
          '**O suporte a modelos é mais amplo do que qualquer exemplo isolado de início rápido.** A própria documentação de início rápido do MLC LLM demonstra o fluxo de trabalho com `Llama-3-8B-Instruct-q4f16_1-MLC`, mas a biblioteca de modelos do projeto se estende a outras famílias de modelos de peso aberto compiladas para seus alvos de hardware suportados — o PromptQuorum recomenda verificar diretamente a [própria lista de modelos do MLC LLM](https://llm.mlc.ai) para o conjunto atual, já que a disponibilidade de modelos compilados muda conforme novos lançamentos chegam, em vez de depender de uma única lista em cache.',
          '**Sem suporte oficial a modelos de visão-linguagem.** No momento desta análise, o MLC LLM não oferece suporte oficial a modelos de visão-linguagem (entrada de imagem) — não fornece módulos integrados para processar entradas de imagem e texto juntas no app de chat. Existem projetos da comunidade que adaptam código de modelos de visão-linguagem para funcionar com o pipeline de compilação do MLC LLM, mas eles não são mantidos ou suportados oficialmente pela equipe MLC AI, e o PromptQuorum não verificou sua confiabilidade atual.',
        ],
        faqs: [
          {
            q: 'Qual licença o MLC Chat usa?',
            a: 'Apache-2.0, confirmada diretamente no repositório GitHub mlc-ai/mlc-llm, que cobre tanto o motor MLC LLM quanto o app MLC Chat construído sobre ele.',
          },
          {
            q: 'O MLC Chat suporta modelos de visão como o LLaVA?',
            a: 'Não, não oficialmente, no momento desta análise. O MLC LLM não fornece suporte oficial a modelos de visão-linguagem (entrada de imagem). Existem soluções alternativas construídas pela comunidade que adaptam código de modelos de visão-linguagem ao pipeline do MLC LLM, mas são extraoficiais e sua confiabilidade atual não foi verificada para esta análise. Para modelos locais com capacidade de visão, veja em vez disso a análise do LLaVA, a análise do Idefics, ou o guia de modelos de visão do Ollama do PromptQuorum.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para que o MLC Chat Não Serve',
        content: [
          'O MLC Chat é um app de chat no dispositivo, multiplataforma, genuinamente útil, mas é a escolha errada nas seguintes situações:',
        ],
        items: [
          '**Usuários de desktop que querem a configuração mais simples possível.** O MLC Chat não tem uma aplicação de desktop empacotada — usar no desktop significa instalar um pacote Python e trabalhar com um servidor REST, uma CLI, ou uma API Python. Usuários que querem uma experiência de desktop de um clique acharão o [Ollama](/pt/power-local-llm/ollama-vision-models-review) ou o [LM Studio](https://lmstudio.ai) notavelmente mais convenientes, mesmo que a vantagem de compilação de GPU móvel do MLC Chat não se aplique da mesma forma no desktop.',
          '**Tarefas de visão ou entrada de imagem.** O MLC LLM não oferece suporte oficial a modelos de visão-linguagem. Se seu caso de uso envolve rodar um modelo capaz de olhar para imagens, veja em vez disso a [análise do LLaVA](/pt/power-local-llm/llava-review), a [análise do Idefics](/pt/power-local-llm/idefics-review), ou o [guia de modelos de visão do Ollama](/pt/power-local-llm/ollama-vision-models-review) do PromptQuorum.',
          '**Os maiores modelos disponíveis.** O hardware móvel impõe restrições reais — o próprio exemplo de início rápido do MLC LLM precisa de pelo menos 6 GB de VRAM livre para um modelo de 8B parâmetros com quantização int4, e as GPUs e a memória dos celulares são mais limitadas que uma GPU de desktop. Usuários que querem rodar localmente os maiores modelos de peso aberto disponíveis são mais bem atendidos por ferramentas de desktop com mais margem de VRAM.',
          '**Usuários Android com hardware de suporte limitado a OpenCL.** A aceleração por GPU da versão Android depende de OpenCL, confirmada funcionando em alguns aparelhos mas não de forma confiável em outros — verifique o modelo específico do seu aparelho antes de presumir uma experiência tranquila.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas e Concorrentes',
        itemHeadings: true,
        columns: ['Ferramenta', 'Melhor uso', 'Licença'],
        rows: [
          {
            'Ferramenta': '[Ollama](/pt/power-local-llm/ollama-vision-models-review)',
            'Melhor uso': 'Simplicidade voltada para desktop via `ollama pull`/`ollama run`; suporte a modelos de visão mais amplo que o MLC Chat',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[LM Studio](https://lmstudio.ai)',
            'Melhor uso': 'Experiência de desktop voltada para GUI com um navegador de modelos integrado',
            'Licença': 'Gratuito, aplicação proprietária',
          },
          {
            'Ferramenta': '[llama.cpp](https://github.com/ggml-org/llama.cpp) diretamente',
            'Melhor uso': 'Controle de baixo nível máximo sobre a inferência sem uma etapa de compilação prévia',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Melhor uso': 'Outro app móvel dedicado de LLM local; veja a própria análise do PromptQuorum para uma comparação direta',
            'Licença': 'Varia — veja a análise do PocketPal AI do PromptQuorum',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O que é o MLC Chat?',
            a: 'O MLC Chat é um app de chat gratuito e multiplataforma para rodar modelos de linguagem grandes diretamente no seu próprio dispositivo, construído pela equipe MLC AI sobre seu compilador e runtime MLC LLM, e licenciado sob Apache-2.0.',
          },
          {
            q: 'Onde posso baixar o MLC Chat?',
            a: 'No iOS, baixe-o diretamente da App Store. No Android, a MLC atualmente não o lista na Google Play — baixe o APK diretamente dos próprios lançamentos no GitHub da MLC, o que exige habilitar a instalação de fontes desconhecidas. No desktop, não há um app empacotado separadamente; use em vez disso o pacote Python, servidor REST, ou interface de linha de comando do MLC LLM.',
          },
          {
            q: 'O MLC Chat é gratuito?',
            a: 'Sim. O app e o motor MLC LLM subjacente são lançados sob a licença de código aberto Apache-2.0.',
          },
          {
            q: 'O MLC Chat suporta modelos de visão?',
            a: 'Não, não oficialmente, no momento desta análise. O MLC LLM não oferece suporte oficial a modelos de visão-linguagem (entrada de imagem). Existem soluções alternativas extraoficiais da comunidade, mas não foram verificadas para esta análise.',
          },
          {
            q: 'O que diferencia o MLC Chat do Ollama ou do llama.cpp?',
            a: 'O motor MLC LLM subjacente do MLC Chat compila os modelos antecipadamente para um alvo de hardware específico (usando técnicas da linhagem do compilador Apache TVM) em vez de interpretar um modelo de forma genérica em tempo de execução, o que o projeto posiciona como uma vantagem para aceleração por GPU especificamente em chips móveis. O Ollama e o llama.cpp adotam uma abordagem de runtime mais generalista e, no caso do Ollama, atualmente oferecem suporte a modelos de visão mais amplo.',
          },
          {
            q: 'Este é o último artigo da série do PromptQuorum sobre ferramentas de IA local?',
            a: 'Sim. Esta análise do MLC Chat é o último artigo de uma série de onze que cobre Whisper.cpp, faster-whisper, Piper TTS, Coqui TTS, XTTS v2, Bark, StyleTTS 2, LLaVA, os modelos de visão do Ollama, Idefics, e MLC Chat.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito: O Último Artigo Desta Série',
        content:
          'O MLC Chat cumpre uma proposta genuinamente distinta: chat com LLM no dispositivo, multiplataforma e acelerado por GPU, alcançado por meio de compilação de aprendizado de máquina em vez de um runtime único para todos, com presença real na App Store da Apple e um APK Android diretamente baixável, tudo sob uma licença permissiva Apache-2.0. No entanto, não é a escolha mais conveniente para usuários de desktop — esse fluxo de trabalho significa um pacote Python e uma interface REST/CLI em vez de um app empacotado — e atualmente não suporta modelos de visão-linguagem de forma alguma, oficialmente. Escolha o MLC Chat especificamente para chat móvel no dispositivo, onde sua abordagem compilada e específica para o alvo de hardware compensa; escolha o [Ollama](/pt/power-local-llm/ollama-vision-models-review) ou o [LM Studio](https://lmstudio.ai) para a experiência de desktop mais simples, e as análises do [LLaVA](/pt/power-local-llm/llava-review) ou do [Idefics](/pt/power-local-llm/idefics-review) do PromptQuorum em vez disso para modelos locais com capacidade de visão. Para o panorama técnico mais profundo do compilador por trás do MLC Chat, veja [MLC LLM Explicado](/pt/power-local-llm/mlc-llm-explained) do PromptQuorum. Esta análise encerra a série do PromptQuorum de onze artigos sobre ferramentas de IA local — do reconhecimento de fala (Whisper.cpp, faster-whisper) e síntese de fala (Piper, Coqui TTS, XTTS v2, Bark, StyleTTS 2) aos modelos de visão-linguagem (LLaVA, modelos de visão do Ollama, Idefics), até este último artigo sobre compilação multiplataforma no dispositivo.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[MLC Chat na App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) — disponibilidade confirmada no iOS.',
          '[APK Android do MLC Chat](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — o canal de download direto para Android, hospedado nos próprios lançamentos no GitHub da MLC.',
          '[mlc-ai/mlc-llm no GitHub](https://github.com/mlc-ai/mlc-llm) — licença (Apache-2.0), suporte de plataformas, documentação da linhagem TVM.',
          '[Documentação de início rápido do MLC LLM](https://llm.mlc.ai/docs/get_started/quick_start.html) — passos de configuração no desktop, modelo de exemplo, requisito de VRAM.',
          '[Documentação do SDK Android do MLC LLM](https://llm.mlc.ai/docs/deploy/android.html) — dependência de OpenCL no Android e notas de compatibilidade de aparelhos.',
          'Pesquisa do PromptQuorum sobre o suporte a modelos de visão-linguagem do MLC LLM, confirmando a ausência de suporte oficial a VLM e a existência de soluções alternativas extraoficiais da comunidade (por exemplo, MLC-VLM-template) no momento desta análise.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[MLC LLM Explicado (2026)](/pt/power-local-llm/mlc-llm-explained) — o mergulho técnico mais profundo no compilador e no runtime por trás do MLC Chat.',
          '[Análise do LLaVA (2026)](/pt/power-local-llm/llava-review) — um modelo local com capacidade de visão, para casos de uso que o MLC Chat não suporta oficialmente.',
          '[Análise do Idefics (2026)](/pt/power-local-llm/idefics-review) — outra opção de modelo de visão-linguagem aberto.',
          '[Modelos de Visão do Ollama (2026)](/pt/power-local-llm/ollama-vision-models-review) — quais modelos de visão são realmente baixáveis pelo Ollama hoje.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — outro app móvel dedicado de LLM local, para comparação direta.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Análise do MLC Chat (2026): o app móvel construído sobre o MLC LLM, avaliado com honestidade',
      description:
        'Análise do MLC Chat 2026: o app de chat móvel/desktop construído sobre o MLC LLM. Canais reais de download na App Store da Apple e APK do Android, passos reais de configuração, licença Apache-2.0 e limitações honestas para chat de IA no dispositivo.',
      url: 'https://promptquorum.com/pt/power-local-llm/mlc-chat-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Usuários e desenvolvedores avaliando apps de chat com LLM no dispositivo para celular e desktop' },
      about: [
        { '@type': 'Thing', name: 'MLC Chat' },
        { '@type': 'Thing', name: 'MLC LLM' },
        { '@type': 'Thing', name: 'On-device inference' },
        { '@type': 'Thing', name: 'Machine learning compilation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/mlc-chat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Análise do MLC Chat (2026)', item: 'https://promptquorum.com/pt/power-local-llm/mlc-chat-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/mlc-chat-review-hero-ar.webp',
    title: 'مراجعة MLC Chat (2026): تطبيق الجوال المبني على MLC LLM، بتقييم صريح',
    seoTitle: 'مراجعة MLC Chat 2026: iOS وAndroid وإعداد متعدد المنصات',
    intro:
      'MLC Chat هو تطبيق الدردشة الموجّه للمستهلكين والمبني فوق مُصرّف ومحرك تشغيل [MLC LLM](https://github.com/mlc-ai/mlc-llm) — المشروع الذي يتناوله PromptQuorum بعمق في [شرح MLC LLM](/ar/power-local-llm/mlc-llm-explained). تركز هذه المراجعة تحديدًا على تجربة التطبيق: قنوات التنزيل الحقيقية، خطوات الإعداد الفعلية، النماذج المرفقة معه، والقيود الصريحة، بدلًا من إعادة شرح تقنية التصريف الأساسية. إذا أردت الصورة التقنية الأعمق لكيفية تصريف MLC LLM للنماذج من أجل استدلال مُسرَّع بواسطة GPU عبر المنصات، اقرأ أولًا [شرح MLC LLM](/ar/power-local-llm/mlc-llm-explained)؛ يفترض هذا المقال ذلك السياق ويظل مركّزًا على التطبيق نفسه.',
    metaDescription:
      'مراجعة MLC Chat 2026: تطبيق الدردشة للجوال/سطح المكتب المبني على MLC LLM. قنوات تنزيل حقيقية من App Store لنظام iOS وملف APK لأندرويد، خطوات إعداد فعلية، رخصة Apache-2.0، وقيود صريحة لدردشة الذكاء الاصطناعي على الجهاز.',
    twitterDescription:
      'مراجعة MLC Chat 2026: تطبيق الدردشة الموجّه للمستهلكين والمبني على مُصرّف MLC LLM. قنوات تنزيل حقيقية (App Store لنظام iOS، ملف APK لأندرويد)، خطوات إعداد فعلية، ونظرة صريحة على أين يناسب — وأين لا يناسب. المقال الأخير في سلسلة PromptQuorum لمراجعة أدوات الذكاء الاصطناعي المحلية.',
    audience:
      'المستخدمون والمطورون الذين يقررون ما إذا كانوا سيستخدمون MLC Chat للدردشة مع الذكاء الاصطناعي على الجهاز في الهواتف أو أجهزة سطح المكتب، ويريدون صورة واضحة عن تجربة التطبيق منفصلة عن تقنية مُصرّف MLC LLM الأساسية.',
    readTime: '10 دقائق قراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'MLC Chat',
    targetKeywords: [
      'مراجعة mlc chat',
      'تطبيق mlc chat',
      'mlc chat ios',
      'mlc chat android',
      'إعداد mlc chat',
      'تطبيق mlc llm',
      'تطبيق llm على الجهاز',
      'mlc chat مقابل ollama',
    ],
    current_models_mentioned: ['Llama 3', 'MLC LLM', 'Ollama', 'LM Studio', 'PocketPal AI'],
    current_hardware_mentioned: ['iOS', 'Android', 'NVIDIA GPU', 'AMD GPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**MLC Chat تطبيق دردشة مجاني ومتعدد المنصات لتشغيل نماذج اللغة الكبيرة مباشرة على جهازك الخاص**، طوّره فريق MLC AI فوق مُصرّف ومحرك تشغيل [MLC LLM](https://github.com/mlc-ai/mlc-llm) الخاص بهم، ونُشر بموجب رخصة Apache-2.0. يتوفر على [متجر تطبيقات iOS](https://apps.apple.com/us/app/mlc-chat/id6448482937) وكملف [APK لأندرويد](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) قابل للتنزيل مباشرة من إصدارات GitHub الخاصة بـ MLC نفسها؛ ويتم استخدامه على سطح المكتب عبر واجهات Python وREST وسطر الأوامر الخاصة بـ MLC LLM بدلًا من تطبيق سطح مكتب مُعبّأ بشكل منفصل. تكمن ميزته المميزة في الاستدلال المُسرَّع بواسطة GPU على الجهاز، الذي يتحقق عبر تصريف تعلم الآلة — تصريف نموذج مسبقًا لهدف عتاد محدد (Metal على وحدات معالجة رسوميات Apple، وOpenCL على وحدات معالجة رسوميات أندرويد، وVulkan/CUDA/ROCm على سطح المكتب) — بدلًا من الاعتماد على محرك تشغيل عام واحد. حتى وقت هذه المراجعة، لا يدعم MLC Chat رسميًا نماذج الرؤية-اللغة (إدخال الصور). للاطلاع على الشرح التقني الأعمق لكيفية عمل المُصرّف الأساسي، راجع [شرح MLC LLM](/ar/power-local-llm/mlc-llm-explained) من PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'ما هو MLC Chat وكيف أُنزّله وأُعدّه فعليًا؟',
        answer:
          'MLC Chat تطبيق دردشة مجاني يُشغّل نماذج اللغة الكبيرة محليًا على جهازك، مبني على مُصرّف ومحرك تشغيل MLC LLM من فريق MLC AI، ومرخّص بموجب Apache-2.0. على iOS، نزّله مباشرة من [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937). على أندرويد، لا تُدرجه MLC حاليًا في Google Play؛ نزّل ملف APK مباشرة من [إصدارات GitHub الخاصة بـ MLC نفسها](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — يتطلب هذا تفعيل التثبيت من مصادر غير معروفة، ويعتمد إصدار أندرويد على دعم GPU عبر OpenCL، الذي تأكد عمله على بعض الأجهزة (مثل بعض طرازات Samsung Galaxy) لكن ليس بشكل موثوق على أجهزة أخرى (مثل بعض طرازات Google Pixel). لا يوجد تطبيق سطح مكتب مُعبّأ بشكل منفصل؛ على سطح المكتب، يُستخدم MLC LLM عبر حزمة Python الخاصة به أو خادم REST أو واجهة سطر الأوامر، الموثقة في [llm.mlc.ai](https://llm.mlc.ai). يدعم MLC Chat حاليًا الدردشة النصية فقط — ولا يدعم رسميًا نماذج الرؤية-اللغة (إدخال الصور) حتى وقت هذه المراجعة.',
        bullets: [
          'iOS: متاح مباشرة على [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937).',
          'أندرويد: لا يوجد إدراج مؤكد على Google Play؛ نزّل ملف APK مباشرة من [إصدارات GitHub الخاصة بـ MLC](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk).',
          'يعتمد أندرويد على دعم GPU عبر OpenCL — مؤكد على بعض الأجهزة، وغير موثوق على أخرى.',
          'سطح المكتب: لا يوجد تطبيق مُعبّأ بشكل منفصل؛ استخدم حزمة Python أو خادم REST أو سطر الأوامر الخاص بـ MLC LLM مباشرة.',
          'الرخصة: Apache-2.0، وفق مستودع [mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
          'لا يوجد دعم رسمي لنماذج الرؤية-اللغة (إدخال الصور) حتى وقت هذه المراجعة — دردشة نصية فقط.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'التاريخ: MLC LLM وتصريف تعلم الآلة', anchor: 'history' },
      { label: 'ما الذي يميز MLC Chat', anchor: 'distinctive' },
      { label: 'خطوات الإعداد الحقيقية: iOS وأندرويد وسطح المكتب', anchor: 'setup' },
      { label: 'الرخصة والنماذج المدعومة', anchor: 'license-models' },
      { label: 'ما لا يصلح له MLC Chat', anchor: 'limitations' },
      { label: 'البدائل والمنافسون', anchor: 'alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة: المقال الأخير في هذه السلسلة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat تطبيق دردشة مجاني برخصة Apache-2.0، مبني على مُصرّف MLC LLM، يُشغّل نماذج اللغة الكبيرة محليًا على iOS (عبر App Store)، وأندرويد (عبر ملف APK قابل للتنزيل مباشرة)، وسطح المكتب (عبر واجهات Python/REST/سطر الأوامر الخاصة بـ MLC LLM)، مستخدمًا تصريفًا على الجهاز مُسرَّعًا بواسطة GPU بدلًا من محرك تشغيل عام، ولا يدعم رسميًا نماذج الرؤية-اللغة حتى وقت هذه المراجعة.',
          },
          {
            type: 'plain-terms',
            text: 'MLC Chat تطبيق مجاني يتيح لك الدردشة مع نماذج الذكاء الاصطناعي مباشرة على هاتفك أو حاسوبك دون اتصال بالإنترنت، عبر تصريف تلك النماذج خصيصًا لشريحة الرسوميات في جهازك — تتناول هذه المراجعة روابط التنزيل الحقيقية وخطوات الإعداد وأين يعمل جيدًا وأين لا يعمل.',
          },
        ],
        items: [
          'iOS: متاح مباشرة على App Store؛ أندرويد: لا يوجد إدراج مؤكد على Google Play، نزّل ملف APK مباشرة من إصدارات GitHub الخاصة بـ MLC.',
          'الميزة المميزة: تُصرَّف النماذج مسبقًا لهدف عتاد محدد (Metal، وOpenCL، وVulkan، وCUDA، وROCm) عبر تصريف تعلم الآلة، بدلًا من تشغيلها عبر مُفسِّر عام.',
          'الرخصة: Apache-2.0، وفق مستودع GitHub الخاص بـ mlc-ai/mlc-llm.',
          'لا يوجد دعم رسمي لنماذج الرؤية-اللغة (إدخال الصور) حتى وقت هذه المراجعة — دردشة نصية فقط، مع وجود حلول مجتمعية غير رسمية غير مدعومة رسميًا.',
          'يعتمد إصدار أندرويد على دعم GPU عبر OpenCL، مؤكد العمل على بعض الأجهزة وغير موثوق على أخرى.',
          'هذا هو المقال الأخير في سلسلة PromptQuorum المكونة من أحد عشر مقالًا حول أدوات الذكاء الاصطناعي المحلية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تركز هذه المراجعة تحديدًا على تطبيق MLC Chat. للاطلاع على الشرح التقني الأعمق لمُصرّف MLC LLM ومحرك التشغيل القائم على TVM خلفه، راجع مقال PromptQuorum المخصص [شرح MLC LLM](/ar/power-local-llm/mlc-llm-explained)، والذي لا تكرره هذه المراجعة عمدًا.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: MLC LLM وتصريف تعلم الآلة',
        content: [
          '**يُبنى MLC Chat فوق [MLC LLM](https://github.com/mlc-ai/mlc-llm)**، الموصوف في مستودع المشروع نفسه بأنه "محرك نشر عالمي للنماذج اللغوية الكبيرة مع تصريف التعلم الآلي" يتيح تطوير وتحسين ونشر نماذج الذكاء الاصطناعي عبر المنصات. تستشهد وثائق مستودع MLC LLM نفسه بأبحاث تأسيسية من [Apache TVM](https://tvm.apache.org) (2018) وأعمال تصريف ذات صلة (TensorIR وMetaSchedule) بوصفها سلالته التقنية — وTVM هو حزمة مُصرّفات التعلم العميق التي يبني عليها مشروع MLC تقنيات تصريف تعلم الآلة الخاصة به.',
          '**التمييز بين "MLC LLM" و"MLC Chat" مهم وغالبًا ما يكون غير واضح.** MLC LLM هو المُصرّف ومحرك التشغيل الأساسي — وهو ما يتناوله PromptQuorum بعمق في [شرح MLC LLM](/ar/power-local-llm/mlc-llm-explained). أما MLC Chat فهو التطبيق الموجّه للمستهلكين والمبني فوقه، المُعبّأ خصيصًا لنظامي iOS وأندرويد، والذي يتيح لمستخدم غير تقني تنزيل نموذج والبدء بالدردشة دون التعامل مباشرة مع المُصرّف.',
          '**يحافظ على MLC Chat نفس فريق MLC AI** (منظمة GitHub [mlc-ai](https://github.com/mlc-ai)) الذي يحافظ على مشروع MLC LLM نفسه، وهو مرخّص بموجب Apache-2.0، نفس رخصة مستودع MLC LLM الأساسي.',
        ],
        faqs: [
          {
            q: 'هل MLC Chat هو نفسه MLC LLM؟',
            a: 'لا، رغم أنهما مرتبطان ارتباطًا وثيقًا ويُستخدمان غالبًا بالتبادل. MLC LLM هو المُصرّف ومحرك التشغيل الأساسي الذي يُصرّف النماذج لاستدلال مُسرَّع بواسطة GPU على الجهاز عبر المنصات — راجع مقال PromptQuorum المخصص، شرح MLC LLM. أما MLC Chat فهو التطبيق الموجّه للمستهلكين، الذي بناه الفريق نفسه فوق ذلك المحرك، ومُعبّأ خصيصًا لنظامي iOS وأندرويد.',
          },
        ],
      },
      distinctive: {
        id: 'distinctive',
        title: 'ما الذي يميز MLC Chat',
        content: [
          'تعتمد معظم تطبيقات الدردشة بنماذج اللغة الكبيرة المحلية على محرك استدلال عام واحد (مثل llama.cpp) يُفسِّر ملف نموذج وقت التشغيل على أي عتاد يجده. يتبع محرك MLC LLM الأساسي في MLC Chat نهجًا مختلفًا: يُصرّف نموذجًا مسبقًا لهدف عتاد محدد باستخدام تقنيات تصريف تعلم الآلة، ثم يُسلّم ذلك الناتج المُصرَّف ليعمل على الجهاز المستهدف.',
          'وفق وثائق مشروع MLC LLM نفسه، يستهدف نهج التصريف هذا مجموعة واسعة من واجهات GPU الخلفية حسب المنصة: Metal لشرائح Apple Silicon ووحدات معالجة الرسوميات المحمولة من Apple، وOpenCL لوحدات معالجة الرسوميات في أندرويد (Adreno وMali)، وVulkan أو CUDA أو ROCm على سطح مكتب لينكس وويندوز. كما يوثق المشروع دعم WebGPU وWebAssembly لتشغيل النماذج داخل المتصفح، ويوفر MLCEngine — مكوّن محرك التشغيل — واجهة برمجة تطبيقات متوافقة مع OpenAI عبر واجهات REST وPython وJavaScript وiOS وأندرويد.',
          'النتيجة العملية الخاصة بـ MLC Chat تحديدًا: نظرًا لأن التصريف الأساسي مخصص لهدف عتاد معين، يمكن للتطبيق تحقيق تسريع GPU على شرائح محمولة قد لا يستغلها محرك تشغيل أكثر عمومية بالكامل — على حساب الحاجة إلى نسخة مُصرَّفة لكل توليفة عتاد/نموذج محددة، بدلًا من ملف ثنائي عالمي واحد يعمل في كل مكان.',
        ],
        faqs: [
          {
            q: 'ما الذي يميز MLC Chat عن مُشغّل نماذج لغوية محلي عام؟',
            a: 'يُصرّف محرك MLC LLM الأساسي في MLC Chat نموذجًا مسبقًا لهدف عتاد محدد (Metal أو OpenCL أو Vulkan أو CUDA أو ROCm حسب المنصة) باستخدام تصريف تعلم الآلة، بدلًا من تفسير النموذج بشكل عام وقت التشغيل. هذا موثق في مواد مشروع MLC LLM نفسه بوصفه نهجه المميز الأساسي.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'خطوات الإعداد الحقيقية: iOS وأندرويد وسطح المكتب',
        content: [
          'تعكس هذه الخطوات ما تحقق منه PromptQuorum مباشرة — الوجود الفعلي لـ MLC Chat على App Store، وقناة توزيع ملف APK لأندرويد، ومسار البدء السريع الموثق لـ MLC LLM لاستخدام سطح المكتب.',
        ],
        numberedItems: [
          {
            title: 'iOS: نزّله من App Store.',
            whyItMatters: 'MLC Chat مُدرج مباشرة على [متجر تطبيقات Apple](https://apps.apple.com/us/app/mlc-chat/id6448482937) — تثبيت قياسي، دون الحاجة إلى تثبيت جانبي.',
          },
          {
            title: 'أندرويد: نزّل ملف APK مباشرة من GitHub.',
            whyItMatters: 'لا تحتفظ MLC حاليًا بإدراج مؤكد في متجر Google Play. يُوزَّع إصدار أندرويد كتنزيل مباشر لملف APK من [إصدارات GitHub الخاصة بـ MLC نفسها](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)، ما يتطلب تفعيل "التثبيت من مصادر غير معروفة" في إعدادات أندرويد.',
          },
          {
            title: 'تحقق من توافق GPU على أندرويد قبل الاعتماد عليه.',
            whyItMatters: 'يعتمد إصدار أندرويد على دعم GPU عبر OpenCL. تأكد عمل هذا على بعض الأجهزة (مثل بعض طرازات Samsung Galaxy) لكن ليس بشكل موثوق على أخرى (مثل بعض طرازات Google Pixel ذات دعم OpenCL المحدود) — تحقق من جهازك المحدد قبل افتراض تسريع GPU الكامل.',
          },
          {
            title: 'سطح المكتب: استخدم حزمة Python أو خادم REST أو سطر الأوامر الخاص بـ MLC LLM مباشرة.',
            whyItMatters: 'لا يوجد تطبيق سطح مكتب MLC Chat مُعبّأ بشكل منفصل. يُثبّت مستخدمو سطح المكتب حزمة Python الخاصة بـ `mlc-llm` في بيئة conda ويتفاعلون عبر واجهة برمجة تطبيقات `chat.completions.create()` الخاصة بـ `MLCEngine`، أو خادم REST، أو سطر الأوامر، وفق [وثائق البدء السريع لـ MLC LLM](https://llm.mlc.ai/docs/get_started/quick_start.html).',
          },
          {
            title: 'اختر نموذجًا مُصرَّفًا يناسب عتادك.',
            whyItMatters: 'توضح وثائق البدء السريع لـ MLC LLM سير العمل باستخدام `Llama-3-8B-Instruct-q4f16_1-MLC`، وهي نسخة مُكمَّمة بصيغة int4، وتوثق الحاجة إلى 6 غيغابايت على الأقل من VRAM المتاح لها — أساس مفيد لتقدير متطلبات العتاد قبل الالتزام بنموذج أكبر.',
          },
        ],
      },
      licenseModels: {
        id: 'license-models',
        title: 'الرخصة والنماذج المدعومة',
        content: [
          '**الرخصة: Apache-2.0.** يُنشر كل من تطبيق MLC Chat ومستودع MLC LLM الأساسي بموجب رخصة Apache-2.0، مؤكدة مباشرة على [مستودع GitHub الخاص بـ mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm).',
          '**دعم النماذج أوسع من أي مثال بدء سريع واحد.** توضح وثائق البدء السريع الخاصة بـ MLC LLM سير العمل باستخدام `Llama-3-8B-Instruct-q4f16_1-MLC`، لكن مكتبة نماذج المشروع تمتد إلى عائلات نماذج أخرى مفتوحة الأوزان مُصرَّفة لأهداف العتاد المدعومة — يوصي PromptQuorum بمراجعة [قائمة نماذج MLC LLM نفسها](https://llm.mlc.ai) مباشرة لمعرفة المجموعة الحالية، إذ يتغير توفر النماذج المُصرَّفة مع صدور إصدارات جديدة، بدلًا من الاعتماد على قائمة واحدة مخزّنة مؤقتًا.',
          '**لا دعم رسمي لنماذج الرؤية-اللغة.** حتى وقت هذه المراجعة، لا يدعم MLC LLM رسميًا نماذج الرؤية-اللغة (إدخال الصور) — فهو لا يوفر وحدات مدمجة لمعالجة إدخالات الصور والنصوص معًا في تطبيق الدردشة. توجد مشاريع مجتمعية تُكيّف كود نماذج الرؤية-اللغة للعمل مع خط تصريف MLC LLM، لكن هذه المشاريع لا يحافظ عليها أو يدعمها رسميًا فريق MLC AI، ولم يتحقق PromptQuorum من موثوقيتها الحالية.',
        ],
        faqs: [
          {
            q: 'ما الرخصة التي يستخدمها MLC Chat؟',
            a: 'Apache-2.0، مؤكدة مباشرة على مستودع GitHub الخاص بـ mlc-ai/mlc-llm، الذي يغطي كلًا من محرك MLC LLM وتطبيق MLC Chat المبني فوقه.',
          },
          {
            q: 'هل يدعم MLC Chat نماذج رؤية مثل LLaVA؟',
            a: 'لا، ليس رسميًا، حتى وقت هذه المراجعة. لا يوفر MLC LLM دعمًا رسميًا لنماذج الرؤية-اللغة (إدخال الصور). توجد حلول مجتمعية غير رسمية تُكيّف كود نماذج الرؤية-اللغة مع خط تصريف MLC LLM، لكنها غير رسمية ولم يُتحقق من موثوقيتها الحالية لهذه المراجعة. للاطلاع على نماذج محلية قادرة على الرؤية، راجع بدلًا من ذلك مراجعة LLaVA، أو مراجعة Idefics، أو دليل نماذج رؤية Ollama من PromptQuorum.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا يصلح له MLC Chat',
        content: [
          'MLC Chat تطبيق دردشة على الجهاز، متعدد المنصات، ومفيد فعليًا، لكنه الخيار الخطأ في الحالات التالية:',
        ],
        items: [
          '**مستخدمو سطح المكتب الذين يريدون أبسط إعداد ممكن.** لا يملك MLC Chat تطبيق سطح مكتب مُعبّأ — يعني الاستخدام على سطح المكتب تثبيت حزمة Python والعمل مع خادم REST أو سطر أوامر أو واجهة برمجة تطبيقات Python. سيجد المستخدمون الراغبون في تجربة سطح مكتب بنقرة واحدة أن [Ollama](/ar/power-local-llm/ollama-vision-models-review) أو [LM Studio](https://lmstudio.ai) أكثر ملاءمة بشكل ملحوظ، حتى وإن كانت ميزة تصريف GPU المحمول في MLC Chat لا تنطبق بنفس الطريقة على سطح المكتب.',
          '**مهام الرؤية أو إدخال الصور.** لا يدعم MLC LLM رسميًا نماذج الرؤية-اللغة. إذا كانت حالة استخدامك تتضمن تشغيل نموذج قادر على رؤية الصور، راجع بدلًا من ذلك [مراجعة LLaVA](/ar/power-local-llm/llava-review)، أو [مراجعة Idefics](/ar/power-local-llm/idefics-review)، أو [دليل نماذج رؤية Ollama](/ar/power-local-llm/ollama-vision-models-review) من PromptQuorum.',
          '**أكبر النماذج المتاحة.** يفرض العتاد المحمول قيودًا حقيقية — يحتاج مثال البدء السريع لـ MLC LLM نفسه إلى 6 غيغابايت على الأقل من VRAM المتاح لنموذج بـ 8 مليارات معلمة بتكميم int4، ووحدات معالجة الرسوميات وذاكرة الهواتف أكثر محدودية من وحدة معالجة رسوميات سطح المكتب. المستخدمون الراغبون في تشغيل أكبر النماذج المتاحة مفتوحة الأوزان محليًا يخدمهم بشكل أفضل أدوات سطح المكتب ذات هامش VRAM الأكبر.',
          '**مستخدمو أندرويد على عتاد بدعم OpenCL محدود.** يعتمد تسريع GPU في إصدار أندرويد على OpenCL، المؤكد عمله على بعض الأجهزة لكن ليس بشكل موثوق على أخرى — تحقق من طراز جهازك المحدد قبل افتراض تجربة سلسة.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'البدائل والمنافسون',
        itemHeadings: true,
        columns: ['الأداة', 'الأنسب لـ', 'الرخصة'],
        rows: [
          {
            'الأداة': '[Ollama](/ar/power-local-llm/ollama-vision-models-review)',
            'الأنسب لـ': 'بساطة موجهة نحو سطح المكتب عبر `ollama pull`/`ollama run`؛ دعم أوسع لنماذج الرؤية مقارنة بـ MLC Chat',
            'الرخصة': 'MIT',
          },
          {
            'الأداة': '[LM Studio](https://lmstudio.ai)',
            'الأنسب لـ': 'تجربة سطح مكتب موجهة نحو الواجهة الرسومية مع متصفح نماذج مدمج',
            'الرخصة': 'مجاني، تطبيق احتكاري',
          },
          {
            'الأداة': '[llama.cpp](https://github.com/ggml-org/llama.cpp) مباشرة',
            'الأنسب لـ': 'أقصى تحكم منخفض المستوى في الاستدلال دون خطوة تصريف مسبقة',
            'الرخصة': 'MIT',
          },
          {
            'الأداة': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'الأنسب لـ': 'تطبيق آخر مخصص لنماذج لغوية محلية على الجوال؛ راجع مراجعة PromptQuorum الخاصة للمقارنة المباشرة',
            'الرخصة': 'تختلف — راجع مراجعة PocketPal AI من PromptQuorum',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو MLC Chat؟',
            a: 'MLC Chat تطبيق دردشة مجاني ومتعدد المنصات لتشغيل نماذج اللغة الكبيرة مباشرة على جهازك الخاص، طوّره فريق MLC AI فوق مُصرّف ومحرك تشغيل MLC LLM الخاص بهم، ومرخّص بموجب Apache-2.0.',
          },
          {
            q: 'من أين يمكنني تنزيل MLC Chat؟',
            a: 'على iOS، نزّله مباشرة من App Store. على أندرويد، لا تُدرجه MLC حاليًا في Google Play — نزّل ملف APK مباشرة من إصدارات GitHub الخاصة بـ MLC نفسها، ما يتطلب تفعيل التثبيت من مصادر غير معروفة. على سطح المكتب، لا يوجد تطبيق مُعبّأ بشكل منفصل؛ استخدم بدلًا من ذلك حزمة Python أو خادم REST أو واجهة سطر الأوامر الخاصة بـ MLC LLM.',
          },
          {
            q: 'هل MLC Chat مجاني؟',
            a: 'نعم. يُنشر التطبيق ومحرك MLC LLM الأساسي بموجب رخصة المصدر المفتوح Apache-2.0.',
          },
          {
            q: 'هل يدعم MLC Chat نماذج الرؤية؟',
            a: 'لا، ليس رسميًا، حتى وقت هذه المراجعة. لا يدعم MLC LLM رسميًا نماذج الرؤية-اللغة (إدخال الصور). توجد حلول مجتمعية غير رسمية لكن لم يُتحقق منها لهذه المراجعة.',
          },
          {
            q: 'ما الذي يميز MLC Chat عن Ollama أو llama.cpp؟',
            a: 'يُصرّف محرك MLC LLM الأساسي في MLC Chat النماذج مسبقًا لهدف عتاد محدد (باستخدام تقنيات من سلالة مُصرّف Apache TVM) بدلًا من تفسير نموذج بشكل عام وقت التشغيل، وهو ما يضعه المشروع كميزة لتسريع GPU تحديدًا على الشرائح المحمولة. يتبع كل من Ollama وllama.cpp نهج محرك تشغيل أكثر عمومية، ويقدم Ollama حاليًا دعمًا أوسع لنماذج الرؤية.',
          },
          {
            q: 'هل هذا آخر مقال في سلسلة PromptQuorum حول أدوات الذكاء الاصطناعي المحلية؟',
            a: 'نعم. مراجعة MLC Chat هذه هي المقال الأخير في سلسلة من أحد عشر مقالًا تغطي Whisper.cpp، وfaster-whisper، وPiper TTS، وCoqui TTS، وXTTS v2، وBark، وStyleTTS 2، وLLaVA، ونماذج رؤية Ollama، وIdefics، وMLC Chat.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة: المقال الأخير في هذه السلسلة',
        content:
          'يفي MLC Chat بوعد مميز فعليًا: دردشة نماذج لغوية كبيرة على الجهاز، متعددة المنصات ومُسرَّعة بواسطة GPU، تتحقق عبر تصريف تعلم الآلة بدلًا من محرك تشغيل واحد يناسب الجميع، مع وجود فعلي على App Store لنظام iOS وملف APK لأندرويد قابل للتنزيل مباشرة، كل ذلك بموجب رخصة Apache-2.0 المتساهلة. غير أنه ليس الخيار الأكثر راحة لمستخدمي سطح المكتب — إذ يعني سير العمل هذا حزمة Python وواجهة REST/سطر أوامر بدلًا من تطبيق مُعبّأ — كما أنه لا يدعم حاليًا نماذج الرؤية-اللغة على الإطلاق، رسميًا. اختر MLC Chat تحديدًا للدردشة على الجهاز المحمول حيث يؤتي نهجه المُصرَّف والمخصص لهدف العتاد ثماره؛ واختر [Ollama](/ar/power-local-llm/ollama-vision-models-review) أو [LM Studio](https://lmstudio.ai) لأبسط تجربة سطح مكتب، ومراجعتَي [LLaVA](/ar/power-local-llm/llava-review) أو [Idefics](/ar/power-local-llm/idefics-review) من PromptQuorum بدلًا من ذلك للنماذج المحلية القادرة على الرؤية. للاطلاع على الصورة التقنية الأعمق للمُصرّف خلف MLC Chat، راجع [شرح MLC LLM](/ar/power-local-llm/mlc-llm-explained) من PromptQuorum. تختتم هذه المراجعة سلسلة PromptQuorum المكونة من أحد عشر مقالًا حول أدوات الذكاء الاصطناعي المحلية — من التعرف على الكلام (Whisper.cpp وfaster-whisper) وتوليف الكلام (Piper وCoqui TTS وXTTS v2 وBark وStyleTTS 2)، مرورًا بنماذج الرؤية-اللغة (LLaVA ونماذج رؤية Ollama وIdefics)، وصولًا إلى هذا المقال الأخير حول التصريف على الجهاز عبر المنصات المتعددة.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[MLC Chat على App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) — توفر مؤكد على iOS.',
          '[ملف APK الخاص بـ MLC Chat لأندرويد](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — قناة التنزيل المباشرة لأندرويد، مستضافة على إصدارات GitHub الخاصة بـ MLC نفسها.',
          '[mlc-ai/mlc-llm على GitHub](https://github.com/mlc-ai/mlc-llm) — الرخصة (Apache-2.0)، دعم المنصات، وثائق سلالة TVM.',
          '[وثائق البدء السريع لـ MLC LLM](https://llm.mlc.ai/docs/get_started/quick_start.html) — خطوات إعداد سطح المكتب، نموذج مثال، متطلبات VRAM.',
          '[وثائق حزمة تطوير أندرويد لـ MLC LLM](https://llm.mlc.ai/docs/deploy/android.html) — اعتماد OpenCL على أندرويد وملاحظات توافق الأجهزة.',
          'بحث PromptQuorum حول دعم MLC LLM لنماذج الرؤية-اللغة، والذي يؤكد عدم وجود دعم رسمي لنماذج VLM ووجود حلول مجتمعية غير رسمية (مثل MLC-VLM-template) حتى وقت هذه المراجعة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[شرح MLC LLM (2026)](/ar/power-local-llm/mlc-llm-explained) — الغوص التقني الأعمق في المُصرّف ومحرك التشغيل خلف MLC Chat.',
          '[مراجعة LLaVA (2026)](/ar/power-local-llm/llava-review) — نموذج محلي قادر على الرؤية، لحالات الاستخدام التي لا يدعمها MLC Chat رسميًا.',
          '[مراجعة Idefics (2026)](/ar/power-local-llm/idefics-review) — خيار آخر لنموذج رؤية-لغة مفتوح.',
          '[نماذج رؤية Ollama (2026)](/ar/power-local-llm/ollama-vision-models-review) — أي نماذج الرؤية القابلة للتنزيل فعليًا عبر Ollama اليوم.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — تطبيق آخر مخصص لنماذج لغوية محلية على الجوال، للمقارنة المباشرة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة MLC Chat (2026): تطبيق الجوال المبني على MLC LLM، بتقييم صريح',
      description:
        'مراجعة MLC Chat 2026: تطبيق الدردشة للجوال/سطح المكتب المبني على MLC LLM. قنوات تنزيل حقيقية من App Store لنظام iOS وملف APK لأندرويد، خطوات إعداد فعلية، رخصة Apache-2.0، وقيود صريحة لدردشة الذكاء الاصطناعي على الجهاز.',
      url: 'https://promptquorum.com/ar/power-local-llm/mlc-chat-review',
      inLanguage: 'ar',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'مستخدمون ومطورون يقيّمون تطبيقات دردشة نماذج لغوية على الجهاز للجوال وسطح المكتب' },
      about: [
        { '@type': 'Thing', name: 'MLC Chat' },
        { '@type': 'Thing', name: 'MLC LLM' },
        { '@type': 'Thing', name: 'On-device inference' },
        { '@type': 'Thing', name: 'Machine learning compilation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/mlc-chat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة MLC Chat (2026)', item: 'https://promptquorum.com/ar/power-local-llm/mlc-chat-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/mlc-chat-review-hero-zh.webp',
    title: 'MLC Chat评测(2026):基于MLC LLM构建的手机应用,诚实评估',
    seoTitle: 'MLC Chat评测2026:iOS、Android与跨平台配置',
    intro:
      'MLC Chat是构建在[MLC LLM](https://github.com/mlc-ai/mlc-llm)编译器与运行时之上的面向消费者的聊天应用——这个项目本身,PromptQuorum已在[MLC LLM详解](/zh/power-local-llm/mlc-llm-explained)中做了深入介绍。本评测专门聚焦于应用体验本身:真实的下载渠道、实际的配置步骤、随附的模型,以及诚实的局限性,而不是重新讲解底层的编译技术。如果你想了解MLC LLM如何跨平台为GPU加速推理编译模型的更深入技术图景,请先阅读[MLC LLM详解](/zh/power-local-llm/mlc-llm-explained);本文默认你已掌握该背景,并专注于应用本身。',
    metaDescription:
      'MLC Chat评测2026:基于MLC LLM构建的手机/桌面聊天应用。真实的iOS App Store和Android APK下载渠道、实际配置步骤、Apache-2.0许可证,以及端侧AI聊天的诚实局限性。',
    twitterDescription:
      'MLC Chat评测2026:基于MLC LLM编译器构建的消费级聊天应用。真实下载渠道(iOS App Store、Android APK)、实际配置步骤,以及关于它适合与不适合哪些场景的诚实分析。PromptQuorum本地AI工具评测系列的最后一篇。',
    audience:
      '正在决定是否在手机或桌面端使用MLC Chat进行端侧AI聊天的用户与开发者,希望获得独立于底层MLC LLM编译器技术之外的应用体验清晰图景。',
    readTime: '10分钟阅读',
    educationalLevel: 'Beginner',
    primaryTerm: 'MLC Chat',
    targetKeywords: [
      'mlc chat评测',
      'mlc chat应用',
      'mlc chat ios',
      'mlc chat android',
      'mlc chat配置',
      'mlc llm应用',
      '端侧llm应用',
      'mlc chat vs ollama',
    ],
    current_models_mentioned: ['Llama 3', 'MLC LLM', 'Ollama', 'LM Studio', 'PocketPal AI'],
    current_hardware_mentioned: ['iOS', 'Android', 'NVIDIA GPU', 'AMD GPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**MLC Chat是一款免费、跨平台的聊天应用,可以直接在你自己的设备上运行大语言模型**,由MLC AI团队基于自家的[MLC LLM](https://github.com/mlc-ai/mlc-llm)编译器与运行时构建,以Apache-2.0许可证发布。它可在[iOS App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)获取,也可作为[Android APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)直接从MLC自己的GitHub发布页下载;桌面端的使用则通过MLC LLM的Python、REST和CLI接口进行,而非一个独立打包的桌面应用。它的独特之处在于通过机器学习编译实现的GPU加速端侧推理——针对特定硬件目标(Apple GPU上的Metal、Android GPU上的OpenCL、桌面端的Vulkan/CUDA/ROCm)预先编译模型,而不是依赖单一的通用运行时。截至本次评测,MLC Chat官方并不支持视觉语言(图像输入)模型。若想了解底层编译器工作原理的更深入技术解释,请参阅PromptQuorum的[MLC LLM详解](/zh/power-local-llm/mlc-llm-explained)。',
    quickAnswerTop: {
      en: {
        question: 'MLC Chat是什么?我究竟该如何下载并配置它?',
        answer:
          'MLC Chat是一款免费的聊天应用,可以在你的设备上本地运行大语言模型,基于MLC AI团队的MLC LLM编译器与运行时构建,以Apache-2.0许可证授权。在iOS上,直接从[App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)下载即可。在Android上,MLC目前并未将其上架Google Play;需要直接从[MLC自己的GitHub发布页](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)下载APK——这需要开启"允许安装未知来源应用",而且Android版本依赖OpenCL GPU支持,在部分设备上(例如某些三星Galaxy机型)已确认可用,但在其他设备(例如部分谷歌Pixel机型)上并不稳定。目前没有单独打包的桌面应用;在桌面端,MLC LLM是通过其Python包、REST服务器或命令行界面使用的,文档见[llm.mlc.ai](https://llm.mlc.ai)。MLC Chat目前只支持基于文本的聊天——截至本次评测,它官方并不支持视觉语言(图像输入)模型。',
        bullets: [
          'iOS:可直接在[App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)获取。',
          'Android:未确认有Google Play上架;需直接从[MLC的GitHub发布页](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)下载APK。',
          'Android依赖OpenCL GPU支持——在部分设备上已确认可用,在其他设备上并不稳定。',
          '桌面端:没有单独打包的应用;直接使用MLC LLM的Python包、REST服务器或CLI。',
          '许可证:Apache-2.0,依据[mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)仓库。',
          '截至本次评测,官方不支持视觉语言(图像输入)模型——仅支持文本聊天。',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '历史:MLC LLM与机器学习编译', anchor: 'history' },
      { label: 'MLC Chat的独特之处', anchor: 'distinctive' },
      { label: '真实配置步骤:iOS、Android与桌面端', anchor: 'setup' },
      { label: '许可证及其支持的模型', anchor: 'license-models' },
      { label: 'MLC Chat不适合做什么', anchor: 'limitations' },
      { label: '替代方案与竞品', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论:本系列的最后一篇', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat是一款免费、采用Apache-2.0许可证的聊天应用,基于MLC LLM编译器构建,可在iOS(通过App Store)、Android(通过直接下载的APK)和桌面端(通过MLC LLM的Python/REST/CLI接口)本地运行大语言模型,采用GPU加速的端侧编译而非通用运行时,截至本次评测官方并不支持视觉语言模型。',
          },
          {
            type: 'plain-terms',
            text: 'MLC Chat是一款免费应用,通过将AI模型专门为你设备的图形芯片编译,让你无需联网就能直接在手机或电脑上与AI模型对话——本评测涵盖了真实的下载链接、配置步骤,以及它在哪些场景表现良好、哪些场景表现不佳。',
          },
        ],
        items: [
          'iOS:可直接在App Store获取;Android:未确认有Google Play上架,需直接从MLC的GitHub发布页下载APK。',
          '独特之处:模型通过机器学习编译针对特定硬件目标(Metal、OpenCL、Vulkan、CUDA、ROCm)预先编译,而非通过通用解释器运行。',
          '许可证:Apache-2.0,依据mlc-ai/mlc-llm的GitHub仓库。',
          '截至本次评测,官方不支持视觉语言(图像输入)模型——仅支持文本聊天,虽存在社区变通方案但并非官方支持。',
          'Android版本依赖OpenCL GPU支持,在部分设备上已确认可用,在其他设备上并不稳定。',
          '这是PromptQuorum本地AI工具11篇评测系列的最后一篇。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测专门聚焦于MLC Chat这款应用。若想了解其背后MLC LLM编译器与基于TVM的运行时的更深入技术解释,请参阅PromptQuorum专门的[MLC LLM详解](/zh/power-local-llm/mlc-llm-explained)文章,本评测有意不与其重复。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '历史:MLC LLM与机器学习编译',
        content: [
          '**MLC Chat构建在[MLC LLM](https://github.com/mlc-ai/mlc-llm)之上**,该项目自己的仓库将其描述为"具备机器学习编译能力的通用LLM部署引擎",能够跨平台开发、优化和部署AI模型。MLC LLM仓库自己的文档将[Apache TVM](https://tvm.apache.org)(2018年)及相关编译器工作(TensorIR、MetaSchedule)列为其技术渊源——TVM正是MLC项目构建其机器学习编译技术所依托的深度学习编译器栈。',
          '**"MLC LLM"与"MLC Chat"的区别很重要,但常被混淆。** MLC LLM是底层的编译器与运行时引擎——即PromptQuorum在[MLC LLM详解](/zh/power-local-llm/mlc-llm-explained)中深入介绍的内容。MLC Chat则是构建在其之上、面向消费者的应用程序,专门为iOS和Android打包,让非技术用户无需直接接触编译器,就能下载模型并开始聊天。',
          '**MLC Chat由维护MLC LLM项目本身的同一个MLC AI团队维护**(GitHub组织[mlc-ai](https://github.com/mlc-ai)),并采用与底层MLC LLM仓库相同的Apache-2.0许可证。',
        ],
        faqs: [
          {
            q: 'MLC Chat和MLC LLM是同一回事吗?',
            a: '不是,尽管两者关系密切且常被互换使用。MLC LLM是底层的编译器与运行时引擎,负责跨平台为GPU加速的端侧推理编译模型——参见PromptQuorum专门的MLC LLM详解文章。MLC Chat是由同一团队基于该引擎构建的面向消费者的应用,专门为iOS和Android打包。',
          },
        ],
      },
      distinctive: {
        id: 'distinctive',
        title: 'MLC Chat的独特之处',
        content: [
          '大多数本地LLM聊天应用依赖单一的通用推理运行时(如llama.cpp),在运行时于所遇到的任何硬件上解释模型文件。MLC Chat底层的MLC LLM引擎采用了不同的方法:它使用机器学习编译技术,针对特定硬件目标预先编译模型,然后将编译好的产物交付到目标设备上运行。',
          '根据MLC LLM项目自己的文档,这种编译方法根据平台不同,针对广泛的GPU后端:Apple Silicon和Apple移动GPU上的Metal、Android GPU(Adreno和Mali)上的OpenCL,以及桌面Linux和Windows上的Vulkan、CUDA或ROCm。该项目还记录了对WebGPU和WebAssembly的支持,用于在浏览器中运行模型;而运行时组件MLCEngine通过REST、Python、JavaScript、iOS和Android接口暴露了一个与OpenAI兼容的API。',
          '对MLC Chat而言,这带来的实际结果是:由于底层编译是针对特定硬件目标的,该应用能够在移动芯片上实现GPU加速,而更通用的运行时可能无法充分利用这一点——代价是需要为每一种特定的硬件/模型组合准备编译好的构建版本,而不是一个到处都能用的通用二进制文件。',
        ],
        faqs: [
          {
            q: 'MLC Chat与通用的本地LLM运行工具有何不同?',
            a: 'MLC Chat底层的MLC LLM引擎使用机器学习编译技术,针对特定硬件目标(根据平台不同为Metal、OpenCL、Vulkan、CUDA或ROCm)预先编译模型,而不是在运行时对模型进行通用解释。这在MLC LLM项目自身的资料中被记录为其核心的差异化方法。',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: '真实配置步骤:iOS、Android与桌面端',
        content: [
          '以下步骤反映了PromptQuorum直接核实的内容——MLC Chat在App Store上的真实存在、Android APK的分发渠道,以及MLC LLM针对桌面端使用记录的快速入门路径。',
        ],
        numberedItems: [
          {
            title: 'iOS:从App Store下载。',
            whyItMatters: 'MLC Chat直接在[苹果App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)上架——标准安装方式,无需侧载。',
          },
          {
            title: 'Android:直接从GitHub下载APK。',
            whyItMatters: 'MLC目前并未维护经确认的Google Play商店上架。Android版本是作为直接的APK下载,从[MLC自己的GitHub发布页](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)分发的,这需要在Android设置中开启"安装未知来源应用"。',
          },
          {
            title: '在依赖之前检查Android GPU兼容性。',
            whyItMatters: 'Android版本依赖OpenCL GPU支持。这在部分设备上(例如某些三星Galaxy机型)已确认可用,但在其他设备上(例如部分OpenCL支持有限的谷歌Pixel机型)并不稳定——在假定拥有完整GPU加速之前,请核实你的具体设备。',
          },
          {
            title: '桌面端:直接使用MLC LLM的Python包、REST服务器或CLI。',
            whyItMatters: '目前没有单独打包的MLC Chat桌面应用程序。桌面用户在conda环境中安装`mlc-llm`这个Python包,并通过`MLCEngine`的`chat.completions.create()` API、REST服务器或命令行进行交互,依据[MLC LLM的快速入门文档](https://llm.mlc.ai/docs/get_started/quick_start.html)。',
          },
          {
            title: '选择与你硬件相匹配的已编译模型。',
            whyItMatters: 'MLC LLM的快速入门文档使用`Llama-3-8B-Instruct-q4f16_1-MLC`(一个int4量化的构建版本)演示了工作流程,并记录其需要至少6GB的可用VRAM——这是在选择更大模型之前评估硬件需求的一个有用基准。',
          },
        ],
      },
      licenseModels: {
        id: 'license-models',
        title: '许可证及其支持的模型',
        content: [
          '**许可证:Apache-2.0。** MLC Chat应用与底层MLC LLM仓库都以Apache-2.0许可证发布,已在[mlc-ai/mlc-llm的GitHub仓库](https://github.com/mlc-ai/mlc-llm)上直接确认。',
          '**模型支持范围比任何单一的快速入门示例都要广。** MLC LLM自己的快速入门文档使用`Llama-3-8B-Instruct-q4f16_1-MLC`演示了工作流程,但该项目的模型库还延伸到了其他为其支持的硬件目标编译的开放权重模型家族——PromptQuorum建议直接查阅[MLC LLM自己的模型列表](https://llm.mlc.ai)以获取当前可用集合,因为已编译模型的可用情况会随着新版本的发布而变化,不应依赖任何单一的缓存列表。',
          '**没有官方的视觉语言模型支持。** 截至本次评测,MLC LLM并不官方支持视觉语言(图像输入)模型——它没有在聊天应用中提供内置模块,来共同处理图像和文本输入。存在一些社区项目,将视觉语言模型代码改造以适配MLC LLM的编译流水线,但这些项目并非由MLC AI团队官方维护或支持,PromptQuorum也未核实其当前的可靠性。',
        ],
        faqs: [
          {
            q: 'MLC Chat使用什么许可证?',
            a: 'Apache-2.0,已在mlc-ai/mlc-llm的GitHub仓库上直接确认,该许可证同时涵盖MLC LLM引擎及构建在其之上的MLC Chat应用。',
          },
          {
            q: 'MLC Chat支持像LLaVA这样的视觉模型吗?',
            a: '截至本次评测,官方并不支持。MLC LLM并未提供对视觉语言(图像输入)模型的官方支持。存在一些由社区构建的变通方案,将视觉语言模型代码改造以适配MLC LLM的流水线,但这些是非官方的,其当前可靠性未经本次评测核实。若需要具备视觉能力的本地模型,请改为参阅PromptQuorum的LLaVA评测、Idefics评测,或Ollama视觉模型指南。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'MLC Chat不适合做什么',
        content: [
          'MLC Chat是一款真正有用的跨平台端侧聊天应用,但在以下情况下并非合适的选择:',
        ],
        items: [
          '**希望获得尽可能简单配置的桌面用户。** MLC Chat没有打包好的桌面应用程序——在桌面端使用意味着要安装一个Python包,并使用REST服务器、CLI或Python API。想要一键式桌面体验的用户会发现[Ollama](/zh/power-local-llm/ollama-vision-models-review)或[LM Studio](https://lmstudio.ai)明显更便捷,尽管MLC Chat在移动端GPU编译方面的优势在桌面端并不能以同样的方式发挥作用。',
          '**视觉或图像输入任务。** MLC LLM官方并不支持视觉语言模型。如果你的使用场景涉及运行一个能够识别图像的模型,请改为参阅PromptQuorum的[LLaVA评测](/zh/power-local-llm/llava-review)、[Idefics评测](/zh/power-local-llm/idefics-review),或[Ollama视觉模型指南](/zh/power-local-llm/ollama-vision-models-review)。',
          '**最大规模的可用模型。** 移动硬件带来了真实的限制——MLC LLM自己的快速入门示例就需要至少6GB可用VRAM,才能运行一个采用int4量化的8B参数模型,而手机的GPU和内存比桌面GPU更加有限。想要在本地运行最大规模的开放权重模型的用户,更适合使用拥有更多VRAM余量的桌面工具。',
          '**OpenCL支持有限硬件上的Android用户。** Android版本的GPU加速依赖OpenCL,在部分设备上已确认可用,但在其他设备上并不稳定——在假定体验流畅之前,请核实你的具体设备型号。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '替代方案与竞品',
        itemHeadings: true,
        columns: ['工具', '最适合场景', '许可'],
        rows: [
          {
            '工具': '[Ollama](/zh/power-local-llm/ollama-vision-models-review)',
            '最适合场景': '通过`ollama pull`/`ollama run`实现以桌面为先的简单性;比MLC Chat更广泛的视觉模型支持',
            '许可': 'MIT',
          },
          {
            '工具': '[LM Studio](https://lmstudio.ai)',
            '最适合场景': '内置模型浏览器的图形界面优先桌面体验',
            '许可': '免费,专有应用程序',
          },
          {
            '工具': '直接使用[llama.cpp](https://github.com/ggml-org/llama.cpp)',
            '最适合场景': '无需预先编译步骤,对推理拥有最大限度的底层控制',
            '许可': 'MIT',
          },
          {
            '工具': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '最适合场景': '另一款专门的本地LLM移动应用;参见PromptQuorum自己的评测以直接对比',
            '许可': '因项目而异——参见PromptQuorum的PocketPal AI评测',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'MLC Chat是什么?',
            a: 'MLC Chat是一款免费、跨平台的聊天应用,可以直接在你自己的设备上运行大语言模型,由MLC AI团队基于自家的MLC LLM编译器与运行时构建,以Apache-2.0许可证授权。',
          },
          {
            q: '我在哪里可以下载MLC Chat?',
            a: '在iOS上,直接从App Store下载即可。在Android上,MLC目前并未将其上架Google Play——需要直接从MLC自己的GitHub发布页下载APK,这需要开启允许安装未知来源应用。在桌面端,没有单独打包的应用;请改为使用MLC LLM的Python包、REST服务器或命令行界面。',
          },
          {
            q: 'MLC Chat是免费的吗?',
            a: '是的。该应用及其底层的MLC LLM引擎均以开源的Apache-2.0许可证发布。',
          },
          {
            q: 'MLC Chat支持视觉模型吗?',
            a: '截至本次评测,官方并不支持。MLC LLM官方并不支持视觉语言(图像输入)模型。存在一些非官方的社区变通方案,但本次评测并未对其进行核实。',
          },
          {
            q: 'MLC Chat与Ollama或llama.cpp有何不同?',
            a: 'MLC Chat底层的MLC LLM引擎使用源自Apache TVM编译器谱系的技术,针对特定硬件目标预先编译模型,而不是在运行时对模型进行通用解释,该项目将此定位为专门在移动芯片上实现GPU加速的优势。Ollama和llama.cpp采用了更通用的运行时方法,而Ollama目前提供了更广泛的视觉模型支持。',
          },
          {
            q: '这是PromptQuorum本地AI工具系列的最后一篇文章吗?',
            a: '是的。这篇MLC Chat评测是涵盖Whisper.cpp、faster-whisper、Piper TTS、Coqui TTS、XTTS v2、Bark、StyleTTS 2、LLaVA、Ollama视觉模型、Idefics和MLC Chat的11篇系列文章中的最后一篇。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论:本系列的最后一篇',
        content:
          'MLC Chat兑现了一个真正独特的承诺:通过机器学习编译而非一刀切的运行时,实现跨平台、GPU加速的端侧LLM聊天,在iOS App Store上真实上架,并提供可直接下载的Android APK,所有这些都在宽松的Apache-2.0许可证之下。然而,对于桌面用户来说,它并非最便捷的选择——桌面端的工作流程意味着需要一个Python包和REST/CLI接口,而非一个打包好的应用——而且截至目前,它完全没有官方的视觉语言模型支持。当其编译式、针对特定硬件目标的方法能带来实际收益时,请专门选择MLC Chat用于移动端端侧聊天;若想获得最简单的桌面体验,请选择[Ollama](/zh/power-local-llm/ollama-vision-models-review)或[LM Studio](https://lmstudio.ai);若需要具备视觉能力的本地模型,请改为选择PromptQuorum的[LLaVA](/zh/power-local-llm/llava-review)或[Idefics](/zh/power-local-llm/idefics-review)评测。若想了解MLC Chat背后编译器的更深入技术图景,请参阅PromptQuorum的[MLC LLM详解](/zh/power-local-llm/mlc-llm-explained)。本评测为PromptQuorum本地AI工具11篇系列画上句号——从语音识别(Whisper.cpp、faster-whisper)和语音合成(Piper、Coqui TTS、XTTS v2、Bark、StyleTTS 2),到视觉语言模型(LLaVA、Ollama视觉模型、Idefics),再到这最后一篇关于跨平台端侧编译的文章。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[App Store上的MLC Chat](https://apps.apple.com/us/app/mlc-chat/id6448482937) —— 已确认的iOS可用性。',
          '[MLC Chat的Android APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) —— 直接的Android下载渠道,托管在MLC自己的GitHub发布页上。',
          '[GitHub上的mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) —— 许可证(Apache-2.0)、平台支持、TVM渊源文档。',
          '[MLC LLM快速入门文档](https://llm.mlc.ai/docs/get_started/quick_start.html) —— 桌面配置步骤、示例模型、VRAM要求。',
          '[MLC LLM Android SDK文档](https://llm.mlc.ai/docs/deploy/android.html) —— Android的OpenCL依赖及设备兼容性说明。',
          'PromptQuorum对MLC LLM视觉语言模型支持情况的调研,确认截至本次评测并无官方VLM支持,但存在非官方的社区变通方案(例如MLC-VLM-template)。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[MLC LLM详解(2026)](/zh/power-local-llm/mlc-llm-explained) —— 对MLC Chat背后编译器与运行时的更深入技术剖析。',
          '[LLaVA评测(2026)](/zh/power-local-llm/llava-review) —— 一款具备视觉能力的本地模型,适用于MLC Chat官方不支持的使用场景。',
          '[Idefics评测(2026)](/zh/power-local-llm/idefics-review) —— 另一个开源视觉语言模型选项。',
          '[Ollama视觉模型(2026)](/zh/power-local-llm/ollama-vision-models-review) —— 今天通过Ollama真正可以下载的视觉模型。',
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) —— 另一款专门的本地LLM移动应用,供直接对比。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'MLC Chat评测(2026):基于MLC LLM构建的手机应用,诚实评估',
      description:
        'MLC Chat评测2026:基于MLC LLM构建的手机/桌面聊天应用。真实的iOS App Store和Android APK下载渠道、实际配置步骤、Apache-2.0许可证,以及端侧AI聊天的诚实局限性。',
      url: 'https://promptquorum.com/zh/power-local-llm/mlc-chat-review',
      inLanguage: 'zh',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: '正在评估移动端和桌面端端侧LLM聊天应用的用户与开发者' },
      about: [
        { '@type': 'Thing', name: 'MLC Chat' },
        { '@type': 'Thing', name: 'MLC LLM' },
        { '@type': 'Thing', name: 'On-device inference' },
        { '@type': 'Thing', name: 'Machine learning compilation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/mlc-chat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'MLC Chat评测(2026)', item: 'https://promptquorum.com/zh/power-local-llm/mlc-chat-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-07',
    dateModified: '2026-09-07',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/mlc-chat-review-hero-ko.webp',
    title: 'MLC Chat 리뷰(2026): MLC LLM 위에 구축된 모바일 앱, 솔직하게 평가하다',
    seoTitle: 'MLC Chat 리뷰 2026: iOS, Android & 크로스플랫폼 설정',
    intro:
      'MLC Chat은 [MLC LLM](https://github.com/mlc-ai/mlc-llm) 컴파일러 및 런타임 위에 구축된 소비자용 채팅 앱이다 — 이 프로젝트 자체는 PromptQuorum이 [MLC LLM 설명](/ko/power-local-llm/mlc-llm-explained)에서 깊이 다루고 있다. 이 리뷰는 기반이 되는 컴파일 기술을 다시 설명하는 대신, 앱 경험 자체에 특히 초점을 맞춘다: 실제 다운로드 경로, 실제 설정 단계, 함께 제공되는 모델, 솔직한 한계. MLC LLM이 여러 플랫폼에서 GPU 가속 추론을 위해 모델을 어떻게 컴파일하는지에 대한 더 깊은 기술적 그림을 원한다면, 먼저 [MLC LLM 설명](/ko/power-local-llm/mlc-llm-explained)을 읽어보라; 이 글은 그 맥락을 전제로 하고 앱 자체에 초점을 맞춘다.',
    metaDescription:
      'MLC Chat 리뷰 2026: MLC LLM 위에 구축된 모바일/데스크톱 채팅 앱. 실제 iOS App Store 및 Android APK 다운로드 경로, 실제 설정 단계, Apache-2.0 라이선스, 온디바이스 AI 채팅의 솔직한 한계.',
    twitterDescription:
      'MLC Chat 리뷰 2026: MLC LLM 컴파일러 위에 구축된 소비자용 채팅 앱. 실제 다운로드 경로(iOS App Store, Android APK), 실제 설정 단계, 어디에 적합하고 어디에 적합하지 않은지에 대한 솔직한 평가. PromptQuorum의 로컬 AI 도구 리뷰 시리즈의 마지막 편.',
    audience:
      '휴대폰이나 데스크톱에서 온디바이스 AI 채팅에 MLC Chat을 사용할지 결정하려는 사용자 및 개발자로, 기반이 되는 MLC LLM 컴파일러 기술과 분리된 앱 경험에 대한 명확한 그림을 원하는 사람.',
    readTime: '10분 소요',
    educationalLevel: 'Beginner',
    primaryTerm: 'MLC Chat',
    targetKeywords: [
      'mlc chat 리뷰',
      'mlc chat 앱',
      'mlc chat ios',
      'mlc chat android',
      'mlc chat 설정',
      'mlc llm 앱',
      '온디바이스 llm 앱',
      'mlc chat vs ollama',
    ],
    current_models_mentioned: ['Llama 3', 'MLC LLM', 'Ollama', 'LM Studio', 'PocketPal AI'],
    current_hardware_mentioned: ['iOS', 'Android', 'NVIDIA GPU', 'AMD GPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**MLC Chat은 자신의 기기에서 직접 대규모 언어 모델을 실행할 수 있는 무료 크로스플랫폼 채팅 앱이다.** MLC AI 팀이 자체 [MLC LLM](https://github.com/mlc-ai/mlc-llm) 컴파일러 및 런타임 위에 만들었으며, Apache-2.0 라이선스로 공개되어 있다. [iOS App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)에서 이용 가능하며, MLC 자체 GitHub 릴리스에서 직접 다운로드할 수 있는 [Android APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)로도 제공된다; 데스크톱 사용은 별도로 패키징된 데스크톱 앱이 아니라 MLC LLM의 Python, REST, CLI 인터페이스를 통해 이루어진다. 이 앱의 특징적인 점은 머신러닝 컴파일을 통해 구현되는 GPU 가속 온디바이스 추론이다 — 단일 범용 런타임에 의존하는 대신, 특정 하드웨어 타깃(Apple GPU의 Metal, Android GPU의 OpenCL, 데스크톱의 Vulkan/CUDA/ROCm)에 맞춰 모델을 미리 컴파일한다. 본 리뷰 작성 시점 기준, MLC Chat은 비전-언어(이미지 입력) 모델을 공식적으로 지원하지 않는다. 기반 컴파일러가 어떻게 작동하는지에 대한 더 깊은 기술적 설명은 PromptQuorum의 [MLC LLM 설명](/ko/power-local-llm/mlc-llm-explained)을 참고하라.',
    quickAnswerTop: {
      en: {
        question: 'MLC Chat이란 무엇이며, 실제로 어떻게 다운로드하고 설정하는가?',
        answer:
          'MLC Chat은 MLC AI 팀의 MLC LLM 컴파일러 및 런타임 위에 구축된, 기기에서 대규모 언어 모델을 로컬로 실행하는 무료 채팅 앱으로, Apache-2.0 라이선스를 따른다. iOS에서는 [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)에서 직접 다운로드한다. Android에서는 MLC가 현재 Google Play에 등록하지 않았다; [MLC 자체 GitHub 릴리스](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)에서 APK를 직접 다운로드해야 하며, 이를 위해서는 출처를 알 수 없는 앱 설치를 허용해야 한다. 또한 Android 빌드는 OpenCL GPU 지원에 의존하는데, 일부 기기(특정 삼성 갤럭시 모델 등)에서는 작동이 확인되었지만 다른 기기(일부 구글 픽셀 모델 등)에서는 안정적으로 작동하지 않는다. 별도로 패키징된 데스크톱 애플리케이션은 없다; 데스크톱에서는 [llm.mlc.ai](https://llm.mlc.ai)에 문서화된 대로 MLC LLM을 Python 패키지, REST 서버, 또는 명령줄 인터페이스를 통해 사용한다. MLC Chat은 현재 텍스트 기반 채팅만 지원하며, 본 리뷰 작성 시점 기준 비전-언어(이미지 입력) 모델은 공식적으로 지원하지 않는다.',
        bullets: [
          'iOS: [App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)에서 직접 이용 가능.',
          'Android: 확인된 Google Play 등록 없음; [MLC의 GitHub 릴리스](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)에서 APK를 직접 다운로드.',
          'Android는 OpenCL GPU 지원에 의존하며 — 일부 기기에서는 작동 확인, 다른 기기에서는 안정적이지 않음.',
          '데스크톱: 별도로 패키징된 앱 없음; MLC LLM의 Python 패키지, REST 서버, CLI를 직접 사용.',
          '라이선스: [mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) 저장소에 따라 Apache-2.0.',
          '본 리뷰 작성 시점 기준 비전-언어(이미지 입력) 모델의 공식 지원 없음 — 텍스트 채팅만 가능.',
        ],
        updatedDate: '2026-09-07',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: '역사: MLC LLM과 머신러닝 컴파일', anchor: 'history' },
      { label: 'MLC Chat을 차별화하는 요소', anchor: 'distinctive' },
      { label: '실제 설정 단계: iOS, Android, 데스크톱', anchor: 'setup' },
      { label: '라이선스와 지원 모델', anchor: 'license-models' },
      { label: 'MLC Chat이 적합하지 않은 경우', anchor: 'limitations' },
      { label: '대안 및 경쟁 제품', anchor: 'alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론: 이 시리즈의 마지막 편', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'MLC Chat은 MLC LLM 컴파일러를 기반으로 한 무료 Apache-2.0 라이선스 채팅 앱으로, iOS(App Store를 통해), Android(직접 다운로드 가능한 APK를 통해), 데스크톱(MLC LLM의 Python/REST/CLI 인터페이스를 통해)에서 대규모 언어 모델을 로컬로 실행하며, 범용 런타임 대신 GPU 가속 온디바이스 컴파일을 사용하고, 본 리뷰 작성 시점 기준 비전-언어 모델을 공식적으로 지원하지 않는다.',
          },
          {
            type: 'plain-terms',
            text: 'MLC Chat은 그 모델들을 기기의 그래픽 칩에 맞게 특별히 컴파일함으로써, 인터넷 연결 없이도 휴대폰이나 컴퓨터에서 직접 AI 모델과 대화할 수 있게 해주는 무료 앱이다 — 이 리뷰는 실제 다운로드 링크, 설정 단계, 그리고 어디서 잘 작동하고 어디서 그렇지 않은지를 다룬다.',
          },
        ],
        items: [
          'iOS: App Store에서 직접 이용 가능; Android: 확인된 Google Play 등록 없음, MLC의 GitHub 릴리스에서 APK를 직접 다운로드.',
          '차별화 요소: 모델은 범용 인터프리터를 통해 실행되는 대신, 머신러닝 컴파일을 통해 특정 하드웨어 타깃(Metal, OpenCL, Vulkan, CUDA, ROCm)에 맞춰 미리 컴파일된다.',
          '라이선스: mlc-ai/mlc-llm GitHub 저장소에 따라 Apache-2.0.',
          '본 리뷰 작성 시점 기준 비전-언어(이미지 입력) 모델의 공식 지원 없음 — 텍스트 채팅만 가능하며, 커뮤니티의 비공식 우회 방법은 존재하지만 공식적으로 지원되지 않음.',
          'Android 빌드는 OpenCL GPU 지원에 의존하며, 일부 기기에서는 작동이 확인되었지만 다른 기기에서는 안정적이지 않음.',
          '이것은 PromptQuorum의 11편짜리 로컬 AI 도구 리뷰 시리즈의 마지막 편이다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 MLC Chat 앱 자체에 특히 초점을 맞춘다. 그 아래에 있는 MLC LLM 컴파일러와 TVM 기반 런타임에 대한 더 깊은 기술적 설명은 PromptQuorum의 전용 [MLC LLM 설명](/ko/power-local-llm/mlc-llm-explained) 글을 참고하라. 이 리뷰는 그 내용을 의도적으로 반복하지 않는다.',
          },
        ],
      },
      history: {
        id: 'history',
        title: '역사: MLC LLM과 머신러닝 컴파일',
        content: [
          '**MLC Chat은 [MLC LLM](https://github.com/mlc-ai/mlc-llm) 위에 구축되었다.** 이 프로젝트 자체 저장소는 이를 여러 플랫폼에서 AI 모델을 개발, 최적화, 배포할 수 있게 해주는 "ML 컴파일을 갖춘 범용 LLM 배포 엔진"으로 설명한다. MLC LLM 저장소 자체 문서는 그 기술적 계보로 [Apache TVM](https://tvm.apache.org)(2018년)과 관련 컴파일러 연구(TensorIR, MetaSchedule)를 인용한다 — TVM은 MLC 프로젝트가 자신의 머신러닝 컴파일 기법을 구축하는 기반이 되는 딥러닝 컴파일러 스택이다.',
          '**"MLC LLM"과 "MLC Chat"의 구분은 중요하며 자주 혼동된다.** MLC LLM은 기반이 되는 컴파일러이자 실행 엔진이다 — PromptQuorum이 [MLC LLM 설명](/ko/power-local-llm/mlc-llm-explained)에서 깊이 다루는 대상이다. MLC Chat은 그 위에 구축된, 특히 iOS와 Android용으로 패키징된 소비자용 애플리케이션으로, 기술에 익숙하지 않은 사용자도 컴파일러를 직접 다루지 않고 모델을 다운로드해 채팅을 시작할 수 있게 해준다.',
          '**MLC Chat은 MLC LLM 프로젝트 자체를 유지 관리하는 것과 동일한 MLC AI 팀**(GitHub 조직 [mlc-ai](https://github.com/mlc-ai))이 유지 관리하며, 기반이 되는 MLC LLM 저장소와 동일한 Apache-2.0 라이선스를 따른다.',
        ],
        faqs: [
          {
            q: 'MLC Chat은 MLC LLM과 같은 것인가?',
            a: '아니다, 둘은 밀접하게 관련되어 있고 종종 서로 바꿔 사용되지만 다르다. MLC LLM은 여러 플랫폼에서 GPU 가속 온디바이스 추론을 위해 모델을 컴파일하는 기반 컴파일러이자 실행 엔진이다 — PromptQuorum의 전용 글 MLC LLM 설명을 참고하라. MLC Chat은 같은 팀이 그 엔진 위에 구축한, 특히 iOS와 Android용으로 패키징된 소비자용 앱이다.',
          },
        ],
      },
      distinctive: {
        id: 'distinctive',
        title: 'MLC Chat을 차별화하는 요소',
        content: [
          '대부분의 로컬 LLM 채팅 앱은 실행 시점에 발견한 하드웨어에서 모델 파일을 해석하는 단일한 범용 추론 런타임(llama.cpp 등)에 의존한다. MLC Chat의 기반이 되는 MLC LLM 엔진은 다른 접근 방식을 취한다: 머신러닝 컴파일 기법을 사용해 특정 하드웨어 타깃에 맞춰 모델을 미리 컴파일한 다음, 그 컴파일된 결과물을 대상 기기에서 실행하도록 전달한다.',
          'MLC LLM 자체 프로젝트 문서에 따르면, 이 컴파일 방식은 플랫폼에 따라 광범위한 GPU 백엔드를 대상으로 한다: Apple Silicon 및 Apple 모바일 GPU용 Metal, Android GPU(Adreno 및 Mali)용 OpenCL, 데스크톱 Linux 및 Windows용 Vulkan, CUDA, 또는 ROCm. 이 프로젝트는 또한 브라우저에서 모델을 실행하기 위한 WebGPU 및 WebAssembly 지원도 문서화하고 있으며, 실행 구성 요소인 MLCEngine은 REST, Python, JavaScript, iOS, Android 인터페이스를 통해 OpenAI 호환 API를 제공한다.',
          'MLC Chat에 특히 해당하는 실질적인 결과는 다음과 같다: 기반이 되는 컴파일이 하드웨어 타깃별로 특화되어 있기 때문에, 이 앱은 더 범용적인 런타임이 완전히 활용하지 못할 수도 있는 모바일 칩에서 GPU 가속을 달성할 수 있다 — 다만 그 대가로 어디서나 작동하는 하나의 범용 바이너리가 아니라, 특정 하드웨어/모델 조합마다 컴파일된 빌드가 필요하다.',
        ],
        faqs: [
          {
            q: 'MLC Chat은 범용 로컬 LLM 실행 도구와 무엇이 다른가?',
            a: 'MLC Chat의 기반이 되는 MLC LLM 엔진은 실행 시점에 모델을 범용적으로 해석하는 대신, 머신러닝 컴파일을 사용해 특정 하드웨어 타깃(플랫폼에 따라 Metal, OpenCL, Vulkan, CUDA, 또는 ROCm)에 맞춰 모델을 미리 컴파일한다. 이는 MLC LLM 자체 프로젝트 자료에서 핵심적인 차별화 접근 방식으로 문서화되어 있다.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: '실제 설정 단계: iOS, Android, 데스크톱',
        content: [
          '다음 단계는 PromptQuorum이 직접 확인한 내용 — App Store에서의 MLC Chat의 실제 존재, Android APK 배포 경로, 데스크톱 사용을 위한 MLC LLM의 문서화된 빠른 시작 경로 — 를 반영한다.',
        ],
        numberedItems: [
          {
            title: 'iOS: App Store에서 다운로드한다.',
            whyItMatters: 'MLC Chat은 [Apple App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937)에 직접 등록되어 있다 — 표준 설치이며 사이드로딩이 필요하지 않다.',
          },
          {
            title: 'Android: GitHub에서 APK를 직접 다운로드한다.',
            whyItMatters: 'MLC는 현재 확인된 Google Play 스토어 등록을 유지하지 않는다. Android 빌드는 [MLC 자체 GitHub 릴리스](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk)에서 직접 APK 다운로드 형태로 배포되며, Android 설정에서 "출처를 알 수 없는 앱 설치"를 활성화해야 한다.',
          },
          {
            title: '의존하기 전에 Android GPU 호환성을 확인한다.',
            whyItMatters: 'Android 빌드는 OpenCL GPU 지원에 의존한다. 이는 일부 기기(특정 삼성 갤럭시 모델 등)에서는 작동이 확인되었지만, 다른 기기(OpenCL 지원이 제한적인 일부 구글 픽셀 모델 등)에서는 안정적으로 작동하지 않는다 — 완전한 GPU 가속을 가정하기 전에 구체적인 기기를 확인하라.',
          },
          {
            title: '데스크톱: MLC LLM의 Python 패키지, REST 서버, 또는 CLI를 직접 사용한다.',
            whyItMatters: '별도로 패키징된 MLC Chat 데스크톱 애플리케이션은 없다. 데스크톱 사용자는 conda 환경에 `mlc-llm` Python 패키지를 설치하고, [MLC LLM의 빠른 시작 문서](https://llm.mlc.ai/docs/get_started/quick_start.html)에 따라 `MLCEngine`의 `chat.completions.create()` API, REST 서버, 또는 명령줄을 통해 상호작용한다.',
          },
          {
            title: '자신의 하드웨어에 맞는 컴파일된 모델을 선택한다.',
            whyItMatters: 'MLC LLM의 빠른 시작 문서는 int4로 양자화된 빌드인 `Llama-3-8B-Instruct-q4f16_1-MLC`를 사용해 워크플로우를 시연하며, 이를 위해 최소 6GB의 여유 VRAM이 필요하다고 문서화하고 있다 — 더 큰 모델에 도전하기 전에 하드웨어 요구 사항을 가늠하는 데 유용한 기준이다.',
          },
        ],
      },
      licenseModels: {
        id: 'license-models',
        title: '라이선스와 지원 모델',
        content: [
          '**라이선스: Apache-2.0.** MLC Chat 앱과 기반이 되는 MLC LLM 저장소 모두 [mlc-ai/mlc-llm GitHub 저장소](https://github.com/mlc-ai/mlc-llm)에서 직접 확인되는 Apache-2.0 라이선스로 공개되어 있다.',
          '**모델 지원 범위는 어떤 단일 빠른 시작 예시보다도 넓다.** MLC LLM 자체 빠른 시작 문서는 `Llama-3-8B-Instruct-q4f16_1-MLC`로 워크플로우를 시연하지만, 이 프로젝트의 모델 라이브러리는 지원되는 하드웨어 타깃용으로 컴파일된 다른 오픈 웨이트 모델 계열로도 확장된다 — PromptQuorum은 컴파일된 모델의 가용성이 새 릴리스가 나올 때마다 변경되므로, 단일한 캐시된 목록에 의존하지 말고 현재 세트를 확인하려면 [MLC LLM 자체 모델 목록](https://llm.mlc.ai)을 직접 확인하기를 권한다.',
          '**공식적인 비전-언어 모델 지원 없음.** 본 리뷰 작성 시점 기준, MLC LLM은 비전-언어(이미지 입력) 모델을 공식적으로 지원하지 않는다 — 채팅 앱에서 이미지와 텍스트 입력을 함께 처리하기 위한 내장 모듈을 제공하지 않는다. 비전-언어 모델 코드를 MLC LLM의 컴파일 파이프라인에 맞게 조정하는 커뮤니티 프로젝트가 존재하지만, 이들은 MLC AI 팀이 공식적으로 유지 관리하거나 지원하지 않으며, PromptQuorum은 그 현재 신뢰성을 검증하지 않았다.',
        ],
        faqs: [
          {
            q: 'MLC Chat은 어떤 라이선스를 사용하는가?',
            a: 'Apache-2.0이며, mlc-ai/mlc-llm GitHub 저장소에서 직접 확인되고, MLC LLM 엔진과 그 위에 구축된 MLC Chat 앱을 모두 포함한다.',
          },
          {
            q: 'MLC Chat은 LLaVA 같은 비전 모델을 지원하는가?',
            a: '본 리뷰 작성 시점 기준으로는 공식적으로 지원하지 않는다. MLC LLM은 비전-언어(이미지 입력) 모델에 대한 공식 지원을 제공하지 않는다. 비전-언어 모델 코드를 MLC LLM의 파이프라인에 맞게 조정하는 커뮤니티 제작 우회 방법이 존재하지만, 이는 비공식적이며 그 현재 신뢰성은 본 리뷰에서 검증되지 않았다. 비전이 가능한 로컬 모델에 대해서는 대신 PromptQuorum의 LLaVA 리뷰, Idefics 리뷰, 또는 Ollama 비전 모델 가이드를 참고하라.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'MLC Chat이 적합하지 않은 경우',
        content: [
          'MLC Chat은 진정으로 유용한 크로스플랫폼 온디바이스 채팅 앱이지만, 다음과 같은 상황에는 잘못된 선택이다:',
        ],
        items: [
          '**가능한 한 가장 간단한 설정을 원하는 데스크톱 사용자.** MLC Chat에는 패키징된 데스크톱 애플리케이션이 없다 — 데스크톱 사용은 Python 패키지를 설치하고 REST 서버, CLI, 또는 Python API로 작업하는 것을 의미한다. 원클릭 데스크톱 경험을 원하는 사용자는 [Ollama](/ko/power-local-llm/ollama-vision-models-review)나 [LM Studio](https://lmstudio.ai)가 훨씬 더 편리하다는 것을 알게 될 것이다. MLC Chat의 모바일 GPU 컴파일 장점은 데스크톱에서 같은 방식으로 적용되지 않는다.',
          '**비전 또는 이미지 입력 작업.** MLC LLM은 비전-언어 모델을 공식적으로 지원하지 않는다. 이미지를 볼 수 있는 모델을 실행하는 사용 사례라면, 대신 PromptQuorum의 [LLaVA 리뷰](/ko/power-local-llm/llava-review), [Idefics 리뷰](/ko/power-local-llm/idefics-review), 또는 [Ollama 비전 모델 가이드](/ko/power-local-llm/ollama-vision-models-review)를 참고하라.',
          '**이용 가능한 가장 큰 모델.** 모바일 하드웨어는 실질적인 제약을 부과한다 — MLC LLM 자체 빠른 시작 예시조차 int4 양자화된 8B 파라미터 모델에 최소 6GB의 여유 VRAM이 필요하며, 휴대폰의 GPU와 메모리는 데스크톱 GPU보다 더 제한적이다. 이용 가능한 가장 큰 오픈 웨이트 모델을 로컬로 실행하고 싶은 사용자는 VRAM 여유가 더 큰 데스크톱 도구가 더 적합하다.',
          '**OpenCL 지원이 제한적인 하드웨어를 사용하는 Android 사용자.** Android 빌드의 GPU 가속은 OpenCL에 의존하며, 일부 기기에서는 작동이 확인되었지만 다른 기기에서는 안정적이지 않다 — 매끄러운 경험을 가정하기 전에 구체적인 기기 모델을 확인하라.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '대안 및 경쟁 제품',
        itemHeadings: true,
        columns: ['도구', '가장 적합한 용도', '라이선스'],
        rows: [
          {
            '도구': '[Ollama](/ko/power-local-llm/ollama-vision-models-review)',
            '가장 적합한 용도': '`ollama pull`/`ollama run`을 통한 데스크톱 중심의 단순함; MLC Chat보다 더 넓은 비전 모델 지원',
            '라이선스': 'MIT',
          },
          {
            '도구': '[LM Studio](https://lmstudio.ai)',
            '가장 적합한 용도': '내장 모델 브라우저를 갖춘 GUI 중심 데스크톱 경험',
            '라이선스': '무료, 독점 애플리케이션',
          },
          {
            '도구': '[llama.cpp](https://github.com/ggml-org/llama.cpp) 직접 사용',
            '가장 적합한 용도': '사전 컴파일 단계 없이 추론에 대한 최대한의 저수준 제어',
            '라이선스': 'MIT',
          },
          {
            '도구': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '가장 적합한 용도': '또 다른 전용 모바일 로컬 LLM 앱; 직접 비교는 PromptQuorum 자체 리뷰를 참고',
            '라이선스': '다양함 — PromptQuorum의 PocketPal AI 리뷰 참고',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'MLC Chat이란 무엇인가?',
            a: 'MLC Chat은 자신의 기기에서 직접 대규모 언어 모델을 실행할 수 있는 무료 크로스플랫폼 채팅 앱으로, MLC AI 팀이 자체 MLC LLM 컴파일러 및 런타임 위에 만들었으며, Apache-2.0 라이선스를 따른다.',
          },
          {
            q: 'MLC Chat은 어디에서 다운로드할 수 있는가?',
            a: 'iOS에서는 App Store에서 직접 다운로드한다. Android에서는 MLC가 현재 Google Play에 등록하지 않았다 — MLC 자체 GitHub 릴리스에서 APK를 직접 다운로드해야 하며, 이를 위해서는 출처를 알 수 없는 앱 설치를 허용해야 한다. 데스크톱에서는 별도로 패키징된 앱이 없다; 대신 MLC LLM의 Python 패키지, REST 서버, 또는 명령줄 인터페이스를 사용하라.',
          },
          {
            q: 'MLC Chat은 무료인가?',
            a: '그렇다. 이 앱과 기반이 되는 MLC LLM 엔진은 오픈소스 Apache-2.0 라이선스로 공개되어 있다.',
          },
          {
            q: 'MLC Chat은 비전 모델을 지원하는가?',
            a: '본 리뷰 작성 시점 기준으로는 공식적으로 지원하지 않는다. MLC LLM은 비전-언어(이미지 입력) 모델을 공식적으로 지원하지 않는다. 비공식적인 커뮤니티 우회 방법이 존재하지만 본 리뷰에서는 검증되지 않았다.',
          },
          {
            q: 'MLC Chat은 Ollama나 llama.cpp와 무엇이 다른가?',
            a: 'MLC Chat의 기반이 되는 MLC LLM 엔진은 실행 시점에 모델을 범용적으로 해석하는 대신, Apache TVM 컴파일러 계보에서 나온 기법을 사용해 특정 하드웨어 타깃에 맞춰 모델을 미리 컴파일한다. 이 프로젝트는 이를 특히 모바일 칩에서의 GPU 가속을 위한 장점으로 내세운다. Ollama와 llama.cpp는 더 범용적인 런타임 접근 방식을 취하며, Ollama의 경우 현재 더 넓은 비전 모델 지원을 제공한다.',
          },
          {
            q: '이것이 PromptQuorum의 로컬 AI 도구 시리즈의 마지막 글인가?',
            a: '그렇다. 이 MLC Chat 리뷰는 Whisper.cpp, faster-whisper, Piper TTS, Coqui TTS, XTTS v2, Bark, StyleTTS 2, LLaVA, Ollama 비전 모델, Idefics, MLC Chat을 다루는 11편짜리 시리즈의 마지막 편이다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론: 이 시리즈의 마지막 편',
        content:
          'MLC Chat은 진정으로 독특한 전제를 실현한다: 하나로 모든 것을 처리하는 런타임 대신 머신러닝 컴파일을 통해 달성되는 크로스플랫폼, GPU 가속 온디바이스 LLM 채팅으로, 실제 iOS App Store 등록과 직접 다운로드 가능한 Android APK를 갖추고 있으며, 모두 관대한 Apache-2.0 라이선스 아래 있다. 다만 데스크톱 사용자에게 가장 편리한 선택은 아니다 — 그 워크플로우는 패키징된 앱이 아니라 Python 패키지와 REST/CLI 인터페이스를 의미한다 — 그리고 현재로서는 비전-언어 모델을 공식적으로 전혀 지원하지 않는다. 컴파일되고 하드웨어 타깃에 특화된 접근 방식이 효과를 발휘하는 모바일 온디바이스 채팅에는 특별히 MLC Chat을 선택하라; 가장 간단한 데스크톱 경험을 원한다면 [Ollama](/ko/power-local-llm/ollama-vision-models-review)나 [LM Studio](https://lmstudio.ai)를 선택하고, 비전이 가능한 로컬 모델이 필요하다면 대신 PromptQuorum의 [LLaVA](/ko/power-local-llm/llava-review) 또는 [Idefics](/ko/power-local-llm/idefics-review) 리뷰를 선택하라. MLC Chat 뒤에 있는 컴파일러에 대한 더 깊은 기술적 그림은 PromptQuorum의 [MLC LLM 설명](/ko/power-local-llm/mlc-llm-explained)을 참고하라. 이 리뷰로 PromptQuorum의 11편짜리 로컬 AI 도구 시리즈가 마무리된다 — 음성 인식(Whisper.cpp, faster-whisper)과 음성 합성(Piper, Coqui TTS, XTTS v2, Bark, StyleTTS 2)에서 시작해 비전-언어 모델(LLaVA, Ollama 비전 모델, Idefics)을 거쳐, 크로스플랫폼 온디바이스 컴파일에 관한 이 마지막 편까지.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 MLC Chat](https://apps.apple.com/us/app/mlc-chat/id6448482937) — 확인된 iOS 가용성.',
          '[MLC Chat Android APK](https://github.com/mlc-ai/binary-mlc-llm-libs/releases/download/Android/mlc-chat.apk) — MLC 자체 GitHub 릴리스에 호스팅된 직접 Android 다운로드 경로.',
          '[GitHub의 mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) — 라이선스(Apache-2.0), 플랫폼 지원, TVM 계보 문서.',
          '[MLC LLM 빠른 시작 문서](https://llm.mlc.ai/docs/get_started/quick_start.html) — 데스크톱 설정 단계, 예시 모델, VRAM 요구 사항.',
          '[MLC LLM Android SDK 문서](https://llm.mlc.ai/docs/deploy/android.html) — Android OpenCL 종속성 및 기기 호환성 참고 사항.',
          'MLC LLM의 비전-언어 모델 지원에 대한 PromptQuorum의 조사로, 본 리뷰 작성 시점 기준 공식 VLM 지원이 없으며 비공식 커뮤니티 우회 방법(예: MLC-VLM-template)이 존재함을 확인했다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[MLC LLM 설명(2026)](/ko/power-local-llm/mlc-llm-explained) — MLC Chat 뒤에 있는 컴파일러와 런타임에 대한 더 깊은 기술적 탐구.',
          '[LLaVA 리뷰(2026)](/ko/power-local-llm/llava-review) — MLC Chat이 공식적으로 지원하지 않는 사용 사례를 위한, 비전이 가능한 로컬 모델.',
          '[Idefics 리뷰(2026)](/ko/power-local-llm/idefics-review) — 또 다른 오픈 비전-언어 모델 옵션.',
          '[Ollama 비전 모델(2026)](/ko/power-local-llm/ollama-vision-models-review) — 오늘날 Ollama를 통해 실제로 pull 가능한 비전 모델.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 또 다른 전용 모바일 로컬 LLM 앱, 직접 비교용.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'MLC Chat 리뷰(2026): MLC LLM 위에 구축된 모바일 앱, 솔직하게 평가하다',
      description:
        'MLC Chat 리뷰 2026: MLC LLM 위에 구축된 모바일/데스크톱 채팅 앱. 실제 iOS App Store 및 Android APK 다운로드 경로, 실제 설정 단계, Apache-2.0 라이선스, 온디바이스 AI 채팅의 솔직한 한계.',
      url: 'https://promptquorum.com/ko/power-local-llm/mlc-chat-review',
      inLanguage: 'ko',
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: '모바일 및 데스크톱용 온디바이스 LLM 채팅 앱을 평가 중인 사용자와 개발자' },
      about: [
        { '@type': 'Thing', name: 'MLC Chat' },
        { '@type': 'Thing', name: 'MLC LLM' },
        { '@type': 'Thing', name: 'On-device inference' },
        { '@type': 'Thing', name: 'Machine learning compilation' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/mlc-chat-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'MLC Chat 리뷰(2026)', item: 'https://promptquorum.com/ko/power-local-llm/mlc-chat-review' },
      ],
    },
  },
}
