// Chapper Review: AI & LM Studio Client for iPhone, iPad, and Mac
// Slug: chapper-review
// Companion to: pocketpal-ai-review, private-llm-review, backyard-ai-review-local-roleplay-2026,
// sillytavern-vs-agnai-vs-risuai-roleplay, best-local-llm-apps-iphone-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chapper-review-hero-en.webp',
    title: 'Chapper Review (2026): AI & LM Studio Client for iPhone, iPad, and Mac',
    seoTitle: 'Chapper Review 2026: LM Studio Client for iPhone & Mac',
    intro:
      'Chapper, made by [Prevolut Ltd](https://prevolut.uk/products/chapper/), is a native iPhone, iPad, and Mac app for chatting with local and self-hosted AI models. It is free to download with a 20-conversation limit, and unlocks fully with a one-time [Chapper Pro purchase of $9.99](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — with true on-device inference (running a model directly on the device instead of connecting to a server) sold as a separate $4.99 in-app purchase, per the current App Store listing. Chapper\'s primary design is as a polished client for [LM Studio](https://lmstudio.ai/), [Ollama](https://ollama.com/), llama.cpp server, and any OpenAI-compatible API endpoint — point it at a server running on your Mac or PC and chat from your phone — with on-device MLX and Apple Foundation Models support layered on top. This review checks that split pricing model, the app\'s small early review base (3.3 out of 5 from 8 ratings on the App Store as of this review), and how it compares to fully on-device, no-server-required apps like [PocketPal AI](/power-local-llm/pocketpal-ai-review) and [Private LLM](/power-local-llm/private-llm-review).',
    metaDescription:
      'Chapper review 2026: free with a 20-chat limit, $9.99 Pro one-time purchase, $4.99 on-device inference add-on. iPhone/iPad/Mac LM Studio and Ollama client — pricing, privacy, and alternatives.',
    twitterDescription:
      'Chapper review 2026: an iPhone/iPad/Mac app for chatting with LM Studio, Ollama, and OpenAI-compatible endpoints, with on-device inference sold as a separate add-on. Pricing, privacy, and how it compares to PocketPal AI and Private LLM.',
    audience:
      'iPhone, iPad, and Mac users who run LM Studio or Ollama on a computer and want a native mobile client, or who are deciding between Chapper\'s split free/Pro/on-device pricing and fully on-device apps like PocketPal AI or Private LLM.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Chapper review',
    targetKeywords: [
      'chapper review',
      'chapper app iphone',
      'chapper ai lm studio client',
      'chapper pro price',
      'chapper on device inference',
      'lm studio client iphone',
      'ollama client iphone ipad',
      'chapper vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama', 'Qwen', 'Gemma', 'Mistral', 'Apple Foundation Models'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iPadOS 17+)', 'Apple Silicon Mac (M1 or later)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Chapper is a free-to-try, $9.99-Pro iPhone, iPad, and Mac app by [Prevolut Ltd](https://prevolut.uk/products/chapper/) built primarily as a client for LM Studio, Ollama, llama.cpp server, and OpenAI-compatible endpoints, with true on-device model inference sold as a separate $4.99 add-on.** The free tier caps you at 20 conversations; Chapper Pro removes that cap and unlocks advanced sampling controls, export formats, personas, MCP tools, long-term memory, and iCloud sync, per the developer\'s own site. Readers who want to run a model entirely on their phone with no separate purchase or server setup should compare it with [PocketPal AI](/power-local-llm/pocketpal-ai-review), which is free and on-device by default.',
    quickAnswerTop: {
      en: {
        question: 'Is Chapper the same as running an AI model fully on your iPhone?',
        answer:
          'Not by default. Chapper is primarily a client that connects your iPhone, iPad, or Mac to LM Studio, Ollama, llama.cpp server, or any OpenAI-compatible endpoint running on another machine. True on-device inference is a separate $4.99 in-app purchase on top of the app itself, which is free with a 20-conversation cap or $9.99 for Chapper Pro.',
        bullets: [
          'Free tier caps conversations at 20; Chapper Pro is a $9.99 one-time purchase.',
          'On-device local inference is a separate $4.99 in-app purchase per the App Store listing.',
          'Core backends: LM Studio, Ollama, llama.cpp server, and OpenAI-compatible APIs.',
          'iPhone, iPad, Mac (Apple Silicon), and Apple Vision Pro only — no Android or Windows app.',
          'Developer states no accounts and no third-party tracking; chats stay on-device unless iCloud sync is enabled.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Chapper Is', anchor: 'what-is-chapper' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Pricing: Free Tier, Pro, and the On-Device Add-On', anchor: 'pricing' },
      { label: 'Supported Backends and Models', anchor: 'models-and-backends' },
      { label: 'Platforms: iPhone, iPad, Mac, and Vision Pro', anchor: 'platforms' },
      { label: 'Privacy: What Chapper Does and Does Not Collect', anchor: 'privacy' },
      { label: 'Company and Version History', anchor: 'history' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Chapper vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Chapper', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Chapper', anchor: 'who-should-not-use' },
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
            text: 'Chapper is a free-with-limits, $9.99-Pro iPhone/iPad/Mac app by Prevolut Ltd built primarily as a client for LM Studio, Ollama, llama.cpp server, and OpenAI-compatible endpoints, with true on-device model inference sold as a separate $4.99 add-on.',
          },
          {
            type: 'plain-terms',
            text: 'Think of Chapper first as a remote-control app for AI models running on your Mac or PC (through LM Studio or Ollama), and second as an on-device chat app if you pay extra to unlock local inference — it is not a single-purchase, fully on-device app the way some competitors are.',
          },
        ],
        items: [
          'Price: free with a 20-conversation cap; [Chapper Pro is $9.99](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) one-time; on-device local inference is a separate $4.99 in-app purchase, per the current App Store listing.',
          'Platforms: iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon), and Apple Vision Pro (visionOS 1.0+) — no Android or Windows app.',
          'Developer: [Prevolut Ltd](https://prevolut.uk/products/chapper/), a UK-registered company (Companies House No. 17058766) — unrelated to the Revolut banking app despite the similar name.',
          'Backends: works natively with LM Studio, Ollama, llama.cpp server, and any OpenAI-compatible API; on-device support uses Apple\'s MLX framework and Apple Foundation Models where available.',
          'Features: MCP tool integration, a sandboxed "C.A.S.H." terminal workflow tool, custom personas, structured JSON output, multi-format export (TXT, PDF, HTML, Markdown, JSON, CSV, XML), text-to-speech, and a raw API request inspector.',
          'Privacy: the developer states no accounts are required and no third-party tracking is used; chats stay on-device unless iCloud sync or a remote server connection is enabled.',
          'Reviews are thin: 3.3 out of 5 stars from 8 ratings on the App Store as of this review — too small a sample to draw strong conclusions from.',
          'Version 1.3.1 (App Store listing, dated August 6, 2026) is the current release; the app appears to have launched on the App Store during 2026, based on its version numbering and App Store ID.',
        ],
      },
      whatIsChapper: {
        id: 'what-is-chapper',
        title: 'What Chapper Is',
        content: [
          '**Chapper is a native Apple app, listed on the App Store as "Chapper: AI & LM Studio Client," built to connect iPhone, iPad, and Mac to AI models — either running on-device or on a server you control.** Its core identity, reflected in its own App Store name, is as a client for [LM Studio](https://lmstudio.ai/): you run a model on a Mac or PC using LM Studio, Ollama, or a llama.cpp server, and Chapper gives you a native mobile interface to chat with it from your phone or tablet.',
          'It is developed by [Prevolut Ltd](https://prevolut.uk/products/chapper/), a company registered in England and Wales (Companies House number 17058766). The name is similar to the Revolut banking app, but the two are unrelated companies — Chapper\'s developer is a separate, smaller entity focused specifically on this AI client.',
          'On-device inference — running a model directly on the phone or Mac with no server involved — is also supported, using Apple\'s MLX framework and, where available, Apple\'s own Foundation Models. However, per the current App Store in-app purchase list, that capability is sold as a separate "On Device Local Inference" purchase rather than bundled into the base app or the Pro tier automatically. Readers who want an app that is on-device by default, with no separate unlock, should weigh that against fully local apps like [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private LLM](/power-local-llm/private-llm-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Getting started with Chapper differs depending on whether you plan to connect to a server or run a model on-device.** No account creation is required either way.',
        ],
        numberedItems: [
          {
            title: 'Download the app',
            whyItMatters: 'Get [Chapper from the Apple App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) for free. The free tier lets you try the app with a 20-conversation limit before deciding whether to buy Pro.',
          },
          {
            title: 'Decide: server-based or on-device',
            whyItMatters: 'If you already run [LM Studio](https://lmstudio.ai/) or [Ollama](https://ollama.com/) on a Mac or PC, connect Chapper to that server\'s address for the fastest path to a working chat. If you want the model running directly on your phone with no separate computer, you need the additional $4.99 "On Device Local Inference" in-app purchase.',
          },
          {
            title: 'Connect a backend or pick a model',
            whyItMatters: 'For server mode, point Chapper at your LM Studio, Ollama, llama.cpp server, or OpenAI-compatible endpoint\'s address. For on-device mode, choose from the models supported through Apple\'s MLX framework and, where available, Apple\'s Foundation Models.',
          },
          {
            title: 'Decide on Pro',
            whyItMatters: 'The free tier\'s 20-conversation cap is enough to judge whether the app fits your workflow. [Chapper Pro ($9.99, one-time)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) removes the cap and adds personas, MCP tools, long-term memory, all export formats, and iCloud sync, per the developer\'s own feature list.',
          },
          {
            title: 'Optional: enable iCloud sync',
            whyItMatters: 'If you want conversations to carry across your iPhone, iPad, and Mac, iCloud sync is opt-in and end-to-end encrypted, per the developer\'s privacy page — it is off by default.',
          },
        ],
        note: 'Exact in-app purchase pricing, feature gating between Pro and the on-device add-on, and supported model lists can change between App Store updates. Confirm current specifics directly in the app or on [chapper.app](https://chapper.app/) before purchasing.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing: Free Tier, Pro, and the On-Device Add-On',
        itemHeadings: true,
        content: [
          '**Chapper uses a three-tier pricing structure that is more layered than most apps in this category.** The base app is free to download, a one-time Chapper Pro purchase unlocks most advanced features, and true on-device model inference is priced separately again. These figures were verified against the [App Store listing](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) and [chapper.app](https://chapper.app/) for this review.',
        ],
        columns: ['Tier', 'Price', 'What it unlocks'],
        rows: [
          {
            'Tier': 'Free',
            'Price': '$0',
            'What it unlocks': 'Core chat features, capped at 20 conversations',
          },
          {
            'Tier': 'Chapper Pro',
            'Price': '$9.99 (one-time)',
            'What it unlocks': 'Unlimited conversations, advanced sampling controls, all export formats, personas, MCP tools, long-term memory, analytics, custom app icons, iCloud sync',
          },
          {
            'Tier': 'On Device Local Inference',
            'Price': '$4.99 (one-time, separate from Pro)',
            'What it unlocks': 'Running models directly on-device via Apple MLX / Foundation Models, instead of connecting to LM Studio, Ollama, or another server',
          },
          {
            'Tier': '"Tea" tips',
            'Price': '$0.99–$44.99',
            'What it unlocks': 'Optional one-time tips to the developer; no functional unlock',
          },
        ],
        note: 'Prevolut Ltd\'s own site describes Chapper Pro as "no subscription, no hidden fees," with every future Pro feature included automatically once purchased. App Store prices can change and vary by region — confirm current pricing on the [App Store listing](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) before buying. Verified for this review on 2026-09-06.',
      },
      modelsAndBackends: {
        id: 'models-and-backends',
        title: 'Supported Backends and Models',
        content: [
          '**Chapper\'s primary integration surface is remote backends, not a curated on-device model library.** Per the developer\'s own site, it "works natively with LM Studio, Ollama, llama.cpp server, and any OpenAI-compatible API" — you can point Chapper at any endpoint speaking that protocol, including a self-hosted server on your own network.',
          'For on-device use (the separate $4.99 add-on), the app supports models through Apple\'s **MLX** framework, a machine-learning framework built for Apple Silicon, and, where the operating system provides it, **Apple Foundation Models** — Apple\'s own on-device model made available to third-party apps on supported hardware and OS versions. Neither the App Store listing nor the developer\'s site publishes a fixed, named list of on-device models the way some competing apps do (Private LLM\'s 140+ curated model library, for example); this review treats the on-device model selection as narrower and more dependent on Apple\'s own MLX/Foundation Models ecosystem than on a large curated GGUF catalog.',
          'Because model quality and speed for the server-based path depend entirely on what you run in LM Studio or Ollama on your own machine, Chapper itself does not set the ceiling on model capability the way a fully on-device app does — it is a transport and interface layer, with your own hardware doing the actual inference.',
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
            'What to expect': 'Requires iOS 17.0 or later, per the App Store listing.',
            'Important note': 'Server-based chat (LM Studio/Ollama) needs a network path to that server; on-device chat needs the separate $4.99 add-on.',
          },
          {
            'Platform': 'iPad',
            'What to expect': 'Requires iPadOS 17.0 or later; same app and feature set as iPhone.',
            'Important note': 'No iPad-specific layout details are published beyond standard App Store compatibility.',
          },
          {
            'Platform': 'Mac',
            'What to expect': 'Requires macOS 14.0 or later on an Apple M1 chip or newer, per the App Store listing.',
            'Important note': 'A Mac is also the most common LM Studio/Ollama host, so many users will run the server and the Chapper client on the same machine, or run the server on a Mac and the client on iPhone/iPad.',
          },
          {
            'Platform': 'Apple Vision Pro',
            'What to expect': 'App Store listing shows visionOS 1.0+ compatibility.',
            'Important note': 'This review did not independently test the Vision Pro experience; treat it as App Store-listed compatibility, not a hands-on verified feature.',
          },
          {
            'Platform': 'Android, Windows, Linux',
            'What to expect': 'No official app on Google Play, the Microsoft Store, or any Linux package repository.',
            'Important note': 'Android and Windows users who want a similar LM Studio/Ollama-connected mobile client should look at [RikkaHub](https://github.com/rikkahub/rikkahub) (Android) or [AnythingLLM Mobile](https://anythingllm.com/mobile) (Android, iOS planned).',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy: What Chapper Does and Does Not Collect',
        content: [
          '**Prevolut Ltd\'s own site states Chapper requires no account and uses "no third-party tracking,"** and that conversations are stored on-device unless a reader explicitly enables iCloud sync or connects to their own external server. Because the app\'s core design routes chat through backends you control (your own LM Studio/Ollama server, or on-device inference), the amount of data that ever reaches Prevolut\'s own infrastructure is limited by that architecture, not just by policy.',
        ],
        items: [
          '**No account required.** You can download and use Chapper, including making in-app purchases through Apple\'s standard purchase flow, without creating a Chapper-specific profile.',
          '**No third-party tracking, per the developer\'s own site copy.** This review relies on that stated claim rather than an independent audit of the closed-source app\'s network traffic.',
          '**iCloud sync is opt-in and end-to-end encrypted, per the developer.** It is off by default; enabling it is the one documented case where chat data leaves the local device, and it goes to the reader\'s own iCloud account, not to Prevolut\'s servers.',
          '**Server connections send data to whatever endpoint you configure.** If you connect Chapper to a third-party or cloud-hosted OpenAI-compatible API instead of your own local LM Studio/Ollama server, your prompts go to that endpoint under that endpoint\'s own privacy terms — this is a property of the client/server model in general, not specific to Chapper.',
          '**Privacy policy and terms are published** at [prevolut.uk/products/chapper/privacy](https://prevolut.uk/products/chapper/privacy) and [prevolut.uk/products/chapper/terms](https://prevolut.uk/products/chapper/terms) — read these directly for the current, complete legal terms rather than relying solely on marketing copy.',
        ],
      },
      history: {
        id: 'history',
        title: 'Company and Version History',
        content: [
          '**Chapper is developed by [Prevolut Ltd](https://prevolut.uk/products/chapper/), a company registered in England and Wales under Companies House number 17058766.** Public App Store data does not give an exact first-release date, but the app\'s relatively high App Store ID (6760984679) and its early version numbering point to a 2026 launch.',
        ],
        items: [
          '**Version 1.1.0.** Described by the developer as one of the biggest Chapper releases to date; exact date not published in sources available for this review.',
          '**Version 1.2.0.** A major update centered on the "C.A.S.H." sandboxed terminal workflow feature, plus quality improvements.',
          '**Version 1.3.1 (August 6, 2026).** The current App Store release as of this review, adding a first look at an "Agent Mode," quicker model switching, a larger AI answer field, and a round of small fixes.',
        ],
        note: 'Version history is sourced from the app\'s public App Store "What\'s New" listing. This review could not independently confirm the app\'s original 1.0 launch date — treat the 2026 launch estimate as inferred from version numbering and App Store ID, not a confirmed date from the developer.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free tier to try before buying',
            'What it means in real use': 'You can test the interface and a server connection before spending anything.',
            'Limitation / caveat': 'Capped at 20 conversations, and on-device inference is not available at all on the free tier.',
          },
          {
            'Benefit': 'Broad backend compatibility',
            'What it means in real use': 'Works with LM Studio, Ollama, llama.cpp server, and any OpenAI-compatible endpoint — flexible for anyone already running a local server.',
            'Limitation / caveat': 'Model quality and speed depend entirely on the server you connect to, not on the app itself.',
          },
          {
            'Benefit': 'Feature-dense Pro tier',
            'What it means in real use': 'MCP tools, personas, long-term memory, structured JSON output, and multi-format export cover advanced use cases most competitors skip.',
            'Limitation / caveat': 'That breadth adds a $9.99 purchase on top of the base app, and the on-device path costs an additional $4.99.',
          },
          {
            'Benefit': 'No account required',
            'What it means in real use': 'Install and start chatting without signing up for anything.',
            'Limitation / caveat': 'Because the app is closed-source, the "no third-party tracking" claim rests on the developer\'s own statement rather than independent code review.',
          },
          {
            'Benefit': 'Native, polished Apple app',
            'What it means in real use': 'Runs as a first-class citizen across iPhone, iPad, Mac, and Vision Pro with a single purchase.',
            'Limitation / caveat': 'Apple-only — no Android or Windows version, unlike some server-client competitors.',
          },
          {
            'Benefit': 'Split pricing is flexible',
            'What it means in real use': 'Users who only need the server-client feature can skip the $4.99 on-device add-on entirely.',
            'Limitation / caveat': 'The three-tier structure (free/Pro/on-device) is less transparent at a glance than a single flat price, and easy to misread as "$9.99 gets you everything."',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Chapper vs. Alternatives',
        columns: ['App', 'Platforms', 'Price', 'Model access', 'Key difference'],
        rows: [
          {
            'App': 'Chapper',
            'Platforms': 'iPhone/iPad/Mac/Vision Pro (Apple only)',
            'Price': 'Free (20-chat cap) / $9.99 Pro / +$4.99 on-device',
            'Model access': 'LM Studio, Ollama, llama.cpp, OpenAI-compatible APIs; on-device via MLX/Foundation Models (paid add-on)',
            'Key difference': 'Primarily a server client; on-device inference is a separate purchase',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iPhone/iPad, with some Android support',
            'Price': 'Free, open source',
            'Model access': 'Any GGUF file, fully on-device by default',
            'Key difference': 'Free, open-source, and on-device from the start — no server or add-on needed',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Price': '$4.99 one-time purchase',
            'Model access': '140+ curated on-device models with OmniQuant/GPTQ quantization',
            'Key difference': 'Single flat price, on-device only, no server-client mode',
          },
          {
            'App': '[Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            'Platforms': 'See full review for current platform support',
            'Price': 'See current listing',
            'Model access': 'See full review for current model support',
            'Key difference': 'Roleplay/character-chat focused desktop-first app, unlike Chapper\'s general-purpose client',
          },
          {
            'App': '[SillyTavern vs. Agnai vs. RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
            'Platforms': 'Browser-based front ends, self-hosted',
            'Price': 'Free, open source',
            'Model access': 'Connect to any local or cloud backend, character-card focused',
            'Key difference': 'Roleplay/character-card ecosystem rather than a native mobile app',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Platforms': 'iOS/Mac (open source, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Price': 'Free, open source',
            'Model access': 'Custom GGUF models via llama.cpp/ggml, on-device by default',
            'Key difference': 'Was pulled from the App Store and TestFlight in August 2025 per its own GitHub README — verify current availability',
          },
          {
            'App': '[Layla](https://www.layla-network.ai/)',
            'Platforms': 'iOS and Android',
            'Price': '$19.99 plus in-app purchases',
            'Model access': 'Custom GGUF models; character/roleplay focus with 100+ voices',
            'Key difference': 'Cross-platform, character/roleplay-oriented, priced higher than Chapper',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Platforms': 'Cross-platform Flutter app (Android primary)',
            'Price': 'Free, open source (MIT license)',
            'Model access': 'Any GGUF file via llama.cpp; also connects to Anthropic, DeepSeek, Ollama, Mistral, OpenAI remotely',
            'Key difference': 'Free, fully open source, and combines local + remote access like Chapper does, but cross-platform',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Platforms': 'Android',
            'Price': 'Free, open source',
            'Model access': 'Multiple cloud provider APIs plus local execution',
            'Key difference': 'Android-only equivalent to Chapper\'s multi-backend client model',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Platforms': 'Android (iOS planned)',
            'Price': 'Free, open source',
            'Model access': 'Runs GGUF models on-device via Cactus Compute, or pairs with a self-hosted AnythingLLM server',
            'Key difference': 'Designed to pair with a self-hosted AnythingLLM workspace specifically, not a general multi-backend client',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently — verify current specifics on each app\'s own listing before deciding. LLM Farm\'s App Store availability in particular should be re-checked, since its own GitHub README described it as pulled from the App Store as of August 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Chapper',
        items: [
          '**Readers who already run LM Studio or Ollama on a Mac or PC.** Chapper\'s core value is a native mobile front end for a server you already have running — this is its strongest, best-verified use case.',
          '**Apple-only users who want one app for both server-based and on-device chat.** If you are willing to pay for both Pro and the on-device add-on, Chapper covers a wider range of workflows than a single-purpose app.',
          '**Power users who want MCP tools, personas, and structured JSON output.** The Pro tier\'s feature list is denser than most apps in this category, useful for readers who want to script or automate around their local AI setup.',
          '**Readers comfortable evaluating a small, early-stage app.** With only 8 ratings on the App Store as of this review, Chapper is early in its public track record — acceptable for readers who like trying newer tools, less so for readers who prioritize a long, proven history.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Chapper',
        items: [
          '**Readers who want a single-purchase, fully on-device app with no server setup.** Chapper\'s on-device path costs an additional $4.99 on top of Pro and is not the app\'s primary design — [PocketPal AI](/power-local-llm/pocketpal-ai-review) (free) or [Private LLM](/power-local-llm/private-llm-review) ($4.99 flat) fit that need more directly.',
          '**Android, Windows, or Linux users.** Chapper has no official app on any of these platforms — consider [RikkaHub](https://github.com/rikkahub/rikkahub), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid), or [AnythingLLM Mobile](https://anythingllm.com/mobile) instead.',
          '**Readers who want a large, named, curated on-device model catalog.** Neither the App Store listing nor the developer\'s site publishes a fixed model list comparable to Private LLM\'s 140+ curated models; on-device selection depends on Apple\'s MLX/Foundation Models ecosystem instead.',
          '**Readers who want a long public track record before trusting an app with local infrastructure access.** With an early-2026 App Store presence and 8 total ratings, Chapper has not yet built the multi-year history that Private LLM (launched 2023) or established open-source projects have.',
          '**Readers who specifically want roleplay or character-card features.** Chapper is a general-purpose chat/API client, not a character-chat app — [Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay-2026) or the tools compared in [SillyTavern vs. Agnai vs. RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) are built specifically for that use case.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much does Chapper cost?',
            a: 'Chapper is free to download with a 20-conversation limit. [Chapper Pro is a $9.99 one-time purchase](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) that removes the cap and unlocks most advanced features. On-device local inference is a separate $4.99 in-app purchase, on top of Pro, per the current App Store listing. Verified for this review on 2026-09-06 — App Store prices can vary by region and change over time.',
          },
          {
            q: 'Does Chapper run AI models entirely on my iPhone?',
            a: 'Only if you buy the separate $4.99 "On Device Local Inference" in-app purchase, which uses Apple\'s MLX framework and, where available, Apple Foundation Models. By default and in its core design, Chapper is a client that connects to LM Studio, Ollama, llama.cpp server, or an OpenAI-compatible endpoint running elsewhere.',
          },
          {
            q: 'Who develops Chapper?',
            a: 'Chapper is developed by [Prevolut Ltd](https://prevolut.uk/products/chapper/), a company registered in England and Wales (Companies House number 17058766). It is unrelated to the Revolut banking app despite the similar name.',
          },
          {
            q: 'Is Chapper available on Android or Windows?',
            a: 'No. Chapper is built for iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon), and Apple Vision Pro only. There is no official Android, Windows, or Linux version.',
          },
          {
            q: 'What backends does Chapper support?',
            a: 'Per the developer\'s own site, Chapper "works natively with LM Studio, Ollama, llama.cpp server, and any OpenAI-compatible API." You can also point it at a self-hosted server on your own network.',
          },
          {
            q: 'Does Chapper require an account?',
            a: 'No. The developer states no account is required, and Chapper is used without any sign-up — including for in-app purchases, which go through Apple\'s standard purchase flow.',
          },
          {
            q: 'Does Chapper collect my data?',
            a: 'The developer\'s own site states no third-party tracking is used and that conversations stay on-device unless iCloud sync is enabled or you connect to your own external server. This review relies on that stated claim; Chapper is closed-source, so it has not been independently code-audited for this review.',
          },
          {
            q: 'How does Chapper compare to PocketPal AI?',
            a: 'PocketPal AI is free, open source, and on-device by default with no server required. Chapper is primarily a client for LM Studio, Ollama, and OpenAI-compatible servers, with true on-device inference sold as a separate $4.99 add-on on top of a $9.99 Pro purchase. Choose PocketPal AI if you want a single free, fully on-device app; choose Chapper if you already run a local server and want a native, feature-dense mobile front end for it.',
          },
          {
            q: 'Is Chapper well-reviewed?',
            a: 'As of this review, Chapper has 3.3 out of 5 stars from 8 ratings on the App Store — a very small sample that should not be treated as a strong signal in either direction. The app appears to be relatively new, based on its version numbering and App Store ID.',
          },
          {
            q: 'What is the "C.A.S.H." feature in Chapper?',
            a: 'C.A.S.H. is a sandboxed terminal/shell workflow tool included in Chapper, introduced as the centerpiece of version 1.2.0. The developer\'s materials describe it as a way to run sandboxed workflows from within the app; this review has not independently tested its full capabilities or security boundaries.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Chapper is a capable, feature-dense app for readers who already run LM Studio or Ollama and want a native Apple client for it — the MCP tools, personas, structured output, and multi-format export in the Pro tier go further than most apps in this category. Its pricing is also its biggest point of friction: a free tier capped at 20 conversations, a $9.99 Pro purchase, and a further $4.99 charge just to run models fully on-device add up to a more layered cost structure than the flat one-time prices of PocketPal AI (free) or Private LLM ($4.99). Combined with a thin public track record (8 App Store ratings, an apparent 2026 launch, and no confirmed 1.0 release date in the sources available for this review), Chapper reads as a promising but early-stage app rather than an established one. Readers who already have a local server running and want a polished way to reach it from iPhone or iPad should try the free tier first; readers who want a single-purchase, fully on-device app should start with [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private LLM](/power-local-llm/private-llm-review) instead.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Chapper on the App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — price, in-app purchases, platform compatibility, ratings, and version notes.',
          '[Chapper official site](https://chapper.app/) — feature list, backend compatibility, and privacy claims.',
          '[Prevolut Ltd — Chapper product page](https://prevolut.uk/products/chapper/) — pricing model, free-tier limits, and company details.',
          '[Chapper privacy policy](https://prevolut.uk/products/chapper/privacy) and [terms of service](https://prevolut.uk/products/chapper/terms) — legal terms in full.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source, on-device-by-default alternative.',
          '[Private LLM Review](/power-local-llm/private-llm-review) — a $4.99 flat-price, fully on-device Apple app with 140+ curated models.',
          '[Backyard AI Review](/power-local-llm/backyard-ai-review-local-roleplay-2026) — a roleplay-focused local AI app, for a different use case than Chapper.',
          '[SillyTavern vs. Agnai vs. RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — a comparison of self-hosted roleplay front ends.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the full iPhone app roundup for context on where Chapper fits.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chapper-review-hero-de.webp',
    title: 'Chapper im Test (2026): KI- und LM-Studio-Client für iPhone, iPad und Mac',
    seoTitle: 'Chapper Test 2026: LM-Studio-Client für iPhone & Mac',
    intro:
      'Chapper, entwickelt von [Prevolut Ltd](https://prevolut.uk/products/chapper/), ist eine native App für iPhone, iPad und Mac zum Chatten mit lokalen und selbst gehosteten KI-Modellen. Der Download ist kostenlos mit einem Limit von 20 Unterhaltungen und wird durch den einmaligen Kauf von [Chapper Pro für 9,99 $](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) vollständig freigeschaltet — echte On-Device-Inferenz (ein Modell direkt auf dem Gerät statt auf einem Server auszuführen) wird laut aktuellem App-Store-Eintrag als separater In-App-Kauf für 4,99 $ verkauft. App-Store-Preise können je nach Region variieren; prüfen Sie vor dem Kauf den aktuellen Preis im deutschen App Store. Chappers Kernkonzept ist ein ausgereifter Client für [LM Studio](https://lmstudio.ai/), [Ollama](https://ollama.com/), llama.cpp-Server und jeden OpenAI-kompatiblen API-Endpunkt — Sie richten ihn auf einen Server auf Ihrem Mac oder PC und chatten dann vom Smartphone aus —, ergänzt um On-Device-Unterstützung über MLX und Apple Foundation Models. Dieser Test prüft dieses gestaffelte Preismodell, die noch kleine Bewertungsbasis der App (3,3 von 5 bei 8 Bewertungen im App Store, Stand dieses Tests) und den Vergleich mit vollständig On-Device-Apps ohne Server wie [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) und [Private LLM](/de/power-local-llm/private-llm-review).',
    metaDescription:
      'Chapper Test 2026: kostenlos mit 20-Chat-Limit, 9,99 $ Pro-Einmalkauf, 4,99 $ On-Device-Zusatzkauf. LM-Studio- und Ollama-Client für iPhone/iPad/Mac — Preise, Datenschutz und Alternativen.',
    twitterDescription:
      'Chapper Test 2026: eine iPhone/iPad/Mac-App zum Chatten mit LM Studio, Ollama und OpenAI-kompatiblen Endpunkten, On-Device-Inferenz als separater Zusatzkauf. Preise, Datenschutz und Vergleich mit PocketPal AI und Private LLM.',
    audience:
      'iPhone-, iPad- und Mac-Nutzer, die LM Studio oder Ollama auf einem Computer betreiben und einen nativen mobilen Client suchen, oder die zwischen Chappers gestaffeltem Preismodell (kostenlos/Pro/On-Device) und vollständig On-Device-Apps wie PocketPal AI oder Private LLM entscheiden.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Chapper review',
    targetKeywords: [
      'chapper review',
      'chapper app iphone',
      'chapper ai lm studio client',
      'chapper pro price',
      'chapper on device inference',
      'lm studio client iphone',
      'ollama client iphone ipad',
      'chapper vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama', 'Qwen', 'Gemma', 'Mistral', 'Apple Foundation Models'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iPadOS 17+)', 'Apple-Silicon-Mac (M1 oder neuer)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Chapper ist eine kostenlos testbare App mit 9,99-$-Pro-Stufe für iPhone, iPad und Mac von [Prevolut Ltd](https://prevolut.uk/products/chapper/), die in erster Linie als Client für LM Studio, Ollama, llama.cpp-Server und OpenAI-kompatible Endpunkte konzipiert ist — echte On-Device-Modellausführung wird als separater Zusatzkauf für 4,99 $ verkauft.** Die kostenlose Stufe begrenzt Sie auf 20 Unterhaltungen; Chapper Pro entfernt dieses Limit und schaltet laut eigener Angabe des Entwicklers erweiterte Sampling-Optionen, Exportformate, Personas, MCP-Tools und iCloud-Sync frei. Leser, die ein Modell vollständig auf dem Smartphone ausführen möchten — ohne separaten Kauf oder Server-Setup —, sollten dies mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen, das kostenlos und standardmäßig On-Device ist.',
    quickAnswerTop: {
      de: {
        question: 'Ist Chapper dasselbe wie ein KI-Modell vollständig auf dem iPhone auszuführen?',
        answer:
          'Standardmäßig nicht. Chapper ist in erster Linie ein Client, der Ihr iPhone, iPad oder Mac mit LM Studio, Ollama, einem llama.cpp-Server oder jedem OpenAI-kompatiblen Endpunkt auf einem anderen Gerät verbindet. Echte On-Device-Inferenz ist ein separater In-App-Kauf für 4,99 $ zusätzlich zur App selbst, die kostenlos mit einem Limit von 20 Unterhaltungen oder für 9,99 $ als Chapper Pro erhältlich ist.',
        bullets: [
          'Kostenlose Stufe begrenzt Unterhaltungen auf 20; Chapper Pro kostet 9,99 $ als Einmalkauf.',
          'On-Device-Inferenz ist laut App-Store-Eintrag ein separater In-App-Kauf für 4,99 $.',
          'Kern-Backends: LM Studio, Ollama, llama.cpp-Server und OpenAI-kompatible APIs.',
          'Nur iPhone, iPad, Mac (Apple Silicon) und Apple Vision Pro — keine Android- oder Windows-App.',
          'Der Entwickler gibt an, dass keine Konten und kein Tracking durch Dritte verwendet werden; Chats bleiben auf dem Gerät, sofern iCloud-Sync nicht aktiviert ist.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Chapper ist', anchor: 'what-is-chapper' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Preise: Kostenlose Stufe, Pro und der On-Device-Zusatzkauf', anchor: 'pricing' },
      { label: 'Unterstützte Backends und Modelle', anchor: 'models-and-backends' },
      { label: 'Plattformen: iPhone, iPad, Mac und Vision Pro', anchor: 'platforms' },
      { label: 'Datenschutz: Was Chapper sammelt und was nicht', anchor: 'privacy' },
      { label: 'Unternehmen und Versionsgeschichte', anchor: 'history' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Chapper im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen sich Chapper eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich Chapper nicht eignet', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chapper ist eine kostenlos testbare App mit 9,99-$-Pro-Stufe für iPhone/iPad/Mac von Prevolut Ltd, primär als Client für LM Studio, Ollama, llama.cpp-Server und OpenAI-kompatible Endpunkte konzipiert, mit echter On-Device-Modellausführung als separatem Zusatzkauf für 4,99 $.',
          },
          {
            type: 'plain-terms',
            text: 'Verstehen Sie Chapper zunächst als Fernbedienungs-App für KI-Modelle, die auf Ihrem Mac oder PC laufen (über LM Studio oder Ollama), und erst in zweiter Linie als On-Device-Chat-App, wenn Sie zusätzlich für die lokale Ausführung bezahlen — es ist keine App mit einem einzigen Kauf, die durchgängig On-Device läuft, wie manche Konkurrenten.',
          },
        ],
        items: [
          'Preis: kostenlos mit 20-Unterhaltungen-Limit; [Chapper Pro kostet 9,99 $](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) als Einmalkauf; On-Device-Inferenz ist laut aktuellem App-Store-Eintrag ein separater In-App-Kauf für 4,99 $.',
          'Plattformen: iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon) und Apple Vision Pro (visionOS 1.0+) — keine Android- oder Windows-App.',
          'Entwickler: [Prevolut Ltd](https://prevolut.uk/products/chapper/), ein in Großbritannien registriertes Unternehmen (Companies House Nr. 17058766) — nicht verwandt mit der Banking-App Revolut trotz des ähnlichen Namens.',
          'Backends: funktioniert nativ mit LM Studio, Ollama, llama.cpp-Server und jeder OpenAI-kompatiblen API; On-Device-Unterstützung nutzt Apples MLX-Framework und, wo verfügbar, Apple Foundation Models.',
          'Funktionen: MCP-Tool-Integration, ein sandboxed „C.A.S.H."-Terminal-Workflow-Tool, benutzerdefinierte Personas, strukturierte JSON-Ausgabe, Export in mehreren Formaten (TXT, PDF, HTML, Markdown, JSON, CSV, XML), Text-zu-Sprache und ein Inspector für rohe API-Anfragen.',
          'Datenschutz: Der Entwickler gibt an, dass keine Konten erforderlich sind und kein Tracking durch Dritte stattfindet; Chats bleiben auf dem Gerät, sofern iCloud-Sync oder eine Server-Verbindung nicht aktiviert ist.',
          'Die Bewertungsbasis ist noch dünn: 3,3 von 5 Sternen bei 8 Bewertungen im App Store, Stand dieses Tests — eine sehr kleine Stichprobe, aus der keine starken Schlüsse gezogen werden sollten.',
          'Version 1.3.1 (App-Store-Eintrag, datiert auf den 6. August 2026) ist die aktuelle Version; die App scheint laut Versionsnummerierung und App-Store-ID im Jahr 2026 im App Store gestartet zu sein.',
        ],
      },
      whatIsChapper: {
        id: 'what-is-chapper',
        title: 'Was Chapper ist',
        content: [
          '**Chapper ist eine native Apple-App, im App Store als „Chapper: AI & LM Studio Client" gelistet, die iPhone, iPad und Mac mit KI-Modellen verbindet — entweder On-Device oder auf einem Server, den Sie selbst kontrollieren.** Ihre Kernidentität, die sich im eigenen App-Store-Namen widerspiegelt, ist die eines Clients für [LM Studio](https://lmstudio.ai/): Sie betreiben ein Modell auf einem Mac oder PC mit LM Studio, Ollama oder einem llama.cpp-Server, und Chapper liefert eine native mobile Oberfläche, um vom Smartphone oder Tablet aus damit zu chatten.',
          'Entwickelt wird die App von [Prevolut Ltd](https://prevolut.uk/products/chapper/), einem in England und Wales registrierten Unternehmen (Companies-House-Nummer 17058766). Der Name ähnelt der Banking-App Revolut, doch beide sind unabhängige Unternehmen — Chappers Entwickler ist eine separate, kleinere Einheit, die sich speziell auf diesen KI-Client konzentriert.',
          'On-Device-Inferenz — ein Modell direkt auf dem Smartphone oder Mac ohne Server auszuführen — wird ebenfalls unterstützt, über Apples MLX-Framework und, wo verfügbar, Apples eigene Foundation Models. Laut aktueller In-App-Kaufliste im App Store wird diese Fähigkeit jedoch als separater Kauf „On Device Local Inference" verkauft, statt automatisch in der Basis-App oder der Pro-Stufe enthalten zu sein. Leser, die eine App wünschen, die standardmäßig On-Device läuft, ohne separate Freischaltung, sollten dies gegen vollständig lokale Apps wie [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private LLM](/de/power-local-llm/private-llm-review) abwägen.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Der Einstieg in Chapper unterscheidet sich je nachdem, ob Sie sich mit einem Server verbinden oder ein Modell On-Device ausführen möchten.** In beiden Fällen ist keine Kontoerstellung erforderlich.',
        ],
        numberedItems: [
          {
            title: 'App herunterladen',
            whyItMatters: 'Laden Sie [Chapper kostenlos aus dem Apple App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679). Die kostenlose Stufe erlaubt es, die App mit einem Limit von 20 Unterhaltungen zu testen, bevor Sie sich für Pro entscheiden.',
          },
          {
            title: 'Entscheiden: server-basiert oder On-Device',
            whyItMatters: 'Wenn Sie bereits [LM Studio](https://lmstudio.ai/) oder [Ollama](https://ollama.com/) auf einem Mac oder PC betreiben, verbinden Sie Chapper mit der Adresse dieses Servers für den schnellsten Weg zu einem funktionierenden Chat. Wenn das Modell direkt auf Ihrem Smartphone laufen soll, ohne separaten Computer, benötigen Sie den zusätzlichen In-App-Kauf „On Device Local Inference" für 4,99 $.',
          },
          {
            title: 'Backend verbinden oder Modell wählen',
            whyItMatters: 'Für den Server-Modus richten Sie Chapper auf die Adresse Ihres LM-Studio-, Ollama-, llama.cpp-Servers oder OpenAI-kompatiblen Endpunkts. Für den On-Device-Modus wählen Sie aus den Modellen, die über Apples MLX-Framework und, wo verfügbar, Apples Foundation Models unterstützt werden.',
          },
          {
            title: 'Über Pro entscheiden',
            whyItMatters: 'Das Limit von 20 Unterhaltungen der kostenlosen Stufe reicht aus, um zu beurteilen, ob die App zu Ihrem Workflow passt. [Chapper Pro (9,99 $, einmalig)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) entfernt das Limit und fügt laut eigener Funktionsliste des Entwicklers Personas, MCP-Tools, Langzeitgedächtnis, alle Exportformate und iCloud-Sync hinzu.',
          },
          {
            title: 'Optional: iCloud-Sync aktivieren',
            whyItMatters: 'Wenn Unterhaltungen zwischen iPhone, iPad und Mac übertragen werden sollen, ist iCloud-Sync laut Datenschutzseite des Entwicklers optional und Ende-zu-Ende-verschlüsselt — standardmäßig ist sie deaktiviert.',
          },
        ],
        note: 'Genaue In-App-Kaufpreise, die Aufteilung der Funktionen zwischen Pro und dem On-Device-Zusatzkauf sowie unterstützte Modelllisten können sich zwischen App-Store-Updates ändern. Prüfen Sie die aktuellen Details direkt in der App oder auf [chapper.app](https://chapper.app/), bevor Sie kaufen.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise: Kostenlose Stufe, Pro und der On-Device-Zusatzkauf',
        itemHeadings: true,
        content: [
          '**Chapper nutzt ein dreistufiges Preismodell, das gestaffelter ist als bei den meisten Apps dieser Kategorie.** Die Basis-App ist kostenlos, ein einmaliger Kauf von Chapper Pro schaltet die meisten erweiterten Funktionen frei, und echte On-Device-Modellausführung wird nochmals separat bepreist. Diese Angaben wurden für diesen Test gegen den [App-Store-Eintrag](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) und [chapper.app](https://chapper.app/) geprüft.',
        ],
        columns: ['Stufe', 'Preis', 'Was freigeschaltet wird'],
        rows: [
          {
            'Stufe': 'Kostenlos',
            'Preis': '0 $',
            'Was freigeschaltet wird': 'Kern-Chat-Funktionen, begrenzt auf 20 Unterhaltungen',
          },
          {
            'Stufe': 'Chapper Pro',
            'Preis': '9,99 $ (einmalig)',
            'Was freigeschaltet wird': 'Unbegrenzte Unterhaltungen, erweiterte Sampling-Optionen, alle Exportformate, Personas, MCP-Tools, Langzeitgedächtnis, Analytics, benutzerdefinierte App-Symbole, iCloud-Sync',
          },
          {
            'Stufe': 'On Device Local Inference',
            'Preis': '4,99 $ (einmalig, separat von Pro)',
            'Was freigeschaltet wird': 'Modelle direkt On-Device über Apple MLX / Foundation Models auszuführen, statt sich mit LM Studio, Ollama oder einem anderen Server zu verbinden',
          },
          {
            'Stufe': '„Tea"-Trinkgelder',
            'Preis': '0,99–44,99 $',
            'Was freigeschaltet wird': 'Optionale einmalige Trinkgelder an den Entwickler; keine funktionale Freischaltung',
          },
        ],
        note: 'Prevolut Ltds eigene Website beschreibt Chapper Pro als „kein Abo, keine versteckten Kosten", wobei jede künftige Pro-Funktion nach dem Kauf automatisch enthalten ist. App-Store-Preise können sich ändern und je nach Region variieren — prüfen Sie den aktuellen Preis im [App-Store-Eintrag](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679), bevor Sie kaufen. Für diesen Test geprüft am 06.09.2026.',
      },
      modelsAndBackends: {
        id: 'models-and-backends',
        title: 'Unterstützte Backends und Modelle',
        content: [
          '**Chappers primäre Integrationsfläche sind Remote-Backends, keine kuratierte On-Device-Modellbibliothek.** Laut eigener Website des Entwicklers „funktioniert es nativ mit LM Studio, Ollama, llama.cpp-Server und jeder OpenAI-kompatiblen API" — Sie können Chapper auf jeden Endpunkt richten, der dieses Protokoll spricht, einschließlich eines selbst gehosteten Servers in Ihrem eigenen Netzwerk.',
          'Für die On-Device-Nutzung (der separate Zusatzkauf für 4,99 $) unterstützt die App Modelle über Apples **MLX**-Framework, ein für Apple Silicon entwickeltes Machine-Learning-Framework, sowie, wo das Betriebssystem es bereitstellt, **Apple Foundation Models** — Apples eigenes On-Device-Modell, das Drittanbieter-Apps auf unterstützter Hardware und OS-Version zur Verfügung gestellt wird. Weder der App-Store-Eintrag noch die Website des Entwicklers veröffentlichen eine feste, benannte Liste von On-Device-Modellen, wie es manche konkurrierenden Apps tun (etwa Private LLMs kuratierte Bibliothek mit 140+ Modellen); dieser Test behandelt die On-Device-Modellauswahl als enger und stärker von Apples eigenem MLX/Foundation-Models-Ökosystem abhängig als von einem großen kuratierten GGUF-Katalog.',
          'Da Modellqualität und -geschwindigkeit im server-basierten Pfad vollständig davon abhängen, was Sie in LM Studio oder Ollama auf Ihrem eigenen Gerät betreiben, setzt Chapper selbst nicht die Obergrenze der Modellfähigkeiten, wie es eine vollständig On-Device-App tun würde — es ist eine Transport- und Oberflächenschicht, wobei Ihre eigene Hardware die eigentliche Inferenz übernimmt.',
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
            'Was Sie erwartet': 'Erfordert laut App-Store-Eintrag iOS 17.0 oder neuer.',
            'Wichtiger Hinweis': 'Server-basierter Chat (LM Studio/Ollama) benötigt eine Netzwerkverbindung zu diesem Server; On-Device-Chat benötigt den separaten Zusatzkauf für 4,99 $.',
          },
          {
            'Plattform': 'iPad',
            'Was Sie erwartet': 'Erfordert iPadOS 17.0 oder neuer; gleiche App und gleicher Funktionsumfang wie iPhone.',
            'Wichtiger Hinweis': 'Über die Standard-App-Store-Kompatibilität hinaus werden keine iPad-spezifischen Layout-Details veröffentlicht.',
          },
          {
            'Plattform': 'Mac',
            'Was Sie erwartet': 'Erfordert laut App-Store-Eintrag macOS 14.0 oder neuer auf einem Apple-M1-Chip oder neuer.',
            'Wichtiger Hinweis': 'Ein Mac ist auch der häufigste Host für LM Studio/Ollama, sodass viele Nutzer Server und Chapper-Client auf demselben Gerät betreiben oder den Server auf einem Mac und den Client auf iPhone/iPad laufen lassen.',
          },
          {
            'Plattform': 'Apple Vision Pro',
            'Was Sie erwartet': 'App-Store-Eintrag zeigt Kompatibilität mit visionOS 1.0+.',
            'Wichtiger Hinweis': 'Dieser Test hat die Vision-Pro-Erfahrung nicht eigenständig geprüft; betrachten Sie dies als im App Store gelistete Kompatibilität, nicht als praktisch verifizierte Funktion.',
          },
          {
            'Plattform': 'Android, Windows, Linux',
            'Was Sie erwartet': 'Keine offizielle App bei Google Play, im Microsoft Store oder in einem Linux-Paket-Repository.',
            'Wichtiger Hinweis': 'Android- und Windows-Nutzer, die einen ähnlichen, mit LM Studio/Ollama verbundenen mobilen Client suchen, sollten [RikkaHub](https://github.com/rikkahub/rikkahub) (Android) oder [AnythingLLM Mobile](https://anythingllm.com/mobile) (Android, iOS geplant) prüfen.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz: Was Chapper sammelt und was nicht',
        content: [
          '**Prevolut Ltds eigene Website gibt an, dass Chapper kein Konto erfordert und „kein Tracking durch Dritte" verwendet**, und dass Unterhaltungen auf dem Gerät gespeichert werden, sofern ein Leser nicht ausdrücklich iCloud-Sync aktiviert oder sich mit einem eigenen externen Server verbindet. Da die Kernarchitektur der App Chats über von Ihnen kontrollierte Backends leitet (Ihr eigener LM-Studio-/Ollama-Server oder On-Device-Inferenz), wird die Menge an Daten, die jemals Prevoluts eigene Infrastruktur erreicht, durch diese Architektur begrenzt — nicht nur durch eine Richtlinie.',
        ],
        items: [
          '**Kein Konto erforderlich.** Sie können Chapper herunterladen und nutzen, einschließlich In-App-Käufen über Apples Standard-Kaufablauf, ohne ein Chapper-spezifisches Profil zu erstellen.',
          '**Kein Tracking durch Dritte, laut eigener Angabe des Entwicklers.** Dieser Test stützt sich auf diese Angabe, nicht auf eine unabhängige Prüfung des Netzwerkverkehrs der Closed-Source-App.',
          '**iCloud-Sync ist optional und laut Entwickler Ende-zu-Ende-verschlüsselt.** Sie ist standardmäßig deaktiviert; ihre Aktivierung ist der einzige dokumentierte Fall, in dem Chat-Daten das lokale Gerät verlassen — und zwar an das eigene iCloud-Konto des Lesers, nicht an Prevoluts Server.',
          '**Server-Verbindungen senden Daten an den von Ihnen konfigurierten Endpunkt.** Verbinden Sie Chapper mit einer Drittanbieter- oder cloud-gehosteten OpenAI-kompatiblen API statt Ihrem eigenen lokalen LM-Studio-/Ollama-Server, gehen Ihre Prompts an diesen Endpunkt gemäß dessen eigenen Datenschutzbedingungen — dies ist eine allgemeine Eigenschaft des Client-Server-Modells, nicht spezifisch für Chapper.',
          '**Datenschutzrichtlinie und Nutzungsbedingungen sind veröffentlicht** unter [prevolut.uk/products/chapper/privacy](https://prevolut.uk/products/chapper/privacy) und [prevolut.uk/products/chapper/terms](https://prevolut.uk/products/chapper/terms) — lesen Sie diese direkt für die aktuellen, vollständigen rechtlichen Bedingungen, statt sich allein auf Marketingtexte zu verlassen.',
        ],
      },
      history: {
        id: 'history',
        title: 'Unternehmen und Versionsgeschichte',
        content: [
          '**Chapper wird von [Prevolut Ltd](https://prevolut.uk/products/chapper/) entwickelt, einem in England und Wales registrierten Unternehmen unter der Companies-House-Nummer 17058766.** Öffentliche App-Store-Daten nennen kein genaues Erstveröffentlichungsdatum, doch die relativ hohe App-Store-ID der App (6760984679) und ihre frühe Versionsnummerierung deuten auf einen Start im Jahr 2026 hin.',
        ],
        items: [
          '**Version 1.1.0.** Vom Entwickler als eines der bisher größten Chapper-Releases beschrieben; genaues Datum in den für diesen Test verfügbaren Quellen nicht veröffentlicht.',
          '**Version 1.2.0.** Ein großes Update rund um die Sandbox-Terminal-Workflow-Funktion „C.A.S.H." plus Qualitätsverbesserungen.',
          '**Version 1.3.1 (6. August 2026).** Die aktuelle App-Store-Version zum Zeitpunkt dieses Tests, mit einem ersten Blick auf einen „Agent Mode", schnellerem Modellwechsel, einem größeren KI-Antwortfeld und mehreren kleinen Fehlerbehebungen.',
        ],
        note: 'Die Versionsgeschichte stammt aus der öffentlichen „Neuigkeiten"-Liste der App im App Store. Dieser Test konnte das ursprüngliche 1.0-Startdatum der App nicht unabhängig bestätigen — betrachten Sie die Schätzung eines Starts im Jahr 2026 als aus Versionsnummerierung und App-Store-ID abgeleitet, nicht als vom Entwickler bestätigtes Datum.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das im echten Einsatz bedeutet', 'Einschränkung / Vorbehalt'],
        rows: [
          {
            'Vorteil': 'Kostenlose Stufe zum Testen',
            'Was das im echten Einsatz bedeutet': 'Sie können die Oberfläche und eine Server-Verbindung testen, bevor Sie Geld ausgeben.',
            'Einschränkung / Vorbehalt': 'Begrenzt auf 20 Unterhaltungen, und On-Device-Inferenz ist in der kostenlosen Stufe überhaupt nicht verfügbar.',
          },
          {
            'Vorteil': 'Breite Backend-Kompatibilität',
            'Was das im echten Einsatz bedeutet': 'Funktioniert mit LM Studio, Ollama, llama.cpp-Server und jedem OpenAI-kompatiblen Endpunkt — flexibel für alle, die bereits einen lokalen Server betreiben.',
            'Einschränkung / Vorbehalt': 'Modellqualität und -geschwindigkeit hängen vollständig vom verbundenen Server ab, nicht von der App selbst.',
          },
          {
            'Vorteil': 'Funktionsreiche Pro-Stufe',
            'Was das im echten Einsatz bedeutet': 'MCP-Tools, Personas, Langzeitgedächtnis, strukturierte JSON-Ausgabe und Export in mehreren Formaten decken fortgeschrittene Anwendungsfälle ab, die die meisten Konkurrenten auslassen.',
            'Einschränkung / Vorbehalt': 'Dieser Funktionsumfang bedeutet einen zusätzlichen Kauf für 9,99 $ zur Basis-App, und der On-Device-Pfad kostet weitere 4,99 $.',
          },
          {
            'Vorteil': 'Kein Konto erforderlich',
            'Was das im echten Einsatz bedeutet': 'Installieren und sofort chatten, ohne sich für irgendetwas anzumelden.',
            'Einschränkung / Vorbehalt': 'Da die App Closed Source ist, beruht die Aussage „kein Tracking durch Dritte" auf der eigenen Angabe des Entwicklers, nicht auf unabhängiger Code-Prüfung.',
          },
          {
            'Vorteil': 'Native, ausgereifte Apple-App',
            'Was das im echten Einsatz bedeutet': 'Läuft als vollwertige App auf iPhone, iPad, Mac und Vision Pro mit einem einzigen Kauf.',
            'Einschränkung / Vorbehalt': 'Nur für Apple — keine Android- oder Windows-Version, anders als manche Server-Client-Konkurrenten.',
          },
          {
            'Vorteil': 'Gestaffelte Preise sind flexibel',
            'Was das im echten Einsatz bedeutet': 'Nutzer, die nur die Server-Client-Funktion benötigen, können den On-Device-Zusatzkauf für 4,99 $ vollständig überspringen.',
            'Einschränkung / Vorbehalt': 'Das dreistufige Modell (kostenlos/Pro/On-Device) ist auf den ersten Blick weniger transparent als ein einzelner Festpreis und wird leicht als „9,99 $ für alles" missverstanden.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Chapper im Vergleich zu Alternativen',
        columns: ['App', 'Plattformen', 'Preis', 'Modellzugriff', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': 'Chapper',
            'Plattformen': 'iPhone/iPad/Mac/Vision Pro (nur Apple)',
            'Preis': 'Kostenlos (20-Chat-Limit) / 9,99 $ Pro / +4,99 $ On-Device',
            'Modellzugriff': 'LM Studio, Ollama, llama.cpp, OpenAI-kompatible APIs; On-Device über MLX/Foundation Models (Zusatzkauf)',
            'Wesentlicher Unterschied': 'Primär ein Server-Client; On-Device-Inferenz ist ein separater Kauf',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iPhone/iPad, mit teilweiser Android-Unterstützung',
            'Preis': 'Kostenlos, Open Source',
            'Modellzugriff': 'Jede GGUF-Datei, standardmäßig vollständig On-Device',
            'Wesentlicher Unterschied': 'Kostenlos, quelloffen und von Anfang an On-Device — kein Server oder Zusatzkauf nötig',
          },
          {
            'App': '[Private LLM](/de/power-local-llm/private-llm-review)',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Preis': '4,99 $ Einmalkauf',
            'Modellzugriff': '140+ kuratierte On-Device-Modelle mit OmniQuant/GPTQ-Quantisierung',
            'Wesentlicher Unterschied': 'Einzelner Festpreis, nur On-Device, kein Server-Client-Modus',
          },
          {
            'App': '[Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            'Plattformen': 'Siehe vollständigen Test für aktuelle Plattformunterstützung',
            'Preis': 'Siehe aktuellen Eintrag',
            'Modellzugriff': 'Siehe vollständigen Test für aktuelle Modellunterstützung',
            'Wesentlicher Unterschied': 'Auf Rollenspiel/Charakter-Chat fokussierte Desktop-App, anders als Chappers universeller Client',
          },
          {
            'App': '[SillyTavern vs. Agnai vs. RisuAI](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
            'Plattformen': 'Browser-basierte Frontends, selbst gehostet',
            'Preis': 'Kostenlos, Open Source',
            'Modellzugriff': 'Verbindung zu jedem lokalen oder Cloud-Backend, fokussiert auf Charakterkarten',
            'Wesentlicher Unterschied': 'Rollenspiel-/Charakterkarten-Ökosystem statt einer nativen mobilen App',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Plattformen': 'iOS/Mac (Open Source, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Preis': 'Kostenlos, Open Source',
            'Modellzugriff': 'Eigene GGUF-Modelle über llama.cpp/ggml, standardmäßig On-Device',
            'Wesentlicher Unterschied': 'Laut eigenem GitHub-README im August 2025 aus dem App Store und TestFlight entfernt — aktuelle Verfügbarkeit prüfen',
          },
          {
            'App': '[Layla](https://www.layla-network.ai/)',
            'Plattformen': 'iOS und Android',
            'Preis': '19,99 $ plus In-App-Käufe',
            'Modellzugriff': 'Eigene GGUF-Modelle; Charakter-/Rollenspiel-Fokus mit 100+ Stimmen',
            'Wesentlicher Unterschied': 'Plattformübergreifend, charakter-/rollenspielorientiert, höher bepreist als Chapper',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plattformen': 'Plattformübergreifende Flutter-App (primär Android)',
            'Preis': 'Kostenlos, Open Source (MIT-Lizenz)',
            'Modellzugriff': 'Jede GGUF-Datei über llama.cpp; verbindet sich auch remote mit Anthropic, DeepSeek, Ollama, Mistral, OpenAI',
            'Wesentlicher Unterschied': 'Kostenlos, vollständig quelloffen und kombiniert lokalen + Remote-Zugriff wie Chapper, aber plattformübergreifend',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plattformen': 'Android',
            'Preis': 'Kostenlos, Open Source',
            'Modellzugriff': 'Mehrere Cloud-Anbieter-APIs plus lokale Ausführung',
            'Wesentlicher Unterschied': 'Android-only-Äquivalent zu Chappers Multi-Backend-Client-Modell',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plattformen': 'Android (iOS geplant)',
            'Preis': 'Kostenlos, Open Source',
            'Modellzugriff': 'Führt GGUF-Modelle On-Device über Cactus Compute aus oder verbindet sich mit einem selbst gehosteten AnythingLLM-Server',
            'Wesentlicher Unterschied': 'Speziell für die Verbindung mit einem selbst gehosteten AnythingLLM-Workspace konzipiert, kein allgemeiner Multi-Backend-Client',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsdetails von Drittanbieter-Apps ändern sich häufig — prüfen Sie aktuelle Angaben im jeweiligen Eintrag, bevor Sie sich entscheiden. Besonders die App-Store-Verfügbarkeit von LLM Farm sollte erneut geprüft werden, da das eigene GitHub-README sie als seit August 2025 aus dem App Store entfernt beschreibt.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich Chapper eignet',
        items: [
          '**Leser, die bereits LM Studio oder Ollama auf einem Mac oder PC betreiben.** Chappers Kernwert ist ein natives mobiles Frontend für einen bereits laufenden Server — das ist ihr stärkster, am besten belegter Anwendungsfall.',
          '**Nur-Apple-Nutzer, die eine App für sowohl server-basierten als auch On-Device-Chat wünschen.** Wer bereit ist, sowohl für Pro als auch den On-Device-Zusatzkauf zu bezahlen, deckt mit Chapper ein breiteres Spektrum an Workflows ab als mit einer Einzweck-App.',
          '**Power-User, die MCP-Tools, Personas und strukturierte JSON-Ausgabe wünschen.** Die Funktionsliste der Pro-Stufe ist dichter als bei den meisten Apps dieser Kategorie — nützlich für Leser, die ihr lokales KI-Setup skripten oder automatisieren möchten.',
          '**Leser, die bereit sind, eine kleine, junge App zu bewerten.** Mit nur 8 Bewertungen im App Store, Stand dieses Tests, steht Chapper noch am Anfang seiner öffentlichen Historie — akzeptabel für Leser, die gerne neuere Tools ausprobieren, weniger geeignet für Leser, die eine lange, bewährte Geschichte priorisieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich Chapper nicht eignet',
        items: [
          '**Leser, die eine App mit einem einzigen Kauf wünschen, die vollständig On-Device läuft, ohne Server-Setup.** Chappers On-Device-Pfad kostet zusätzlich 4,99 $ zu Pro und ist nicht das primäre Konzept der App — [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) (kostenlos) oder [Private LLM](/de/power-local-llm/private-llm-review) (4,99 $ Festpreis) erfüllen diesen Bedarf direkter.',
          '**Android-, Windows- oder Linux-Nutzer.** Chapper hat auf keiner dieser Plattformen eine offizielle App — erwägen Sie stattdessen [RikkaHub](https://github.com/rikkahub/rikkahub), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) oder [AnythingLLM Mobile](https://anythingllm.com/mobile).',
          '**Leser, die einen großen, benannten, kuratierten On-Device-Modellkatalog wünschen.** Weder der App-Store-Eintrag noch die Website des Entwicklers veröffentlichen eine feste Modellliste vergleichbar mit Private LLMs 140+ kuratierten Modellen; die On-Device-Auswahl hängt stattdessen von Apples MLX/Foundation-Models-Ökosystem ab.',
          '**Leser, die vor der Vergabe von Zugriff auf lokale Infrastruktur eine lange öffentliche Erfolgsgeschichte wünschen.** Mit einer erst 2026 begonnenen App-Store-Präsenz und insgesamt 8 Bewertungen hat Chapper noch nicht die mehrjährige Geschichte aufgebaut, die Private LLM (gestartet 2023) oder etablierte Open-Source-Projekte vorweisen.',
          '**Leser, die gezielt Rollenspiel- oder Charakterkarten-Funktionen suchen.** Chapper ist ein universeller Chat-/API-Client, keine Charakter-Chat-App — [Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay-2026) oder die in [SillyTavern vs. Agnai vs. RisuAI](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) verglichenen Tools sind speziell für diesen Anwendungsfall gebaut.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wie viel kostet Chapper?',
            a: 'Chapper ist kostenlos herunterladbar mit einem Limit von 20 Unterhaltungen. [Chapper Pro kostet 9,99 $ als Einmalkauf](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) und entfernt das Limit sowie schaltet die meisten erweiterten Funktionen frei. On-Device-Inferenz ist laut aktuellem App-Store-Eintrag ein separater In-App-Kauf für 4,99 $, zusätzlich zu Pro. Für diesen Test geprüft am 06.09.2026 — App-Store-Preise können je nach Region variieren und sich mit der Zeit ändern.',
          },
          {
            q: 'Führt Chapper KI-Modelle vollständig auf meinem iPhone aus?',
            a: 'Nur, wenn Sie den separaten In-App-Kauf „On Device Local Inference" für 4,99 $ erwerben, der Apples MLX-Framework und, wo verfügbar, Apple Foundation Models nutzt. Standardmäßig und in seinem Kernkonzept ist Chapper ein Client, der sich mit LM Studio, Ollama, einem llama.cpp-Server oder einem anderswo laufenden OpenAI-kompatiblen Endpunkt verbindet.',
          },
          {
            q: 'Wer entwickelt Chapper?',
            a: 'Chapper wird von [Prevolut Ltd](https://prevolut.uk/products/chapper/) entwickelt, einem in England und Wales registrierten Unternehmen (Companies-House-Nummer 17058766). Es ist trotz des ähnlichen Namens nicht mit der Banking-App Revolut verwandt.',
          },
          {
            q: 'Ist Chapper für Android oder Windows verfügbar?',
            a: 'Nein. Chapper ist ausschließlich für iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon) und Apple Vision Pro gebaut. Es gibt keine offizielle Android-, Windows- oder Linux-Version.',
          },
          {
            q: 'Welche Backends unterstützt Chapper?',
            a: 'Laut eigener Website des Entwicklers „funktioniert Chapper nativ mit LM Studio, Ollama, llama.cpp-Server und jeder OpenAI-kompatiblen API". Sie können es auch auf einen selbst gehosteten Server in Ihrem eigenen Netzwerk richten.',
          },
          {
            q: 'Benötigt Chapper ein Konto?',
            a: 'Nein. Der Entwickler gibt an, dass kein Konto erforderlich ist, und Chapper wird ohne jegliche Anmeldung genutzt — auch für In-App-Käufe, die über Apples Standard-Kaufablauf laufen.',
          },
          {
            q: 'Sammelt Chapper meine Daten?',
            a: 'Die eigene Website des Entwicklers gibt an, dass kein Tracking durch Dritte verwendet wird und Unterhaltungen auf dem Gerät bleiben, sofern iCloud-Sync nicht aktiviert oder eine Verbindung zu einem eigenen externen Server hergestellt wird. Dieser Test stützt sich auf diese Angabe; Chapper ist Closed Source und wurde für diesen Test nicht unabhängig code-geprüft.',
          },
          {
            q: 'Wie schneidet Chapper im Vergleich zu PocketPal AI ab?',
            a: 'PocketPal AI ist kostenlos, quelloffen und standardmäßig On-Device ohne benötigten Server. Chapper ist primär ein Client für LM Studio, Ollama und OpenAI-kompatible Server, mit echter On-Device-Inferenz als separatem Zusatzkauf für 4,99 $ zusätzlich zu einem 9,99-$-Pro-Kauf. Wählen Sie PocketPal AI, wenn Sie eine einzelne kostenlose, vollständig On-Device-App möchten; wählen Sie Chapper, wenn Sie bereits einen lokalen Server betreiben und ein natives, funktionsreiches mobiles Frontend dafür wünschen.',
          },
          {
            q: 'Ist Chapper gut bewertet?',
            a: 'Stand dieses Tests hat Chapper 3,3 von 5 Sternen bei 8 Bewertungen im App Store — eine sehr kleine Stichprobe, die nicht als starkes Signal in die eine oder andere Richtung gewertet werden sollte. Laut Versionsnummerierung und App-Store-ID scheint die App relativ neu zu sein.',
          },
          {
            q: 'Was ist die Funktion „C.A.S.H." in Chapper?',
            a: 'C.A.S.H. ist ein in Chapper enthaltenes, sandboxed Terminal-/Shell-Workflow-Tool, das als Kernstück von Version 1.2.0 eingeführt wurde. Die Materialien des Entwicklers beschreiben es als Möglichkeit, sandboxed Workflows direkt aus der App heraus auszuführen; dieser Test hat den vollen Funktionsumfang oder die Sicherheitsgrenzen nicht eigenständig geprüft.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Chapper ist eine leistungsfähige, funktionsreiche App für Leser, die bereits LM Studio oder Ollama betreiben und einen nativen Apple-Client dafür wünschen — die MCP-Tools, Personas, strukturierte Ausgabe und der Mehrformat-Export in der Pro-Stufe gehen weiter als bei den meisten Apps dieser Kategorie. Die Preisgestaltung ist zugleich der größte Reibungspunkt: eine kostenlose Stufe mit einem Limit von 20 Unterhaltungen, ein Kauf von Chapper Pro für 9,99 $ und eine weitere Gebühr von 4,99 $, nur um Modelle vollständig On-Device auszuführen, ergeben eine gestaffeltere Kostenstruktur als die Festpreise von PocketPal AI (kostenlos) oder Private LLM (4,99 $). Zusammen mit einer noch dünnen öffentlichen Erfolgsgeschichte (8 App-Store-Bewertungen, ein offenbarer Start im Jahr 2026 und kein bestätigtes 1.0-Veröffentlichungsdatum in den für diesen Test verfügbaren Quellen) wirkt Chapper eher wie eine vielversprechende, junge App als eine etablierte. Leser, die bereits einen lokalen Server betreiben und eine ausgereifte Möglichkeit suchen, diesen vom iPhone oder iPad aus zu erreichen, sollten zunächst die kostenlose Stufe ausprobieren; Leser, die eine App mit einem einzigen Kauf wünschen, die vollständig On-Device läuft, sollten stattdessen mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private LLM](/de/power-local-llm/private-llm-review) beginnen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Chapper im App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — Preis, In-App-Käufe, Plattformkompatibilität, Bewertungen und Versionshinweise.',
          '[Offizielle Chapper-Website](https://chapper.app/) — Funktionsliste, Backend-Kompatibilität und Datenschutzangaben.',
          '[Prevolut Ltd — Chapper-Produktseite](https://prevolut.uk/products/chapper/) — Preismodell, Limits der kostenlosen Stufe und Unternehmensdetails.',
          '[Chapper-Datenschutzrichtlinie](https://prevolut.uk/products/chapper/privacy) und [Nutzungsbedingungen](https://prevolut.uk/products/chapper/terms) — vollständige rechtliche Bedingungen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal AI Test](/de/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene, standardmäßig On-Device-Alternative.',
          '[Private LLM Test](/de/power-local-llm/private-llm-review) — eine 4,99-$-Festpreis-App, vollständig On-Device mit 140+ kuratierten Modellen.',
          '[Backyard AI Test](/de/power-local-llm/backyard-ai-review-local-roleplay-2026) — eine auf Rollenspiel fokussierte lokale KI-App für einen anderen Anwendungsfall als Chapper.',
          '[SillyTavern vs. Agnai vs. RisuAI](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — ein Vergleich selbst gehosteter Rollenspiel-Frontends.',
          '[Die besten Local-LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — der vollständige iPhone-App-Überblick zur Einordnung von Chapper.',
          '[Das vollständige Local-LLM-Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory) — ein breiteres Verzeichnis von Local-LLM-Tools über alle Plattformen hinweg.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chapper-review-hero-es.webp',
    title: 'Chapper: Análisis (2026): Cliente de IA y LM Studio para iPhone, iPad y Mac',
    seoTitle: 'Chapper 2026: Cliente de LM Studio para iPhone y Mac',
    intro:
      'Chapper, desarrollada por [Prevolut Ltd](https://prevolut.uk/products/chapper/), es una app nativa para iPhone, iPad y Mac para chatear con modelos de IA locales y autoalojados. Es gratuita para descargar con un límite de 20 conversaciones, y se desbloquea por completo con la compra única de [Chapper Pro por 9,99 $](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — la inferencia real en el dispositivo (ejecutar un modelo directamente en el dispositivo en lugar de conectarse a un servidor) se vende como una compra dentro de la app aparte por 4,99 $, según el listado actual de la App Store. Los precios de la App Store pueden variar según la región; confirme el precio actual en la App Store de su país antes de comprar. El diseño principal de Chapper es el de un cliente pulido para [LM Studio](https://lmstudio.ai/), [Ollama](https://ollama.com/), servidor llama.cpp y cualquier endpoint compatible con OpenAI — la apunta a un servidor en su Mac o PC y chatea desde el teléfono —, con soporte adicional en el dispositivo mediante MLX y Apple Foundation Models. Este análisis examina ese modelo de precios escalonado, la todavía pequeña base de reseñas de la app (3,3 de 5 con 8 valoraciones en la App Store al momento de este análisis) y su comparación con apps totalmente en el dispositivo, sin servidor, como [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) y [Private LLM](/es/power-local-llm/private-llm-review).',
    metaDescription:
      'Chapper 2026: gratis con límite de 20 chats, 9,99 $ Pro de pago único, 4,99 $ complemento de inferencia local. Cliente de LM Studio y Ollama para iPhone/iPad/Mac — precios, privacidad y alternativas.',
    twitterDescription:
      'Chapper 2026: una app para iPhone/iPad/Mac para chatear con LM Studio, Ollama y endpoints compatibles con OpenAI, con inferencia en el dispositivo como complemento aparte. Precios, privacidad y comparación con PocketPal AI y Private LLM.',
    audience:
      'Usuarios de iPhone, iPad y Mac que ya ejecutan LM Studio u Ollama en un ordenador y quieren un cliente móvil nativo, o que están decidiendo entre el modelo de precios escalonado de Chapper (gratis/Pro/en el dispositivo) y apps totalmente en el dispositivo como PocketPal AI o Private LLM.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Chapper review',
    targetKeywords: [
      'chapper review',
      'chapper app iphone',
      'chapper ai lm studio client',
      'chapper pro price',
      'chapper on device inference',
      'lm studio client iphone',
      'ollama client iphone ipad',
      'chapper vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama', 'Qwen', 'Gemma', 'Mistral', 'Apple Foundation Models'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iPadOS 17+)', 'Mac con Apple Silicon (M1 o posterior)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Chapper es una app gratuita con nivel de prueba y Pro por 9,99 $ para iPhone, iPad y Mac de [Prevolut Ltd](https://prevolut.uk/products/chapper/), diseñada principalmente como cliente para LM Studio, Ollama, servidor llama.cpp y endpoints compatibles con OpenAI, con inferencia real en el dispositivo vendida como complemento aparte por 4,99 $.** El nivel gratuito limita a 20 conversaciones; Chapper Pro elimina ese límite y, según el propio sitio del desarrollador, desbloquea controles de muestreo avanzados, formatos de exportación, personas y sincronización con iCloud. Los lectores que quieran ejecutar un modelo por completo en su teléfono sin compra ni configuración de servidor por separado deberían comparar con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), que es gratuita y funciona en el dispositivo por defecto.',
    quickAnswerTop: {
      es: {
        question: '¿Chapper es lo mismo que ejecutar un modelo de IA totalmente en el iPhone?',
        answer:
          'No por defecto. Chapper es principalmente un cliente que conecta tu iPhone, iPad o Mac con LM Studio, Ollama, un servidor llama.cpp o cualquier endpoint compatible con OpenAI que se ejecute en otra máquina. La inferencia real en el dispositivo es una compra aparte dentro de la app por 4,99 $, además de la app en sí, que es gratuita con un límite de 20 conversaciones o cuesta 9,99 $ como Chapper Pro.',
        bullets: [
          'El nivel gratuito limita las conversaciones a 20; Chapper Pro cuesta 9,99 $ de pago único.',
          'La inferencia local en el dispositivo es una compra aparte dentro de la app por 4,99 $, según el listado de la App Store.',
          'Backends principales: LM Studio, Ollama, servidor llama.cpp y APIs compatibles con OpenAI.',
          'Solo iPhone, iPad, Mac (Apple Silicon) y Apple Vision Pro — sin app de Android o Windows.',
          'El desarrollador afirma que no hay cuentas ni rastreo de terceros; los chats permanecen en el dispositivo salvo que se active la sincronización con iCloud.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Chapper', anchor: 'what-is-chapper' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Precios: nivel gratuito, Pro y el complemento en el dispositivo', anchor: 'pricing' },
      { label: 'Backends y modelos compatibles', anchor: 'models-and-backends' },
      { label: 'Plataformas: iPhone, iPad, Mac y Vision Pro', anchor: 'platforms' },
      { label: 'Privacidad: qué recopila Chapper y qué no', anchor: 'privacy' },
      { label: 'Historia de la empresa y versiones', anchor: 'history' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Chapper frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'A quién le conviene Chapper', anchor: 'who-should-use' },
      { label: 'A quién no le conviene Chapper', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumen',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chapper es una app gratuita con nivel de prueba y Pro por 9,99 $ para iPhone/iPad/Mac de Prevolut Ltd, diseñada principalmente como cliente para LM Studio, Ollama, servidor llama.cpp y endpoints compatibles con OpenAI, con inferencia real en el dispositivo como complemento aparte por 4,99 $.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa primero en Chapper como una app de control remoto para modelos de IA que se ejecutan en tu Mac o PC (mediante LM Studio u Ollama), y en segundo lugar como una app de chat en el dispositivo si pagas extra para desbloquear la inferencia local — no es una app de una sola compra que funcione en el dispositivo de principio a fin como algunas competidoras.',
          },
        ],
        items: [
          'Precio: gratis con límite de 20 conversaciones; [Chapper Pro cuesta 9,99 $](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) de pago único; la inferencia local en el dispositivo es una compra aparte dentro de la app por 4,99 $, según el listado actual de la App Store.',
          'Plataformas: iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon) y Apple Vision Pro (visionOS 1.0+) — sin app de Android o Windows.',
          'Desarrollador: [Prevolut Ltd](https://prevolut.uk/products/chapper/), una empresa registrada en el Reino Unido (Companies House n.º 17058766) — sin relación con la app bancaria Revolut pese al nombre similar.',
          'Backends: funciona de forma nativa con LM Studio, Ollama, servidor llama.cpp y cualquier API compatible con OpenAI; el soporte en el dispositivo usa el framework MLX de Apple y, cuando está disponible, Apple Foundation Models.',
          'Funciones: integración de herramientas MCP, una herramienta de flujo de trabajo tipo terminal en sandbox llamada "C.A.S.H.", personas personalizadas, salida JSON estructurada, exportación en varios formatos (TXT, PDF, HTML, Markdown, JSON, CSV, XML), texto a voz e inspector de solicitudes API en bruto.',
          'Privacidad: el desarrollador afirma que no se requieren cuentas ni se usa rastreo de terceros; los chats permanecen en el dispositivo salvo que se active la sincronización con iCloud o una conexión a servidor externo.',
          'Las reseñas son escasas: 3,3 de 5 estrellas con 8 valoraciones en la App Store al momento de este análisis — una muestra muy pequeña que no debería tomarse como señal fuerte en ningún sentido.',
          'La versión 1.3.1 (listado de la App Store, fechada el 6 de agosto de 2026) es la actual; la app parece haberse lanzado en la App Store durante 2026, a juzgar por su numeración de versiones y su ID en la App Store.',
        ],
      },
      whatIsChapper: {
        id: 'what-is-chapper',
        title: 'Qué es Chapper',
        content: [
          '**Chapper es una app nativa de Apple, listada en la App Store como "Chapper: AI & LM Studio Client", diseñada para conectar iPhone, iPad y Mac con modelos de IA — ya sea en el dispositivo o en un servidor que tú controlas.** Su identidad principal, reflejada en su propio nombre en la App Store, es la de un cliente para [LM Studio](https://lmstudio.ai/): ejecutas un modelo en un Mac o PC con LM Studio, Ollama o un servidor llama.cpp, y Chapper ofrece una interfaz móvil nativa para chatear con él desde tu teléfono o tablet.',
          'Está desarrollada por [Prevolut Ltd](https://prevolut.uk/products/chapper/), una empresa registrada en Inglaterra y Gales (número de Companies House 17058766). El nombre se parece al de la app bancaria Revolut, pero son empresas independientes — el desarrollador de Chapper es una entidad separada y más pequeña centrada específicamente en este cliente de IA.',
          'La inferencia en el dispositivo — ejecutar un modelo directamente en el teléfono o Mac sin servidor involucrado — también es compatible, usando el framework MLX de Apple y, cuando está disponible, los propios Apple Foundation Models. Sin embargo, según la lista actual de compras dentro de la app en la App Store, esa capacidad se vende como una compra aparte de "On Device Local Inference" en lugar de venir incluida automáticamente en la app base o en el nivel Pro. Los lectores que quieran una app que funcione en el dispositivo por defecto, sin desbloqueo aparte, deberían sopesar esto frente a apps totalmente locales como [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private LLM](/es/power-local-llm/private-llm-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**Empezar con Chapper difiere según si piensas conectarte a un servidor o ejecutar un modelo en el dispositivo.** En ningún caso se requiere crear una cuenta.',
        ],
        numberedItems: [
          {
            title: 'Descarga la app',
            whyItMatters: 'Consigue [Chapper gratis en la App Store de Apple](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679). El nivel gratuito permite probar la app con un límite de 20 conversaciones antes de decidir si comprar Pro.',
          },
          {
            title: 'Decide: basado en servidor o en el dispositivo',
            whyItMatters: 'Si ya usas [LM Studio](https://lmstudio.ai/) u [Ollama](https://ollama.com/) en un Mac o PC, conecta Chapper a la dirección de ese servidor para el camino más rápido a un chat funcional. Si quieres que el modelo se ejecute directamente en tu teléfono sin un ordenador aparte, necesitas la compra adicional dentro de la app de "On Device Local Inference" por 4,99 $.',
          },
          {
            title: 'Conecta un backend o elige un modelo',
            whyItMatters: 'En modo servidor, apunta Chapper a la dirección de tu servidor LM Studio, Ollama, llama.cpp o endpoint compatible con OpenAI. En modo en el dispositivo, elige entre los modelos compatibles a través del framework MLX de Apple y, cuando estén disponibles, los Apple Foundation Models.',
          },
          {
            title: 'Decide sobre Pro',
            whyItMatters: 'El límite de 20 conversaciones del nivel gratuito basta para juzgar si la app encaja con tu flujo de trabajo. [Chapper Pro (9,99 $, pago único)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) elimina el límite y añade personas, herramientas MCP, memoria a largo plazo, todos los formatos de exportación y sincronización con iCloud, según la propia lista de funciones del desarrollador.',
          },
          {
            title: 'Opcional: activa la sincronización con iCloud',
            whyItMatters: 'Si quieres que las conversaciones se mantengan entre tu iPhone, iPad y Mac, la sincronización con iCloud es opcional y está cifrada de extremo a extremo, según la página de privacidad del desarrollador — está desactivada por defecto.',
          },
        ],
        note: 'Los precios exactos de las compras dentro de la app, la separación de funciones entre Pro y el complemento en el dispositivo, y las listas de modelos compatibles pueden cambiar entre actualizaciones de la App Store. Confirma los detalles actuales directamente en la app o en [chapper.app](https://chapper.app/) antes de comprar.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios: nivel gratuito, Pro y el complemento en el dispositivo',
        itemHeadings: true,
        content: [
          '**Chapper usa una estructura de precios de tres niveles, más escalonada que la mayoría de las apps de esta categoría.** La app base es gratuita, una compra única de Chapper Pro desbloquea la mayoría de las funciones avanzadas, y la inferencia real en el dispositivo tiene un precio aparte de nuevo. Estas cifras se verificaron contra el [listado de la App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) y [chapper.app](https://chapper.app/) para este análisis.',
        ],
        columns: ['Nivel', 'Precio', 'Qué desbloquea'],
        rows: [
          {
            'Nivel': 'Gratis',
            'Precio': '0 $',
            'Qué desbloquea': 'Funciones de chat básicas, limitadas a 20 conversaciones',
          },
          {
            'Nivel': 'Chapper Pro',
            'Precio': '9,99 $ (pago único)',
            'Qué desbloquea': 'Conversaciones ilimitadas, controles de muestreo avanzados, todos los formatos de exportación, personas, herramientas MCP, memoria a largo plazo, analíticas, iconos de app personalizados, sincronización con iCloud',
          },
          {
            'Nivel': 'On Device Local Inference',
            'Precio': '4,99 $ (pago único, aparte de Pro)',
            'Qué desbloquea': 'Ejecutar modelos directamente en el dispositivo vía Apple MLX / Foundation Models, en lugar de conectarse a LM Studio, Ollama u otro servidor',
          },
          {
            'Nivel': 'Propinas "Tea"',
            'Precio': '0,99–44,99 $',
            'Qué desbloquea': 'Propinas únicas opcionales al desarrollador; sin desbloqueo funcional',
          },
        ],
        note: 'El propio sitio de Prevolut Ltd describe Chapper Pro como "sin suscripción, sin costes ocultos", con cada futura función Pro incluida automáticamente tras la compra. Los precios de la App Store pueden cambiar y variar según la región — confirma el precio actual en el [listado de la App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) antes de comprar. Verificado para este análisis el 06-09-2026.',
      },
      modelsAndBackends: {
        id: 'models-and-backends',
        title: 'Backends y modelos compatibles',
        content: [
          '**La principal superficie de integración de Chapper son los backends remotos, no una biblioteca curada de modelos en el dispositivo.** Según el propio sitio del desarrollador, "funciona de forma nativa con LM Studio, Ollama, servidor llama.cpp y cualquier API compatible con OpenAI" — puedes apuntar Chapper a cualquier endpoint que hable ese protocolo, incluido un servidor autoalojado en tu propia red.',
          'Para el uso en el dispositivo (el complemento aparte de 4,99 $), la app admite modelos a través del framework **MLX** de Apple, un framework de aprendizaje automático diseñado para Apple Silicon, y, cuando el sistema operativo lo proporciona, **Apple Foundation Models** — el propio modelo en el dispositivo de Apple, disponible para apps de terceros en hardware y versiones de sistema operativo compatibles. Ni el listado de la App Store ni el sitio del desarrollador publican una lista fija y nombrada de modelos en el dispositivo como sí hacen algunas apps competidoras (la biblioteca curada de más de 140 modelos de Private LLM, por ejemplo); este análisis trata la selección de modelos en el dispositivo como más limitada y más dependiente del propio ecosistema MLX/Foundation Models de Apple que de un gran catálogo GGUF curado.',
          'Como la calidad y la velocidad del modelo en la vía basada en servidor dependen por completo de lo que ejecutes en LM Studio u Ollama en tu propia máquina, Chapper en sí no marca el techo de la capacidad del modelo como lo haría una app totalmente en el dispositivo — es una capa de transporte e interfaz, mientras tu propio hardware realiza la inferencia real.',
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
            'Qué esperar': 'Requiere iOS 17.0 o posterior, según el listado de la App Store.',
            'Nota importante': 'El chat basado en servidor (LM Studio/Ollama) necesita una ruta de red hasta ese servidor; el chat en el dispositivo necesita el complemento aparte de 4,99 $.',
          },
          {
            'Plataforma': 'iPad',
            'Qué esperar': 'Requiere iPadOS 17.0 o posterior; misma app y funciones que en iPhone.',
            'Nota importante': 'No se publican detalles de diseño específicos para iPad más allá de la compatibilidad estándar de la App Store.',
          },
          {
            'Plataforma': 'Mac',
            'Qué esperar': 'Requiere macOS 14.0 o posterior en un chip Apple M1 o superior, según el listado de la App Store.',
            'Nota importante': 'Un Mac también es el host más habitual para LM Studio/Ollama, por lo que muchos usuarios ejecutarán el servidor y el cliente Chapper en la misma máquina, o el servidor en un Mac y el cliente en iPhone/iPad.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'Qué esperar': 'El listado de la App Store muestra compatibilidad con visionOS 1.0+.',
            'Nota importante': 'Este análisis no probó de forma independiente la experiencia en Vision Pro; considérela como compatibilidad listada en la App Store, no como una función verificada en la práctica.',
          },
          {
            'Plataforma': 'Android, Windows, Linux',
            'Qué esperar': 'No hay app oficial en Google Play, la Microsoft Store ni ningún repositorio de paquetes de Linux.',
            'Nota importante': 'Los usuarios de Android y Windows que quieran un cliente móvil similar conectado a LM Studio/Ollama deberían revisar [RikkaHub](https://github.com/rikkahub/rikkahub) (Android) o [AnythingLLM Mobile](https://anythingllm.com/mobile) (Android, iOS planeado).',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad: qué recopila Chapper y qué no',
        content: [
          '**El propio sitio de Prevolut Ltd afirma que Chapper no requiere cuenta y usa "sin rastreo de terceros"**, y que las conversaciones se almacenan en el dispositivo salvo que el lector active explícitamente la sincronización con iCloud o se conecte a su propio servidor externo. Como el diseño principal de la app enruta el chat a través de backends que tú controlas (tu propio servidor LM Studio/Ollama, o la inferencia en el dispositivo), la cantidad de datos que llega alguna vez a la infraestructura propia de Prevolut está limitada por esa arquitectura, no solo por una política.',
        ],
        items: [
          '**No se requiere cuenta.** Puedes descargar y usar Chapper, incluidas las compras dentro de la app a través del flujo de compra estándar de Apple, sin crear un perfil específico de Chapper.',
          '**Sin rastreo de terceros, según lo afirmado por el propio desarrollador.** Este análisis se basa en esa afirmación, no en una auditoría independiente del tráfico de red de la app, que es de código cerrado.',
          '**La sincronización con iCloud es opcional y está cifrada de extremo a extremo, según el desarrollador.** Está desactivada por defecto; activarla es el único caso documentado en el que los datos del chat salen del dispositivo local, y van a la propia cuenta de iCloud del lector, no a los servidores de Prevolut.',
          '**Las conexiones a servidor envían datos al endpoint que configures.** Si conectas Chapper a una API compatible con OpenAI de terceros o alojada en la nube en lugar de tu propio servidor local LM Studio/Ollama, tus prompts van a ese endpoint bajo sus propios términos de privacidad — esto es una propiedad general del modelo cliente/servidor, no específica de Chapper.',
          '**La política de privacidad y los términos están publicados** en [prevolut.uk/products/chapper/privacy](https://prevolut.uk/products/chapper/privacy) y [prevolut.uk/products/chapper/terms](https://prevolut.uk/products/chapper/terms) — léalos directamente para conocer los términos legales actuales y completos, en lugar de depender solo del texto de marketing.',
        ],
      },
      history: {
        id: 'history',
        title: 'Historia de la empresa y versiones',
        content: [
          '**Chapper es desarrollada por [Prevolut Ltd](https://prevolut.uk/products/chapper/), una empresa registrada en Inglaterra y Gales bajo el número de Companies House 17058766.** Los datos públicos de la App Store no indican una fecha exacta de primer lanzamiento, pero el ID relativamente alto de la app en la App Store (6760984679) y su numeración de versiones temprana apuntan a un lanzamiento en 2026.',
        ],
        items: [
          '**Versión 1.1.0.** Descrita por el desarrollador como uno de los mayores lanzamientos de Chapper hasta la fecha; fecha exacta no publicada en las fuentes disponibles para este análisis.',
          '**Versión 1.2.0.** Una actualización importante centrada en la función de flujo de trabajo de terminal en sandbox "C.A.S.H.", además de mejoras de calidad.',
          '**Versión 1.3.1 (6 de agosto de 2026).** La versión actual en la App Store al momento de este análisis, que añade un primer vistazo a un "Agent Mode", cambio de modelo más rápido, un campo de respuesta de IA más grande y una serie de correcciones menores.',
        ],
        note: 'El historial de versiones procede del listado público de "Novedades" de la app en la App Store. Este análisis no pudo confirmar de forma independiente la fecha de lanzamiento original de la versión 1.0 — trate la estimación de lanzamiento en 2026 como una inferencia a partir de la numeración de versiones y el ID de la App Store, no como una fecha confirmada por el desarrollador.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Nivel gratuito para probar',
            'Qué significa en uso real': 'Puedes probar la interfaz y una conexión a servidor antes de gastar dinero.',
            'Limitación / advertencia': 'Limitado a 20 conversaciones, y la inferencia en el dispositivo no está disponible en absoluto en el nivel gratuito.',
          },
          {
            'Ventaja': 'Amplia compatibilidad de backends',
            'Qué significa en uso real': 'Funciona con LM Studio, Ollama, servidor llama.cpp y cualquier endpoint compatible con OpenAI — flexible para quien ya tenga un servidor local.',
            'Limitación / advertencia': 'La calidad y velocidad del modelo dependen por completo del servidor al que te conectes, no de la app en sí.',
          },
          {
            'Ventaja': 'Nivel Pro rico en funciones',
            'Qué significa en uso real': 'Herramientas MCP, personas, memoria a largo plazo, salida JSON estructurada y exportación en varios formatos cubren casos de uso avanzados que la mayoría de competidoras omiten.',
            'Limitación / advertencia': 'Esa amplitud añade una compra de 9,99 $ sobre la app base, y la vía en el dispositivo cuesta 4,99 $ adicionales.',
          },
          {
            'Ventaja': 'No requiere cuenta',
            'Qué significa en uso real': 'Instala y empieza a chatear sin registrarte en nada.',
            'Limitación / advertencia': 'Al ser una app de código cerrado, la afirmación de "sin rastreo de terceros" descansa en la declaración del propio desarrollador, no en una revisión de código independiente.',
          },
          {
            'Ventaja': 'App nativa de Apple, pulida',
            'Qué significa en uso real': 'Funciona como app de primera clase en iPhone, iPad, Mac y Vision Pro con una sola compra.',
            'Limitación / advertencia': 'Solo para Apple — sin versión de Android o Windows, a diferencia de algunas competidoras de tipo servidor-cliente.',
          },
          {
            'Ventaja': 'Precios escalonados y flexibles',
            'Qué significa en uso real': 'Los usuarios que solo necesitan la función de cliente-servidor pueden saltarse por completo el complemento en el dispositivo de 4,99 $.',
            'Limitación / advertencia': 'La estructura de tres niveles (gratis/Pro/en el dispositivo) es menos transparente a primera vista que un precio único, y es fácil malinterpretarla como "9,99 $ y ya tienes todo".',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Chapper frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio', 'Acceso a modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'Chapper',
            'Plataformas': 'iPhone/iPad/Mac/Vision Pro (solo Apple)',
            'Precio': 'Gratis (límite de 20 chats) / 9,99 $ Pro / +4,99 $ en el dispositivo',
            'Acceso a modelos': 'LM Studio, Ollama, llama.cpp, APIs compatibles con OpenAI; en el dispositivo vía MLX/Foundation Models (complemento de pago)',
            'Diferencia clave': 'Principalmente un cliente de servidor; la inferencia en el dispositivo es una compra aparte',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, con cierto soporte de Android',
            'Precio': 'Gratis, código abierto',
            'Acceso a modelos': 'Cualquier archivo GGUF, totalmente en el dispositivo por defecto',
            'Diferencia clave': 'Gratis, de código abierto y en el dispositivo desde el inicio — sin necesidad de servidor ni complemento',
          },
          {
            'App': '[Private LLM](/es/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Precio': 'Compra única de 4,99 $',
            'Acceso a modelos': 'Más de 140 modelos curados en el dispositivo con cuantización OmniQuant/GPTQ',
            'Diferencia clave': 'Precio único fijo, solo en el dispositivo, sin modo cliente-servidor',
          },
          {
            'App': '[Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            'Plataformas': 'Ver el análisis completo para la compatibilidad de plataformas actual',
            'Precio': 'Ver el listado actual',
            'Acceso a modelos': 'Ver el análisis completo para el soporte de modelos actual',
            'Diferencia clave': 'App de escritorio centrada en roleplay/chat de personajes, a diferencia del cliente de propósito general de Chapper',
          },
          {
            'App': '[SillyTavern vs. Agnai vs. RisuAI](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
            'Plataformas': 'Interfaces basadas en navegador, autoalojadas',
            'Precio': 'Gratis, código abierto',
            'Acceso a modelos': 'Conecta con cualquier backend local o en la nube, centrado en tarjetas de personaje',
            'Diferencia clave': 'Ecosistema de roleplay/tarjetas de personaje en lugar de una app móvil nativa',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Plataformas': 'iOS/Mac (código abierto, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Precio': 'Gratis, código abierto',
            'Acceso a modelos': 'Modelos GGUF personalizados vía llama.cpp/ggml, en el dispositivo por defecto',
            'Diferencia clave': 'Según su propio README de GitHub, fue retirada de la App Store y TestFlight en agosto de 2025 — verifica la disponibilidad actual',
          },
          {
            'App': '[Layla](https://www.layla-network.ai/)',
            'Plataformas': 'iOS y Android',
            'Precio': '19,99 $ más compras dentro de la app',
            'Acceso a modelos': 'Modelos GGUF personalizados; enfoque en personajes/roleplay con más de 100 voces',
            'Diferencia clave': 'Multiplataforma, orientada a personajes/roleplay, con precio más alto que Chapper',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plataformas': 'App Flutter multiplataforma (principalmente Android)',
            'Precio': 'Gratis, código abierto (licencia MIT)',
            'Acceso a modelos': 'Cualquier archivo GGUF vía llama.cpp; también se conecta de forma remota con Anthropic, DeepSeek, Ollama, Mistral, OpenAI',
            'Diferencia clave': 'Gratis, totalmente de código abierto, y combina acceso local y remoto como Chapper, pero multiplataforma',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plataformas': 'Android',
            'Precio': 'Gratis, código abierto',
            'Acceso a modelos': 'Varias APIs de proveedores en la nube más ejecución local',
            'Diferencia clave': 'Equivalente solo para Android del modelo de cliente multi-backend de Chapper',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plataformas': 'Android (iOS planeado)',
            'Precio': 'Gratis, código abierto',
            'Acceso a modelos': 'Ejecuta modelos GGUF en el dispositivo vía Cactus Compute, o se combina con un servidor AnythingLLM autoalojado',
            'Diferencia clave': 'Diseñada específicamente para combinarse con un espacio de trabajo AnythingLLM autoalojado, no un cliente multi-backend general',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia — verifica los datos actuales en el listado de cada app antes de decidir. La disponibilidad de LLM Farm en la App Store en particular debería revisarse de nuevo, ya que su propio README de GitHub la describía como retirada de la App Store desde agosto de 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'A quién le conviene Chapper',
        items: [
          '**Lectores que ya ejecutan LM Studio u Ollama en un Mac o PC.** El valor principal de Chapper es un frontend móvil nativo para un servidor que ya tienes funcionando — este es su caso de uso más sólido y mejor verificado.',
          '**Usuarios exclusivamente de Apple que quieren una sola app tanto para chat basado en servidor como en el dispositivo.** Si estás dispuesto a pagar tanto por Pro como por el complemento en el dispositivo, Chapper cubre una gama más amplia de flujos de trabajo que una app de propósito único.',
          '**Usuarios avanzados que quieren herramientas MCP, personas y salida JSON estructurada.** La lista de funciones del nivel Pro es más densa que la de la mayoría de apps de esta categoría, útil para quien quiera programar o automatizar en torno a su configuración de IA local.',
          '**Lectores dispuestos a evaluar una app pequeña y en etapa temprana.** Con solo 8 valoraciones en la App Store al momento de este análisis, Chapper está al principio de su historial público — aceptable para quien disfrute probando herramientas nuevas, menos para quien priorice una trayectoria larga y probada.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'A quién no le conviene Chapper',
        items: [
          '**Lectores que quieren una app de una sola compra, totalmente en el dispositivo, sin configuración de servidor.** La vía en el dispositivo de Chapper cuesta 4,99 $ adicionales sobre Pro y no es el diseño principal de la app — [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) (gratis) o [Private LLM](/es/power-local-llm/private-llm-review) (4,99 $ precio fijo) cubren esa necesidad de forma más directa.',
          '**Usuarios de Android, Windows o Linux.** Chapper no tiene app oficial en ninguna de estas plataformas — considera [RikkaHub](https://github.com/rikkahub/rikkahub), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) o [AnythingLLM Mobile](https://anythingllm.com/mobile) en su lugar.',
          '**Lectores que quieren un catálogo grande, nombrado y curado de modelos en el dispositivo.** Ni el listado de la App Store ni el sitio del desarrollador publican una lista fija de modelos comparable a los más de 140 modelos curados de Private LLM; la selección en el dispositivo depende en cambio del ecosistema MLX/Foundation Models de Apple.',
          '**Lectores que quieren una trayectoria pública larga antes de confiarle a una app el acceso a infraestructura local.** Con una presencia en la App Store que arrancó en 2026 y solo 8 valoraciones en total, Chapper aún no ha construido el historial de varios años que sí tienen Private LLM (lanzada en 2023) o proyectos de código abierto ya establecidos.',
          '**Lectores que buscan específicamente funciones de roleplay o tarjetas de personaje.** Chapper es un cliente de chat/API de propósito general, no una app de chat de personajes — [Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay-2026) o las herramientas comparadas en [SillyTavern vs. Agnai vs. RisuAI](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) están diseñadas específicamente para ese caso de uso.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto cuesta Chapper?',
            a: 'Chapper es gratis para descargar con un límite de 20 conversaciones. [Chapper Pro cuesta 9,99 $ de pago único](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) y elimina el límite y desbloquea la mayoría de las funciones avanzadas. La inferencia local en el dispositivo es una compra aparte dentro de la app por 4,99 $, además de Pro, según el listado actual de la App Store. Verificado para este análisis el 06-09-2026 — los precios de la App Store pueden variar según la región y cambiar con el tiempo.',
          },
          {
            q: '¿Chapper ejecuta modelos de IA por completo en mi iPhone?',
            a: 'Solo si compras el complemento aparte "On Device Local Inference" por 4,99 $, que usa el framework MLX de Apple y, cuando están disponibles, los Apple Foundation Models. Por defecto y en su diseño principal, Chapper es un cliente que se conecta a LM Studio, Ollama, un servidor llama.cpp o un endpoint compatible con OpenAI que se ejecuta en otro lugar.',
          },
          {
            q: '¿Quién desarrolla Chapper?',
            a: 'Chapper es desarrollada por [Prevolut Ltd](https://prevolut.uk/products/chapper/), una empresa registrada en Inglaterra y Gales (número de Companies House 17058766). No tiene relación con la app bancaria Revolut pese al nombre similar.',
          },
          {
            q: '¿Está Chapper disponible en Android o Windows?',
            a: 'No. Chapper está desarrollada exclusivamente para iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon) y Apple Vision Pro. No existe versión oficial para Android, Windows o Linux.',
          },
          {
            q: '¿Qué backends admite Chapper?',
            a: 'Según el propio sitio del desarrollador, Chapper "funciona de forma nativa con LM Studio, Ollama, servidor llama.cpp y cualquier API compatible con OpenAI". También puedes apuntarla a un servidor autoalojado en tu propia red.',
          },
          {
            q: '¿Chapper requiere una cuenta?',
            a: 'No. El desarrollador afirma que no se requiere cuenta, y Chapper se usa sin ningún tipo de registro — incluidas las compras dentro de la app, que pasan por el flujo de compra estándar de Apple.',
          },
          {
            q: '¿Chapper recopila mis datos?',
            a: 'El propio sitio del desarrollador afirma que no se usa rastreo de terceros y que las conversaciones permanecen en el dispositivo salvo que se active la sincronización con iCloud o te conectes a tu propio servidor externo. Este análisis se basa en esa afirmación; Chapper es de código cerrado, por lo que no se ha auditado su código de forma independiente para este análisis.',
          },
          {
            q: '¿Cómo se compara Chapper con PocketPal AI?',
            a: 'PocketPal AI es gratis, de código abierto y funciona en el dispositivo por defecto sin necesitar servidor. Chapper es principalmente un cliente para servidores LM Studio, Ollama y compatibles con OpenAI, con inferencia real en el dispositivo vendida como complemento aparte por 4,99 $ además de una compra Pro de 9,99 $. Elige PocketPal AI si quieres una sola app gratuita y totalmente en el dispositivo; elige Chapper si ya tienes un servidor local funcionando y quieres un frontend móvil nativo y rico en funciones para él.',
          },
          {
            q: '¿Chapper tiene buenas reseñas?',
            a: 'Al momento de este análisis, Chapper tiene 3,3 de 5 estrellas con 8 valoraciones en la App Store — una muestra muy pequeña que no debería tomarse como una señal fuerte en ningún sentido. La app parece ser relativamente nueva, a juzgar por su numeración de versiones y su ID en la App Store.',
          },
          {
            q: '¿Qué es la función "C.A.S.H." en Chapper?',
            a: 'C.A.S.H. es una herramienta de flujo de trabajo de terminal/shell en sandbox incluida en Chapper, introducida como pieza central de la versión 1.2.0. Los materiales del desarrollador la describen como una forma de ejecutar flujos de trabajo en sandbox desde dentro de la app; este análisis no ha probado de forma independiente todas sus capacidades ni sus límites de seguridad.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Chapper es una app capaz y rica en funciones para lectores que ya ejecutan LM Studio u Ollama y quieren un cliente nativo de Apple para ello — las herramientas MCP, las personas, la salida estructurada y la exportación multiformato del nivel Pro van más allá que la mayoría de las apps de esta categoría. Su precio también es su mayor punto de fricción: un nivel gratuito limitado a 20 conversaciones, una compra de Chapper Pro por 9,99 $ y un cargo adicional de 4,99 $ solo para ejecutar modelos totalmente en el dispositivo suman una estructura de costes más escalonada que los precios fijos y únicos de PocketPal AI (gratis) o Private LLM (4,99 $). Sumado a un historial público todavía escaso (8 valoraciones en la App Store, un lanzamiento aparente en 2026 y ninguna fecha confirmada de lanzamiento 1.0 en las fuentes disponibles para este análisis), Chapper se percibe como una app prometedora pero en etapa temprana, más que como una establecida. Los lectores que ya tengan un servidor local funcionando y busquen una forma pulida de acceder a él desde iPhone o iPad deberían probar primero el nivel gratuito; los lectores que quieran una app de una sola compra y totalmente en el dispositivo deberían empezar en cambio con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private LLM](/es/power-local-llm/private-llm-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Chapper en la App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — precio, compras dentro de la app, compatibilidad de plataformas, valoraciones y notas de versión.',
          '[Sitio oficial de Chapper](https://chapper.app/) — lista de funciones, compatibilidad de backends y afirmaciones de privacidad.',
          '[Prevolut Ltd — página de producto de Chapper](https://prevolut.uk/products/chapper/) — modelo de precios, límites del nivel gratuito y datos de la empresa.',
          '[Política de privacidad](https://prevolut.uk/products/chapper/privacy) y [términos de servicio](https://prevolut.uk/products/chapper/terms) de Chapper — términos legales completos.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una alternativa gratuita, de código abierto y en el dispositivo por defecto.',
          '[Análisis de Private LLM](/es/power-local-llm/private-llm-review) — una app de Apple con precio fijo de 4,99 $, totalmente en el dispositivo, con más de 140 modelos curados.',
          '[Análisis de Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay-2026) — una app de IA local centrada en roleplay, para un caso de uso distinto al de Chapper.',
          '[SillyTavern vs. Agnai vs. RisuAI](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — una comparación de interfaces de roleplay autoalojadas.',
          '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el resumen completo de apps para iPhone que da contexto sobre dónde encaja Chapper.',
          '[El directorio completo de software de LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas de LLM local en todas las plataformas.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chapper-review-hero-fr.webp',
    title: 'Avis Chapper (2026) : client IA et LM Studio pour iPhone, iPad et Mac',
    seoTitle: 'Avis Chapper 2026 : client LM Studio pour iPhone et Mac',
    intro:
      'Chapper, développée par [Prevolut Ltd](https://prevolut.uk/products/chapper/), est une application native pour iPhone, iPad et Mac permettant de discuter avec des modèles d\'IA locaux et auto-hébergés. Le téléchargement est gratuit avec une limite de 20 conversations, et l\'achat unique de [Chapper Pro à 9,99 $](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) débloque l\'ensemble des fonctionnalités — l\'inférence réellement locale sur l\'appareil (exécuter un modèle directement sur l\'appareil plutôt que de se connecter à un serveur) est vendue en achat intégré séparé à 4,99 $, selon la fiche actuelle de l\'App Store. Les prix de l\'App Store peuvent varier selon la région ; vérifiez le prix en vigueur sur l\'App Store française avant d\'acheter. La conception première de Chapper est celle d\'un client soigné pour [LM Studio](https://lmstudio.ai/), [Ollama](https://ollama.com/), un serveur llama.cpp et tout point de terminaison compatible OpenAI — vous le connectez à un serveur sur votre Mac ou PC et discutez depuis votre téléphone —, avec en complément une prise en charge locale via MLX et Apple Foundation Models. Cet avis examine ce modèle de tarification à paliers, la base d\'avis encore réduite de l\'application (3,3 sur 5 pour 8 notes sur l\'App Store au moment de la rédaction) et sa comparaison avec des applications entièrement locales, sans serveur, comme [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) et [Private LLM](/fr/power-local-llm/private-llm-review).',
    metaDescription:
      'Avis Chapper 2026 : gratuit avec limite de 20 conversations, Pro à 9,99 $ en achat unique, module d\'inférence locale à 4,99 $. Client LM Studio et Ollama pour iPhone/iPad/Mac — prix, confidentialité et alternatives.',
    twitterDescription:
      'Avis Chapper 2026 : une application iPhone/iPad/Mac pour discuter avec LM Studio, Ollama et des points de terminaison compatibles OpenAI, avec l\'inférence locale vendue en module séparé. Prix, confidentialité et comparaison avec PocketPal AI et Private LLM.',
    audience:
      'Utilisateurs iPhone, iPad et Mac qui font déjà tourner LM Studio ou Ollama sur un ordinateur et veulent un client mobile natif, ou qui hésitent entre le modèle tarifaire à paliers de Chapper (gratuit/Pro/local) et des applications entièrement locales comme PocketPal AI ou Private LLM.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Chapper review',
    targetKeywords: [
      'chapper review',
      'chapper app iphone',
      'chapper ai lm studio client',
      'chapper pro price',
      'chapper on device inference',
      'lm studio client iphone',
      'ollama client iphone ipad',
      'chapper vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama', 'Qwen', 'Gemma', 'Mistral', 'Apple Foundation Models'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iPadOS 17+)', 'Mac Apple Silicon (M1 ou ultérieur)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Chapper est une application gratuite avec palier Pro à 9,99 $ pour iPhone, iPad et Mac, éditée par [Prevolut Ltd](https://prevolut.uk/products/chapper/) et conçue avant tout comme client pour LM Studio, Ollama, un serveur llama.cpp et des points de terminaison compatibles OpenAI, l\'inférence réellement locale étant vendue en module séparé à 4,99 $.** Le palier gratuit limite à 20 conversations ; Chapper Pro supprime cette limite et débloque, selon le site de l\'éditeur, des réglages d\'échantillonnage avancés, des formats d\'export, des personas et la synchronisation iCloud. Les lecteurs qui veulent faire tourner un modèle entièrement sur leur téléphone sans achat ni configuration de serveur séparés devraient comparer avec [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), gratuite et locale par défaut.',
    quickAnswerTop: {
      fr: {
        question: 'Chapper revient-elle à faire tourner un modèle d\'IA entièrement sur son iPhone ?',
        answer:
          'Pas par défaut. Chapper est avant tout un client qui connecte votre iPhone, iPad ou Mac à LM Studio, Ollama, un serveur llama.cpp ou tout point de terminaison compatible OpenAI hébergé sur une autre machine. L\'inférence réellement locale est un achat intégré séparé à 4,99 $, en plus de l\'application elle-même, gratuite avec une limite de 20 conversations ou à 9,99 $ en version Chapper Pro.',
        bullets: [
          'Le palier gratuit limite les conversations à 20 ; Chapper Pro coûte 9,99 $ en achat unique.',
          'L\'inférence locale sur l\'appareil est un achat intégré séparé à 4,99 $, selon la fiche App Store.',
          'Backends principaux : LM Studio, Ollama, serveur llama.cpp et API compatibles OpenAI.',
          'Uniquement iPhone, iPad, Mac (Apple Silicon) et Apple Vision Pro — pas d\'application Android ou Windows.',
          'L\'éditeur affirme qu\'aucun compte n\'est requis et qu\'aucun tiers ne réalise de suivi ; les conversations restent sur l\'appareil sauf activation de la synchronisation iCloud.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Chapper', anchor: 'what-is-chapper' },
      { label: 'Prise en main', anchor: 'how-to-get-started' },
      { label: 'Tarifs : palier gratuit, Pro et le module local', anchor: 'pricing' },
      { label: 'Backends et modèles pris en charge', anchor: 'models-and-backends' },
      { label: 'Plateformes : iPhone, iPad, Mac et Vision Pro', anchor: 'platforms' },
      { label: 'Confidentialité : ce que Chapper collecte ou non', anchor: 'privacy' },
      { label: 'Historique de l\'entreprise et des versions', anchor: 'history' },
      { label: 'Avantages et limites', anchor: 'tradeoffs' },
      { label: 'Chapper face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Chapper est adaptée', anchor: 'who-should-use' },
      { label: 'Pour qui Chapper n\'est pas adaptée', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'En bref',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chapper est une application gratuite avec palier Pro à 9,99 $ pour iPhone/iPad/Mac, éditée par Prevolut Ltd, conçue avant tout comme client pour LM Studio, Ollama, un serveur llama.cpp et des points de terminaison compatibles OpenAI, l\'inférence réellement locale étant un module séparé à 4,99 $.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez d\'abord Chapper comme une télécommande pour des modèles d\'IA qui tournent sur votre Mac ou PC (via LM Studio ou Ollama), et seulement ensuite comme une application de chat locale si vous payez en plus pour débloquer l\'inférence sur l\'appareil — ce n\'est pas une application à achat unique entièrement locale comme certaines concurrentes.',
          },
        ],
        items: [
          'Prix : gratuit avec limite de 20 conversations ; [Chapper Pro coûte 9,99 $](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) en achat unique ; l\'inférence locale sur l\'appareil est un achat intégré séparé à 4,99 $, selon la fiche App Store actuelle.',
          'Plateformes : iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon) et Apple Vision Pro (visionOS 1.0+) — pas d\'application Android ou Windows.',
          'Éditeur : [Prevolut Ltd](https://prevolut.uk/products/chapper/), société immatriculée au Royaume-Uni (Companies House n° 17058766) — sans lien avec l\'application bancaire Revolut malgré la ressemblance du nom.',
          'Backends : fonctionne nativement avec LM Studio, Ollama, un serveur llama.cpp et toute API compatible OpenAI ; la prise en charge locale utilise le framework MLX d\'Apple et, lorsque disponible, Apple Foundation Models.',
          'Fonctionnalités : intégration d\'outils MCP, un outil de terminal sandboxé baptisé « C.A.S.H. », des personas personnalisés, une sortie JSON structurée, l\'export multi-format (TXT, PDF, HTML, Markdown, JSON, CSV, XML), la synthèse vocale et un inspecteur de requêtes API brutes.',
          'Confidentialité : l\'éditeur affirme qu\'aucun compte n\'est requis et qu\'aucun suivi tiers n\'est utilisé ; les conversations restent sur l\'appareil sauf activation de la synchronisation iCloud ou connexion à un serveur distant.',
          'Les avis restent rares : 3,3 sur 5 étoiles pour 8 notes sur l\'App Store au moment de la rédaction — un échantillon trop faible pour en tirer des conclusions solides.',
          'La version 1.3.1 (fiche App Store, datée du 6 août 2026) est la version actuelle ; l\'application semble avoir été lancée sur l\'App Store en 2026, à en juger par sa numérotation de versions et son identifiant App Store.',
        ],
      },
      whatIsChapper: {
        id: 'what-is-chapper',
        title: 'Qu\'est-ce que Chapper',
        content: [
          '**Chapper est une application native Apple, référencée sur l\'App Store sous le nom « Chapper: AI & LM Studio Client », conçue pour connecter iPhone, iPad et Mac à des modèles d\'IA — qu\'ils tournent localement ou sur un serveur que vous contrôlez.** Son identité principale, reflétée par son propre nom sur l\'App Store, est celle d\'un client pour [LM Studio](https://lmstudio.ai/) : vous exécutez un modèle sur un Mac ou un PC avec LM Studio, Ollama ou un serveur llama.cpp, et Chapper fournit une interface mobile native pour discuter avec lui depuis votre téléphone ou votre tablette.',
          'L\'application est développée par [Prevolut Ltd](https://prevolut.uk/products/chapper/), une société immatriculée en Angleterre et au pays de Galles (numéro Companies House 17058766). Le nom rappelle l\'application bancaire Revolut, mais il s\'agit de deux sociétés distinctes — l\'éditeur de Chapper est une entité plus petite et indépendante, dédiée spécifiquement à ce client IA.',
          'L\'inférence locale — exécuter un modèle directement sur le téléphone ou le Mac sans serveur — est également prise en charge, via le framework MLX d\'Apple et, lorsque disponible, les Apple Foundation Models. Cependant, selon la liste actuelle des achats intégrés sur l\'App Store, cette capacité est vendue comme un achat séparé « On Device Local Inference » plutôt qu\'incluse automatiquement dans l\'application de base ou le palier Pro. Les lecteurs souhaitant une application locale par défaut, sans déblocage séparé, devraient comparer avec des applications entièrement locales comme [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private LLM](/fr/power-local-llm/private-llm-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Prise en main',
        content: [
          '**La prise en main de Chapper diffère selon que vous prévoyez de vous connecter à un serveur ou de faire tourner un modèle localement.** Aucune création de compte n\'est requise dans un cas comme dans l\'autre.',
        ],
        numberedItems: [
          {
            title: 'Télécharger l\'application',
            whyItMatters: 'Récupérez [Chapper gratuitement sur l\'App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679). Le palier gratuit permet de tester l\'application avec une limite de 20 conversations avant de décider d\'acheter Pro.',
          },
          {
            title: 'Choisir : via serveur ou en local',
            whyItMatters: 'Si vous utilisez déjà [LM Studio](https://lmstudio.ai/) ou [Ollama](https://ollama.com/) sur un Mac ou un PC, connectez Chapper à l\'adresse de ce serveur pour la voie la plus rapide vers un chat fonctionnel. Pour faire tourner le modèle directement sur votre téléphone sans ordinateur séparé, il faut l\'achat intégré supplémentaire « On Device Local Inference » à 4,99 $.',
          },
          {
            title: 'Connecter un backend ou choisir un modèle',
            whyItMatters: 'En mode serveur, pointez Chapper vers l\'adresse de votre serveur LM Studio, Ollama, llama.cpp ou point de terminaison compatible OpenAI. En mode local, choisissez parmi les modèles pris en charge via le framework MLX d\'Apple et, lorsque disponibles, les Apple Foundation Models.',
          },
          {
            title: 'Se décider sur Pro',
            whyItMatters: 'La limite de 20 conversations du palier gratuit suffit pour juger si l\'application convient à votre usage. [Chapper Pro (9,99 $, achat unique)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) supprime la limite et ajoute personas, outils MCP, mémoire longue durée, tous les formats d\'export et la synchronisation iCloud, selon la liste de fonctionnalités de l\'éditeur.',
          },
          {
            title: 'Facultatif : activer la synchronisation iCloud',
            whyItMatters: 'Pour que les conversations se retrouvent sur votre iPhone, iPad et Mac, la synchronisation iCloud est optionnelle et chiffrée de bout en bout, selon la page confidentialité de l\'éditeur — elle est désactivée par défaut.',
          },
        ],
        note: 'Les tarifs exacts des achats intégrés, la répartition des fonctionnalités entre Pro et le module local, ainsi que les listes de modèles pris en charge peuvent évoluer d\'une mise à jour App Store à l\'autre. Vérifiez les détails actuels directement dans l\'application ou sur [chapper.app](https://chapper.app/) avant d\'acheter.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs : palier gratuit, Pro et le module local',
        itemHeadings: true,
        content: [
          '**Chapper utilise une structure tarifaire à trois paliers, plus étagée que la plupart des applications de cette catégorie.** L\'application de base est gratuite, un achat unique de Chapper Pro débloque la plupart des fonctionnalités avancées, et l\'inférence réellement locale est à nouveau tarifée séparément. Ces chiffres ont été vérifiés sur la [fiche App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) et sur [chapper.app](https://chapper.app/) pour cet avis.',
        ],
        columns: ['Palier', 'Prix', 'Ce qui est débloqué'],
        rows: [
          {
            'Palier': 'Gratuit',
            'Prix': '0 $',
            'Ce qui est débloqué': 'Fonctions de chat de base, limitées à 20 conversations',
          },
          {
            'Palier': 'Chapper Pro',
            'Prix': '9,99 $ (achat unique)',
            'Ce qui est débloqué': 'Conversations illimitées, réglages d\'échantillonnage avancés, tous les formats d\'export, personas, outils MCP, mémoire longue durée, analyses, icônes d\'application personnalisées, synchronisation iCloud',
          },
          {
            'Palier': 'On Device Local Inference',
            'Prix': '4,99 $ (achat unique, séparé de Pro)',
            'Ce qui est débloqué': 'Exécuter des modèles directement en local via Apple MLX / Foundation Models, plutôt que de se connecter à LM Studio, Ollama ou un autre serveur',
          },
          {
            'Palier': 'Pourboires « Tea »',
            'Prix': '0,99–44,99 $',
            'Ce qui est débloqué': 'Pourboires uniques et facultatifs pour l\'éditeur ; aucun déblocage fonctionnel',
          },
        ],
        note: 'Le site de Prevolut Ltd décrit Chapper Pro comme « sans abonnement, sans frais cachés », chaque future fonctionnalité Pro étant incluse automatiquement après l\'achat. Les prix de l\'App Store peuvent changer et varier selon la région — vérifiez le prix actuel sur la [fiche App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) avant d\'acheter. Vérifié pour cet avis le 06/09/2026.',
      },
      modelsAndBackends: {
        id: 'models-and-backends',
        title: 'Backends et modèles pris en charge',
        content: [
          '**La principale surface d\'intégration de Chapper concerne les backends distants, et non une bibliothèque locale de modèles sélectionnés.** Selon le site de l\'éditeur, l\'application « fonctionne nativement avec LM Studio, Ollama, un serveur llama.cpp et toute API compatible OpenAI » — vous pouvez pointer Chapper vers n\'importe quel point de terminaison parlant ce protocole, y compris un serveur auto-hébergé sur votre propre réseau.',
          'Pour un usage local (le module séparé à 4,99 $), l\'application prend en charge des modèles via le framework **MLX** d\'Apple, conçu pour Apple Silicon, et, lorsque le système d\'exploitation le fournit, les **Apple Foundation Models** — le modèle local propre à Apple, mis à disposition des applications tierces sur le matériel et les versions d\'OS compatibles. Ni la fiche App Store ni le site de l\'éditeur ne publient de liste fixe et nommée de modèles locaux, à la différence de certaines applications concurrentes (la bibliothèque de plus de 140 modèles sélectionnés de Private LLM, par exemple) ; cet avis considère donc la sélection de modèles locaux comme plus restreinte et davantage dépendante de l\'écosystème MLX/Foundation Models d\'Apple que d\'un large catalogue GGUF sélectionné.',
          'La qualité et la vitesse des modèles dans le mode via serveur dépendant entièrement de ce que vous exécutez dans LM Studio ou Ollama sur votre propre machine, Chapper elle-même ne fixe pas le plafond de capacité du modèle comme le ferait une application entièrement locale — elle constitue une couche de transport et d\'interface, votre propre matériel effectuant l\'inférence réelle.',
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
            'À quoi s\'attendre': 'Nécessite iOS 17.0 ou ultérieur, selon la fiche App Store.',
            'Remarque importante': 'Le chat via serveur (LM Studio/Ollama) nécessite un accès réseau à ce serveur ; le chat local nécessite le module séparé à 4,99 $.',
          },
          {
            'Plateforme': 'iPad',
            'À quoi s\'attendre': 'Nécessite iPadOS 17.0 ou ultérieur ; même application et mêmes fonctionnalités que sur iPhone.',
            'Remarque importante': 'Aucun détail de mise en page spécifique à l\'iPad n\'est publié au-delà de la compatibilité App Store standard.',
          },
          {
            'Plateforme': 'Mac',
            'À quoi s\'attendre': 'Nécessite macOS 14.0 ou ultérieur sur puce Apple M1 ou supérieure, selon la fiche App Store.',
            'Remarque importante': 'Un Mac est aussi l\'hôte le plus courant pour LM Studio/Ollama ; beaucoup d\'utilisateurs feront tourner le serveur et le client Chapper sur la même machine, ou le serveur sur un Mac et le client sur iPhone/iPad.',
          },
          {
            'Plateforme': 'Apple Vision Pro',
            'À quoi s\'attendre': 'La fiche App Store indique une compatibilité visionOS 1.0+.',
            'Remarque importante': 'Cet avis n\'a pas testé indépendamment l\'expérience sur Vision Pro ; considérez cela comme une compatibilité indiquée sur l\'App Store, pas comme une fonctionnalité vérifiée en pratique.',
          },
          {
            'Plateforme': 'Android, Windows, Linux',
            'À quoi s\'attendre': 'Aucune application officielle sur Google Play, le Microsoft Store ou un dépôt de paquets Linux.',
            'Remarque importante': 'Les utilisateurs Android et Windows cherchant un client mobile similaire connecté à LM Studio/Ollama devraient regarder [RikkaHub](https://github.com/rikkahub/rikkahub) (Android) ou [AnythingLLM Mobile](https://anythingllm.com/mobile) (Android, iOS prévu).',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité : ce que Chapper collecte ou non',
        content: [
          '**Le site de Prevolut Ltd affirme que Chapper ne nécessite aucun compte et n\'utilise « aucun suivi tiers »**, et que les conversations sont stockées sur l\'appareil sauf si le lecteur active explicitement la synchronisation iCloud ou se connecte à son propre serveur externe. Comme la conception de l\'application achemine le chat via des backends que vous contrôlez (votre propre serveur LM Studio/Ollama, ou l\'inférence locale), la quantité de données atteignant jamais l\'infrastructure propre de Prevolut est limitée par cette architecture, pas seulement par une politique.',
        ],
        items: [
          '**Aucun compte requis.** Vous pouvez télécharger et utiliser Chapper, y compris effectuer des achats intégrés via le circuit d\'achat standard d\'Apple, sans créer de profil spécifique à Chapper.',
          '**Aucun suivi tiers, selon les propres déclarations de l\'éditeur.** Cet avis se fonde sur cette affirmation, non sur un audit indépendant du trafic réseau de l\'application, dont le code est fermé.',
          '**La synchronisation iCloud est optionnelle et chiffrée de bout en bout, selon l\'éditeur.** Elle est désactivée par défaut ; l\'activer est le seul cas documenté où des données de conversation quittent l\'appareil local, et elles vont vers le compte iCloud du lecteur lui-même, pas vers les serveurs de Prevolut.',
          '**Les connexions serveur envoient des données au point de terminaison que vous configurez.** Si vous connectez Chapper à une API tierce ou hébergée dans le cloud compatible OpenAI plutôt qu\'à votre propre serveur local LM Studio/Ollama, vos prompts partent vers ce point de terminaison selon ses propres conditions de confidentialité — c\'est une propriété générale du modèle client/serveur, pas spécifique à Chapper.',
          '**La politique de confidentialité et les conditions sont publiées** sur [prevolut.uk/products/chapper/privacy](https://prevolut.uk/products/chapper/privacy) et [prevolut.uk/products/chapper/terms](https://prevolut.uk/products/chapper/terms) — lisez-les directement pour connaître les conditions légales actuelles et complètes plutôt que de vous fier uniquement aux textes marketing.',
        ],
      },
      history: {
        id: 'history',
        title: 'Historique de l\'entreprise et des versions',
        content: [
          '**Chapper est développée par [Prevolut Ltd](https://prevolut.uk/products/chapper/), une société immatriculée en Angleterre et au pays de Galles sous le numéro Companies House 17058766.** Les données publiques de l\'App Store n\'indiquent pas de date exacte de première sortie, mais l\'identifiant App Store relativement élevé de l\'application (6760984679) et sa numérotation de versions précoce suggèrent un lancement en 2026.',
        ],
        items: [
          '**Version 1.1.0.** Décrite par l\'éditeur comme l\'une des plus grandes mises à jour de Chapper à ce jour ; date exacte non publiée dans les sources disponibles pour cet avis.',
          '**Version 1.2.0.** Une mise à jour majeure centrée sur la fonctionnalité de terminal sandboxé « C.A.S.H. », accompagnée d\'améliorations de qualité.',
          '**Version 1.3.1 (6 août 2026).** La version App Store actuelle au moment de cet avis, ajoutant un premier aperçu d\'un « Agent Mode », un changement de modèle plus rapide, un champ de réponse IA agrandi et une série de correctifs mineurs.',
        ],
        note: 'L\'historique des versions provient de la liste publique « Nouveautés » de l\'application sur l\'App Store. Cet avis n\'a pas pu confirmer indépendamment la date de lancement originale de la version 1.0 — considérez l\'estimation d\'un lancement en 2026 comme déduite de la numérotation des versions et de l\'identifiant App Store, non comme une date confirmée par l\'éditeur.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Avantages et limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Palier gratuit pour essayer',
            'Ce que cela signifie en usage réel': 'Vous pouvez tester l\'interface et une connexion serveur avant de dépenser quoi que ce soit.',
            'Limite / réserve': 'Limité à 20 conversations, et l\'inférence locale n\'est pas du tout disponible sur le palier gratuit.',
          },
          {
            'Avantage': 'Large compatibilité des backends',
            'Ce que cela signifie en usage réel': 'Fonctionne avec LM Studio, Ollama, un serveur llama.cpp et tout point de terminaison compatible OpenAI — flexible pour qui fait déjà tourner un serveur local.',
            'Limite / réserve': 'La qualité et la vitesse du modèle dépendent entièrement du serveur auquel vous vous connectez, pas de l\'application elle-même.',
          },
          {
            'Avantage': 'Palier Pro dense en fonctionnalités',
            'Ce que cela signifie en usage réel': 'Outils MCP, personas, mémoire longue durée, sortie JSON structurée et export multi-format couvrent des usages avancés que la plupart des concurrents ignorent.',
            'Limite / réserve': 'Cette richesse ajoute un achat de 9,99 $ en plus de l\'application de base, et la voie locale coûte 4,99 $ supplémentaires.',
          },
          {
            'Avantage': 'Aucun compte requis',
            'Ce que cela signifie en usage réel': 'Installez et commencez à discuter sans vous inscrire à quoi que ce soit.',
            'Limite / réserve': 'L\'application étant à code fermé, l\'affirmation « aucun suivi tiers » repose sur la déclaration de l\'éditeur, pas sur un audit de code indépendant.',
          },
          {
            'Avantage': 'Application Apple native et soignée',
            'Ce que cela signifie en usage réel': 'Fonctionne comme une application à part entière sur iPhone, iPad, Mac et Vision Pro avec un seul achat.',
            'Limite / réserve': 'Réservée à Apple — pas de version Android ou Windows, contrairement à certains concurrents de type client-serveur.',
          },
          {
            'Avantage': 'Tarification étagée flexible',
            'Ce que cela signifie en usage réel': 'Les utilisateurs n\'ayant besoin que de la fonction client-serveur peuvent entièrement ignorer le module local à 4,99 $.',
            'Limite / réserve': 'La structure à trois paliers (gratuit/Pro/local) est moins transparente au premier coup d\'œil qu\'un prix unique, et facilement mal comprise comme « 9,99 $ pour tout avoir ».',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Chapper face aux alternatives',
        columns: ['Appli', 'Plateformes', 'Prix', 'Accès aux modèles', 'Différence clé'],
        rows: [
          {
            'Appli': 'Chapper',
            'Plateformes': 'iPhone/iPad/Mac/Vision Pro (Apple uniquement)',
            'Prix': 'Gratuit (limite 20 chats) / 9,99 $ Pro / +4,99 $ local',
            'Accès aux modèles': 'LM Studio, Ollama, llama.cpp, API compatibles OpenAI ; local via MLX/Foundation Models (module payant)',
            'Différence clé': 'Avant tout un client serveur ; l\'inférence locale est un achat séparé',
          },
          {
            'Appli': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iPhone/iPad, avec un support Android partiel',
            'Prix': 'Gratuit, open source',
            'Accès aux modèles': 'Tout fichier GGUF, entièrement local par défaut',
            'Différence clé': 'Gratuit, open source et local dès le départ — aucun serveur ni module nécessaire',
          },
          {
            'Appli': '[Private LLM](/fr/power-local-llm/private-llm-review)',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Prix': 'Achat unique à 4,99 $',
            'Accès aux modèles': 'Plus de 140 modèles locaux sélectionnés avec quantification OmniQuant/GPTQ',
            'Différence clé': 'Prix fixe unique, uniquement local, pas de mode client-serveur',
          },
          {
            'Appli': '[Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            'Plateformes': 'Voir l\'avis complet pour la compatibilité actuelle',
            'Prix': 'Voir la fiche actuelle',
            'Accès aux modèles': 'Voir l\'avis complet pour le support actuel des modèles',
            'Différence clé': 'Application bureau centrée sur le roleplay/chat de personnages, contrairement au client généraliste de Chapper',
          },
          {
            'Appli': '[SillyTavern vs. Agnai vs. RisuAI](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
            'Plateformes': 'Interfaces navigateur auto-hébergées',
            'Prix': 'Gratuit, open source',
            'Accès aux modèles': 'Se connecte à tout backend local ou cloud, centré sur les fiches de personnages',
            'Différence clé': 'Écosystème roleplay/fiches de personnages plutôt qu\'application mobile native',
          },
          {
            'Appli': '[LLM Farm](https://llmfarm.space/)',
            'Plateformes': 'iOS/Mac (open source, GitHub : [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Prix': 'Gratuit, open source',
            'Accès aux modèles': 'Modèles GGUF personnalisés via llama.cpp/ggml, local par défaut',
            'Différence clé': 'Selon son propre README GitHub, retirée de l\'App Store et de TestFlight en août 2025 — vérifiez la disponibilité actuelle',
          },
          {
            'Appli': '[Layla](https://www.layla-network.ai/)',
            'Plateformes': 'iOS et Android',
            'Prix': '19,99 $ plus achats intégrés',
            'Accès aux modèles': 'Modèles GGUF personnalisés ; orientée personnages/roleplay avec plus de 100 voix',
            'Différence clé': 'Multiplateforme, orientée personnages/roleplay, plus chère que Chapper',
          },
          {
            'Appli': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plateformes': 'Application Flutter multiplateforme (Android en priorité)',
            'Prix': 'Gratuit, open source (licence MIT)',
            'Accès aux modèles': 'Tout fichier GGUF via llama.cpp ; se connecte aussi à distance à Anthropic, DeepSeek, Ollama, Mistral, OpenAI',
            'Différence clé': 'Gratuite, entièrement open source, combine accès local et distant comme Chapper, mais multiplateforme',
          },
          {
            'Appli': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plateformes': 'Android',
            'Prix': 'Gratuit, open source',
            'Accès aux modèles': 'Plusieurs API de fournisseurs cloud plus exécution locale',
            'Différence clé': 'Équivalent Android uniquement du modèle de client multi-backend de Chapper',
          },
          {
            'Appli': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plateformes': 'Android (iOS prévu)',
            'Prix': 'Gratuit, open source',
            'Accès aux modèles': 'Exécute des modèles GGUF localement via Cactus Compute, ou se combine à un serveur AnythingLLM auto-hébergé',
            'Différence clé': 'Conçue spécifiquement pour se combiner à un espace de travail AnythingLLM auto-hébergé, pas un client multi-backend général',
          },
        ],
        note: 'Les détails de plateforme, prix et fonctionnalités des applications tierces changent fréquemment — vérifiez les informations actuelles sur la fiche de chaque application avant de vous décider. La disponibilité de LLM Farm sur l\'App Store en particulier devrait être revérifiée, son propre README GitHub la décrivant comme retirée de l\'App Store depuis août 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Chapper est adaptée',
        items: [
          '**Les lecteurs qui font déjà tourner LM Studio ou Ollama sur un Mac ou un PC.** La valeur principale de Chapper est une interface mobile native pour un serveur que vous avez déjà en marche — c\'est son cas d\'usage le plus solide et le mieux vérifié.',
          '**Les utilisateurs exclusivement Apple qui veulent une seule application pour le chat via serveur et le chat local.** Si vous êtes prêt à payer à la fois Pro et le module local, Chapper couvre une gamme d\'usages plus large qu\'une application à but unique.',
          '**Les utilisateurs avancés qui veulent des outils MCP, des personas et une sortie JSON structurée.** La liste de fonctionnalités du palier Pro est plus dense que la plupart des applications de cette catégorie, utile pour scripter ou automatiser autour de sa configuration IA locale.',
          '**Les lecteurs à l\'aise pour évaluer une application jeune et de petite taille.** Avec seulement 8 notes sur l\'App Store au moment de cet avis, Chapper en est au début de son historique public — acceptable pour qui aime tester des outils récents, moins pour qui privilégie un long historique éprouvé.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Chapper n\'est pas adaptée',
        items: [
          '**Les lecteurs qui veulent une application à achat unique, entièrement locale, sans configuration serveur.** La voie locale de Chapper coûte 4,99 $ de plus que Pro et n\'est pas la conception première de l\'application — [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) (gratuite) ou [Private LLM](/fr/power-local-llm/private-llm-review) (4,99 $ prix fixe) répondent plus directement à ce besoin.',
          '**Les utilisateurs Android, Windows ou Linux.** Chapper n\'a d\'application officielle sur aucune de ces plateformes — envisagez plutôt [RikkaHub](https://github.com/rikkahub/rikkahub), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) ou [AnythingLLM Mobile](https://anythingllm.com/mobile).',
          '**Les lecteurs qui veulent un large catalogue de modèles locaux nommés et sélectionnés.** Ni la fiche App Store ni le site de l\'éditeur ne publient de liste fixe de modèles comparable aux plus de 140 modèles sélectionnés de Private LLM ; la sélection locale dépend plutôt de l\'écosystème MLX/Foundation Models d\'Apple.',
          '**Les lecteurs qui veulent un long historique public avant de confier à une application l\'accès à une infrastructure locale.** Avec une présence sur l\'App Store qui semble avoir démarré en 2026 et seulement 8 notes au total, Chapper n\'a pas encore l\'historique de plusieurs années qu\'affichent Private LLM (lancée en 2023) ou des projets open source établis.',
          '**Les lecteurs qui recherchent spécifiquement des fonctionnalités de roleplay ou de fiches de personnages.** Chapper est un client de chat/API généraliste, pas une application de chat de personnages — [Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay-2026) ou les outils comparés dans [SillyTavern vs. Agnai vs. RisuAI](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) sont conçus spécifiquement pour cet usage.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Combien coûte Chapper ?',
            a: 'Chapper est gratuite à télécharger avec une limite de 20 conversations. [Chapper Pro coûte 9,99 $ en achat unique](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) et supprime la limite tout en débloquant la plupart des fonctionnalités avancées. L\'inférence locale sur l\'appareil est un achat intégré séparé à 4,99 $, en plus de Pro, selon la fiche App Store actuelle. Vérifié pour cet avis le 06/09/2026 — les prix App Store peuvent varier selon la région et évoluer dans le temps.',
          },
          {
            q: 'Chapper fait-elle tourner les modèles d\'IA entièrement sur mon iPhone ?',
            a: 'Seulement si vous achetez le module séparé « On Device Local Inference » à 4,99 $, qui utilise le framework MLX d\'Apple et, lorsque disponibles, les Apple Foundation Models. Par défaut et dans sa conception première, Chapper est un client qui se connecte à LM Studio, Ollama, un serveur llama.cpp ou un point de terminaison compatible OpenAI hébergé ailleurs.',
          },
          {
            q: 'Qui développe Chapper ?',
            a: 'Chapper est développée par [Prevolut Ltd](https://prevolut.uk/products/chapper/), une société immatriculée en Angleterre et au pays de Galles (numéro Companies House 17058766). Elle n\'a aucun lien avec l\'application bancaire Revolut malgré la ressemblance du nom.',
          },
          {
            q: 'Chapper est-elle disponible sur Android ou Windows ?',
            a: 'Non. Chapper est conçue exclusivement pour iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon) et Apple Vision Pro. Il n\'existe aucune version officielle Android, Windows ou Linux.',
          },
          {
            q: 'Quels backends Chapper prend-elle en charge ?',
            a: 'Selon le site de l\'éditeur, Chapper « fonctionne nativement avec LM Studio, Ollama, un serveur llama.cpp et toute API compatible OpenAI ». Vous pouvez aussi la connecter à un serveur auto-hébergé sur votre propre réseau.',
          },
          {
            q: 'Chapper nécessite-t-elle un compte ?',
            a: 'Non. L\'éditeur affirme qu\'aucun compte n\'est requis, et Chapper s\'utilise sans aucune inscription — y compris pour les achats intégrés, qui passent par le circuit d\'achat standard d\'Apple.',
          },
          {
            q: 'Chapper collecte-t-elle mes données ?',
            a: 'Le site de l\'éditeur affirme qu\'aucun suivi tiers n\'est utilisé et que les conversations restent sur l\'appareil sauf activation de la synchronisation iCloud ou connexion à votre propre serveur externe. Cet avis se fonde sur cette affirmation ; Chapper étant à code fermé, elle n\'a pas fait l\'objet d\'un audit de code indépendant pour cet avis.',
          },
          {
            q: 'Comment Chapper se compare-t-elle à PocketPal AI ?',
            a: 'PocketPal AI est gratuite, open source et locale par défaut, sans serveur nécessaire. Chapper est avant tout un client pour serveurs LM Studio, Ollama et compatibles OpenAI, l\'inférence réellement locale étant vendue en module séparé à 4,99 $ en plus d\'un achat Pro à 9,99 $. Choisissez PocketPal AI pour une seule application gratuite et entièrement locale ; choisissez Chapper si vous avez déjà un serveur local en marche et voulez une interface mobile native et riche en fonctionnalités pour celui-ci.',
          },
          {
            q: 'Chapper est-elle bien notée ?',
            a: 'Au moment de cet avis, Chapper affiche 3,3 sur 5 étoiles pour 8 notes sur l\'App Store — un échantillon très réduit qui ne devrait pas être traité comme un signal fort dans un sens ou dans l\'autre. L\'application semble relativement récente, à en juger par sa numérotation de versions et son identifiant App Store.',
          },
          {
            q: 'Qu\'est-ce que la fonctionnalité « C.A.S.H. » dans Chapper ?',
            a: 'C.A.S.H. est un outil de flux de travail terminal/shell sandboxé inclus dans Chapper, introduit comme élément central de la version 1.2.0. Les supports de l\'éditeur la décrivent comme un moyen d\'exécuter des flux de travail sandboxés depuis l\'application ; cet avis n\'a pas testé indépendamment l\'ensemble de ses capacités ni ses limites de sécurité.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Chapper est une application capable et riche en fonctionnalités pour les lecteurs qui font déjà tourner LM Studio ou Ollama et veulent un client Apple natif pour cela — les outils MCP, les personas, la sortie structurée et l\'export multi-format du palier Pro vont plus loin que la plupart des applications de cette catégorie. Sa tarification est aussi son plus gros point de friction : un palier gratuit limité à 20 conversations, un achat Chapper Pro à 9,99 $, et des frais supplémentaires de 4,99 $ juste pour faire tourner des modèles entièrement en local, cela forme une structure de coûts plus étagée que les prix fixes uniques de PocketPal AI (gratuite) ou Private LLM (4,99 $). Ajouté à un historique public encore mince (8 notes App Store, un lancement apparent en 2026 et aucune date confirmée de sortie 1.0 dans les sources disponibles pour cet avis), Chapper apparaît comme une application prometteuse mais jeune, plutôt qu\'établie. Les lecteurs qui ont déjà un serveur local en marche et cherchent un moyen soigné d\'y accéder depuis iPhone ou iPad devraient d\'abord essayer le palier gratuit ; ceux qui veulent une application à achat unique, entièrement locale, devraient plutôt commencer par [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private LLM](/fr/power-local-llm/private-llm-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Chapper sur l\'App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — prix, achats intégrés, compatibilité des plateformes, notes et notes de version.',
          '[Site officiel de Chapper](https://chapper.app/) — liste des fonctionnalités, compatibilité des backends et déclarations de confidentialité.',
          '[Prevolut Ltd — page produit Chapper](https://prevolut.uk/products/chapper/) — modèle tarifaire, limites du palier gratuit et détails de l\'entreprise.',
          '[Politique de confidentialité](https://prevolut.uk/products/chapper/privacy) et [conditions d\'utilisation](https://prevolut.uk/products/chapper/terms) de Chapper — conditions légales complètes.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une alternative gratuite, open source et locale par défaut.',
          '[Avis Private LLM](/fr/power-local-llm/private-llm-review) — une application Apple à prix fixe de 4,99 $, entièrement locale, avec plus de 140 modèles sélectionnés.',
          '[Avis Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay-2026) — une application d\'IA locale centrée sur le roleplay, pour un usage différent de Chapper.',
          '[SillyTavern vs. Agnai vs. RisuAI](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — une comparaison d\'interfaces de roleplay auto-hébergées.',
          '[Les meilleures applications LLM local pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif complet des applications iPhone pour situer Chapper.',
          '[L\'annuaire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un annuaire plus large d\'outils LLM local sur toutes les plateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chapper-review-hero-ja.webp',
    title: 'Chapperレビュー(2026年):iPhone・iPad・Mac向けAI & LM Studioクライアント',
    seoTitle: 'Chapperレビュー2026:iPhone・Mac向けLM Studioクライアント',
    intro:
      '[Prevolut Ltd](https://prevolut.uk/products/chapper/)が開発するChapperは、ローカルおよびセルフホストのAIモデルとチャットするためのiPhone・iPad・Mac向けネイティブアプリです。ダウンロードは無料で会話数20件までの制限があり、[Chapper Proの買い切り9.99ドル](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)を購入すると完全にアンロックされます。現在のApp Store掲載情報によると、真のオンデバイス推論(サーバーに接続せずデバイス上で直接モデルを実行すること)は別売りのアプリ内課金4.99ドルとして販売されています。App Storeの価格は地域により異なる場合があるため、購入前に日本のApp Storeで現在の価格をご確認ください。Chapperの主な設計思想は、[LM Studio](https://lmstudio.ai/)、[Ollama](https://ollama.com/)、llama.cppサーバー、およびOpenAI互換エンドポイント向けの洗練されたクライアントというもので、MacやPC上のサーバーを指定してスマートフォンからチャットする形が中心です。それに加えてMLXとApple Foundation Modelsによるオンデバイスサポートが搭載されています。本レビューでは、この段階的な価格モデル、まだ少ないレビュー件数(執筆時点でApp Store評価3.3/5、8件)、そして[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private LLM](/ja/power-local-llm/private-llm-review)のような完全オンデバイスでサーバー不要のアプリとの比較を検証します。',
    metaDescription:
      'Chapperレビュー2026:無料(20チャット制限)、Pro買い切り9.99ドル、オンデバイス推論追加課金4.99ドル。iPhone/iPad/Mac向けLM Studio・Ollamaクライアント — 価格、プライバシー、代替アプリを解説。',
    twitterDescription:
      'Chapperレビュー2026:LM Studio、Ollama、OpenAI互換エンドポイントとチャットできるiPhone/iPad/Macアプリ。オンデバイス推論は別売り。価格、プライバシー、PocketPal AI・Private LLMとの比較。',
    audience:
      'Mac・PCでLM StudioやOllamaを既に運用しており、ネイティブなモバイルクライアントを求めるiPhone・iPad・Macユーザー、またはChapperの段階的価格(無料/Pro/オンデバイス)とPocketPal AIやPrivate LLMのような完全オンデバイスアプリの間で迷っている読者。',
    readTime: '9分で読了',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Chapper review',
    targetKeywords: [
      'chapper review',
      'chapper app iphone',
      'chapper ai lm studio client',
      'chapper pro price',
      'chapper on device inference',
      'lm studio client iphone',
      'ollama client iphone ipad',
      'chapper vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama', 'Qwen', 'Gemma', 'Mistral', 'Apple Foundation Models'],
    current_hardware_mentioned: ['iPhone(iOS 17以降)', 'iPad(iPadOS 17以降)', 'Apple Silicon Mac(M1以降)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Chapperは[Prevolut Ltd](https://prevolut.uk/products/chapper/)が開発する、無料お試し可能・Pro9.99ドルのiPhone・iPad・Mac向けアプリで、主にLM Studio、Ollama、llama.cppサーバー、OpenAI互換エンドポイント向けクライアントとして設計されており、真のオンデバイスモデル実行は別売り4.99ドルの追加課金として販売されています。**無料プランは会話数20件が上限で、Chapper Proはこの上限を解除し、開発者自身のサイトによれば高度なサンプリング設定、エクスポート形式、ペルソナ、MCPツール、長期記憶、iCloud同期をアンロックします。別売り・サーバー設定なしでモデルをスマートフォン上で完全に実行したい読者は、無料かつ標準でオンデバイスな[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比較検討すべきです。',
    quickAnswerTop: {
      ja: {
        question: 'ChapperはiPhone上でAIモデルを完全に実行することと同じですか?',
        answer:
          '標準ではそうではありません。Chapperは主に、iPhone・iPad・Macを別のマシン上で稼働するLM Studio、Ollama、llama.cppサーバー、またはOpenAI互換エンドポイントに接続するクライアントです。真のオンデバイス推論は、アプリ自体(無料で会話数20件制限、またはChapper Proで9.99ドル)に加えて、別売りのアプリ内課金4.99ドルとなります。',
        bullets: [
          '無料プランは会話数20件が上限。Chapter Proは買い切り9.99ドル。',
          'App Store掲載情報によると、オンデバイスのローカル推論は別売りのアプリ内課金4.99ドル。',
          '主なバックエンド:LM Studio、Ollama、llama.cppサーバー、OpenAI互換API。',
          'iPhone・iPad・Mac(Apple Silicon)・Apple Vision Proのみ対応 — AndroidやWindows版はなし。',
          '開発者はアカウント不要、サードパーティによる追跡なしと表明。iCloud同期を有効にしない限りチャットはデバイス内にとどまる。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Chapperとは', anchor: 'what-is-chapper' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '価格:無料プラン、Pro、オンデバイス追加課金', anchor: 'pricing' },
      { label: '対応バックエンドとモデル', anchor: 'models-and-backends' },
      { label: '対応プラットフォーム:iPhone・iPad・Mac・Vision Pro', anchor: 'platforms' },
      { label: 'プライバシー:Chapperが収集するものとしないもの', anchor: 'privacy' },
      { label: '開発企業とバージョン履歴', anchor: 'history' },
      { label: 'トレードオフ:メリットと制限', anchor: 'tradeoffs' },
      { label: 'Chapperと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'Chapperをおすすめする人', anchor: 'who-should-use' },
      { label: 'Chapperをおすすめしない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点まとめ',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ChapperはPrevolut Ltdが開発する、無料お試し可能・Pro9.99ドルのiPhone/iPad/Macアプリで、主にLM Studio、Ollama、llama.cppサーバー、OpenAI互換エンドポイント向けクライアントとして設計されており、真のオンデバイスモデル実行は別売り4.99ドルの追加課金として提供される。',
          },
          {
            type: 'plain-terms',
            text: 'まずChapperを、Mac・PC上で動くAIモデル(LM StudioやOllama経由)のリモコンアプリと考え、追加料金を払ってローカル推論を解除した場合に限りオンデバイスチャットアプリになる、と理解してください。一部の競合アプリのように単一の購入で最初から完全にオンデバイスというわけではありません。',
          },
        ],
        items: [
          '価格:無料(会話数20件まで)。[Chapper Proは買い切り9.99ドル](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)。現在のApp Store掲載情報によれば、オンデバイスのローカル推論は別売りアプリ内課金4.99ドル。',
          '対応プラットフォーム:iPhone(iOS 17以降)、iPad(iPadOS 17以降)、Mac(macOS 14以降、Apple Silicon)、Apple Vision Pro(visionOS 1.0以降) — AndroidやWindows版はなし。',
          '開発元:[Prevolut Ltd](https://prevolut.uk/products/chapper/)。英国登録企業(Companies House登録番号17058766) — 名称は似ているが銀行アプリRevolutとは無関係。',
          'バックエンド:LM Studio、Ollama、llama.cppサーバー、あらゆるOpenAI互換APIとネイティブに連携。オンデバイスサポートはApple製MLXフレームワークと、利用可能な場合はApple Foundation Modelsを使用。',
          '機能:MCPツール連携、サンドボックス化された「C.A.S.H.」ターミナルワークフローツール、カスタムペルソナ、構造化JSON出力、複数形式でのエクスポート(TXT、PDF、HTML、Markdown、JSON、CSV、XML)、音声合成、生のAPIリクエストインスペクター。',
          'プライバシー:開発者はアカウント不要、サードパーティによる追跡なしと表明。iCloud同期やリモートサーバー接続を有効にしない限り、チャットはデバイス内にとどまる。',
          'レビュー件数はまだ少ない:執筆時点でApp Store評価は5点満点中3.3、評価件数8件 — いずれの方向にも強い結論を導くには小さすぎるサンプル。',
          'バージョン1.3.1(App Store掲載、2026年8月6日付)が現行版。バージョン番号とApp Store IDから判断すると、2026年中にApp Storeでリリースされたとみられる。',
        ],
      },
      whatIsChapper: {
        id: 'what-is-chapper',
        title: 'Chapperとは',
        content: [
          '**ChapperはApp Storeで「Chapper: AI & LM Studio Client」として掲載されているApple純正アプリで、iPhone・iPad・MacをAIモデルに接続します — オンデバイス、または自分で管理するサーバーのいずれかに。** App Store上の名称にも表れている通り、その中核的な位置づけは[LM Studio](https://lmstudio.ai/)向けクライアントです。MacやPC上でLM Studio、Ollama、llama.cppサーバーを使ってモデルを実行し、Chapperがスマートフォンやタブレットからチャットするためのネイティブなモバイルインターフェースを提供します。',
          '開発元は[Prevolut Ltd](https://prevolut.uk/products/chapper/)で、イングランド・ウェールズに登録された企業です(Companies House登録番号17058766)。名称は銀行アプリRevolutに似ていますが、両者は無関係の企業です — Chapperの開発元はこのAIクライアントに特化した、より小規模な独立企業です。',
          'オンデバイス推論 — サーバーを介さずスマートフォンやMac上で直接モデルを実行すること — もサポートされており、Apple製MLXフレームワークと、利用可能な場合はApple自身のFoundation Modelsを使用します。ただし現在のApp Store内アプリ内課金リストによれば、この機能は基本アプリやProプランに自動的に含まれるのではなく、「On Device Local Inference」という別売りとして販売されています。追加のアンロックなしに標準でオンデバイス動作するアプリを求める読者は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private LLM](/ja/power-local-llm/private-llm-review)のような完全ローカルアプリと比較検討すべきです。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**Chapperの始め方は、サーバーに接続する予定か、オンデバイスでモデルを実行する予定かによって異なります。** いずれの場合もアカウント作成は不要です。',
        ],
        numberedItems: [
          {
            title: 'アプリをダウンロード',
            whyItMatters: '[Apple App Storeから無料でChapperを入手](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)します。無料プランでは会話数20件までアプリを試すことができ、Pro購入の判断材料になります。',
          },
          {
            title: 'サーバー方式かオンデバイスかを決める',
            whyItMatters: '既にMacやPCで[LM Studio](https://lmstudio.ai/)や[Ollama](https://ollama.com/)を運用している場合は、そのサーバーのアドレスにChapperを接続するのが最も早くチャットを動かす方法です。別のコンピューターなしでスマートフォン上に直接モデルを実行させたい場合は、追加のアプリ内課金「On Device Local Inference」(4.99ドル)が必要です。',
          },
          {
            title: 'バックエンドを接続するかモデルを選ぶ',
            whyItMatters: 'サーバーモードでは、LM Studio、Ollama、llama.cppサーバー、またはOpenAI互換エンドポイントのアドレスをChapperに指定します。オンデバイスモードでは、Apple製MLXフレームワークと、利用可能な場合はApple Foundation Modelsを通じてサポートされるモデルから選択します。',
          },
          {
            title: 'Proにするか判断する',
            whyItMatters: '無料プランの会話数20件の上限で、アプリが自分のワークフローに合うか判断するには十分です。[Chapper Pro(買い切り9.99ドル)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)は開発者自身の機能一覧によれば上限を解除し、ペルソナ、MCPツール、長期記憶、全エクスポート形式、iCloud同期を追加します。',
          },
          {
            title: '任意:iCloud同期を有効にする',
            whyItMatters: '会話をiPhone・iPad・Mac間で引き継ぎたい場合、開発者のプライバシーページによればiCloud同期は任意設定でエンドツーエンド暗号化されています — 標準では無効になっています。',
          },
        ],
        note: '正確なアプリ内課金価格、Proとオンデバイス追加課金の機能分担、対応モデルリストはApp Storeのアップデートごとに変わる可能性があります。購入前にアプリ内または[chapper.app](https://chapper.app/)で最新の詳細をご確認ください。',
      },
      pricing: {
        id: 'pricing',
        title: '価格:無料プラン、Pro、オンデバイス追加課金',
        itemHeadings: true,
        content: [
          '**Chapperはこのカテゴリのほとんどのアプリよりも段階的な3段階の価格構成を採用しています。** 基本アプリは無料、Chapper Proの買い切り購入でほとんどの高度な機能がアンロックされ、真のオンデバイスモデル実行はさらに別料金となります。これらの数値は本レビューのために[App Store掲載情報](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)および[chapper.app](https://chapper.app/)と照合して確認済みです。',
        ],
        columns: ['プラン', '価格', 'アンロックされる内容'],
        rows: [
          {
            'プラン': '無料',
            '価格': '0ドル',
            'アンロックされる内容': '基本的なチャット機能、会話数20件まで',
          },
          {
            'プラン': 'Chapper Pro',
            '価格': '9.99ドル(買い切り)',
            'アンロックされる内容': '無制限の会話、高度なサンプリング設定、全エクスポート形式、ペルソナ、MCPツール、長期記憶、分析機能、カスタムアプリアイコン、iCloud同期',
          },
          {
            'プラン': 'On Device Local Inference',
            '価格': '4.99ドル(買い切り、Proとは別)',
            'アンロックされる内容': 'LM Studio、Ollamaなど他のサーバーに接続する代わりに、Apple MLX / Foundation Models経由でモデルを直接オンデバイスで実行する機能',
          },
          {
            'プラン': '「Tea」チップ',
            '価格': '0.99〜44.99ドル',
            'アンロックされる内容': '開発者への任意の一回限りのチップ。機能的なアンロックはなし',
          },
        ],
        note: 'Prevolut Ltd自身のサイトでは、Chapper Proを「サブスクリプションなし、隠れた費用なし」と説明しており、購入後に追加される将来のPro機能はすべて自動的に含まれるとしています。App Storeの価格は変更される可能性があり、地域によっても異なります — 購入前に[App Store掲載情報](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)で現在の価格をご確認ください。本レビューのため2026年9月6日に確認済み。',
      },
      modelsAndBackends: {
        id: 'models-and-backends',
        title: '対応バックエンドとモデル',
        content: [
          '**Chapperの主な統合対象はリモートバックエンドであり、厳選されたオンデバイスモデルライブラリではありません。** 開発者自身のサイトによると、「LM Studio、Ollama、llama.cppサーバー、あらゆるOpenAI互換APIとネイティブに連携する」とされており、自分のネットワーク上にセルフホストしたサーバーを含め、そのプロトコルを話すあらゆるエンドポイントにChapperを向けることができます。',
          'オンデバイス利用(別売りの4.99ドル追加課金)では、Apple Silicon向けに構築された機械学習フレームワークである**MLX**、およびOSが提供する場合は**Apple Foundation Models**(対応ハードウェア・OSバージョンでサードパーティアプリに提供されるApple自身のオンデバイスモデル)を通じてモデルをサポートします。App Store掲載情報も開発者のサイトも、一部の競合アプリ(例えばPrivate LLMの140以上の厳選モデルライブラリ)のような固定された名前付きのオンデバイスモデルリストを公開していません。本レビューでは、Chapperのオンデバイスモデル選択は、大規模な厳選GGUFカタログよりもApple自身のMLX/Foundation Modelsエコシステムに依存する、より限定的なものとして扱います。',
          'サーバー経由の方式では、モデルの品質と速度は完全に自分のマシン上でLM StudioやOllamaで何を動かすかに依存するため、完全オンデバイスアプリのようにChapper自体がモデル能力の上限を決めるわけではありません — Chapperは輸送層・インターフェース層であり、実際の推論は自分のハードウェアが担います。',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '対応プラットフォーム:iPhone・iPad・Mac・Vision Pro',
        itemHeadings: true,
        columns: ['プラットフォーム', '想定される内容', '重要な注意点'],
        rows: [
          {
            'プラットフォーム': 'iPhone',
            '想定される内容': 'App Store掲載情報によればiOS 17.0以降が必要。',
            '重要な注意点': 'サーバー経由のチャット(LM Studio/Ollama)にはそのサーバーへのネットワーク経路が必要。オンデバイスチャットには別売り4.99ドルの追加課金が必要。',
          },
          {
            'プラットフォーム': 'iPad',
            '想定される内容': 'iPadOS 17.0以降が必要。iPhoneと同じアプリ・機能セット。',
            '重要な注意点': '標準のApp Store互換性以上のiPad固有のレイアウト詳細は公開されていない。',
          },
          {
            'プラットフォーム': 'Mac',
            '想定される内容': 'App Store掲載情報によればApple M1チップ以降を搭載したmacOS 14.0以降が必要。',
            '重要な注意点': 'MacはLM Studio/Ollamaの最も一般的なホストでもあるため、多くのユーザーはサーバーとChapperクライアントを同じマシンで動かすか、サーバーをMacで、クライアントをiPhone/iPadで動かすことになる。',
          },
          {
            'プラットフォーム': 'Apple Vision Pro',
            '想定される内容': 'App Store掲載情報ではvisionOS 1.0以降の互換性が示されている。',
            '重要な注意点': '本レビューではVision Pro上での体験を独自に検証していない。実際に確認された機能ではなく、App Store掲載上の互換性として扱うこと。',
          },
          {
            'プラットフォーム': 'Android、Windows、Linux',
            '想定される内容': 'Google Play、Microsoft Store、Linuxパッケージリポジトリのいずれにも公式アプリなし。',
            '重要な注意点': 'LM Studio/Ollamaに接続する同様のモバイルクライアントを求めるAndroid・Windowsユーザーは、[RikkaHub](https://github.com/rikkahub/rikkahub)(Android)や[AnythingLLM Mobile](https://anythingllm.com/mobile)(Android、iOSは計画中)を検討すべき。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー:Chapperが収集するものとしないもの',
        content: [
          '**Prevolut Ltd自身のサイトでは、Chapperはアカウントを必要とせず「サードパーティによる追跡なし」と述べられており**、読者がiCloud同期を明示的に有効にするか、自分の外部サーバーに接続しない限り、会話はデバイス内に保存されるとしています。アプリの基本設計が自分で管理するバックエンド(自分のLM Studio/Ollamaサーバー、またはオンデバイス推論)経由でチャットをルーティングするため、Prevolut自身のインフラに実際に届くデータ量はポリシーだけでなくこのアーキテクチャによって制限されています。',
        ],
        items: [
          '**アカウント不要。** Apple標準の購入フローを通じたアプリ内課金を含め、Chapper固有のプロフィールを作成することなくダウンロード・利用できる。',
          '**開発者自身の表明によるサードパーティ追跡なし。** 本レビューはこの表明に依拠しており、クローズドソースであるアプリのネットワーク通信を独立して監査したものではない。',
          '**開発者によればiCloud同期は任意設定でエンドツーエンド暗号化。** 標準では無効。有効にすることが、チャットデータがローカルデバイスを離れる唯一の文書化されたケースであり、その送信先はPrevoluのサーバーではなく読者自身のiCloudアカウント。',
          '**サーバー接続は設定したエンドポイントにデータを送信する。** ChapperをローカルのLM Studio/Ollamaサーバーではなく、サードパーティやクラウドホスト型のOpenAI互換APIに接続した場合、プロンプトはそのエンドポイント自身のプライバシー規約のもとで送信される — これはChapper特有の性質ではなく、クライアント/サーバーモデル一般の性質である。',
          '**プライバシーポリシーと利用規約は公開されている** — [prevolut.uk/products/chapper/privacy](https://prevolut.uk/products/chapper/privacy)および[prevolut.uk/products/chapper/terms](https://prevolut.uk/products/chapper/terms)を直接お読みください。マーケティング資料のみに頼らず、現行の完全な法的条件を確認することをおすすめします。',
        ],
      },
      history: {
        id: 'history',
        title: '開発企業とバージョン履歴',
        content: [
          '**Chapperは[Prevolut Ltd](https://prevolut.uk/products/chapper/)によって開発されており、Companies House登録番号17058766でイングランド・ウェールズに登録された企業です。** 公開されているApp Storeのデータには正確な初回リリース日は記載されていませんが、比較的高いApp Store ID(6760984679)と初期のバージョン番号から、2026年のリリースであることが示唆されます。',
        ],
        items: [
          '**バージョン1.1.0。** 開発者自身により、これまでのChapperの中で最大級のリリースの一つと説明されている。正確な日付は本レビューで利用可能な情報源には公開されていない。',
          '**バージョン1.2.0。** サンドボックス化されたターミナルワークフロー機能「C.A.S.H.」を中心とした大型アップデートで、品質改善も伴う。',
          '**バージョン1.3.1(2026年8月6日)。** 本レビュー時点での現行App Storeバージョン。「Agent Mode」の初公開、より迅速なモデル切り替え、より大きなAI回答フィールド、いくつかの小さな修正が追加されている。',
        ],
        note: 'バージョン履歴はアプリのApp Store上の公開された「新機能」リストから取得しています。本レビューではアプリの元となる1.0のリリース日を独自に確認できませんでした — 2026年リリースという推定は、バージョン番号とApp Store IDから導かれたものであり、開発者から確認された日付ではない点にご留意ください。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制限',
        columns: ['メリット', '実際の利用での意味', '制限・注意点'],
        rows: [
          {
            'メリット': '購入前に試せる無料プラン',
            '実際の利用での意味': '費用をかける前にインターフェースとサーバー接続をテストできる。',
            '制限・注意点': '会話数20件までに制限され、無料プランではオンデバイス推論はまったく利用できない。',
          },
          {
            'メリット': '幅広いバックエンド互換性',
            '実際の利用での意味': 'LM Studio、Ollama、llama.cppサーバー、あらゆるOpenAI互換エンドポイントと連携し、既にローカルサーバーを運用している人には柔軟。',
            '制限・注意点': 'モデルの品質と速度は、接続先のサーバーに完全に依存し、アプリ自体には依存しない。',
          },
          {
            'メリット': '機能が充実したProプラン',
            '実際の利用での意味': 'MCPツール、ペルソナ、長期記憶、構造化JSON出力、複数形式でのエクスポートなど、ほとんどの競合アプリが省略する高度なユースケースをカバーする。',
            '制限・注意点': 'この機能の幅広さは基本アプリに加えて9.99ドルの購入を伴い、オンデバイス経路にはさらに4.99ドルかかる。',
          },
          {
            'メリット': 'アカウント不要',
            '実際の利用での意味': '何にも登録することなくインストールしてすぐにチャットを始められる。',
            '制限・注意点': 'アプリがクローズドソースであるため、「サードパーティ追跡なし」という主張は独立したコードレビューではなく開発者自身の表明に基づいている。',
          },
          {
            'メリット': 'ネイティブで洗練されたApple製アプリ',
            '実際の利用での意味': '一度の購入でiPhone・iPad・Mac・Vision Pro全体にわたって一級市民として動作する。',
            '制限・注意点': 'Apple専用 — 一部のサーバークライアント系競合と異なりAndroidやWindows版はない。',
          },
          {
            'メリット': '柔軟な段階的価格設定',
            '実際の利用での意味': 'サーバークライアント機能のみが必要なユーザーは、4.99ドルのオンデバイス追加課金を完全にスキップできる。',
            '制限・注意点': '無料/Pro/オンデバイスの3段階構成は、単一の定額料金より一目で分かりにくく、「9.99ドルで全部揃う」と誤解されやすい。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Chapperと代替アプリの比較',
        columns: ['アプリ', '対応プラットフォーム', '価格', 'モデルアクセス', '主な違い'],
        rows: [
          {
            'アプリ': 'Chapper',
            '対応プラットフォーム': 'iPhone/iPad/Mac/Vision Pro(Appleのみ)',
            '価格': '無料(20チャット制限)/ Pro 9.99ドル / +オンデバイス4.99ドル',
            'モデルアクセス': 'LM Studio、Ollama、llama.cpp、OpenAI互換API。オンデバイスはMLX/Foundation Models経由(有料追加課金)',
            '主な違い': '主にサーバークライアント。オンデバイス推論は別売り',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            '対応プラットフォーム': 'iPhone/iPad、一部Android対応',
            '価格': '無料、オープンソース',
            'モデルアクセス': 'あらゆるGGUFファイル、標準で完全オンデバイス',
            '主な違い': '無料でオープンソース、最初からオンデバイス — サーバーや追加課金は不要',
          },
          {
            'アプリ': '[Private LLM](/ja/power-local-llm/private-llm-review)',
            '対応プラットフォーム': 'iPhone/iPad/Mac(Appleのみ)',
            '価格': '買い切り4.99ドル',
            'モデルアクセス': 'OmniQuant/GPTQ量子化による140以上の厳選オンデバイスモデル',
            '主な違い': '単一の定額料金、オンデバイス専用、サーバークライアントモードなし',
          },
          {
            'アプリ': '[Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            '対応プラットフォーム': '最新の対応プラットフォームは完全なレビューを参照',
            '価格': '現在の掲載情報を参照',
            'モデルアクセス': '最新の対応モデルは完全なレビューを参照',
            '主な違い': 'Chapperの汎用クライアントとは異なり、ロールプレイ/キャラクターチャットに特化したデスクトップ中心アプリ',
          },
          {
            'アプリ': '[SillyTavern vs. Agnai vs. RisuAI](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
            '対応プラットフォーム': 'ブラウザベースのフロントエンド、セルフホスト',
            '価格': '無料、オープンソース',
            'モデルアクセス': 'あらゆるローカル・クラウドバックエンドに接続、キャラクターカード中心',
            '主な違い': 'ネイティブモバイルアプリではなく、ロールプレイ/キャラクターカードのエコシステム',
          },
          {
            'アプリ': '[LLM Farm](https://llmfarm.space/)',
            '対応プラットフォーム': 'iOS/Mac(オープンソース、GitHub:[guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            '価格': '無料、オープンソース',
            'モデルアクセス': 'llama.cpp/ggml経由のカスタムGGUFモデル、標準でオンデバイス',
            '主な違い': '自身のGitHub READMEによれば2025年8月にApp StoreとTestFlightから削除された — 現在の入手可否は要確認',
          },
          {
            'アプリ': '[Layla](https://www.layla-network.ai/)',
            '対応プラットフォーム': 'iOSおよびAndroid',
            '価格': '19.99ドルに加えアプリ内課金',
            'モデルアクセス': 'カスタムGGUFモデル。100以上の音声を備えたキャラクター/ロールプレイ中心',
            '主な違い': 'クロスプラットフォームでキャラクター/ロールプレイ志向、Chapperより高価格',
          },
          {
            'アプリ': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            '対応プラットフォーム': 'クロスプラットフォームFlutterアプリ(主にAndroid)',
            '価格': '無料、オープンソース(MITライセンス)',
            'モデルアクセス': 'llama.cpp経由のあらゆるGGUFファイル。Anthropic、DeepSeek、Ollama、Mistral、OpenAIにもリモート接続可能',
            '主な違い': '無料で完全にオープンソース。Chapperと同様ローカル+リモートアクセスを組み合わせるがクロスプラットフォーム',
          },
          {
            'アプリ': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            '対応プラットフォーム': 'Android',
            '価格': '無料、オープンソース',
            'モデルアクセス': '複数のクラウドプロバイダーAPIとローカル実行',
            '主な違い': 'ChapperのマルチバックエンドクライアントモデルのAndroid専用版',
          },
          {
            'アプリ': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            '対応プラットフォーム': 'Android(iOSは計画中)',
            '価格': '無料、オープンソース',
            'モデルアクセス': 'Cactus Compute経由でGGUFモデルをオンデバイス実行、またはセルフホストのAnythingLLMサーバーと連携',
            '主な違い': '汎用マルチバックエンドクライアントではなく、セルフホストのAnythingLLMワークスペースと連携するために特化して設計',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム・価格・機能の詳細は頻繁に変更されます — 判断前に各アプリ自身の掲載情報で最新の詳細をご確認ください。特にLLM FarmのApp Store入手可否は再確認すべきです。自身のGitHub READMEでは2025年8月時点でApp Storeから削除されたと説明されています。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Chapperをおすすめする人',
        items: [
          '**既にMacやPCでLM StudioやOllamaを運用している読者。** Chapperの中核的な価値は、既に稼働中のサーバー向けのネイティブなモバイルフロントエンドであること — これがChapperの最も強力で最も検証されたユースケースです。',
          '**サーバー経由とオンデバイス両方のチャットを一つのアプリでまかないたいApple専用ユーザー。** Proとオンデバイス追加課金の両方を購入する意志があれば、Chapperは単機能アプリより幅広いワークフローをカバーします。',
          '**MCPツール、ペルソナ、構造化JSON出力を求めるパワーユーザー。** Proプランの機能一覧はこのカテゴリのほとんどのアプリより充実しており、ローカルAI環境の周りをスクリプト化・自動化したい読者に有用です。',
          '**新興の小規模アプリを評価することに抵抗がない読者。** 執筆時点でApp Storeの評価件数はわずか8件で、Chapperはまだ公開実績の初期段階にあります — 新しいツールを試すのが好きな読者には受け入れられますが、長く実証された実績を重視する読者には向きません。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Chapperをおすすめしない人',
        items: [
          '**サーバー設定なしで単一購入・完全オンデバイスのアプリを求める読者。** Chapperのオンデバイス経路はProに加えてさらに4.99ドルかかり、それはアプリの主な設計思想ではありません — [PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)(無料)や[Private LLM](/ja/power-local-llm/private-llm-review)(定額4.99ドル)の方がこのニーズに直接的に応えます。',
          '**Android・Windows・Linuxユーザー。** Chapperにはこれらのプラットフォーム向けの公式アプリはありません — 代わりに[RikkaHub](https://github.com/rikkahub/rikkahub)、[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)、[AnythingLLM Mobile](https://anythingllm.com/mobile)を検討してください。',
          '**大規模で名前の付いた厳選オンデバイスモデルカタログを求める読者。** App Store掲載情報も開発者のサイトも、Private LLMの140以上の厳選モデルに匹敵する固定モデルリストを公開していません。オンデバイスの選択肢は代わりにApple自身のMLX/Foundation Modelsエコシステムに依存します。',
          '**ローカルインフラへのアクセスをアプリに委ねる前に長い公開実績を求める読者。** 2026年初頭からのApp Store展開と合計8件の評価にとどまるChapperは、Private LLM(2023年開始)や既に確立されたオープンソースプロジェクトが持つ複数年にわたる実績をまだ築いていません。',
          '**特にロールプレイやキャラクターカード機能を求める読者。** Chapperはキャラクターチャットアプリではなく汎用チャット/APIクライアントです — [Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay-2026)や[SillyTavern vs. Agnai vs. RisuAI](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)で比較されているツールがこの用途に特化して作られています。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Chapperの料金はいくらですか?',
            a: 'Chapperは会話数20件までの制限付きで無料でダウンロードできます。[Chapper Proは買い切り9.99ドル](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)で、この制限を解除しほとんどの高度な機能をアンロックします。現在のApp Store掲載情報によれば、オンデバイスのローカル推論はProに加えて別売りのアプリ内課金4.99ドルです。本レビューのため2026年9月6日に確認済み — App Storeの価格は地域により異なり、時間とともに変更される場合があります。',
          },
          {
            q: 'ChapperはAIモデルを私のiPhone上で完全に実行しますか?',
            a: 'Apple製MLXフレームワークと、利用可能な場合はApple Foundation Modelsを使用する別売りの「On Device Local Inference」(4.99ドル)を購入した場合のみです。標準の状態、および主な設計思想では、Chapperは別の場所で稼働するLM Studio、Ollama、llama.cppサーバー、またはOpenAI互換エンドポイントに接続するクライアントです。',
          },
          {
            q: 'Chapperの開発元はどこですか?',
            a: 'Chapperは[Prevolut Ltd](https://prevolut.uk/products/chapper/)によって開発されており、イングランド・ウェールズに登録された企業です(Companies House登録番号17058766)。名称は似ていますが銀行アプリRevolutとは無関係です。',
          },
          {
            q: 'ChapperはAndroidやWindowsで利用できますか?',
            a: 'いいえ。Chapperはもっぱらお使いのiPhone(iOS 17以降)、iPad(iPadOS 17以降)、Mac(macOS 14以降、Apple Silicon)、Apple Vision Pro向けに構築されています。公式のAndroid、Windows、Linux版はありません。',
          },
          {
            q: 'Chapperはどのバックエンドに対応していますか?',
            a: '開発者自身のサイトによれば、Chapperは「LM Studio、Ollama、llama.cppサーバー、あらゆるOpenAI互換APIとネイティブに連携する」とされています。自分のネットワーク上のセルフホストサーバーに向けることもできます。',
          },
          {
            q: 'Chapperにはアカウントが必要ですか?',
            a: 'いいえ。開発者はアカウントが不要であると表明しており、Chapperは登録なしで利用できます — Apple標準の購入フローを通じたアプリ内課金も含みます。',
          },
          {
            q: 'Chapperは私のデータを収集しますか?',
            a: '開発者自身のサイトでは、サードパーティによる追跡は使用されておらず、iCloud同期を有効にするか自分の外部サーバーに接続しない限り会話はデバイス内にとどまると述べられています。本レビューはこの表明に依拠しており、Chapperはクローズドソースであるため本レビューのために独立したコード監査は行っていません。',
          },
          {
            q: 'ChapperはPocketPal AIと比べてどうですか?',
            a: 'PocketPal AIは無料でオープンソースであり、サーバー不要で標準でオンデバイスです。Chapperは主にLM Studio、Ollama、OpenAI互換サーバー向けのクライアントであり、真のオンデバイス推論はPro購入(9.99ドル)に加えて別売りの追加課金(4.99ドル)として販売されています。単一の無料で完全オンデバイスのアプリを求めるならPocketPal AIを、既にローカルサーバーを運用していてそのためのネイティブで機能豊富なモバイルフロントエンドを求めるならChapperを選んでください。',
          },
          {
            q: 'Chapperの評価は良いですか?',
            a: '本レビュー執筆時点で、ChapperはApp Storeで5点満点中3.3点、評価件数8件です — いずれの方向にも強いシグナルとして扱うべきではない非常に小さいサンプルです。バージョン番号とApp Store IDから判断すると、このアプリは比較的新しいと思われます。',
          },
          {
            q: 'Chapperの「C.A.S.H.」機能とは何ですか?',
            a: 'C.A.S.H.はChapperに搭載されたサンドボックス化されたターミナル/シェルワークフローツールで、バージョン1.2.0の目玉機能として導入されました。開発者の資料では、アプリ内からサンドボックス化されたワークフローを実行する手段として説明されていますが、本レビューではその全機能やセキュリティ境界を独自に検証していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          '既にLM StudioやOllamaを運用していて、そのためのネイティブなAppleクライアントを求める読者にとって、Chapperは有能で機能の充実したアプリです — ProプランのMCPツール、ペルソナ、構造化された出力、複数形式でのエクスポートは、このカテゴリのほとんどのアプリよりも踏み込んだ内容です。一方で価格設定は最大の摩擦点でもあります。会話数20件に制限された無料プラン、9.99ドルのChapper Pro購入、そしてモデルを完全にオンデバイスで実行するためだけにさらに4.99ドルかかるという構成は、PocketPal AI(無料)やPrivate LLM(4.99ドル)の定額の単一価格よりも段階的なコスト構造になっています。加えて、まだ薄い公開実績(App Store評価8件、2026年と見られるリリース、本レビューで利用可能な情報源には確認された1.0リリース日がないこと)を踏まえると、Chapperは確立されたアプリというよりは有望だが発展途上のアプリと言えます。既にローカルサーバーを運用しており、iPhoneやiPadから洗練された方法でそこにアクセスしたい読者はまず無料プランを試すべきです。単一購入で完全にオンデバイスのアプリを求める読者は、代わりに[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private LLM](/ja/power-local-llm/private-llm-review)から始めるべきです。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App Store上のChapper](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — 価格、アプリ内課金、プラットフォーム互換性、評価、バージョン情報。',
          '[Chapper公式サイト](https://chapper.app/) — 機能一覧、バックエンド互換性、プライバシーに関する表明。',
          '[Prevolut Ltd — Chapper製品ページ](https://prevolut.uk/products/chapper/) — 価格モデル、無料プランの制限、企業詳細。',
          '[Chapperプライバシーポリシー](https://prevolut.uk/products/chapper/privacy)および[利用規約](https://prevolut.uk/products/chapper/terms) — 完全な法的条件。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料でオープンソース、標準でオンデバイスの代替アプリ。',
          '[Private LLMレビュー](/ja/power-local-llm/private-llm-review) — 定額4.99ドルで完全オンデバイス、140以上の厳選モデルを備えたAppleアプリ。',
          '[Backyard AIレビュー](/ja/power-local-llm/backyard-ai-review-local-roleplay-2026) — Chapperとは異なるユースケース向けの、ロールプレイに特化したローカルAIアプリ。',
          '[SillyTavern vs. Agnai vs. RisuAI](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — セルフホストのロールプレイ用フロントエンドの比較。',
          '[2026年版iPhone向けおすすめローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — Chapperの位置づけを把握するための、iPhoneアプリの総まとめ。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/power-local-llm/local-llm-software-directory) — 全プラットフォームにわたるローカルLLMツールのより広いディレクトリ。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chapper-review-hero-pt.webp',
    title: 'Chapper: Análise (2026): Cliente de IA e LM Studio para iPhone, iPad e Mac',
    seoTitle: 'Chapper 2026: Cliente LM Studio para iPhone e Mac',
    intro:
      'O Chapper, desenvolvido pela [Prevolut Ltd](https://prevolut.uk/products/chapper/), é um aplicativo nativo para iPhone, iPad e Mac para conversar com modelos de IA locais e auto-hospedados. O download é gratuito com limite de 20 conversas, e é totalmente desbloqueado com a compra única do [Chapper Pro por US$ 9,99](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — a inferência realmente no dispositivo (executar um modelo diretamente no aparelho em vez de conectar a um servidor) é vendida como compra separada dentro do app por US$ 4,99, segundo a listagem atual da App Store. Os preços da App Store podem variar por região; confirme o preço atual na App Store brasileira antes de comprar. O design principal do Chapper é o de um cliente refinado para [LM Studio](https://lmstudio.ai/), [Ollama](https://ollama.com/), servidor llama.cpp e qualquer endpoint compatível com OpenAI — você aponta para um servidor no seu Mac ou PC e conversa pelo celular —, com suporte adicional no dispositivo via MLX e Apple Foundation Models. Esta análise examina esse modelo de preços em camadas, a ainda pequena base de avaliações do app (3,3 de 5 com 8 avaliações na App Store no momento desta análise) e sua comparação com apps totalmente locais, sem servidor, como [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) e [Private LLM](/pt/power-local-llm/private-llm-review).',
    metaDescription:
      'Chapper 2026: grátis com limite de 20 conversas, Pro por US$ 9,99 (compra única), complemento de inferência local por US$ 4,99. Cliente LM Studio e Ollama para iPhone/iPad/Mac — preços, privacidade e alternativas.',
    twitterDescription:
      'Chapper 2026: um app para iPhone/iPad/Mac para conversar com LM Studio, Ollama e endpoints compatíveis com OpenAI, com inferência no dispositivo vendida separadamente. Preços, privacidade e comparação com PocketPal AI e Private LLM.',
    audience:
      'Usuários de iPhone, iPad e Mac que já executam LM Studio ou Ollama em um computador e querem um cliente móvel nativo, ou que estão decidindo entre o modelo de preços em camadas do Chapper (grátis/Pro/no dispositivo) e apps totalmente locais como PocketPal AI ou Private LLM.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Chapper review',
    targetKeywords: [
      'chapper review',
      'chapper app iphone',
      'chapper ai lm studio client',
      'chapper pro price',
      'chapper on device inference',
      'lm studio client iphone',
      'ollama client iphone ipad',
      'chapper vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama', 'Qwen', 'Gemma', 'Mistral', 'Apple Foundation Models'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iPadOS 17+)', 'Mac com Apple Silicon (M1 ou posterior)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**O Chapper é um app gratuito com camada de teste e Pro por US$ 9,99 para iPhone, iPad e Mac da [Prevolut Ltd](https://prevolut.uk/products/chapper/), projetado principalmente como cliente para LM Studio, Ollama, servidor llama.cpp e endpoints compatíveis com OpenAI, com inferência realmente no dispositivo vendida como complemento separado por US$ 4,99.** A camada gratuita limita a 20 conversas; o Chapper Pro remove esse limite e, segundo o próprio site do desenvolvedor, desbloqueia controles avançados de amostragem, formatos de exportação, personas, ferramentas MCP, memória de longo prazo e sincronização com iCloud. Leitores que querem executar um modelo totalmente no celular sem compra ou configuração de servidor separadas devem comparar com o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), que é gratuito e local por padrão.',
    quickAnswerTop: {
      pt: {
        question: 'O Chapper é o mesmo que executar um modelo de IA totalmente no iPhone?',
        answer:
          'Não por padrão. O Chapper é principalmente um cliente que conecta seu iPhone, iPad ou Mac ao LM Studio, Ollama, um servidor llama.cpp ou qualquer endpoint compatível com OpenAI rodando em outra máquina. A inferência realmente no dispositivo é uma compra separada dentro do app por US$ 4,99, além do próprio app, que é gratuito com limite de 20 conversas ou custa US$ 9,99 como Chapper Pro.',
        bullets: [
          'A camada gratuita limita as conversas a 20; o Chapper Pro custa US$ 9,99 em compra única.',
          'A inferência local no dispositivo é uma compra separada dentro do app por US$ 4,99, segundo a listagem da App Store.',
          'Backends principais: LM Studio, Ollama, servidor llama.cpp e APIs compatíveis com OpenAI.',
          'Apenas iPhone, iPad, Mac (Apple Silicon) e Apple Vision Pro — sem app para Android ou Windows.',
          'O desenvolvedor afirma que não há contas nem rastreamento de terceiros; as conversas permanecem no dispositivo, salvo ativação da sincronização com iCloud.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Chapper', anchor: 'what-is-chapper' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Preços: camada gratuita, Pro e o complemento no dispositivo', anchor: 'pricing' },
      { label: 'Backends e modelos suportados', anchor: 'models-and-backends' },
      { label: 'Plataformas: iPhone, iPad, Mac e Vision Pro', anchor: 'platforms' },
      { label: 'Privacidade: o que o Chapper coleta e o que não coleta', anchor: 'privacy' },
      { label: 'Empresa e histórico de versões', anchor: 'history' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Chapper vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Chapper é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o Chapper não é indicado', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumo',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Chapper é um app gratuito com camada de teste e Pro por US$ 9,99 para iPhone/iPad/Mac da Prevolut Ltd, projetado principalmente como cliente para LM Studio, Ollama, servidor llama.cpp e endpoints compatíveis com OpenAI, com inferência realmente no dispositivo como complemento separado por US$ 4,99.',
          },
          {
            type: 'plain-terms',
            text: 'Pense primeiro no Chapper como um app de controle remoto para modelos de IA que rodam no seu Mac ou PC (via LM Studio ou Ollama), e só depois como um app de chat no dispositivo, caso pague a mais para desbloquear a inferência local — não é um app de compra única totalmente local do início ao fim, como algumas concorrentes.',
          },
        ],
        items: [
          'Preço: grátis com limite de 20 conversas; [o Chapper Pro custa US$ 9,99](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) em compra única; a inferência local no dispositivo é uma compra separada dentro do app por US$ 4,99, segundo a listagem atual da App Store.',
          'Plataformas: iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon) e Apple Vision Pro (visionOS 1.0+) — sem app para Android ou Windows.',
          'Desenvolvedor: [Prevolut Ltd](https://prevolut.uk/products/chapper/), empresa registrada no Reino Unido (Companies House n.º 17058766) — sem relação com o app bancário Revolut, apesar do nome parecido.',
          'Backends: funciona nativamente com LM Studio, Ollama, servidor llama.cpp e qualquer API compatível com OpenAI; o suporte no dispositivo usa o framework MLX da Apple e, quando disponível, o Apple Foundation Models.',
          'Recursos: integração de ferramentas MCP, uma ferramenta de fluxo de trabalho em terminal isolado chamada "C.A.S.H.", personas personalizadas, saída JSON estruturada, exportação em vários formatos (TXT, PDF, HTML, Markdown, JSON, CSV, XML), texto para voz e um inspetor de solicitações de API bruta.',
          'Privacidade: o desenvolvedor afirma que não são necessárias contas e que nenhum rastreamento de terceiros é usado; as conversas ficam no dispositivo, salvo se a sincronização com iCloud ou uma conexão com servidor remoto for ativada.',
          'As avaliações ainda são poucas: 3,3 de 5 estrelas com 8 avaliações na App Store no momento desta análise — uma amostra pequena demais para conclusões fortes em qualquer direção.',
          'A versão 1.3.1 (listagem da App Store, datada de 6 de agosto de 2026) é a atual; o app parece ter sido lançado na App Store durante 2026, a julgar pela numeração de versões e pelo ID na App Store.',
        ],
      },
      whatIsChapper: {
        id: 'what-is-chapper',
        title: 'O que é o Chapper',
        content: [
          '**O Chapper é um app nativo da Apple, listado na App Store como "Chapper: AI & LM Studio Client", criado para conectar iPhone, iPad e Mac a modelos de IA — seja no dispositivo, seja em um servidor que você controla.** Sua identidade principal, refletida no próprio nome na App Store, é a de um cliente para o [LM Studio](https://lmstudio.ai/): você executa um modelo em um Mac ou PC usando LM Studio, Ollama ou um servidor llama.cpp, e o Chapper fornece uma interface móvel nativa para conversar com ele pelo celular ou tablet.',
          'É desenvolvido pela [Prevolut Ltd](https://prevolut.uk/products/chapper/), empresa registrada na Inglaterra e no País de Gales (número Companies House 17058766). O nome se assemelha ao do app bancário Revolut, mas são empresas independentes — o desenvolvedor do Chapper é uma entidade menor e separada, focada especificamente neste cliente de IA.',
          'A inferência no dispositivo — executar um modelo diretamente no celular ou Mac sem servidor envolvido — também é suportada, usando o framework MLX da Apple e, quando disponível, os próprios Apple Foundation Models. No entanto, segundo a lista atual de compras dentro do app na App Store, esse recurso é vendido como uma compra separada chamada "On Device Local Inference", em vez de vir incluído automaticamente no app base ou na camada Pro. Leitores que queiram um app que funcione no dispositivo por padrão, sem desbloqueio separado, devem comparar isso com apps totalmente locais como [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou [Private LLM](/pt/power-local-llm/private-llm-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**Começar a usar o Chapper difere dependendo de você planejar se conectar a um servidor ou executar um modelo no dispositivo.** Em nenhum dos casos é preciso criar conta.',
        ],
        numberedItems: [
          {
            title: 'Baixe o app',
            whyItMatters: 'Baixe o [Chapper gratuitamente na App Store da Apple](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679). A camada gratuita permite testar o app com limite de 20 conversas antes de decidir comprar o Pro.',
          },
          {
            title: 'Decida: baseado em servidor ou no dispositivo',
            whyItMatters: 'Se você já usa [LM Studio](https://lmstudio.ai/) ou [Ollama](https://ollama.com/) em um Mac ou PC, conecte o Chapper ao endereço desse servidor para o caminho mais rápido até um chat funcionando. Se quiser que o modelo rode diretamente no seu celular sem um computador separado, precisará da compra adicional dentro do app "On Device Local Inference" por US$ 4,99.',
          },
          {
            title: 'Conecte um backend ou escolha um modelo',
            whyItMatters: 'No modo servidor, aponte o Chapper para o endereço do seu servidor LM Studio, Ollama, llama.cpp ou endpoint compatível com OpenAI. No modo no dispositivo, escolha entre os modelos suportados pelo framework MLX da Apple e, quando disponíveis, os Apple Foundation Models.',
          },
          {
            title: 'Decida sobre o Pro',
            whyItMatters: 'O limite de 20 conversas da camada gratuita já basta para avaliar se o app se encaixa no seu fluxo de trabalho. O [Chapper Pro (US$ 9,99, compra única)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) remove o limite e adiciona personas, ferramentas MCP, memória de longo prazo, todos os formatos de exportação e sincronização com iCloud, segundo a própria lista de recursos do desenvolvedor.',
          },
          {
            title: 'Opcional: ative a sincronização com iCloud',
            whyItMatters: 'Se quiser que as conversas acompanhem seu iPhone, iPad e Mac, a sincronização com iCloud é opcional e criptografada de ponta a ponta, segundo a página de privacidade do desenvolvedor — vem desativada por padrão.',
          },
        ],
        note: 'Os preços exatos das compras dentro do app, a divisão de recursos entre o Pro e o complemento no dispositivo, e as listas de modelos suportados podem mudar entre atualizações da App Store. Confirme os detalhes atuais diretamente no app ou em [chapper.app](https://chapper.app/) antes de comprar.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços: camada gratuita, Pro e o complemento no dispositivo',
        itemHeadings: true,
        content: [
          '**O Chapper usa uma estrutura de preços em três camadas, mais escalonada do que a maioria dos apps dessa categoria.** O app base é gratuito, uma compra única do Chapper Pro desbloqueia a maioria dos recursos avançados, e a inferência realmente no dispositivo tem preço separado novamente. Esses números foram verificados na [listagem da App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) e em [chapper.app](https://chapper.app/) para esta análise.',
        ],
        columns: ['Camada', 'Preço', 'O que desbloqueia'],
        rows: [
          {
            'Camada': 'Gratuita',
            'Preço': 'US$ 0',
            'O que desbloqueia': 'Recursos básicos de chat, limitados a 20 conversas',
          },
          {
            'Camada': 'Chapper Pro',
            'Preço': 'US$ 9,99 (compra única)',
            'O que desbloqueia': 'Conversas ilimitadas, controles avançados de amostragem, todos os formatos de exportação, personas, ferramentas MCP, memória de longo prazo, análises, ícones de app personalizados, sincronização com iCloud',
          },
          {
            'Camada': 'On Device Local Inference',
            'Preço': 'US$ 4,99 (compra única, separada do Pro)',
            'O que desbloqueia': 'Executar modelos diretamente no dispositivo via Apple MLX / Foundation Models, em vez de se conectar ao LM Studio, Ollama ou outro servidor',
          },
          {
            'Camada': 'Gorjetas "Tea"',
            'Preço': 'US$ 0,99–44,99',
            'O que desbloqueia': 'Gorjetas únicas e opcionais para o desenvolvedor; nenhum desbloqueio funcional',
          },
        ],
        note: 'O próprio site da Prevolut Ltd descreve o Chapper Pro como "sem assinatura, sem taxas ocultas", com cada futuro recurso Pro incluído automaticamente após a compra. Os preços da App Store podem mudar e variar por região — confirme o preço atual na [listagem da App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) antes de comprar. Verificado para esta análise em 06/09/2026.',
      },
      modelsAndBackends: {
        id: 'models-and-backends',
        title: 'Backends e modelos suportados',
        content: [
          '**A principal superfície de integração do Chapper são backends remotos, não uma biblioteca curada de modelos no dispositivo.** Segundo o próprio site do desenvolvedor, ele "funciona nativamente com LM Studio, Ollama, servidor llama.cpp e qualquer API compatível com OpenAI" — você pode apontar o Chapper para qualquer endpoint que fale esse protocolo, incluindo um servidor auto-hospedado na sua própria rede.',
          'Para uso no dispositivo (o complemento separado de US$ 4,99), o app suporta modelos através do framework **MLX** da Apple, criado para Apple Silicon, e, quando o sistema operacional fornece, dos **Apple Foundation Models** — o próprio modelo no dispositivo da Apple, disponibilizado a apps de terceiros em hardware e versões de sistema compatíveis. Nem a listagem da App Store nem o site do desenvolvedor publicam uma lista fixa e nomeada de modelos no dispositivo, como fazem algumas apps concorrentes (a biblioteca curada de mais de 140 modelos do Private LLM, por exemplo); esta análise trata a seleção de modelos no dispositivo como mais restrita e mais dependente do próprio ecossistema MLX/Foundation Models da Apple do que de um grande catálogo GGUF curado.',
          'Como a qualidade e a velocidade do modelo no caminho baseado em servidor dependem inteiramente do que você executa no LM Studio ou Ollama na sua própria máquina, o Chapper em si não define o teto de capacidade do modelo como faria um app totalmente local — ele é uma camada de transporte e interface, com seu próprio hardware realizando a inferência de fato.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plataformas: iPhone, iPad, Mac e Vision Pro',
        itemHeadings: true,
        columns: ['Plataforma', 'O que esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'O que esperar': 'Exige iOS 17.0 ou posterior, segundo a listagem da App Store.',
            'Nota importante': 'O chat baseado em servidor (LM Studio/Ollama) precisa de um caminho de rede até esse servidor; o chat no dispositivo precisa do complemento separado de US$ 4,99.',
          },
          {
            'Plataforma': 'iPad',
            'O que esperar': 'Exige iPadOS 17.0 ou posterior; mesmo app e mesmo conjunto de recursos do iPhone.',
            'Nota importante': 'Não há detalhes de layout específicos para iPad além da compatibilidade padrão da App Store.',
          },
          {
            'Plataforma': 'Mac',
            'O que esperar': 'Exige macOS 14.0 ou posterior em um chip Apple M1 ou superior, segundo a listagem da App Store.',
            'Nota importante': 'Um Mac também é o host mais comum para LM Studio/Ollama, então muitos usuários rodarão o servidor e o cliente Chapper na mesma máquina, ou o servidor em um Mac e o cliente no iPhone/iPad.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'O que esperar': 'A listagem da App Store mostra compatibilidade com visionOS 1.0+.',
            'Nota importante': 'Esta análise não testou de forma independente a experiência no Vision Pro; trate isso como compatibilidade listada na App Store, não como recurso verificado na prática.',
          },
          {
            'Plataforma': 'Android, Windows, Linux',
            'O que esperar': 'Nenhum app oficial no Google Play, na Microsoft Store ou em qualquer repositório de pacotes Linux.',
            'Nota importante': 'Usuários de Android e Windows que queiram um cliente móvel semelhante conectado ao LM Studio/Ollama devem considerar o [RikkaHub](https://github.com/rikkahub/rikkahub) (Android) ou o [AnythingLLM Mobile](https://anythingllm.com/mobile) (Android, iOS planejado).',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade: o que o Chapper coleta e o que não coleta',
        content: [
          '**O próprio site da Prevolut Ltd afirma que o Chapper não exige conta e usa "nenhum rastreamento de terceiros"**, e que as conversas ficam armazenadas no dispositivo, salvo se o leitor ativar explicitamente a sincronização com iCloud ou se conectar ao próprio servidor externo. Como o design principal do app roteia o chat por backends que você controla (seu próprio servidor LM Studio/Ollama, ou a inferência no dispositivo), a quantidade de dados que chega à infraestrutura da própria Prevolut é limitada por essa arquitetura, não apenas por uma política.',
        ],
        items: [
          '**Nenhuma conta necessária.** Você pode baixar e usar o Chapper, incluindo fazer compras dentro do app pelo fluxo de compra padrão da Apple, sem criar um perfil específico do Chapper.',
          '**Nenhum rastreamento de terceiros, segundo a própria declaração do desenvolvedor.** Esta análise se baseia nessa afirmação, não em uma auditoria independente do tráfego de rede do app, que é de código fechado.',
          '**A sincronização com iCloud é opcional e criptografada de ponta a ponta, segundo o desenvolvedor.** Vem desativada por padrão; ativá-la é o único caso documentado em que dados de chat saem do dispositivo local, e vão para a própria conta iCloud do leitor, não para os servidores da Prevolut.',
          '**Conexões com servidor enviam dados para o endpoint que você configurar.** Se você conectar o Chapper a uma API de terceiros ou hospedada na nuvem compatível com OpenAI em vez do seu próprio servidor local LM Studio/Ollama, seus prompts vão para esse endpoint sob os termos de privacidade dele — isso é uma propriedade geral do modelo cliente/servidor, não específica do Chapper.',
          '**A política de privacidade e os termos estão publicados** em [prevolut.uk/products/chapper/privacy](https://prevolut.uk/products/chapper/privacy) e [prevolut.uk/products/chapper/terms](https://prevolut.uk/products/chapper/terms) — leia-os diretamente para conhecer os termos legais completos e atuais, em vez de confiar apenas no texto de marketing.',
        ],
      },
      history: {
        id: 'history',
        title: 'Empresa e histórico de versões',
        content: [
          '**O Chapper é desenvolvido pela [Prevolut Ltd](https://prevolut.uk/products/chapper/), empresa registrada na Inglaterra e no País de Gales sob o número Companies House 17058766.** Os dados públicos da App Store não indicam uma data exata de lançamento inicial, mas o ID relativamente alto do app na App Store (6760984679) e sua numeração de versões inicial apontam para um lançamento em 2026.',
        ],
        items: [
          '**Versão 1.1.0.** Descrita pelo desenvolvedor como um dos maiores lançamentos do Chapper até agora; data exata não publicada nas fontes disponíveis para esta análise.',
          '**Versão 1.2.0.** Uma atualização importante centrada no recurso de fluxo de trabalho em terminal isolado "C.A.S.H.", além de melhorias de qualidade.',
          '**Versão 1.3.1 (6 de agosto de 2026).** A versão atual na App Store no momento desta análise, trazendo um primeiro vislumbre de um "Agent Mode", troca de modelo mais rápida, um campo de resposta de IA maior e uma série de pequenas correções.',
        ],
        note: 'O histórico de versões vem da lista pública de "Novidades" do app na App Store. Esta análise não conseguiu confirmar de forma independente a data de lançamento original da versão 1.0 — trate a estimativa de lançamento em 2026 como inferida a partir da numeração de versões e do ID na App Store, não como uma data confirmada pelo desenvolvedor.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que isso significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Camada gratuita para testar',
            'O que isso significa no uso real': 'Você pode testar a interface e uma conexão com servidor antes de gastar qualquer valor.',
            'Limitação / ressalva': 'Limitada a 20 conversas, e a inferência no dispositivo não está disponível de forma alguma na camada gratuita.',
          },
          {
            'Vantagem': 'Ampla compatibilidade de backends',
            'O que isso significa no uso real': 'Funciona com LM Studio, Ollama, servidor llama.cpp e qualquer endpoint compatível com OpenAI — flexível para quem já roda um servidor local.',
            'Limitação / ressalva': 'A qualidade e a velocidade do modelo dependem inteiramente do servidor ao qual você se conecta, não do app em si.',
          },
          {
            'Vantagem': 'Camada Pro rica em recursos',
            'O que isso significa no uso real': 'Ferramentas MCP, personas, memória de longo prazo, saída JSON estruturada e exportação em vários formatos cobrem casos de uso avançados que a maioria das concorrentes ignora.',
            'Limitação / ressalva': 'Essa amplitude soma uma compra de US$ 9,99 além do app base, e o caminho no dispositivo custa mais US$ 4,99.',
          },
          {
            'Vantagem': 'Nenhuma conta necessária',
            'O que isso significa no uso real': 'Instale e comece a conversar sem se cadastrar em nada.',
            'Limitação / ressalva': 'Como o app é de código fechado, a afirmação de "nenhum rastreamento de terceiros" repousa na declaração do próprio desenvolvedor, não em revisão de código independente.',
          },
          {
            'Vantagem': 'App nativo e refinado da Apple',
            'O que isso significa no uso real': 'Funciona como app de primeira classe em iPhone, iPad, Mac e Vision Pro com uma única compra.',
            'Limitação / ressalva': 'Exclusivo da Apple — sem versão para Android ou Windows, ao contrário de algumas concorrentes do tipo servidor-cliente.',
          },
          {
            'Vantagem': 'Preços em camadas e flexíveis',
            'O que isso significa no uso real': 'Usuários que só precisam da função de cliente-servidor podem pular completamente o complemento no dispositivo de US$ 4,99.',
            'Limitação / ressalva': 'A estrutura de três camadas (grátis/Pro/no dispositivo) é menos transparente à primeira vista do que um preço único, e fácil de interpretar erroneamente como "US$ 9,99 e já tem tudo".',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Chapper vs. alternativas',
        columns: ['App', 'Plataformas', 'Preço', 'Acesso a modelos', 'Diferença principal'],
        rows: [
          {
            'App': 'Chapper',
            'Plataformas': 'iPhone/iPad/Mac/Vision Pro (apenas Apple)',
            'Preço': 'Grátis (limite de 20 chats) / US$ 9,99 Pro / +US$ 4,99 no dispositivo',
            'Acesso a modelos': 'LM Studio, Ollama, llama.cpp, APIs compatíveis com OpenAI; no dispositivo via MLX/Foundation Models (complemento pago)',
            'Diferença principal': 'Principalmente um cliente de servidor; a inferência no dispositivo é uma compra separada',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, com algum suporte a Android',
            'Preço': 'Grátis, código aberto',
            'Acesso a modelos': 'Qualquer arquivo GGUF, totalmente no dispositivo por padrão',
            'Diferença principal': 'Grátis, de código aberto e no dispositivo desde o início — sem necessidade de servidor ou complemento',
          },
          {
            'App': '[Private LLM](/pt/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (apenas Apple)',
            'Preço': 'Compra única de US$ 4,99',
            'Acesso a modelos': 'Mais de 140 modelos curados no dispositivo com quantização OmniQuant/GPTQ',
            'Diferença principal': 'Preço único fixo, apenas no dispositivo, sem modo cliente-servidor',
          },
          {
            'App': '[Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            'Plataformas': 'Veja a análise completa para a compatibilidade de plataformas atual',
            'Preço': 'Veja a listagem atual',
            'Acesso a modelos': 'Veja a análise completa para o suporte a modelos atual',
            'Diferença principal': 'App de desktop focado em roleplay/chat de personagens, diferente do cliente de propósito geral do Chapper',
          },
          {
            'App': '[SillyTavern vs. Agnai vs. RisuAI](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
            'Plataformas': 'Interfaces baseadas em navegador, auto-hospedadas',
            'Preço': 'Grátis, código aberto',
            'Acesso a modelos': 'Conecta a qualquer backend local ou na nuvem, focado em cartões de personagem',
            'Diferença principal': 'Ecossistema de roleplay/cartões de personagem em vez de um app móvel nativo',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Plataformas': 'iOS/Mac (código aberto, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Preço': 'Grátis, código aberto',
            'Acesso a modelos': 'Modelos GGUF personalizados via llama.cpp/ggml, no dispositivo por padrão',
            'Diferença principal': 'Segundo seu próprio README no GitHub, foi removido da App Store e do TestFlight em agosto de 2025 — verifique a disponibilidade atual',
          },
          {
            'App': '[Layla](https://www.layla-network.ai/)',
            'Plataformas': 'iOS e Android',
            'Preço': 'US$ 19,99 mais compras dentro do app',
            'Acesso a modelos': 'Modelos GGUF personalizados; foco em personagens/roleplay com mais de 100 vozes',
            'Diferença principal': 'Multiplataforma, orientado a personagens/roleplay, com preço mais alto que o Chapper',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plataformas': 'App Flutter multiplataforma (Android principal)',
            'Preço': 'Grátis, código aberto (licença MIT)',
            'Acesso a modelos': 'Qualquer arquivo GGUF via llama.cpp; também se conecta remotamente a Anthropic, DeepSeek, Ollama, Mistral, OpenAI',
            'Diferença principal': 'Grátis, totalmente de código aberto, e combina acesso local e remoto como o Chapper, mas multiplataforma',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plataformas': 'Android',
            'Preço': 'Grátis, código aberto',
            'Acesso a modelos': 'Várias APIs de provedores na nuvem além de execução local',
            'Diferença principal': 'Equivalente exclusivo para Android do modelo de cliente multi-backend do Chapper',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plataformas': 'Android (iOS planejado)',
            'Preço': 'Grátis, código aberto',
            'Acesso a modelos': 'Executa modelos GGUF no dispositivo via Cactus Compute, ou se combina com um servidor AnythingLLM auto-hospedado',
            'Diferença principal': 'Projetado especificamente para se combinar com um workspace AnythingLLM auto-hospedado, não um cliente multi-backend geral',
          },
        ],
        note: 'Detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência — verifique os dados atuais na listagem de cada app antes de decidir. A disponibilidade do LLM Farm na App Store, em particular, deve ser reverificada, já que seu próprio README no GitHub o descrevia como removido da App Store desde agosto de 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Chapper é indicado',
        items: [
          '**Leitores que já executam LM Studio ou Ollama em um Mac ou PC.** O valor principal do Chapper é uma interface móvel nativa para um servidor que você já tem funcionando — esse é seu caso de uso mais forte e mais bem verificado.',
          '**Usuários exclusivos da Apple que querem um único app tanto para chat baseado em servidor quanto no dispositivo.** Se você está disposto a pagar tanto pelo Pro quanto pelo complemento no dispositivo, o Chapper cobre uma gama mais ampla de fluxos de trabalho do que um app de propósito único.',
          '**Usuários avançados que querem ferramentas MCP, personas e saída JSON estruturada.** A lista de recursos da camada Pro é mais densa do que a maioria dos apps dessa categoria, útil para quem quer roteirizar ou automatizar em torno da sua configuração de IA local.',
          '**Leitores confortáveis em avaliar um app pequeno e em estágio inicial.** Com apenas 8 avaliações na App Store no momento desta análise, o Chapper está no início do seu histórico público — aceitável para quem gosta de testar ferramentas mais novas, menos para quem prioriza um histórico longo e comprovado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Chapper não é indicado',
        items: [
          '**Leitores que querem um app de compra única, totalmente no dispositivo, sem configuração de servidor.** O caminho no dispositivo do Chapper custa US$ 4,99 a mais que o Pro e não é o design principal do app — [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) (grátis) ou [Private LLM](/pt/power-local-llm/private-llm-review) (US$ 4,99 preço fixo) atendem essa necessidade de forma mais direta.',
          '**Usuários de Android, Windows ou Linux.** O Chapper não tem app oficial em nenhuma dessas plataformas — considere o [RikkaHub](https://github.com/rikkahub/rikkahub), o [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) ou o [AnythingLLM Mobile](https://anythingllm.com/mobile) em vez disso.',
          '**Leitores que querem um catálogo grande, nomeado e curado de modelos no dispositivo.** Nem a listagem da App Store nem o site do desenvolvedor publicam uma lista fixa de modelos comparável aos mais de 140 modelos curados do Private LLM; a seleção no dispositivo depende, em vez disso, do ecossistema MLX/Foundation Models da Apple.',
          '**Leitores que querem um longo histórico público antes de confiar a um app o acesso a infraestrutura local.** Com uma presença na App Store iniciada em 2026 e apenas 8 avaliações no total, o Chapper ainda não construiu o histórico de vários anos que o Private LLM (lançado em 2023) ou projetos de código aberto já estabelecidos possuem.',
          '**Leitores que buscam especificamente recursos de roleplay ou cartões de personagem.** O Chapper é um cliente de chat/API de propósito geral, não um app de chat de personagens — o [Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay-2026) ou as ferramentas comparadas em [SillyTavern vs. Agnai vs. RisuAI](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) são feitas especificamente para esse caso de uso.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto custa o Chapper?',
            a: 'O Chapper é gratuito para baixar, com limite de 20 conversas. [O Chapper Pro custa US$ 9,99 em compra única](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) e remove o limite, desbloqueando a maioria dos recursos avançados. A inferência local no dispositivo é uma compra separada dentro do app por US$ 4,99, além do Pro, segundo a listagem atual da App Store. Verificado para esta análise em 06/09/2026 — os preços da App Store podem variar por região e mudar ao longo do tempo.',
          },
          {
            q: 'O Chapper executa modelos de IA totalmente no meu iPhone?',
            a: 'Somente se você comprar o complemento separado "On Device Local Inference" por US$ 4,99, que usa o framework MLX da Apple e, quando disponíveis, os Apple Foundation Models. Por padrão e em seu design principal, o Chapper é um cliente que se conecta ao LM Studio, Ollama, um servidor llama.cpp ou um endpoint compatível com OpenAI rodando em outro lugar.',
          },
          {
            q: 'Quem desenvolve o Chapper?',
            a: 'O Chapper é desenvolvido pela [Prevolut Ltd](https://prevolut.uk/products/chapper/), empresa registrada na Inglaterra e no País de Gales (número Companies House 17058766). Não tem relação com o app bancário Revolut, apesar do nome parecido.',
          },
          {
            q: 'O Chapper está disponível para Android ou Windows?',
            a: 'Não. O Chapper é feito exclusivamente para iPhone (iOS 17+), iPad (iPadOS 17+), Mac (macOS 14+, Apple Silicon) e Apple Vision Pro. Não existe versão oficial para Android, Windows ou Linux.',
          },
          {
            q: 'Quais backends o Chapper suporta?',
            a: 'Segundo o próprio site do desenvolvedor, o Chapper "funciona nativamente com LM Studio, Ollama, servidor llama.cpp e qualquer API compatível com OpenAI". Você também pode apontá-lo para um servidor auto-hospedado na sua própria rede.',
          },
          {
            q: 'O Chapper exige conta?',
            a: 'Não. O desenvolvedor afirma que nenhuma conta é necessária, e o Chapper é usado sem qualquer cadastro — incluindo compras dentro do app, que passam pelo fluxo de compra padrão da Apple.',
          },
          {
            q: 'O Chapper coleta meus dados?',
            a: 'O próprio site do desenvolvedor afirma que nenhum rastreamento de terceiros é usado e que as conversas ficam no dispositivo, salvo se a sincronização com iCloud for ativada ou você se conectar ao seu próprio servidor externo. Esta análise se baseia nessa afirmação; o Chapper é de código fechado, então não foi auditado de forma independente para esta análise.',
          },
          {
            q: 'Como o Chapper se compara ao PocketPal AI?',
            a: 'O PocketPal AI é grátis, de código aberto e no dispositivo por padrão, sem precisar de servidor. O Chapper é principalmente um cliente para servidores LM Studio, Ollama e compatíveis com OpenAI, com inferência realmente no dispositivo vendida como complemento separado por US$ 4,99, além de uma compra Pro de US$ 9,99. Escolha o PocketPal AI se quiser um único app gratuito e totalmente no dispositivo; escolha o Chapper se já tiver um servidor local funcionando e quiser uma interface móvel nativa e rica em recursos para ele.',
          },
          {
            q: 'O Chapper é bem avaliado?',
            a: 'No momento desta análise, o Chapper tem 3,3 de 5 estrelas com 8 avaliações na App Store — uma amostra muito pequena que não deve ser tratada como um sinal forte em nenhuma direção. O app parece ser relativamente novo, a julgar pela numeração de versões e pelo ID na App Store.',
          },
          {
            q: 'O que é o recurso "C.A.S.H." no Chapper?',
            a: 'C.A.S.H. é uma ferramenta de fluxo de trabalho em terminal/shell isolado incluída no Chapper, introduzida como o destaque da versão 1.2.0. Os materiais do desenvolvedor a descrevem como uma forma de executar fluxos de trabalho isolados de dentro do app; esta análise não testou de forma independente todas as suas capacidades nem seus limites de segurança.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Chapper é um app capaz e rico em recursos para leitores que já executam LM Studio ou Ollama e querem um cliente Apple nativo para isso — as ferramentas MCP, as personas, a saída estruturada e a exportação multi-formato da camada Pro vão além da maioria dos apps dessa categoria. Seu preço também é seu maior ponto de atrito: uma camada gratuita limitada a 20 conversas, uma compra do Chapper Pro por US$ 9,99, e mais uma cobrança de US$ 4,99 só para executar modelos totalmente no dispositivo somam uma estrutura de custo mais escalonada do que os preços fixos e únicos do PocketPal AI (grátis) ou do Private LLM (US$ 4,99). Somado a um histórico público ainda escasso (8 avaliações na App Store, um lançamento aparente em 2026 e nenhuma data confirmada de lançamento 1.0 nas fontes disponíveis para esta análise), o Chapper parece um app promissor, porém em estágio inicial, e não um app já estabelecido. Leitores que já têm um servidor local funcionando e buscam uma forma refinada de acessá-lo pelo iPhone ou iPad devem experimentar primeiro a camada gratuita; leitores que querem um app de compra única e totalmente no dispositivo devem começar, em vez disso, pelo [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou pelo [Private LLM](/pt/power-local-llm/private-llm-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Chapper na App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — preço, compras dentro do app, compatibilidade de plataformas, avaliações e notas de versão.',
          '[Site oficial do Chapper](https://chapper.app/) — lista de recursos, compatibilidade de backends e declarações de privacidade.',
          '[Prevolut Ltd — página do produto Chapper](https://prevolut.uk/products/chapper/) — modelo de preços, limites da camada gratuita e detalhes da empresa.',
          '[Política de privacidade](https://prevolut.uk/products/chapper/privacy) e [termos de serviço](https://prevolut.uk/products/chapper/terms) do Chapper — termos legais completos.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — uma alternativa gratuita, de código aberto e no dispositivo por padrão.',
          '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — um app da Apple com preço fixo de US$ 4,99, totalmente no dispositivo, com mais de 140 modelos curados.',
          '[Análise do Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay-2026) — um app de IA local focado em roleplay, para um caso de uso diferente do Chapper.',
          '[SillyTavern vs. Agnai vs. RisuAI](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — uma comparação de interfaces de roleplay auto-hospedadas.',
          '[Os melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama completo de apps para iPhone para entender onde o Chapper se encaixa.',
          '[O diretório completo de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em todas as plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chapper-review-hero-ar.webp',
    title: 'مراجعة Chapper (2026): عميل الذكاء الاصطناعي وLM Studio لأجهزة آيفون وآيباد وماك',
    seoTitle: 'مراجعة Chapper 2026: عميل LM Studio لآيفون وماك',
    intro:
      'تطبيق Chapper، من تطوير [Prevolut Ltd](https://prevolut.uk/products/chapper/)، هو تطبيق أصلي لأجهزة آيفون وآيباد وماك للمحادثة مع نماذج ذكاء اصطناعي محلية ومستضافة ذاتيًا. التنزيل مجاني مع حد أقصى 20 محادثة، ويُفتح بالكامل عبر شراء [Chapper Pro لمرة واحدة مقابل 9.99 دولارًا](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — أما الاستدلال الحقيقي على الجهاز (تشغيل النموذج مباشرة على الجهاز بدلاً من الاتصال بخادم) فيُباع كعملية شراء منفصلة داخل التطبيق مقابل 4.99 دولارًا، وفق قائمة App Store الحالية. قد تختلف أسعار App Store حسب المنطقة؛ تحقق من السعر الحالي في متجرك المحلي قبل الشراء. التصميم الأساسي لتطبيق Chapper هو عميل متقن لخدمات [LM Studio](https://lmstudio.ai/) و[Ollama](https://ollama.com/) وخادم llama.cpp وأي نقطة نهاية متوافقة مع OpenAI — إذ توجهه نحو خادم على جهاز Mac أو الكمبيوتر الخاص بك وتتحدث من هاتفك — مع دعم إضافي على الجهاز عبر MLX ونماذج Apple Foundation Models. تفحص هذه المراجعة نموذج التسعير المتدرج هذا، وقاعدة التقييمات الصغيرة حتى الآن للتطبيق (3.3 من 5 بناءً على 8 تقييمات على App Store وقت إعداد هذه المراجعة)، ومقارنته بتطبيقات تعمل بالكامل على الجهاز دون خادم مثل [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) و[Private LLM](/ar/power-local-llm/private-llm-review).',
    metaDescription:
      'مراجعة Chapper 2026: مجاني بحد 20 محادثة، نسخة Pro بسعر 9.99 دولارًا لمرة واحدة، إضافة استدلال محلي بسعر 4.99 دولارًا. عميل LM Studio وOllama لآيفون/آيباد/ماك — الأسعار والخصوصية والبدائل.',
    twitterDescription:
      'مراجعة Chapper 2026: تطبيق لآيفون/آيباد/ماك للمحادثة مع LM Studio وOllama ونقاط نهاية متوافقة مع OpenAI، مع بيع الاستدلال على الجهاز كإضافة منفصلة. الأسعار والخصوصية والمقارنة مع PocketPal AI وPrivate LLM.',
    audience:
      'مستخدمو آيفون وآيباد وماك الذين يشغّلون بالفعل LM Studio أو Ollama على حاسوب ويريدون عميلاً محمولاً أصليًا، أو من يقررون بين نموذج تسعير Chapper المتدرج (مجاني/Pro/على الجهاز) وتطبيقات تعمل بالكامل على الجهاز مثل PocketPal AI أو Private LLM.',
    readTime: '9 دقائق قراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Chapper review',
    targetKeywords: [
      'chapper review',
      'chapper app iphone',
      'chapper ai lm studio client',
      'chapper pro price',
      'chapper on device inference',
      'lm studio client iphone',
      'ollama client iphone ipad',
      'chapper vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama', 'Qwen', 'Gemma', 'Mistral', 'Apple Foundation Models'],
    current_hardware_mentioned: ['آيفون (iOS 17 فأعلى)', 'آيباد (iPadOS 17 فأعلى)', 'جهاز Mac بمعالج Apple Silicon (M1 أو أحدث)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**تطبيق Chapper هو تطبيق مجاني للتجربة مع مستوى Pro بسعر 9.99 دولارًا لأجهزة آيفون وآيباد وماك، من تطوير [Prevolut Ltd](https://prevolut.uk/products/chapper/)، ومصمم في الأساس كعميل لخدمات LM Studio وOllama وخادم llama.cpp ونقاط النهاية المتوافقة مع OpenAI، مع بيع الاستدلال الحقيقي على الجهاز كإضافة منفصلة بسعر 4.99 دولارًا.** يحدّ المستوى المجاني عدد المحادثات بـ 20 محادثة؛ يزيل Chapper Pro هذا الحد ويفتح، وفق موقع المطور نفسه، ضوابط أخذ العينات المتقدمة، وصيغ التصدير، والشخصيات (Personas)، وأدوات MCP، والذاكرة طويلة المدى، ومزامنة iCloud. على القراء الراغبين في تشغيل نموذج بالكامل على هاتفهم دون شراء أو إعداد خادم منفصل مقارنة ذلك بتطبيق [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)، المجاني والعامل على الجهاز افتراضيًا.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعني استخدام Chapper تشغيل نموذج ذكاء اصطناعي بالكامل على آيفون؟',
        answer:
          'ليس افتراضيًا. تطبيق Chapper هو في الأساس عميل يربط جهاز آيفون أو آيباد أو ماك بخدمة LM Studio أو Ollama أو خادم llama.cpp أو أي نقطة نهاية متوافقة مع OpenAI تعمل على جهاز آخر. الاستدلال الحقيقي على الجهاز هو عملية شراء منفصلة داخل التطبيق بسعر 4.99 دولارًا، بالإضافة إلى التطبيق نفسه، وهو مجاني بحد 20 محادثة أو بسعر 9.99 دولارًا كنسخة Chapper Pro.',
        bullets: [
          'المستوى المجاني يحدّ المحادثات بـ 20؛ نسخة Chapper Pro تكلف 9.99 دولارًا لمرة واحدة.',
          'الاستدلال المحلي على الجهاز عملية شراء منفصلة داخل التطبيق بسعر 4.99 دولارًا وفق قائمة App Store.',
          'الخدمات الخلفية الأساسية: LM Studio وOllama وخادم llama.cpp وواجهات برمجة متوافقة مع OpenAI.',
          'يعمل فقط على آيفون وآيباد وماك (Apple Silicon) وApple Vision Pro — بلا نسخة أندرويد أو ويندوز.',
          'يؤكد المطور عدم وجود حسابات أو تتبع من طرف ثالث؛ تبقى المحادثات على الجهاز ما لم تُفعّل مزامنة iCloud.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو تطبيق Chapper', anchor: 'what-is-chapper' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'الأسعار: المستوى المجاني وPro وإضافة الجهاز', anchor: 'pricing' },
      { label: 'الخدمات الخلفية والنماذج المدعومة', anchor: 'models-and-backends' },
      { label: 'المنصات: آيفون وآيباد وماك وVision Pro', anchor: 'platforms' },
      { label: 'الخصوصية: ما يجمعه Chapper وما لا يجمعه', anchor: 'privacy' },
      { label: 'الشركة وتاريخ الإصدارات', anchor: 'history' },
      { label: 'المقايضات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Chapper مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Chapper', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Chapper', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'ملخص سريع',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تطبيق Chapper هو تطبيق مجاني للتجربة مع مستوى Pro بسعر 9.99 دولارًا لأجهزة آيفون/آيباد/ماك من تطوير Prevolut Ltd، مصمم في الأساس كعميل لخدمات LM Studio وOllama وخادم llama.cpp ونقاط النهاية المتوافقة مع OpenAI، مع بيع الاستدلال الحقيقي على الجهاز كإضافة منفصلة بسعر 4.99 دولارًا.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل Chapper أولاً كتطبيق تحكم عن بُعد لنماذج ذكاء اصطناعي تعمل على جهاز Mac أو الكمبيوتر الخاص بك (عبر LM Studio أو Ollama)، وثانيًا فقط كتطبيق محادثة على الجهاز إذا دفعت رسومًا إضافية لفتح الاستدلال المحلي — فهو ليس تطبيقًا بشراء واحد يعمل بالكامل على الجهاز من البداية للنهاية كما هو حال بعض المنافسين.',
          },
        ],
        items: [
          'السعر: مجاني بحد أقصى 20 محادثة؛ [نسخة Chapper Pro بسعر 9.99 دولارًا](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) لمرة واحدة؛ الاستدلال المحلي على الجهاز عملية شراء منفصلة داخل التطبيق بسعر 4.99 دولارًا، وفق قائمة App Store الحالية.',
          'المنصات: آيفون (iOS 17 فأعلى)، آيباد (iPadOS 17 فأعلى)، ماك (macOS 14 فأعلى، Apple Silicon)، وApple Vision Pro (visionOS 1.0 فأعلى) — بلا نسخة أندرويد أو ويندوز.',
          'المطور: [Prevolut Ltd](https://prevolut.uk/products/chapper/)، شركة مسجلة في المملكة المتحدة (رقم Companies House 17058766) — لا علاقة لها بتطبيق Revolut المصرفي رغم تشابه الاسم.',
          'الخدمات الخلفية: يعمل بشكل أصلي مع LM Studio وOllama وخادم llama.cpp وأي واجهة برمجة متوافقة مع OpenAI؛ يستخدم الدعم على الجهاز إطار عمل MLX من Apple، وعند توفرها، نماذج Apple Foundation Models.',
          'الميزات: تكامل أدوات MCP، أداة سير عمل طرفية معزولة تسمى "C.A.S.H."، شخصيات (Personas) مخصصة، مخرجات JSON منظمة، تصدير بصيغ متعددة (TXT وPDF وHTML وMarkdown وJSON وCSV وXML)، تحويل النص إلى كلام، وأداة فحص طلبات API الخام.',
          'الخصوصية: يؤكد المطور عدم الحاجة لحسابات وعدم استخدام تتبع من طرف ثالث؛ تبقى المحادثات على الجهاز ما لم تُفعَّل مزامنة iCloud أو الاتصال بخادم عن بُعد.',
          'التقييمات لا تزال قليلة: 3.3 من 5 نجوم بناءً على 8 تقييمات على App Store وقت إعداد هذه المراجعة — عيّنة صغيرة جدًا لا ينبغي الاستناد إليها بقوة في أي اتجاه.',
          'الإصدار 1.3.1 (وفق قائمة App Store، بتاريخ 6 أغسطس 2026) هو الإصدار الحالي؛ ويبدو أن التطبيق أُطلق على App Store خلال عام 2026، استنادًا إلى ترقيم إصداراته ومعرّفه على App Store.',
        ],
      },
      whatIsChapper: {
        id: 'what-is-chapper',
        title: 'ما هو تطبيق Chapper',
        content: [
          '**تطبيق Chapper هو تطبيق أصلي من Apple، مُدرج على App Store باسم "Chapper: AI & LM Studio Client"، مصمم لربط آيفون وآيباد وماك بنماذج الذكاء الاصطناعي — سواء كانت تعمل على الجهاز أو على خادم تتحكم فيه بنفسك.** هويته الأساسية، المنعكسة في اسمه على App Store، هي هوية عميل لخدمة [LM Studio](https://lmstudio.ai/): تشغّل نموذجًا على جهاز Mac أو كمبيوتر باستخدام LM Studio أو Ollama أو خادم llama.cpp، ويوفر Chapper واجهة محمولة أصلية للمحادثة معه من هاتفك أو جهازك اللوحي.',
          'يطوّره [Prevolut Ltd](https://prevolut.uk/products/chapper/)، وهي شركة مسجلة في إنجلترا وويلز (رقم Companies House 17058766). يشبه الاسم تطبيق Revolut المصرفي، لكنهما شركتان منفصلتان — المطور المسؤول عن Chapper كيان أصغر ومستقل، مركّز تحديدًا على عميل الذكاء الاصطناعي هذا.',
          'يُدعم أيضًا الاستدلال على الجهاز — تشغيل النموذج مباشرة على الهاتف أو الماك دون تدخل خادم — باستخدام إطار عمل MLX من Apple، وعند توفرها، نماذج Apple Foundation Models الخاصة بشركة Apple نفسها. مع ذلك، ووفق قائمة عمليات الشراء داخل التطبيق الحالية على App Store، تُباع هذه الميزة كعملية شراء منفصلة باسم "On Device Local Inference" بدلاً من تضمينها تلقائيًا في التطبيق الأساسي أو مستوى Pro. على القراء الراغبين في تطبيق يعمل على الجهاز افتراضيًا دون فتح منفصل، موازنة ذلك مع تطبيقات محلية بالكامل مثل [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private LLM](/ar/power-local-llm/private-llm-review).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**تختلف طريقة البدء باستخدام Chapper حسب ما إذا كنت تخطط للاتصال بخادم أو تشغيل نموذج على الجهاز.** لا يتطلب أي من الخيارين إنشاء حساب.',
        ],
        numberedItems: [
          {
            title: 'تنزيل التطبيق',
            whyItMatters: 'احصل على [Chapper مجانًا من App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679). يتيح لك المستوى المجاني تجربة التطبيق بحد أقصى 20 محادثة قبل أن تقرر شراء نسخة Pro.',
          },
          {
            title: 'قرر: عبر خادم أو على الجهاز',
            whyItMatters: 'إذا كنت تشغّل بالفعل [LM Studio](https://lmstudio.ai/) أو [Ollama](https://ollama.com/) على جهاز Mac أو كمبيوتر، اربط Chapper بعنوان ذلك الخادم للحصول على أسرع طريق لمحادثة تعمل. أما إذا أردت تشغيل النموذج مباشرة على هاتفك دون حاسوب منفصل، فستحتاج إلى عملية الشراء الإضافية داخل التطبيق "On Device Local Inference" بسعر 4.99 دولارًا.',
          },
          {
            title: 'ربط خدمة خلفية أو اختيار نموذج',
            whyItMatters: 'في وضع الخادم، وجّه Chapper إلى عنوان خادم LM Studio أو Ollama أو llama.cpp أو نقطة النهاية المتوافقة مع OpenAI. في وضع الجهاز، اختر من بين النماذج المدعومة عبر إطار عمل MLX من Apple، وعند توفرها، نماذج Apple Foundation Models.',
          },
          {
            title: 'قرر بشأن نسخة Pro',
            whyItMatters: 'يكفي حد الـ 20 محادثة في المستوى المجاني للحكم على مدى ملاءمة التطبيق لسير عملك. [نسخة Chapper Pro (9.99 دولارًا، لمرة واحدة)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) تزيل الحد وتضيف، وفق قائمة ميزات المطور نفسه، الشخصيات وأدوات MCP والذاكرة طويلة المدى وجميع صيغ التصدير ومزامنة iCloud.',
          },
          {
            title: 'اختياري: تفعيل مزامنة iCloud',
            whyItMatters: 'إذا أردت أن تنتقل المحادثات بين آيفون وآيباد وماك، فإن مزامنة iCloud اختيارية ومشفرة من طرف إلى طرف، وفق صفحة الخصوصية الخاصة بالمطور — وهي معطّلة افتراضيًا.',
          },
        ],
        note: 'قد تتغير الأسعار الدقيقة لعمليات الشراء داخل التطبيق، وتوزيع الميزات بين Pro وإضافة الجهاز، وقوائم النماذج المدعومة بين تحديثات App Store. تحقق من التفاصيل الحالية مباشرة داخل التطبيق أو على [chapper.app](https://chapper.app/) قبل الشراء.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار: المستوى المجاني وPro وإضافة الجهاز',
        itemHeadings: true,
        content: [
          '**يستخدم تطبيق Chapper هيكل تسعير من ثلاثة مستويات، أكثر تدرجًا من معظم تطبيقات هذه الفئة.** التطبيق الأساسي مجاني، وشراء نسخة Chapper Pro لمرة واحدة يفتح معظم الميزات المتقدمة، بينما يُسعَّر الاستدلال الحقيقي على الجهاز بشكل منفصل مرة أخرى. جرى التحقق من هذه الأرقام مقابل [قائمة App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) وموقع [chapper.app](https://chapper.app/) لهذه المراجعة.',
        ],
        columns: ['المستوى', 'السعر', 'ما يتم فتحه'],
        rows: [
          {
            'المستوى': 'مجاني',
            'السعر': '0 دولار',
            'ما يتم فتحه': 'ميزات محادثة أساسية، بحد أقصى 20 محادثة',
          },
          {
            'المستوى': 'Chapper Pro',
            'السعر': '9.99 دولارًا (لمرة واحدة)',
            'ما يتم فتحه': 'محادثات غير محدودة، ضوابط أخذ عينات متقدمة، جميع صيغ التصدير، الشخصيات، أدوات MCP، الذاكرة طويلة المدى، التحليلات، أيقونات تطبيق مخصصة، مزامنة iCloud',
          },
          {
            'المستوى': 'On Device Local Inference',
            'السعر': '4.99 دولارًا (لمرة واحدة، منفصل عن Pro)',
            'ما يتم فتحه': 'تشغيل النماذج مباشرة على الجهاز عبر Apple MLX / Foundation Models، بدلاً من الاتصال بـ LM Studio أو Ollama أو خادم آخر',
          },
          {
            'المستوى': 'إكراميات "Tea"',
            'السعر': '0.99–44.99 دولارًا',
            'ما يتم فتحه': 'إكراميات اختيارية لمرة واحدة للمطور؛ دون أي فتح وظيفي',
          },
        ],
        note: 'يصف موقع Prevolut Ltd نفسه نسخة Chapper Pro بأنها "بلا اشتراك، بلا رسوم خفية"، مع تضمين كل ميزة Pro مستقبلية تلقائيًا بعد الشراء. قد تتغير أسعار App Store وتختلف حسب المنطقة — تحقق من السعر الحالي على [قائمة App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) قبل الشراء. جرى التحقق لهذه المراجعة بتاريخ 06-09-2026.',
      },
      modelsAndBackends: {
        id: 'models-and-backends',
        title: 'الخدمات الخلفية والنماذج المدعومة',
        content: [
          '**سطح التكامل الأساسي لتطبيق Chapper هو الخدمات الخلفية عن بُعد، وليس مكتبة نماذج منسقة على الجهاز.** وفق موقع المطور نفسه، "يعمل بشكل أصلي مع LM Studio وOllama وخادم llama.cpp وأي واجهة برمجة متوافقة مع OpenAI" — يمكنك توجيه Chapper إلى أي نقطة نهاية تتحدث ذلك البروتوكول، بما في ذلك خادم مستضاف ذاتيًا على شبكتك الخاصة.',
          'للاستخدام على الجهاز (الإضافة المنفصلة بسعر 4.99 دولارًا)، يدعم التطبيق النماذج عبر إطار عمل **MLX** من Apple، وهو إطار تعلم آلي مصمم لمعالجات Apple Silicon، وعند توفيره من نظام التشغيل، **نماذج Apple Foundation Models** — نموذج Apple الخاص على الجهاز، المتاح للتطبيقات الخارجية على الأجهزة وإصدارات نظام التشغيل المدعومة. لا تنشر قائمة App Store ولا موقع المطور قائمة ثابتة ومسمّاة للنماذج على الجهاز كما تفعل بعض التطبيقات المنافسة (مكتبة Private LLM المنسقة التي تضم أكثر من 140 نموذجًا، على سبيل المثال)؛ لذا تتعامل هذه المراجعة مع اختيار النماذج على الجهاز في Chapper باعتباره أضيق نطاقًا وأكثر اعتمادًا على منظومة MLX/Foundation Models الخاصة بـ Apple من اعتماده على كتالوج GGUF منسق وكبير.',
          'وبما أن جودة النموذج وسرعته في المسار المعتمد على الخادم تعتمدان كليًا على ما تشغّله في LM Studio أو Ollama على جهازك الخاص، فإن Chapper نفسه لا يحدد سقف قدرة النموذج كما يفعل تطبيق يعمل بالكامل على الجهاز — فهو طبقة نقل وواجهة، بينما يقوم عتادك الخاص بعملية الاستدلال الفعلية.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'المنصات: آيفون وآيباد وماك وVision Pro',
        itemHeadings: true,
        columns: ['المنصة', 'ما يمكن توقعه', 'ملاحظة مهمة'],
        rows: [
          {
            'المنصة': 'آيفون',
            'ما يمكن توقعه': 'يتطلب iOS 17.0 أو أحدث، وفق قائمة App Store.',
            'ملاحظة مهمة': 'تتطلب المحادثة عبر الخادم (LM Studio/Ollama) مسار شبكة إلى ذلك الخادم؛ وتتطلب المحادثة على الجهاز إضافة منفصلة بسعر 4.99 دولارًا.',
          },
          {
            'المنصة': 'آيباد',
            'ما يمكن توقعه': 'يتطلب iPadOS 17.0 أو أحدث؛ نفس التطبيق ونفس مجموعة الميزات كما في آيفون.',
            'ملاحظة مهمة': 'لا تُنشر تفاصيل تخطيط خاصة بالآيباد بخلاف التوافق القياسي مع App Store.',
          },
          {
            'المنصة': 'ماك',
            'ما يمكن توقعه': 'يتطلب macOS 14.0 أو أحدث على معالج Apple M1 أو أحدث، وفق قائمة App Store.',
            'ملاحظة مهمة': 'يُعد جهاز Mac أيضًا المضيف الأكثر شيوعًا لـ LM Studio/Ollama، لذا سيشغّل كثير من المستخدمين الخادم وعميل Chapper على الجهاز نفسه، أو الخادم على ماك والعميل على آيفون/آيباد.',
          },
          {
            'المنصة': 'Apple Vision Pro',
            'ما يمكن توقعه': 'تُظهر قائمة App Store توافقًا مع visionOS 1.0 فأعلى.',
            'ملاحظة مهمة': 'لم تختبر هذه المراجعة تجربة Vision Pro بشكل مستقل؛ اعتبر ذلك توافقًا مُدرجًا على App Store، وليس ميزة تم التحقق منها عمليًا.',
          },
          {
            'المنصة': 'أندرويد وويندوز ولينكس',
            'ما يمكن توقعه': 'لا يوجد تطبيق رسمي على Google Play أو Microsoft Store أو أي مستودع حزم لينكس.',
            'ملاحظة مهمة': 'على مستخدمي أندرويد وويندوز الراغبين في عميل محمول مشابه متصل بـ LM Studio/Ollama النظر في [RikkaHub](https://github.com/rikkahub/rikkahub) (أندرويد) أو [AnythingLLM Mobile](https://anythingllm.com/mobile) (أندرويد، وiOS مخطط له).',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية: ما يجمعه Chapper وما لا يجمعه',
        content: [
          '**يؤكد موقع Prevolut Ltd نفسه أن Chapper لا يتطلب حسابًا ويستخدم "لا تتبع من طرف ثالث"**، وأن المحادثات تُخزَّن على الجهاز ما لم يفعّل القارئ صراحةً مزامنة iCloud أو يتصل بخادمه الخارجي الخاص. وبما أن التصميم الأساسي للتطبيق يوجّه المحادثة عبر خدمات خلفية تتحكم فيها أنت (خادم LM Studio/Ollama الخاص بك، أو الاستدلال على الجهاز)، فإن كمية البيانات التي تصل فعليًا إلى بنية Prevolut التحتية الخاصة محدودة بهذه البنية، وليس فقط بسياسة معلنة.',
        ],
        items: [
          '**لا حاجة لحساب.** يمكنك تنزيل واستخدام Chapper، بما في ذلك إجراء عمليات شراء داخل التطبيق عبر عملية الشراء القياسية من Apple، دون إنشاء ملف تعريف خاص بـ Chapper.',
          '**لا تتبع من طرف ثالث، وفق تصريح المطور نفسه.** تعتمد هذه المراجعة على هذا التصريح وليس على تدقيق مستقل لحركة شبكة التطبيق مغلق المصدر.',
          '**مزامنة iCloud اختيارية ومشفرة من طرف إلى طرف، وفق المطور.** وهي معطّلة افتراضيًا؛ وتفعيلها هو الحالة الوحيدة الموثقة التي تغادر فيها بيانات المحادثة الجهاز المحلي، وتذهب إلى حساب iCloud الخاص بالقارئ نفسه، وليس إلى خوادم Prevolut.',
          '**اتصالات الخادم ترسل البيانات إلى نقطة النهاية التي تحددها.** إذا وصلت Chapper بواجهة برمجة تطبيقات خارجية أو مستضافة سحابيًا ومتوافقة مع OpenAI بدلاً من خادمك المحلي الخاص LM Studio/Ollama، فستذهب مطالباتك إلى تلك النقطة وفق شروط الخصوصية الخاصة بها — وهذه خاصية عامة لنموذج العميل/الخادم، وليست خاصة بـ Chapper.',
          '**سياسة الخصوصية والشروط منشورة** على [prevolut.uk/products/chapper/privacy](https://prevolut.uk/products/chapper/privacy) و[prevolut.uk/products/chapper/terms](https://prevolut.uk/products/chapper/terms) — اقرأها مباشرة لمعرفة الشروط القانونية الكاملة والحالية بدلاً من الاعتماد فقط على نصوص التسويق.',
        ],
      },
      history: {
        id: 'history',
        title: 'الشركة وتاريخ الإصدارات',
        content: [
          '**تطبيق Chapper من تطوير [Prevolut Ltd](https://prevolut.uk/products/chapper/)، وهي شركة مسجلة في إنجلترا وويلز برقم Companies House 17058766.** لا تشير بيانات App Store العامة إلى تاريخ إطلاق أول دقيق، لكن معرّف التطبيق المرتفع نسبيًا على App Store (6760984679) وترقيم إصداراته المبكر يشيران إلى إطلاق في عام 2026.',
        ],
        items: [
          '**الإصدار 1.1.0.** وصفه المطور بأنه أحد أكبر إصدارات Chapper حتى الآن؛ التاريخ الدقيق غير منشور في المصادر المتاحة لهذه المراجعة.',
          '**الإصدار 1.2.0.** تحديث كبير يتمحور حول ميزة سير عمل الطرفية المعزولة "C.A.S.H."، إلى جانب تحسينات في الجودة.',
          '**الإصدار 1.3.1 (6 أغسطس 2026).** الإصدار الحالي على App Store وقت إعداد هذه المراجعة، ويضيف لمحة أولى عن "Agent Mode"، وتبديلًا أسرع للنماذج، وحقل إجابة ذكاء اصطناعي أكبر، وسلسلة من الإصلاحات الصغيرة.',
        ],
        note: 'تاريخ الإصدارات مأخوذ من قائمة "الجديد" العامة للتطبيق على App Store. لم تتمكن هذه المراجعة من التأكد بشكل مستقل من تاريخ إطلاق الإصدار 1.0 الأصلي — اعتبر تقدير إطلاق عام 2026 استنتاجًا من ترقيم الإصدارات ومعرّف App Store، وليس تاريخًا مؤكدًا من المطور.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: ['الميزة', 'ماذا تعني في الاستخدام الفعلي', 'القيد / التحفظ'],
        rows: [
          {
            'الميزة': 'مستوى مجاني للتجربة',
            'ماذا تعني في الاستخدام الفعلي': 'يمكنك اختبار الواجهة والاتصال بخادم قبل إنفاق أي مبلغ.',
            'القيد / التحفظ': 'محدود بـ 20 محادثة، والاستدلال على الجهاز غير متاح إطلاقًا في المستوى المجاني.',
          },
          {
            'الميزة': 'توافق واسع مع الخدمات الخلفية',
            'ماذا تعني في الاستخدام الفعلي': 'يعمل مع LM Studio وOllama وخادم llama.cpp وأي نقطة نهاية متوافقة مع OpenAI — مرن لمن يشغّل بالفعل خادمًا محليًا.',
            'القيد / التحفظ': 'تعتمد جودة النموذج وسرعته كليًا على الخادم الذي تتصل به، وليس على التطبيق نفسه.',
          },
          {
            'الميزة': 'مستوى Pro غني بالميزات',
            'ماذا تعني في الاستخدام الفعلي': 'أدوات MCP والشخصيات والذاكرة طويلة المدى ومخرجات JSON المنظمة والتصدير متعدد الصيغ تغطي حالات استخدام متقدمة يتجاهلها معظم المنافسين.',
            'القيد / التحفظ': 'يضيف هذا الاتساع شراء 9.99 دولارًا فوق التطبيق الأساسي، ويكلف المسار على الجهاز 4.99 دولارًا إضافية.',
          },
          {
            'الميزة': 'لا حاجة لحساب',
            'ماذا تعني في الاستخدام الفعلي': 'ثبّت التطبيق وابدأ المحادثة دون التسجيل في أي شيء.',
            'القيد / التحفظ': 'بما أن التطبيق مغلق المصدر، فإن ادعاء "لا تتبع من طرف ثالث" يستند إلى تصريح المطور نفسه وليس إلى مراجعة كود مستقلة.',
          },
          {
            'الميزة': 'تطبيق Apple أصلي ومتقن',
            'ماذا تعني في الاستخدام الفعلي': 'يعمل كتطبيق كامل الميزات على آيفون وآيباد وماك وVision Pro بشراء واحد.',
            'القيد / التحفظ': 'حصري لأجهزة Apple — لا توجد نسخة أندرويد أو ويندوز، خلافًا لبعض المنافسين من نوع عميل-خادم.',
          },
          {
            'الميزة': 'تسعير متدرج ومرن',
            'ماذا تعني في الاستخدام الفعلي': 'يمكن للمستخدمين المحتاجين فقط لميزة العميل-الخادم تجاهل إضافة الجهاز البالغة 4.99 دولارًا تمامًا.',
            'القيد / التحفظ': 'بنية المستويات الثلاثة (مجاني/Pro/على الجهاز) أقل وضوحًا للوهلة الأولى من سعر واحد ثابت، ومن السهل إساءة فهمها كـ "9.99 دولارًا وتحصل على كل شيء".',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Chapper مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر', 'الوصول إلى النماذج', 'الفرق الجوهري'],
        rows: [
          {
            'التطبيق': 'Chapper',
            'المنصات': 'آيفون/آيباد/ماك/Vision Pro (Apple فقط)',
            'السعر': 'مجاني (حد 20 محادثة) / 9.99 دولارًا Pro / +4.99 دولارًا على الجهاز',
            'الوصول إلى النماذج': 'LM Studio وOllama وllama.cpp وواجهات متوافقة مع OpenAI؛ على الجهاز عبر MLX/Foundation Models (إضافة مدفوعة)',
            'الفرق الجوهري': 'عميل خادم في الأساس؛ الاستدلال على الجهاز عملية شراء منفصلة',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'آيفون/آيباد، مع دعم جزئي لأندرويد',
            'السعر': 'مجاني، مفتوح المصدر',
            'الوصول إلى النماذج': 'أي ملف GGUF، على الجهاز بالكامل افتراضيًا',
            'الفرق الجوهري': 'مجاني ومفتوح المصدر وعلى الجهاز منذ البداية — دون حاجة لخادم أو إضافة',
          },
          {
            'التطبيق': '[Private LLM](/ar/power-local-llm/private-llm-review)',
            'المنصات': 'آيفون/آيباد/ماك (Apple فقط)',
            'السعر': 'شراء لمرة واحدة بسعر 4.99 دولارًا',
            'الوصول إلى النماذج': 'أكثر من 140 نموذجًا منسقًا على الجهاز بتقنية ضغط OmniQuant/GPTQ',
            'الفرق الجوهري': 'سعر ثابت واحد، على الجهاز فقط، دون وضع عميل-خادم',
          },
          {
            'التطبيق': '[Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            'المنصات': 'راجع المراجعة الكاملة لدعم المنصات الحالي',
            'السعر': 'راجع القائمة الحالية',
            'الوصول إلى النماذج': 'راجع المراجعة الكاملة لدعم النماذج الحالي',
            'الفرق الجوهري': 'تطبيق سطح مكتب يركز على لعب الأدوار/محادثة الشخصيات، خلافًا لعميل Chapper العام الغرض',
          },
          {
            'التطبيق': '[SillyTavern vs. Agnai vs. RisuAI](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
            'المنصات': 'واجهات قائمة على المتصفح، مستضافة ذاتيًا',
            'السعر': 'مجاني، مفتوح المصدر',
            'الوصول إلى النماذج': 'يتصل بأي خدمة خلفية محلية أو سحابية، يركز على بطاقات الشخصيات',
            'الفرق الجوهري': 'منظومة لعب أدوار/بطاقات شخصيات بدلاً من تطبيق محمول أصلي',
          },
          {
            'التطبيق': '[LLM Farm](https://llmfarm.space/)',
            'المنصات': 'iOS/ماك (مفتوح المصدر، GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'السعر': 'مجاني، مفتوح المصدر',
            'الوصول إلى النماذج': 'نماذج GGUF مخصصة عبر llama.cpp/ggml، على الجهاز افتراضيًا',
            'الفرق الجوهري': 'وفق ملف README الخاص به على GitHub، أُزيل من App Store وTestFlight في أغسطس 2025 — تحقق من التوفر الحالي',
          },
          {
            'التطبيق': '[Layla](https://www.layla-network.ai/)',
            'المنصات': 'iOS وأندرويد',
            'السعر': '19.99 دولارًا بالإضافة إلى مشتريات داخل التطبيق',
            'الوصول إلى النماذج': 'نماذج GGUF مخصصة؛ يركز على الشخصيات/لعب الأدوار مع أكثر من 100 صوت',
            'الفرق الجوهري': 'متعدد المنصات وموجه نحو الشخصيات/لعب الأدوار، وأعلى سعرًا من Chapper',
          },
          {
            'التطبيق': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'المنصات': 'تطبيق Flutter متعدد المنصات (أندرويد أساسًا)',
            'السعر': 'مجاني، مفتوح المصدر (رخصة MIT)',
            'الوصول إلى النماذج': 'أي ملف GGUF عبر llama.cpp؛ يتصل أيضًا عن بُعد بـ Anthropic وDeepSeek وOllama وMistral وOpenAI',
            'الفرق الجوهري': 'مجاني ومفتوح المصدر بالكامل، ويجمع بين الوصول المحلي والبعيد مثل Chapper، لكنه متعدد المنصات',
          },
          {
            'التطبيق': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'المنصات': 'أندرويد',
            'السعر': 'مجاني، مفتوح المصدر',
            'الوصول إلى النماذج': 'عدة واجهات برمجة لمزودي خدمات سحابية بالإضافة إلى التنفيذ المحلي',
            'الفرق الجوهري': 'مكافئ حصري لأندرويد لنموذج عميل Chapper متعدد الخدمات الخلفية',
          },
          {
            'التطبيق': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'المنصات': 'أندرويد (iOS مخطط له)',
            'السعر': 'مجاني، مفتوح المصدر',
            'الوصول إلى النماذج': 'يشغّل نماذج GGUF على الجهاز عبر Cactus Compute، أو يقترن بخادم AnythingLLM مستضاف ذاتيًا',
            'الفرق الجوهري': 'مصمم تحديدًا للاقتران بمساحة عمل AnythingLLM مستضافة ذاتيًا، وليس عميلًا عامًا متعدد الخدمات الخلفية',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات للتطبيقات الخارجية بشكل متكرر — تحقق من التفاصيل الحالية في قائمة كل تطبيق قبل اتخاذ القرار. ينبغي إعادة التحقق تحديدًا من توفر LLM Farm على App Store، إذ وصفه ملف README الخاص به على GitHub بأنه أُزيل من App Store منذ أغسطس 2025.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Chapper',
        items: [
          '**القراء الذين يشغّلون بالفعل LM Studio أو Ollama على جهاز Mac أو كمبيوتر.** القيمة الأساسية لـ Chapper هي واجهة محمولة أصلية لخادم تشغّله بالفعل — وهذه أقوى حالات استخدامه والأكثر توثيقًا.',
          '**مستخدمو Apple حصريًا الراغبون في تطبيق واحد للمحادثة عبر الخادم وعلى الجهاز معًا.** إذا كنت مستعدًا لدفع ثمن كل من Pro وإضافة الجهاز، يغطي Chapper نطاقًا أوسع من سير العمل مقارنة بتطبيق أحادي الغرض.',
          '**المستخدمون المتقدمون الراغبون في أدوات MCP والشخصيات ومخرجات JSON المنظمة.** قائمة ميزات مستوى Pro أكثف من معظم تطبيقات هذه الفئة، وهي مفيدة لمن يريد برمجة أو أتمتة إعداد الذكاء الاصطناعي المحلي الخاص به.',
          '**القراء المرتاحون لتقييم تطبيق صغير وحديث النشأة.** بوجود 8 تقييمات فقط على App Store وقت إعداد هذه المراجعة، لا يزال Chapper في بداية سجله العام — مقبول لمن يستمتع بتجربة أدوات أحدث، وأقل ملاءمة لمن يعطي أولوية لسجل طويل وموثوق.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Chapper',
        items: [
          '**القراء الراغبون في تطبيق بشراء واحد يعمل بالكامل على الجهاز دون إعداد خادم.** يكلف مسار الجهاز في Chapper 4.99 دولارًا إضافية فوق Pro وليس هو التصميم الأساسي للتطبيق — يلبي [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) (مجاني) أو [Private LLM](/ar/power-local-llm/private-llm-review) (سعر ثابت 4.99 دولارًا) هذه الحاجة بشكل أكثر مباشرة.',
          '**مستخدمو أندرويد أو ويندوز أو لينكس.** لا يملك Chapper تطبيقًا رسميًا على أي من هذه المنصات — فكر بدلًا من ذلك في [RikkaHub](https://github.com/rikkahub/rikkahub) أو [Maid](https://github.com/Mobile-Artificial-Intelligence/maid) أو [AnythingLLM Mobile](https://anythingllm.com/mobile).',
          '**القراء الراغبون في كتالوج كبير ومسمّى ومنسق من النماذج على الجهاز.** لا تنشر قائمة App Store ولا موقع المطور قائمة ثابتة للنماذج تضاهي أكثر من 140 نموذجًا منسقًا في Private LLM؛ يعتمد الاختيار على الجهاز بدلاً من ذلك على منظومة MLX/Foundation Models الخاصة بـ Apple.',
          '**القراء الراغبون في سجل عام طويل قبل الثقة بتطبيق للوصول إلى بنية تحتية محلية.** بحضور بدأ على App Store في عام 2026 و8 تقييمات إجمالية فقط، لم يبنِ Chapper بعد السجل الممتد لسنوات الذي يمتلكه Private LLM (أُطلق عام 2023) أو المشاريع مفتوحة المصدر الراسخة.',
          '**القراء الباحثون تحديدًا عن ميزات لعب الأدوار أو بطاقات الشخصيات.** Chapper عميل محادثة/واجهة برمجة عام الغرض، وليس تطبيق محادثة شخصيات — صُمم [Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay-2026) أو الأدوات المقارنة في [SillyTavern vs. Agnai vs. RisuAI](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) تحديدًا لهذا الاستخدام.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم يكلف تطبيق Chapper؟',
            a: 'تطبيق Chapper مجاني للتنزيل بحد أقصى 20 محادثة. [نسخة Chapper Pro تكلف 9.99 دولارًا لمرة واحدة](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) وتزيل الحد وتفتح معظم الميزات المتقدمة. الاستدلال المحلي على الجهاز عملية شراء منفصلة داخل التطبيق بسعر 4.99 دولارًا، بالإضافة إلى Pro، وفق قائمة App Store الحالية. جرى التحقق لهذه المراجعة بتاريخ 06-09-2026 — قد تختلف أسعار App Store حسب المنطقة وتتغير بمرور الوقت.',
          },
          {
            q: 'هل يشغّل Chapper نماذج الذكاء الاصطناعي بالكامل على هاتفي آيفون؟',
            a: 'فقط إذا اشتريت الإضافة المنفصلة "On Device Local Inference" بسعر 4.99 دولارًا، التي تستخدم إطار عمل MLX من Apple، وعند توفرها، نماذج Apple Foundation Models. افتراضيًا وفي تصميمه الأساسي، Chapper هو عميل يتصل بـ LM Studio أو Ollama أو خادم llama.cpp أو نقطة نهاية متوافقة مع OpenAI تعمل في مكان آخر.',
          },
          {
            q: 'من يطوّر تطبيق Chapper؟',
            a: 'يطوّر تطبيق Chapper شركة [Prevolut Ltd](https://prevolut.uk/products/chapper/)، وهي شركة مسجلة في إنجلترا وويلز (رقم Companies House 17058766). لا علاقة لها بتطبيق Revolut المصرفي رغم تشابه الاسم.',
          },
          {
            q: 'هل تطبيق Chapper متاح على أندرويد أو ويندوز؟',
            a: 'لا. تطبيق Chapper مصمم حصريًا لآيفون (iOS 17 فأعلى) وآيباد (iPadOS 17 فأعلى) وماك (macOS 14 فأعلى، Apple Silicon) وApple Vision Pro. لا توجد نسخة رسمية لأندرويد أو ويندوز أو لينكس.',
          },
          {
            q: 'ما الخدمات الخلفية التي يدعمها Chapper؟',
            a: 'وفق موقع المطور نفسه، "يعمل Chapper بشكل أصلي مع LM Studio وOllama وخادم llama.cpp وأي واجهة برمجة متوافقة مع OpenAI". يمكنك أيضًا توجيهه إلى خادم مستضاف ذاتيًا على شبكتك الخاصة.',
          },
          {
            q: 'هل يتطلب Chapper حسابًا؟',
            a: 'لا. يؤكد المطور عدم الحاجة لحساب، ويُستخدم Chapper دون أي تسجيل — بما في ذلك عمليات الشراء داخل التطبيق، التي تمر عبر عملية الشراء القياسية من Apple.',
          },
          {
            q: 'هل يجمع Chapper بياناتي؟',
            a: 'يؤكد موقع المطور نفسه عدم استخدام تتبع من طرف ثالث وأن المحادثات تبقى على الجهاز ما لم تُفعَّل مزامنة iCloud أو تتصل بخادمك الخارجي الخاص. تعتمد هذه المراجعة على هذا التصريح؛ Chapper مغلق المصدر، لذا لم يخضع لتدقيق كود مستقل لأغراض هذه المراجعة.',
          },
          {
            q: 'كيف يقارَن Chapper بـ PocketPal AI؟',
            a: 'تطبيق PocketPal AI مجاني ومفتوح المصدر وعلى الجهاز افتراضيًا دون حاجة لخادم. أما Chapper فهو في الأساس عميل لخوادم LM Studio وOllama والخوادم المتوافقة مع OpenAI، مع بيع الاستدلال الحقيقي على الجهاز كإضافة منفصلة بسعر 4.99 دولارًا فوق شراء Pro بسعر 9.99 دولارًا. اختر PocketPal AI إذا أردت تطبيقًا واحدًا مجانيًا وعلى الجهاز بالكامل؛ اختر Chapper إذا كان لديك بالفعل خادم محلي يعمل وتريد واجهة محمولة أصلية وغنية بالميزات له.',
          },
          {
            q: 'هل تقييمات Chapper جيدة؟',
            a: 'وقت إعداد هذه المراجعة، يحصل Chapper على 3.3 من 5 نجوم بناءً على 8 تقييمات على App Store — عيّنة صغيرة جدًا لا ينبغي التعامل معها كإشارة قوية في أي اتجاه. يبدو التطبيق حديثًا نسبيًا، استنادًا إلى ترقيم إصداراته ومعرّفه على App Store.',
          },
          {
            q: 'ما ميزة "C.A.S.H." في Chapper؟',
            a: 'C.A.S.H. أداة سير عمل طرفية/صدفة معزولة مضمّنة في Chapper، أُطلقت كعنصر مركزي في الإصدار 1.2.0. تصف مواد المطور هذه الأداة بأنها وسيلة لتشغيل مهام معزولة من داخل التطبيق؛ لم تختبر هذه المراجعة قدراتها الكاملة أو حدودها الأمنية بشكل مستقل.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يُعد تطبيق Chapper تطبيقًا قادرًا وغنيًا بالميزات للقراء الذين يشغّلون بالفعل LM Studio أو Ollama ويريدون عميل Apple أصليًا لذلك — تذهب أدوات MCP والشخصيات والمخرجات المنظمة والتصدير متعدد الصيغ في مستوى Pro إلى ما هو أبعد من معظم تطبيقات هذه الفئة. لكن تسعيره هو أيضًا أكبر نقطة احتكاك: مستوى مجاني محدود بـ 20 محادثة، وشراء Chapper Pro بسعر 9.99 دولارًا، ورسوم إضافية قدرها 4.99 دولارًا فقط لتشغيل النماذج بالكامل على الجهاز، وهذا يشكّل هيكل تكلفة أكثر تدرجًا من الأسعار الثابتة الواحدة لـ PocketPal AI (مجاني) أو Private LLM (4.99 دولارًا). بالإضافة إلى سجل عام لا يزال قليلاً (8 تقييمات على App Store، وإطلاق يبدو أنه في عام 2026، ودون تاريخ إطلاق مؤكد للإصدار 1.0 في المصادر المتاحة لهذه المراجعة)، يبدو Chapper تطبيقًا واعدًا لكنه في مرحلة مبكرة، وليس تطبيقًا راسخًا. على القراء الذين لديهم بالفعل خادم محلي يعمل ويبحثون عن طريقة متقنة للوصول إليه من آيفون أو آيباد تجربة المستوى المجاني أولاً؛ أما القراء الراغبون في تطبيق بشراء واحد يعمل بالكامل على الجهاز فعليهم البدء بدلاً من ذلك بـ [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private LLM](/ar/power-local-llm/private-llm-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Chapper على App Store](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — السعر وعمليات الشراء داخل التطبيق وتوافق المنصات والتقييمات وملاحظات الإصدار.',
          '[موقع Chapper الرسمي](https://chapper.app/) — قائمة الميزات وتوافق الخدمات الخلفية وتصريحات الخصوصية.',
          '[Prevolut Ltd — صفحة منتج Chapper](https://prevolut.uk/products/chapper/) — نموذج التسعير وحدود المستوى المجاني وتفاصيل الشركة.',
          '[سياسة خصوصية Chapper](https://prevolut.uk/products/chapper/privacy) و[شروط الخدمة](https://prevolut.uk/products/chapper/terms) — الشروط القانونية الكاملة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — بديل مجاني ومفتوح المصدر وعلى الجهاز افتراضيًا.',
          '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — تطبيق Apple بسعر ثابت 4.99 دولارًا، يعمل بالكامل على الجهاز، مع أكثر من 140 نموذجًا منسقًا.',
          '[مراجعة Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay-2026) — تطبيق ذكاء اصطناعي محلي يركز على لعب الأدوار، لاستخدام مختلف عن Chapper.',
          '[SillyTavern vs. Agnai vs. RisuAI](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — مقارنة بين واجهات لعب الأدوار المستضافة ذاتيًا.',
          '[أفضل تطبيقات LLM المحلية لآيفون في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — الاستعراض الكامل لتطبيقات آيفون لمعرفة موقع Chapper بينها.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات LLM المحلية عبر جميع المنصات.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chapper-review-hero-zh.webp',
    title: 'Chapper评测(2026):适用于iPhone、iPad和Mac的AI与LM Studio客户端',
    seoTitle: 'Chapper评测2026:iPhone和Mac的LM Studio客户端',
    intro:
      'Chapper由[Prevolut Ltd](https://prevolut.uk/products/chapper/)开发,是一款用于iPhone、iPad和Mac的原生应用,可与本地及自托管AI模型对话。下载免费,限制20次对话;一次性购买[Chapper Pro(9.99美元)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)即可完全解锁。根据当前App Store信息,真正的设备端推理(直接在设备上运行模型而非连接服务器)是一项单独的应用内购买项目,售价4.99美元。App Store价格可能因地区而异,购买前请在本地App Store确认当前价格。Chapper的核心设计首先是[LM Studio](https://lmstudio.ai/)、[Ollama](https://ollama.com/)、llama.cpp服务器以及任何OpenAI兼容端点的精致客户端——您将其指向Mac或PC上运行的服务器,然后在手机上进行对话——并在此基础上通过MLX和Apple Foundation Models叠加设备端支持。本评测将审视这一分层定价模式、该应用目前尚少的评价基数(截至撰写本评测时,App Store评分为3.3分(满分5分),共8条评价),以及它与[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)和[Private LLM](/zh/power-local-llm/private-llm-review)等完全设备端、无需服务器的应用的比较。',
    metaDescription:
      'Chapper评测2026:免费(限20次对话)、Pro一次性购买9.99美元、设备端推理附加购买4.99美元。适用于iPhone/iPad/Mac的LM Studio和Ollama客户端——价格、隐私和替代方案。',
    twitterDescription:
      'Chapper评测2026:一款用于iPhone/iPad/Mac的应用,可与LM Studio、Ollama及OpenAI兼容端点对话,设备端推理作为单独附加项目出售。价格、隐私,以及与PocketPal AI和Private LLM的比较。',
    audience:
      '已经在电脑上运行LM Studio或Ollama、希望获得原生移动客户端的iPhone、iPad和Mac用户,或正在Chapper的分层定价模式(免费/Pro/设备端)与PocketPal AI、Private LLM等完全设备端应用之间做选择的读者。',
    readTime: '9分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Chapper review',
    targetKeywords: [
      'chapper review',
      'chapper app iphone',
      'chapper ai lm studio client',
      'chapper pro price',
      'chapper on device inference',
      'lm studio client iphone',
      'ollama client iphone ipad',
      'chapper vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama', 'Qwen', 'Gemma', 'Mistral', 'Apple Foundation Models'],
    current_hardware_mentioned: ['iPhone(iOS 17及以上)', 'iPad(iPadOS 17及以上)', 'Apple Silicon Mac(M1或更新)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Chapper是由[Prevolut Ltd](https://prevolut.uk/products/chapper/)开发的一款iPhone、iPad和Mac应用,可免费试用,Pro版9.99美元,主要设计为LM Studio、Ollama、llama.cpp服务器和OpenAI兼容端点的客户端,而真正的设备端模型推理则作为单独的4.99美元附加项目出售。**免费版限制20次对话;Chapper Pro取消该限制,并根据开发者官网介绍解锁高级采样控制、导出格式、人设(Persona)、MCP工具、长期记忆和iCloud同步。希望在手机上完全运行模型、无需另外购买或配置服务器的读者,应与免费且默认设备端运行的[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)进行比较。',
    quickAnswerTop: {
      zh: {
        question: '使用Chapper是否等同于在iPhone上完全运行AI模型?',
        answer:
          '默认情况下并非如此。Chapper主要是一款客户端,用于将您的iPhone、iPad或Mac连接到运行在另一台设备上的LM Studio、Ollama、llama.cpp服务器或任何OpenAI兼容端点。真正的设备端推理是一项单独的应用内购买,售价4.99美元,这是在应用本身(免费限20次对话,或9.99美元的Chapper Pro)之外额外收取的。',
        bullets: [
          '免费版限制对话次数为20次;Chapper Pro一次性购买价为9.99美元。',
          '根据App Store信息,设备端本地推理是单独的应用内购买项目,售价4.99美元。',
          '核心后端:LM Studio、Ollama、llama.cpp服务器和OpenAI兼容API。',
          '仅支持iPhone、iPad、Mac(Apple Silicon)和Apple Vision Pro——没有Android或Windows应用。',
          '开发者声明无需账户、不使用第三方追踪;除非启用iCloud同步,否则聊天记录保留在设备本地。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Chapper是什么', anchor: 'what-is-chapper' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '价格:免费版、Pro与设备端附加购买', anchor: 'pricing' },
      { label: '支持的后端与模型', anchor: 'models-and-backends' },
      { label: '平台:iPhone、iPad、Mac与Vision Pro', anchor: 'platforms' },
      { label: '隐私:Chapper收集和不收集的内容', anchor: 'privacy' },
      { label: '公司与版本历史', anchor: 'history' },
      { label: '利弊权衡', anchor: 'tradeoffs' },
      { label: 'Chapper与替代方案对比', anchor: 'vs-alternatives' },
      { label: '哪些人适合使用Chapper', anchor: 'who-should-use' },
      { label: '哪些人不适合使用Chapper', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点速览',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chapper是由Prevolut Ltd开发的iPhone/iPad/Mac应用,可免费试用,Pro版9.99美元,主要设计为LM Studio、Ollama、llama.cpp服务器和OpenAI兼容端点的客户端,而真正的设备端模型推理则作为单独的4.99美元附加项目出售。',
          },
          {
            type: 'plain-terms',
            text: '首先把Chapper理解为一款遥控应用,用于操控运行在您Mac或PC上的AI模型(通过LM Studio或Ollama);其次,只有在您额外付费解锁本地推理后,它才成为一款设备端聊天应用——它并不像一些竞品那样,一次购买即从头到尾完全在设备端运行。',
          },
        ],
        items: [
          '价格:免费,限20次对话;[Chapper Pro一次性购买9.99美元](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679);根据当前App Store信息,设备端本地推理是单独的应用内购买项目,售价4.99美元。',
          '平台:iPhone(iOS 17及以上)、iPad(iPadOS 17及以上)、Mac(macOS 14及以上,Apple Silicon)和Apple Vision Pro(visionOS 1.0及以上)——没有Android或Windows应用。',
          '开发商:[Prevolut Ltd](https://prevolut.uk/products/chapper/),一家英国注册公司(Companies House注册号17058766)——尽管名称相似,但与银行应用Revolut无关。',
          '后端:原生支持LM Studio、Ollama、llama.cpp服务器和任何OpenAI兼容API;设备端支持使用Apple的MLX框架,以及在可用情况下的Apple Foundation Models。',
          '功能:MCP工具集成、名为"C.A.S.H."的沙盒终端工作流工具、自定义人设、结构化JSON输出、多格式导出(TXT、PDF、HTML、Markdown、JSON、CSV、XML)、文本转语音,以及原始API请求检查器。',
          '隐私:开发者声明无需账户、不使用第三方追踪;除非启用iCloud同步或连接远程服务器,否则聊天记录保留在设备本地。',
          '评价数量仍然很少:截至撰写本评测时,App Store评分为3.3分(满分5分),共8条评价——样本量太小,不应据此得出强烈结论(无论正负面)。',
          '版本1.3.1(App Store信息,日期为2026年8月6日)是当前版本;根据版本编号和App Store ID判断,该应用似乎是在2026年内于App Store上线的。',
        ],
      },
      whatIsChapper: {
        id: 'what-is-chapper',
        title: 'Chapper是什么',
        content: [
          '**Chapper是一款Apple原生应用,在App Store上以"Chapper: AI & LM Studio Client"名称上架,旨在将iPhone、iPad和Mac连接到AI模型——无论是设备端运行,还是运行在您自己控制的服务器上。** 其核心定位,也体现在其App Store名称中,是[LM Studio](https://lmstudio.ai/)的客户端:您在Mac或PC上使用LM Studio、Ollama或llama.cpp服务器运行模型,Chapper则提供原生移动界面,让您可以在手机或平板上与其对话。',
          '该应用由[Prevolut Ltd](https://prevolut.uk/products/chapper/)开发,这是一家在英格兰和威尔士注册的公司(Companies House注册号17058766)。这个名称与银行应用Revolut相似,但两者是无关的公司——Chapper的开发商是一家专注于这款AI客户端的独立小型企业。',
          '设备端推理——即无需服务器、直接在手机或Mac上运行模型——也受支持,使用Apple的MLX框架,以及在可用情况下Apple自身的Foundation Models。然而,根据当前App Store应用内购买列表,该功能是作为单独的"On Device Local Inference"购买项目出售的,而非自动包含在基础应用或Pro套餐中。希望获得默认设备端运行、无需单独解锁的应用的读者,应将其与[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)或[Private LLM](/zh/power-local-llm/private-llm-review)等完全本地化的应用进行权衡比较。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**开始使用Chapper的方式因您是打算连接服务器还是在设备端运行模型而有所不同。** 无论哪种情况都不需要创建账户。',
        ],
        numberedItems: [
          {
            title: '下载应用',
            whyItMatters: '从[Apple App Store免费获取Chapper](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)。免费版允许您在限20次对话的范围内试用应用,然后再决定是否购买Pro。',
          },
          {
            title: '决定:基于服务器还是设备端',
            whyItMatters: '如果您已经在Mac或PC上运行[LM Studio](https://lmstudio.ai/)或[Ollama](https://ollama.com/),将Chapper连接到该服务器的地址是最快获得可用聊天的方式。如果您希望模型直接在手机上运行、无需另一台电脑,则需要额外购买"On Device Local Inference"应用内项目,售价4.99美元。',
          },
          {
            title: '连接后端或选择模型',
            whyItMatters: '在服务器模式下,将Chapper指向您的LM Studio、Ollama、llama.cpp服务器或OpenAI兼容端点的地址。在设备端模式下,从通过Apple的MLX框架支持的模型中选择,以及在可用情况下的Apple Foundation Models。',
          },
          {
            title: '决定是否购买Pro',
            whyItMatters: '免费版20次对话的上限足以判断该应用是否适合您的工作流程。[Chapper Pro(9.99美元,一次性购买)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)取消该上限,并根据开发者自身的功能列表添加人设、MCP工具、长期记忆、所有导出格式和iCloud同步。',
          },
          {
            title: '可选:启用iCloud同步',
            whyItMatters: '如果您希望对话在iPhone、iPad和Mac之间保持同步,根据开发者的隐私页面,iCloud同步是可选的且端到端加密——默认处于关闭状态。',
          },
        ],
        note: '确切的应用内购买价格、Pro与设备端附加项目之间的功能划分,以及支持的模型列表可能会随App Store更新而变化。购买前请直接在应用内或[chapper.app](https://chapper.app/)上确认当前的具体信息。',
      },
      pricing: {
        id: 'pricing',
        title: '价格:免费版、Pro与设备端附加购买',
        itemHeadings: true,
        content: [
          '**Chapper采用三层定价结构,比这一类别中大多数应用更加分层。** 基础应用免费,一次性购买Chapper Pro可解锁大多数高级功能,而真正的设备端模型推理则再次单独定价。这些数字已针对本评测在[App Store信息](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)和[chapper.app](https://chapper.app/)上进行了核实。',
        ],
        columns: ['等级', '价格', '解锁内容'],
        rows: [
          {
            '等级': '免费',
            '价格': '0美元',
            '解锁内容': '核心聊天功能,限20次对话',
          },
          {
            '等级': 'Chapper Pro',
            '价格': '9.99美元(一次性)',
            '解锁内容': '无限对话、高级采样控制、所有导出格式、人设、MCP工具、长期记忆、分析功能、自定义应用图标、iCloud同步',
          },
          {
            '等级': 'On Device Local Inference',
            '价格': '4.99美元(一次性,与Pro分开)',
            '解锁内容': '通过Apple MLX / Foundation Models直接在设备端运行模型,而非连接LM Studio、Ollama或其他服务器',
          },
          {
            '等级': '"Tea"打赏',
            '价格': '0.99–44.99美元',
            '解锁内容': '给开发者的可选一次性打赏;不解锁任何功能',
          },
        ],
        note: 'Prevolut Ltd官网将Chapper Pro描述为"无订阅、无隐藏费用",购买后未来添加的每项Pro功能都会自动包含在内。App Store价格可能会变化,并因地区而异——购买前请在[App Store信息](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)上确认当前价格。本评测已于2026年9月6日核实。',
      },
      modelsAndBackends: {
        id: 'models-and-backends',
        title: '支持的后端与模型',
        content: [
          '**Chapper的主要集成对象是远程后端,而非经过精心策划的设备端模型库。** 根据开发者官网介绍,它"原生支持LM Studio、Ollama、llama.cpp服务器和任何OpenAI兼容API"——您可以将Chapper指向任何使用该协议的端点,包括您自己网络上的自托管服务器。',
          '对于设备端使用(单独的4.99美元附加项目),该应用通过为Apple Silicon构建的机器学习框架**MLX**支持模型,以及在操作系统提供的情况下支持**Apple Foundation Models**——Apple自身的设备端模型,在受支持的硬件和操作系统版本上提供给第三方应用使用。App Store信息和开发者官网均未像一些竞品应用那样(例如Private LLM拥有140多个精选模型的模型库)公布固定的、有名称的设备端模型列表;因此本评测认为,Chapper的设备端模型选择范围更窄,更依赖于Apple自身的MLX/Foundation Models生态系统,而非一个庞大的精选GGUF目录。',
          '由于基于服务器路径的模型质量和速度完全取决于您在自己设备上的LM Studio或Ollama中运行的内容,Chapper本身并不像完全设备端应用那样设定模型能力的上限——它是一层传输与界面层,实际推理由您自己的硬件完成。',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '平台:iPhone、iPad、Mac与Vision Pro',
        itemHeadings: true,
        columns: ['平台', '预期表现', '重要说明'],
        rows: [
          {
            '平台': 'iPhone',
            '预期表现': '根据App Store信息,需要iOS 17.0或更高版本。',
            '重要说明': '基于服务器的聊天(LM Studio/Ollama)需要到该服务器的网络路径;设备端聊天需要单独的4.99美元附加购买。',
          },
          {
            '平台': 'iPad',
            '预期表现': '需要iPadOS 17.0或更高版本;应用和功能集与iPhone相同。',
            '重要说明': '除标准App Store兼容性外,未公布针对iPad的特定布局细节。',
          },
          {
            '平台': 'Mac',
            '预期表现': '根据App Store信息,需要在Apple M1芯片或更新芯片上运行macOS 14.0或更高版本。',
            '重要说明': 'Mac也是LM Studio/Ollama最常见的宿主设备,因此许多用户会在同一台机器上运行服务器和Chapper客户端,或在Mac上运行服务器、在iPhone/iPad上运行客户端。',
          },
          {
            '平台': 'Apple Vision Pro',
            '预期表现': 'App Store信息显示兼容visionOS 1.0及以上。',
            '重要说明': '本评测未对Vision Pro体验进行独立测试;请将其视为App Store上列出的兼容性,而非经过实际验证的功能。',
          },
          {
            '平台': 'Android、Windows、Linux',
            '预期表现': 'Google Play、Microsoft Store或任何Linux软件仓库均无官方应用。',
            '重要说明': '希望获得类似连接LM Studio/Ollama的移动客户端的Android和Windows用户,应考虑[RikkaHub](https://github.com/rikkahub/rikkahub)(Android)或[AnythingLLM Mobile](https://anythingllm.com/mobile)(Android,iOS版计划中)。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私:Chapper收集和不收集的内容',
        content: [
          '**Prevolut Ltd官网声明Chapper无需账户,并且"不使用第三方追踪"**,并表示除非读者明确启用iCloud同步或连接到自己的外部服务器,否则对话都存储在设备本地。由于该应用的核心设计是通过您自己控制的后端(您自己的LM Studio/Ollama服务器,或设备端推理)路由聊天内容,因此实际到达Prevolut自身基础设施的数据量受这种架构本身的限制,而不仅仅是政策上的限制。',
        ],
        items: [
          '**无需账户。** 您可以下载并使用Chapper,包括通过Apple标准购买流程进行应用内购买,而无需创建Chapper专属的个人资料。',
          '**根据开发者自身声明,不使用第三方追踪。** 本评测依据的是这一声明,而非对这款闭源应用网络流量的独立审计。',
          '**根据开发者介绍,iCloud同步是可选的且端到端加密。** 默认关闭;启用它是唯一有文档记录的、聊天数据会离开本地设备的情况,而且数据发往读者自己的iCloud账户,而非Prevolut的服务器。',
          '**服务器连接会将数据发送到您配置的任何端点。** 如果您将Chapper连接到第三方或云托管的OpenAI兼容API,而非您自己的本地LM Studio/Ollama服务器,那么您的提示词将根据该端点自身的隐私条款发送到该端点——这是客户端/服务器模式的普遍属性,并非Chapper所特有。',
          '**隐私政策和条款已公开发布**,详见[prevolut.uk/products/chapper/privacy](https://prevolut.uk/products/chapper/privacy)和[prevolut.uk/products/chapper/terms](https://prevolut.uk/products/chapper/terms)——请直接阅读以了解当前完整的法律条款,而不要仅依赖营销文案。',
        ],
      },
      history: {
        id: 'history',
        title: '公司与版本历史',
        content: [
          '**Chapper由[Prevolut Ltd](https://prevolut.uk/products/chapper/)开发,该公司在英格兰和威尔士注册,Companies House注册号为17058766。** 公开的App Store数据未给出确切的首次发布日期,但该应用相对较高的App Store ID(6760984679)及其较早的版本编号表明其于2026年发布。',
        ],
        items: [
          '**版本1.1.0。** 开发者将其描述为迄今为止Chapper最大的更新之一;本评测可用来源中未公布确切日期。',
          '**版本1.2.0。** 一次以沙盒终端工作流功能"C.A.S.H."为核心的重大更新,并伴有质量改进。',
          '**版本1.3.1(2026年8月6日)。** 本评测撰写时的当前App Store版本,新增了"Agent Mode"的首次预览、更快的模型切换、更大的AI回答输入框,以及一系列小修复。',
        ],
        note: '版本历史来自该应用在App Store上公开的"新功能"列表。本评测无法独立确认该应用最初1.0版本的发布日期——请将2026年发布的估计视为根据版本编号和App Store ID推断得出,而非开发者确认的日期。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '利弊权衡',
        columns: ['优点', '实际使用中的意义', '限制/注意事项'],
        rows: [
          {
            '优点': '可先试用的免费版',
            '实际使用中的意义': '您可以在花钱之前测试界面和服务器连接。',
            '限制/注意事项': '限20次对话,且设备端推理在免费版中完全不可用。',
          },
          {
            '优点': '广泛的后端兼容性',
            '实际使用中的意义': '可与LM Studio、Ollama、llama.cpp服务器及任何OpenAI兼容端点配合使用——对已经运行本地服务器的用户来说非常灵活。',
            '限制/注意事项': '模型质量和速度完全取决于您连接的服务器,而非应用本身。',
          },
          {
            '优点': '功能密集的Pro版',
            '实际使用中的意义': 'MCP工具、人设、长期记忆、结构化JSON输出和多格式导出涵盖了大多数竞品所忽略的高级用例。',
            '限制/注意事项': '这种功能广度意味着在基础应用之外要额外购买9.99美元,而设备端路径还要多花4.99美元。',
          },
          {
            '优点': '无需账户',
            '实际使用中的意义': '安装后即可开始聊天,无需注册任何东西。',
            '限制/注意事项': '由于该应用是闭源的,"无第三方追踪"的说法依据的是开发者自身声明,而非独立的代码审查。',
          },
          {
            '优点': '原生、精致的Apple应用',
            '实际使用中的意义': '一次购买即可在iPhone、iPad、Mac和Vision Pro上作为一等应用运行。',
            '限制/注意事项': '仅限Apple设备——与一些服务器-客户端类竞品不同,没有Android或Windows版本。',
          },
          {
            '优点': '灵活的分层定价',
            '实际使用中的意义': '只需要服务器-客户端功能的用户可以完全跳过4.99美元的设备端附加购买。',
            '限制/注意事项': '三层结构(免费/Pro/设备端)一眼看去不如单一定价透明,容易被误解为"9.99美元即可拥有一切"。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Chapper与替代方案对比',
        columns: ['应用', '平台', '价格', '模型访问方式', '关键区别'],
        rows: [
          {
            '应用': 'Chapper',
            '平台': 'iPhone/iPad/Mac/Vision Pro(仅限Apple)',
            '价格': '免费(限20次聊天)/ Pro 9.99美元 / +设备端4.99美元',
            '模型访问方式': 'LM Studio、Ollama、llama.cpp、OpenAI兼容API;设备端通过MLX/Foundation Models(付费附加项目)',
            '关键区别': '主要是服务器客户端;设备端推理是单独购买项目',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iPhone/iPad,部分支持Android',
            '价格': '免费,开源',
            '模型访问方式': '任何GGUF文件,默认完全设备端运行',
            '关键区别': '免费、开源,从一开始就是设备端运行——无需服务器或附加购买',
          },
          {
            '应用': '[Private LLM](/zh/power-local-llm/private-llm-review)',
            '平台': 'iPhone/iPad/Mac(仅限Apple)',
            '价格': '一次性购买4.99美元',
            '模型访问方式': '140多个精选设备端模型,采用OmniQuant/GPTQ量化',
            '关键区别': '单一固定价格,仅设备端,无服务器客户端模式',
          },
          {
            '应用': '[Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            '平台': '当前平台支持情况请参阅完整评测',
            '价格': '请参阅当前信息',
            '模型访问方式': '当前模型支持情况请参阅完整评测',
            '关键区别': '专注于角色扮演/角色聊天的桌面优先应用,不同于Chapper的通用客户端',
          },
          {
            '应用': '[SillyTavern vs. Agnai vs. RisuAI](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
            '平台': '基于浏览器的前端,自托管',
            '价格': '免费,开源',
            '模型访问方式': '连接任何本地或云端后端,专注于角色卡',
            '关键区别': '角色扮演/角色卡生态系统,而非原生移动应用',
          },
          {
            '应用': '[LLM Farm](https://llmfarm.space/)',
            '平台': 'iOS/Mac(开源,GitHub:[guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            '价格': '免费,开源',
            '模型访问方式': '通过llama.cpp/ggml加载自定义GGUF模型,默认设备端运行',
            '关键区别': '据其自身GitHub README介绍,已于2025年8月从App Store和TestFlight下架——请核实当前可用性',
          },
          {
            '应用': '[Layla](https://www.layla-network.ai/)',
            '平台': 'iOS和Android',
            '价格': '19.99美元外加应用内购买',
            '模型访问方式': '自定义GGUF模型;专注角色/角色扮演,配备100多种语音',
            '关键区别': '跨平台,面向角色/角色扮演,价格高于Chapper',
          },
          {
            '应用': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            '平台': '跨平台Flutter应用(主要面向Android)',
            '价格': '免费,开源(MIT许可证)',
            '模型访问方式': '通过llama.cpp加载任何GGUF文件;也可远程连接Anthropic、DeepSeek、Ollama、Mistral、OpenAI',
            '关键区别': '免费,完全开源,像Chapper一样结合本地和远程访问,但支持跨平台',
          },
          {
            '应用': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            '平台': 'Android',
            '价格': '免费,开源',
            '模型访问方式': '多个云服务提供商API加上本地执行',
            '关键区别': 'Chapper多后端客户端模式的Android专属等效方案',
          },
          {
            '应用': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            '平台': 'Android(iOS版计划中)',
            '价格': '免费,开源',
            '模型访问方式': '通过Cactus Compute在设备端运行GGUF模型,或与自托管的AnythingLLM服务器配合使用',
            '关键区别': '专为与自托管AnythingLLM工作区配合使用而设计,而非通用的多后端客户端',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化——做决定前请在各应用自身的信息页面核实最新详情。尤其应重新核实LLM Farm在App Store上的可用性,因为其自身的GitHub README将其描述为自2025年8月起已从App Store下架。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '哪些人适合使用Chapper',
        items: [
          '**已经在Mac或PC上运行LM Studio或Ollama的读者。** Chapper的核心价值在于为您已经在运行的服务器提供原生移动前端——这是其最强大、也最有据可查的使用场景。',
          '**希望用一款应用同时满足基于服务器和设备端聊天的纯Apple用户。** 如果您愿意同时购买Pro和设备端附加项目,Chapper覆盖的工作流程范围比单一用途应用更广。',
          '**希望获得MCP工具、人设和结构化JSON输出的高级用户。** Pro版的功能列表比这一类别中大多数应用更密集,对希望围绕自己的本地AI设置进行脚本化或自动化的读者很有用。',
          '**愿意评估一款年轻的小型应用的读者。** 截至撰写本评测时,App Store上仅有8条评价,Chapper仍处于公开使用记录的早期阶段——对喜欢尝试新工具的读者来说可以接受,但对优先考虑经过长期验证的历史记录的读者则不太适合。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '哪些人不适合使用Chapper',
        items: [
          '**希望一次购买即可完全设备端运行、无需配置服务器的读者。** Chapper的设备端路径需要在Pro基础上额外支付4.99美元,这并非该应用的主要设计初衷——[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)(免费)或[Private LLM](/zh/power-local-llm/private-llm-review)(固定价4.99美元)更直接地满足这一需求。',
          '**Android、Windows或Linux用户。** Chapper在这些平台上均无官方应用——请考虑改用[RikkaHub](https://github.com/rikkahub/rikkahub)、[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)或[AnythingLLM Mobile](https://anythingllm.com/mobile)。',
          '**希望获得大型、明确命名且精心策划的设备端模型目录的读者。** App Store信息和开发者官网均未公布可与Private LLM 140多个精选模型相媲美的固定模型列表;设备端的选择范围反而更依赖于Apple自身的MLX/Foundation Models生态系统。',
          '**在将本地基础设施的访问权限交给一款应用之前,希望看到长期公开记录的读者。** Chapper的App Store展示似乎始于2026年,总共只有8条评价,尚未建立起Private LLM(2023年推出)或成熟开源项目那样多年的历史记录。',
          '**专门寻求角色扮演或角色卡功能的读者。** Chapper是一款通用聊天/API客户端,而非角色聊天应用——[Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay-2026)或[SillyTavern vs. Agnai vs. RisuAI](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)中比较的工具正是专为这一用途打造的。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Chapper的价格是多少?',
            a: 'Chapper可免费下载,限20次对话。[Chapper Pro一次性购买价为9.99美元](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679),取消该限制并解锁大多数高级功能。根据当前App Store信息,设备端本地推理是在Pro之外单独购买的应用内项目,售价4.99美元。本评测已于2026年9月6日核实——App Store价格可能因地区而异,并随时间变化。',
          },
          {
            q: 'Chapper能在我的iPhone上完全运行AI模型吗?',
            a: '只有购买了单独的"On Device Local Inference"附加项目(4.99美元)才可以,该项目使用Apple的MLX框架,以及在可用情况下的Apple Foundation Models。默认情况下,以及在其主要设计中,Chapper是一款连接到运行在其他地方的LM Studio、Ollama、llama.cpp服务器或OpenAI兼容端点的客户端。',
          },
          {
            q: 'Chapper是谁开发的?',
            a: 'Chapper由[Prevolut Ltd](https://prevolut.uk/products/chapper/)开发,这是一家在英格兰和威尔士注册的公司(Companies House注册号17058766)。尽管名称相似,但它与银行应用Revolut无关。',
          },
          {
            q: 'Chapper支持Android或Windows吗?',
            a: '不支持。Chapper专为iPhone(iOS 17及以上)、iPad(iPadOS 17及以上)、Mac(macOS 14及以上,Apple Silicon)和Apple Vision Pro打造。没有官方的Android、Windows或Linux版本。',
          },
          {
            q: 'Chapper支持哪些后端?',
            a: '根据开发者官网介绍,Chapper"原生支持LM Studio、Ollama、llama.cpp服务器和任何OpenAI兼容API"。您也可以将其指向您自己网络上的自托管服务器。',
          },
          {
            q: 'Chapper需要账户吗?',
            a: '不需要。开发者声明无需账户,使用Chapper无需任何注册——包括应用内购买,这些购买通过Apple的标准购买流程完成。',
          },
          {
            q: 'Chapper会收集我的数据吗?',
            a: '开发者官网声明未使用第三方追踪,除非启用iCloud同步或连接到您自己的外部服务器,否则对话会保留在设备本地。本评测依据的是这一声明;由于Chapper是闭源的,本评测未对其进行独立的代码审计。',
          },
          {
            q: 'Chapper与PocketPal AI相比如何?',
            a: 'PocketPal AI免费、开源,并且默认设备端运行,无需服务器。Chapper主要是LM Studio、Ollama及OpenAI兼容服务器的客户端,真正的设备端推理作为单独的4.99美元附加项目出售,需在9.99美元的Pro购买之外额外支付。如果您想要一款免费且完全设备端运行的单一应用,请选择PocketPal AI;如果您已经运行了本地服务器,并希望为其配备一款原生且功能丰富的移动前端,请选择Chapper。',
          },
          {
            q: 'Chapper的评价好吗?',
            a: '截至本评测撰写时,Chapper在App Store上的评分为3.3分(满分5分),共8条评价——样本量非常小,不应将其视为任何方向上的强烈信号。根据版本编号和App Store ID判断,该应用相对较新。',
          },
          {
            q: 'Chapper中的"C.A.S.H."功能是什么?',
            a: 'C.A.S.H.是Chapper内置的一个沙盒终端/Shell工作流工具,作为版本1.2.0的核心亮点推出。开发者的资料将其描述为一种在应用内运行沙盒化工作流的方式;本评测未独立测试其全部功能或安全边界。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '对于已经运行LM Studio或Ollama、希望为其配备原生Apple客户端的读者来说,Chapper是一款功能强大、功能丰富的应用——Pro版中的MCP工具、人设、结构化输出和多格式导出,都比这一类别中大多数应用走得更远。但其定价也是最大的摩擦点:限20次对话的免费版、9.99美元的Chapper Pro购买,再加上仅为完全在设备端运行模型就需额外支付的4.99美元,加起来构成了比PocketPal AI(免费)或Private LLM(4.99美元)的固定单一价格更为分层的成本结构。再加上仍然单薄的公开记录(App Store仅8条评价、看起来是2026年才发布,且本评测可用来源中没有确认的1.0发布日期),Chapper给人的印象更像是一款有前景但尚处早期阶段的应用,而非一款成熟的应用。已经运行本地服务器、并希望找到一种精致方式从iPhone或iPad访问它的读者,应先试用免费版;而希望获得一次购买即可完全设备端运行的应用的读者,则应改为从[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)或[Private LLM](/zh/power-local-llm/private-llm-review)入手。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[App Store上的Chapper](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)——价格、应用内购买、平台兼容性、评价和版本说明。',
          '[Chapper官方网站](https://chapper.app/)——功能列表、后端兼容性和隐私声明。',
          '[Prevolut Ltd——Chapper产品页面](https://prevolut.uk/products/chapper/)——定价模式、免费版限制和公司详情。',
          '[Chapper隐私政策](https://prevolut.uk/products/chapper/privacy)和[服务条款](https://prevolut.uk/products/chapper/terms)——完整的法律条款。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review)——一款免费、开源、默认设备端运行的替代方案。',
          '[Private LLM评测](/zh/power-local-llm/private-llm-review)——一款固定价4.99美元、完全设备端运行、拥有140多个精选模型的Apple应用。',
          '[Backyard AI评测](/zh/power-local-llm/backyard-ai-review-local-roleplay-2026)——一款专注于角色扮演的本地AI应用,与Chapper的使用场景不同。',
          '[SillyTavern vs. Agnai vs. RisuAI](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)——自托管角色扮演前端的比较。',
          '[2026年iPhone最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026)——完整的iPhone应用汇总,帮助了解Chapper的定位。',
          '[完整的本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)——涵盖所有平台的更广泛本地LLM工具目录。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chapper-review-hero-ko.webp',
    title: 'Chapper 리뷰(2026년): iPhone·iPad·Mac용 AI & LM Studio 클라이언트',
    seoTitle: 'Chapper 리뷰 2026: iPhone·Mac용 LM Studio 클라이언트',
    intro:
      '[Prevolut Ltd](https://prevolut.uk/products/chapper/)가 개발한 Chapper는 로컬 및 자체 호스팅 AI 모델과 대화할 수 있는 iPhone·iPad·Mac용 네이티브 앱입니다. 다운로드는 무료이며 대화 20회 제한이 있고, [Chapper Pro를 9.99달러에 일회 결제](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)하면 완전히 잠금 해제됩니다. 현재 App Store 정보에 따르면 진정한 온디바이스 추론(서버에 연결하지 않고 기기에서 직접 모델을 실행하는 것)은 별도의 앱 내 구입 항목으로 4.99달러에 판매됩니다. App Store 가격은 지역에 따라 다를 수 있으므로 구매 전 해당 지역 App Store에서 현재 가격을 확인하세요. Chapper의 핵심 설계는 무엇보다도 [LM Studio](https://lmstudio.ai/), [Ollama](https://ollama.com/), llama.cpp 서버, 그리고 모든 OpenAI 호환 엔드포인트를 위한 정교한 클라이언트라는 점입니다 — Mac이나 PC에서 실행 중인 서버를 지정하고 휴대폰에서 대화하는 방식이 중심이며, 여기에 MLX와 Apple Foundation Models를 통한 온디바이스 지원이 추가되어 있습니다. 이 리뷰에서는 이러한 단계별 가격 모델, 아직 적은 리뷰 수(작성 시점 기준 App Store 평점 3.3/5, 8건), 그리고 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private LLM](/ko/power-local-llm/private-llm-review)처럼 서버가 필요 없는 완전 온디바이스 앱과의 비교를 살펴봅니다.',
    metaDescription:
      'Chapper 리뷰 2026: 무료(20회 대화 제한), Pro 일회 결제 9.99달러, 온디바이스 추론 추가 결제 4.99달러. iPhone/iPad/Mac용 LM Studio·Ollama 클라이언트 — 가격, 개인정보 보호, 대안 앱을 정리했습니다.',
    twitterDescription:
      'Chapper 리뷰 2026: LM Studio, Ollama, OpenAI 호환 엔드포인트와 대화할 수 있는 iPhone/iPad/Mac 앱으로, 온디바이스 추론은 별도로 판매됩니다. 가격, 개인정보 보호, PocketPal AI·Private LLM과의 비교.',
    audience:
      'Mac이나 PC에서 이미 LM Studio나 Ollama를 운영하며 네이티브 모바일 클라이언트를 원하는 iPhone·iPad·Mac 사용자, 또는 Chapper의 단계별 가격 모델(무료/Pro/온디바이스)과 PocketPal AI·Private LLM 같은 완전 온디바이스 앱 사이에서 고민하는 독자.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Chapper review',
    targetKeywords: [
      'chapper review',
      'chapper app iphone',
      'chapper ai lm studio client',
      'chapper pro price',
      'chapper on device inference',
      'lm studio client iphone',
      'ollama client iphone ipad',
      'chapper vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama', 'Qwen', 'Gemma', 'Mistral', 'Apple Foundation Models'],
    current_hardware_mentioned: ['iPhone(iOS 17 이상)', 'iPad(iPadOS 17 이상)', 'Apple Silicon Mac(M1 이상)', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Chapper는 [Prevolut Ltd](https://prevolut.uk/products/chapper/)가 개발한 무료 체험 가능·Pro 9.99달러의 iPhone·iPad·Mac용 앱으로, 주로 LM Studio, Ollama, llama.cpp 서버, OpenAI 호환 엔드포인트를 위한 클라이언트로 설계되었으며, 진정한 온디바이스 모델 실행은 별도의 4.99달러 추가 구입 항목으로 판매됩니다.** 무료 등급은 대화 20회로 제한되며, Chapper Pro는 이 제한을 없애고 개발사 자체 웹사이트에 따르면 고급 샘플링 설정, 내보내기 형식, 페르소나, MCP 도구, 장기 기억, iCloud 동기화를 잠금 해제합니다. 별도 구매나 서버 설정 없이 휴대폰에서 모델을 완전히 실행하고 싶은 독자는 무료이며 기본적으로 온디바이스로 동작하는 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 비교해 보아야 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Chapper를 사용하는 것이 iPhone에서 AI 모델을 완전히 실행하는 것과 같은가요?',
        answer:
          '기본적으로는 그렇지 않습니다. Chapper는 주로 iPhone, iPad, Mac을 다른 기기에서 실행 중인 LM Studio, Ollama, llama.cpp 서버, 또는 OpenAI 호환 엔드포인트에 연결하는 클라이언트입니다. 진정한 온디바이스 추론은 앱 자체(무료, 대화 20회 제한 또는 Chapper Pro 9.99달러)에 더해 별도의 앱 내 구입 항목으로 4.99달러에 판매됩니다.',
        bullets: [
          '무료 등급은 대화 수를 20회로 제한. Chapper Pro는 일회 결제 9.99달러.',
          'App Store 정보에 따르면 온디바이스 로컬 추론은 별도의 앱 내 구입 항목으로 4.99달러.',
          '핵심 백엔드: LM Studio, Ollama, llama.cpp 서버, OpenAI 호환 API.',
          'iPhone, iPad, Mac(Apple Silicon), Apple Vision Pro만 지원 — Android나 Windows 앱은 없음.',
          '개발사는 계정이 필요 없고 제3자 추적을 사용하지 않는다고 밝힘. iCloud 동기화를 활성화하지 않는 한 대화는 기기 내에 유지됨.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Chapper란 무엇인가', anchor: 'what-is-chapper' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '가격: 무료 등급, Pro, 온디바이스 추가 구입', anchor: 'pricing' },
      { label: '지원 백엔드와 모델', anchor: 'models-and-backends' },
      { label: '플랫폼: iPhone, iPad, Mac, Vision Pro', anchor: 'platforms' },
      { label: '개인정보 보호: Chapper가 수집하는 것과 하지 않는 것', anchor: 'privacy' },
      { label: '개발사와 버전 히스토리', anchor: 'history' },
      { label: '장단점 비교', anchor: 'tradeoffs' },
      { label: 'Chapper와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Chapper를 추천하는 사용자', anchor: 'who-should-use' },
      { label: 'Chapper를 추천하지 않는 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Chapper는 Prevolut Ltd가 개발한 무료 체험 가능·Pro 9.99달러의 iPhone/iPad/Mac용 앱으로, 주로 LM Studio, Ollama, llama.cpp 서버, OpenAI 호환 엔드포인트를 위한 클라이언트로 설계되었으며, 진정한 온디바이스 모델 실행은 별도의 4.99달러 추가 구입 항목으로 제공된다.',
          },
          {
            type: 'plain-terms',
            text: 'Chapper를 먼저 Mac이나 PC에서 실행되는 AI 모델(LM Studio나 Ollama를 통해)을 위한 리모컨 앱으로 이해하고, 추가 요금을 내고 로컬 추론을 잠금 해제한 경우에만 두 번째로 온디바이스 채팅 앱이 된다고 생각하세요 — 일부 경쟁 앱처럼 한 번의 구매로 처음부터 끝까지 완전히 온디바이스로 동작하는 앱은 아닙니다.',
          },
        ],
        items: [
          '가격: 무료(대화 20회 제한); [Chapper Pro는 일회 결제 9.99달러](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679); 현재 App Store 정보에 따르면 온디바이스 로컬 추론은 별도의 앱 내 구입 항목으로 4.99달러.',
          '플랫폼: iPhone(iOS 17 이상), iPad(iPadOS 17 이상), Mac(macOS 14 이상, Apple Silicon), Apple Vision Pro(visionOS 1.0 이상) — Android나 Windows 앱은 없음.',
          '개발사: [Prevolut Ltd](https://prevolut.uk/products/chapper/). 영국에 등록된 회사(Companies House 등록번호 17058766) — 이름이 비슷하지만 은행 앱 Revolut과는 무관.',
          '백엔드: LM Studio, Ollama, llama.cpp 서버, 모든 OpenAI 호환 API와 네이티브로 연동. 온디바이스 지원은 Apple의 MLX 프레임워크와, 가능한 경우 Apple Foundation Models를 사용.',
          '기능: MCP 도구 연동, "C.A.S.H."라는 샌드박스 터미널 워크플로 도구, 맞춤형 페르소나, 구조화된 JSON 출력, 다중 형식 내보내기(TXT, PDF, HTML, Markdown, JSON, CSV, XML), 음성 합성, 원시 API 요청 검사기.',
          '개인정보 보호: 개발사는 계정이 필요 없고 제3자 추적을 사용하지 않는다고 밝힘. iCloud 동기화나 원격 서버 연결을 활성화하지 않는 한 대화는 기기 내에 유지됨.',
          '리뷰 수는 아직 적음: 리뷰 작성 시점 기준 App Store 평점은 5점 만점에 3.3점, 평가 8건 — 어느 방향으로든 강한 결론을 내리기에는 너무 적은 샘플.',
          '버전 1.3.1(App Store 정보, 2026년 8월 6일자)이 현재 버전. 버전 번호와 App Store ID로 미루어 볼 때 2026년 중 App Store에 출시된 것으로 보임.',
        ],
      },
      whatIsChapper: {
        id: 'what-is-chapper',
        title: 'Chapper란 무엇인가',
        content: [
          '**Chapper는 App Store에 "Chapper: AI & LM Studio Client"로 등록된 Apple 네이티브 앱으로, iPhone, iPad, Mac을 AI 모델에 연결하도록 설계되었습니다 — 온디바이스이든, 직접 관리하는 서버이든 상관없습니다.** App Store 이름 자체에도 반영되어 있듯, 핵심 정체성은 [LM Studio](https://lmstudio.ai/)용 클라이언트입니다. Mac이나 PC에서 LM Studio, Ollama, 또는 llama.cpp 서버로 모델을 실행하면, Chapper는 휴대폰이나 태블릿에서 대화할 수 있는 네이티브 모바일 인터페이스를 제공합니다.',
          '개발사는 잉글랜드 및 웨일스에 등록된 회사인 [Prevolut Ltd](https://prevolut.uk/products/chapper/)(Companies House 등록번호 17058766)입니다. 이름은 은행 앱 Revolut과 비슷하지만 두 회사는 무관합니다 — Chapper의 개발사는 이 AI 클라이언트에 특화된, 더 작고 독립적인 기업입니다.',
          '온디바이스 추론 — 서버 없이 휴대폰이나 Mac에서 직접 모델을 실행하는 것 — 또한 지원되며, Apple의 MLX 프레임워크와, 가능한 경우 Apple 자체의 Foundation Models를 사용합니다. 그러나 현재 App Store 내 구입 항목 목록에 따르면, 이 기능은 기본 앱이나 Pro 등급에 자동으로 포함되는 것이 아니라 "On Device Local Inference"라는 별도 구입 항목으로 판매됩니다. 별도의 잠금 해제 없이 기본적으로 온디바이스로 동작하는 앱을 원하는 독자는 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private LLM](/ko/power-local-llm/private-llm-review)과 같은 완전 로컬 앱과 비교해 보아야 합니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**Chapper를 시작하는 방법은 서버에 연결할 계획인지, 아니면 온디바이스로 모델을 실행할 계획인지에 따라 달라집니다.** 어느 경우든 계정 생성은 필요하지 않습니다.',
        ],
        numberedItems: [
          {
            title: '앱 다운로드',
            whyItMatters: '[Apple App Store에서 Chapper를 무료로 받으세요](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679). 무료 등급을 이용하면 대화 20회 제한 안에서 Pro 구매 여부를 결정하기 전에 앱을 사용해 볼 수 있습니다.',
          },
          {
            title: '서버 기반인지 온디바이스인지 결정',
            whyItMatters: 'Mac이나 PC에서 이미 [LM Studio](https://lmstudio.ai/)나 [Ollama](https://ollama.com/)를 실행 중이라면, 해당 서버 주소로 Chapper를 연결하는 것이 작동하는 채팅을 가장 빨리 얻는 방법입니다. 별도의 컴퓨터 없이 휴대폰에서 직접 모델을 실행하고 싶다면 추가 앱 내 구입 항목인 "On Device Local Inference"(4.99달러)가 필요합니다.',
          },
          {
            title: '백엔드 연결 또는 모델 선택',
            whyItMatters: '서버 모드에서는 LM Studio, Ollama, llama.cpp 서버, 또는 OpenAI 호환 엔드포인트의 주소로 Chapper를 지정하세요. 온디바이스 모드에서는 Apple의 MLX 프레임워크와, 가능한 경우 Apple Foundation Models를 통해 지원되는 모델 중에서 선택하세요.',
          },
          {
            title: 'Pro 여부 결정',
            whyItMatters: '무료 등급의 대화 20회 제한만으로도 앱이 자신의 워크플로에 맞는지 판단하기에 충분합니다. [Chapper Pro(일회 결제 9.99달러)](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)는 개발사 자체 기능 목록에 따르면 제한을 없애고 페르소나, MCP 도구, 장기 기억, 모든 내보내기 형식, iCloud 동기화를 추가합니다.',
          },
          {
            title: '선택 사항: iCloud 동기화 활성화',
            whyItMatters: 'iPhone, iPad, Mac 간에 대화를 이어가고 싶다면, 개발사의 개인정보 보호 페이지에 따라 iCloud 동기화는 선택 사항이며 종단 간 암호화됩니다 — 기본값은 비활성화입니다.',
          },
        ],
        note: '정확한 앱 내 구입 가격, Pro와 온디바이스 추가 구입 항목 간의 기능 구분, 지원 모델 목록은 App Store 업데이트마다 달라질 수 있습니다. 구매 전 앱 내 또는 [chapper.app](https://chapper.app/)에서 최신 정보를 확인하세요.',
      },
      pricing: {
        id: 'pricing',
        title: '가격: 무료 등급, Pro, 온디바이스 추가 구입',
        itemHeadings: true,
        content: [
          '**Chapper는 이 카테고리의 대부분 앱보다 더 세분화된 3단계 가격 구조를 사용합니다.** 기본 앱은 무료이며, Chapper Pro를 일회 결제하면 대부분의 고급 기능이 잠금 해제되고, 진정한 온디바이스 모델 실행은 다시 별도로 가격이 책정됩니다. 이 수치들은 이 리뷰를 위해 [App Store 정보](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)와 [chapper.app](https://chapper.app/)을 대조하여 확인했습니다.',
        ],
        columns: ['등급', '가격', '잠금 해제되는 내용'],
        rows: [
          {
            '등급': '무료',
            '가격': '0달러',
            '잠금 해제되는 내용': '기본 채팅 기능, 대화 20회로 제한',
          },
          {
            '등급': 'Chapper Pro',
            '가격': '9.99달러(일회 결제)',
            '잠금 해제되는 내용': '무제한 대화, 고급 샘플링 설정, 모든 내보내기 형식, 페르소나, MCP 도구, 장기 기억, 분석, 맞춤형 앱 아이콘, iCloud 동기화',
          },
          {
            '등급': 'On Device Local Inference',
            '가격': '4.99달러(일회 결제, Pro와 별도)',
            '잠금 해제되는 내용': 'LM Studio, Ollama 등 다른 서버에 연결하는 대신 Apple MLX / Foundation Models를 통해 모델을 온디바이스에서 직접 실행',
          },
          {
            '등급': '"Tea" 팁',
            '가격': '0.99–44.99달러',
            '잠금 해제되는 내용': '개발사에 대한 선택적 일회성 팁; 기능적 잠금 해제 없음',
          },
        ],
        note: 'Prevolut Ltd 자체 웹사이트는 Chapper Pro를 "구독 없음, 숨겨진 비용 없음"이라고 설명하며, 구매 후 추가되는 모든 향후 Pro 기능이 자동으로 포함된다고 밝히고 있습니다. App Store 가격은 변경될 수 있으며 지역에 따라 다를 수 있습니다 — 구매 전 [App Store 정보](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)에서 현재 가격을 확인하세요. 이 리뷰를 위해 2026년 9월 6일 기준으로 확인했습니다.',
      },
      modelsAndBackends: {
        id: 'models-and-backends',
        title: '지원 백엔드와 모델',
        content: [
          '**Chapper의 주된 연동 대상은 원격 백엔드이며, 엄선된 온디바이스 모델 라이브러리가 아닙니다.** 개발사 자체 웹사이트에 따르면 "LM Studio, Ollama, llama.cpp 서버, 모든 OpenAI 호환 API와 네이티브로 작동"하며, 자체 네트워크의 자체 호스팅 서버를 포함해 해당 프로토콜을 사용하는 모든 엔드포인트로 Chapper를 지정할 수 있습니다.',
          '온디바이스 사용(별도의 4.99달러 추가 구입 항목)의 경우, 이 앱은 Apple Silicon용으로 만들어진 머신러닝 프레임워크인 **MLX**를 통해, 그리고 운영체제가 제공하는 경우 **Apple Foundation Models**(지원되는 하드웨어와 OS 버전에서 타사 앱에 제공되는 Apple 자체의 온디바이스 모델)를 통해 모델을 지원합니다. App Store 정보나 개발사 웹사이트 모두, 일부 경쟁 앱(예: Private LLM의 140개 이상 엄선된 모델 라이브러리)처럼 고정된 이름이 지정된 온디바이스 모델 목록을 공개하지 않습니다. 이 리뷰에서는 Chapper의 온디바이스 모델 선택 폭을, 대규모의 엄선된 GGUF 카탈로그보다는 Apple 자체의 MLX/Foundation Models 생태계에 더 의존하는, 더 좁은 범위로 다룹니다.',
          '서버 기반 경로에서는 모델의 품질과 속도가 전적으로 자신의 기기에서 LM Studio나 Ollama로 무엇을 실행하는지에 달려 있으므로, 완전 온디바이스 앱과 달리 Chapper 자체가 모델 성능의 상한선을 정하지는 않습니다 — Chapper는 전송 및 인터페이스 계층이며, 실제 추론은 사용자 자신의 하드웨어가 수행합니다.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '플랫폼: iPhone, iPad, Mac, Vision Pro',
        itemHeadings: true,
        columns: ['플랫폼', '예상되는 내용', '중요 참고 사항'],
        rows: [
          {
            '플랫폼': 'iPhone',
            '예상되는 내용': 'App Store 정보에 따르면 iOS 17.0 이상 필요.',
            '중요 참고 사항': '서버 기반 채팅(LM Studio/Ollama)은 해당 서버로의 네트워크 경로가 필요하며, 온디바이스 채팅은 별도의 4.99달러 추가 구입이 필요합니다.',
          },
          {
            '플랫폼': 'iPad',
            '예상되는 내용': 'iPadOS 17.0 이상 필요; iPhone과 동일한 앱과 기능 세트.',
            '중요 참고 사항': '표준 App Store 호환성 이상의 iPad 전용 레이아웃 세부 정보는 공개되어 있지 않습니다.',
          },
          {
            '플랫폼': 'Mac',
            '예상되는 내용': 'App Store 정보에 따르면 Apple M1 칩 이상에서 macOS 14.0 이상 필요.',
            '중요 참고 사항': 'Mac은 LM Studio/Ollama의 가장 일반적인 호스트이기도 하므로, 많은 사용자가 같은 기기에서 서버와 Chapper 클라이언트를 함께 실행하거나, Mac에서 서버를, iPhone/iPad에서 클라이언트를 실행하게 됩니다.',
          },
          {
            '플랫폼': 'Apple Vision Pro',
            '예상되는 내용': 'App Store 정보에는 visionOS 1.0 이상 호환성이 표시되어 있습니다.',
            '중요 참고 사항': '이 리뷰는 Vision Pro 경험을 독립적으로 테스트하지 않았습니다. 실제로 검증된 기능이 아니라 App Store에 등재된 호환성으로 간주하세요.',
          },
          {
            '플랫폼': 'Android, Windows, Linux',
            '예상되는 내용': 'Google Play, Microsoft Store, 어떤 Linux 패키지 저장소에도 공식 앱이 없습니다.',
            '중요 참고 사항': 'LM Studio/Ollama에 연결되는 비슷한 모바일 클라이언트를 원하는 Android 및 Windows 사용자는 [RikkaHub](https://github.com/rikkahub/rikkahub)(Android)나 [AnythingLLM Mobile](https://anythingllm.com/mobile)(Android, iOS는 계획 중)을 고려해야 합니다.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호: Chapper가 수집하는 것과 하지 않는 것',
        content: [
          '**Prevolut Ltd 자체 웹사이트는 Chapper가 계정을 요구하지 않으며 "제3자 추적을 사용하지 않는다"고 밝히고 있으며**, 독자가 명시적으로 iCloud 동기화를 활성화하거나 자신의 외부 서버에 연결하지 않는 한 대화는 기기에 저장된다고 설명합니다. 이 앱의 핵심 설계가 사용자가 직접 관리하는 백엔드(자신의 LM Studio/Ollama 서버, 또는 온디바이스 추론)를 통해 채팅을 전달하기 때문에, Prevolut 자체 인프라에 실제로 도달하는 데이터의 양은 정책뿐 아니라 이러한 아키텍처 자체에 의해 제한됩니다.',
        ],
        items: [
          '**계정 불필요.** Apple 표준 구매 절차를 통한 앱 내 구입을 포함해, Chapper 전용 프로필을 만들지 않고도 다운로드하고 사용할 수 있습니다.',
          '**개발사 자체 진술에 따른 제3자 추적 없음.** 이 리뷰는 이 진술에 근거하며, 폐쇄 소스 앱의 네트워크 트래픽에 대한 독립적인 감사에 기반하지 않습니다.',
          '**개발사에 따르면 iCloud 동기화는 선택 사항이며 종단 간 암호화됩니다.** 기본값은 비활성화이며, 이를 활성화하는 것이 채팅 데이터가 로컬 기기를 벗어나는 유일하게 문서화된 경우로, 이때 데이터는 Prevolut의 서버가 아니라 독자 자신의 iCloud 계정으로 전송됩니다.',
          '**서버 연결은 사용자가 설정한 엔드포인트로 데이터를 전송합니다.** 자신의 로컬 LM Studio/Ollama 서버 대신 타사 또는 클라우드 호스팅 OpenAI 호환 API에 Chapper를 연결하면, 프롬프트는 해당 엔드포인트 자체의 개인정보 보호 약관에 따라 전송됩니다 — 이는 Chapper 고유의 특성이 아니라 클라이언트/서버 모델 전반의 일반적인 속성입니다.',
          '**개인정보 보호정책과 이용약관이 공개되어 있습니다.** [prevolut.uk/products/chapper/privacy](https://prevolut.uk/products/chapper/privacy)와 [prevolut.uk/products/chapper/terms](https://prevolut.uk/products/chapper/terms)를 직접 읽어 마케팅 문구에만 의존하지 말고 현재의 완전한 법적 조건을 확인하세요.',
        ],
      },
      history: {
        id: 'history',
        title: '개발사와 버전 히스토리',
        content: [
          '**Chapper는 잉글랜드 및 웨일스에 Companies House 등록번호 17058766으로 등록된 회사인 [Prevolut Ltd](https://prevolut.uk/products/chapper/)가 개발했습니다.** 공개된 App Store 데이터에는 정확한 최초 출시일이 나와 있지 않지만, 앱의 비교적 높은 App Store ID(6760984679)와 초기 버전 번호로 미루어 2026년 출시로 추정됩니다.',
        ],
        items: [
          '**버전 1.1.0.** 개발사가 지금까지 Chapper의 가장 큰 업데이트 중 하나로 설명함; 정확한 날짜는 이 리뷰에서 이용 가능한 자료에 공개되어 있지 않음.',
          '**버전 1.2.0.** 샌드박스 터미널 워크플로 기능 "C.A.S.H."를 중심으로 한 대규모 업데이트로, 품질 개선도 함께 이루어짐.',
          '**버전 1.3.1(2026년 8월 6일).** 이 리뷰 작성 시점의 현재 App Store 버전으로, "Agent Mode"의 첫 공개, 더 빠른 모델 전환, 더 큰 AI 답변 입력란, 여러 소규모 수정 사항이 추가됨.',
        ],
        note: '버전 히스토리는 App Store에 공개된 앱의 "새로운 기능" 목록에서 가져왔습니다. 이 리뷰는 앱의 원래 1.0 출시일을 독립적으로 확인할 수 없었습니다 — 2026년 출시 추정은 버전 번호와 App Store ID에서 추론한 것이며, 개발사가 확인한 날짜가 아니라는 점에 유의하세요.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점 비교',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 유의점'],
        rows: [
          {
            '장점': '체험 가능한 무료 등급',
            '실제 사용에서의 의미': '비용을 지불하기 전에 인터페이스와 서버 연결을 테스트할 수 있습니다.',
            '한계 / 유의점': '대화 20회로 제한되며, 무료 등급에서는 온디바이스 추론을 전혀 사용할 수 없습니다.',
          },
          {
            '장점': '폭넓은 백엔드 호환성',
            '실제 사용에서의 의미': 'LM Studio, Ollama, llama.cpp 서버, 모든 OpenAI 호환 엔드포인트와 함께 작동 — 이미 로컬 서버를 운영 중인 사용자에게 유연함.',
            '한계 / 유의점': '모델의 품질과 속도는 앱 자체가 아니라 전적으로 연결하는 서버에 달려 있습니다.',
          },
          {
            '장점': '기능이 풍부한 Pro 등급',
            '실제 사용에서의 의미': 'MCP 도구, 페르소나, 장기 기억, 구조화된 JSON 출력, 다중 형식 내보내기는 대부분의 경쟁 앱이 생략하는 고급 사용 사례를 다룹니다.',
            '한계 / 유의점': '이러한 기능의 폭은 기본 앱에 더해 9.99달러의 추가 구매를 의미하며, 온디바이스 경로는 추가로 4.99달러가 듭니다.',
          },
          {
            '장점': '계정 불필요',
            '실제 사용에서의 의미': '아무것도 등록하지 않고 설치 후 바로 대화를 시작할 수 있습니다.',
            '한계 / 유의점': '앱이 폐쇄 소스이므로 "제3자 추적 없음"이라는 주장은 독립적인 코드 검토가 아니라 개발사 자체의 진술에 근거합니다.',
          },
          {
            '장점': '네이티브이고 정교한 Apple 앱',
            '실제 사용에서의 의미': '한 번의 구매로 iPhone, iPad, Mac, Vision Pro 전반에서 일급 앱으로 작동합니다.',
            '한계 / 유의점': 'Apple 전용 — 일부 서버-클라이언트형 경쟁 앱과 달리 Android나 Windows 버전은 없습니다.',
          },
          {
            '장점': '유연한 단계별 가격',
            '실제 사용에서의 의미': '서버-클라이언트 기능만 필요한 사용자는 4.99달러의 온디바이스 추가 구입을 완전히 건너뛸 수 있습니다.',
            '한계 / 유의점': '무료/Pro/온디바이스의 3단계 구조는 단일 정가보다 한눈에 알아보기 어렵고 "9.99달러면 전부 다"라고 오해하기 쉽습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Chapper와 대안 비교',
        columns: ['앱', '플랫폼', '가격', '모델 접근 방식', '핵심 차이점'],
        rows: [
          {
            '앱': 'Chapper',
            '플랫폼': 'iPhone/iPad/Mac/Vision Pro(Apple 전용)',
            '가격': '무료(20회 채팅 제한) / Pro 9.99달러 / +온디바이스 4.99달러',
            '모델 접근 방식': 'LM Studio, Ollama, llama.cpp, OpenAI 호환 API; 온디바이스는 MLX/Foundation Models를 통해(유료 추가 구입)',
            '핵심 차이점': '주로 서버 클라이언트; 온디바이스 추론은 별도 구입',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iPhone/iPad, 일부 Android 지원',
            '가격': '무료, 오픈소스',
            '모델 접근 방식': '모든 GGUF 파일, 기본적으로 완전 온디바이스',
            '핵심 차이점': '무료, 오픈소스이며 처음부터 온디바이스 — 서버나 추가 구입 불필요',
          },
          {
            '앱': '[Private LLM](/ko/power-local-llm/private-llm-review)',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '가격': '일회 결제 4.99달러',
            '모델 접근 방식': 'OmniQuant/GPTQ 양자화를 적용한 140개 이상의 엄선된 온디바이스 모델',
            '핵심 차이점': '단일 정가, 온디바이스 전용, 서버 클라이언트 모드 없음',
          },
          {
            '앱': '[Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay-2026)',
            '플랫폼': '최신 플랫폼 지원은 전체 리뷰 참조',
            '가격': '현재 정보 참조',
            '모델 접근 방식': '최신 모델 지원은 전체 리뷰 참조',
            '핵심 차이점': 'Chapper의 범용 클라이언트와 달리 롤플레이/캐릭터 채팅에 특화된 데스크톱 중심 앱',
          },
          {
            '앱': '[SillyTavern vs. Agnai vs. RisuAI](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
            '플랫폼': '브라우저 기반 프론트엔드, 자체 호스팅',
            '가격': '무료, 오픈소스',
            '모델 접근 방식': '모든 로컬 또는 클라우드 백엔드에 연결, 캐릭터 카드 중심',
            '핵심 차이점': '네이티브 모바일 앱이 아니라 롤플레이/캐릭터 카드 생태계',
          },
          {
            '앱': '[LLM Farm](https://llmfarm.space/)',
            '플랫폼': 'iOS/Mac(오픈소스, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            '가격': '무료, 오픈소스',
            '모델 접근 방식': 'llama.cpp/ggml을 통한 맞춤형 GGUF 모델, 기본적으로 온디바이스',
            '핵심 차이점': '자체 GitHub README에 따르면 2025년 8월 App Store와 TestFlight에서 삭제됨 — 현재 이용 가능 여부 확인 필요',
          },
          {
            '앱': '[Layla](https://www.layla-network.ai/)',
            '플랫폼': 'iOS 및 Android',
            '가격': '19.99달러에 앱 내 구입 추가',
            '모델 접근 방식': '맞춤형 GGUF 모델; 100개 이상의 음성을 갖춘 캐릭터/롤플레이 중심',
            '핵심 차이점': '크로스 플랫폼이며 캐릭터/롤플레이 지향, Chapper보다 가격이 높음',
          },
          {
            '앱': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            '플랫폼': '크로스 플랫폼 Flutter 앱(주로 Android)',
            '가격': '무료, 오픈소스(MIT 라이선스)',
            '모델 접근 방식': 'llama.cpp를 통한 모든 GGUF 파일; Anthropic, DeepSeek, Ollama, Mistral, OpenAI에도 원격 연결 가능',
            '핵심 차이점': '무료이며 완전히 오픈소스이고, Chapper처럼 로컬과 원격 접근을 결합하지만 크로스 플랫폼',
          },
          {
            '앱': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            '플랫폼': 'Android',
            '가격': '무료, 오픈소스',
            '모델 접근 방식': '여러 클라우드 제공업체 API에 더해 로컬 실행',
            '핵심 차이점': 'Chapper의 멀티 백엔드 클라이언트 모델에 해당하는 Android 전용 대응 앱',
          },
          {
            '앱': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            '플랫폼': 'Android(iOS는 계획 중)',
            '가격': '무료, 오픈소스',
            '모델 접근 방식': 'Cactus Compute를 통해 GGUF 모델을 온디바이스에서 실행하거나, 자체 호스팅 AnythingLLM 서버와 연동',
            '핵심 차이점': '범용 멀티 백엔드 클라이언트가 아니라 자체 호스팅 AnythingLLM 워크스페이스와 연동하도록 특별히 설계됨',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 정보는 자주 변경됩니다 — 결정을 내리기 전에 각 앱 자체의 정보에서 최신 사항을 확인하세요. 특히 LLM Farm의 App Store 이용 가능 여부는 다시 확인해야 합니다. 자체 GitHub README에서 2025년 8월 이후 App Store에서 삭제된 것으로 설명하고 있기 때문입니다.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Chapper를 추천하는 사용자',
        items: [
          '**Mac이나 PC에서 이미 LM Studio나 Ollama를 운영 중인 독자.** Chapper의 핵심 가치는 이미 운영 중인 서버를 위한 네이티브 모바일 프론트엔드라는 점입니다 — 이것이 Chapper의 가장 강력하고 가장 잘 입증된 사용 사례입니다.',
          '**서버 기반과 온디바이스 채팅을 하나의 앱으로 모두 원하는 Apple 전용 사용자.** Pro와 온디바이스 추가 구입 항목 모두에 비용을 지불할 의향이 있다면, Chapper는 단일 목적 앱보다 더 넓은 범위의 워크플로를 다룹니다.',
          '**MCP 도구, 페르소나, 구조화된 JSON 출력을 원하는 파워 유저.** Pro 등급의 기능 목록은 이 카테고리의 대부분 앱보다 밀도가 높아, 로컬 AI 설정 주변을 스크립트화하거나 자동화하고 싶은 독자에게 유용합니다.',
          '**작고 초기 단계인 앱을 평가하는 데 익숙한 독자.** 리뷰 작성 시점 기준 App Store 평가가 8건뿐인 Chapper는 아직 공개 실적 초기 단계에 있습니다 — 새로운 도구를 시도해 보는 것을 좋아하는 독자에게는 괜찮지만, 오랫동안 검증된 실적을 중시하는 독자에게는 덜 적합합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Chapper를 추천하지 않는 사용자',
        items: [
          '**서버 설정 없이 한 번의 구매로 완전한 온디바이스 앱을 원하는 독자.** Chapper의 온디바이스 경로는 Pro에 더해 4.99달러가 추가로 들며, 이는 앱의 주된 설계 의도가 아닙니다 — [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)(무료)나 [Private LLM](/ko/power-local-llm/private-llm-review)(고정가 4.99달러)이 이 요구에 더 직접적으로 부합합니다.',
          '**Android, Windows, Linux 사용자.** Chapper는 이들 플랫폼 어디에도 공식 앱이 없습니다 — 대신 [RikkaHub](https://github.com/rikkahub/rikkahub), [Maid](https://github.com/Mobile-Artificial-Intelligence/maid), [AnythingLLM Mobile](https://anythingllm.com/mobile)을 고려하세요.',
          '**대규모이고 이름이 명시된, 엄선된 온디바이스 모델 카탈로그를 원하는 독자.** App Store 정보나 개발사 웹사이트 모두 Private LLM의 140개 이상 엄선된 모델에 필적하는 고정된 모델 목록을 공개하지 않습니다. 온디바이스 선택 범위는 대신 Apple 자체의 MLX/Foundation Models 생태계에 의존합니다.',
          '**로컬 인프라 접근 권한을 앱에 맡기기 전에 오랜 공개 실적을 원하는 독자.** 2026년에 시작된 것으로 보이는 App Store 등재와 총 8건의 평가만 가진 Chapper는, Private LLM(2023년 출시)이나 이미 자리 잡은 오픈소스 프로젝트들이 갖춘 다년간의 실적을 아직 쌓지 못했습니다.',
          '**특별히 롤플레이나 캐릭터 카드 기능을 찾는 독자.** Chapper는 캐릭터 채팅 앱이 아니라 범용 채팅/API 클라이언트입니다 — [Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay-2026)나 [SillyTavern vs. Agnai vs. RisuAI](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)에서 비교된 도구들이 바로 이 용도를 위해 특별히 만들어졌습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Chapper의 가격은 얼마인가요?',
            a: 'Chapper는 대화 20회 제한과 함께 무료로 다운로드할 수 있습니다. [Chapper Pro는 일회 결제 9.99달러](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679)로 제한을 없애고 대부분의 고급 기능을 잠금 해제합니다. 현재 App Store 정보에 따르면 온디바이스 로컬 추론은 Pro에 더해 별도의 앱 내 구입 항목으로 4.99달러입니다. 이 리뷰를 위해 2026년 9월 6일 기준으로 확인했습니다 — App Store 가격은 지역에 따라 다르고 시간이 지나며 변경될 수 있습니다.',
          },
          {
            q: 'Chapper는 제 iPhone에서 AI 모델을 완전히 실행하나요?',
            a: 'Apple의 MLX 프레임워크와, 가능한 경우 Apple Foundation Models를 사용하는 별도의 "On Device Local Inference"(4.99달러) 추가 구입 항목을 구매한 경우에만 그렇습니다. 기본값과 주된 설계에서 Chapper는 다른 곳에서 실행 중인 LM Studio, Ollama, llama.cpp 서버, 또는 OpenAI 호환 엔드포인트에 연결하는 클라이언트입니다.',
          },
          {
            q: 'Chapper는 누가 개발하나요?',
            a: 'Chapper는 잉글랜드 및 웨일스에 등록된 회사인 [Prevolut Ltd](https://prevolut.uk/products/chapper/)(Companies House 등록번호 17058766)가 개발합니다. 이름은 비슷하지만 은행 앱 Revolut과는 무관합니다.',
          },
          {
            q: 'Chapper는 Android나 Windows에서 사용할 수 있나요?',
            a: '아니요. Chapper는 오로지 iPhone(iOS 17 이상), iPad(iPadOS 17 이상), Mac(macOS 14 이상, Apple Silicon), Apple Vision Pro만을 위해 만들어졌습니다. 공식 Android, Windows, Linux 버전은 없습니다.',
          },
          {
            q: 'Chapper는 어떤 백엔드를 지원하나요?',
            a: '개발사 자체 웹사이트에 따르면 Chapper는 "LM Studio, Ollama, llama.cpp 서버, 모든 OpenAI 호환 API와 네이티브로 작동"합니다. 자체 네트워크의 자체 호스팅 서버로도 지정할 수 있습니다.',
          },
          {
            q: 'Chapper는 계정이 필요한가요?',
            a: '아니요. 개발사는 계정이 필요 없다고 밝히고 있으며, Chapper는 Apple 표준 구매 절차를 거치는 앱 내 구입을 포함해 어떠한 등록 없이도 사용할 수 있습니다.',
          },
          {
            q: 'Chapper는 제 데이터를 수집하나요?',
            a: '개발사 자체 웹사이트는 제3자 추적을 사용하지 않으며, iCloud 동기화를 활성화하거나 자신의 외부 서버에 연결하지 않는 한 대화는 기기 내에 유지된다고 밝히고 있습니다. 이 리뷰는 이 진술에 근거하며, Chapper는 폐쇄 소스이므로 이 리뷰를 위해 독립적인 코드 감사를 수행하지 않았습니다.',
          },
          {
            q: 'Chapper는 PocketPal AI와 비교하면 어떤가요?',
            a: 'PocketPal AI는 무료, 오픈소스이며 서버가 필요 없이 기본적으로 온디바이스로 동작합니다. Chapper는 주로 LM Studio, Ollama, OpenAI 호환 서버를 위한 클라이언트이며, 진정한 온디바이스 추론은 9.99달러 Pro 구매에 더해 별도의 4.99달러 추가 구입 항목으로 판매됩니다. 무료이면서 완전히 온디바이스로 동작하는 단일 앱을 원한다면 PocketPal AI를, 이미 로컬 서버를 운영 중이고 그것을 위한 네이티브하고 기능이 풍부한 모바일 프론트엔드를 원한다면 Chapper를 선택하세요.',
          },
          {
            q: 'Chapper는 평가가 좋은가요?',
            a: '이 리뷰 작성 시점 기준으로 Chapper는 App Store에서 5점 만점에 3.3점, 평가 8건을 기록하고 있습니다 — 어느 방향으로든 강한 신호로 취급해서는 안 될 만큼 매우 작은 샘플입니다. 버전 번호와 App Store ID로 미루어 볼 때 이 앱은 비교적 최근에 나온 것으로 보입니다.',
          },
          {
            q: 'Chapper의 "C.A.S.H." 기능은 무엇인가요?',
            a: 'C.A.S.H.는 Chapper에 포함된 샌드박스 터미널/셸 워크플로 도구로, 버전 1.2.0의 핵심 기능으로 도입되었습니다. 개발사 자료에서는 이를 앱 내에서 샌드박스화된 워크플로를 실행하는 방법으로 설명하고 있으며, 이 리뷰에서는 그 전체 기능이나 보안 경계를 독립적으로 테스트하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'Chapper는 이미 LM Studio나 Ollama를 운영 중이며 이를 위한 네이티브 Apple 클라이언트를 원하는 독자에게 유능하고 기능이 풍부한 앱입니다 — Pro 등급의 MCP 도구, 페르소나, 구조화된 출력, 다중 형식 내보내기는 이 카테고리의 대부분 앱보다 한 걸음 더 나아갑니다. 동시에 가격 정책은 가장 큰 마찰 지점이기도 합니다: 대화 20회로 제한된 무료 등급, 9.99달러의 Chapper Pro 구매, 그리고 모델을 완전히 온디바이스에서 실행하기 위해서만 필요한 추가 4.99달러 요금은 PocketPal AI(무료)나 Private LLM(4.99달러)의 단일 고정가보다 더 세분화된 비용 구조를 만듭니다. 여기에 아직 얕은 공개 실적(App Store 평가 8건, 2026년으로 보이는 출시, 이 리뷰에서 이용 가능한 자료에 확인된 1.0 출시일이 없다는 점)까지 더하면, Chapper는 이미 자리 잡은 앱이라기보다는 유망하지만 아직 초기 단계인 앱으로 읽힙니다. 이미 로컬 서버를 운영 중이며 iPhone이나 iPad에서 그 서버에 정교하게 접근할 방법을 찾는 독자는 먼저 무료 등급을 시도해 보아야 합니다. 한 번의 구매로 완전히 온디바이스로 동작하는 앱을 원하는 독자는 대신 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private LLM](/ko/power-local-llm/private-llm-review)부터 시작해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Chapper](https://apps.apple.com/us/app/chapper-ai-lm-studio-client/id6760984679) — 가격, 앱 내 구입, 플랫폼 호환성, 평가, 버전 정보.',
          '[Chapper 공식 웹사이트](https://chapper.app/) — 기능 목록, 백엔드 호환성, 개인정보 보호 관련 진술.',
          '[Prevolut Ltd — Chapper 제품 페이지](https://prevolut.uk/products/chapper/) — 가격 모델, 무료 등급 제한, 회사 정보.',
          '[Chapper 개인정보 보호정책](https://prevolut.uk/products/chapper/privacy)과 [이용약관](https://prevolut.uk/products/chapper/terms) — 전체 법적 조건.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 무료, 오픈소스이며 기본적으로 온디바이스인 대안 앱.',
          '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — 고정가 4.99달러로 완전 온디바이스 실행이 가능하며 140개 이상의 엄선된 모델을 갖춘 Apple 앱.',
          '[Backyard AI 리뷰](/ko/power-local-llm/backyard-ai-review-local-roleplay-2026) — Chapper와는 다른 사용 사례를 위한 롤플레이 중심 로컬 AI 앱.',
          '[SillyTavern vs. Agnai vs. RisuAI](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 자체 호스팅 롤플레이 프론트엔드 비교.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — Chapper의 위치를 파악하기 위한 iPhone 앱 전체 정리.',
          '[로컬 LLM 소프트웨어 완전 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 모든 플랫폼에 걸친 더 폭넓은 로컬 LLM 도구 디렉터리.',
        ],
      },
    },
  },
}
