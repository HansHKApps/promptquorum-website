// PocketPal AI Review: Open-Source, MIT-Licensed On-Device Chat for iOS & Android
// Slug: pocketpal-ai-review
// Companion to: best-local-llm-apps-android-2026, best-local-llm-apps-iphone-2026, chatty-mini-review,
// loci-ai-review-offline-local-ai, locally-ai-review, enclave-ai-review, arbiter-local-ai-chat-review,
// mobile-llm-models-phi4-gemma-smollm

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketpal-ai-review-hero-en.webp',
    title: 'PocketPal AI Review (2026): Free, Open-Source On-Device Chat',
    seoTitle: 'PocketPal AI Review 2026: Open-Source Local Chat App',
    intro:
      'PocketPal AI is a free, MIT-licensed, open-source app for iPhone, iPad, and Android that runs GGUF language models directly on the device, with no server round-trip and no account required to chat. It was built by Asghar Ghorbani, a developer who started it as a personal project before open-sourcing the code on [GitHub](https://github.com/a-ghorbani/pocketpal-ai). This review covers what the app does today, which models it ships with, its real hardware requirements, its actual pricing (the base app is free; an optional community marketplace called PalsHub sells premium presets), and who should — and should not — use it instead of a commercial alternative.',
    metaDescription:
      'PocketPal AI review: a free, MIT-licensed, open-source app that runs GGUF models locally on iPhone and Android. Models, RAM needs, pricing, and who it fits.',
    twitterDescription:
      'PocketPal AI review 2026: the free, open-source app that runs GGUF models on-device for iPhone and Android. What it supports, what it costs, and who should skip it.',
    audience:
      'Privacy-conscious iPhone and Android users who want to run open-weight AI models locally without paying for a commercial app.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'PocketPal AI review',
    targetKeywords: [
      'pocketpal ai review',
      'pocketpal ai android',
      'pocketpal ai iphone',
      'pocketpal ai models',
      'pocketpal ai vs private llm',
      'free local llm app',
      'open source local ai app',
      'run gguf models on phone',
    ],
    current_models_mentioned: ['Gemma 2', 'Qwen', 'Phi', 'Danube 3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android'],
    leadAnswerBlock:
      '**PocketPal AI is a free, open-source (MIT license) app that runs GGUF language models entirely on your iPhone, iPad, or Android device, with no cloud dependency for chat.** Built by developer Asghar Ghorbani and hosted on [GitHub](https://github.com/a-ghorbani/pocketpal-ai) (over 8,000 stars at review time), it ships with quick-download access to models like Gemma 2, Qwen, Phi, and Danube 3, and can load any other GGUF file you source from Hugging Face. The core app costs nothing; an optional in-app marketplace called PalsHub sells premium assistant presets, but chatting with a downloaded model is free.',
    quickAnswerTop: {
      en: {
        question: 'Is PocketPal AI worth installing for private, offline AI chat?',
        answer:
          'Yes, if you want a genuinely free and open-source way to run open-weight models on your own phone and are comfortable managing model downloads yourself. PocketPal AI has no subscription for its core chat function, publishes its full source code on GitHub, and supports any GGUF model — not just a fixed curated list. It is a better fit for technically curious users than for people who want a polished, zero-configuration experience; Loci or Private LLM trade flexibility for a more guided setup.',
        bullets: [
          'Free and open source under the MIT license — no subscription for chatting with a local model.',
          'Available on the [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (iPhone/iPad) and [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) (Android).',
          'Ships with one-tap downloads for Gemma 2, Qwen, Phi, and Danube 3, plus support for any custom GGUF file from Hugging Face.',
          'Built by a single developer, Asghar Ghorbani, as a personal open-source project — not a funded company.',
          'Optional PalsHub marketplace sells premium assistant presets via in-app purchase; the base chat app itself has no paywall.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is PocketPal AI?', anchor: 'what-is-pocketpal-ai' },
      { label: 'Who Built PocketPal AI?', anchor: 'history-and-developer' },
      { label: 'How to Get Started with PocketPal AI', anchor: 'getting-started' },
      { label: 'Which Models Does PocketPal AI Support?', anchor: 'models-supported' },
      { label: 'Is PocketPal AI Available on iPhone and Android?', anchor: 'platform-availability' },
      { label: 'How Much Does PocketPal AI Cost?', anchor: 'pricing' },
      { label: 'What Features Does PocketPal AI Have?', anchor: 'key-features' },
      { label: 'What Hardware Do You Need?', anchor: 'hardware-requirements' },
      { label: 'Who Should Use PocketPal AI', anchor: 'who-should-use' },
      { label: 'Who Should Not Use PocketPal AI', anchor: 'who-should-not-use' },
      { label: 'PocketPal AI vs. Alternatives', anchor: 'vs-alternatives' },
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
            text: 'PocketPal AI is a free, MIT-licensed, open-source app for iPhone, iPad, and Android that downloads and runs GGUF language models directly on the device, built and maintained by developer Asghar Ghorbani.',
          },
          {
            type: 'plain-terms',
            text: 'It is an app you install to chat with an AI model that runs on your own phone instead of a company server — the code is public on GitHub, the app itself costs nothing, and you pick which model to download rather than being locked to one provider.',
          },
        ],
        items: [
          'Free and open source (MIT license); source code and issue tracker are public on [GitHub](https://github.com/a-ghorbani/pocketpal-ai).',
          'Built by Asghar Ghorbani as a personal project, then open-sourced once it gained traction.',
          'Runs GGUF models via llama.cpp entirely on-device — no account, no server round-trip to chat.',
          'Ships with quick-download access to Gemma 2, Qwen, Phi, and Danube 3; any other GGUF model from Hugging Face can be loaded manually.',
          'Available on the App Store (iPhone/iPad) and Google Play (Android); no Mac, Windows, or Linux release.',
          'The base app has no subscription; an optional PalsHub marketplace sells premium assistant presets via in-app purchase.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the public [GitHub repository](https://github.com/a-ghorbani/pocketpal-ai), the project\'s in-repo documentation, and the App Store and Google Play listings, checked in September 2026. PromptQuorum has not conducted independent hands-on benchmarking of PocketPal AI for this review — performance figures below are general local-LLM hardware guidance, not measurements specific to this app.',
          },
        ],
      },
      overview: {
        id: 'what-is-pocketpal-ai',
        title: 'What Is PocketPal AI?',
        content: [
          '**PocketPal AI is a mobile app that downloads open-weight language models in the GGUF format and runs them locally on an iPhone, iPad, or Android device, using [llama.cpp](https://github.com/ggml-org/llama.cpp) as the inference engine.** The app itself is built with React Native and is [MIT-licensed](https://github.com/a-ghorbani/pocketpal-ai/blob/main/LICENSE), meaning the full source code is public and free to inspect, fork, or modify.',
          'Unlike apps that lock users into a fixed, curated model list, PocketPal AI lets you pick from a set of models the app can fetch in one tap, or import any GGUF file you find on [Hugging Face](https://huggingface.co) — including gated models you have accepted the license terms for. That flexibility is the app\'s defining trait: it behaves more like a general-purpose GGUF runtime with a chat UI than a single-vendor product.',
        ],
        note: 'GGUF is a file format for packaging quantized open-weight language models so they can run efficiently on consumer hardware via runtimes like llama.cpp, instead of calling a cloud API for every response.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Who Built PocketPal AI?',
        content: [
          '**PocketPal AI was created by Asghar Ghorbani, who started it as a personal side project to run small language models on his own phone before open-sourcing it once it attracted outside interest.** Ghorbani wrote about the project\'s origin and motivation in a [Medium post, "PocketPal AI: Tiny LLMs in the Pocket"](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75), describing the goal as putting the power of small language models directly in his pocket.',
          'The project is maintained in the developer\'s spare time rather than by a funded company or dedicated team — the repository\'s own setup documentation notes this directly, which is worth knowing before expecting enterprise-grade support response times. The GitHub repository ([a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)) has accumulated over 8,000 stars and more than 850 forks at review time, and it continues to receive regular releases covering new model support, UI changes, and feature additions such as internet search integration, chat pinning, and export to Markdown.',
        ],
        items: [
          'Developer: Asghar Ghorbani (GitHub: [a-ghorbani](https://github.com/a-ghorbani)), working independently rather than as a company.',
          'Started as a personal project to run small language models on-device; open-sourced after gaining public interest.',
          'License: MIT — permissive open source, free to use, fork, and modify.',
          'Over 8,000 GitHub stars and more than 850 forks at review time, with an active issue tracker and pull request history.',
          'Development pace: frequent point releases adding model-runtime updates, new UI features, and expanded language support, maintained on a volunteer basis.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started with PocketPal AI',
        content: [
          '**Getting a working local chat in PocketPal AI takes four steps after installing the app, per the project\'s own [getting-started documentation](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md).** There is no account creation or sign-in step — the entire flow happens on-device.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download PocketPal AI from the [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) on iPhone/iPad or [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) on Android. No account or email sign-up is required to open the app.',
          },
          {
            title: 'Open the Models page',
            whyItMatters: 'Navigate to the Models tab from the app menu to see the list of quick-download models (such as Gemma 2, Qwen, Phi, and Danube 3) and the option to import a custom GGUF file.',
          },
          {
            title: 'Download a model',
            whyItMatters: 'Pick a model sized for your device\'s RAM (see the hardware section below) and download it. Larger, more capable models take longer to download and use more on-device storage.',
          },
          {
            title: 'Load the model and start chatting',
            whyItMatters: 'Tap "Load" to bring the downloaded model into memory, then switch to the Chat page. Once loaded, all inference happens on-device — PocketPal AI\'s "Auto Offload/Load" feature can automatically unload the model when the app is backgrounded to save memory, then reload it when you return.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Which Models Does PocketPal AI Support?',
        itemHeadings: true,
        columns: ['Model family', 'Access method', 'Typical use case'],
        rows: [
          {
            'Model family': 'Gemma 2',
            'Access method': 'One-tap quick download in-app',
            'Typical use case': "General chat; Google's open-weight model family",
          },
          {
            'Model family': 'Qwen',
            'Access method': 'One-tap quick download in-app',
            'Typical use case': "General chat and reasoning; Alibaba's open-weight model family",
          },
          {
            'Model family': 'Phi',
            'Access method': 'One-tap quick download in-app',
            'Typical use case': "Compact reasoning; Microsoft's small-model family",
          },
          {
            'Model family': 'Danube 3',
            'Access method': 'One-tap quick download in-app',
            'Typical use case': "Lightweight chat; H2O.ai's small-model family",
          },
          {
            'Model family': 'Any other GGUF model',
            'Access method': 'Manual import via Hugging Face Hub search inside the app, including gated models after accepting license terms',
            'Typical use case': 'Custom or niche models not in the quick-download list',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'Is PocketPal AI Available on iPhone and Android?',
        itemHeadings: true,
        columns: ['Platform', 'Availability', 'Notes'],
        rows: [
          {
            'Platform': 'iPhone / iPad',
            'Availability': 'Available on the [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)',
            'Notes': 'Uses Apple\'s Metal GPU API for acceleration by default; this can be disabled in-app if it causes stability issues on a given device.',
          },
          {
            'Platform': 'Android',
            'Availability': 'Available on [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)',
            'Notes': 'Recent releases restored a Qualcomm Hexagon NPU acceleration backend for compatible chipsets, in addition to standard CPU inference.',
          },
          {
            'Platform': 'Mac / Windows / Linux',
            'Availability': 'No desktop release found at review time',
            'Notes': 'PocketPal AI is a mobile-only app. Desktop users who want a local GGUF chat client should look at Ollama, LM Studio, or Jan AI instead.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'How Much Does PocketPal AI Cost?',
        content: [
          '**PocketPal AI is free to download and free to use for chatting with a locally downloaded model — there is no subscription, and the source code is public under the MIT license.** The only paid component found in the app is PalsHub, an in-app marketplace where community members can publish and sell premium "Pals" (customizable assistant presets); PalsHub in-app purchases are available on the iOS and Android app depending on region.',
          'Because the app and its model-running functionality are open source and free, the only ongoing cost to the user is the storage space and bandwidth needed to download GGUF model files — a 3–4B parameter quantized model is typically a few gigabytes, and larger models are proportionally bigger.',
        ],
        items: [
          '**Base app:** Free, no subscription, MIT-licensed open source.',
          '**Chatting with downloaded models:** Free — no per-message or per-token charge, since inference runs on your own device.',
          '**PalsHub marketplace:** Optional in-app purchases for premium community-made assistant presets; the base chat functionality does not require this.',
          '**Storage cost:** Not monetary, but real — each downloaded GGUF model consumes device storage, typically several gigabytes per model.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'What Features Does PocketPal AI Have?',
        content: [
          '**Beyond basic local chat, PocketPal AI has grown a set of features common to more mature local-AI apps, added incrementally across its release history.** These include:',
        ],
        items: [
          '**Pals and PalsHub.** "Pals" are customizable assistant presets (system prompt, model, and behavior bundled together); PalsHub is a marketplace where users can share or sell their own Pals.',
          '**Talents (tool-calling).** The app supports an agent-style flow where a model can invoke defined tools mid-conversation rather than only generating plain text.',
          '**Internet search in chat.** Recent releases let a chat search the web using a user-supplied API key from providers such as Brave, Tavily, or Exa — this is optional and requires the user\'s own key, not a bundled search service.',
          '**Text-to-speech output.** The app can read responses aloud, with support expanding across dozens of languages in recent releases.',
          '**Chat pinning and Markdown export.** Conversations can be pinned for quick access and exported as Markdown files.',
          '**Speculative decoding (experimental).** A smaller "draft" model can be paired with a larger model to speed up generation — flagged by the project itself as an experimental feature, not a stable guarantee.',
          '**Benchmarking tools.** The app includes a way to benchmark model performance on the current device, useful for comparing how different quantization levels perform on your specific phone.',
        ],
        note: 'Feature availability can vary by app version and platform (iOS vs. Android) since the project ships frequent, incremental releases. Check the in-app changelog or the [GitHub releases page](https://github.com/a-ghorbani/pocketpal-ai/releases) for what is live in your installed version.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'What Hardware Do You Need to Run PocketPal AI?',
        content: [
          '**The model you pick, not the app itself, sets your real hardware floor — as a general rule for GGUF models on phones, a quantized 2–4B parameter model needs roughly 3–4 GB of free RAM, while a 7–8B parameter model needs 6–8 GB or more.** This is standard local-LLM sizing guidance, not a PocketPal-specific benchmark; PromptQuorum has not independently benchmarked PocketPal AI\'s exact memory usage per model.',
          'On iPhone and iPad, the app uses Apple\'s Metal GPU API by default, which generally improves inference speed over CPU-only execution on Apple Silicon devices. On Android, recent releases added support for a Qualcomm Hexagon NPU acceleration backend on compatible chipsets; devices without a supported NPU fall back to CPU inference, which is markedly slower for larger models.',
        ],
        items: [
          'Small models (2–4B parameters, quantized): usable on most phones from the last few years with 4 GB+ of free RAM.',
          'Mid-size models (7–8B parameters, quantized): recommended device RAM of 8 GB or more for acceptable responsiveness.',
          'Storage: budget several gigabytes of free device storage per downloaded model file.',
          'Faster inference: an Apple Silicon iPhone/iPad (Metal acceleration) or a recent Android device with a supported Qualcomm Hexagon NPU will outperform older or budget hardware running CPU-only.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use PocketPal AI',
        items: [
          '**Privacy-conscious users who want zero subscription cost.** If the goal is running an open-weight model with no ongoing fee and no account, PocketPal AI\'s MIT-licensed, free core app is a direct fit.',
          '**Users who want to try models beyond a fixed curated list.** Because the app can load any GGUF file from Hugging Face — not just its quick-download shortlist — it suits people who already have a specific model in mind.',
          '**Developers and technically curious users comfortable with open-source projects.** The public GitHub repository, issue tracker, and frequent releases suit users willing to read release notes or file an issue rather than expect dedicated customer support.',
          '**Users who want to inspect or modify the code themselves.** The MIT license permits forking and modification, which matters to anyone who wants to audit exactly what the app does before trusting it with private conversations.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use PocketPal AI',
        items: [
          '**Users who want a fully guided, zero-configuration experience.** Picking the right model size for your device and managing downloads yourself is part of the workflow; users who want the app to make that decision for them may prefer a more curated app like Loci.',
          '**Users who need Mac, Windows, or Linux support.** PocketPal AI is mobile-only (iPhone/iPad and Android); desktop users should look at Ollama, LM Studio, or Jan AI instead.',
          '**Users who want the most demanding models (70B+ parameters).** Phone hardware, even flagship devices, cannot practically run models at that scale locally — those workloads need a desktop, workstation, or cloud API regardless of which mobile app is used.',
          '**Users who expect dedicated commercial support.** PocketPal AI is maintained by one developer in spare time, per the project\'s own documentation; users who need guaranteed response times or enterprise support agreements should look at a commercially backed alternative.',
          '**Users who want built-in cloud sync across devices.** Because inference and chat history are local to each device by design, PocketPal AI does not offer a built-in account-based sync between an iPhone and an Android device the way a cloud-backed chat app would.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'PocketPal AI vs. Alternatives',
        itemHeadings: true,
        columns: ['App', 'License / cost', 'Platforms', 'Model flexibility'],
        rows: [
          {
            'App': 'PocketPal AI',
            'License / cost': 'Free, open source (MIT)',
            'Platforms': 'iPhone/iPad, Android',
            'Model flexibility': 'Quick-download shortlist (Gemma 2, Qwen, Phi, Danube 3) plus any GGUF file from Hugging Face',
          },
          {
            'App': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'License / cost': 'Free tier plus paid tiers; closed source',
            'Platforms': 'iPhone/iPad/Android/Mac/Windows (5 platforms)',
            'Model flexibility': 'Curated library (~10 models); cannot import custom GGUF files',
          },
          {
            'App': 'Private LLM',
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
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'License / cost': 'Free; closed source',
            'Platforms': 'iPhone/iPad',
            'Model flexibility': 'Curated model list, per its App Store listing',
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
            'Model flexibility': 'Multi-provider client; local on-device inference via a LiteRT provider for models like Gemma and Qwen',
          },
          {
            'App': 'MLC Chat (MLC-LLM)',
            'License / cost': 'Free, open source (Apache 2.0)',
            'Platforms': 'iPhone/iPad, Android',
            'Model flexibility': 'Runs models compiled for the MLC runtime rather than raw GGUF files',
          },
        ],
        note: 'LLM Farm, a formerly popular open-source iOS GGUF chat app, was delisted from the App Store and marked "temporarily unavailable" on its own GitHub repository at review time — it is omitted from active recommendations above for that reason. Layla, another on-device assistant app, reportedly had its free "Layla Lite" tier removed from Google Play; check [layla-network.ai](https://www.layla-network.ai) directly for current availability before assuming it is installable.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is PocketPal AI free?',
            a: 'Yes. PocketPal AI is free to download and free to use for chatting with a downloaded model, and the app is open source under the MIT license. An optional in-app marketplace, PalsHub, sells premium community-made assistant presets, but the core chat functionality has no subscription or paywall.',
          },
          {
            q: 'Who developed PocketPal AI?',
            a: 'PocketPal AI was created by Asghar Ghorbani, who started it as a personal project to run small language models on his own phone before open-sourcing the code once it gained outside interest. It is maintained independently rather than by a company.',
          },
          {
            q: 'Is PocketPal AI open source?',
            a: 'Yes, the full source code is published on [GitHub](https://github.com/a-ghorbani/pocketpal-ai) under the MIT license, a permissive license that allows free use, modification, and redistribution.',
          },
          {
            q: 'Which models can PocketPal AI run?',
            a: 'PocketPal AI ships with one-tap downloads for Gemma 2, Qwen, Phi, and Danube 3, and can additionally load any other GGUF-format model you find on Hugging Face, including gated models after you accept their license terms.',
          },
          {
            q: 'Does PocketPal AI work on iPhone and Android?',
            a: 'Yes. PocketPal AI is available on the [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) for iPhone and iPad, and on [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) for Android. There is no Mac, Windows, or Linux version.',
          },
          {
            q: 'How much RAM does PocketPal AI need?',
            a: 'This depends on the model you choose, not a fixed app requirement. As general guidance for quantized GGUF models on phones, 2–4B parameter models typically need 3–4 GB of free RAM, and 7–8B parameter models typically need 8 GB or more. Larger devices with more RAM can run larger, more capable models.',
          },
          {
            q: 'Does PocketPal AI require an internet connection?',
            a: 'No internet connection is required to chat once a model is downloaded — inference runs entirely on-device via llama.cpp. An internet connection is needed to download models initially, and optionally to use the app\'s internet-search feature, which requires the user\'s own API key from a provider such as Brave, Tavily, or Exa.',
          },
          {
            q: 'Is PocketPal AI safe for private conversations?',
            a: 'Because inference happens locally and the source code is public and auditable under the MIT license, PocketPal AI does not need to send chat content to a server to function. This review has not conducted an independent security audit of the app; users who need that level of assurance should review the public repository or its issue tracker directly.',
          },
          {
            q: 'How does PocketPal AI compare to Private LLM or Loci?',
            a: 'PocketPal AI is free and open source with unrestricted GGUF model loading, while Private LLM is a paid, closed-source Apple-only app with a larger built-in model catalog (140+ models), and Loci is a closed-source app spanning five platforms with a smaller, more curated model library. Choose PocketPal AI if cost and openness matter most; choose Private LLM or Loci if a more guided, polished experience across more platforms matters more than being free or open source. See the comparison table above for details.',
          },
          {
            q: 'Can I run large models like 70B parameter models on PocketPal AI?',
            a: 'No. Phone hardware, including current flagship devices, does not have enough RAM to practically run models at that scale locally. PocketPal AI is built for small and mid-size models (roughly up to 8B parameters); users who need larger models should use a desktop workstation or a cloud API instead.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'PocketPal AI earns its place among mobile local-AI apps by being genuinely free, genuinely open source, and genuinely flexible about which model it runs — three things that are each individually rare, and rarer still combined, in this category. It is not the most polished app in this space: users manage their own model downloads, the interface trades some guidance for flexibility, and the project is maintained by one developer in spare time rather than a company with a support team. Choose PocketPal AI if you want to run an open-weight model on your own phone with no subscription and no vendor lock-in, and you are comfortable picking a model sized for your device yourself. Choose a paid, curated app like Private LLM or Loci instead if you would rather trade some cost and openness for a more guided setup and dedicated support across more platforms.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PocketPal AI on GitHub](https://github.com/a-ghorbani/pocketpal-ai) — source code, license (MIT), release history, and star/fork counts referenced in this review.',
          '[PocketPal AI getting-started documentation](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) — setup steps, supported bundled models, and GPU acceleration notes.',
          '[PocketPal AI on the App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) — iOS/iPadOS availability.',
          '[PocketPal AI on Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) — Android availability.',
          '["PocketPal AI: Tiny LLMs in the Pocket" by Asghar Ghorbani, Medium](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75) — project origin and developer motivation.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the Android app roundup, including PocketPal AI, MLC Chat, Maid, and Layla.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the iOS equivalent, comparing PocketPal AI against Private LLM and Enclave AI.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — a paid, closed-source, five-platform alternative with a curated model library.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — the model-layer companion piece for choosing which GGUF model actually fits your phone.',
          '[Enclave AI Review](/power-local-llm/enclave-ai-review) — an Apple-only alternative with Siri and Shortcuts automation.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PocketPal AI Review (2026): Free, Open-Source On-Device Chat',
      description:
        'PocketPal AI review: a free, MIT-licensed, open-source app that runs GGUF models locally on iPhone and Android. Models, RAM needs, pricing, and who it fits.',
      url: 'https://promptquorum.com/power-local-llm/pocketpal-ai-review',
      inLanguage: 'en',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Privacy-conscious iPhone and Android users evaluating free, open-source local AI chat apps' },
      about: [
        { '@type': 'Thing', name: 'PocketPal AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/pocketpal-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PocketPal AI Review (2026)', item: 'https://promptquorum.com/power-local-llm/pocketpal-ai-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketpal-ai-review-hero-de.webp',
    title: 'PocketPal AI im Test (2026): Kostenloser, quelloffener Chat auf dem Gerät',
    seoTitle: 'PocketPal AI Test 2026: Open-Source lokaler Chat',
    intro:
      'PocketPal AI ist eine kostenlose, unter der MIT-Lizenz quelloffene App für iPhone, iPad und Android, die GGUF-Sprachmodelle direkt auf dem Gerät ausführt — ohne Serverumweg und ohne Konto für den Chat. Entwickelt hat sie Asghar Ghorbani, der die App zunächst als privates Projekt startete, bevor er den Code auf [GitHub](https://github.com/a-ghorbani/pocketpal-ai) veröffentlichte. Dieser Test beschreibt, was die App heute leistet, welche Modelle sie mitbringt, welche Hardware wirklich nötig ist, wie das Preismodell tatsächlich aussieht (die Basis-App ist kostenlos; ein optionaler Community-Marktplatz namens PalsHub verkauft Premium-Presets) und für wen sie sich eignet — und für wen nicht.',
    metaDescription:
      'PocketPal AI im Test: eine kostenlose, MIT-lizenzierte Open-Source-App, die GGUF-Modelle lokal auf iPhone und Android ausführt. Modelle, RAM-Bedarf, Preise und Zielgruppe.',
    twitterDescription:
      'PocketPal AI Test 2026: die kostenlose Open-Source-App, die GGUF-Modelle auf dem Gerät für iPhone und Android ausführt. Funktionsumfang, Kosten und für wen sich der Umstieg lohnt.',
    audience:
      'Datenschutzbewusste iPhone- und Android-Nutzer, die offene KI-Modelle lokal ausführen möchten, ohne für eine kommerzielle App zu bezahlen.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'PocketPal AI Test',
    targetKeywords: [
      'pocketpal ai test',
      'pocketpal ai android',
      'pocketpal ai iphone',
      'pocketpal ai modelle',
      'pocketpal ai vs private llm',
      'kostenlose lokale ki app',
      'open source lokale ki app',
      'gguf modelle auf dem handy ausführen',
    ],
    current_models_mentioned: ['Gemma 2', 'Qwen', 'Phi', 'Danube 3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android'],
    leadAnswerBlock:
      '**PocketPal AI ist eine kostenlose, quelloffene App (MIT-Lizenz), die GGUF-Sprachmodelle vollständig auf Ihrem iPhone, iPad oder Android-Gerät ausführt — ohne Cloud-Abhängigkeit für den Chat.** Entwickelt von Asghar Ghorbani und auf [GitHub](https://github.com/a-ghorbani/pocketpal-ai) gehostet (zum Zeitpunkt dieses Tests über 8.000 Sterne), bietet die App den schnellen Download von Modellen wie Gemma 2, Qwen, Phi und Danube 3 sowie die Möglichkeit, jede andere GGUF-Datei von Hugging Face zu laden. Die Kern-App kostet nichts; ein optionaler In-App-Marktplace namens PalsHub verkauft Premium-Assistenten-Presets, aber das Chatten mit einem heruntergeladenen Modell ist kostenlos.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich PocketPal AI für privaten, offline lauffähigen KI-Chat?',
        answer:
          'Ja, wenn Sie eine wirklich kostenlose und quelloffene Möglichkeit suchen, offene Modelle auf Ihrem eigenen Handy auszuführen, und bereit sind, Modell-Downloads selbst zu verwalten. PocketPal AI verlangt kein Abo für die Kernfunktion, veröffentlicht den vollständigen Quellcode auf GitHub und unterstützt beliebige GGUF-Modelle statt einer festen Auswahlliste. Technisch interessierte Nutzer kommen besser damit zurecht als Nutzer, die eine durchgestylte Erfahrung ohne Konfiguration erwarten — Loci oder Private LLM tauschen Flexibilität gegen ein geführteres Setup.',
        bullets: [
          'Kostenlos und quelloffen unter der MIT-Lizenz — kein Abo für den Chat mit einem lokalen Modell.',
          'Verfügbar im [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (iPhone/iPad) und bei [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) (Android).',
          'Bietet Ein-Tipp-Downloads für Gemma 2, Qwen, Phi und Danube 3 sowie Unterstützung für beliebige GGUF-Dateien von Hugging Face.',
          'Entwickelt von einer einzelnen Person, Asghar Ghorbani, als privates Open-Source-Projekt — kein finanziertes Unternehmen.',
          'Der optionale PalsHub-Marktplace verkauft Premium-Assistenten-Presets per In-App-Kauf; die Basis-Chat-App selbst hat keine Bezahlschranke.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist PocketPal AI?', anchor: 'what-is-pocketpal-ai' },
      { label: 'Wer hat PocketPal AI entwickelt?', anchor: 'history-and-developer' },
      { label: 'Erste Schritte mit PocketPal AI', anchor: 'getting-started' },
      { label: 'Welche Modelle unterstützt PocketPal AI?', anchor: 'models-supported' },
      { label: 'Ist PocketPal AI für iPhone und Android verfügbar?', anchor: 'platform-availability' },
      { label: 'Was kostet PocketPal AI?', anchor: 'pricing' },
      { label: 'Welche Funktionen bietet PocketPal AI?', anchor: 'key-features' },
      { label: 'Welche Hardware brauchen Sie?', anchor: 'hardware-requirements' },
      { label: 'Für wen sich PocketPal AI eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich PocketPal AI nicht eignet', anchor: 'who-should-not-use' },
      { label: 'PocketPal AI im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
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
            text: 'PocketPal AI ist eine kostenlose, unter der MIT-Lizenz quelloffene App für iPhone, iPad und Android, die GGUF-Sprachmodelle direkt auf dem Gerät ausführt — entwickelt und gepflegt von Asghar Ghorbani.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist eine App, mit der Sie mit einer KI chatten, die auf Ihrem eigenen Handy läuft statt auf einem Firmenserver — der Code ist auf GitHub öffentlich einsehbar, die App selbst kostet nichts, und Sie entscheiden selbst, welches Modell Sie herunterladen, statt an einen Anbieter gebunden zu sein.',
          },
        ],
        items: [
          'Kostenlos und quelloffen (MIT-Lizenz); Quellcode und Issue-Tracker sind öffentlich auf [GitHub](https://github.com/a-ghorbani/pocketpal-ai).',
          'Von Asghar Ghorbani als privates Projekt gestartet, dann nach wachsendem Interesse quelloffen veröffentlicht.',
          'Führt GGUF-Modelle über llama.cpp vollständig auf dem Gerät aus — kein Konto, kein Serverumweg für den Chat.',
          'Bietet Ein-Tipp-Downloads für Gemma 2, Qwen, Phi und Danube 3; jedes andere GGUF-Modell von Hugging Face lässt sich manuell laden.',
          'Verfügbar im App Store (iPhone/iPad) und bei Google Play (Android); keine Mac-, Windows- oder Linux-Version.',
          'Die Basis-App verlangt kein Abo; ein optionaler PalsHub-Marktplace verkauft Premium-Assistenten-Presets per In-App-Kauf.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test basiert auf dem öffentlichen [GitHub-Repository](https://github.com/a-ghorbani/pocketpal-ai), der projektinternen Dokumentation sowie den Einträgen im App Store und bei Google Play, geprüft im September 2026. PromptQuorum hat für diesen Test keine eigenen Hands-on-Benchmarks von PocketPal AI durchgeführt — die Leistungsangaben unten sind allgemeine Hardware-Richtwerte für lokale LLMs, keine app-spezifischen Messungen.',
          },
        ],
      },
      overview: {
        id: 'what-is-pocketpal-ai',
        title: 'Was ist PocketPal AI?',
        content: [
          '**PocketPal AI ist eine mobile App, die offene Sprachmodelle im GGUF-Format herunterlädt und lokal auf einem iPhone, iPad oder Android-Gerät ausführt — mithilfe von [llama.cpp](https://github.com/ggml-org/llama.cpp) als Inferenz-Engine.** Die App selbst ist mit React Native gebaut und unter der [MIT-Lizenz](https://github.com/a-ghorbani/pocketpal-ai/blob/main/LICENSE) veröffentlicht, das heißt, der vollständige Quellcode ist öffentlich einsehbar, frei nutzbar, veränderbar und weiterverwendbar.',
          'Anders als Apps mit einer festen, kuratierten Modellliste erlaubt PocketPal AI die Wahl aus einer Reihe von Modellen, die die App per Ein-Tipp-Download bezieht, oder den Import jeder beliebigen GGUF-Datei von [Hugging Face](https://huggingface.co) — einschließlich zugangsbeschränkter Modelle, deren Lizenzbedingungen zuvor akzeptiert wurden. Diese Flexibilität ist das prägende Merkmal der App: Sie verhält sich eher wie eine allgemeine GGUF-Laufzeitumgebung mit Chat-Oberfläche als wie ein Produkt eines einzelnen Anbieters.',
        ],
        note: 'GGUF ist ein Dateiformat zum Verpacken quantisierter, offener Sprachmodelle, damit sie über Laufzeitumgebungen wie llama.cpp effizient auf handelsüblicher Hardware laufen — statt für jede Antwort eine Cloud-API aufzurufen.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Wer hat PocketPal AI entwickelt?',
        content: [
          '**PocketPal AI wurde von Asghar Ghorbani entwickelt, der die App zunächst als privates Nebenprojekt startete, um kleine Sprachmodelle auf seinem eigenen Handy auszuführen, bevor er sie nach wachsendem öffentlichen Interesse quelloffen veröffentlichte.** Ghorbani beschrieb den Ursprung und die Motivation des Projekts in einem [Medium-Beitrag, „PocketPal AI: Tiny LLMs in the Pocket"](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75), in dem er das Ziel beschreibt, die Leistungsfähigkeit kleiner Sprachmodelle direkt in seine Tasche zu bringen.',
          'Das Projekt wird in der Freizeit des Entwicklers gepflegt, nicht von einem finanzierten Unternehmen oder einem festen Team — die projekteigene Einrichtungsdokumentation weist ausdrücklich darauf hin, was wichtig zu wissen ist, bevor man Support-Reaktionszeiten wie bei einem Unternehmen erwartet. Das GitHub-Repository ([a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)) hat zum Zeitpunkt dieses Tests über 8.000 Sterne und mehr als 850 Forks gesammelt und erhält weiterhin regelmäßig neue Versionen mit neuer Modellunterstützung, Oberflächenänderungen und Funktionserweiterungen wie Internetsuche im Chat, angehefteten Chats und Markdown-Export.',
        ],
        items: [
          'Entwickler: Asghar Ghorbani (GitHub: [a-ghorbani](https://github.com/a-ghorbani)), unabhängig tätig statt als Unternehmen.',
          'Gestartet als privates Projekt zum lokalen Ausführen kleiner Sprachmodelle; nach öffentlichem Interesse quelloffen veröffentlicht.',
          'Lizenz: MIT — permissiv, kostenlos nutzbar, veränderbar und weiterverwendbar.',
          'Über 8.000 GitHub-Sterne und mehr als 850 Forks zum Zeitpunkt dieses Tests, mit aktivem Issue-Tracker und Pull-Request-Historie.',
          'Entwicklungstempo: häufige Punkt-Releases mit Laufzeit-Updates, neuen Oberflächenfunktionen und erweiterter Sprachunterstützung, ehrenamtlich gepflegt.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Erste Schritte mit PocketPal AI',
        content: [
          '**Ein funktionierender lokaler Chat in PocketPal AI benötigt nach der Installation vier Schritte, laut der projekteigenen [Einstiegsdokumentation](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md).** Es gibt keine Kontoerstellung oder Anmeldung — der gesamte Ablauf findet auf dem Gerät statt.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie PocketPal AI aus dem [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) für iPhone/iPad oder bei [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) für Android herunter. Für das Öffnen der App ist kein Konto und keine E-Mail-Anmeldung nötig.',
          },
          {
            title: 'Seite „Modelle" öffnen',
            whyItMatters: 'Navigieren Sie im App-Menü zum Reiter „Modelle", um die Liste der Ein-Tipp-Download-Modelle (etwa Gemma 2, Qwen, Phi und Danube 3) sowie die Option zum Import einer eigenen GGUF-Datei zu sehen.',
          },
          {
            title: 'Modell herunterladen',
            whyItMatters: 'Wählen Sie ein Modell passend zum RAM Ihres Geräts (siehe Hardware-Abschnitt unten) und laden Sie es herunter. Größere, leistungsfähigere Modelle brauchen länger zum Download und mehr Speicherplatz auf dem Gerät.',
          },
          {
            title: 'Modell laden und chatten',
            whyItMatters: 'Tippen Sie auf „Laden", um das heruntergeladene Modell in den Speicher zu bringen, und wechseln Sie dann zur Chat-Seite. Nach dem Laden läuft die gesamte Inferenz auf dem Gerät — die „Auto Offload/Load"-Funktion von PocketPal AI kann das Modell automatisch entladen, wenn die App in den Hintergrund wechselt, um Speicher zu sparen, und es bei Rückkehr wieder laden.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Welche Modelle unterstützt PocketPal AI?',
        itemHeadings: true,
        columns: ['Modellfamilie', 'Zugriffsart', 'Typischer Einsatzzweck'],
        rows: [
          {
            'Modellfamilie': 'Gemma 2',
            'Zugriffsart': 'Ein-Tipp-Download in der App',
            'Typischer Einsatzzweck': 'Allgemeiner Chat; offene Modellfamilie von Google',
          },
          {
            'Modellfamilie': 'Qwen',
            'Zugriffsart': 'Ein-Tipp-Download in der App',
            'Typischer Einsatzzweck': 'Allgemeiner Chat und Reasoning; offene Modellfamilie von Alibaba',
          },
          {
            'Modellfamilie': 'Phi',
            'Zugriffsart': 'Ein-Tipp-Download in der App',
            'Typischer Einsatzzweck': 'Kompaktes Reasoning; kleine Modellfamilie von Microsoft',
          },
          {
            'Modellfamilie': 'Danube 3',
            'Zugriffsart': 'Ein-Tipp-Download in der App',
            'Typischer Einsatzzweck': 'Leichtgewichtiger Chat; kleine Modellfamilie von H2O.ai',
          },
          {
            'Modellfamilie': 'Jedes andere GGUF-Modell',
            'Zugriffsart': 'Manueller Import über die Hugging-Face-Hub-Suche in der App, einschließlich zugangsbeschränkter Modelle nach Annahme der Lizenzbedingungen',
            'Typischer Einsatzzweck': 'Individuelle oder Nischenmodelle, die nicht in der Ein-Tipp-Liste enthalten sind',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'Ist PocketPal AI für iPhone und Android verfügbar?',
        itemHeadings: true,
        columns: ['Plattform', 'Verfügbarkeit', 'Hinweise'],
        rows: [
          {
            'Plattform': 'iPhone / iPad',
            'Verfügbarkeit': 'Verfügbar im [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)',
            'Hinweise': 'Nutzt standardmäßig Apples Metal-GPU-API zur Beschleunigung; lässt sich in der App deaktivieren, falls es auf einem bestimmten Gerät zu Instabilität führt.',
          },
          {
            'Plattform': 'Android',
            'Verfügbarkeit': 'Verfügbar bei [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)',
            'Hinweise': 'Neuere Versionen haben ein Qualcomm-Hexagon-NPU-Beschleunigungs-Backend für kompatible Chipsätze wiederhergestellt, zusätzlich zur normalen CPU-Inferenz.',
          },
          {
            'Plattform': 'Mac / Windows / Linux',
            'Verfügbarkeit': 'Zum Zeitpunkt dieses Tests keine Desktop-Version gefunden',
            'Hinweise': 'PocketPal AI ist eine reine Mobil-App. Desktop-Nutzer, die einen lokalen GGUF-Chat-Client suchen, sollten stattdessen Ollama, LM Studio oder Jan AI in Betracht ziehen.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Was kostet PocketPal AI?',
        content: [
          '**PocketPal AI ist kostenlos herunterladbar und kostenlos für den Chat mit einem lokal heruntergeladenen Modell nutzbar — es gibt kein Abo, und der Quellcode ist unter der MIT-Lizenz öffentlich.** Die einzige kostenpflichtige Komponente in der App ist PalsHub, ein In-App-Marktplace, auf dem Community-Mitglieder Premium-„Pals" (anpassbare Assistenten-Presets) veröffentlichen und verkaufen können; PalsHub-In-App-Käufe stehen je nach Region auf iOS und Android zur Verfügung.',
          'Da App und Modellausführung quelloffen und kostenlos sind, entstehen dem Nutzer nur Kosten für den Speicherplatz und die Bandbreite zum Herunterladen von GGUF-Modelldateien — ein quantisiertes 3–4B-Parameter-Modell umfasst typischerweise einige Gigabyte, größere Modelle entsprechend mehr.',
        ],
        items: [
          '**Basis-App:** Kostenlos, kein Abo, MIT-lizenzierte Open-Source-Software.',
          '**Chatten mit heruntergeladenen Modellen:** Kostenlos — keine Gebühr pro Nachricht oder Token, da die Inferenz auf dem eigenen Gerät läuft.',
          '**PalsHub-Marktplace:** Optionale In-App-Käufe für Premium-Assistenten-Presets aus der Community; die Basis-Chat-Funktion setzt dies nicht voraus.',
          '**Speicherkosten:** Kein Geld, aber real — jedes heruntergeladene GGUF-Modell belegt Gerätespeicher, typischerweise mehrere Gigabyte pro Modell.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Welche Funktionen bietet PocketPal AI?',
        content: [
          '**Über den einfachen lokalen Chat hinaus hat PocketPal AI im Laufe seiner Release-Historie schrittweise Funktionen erhalten, wie sie bei ausgereifteren lokalen KI-Apps üblich sind.** Dazu gehören:',
        ],
        items: [
          '**Pals und PalsHub.** „Pals" sind anpassbare Assistenten-Presets (System-Prompt, Modell und Verhalten gebündelt); PalsHub ist ein Marktplace, auf dem Nutzer eigene Pals teilen oder verkaufen können.',
          '**Talents (Tool-Aufrufe).** Die App unterstützt einen agentenartigen Ablauf, bei dem ein Modell mitten im Gespräch definierte Werkzeuge aufrufen kann, statt nur reinen Text zu erzeugen.',
          '**Internetsuche im Chat.** Neuere Versionen erlauben es, im Chat mit einem eigenen API-Schlüssel von Anbietern wie Brave, Tavily oder Exa im Web zu suchen — optional und mit eigenem Schlüssel, nicht als gebündelter Suchdienst.',
          '**Sprachausgabe (Text-to-Speech).** Die App kann Antworten vorlesen, mit in neueren Versionen wachsender Sprachunterstützung.',
          '**Angeheftete Chats und Markdown-Export.** Unterhaltungen lassen sich für schnellen Zugriff anheften und als Markdown-Dateien exportieren.',
          '**Spekulatives Decodieren (experimentell).** Ein kleineres „Entwurfs"-Modell lässt sich mit einem größeren Modell kombinieren, um die Generierung zu beschleunigen — vom Projekt selbst als experimentelle Funktion gekennzeichnet, nicht als stabile Garantie.',
          '**Benchmarking-Werkzeuge.** Die App enthält ein Werkzeug zum Benchmarking der Modell-Performance auf dem aktuellen Gerät, nützlich zum Vergleich verschiedener Quantisierungsstufen auf dem eigenen Handy.',
        ],
        note: 'Der Funktionsumfang kann je nach App-Version und Plattform (iOS vs. Android) variieren, da das Projekt häufige, inkrementelle Releases veröffentlicht. Prüfen Sie das In-App-Änderungsprotokoll oder die [GitHub-Releases-Seite](https://github.com/a-ghorbani/pocketpal-ai/releases), um zu sehen, was in Ihrer installierten Version aktiv ist.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Welche Hardware brauchen Sie für PocketPal AI?',
        content: [
          '**Nicht die App selbst, sondern das gewählte Modell bestimmt den echten Hardware-Mindestbedarf — als allgemeine Faustregel für GGUF-Modelle auf Handys braucht ein quantisiertes Modell mit 2–4 Milliarden Parametern etwa 3–4 GB freien RAM, ein Modell mit 7–8 Milliarden Parametern 6–8 GB oder mehr.** Dies ist eine allgemeine Richtgröße für lokale LLMs, kein PocketPal-spezifischer Benchmark; PromptQuorum hat den genauen Speicherbedarf von PocketPal AI pro Modell nicht eigenständig gemessen.',
          'Auf iPhone und iPad nutzt die App standardmäßig Apples Metal-GPU-API, was die Inferenzgeschwindigkeit gegenüber reiner CPU-Ausführung auf Apple-Silicon-Geräten in der Regel verbessert. Auf Android haben neuere Versionen ein Qualcomm-Hexagon-NPU-Beschleunigungs-Backend für kompatible Chipsätze hinzugefügt; Geräte ohne unterstützte NPU fallen auf CPU-Inferenz zurück, was bei größeren Modellen deutlich langsamer ist.',
        ],
        items: [
          'Kleine Modelle (2–4B Parameter, quantisiert): auf den meisten Handys der letzten Jahre mit 4 GB+ freiem RAM nutzbar.',
          'Mittelgroße Modelle (7–8B Parameter, quantisiert): empfohlener Geräte-RAM von 8 GB oder mehr für akzeptable Reaktionsfähigkeit.',
          'Speicherplatz: mehrere Gigabyte freien Gerätespeicher pro heruntergeladener Modelldatei einplanen.',
          'Schnellere Inferenz: ein iPhone/iPad mit Apple Silicon (Metal-Beschleunigung) oder ein aktuelles Android-Gerät mit unterstützter Qualcomm-Hexagon-NPU übertrifft ältere oder günstigere Hardware im reinen CPU-Betrieb.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich PocketPal AI eignet',
        items: [
          '**Datenschutzbewusste Nutzer, die keine Abo-Kosten wollen.** Wer ein offenes Modell ohne laufende Gebühr und ohne Konto ausführen möchte, ist mit der MIT-lizenzierten, kostenlosen Kern-App von PocketPal AI direkt bedient.',
          '**Nutzer, die Modelle über eine feste Liste hinaus ausprobieren möchten.** Da die App jede GGUF-Datei von Hugging Face laden kann — nicht nur die Ein-Tipp-Auswahl —, eignet sie sich für Nutzer, die bereits ein bestimmtes Modell im Blick haben.',
          '**Entwickler und technisch interessierte Nutzer mit Erfahrung in Open-Source-Projekten.** Das öffentliche GitHub-Repository, der Issue-Tracker und häufige Releases eignen sich für Nutzer, die bereit sind, Release Notes zu lesen oder ein Issue zu melden, statt dedizierten Kundensupport zu erwarten.',
          '**Nutzer, die den Code selbst prüfen oder anpassen möchten.** Die MIT-Lizenz erlaubt Forken und Anpassen — wichtig für alle, die genau prüfen wollen, was die App tut, bevor sie ihr private Unterhaltungen anvertrauen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich PocketPal AI nicht eignet',
        items: [
          '**Nutzer, die eine vollständig geführte Erfahrung ohne Konfiguration wollen.** Die richtige Modellgröße für das eigene Gerät zu wählen und Downloads selbst zu verwalten gehört zum Workflow; wer diese Entscheidung lieber der App überlässt, ist bei einer kuratierteren App wie Loci besser aufgehoben.',
          '**Nutzer, die Mac-, Windows- oder Linux-Unterstützung benötigen.** PocketPal AI ist reine Mobil-App (iPhone/iPad und Android); Desktop-Nutzer sollten stattdessen Ollama, LM Studio oder Jan AI in Betracht ziehen.',
          '**Nutzer, die die anspruchsvollsten Modelle (70B+ Parameter) wollen.** Handy-Hardware, selbst bei aktuellen Spitzengeräten, reicht praktisch nicht aus, um Modelle dieser Größenordnung lokal auszuführen — dafür braucht es unabhängig von der gewählten Mobil-App einen Desktop, eine Workstation oder eine Cloud-API.',
          '**Nutzer, die kommerziellen Support erwarten.** PocketPal AI wird laut projekteigener Dokumentation von einer einzelnen Person in der Freizeit gepflegt; wer garantierte Reaktionszeiten oder Enterprise-Supportverträge benötigt, sollte eine kommerziell finanzierte Alternative wählen.',
          '**Nutzer, die eine integrierte Cloud-Synchronisierung zwischen Geräten wollen.** Da Inferenz und Chatverlauf gerätebasiert lokal bleiben, bietet PocketPal AI keine integrierte, kontobasierte Synchronisierung zwischen iPhone und Android-Gerät wie eine cloudbasierte Chat-App.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'PocketPal AI im Vergleich zu Alternativen',
        itemHeadings: true,
        columns: ['App', 'Lizenz / Kosten', 'Plattformen', 'Modell-Flexibilität'],
        rows: [
          {
            'App': 'PocketPal AI',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT)',
            'Plattformen': 'iPhone/iPad, Android',
            'Modell-Flexibilität': 'Ein-Tipp-Auswahl (Gemma 2, Qwen, Phi, Danube 3) plus jede GGUF-Datei von Hugging Face',
          },
          {
            'App': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Lizenz / Kosten': 'Kostenlose Stufe plus kostenpflichtige Stufen; Closed Source',
            'Plattformen': 'iPhone/iPad/Android/Mac/Windows (5 Plattformen)',
            'Modell-Flexibilität': 'Kuratierte Bibliothek (~10 Modelle); kein Import eigener GGUF-Dateien',
          },
          {
            'App': 'Private LLM',
            'Lizenz / Kosten': 'Kostenpflichtig, Einmalkauf; Closed Source',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Modell-Flexibilität': '140+ Modelle, mit OmniQuant- und GPTQ-Quantisierungsformaten',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Lizenz / Kosten': 'Kostenlos mit kostenpflichtiger Stufe; Closed Source',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Modell-Flexibilität': 'Kuratierte Modellliste auf dem Gerät; Siri- und Shortcuts-Integration',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Lizenz / Kosten': 'Kostenlos; Closed Source',
            'Plattformen': 'iPhone/iPad',
            'Modell-Flexibilität': 'Kuratierte Modellliste, laut App-Store-Eintrag',
          },
          {
            'App': 'ChatterUI',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (AGPL-3.0)',
            'Plattformen': 'Android (aus Quellcode gebaut)',
            'Modell-Flexibilität': 'Führt GGUF-Dateien auf dem Gerät über llama.cpp aus oder verbindet sich mit Remote-APIs; Character-Card-v2-Unterstützung',
          },
          {
            'App': 'RikkaHub',
            'Lizenz / Kosten': 'Kostenlos, quelloffen',
            'Plattformen': 'Android',
            'Modell-Flexibilität': 'Multi-Provider-Client; lokale Inferenz auf dem Gerät über einen LiteRT-Provider für Modelle wie Gemma und Qwen',
          },
          {
            'App': 'MLC Chat (MLC-LLM)',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (Apache 2.0)',
            'Plattformen': 'iPhone/iPad, Android',
            'Modell-Flexibilität': 'Führt für die MLC-Laufzeitumgebung kompilierte Modelle aus, keine rohen GGUF-Dateien',
          },
        ],
        note: 'LLM Farm, eine früher populäre quelloffene iOS-GGUF-Chat-App, wurde aus dem App Store entfernt und ist im eigenen GitHub-Repository als „vorübergehend nicht verfügbar" markiert — sie ist deshalb oben von den aktiven Empfehlungen ausgenommen. Layla, eine weitere KI-Assistenten-App für das Gerät, soll ihre kostenlose Stufe „Layla Lite" bei Google Play verloren haben; prüfen Sie die aktuelle Verfügbarkeit direkt auf [layla-network.ai](https://www.layla-network.ai), bevor Sie von einer Installierbarkeit ausgehen.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist PocketPal AI kostenlos?',
            a: 'Ja. PocketPal AI ist kostenlos herunterladbar und kostenlos für den Chat mit einem heruntergeladenen Modell nutzbar, und die App ist unter der MIT-Lizenz quelloffen. Ein optionaler In-App-Marktplace, PalsHub, verkauft Premium-Assistenten-Presets aus der Community, aber die Kern-Chat-Funktion hat kein Abo und keine Bezahlschranke.',
          },
          {
            q: 'Wer hat PocketPal AI entwickelt?',
            a: 'PocketPal AI wurde von Asghar Ghorbani entwickelt, der die App zunächst als privates Projekt startete, um kleine Sprachmodelle auf seinem eigenen Handy auszuführen, bevor er den Code nach wachsendem öffentlichen Interesse quelloffen veröffentlichte. Sie wird unabhängig gepflegt, nicht von einem Unternehmen.',
          },
          {
            q: 'Ist PocketPal AI quelloffen?',
            a: 'Ja, der vollständige Quellcode ist auf [GitHub](https://github.com/a-ghorbani/pocketpal-ai) unter der MIT-Lizenz veröffentlicht, einer permissiven Lizenz, die freie Nutzung, Anpassung und Weiterverbreitung erlaubt.',
          },
          {
            q: 'Welche Modelle kann PocketPal AI ausführen?',
            a: 'PocketPal AI bietet Ein-Tipp-Downloads für Gemma 2, Qwen, Phi und Danube 3 und kann zusätzlich jedes andere GGUF-Modell laden, das Sie auf Hugging Face finden — einschließlich zugangsbeschränkter Modelle, nachdem Sie deren Lizenzbedingungen akzeptiert haben.',
          },
          {
            q: 'Funktioniert PocketPal AI auf iPhone und Android?',
            a: 'Ja. PocketPal AI ist im [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) für iPhone und iPad sowie bei [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) für Android verfügbar. Es gibt keine Mac-, Windows- oder Linux-Version.',
          },
          {
            q: 'Wie viel RAM benötigt PocketPal AI?',
            a: 'Das hängt vom gewählten Modell ab, nicht von einer festen App-Anforderung. Als allgemeine Richtgröße für quantisierte GGUF-Modelle auf Handys benötigen 2–4B-Parameter-Modelle typischerweise 3–4 GB freien RAM, 7–8B-Parameter-Modelle typischerweise 8 GB oder mehr. Geräte mit mehr RAM können größere, leistungsfähigere Modelle ausführen.',
          },
          {
            q: 'Benötigt PocketPal AI eine Internetverbindung?',
            a: 'Für den Chat ist nach dem Herunterladen eines Modells keine Internetverbindung nötig — die Inferenz läuft vollständig auf dem Gerät über llama.cpp. Eine Internetverbindung ist für den anfänglichen Modell-Download nötig sowie optional für die Internetsuchfunktion der App, die einen eigenen API-Schlüssel von einem Anbieter wie Brave, Tavily oder Exa erfordert.',
          },
          {
            q: 'Ist PocketPal AI sicher für private Unterhaltungen?',
            a: 'Da die Inferenz lokal läuft und der Quellcode unter der MIT-Lizenz öffentlich einsehbar und prüfbar ist, muss PocketPal AI keine Chat-Inhalte an einen Server senden, um zu funktionieren. Dieser Test umfasst kein eigenständiges Sicherheitsaudit der App; Nutzer, die diese Sicherheit benötigen, sollten das öffentliche Repository oder dessen Issue-Tracker selbst prüfen.',
          },
          {
            q: 'Wie schneidet PocketPal AI im Vergleich zu Private LLM oder Loci ab?',
            a: 'PocketPal AI ist kostenlos und quelloffen mit uneingeschränktem GGUF-Modell-Import, während Private LLM eine kostenpflichtige, Closed-Source-App nur für Apple-Geräte mit größerem integriertem Modellkatalog (140+ Modelle) ist und Loci eine Closed-Source-App über fünf Plattformen mit kleinerer, kuratierterer Modellbibliothek ist. Wählen Sie PocketPal AI, wenn Kosten und Offenheit am wichtigsten sind; wählen Sie Private LLM oder Loci, wenn Ihnen eine geführtere, ausgereiftere Erfahrung über mehr Plattformen wichtiger ist als kostenlos oder quelloffen zu sein. Details in der Vergleichstabelle oben.',
          },
          {
            q: 'Kann ich große Modelle wie 70B-Parameter-Modelle mit PocketPal AI ausführen?',
            a: 'Nein. Handy-Hardware, auch aktuelle Spitzengeräte, hat nicht genug RAM, um Modelle dieser Größenordnung praktisch lokal auszuführen. PocketPal AI ist für kleine und mittelgroße Modelle ausgelegt (bis etwa 8B Parameter); wer größere Modelle benötigt, sollte stattdessen eine Desktop-Workstation oder eine Cloud-API nutzen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'PocketPal AI verdient seinen Platz unter den mobilen lokalen KI-Apps, weil es wirklich kostenlos, wirklich quelloffen und wirklich flexibel bei der Wahl des ausgeführten Modells ist — drei Eigenschaften, die jede für sich schon selten sind, kombiniert erst recht, in dieser Kategorie. Die App ist nicht die ausgereifteste in diesem Bereich: Nutzer verwalten ihre Modell-Downloads selbst, die Oberfläche tauscht etwas Führung gegen Flexibilität, und das Projekt wird von einer einzelnen Person in der Freizeit gepflegt statt von einem Unternehmen mit Support-Team. Entscheiden Sie sich für PocketPal AI, wenn Sie ein offenes Modell auf Ihrem eigenen Handy ohne Abo und ohne Anbieterbindung ausführen möchten und bereit sind, ein zu Ihrem Gerät passendes Modell selbst auszuwählen. Entscheiden Sie sich stattdessen für eine kostenpflichtige, kuratierte App wie Private LLM oder Loci, wenn Sie etwas Kosten und Offenheit gegen ein geführteres Setup und dedizierten Support über mehr Plattformen eintauschen möchten.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[PocketPal AI auf GitHub](https://github.com/a-ghorbani/pocketpal-ai) — Quellcode, Lizenz (MIT), Release-Historie sowie die in diesem Test genannten Stern-/Fork-Zahlen.',
          '[Einstiegsdokumentation von PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) — Einrichtungsschritte, mitgelieferte Modelle und Hinweise zur GPU-Beschleunigung.',
          '[PocketPal AI im App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) — Verfügbarkeit für iOS/iPadOS.',
          '[PocketPal AI bei Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) — Verfügbarkeit für Android.',
          '["PocketPal AI: Tiny LLMs in the Pocket" von Asghar Ghorbani, Medium](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75) — Projektursprung und Motivation des Entwicklers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Die besten Local-LLM-Apps für Android 2026](/power-local-llm/best-local-llm-apps-android-2026) — die Android-App-Übersicht, einschließlich PocketPal AI, MLC Chat, Maid und Layla.',
          '[Die besten Local-LLM-Apps für iPhone 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — das iOS-Pendant, mit einem Vergleich von PocketPal AI zu Private LLM und Enclave AI.',
          '[Loci im Test: Offline-KI für iPhone, Android, iPad, Mac und Windows](/power-local-llm/loci-ai-review-offline-local-ai) — eine kostenpflichtige, Closed-Source-Alternative über fünf Plattformen mit kuratierter Modellbibliothek.',
          '[Die besten mobilen KI-Modelle 2026: Phi-4 Mini vs. Gemma 4 vs. SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — der Modell-Begleitartikel zur Wahl des passenden GGUF-Modells für Ihr Handy.',
          '[Enclave AI im Test](/power-local-llm/enclave-ai-review) — eine reine Apple-Alternative mit Siri- und Shortcuts-Automatisierung.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PocketPal AI im Test (2026): Kostenloser, quelloffener Chat auf dem Gerät',
      description:
        'PocketPal AI im Test: eine kostenlose, MIT-lizenzierte Open-Source-App, die GGUF-Modelle lokal auf iPhone und Android ausführt. Modelle, RAM-Bedarf, Preise und Zielgruppe.',
      url: 'https://promptquorum.com/de/power-local-llm/pocketpal-ai-review',
      inLanguage: 'de',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Datenschutzbewusste iPhone- und Android-Nutzer, die kostenlose, quelloffene lokale KI-Chat-Apps bewerten' },
      about: [
        { '@type': 'Thing', name: 'PocketPal AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'Open Source Software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/pocketpal-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PocketPal AI im Test (2026)', item: 'https://promptquorum.com/de/power-local-llm/pocketpal-ai-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketpal-ai-review-hero-fr.webp',
    title: 'PocketPal AI : test (2026) — chat local gratuit et open source',
    seoTitle: 'PocketPal AI : test 2026 du chat local open source',
    intro:
      'PocketPal AI est une application gratuite, open source sous licence MIT, pour iPhone, iPad et Android, qui exécute des modèles de langage GGUF directement sur l\'appareil, sans aller-retour serveur ni compte requis pour discuter. Elle a été créée par Asghar Ghorbani, un développeur qui l\'a d\'abord conçue comme projet personnel avant d\'en publier le code sur [GitHub](https://github.com/a-ghorbani/pocketpal-ai). Ce test couvre ce que l\'application fait aujourd\'hui, les modèles qu\'elle embarque, ses besoins matériels réels, son prix réel (l\'application de base est gratuite ; une place de marché communautaire optionnelle, PalsHub, vend des préréglages premium) et pour qui elle convient — ou non.',
    metaDescription:
      'Test de PocketPal AI : une application gratuite, open source sous licence MIT, qui exécute des modèles GGUF localement sur iPhone et Android. Modèles, RAM requise, prix et public visé.',
    twitterDescription:
      'PocketPal AI, test 2026 : l\'application gratuite et open source qui exécute des modèles GGUF sur l\'appareil, pour iPhone et Android. Ce qu\'elle propose, son coût, et pour qui elle convient.',
    audience:
      'Utilisateurs iPhone et Android soucieux de leur vie privée qui veulent exécuter des modèles d\'IA ouverts localement sans payer pour une application commerciale.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Test de PocketPal AI',
    targetKeywords: [
      'pocketpal ai test',
      'pocketpal ai android',
      'pocketpal ai iphone',
      'pocketpal ai modèles',
      'pocketpal ai vs private llm',
      'application ia locale gratuite',
      'application ia locale open source',
      'exécuter des modèles gguf sur téléphone',
    ],
    current_models_mentioned: ['Gemma 2', 'Qwen', 'Phi', 'Danube 3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android'],
    leadAnswerBlock:
      '**PocketPal AI est une application gratuite et open source (licence MIT) qui exécute des modèles de langage GGUF entièrement sur votre iPhone, iPad ou appareil Android, sans dépendance au cloud pour le chat.** Développée par Asghar Ghorbani et hébergée sur [GitHub](https://github.com/a-ghorbani/pocketpal-ai) (plus de 8 000 étoiles au moment de ce test), elle propose le téléchargement rapide de modèles comme Gemma 2, Qwen, Phi et Danube 3, et peut charger tout autre fichier GGUF récupéré sur Hugging Face. L\'application de base ne coûte rien ; une place de marché intégrée facultative, PalsHub, vend des préréglages d\'assistant premium, mais discuter avec un modèle téléchargé est gratuit.',
    quickAnswerTop: {
      fr: {
        question: 'PocketPal AI vaut-elle la peine pour un chat IA privé et hors ligne ?',
        answer:
          'Oui, si vous cherchez un moyen réellement gratuit et open source d\'exécuter des modèles ouverts sur votre propre téléphone et que vous êtes à l\'aise pour gérer vous-même les téléchargements de modèles. PocketPal AI n\'exige aucun abonnement pour sa fonction de chat, publie l\'intégralité de son code source sur GitHub, et prend en charge n\'importe quel modèle GGUF plutôt qu\'une liste fixe. Elle convient mieux aux utilisateurs curieux sur le plan technique qu\'à ceux qui veulent une expérience aboutie sans configuration ; Loci ou Private LLM échangent de la flexibilité contre une prise en main plus guidée.',
        bullets: [
          'Gratuite et open source sous licence MIT — aucun abonnement pour discuter avec un modèle local.',
          'Disponible sur l\'[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (iPhone/iPad) et sur [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) (Android).',
          'Propose le téléchargement en un geste de Gemma 2, Qwen, Phi et Danube 3, ainsi que la prise en charge de tout fichier GGUF personnalisé issu de Hugging Face.',
          'Développée par une seule personne, Asghar Ghorbani, comme projet personnel open source — pas une entreprise financée.',
          'La place de marché optionnelle PalsHub vend des préréglages d\'assistant premium via achat intégré ; l\'application de chat de base elle-même n\'a aucune barrière de paiement.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que PocketPal AI ?', anchor: 'what-is-pocketpal-ai' },
      { label: 'Qui a créé PocketPal AI ?', anchor: 'history-and-developer' },
      { label: 'Comment démarrer avec PocketPal AI', anchor: 'getting-started' },
      { label: 'Quels modèles PocketPal AI prend-elle en charge ?', anchor: 'models-supported' },
      { label: 'PocketPal AI est-elle disponible sur iPhone et Android ?', anchor: 'platform-availability' },
      { label: 'Combien coûte PocketPal AI ?', anchor: 'pricing' },
      { label: 'Quelles fonctionnalités propose PocketPal AI ?', anchor: 'key-features' },
      { label: 'Quel matériel est nécessaire ?', anchor: 'hardware-requirements' },
      { label: 'Pour qui PocketPal AI convient', anchor: 'who-should-use' },
      { label: 'Pour qui PocketPal AI ne convient pas', anchor: 'who-should-not-use' },
      { label: 'PocketPal AI face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
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
            text: 'PocketPal AI est une application gratuite, open source sous licence MIT, pour iPhone, iPad et Android, qui télécharge et exécute des modèles de langage GGUF directement sur l\'appareil, développée et maintenue par Asghar Ghorbani.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est une application à installer pour discuter avec une IA qui tourne sur votre propre téléphone plutôt que sur un serveur d\'entreprise — le code est public sur GitHub, l\'application elle-même ne coûte rien, et vous choisissez quel modèle télécharger plutôt que d\'être lié à un seul fournisseur.',
          },
        ],
        items: [
          'Gratuite et open source (licence MIT) ; code source et suivi des tickets publics sur [GitHub](https://github.com/a-ghorbani/pocketpal-ai).',
          'Créée par Asghar Ghorbani comme projet personnel, puis publiée en open source après avoir gagné en popularité.',
          'Exécute des modèles GGUF via llama.cpp entièrement sur l\'appareil — aucun compte, aucun aller-retour serveur pour discuter.',
          'Propose le téléchargement en un geste de Gemma 2, Qwen, Phi et Danube 3 ; tout autre modèle GGUF de Hugging Face peut être chargé manuellement.',
          'Disponible sur l\'App Store (iPhone/iPad) et sur Google Play (Android) ; aucune version Mac, Windows ou Linux.',
          'L\'application de base n\'a aucun abonnement ; une place de marché optionnelle, PalsHub, vend des préréglages d\'assistant premium via achat intégré.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur le [dépôt GitHub](https://github.com/a-ghorbani/pocketpal-ai) public, la documentation intégrée au projet, ainsi que les fiches App Store et Google Play, vérifiées en septembre 2026. PromptQuorum n\'a pas mené de benchmark pratique indépendant de PocketPal AI pour ce test — les chiffres de performance ci-dessous sont des repères matériels génériques pour les LLM locaux, pas des mesures spécifiques à cette application.',
          },
        ],
      },
      overview: {
        id: 'what-is-pocketpal-ai',
        title: 'Qu\'est-ce que PocketPal AI ?',
        content: [
          '**PocketPal AI est une application mobile qui télécharge des modèles de langage ouverts au format GGUF et les exécute localement sur un iPhone, un iPad ou un appareil Android, en utilisant [llama.cpp](https://github.com/ggml-org/llama.cpp) comme moteur d\'inférence.** L\'application elle-même est construite avec React Native et publiée sous [licence MIT](https://github.com/a-ghorbani/pocketpal-ai/blob/main/LICENSE), ce qui signifie que l\'intégralité du code source est publique, libre d\'être consultée, forkée ou modifiée.',
          'Contrairement aux applications qui enferment l\'utilisateur dans une liste de modèles fixe et sélectionnée, PocketPal AI permet de choisir parmi un ensemble de modèles que l\'application peut récupérer en un geste, ou d\'importer n\'importe quel fichier GGUF trouvé sur [Hugging Face](https://huggingface.co) — y compris des modèles à accès restreint après acceptation de leurs conditions de licence. Cette flexibilité est le trait distinctif de l\'application : elle se comporte davantage comme un moteur d\'exécution GGUF généraliste doté d\'une interface de chat que comme un produit d\'un seul éditeur.',
        ],
        note: 'GGUF est un format de fichier permettant d\'empaqueter des modèles de langage ouverts quantifiés afin qu\'ils s\'exécutent efficacement sur du matériel grand public via des moteurs comme llama.cpp, au lieu d\'appeler une API cloud à chaque réponse.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Qui a créé PocketPal AI ?',
        content: [
          '**PocketPal AI a été créée par Asghar Ghorbani, qui l\'a d\'abord conçue comme projet personnel pour exécuter de petits modèles de langage sur son propre téléphone, avant de la publier en open source après avoir suscité un intérêt extérieur.** Ghorbani a raconté l\'origine et la motivation du projet dans un [billet Medium, « PocketPal AI: Tiny LLMs in the Pocket »](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75), décrivant l\'objectif comme celui de mettre la puissance des petits modèles de langage directement dans sa poche.',
          'Le projet est maintenu sur le temps libre du développeur plutôt que par une entreprise financée ou une équipe dédiée — la documentation de mise en route du dépôt le précise directement, ce qui mérite d\'être su avant d\'attendre des délais de support de niveau entreprise. Le dépôt GitHub ([a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)) a accumulé plus de 8 000 étoiles et plus de 850 forks au moment de ce test, et continue de recevoir régulièrement de nouvelles versions apportant la prise en charge de nouveaux modèles, des changements d\'interface et des ajouts de fonctionnalités comme la recherche internet intégrée, l\'épinglage de conversations et l\'export en Markdown.',
        ],
        items: [
          'Développeur : Asghar Ghorbani (GitHub : [a-ghorbani](https://github.com/a-ghorbani)), travaillant de façon indépendante plutôt qu\'en entreprise.',
          'Débuté comme projet personnel pour exécuter de petits modèles de langage sur l\'appareil ; publié en open source après avoir suscité l\'intérêt du public.',
          'Licence : MIT — permissive, libre d\'utilisation, de modification et de redistribution.',
          'Plus de 8 000 étoiles GitHub et plus de 850 forks au moment de ce test, avec un suivi de tickets actif et un historique de pull requests.',
          'Rythme de développement : versions ponctuelles fréquentes ajoutant des mises à jour du moteur d\'exécution, de nouvelles fonctionnalités d\'interface et une prise en charge linguistique élargie, maintenues sur une base bénévole.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Comment démarrer avec PocketPal AI',
        content: [
          '**Obtenir un chat local fonctionnel dans PocketPal AI demande quatre étapes après l\'installation, selon la [documentation de mise en route](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) du projet.** Aucune création de compte ni connexion n\'est nécessaire — tout se passe sur l\'appareil.',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Téléchargez PocketPal AI depuis l\'[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) sur iPhone/iPad ou [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) sur Android. Aucun compte ni inscription par e-mail n\'est requis pour ouvrir l\'application.',
          },
          {
            title: 'Ouvrir la page Modèles',
            whyItMatters: 'Accédez à l\'onglet Modèles depuis le menu de l\'application pour voir la liste des modèles à téléchargement rapide (comme Gemma 2, Qwen, Phi et Danube 3) et l\'option d\'importer un fichier GGUF personnalisé.',
          },
          {
            title: 'Télécharger un modèle',
            whyItMatters: 'Choisissez un modèle adapté à la RAM de votre appareil (voir la section matériel ci-dessous) et téléchargez-le. Les modèles plus volumineux et plus performants prennent plus de temps à télécharger et occupent davantage de stockage sur l\'appareil.',
          },
          {
            title: 'Charger le modèle et commencer à discuter',
            whyItMatters: 'Appuyez sur « Charger » pour amener le modèle téléchargé en mémoire, puis passez à la page Chat. Une fois chargée, toute l\'inférence se déroule sur l\'appareil — la fonction « Auto Offload/Load » de PocketPal AI peut décharger automatiquement le modèle lorsque l\'application passe en arrière-plan pour économiser la mémoire, puis le recharger à votre retour.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quels modèles PocketPal AI prend-elle en charge ?',
        itemHeadings: true,
        columns: ['Famille de modèle', 'Méthode d\'accès', 'Usage typique'],
        rows: [
          {
            'Famille de modèle': 'Gemma 2',
            'Méthode d\'accès': 'Téléchargement rapide en un geste dans l\'application',
            'Usage typique': 'Chat général ; famille de modèles ouverts de Google',
          },
          {
            'Famille de modèle': 'Qwen',
            'Méthode d\'accès': 'Téléchargement rapide en un geste dans l\'application',
            'Usage typique': 'Chat général et raisonnement ; famille de modèles ouverts d\'Alibaba',
          },
          {
            'Famille de modèle': 'Phi',
            'Méthode d\'accès': 'Téléchargement rapide en un geste dans l\'application',
            'Usage typique': 'Raisonnement compact ; petite famille de modèles de Microsoft',
          },
          {
            'Famille de modèle': 'Danube 3',
            'Méthode d\'accès': 'Téléchargement rapide en un geste dans l\'application',
            'Usage typique': 'Chat léger ; petite famille de modèles de H2O.ai',
          },
          {
            'Famille de modèle': 'Tout autre modèle GGUF',
            'Méthode d\'accès': 'Import manuel via la recherche Hugging Face Hub dans l\'application, y compris les modèles à accès restreint après acceptation des conditions de licence',
            'Usage typique': 'Modèles personnalisés ou de niche absents de la liste de téléchargement rapide',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'PocketPal AI est-elle disponible sur iPhone et Android ?',
        itemHeadings: true,
        columns: ['Plateforme', 'Disponibilité', 'Remarques'],
        rows: [
          {
            'Plateforme': 'iPhone / iPad',
            'Disponibilité': 'Disponible sur l\'[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)',
            'Remarques': 'Utilise par défaut l\'API GPU Metal d\'Apple pour l\'accélération ; peut être désactivée dans l\'application si elle cause une instabilité sur un appareil donné.',
          },
          {
            'Plateforme': 'Android',
            'Disponibilité': 'Disponible sur [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)',
            'Remarques': 'Les versions récentes ont rétabli un moteur d\'accélération NPU Qualcomm Hexagon pour les puces compatibles, en plus de l\'inférence CPU standard.',
          },
          {
            'Plateforme': 'Mac / Windows / Linux',
            'Disponibilité': 'Aucune version bureau trouvée au moment de ce test',
            'Remarques': 'PocketPal AI est une application uniquement mobile. Les utilisateurs de bureau qui veulent un client de chat GGUF local devraient plutôt regarder Ollama, LM Studio ou Jan AI.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Combien coûte PocketPal AI ?',
        content: [
          '**PocketPal AI est gratuite à télécharger et gratuite pour discuter avec un modèle téléchargé localement — il n\'y a aucun abonnement, et le code source est public sous licence MIT.** Le seul composant payant trouvé dans l\'application est PalsHub, une place de marché intégrée où les membres de la communauté peuvent publier et vendre des « Pals » premium (préréglages d\'assistant personnalisables) ; les achats intégrés PalsHub sont disponibles sur iOS et Android selon les régions.',
          'Comme l\'application et sa fonction d\'exécution de modèles sont open source et gratuites, le seul coût continu pour l\'utilisateur est l\'espace de stockage et la bande passante nécessaires pour télécharger les fichiers de modèle GGUF — un modèle quantifié de 3 à 4 milliards de paramètres pèse typiquement quelques gigaoctets, et les modèles plus grands proportionnellement plus.',
        ],
        items: [
          '**Application de base :** Gratuite, aucun abonnement, logicielle open source sous licence MIT.',
          '**Chat avec des modèles téléchargés :** Gratuit — aucun frais par message ou par jeton, puisque l\'inférence tourne sur votre propre appareil.',
          '**Place de marché PalsHub :** Achats intégrés optionnels pour des préréglages d\'assistant premium créés par la communauté ; la fonction de chat de base n\'en a pas besoin.',
          '**Coût de stockage :** Non monétaire, mais bien réel — chaque modèle GGUF téléchargé occupe de l\'espace de stockage sur l\'appareil, typiquement plusieurs gigaoctets par modèle.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Quelles fonctionnalités propose PocketPal AI ?',
        content: [
          '**Au-delà du chat local de base, PocketPal AI a développé au fil de son historique de versions un ensemble de fonctionnalités courantes chez les applications d\'IA locale plus abouties.** Parmi elles :',
        ],
        items: [
          '**Pals et PalsHub.** Les « Pals » sont des préréglages d\'assistant personnalisables (invite système, modèle et comportement regroupés) ; PalsHub est une place de marché où les utilisateurs peuvent partager ou vendre leurs propres Pals.',
          '**Talents (appel d\'outils).** L\'application prend en charge un fonctionnement de type agent, où un modèle peut invoquer des outils définis en cours de conversation plutôt que de simplement générer du texte brut.',
          '**Recherche internet dans le chat.** Les versions récentes permettent à un chat de rechercher sur le web avec une clé API fournie par l\'utilisateur auprès de fournisseurs comme Brave, Tavily ou Exa — c\'est optionnel et nécessite la propre clé de l\'utilisateur, pas un service de recherche intégré.',
          '**Synthèse vocale.** L\'application peut lire les réponses à voix haute, avec une prise en charge linguistique qui s\'étend sur les versions récentes.',
          '**Épinglage de chats et export Markdown.** Les conversations peuvent être épinglées pour un accès rapide et exportées en fichiers Markdown.',
          '**Décodage spéculatif (expérimental).** Un plus petit modèle « brouillon » peut être associé à un modèle plus grand pour accélérer la génération — signalé par le projet lui-même comme une fonctionnalité expérimentale, pas une garantie stable.',
          '**Outils de benchmark.** L\'application inclut un moyen de mesurer la performance des modèles sur l\'appareil actuel, utile pour comparer différents niveaux de quantification sur votre téléphone précis.',
        ],
        note: 'La disponibilité des fonctionnalités peut varier selon la version de l\'application et la plateforme (iOS vs. Android), le projet publiant des versions incrémentales fréquentes. Consultez le journal des modifications dans l\'application ou la [page des versions GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases) pour savoir ce qui est actif dans votre version installée.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Quel matériel est nécessaire pour exécuter PocketPal AI ?',
        content: [
          '**C\'est le modèle choisi, et non l\'application elle-même, qui fixe le vrai plancher matériel — comme règle générale pour les modèles GGUF sur téléphone, un modèle quantifié de 2 à 4 milliards de paramètres nécessite environ 3 à 4 Go de RAM libre, tandis qu\'un modèle de 7 à 8 milliards de paramètres en nécessite 6 à 8 Go ou plus.** Il s\'agit d\'un repère général pour les LLM locaux, pas d\'un benchmark spécifique à PocketPal ; PromptQuorum n\'a pas mesuré de façon indépendante l\'usage mémoire exact de PocketPal AI par modèle.',
          'Sur iPhone et iPad, l\'application utilise par défaut l\'API GPU Metal d\'Apple, ce qui améliore généralement la vitesse d\'inférence par rapport à une exécution CPU seule sur les appareils Apple Silicon. Sur Android, les versions récentes ont ajouté la prise en charge d\'un moteur d\'accélération NPU Qualcomm Hexagon sur les puces compatibles ; les appareils sans NPU pris en charge retombent sur l\'inférence CPU, nettement plus lente pour les modèles volumineux.',
        ],
        items: [
          'Petits modèles (2 à 4 milliards de paramètres, quantifiés) : utilisables sur la plupart des téléphones récents avec 4 Go ou plus de RAM libre.',
          'Modèles de taille moyenne (7 à 8 milliards de paramètres, quantifiés) : RAM d\'appareil recommandée de 8 Go ou plus pour une réactivité acceptable.',
          'Stockage : prévoyez plusieurs gigaoctets d\'espace de stockage libre par fichier de modèle téléchargé.',
          'Inférence plus rapide : un iPhone/iPad Apple Silicon (accélération Metal) ou un appareil Android récent doté d\'un NPU Qualcomm Hexagon compatible surpassera un matériel plus ancien ou d\'entrée de gamme en exécution CPU seule.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui PocketPal AI convient',
        items: [
          '**Utilisateurs soucieux de leur vie privée qui veulent un coût d\'abonnement nul.** Si l\'objectif est d\'exécuter un modèle ouvert sans frais récurrents et sans compte, l\'application de base gratuite et sous licence MIT de PocketPal AI répond directement au besoin.',
          '**Utilisateurs qui veulent essayer des modèles au-delà d\'une liste fixe.** Comme l\'application peut charger n\'importe quel fichier GGUF depuis Hugging Face — pas seulement sa liste de téléchargement rapide — elle convient à ceux qui ont déjà un modèle précis en tête.',
          '**Développeurs et utilisateurs curieux sur le plan technique, à l\'aise avec les projets open source.** Le dépôt GitHub public, le suivi de tickets et les versions fréquentes conviennent à ceux prêts à lire les notes de version ou à signaler un ticket plutôt qu\'à attendre un support client dédié.',
          '**Utilisateurs qui veulent inspecter ou modifier le code eux-mêmes.** La licence MIT permet le fork et la modification, ce qui compte pour quiconque veut vérifier exactement ce que fait l\'application avant de lui confier des conversations privées.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui PocketPal AI ne convient pas',
        items: [
          '**Utilisateurs qui veulent une expérience entièrement guidée, sans configuration.** Choisir la bonne taille de modèle pour son appareil et gérer soi-même les téléchargements fait partie du fonctionnement ; ceux qui préfèrent laisser l\'application décider à leur place devraient plutôt regarder une application plus encadrée comme Loci.',
          '**Utilisateurs ayant besoin d\'une prise en charge Mac, Windows ou Linux.** PocketPal AI est uniquement mobile (iPhone/iPad et Android) ; les utilisateurs de bureau devraient plutôt regarder Ollama, LM Studio ou Jan AI.',
          '**Utilisateurs qui veulent les modèles les plus exigeants (70 milliards de paramètres et plus).** Le matériel des téléphones, même les appareils haut de gamme actuels, ne permet pas en pratique d\'exécuter des modèles de cette taille localement — ces charges de travail nécessitent un poste de travail, une station de travail ou une API cloud, quelle que soit l\'application mobile utilisée.',
          '**Utilisateurs qui attendent un support commercial dédié.** PocketPal AI est maintenue par un seul développeur sur son temps libre, selon la documentation du projet ; les utilisateurs ayant besoin de délais de réponse garantis ou de contrats de support entreprise devraient regarder une alternative soutenue commercialement.',
          '**Utilisateurs qui veulent une synchronisation cloud intégrée entre appareils.** Comme l\'inférence et l\'historique de chat restent locaux à chaque appareil par conception, PocketPal AI n\'offre pas de synchronisation intégrée basée sur un compte entre un iPhone et un appareil Android, contrairement à une application de chat adossée au cloud.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'PocketPal AI face aux alternatives',
        itemHeadings: true,
        columns: ['Application', 'Licence / coût', 'Plateformes', 'Flexibilité des modèles'],
        rows: [
          {
            'Application': 'PocketPal AI',
            'Licence / coût': 'Gratuite, open source (MIT)',
            'Plateformes': 'iPhone/iPad, Android',
            'Flexibilité des modèles': 'Liste de téléchargement rapide (Gemma 2, Qwen, Phi, Danube 3) plus tout fichier GGUF de Hugging Face',
          },
          {
            'Application': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Licence / coût': 'Palier gratuit plus paliers payants ; source fermée',
            'Plateformes': 'iPhone/iPad/Android/Mac/Windows (5 plateformes)',
            'Flexibilité des modèles': 'Bibliothèque sélectionnée (~10 modèles) ; pas d\'import de fichiers GGUF personnalisés',
          },
          {
            'Application': 'Private LLM',
            'Licence / coût': 'Payante, achat unique ; source fermée',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Flexibilité des modèles': '140+ modèles, avec formats de quantification OmniQuant et GPTQ',
          },
          {
            'Application': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Licence / coût': 'Gratuite avec palier payant ; source fermée',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Flexibilité des modèles': 'Liste de modèles sélectionnée sur l\'appareil ; intégration Siri et Raccourcis',
          },
          {
            'Application': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Licence / coût': 'Gratuite ; source fermée',
            'Plateformes': 'iPhone/iPad',
            'Flexibilité des modèles': 'Liste de modèles sélectionnée, selon sa fiche App Store',
          },
          {
            'Application': 'ChatterUI',
            'Licence / coût': 'Gratuite, open source (AGPL-3.0)',
            'Plateformes': 'Android (à compiler depuis le code source)',
            'Flexibilité des modèles': 'Exécute des fichiers GGUF sur l\'appareil via llama.cpp, ou se connecte à des API distantes ; prise en charge Character Card v2',
          },
          {
            'Application': 'RikkaHub',
            'Licence / coût': 'Gratuite, open source',
            'Plateformes': 'Android',
            'Flexibilité des modèles': 'Client multi-fournisseurs ; inférence locale sur l\'appareil via un fournisseur LiteRT pour des modèles comme Gemma et Qwen',
          },
          {
            'Application': 'MLC Chat (MLC-LLM)',
            'Licence / coût': 'Gratuite, open source (Apache 2.0)',
            'Plateformes': 'iPhone/iPad, Android',
            'Flexibilité des modèles': 'Exécute des modèles compilés pour le moteur d\'exécution MLC plutôt que des fichiers GGUF bruts',
          },
        ],
        note: 'LLM Farm, une application de chat GGUF open source pour iOS autrefois populaire, a été retirée de l\'App Store et marquée « temporairement indisponible » sur son propre dépôt GitHub au moment de ce test — elle est donc exclue des recommandations actives ci-dessus. Layla, une autre application d\'assistant sur l\'appareil, aurait vu son palier gratuit « Layla Lite » retiré de Google Play ; vérifiez la disponibilité actuelle directement sur [layla-network.ai](https://www.layla-network.ai) avant de présumer qu\'elle est installable.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'PocketPal AI est-elle gratuite ?',
            a: 'Oui. PocketPal AI est gratuite à télécharger et gratuite pour discuter avec un modèle téléchargé, et l\'application est open source sous licence MIT. Une place de marché intégrée optionnelle, PalsHub, vend des préréglages d\'assistant premium créés par la communauté, mais la fonction de chat de base n\'a ni abonnement ni barrière de paiement.',
          },
          {
            q: 'Qui a développé PocketPal AI ?',
            a: 'PocketPal AI a été créée par Asghar Ghorbani, qui l\'a d\'abord conçue comme projet personnel pour exécuter de petits modèles de langage sur son propre téléphone, avant d\'en publier le code en open source après avoir suscité un intérêt extérieur. Elle est maintenue de façon indépendante, pas par une entreprise.',
          },
          {
            q: 'PocketPal AI est-elle open source ?',
            a: 'Oui, l\'intégralité du code source est publiée sur [GitHub](https://github.com/a-ghorbani/pocketpal-ai) sous licence MIT, une licence permissive qui autorise l\'utilisation, la modification et la redistribution libres.',
          },
          {
            q: 'Quels modèles PocketPal AI peut-elle exécuter ?',
            a: 'PocketPal AI propose le téléchargement en un geste de Gemma 2, Qwen, Phi et Danube 3, et peut en plus charger tout autre modèle au format GGUF trouvé sur Hugging Face, y compris des modèles à accès restreint après acceptation de leurs conditions de licence.',
          },
          {
            q: 'PocketPal AI fonctionne-t-elle sur iPhone et Android ?',
            a: 'Oui. PocketPal AI est disponible sur l\'[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) pour iPhone et iPad, et sur [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) pour Android. Il n\'existe aucune version Mac, Windows ou Linux.',
          },
          {
            q: 'Combien de RAM PocketPal AI nécessite-t-elle ?',
            a: 'Cela dépend du modèle choisi, pas d\'une exigence fixe de l\'application. Comme repère général pour les modèles GGUF quantifiés sur téléphone, les modèles de 2 à 4 milliards de paramètres nécessitent typiquement 3 à 4 Go de RAM libre, et les modèles de 7 à 8 milliards de paramètres typiquement 8 Go ou plus. Les appareils avec plus de RAM peuvent exécuter des modèles plus grands et plus performants.',
          },
          {
            q: 'PocketPal AI nécessite-t-elle une connexion internet ?',
            a: 'Aucune connexion internet n\'est nécessaire pour discuter une fois un modèle téléchargé — l\'inférence tourne entièrement sur l\'appareil via llama.cpp. Une connexion internet est nécessaire pour télécharger les modèles au départ, et optionnellement pour utiliser la fonction de recherche internet de l\'application, qui nécessite la propre clé API de l\'utilisateur auprès d\'un fournisseur comme Brave, Tavily ou Exa.',
          },
          {
            q: 'PocketPal AI est-elle sûre pour des conversations privées ?',
            a: 'Comme l\'inférence se déroule localement et que le code source est public et vérifiable sous licence MIT, PocketPal AI n\'a pas besoin d\'envoyer le contenu des conversations à un serveur pour fonctionner. Ce test ne comprend pas d\'audit de sécurité indépendant de l\'application ; les utilisateurs ayant besoin de ce niveau de garantie devraient examiner eux-mêmes le dépôt public ou son suivi de tickets.',
          },
          {
            q: 'Comment PocketPal AI se compare-t-elle à Private LLM ou Loci ?',
            a: 'PocketPal AI est gratuite et open source, avec un import de modèles GGUF sans restriction, tandis que Private LLM est une application payante à source fermée réservée à Apple avec un catalogue de modèles intégré plus large (140+ modèles), et Loci est une application à source fermée couvrant cinq plateformes avec une bibliothèque de modèles plus petite et plus sélectionnée. Choisissez PocketPal AI si le coût et l\'ouverture priment ; choisissez Private LLM ou Loci si une expérience plus guidée et aboutie sur davantage de plateformes compte plus pour vous qu\'être gratuit ou open source. Voir le tableau comparatif ci-dessus pour le détail.',
          },
          {
            q: 'Puis-je exécuter de grands modèles comme des modèles à 70 milliards de paramètres avec PocketPal AI ?',
            a: 'Non. Le matériel des téléphones, y compris les appareils haut de gamme actuels, n\'a pas assez de RAM pour exécuter en pratique des modèles de cette taille localement. PocketPal AI est conçue pour des modèles petits et moyens (environ jusqu\'à 8 milliards de paramètres) ; ceux ayant besoin de modèles plus grands devraient utiliser un poste de travail de bureau ou une API cloud à la place.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'PocketPal AI mérite sa place parmi les applications d\'IA locale mobiles en étant réellement gratuite, réellement open source et réellement flexible quant au modèle qu\'elle exécute — trois qualités chacune individuellement rares, et encore plus rarement réunies, dans cette catégorie. Ce n\'est pas l\'application la plus aboutie du secteur : les utilisateurs gèrent eux-mêmes leurs téléchargements de modèles, l\'interface échange un peu de guidage contre de la flexibilité, et le projet est maintenu par un seul développeur sur son temps libre plutôt que par une entreprise dotée d\'une équipe de support. Choisissez PocketPal AI si vous voulez exécuter un modèle ouvert sur votre propre téléphone sans abonnement ni dépendance à un fournisseur, et que vous êtes à l\'aise pour choisir vous-même un modèle adapté à votre appareil. Choisissez plutôt une application payante et sélectionnée comme Private LLM ou Loci si vous préférez échanger un peu de coût et d\'ouverture contre une prise en main plus guidée et un support dédié sur davantage de plateformes.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PocketPal AI sur GitHub](https://github.com/a-ghorbani/pocketpal-ai) — code source, licence (MIT), historique des versions et nombre d\'étoiles/forks cités dans ce test.',
          '[Documentation de mise en route de PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) — étapes de configuration, modèles fournis et remarques sur l\'accélération GPU.',
          '[PocketPal AI sur l\'App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) — disponibilité iOS/iPadOS.',
          '[PocketPal AI sur Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) — disponibilité Android.',
          '[« PocketPal AI: Tiny LLMs in the Pocket » par Asghar Ghorbani, Medium](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75) — origine du projet et motivation du développeur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Les meilleures applications LLM locales pour Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — le panorama des applications Android, dont PocketPal AI, MLC Chat, Maid et Layla.',
          '[Les meilleures applications LLM locales pour iPhone en 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — l\'équivalent iOS, comparant PocketPal AI à Private LLM et Enclave AI.',
          '[Loci : test — IA hors ligne pour iPhone, Android, iPad, Mac et Windows](/power-local-llm/loci-ai-review-offline-local-ai) — une alternative payante à source fermée sur cinq plateformes, avec une bibliothèque de modèles sélectionnée.',
          '[Les meilleurs modèles LLM mobiles en 2026 : Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — l\'article complémentaire sur les modèles, pour choisir quel modèle GGUF convient réellement à votre téléphone.',
          '[Enclave AI : test](/power-local-llm/enclave-ai-review) — une alternative réservée à Apple avec automatisation Siri et Raccourcis.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PocketPal AI : test (2026) — chat local gratuit et open source',
      description:
        'Test de PocketPal AI : une application gratuite, open source sous licence MIT, qui exécute des modèles GGUF localement sur iPhone et Android. Modèles, RAM requise, prix et public visé.',
      url: 'https://promptquorum.com/fr/power-local-llm/pocketpal-ai-review',
      inLanguage: 'fr',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Utilisateurs iPhone et Android soucieux de leur vie privée évaluant des applications de chat IA locales gratuites et open source' },
      about: [
        { '@type': 'Thing', name: 'PocketPal AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'Logiciel open source' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/pocketpal-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PocketPal AI : test (2026)', item: 'https://promptquorum.com/fr/power-local-llm/pocketpal-ai-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketpal-ai-review-hero-es.webp',
    title: 'PocketPal AI: reseña (2026) — chat local gratis y de código abierto',
    seoTitle: 'PocketPal AI 2026: reseña del chat local open source',
    intro:
      'PocketPal AI es una aplicación gratuita y de código abierto bajo licencia MIT para iPhone, iPad y Android que ejecuta modelos de lenguaje GGUF directamente en el dispositivo, sin ida y vuelta a un servidor ni cuenta necesaria para chatear. La creó Asghar Ghorbani, un desarrollador que empezó el proyecto como algo personal antes de publicar el código en [GitHub](https://github.com/a-ghorbani/pocketpal-ai). Esta reseña cubre qué hace la app hoy, qué modelos incluye, los requisitos reales de hardware, su precio real (la app base es gratis; un mercado comunitario opcional llamado PalsHub vende ajustes preestablecidos premium) y para quién es —y para quién no.',
    metaDescription:
      'Reseña de PocketPal AI: una app gratuita y de código abierto (MIT) que ejecuta modelos GGUF localmente en iPhone y Android. Modelos, RAM necesaria, precio y a quién le conviene.',
    twitterDescription:
      'PocketPal AI, reseña 2026: la app gratuita y de código abierto que ejecuta modelos GGUF en el dispositivo, para iPhone y Android. Qué ofrece, cuánto cuesta y para quién es.',
    audience:
      'Usuarios de iPhone y Android preocupados por la privacidad que quieren ejecutar modelos de IA abiertos localmente sin pagar por una app comercial.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Reseña de PocketPal AI',
    targetKeywords: [
      'pocketpal ai reseña',
      'pocketpal ai android',
      'pocketpal ai iphone',
      'pocketpal ai modelos',
      'pocketpal ai vs private llm',
      'app de ia local gratis',
      'app de ia local open source',
      'ejecutar modelos gguf en el móvil',
    ],
    current_models_mentioned: ['Gemma 2', 'Qwen', 'Phi', 'Danube 3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android'],
    leadAnswerBlock:
      '**PocketPal AI es una app gratuita y de código abierto (licencia MIT) que ejecuta modelos de lenguaje GGUF completamente en tu iPhone, iPad o dispositivo Android, sin dependencia de la nube para chatear.** Creada por el desarrollador Asghar Ghorbani y alojada en [GitHub](https://github.com/a-ghorbani/pocketpal-ai) (más de 8.000 estrellas al momento de esta reseña), incluye descarga rápida de modelos como Gemma 2, Qwen, Phi y Danube 3, y puede cargar cualquier otro archivo GGUF que obtengas de Hugging Face. La app base no cuesta nada; un mercado opcional dentro de la app, PalsHub, vende ajustes preestablecidos de asistente premium, pero chatear con un modelo descargado es gratis.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar PocketPal AI para chatear con IA de forma privada y sin conexión?',
        answer:
          'Sí, si buscas una forma genuinamente gratuita y de código abierto de ejecutar modelos abiertos en tu propio teléfono y te sientes cómodo gestionando tú mismo las descargas de modelos. PocketPal AI no tiene suscripción para su función de chat, publica todo su código fuente en GitHub y admite cualquier modelo GGUF, no solo una lista fija. Se adapta mejor a usuarios con curiosidad técnica que a quienes quieren una experiencia pulida sin configuración; Loci o Private LLM cambian flexibilidad por una configuración más guiada.',
        bullets: [
          'Gratuita y de código abierto bajo licencia MIT — sin suscripción para chatear con un modelo local.',
          'Disponible en la [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (iPhone/iPad) y en [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) (Android).',
          'Incluye descarga con un toque de Gemma 2, Qwen, Phi y Danube 3, además de soporte para cualquier archivo GGUF personalizado de Hugging Face.',
          'Desarrollada por una sola persona, Asghar Ghorbani, como proyecto personal de código abierto, no una empresa financiada.',
          'El mercado opcional PalsHub vende ajustes preestablecidos de asistente premium mediante compra dentro de la app; la app de chat base no tiene ninguna barrera de pago.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es PocketPal AI?', anchor: 'what-is-pocketpal-ai' },
      { label: '¿Quién creó PocketPal AI?', anchor: 'history-and-developer' },
      { label: 'Cómo empezar con PocketPal AI', anchor: 'getting-started' },
      { label: '¿Qué modelos admite PocketPal AI?', anchor: 'models-supported' },
      { label: '¿Está PocketPal AI disponible en iPhone y Android?', anchor: 'platform-availability' },
      { label: '¿Cuánto cuesta PocketPal AI?', anchor: 'pricing' },
      { label: '¿Qué funciones tiene PocketPal AI?', anchor: 'key-features' },
      { label: '¿Qué hardware necesitas?', anchor: 'hardware-requirements' },
      { label: 'A quién le conviene PocketPal AI', anchor: 'who-should-use' },
      { label: 'A quién no le conviene PocketPal AI', anchor: 'who-should-not-use' },
      { label: 'PocketPal AI frente a alternativas', anchor: 'vs-alternatives' },
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
            text: 'PocketPal AI es una app gratuita y de código abierto (MIT) para iPhone, iPad y Android que descarga y ejecuta modelos de lenguaje GGUF directamente en el dispositivo, creada y mantenida por el desarrollador Asghar Ghorbani.',
          },
          {
            type: 'plain-terms',
            text: 'Es una app que instalas para chatear con una IA que corre en tu propio teléfono en lugar de en un servidor de una empresa — el código es público en GitHub, la app en sí no cuesta nada, y eliges qué modelo descargar en vez de quedar atado a un solo proveedor.',
          },
        ],
        items: [
          'Gratuita y de código abierto (licencia MIT); código fuente y seguimiento de incidencias públicos en [GitHub](https://github.com/a-ghorbani/pocketpal-ai).',
          'Creada por Asghar Ghorbani como proyecto personal, luego publicada como código abierto tras ganar popularidad.',
          'Ejecuta modelos GGUF mediante llama.cpp completamente en el dispositivo — sin cuenta, sin ida y vuelta al servidor para chatear.',
          'Incluye descarga con un toque de Gemma 2, Qwen, Phi y Danube 3; cualquier otro modelo GGUF de Hugging Face se puede cargar manualmente.',
          'Disponible en la App Store (iPhone/iPad) y en Google Play (Android); no hay versión para Mac, Windows ni Linux.',
          'La app base no tiene suscripción; un mercado opcional, PalsHub, vende ajustes preestablecidos de asistente premium mediante compra dentro de la app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el [repositorio de GitHub](https://github.com/a-ghorbani/pocketpal-ai) público, la documentación del propio proyecto y las fichas de la App Store y Google Play, revisadas en septiembre de 2026. PromptQuorum no ha realizado pruebas propias independientes de PocketPal AI para esta reseña — las cifras de rendimiento a continuación son orientación general de hardware para LLM locales, no mediciones específicas de esta app.',
          },
        ],
      },
      overview: {
        id: 'what-is-pocketpal-ai',
        title: '¿Qué es PocketPal AI?',
        content: [
          '**PocketPal AI es una app móvil que descarga modelos de lenguaje abiertos en formato GGUF y los ejecuta localmente en un iPhone, iPad o dispositivo Android, usando [llama.cpp](https://github.com/ggml-org/llama.cpp) como motor de inferencia.** La app en sí está construida con React Native y publicada bajo [licencia MIT](https://github.com/a-ghorbani/pocketpal-ai/blob/main/LICENSE), lo que significa que el código fuente completo es público y libre de inspeccionar, bifurcar o modificar.',
          'A diferencia de las apps que limitan al usuario a una lista de modelos fija y seleccionada, PocketPal AI permite elegir entre un conjunto de modelos que la app puede obtener con un toque, o importar cualquier archivo GGUF que encuentres en [Hugging Face](https://huggingface.co) — incluidos modelos con acceso restringido tras aceptar sus condiciones de licencia. Esa flexibilidad es el rasgo distintivo de la app: se comporta más como un motor GGUF de propósito general con interfaz de chat que como un producto de un solo proveedor.',
        ],
        note: 'GGUF es un formato de archivo para empaquetar modelos de lenguaje abiertos cuantizados de modo que se ejecuten eficientemente en hardware de consumo mediante motores como llama.cpp, en lugar de llamar a una API en la nube por cada respuesta.',
      },
      history: {
        id: 'history-and-developer',
        title: '¿Quién creó PocketPal AI?',
        content: [
          '**PocketPal AI fue creada por Asghar Ghorbani, quien la empezó como proyecto personal para ejecutar modelos de lenguaje pequeños en su propio teléfono, antes de publicarla como código abierto al despertar interés externo.** Ghorbani escribió sobre el origen y la motivación del proyecto en una [entrada de Medium, "PocketPal AI: Tiny LLMs in the Pocket"](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75), describiendo el objetivo como llevar el poder de los modelos de lenguaje pequeños directamente al bolsillo.',
          'El proyecto se mantiene en el tiempo libre del desarrollador y no por una empresa financiada ni un equipo dedicado — la propia documentación de puesta en marcha del repositorio lo indica directamente, algo importante de saber antes de esperar tiempos de respuesta de soporte de nivel empresarial. El repositorio de GitHub ([a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)) ha acumulado más de 8.000 estrellas y más de 850 bifurcaciones al momento de esta reseña, y sigue recibiendo lanzamientos regulares con soporte de nuevos modelos, cambios de interfaz y funciones nuevas como búsqueda en internet, chats fijados y exportación a Markdown.',
        ],
        items: [
          'Desarrollador: Asghar Ghorbani (GitHub: [a-ghorbani](https://github.com/a-ghorbani)), trabajando de forma independiente en lugar de como empresa.',
          'Comenzó como proyecto personal para ejecutar modelos de lenguaje pequeños en el dispositivo; publicado como código abierto tras despertar interés público.',
          'Licencia: MIT — permisiva, de uso, modificación y redistribución libres.',
          'Más de 8.000 estrellas en GitHub y más de 850 bifurcaciones al momento de esta reseña, con seguimiento de incidencias activo e historial de pull requests.',
          'Ritmo de desarrollo: versiones puntuales frecuentes que añaden actualizaciones del motor, nuevas funciones de interfaz y soporte de idiomas ampliado, mantenidas de forma voluntaria.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar con PocketPal AI',
        content: [
          '**Conseguir un chat local funcionando en PocketPal AI toma cuatro pasos tras instalar la app, según la [documentación de puesta en marcha](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) del propio proyecto.** No hay creación de cuenta ni inicio de sesión — todo el proceso ocurre en el dispositivo.',
        ],
        numberedItems: [
          {
            title: 'Instalar la app',
            whyItMatters: 'Descarga PocketPal AI desde la [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) en iPhone/iPad o [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) en Android. No se necesita cuenta ni registro por correo para abrir la app.',
          },
          {
            title: 'Abrir la página de Modelos',
            whyItMatters: 'Ve a la pestaña Modelos desde el menú de la app para ver la lista de modelos de descarga rápida (como Gemma 2, Qwen, Phi y Danube 3) y la opción de importar un archivo GGUF personalizado.',
          },
          {
            title: 'Descargar un modelo',
            whyItMatters: 'Elige un modelo adecuado a la RAM de tu dispositivo (ver la sección de hardware más abajo) y descárgalo. Los modelos más grandes y capaces tardan más en descargarse y usan más almacenamiento en el dispositivo.',
          },
          {
            title: 'Cargar el modelo y empezar a chatear',
            whyItMatters: 'Toca "Cargar" para llevar el modelo descargado a la memoria, luego cambia a la página de Chat. Una vez cargado, toda la inferencia ocurre en el dispositivo — la función "Auto Offload/Load" de PocketPal AI puede descargar automáticamente el modelo de la memoria cuando la app pasa a segundo plano para ahorrar memoria, y volver a cargarlo cuando regreses.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '¿Qué modelos admite PocketPal AI?',
        itemHeadings: true,
        columns: ['Familia de modelo', 'Método de acceso', 'Uso típico'],
        rows: [
          {
            'Familia de modelo': 'Gemma 2',
            'Método de acceso': 'Descarga rápida con un toque en la app',
            'Uso típico': 'Chat general; familia de modelos abiertos de Google',
          },
          {
            'Familia de modelo': 'Qwen',
            'Método de acceso': 'Descarga rápida con un toque en la app',
            'Uso típico': 'Chat general y razonamiento; familia de modelos abiertos de Alibaba',
          },
          {
            'Familia de modelo': 'Phi',
            'Método de acceso': 'Descarga rápida con un toque en la app',
            'Uso típico': 'Razonamiento compacto; familia de modelos pequeños de Microsoft',
          },
          {
            'Familia de modelo': 'Danube 3',
            'Método de acceso': 'Descarga rápida con un toque en la app',
            'Uso típico': 'Chat ligero; familia de modelos pequeños de H2O.ai',
          },
          {
            'Familia de modelo': 'Cualquier otro modelo GGUF',
            'Método de acceso': 'Importación manual mediante la búsqueda de Hugging Face Hub dentro de la app, incluidos modelos con acceso restringido tras aceptar las condiciones de licencia',
            'Uso típico': 'Modelos personalizados o de nicho no incluidos en la lista de descarga rápida',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: '¿Está PocketPal AI disponible en iPhone y Android?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidad', 'Notas'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidad': 'Disponible en la [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)',
            'Notas': 'Usa la API GPU Metal de Apple para aceleración por defecto; se puede desactivar en la app si causa inestabilidad en algún dispositivo.',
          },
          {
            'Plataforma': 'Android',
            'Disponibilidad': 'Disponible en [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)',
            'Notas': 'Las versiones recientes restauraron un motor de aceleración NPU Qualcomm Hexagon para chips compatibles, además de la inferencia estándar por CPU.',
          },
          {
            'Plataforma': 'Mac / Windows / Linux',
            'Disponibilidad': 'No se encontró versión de escritorio al momento de esta reseña',
            'Notas': 'PocketPal AI es una app solo para móviles. Quienes busquen un cliente de chat GGUF local de escritorio deberían considerar Ollama, LM Studio o Jan AI.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: '¿Cuánto cuesta PocketPal AI?',
        content: [
          '**PocketPal AI es gratuita de descargar y gratuita de usar para chatear con un modelo descargado localmente — no hay suscripción, y el código fuente es público bajo licencia MIT.** El único componente de pago encontrado en la app es PalsHub, un mercado dentro de la app donde miembros de la comunidad pueden publicar y vender "Pals" premium (ajustes preestablecidos de asistente personalizables); las compras dentro de la app de PalsHub están disponibles en iOS y Android según la región.',
          'Como la app y su función de ejecutar modelos son de código abierto y gratuitas, el único coste continuo para el usuario es el espacio de almacenamiento y el ancho de banda necesarios para descargar archivos de modelo GGUF — un modelo cuantizado de 3.000 a 4.000 millones de parámetros suele pesar unos pocos gigabytes, y los modelos más grandes proporcionalmente más.',
        ],
        items: [
          '**App base:** Gratis, sin suscripción, software de código abierto bajo licencia MIT.',
          '**Chatear con modelos descargados:** Gratis — sin cargo por mensaje ni por token, ya que la inferencia corre en tu propio dispositivo.',
          '**Mercado PalsHub:** Compras dentro de la app opcionales para ajustes preestablecidos de asistente premium creados por la comunidad; la función de chat base no lo requiere.',
          '**Coste de almacenamiento:** No es monetario, pero es real — cada modelo GGUF descargado ocupa almacenamiento del dispositivo, típicamente varios gigabytes por modelo.',
        ],
      },
      features: {
        id: 'key-features',
        title: '¿Qué funciones tiene PocketPal AI?',
        content: [
          '**Más allá del chat local básico, PocketPal AI ha ido sumando a lo largo de su historial de versiones un conjunto de funciones habituales en apps de IA local más maduras.** Entre ellas:',
        ],
        items: [
          '**Pals y PalsHub.** Los "Pals" son ajustes preestablecidos de asistente personalizables (mensaje de sistema, modelo y comportamiento agrupados); PalsHub es un mercado donde los usuarios pueden compartir o vender sus propios Pals.',
          '**Talents (llamadas a herramientas).** La app admite un flujo tipo agente donde un modelo puede invocar herramientas definidas a mitad de conversación en lugar de solo generar texto plano.',
          '**Búsqueda en internet en el chat.** Las versiones recientes permiten que un chat busque en la web usando una clave de API propia del usuario de proveedores como Brave, Tavily o Exa — es opcional y requiere la clave propia del usuario, no un servicio de búsqueda incluido.',
          '**Salida de texto a voz.** La app puede leer las respuestas en voz alta, con soporte de idiomas en expansión en versiones recientes.',
          '**Fijado de chats y exportación a Markdown.** Las conversaciones se pueden fijar para acceso rápido y exportar como archivos Markdown.',
          '**Decodificación especulativa (experimental).** Un modelo "borrador" más pequeño se puede combinar con un modelo más grande para acelerar la generación — el propio proyecto lo marca como función experimental, no como garantía estable.',
          '**Herramientas de benchmark.** La app incluye una forma de medir el rendimiento del modelo en el dispositivo actual, útil para comparar cómo rinden distintos niveles de cuantización en tu teléfono específico.',
        ],
        note: 'La disponibilidad de funciones puede variar según la versión de la app y la plataforma (iOS vs. Android), ya que el proyecto lanza versiones incrementales frecuentes. Revisa el registro de cambios dentro de la app o la [página de lanzamientos en GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases) para ver qué está activo en tu versión instalada.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '¿Qué hardware necesitas para ejecutar PocketPal AI?',
        content: [
          '**El modelo que elijas, no la app en sí, marca tu piso real de hardware — como regla general para modelos GGUF en teléfonos, un modelo cuantizado de 2.000 a 4.000 millones de parámetros necesita aproximadamente 3-4 GB de RAM libre, mientras que uno de 7.000 a 8.000 millones necesita 6-8 GB o más.** Esta es orientación general de dimensionamiento para LLM locales, no un benchmark específico de PocketPal; PromptQuorum no ha medido de forma independiente el uso exacto de memoria de PocketPal AI por modelo.',
          'En iPhone y iPad, la app usa por defecto la API GPU Metal de Apple, lo que en general mejora la velocidad de inferencia frente a la ejecución solo por CPU en dispositivos con Apple Silicon. En Android, las versiones recientes añadieron soporte para un motor de aceleración NPU Qualcomm Hexagon en chips compatibles; los dispositivos sin NPU compatible recurren a inferencia por CPU, notablemente más lenta para modelos grandes.',
        ],
        items: [
          'Modelos pequeños (2.000-4.000 millones de parámetros, cuantizados): usables en la mayoría de teléfonos de los últimos años con 4 GB o más de RAM libre.',
          'Modelos medianos (7.000-8.000 millones de parámetros, cuantizados): RAM de dispositivo recomendada de 8 GB o más para una respuesta aceptable.',
          'Almacenamiento: prevé varios gigabytes de almacenamiento libre por cada archivo de modelo descargado.',
          'Inferencia más rápida: un iPhone/iPad con Apple Silicon (aceleración Metal) o un dispositivo Android reciente con NPU Qualcomm Hexagon compatible superará a hardware más antiguo o económico ejecutando solo por CPU.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'A quién le conviene PocketPal AI',
        items: [
          '**Usuarios preocupados por la privacidad que quieren coste de suscripción cero.** Si el objetivo es ejecutar un modelo abierto sin cuota continua ni cuenta, la app base gratuita y bajo licencia MIT de PocketPal AI encaja directamente.',
          '**Usuarios que quieren probar modelos más allá de una lista fija.** Como la app puede cargar cualquier archivo GGUF de Hugging Face —no solo su lista de descarga rápida—, conviene a quienes ya tienen un modelo específico en mente.',
          '**Desarrolladores y usuarios con curiosidad técnica, cómodos con proyectos de código abierto.** El repositorio público de GitHub, el seguimiento de incidencias y los lanzamientos frecuentes convienen a quienes están dispuestos a leer notas de versión o reportar una incidencia en lugar de esperar soporte al cliente dedicado.',
          '**Usuarios que quieren inspeccionar o modificar el código ellos mismos.** La licencia MIT permite bifurcar y modificar, algo que importa a quien quiera auditar exactamente qué hace la app antes de confiarle conversaciones privadas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'A quién no le conviene PocketPal AI',
        items: [
          '**Usuarios que quieren una experiencia totalmente guiada, sin configuración.** Elegir el tamaño de modelo adecuado para tu dispositivo y gestionar tú mismo las descargas forma parte del flujo de trabajo; quienes prefieran que la app decida por ellos podrían preferir una app más guiada como Loci.',
          '**Usuarios que necesitan soporte para Mac, Windows o Linux.** PocketPal AI es solo para móviles (iPhone/iPad y Android); los usuarios de escritorio deberían considerar Ollama, LM Studio o Jan AI.',
          '**Usuarios que quieren los modelos más exigentes (70.000 millones de parámetros o más).** El hardware de los teléfonos, incluso los dispositivos de gama alta actuales, no permite en la práctica ejecutar modelos de esa escala localmente — esas cargas de trabajo necesitan un escritorio, una estación de trabajo o una API en la nube, sin importar qué app móvil se use.',
          '**Usuarios que esperan soporte comercial dedicado.** PocketPal AI la mantiene un solo desarrollador en su tiempo libre, según la propia documentación del proyecto; quienes necesiten tiempos de respuesta garantizados o acuerdos de soporte empresarial deberían buscar una alternativa con respaldo comercial.',
          '**Usuarios que quieren sincronización en la nube integrada entre dispositivos.** Como la inferencia y el historial de chat quedan locales en cada dispositivo por diseño, PocketPal AI no ofrece una sincronización integrada basada en cuenta entre un iPhone y un dispositivo Android como lo haría una app de chat con respaldo en la nube.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'PocketPal AI frente a alternativas',
        itemHeadings: true,
        columns: ['App', 'Licencia / coste', 'Plataformas', 'Flexibilidad de modelos'],
        rows: [
          {
            'App': 'PocketPal AI',
            'Licencia / coste': 'Gratis, código abierto (MIT)',
            'Plataformas': 'iPhone/iPad, Android',
            'Flexibilidad de modelos': 'Lista de descarga rápida (Gemma 2, Qwen, Phi, Danube 3) más cualquier archivo GGUF de Hugging Face',
          },
          {
            'App': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Licencia / coste': 'Nivel gratuito más niveles de pago; código cerrado',
            'Plataformas': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
            'Flexibilidad de modelos': 'Biblioteca seleccionada (~10 modelos); no permite importar archivos GGUF propios',
          },
          {
            'App': 'Private LLM',
            'Licencia / coste': 'De pago, compra única; código cerrado',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Flexibilidad de modelos': '140+ modelos, con formatos de cuantización OmniQuant y GPTQ',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Licencia / coste': 'Gratis con nivel de pago; código cerrado',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Flexibilidad de modelos': 'Lista de modelos seleccionada en el dispositivo; integración con Siri y Atajos',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Licencia / coste': 'Gratis; código cerrado',
            'Plataformas': 'iPhone/iPad',
            'Flexibilidad de modelos': 'Lista de modelos seleccionada, según su ficha en App Store',
          },
          {
            'App': 'ChatterUI',
            'Licencia / coste': 'Gratis, código abierto (AGPL-3.0)',
            'Plataformas': 'Android (compilar desde el código fuente)',
            'Flexibilidad de modelos': 'Ejecuta archivos GGUF en el dispositivo mediante llama.cpp, o se conecta a APIs remotas; soporte Character Card v2',
          },
          {
            'App': 'RikkaHub',
            'Licencia / coste': 'Gratis, código abierto',
            'Plataformas': 'Android',
            'Flexibilidad de modelos': 'Cliente multiproveedor; inferencia local en el dispositivo mediante un proveedor LiteRT para modelos como Gemma y Qwen',
          },
          {
            'App': 'MLC Chat (MLC-LLM)',
            'Licencia / coste': 'Gratis, código abierto (Apache 2.0)',
            'Plataformas': 'iPhone/iPad, Android',
            'Flexibilidad de modelos': 'Ejecuta modelos compilados para el motor MLC en lugar de archivos GGUF sin procesar',
          },
        ],
        note: 'LLM Farm, una app de chat GGUF de código abierto para iOS antes popular, fue retirada de la App Store y marcada como "temporalmente no disponible" en su propio repositorio de GitHub al momento de esta reseña — por eso se omite de las recomendaciones activas anteriores. Layla, otra app de asistente en el dispositivo, según reportes perdió su nivel gratuito "Layla Lite" en Google Play; comprueba la disponibilidad actual directamente en [layla-network.ai](https://www.layla-network.ai) antes de asumir que es instalable.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis PocketPal AI?',
            a: 'Sí. PocketPal AI es gratuita de descargar y gratuita de usar para chatear con un modelo descargado, y la app es de código abierto bajo licencia MIT. Un mercado opcional dentro de la app, PalsHub, vende ajustes preestablecidos de asistente premium creados por la comunidad, pero la función de chat principal no tiene suscripción ni barrera de pago.',
          },
          {
            q: '¿Quién desarrolló PocketPal AI?',
            a: 'PocketPal AI fue creada por Asghar Ghorbani, quien la empezó como proyecto personal para ejecutar modelos de lenguaje pequeños en su propio teléfono, antes de publicar el código como open source al despertar interés externo. Se mantiene de forma independiente, no por una empresa.',
          },
          {
            q: '¿PocketPal AI es de código abierto?',
            a: 'Sí, el código fuente completo está publicado en [GitHub](https://github.com/a-ghorbani/pocketpal-ai) bajo licencia MIT, una licencia permisiva que permite el uso, la modificación y la redistribución libres.',
          },
          {
            q: '¿Qué modelos puede ejecutar PocketPal AI?',
            a: 'PocketPal AI incluye descarga con un toque de Gemma 2, Qwen, Phi y Danube 3, y además puede cargar cualquier otro modelo en formato GGUF que encuentres en Hugging Face, incluidos modelos con acceso restringido tras aceptar sus condiciones de licencia.',
          },
          {
            q: '¿PocketPal AI funciona en iPhone y Android?',
            a: 'Sí. PocketPal AI está disponible en la [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) para iPhone y iPad, y en [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) para Android. No existe versión para Mac, Windows ni Linux.',
          },
          {
            q: '¿Cuánta RAM necesita PocketPal AI?',
            a: 'Eso depende del modelo elegido, no de un requisito fijo de la app. Como orientación general para modelos GGUF cuantizados en teléfonos, los modelos de 2.000 a 4.000 millones de parámetros suelen necesitar 3-4 GB de RAM libre, y los de 7.000 a 8.000 millones suelen necesitar 8 GB o más. Los dispositivos con más RAM pueden ejecutar modelos más grandes y capaces.',
          },
          {
            q: '¿PocketPal AI necesita conexión a internet?',
            a: 'No se necesita conexión a internet para chatear una vez descargado un modelo — la inferencia corre completamente en el dispositivo mediante llama.cpp. Se necesita conexión a internet para descargar modelos inicialmente, y opcionalmente para usar la función de búsqueda en internet de la app, que requiere una clave de API propia del usuario de un proveedor como Brave, Tavily o Exa.',
          },
          {
            q: '¿Es segura PocketPal AI para conversaciones privadas?',
            a: 'Como la inferencia ocurre localmente y el código fuente es público y auditable bajo licencia MIT, PocketPal AI no necesita enviar el contenido del chat a un servidor para funcionar. Esta reseña no incluye una auditoría de seguridad independiente de la app; los usuarios que necesiten ese nivel de garantía deberían revisar directamente el repositorio público o su seguimiento de incidencias.',
          },
          {
            q: '¿Cómo se compara PocketPal AI con Private LLM o Loci?',
            a: 'PocketPal AI es gratuita y de código abierto con carga de modelos GGUF sin restricciones, mientras que Private LLM es una app de pago y código cerrado exclusiva de Apple con un catálogo de modelos integrado más amplio (140+ modelos), y Loci es una app de código cerrado en cinco plataformas con una biblioteca de modelos más pequeña y seleccionada. Elige PocketPal AI si el coste y la apertura importan más; elige Private LLM o Loci si te importa más una experiencia más guiada y pulida en más plataformas que ser gratis o de código abierto. Ver la tabla comparativa anterior para más detalle.',
          },
          {
            q: '¿Puedo ejecutar modelos grandes como de 70.000 millones de parámetros en PocketPal AI?',
            a: 'No. El hardware de los teléfonos, incluidos los dispositivos de gama alta actuales, no tiene suficiente RAM para ejecutar en la práctica modelos de esa escala localmente. PocketPal AI está pensada para modelos pequeños y medianos (hasta aproximadamente 8.000 millones de parámetros); quienes necesiten modelos más grandes deberían usar una estación de trabajo de escritorio o una API en la nube en su lugar.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'PocketPal AI se gana su lugar entre las apps de IA local para móviles al ser genuinamente gratuita, genuinamente de código abierto y genuinamente flexible respecto al modelo que ejecuta — tres cualidades cada una poco comunes por sí sola, y aún más raras combinadas, en esta categoría. No es la app más pulida de este espacio: los usuarios gestionan sus propias descargas de modelos, la interfaz cambia algo de guía por flexibilidad, y el proyecto lo mantiene un solo desarrollador en su tiempo libre en lugar de una empresa con equipo de soporte. Elige PocketPal AI si quieres ejecutar un modelo abierto en tu propio teléfono sin suscripción ni dependencia de un proveedor, y te sientes cómodo eligiendo tú mismo un modelo adecuado a tu dispositivo. Elige en su lugar una app de pago y seleccionada como Private LLM o Loci si prefieres cambiar algo de coste y apertura por una configuración más guiada y soporte dedicado en más plataformas.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[PocketPal AI en GitHub](https://github.com/a-ghorbani/pocketpal-ai) — código fuente, licencia (MIT), historial de versiones y número de estrellas/bifurcaciones citados en esta reseña.',
          '[Documentación de puesta en marcha de PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) — pasos de configuración, modelos incluidos y notas sobre aceleración GPU.',
          '[PocketPal AI en la App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) — disponibilidad en iOS/iPadOS.',
          '[PocketPal AI en Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) — disponibilidad en Android.',
          '["PocketPal AI: Tiny LLMs in the Pocket" por Asghar Ghorbani, Medium](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75) — origen del proyecto y motivación del desarrollador.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Las mejores apps de LLM local para Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — el repaso de apps para Android, incluidas PocketPal AI, MLC Chat, Maid y Layla.',
          '[Las mejores apps de LLM local para iPhone en 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — el equivalente en iOS, comparando PocketPal AI con Private LLM y Enclave AI.',
          '[Reseña de Loci: IA sin conexión para iPhone, Android, iPad, Mac y Windows](/power-local-llm/loci-ai-review-offline-local-ai) — una alternativa de pago y código cerrado en cinco plataformas con biblioteca de modelos seleccionada.',
          '[Los mejores modelos LLM móviles en 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — el artículo complementario sobre modelos, para elegir qué modelo GGUF cabe realmente en tu teléfono.',
          '[Reseña de Enclave AI](/power-local-llm/enclave-ai-review) — una alternativa exclusiva de Apple con automatización mediante Siri y Atajos.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PocketPal AI: reseña (2026) — chat local gratis y de código abierto',
      description:
        'Reseña de PocketPal AI: una app gratuita y de código abierto (MIT) que ejecuta modelos GGUF localmente en iPhone y Android. Modelos, RAM necesaria, precio y a quién le conviene.',
      url: 'https://promptquorum.com/es/power-local-llm/pocketpal-ai-review',
      inLanguage: 'es',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuarios de iPhone y Android preocupados por la privacidad que evalúan apps de chat de IA local gratuitas y de código abierto' },
      about: [
        { '@type': 'Thing', name: 'PocketPal AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'Software de código abierto' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/pocketpal-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PocketPal AI: reseña (2026)', item: 'https://promptquorum.com/es/power-local-llm/pocketpal-ai-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketpal-ai-review-hero-ja.webp',
    title: 'PocketPal AIレビュー（2026）：無料・オープンソースのオンデバイスAIチャット',
    seoTitle: 'PocketPal AI 2026レビュー：無料OSSローカルチャット',
    intro:
      'PocketPal AIは、iPhone・iPad・Android向けの無料・MITライセンスのオープンソースアプリで、GGUF形式の言語モデルを端末上で直接実行します。サーバーとの通信もチャット時のアカウント登録も不要です。開発者はAsghar Ghorbani氏で、個人プロジェクトとして始めた後、コードを[GitHub](https://github.com/a-ghorbani/pocketpal-ai)で公開しました。本レビューでは、現在のアプリの機能、同梱モデル、実際に必要なハードウェア、実際の料金体系（本体は無料。PalsHubというコミュニティマーケットプレイスがプレミアムプリセットを有料販売）、そして誰に向いていて誰に向いていないかを解説します。',
    metaDescription:
      'PocketPal AIレビュー：MITライセンスの無料オープンソースアプリで、iPhoneとAndroidでGGUFモデルをローカル実行。モデル、必要RAM、料金、向いている人を解説。',
    twitterDescription:
      'PocketPal AI 2026レビュー：iPhoneとAndroidでGGUFモデルを端末上で実行する無料オープンソースアプリ。機能、費用、向いている人をまとめました。',
    audience:
      '商用アプリにお金をかけずにオープンウェイトモデルをローカルで動かしたい、プライバシー重視のiPhone・Androidユーザー。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'PocketPal AIレビュー',
    targetKeywords: [
      'pocketpal ai レビュー',
      'pocketpal ai android',
      'pocketpal ai iphone',
      'pocketpal ai モデル',
      'pocketpal ai private llm 比較',
      '無料ローカルaiアプリ',
      'オープンソースローカルaiアプリ',
      'gguf モデル スマホ 実行',
    ],
    current_models_mentioned: ['Gemma 2', 'Qwen', 'Phi', 'Danube 3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android'],
    leadAnswerBlock:
      '**PocketPal AIは、GGUF言語モデルをiPhone・iPad・Android端末上で完全にローカル実行する、無料・オープンソース（MITライセンス）のアプリです。チャットにクラウド依存はありません。** 開発者はAsghar Ghorbani氏で、[GitHub](https://github.com/a-ghorbani/pocketpal-ai)でホストされており（本レビュー時点で8,000スター超）、Gemma 2、Qwen、Phi、Danube 3などのワンタップダウンロードに対応し、Hugging Faceから取得した他のGGUFファイルも読み込めます。本体アプリは無料で、PalsHubというオプションのアプリ内マーケットプレイスがプレミアムアシスタントプリセットを販売していますが、ダウンロード済みモデルとのチャット自体は無料です。',
    quickAnswerTop: {
      ja: {
        question: 'プライベートかつオフラインのAIチャットにPocketPal AIは導入する価値がありますか？',
        answer:
          'はい。自分のスマートフォンでオープンウェイトモデルを本当に無料・オープンソースな方法で動かしたく、モデルのダウンロード管理を自分でこなせる方には向いています。PocketPal AIはチャット機能にサブスクリプションがなく、GitHubで全ソースコードを公開しており、固定リストではなく任意のGGUFモデルに対応しています。設定不要の完成されたアプリを求めるユーザーより、技術的な好奇心を持つユーザーに向いています。LociやPrivate LLMは柔軟性を犠牲にしてより導線の整った設定を提供します。',
        bullets: [
          'MITライセンスで無料・オープンソース — ローカルモデルとのチャットにサブスクリプション不要。',
          '[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)（iPhone/iPad）と[Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)（Android）で提供。',
          'Gemma 2、Qwen、Phi、Danube 3のワンタップダウンロードに加え、Hugging Faceの任意のカスタムGGUFファイルに対応。',
          '単独の開発者Asghar Ghorbani氏によって、資金提供を受けた企業ではなく個人のオープンソースプロジェクトとして開発。',
          'オプションのPalsHubマーケットプレイスがアプリ内課金でプレミアムアシスタントプリセットを販売。本体のチャットアプリ自体には課金の壁はない。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'PocketPal AIとは？', anchor: 'what-is-pocketpal-ai' },
      { label: 'PocketPal AIを作ったのは誰？', anchor: 'history-and-developer' },
      { label: 'PocketPal AIの始め方', anchor: 'getting-started' },
      { label: 'PocketPal AIが対応するモデルは？', anchor: 'models-supported' },
      { label: 'PocketPal AIはiPhoneとAndroidで使える？', anchor: 'platform-availability' },
      { label: 'PocketPal AIの料金は？', anchor: 'pricing' },
      { label: 'PocketPal AIの機能は？', anchor: 'key-features' },
      { label: '必要なハードウェアは？', anchor: 'hardware-requirements' },
      { label: 'PocketPal AIが向いている人', anchor: 'who-should-use' },
      { label: 'PocketPal AIが向いていない人', anchor: 'who-should-not-use' },
      { label: 'PocketPal AIと代替アプリの比較', anchor: 'vs-alternatives' },
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
            text: 'PocketPal AIは、iPhone・iPad・Android向けの無料・MITライセンスのオープンソースアプリで、GGUF言語モデルを端末上で直接ダウンロードして実行します。開発者はAsghar Ghorbani氏。',
          },
          {
            type: 'plain-terms',
            text: '会社のサーバーではなく自分のスマートフォン上で動くAIとチャットするためにインストールするアプリです。コードはGitHubで公開されており、アプリ自体は無料で、単一のプロバイダーに縛られず自分でダウンロードするモデルを選べます。',
          },
        ],
        items: [
          '無料・オープンソース（MITライセンス）。ソースコードとIssueトラッカーは[GitHub](https://github.com/a-ghorbani/pocketpal-ai)で公開。',
          'Asghar Ghorbani氏が個人プロジェクトとして開発を開始し、注目を集めた後にオープンソース化。',
          'llama.cppを介してGGUFモデルを端末上で完全実行 — チャットにアカウントもサーバー通信も不要。',
          'Gemma 2、Qwen、Phi、Danube 3のワンタップダウンロードに対応。Hugging Faceの他のGGUFモデルは手動で読み込み可能。',
          'App Store（iPhone/iPad）とGoogle Play（Android）で提供。Mac・Windows・Linux版はなし。',
          '本体アプリにサブスクリプションはなし。オプションのPalsHubマーケットプレイスがアプリ内課金でプレミアムアシスタントプリセットを販売。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、公開されている[GitHubリポジトリ](https://github.com/a-ghorbani/pocketpal-ai)、プロジェクト内のドキュメント、App StoreおよびGoogle Playの掲載情報に基づいており、2026年9月に確認しました。PromptQuorumは本レビューのためにPocketPal AIの独自のハンズオンベンチマークを実施していません。以下の性能に関する記述は、このアプリ固有の測定値ではなく、ローカルLLM全般に関するハードウェアの一般的な目安です。',
          },
        ],
      },
      overview: {
        id: 'what-is-pocketpal-ai',
        title: 'PocketPal AIとは？',
        content: [
          '**PocketPal AIは、GGUF形式のオープンウェイト言語モデルをダウンロードし、[llama.cpp](https://github.com/ggml-org/llama.cpp)を推論エンジンとしてiPhone・iPad・Android端末上でローカル実行するモバイルアプリです。** アプリ自体はReact Nativeで構築されており、[MITライセンス](https://github.com/a-ghorbani/pocketpal-ai/blob/main/LICENSE)で公開されています。つまり、フルソースコードが公開されており、自由に閲覧・フォーク・改変できます。',
          '固定のキュレーション済みモデルリストに縛るアプリとは異なり、PocketPal AIはワンタップで取得できるモデルの中から選ぶか、[Hugging Face](https://huggingface.co)で見つけた任意のGGUFファイル（ライセンス条件に同意した後のゲート付きモデルを含む）をインポートできます。この柔軟性がアプリの最大の特徴で、単一ベンダーの製品というより、チャットUIを備えた汎用GGUFランタイムのように振る舞います。',
        ],
        note: 'GGUFは、量子化されたオープンウェイト言語モデルをパッケージ化し、応答のたびにクラウドAPIを呼び出す代わりに、llama.cppなどのランタイムを通じてコンシューマー向けハードウェア上で効率的に実行するためのファイル形式です。',
      },
      history: {
        id: 'history-and-developer',
        title: 'PocketPal AIを作ったのは誰？',
        content: [
          '**PocketPal AIは、自分のスマートフォンで小型言語モデルを動かすための個人プロジェクトとして始めたAsghar Ghorbani氏が、外部からの関心を集めた後にオープンソース化して作成しました。** Ghorbani氏は、プロジェクトの起源と動機について[Mediumの記事「PocketPal AI: Tiny LLMs in the Pocket」](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75)で、小型言語モデルの力をそのままポケットに入れることが目標だったと述べています。',
          'このプロジェクトは、資金提供を受けた企業や専任チームではなく、開発者の空き時間に維持されています。リポジトリ自体のセットアップ用ドキュメントにもその旨が明記されており、企業並みのサポート対応速度を期待する前に知っておくべき点です。GitHubリポジトリ（[a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)）は本レビュー時点で8,000スター超、850フォーク超を集めており、新モデル対応、UI変更、インターネット検索連携やチャットのピン留め、Markdownエクスポートといった機能追加を含む定期的なリリースを継続的に受けています。',
        ],
        items: [
          '開発者：Asghar Ghorbani氏（GitHub：[a-ghorbani](https://github.com/a-ghorbani)）。企業ではなく個人で開発。',
          '自分の端末で小型言語モデルを動かす個人プロジェクトとして開始。公的な関心を集めた後にオープンソース化。',
          'ライセンス：MIT — 自由な利用・改変・再配布が可能な寛容なライセンス。',
          '本レビュー時点でGitHubスター8,000超、フォーク850超。Issueトラッカーとプルリクエスト履歴も活発。',
          '開発ペース：ランタイム更新、新しいUI機能、対応言語の拡張などを盛り込んだ頻繁なポイントリリースを、ボランティアベースで維持。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'PocketPal AIの始め方',
        content: [
          '**プロジェクト自身の[入門ドキュメント](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md)によれば、インストール後に4つのステップでローカルチャットを使い始められます。** アカウント作成やサインインは不要で、すべて端末内で完結します。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'iPhone/iPadは[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)、Androidは[Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)からPocketPal AIをダウンロードします。アプリを開くのにアカウントやメール登録は不要です。',
          },
          {
            title: 'モデルページを開く',
            whyItMatters: 'アプリメニューから「モデル」タブに移動すると、Gemma 2、Qwen、Phi、Danube 3などのワンタップダウンロードモデルの一覧と、カスタムGGUFファイルをインポートするオプションが表示されます。',
          },
          {
            title: 'モデルをダウンロードする',
            whyItMatters: '端末のRAMに合ったサイズのモデルを選び（下記のハードウェアの節を参照）、ダウンロードします。より大きく高性能なモデルほどダウンロードに時間がかかり、端末のストレージも多く消費します。',
          },
          {
            title: 'モデルを読み込んでチャットを開始する',
            whyItMatters: '「Load」をタップしてダウンロードしたモデルをメモリに読み込み、Chatページに切り替えます。読み込み後の推論はすべて端末上で行われます。PocketPal AIの「Auto Offload/Load」機能により、アプリがバックグラウンドに移行した際にモデルを自動的にメモリから解放してメモリを節約し、復帰時に再度読み込むことができます。',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'PocketPal AIが対応するモデルは？',
        itemHeadings: true,
        columns: ['モデルファミリー', 'アクセス方法', '主な用途'],
        rows: [
          {
            'モデルファミリー': 'Gemma 2',
            'アクセス方法': 'アプリ内でワンタップダウンロード',
            '主な用途': '一般的なチャット。Googleのオープンウェイトモデルファミリー',
          },
          {
            'モデルファミリー': 'Qwen',
            'アクセス方法': 'アプリ内でワンタップダウンロード',
            '主な用途': '一般的なチャットと推論。Alibabaのオープンウェイトモデルファミリー',
          },
          {
            'モデルファミリー': 'Phi',
            'アクセス方法': 'アプリ内でワンタップダウンロード',
            '主な用途': 'コンパクトな推論。Microsoftの小型モデルファミリー',
          },
          {
            'モデルファミリー': 'Danube 3',
            'アクセス方法': 'アプリ内でワンタップダウンロード',
            '主な用途': '軽量チャット。H2O.aiの小型モデルファミリー',
          },
          {
            'モデルファミリー': 'その他のGGUFモデル',
            'アクセス方法': 'アプリ内のHugging Face Hub検索から手動インポート（ライセンス条件に同意すればゲート付きモデルも可）',
            '主な用途': 'ワンタップダウンロード一覧にないカスタム・ニッチなモデル',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'PocketPal AIはiPhoneとAndroidで使える？',
        itemHeadings: true,
        columns: ['プラットフォーム', '提供状況', '補足'],
        rows: [
          {
            'プラットフォーム': 'iPhone / iPad',
            '提供状況': '[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)で提供',
            '補足': 'デフォルトでApple純正のMetal GPU APIによる高速化を使用。特定端末で不安定な場合はアプリ内で無効化可能。',
          },
          {
            'プラットフォーム': 'Android',
            '提供状況': '[Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)で提供',
            '補足': '最近のバージョンでは、対応チップセット向けにQualcomm Hexagon NPUによる高速化バックエンドが復活。通常のCPU推論にも対応。',
          },
          {
            'プラットフォーム': 'Mac / Windows / Linux',
            '提供状況': '本レビュー時点でデスクトップ版は見つからず',
            '補足': 'PocketPal AIはモバイル専用アプリです。デスクトップでローカルGGUFチャットクライアントを探している場合は、Ollama、LM Studio、Jan AIを検討してください。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'PocketPal AIの料金は？',
        content: [
          '**PocketPal AIは無料でダウンロードでき、ローカルにダウンロードしたモデルとのチャットも無料です。サブスクリプションはなく、ソースコードはMITライセンスの下で公開されています。** アプリ内で確認できる唯一の有料要素はPalsHubで、コミュニティメンバーがプレミアムな「Pals」（カスタマイズ可能なアシスタントプリセット）を公開・販売できるアプリ内マーケットプレイスです。PalsHubのアプリ内課金は地域によりiOSとAndroidの両方で利用できます。',
          'アプリ本体とモデル実行機能はオープンソースかつ無料であるため、ユーザーにとって継続的にかかるコストは、GGUFモデルファイルをダウンロードするためのストレージ容量と帯域だけです。3〜4Bパラメータの量子化モデルは通常数ギガバイト程度で、より大きなモデルはそれに比例して大きくなります。',
        ],
        items: [
          '**本体アプリ：** 無料、サブスクリプションなし、MITライセンスのオープンソースソフトウェア。',
          '**ダウンロード済みモデルとのチャット：** 無料 — 推論は自分の端末上で行われるため、メッセージやトークンごとの課金はなし。',
          '**PalsHubマーケットプレイス：** コミュニティが作成したプレミアムアシスタントプリセットのオプションのアプリ内課金。基本的なチャット機能には不要。',
          '**ストレージコスト：** 金銭的ではないが実際にかかるコスト。ダウンロードしたGGUFモデルごとに端末のストレージを消費し、通常はモデルあたり数ギガバイト。',
        ],
      },
      features: {
        id: 'key-features',
        title: 'PocketPal AIの機能は？',
        content: [
          '**基本的なローカルチャットに加え、PocketPal AIはリリースを重ねる中で、より成熟したローカルAIアプリに共通する機能を段階的に増やしてきました。** 主な機能は次のとおりです。',
        ],
        items: [
          '**PalsとPalsHub。**「Pals」はシステムプロンプト・モデル・振る舞いをまとめたカスタマイズ可能なアシスタントプリセットで、PalsHubはユーザーが自分のPalsを共有・販売できるマーケットプレイスです。',
          '**Talents（ツール呼び出し）。** 単なるプレーンテキスト生成ではなく、会話の途中でモデルが定義済みのツールを呼び出せるエージェント的なフローに対応しています。',
          '**チャット内インターネット検索。** 最近のリリースでは、Brave、Tavily、Exaなどのプロバイダーからユーザー自身が取得したAPIキーを使って、チャットからWeb検索ができます。これはオプションで、組み込みの検索サービスではなく利用者自身のキーが必要です。',
          '**音声読み上げ（TTS）。** 応答を音声で読み上げる機能があり、最近のリリースで対応言語が拡大しています。',
          '**チャットのピン留めとMarkdownエクスポート。** 会話をピン留めしてすぐにアクセスできるほか、Markdownファイルとしてエクスポートできます。',
          '**投機的デコード（実験的機能）。** 小さな「ドラフト」モデルを大きなモデルと組み合わせて生成を高速化する機能で、プロジェクト自身が安定した保証ではなく実験的機能と位置づけています。',
          '**ベンチマークツール。** 現在の端末上でモデルの性能をベンチマークする機能があり、自分のスマートフォンで各量子化レベルの性能を比較するのに役立ちます。',
        ],
        note: 'プロジェクトは頻繁に段階的なリリースを行っているため、機能の提供状況はアプリのバージョンやプラットフォーム（iOS/Android）によって異なる場合があります。インストール済みバージョンで何が使えるかは、アプリ内の更新履歴や[GitHubのリリースページ](https://github.com/a-ghorbani/pocketpal-ai/releases)を確認してください。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'PocketPal AIを動かすのに必要なハードウェアは？',
        content: [
          '**実際のハードウェアの下限を決めるのはアプリ自体ではなく選択したモデルです。スマートフォン上のGGUFモデルの一般的な目安として、量子化された2〜4Bパラメータモデルにはおよそ3〜4GBの空きRAMが必要で、7〜8Bパラメータモデルには6〜8GB以上が必要です。** これはローカルLLM全般の標準的なサイジングの目安であり、PocketPal固有のベンチマークではありません。PromptQuorumはモデルごとのPocketPal AIの正確なメモリ使用量を独自に測定していません。',
          'iPhoneとiPadでは、アプリはデフォルトでAppleのMetal GPU APIを使用しており、一般的にApple SiliconデバイスでCPUのみの実行より推論速度が向上します。Androidでは、最近のリリースで対応チップセット向けにQualcomm Hexagon NPU高速化バックエンドのサポートが追加されました。対応NPUがない端末はCPU推論にフォールバックし、大きなモデルでは著しく遅くなります。',
        ],
        items: [
          '小型モデル（2〜4Bパラメータ、量子化済み）：ここ数年に発売された空きRAM 4GB以上の大半のスマートフォンで利用可能。',
          '中型モデル（7〜8Bパラメータ、量子化済み）：許容できる応答性のために推奨される端末RAMは8GB以上。',
          'ストレージ：ダウンロードしたモデルファイルごとに数ギガバイトの空き容量を見込んでおく。',
          'より高速な推論：Apple Silicon搭載のiPhone/iPad（Metal高速化）や、対応するQualcomm Hexagon NPUを搭載した最近のAndroid端末は、CPUのみで実行する古い機種や低価格機種より優れた性能を発揮する。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'PocketPal AIが向いている人',
        items: [
          '**サブスクリプション費用をゼロにしたいプライバシー重視のユーザー。** 継続的な費用やアカウントなしでオープンウェイトモデルを動かすことが目的なら、MITライセンスで無料のPocketPal AIの本体アプリはそのまま合致します。',
          '**固定リスト以外のモデルも試したいユーザー。** アプリはワンタップダウンロードの一覧だけでなく、Hugging Faceの任意のGGUFファイルを読み込めるため、すでに特定のモデルを想定しているユーザーに向いています。',
          '**オープンソースプロジェクトに慣れた開発者や技術的好奇心のあるユーザー。** 公開されているGitHubリポジトリ、Issueトラッカー、頻繁なリリースは、専任のカスタマーサポートを期待するのではなく、リリースノートを読んだりIssueを報告したりできるユーザーに向いています。',
          '**自分でコードを検証・改変したいユーザー。** MITライセンスはフォークと改変を許可しており、プライベートな会話を任せる前にアプリが実際に何をしているかを監査したいユーザーにとって重要です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'PocketPal AIが向いていない人',
        items: [
          '**完全にガイドされた設定不要の体験を求めるユーザー。** 端末に合ったモデルサイズを選び、自分でダウンロードを管理することはワークフローの一部です。その判断をアプリに任せたいユーザーは、Lociのようなよりキュレーションされたアプリの方が向いているかもしれません。',
          '**Mac、Windows、Linuxのサポートが必要なユーザー。** PocketPal AIはモバイル専用（iPhone/iPadとAndroid）です。デスクトップユーザーはOllama、LM Studio、Jan AIを検討してください。',
          '**最も要求の厳しいモデル（70B以上のパラメータ）を求めるユーザー。** 最新のフラッグシップ端末であっても、スマートフォンのハードウェアではその規模のモデルを実用的にローカル実行できません。どのモバイルアプリを使うかにかかわらず、そうしたワークロードにはデスクトップ、ワークステーション、またはクラウドAPIが必要です。',
          '**専任の商用サポートを期待するユーザー。** プロジェクト自身のドキュメントによれば、PocketPal AIは1人の開発者が空き時間に維持しています。保証された対応時間やエンタープライズ向けサポート契約が必要なユーザーは、商用の裏付けがある代替アプリを検討すべきです。',
          '**端末間の組み込みクラウド同期を求めるユーザー。** 推論とチャット履歴が設計上各端末にローカルで保持されるため、PocketPal AIはクラウドベースのチャットアプリのようなiPhoneとAndroid端末間のアカウントベースの同期を組み込みでは提供していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'PocketPal AIと代替アプリの比較',
        itemHeadings: true,
        columns: ['アプリ', 'ライセンス／費用', 'プラットフォーム', 'モデルの柔軟性'],
        rows: [
          {
            'アプリ': 'PocketPal AI',
            'ライセンス／費用': '無料、オープンソース（MIT）',
            'プラットフォーム': 'iPhone/iPad、Android',
            'モデルの柔軟性': 'ワンタップダウンロード一覧（Gemma 2、Qwen、Phi、Danube 3）に加え、Hugging Faceの任意のGGUFファイル',
          },
          {
            'アプリ': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'ライセンス／費用': '無料プラン＋有料プラン。クローズドソース',
            'プラットフォーム': 'iPhone/iPad/Android/Mac/Windows（5プラットフォーム）',
            'モデルの柔軟性': 'キュレーション済みライブラリ（約10モデル）。カスタムGGUFファイルのインポート不可',
          },
          {
            'アプリ': 'Private LLM',
            'ライセンス／費用': '有料、買い切り。クローズドソース',
            'プラットフォーム': 'iPhone/iPad/Mac（Apple限定）',
            'モデルの柔軟性': '140以上のモデル。OmniQuantおよびGPTQ量子化フォーマットに対応',
          },
          {
            'アプリ': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'ライセンス／費用': '無料＋有料プラン。クローズドソース',
            'プラットフォーム': 'iPhone/iPad/Mac（Apple限定）',
            'モデルの柔軟性': '端末上のキュレーション済みモデル一覧。SiriとShortcuts連携',
          },
          {
            'アプリ': '[Locally AI](/power-local-llm/locally-ai-review)',
            'ライセンス／費用': '無料。クローズドソース',
            'プラットフォーム': 'iPhone/iPad',
            'モデルの柔軟性': 'App Storeの掲載情報によるキュレーション済みモデル一覧',
          },
          {
            'アプリ': 'ChatterUI',
            'ライセンス／費用': '無料、オープンソース（AGPL-3.0）',
            'プラットフォーム': 'Android（ソースからビルド）',
            'モデルの柔軟性': 'llama.cpp経由で端末上でGGUFファイルを実行、またはリモートAPIに接続。Character Card v2対応',
          },
          {
            'アプリ': 'RikkaHub',
            'ライセンス／費用': '無料、オープンソース',
            'プラットフォーム': 'Android',
            'モデルの柔軟性': 'マルチプロバイダークライアント。GemmaやQwenなどのモデル向けにLiteRTプロバイダー経由で端末上のローカル推論に対応',
          },
          {
            'アプリ': 'MLC Chat（MLC-LLM）',
            'ライセンス／費用': '無料、オープンソース（Apache 2.0）',
            'プラットフォーム': 'iPhone/iPad、Android',
            'モデルの柔軟性': '生のGGUFファイルではなく、MLCランタイム向けにコンパイルされたモデルを実行',
          },
        ],
        note: 'かつて人気だったオープンソースのiOS向けGGUFチャットアプリLLM Farmは、本レビュー時点でApp Storeから削除され、自身のGitHubリポジトリでも「一時的に利用不可」と表示されているため、上記の現行の推奨からは除外しています。同じく端末上のAIアシスタントアプリであるLaylaは、無料版の「Layla Lite」がGoogle Playから削除されたとの情報があるため、インストール可能と決めつける前に[layla-network.ai](https://www.layla-network.ai)で最新の提供状況を直接確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'PocketPal AIは無料ですか？',
            a: 'はい。PocketPal AIは無料でダウンロードでき、ダウンロードしたモデルとのチャットも無料です。アプリはMITライセンスのオープンソースです。オプションのアプリ内マーケットプレイスPalsHubがコミュニティ製のプレミアムアシスタントプリセットを販売していますが、基本のチャット機能にサブスクリプションや課金の壁はありません。',
          },
          {
            q: 'PocketPal AIを開発したのは誰ですか？',
            a: 'PocketPal AIはAsghar Ghorbani氏が開発しました。自分のスマートフォンで小型言語モデルを動かす個人プロジェクトとして始め、外部からの関心を集めた後にコードをオープンソース化しました。企業ではなく独立して維持されています。',
          },
          {
            q: 'PocketPal AIはオープンソースですか？',
            a: 'はい、完全なソースコードがMITライセンスの下で[GitHub](https://github.com/a-ghorbani/pocketpal-ai)に公開されています。MITは自由な利用・改変・再配布を認める寛容なライセンスです。',
          },
          {
            q: 'PocketPal AIが実行できるモデルは？',
            a: 'PocketPal AIはGemma 2、Qwen、Phi、Danube 3のワンタップダウンロードに対応しているほか、Hugging Faceで見つけたその他のGGUF形式モデル（ライセンス条件に同意すればゲート付きモデルを含む）も読み込めます。',
          },
          {
            q: 'PocketPal AIはiPhoneとAndroidで使えますか？',
            a: 'はい。PocketPal AIはiPhoneとiPad向けに[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)で、Android向けに[Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)で提供されています。Mac、Windows、Linux版はありません。',
          },
          {
            q: 'PocketPal AIにはどれくらいのRAMが必要ですか？',
            a: 'これはアプリの固定要件ではなく、選択するモデルによって異なります。スマートフォン上の量子化GGUFモデルの一般的な目安として、2〜4Bパラメータモデルは通常3〜4GBの空きRAM、7〜8Bパラメータモデルは通常8GB以上が必要です。RAMが多い端末ほど、より大きく高性能なモデルを実行できます。',
          },
          {
            q: 'PocketPal AIにはインターネット接続が必要ですか？',
            a: 'モデルをダウンロードした後のチャットにはインターネット接続は不要で、推論はllama.cpp経由で端末上で完全に行われます。インターネット接続は最初のモデルダウンロード時、およびオプションのインターネット検索機能を使う際（Brave、Tavily、Exaなどのプロバイダーからユーザー自身のAPIキーが必要）に必要です。',
          },
          {
            q: 'PocketPal AIはプライベートな会話に安全ですか？',
            a: '推論はローカルで行われ、ソースコードはMITライセンスの下で公開・監査可能なため、PocketPal AIが機能するためにチャット内容をサーバーへ送信する必要はありません。本レビューではアプリの独自のセキュリティ監査は実施していません。その水準の保証が必要なユーザーは、公開リポジトリやそのIssueトラッカーを自分で確認してください。',
          },
          {
            q: 'PocketPal AIはPrivate LLMやLociと比べてどうですか？',
            a: 'PocketPal AIは無料・オープンソースで、GGUFモデルの読み込みに制限がありません。一方Private LLMは有料・クローズドソースのApple専用アプリで、より大きな内蔵モデルカタログ（140以上のモデル）を持ち、Lociは5プラットフォームにまたがるクローズドソースアプリで、より小規模でキュレーションされたモデルライブラリを持ちます。費用と開放性を最優先するならPocketPal AI、より多くのプラットフォームでよりガイドされた洗練された体験を重視するならPrivate LLMかLociを選んでください。詳細は上記の比較表を参照してください。',
          },
          {
            q: 'PocketPal AIで70Bパラメータのような大規模モデルを実行できますか？',
            a: 'いいえ。現行のフラッグシップ端末を含め、スマートフォンのハードウェアにはその規模のモデルを実用的にローカル実行するのに十分なRAMがありません。PocketPal AIは小型・中型モデル（およそ8Bパラメータ程度まで）向けに作られています。より大きなモデルが必要な場合は、代わりにデスクトップワークステーションやクラウドAPIを利用してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'PocketPal AIは、本当に無料で、本当にオープンソースで、実行するモデルについて本当に柔軟であるという点で、モバイルのローカルAIアプリの中で確かな地位を築いています。この3つはそれぞれ単独でも珍しく、このカテゴリーで組み合わさっているのはさらに珍しいことです。この分野で最も洗練されたアプリというわけではありません。ユーザーは自分でモデルのダウンロードを管理する必要があり、インターフェースはある程度のガイドを柔軟性と引き換えにしており、プロジェクトはサポートチームを抱える企業ではなく1人の開発者が空き時間で維持しています。サブスクリプションやベンダーロックインなしに自分のスマートフォンでオープンウェイトモデルを動かしたく、自分の端末に合ったモデルを自分で選ぶことに抵抗がないなら、PocketPal AIを選んでください。多少の費用や開放性を犠牲にしてでも、より多くのプラットフォームでよりガイドされたセットアップと専任サポートを求めるなら、Private LLMやLociのような有料でキュレーションされたアプリを代わりに選んでください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHub上のPocketPal AI](https://github.com/a-ghorbani/pocketpal-ai) — 本レビューで参照したソースコード、ライセンス（MIT）、リリース履歴、スター数・フォーク数。',
          '[PocketPal AIの入門ドキュメント](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) — セットアップ手順、同梱モデル、GPU高速化に関する注記。',
          '[App Store上のPocketPal AI](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) — iOS/iPadOSでの提供状況。',
          '[Google Play上のPocketPal AI](https://play.google.com/store/apps/details?id=com.pocketpalai) — Androidでの提供状況。',
          '[「PocketPal AI: Tiny LLMs in the Pocket」Asghar Ghorbani著、Medium](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75) — プロジェクトの起源と開発者の動機。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[2026年版 Android向けベストローカルLLMアプリ](/power-local-llm/best-local-llm-apps-android-2026) — PocketPal AI、MLC Chat、Maid、Laylaを含むAndroidアプリのまとめ。',
          '[2026年版 iPhone向けベストローカルLLMアプリ](/power-local-llm/best-local-llm-apps-iphone-2026) — iOS版のまとめ。PocketPal AIとPrivate LLM、Enclave AIを比較。',
          '[Lociレビュー：iPhone、Android、iPad、Mac、Windows向けオフラインAI](/power-local-llm/loci-ai-review-offline-local-ai) — キュレーション済みモデルライブラリを備えた、5プラットフォーム対応の有料クローズドソースの代替アプリ。',
          '[2026年版 ベストモバイルLLMモデル：Phi-4 Mini対Gemma 4対SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — どのGGUFモデルが実際にスマートフォンに収まるかを解説するモデル面の関連記事。',
          '[Enclave AIレビュー](/power-local-llm/enclave-ai-review) — SiriとShortcutsによる自動化を備えたApple専用の代替アプリ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PocketPal AIレビュー（2026）：無料・オープンソースのオンデバイスAIチャット',
      description:
        'PocketPal AIレビュー：MITライセンスの無料オープンソースアプリで、iPhoneとAndroidでGGUFモデルをローカル実行。モデル、必要RAM、料金、向いている人を解説。',
      url: 'https://promptquorum.com/ja/power-local-llm/pocketpal-ai-review',
      inLanguage: 'ja',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '無料・オープンソースのローカルAIチャットアプリを検討しているプライバシー重視のiPhone・Androidユーザー' },
      about: [
        { '@type': 'Thing', name: 'PocketPal AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'オープンソースソフトウェア' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/pocketpal-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PocketPal AIレビュー（2026）', item: 'https://promptquorum.com/ja/power-local-llm/pocketpal-ai-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketpal-ai-review-hero-pt.webp',
    title: 'PocketPal AI: análise (2026) — chat local grátis e de código aberto',
    seoTitle: 'PocketPal AI 2026: análise do chat local open source',
    intro:
      'O PocketPal AI é um aplicativo gratuito e de código aberto sob licença MIT para iPhone, iPad e Android que executa modelos de linguagem GGUF diretamente no dispositivo, sem ida e volta a um servidor nem conta necessária para conversar. Foi criado por Asghar Ghorbani, um desenvolvedor que começou o projeto como algo pessoal antes de publicar o código no [GitHub](https://github.com/a-ghorbani/pocketpal-ai). Esta análise aborda o que o app faz hoje, quais modelos ele traz, os requisitos reais de hardware, seu preço real (o app base é gratuito; um marketplace comunitário opcional chamado PalsHub vende predefinições premium) e para quem ele serve — e para quem não serve.',
    metaDescription:
      'Análise do PocketPal AI: um app gratuito e de código aberto (MIT) que executa modelos GGUF localmente no iPhone e Android. Modelos, RAM necessária, preço e para quem é indicado.',
    twitterDescription:
      'PocketPal AI, análise 2026: o app gratuito e de código aberto que executa modelos GGUF no dispositivo, para iPhone e Android. O que ele oferece, quanto custa e para quem serve.',
    audience:
      'Usuários de iPhone e Android preocupados com privacidade que querem rodar modelos de IA abertos localmente sem pagar por um app comercial.',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Análise do PocketPal AI',
    targetKeywords: [
      'pocketpal ai análise',
      'pocketpal ai android',
      'pocketpal ai iphone',
      'pocketpal ai modelos',
      'pocketpal ai vs private llm',
      'app de ia local gratuito',
      'app de ia local open source',
      'rodar modelos gguf no celular',
    ],
    current_models_mentioned: ['Gemma 2', 'Qwen', 'Phi', 'Danube 3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android'],
    leadAnswerBlock:
      '**O PocketPal AI é um app gratuito e de código aberto (licença MIT) que executa modelos de linguagem GGUF inteiramente no seu iPhone, iPad ou dispositivo Android, sem dependência de nuvem para o chat.** Criado pelo desenvolvedor Asghar Ghorbani e hospedado no [GitHub](https://github.com/a-ghorbani/pocketpal-ai) (mais de 8.000 estrelas no momento desta análise), ele oferece download rápido de modelos como Gemma 2, Qwen, Phi e Danube 3, além de poder carregar qualquer outro arquivo GGUF obtido no Hugging Face. O app base não custa nada; um marketplace opcional dentro do app, o PalsHub, vende predefinições de assistente premium, mas conversar com um modelo baixado é gratuito.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o PocketPal AI para chat de IA privado e offline?',
        answer:
          'Sim, se você quer uma forma genuinamente gratuita e de código aberto de rodar modelos abertos no seu próprio celular e está confortável gerenciando os downloads de modelos por conta própria. O PocketPal AI não tem assinatura para sua função de chat, publica todo o código-fonte no GitHub e aceita qualquer modelo GGUF, não apenas uma lista fixa. Ele se encaixa melhor em usuários com curiosidade técnica do que em quem quer uma experiência polida e sem configuração; Loci ou Private LLM trocam flexibilidade por uma configuração mais guiada.',
        bullets: [
          'Gratuito e de código aberto sob licença MIT — sem assinatura para conversar com um modelo local.',
          'Disponível na [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (iPhone/iPad) e no [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) (Android).',
          'Traz download com um toque de Gemma 2, Qwen, Phi e Danube 3, além de suporte a qualquer arquivo GGUF personalizado do Hugging Face.',
          'Desenvolvido por uma única pessoa, Asghar Ghorbani, como projeto pessoal de código aberto — não uma empresa financiada.',
          'O marketplace opcional PalsHub vende predefinições de assistente premium via compra no app; o app de chat base em si não tem nenhuma barreira de pagamento.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o PocketPal AI?', anchor: 'what-is-pocketpal-ai' },
      { label: 'Quem criou o PocketPal AI?', anchor: 'history-and-developer' },
      { label: 'Como começar com o PocketPal AI', anchor: 'getting-started' },
      { label: 'Quais modelos o PocketPal AI suporta?', anchor: 'models-supported' },
      { label: 'O PocketPal AI está disponível no iPhone e Android?', anchor: 'platform-availability' },
      { label: 'Quanto custa o PocketPal AI?', anchor: 'pricing' },
      { label: 'Quais recursos o PocketPal AI tem?', anchor: 'key-features' },
      { label: 'Qual hardware você precisa?', anchor: 'hardware-requirements' },
      { label: 'Para quem o PocketPal AI é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o PocketPal AI não é indicado', anchor: 'who-should-not-use' },
      { label: 'PocketPal AI comparado a alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
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
            text: 'O PocketPal AI é um app gratuito e de código aberto (MIT) para iPhone, iPad e Android que baixa e executa modelos de linguagem GGUF diretamente no dispositivo, criado e mantido pelo desenvolvedor Asghar Ghorbani.',
          },
          {
            type: 'plain-terms',
            text: 'É um app que você instala para conversar com uma IA que roda no seu próprio celular em vez de em um servidor de empresa — o código é público no GitHub, o app em si não custa nada, e você escolhe qual modelo baixar em vez de ficar preso a um único fornecedor.',
          },
        ],
        items: [
          'Gratuito e de código aberto (licença MIT); código-fonte e rastreamento de issues públicos no [GitHub](https://github.com/a-ghorbani/pocketpal-ai).',
          'Criado por Asghar Ghorbani como projeto pessoal, depois publicado como código aberto após ganhar visibilidade.',
          'Executa modelos GGUF via llama.cpp inteiramente no dispositivo — sem conta, sem ida e volta a servidor para conversar.',
          'Traz download com um toque de Gemma 2, Qwen, Phi e Danube 3; qualquer outro modelo GGUF do Hugging Face pode ser carregado manualmente.',
          'Disponível na App Store (iPhone/iPad) e no Google Play (Android); não há versão para Mac, Windows ou Linux.',
          'O app base não tem assinatura; um marketplace opcional, o PalsHub, vende predefinições de assistente premium via compra no app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no [repositório do GitHub](https://github.com/a-ghorbani/pocketpal-ai) público, na documentação do próprio projeto e nas fichas da App Store e do Google Play, verificadas em setembro de 2026. A PromptQuorum não realizou testes práticos independentes do PocketPal AI para esta análise — os números de desempenho abaixo são orientações gerais de hardware para LLMs locais, não medições específicas deste app.',
          },
        ],
      },
      overview: {
        id: 'what-is-pocketpal-ai',
        title: 'O que é o PocketPal AI?',
        content: [
          '**O PocketPal AI é um app móvel que baixa modelos de linguagem abertos no formato GGUF e os executa localmente em um iPhone, iPad ou dispositivo Android, usando o [llama.cpp](https://github.com/ggml-org/llama.cpp) como motor de inferência.** O app em si é construído com React Native e publicado sob [licença MIT](https://github.com/a-ghorbani/pocketpal-ai/blob/main/LICENSE), o que significa que o código-fonte completo é público e livre para inspecionar, bifurcar (fork) ou modificar.',
          'Diferente de apps que prendem o usuário a uma lista fixa e curada de modelos, o PocketPal AI permite escolher entre um conjunto de modelos que o app pode buscar com um toque, ou importar qualquer arquivo GGUF encontrado no [Hugging Face](https://huggingface.co) — incluindo modelos com acesso restrito após aceitar os termos de licença. Essa flexibilidade é a característica definidora do app: ele se comporta mais como um mecanismo de execução GGUF de uso geral com interface de chat do que como um produto de fornecedor único.',
        ],
        note: 'GGUF é um formato de arquivo para empacotar modelos de linguagem abertos quantizados para que rodem de forma eficiente em hardware de consumo por meio de mecanismos como o llama.cpp, em vez de chamar uma API na nuvem a cada resposta.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Quem criou o PocketPal AI?',
        content: [
          '**O PocketPal AI foi criado por Asghar Ghorbani, que começou o projeto como algo pessoal para rodar modelos de linguagem pequenos no próprio celular, antes de publicá-lo como código aberto após despertar interesse externo.** Ghorbani escreveu sobre a origem e a motivação do projeto em uma [publicação no Medium, "PocketPal AI: Tiny LLMs in the Pocket"](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75), descrevendo o objetivo como levar o poder de modelos de linguagem pequenos direto para o bolso.',
          'O projeto é mantido no tempo livre do desenvolvedor, e não por uma empresa financiada ou equipe dedicada — a própria documentação de início do repositório deixa isso claro, o que vale saber antes de esperar tempos de resposta de suporte no nível empresarial. O repositório no GitHub ([a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)) acumulou mais de 8.000 estrelas e mais de 850 forks no momento desta análise, e continua recebendo lançamentos regulares com suporte a novos modelos, mudanças de interface e novos recursos, como busca na internet integrada, fixação de conversas e exportação em Markdown.',
        ],
        items: [
          'Desenvolvedor: Asghar Ghorbani (GitHub: [a-ghorbani](https://github.com/a-ghorbani)), trabalhando de forma independente, não como empresa.',
          'Começou como projeto pessoal para rodar modelos de linguagem pequenos no dispositivo; publicado como código aberto após despertar interesse público.',
          'Licença: MIT — permissiva, de uso, modificação e redistribuição livres.',
          'Mais de 8.000 estrelas no GitHub e mais de 850 forks no momento desta análise, com rastreamento de issues ativo e histórico de pull requests.',
          'Ritmo de desenvolvimento: lançamentos pontuais frequentes com atualizações do motor de execução, novos recursos de interface e suporte a idiomas ampliado, mantidos de forma voluntária.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar com o PocketPal AI',
        content: [
          '**Ter um chat local funcionando no PocketPal AI leva quatro etapas após a instalação, de acordo com a [documentação de início](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) do próprio projeto.** Não há criação de conta nem login — todo o processo acontece no dispositivo.',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Baixe o PocketPal AI na [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) no iPhone/iPad ou no [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) no Android. Não é preciso conta nem cadastro por e-mail para abrir o app.',
          },
          {
            title: 'Abrir a página de Modelos',
            whyItMatters: 'Navegue até a aba Modelos no menu do app para ver a lista de modelos de download rápido (como Gemma 2, Qwen, Phi e Danube 3) e a opção de importar um arquivo GGUF personalizado.',
          },
          {
            title: 'Baixar um modelo',
            whyItMatters: 'Escolha um modelo adequado à RAM do seu dispositivo (veja a seção de hardware abaixo) e baixe-o. Modelos maiores e mais capazes levam mais tempo para baixar e usam mais armazenamento no dispositivo.',
          },
          {
            title: 'Carregar o modelo e começar a conversar',
            whyItMatters: 'Toque em "Load" para trazer o modelo baixado para a memória, depois mude para a página de Chat. Depois de carregado, toda a inferência acontece no dispositivo — o recurso "Auto Offload/Load" do PocketPal AI pode descarregar automaticamente o modelo quando o app vai para segundo plano, para economizar memória, e recarregá-lo quando você voltar.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quais modelos o PocketPal AI suporta?',
        itemHeadings: true,
        columns: ['Família de modelo', 'Método de acesso', 'Uso típico'],
        rows: [
          {
            'Família de modelo': 'Gemma 2',
            'Método de acesso': 'Download rápido com um toque no app',
            'Uso típico': 'Chat geral; família de modelos abertos do Google',
          },
          {
            'Família de modelo': 'Qwen',
            'Método de acesso': 'Download rápido com um toque no app',
            'Uso típico': 'Chat geral e raciocínio; família de modelos abertos da Alibaba',
          },
          {
            'Família de modelo': 'Phi',
            'Método de acesso': 'Download rápido com um toque no app',
            'Uso típico': 'Raciocínio compacto; família de modelos pequenos da Microsoft',
          },
          {
            'Família de modelo': 'Danube 3',
            'Método de acesso': 'Download rápido com um toque no app',
            'Uso típico': 'Chat leve; família de modelos pequenos da H2O.ai',
          },
          {
            'Família de modelo': 'Qualquer outro modelo GGUF',
            'Método de acesso': 'Importação manual pela busca do Hugging Face Hub dentro do app, incluindo modelos com acesso restrito após aceitar os termos de licença',
            'Uso típico': 'Modelos personalizados ou de nicho fora da lista de download rápido',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'O PocketPal AI está disponível no iPhone e Android?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidade', 'Observações'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidade': 'Disponível na [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)',
            'Observações': 'Usa por padrão a API de GPU Metal da Apple para aceleração; pode ser desativada no app caso cause instabilidade em algum dispositivo.',
          },
          {
            'Plataforma': 'Android',
            'Disponibilidade': 'Disponível no [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)',
            'Observações': 'Versões recentes restauraram um backend de aceleração NPU Qualcomm Hexagon para chipsets compatíveis, além da inferência padrão via CPU.',
          },
          {
            'Plataforma': 'Mac / Windows / Linux',
            'Disponibilidade': 'Nenhuma versão para desktop encontrada no momento desta análise',
            'Observações': 'O PocketPal AI é um app apenas para dispositivos móveis. Usuários de desktop que procuram um cliente de chat GGUF local devem considerar Ollama, LM Studio ou Jan AI.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Quanto custa o PocketPal AI?',
        content: [
          '**O PocketPal AI é gratuito para baixar e gratuito para conversar com um modelo baixado localmente — não há assinatura, e o código-fonte é público sob licença MIT.** O único componente pago encontrado no app é o PalsHub, um marketplace dentro do app onde membros da comunidade podem publicar e vender "Pals" premium (predefinições de assistente personalizáveis); as compras no app do PalsHub estão disponíveis em iOS e Android dependendo da região.',
          'Como o app e sua função de execução de modelos são de código aberto e gratuitos, o único custo contínuo para o usuário é o espaço de armazenamento e a banda necessários para baixar os arquivos de modelo GGUF — um modelo quantizado de 3 a 4 bilhões de parâmetros costuma pesar alguns gigabytes, e modelos maiores proporcionalmente mais.',
        ],
        items: [
          '**App base:** Gratuito, sem assinatura, software de código aberto sob licença MIT.',
          '**Conversar com modelos baixados:** Gratuito — sem cobrança por mensagem ou token, já que a inferência roda no seu próprio dispositivo.',
          '**Marketplace PalsHub:** Compras opcionais no app para predefinições de assistente premium criadas pela comunidade; a função de chat base não exige isso.',
          '**Custo de armazenamento:** Não é monetário, mas é real — cada modelo GGUF baixado ocupa armazenamento do dispositivo, tipicamente vários gigabytes por modelo.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Quais recursos o PocketPal AI tem?',
        content: [
          '**Além do chat local básico, o PocketPal AI foi ganhando ao longo do seu histórico de versões um conjunto de recursos comuns em apps de IA local mais maduros.** Entre eles:',
        ],
        items: [
          '**Pals e PalsHub.** "Pals" são predefinições de assistente personalizáveis (prompt de sistema, modelo e comportamento agrupados); o PalsHub é um marketplace onde os usuários podem compartilhar ou vender seus próprios Pals.',
          '**Talents (chamadas de ferramentas).** O app suporta um fluxo do tipo agente, em que um modelo pode invocar ferramentas definidas no meio da conversa em vez de apenas gerar texto simples.',
          '**Busca na internet no chat.** Versões recentes permitem que um chat pesquise na web usando uma chave de API própria do usuário, de provedores como Brave, Tavily ou Exa — isso é opcional e exige a chave do próprio usuário, não um serviço de busca embutido.',
          '**Saída de texto para fala.** O app pode ler as respostas em voz alta, com suporte a idiomas em expansão em versões recentes.',
          '**Fixação de conversas e exportação em Markdown.** As conversas podem ser fixadas para acesso rápido e exportadas como arquivos Markdown.',
          '**Decodificação especulativa (experimental).** Um modelo "rascunho" menor pode ser combinado com um modelo maior para acelerar a geração — sinalizado pelo próprio projeto como recurso experimental, não uma garantia estável.',
          '**Ferramentas de benchmark.** O app inclui uma forma de fazer benchmark do desempenho do modelo no dispositivo atual, útil para comparar como diferentes níveis de quantização se saem no seu celular específico.',
        ],
        note: 'A disponibilidade de recursos pode variar conforme a versão do app e a plataforma (iOS vs. Android), já que o projeto lança versões incrementais com frequência. Confira o registro de mudanças no app ou a [página de lançamentos no GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases) para saber o que está ativo na sua versão instalada.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Qual hardware você precisa para rodar o PocketPal AI?',
        content: [
          '**O modelo escolhido, não o app em si, define o piso real de hardware — como regra geral para modelos GGUF em celulares, um modelo quantizado de 2 a 4 bilhões de parâmetros precisa de aproximadamente 3-4 GB de RAM livre, enquanto um modelo de 7 a 8 bilhões precisa de 6-8 GB ou mais.** Isso é uma orientação geral de dimensionamento para LLMs locais, não um benchmark específico do PocketPal; a PromptQuorum não mediu de forma independente o uso exato de memória do PocketPal AI por modelo.',
          'No iPhone e iPad, o app usa por padrão a API de GPU Metal da Apple, o que geralmente melhora a velocidade de inferência em relação à execução apenas por CPU em dispositivos com Apple Silicon. No Android, versões recentes adicionaram suporte a um backend de aceleração NPU Qualcomm Hexagon em chipsets compatíveis; dispositivos sem NPU compatível recorrem à inferência por CPU, bem mais lenta para modelos grandes.',
        ],
        items: [
          'Modelos pequenos (2-4B parâmetros, quantizados): utilizáveis na maioria dos celulares dos últimos anos com 4 GB ou mais de RAM livre.',
          'Modelos médios (7-8B parâmetros, quantizados): RAM de dispositivo recomendada de 8 GB ou mais para uma responsividade aceitável.',
          'Armazenamento: reserve vários gigabytes de espaço livre por arquivo de modelo baixado.',
          'Inferência mais rápida: um iPhone/iPad com Apple Silicon (aceleração Metal) ou um dispositivo Android recente com NPU Qualcomm Hexagon compatível supera hardware mais antigo ou de entrada rodando apenas com CPU.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o PocketPal AI é indicado',
        items: [
          '**Usuários preocupados com privacidade que querem custo zero de assinatura.** Se o objetivo é rodar um modelo aberto sem taxa recorrente e sem conta, o app base gratuito e sob licença MIT do PocketPal AI atende diretamente.',
          '**Usuários que querem experimentar modelos além de uma lista fixa.** Como o app pode carregar qualquer arquivo GGUF do Hugging Face — não apenas sua lista de download rápido — ele serve bem quem já tem um modelo específico em mente.',
          '**Desenvolvedores e usuários com curiosidade técnica, confortáveis com projetos de código aberto.** O repositório público no GitHub, o rastreamento de issues e os lançamentos frequentes são adequados para quem está disposto a ler notas de versão ou abrir uma issue em vez de esperar suporte dedicado ao cliente.',
          '**Usuários que querem inspecionar ou modificar o código eles mesmos.** A licença MIT permite fork e modificação, o que importa para quem quer auditar exatamente o que o app faz antes de confiar a ele conversas privadas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o PocketPal AI não é indicado',
        items: [
          '**Usuários que querem uma experiência totalmente guiada, sem configuração.** Escolher o tamanho de modelo certo para o seu dispositivo e gerenciar os downloads por conta própria faz parte do fluxo de trabalho; quem prefere deixar essa decisão para o app pode preferir um app mais curado, como o Loci.',
          '**Usuários que precisam de suporte a Mac, Windows ou Linux.** O PocketPal AI é apenas para dispositivos móveis (iPhone/iPad e Android); usuários de desktop devem considerar Ollama, LM Studio ou Jan AI.',
          '**Usuários que querem os modelos mais exigentes (70B+ parâmetros).** O hardware de celulares, mesmo os aparelhos topo de linha atuais, não permite na prática rodar modelos dessa escala localmente — essas cargas de trabalho precisam de um desktop, uma workstation ou uma API na nuvem, independentemente do app móvel usado.',
          '**Usuários que esperam suporte comercial dedicado.** O PocketPal AI é mantido por um único desenvolvedor no tempo livre, segundo a documentação do próprio projeto; usuários que precisam de tempos de resposta garantidos ou contratos de suporte empresarial devem procurar uma alternativa com respaldo comercial.',
          '**Usuários que querem sincronização em nuvem integrada entre dispositivos.** Como a inferência e o histórico de conversas permanecem locais em cada dispositivo por design, o PocketPal AI não oferece uma sincronização integrada baseada em conta entre um iPhone e um dispositivo Android, como faria um app de chat com respaldo em nuvem.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'PocketPal AI comparado a alternativas',
        itemHeadings: true,
        columns: ['App', 'Licença / custo', 'Plataformas', 'Flexibilidade de modelos'],
        rows: [
          {
            'App': 'PocketPal AI',
            'Licença / custo': 'Gratuito, código aberto (MIT)',
            'Plataformas': 'iPhone/iPad, Android',
            'Flexibilidade de modelos': 'Lista de download rápido (Gemma 2, Qwen, Phi, Danube 3) mais qualquer arquivo GGUF do Hugging Face',
          },
          {
            'App': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Licença / custo': 'Nível gratuito mais níveis pagos; código fechado',
            'Plataformas': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
            'Flexibilidade de modelos': 'Biblioteca curada (~10 modelos); não permite importar arquivos GGUF próprios',
          },
          {
            'App': 'Private LLM',
            'Licença / custo': 'Pago, compra única; código fechado',
            'Plataformas': 'iPhone/iPad/Mac (apenas Apple)',
            'Flexibilidade de modelos': '140+ modelos, com formatos de quantização OmniQuant e GPTQ',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Licença / custo': 'Gratuito com nível pago; código fechado',
            'Plataformas': 'iPhone/iPad/Mac (apenas Apple)',
            'Flexibilidade de modelos': 'Lista de modelos curada no dispositivo; integração com Siri e Atalhos',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Licença / custo': 'Gratuito; código fechado',
            'Plataformas': 'iPhone/iPad',
            'Flexibilidade de modelos': 'Lista de modelos curada, segundo sua ficha na App Store',
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
            'Flexibilidade de modelos': 'Cliente multiprovedor; inferência local no dispositivo via um provedor LiteRT para modelos como Gemma e Qwen',
          },
          {
            'App': 'MLC Chat (MLC-LLM)',
            'Licença / custo': 'Gratuito, código aberto (Apache 2.0)',
            'Plataformas': 'iPhone/iPad, Android',
            'Flexibilidade de modelos': 'Executa modelos compilados para o runtime MLC em vez de arquivos GGUF brutos',
          },
        ],
        note: 'O LLM Farm, um app de chat GGUF de código aberto para iOS antes popular, foi removido da App Store e marcado como "temporariamente indisponível" no próprio repositório do GitHub no momento desta análise — por isso está fora das recomendações ativas acima. O Layla, outro app de assistente no dispositivo, teria perdido o nível gratuito "Layla Lite" no Google Play, segundo relatos; confira a disponibilidade atual diretamente em [layla-network.ai](https://www.layla-network.ai) antes de presumir que ele pode ser instalado.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O PocketPal AI é gratuito?',
            a: 'Sim. O PocketPal AI é gratuito para baixar e gratuito para conversar com um modelo baixado, e o app é de código aberto sob licença MIT. Um marketplace opcional dentro do app, o PalsHub, vende predefinições de assistente premium criadas pela comunidade, mas a função de chat principal não tem assinatura nem barreira de pagamento.',
          },
          {
            q: 'Quem desenvolveu o PocketPal AI?',
            a: 'O PocketPal AI foi criado por Asghar Ghorbani, que começou o projeto pessoalmente para rodar modelos de linguagem pequenos no próprio celular, antes de publicar o código como código aberto após despertar interesse externo. Ele é mantido de forma independente, não por uma empresa.',
          },
          {
            q: 'O PocketPal AI é de código aberto?',
            a: 'Sim, o código-fonte completo é publicado no [GitHub](https://github.com/a-ghorbani/pocketpal-ai) sob licença MIT, uma licença permissiva que permite uso, modificação e redistribuição livres.',
          },
          {
            q: 'Quais modelos o PocketPal AI pode executar?',
            a: 'O PocketPal AI traz download com um toque de Gemma 2, Qwen, Phi e Danube 3, e ainda pode carregar qualquer outro modelo em formato GGUF encontrado no Hugging Face, incluindo modelos com acesso restrito após aceitar seus termos de licença.',
          },
          {
            q: 'O PocketPal AI funciona no iPhone e Android?',
            a: 'Sim. O PocketPal AI está disponível na [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) para iPhone e iPad, e no [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) para Android. Não existe versão para Mac, Windows ou Linux.',
          },
          {
            q: 'Quanta RAM o PocketPal AI precisa?',
            a: 'Isso depende do modelo escolhido, não de um requisito fixo do app. Como orientação geral para modelos GGUF quantizados em celulares, modelos de 2-4B parâmetros geralmente precisam de 3-4 GB de RAM livre, e modelos de 7-8B parâmetros geralmente precisam de 8 GB ou mais. Dispositivos com mais RAM podem rodar modelos maiores e mais capazes.',
          },
          {
            q: 'O PocketPal AI precisa de conexão com a internet?',
            a: 'Não é necessária conexão com a internet para conversar depois que um modelo é baixado — a inferência roda inteiramente no dispositivo via llama.cpp. É necessária conexão com a internet para baixar modelos inicialmente, e opcionalmente para usar o recurso de busca na internet do app, que exige uma chave de API própria do usuário de um provedor como Brave, Tavily ou Exa.',
          },
          {
            q: 'O PocketPal AI é seguro para conversas privadas?',
            a: 'Como a inferência acontece localmente e o código-fonte é público e auditável sob licença MIT, o PocketPal AI não precisa enviar o conteúdo do chat a um servidor para funcionar. Esta análise não inclui uma auditoria de segurança independente do app; usuários que precisam desse nível de garantia devem examinar o repositório público ou seu rastreamento de issues por conta própria.',
          },
          {
            q: 'Como o PocketPal AI se compara ao Private LLM ou Loci?',
            a: 'O PocketPal AI é gratuito e de código aberto, com carregamento irrestrito de modelos GGUF, enquanto o Private LLM é um app pago e de código fechado exclusivo da Apple com um catálogo de modelos embutido maior (140+ modelos), e o Loci é um app de código fechado que abrange cinco plataformas com uma biblioteca de modelos menor e mais curada. Escolha o PocketPal AI se custo e abertura importam mais; escolha Private LLM ou Loci se uma experiência mais guiada e polida em mais plataformas importar mais para você do que ser gratuito ou de código aberto. Veja a tabela comparativa acima para mais detalhes.',
          },
          {
            q: 'Posso rodar modelos grandes, como modelos de 70B parâmetros, no PocketPal AI?',
            a: 'Não. O hardware de celulares, incluindo os aparelhos topo de linha atuais, não tem RAM suficiente para rodar na prática modelos dessa escala localmente. O PocketPal AI é feito para modelos pequenos e médios (até aproximadamente 8B parâmetros); quem precisa de modelos maiores deve usar uma workstation de desktop ou uma API na nuvem.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O PocketPal AI conquista seu lugar entre os apps de IA local móveis por ser genuinamente gratuito, genuinamente de código aberto e genuinamente flexível quanto ao modelo que executa — três qualidades individualmente raras, e ainda mais raras combinadas, nessa categoria. Não é o app mais polido do setor: os usuários gerenciam seus próprios downloads de modelos, a interface troca um pouco de direcionamento por flexibilidade, e o projeto é mantido por um único desenvolvedor no tempo livre, e não por uma empresa com equipe de suporte. Escolha o PocketPal AI se quiser rodar um modelo aberto no seu próprio celular sem assinatura e sem dependência de um fornecedor, e estiver confortável em escolher você mesmo um modelo adequado ao seu dispositivo. Escolha, em vez disso, um app pago e curado como Private LLM ou Loci se preferir trocar um pouco de custo e abertura por uma configuração mais guiada e suporte dedicado em mais plataformas.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[PocketPal AI no GitHub](https://github.com/a-ghorbani/pocketpal-ai) — código-fonte, licença (MIT), histórico de versões e número de estrelas/forks citados nesta análise.',
          '[Documentação de início do PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) — etapas de configuração, modelos incluídos e notas sobre aceleração por GPU.',
          '[PocketPal AI na App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) — disponibilidade para iOS/iPadOS.',
          '[PocketPal AI no Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) — disponibilidade para Android.',
          '["PocketPal AI: Tiny LLMs in the Pocket" por Asghar Ghorbani, Medium](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75) — origem do projeto e motivação do desenvolvedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Os melhores apps de LLM local para Android em 2026](/power-local-llm/best-local-llm-apps-android-2026) — o panorama de apps para Android, incluindo PocketPal AI, MLC Chat, Maid e Layla.',
          '[Os melhores apps de LLM local para iPhone em 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — o equivalente para iOS, comparando PocketPal AI com Private LLM e Enclave AI.',
          '[Análise do Loci: IA offline para iPhone, Android, iPad, Mac e Windows](/power-local-llm/loci-ai-review-offline-local-ai) — uma alternativa paga e de código fechado em cinco plataformas, com biblioteca de modelos curada.',
          '[Os melhores modelos LLM móveis em 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — o artigo complementar sobre modelos, para escolher qual modelo GGUF realmente cabe no seu celular.',
          '[Análise do Enclave AI](/power-local-llm/enclave-ai-review) — uma alternativa exclusiva da Apple com automação via Siri e Atalhos.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PocketPal AI: análise (2026) — chat local grátis e de código aberto',
      description:
        'Análise do PocketPal AI: um app gratuito e de código aberto (MIT) que executa modelos GGUF localmente no iPhone e Android. Modelos, RAM necessária, preço e para quem é indicado.',
      url: 'https://promptquorum.com/pt/power-local-llm/pocketpal-ai-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuários de iPhone e Android preocupados com privacidade avaliando apps de chat de IA local gratuitos e de código aberto' },
      about: [
        { '@type': 'Thing', name: 'PocketPal AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'Software de código aberto' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/pocketpal-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PocketPal AI: análise (2026)', item: 'https://promptquorum.com/pt/power-local-llm/pocketpal-ai-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketpal-ai-review-hero-ar.webp',
    title: 'مراجعة PocketPal AI (2026): محادثة مجانية ومفتوحة المصدر على الجهاز',
    seoTitle: 'مراجعة PocketPal AI 2026: محادثة محلية مفتوحة المصدر',
    intro:
      'PocketPal AI تطبيق مجاني ومفتوح المصدر بترخيص MIT لأجهزة iPhone وiPad وAndroid، يشغّل نماذج لغوية بصيغة GGUF مباشرة على الجهاز، دون أي اتصال بخادم أو حساب مطلوب للمحادثة. طوّره Asghar Ghorbani، وهو مطوّر بدأ المشروع كمشروع شخصي قبل أن ينشر الكود على [GitHub](https://github.com/a-ghorbani/pocketpal-ai). تتناول هذه المراجعة ما يقدّمه التطبيق اليوم، والنماذج المرفقة معه، ومتطلبات الأجهزة الفعلية، وسعره الحقيقي (التطبيق الأساسي مجاني؛ ويبيع سوق مجتمعي اختياري باسم PalsHub إعدادات مسبقة مدفوعة)، ولمن يناسب — ولمن لا يناسب.',
    metaDescription:
      'مراجعة PocketPal AI: تطبيق مجاني ومفتوح المصدر (MIT) يشغّل نماذج GGUF محليًا على iPhone وAndroid. النماذج، ذاكرة الوصول العشوائي المطلوبة، السعر، والفئة المناسبة.',
    twitterDescription:
      'مراجعة PocketPal AI لعام 2026: التطبيق المجاني ومفتوح المصدر الذي يشغّل نماذج GGUF على الجهاز، لأجهزة iPhone وAndroid. ما يقدّمه، تكلفته، ولمن يناسب.',
    audience:
      'مستخدمو iPhone وAndroid المهتمون بالخصوصية الذين يريدون تشغيل نماذج ذكاء اصطناعي مفتوحة محليًا دون الدفع مقابل تطبيق تجاري.',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة PocketPal AI',
    targetKeywords: [
      'مراجعة pocketpal ai',
      'pocketpal ai android',
      'pocketpal ai iphone',
      'نماذج pocketpal ai',
      'pocketpal ai مقابل private llm',
      'تطبيق ذكاء اصطناعي محلي مجاني',
      'تطبيق ذكاء اصطناعي محلي مفتوح المصدر',
      'تشغيل نماذج gguf على الهاتف',
    ],
    current_models_mentioned: ['Gemma 2', 'Qwen', 'Phi', 'Danube 3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android'],
    leadAnswerBlock:
      '**PocketPal AI تطبيق مجاني ومفتوح المصدر (ترخيص MIT) يشغّل نماذج لغوية بصيغة GGUF بالكامل على جهاز iPhone أو iPad أو Android الخاص بك، دون أي اعتماد على السحابة للمحادثة.** طوّره Asghar Ghorbani واستضافه على [GitHub](https://github.com/a-ghorbani/pocketpal-ai) (بأكثر من 8,000 نجمة وقت إعداد هذه المراجعة)، ويوفّر تنزيلًا سريعًا لنماذج مثل Gemma 2 وQwen وPhi وDanube 3، ويمكنه تحميل أي ملف GGUF آخر تحصل عليه من Hugging Face. التطبيق الأساسي لا يكلّف شيئًا؛ ويبيع سوق اختياري داخل التطبيق باسم PalsHub إعدادات مساعد مدفوعة، لكن المحادثة مع نموذج تم تنزيله مجانية.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق تثبيت PocketPal AI للمحادثة الخاصة وغير المتصلة بالإنترنت مع الذكاء الاصطناعي؟',
        answer:
          'نعم، إذا كنت تريد طريقة مجانية ومفتوحة المصدر فعليًا لتشغيل نماذج مفتوحة على هاتفك الخاص، وتشعر بالارتياح لإدارة تنزيلات النماذج بنفسك. لا يتطلب PocketPal AI أي اشتراك لوظيفة المحادثة، وينشر الكود المصدري بالكامل على GitHub، ويدعم أي نموذج GGUF بدلًا من قائمة ثابتة. يناسب المستخدمين ذوي الفضول التقني أكثر من الباحثين عن تجربة جاهزة دون إعداد؛ بينما تستبدل تطبيقات مثل Loci أو Private LLM المرونة بإعداد أكثر توجيهًا.',
        bullets: [
          'مجاني ومفتوح المصدر بترخيص MIT — دون اشتراك للمحادثة مع نموذج محلي.',
          'متاح على [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (iPhone/iPad) وعلى [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) (Android).',
          'يوفّر تنزيلًا بلمسة واحدة لنماذج Gemma 2 وQwen وPhi وDanube 3، إضافة إلى دعم أي ملف GGUF مخصص من Hugging Face.',
          'طوّره شخص واحد، Asghar Ghorbani، كمشروع شخصي مفتوح المصدر — وليس شركة ممولة.',
          'يبيع سوق PalsHub الاختياري إعدادات مساعد مدفوعة عبر الشراء داخل التطبيق؛ أما تطبيق المحادثة الأساسي نفسه فلا يحتوي على أي حاجز دفع.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو PocketPal AI؟', anchor: 'what-is-pocketpal-ai' },
      { label: 'من طوّر PocketPal AI؟', anchor: 'history-and-developer' },
      { label: 'كيفية البدء مع PocketPal AI', anchor: 'getting-started' },
      { label: 'ما النماذج التي يدعمها PocketPal AI؟', anchor: 'models-supported' },
      { label: 'هل PocketPal AI متاح على iPhone وAndroid؟', anchor: 'platform-availability' },
      { label: 'كم تكلفة PocketPal AI؟', anchor: 'pricing' },
      { label: 'ما الميزات التي يقدّمها PocketPal AI؟', anchor: 'key-features' },
      { label: 'ما الأجهزة التي تحتاجها؟', anchor: 'hardware-requirements' },
      { label: 'لمن يناسب PocketPal AI', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب PocketPal AI', anchor: 'who-should-not-use' },
      { label: 'PocketPal AI مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
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
            text: 'PocketPal AI تطبيق مجاني ومفتوح المصدر (MIT) لأجهزة iPhone وiPad وAndroid يقوم بتنزيل وتشغيل نماذج لغوية بصيغة GGUF مباشرة على الجهاز، طوّره ويصونه المطوّر Asghar Ghorbani.',
          },
          {
            type: 'plain-terms',
            text: 'هو تطبيق تثبّته للمحادثة مع ذكاء اصطناعي يعمل على هاتفك الخاص بدلًا من خادم شركة — الكود متاح للعامة على GitHub، والتطبيق نفسه لا يكلّف شيئًا، وأنت من يختار النموذج الذي تنزّله بدلًا من الارتباط بمزوّد واحد.',
          },
        ],
        items: [
          'مجاني ومفتوح المصدر (ترخيص MIT)؛ الكود المصدري ومتتبّع المشكلات عامان على [GitHub](https://github.com/a-ghorbani/pocketpal-ai).',
          'بدأه Asghar Ghorbani كمشروع شخصي، ثم نُشر مفتوح المصدر بعد أن اكتسب اهتمامًا واسعًا.',
          'يشغّل نماذج GGUF عبر llama.cpp بالكامل على الجهاز — دون حساب ودون أي اتصال بخادم للمحادثة.',
          'يوفّر تنزيلًا بلمسة واحدة لنماذج Gemma 2 وQwen وPhi وDanube 3؛ ويمكن تحميل أي نموذج GGUF آخر من Hugging Face يدويًا.',
          'متاح على App Store (iPhone/iPad) وGoogle Play (Android)؛ لا توجد نسخة لـ Mac أو Windows أو Linux.',
          'التطبيق الأساسي بلا اشتراك؛ ويبيع سوق PalsHub الاختياري إعدادات مساعد مدفوعة عبر الشراء داخل التطبيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [مستودع GitHub](https://github.com/a-ghorbani/pocketpal-ai) العام، ووثائق المشروع الداخلية، وصفحتَي App Store وGoogle Play، وقد تم التحقق منها في سبتمبر 2026. لم تُجرِ PromptQuorum اختبارات عملية مستقلة على PocketPal AI لهذه المراجعة — أرقام الأداء أدناه إرشادات عامة للأجهزة الخاصة بنماذج اللغة المحلية، وليست قياسات خاصة بهذا التطبيق.',
          },
        ],
      },
      overview: {
        id: 'what-is-pocketpal-ai',
        title: 'ما هو PocketPal AI؟',
        content: [
          '**PocketPal AI تطبيق للهاتف المحمول يقوم بتنزيل نماذج لغوية مفتوحة بصيغة GGUF وتشغيلها محليًا على جهاز iPhone أو iPad أو Android، باستخدام [llama.cpp](https://github.com/ggml-org/llama.cpp) كمحرك استدلال.** التطبيق نفسه مبني بـ React Native ومنشور بموجب [ترخيص MIT](https://github.com/a-ghorbani/pocketpal-ai/blob/main/LICENSE)، ما يعني أن الكود المصدري الكامل متاح للعامة وحرّ للفحص أو النسخ الفرعي (fork) أو التعديل.',
          'خلافًا للتطبيقات التي تحصر المستخدم في قائمة نماذج ثابتة ومنتقاة، يتيح PocketPal AI الاختيار من مجموعة نماذج يمكن للتطبيق جلبها بلمسة واحدة، أو استيراد أي ملف GGUF تجده على [Hugging Face](https://huggingface.co) — بما في ذلك النماذج المقيّدة الوصول بعد قبول شروط ترخيصها. هذه المرونة هي السمة المميزة للتطبيق: يتصرف أكثر كمحرك تشغيل GGUF عام مزوّد بواجهة محادثة أكثر من كونه منتجًا لمزوّد واحد.',
        ],
        note: 'GGUF هو صيغة ملف لتغليف نماذج لغوية مفتوحة مكمّمة (quantized) بحيث تعمل بكفاءة على أجهزة المستهلكين عبر محركات مثل llama.cpp، بدلًا من استدعاء واجهة برمجة تطبيقات سحابية عند كل رد.',
      },
      history: {
        id: 'history-and-developer',
        title: 'من طوّر PocketPal AI؟',
        content: [
          '**أنشأ PocketPal AI المطوّر Asghar Ghorbani، الذي بدأه كمشروع جانبي شخصي لتشغيل نماذج لغوية صغيرة على هاتفه الخاص، قبل أن ينشره مفتوح المصدر بعد أن جذب اهتمامًا خارجيًا.** كتب Ghorbani عن أصل المشروع ودافعه في [منشور على Medium بعنوان "PocketPal AI: Tiny LLMs in the Pocket"](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75)، واصفًا الهدف بأنه وضع قوة النماذج اللغوية الصغيرة مباشرة في الجيب.',
          'يُصان المشروع في وقت فراغ المطوّر، وليس من قِبل شركة ممولة أو فريق مخصص — وتوثيق الإعداد الخاص بالمستودع نفسه يوضح ذلك صراحة، وهو أمر يستحق معرفته قبل توقّع أوقات استجابة دعم على مستوى الشركات. جمع مستودع GitHub ([a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)) أكثر من 8,000 نجمة وأكثر من 850 نسخة فرعية (fork) وقت إعداد هذه المراجعة، ولا يزال يتلقى إصدارات منتظمة تشمل دعم نماذج جديدة، وتغييرات في الواجهة، وإضافات وظيفية مثل البحث عبر الإنترنت، وتثبيت المحادثات، والتصدير إلى Markdown.',
        ],
        items: [
          'المطوّر: Asghar Ghorbani (GitHub: [a-ghorbani](https://github.com/a-ghorbani))، يعمل بشكل مستقل وليس كشركة.',
          'بدأ كمشروع شخصي لتشغيل نماذج لغوية صغيرة على الجهاز؛ نُشر مفتوح المصدر بعد اكتسابه اهتمامًا عامًا.',
          'الترخيص: MIT — تساهلي، يتيح الاستخدام والتعديل وإعادة التوزيع بحرية.',
          'أكثر من 8,000 نجمة على GitHub وأكثر من 850 نسخة فرعية وقت إعداد هذه المراجعة، مع متتبّع مشكلات نشط وسجل طلبات دمج (pull requests).',
          'وتيرة التطوير: إصدارات نقطية متكررة تضيف تحديثات لمحرك التشغيل، وميزات واجهة جديدة، ودعم لغات موسّعًا، تُصان على أساس تطوعي.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيفية البدء مع PocketPal AI',
        content: [
          '**يتطلب الحصول على محادثة محلية تعمل في PocketPal AI أربع خطوات بعد تثبيت التطبيق، وفق [وثائق البدء](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) الخاصة بالمشروع.** لا يوجد إنشاء حساب أو تسجيل دخول — تحدث العملية بأكملها على الجهاز.',
        ],
        numberedItems: [
          {
            title: 'تثبيت التطبيق',
            whyItMatters: 'نزّل PocketPal AI من [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) على iPhone/iPad أو من [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) على Android. لا يلزم حساب أو تسجيل بالبريد الإلكتروني لفتح التطبيق.',
          },
          {
            title: 'فتح صفحة النماذج',
            whyItMatters: 'انتقل إلى تبويب النماذج من قائمة التطبيق لرؤية قائمة نماذج التنزيل السريع (مثل Gemma 2 وQwen وPhi وDanube 3) وخيار استيراد ملف GGUF مخصص.',
          },
          {
            title: 'تنزيل نموذج',
            whyItMatters: 'اختر نموذجًا يناسب ذاكرة الوصول العشوائي (RAM) في جهازك (انظر قسم الأجهزة أدناه) ونزّله. تستغرق النماذج الأكبر والأكثر قدرة وقتًا أطول للتنزيل وتستخدم مساحة تخزين أكبر على الجهاز.',
          },
          {
            title: 'تحميل النموذج وبدء المحادثة',
            whyItMatters: 'اضغط على "Load" لإحضار النموذج الذي تم تنزيله إلى الذاكرة، ثم انتقل إلى صفحة المحادثة. بعد التحميل، يتم كل الاستدلال على الجهاز — يمكن لميزة "Auto Offload/Load" في PocketPal AI تفريغ النموذج تلقائيًا من الذاكرة عند انتقال التطبيق إلى الخلفية لتوفير الذاكرة، ثم إعادة تحميله عند عودتك.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'ما النماذج التي يدعمها PocketPal AI؟',
        itemHeadings: true,
        columns: ['عائلة النموذج', 'طريقة الوصول', 'الاستخدام النموذجي'],
        rows: [
          {
            'عائلة النموذج': 'Gemma 2',
            'طريقة الوصول': 'تنزيل سريع بلمسة واحدة داخل التطبيق',
            'الاستخدام النموذجي': 'محادثة عامة؛ عائلة نماذج مفتوحة من Google',
          },
          {
            'عائلة النموذج': 'Qwen',
            'طريقة الوصول': 'تنزيل سريع بلمسة واحدة داخل التطبيق',
            'الاستخدام النموذجي': 'محادثة عامة واستدلال منطقي؛ عائلة نماذج مفتوحة من Alibaba',
          },
          {
            'عائلة النموذج': 'Phi',
            'طريقة الوصول': 'تنزيل سريع بلمسة واحدة داخل التطبيق',
            'الاستخدام النموذجي': 'استدلال منطقي مضغوط؛ عائلة نماذج صغيرة من Microsoft',
          },
          {
            'عائلة النموذج': 'Danube 3',
            'طريقة الوصول': 'تنزيل سريع بلمسة واحدة داخل التطبيق',
            'الاستخدام النموذجي': 'محادثة خفيفة؛ عائلة نماذج صغيرة من H2O.ai',
          },
          {
            'عائلة النموذج': 'أي نموذج GGUF آخر',
            'طريقة الوصول': 'استيراد يدوي عبر بحث Hugging Face Hub داخل التطبيق، بما يشمل النماذج المقيّدة الوصول بعد قبول شروط الترخيص',
            'الاستخدام النموذجي': 'نماذج مخصصة أو متخصصة غير مدرجة في قائمة التنزيل السريع',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'هل PocketPal AI متاح على iPhone وAndroid؟',
        itemHeadings: true,
        columns: ['المنصة', 'التوفر', 'ملاحظات'],
        rows: [
          {
            'المنصة': 'iPhone / iPad',
            'التوفر': 'متاح على [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)',
            'ملاحظات': 'يستخدم افتراضيًا واجهة برمجة GPU من Apple المسماة Metal للتسريع؛ يمكن تعطيلها داخل التطبيق إذا سببت عدم استقرار على جهاز معيّن.',
          },
          {
            'المنصة': 'Android',
            'التوفر': 'متاح على [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)',
            'ملاحظات': 'أعادت الإصدارات الحديثة تفعيل محرك تسريع NPU من Qualcomm Hexagon للشرائح المتوافقة، إضافة إلى الاستدلال القياسي عبر المعالج.',
          },
          {
            'المنصة': 'Mac / Windows / Linux',
            'التوفر': 'لم يُعثر على نسخة لسطح المكتب وقت إعداد هذه المراجعة',
            'ملاحظات': 'PocketPal AI تطبيق مخصص للهواتف فقط. مستخدمو سطح المكتب الباحثون عن عميل محادثة GGUF محلي ينبغي أن ينظروا إلى Ollama أو LM Studio أو Jan AI بدلًا من ذلك.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'كم تكلفة PocketPal AI؟',
        content: [
          '**PocketPal AI مجاني للتنزيل ومجاني للمحادثة مع نموذج تم تنزيله محليًا — لا يوجد اشتراك، والكود المصدري متاح للعامة بموجب ترخيص MIT.** المكوّن المدفوع الوحيد الموجود في التطبيق هو PalsHub، وهو سوق داخل التطبيق يمكن لأعضاء المجتمع من خلاله نشر وبيع "Pals" مدفوعة (إعدادات مساعد قابلة للتخصيص)؛ وتتوفر مشتريات PalsHub داخل التطبيق على iOS وAndroid وفقًا للمنطقة.',
          'بما أن التطبيق ووظيفة تشغيل النماذج فيه مفتوحان المصدر ومجانيان، فإن التكلفة المستمرة الوحيدة على المستخدم هي مساحة التخزين والنطاق الترددي اللازمان لتنزيل ملفات نماذج GGUF — يبلغ حجم النموذج المكمّم من 3 إلى 4 مليارات معلمة عادةً بضعة غيغابايتات، والنماذج الأكبر أكبر حجمًا بما يتناسب مع ذلك.',
        ],
        items: [
          '**التطبيق الأساسي:** مجاني، بدون اشتراك، برمجية مفتوحة المصدر بترخيص MIT.',
          '**المحادثة مع النماذج التي تم تنزيلها:** مجانية — دون رسوم لكل رسالة أو رمز (توكن)، إذ يعمل الاستدلال على جهازك الخاص.',
          '**سوق PalsHub:** مشتريات اختيارية داخل التطبيق لإعدادات مساعد مدفوعة من المجتمع؛ وظيفة المحادثة الأساسية لا تتطلب ذلك.',
          '**تكلفة التخزين:** ليست مالية، لكنها حقيقية — كل نموذج GGUF يتم تنزيله يستهلك مساحة تخزين على الجهاز، عادةً عدة غيغابايتات لكل نموذج.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'ما الميزات التي يقدّمها PocketPal AI؟',
        content: [
          '**بالإضافة إلى المحادثة المحلية الأساسية، اكتسب PocketPal AI على مدار تاريخ إصداراته مجموعة من الميزات الشائعة في تطبيقات الذكاء الاصطناعي المحلية الأكثر نضجًا.** ومن أبرزها:',
        ],
        items: [
          '**Pals وPalsHub.** "Pals" هي إعدادات مساعد قابلة للتخصيص (تجمع بين أمر النظام والنموذج والسلوك)؛ وPalsHub سوق يمكن للمستخدمين من خلاله مشاركة أو بيع "Pals" الخاصة بهم.',
          '**Talents (استدعاء الأدوات).** يدعم التطبيق تدفقًا شبيهًا بالوكيل (agent) حيث يمكن للنموذج استدعاء أدوات محددة في منتصف المحادثة بدلًا من توليد نص عادي فقط.',
          '**البحث عبر الإنترنت داخل المحادثة.** تتيح الإصدارات الحديثة للمحادثة البحث في الويب باستخدام مفتاح واجهة برمجة تطبيقات يوفّره المستخدم من مزوّدين مثل Brave أوTavily أوExa — وهذا اختياري ويتطلب مفتاح المستخدم الخاص، وليس خدمة بحث مضمّنة.',
          '**تحويل النص إلى كلام.** يمكن للتطبيق قراءة الردود بصوت عالٍ، مع دعم لغات آخذ في التوسع في الإصدارات الحديثة.',
          '**تثبيت المحادثات والتصدير إلى Markdown.** يمكن تثبيت المحادثات للوصول السريع وتصديرها كملفات Markdown.',
          '**فك التشفير التخميني (تجريبي).** يمكن دمج نموذج "مسودة" أصغر مع نموذج أكبر لتسريع التوليد — وقد وسمه المشروع نفسه كميزة تجريبية وليس ضمانًا مستقرًا.',
          '**أدوات قياس الأداء.** يتضمن التطبيق طريقة لقياس أداء النموذج على الجهاز الحالي، مفيدة لمقارنة أداء مستويات التكميم المختلفة على هاتفك بالتحديد.',
        ],
        note: 'قد يختلف توفر الميزات حسب إصدار التطبيق والمنصة (iOS مقابل Android) لأن المشروع يصدر إصدارات تدريجية متكررة. راجع سجل التغييرات داخل التطبيق أو [صفحة إصدارات GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases) لمعرفة ما هو نشط في نسختك المثبّتة.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'ما الأجهزة التي تحتاجها لتشغيل PocketPal AI؟',
        content: [
          '**النموذج الذي تختاره، وليس التطبيق نفسه، هو ما يحدد الحد الأدنى الفعلي للجهاز — وكقاعدة عامة لنماذج GGUF على الهواتف، يحتاج نموذج مكمّم من 2 إلى 4 مليارات معلمة إلى نحو 3-4 غيغابايت من ذاكرة الوصول العشوائي الحرة، بينما يحتاج نموذج من 7 إلى 8 مليارات معلمة إلى 6-8 غيغابايت أو أكثر.** هذا إرشاد عام لحجم نماذج اللغة المحلية، وليس معيار أداء خاصًا بـ PocketPal؛ ولم تقِس PromptQuorum بشكل مستقل استهلاك الذاكرة الدقيق لـ PocketPal AI لكل نموذج.',
          'على iPhone وiPad، يستخدم التطبيق افتراضيًا واجهة برمجة GPU من Apple المسماة Metal، ما يحسّن عمومًا سرعة الاستدلال مقارنة بالتشغيل بالمعالج فقط على أجهزة Apple Silicon. أما على Android، فقد أضافت الإصدارات الحديثة دعمًا لمحرك تسريع NPU من Qualcomm Hexagon على الشرائح المتوافقة؛ وتعود الأجهزة التي لا تدعم NPU إلى الاستدلال بالمعالج، وهو أبطأ بشكل ملحوظ للنماذج الكبيرة.',
        ],
        items: [
          'النماذج الصغيرة (2-4 مليارات معلمة، مكمّمة): قابلة للاستخدام على معظم الهواتف من السنوات الأخيرة مع 4 غيغابايت أو أكثر من ذاكرة الوصول العشوائي الحرة.',
          'النماذج المتوسطة (7-8 مليارات معلمة، مكمّمة): يُنصح بذاكرة وصول عشوائي للجهاز بحجم 8 غيغابايت أو أكثر لاستجابة مقبولة.',
          'التخزين: خطّط لعدة غيغابايتات من مساحة التخزين الحرة لكل ملف نموذج تم تنزيله.',
          'استدلال أسرع: يتفوّق جهاز iPhone/iPad مزوّد بشريحة Apple Silicon (تسريع Metal) أو جهاز Android حديث بشريحة Qualcomm Hexagon NPU متوافقة على الأجهزة الأقدم أو الاقتصادية التي تعمل بالمعالج فقط.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب PocketPal AI',
        items: [
          '**المستخدمون المهتمون بالخصوصية والراغبون في تكلفة اشتراك تساوي صفرًا.** إذا كان الهدف تشغيل نموذج مفتوح دون رسوم مستمرة ودون حساب، فإن التطبيق الأساسي المجاني لـ PocketPal AI بترخيص MIT يلبي الحاجة مباشرة.',
          '**المستخدمون الراغبون في تجربة نماذج تتجاوز قائمة ثابتة.** بما أن التطبيق يمكنه تحميل أي ملف GGUF من Hugging Face — وليس قائمة التنزيل السريع فقط — فهو يناسب من لديهم بالفعل نموذج معيّن في الاعتبار.',
          '**المطورون والمستخدمون ذوو الفضول التقني المرتاحون للمشاريع مفتوحة المصدر.** يناسب مستودع GitHub العام ومتتبّع المشكلات والإصدارات المتكررة من هم على استعداد لقراءة ملاحظات الإصدار أو تقديم بلاغ عن مشكلة بدلًا من توقّع دعم عملاء مخصص.',
          '**المستخدمون الراغبون في فحص الكود أو تعديله بأنفسهم.** يتيح ترخيص MIT النسخ الفرعي (fork) والتعديل، وهو أمر مهم لمن يريد التدقيق في ما يفعله التطبيق بالضبط قبل أن يعهد إليه بمحادثات خاصة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب PocketPal AI',
        items: [
          '**المستخدمون الراغبون في تجربة موجّهة بالكامل دون إعداد.** اختيار حجم النموذج المناسب لجهازك وإدارة التنزيلات بنفسك جزء من سير العمل؛ ومن يفضّل ترك هذا القرار للتطبيق قد يجد تطبيقًا أكثر تنظيمًا مثل Loci أنسب.',
          '**المستخدمون المحتاجون إلى دعم Mac أو Windows أو Linux.** PocketPal AI مخصص للهواتف فقط (iPhone/iPad وAndroid)؛ وينبغي لمستخدمي سطح المكتب النظر إلى Ollama أو LM Studio أو Jan AI بدلًا من ذلك.',
          '**المستخدمون الراغبون في أكثر النماذج تطلّبًا (70 مليار معلمة أو أكثر).** لا تسمح أجهزة الهواتف، حتى الأجهزة الرائدة الحالية، عمليًا بتشغيل نماذج بهذا الحجم محليًا — تتطلب مثل هذه المهام جهاز سطح مكتب أو محطة عمل أو واجهة برمجة تطبيقات سحابية، بصرف النظر عن تطبيق الهاتف المستخدم.',
          '**المستخدمون الذين يتوقعون دعمًا تجاريًا مخصصًا.** يُصان PocketPal AI بواسطة مطوّر واحد في وقت فراغه، وفق وثائق المشروع نفسها؛ وينبغي لمن يحتاج أوقات استجابة مضمونة أو عقود دعم على مستوى المؤسسات البحث عن بديل مدعوم تجاريًا.',
          '**المستخدمون الراغبون في مزامنة سحابية مدمجة بين الأجهزة.** بما أن الاستدلال وسجل المحادثات يبقيان محليين على كل جهاز حسب التصميم، لا يوفّر PocketPal AI مزامنة مدمجة قائمة على حساب بين iPhone وجهاز Android كما يفعل تطبيق محادثة مدعوم بالسحابة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'PocketPal AI مقابل البدائل',
        itemHeadings: true,
        columns: ['التطبيق', 'الترخيص / التكلفة', 'المنصات', 'مرونة النماذج'],
        rows: [
          {
            'التطبيق': 'PocketPal AI',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر (MIT)',
            'المنصات': 'iPhone/iPad، Android',
            'مرونة النماذج': 'قائمة تنزيل سريع (Gemma 2، Qwen، Phi، Danube 3) بالإضافة إلى أي ملف GGUF من Hugging Face',
          },
          {
            'التطبيق': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'الترخيص / التكلفة': 'مستوى مجاني بالإضافة إلى مستويات مدفوعة؛ مغلق المصدر',
            'المنصات': 'iPhone/iPad/Android/Mac/Windows (5 منصات)',
            'مرونة النماذج': 'مكتبة منتقاة (~10 نماذج)؛ لا يمكن استيراد ملفات GGUF مخصصة',
          },
          {
            'التطبيق': 'Private LLM',
            'الترخيص / التكلفة': 'مدفوع، شراء لمرة واحدة؛ مغلق المصدر',
            'المنصات': 'iPhone/iPad/Mac (Apple فقط)',
            'مرونة النماذج': 'أكثر من 140 نموذجًا، مع صيغتي تكميم OmniQuant وGPTQ',
          },
          {
            'التطبيق': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'الترخيص / التكلفة': 'مجاني مع مستوى مدفوع؛ مغلق المصدر',
            'المنصات': 'iPhone/iPad/Mac (Apple فقط)',
            'مرونة النماذج': 'قائمة نماذج منتقاة على الجهاز؛ تكامل مع Siri وShortcuts',
          },
          {
            'التطبيق': '[Locally AI](/power-local-llm/locally-ai-review)',
            'الترخيص / التكلفة': 'مجاني؛ مغلق المصدر',
            'المنصات': 'iPhone/iPad',
            'مرونة النماذج': 'قائمة نماذج منتقاة، وفق صفحته على App Store',
          },
          {
            'التطبيق': 'ChatterUI',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر (AGPL-3.0)',
            'المنصات': 'Android (يُبنى من الكود المصدري)',
            'مرونة النماذج': 'يشغّل ملفات GGUF على الجهاز عبر llama.cpp، أو يتصل بواجهات برمجة تطبيقات عن بُعد؛ يدعم Character Card v2',
          },
          {
            'التطبيق': 'RikkaHub',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر',
            'المنصات': 'Android',
            'مرونة النماذج': 'عميل متعدد المزوّدين؛ استدلال محلي على الجهاز عبر مزوّد LiteRT لنماذج مثل Gemma وQwen',
          },
          {
            'التطبيق': 'MLC Chat (MLC-LLM)',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر (Apache 2.0)',
            'المنصات': 'iPhone/iPad، Android',
            'مرونة النماذج': 'يشغّل نماذج مُجمّعة خصيصًا لمحرك تشغيل MLC بدلًا من ملفات GGUF الخام',
          },
        ],
        note: 'أُزيل LLM Farm، وهو تطبيق محادثة GGUF مفتوح المصدر لنظام iOS كان شائعًا سابقًا، من App Store وصُنّف بأنه "غير متاح مؤقتًا" على مستودعه على GitHub وقت إعداد هذه المراجعة — لذا استُبعد من التوصيات النشطة أعلاه. أما Layla، وهو تطبيق مساعد آخر على الجهاز، فقد أُفيد بأن مستواه المجاني "Layla Lite" أُزيل من Google Play؛ تحقّق من التوفر الحالي مباشرة عبر [layla-network.ai](https://www.layla-network.ai) قبل افتراض أنه قابل للتثبيت.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل PocketPal AI مجاني؟',
            a: 'نعم. PocketPal AI مجاني للتنزيل ومجاني للمحادثة مع نموذج تم تنزيله، والتطبيق مفتوح المصدر بترخيص MIT. يبيع سوق اختياري داخل التطبيق باسم PalsHub إعدادات مساعد مدفوعة من المجتمع، لكن وظيفة المحادثة الأساسية لا تحتوي على اشتراك أو حاجز دفع.',
          },
          {
            q: 'من طوّر PocketPal AI؟',
            a: 'طوّر PocketPal AI المطوّر Asghar Ghorbani، الذي بدأه كمشروع شخصي لتشغيل نماذج لغوية صغيرة على هاتفه الخاص، قبل نشر الكود مفتوح المصدر بعد أن جذب اهتمامًا خارجيًا. يُصان بشكل مستقل، وليس من قِبل شركة.',
          },
          {
            q: 'هل PocketPal AI مفتوح المصدر؟',
            a: 'نعم، الكود المصدري بالكامل منشور على [GitHub](https://github.com/a-ghorbani/pocketpal-ai) بموجب ترخيص MIT، وهو ترخيص تساهلي يسمح بالاستخدام والتعديل وإعادة التوزيع بحرية.',
          },
          {
            q: 'ما النماذج التي يمكن لـ PocketPal AI تشغيلها؟',
            a: 'يوفّر PocketPal AI تنزيلًا بلمسة واحدة لنماذج Gemma 2 وQwen وPhi وDanube 3، ويمكنه إضافة إلى ذلك تحميل أي نموذج آخر بصيغة GGUF تجده على Hugging Face، بما في ذلك النماذج المقيّدة الوصول بعد قبول شروط ترخيصها.',
          },
          {
            q: 'هل يعمل PocketPal AI على iPhone وAndroid؟',
            a: 'نعم. PocketPal AI متاح على [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) لأجهزة iPhone وiPad، وعلى [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) لأجهزة Android. لا توجد نسخة لـ Mac أو Windows أو Linux.',
          },
          {
            q: 'كم ذاكرة وصول عشوائي (RAM) يحتاجها PocketPal AI؟',
            a: 'يعتمد ذلك على النموذج الذي تختاره، وليس على متطلب ثابت للتطبيق. كإرشاد عام لنماذج GGUF المكمّمة على الهواتف، تحتاج النماذج من 2 إلى 4 مليارات معلمة عادةً إلى 3-4 غيغابايت من ذاكرة الوصول العشوائي الحرة، وتحتاج النماذج من 7 إلى 8 مليارات معلمة عادةً إلى 8 غيغابايت أو أكثر. يمكن للأجهزة ذات ذاكرة الوصول العشوائي الأكبر تشغيل نماذج أكبر وأكثر قدرة.',
          },
          {
            q: 'هل يحتاج PocketPal AI إلى اتصال بالإنترنت؟',
            a: 'لا حاجة إلى اتصال بالإنترنت للمحادثة بعد تنزيل النموذج — يعمل الاستدلال بالكامل على الجهاز عبر llama.cpp. يلزم اتصال بالإنترنت لتنزيل النماذج في البداية، واختياريًا لاستخدام ميزة البحث عبر الإنترنت في التطبيق، التي تتطلب مفتاح واجهة برمجة تطبيقات خاصًا بالمستخدم من مزوّد مثل Brave أوTavily أوExa.',
          },
          {
            q: 'هل PocketPal AI آمن للمحادثات الخاصة؟',
            a: 'بما أن الاستدلال يحدث محليًا وأن الكود المصدري متاح للعامة وقابل للتدقيق بموجب ترخيص MIT، فإن PocketPal AI لا يحتاج إلى إرسال محتوى المحادثة إلى خادم لكي يعمل. لا تتضمن هذه المراجعة تدقيقًا أمنيًا مستقلًا للتطبيق؛ وينبغي للمستخدمين المحتاجين إلى هذا المستوى من الضمان مراجعة المستودع العام أو متتبّع المشكلات فيه بأنفسهم.',
          },
          {
            q: 'كيف يقارَن PocketPal AI بـ Private LLM أو Loci؟',
            a: 'PocketPal AI مجاني ومفتوح المصدر مع تحميل غير مقيّد لنماذج GGUF، بينما Private LLM تطبيق مدفوع ومغلق المصدر مخصص لأجهزة Apple فقط مع كتالوج نماذج مدمج أكبر (أكثر من 140 نموذجًا)، وLoci تطبيق مغلق المصدر يغطي خمس منصات بمكتبة نماذج أصغر وأكثر انتقاءً. اختر PocketPal AI إذا كانت التكلفة والانفتاح هما الأهم؛ واختر Private LLM أو Loci إذا كانت تجربة أكثر توجيهًا وصقلًا عبر منصات أكثر تهمك أكثر من كون التطبيق مجانيًا أو مفتوح المصدر. راجع جدول المقارنة أعلاه للتفاصيل.',
          },
          {
            q: 'هل يمكنني تشغيل نماذج كبيرة مثل نماذج 70 مليار معلمة على PocketPal AI؟',
            a: 'لا. لا تملك أجهزة الهواتف، بما فيها الأجهزة الرائدة الحالية، ذاكرة وصول عشوائي كافية لتشغيل نماذج بهذا الحجم عمليًا محليًا. صُمم PocketPal AI للنماذج الصغيرة والمتوسطة (حتى نحو 8 مليارات معلمة تقريبًا)؛ وينبغي لمن يحتاج نماذج أكبر استخدام محطة عمل لسطح المكتب أو واجهة برمجة تطبيقات سحابية بدلًا من ذلك.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يستحق PocketPal AI مكانته بين تطبيقات الذكاء الاصطناعي المحلية للهواتف لكونه مجانيًا حقًا ومفتوح المصدر حقًا ومرنًا حقًا فيما يخص النموذج الذي يشغّله — وهي ثلاث صفات نادرة كل منها على حدة، بل أكثر ندرة عند اجتماعها في هذه الفئة. إنه ليس التطبيق الأكثر صقلًا في هذا المجال: يدير المستخدمون تنزيلات نماذجهم بأنفسهم، وتستبدل الواجهة بعض التوجيه بالمرونة، ويُصان المشروع بواسطة مطوّر واحد في وقت فراغه بدلًا من شركة لديها فريق دعم. اختر PocketPal AI إذا كنت تريد تشغيل نموذج مفتوح على هاتفك الخاص دون اشتراك ودون ارتباط بمزوّد، وتشعر بالارتياح لاختيار نموذج يناسب جهازك بنفسك. واختر بدلًا من ذلك تطبيقًا مدفوعًا ومنتقًى مثل Private LLM أو Loci إذا كنت تفضّل استبدال بعض التكلفة والانفتاح بإعداد أكثر توجيهًا ودعم مخصص عبر منصات أكثر.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[PocketPal AI على GitHub](https://github.com/a-ghorbani/pocketpal-ai) — الكود المصدري، والترخيص (MIT)، وسجل الإصدارات، وأعداد النجوم/النسخ الفرعية المذكورة في هذه المراجعة.',
          '[وثائق البدء الخاصة بـ PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) — خطوات الإعداد، والنماذج المرفقة، وملاحظات حول تسريع GPU.',
          '[PocketPal AI على App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) — التوفر على iOS/iPadOS.',
          '[PocketPal AI على Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) — التوفر على Android.',
          '["PocketPal AI: Tiny LLMs in the Pocket" بقلم Asghar Ghorbani، Medium](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75) — أصل المشروع ودافع المطوّر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل تطبيقات LLM المحلية لأندرويد في 2026](/power-local-llm/best-local-llm-apps-android-2026) — استعراض تطبيقات Android، بما في ذلك PocketPal AI وMLC Chat وMaid وLayla.',
          '[أفضل تطبيقات LLM المحلية للآيفون في 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — النظير الخاص بنظام iOS، بمقارنة PocketPal AI مع Private LLM وEnclave AI.',
          '[مراجعة Loci: ذكاء اصطناعي دون اتصال لأجهزة iPhone وAndroid وiPad وMac وWindows](/power-local-llm/loci-ai-review-offline-local-ai) — بديل مدفوع ومغلق المصدر عبر خمس منصات بمكتبة نماذج منتقاة.',
          '[أفضل نماذج LLM للهواتف في 2026: Phi-4 Mini مقابل Gemma 4 مقابل SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — المقال المكمّل الخاص بالنماذج، لاختيار النموذج GGUF المناسب فعلًا لهاتفك.',
          '[مراجعة Enclave AI](/power-local-llm/enclave-ai-review) — بديل مخصص لأجهزة Apple فقط مع أتمتة عبر Siri وShortcuts.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة PocketPal AI (2026): محادثة مجانية ومفتوحة المصدر على الجهاز',
      description:
        'مراجعة PocketPal AI: تطبيق مجاني ومفتوح المصدر (MIT) يشغّل نماذج GGUF محليًا على iPhone وAndroid. النماذج، ذاكرة الوصول العشوائي المطلوبة، السعر، والفئة المناسبة.',
      url: 'https://promptquorum.com/ar/power-local-llm/pocketpal-ai-review',
      inLanguage: 'ar',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مستخدمو iPhone وAndroid المهتمون بالخصوصية ويقيّمون تطبيقات محادثة ذكاء اصطناعي محلية مجانية ومفتوحة المصدر' },
      about: [
        { '@type': 'Thing', name: 'PocketPal AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'برمجيات مفتوحة المصدر' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/pocketpal-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة PocketPal AI (2026)', item: 'https://promptquorum.com/ar/power-local-llm/pocketpal-ai-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketpal-ai-review-hero-zh.webp',
    title: 'PocketPal AI 测评（2026）：免费开源的本地设备端聊天应用',
    seoTitle: 'PocketPal AI 2026测评：免费开源本地聊天应用',
    intro:
      'PocketPal AI 是一款面向 iPhone、iPad 和 Android 的免费、MIT 许可证开源应用，可直接在设备上运行 GGUF 格式的语言模型，聊天时无需服务器往返，也无需账号。开发者 Asghar Ghorbani 最初将其作为个人项目启动，随后将代码发布在 [GitHub](https://github.com/a-ghorbani/pocketpal-ai) 上开源。本测评介绍该应用目前的功能、内置的模型、真实的硬件需求、真实的价格（基础应用免费；一个名为 PalsHub 的可选社区市场出售高级预设），以及它适合谁——不适合谁。',
    metaDescription:
      'PocketPal AI 测评：一款免费的 MIT 开源应用，可在 iPhone 和 Android 上本地运行 GGUF 模型。模型、所需内存、价格及适用人群一览。',
    twitterDescription:
      'PocketPal AI 2026测评：在设备上本地运行 GGUF 模型的免费开源应用，支持 iPhone 和 Android。功能、费用与适用人群。',
    audience:
      '注重隐私、希望在本地运行开放权重模型而不想为商业应用付费的 iPhone 和 Android 用户。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'PocketPal AI 测评',
    targetKeywords: [
      'pocketpal ai 测评',
      'pocketpal ai android',
      'pocketpal ai iphone',
      'pocketpal ai 模型',
      'pocketpal ai vs private llm',
      '免费本地ai应用',
      '开源本地ai应用',
      '手机运行gguf模型',
    ],
    current_models_mentioned: ['Gemma 2', 'Qwen', 'Phi', 'Danube 3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android'],
    leadAnswerBlock:
      '**PocketPal AI 是一款免费开源（MIT 许可证）应用，可完全在你的 iPhone、iPad 或 Android 设备上运行 GGUF 语言模型，聊天时不依赖云端。** 由开发者 Asghar Ghorbani 打造，托管在 [GitHub](https://github.com/a-ghorbani/pocketpal-ai)（测评时星标数超过 8,000），支持一键下载 Gemma 2、Qwen、Phi、Danube 3 等模型，也可加载从 Hugging Face 获取的任何其他 GGUF 文件。基础应用完全免费；一个名为 PalsHub 的可选应用内市场出售高级助手预设，但与已下载模型聊天本身是免费的。',
    quickAnswerTop: {
      zh: {
        question: '为了私密、离线的 AI 聊天，值得安装 PocketPal AI 吗？',
        answer:
          '值得——前提是你想要一种真正免费开源的方式在自己手机上运行开放权重模型，并且愿意自行管理模型下载。PocketPal AI 的聊天功能没有订阅费，在 GitHub 上公开全部源代码，并支持任意 GGUF 模型，而不局限于固定列表。它更适合有技术好奇心的用户，而不太适合想要零配置、体验打磨到位的用户；Loci 或 Private LLM 则是用灵活性换取更有引导性的设置流程。',
        bullets: [
          '基于 MIT 许可证免费开源——与本地模型聊天无需订阅。',
          '可在 [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)（iPhone/iPad）和 [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)（Android）下载。',
          '支持一键下载 Gemma 2、Qwen、Phi 和 Danube 3，并支持从 Hugging Face 加载任意自定义 GGUF 文件。',
          '由单一开发者 Asghar Ghorbani 作为个人开源项目开发——而非受资助的公司。',
          '可选的 PalsHub 市场通过应用内购买出售高级助手预设；基础聊天应用本身没有任何付费门槛。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'PocketPal AI 是什么？', anchor: 'what-is-pocketpal-ai' },
      { label: 'PocketPal AI 是谁开发的？', anchor: 'history-and-developer' },
      { label: '如何开始使用 PocketPal AI', anchor: 'getting-started' },
      { label: 'PocketPal AI 支持哪些模型？', anchor: 'models-supported' },
      { label: 'PocketPal AI 是否支持 iPhone 和 Android？', anchor: 'platform-availability' },
      { label: 'PocketPal AI 收费吗？', anchor: 'pricing' },
      { label: 'PocketPal AI 有哪些功能？', anchor: 'key-features' },
      { label: '需要什么样的硬件？', anchor: 'hardware-requirements' },
      { label: 'PocketPal AI 适合谁', anchor: 'who-should-use' },
      { label: 'PocketPal AI 不适合谁', anchor: 'who-should-not-use' },
      { label: 'PocketPal AI 与其他替代方案对比', anchor: 'vs-alternatives' },
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
            text: 'PocketPal AI 是一款面向 iPhone、iPad 和 Android 的免费、MIT 开源应用，可直接在设备上下载并运行 GGUF 语言模型，由开发者 Asghar Ghorbani 创建和维护。',
          },
          {
            type: 'plain-terms',
            text: '这是一款安装后可与运行在你自己手机上、而非公司服务器上的 AI 聊天的应用——代码在 GitHub 上公开，应用本身完全免费，你可以自行选择要下载的模型，而不必被单一供应商绑定。',
          },
        ],
        items: [
          '免费开源（MIT 许可证）；源代码和问题跟踪均公开在 [GitHub](https://github.com/a-ghorbani/pocketpal-ai) 上。',
          '由 Asghar Ghorbani 作为个人项目起步，获得关注后开源发布。',
          '通过 llama.cpp 完全在设备上运行 GGUF 模型——聊天无需账号，也无需服务器往返。',
          '支持一键下载 Gemma 2、Qwen、Phi 和 Danube 3；来自 Hugging Face 的其他任何 GGUF 模型均可手动加载。',
          '可在 App Store（iPhone/iPad）和 Google Play（Android）下载；没有 Mac、Windows 或 Linux 版本。',
          '基础应用没有订阅费；一个名为 PalsHub 的可选市场通过应用内购买出售高级助手预设。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本测评基于公开的 [GitHub 仓库](https://github.com/a-ghorbani/pocketpal-ai)、项目内文档以及 App Store 和 Google Play 的页面信息，核实时间为 2026 年 9 月。PromptQuorum 并未针对本测评对 PocketPal AI 进行独立的实机基准测试——以下性能数据是本地 LLM 的通用硬件参考，而非针对该应用的具体实测。',
          },
        ],
      },
      overview: {
        id: 'what-is-pocketpal-ai',
        title: 'PocketPal AI 是什么？',
        content: [
          '**PocketPal AI 是一款移动应用，下载 GGUF 格式的开放权重语言模型，并使用 [llama.cpp](https://github.com/ggml-org/llama.cpp) 作为推理引擎，在 iPhone、iPad 或 Android 设备上本地运行。** 应用本身基于 React Native 构建，并以 [MIT 许可证](https://github.com/a-ghorbani/pocketpal-ai/blob/main/LICENSE)发布，这意味着完整源代码是公开的，可自由查看、分叉或修改。',
          '与将用户限制在固定精选模型列表中的应用不同，PocketPal AI 允许从可一键获取的模型中选择，或者从 [Hugging Face](https://huggingface.co) 导入任何 GGUF 文件——包括在同意其许可条款后可访问的受限模型。这种灵活性正是该应用的核心特征：它更像是配有聊天界面的通用 GGUF 运行时，而不是单一厂商的产品。',
        ],
        note: 'GGUF 是一种文件格式，用于打包经过量化的开放权重语言模型，使其可以通过 llama.cpp 等运行时在消费级硬件上高效运行，而无需为每次响应调用云端 API。',
      },
      history: {
        id: 'history-and-developer',
        title: 'PocketPal AI 是谁开发的？',
        content: [
          '**PocketPal AI 由 Asghar Ghorbani 创建，他最初将其作为个人副业项目，用于在自己的手机上运行小型语言模型，在引起外界关注后将其开源。** Ghorbani 在一篇 [Medium 文章《PocketPal AI: Tiny LLMs in the Pocket》](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75)中讲述了项目的起源和动机，将目标描述为把小型语言模型的能力直接装进口袋。',
          '该项目在开发者的业余时间维护，而非由受资助的公司或专职团队负责——仓库自身的入门文档也直接说明了这一点，在期待企业级支持响应速度之前值得了解这一点。截至本测评时，GitHub 仓库（[a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)）已累计获得超过 8,000 个星标和超过 850 次分叉，并持续收到常规更新，包括新模型支持、界面改动以及互联网搜索、聊天置顶、导出为 Markdown 等新功能。',
        ],
        items: [
          '开发者：Asghar Ghorbani（GitHub：[a-ghorbani](https://github.com/a-ghorbani)），以个人身份独立开发，而非以公司名义。',
          '起初是在设备上运行小型语言模型的个人项目；获得公众关注后开源发布。',
          '许可证：MIT——宽松许可，可自由使用、修改和再分发。',
          '截至本测评时，GitHub 星标数超过 8,000，分叉数超过 850，问题跟踪活跃，拉取请求历史丰富。',
          '开发节奏：频繁发布小版本更新，涵盖运行时更新、新界面功能以及不断扩展的语言支持，均以志愿方式维护。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用 PocketPal AI',
        content: [
          '**根据项目自身的[入门文档](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md)，安装应用后只需四个步骤即可开始本地聊天。** 无需创建账号或登录——整个流程都在设备上完成。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '在 iPhone/iPad 上从 [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) 下载 PocketPal AI，在 Android 上从 [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) 下载。打开应用无需账号或邮箱注册。',
          },
          {
            title: '打开“模型”页面',
            whyItMatters: '从应用菜单进入“模型”标签页，查看可一键下载的模型列表（如 Gemma 2、Qwen、Phi 和 Danube 3），以及导入自定义 GGUF 文件的选项。',
          },
          {
            title: '下载模型',
            whyItMatters: '选择一个与你设备内存匹配的模型（参见下方硬件部分）并下载。更大、更强的模型下载时间更长，占用的设备存储空间也更多。',
          },
          {
            title: '加载模型并开始聊天',
            whyItMatters: '点击“Load”将下载好的模型载入内存，然后切换到聊天页面。加载完成后，所有推理都在设备上进行——PocketPal AI 的“Auto Offload/Load”功能可在应用切换到后台时自动卸载模型以节省内存，并在你返回时重新加载。',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'PocketPal AI 支持哪些模型？',
        itemHeadings: true,
        columns: ['模型系列', '获取方式', '典型用途'],
        rows: [
          {
            '模型系列': 'Gemma 2',
            '获取方式': '应用内一键下载',
            '典型用途': '通用聊天；Google 的开放权重模型系列',
          },
          {
            '模型系列': 'Qwen',
            '获取方式': '应用内一键下载',
            '典型用途': '通用聊天与推理；阿里巴巴的开放权重模型系列',
          },
          {
            '模型系列': 'Phi',
            '获取方式': '应用内一键下载',
            '典型用途': '紧凑型推理；Microsoft 的小型模型系列',
          },
          {
            '模型系列': 'Danube 3',
            '获取方式': '应用内一键下载',
            '典型用途': '轻量聊天；H2O.ai 的小型模型系列',
          },
          {
            '模型系列': '其他任意 GGUF 模型',
            '获取方式': '通过应用内 Hugging Face Hub 搜索手动导入，包括同意许可条款后的受限模型',
            '典型用途': '不在一键下载列表中的自定义或小众模型',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'PocketPal AI 是否支持 iPhone 和 Android？',
        itemHeadings: true,
        columns: ['平台', '可用性', '备注'],
        rows: [
          {
            '平台': 'iPhone / iPad',
            '可用性': '可在 [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) 下载',
            '备注': '默认使用 Apple 的 Metal GPU API 进行加速；如在特定设备上导致不稳定，可在应用内关闭。',
          },
          {
            '平台': 'Android',
            '可用性': '可在 [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) 下载',
            '备注': '近期版本为兼容芯片恢复了高通 Hexagon NPU 加速后端，此外还支持标准 CPU 推理。',
          },
          {
            '平台': 'Mac / Windows / Linux',
            '可用性': '截至本测评时未发现桌面版本',
            '备注': 'PocketPal AI 是一款仅限移动端的应用。若需要本地 GGUF 聊天桌面客户端，应考虑 Ollama、LM Studio 或 Jan AI。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'PocketPal AI 收费吗？',
        content: [
          '**PocketPal AI 免费下载，与本地下载的模型聊天也完全免费——没有订阅费，源代码基于 MIT 许可证公开。** 应用中唯一发现的付费组成部分是 PalsHub，一个应用内市场，社区成员可在其中发布并出售高级“Pals”（可自定义的助手预设）；PalsHub 的应用内购买在 iOS 和 Android 上均可用，具体取决于所在地区。',
          '由于应用及其模型运行功能是开源且免费的，用户唯一持续产生的成本是下载 GGUF 模型文件所需的存储空间和带宽——一个 30 亿到 40 亿参数的量化模型通常有几个 GB，更大的模型体积也相应更大。',
        ],
        items: [
          '**基础应用：** 免费，无订阅，MIT 许可证开源软件。',
          '**与已下载模型聊天：** 免费——由于推理在你自己的设备上运行，不按消息或按 token 收费。',
          '**PalsHub 市场：** 针对社区制作的高级助手预设的可选应用内购买；基础聊天功能不需要它。',
          '**存储成本：** 并非金钱成本，但确实存在——每个下载的 GGUF 模型都会占用设备存储，通常每个模型占用数 GB。',
        ],
      },
      features: {
        id: 'key-features',
        title: 'PocketPal AI 有哪些功能？',
        content: [
          '**除了基本的本地聊天，PocketPal AI 在版本迭代中逐步增加了更成熟的本地 AI 应用中常见的一系列功能。** 主要包括：',
        ],
        items: [
          '**Pals 与 PalsHub。**“Pals”是将系统提示词、模型和行为打包在一起的可自定义助手预设；PalsHub 是一个市场，用户可在其中分享或出售自己的 Pals。',
          '**Talents（工具调用）。** 该应用支持类似智能体（agent）的流程，模型可以在对话中途调用预定义工具，而不仅仅是生成纯文本。',
          '**聊天内互联网搜索。** 近期版本允许聊天使用用户自行提供的 API 密钥（来自 Brave、Tavily 或 Exa 等提供商）在网络上进行搜索——这是可选功能，需要用户自己的密钥，而非内置搜索服务。',
          '**文本转语音输出。** 该应用可以朗读回复内容，近期版本支持的语言数量也在扩展。',
          '**聊天置顶与 Markdown 导出。** 对话可以置顶以便快速访问，也可以导出为 Markdown 文件。',
          '**推测解码（实验性功能）。** 可将较小的“草稿”模型与较大模型配对以加速生成——项目本身将其标记为实验性功能，而非稳定保证。',
          '**基准测试工具。** 应用内置了在当前设备上对模型性能进行基准测试的方法，便于比较不同量化级别在你特定手机上的表现。',
        ],
        note: '由于该项目频繁发布增量更新，功能的可用性可能因应用版本和平台（iOS 与 Android）而异。请查看应用内更新日志或 [GitHub 发布页面](https://github.com/a-ghorbani/pocketpal-ai/releases)，了解你所安装版本中哪些功能是可用的。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '运行 PocketPal AI 需要什么样的硬件？',
        content: [
          '**决定真实硬件下限的是你选择的模型，而不是应用本身——作为手机上 GGUF 模型的一般经验法则，量化后的 20 亿到 40 亿参数模型大约需要 3-4GB 的空闲内存，而 70 亿到 80 亿参数模型则需要 6-8GB 或更多。** 这是本地 LLM 的通用规格参考，并非 PocketPal 专属的基准测试；PromptQuorum 并未独立测量 PocketPal AI 针对各模型的确切内存占用。',
          '在 iPhone 和 iPad 上，该应用默认使用 Apple 的 Metal GPU API，与仅使用 CPU 相比，通常能在搭载 Apple 芯片的设备上提升推理速度。在 Android 上，近期版本为兼容芯片增加了高通 Hexagon NPU 加速后端的支持；不支持 NPU 的设备会回退到 CPU 推理，运行大型模型时速度会明显变慢。',
        ],
        items: [
          '小型模型（20-40 亿参数，量化）：在近几年推出、空闲内存 4GB 以上的大多数手机上可用。',
          '中型模型（70-80 亿参数，量化）：为获得可接受的响应速度，建议设备内存达到 8GB 或以上。',
          '存储：为每个下载的模型文件预留数 GB 的空闲存储空间。',
          '更快的推理速度：搭载 Apple 芯片的 iPhone/iPad（Metal 加速）或搭载兼容高通 Hexagon NPU 的较新 Android 设备，在仅使用 CPU 运行时会优于较旧或入门级硬件。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'PocketPal AI 适合谁',
        items: [
          '**希望订阅成本为零的注重隐私的用户。** 如果目标是在没有持续费用、无需账号的情况下运行开放权重模型，PocketPal AI 基于 MIT 许可证的免费基础应用可以直接满足需求。',
          '**希望尝试固定列表之外模型的用户。** 由于该应用可以加载 Hugging Face 上任意的 GGUF 文件，而不仅限于其一键下载列表，因此适合已经心有特定模型的用户。',
          '**熟悉开源项目、有技术好奇心的开发者和用户。** 公开的 GitHub 仓库、问题跟踪系统和频繁的更新，适合那些愿意阅读发布说明或提交问题反馈、而非期待专属客户支持的用户。',
          '**希望自行检查或修改代码的用户。** MIT 许可证允许分叉和修改，这对任何想在把私密对话交给应用之前、准确审查其行为的人来说都很重要。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'PocketPal AI 不适合谁',
        items: [
          '**希望完全无需配置、全程引导的用户。** 为设备选择合适的模型大小并自行管理下载是使用流程的一部分；更希望由应用替自己决定的用户，可能更适合 Loci 这类更精心策划的应用。',
          '**需要 Mac、Windows 或 Linux 支持的用户。** PocketPal AI 仅支持移动端（iPhone/iPad 和 Android）；桌面用户应考虑 Ollama、LM Studio 或 Jan AI。',
          '**想要运行最苛刻模型（700 亿参数以上）的用户。** 即使是当前的旗舰机型，手机硬件也无法实际支撑该规模的模型本地运行——无论使用哪款移动应用，这类工作负载都需要台式机、工作站或云端 API。',
          '**期待专属商业支持的用户。** 根据项目自身文档，PocketPal AI 由一名开发者利用业余时间维护；需要有保障响应时间或企业级支持协议的用户，应寻找具有商业支持的替代方案。',
          '**希望在设备间内置云同步的用户。** 由于推理和聊天记录按设计保留在各设备本地，PocketPal AI 不像有云端支持的聊天应用那样，在 iPhone 和 Android 设备之间提供内置的基于账号的同步功能。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'PocketPal AI 与其他替代方案对比',
        itemHeadings: true,
        columns: ['应用', '许可证／费用', '平台', '模型灵活性'],
        rows: [
          {
            '应用': 'PocketPal AI',
            '许可证／费用': '免费，开源（MIT）',
            '平台': 'iPhone/iPad、Android',
            '模型灵活性': '一键下载列表（Gemma 2、Qwen、Phi、Danube 3），外加 Hugging Face 上任意 GGUF 文件',
          },
          {
            '应用': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            '许可证／费用': '免费层级加付费层级；闭源',
            '平台': 'iPhone/iPad/Android/Mac/Windows（5 个平台）',
            '模型灵活性': '精选模型库（约 10 个模型）；无法导入自定义 GGUF 文件',
          },
          {
            '应用': 'Private LLM',
            '许可证／费用': '付费，一次性购买；闭源',
            '平台': 'iPhone/iPad/Mac（仅 Apple）',
            '模型灵活性': '140 多个模型，支持 OmniQuant 和 GPTQ 量化格式',
          },
          {
            '应用': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            '许可证／费用': '免费加付费层级；闭源',
            '平台': 'iPhone/iPad/Mac（仅 Apple）',
            '模型灵活性': '设备端精选模型列表；集成 Siri 和 Shortcuts',
          },
          {
            '应用': '[Locally AI](/power-local-llm/locally-ai-review)',
            '许可证／费用': '免费；闭源',
            '平台': 'iPhone/iPad',
            '模型灵活性': '精选模型列表，据其 App Store 页面信息',
          },
          {
            '应用': 'ChatterUI',
            '许可证／费用': '免费，开源（AGPL-3.0）',
            '平台': 'Android（需从源代码构建）',
            '模型灵活性': '通过 llama.cpp 在设备上运行 GGUF 文件，或连接远程 API；支持 Character Card v2',
          },
          {
            '应用': 'RikkaHub',
            '许可证／费用': '免费，开源',
            '平台': 'Android',
            '模型灵活性': '多提供商客户端；通过 LiteRT 提供商在设备上本地推理 Gemma、Qwen 等模型',
          },
          {
            '应用': 'MLC Chat（MLC-LLM）',
            '许可证／费用': '免费，开源（Apache 2.0）',
            '平台': 'iPhone/iPad、Android',
            '模型灵活性': '运行为 MLC 运行时编译的模型，而非原始 GGUF 文件',
          },
        ],
        note: '曾经颇受欢迎的开源 iOS GGUF 聊天应用 LLM Farm，截至本测评时已从 App Store 下架，并在其自身的 GitHub 仓库中被标记为“暂时不可用”——因此上文的现行推荐中未包含该应用。另一款设备端 AI 助手应用 Layla，据报道其免费版“Layla Lite”已从 Google Play 下架；在假设其可安装之前，请直接前往 [layla-network.ai](https://www.layla-network.ai) 确认当前的可用情况。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'PocketPal AI 是免费的吗？',
            a: '是的。PocketPal AI 免费下载，与已下载模型聊天也完全免费，该应用基于 MIT 许可证开源。一个可选的应用内市场 PalsHub 会出售社区制作的高级助手预设，但核心聊天功能没有订阅费或付费门槛。',
          },
          {
            q: 'PocketPal AI 是谁开发的？',
            a: 'PocketPal AI 由 Asghar Ghorbani 创建，他最初将其作为个人项目，用于在自己的手机上运行小型语言模型，在引起外界关注后将代码开源。该项目由个人独立维护，而非公司运营。',
          },
          {
            q: 'PocketPal AI 是开源的吗？',
            a: '是的，完整源代码基于 MIT 许可证发布在 [GitHub](https://github.com/a-ghorbani/pocketpal-ai) 上，这是一种允许自由使用、修改和再分发的宽松许可证。',
          },
          {
            q: 'PocketPal AI 可以运行哪些模型？',
            a: 'PocketPal AI 支持一键下载 Gemma 2、Qwen、Phi 和 Danube 3，此外还可以加载在 Hugging Face 上找到的任何其他 GGUF 格式模型，包括在同意其许可条款后可访问的受限模型。',
          },
          {
            q: 'PocketPal AI 支持 iPhone 和 Android 吗？',
            a: '是的。PocketPal AI 可在 [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) 上供 iPhone 和 iPad 下载，也可在 [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai) 上供 Android 下载。目前没有 Mac、Windows 或 Linux 版本。',
          },
          {
            q: 'PocketPal AI 需要多少内存？',
            a: '这取决于你选择的模型，而非应用的固定要求。作为手机上量化 GGUF 模型的一般参考，20 亿到 40 亿参数模型通常需要 3-4GB 空闲内存，70 亿到 80 亿参数模型通常需要 8GB 或以上。内存更大的设备可以运行更大、更强的模型。',
          },
          {
            q: 'PocketPal AI 需要联网吗？',
            a: '下载模型后，聊天无需联网——推理完全通过 llama.cpp 在设备上进行。初次下载模型需要联网，若要使用应用的互联网搜索功能（需要用户自行提供来自 Brave、Tavily 或 Exa 等提供商的 API 密钥）也需要联网，但这是可选功能。',
          },
          {
            q: 'PocketPal AI 用于私密对话安全吗？',
            a: '由于推理在本地进行，且源代码基于 MIT 许可证公开、可供审计，PocketPal AI 无需将聊天内容发送到服务器即可运行。本测评并未对该应用进行独立的安全审计；需要这种保障级别的用户应自行查看公开仓库及其问题跟踪记录。',
          },
          {
            q: 'PocketPal AI 与 Private LLM 或 Loci 相比如何？',
            a: 'PocketPal AI 免费开源，可不受限制地加载 GGUF 模型；而 Private LLM 是一款付费、闭源、仅限 Apple 设备的应用，内置更大的模型目录（140 多个模型）；Loci 则是一款跨五个平台的闭源应用，拥有更小、更精选的模型库。如果费用和开放性最重要，选择 PocketPal AI；如果比起免费或开源，你更看重跨更多平台、更有引导性且更打磨的体验，选择 Private LLM 或 Loci。详情参见上方对比表。',
          },
          {
            q: '我可以在 PocketPal AI 上运行 700 亿参数这样的大模型吗？',
            a: '不可以。即使是当前的旗舰机型，手机硬件也没有足够的内存来实际支撑该规模模型的本地运行。PocketPal AI 是为中小型模型（大约最多 80 亿参数）设计的；需要更大模型的用户应改用台式工作站或云端 API。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'PocketPal AI 之所以能在移动端本地 AI 应用中占有一席之地，是因为它真正免费、真正开源，并且在可运行模型的选择上真正灵活——这三点在这一类别中各自都很罕见，同时具备则更加少见。它并非该领域打磨得最精致的应用：用户需要自行管理模型下载，界面在灵活性与引导性之间有所取舍，项目由一名开发者利用业余时间维护，而非由拥有支持团队的公司运营。如果你想在自己的手机上运行开放权重模型，不想要订阅、也不想被供应商绑定，并且愿意自己选择适合设备的模型，那么 PocketPal AI 是合适的选择。如果你更愿意用一些费用和开放性来换取更有引导性的设置流程以及跨更多平台的专属支持，那么应改选 Private LLM 或 Loci 这类付费精选应用。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[PocketPal AI GitHub 仓库](https://github.com/a-ghorbani/pocketpal-ai) —— 本测评引用的源代码、许可证（MIT）、发布历史以及星标/分叉数量。',
          '[PocketPal AI 入门文档](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) —— 设置步骤、内置模型以及 GPU 加速相关说明。',
          '[App Store 上的 PocketPal AI](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) —— iOS/iPadOS 可用性。',
          '[Google Play 上的 PocketPal AI](https://play.google.com/store/apps/details?id=com.pocketpalai) —— Android 可用性。',
          '[《PocketPal AI: Tiny LLMs in the Pocket》，Asghar Ghorbani 著，Medium](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75) —— 项目起源与开发者动机。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[2026年Android最佳本地LLM应用](/power-local-llm/best-local-llm-apps-android-2026) —— Android 应用综述，包括 PocketPal AI、MLC Chat、Maid 和 Layla。',
          '[2026年iPhone最佳本地LLM应用](/power-local-llm/best-local-llm-apps-iphone-2026) —— iOS 对应篇，对比 PocketPal AI 与 Private LLM、Enclave AI。',
          '[Loci测评：适用于iPhone、Android、iPad、Mac和Windows的离线AI](/power-local-llm/loci-ai-review-offline-local-ai) —— 一款跨五个平台的付费闭源替代方案，配备精选模型库。',
          '[2026年最佳移动端LLM模型：Phi-4 Mini对比Gemma 4对比SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) —— 模型层面的配套文章，帮你选择真正适合手机的 GGUF 模型。',
          '[Enclave AI测评](/power-local-llm/enclave-ai-review) —— 一款配备 Siri 和 Shortcuts 自动化功能的 Apple 专属替代方案。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PocketPal AI 测评（2026）：免费开源的本地设备端聊天应用',
      description:
        'PocketPal AI 测评：一款免费的 MIT 开源应用，可在 iPhone 和 Android 上本地运行 GGUF 模型。模型、所需内存、价格及适用人群一览。',
      url: 'https://promptquorum.com/zh/power-local-llm/pocketpal-ai-review',
      inLanguage: 'zh',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估免费开源本地AI聊天应用的注重隐私的iPhone和Android用户' },
      about: [
        { '@type': 'Thing', name: 'PocketPal AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: '开源软件' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/pocketpal-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PocketPal AI 测评（2026）', item: 'https://promptquorum.com/zh/power-local-llm/pocketpal-ai-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocketpal-ai-review-hero-ko.webp',
    title: 'PocketPal AI 리뷰(2026): 무료 오픈소스 온디바이스 채팅 앱',
    seoTitle: 'PocketPal AI 2026 리뷰: 무료 오픈소스 로컬 채팅',
    intro:
      'PocketPal AI는 iPhone, iPad, Android용 무료 MIT 라이선스 오픈소스 앱으로, GGUF 언어 모델을 서버 왕복이나 채팅용 계정 없이 기기에서 직접 실행합니다. 개발자는 Asghar Ghorbani이며, 개인 프로젝트로 시작한 뒤 [GitHub](https://github.com/a-ghorbani/pocketpal-ai)에 코드를 공개했습니다. 이 리뷰에서는 현재 앱이 제공하는 기능, 기본 탑재 모델, 실제 하드웨어 요구사항, 실제 가격 정책(기본 앱은 무료이며, PalsHub라는 선택적 커뮤니티 마켓플레이스가 프리미엄 프리셋을 판매합니다), 그리고 누구에게 적합하고 누구에게는 적합하지 않은지를 다룹니다.',
    metaDescription:
      'PocketPal AI 리뷰: iPhone과 Android에서 GGUF 모델을 로컬로 실행하는 무료 MIT 오픈소스 앱. 지원 모델, 필요 RAM, 가격, 적합한 사용자를 정리했습니다.',
    twitterDescription:
      'PocketPal AI 2026 리뷰: iPhone과 Android에서 기기 내 GGUF 모델을 실행하는 무료 오픈소스 앱. 제공 기능, 비용, 적합한 사용자를 정리했습니다.',
    audience:
      '상업용 앱에 비용을 지불하지 않고 오픈 웨이트 모델을 로컬에서 실행하려는 프라이버시 중시 iPhone·Android 사용자.',
    readTime: '10분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'PocketPal AI 리뷰',
    targetKeywords: [
      'pocketpal ai 리뷰',
      'pocketpal ai android',
      'pocketpal ai iphone',
      'pocketpal ai 모델',
      'pocketpal ai vs private llm',
      '무료 로컬 ai 앱',
      '오픈소스 로컬 ai 앱',
      '스마트폰 gguf 모델 실행',
    ],
    current_models_mentioned: ['Gemma 2', 'Qwen', 'Phi', 'Danube 3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android'],
    leadAnswerBlock:
      '**PocketPal AI는 GGUF 언어 모델을 iPhone, iPad 또는 Android 기기에서 완전히 실행하는 무료 오픈소스(MIT 라이선스) 앱으로, 채팅에 클라우드 의존성이 없습니다.** 개발자 Asghar Ghorbani가 만들었으며 [GitHub](https://github.com/a-ghorbani/pocketpal-ai)에서 호스팅되고 있습니다(리뷰 시점 기준 8,000개 이상의 스타). Gemma 2, Qwen, Phi, Danube 3 등의 모델을 원탭으로 다운로드할 수 있으며, Hugging Face에서 받은 다른 GGUF 파일도 불러올 수 있습니다. 기본 앱은 무료이며, PalsHub라는 선택적 인앱 마켓플레이스가 프리미엄 어시스턴트 프리셋을 판매하지만, 다운로드한 모델과의 채팅 자체는 무료입니다.',
    quickAnswerTop: {
      ko: {
        question: '프라이빗하고 오프라인으로 작동하는 AI 채팅을 위해 PocketPal AI를 설치할 가치가 있습니까?',
        answer:
          '네, 자신의 스마트폰에서 오픈 웨이트 모델을 진정으로 무료이자 오픈소스 방식으로 실행하고 싶고 모델 다운로드를 직접 관리하는 데 거리낌이 없다면 가치가 있습니다. PocketPal AI는 채팅 기능에 구독료가 없고 GitHub에 전체 소스 코드를 공개하며, 고정 목록이 아닌 임의의 GGUF 모델을 지원합니다. 설정이 필요 없는 완성된 경험을 원하는 사용자보다는 기술적 호기심이 있는 사용자에게 더 적합합니다. Loci나 Private LLM은 유연성 대신 더 안내된 설정을 제공합니다.',
        bullets: [
          'MIT 라이선스로 무료 오픈소스 — 로컬 모델과의 채팅에 구독료가 없습니다.',
          '[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)(iPhone/iPad)와 [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)(Android)에서 이용 가능합니다.',
          'Gemma 2, Qwen, Phi, Danube 3를 원탭으로 다운로드할 수 있으며, Hugging Face의 커스텀 GGUF 파일도 지원합니다.',
          '자금을 지원받는 기업이 아니라 Asghar Ghorbani 한 사람이 개인 오픈소스 프로젝트로 개발했습니다.',
          '선택적 PalsHub 마켓플레이스는 인앱 구매로 프리미엄 어시스턴트 프리셋을 판매하지만, 기본 채팅 앱 자체에는 어떠한 결제 장벽도 없습니다.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'PocketPal AI란 무엇인가?', anchor: 'what-is-pocketpal-ai' },
      { label: 'PocketPal AI는 누가 만들었는가?', anchor: 'history-and-developer' },
      { label: 'PocketPal AI 시작하는 방법', anchor: 'getting-started' },
      { label: 'PocketPal AI가 지원하는 모델은?', anchor: 'models-supported' },
      { label: 'PocketPal AI는 iPhone과 Android에서 사용 가능한가?', anchor: 'platform-availability' },
      { label: 'PocketPal AI의 가격은?', anchor: 'pricing' },
      { label: 'PocketPal AI의 기능은?', anchor: 'key-features' },
      { label: '어떤 하드웨어가 필요한가?', anchor: 'hardware-requirements' },
      { label: 'PocketPal AI에 적합한 사용자', anchor: 'who-should-use' },
      { label: 'PocketPal AI에 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: 'PocketPal AI와 대안 비교', anchor: 'vs-alternatives' },
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
            text: 'PocketPal AI는 iPhone, iPad, Android용 무료 MIT 오픈소스 앱으로, GGUF 언어 모델을 기기에서 직접 다운로드하고 실행하며, 개발자 Asghar Ghorbani가 만들고 유지 관리합니다.',
          },
          {
            type: 'plain-terms',
            text: '회사 서버가 아니라 자신의 스마트폰에서 실행되는 AI와 채팅하기 위해 설치하는 앱입니다. 코드는 GitHub에 공개되어 있고, 앱 자체는 무료이며, 단일 공급업체에 묶이는 대신 다운로드할 모델을 직접 선택할 수 있습니다.',
          },
        ],
        items: [
          '무료 오픈소스(MIT 라이선스); 소스 코드와 이슈 트래커가 [GitHub](https://github.com/a-ghorbani/pocketpal-ai)에 공개되어 있습니다.',
          'Asghar Ghorbani가 개인 프로젝트로 시작했으며, 관심을 끈 뒤 오픈소스로 공개했습니다.',
          'llama.cpp를 통해 GGUF 모델을 기기에서 완전히 실행합니다 — 계정도, 채팅을 위한 서버 왕복도 필요 없습니다.',
          'Gemma 2, Qwen, Phi, Danube 3를 원탭으로 다운로드할 수 있으며, Hugging Face의 다른 GGUF 모델은 수동으로 불러올 수 있습니다.',
          'App Store(iPhone/iPad)와 Google Play(Android)에서 이용 가능합니다. Mac, Windows, Linux 버전은 없습니다.',
          '기본 앱에는 구독료가 없습니다. 선택적 PalsHub 마켓플레이스가 인앱 구매로 프리미엄 어시스턴트 프리셋을 판매합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 공개된 [GitHub 저장소](https://github.com/a-ghorbani/pocketpal-ai), 프로젝트 자체 문서, App Store 및 Google Play 등록 정보를 바탕으로 하며, 2026년 9월에 확인했습니다. PromptQuorum은 이 리뷰를 위해 PocketPal AI에 대한 자체 실측 벤치마크를 실시하지 않았습니다 — 아래의 성능 수치는 이 앱에 특화된 측정치가 아니라 로컬 LLM 전반에 대한 일반적인 하드웨어 가이드입니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-pocketpal-ai',
        title: 'PocketPal AI란 무엇인가?',
        content: [
          '**PocketPal AI는 GGUF 형식의 오픈 웨이트 언어 모델을 다운로드하여 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 추론 엔진으로 사용해 iPhone, iPad 또는 Android 기기에서 로컬로 실행하는 모바일 앱입니다.** 앱 자체는 React Native로 만들어졌으며 [MIT 라이선스](https://github.com/a-ghorbani/pocketpal-ai/blob/main/LICENSE)로 공개되어 있어, 전체 소스 코드를 자유롭게 살펴보고 포크하거나 수정할 수 있습니다.',
          '고정된 큐레이션 모델 목록에 사용자를 가두는 앱과 달리, PocketPal AI는 앱이 원탭으로 가져올 수 있는 모델 중에서 선택하거나 [Hugging Face](https://huggingface.co)에서 찾은 임의의 GGUF 파일을 가져올 수 있게 해줍니다. 여기에는 라이선스 조건에 동의한 후 접근할 수 있는 게이트형 모델도 포함됩니다. 이 유연성이 앱의 핵심 특징으로, 단일 공급업체 제품이라기보다 채팅 UI를 갖춘 범용 GGUF 런타임처럼 작동합니다.',
        ],
        note: 'GGUF는 양자화된 오픈 웨이트 언어 모델을 패키징하여, 매 응답마다 클라우드 API를 호출하는 대신 llama.cpp와 같은 런타임을 통해 소비자용 하드웨어에서 효율적으로 실행할 수 있도록 하는 파일 형식입니다.',
      },
      history: {
        id: 'history-and-developer',
        title: 'PocketPal AI는 누가 만들었는가?',
        content: [
          '**PocketPal AI는 자신의 스마트폰에서 소형 언어 모델을 실행하기 위한 개인 프로젝트로 시작한 Asghar Ghorbani가 만들었으며, 외부의 관심을 끈 뒤 오픈소스로 공개했습니다.** Ghorbani는 [Medium 게시물 "PocketPal AI: Tiny LLMs in the Pocket"](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75)에서 프로젝트의 기원과 동기를 설명하며, 소형 언어 모델의 힘을 그대로 주머니에 넣는 것이 목표였다고 밝혔습니다.',
          '이 프로젝트는 자금을 지원받는 회사나 전담 팀이 아니라 개발자의 여가 시간에 유지 관리됩니다 — 저장소 자체의 시작 문서에도 이 점이 명시되어 있으며, 기업 수준의 지원 응답 속도를 기대하기 전에 알아둘 만한 사실입니다. GitHub 저장소([a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai))는 이 리뷰 시점 기준 8,000개 이상의 스타와 850개 이상의 포크를 축적했으며, 새로운 모델 지원, UI 변경, 인터넷 검색 연동·채팅 고정·Markdown 내보내기 같은 기능 추가를 포함한 정기적인 릴리스를 계속 받고 있습니다.',
        ],
        items: [
          '개발자: Asghar Ghorbani(GitHub: [a-ghorbani](https://github.com/a-ghorbani)), 기업이 아닌 독립적으로 활동.',
          '기기에서 소형 언어 모델을 실행하기 위한 개인 프로젝트로 시작; 대중의 관심을 얻은 뒤 오픈소스로 공개.',
          '라이선스: MIT — 자유로운 사용, 수정, 재배포를 허용하는 관대한 라이선스.',
          '이 리뷰 시점 기준 GitHub 스타 8,000개 이상, 포크 850개 이상, 활발한 이슈 트래커와 풀 리퀘스트 이력.',
          '개발 속도: 런타임 업데이트, 새로운 UI 기능, 확장된 언어 지원을 담은 잦은 포인트 릴리스를 자원봉사 기반으로 유지 관리.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'PocketPal AI 시작하는 방법',
        content: [
          '**프로젝트 자체의 [시작 가이드 문서](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md)에 따르면, 설치 후 네 단계만 거치면 로컬 채팅을 사용할 수 있습니다.** 계정 생성이나 로그인은 필요 없으며, 전체 과정이 기기 내에서 이루어집니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치하기',
            whyItMatters: 'iPhone/iPad에서는 [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)에서, Android에서는 [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)에서 PocketPal AI를 다운로드합니다. 앱을 여는 데 계정이나 이메일 가입이 필요하지 않습니다.',
          },
          {
            title: '모델 페이지 열기',
            whyItMatters: '앱 메뉴에서 모델 탭으로 이동하면 Gemma 2, Qwen, Phi, Danube 3와 같은 원탭 다운로드 모델 목록과 커스텀 GGUF 파일을 가져오는 옵션을 볼 수 있습니다.',
          },
          {
            title: '모델 다운로드하기',
            whyItMatters: '기기의 RAM에 맞는 크기의 모델을 선택(아래 하드웨어 섹션 참조)하여 다운로드합니다. 더 크고 성능이 좋은 모델일수록 다운로드 시간이 길어지고 기기 저장 공간을 더 많이 사용합니다.',
          },
          {
            title: '모델을 불러와 채팅 시작하기',
            whyItMatters: '"Load"를 탭해 다운로드한 모델을 메모리로 불러온 뒤 Chat 페이지로 전환합니다. 모델이 로드되면 모든 추론이 기기에서 이루어집니다 — PocketPal AI의 "Auto Offload/Load" 기능은 앱이 백그라운드로 전환될 때 메모리를 절약하기 위해 모델을 자동으로 언로드하고, 다시 돌아왔을 때 재로드할 수 있습니다.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'PocketPal AI가 지원하는 모델은?',
        itemHeadings: true,
        columns: ['모델 계열', '접근 방식', '주요 용도'],
        rows: [
          {
            '모델 계열': 'Gemma 2',
            '접근 방식': '앱 내 원탭 다운로드',
            '주요 용도': '일반 채팅; Google의 오픈 웨이트 모델 계열',
          },
          {
            '모델 계열': 'Qwen',
            '접근 방식': '앱 내 원탭 다운로드',
            '주요 용도': '일반 채팅과 추론; Alibaba의 오픈 웨이트 모델 계열',
          },
          {
            '모델 계열': 'Phi',
            '접근 방식': '앱 내 원탭 다운로드',
            '주요 용도': '경량 추론; Microsoft의 소형 모델 계열',
          },
          {
            '모델 계열': 'Danube 3',
            '접근 방식': '앱 내 원탭 다운로드',
            '주요 용도': '경량 채팅; H2O.ai의 소형 모델 계열',
          },
          {
            '모델 계열': '기타 모든 GGUF 모델',
            '접근 방식': '앱 내 Hugging Face Hub 검색을 통한 수동 가져오기, 라이선스 조건 동의 후 게이트형 모델 포함',
            '주요 용도': '원탭 다운로드 목록에 없는 커스텀 또는 틈새 모델',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'PocketPal AI는 iPhone과 Android에서 사용 가능한가?',
        itemHeadings: true,
        columns: ['플랫폼', '이용 가능 여부', '참고 사항'],
        rows: [
          {
            '플랫폼': 'iPhone / iPad',
            '이용 가능 여부': '[App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)에서 이용 가능',
            '참고 사항': '기본적으로 Apple의 Metal GPU API를 사용해 가속하며, 특정 기기에서 불안정할 경우 앱 내에서 비활성화할 수 있습니다.',
          },
          {
            '플랫폼': 'Android',
            '이용 가능 여부': '[Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)에서 이용 가능',
            '참고 사항': '최근 릴리스에서는 호환 칩셋을 위한 Qualcomm Hexagon NPU 가속 백엔드가 복원되었으며, 표준 CPU 추론도 지원합니다.',
          },
          {
            '플랫폼': 'Mac / Windows / Linux',
            '이용 가능 여부': '이 리뷰 시점 기준 데스크톱 버전은 발견되지 않음',
            '참고 사항': 'PocketPal AI는 모바일 전용 앱입니다. 로컬 GGUF 채팅 데스크톱 클라이언트를 찾는 사용자는 Ollama, LM Studio 또는 Jan AI를 고려해야 합니다.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'PocketPal AI의 가격은?',
        content: [
          '**PocketPal AI는 다운로드가 무료이며, 로컬에 다운로드한 모델과의 채팅도 무료입니다 — 구독료가 없으며 소스 코드는 MIT 라이선스로 공개되어 있습니다.** 앱에서 발견된 유일한 유료 구성 요소는 PalsHub로, 커뮤니티 회원이 프리미엄 "Pals"(맞춤형 어시스턴트 프리셋)를 게시하고 판매할 수 있는 인앱 마켓플레이스입니다. PalsHub의 인앱 구매는 지역에 따라 iOS와 Android 모두에서 이용 가능합니다.',
          '앱과 모델 실행 기능이 오픈소스이자 무료이므로, 사용자에게 발생하는 유일한 지속적 비용은 GGUF 모델 파일을 다운로드하는 데 필요한 저장 공간과 대역폭입니다 — 양자화된 30~40억 매개변수 모델은 일반적으로 몇 기가바이트 정도이며, 더 큰 모델은 그에 비례해 더 큽니다.',
        ],
        items: [
          '**기본 앱:** 무료, 구독 없음, MIT 라이선스 오픈소스 소프트웨어.',
          '**다운로드한 모델과의 채팅:** 무료 — 추론이 자신의 기기에서 실행되므로 메시지나 토큰당 요금이 없습니다.',
          '**PalsHub 마켓플레이스:** 커뮤니티가 제작한 프리미엄 어시스턴트 프리셋에 대한 선택적 인앱 구매이며, 기본 채팅 기능에는 필요하지 않습니다.',
          '**저장 비용:** 금전적이지는 않지만 실질적인 비용입니다 — 다운로드한 각 GGUF 모델은 기기 저장 공간을 차지하며, 일반적으로 모델당 몇 기가바이트입니다.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'PocketPal AI의 기능은?',
        content: [
          '**기본적인 로컬 채팅 외에도, PocketPal AI는 릴리스 이력을 거치며 더 성숙한 로컬 AI 앱에서 흔히 볼 수 있는 여러 기능을 점진적으로 갖추게 되었습니다.** 다음과 같은 기능이 포함됩니다.',
        ],
        items: [
          '**Pals와 PalsHub.** "Pals"는 시스템 프롬프트, 모델, 동작을 하나로 묶은 맞춤형 어시스턴트 프리셋이며, PalsHub는 사용자가 자신만의 Pals를 공유하거나 판매할 수 있는 마켓플레이스입니다.',
          '**Talents(도구 호출).** 이 앱은 단순한 텍스트 생성이 아니라, 대화 도중 모델이 정의된 도구를 호출할 수 있는 에이전트형 흐름을 지원합니다.',
          '**채팅 내 인터넷 검색.** 최근 릴리스에서는 Brave, Tavily, Exa 같은 제공업체의 사용자 자체 API 키를 사용해 채팅에서 웹을 검색할 수 있습니다 — 이는 선택 사항이며 내장된 검색 서비스가 아니라 사용자 본인의 키가 필요합니다.',
          '**텍스트 음성 변환(TTS).** 이 앱은 응답을 소리 내어 읽어줄 수 있으며, 최근 릴리스에서 지원 언어가 확대되고 있습니다.',
          '**채팅 고정 및 Markdown 내보내기.** 대화를 고정해 빠르게 접근하거나 Markdown 파일로 내보낼 수 있습니다.',
          '**추측 디코딩(실험적).** 더 작은 "초안" 모델을 더 큰 모델과 결합해 생성 속도를 높일 수 있으며, 프로젝트 자체에서 안정적인 보장이 아니라 실험적 기능으로 표시하고 있습니다.',
          '**벤치마크 도구.** 이 앱에는 현재 기기에서 모델 성능을 벤치마크하는 방법이 포함되어 있어, 자신의 스마트폰에서 서로 다른 양자화 수준의 성능을 비교하는 데 유용합니다.',
        ],
        note: '프로젝트가 잦은 점진적 릴리스를 내놓기 때문에, 기능의 이용 가능 여부는 앱 버전과 플랫폼(iOS 대 Android)에 따라 다를 수 있습니다. 설치된 버전에서 어떤 기능이 활성화되어 있는지는 앱 내 변경 로그나 [GitHub 릴리스 페이지](https://github.com/a-ghorbani/pocketpal-ai/releases)를 확인하세요.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'PocketPal AI를 실행하려면 어떤 하드웨어가 필요한가?',
        content: [
          '**실제 하드웨어 하한선을 결정하는 것은 앱 자체가 아니라 선택한 모델입니다 — 스마트폰의 GGUF 모델에 대한 일반적인 기준으로, 양자화된 20~40억 매개변수 모델은 약 3~4GB의 여유 RAM이 필요하고, 70~80억 매개변수 모델은 6~8GB 이상이 필요합니다.** 이는 로컬 LLM 전반에 대한 일반적인 규격 가이드이며 PocketPal에 특화된 벤치마크가 아닙니다. PromptQuorum은 모델별 PocketPal AI의 정확한 메모리 사용량을 독자적으로 측정하지 않았습니다.',
          'iPhone과 iPad에서는 앱이 기본적으로 Apple의 Metal GPU API를 사용하며, 이는 일반적으로 Apple 실리콘 기기에서 CPU만 사용하는 경우보다 추론 속도를 향상시킵니다. Android에서는 최근 릴리스에서 호환 칩셋을 위한 Qualcomm Hexagon NPU 가속 백엔드 지원이 추가되었습니다. 지원되는 NPU가 없는 기기는 CPU 추론으로 대체되며, 대형 모델의 경우 눈에 띄게 느려집니다.',
        ],
        items: [
          '소형 모델(20~40억 매개변수, 양자화됨): 최근 몇 년 사이 출시된 여유 RAM 4GB 이상의 대부분 스마트폰에서 사용 가능.',
          '중형 모델(70~80억 매개변수, 양자화됨): 만족스러운 응답성을 위해 기기 RAM 8GB 이상 권장.',
          '저장 공간: 다운로드한 모델 파일당 여러 기가바이트의 여유 저장 공간을 확보해 두어야 합니다.',
          '더 빠른 추론: Apple 실리콘을 탑재한 iPhone/iPad(Metal 가속)나 호환되는 Qualcomm Hexagon NPU를 탑재한 최신 Android 기기는 CPU만으로 실행하는 구형 또는 보급형 하드웨어보다 뛰어난 성능을 냅니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'PocketPal AI에 적합한 사용자',
        items: [
          '**구독 비용을 전혀 원하지 않는 프라이버시 중시 사용자.** 지속적인 요금이나 계정 없이 오픈 웨이트 모델을 실행하는 것이 목표라면, MIT 라이선스의 무료 기본 앱인 PocketPal AI가 바로 부합합니다.',
          '**고정 목록을 넘어 다양한 모델을 시도해보고 싶은 사용자.** 앱이 원탭 다운로드 목록뿐 아니라 Hugging Face의 임의 GGUF 파일도 불러올 수 있으므로, 이미 특정 모델을 염두에 둔 사용자에게 적합합니다.',
          '**오픈소스 프로젝트에 익숙한 개발자와 기술적 호기심이 있는 사용자.** 공개된 GitHub 저장소, 이슈 트래커, 잦은 릴리스는 전담 고객 지원을 기대하기보다는 릴리스 노트를 읽거나 이슈를 제출할 의향이 있는 사용자에게 적합합니다.',
          '**직접 코드를 검토하거나 수정하고 싶은 사용자.** MIT 라이선스는 포크와 수정을 허용하며, 이는 프라이빗한 대화를 맡기기 전에 앱이 정확히 무엇을 하는지 감사하고 싶은 사람에게 중요합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'PocketPal AI에 적합하지 않은 사용자',
        items: [
          '**설정 없이 완전히 안내받는 경험을 원하는 사용자.** 자신의 기기에 맞는 모델 크기를 선택하고 다운로드를 직접 관리하는 것이 워크플로의 일부입니다. 이 결정을 앱에 맡기고 싶은 사용자는 Loci와 같은 더 큐레이션된 앱을 선호할 수 있습니다.',
          '**Mac, Windows, Linux 지원이 필요한 사용자.** PocketPal AI는 모바일 전용(iPhone/iPad, Android)입니다. 데스크톱 사용자는 Ollama, LM Studio, Jan AI를 고려해야 합니다.',
          '**가장 요구사항이 높은 모델(700억 매개변수 이상)을 원하는 사용자.** 최신 플래그십 기기라도 스마트폰 하드웨어로는 그 규모의 모델을 로컬에서 실제로 실행할 수 없습니다. 어떤 모바일 앱을 사용하든 이러한 워크로드에는 데스크톱, 워크스테이션 또는 클라우드 API가 필요합니다.',
          '**전담 상업 지원을 기대하는 사용자.** 프로젝트 자체 문서에 따르면 PocketPal AI는 한 명의 개발자가 여가 시간에 유지 관리합니다. 보장된 응답 시간이나 엔터프라이즈 지원 계약이 필요한 사용자는 상업적으로 뒷받침되는 대안을 찾아야 합니다.',
          '**기기 간 내장 클라우드 동기화를 원하는 사용자.** 설계상 추론과 채팅 기록이 각 기기에 로컬로 유지되므로, PocketPal AI는 클라우드 기반 채팅 앱처럼 iPhone과 Android 기기 간에 계정 기반의 내장 동기화를 제공하지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'PocketPal AI와 대안 비교',
        itemHeadings: true,
        columns: ['앱', '라이선스 / 비용', '플랫폼', '모델 유연성'],
        rows: [
          {
            '앱': 'PocketPal AI',
            '라이선스 / 비용': '무료, 오픈소스(MIT)',
            '플랫폼': 'iPhone/iPad, Android',
            '모델 유연성': '원탭 다운로드 목록(Gemma 2, Qwen, Phi, Danube 3)과 Hugging Face의 임의 GGUF 파일',
          },
          {
            '앱': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            '라이선스 / 비용': '무료 등급 + 유료 등급; 클로즈드소스',
            '플랫폼': 'iPhone/iPad/Android/Mac/Windows(5개 플랫폼)',
            '모델 유연성': '큐레이션된 라이브러리(약 10개 모델); 커스텀 GGUF 파일 가져오기 불가',
          },
          {
            '앱': 'Private LLM',
            '라이선스 / 비용': '유료, 일회성 구매; 클로즈드소스',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '모델 유연성': '140개 이상의 모델, OmniQuant 및 GPTQ 양자화 형식 지원',
          },
          {
            '앱': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            '라이선스 / 비용': '무료 + 유료 등급; 클로즈드소스',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '모델 유연성': '기기 내 큐레이션된 모델 목록; Siri 및 단축어 연동',
          },
          {
            '앱': '[Locally AI](/power-local-llm/locally-ai-review)',
            '라이선스 / 비용': '무료; 클로즈드소스',
            '플랫폼': 'iPhone/iPad',
            '모델 유연성': 'App Store 등록 정보 기준 큐레이션된 모델 목록',
          },
          {
            '앱': 'ChatterUI',
            '라이선스 / 비용': '무료, 오픈소스(AGPL-3.0)',
            '플랫폼': 'Android(소스에서 직접 빌드)',
            '모델 유연성': 'llama.cpp를 통해 기기에서 GGUF 파일 실행 또는 원격 API 연결; Character Card v2 지원',
          },
          {
            '앱': 'RikkaHub',
            '라이선스 / 비용': '무료, 오픈소스',
            '플랫폼': 'Android',
            '모델 유연성': '멀티 제공업체 클라이언트; Gemma, Qwen 같은 모델을 위한 LiteRT 제공업체를 통한 기기 내 로컬 추론',
          },
          {
            '앱': 'MLC Chat(MLC-LLM)',
            '라이선스 / 비용': '무료, 오픈소스(Apache 2.0)',
            '플랫폼': 'iPhone/iPad, Android',
            '모델 유연성': '원시 GGUF 파일이 아니라 MLC 런타임용으로 컴파일된 모델을 실행',
          },
        ],
        note: '한때 인기 있던 오픈소스 iOS GGUF 채팅 앱인 LLM Farm은 이 리뷰 시점 기준 App Store에서 삭제되었으며 자체 GitHub 저장소에서도 "일시적으로 사용 불가"로 표시되어 있어, 위의 현재 추천 목록에서 제외했습니다. 또 다른 기기 내 AI 어시스턴트 앱인 Layla는 무료 등급인 "Layla Lite"가 Google Play에서 삭제되었다는 보도가 있으므로, 설치 가능하다고 가정하기 전에 [layla-network.ai](https://www.layla-network.ai)에서 최신 이용 가능 여부를 직접 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'PocketPal AI는 무료입니까?',
            a: '네. PocketPal AI는 다운로드가 무료이며 다운로드한 모델과의 채팅도 무료이고, 이 앱은 MIT 라이선스로 오픈소스입니다. 선택적 인앱 마켓플레이스인 PalsHub가 커뮤니티가 제작한 프리미엄 어시스턴트 프리셋을 판매하지만, 핵심 채팅 기능에는 구독료나 결제 장벽이 없습니다.',
          },
          {
            q: 'PocketPal AI는 누가 개발했습니까?',
            a: 'PocketPal AI는 Asghar Ghorbani가 만들었습니다. 그는 자신의 스마트폰에서 소형 언어 모델을 실행하기 위한 개인 프로젝트로 시작했으며, 외부의 관심을 끈 뒤 코드를 오픈소스로 공개했습니다. 기업이 아닌 독립적으로 유지 관리됩니다.',
          },
          {
            q: 'PocketPal AI는 오픈소스입니까?',
            a: '네, 전체 소스 코드가 MIT 라이선스로 [GitHub](https://github.com/a-ghorbani/pocketpal-ai)에 공개되어 있습니다. MIT는 자유로운 사용, 수정, 재배포를 허용하는 관대한 라이선스입니다.',
          },
          {
            q: 'PocketPal AI는 어떤 모델을 실행할 수 있습니까?',
            a: 'PocketPal AI는 Gemma 2, Qwen, Phi, Danube 3를 원탭으로 다운로드할 수 있으며, 이 외에도 Hugging Face에서 찾은 다른 GGUF 형식 모델을 라이선스 조건에 동의한 후 게이트형 모델을 포함해 불러올 수 있습니다.',
          },
          {
            q: 'PocketPal AI는 iPhone과 Android에서 작동합니까?',
            a: '네. PocketPal AI는 iPhone과 iPad용으로 [App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)에서, Android용으로 [Google Play](https://play.google.com/store/apps/details?id=com.pocketpalai)에서 이용할 수 있습니다. Mac, Windows, Linux 버전은 없습니다.',
          },
          {
            q: 'PocketPal AI에는 얼마나 많은 RAM이 필요합니까?',
            a: '이는 앱의 고정 요구사항이 아니라 선택한 모델에 따라 달라집니다. 스마트폰의 양자화된 GGUF 모델에 대한 일반적인 기준으로, 20~40억 매개변수 모델은 일반적으로 3~4GB의 여유 RAM이, 70~80억 매개변수 모델은 일반적으로 8GB 이상이 필요합니다. RAM이 더 많은 기기는 더 크고 성능이 좋은 모델을 실행할 수 있습니다.',
          },
          {
            q: 'PocketPal AI는 인터넷 연결이 필요합니까?',
            a: '모델을 다운로드한 후에는 채팅에 인터넷 연결이 필요하지 않으며, 추론은 llama.cpp를 통해 완전히 기기에서 이루어집니다. 최초 모델 다운로드에는 인터넷 연결이 필요하며, 선택적으로 앱의 인터넷 검색 기능(예: Brave, Tavily, Exa 같은 제공업체의 사용자 자체 API 키 필요)을 사용할 때도 필요합니다.',
          },
          {
            q: 'PocketPal AI는 프라이빗한 대화에 안전합니까?',
            a: '추론이 로컬에서 이루어지고 소스 코드가 MIT 라이선스로 공개되어 감사가 가능하므로, PocketPal AI는 작동하기 위해 채팅 내용을 서버로 보낼 필요가 없습니다. 이 리뷰에서는 앱에 대한 독자적인 보안 감사를 수행하지 않았습니다. 그 수준의 보증이 필요한 사용자는 공개 저장소나 이슈 트래커를 직접 확인해야 합니다.',
          },
          {
            q: 'PocketPal AI는 Private LLM이나 Loci와 비교하면 어떻습니까?',
            a: 'PocketPal AI는 무료이자 오픈소스이며 GGUF 모델 불러오기에 제한이 없는 반면, Private LLM은 더 큰 내장 모델 카탈로그(140개 이상)를 갖춘 유료 클로즈드소스 Apple 전용 앱이고, Loci는 다섯 개 플랫폼을 아우르지만 더 작고 큐레이션된 모델 라이브러리를 갖춘 클로즈드소스 앱입니다. 비용과 개방성이 가장 중요하다면 PocketPal AI를, 무료나 오픈소스보다 더 많은 플랫폼에서 더 안내되고 완성도 높은 경험이 중요하다면 Private LLM이나 Loci를 선택하세요. 자세한 내용은 위의 비교표를 참조하세요.',
          },
          {
            q: 'PocketPal AI에서 700억 매개변수 같은 대형 모델을 실행할 수 있습니까?',
            a: '아니요. 최신 플래그십 기기를 포함해 스마트폰 하드웨어는 그 규모의 모델을 로컬에서 실제로 실행할 만큼 충분한 RAM을 갖추고 있지 않습니다. PocketPal AI는 소형 및 중형 모델(약 80억 매개변수까지)을 위해 설계되었습니다. 더 큰 모델이 필요한 사용자는 대신 데스크톱 워크스테이션이나 클라우드 API를 사용해야 합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'PocketPal AI는 진정으로 무료이고, 진정으로 오픈소스이며, 실행하는 모델에 대해 진정으로 유연하다는 점에서 모바일 로컬 AI 앱 중에서 나름의 입지를 갖고 있습니다. 이 세 가지 특성은 각각만으로도 드물고, 이 카테고리에서 함께 갖추기는 더욱 드뭅니다. 이 분야에서 가장 완성도 높은 앱은 아닙니다. 사용자는 자신의 모델 다운로드를 직접 관리해야 하고, 인터페이스는 어느 정도의 안내를 유연성과 맞바꾸며, 프로젝트는 지원 팀을 갖춘 기업이 아니라 한 명의 개발자가 여가 시간에 유지 관리합니다. 구독료나 공급업체 종속 없이 자신의 스마트폰에서 오픈 웨이트 모델을 실행하고 싶고, 자신의 기기에 맞는 모델을 직접 선택하는 데 거리낌이 없다면 PocketPal AI를 선택하세요. 비용과 개방성을 어느 정도 포기하더라도 더 많은 플랫폼에서 더 안내된 설정과 전담 지원을 원한다면, Private LLM이나 Loci 같은 유료 큐레이션 앱을 대신 선택하세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai) — 이 리뷰에서 인용한 소스 코드, 라이선스(MIT), 릴리스 이력, 스타/포크 수.',
          '[PocketPal AI 시작 가이드 문서](https://github.com/a-ghorbani/pocketpal-ai/blob/main/docs/getting_started.md) — 설정 단계, 기본 탑재 모델, GPU 가속 관련 참고사항.',
          '[App Store의 PocketPal AI](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) — iOS/iPadOS 이용 가능 여부.',
          '[Google Play의 PocketPal AI](https://play.google.com/store/apps/details?id=com.pocketpalai) — Android 이용 가능 여부.',
          '[Asghar Ghorbani, "PocketPal AI: Tiny LLMs in the Pocket", Medium](https://medium.com/@ghorbani59/pocketpal-ai-tiny-llms-in-the-pocket-6a65d0271a75) — 프로젝트 기원과 개발자의 동기.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[2026년 Android 최고의 로컬 LLM 앱](/power-local-llm/best-local-llm-apps-android-2026) — PocketPal AI, MLC Chat, Maid, Layla를 포함한 Android 앱 정리.',
          '[2026년 iPhone 최고의 로컬 LLM 앱](/power-local-llm/best-local-llm-apps-iphone-2026) — iOS 버전 정리로, PocketPal AI와 Private LLM, Enclave AI를 비교.',
          '[Loci 리뷰: iPhone, Android, iPad, Mac, Windows용 오프라인 AI](/power-local-llm/loci-ai-review-offline-local-ai) — 큐레이션된 모델 라이브러리를 갖춘 5개 플랫폼 지원 유료 클로즈드소스 대안.',
          '[2026년 최고의 모바일 LLM 모델: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 어떤 GGUF 모델이 실제로 스마트폰에 적합한지 다루는 모델 관련 자매 기사.',
          '[Enclave AI 리뷰](/power-local-llm/enclave-ai-review) — Siri와 단축어 자동화를 갖춘 Apple 전용 대안.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'PocketPal AI 리뷰(2026): 무료 오픈소스 온디바이스 채팅 앱',
      description:
        'PocketPal AI 리뷰: iPhone과 Android에서 GGUF 모델을 로컬로 실행하는 무료 MIT 오픈소스 앱. 지원 모델, 필요 RAM, 가격, 적합한 사용자를 정리했습니다.',
      url: 'https://promptquorum.com/ko/power-local-llm/pocketpal-ai-review',
      inLanguage: 'ko',
      datePublished: '2026-09-05',
      dateModified: '2026-09-05',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '무료 오픈소스 로컬 AI 채팅 앱을 검토하는 프라이버시 중시 iPhone·Android 사용자' },
      about: [
        { '@type': 'Thing', name: 'PocketPal AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: '오픈소스 소프트웨어' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/pocketpal-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'PocketPal AI 리뷰(2026)', item: 'https://promptquorum.com/ko/power-local-llm/pocketpal-ai-review' },
      ],
    },
  },
}
