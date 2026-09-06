// Maid Review: Open-Source Android LLM Chat App (Local GGUF via llama.cpp + Remote Providers)
// Slug: maid-review
// Companion to: pocketpal-ai-review, private-llm-review, enclave-ai-review, best-local-llm-apps-android-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/maid-review-hero-en.webp',
    title: 'Maid Review (2026): Open-Source Local LLM Chat App for Android',
    seoTitle: 'Maid Review 2026: Open-Source Android LLM App',
    intro:
      'Maid is a free, open-source (MIT-licensed) chat app that runs GGUF language models locally via [llama.cpp](https://github.com/ggml-org/llama.cpp), or connects to remote providers like Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, and OrcaRouter using your own API key. The project started in 2023 as a cross-platform Flutter app built by Australian developer Dane Madsen, but the codebase was rewritten in React Native for version 3.0.0 (March 2026), and today it ships as an Android-only app — the desktop and iOS builds that existed in the older Flutter releases are gone from the current version. This review covers what Maid does today, what changed in the rewrite, its real platform and hardware requirements, its pricing (free, no paid tier), and who should — and should not — use it instead of a commercial alternative.',
    metaDescription:
      'Maid review: a free, open-source (MIT) Android app that runs GGUF models locally via llama.cpp or connects to remote AI providers. Platforms, history, and who it fits.',
    twitterDescription:
      'Maid review 2026: the free, open-source Android app for local GGUF chat via llama.cpp, now React Native and Android-only after a 2026 rewrite. What changed, and who it fits.',
    audience:
      'Android users who want a free, open-source local or multi-provider AI chat app and are comfortable with a community-maintained, Android-only project.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Maid review',
    targetKeywords: [
      'maid ai review',
      'maid app android',
      'maid llama.cpp app',
      'maid open source llm app',
      'maid vs pocketpal ai',
      'free local llm app android',
      'gguf chat app android',
      'mobile artificial intelligence maid',
    ],
    current_models_mentioned: ['GGUF models via llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Maid is a free, open-source (MIT license) Android app that runs GGUF language models locally via llama.cpp, and can also connect to remote providers — Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, and OrcaRouter — using your own API key.** It is developed by the [Mobile-Artificial-Intelligence GitHub organization](https://github.com/Mobile-Artificial-Intelligence/maid), founded by Dane Madsen, who started the project in October 2023. The app was originally built with Flutter and shipped for Android, iOS (sideload), Windows, macOS, and Linux through version 2.0.7 (April 2025); version 3.0.0 (March 2026) rewrote the app in React Native and narrowed distribution to Android only — there is currently no iOS, Windows, macOS, or Linux build. The project remains actively developed, with commits and merged pull requests as recent as September 2026.',
    quickAnswerTop: {
      en: {
        question: 'Is Maid worth installing for local AI chat on Android?',
        answer:
          'Yes, if you are on Android and want a free, open-source app that can run GGUF models entirely on-device via llama.cpp, or connect to your own accounts with providers like OpenAI, Anthropic, or Ollama. It is not a fit if you use iPhone, Mac, Windows, or Linux — the current version 3.0.0 dropped those platforms when the app was rewritten from Flutter to React Native, and only ships an Android build today.',
        bullets: [
          'Free and open source under the MIT license — no subscription, source code public on [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Android only as of version 3.0.0 (March 2026); available on [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) and as a direct APK from [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'Runs GGUF models locally via llama.cpp, or connects to Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, and OrcaRouter with your own API key.',
          'Started as a cross-platform Flutter app by developer Dane Madsen in October 2023; rewritten in React Native for v3.0.0, dropping iOS, Windows, macOS, and Linux builds in the process.',
          'Actively maintained at review time — commits and merged pull requests as recent as September 2026, with 10 open issues and 283 forks on GitHub.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Maid?', anchor: 'what-is-maid' },
      { label: 'Who Built Maid, and What Changed in the Rewrite?', anchor: 'history-and-developer' },
      { label: 'How to Get Started with Maid', anchor: 'getting-started' },
      { label: 'Which Models Does Maid Support?', anchor: 'models-supported' },
      { label: 'Is Maid Available on iPhone, Windows, or Mac?', anchor: 'platform-availability' },
      { label: 'How Much Does Maid Cost?', anchor: 'pricing' },
      { label: 'What Features Does Maid Have?', anchor: 'key-features' },
      { label: 'What Hardware Do You Need?', anchor: 'hardware-requirements' },
      { label: 'Who Should Use Maid', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Maid', anchor: 'who-should-not-use' },
      { label: 'Maid vs. Alternatives', anchor: 'vs-alternatives' },
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
            text: 'Maid is a free, MIT-licensed, open-source Android app that runs GGUF language models locally via llama.cpp or connects to remote AI providers with your own API key, maintained by the Mobile-Artificial-Intelligence GitHub organization founded by developer Dane Madsen.',
          },
          {
            type: 'plain-terms',
            text: 'It is an app you install on an Android phone to chat with an AI model that either runs on your own device or through an account you already have with a provider like OpenAI or Anthropic — the code is public on GitHub and the app itself is free. It used to also work on iPhone, Windows, Mac, and Linux, but the current version dropped those platforms.',
          },
        ],
        items: [
          'Free and open source (MIT license); source code and issue tracker are public on [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Founded by Dane Madsen in October 2023 as a cross-platform Flutter app; now maintained by the Mobile-Artificial-Intelligence organization.',
          'Runs GGUF models via llama.cpp entirely on-device, or connects to Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, and OrcaRouter with your own API key.',
          'Version 3.0.0 (March 2026) rewrote the app in React Native and narrowed it to Android only — the older Flutter releases also shipped for iOS (sideload), Windows, macOS, and Linux, but those builds are not part of the current version.',
          'Available on [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) and as a direct APK/AAB download from [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'No paid tier found in the app or its documentation at review time; the base app and its local chat function are free.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the public [GitHub repository](https://github.com/Mobile-Artificial-Intelligence/maid), its README, release history, and the Google Play listing, checked in September 2026. PromptQuorum has not conducted independent hands-on benchmarking of Maid for this review — performance figures below are general local-LLM hardware guidance, not measurements specific to this app.',
          },
        ],
      },
      overview: {
        id: 'what-is-maid',
        title: 'What Is Maid?',
        content: [
          '**Maid is an Android app that either downloads and runs open-weight language models in the GGUF format locally on the device via [llama.cpp](https://github.com/ggml-org/llama.cpp), or sends chat requests to a remote provider using an API key you supply yourself.** The app is [MIT-licensed](https://github.com/Mobile-Artificial-Intelligence/maid/blob/main/LICENSE), meaning the full source code is public and free to inspect, fork, or modify.',
          'That dual mode is the app\'s defining trait: it is not exclusively a local-inference client. The same interface can run a GGUF file entirely offline, or route a conversation to a cloud provider like OpenAI or Anthropic through your own account, or to a self-hosted [Ollama](https://ollama.com) server on your network. According to its README, the project describes itself as "not affiliated with Huggingface, Meta (Facebook), MistralAi, OpenAI, Google, Microsoft or any other company providing a model compatible with this application."',
        ],
        note: 'GGUF is a file format for packaging quantized open-weight language models so they can run efficiently on consumer hardware via runtimes like llama.cpp, instead of calling a cloud API for every response.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Who Built Maid, and What Changed in the Rewrite?',
        content: [
          '**Maid was created by Dane Madsen, who started the project in October 2023 as a cross-platform Flutter app for running GGUF and llama.cpp models.** The project is now hosted under the [Mobile-Artificial-Intelligence GitHub organization](https://github.com/Mobile-Artificial-Intelligence/maid) rather than Madsen\'s personal account; his original repository, [danemadsen/maid](https://github.com/danemadsen/maid), is now listed by GitHub as a fork of the organization\'s repository, and its description still reads "cross-platform Flutter app" even though that description no longer matches the current codebase.',
          'The version history shows a clear split. Releases through **v2.0.7 (April 2025)** were built with Flutter and shipped installable artifacts for Android (APK/AAB), iOS (a sideloadable `.ipa`, not an App Store listing), Linux (`.zip`/`.AppImage`), macOS (`.dmg` for both Intel and Apple Silicon), Windows (`.zip`), and even a web build. **Version 3.0.0 (published March 10, 2026)** is a full rewrite in React Native, and its release only includes Android artifacts (APK and AAB variants) — no iOS, Windows, macOS, or Linux files are attached. That release\'s changelog lists vision-model support, system text-to-speech, system speech recognition, reasoning-model support, Markdown rendering, and an upvote/downvote report feature the notes describe as a Google Play requirement.',
          'Development has continued past that rewrite: the repository shows merged pull requests and commits dated as recently as early September 2026, including a fix to the chat system and the addition of [OrcaRouter](https://www.orcarouter.ai) as a remote provider. At review time the repository had roughly 2,700 stars, 283 forks, and 10 open issues — evidence of an actively used and actively maintained project, though a single-organization open-source one rather than a funded company with a support team.',
        ],
        items: [
          'Founder: Dane Madsen (GitHub: [danemadsen](https://github.com/danemadsen)), who started the project in October 2023.',
          'Current maintainer: the [Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence) GitHub organization; Madsen\'s personal repository is now a fork of the organization\'s repository.',
          'License: MIT — permissive open source, free to use, fork, and modify.',
          'Major architecture change: Flutter (cross-platform, through v2.0.7, April 2025) → React Native, Android-only (from v3.0.0, March 2026).',
          'Roughly 2,700 GitHub stars, 283 forks, and 10 open issues at review time, with commits and merged pull requests dated as recently as September 2026.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started with Maid',
        content: [
          '**Getting a working chat in Maid takes a few steps after installing the current Android release.** There is no mandatory account for local, on-device chat; an optional sign-in exists only for the app\'s cloud-backup feature.',
        ],
        numberedItems: [
          {
            title: 'Install the app on Android',
            whyItMatters: 'Download Maid from [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid), or install the APK directly from the [GitHub Releases page](https://github.com/Mobile-Artificial-Intelligence/maid/releases) if you prefer to sideload it. No iOS, Windows, macOS, or Linux build is currently available.',
          },
          {
            title: 'Choose local or remote mode',
            whyItMatters: 'Decide whether you want to download a GGUF model and run it fully on-device via llama.cpp, or connect the app to a remote provider (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, or OrcaRouter) using an API key or server address you already have.',
          },
          {
            title: 'Download or import a model (local mode)',
            whyItMatters: 'For on-device chat, download a GGUF model sized for your phone\'s RAM (see the hardware section below), or load a custom GGUF file from local storage or [Hugging Face](https://huggingface.co).',
          },
          {
            title: 'Start chatting',
            whyItMatters: 'Once a local model is loaded or a remote provider is configured, start a conversation. Chats can be created, renamed, deleted, and exported or imported as JSON files from within the app.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Which Models Does Maid Support?',
        itemHeadings: true,
        columns: ['Access mode', 'What it connects to', 'Notes'],
        rows: [
          {
            'Access mode': 'Local (on-device)',
            'What it connects to': 'Any GGUF-format model, loaded via [llama.cpp](https://github.com/ggml-org/llama.cpp)',
            'Notes': 'No fixed curated model list — the app runs whichever GGUF file you download or import, including files from Hugging Face.',
          },
          {
            'Access mode': 'Remote providers',
            'What it connects to': 'Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, [OrcaRouter](https://www.orcarouter.ai)',
            'Notes': 'Requires your own account and API key (or, for Ollama, your own server address); Maid does not bundle or resell access to these providers.',
          },
        ],
        note: 'Because Maid can load any GGUF file, its practical model support is defined by llama.cpp compatibility rather than an app-curated shortlist — this is different from apps like PocketPal AI or Private LLM, which ship a specific quick-download catalog alongside custom-file support.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Is Maid Available on iPhone, Windows, or Mac?',
        itemHeadings: true,
        columns: ['Platform', 'Availability', 'Notes'],
        rows: [
          {
            'Platform': 'Android',
            'Availability': 'Available now',
            'Notes': 'Distributed via [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) and as a direct APK/AAB from [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases). This is the only platform the current version 3.0.0 targets.',
          },
          {
            'Platform': 'iPhone / iPad',
            'Availability': 'Not currently available',
            'Notes': 'Older Flutter releases (through v2.0.7, April 2025) shipped a sideloadable `.ipa` file, but there was never an App Store listing, and no iOS artifact is attached to the current v3.0.0 release.',
          },
          {
            'Platform': 'Windows / macOS / Linux',
            'Availability': 'Not currently available',
            'Notes': 'Desktop builds (`.zip`, `.AppImage`, `.dmg`) existed for the Flutter-based releases through v2.0.7, but the React Native rewrite (v3.0.0) does not ship desktop artifacts. Desktop users who want a local GGUF chat client should look at Ollama, LM Studio, or Jan AI instead.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'How Much Does Maid Cost?',
        content: [
          '**Maid is free to download and free to use, for both local on-device chat and remote-provider chat, and the source code is public under the MIT license.** No in-app purchase, subscription, or paid tier was found in the app\'s repository, release notes, or Google Play listing at review time.',
          'The costs a Maid user actually pays are indirect: device storage for downloaded GGUF model files (typically several gigabytes each), and, for remote-provider mode, whatever Anthropic, OpenAI, Mistral, DeepSeek, Novita, Ollama, or OrcaRouter separately charge for API usage under your own account with that provider — Maid itself does not add a markup or subscription on top of those provider costs.',
        ],
        items: [
          '**Base app:** Free, no subscription, MIT-licensed open source.',
          '**Local chat (on-device GGUF models):** Free — no per-message or per-token charge, since inference runs on your own device.',
          '**Remote-provider chat:** Free to use through Maid, but you pay whatever the provider (OpenAI, Anthropic, etc.) charges under your own account and API key.',
          '**Optional cloud backup:** The app supports registering or logging in to back up settings and chat history via Supabase; this review found no separate charge tied to that feature.',
          '**Storage cost:** Not monetary, but real — each downloaded GGUF model consumes device storage, typically several gigabytes per model.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'What Features Does Maid Have?',
        content: [
          '**Beyond the core local/remote chat split, Maid\'s README and release notes describe a set of features added across its release history.** These include:',
        ],
        items: [
          '**Local and remote inference in one app.** Switch between fully offline GGUF chat via llama.cpp and cloud providers (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) with your own credentials.',
          '**Conversation management.** Create, rename, delete, export, and import chats as JSON files.',
          '**Custom system prompt.** Set a global system prompt to adjust the assistant\'s behavior and tone.',
          '**Adjustable generation parameters.** Tune settings such as temperature, top-p, top-k, and context length per session.',
          '**Voice output via a companion app.** Maid pairs with [Maise](https://github.com/Mobile-Artificial-Intelligence/maise), a separate open-source Android text-to-speech engine from the same GitHub organization, for reading responses aloud.',
          '**Optional cloud backup.** Users can register or log in to sync settings and chat history via Supabase; this is opt-in, not required to use the app.',
          '**Material You theming.** Light and dark themes that follow the Android system preference.',
          '**No telemetry or ads,** per the project\'s own README.',
        ],
        note: 'Feature availability can vary by app version since the project ships frequent releases. Check the in-app changelog or the [GitHub releases page](https://github.com/Mobile-Artificial-Intelligence/maid/releases) for what is live in your installed version, especially given how much changed between the Flutter-based v2.x line and the React Native v3.0.0 rewrite.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'What Hardware Do You Need to Run Maid?',
        content: [
          '**The GGUF model you pick, not the app itself, sets your real hardware floor for local chat — as general guidance for GGUF models on phones, a quantized 2–4B parameter model needs roughly 3–4 GB of free RAM, while a 7–8B parameter model needs 6–8 GB or more.** This is standard local-LLM sizing guidance, not a Maid-specific benchmark; PromptQuorum has not independently benchmarked Maid\'s exact memory usage per model.',
          'Because Maid runs local inference through llama.cpp, general Android llama.cpp performance guidance applies: a recent device with more RAM and a modern chipset will load and run larger models more comfortably than an older, storage- or memory-constrained phone. If you use remote-provider mode instead of local inference, on-device hardware requirements are minimal — the model runs on the provider\'s servers, and your phone just needs a working internet connection.',
        ],
        items: [
          'Small models (2–4B parameters, quantized): usable on most recent Android phones with 4 GB+ of free RAM.',
          'Mid-size models (7–8B parameters, quantized): recommended device RAM of 8 GB or more for acceptable responsiveness.',
          'Storage: budget several gigabytes of free device storage per downloaded GGUF model file.',
          'Remote-provider mode: no meaningful local hardware requirement beyond a working internet connection, since inference runs on the provider\'s infrastructure.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Maid',
        items: [
          '**Android users who want both local and cloud chat in one free app.** The ability to switch between fully offline GGUF inference and your own accounts with providers like OpenAI or Anthropic, in a single open-source client, is Maid\'s clearest differentiator.',
          '**Users who want to run an unrestricted GGUF file, not a curated model list.** Because the app loads any GGUF model via llama.cpp rather than shipping a fixed catalog, it suits people who already have a specific model in mind.',
          '**Developers and technically curious users comfortable with open-source projects.** The public GitHub repository, issue tracker, and active release history suit users willing to read release notes or file an issue rather than expect dedicated customer support.',
          '**Users who want to inspect or modify the code themselves.** The MIT license permits forking and modification, which matters to anyone who wants to audit exactly what the app does before trusting it with private conversations or provider API keys.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Maid',
        items: [
          '**iPhone, iPad, Windows, macOS, or Linux users.** The current version 3.0.0 is Android-only; there is no App Store listing and no supported desktop build. Users on those platforms should look at Private LLM or PocketPal AI (Apple), or Ollama, LM Studio, or Jan AI (desktop) instead.',
          '**Users who want a fully guided, zero-configuration experience.** Choosing between local and remote modes, picking a model size for your device, and managing API keys is part of the workflow; users who want the app to make those decisions for them may prefer a more curated app like Loci or Enclave AI.',
          '**Users who want the most demanding models (70B+ parameters) run locally.** Phone hardware, even flagship Android devices, cannot practically run models at that scale on-device — those workloads need a desktop, workstation, or a cloud API/remote provider regardless of which mobile app is used.',
          '**Users who expect dedicated commercial support.** Maid is maintained by an open-source GitHub organization rather than a funded company with a support team; users who need guaranteed response times or an enterprise support agreement should look at a commercially backed alternative.',
          '**Users who need the old cross-platform build.** Anyone relying on Maid\'s previous iOS, Windows, macOS, or Linux support from the Flutter-based v2.x releases should know those platforms are not part of the current, actively maintained version.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Maid vs. Alternatives',
        itemHeadings: true,
        columns: ['App', 'License / cost', 'Platforms', 'Model flexibility'],
        rows: [
          {
            'App': 'Maid',
            'License / cost': 'Free, open source (MIT)',
            'Platforms': 'Android only (from v3.0.0)',
            'Model flexibility': 'Any GGUF file via llama.cpp, or remote providers (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) with your own API key',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'License / cost': 'Free, open source (MIT)',
            'Platforms': 'iPhone/iPad, Android',
            'Model flexibility': 'Quick-download shortlist plus any GGUF file from Hugging Face',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'License / cost': 'Paid, one-time purchase; closed source',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Model flexibility': '140+ models, with OmniQuant and GPTQ quantization formats',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'License / cost': 'Free with paid tier; closed source',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Model flexibility': 'Curated on-device model list; Siri and Shortcuts integration',
          },
          {
            'App': 'ChatterUI',
            'License / cost': 'Free, open source (AGPL-3.0)',
            'Platforms': 'Android (build from source)',
            'Model flexibility': 'Runs GGUF files on-device via llama.cpp, or connects to remote APIs; Character Card v2 support',
          },
          {
            'App': 'RikkaHub',
            'License / cost': 'Free, open source',
            'Platforms': 'Android',
            'Model flexibility': 'Multi-provider client (OpenAI/Google/Anthropic-compatible APIs); Material You design',
          },
          {
            'App': 'AnythingLLM Mobile',
            'License / cost': 'Free, open source',
            'Platforms': 'iPhone/iPad, Android',
            'Model flexibility': 'On-device inference, connection to a self-hosted AnythingLLM instance, or any OpenAI-compatible provider',
          },
        ],
        note: 'LLM Farm, a formerly popular open-source iOS GGUF chat app, was delisted from the App Store and marked "temporarily unavailable" on its own GitHub repository at review time — it is omitted from active recommendations above for that reason. Layla, another on-device assistant app, reportedly had its free "Layla Lite" tier removed from Google Play; check [layla-network.ai](https://www.layla-network.ai) directly for current availability before assuming it is installable.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Maid free?',
            a: 'Yes. Maid is free to download and free to use for both local on-device chat and remote-provider chat, and the app is open source under the MIT license. No paid tier or in-app purchase was found in the app or its documentation at review time; remote-provider mode still bills through your own account with that provider.',
          },
          {
            q: 'Who developed Maid?',
            a: 'Maid was created by Dane Madsen, who started the project in October 2023 as a cross-platform Flutter app. It is now maintained under the Mobile-Artificial-Intelligence GitHub organization rather than as a personal project.',
          },
          {
            q: 'Is Maid open source?',
            a: 'Yes, the full source code is published on [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) under the MIT license, a permissive license that allows free use, modification, and redistribution.',
          },
          {
            q: 'Does Maid work on iPhone, Windows, or Mac?',
            a: 'No. As of version 3.0.0 (March 2026), Maid is Android-only. Earlier Flutter-based releases through v2.0.7 (April 2025) shipped builds for iOS (sideload only, no App Store listing), Windows, macOS, and Linux, but those platforms are not supported by the current, actively maintained version.',
          },
          {
            q: 'Which models can Maid run?',
            a: 'For local chat, Maid can run any GGUF-format model via llama.cpp — there is no fixed curated list. It can also connect to remote providers, including Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, and OrcaRouter, using an API key or server address you supply yourself.',
          },
          {
            q: 'How much RAM does Maid need for local models?',
            a: 'This depends on the GGUF model you choose, not a fixed app requirement. As general guidance, 2–4B parameter quantized models typically need 3–4 GB of free RAM, and 7–8B parameter models typically need 8 GB or more. Devices with more RAM can run larger, more capable models locally.',
          },
          {
            q: 'Does Maid require an internet connection?',
            a: 'No internet connection is required for local chat once a GGUF model is downloaded — inference runs entirely on-device via llama.cpp. An internet connection is required to download models initially, to use remote-provider mode, and for the optional Supabase-based cloud backup feature.',
          },
          {
            q: 'Is Maid still actively maintained?',
            a: 'At review time, yes: the GitHub repository shows commits and merged pull requests dated as recently as early September 2026, including a fix to the chat system and the addition of OrcaRouter as a remote provider. It is maintained by an open-source GitHub organization rather than a funded company, so check the repository\'s recent activity yourself before relying on it for anything time-sensitive.',
          },
          {
            q: 'What happened to Maid\'s iOS, Windows, and Mac support?',
            a: 'Maid was originally a cross-platform Flutter app, with releases through v2.0.7 (April 2025) shipping installable builds for iOS (sideload), Windows, macOS, and Linux alongside Android. Version 3.0.0 (March 2026) rewrote the app in React Native and narrowed the project to Android only; the desktop and iOS builds are not part of the current release line.',
          },
          {
            q: 'How does Maid compare to PocketPal AI or Private LLM?',
            a: 'Maid is free, open source, Android-only, and unusual in supporting both fully local GGUF inference and remote cloud providers in one app. PocketPal AI is also free and open source but covers iPhone/iPad and Android with local-only GGUF inference. Private LLM is a paid, closed-source, Apple-only app with a larger built-in model catalog. Choose Maid if you are on Android and want both local and cloud options in one client; choose PocketPal AI if you need iOS support with a similar free/open-source local model; choose Private LLM if you want a paid, more polished Apple-only experience. See the comparison table above for details.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Maid is a genuinely free, genuinely open-source Android app with an unusual combination for this category: it runs local GGUF models via llama.cpp and lets you connect to remote providers like OpenAI or Anthropic in the same client. That flexibility comes with real trade-offs worth knowing before installing it. The app went through a significant architecture change in 2026 — a rewrite from cross-platform Flutter to Android-only React Native — that dropped iOS, Windows, macOS, and Linux support the older version had. It is maintained by an open-source GitHub organization rather than a company, with development that is active as of review time but not guaranteed to continue at any particular pace. Choose Maid if you are an Android user who wants a free, open, dual-mode (local and remote) chat client and are comfortable with a community-maintained project. Choose a different app — PocketPal AI or Private LLM for Apple devices, or Ollama, LM Studio, or Jan AI for desktop — if you need a platform Maid\'s current release does not cover.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Maid on GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) — source code, license (MIT), README, and release history referenced in this review.',
          '[Maid releases page](https://github.com/Mobile-Artificial-Intelligence/maid/releases) — version history, changelogs, and build artifacts for v2.0.4 through v3.0.0.',
          '[Maid repository commit history](https://github.com/Mobile-Artificial-Intelligence/maid/commits/main) — recent commit and pull-request activity used to assess maintenance status.',
          '[Maid on Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) — Android availability.',
          '[danemadsen/maid on GitHub](https://github.com/danemadsen/maid) — the founder\'s original repository, now a fork of the current organization repository.',
          '[Maise on GitHub](https://github.com/Mobile-Artificial-Intelligence/maise) — Maid\'s companion open-source Android text-to-speech engine.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the Android app roundup, including Maid, MLC Chat, and PocketPal AI.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source alternative that also covers iPhone and iPad.',
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid, closed-source, Apple-only alternative with a larger built-in model catalog.',
          '[Enclave AI Review](/power-local-llm/enclave-ai-review) — an Apple-only alternative with Siri and Shortcuts automation.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — the model-layer companion piece for choosing which GGUF model actually fits your phone.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Maid Review (2026): Open-Source Local LLM Chat App for Android',
      description:
        'Maid review: a free, open-source (MIT) Android app that runs GGUF models locally via llama.cpp or connects to remote AI providers. Platforms, history, and who it fits.',
      url: 'https://promptquorum.com/power-local-llm/maid-review',
      inLanguage: 'en',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android users evaluating free, open-source local and multi-provider AI chat apps' },
      about: [
        { '@type': 'Thing', name: 'Maid' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/maid-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Maid Review (2026)', item: 'https://promptquorum.com/power-local-llm/maid-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/maid-review-hero-de.webp',
    title: 'Maid im Test (2026): Open-Source-LLM-Chat-App für Android',
    seoTitle: 'Maid Test 2026: Open-Source Android LLM App',
    intro:
      'Maid ist eine kostenlose, quelloffene (MIT-lizenzierte) Chat-App, die GGUF-Sprachmodelle lokal über [llama.cpp](https://github.com/ggml-org/llama.cpp) ausführt oder sich mit einem eigenen API-Schlüssel mit externen Anbietern wie Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita und OrcaRouter verbindet. Das Projekt startete 2023 als plattformübergreifende Flutter-App des australischen Entwicklers Dane Madsen, wurde jedoch für Version 3.0.0 (März 2026) in React Native neu geschrieben und läuft heute nur noch auf Android — die Desktop- und iOS-Builds der älteren Flutter-Versionen gibt es in der aktuellen Version nicht mehr. Dieser Test beschreibt, was Maid heute leistet, was sich durch den Umbau geändert hat, welche Plattform- und Hardware-Anforderungen wirklich gelten, wie das Preismodell aussieht (kostenlos, keine kostenpflichtige Stufe) und für wen sich die App eignet — und für wen nicht.',
    metaDescription:
      'Maid im Test: eine kostenlose, quelloffene (MIT) Android-App, die GGUF-Modelle lokal über llama.cpp ausführt oder sich mit KI-Anbietern verbindet. Plattformen, Historie und Zielgruppe.',
    twitterDescription:
      'Maid im Test 2026: die kostenlose, quelloffene Android-App für lokalen GGUF-Chat über llama.cpp — seit einem Umbau 2026 nur noch für Android. Was sich geändert hat und für wen sie passt.',
    audience:
      'Android-Nutzer, die eine kostenlose, quelloffene lokale oder Multi-Provider-KI-Chat-App möchten und mit einem community-gepflegten, reinen Android-Projekt einverstanden sind.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Maid Test',
    targetKeywords: [
      'maid ai test',
      'maid app android',
      'maid llama.cpp app',
      'maid open source llm app',
      'maid vs pocketpal ai',
      'kostenlose lokale llm app android',
      'gguf chat app android',
      'mobile artificial intelligence maid',
    ],
    current_models_mentioned: ['GGUF-Modelle über llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Maid ist eine kostenlose, quelloffene (MIT-Lizenz) Android-App, die GGUF-Sprachmodelle lokal über llama.cpp ausführt und sich zusätzlich mit einem eigenen API-Schlüssel mit externen Anbietern verbinden kann — Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita und OrcaRouter.** Entwickelt wird sie von der [GitHub-Organisation Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence/maid), gegründet von Dane Madsen, der das Projekt im Oktober 2023 startete. Ursprünglich war die App mit Flutter gebaut und erschien bis Version 2.0.7 (April 2025) für Android, iOS (Sideload), Windows, macOS und Linux; Version 3.0.0 (März 2026) schrieb die App in React Native neu und beschränkte den Vertrieb auf Android — aktuell gibt es keinen iOS-, Windows-, macOS- oder Linux-Build. Das Projekt wird weiterhin aktiv entwickelt, mit Commits und gemergten Pull Requests bis September 2026.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich Maid für lokalen KI-Chat auf Android?',
        answer:
          'Ja, wenn Sie Android nutzen und eine kostenlose, quelloffene App möchten, die GGUF-Modelle vollständig auf dem Gerät über llama.cpp ausführen oder sich mit Ihren eigenen Konten bei Anbietern wie OpenAI, Anthropic oder Ollama verbinden kann. Ungeeignet ist die App für iPhone-, Mac-, Windows- oder Linux-Nutzer — die aktuelle Version 3.0.0 hat diese Plattformen beim Umbau von Flutter zu React Native gestrichen und bietet heute nur noch einen Android-Build.',
        bullets: [
          'Kostenlos und quelloffen unter der MIT-Lizenz — kein Abo, Quellcode öffentlich auf [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Seit Version 3.0.0 (März 2026) nur noch für Android; erhältlich bei [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) und als direkte APK von [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'Führt GGUF-Modelle lokal über llama.cpp aus oder verbindet sich mit Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita und OrcaRouter mit eigenem API-Schlüssel.',
          'Gestartet als plattformübergreifende Flutter-App von Entwickler Dane Madsen im Oktober 2023; für v3.0.0 in React Native neu geschrieben, wobei iOS-, Windows-, macOS- und Linux-Builds entfielen.',
          'Zum Testzeitpunkt aktiv gepflegt — Commits und gemergte Pull Requests bis Anfang September 2026, mit 10 offenen Issues und 283 Forks auf GitHub.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Maid?', anchor: 'what-is-maid' },
      { label: 'Wer hat Maid entwickelt, und was hat sich beim Umbau geändert?', anchor: 'history-and-developer' },
      { label: 'So starten Sie mit Maid', anchor: 'getting-started' },
      { label: 'Welche Modelle unterstützt Maid?', anchor: 'models-supported' },
      { label: 'Ist Maid für iPhone, Windows oder Mac verfügbar?', anchor: 'platform-availability' },
      { label: 'Wie viel kostet Maid?', anchor: 'pricing' },
      { label: 'Welche Funktionen bietet Maid?', anchor: 'key-features' },
      { label: 'Welche Hardware brauchen Sie?', anchor: 'hardware-requirements' },
      { label: 'Für wen sich Maid eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich Maid nicht eignet', anchor: 'who-should-not-use' },
      { label: 'Maid im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
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
            text: 'Maid ist eine kostenlose, MIT-lizenzierte, quelloffene Android-App, die GGUF-Sprachmodelle lokal über llama.cpp ausführt oder sich mit einem eigenen API-Schlüssel mit externen KI-Anbietern verbindet, gepflegt von der GitHub-Organisation Mobile-Artificial-Intelligence, gegründet von Entwickler Dane Madsen.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist eine App, die Sie auf einem Android-Smartphone installieren, um mit einem KI-Modell zu chatten, das entweder auf Ihrem eigenen Gerät läuft oder über ein Konto, das Sie bereits bei einem Anbieter wie OpenAI oder Anthropic haben — der Code ist auf GitHub öffentlich, und die App selbst ist kostenlos. Früher funktionierte sie auch auf iPhone, Windows, Mac und Linux, doch die aktuelle Version hat diese Plattformen gestrichen.',
          },
        ],
        items: [
          'Kostenlos und quelloffen (MIT-Lizenz); Quellcode und Issue-Tracker sind öffentlich auf [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Von Dane Madsen im Oktober 2023 als plattformübergreifende Flutter-App gegründet; heute von der Organisation Mobile-Artificial-Intelligence gepflegt.',
          'Führt GGUF-Modelle vollständig auf dem Gerät über llama.cpp aus oder verbindet sich mit Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita und OrcaRouter mit eigenem API-Schlüssel.',
          'Version 3.0.0 (März 2026) schrieb die App in React Native neu und beschränkte sie auf Android — die älteren Flutter-Versionen erschienen zusätzlich für iOS (Sideload), Windows, macOS und Linux, doch diese Builds sind nicht mehr Teil der aktuellen Version.',
          'Erhältlich bei [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) und als direkter APK/AAB-Download von [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'Zum Testzeitpunkt wurde in der App oder ihrer Dokumentation keine kostenpflichtige Stufe gefunden; die Basis-App und ihre lokale Chat-Funktion sind kostenlos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test basiert auf dem öffentlichen [GitHub-Repository](https://github.com/Mobile-Artificial-Intelligence/maid), dessen README, der Versionshistorie und dem Google-Play-Eintrag, geprüft im September 2026. PromptQuorum hat für diesen Test keine eigenen praktischen Benchmarks von Maid durchgeführt — die Leistungsangaben unten sind allgemeine Hardware-Richtwerte für lokale LLMs, keine app-spezifischen Messungen.',
          },
        ],
      },
      overview: {
        id: 'what-is-maid',
        title: 'Was ist Maid?',
        content: [
          '**Maid ist eine Android-App, die entweder offene Sprachmodelle im GGUF-Format lokal auf dem Gerät über [llama.cpp](https://github.com/ggml-org/llama.cpp) herunterlädt und ausführt, oder Chat-Anfragen mit einem selbst bereitgestellten API-Schlüssel an einen externen Anbieter sendet.** Die App ist [MIT-lizenziert](https://github.com/Mobile-Artificial-Intelligence/maid/blob/main/LICENSE), das heißt, der vollständige Quellcode ist öffentlich einsehbar, forkbar und veränderbar.',
          'Dieser Doppelmodus ist das prägende Merkmal der App: Sie ist nicht ausschließlich ein Client für lokale Inferenz. Dieselbe Oberfläche kann eine GGUF-Datei vollständig offline ausführen oder eine Unterhaltung über Ihr eigenes Konto an einen Cloud-Anbieter wie OpenAI oder Anthropic weiterleiten, oder an einen selbst gehosteten [Ollama](https://ollama.com)-Server in Ihrem Netzwerk. Laut README beschreibt sich das Projekt selbst als "nicht verbunden mit Huggingface, Meta (Facebook), MistralAi, OpenAI, Google, Microsoft oder einem anderen Unternehmen, das ein mit dieser App kompatibles Modell anbietet."',
        ],
        note: 'GGUF ist ein Dateiformat zur Verpackung quantisierter, offener Sprachmodelle, damit sie über Runtimes wie llama.cpp effizient auf handelsüblicher Hardware laufen, statt für jede Antwort eine Cloud-API aufzurufen.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Wer hat Maid entwickelt, und was hat sich beim Umbau geändert?',
        content: [
          '**Maid wurde von Dane Madsen entwickelt, der das Projekt im Oktober 2023 als plattformübergreifende Flutter-App zum Ausführen von GGUF- und llama.cpp-Modellen startete.** Das Projekt liegt heute unter der [GitHub-Organisation Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence/maid) statt unter Madsens persönlichem Account; sein ursprüngliches Repository, [danemadsen/maid](https://github.com/danemadsen/maid), wird von GitHub inzwischen als Fork des Organisations-Repositorys geführt, und dessen Beschreibung lautet weiterhin "plattformübergreifende Flutter-App", obwohl das nicht mehr dem aktuellen Code entspricht.',
          'Die Versionshistorie zeigt einen klaren Bruch. Releases bis **v2.0.7 (April 2025)** waren mit Flutter gebaut und lieferten installierbare Pakete für Android (APK/AAB), iOS (eine sideload-fähige `.ipa`-Datei, kein App-Store-Eintrag), Linux (`.zip`/`.AppImage`), macOS (`.dmg` für Intel und Apple Silicon), Windows (`.zip`) und sogar einen Web-Build. **Version 3.0.0 (veröffentlicht am 10. März 2026)** ist ein vollständiger Umbau in React Native, und das Release enthält nur noch Android-Pakete (APK- und AAB-Varianten) — keine Dateien für iOS, Windows, macOS oder Linux. Das Changelog dieses Releases nennt Unterstützung für Vision-Modelle, System-Text-to-Speech, Systemspracherkennung, Reasoning-Modelle, Markdown-Rendering und eine Upvote-/Downvote-Meldefunktion, die laut Release-Notes eine Google-Play-Anforderung ist.',
          'Die Entwicklung ging über diesen Umbau hinaus weiter: Das Repository zeigt gemergte Pull Requests und Commits bis Anfang September 2026, darunter eine Korrektur am Chat-System und die Ergänzung von [OrcaRouter](https://www.orcarouter.ai) als externem Anbieter. Zum Testzeitpunkt hatte das Repository rund 2.700 Sterne, 283 Forks und 10 offene Issues — ein Beleg für ein aktiv genutztes und aktiv gepflegtes Projekt, allerdings ein quelloffenes Projekt einer einzelnen Organisation und kein finanziertes Unternehmen mit Support-Team.',
        ],
        items: [
          'Gründer: Dane Madsen (GitHub: [danemadsen](https://github.com/danemadsen)), der das Projekt im Oktober 2023 startete.',
          'Aktueller Maintainer: die GitHub-Organisation [Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence); Madsens persönliches Repository ist heute ein Fork des Organisations-Repositorys.',
          'Lizenz: MIT — freizügige Open-Source-Lizenz, frei nutzbar, forkbar und veränderbar.',
          'Wesentlicher Architekturwechsel: Flutter (plattformübergreifend, bis v2.0.7, April 2025) → React Native, nur Android (ab v3.0.0, März 2026).',
          'Zum Testzeitpunkt rund 2.700 GitHub-Sterne, 283 Forks und 10 offene Issues, mit Commits und gemergten Pull Requests bis September 2026.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So starten Sie mit Maid',
        content: [
          '**Ein funktionierender Chat in Maid ist nach der Installation der aktuellen Android-Version in wenigen Schritten eingerichtet.** Für lokalen Chat auf dem Gerät ist kein Konto erforderlich; eine optionale Anmeldung gibt es nur für die Cloud-Backup-Funktion der App.',
        ],
        numberedItems: [
          {
            title: 'App auf Android installieren',
            whyItMatters: 'Laden Sie Maid bei [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) herunter oder installieren Sie die APK direkt von der [GitHub-Releases-Seite](https://github.com/Mobile-Artificial-Intelligence/maid/releases), wenn Sie lieber sideloaden möchten. Ein iOS-, Windows-, macOS- oder Linux-Build ist derzeit nicht verfügbar.',
          },
          {
            title: 'Lokalen oder externen Modus wählen',
            whyItMatters: 'Entscheiden Sie, ob Sie ein GGUF-Modell herunterladen und vollständig auf dem Gerät über llama.cpp ausführen möchten, oder die App mit einem externen Anbieter (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita oder OrcaRouter) über einen bereits vorhandenen API-Schlüssel oder eine Serveradresse verbinden.',
          },
          {
            title: 'Modell herunterladen oder importieren (lokaler Modus)',
            whyItMatters: 'Für Chat auf dem Gerät laden Sie ein GGUF-Modell in einer zum RAM Ihres Smartphones passenden Größe herunter (siehe Hardware-Abschnitt unten), oder laden Sie eine eigene GGUF-Datei aus dem lokalen Speicher oder von [Hugging Face](https://huggingface.co).',
          },
          {
            title: 'Chat starten',
            whyItMatters: 'Sobald ein lokales Modell geladen oder ein externer Anbieter eingerichtet ist, können Sie eine Unterhaltung beginnen. Chats lassen sich in der App erstellen, umbenennen, löschen sowie als JSON-Dateien exportieren und importieren.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Welche Modelle unterstützt Maid?',
        itemHeadings: true,
        columns: ['Zugriffsart', 'Womit verbunden', 'Hinweise'],
        rows: [
          {
            'Zugriffsart': 'Lokal (auf dem Gerät)',
            'Womit verbunden': 'Jedes GGUF-Modell, geladen über [llama.cpp](https://github.com/ggml-org/llama.cpp)',
            'Hinweise': 'Keine feste kuratierte Modellliste — die App führt jede heruntergeladene oder importierte GGUF-Datei aus, auch von Hugging Face.',
          },
          {
            'Zugriffsart': 'Externe Anbieter',
            'Womit verbunden': 'Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, [OrcaRouter](https://www.orcarouter.ai)',
            'Hinweise': 'Erfordert ein eigenes Konto und einen eigenen API-Schlüssel (bei Ollama eine eigene Serveradresse); Maid bündelt oder verkauft den Zugang zu diesen Anbietern nicht selbst.',
          },
        ],
        note: 'Da Maid jede beliebige GGUF-Datei laden kann, ergibt sich die praktische Modellunterstützung aus der llama.cpp-Kompatibilität und nicht aus einer app-kuratierten Auswahlliste — anders als etwa PocketPal AI oder Private LLM, die neben eigener Dateiunterstützung einen konkreten Schnellauswahl-Katalog mitbringen.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Ist Maid für iPhone, Windows oder Mac verfügbar?',
        itemHeadings: true,
        columns: ['Plattform', 'Verfügbarkeit', 'Hinweise'],
        rows: [
          {
            'Plattform': 'Android',
            'Verfügbarkeit': 'Verfügbar',
            'Hinweise': 'Vertrieb über [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) und als direkte APK/AAB von [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases). Dies ist die einzige Plattform, die die aktuelle Version 3.0.0 unterstützt.',
          },
          {
            'Plattform': 'iPhone / iPad',
            'Verfügbarkeit': 'Derzeit nicht verfügbar',
            'Hinweise': 'Ältere Flutter-Releases (bis v2.0.7, April 2025) enthielten eine sideload-fähige `.ipa`-Datei, es gab jedoch nie einen App-Store-Eintrag, und dem aktuellen v3.0.0-Release liegt keine iOS-Datei bei.',
          },
          {
            'Plattform': 'Windows / macOS / Linux',
            'Verfügbarkeit': 'Derzeit nicht verfügbar',
            'Hinweise': 'Desktop-Builds (`.zip`, `.AppImage`, `.dmg`) gab es für die Flutter-basierten Releases bis v2.0.7, doch der Umbau in React Native (v3.0.0) liefert keine Desktop-Pakete mehr. Desktop-Nutzer, die einen lokalen GGUF-Chat-Client suchen, sollten stattdessen Ollama, LM Studio oder Jan AI in Betracht ziehen.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Wie viel kostet Maid?',
        content: [
          '**Maid ist kostenlos herunterladbar und kostenlos nutzbar, sowohl für lokalen Chat auf dem Gerät als auch für Chat über externe Anbieter, und der Quellcode ist unter der MIT-Lizenz öffentlich.** Zum Testzeitpunkt fand sich im Repository, den Release-Notes oder dem Google-Play-Eintrag der App weder ein In-App-Kauf noch ein Abo oder eine kostenpflichtige Stufe.',
          'Die Kosten, die ein Maid-Nutzer tatsächlich trägt, sind indirekt: Gerätespeicher für heruntergeladene GGUF-Modelldateien (üblicherweise mehrere Gigabyte pro Datei) sowie im Modus mit externen Anbietern das, was Anthropic, OpenAI, Mistral, DeepSeek, Novita, Ollama oder OrcaRouter jeweils separat für die API-Nutzung unter Ihrem eigenen Konto berechnen — Maid selbst schlägt darauf keinen Aufpreis und kein Abo.',
        ],
        items: [
          '**Basis-App:** Kostenlos, kein Abo, MIT-lizenzierte Open-Source-Software.',
          '**Lokaler Chat (GGUF-Modelle auf dem Gerät):** Kostenlos — keine Gebühr pro Nachricht oder Token, da die Inferenz auf Ihrem eigenen Gerät läuft.',
          '**Chat über externe Anbieter:** Über Maid kostenlos nutzbar, Sie zahlen jedoch, was der jeweilige Anbieter (OpenAI, Anthropic usw.) unter Ihrem eigenen Konto und API-Schlüssel berechnet.',
          '**Optionales Cloud-Backup:** Die App unterstützt eine Registrierung oder Anmeldung, um Einstellungen und Chatverlauf über Supabase zu sichern; dieser Test fand keine gesonderte Gebühr für diese Funktion.',
          '**Speicherkosten:** Keine monetären, aber reale Kosten — jedes heruntergeladene GGUF-Modell belegt üblicherweise mehrere Gigabyte Gerätespeicher.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Welche Funktionen bietet Maid?',
        content: [
          '**Über die grundlegende Aufteilung in lokalen und externen Chat hinaus beschreiben README und Release-Notes von Maid eine Reihe von Funktionen, die über die Versionsgeschichte hinzugekommen sind.** Dazu gehören:',
        ],
        items: [
          '**Lokale und externe Inferenz in einer App.** Wechseln Sie zwischen vollständig offlinefähigem GGUF-Chat über llama.cpp und Cloud-Anbietern (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) mit eigenen Zugangsdaten.',
          '**Gesprächsverwaltung.** Chats erstellen, umbenennen, löschen sowie als JSON-Dateien exportieren und importieren.',
          '**Eigener System-Prompt.** Ein globaler System-Prompt lässt sich festlegen, um Verhalten und Ton des Assistenten anzupassen.',
          '**Anpassbare Generierungsparameter.** Einstellungen wie Temperature, Top-p, Top-k und Kontextlänge lassen sich pro Sitzung anpassen.',
          '**Sprachausgabe über eine Begleit-App.** Maid lässt sich mit [Maise](https://github.com/Mobile-Artificial-Intelligence/maise) kombinieren, einer separaten quelloffenen Android-Text-to-Speech-Engine derselben GitHub-Organisation, um Antworten vorlesen zu lassen.',
          '**Optionales Cloud-Backup.** Nutzer können sich registrieren oder anmelden, um Einstellungen und Chatverlauf über Supabase zu synchronisieren; dies ist optional und für die Nutzung der App nicht erforderlich.',
          '**Material-You-Design.** Helles und dunkles Design, das der Systemeinstellung von Android folgt.',
          '**Keine Telemetrie und keine Werbung,** laut dem README des Projekts.',
        ],
        note: 'Der Funktionsumfang kann je nach App-Version variieren, da das Projekt häufig neue Releases veröffentlicht. Prüfen Sie das In-App-Änderungsprotokoll oder die [GitHub-Releases-Seite](https://github.com/Mobile-Artificial-Intelligence/maid/releases), um zu sehen, was in Ihrer installierten Version verfügbar ist — insbesondere angesichts der Unterschiede zwischen der Flutter-basierten v2.x-Reihe und dem React-Native-Umbau in v3.0.0.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Welche Hardware brauchen Sie für Maid?',
        content: [
          '**Nicht die App selbst, sondern das gewählte GGUF-Modell bestimmt die tatsächliche Hardware-Untergrenze für lokalen Chat — als allgemeine Richtlinie für GGUF-Modelle auf Smartphones benötigt ein quantisiertes 2–4B-Parameter-Modell etwa 3–4 GB freien RAM, ein 7–8B-Parameter-Modell 6–8 GB oder mehr.** Dies ist eine allgemeine Größenrichtlinie für lokale LLMs, kein Maid-spezifischer Benchmark; PromptQuorum hat den genauen Speicherbedarf von Maid pro Modell nicht eigenständig gemessen.',
          'Da Maid die lokale Inferenz über llama.cpp ausführt, gilt allgemeine Android-Leistungsrichtlinie für llama.cpp: Ein neueres Gerät mit mehr RAM und modernem Chipsatz lädt und betreibt größere Modelle komfortabler als ein älteres, speicher- oder RAM-begrenztes Smartphone. Wenn Sie stattdessen den Modus mit externen Anbietern statt lokaler Inferenz nutzen, sind die Anforderungen an die Gerätehardware minimal — das Modell läuft auf den Servern des Anbieters, und Ihr Smartphone benötigt lediglich eine funktionierende Internetverbindung.',
        ],
        items: [
          'Kleine Modelle (2–4B Parameter, quantisiert): auf den meisten neueren Android-Smartphones mit 4 GB+ freiem RAM nutzbar.',
          'Mittelgroße Modelle (7–8B Parameter, quantisiert): empfohlener Geräte-RAM von 8 GB oder mehr für akzeptable Reaktionsgeschwindigkeit.',
          'Speicher: mehrere Gigabyte freien Gerätespeicher pro heruntergeladener GGUF-Modelldatei einplanen.',
          'Modus mit externen Anbietern: keine nennenswerten lokalen Hardware-Anforderungen außer einer funktionierenden Internetverbindung, da die Inferenz auf der Infrastruktur des Anbieters läuft.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich Maid eignet',
        items: [
          '**Android-Nutzer, die lokalen und Cloud-Chat in einer kostenlosen App möchten.** Die Möglichkeit, in einem einzigen quelloffenen Client zwischen vollständig offlinefähiger GGUF-Inferenz und eigenen Konten bei Anbietern wie OpenAI oder Anthropic zu wechseln, ist das klarste Alleinstellungsmerkmal von Maid.',
          '**Nutzer, die eine beliebige GGUF-Datei statt einer kuratierten Modellliste ausführen möchten.** Da die App über llama.cpp jedes GGUF-Modell lädt, statt einen festen Katalog mitzubringen, eignet sie sich für Nutzer, die bereits ein bestimmtes Modell im Blick haben.',
          '**Entwickler und technisch interessierte Nutzer, die mit Open-Source-Projekten vertraut sind.** Das öffentliche GitHub-Repository, der Issue-Tracker und die aktive Release-Historie eignen sich für Nutzer, die bereit sind, Release-Notes zu lesen oder ein Issue zu melden, statt dedizierten Kundensupport zu erwarten.',
          '**Nutzer, die den Code selbst prüfen oder verändern möchten.** Die MIT-Lizenz erlaubt Forken und Verändern — wichtig für alle, die genau nachvollziehen möchten, was die App tut, bevor sie ihr private Unterhaltungen oder Provider-API-Schlüssel anvertrauen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich Maid nicht eignet',
        items: [
          '**iPhone-, iPad-, Windows-, macOS- oder Linux-Nutzer.** Die aktuelle Version 3.0.0 ist reines Android; es gibt keinen App-Store-Eintrag und keinen unterstützten Desktop-Build. Nutzer auf diesen Plattformen sollten stattdessen Private LLM oder PocketPal AI (Apple) beziehungsweise Ollama, LM Studio oder Jan AI (Desktop) in Betracht ziehen.',
          '**Nutzer, die eine vollständig geführte Erfahrung ohne Konfiguration möchten.** Die Wahl zwischen lokalem und externem Modus, die passende Modellgröße für das eigene Gerät und die Verwaltung von API-Schlüsseln gehören zum Ablauf; wer diese Entscheidungen der App überlassen möchte, ist mit einer kuratierteren App wie Loci oder Enclave AI besser bedient.',
          '**Nutzer, die besonders anspruchsvolle Modelle (70B+ Parameter) lokal ausführen möchten.** Smartphone-Hardware, selbst bei Flaggschiff-Android-Geräten, kann Modelle dieser Größenordnung nicht praktikabel lokal ausführen — solche Aufgaben benötigen unabhängig von der mobilen App einen Desktop, eine Workstation oder eine Cloud-API bzw. einen externen Anbieter.',
          '**Nutzer, die dedizierten kommerziellen Support erwarten.** Maid wird von einer Open-Source-GitHub-Organisation gepflegt, nicht von einem finanzierten Unternehmen mit Support-Team; wer garantierte Reaktionszeiten oder eine Enterprise-Support-Vereinbarung benötigt, sollte eine kommerziell unterstützte Alternative wählen.',
          '**Nutzer, die den alten plattformübergreifenden Build benötigen.** Wer sich auf die frühere iOS-, Windows-, macOS- oder Linux-Unterstützung der Flutter-basierten v2.x-Releases von Maid verlässt, sollte wissen, dass diese Plattformen nicht Teil der aktuellen, aktiv gepflegten Version sind.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Maid im Vergleich zu Alternativen',
        itemHeadings: true,
        columns: ['App', 'Lizenz / Kosten', 'Plattformen', 'Modellflexibilität'],
        rows: [
          {
            'App': 'Maid',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT)',
            'Plattformen': 'Nur Android (ab v3.0.0)',
            'Modellflexibilität': 'Jede GGUF-Datei über llama.cpp, oder externe Anbieter (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) mit eigenem API-Schlüssel',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT)',
            'Plattformen': 'iPhone/iPad, Android',
            'Modellflexibilität': 'Schnellauswahl-Liste plus jede GGUF-Datei von Hugging Face',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Lizenz / Kosten': 'Kostenpflichtig, Einmalkauf; Closed Source',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Modellflexibilität': '140+ Modelle, mit OmniQuant- und GPTQ-Quantisierungsformaten',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Lizenz / Kosten': 'Kostenlos mit kostenpflichtiger Stufe; Closed Source',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Modellflexibilität': 'Kuratierte Liste lokaler Modelle; Siri- und Shortcuts-Integration',
          },
          {
            'App': 'ChatterUI',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (AGPL-3.0)',
            'Plattformen': 'Android (aus Quellcode bauen)',
            'Modellflexibilität': 'Führt GGUF-Dateien lokal über llama.cpp aus oder verbindet sich mit externen APIs; unterstützt Character Card v2',
          },
          {
            'App': 'RikkaHub',
            'Lizenz / Kosten': 'Kostenlos, quelloffen',
            'Plattformen': 'Android',
            'Modellflexibilität': 'Multi-Provider-Client (OpenAI-/Google-/Anthropic-kompatible APIs); Material-You-Design',
          },
          {
            'App': 'AnythingLLM Mobile',
            'Lizenz / Kosten': 'Kostenlos, quelloffen',
            'Plattformen': 'iPhone/iPad, Android',
            'Modellflexibilität': 'Inferenz auf dem Gerät, Verbindung zu einer selbst gehosteten AnythingLLM-Instanz oder jedem OpenAI-kompatiblen Anbieter',
          },
        ],
        note: 'LLM Farm, früher eine beliebte quelloffene iOS-GGUF-Chat-App, wurde zum Testzeitpunkt aus dem App Store entfernt und im eigenen GitHub-Repository als "vorübergehend nicht verfügbar" markiert — deshalb fehlt sie oben in den aktiven Empfehlungen. Bei Layla, einer weiteren On-Device-Assistenz-App, wurde Berichten zufolge die kostenlose Stufe "Layla Lite" aus Google Play entfernt; prüfen Sie die aktuelle Verfügbarkeit direkt auf [layla-network.ai](https://www.layla-network.ai), bevor Sie von einer Installierbarkeit ausgehen.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Maid kostenlos?',
            a: 'Ja. Maid ist kostenlos herunterladbar und kostenlos nutzbar, sowohl für lokalen Chat auf dem Gerät als auch für Chat über externe Anbieter, und die App ist unter der MIT-Lizenz quelloffen. Zum Testzeitpunkt fand sich in der App oder ihrer Dokumentation keine kostenpflichtige Stufe oder kein In-App-Kauf; der Modus mit externen Anbietern wird weiterhin über Ihr eigenes Konto bei diesem Anbieter abgerechnet.',
          },
          {
            q: 'Wer hat Maid entwickelt?',
            a: 'Maid wurde von Dane Madsen entwickelt, der das Projekt im Oktober 2023 als plattformübergreifende Flutter-App startete. Es wird heute unter der GitHub-Organisation Mobile-Artificial-Intelligence gepflegt und nicht mehr als persönliches Projekt.',
          },
          {
            q: 'Ist Maid quelloffen?',
            a: 'Ja, der vollständige Quellcode ist auf [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) unter der MIT-Lizenz veröffentlicht, einer freizügigen Lizenz, die kostenlose Nutzung, Veränderung und Weitergabe erlaubt.',
          },
          {
            q: 'Funktioniert Maid auf iPhone, Windows oder Mac?',
            a: 'Nein. Seit Version 3.0.0 (März 2026) ist Maid reines Android. Frühere Flutter-basierte Releases bis v2.0.7 (April 2025) lieferten Builds für iOS (nur Sideload, kein App-Store-Eintrag), Windows, macOS und Linux, doch diese Plattformen werden von der aktuellen, aktiv gepflegten Version nicht mehr unterstützt.',
          },
          {
            q: 'Welche Modelle kann Maid ausführen?',
            a: 'Für lokalen Chat kann Maid jedes Modell im GGUF-Format über llama.cpp ausführen — es gibt keine feste kuratierte Liste. Zusätzlich lässt sich die App mit externen Anbietern verbinden, darunter Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita und OrcaRouter, über einen selbst bereitgestellten API-Schlüssel oder eine Serveradresse.',
          },
          {
            q: 'Wie viel RAM benötigt Maid für lokale Modelle?',
            a: 'Das hängt vom gewählten GGUF-Modell ab, nicht von einer festen App-Anforderung. Als allgemeine Richtlinie benötigen quantisierte 2–4B-Parameter-Modelle üblicherweise 3–4 GB freien RAM, 7–8B-Parameter-Modelle üblicherweise 8 GB oder mehr. Geräte mit mehr RAM können größere, leistungsfähigere Modelle lokal ausführen.',
          },
          {
            q: 'Benötigt Maid eine Internetverbindung?',
            a: 'Für lokalen Chat ist nach dem Herunterladen eines GGUF-Modells keine Internetverbindung erforderlich — die Inferenz läuft vollständig auf dem Gerät über llama.cpp. Eine Internetverbindung ist für den anfänglichen Modell-Download, für den Modus mit externen Anbietern sowie für das optionale Supabase-basierte Cloud-Backup erforderlich.',
          },
          {
            q: 'Wird Maid noch aktiv gepflegt?',
            a: 'Zum Testzeitpunkt ja: Das GitHub-Repository zeigt Commits und gemergte Pull Requests bis Anfang September 2026, darunter eine Korrektur am Chat-System und die Ergänzung von OrcaRouter als externem Anbieter. Gepflegt wird es von einer Open-Source-GitHub-Organisation und nicht von einem finanzierten Unternehmen — prüfen Sie die aktuelle Aktivität im Repository selbst, bevor Sie sich für zeitkritische Zwecke darauf verlassen.',
          },
          {
            q: 'Was ist mit der iOS-, Windows- und Mac-Unterstützung von Maid passiert?',
            a: 'Maid war ursprünglich eine plattformübergreifende Flutter-App; Releases bis v2.0.7 (April 2025) lieferten neben Android auch installierbare Builds für iOS (Sideload), Windows, macOS und Linux. Version 3.0.0 (März 2026) schrieb die App in React Native neu und beschränkte das Projekt auf Android — die Desktop- und iOS-Builds sind nicht mehr Teil der aktuellen Release-Reihe.',
          },
          {
            q: 'Wie schneidet Maid im Vergleich zu PocketPal AI oder Private LLM ab?',
            a: 'Maid ist kostenlos, quelloffen, reines Android und ungewöhnlich, weil es in einer App sowohl vollständig lokale GGUF-Inferenz als auch externe Cloud-Anbieter unterstützt. PocketPal AI ist ebenfalls kostenlos und quelloffen, deckt aber iPhone/iPad und Android mit rein lokaler GGUF-Inferenz ab. Private LLM ist eine kostenpflichtige, Closed-Source-App nur für Apple mit einem größeren integrierten Modellkatalog. Wählen Sie Maid, wenn Sie Android nutzen und lokale sowie Cloud-Optionen in einem Client möchten; wählen Sie PocketPal AI, wenn Sie iOS-Unterstützung mit einem ähnlich kostenlosen, quelloffenen lokalen Modell benötigen; wählen Sie Private LLM, wenn Sie eine kostenpflichtige, ausgereiftere, reine Apple-Erfahrung möchten. Details finden Sie in der Vergleichstabelle oben.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Maid ist eine wirklich kostenlose, wirklich quelloffene Android-App mit einer für diese Kategorie ungewöhnlichen Kombination: Sie führt lokale GGUF-Modelle über llama.cpp aus und lässt Sie sich im selben Client mit externen Anbietern wie OpenAI oder Anthropic verbinden. Diese Flexibilität bringt reale Kompromisse mit sich, die Sie vor der Installation kennen sollten. Die App durchlief 2026 einen erheblichen Architekturwechsel — einen Umbau von plattformübergreifendem Flutter zu reinem Android-React-Native —, der die iOS-, Windows-, macOS- und Linux-Unterstützung der älteren Version strich. Gepflegt wird sie von einer Open-Source-GitHub-Organisation statt von einem Unternehmen, mit einer Entwicklung, die zum Testzeitpunkt aktiv ist, aber nicht garantiert in einem bestimmten Tempo fortgesetzt wird. Wählen Sie Maid, wenn Sie Android-Nutzer sind und einen kostenlosen, offenen Chat-Client mit lokalem und externem Modus möchten und mit einem community-gepflegten Projekt einverstanden sind. Wählen Sie eine andere App — PocketPal AI oder Private LLM für Apple-Geräte, oder Ollama, LM Studio oder Jan AI für den Desktop —, wenn Sie eine Plattform benötigen, die die aktuelle Maid-Version nicht abdeckt.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Maid auf GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) — Quellcode, Lizenz (MIT), README und Versionshistorie, referenziert in diesem Test.',
          '[Maid-Releases-Seite](https://github.com/Mobile-Artificial-Intelligence/maid/releases) — Versionshistorie, Changelogs und Build-Pakete von v2.0.4 bis v3.0.0.',
          '[Commit-Historie des Maid-Repositorys](https://github.com/Mobile-Artificial-Intelligence/maid/commits/main) — aktuelle Commit- und Pull-Request-Aktivität, verwendet zur Einschätzung des Pflegestatus.',
          '[Maid bei Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) — Verfügbarkeit für Android.',
          '[danemadsen/maid auf GitHub](https://github.com/danemadsen/maid) — das ursprüngliche Repository des Gründers, heute ein Fork des aktuellen Organisations-Repositorys.',
          '[Maise auf GitHub](https://github.com/Mobile-Artificial-Intelligence/maise) — die quelloffene Android-Text-to-Speech-Begleit-App von Maid.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Die besten lokalen KI-Apps für Android 2026](/power-local-llm/best-local-llm-apps-android-2026) — die Android-App-Übersicht, u. a. mit Maid, MLC Chat und PocketPal AI.',
          '[PocketPal AI im Test](/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene Alternative, die zusätzlich iPhone und iPad abdeckt.',
          '[Private LLM im Test](/power-local-llm/private-llm-review) — eine kostenpflichtige, Closed-Source-Alternative nur für Apple mit größerem integriertem Modellkatalog.',
          '[Enclave AI im Test](/power-local-llm/enclave-ai-review) — eine reine Apple-Alternative mit Siri- und Shortcuts-Automatisierung.',
          '[Die besten mobilen LLM-Modelle 2026: Phi-4 Mini vs. Gemma 4 vs. SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — der Modell-Begleitartikel zur Wahl des passenden GGUF-Modells für Ihr Smartphone.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Maid im Test (2026): Open-Source-LLM-Chat-App für Android',
      description:
        'Maid im Test: eine kostenlose, quelloffene (MIT) Android-App, die GGUF-Modelle lokal über llama.cpp ausführt oder sich mit KI-Anbietern verbindet. Plattformen, Historie und Zielgruppe.',
      url: 'https://promptquorum.com/de/power-local-llm/maid-review',
      inLanguage: 'de',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android-Nutzer, die kostenlose, quelloffene lokale und Multi-Provider-KI-Chat-Apps evaluieren' },
      about: [
        { '@type': 'Thing', name: 'Maid' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Lokales LLM' },
        { '@type': 'Thing', name: 'Open-Source-Software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/maid-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Maid im Test (2026)', item: 'https://promptquorum.com/de/power-local-llm/maid-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/maid-review-hero-es.webp',
    title: 'Reseña de Maid (2026): App de Chat con LLM Local de Código Abierto para Android',
    seoTitle: 'Reseña de Maid 2026: App Android LLM de Código Abierto',
    intro:
      'Maid es una app de chat gratuita y de código abierto (licencia MIT) que ejecuta modelos de lenguaje en formato GGUF de forma local mediante [llama.cpp](https://github.com/ggml-org/llama.cpp), o se conecta a proveedores remotos como Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita y OrcaRouter usando tu propia clave de API. El proyecto comenzó en 2023 como una app multiplataforma en Flutter creada por el desarrollador australiano Dane Madsen, pero el código se reescribió en React Native para la versión 3.0.0 (marzo de 2026), y hoy se distribuye solo para Android — los builds de escritorio e iOS que existían en las versiones antiguas de Flutter ya no forman parte de la versión actual. Esta reseña cubre qué hace Maid hoy, qué cambió con la reescritura, sus requisitos reales de plataforma y hardware, su precio (gratis, sin nivel de pago) y para quién es o no una buena opción frente a una alternativa comercial.',
    metaDescription:
      'Reseña de Maid: una app Android gratuita y de código abierto (MIT) que ejecuta modelos GGUF localmente vía llama.cpp o se conecta a proveedores de IA. Plataformas, historia y para quién es.',
    twitterDescription:
      'Reseña de Maid 2026: la app Android gratuita y de código abierto para chat GGUF local vía llama.cpp, ahora solo para Android tras una reescritura en 2026. Qué cambió y para quién es.',
    audience:
      'Usuarios de Android que buscan una app de chat con IA local o multi-proveedor, gratuita y de código abierto, y que están cómodos con un proyecto mantenido por la comunidad, solo para Android.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Reseña de Maid',
    targetKeywords: [
      'maid ai reseña',
      'maid app android',
      'maid llama.cpp app',
      'maid app código abierto llm',
      'maid vs pocketpal ai',
      'app llm local gratis android',
      'app chat gguf android',
      'mobile artificial intelligence maid',
    ],
    current_models_mentioned: ['Modelos GGUF vía llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Maid es una app Android gratuita y de código abierto (licencia MIT) que ejecuta modelos de lenguaje GGUF localmente mediante llama.cpp, y que también puede conectarse a proveedores remotos —Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita y OrcaRouter— usando tu propia clave de API.** La desarrolla la [organización de GitHub Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence/maid), fundada por Dane Madsen, quien inició el proyecto en octubre de 2023. La app se construyó originalmente con Flutter y se distribuyó para Android, iOS (sideload), Windows, macOS y Linux hasta la versión 2.0.7 (abril de 2025); la versión 3.0.0 (marzo de 2026) reescribió la app en React Native y limitó la distribución solo a Android — actualmente no existe build para iOS, Windows, macOS ni Linux. El proyecto se sigue desarrollando activamente, con commits y pull requests fusionados tan recientes como septiembre de 2026.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar Maid para chat de IA local en Android?',
        answer:
          'Sí, si usas Android y quieres una app gratuita y de código abierto que pueda ejecutar modelos GGUF completamente en el dispositivo vía llama.cpp, o conectarse a tus propias cuentas con proveedores como OpenAI, Anthropic u Ollama. No es una buena opción si usas iPhone, Mac, Windows o Linux — la versión actual 3.0.0 eliminó esas plataformas al reescribir la app de Flutter a React Native, y hoy solo distribuye un build para Android.',
        bullets: [
          'Gratuita y de código abierto bajo licencia MIT — sin suscripción, código fuente público en [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Solo para Android desde la versión 3.0.0 (marzo de 2026); disponible en [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) y como APK directa desde [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'Ejecuta modelos GGUF localmente vía llama.cpp, o se conecta a Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita y OrcaRouter con tu propia clave de API.',
          'Comenzó como app multiplataforma en Flutter creada por el desarrollador Dane Madsen en octubre de 2023; reescrita en React Native para la v3.0.0, eliminando los builds de iOS, Windows, macOS y Linux en el proceso.',
          'Mantenida activamente al momento de esta reseña — commits y pull requests fusionados tan recientes como principios de septiembre de 2026, con 10 issues abiertos y 283 forks en GitHub.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Maid?', anchor: 'what-is-maid' },
      { label: '¿Quién creó Maid y qué cambió con la reescritura?', anchor: 'history-and-developer' },
      { label: 'Cómo empezar con Maid', anchor: 'getting-started' },
      { label: '¿Qué modelos admite Maid?', anchor: 'models-supported' },
      { label: '¿Está Maid disponible en iPhone, Windows o Mac?', anchor: 'platform-availability' },
      { label: '¿Cuánto cuesta Maid?', anchor: 'pricing' },
      { label: '¿Qué funciones tiene Maid?', anchor: 'key-features' },
      { label: '¿Qué hardware necesitas?', anchor: 'hardware-requirements' },
      { label: 'Quién debería usar Maid', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Maid', anchor: 'who-should-not-use' },
      { label: 'Maid frente a alternativas', anchor: 'vs-alternatives' },
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
            text: 'Maid es una app Android gratuita, de código abierto bajo licencia MIT, que ejecuta modelos de lenguaje GGUF localmente vía llama.cpp o se conecta a proveedores de IA remotos con tu propia clave de API, mantenida por la organización de GitHub Mobile-Artificial-Intelligence, fundada por el desarrollador Dane Madsen.',
          },
          {
            type: 'plain-terms',
            text: 'Es una app que instalas en un teléfono Android para chatear con un modelo de IA que corre en tu propio dispositivo o mediante una cuenta que ya tengas con un proveedor como OpenAI o Anthropic — el código es público en GitHub y la app en sí es gratis. Antes también funcionaba en iPhone, Windows, Mac y Linux, pero la versión actual eliminó esas plataformas.',
          },
        ],
        items: [
          'Gratuita y de código abierto (licencia MIT); código fuente y seguimiento de incidencias públicos en [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Fundada por Dane Madsen en octubre de 2023 como app multiplataforma en Flutter; hoy mantenida por la organización Mobile-Artificial-Intelligence.',
          'Ejecuta modelos GGUF completamente en el dispositivo vía llama.cpp, o se conecta a Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita y OrcaRouter con tu propia clave de API.',
          'La versión 3.0.0 (marzo de 2026) reescribió la app en React Native y la limitó a Android — las versiones antiguas de Flutter también se distribuían para iOS (sideload), Windows, macOS y Linux, pero esos builds ya no forman parte de la versión actual.',
          'Disponible en [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) y como descarga directa de APK/AAB desde [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'No se encontró ningún nivel de pago en la app ni en su documentación al momento de esta reseña; la app base y su función de chat local son gratuitas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el [repositorio público de GitHub](https://github.com/Mobile-Artificial-Intelligence/maid), su README, el historial de versiones y la ficha de Google Play, revisados en septiembre de 2026. PromptQuorum no ha realizado pruebas prácticas independientes de Maid para esta reseña — las cifras de rendimiento a continuación son orientación general de hardware para LLM locales, no mediciones específicas de esta app.',
          },
        ],
      },
      overview: {
        id: 'what-is-maid',
        title: '¿Qué es Maid?',
        content: [
          '**Maid es una app Android que descarga y ejecuta localmente en el dispositivo modelos de lenguaje de peso abierto en formato GGUF mediante [llama.cpp](https://github.com/ggml-org/llama.cpp), o envía solicitudes de chat a un proveedor remoto usando una clave de API que tú mismo proporcionas.** La app tiene [licencia MIT](https://github.com/Mobile-Artificial-Intelligence/maid/blob/main/LICENSE), lo que significa que el código fuente completo es público y libre de inspeccionar, bifurcar o modificar.',
          'Ese modo dual es el rasgo distintivo de la app: no es exclusivamente un cliente de inferencia local. La misma interfaz puede ejecutar un archivo GGUF completamente sin conexión, o enrutar una conversación hacia un proveedor en la nube como OpenAI o Anthropic mediante tu propia cuenta, o hacia un servidor [Ollama](https://ollama.com) autoalojado en tu red. Según su README, el proyecto se describe a sí mismo como "no afiliado a Huggingface, Meta (Facebook), MistralAi, OpenAI, Google, Microsoft ni ninguna otra empresa que ofrezca un modelo compatible con esta aplicación".',
        ],
        note: 'GGUF es un formato de archivo para empaquetar modelos de lenguaje de peso abierto cuantizados, de modo que puedan ejecutarse eficientemente en hardware de consumo mediante runtimes como llama.cpp, en lugar de llamar a una API en la nube por cada respuesta.',
      },
      history: {
        id: 'history-and-developer',
        title: '¿Quién creó Maid y qué cambió con la reescritura?',
        content: [
          '**Maid fue creado por Dane Madsen, quien inició el proyecto en octubre de 2023 como una app multiplataforma en Flutter para ejecutar modelos GGUF y llama.cpp.** El proyecto ahora está alojado bajo la [organización de GitHub Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence/maid) en lugar de la cuenta personal de Madsen; su repositorio original, [danemadsen/maid](https://github.com/danemadsen/maid), figura ahora en GitHub como un fork del repositorio de la organización, y su descripción todavía dice "app multiplataforma en Flutter" aunque eso ya no coincide con el código actual.',
          'El historial de versiones muestra un quiebre claro. Los lanzamientos hasta **v2.0.7 (abril de 2025)** se construyeron con Flutter y distribuían paquetes instalables para Android (APK/AAB), iOS (un `.ipa` para sideload, sin ficha en la App Store), Linux (`.zip`/`.AppImage`), macOS (`.dmg` para Intel y Apple Silicon), Windows (`.zip`) e incluso un build web. La **versión 3.0.0 (publicada el 10 de marzo de 2026)** es una reescritura completa en React Native, y su lanzamiento solo incluye paquetes de Android (variantes APK y AAB) — no hay archivos para iOS, Windows, macOS ni Linux. El registro de cambios de ese lanzamiento menciona soporte para modelos de visión, texto a voz del sistema, reconocimiento de voz del sistema, soporte para modelos de razonamiento, renderizado de Markdown y una función de voto positivo/negativo para reportes que las notas describen como un requisito de Google Play.',
          'El desarrollo continuó después de esa reescritura: el repositorio muestra pull requests fusionados y commits fechados hasta principios de septiembre de 2026, incluyendo una corrección al sistema de chat y la incorporación de [OrcaRouter](https://www.orcarouter.ai) como proveedor remoto. Al momento de esta reseña, el repositorio tenía alrededor de 2.700 estrellas, 283 forks y 10 issues abiertos — evidencia de un proyecto activamente usado y mantenido, aunque de código abierto de una sola organización y no una empresa financiada con equipo de soporte.',
        ],
        items: [
          'Fundador: Dane Madsen (GitHub: [danemadsen](https://github.com/danemadsen)), quien inició el proyecto en octubre de 2023.',
          'Mantenedor actual: la organización de GitHub [Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence); el repositorio personal de Madsen es ahora un fork del repositorio de la organización.',
          'Licencia: MIT — código abierto permisivo, libre de usar, bifurcar y modificar.',
          'Cambio de arquitectura principal: Flutter (multiplataforma, hasta v2.0.7, abril de 2025) → React Native, solo Android (desde v3.0.0, marzo de 2026).',
          'Alrededor de 2.700 estrellas, 283 forks y 10 issues abiertos en GitHub al momento de esta reseña, con commits y pull requests fusionados tan recientes como septiembre de 2026.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar con Maid',
        content: [
          '**Tener un chat funcional en Maid toma unos pocos pasos tras instalar la versión actual para Android.** No se requiere una cuenta obligatoria para el chat local en el dispositivo; el inicio de sesión opcional existe solo para la función de copia de seguridad en la nube de la app.',
        ],
        numberedItems: [
          {
            title: 'Instala la app en Android',
            whyItMatters: 'Descarga Maid desde [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid), o instala la APK directamente desde la [página de GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases) si prefieres hacer sideload. Actualmente no hay build disponible para iOS, Windows, macOS ni Linux.',
          },
          {
            title: 'Elige el modo local o remoto',
            whyItMatters: 'Decide si quieres descargar un modelo GGUF y ejecutarlo completamente en el dispositivo vía llama.cpp, o conectar la app a un proveedor remoto (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita u OrcaRouter) usando una clave de API o dirección de servidor que ya tengas.',
          },
          {
            title: 'Descarga o importa un modelo (modo local)',
            whyItMatters: 'Para chat en el dispositivo, descarga un modelo GGUF con un tamaño acorde a la RAM de tu teléfono (ver la sección de hardware más abajo), o carga un archivo GGUF personalizado desde el almacenamiento local o [Hugging Face](https://huggingface.co).',
          },
          {
            title: 'Empieza a chatear',
            whyItMatters: 'Una vez cargado un modelo local o configurado un proveedor remoto, inicia una conversación. Los chats se pueden crear, renombrar, eliminar y exportar o importar como archivos JSON desde dentro de la app.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '¿Qué modelos admite Maid?',
        itemHeadings: true,
        columns: ['Modo de acceso', 'A qué se conecta', 'Notas'],
        rows: [
          {
            'Modo de acceso': 'Local (en el dispositivo)',
            'A qué se conecta': 'Cualquier modelo en formato GGUF, cargado vía [llama.cpp](https://github.com/ggml-org/llama.cpp)',
            'Notas': 'No hay una lista de modelos curada fija — la app ejecuta cualquier archivo GGUF que descargues o importes, incluidos los de Hugging Face.',
          },
          {
            'Modo de acceso': 'Proveedores remotos',
            'A qué se conecta': 'Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, [OrcaRouter](https://www.orcarouter.ai)',
            'Notas': 'Requiere tu propia cuenta y clave de API (o, en el caso de Ollama, tu propia dirección de servidor); Maid no incluye ni revende acceso a estos proveedores.',
          },
        ],
        note: 'Como Maid puede cargar cualquier archivo GGUF, su soporte práctico de modelos está definido por la compatibilidad con llama.cpp y no por una lista curada por la app — esto es diferente de apps como PocketPal AI o Private LLM, que ofrecen un catálogo específico de descarga rápida además del soporte para archivos personalizados.',
      },
      platform: {
        id: 'platform-availability',
        title: '¿Está Maid disponible en iPhone, Windows o Mac?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidad actual', 'Notas'],
        rows: [
          {
            'Plataforma': 'Android',
            'Disponibilidad actual': 'Disponible ahora',
            'Notas': 'Se distribuye vía [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) y como APK/AAB directa desde [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases). Es la única plataforma que cubre la versión actual 3.0.0.',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidad actual': 'No disponible actualmente',
            'Notas': 'Los lanzamientos antiguos en Flutter (hasta v2.0.7, abril de 2025) incluían un archivo `.ipa` para sideload, pero nunca hubo ficha en la App Store, y el lanzamiento actual v3.0.0 no incluye ningún archivo para iOS.',
          },
          {
            'Plataforma': 'Windows / macOS / Linux',
            'Disponibilidad actual': 'No disponible actualmente',
            'Notas': 'Existían builds de escritorio (`.zip`, `.AppImage`, `.dmg`) para los lanzamientos basados en Flutter hasta v2.0.7, pero la reescritura en React Native (v3.0.0) no distribuye paquetes de escritorio. Los usuarios de escritorio que buscan un cliente de chat GGUF local deberían considerar Ollama, LM Studio o Jan AI.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: '¿Cuánto cuesta Maid?',
        content: [
          '**Maid es gratuita de descargar y usar, tanto para chat local en el dispositivo como para chat con proveedores remotos, y su código fuente es público bajo licencia MIT.** No se encontró ninguna compra dentro de la app, suscripción o nivel de pago en el repositorio, las notas de lanzamiento ni la ficha de Google Play al momento de esta reseña.',
          'Los costos que realmente asume un usuario de Maid son indirectos: almacenamiento del dispositivo para los archivos de modelos GGUF descargados (típicamente varios gigabytes cada uno) y, en el modo con proveedores remotos, lo que Anthropic, OpenAI, Mistral, DeepSeek, Novita, Ollama u OrcaRouter cobren por separado por el uso de su API bajo tu propia cuenta con ese proveedor — Maid en sí no añade un margen ni una suscripción sobre esos costos del proveedor.',
        ],
        items: [
          '**App base:** Gratuita, sin suscripción, código abierto bajo licencia MIT.',
          '**Chat local (modelos GGUF en el dispositivo):** Gratuito — sin cargo por mensaje o token, ya que la inferencia se ejecuta en tu propio dispositivo.',
          '**Chat con proveedores remotos:** Gratuito de usar a través de Maid, pero pagas lo que cobre el proveedor (OpenAI, Anthropic, etc.) bajo tu propia cuenta y clave de API.',
          '**Copia de seguridad en la nube opcional:** La app permite registrarte o iniciar sesión para respaldar configuraciones e historial de chat vía Supabase; esta reseña no encontró un cargo separado por esta función.',
          '**Costo de almacenamiento:** No monetario, pero real — cada modelo GGUF descargado ocupa típicamente varios gigabytes de almacenamiento del dispositivo.',
        ],
      },
      features: {
        id: 'key-features',
        title: '¿Qué funciones tiene Maid?',
        content: [
          '**Más allá de la división básica entre chat local y remoto, el README y las notas de lanzamiento de Maid describen un conjunto de funciones añadidas a lo largo de su historial de versiones.** Entre ellas:',
        ],
        items: [
          '**Inferencia local y remota en una sola app.** Cambia entre chat GGUF completamente sin conexión vía llama.cpp y proveedores en la nube (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) con tus propias credenciales.',
          '**Gestión de conversaciones.** Crea, renombra, elimina, exporta e importa chats como archivos JSON.',
          '**System prompt personalizado.** Define un system prompt global para ajustar el comportamiento y tono del asistente.',
          '**Parámetros de generación ajustables.** Ajusta configuraciones como temperature, top-p, top-k y longitud de contexto por sesión.',
          '**Salida de voz mediante una app complementaria.** Maid se combina con [Maise](https://github.com/Mobile-Artificial-Intelligence/maise), un motor de texto a voz de código abierto para Android, separado y de la misma organización de GitHub, para leer las respuestas en voz alta.',
          '**Copia de seguridad en la nube opcional.** Los usuarios pueden registrarse o iniciar sesión para sincronizar configuraciones e historial de chat vía Supabase; esto es opcional y no obligatorio para usar la app.',
          '**Diseño Material You.** Temas claro y oscuro que siguen la preferencia del sistema Android.',
          '**Sin telemetría ni publicidad,** según el propio README del proyecto.',
        ],
        note: 'La disponibilidad de funciones puede variar según la versión de la app, ya que el proyecto lanza actualizaciones con frecuencia. Consulta el registro de cambios dentro de la app o la [página de GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases) para ver qué está disponible en tu versión instalada, especialmente dado lo mucho que cambió entre la línea v2.x basada en Flutter y la reescritura en React Native de la v3.0.0.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '¿Qué hardware necesitas para ejecutar Maid?',
        content: [
          '**El modelo GGUF que elijas, no la app en sí, determina tu límite real de hardware para el chat local — como guía general para modelos GGUF en teléfonos, un modelo cuantizado de 2 a 4B de parámetros necesita aproximadamente 3-4 GB de RAM libre, mientras que uno de 7 a 8B de parámetros necesita 6-8 GB o más.** Esta es una guía estándar de dimensionamiento para LLM locales, no un benchmark específico de Maid; PromptQuorum no ha medido de forma independiente el uso exacto de memoria de Maid por modelo.',
          'Como Maid ejecuta la inferencia local mediante llama.cpp, se aplica la guía general de rendimiento de llama.cpp en Android: un dispositivo reciente con más RAM y un chipset moderno cargará y ejecutará modelos más grandes con mayor comodidad que un teléfono más antiguo o limitado en memoria o almacenamiento. Si usas el modo con proveedores remotos en lugar de inferencia local, los requisitos de hardware en el dispositivo son mínimos — el modelo se ejecuta en los servidores del proveedor, y tu teléfono solo necesita una conexión a internet funcional.',
        ],
        items: [
          'Modelos pequeños (2-4B de parámetros, cuantizados): usables en la mayoría de teléfonos Android recientes con 4 GB+ de RAM libre.',
          'Modelos medianos (7-8B de parámetros, cuantizados): se recomienda 8 GB o más de RAM del dispositivo para una respuesta aceptable.',
          'Almacenamiento: reserva varios gigabytes de almacenamiento libre por cada archivo de modelo GGUF descargado.',
          'Modo con proveedores remotos: sin requisitos de hardware local significativos más allá de una conexión a internet funcional, ya que la inferencia corre en la infraestructura del proveedor.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Maid',
        items: [
          '**Usuarios de Android que quieren chat local y en la nube en una sola app gratuita.** La posibilidad de alternar entre inferencia GGUF completamente sin conexión y tus propias cuentas con proveedores como OpenAI o Anthropic, en un único cliente de código abierto, es el diferenciador más claro de Maid.',
          '**Usuarios que quieren ejecutar un archivo GGUF sin restricciones, no una lista de modelos curada.** Como la app carga cualquier modelo GGUF vía llama.cpp en lugar de ofrecer un catálogo fijo, es adecuada para quienes ya tienen un modelo específico en mente.',
          '**Desarrolladores y usuarios técnicamente curiosos cómodos con proyectos de código abierto.** El repositorio público de GitHub, el seguimiento de incidencias y el historial activo de lanzamientos son adecuados para quienes están dispuestos a leer notas de versión o reportar un problema en lugar de esperar soporte al cliente dedicado.',
          '**Usuarios que quieren inspeccionar o modificar el código ellos mismos.** La licencia MIT permite bifurcar y modificar, algo importante para quien quiera auditar exactamente qué hace la app antes de confiarle conversaciones privadas o claves de API de proveedores.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Maid',
        items: [
          '**Usuarios de iPhone, iPad, Windows, macOS o Linux.** La versión actual 3.0.0 es solo para Android; no hay ficha en la App Store ni build de escritorio compatible. Los usuarios en esas plataformas deberían considerar Private LLM o PocketPal AI (Apple), u Ollama, LM Studio o Jan AI (escritorio).',
          '**Usuarios que quieren una experiencia totalmente guiada, sin configuración.** Elegir entre modo local y remoto, seleccionar el tamaño de modelo adecuado para tu dispositivo y gestionar claves de API forma parte del flujo de trabajo; quienes prefieran que la app tome esas decisiones por ellos podrían preferir una app más curada como Loci o Enclave AI.',
          '**Usuarios que quieren ejecutar localmente los modelos más exigentes (70B+ parámetros).** El hardware de un teléfono, incluso en dispositivos Android de gama alta, no puede ejecutar de forma práctica modelos de esa escala en el dispositivo — esas cargas de trabajo necesitan un escritorio, una workstation o una API en la nube/proveedor remoto, sin importar qué app móvil se use.',
          '**Usuarios que esperan soporte comercial dedicado.** Maid lo mantiene una organización de código abierto en GitHub, no una empresa financiada con equipo de soporte; quienes necesiten tiempos de respuesta garantizados o un acuerdo de soporte empresarial deberían buscar una alternativa con respaldo comercial.',
          '**Usuarios que necesitan el antiguo build multiplataforma.** Cualquiera que dependa del soporte anterior de Maid para iOS, Windows, macOS o Linux de los lanzamientos v2.x basados en Flutter debe saber que esas plataformas no forman parte de la versión actual y activamente mantenida.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Maid frente a alternativas',
        itemHeadings: true,
        columns: ['App', 'Licencia / costo', 'Plataformas', 'Flexibilidad de modelos'],
        rows: [
          {
            'App': 'Maid',
            'Licencia / costo': 'Gratuita, código abierto (MIT)',
            'Plataformas': 'Solo Android (desde v3.0.0)',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF vía llama.cpp, o proveedores remotos (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) con tu propia clave de API',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Licencia / costo': 'Gratuita, código abierto (MIT)',
            'Plataformas': 'iPhone/iPad, Android',
            'Flexibilidad de modelos': 'Lista de descarga rápida más cualquier archivo GGUF de Hugging Face',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Licencia / costo': 'De pago, compra única; código cerrado',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Flexibilidad de modelos': '140+ modelos, con formatos de cuantización OmniQuant y GPTQ',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Licencia / costo': 'Gratuita con nivel de pago; código cerrado',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Flexibilidad de modelos': 'Lista curada de modelos en el dispositivo; integración con Siri y Atajos',
          },
          {
            'App': 'ChatterUI',
            'Licencia / costo': 'Gratuita, código abierto (AGPL-3.0)',
            'Plataformas': 'Android (compilar desde el código fuente)',
            'Flexibilidad de modelos': 'Ejecuta archivos GGUF en el dispositivo vía llama.cpp, o se conecta a APIs remotas; soporte para Character Card v2',
          },
          {
            'App': 'RikkaHub',
            'Licencia / costo': 'Gratuita, código abierto',
            'Plataformas': 'Android',
            'Flexibilidad de modelos': 'Cliente multi-proveedor (APIs compatibles con OpenAI/Google/Anthropic); diseño Material You',
          },
          {
            'App': 'AnythingLLM Mobile',
            'Licencia / costo': 'Gratuita, código abierto',
            'Plataformas': 'iPhone/iPad, Android',
            'Flexibilidad de modelos': 'Inferencia en el dispositivo, conexión a una instancia de AnythingLLM autoalojada, o cualquier proveedor compatible con OpenAI',
          },
        ],
        note: 'LLM Farm, antes una popular app de chat GGUF de código abierto para iOS, fue retirada de la App Store y marcada como "temporalmente no disponible" en su propio repositorio de GitHub al momento de esta reseña — por eso se omite de las recomendaciones activas anteriores. A Layla, otra app de asistencia en el dispositivo, según reportes se le retiró su nivel gratuito "Layla Lite" de Google Play; verifica la disponibilidad actual directamente en [layla-network.ai](https://www.layla-network.ai) antes de asumir que se puede instalar.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Maid?',
            a: 'Sí. Maid es gratuita de descargar y usar, tanto para chat local en el dispositivo como para chat con proveedores remotos, y la app es de código abierto bajo licencia MIT. No se encontró ningún nivel de pago ni compra dentro de la app en su documentación al momento de esta reseña; el modo con proveedores remotos se sigue facturando a través de tu propia cuenta con ese proveedor.',
          },
          {
            q: '¿Quién desarrolló Maid?',
            a: 'Maid fue creado por Dane Madsen, quien inició el proyecto en octubre de 2023 como una app multiplataforma en Flutter. Hoy se mantiene bajo la organización de GitHub Mobile-Artificial-Intelligence en lugar de como proyecto personal.',
          },
          {
            q: '¿Es Maid de código abierto?',
            a: 'Sí, el código fuente completo está publicado en [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) bajo licencia MIT, una licencia permisiva que permite el uso, modificación y redistribución libres.',
          },
          {
            q: '¿Funciona Maid en iPhone, Windows o Mac?',
            a: 'No. Desde la versión 3.0.0 (marzo de 2026), Maid es solo para Android. Los lanzamientos anteriores basados en Flutter hasta la v2.0.7 (abril de 2025) incluían builds para iOS (solo sideload, sin ficha en la App Store), Windows, macOS y Linux, pero esas plataformas no son compatibles con la versión actual y activamente mantenida.',
          },
          {
            q: '¿Qué modelos puede ejecutar Maid?',
            a: 'Para chat local, Maid puede ejecutar cualquier modelo en formato GGUF vía llama.cpp — no hay una lista curada fija. También puede conectarse a proveedores remotos, incluyendo Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita y OrcaRouter, usando una clave de API o dirección de servidor que tú mismo proporciones.',
          },
          {
            q: '¿Cuánta RAM necesita Maid para modelos locales?',
            a: 'Esto depende del modelo GGUF que elijas, no de un requisito fijo de la app. Como guía general, los modelos cuantizados de 2 a 4B de parámetros suelen necesitar 3-4 GB de RAM libre, y los de 7 a 8B suelen necesitar 8 GB o más. Los dispositivos con más RAM pueden ejecutar localmente modelos más grandes y capaces.',
          },
          {
            q: '¿Requiere Maid conexión a internet?',
            a: 'No se requiere conexión a internet para el chat local una vez descargado un modelo GGUF — la inferencia se ejecuta completamente en el dispositivo vía llama.cpp. Se requiere conexión a internet para la descarga inicial de modelos, para usar el modo con proveedores remotos, y para la función opcional de copia de seguridad en la nube basada en Supabase.',
          },
          {
            q: '¿Sigue Maid manteniéndose activamente?',
            a: 'Al momento de esta reseña, sí: el repositorio de GitHub muestra commits y pull requests fusionados tan recientes como principios de septiembre de 2026, incluyendo una corrección al sistema de chat y la incorporación de OrcaRouter como proveedor remoto. Lo mantiene una organización de código abierto en GitHub y no una empresa financiada, así que verifica tú mismo la actividad reciente del repositorio antes de depender de él para algo urgente.',
          },
          {
            q: '¿Qué pasó con el soporte de Maid para iOS, Windows y Mac?',
            a: 'Maid fue originalmente una app multiplataforma en Flutter; los lanzamientos hasta la v2.0.7 (abril de 2025) incluían, además de Android, builds instalables para iOS (sideload), Windows, macOS y Linux. La versión 3.0.0 (marzo de 2026) reescribió la app en React Native y limitó el proyecto solo a Android — los builds de escritorio e iOS no forman parte de la línea de lanzamientos actual.',
          },
          {
            q: '¿Cómo se compara Maid con PocketPal AI o Private LLM?',
            a: 'Maid es gratuita, de código abierto, solo para Android e inusual porque admite tanto inferencia GGUF completamente local como proveedores remotos en la nube dentro de una misma app. PocketPal AI también es gratuita y de código abierto, pero cubre iPhone/iPad y Android con inferencia GGUF solo local. Private LLM es una app de pago, de código cerrado y exclusiva de Apple con un catálogo de modelos integrado más amplio. Elige Maid si usas Android y quieres opciones locales y en la nube en un mismo cliente; elige PocketPal AI si necesitas soporte para iOS con un modelo local similar, gratuito y de código abierto; elige Private LLM si prefieres una experiencia de pago, más pulida y exclusiva de Apple. Consulta la tabla comparativa anterior para más detalles.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Maid es una app Android genuinamente gratuita y genuinamente de código abierto con una combinación inusual para esta categoría: ejecuta modelos GGUF locales vía llama.cpp y te permite conectarte a proveedores remotos como OpenAI o Anthropic dentro del mismo cliente. Esa flexibilidad viene con compensaciones reales que conviene conocer antes de instalarla. La app pasó por un cambio de arquitectura importante en 2026 — una reescritura de Flutter multiplataforma a React Native solo para Android — que eliminó el soporte para iOS, Windows, macOS y Linux que tenía la versión anterior. La mantiene una organización de código abierto en GitHub y no una empresa, con un desarrollo activo al momento de esta reseña pero sin garantía de continuar a un ritmo determinado. Elige Maid si eres usuario de Android y quieres un cliente de chat gratuito, abierto y de doble modo (local y remoto), y te sientes cómodo con un proyecto mantenido por la comunidad. Elige otra app —PocketPal AI o Private LLM para dispositivos Apple, u Ollama, LM Studio o Jan AI para escritorio— si necesitas una plataforma que la versión actual de Maid no cubre.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Maid en GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) — código fuente, licencia (MIT), README e historial de versiones referenciados en esta reseña.',
          '[Página de lanzamientos de Maid](https://github.com/Mobile-Artificial-Intelligence/maid/releases) — historial de versiones, registros de cambios y paquetes de compilación de la v2.0.4 a la v3.0.0.',
          '[Historial de commits del repositorio de Maid](https://github.com/Mobile-Artificial-Intelligence/maid/commits/main) — actividad reciente de commits y pull requests usada para evaluar el estado de mantenimiento.',
          '[Maid en Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) — disponibilidad para Android.',
          '[danemadsen/maid en GitHub](https://github.com/danemadsen/maid) — el repositorio original del fundador, hoy un fork del repositorio actual de la organización.',
          '[Maise en GitHub](https://github.com/Mobile-Artificial-Intelligence/maise) — el motor de texto a voz de código abierto para Android, complementario de Maid.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Las mejores apps de LLM local para Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — el resumen de apps de Android, incluyendo Maid, MLC Chat y PocketPal AI.',
          '[Reseña de PocketPal AI](/power-local-llm/pocketpal-ai-review) — una alternativa gratuita y de código abierto que también cubre iPhone y iPad.',
          '[Reseña de Private LLM](/power-local-llm/private-llm-review) — una alternativa de pago, de código cerrado y exclusiva de Apple con un catálogo de modelos integrado más amplio.',
          '[Reseña de Enclave AI](/power-local-llm/enclave-ai-review) — una alternativa exclusiva de Apple con automatización mediante Siri y Atajos.',
          '[Las mejores apps de LLM local para Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — el resumen de apps de Android, incluyendo Maid, MLC Chat y PocketPal AI.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Reseña de Maid (2026): App de Chat con LLM Local de Código Abierto para Android',
      description:
        'Reseña de Maid: una app Android gratuita y de código abierto (MIT) que ejecuta modelos GGUF localmente vía llama.cpp o se conecta a proveedores de IA. Plataformas, historia y para quién es.',
      url: 'https://promptquorum.com/es/power-local-llm/maid-review',
      inLanguage: 'es',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuarios de Android que evalúan apps de chat con IA local y multi-proveedor, gratuitas y de código abierto' },
      about: [
        { '@type': 'Thing', name: 'Maid' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'LLM local' },
        { '@type': 'Thing', name: 'Software de código abierto' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/maid-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Reseña de Maid (2026)', item: 'https://promptquorum.com/es/power-local-llm/maid-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/maid-review-hero-fr.webp',
    title: 'Maid : test (2026) — application de chat LLM local open source pour Android',
    seoTitle: 'Maid : test 2026 — application Android LLM open source',
    intro:
      'Maid est une application de chat gratuite et open source (licence MIT) qui exécute des modèles de langage au format GGUF localement via [llama.cpp](https://github.com/ggml-org/llama.cpp), ou se connecte à des fournisseurs distants comme Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita et OrcaRouter avec votre propre clé API. Le projet a démarré en 2023 comme une application Flutter multiplateforme créée par le développeur australien Dane Madsen, mais le code a été réécrit en React Native pour la version 3.0.0 (mars 2026), et l\'application ne cible plus aujourd\'hui qu\'Android — les versions de bureau et iOS qui existaient dans les anciennes versions Flutter ont disparu de la version actuelle. Ce test décrit ce que fait Maid aujourd\'hui, ce qui a changé lors de cette réécriture, ses exigences réelles de plateforme et de matériel, son tarif (gratuit, aucun palier payant) et pour qui elle convient — ou non — par rapport à une alternative commerciale.',
    metaDescription:
      'Test de Maid : une application Android gratuite et open source (MIT) qui exécute des modèles GGUF en local via llama.cpp ou se connecte à des fournisseurs d\'IA. Plateformes, historique et public visé.',
    twitterDescription:
      'Test de Maid 2026 : l\'application Android gratuite et open source pour le chat GGUF local via llama.cpp, désormais réservée à Android après une réécriture en 2026. Ce qui a changé et pour qui.',
    audience:
      'Utilisateurs Android qui veulent une application de chat IA locale ou multi-fournisseurs, gratuite et open source, à l\'aise avec un projet maintenu par la communauté et réservé à Android.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Test de Maid',
    targetKeywords: [
      'maid ai test',
      'maid app android',
      'maid llama.cpp app',
      'maid application llm open source',
      'maid vs pocketpal ai',
      'application llm locale gratuite android',
      'application chat gguf android',
      'mobile artificial intelligence maid',
    ],
    current_models_mentioned: ['Modèles GGUF via llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Maid est une application Android gratuite et open source (licence MIT) qui exécute des modèles de langage GGUF localement via llama.cpp, et qui peut aussi se connecter à des fournisseurs distants — Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita et OrcaRouter — avec votre propre clé API.** Elle est développée par l\'[organisation GitHub Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence/maid), fondée par Dane Madsen, qui a lancé le projet en octobre 2023. L\'application était à l\'origine construite avec Flutter et distribuée pour Android, iOS (sideload), Windows, macOS et Linux jusqu\'à la version 2.0.7 (avril 2025) ; la version 3.0.0 (mars 2026) a réécrit l\'application en React Native et restreint la distribution à Android — il n\'existe actuellement aucune version pour iOS, Windows, macOS ou Linux. Le projet continue d\'être développé activement, avec des commits et des pull requests fusionnées aussi récentes que septembre 2026.',
    quickAnswerTop: {
      fr: {
        question: 'Maid vaut-elle la peine d\'être installée pour un chat IA local sur Android ?',
        answer:
          'Oui, si vous utilisez Android et souhaitez une application gratuite et open source capable d\'exécuter des modèles GGUF entièrement sur l\'appareil via llama.cpp, ou de se connecter à vos propres comptes chez des fournisseurs comme OpenAI, Anthropic ou Ollama. Elle ne convient pas si vous utilisez iPhone, Mac, Windows ou Linux — la version actuelle 3.0.0 a supprimé ces plateformes lors de la réécriture de Flutter vers React Native, et ne propose plus qu\'une version Android aujourd\'hui.',
        bullets: [
          'Gratuite et open source sous licence MIT — sans abonnement, code source public sur [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Réservée à Android depuis la version 3.0.0 (mars 2026) ; disponible sur [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) et en APK directe depuis [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'Exécute des modèles GGUF localement via llama.cpp, ou se connecte à Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita et OrcaRouter avec votre propre clé API.',
          'Lancée comme application Flutter multiplateforme par le développeur Dane Madsen en octobre 2023 ; réécrite en React Native pour la v3.0.0, ce qui a fait disparaître les versions iOS, Windows, macOS et Linux au passage.',
          'Activement maintenue au moment du test — commits et pull requests fusionnées aussi récentes que début septembre 2026, avec 10 tickets ouverts et 283 forks sur GitHub.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Maid ?', anchor: 'what-is-maid' },
      { label: 'Qui a créé Maid, et qu\'est-ce qui a changé lors de la réécriture ?', anchor: 'history-and-developer' },
      { label: 'Comment démarrer avec Maid', anchor: 'getting-started' },
      { label: 'Quels modèles Maid prend-elle en charge ?', anchor: 'models-supported' },
      { label: 'Maid est-elle disponible sur iPhone, Windows ou Mac ?', anchor: 'platform-availability' },
      { label: 'Combien coûte Maid ?', anchor: 'pricing' },
      { label: 'Quelles fonctionnalités propose Maid ?', anchor: 'key-features' },
      { label: 'Quel matériel vous faut-il ?', anchor: 'hardware-requirements' },
      { label: 'À qui Maid s\'adresse', anchor: 'who-should-use' },
      { label: 'À qui Maid ne s\'adresse pas', anchor: 'who-should-not-use' },
      { label: 'Maid face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Foire aux questions', anchor: 'faq' },
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
            text: 'Maid est une application Android gratuite, open source sous licence MIT, qui exécute des modèles de langage GGUF localement via llama.cpp ou se connecte à des fournisseurs d\'IA distants avec votre propre clé API, maintenue par l\'organisation GitHub Mobile-Artificial-Intelligence, fondée par le développeur Dane Madsen.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est une application que vous installez sur un téléphone Android pour discuter avec un modèle d\'IA qui tourne soit sur votre propre appareil, soit via un compte que vous avez déjà chez un fournisseur comme OpenAI ou Anthropic — le code est public sur GitHub et l\'application elle-même est gratuite. Elle fonctionnait aussi auparavant sur iPhone, Windows, Mac et Linux, mais la version actuelle a abandonné ces plateformes.',
          },
        ],
        items: [
          'Gratuite et open source (licence MIT) ; code source et suivi des tickets publics sur [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Fondée par Dane Madsen en octobre 2023 comme application Flutter multiplateforme ; maintenue aujourd\'hui par l\'organisation Mobile-Artificial-Intelligence.',
          'Exécute des modèles GGUF entièrement sur l\'appareil via llama.cpp, ou se connecte à Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita et OrcaRouter avec votre propre clé API.',
          'La version 3.0.0 (mars 2026) a réécrit l\'application en React Native et l\'a restreinte à Android — les anciennes versions Flutter étaient aussi distribuées pour iOS (sideload), Windows, macOS et Linux, mais ces versions ne font plus partie de l\'application actuelle.',
          'Disponible sur [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) et en téléchargement direct APK/AAB depuis [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'Aucun palier payant trouvé dans l\'application ou sa documentation au moment du test ; l\'application de base et sa fonction de chat local sont gratuites.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur le [dépôt GitHub public](https://github.com/Mobile-Artificial-Intelligence/maid), son README, l\'historique des versions et la fiche Google Play, vérifiés en septembre 2026. PromptQuorum n\'a pas réalisé de benchmark pratique indépendant de Maid pour ce test — les chiffres de performance ci-dessous sont des repères matériels généraux pour les LLM locaux, pas des mesures spécifiques à cette application.',
          },
        ],
      },
      overview: {
        id: 'what-is-maid',
        title: 'Qu\'est-ce que Maid ?',
        content: [
          '**Maid est une application Android qui télécharge et exécute localement sur l\'appareil des modèles de langage à poids ouverts au format GGUF via [llama.cpp](https://github.com/ggml-org/llama.cpp), ou envoie des requêtes de chat à un fournisseur distant en utilisant une clé API que vous fournissez vous-même.** L\'application est sous [licence MIT](https://github.com/Mobile-Artificial-Intelligence/maid/blob/main/LICENSE), ce qui signifie que le code source complet est public, librement consultable, forkable et modifiable.',
          'Ce mode double est la caractéristique déterminante de l\'application : ce n\'est pas exclusivement un client d\'inférence locale. La même interface peut exécuter un fichier GGUF entièrement hors ligne, ou acheminer une conversation vers un fournisseur cloud comme OpenAI ou Anthropic via votre propre compte, ou vers un serveur [Ollama](https://ollama.com) auto-hébergé sur votre réseau. Selon son README, le projet se décrit lui-même comme « non affilié à Huggingface, Meta (Facebook), MistralAi, OpenAI, Google, Microsoft ou toute autre entreprise fournissant un modèle compatible avec cette application ».',
        ],
        note: 'GGUF est un format de fichier permettant d\'empaqueter des modèles de langage à poids ouverts quantifiés afin qu\'ils s\'exécutent efficacement sur du matériel grand public via des runtimes comme llama.cpp, plutôt que d\'appeler une API cloud à chaque réponse.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Qui a créé Maid, et qu\'est-ce qui a changé lors de la réécriture ?',
        content: [
          '**Maid a été créée par Dane Madsen, qui a lancé le projet en octobre 2023 comme une application Flutter multiplateforme pour exécuter des modèles GGUF et llama.cpp.** Le projet est désormais hébergé sous l\'[organisation GitHub Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence/maid) plutôt que sous le compte personnel de Madsen ; son dépôt d\'origine, [danemadsen/maid](https://github.com/danemadsen/maid), est désormais répertorié par GitHub comme un fork du dépôt de l\'organisation, et sa description mentionne toujours « application Flutter multiplateforme » bien que cela ne corresponde plus au code actuel.',
          'L\'historique des versions montre une rupture nette. Les versions jusqu\'à **v2.0.7 (avril 2025)** étaient construites avec Flutter et fournissaient des paquets installables pour Android (APK/AAB), iOS (un `.ipa` à sideloader, sans fiche App Store), Linux (`.zip`/`.AppImage`), macOS (`.dmg` pour Intel et Apple Silicon), Windows (`.zip`), et même une version web. La **version 3.0.0 (publiée le 10 mars 2026)** est une réécriture complète en React Native, et sa publication ne comprend que des paquets Android (variantes APK et AAB) — aucun fichier pour iOS, Windows, macOS ou Linux. Le journal des modifications de cette version mentionne la prise en charge des modèles de vision, la synthèse vocale système, la reconnaissance vocale système, la prise en charge des modèles de raisonnement, le rendu Markdown, et une fonction de signalement par vote positif/négatif décrite dans les notes comme une exigence de Google Play.',
          'Le développement s\'est poursuivi après cette réécriture : le dépôt affiche des pull requests fusionnées et des commits datés jusqu\'à début septembre 2026, dont une correction du système de chat et l\'ajout d\'[OrcaRouter](https://www.orcarouter.ai) comme fournisseur distant. Au moment du test, le dépôt comptait environ 2 700 étoiles, 283 forks et 10 tickets ouverts — la preuve d\'un projet activement utilisé et activement maintenu, mais open source porté par une seule organisation, et non une entreprise financée disposant d\'une équipe de support.',
        ],
        items: [
          'Fondateur : Dane Madsen (GitHub : [danemadsen](https://github.com/danemadsen)), qui a lancé le projet en octobre 2023.',
          'Mainteneur actuel : l\'organisation GitHub [Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence) ; le dépôt personnel de Madsen est désormais un fork du dépôt de l\'organisation.',
          'Licence : MIT — open source permissive, libre d\'utilisation, de fork et de modification.',
          'Changement d\'architecture majeur : Flutter (multiplateforme, jusqu\'à v2.0.7, avril 2025) → React Native, Android uniquement (à partir de v3.0.0, mars 2026).',
          'Environ 2 700 étoiles GitHub, 283 forks et 10 tickets ouverts au moment du test, avec des commits et pull requests fusionnées aussi récentes que septembre 2026.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Comment démarrer avec Maid',
        content: [
          '**Obtenir un chat fonctionnel dans Maid prend quelques étapes après l\'installation de la version Android actuelle.** Aucun compte n\'est obligatoire pour le chat local sur l\'appareil ; une connexion optionnelle n\'existe que pour la fonction de sauvegarde cloud de l\'application.',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application sur Android',
            whyItMatters: 'Téléchargez Maid depuis [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid), ou installez l\'APK directement depuis la [page GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases) si vous préférez la sideloader. Aucune version iOS, Windows, macOS ou Linux n\'est actuellement disponible.',
          },
          {
            title: 'Choisir le mode local ou distant',
            whyItMatters: 'Décidez si vous voulez télécharger un modèle GGUF et l\'exécuter entièrement sur l\'appareil via llama.cpp, ou connecter l\'application à un fournisseur distant (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita ou OrcaRouter) via une clé API ou une adresse de serveur que vous possédez déjà.',
          },
          {
            title: 'Télécharger ou importer un modèle (mode local)',
            whyItMatters: 'Pour le chat sur l\'appareil, téléchargez un modèle GGUF dimensionné pour la RAM de votre téléphone (voir la section matériel ci-dessous), ou chargez un fichier GGUF personnalisé depuis le stockage local ou [Hugging Face](https://huggingface.co).',
          },
          {
            title: 'Commencer à discuter',
            whyItMatters: 'Une fois qu\'un modèle local est chargé ou qu\'un fournisseur distant est configuré, démarrez une conversation. Les chats peuvent être créés, renommés, supprimés, exportés ou importés sous forme de fichiers JSON depuis l\'application.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quels modèles Maid prend-elle en charge ?',
        itemHeadings: true,
        columns: ['Mode d\'accès', 'Ce à quoi cela se connecte', 'Remarques'],
        rows: [
          {
            'Mode d\'accès': 'Local (sur l\'appareil)',
            'Ce à quoi cela se connecte': 'N\'importe quel modèle au format GGUF, chargé via [llama.cpp](https://github.com/ggml-org/llama.cpp)',
            'Remarques': 'Pas de liste de modèles fixe et sélectionnée — l\'application exécute n\'importe quel fichier GGUF que vous téléchargez ou importez, y compris depuis Hugging Face.',
          },
          {
            'Mode d\'accès': 'Fournisseurs distants',
            'Ce à quoi cela se connecte': 'Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, [OrcaRouter](https://www.orcarouter.ai)',
            'Remarques': 'Nécessite votre propre compte et clé API (ou, pour Ollama, votre propre adresse de serveur) ; Maid n\'inclut ni ne revend l\'accès à ces fournisseurs.',
          },
        ],
        note: 'Comme Maid peut charger n\'importe quel fichier GGUF, sa prise en charge pratique des modèles est définie par la compatibilité avec llama.cpp plutôt que par une liste sélectionnée par l\'application — ce qui la distingue d\'applications comme PocketPal AI ou Private LLM, qui proposent un catalogue de téléchargement rapide spécifique en plus de la prise en charge de fichiers personnalisés.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Maid est-elle disponible sur iPhone, Windows ou Mac ?',
        itemHeadings: true,
        columns: ['Plateforme', 'Disponibilité actuelle', 'Remarques'],
        rows: [
          {
            'Plateforme': 'Android',
            'Disponibilité actuelle': 'Disponible dès maintenant',
            'Remarques': 'Distribuée via [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) et en APK/AAB directe depuis [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases). C\'est la seule plateforme ciblée par la version actuelle 3.0.0.',
          },
          {
            'Plateforme': 'iPhone / iPad',
            'Disponibilité actuelle': 'Non disponible actuellement',
            'Remarques': 'Les anciennes versions Flutter (jusqu\'à v2.0.7, avril 2025) fournissaient un fichier `.ipa` à sideloader, mais il n\'y a jamais eu de fiche App Store, et aucun fichier iOS n\'accompagne la version actuelle v3.0.0.',
          },
          {
            'Plateforme': 'Windows / macOS / Linux',
            'Disponibilité actuelle': 'Non disponible actuellement',
            'Remarques': 'Des versions de bureau (`.zip`, `.AppImage`, `.dmg`) existaient pour les versions basées sur Flutter jusqu\'à v2.0.7, mais la réécriture en React Native (v3.0.0) ne fournit plus de paquets de bureau. Les utilisateurs de bureau qui souhaitent un client de chat GGUF local devraient plutôt envisager Ollama, LM Studio ou Jan AI.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Combien coûte Maid ?',
        content: [
          '**Maid est gratuite à télécharger et à utiliser, aussi bien pour le chat local sur l\'appareil que pour le chat via fournisseurs distants, et son code source est public sous licence MIT.** Aucun achat intégré, abonnement ou palier payant n\'a été trouvé dans le dépôt, les notes de version ou la fiche Google Play de l\'application au moment du test.',
          'Les coûts qu\'un utilisateur de Maid supporte réellement sont indirects : le stockage de l\'appareil pour les fichiers de modèles GGUF téléchargés (généralement plusieurs gigaoctets chacun), et, en mode fournisseur distant, ce qu\'Anthropic, OpenAI, Mistral, DeepSeek, Novita, Ollama ou OrcaRouter facturent séparément pour l\'utilisation de leur API sous votre propre compte chez ce fournisseur — Maid elle-même n\'ajoute aucune marge ni abonnement à ces coûts.',
        ],
        items: [
          '**Application de base :** Gratuite, sans abonnement, open source sous licence MIT.',
          '**Chat local (modèles GGUF sur l\'appareil) :** Gratuit — aucun frais par message ou par jeton, puisque l\'inférence s\'exécute sur votre propre appareil.',
          '**Chat via fournisseurs distants :** Gratuit à utiliser via Maid, mais vous payez ce que facture le fournisseur (OpenAI, Anthropic, etc.) sous votre propre compte et clé API.',
          '**Sauvegarde cloud optionnelle :** L\'application permet de s\'inscrire ou de se connecter pour sauvegarder les paramètres et l\'historique de chat via Supabase ; ce test n\'a trouvé aucun frais distinct lié à cette fonction.',
          '**Coût de stockage :** Non monétaire, mais réel — chaque modèle GGUF téléchargé occupe généralement plusieurs gigaoctets de stockage sur l\'appareil.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Quelles fonctionnalités propose Maid ?',
        content: [
          '**Au-delà de la répartition de base entre chat local et distant, le README et les notes de version de Maid décrivent un ensemble de fonctionnalités ajoutées au fil de son historique de versions.** Notamment :',
        ],
        items: [
          '**Inférence locale et distante dans une seule application.** Basculez entre un chat GGUF entièrement hors ligne via llama.cpp et des fournisseurs cloud (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) avec vos propres identifiants.',
          '**Gestion des conversations.** Créez, renommez, supprimez, exportez et importez des chats sous forme de fichiers JSON.',
          '**Invite système personnalisée.** Définissez une invite système globale pour ajuster le comportement et le ton de l\'assistant.',
          '**Paramètres de génération ajustables.** Réglez des paramètres comme la température, le top-p, le top-k et la longueur du contexte par session.',
          '**Sortie vocale via une application compagnon.** Maid se combine avec [Maise](https://github.com/Mobile-Artificial-Intelligence/maise), un moteur de synthèse vocale Android open source distinct, de la même organisation GitHub, pour lire les réponses à voix haute.',
          '**Sauvegarde cloud optionnelle.** Les utilisateurs peuvent s\'inscrire ou se connecter pour synchroniser paramètres et historique de chat via Supabase ; ceci est facultatif et non requis pour utiliser l\'application.',
          '**Thème Material You.** Thèmes clair et sombre qui suivent la préférence système d\'Android.',
          '**Aucune télémétrie ni publicité,** selon le README du projet lui-même.',
        ],
        note: 'La disponibilité des fonctionnalités peut varier selon la version de l\'application, le projet publiant des mises à jour fréquentes. Consultez le journal des modifications dans l\'application ou la [page GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases) pour voir ce qui est actif dans votre version installée, d\'autant plus que beaucoup de choses ont changé entre la lignée v2.x basée sur Flutter et la réécriture React Native de la v3.0.0.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Quel matériel vous faut-il pour exécuter Maid ?',
        content: [
          '**Le modèle GGUF que vous choisissez, et non l\'application elle-même, fixe votre véritable seuil matériel pour le chat local — comme repère général pour les modèles GGUF sur téléphone, un modèle quantifié de 2 à 4 milliards de paramètres nécessite environ 3 à 4 Go de RAM libre, tandis qu\'un modèle de 7 à 8 milliards de paramètres nécessite 6 à 8 Go ou plus.** Il s\'agit d\'un repère standard de dimensionnement pour les LLM locaux, pas d\'un benchmark spécifique à Maid ; PromptQuorum n\'a pas mesuré de façon indépendante l\'utilisation mémoire exacte de Maid par modèle.',
          'Comme Maid exécute l\'inférence locale via llama.cpp, les repères généraux de performance de llama.cpp sur Android s\'appliquent : un appareil récent avec plus de RAM et une puce moderne chargera et exécutera des modèles plus volumineux plus confortablement qu\'un téléphone plus ancien ou limité en mémoire ou en stockage. Si vous utilisez le mode fournisseur distant plutôt que l\'inférence locale, les exigences matérielles sur l\'appareil sont minimes — le modèle s\'exécute sur les serveurs du fournisseur, et votre téléphone n\'a besoin que d\'une connexion internet fonctionnelle.',
        ],
        items: [
          'Petits modèles (2 à 4 milliards de paramètres, quantifiés) : utilisables sur la plupart des téléphones Android récents avec 4 Go+ de RAM libre.',
          'Modèles de taille moyenne (7 à 8 milliards de paramètres, quantifiés) : RAM de l\'appareil recommandée de 8 Go ou plus pour une réactivité acceptable.',
          'Stockage : prévoyez plusieurs gigaoctets d\'espace libre par fichier de modèle GGUF téléchargé.',
          'Mode fournisseur distant : aucune exigence matérielle locale significative au-delà d\'une connexion internet fonctionnelle, puisque l\'inférence s\'exécute sur l\'infrastructure du fournisseur.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui Maid s\'adresse',
        items: [
          '**Les utilisateurs Android qui veulent du chat local et cloud dans une seule application gratuite.** La possibilité de basculer entre une inférence GGUF entièrement hors ligne et vos propres comptes chez des fournisseurs comme OpenAI ou Anthropic, dans un seul client open source, est l\'atout le plus clair de Maid.',
          '**Les utilisateurs qui veulent exécuter un fichier GGUF sans restriction, plutôt qu\'une liste de modèles sélectionnée.** Comme l\'application charge n\'importe quel modèle GGUF via llama.cpp plutôt que de proposer un catalogue fixe, elle convient à ceux qui ont déjà un modèle précis en tête.',
          '**Les développeurs et utilisateurs technophiles à l\'aise avec les projets open source.** Le dépôt GitHub public, le suivi des tickets et l\'historique de publication actif conviennent à ceux prêts à lire les notes de version ou signaler un problème plutôt qu\'attendre un support client dédié.',
          '**Les utilisateurs qui veulent inspecter ou modifier le code eux-mêmes.** La licence MIT autorise le fork et la modification, ce qui compte pour quiconque veut vérifier exactement ce que fait l\'application avant de lui confier des conversations privées ou des clés API de fournisseurs.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui Maid ne s\'adresse pas',
        items: [
          '**Les utilisateurs iPhone, iPad, Windows, macOS ou Linux.** La version actuelle 3.0.0 est réservée à Android ; il n\'y a pas de fiche App Store ni de version de bureau prise en charge. Les utilisateurs sur ces plateformes devraient plutôt envisager Private LLM ou PocketPal AI (Apple), ou Ollama, LM Studio ou Jan AI (bureau).',
          '**Les utilisateurs qui veulent une expérience entièrement guidée, sans configuration.** Choisir entre mode local et distant, sélectionner une taille de modèle adaptée à votre appareil et gérer des clés API font partie du flux de travail ; ceux qui préfèrent que l\'application prenne ces décisions à leur place pourraient préférer une application plus encadrée comme Loci ou Enclave AI.',
          '**Les utilisateurs qui veulent exécuter localement les modèles les plus exigeants (70 milliards de paramètres et plus).** Le matériel des téléphones, même les appareils Android haut de gamme, ne peut pas exécuter de manière pratique des modèles de cette ampleur sur l\'appareil — ces charges de travail nécessitent un ordinateur de bureau, une station de travail ou une API cloud/fournisseur distant, quelle que soit l\'application mobile utilisée.',
          '**Les utilisateurs qui attendent un support commercial dédié.** Maid est maintenue par une organisation open source sur GitHub, et non par une entreprise financée disposant d\'une équipe de support ; ceux qui ont besoin de délais de réponse garantis ou d\'un contrat de support d\'entreprise devraient se tourner vers une alternative à soutien commercial.',
          '**Les utilisateurs qui ont besoin de l\'ancienne version multiplateforme.** Quiconque dépend de l\'ancien support iOS, Windows, macOS ou Linux de Maid issu des versions v2.x basées sur Flutter doit savoir que ces plateformes ne font pas partie de la version actuelle, activement maintenue.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Maid face aux alternatives',
        itemHeadings: true,
        columns: ['Application', 'Licence / coût', 'Plateformes', 'Flexibilité des modèles'],
        rows: [
          {
            'Application': 'Maid',
            'Licence / coût': 'Gratuite, open source (MIT)',
            'Plateformes': 'Android uniquement (à partir de v3.0.0)',
            'Flexibilité des modèles': 'N\'importe quel fichier GGUF via llama.cpp, ou fournisseurs distants (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) avec votre propre clé API',
          },
          {
            'Application': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Licence / coût': 'Gratuite, open source (MIT)',
            'Plateformes': 'iPhone/iPad, Android',
            'Flexibilité des modèles': 'Liste de téléchargement rapide plus n\'importe quel fichier GGUF depuis Hugging Face',
          },
          {
            'Application': '[Private LLM](/power-local-llm/private-llm-review)',
            'Licence / coût': 'Payante, achat unique ; code fermé',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Flexibilité des modèles': '140+ modèles, avec formats de quantification OmniQuant et GPTQ',
          },
          {
            'Application': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Licence / coût': 'Gratuite avec palier payant ; code fermé',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Flexibilité des modèles': 'Liste sélectionnée de modèles sur l\'appareil ; intégration Siri et Raccourcis',
          },
          {
            'Application': 'ChatterUI',
            'Licence / coût': 'Gratuite, open source (AGPL-3.0)',
            'Plateformes': 'Android (à compiler depuis le code source)',
            'Flexibilité des modèles': 'Exécute des fichiers GGUF sur l\'appareil via llama.cpp, ou se connecte à des API distantes ; prise en charge de Character Card v2',
          },
          {
            'Application': 'RikkaHub',
            'Licence / coût': 'Gratuite, open source',
            'Plateformes': 'Android',
            'Flexibilité des modèles': 'Client multi-fournisseurs (API compatibles OpenAI/Google/Anthropic) ; design Material You',
          },
          {
            'Application': 'AnythingLLM Mobile',
            'Licence / coût': 'Gratuite, open source',
            'Plateformes': 'iPhone/iPad, Android',
            'Flexibilité des modèles': 'Inférence sur l\'appareil, connexion à une instance AnythingLLM auto-hébergée, ou tout fournisseur compatible OpenAI',
          },
        ],
        note: 'LLM Farm, autrefois une application de chat GGUF open source populaire sur iOS, a été retirée de l\'App Store et marquée « temporairement indisponible » sur son propre dépôt GitHub au moment du test — elle est donc omise des recommandations actives ci-dessus. Layla, une autre application d\'assistance sur l\'appareil, aurait vu son palier gratuit « Layla Lite » retiré de Google Play ; vérifiez la disponibilité actuelle directement sur [layla-network.ai](https://www.layla-network.ai) avant de supposer qu\'elle est installable.',
      },
      faq: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          {
            q: 'Maid est-elle gratuite ?',
            a: 'Oui. Maid est gratuite à télécharger et à utiliser, aussi bien pour le chat local sur l\'appareil que pour le chat via fournisseurs distants, et l\'application est open source sous licence MIT. Aucun palier payant ni achat intégré n\'a été trouvé dans l\'application ou sa documentation au moment du test ; le mode fournisseur distant reste facturé via votre propre compte chez ce fournisseur.',
          },
          {
            q: 'Qui a développé Maid ?',
            a: 'Maid a été créée par Dane Madsen, qui a lancé le projet en octobre 2023 comme une application Flutter multiplateforme. Elle est aujourd\'hui maintenue sous l\'organisation GitHub Mobile-Artificial-Intelligence plutôt que comme un projet personnel.',
          },
          {
            q: 'Maid est-elle open source ?',
            a: 'Oui, le code source complet est publié sur [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) sous licence MIT, une licence permissive qui autorise l\'utilisation, la modification et la redistribution libres.',
          },
          {
            q: 'Maid fonctionne-t-elle sur iPhone, Windows ou Mac ?',
            a: 'Non. Depuis la version 3.0.0 (mars 2026), Maid est réservée à Android. Les versions précédentes basées sur Flutter jusqu\'à la v2.0.7 (avril 2025) fournissaient des versions pour iOS (sideload uniquement, sans fiche App Store), Windows, macOS et Linux, mais ces plateformes ne sont pas prises en charge par la version actuelle, activement maintenue.',
          },
          {
            q: 'Quels modèles Maid peut-elle exécuter ?',
            a: 'Pour le chat local, Maid peut exécuter n\'importe quel modèle au format GGUF via llama.cpp — il n\'y a pas de liste fixe et sélectionnée. Elle peut aussi se connecter à des fournisseurs distants, dont Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita et OrcaRouter, via une clé API ou une adresse de serveur que vous fournissez vous-même.',
          },
          {
            q: 'Combien de RAM Maid nécessite-t-elle pour les modèles locaux ?',
            a: 'Cela dépend du modèle GGUF que vous choisissez, pas d\'une exigence fixe de l\'application. Comme repère général, les modèles quantifiés de 2 à 4 milliards de paramètres nécessitent généralement 3 à 4 Go de RAM libre, et ceux de 7 à 8 milliards généralement 8 Go ou plus. Les appareils avec plus de RAM peuvent exécuter localement des modèles plus grands et plus performants.',
          },
          {
            q: 'Maid nécessite-t-elle une connexion internet ?',
            a: 'Aucune connexion internet n\'est nécessaire pour le chat local une fois qu\'un modèle GGUF est téléchargé — l\'inférence s\'exécute entièrement sur l\'appareil via llama.cpp. Une connexion internet est nécessaire pour le téléchargement initial des modèles, pour utiliser le mode fournisseur distant, et pour la fonction optionnelle de sauvegarde cloud basée sur Supabase.',
          },
          {
            q: 'Maid est-elle toujours activement maintenue ?',
            a: 'Au moment du test, oui : le dépôt GitHub affiche des commits et pull requests fusionnées aussi récentes que début septembre 2026, dont une correction du système de chat et l\'ajout d\'OrcaRouter comme fournisseur distant. Elle est maintenue par une organisation open source sur GitHub et non par une entreprise financée, alors vérifiez vous-même l\'activité récente du dépôt avant de vous y fier pour quoi que ce soit d\'urgent.',
          },
          {
            q: 'Qu\'est-il arrivé au support iOS, Windows et Mac de Maid ?',
            a: 'Maid était à l\'origine une application Flutter multiplateforme ; les versions jusqu\'à la v2.0.7 (avril 2025) fournissaient, en plus d\'Android, des versions installables pour iOS (sideload), Windows, macOS et Linux. La version 3.0.0 (mars 2026) a réécrit l\'application en React Native et restreint le projet à Android uniquement — les versions de bureau et iOS ne font plus partie de la ligne de versions actuelle.',
          },
          {
            q: 'Comment Maid se compare-t-elle à PocketPal AI ou Private LLM ?',
            a: 'Maid est gratuite, open source, réservée à Android, et inhabituelle en ce qu\'elle prend en charge à la fois l\'inférence GGUF entièrement locale et les fournisseurs cloud distants dans une seule application. PocketPal AI est également gratuite et open source, mais couvre iPhone/iPad et Android avec une inférence GGUF uniquement locale. Private LLM est une application payante, à code fermé, exclusive à Apple, avec un catalogue de modèles intégré plus large. Choisissez Maid si vous utilisez Android et voulez des options locales et cloud dans un seul client ; choisissez PocketPal AI si vous avez besoin d\'un support iOS avec un modèle local gratuit et open source similaire ; choisissez Private LLM si vous préférez une expérience payante, plus soignée, exclusive à Apple. Voir le tableau comparatif ci-dessus pour plus de détails.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Maid est une application Android véritablement gratuite et véritablement open source, avec une combinaison inhabituelle pour cette catégorie : elle exécute des modèles GGUF locaux via llama.cpp et vous permet de vous connecter à des fournisseurs distants comme OpenAI ou Anthropic dans le même client. Cette flexibilité s\'accompagne de compromis réels à connaître avant de l\'installer. L\'application a connu un changement d\'architecture majeur en 2026 — une réécriture de Flutter multiplateforme vers React Native réservé à Android — qui a fait disparaître le support iOS, Windows, macOS et Linux de l\'ancienne version. Elle est maintenue par une organisation open source sur GitHub plutôt que par une entreprise, avec un développement actif au moment du test mais sans garantie de rythme particulier à l\'avenir. Choisissez Maid si vous êtes un utilisateur Android qui veut un client de chat gratuit, ouvert, à double mode (local et distant), et à l\'aise avec un projet maintenu par la communauté. Choisissez une autre application — PocketPal AI ou Private LLM pour les appareils Apple, ou Ollama, LM Studio ou Jan AI pour le bureau — si vous avez besoin d\'une plateforme que la version actuelle de Maid ne couvre pas.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Maid sur GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) — code source, licence (MIT), README et historique des versions référencés dans ce test.',
          '[Page des versions de Maid](https://github.com/Mobile-Artificial-Intelligence/maid/releases) — historique des versions, journaux des modifications et paquets de compilation de la v2.0.4 à la v3.0.0.',
          '[Historique des commits du dépôt Maid](https://github.com/Mobile-Artificial-Intelligence/maid/commits/main) — activité récente des commits et pull requests utilisée pour évaluer l\'état de maintenance.',
          '[Maid sur Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) — disponibilité sur Android.',
          '[danemadsen/maid sur GitHub](https://github.com/danemadsen/maid) — le dépôt d\'origine du fondateur, aujourd\'hui un fork du dépôt actuel de l\'organisation.',
          '[Maise sur GitHub](https://github.com/Mobile-Artificial-Intelligence/maise) — le moteur de synthèse vocale Android open source compagnon de Maid.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Les meilleures applications de LLM local pour Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — le panorama des applications Android, dont Maid, MLC Chat et PocketPal AI.',
          '[Test de PocketPal AI](/power-local-llm/pocketpal-ai-review) — une alternative gratuite et open source qui couvre aussi iPhone et iPad.',
          '[Test de Private LLM](/power-local-llm/private-llm-review) — une alternative payante, à code fermé, exclusive à Apple, avec un catalogue de modèles intégré plus large.',
          '[Test d\'Enclave AI](/power-local-llm/enclave-ai-review) — une alternative réservée à Apple avec automatisation Siri et Raccourcis.',
          '[Les meilleurs modèles LLM mobiles en 2026 : Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — l\'article complémentaire sur les modèles pour choisir le fichier GGUF adapté à votre téléphone.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Maid : test (2026) — application de chat LLM local open source pour Android',
      description:
        'Test de Maid : une application Android gratuite et open source (MIT) qui exécute des modèles GGUF en local via llama.cpp ou se connecte à des fournisseurs d\'IA. Plateformes, historique et public visé.',
      url: 'https://promptquorum.com/fr/power-local-llm/maid-review',
      inLanguage: 'fr',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Utilisateurs Android évaluant des applications de chat IA locales et multi-fournisseurs, gratuites et open source' },
      about: [
        { '@type': 'Thing', name: 'Maid' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'LLM local' },
        { '@type': 'Thing', name: 'Logiciel open source' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/maid-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Maid : test (2026)', item: 'https://promptquorum.com/fr/power-local-llm/maid-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/maid-review-hero-ja.webp',
    title: 'Maidレビュー(2026):Android向けオープンソースのローカルLLMチャットアプリ',
    seoTitle: 'Maidレビュー2026:オープンソースAndroid LLMアプリ',
    intro:
      'Maidは、[llama.cpp](https://github.com/ggml-org/llama.cpp)経由でGGUF形式の言語モデルをローカルで実行するか、自分のAPIキーを使ってAnthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouterなどのリモートプロバイダーに接続できる、無料でオープンソース(MITライセンス)のチャットアプリです。プロジェクトは2023年、オーストラリア人開発者Dane MadsenによるクロスプラットフォームのFlutterアプリとして始まりましたが、バージョン3.0.0(2026年3月)でReact Nativeに全面的に書き直され、現在はAndroid専用アプリとして配布されています——旧Flutter版にあったデスクトップ版・iOS版は現行バージョンには存在しません。このレビューでは、Maidが現在何をできるのか、書き直しで何が変わったのか、実際のプラットフォーム・ハードウェア要件、料金(無料、有料プランなし)、そして商用の代替アプリと比べて誰に向いているか——向いていないか——を扱います。',
    metaDescription:
      'Maidレビュー:llama.cpp経由でGGUFモデルをローカル実行するか、AIプロバイダーに接続できる、無料でオープンソース(MIT)のAndroidアプリ。対応プラットフォーム、沿革、向いている人を解説。',
    twitterDescription:
      'Maidレビュー2026:llama.cpp経由のローカルGGUFチャット向けの無料オープンソースAndroidアプリ。2026年の書き直しでAndroid専用に。何が変わり、誰に向いているか。',
    audience:
      '無料でオープンソースのローカルまたはマルチプロバイダーAIチャットアプリを求め、コミュニティ運営のAndroid専用プロジェクトでも構わないAndroidユーザー。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Maidレビュー',
    targetKeywords: [
      'maid ai レビュー',
      'maid app android',
      'maid llama.cpp app',
      'maid オープンソース llm アプリ',
      'maid vs pocketpal ai',
      '無料 ローカル llm アプリ android',
      'gguf チャット アプリ android',
      'mobile artificial intelligence maid',
    ],
    current_models_mentioned: ['llama.cpp経由のGGUFモデル'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Maidは、llama.cpp経由でGGUF言語モデルをローカルで実行し、さらに自分のAPIキーを使ってAnthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouterといったリモートプロバイダーにも接続できる、無料でオープンソース(MITライセンス)のAndroidアプリです。**開発は[Mobile-Artificial-Intelligence GitHub組織](https://github.com/Mobile-Artificial-Intelligence/maid)が担っており、2023年10月にプロジェクトを開始したDane Madsenが創設者です。アプリはもともとFlutterで構築され、バージョン2.0.7(2025年4月)までAndroid、iOS(サイドロード)、Windows、macOS、Linux向けに配布されていましたが、バージョン3.0.0(2026年3月)でReact Nativeに書き直され、配布はAndroidのみに絞られました——現時点でiOS版、Windows版、macOS版、Linux版はありません。プロジェクトは現在も活発に開発が続いており、2026年9月時点までコミットとマージ済みプルリクエストが確認できます。',
    quickAnswerTop: {
      ja: {
        question: 'Androidでローカルチャット用にMaidを導入する価値はあるか',
        answer:
          'Androidを使っていて、llama.cpp経由でGGUFモデルを端末上で完全に実行するか、OpenAI・Anthropic・Ollamaといったプロバイダーの自分のアカウントに接続できる、無料でオープンソースのアプリを求めているなら、Maidは価値があります。iPhone、Mac、Windows、Linuxを使っている場合は向きません——現行バージョン3.0.0は、FlutterからReact Nativeへの書き直しでこれらのプラットフォームを廃止し、現在はAndroid版のみを配布しています。',
        bullets: [
          'MITライセンスの下で無料かつオープンソース——サブスクリプションなし、ソースコードは[GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)で公開。',
          'バージョン3.0.0(2026年3月)以降はAndroid専用。[Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid)、または[GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases)から直接APKを入手可能。',
          'llama.cpp経由でGGUFモデルをローカル実行するか、自分のAPIキーでAnthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouterに接続。',
          '2023年10月に開発者Dane MadsenがクロスプラットフォームのFlutterアプリとして開始。v3.0.0でReact Nativeに書き直され、その過程でiOS・Windows・macOS・Linux版が廃止された。',
          'レビュー時点でも活発に開発が継続中——2026年9月上旬までのコミットとマージ済みプルリクエストがあり、GitHub上でオープンなIssueが10件、フォーク数283。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Maidとは何か', anchor: 'what-is-maid' },
      { label: 'Maidを作ったのは誰で、書き直しで何が変わったか', anchor: 'history-and-developer' },
      { label: 'Maidの始め方', anchor: 'getting-started' },
      { label: 'Maidが対応するモデル', anchor: 'models-supported' },
      { label: 'MaidはiPhone・Windows・Macで使えるか', anchor: 'platform-availability' },
      { label: 'Maidの料金', anchor: 'pricing' },
      { label: 'Maidの機能', anchor: 'key-features' },
      { label: '必要なハードウェア', anchor: 'hardware-requirements' },
      { label: 'Maidが向いている人', anchor: 'who-should-use' },
      { label: 'Maidが向いていない人', anchor: 'who-should-not-use' },
      { label: 'Maidと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
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
            text: 'Maidは、llama.cpp経由でGGUF言語モデルをローカルで実行するか、自分のAPIキーでリモートAIプロバイダーに接続できる、無料でMITライセンスのオープンソースAndroidアプリで、開発者Dane Madsenが創設したMobile-Artificial-Intelligence GitHub組織が運営している。',
          },
          {
            type: 'plain-terms',
            text: '自分の端末上で動くAIモデル、またはOpenAIやAnthropicなどですでに持っているアカウント経由のAIモデルとチャットするために、Androidスマートフォンにインストールするアプリ——コードはGitHubで公開されており、アプリ自体は無料。以前はiPhone、Windows、Mac、Linuxでも使えたが、現行バージョンではこれらのプラットフォームが廃止された。',
          },
        ],
        items: [
          '無料でオープンソース(MITライセンス)。ソースコードとIssueトラッカーは[GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)で公開。',
          '2023年10月にDane MadsenがクロスプラットフォームのFlutterアプリとして創設。現在はMobile-Artificial-Intelligence組織が運営。',
          'llama.cpp経由でGGUFモデルを端末上で完全実行するか、自分のAPIキーでAnthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouterに接続。',
          'バージョン3.0.0(2026年3月)でReact Nativeに書き直され、Android専用となった——旧Flutter版はiOS(サイドロード)、Windows、macOS、Linux向けにも配布されていたが、これらのビルドは現行バージョンには含まれない。',
          '[Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid)、および[GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases)からのAPK/AAB直接ダウンロードで入手可能。',
          'レビュー時点で、アプリ本体やドキュメントに有料プランは見つからなかった——基本アプリとローカルチャット機能は無料。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、公開されている[GitHubリポジトリ](https://github.com/Mobile-Artificial-Intelligence/maid)、そのREADME、リリース履歴、Google Playの掲載情報を2026年9月時点で確認した内容に基づいています。PromptQuorumは本レビューのためにMaidの独自の実機ベンチマークは実施していません——以下の性能に関する記述は、ローカルLLM全般のハードウェア目安であり、本アプリ固有の測定値ではありません。',
          },
        ],
      },
      overview: {
        id: 'what-is-maid',
        title: 'Maidとは何か',
        content: [
          '**MaidはAndroidアプリで、[llama.cpp](https://github.com/ggml-org/llama.cpp)経由でGGUF形式のオープンウェイト言語モデルを端末にダウンロードしてローカル実行するか、自分で用意したAPIキーを使ってリモートプロバイダーにチャットリクエストを送信します。**アプリは[MITライセンス](https://github.com/Mobile-Artificial-Intelligence/maid/blob/main/LICENSE)であり、ソースコード全体が公開され、自由に閲覧・フォーク・改変できます。',
          'この2つのモードを併せ持つ点がアプリの特徴です——純粋なローカル推論クライアントではありません。同じインターフェースで、GGUFファイルを完全オフラインで実行することも、自分のアカウント経由でOpenAIやAnthropicなどのクラウドプロバイダーに会話を転送することも、ネットワーク上の自前ホストの[Ollama](https://ollama.com)サーバーに接続することもできます。READMEによれば、プロジェクトは自らを「Huggingface、Meta(Facebook)、MistralAi、OpenAI、Google、Microsoft、またはこのアプリケーションと互換性のあるモデルを提供するその他の企業とは提携していない」と説明しています。',
        ],
        note: 'GGUFは、量子化されたオープンウェイト言語モデルをパッケージ化するためのファイル形式で、応答のたびにクラウドAPIを呼び出す代わりに、llama.cppのようなランタイムを介して一般的なハードウェア上で効率的に実行できるようにするものです。',
      },
      history: {
        id: 'history-and-developer',
        title: 'Maidを作ったのは誰で、書き直しで何が変わったか',
        content: [
          '**Maidは、2023年10月にGGUF・llama.cppモデルを実行するクロスプラットフォームのFlutterアプリとしてプロジェクトを開始したDane Madsenによって作られました。**プロジェクトは現在、Madsen個人のアカウントではなく[Mobile-Artificial-Intelligence GitHub組織](https://github.com/Mobile-Artificial-Intelligence/maid)の下でホストされています。彼の元のリポジトリ[danemadsen/maid](https://github.com/danemadsen/maid)は、現在GitHub上で組織リポジトリのフォークとして扱われており、説明欄には現在のコードと一致しない「クロスプラットフォームのFlutterアプリ」という記述が残っています。',
          'バージョン履歴は明確な分岐を示しています。**v2.0.7(2025年4月)**までのリリースはFlutterで構築され、Android(APK/AAB)、iOS(サイドロード用の`.ipa`、App Store掲載なし)、Linux(`.zip`/`.AppImage`)、macOS(Intel・Apple Silicon向け`.dmg`)、Windows(`.zip`)、さらにはWebビルドまで、インストール可能なビルドを提供していました。**バージョン3.0.0(2026年3月10日公開)**はReact Nativeによる全面的な書き直しであり、そのリリースにはAndroid向けパッケージ(APKとAABの各バリアント)のみが含まれ、iOS・Windows・macOS・Linux向けのファイルはありません。このリリースの変更履歴には、ビジョンモデル対応、システムのテキスト読み上げ対応、システムの音声認識対応、推論モデル対応、Markdownレンダリング、そしてリリースノートがGoogle Playの要件と説明する高評価/低評価による報告機能が挙げられています。',
          '開発はこの書き直し後も続いています。リポジトリには2026年9月上旬までのマージ済みプルリクエストとコミットが確認でき、その中にはチャットシステムの修正やリモートプロバイダーとしての[OrcaRouter](https://www.orcarouter.ai)追加が含まれます。レビュー時点でリポジトリはおよそ2,700スター、283フォーク、オープンなIssue10件を抱えており、活発に利用・保守されているプロジェクトであることを示していますが、資金を持つ企業のサポートチームではなく、単一組織によるオープンソースプロジェクトである点には注意が必要です。',
        ],
        items: [
          '創設者:Dane Madsen(GitHub:[danemadsen](https://github.com/danemadsen))。2023年10月にプロジェクトを開始。',
          '現在のメンテナー:GitHub組織[Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence)。Madsenの個人リポジトリは現在、組織リポジトリのフォークとなっている。',
          'ライセンス:MIT——寛容なオープンソースライセンスで、自由に利用・フォーク・改変できる。',
          '主要なアーキテクチャ変更:Flutter(クロスプラットフォーム、v2.0.7まで、2025年4月)→React Native、Android専用(v3.0.0以降、2026年3月)。',
          'レビュー時点でGitHubスターはおよそ2,700、フォーク283、オープンIssue10件。コミットとマージ済みプルリクエストは2026年9月まで確認できる。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Maidの始め方',
        content: [
          '**現行のAndroid版をインストールした後、いくつかの手順でMaidでのチャットを利用できます。**端末上のローカルチャットには必須のアカウントはなく、任意のログインはアプリのクラウドバックアップ機能のためだけに存在します。',
        ],
        numberedItems: [
          {
            title: 'Androidにアプリをインストールする',
            whyItMatters: '[Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid)からMaidをダウンロードするか、サイドロードしたい場合は[GitHub Releasesページ](https://github.com/Mobile-Artificial-Intelligence/maid/releases)から直接APKをインストールします。現時点でiOS、Windows、macOS、Linux向けのビルドはありません。',
          },
          {
            title: 'ローカルモードかリモートモードかを選ぶ',
            whyItMatters: 'GGUFモデルをダウンロードしてllama.cpp経由で端末上で完全実行するか、既に持っているAPIキーやサーバーアドレスを使ってリモートプロバイダー(Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouter)に接続するかを決めます。',
          },
          {
            title: 'モデルをダウンロードまたはインポートする(ローカルモード)',
            whyItMatters: '端末上でのチャットには、スマートフォンのRAM容量に見合ったサイズのGGUFモデルをダウンロードするか(下記のハードウェアセクション参照)、ローカルストレージや[Hugging Face](https://huggingface.co)から独自のGGUFファイルを読み込みます。',
          },
          {
            title: 'チャットを開始する',
            whyItMatters: 'ローカルモデルの読み込み、またはリモートプロバイダーの設定が完了したら、会話を開始します。チャットはアプリ内で作成・名前変更・削除ができ、JSONファイルとしてエクスポート・インポートも可能です。',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Maidが対応するモデル',
        itemHeadings: true,
        columns: ['アクセス方式', '接続先', '備考'],
        rows: [
          {
            'アクセス方式': 'ローカル(端末上)',
            '接続先': '[llama.cpp](https://github.com/ggml-org/llama.cpp)経由で読み込む任意のGGUF形式モデル',
            '備考': '固定の厳選モデルリストはない——ダウンロードまたはインポートしたGGUFファイルであれば、Hugging Face由来のものを含め何でも実行する。',
          },
          {
            'アクセス方式': 'リモートプロバイダー',
            '接続先': 'Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、[OrcaRouter](https://www.orcarouter.ai)',
            '備考': '自分自身のアカウントとAPIキー(Ollamaの場合は自前のサーバーアドレス)が必要。Maid自体がこれらプロバイダーへのアクセスをバンドル・再販するものではない。',
          },
        ],
        note: 'MaidはどんなGGUFファイルでも読み込めるため、実用上のモデル対応はアプリが厳選したリストではなくllama.cppとの互換性によって決まります——これは、特定のクイックダウンロードカタログとカスタムファイル対応を併せ持つPocketPal AIやPrivate LLMのようなアプリとは異なる点です。',
      },
      platform: {
        id: 'platform-availability',
        title: 'MaidはiPhone・Windows・Macで使えるか',
        itemHeadings: true,
        columns: ['プラットフォーム', '現在の対応状況', '備考'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '現在の対応状況': '利用可能',
            '備考': '[Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid)、および[GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases)からのAPK/AAB直接配布。現行バージョン3.0.0が対象とする唯一のプラットフォーム。',
          },
          {
            'プラットフォーム': 'iPhone / iPad',
            '現在の対応状況': '現時点で利用不可',
            '備考': '旧Flutter版(v2.0.7まで、2025年4月)はサイドロード用の`.ipa`ファイルを提供していたが、App Storeへの掲載は一度もなく、現行のv3.0.0リリースにもiOS用ファイルは含まれていない。',
          },
          {
            'プラットフォーム': 'Windows / macOS / Linux',
            '現在の対応状況': '現時点で利用不可',
            '備考': 'v2.0.7までのFlutterベースのリリースにはデスクトップビルド(`.zip`、`.AppImage`、`.dmg`)が存在したが、React Nativeへの書き直し(v3.0.0)ではデスクトップ向けパッケージは提供されない。ローカルGGUFチャットクライアントを求めるデスクトップユーザーは、代わりにOllama、LM Studio、Jan AIを検討すべきである。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Maidの料金',
        content: [
          '**Maidは、端末上のローカルチャットとリモートプロバイダーとのチャットの両方について、ダウンロードも利用も無料であり、ソースコードはMITライセンスの下で公開されています。**レビュー時点で、アプリのリポジトリ、リリースノート、Google Playの掲載情報に、アプリ内課金・サブスクリプション・有料プランは見当たりませんでした。',
          'Maidユーザーが実際に負担するコストは間接的なものです——ダウンロードしたGGUFモデルファイル用の端末ストレージ(通常1ファイルあたり数ギガバイト)と、リモートプロバイダーモードを使う場合にAnthropic、OpenAI、Mistral、DeepSeek、Novita、Ollama、OrcaRouterがそれぞれ自分のアカウントでのAPI利用に対して個別に課金する料金です——Maid自体がこれらのプロバイダー費用に上乗せ料金やサブスクリプションを課すことはありません。',
        ],
        items: [
          '**基本アプリ:** 無料、サブスクリプションなし、MITライセンスのオープンソース。',
          '**ローカルチャット(端末上のGGUFモデル):** 無料——推論は自分の端末上で動くため、メッセージやトークンごとの課金はない。',
          '**リモートプロバイダーとのチャット:** Maid経由の利用自体は無料だが、自分のアカウントとAPIキーの下でプロバイダー(OpenAI、Anthropicなど)が課す料金は支払う。',
          '**任意のクラウドバックアップ:** アプリは、Supabase経由で設定とチャット履歴をバックアップするための登録・ログインに対応。本レビューではこの機能に紐づく別料金は見つからなかった。',
          '**ストレージコスト:** 金銭的ではないが実質的なコスト——ダウンロードしたGGUFモデルはそれぞれ通常数ギガバイトの端末ストレージを消費する。',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Maidの機能',
        content: [
          '**ローカル/リモートのチャット切り替えという基本機能に加え、MaidのREADMEとリリースノートは、バージョン履歴を通じて追加された機能群を記述しています。**主なものは次の通りです。',
        ],
        items: [
          '**1つのアプリでローカル推論とリモート推論の両方に対応。** llama.cpp経由の完全オフラインGGUFチャットと、自分の資格情報を使ったクラウドプロバイダー(Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouter)を切り替えられる。',
          '**会話管理。** チャットの作成、名前変更、削除、JSONファイルとしてのエクスポート・インポートが可能。',
          '**カスタムシステムプロンプト。** グローバルなシステムプロンプトを設定し、アシスタントの振る舞いやトーンを調整できる。',
          '**調整可能な生成パラメーター。** temperature、top-p、top-k、コンテキスト長などをセッションごとに調整できる。',
          '**姉妹アプリによる音声出力。** Maidは、同じGitHub組織による別の独立したオープンソースAndroid音声合成エンジン[Maise](https://github.com/Mobile-Artificial-Intelligence/maise)と組み合わせて、応答を読み上げることができる。',
          '**任意のクラウドバックアップ。** ユーザーは登録・ログインすることで、Supabase経由で設定とチャット履歴を同期できる。これは任意機能であり、アプリの利用に必須ではない。',
          '**Material Youデザイン。** Androidのシステム設定に追従するライトテーマ・ダークテーマ。',
          '**テレメトリーや広告なし,** プロジェクト自身のREADMEによる。',
        ],
        note: 'プロジェクトは頻繁にリリースを行っているため、機能の有無はアプリのバージョンによって異なる場合があります。特にFlutterベースのv2.x系とReact Native書き直し後のv3.0.0の間で多くが変わったことを踏まえ、インストール済みバージョンで何が使えるかは、アプリ内の変更履歴または[GitHub Releasesページ](https://github.com/Mobile-Artificial-Intelligence/maid/releases)で確認してください。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Maidに必要なハードウェア',
        content: [
          '**ローカルチャットの実際のハードウェア下限を決めるのは、アプリ自体ではなく選択するGGUFモデルです——スマートフォン上のGGUFモデルに関する一般的な目安として、量子化された2~4Bパラメータのモデルにはおよそ3~4GBの空きRAM、7~8Bパラメータのモデルには6~8GB以上が必要です。**これはローカルLLM全般の標準的なサイジングの目安であり、Maid固有のベンチマークではありません。PromptQuorumは、Maidのモデルごとの正確なメモリ使用量を独自に測定してはいません。',
          'Maidはllama.cpp経由でローカル推論を実行するため、Android向けllama.cppの一般的な性能に関する目安が当てはまります——RAMが多く新しいチップセットを搭載した最近の端末は、古くストレージやメモリに制約のあるスマートフォンよりも、大きなモデルを快適に読み込み・実行できます。ローカル推論の代わりにリモートプロバイダーモードを使う場合、端末側のハードウェア要件はごくわずかです——モデルはプロバイダーのサーバー上で動作し、スマートフォンには有効なインターネット接続さえあれば十分です。',
        ],
        items: [
          '小型モデル(2~4Bパラメータ、量子化):空きRAM4GB以上を持つ最近のAndroidスマートフォンの大半で利用可能。',
          '中型モデル(7~8Bパラメータ、量子化):許容できる応答性のためには8GB以上の端末RAMを推奨。',
          'ストレージ:ダウンロードするGGUFモデルファイル1つあたり数ギガバイトの空き容量を見込む。',
          'リモートプロバイダーモード:推論はプロバイダー側のインフラで行われるため、有効なインターネット接続以外に目立ったローカルハードウェア要件はない。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Maidが向いている人',
        items: [
          '**1つの無料アプリでローカルチャットとクラウドチャットの両方を使いたいAndroidユーザー。**完全オフラインのGGUF推論と、OpenAIやAnthropicといったプロバイダーの自分のアカウントとの間を、1つのオープンソースクライアントで切り替えられる点が、Maidの最も明確な差別化ポイントである。',
          '**厳選されたモデルリストではなく、制約のないGGUFファイルを実行したいユーザー。**アプリは固定カタログを提供するのではなくllama.cpp経由で任意のGGUFモデルを読み込むため、すでに特定のモデルを念頭に置いているユーザーに向いている。',
          '**オープンソースプロジェクトに慣れている開発者や技術志向のユーザー。**公開GitHubリポジトリ、Issueトラッカー、活発なリリース履歴は、専任のカスタマーサポートを期待するのではなく、リリースノートを読んだりIssueを立てたりする意思のあるユーザーに向いている。',
          '**自分でコードを検証・改変したいユーザー。**MITライセンスはフォークと改変を許可しており、プライベートな会話やプロバイダーのAPIキーを預ける前にアプリが実際に何をしているかを監査したいユーザーにとって重要である。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Maidが向いていない人',
        items: [
          '**iPhone、iPad、Windows、macOS、Linuxのユーザー。**現行バージョン3.0.0はAndroid専用であり、App Storeへの掲載も対応するデスクトップビルドもない。これらのプラットフォームのユーザーは、代わりにPrivate LLMやPocketPal AI(Apple)、あるいはOllama、LM Studio、Jan AI(デスクトップ)を検討すべきである。',
          '**完全にガイドされた、設定不要の体験を求めるユーザー。**ローカルモードとリモートモードの選択、自分の端末に合ったモデルサイズの選定、APIキーの管理はワークフローの一部である。こうした判断をアプリに任せたい人は、LociやEnclave AIのようなより厳選されたアプリの方が向いているかもしれない。',
          '**最も要求の厳しいモデル(70B以上のパラメータ)をローカルで実行したいユーザー。**Androidのフラッグシップ端末であっても、そのスケールのモデルを端末上で実用的に実行することはできない——どのモバイルアプリを使うかに関わらず、そうした処理にはデスクトップ、ワークステーション、またはクラウドAPI/リモートプロバイダーが必要である。',
          '**専任の商用サポートを期待するユーザー。**Maidは資金を持つ企業のサポートチームではなく、オープンソースのGitHub組織によって保守されている。保証された応答時間やエンタープライズ向けサポート契約が必要なユーザーは、商用サポート付きの代替アプリを検討すべきである。',
          '**旧来のクロスプラットフォームビルドが必要なユーザー。**Flutterベースのv2.x系リリースにあったMaidの以前のiOS・Windows・macOS・Linux対応に依存している人は、これらのプラットフォームが現行の活発に保守されているバージョンには含まれていないことを知っておくべきである。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Maidと代替アプリの比較',
        itemHeadings: true,
        columns: ['アプリ', 'ライセンス/料金', '対応プラットフォーム', 'モデルの柔軟性'],
        rows: [
          {
            'アプリ': 'Maid',
            'ライセンス/料金': '無料、オープンソース(MIT)',
            '対応プラットフォーム': 'Android専用(v3.0.0以降)',
            'モデルの柔軟性': 'llama.cpp経由の任意のGGUFファイル、または自分のAPIキーでのリモートプロバイダー(Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouter)',
          },
          {
            'アプリ': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'ライセンス/料金': '無料、オープンソース(MIT)',
            '対応プラットフォーム': 'iPhone/iPad、Android',
            'モデルの柔軟性': 'クイックダウンロードリストに加え、Hugging Face由来の任意のGGUFファイル',
          },
          {
            'アプリ': '[Private LLM](/power-local-llm/private-llm-review)',
            'ライセンス/料金': '有料、買い切り型;クローズドソース',
            '対応プラットフォーム': 'iPhone/iPad/Mac(Apple専用)',
            'モデルの柔軟性': '140以上のモデル、OmniQuantとGPTQの量子化形式に対応',
          },
          {
            'アプリ': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'ライセンス/料金': '無料+有料プラン;クローズドソース',
            '対応プラットフォーム': 'iPhone/iPad/Mac(Apple専用)',
            'モデルの柔軟性': '厳選された端末上モデルリスト;SiriとShortcuts連携',
          },
          {
            'アプリ': 'ChatterUI',
            'ライセンス/料金': '無料、オープンソース(AGPL-3.0)',
            '対応プラットフォーム': 'Android(ソースからビルド)',
            'モデルの柔軟性': 'llama.cpp経由で端末上のGGUFファイルを実行、またはリモートAPIに接続;Character Card v2対応',
          },
          {
            'アプリ': 'RikkaHub',
            'ライセンス/料金': '無料、オープンソース',
            '対応プラットフォーム': 'Android',
            'モデルの柔軟性': 'マルチプロバイダークライアント(OpenAI/Google/Anthropic互換API);Material Youデザイン',
          },
          {
            'アプリ': 'AnythingLLM Mobile',
            'ライセンス/料金': '無料、オープンソース',
            '対応プラットフォーム': 'iPhone/iPad、Android',
            'モデルの柔軟性': '端末上推論、自前ホストのAnythingLLMインスタンスへの接続、または任意のOpenAI互換プロバイダー',
          },
        ],
        note: 'かつて人気だったオープンソースのiOS向けGGUFチャットアプリLLM Farmは、レビュー時点でApp Storeから削除され、自身のGitHubリポジトリでも「一時的に利用不可」と表示されていたため、上記のアクティブな推奨リストから除外しています。もう1つの端末上アシスタントアプリLaylaは、無料プラン「Layla Lite」がGoogle Playから削除されたと報告されています。インストール可能だと想定する前に、[layla-network.ai](https://www.layla-network.ai)で最新の対応状況を直接確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Maidは無料ですか',
            a: 'はい。Maidは、端末上のローカルチャットとリモートプロバイダーとのチャットの両方について、ダウンロードも利用も無料であり、アプリはMITライセンスの下でオープンソースです。レビュー時点で、アプリやそのドキュメントに有料プランやアプリ内課金は見つかりませんでした。リモートプロバイダーモードは引き続き、自分のそのプロバイダーとのアカウント経由で課金されます。',
          },
          {
            q: 'Maidを開発したのは誰ですか',
            a: 'Maidは、2023年10月にクロスプラットフォームのFlutterアプリとしてプロジェクトを開始したDane Madsenによって作られました。現在は個人プロジェクトとしてではなく、GitHub組織Mobile-Artificial-Intelligenceの下で保守されています。',
          },
          {
            q: 'Maidはオープンソースですか',
            a: 'はい、ソースコード全体が[GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)でMITライセンスの下に公開されています。MITライセンスは自由な利用・改変・再配布を許可する寛容なライセンスです。',
          },
          {
            q: 'MaidはiPhone、Windows、Macで動作しますか',
            a: 'いいえ。バージョン3.0.0(2026年3月)以降、MaidはAndroid専用です。v2.0.7(2025年4月)までの旧Flutterベースのリリースは、iOS(サイドロードのみ、App Store掲載なし)、Windows、macOS、Linux向けのビルドを提供していましたが、これらのプラットフォームは現行の活発に保守されているバージョンではサポートされていません。',
          },
          {
            q: 'Maidが実行できるモデルは何ですか',
            a: 'ローカルチャットでは、Maidはllama.cpp経由でGGUF形式の任意のモデルを実行できます——固定の厳選リストはありません。また、Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouterを含むリモートプロバイダーに、自分で用意したAPIキーやサーバーアドレスを使って接続することもできます。',
          },
          {
            q: 'Maidでローカルモデルを使うにはどれくらいのRAMが必要ですか',
            a: 'これはアプリの固定要件ではなく、選ぶGGUFモデルによって決まります。一般的な目安として、量子化された2~4Bパラメータのモデルは通常3~4GBの空きRAMを必要とし、7~8Bパラメータのモデルは通常8GB以上を必要とします。RAMの多い端末ほど、より大きく高性能なモデルをローカルで実行できます。',
          },
          {
            q: 'Maidにはインターネット接続が必要ですか',
            a: 'GGUFモデルをダウンロードした後のローカルチャットにはインターネット接続は不要です——推論はllama.cpp経由で端末上で完全に実行されます。インターネット接続は、初回のモデルダウンロード時、リモートプロバイダーモードの利用時、および任意のSupabaseベースのクラウドバックアップ機能を使う際に必要です。',
          },
          {
            q: 'Maidは今も活発に保守されていますか',
            a: 'レビュー時点では、はいと言えます。GitHubリポジトリには2026年9月上旬までのコミットとマージ済みプルリクエストがあり、チャットシステムの修正やリモートプロバイダーとしてのOrcaRouter追加が含まれます。資金を持つ企業ではなくオープンソースのGitHub組織によって保守されているため、時間的制約のある用途で頼る前に、リポジトリの最近の活動状況を自分自身で確認してください。',
          },
          {
            q: 'MaidのiOS、Windows、Mac対応はどうなったのですか',
            a: 'Maidはもともとクロスプラットフォームのflutterアプリで、v2.0.7(2025年4月)までのリリースは、Androidに加えてiOS(サイドロード)、Windows、macOS、Linux向けのインストール可能なビルドを提供していました。バージョン3.0.0(2026年3月)でReact Nativeに書き直され、プロジェクトはAndroid専用に絞られました——デスクトップ版とiOS版は現行のリリース系列には含まれていません。',
          },
          {
            q: 'MaidはPocketPal AIやPrivate LLMと比べてどうですか',
            a: 'Maidは無料でオープンソース、Android専用であり、1つのアプリで完全ローカルのGGUF推論とリモートのクラウドプロバイダーの両方に対応する点が珍しい特徴です。PocketPal AIも無料でオープンソースですが、iPhone/iPadとAndroidをローカル専用のGGUF推論でカバーします。Private LLMは有料でクローズドソース、Apple専用で、より大きな内蔵モデルカタログを持つアプリです。Androidを使っていてローカルとクラウドの両方の選択肢を1つのクライアントで求めるならMaidを、同様に無料でオープンソースのローカルモデルとともにiOS対応が必要ならPocketPal AIを、有料でより洗練されたApple専用の体験を求めるならPrivate LLMを選んでください。詳細は上記の比較表を参照してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Maidは、真に無料で真にオープンソースなAndroidアプリであり、このカテゴリーとしては珍しい組み合わせを備えています——llama.cpp経由でローカルGGUFモデルを実行しつつ、同じクライアント内でOpenAIやAnthropicといったリモートプロバイダーにも接続できる点です。この柔軟性には、インストール前に知っておくべき実際のトレードオフが伴います。アプリは2026年に大きなアーキテクチャ変更——クロスプラットフォームのFlutterからAndroid専用のReact Nativeへの書き直し——を経ており、旧バージョンにあったiOS、Windows、macOS、Linux対応は廃止されました。企業ではなくオープンソースのGitHub組織によって保守されており、開発はレビュー時点では活発ですが、特定のペースで今後も続くとは保証されていません。無料でオープンな、ローカルとリモートの両モードを持つチャットクライアントを求め、コミュニティ運営のプロジェクトでも構わないAndroidユーザーであれば、Maidを選んでください。Maidの現行バージョンがカバーしていないプラットフォームが必要な場合は、Apple端末向けにはPocketPal AIやPrivate LLM、デスクトップ向けにはOllama、LM Studio、Jan AIなど、別のアプリを選んでください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[GitHub上のMaid](https://github.com/Mobile-Artificial-Intelligence/maid) — 本レビューで参照したソースコード、ライセンス(MIT)、README、リリース履歴。',
          '[Maidのリリースページ](https://github.com/Mobile-Artificial-Intelligence/maid/releases) — v2.0.4からv3.0.0までのバージョン履歴、変更履歴、ビルド成果物。',
          '[Maidリポジトリのコミット履歴](https://github.com/Mobile-Artificial-Intelligence/maid/commits/main) — 保守状況の評価に用いた最近のコミット・プルリクエスト活動。',
          '[Google PlayのMaid](https://play.google.com/store/apps/details?id=com.danemadsen.maid) — Androidでの対応状況。',
          '[GitHub上のdanemadsen/maid](https://github.com/danemadsen/maid) — 創設者の元のリポジトリで、現在は現組織リポジトリのフォークとなっている。',
          '[GitHub上のMaise](https://github.com/Mobile-Artificial-Intelligence/maise) — Maidの姉妹アプリであるオープンソースのAndroid音声合成エンジン。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[2026年版 Android向けベストローカルLLMアプリ](/power-local-llm/best-local-llm-apps-android-2026) — Maid、MLC Chat、PocketPal AIなどを含むAndroidアプリまとめ。',
          '[PocketPal AIレビュー](/power-local-llm/pocketpal-ai-review) — iPhoneとiPadもカバーする、無料でオープンソースの代替アプリ。',
          '[Private LLMレビュー](/power-local-llm/private-llm-review) — より大きな内蔵モデルカタログを持つ、有料でクローズドソースのApple専用代替アプリ。',
          '[Enclave AIレビュー](/power-local-llm/enclave-ai-review) — SiriとShortcutsによる自動化を備えたApple専用の代替アプリ。',
          '[2026年ベストモバイルLLMモデル:Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — スマートフォンに合ったGGUFモデルを選ぶためのモデル層の関連記事。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Maidレビュー(2026):Android向けオープンソースのローカルLLMチャットアプリ',
      description:
        'Maidレビュー:llama.cpp経由でGGUFモデルをローカル実行するか、AIプロバイダーに接続できる、無料でオープンソース(MIT)のAndroidアプリ。対応プラットフォーム、沿革、向いている人を解説。',
      url: 'https://promptquorum.com/ja/power-local-llm/maid-review',
      inLanguage: 'ja',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '無料でオープンソースのローカル/マルチプロバイダーAIチャットアプリを検討しているAndroidユーザー' },
      about: [
        { '@type': 'Thing', name: 'Maid' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'ローカルLLM' },
        { '@type': 'Thing', name: 'オープンソースソフトウェア' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/maid-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Maidレビュー(2026)', item: 'https://promptquorum.com/ja/power-local-llm/maid-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/maid-review-hero-pt.webp',
    title: 'Análise do Maid (2026): App de Chat com LLM Local de Código Aberto para Android',
    seoTitle: 'Análise do Maid 2026: App Android LLM de Código Aberto',
    intro:
      'O Maid é um app de chat gratuito e de código aberto (licença MIT) que executa modelos de linguagem no formato GGUF localmente via [llama.cpp](https://github.com/ggml-org/llama.cpp), ou se conecta a provedores remotos como Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita e OrcaRouter usando sua própria chave de API. O projeto começou em 2023 como um app multiplataforma em Flutter criado pelo desenvolvedor australiano Dane Madsen, mas o código foi reescrito em React Native para a versão 3.0.0 (março de 2026), e hoje é distribuído apenas para Android — os builds de desktop e iOS que existiam nas versões antigas em Flutter não fazem mais parte da versão atual. Esta análise cobre o que o Maid faz hoje, o que mudou com a reescrita, seus requisitos reais de plataforma e hardware, seu preço (gratuito, sem plano pago) e para quem ele é — ou não é — indicado em comparação com uma alternativa comercial.',
    metaDescription:
      'Análise do Maid: um app Android gratuito e de código aberto (MIT) que executa modelos GGUF localmente via llama.cpp ou se conecta a provedores de IA. Plataformas, história e público-alvo.',
    twitterDescription:
      'Análise do Maid 2026: o app Android gratuito e de código aberto para chat GGUF local via llama.cpp, agora restrito ao Android após uma reescrita em 2026. O que mudou e para quem ele serve.',
    audience:
      'Usuários de Android que querem um app de chat com IA local ou multi-provedor, gratuito e de código aberto, e que estão confortáveis com um projeto mantido pela comunidade e restrito ao Android.',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Análise do Maid',
    targetKeywords: [
      'maid ai análise',
      'maid app android',
      'maid llama.cpp app',
      'maid app código aberto llm',
      'maid vs pocketpal ai',
      'app llm local grátis android',
      'app chat gguf android',
      'mobile artificial intelligence maid',
    ],
    current_models_mentioned: ['Modelos GGUF via llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**O Maid é um app Android gratuito e de código aberto (licença MIT) que executa modelos de linguagem GGUF localmente via llama.cpp, e que também pode se conectar a provedores remotos — Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita e OrcaRouter — usando sua própria chave de API.** Ele é desenvolvido pela [organização Mobile-Artificial-Intelligence no GitHub](https://github.com/Mobile-Artificial-Intelligence/maid), fundada por Dane Madsen, que iniciou o projeto em outubro de 2023. O app foi originalmente construído com Flutter e distribuído para Android, iOS (sideload), Windows, macOS e Linux até a versão 2.0.7 (abril de 2025); a versão 3.0.0 (março de 2026) reescreveu o app em React Native e restringiu a distribuição apenas ao Android — atualmente não há build para iOS, Windows, macOS ou Linux. O projeto continua sendo desenvolvido ativamente, com commits e pull requests mescladas tão recentes quanto setembro de 2026.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o Maid para chat de IA local no Android?',
        answer:
          'Sim, se você usa Android e quer um app gratuito e de código aberto que consiga executar modelos GGUF totalmente no dispositivo via llama.cpp, ou se conectar às suas próprias contas em provedores como OpenAI, Anthropic ou Ollama. Não é indicado se você usa iPhone, Mac, Windows ou Linux — a versão atual 3.0.0 eliminou essas plataformas ao reescrever o app de Flutter para React Native, e hoje distribui apenas um build para Android.',
        bullets: [
          'Gratuito e de código aberto sob a licença MIT — sem assinatura, código-fonte público no [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Restrito ao Android desde a versão 3.0.0 (março de 2026); disponível na [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) e como APK direta pelo [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'Executa modelos GGUF localmente via llama.cpp, ou se conecta a Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita e OrcaRouter com sua própria chave de API.',
          'Começou como um app multiplataforma em Flutter criado pelo desenvolvedor Dane Madsen em outubro de 2023; reescrito em React Native para a v3.0.0, eliminando os builds de iOS, Windows, macOS e Linux no processo.',
          'Ativamente mantido no momento desta análise — commits e pull requests mescladas tão recentes quanto o início de setembro de 2026, com 10 issues abertas e 283 forks no GitHub.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Maid?', anchor: 'what-is-maid' },
      { label: 'Quem criou o Maid e o que mudou na reescrita?', anchor: 'history-and-developer' },
      { label: 'Como começar a usar o Maid', anchor: 'getting-started' },
      { label: 'Quais modelos o Maid suporta?', anchor: 'models-supported' },
      { label: 'O Maid está disponível para iPhone, Windows ou Mac?', anchor: 'platform-availability' },
      { label: 'Quanto custa o Maid?', anchor: 'pricing' },
      { label: 'Quais recursos o Maid tem?', anchor: 'key-features' },
      { label: 'Qual hardware você precisa?', anchor: 'hardware-requirements' },
      { label: 'Quem deve usar o Maid', anchor: 'who-should-use' },
      { label: 'Quem não deve usar o Maid', anchor: 'who-should-not-use' },
      { label: 'Maid vs. alternativas', anchor: 'vs-alternatives' },
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
            text: 'O Maid é um app Android gratuito, de código aberto sob licença MIT, que executa modelos de linguagem GGUF localmente via llama.cpp ou se conecta a provedores de IA remotos com sua própria chave de API, mantido pela organização Mobile-Artificial-Intelligence no GitHub, fundada pelo desenvolvedor Dane Madsen.',
          },
          {
            type: 'plain-terms',
            text: 'É um app que você instala em um smartphone Android para conversar com um modelo de IA que roda no seu próprio aparelho ou por meio de uma conta que você já tem em um provedor como OpenAI ou Anthropic — o código é público no GitHub e o app em si é gratuito. Antes também funcionava em iPhone, Windows, Mac e Linux, mas a versão atual eliminou essas plataformas.',
          },
        ],
        items: [
          'Gratuito e de código aberto (licença MIT); código-fonte e rastreador de issues públicos no [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'Fundado por Dane Madsen em outubro de 2023 como um app multiplataforma em Flutter; hoje mantido pela organização Mobile-Artificial-Intelligence.',
          'Executa modelos GGUF totalmente no dispositivo via llama.cpp, ou se conecta a Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita e OrcaRouter com sua própria chave de API.',
          'A versão 3.0.0 (março de 2026) reescreveu o app em React Native e o restringiu ao Android — as versões antigas em Flutter também eram distribuídas para iOS (sideload), Windows, macOS e Linux, mas esses builds não fazem mais parte da versão atual.',
          'Disponível na [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) e como download direto de APK/AAB pelo [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'Nenhum plano pago foi encontrado no app ou em sua documentação no momento desta análise; o app base e sua função de chat local são gratuitos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no [repositório público no GitHub](https://github.com/Mobile-Artificial-Intelligence/maid), seu README, histórico de versões e a ficha na Google Play, verificados em setembro de 2026. A PromptQuorum não realizou benchmarks práticos independentes do Maid para esta análise — os números de desempenho abaixo são orientações gerais de hardware para LLMs locais, não medições específicas deste app.',
          },
        ],
      },
      overview: {
        id: 'what-is-maid',
        title: 'O que é o Maid?',
        content: [
          '**O Maid é um app Android que baixa e executa localmente no dispositivo modelos de linguagem de peso aberto no formato GGUF via [llama.cpp](https://github.com/ggml-org/llama.cpp), ou envia solicitações de chat a um provedor remoto usando uma chave de API fornecida por você mesmo.** O app tem [licença MIT](https://github.com/Mobile-Artificial-Intelligence/maid/blob/main/LICENSE), o que significa que o código-fonte completo é público, livre para inspecionar, bifurcar ou modificar.',
          'Esse modo duplo é a característica que define o app: ele não é exclusivamente um cliente de inferência local. A mesma interface pode executar um arquivo GGUF totalmente offline, ou encaminhar uma conversa para um provedor de nuvem como OpenAI ou Anthropic por meio da sua própria conta, ou para um servidor [Ollama](https://ollama.com) auto-hospedado na sua rede. De acordo com seu README, o projeto se descreve como "não afiliado à Huggingface, Meta (Facebook), MistralAi, OpenAI, Google, Microsoft ou qualquer outra empresa que forneça um modelo compatível com esta aplicação".',
        ],
        note: 'GGUF é um formato de arquivo para empacotar modelos de linguagem de peso aberto quantizados, para que rodem de forma eficiente em hardware de consumo por meio de runtimes como o llama.cpp, em vez de chamar uma API de nuvem a cada resposta.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Quem criou o Maid e o que mudou na reescrita?',
        content: [
          '**O Maid foi criado por Dane Madsen, que iniciou o projeto em outubro de 2023 como um app multiplataforma em Flutter para executar modelos GGUF e llama.cpp.** O projeto agora está hospedado sob a [organização Mobile-Artificial-Intelligence no GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) em vez da conta pessoal de Madsen; seu repositório original, [danemadsen/maid](https://github.com/danemadsen/maid), agora é listado pelo GitHub como um fork do repositório da organização, e sua descrição ainda diz "app multiplataforma em Flutter", embora isso não corresponda mais ao código atual.',
          'O histórico de versões mostra uma divisão clara. Os lançamentos até a **v2.0.7 (abril de 2025)** foram construídos com Flutter e distribuíam pacotes instaláveis para Android (APK/AAB), iOS (um `.ipa` para sideload, sem ficha na App Store), Linux (`.zip`/`.AppImage`), macOS (`.dmg` para Intel e Apple Silicon), Windows (`.zip`) e até um build web. A **versão 3.0.0 (publicada em 10 de março de 2026)** é uma reescrita completa em React Native, e seu lançamento inclui apenas pacotes Android (variantes APK e AAB) — nenhum arquivo para iOS, Windows, macOS ou Linux. O changelog dessa versão lista suporte a modelos de visão, texto para fala do sistema, reconhecimento de fala do sistema, suporte a modelos de raciocínio, renderização de Markdown e um recurso de denúncia por voto positivo/negativo que as notas descrevem como uma exigência da Google Play.',
          'O desenvolvimento continuou após essa reescrita: o repositório mostra pull requests mescladas e commits datados até o início de setembro de 2026, incluindo uma correção no sistema de chat e a adição do [OrcaRouter](https://www.orcarouter.ai) como provedor remoto. No momento desta análise, o repositório tinha cerca de 2.700 estrelas, 283 forks e 10 issues abertas — evidência de um projeto ativamente usado e ativamente mantido, embora seja um projeto de código aberto de uma única organização, e não uma empresa financiada com equipe de suporte.',
        ],
        items: [
          'Fundador: Dane Madsen (GitHub: [danemadsen](https://github.com/danemadsen)), que iniciou o projeto em outubro de 2023.',
          'Mantenedor atual: a organização [Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence) no GitHub; o repositório pessoal de Madsen hoje é um fork do repositório da organização.',
          'Licença: MIT — código aberto permissivo, livre para usar, bifurcar e modificar.',
          'Grande mudança de arquitetura: Flutter (multiplataforma, até a v2.0.7, abril de 2025) → React Native, somente Android (a partir da v3.0.0, março de 2026).',
          'Cerca de 2.700 estrelas, 283 forks e 10 issues abertas no GitHub no momento desta análise, com commits e pull requests mescladas tão recentes quanto setembro de 2026.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar a usar o Maid',
        content: [
          '**Ter um chat funcionando no Maid leva alguns passos após instalar a versão atual para Android.** Não há conta obrigatória para o chat local no dispositivo; um login opcional existe apenas para o recurso de backup na nuvem do app.',
        ],
        numberedItems: [
          {
            title: 'Instale o app no Android',
            whyItMatters: 'Baixe o Maid pela [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid), ou instale a APK diretamente pela [página de Releases do GitHub](https://github.com/Mobile-Artificial-Intelligence/maid/releases) se preferir fazer sideload. Atualmente não há build disponível para iOS, Windows, macOS ou Linux.',
          },
          {
            title: 'Escolha o modo local ou remoto',
            whyItMatters: 'Decida se quer baixar um modelo GGUF e executá-lo totalmente no dispositivo via llama.cpp, ou conectar o app a um provedor remoto (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita ou OrcaRouter) usando uma chave de API ou endereço de servidor que você já tenha.',
          },
          {
            title: 'Baixe ou importe um modelo (modo local)',
            whyItMatters: 'Para o chat no dispositivo, baixe um modelo GGUF com tamanho compatível com a RAM do seu telefone (veja a seção de hardware abaixo), ou carregue um arquivo GGUF personalizado do armazenamento local ou do [Hugging Face](https://huggingface.co).',
          },
          {
            title: 'Comece a conversar',
            whyItMatters: 'Depois que um modelo local for carregado ou um provedor remoto for configurado, inicie uma conversa. Os chats podem ser criados, renomeados, excluídos e exportados ou importados como arquivos JSON dentro do app.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quais modelos o Maid suporta?',
        itemHeadings: true,
        columns: ['Modo de acesso', 'A que se conecta', 'Notas'],
        rows: [
          {
            'Modo de acesso': 'Local (no dispositivo)',
            'A que se conecta': 'Qualquer modelo no formato GGUF, carregado via [llama.cpp](https://github.com/ggml-org/llama.cpp)',
            'Notas': 'Não há uma lista de modelos curada fixa — o app executa qualquer arquivo GGUF que você baixar ou importar, incluindo arquivos do Hugging Face.',
          },
          {
            'Modo de acesso': 'Provedores remotos',
            'A que se conecta': 'Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, [OrcaRouter](https://www.orcarouter.ai)',
            'Notas': 'Requer sua própria conta e chave de API (ou, no caso do Ollama, seu próprio endereço de servidor); o Maid não empacota nem revende acesso a esses provedores.',
          },
        ],
        note: 'Como o Maid consegue carregar qualquer arquivo GGUF, seu suporte prático a modelos é definido pela compatibilidade com o llama.cpp, e não por uma lista curada pelo app — isso é diferente de apps como PocketPal AI ou Private LLM, que oferecem um catálogo específico de download rápido além do suporte a arquivos personalizados.',
      },
      platform: {
        id: 'platform-availability',
        title: 'O Maid está disponível para iPhone, Windows ou Mac?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidade atual', 'Notas'],
        rows: [
          {
            'Plataforma': 'Android',
            'Disponibilidade atual': 'Disponível agora',
            'Notas': 'Distribuído pela [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) e como APK/AAB direta pelo [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases). Esta é a única plataforma que a versão atual 3.0.0 atende.',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidade atual': 'Não disponível atualmente',
            'Notas': 'Lançamentos antigos em Flutter (até a v2.0.7, abril de 2025) traziam um arquivo `.ipa` para sideload, mas nunca houve ficha na App Store, e o lançamento atual v3.0.0 não inclui nenhum arquivo para iOS.',
          },
          {
            'Plataforma': 'Windows / macOS / Linux',
            'Disponibilidade atual': 'Não disponível atualmente',
            'Notas': 'Builds de desktop (`.zip`, `.AppImage`, `.dmg`) existiam para os lançamentos baseados em Flutter até a v2.0.7, mas a reescrita em React Native (v3.0.0) não distribui pacotes de desktop. Usuários de desktop que buscam um cliente de chat GGUF local devem considerar Ollama, LM Studio ou Jan AI.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Quanto custa o Maid?',
        content: [
          '**O Maid é gratuito para baixar e usar, tanto para chat local no dispositivo quanto para chat com provedores remotos, e seu código-fonte é público sob licença MIT.** Nenhuma compra dentro do app, assinatura ou plano pago foi encontrado no repositório, nas notas de lançamento ou na ficha da Google Play do app no momento desta análise.',
          'Os custos que um usuário do Maid realmente paga são indiretos: armazenamento do dispositivo para os arquivos de modelos GGUF baixados (normalmente vários gigabytes cada) e, no modo com provedores remotos, o que Anthropic, OpenAI, Mistral, DeepSeek, Novita, Ollama ou OrcaRouter cobrarem separadamente pelo uso de sua API na sua própria conta com esse provedor — o Maid em si não adiciona margem nem assinatura sobre esses custos do provedor.',
        ],
        items: [
          '**App base:** Gratuito, sem assinatura, código aberto sob licença MIT.',
          '**Chat local (modelos GGUF no dispositivo):** Gratuito — sem cobrança por mensagem ou token, já que a inferência roda no seu próprio dispositivo.',
          '**Chat com provedores remotos:** Gratuito de usar pelo Maid, mas você paga o que o provedor (OpenAI, Anthropic etc.) cobrar na sua própria conta e chave de API.',
          '**Backup opcional na nuvem:** O app permite se registrar ou fazer login para fazer backup de configurações e histórico de chat via Supabase; esta análise não encontrou nenhuma cobrança separada vinculada a esse recurso.',
          '**Custo de armazenamento:** Não é monetário, mas é real — cada modelo GGUF baixado consome normalmente vários gigabytes de armazenamento no dispositivo.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Quais recursos o Maid tem?',
        content: [
          '**Além da divisão básica entre chat local e remoto, o README e as notas de lançamento do Maid descrevem um conjunto de recursos adicionados ao longo de seu histórico de versões.** Entre eles:',
        ],
        items: [
          '**Inferência local e remota em um único app.** Alterne entre chat GGUF totalmente offline via llama.cpp e provedores de nuvem (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) com suas próprias credenciais.',
          '**Gerenciamento de conversas.** Crie, renomeie, exclua, exporte e importe chats como arquivos JSON.',
          '**Prompt de sistema personalizado.** Defina um prompt de sistema global para ajustar o comportamento e o tom do assistente.',
          '**Parâmetros de geração ajustáveis.** Ajuste configurações como temperature, top-p, top-k e tamanho de contexto por sessão.',
          '**Saída de voz via um app complementar.** O Maid se combina com o [Maise](https://github.com/Mobile-Artificial-Intelligence/maise), um mecanismo de texto para fala em Android de código aberto separado, da mesma organização no GitHub, para ler as respostas em voz alta.',
          '**Backup opcional na nuvem.** Os usuários podem se registrar ou fazer login para sincronizar configurações e histórico de chat via Supabase; isso é opcional e não obrigatório para usar o app.',
          '**Design Material You.** Temas claro e escuro que seguem a preferência do sistema Android.',
          '**Sem telemetria nem anúncios,** de acordo com o próprio README do projeto.',
        ],
        note: 'A disponibilidade de recursos pode variar conforme a versão do app, já que o projeto lança atualizações com frequência. Verifique o changelog dentro do app ou a [página de Releases do GitHub](https://github.com/Mobile-Artificial-Intelligence/maid/releases) para ver o que está disponível na sua versão instalada, especialmente considerando o quanto mudou entre a linha v2.x baseada em Flutter e a reescrita em React Native da v3.0.0.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Qual hardware você precisa para rodar o Maid?',
        content: [
          '**O modelo GGUF que você escolhe, e não o app em si, define seu limite real de hardware para o chat local — como orientação geral para modelos GGUF em smartphones, um modelo quantizado de 2 a 4B de parâmetros precisa de cerca de 3-4 GB de RAM livre, enquanto um de 7 a 8B de parâmetros precisa de 6-8 GB ou mais.** Esta é uma orientação padrão de dimensionamento para LLMs locais, não um benchmark específico do Maid; a PromptQuorum não mediu de forma independente o uso exato de memória do Maid por modelo.',
          'Como o Maid executa a inferência local por meio do llama.cpp, aplica-se a orientação geral de desempenho do llama.cpp no Android: um aparelho recente com mais RAM e um chipset moderno carregará e executará modelos maiores com mais folga do que um telefone mais antigo ou limitado em memória ou armazenamento. Se você usar o modo com provedores remotos em vez da inferência local, os requisitos de hardware no dispositivo são mínimos — o modelo roda nos servidores do provedor, e seu telefone só precisa de uma conexão com a internet funcionando.',
        ],
        items: [
          'Modelos pequenos (2-4B de parâmetros, quantizados): utilizáveis na maioria dos smartphones Android recentes com 4 GB+ de RAM livre.',
          'Modelos médios (7-8B de parâmetros, quantizados): RAM do dispositivo recomendada de 8 GB ou mais para uma resposta aceitável.',
          'Armazenamento: reserve vários gigabytes de espaço livre para cada arquivo de modelo GGUF baixado.',
          'Modo com provedores remotos: sem exigência relevante de hardware local além de uma conexão com a internet funcionando, já que a inferência roda na infraestrutura do provedor.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deve usar o Maid',
        items: [
          '**Usuários de Android que querem chat local e na nuvem em um único app gratuito.** A capacidade de alternar entre inferência GGUF totalmente offline e suas próprias contas em provedores como OpenAI ou Anthropic, em um único cliente de código aberto, é o diferencial mais claro do Maid.',
          '**Usuários que querem rodar um arquivo GGUF sem restrições, não uma lista de modelos curada.** Como o app carrega qualquer modelo GGUF via llama.cpp em vez de oferecer um catálogo fixo, ele é indicado para quem já tem um modelo específico em mente.',
          '**Desenvolvedores e usuários tecnicamente curiosos confortáveis com projetos de código aberto.** O repositório público no GitHub, o rastreador de issues e o histórico ativo de lançamentos são adequados para quem está disposto a ler notas de versão ou abrir uma issue em vez de esperar suporte dedicado ao cliente.',
          '**Usuários que querem inspecionar ou modificar o código eles mesmos.** A licença MIT permite bifurcar e modificar, o que importa para quem quer auditar exatamente o que o app faz antes de confiar a ele conversas privadas ou chaves de API de provedores.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deve usar o Maid',
        items: [
          '**Usuários de iPhone, iPad, Windows, macOS ou Linux.** A versão atual 3.0.0 é exclusiva para Android; não há ficha na App Store nem build de desktop compatível. Usuários nessas plataformas devem considerar Private LLM ou PocketPal AI (Apple), ou Ollama, LM Studio ou Jan AI (desktop).',
          '**Usuários que querem uma experiência totalmente guiada, sem configuração.** Escolher entre modo local e remoto, selecionar um tamanho de modelo adequado ao seu dispositivo e gerenciar chaves de API fazem parte do fluxo de trabalho; quem prefere que o app tome essas decisões pode preferir um app mais curado como Loci ou Enclave AI.',
          '**Usuários que querem rodar localmente os modelos mais exigentes (70B+ de parâmetros).** O hardware de smartphones, mesmo em aparelhos Android topo de linha, não consegue rodar de forma prática modelos dessa escala no dispositivo — essas cargas de trabalho precisam de um desktop, uma workstation ou uma API de nuvem/provedor remoto, independentemente de qual app móvel seja usado.',
          '**Usuários que esperam suporte comercial dedicado.** O Maid é mantido por uma organização de código aberto no GitHub, e não por uma empresa financiada com equipe de suporte; quem precisa de tempos de resposta garantidos ou de um contrato de suporte empresarial deve buscar uma alternativa com respaldo comercial.',
          '**Usuários que precisam do antigo build multiplataforma.** Quem depende do suporte anterior do Maid para iOS, Windows, macOS ou Linux das versões v2.x baseadas em Flutter deve saber que essas plataformas não fazem parte da versão atual, ativamente mantida.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Maid vs. alternativas',
        itemHeadings: true,
        columns: ['App', 'Licença / custo', 'Plataformas', 'Flexibilidade de modelos'],
        rows: [
          {
            'App': 'Maid',
            'Licença / custo': 'Gratuito, código aberto (MIT)',
            'Plataformas': 'Somente Android (a partir da v3.0.0)',
            'Flexibilidade de modelos': 'Qualquer arquivo GGUF via llama.cpp, ou provedores remotos (Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) com sua própria chave de API',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Licença / custo': 'Gratuito, código aberto (MIT)',
            'Plataformas': 'iPhone/iPad, Android',
            'Flexibilidade de modelos': 'Lista de download rápido mais qualquer arquivo GGUF do Hugging Face',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Licença / custo': 'Pago, compra única; código fechado',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Flexibilidade de modelos': '140+ modelos, com formatos de quantização OmniQuant e GPTQ',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Licença / custo': 'Gratuito com plano pago; código fechado',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Flexibilidade de modelos': 'Lista curada de modelos no dispositivo; integração com Siri e Atalhos',
          },
          {
            'App': 'ChatterUI',
            'Licença / custo': 'Gratuito, código aberto (AGPL-3.0)',
            'Plataformas': 'Android (compilar a partir do código-fonte)',
            'Flexibilidade de modelos': 'Executa arquivos GGUF no dispositivo via llama.cpp, ou se conecta a APIs remotas; suporte a Character Card v2',
          },
          {
            'App': 'RikkaHub',
            'Licença / custo': 'Gratuito, código aberto',
            'Plataformas': 'Android',
            'Flexibilidade de modelos': 'Cliente multi-provedor (APIs compatíveis com OpenAI/Google/Anthropic); design Material You',
          },
          {
            'App': 'AnythingLLM Mobile',
            'Licença / custo': 'Gratuito, código aberto',
            'Plataformas': 'iPhone/iPad, Android',
            'Flexibilidade de modelos': 'Inferência no dispositivo, conexão com uma instância AnythingLLM auto-hospedada, ou qualquer provedor compatível com OpenAI',
          },
        ],
        note: 'O LLM Farm, antes um popular app de chat GGUF de código aberto para iOS, foi retirado da App Store e marcado como "temporariamente indisponível" em seu próprio repositório no GitHub no momento desta análise — por isso é omitido das recomendações ativas acima. Já o Layla, outro app de assistência no dispositivo, teria tido seu plano gratuito "Layla Lite" removido da Google Play; verifique a disponibilidade atual diretamente em [layla-network.ai](https://www.layla-network.ai) antes de presumir que ele pode ser instalado.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Maid é gratuito?',
            a: 'Sim. O Maid é gratuito para baixar e usar, tanto para chat local no dispositivo quanto para chat com provedores remotos, e o app é de código aberto sob licença MIT. Nenhum plano pago ou compra dentro do app foi encontrado no app ou em sua documentação no momento desta análise; o modo com provedores remotos continua sendo cobrado pela sua própria conta com esse provedor.',
          },
          {
            q: 'Quem desenvolveu o Maid?',
            a: 'O Maid foi criado por Dane Madsen, que iniciou o projeto em outubro de 2023 como um app multiplataforma em Flutter. Hoje ele é mantido pela organização Mobile-Artificial-Intelligence no GitHub, em vez de como um projeto pessoal.',
          },
          {
            q: 'O Maid é de código aberto?',
            a: 'Sim, o código-fonte completo é publicado no [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) sob a licença MIT, uma licença permissiva que permite uso, modificação e redistribuição livres.',
          },
          {
            q: 'O Maid funciona no iPhone, Windows ou Mac?',
            a: 'Não. Desde a versão 3.0.0 (março de 2026), o Maid é exclusivo para Android. Lançamentos anteriores baseados em Flutter, até a v2.0.7 (abril de 2025), traziam builds para iOS (somente sideload, sem ficha na App Store), Windows, macOS e Linux, mas essas plataformas não são suportadas pela versão atual, ativamente mantida.',
          },
          {
            q: 'Quais modelos o Maid consegue executar?',
            a: 'Para chat local, o Maid consegue executar qualquer modelo no formato GGUF via llama.cpp — não há uma lista curada fixa. Ele também pode se conectar a provedores remotos, incluindo Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita e OrcaRouter, usando uma chave de API ou endereço de servidor fornecido por você mesmo.',
          },
          {
            q: 'Quanta RAM o Maid precisa para modelos locais?',
            a: 'Isso depende do modelo GGUF que você escolher, não é uma exigência fixa do app. Como orientação geral, modelos quantizados de 2 a 4B de parâmetros normalmente precisam de 3-4 GB de RAM livre, e os de 7 a 8B normalmente precisam de 8 GB ou mais. Dispositivos com mais RAM conseguem rodar localmente modelos maiores e mais capazes.',
          },
          {
            q: 'O Maid exige conexão com a internet?',
            a: 'Não é necessária conexão com a internet para o chat local depois que um modelo GGUF é baixado — a inferência roda totalmente no dispositivo via llama.cpp. É necessária conexão com a internet para o download inicial de modelos, para usar o modo com provedores remotos e para o recurso opcional de backup na nuvem baseado em Supabase.',
          },
          {
            q: 'O Maid ainda é mantido ativamente?',
            a: 'No momento desta análise, sim: o repositório no GitHub mostra commits e pull requests mescladas tão recentes quanto o início de setembro de 2026, incluindo uma correção no sistema de chat e a adição do OrcaRouter como provedor remoto. Ele é mantido por uma organização de código aberto no GitHub, e não por uma empresa financiada, então verifique você mesmo a atividade recente do repositório antes de depender dele para algo urgente.',
          },
          {
            q: 'O que aconteceu com o suporte do Maid para iOS, Windows e Mac?',
            a: 'O Maid era originalmente um app multiplataforma em Flutter; os lançamentos até a v2.0.7 (abril de 2025) traziam, além do Android, builds instaláveis para iOS (sideload), Windows, macOS e Linux. A versão 3.0.0 (março de 2026) reescreveu o app em React Native e restringiu o projeto apenas ao Android — os builds de desktop e iOS não fazem mais parte da linha de lançamentos atual.',
          },
          {
            q: 'Como o Maid se compara ao PocketPal AI ou ao Private LLM?',
            a: 'O Maid é gratuito, de código aberto, exclusivo para Android, e incomum por suportar tanto inferência GGUF totalmente local quanto provedores de nuvem remotos em um único app. O PocketPal AI também é gratuito e de código aberto, mas cobre iPhone/iPad e Android com inferência GGUF somente local. O Private LLM é um app pago, de código fechado, exclusivo para Apple, com um catálogo de modelos embutido maior. Escolha o Maid se você usa Android e quer opções locais e na nuvem em um único cliente; escolha o PocketPal AI se precisa de suporte para iOS com um modelo local gratuito e de código aberto semelhante; escolha o Private LLM se preferir uma experiência paga, mais polida e exclusiva para Apple. Veja a tabela comparativa acima para mais detalhes.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Maid é um app Android genuinamente gratuito e genuinamente de código aberto, com uma combinação incomum para esta categoria: executa modelos GGUF locais via llama.cpp e permite que você se conecte a provedores remotos como OpenAI ou Anthropic no mesmo cliente. Essa flexibilidade vem com trade-offs reais que vale a pena conhecer antes de instalar. O app passou por uma mudança de arquitetura significativa em 2026 — uma reescrita de Flutter multiplataforma para React Native exclusivo para Android — que eliminou o suporte a iOS, Windows, macOS e Linux que a versão antiga tinha. Ele é mantido por uma organização de código aberto no GitHub, e não por uma empresa, com um desenvolvimento que está ativo no momento desta análise, mas sem garantia de continuar em um ritmo específico. Escolha o Maid se você é um usuário Android que quer um cliente de chat gratuito, aberto e de modo duplo (local e remoto), e está confortável com um projeto mantido pela comunidade. Escolha outro app — PocketPal AI ou Private LLM para dispositivos Apple, ou Ollama, LM Studio ou Jan AI para desktop — se você precisar de uma plataforma que a versão atual do Maid não cobre.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Maid no GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) — código-fonte, licença (MIT), README e histórico de versões referenciados nesta análise.',
          '[Página de lançamentos do Maid](https://github.com/Mobile-Artificial-Intelligence/maid/releases) — histórico de versões, changelogs e pacotes de build da v2.0.4 à v3.0.0.',
          '[Histórico de commits do repositório do Maid](https://github.com/Mobile-Artificial-Intelligence/maid/commits/main) — atividade recente de commits e pull requests usada para avaliar o status de manutenção.',
          '[Maid na Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) — disponibilidade para Android.',
          '[danemadsen/maid no GitHub](https://github.com/danemadsen/maid) — o repositório original do fundador, hoje um fork do repositório atual da organização.',
          '[Maise no GitHub](https://github.com/Mobile-Artificial-Intelligence/maise) — o mecanismo de texto para fala em Android de código aberto, complementar ao Maid.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Os melhores apps de LLM local para Android em 2026](/power-local-llm/best-local-llm-apps-android-2026) — o panorama de apps Android, incluindo Maid, MLC Chat e PocketPal AI.',
          '[Análise do PocketPal AI](/power-local-llm/pocketpal-ai-review) — uma alternativa gratuita e de código aberto que também cobre iPhone e iPad.',
          '[Análise do Private LLM](/power-local-llm/private-llm-review) — uma alternativa paga, de código fechado, exclusiva para Apple, com um catálogo de modelos embutido maior.',
          '[Análise do Enclave AI](/power-local-llm/enclave-ai-review) — uma alternativa exclusiva da Apple com automação via Siri e Atalhos.',
          '[Os melhores modelos LLM móveis em 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — o artigo complementar sobre modelos para escolher qual arquivo GGUF realmente cabe no seu telefone.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Análise do Maid (2026): App de Chat com LLM Local de Código Aberto para Android',
      description:
        'Análise do Maid: um app Android gratuito e de código aberto (MIT) que executa modelos GGUF localmente via llama.cpp ou se conecta a provedores de IA. Plataformas, história e público-alvo.',
      url: 'https://promptquorum.com/pt/power-local-llm/maid-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuários de Android avaliando apps de chat com IA local e multi-provedor, gratuitos e de código aberto' },
      about: [
        { '@type': 'Thing', name: 'Maid' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'LLM local' },
        { '@type': 'Thing', name: 'Software de código aberto' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/maid-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Análise do Maid (2026)', item: 'https://promptquorum.com/pt/power-local-llm/maid-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/maid-review-hero-ar.webp',
    title: 'مراجعة Maid (2026): تطبيق دردشة مفتوح المصدر لنماذج اللغة المحلية على Android',
    seoTitle: 'مراجعة Maid 2026: تطبيق Android مفتوح المصدر لنماذج اللغة',
    intro:
      'Maid هو تطبيق دردشة مجاني ومفتوح المصدر (برخصة MIT) يشغّل نماذج لغوية بصيغة GGUF محليًا عبر [llama.cpp](https://github.com/ggml-org/llama.cpp)، أو يتصل بمزودين عن بُعد مثل Anthropic وOpenAI وOllama وMistral وDeepSeek وNovita وOrcaRouter باستخدام مفتاح API الخاص بك. بدأ المشروع عام 2023 كتطبيق متعدد المنصات مبني بـFlutter من تطوير المطور الأسترالي Dane Madsen، لكن الكود أُعيدت كتابته بـReact Native في الإصدار 3.0.0 (مارس 2026)، ويُوزَّع اليوم لنظام Android فقط — إصدارات سطح المكتب وiOS التي كانت موجودة في إصدارات Flutter القديمة لم تعد جزءًا من الإصدار الحالي. تتناول هذه المراجعة ما يقدمه Maid اليوم، وما تغيّر مع إعادة الكتابة، ومتطلباته الفعلية من المنصات والأجهزة، وسعره (مجاني بلا خطة مدفوعة)، ولمن يناسب — ولمن لا يناسب — مقارنة ببديل تجاري.',
    metaDescription:
      'مراجعة Maid: تطبيق Android مجاني ومفتوح المصدر (MIT) يشغّل نماذج GGUF محليًا عبر llama.cpp أو يتصل بمزودي الذكاء الاصطناعي. المنصات والتاريخ والفئة المستهدفة.',
    twitterDescription:
      'مراجعة Maid 2026: تطبيق Android المجاني ومفتوح المصدر للدردشة المحلية عبر llama.cpp، أصبح الآن حصريًا لنظام Android بعد إعادة كتابة في 2026. ما الذي تغيّر ولمن يناسب.',
    audience:
      'مستخدمو Android الذين يريدون تطبيق دردشة بالذكاء الاصطناعي محليًا أو متعدد المزودين، مجانيًا ومفتوح المصدر، ولا يمانعون مشروعًا تديره مجتمع المطورين وحصريًا على Android.',
    readTime: 'قراءة 10 دقائق',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة Maid',
    targetKeywords: [
      'maid ai مراجعة',
      'maid app android',
      'maid llama.cpp app',
      'maid تطبيق llm مفتوح المصدر',
      'maid vs pocketpal ai',
      'تطبيق llm محلي مجاني android',
      'تطبيق دردشة gguf android',
      'mobile artificial intelligence maid',
    ],
    current_models_mentioned: ['نماذج GGUF عبر llama.cpp'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Maid هو تطبيق Android مجاني ومفتوح المصدر (برخصة MIT) يشغّل نماذج لغوية بصيغة GGUF محليًا عبر llama.cpp، ويمكنه أيضًا الاتصال بمزودين عن بُعد — Anthropic وOpenAI وOllama وMistral وDeepSeek وNovita وOrcaRouter — باستخدام مفتاح API الخاص بك.** يطوّره [منظمة Mobile-Artificial-Intelligence على GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)، التي أسسها Dane Madsen، الذي بدأ المشروع في أكتوبر 2023. بُني التطبيق في الأصل بـFlutter وصدر لأنظمة Android وiOS (تثبيت جانبي) وWindows وmacOS وLinux حتى الإصدار 2.0.7 (أبريل 2025)؛ أعاد الإصدار 3.0.0 (مارس 2026) كتابة التطبيق بـReact Native وقصر التوزيع على Android فقط — لا يوجد حاليًا إصدار لـiOS أو Windows أو macOS أو Linux. لا يزال المشروع قيد التطوير النشط، بوجود commits وطلبات دمج (pull requests) مدموجة حتى سبتمبر 2026.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق تثبيت Maid للدردشة المحلية بالذكاء الاصطناعي على Android؟',
        answer:
          'نعم، إذا كنت تستخدم Android وتريد تطبيقًا مجانيًا ومفتوح المصدر قادرًا على تشغيل نماذج GGUF بالكامل على الجهاز عبر llama.cpp، أو الاتصال بحساباتك الخاصة لدى مزودين مثل OpenAI أو Anthropic أو Ollama. لا يناسب مستخدمي iPhone أو Mac أو Windows أو Linux — فالإصدار الحالي 3.0.0 ألغى هذه المنصات عند إعادة كتابة التطبيق من Flutter إلى React Native، ولا يوزَّع اليوم سوى إصدار لـAndroid.',
        bullets: [
          'مجاني ومفتوح المصدر بموجب رخصة MIT — بلا اشتراك، والكود المصدري متاح للجميع على [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'حصري لنظام Android منذ الإصدار 3.0.0 (مارس 2026)؛ متاح على [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) وكملف APK مباشر من [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'يشغّل نماذج GGUF محليًا عبر llama.cpp، أو يتصل بـAnthropic وOpenAI وOllama وMistral وDeepSeek وNovita وOrcaRouter بمفتاح API خاص بك.',
          'بدأ كتطبيق Flutter متعدد المنصات على يد المطور Dane Madsen في أكتوبر 2023؛ أُعيدت كتابته بـReact Native للإصدار v3.0.0، ما أدى إلى إلغاء إصدارات iOS وWindows وmacOS وLinux في هذه العملية.',
          'مُطوَّر بنشاط وقت المراجعة — commits وطلبات دمج مدموجة حتى أوائل سبتمبر 2026، مع 10 مشكلات (issues) مفتوحة و283 نسخة متفرعة (forks) على GitHub.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو Maid؟', anchor: 'what-is-maid' },
      { label: 'من طوّر Maid، وماذا تغيّر مع إعادة الكتابة؟', anchor: 'history-and-developer' },
      { label: 'كيفية البدء مع Maid', anchor: 'getting-started' },
      { label: 'ما النماذج التي يدعمها Maid؟', anchor: 'models-supported' },
      { label: 'هل Maid متاح على iPhone أو Windows أو Mac؟', anchor: 'platform-availability' },
      { label: 'كم يكلّف Maid؟', anchor: 'pricing' },
      { label: 'ما ميزات Maid؟', anchor: 'key-features' },
      { label: 'ما الأجهزة التي تحتاجها؟', anchor: 'hardware-requirements' },
      { label: 'لمن يناسب Maid', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Maid', anchor: 'who-should-not-use' },
      { label: 'Maid مقابل البدائل', anchor: 'vs-alternatives' },
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
            text: 'Maid هو تطبيق Android مجاني ومفتوح المصدر برخصة MIT، يشغّل نماذج لغوية بصيغة GGUF محليًا عبر llama.cpp أو يتصل بمزودي ذكاء اصطناعي عن بُعد بمفتاح API خاص بك، وتديره منظمة Mobile-Artificial-Intelligence على GitHub التي أسسها المطور Dane Madsen.',
          },
          {
            type: 'plain-terms',
            text: 'هو تطبيق تثبّته على هاتف Android للدردشة مع نموذج ذكاء اصطناعي يعمل إما على جهازك نفسه أو عبر حساب لديك بالفعل لدى مزود مثل OpenAI أو Anthropic — الكود متاح للجميع على GitHub والتطبيق نفسه مجاني. كان يعمل سابقًا أيضًا على iPhone وWindows وMac وLinux، لكن الإصدار الحالي ألغى هذه المنصات.',
          },
        ],
        items: [
          'مجاني ومفتوح المصدر (رخصة MIT)؛ الكود المصدري ومتتبع المشكلات متاحان للجميع على [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid).',
          'أسسه Dane Madsen في أكتوبر 2023 كتطبيق Flutter متعدد المنصات؛ تديره اليوم منظمة Mobile-Artificial-Intelligence.',
          'يشغّل نماذج GGUF بالكامل على الجهاز عبر llama.cpp، أو يتصل بـAnthropic وOpenAI وOllama وMistral وDeepSeek وNovita وOrcaRouter بمفتاح API خاص بك.',
          'أعاد الإصدار 3.0.0 (مارس 2026) كتابة التطبيق بـReact Native وقصره على Android — كانت إصدارات Flutter القديمة تُوزَّع أيضًا لـiOS (تثبيت جانبي) وWindows وmacOS وLinux، لكن هذه الإصدارات لم تعد جزءًا من الإصدار الحالي.',
          'متاح على [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) وكتنزيل مباشر لملف APK/AAB من [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases).',
          'لم يُعثر على أي خطة مدفوعة في التطبيق أو وثائقه وقت المراجعة؛ التطبيق الأساسي ووظيفة الدردشة المحلية فيه مجانية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [مستودع GitHub العام](https://github.com/Mobile-Artificial-Intelligence/maid)، وملف README الخاص به، وسجل الإصدارات، وصفحة Google Play، التي جرى التحقق منها في سبتمبر 2026. لم تُجرِ PromptQuorum اختبارات معملية مستقلة لـMaid لأغراض هذه المراجعة — أرقام الأداء أدناه هي إرشادات عامة عن أجهزة نماذج اللغة المحلية، وليست قياسات خاصة بهذا التطبيق.',
          },
        ],
      },
      overview: {
        id: 'what-is-maid',
        title: 'ما هو Maid؟',
        content: [
          '**Maid هو تطبيق Android يقوم إما بتنزيل نماذج لغوية مفتوحة الأوزان بصيغة GGUF وتشغيلها محليًا على الجهاز عبر [llama.cpp](https://github.com/ggml-org/llama.cpp)، أو بإرسال طلبات الدردشة إلى مزود عن بُعد باستخدام مفتاح API توفّره أنت بنفسك.** التطبيق مرخّص بموجب [رخصة MIT](https://github.com/Mobile-Artificial-Intelligence/maid/blob/main/LICENSE)، ما يعني أن الكود المصدري الكامل متاح للجميع وحر للفحص أو التفريع (fork) أو التعديل.',
          'هذا النمط المزدوج هو الميزة المحدِّدة للتطبيق: فهو ليس عميل استدلال محلي حصريًا. يمكن للواجهة نفسها تشغيل ملف GGUF بالكامل دون اتصال بالإنترنت، أو توجيه محادثة إلى مزود سحابي مثل OpenAI أو Anthropic عبر حسابك الخاص، أو إلى خادم [Ollama](https://ollama.com) مستضاف ذاتيًا على شبكتك. ووفقًا لملف README الخاص به، يصف المشروع نفسه بأنه "غير تابع لـHuggingface أو Meta (Facebook) أو MistralAi أو OpenAI أو Google أو Microsoft أو أي شركة أخرى تقدم نموذجًا متوافقًا مع هذا التطبيق".',
        ],
        note: 'GGUF هو صيغة ملفات لتغليف نماذج اللغة مفتوحة الأوزان بعد تكميمها (quantization)، بحيث تعمل بكفاءة على أجهزة الاستهلاك العادية عبر أدوات تشغيل مثل llama.cpp، بدلًا من استدعاء واجهة برمجة تطبيقات سحابية مع كل رد.',
      },
      history: {
        id: 'history-and-developer',
        title: 'من طوّر Maid، وماذا تغيّر مع إعادة الكتابة؟',
        content: [
          '**أنشأ Maid المطور Dane Madsen، الذي بدأ المشروع في أكتوبر 2023 كتطبيق Flutter متعدد المنصات لتشغيل نماذج GGUF وllama.cpp.** يُستضاف المشروع اليوم تحت [منظمة Mobile-Artificial-Intelligence على GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) بدلًا من حساب Madsen الشخصي؛ ويُدرَج مستودعه الأصلي، [danemadsen/maid](https://github.com/danemadsen/maid)، الآن على GitHub كنسخة متفرعة (fork) من مستودع المنظمة، ولا يزال وصفه يذكر "تطبيق Flutter متعدد المنصات" رغم أن ذلك لم يعد مطابقًا للكود الحالي.',
          'يُظهر سجل الإصدارات انقسامًا واضحًا. بُنيت الإصدارات حتى **v2.0.7 (أبريل 2025)** بـFlutter، ووفّرت حزمًا قابلة للتثبيت لأنظمة Android (APK/AAB)، وiOS (ملف `.ipa` قابل للتثبيت الجانبي، دون إدراج على App Store)، وLinux (`.zip`/`.AppImage`)، وmacOS (`.dmg` لكل من Intel وApple Silicon)، وWindows (`.zip`)، بل وحتى إصدار ويب. أما **الإصدار 3.0.0 (الصادر في 10 مارس 2026)** فهو إعادة كتابة كاملة بـReact Native، ولا يتضمن إصداره سوى حزم Android (بصيغتَي APK وAAB) — دون أي ملفات لـiOS أو Windows أو macOS أو Linux. ويذكر سجل التغييرات لهذا الإصدار دعم نماذج الرؤية، وتحويل النص إلى كلام على مستوى النظام، والتعرف على الكلام على مستوى النظام، ودعم نماذج الاستدلال المنطقي، وعرض Markdown، وميزة تصويت إيجابي/سلبي للإبلاغ تصفها الملاحظات بأنها متطلب من Google Play.',
          'استمر التطوير بعد إعادة الكتابة هذه: يُظهر المستودع طلبات دمج مدموجة وcommits بتواريخ حتى أوائل سبتمبر 2026، من بينها إصلاح لنظام الدردشة وإضافة [OrcaRouter](https://www.orcarouter.ai) كمزود عن بُعد. وقت المراجعة، كان المستودع يضم نحو 2,700 نجمة، و283 نسخة متفرعة، و10 مشكلات مفتوحة — ما يدل على مشروع نشط الاستخدام ونشط الصيانة، وإن كان مشروعًا مفتوح المصدر تديره منظمة واحدة وليس شركة ممولة بفريق دعم.',
        ],
        items: [
          'المؤسس: Dane Madsen (GitHub: [danemadsen](https://github.com/danemadsen))، الذي بدأ المشروع في أكتوبر 2023.',
          'الجهة القائمة بالصيانة حاليًا: منظمة [Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence) على GitHub؛ مستودع Madsen الشخصي أصبح الآن نسخة متفرعة من مستودع المنظمة.',
          'الرخصة: MIT — رخصة مفتوحة المصدر متساهلة، حرة الاستخدام والتفريع والتعديل.',
          'تغيير معماري رئيسي: Flutter (متعدد المنصات، حتى v2.0.7، أبريل 2025) ← React Native، حصريًا لـAndroid (من v3.0.0، مارس 2026).',
          'نحو 2,700 نجمة على GitHub، و283 نسخة متفرعة، و10 مشكلات مفتوحة وقت المراجعة، مع commits وطلبات دمج مدموجة حتى سبتمبر 2026.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيفية البدء مع Maid',
        content: [
          '**يستغرق الحصول على دردشة تعمل في Maid بضع خطوات بعد تثبيت إصدار Android الحالي.** لا يوجد حساب إلزامي للدردشة المحلية على الجهاز؛ يوجد تسجيل دخول اختياري فقط لميزة النسخ الاحتياطي السحابي في التطبيق.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق على Android',
            whyItMatters: 'نزّل Maid من [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid)، أو ثبّت ملف APK مباشرة من [صفحة GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases) إذا كنت تفضّل التثبيت الجانبي. لا يتوفر حاليًا إصدار لـiOS أو Windows أو macOS أو Linux.',
          },
          {
            title: 'اختر الوضع المحلي أو عن بُعد',
            whyItMatters: 'قرّر ما إذا كنت تريد تنزيل نموذج GGUF وتشغيله بالكامل على الجهاز عبر llama.cpp، أو ربط التطبيق بمزود عن بُعد (Anthropic أو OpenAI أو Ollama أو Mistral أو DeepSeek أو Novita أو OrcaRouter) باستخدام مفتاح API أو عنوان خادم لديك بالفعل.',
          },
          {
            title: 'نزّل أو استورد نموذجًا (الوضع المحلي)',
            whyItMatters: 'للدردشة على الجهاز، نزّل نموذج GGUF بحجم مناسب لذاكرة RAM في هاتفك (راجع قسم الأجهزة أدناه)، أو حمّل ملف GGUF مخصصًا من التخزين المحلي أو من [Hugging Face](https://huggingface.co).',
          },
          {
            title: 'ابدأ الدردشة',
            whyItMatters: 'بمجرد تحميل نموذج محلي أو إعداد مزود عن بُعد، ابدأ محادثة. يمكن إنشاء الدردشات وإعادة تسميتها وحذفها وتصديرها أو استيرادها كملفات JSON من داخل التطبيق.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'ما النماذج التي يدعمها Maid؟',
        itemHeadings: true,
        columns: ['وضع الوصول', 'ما يتصل به', 'ملاحظات'],
        rows: [
          {
            'وضع الوصول': 'محلي (على الجهاز)',
            'ما يتصل به': 'أي نموذج بصيغة GGUF، محمَّل عبر [llama.cpp](https://github.com/ggml-org/llama.cpp)',
            'ملاحظات': 'لا توجد قائمة نماذج منتقاة ثابتة — يشغّل التطبيق أي ملف GGUF تنزّله أو تستورده، بما في ذلك ملفات من Hugging Face.',
          },
          {
            'وضع الوصول': 'مزودون عن بُعد',
            'ما يتصل به': 'Anthropic، OpenAI، Ollama، Mistral، DeepSeek، Novita، [OrcaRouter](https://www.orcarouter.ai)',
            'ملاحظات': 'يتطلب حسابك ومفتاح API الخاصين بك (أو عنوان خادمك الخاص في حالة Ollama)؛ لا يجمّع Maid ولا يعيد بيع الوصول إلى هؤلاء المزودين.',
          },
        ],
        note: 'بما أن Maid يستطيع تحميل أي ملف GGUF، فإن دعمه العملي للنماذج تحدده التوافقية مع llama.cpp وليس قائمة ينتقيها التطبيق — وهذا يختلف عن تطبيقات مثل PocketPal AI أو Private LLM، التي توفّر فهرسًا محددًا للتنزيل السريع إلى جانب دعم الملفات المخصصة.',
      },
      platform: {
        id: 'platform-availability',
        title: 'هل Maid متاح على iPhone أو Windows أو Mac؟',
        itemHeadings: true,
        columns: ['المنصة', 'التوفر الحالي', 'ملاحظات'],
        rows: [
          {
            'المنصة': 'Android',
            'التوفر الحالي': 'متاح الآن',
            'ملاحظات': 'يُوزَّع عبر [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) وكملف APK/AAB مباشر من [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases). هذه هي المنصة الوحيدة التي يستهدفها الإصدار الحالي 3.0.0.',
          },
          {
            'المنصة': 'iPhone / iPad',
            'التوفر الحالي': 'غير متاح حاليًا',
            'ملاحظات': 'وفّرت إصدارات Flutter القديمة (حتى v2.0.7، أبريل 2025) ملف `.ipa` قابلًا للتثبيت الجانبي، لكن لم يكن هناك قط إدراج على App Store، ولا يتضمن إصدار v3.0.0 الحالي أي ملف لـiOS.',
          },
          {
            'المنصة': 'Windows / macOS / Linux',
            'التوفر الحالي': 'غير متاح حاليًا',
            'ملاحظات': 'كانت توجد إصدارات سطح مكتب (`.zip`، `.AppImage`، `.dmg`) للإصدارات المبنية على Flutter حتى v2.0.7، لكن إعادة الكتابة بـReact Native (v3.0.0) لا توفّر حزم سطح مكتب. على مستخدمي سطح المكتب الباحثين عن عميل دردشة GGUF محلي النظر في Ollama أو LM Studio أو Jan AI بدلًا من ذلك.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'كم يكلّف Maid؟',
        content: [
          '**Maid مجاني للتنزيل والاستخدام، سواء للدردشة المحلية على الجهاز أو الدردشة عبر المزودين عن بُعد، وكوده المصدري متاح للجميع بموجب رخصة MIT.** لم يُعثر على أي عملية شراء داخل التطبيق أو اشتراك أو خطة مدفوعة في مستودع التطبيق أو ملاحظات الإصدار أو صفحة Google Play وقت المراجعة.',
          'التكاليف التي يتحملها مستخدم Maid فعليًا غير مباشرة: مساحة التخزين على الجهاز لملفات نماذج GGUF المنزَّلة (عادة عدة جيجابايتات لكل ملف)، وفي وضع المزودين عن بُعد، ما تفرضه Anthropic أو OpenAI أو Mistral أو DeepSeek أو Novita أو Ollama أو OrcaRouter كل على حدة مقابل استخدام واجهتها البرمجية بموجب حسابك الخاص لدى ذلك المزود — لا يضيف Maid نفسه أي هامش ربح أو اشتراك فوق تكاليف المزود تلك.',
        ],
        items: [
          '**التطبيق الأساسي:** مجاني، بلا اشتراك، مفتوح المصدر برخصة MIT.',
          '**الدردشة المحلية (نماذج GGUF على الجهاز):** مجانية — بلا رسوم لكل رسالة أو رمز (token)، لأن الاستدلال يعمل على جهازك نفسه.',
          '**الدردشة عبر المزودين عن بُعد:** استخدامها عبر Maid مجاني، لكنك تدفع ما يفرضه المزود (OpenAI أو Anthropic وغيرهما) بموجب حسابك ومفتاح API الخاصين بك.',
          '**نسخ احتياطي سحابي اختياري:** يدعم التطبيق التسجيل أو تسجيل الدخول لنسخ الإعدادات وسجل الدردشة احتياطيًا عبر Supabase؛ لم تجد هذه المراجعة أي رسوم منفصلة مرتبطة بهذه الميزة.',
          '**تكلفة التخزين:** ليست مالية لكنها حقيقية — يستهلك كل نموذج GGUF منزَّل عادة عدة جيجابايتات من تخزين الجهاز.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'ما ميزات Maid؟',
        content: [
          '**إلى جانب التقسيم الأساسي بين الدردشة المحلية والدردشة عن بُعد، يصف ملف README وملاحظات الإصدار في Maid مجموعة من الميزات التي أُضيفت على مدار سجل إصداراته.** من بينها:',
        ],
        items: [
          '**استدلال محلي وعن بُعد في تطبيق واحد.** التبديل بين دردشة GGUF بلا اتصال بالكامل عبر llama.cpp ومزودين سحابيين (Anthropic وOpenAI وOllama وMistral وDeepSeek وNovita وOrcaRouter) باستخدام بيانات الاعتماد الخاصة بك.',
          '**إدارة المحادثات.** إنشاء الدردشات وإعادة تسميتها وحذفها وتصديرها واستيرادها كملفات JSON.',
          '**موجّه نظام مخصص (system prompt).** ضبط موجّه نظام عام لتعديل سلوك المساعد ونبرته.',
          '**معلمات توليد قابلة للتعديل.** ضبط إعدادات مثل temperature وtop-p وtop-k وطول السياق لكل جلسة.',
          '**إخراج صوتي عبر تطبيق مصاحب.** يتكامل Maid مع [Maise](https://github.com/Mobile-Artificial-Intelligence/maise)، وهو محرك تحويل نص إلى كلام مستقل ومفتوح المصدر على Android من المنظمة نفسها على GitHub، لقراءة الردود بصوت مسموع.',
          '**نسخ احتياطي سحابي اختياري.** يمكن للمستخدمين التسجيل أو تسجيل الدخول لمزامنة الإعدادات وسجل الدردشة عبر Supabase؛ هذا اختياري وليس مطلوبًا لاستخدام التطبيق.',
          '**تصميم Material You.** سمات فاتحة وداكنة تتبع تفضيل نظام Android.',
          '**بلا تتبّع (telemetry) أو إعلانات،** وفقًا لملف README الخاص بالمشروع نفسه.',
        ],
        note: 'قد يختلف توفر الميزات حسب إصدار التطبيق لأن المشروع يصدر تحديثات متكررة. تحقق من سجل التغييرات داخل التطبيق أو [صفحة GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases) لمعرفة ما هو متاح في نسختك المثبتة، خاصة نظرًا لمدى التغيير بين سلسلة v2.x المبنية على Flutter وإعادة الكتابة بـReact Native في v3.0.0.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'ما الأجهزة التي تحتاجها لتشغيل Maid؟',
        content: [
          '**نموذج GGUF الذي تختاره، وليس التطبيق نفسه، هو ما يحدد الحد الأدنى الفعلي للأجهزة اللازمة للدردشة المحلية — كإرشاد عام لنماذج GGUF على الهواتف، يحتاج نموذج مكمَّم (quantized) بحجم 2 إلى 4 مليار معامل إلى نحو 3-4 GB من ذاكرة RAM الحرة، بينما يحتاج نموذج بحجم 7 إلى 8 مليار معامل إلى 6-8 GB أو أكثر.** هذا إرشاد قياسي لتحديد حجم نماذج اللغة المحلية، وليس معيار أداء (benchmark) خاصًا بـMaid؛ لم تقس PromptQuorum بشكل مستقل استخدام الذاكرة الدقيق لـMaid لكل نموذج.',
          'بما أن Maid يشغّل الاستدلال المحلي عبر llama.cpp، تنطبق الإرشادات العامة لأداء llama.cpp على Android: سيحمّل الجهاز الحديث بذاكرة RAM أكبر ومعالج (chipset) حديث نماذج أكبر ويشغّلها بارتياح أكبر مقارنة بهاتف أقدم أو محدود الذاكرة أو التخزين. إذا استخدمت وضع المزود عن بُعد بدلًا من الاستدلال المحلي، فإن متطلبات الأجهزة على الجهاز تكون طفيفة — إذ يعمل النموذج على خوادم المزود، ولا يحتاج هاتفك سوى اتصال إنترنت يعمل بشكل جيد.',
        ],
        items: [
          'النماذج الصغيرة (2-4 مليار معامل، مكمَّمة): قابلة للاستخدام على معظم هواتف Android الحديثة بذاكرة RAM حرة تبلغ 4 GB أو أكثر.',
          'النماذج متوسطة الحجم (7-8 مليار معامل، مكمَّمة): يُنصح بذاكرة RAM للجهاز تبلغ 8 GB أو أكثر لاستجابة مقبولة.',
          'التخزين: خصّص عدة جيجابايتات من مساحة التخزين الحرة لكل ملف نموذج GGUF منزَّل.',
          'وضع المزود عن بُعد: لا توجد متطلبات أجهزة محلية تُذكر باستثناء اتصال إنترنت يعمل بشكل جيد، لأن الاستدلال يعمل على بنية المزود التحتية.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Maid',
        items: [
          '**مستخدمو Android الذين يريدون دردشة محلية وسحابية في تطبيق مجاني واحد.** القدرة على التبديل بين استدلال GGUF بلا اتصال بالكامل وحساباتك الخاصة لدى مزودين مثل OpenAI أو Anthropic، ضمن عميل واحد مفتوح المصدر، هي أوضح ميزة تفرّد بها Maid.',
          '**المستخدمون الراغبون في تشغيل ملف GGUF دون قيود، لا قائمة نماذج منتقاة.** لأن التطبيق يحمّل أي نموذج GGUF عبر llama.cpp بدلًا من تقديم فهرس ثابت، فهو يناسب من لديهم بالفعل نموذج محدد في ذهنهم.',
          '**المطورون والمستخدمون الفضوليون تقنيًا المرتاحون للمشاريع مفتوحة المصدر.** يناسب المستودع العام على GitHub ومتتبع المشكلات وسجل الإصدارات النشط من هم على استعداد لقراءة ملاحظات الإصدار أو تسجيل مشكلة بدلًا من توقّع دعم عملاء مخصص.',
          '**المستخدمون الراغبون في فحص الكود أو تعديله بأنفسهم.** تسمح رخصة MIT بالتفريع والتعديل، وهو أمر مهم لمن يريد التحقق بدقة مما يفعله التطبيق قبل أن يودعه محادثات خاصة أو مفاتيح API لمزودين.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Maid',
        items: [
          '**مستخدمو iPhone وiPad وWindows وmacOS وLinux.** الإصدار الحالي 3.0.0 حصري لـAndroid؛ لا يوجد إدراج على App Store ولا إصدار سطح مكتب مدعوم. على مستخدمي هذه المنصات النظر في Private LLM أو PocketPal AI (Apple)، أو Ollama أو LM Studio أو Jan AI (سطح المكتب) بدلًا من ذلك.',
          '**المستخدمون الراغبون في تجربة موجَّهة بالكامل وبلا إعدادات.** الاختيار بين الوضع المحلي والوضع عن بُعد، واختيار حجم نموذج مناسب لجهازك، وإدارة مفاتيح API، كلها جزء من سير العمل؛ من يفضل أن يتخذ التطبيق هذه القرارات نيابة عنه قد يفضل تطبيقًا أكثر انتقائية مثل Loci أو Enclave AI.',
          '**المستخدمون الراغبون في تشغيل أكثر النماذج تطلبًا (70 مليار معامل فأكثر) محليًا.** لا تستطيع أجهزة الهواتف، حتى الرائدة منها على Android، تشغيل نماذج بهذا الحجم بشكل عملي على الجهاز — تحتاج هذه المهام إلى حاسوب مكتبي أو محطة عمل أو واجهة برمجة تطبيقات سحابية/مزود عن بُعد، بصرف النظر عن تطبيق الهاتف المستخدَم.',
          '**المستخدمون الذين يتوقعون دعمًا تجاريًا مخصصًا.** تتولى صيانة Maid منظمة مفتوحة المصدر على GitHub، وليست شركة ممولة بفريق دعم؛ من يحتاج أوقات استجابة مضمونة أو اتفاقية دعم على مستوى المؤسسات ينبغي أن يبحث عن بديل مدعوم تجاريًا.',
          '**المستخدمون الذين يحتاجون إلى الإصدار القديم متعدد المنصات.** على أي شخص يعتمد على دعم Maid السابق لـiOS أو Windows أو macOS أو Linux من إصدارات v2.x المبنية على Flutter أن يعلم أن هذه المنصات ليست جزءًا من الإصدار الحالي النشط الصيانة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Maid مقابل البدائل',
        itemHeadings: true,
        columns: ['التطبيق', 'الرخصة / التكلفة', 'المنصات', 'مرونة النماذج'],
        rows: [
          {
            'التطبيق': 'Maid',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر (MIT)',
            'المنصات': 'حصريًا لـAndroid (من v3.0.0)',
            'مرونة النماذج': 'أي ملف GGUF عبر llama.cpp، أو مزودون عن بُعد (Anthropic، OpenAI، Ollama، Mistral، DeepSeek، Novita، OrcaRouter) بمفتاح API خاص بك',
          },
          {
            'التطبيق': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر (MIT)',
            'المنصات': 'iPhone/iPad، Android',
            'مرونة النماذج': 'قائمة تنزيل سريع بالإضافة إلى أي ملف GGUF من Hugging Face',
          },
          {
            'التطبيق': '[Private LLM](/power-local-llm/private-llm-review)',
            'الرخصة / التكلفة': 'مدفوع، شراء لمرة واحدة؛ مغلق المصدر',
            'المنصات': 'iPhone/iPad/Mac (حصريًا لـApple)',
            'مرونة النماذج': '140+ نموذجًا، بصيغتَي تكميم OmniQuant وGPTQ',
          },
          {
            'التطبيق': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'الرخصة / التكلفة': 'مجاني مع خطة مدفوعة؛ مغلق المصدر',
            'المنصات': 'iPhone/iPad/Mac (حصريًا لـApple)',
            'مرونة النماذج': 'قائمة منتقاة من نماذج الجهاز؛ تكامل مع Siri وShortcuts',
          },
          {
            'التطبيق': 'ChatterUI',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر (AGPL-3.0)',
            'المنصات': 'Android (بناء من الكود المصدري)',
            'مرونة النماذج': 'يشغّل ملفات GGUF على الجهاز عبر llama.cpp، أو يتصل بواجهات برمجة تطبيقات عن بُعد؛ يدعم Character Card v2',
          },
          {
            'التطبيق': 'RikkaHub',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر',
            'المنصات': 'Android',
            'مرونة النماذج': 'عميل متعدد المزودين (واجهات متوافقة مع OpenAI/Google/Anthropic)؛ تصميم Material You',
          },
          {
            'التطبيق': 'AnythingLLM Mobile',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر',
            'المنصات': 'iPhone/iPad، Android',
            'مرونة النماذج': 'استدلال على الجهاز، اتصال بنسخة AnythingLLM مستضافة ذاتيًا، أو أي مزود متوافق مع OpenAI',
          },
        ],
        note: 'أُزيل LLM Farm، وهو تطبيق دردشة GGUF مفتوح المصدر كان شائعًا على iOS، من App Store وظهر بوصفه "غير متاح مؤقتًا" في مستودعه على GitHub وقت المراجعة — ولهذا استُبعد من التوصيات النشطة أعلاه. أما Layla، وهو تطبيق مساعد آخر يعمل على الجهاز، فقد أُزيلت منه، بحسب ما أُفيد، خطته المجانية "Layla Lite" من Google Play؛ تحقق من التوفر الحالي مباشرة عبر [layla-network.ai](https://www.layla-network.ai) قبل افتراض إمكانية تثبيته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Maid مجاني؟',
            a: 'نعم. Maid مجاني للتنزيل والاستخدام، سواء للدردشة المحلية على الجهاز أو الدردشة عبر المزودين عن بُعد، والتطبيق مفتوح المصدر برخصة MIT. لم يُعثر على أي خطة مدفوعة أو شراء داخل التطبيق في التطبيق أو وثائقه وقت المراجعة؛ ما زال وضع المزود عن بُعد يُفوتَر عبر حسابك الخاص لدى ذلك المزود.',
          },
          {
            q: 'من طوّر Maid؟',
            a: 'أنشأ Maid المطور Dane Madsen، الذي بدأ المشروع في أكتوبر 2023 كتطبيق Flutter متعدد المنصات. يُصان اليوم تحت منظمة Mobile-Artificial-Intelligence على GitHub بدلًا من كونه مشروعًا شخصيًا.',
          },
          {
            q: 'هل Maid مفتوح المصدر؟',
            a: 'نعم، الكود المصدري الكامل منشور على [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) بموجب رخصة MIT، وهي رخصة متساهلة تسمح بالاستخدام والتعديل وإعادة التوزيع الحر.',
          },
          {
            q: 'هل يعمل Maid على iPhone أو Windows أو Mac؟',
            a: 'لا. منذ الإصدار 3.0.0 (مارس 2026)، أصبح Maid حصريًا لـAndroid. وفّرت الإصدارات السابقة المبنية على Flutter، حتى v2.0.7 (أبريل 2025)، إصدارات لـiOS (تثبيت جانبي فقط، دون إدراج على App Store) وWindows وmacOS وLinux، لكن هذه المنصات لا تدعمها النسخة الحالية النشطة الصيانة.',
          },
          {
            q: 'ما النماذج التي يستطيع Maid تشغيلها؟',
            a: 'بالنسبة للدردشة المحلية، يستطيع Maid تشغيل أي نموذج بصيغة GGUF عبر llama.cpp — لا توجد قائمة منتقاة ثابتة. يمكنه أيضًا الاتصال بمزودين عن بُعد، منهم Anthropic وOpenAI وOllama وMistral وDeepSeek وNovita وOrcaRouter، باستخدام مفتاح API أو عنوان خادم توفّره أنت بنفسك.',
          },
          {
            q: 'كم من ذاكرة RAM يحتاجها Maid للنماذج المحلية؟',
            a: 'يعتمد ذلك على نموذج GGUF الذي تختاره، وليس متطلبًا ثابتًا للتطبيق. كإرشاد عام، تحتاج النماذج المكمَّمة بحجم 2-4 مليار معامل عادة إلى 3-4 GB من ذاكرة RAM الحرة، وتحتاج النماذج بحجم 7-8 مليار معامل عادة إلى 8 GB أو أكثر. يمكن للأجهزة ذات ذاكرة RAM الأكبر تشغيل نماذج أكبر وأكثر قدرة محليًا.',
          },
          {
            q: 'هل يتطلب Maid اتصالًا بالإنترنت؟',
            a: 'لا حاجة إلى اتصال إنترنت للدردشة المحلية بعد تنزيل نموذج GGUF — يعمل الاستدلال بالكامل على الجهاز عبر llama.cpp. يلزم اتصال إنترنت لتنزيل النماذج أول مرة، ولاستخدام وضع المزود عن بُعد، ولميزة النسخ الاحتياطي السحابي الاختيارية المبنية على Supabase.',
          },
          {
            q: 'هل ما زال Maid يُصان بنشاط؟',
            a: 'وقت هذه المراجعة، نعم: يُظهر مستودع GitHub commits وطلبات دمج مدموجة حتى أوائل سبتمبر 2026، من بينها إصلاح لنظام الدردشة وإضافة OrcaRouter كمزود عن بُعد. تتولى صيانته منظمة مفتوحة المصدر على GitHub وليست شركة ممولة، لذا تحقق بنفسك من نشاط المستودع الأخير قبل الاعتماد عليه في أي أمر حساس زمنيًا.',
          },
          {
            q: 'ماذا حدث لدعم Maid لـiOS وWindows وMac؟',
            a: 'كان Maid في الأصل تطبيق Flutter متعدد المنصات؛ وفّرت الإصدارات حتى v2.0.7 (أبريل 2025)، إلى جانب Android، إصدارات قابلة للتثبيت لـiOS (تثبيت جانبي) وWindows وmacOS وLinux. أعاد الإصدار 3.0.0 (مارس 2026) كتابة التطبيق بـReact Native وقصر المشروع على Android فقط — لم تعد إصدارات سطح المكتب وiOS جزءًا من سلسلة الإصدارات الحالية.',
          },
          {
            q: 'كيف يُقارن Maid بـPocketPal AI أو Private LLM؟',
            a: 'Maid مجاني ومفتوح المصدر وحصري لـAndroid، وغير معتاد كونه يدعم استدلال GGUF المحلي بالكامل ومزودي السحابة عن بُعد في تطبيق واحد. PocketPal AI مجاني ومفتوح المصدر أيضًا، لكنه يغطي iPhone/iPad وAndroid باستدلال GGUF محلي فقط. أما Private LLM فتطبيق مدفوع ومغلق المصدر وحصري لـApple بفهرس نماذج مدمج أكبر. اختر Maid إذا كنت تستخدم Android وتريد خيارات محلية وسحابية في عميل واحد؛ اختر PocketPal AI إذا احتجت دعم iOS بنموذج محلي مجاني ومفتوح المصدر مشابه؛ اختر Private LLM إذا فضّلت تجربة مدفوعة أكثر صقلًا وحصرية لـApple. راجع جدول المقارنة أعلاه لمزيد من التفاصيل.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Maid تطبيق Android مجاني حقًا ومفتوح المصدر حقًا، بمزيج غير معتاد لهذه الفئة: يشغّل نماذج GGUF محلية عبر llama.cpp ويتيح لك الاتصال بمزودين عن بُعد مثل OpenAI أو Anthropic في العميل نفسه. تأتي هذه المرونة مع مقايضات حقيقية يستحق معرفتها قبل التثبيت. مرّ التطبيق بتغيير معماري كبير في 2026 — إعادة كتابة من Flutter متعدد المنصات إلى React Native حصري لـAndroid — أدى إلى إلغاء دعم iOS وWindows وmacOS وLinux الذي كان متاحًا في الإصدار القديم. تتولى صيانته منظمة مفتوحة المصدر على GitHub وليست شركة، مع تطوير نشط وقت المراجعة لكن دون ضمان استمراره بوتيرة معينة. اختر Maid إذا كنت مستخدم Android تريد عميل دردشة مجاني ومفتوح وبنمط مزدوج (محلي وعن بُعد)، ولا تمانع مشروعًا يديره مجتمع المطورين. اختر تطبيقًا آخر — PocketPal AI أو Private LLM لأجهزة Apple، أو Ollama أو LM Studio أو Jan AI لسطح المكتب — إذا احتجت منصة لا يغطيها إصدار Maid الحالي.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Maid على GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) — الكود المصدري والرخصة (MIT) وملف README وسجل الإصدارات المُشار إليها في هذه المراجعة.',
          '[صفحة إصدارات Maid](https://github.com/Mobile-Artificial-Intelligence/maid/releases) — سجل الإصدارات وسجلات التغييرات وحزم البناء من v2.0.4 إلى v3.0.0.',
          '[سجل commits لمستودع Maid](https://github.com/Mobile-Artificial-Intelligence/maid/commits/main) — نشاط commits وطلبات الدمج الأخيرة المستخدَم لتقييم حالة الصيانة.',
          '[Maid على Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) — التوفر على Android.',
          '[danemadsen/maid على GitHub](https://github.com/danemadsen/maid) — مستودع المؤسس الأصلي، وهو الآن نسخة متفرعة من مستودع المنظمة الحالي.',
          '[Maise على GitHub](https://github.com/Mobile-Artificial-Intelligence/maise) — محرك تحويل النص إلى كلام على Android المصاحب لـMaid ومفتوح المصدر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل تطبيقات النماذج اللغوية المحلية لأندرويد في 2026](/power-local-llm/best-local-llm-apps-android-2026) — قائمة بتطبيقات Android، تشمل Maid وMLC Chat وPocketPal AI.',
          '[مراجعة PocketPal AI](/power-local-llm/pocketpal-ai-review) — بديل مجاني ومفتوح المصدر يغطي أيضًا iPhone وiPad.',
          '[مراجعة Private LLM](/power-local-llm/private-llm-review) — بديل مدفوع ومغلق المصدر وحصري لـApple بفهرس نماذج مدمج أكبر.',
          '[مراجعة Enclave AI](/power-local-llm/enclave-ai-review) — بديل مخصص لأجهزة Apple فقط مع أتمتة عبر Siri وShortcuts.',
          '[أفضل نماذج LLM للهواتف في 2026: Phi-4 Mini مقابل Gemma 4 مقابل SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — المقال المكمّل على مستوى النماذج لاختيار ملف GGUF المناسب فعليًا لهاتفك.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة Maid (2026): تطبيق دردشة مفتوح المصدر لنماذج اللغة المحلية على Android',
      description:
        'مراجعة Maid: تطبيق Android مجاني ومفتوح المصدر (MIT) يشغّل نماذج GGUF محليًا عبر llama.cpp أو يتصل بمزودي الذكاء الاصطناعي. المنصات والتاريخ والفئة المستهدفة.',
      url: 'https://promptquorum.com/ar/power-local-llm/maid-review',
      inLanguage: 'ar',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مستخدمو Android الذين يقيّمون تطبيقات دردشة الذكاء الاصطناعي المحلية والمتعددة المزودين، المجانية ومفتوحة المصدر' },
      about: [
        { '@type': 'Thing', name: 'Maid' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'نموذج لغوي محلي' },
        { '@type': 'Thing', name: 'برمجيات مفتوحة المصدر' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/maid-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة Maid (2026)', item: 'https://promptquorum.com/ar/power-local-llm/maid-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/maid-review-hero-zh.webp',
    title: 'Maid 评测(2026):Android 开源本地 LLM 聊天应用',
    seoTitle: 'Maid 评测 2026:开源 Android LLM 应用',
    intro:
      'Maid 是一款免费开源(MIT 许可证)的聊天应用,可通过 [llama.cpp](https://github.com/ggml-org/llama.cpp) 在本地运行 GGUF 格式的语言模型,也可以使用你自己的 API 密钥连接 Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita 和 OrcaRouter 等远程提供商。该项目由澳大利亚开发者 Dane Madsen 于 2023 年以跨平台 Flutter 应用的形式启动,但在 3.0.0 版(2026 年 3 月)中代码被重写为 React Native,如今只面向 Android 分发——旧版 Flutter 中存在的桌面版和 iOS 版已不再是当前版本的一部分。本评测将说明 Maid 目前能做什么、重写后发生了哪些变化、其真实的平台与硬件要求、定价情况(免费,无付费档位),以及相较商业替代品,它适合谁——不适合谁。',
    metaDescription:
      'Maid 评测:一款免费开源(MIT)的 Android 应用,可通过 llama.cpp 在本地运行 GGUF 模型,或连接 AI 提供商。涵盖平台、历史与适用人群。',
    twitterDescription:
      'Maid 评测 2026:通过 llama.cpp 进行本地 GGUF 聊天的免费开源 Android 应用,2026 年重写后仅支持 Android。有哪些变化,适合谁。',
    audience:
      '希望使用免费开源的本地或多提供商 AI 聊天应用、并能接受社区维护的纯 Android 项目的 Android 用户。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Maid 评测',
    targetKeywords: [
      'maid ai 评测',
      'maid app android',
      'maid llama.cpp app',
      'maid 开源 llm 应用',
      'maid vs pocketpal ai',
      'android 免费本地 llm 应用',
      'android gguf 聊天应用',
      'mobile artificial intelligence maid',
    ],
    current_models_mentioned: ['通过 llama.cpp 运行的 GGUF 模型'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Maid 是一款免费开源(MIT 许可证)的 Android 应用,可通过 llama.cpp 在本地运行 GGUF 语言模型,还能使用你自己的 API 密钥连接 Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita 和 OrcaRouter 等远程提供商。**开发方是由 Dane Madsen 创立的 [Mobile-Artificial-Intelligence GitHub 组织](https://github.com/Mobile-Artificial-Intelligence/maid),他于 2023 年 10 月启动了该项目。该应用最初使用 Flutter 构建,并在 2.0.7 版(2025 年 4 月)之前一直面向 Android、iOS(侧载)、Windows、macOS 和 Linux 发布;3.0.0 版(2026 年 3 月)将应用重写为 React Native,并将分发范围收窄至仅限 Android——目前没有 iOS、Windows、macOS 或 Linux 版本。该项目仍在积极开发中,截至 2026 年 9 月仍有提交(commit)和已合并的拉取请求(pull request)。',
    quickAnswerTop: {
      zh: {
        question: '在 Android 上进行本地 AI 聊天,值得安装 Maid 吗?',
        answer:
          '值得,如果你使用 Android,并希望有一款免费开源的应用,能够通过 llama.cpp 在设备上完全运行 GGUF 模型,或连接你在 OpenAI、Anthropic、Ollama 等提供商处已有的账户。如果你使用 iPhone、Mac、Windows 或 Linux,则不适合——当前的 3.0.0 版在从 Flutter 重写为 React Native 时取消了这些平台,如今只提供 Android 版本。',
        bullets: [
          '基于 MIT 许可证免费开源——无需订阅,源代码公开在 [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)。',
          '自 3.0.0 版(2026 年 3 月)起仅支持 Android;可在 [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) 获取,也可从 [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases) 直接下载 APK。',
          '可通过 llama.cpp 在本地运行 GGUF 模型,或使用自己的 API 密钥连接 Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita 和 OrcaRouter。',
          '由开发者 Dane Madsen 于 2023 年 10 月以跨平台 Flutter 应用的形式启动;在 v3.0.0 中被重写为 React Native,过程中取消了 iOS、Windows、macOS 和 Linux 版本。',
          '评测时仍在积极维护——截至 2026 年 9 月初仍有提交和已合并的拉取请求,GitHub 上有 10 个未解决的 issue 和 283 次 fork。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Maid 是什么?', anchor: 'what-is-maid' },
      { label: 'Maid 是谁开发的?重写后发生了什么变化?', anchor: 'history-and-developer' },
      { label: '如何开始使用 Maid', anchor: 'getting-started' },
      { label: 'Maid 支持哪些模型?', anchor: 'models-supported' },
      { label: 'Maid 支持 iPhone、Windows 或 Mac 吗?', anchor: 'platform-availability' },
      { label: 'Maid 的价格是多少?', anchor: 'pricing' },
      { label: 'Maid 有哪些功能?', anchor: 'key-features' },
      { label: '需要什么硬件?', anchor: 'hardware-requirements' },
      { label: 'Maid 适合谁使用', anchor: 'who-should-use' },
      { label: 'Maid 不适合谁使用', anchor: 'who-should-not-use' },
      { label: 'Maid 与其他替代应用对比', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
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
            text: 'Maid 是一款免费、基于 MIT 许可证的开源 Android 应用,可通过 llama.cpp 在本地运行 GGUF 语言模型,或使用你自己的 API 密钥连接远程 AI 提供商,由开发者 Dane Madsen 创立的 Mobile-Artificial-Intelligence GitHub 组织维护。',
          },
          {
            type: 'plain-terms',
            text: '这是一款你安装在 Android 手机上、用来与 AI 模型聊天的应用——该模型要么运行在你自己的设备上,要么通过你在 OpenAI 或 Anthropic 等提供商处已有的账户运行。代码在 GitHub 上公开,应用本身免费。它以前也能在 iPhone、Windows、Mac 和 Linux 上运行,但当前版本取消了这些平台。',
          },
        ],
        items: [
          '免费开源(MIT 许可证);源代码和 issue 跟踪均公开于 [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)。',
          '由 Dane Madsen 于 2023 年 10 月创立,最初为跨平台 Flutter 应用;如今由 Mobile-Artificial-Intelligence 组织维护。',
          '可通过 llama.cpp 在设备上完全运行 GGUF 模型,或使用自己的 API 密钥连接 Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita 和 OrcaRouter。',
          '3.0.0 版(2026 年 3 月)将应用重写为 React Native,并限制为仅支持 Android——旧版 Flutter 还面向 iOS(侧载)、Windows、macOS 和 Linux 发布,但这些版本已不再是当前应用的一部分。',
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) 获取,也可从 [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases) 直接下载 APK/AAB。',
          '评测时在应用或其文档中未发现任何付费档位;基础应用及其本地聊天功能均为免费。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于公开的 [GitHub 仓库](https://github.com/Mobile-Artificial-Intelligence/maid)、其 README、发布历史以及 Google Play 页面,核查时间为 2026 年 9 月。PromptQuorum 并未针对本评测对 Maid 进行独立的实机基准测试——以下性能数据是本地 LLM 的一般硬件参考,而非针对该应用的具体实测。',
          },
        ],
      },
      overview: {
        id: 'what-is-maid',
        title: 'Maid 是什么?',
        content: [
          '**Maid 是一款 Android 应用,既可以通过 [llama.cpp](https://github.com/ggml-org/llama.cpp) 下载并在设备本地运行 GGUF 格式的开放权重语言模型,也可以使用你自行提供的 API 密钥,将聊天请求发送给远程提供商。**该应用采用 [MIT 许可证](https://github.com/Mobile-Artificial-Intelligence/maid/blob/main/LICENSE),意味着完整源代码是公开的,可以自由查看、fork 或修改。',
          '这种双模式是该应用的核心特征:它并非只是一个本地推理客户端。同一个界面既可以完全离线运行一个 GGUF 文件,也可以通过你自己的账户,将对话转发到 OpenAI 或 Anthropic 等云端提供商,或转发到你自己网络中自托管的 [Ollama](https://ollama.com) 服务器。根据其 README,该项目将自身描述为"与 Huggingface、Meta(Facebook)、MistralAi、OpenAI、Google、Microsoft 或任何其他提供与本应用兼容模型的公司均无关联"。',
        ],
        note: 'GGUF 是一种文件格式,用于封装经过量化的开放权重语言模型,使其能够通过 llama.cpp 等运行时,在消费级硬件上高效运行,而无需每次响应都调用云端 API。',
      },
      history: {
        id: 'history-and-developer',
        title: 'Maid 是谁开发的?重写后发生了什么变化?',
        content: [
          '**Maid 由 Dane Madsen 创建,他于 2023 年 10 月启动该项目,作为一款用于运行 GGUF 和 llama.cpp 模型的跨平台 Flutter 应用。**该项目目前托管在 [Mobile-Artificial-Intelligence GitHub 组织](https://github.com/Mobile-Artificial-Intelligence/maid)下,而非 Madsen 的个人账户下;他最初的仓库 [danemadsen/maid](https://github.com/danemadsen/maid) 目前在 GitHub 上被列为该组织仓库的一个 fork,其描述仍写着"跨平台 Flutter 应用",尽管这已不再与当前代码相符。',
          '版本历史显示出明显的分界。截至 **v2.0.7(2025 年 4 月)**的各版本均以 Flutter 构建,并提供可安装包,涵盖 Android(APK/AAB)、iOS(可侧载的 `.ipa` 文件,未在 App Store 上架)、Linux(`.zip`/`.AppImage`)、macOS(适用于 Intel 与 Apple 芯片的 `.dmg`)、Windows(`.zip`),甚至还有一个 Web 版本。**3.0.0 版(发布于 2026 年 3 月 10 日)**是一次使用 React Native 的全面重写,该版本发布内容中只包含 Android 安装包(APK 和 AAB 两种变体)——没有任何 iOS、Windows、macOS 或 Linux 文件。该版本的更新日志列出了视觉模型支持、系统级文本转语音、系统级语音识别、推理模型支持、Markdown 渲染,以及一项被发行说明描述为 Google Play 要求的点赞/点踩举报功能。',
          '重写之后开发仍在继续:该仓库显示出截至 2026 年 9 月初的已合并拉取请求和提交,其中包括对聊天系统的一处修复,以及新增 [OrcaRouter](https://www.orcarouter.ai) 作为远程提供商。评测时,该仓库拥有约 2,700 颗星标、283 次 fork 以及 10 个未解决的 issue——这证明该项目正被积极使用和维护,不过它是由单一组织维护的开源项目,而非拥有支持团队的资金雄厚企业。',
        ],
        items: [
          '创始人:Dane Madsen(GitHub:[danemadsen](https://github.com/danemadsen)),于 2023 年 10 月启动该项目。',
          '目前维护方:GitHub 组织 [Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence);Madsen 的个人仓库如今是该组织仓库的一个 fork。',
          '许可证:MIT——宽松的开源许可证,可自由使用、fork 和修改。',
          '重大架构变化:Flutter(跨平台,截至 v2.0.7,2025 年 4 月)→ React Native,仅限 Android(自 v3.0.0 起,2026 年 3 月)。',
          '评测时 GitHub 星标约 2,700,fork 283 次,未解决 issue 10 个,提交和已合并拉取请求持续到 2026 年 9 月。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用 Maid',
        content: [
          '**安装当前的 Android 版本后,只需几个步骤即可在 Maid 中开始聊天。**设备本地聊天不需要强制注册账户;可选的登录仅用于应用的云备份功能。',
        ],
        numberedItems: [
          {
            title: '在 Android 上安装应用',
            whyItMatters: '从 [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) 下载 Maid,如果你更倾向于侧载,也可以直接从 [GitHub Releases 页面](https://github.com/Mobile-Artificial-Intelligence/maid/releases) 安装 APK。目前没有 iOS、Windows、macOS 或 Linux 版本可用。',
          },
          {
            title: '选择本地模式或远程模式',
            whyItMatters: '决定是要下载一个 GGUF 模型并通过 llama.cpp 在设备上完全运行,还是使用你已有的 API 密钥或服务器地址,将应用连接到远程提供商(Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita 或 OrcaRouter)。',
          },
          {
            title: '下载或导入模型(本地模式)',
            whyItMatters: '对于设备端聊天,下载一个与手机内存容量相匹配的 GGUF 模型(参见下方硬件部分),或从本地存储或 [Hugging Face](https://huggingface.co) 加载自定义 GGUF 文件。',
          },
          {
            title: '开始聊天',
            whyItMatters: '加载本地模型或配置好远程提供商后,即可开始对话。聊天记录可以在应用内创建、重命名、删除,并以 JSON 文件的形式导出或导入。',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Maid 支持哪些模型?',
        itemHeadings: true,
        columns: ['访问模式', '连接对象', '备注'],
        rows: [
          {
            '访问模式': '本地(设备端)',
            '连接对象': '通过 [llama.cpp](https://github.com/ggml-org/llama.cpp) 加载的任意 GGUF 格式模型',
            '备注': '没有固定的精选模型列表——应用会运行你下载或导入的任何 GGUF 文件,包括来自 Hugging Face 的文件。',
          },
          {
            '访问模式': '远程提供商',
            '连接对象': 'Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、[OrcaRouter](https://www.orcarouter.ai)',
            '备注': '需要你自己的账户和 API 密钥(对于 Ollama 则需要你自己的服务器地址);Maid 本身不打包或转售对这些提供商的访问权限。',
          },
        ],
        note: '由于 Maid 可以加载任意 GGUF 文件,其实际的模型支持范围取决于与 llama.cpp 的兼容性,而不是应用精选的候选列表——这与 PocketPal AI 或 Private LLM 等应用不同,后者在支持自定义文件的同时,还提供特定的快速下载目录。',
      },
      platform: {
        id: 'platform-availability',
        title: 'Maid 支持 iPhone、Windows 或 Mac 吗?',
        itemHeadings: true,
        columns: ['平台', '当前可用性', '备注'],
        rows: [
          {
            '平台': 'Android',
            '当前可用性': '现已支持',
            '备注': '通过 [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid) 分发,也可从 [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases) 直接获取 APK/AAB。这是当前 3.0.0 版唯一支持的平台。',
          },
          {
            '平台': 'iPhone / iPad',
            '当前可用性': '目前不支持',
            '备注': '旧版 Flutter 版本(截至 v2.0.7,2025 年 4 月)曾提供可侧载的 `.ipa` 文件,但从未在 App Store 上架,当前 v3.0.0 版本也未附带任何 iOS 文件。',
          },
          {
            '平台': 'Windows / macOS / Linux',
            '当前可用性': '目前不支持',
            '备注': '基于 Flutter 的版本(截至 v2.0.7)曾提供桌面版安装包(`.zip`、`.AppImage`、`.dmg`),但 React Native 重写版(v3.0.0)不再提供桌面版安装包。寻求本地 GGUF 聊天客户端的桌面用户应改为考虑 Ollama、LM Studio 或 Jan AI。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Maid 的价格是多少?',
        content: [
          '**Maid 下载和使用均免费,无论是设备端本地聊天还是通过远程提供商聊天,其源代码在 MIT 许可证下公开。**评测时,在该应用的仓库、发行说明或 Google Play 页面中均未发现任何应用内购买、订阅或付费档位。',
          'Maid 用户实际承担的成本是间接的:下载的 GGUF 模型文件所占用的设备存储空间(通常每个文件占用数 GB),以及在使用远程提供商模式时,Anthropic、OpenAI、Mistral、DeepSeek、Novita、Ollama 或 OrcaRouter 各自针对你在其账户下的 API 使用单独收取的费用——Maid 本身不会在这些提供商成本之上加收任何加价或订阅费。',
        ],
        items: [
          '**基础应用:** 免费,无需订阅,基于 MIT 许可证的开源软件。',
          '**本地聊天(设备端 GGUF 模型):** 免费——由于推理运行在你自己的设备上,不按消息或 token 计费。',
          '**远程提供商聊天:** 通过 Maid 使用本身免费,但你需要按照自己账户和 API 密钥下的提供商(OpenAI、Anthropic 等)收费标准付费。',
          '**可选云备份:** 应用支持注册或登录,以便通过 Supabase 备份设置和聊天记录;本评测未发现该功能有单独收费。',
          '**存储成本:** 并非货币成本,但真实存在——每个下载的 GGUF 模型通常会占用设备数 GB 的存储空间。',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Maid 有哪些功能?',
        content: [
          '**除了本地/远程聊天这一基本区分外,Maid 的 README 和发行说明还描述了一系列在版本迭代过程中添加的功能。**其中包括:',
        ],
        items: [
          '**一个应用同时支持本地与远程推理。** 可以在通过 llama.cpp 完全离线运行的 GGUF 聊天,与使用你自己凭证的云端提供商(Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouter)之间切换。',
          '**对话管理。** 可以创建、重命名、删除聊天记录,并以 JSON 文件形式导出和导入。',
          '**自定义系统提示词。** 可设置全局系统提示词,以调整助手的行为和语气。',
          '**可调节的生成参数。** 可按会话调整 temperature、top-p、top-k 和上下文长度等设置。',
          '**通过配套应用实现语音输出。** Maid 可与 [Maise](https://github.com/Mobile-Artificial-Intelligence/maise) 配合使用——后者是同一 GitHub 组织开发的一款独立的开源 Android 语音合成引擎——用于朗读回复内容。',
          '**可选云备份。** 用户可以注册或登录,通过 Supabase 同步设置和聊天记录;此为可选功能,并非使用该应用的必需条件。',
          '**Material You 主题设计。** 浅色和深色主题会跟随 Android 系统偏好设置切换。',
          '**无遥测(telemetry)、无广告,** 这是项目自身 README 中的说明。',
        ],
        note: '由于该项目发布更新较为频繁,功能可用性可能因应用版本而异。请查看应用内更新日志或 [GitHub Releases 页面](https://github.com/Mobile-Artificial-Intelligence/maid/releases),了解你所安装版本中实际可用的功能——尤其是考虑到基于 Flutter 的 v2.x 系列与 React Native 重写版 v3.0.0 之间的差异之大。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '运行 Maid 需要什么硬件?',
        content: [
          '**决定本地聊天真实硬件门槛的是你所选择的 GGUF 模型,而非应用本身——作为手机上运行 GGUF 模型的一般参考,经过量化的 2-4B 参数模型大约需要 3-4 GB 的可用内存,而 7-8B 参数模型则需要 6-8 GB 或更多。**这是本地 LLM 的通用规格参考,而非针对 Maid 的专门基准测试;PromptQuorum 并未独立测量 Maid 针对每个模型的确切内存占用。',
          '由于 Maid 通过 llama.cpp 执行本地推理,因此适用于 Android 上 llama.cpp 的一般性能参考:内存更大、芯片更新的新款设备,在加载和运行较大模型时会比内存或存储受限的旧款手机更加顺畅。如果你使用远程提供商模式而非本地推理,那么设备端硬件要求极低——模型运行在提供商的服务器上,你的手机只需要一个能正常工作的互联网连接即可。',
        ],
        items: [
          '小型模型(2-4B 参数,经过量化):在大多数配备 4 GB 以上可用内存的近期 Android 手机上可用。',
          '中型模型(7-8B 参数,经过量化):建议设备内存达到 8 GB 或以上,以获得可接受的响应速度。',
          '存储空间:每个下载的 GGUF 模型文件应预留数 GB 的可用存储空间。',
          '远程提供商模式:除了需要一个能正常工作的互联网连接外,几乎没有值得一提的本地硬件要求,因为推理运行在提供商的基础设施上。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Maid 适合谁使用',
        items: [
          '**希望在一款免费应用中同时使用本地聊天和云端聊天的 Android 用户。**能够在一个开源客户端中,于完全离线的 GGUF 推理与你在 OpenAI、Anthropic 等提供商处的自有账户之间切换,是 Maid 最明显的差异化优势。',
          '**希望运行不受限制的 GGUF 文件、而非精选模型列表的用户。**由于该应用是通过 llama.cpp 加载任意 GGUF 模型,而不是提供固定目录,因此适合那些已经心中有明确模型选择的用户。',
          '**熟悉开源项目、愿意接受相应体验的开发者和技术爱好者。**公开的 GitHub 仓库、issue 跟踪系统以及活跃的发布历史,适合那些愿意阅读发行说明或提交 issue、而不是期待专属客户支持的用户。',
          '**希望自行检查或修改代码的用户。**MIT 许可证允许 fork 和修改,这对于希望在信任该应用处理私密对话或提供商 API 密钥之前、准确了解其行为的用户来说非常重要。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Maid 不适合谁使用',
        items: [
          '**iPhone、iPad、Windows、macOS 或 Linux 用户。**当前 3.0.0 版仅支持 Android;既没有 App Store 上架,也没有受支持的桌面版本。这些平台的用户应改为考虑 Private LLM 或 PocketPal AI(Apple 平台),或 Ollama、LM Studio、Jan AI(桌面平台)。',
          '**希望获得完全引导式、无需配置体验的用户。**在本地模式与远程模式之间选择、为自己的设备选择合适的模型大小、管理 API 密钥,都是使用流程的一部分;如果更希望由应用来做这些决定,可能更适合 Loci 或 Enclave AI 这类更加精心策划的应用。',
          '**希望在本地运行最苛刻模型(700 亿参数以上)的用户。**即便是旗舰级 Android 设备,其硬件也无法实际在设备端运行这种规模的模型——无论使用哪款移动应用,这类工作负载都需要台式机、工作站或云端 API/远程提供商。',
          '**期待专属商业支持的用户。**Maid 由一个开源 GitHub 组织维护,而非拥有支持团队的资金雄厚企业;需要有保障的响应时间或企业级支持协议的用户,应寻求有商业支持的替代方案。',
          '**需要旧版跨平台构建的用户。**任何依赖 Maid 此前基于 Flutter 的 v2.x 版本所提供的 iOS、Windows、macOS 或 Linux 支持的用户,都应了解这些平台并不属于当前积极维护的版本。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Maid 与其他替代应用对比',
        itemHeadings: true,
        columns: ['应用', '许可证 / 费用', '支持平台', '模型灵活性'],
        rows: [
          {
            '应用': 'Maid',
            '许可证 / 费用': '免费,开源(MIT)',
            '支持平台': '仅限 Android(自 v3.0.0 起)',
            '模型灵活性': '通过 llama.cpp 运行任意 GGUF 文件,或使用自己的 API 密钥连接远程提供商(Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita、OrcaRouter)',
          },
          {
            '应用': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            '许可证 / 费用': '免费,开源(MIT)',
            '支持平台': 'iPhone/iPad、Android',
            '模型灵活性': '快速下载列表,外加来自 Hugging Face 的任意 GGUF 文件',
          },
          {
            '应用': '[Private LLM](/power-local-llm/private-llm-review)',
            '许可证 / 费用': '付费,一次性购买;闭源',
            '支持平台': 'iPhone/iPad/Mac(仅限 Apple)',
            '模型灵活性': '140 多种模型,支持 OmniQuant 和 GPTQ 量化格式',
          },
          {
            '应用': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            '许可证 / 费用': '免费+付费档位;闭源',
            '支持平台': 'iPhone/iPad/Mac(仅限 Apple)',
            '模型灵活性': '精选的设备端模型列表;集成 Siri 和 Shortcuts',
          },
          {
            '应用': 'ChatterUI',
            '许可证 / 费用': '免费,开源(AGPL-3.0)',
            '支持平台': 'Android(需从源码构建)',
            '模型灵活性': '通过 llama.cpp 在设备端运行 GGUF 文件,或连接远程 API;支持 Character Card v2',
          },
          {
            '应用': 'RikkaHub',
            '许可证 / 费用': '免费,开源',
            '支持平台': 'Android',
            '模型灵活性': '多提供商客户端(兼容 OpenAI/Google/Anthropic 的 API);Material You 设计',
          },
          {
            '应用': 'AnythingLLM Mobile',
            '许可证 / 费用': '免费,开源',
            '支持平台': 'iPhone/iPad、Android',
            '模型灵活性': '设备端推理、连接自托管的 AnythingLLM 实例,或任意兼容 OpenAI 的提供商',
          },
        ],
        note: 'LLM Farm 曾是一款颇受欢迎的开源 iOS GGUF 聊天应用,但在评测时已从 App Store 下架,并在其自身的 GitHub 仓库中被标记为"暂时不可用"——因此上文的活跃推荐中未将其列入。另一款设备端助手应用 Layla,据报道其免费的"Layla Lite"档位已从 Google Play 下架;在假定其可安装之前,请直接前往 [layla-network.ai](https://www.layla-network.ai) 核实当前的可用性。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Maid 免费吗?',
            a: '是的。无论是设备端本地聊天还是通过远程提供商聊天,Maid 的下载和使用都是免费的,该应用基于 MIT 许可证开源。评测时,在该应用或其文档中均未发现付费档位或应用内购买;远程提供商模式仍会通过你在该提供商处的自有账户计费。',
          },
          {
            q: 'Maid 是谁开发的?',
            a: 'Maid 由 Dane Madsen 创建,他于 2023 年 10 月启动该项目,最初为跨平台 Flutter 应用。目前它由 GitHub 组织 Mobile-Artificial-Intelligence 维护,而非作为个人项目。',
          },
          {
            q: 'Maid 是开源的吗?',
            a: '是的,完整源代码发布在 [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid) 上,采用 MIT 许可证——一种允许自由使用、修改和再分发的宽松许可证。',
          },
          {
            q: 'Maid 能在 iPhone、Windows 或 Mac 上运行吗?',
            a: '不能。自 3.0.0 版(2026 年 3 月)起,Maid 仅支持 Android。此前基于 Flutter 的版本(截至 v2.0.7,2025 年 4 月)曾提供 iOS(仅侧载,未在 App Store 上架)、Windows、macOS 和 Linux 版本,但这些平台不再受当前积极维护的版本支持。',
          },
          {
            q: 'Maid 能运行哪些模型?',
            a: '对于本地聊天,Maid 可以通过 llama.cpp 运行任意 GGUF 格式的模型——没有固定的精选列表。它还可以连接远程提供商,包括 Anthropic、OpenAI、Ollama、Mistral、DeepSeek、Novita 和 OrcaRouter,使用你自行提供的 API 密钥或服务器地址。',
          },
          {
            q: 'Maid 运行本地模型需要多少内存?',
            a: '这取决于你选择的 GGUF 模型,而不是应用的固定要求。作为一般参考,经过量化的 2-4B 参数模型通常需要 3-4 GB 的可用内存,7-8B 参数模型通常需要 8 GB 或以上。内存更大的设备可以在本地运行更大、能力更强的模型。',
          },
          {
            q: 'Maid 需要联网吗?',
            a: 'GGUF 模型下载完成后,本地聊天不需要联网——推理完全通过 llama.cpp 在设备端进行。首次下载模型、使用远程提供商模式,以及使用可选的基于 Supabase 的云备份功能时,均需要联网。',
          },
          {
            q: 'Maid 目前仍在积极维护吗?',
            a: '截至评测时是的:GitHub 仓库显示出截至 2026 年 9 月初的提交和已合并拉取请求,其中包括对聊天系统的一处修复,以及新增 OrcaRouter 作为远程提供商。它由一个开源 GitHub 组织维护,而非资金雄厚的企业,因此在将其用于任何时间敏感的用途之前,请自行核实仓库的最新活动情况。',
          },
          {
            q: 'Maid 的 iOS、Windows 和 Mac 支持发生了什么?',
            a: 'Maid 最初是一款跨平台 Flutter 应用;截至 v2.0.7(2025 年 4 月)的版本,除 Android 外,还提供可安装的 iOS(侧载)、Windows、macOS 和 Linux 版本。3.0.0 版(2026 年 3 月)将应用重写为 React Native,并将项目范围收窄至仅限 Android——桌面版和 iOS 版已不再是当前发布系列的一部分。',
          },
          {
            q: 'Maid 与 PocketPal AI 或 Private LLM 相比如何?',
            a: 'Maid 免费、开源、仅支持 Android,并且不同寻常地在一款应用中同时支持完全本地的 GGUF 推理和远程云端提供商。PocketPal AI 同样免费开源,但仅通过纯本地 GGUF 推理覆盖 iPhone/iPad 和 Android。Private LLM 是一款付费、闭源、仅限 Apple 的应用,内置更大的模型目录。如果你使用 Android,并希望在一个客户端中同时拥有本地和云端选项,请选择 Maid;如果需要类似的免费开源本地模型且支持 iOS,请选择 PocketPal AI;如果更看重付费、更精致、仅限 Apple 的体验,请选择 Private LLM。详情请参见上方的对比表格。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Maid 是一款真正免费、真正开源的 Android 应用,在这一品类中具有一种不常见的组合:它通过 llama.cpp 运行本地 GGUF 模型,同时又能让你在同一个客户端中连接 OpenAI 或 Anthropic 等远程提供商。这种灵活性伴随着一些真实的取舍,值得在安装前了解清楚。该应用在 2026 年经历了一次重大的架构变更——从跨平台 Flutter 重写为仅支持 Android 的 React Native——取消了旧版本所具备的 iOS、Windows、macOS 和 Linux 支持。它由一个开源 GitHub 组织维护,而非一家公司,评测时开发活动活跃,但无法保证未来会以特定节奏持续下去。如果你是 Android 用户,希望获得一款免费、开放、支持本地与远程双模式的聊天客户端,并且能接受一个由社区维护的项目,那么 Maid 值得选择。如果你需要 Maid 当前版本未覆盖的平台,请选择其他应用——Apple 设备可选择 PocketPal AI 或 Private LLM,桌面平台可选择 Ollama、LM Studio 或 Jan AI。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[GitHub 上的 Maid](https://github.com/Mobile-Artificial-Intelligence/maid) —— 本评测所引用的源代码、许可证(MIT)、README 和发布历史。',
          '[Maid 发布页面](https://github.com/Mobile-Artificial-Intelligence/maid/releases) —— 从 v2.0.4 到 v3.0.0 的版本历史、更新日志和构建产物。',
          '[Maid 仓库的提交历史](https://github.com/Mobile-Artificial-Intelligence/maid/commits/main) —— 用于评估维护状态的近期提交与拉取请求活动。',
          '[Google Play 上的 Maid](https://play.google.com/store/apps/details?id=com.danemadsen.maid) —— Android 端的可用性。',
          '[GitHub 上的 danemadsen/maid](https://github.com/danemadsen/maid) —— 创始人最初的仓库,目前是当前组织仓库的一个 fork。',
          '[GitHub 上的 Maise](https://github.com/Mobile-Artificial-Intelligence/maise) —— Maid 的开源 Android 语音合成配套应用。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[2026 年 Android 最佳本地 LLM 应用](/power-local-llm/best-local-llm-apps-android-2026) —— Android 应用汇总,包括 Maid、MLC Chat 和 PocketPal AI。',
          '[PocketPal AI 评测](/power-local-llm/pocketpal-ai-review) —— 一款免费开源的替代应用,同时覆盖 iPhone 和 iPad。',
          '[Private LLM 评测](/power-local-llm/private-llm-review) —— 一款付费、闭源、仅限 Apple 的替代应用,内置更大的模型目录。',
          '[Enclave AI 评测](/power-local-llm/enclave-ai-review) —— 一款仅限 Apple 的替代应用,支持 Siri 与 Shortcuts 自动化。',
          '[2026 年最佳移动端 LLM 模型:Phi-4 Mini 对比 Gemma 4 对比 SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) —— 模型层面的配套文章,帮助你选择真正适合自己手机的 GGUF 模型。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Maid 评测(2026):Android 开源本地 LLM 聊天应用',
      description:
        'Maid 评测:一款免费开源(MIT)的 Android 应用,可通过 llama.cpp 在本地运行 GGUF 模型,或连接 AI 提供商。涵盖平台、历史与适用人群。',
      url: 'https://promptquorum.com/zh/power-local-llm/maid-review',
      inLanguage: 'zh',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估免费开源本地及多提供商 AI 聊天应用的 Android 用户' },
      about: [
        { '@type': 'Thing', name: 'Maid' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: '本地 LLM' },
        { '@type': 'Thing', name: '开源软件' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/maid-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Maid 评测(2026)', item: 'https://promptquorum.com/zh/power-local-llm/maid-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/maid-review-hero-ko.webp',
    title: 'Maid 리뷰(2026): Android용 오픈소스 로컬 LLM 채팅 앱',
    seoTitle: 'Maid 리뷰 2026: 오픈소스 Android LLM 앱',
    intro:
      'Maid는 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 GGUF 형식의 언어 모델을 로컬에서 실행하거나, 자신의 API 키를 사용해 Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter 같은 원격 제공업체에 연결할 수 있는 무료 오픈소스(MIT 라이선스) 채팅 앱입니다. 이 프로젝트는 2023년 호주 개발자 Dane Madsen이 크로스플랫폼 Flutter 앱으로 시작했지만, 3.0.0 버전(2026년 3월)에서 코드가 React Native로 전면 재작성되었으며, 현재는 Android 전용으로만 배포됩니다——예전 Flutter 버전에 있던 데스크톱 및 iOS 빌드는 현재 버전에 더 이상 존재하지 않습니다. 이 리뷰에서는 Maid가 현재 무엇을 할 수 있는지, 재작성 과정에서 무엇이 바뀌었는지, 실제 플랫폼 및 하드웨어 요구 사항, 가격(무료, 유료 플랜 없음), 그리고 상용 대안과 비교했을 때 누구에게 적합하고 적합하지 않은지를 다룹니다.',
    metaDescription:
      'Maid 리뷰: llama.cpp를 통해 GGUF 모델을 로컬에서 실행하거나 AI 제공업체에 연결할 수 있는 무료 오픈소스(MIT) Android 앱입니다. 플랫폼, 연혁, 적합한 사용자를 다룹니다.',
    twitterDescription:
      'Maid 리뷰 2026: llama.cpp를 통한 로컬 GGUF 채팅을 위한 무료 오픈소스 Android 앱으로, 2026년 재작성 이후 Android 전용이 되었습니다. 무엇이 바뀌었고 누구에게 적합한지 정리했습니다.',
    audience:
      '무료 오픈소스 로컬 또는 다중 제공업체 AI 채팅 앱을 원하고, 커뮤니티가 운영하는 Android 전용 프로젝트도 괜찮은 Android 사용자.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Maid 리뷰',
    targetKeywords: [
      'maid ai 리뷰',
      'maid app android',
      'maid llama.cpp app',
      'maid 오픈소스 llm 앱',
      'maid vs pocketpal ai',
      '무료 로컬 llm 앱 android',
      'gguf 채팅 앱 android',
      'mobile artificial intelligence maid',
    ],
    current_models_mentioned: ['llama.cpp를 통한 GGUF 모델'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Maid는 llama.cpp를 통해 GGUF 언어 모델을 로컬에서 실행하고, 자신의 API 키로 Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter 같은 원격 제공업체에도 연결할 수 있는 무료 오픈소스(MIT 라이선스) Android 앱입니다.** 개발은 2023년 10월 프로젝트를 시작한 Dane Madsen이 설립한 [Mobile-Artificial-Intelligence GitHub 조직](https://github.com/Mobile-Artificial-Intelligence/maid)이 담당하고 있습니다. 이 앱은 원래 Flutter로 제작되어 2.0.7 버전(2025년 4월)까지 Android, iOS(사이드로드), Windows, macOS, Linux용으로 배포되었으나, 3.0.0 버전(2026년 3월)에서 React Native로 재작성되면서 배포 범위가 Android로 한정되었습니다——현재 iOS, Windows, macOS, Linux 빌드는 존재하지 않습니다. 이 프로젝트는 현재도 활발히 개발되고 있으며, 2026년 9월까지 커밋과 병합된 풀 리퀘스트가 확인됩니다.',
    quickAnswerTop: {
      ko: {
        question: 'Android에서 로컬 AI 채팅을 위해 Maid를 설치할 가치가 있습니까?',
        answer:
          'Android를 사용하고 있고, llama.cpp를 통해 기기에서 완전히 GGUF 모델을 실행하거나 OpenAI, Anthropic, Ollama 같은 제공업체의 자신의 계정에 연결할 수 있는 무료 오픈소스 앱을 원한다면 그렇습니다. iPhone, Mac, Windows, Linux를 사용한다면 적합하지 않습니다——현재 버전인 3.0.0은 Flutter에서 React Native로 재작성되면서 해당 플랫폼을 폐지했으며, 현재는 Android 빌드만 배포하고 있습니다.',
        bullets: [
          'MIT 라이선스 하에 무료이자 오픈소스——구독 없음, 소스 코드는 [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)에 공개.',
          '3.0.0 버전(2026년 3월)부터 Android 전용; [Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid)에서, 또는 [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases)에서 직접 APK로 다운로드 가능.',
          'llama.cpp를 통해 GGUF 모델을 로컬에서 실행하거나, 자신의 API 키로 Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter에 연결.',
          '2023년 10월 개발자 Dane Madsen이 크로스플랫폼 Flutter 앱으로 시작; v3.0.0에서 React Native로 재작성되면서 그 과정에서 iOS, Windows, macOS, Linux 빌드가 폐지됨.',
          '리뷰 시점 기준으로 활발히 유지 관리 중——2026년 9월 초까지 커밋과 병합된 풀 리퀘스트가 있으며, GitHub에서 미해결 이슈 10건, 포크 283건.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Maid란 무엇입니까?', anchor: 'what-is-maid' },
      { label: 'Maid는 누가 만들었으며, 재작성으로 무엇이 바뀌었습니까?', anchor: 'history-and-developer' },
      { label: 'Maid 시작하는 방법', anchor: 'getting-started' },
      { label: 'Maid는 어떤 모델을 지원합니까?', anchor: 'models-supported' },
      { label: 'Maid는 iPhone, Windows, Mac에서 사용할 수 있습니까?', anchor: 'platform-availability' },
      { label: 'Maid의 가격은 얼마입니까?', anchor: 'pricing' },
      { label: 'Maid에는 어떤 기능이 있습니까?', anchor: 'key-features' },
      { label: '어떤 하드웨어가 필요합니까?', anchor: 'hardware-requirements' },
      { label: 'Maid가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'Maid가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: 'Maid와 대안 비교', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 자료', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Maid는 llama.cpp를 통해 GGUF 언어 모델을 로컬에서 실행하거나 자신의 API 키로 원격 AI 제공업체에 연결할 수 있는 무료 MIT 라이선스 오픈소스 Android 앱으로, 개발자 Dane Madsen이 설립한 Mobile-Artificial-Intelligence GitHub 조직이 관리합니다.',
          },
          {
            type: 'plain-terms',
            text: '자신의 기기에서 직접 실행되거나, OpenAI나 Anthropic 같은 제공업체에 이미 보유한 계정을 통해 실행되는 AI 모델과 대화하기 위해 Android 스마트폰에 설치하는 앱입니다——코드는 GitHub에 공개되어 있고 앱 자체는 무료입니다. 예전에는 iPhone, Windows, Mac, Linux에서도 작동했지만 현재 버전은 이러한 플랫폼을 폐지했습니다.',
          },
        ],
        items: [
          'MIT 라이선스 하에 무료이자 오픈소스; 소스 코드와 이슈 트래커는 [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)에 공개되어 있습니다.',
          '2023년 10월 Dane Madsen이 크로스플랫폼 Flutter 앱으로 설립; 현재는 Mobile-Artificial-Intelligence 조직이 관리합니다.',
          'llama.cpp를 통해 GGUF 모델을 기기에서 완전히 실행하거나, 자신의 API 키로 Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter에 연결합니다.',
          '3.0.0 버전(2026년 3월)에서 React Native로 재작성되면서 Android 전용으로 한정되었습니다——예전 Flutter 버전은 iOS(사이드로드), Windows, macOS, Linux용으로도 배포되었지만, 이러한 빌드는 현재 버전에 포함되어 있지 않습니다.',
          '[Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid)에서, 또는 [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases)에서 APK/AAB 직접 다운로드로 이용할 수 있습니다.',
          '리뷰 시점 기준으로 앱이나 문서에서 유료 플랜은 발견되지 않았습니다; 기본 앱과 로컬 채팅 기능은 무료입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 공개된 [GitHub 저장소](https://github.com/Mobile-Artificial-Intelligence/maid), 해당 README, 릴리스 이력, Google Play 등록 정보를 2026년 9월 기준으로 확인한 내용에 근거합니다. PromptQuorum은 이 리뷰를 위해 Maid에 대한 독자적인 실기기 벤치마크를 수행하지 않았습니다——아래 성능 수치는 로컬 LLM 전반에 대한 일반적인 하드웨어 참고 자료이며, 이 앱에 특화된 측정치가 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-maid',
        title: 'Maid란 무엇입니까?',
        content: [
          '**Maid는 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 GGUF 형식의 오픈 웨이트 언어 모델을 기기에 다운로드하여 로컬에서 실행하거나, 사용자가 직접 제공한 API 키를 사용해 원격 제공업체에 채팅 요청을 전송하는 Android 앱입니다.** 이 앱은 [MIT 라이선스](https://github.com/Mobile-Artificial-Intelligence/maid/blob/main/LICENSE)를 따르므로, 전체 소스 코드가 공개되어 있어 누구나 자유롭게 확인, 포크, 수정할 수 있습니다.',
          '이러한 이중 모드는 이 앱의 핵심 특징입니다——순수한 로컬 추론 클라이언트만은 아니라는 것입니다. 동일한 인터페이스로 GGUF 파일을 완전히 오프라인 상태에서 실행할 수도 있고, 자신의 계정을 통해 OpenAI나 Anthropic 같은 클라우드 제공업체로 대화를 전달할 수도 있으며, 네트워크 내 자체 호스팅한 [Ollama](https://ollama.com) 서버로 연결할 수도 있습니다. README에 따르면 이 프로젝트는 스스로를 "Huggingface, Meta(Facebook), MistralAi, OpenAI, Google, Microsoft 또는 이 애플리케이션과 호환되는 모델을 제공하는 다른 어떤 회사와도 제휴하지 않았다"고 설명하고 있습니다.',
        ],
        note: 'GGUF는 양자화된 오픈 웨이트 언어 모델을 패키징하는 파일 형식으로, 매 응답마다 클라우드 API를 호출하는 대신 llama.cpp 같은 런타임을 통해 일반 소비자용 하드웨어에서 효율적으로 실행할 수 있게 합니다.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Maid는 누가 만들었으며, 재작성으로 무엇이 바뀌었습니까?',
        content: [
          '**Maid는 2023년 10월 GGUF 및 llama.cpp 모델을 실행하기 위한 크로스플랫폼 Flutter 앱으로 프로젝트를 시작한 Dane Madsen이 만들었습니다.** 현재 이 프로젝트는 Madsen 개인 계정이 아닌 [Mobile-Artificial-Intelligence GitHub 조직](https://github.com/Mobile-Artificial-Intelligence/maid) 아래에서 호스팅되고 있습니다. 그의 원래 저장소인 [danemadsen/maid](https://github.com/danemadsen/maid)는 현재 GitHub에서 해당 조직 저장소의 포크로 등록되어 있으며, 설명란에는 여전히 "크로스플랫폼 Flutter 앱"이라고 적혀 있지만 이는 더 이상 현재 코드와 일치하지 않습니다.',
          '버전 이력은 뚜렷한 분기점을 보여줍니다. **v2.0.7(2025년 4월)**까지의 릴리스는 Flutter로 빌드되어 Android(APK/AAB), iOS(사이드로드용 `.ipa`, App Store 미등록), Linux(`.zip`/`.AppImage`), macOS(Intel 및 Apple Silicon용 `.dmg`), Windows(`.zip`), 심지어 웹 빌드까지 설치 가능한 형태로 제공했습니다. **3.0.0 버전(2026년 3월 10일 발표)**은 React Native로의 전면 재작성이며, 해당 릴리스에는 Android용 패키지(APK 및 AAB 변형)만 포함되어 있습니다——iOS, Windows, macOS, Linux용 파일은 없습니다. 이 릴리스의 변경 로그에는 비전 모델 지원, 시스템 텍스트 음성 변환, 시스템 음성 인식, 추론 모델 지원, Markdown 렌더링, 그리고 릴리스 노트에서 Google Play 요구 사항이라고 설명한 추천/비추천 신고 기능이 나열되어 있습니다.',
          '이 재작성 이후에도 개발은 계속되었습니다. 저장소에는 2026년 9월 초까지 병합된 풀 리퀘스트와 커밋이 확인되며, 여기에는 채팅 시스템 수정과 원격 제공업체로서 [OrcaRouter](https://www.orcarouter.ai) 추가가 포함됩니다. 리뷰 시점 기준으로 이 저장소는 약 2,700개의 스타, 283건의 포크, 10건의 미해결 이슈를 보유하고 있었습니다——이는 활발히 사용되고 관리되는 프로젝트임을 보여주지만, 지원 팀을 갖춘 자금력 있는 기업이 아니라 단일 조직이 운영하는 오픈소스 프로젝트라는 점은 유의해야 합니다.',
        ],
        items: [
          '설립자: Dane Madsen(GitHub: [danemadsen](https://github.com/danemadsen)), 2023년 10월 프로젝트를 시작함.',
          '현재 관리자: GitHub 조직 [Mobile-Artificial-Intelligence](https://github.com/Mobile-Artificial-Intelligence); Madsen의 개인 저장소는 현재 해당 조직 저장소의 포크입니다.',
          '라이선스: MIT——자유롭게 사용, 포크, 수정할 수 있는 관대한 오픈소스 라이선스.',
          '주요 아키텍처 변경: Flutter(크로스플랫폼, v2.0.7까지, 2025년 4월) → React Native, Android 전용(v3.0.0부터, 2026년 3월).',
          '리뷰 시점 기준 GitHub 스타 약 2,700개, 포크 283건, 미해결 이슈 10건이며, 커밋과 병합된 풀 리퀘스트는 2026년 9월까지 확인됩니다.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Maid 시작하는 방법',
        content: [
          '**현재 Android 버전을 설치한 뒤 몇 단계만 거치면 Maid에서 채팅을 사용할 수 있습니다.** 기기 내 로컬 채팅에는 필수 계정이 없으며, 선택적 로그인은 앱의 클라우드 백업 기능을 위해서만 존재합니다.',
        ],
        numberedItems: [
          {
            title: 'Android에 앱 설치하기',
            whyItMatters: '[Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid)에서 Maid를 다운로드하거나, 사이드로드를 선호한다면 [GitHub Releases 페이지](https://github.com/Mobile-Artificial-Intelligence/maid/releases)에서 APK를 직접 설치합니다. 현재 iOS, Windows, macOS, Linux용 빌드는 제공되지 않습니다.',
          },
          {
            title: '로컬 모드 또는 원격 모드 선택하기',
            whyItMatters: 'GGUF 모델을 다운로드하여 llama.cpp를 통해 기기에서 완전히 실행할지, 아니면 이미 보유한 API 키나 서버 주소를 사용해 원격 제공업체(Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter)에 앱을 연결할지 결정합니다.',
          },
          {
            title: '모델 다운로드 또는 가져오기(로컬 모드)',
            whyItMatters: '기기 내 채팅을 위해 스마트폰의 RAM 용량에 맞는 크기의 GGUF 모델을 다운로드하거나(아래 하드웨어 섹션 참고), 로컬 저장소나 [Hugging Face](https://huggingface.co)에서 사용자 지정 GGUF 파일을 불러옵니다.',
          },
          {
            title: '채팅 시작하기',
            whyItMatters: '로컬 모델이 로드되거나 원격 제공업체가 설정되면 대화를 시작합니다. 채팅은 앱 내에서 생성, 이름 변경, 삭제할 수 있으며 JSON 파일로 내보내거나 가져올 수 있습니다.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Maid는 어떤 모델을 지원합니까?',
        itemHeadings: true,
        columns: ['접근 방식', '연결 대상', '참고'],
        rows: [
          {
            '접근 방식': '로컬(기기 내)',
            '연결 대상': '[llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 불러오는 모든 GGUF 형식 모델',
            '참고': '고정된 엄선 모델 목록이 없습니다——Hugging Face에서 가져온 파일을 포함해, 다운로드하거나 가져온 GGUF 파일이라면 무엇이든 실행합니다.',
          },
          {
            '접근 방식': '원격 제공업체',
            '연결 대상': 'Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, [OrcaRouter](https://www.orcarouter.ai)',
            '참고': '자신의 계정과 API 키가 필요합니다(Ollama의 경우 자체 서버 주소 필요); Maid 자체는 이러한 제공업체에 대한 접근을 번들로 제공하거나 재판매하지 않습니다.',
          },
        ],
        note: 'Maid는 어떤 GGUF 파일이든 불러올 수 있기 때문에, 실질적인 모델 지원 범위는 앱이 엄선한 목록이 아니라 llama.cpp와의 호환성에 의해 결정됩니다——이는 특정 빠른 다운로드 카탈로그와 사용자 지정 파일 지원을 함께 제공하는 PocketPal AI나 Private LLM 같은 앱과는 다른 점입니다.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Maid는 iPhone, Windows, Mac에서 사용할 수 있습니까?',
        itemHeadings: true,
        columns: ['플랫폼', '현재 지원 여부', '참고'],
        rows: [
          {
            '플랫폼': 'Android',
            '현재 지원 여부': '지원됨',
            '참고': '[Google Play](https://play.google.com/store/apps/details?id=com.danemadsen.maid)를 통해 배포되며, [GitHub Releases](https://github.com/Mobile-Artificial-Intelligence/maid/releases)에서 APK/AAB를 직접 받을 수도 있습니다. 현재 3.0.0 버전이 지원하는 유일한 플랫폼입니다.',
          },
          {
            '플랫폼': 'iPhone / iPad',
            '현재 지원 여부': '현재 지원되지 않음',
            '참고': '이전 Flutter 릴리스(v2.0.7까지, 2025년 4월)는 사이드로드용 `.ipa` 파일을 제공했지만 App Store에 등록된 적은 없었으며, 현재 v3.0.0 릴리스에도 iOS용 파일은 포함되어 있지 않습니다.',
          },
          {
            '플랫폼': 'Windows / macOS / Linux',
            '현재 지원 여부': '현재 지원되지 않음',
            '참고': 'v2.0.7까지의 Flutter 기반 릴리스에는 데스크톱 빌드(`.zip`, `.AppImage`, `.dmg`)가 있었지만, React Native 재작성(v3.0.0)은 데스크톱용 패키지를 제공하지 않습니다. 로컬 GGUF 채팅 클라이언트를 원하는 데스크톱 사용자는 대신 Ollama, LM Studio, Jan AI를 고려해야 합니다.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Maid의 가격은 얼마입니까?',
        content: [
          '**Maid는 기기 내 로컬 채팅과 원격 제공업체 채팅 모두에 대해 다운로드와 사용이 무료이며, 소스 코드는 MIT 라이선스 하에 공개되어 있습니다.** 리뷰 시점 기준으로 이 앱의 저장소, 릴리스 노트, Google Play 등록 정보에서 앱 내 구매, 구독, 유료 플랜은 발견되지 않았습니다.',
          'Maid 사용자가 실제로 부담하는 비용은 간접적입니다——다운로드한 GGUF 모델 파일이 차지하는 기기 저장 공간(일반적으로 파일당 수 기가바이트)과, 원격 제공업체 모드를 사용할 경우 Anthropic, OpenAI, Mistral, DeepSeek, Novita, Ollama, OrcaRouter가 각각 해당 제공업체의 자신의 계정에서 API 사용에 대해 별도로 부과하는 요금입니다——Maid 자체는 이러한 제공업체 비용에 추가 마진이나 구독료를 얹지 않습니다.',
        ],
        items: [
          '**기본 앱:** 무료, 구독 없음, MIT 라이선스 오픈소스.',
          '**로컬 채팅(기기 내 GGUF 모델):** 무료——추론이 자신의 기기에서 실행되므로 메시지나 토큰당 요금이 부과되지 않습니다.',
          '**원격 제공업체 채팅:** Maid를 통한 이용 자체는 무료이지만, 자신의 계정과 API 키 하에서 제공업체(OpenAI, Anthropic 등)가 부과하는 요금은 지불해야 합니다.',
          '**선택적 클라우드 백업:** 이 앱은 Supabase를 통해 설정과 채팅 기록을 백업하기 위한 등록 또는 로그인을 지원합니다; 이 리뷰에서는 이 기능에 연결된 별도 요금을 발견하지 못했습니다.',
          '**저장 공간 비용:** 금전적 비용은 아니지만 실질적인 비용입니다——다운로드한 각 GGUF 모델은 일반적으로 기기 저장 공간 수 기가바이트를 차지합니다.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Maid에는 어떤 기능이 있습니까?',
        content: [
          '**로컬/원격 채팅이라는 기본 구분 외에도, Maid의 README와 릴리스 노트는 버전 이력에 걸쳐 추가된 여러 기능을 설명하고 있습니다.** 여기에는 다음이 포함됩니다.',
        ],
        items: [
          '**하나의 앱에서 로컬 및 원격 추론 지원.** llama.cpp를 통한 완전 오프라인 GGUF 채팅과, 자신의 자격 증명을 사용하는 클라우드 제공업체(Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter) 사이를 전환할 수 있습니다.',
          '**대화 관리.** 채팅을 생성, 이름 변경, 삭제하고 JSON 파일로 내보내거나 가져올 수 있습니다.',
          '**사용자 지정 시스템 프롬프트.** 전역 시스템 프롬프트를 설정하여 어시스턴트의 동작과 어조를 조정할 수 있습니다.',
          '**조정 가능한 생성 파라미터.** temperature, top-p, top-k, 컨텍스트 길이 등의 설정을 세션별로 조정할 수 있습니다.',
          '**동반 앱을 통한 음성 출력.** Maid는 동일한 GitHub 조직이 개발한 별도의 오픈소스 Android 음성 합성 엔진인 [Maise](https://github.com/Mobile-Artificial-Intelligence/maise)와 결합하여 응답을 음성으로 읽어줄 수 있습니다.',
          '**선택적 클라우드 백업.** 사용자는 등록하거나 로그인하여 Supabase를 통해 설정과 채팅 기록을 동기화할 수 있습니다; 이는 선택 사항이며 앱 사용에 필수는 아닙니다.',
          '**Material You 디자인.** Android 시스템 설정을 따르는 라이트 및 다크 테마.',
          '**텔레메트리 및 광고 없음,** 프로젝트 자체 README에 따름.',
        ],
        note: '이 프로젝트는 릴리스를 자주 발표하므로 기능 제공 여부는 앱 버전에 따라 다를 수 있습니다. 특히 Flutter 기반 v2.x 계열과 React Native로 재작성된 v3.0.0 사이에 많은 변화가 있었던 점을 고려하여, 설치된 버전에서 실제로 사용할 수 있는 기능은 앱 내 변경 로그나 [GitHub Releases 페이지](https://github.com/Mobile-Artificial-Intelligence/maid/releases)에서 확인하시기 바랍니다.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Maid를 실행하려면 어떤 하드웨어가 필요합니까?',
        content: [
          '**로컬 채팅의 실제 하드웨어 최소 기준을 결정하는 것은 앱 자체가 아니라 선택한 GGUF 모델입니다——스마트폰에서 GGUF 모델에 대한 일반적인 기준으로, 양자화된 2~4B 파라미터 모델은 약 3~4GB의 여유 RAM이 필요하며, 7~8B 파라미터 모델은 6~8GB 이상이 필요합니다.** 이는 로컬 LLM 전반에 대한 표준적인 사이징 기준이며, Maid에 특화된 벤치마크는 아닙니다; PromptQuorum은 모델별 Maid의 정확한 메모리 사용량을 독자적으로 측정하지 않았습니다.',
          'Maid는 llama.cpp를 통해 로컬 추론을 수행하므로 Android에서의 llama.cpp에 대한 일반적인 성능 기준이 적용됩니다——RAM이 더 많고 최신 칩셋을 탑재한 최근 기기는 저장 공간이나 메모리가 제한된 구형 스마트폰보다 더 큰 모델을 더 원활하게 로드하고 실행할 수 있습니다. 로컬 추론 대신 원격 제공업체 모드를 사용하는 경우, 기기 자체의 하드웨어 요구 사항은 미미합니다——모델이 제공업체의 서버에서 실행되므로 스마트폰에는 정상적으로 작동하는 인터넷 연결만 있으면 충분합니다.',
        ],
        items: [
          '소형 모델(2~4B 파라미터, 양자화): 여유 RAM 4GB 이상을 갖춘 대부분의 최근 Android 스마트폰에서 사용 가능.',
          '중형 모델(7~8B 파라미터, 양자화): 허용 가능한 응답성을 위해 8GB 이상의 기기 RAM을 권장.',
          '저장 공간: 다운로드한 GGUF 모델 파일 하나당 수 기가바이트의 여유 저장 공간을 확보해야 합니다.',
          '원격 제공업체 모드: 추론이 제공업체의 인프라에서 실행되므로, 정상적으로 작동하는 인터넷 연결 외에는 이렇다 할 로컬 하드웨어 요구 사항이 없습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Maid가 적합한 사용자',
        items: [
          '**하나의 무료 앱에서 로컬 채팅과 클라우드 채팅을 모두 사용하고 싶은 Android 사용자.** 완전 오프라인 GGUF 추론과 OpenAI, Anthropic 같은 제공업체의 자신의 계정 사이를 하나의 오픈소스 클라이언트에서 전환할 수 있다는 점이 Maid의 가장 명확한 차별점입니다.',
          '**엄선된 모델 목록이 아니라 제한 없는 GGUF 파일을 실행하고 싶은 사용자.** 이 앱은 고정된 카탈로그를 제공하는 대신 llama.cpp를 통해 어떤 GGUF 모델이든 불러오므로, 이미 특정 모델을 염두에 두고 있는 사용자에게 적합합니다.',
          '**오픈소스 프로젝트에 익숙한 개발자 및 기술에 관심이 많은 사용자.** 공개 GitHub 저장소, 이슈 트래커, 활발한 릴리스 이력은 전담 고객 지원을 기대하기보다는 릴리스 노트를 읽거나 이슈를 등록할 의향이 있는 사용자에게 적합합니다.',
          '**직접 코드를 검토하거나 수정하고 싶은 사용자.** MIT 라이선스는 포크와 수정을 허용하므로, 사적인 대화나 제공업체 API 키를 맡기기 전에 이 앱이 정확히 무엇을 하는지 감사하고 싶은 사용자에게 중요합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Maid가 적합하지 않은 사용자',
        items: [
          '**iPhone, iPad, Windows, macOS, Linux 사용자.** 현재 3.0.0 버전은 Android 전용이며, App Store 등록도 지원되는 데스크톱 빌드도 없습니다. 이러한 플랫폼의 사용자는 대신 Private LLM이나 PocketPal AI(Apple), 또는 Ollama, LM Studio, Jan AI(데스크톱)를 고려해야 합니다.',
          '**완전히 안내받는, 설정이 필요 없는 경험을 원하는 사용자.** 로컬 모드와 원격 모드 사이의 선택, 자신의 기기에 맞는 모델 크기 결정, API 키 관리는 사용 흐름의 일부입니다; 이러한 결정을 앱이 대신 내려주기를 원하는 사용자는 Loci나 Enclave AI처럼 더 정돈된 앱을 선호할 수 있습니다.',
          '**가장 까다로운 모델(700억 파라미터 이상)을 로컬에서 실행하고 싶은 사용자.** 최상급 Android 기기라 하더라도 그런 규모의 모델을 기기에서 실질적으로 실행할 수는 없습니다——어떤 모바일 앱을 사용하든 이러한 작업에는 데스크톱, 워크스테이션, 또는 클라우드 API/원격 제공업체가 필요합니다.',
          '**전담 상용 지원을 기대하는 사용자.** Maid는 지원 팀을 갖춘 자금력 있는 기업이 아니라 오픈소스 GitHub 조직이 관리합니다; 보장된 응답 시간이나 기업용 지원 계약이 필요한 사용자는 상업적으로 지원되는 대안을 찾아야 합니다.',
          '**기존의 크로스플랫폼 빌드가 필요한 사용자.** Flutter 기반 v2.x 릴리스에서 제공했던 Maid의 이전 iOS, Windows, macOS, Linux 지원에 의존하고 있는 사람이라면, 이러한 플랫폼이 현재 활발히 관리되는 버전에는 포함되어 있지 않다는 점을 알아야 합니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Maid와 대안 비교',
        itemHeadings: true,
        columns: ['앱', '라이선스 / 비용', '지원 플랫폼', '모델 유연성'],
        rows: [
          {
            '앱': 'Maid',
            '라이선스 / 비용': '무료, 오픈소스(MIT)',
            '지원 플랫폼': 'Android 전용(v3.0.0부터)',
            '모델 유연성': 'llama.cpp를 통한 모든 GGUF 파일, 또는 자신의 API 키로 사용하는 원격 제공업체(Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter)',
          },
          {
            '앱': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            '라이선스 / 비용': '무료, 오픈소스(MIT)',
            '지원 플랫폼': 'iPhone/iPad, Android',
            '모델 유연성': '빠른 다운로드 목록에 더해 Hugging Face의 모든 GGUF 파일',
          },
          {
            '앱': '[Private LLM](/power-local-llm/private-llm-review)',
            '라이선스 / 비용': '유료, 일회성 구매; 클로즈드소스',
            '지원 플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '모델 유연성': '140개 이상의 모델, OmniQuant 및 GPTQ 양자화 형식 지원',
          },
          {
            '앱': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            '라이선스 / 비용': '무료+유료 플랜; 클로즈드소스',
            '지원 플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '모델 유연성': '엄선된 기기 내 모델 목록; Siri 및 Shortcuts 연동',
          },
          {
            '앱': 'ChatterUI',
            '라이선스 / 비용': '무료, 오픈소스(AGPL-3.0)',
            '지원 플랫폼': 'Android(소스에서 빌드)',
            '모델 유연성': 'llama.cpp를 통해 기기에서 GGUF 파일 실행, 또는 원격 API 연결; Character Card v2 지원',
          },
          {
            '앱': 'RikkaHub',
            '라이선스 / 비용': '무료, 오픈소스',
            '지원 플랫폼': 'Android',
            '모델 유연성': '다중 제공업체 클라이언트(OpenAI/Google/Anthropic 호환 API); Material You 디자인',
          },
          {
            '앱': 'AnythingLLM Mobile',
            '라이선스 / 비용': '무료, 오픈소스',
            '지원 플랫폼': 'iPhone/iPad, Android',
            '모델 유연성': '기기 내 추론, 자체 호스팅된 AnythingLLM 인스턴스 연결, 또는 OpenAI 호환 제공업체 전반',
          },
        ],
        note: '한때 인기 있던 오픈소스 iOS GGUF 채팅 앱인 LLM Farm은 리뷰 시점 기준으로 App Store에서 삭제되었으며 자체 GitHub 저장소에서도 "일시적으로 사용 불가"로 표시되어 있어, 위의 활성 추천 목록에서 제외했습니다. 또 다른 기기 내 어시스턴트 앱인 Layla는 무료 플랜인 "Layla Lite"가 Google Play에서 삭제되었다고 알려져 있습니다; 설치 가능하다고 가정하기 전에 [layla-network.ai](https://www.layla-network.ai)에서 현재 지원 여부를 직접 확인하시기 바랍니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Maid는 무료입니까?',
            a: '예. Maid는 기기 내 로컬 채팅과 원격 제공업체 채팅 모두에 대해 다운로드와 사용이 무료이며, 이 앱은 MIT 라이선스 하에 오픈소스로 제공됩니다. 리뷰 시점 기준으로 앱이나 문서에서 유료 플랜이나 앱 내 구매는 발견되지 않았습니다; 원격 제공업체 모드는 여전히 해당 제공업체에 대한 자신의 계정을 통해 요금이 청구됩니다.',
          },
          {
            q: 'Maid는 누가 개발했습니까?',
            a: 'Maid는 2023년 10월 크로스플랫폼 Flutter 앱으로 프로젝트를 시작한 Dane Madsen이 만들었습니다. 현재는 개인 프로젝트가 아니라 GitHub 조직 Mobile-Artificial-Intelligence 아래에서 관리되고 있습니다.',
          },
          {
            q: 'Maid는 오픈소스입니까?',
            a: '예, 전체 소스 코드가 [GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)에 MIT 라이선스로 공개되어 있습니다. MIT 라이선스는 자유로운 사용, 수정, 재배포를 허용하는 관대한 라이선스입니다.',
          },
          {
            q: 'Maid는 iPhone, Windows, Mac에서 작동합니까?',
            a: '아닙니다. 3.0.0 버전(2026년 3월)부터 Maid는 Android 전용입니다. v2.0.7(2025년 4월)까지의 이전 Flutter 기반 릴리스는 iOS(사이드로드 전용, App Store 미등록), Windows, macOS, Linux용 빌드를 제공했지만, 이러한 플랫폼은 현재 활발히 관리되는 버전에서는 지원되지 않습니다.',
          },
          {
            q: 'Maid는 어떤 모델을 실행할 수 있습니까?',
            a: '로컬 채팅의 경우, Maid는 llama.cpp를 통해 GGUF 형식의 모든 모델을 실행할 수 있습니다——고정된 엄선 목록은 없습니다. 또한 사용자가 직접 제공하는 API 키나 서버 주소를 사용해 Anthropic, OpenAI, Ollama, Mistral, DeepSeek, Novita, OrcaRouter를 포함한 원격 제공업체에 연결할 수도 있습니다.',
          },
          {
            q: 'Maid에서 로컬 모델을 사용하려면 RAM이 얼마나 필요합니까?',
            a: '이는 앱의 고정 요구 사항이 아니라 선택한 GGUF 모델에 따라 달라집니다. 일반적인 기준으로, 양자화된 2~4B 파라미터 모델은 보통 3~4GB의 여유 RAM이 필요하며, 7~8B 파라미터 모델은 보통 8GB 이상이 필요합니다. RAM이 더 많은 기기일수록 더 크고 성능이 좋은 모델을 로컬에서 실행할 수 있습니다.',
          },
          {
            q: 'Maid는 인터넷 연결이 필요합니까?',
            a: 'GGUF 모델을 다운로드한 후에는 로컬 채팅에 인터넷 연결이 필요하지 않습니다——추론은 llama.cpp를 통해 기기에서 완전히 실행됩니다. 인터넷 연결은 최초 모델 다운로드, 원격 제공업체 모드 사용, 그리고 선택적인 Supabase 기반 클라우드 백업 기능 사용 시 필요합니다.',
          },
          {
            q: 'Maid는 지금도 활발히 관리되고 있습니까?',
            a: '리뷰 시점 기준으로 그렇습니다: GitHub 저장소에는 2026년 9월 초까지의 커밋과 병합된 풀 리퀘스트가 확인되며, 여기에는 채팅 시스템 수정과 원격 제공업체로서 OrcaRouter 추가가 포함됩니다. 이 프로젝트는 자금력 있는 기업이 아니라 오픈소스 GitHub 조직이 관리하므로, 시간에 민감한 용도로 의존하기 전에 저장소의 최근 활동을 직접 확인하시기 바랍니다.',
          },
          {
            q: 'Maid의 iOS, Windows, Mac 지원은 어떻게 되었습니까?',
            a: 'Maid는 원래 크로스플랫폼 Flutter 앱이었으며, v2.0.7(2025년 4월)까지의 릴리스는 Android 외에도 iOS(사이드로드), Windows, macOS, Linux용 설치 가능한 빌드를 제공했습니다. 3.0.0 버전(2026년 3월)에서 React Native로 재작성되면서 프로젝트는 Android 전용으로 한정되었습니다——데스크톱 및 iOS 빌드는 더 이상 현재 릴리스 계열에 포함되어 있지 않습니다.',
          },
          {
            q: 'Maid는 PocketPal AI나 Private LLM과 비교하면 어떻습니까?',
            a: 'Maid는 무료이고 오픈소스이며 Android 전용이고, 하나의 앱에서 완전한 로컬 GGUF 추론과 원격 클라우드 제공업체를 모두 지원한다는 점에서 특이합니다. PocketPal AI 역시 무료이고 오픈소스이지만, 로컬 전용 GGUF 추론으로 iPhone/iPad와 Android를 다룹니다. Private LLM은 유료이고 클로즈드소스이며 Apple 전용으로, 더 큰 내장 모델 카탈로그를 갖추고 있습니다. Android를 사용하며 하나의 클라이언트에서 로컬 및 클라우드 옵션을 모두 원한다면 Maid를, 유사한 무료 오픈소스 로컬 모델과 함께 iOS 지원이 필요하다면 PocketPal AI를, 유료이지만 더 정교하고 Apple 전용인 경험을 원한다면 Private LLM을 선택하십시오. 자세한 내용은 위의 비교표를 참고하십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'Maid는 진정으로 무료이며 진정으로 오픈소스인 Android 앱으로, 이 카테고리에서는 흔치 않은 조합을 갖추고 있습니다——llama.cpp를 통해 로컬 GGUF 모델을 실행하는 동시에 같은 클라이언트에서 OpenAI나 Anthropic 같은 원격 제공업체에도 연결할 수 있습니다. 이러한 유연함에는 설치 전에 알아둘 만한 실질적인 트레이드오프가 따릅니다. 이 앱은 2026년에 크로스플랫폼 Flutter에서 Android 전용 React Native로 재작성되는 중대한 아키텍처 변화를 겪었으며, 그 과정에서 이전 버전이 갖고 있던 iOS, Windows, macOS, Linux 지원이 사라졌습니다. 이 앱은 기업이 아니라 오픈소스 GitHub 조직이 관리하고 있으며, 리뷰 시점 기준으로는 개발이 활발하지만 앞으로 특정한 속도로 지속될 것이라는 보장은 없습니다. 무료이고 개방적이며 로컬과 원격 모드를 모두 갖춘 채팅 클라이언트를 원하고, 커뮤니티가 운영하는 프로젝트도 괜찮은 Android 사용자라면 Maid를 선택하십시오. Maid의 현재 버전이 다루지 않는 플랫폼이 필요하다면——Apple 기기에는 PocketPal AI나 Private LLM을, 데스크톱에는 Ollama, LM Studio, Jan AI를——다른 앱을 선택하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 Maid](https://github.com/Mobile-Artificial-Intelligence/maid) — 이 리뷰에서 참조한 소스 코드, 라이선스(MIT), README, 릴리스 이력.',
          '[Maid 릴리스 페이지](https://github.com/Mobile-Artificial-Intelligence/maid/releases) — v2.0.4부터 v3.0.0까지의 버전 이력, 변경 로그, 빌드 산출물.',
          '[Maid 저장소 커밋 이력](https://github.com/Mobile-Artificial-Intelligence/maid/commits/main) — 관리 상태 평가에 사용한 최근 커밋 및 풀 리퀘스트 활동.',
          '[Google Play의 Maid](https://play.google.com/store/apps/details?id=com.danemadsen.maid) — Android 지원 여부.',
          '[GitHub의 danemadsen/maid](https://github.com/danemadsen/maid) — 설립자의 원래 저장소로, 현재는 현재 조직 저장소의 포크입니다.',
          '[GitHub의 Maise](https://github.com/Mobile-Artificial-Intelligence/maise) — Maid의 오픈소스 Android 음성 합성 동반 앱.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[2026년 Android 최고의 로컬 LLM 앱](/power-local-llm/best-local-llm-apps-android-2026) — Maid, MLC Chat, PocketPal AI를 포함한 Android 앱 총정리.',
          '[PocketPal AI 리뷰](/power-local-llm/pocketpal-ai-review) — iPhone과 iPad도 함께 다루는 무료 오픈소스 대안.',
          '[Private LLM 리뷰](/power-local-llm/private-llm-review) — 더 큰 내장 모델 카탈로그를 갖춘 유료, 클로즈드소스, Apple 전용 대안.',
          '[Enclave AI 리뷰](/power-local-llm/enclave-ai-review) — Siri 및 Shortcuts 자동화를 갖춘 Apple 전용 대안.',
          '[2026년 최고의 모바일 LLM 모델: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 스마트폰에 실제로 맞는 GGUF 모델을 고르기 위한 모델 계층의 관련 자료.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Maid 리뷰(2026): Android용 오픈소스 로컬 LLM 채팅 앱',
      description:
        'Maid 리뷰: llama.cpp를 통해 GGUF 모델을 로컬에서 실행하거나 AI 제공업체에 연결할 수 있는 무료 오픈소스(MIT) Android 앱입니다. 플랫폼, 연혁, 적합한 사용자를 다룹니다.',
      url: 'https://promptquorum.com/ko/power-local-llm/maid-review',
      inLanguage: 'ko',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '무료 오픈소스 로컬 및 다중 제공업체 AI 채팅 앱을 검토 중인 Android 사용자' },
      about: [
        { '@type': 'Thing', name: 'Maid' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: '로컬 LLM' },
        { '@type': 'Thing', name: '오픈소스 소프트웨어' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/maid-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Maid 리뷰(2026)', item: 'https://promptquorum.com/ko/power-local-llm/maid-review' },
      ],
    },
  },
}
