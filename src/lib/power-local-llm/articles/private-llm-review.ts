// Private LLM Review: On-Device AI Chat for iPhone, iPad, and Mac
// Slug: private-llm-review
// Companion to: pocketpal-ai-review, best-local-llm-apps-iphone-2026, loci-ai-review-offline-local-ai,
// locally-ai-review, chatty-mini-review, arbiter-local-ai-chat-review, enclave-ai-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-llm-review-hero-en.webp',
    title: 'Private LLM Review (2026): On-Device AI Chat for iPhone, iPad, and Mac',
    seoTitle: 'Private LLM Review 2026: On-Device AI for iPhone & Mac',
    intro:
      'Private LLM, made by [Numen Technologies Limited](https://privatellm.app/en), is a paid, one-time-purchase app for iPhone, iPad, and Mac that runs open-source language models entirely on-device, with no account, no cloud fallback, and no subscription. It costs [$4.99 on the Apple App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — a single purchase that covers all three Apple platforms and, via Family Sharing, up to six people. The app supports more than 140 open-source models from families including Llama, Qwen, Gemma, Mistral, and Phi-4, and uses a quantization method called OmniQuant (paired with GPTQ) that the developer says preserves more model quality than the simpler round-to-nearest quantization used by some competing apps. The practical question for a reader comparing local-AI apps is not whether on-device chat works on an iPhone — several apps on this site already prove that — it is whether a one-time $4.99 purchase with 140+ curated models is worth it next to free alternatives like [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Enclave AI](/power-local-llm/enclave-ai-review).',
    metaDescription:
      'Private LLM review 2026: $4.99 one-time purchase, iPhone/iPad/Mac only, 140+ models, OmniQuant quantization, no subscription. Pricing, privacy, and how it compares to PocketPal AI.',
    twitterDescription:
      'Private LLM review 2026: a $4.99 one-time-purchase app for on-device AI chat on iPhone, iPad, and Mac. OmniQuant quantization, 140+ models, and how it stacks up against PocketPal AI and Enclave AI.',
    audience:
      'iPhone, iPad, and Mac users deciding whether a one-time-purchase local-AI app is worth it compared with free alternatives like PocketPal AI, Enclave AI, or Locally AI — covers pricing, supported models, quantization approach, and privacy.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Private LLM review',
    targetKeywords: [
      'private llm review',
      'private llm app iphone',
      'private llm ios price',
      'private llm omniquant',
      'private llm vs pocketpal ai',
      'on-device ai chat iphone mac',
      'numen technologies private llm',
      'best local llm app for iphone',
    ],
    current_models_mentioned: ['Llama 3.3 70B', 'Llama 3.1 8B', 'Llama 3.2 3B', 'Qwen 2.5', 'Qwen3 4B', 'Gemma 2', 'Gemma 3', 'Phi-4', 'Mixtral', 'DeepSeek R1 Distill'],
    current_hardware_mentioned: ['iPhone 15 Pro', 'iPhone 12', 'Apple Silicon Mac 48 GB unified memory', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Private LLM is a $4.99 one-time-purchase app for iPhone, iPad, and Mac that runs 140+ open-source AI models entirely on-device, with no account and no subscription.** Made by [Numen Technologies Limited](https://privatellm.app/en), it uses OmniQuant and GPTQ quantization, which the developer says preserves more output quality per bit than the round-to-nearest quantization used in some competing apps. One purchase unlocks the full model library on all three Apple platforms and, via Family Sharing, up to six people. Readers who want a free alternative, or who use Android/Windows/Linux, should compare it with [PocketPal AI](/power-local-llm/pocketpal-ai-review), which is free and open source.',
    quickAnswerTop: {
      en: {
        question: 'Is Private LLM worth the $4.99 price on the App Store?',
        answer:
          'Yes, if you want a polished, actively maintained, Apple-only local-AI app with a large curated model library (140+ models) and no subscription — the $4.99 is a one-time purchase covering iPhone, iPad, and Mac, with Family Sharing for up to six people. Skip it if you are on Android, Windows, or Linux, or if you specifically want a free and fully open-source app — PocketPal AI covers that case at no cost.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store; no subscription, no in-app purchases listed.',
          'iPhone, iPad, and Mac only — no Android, Windows, or Linux version on the App Store.',
          'Supports more than 140 open-source models: Llama, Qwen, Gemma, Mistral, Phi-4, and more.',
          'Uses OmniQuant and GPTQ quantization instead of simpler round-to-nearest quantization.',
          'Developer (Numen Technologies Limited) states the app collects no data and needs no account.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Private LLM Is', anchor: 'what-is-private-llm' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Pricing: One-Time Purchase Explained', anchor: 'pricing' },
      { label: 'Supported Models and OmniQuant Quantization', anchor: 'models-and-quantization' },
      { label: 'Platforms: iPhone, iPad, Mac, and Vision Pro', anchor: 'platforms' },
      { label: 'Privacy: What Private LLM Does and Does Not Collect', anchor: 'privacy' },
      { label: 'Company History and Version Milestones', anchor: 'history' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Private LLM vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Private LLM', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Private LLM', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Private LLM is a $4.99 one-time-purchase iPhone, iPad, and Mac app by Numen Technologies Limited that runs 140+ open-source AI models entirely on-device using OmniQuant and GPTQ quantization, with no account, no cloud fallback, and no subscription.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as buying a local AI chat app once, the way you would buy a regular App Store app, instead of subscribing to a cloud chatbot — the model runs on your own phone or Mac, so nothing you type leaves the device.',
          },
        ],
        items: [
          'Price: [$4.99 one-time purchase](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) on the Apple App Store; no subscription and no in-app purchases listed as of this review.',
          'Platforms: iPhone, iPad, and Mac only — no Android, Windows, or Linux app on the App Store.',
          'Developer: [Numen Technologies Limited](https://privatellm.app/en), a small, bootstrapped, EU-based team, per the developer\'s own site copy.',
          'Model library: more than 140 open-source models, including Llama, Qwen, Gemma, Mistral, Phi-4, and DeepSeek R1 Distill-based models.',
          'Quantization: uses OmniQuant and GPTQ, which the developer says produce better output quality per bit than the round-to-nearest (RTN) quantization used in some competing apps.',
          'Privacy: the App Store privacy label states the developer collects no data from the app; no account or sign-in is required to chat.',
          'Extras: Siri and Shortcuts integration via two App Intents, plus Family Sharing for up to six people on one purchase.',
          'Version 1.9.15 (July 2026) is the current release; the app first launched on the App Store in June 2023.',
        ],
      },
      whatIsPrivateLLM: {
        id: 'what-is-private-llm',
        title: 'What Private LLM Is',
        content: [
          '**Private LLM is a native Apple app that downloads and runs open-source language models directly on an iPhone, iPad, or Mac, with no server-side component.** Once a model is downloaded, the app needs no internet connection to generate a response — everything runs locally using the device\'s own CPU, GPU, and Neural Engine.',
          'It is built and maintained by [Numen Technologies Limited](https://privatellm.app/en), which describes itself on its own site as "built by two engineers, not VCs" — a small, bootstrapped team rather than a venture-backed company. The app first appeared on the App Store in June 2023 as [Private LLM - Local AI Chat](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) (App Store ID 6448106860), and has been updated continuously since — the current release, version 1.9.15, shipped in July 2026.',
          'Unlike apps that dispatch chat requests to a remote API, Private LLM\'s entire value proposition rests on local inference: the developer\'s marketing copy states "no cloud, no tracking, no logins" and "every conversation stays on-device." This review evaluates that claim against what the App Store privacy label and the developer\'s own FAQ document, rather than taking the tagline at face value.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setting up Private LLM takes four steps and no account creation.** The whole process, from App Store download to a first response, typically takes a few minutes plus however long the chosen model takes to download.',
        ],
        numberedItems: [
          {
            title: 'Buy and install the app',
            whyItMatters: 'Download [Private LLM from the Apple App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) for $4.99. This is a one-time purchase — there is no free trial tier and no recurring subscription to manage.',
          },
          {
            title: 'Pick a model that fits your device',
            whyItMatters: 'Open the in-app model browser and choose a model sized for your hardware. The developer\'s own guidance suggests most iPhones run Llama 3.2 3B or Qwen3 4B comfortably, iPhone 15 Pro and newer can handle Llama 3.1 8B, and a Mac with 48 GB of unified memory can run Llama 3.3 70B.',
          },
          {
            title: 'Download the model',
            whyItMatters: 'Model files range from roughly 2 GB to tens of gigabytes depending on parameter count and quantization level. This step requires an internet connection; every step after it does not.',
          },
          {
            title: 'Chat entirely offline',
            whyItMatters: 'Once the model is downloaded, turn on airplane mode if you want to verify the offline claim yourself — chat, summarization, and rephrasing (on Mac) all run without a network connection.',
          },
          {
            title: 'Optional: connect Siri and Shortcuts',
            whyItMatters: 'Private LLM exposes two App Intents for Siri and the Shortcuts app, letting you trigger a model response from a voice command or an automation without opening the app directly.',
          },
        ],
        note: 'Exact download sizes, supported model list, and minimum device requirements can change between App Store updates — confirm the current specifics in the app\'s model browser or on [privatellm.app](https://privatellm.app/en) before committing to a large download on a limited data plan.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing: One-Time Purchase Explained',
        itemHeadings: true,
        content: [
          '**Private LLM costs $4.99 as a single, one-time purchase on the Apple App Store — there is no subscription and no in-app purchases listed on the current listing.** That price was verified directly against the [App Store listing](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) for this review.',
        ],
        columns: ['What you pay', 'What it covers', 'What it does not include'],
        rows: [
          {
            'What you pay': '$4.99 (one-time)',
            'What it covers': 'Full app on iPhone, iPad, and Mac; access to the full 140+ model library; Family Sharing for up to six people',
            'What it does not include': 'Any Android, Windows, or Linux version — the App Store purchase does not unlock a cross-platform license',
          },
        ],
        note: 'App Store prices can change without notice and may differ by region. Confirm the current price on the [App Store listing](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) before purchasing. Verified for this review on 2026-09-05.',
      },
      modelsAndQuantization: {
        id: 'models-and-quantization',
        title: 'Supported Models and OmniQuant Quantization',
        content: [
          '**Private LLM\'s library includes more than 140 open-source models, spanning general-purpose, coding, and language-specific fine-tunes.** Named families in the developer\'s own documentation include Llama 3, 3.1, 3.2, and 3.3; Qwen 2.5 and Qwen3-based models; Gemma 2 and Gemma 3; Phi-4; Mixtral; and DeepSeek R1 Distill-based models, alongside region-specific options such as SauerkrautLM (German), DictaLM (Hebrew), RakutenAI (Japanese), and Yi (Chinese).',
          'The app quantizes these models using **OmniQuant**, paired with **GPTQ** for some models — both are optimization-based quantization methods rather than the simpler round-to-nearest (RTN) approach some competing local-AI apps use. According to the developer\'s own comparison pages, optimization-based quantization tunes the quantization range against calibration data, which can preserve more of the original model\'s output quality at a given bit-width than RTN. This is the developer\'s own technical claim, sourced from their documentation — it has not been independently benchmarked by PromptQuorum against Private LLM\'s specific quantized model files.',
          'Hardware guidance from the developer: most iPhones run **Llama 3.2 3B** or **Qwen3 4B** comfortably; **iPhone 15 Pro** and newer can run **Llama 3.1 8B**; and a Mac with **48 GB of unified memory** can run **Llama 3.3 70B**. These are the developer\'s own recommendations, not independently benchmarked figures — actual performance depends on quantization level, context length, and background app load.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Platforms: iPhone, iPad, Mac, and Vision Pro',
        itemHeadings: true,
        columns: ['Platform', 'What to expect', 'Important note'],
        rows: [
          {
            'Platform': 'iPhone',
            'What to expect': 'Requires iOS 17.0 or later and an A12 Bionic chip or newer (iPhone XS and later, per the App Store listing). Model size choice should match RAM.',
            'Important note': 'Most iPhones handle 3B–4B parameter models well; only iPhone 15 Pro and newer are recommended for 8B models, per the developer.',
          },
          {
            'Platform': 'iPad',
            'What to expect': 'Runs the same app and model library as iPhone. The developer\'s FAQ recommends 4 GB RAM minimum, with an iPad Pro (16 GB) recommended for larger models.',
            'Important note': 'Older, lower-RAM iPads are limited to smaller quantized models.',
          },
          {
            'Platform': 'Mac',
            'What to expect': 'Native app for Apple Silicon Macs (M-series). Also includes macOS-specific writing services (grammar correction, summarization, rephrasing) that other apps can call into.',
            'Important note': 'The developer\'s FAQ states Intel Macs are technically supported but not recommended — inference is noticeably slower without Apple Silicon\'s unified memory and Neural Engine.',
          },
          {
            'Platform': 'Apple Vision Pro',
            'What to expect': 'The App Store listing shows Vision Pro compatibility for the same app.',
            'Important note': 'This review did not independently test the Vision Pro experience; treat it as App Store-listed compatibility, not a hands-on verified feature.',
          },
          {
            'Platform': 'Android, Windows, Linux',
            'What to expect': 'No official listing on Google Play, the Microsoft Store, or any Linux package repository.',
            'Important note': 'An unofficial beta APK has circulated outside the Google Play Store at points in the app\'s history; it is not part of the developer\'s primary marketing site or supported release channel, so this review does not treat Android as a supported platform.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy: What Private LLM Does and Does Not Collect',
        content: [
          '**Private LLM\'s App Store privacy label states the developer does not collect any data from the app**, and the app requires no account, login, or sign-up to use. The developer\'s own marketing describes the product with the phrases "no cloud, no tracking, no logins" and states that conversations "never leave the device."',
          'Because inference runs locally after a model is downloaded, there is no chat data to transmit to a server during normal use — the architecture itself, not just a policy promise, is what keeps conversations on-device.',
        ],
        items: [
          '**No account required.** You can download, purchase, and use the app without creating a profile or signing in.',
          '**No data collection, per the App Store label.** Apple\'s privacy nutrition label for this listing shows no data collected from the app.',
          '**iCloud sync of chat history is not documented.** The developer\'s public FAQ does not describe iCloud sync of conversations across devices — this review treats that as unconfirmed rather than assuming it exists. If cross-device chat sync matters to you, verify current behavior directly in the app before relying on it.',
          '**Sandboxed execution.** The app runs within Apple\'s standard app sandbox, the same isolation every App Store app is subject to — this is an Apple platform guarantee, not a Private LLM-specific feature.',
        ],
      },
      history: {
        id: 'history',
        title: 'Company History and Version Milestones',
        content: [
          '**Private LLM launched on the App Store in June 2023**, with version 1.0.1 for iOS and version 1.0.2 for macOS both shipping on June 2, 2023. It is developed by [Numen Technologies Limited](https://privatellm.app/en), which describes itself as a small, bootstrapped team without venture-capital funding.',
        ],
        items: [
          '**June 2023.** Initial App Store release (iOS 1.0.1, macOS 1.0.2) with a fine-tuned baseline model.',
          '**July 2023.** Siri and Shortcuts support (App Intents) added.',
          '**September 2023.** Compatibility added for the iPhone 15 series.',
          '**December 2023.** Support extended to older iPhones and iPads with as little as 3 GB of RAM.',
          '**January 2024.** Multi-model downloading introduced, expanding the library to include TinyLlama, StableLM, Phi-2, Mistral, Llama, and Gemma family models.',
          '**February 2024.** macOS-specific writing services added: grammar correction, summarization, and rephrasing that other Mac apps can call into.',
          '**March 2024.** Model switching without leaving the active chat interface.',
          '**July 2026.** Version 1.9.15 moved model downloads to a CDN instead of Hugging Face, which the release notes describe as faster; this is the current version as of this review.',
        ],
        note: 'Version history sourced from the developer\'s own [release notes](https://privatellm.app/en/release-notes) page. Dates and version numbers are as published there; verify the current version directly in the App Store before relying on a specific feature being present.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'One-time $4.99 purchase',
            'What it means in real use': 'No subscription to track or cancel; pay once, use indefinitely across your Apple devices.',
            'Limitation / caveat': 'It is not free — readers who want a no-cost option should compare it with PocketPal AI or Enclave AI.',
          },
          {
            'Benefit': '140+ model library',
            'What it means in real use': 'Wide choice of general-purpose, coding, and language-specific models without hunting for GGUF files yourself.',
            'Limitation / caveat': 'The library is curated by the developer; you cannot import an arbitrary custom fine-tune the way some open-source apps allow.',
          },
          {
            'Benefit': 'OmniQuant and GPTQ quantization',
            'What it means in real use': 'The developer states this preserves more model quality per bit than simpler round-to-nearest quantization.',
            'Limitation / caveat': 'This is the developer\'s own technical claim; PromptQuorum has not independently benchmarked Private LLM\'s specific model files against RTN-quantized equivalents.',
          },
          {
            'Benefit': 'No account, no data collection',
            'What it means in real use': 'Use the app immediately after purchase with nothing to sign up for; the App Store privacy label shows no data collected.',
            'Limitation / caveat': 'Because the app is closed-source, the no-collection claim cannot be independently code-audited the way an open-source app\'s can.',
          },
          {
            'Benefit': 'Siri and Shortcuts integration',
            'What it means in real use': 'Trigger model responses from voice commands or automations without opening the app.',
            'Limitation / caveat': 'iOS restricts background GPU access, so Shortcuts-triggered generation may be slower or more limited than foreground chat.',
          },
          {
            'Benefit': 'Family Sharing for up to six people',
            'What it means in real use': 'One $4.99 purchase can cover an entire Apple Family Sharing group.',
            'Limitation / caveat': 'Each family member still needs their own supported device and enough storage/RAM for the models they choose.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Private LLM vs. Alternatives',
        columns: ['App', 'Platforms', 'Price', 'Model flexibility', 'Key difference'],
        rows: [
          {
            'App': 'Private LLM',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Price': '$4.99 one-time purchase',
            'Model flexibility': '140+ curated models; OmniQuant/GPTQ quantization',
            'Key difference': 'Paid, closed-source, curated library — no arbitrary GGUF import',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iPhone/iPad, with some Android support',
            'Price': 'Free, open source',
            'Model flexibility': 'Any GGUF file the user sources from Hugging Face or elsewhere',
            'Key difference': 'Free and open-source; requires more manual model management',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Platforms': 'Varies by release — check current listing',
            'Price': 'See current listing',
            'Model flexibility': 'See full review for current model support',
            'Key difference': 'See the full Enclave AI review for a detailed comparison',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Platforms': 'iPhone/iPad/Mac',
            'Price': 'Free',
            'Model flexibility': 'Built on Apple MLX; access to Apple\'s on-device foundation model',
            'Key difference': 'Free alternative built specifically on Apple\'s MLX framework',
          },
          {
            'App': '[Arbiter](/power-local-llm/arbiter-local-ai-chat-review)',
            'Platforms': 'See full review for current platform support',
            'Price': 'See current listing',
            'Model flexibility': 'See full review for current model support',
            'Key difference': 'See the full Arbiter review for a detailed comparison',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Platforms': 'iOS/Mac (open source, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Price': 'Free, open source',
            'Model flexibility': 'Load custom GGUF models via llama.cpp/ggml',
            'Key difference': 'Was pulled from the App Store and TestFlight in August 2025 per its own GitHub README — verify current availability before relying on it',
          },
          {
            'App': '[Layla](https://www.layla-network.ai/)',
            'Platforms': 'iOS and Android',
            'Price': '$19.99 plus in-app purchases',
            'Model flexibility': 'Custom GGUF models; character/roleplay focus with 100+ voices',
            'Key difference': 'Cross-platform (unlike Private LLM) but priced higher, with a roleplay/character focus',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Platforms': 'Cross-platform Flutter app (Android primary; also runs on other platforms Flutter supports)',
            'Price': 'Free, open source (MIT license)',
            'Model flexibility': 'Any GGUF file via llama.cpp; also connects to Anthropic, DeepSeek, Ollama, Mistral, OpenAI remotely',
            'Key difference': 'Free, fully open source, and not limited to local-only inference',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Platforms': 'Android',
            'Price': 'Free, open source',
            'Model flexibility': 'Multiple cloud provider APIs plus local execution',
            'Key difference': 'Android-only; positions itself as a multi-provider client, not a local-first app',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Platforms': 'Android (iOS planned)',
            'Price': 'Free, open source',
            'Model flexibility': 'Runs GGUF models on-device via Cactus Compute (llama.cpp for React Native), or pairs with a self-hosted AnythingLLM server',
            'Key difference': 'Designed to pair with a self-hosted AnythingLLM workspace, not a standalone chat app',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently — verify current specifics on each app\'s own listing before deciding. LLM Farm\'s App Store availability in particular should be re-checked, since its own GitHub README described it as pulled from the App Store as of August 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Private LLM',
        items: [
          '**Apple-only users who want a polished, curated app and are fine paying once.** iPhone, iPad, and Mac owners who value a maintained, actively updated app over assembling their own GGUF file collection get a large model library out of the box for $4.99.',
          '**Readers who value quantization quality over raw model count.** If OmniQuant and GPTQ\'s claimed quality-per-bit advantage over round-to-nearest quantization matters to your use case, Private LLM is one of the few consumer apps built specifically around that approach.',
          '**Families sharing one Apple ID group.** Family Sharing means a single $4.99 purchase can cover up to six people, which is cheaper per person than setting up several free apps individually for non-technical family members.',
          '**Users who want Siri/Shortcuts automation.** The two App Intents let you wire local AI responses into existing iOS automations without opening the app.',
          '**Privacy-conscious users comfortable with a closed-source app.** If "no data collected" per the App Store privacy label and "no account required" meet your bar without needing to audit the source code yourself, Private LLM\'s on-device architecture delivers that.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Private LLM',
        items: [
          '**Android, Windows, or Linux users.** Private LLM has no official app on any of these platforms — choose [PocketPal AI](/power-local-llm/pocketpal-ai-review) (partial Android support), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid), [ChatterUI](https://github.com/Vali-98/ChatterUI), or [RikkaHub](https://github.com/rikkahub/rikkahub) instead.',
          '**Readers who want a completely free option.** $4.99 is inexpensive, but it is not free — [PocketPal AI](/power-local-llm/pocketpal-ai-review) and [Locally AI](/power-local-llm/locally-ai-review) both cost nothing.',
          '**Readers who want to run the largest open-weight models.** Mobile hardware limits what fits in memory — even the developer\'s own guidance caps most iPhones at 3B–8B parameter models; only a Mac with 48 GB+ unified memory reaches the 70B tier, and even that ceiling is far below the largest open-weight models available for server-class hardware.',
          '**Teams or organizations wanting a shared, centrally managed deployment.** Private LLM is a single-user, single-device consumer app with no admin console, shared license management, or team billing — organizations should look at self-hosted, server-side local-LLM infrastructure instead.',
          '**Readers who want to audit the app\'s source code themselves.** Private LLM is closed-source. If independent code review matters to you, an open-source alternative like [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) lets you verify behavior directly.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much does Private LLM cost?',
            a: 'Private LLM costs [$4.99 as a one-time purchase](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) on the Apple App Store, verified for this review on 2026-09-05. There is no subscription and no in-app purchases listed on the current App Store listing. App Store prices can vary by region and change over time — confirm the current price before buying.',
          },
          {
            q: 'Is Private LLM available on Android or Windows?',
            a: 'No official version exists on Google Play, the Microsoft Store, or any Linux package repository. Private LLM is built specifically for iPhone, iPad, and Mac. An unofficial beta APK has circulated outside the Play Store at points in the app\'s history, but it is not part of the developer\'s primary supported release channel, so this review treats Android as unsupported.',
          },
          {
            q: 'Who develops Private LLM?',
            a: 'Private LLM is developed by [Numen Technologies Limited](https://privatellm.app/en), which describes itself on its own site as a small, bootstrapped, two-engineer team without venture-capital funding.',
          },
          {
            q: 'What is OmniQuant, and why does Private LLM use it?',
            a: 'OmniQuant is an optimization-based quantization method that tunes the quantization range against calibration data, rather than using the simpler round-to-nearest (RTN) approach. Private LLM pairs OmniQuant with GPTQ for some models. The developer states this preserves more of a model\'s original output quality at a given bit-width than RTN quantization; this is the developer\'s own technical claim, not an independent PromptQuorum benchmark of Private LLM\'s specific model files.',
          },
          {
            q: 'Does Private LLM work completely offline?',
            a: 'Yes, once a model is downloaded. The app needs an internet connection only to download a model or an app update; chat, and macOS-specific services like grammar correction and summarization, run without a network connection afterward.',
          },
          {
            q: 'Does Private LLM collect any personal data?',
            a: 'Apple\'s App Store privacy nutrition label for this listing states the developer does not collect any data from the app. No account or sign-in is required to use it. This review relies on the App Store\'s privacy label rather than an independent audit of the app\'s closed-source code.',
          },
          {
            q: 'Does Private LLM sync chat history across devices via iCloud?',
            a: 'This is not documented in the developer\'s public FAQ. This review treats iCloud sync of conversations as unconfirmed rather than assuming it exists — verify current behavior directly in the app before relying on cross-device chat continuity.',
          },
          {
            q: 'What models can I run on an iPhone with Private LLM?',
            a: 'Per the developer\'s own guidance, most iPhones run 3B–4B parameter models comfortably (for example, Llama 3.2 3B or Qwen3 4B), while iPhone 15 Pro and newer can handle 8B-parameter models like Llama 3.1 8B. These are the developer\'s recommendations, not independently benchmarked results — actual performance depends on quantization level and available RAM.',
          },
          {
            q: 'How does Private LLM compare to PocketPal AI?',
            a: 'Private LLM is a paid ($4.99), closed-source, Apple-only app with a curated 140+ model library and OmniQuant/GPTQ quantization. [PocketPal AI](/power-local-llm/pocketpal-ai-review) is free and open source, runs on iPhone/iPad with some Android support, and lets you import any GGUF file rather than choosing from a curated list. Choose Private LLM for a maintained, one-time-purchase experience with a wide built-in model library; choose PocketPal AI for a free, auditable, more manually configured setup.',
          },
          {
            q: 'Does one Private LLM purchase cover multiple devices or family members?',
            a: 'Yes. The $4.99 purchase covers iPhone, iPad, and Mac for the purchasing Apple ID, and Apple\'s Family Sharing extends that single purchase to up to six people in the same Family Sharing group.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Private LLM earns its place among the better-documented mobile local-AI apps covered on this site: a clear $4.99 one-time price verified directly against the App Store, a curated library of more than 140 open-source models, and a specific, named quantization approach (OmniQuant plus GPTQ) rather than a vague "optimized for mobile" claim. The developer\'s own release notes show three years of continuous updates since the June 2023 launch, which is a meaningfully longer track record than several smaller apps in this cluster. The trade-offs are equally clear: it is Apple-only, it is not free, its model list is curated rather than fully open to custom GGUF imports, and its closed-source code means the "no data collected" claim rests on the App Store privacy label rather than independent code review. Readers who want a maintained, curated, one-time-purchase app across their Apple devices should buy it; readers on Android/Windows/Linux, readers who want a free option, or readers who want to audit source code themselves should start with [PocketPal AI](/power-local-llm/pocketpal-ai-review) instead.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Private LLM on the App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — price, platform compatibility, privacy label, ratings, and version history.',
          '[Private LLM official site](https://privatellm.app/en) — product overview, pricing model, and privacy claims.',
          '[Private LLM FAQ](https://privatellm.app/en/faq) — supported models, quantization approach, hardware requirements, Family Sharing, and Siri/Shortcuts integration.',
          '[Private LLM release notes](https://privatellm.app/en/release-notes) — version history and feature milestones from June 2023 to July 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — the free, open-source alternative with manual GGUF import.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the full iPhone app roundup, including Private LLM, PocketPal AI, and Locally AI.',
          '[Enclave AI Review](/power-local-llm/enclave-ai-review) — another on-device AI app for comparison.',
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a free Apple MLX-based alternative.',
          '[Chatty-mini Review](/power-local-llm/chatty-mini-review) — a smaller, less-documented Android-only alternative for comparison.',
          '[Arbiter Local AI Chat Review](/power-local-llm/arbiter-local-ai-chat-review) — another local chat app covered on this site.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-llm-review-hero-de.webp',
    title: 'Private LLM im Test (2026): KI-Chat auf dem Gerät für iPhone, iPad und Mac',
    seoTitle: 'Private LLM Test 2026: On-Device-KI für iPhone & Mac',
    intro:
      'Private LLM, entwickelt von [Numen Technologies Limited](https://privatellm.app/en), ist eine kostenpflichtige App mit einmaligem Kaufpreis für iPhone, iPad und Mac, die Open-Source-Sprachmodelle vollständig auf dem Gerät ausführt — ohne Konto, ohne Cloud-Fallback und ohne Abonnement. Sie kostet [4,99 $ im Apple App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — ein einmaliger Kauf, der alle drei Apple-Plattformen abdeckt und über Familienfreigabe bis zu sechs Personen einschließt. App-Store-Preise können je nach Region variieren; prüfen Sie vor dem Kauf den aktuellen Preis im deutschen App Store. Die App unterstützt mehr als 140 Open-Source-Modelle aus Familien wie Llama, Qwen, Gemma, Mistral und Phi-4 und nutzt ein Quantisierungsverfahren namens OmniQuant (kombiniert mit GPTQ), das laut Entwickler mehr Modellqualität erhält als die einfachere Round-to-Nearest-Quantisierung, die manche konkurrierende Apps verwenden. Die praktische Frage für Leser, die lokale KI-Apps vergleichen, ist nicht, ob On-Device-Chat auf einem iPhone funktioniert — mehrere auf dieser Seite behandelte Apps beweisen das bereits —, sondern ob ein einmaliger Kauf für 4,99 $ mit 140+ kuratierten Modellen sich gegenüber kostenlosen Alternativen wie [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Enclave AI](/de/power-local-llm/enclave-ai-review) lohnt.',
    metaDescription:
      'Private LLM Test 2026: 4,99 $ Einmalkauf, nur iPhone/iPad/Mac, 140+ Modelle, OmniQuant-Quantisierung, kein Abo. Preise, Datenschutz und Vergleich mit PocketPal AI.',
    twitterDescription:
      'Private LLM Test 2026: eine App mit 4,99 $ Einmalkauf für KI-Chat auf dem Gerät für iPhone, iPad und Mac. OmniQuant-Quantisierung, 140+ Modelle und Vergleich mit PocketPal AI und Enclave AI.',
    audience:
      'iPhone-, iPad- und Mac-Nutzer, die entscheiden möchten, ob eine App mit einmaligem Kaufpreis für lokale KI sich gegenüber kostenlosen Alternativen wie PocketPal AI, Enclave AI oder Locally AI lohnt — behandelt Preise, unterstützte Modelle, Quantisierungsansatz und Datenschutz.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Private LLM review',
    targetKeywords: [
      'private llm review',
      'private llm app iphone',
      'private llm ios price',
      'private llm omniquant',
      'private llm vs pocketpal ai',
      'on-device ai chat iphone mac',
      'numen technologies private llm',
      'best local llm app for iphone',
    ],
    current_models_mentioned: ['Llama 3.3 70B', 'Llama 3.1 8B', 'Llama 3.2 3B', 'Qwen 2.5', 'Qwen3 4B', 'Gemma 2', 'Gemma 3', 'Phi-4', 'Mixtral', 'DeepSeek R1 Distill'],
    current_hardware_mentioned: ['iPhone 15 Pro', 'iPhone 12', 'Apple Silicon Mac mit 48 GB Unified Memory', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Private LLM ist eine App mit 4,99-$-Einmalkauf für iPhone, iPad und Mac, die mehr als 140 Open-Source-KI-Modelle vollständig auf dem Gerät ausführt — ohne Konto und ohne Abonnement.** Entwickelt von [Numen Technologies Limited](https://privatellm.app/en), nutzt sie OmniQuant- und GPTQ-Quantisierung, die laut Entwickler pro Bit mehr Ausgabequalität erhält als die Round-to-Nearest-Quantisierung mancher konkurrierender Apps. Ein Kauf schaltet die vollständige Modellbibliothek auf allen drei Apple-Plattformen frei und über Familienfreigabe für bis zu sechs Personen. Leser, die eine kostenlose Alternative suchen oder Android/Windows/Linux nutzen, sollten sie mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen, das kostenlos und quelloffen ist.',
    quickAnswerTop: {
      en: {
        question: 'Is Private LLM worth the $4.99 price on the App Store?',
        answer:
          'Yes, if you want a polished, actively maintained, Apple-only local-AI app with a large curated model library (140+ models) and no subscription — the $4.99 is a one-time purchase covering iPhone, iPad, and Mac, with Family Sharing for up to six people. Skip it if you are on Android, Windows, or Linux, or if you specifically want a free and fully open-source app — PocketPal AI covers that case at no cost.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store; no subscription, no in-app purchases listed.',
          'iPhone, iPad, and Mac only — no Android, Windows, or Linux version on the App Store.',
          'Supports more than 140 open-source models: Llama, Qwen, Gemma, Mistral, Phi-4, and more.',
          'Uses OmniQuant and GPTQ quantization instead of simpler round-to-nearest quantization.',
          'Developer (Numen Technologies Limited) states the app collects no data and needs no account.',
        ],
        updatedDate: '2026-09-05',
      },
      de: {
        question: 'Lohnt sich Private LLM für 4,99 $ im App Store?',
        answer:
          'Ja, wenn Sie eine ausgereifte, aktiv gepflegte, ausschließlich für Apple erhältliche lokale KI-App mit großer kuratierter Modellbibliothek (140+ Modelle) und ohne Abonnement möchten — die 4,99 $ sind ein Einmalkauf für iPhone, iPad und Mac, mit Familienfreigabe für bis zu sechs Personen. Verzichten Sie darauf, wenn Sie Android, Windows oder Linux nutzen oder gezielt eine kostenlose, vollständig quelloffene App möchten — dafür deckt PocketPal AI diesen Fall kostenlos ab.',
        bullets: [
          '4,99 $ Einmalkauf im Apple App Store; kein Abonnement, keine In-App-Käufe gelistet.',
          'Nur iPhone, iPad und Mac — keine Android-, Windows- oder Linux-Version im App Store.',
          'Unterstützt mehr als 140 Open-Source-Modelle: Llama, Qwen, Gemma, Mistral, Phi-4 und weitere.',
          'Nutzt OmniQuant- und GPTQ-Quantisierung statt der einfacheren Round-to-Nearest-Quantisierung.',
          'Entwickler (Numen Technologies Limited) gibt an, dass die App keine Daten sammelt und kein Konto benötigt.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Private LLM ist', anchor: 'what-is-private-llm' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Preise: Der Einmalkauf erklärt', anchor: 'pricing' },
      { label: 'Unterstützte Modelle und OmniQuant-Quantisierung', anchor: 'models-and-quantization' },
      { label: 'Plattformen: iPhone, iPad, Mac und Vision Pro', anchor: 'platforms' },
      { label: 'Datenschutz: Was Private LLM sammelt und was nicht', anchor: 'privacy' },
      { label: 'Firmengeschichte und Versions-Meilensteine', anchor: 'history' },
      { label: 'Kompromisse: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Private LLM vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer Private LLM nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer Private LLM nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Private LLM ist eine App mit 4,99-$-Einmalkauf für iPhone, iPad und Mac von Numen Technologies Limited, die mehr als 140 Open-Source-KI-Modelle vollständig auf dem Gerät mit OmniQuant- und GPTQ-Quantisierung ausführt — ohne Konto, ohne Cloud-Fallback und ohne Abonnement.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich vor wie den einmaligen Kauf einer lokalen KI-Chat-App, wie bei einer gewöhnlichen App-Store-App, statt ein Abo für einen Cloud-Chatbot abzuschließen — das Modell läuft auf dem eigenen iPhone oder Mac, sodass nichts, was Sie eingeben, das Gerät verlässt.',
          },
        ],
        items: [
          'Preis: [4,99 $ Einmalkauf](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) im Apple App Store; kein Abonnement und keine In-App-Käufe zum Zeitpunkt dieses Tests gelistet.',
          'Plattformen: nur iPhone, iPad und Mac — keine Android-, Windows- oder Linux-App im App Store.',
          'Entwickler: [Numen Technologies Limited](https://privatellm.app/en), laut eigener Website ein kleines, eigenfinanziertes Team mit Sitz in der EU.',
          'Modellbibliothek: mehr als 140 Open-Source-Modelle, darunter Llama, Qwen, Gemma, Mistral, Phi-4 und auf DeepSeek R1 Distill basierende Modelle.',
          'Quantisierung: nutzt OmniQuant und GPTQ, was laut Entwickler pro Bit bessere Ausgabequalität liefert als die Round-to-Nearest-Quantisierung (RTN), die manche konkurrierenden Apps verwenden.',
          'Datenschutz: Das App-Store-Datenschutzlabel gibt an, dass der Entwickler keine Daten aus der App sammelt; zum Chatten ist kein Konto oder Login erforderlich.',
          'Extras: Siri- und Shortcuts-Integration über zwei App Intents, plus Familienfreigabe für bis zu sechs Personen bei einem Kauf.',
          'Version 1.9.15 (Juli 2026) ist die aktuelle Version; die App erschien erstmals im Juni 2023 im App Store.',
        ],
      },
      whatIsPrivateLLM: {
        id: 'what-is-private-llm',
        title: 'Was Private LLM ist',
        content: [
          '**Private LLM ist eine native Apple-App, die Open-Source-Sprachmodelle herunterlädt und direkt auf einem iPhone, iPad oder Mac ausführt, ohne serverseitige Komponente.** Sobald ein Modell heruntergeladen ist, benötigt die App keine Internetverbindung, um eine Antwort zu generieren — alles läuft lokal über CPU, GPU und Neural Engine des Geräts.',
          'Sie wird von [Numen Technologies Limited](https://privatellm.app/en) entwickelt und gepflegt, das sich auf der eigenen Website als "von zwei Ingenieuren gebaut, nicht von VCs" beschreibt — ein kleines, eigenfinanziertes Team statt eines Venture-Capital-finanzierten Unternehmens. Die App erschien erstmals im Juni 2023 im App Store als [Private LLM - Local AI Chat](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) (App-Store-ID 6448106860) und wurde seither kontinuierlich aktualisiert — die aktuelle Version 1.9.15 erschien im Juli 2026.',
          'Anders als Apps, die Chat-Anfragen an eine entfernte API senden, beruht das gesamte Wertversprechen von Private LLM auf lokaler Inferenz: Der Entwickler wirbt mit den Aussagen "keine Cloud, kein Tracking, keine Logins" und dass Unterhaltungen "das Gerät nie verlassen". Dieser Test prüft diese Behauptung anhand dessen, was das App-Store-Datenschutzlabel und die FAQ des Entwicklers tatsächlich dokumentieren, statt den Slogan einfach zu übernehmen.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung von Private LLM dauert vier Schritte und erfordert keine Kontoerstellung.** Der gesamte Vorgang, vom App-Store-Download bis zur ersten Antwort, dauert in der Regel wenige Minuten plus die Zeit, die das gewählte Modell zum Herunterladen benötigt.',
        ],
        numberedItems: [
          {
            title: 'App kaufen und installieren',
            whyItMatters: 'Laden Sie [Private LLM aus dem Apple App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) für 4,99 $ herunter. Dies ist ein Einmalkauf — es gibt keine kostenlose Testversion und kein wiederkehrendes Abonnement zu verwalten.',
          },
          {
            title: 'Ein zur Hardware passendes Modell wählen',
            whyItMatters: 'Öffnen Sie den In-App-Modell-Browser und wählen Sie ein Modell, das zur eigenen Hardware passt. Der Entwickler empfiehlt: Die meisten iPhones führen Llama 3.2 3B oder Qwen3 4B problemlos aus, iPhone 15 Pro und neuer bewältigen Llama 3.1 8B, und ein Mac mit 48 GB Unified Memory kann Llama 3.3 70B ausführen.',
          },
          {
            title: 'Das Modell herunterladen',
            whyItMatters: 'Modelldateien reichen je nach Parameteranzahl und Quantisierungsstufe von etwa 2 GB bis zu mehreren zehn Gigabyte. Dieser Schritt erfordert eine Internetverbindung; alle folgenden Schritte nicht.',
          },
          {
            title: 'Vollständig offline chatten',
            whyItMatters: 'Sobald das Modell heruntergeladen ist, können Sie den Flugmodus aktivieren, um die Offline-Behauptung selbst zu überprüfen — Chat, Zusammenfassung und Umformulierung (auf dem Mac) laufen alle ohne Netzwerkverbindung.',
          },
          {
            title: 'Optional: Siri und Shortcuts verbinden',
            whyItMatters: 'Private LLM stellt zwei App Intents für Siri und die Shortcuts-App bereit, mit denen eine Modellantwort per Sprachbefehl oder Automatisierung ausgelöst werden kann, ohne die App direkt zu öffnen.',
          },
        ],
        note: 'Genaue Downloadgrößen, die Liste unterstützter Modelle und Mindestanforderungen an das Gerät können sich zwischen App-Store-Updates ändern — prüfen Sie die aktuellen Angaben im Modell-Browser der App oder auf [privatellm.app](https://privatellm.app/en), bevor Sie sich bei einem begrenzten Datentarif auf einen großen Download festlegen.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise: Der Einmalkauf erklärt',
        itemHeadings: true,
        content: [
          '**Private LLM kostet 4,99 $ als einmaligen Kauf im Apple App Store — es gibt kein Abonnement und keine In-App-Käufe im aktuellen Eintrag.** Dieser Preis wurde für diesen Test direkt anhand des [App-Store-Eintrags](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) geprüft. App-Store-Preise können je nach Region abweichen; prüfen Sie den aktuellen Preis im deutschen App Store vor dem Kauf.',
        ],
        columns: ['Was Sie zahlen', 'Was enthalten ist', 'Was nicht enthalten ist'],
        rows: [
          {
            'Was Sie zahlen': '4,99 $ (einmalig)',
            'Was enthalten ist': 'Vollständige App für iPhone, iPad und Mac; Zugriff auf die vollständige Bibliothek mit 140+ Modellen; Familienfreigabe für bis zu sechs Personen',
            'Was nicht enthalten ist': 'Eine Android-, Windows- oder Linux-Version — der App-Store-Kauf schaltet keine plattformübergreifende Lizenz frei',
          },
        ],
        note: 'App-Store-Preise können sich ohne Vorankündigung ändern und je nach Region unterscheiden. Prüfen Sie den aktuellen Preis im [App-Store-Eintrag](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) vor dem Kauf. Für diesen Test geprüft am 2026-09-05.',
      },
      modelsAndQuantization: {
        id: 'models-and-quantization',
        title: 'Unterstützte Modelle und OmniQuant-Quantisierung',
        content: [
          '**Die Bibliothek von Private LLM umfasst mehr als 140 Open-Source-Modelle für allgemeine Zwecke, Programmierung und sprachspezifische Feinabstimmungen.** Zu den in der eigenen Dokumentation des Entwicklers genannten Modellfamilien gehören Llama 3, 3.1, 3.2 und 3.3; auf Qwen 2.5 und Qwen3 basierende Modelle; Gemma 2 und Gemma 3; Phi-4; Mixtral; sowie auf DeepSeek R1 Distill basierende Modelle, dazu regionsspezifische Optionen wie SauerkrautLM (Deutsch), DictaLM (Hebräisch), RakutenAI (Japanisch) und Yi (Chinesisch).',
          'Die App quantisiert diese Modelle mit **OmniQuant**, bei manchen Modellen kombiniert mit **GPTQ** — beides optimierungsbasierte Quantisierungsverfahren statt des einfacheren Round-to-Nearest-Ansatzes (RTN), den manche konkurrierenden lokalen KI-Apps nutzen. Laut den eigenen Vergleichsseiten des Entwicklers passt optimierungsbasierte Quantisierung den Quantisierungsbereich anhand von Kalibrierungsdaten an, was bei gegebener Bitbreite mehr von der ursprünglichen Ausgabequalität des Modells erhalten kann als RTN. Dies ist die eigene technische Behauptung des Entwicklers, gestützt auf dessen eigene Dokumentation — sie wurde nicht unabhängig von PromptQuorum an den konkreten quantisierten Modelldateien von Private LLM benchmarkt.',
          'Hardware-Empfehlung des Entwicklers: Die meisten iPhones führen **Llama 3.2 3B** oder **Qwen3 4B** problemlos aus; **iPhone 15 Pro** und neuer können **Llama 3.1 8B** ausführen; und ein Mac mit **48 GB Unified Memory** kann **Llama 3.3 70B** ausführen. Dies sind die eigenen Empfehlungen des Entwicklers, keine unabhängig benchmarkten Werte — die tatsächliche Leistung hängt von Quantisierungsstufe, Kontextlänge und Hintergrundlast ab.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plattformen: iPhone, iPad, Mac und Vision Pro',
        itemHeadings: true,
        columns: ['Plattform', 'Was Sie erwartet', 'Wichtiger Hinweis'],
        rows: [
          {
            'Plattform': 'iPhone',
            'Was Sie erwartet': 'Erfordert iOS 17.0 oder neuer und einen A12-Bionic-Chip oder neuer (iPhone XS und neuer, laut App-Store-Eintrag). Die Modellgröße sollte zum verfügbaren RAM passen.',
            'Wichtiger Hinweis': 'Die meisten iPhones bewältigen Modelle mit 3–4 Milliarden Parametern gut; nur iPhone 15 Pro und neuer werden laut Entwickler für 8B-Modelle empfohlen.',
          },
          {
            'Plattform': 'iPad',
            'Was Sie erwartet': 'Führt dieselbe App und Modellbibliothek wie das iPhone aus. Die FAQ des Entwicklers empfiehlt mindestens 4 GB RAM, ein iPad Pro (16 GB) wird für größere Modelle empfohlen.',
            'Wichtiger Hinweis': 'Ältere iPads mit weniger RAM sind auf kleinere quantisierte Modelle beschränkt.',
          },
          {
            'Plattform': 'Mac',
            'Was Sie erwartet': 'Native App für Apple-Silicon-Macs (M-Serie). Enthält zudem macOS-spezifische Schreibdienste (Grammatikkorrektur, Zusammenfassung, Umformulierung), die andere Apps aufrufen können.',
            'Wichtiger Hinweis': 'Laut FAQ des Entwicklers werden Intel-Macs technisch unterstützt, aber nicht empfohlen — die Inferenz ist ohne Apple Silicons Unified Memory und Neural Engine spürbar langsamer.',
          },
          {
            'Plattform': 'Apple Vision Pro',
            'Was Sie erwartet': 'Der App-Store-Eintrag zeigt Vision-Pro-Kompatibilität für dieselbe App.',
            'Wichtiger Hinweis': 'Dieser Test hat die Vision-Pro-Erfahrung nicht eigenständig geprüft; behandeln Sie dies als im App Store gelistete Kompatibilität, nicht als praktisch verifiziertes Feature.',
          },
          {
            'Plattform': 'Android, Windows, Linux',
            'Was Sie erwartet': 'Kein offizieller Eintrag bei Google Play, im Microsoft Store oder in einem Linux-Paket-Repository.',
            'Wichtiger Hinweis': 'Zeitweise kursierte eine inoffizielle Beta-APK außerhalb des Google Play Store; sie ist nicht Teil der primären Marketing-Website oder des unterstützten Release-Kanals des Entwicklers, daher behandelt dieser Test Android nicht als unterstützte Plattform.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz: Was Private LLM sammelt und was nicht',
        content: [
          '**Das App-Store-Datenschutzlabel von Private LLM gibt an, dass der Entwickler keine Daten aus der App sammelt**, und die App erfordert weder Konto noch Login noch Registrierung. Der Entwickler bewirbt das Produkt selbst mit den Aussagen "keine Cloud, kein Tracking, keine Logins" und dass Unterhaltungen "das Gerät nie verlassen".',
          'Da die Inferenz nach dem Herunterladen eines Modells lokal läuft, gibt es bei normaler Nutzung keine Chat-Daten, die an einen Server übertragen werden — die Architektur selbst, nicht nur ein Richtlinienversprechen, hält Unterhaltungen auf dem Gerät.',
        ],
        items: [
          '**Kein Konto erforderlich.** Sie können die App herunterladen, kaufen und nutzen, ohne ein Profil anzulegen oder sich anzumelden.',
          '**Keine Datensammlung laut App-Store-Label.** Apples Datenschutz-Kennzeichnung für diesen Eintrag zeigt keine aus der App gesammelten Daten.',
          '**iCloud-Synchronisierung des Chat-Verlaufs ist nicht dokumentiert.** Die öffentliche FAQ des Entwicklers beschreibt keine iCloud-Synchronisierung von Unterhaltungen zwischen Geräten — dieser Test behandelt dies als unbestätigt, statt es anzunehmen. Wenn geräteübergreifende Chat-Synchronisierung für Sie wichtig ist, prüfen Sie das aktuelle Verhalten direkt in der App, bevor Sie sich darauf verlassen.',
          '**Sandbox-Ausführung.** Die App läuft innerhalb der Standard-App-Sandbox von Apple, derselben Isolation, der jede App-Store-App unterliegt — dies ist eine Plattformgarantie von Apple, kein Private-LLM-spezifisches Feature.',
        ],
      },
      history: {
        id: 'history',
        title: 'Firmengeschichte und Versions-Meilensteine',
        content: [
          '**Private LLM erschien im Juni 2023 im App Store**, Version 1.0.1 für iOS und Version 1.0.2 für macOS erschienen beide am 2. Juni 2023. Entwickelt wird die App von [Numen Technologies Limited](https://privatellm.app/en), das sich selbst als kleines, eigenfinanziertes Team ohne Venture-Capital-Finanzierung beschreibt.',
        ],
        items: [
          '**Juni 2023.** Erste App-Store-Veröffentlichung (iOS 1.0.1, macOS 1.0.2) mit einem feinabgestimmten Basismodell.',
          '**Juli 2023.** Siri- und Shortcuts-Unterstützung (App Intents) hinzugefügt.',
          '**September 2023.** Kompatibilität für die iPhone-15-Serie hinzugefügt.',
          '**Dezember 2023.** Unterstützung auf ältere iPhones und iPads mit nur 3 GB RAM erweitert.',
          '**Januar 2024.** Multi-Modell-Download eingeführt, wodurch die Bibliothek um TinyLlama, StableLM, Phi-2, Mistral, Llama und Gemma-Familienmodelle erweitert wurde.',
          '**Februar 2024.** macOS-spezifische Schreibdienste hinzugefügt: Grammatikkorrektur, Zusammenfassung und Umformulierung, die andere Mac-Apps aufrufen können.',
          '**März 2024.** Modellwechsel möglich, ohne die aktive Chat-Oberfläche zu verlassen.',
          '**Juli 2026.** Version 1.9.15 verlagerte Modell-Downloads auf ein CDN statt Hugging Face, was laut Release Notes für schnellere Downloads sorgt; dies ist die aktuelle Version zum Zeitpunkt dieses Tests.',
        ],
        note: 'Versionsverlauf laut den eigenen [Release Notes](https://privatellm.app/en/release-notes) des Entwicklers. Daten und Versionsnummern entsprechen den dort veröffentlichten Angaben; prüfen Sie die aktuelle Version direkt im App Store, bevor Sie sich auf ein bestimmtes Feature verlassen.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Kompromisse: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Einmaliger Kauf für 4,99 $',
            'Was das in der Praxis bedeutet': 'Kein Abonnement zu verfolgen oder zu kündigen; einmal zahlen, unbegrenzt auf allen Apple-Geräten nutzen.',
            'Einschränkung / Hinweis': 'Sie ist nicht kostenlos — Leser, die eine Gratis-Option möchten, sollten sie mit PocketPal AI oder Enclave AI vergleichen.',
          },
          {
            'Vorteil': '140+ Modelle in der Bibliothek',
            'Was das in der Praxis bedeutet': 'Breite Auswahl an allgemeinen, Coding- und sprachspezifischen Modellen, ohne selbst nach GGUF-Dateien suchen zu müssen.',
            'Einschränkung / Hinweis': 'Die Bibliothek wird vom Entwickler kuratiert; ein beliebiges eigenes Fine-Tune lässt sich nicht importieren, wie es manche Open-Source-Apps erlauben.',
          },
          {
            'Vorteil': 'OmniQuant- und GPTQ-Quantisierung',
            'Was das in der Praxis bedeutet': 'Der Entwickler gibt an, dass dies pro Bit mehr Modellqualität erhält als die einfachere Round-to-Nearest-Quantisierung.',
            'Einschränkung / Hinweis': 'Dies ist die eigene technische Behauptung des Entwicklers; PromptQuorum hat die konkreten Modelldateien von Private LLM nicht unabhängig gegen RTN-quantisierte Äquivalente benchmarkt.',
          },
          {
            'Vorteil': 'Kein Konto, keine Datensammlung',
            'Was das in der Praxis bedeutet': 'Die App direkt nach dem Kauf nutzen, ohne sich irgendwo anmelden zu müssen; das App-Store-Datenschutzlabel zeigt keine gesammelten Daten.',
            'Einschränkung / Hinweis': 'Da die App Closed Source ist, lässt sich die Behauptung "keine Datensammlung" nicht unabhängig per Code-Audit prüfen, wie bei einer Open-Source-App.',
          },
          {
            'Vorteil': 'Siri- und Shortcuts-Integration',
            'Was das in der Praxis bedeutet': 'Modellantworten per Sprachbefehl oder Automatisierung auslösen, ohne die App zu öffnen.',
            'Einschränkung / Hinweis': 'iOS beschränkt den GPU-Zugriff im Hintergrund, daher kann per Shortcuts ausgelöste Generierung langsamer oder eingeschränkter sein als Chat im Vordergrund.',
          },
          {
            'Vorteil': 'Familienfreigabe für bis zu sechs Personen',
            'Was das in der Praxis bedeutet': 'Ein Kauf für 4,99 $ kann eine ganze Apple-Familienfreigabe-Gruppe abdecken.',
            'Einschränkung / Hinweis': 'Jedes Familienmitglied benötigt weiterhin ein eigenes unterstütztes Gerät und genug Speicher/RAM für die gewählten Modelle.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Private LLM vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis', 'Modellflexibilität', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': 'Private LLM',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Preis': '4,99 $ Einmalkauf',
            'Modellflexibilität': '140+ kuratierte Modelle; OmniQuant/GPTQ-Quantisierung',
            'Wesentlicher Unterschied': 'Kostenpflichtig, Closed Source, kuratierte Bibliothek — kein beliebiger GGUF-Import',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iPhone/iPad, mit teilweiser Android-Unterstützung',
            'Preis': 'Kostenlos, quelloffen',
            'Modellflexibilität': 'Jede GGUF-Datei, die der Nutzer von Hugging Face oder anderswo bezieht',
            'Wesentlicher Unterschied': 'Kostenlos und quelloffen; erfordert mehr manuelle Modellverwaltung',
          },
          {
            'App': '[Enclave AI](/de/power-local-llm/enclave-ai-review)',
            'Plattformen': 'Variiert je nach Release — aktuellen Eintrag prüfen',
            'Preis': 'Siehe aktueller Eintrag',
            'Modellflexibilität': 'Siehe vollständiger Test für aktuelle Modellunterstützung',
            'Wesentlicher Unterschied': 'Siehe vollständiger Enclave-AI-Test für einen detaillierten Vergleich',
          },
          {
            'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Plattformen': 'iPhone/iPad/Mac',
            'Preis': 'Kostenlos',
            'Modellflexibilität': 'Basiert auf Apple MLX; Zugriff auf Apples On-Device-Basismodell',
            'Wesentlicher Unterschied': 'Kostenlose Alternative, speziell auf Apples MLX-Framework aufgebaut',
          },
          {
            'App': '[Arbiter](/de/power-local-llm/arbiter-local-ai-chat-review)',
            'Plattformen': 'Siehe vollständiger Test für aktuelle Plattformunterstützung',
            'Preis': 'Siehe aktueller Eintrag',
            'Modellflexibilität': 'Siehe vollständiger Test für aktuelle Modellunterstützung',
            'Wesentlicher Unterschied': 'Siehe vollständiger Arbiter-Test für einen detaillierten Vergleich',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Plattformen': 'iOS/Mac (Open Source, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Preis': 'Kostenlos, quelloffen',
            'Modellflexibilität': 'Eigene GGUF-Modelle über llama.cpp/ggml laden',
            'Wesentlicher Unterschied': 'Wurde laut eigener GitHub-README im August 2025 aus App Store und TestFlight entfernt — aktuelle Verfügbarkeit vor Nutzung prüfen',
          },
          {
            'App': '[Layla](https://www.layla-network.ai/)',
            'Plattformen': 'iOS und Android',
            'Preis': '19,99 $ plus In-App-Käufe',
            'Modellflexibilität': 'Eigene GGUF-Modelle; Fokus auf Charakter/Rollenspiel mit 100+ Stimmen',
            'Wesentlicher Unterschied': 'Plattformübergreifend (anders als Private LLM), aber teurer, mit Fokus auf Rollenspiel/Charaktere',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plattformen': 'Plattformübergreifende Flutter-App (primär Android; läuft auch auf anderen von Flutter unterstützten Plattformen)',
            'Preis': 'Kostenlos, quelloffen (MIT-Lizenz)',
            'Modellflexibilität': 'Jede GGUF-Datei über llama.cpp; verbindet sich zudem remote mit Anthropic, DeepSeek, Ollama, Mistral, OpenAI',
            'Wesentlicher Unterschied': 'Kostenlos, vollständig quelloffen und nicht auf reine lokale Inferenz beschränkt',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plattformen': 'Android',
            'Preis': 'Kostenlos, quelloffen',
            'Modellflexibilität': 'Mehrere Cloud-Provider-APIs plus lokale Ausführung',
            'Wesentlicher Unterschied': 'Nur Android; versteht sich als Multi-Provider-Client, nicht als lokal-first-App',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plattformen': 'Android (iOS geplant)',
            'Preis': 'Kostenlos, quelloffen',
            'Modellflexibilität': 'Führt GGUF-Modelle über Cactus Compute (llama.cpp für React Native) auf dem Gerät aus, oder koppelt sich mit einem selbst gehosteten AnythingLLM-Server',
            'Wesentlicher Unterschied': 'Für die Kopplung mit einem selbst gehosteten AnythingLLM-Workspace konzipiert, keine eigenständige Chat-App',
          },
        ],
        note: 'Plattform-, Preis- und Feature-Details für Apps Dritter ändern sich häufig — prüfen Sie die aktuellen Angaben im jeweiligen App-Eintrag, bevor Sie sich entscheiden. Besonders die App-Store-Verfügbarkeit von LLM Farm sollte erneut geprüft werden, da die eigene GitHub-README die Entfernung aus dem App Store zum Stand August 2025 beschreibt.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer Private LLM nutzen sollte',
        items: [
          '**Nur-Apple-Nutzer, die eine ausgereifte, kuratierte App möchten und einmal zahlen wollen.** iPhone-, iPad- und Mac-Besitzer, denen eine gepflegte, aktiv aktualisierte App wichtiger ist als das Zusammenstellen einer eigenen GGUF-Dateisammlung, erhalten für 4,99 $ eine große Modellbibliothek direkt einsatzbereit.',
          '**Leser, denen Quantisierungsqualität wichtiger ist als reine Modellanzahl.** Wenn der von OmniQuant und GPTQ beanspruchte Qualitätsvorteil pro Bit gegenüber Round-to-Nearest-Quantisierung für Ihren Anwendungsfall zählt, ist Private LLM eine der wenigen Consumer-Apps, die gezielt auf diesem Ansatz aufbaut.',
          '**Familien mit einer gemeinsamen Apple-ID-Gruppe.** Familienfreigabe bedeutet, dass ein einziger Kauf für 4,99 $ bis zu sechs Personen abdecken kann — günstiger pro Person, als für nicht-technische Familienmitglieder mehrere kostenlose Apps einzeln einzurichten.',
          '**Nutzer, die Siri-/Shortcuts-Automatisierung möchten.** Die beiden App Intents ermöglichen es, lokale KI-Antworten in bestehende iOS-Automatisierungen einzubinden, ohne die App zu öffnen.',
          '**Datenschutzbewusste Nutzer, die mit einer Closed-Source-App einverstanden sind.** Wenn "keine gesammelten Daten" laut App-Store-Datenschutzlabel und "kein Konto erforderlich" Ihren Anspruch erfüllen, ohne selbst den Quellcode prüfen zu müssen, liefert die On-Device-Architektur von Private LLM genau das.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer Private LLM nicht nutzen sollte',
        items: [
          '**Android-, Windows- oder Linux-Nutzer.** Private LLM hat auf keiner dieser Plattformen eine offizielle App — wählen Sie stattdessen [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) (teilweise Android-Unterstützung), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid), [ChatterUI](https://github.com/Vali-98/ChatterUI) oder [RikkaHub](https://github.com/rikkahub/rikkahub).',
          '**Leser, die eine völlig kostenlose Option möchten.** 4,99 $ sind günstig, aber nicht kostenlos — [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) und [Locally AI](/de/power-local-llm/locally-ai-review) kosten beide nichts.',
          '**Leser, die die größten offenen Modelle ausführen möchten.** Mobile Hardware begrenzt, was in den Speicher passt — selbst die eigene Empfehlung des Entwicklers begrenzt die meisten iPhones auf Modelle mit 3–8 Milliarden Parametern; nur ein Mac mit 48 GB+ Unified Memory erreicht die 70B-Klasse, und selbst diese Obergrenze liegt weit unter den größten offenen Modellen für Server-Hardware.',
          '**Teams oder Organisationen, die eine gemeinsam verwaltete Bereitstellung wünschen.** Private LLM ist eine Einzelnutzer-, Einzelgerät-Consumer-App ohne Admin-Konsole, gemeinsame Lizenzverwaltung oder Team-Abrechnung — Organisationen sollten stattdessen selbst gehostete, serverseitige lokale-LLM-Infrastruktur in Betracht ziehen.',
          '**Leser, die den Quellcode der App selbst prüfen möchten.** Private LLM ist Closed Source. Wenn Ihnen unabhängige Code-Überprüfung wichtig ist, ermöglicht eine Open-Source-Alternative wie [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) eine direkte Verifizierung des Verhaltens.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wie viel kostet Private LLM?',
            a: 'Private LLM kostet [4,99 $ als Einmalkauf](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) im Apple App Store, für diesen Test geprüft am 2026-09-05. Es gibt kein Abonnement und keine In-App-Käufe im aktuellen App-Store-Eintrag. App-Store-Preise können je nach Region variieren und sich über die Zeit ändern — prüfen Sie den aktuellen Preis vor dem Kauf.',
          },
          {
            q: 'Ist Private LLM für Android oder Windows verfügbar?',
            a: 'Es gibt keine offizielle Version bei Google Play, im Microsoft Store oder in einem Linux-Paket-Repository. Private LLM ist speziell für iPhone, iPad und Mac gebaut. Zeitweise kursierte eine inoffizielle Beta-APK außerhalb des Play Store, sie ist jedoch nicht Teil des primären, unterstützten Release-Kanals des Entwicklers, daher behandelt dieser Test Android als nicht unterstützt.',
          },
          {
            q: 'Wer entwickelt Private LLM?',
            a: 'Private LLM wird von [Numen Technologies Limited](https://privatellm.app/en) entwickelt, das sich auf der eigenen Website als kleines, eigenfinanziertes Zwei-Ingenieure-Team ohne Venture-Capital-Finanzierung beschreibt.',
          },
          {
            q: 'Was ist OmniQuant, und warum nutzt Private LLM es?',
            a: 'OmniQuant ist ein optimierungsbasiertes Quantisierungsverfahren, das den Quantisierungsbereich anhand von Kalibrierungsdaten anpasst, statt des einfacheren Round-to-Nearest-Ansatzes (RTN). Private LLM kombiniert OmniQuant bei manchen Modellen mit GPTQ. Der Entwickler gibt an, dass dies bei gegebener Bitbreite mehr von der ursprünglichen Ausgabequalität eines Modells erhält als RTN-Quantisierung; dies ist die eigene technische Behauptung des Entwicklers, kein unabhängiger PromptQuorum-Benchmark der konkreten Modelldateien von Private LLM.',
          },
          {
            q: 'Funktioniert Private LLM vollständig offline?',
            a: 'Ja, sobald ein Modell heruntergeladen wurde. Die App benötigt eine Internetverbindung nur zum Herunterladen eines Modells oder App-Updates; Chat sowie macOS-spezifische Dienste wie Grammatikkorrektur und Zusammenfassung laufen danach ohne Netzwerkverbindung.',
          },
          {
            q: 'Sammelt Private LLM persönliche Daten?',
            a: 'Apples Datenschutz-Kennzeichnung für diesen Eintrag im App Store gibt an, dass der Entwickler keine Daten aus der App sammelt. Zur Nutzung ist kein Konto oder Login erforderlich. Dieser Test stützt sich auf das App-Store-Datenschutzlabel und nicht auf ein unabhängiges Audit des Closed-Source-Codes der App.',
          },
          {
            q: 'Synchronisiert Private LLM den Chat-Verlauf über iCloud zwischen Geräten?',
            a: 'Dies ist in der öffentlichen FAQ des Entwicklers nicht dokumentiert. Dieser Test behandelt eine iCloud-Synchronisierung von Unterhaltungen als unbestätigt, statt sie anzunehmen — prüfen Sie das aktuelle Verhalten direkt in der App, bevor Sie sich auf geräteübergreifende Chat-Kontinuität verlassen.',
          },
          {
            q: 'Welche Modelle kann ich auf einem iPhone mit Private LLM ausführen?',
            a: 'Laut Empfehlung des Entwicklers führen die meisten iPhones Modelle mit 3–4 Milliarden Parametern problemlos aus (zum Beispiel Llama 3.2 3B oder Qwen3 4B), während iPhone 15 Pro und neuer Modelle mit 8 Milliarden Parametern wie Llama 3.1 8B bewältigen können. Dies sind die Empfehlungen des Entwicklers, keine unabhängig benchmarkten Ergebnisse — die tatsächliche Leistung hängt von Quantisierungsstufe und verfügbarem RAM ab.',
          },
          {
            q: 'Wie schneidet Private LLM im Vergleich zu PocketPal AI ab?',
            a: 'Private LLM ist eine kostenpflichtige (4,99 $), Closed-Source-App nur für Apple mit einer kuratierten Bibliothek von 140+ Modellen und OmniQuant/GPTQ-Quantisierung. [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) ist kostenlos und quelloffen, läuft auf iPhone/iPad mit teilweiser Android-Unterstützung und erlaubt den Import beliebiger GGUF-Dateien statt einer kuratierten Liste. Wählen Sie Private LLM für eine gepflegte Einmalkauf-Erfahrung mit großer integrierter Modellbibliothek; wählen Sie PocketPal AI für ein kostenloses, überprüfbares, manuell konfigurierteres Setup.',
          },
          {
            q: 'Deckt ein Kauf von Private LLM mehrere Geräte oder Familienmitglieder ab?',
            a: 'Ja. Der Kauf für 4,99 $ deckt iPhone, iPad und Mac für die kaufende Apple-ID ab, und Apples Familienfreigabe erweitert diesen einen Kauf auf bis zu sechs Personen in derselben Familienfreigabe-Gruppe.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Private LLM verdient seinen Platz unter den besser dokumentierten mobilen lokalen KI-Apps auf dieser Seite: ein klarer, direkt am App Store geprüfter Einmalpreis von 4,99 $, eine kuratierte Bibliothek mit mehr als 140 Open-Source-Modellen und ein konkreter, benannter Quantisierungsansatz (OmniQuant plus GPTQ) statt einer vagen "für Mobilgeräte optimiert"-Behauptung. Die eigenen Release Notes des Entwicklers zeigen drei Jahre kontinuierlicher Updates seit dem Start im Juni 2023 — eine spürbar längere Erfolgsbilanz als bei mehreren kleineren Apps in diesem Cluster. Die Kompromisse sind ebenso klar: Sie ist nur für Apple erhältlich, nicht kostenlos, ihre Modellliste ist kuratiert statt vollständig offen für eigene GGUF-Importe, und ihr Closed-Source-Code bedeutet, dass die Behauptung "keine gesammelten Daten" auf dem App-Store-Datenschutzlabel beruht statt auf unabhängiger Code-Prüfung. Leser, die eine gepflegte, kuratierte Einmalkauf-App über ihre Apple-Geräte hinweg möchten, sollten sie kaufen; Leser mit Android/Windows/Linux, Leser, die eine kostenlose Option möchten, oder Leser, die den Quellcode selbst prüfen möchten, sollten stattdessen mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) beginnen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Private LLM im App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — Preis, Plattformkompatibilität, Datenschutzlabel, Bewertungen und Versionsverlauf.',
          '[Offizielle Website von Private LLM](https://privatellm.app/en) — Produktübersicht, Preismodell und Datenschutzangaben.',
          '[FAQ von Private LLM](https://privatellm.app/en/faq) — unterstützte Modelle, Quantisierungsansatz, Hardwareanforderungen, Familienfreigabe und Siri-/Shortcuts-Integration.',
          '[Release Notes von Private LLM](https://privatellm.app/en/release-notes) — Versionsverlauf und Feature-Meilensteine von Juni 2023 bis Juli 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[PocketPal AI Test](/de/power-local-llm/pocketpal-ai-review) — die kostenlose, quelloffene Alternative mit manuellem GGUF-Import.',
          '[Die besten lokalen KI-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — der vollständige iPhone-App-Überblick, inklusive Private LLM, PocketPal AI und Locally AI.',
          '[Enclave AI Test](/de/power-local-llm/enclave-ai-review) — eine weitere On-Device-KI-App zum Vergleich.',
          '[Locally AI Test](/de/power-local-llm/locally-ai-review) — eine kostenlose, auf Apple MLX basierende Alternative.',
          '[Chatty-mini Test](/de/power-local-llm/chatty-mini-review) — eine kleinere, weniger dokumentierte, ausschließlich für Android verfügbare Alternative zum Vergleich.',
          '[Arbiter Local AI Chat Test](/de/power-local-llm/arbiter-local-ai-chat-review) — eine weitere auf dieser Seite behandelte lokale Chat-App.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) — ein breiteres Verzeichnis lokaler LLM-Tools über alle Plattformen hinweg.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-llm-review-hero-es.webp',
    title: 'Private LLM: Análisis (2026): Chat de IA en el dispositivo para iPhone, iPad y Mac',
    seoTitle: 'Private LLM 2026: IA en el dispositivo para iPhone y Mac',
    intro:
      'Private LLM, creada por [Numen Technologies Limited](https://privatellm.app/en), es una app de pago con compra única para iPhone, iPad y Mac que ejecuta modelos de lenguaje de código abierto completamente en el dispositivo, sin cuenta, sin respaldo en la nube y sin suscripción. Cuesta [4,99 $ en la App Store de Apple](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — una compra única que cubre las tres plataformas de Apple y, mediante Compartir en familia, hasta seis personas. Los precios de la App Store pueden variar según la región; confirma el precio actual en tu App Store local antes de comprar. La app admite más de 140 modelos de código abierto de familias como Llama, Qwen, Gemma, Mistral y Phi-4, y usa un método de cuantización llamado OmniQuant (combinado con GPTQ) que, según el desarrollador, conserva más calidad del modelo que la cuantización round-to-nearest más simple que usan algunas apps de la competencia. La pregunta práctica para quien compara apps de IA local no es si el chat en el dispositivo funciona en un iPhone — varias apps cubiertas en este sitio ya lo demuestran —, sino si una compra única de 4,99 $ con más de 140 modelos curados vale la pena frente a alternativas gratuitas como [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Enclave AI](/es/power-local-llm/enclave-ai-review).',
    metaDescription:
      'Análisis de Private LLM 2026: compra única de 4,99 $, solo iPhone/iPad/Mac, 140+ modelos, cuantización OmniQuant, sin suscripción. Precios, privacidad y comparación con PocketPal AI.',
    twitterDescription:
      'Private LLM 2026: una app de compra única de 4,99 $ para chat de IA en el dispositivo en iPhone, iPad y Mac. Cuantización OmniQuant, 140+ modelos y comparación con PocketPal AI y Enclave AI.',
    audience:
      'Usuarios de iPhone, iPad y Mac que deciden si una app de IA local con compra única vale la pena frente a alternativas gratuitas como PocketPal AI, Enclave AI o Locally AI — cubre precios, modelos compatibles, enfoque de cuantización y privacidad.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Private LLM review',
    targetKeywords: [
      'private llm review',
      'private llm app iphone',
      'private llm ios price',
      'private llm omniquant',
      'private llm vs pocketpal ai',
      'on-device ai chat iphone mac',
      'numen technologies private llm',
      'best local llm app for iphone',
    ],
    current_models_mentioned: ['Llama 3.3 70B', 'Llama 3.1 8B', 'Llama 3.2 3B', 'Qwen 2.5', 'Qwen3 4B', 'Gemma 2', 'Gemma 3', 'Phi-4', 'Mixtral', 'DeepSeek R1 Distill'],
    current_hardware_mentioned: ['iPhone 15 Pro', 'iPhone 12', 'Mac con Apple Silicon y 48 GB de memoria unificada', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Private LLM es una app de compra única de 4,99 $ para iPhone, iPad y Mac que ejecuta más de 140 modelos de IA de código abierto completamente en el dispositivo, sin cuenta y sin suscripción.** Creada por [Numen Technologies Limited](https://privatellm.app/en), usa cuantización OmniQuant y GPTQ, que según el desarrollador conserva más calidad de salida por bit que la cuantización round-to-nearest de algunas apps de la competencia. Una sola compra desbloquea toda la biblioteca de modelos en las tres plataformas de Apple y, mediante Compartir en familia, para hasta seis personas. Quienes busquen una alternativa gratuita, o usen Android/Windows/Linux, deberían compararla con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), que es gratuita y de código abierto.',
    quickAnswerTop: {
      en: {
        question: 'Is Private LLM worth the $4.99 price on the App Store?',
        answer:
          'Yes, if you want a polished, actively maintained, Apple-only local-AI app with a large curated model library (140+ models) and no subscription — the $4.99 is a one-time purchase covering iPhone, iPad, and Mac, with Family Sharing for up to six people. Skip it if you are on Android, Windows, or Linux, or if you specifically want a free and fully open-source app — PocketPal AI covers that case at no cost.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store; no subscription, no in-app purchases listed.',
          'iPhone, iPad, and Mac only — no Android, Windows, or Linux version on the App Store.',
          'Supports more than 140 open-source models: Llama, Qwen, Gemma, Mistral, Phi-4, and more.',
          'Uses OmniQuant and GPTQ quantization instead of simpler round-to-nearest quantization.',
          'Developer (Numen Technologies Limited) states the app collects no data and needs no account.',
        ],
        updatedDate: '2026-09-05',
      },
      es: {
        question: '¿Vale la pena Private LLM por 4,99 $ en la App Store?',
        answer:
          'Sí, si buscas una app de IA local pulida, mantenida activamente y exclusiva de Apple, con una gran biblioteca de modelos curados (140+) y sin suscripción — los 4,99 $ son una compra única que cubre iPhone, iPad y Mac, con Compartir en familia para hasta seis personas. Sáltatela si usas Android, Windows o Linux, o si buscas específicamente una app gratuita y totalmente de código abierto — PocketPal AI cubre ese caso sin costo.',
        bullets: [
          'Compra única de 4,99 $ en la App Store de Apple; sin suscripción ni compras dentro de la app.',
          'Solo iPhone, iPad y Mac — sin versión para Android, Windows o Linux en la App Store.',
          'Admite más de 140 modelos de código abierto: Llama, Qwen, Gemma, Mistral, Phi-4 y más.',
          'Usa cuantización OmniQuant y GPTQ en lugar de la cuantización round-to-nearest más simple.',
          'El desarrollador (Numen Technologies Limited) afirma que la app no recopila datos y no requiere cuenta.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Private LLM', anchor: 'what-is-private-llm' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Precios: la compra única explicada', anchor: 'pricing' },
      { label: 'Modelos compatibles y cuantización OmniQuant', anchor: 'models-and-quantization' },
      { label: 'Plataformas: iPhone, iPad, Mac y Vision Pro', anchor: 'platforms' },
      { label: 'Privacidad: qué recopila Private LLM y qué no', anchor: 'privacy' },
      { label: 'Historia de la empresa y hitos de versiones', anchor: 'history' },
      { label: 'Ventajas frente a limitaciones', anchor: 'tradeoffs' },
      { label: 'Private LLM frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Private LLM', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Private LLM', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Private LLM es una app de compra única de 4,99 $ para iPhone, iPad y Mac de Numen Technologies Limited que ejecuta más de 140 modelos de IA de código abierto completamente en el dispositivo con cuantización OmniQuant y GPTQ, sin cuenta, sin respaldo en la nube y sin suscripción.',
          },
          {
            type: 'plain-terms',
            text: 'Piénsalo como comprar una app de chat de IA local una sola vez, igual que cualquier app normal de la App Store, en lugar de suscribirte a un chatbot en la nube — el modelo se ejecuta en tu propio iPhone o Mac, así que nada de lo que escribas sale del dispositivo.',
          },
        ],
        items: [
          'Precio: [4,99 $ de compra única](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) en la App Store de Apple; sin suscripción y sin compras dentro de la app en el momento de este análisis.',
          'Plataformas: solo iPhone, iPad y Mac — sin app para Android, Windows o Linux en la App Store.',
          'Desarrollador: [Numen Technologies Limited](https://privatellm.app/en), un equipo pequeño y autofinanciado con base en la UE, según el propio sitio del desarrollador.',
          'Biblioteca de modelos: más de 140 modelos de código abierto, incluyendo Llama, Qwen, Gemma, Mistral, Phi-4 y modelos basados en DeepSeek R1 Distill.',
          'Cuantización: usa OmniQuant y GPTQ, que según el desarrollador producen mejor calidad de salida por bit que la cuantización round-to-nearest (RTN) que usan algunas apps de la competencia.',
          'Privacidad: la etiqueta de privacidad de la App Store indica que el desarrollador no recopila datos de la app; no se requiere cuenta ni inicio de sesión para chatear.',
          'Extras: integración con Siri y Atajos mediante dos App Intents, además de Compartir en familia para hasta seis personas con una sola compra.',
          'La versión 1.9.15 (julio de 2026) es la actual; la app se lanzó por primera vez en la App Store en junio de 2023.',
        ],
      },
      whatIsPrivateLLM: {
        id: 'what-is-private-llm',
        title: 'Qué es Private LLM',
        content: [
          '**Private LLM es una app nativa de Apple que descarga y ejecuta modelos de lenguaje de código abierto directamente en un iPhone, iPad o Mac, sin ningún componente en el servidor.** Una vez descargado un modelo, la app no necesita conexión a internet para generar una respuesta — todo se ejecuta localmente usando la CPU, la GPU y el Neural Engine del propio dispositivo.',
          'Está creada y mantenida por [Numen Technologies Limited](https://privatellm.app/en), que se describe en su propio sitio como "creada por dos ingenieros, no por fondos de capital riesgo" — un equipo pequeño y autofinanciado en lugar de una empresa respaldada por VC. La app apareció por primera vez en la App Store en junio de 2023 como [Private LLM - Local AI Chat](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) (ID de App Store 6448106860), y se ha actualizado continuamente desde entonces — la versión actual, 1.9.15, se lanzó en julio de 2026.',
          'A diferencia de las apps que envían las solicitudes de chat a una API remota, toda la propuesta de valor de Private LLM se basa en la inferencia local: el propio marketing del desarrollador usa las frases "sin nube, sin seguimiento, sin inicios de sesión" y afirma que las conversaciones "nunca salen del dispositivo". Este análisis evalúa esa afirmación frente a lo que documentan realmente la etiqueta de privacidad de la App Store y las preguntas frecuentes del propio desarrollador, en lugar de dar por buena la frase de marketing sin más.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**Configurar Private LLM lleva cuatro pasos y no requiere crear ninguna cuenta.** Todo el proceso, desde la descarga en la App Store hasta la primera respuesta, suele tardar unos minutos más el tiempo que tarde en descargarse el modelo elegido.',
        ],
        numberedItems: [
          {
            title: 'Comprar e instalar la app',
            whyItMatters: 'Descarga [Private LLM desde la App Store de Apple](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) por 4,99 $. Es una compra única — no hay periodo de prueba gratuito ni suscripción recurrente que gestionar.',
          },
          {
            title: 'Elige un modelo que se ajuste a tu dispositivo',
            whyItMatters: 'Abre el explorador de modelos dentro de la app y elige uno acorde a tu hardware. La propia guía del desarrollador sugiere que la mayoría de los iPhone ejecutan Llama 3.2 3B o Qwen3 4B sin problemas, el iPhone 15 Pro y posteriores pueden manejar Llama 3.1 8B, y un Mac con 48 GB de memoria unificada puede ejecutar Llama 3.3 70B.',
          },
          {
            title: 'Descarga el modelo',
            whyItMatters: 'Los archivos de modelo van desde unos 2 GB hasta decenas de gigabytes, según el número de parámetros y el nivel de cuantización. Este paso requiere conexión a internet; ninguno de los siguientes la requiere.',
          },
          {
            title: 'Chatea totalmente sin conexión',
            whyItMatters: 'Una vez descargado el modelo, puedes activar el modo avión si quieres comprobar tú mismo la afirmación de funcionamiento sin conexión — el chat, el resumen y la reformulación (en Mac) funcionan todos sin conexión de red.',
          },
          {
            title: 'Opcional: conecta Siri y Atajos',
            whyItMatters: 'Private LLM expone dos App Intents para Siri y la app Atajos, permitiendo activar una respuesta del modelo mediante un comando de voz o una automatización sin abrir la app directamente.',
          },
        ],
        note: 'Los tamaños exactos de descarga, la lista de modelos compatibles y los requisitos mínimos del dispositivo pueden cambiar entre actualizaciones de la App Store — confirma los detalles actuales en el explorador de modelos de la app o en [privatellm.app](https://privatellm.app/en) antes de comprometerte a una descarga grande con un plan de datos limitado.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios: la compra única explicada',
        itemHeadings: true,
        content: [
          '**Private LLM cuesta 4,99 $ como compra única en la App Store de Apple — no hay suscripción ni compras dentro de la app en el listado actual.** Ese precio se verificó directamente en la [ficha de la App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) para este análisis. Los precios de la App Store pueden variar según la región; confirma el precio actual antes de comprar.',
        ],
        columns: ['Lo que pagas', 'Lo que incluye', 'Lo que no incluye'],
        rows: [
          {
            'Lo que pagas': '4,99 $ (compra única)',
            'Lo que incluye': 'App completa en iPhone, iPad y Mac; acceso a la biblioteca completa de 140+ modelos; Compartir en familia para hasta seis personas',
            'Lo que no incluye': 'Ninguna versión para Android, Windows o Linux — la compra en la App Store no desbloquea una licencia multiplataforma',
          },
        ],
        note: 'Los precios de la App Store pueden cambiar sin previo aviso y variar según la región. Confirma el precio actual en la [ficha de la App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) antes de comprar. Verificado para este análisis el 2026-09-05.',
      },
      modelsAndQuantization: {
        id: 'models-and-quantization',
        title: 'Modelos compatibles y cuantización OmniQuant',
        content: [
          '**La biblioteca de Private LLM incluye más de 140 modelos de código abierto, entre modelos de propósito general, de programación y ajustes específicos por idioma.** Las familias que menciona la propia documentación del desarrollador incluyen Llama 3, 3.1, 3.2 y 3.3; modelos basados en Qwen 2.5 y Qwen3; Gemma 2 y Gemma 3; Phi-4; Mixtral; y modelos basados en DeepSeek R1 Distill, junto con opciones específicas por idioma/región como SauerkrautLM (alemán), DictaLM (hebreo), RakutenAI (japonés) y Yi (chino).',
          'La app cuantiza estos modelos usando **OmniQuant**, combinado con **GPTQ** para algunos modelos — ambos son métodos de cuantización basados en optimización, en lugar del enfoque más simple round-to-nearest (RTN) que usan algunas apps de IA local de la competencia. Según las propias páginas comparativas del desarrollador, la cuantización basada en optimización ajusta el rango de cuantización con datos de calibración, lo que puede conservar más calidad de salida del modelo original a un mismo ancho de bits que RTN. Esta es una afirmación técnica del propio desarrollador, respaldada por su propia documentación — no ha sido verificada de forma independiente por PromptQuorum en los archivos de modelo cuantizados específicos de Private LLM.',
          'Recomendación de hardware del desarrollador: la mayoría de los iPhone ejecutan **Llama 3.2 3B** o **Qwen3 4B** sin problemas; el **iPhone 15 Pro** y posteriores pueden manejar **Llama 3.1 8B**; y un Mac con **48 GB de memoria unificada** puede ejecutar **Llama 3.3 70B**. Son recomendaciones propias del desarrollador, no cifras verificadas de forma independiente — el rendimiento real depende del nivel de cuantización, la longitud de contexto y la carga de apps en segundo plano.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plataformas: iPhone, iPad, Mac y Vision Pro',
        itemHeadings: true,
        columns: ['Plataforma', 'Qué esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'Qué esperar': 'Requiere iOS 17.0 o posterior y un chip A12 Bionic o más reciente (iPhone XS en adelante, según la ficha de la App Store). El tamaño del modelo elegido debe ajustarse a la RAM disponible.',
            'Nota importante': 'La mayoría de los iPhone manejan bien modelos de 3.000-4.000 millones de parámetros; solo el iPhone 15 Pro y posteriores se recomiendan para modelos de 8B, según el desarrollador.',
          },
          {
            'Plataforma': 'iPad',
            'Qué esperar': 'Ejecuta la misma app y biblioteca de modelos que el iPhone. Las preguntas frecuentes del desarrollador recomiendan al menos 4 GB de RAM, con un iPad Pro (16 GB) recomendado para modelos más grandes.',
            'Nota importante': 'Los iPad más antiguos con menos RAM se limitan a modelos cuantizados más pequeños.',
          },
          {
            'Plataforma': 'Mac',
            'Qué esperar': 'App nativa para Mac con Apple Silicon (serie M). Incluye también servicios de escritura específicos de macOS (corrección gramatical, resumen, reformulación) que otras apps pueden invocar.',
            'Nota importante': 'Las preguntas frecuentes del desarrollador indican que los Mac con Intel son técnicamente compatibles pero no recomendados — la inferencia es notablemente más lenta sin la memoria unificada y el Neural Engine de Apple Silicon.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'Qué esperar': 'La ficha de la App Store muestra compatibilidad con Vision Pro para la misma app.',
            'Nota importante': 'Este análisis no probó de forma independiente la experiencia en Vision Pro; trátalo como compatibilidad listada en la App Store, no como una característica verificada de forma práctica.',
          },
          {
            'Plataforma': 'Android, Windows, Linux',
            'Qué esperar': 'No hay ficha oficial en Google Play, la Microsoft Store ni en ningún repositorio de paquetes de Linux.',
            'Nota importante': 'En ciertos momentos de la historia de la app ha circulado un APK beta no oficial fuera de Google Play; no forma parte del sitio de marketing principal ni del canal de lanzamiento compatible del desarrollador, por lo que este análisis no considera Android una plataforma compatible.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad: qué recopila Private LLM y qué no',
        content: [
          '**La etiqueta de privacidad de la App Store de Private LLM indica que el desarrollador no recopila ningún dato de la app**, y la app no requiere cuenta, inicio de sesión ni registro para usarse. El propio marketing del desarrollador describe el producto con las frases "sin nube, sin seguimiento, sin inicios de sesión" y afirma que las conversaciones "nunca salen del dispositivo".',
          'Como la inferencia se ejecuta localmente después de descargar un modelo, no hay datos de chat que transmitir a un servidor durante el uso normal — es la propia arquitectura, no solo una promesa de política, lo que mantiene las conversaciones en el dispositivo.',
        ],
        items: [
          '**No requiere cuenta.** Puedes descargar, comprar y usar la app sin crear un perfil ni iniciar sesión.',
          '**Sin recopilación de datos, según la etiqueta de la App Store.** La etiqueta de privacidad de Apple para esta ficha muestra que no se recopilan datos de la app.',
          '**La sincronización del historial de chat por iCloud no está documentada.** Las preguntas frecuentes públicas del desarrollador no describen sincronización por iCloud de conversaciones entre dispositivos — este análisis lo trata como no confirmado en lugar de asumir que existe. Si la sincronización de chat entre dispositivos te importa, verifica el comportamiento actual directamente en la app antes de depender de ello.',
          '**Ejecución en sandbox.** La app se ejecuta dentro del sandbox estándar de Apple, el mismo aislamiento al que está sujeta cualquier app de la App Store — es una garantía de la plataforma de Apple, no una característica específica de Private LLM.',
        ],
      },
      history: {
        id: 'history',
        title: 'Historia de la empresa y hitos de versiones',
        content: [
          '**Private LLM se lanzó en la App Store en junio de 2023**, con la versión 1.0.1 para iOS y la versión 1.0.2 para macOS lanzadas ambas el 2 de junio de 2023. La desarrolla [Numen Technologies Limited](https://privatellm.app/en), que se describe como un equipo pequeño y autofinanciado, sin financiación de capital riesgo.',
        ],
        items: [
          '**Junio de 2023.** Lanzamiento inicial en la App Store (iOS 1.0.1, macOS 1.0.2) con un modelo base ajustado.',
          '**Julio de 2023.** Se añadió soporte para Siri y Atajos (App Intents).',
          '**Septiembre de 2023.** Se añadió compatibilidad con la serie iPhone 15.',
          '**Diciembre de 2023.** Se amplió el soporte a iPhone y iPad más antiguos con tan solo 3 GB de RAM.',
          '**Enero de 2024.** Se introdujo la descarga de múltiples modelos, ampliando la biblioteca con modelos de las familias TinyLlama, StableLM, Phi-2, Mistral, Llama y Gemma.',
          '**Febrero de 2024.** Se añadieron servicios de escritura específicos de macOS: corrección gramatical, resumen y reformulación, invocables desde otras apps de Mac.',
          '**Marzo de 2024.** Cambio de modelo sin salir de la interfaz de chat activa.',
          '**Julio de 2026.** La versión 1.9.15 pasó las descargas de modelos a una CDN en lugar de Hugging Face, lo que las notas de la versión describen como más rápido; es la versión actual en el momento de este análisis.',
        ],
        note: 'Historial de versiones basado en la propia página de [notas de la versión](https://privatellm.app/en/release-notes) del desarrollador. Las fechas y números de versión son los publicados allí; verifica la versión actual directamente en la App Store antes de dar por hecha una característica concreta.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en la práctica', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Compra única de 4,99 $',
            'Qué significa en la práctica': 'Sin suscripción que vigilar ni cancelar; pagas una vez y usas la app indefinidamente en tus dispositivos Apple.',
            'Limitación / advertencia': 'No es gratis — quienes busquen una opción sin costo deberían compararla con PocketPal AI o Enclave AI.',
          },
          {
            'Ventaja': 'Biblioteca de 140+ modelos',
            'Qué significa en la práctica': 'Amplia elección de modelos de propósito general, programación y específicos por idioma sin tener que buscar archivos GGUF por tu cuenta.',
            'Limitación / advertencia': 'La biblioteca la cura el desarrollador; no puedes importar un ajuste fino personalizado arbitrario como sí permiten algunas apps de código abierto.',
          },
          {
            'Ventaja': 'Cuantización OmniQuant y GPTQ',
            'Qué significa en la práctica': 'El desarrollador afirma que esto conserva más calidad del modelo por bit que la cuantización round-to-nearest más simple.',
            'Limitación / advertencia': 'Es una afirmación técnica propia del desarrollador; PromptQuorum no ha comparado de forma independiente los archivos de modelo específicos de Private LLM frente a equivalentes cuantizados con RTN.',
          },
          {
            'Ventaja': 'Sin cuenta, sin recopilación de datos',
            'Qué significa en la práctica': 'Usa la app inmediatamente tras la compra sin tener que registrarte en nada; la etiqueta de privacidad de la App Store muestra que no se recopilan datos.',
            'Limitación / advertencia': 'Al ser una app de código cerrado, la afirmación de "sin recopilación" no se puede auditar de forma independiente como sí ocurre con una app de código abierto.',
          },
          {
            'Ventaja': 'Integración con Siri y Atajos',
            'Qué significa en la práctica': 'Activa respuestas del modelo mediante comandos de voz o automatizaciones sin abrir la app.',
            'Limitación / advertencia': 'iOS restringe el acceso a la GPU en segundo plano, así que la generación activada por Atajos puede ser más lenta o limitada que el chat en primer plano.',
          },
          {
            'Ventaja': 'Compartir en familia para hasta seis personas',
            'Qué significa en la práctica': 'Una sola compra de 4,99 $ puede cubrir a todo un grupo de Compartir en familia de Apple.',
            'Limitación / advertencia': 'Cada miembro de la familia sigue necesitando su propio dispositivo compatible y suficiente almacenamiento/RAM para los modelos que elija.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Private LLM frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio', 'Flexibilidad de modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'Private LLM',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Precio': 'Compra única de 4,99 $',
            'Flexibilidad de modelos': '140+ modelos curados; cuantización OmniQuant/GPTQ',
            'Diferencia clave': 'De pago, código cerrado, biblioteca curada — sin importación arbitraria de GGUF',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, con cierto soporte en Android',
            'Precio': 'Gratis, de código abierto',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF que el usuario obtenga de Hugging Face u otro lugar',
            'Diferencia clave': 'Gratis y de código abierto; requiere más gestión manual de modelos',
          },
          {
            'App': '[Enclave AI](/es/power-local-llm/enclave-ai-review)',
            'Plataformas': 'Varía según la versión — consulta la ficha actual',
            'Precio': 'Consulta la ficha actual',
            'Flexibilidad de modelos': 'Consulta el análisis completo para ver el soporte de modelos actual',
            'Diferencia clave': 'Consulta el análisis completo de Enclave AI para una comparación detallada',
          },
          {
            'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Plataformas': 'iPhone/iPad/Mac',
            'Precio': 'Gratis',
            'Flexibilidad de modelos': 'Construida sobre Apple MLX; acceso al modelo base en el dispositivo de Apple',
            'Diferencia clave': 'Alternativa gratuita construida específicamente sobre el framework MLX de Apple',
          },
          {
            'App': '[Arbiter](/es/power-local-llm/arbiter-local-ai-chat-review)',
            'Plataformas': 'Consulta el análisis completo para el soporte de plataformas actual',
            'Precio': 'Consulta la ficha actual',
            'Flexibilidad de modelos': 'Consulta el análisis completo para ver el soporte de modelos actual',
            'Diferencia clave': 'Consulta el análisis completo de Arbiter para una comparación detallada',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Plataformas': 'iOS/Mac (código abierto, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Precio': 'Gratis, de código abierto',
            'Flexibilidad de modelos': 'Carga modelos GGUF personalizados vía llama.cpp/ggml',
            'Diferencia clave': 'Fue retirada de la App Store y TestFlight en agosto de 2025 según su propio README de GitHub — verifica la disponibilidad actual antes de confiar en ella',
          },
          {
            'App': '[Layla](https://www.layla-network.ai/)',
            'Plataformas': 'iOS y Android',
            'Precio': '19,99 $ más compras dentro de la app',
            'Flexibilidad de modelos': 'Modelos GGUF personalizados; enfoque en personajes/rol con más de 100 voces',
            'Diferencia clave': 'Multiplataforma (a diferencia de Private LLM), pero con precio más alto y enfoque en rol/personajes',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plataformas': 'App Flutter multiplataforma (principalmente Android; también funciona en otras plataformas que soporta Flutter)',
            'Precio': 'Gratis, de código abierto (licencia MIT)',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF vía llama.cpp; también se conecta remotamente con Anthropic, DeepSeek, Ollama, Mistral y OpenAI',
            'Diferencia clave': 'Gratis, totalmente de código abierto y no limitada a inferencia solo local',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plataformas': 'Android',
            'Precio': 'Gratis, de código abierto',
            'Flexibilidad de modelos': 'Varias APIs de proveedores en la nube más ejecución local',
            'Diferencia clave': 'Solo Android; se presenta como cliente multiproveedor, no como app local-first',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plataformas': 'Android (iOS planeado)',
            'Precio': 'Gratis, de código abierto',
            'Flexibilidad de modelos': 'Ejecuta modelos GGUF en el dispositivo vía Cactus Compute (llama.cpp para React Native), o se conecta con un servidor AnythingLLM autoalojado',
            'Diferencia clave': 'Diseñada para emparejarse con un espacio de trabajo AnythingLLM autoalojado, no como app de chat independiente',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia — verifica los datos actuales en la ficha propia de cada app antes de decidir. La disponibilidad de LLM Farm en la App Store en particular debería volver a comprobarse, ya que su propio README de GitHub la describía como retirada de la App Store en agosto de 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Private LLM',
        items: [
          '**Usuarios exclusivamente de Apple que quieren una app pulida y curada y no les importa pagar una vez.** Los propietarios de iPhone, iPad y Mac que valoran una app mantenida y actualizada activamente por encima de armar su propia colección de archivos GGUF obtienen una gran biblioteca de modelos lista para usar por 4,99 $.',
          '**Lectores que valoran la calidad de la cuantización más que la cantidad bruta de modelos.** Si la ventaja de calidad por bit que reivindican OmniQuant y GPTQ frente a la cuantización round-to-nearest te importa para tu caso de uso, Private LLM es una de las pocas apps de consumo construidas específicamente en torno a ese enfoque.',
          '**Familias que comparten un grupo de Apple ID.** Compartir en familia significa que una sola compra de 4,99 $ puede cubrir hasta seis personas, más económico por persona que configurar varias apps gratuitas por separado para familiares menos técnicos.',
          '**Usuarios que quieren automatización con Siri/Atajos.** Los dos App Intents permiten integrar respuestas de IA local en automatizaciones de iOS ya existentes sin abrir la app.',
          '**Usuarios conscientes de la privacidad, cómodos con una app de código cerrado.** Si "sin datos recopilados" según la etiqueta de privacidad de la App Store y "sin cuenta requerida" cumplen tu criterio sin necesidad de auditar tú mismo el código fuente, la arquitectura en el dispositivo de Private LLM cumple exactamente eso.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Private LLM',
        items: [
          '**Usuarios de Android, Windows o Linux.** Private LLM no tiene app oficial en ninguna de estas plataformas — elige en su lugar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) (soporte parcial en Android), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid), [ChatterUI](https://github.com/Vali-98/ChatterUI) o [RikkaHub](https://github.com/rikkahub/rikkahub).',
          '**Lectores que quieren una opción completamente gratuita.** 4,99 $ es económico, pero no es gratis — [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) y [Locally AI](/es/power-local-llm/locally-ai-review) no cuestan nada.',
          '**Lectores que quieren ejecutar los modelos abiertos más grandes.** El hardware móvil limita lo que cabe en memoria — incluso la propia guía del desarrollador limita a la mayoría de los iPhone a modelos de 3.000-8.000 millones de parámetros; solo un Mac con 48 GB+ de memoria unificada alcanza la categoría de 70B, y ese techo sigue muy por debajo de los modelos abiertos más grandes disponibles para hardware de servidor.',
          '**Equipos u organizaciones que buscan una implementación compartida y gestionada centralmente.** Private LLM es una app de consumo de un solo usuario y un solo dispositivo, sin consola de administración, gestión de licencias compartida ni facturación de equipo — las organizaciones deberían considerar en su lugar infraestructura de LLM local autoalojada del lado del servidor.',
          '**Lectores que quieren auditar ellos mismos el código fuente de la app.** Private LLM es de código cerrado. Si la revisión independiente del código te importa, una alternativa de código abierto como [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) permite verificar el comportamiento directamente.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto cuesta Private LLM?',
            a: 'Private LLM cuesta [4,99 $ como compra única](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) en la App Store de Apple, verificado para este análisis el 2026-09-05. No hay suscripción ni compras dentro de la app en la ficha actual de la App Store. Los precios de la App Store pueden variar según la región y cambiar con el tiempo — confirma el precio actual antes de comprar.',
          },
          {
            q: '¿Está disponible Private LLM en Android o Windows?',
            a: 'No existe versión oficial en Google Play, la Microsoft Store ni en ningún repositorio de paquetes de Linux. Private LLM está construida específicamente para iPhone, iPad y Mac. En ciertos momentos ha circulado un APK beta no oficial fuera de Google Play, pero no forma parte del canal de lanzamiento compatible principal del desarrollador, por lo que este análisis considera Android no compatible.',
          },
          {
            q: '¿Quién desarrolla Private LLM?',
            a: 'Private LLM la desarrolla [Numen Technologies Limited](https://privatellm.app/en), que se describe en su propio sitio como un equipo pequeño y autofinanciado de dos ingenieros, sin financiación de capital riesgo.',
          },
          {
            q: '¿Qué es OmniQuant y por qué lo usa Private LLM?',
            a: 'OmniQuant es un método de cuantización basado en optimización que ajusta el rango de cuantización con datos de calibración, en lugar del enfoque más simple round-to-nearest (RTN). Private LLM combina OmniQuant con GPTQ para algunos modelos. El desarrollador afirma que esto conserva más calidad de salida original del modelo a un ancho de bits determinado que la cuantización RTN; es una afirmación técnica propia del desarrollador, no un benchmark independiente de PromptQuorum sobre los archivos de modelo específicos de Private LLM.',
          },
          {
            q: '¿Funciona Private LLM completamente sin conexión?',
            a: 'Sí, una vez descargado un modelo. La app solo necesita conexión a internet para descargar un modelo o una actualización de la app; después, el chat y los servicios específicos de macOS como la corrección gramatical y el resumen funcionan sin conexión de red.',
          },
          {
            q: '¿Recopila Private LLM datos personales?',
            a: 'La etiqueta de privacidad de Apple para esta ficha de la App Store indica que el desarrollador no recopila ningún dato de la app. No se requiere cuenta ni inicio de sesión para usarla. Este análisis se basa en la etiqueta de privacidad de la App Store, no en una auditoría independiente del código cerrado de la app.',
          },
          {
            q: '¿Sincroniza Private LLM el historial de chat entre dispositivos vía iCloud?',
            a: 'Esto no está documentado en las preguntas frecuentes públicas del desarrollador. Este análisis trata la sincronización por iCloud de conversaciones como no confirmada en lugar de asumir que existe — verifica el comportamiento actual directamente en la app antes de depender de la continuidad de chat entre dispositivos.',
          },
          {
            q: '¿Qué modelos puedo ejecutar en un iPhone con Private LLM?',
            a: 'Según la propia guía del desarrollador, la mayoría de los iPhone ejecutan bien modelos de 3.000-4.000 millones de parámetros (por ejemplo, Llama 3.2 3B o Qwen3 4B), mientras que el iPhone 15 Pro y posteriores pueden manejar modelos de 8.000 millones de parámetros como Llama 3.1 8B. Son recomendaciones del desarrollador, no resultados verificados de forma independiente — el rendimiento real depende del nivel de cuantización y la RAM disponible.',
          },
          {
            q: '¿Cómo se compara Private LLM con PocketPal AI?',
            a: 'Private LLM es una app de pago (4,99 $), de código cerrado y exclusiva de Apple, con una biblioteca curada de 140+ modelos y cuantización OmniQuant/GPTQ. [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) es gratuita y de código abierto, funciona en iPhone/iPad con cierto soporte en Android, y permite importar cualquier archivo GGUF en lugar de elegir de una lista curada. Elige Private LLM para una experiencia mantenida y de compra única con una amplia biblioteca de modelos integrada; elige PocketPal AI para una configuración gratuita, auditable y más manual.',
          },
          {
            q: '¿Una compra de Private LLM cubre varios dispositivos o miembros de la familia?',
            a: 'Sí. La compra de 4,99 $ cubre iPhone, iPad y Mac para el Apple ID que la realiza, y Compartir en familia de Apple extiende esa única compra a hasta seis personas dentro del mismo grupo de Compartir en familia.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Private LLM se gana su lugar entre las apps de IA local móvil mejor documentadas cubiertas en este sitio: un precio único de 4,99 $ claro y verificado directamente en la App Store, una biblioteca curada de más de 140 modelos de código abierto y un enfoque de cuantización concreto y con nombre propio (OmniQuant más GPTQ) en lugar de una vaga afirmación de "optimizado para móviles". Las propias notas de la versión del desarrollador muestran tres años de actualizaciones continuas desde el lanzamiento en junio de 2023, un historial notablemente más largo que el de varias apps más pequeñas de este grupo. Las contrapartidas son igual de claras: es exclusiva de Apple, no es gratis, su lista de modelos es curada en lugar de estar totalmente abierta a importaciones GGUF personalizadas, y su código cerrado significa que la afirmación de "sin datos recopilados" se apoya en la etiqueta de privacidad de la App Store en lugar de en una revisión independiente del código. Quienes quieran una app mantenida, curada y de compra única en todos sus dispositivos Apple deberían comprarla; quienes usen Android/Windows/Linux, busquen una opción gratuita, o quieran auditar el código fuente por su cuenta, deberían empezar en su lugar con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Private LLM en la App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — precio, compatibilidad de plataformas, etiqueta de privacidad, valoraciones e historial de versiones.',
          '[Sitio oficial de Private LLM](https://privatellm.app/en) — descripción del producto, modelo de precios y afirmaciones de privacidad.',
          '[Preguntas frecuentes de Private LLM](https://privatellm.app/en/faq) — modelos compatibles, enfoque de cuantización, requisitos de hardware, Compartir en familia e integración con Siri/Atajos.',
          '[Notas de la versión de Private LLM](https://privatellm.app/en/release-notes) — historial de versiones e hitos de funciones de junio de 2023 a julio de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — la alternativa gratuita y de código abierto con importación manual de GGUF.',
          '[Las mejores apps de IA local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el resumen completo de apps para iPhone, incluyendo Private LLM, PocketPal AI y Locally AI.',
          '[Análisis de Enclave AI](/es/power-local-llm/enclave-ai-review) — otra app de IA en el dispositivo para comparar.',
          '[Análisis de Locally AI](/es/power-local-llm/locally-ai-review) — una alternativa gratuita basada en Apple MLX.',
          '[Análisis de Chatty-mini](/es/power-local-llm/chatty-mini-review) — una alternativa más pequeña, menos documentada y exclusiva de Android, para comparar.',
          '[Análisis de Arbiter Local AI Chat](/es/power-local-llm/arbiter-local-ai-chat-review) — otra app de chat local cubierta en este sitio.',
          '[El directorio completo de software LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas de LLM local en todas las plataformas.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-llm-review-hero-fr.webp',
    title: 'Private LLM : test (2026) de l\'IA embarquée pour iPhone, iPad et Mac',
    seoTitle: 'Private LLM 2026 : IA embarquée pour iPhone et Mac',
    intro:
      'Private LLM, développée par [Numen Technologies Limited](https://privatellm.app/en), est une application payante à achat unique pour iPhone, iPad et Mac qui exécute des modèles de langage open source entièrement sur l\'appareil, sans compte, sans repli vers le cloud et sans abonnement. Elle coûte [4,99 $ sur l\'App Store d\'Apple](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — un achat unique qui couvre les trois plateformes Apple et, via le Partage familial, jusqu\'à six personnes. Les prix de l\'App Store peuvent varier selon la région ; vérifiez le prix actuel sur l\'App Store français avant d\'acheter. L\'application prend en charge plus de 140 modèles open source de familles telles que Llama, Qwen, Gemma, Mistral et Phi-4, et utilise une méthode de quantification appelée OmniQuant (associée à GPTQ) qui, selon l\'éditeur, préserve davantage de qualité du modèle que la quantification round-to-nearest plus simple utilisée par certaines applications concurrentes. La question pratique pour un lecteur qui compare des applications d\'IA locale n\'est pas de savoir si le chat embarqué fonctionne sur un iPhone — plusieurs applications déjà couvertes sur ce site le prouvent —, mais si un achat unique à 4,99 $ avec plus de 140 modèles sélectionnés vaut le coup face à des alternatives gratuites comme [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Enclave AI](/fr/power-local-llm/enclave-ai-review).',
    metaDescription:
      'Test de Private LLM 2026 : achat unique à 4,99 $, iPhone/iPad/Mac uniquement, 140+ modèles, quantification OmniQuant, sans abonnement. Prix, confidentialité et comparaison avec PocketPal AI.',
    twitterDescription:
      'Private LLM 2026 : une application à achat unique de 4,99 $ pour le chat IA embarqué sur iPhone, iPad et Mac. Quantification OmniQuant, 140+ modèles et comparaison avec PocketPal AI et Enclave AI.',
    audience:
      'Utilisateurs d\'iPhone, d\'iPad et de Mac qui hésitent entre une application d\'IA locale à achat unique et des alternatives gratuites comme PocketPal AI, Enclave AI ou Locally AI — couvre le prix, les modèles pris en charge, l\'approche de quantification et la confidentialité.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Private LLM review',
    targetKeywords: [
      'private llm review',
      'private llm app iphone',
      'private llm ios price',
      'private llm omniquant',
      'private llm vs pocketpal ai',
      'on-device ai chat iphone mac',
      'numen technologies private llm',
      'best local llm app for iphone',
    ],
    current_models_mentioned: ['Llama 3.3 70B', 'Llama 3.1 8B', 'Llama 3.2 3B', 'Qwen 2.5', 'Qwen3 4B', 'Gemma 2', 'Gemma 3', 'Phi-4', 'Mixtral', 'DeepSeek R1 Distill'],
    current_hardware_mentioned: ['iPhone 15 Pro', 'iPhone 12', 'Mac Apple Silicon avec 48 Go de mémoire unifiée', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Private LLM est une application à achat unique de 4,99 $ pour iPhone, iPad et Mac qui exécute plus de 140 modèles d\'IA open source entièrement sur l\'appareil, sans compte et sans abonnement.** Développée par [Numen Technologies Limited](https://privatellm.app/en), elle utilise la quantification OmniQuant et GPTQ, dont l\'éditeur affirme qu\'elle préserve davantage de qualité de sortie par bit que la quantification round-to-nearest de certaines applications concurrentes. Un seul achat débloque l\'intégralité de la bibliothèque de modèles sur les trois plateformes Apple et, via le Partage familial, pour jusqu\'à six personnes. Les lecteurs qui souhaitent une alternative gratuite, ou qui utilisent Android/Windows/Linux, devraient la comparer à [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), gratuite et open source.',
    quickAnswerTop: {
      en: {
        question: 'Is Private LLM worth the $4.99 price on the App Store?',
        answer:
          'Yes, if you want a polished, actively maintained, Apple-only local-AI app with a large curated model library (140+ models) and no subscription — the $4.99 is a one-time purchase covering iPhone, iPad, and Mac, with Family Sharing for up to six people. Skip it if you are on Android, Windows, or Linux, or if you specifically want a free and fully open-source app — PocketPal AI covers that case at no cost.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store; no subscription, no in-app purchases listed.',
          'iPhone, iPad, and Mac only — no Android, Windows, or Linux version on the App Store.',
          'Supports more than 140 open-source models: Llama, Qwen, Gemma, Mistral, Phi-4, and more.',
          'Uses OmniQuant and GPTQ quantization instead of simpler round-to-nearest quantization.',
          'Developer (Numen Technologies Limited) states the app collects no data and needs no account.',
        ],
        updatedDate: '2026-09-05',
      },
      fr: {
        question: 'Private LLM vaut-elle ses 4,99 $ sur l\'App Store ?',
        answer:
          'Oui, si vous voulez une application d\'IA locale soignée, activement maintenue, exclusive à Apple, avec une vaste bibliothèque de modèles sélectionnés (140+) et sans abonnement — les 4,99 $ correspondent à un achat unique couvrant iPhone, iPad et Mac, avec le Partage familial pour jusqu\'à six personnes. Passez votre chemin si vous êtes sur Android, Windows ou Linux, ou si vous voulez spécifiquement une application gratuite et entièrement open source — PocketPal AI répond à ce cas sans frais.',
        bullets: [
          'Achat unique de 4,99 $ sur l\'App Store d\'Apple ; pas d\'abonnement, pas d\'achats intégrés répertoriés.',
          'iPhone, iPad et Mac uniquement — aucune version Android, Windows ou Linux sur l\'App Store.',
          'Prend en charge plus de 140 modèles open source : Llama, Qwen, Gemma, Mistral, Phi-4 et bien d\'autres.',
          'Utilise la quantification OmniQuant et GPTQ plutôt que la quantification round-to-nearest plus simple.',
          'L\'éditeur (Numen Technologies Limited) déclare que l\'application ne collecte aucune donnée et ne nécessite aucun compte.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Ce qu\'est Private LLM', anchor: 'what-is-private-llm' },
      { label: 'Comment démarrer', anchor: 'how-to-get-started' },
      { label: 'Prix : l\'achat unique expliqué', anchor: 'pricing' },
      { label: 'Modèles pris en charge et quantification OmniQuant', anchor: 'models-and-quantization' },
      { label: 'Plateformes : iPhone, iPad, Mac et Vision Pro', anchor: 'platforms' },
      { label: 'Confidentialité : ce que Private LLM collecte, et ce qu\'elle ne collecte pas', anchor: 'privacy' },
      { label: 'Histoire de l\'entreprise et jalons des versions', anchor: 'history' },
      { label: 'Compromis : avantages contre limites', anchor: 'tradeoffs' },
      { label: 'Private LLM face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser Private LLM', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser Private LLM', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Private LLM est une application à achat unique de 4,99 $ pour iPhone, iPad et Mac développée par Numen Technologies Limited, qui exécute plus de 140 modèles d\'IA open source entièrement sur l\'appareil avec la quantification OmniQuant et GPTQ — sans compte, sans repli vers le cloud et sans abonnement.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez cela comme l\'achat unique d\'une application de chat IA locale, comme n\'importe quelle application classique de l\'App Store, plutôt qu\'un abonnement à un chatbot cloud — le modèle tourne sur votre propre iPhone ou Mac, donc rien de ce que vous tapez ne quitte l\'appareil.',
          },
        ],
        items: [
          'Prix : [achat unique de 4,99 $](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) sur l\'App Store d\'Apple ; pas d\'abonnement ni d\'achats intégrés répertoriés au moment de ce test.',
          'Plateformes : iPhone, iPad et Mac uniquement — aucune application Android, Windows ou Linux sur l\'App Store.',
          'Éditeur : [Numen Technologies Limited](https://privatellm.app/en), une petite équipe autofinancée basée dans l\'UE, selon le site de l\'éditeur.',
          'Bibliothèque de modèles : plus de 140 modèles open source, dont Llama, Qwen, Gemma, Mistral, Phi-4 et des modèles basés sur DeepSeek R1 Distill.',
          'Quantification : utilise OmniQuant et GPTQ, qui selon l\'éditeur produisent une meilleure qualité de sortie par bit que la quantification round-to-nearest (RTN) utilisée par certaines applications concurrentes.',
          'Confidentialité : la fiche de confidentialité de l\'App Store indique que l\'éditeur ne collecte aucune donnée via l\'application ; aucun compte ni connexion n\'est requis pour discuter.',
          'Extras : intégration Siri et Raccourcis via deux App Intents, plus le Partage familial pour jusqu\'à six personnes pour un seul achat.',
          'La version 1.9.15 (juillet 2026) est la version actuelle ; l\'application est apparue pour la première fois sur l\'App Store en juin 2023.',
        ],
      },
      whatIsPrivateLLM: {
        id: 'what-is-private-llm',
        title: 'Ce qu\'est Private LLM',
        content: [
          '**Private LLM est une application Apple native qui télécharge et exécute des modèles de langage open source directement sur un iPhone, un iPad ou un Mac, sans aucun composant côté serveur.** Une fois un modèle téléchargé, l\'application n\'a besoin d\'aucune connexion internet pour générer une réponse — tout tourne localement via le CPU, le GPU et le Neural Engine de l\'appareil.',
          'Elle est développée et maintenue par [Numen Technologies Limited](https://privatellm.app/en), qui se décrit sur son propre site comme "conçue par deux ingénieurs, pas par des fonds de capital-risque" — une petite équipe autofinancée plutôt qu\'une entreprise soutenue par des investisseurs. L\'application est apparue pour la première fois sur l\'App Store en juin 2023 sous le nom [Private LLM - Local AI Chat](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) (identifiant App Store 6448106860), et a été mise à jour en continu depuis — la version actuelle, 1.9.15, est sortie en juillet 2026.',
          'Contrairement aux applications qui envoient les requêtes de chat à une API distante, toute la proposition de valeur de Private LLM repose sur l\'inférence locale : l\'éditeur affirme dans sa propre communication "pas de cloud, pas de suivi, pas de connexion" et que les conversations "ne quittent jamais l\'appareil". Ce test évalue cette affirmation par rapport à ce que documentent réellement la fiche de confidentialité de l\'App Store et la FAQ de l\'éditeur, plutôt que de prendre le slogan pour argent comptant.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment démarrer',
        content: [
          '**La mise en route de Private LLM prend quatre étapes et ne nécessite aucune création de compte.** L\'ensemble du processus, du téléchargement sur l\'App Store à la première réponse, prend généralement quelques minutes, plus le temps de téléchargement du modèle choisi.',
        ],
        numberedItems: [
          {
            title: 'Acheter et installer l\'application',
            whyItMatters: 'Téléchargez [Private LLM depuis l\'App Store d\'Apple](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) pour 4,99 $. C\'est un achat unique — il n\'y a ni essai gratuit ni abonnement récurrent à gérer.',
          },
          {
            title: 'Choisir un modèle adapté à votre appareil',
            whyItMatters: 'Ouvrez l\'explorateur de modèles intégré et choisissez un modèle dimensionné pour votre matériel. Les recommandations de l\'éditeur suggèrent que la plupart des iPhone exécutent confortablement Llama 3.2 3B ou Qwen3 4B, que l\'iPhone 15 Pro et les modèles plus récents peuvent gérer Llama 3.1 8B, et qu\'un Mac avec 48 Go de mémoire unifiée peut exécuter Llama 3.3 70B.',
          },
          {
            title: 'Télécharger le modèle',
            whyItMatters: 'Les fichiers de modèle vont d\'environ 2 Go à plusieurs dizaines de gigaoctets selon le nombre de paramètres et le niveau de quantification. Cette étape nécessite une connexion internet ; aucune des étapes suivantes n\'en a besoin.',
          },
          {
            title: 'Discuter entièrement hors ligne',
            whyItMatters: 'Une fois le modèle téléchargé, activez le mode avion si vous voulez vérifier vous-même l\'affirmation de fonctionnement hors ligne — le chat, le résumé et la reformulation (sur Mac) fonctionnent tous sans connexion réseau.',
          },
          {
            title: 'Optionnel : connecter Siri et Raccourcis',
            whyItMatters: 'Private LLM expose deux App Intents pour Siri et l\'application Raccourcis, permettant de déclencher une réponse du modèle via une commande vocale ou une automatisation sans ouvrir l\'application directement.',
          },
        ],
        note: 'Les tailles de téléchargement exactes, la liste des modèles pris en charge et la configuration minimale requise peuvent changer d\'une mise à jour de l\'App Store à l\'autre — vérifiez les informations actuelles dans l\'explorateur de modèles de l\'application ou sur [privatellm.app](https://privatellm.app/en) avant de lancer un téléchargement volumineux avec un forfait de données limité.',
      },
      pricing: {
        id: 'pricing',
        title: 'Prix : l\'achat unique expliqué',
        itemHeadings: true,
        content: [
          '**Private LLM coûte 4,99 $ en achat unique sur l\'App Store d\'Apple — il n\'y a ni abonnement ni achats intégrés sur la fiche actuelle.** Ce prix a été vérifié directement sur la [fiche App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) pour ce test. Les prix de l\'App Store peuvent varier selon la région ; vérifiez le prix actuel avant d\'acheter.',
        ],
        columns: ['Ce que vous payez', 'Ce que ça couvre', 'Ce qui n\'est pas inclus'],
        rows: [
          {
            'Ce que vous payez': '4,99 $ (achat unique)',
            'Ce que ça couvre': 'Application complète sur iPhone, iPad et Mac ; accès à l\'intégralité de la bibliothèque de 140+ modèles ; Partage familial pour jusqu\'à six personnes',
            'Ce qui n\'est pas inclus': 'Aucune version Android, Windows ou Linux — l\'achat sur l\'App Store ne débloque pas de licence multiplateforme',
          },
        ],
        note: 'Les prix de l\'App Store peuvent changer sans préavis et varier selon la région. Vérifiez le prix actuel sur la [fiche App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) avant d\'acheter. Vérifié pour ce test le 2026-09-05.',
      },
      modelsAndQuantization: {
        id: 'models-and-quantization',
        title: 'Modèles pris en charge et quantification OmniQuant',
        content: [
          '**La bibliothèque de Private LLM compte plus de 140 modèles open source, couvrant des usages généralistes, du code et des réglages spécifiques par langue.** Les familles citées dans la documentation de l\'éditeur incluent Llama 3, 3.1, 3.2 et 3.3 ; des modèles basés sur Qwen 2.5 et Qwen3 ; Gemma 2 et Gemma 3 ; Phi-4 ; Mixtral ; et des modèles basés sur DeepSeek R1 Distill, ainsi que des options spécifiques à certaines régions comme SauerkrautLM (allemand), DictaLM (hébreu), RakutenAI (japonais) et Yi (chinois).',
          'L\'application quantifie ces modèles avec **OmniQuant**, associé à **GPTQ** pour certains modèles — deux méthodes de quantification basées sur l\'optimisation plutôt que l\'approche plus simple round-to-nearest (RTN) utilisée par certaines applications d\'IA locale concurrentes. Selon les propres pages comparatives de l\'éditeur, la quantification basée sur l\'optimisation ajuste la plage de quantification à partir de données de calibration, ce qui peut préserver davantage la qualité de sortie du modèle d\'origine à une largeur de bits donnée que le RTN. Il s\'agit d\'une affirmation technique propre à l\'éditeur, appuyée par sa propre documentation — elle n\'a pas été évaluée de manière indépendante par PromptQuorum sur les fichiers de modèles quantifiés spécifiques de Private LLM.',
          'Recommandations matérielles de l\'éditeur : la plupart des iPhone exécutent confortablement **Llama 3.2 3B** ou **Qwen3 4B** ; l\'**iPhone 15 Pro** et les modèles plus récents peuvent gérer **Llama 3.1 8B** ; et un Mac avec **48 Go de mémoire unifiée** peut exécuter **Llama 3.3 70B**. Ce sont les recommandations propres de l\'éditeur, pas des chiffres évalués de manière indépendante — la performance réelle dépend du niveau de quantification, de la longueur de contexte et de la charge des applications en arrière-plan.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plateformes : iPhone, iPad, Mac et Vision Pro',
        itemHeadings: true,
        columns: ['Plateforme', 'À quoi s\'attendre', 'Remarque importante'],
        rows: [
          {
            'Plateforme': 'iPhone',
            'À quoi s\'attendre': 'Nécessite iOS 17.0 ou ultérieur et une puce A12 Bionic ou plus récente (iPhone XS et suivants, selon la fiche App Store). La taille du modèle choisi doit correspondre à la RAM disponible.',
            'Remarque importante': 'La plupart des iPhone gèrent bien les modèles de 3 à 4 milliards de paramètres ; seuls l\'iPhone 15 Pro et les modèles plus récents sont recommandés pour les modèles 8B, selon l\'éditeur.',
          },
          {
            'Plateforme': 'iPad',
            'À quoi s\'attendre': 'Exécute la même application et la même bibliothèque de modèles que l\'iPhone. La FAQ de l\'éditeur recommande au moins 4 Go de RAM, avec un iPad Pro (16 Go) recommandé pour les modèles plus volumineux.',
            'Remarque importante': 'Les iPad plus anciens avec moins de RAM sont limités aux modèles quantifiés plus petits.',
          },
          {
            'Plateforme': 'Mac',
            'À quoi s\'attendre': 'Application native pour Mac Apple Silicon (série M). Inclut également des services d\'écriture spécifiques à macOS (correction grammaticale, résumé, reformulation) que d\'autres applications peuvent solliciter.',
            'Remarque importante': 'La FAQ de l\'éditeur indique que les Mac Intel sont techniquement pris en charge mais non recommandés — l\'inférence est nettement plus lente sans la mémoire unifiée et le Neural Engine de l\'Apple Silicon.',
          },
          {
            'Plateforme': 'Apple Vision Pro',
            'À quoi s\'attendre': 'La fiche App Store affiche une compatibilité Vision Pro pour la même application.',
            'Remarque importante': 'Ce test n\'a pas évalué de manière indépendante l\'expérience sur Vision Pro ; considérez-la comme une compatibilité listée sur l\'App Store, pas comme une fonctionnalité vérifiée en pratique.',
          },
          {
            'Plateforme': 'Android, Windows, Linux',
            'À quoi s\'attendre': 'Aucune fiche officielle sur Google Play, le Microsoft Store ou un dépôt de paquets Linux.',
            'Remarque importante': 'Un APK bêta non officiel a circulé en dehors du Google Play Store à certains moments de l\'histoire de l\'application ; il ne fait pas partie du site marketing principal ni du canal de diffusion pris en charge par l\'éditeur, donc ce test ne considère pas Android comme une plateforme prise en charge.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité : ce que Private LLM collecte, et ce qu\'elle ne collecte pas',
        content: [
          '**La fiche de confidentialité de l\'App Store de Private LLM indique que l\'éditeur ne collecte aucune donnée via l\'application**, et celle-ci ne nécessite ni compte, ni connexion, ni inscription pour être utilisée. La propre communication de l\'éditeur décrit le produit avec les formules "pas de cloud, pas de suivi, pas de connexion" et affirme que les conversations "ne quittent jamais l\'appareil".',
          'Comme l\'inférence s\'exécute localement une fois un modèle téléchargé, il n\'y a aucune donnée de chat à transmettre à un serveur en usage normal — c\'est l\'architecture elle-même, pas seulement une promesse de politique, qui garde les conversations sur l\'appareil.',
        ],
        items: [
          '**Aucun compte requis.** Vous pouvez télécharger, acheter et utiliser l\'application sans créer de profil ni vous connecter.',
          '**Aucune collecte de données, selon la fiche App Store.** L\'étiquette de confidentialité d\'Apple pour cette fiche ne montre aucune donnée collectée par l\'application.',
          '**La synchronisation de l\'historique via iCloud n\'est pas documentée.** La FAQ publique de l\'éditeur ne décrit aucune synchronisation iCloud des conversations entre appareils — ce test considère ce point comme non confirmé plutôt que de supposer qu\'il existe. Si la synchronisation multi-appareils compte pour vous, vérifiez le comportement actuel directement dans l\'application avant de vous y fier.',
          '**Exécution en bac à sable (sandbox).** L\'application s\'exécute dans le bac à sable standard d\'Apple, la même isolation à laquelle est soumise toute application de l\'App Store — c\'est une garantie de la plateforme Apple, pas une fonctionnalité propre à Private LLM.',
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire de l\'entreprise et jalons des versions',
        content: [
          '**Private LLM a été lancée sur l\'App Store en juin 2023**, la version 1.0.1 pour iOS et la version 1.0.2 pour macOS étant toutes deux sorties le 2 juin 2023. Elle est développée par [Numen Technologies Limited](https://privatellm.app/en), qui se décrit comme une petite équipe autofinancée, sans financement de capital-risque.',
        ],
        items: [
          '**Juin 2023.** Première sortie sur l\'App Store (iOS 1.0.1, macOS 1.0.2) avec un modèle de base affiné.',
          '**Juillet 2023.** Ajout de la prise en charge de Siri et Raccourcis (App Intents).',
          '**Septembre 2023.** Ajout de la compatibilité avec la série iPhone 15.',
          '**Décembre 2023.** Prise en charge étendue aux iPhone et iPad plus anciens avec seulement 3 Go de RAM.',
          '**Janvier 2024.** Introduction du téléchargement multi-modèles, élargissant la bibliothèque avec des modèles des familles TinyLlama, StableLM, Phi-2, Mistral, Llama et Gemma.',
          '**Février 2024.** Ajout de services d\'écriture spécifiques à macOS : correction grammaticale, résumé et reformulation, accessibles depuis d\'autres applications Mac.',
          '**Mars 2024.** Changement de modèle sans quitter l\'interface de chat active.',
          '**Juillet 2026.** La version 1.9.15 a déplacé les téléchargements de modèles vers un CDN plutôt que Hugging Face, ce que les notes de version décrivent comme plus rapide ; il s\'agit de la version actuelle au moment de ce test.',
        ],
        note: 'Historique des versions basé sur la page des [notes de version](https://privatellm.app/en/release-notes) de l\'éditeur. Les dates et numéros de version sont ceux publiés à cet endroit ; vérifiez la version actuelle directement sur l\'App Store avant de compter sur une fonctionnalité précise.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages contre limites',
        columns: ['Avantage', 'Ce que ça signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Achat unique de 4,99 $',
            'Ce que ça signifie en usage réel': 'Pas d\'abonnement à suivre ou à résilier ; payez une fois, utilisez indéfiniment sur vos appareils Apple.',
            'Limite / réserve': 'Ce n\'est pas gratuit — les lecteurs qui veulent une option sans coût devraient la comparer à PocketPal AI ou Enclave AI.',
          },
          {
            'Avantage': 'Bibliothèque de 140+ modèles',
            'Ce que ça signifie en usage réel': 'Large choix de modèles généralistes, de code et spécifiques par langue sans avoir à chercher soi-même des fichiers GGUF.',
            'Limite / réserve': 'La bibliothèque est sélectionnée par l\'éditeur ; vous ne pouvez pas importer un fine-tune personnalisé arbitraire comme le permettent certaines applications open source.',
          },
          {
            'Avantage': 'Quantification OmniQuant et GPTQ',
            'Ce que ça signifie en usage réel': 'L\'éditeur affirme que cela préserve davantage de qualité du modèle par bit que la quantification round-to-nearest plus simple.',
            'Limite / réserve': 'C\'est une affirmation technique propre à l\'éditeur ; PromptQuorum n\'a pas comparé de manière indépendante les fichiers de modèles spécifiques de Private LLM à des équivalents quantifiés en RTN.',
          },
          {
            'Avantage': 'Aucun compte, aucune collecte de données',
            'Ce que ça signifie en usage réel': 'Utilisez l\'application immédiatement après l\'achat sans rien avoir à créer ; la fiche de confidentialité de l\'App Store ne montre aucune donnée collectée.',
            'Limite / réserve': 'L\'application étant à code source fermé, l\'affirmation d\'absence de collecte ne peut pas être auditée de manière indépendante comme pour une application open source.',
          },
          {
            'Avantage': 'Intégration Siri et Raccourcis',
            'Ce que ça signifie en usage réel': 'Déclenchez des réponses du modèle via des commandes vocales ou des automatisations sans ouvrir l\'application.',
            'Limite / réserve': 'iOS restreint l\'accès au GPU en arrière-plan, donc la génération déclenchée via Raccourcis peut être plus lente ou plus limitée que le chat au premier plan.',
          },
          {
            'Avantage': 'Partage familial pour jusqu\'à six personnes',
            'Ce que ça signifie en usage réel': 'Un seul achat de 4,99 $ peut couvrir tout un groupe de Partage familial Apple.',
            'Limite / réserve': 'Chaque membre de la famille a toujours besoin de son propre appareil compatible et d\'assez de stockage/RAM pour les modèles qu\'il choisit.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Private LLM face aux alternatives',
        columns: ['Application', 'Plateformes', 'Prix', 'Flexibilité des modèles', 'Différence clé'],
        rows: [
          {
            'Application': 'Private LLM',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Prix': 'Achat unique de 4,99 $',
            'Flexibilité des modèles': '140+ modèles sélectionnés ; quantification OmniQuant/GPTQ',
            'Différence clé': 'Payante, code source fermé, bibliothèque sélectionnée — pas d\'import GGUF arbitraire',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iPhone/iPad, avec un support Android partiel',
            'Prix': 'Gratuite, open source',
            'Flexibilité des modèles': 'N\'importe quel fichier GGUF que l\'utilisateur récupère sur Hugging Face ou ailleurs',
            'Différence clé': 'Gratuite et open source ; demande davantage de gestion manuelle des modèles',
          },
          {
            'Application': '[Enclave AI](/fr/power-local-llm/enclave-ai-review)',
            'Plateformes': 'Variable selon la version — vérifiez la fiche actuelle',
            'Prix': 'Voir la fiche actuelle',
            'Flexibilité des modèles': 'Voir le test complet pour la prise en charge actuelle des modèles',
            'Différence clé': 'Voir le test complet d\'Enclave AI pour une comparaison détaillée',
          },
          {
            'Application': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Plateformes': 'iPhone/iPad/Mac',
            'Prix': 'Gratuite',
            'Flexibilité des modèles': 'Construite sur Apple MLX ; accès au modèle de fondation embarqué d\'Apple',
            'Différence clé': 'Alternative gratuite construite spécifiquement sur le framework MLX d\'Apple',
          },
          {
            'Application': '[Arbiter](/fr/power-local-llm/arbiter-local-ai-chat-review)',
            'Plateformes': 'Voir le test complet pour la prise en charge actuelle des plateformes',
            'Prix': 'Voir la fiche actuelle',
            'Flexibilité des modèles': 'Voir le test complet pour la prise en charge actuelle des modèles',
            'Différence clé': 'Voir le test complet d\'Arbiter pour une comparaison détaillée',
          },
          {
            'Application': '[LLM Farm](https://llmfarm.space/)',
            'Plateformes': 'iOS/Mac (open source, GitHub : [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Prix': 'Gratuite, open source',
            'Flexibilité des modèles': 'Charge des modèles GGUF personnalisés via llama.cpp/ggml',
            'Différence clé': 'Retirée de l\'App Store et de TestFlight en août 2025 selon son propre README GitHub — vérifiez la disponibilité actuelle avant d\'en dépendre',
          },
          {
            'Application': '[Layla](https://www.layla-network.ai/)',
            'Plateformes': 'iOS et Android',
            'Prix': '19,99 $ plus achats intégrés',
            'Flexibilité des modèles': 'Modèles GGUF personnalisés ; axée personnages/jeu de rôle avec plus de 100 voix',
            'Différence clé': 'Multiplateforme (contrairement à Private LLM), mais plus chère, avec une orientation jeu de rôle/personnages',
          },
          {
            'Application': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plateformes': 'Application Flutter multiplateforme (Android en priorité ; fonctionne aussi sur d\'autres plateformes prises en charge par Flutter)',
            'Prix': 'Gratuite, open source (licence MIT)',
            'Flexibilité des modèles': 'N\'importe quel fichier GGUF via llama.cpp ; se connecte aussi à distance à Anthropic, DeepSeek, Ollama, Mistral, OpenAI',
            'Différence clé': 'Gratuite, entièrement open source, et pas limitée à l\'inférence locale uniquement',
          },
          {
            'Application': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plateformes': 'Android',
            'Prix': 'Gratuite, open source',
            'Flexibilité des modèles': 'Plusieurs API de fournisseurs cloud plus exécution locale',
            'Différence clé': 'Android uniquement ; se positionne comme un client multi-fournisseurs, pas une application local-first',
          },
          {
            'Application': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plateformes': 'Android (iOS prévu)',
            'Prix': 'Gratuite, open source',
            'Flexibilité des modèles': 'Exécute des modèles GGUF sur l\'appareil via Cactus Compute (llama.cpp pour React Native), ou se connecte à un serveur AnythingLLM auto-hébergé',
            'Différence clé': 'Conçue pour se coupler à un espace de travail AnythingLLM auto-hébergé, pas une application de chat autonome',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment — vérifiez les informations actuelles sur la fiche propre de chaque application avant de décider. La disponibilité de LLM Farm sur l\'App Store en particulier devrait être revérifiée, son propre README GitHub la décrivant comme retirée de l\'App Store depuis août 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser Private LLM',
        items: [
          '**Les utilisateurs exclusivement Apple qui veulent une application soignée et sélectionnée et acceptent de payer une fois.** Les propriétaires d\'iPhone, d\'iPad et de Mac qui privilégient une application maintenue et régulièrement mise à jour plutôt que de constituer eux-mêmes une collection de fichiers GGUF obtiennent d\'emblée une vaste bibliothèque de modèles pour 4,99 $.',
          '**Les lecteurs qui privilégient la qualité de quantification plutôt que le nombre brut de modèles.** Si l\'avantage de qualité par bit revendiqué par OmniQuant et GPTQ par rapport à la quantification round-to-nearest compte pour votre usage, Private LLM est l\'une des rares applications grand public construite spécifiquement autour de cette approche.',
          '**Les familles partageant un même groupe Apple ID.** Le Partage familial signifie qu\'un seul achat de 4,99 $ peut couvrir jusqu\'à six personnes, moins cher par personne que de configurer individuellement plusieurs applications gratuites pour des membres de la famille peu technophiles.',
          '**Les utilisateurs qui veulent l\'automatisation Siri/Raccourcis.** Les deux App Intents permettent d\'intégrer des réponses d\'IA locale dans des automatisations iOS existantes sans ouvrir l\'application.',
          '**Les utilisateurs soucieux de confidentialité à l\'aise avec une application à code source fermé.** Si "aucune donnée collectée" selon la fiche de confidentialité de l\'App Store et "aucun compte requis" répondent à vos attentes sans avoir besoin d\'auditer vous-même le code source, l\'architecture embarquée de Private LLM offre exactement cela.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser Private LLM',
        items: [
          '**Les utilisateurs d\'Android, Windows ou Linux.** Private LLM n\'a d\'application officielle sur aucune de ces plateformes — choisissez plutôt [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) (support Android partiel), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid), [ChatterUI](https://github.com/Vali-98/ChatterUI) ou [RikkaHub](https://github.com/rikkahub/rikkahub).',
          '**Les lecteurs qui veulent une option totalement gratuite.** 4,99 $, c\'est peu cher, mais ce n\'est pas gratuit — [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) et [Locally AI](/fr/power-local-llm/locally-ai-review) ne coûtent rien.',
          '**Les lecteurs qui veulent faire tourner les plus grands modèles ouverts.** Le matériel mobile limite ce qui tient en mémoire — même les recommandations propres de l\'éditeur plafonnent la plupart des iPhone à des modèles de 3 à 8 milliards de paramètres ; seul un Mac avec 48 Go+ de mémoire unifiée atteint la catégorie 70B, et ce plafond reste très en deçà des plus grands modèles ouverts disponibles pour du matériel serveur.',
          '**Les équipes ou organisations qui veulent un déploiement partagé et géré de manière centralisée.** Private LLM est une application grand public mono-utilisateur, mono-appareil, sans console d\'administration, sans gestion de licences partagée ni facturation d\'équipe — les organisations devraient plutôt se tourner vers une infrastructure de LLM local auto-hébergée côté serveur.',
          '**Les lecteurs qui veulent auditer eux-mêmes le code source de l\'application.** Private LLM est à code source fermé. Si la revue de code indépendante compte pour vous, une alternative open source comme [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) permet de vérifier directement le comportement.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Combien coûte Private LLM ?',
            a: 'Private LLM coûte [4,99 $ en achat unique](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) sur l\'App Store d\'Apple, vérifié pour ce test le 2026-09-05. Il n\'y a ni abonnement ni achats intégrés sur la fiche actuelle de l\'App Store. Les prix de l\'App Store peuvent varier selon la région et évoluer dans le temps — confirmez le prix actuel avant d\'acheter.',
          },
          {
            q: 'Private LLM est-elle disponible sur Android ou Windows ?',
            a: 'Aucune version officielle n\'existe sur Google Play, le Microsoft Store ou un dépôt de paquets Linux. Private LLM est conçue spécifiquement pour iPhone, iPad et Mac. Un APK bêta non officiel a circulé en dehors du Play Store à certains moments, mais il ne fait pas partie du canal de diffusion officiel de l\'éditeur, donc ce test considère Android comme non pris en charge.',
          },
          {
            q: 'Qui développe Private LLM ?',
            a: 'Private LLM est développée par [Numen Technologies Limited](https://privatellm.app/en), qui se décrit sur son propre site comme une petite équipe autofinancée de deux ingénieurs, sans financement de capital-risque.',
          },
          {
            q: 'Qu\'est-ce qu\'OmniQuant, et pourquoi Private LLM l\'utilise-t-elle ?',
            a: 'OmniQuant est une méthode de quantification basée sur l\'optimisation qui ajuste la plage de quantification à partir de données de calibration, plutôt que l\'approche plus simple round-to-nearest (RTN). Private LLM associe OmniQuant à GPTQ pour certains modèles. L\'éditeur affirme que cela préserve davantage la qualité de sortie d\'origine d\'un modèle à une largeur de bits donnée que la quantification RTN ; il s\'agit d\'une affirmation technique propre à l\'éditeur, pas d\'un benchmark indépendant de PromptQuorum sur les fichiers de modèles spécifiques de Private LLM.',
          },
          {
            q: 'Private LLM fonctionne-t-elle entièrement hors ligne ?',
            a: 'Oui, une fois un modèle téléchargé. L\'application n\'a besoin d\'une connexion internet que pour télécharger un modèle ou une mise à jour de l\'application ; le chat et les services spécifiques à macOS comme la correction grammaticale et le résumé fonctionnent ensuite sans connexion réseau.',
          },
          {
            q: 'Private LLM collecte-t-elle des données personnelles ?',
            a: 'L\'étiquette de confidentialité d\'Apple pour cette fiche de l\'App Store indique que l\'éditeur ne collecte aucune donnée via l\'application. Aucun compte ni connexion n\'est requis pour l\'utiliser. Ce test s\'appuie sur l\'étiquette de confidentialité de l\'App Store plutôt que sur un audit indépendant du code source fermé de l\'application.',
          },
          {
            q: 'Private LLM synchronise-t-elle l\'historique de chat entre appareils via iCloud ?',
            a: 'Ce n\'est pas documenté dans la FAQ publique de l\'éditeur. Ce test considère la synchronisation iCloud des conversations comme non confirmée plutôt que de supposer qu\'elle existe — vérifiez le comportement actuel directement dans l\'application avant de compter sur une continuité de chat entre appareils.',
          },
          {
            q: 'Quels modèles puis-je exécuter sur un iPhone avec Private LLM ?',
            a: 'Selon les propres recommandations de l\'éditeur, la plupart des iPhone exécutent confortablement des modèles de 3 à 4 milliards de paramètres (par exemple Llama 3.2 3B ou Qwen3 4B), tandis que l\'iPhone 15 Pro et les modèles plus récents peuvent gérer des modèles de 8 milliards de paramètres comme Llama 3.1 8B. Ce sont les recommandations de l\'éditeur, pas des résultats évalués de manière indépendante — la performance réelle dépend du niveau de quantification et de la RAM disponible.',
          },
          {
            q: 'Comment Private LLM se compare-t-elle à PocketPal AI ?',
            a: 'Private LLM est une application payante (4,99 $), à code source fermé, exclusive à Apple, avec une bibliothèque sélectionnée de 140+ modèles et une quantification OmniQuant/GPTQ. [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) est gratuite et open source, fonctionne sur iPhone/iPad avec un support Android partiel, et permet d\'importer n\'importe quel fichier GGUF plutôt que de choisir dans une liste sélectionnée. Choisissez Private LLM pour une expérience maintenue, à achat unique, avec une large bibliothèque de modèles intégrée ; choisissez PocketPal AI pour une configuration gratuite, auditable et plus manuelle.',
          },
          {
            q: 'Un achat de Private LLM couvre-t-il plusieurs appareils ou membres de la famille ?',
            a: 'Oui. L\'achat de 4,99 $ couvre iPhone, iPad et Mac pour l\'identifiant Apple qui effectue l\'achat, et le Partage familial d\'Apple étend cet achat unique à jusqu\'à six personnes au sein du même groupe de Partage familial.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Private LLM mérite sa place parmi les applications d\'IA locale mobile les mieux documentées couvertes sur ce site : un prix unique clair de 4,99 $ vérifié directement sur l\'App Store, une bibliothèque sélectionnée de plus de 140 modèles open source, et une approche de quantification concrète et nommée (OmniQuant plus GPTQ) plutôt qu\'une vague affirmation "optimisée pour mobile". Les propres notes de version de l\'éditeur montrent trois années de mises à jour continues depuis le lancement de juin 2023, un historique nettement plus long que plusieurs applications plus petites de ce groupe. Les compromis sont tout aussi clairs : elle est exclusive à Apple, elle n\'est pas gratuite, sa liste de modèles est sélectionnée plutôt que totalement ouverte aux imports GGUF personnalisés, et son code source fermé signifie que l\'affirmation "aucune donnée collectée" repose sur la fiche de confidentialité de l\'App Store plutôt que sur une revue de code indépendante. Les lecteurs qui veulent une application maintenue, sélectionnée, à achat unique sur l\'ensemble de leurs appareils Apple devraient l\'acheter ; les lecteurs sur Android/Windows/Linux, ceux qui veulent une option gratuite, ou ceux qui veulent auditer eux-mêmes le code source devraient plutôt commencer par [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Private LLM sur l\'App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — prix, compatibilité des plateformes, fiche de confidentialité, notes et historique des versions.',
          '[Site officiel de Private LLM](https://privatellm.app/en) — présentation du produit, modèle tarifaire et affirmations de confidentialité.',
          '[FAQ de Private LLM](https://privatellm.app/en/faq) — modèles pris en charge, approche de quantification, configuration matérielle requise, Partage familial et intégration Siri/Raccourcis.',
          '[Notes de version de Private LLM](https://privatellm.app/en/release-notes) — historique des versions et jalons de fonctionnalités de juin 2023 à juillet 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — l\'alternative gratuite et open source avec import GGUF manuel.',
          '[Les meilleures applications d\'IA locale pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama complet des applications iPhone, incluant Private LLM, PocketPal AI et Locally AI.',
          '[Test d\'Enclave AI](/fr/power-local-llm/enclave-ai-review) — une autre application d\'IA embarquée à comparer.',
          '[Test de Locally AI](/fr/power-local-llm/locally-ai-review) — une alternative gratuite basée sur Apple MLX.',
          '[Test de Chatty-mini](/fr/power-local-llm/chatty-mini-review) — une alternative plus petite, moins documentée et exclusive à Android, pour comparaison.',
          '[Test d\'Arbiter Local AI Chat](/fr/power-local-llm/arbiter-local-ai-chat-review) — une autre application de chat local couverte sur ce site.',
          '[L\'annuaire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un annuaire plus large d\'outils LLM locaux sur toutes les plateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-llm-review-hero-ja.webp',
    title: 'Private LLMレビュー（2026年）：iPhone・iPad・Mac向けオンデバイスAIチャット',
    seoTitle: 'Private LLM 2026レビュー：iPhone/Mac向けオンデバイスAI',
    intro:
      '[Numen Technologies Limited](https://privatellm.app/en)が開発したPrivate LLMは、iPhone・iPad・Mac向けの買い切り型有料アプリで、オープンソースの言語モデルを完全にオンデバイスで実行します。アカウント登録もクラウドへのフォールバックもサブスクリプションも不要です。[Apple App Storeでの価格は4.99ドル](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)で、一度の購入でApple製3プラットフォームすべてをカバーし、ファミリー共有を使えば最大6人まで利用できます。App Storeの価格は地域によって異なる場合があるため、購入前に現地App Storeで現在の価格を確認してください。アプリはLlama、Qwen、Gemma、Mistral、Phi-4など140以上のオープンソースモデルファミリーに対応し、OmniQuant（一部モデルではGPTQと併用）という量子化手法を採用しています。開発者によれば、これは一部の競合アプリが使うより単純なround-to-nearest量子化よりもモデル品質を維持できるとのことです。ローカルAIアプリを比較する読者にとって実際に重要な問いは、iPhone上でオンデバイスチャットが動くかどうかではありません（このサイトで扱う複数のアプリがすでに実証済みです）——140以上の厳選モデルを備えた4.99ドルの買い切り購入が、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Enclave AI](/ja/power-local-llm/enclave-ai-review)のような無料の代替アプリと比べて価値があるかどうかです。',
    metaDescription:
      'Private LLMレビュー2026：4.99ドルの買い切り、iPhone/iPad/Mac専用、140以上のモデル、OmniQuant量子化、サブスクなし。価格、プライバシー、PocketPal AIとの比較。',
    twitterDescription:
      'Private LLMレビュー2026：iPhone・iPad・Macでオンデバイスチャットを実現する4.99ドル買い切りアプリ。OmniQuant量子化、140以上のモデル、PocketPal AIやEnclave AIとの比較。',
    audience:
      'PocketPal AI、Enclave AI、Locally AIなどの無料代替アプリと比較して、買い切り型のローカルAIアプリに価値があるか判断したいiPhone・iPad・Macユーザー向け。価格、対応モデル、量子化方式、プライバシーを解説。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Private LLM review',
    targetKeywords: [
      'private llm review',
      'private llm app iphone',
      'private llm ios price',
      'private llm omniquant',
      'private llm vs pocketpal ai',
      'on-device ai chat iphone mac',
      'numen technologies private llm',
      'best local llm app for iphone',
    ],
    current_models_mentioned: ['Llama 3.3 70B', 'Llama 3.1 8B', 'Llama 3.2 3B', 'Qwen 2.5', 'Qwen3 4B', 'Gemma 2', 'Gemma 3', 'Phi-4', 'Mixtral', 'DeepSeek R1 Distill'],
    current_hardware_mentioned: ['iPhone 15 Pro', 'iPhone 12', '48GBユニファイドメモリ搭載Apple Silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Private LLMはiPhone・iPad・Mac向けの4.99ドル買い切りアプリで、140以上のオープンソースAIモデルを完全にオンデバイスで実行します——アカウント登録もサブスクリプションも不要です。** [Numen Technologies Limited](https://privatellm.app/en)が開発し、OmniQuantとGPTQによる量子化を採用しています。開発者によれば、これは一部の競合アプリが使うround-to-nearest量子化よりもビットあたりの出力品質を維持できるとのことです。一度の購入でApple製3プラットフォームすべてのモデルライブラリがアンロックされ、ファミリー共有で最大6人まで利用できます。無料の代替を求める読者、またはAndroid/Windows/Linuxを使う読者は、無料でオープンソースの[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比較すべきです。',
    quickAnswerTop: {
      en: {
        question: 'Is Private LLM worth the $4.99 price on the App Store?',
        answer:
          'Yes, if you want a polished, actively maintained, Apple-only local-AI app with a large curated model library (140+ models) and no subscription — the $4.99 is a one-time purchase covering iPhone, iPad, and Mac, with Family Sharing for up to six people. Skip it if you are on Android, Windows, or Linux, or if you specifically want a free and fully open-source app — PocketPal AI covers that case at no cost.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store; no subscription, no in-app purchases listed.',
          'iPhone, iPad, and Mac only — no Android, Windows, or Linux version on the App Store.',
          'Supports more than 140 open-source models: Llama, Qwen, Gemma, Mistral, Phi-4, and more.',
          'Uses OmniQuant and GPTQ quantization instead of simpler round-to-nearest quantization.',
          'Developer (Numen Technologies Limited) states the app collects no data and needs no account.',
        ],
        updatedDate: '2026-09-05',
      },
      ja: {
        question: 'Private LLMはApp Storeの4.99ドルに見合う価値がありますか？',
        answer:
          'はい、Apple専用で洗練され活発にメンテナンスされているローカルAIアプリを求め、サブスクリプションなしで140以上の厳選モデルライブラリが欲しい場合は価値があります。4.99ドルはiPhone・iPad・Macをカバーする買い切り価格で、ファミリー共有により最大6人まで利用可能です。Android・Windows・Linuxを使っている場合、または無料で完全にオープンソースなアプリを特に求める場合は避けてください——その場合はPocketPal AIが無料で対応します。',
        bullets: [
          'Apple App Storeで4.99ドルの買い切り。サブスクリプションやアプリ内課金は記載なし。',
          'iPhone・iPad・Mac専用——App StoreにAndroid・Windows・Linux版はなし。',
          'Llama、Qwen、Gemma、Mistral、Phi-4など140以上のオープンソースモデルに対応。',
          'よりシンプルなround-to-nearest量子化ではなく、OmniQuantとGPTQ量子化を使用。',
          '開発元（Numen Technologies Limited）は、アプリがデータを収集せずアカウントも不要だとしている。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Private LLMとは', anchor: 'what-is-private-llm' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '価格：買い切りの仕組み', anchor: 'pricing' },
      { label: '対応モデルとOmniQuant量子化', anchor: 'models-and-quantization' },
      { label: '対応プラットフォーム：iPhone、iPad、Mac、Vision Pro', anchor: 'platforms' },
      { label: 'プライバシー：Private LLMが収集するもの・しないもの', anchor: 'privacy' },
      { label: '開発会社の歴史とバージョンの節目', anchor: 'history' },
      { label: 'トレードオフ：メリットと制限', anchor: 'tradeoffs' },
      { label: 'Private LLM vs. 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'Private LLMを使うべき人', anchor: 'who-should-use' },
      { label: 'Private LLMを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Private LLMはNumen Technologies Limitedが開発したiPhone・iPad・Mac向けの4.99ドル買い切りアプリで、OmniQuantとGPTQ量子化を用いて140以上のオープンソースAIモデルを完全にオンデバイスで実行する——アカウント登録もクラウドへのフォールバックもサブスクリプションも不要。',
          },
          {
            type: 'plain-terms',
            text: 'クラウドチャットボットにサブスク登録する代わりに、普通のApp StoreアプリのようにローカルAIチャットアプリを一度だけ購入するイメージです——モデルは自分のiPhoneやMac上で動くので、入力した内容は端末の外に出ません。',
          },
        ],
        items: [
          '価格：Apple App Storeで[4.99ドルの買い切り](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)。このレビュー時点でサブスクリプションやアプリ内課金の記載なし。',
          '対応プラットフォーム：iPhone・iPad・Mac専用——App StoreにAndroid・Windows・Linux版はない。',
          '開発元：[Numen Technologies Limited](https://privatellm.app/en)。開発者自身のサイトによれば、EUを拠点とする小規模な自己資金運営チーム。',
          'モデルライブラリ：Llama、Qwen、Gemma、Mistral、Phi-4、DeepSeek R1 Distillベースのモデルなど140以上のオープンソースモデル。',
          '量子化：OmniQuantとGPTQを使用。開発者によれば、一部の競合アプリが使うround-to-nearest（RTN）量子化よりビットあたりの出力品質が高いとしている。',
          'プライバシー：App Storeのプライバシーラベルでは、開発元がアプリからデータを収集しないとされている。チャットにアカウントやログインは不要。',
          '追加機能：2つのApp IntentによるSiriおよびショートカット連携に加え、1回の購入で最大6人まで使えるファミリー共有。',
          'バージョン1.9.15（2026年7月）が最新版。アプリは2023年6月に初めてApp Storeに登場した。',
        ],
      },
      whatIsPrivateLLM: {
        id: 'what-is-private-llm',
        title: 'Private LLMとは',
        content: [
          '**Private LLMは、オープンソースの言語モデルをダウンロードしてiPhone・iPad・Mac上で直接実行するネイティブApple向けアプリで、サーバー側の構成要素を持たない。** 一度モデルをダウンロードすれば、応答を生成するのにインターネット接続は不要——すべて端末自体のCPU、GPU、Neural Engineを使ってローカルで実行される。',
          '開発・保守を行うのは[Numen Technologies Limited](https://privatellm.app/en)で、自社サイトでは「VCではなく2人のエンジニアによって作られた」と説明されており、ベンチャー出資を受けた企業ではなく小規模な自己資金運営チームだとしている。アプリは2023年6月に[Private LLM - Local AI Chat](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)（App Store ID 6448106860）として初めてApp Storeに登場し、以降継続的にアップデートされている——現行版であるバージョン1.9.15は2026年7月にリリースされた。',
          'チャットリクエストをリモートAPIに送信するアプリとは異なり、Private LLMの価値提案全体はローカル推論を基盤としている。開発者のマーケティング文言は「クラウドなし、追跡なし、ログインなし」であり、会話は「端末から一度も出ない」としている。このレビューでは、この宣伝文句をそのまま受け入れるのではなく、App Storeのプライバシーラベルと開発者自身のFAQが実際に何を裏付けているかに基づいて評価する。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**Private LLMのセットアップは4ステップで、アカウント作成は不要。** App Storeでのダウンロードから最初の応答までの全プロセスは、通常数分に加え、選んだモデルのダウンロードにかかる時間だけで完了する。',
        ],
        numberedItems: [
          {
            title: 'アプリを購入してインストールする',
            whyItMatters: '[Apple App StoreからPrivate LLM](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)を4.99ドルでダウンロードする。これは買い切りで、無料トライアル期間も管理すべき定期購読もない。',
          },
          {
            title: '端末に合ったモデルを選ぶ',
            whyItMatters: 'アプリ内のモデルブラウザを開き、自分のハードウェアに合ったサイズのモデルを選ぶ。開発者のガイダンスによれば、ほとんどのiPhoneはLlama 3.2 3BやQwen3 4Bを問題なく実行でき、iPhone 15 Pro以降はLlama 3.1 8Bを扱え、48GBのユニファイドメモリを搭載したMacはLlama 3.3 70Bを実行できるとのこと。',
          },
          {
            title: 'モデルをダウンロードする',
            whyItMatters: 'モデルファイルはパラメータ数と量子化レベルに応じて約2GBから数十GBまで幅がある。このステップにはインターネット接続が必要——それ以降のステップには不要。',
          },
          {
            title: '完全にオフラインでチャットする',
            whyItMatters: 'モデルのダウンロードが完了したら、機内モードをオンにしてオフライン動作の主張を自分で確認できる——チャット、要約、（Macでの）文章の言い換えは、いずれもネットワーク接続なしで動作する。',
          },
          {
            title: 'オプション：SiriとショートカットとPrivate LLMを接続する',
            whyItMatters: 'Private LLMは2つのApp IntentをSiriとショートカットアプリに公開しており、アプリを直接開かなくても音声コマンドやオートメーションからモデルの応答をトリガーできる。',
          },
        ],
        note: '正確なダウンロードサイズ、対応モデル一覧、最低端末要件はApp Storeのアップデートごとに変わる可能性がある——データ通信量が限られたプランで大きなダウンロードを実行する前に、アプリ内のモデルブラウザまたは[privatellm.app](https://privatellm.app/en)で最新の詳細を確認すること。',
      },
      pricing: {
        id: 'pricing',
        title: '価格：買い切りの仕組み',
        itemHeadings: true,
        content: [
          '**Private LLMはApple App Storeで4.99ドルの単一の買い切り価格であり、現在のリストにサブスクリプションもアプリ内課金もない。** この価格は本レビューのために[App Storeのリスト](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)で直接確認した。App Storeの価格は地域によって異なる場合があるため、購入前に現在の価格を確認すること。',
        ],
        columns: ['支払う金額', '含まれるもの', '含まれないもの'],
        rows: [
          {
            '支払う金額': '4.99ドル（買い切り）',
            '含まれるもの': 'iPhone・iPad・Mac向けの完全版アプリ、140以上のモデルライブラリへの全アクセス、最大6人までのファミリー共有',
            '含まれないもの': 'Android・Windows・Linux版——App Storeでの購入がクロスプラットフォームライセンスをアンロックすることはない',
          },
        ],
        note: 'App Storeの価格は予告なく変更される場合があり、地域によって異なることがある。購入前に[App Storeのリスト](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)で最新の価格を確認すること。本レビューでは2026年9月5日時点で確認済み。',
      },
      modelsAndQuantization: {
        id: 'models-and-quantization',
        title: '対応モデルとOmniQuant量子化',
        content: [
          '**Private LLMのライブラリには、汎用モデル、コーディングモデル、言語特化型ファインチューンを含む140以上のオープンソースモデルが含まれる。** 開発者自身のドキュメントに記載されているモデルファミリーには、Llama 3・3.1・3.2・3.3、Qwen 2.5およびQwen3ベースのモデル、Gemma 2・Gemma 3、Phi-4、Mixtral、DeepSeek R1 Distillベースのモデルがあり、さらにSauerkrautLM（ドイツ語）、DictaLM（ヘブライ語）、RakutenAI（日本語）、Yi（中国語）といった地域特化型のモデルも含まれる。',
          'アプリはこれらのモデルを**OmniQuant**（一部モデルでは**GPTQ**を併用）で量子化している——両方とも、一部の競合ローカルAIアプリが使うより単純なround-to-nearest（RTN）方式ではなく、最適化ベースの量子化手法である。開発者自身の比較ページによれば、最適化ベースの量子化はキャリブレーションデータに対して量子化範囲を調整するため、同じビット幅でもRTNより元のモデルの出力品質を多く保てるという。これは開発者自身の技術的主張であり、開発者自身のドキュメントに基づくものである——PromptQuorumがPrivate LLMの具体的な量子化済みモデルファイルについて独自にベンチマークを行ったものではない。',
          '開発者によるハードウェアのガイダンス：ほとんどのiPhoneは**Llama 3.2 3B**または**Qwen3 4B**を問題なく実行でき、**iPhone 15 Pro**以降は**Llama 3.1 8B**を扱え、**48GBのユニファイドメモリ**を搭載したMacは**Llama 3.3 70B**を実行できる。これらは開発者自身の推奨事項であり、独自にベンチマークされた数値ではない——実際の性能は量子化レベル、コンテキスト長、バックグラウンドのアプリ負荷に依存する。',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '対応プラットフォーム：iPhone、iPad、Mac、Vision Pro',
        itemHeadings: true,
        columns: ['プラットフォーム', '期待できること', '重要な注意点'],
        rows: [
          {
            'プラットフォーム': 'iPhone',
            '期待できること': 'App Storeのリストによれば、iOS 17.0以降とA12 Bionicチップ以降（iPhone XS以降）が必要。選ぶモデルサイズはRAM容量に見合わせる必要がある。',
            '重要な注意点': 'ほとんどのiPhoneは30〜40億パラメータのモデルを問題なく扱えるが、開発者によれば8Bモデルが推奨されるのはiPhone 15 Pro以降のみ。',
          },
          {
            'プラットフォーム': 'iPad',
            '期待できること': 'iPhoneと同じアプリ・同じモデルライブラリが動作する。開発者のFAQでは最低4GBのRAMを推奨し、大きなモデルにはiPad Pro（16GB）を推奨している。',
            '重要な注意点': 'RAMが少ない古いiPadは、より小さい量子化モデルに限定される。',
          },
          {
            'プラットフォーム': 'Mac',
            '期待できること': 'Apple Silicon Mac（Mシリーズ）向けのネイティブアプリ。他のアプリから呼び出せるmacOS固有の文章サービス（文法修正、要約、言い換え）も含まれる。',
            '重要な注意点': '開発者のFAQによれば、Intel Macは技術的にはサポートされるが推奨されない——Apple SiliconのユニファイドメモリとNeural Engineがないため、推論が明らかに遅くなる。',
          },
          {
            'プラットフォーム': 'Apple Vision Pro',
            '期待できること': 'App Storeのリストでは同じアプリのVision Pro対応が示されている。',
            '重要な注意点': '本レビューではVision Proでの実際の使用感を独自に検証していない——App Storeに記載された互換性として扱い、実機で検証済みの機能とは見なさないこと。',
          },
          {
            'プラットフォーム': 'Android、Windows、Linux',
            '期待できること': 'Google Play、Microsoft Store、Linuxのパッケージリポジトリのいずれにも公式リストはない。',
            '重要な注意点': 'アプリの歴史の中で、Google Play Store外で非公式のベータAPKが出回った時期がある。これは開発者の主要なマーケティングサイトやサポート対象のリリースチャネルの一部ではないため、本レビューではAndroidを対応プラットフォームとして扱わない。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー：Private LLMが収集するもの・しないもの',
        content: [
          '**Private LLMのApp Storeプライバシーラベルでは、開発元がアプリからデータを一切収集しないとされており**、アプリの利用にアカウント・ログイン・登録は不要である。開発者自身のマーケティングでは、この製品を「クラウドなし、追跡なし、ログインなし」というフレーズで説明し、会話は「端末から一度も出ない」としている。',
          'モデルのダウンロード後は推論がローカルで実行されるため、通常の利用でサーバーに送信されるチャットデータは存在しない——会話を端末上に留めているのは、単なる方針上の約束ではなく、アーキテクチャそのものである。',
        ],
        items: [
          '**アカウント不要。** プロフィール作成やログインなしで、アプリのダウンロード・購入・利用ができる。',
          '**App Storeラベルによればデータ収集なし。** このリストに対するAppleのプライバシー栄養表示ラベルでは、アプリから収集されるデータはないとされている。',
          '**チャット履歴のiCloud同期は文書化されていない。** 開発者の公開FAQには、端末間での会話のiCloud同期に関する記載がない——本レビューでは、存在すると仮定するのではなく未確認として扱う。端末間でのチャット同期が重要な場合は、それに依存する前にアプリ内で現在の挙動を直接確認すること。',
          '**サンドボックス実行。** アプリはAppleの標準的なアプリサンドボックス内で実行される。これはApp Store上のすべてのアプリが従う分離の仕組みであり、Private LLM固有の機能ではなくAppleプラットフォームによる保証である。',
        ],
      },
      history: {
        id: 'history',
        title: '開発会社の歴史とバージョンの節目',
        content: [
          '**Private LLMは2023年6月にApp Storeでローンチした**。iOS版バージョン1.0.1とmacOS版バージョン1.0.2は、いずれも2023年6月2日にリリースされた。開発元は[Numen Technologies Limited](https://privatellm.app/en)で、ベンチャーキャピタルの出資を受けていない小規模な自己資金運営チームだと自称している。',
        ],
        items: [
          '**2023年6月。** App Storeでの初回リリース（iOS 1.0.1、macOS 1.0.2）。ファインチューニング済みのベースラインモデルを搭載。',
          '**2023年7月。** SiriおよびショートカットのサポートAPP Intentを追加。',
          '**2023年9月。** iPhone 15シリーズへの互換性を追加。',
          '**2023年12月。** サポート対象を、わずか3GBのRAMを持つ古いiPhoneやiPadにまで拡大。',
          '**2024年1月。** マルチモデルダウンロード機能を導入し、TinyLlama、StableLM、Phi-2、Mistral、Llama、Gemmaファミリーのモデルをライブラリに追加。',
          '**2024年2月。** macOS固有の文章サービス（文法修正、要約、言い換え）を追加。他のMacアプリから呼び出し可能。',
          '**2024年3月。** アクティブなチャット画面を離れずにモデルを切り替えられるようになった。',
          '**2026年7月。** バージョン1.9.15でモデルのダウンロード元をHugging Faceから CDNに移行。リリースノートによればダウンロードが高速化されたとのこと——本レビュー時点での最新版。',
        ],
        note: 'バージョン履歴は開発者自身の[リリースノート](https://privatellm.app/en/release-notes)ページに基づく。日付とバージョン番号はそこで公開されている内容の通り——特定の機能の存在を前提にする前に、App Storeで現在のバージョンを直接確認すること。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ：メリットと制限',
        columns: ['メリット', '実際の利用での意味', '制限・注意点'],
        rows: [
          {
            'メリット': '4.99ドルの買い切り',
            '実際の利用での意味': '追跡・解約すべきサブスクリプションがない。一度支払えば、Apple製端末で無期限に使える。',
            '制限・注意点': '無料ではない——コストゼロの選択肢を求める読者は、PocketPal AIやEnclave AIと比較すべき。',
          },
          {
            'メリット': '140以上のモデルライブラリ',
            '実際の利用での意味': '自分でGGUFファイルを探し回らなくても、汎用・コーディング・言語特化型モデルを幅広く選べる。',
            '制限・注意点': 'ライブラリは開発元によって厳選されている。一部のオープンソースアプリのように、任意のカスタムファインチューンをインポートすることはできない。',
          },
          {
            'メリット': 'OmniQuantおよびGPTQ量子化',
            '実際の利用での意味': '開発者によれば、これはより単純なround-to-nearest量子化よりビットあたりのモデル品質を保てるとしている。',
            '制限・注意点': 'これは開発者自身の技術的主張であり、PromptQuorumはPrivate LLMの具体的なモデルファイルをRTN量子化された同等品と独自に比較していない。',
          },
          {
            'メリット': 'アカウント不要、データ収集なし',
            '実際の利用での意味': '購入直後から、何にも登録することなくアプリを使い始められる。App Storeのプライバシーラベルでは収集されるデータがないとされている。',
            '制限・注意点': 'アプリがクローズドソースであるため、「データ収集なし」という主張はオープンソースアプリのように独自にコード監査して確認することはできない。',
          },
          {
            'メリット': 'SiriおよびショートカットとPrivate LLMの連携',
            '実際の利用での意味': 'アプリを開かなくても、音声コマンドやオートメーションからモデルの応答をトリガーできる。',
            '制限・注意点': 'iOSはバックグラウンドでのGPUアクセスを制限しているため、ショートカット経由での生成はフォアグラウンドでのチャットより遅い、または制限が大きい場合がある。',
          },
          {
            'メリット': '最大6人までのファミリー共有',
            '実際の利用での意味': '1回の4.99ドルの購入で、Apple ファミリー共有グループ全体をカバーできる。',
            '制限・注意点': '家族の各メンバーには、それぞれ対応する端末と、選んだモデルに十分なストレージ・RAMが必要。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Private LLM vs. 代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格', 'モデルの柔軟性', '主な違い'],
        rows: [
          {
            'アプリ': 'Private LLM',
            'プラットフォーム': 'iPhone/iPad/Mac（Apple専用）',
            '価格': '4.99ドルの買い切り',
            'モデルの柔軟性': '140以上の厳選モデル、OmniQuant/GPTQ量子化',
            '主な違い': '有料、クローズドソース、厳選ライブラリ——任意のGGUFインポートは不可',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iPhone/iPad、一部Android対応',
            '価格': '無料、オープンソース',
            'モデルの柔軟性': 'Hugging Faceなどからユーザーが入手した任意のGGUFファイル',
            '主な違い': '無料かつオープンソース。より多くの手動モデル管理が必要',
          },
          {
            'アプリ': '[Enclave AI](/ja/power-local-llm/enclave-ai-review)',
            'プラットフォーム': 'リリースにより異なる——最新のリストを確認',
            '価格': '最新のリストを参照',
            'モデルの柔軟性': '現在のモデル対応状況は詳細レビューを参照',
            '主な違い': '詳細な比較はEnclave AIの完全レビューを参照',
          },
          {
            'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            'プラットフォーム': 'iPhone/iPad/Mac',
            '価格': '無料',
            'モデルの柔軟性': 'Apple MLX上に構築、Appleのオンデバイス基盤モデルにアクセス可能',
            '主な違い': 'AppleのMLXフレームワークに特化して構築された無料の代替アプリ',
          },
          {
            'アプリ': '[Arbiter](/ja/power-local-llm/arbiter-local-ai-chat-review)',
            'プラットフォーム': '現在のプラットフォーム対応状況は詳細レビューを参照',
            '価格': '最新のリストを参照',
            'モデルの柔軟性': '現在のモデル対応状況は詳細レビューを参照',
            '主な違い': '詳細な比較はArbiterの完全レビューを参照',
          },
          {
            'アプリ': '[LLM Farm](https://llmfarm.space/)',
            'プラットフォーム': 'iOS/Mac（オープンソース、GitHub：[guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)）',
            '価格': '無料、オープンソース',
            'モデルの柔軟性': 'llama.cpp/ggml経由でカスタムGGUFモデルを読み込み可能',
            '主な違い': '自身のGitHub READMEによれば2025年8月にApp StoreとTestFlightから削除された——利用前に現在の入手可否を確認すること',
          },
          {
            'アプリ': '[Layla](https://www.layla-network.ai/)',
            'プラットフォーム': 'iOSおよびAndroid',
            '価格': '19.99ドル＋アプリ内課金',
            'モデルの柔軟性': 'カスタムGGUFモデル、100種類以上の音声を備えたキャラクター/ロールプレイ重視',
            '主な違い': 'Private LLMと異なりクロスプラットフォームだが、価格は高く、ロールプレイ/キャラクター志向',
          },
          {
            'アプリ': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'プラットフォーム': 'クロスプラットフォームのFlutterアプリ（主にAndroid、Flutterが対応する他のプラットフォームでも動作）',
            '価格': '無料、オープンソース（MITライセンス）',
            'モデルの柔軟性': 'llama.cpp経由で任意のGGUFファイル、Anthropic・DeepSeek・Ollama・Mistral・OpenAIへのリモート接続も可能',
            '主な違い': '無料で完全オープンソース、ローカル推論のみに限定されない',
          },
          {
            'アプリ': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'プラットフォーム': 'Android',
            '価格': '無料、オープンソース',
            'モデルの柔軟性': '複数のクラウドプロバイダーAPIとローカル実行の両方',
            '主な違い': 'Android専用。ローカルファーストアプリではなく、マルチプロバイダークライアントとして位置付け',
          },
          {
            'アプリ': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'プラットフォーム': 'Android（iOS対応予定）',
            '価格': '無料、オープンソース',
            'モデルの柔軟性': 'Cactus Compute（React Native向けllama.cpp）経由でGGUFモデルをオンデバイス実行、または自己ホスト型AnythingLLMサーバーと連携',
            '主な違い': '自己ホスト型AnythingLLMワークスペースとの連携を前提とした設計であり、単独のチャットアプリではない',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム、価格、機能の詳細は頻繁に変わる——判断する前に各アプリ自身のリストで最新情報を確認すること。特にLLM FarmのApp Storeでの入手可否は再確認すべきで、その自身のGitHub READMEでは2025年8月時点でApp Storeから削除されたと記載されている。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Private LLMを使うべき人',
        items: [
          '**洗練された厳選アプリを求め、一度の支払いを厭わないApple専用ユーザー。** 自分でGGUFファイルのコレクションを組み立てるより、メンテナンスされ活発にアップデートされるアプリを重視するiPhone・iPad・Macユーザーは、4.99ドルで大規模なモデルライブラリをすぐに利用できる。',
          '**生のモデル数よりも量子化品質を重視する読者。** OmniQuantとGPTQがround-to-nearest量子化に対して主張するビットあたりの品質優位性が自分の用途にとって重要であれば、Private LLMはその手法を中心に構築された数少るコンシューマー向けアプリの一つ。',
          '**同一のApple IDグループを共有する家族。** ファミリー共有により、1回の4.99ドルの購入で最大6人をカバーできる——技術に詳しくない家族のために複数の無料アプリを個別にセットアップするより、一人あたりのコストは安く済む。',
          '**Siri/ショートカットによる自動化を求めるユーザー。** 2つのApp Intentにより、アプリを開かなくても既存のiOSオートメーションにローカルAIの応答を組み込める。',
          '**クローズドソースアプリでも問題ないプライバシー重視のユーザー。** App Storeのプライバシーラベルによる「データ収集なし」と「アカウント不要」が、自分でソースコードを監査する必要なく基準を満たすなら、Private LLMのオンデバイスアーキテクチャはまさにそれを提供する。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Private LLMを使うべきでない人',
        items: [
          '**Android、Windows、Linuxのユーザー。** Private LLMはこれらのプラットフォームのいずれにも公式アプリを持たない——代わりに[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)（一部Android対応）、[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)、[ChatterUI](https://github.com/Vali-98/ChatterUI)、[RikkaHub](https://github.com/rikkahub/rikkahub)を選ぶこと。',
          '**完全に無料の選択肢を求める読者。** 4.99ドルは安価だが無料ではない——[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と[Locally AI](/ja/power-local-llm/locally-ai-review)はどちらも無料。',
          '**最大級のオープンウェイトモデルを実行したい読者。** モバイルハードウェアはメモリに収まる範囲を制限する——開発者自身のガイダンスでも、ほとんどのiPhoneは30〜80億パラメータのモデルに制限され、70Bクラスに到達できるのは48GB以上のユニファイドメモリを持つMacだけであり、その上限でもサーバー級ハードウェア向けの最大級のオープンウェイトモデルには遠く及ばない。',
          '**共有・一元管理されたデプロイを求めるチームや組織。** Private LLMは管理コンソールも共有ライセンス管理もチーム請求機能もない単一ユーザー・単一端末向けのコンシューマーアプリ——組織は代わりに自己ホスト型のサーバーサイドのローカルLLMインフラを検討すべき。',
          '**アプリのソースコードを自分で監査したい読者。** Private LLMはクローズドソース。独立したコードレビューが重要な場合は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)のようなオープンソースの代替アプリであれば動作を直接検証できる。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Private LLMの価格はいくらですか？',
            a: 'Private LLMはApple App Storeで[4.99ドルの買い切り](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)です。本レビューでは2026年9月5日時点で確認しています。現在のApp Storeのリストにはサブスクリプションもアプリ内課金もありません。App Storeの価格は地域によって異なり、時間とともに変わる可能性があるため、購入前に現在の価格を確認してください。',
          },
          {
            q: 'Private LLMはAndroidやWindowsで利用できますか？',
            a: 'Google Play、Microsoft Store、Linuxのパッケージリポジトリのいずれにも公式版はありません。Private LLMはiPhone・iPad・Mac専用に作られています。アプリの歴史の中で、Play Store外で非公式のベータAPKが出回った時期がありますが、開発元の主要なサポート対象リリースチャネルには含まれていないため、本レビューではAndroidを非対応として扱います。',
          },
          {
            q: 'Private LLMを開発しているのは誰ですか？',
            a: 'Private LLMは[Numen Technologies Limited](https://privatellm.app/en)によって開発されており、自社サイトではベンチャーキャピタルの出資を受けていない小規模な2人のエンジニアによる自己資金運営チームだと説明しています。',
          },
          {
            q: 'OmniQuantとは何ですか。Private LLMがそれを使う理由は？',
            a: 'OmniQuantは、より単純なround-to-nearest（RTN）方式ではなく、キャリブレーションデータに対して量子化範囲を調整する最適化ベースの量子化手法です。Private LLMは一部のモデルでOmniQuantとGPTQを組み合わせています。開発者によれば、これは同じビット幅でもRTN量子化よりモデル本来の出力品質を多く保てるとしています。これは開発者自身の技術的主張であり、PromptQuorumがPrivate LLMの具体的なモデルファイルについて独自にベンチマークしたものではありません。',
          },
          {
            q: 'Private LLMは完全にオフラインで動作しますか？',
            a: 'はい、モデルをダウンロードした後は動作します。アプリがインターネット接続を必要とするのは、モデルまたはアプリのアップデートをダウンロードするときだけです。それ以降のチャットや、文法修正・要約などmacOS固有のサービスは、ネットワーク接続なしで動作します。',
          },
          {
            q: 'Private LLMは個人データを収集しますか？',
            a: 'このApp Storeリストに対するAppleのプライバシー栄養表示ラベルでは、開発元がアプリからデータを一切収集しないとされています。利用にアカウントやログインは不要です。本レビューは、アプリのクローズドソースコードを独自に監査した結果ではなく、App Storeのプライバシーラベルに基づいています。',
          },
          {
            q: 'Private LLMはiCloud経由でチャット履歴を端末間で同期しますか？',
            a: 'これは開発者の公開FAQには文書化されていません。本レビューでは、存在すると仮定するのではなく、会話のiCloud同期は未確認として扱います。端末間でのチャット継続性に依存する前に、アプリ内で現在の挙動を直接確認してください。',
          },
          {
            q: 'Private LLMでiPhone上で実行できるモデルは何ですか？',
            a: '開発者自身のガイダンスによれば、ほとんどのiPhoneは30〜40億パラメータのモデル（例：Llama 3.2 3BやQwen3 4B）を問題なく実行でき、iPhone 15 Pro以降は80億パラメータのモデル（Llama 3.1 8Bなど）を扱えるとしています。これらは開発者の推奨事項であり、独自にベンチマークされた結果ではありません——実際の性能は量子化レベルと利用可能なRAMに依存します。',
          },
          {
            q: 'Private LLMはPocketPal AIと比べてどうですか？',
            a: 'Private LLMは有料（4.99ドル）でクローズドソースのApple専用アプリであり、140以上のモデルからなる厳選ライブラリとOmniQuant/GPTQ量子化を備えています。[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)は無料でオープンソースであり、iPhone/iPadで動作し一部Androidにも対応しており、厳選リストから選ぶのではなく任意のGGUFファイルをインポートできます。メンテナンスされた買い切り体験と幅広い組み込みモデルライブラリが欲しいならPrivate LLMを、無料で監査可能かつより手動設定が必要なセットアップが欲しいならPocketPal AIを選んでください。',
          },
          {
            q: 'Private LLMの1回の購入で複数の端末や家族をカバーできますか？',
            a: 'はい。4.99ドルの購入は、購入したApple IDについてiPhone・iPad・Macをカバーし、Appleのファミリー共有により、同じファミリー共有グループ内の最大6人までこの1回の購入を拡張できます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Private LLMは、このサイトで扱うモバイル向けローカルAIアプリの中でも、より充実したドキュメントを備えたアプリとしての地位を得ている。App Storeで直接確認できる4.99ドルという明確な買い切り価格、140以上のオープンソースモデルからなる厳選ライブラリ、そして曖昧な「モバイル向けに最適化」という主張ではなく、具体的で名前のある量子化手法（OmniQuant plus GPTQ）を備えている。開発者自身のリリースノートは、2023年6月のローンチ以来3年間の継続的なアップデートを示しており、このクラスターの中の複数の小規模アプリよりも明らかに長い実績である。トレードオフも同様に明確だ——Apple専用であり、無料ではなく、モデルリストは任意のカスタムGGUFインポートに完全に開かれているのではなく厳選されており、クローズドソースコードであるため「データ収集なし」という主張は独立したコードレビューではなくApp Storeのプライバシーラベルに依拠している。Apple製端末全体でメンテナンスされた厳選済みの買い切りアプリを求める読者は購入すべきであり、Android/Windows/Linuxを使う読者、無料の選択肢を求める読者、あるいは自分でソースコードを監査したい読者は、代わりに[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)から始めるべきである。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのPrivate LLM](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — 価格、プラットフォーム互換性、プライバシーラベル、評価、バージョン履歴。',
          '[Private LLM公式サイト](https://privatellm.app/en) — 製品概要、価格モデル、プライバシーに関する主張。',
          '[Private LLMのFAQ](https://privatellm.app/en/faq) — 対応モデル、量子化方式、ハードウェア要件、ファミリー共有、Siri/ショートカット連携。',
          '[Private LLMのリリースノート](https://privatellm.app/en/release-notes) — 2023年6月から2026年7月までのバージョン履歴と機能の節目。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 手動でのGGUFインポートに対応した無料オープンソースの代替アプリ。',
          '[2026年版iPhone向けベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — Private LLM、PocketPal AI、Locally AIを含むiPhoneアプリの総まとめ。',
          '[Enclave AIレビュー](/ja/power-local-llm/enclave-ai-review) — 比較対象となるもう一つのオンデバイスAIアプリ。',
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — Apple MLXベースの無料の代替アプリ。',
          '[Chatty-miniレビュー](/ja/power-local-llm/chatty-mini-review) — 比較対象となる、より小規模でドキュメントの少ないAndroid専用の代替アプリ。',
          '[Arbiter Local AI Chatレビュー](/ja/power-local-llm/arbiter-local-ai-chat-review) — このサイトで扱う、もう一つのローカルチャットアプリ。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/power-local-llm/local-llm-software-directory) — 全プラットフォームにわたるローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-llm-review-hero-pt.webp',
    title: 'Private LLM: Análise (2026) do chat de IA no dispositivo para iPhone, iPad e Mac',
    seoTitle: 'Private LLM 2026: IA no dispositivo para iPhone e Mac',
    intro:
      'O Private LLM, feito pela [Numen Technologies Limited](https://privatellm.app/en), é um aplicativo pago de compra única para iPhone, iPad e Mac que executa modelos de linguagem de código aberto inteiramente no dispositivo, sem conta, sem depender da nuvem e sem assinatura. Ele custa [US$ 4,99 na App Store da Apple](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — uma compra única que cobre as três plataformas da Apple e, via Compartilhamento familiar, até seis pessoas. Os preços da App Store podem variar por região; confirme o preço atual na App Store brasileira antes de comprar. O app suporta mais de 140 modelos de código aberto de famílias como Llama, Qwen, Gemma, Mistral e Phi-4, e usa um método de quantização chamado OmniQuant (combinado com GPTQ) que, segundo o desenvolvedor, preserva mais qualidade do modelo do que a quantização round-to-nearest mais simples usada por alguns apps concorrentes. A pergunta prática para quem compara apps de IA local não é se o chat no dispositivo funciona em um iPhone — vários apps já cobertos neste site provam isso —, mas sim se uma compra única de US$ 4,99 com mais de 140 modelos selecionados vale a pena frente a alternativas gratuitas como [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou [Enclave AI](/pt/power-local-llm/enclave-ai-review).',
    metaDescription:
      'Análise do Private LLM 2026: compra única de US$ 4,99, apenas iPhone/iPad/Mac, 140+ modelos, quantização OmniQuant, sem assinatura. Preços, privacidade e comparação com o PocketPal AI.',
    twitterDescription:
      'Private LLM 2026: um app de compra única de US$ 4,99 para chat de IA no dispositivo em iPhone, iPad e Mac. Quantização OmniQuant, 140+ modelos e comparação com PocketPal AI e Enclave AI.',
    audience:
      'Usuários de iPhone, iPad e Mac decidindo se um app de IA local com compra única vale a pena em comparação com alternativas gratuitas como PocketPal AI, Enclave AI ou Locally AI — cobre preço, modelos suportados, abordagem de quantização e privacidade.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Private LLM review',
    targetKeywords: [
      'private llm review',
      'private llm app iphone',
      'private llm ios price',
      'private llm omniquant',
      'private llm vs pocketpal ai',
      'on-device ai chat iphone mac',
      'numen technologies private llm',
      'best local llm app for iphone',
    ],
    current_models_mentioned: ['Llama 3.3 70B', 'Llama 3.1 8B', 'Llama 3.2 3B', 'Qwen 2.5', 'Qwen3 4B', 'Gemma 2', 'Gemma 3', 'Phi-4', 'Mixtral', 'DeepSeek R1 Distill'],
    current_hardware_mentioned: ['iPhone 15 Pro', 'iPhone 12', 'Mac com Apple Silicon e 48 GB de memória unificada', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**O Private LLM é um app de compra única de US$ 4,99 para iPhone, iPad e Mac que executa mais de 140 modelos de IA de código aberto inteiramente no dispositivo, sem conta e sem assinatura.** Feito pela [Numen Technologies Limited](https://privatellm.app/en), ele usa quantização OmniQuant e GPTQ, que segundo o desenvolvedor preserva mais qualidade de saída por bit do que a quantização round-to-nearest de alguns apps concorrentes. Uma única compra desbloqueia toda a biblioteca de modelos nas três plataformas da Apple e, via Compartilhamento familiar, para até seis pessoas. Quem busca uma alternativa gratuita, ou usa Android/Windows/Linux, deve comparar com o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), que é gratuito e de código aberto.',
    quickAnswerTop: {
      en: {
        question: 'Is Private LLM worth the $4.99 price on the App Store?',
        answer:
          'Yes, if you want a polished, actively maintained, Apple-only local-AI app with a large curated model library (140+ models) and no subscription — the $4.99 is a one-time purchase covering iPhone, iPad, and Mac, with Family Sharing for up to six people. Skip it if you are on Android, Windows, or Linux, or if you specifically want a free and fully open-source app — PocketPal AI covers that case at no cost.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store; no subscription, no in-app purchases listed.',
          'iPhone, iPad, and Mac only — no Android, Windows, or Linux version on the App Store.',
          'Supports more than 140 open-source models: Llama, Qwen, Gemma, Mistral, Phi-4, and more.',
          'Uses OmniQuant and GPTQ quantization instead of simpler round-to-nearest quantization.',
          'Developer (Numen Technologies Limited) states the app collects no data and needs no account.',
        ],
        updatedDate: '2026-09-05',
      },
      pt: {
        question: 'O Private LLM vale os US$ 4,99 cobrados na App Store?',
        answer:
          'Sim, se você quer um app de IA local bem-acabado, mantido ativamente, exclusivo da Apple, com uma grande biblioteca de modelos selecionados (140+) e sem assinatura — os US$ 4,99 são uma compra única que cobre iPhone, iPad e Mac, com Compartilhamento familiar para até seis pessoas. Não vale a pena se você usa Android, Windows ou Linux, ou se busca especificamente um app gratuito e totalmente de código aberto — o PocketPal AI cobre esse caso sem custo.',
        bullets: [
          'Compra única de US$ 4,99 na App Store da Apple; sem assinatura, sem compras no app listadas.',
          'Apenas iPhone, iPad e Mac — sem versão para Android, Windows ou Linux na App Store.',
          'Suporta mais de 140 modelos de código aberto: Llama, Qwen, Gemma, Mistral, Phi-4 e outros.',
          'Usa quantização OmniQuant e GPTQ em vez da quantização round-to-nearest mais simples.',
          'O desenvolvedor (Numen Technologies Limited) afirma que o app não coleta dados e não exige conta.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Private LLM', anchor: 'what-is-private-llm' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Preço: a compra única explicada', anchor: 'pricing' },
      { label: 'Modelos suportados e quantização OmniQuant', anchor: 'models-and-quantization' },
      { label: 'Plataformas: iPhone, iPad, Mac e Vision Pro', anchor: 'platforms' },
      { label: 'Privacidade: o que o Private LLM coleta e o que não coleta', anchor: 'privacy' },
      { label: 'História da empresa e marcos de versões', anchor: 'history' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Private LLM vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o Private LLM', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o Private LLM', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Private LLM é um app de compra única de US$ 4,99 para iPhone, iPad e Mac da Numen Technologies Limited que executa mais de 140 modelos de IA de código aberto inteiramente no dispositivo usando quantização OmniQuant e GPTQ, sem conta, sem depender da nuvem e sem assinatura.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nisso como comprar um app de chat de IA local uma única vez, como qualquer app comum da App Store, em vez de assinar um chatbot na nuvem — o modelo roda no seu próprio iPhone ou Mac, então nada do que você digita sai do aparelho.',
          },
        ],
        items: [
          'Preço: [compra única de US$ 4,99](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) na App Store da Apple; sem assinatura e sem compras no app listadas no momento desta análise.',
          'Plataformas: apenas iPhone, iPad e Mac — sem app para Android, Windows ou Linux na App Store.',
          'Desenvolvedor: [Numen Technologies Limited](https://privatellm.app/en), uma equipe pequena e autofinanciada com sede na UE, segundo o próprio site do desenvolvedor.',
          'Biblioteca de modelos: mais de 140 modelos de código aberto, incluindo Llama, Qwen, Gemma, Mistral, Phi-4 e modelos baseados no DeepSeek R1 Distill.',
          'Quantização: usa OmniQuant e GPTQ, que segundo o desenvolvedor entregam melhor qualidade de saída por bit do que a quantização round-to-nearest (RTN) usada por alguns apps concorrentes.',
          'Privacidade: o rótulo de privacidade da App Store informa que o desenvolvedor não coleta dados do app; nenhuma conta ou login é necessário para conversar.',
          'Extras: integração com Siri e Atalhos via dois App Intents, além de Compartilhamento familiar para até seis pessoas em uma única compra.',
          'A versão 1.9.15 (julho de 2026) é a atual; o app foi lançado pela primeira vez na App Store em junho de 2023.',
        ],
      },
      whatIsPrivateLLM: {
        id: 'what-is-private-llm',
        title: 'O que é o Private LLM',
        content: [
          '**O Private LLM é um app nativo da Apple que baixa e executa modelos de linguagem de código aberto diretamente em um iPhone, iPad ou Mac, sem nenhum componente do lado do servidor.** Depois de baixar um modelo, o app não precisa de conexão com a internet para gerar uma resposta — tudo roda localmente usando a CPU, a GPU e o Neural Engine do próprio dispositivo.',
          'Ele é criado e mantido pela [Numen Technologies Limited](https://privatellm.app/en), que se descreve no próprio site como "construído por dois engenheiros, não por VCs" — uma equipe pequena e autofinanciada, em vez de uma empresa financiada por capital de risco. O app apareceu pela primeira vez na App Store em junho de 2023 como [Private LLM - Local AI Chat](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) (ID 6448106860 na App Store), e vem sendo atualizado continuamente desde então — a versão atual, 1.9.15, foi lançada em julho de 2026.',
          'Diferente de apps que enviam solicitações de chat para uma API remota, toda a proposta de valor do Private LLM se baseia na inferência local: o próprio marketing do desenvolvedor usa as frases "sem nuvem, sem rastreamento, sem login" e afirma que as conversas "nunca saem do dispositivo". Esta análise avalia essa afirmação com base no que o rótulo de privacidade da App Store e o FAQ do próprio desenvolvedor realmente documentam, em vez de aceitar o slogan de marketing sem questionar.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**Configurar o Private LLM leva quatro etapas e não exige criação de conta.** Todo o processo, desde o download na App Store até a primeira resposta, geralmente leva alguns minutos, mais o tempo necessário para baixar o modelo escolhido.',
        ],
        numberedItems: [
          {
            title: 'Comprar e instalar o app',
            whyItMatters: 'Baixe o [Private LLM na App Store da Apple](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) por US$ 4,99. É uma compra única — não há período de teste gratuito nem assinatura recorrente para gerenciar.',
          },
          {
            title: 'Escolher um modelo adequado ao seu aparelho',
            whyItMatters: 'Abra o navegador de modelos dentro do app e escolha um modelo do tamanho certo para seu hardware. A própria orientação do desenvolvedor sugere que a maioria dos iPhones executa Llama 3.2 3B ou Qwen3 4B sem problemas, o iPhone 15 Pro e modelos mais novos aguentam Llama 3.1 8B, e um Mac com 48 GB de memória unificada pode rodar Llama 3.3 70B.',
          },
          {
            title: 'Baixar o modelo',
            whyItMatters: 'Os arquivos de modelo variam de aproximadamente 2 GB a dezenas de gigabytes, dependendo da quantidade de parâmetros e do nível de quantização. Essa etapa exige conexão com a internet; nenhuma das etapas seguintes exige.',
          },
          {
            title: 'Conversar totalmente offline',
            whyItMatters: 'Depois que o modelo for baixado, você pode ativar o modo avião para verificar você mesmo a alegação de funcionamento offline — chat, resumo e reformulação de texto (no Mac) funcionam todos sem conexão de rede.',
          },
          {
            title: 'Opcional: conectar Siri e Atalhos',
            whyItMatters: 'O Private LLM expõe dois App Intents para a Siri e o app Atalhos, permitindo acionar uma resposta do modelo por comando de voz ou automação sem abrir o app diretamente.',
          },
        ],
        note: 'Os tamanhos exatos de download, a lista de modelos suportados e os requisitos mínimos do aparelho podem mudar entre atualizações da App Store — confirme os detalhes atuais no navegador de modelos do app ou em [privatellm.app](https://privatellm.app/en) antes de iniciar um download grande com um plano de dados limitado.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preço: a compra única explicada',
        itemHeadings: true,
        content: [
          '**O Private LLM custa US$ 4,99 como compra única na App Store da Apple — não há assinatura nem compras no app na listagem atual.** Esse preço foi verificado diretamente na [ficha da App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) para esta análise. Os preços da App Store podem variar por região; confirme o preço atual antes de comprar.',
        ],
        columns: ['O que você paga', 'O que está incluído', 'O que não está incluído'],
        rows: [
          {
            'O que você paga': 'US$ 4,99 (compra única)',
            'O que está incluído': 'App completo em iPhone, iPad e Mac; acesso à biblioteca completa de 140+ modelos; Compartilhamento familiar para até seis pessoas',
            'O que não está incluído': 'Qualquer versão para Android, Windows ou Linux — a compra na App Store não desbloqueia uma licença multiplataforma',
          },
        ],
        note: 'Os preços da App Store podem mudar sem aviso prévio e variar por região. Confirme o preço atual na [ficha da App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) antes de comprar. Verificado para esta análise em 2026-09-05.',
      },
      modelsAndQuantization: {
        id: 'models-and-quantization',
        title: 'Modelos suportados e quantização OmniQuant',
        content: [
          '**A biblioteca do Private LLM inclui mais de 140 modelos de código aberto, abrangendo uso geral, programação e ajustes específicos por idioma.** As famílias citadas na própria documentação do desenvolvedor incluem Llama 3, 3.1, 3.2 e 3.3; modelos baseados em Qwen 2.5 e Qwen3; Gemma 2 e Gemma 3; Phi-4; Mixtral; e modelos baseados no DeepSeek R1 Distill, além de opções específicas por região como SauerkrautLM (alemão), DictaLM (hebraico), RakutenAI (japonês) e Yi (chinês).',
          'O app quantiza esses modelos usando **OmniQuant**, combinado com **GPTQ** para alguns modelos — ambos são métodos de quantização baseados em otimização, em vez da abordagem mais simples round-to-nearest (RTN) usada por alguns apps de IA local concorrentes. Segundo as próprias páginas comparativas do desenvolvedor, a quantização baseada em otimização ajusta o intervalo de quantização com base em dados de calibração, o que pode preservar mais qualidade de saída do modelo original em uma mesma largura de bits do que o RTN. Essa é uma afirmação técnica do próprio desenvolvedor, sustentada por sua própria documentação — não foi verificada de forma independente pela PromptQuorum nos arquivos de modelo quantizados específicos do Private LLM.',
          'Orientação de hardware do desenvolvedor: a maioria dos iPhones executa **Llama 3.2 3B** ou **Qwen3 4B** sem problemas; o **iPhone 15 Pro** e modelos mais novos conseguem rodar **Llama 3.1 8B**; e um Mac com **48 GB de memória unificada** pode rodar **Llama 3.3 70B**. Essas são recomendações do próprio desenvolvedor, não números verificados de forma independente — o desempenho real depende do nível de quantização, do comprimento de contexto e da carga de apps em segundo plano.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plataformas: iPhone, iPad, Mac e Vision Pro',
        itemHeadings: true,
        columns: ['Plataforma', 'O que esperar', 'Observação importante'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'O que esperar': 'Exige iOS 17.0 ou posterior e um chip A12 Bionic ou mais recente (iPhone XS em diante, segundo a ficha da App Store). O tamanho do modelo escolhido deve corresponder à RAM disponível.',
            'Observação importante': 'A maioria dos iPhones lida bem com modelos de 3 a 4 bilhões de parâmetros; apenas o iPhone 15 Pro e modelos mais novos são recomendados para modelos de 8B, segundo o desenvolvedor.',
          },
          {
            'Plataforma': 'iPad',
            'O que esperar': 'Executa o mesmo app e a mesma biblioteca de modelos do iPhone. O FAQ do desenvolvedor recomenda no mínimo 4 GB de RAM, com um iPad Pro (16 GB) recomendado para modelos maiores.',
            'Observação importante': 'iPads mais antigos com menos RAM ficam limitados a modelos quantizados menores.',
          },
          {
            'Plataforma': 'Mac',
            'O que esperar': 'App nativo para Macs com Apple Silicon (série M). Também inclui serviços de escrita específicos do macOS (correção gramatical, resumo, reformulação) que outros apps podem acionar.',
            'Observação importante': 'O FAQ do desenvolvedor afirma que Macs com Intel são tecnicamente suportados, mas não recomendados — a inferência é visivelmente mais lenta sem a memória unificada e o Neural Engine do Apple Silicon.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'O que esperar': 'A ficha da App Store mostra compatibilidade com o Vision Pro para o mesmo app.',
            'Observação importante': 'Esta análise não testou a experiência no Vision Pro de forma independente; trate isso como compatibilidade listada na App Store, não como um recurso verificado na prática.',
          },
          {
            'Plataforma': 'Android, Windows, Linux',
            'O que esperar': 'Nenhuma ficha oficial na Google Play, na Microsoft Store ou em qualquer repositório de pacotes Linux.',
            'Observação importante': 'Um APK beta não oficial já circulou fora da Google Play Store em certos momentos da história do app; ele não faz parte do site de marketing principal nem do canal de lançamento suportado pelo desenvolvedor, então esta análise não trata o Android como plataforma suportada.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade: o que o Private LLM coleta e o que não coleta',
        content: [
          '**O rótulo de privacidade da App Store do Private LLM afirma que o desenvolvedor não coleta nenhum dado do app**, e o app não exige conta, login ou cadastro para uso. O próprio marketing do desenvolvedor descreve o produto com as frases "sem nuvem, sem rastreamento, sem login" e afirma que as conversas "nunca saem do dispositivo".',
          'Como a inferência roda localmente depois que um modelo é baixado, não há dados de chat para transmitir a um servidor durante o uso normal — é a própria arquitetura, não apenas uma promessa de política, que mantém as conversas no dispositivo.',
        ],
        items: [
          '**Nenhuma conta necessária.** Você pode baixar, comprar e usar o app sem criar um perfil ou fazer login.',
          '**Nenhuma coleta de dados, segundo o rótulo da App Store.** O rótulo de privacidade da Apple para esta ficha mostra nenhum dado coletado pelo app.',
          '**A sincronização do histórico de chat via iCloud não está documentada.** O FAQ público do desenvolvedor não descreve sincronização via iCloud de conversas entre aparelhos — esta análise trata isso como não confirmado em vez de presumir que existe. Se a sincronização de chat entre dispositivos for importante para você, verifique o comportamento atual diretamente no app antes de depender disso.',
          '**Execução em sandbox.** O app roda dentro do sandbox padrão da Apple, o mesmo isolamento ao qual todo app da App Store está sujeito — isso é uma garantia da plataforma da Apple, não um recurso específico do Private LLM.',
        ],
      },
      history: {
        id: 'history',
        title: 'História da empresa e marcos de versões',
        content: [
          '**O Private LLM foi lançado na App Store em junho de 2023**, com a versão 1.0.1 para iOS e a versão 1.0.2 para macOS lançadas ambas em 2 de junho de 2023. Ele é desenvolvido pela [Numen Technologies Limited](https://privatellm.app/en), que se descreve como uma equipe pequena e autofinanciada, sem financiamento de capital de risco.',
        ],
        items: [
          '**Junho de 2023.** Lançamento inicial na App Store (iOS 1.0.1, macOS 1.0.2) com um modelo base ajustado.',
          '**Julho de 2023.** Adicionado suporte à Siri e a Atalhos (App Intents).',
          '**Setembro de 2023.** Adicionada compatibilidade com a série iPhone 15.',
          '**Dezembro de 2023.** Suporte estendido a iPhones e iPads mais antigos com apenas 3 GB de RAM.',
          '**Janeiro de 2024.** Introduzido o download de múltiplos modelos, ampliando a biblioteca com modelos das famílias TinyLlama, StableLM, Phi-2, Mistral, Llama e Gemma.',
          '**Fevereiro de 2024.** Adicionados serviços de escrita específicos do macOS: correção gramatical, resumo e reformulação, acionáveis a partir de outros apps de Mac.',
          '**Março de 2024.** Troca de modelo sem sair da interface de chat ativa.',
          '**Julho de 2026.** A versão 1.9.15 passou a baixar modelos de uma CDN em vez do Hugging Face, o que as notas de versão descrevem como mais rápido; esta é a versão atual no momento desta análise.',
        ],
        note: 'Histórico de versões baseado na própria página de [notas de versão](https://privatellm.app/en/release-notes) do desenvolvedor. Datas e números de versão são os publicados ali; verifique a versão atual diretamente na App Store antes de contar com um recurso específico.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que isso significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Compra única de US$ 4,99',
            'O que isso significa na prática': 'Nenhuma assinatura para acompanhar ou cancelar; pague uma vez, use indefinidamente em seus aparelhos Apple.',
            'Limitação / ressalva': 'Não é gratuito — leitores que querem uma opção sem custo devem comparar com PocketPal AI ou Enclave AI.',
          },
          {
            'Vantagem': 'Biblioteca com 140+ modelos',
            'O que isso significa na prática': 'Ampla escolha de modelos de uso geral, programação e específicos por idioma sem precisar procurar arquivos GGUF por conta própria.',
            'Limitação / ressalva': 'A biblioteca é selecionada pelo desenvolvedor; não é possível importar um ajuste fino personalizado arbitrário como alguns apps de código aberto permitem.',
          },
          {
            'Vantagem': 'Quantização OmniQuant e GPTQ',
            'O que isso significa na prática': 'O desenvolvedor afirma que isso preserva mais qualidade do modelo por bit do que a quantização round-to-nearest mais simples.',
            'Limitação / ressalva': 'Essa é uma afirmação técnica do próprio desenvolvedor; a PromptQuorum não comparou de forma independente os arquivos de modelo específicos do Private LLM com equivalentes quantizados em RTN.',
          },
          {
            'Vantagem': 'Sem conta, sem coleta de dados',
            'O que isso significa na prática': 'Use o app imediatamente após a compra sem precisar se cadastrar em nada; o rótulo de privacidade da App Store mostra nenhum dado coletado.',
            'Limitação / ressalva': 'Como o app é de código fechado, a alegação de "nenhuma coleta" não pode ser auditada de forma independente como em um app de código aberto.',
          },
          {
            'Vantagem': 'Integração com Siri e Atalhos',
            'O que isso significa na prática': 'Acione respostas do modelo por comandos de voz ou automações sem abrir o app.',
            'Limitação / ressalva': 'O iOS restringe o acesso à GPU em segundo plano, então a geração acionada por Atalhos pode ser mais lenta ou mais limitada do que o chat em primeiro plano.',
          },
          {
            'Vantagem': 'Compartilhamento familiar para até seis pessoas',
            'O que isso significa na prática': 'Uma única compra de US$ 4,99 pode cobrir todo um grupo de Compartilhamento familiar da Apple.',
            'Limitação / ressalva': 'Cada membro da família ainda precisa de seu próprio aparelho compatível e armazenamento/RAM suficientes para os modelos que escolher.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Private LLM vs. alternativas',
        columns: ['App', 'Plataformas', 'Preço', 'Flexibilidade de modelos', 'Diferença-chave'],
        rows: [
          {
            'App': 'Private LLM',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Preço': 'Compra única de US$ 4,99',
            'Flexibilidade de modelos': '140+ modelos selecionados; quantização OmniQuant/GPTQ',
            'Diferença-chave': 'Pago, código fechado, biblioteca curada — sem importação arbitrária de GGUF',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, com algum suporte ao Android',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Qualquer arquivo GGUF que o usuário obtenha do Hugging Face ou de outro lugar',
            'Diferença-chave': 'Gratuito e de código aberto; exige mais gerenciamento manual de modelos',
          },
          {
            'App': '[Enclave AI](/pt/power-local-llm/enclave-ai-review)',
            'Plataformas': 'Varia conforme a versão — confira a ficha atual',
            'Preço': 'Veja a ficha atual',
            'Flexibilidade de modelos': 'Veja a análise completa para o suporte de modelos atual',
            'Diferença-chave': 'Veja a análise completa do Enclave AI para uma comparação detalhada',
          },
          {
            'App': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Plataformas': 'iPhone/iPad/Mac',
            'Preço': 'Gratuito',
            'Flexibilidade de modelos': 'Construído sobre o Apple MLX; acesso ao modelo de fundação no dispositivo da Apple',
            'Diferença-chave': 'Alternativa gratuita construída especificamente sobre o framework MLX da Apple',
          },
          {
            'App': '[Arbiter](/pt/power-local-llm/arbiter-local-ai-chat-review)',
            'Plataformas': 'Veja a análise completa para o suporte de plataformas atual',
            'Preço': 'Veja a ficha atual',
            'Flexibilidade de modelos': 'Veja a análise completa para o suporte de modelos atual',
            'Diferença-chave': 'Veja a análise completa do Arbiter para uma comparação detalhada',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Plataformas': 'iOS/Mac (código aberto, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Carrega modelos GGUF personalizados via llama.cpp/ggml',
            'Diferença-chave': 'Foi removido da App Store e do TestFlight em agosto de 2025, segundo o próprio README no GitHub — verifique a disponibilidade atual antes de contar com ele',
          },
          {
            'App': '[Layla](https://www.layla-network.ai/)',
            'Plataformas': 'iOS e Android',
            'Preço': 'US$ 19,99 mais compras no app',
            'Flexibilidade de modelos': 'Modelos GGUF personalizados; foco em personagens/roleplay com mais de 100 vozes',
            'Diferença-chave': 'Multiplataforma (ao contrário do Private LLM), mas mais caro, com foco em roleplay/personagens',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plataformas': 'App Flutter multiplataforma (Android como principal; também roda em outras plataformas suportadas pelo Flutter)',
            'Preço': 'Gratuito, código aberto (licença MIT)',
            'Flexibilidade de modelos': 'Qualquer arquivo GGUF via llama.cpp; também se conecta remotamente a Anthropic, DeepSeek, Ollama, Mistral e OpenAI',
            'Diferença-chave': 'Gratuito, totalmente de código aberto e não limitado apenas à inferência local',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plataformas': 'Android',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Várias APIs de provedores em nuvem além de execução local',
            'Diferença-chave': 'Somente Android; se posiciona como cliente multiprovedor, não como app local-first',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plataformas': 'Android (iOS planejado)',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Executa modelos GGUF no dispositivo via Cactus Compute (llama.cpp para React Native), ou se conecta a um servidor AnythingLLM autogerenciado',
            'Diferença-chave': 'Projetado para se conectar a um workspace AnythingLLM autogerenciado, não como app de chat independente',
          },
        ],
        note: 'Detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência — verifique as informações atuais na ficha própria de cada app antes de decidir. A disponibilidade do LLM Farm na App Store, em especial, deve ser reconfirmada, já que o próprio README no GitHub o descrevia como removido da App Store em agosto de 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o Private LLM',
        items: [
          '**Usuários exclusivos da Apple que querem um app bem-acabado e curado e não se importam em pagar uma vez.** Donos de iPhone, iPad e Mac que valorizam um app mantido e atualizado ativamente mais do que montar sua própria coleção de arquivos GGUF ganham uma grande biblioteca de modelos pronta para usar por US$ 4,99.',
          '**Leitores que valorizam qualidade de quantização mais do que a quantidade bruta de modelos.** Se a vantagem de qualidade por bit reivindicada pelo OmniQuant e pelo GPTQ frente à quantização round-to-nearest importa para o seu caso de uso, o Private LLM é um dos poucos apps de consumo construídos especificamente em torno dessa abordagem.',
          '**Famílias que compartilham um mesmo grupo de Apple ID.** O Compartilhamento familiar significa que uma única compra de US$ 4,99 pode cobrir até seis pessoas — mais barato por pessoa do que configurar vários apps gratuitos individualmente para familiares menos técnicos.',
          '**Usuários que querem automação com Siri/Atalhos.** Os dois App Intents permitem incorporar respostas de IA local em automações já existentes do iOS sem abrir o app.',
          '**Usuários preocupados com privacidade que aceitam um app de código fechado.** Se "nenhum dado coletado" segundo o rótulo de privacidade da App Store e "nenhuma conta necessária" atendem ao seu critério sem precisar auditar o código-fonte você mesmo, a arquitetura no dispositivo do Private LLM entrega exatamente isso.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o Private LLM',
        items: [
          '**Usuários de Android, Windows ou Linux.** O Private LLM não tem app oficial em nenhuma dessas plataformas — escolha [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) (suporte parcial ao Android), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid), [ChatterUI](https://github.com/Vali-98/ChatterUI) ou [RikkaHub](https://github.com/rikkahub/rikkahub) em vez disso.',
          '**Leitores que querem uma opção totalmente gratuita.** US$ 4,99 é barato, mas não é gratuito — [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) e [Locally AI](/pt/power-local-llm/locally-ai-review) não custam nada.',
          '**Leitores que querem rodar os maiores modelos de peso aberto.** O hardware móvel limita o que cabe na memória — mesmo a orientação do próprio desenvolvedor limita a maioria dos iPhones a modelos de 3 a 8 bilhões de parâmetros; apenas um Mac com 48 GB+ de memória unificada alcança a faixa de 70B, e mesmo esse teto fica bem abaixo dos maiores modelos de peso aberto disponíveis para hardware de servidor.',
          '**Equipes ou organizações que querem uma implantação compartilhada e gerenciada centralmente.** O Private LLM é um app de consumo para um único usuário e um único dispositivo, sem console de administração, gerenciamento de licenças compartilhado ou faturamento por equipe — organizações devem considerar infraestrutura de LLM local autogerenciada do lado do servidor.',
          '**Leitores que querem auditar o código-fonte do app por conta própria.** O Private LLM é de código fechado. Se a revisão independente de código importa para você, uma alternativa de código aberto como [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) permite verificar o comportamento diretamente.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto custa o Private LLM?',
            a: 'O Private LLM custa [US$ 4,99 como compra única](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) na App Store da Apple, verificado para esta análise em 2026-09-05. Não há assinatura nem compras no app na ficha atual da App Store. Os preços da App Store podem variar por região e mudar com o tempo — confirme o preço atual antes de comprar.',
          },
          {
            q: 'O Private LLM está disponível para Android ou Windows?',
            a: 'Não existe versão oficial na Google Play, na Microsoft Store ou em qualquer repositório de pacotes Linux. O Private LLM é feito especificamente para iPhone, iPad e Mac. Um APK beta não oficial já circulou fora da Play Store em certos momentos, mas ele não faz parte do canal de lançamento suportado principal do desenvolvedor, então esta análise trata o Android como não suportado.',
          },
          {
            q: 'Quem desenvolve o Private LLM?',
            a: 'O Private LLM é desenvolvido pela [Numen Technologies Limited](https://privatellm.app/en), que se descreve no próprio site como uma equipe pequena e autofinanciada de dois engenheiros, sem financiamento de capital de risco.',
          },
          {
            q: 'O que é o OmniQuant, e por que o Private LLM o usa?',
            a: 'OmniQuant é um método de quantização baseado em otimização que ajusta o intervalo de quantização com base em dados de calibração, em vez da abordagem mais simples round-to-nearest (RTN). O Private LLM combina OmniQuant com GPTQ em alguns modelos. O desenvolvedor afirma que isso preserva mais da qualidade de saída original de um modelo em uma mesma largura de bits do que a quantização RTN; essa é uma afirmação técnica do próprio desenvolvedor, não um benchmark independente da PromptQuorum sobre os arquivos de modelo específicos do Private LLM.',
          },
          {
            q: 'O Private LLM funciona totalmente offline?',
            a: 'Sim, depois que um modelo é baixado. O app só precisa de conexão com a internet para baixar um modelo ou uma atualização do app; o chat e serviços específicos do macOS, como correção gramatical e resumo, funcionam depois sem conexão de rede.',
          },
          {
            q: 'O Private LLM coleta dados pessoais?',
            a: 'O rótulo de privacidade da Apple para esta ficha da App Store afirma que o desenvolvedor não coleta nenhum dado do app. Não é necessária conta nem login para usá-lo. Esta análise se baseia no rótulo de privacidade da App Store, não em uma auditoria independente do código fechado do app.',
          },
          {
            q: 'O Private LLM sincroniza o histórico de chat entre aparelhos via iCloud?',
            a: 'Isso não está documentado no FAQ público do desenvolvedor. Esta análise trata a sincronização via iCloud de conversas como não confirmada, em vez de presumir que existe — verifique o comportamento atual diretamente no app antes de depender da continuidade de chat entre dispositivos.',
          },
          {
            q: 'Quais modelos posso rodar em um iPhone com o Private LLM?',
            a: 'Segundo a própria orientação do desenvolvedor, a maioria dos iPhones executa bem modelos de 3 a 4 bilhões de parâmetros (por exemplo, Llama 3.2 3B ou Qwen3 4B), enquanto o iPhone 15 Pro e modelos mais novos conseguem lidar com modelos de 8 bilhões de parâmetros, como o Llama 3.1 8B. Essas são recomendações do desenvolvedor, não resultados verificados de forma independente — o desempenho real depende do nível de quantização e da RAM disponível.',
          },
          {
            q: 'Como o Private LLM se compara ao PocketPal AI?',
            a: 'O Private LLM é um app pago (US$ 4,99), de código fechado e exclusivo da Apple, com uma biblioteca curada de 140+ modelos e quantização OmniQuant/GPTQ. O [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) é gratuito e de código aberto, roda em iPhone/iPad com algum suporte ao Android, e permite importar qualquer arquivo GGUF em vez de escolher de uma lista curada. Escolha o Private LLM para uma experiência mantida, de compra única, com uma ampla biblioteca de modelos embutida; escolha o PocketPal AI para uma configuração gratuita, auditável e mais manual.',
          },
          {
            q: 'Uma compra do Private LLM cobre vários aparelhos ou membros da família?',
            a: 'Sim. A compra de US$ 4,99 cobre iPhone, iPad e Mac para o Apple ID que fez a compra, e o Compartilhamento familiar da Apple estende essa única compra a até seis pessoas dentro do mesmo grupo de Compartilhamento familiar.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Private LLM ganha seu lugar entre os apps de IA local móveis mais bem documentados cobertos neste site: um preço único claro de US$ 4,99, verificado diretamente na App Store, uma biblioteca curada com mais de 140 modelos de código aberto e uma abordagem de quantização específica e nomeada (OmniQuant mais GPTQ), em vez de uma alegação vaga de "otimizado para dispositivos móveis". As próprias notas de versão do desenvolvedor mostram três anos de atualizações contínuas desde o lançamento em junho de 2023, um histórico significativamente mais longo do que vários apps menores deste grupo. As contrapartidas são igualmente claras: é exclusivo da Apple, não é gratuito, sua lista de modelos é curada em vez de totalmente aberta a importações GGUF personalizadas, e seu código fechado significa que a alegação de "nenhum dado coletado" se baseia no rótulo de privacidade da App Store, e não em uma revisão independente de código. Leitores que querem um app mantido, curado e de compra única em todos os seus aparelhos Apple deveriam comprá-lo; leitores em Android/Windows/Linux, leitores que querem uma opção gratuita, ou leitores que querem auditar o código-fonte por conta própria deveriam começar pelo [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) em vez disso.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Private LLM na App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — preço, compatibilidade de plataformas, rótulo de privacidade, avaliações e histórico de versões.',
          '[Site oficial do Private LLM](https://privatellm.app/en) — visão geral do produto, modelo de preços e alegações de privacidade.',
          '[FAQ do Private LLM](https://privatellm.app/en/faq) — modelos suportados, abordagem de quantização, requisitos de hardware, Compartilhamento familiar e integração com Siri/Atalhos.',
          '[Notas de versão do Private LLM](https://privatellm.app/en/release-notes) — histórico de versões e marcos de recursos de junho de 2023 a julho de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — a alternativa gratuita e de código aberto com importação manual de GGUF.',
          '[Os melhores apps de IA local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o levantamento completo de apps para iPhone, incluindo Private LLM, PocketPal AI e Locally AI.',
          '[Análise do Enclave AI](/pt/power-local-llm/enclave-ai-review) — outro app de IA no dispositivo para comparação.',
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — uma alternativa gratuita baseada no Apple MLX.',
          '[Análise do Chatty-mini](/pt/power-local-llm/chatty-mini-review) — uma alternativa menor, menos documentada e exclusiva do Android, para comparação.',
          '[Análise do Arbiter Local AI Chat](/pt/power-local-llm/arbiter-local-ai-chat-review) — outro app de chat local coberto neste site.',
          '[O diretório completo de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em todas as plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-llm-review-hero-ar.webp',
    title: 'مراجعة Private LLM (2026): محادثة ذكاء اصطناعي على الجهاز لأجهزة iPhone وiPad وMac',
    seoTitle: 'مراجعة Private LLM 2026: ذكاء اصطناعي على الجهاز لـ iPhone وMac',
    intro:
      'تطبيق Private LLM، من تطوير [Numen Technologies Limited](https://privatellm.app/en)، هو تطبيق مدفوع بشراء لمرة واحدة لأجهزة iPhone وiPad وMac يشغّل نماذج لغوية مفتوحة المصدر بالكامل على الجهاز، دون حساب ودون الاعتماد على السحابة ودون اشتراك. سعره [4.99 دولار أمريكي في App Store من Apple](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — شراء لمرة واحدة يغطي منصات Apple الثلاث، وعبر ميزة المشاركة العائلية يغطي حتى ستة أشخاص. قد تختلف أسعار App Store حسب المنطقة؛ تأكد من السعر الحالي في متجر التطبيقات المحلي قبل الشراء. يدعم التطبيق أكثر من 140 نموذجًا مفتوح المصدر من عائلات مثل Llama وQwen وGemma وMistral وPhi-4، ويستخدم أسلوب تكميم (quantization) يُسمى OmniQuant (مقترنًا بـ GPTQ في بعض النماذج) يقول المطوّر إنه يحافظ على جودة أكبر للنموذج مقارنة بتكميم round-to-nearest الأبسط الذي تستخدمه بعض التطبيقات المنافسة. السؤال العملي لمن يقارن تطبيقات الذكاء الاصطناعي المحلي ليس ما إذا كانت المحادثة على الجهاز تعمل على iPhone — فعدة تطبيقات مغطاة على هذا الموقع تثبت ذلك بالفعل — بل ما إذا كان الشراء لمرة واحدة بسعر 4.99 دولار مع أكثر من 140 نموذجًا منتقى يستحق مقارنةً ببدائل مجانية مثل [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Enclave AI](/ar/power-local-llm/enclave-ai-review).',
    metaDescription:
      'مراجعة Private LLM 2026: شراء لمرة واحدة بـ 4.99 دولار، حصري لـ iPhone/iPad/Mac، أكثر من 140 نموذجًا، تكميم OmniQuant، بدون اشتراك. السعر والخصوصية والمقارنة مع PocketPal AI.',
    twitterDescription:
      'مراجعة Private LLM 2026: تطبيق بشراء لمرة واحدة بـ 4.99 دولار لمحادثة ذكاء اصطناعي على الجهاز في iPhone وiPad وMac. تكميم OmniQuant، أكثر من 140 نموذجًا، ومقارنة مع PocketPal AI وEnclave AI.',
    audience:
      'مستخدمو iPhone وiPad وMac الذين يقررون ما إذا كان تطبيق ذكاء اصطناعي محلي بشراء لمرة واحدة يستحق مقارنةً ببدائل مجانية مثل PocketPal AI وEnclave AI وLocally AI — يغطي السعر والنماذج المدعومة وأسلوب التكميم والخصوصية.',
    readTime: 'قراءة 9 دقائق',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Private LLM review',
    targetKeywords: [
      'private llm review',
      'private llm app iphone',
      'private llm ios price',
      'private llm omniquant',
      'private llm vs pocketpal ai',
      'on-device ai chat iphone mac',
      'numen technologies private llm',
      'best local llm app for iphone',
    ],
    current_models_mentioned: ['Llama 3.3 70B', 'Llama 3.1 8B', 'Llama 3.2 3B', 'Qwen 2.5', 'Qwen3 4B', 'Gemma 2', 'Gemma 3', 'Phi-4', 'Mixtral', 'DeepSeek R1 Distill'],
    current_hardware_mentioned: ['iPhone 15 Pro', 'iPhone 12', 'جهاز Mac بمعالج Apple Silicon و48 جيجابايت من الذاكرة الموحدة', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Private LLM تطبيق بشراء لمرة واحدة بسعر 4.99 دولار لأجهزة iPhone وiPad وMac يشغّل أكثر من 140 نموذج ذكاء اصطناعي مفتوح المصدر بالكامل على الجهاز، دون حساب ودون اشتراك.** من تطوير [Numen Technologies Limited](https://privatellm.app/en)، يستخدم تكميم OmniQuant وGPTQ، الذي يقول المطوّر إنه يحافظ على جودة إخراج أعلى لكل بت مقارنة بتكميم round-to-nearest في بعض التطبيقات المنافسة. عملية شراء واحدة تفتح مكتبة النماذج الكاملة على منصات Apple الثلاث، وعبر المشاركة العائلية لحتى ستة أشخاص. من يبحث عن بديل مجاني، أو يستخدم Android/Windows/Linux، عليه المقارنة مع [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) المجاني ومفتوح المصدر.',
    quickAnswerTop: {
      en: {
        question: 'Is Private LLM worth the $4.99 price on the App Store?',
        answer:
          'Yes, if you want a polished, actively maintained, Apple-only local-AI app with a large curated model library (140+ models) and no subscription — the $4.99 is a one-time purchase covering iPhone, iPad, and Mac, with Family Sharing for up to six people. Skip it if you are on Android, Windows, or Linux, or if you specifically want a free and fully open-source app — PocketPal AI covers that case at no cost.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store; no subscription, no in-app purchases listed.',
          'iPhone, iPad, and Mac only — no Android, Windows, or Linux version on the App Store.',
          'Supports more than 140 open-source models: Llama, Qwen, Gemma, Mistral, Phi-4, and more.',
          'Uses OmniQuant and GPTQ quantization instead of simpler round-to-nearest quantization.',
          'Developer (Numen Technologies Limited) states the app collects no data and needs no account.',
        ],
        updatedDate: '2026-09-05',
      },
      ar: {
        question: 'هل يستحق تطبيق Private LLM سعر 4.99 دولار في App Store؟',
        answer:
          'نعم، إذا كنت تريد تطبيق ذكاء اصطناعي محلي مصقولًا يتم صيانته بنشاط وحصري لأجهزة Apple، مع مكتبة نماذج منتقاة كبيرة (أكثر من 140 نموذجًا) ودون اشتراك — 4.99 دولار هي رسوم شراء لمرة واحدة تغطي iPhone وiPad وMac، مع المشاركة العائلية لحتى ستة أشخاص. تجاهله إذا كنت تستخدم Android أو Windows أو Linux، أو إذا كنت تريد تحديدًا تطبيقًا مجانيًا ومفتوح المصدر بالكامل — تطبيق PocketPal AI يغطي تلك الحالة دون أي تكلفة.',
        bullets: [
          'شراء لمرة واحدة بسعر 4.99 دولار في App Store من Apple؛ بدون اشتراك وبدون مشتريات داخل التطبيق مذكورة.',
          'حصري لأجهزة iPhone وiPad وMac — لا توجد نسخة لأنظمة Android أو Windows أو Linux في App Store.',
          'يدعم أكثر من 140 نموذجًا مفتوح المصدر: Llama وQwen وGemma وMistral وPhi-4 وغيرها.',
          'يستخدم تكميم OmniQuant وGPTQ بدلًا من تكميم round-to-nearest الأبسط.',
          'يذكر المطوّر (Numen Technologies Limited) أن التطبيق لا يجمع أي بيانات ولا يتطلب حسابًا.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Private LLM', anchor: 'what-is-private-llm' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'السعر: شرح الشراء لمرة واحدة', anchor: 'pricing' },
      { label: 'النماذج المدعومة وتكميم OmniQuant', anchor: 'models-and-quantization' },
      { label: 'المنصات: iPhone وiPad وMac وVision Pro', anchor: 'platforms' },
      { label: 'الخصوصية: ما الذي يجمعه Private LLM وما لا يجمعه', anchor: 'privacy' },
      { label: 'تاريخ الشركة ومحطات الإصدارات', anchor: 'history' },
      { label: 'المقايضات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Private LLM مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Private LLM', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Private LLM', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الخلاصة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Private LLM تطبيق بشراء لمرة واحدة بسعر 4.99 دولار لأجهزة iPhone وiPad وMac من تطوير Numen Technologies Limited، يشغّل أكثر من 140 نموذج ذكاء اصطناعي مفتوح المصدر بالكامل على الجهاز باستخدام تكميم OmniQuant وGPTQ — دون حساب ودون الاعتماد على السحابة ودون اشتراك.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله وكأنك تشتري تطبيق محادثة ذكاء اصطناعي محلي مرة واحدة، تمامًا كأي تطبيق عادي في App Store، بدلًا من الاشتراك في روبوت محادثة سحابي — النموذج يعمل على جهاز iPhone أو Mac الخاص بك، لذا لا يغادر أي شيء تكتبه الجهاز.',
          },
        ],
        items: [
          'السعر: [شراء لمرة واحدة بـ 4.99 دولار](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) في App Store من Apple؛ بدون اشتراك وبدون مشتريات داخل التطبيق مذكورة وقت هذه المراجعة.',
          'المنصات: حصري لأجهزة iPhone وiPad وMac — لا يوجد تطبيق لأنظمة Android أو Windows أو Linux في App Store.',
          'المطوّر: [Numen Technologies Limited](https://privatellm.app/en)، فريق صغير يمول نفسه ذاتيًا ومقره الاتحاد الأوروبي وفق موقع المطوّر نفسه.',
          'مكتبة النماذج: أكثر من 140 نموذجًا مفتوح المصدر، بما في ذلك Llama وQwen وGemma وMistral وPhi-4 ونماذج مبنية على DeepSeek R1 Distill.',
          'التكميم: يستخدم OmniQuant وGPTQ، اللذين يقول المطوّر إنهما ينتجان جودة إخراج أفضل لكل بت مقارنة بتكميم round-to-nearest (RTN) الذي تستخدمه بعض التطبيقات المنافسة.',
          'الخصوصية: تشير بطاقة خصوصية App Store إلى أن المطوّر لا يجمع أي بيانات من التطبيق؛ لا حاجة لحساب أو تسجيل دخول للمحادثة.',
          'إضافات: تكامل مع Siri والاختصارات عبر App Intents اثنين، بالإضافة إلى المشاركة العائلية لحتى ستة أشخاص بعملية شراء واحدة.',
          'الإصدار 1.9.15 (يوليو 2026) هو الإصدار الحالي؛ ظهر التطبيق لأول مرة في App Store في يونيو 2023.',
        ],
      },
      whatIsPrivateLLM: {
        id: 'what-is-private-llm',
        title: 'ما هو Private LLM',
        content: [
          '**Private LLM تطبيق أصلي لأجهزة Apple يقوم بتنزيل وتشغيل نماذج لغوية مفتوحة المصدر مباشرة على iPhone أو iPad أو Mac، دون أي مكوّن على جانب الخادم.** بمجرد تنزيل نموذج، لا يحتاج التطبيق إلى اتصال بالإنترنت لتوليد رد — كل شيء يعمل محليًا باستخدام المعالج المركزي (CPU) ووحدة معالجة الرسوميات (GPU) و Neural Engine الخاصة بالجهاز نفسه.',
          'يقوم بتطويره وصيانته [Numen Technologies Limited](https://privatellm.app/en)، الذي يصف نفسه على موقعه بأنه "من صنع مهندسَين، وليس صناديق رأس مال مغامر" — فريق صغير يمول نفسه ذاتيًا بدلًا من شركة مدعومة برأس مال مغامر. ظهر التطبيق لأول مرة في App Store في يونيو 2023 باسم [Private LLM - Local AI Chat](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) (معرّف App Store رقم 6448106860)، وتم تحديثه باستمرار منذ ذلك الحين — الإصدار الحالي، 1.9.15، صدر في يوليو 2026.',
          'على عكس التطبيقات التي ترسل طلبات المحادثة إلى واجهة برمجة تطبيقات بعيدة، تعتمد قيمة Private LLM بالكامل على الاستدلال المحلي: تستخدم مادة تسويق المطوّر نفسه عبارات "بدون سحابة، بدون تتبع، بدون تسجيل دخول"، وتؤكد أن المحادثات "لا تغادر الجهاز أبدًا". تقيّم هذه المراجعة هذا الادعاء استنادًا إلى ما توثقه فعليًا بطاقة خصوصية App Store وأسئلة المطوّر الشائعة، بدلًا من قبول الشعار التسويقي كما هو.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**يستغرق إعداد Private LLM أربع خطوات ولا يتطلب إنشاء أي حساب.** العملية بأكملها، من تنزيل التطبيق من App Store وحتى الحصول على أول رد، تستغرق عادة بضع دقائق بالإضافة إلى الوقت اللازم لتنزيل النموذج المختار.',
        ],
        numberedItems: [
          {
            title: 'شراء التطبيق وتثبيته',
            whyItMatters: 'نزّل [Private LLM من App Store الخاص بـ Apple](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) بسعر 4.99 دولار. هذا شراء لمرة واحدة — لا توجد فترة تجريبية مجانية ولا اشتراك متكرر يجب إدارته.',
          },
          {
            title: 'اختيار نموذج يناسب جهازك',
            whyItMatters: 'افتح متصفح النماذج داخل التطبيق واختر نموذجًا يناسب حجمه أجهزتك. يشير إرشاد المطوّر نفسه إلى أن معظم أجهزة iPhone تشغّل Llama 3.2 3B أو Qwen3 4B دون مشاكل، وأن iPhone 15 Pro والإصدارات الأحدث يمكنها التعامل مع Llama 3.1 8B، وأن جهاز Mac بذاكرة موحدة سعتها 48 جيجابايت يمكنه تشغيل Llama 3.3 70B.',
          },
          {
            title: 'تنزيل النموذج',
            whyItMatters: 'تتراوح أحجام ملفات النماذج من حوالي 2 جيجابايت إلى عشرات الجيجابايتات حسب عدد المعلمات ومستوى التكميم. تتطلب هذه الخطوة اتصالًا بالإنترنت؛ ولا تتطلب أي خطوة تالية ذلك.',
          },
          {
            title: 'المحادثة دون اتصال بالكامل',
            whyItMatters: 'بمجرد تنزيل النموذج، يمكنك تفعيل وضع الطيران للتحقق بنفسك من ادعاء العمل دون اتصال — تعمل المحادثة والتلخيص وإعادة الصياغة (على Mac) جميعها دون اتصال بالشبكة.',
          },
          {
            title: 'اختياري: ربط Siri والاختصارات',
            whyItMatters: 'يوفّر Private LLM اثنين من App Intents لـ Siri وتطبيق الاختصارات، ما يتيح تشغيل رد من النموذج عبر أمر صوتي أو أتمتة دون فتح التطبيق مباشرة.',
          },
        ],
        note: 'أحجام التنزيل الدقيقة، وقائمة النماذج المدعومة، والحد الأدنى لمتطلبات الجهاز قد تتغير بين تحديثات App Store — تحقق من التفاصيل الحالية في متصفح النماذج داخل التطبيق أو على [privatellm.app](https://privatellm.app/en) قبل الالتزام بتنزيل كبير الحجم عبر باقة بيانات محدودة.',
      },
      pricing: {
        id: 'pricing',
        title: 'السعر: شرح الشراء لمرة واحدة',
        itemHeadings: true,
        content: [
          '**يبلغ سعر Private LLM 4.99 دولار كشراء لمرة واحدة في App Store من Apple — لا يوجد اشتراك ولا مشتريات داخل التطبيق في الصفحة الحالية.** تم التحقق من هذا السعر مباشرة من [صفحة App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) لغرض هذه المراجعة. قد تختلف أسعار App Store حسب المنطقة؛ تحقق من السعر الحالي قبل الشراء.',
        ],
        columns: ['ما تدفعه', 'ما يشمله', 'ما لا يشمله'],
        rows: [
          {
            'ما تدفعه': '4.99 دولار (لمرة واحدة)',
            'ما يشمله': 'التطبيق الكامل على iPhone وiPad وMac؛ الوصول إلى مكتبة النماذج الكاملة التي تضم أكثر من 140 نموذجًا؛ المشاركة العائلية لحتى ستة أشخاص',
            'ما لا يشمله': 'أي نسخة لأنظمة Android أو Windows أو Linux — شراء التطبيق من App Store لا يفتح ترخيصًا متعدد المنصات',
          },
        ],
        note: 'قد تتغير أسعار App Store دون إشعار مسبق وقد تختلف حسب المنطقة. تحقق من السعر الحالي في [صفحة App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) قبل الشراء. تم التحقق لهذه المراجعة بتاريخ 2026-09-05.',
      },
      modelsAndQuantization: {
        id: 'models-and-quantization',
        title: 'النماذج المدعومة وتكميم OmniQuant',
        content: [
          '**تضم مكتبة Private LLM أكثر من 140 نموذجًا مفتوح المصدر، تشمل نماذج للأغراض العامة والبرمجة وضبطًا دقيقًا خاصًا بلغات معينة.** تشمل عائلات النماذج المذكورة في وثائق المطوّر نفسه Llama 3 و3.1 و3.2 و3.3؛ ونماذج مبنية على Qwen 2.5 وQwen3؛ وGemma 2 وGemma 3؛ وPhi-4؛ وMixtral؛ ونماذج مبنية على DeepSeek R1 Distill، إلى جانب خيارات خاصة بمناطق معينة مثل SauerkrautLM (الألمانية) وDictaLM (العبرية) وRakutenAI (اليابانية) وYi (الصينية).',
          'يقوم التطبيق بتكميم هذه النماذج باستخدام **OmniQuant**، مقترنًا بـ **GPTQ** في بعض النماذج — وكلاهما أسلوبا تكميم قائمان على التحسين بدلًا من نهج round-to-nearest (RTN) الأبسط الذي تستخدمه بعض تطبيقات الذكاء الاصطناعي المحلي المنافسة. وفقًا لصفحات المقارنة الخاصة بالمطوّر نفسه، يضبط التكميم القائم على التحسين نطاق التكميم استنادًا إلى بيانات المعايرة، ما قد يحافظ على جودة إخراج أكبر من النموذج الأصلي عند عرض بت معين مقارنة بـ RTN. هذا ادعاء تقني خاص بالمطوّر نفسه، مدعوم بوثائقه الخاصة — ولم تُقيَّم بشكل مستقل من قِبل PromptQuorum على ملفات نماذج Private LLM المكممة تحديدًا.',
          'إرشادات المطوّر بشأن الأجهزة: معظم أجهزة iPhone تشغّل **Llama 3.2 3B** أو **Qwen3 4B** دون مشاكل؛ ويمكن لـ **iPhone 15 Pro** والإصدارات الأحدث التعامل مع **Llama 3.1 8B**؛ ويمكن لجهاز Mac بذاكرة موحدة سعتها **48 جيجابايت** تشغيل **Llama 3.3 70B**. هذه توصيات خاصة بالمطوّر نفسه، وليست أرقامًا مُقيَّمة بشكل مستقل — يعتمد الأداء الفعلي على مستوى التكميم وطول السياق وحمل التطبيقات في الخلفية.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'المنصات: iPhone وiPad وMac وVision Pro',
        itemHeadings: true,
        columns: ['المنصة', 'ما يمكن توقعه', 'ملاحظة مهمة'],
        rows: [
          {
            'المنصة': 'iPhone',
            'ما يمكن توقعه': 'يتطلب iOS 17.0 أو أحدث ومعالج A12 Bionic أو أحدث (iPhone XS وما بعده، وفقًا لصفحة App Store). يجب أن يتناسب حجم النموذج المختار مع ذاكرة الوصول العشوائي (RAM) المتاحة.',
            'ملاحظة مهمة': 'تتعامل معظم أجهزة iPhone بشكل جيد مع نماذج بمعلمات تتراوح بين 3 و4 مليارات؛ ويوصى فقط بـ iPhone 15 Pro والإصدارات الأحدث لنماذج 8B، وفقًا للمطوّر.',
          },
          {
            'المنصة': 'iPad',
            'ما يمكن توقعه': 'يشغّل نفس التطبيق ونفس مكتبة النماذج المتوفرة على iPhone. توصي أسئلة المطوّر الشائعة بحد أدنى 4 جيجابايت من ذاكرة الوصول العشوائي، مع التوصية بـ iPad Pro (16 جيجابايت) للنماذج الأكبر.',
            'ملاحظة مهمة': 'أجهزة iPad الأقدم ذات الذاكرة الأقل تقتصر على النماذج المكممة الأصغر.',
          },
          {
            'المنصة': 'Mac',
            'ما يمكن توقعه': 'تطبيق أصلي لأجهزة Mac بمعالج Apple Silicon (سلسلة M). يتضمن أيضًا خدمات كتابة خاصة بـ macOS (تصحيح القواعد النحوية، التلخيص، إعادة الصياغة) يمكن لتطبيقات أخرى استدعاءها.',
            'ملاحظة مهمة': 'تشير أسئلة المطوّر الشائعة إلى أن أجهزة Mac بمعالج Intel مدعومة تقنيًا لكن غير موصى بها — الاستدلال أبطأ بشكل ملحوظ دون الذاكرة الموحدة و Neural Engine الخاصين بمعالج Apple Silicon.',
          },
          {
            'المنصة': 'Apple Vision Pro',
            'ما يمكن توقعه': 'تُظهر صفحة App Store توافقًا مع Vision Pro لنفس التطبيق.',
            'ملاحظة مهمة': 'لم تختبر هذه المراجعة تجربة Vision Pro بشكل مستقل؛ تعامل معها على أنها توافق مُدرج في App Store، وليست ميزة تم التحقق منها عمليًا.',
          },
          {
            'المنصة': 'Android وWindows وLinux',
            'ما يمكن توقعه': 'لا توجد صفحة رسمية على Google Play أو Microsoft Store أو أي مستودع حزم لينكس.',
            'ملاحظة مهمة': 'انتشرت في بعض فترات تاريخ التطبيق نسخة تجريبية غير رسمية من ملف APK خارج متجر Google Play؛ وهي ليست جزءًا من الموقع التسويقي الرئيسي للمطوّر أو قناة الإصدار المدعومة، لذا لا تعتبر هذه المراجعة Android منصة مدعومة.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية: ما الذي يجمعه Private LLM وما لا يجمعه',
        content: [
          '**تشير بطاقة خصوصية App Store الخاصة بـ Private LLM إلى أن المطوّر لا يجمع أي بيانات من التطبيق**، ولا يتطلب التطبيق حسابًا أو تسجيل دخول أو تسجيلًا لاستخدامه. تصف مادة التسويق الخاصة بالمطوّر نفسه المنتج بعبارات "بدون سحابة، بدون تتبع، بدون تسجيل دخول"، وتؤكد أن المحادثات "لا تغادر الجهاز أبدًا".',
          'نظرًا لأن الاستدلال يعمل محليًا بعد تنزيل نموذج، لا توجد بيانات محادثة يتم إرسالها إلى خادم أثناء الاستخدام العادي — البنية نفسها، وليس مجرد وعد في سياسة، هي ما يبقي المحادثات على الجهاز.',
        ],
        items: [
          '**لا حاجة لحساب.** يمكنك تنزيل التطبيق وشراءه واستخدامه دون إنشاء ملف تعريف أو تسجيل الدخول.',
          '**لا جمع للبيانات، وفقًا لبطاقة App Store.** لا تُظهر بطاقة خصوصية Apple لهذه الصفحة أي بيانات يتم جمعها من التطبيق.',
          '**مزامنة سجل المحادثة عبر iCloud غير موثقة.** لا تصف الأسئلة الشائعة العامة للمطوّر أي مزامنة عبر iCloud للمحادثات بين الأجهزة — تعامل هذه المراجعة ذلك على أنه غير مؤكد بدلًا من افتراض وجوده. إذا كانت مزامنة المحادثة بين الأجهزة مهمة بالنسبة لك، تحقق من السلوك الحالي مباشرة داخل التطبيق قبل الاعتماد عليه.',
          '**التشغيل داخل بيئة معزولة (sandbox).** يعمل التطبيق داخل بيئة Apple المعزولة القياسية، وهي نفس العزل الذي تخضع له أي تطبيق في App Store — هذا ضمان من منصة Apple، وليس ميزة خاصة بـ Private LLM.',
        ],
      },
      history: {
        id: 'history',
        title: 'تاريخ الشركة ومحطات الإصدارات',
        content: [
          '**أُطلق Private LLM في App Store في يونيو 2023**، حيث صدر الإصدار 1.0.1 لنظام iOS والإصدار 1.0.2 لنظام macOS كلاهما في 2 يونيو 2023. يتولى تطويره [Numen Technologies Limited](https://privatellm.app/en)، الذي يصف نفسه بأنه فريق صغير يمول نفسه ذاتيًا، دون تمويل من رأس مال مغامر.',
        ],
        items: [
          '**يونيو 2023.** الإصدار الأولي في App Store (iOS 1.0.1، macOS 1.0.2) مع نموذج أساسي مضبوط دقيقًا.',
          '**يوليو 2023.** إضافة دعم Siri والاختصارات (App Intents).',
          '**سبتمبر 2023.** إضافة التوافق مع سلسلة iPhone 15.',
          '**ديسمبر 2023.** توسيع الدعم ليشمل أجهزة iPhone وiPad الأقدم بذاكرة وصول عشوائي 3 جيجابايت فقط.',
          '**يناير 2024.** تقديم تنزيل عدة نماذج، ما وسّع المكتبة لتشمل نماذج عائلات TinyLlama وStableLM وPhi-2 وMistral وLlama وGemma.',
          '**فبراير 2024.** إضافة خدمات كتابة خاصة بـ macOS: تصحيح القواعد النحوية والتلخيص وإعادة الصياغة، يمكن استدعاؤها من تطبيقات Mac أخرى.',
          '**مارس 2024.** إمكانية تبديل النموذج دون مغادرة واجهة المحادثة النشطة.',
          '**يوليو 2026.** نقل الإصدار 1.9.15 عمليات تنزيل النماذج إلى شبكة توصيل محتوى (CDN) بدلًا من Hugging Face، وهو ما تصفه ملاحظات الإصدار بأنه أسرع؛ وهذا هو الإصدار الحالي وقت هذه المراجعة.',
        ],
        note: 'تاريخ الإصدارات مستند إلى صفحة [ملاحظات الإصدار](https://privatellm.app/en/release-notes) الخاصة بالمطوّر نفسه. التواريخ وأرقام الإصدارات هي المنشورة هناك؛ تحقق من الإصدار الحالي مباشرة في App Store قبل الاعتماد على وجود ميزة معينة.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: ['الميزة', 'ماذا تعني في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'شراء لمرة واحدة بـ 4.99 دولار',
            'ماذا تعني في الاستخدام الفعلي': 'لا يوجد اشتراك يجب متابعته أو إلغاؤه؛ ادفع مرة واحدة واستخدمه إلى أجل غير مسمى على أجهزة Apple الخاصة بك.',
            'القيد / الملاحظة': 'ليس مجانيًا — يجب على من يريد خيارًا بدون تكلفة المقارنة مع PocketPal AI أو Enclave AI.',
          },
          {
            'الميزة': 'مكتبة تضم أكثر من 140 نموذجًا',
            'ماذا تعني في الاستخدام الفعلي': 'خيار واسع من النماذج للأغراض العامة والبرمجة والخاصة بلغات معينة دون الحاجة للبحث بنفسك عن ملفات GGUF.',
            'القيد / الملاحظة': 'المكتبة منتقاة من قِبل المطوّر؛ لا يمكنك استيراد ضبط دقيق مخصص عشوائي كما تسمح بعض التطبيقات مفتوحة المصدر.',
          },
          {
            'الميزة': 'تكميم OmniQuant وGPTQ',
            'ماذا تعني في الاستخدام الفعلي': 'يذكر المطوّر أن هذا يحافظ على جودة أكبر للنموذج لكل بت مقارنة بتكميم round-to-nearest الأبسط.',
            'القيد / الملاحظة': 'هذا ادعاء تقني خاص بالمطوّر نفسه؛ لم تقارن PromptQuorum بشكل مستقل ملفات نماذج Private LLM المحددة بمكافئات مكممة بـ RTN.',
          },
          {
            'الميزة': 'بدون حساب، بدون جمع بيانات',
            'ماذا تعني في الاستخدام الفعلي': 'استخدم التطبيق فورًا بعد الشراء دون الحاجة للتسجيل في أي شيء؛ تُظهر بطاقة خصوصية App Store عدم جمع أي بيانات.',
            'القيد / الملاحظة': 'بما أن التطبيق مغلق المصدر، لا يمكن التحقق من ادعاء "عدم الجمع" بشكل مستقل عبر تدقيق الكود كما هو الحال مع تطبيق مفتوح المصدر.',
          },
          {
            'الميزة': 'تكامل مع Siri والاختصارات',
            'ماذا تعني في الاستخدام الفعلي': 'شغّل ردود النموذج عبر أوامر صوتية أو أتمتة دون فتح التطبيق.',
            'القيد / الملاحظة': 'يقيّد iOS الوصول إلى وحدة معالجة الرسوميات (GPU) في الخلفية، لذا قد يكون التوليد المُشغَّل عبر الاختصارات أبطأ أو أكثر محدودية من المحادثة في المقدمة.',
          },
          {
            'الميزة': 'المشاركة العائلية لحتى ستة أشخاص',
            'ماذا تعني في الاستخدام الفعلي': 'يمكن لعملية شراء واحدة بسعر 4.99 دولار تغطية مجموعة كاملة من المشاركة العائلية لدى Apple.',
            'القيد / الملاحظة': 'لا يزال كل فرد من العائلة بحاجة إلى جهازه المدعوم الخاص وتخزين/ذاكرة كافيين للنماذج التي يختارها.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Private LLM مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر', 'مرونة النماذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Private LLM',
            'المنصات': 'iPhone/iPad/Mac (حصري لـ Apple)',
            'السعر': 'شراء لمرة واحدة بـ 4.99 دولار',
            'مرونة النماذج': 'أكثر من 140 نموذجًا منتقى؛ تكميم OmniQuant/GPTQ',
            'الفرق الرئيسي': 'مدفوع، مغلق المصدر، مكتبة منتقاة — بدون استيراد عشوائي لملفات GGUF',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iPhone/iPad، مع بعض دعم Android',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النماذج': 'أي ملف GGUF يحصل عليه المستخدم من Hugging Face أو مكان آخر',
            'الفرق الرئيسي': 'مجاني ومفتوح المصدر؛ يتطلب إدارة يدوية أكبر للنماذج',
          },
          {
            'التطبيق': '[Enclave AI](/ar/power-local-llm/enclave-ai-review)',
            'المنصات': 'يختلف حسب الإصدار — تحقق من الصفحة الحالية',
            'السعر': 'انظر الصفحة الحالية',
            'مرونة النماذج': 'انظر المراجعة الكاملة لدعم النماذج الحالي',
            'الفرق الرئيسي': 'انظر المراجعة الكاملة لـ Enclave AI للحصول على مقارنة تفصيلية',
          },
          {
            'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'المنصات': 'iPhone/iPad/Mac',
            'السعر': 'مجاني',
            'مرونة النماذج': 'مبني على Apple MLX؛ وصول إلى نموذج التأسيس على الجهاز الخاص بـ Apple',
            'الفرق الرئيسي': 'بديل مجاني مبني تحديدًا على إطار عمل MLX من Apple',
          },
          {
            'التطبيق': '[Arbiter](/ar/power-local-llm/arbiter-local-ai-chat-review)',
            'المنصات': 'انظر المراجعة الكاملة لدعم المنصات الحالي',
            'السعر': 'انظر الصفحة الحالية',
            'مرونة النماذج': 'انظر المراجعة الكاملة لدعم النماذج الحالي',
            'الفرق الرئيسي': 'انظر المراجعة الكاملة لـ Arbiter للحصول على مقارنة تفصيلية',
          },
          {
            'التطبيق': '[LLM Farm](https://llmfarm.space/)',
            'المنصات': 'iOS/Mac (مفتوح المصدر، GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النماذج': 'تحميل نماذج GGUF مخصصة عبر llama.cpp/ggml',
            'الفرق الرئيسي': 'تمت إزالته من App Store وTestFlight في أغسطس 2025 وفقًا لملف README الخاص به على GitHub — تحقق من التوفر الحالي قبل الاعتماد عليه',
          },
          {
            'التطبيق': '[Layla](https://www.layla-network.ai/)',
            'المنصات': 'iOS وAndroid',
            'السعر': '19.99 دولار بالإضافة إلى مشتريات داخل التطبيق',
            'مرونة النماذج': 'نماذج GGUF مخصصة؛ تركيز على الشخصيات/لعب الأدوار مع أكثر من 100 صوت',
            'الفرق الرئيسي': 'متعدد المنصات (بخلاف Private LLM)، لكنه أعلى سعرًا، مع توجه نحو لعب الأدوار/الشخصيات',
          },
          {
            'التطبيق': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'المنصات': 'تطبيق Flutter متعدد المنصات (Android أساسًا؛ يعمل أيضًا على منصات أخرى يدعمها Flutter)',
            'السعر': 'مجاني، مفتوح المصدر (ترخيص MIT)',
            'مرونة النماذج': 'أي ملف GGUF عبر llama.cpp؛ كما يتصل عن بُعد بـ Anthropic وDeepSeek وOllama وMistral وOpenAI',
            'الفرق الرئيسي': 'مجاني، مفتوح المصدر بالكامل، وغير مقتصر على الاستدلال المحلي فقط',
          },
          {
            'التطبيق': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'المنصات': 'Android',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النماذج': 'عدة واجهات برمجة تطبيقات لمزودي السحابة بالإضافة إلى التشغيل المحلي',
            'الفرق الرئيسي': 'حصري لنظام Android؛ يقدّم نفسه كعميل متعدد المزودين، وليس تطبيقًا محليًا أولًا',
          },
          {
            'التطبيق': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'المنصات': 'Android (وiOS مخطط له)',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النماذج': 'يشغّل نماذج GGUF على الجهاز عبر Cactus Compute (llama.cpp لـ React Native)، أو يقترن بخادم AnythingLLM ذاتي الاستضافة',
            'الفرق الرئيسي': 'مصمم للاقتران بمساحة عمل AnythingLLM ذاتية الاستضافة، وليس تطبيق محادثة مستقلًا',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات للتطبيقات الخارجية بشكل متكرر — تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ قرارك. يجب إعادة التحقق تحديدًا من توفر LLM Farm في App Store، إذ وصفه ملف README الخاص به على GitHub بأنه أُزيل من App Store اعتبارًا من أغسطس 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Private LLM',
        items: [
          '**مستخدمو أجهزة Apple حصريًا الذين يريدون تطبيقًا مصقولًا ومنتقى ولا يمانعون الدفع مرة واحدة.** مالكو أجهزة iPhone وiPad وMac الذين يفضّلون تطبيقًا تتم صيانته وتحديثه بنشاط على تجميع مجموعتهم الخاصة من ملفات GGUF يحصلون على مكتبة نماذج كبيرة جاهزة للاستخدام مقابل 4.99 دولار.',
          '**القراء الذين يقدّرون جودة التكميم أكثر من العدد الخام للنماذج.** إذا كانت ميزة الجودة لكل بت التي يدّعيها OmniQuant وGPTQ مقارنة بتكميم round-to-nearest مهمة لحالة استخدامك، فإن Private LLM أحد التطبيقات الاستهلاكية القليلة المبنية تحديدًا حول هذا الأسلوب.',
          '**العائلات التي تشترك في نفس مجموعة معرّف Apple.** تعني المشاركة العائلية أن عملية شراء واحدة بسعر 4.99 دولار يمكن أن تغطي حتى ستة أشخاص — أرخص للفرد الواحد من إعداد عدة تطبيقات مجانية بشكل منفصل لأفراد العائلة الأقل خبرة تقنيًا.',
          '**المستخدمون الذين يريدون أتمتة عبر Siri/الاختصارات.** يتيح App Intents الاثنان دمج ردود الذكاء الاصطناعي المحلي في أتمتة iOS الحالية دون فتح التطبيق.',
          '**المستخدمون المهتمون بالخصوصية والمرتاحون لتطبيق مغلق المصدر.** إذا كانت عبارة "لا يتم جمع بيانات" وفقًا لبطاقة خصوصية App Store وعبارة "لا حاجة لحساب" تلبي معاييرك دون الحاجة لتدقيق الكود المصدري بنفسك، فإن بنية Private LLM على الجهاز توفر ذلك تحديدًا.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Private LLM',
        items: [
          '**مستخدمو Android أو Windows أو Linux.** لا يمتلك Private LLM تطبيقًا رسميًا على أي من هذه المنصات — اختر بدلًا من ذلك [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) (دعم جزئي لـ Android)، أو [Maid](https://github.com/Mobile-Artificial-Intelligence/maid)، أو [ChatterUI](https://github.com/Vali-98/ChatterUI)، أو [RikkaHub](https://github.com/rikkahub/rikkahub).',
          '**القراء الذين يريدون خيارًا مجانيًا بالكامل.** 4.99 دولار سعر منخفض، لكنه ليس مجانيًا — [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) و[Locally AI](/ar/power-local-llm/locally-ai-review) كلاهما بلا تكلفة.',
          '**القراء الذين يريدون تشغيل أكبر النماذج مفتوحة الأوزان.** تحدّ أجهزة الهاتف المحمول مما يمكن أن يتسع له في الذاكرة — حتى إرشاد المطوّر نفسه يحصر معظم أجهزة iPhone بنماذج بمعلمات تتراوح بين 3 و8 مليارات؛ ولا يصل إلى فئة 70B سوى جهاز Mac بذاكرة موحدة 48 جيجابايت أو أكثر، وحتى هذا السقف يظل أقل بكثير من أكبر النماذج مفتوحة الأوزان المتاحة لأجهزة بمستوى الخوادم.',
          '**الفرق أو المؤسسات التي تريد نشرًا مشتركًا يُدار مركزيًا.** Private LLM تطبيق استهلاكي لمستخدم واحد وجهاز واحد، دون لوحة تحكم إدارية أو إدارة تراخيص مشتركة أو فوترة للفرق — يجب على المؤسسات النظر بدلًا من ذلك في بنية تحتية للنماذج المحلية ذاتية الاستضافة على جانب الخادم.',
          '**القراء الذين يريدون تدقيق الكود المصدري للتطبيق بأنفسهم.** Private LLM مغلق المصدر. إذا كانت مراجعة الكود المستقلة مهمة بالنسبة لك، فإن بديلًا مفتوح المصدر مثل [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) يتيح لك التحقق من السلوك مباشرة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم يبلغ سعر Private LLM؟',
            a: 'يبلغ سعر Private LLM [4.99 دولار كشراء لمرة واحدة](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) في App Store من Apple، تم التحقق منه لهذه المراجعة بتاريخ 2026-09-05. لا يوجد اشتراك ولا مشتريات داخل التطبيق في صفحة App Store الحالية. قد تختلف أسعار App Store حسب المنطقة وقد تتغير بمرور الوقت — تأكد من السعر الحالي قبل الشراء.',
          },
          {
            q: 'هل Private LLM متوفر على Android أو Windows؟',
            a: 'لا توجد نسخة رسمية على Google Play أو Microsoft Store أو أي مستودع حزم لينكس. صُمم Private LLM تحديدًا لأجهزة iPhone وiPad وMac. انتشرت في بعض الفترات نسخة تجريبية غير رسمية من ملف APK خارج متجر Play، لكنها ليست جزءًا من قناة الإصدار الرئيسية المدعومة من المطوّر، لذا تعتبر هذه المراجعة Android غير مدعوم.',
          },
          {
            q: 'من يطوّر Private LLM؟',
            a: 'يقوم بتطوير Private LLM شركة [Numen Technologies Limited](https://privatellm.app/en)، التي تصف نفسها على موقعها بأنها فريق صغير يمول نفسه ذاتيًا مكوّن من مهندسَين، دون تمويل من رأس مال مغامر.',
          },
          {
            q: 'ما هو OmniQuant، ولماذا يستخدمه Private LLM؟',
            a: 'OmniQuant هو أسلوب تكميم قائم على التحسين يضبط نطاق التكميم استنادًا إلى بيانات المعايرة، بدلًا من نهج round-to-nearest (RTN) الأبسط. يجمع Private LLM بين OmniQuant وGPTQ في بعض النماذج. يذكر المطوّر أن هذا يحافظ على جودة الإخراج الأصلية للنموذج بشكل أكبر عند عرض بت معين مقارنة بتكميم RTN؛ وهذا ادعاء تقني خاص بالمطوّر نفسه، وليس اختبار أداء مستقل أجرته PromptQuorum على ملفات نماذج Private LLM المحددة.',
          },
          {
            q: 'هل يعمل Private LLM دون اتصال بالكامل؟',
            a: 'نعم، بمجرد تنزيل نموذج. يحتاج التطبيق إلى اتصال بالإنترنت فقط لتنزيل نموذج أو تحديث للتطبيق؛ أما المحادثة والخدمات الخاصة بـ macOS مثل تصحيح القواعد النحوية والتلخيص فتعمل بعد ذلك دون اتصال بالشبكة.',
          },
          {
            q: 'هل يجمع Private LLM أي بيانات شخصية؟',
            a: 'تشير بطاقة خصوصية Apple لهذه الصفحة في App Store إلى أن المطوّر لا يجمع أي بيانات من التطبيق. لا حاجة لحساب أو تسجيل دخول لاستخدامه. تعتمد هذه المراجعة على بطاقة خصوصية App Store وليس على تدقيق مستقل للكود المغلق المصدر الخاص بالتطبيق.',
          },
          {
            q: 'هل يزامن Private LLM سجل المحادثة بين الأجهزة عبر iCloud؟',
            a: 'هذا غير موثق في الأسئلة الشائعة العامة الخاصة بالمطوّر. تعامل هذه المراجعة مزامنة المحادثات عبر iCloud على أنها غير مؤكدة بدلًا من افتراض وجودها — تحقق من السلوك الحالي مباشرة داخل التطبيق قبل الاعتماد على استمرارية المحادثة بين الأجهزة.',
          },
          {
            q: 'ما النماذج التي يمكنني تشغيلها على iPhone باستخدام Private LLM؟',
            a: 'وفقًا لإرشاد المطوّر نفسه، تشغّل معظم أجهزة iPhone بشكل جيد نماذج بمعلمات تتراوح بين 3 و4 مليارات (مثل Llama 3.2 3B أو Qwen3 4B)، بينما يمكن لـ iPhone 15 Pro والإصدارات الأحدث التعامل مع نماذج بمعلمات 8 مليارات مثل Llama 3.1 8B. هذه توصيات المطوّر، وليست نتائج مُقيَّمة بشكل مستقل — يعتمد الأداء الفعلي على مستوى التكميم وذاكرة الوصول العشوائي المتاحة.',
          },
          {
            q: 'كيف يُقارن Private LLM بـ PocketPal AI؟',
            a: 'Private LLM تطبيق مدفوع (4.99 دولار)، مغلق المصدر، حصري لأجهزة Apple، مع مكتبة منتقاة تضم أكثر من 140 نموذجًا وتكميم OmniQuant/GPTQ. [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) مجاني ومفتوح المصدر، يعمل على iPhone/iPad مع بعض دعم Android، ويتيح استيراد أي ملف GGUF بدلًا من الاختيار من قائمة منتقاة. اختر Private LLM لتجربة تتم صيانتها بشراء لمرة واحدة مع مكتبة نماذج مدمجة واسعة؛ واختر PocketPal AI لإعداد مجاني وقابل للتدقيق وأكثر يدوية.',
          },
          {
            q: 'هل تغطي عملية شراء واحدة لـ Private LLM عدة أجهزة أو أفراد عائلة؟',
            a: 'نعم. تغطي عملية الشراء بسعر 4.99 دولار أجهزة iPhone وiPad وMac لمعرّف Apple الذي أجرى الشراء، وتمدد ميزة المشاركة العائلية من Apple عملية الشراء هذه لتشمل حتى ستة أشخاص ضمن نفس مجموعة المشاركة العائلية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يستحق Private LLM مكانته بين تطبيقات الذكاء الاصطناعي المحلي للهواتف المحمولة الأفضل توثيقًا التي يغطيها هذا الموقع: سعر واحد واضح بقيمة 4.99 دولار تم التحقق منه مباشرة في App Store، ومكتبة منتقاة تضم أكثر من 140 نموذجًا مفتوح المصدر، وأسلوب تكميم محدد ومسمّى (OmniQuant مع GPTQ) بدلًا من ادعاء غامض بـ"محسَّن للأجهزة المحمولة". تُظهر ملاحظات إصدار المطوّر نفسه ثلاث سنوات من التحديثات المستمرة منذ الإطلاق في يونيو 2023، وهو سجل أطول بشكل ملحوظ من عدة تطبيقات أصغر في هذه المجموعة. المقايضات واضحة بنفس القدر: التطبيق حصري لأجهزة Apple، وليس مجانيًا، وقائمة نماذجه منتقاة بدلًا من أن تكون مفتوحة بالكامل لاستيراد ملفات GGUF مخصصة، وكونه مغلق المصدر يعني أن ادعاء "عدم جمع بيانات" يعتمد على بطاقة خصوصية App Store وليس على مراجعة كود مستقلة. القراء الذين يريدون تطبيقًا تتم صيانته ومنتقى بشراء لمرة واحدة عبر أجهزة Apple الخاصة بهم يجب أن يشتروه؛ أما القراء على Android/Windows/Linux، أو من يريد خيارًا مجانيًا، أو من يريد تدقيق الكود المصدري بنفسه، فيجب أن يبدأوا بدلًا من ذلك مع [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Private LLM على App Store](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — السعر، توافق المنصات، بطاقة الخصوصية، التقييمات، وتاريخ الإصدارات.',
          '[الموقع الرسمي لـ Private LLM](https://privatellm.app/en) — نظرة عامة على المنتج، نموذج التسعير، وادعاءات الخصوصية.',
          '[الأسئلة الشائعة لـ Private LLM](https://privatellm.app/en/faq) — النماذج المدعومة، أسلوب التكميم، متطلبات الأجهزة، المشاركة العائلية، وتكامل Siri/الاختصارات.',
          '[ملاحظات إصدار Private LLM](https://privatellm.app/en/release-notes) — تاريخ الإصدارات ومحطات الميزات من يونيو 2023 إلى يوليو 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — البديل المجاني ومفتوح المصدر مع استيراد يدوي لملفات GGUF.',
          '[أفضل تطبيقات الذكاء الاصطناعي المحلي لأجهزة iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — استعراض شامل لتطبيقات iPhone، يشمل Private LLM وPocketPal AI وLocally AI.',
          '[مراجعة Enclave AI](/ar/power-local-llm/enclave-ai-review) — تطبيق آخر للذكاء الاصطناعي على الجهاز للمقارنة.',
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — بديل مجاني مبني على Apple MLX.',
          '[مراجعة Chatty-mini](/ar/power-local-llm/chatty-mini-review) — بديل أصغر وأقل توثيقًا وحصري لنظام Android، للمقارنة.',
          '[مراجعة Arbiter Local AI Chat](/ar/power-local-llm/arbiter-local-ai-chat-review) — تطبيق محادثة محلي آخر يغطيه هذا الموقع.',
          '[الدليل الشامل لبرمجيات النماذج اللغوية المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات النماذج اللغوية المحلية عبر جميع المنصات.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-llm-review-hero-zh.webp',
    title: 'Private LLM评测（2026）：iPhone、iPad和Mac的本地设备端AI聊天应用',
    seoTitle: 'Private LLM 2026评测：iPhone/Mac端侧AI',
    intro:
      'Private LLM由[Numen Technologies Limited](https://privatellm.app/en)开发，是一款面向iPhone、iPad和Mac的一次性付费应用，可完全在设备端运行开源语言模型——无需账号、无需依赖云端、无需订阅。它在[Apple App Store上的售价为4.99美元](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)，一次购买即可覆盖三个Apple平台，通过家人共享最多可供六人使用。App Store价格可能因地区而异，购买前请在当地App Store确认当前价格。该应用支持140多个开源模型，涵盖Llama、Qwen、Gemma、Mistral、Phi-4等系列，并采用名为OmniQuant的量化方法（部分模型搭配GPTQ），开发者称这比一些竞品应用使用的更简单的round-to-nearest量化能保留更多模型质量。对于比较本地AI应用的读者来说，实际的问题不是iPhone上能否运行设备端聊天——本站已收录的多款应用早已证明这一点——而是花4.99美元一次性购买、获得140多个精选模型是否比[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)或[Enclave AI](/zh/power-local-llm/enclave-ai-review)等免费替代品更划算。',
    metaDescription:
      'Private LLM 2026评测：4.99美元一次性购买，仅支持iPhone/iPad/Mac，140多个模型，OmniQuant量化，无订阅。价格、隐私及与PocketPal AI的对比。',
    twitterDescription:
      'Private LLM 2026评测：一款4.99美元一次性购买的应用，在iPhone、iPad和Mac上实现设备端AI聊天。OmniQuant量化、140多个模型，以及与PocketPal AI、Enclave AI的对比。',
    audience:
      '正在权衡一次性付费本地AI应用是否值得的iPhone、iPad和Mac用户，对比PocketPal AI、Enclave AI或Locally AI等免费替代品——涵盖价格、支持的模型、量化方式和隐私。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Private LLM review',
    targetKeywords: [
      'private llm review',
      'private llm app iphone',
      'private llm ios price',
      'private llm omniquant',
      'private llm vs pocketpal ai',
      'on-device ai chat iphone mac',
      'numen technologies private llm',
      'best local llm app for iphone',
    ],
    current_models_mentioned: ['Llama 3.3 70B', 'Llama 3.1 8B', 'Llama 3.2 3B', 'Qwen 2.5', 'Qwen3 4B', 'Gemma 2', 'Gemma 3', 'Phi-4', 'Mixtral', 'DeepSeek R1 Distill'],
    current_hardware_mentioned: ['iPhone 15 Pro', 'iPhone 12', '配备48GB统一内存的Apple Silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Private LLM是一款面向iPhone、iPad和Mac的4.99美元一次性付费应用，可完全在设备端运行140多个开源AI模型——无需账号，无需订阅。** 由[Numen Technologies Limited](https://privatellm.app/en)开发，采用OmniQuant和GPTQ量化技术，开发者称这比一些竞品应用使用的round-to-nearest量化在每比特上能保留更高的输出质量。一次购买即可解锁三个Apple平台上的完整模型库，通过家人共享最多可供六人使用。希望获得免费替代品或使用Android/Windows/Linux的读者，应与免费开源的[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)进行比较。',
    quickAnswerTop: {
      en: {
        question: 'Is Private LLM worth the $4.99 price on the App Store?',
        answer:
          'Yes, if you want a polished, actively maintained, Apple-only local-AI app with a large curated model library (140+ models) and no subscription — the $4.99 is a one-time purchase covering iPhone, iPad, and Mac, with Family Sharing for up to six people. Skip it if you are on Android, Windows, or Linux, or if you specifically want a free and fully open-source app — PocketPal AI covers that case at no cost.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store; no subscription, no in-app purchases listed.',
          'iPhone, iPad, and Mac only — no Android, Windows, or Linux version on the App Store.',
          'Supports more than 140 open-source models: Llama, Qwen, Gemma, Mistral, Phi-4, and more.',
          'Uses OmniQuant and GPTQ quantization instead of simpler round-to-nearest quantization.',
          'Developer (Numen Technologies Limited) states the app collects no data and needs no account.',
        ],
        updatedDate: '2026-09-05',
      },
      zh: {
        question: 'Private LLM在App Store上售价4.99美元，值得购买吗？',
        answer:
          '如果你想要一款打磨精良、持续维护、仅限Apple平台的本地AI应用，拥有庞大的精选模型库（140多个模型）且无需订阅，那么值得购买。4.99美元是一次性费用，覆盖iPhone、iPad和Mac，并可通过家人共享最多供六人使用。如果你使用Android、Windows或Linux，或者明确想要一款免费且完全开源的应用，则可以跳过——PocketPal AI可以免费满足这种需求。',
        bullets: [
          '在Apple App Store上一次性购买4.99美元；未列出订阅或应用内购买。',
          '仅支持iPhone、iPad和Mac——App Store上没有Android、Windows或Linux版本。',
          '支持140多个开源模型：Llama、Qwen、Gemma、Mistral、Phi-4等。',
          '采用OmniQuant和GPTQ量化，而非更简单的round-to-nearest量化。',
          '开发者（Numen Technologies Limited）声明该应用不收集任何数据，也无需账号。',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Private LLM是什么', anchor: 'what-is-private-llm' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '价格：一次性购买解析', anchor: 'pricing' },
      { label: '支持的模型与OmniQuant量化', anchor: 'models-and-quantization' },
      { label: '平台支持：iPhone、iPad、Mac和Vision Pro', anchor: 'platforms' },
      { label: '隐私：Private LLM收集什么、不收集什么', anchor: 'privacy' },
      { label: '公司历史与版本里程碑', anchor: 'history' },
      { label: '权衡：优势与限制', anchor: 'tradeoffs' },
      { label: 'Private LLM与其他替代应用对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用Private LLM', anchor: 'who-should-use' },
      { label: '谁不适合使用Private LLM', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Private LLM是Numen Technologies Limited开发的一款面向iPhone、iPad和Mac的4.99美元一次性付费应用，使用OmniQuant和GPTQ量化技术在设备端完全运行140多个开源AI模型——无需账号、无需依赖云端、无需订阅。',
          },
          {
            type: 'plain-terms',
            text: '可以把它理解为像购买普通App Store应用一样一次性购买一款本地AI聊天应用，而不是订阅云端聊天机器人——模型运行在你自己的iPhone或Mac上，因此你输入的任何内容都不会离开设备。',
          },
        ],
        items: [
          '价格：在Apple App Store上[一次性购买4.99美元](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)；截至本评测时未列出订阅或应用内购买。',
          '平台：仅支持iPhone、iPad和Mac——App Store上没有Android、Windows或Linux应用。',
          '开发商：[Numen Technologies Limited](https://privatellm.app/en)，据开发者自己网站介绍，是一支总部位于欧盟的小型自筹资金团队。',
          '模型库：140多个开源模型，包括Llama、Qwen、Gemma、Mistral、Phi-4以及基于DeepSeek R1 Distill的模型。',
          '量化：使用OmniQuant和GPTQ，开发者称这比一些竞品应用使用的round-to-nearest（RTN）量化在每比特上能提供更高的输出质量。',
          '隐私：App Store隐私标签显示开发者不从该应用收集任何数据；聊天无需账号或登录。',
          '附加功能：通过两个App Intent实现Siri和快捷指令集成，一次购买即可通过家人共享供最多六人使用。',
          '版本1.9.15（2026年7月）为当前版本；该应用于2023年6月首次登陆App Store。',
        ],
      },
      whatIsPrivateLLM: {
        id: 'what-is-private-llm',
        title: 'Private LLM是什么',
        content: [
          '**Private LLM是一款原生Apple应用，可下载并直接在iPhone、iPad或Mac上运行开源语言模型，不含任何服务器端组件。** 模型下载完成后，应用无需互联网连接即可生成回复——一切都在设备自身的CPU、GPU和Neural Engine上本地运行。',
          '该应用由[Numen Technologies Limited](https://privatellm.app/en)开发和维护，其官网自我介绍为"由两名工程师打造，而非风险投资公司"——一支小型自筹资金团队，而非有风投背景的公司。该应用于2023年6月首次以[Private LLM - Local AI Chat](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)（App Store ID 6448106860）之名登陆App Store，此后持续更新——当前版本1.9.15于2026年7月发布。',
          '与将聊天请求发送到远程API的应用不同，Private LLM的整个价值主张建立在本地推理之上：开发者自己的宣传文案称"无云端、无追踪、无登录"，并声称对话"从不离开设备"。本评测依据App Store隐私标签和开发者自己的常见问题实际记录的内容来评估这一说法，而非直接采信这句宣传语。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**设置Private LLM只需四个步骤，且无需创建账号。** 从App Store下载到收到第一条回复，整个过程通常只需几分钟，外加所选模型的下载时间。',
        ],
        numberedItems: [
          {
            title: '购买并安装应用',
            whyItMatters: '从[Apple App Store下载Private LLM](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)，售价4.99美元。这是一次性购买——没有免费试用期，也无需管理任何持续订阅。',
          },
          {
            title: '选择适合设备的模型',
            whyItMatters: '打开应用内的模型浏览器，选择与自己硬件相匹配的模型。开发者自己的建议是：大多数iPhone可以流畅运行Llama 3.2 3B或Qwen3 4B，iPhone 15 Pro及更新机型可以运行Llama 3.1 8B，而配备48GB统一内存的Mac可以运行Llama 3.3 70B。',
          },
          {
            title: '下载模型',
            whyItMatters: '模型文件大小根据参数量和量化级别，从约2GB到数十GB不等。此步骤需要互联网连接；之后的所有步骤都不需要。',
          },
          {
            title: '完全离线聊天',
            whyItMatters: '模型下载完成后，你可以开启飞行模式，亲自验证离线运行的说法——聊天、摘要以及（Mac上的）文本改写，全部无需网络连接即可运行。',
          },
          {
            title: '可选：连接Siri和快捷指令',
            whyItMatters: 'Private LLM为Siri和快捷指令应用提供两个App Intent，无需直接打开应用，即可通过语音命令或自动化流程触发模型响应。',
          },
        ],
        note: '具体的下载大小、支持的模型列表和最低设备要求可能随App Store更新而变化——在流量有限的套餐下进行大文件下载前，请在应用内的模型浏览器或[privatellm.app](https://privatellm.app/en)上确认最新详情。',
      },
      pricing: {
        id: 'pricing',
        title: '价格：一次性购买解析',
        itemHeadings: true,
        content: [
          '**Private LLM在Apple App Store上的售价为4.99美元，一次性购买——当前页面未列出订阅或应用内购买。** 该价格已针对本评测直接在[App Store页面](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)上核实。App Store价格可能因地区而异，购买前请确认当前价格。',
        ],
        columns: ['你需要支付的费用', '包含的内容', '不包含的内容'],
        rows: [
          {
            '你需要支付的费用': '4.99美元（一次性）',
            '包含的内容': 'iPhone、iPad和Mac上的完整应用；对140多个模型完整库的访问权限；最多六人的家人共享',
            '不包含的内容': '任何Android、Windows或Linux版本——App Store购买不会解锁跨平台许可证',
          },
        ],
        note: 'App Store价格可能无预警变动，也可能因地区而异。购买前请在[App Store页面](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)确认当前价格。本评测于2026-09-05核实。',
      },
      modelsAndQuantization: {
        id: 'models-and-quantization',
        title: '支持的模型与OmniQuant量化',
        content: [
          '**Private LLM的模型库包含140多个开源模型，涵盖通用、编程和语言特定微调模型。** 开发者自己文档中列出的模型系列包括Llama 3、3.1、3.2和3.3；基于Qwen 2.5和Qwen3的模型；Gemma 2和Gemma 3；Phi-4；Mixtral；以及基于DeepSeek R1 Distill的模型，还包括SauerkrautLM（德语）、DictaLM（希伯来语）、RakutenAI（日语）和Yi（中文）等区域特定选项。',
          '该应用使用**OmniQuant**（部分模型搭配**GPTQ**）对这些模型进行量化——两者都是基于优化的量化方法，而非一些竞品本地AI应用使用的更简单的round-to-nearest（RTN）方式。根据开发者自己的对比页面，基于优化的量化方法会根据校准数据调整量化范围，这在相同比特宽度下比RTN能保留更多原始模型的输出质量。这是开发者自身的技术主张，基于其自身文档——PromptQuorum并未针对Private LLM的具体量化模型文件进行独立基准测试。',
          '开发者提供的硬件建议：大多数iPhone可以流畅运行**Llama 3.2 3B**或**Qwen3 4B**；**iPhone 15 Pro**及更新机型可以运行**Llama 3.1 8B**；配备**48GB统一内存**的Mac可以运行**Llama 3.3 70B**。这些是开发者自己的建议，而非独立基准测试的数据——实际性能取决于量化级别、上下文长度和后台应用负载。',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '平台支持：iPhone、iPad、Mac和Vision Pro',
        itemHeadings: true,
        columns: ['平台', '可以期待什么', '重要提示'],
        rows: [
          {
            '平台': 'iPhone',
            '可以期待什么': '根据App Store页面，需要iOS 17.0或更高版本，以及A12 Bionic或更新芯片（iPhone XS及以后机型）。所选模型大小应与可用RAM相匹配。',
            '重要提示': '大多数iPhone都能很好地处理30亿到40亿参数的模型；据开发者介绍，只有iPhone 15 Pro及更新机型才建议运行8B模型。',
          },
          {
            '平台': 'iPad',
            '可以期待什么': '运行与iPhone相同的应用和模型库。开发者的常见问题建议至少4GB RAM，较大模型建议使用iPad Pro（16GB）。',
            '重要提示': 'RAM较少的旧款iPad仅限于运行更小的量化模型。',
          },
          {
            '平台': 'Mac',
            '可以期待什么': '面向Apple Silicon Mac（M系列）的原生应用。还包含macOS专属的写作服务（语法纠正、摘要、改写），其他应用可以调用这些服务。',
            '重要提示': '据开发者常见问题介绍，Intel Mac在技术上受支持，但不推荐使用——缺少Apple Silicon的统一内存和Neural Engine，推理速度会明显变慢。',
          },
          {
            '平台': 'Apple Vision Pro',
            '可以期待什么': 'App Store页面显示同一应用兼容Vision Pro。',
            '重要提示': '本评测未对Vision Pro上的体验进行独立测试；请将其视为App Store列出的兼容性，而非经过实测验证的功能。',
          },
          {
            '平台': 'Android、Windows、Linux',
            '可以期待什么': 'Google Play、Microsoft Store或任何Linux软件包仓库均无官方版本。',
            '重要提示': '在应用发展历程中的某些时期，曾有非官方测试版APK在Google Play商店之外流传；它不属于开发者的主要营销网站或受支持的发布渠道，因此本评测不将Android视为受支持的平台。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私：Private LLM收集什么、不收集什么',
        content: [
          '**Private LLM的App Store隐私标签显示，开发者不从该应用收集任何数据**，使用该应用也无需账号、登录或注册。开发者自己的宣传材料用"无云端、无追踪、无登录"这样的措辞描述该产品，并声称对话"从不离开设备"。',
          '由于推理在模型下载完成后于本地运行，正常使用中没有需要传输到服务器的聊天数据——让对话留在设备上的是架构本身，而不仅仅是政策承诺。',
        ],
        items: [
          '**无需账号。** 你可以在不创建个人资料或登录的情况下下载、购买和使用该应用。',
          '**根据App Store标签，不收集数据。** Apple针对此页面的隐私营养标签显示该应用未收集任何数据。',
          '**iCloud同步聊天记录未有文档说明。** 开发者的公开常见问题中没有描述设备间通过iCloud同步对话的功能——本评测将其视为未经证实，而非假定其存在。如果跨设备聊天同步对你很重要，请在依赖它之前直接在应用内确认当前行为。',
          '**沙盒运行。** 该应用运行在Apple标准应用沙盒内，这是所有App Store应用都遵循的隔离机制——这是Apple平台的保障，而非Private LLM独有的功能。',
        ],
      },
      history: {
        id: 'history',
        title: '公司历史与版本里程碑',
        content: [
          '**Private LLM于2023年6月在App Store上线**，iOS版本1.0.1和macOS版本1.0.2均于2023年6月2日发布。它由[Numen Technologies Limited](https://privatellm.app/en)开发，该公司自称是一支未获风险投资资助的小型自筹资金团队。',
        ],
        items: [
          '**2023年6月。** 在App Store首次发布（iOS 1.0.1、macOS 1.0.2），搭载一个经过微调的基础模型。',
          '**2023年7月。** 增加Siri和快捷指令支持（App Intent）。',
          '**2023年9月。** 增加对iPhone 15系列的兼容性。',
          '**2023年12月。** 将支持范围扩展到仅有3GB RAM的旧款iPhone和iPad。',
          '**2024年1月。** 引入多模型下载功能，将模型库扩展至包括TinyLlama、StableLM、Phi-2、Mistral、Llama和Gemma系列模型。',
          '**2024年2月。** 新增macOS专属写作服务：语法纠正、摘要和改写，可供其他Mac应用调用。',
          '**2024年3月。** 无需离开当前聊天界面即可切换模型。',
          '**2026年7月。** 版本1.9.15将模型下载来源从Hugging Face迁移到CDN，发行说明称此举提升了下载速度；这是本评测撰写时的当前版本。',
        ],
        note: '版本历史依据开发者自己的[发行说明](https://privatellm.app/en/release-notes)页面。日期和版本号以该页面发布的内容为准；在依赖某个特定功能存在之前，请直接在App Store确认当前版本。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优势与限制',
        columns: ['优势', '实际使用中的意义', '限制/注意事项'],
        rows: [
          {
            '优势': '4.99美元一次性购买',
            '实际使用中的意义': '无需追踪或取消订阅；一次付费，在你的Apple设备上无限期使用。',
            '限制/注意事项': '它并非免费——希望获得零成本选项的读者应将其与PocketPal AI或Enclave AI进行比较。',
          },
          {
            '优势': '140多个模型库',
            '实际使用中的意义': '无需自行寻找GGUF文件，即可从通用、编程和语言特定模型中广泛选择。',
            '限制/注意事项': '该库由开发者精选；无法像一些开源应用那样导入任意自定义微调模型。',
          },
          {
            '优势': 'OmniQuant和GPTQ量化',
            '实际使用中的意义': '开发者称这比更简单的round-to-nearest量化在每比特上能保留更多模型质量。',
            '限制/注意事项': '这是开发者自身的技术主张；PromptQuorum并未独立将Private LLM的具体模型文件与RTN量化的同类文件进行比较。',
          },
          {
            '优势': '无需账号，不收集数据',
            '实际使用中的意义': '购买后即可立即使用该应用，无需注册任何东西；App Store隐私标签显示未收集数据。',
            '限制/注意事项': '由于该应用为闭源，"不收集数据"的说法无法像开源应用那样通过独立代码审计来验证。',
          },
          {
            '优势': 'Siri和快捷指令集成',
            '实际使用中的意义': '无需打开应用，即可通过语音命令或自动化触发模型响应。',
            '限制/注意事项': 'iOS限制后台GPU访问，因此通过快捷指令触发的生成可能比前台聊天更慢或更受限。',
          },
          {
            '优势': '最多六人的家人共享',
            '实际使用中的意义': '一次4.99美元的购买即可覆盖整个Apple家人共享群组。',
            '限制/注意事项': '每位家庭成员仍需要自己的受支持设备，以及足够的存储空间/RAM来运行所选模型。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Private LLM与其他替代应用对比',
        columns: ['应用', '平台', '价格', '模型灵活性', '主要区别'],
        rows: [
          {
            '应用': 'Private LLM',
            '平台': 'iPhone/iPad/Mac（仅限Apple）',
            '价格': '4.99美元一次性购买',
            '模型灵活性': '140多个精选模型；OmniQuant/GPTQ量化',
            '主要区别': '付费、闭源、精选模型库——不支持任意GGUF导入',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iPhone/iPad，部分支持Android',
            '价格': '免费、开源',
            '模型灵活性': '用户从Hugging Face或其他地方获取的任意GGUF文件',
            '主要区别': '免费且开源；需要更多手动模型管理',
          },
          {
            '应用': '[Enclave AI](/zh/power-local-llm/enclave-ai-review)',
            '平台': '因版本而异——请查看当前页面',
            '价格': '请参阅当前页面',
            '模型灵活性': '请查看完整评测了解当前模型支持情况',
            '主要区别': '详细对比请参阅Enclave AI完整评测',
          },
          {
            '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
            '平台': 'iPhone/iPad/Mac',
            '价格': '免费',
            '模型灵活性': '基于Apple MLX构建；可访问Apple的设备端基础模型',
            '主要区别': '专门基于Apple MLX框架构建的免费替代品',
          },
          {
            '应用': '[Arbiter](/zh/power-local-llm/arbiter-local-ai-chat-review)',
            '平台': '请查看完整评测了解当前平台支持情况',
            '价格': '请参阅当前页面',
            '模型灵活性': '请查看完整评测了解当前模型支持情况',
            '主要区别': '详细对比请参阅Arbiter完整评测',
          },
          {
            '应用': '[LLM Farm](https://llmfarm.space/)',
            '平台': 'iOS/Mac（开源，GitHub：[guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)）',
            '价格': '免费、开源',
            '模型灵活性': '通过llama.cpp/ggml加载自定义GGUF模型',
            '主要区别': '据其自己的GitHub README介绍，已于2025年8月从App Store和TestFlight下架——使用前请确认当前可用性',
          },
          {
            '应用': '[Layla](https://www.layla-network.ai/)',
            '平台': 'iOS和Android',
            '价格': '19.99美元加应用内购买',
            '模型灵活性': '自定义GGUF模型；专注角色/角色扮演，配备100多种语音',
            '主要区别': '跨平台（与Private LLM不同），但价格更高，偏重角色扮演/角色定制',
          },
          {
            '应用': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            '平台': '跨平台Flutter应用（主要面向Android；也可在Flutter支持的其他平台上运行）',
            '价格': '免费、开源（MIT许可证）',
            '模型灵活性': '通过llama.cpp运行任意GGUF文件；也可远程连接Anthropic、DeepSeek、Ollama、Mistral、OpenAI',
            '主要区别': '免费、完全开源，且不局限于纯本地推理',
          },
          {
            '应用': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            '平台': 'Android',
            '价格': '免费、开源',
            '模型灵活性': '多个云服务商API加本地执行',
            '主要区别': '仅限Android；定位为多服务商客户端，而非本地优先应用',
          },
          {
            '应用': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            '平台': 'Android（计划支持iOS）',
            '价格': '免费、开源',
            '模型灵活性': '通过Cactus Compute（面向React Native的llama.cpp）在设备端运行GGUF模型，或连接自托管的AnythingLLM服务器',
            '主要区别': '设计用于配合自托管的AnythingLLM工作区，而非独立聊天应用',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化——决定之前请在各应用自己的页面上核实最新信息。尤其应重新确认LLM Farm在App Store上的可用性，因为其自己的GitHub README将其描述为截至2025年8月已从App Store下架。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Private LLM',
        items: [
          '**只使用Apple设备、想要一款精良且经过精选的应用、并且不介意一次性付费的用户。** 相比自己拼凑一套GGUF文件收藏，更重视有人持续维护和积极更新的应用的iPhone、iPad和Mac用户，只需花4.99美元即可获得一个开箱即用的大型模型库。',
          '**重视量化质量胜过模型数量本身的读者。** 如果OmniQuant和GPTQ相对于round-to-nearest量化所宣称的每比特质量优势对你的使用场景很重要，Private LLM是少数专门围绕这一方案构建的消费级应用之一。',
          '**共享同一个Apple ID群组的家庭。** 家人共享意味着一次4.99美元的购买最多可覆盖六人——比为不太懂技术的家庭成员分别设置多个免费应用更划算。',
          '**希望实现Siri/快捷指令自动化的用户。** 两个App Intent可让你在不打开应用的情况下，将本地AI响应接入现有的iOS自动化流程。',
          '**注重隐私、能接受闭源应用的用户。** 如果App Store隐私标签显示的"不收集数据"以及"无需账号"符合你的要求，且无需自己审计源代码，那么Private LLM的设备端架构正好能满足这一点。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用Private LLM',
        items: [
          '**Android、Windows或Linux用户。** Private LLM在这些平台上均没有官方应用——请改用[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)（部分支持Android）、[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)、[ChatterUI](https://github.com/Vali-98/ChatterUI)或[RikkaHub](https://github.com/rikkahub/rikkahub)。',
          '**希望获得完全免费选项的读者。** 4.99美元很便宜，但并非免费——[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)和[Locally AI](/zh/power-local-llm/locally-ai-review)都不收费。',
          '**想要运行最大开放权重模型的读者。** 移动硬件限制了内存能容纳的规模——即便是开发者自己的建议，也将大多数iPhone限制在30亿到80亿参数的模型；只有配备48GB以上统一内存的Mac才能达到70B级别，而这个上限仍远低于面向服务器级硬件的最大开放权重模型。',
          '**希望共享、集中管理部署的团队或组织。** Private LLM是一款单用户、单设备的消费级应用，没有管理控制台、共享许可证管理或团队计费功能——组织应考虑自托管的服务器端本地LLM基础设施。',
          '**希望自行审计应用源代码的读者。** Private LLM是闭源的。如果独立代码审查对你很重要，像[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)或[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)这样的开源替代品可以让你直接验证其行为。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Private LLM多少钱？',
            a: 'Private LLM在Apple App Store上[一次性购买4.99美元](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)，已针对本评测于2026-09-05核实。当前App Store页面未列出订阅或应用内购买。App Store价格可能因地区而异，也可能随时间变化——购买前请确认当前价格。',
          },
          {
            q: 'Private LLM在Android或Windows上可用吗？',
            a: 'Google Play、Microsoft Store或任何Linux软件包仓库上均没有官方版本。Private LLM是专门为iPhone、iPad和Mac打造的。在应用发展历程的某些时期，曾有非官方测试版APK在Play商店之外流传，但它不属于开发者主要支持的发布渠道，因此本评测将Android视为不受支持。',
          },
          {
            q: '谁开发了Private LLM？',
            a: 'Private LLM由[Numen Technologies Limited](https://privatellm.app/en)开发，该公司在自己的网站上自称是一支未获风险投资资助的小型两人工程师团队。',
          },
          {
            q: '什么是OmniQuant，Private LLM为什么使用它？',
            a: 'OmniQuant是一种基于优化的量化方法，根据校准数据调整量化范围，而不是使用更简单的round-to-nearest（RTN）方式。Private LLM在部分模型上将OmniQuant与GPTQ结合使用。开发者称，在相同比特宽度下，这比RTN量化能保留更多模型原始的输出质量；这是开发者自身的技术主张，并非PromptQuorum对Private LLM具体模型文件进行的独立基准测试。',
          },
          {
            q: 'Private LLM能完全离线运行吗？',
            a: '是的，模型下载完成后即可。该应用只有在下载模型或应用更新时才需要互联网连接；之后聊天以及语法纠正、摘要等macOS专属服务均可在无网络连接的情况下运行。',
          },
          {
            q: 'Private LLM会收集个人数据吗？',
            a: 'Apple针对此App Store页面的隐私标签显示，开发者不从该应用收集任何数据。使用该应用无需账号或登录。本评测依据的是App Store隐私标签，而非对该应用闭源代码的独立审计。',
          },
          {
            q: 'Private LLM会通过iCloud在设备间同步聊天记录吗？',
            a: '开发者的公开常见问题中没有对此进行说明。本评测将对话的iCloud同步视为未经证实，而非假定其存在——在依赖跨设备聊天连续性之前，请直接在应用内确认当前行为。',
          },
          {
            q: '使用Private LLM在iPhone上可以运行哪些模型？',
            a: '根据开发者自己的建议，大多数iPhone可以流畅运行30亿到40亿参数的模型（例如Llama 3.2 3B或Qwen3 4B），而iPhone 15 Pro及更新机型可以处理80亿参数的模型，如Llama 3.1 8B。这些是开发者的建议，并非独立基准测试的结果——实际性能取决于量化级别和可用RAM。',
          },
          {
            q: 'Private LLM与PocketPal AI相比如何？',
            a: 'Private LLM是一款付费（4.99美元）、闭源、仅限Apple平台的应用，拥有140多个模型的精选库和OmniQuant/GPTQ量化。[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)免费且开源，运行在iPhone/iPad上并部分支持Android，允许导入任意GGUF文件，而不是仅从精选列表中选择。如果你想要一次性购买、维护良好、内置庞大模型库的体验，选择Private LLM；如果你想要免费、可审计、需要更多手动配置的方案，选择PocketPal AI。',
          },
          {
            q: '一次Private LLM购买可以覆盖多台设备或多位家庭成员吗？',
            a: '可以。4.99美元的购买会覆盖购买所用Apple ID对应的iPhone、iPad和Mac，而Apple的家人共享功能可以将这次购买扩展到同一家人共享群组中最多六人。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Private LLM在本站收录的移动端本地AI应用中，凭借更完善的信息公开赢得了自己的一席之地：一个在App Store上直接核实过的4.99美元明确一次性价格，一个包含140多个开源模型的精选库，以及一种具体且有名称的量化方案（OmniQuant加GPTQ），而不是一句含糊的"针对移动端优化"。开发者自己的发行说明显示，自2023年6月推出以来已持续更新三年，这比该分类中若干较小的应用有着明显更长的实绩记录。其权衡同样清晰：它仅限Apple平台，并非免费，其模型列表是精选而非完全开放给自定义GGUF导入，而且由于闭源，"不收集数据"的说法依赖于App Store隐私标签，而非独立代码审查。希望在自己所有Apple设备上使用一款维护良好、经过精选的一次性购买应用的读者应该购买它；使用Android/Windows/Linux的读者、希望获得免费选项的读者，或希望自行审计源代码的读者，则应改为从[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)开始。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[App Store上的Private LLM](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — 价格、平台兼容性、隐私标签、评分和版本历史。',
          '[Private LLM官方网站](https://privatellm.app/en) — 产品概述、定价模式和隐私声明。',
          '[Private LLM常见问题](https://privatellm.app/en/faq) — 支持的模型、量化方式、硬件要求、家人共享以及Siri/快捷指令集成。',
          '[Private LLM发行说明](https://privatellm.app/en/release-notes) — 2023年6月至2026年7月的版本历史和功能里程碑。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) — 支持手动导入GGUF的免费开源替代品。',
          '[2026年iPhone最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 涵盖Private LLM、PocketPal AI和Locally AI在内的完整iPhone应用汇总。',
          '[Enclave AI评测](/zh/power-local-llm/enclave-ai-review) — 另一款可供比较的设备端AI应用。',
          '[Locally AI评测](/zh/power-local-llm/locally-ai-review) — 一款基于Apple MLX的免费替代品。',
          '[Chatty-mini评测](/zh/power-local-llm/chatty-mini-review) — 一款规模更小、文档更少、仅限Android的替代品，供对比参考。',
          '[Arbiter Local AI Chat评测](/zh/power-local-llm/arbiter-local-ai-chat-review) — 本站收录的另一款本地聊天应用。',
          '[本地LLM软件完整目录](/zh/power-local-llm/local-llm-software-directory) — 跨平台本地LLM工具的更广泛目录。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-05',
    dateModified: '2026-09-05',
    next_refresh_due: '2027-03-05',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-llm-review-hero-ko.webp',
    title: 'Private LLM 리뷰(2026): iPhone·iPad·Mac용 온디바이스 AI 챗',
    seoTitle: 'Private LLM 2026 리뷰: iPhone·Mac 온디바이스 AI',
    intro:
      '[Numen Technologies Limited](https://privatellm.app/en)가 개발한 Private LLM은 iPhone, iPad, Mac용 일회성 유료 구매 앱으로, 오픈소스 언어 모델을 완전히 기기 내에서 실행합니다. 계정도, 클라우드 대체 수단도, 구독도 필요하지 않습니다. [Apple App Store 가격은 4.99달러](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)이며, 한 번 구매하면 Apple 세 플랫폼을 모두 사용할 수 있고 가족 공유를 이용하면 최대 6명까지 사용할 수 있습니다. App Store 가격은 지역에 따라 다를 수 있으므로 구매 전 현지 App Store에서 현재 가격을 확인하십시오. 이 앱은 Llama, Qwen, Gemma, Mistral, Phi-4 등 140개가 넘는 오픈소스 모델 계열을 지원하며, OmniQuant(일부 모델은 GPTQ 병행)라는 양자화 방식을 사용합니다. 개발사에 따르면 이 방식은 일부 경쟁 앱이 사용하는 더 단순한 round-to-nearest 양자화보다 모델 품질을 더 잘 보존한다고 합니다. 로컬 AI 앱을 비교하는 독자에게 실질적으로 중요한 질문은 iPhone에서 온디바이스 챗이 작동하는지 여부가 아닙니다——이 사이트에서 다루는 여러 앱이 이미 그것을 입증했습니다——4.99달러를 한 번 지불하고 140개 이상의 선별된 모델을 얻는 것이 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Enclave AI](/ko/power-local-llm/enclave-ai-review) 같은 무료 대안에 비해 가치가 있는지가 핵심입니다.',
    metaDescription:
      'Private LLM 2026 리뷰: 4.99달러 일회성 구매, iPhone/iPad/Mac 전용, 140개 이상 모델, OmniQuant 양자화, 구독 없음. 가격, 개인정보 보호, PocketPal AI와의 비교.',
    twitterDescription:
      'Private LLM 2026 리뷰: iPhone, iPad, Mac에서 온디바이스 AI 챗을 구현하는 4.99달러 일회성 구매 앱. OmniQuant 양자화, 140개 이상의 모델, PocketPal AI 및 Enclave AI와의 비교.',
    audience:
      'PocketPal AI, Enclave AI, Locally AI 같은 무료 대안과 비교해 일회성 구매형 로컬 AI 앱이 가치가 있는지 판단하려는 iPhone·iPad·Mac 사용자 — 가격, 지원 모델, 양자화 방식, 개인정보 보호를 다룹니다.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Private LLM review',
    targetKeywords: [
      'private llm review',
      'private llm app iphone',
      'private llm ios price',
      'private llm omniquant',
      'private llm vs pocketpal ai',
      'on-device ai chat iphone mac',
      'numen technologies private llm',
      'best local llm app for iphone',
    ],
    current_models_mentioned: ['Llama 3.3 70B', 'Llama 3.1 8B', 'Llama 3.2 3B', 'Qwen 2.5', 'Qwen3 4B', 'Gemma 2', 'Gemma 3', 'Phi-4', 'Mixtral', 'DeepSeek R1 Distill'],
    current_hardware_mentioned: ['iPhone 15 Pro', 'iPhone 12', '48GB 통합 메모리를 탑재한 Apple Silicon Mac', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Private LLM은 iPhone, iPad, Mac용 4.99달러 일회성 구매 앱으로, 140개 이상의 오픈소스 AI 모델을 계정이나 구독 없이 완전히 기기 내에서 실행합니다.** [Numen Technologies Limited](https://privatellm.app/en)가 개발했으며, OmniQuant와 GPTQ 양자화를 사용합니다. 개발사에 따르면 이는 일부 경쟁 앱이 사용하는 round-to-nearest 양자화보다 비트당 출력 품질을 더 잘 보존한다고 합니다. 한 번 구매하면 Apple 세 플랫폼 전체에서 전체 모델 라이브러리가 잠금 해제되며, 가족 공유를 통해 최대 6명까지 사용할 수 있습니다. 무료 대안을 원하거나 Android/Windows/Linux를 사용하는 독자는 무료 오픈소스인 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 비교해 보아야 합니다.',
    quickAnswerTop: {
      en: {
        question: 'Is Private LLM worth the $4.99 price on the App Store?',
        answer:
          'Yes, if you want a polished, actively maintained, Apple-only local-AI app with a large curated model library (140+ models) and no subscription — the $4.99 is a one-time purchase covering iPhone, iPad, and Mac, with Family Sharing for up to six people. Skip it if you are on Android, Windows, or Linux, or if you specifically want a free and fully open-source app — PocketPal AI covers that case at no cost.',
        bullets: [
          '$4.99 one-time purchase on the Apple App Store; no subscription, no in-app purchases listed.',
          'iPhone, iPad, and Mac only — no Android, Windows, or Linux version on the App Store.',
          'Supports more than 140 open-source models: Llama, Qwen, Gemma, Mistral, Phi-4, and more.',
          'Uses OmniQuant and GPTQ quantization instead of simpler round-to-nearest quantization.',
          'Developer (Numen Technologies Limited) states the app collects no data and needs no account.',
        ],
        updatedDate: '2026-09-05',
      },
      ko: {
        question: 'Private LLM은 App Store에서 4.99달러를 지불할 가치가 있습니까?',
        answer:
          '네, 완성도가 높고 활발히 유지 관리되는 Apple 전용 로컬 AI 앱을 원하고, 구독 없이 대규모 선별 모델 라이브러리(140개 이상)를 원한다면 가치가 있습니다. 4.99달러는 iPhone, iPad, Mac을 모두 포함하는 일회성 구매이며, 가족 공유를 통해 최대 6명까지 사용할 수 있습니다. Android, Windows, Linux를 사용하거나, 무료이면서 완전히 오픈소스인 앱을 특별히 원한다면 건너뛰십시오 — 그런 경우 PocketPal AI가 비용 없이 그 조건을 충족합니다.',
        bullets: [
          'Apple App Store에서 4.99달러 일회성 구매; 구독 및 앱 내 구매 항목 없음.',
          'iPhone, iPad, Mac 전용 — App Store에 Android, Windows, Linux 버전 없음.',
          'Llama, Qwen, Gemma, Mistral, Phi-4 등 140개 이상의 오픈소스 모델 지원.',
          '더 단순한 round-to-nearest 양자화 대신 OmniQuant와 GPTQ 양자화 사용.',
          '개발사(Numen Technologies Limited)는 앱이 데이터를 수집하지 않으며 계정도 필요 없다고 명시.',
        ],
        updatedDate: '2026-09-05',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Private LLM이란', anchor: 'what-is-private-llm' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '가격: 일회성 구매 설명', anchor: 'pricing' },
      { label: '지원 모델과 OmniQuant 양자화', anchor: 'models-and-quantization' },
      { label: '플랫폼: iPhone, iPad, Mac, Vision Pro', anchor: 'platforms' },
      { label: '개인정보 보호: Private LLM이 수집하는 것과 수집하지 않는 것', anchor: 'privacy' },
      { label: '개발사 연혁과 버전 주요 이정표', anchor: 'history' },
      { label: '장단점 비교', anchor: 'tradeoffs' },
      { label: 'Private LLM 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'Private LLM을 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'Private LLM을 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Private LLM은 Numen Technologies Limited가 개발한 iPhone, iPad, Mac용 4.99달러 일회성 구매 앱으로, OmniQuant와 GPTQ 양자화를 사용해 140개 이상의 오픈소스 AI 모델을 완전히 기기 내에서 실행합니다 — 계정, 클라우드 대체 수단, 구독이 모두 필요 없습니다.',
          },
          {
            type: 'plain-terms',
            text: '클라우드 챗봇을 구독하는 대신, 일반적인 App Store 앱처럼 로컬 AI 챗 앱을 한 번만 구매하는 것이라고 생각하면 됩니다 — 모델이 본인의 iPhone이나 Mac에서 실행되므로 입력한 내용이 기기 밖으로 나가지 않습니다.',
          },
        ],
        items: [
          '가격: Apple App Store에서 [4.99달러 일회성 구매](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860); 본 리뷰 시점 기준 구독 및 앱 내 구매 항목 없음.',
          '플랫폼: iPhone, iPad, Mac 전용 — App Store에 Android, Windows, Linux 앱 없음.',
          '개발사: [Numen Technologies Limited](https://privatellm.app/en). 개발사 자체 웹사이트에 따르면 EU에 본거지를 둔 소규모 자체 자금 조달 팀.',
          '모델 라이브러리: Llama, Qwen, Gemma, Mistral, Phi-4, DeepSeek R1 Distill 기반 모델을 포함해 140개 이상의 오픈소스 모델.',
          '양자화: OmniQuant와 GPTQ 사용. 개발사에 따르면 일부 경쟁 앱이 사용하는 round-to-nearest(RTN) 양자화보다 비트당 출력 품질이 더 우수하다고 함.',
          '개인정보 보호: App Store 개인정보 보호 라벨에 따르면 개발사가 앱에서 데이터를 수집하지 않음; 채팅에 계정이나 로그인이 필요 없음.',
          '추가 기능: 두 개의 App Intent를 통한 Siri 및 단축어 연동, 한 번 구매로 최대 6명까지 사용 가능한 가족 공유.',
          '버전 1.9.15(2026년 7월)가 현재 버전이며, 이 앱은 2023년 6월 App Store에 처음 등장했습니다.',
        ],
      },
      whatIsPrivateLLM: {
        id: 'what-is-private-llm',
        title: 'Private LLM이란',
        content: [
          '**Private LLM은 오픈소스 언어 모델을 다운로드해 iPhone, iPad, Mac에서 직접 실행하는 네이티브 Apple 앱으로, 서버 측 구성 요소가 전혀 없습니다.** 모델을 한 번 다운로드하면 응답을 생성하는 데 인터넷 연결이 필요 없습니다 — 모든 작업이 기기 자체의 CPU, GPU, Neural Engine을 사용해 로컬에서 실행됩니다.',
          '이 앱은 [Numen Technologies Limited](https://privatellm.app/en)가 개발 및 유지 관리하며, 이 회사는 자사 웹사이트에서 스스로를 "VC가 아닌 두 명의 엔지니어가 만든" 팀이라고 소개합니다 — 벤처 캐피털의 투자를 받은 기업이 아니라 소규모 자체 자금 조달 팀입니다. 이 앱은 2023년 6월 [Private LLM - Local AI Chat](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)(App Store ID 6448106860)이라는 이름으로 App Store에 처음 등장했으며, 이후 지속적으로 업데이트되어 왔습니다 — 현재 버전인 1.9.15는 2026년 7월에 출시되었습니다.',
          '채팅 요청을 원격 API로 전송하는 앱과 달리, Private LLM의 가치 제안 전체는 로컬 추론에 기반합니다. 개발사 자체 마케팅 문구는 "클라우드 없음, 추적 없음, 로그인 없음"이며, 대화가 "기기를 벗어나지 않는다"고 주장합니다. 이 리뷰는 이 슬로건을 그대로 받아들이는 대신, App Store 개인정보 보호 라벨과 개발사 자체 FAQ가 실제로 무엇을 뒷받침하는지를 기준으로 이 주장을 평가합니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**Private LLM 설정은 네 단계로 이루어지며 계정 생성이 필요 없습니다.** App Store 다운로드부터 첫 응답까지 전체 과정은 보통 몇 분에 선택한 모델의 다운로드 시간을 더한 정도입니다.',
        ],
        numberedItems: [
          {
            title: '앱 구매 및 설치',
            whyItMatters: '[Apple App Store에서 Private LLM](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)을 4.99달러에 다운로드하십시오. 일회성 구매이므로 무료 체험 기간도, 관리해야 할 정기 구독도 없습니다.',
          },
          {
            title: '기기에 맞는 모델 선택',
            whyItMatters: '앱 내 모델 브라우저를 열고 자신의 하드웨어에 맞는 크기의 모델을 선택하십시오. 개발사 자체 안내에 따르면 대부분의 iPhone은 Llama 3.2 3B나 Qwen3 4B를 무리 없이 실행할 수 있고, iPhone 15 Pro 이상은 Llama 3.1 8B를 처리할 수 있으며, 48GB 통합 메모리를 갖춘 Mac은 Llama 3.3 70B를 실행할 수 있습니다.',
          },
          {
            title: '모델 다운로드',
            whyItMatters: '모델 파일 크기는 매개변수 수와 양자화 수준에 따라 약 2GB에서 수십 GB에 이릅니다. 이 단계에는 인터넷 연결이 필요하지만, 이후 단계에는 필요하지 않습니다.',
          },
          {
            title: '완전히 오프라인으로 채팅하기',
            whyItMatters: '모델을 다운로드한 후에는 비행기 모드를 켜서 오프라인 작동 주장을 직접 확인할 수 있습니다 — 채팅, 요약, (Mac에서의) 문장 다듬기 모두 네트워크 연결 없이 작동합니다.',
          },
          {
            title: '선택 사항: Siri와 단축어 연결',
            whyItMatters: 'Private LLM은 Siri와 단축어 앱에서 사용할 수 있는 두 개의 App Intent를 제공하여, 앱을 직접 열지 않고도 음성 명령이나 자동화로 모델 응답을 실행할 수 있게 해줍니다.',
          },
        ],
        note: '정확한 다운로드 크기, 지원 모델 목록, 최소 기기 요구 사항은 App Store 업데이트마다 달라질 수 있습니다 — 제한된 데이터 요금제로 대용량 다운로드를 진행하기 전에 앱 내 모델 브라우저나 [privatellm.app](https://privatellm.app/en)에서 최신 세부 정보를 확인하십시오.',
      },
      pricing: {
        id: 'pricing',
        title: '가격: 일회성 구매 설명',
        itemHeadings: true,
        content: [
          '**Private LLM은 Apple App Store에서 4.99달러의 단일 일회성 구매로 제공되며, 현재 페이지에는 구독이나 앱 내 구매 항목이 없습니다.** 이 가격은 본 리뷰를 위해 [App Store 페이지](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)에서 직접 확인했습니다. App Store 가격은 지역에 따라 다를 수 있으므로 구매 전 현재 가격을 확인하십시오.',
        ],
        columns: ['지불 금액', '포함되는 것', '포함되지 않는 것'],
        rows: [
          {
            '지불 금액': '4.99달러(일회성)',
            '포함되는 것': 'iPhone, iPad, Mac용 전체 앱; 140개 이상 모델 라이브러리 전체 접근; 최대 6명까지 가족 공유',
            '포함되지 않는 것': 'Android, Windows, Linux 버전 — App Store 구매로는 크로스 플랫폼 라이선스가 잠금 해제되지 않음',
          },
        ],
        note: 'App Store 가격은 예고 없이 변경될 수 있으며 지역에 따라 다를 수 있습니다. 구매 전 [App Store 페이지](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)에서 현재 가격을 확인하십시오. 본 리뷰를 위해 2026-09-05에 확인했습니다.',
      },
      modelsAndQuantization: {
        id: 'models-and-quantization',
        title: '지원 모델과 OmniQuant 양자화',
        content: [
          '**Private LLM의 라이브러리에는 범용, 코딩, 언어별 파인튜닝 모델을 포함해 140개가 넘는 오픈소스 모델이 있습니다.** 개발사 자체 문서에 언급된 모델 계열로는 Llama 3, 3.1, 3.2, 3.3; Qwen 2.5 및 Qwen3 기반 모델; Gemma 2 및 Gemma 3; Phi-4; Mixtral; DeepSeek R1 Distill 기반 모델이 있으며, SauerkrautLM(독일어), DictaLM(히브리어), RakutenAI(일본어), Yi(중국어)와 같은 지역별 옵션도 포함됩니다.',
          '이 앱은 이러한 모델을 **OmniQuant**(일부 모델은 **GPTQ** 병행)로 양자화합니다 — 둘 다 일부 경쟁 로컬 AI 앱이 사용하는 더 단순한 round-to-nearest(RTN) 방식이 아니라 최적화 기반 양자화 방식입니다. 개발사 자체 비교 페이지에 따르면, 최적화 기반 양자화는 보정 데이터에 맞춰 양자화 범위를 조정하므로 동일한 비트 폭에서 RTN보다 원본 모델의 출력 품질을 더 많이 보존할 수 있다고 합니다. 이는 개발사 자체의 기술적 주장이며, 개발사 자체 문서에 근거합니다 — PromptQuorum이 Private LLM의 구체적인 양자화 모델 파일에 대해 독립적으로 벤치마크한 것은 아닙니다.',
          '개발사의 하드웨어 안내: 대부분의 iPhone은 **Llama 3.2 3B** 또는 **Qwen3 4B**를 무리 없이 실행할 수 있고, **iPhone 15 Pro** 이상은 **Llama 3.1 8B**를 처리할 수 있으며, **48GB 통합 메모리**를 갖춘 Mac은 **Llama 3.3 70B**를 실행할 수 있습니다. 이는 개발사 자체 권장 사항이며 독립적으로 벤치마크된 수치가 아닙니다 — 실제 성능은 양자화 수준, 컨텍스트 길이, 백그라운드 앱 부하에 따라 달라집니다.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '플랫폼: iPhone, iPad, Mac, Vision Pro',
        itemHeadings: true,
        columns: ['플랫폼', '기대할 수 있는 것', '중요 참고 사항'],
        rows: [
          {
            '플랫폼': 'iPhone',
            '기대할 수 있는 것': 'App Store 페이지에 따르면 iOS 17.0 이상과 A12 Bionic 이상 칩(iPhone XS 이상)이 필요합니다. 선택하는 모델 크기는 사용 가능한 RAM에 맞아야 합니다.',
            '중요 참고 사항': '대부분의 iPhone은 30억~40억 매개변수 모델을 잘 처리하지만, 개발사에 따르면 8B 모델은 iPhone 15 Pro 이상에서만 권장됩니다.',
          },
          {
            '플랫폼': 'iPad',
            '기대할 수 있는 것': 'iPhone과 동일한 앱과 모델 라이브러리를 실행합니다. 개발사의 FAQ는 최소 4GB RAM을 권장하며, 더 큰 모델에는 iPad Pro(16GB)를 권장합니다.',
            '중요 참고 사항': 'RAM이 적은 구형 iPad는 더 작은 양자화 모델로 제한됩니다.',
          },
          {
            '플랫폼': 'Mac',
            '기대할 수 있는 것': 'Apple Silicon Mac(M 시리즈)용 네이티브 앱입니다. 다른 앱이 호출할 수 있는 macOS 전용 문서 서비스(문법 교정, 요약, 다듬기)도 포함됩니다.',
            '중요 참고 사항': '개발사의 FAQ에 따르면 Intel Mac은 기술적으로 지원되지만 권장되지 않습니다 — Apple Silicon의 통합 메모리와 Neural Engine이 없어 추론 속도가 눈에 띄게 느립니다.',
          },
          {
            '플랫폼': 'Apple Vision Pro',
            '기대할 수 있는 것': 'App Store 페이지에는 동일한 앱의 Vision Pro 호환성이 표시되어 있습니다.',
            '중요 참고 사항': '본 리뷰는 Vision Pro에서의 실제 사용 경험을 독립적으로 테스트하지 않았습니다 — 이를 App Store에 명시된 호환성으로만 간주하고, 실사용으로 검증된 기능으로 취급하지 마십시오.',
          },
          {
            '플랫폼': 'Android, Windows, Linux',
            '기대할 수 있는 것': 'Google Play, Microsoft Store, 어떤 Linux 패키지 저장소에도 공식 페이지가 없습니다.',
            '중요 참고 사항': '앱 역사의 특정 시점에 Google Play 스토어 외부에서 비공식 베타 APK가 유통된 적이 있습니다. 이는 개발사의 주요 마케팅 사이트나 지원되는 출시 채널의 일부가 아니므로, 본 리뷰는 Android를 지원 플랫폼으로 취급하지 않습니다.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호: Private LLM이 수집하는 것과 수집하지 않는 것',
        content: [
          '**Private LLM의 App Store 개인정보 보호 라벨에는 개발사가 앱에서 어떤 데이터도 수집하지 않는다고 명시되어 있으며**, 이 앱을 사용하는 데 계정, 로그인, 가입이 필요하지 않습니다. 개발사 자체 마케팅은 이 제품을 "클라우드 없음, 추적 없음, 로그인 없음"이라는 문구로 설명하며, 대화가 "기기를 벗어나지 않는다"고 주장합니다.',
          '모델을 다운로드한 후 추론이 로컬에서 실행되므로, 일반적인 사용 중에는 서버로 전송할 채팅 데이터가 애초에 존재하지 않습니다 — 대화를 기기 안에 머물게 하는 것은 단순한 정책 약속이 아니라 아키텍처 자체입니다.',
        ],
        items: [
          '**계정이 필요 없음.** 프로필을 만들거나 로그인하지 않고도 앱을 다운로드, 구매, 사용할 수 있습니다.',
          '**App Store 라벨에 따르면 데이터 수집 없음.** 이 페이지에 대한 Apple의 개인정보 보호 라벨에는 앱이 수집하는 데이터가 없다고 표시되어 있습니다.',
          '**iCloud를 통한 채팅 기록 동기화는 문서화되어 있지 않음.** 개발사의 공개 FAQ에는 기기 간 대화의 iCloud 동기화에 대한 설명이 없습니다 — 본 리뷰는 그것이 존재한다고 가정하지 않고 확인되지 않은 것으로 취급합니다. 기기 간 채팅 동기화가 중요하다면, 이에 의존하기 전에 앱 내에서 현재 동작을 직접 확인하십시오.',
          '**샌드박스 실행.** 이 앱은 모든 App Store 앱이 따르는 것과 동일한 격리 방식인 Apple의 표준 앱 샌드박스 내에서 실행됩니다 — 이는 Private LLM만의 기능이 아니라 Apple 플랫폼 차원의 보장입니다.',
        ],
      },
      history: {
        id: 'history',
        title: '개발사 연혁과 버전 주요 이정표',
        content: [
          '**Private LLM은 2023년 6월 App Store에 출시되었으며**, iOS용 버전 1.0.1과 macOS용 버전 1.0.2가 모두 2023년 6월 2일에 출시되었습니다. 이 앱은 [Numen Technologies Limited](https://privatellm.app/en)가 개발했으며, 이 회사는 스스로를 벤처 캐피털 투자를 받지 않은 소규모 자체 자금 조달 팀이라고 소개합니다.',
        ],
        items: [
          '**2023년 6월.** App Store 최초 출시(iOS 1.0.1, macOS 1.0.2), 파인튜닝된 기본 모델 탑재.',
          '**2023년 7월.** Siri 및 단축어(App Intent) 지원 추가.',
          '**2023년 9월.** iPhone 15 시리즈 호환성 추가.',
          '**2023년 12월.** RAM이 단 3GB인 구형 iPhone 및 iPad까지 지원 확대.',
          '**2024년 1월.** 다중 모델 다운로드 기능 도입, TinyLlama, StableLM, Phi-2, Mistral, Llama, Gemma 계열 모델로 라이브러리 확장.',
          '**2024년 2월.** macOS 전용 문서 서비스 추가: 문법 교정, 요약, 다듬기 — 다른 Mac 앱에서 호출 가능.',
          '**2024년 3월.** 활성 채팅 화면을 벗어나지 않고 모델을 전환할 수 있게 됨.',
          '**2026년 7월.** 버전 1.9.15에서 모델 다운로드 방식을 Hugging Face 대신 CDN으로 이전, 릴리스 노트는 이를 더 빠른 다운로드로 설명함 — 본 리뷰 시점 기준 현재 버전.',
        ],
        note: '버전 이력은 개발사 자체 [릴리스 노트](https://privatellm.app/en/release-notes) 페이지를 기준으로 합니다. 날짜와 버전 번호는 해당 페이지에 게시된 대로이며, 특정 기능의 존재를 전제하기 전에 App Store에서 현재 버전을 직접 확인하십시오.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점 비교',
        columns: ['장점', '실제 사용에서의 의미', '제한 사항 / 유의점'],
        rows: [
          {
            '장점': '4.99달러 일회성 구매',
            '실제 사용에서의 의미': '추적하거나 해지할 구독이 없음; 한 번만 결제하면 Apple 기기에서 무기한 사용 가능.',
            '제한 사항 / 유의점': '무료는 아닙니다 — 비용이 들지 않는 옵션을 원하는 독자는 PocketPal AI나 Enclave AI와 비교해야 합니다.',
          },
          {
            '장점': '140개 이상의 모델 라이브러리',
            '실제 사용에서의 의미': 'GGUF 파일을 직접 찾아다닐 필요 없이 범용, 코딩, 언어별 모델 중 폭넓게 선택 가능.',
            '제한 사항 / 유의점': '라이브러리는 개발사가 선별합니다; 일부 오픈소스 앱처럼 임의의 커스텀 파인튜닝 모델을 가져올 수는 없습니다.',
          },
          {
            '장점': 'OmniQuant 및 GPTQ 양자화',
            '실제 사용에서의 의미': '개발사에 따르면 이는 더 단순한 round-to-nearest 양자화보다 비트당 모델 품질을 더 잘 보존합니다.',
            '제한 사항 / 유의점': '이는 개발사 자체의 기술적 주장이며, PromptQuorum은 Private LLM의 구체적인 모델 파일을 RTN 양자화된 동등 모델과 독립적으로 비교하지 않았습니다.',
          },
          {
            '장점': '계정 없음, 데이터 수집 없음',
            '실제 사용에서의 의미': '어디에도 가입할 필요 없이 구매 직후 바로 앱을 사용할 수 있음; App Store 개인정보 보호 라벨에 수집된 데이터가 없다고 표시됨.',
            '제한 사항 / 유의점': '앱이 클로즈드소스이므로 "데이터 수집 없음"이라는 주장은 오픈소스 앱처럼 독립적인 코드 감사로 확인할 수 없습니다.',
          },
          {
            '장점': 'Siri 및 단축어 연동',
            '실제 사용에서의 의미': '앱을 열지 않고도 음성 명령이나 자동화로 모델 응답을 실행할 수 있음.',
            '제한 사항 / 유의점': 'iOS는 백그라운드 GPU 접근을 제한하므로, 단축어로 실행된 생성 작업은 포그라운드 채팅보다 느리거나 더 제한적일 수 있습니다.',
          },
          {
            '장점': '최대 6명까지 가족 공유',
            '실제 사용에서의 의미': '4.99달러 한 번의 구매로 Apple 가족 공유 그룹 전체를 커버할 수 있음.',
            '제한 사항 / 유의점': '각 가족 구성원은 여전히 자신만의 지원 기기와, 선택한 모델을 실행할 충분한 저장 공간/RAM이 필요합니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Private LLM 대 대안 앱',
        columns: ['앱', '플랫폼', '가격', '모델 유연성', '핵심 차이점'],
        rows: [
          {
            '앱': 'Private LLM',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '가격': '4.99달러 일회성 구매',
            '모델 유연성': '140개 이상의 선별 모델; OmniQuant/GPTQ 양자화',
            '핵심 차이점': '유료, 클로즈드소스, 선별된 라이브러리 — 임의의 GGUF 가져오기 불가',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iPhone/iPad, Android 일부 지원',
            '가격': '무료, 오픈소스',
            '모델 유연성': '사용자가 Hugging Face 등에서 가져온 임의의 GGUF 파일',
            '핵심 차이점': '무료이자 오픈소스; 더 많은 수동 모델 관리 필요',
          },
          {
            '앱': '[Enclave AI](/ko/power-local-llm/enclave-ai-review)',
            '플랫폼': '버전에 따라 다름 — 현재 페이지 확인',
            '가격': '현재 페이지 참고',
            '모델 유연성': '현재 모델 지원 현황은 전체 리뷰 참고',
            '핵심 차이점': '자세한 비교는 Enclave AI 전체 리뷰 참고',
          },
          {
            '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '플랫폼': 'iPhone/iPad/Mac',
            '가격': '무료',
            '모델 유연성': 'Apple MLX 기반; Apple의 온디바이스 파운데이션 모델 접근 가능',
            '핵심 차이점': 'Apple MLX 프레임워크에 특화되어 구축된 무료 대안',
          },
          {
            '앱': '[Arbiter](/ko/power-local-llm/arbiter-local-ai-chat-review)',
            '플랫폼': '현재 플랫폼 지원 현황은 전체 리뷰 참고',
            '가격': '현재 페이지 참고',
            '모델 유연성': '현재 모델 지원 현황은 전체 리뷰 참고',
            '핵심 차이점': '자세한 비교는 Arbiter 전체 리뷰 참고',
          },
          {
            '앱': '[LLM Farm](https://llmfarm.space/)',
            '플랫폼': 'iOS/Mac(오픈소스, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            '가격': '무료, 오픈소스',
            '모델 유연성': 'llama.cpp/ggml을 통해 커스텀 GGUF 모델 로드',
            '핵심 차이점': '자체 GitHub README에 따르면 2025년 8월 App Store 및 TestFlight에서 내려짐 — 사용 전 현재 이용 가능 여부 확인 필요',
          },
          {
            '앱': '[Layla](https://www.layla-network.ai/)',
            '플랫폼': 'iOS 및 Android',
            '가격': '19.99달러 및 앱 내 구매',
            '모델 유연성': '커스텀 GGUF 모델; 100개 이상의 음성을 갖춘 캐릭터/롤플레이 중심',
            '핵심 차이점': 'Private LLM과 달리 크로스 플랫폼이지만 가격이 더 비싸고 롤플레이/캐릭터 중심',
          },
          {
            '앱': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            '플랫폼': '크로스 플랫폼 Flutter 앱(Android 우선, Flutter가 지원하는 다른 플랫폼에서도 실행)',
            '가격': '무료, 오픈소스(MIT 라이선스)',
            '모델 유연성': 'llama.cpp를 통한 임의의 GGUF 파일; Anthropic, DeepSeek, Ollama, Mistral, OpenAI에 원격 연결도 가능',
            '핵심 차이점': '무료이며 완전히 오픈소스이고, 로컬 추론 전용에 국한되지 않음',
          },
          {
            '앱': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            '플랫폼': 'Android',
            '가격': '무료, 오픈소스',
            '모델 유연성': '여러 클라우드 제공사 API와 로컬 실행',
            '핵심 차이점': 'Android 전용; 로컬 우선 앱이 아니라 다중 제공사 클라이언트로 자리매김',
          },
          {
            '앱': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            '플랫폼': 'Android(iOS 지원 예정)',
            '가격': '무료, 오픈소스',
            '모델 유연성': 'Cactus Compute(React Native용 llama.cpp)를 통해 기기에서 GGUF 모델 실행, 또는 자체 호스팅 AnythingLLM 서버와 연동',
            '핵심 차이점': '자체 호스팅 AnythingLLM 워크스페이스와 짝을 이루도록 설계되었으며, 독립형 채팅 앱이 아님',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 정보는 자주 변경됩니다 — 결정하기 전에 각 앱 자체 페이지에서 최신 정보를 확인하십시오. 특히 LLM Farm의 App Store 이용 가능 여부는 다시 확인해야 합니다. 자체 GitHub README에서 2025년 8월 기준 App Store에서 내려졌다고 설명하고 있기 때문입니다.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Private LLM을 사용해야 하는 사람',
        items: [
          '**완성도 높고 선별된 앱을 원하며 한 번 결제하는 것에 개의치 않는 Apple 전용 사용자.** 직접 GGUF 파일 컬렉션을 구성하는 것보다 유지 관리되고 활발히 업데이트되는 앱을 중시하는 iPhone, iPad, Mac 사용자는 4.99달러로 대규모 모델 라이브러리를 즉시 이용할 수 있습니다.',
          '**단순 모델 개수보다 양자화 품질을 중시하는 독자.** OmniQuant와 GPTQ가 round-to-nearest 양자화 대비 주장하는 비트당 품질 우위가 자신의 사용 사례에 중요하다면, Private LLM은 이 접근 방식을 중심으로 특별히 구축된 몇 안 되는 소비자용 앱 중 하나입니다.',
          '**동일한 Apple ID 그룹을 공유하는 가족.** 가족 공유를 이용하면 4.99달러 한 번의 구매로 최대 6명까지 커버할 수 있어, 기술에 익숙하지 않은 가족 구성원을 위해 여러 무료 앱을 개별적으로 설정하는 것보다 1인당 비용이 저렴합니다.',
          '**Siri/단축어 자동화를 원하는 사용자.** 두 개의 App Intent를 통해 앱을 열지 않고도 기존 iOS 자동화에 로컬 AI 응답을 연동할 수 있습니다.',
          '**클로즈드소스 앱에 거부감이 없는 개인정보 보호 중시 사용자.** App Store 개인정보 보호 라벨의 "데이터 수집 없음"과 "계정 불필요"가 스스로 소스 코드를 감사할 필요 없이 자신의 기준을 충족한다면, Private LLM의 온디바이스 아키텍처가 정확히 이를 제공합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Private LLM을 사용하지 말아야 하는 사람',
        items: [
          '**Android, Windows, Linux 사용자.** Private LLM은 이 플랫폼 어디에도 공식 앱이 없습니다 — 대신 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)(Android 일부 지원), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid), [ChatterUI](https://github.com/Vali-98/ChatterUI), [RikkaHub](https://github.com/rikkahub/rikkahub)를 선택하십시오.',
          '**완전히 무료인 옵션을 원하는 독자.** 4.99달러는 저렴하지만 무료는 아닙니다 — [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 [Locally AI](/ko/power-local-llm/locally-ai-review)는 모두 비용이 들지 않습니다.',
          '**가장 큰 오픈 웨이트 모델을 실행하려는 독자.** 모바일 하드웨어는 메모리에 담을 수 있는 용량을 제한합니다 — 개발사 자체 안내조차 대부분의 iPhone을 30억~80억 매개변수 모델로 제한하며, 70B급에 도달하는 것은 48GB 이상 통합 메모리를 갖춘 Mac뿐입니다. 그 상한선조차 서버급 하드웨어용으로 제공되는 가장 큰 오픈 웨이트 모델에는 한참 못 미칩니다.',
          '**공유되고 중앙에서 관리되는 배포를 원하는 팀이나 조직.** Private LLM은 관리 콘솔, 공유 라이선스 관리, 팀 청구 기능이 없는 단일 사용자, 단일 기기용 소비자 앱입니다 — 조직은 대신 자체 호스팅되는 서버 측 로컬 LLM 인프라를 고려해야 합니다.',
          '**앱의 소스 코드를 직접 감사하려는 독자.** Private LLM은 클로즈드소스입니다. 독립적인 코드 검토가 중요하다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) 같은 오픈소스 대안을 통해 동작을 직접 검증할 수 있습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Private LLM은 가격이 얼마입니까?',
            a: 'Private LLM은 Apple App Store에서 [4.99달러 일회성 구매](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860)로 제공되며, 본 리뷰를 위해 2026-09-05에 확인했습니다. 현재 App Store 페이지에는 구독이나 앱 내 구매 항목이 없습니다. App Store 가격은 지역에 따라 다를 수 있고 시간이 지나면서 변경될 수 있으므로 구매 전 현재 가격을 확인하십시오.',
          },
          {
            q: 'Private LLM은 Android나 Windows에서 사용할 수 있습니까?',
            a: 'Google Play, Microsoft Store, 어떤 Linux 패키지 저장소에도 공식 버전이 없습니다. Private LLM은 iPhone, iPad, Mac을 위해 특별히 제작되었습니다. 특정 시점에 Play 스토어 외부에서 비공식 베타 APK가 유통된 적은 있지만, 이는 개발사의 주요 지원 출시 채널에 포함되지 않으므로 본 리뷰는 Android를 지원되지 않는 것으로 취급합니다.',
          },
          {
            q: 'Private LLM은 누가 개발합니까?',
            a: 'Private LLM은 [Numen Technologies Limited](https://privatellm.app/en)가 개발하며, 이 회사는 자사 웹사이트에서 스스로를 벤처 캐피털 투자를 받지 않은 소규모 두 명의 엔지니어 팀이라고 소개합니다.',
          },
          {
            q: 'OmniQuant란 무엇이며, Private LLM은 왜 이를 사용합니까?',
            a: 'OmniQuant는 더 단순한 round-to-nearest(RTN) 방식 대신 보정 데이터에 맞춰 양자화 범위를 조정하는 최적화 기반 양자화 방식입니다. Private LLM은 일부 모델에서 OmniQuant와 GPTQ를 함께 사용합니다. 개발사는 이것이 동일한 비트 폭에서 RTN 양자화보다 모델의 원본 출력 품질을 더 많이 보존한다고 밝히고 있습니다. 이는 개발사 자체의 기술적 주장이며, PromptQuorum이 Private LLM의 구체적인 모델 파일에 대해 독립적으로 벤치마크한 것은 아닙니다.',
          },
          {
            q: 'Private LLM은 완전히 오프라인으로 작동합니까?',
            a: '네, 모델을 다운로드한 후에는 그렇습니다. 이 앱은 모델이나 앱 업데이트를 다운로드할 때만 인터넷 연결이 필요합니다. 이후에는 채팅과 문법 교정, 요약 같은 macOS 전용 서비스가 네트워크 연결 없이 작동합니다.',
          },
          {
            q: 'Private LLM은 개인 데이터를 수집합니까?',
            a: '이 App Store 페이지에 대한 Apple의 개인정보 보호 라벨에는 개발사가 앱에서 어떤 데이터도 수집하지 않는다고 명시되어 있습니다. 사용에 계정이나 로그인이 필요하지 않습니다. 본 리뷰는 앱의 클로즈드소스 코드를 독립적으로 감사한 것이 아니라 App Store 개인정보 보호 라벨에 근거합니다.',
          },
          {
            q: 'Private LLM은 iCloud를 통해 기기 간 채팅 기록을 동기화합니까?',
            a: '이는 개발사의 공개 FAQ에 문서화되어 있지 않습니다. 본 리뷰는 대화의 iCloud 동기화가 존재한다고 가정하지 않고 확인되지 않은 것으로 취급합니다 — 기기 간 채팅 연속성에 의존하기 전에 앱 내에서 현재 동작을 직접 확인하십시오.',
          },
          {
            q: 'Private LLM으로 iPhone에서 어떤 모델을 실행할 수 있습니까?',
            a: '개발사 자체 안내에 따르면 대부분의 iPhone은 30억~40억 매개변수 모델(예: Llama 3.2 3B 또는 Qwen3 4B)을 무리 없이 실행할 수 있으며, iPhone 15 Pro 이상은 Llama 3.1 8B 같은 80억 매개변수 모델을 처리할 수 있습니다. 이는 개발사의 권장 사항이며 독립적으로 벤치마크된 결과가 아닙니다 — 실제 성능은 양자화 수준과 사용 가능한 RAM에 따라 달라집니다.',
          },
          {
            q: 'Private LLM은 PocketPal AI와 비교하면 어떻습니까?',
            a: 'Private LLM은 유료(4.99달러), 클로즈드소스, Apple 전용 앱으로, 140개 이상의 모델로 구성된 선별 라이브러리와 OmniQuant/GPTQ 양자화를 갖추고 있습니다. [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)는 무료이자 오픈소스이며, iPhone/iPad에서 실행되고 Android도 일부 지원하며, 선별된 목록에서 고르는 대신 임의의 GGUF 파일을 가져올 수 있습니다. 유지 관리되는 일회성 구매 경험과 폭넓은 내장 모델 라이브러리를 원한다면 Private LLM을, 무료이며 감사 가능하고 더 수동적인 구성을 원한다면 PocketPal AI를 선택하십시오.',
          },
          {
            q: 'Private LLM을 한 번 구매하면 여러 기기나 가족 구성원을 커버할 수 있습니까?',
            a: '네. 4.99달러 구매는 구매에 사용한 Apple ID에 대해 iPhone, iPad, Mac을 커버하며, Apple의 가족 공유를 이용하면 동일한 가족 공유 그룹 내 최대 6명까지 이 한 번의 구매를 확장할 수 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Private LLM은 이 사이트에서 다루는 모바일 로컬 AI 앱 중에서도 문서화가 더 잘 되어 있는 앱으로서 제 자리를 차지하고 있습니다. App Store에서 직접 확인된 명확한 4.99달러 일회성 가격, 140개가 넘는 오픈소스 모델로 구성된 선별 라이브러리, 그리고 막연한 "모바일에 최적화됨" 주장이 아니라 구체적이고 이름이 붙은 양자화 방식(OmniQuant와 GPTQ)을 갖추고 있습니다. 개발사 자체 릴리스 노트는 2023년 6월 출시 이후 3년간의 지속적인 업데이트를 보여주는데, 이는 이 카테고리의 여러 소규모 앱보다 눈에 띄게 긴 실적입니다. 트레이드오프도 마찬가지로 명확합니다: Apple 전용이며, 무료가 아니고, 모델 목록은 임의의 커스텀 GGUF 가져오기에 완전히 열려 있는 것이 아니라 선별되어 있으며, 클로즈드소스이기 때문에 "데이터 수집 없음"이라는 주장은 독립적인 코드 검토가 아니라 App Store 개인정보 보호 라벨에 의존합니다. Apple 기기 전반에서 유지 관리되는 선별된 일회성 구매 앱을 원하는 독자라면 구매해야 하며, Android/Windows/Linux 사용자, 무료 옵션을 원하는 독자, 또는 소스 코드를 직접 감사하고 싶은 독자라면 대신 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)로 시작해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Private LLM](https://apps.apple.com/us/app/private-llm-local-ai-chat/id6448106860) — 가격, 플랫폼 호환성, 개인정보 보호 라벨, 평점, 버전 이력.',
          '[Private LLM 공식 웹사이트](https://privatellm.app/en) — 제품 개요, 가격 모델, 개인정보 보호 관련 주장.',
          '[Private LLM FAQ](https://privatellm.app/en/faq) — 지원 모델, 양자화 방식, 하드웨어 요구 사항, 가족 공유, Siri/단축어 연동.',
          '[Private LLM 릴리스 노트](https://privatellm.app/en/release-notes) — 2023년 6월부터 2026년 7월까지의 버전 이력과 기능 이정표.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 수동 GGUF 가져오기를 지원하는 무료 오픈소스 대안.',
          '[2026년 iPhone 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — Private LLM, PocketPal AI, Locally AI를 포함한 전체 iPhone 앱 총정리.',
          '[Enclave AI 리뷰](/ko/power-local-llm/enclave-ai-review) — 비교할 수 있는 또 다른 온디바이스 AI 앱.',
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — Apple MLX 기반의 무료 대안.',
          '[Chatty-mini 리뷰](/ko/power-local-llm/chatty-mini-review) — 비교를 위한, 규모가 더 작고 문서화가 부족한 Android 전용 대안.',
          '[Arbiter Local AI Chat 리뷰](/ko/power-local-llm/arbiter-local-ai-chat-review) — 이 사이트에서 다루는 또 다른 로컬 채팅 앱.',
          '[로컬 LLM 소프트웨어 전체 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 모든 플랫폼에 걸친 로컬 LLM 도구의 더 폭넓은 디렉터리.',
        ],
      },
    },
  },
}
