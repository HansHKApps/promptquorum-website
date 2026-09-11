// Pocket AI - No Internet Review: Offline On-Device AI Chat for iPhone
// Slug: pocket-ai-review
// Companion to: private-llm-review, pocketpal-ai-review, best-local-llm-apps-iphone-2026,
// loci-ai-review-offline-local-ai, locally-ai-review, enclave-ai-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocket-ai-review-hero-en.webp',
    title: 'Pocket AI Review (2026): Offline On-Device AI Chat for iPhone',
    seoTitle: 'Pocket AI Review 2026: Offline AI Chat for iPhone',
    intro:
      '[Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702), made by developer Faisal at [Dataweal](https://mypocketai.app/), is a free iPhone app that runs open-weight language models directly on the device using [llama.cpp](https://github.com/ggml-org/llama.cpp) with Metal acceleration. There is no account, no server round trip, and once a model is downloaded the app works in airplane mode. The app itself is free; a paid Pro unlock adds on-device Whisper voice input. Unlike many local-model iPhone apps that ship only as a sideload, a TestFlight beta, or a build-it-yourself GitHub project, Pocket AI is distributed directly through the Apple App Store. This review covers what the app does, what it costs, and what hardware it needs.',
    metaDescription:
      'Pocket AI - No Internet review 2026: free iPhone app for offline, on-device AI chat via llama.cpp, one-time Pro unlock for Whisper voice input, no subscription. Pricing, requirements, and App Store distribution details.',
    twitterDescription:
      'Pocket AI - No Internet review 2026: a free iPhone app that runs open-weight models on-device via llama.cpp with Metal acceleration. One-time $4.99 Pro unlock for on-device Whisper voice input. No account, no subscription, works in airplane mode.',
    audience:
      'iPhone users considering a free, offline, on-device AI chat app — covers pricing, the Pro unlock, supported model families, hardware requirements, and how it compares to other single-app local-AI reviews on this site.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Pocket AI review',
    targetKeywords: [
      'pocket ai review',
      'pocket ai no internet',
      'pocket ai iphone app',
      'offline ai chat app iphone',
      'dataweal pocket ai',
      'on-device llama.cpp iphone app',
      'free local ai app iphone',
      'pocket ai pro unlock price',
    ],
    current_models_mentioned: ['Qwen', 'Gemma', 'Llama', 'Mistral', 'Phi', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone 12'],
    leadAnswerBlock:
      '**Pocket AI - No Internet is a free iPhone app that runs open-weight AI models entirely on-device via [llama.cpp](https://github.com/ggml-org/llama.cpp) with Metal acceleration — no account, no server, and full offline use once a model is downloaded.** Made by developer Faisal at [Dataweal](https://mypocketai.app/), the app\'s catalogue spans 28 models across the Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, per the developer. The app is free to use for text chat; a paid Pro unlock adds on-device Whisper voice input. It requires an iPhone 12 or newer, which the developer attributes to inference being memory-bound. Readers who want a comparison point should also read the [Private LLM review](/power-local-llm/private-llm-review) or [PocketPal AI review](/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Pocket AI - No Internet worth downloading?',
        answer:
          'Yes, if you want a free, no-account iPhone app that runs open-weight AI models fully offline via llama.cpp, and you own an iPhone 12 or newer. The Pro unlock is optional and only adds on-device Whisper voice input — text chat is free (see Pricing below for the cost). Skip it if you need a larger, more mature curated model library or Android/desktop support; compare it against Private LLM or PocketPal AI first.',
        bullets: [
          'Free to download and use for text chat; no account or sign-in required.',
          'A paid, one-time Pro unlock adds on-device Whisper voice dictation (see Pricing below).',
          'Runs open-weight models via llama.cpp with Metal acceleration: Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, 28 models in the catalogue per the developer.',
          'Works fully offline (airplane mode) once a model is downloaded.',
          'Requires an iPhone 12 or newer; the app is closed-source, per the developer.',
        ],
        updatedDate: '2026-09-11',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Pocket AI', anchor: 'get-it' },
      { label: 'What Pocket AI Is', anchor: 'what-is-pocket-ai' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Pricing: Free App, One-Time Pro Unlock', anchor: 'pricing' },
      { label: 'Supported Models', anchor: 'models' },
      { label: 'Requirements: Why iPhone 12 or Newer', anchor: 'requirements' },
      { label: 'Privacy and Offline Operation', anchor: 'privacy' },
      { label: 'From the Maker', anchor: 'from-the-maker' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Pocket AI vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Pocket AI', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Pocket AI', anchor: 'who-should-not-use' },
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
            text: 'Pocket AI - No Internet is a free iPhone app by developer Faisal at Dataweal that runs open-weight AI models (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek) entirely on-device via llama.cpp with Metal acceleration, distributed directly through the Apple App Store, with a paid Pro unlock for on-device Whisper voice input.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a free chat app that downloads an AI model onto your iPhone once, so afterward it works in airplane mode with no account, no server, and no internet connection needed to actually chat.',
          },
        ],
        items: [
          'Price: free to [download](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) and use for text chat; a paid Pro unlock adds on-device Whisper voice input (see Pricing below).',
          'Developer: Faisal, at [Dataweal](https://mypocketai.app/).',
          'Engine: [llama.cpp](https://github.com/ggml-org/llama.cpp) with Metal acceleration, running entirely on-device.',
          'Model catalogue: 28 models, per the developer, spanning the Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families.',
          'Offline: works in airplane mode once a model is downloaded; no account and no server round-trip for chat.',
          'Requirement: iPhone 12 or newer — the developer attributes this to inference being memory-bound.',
          'Open source status: closed source, per the developer\'s own statement.',
          'Distribution: available directly through the [Apple App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — searchable, reviewed by Apple, and auto-updating, unlike some local-model iPhone apps that only ship as a sideload, a TestFlight beta, or a build-it-yourself GitHub project.',
        ],
      },
      getItPocketAI: {
        id: 'get-it',
        title: 'Get Pocket AI',
        content: [
          '**Pocket AI - No Internet is available directly from the Apple App Store** — no sideloading, no TestFlight beta, and no building it from source required.',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which indexes local-AI tools across platforms; Pocket AI does not yet have its own entry there.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            'Platform': 'iPhone (iOS)',
            'Get It': '[Pocket AI - No Internet on the App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)',
          },
        ],
        note: 'The app itself is free to download; see the Pricing section below for what the optional Pro unlock costs.',
      },
      whatIsPocketAI: {
        id: 'what-is-pocket-ai',
        title: 'What Pocket AI Is',
        content: [
          '**Pocket AI - No Internet downloads open-weight language models and runs them directly on the iPhone, with no server-side component.** Once a model is downloaded, generating a response needs no internet connection — inference runs locally through llama.cpp, accelerated by Apple\'s Metal graphics framework.',
          'According to the developer, the motivation was that other local-model iPhone apps typically asked for an account, a subscription, or a server round trip before letting someone chat — Pocket AI is built to need none of those.',
          'This review relies on the developer\'s own description of the app\'s architecture and model catalogue, and on the public App Store listing, rather than an independent code audit — the app is closed-source (see the Privacy section below).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setting up Pocket AI takes a few steps and no account creation.** The whole process, from App Store download to a first offline response, takes a few minutes plus however long the chosen model takes to download.',
        ],
        numberedItems: [
          {
            title: 'Download the app',
            whyItMatters: 'Get [Pocket AI - No Internet from the Apple App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702). The app itself is free — there is no purchase required to start.',
          },
          {
            title: 'Pick a model from the catalogue',
            whyItMatters: 'Choose a model from the in-app catalogue of 28 models spanning the Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, per the developer.',
          },
          {
            title: 'Download the model',
            whyItMatters: 'This step requires an internet connection. Download size depends on the model chosen; every step after this one does not need a network connection.',
          },
          {
            title: 'Chat entirely offline',
            whyItMatters: 'Once the model is downloaded, turn on airplane mode to verify the offline claim yourself. Chat runs through llama.cpp with Metal acceleration, entirely on the device.',
          },
          {
            title: 'Optional: unlock Pro for voice input',
            whyItMatters: 'Skip this if text chat is enough — voice input is the only thing it adds. A one-time in-app purchase unlocks on-device Whisper dictation for readers who want it (see Pricing below).',
          },
        ],
        note: 'Exact download sizes and the current model list can change between App Store updates — confirm the current specifics in the app\'s own model catalogue before committing to a large download on a limited data plan.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing: Free App, One-Time Pro Unlock',
        itemHeadings: true,
        content: [
          '**Pocket AI - No Internet is free to download and use for text chat.** A one-time $4.99 in-app purchase unlocks the Pro tier, which adds on-device Whisper voice input. There is no subscription for either the base app or the Pro unlock.',
        ],
        columns: ['What you pay', 'What it covers', 'What it does not include'],
        rows: [
          {
            'What you pay': 'Free',
            'What it covers': 'Full text chat with any model in the 28-model catalogue, fully offline once downloaded',
            'What it does not include': 'On-device Whisper voice input, which requires the Pro unlock',
          },
          {
            'What you pay': '$4.99 (one-time)',
            'What it covers': 'On-device Whisper voice input added on top of the free tier — no subscription',
            'What it does not include': 'Any recurring cost — this is a single purchase, not a subscription',
          },
        ],
        note: 'App Store prices can change without notice and may differ by region. Confirm the current price on the [App Store listing](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) before purchasing.',
      },
      models: {
        id: 'models',
        title: 'Supported Models',
        content: [
          '**Pocket AI\'s catalogue includes 28 open-weight models, per the developer, spanning the Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families.** This figure comes directly from the developer and was revised upward during outreach to PromptQuorum from an initial description of "over 25" models — the app\'s catalogue appears to be actively expanding rather than fixed.',
          'Models run through [llama.cpp](https://github.com/ggml-org/llama.cpp), an open-source inference engine, with Apple\'s Metal graphics framework providing GPU acceleration on-device. The developer has not published independently verified benchmark figures for specific model/device combinations as of this review; readers with performance-critical needs should test a specific model on their own iPhone before relying on it.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements: Why iPhone 12 or Newer',
        content: [
          '**Pocket AI requires an iPhone 12 or newer.** According to the developer, this floor exists because model inference is memory-bound — running a language model on-device needs enough unified memory to hold the model\'s weights and working context, and older iPhones do not have enough to run the catalogue\'s models acceptably.',
          'This is the developer\'s own stated reasoning, not an independently benchmarked cutoff. Readers with an iPhone at or near the minimum should expect smaller models in the catalogue to be the more realistic choice than the largest ones.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Offline Operation',
        content: [
          '**Pocket AI requires no account and no sign-in.** Because the app is designed to run inference entirely on-device after a model download, there is no chat data to send to a server during normal use for text chat — the architecture, not just a stated policy, is what keeps a conversation on the phone.',
          'The Pro unlock\'s voice input also runs on-device via Whisper, per the developer, meaning dictation audio is processed locally rather than sent to a transcription server.',
        ],
        items: [
          '**No account required.** The app can be downloaded and used for text chat without creating a profile or signing in.',
          '**Offline after download.** Once a model is downloaded, airplane mode does not block chat.',
          '**On-device voice input.** The Pro tier\'s Whisper-based dictation runs locally, per the developer, rather than through a cloud transcription API.',
          '**Closed-source app.** Because the app\'s code is not published, its architecture and data-handling claims rest on the developer\'s own statements and the public App Store listing, not an independent code audit.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'From the Maker',
        content: [
          'PromptQuorum asked Faisal, the developer behind Pocket AI at Dataweal, to describe the app and the reasoning behind its pricing and platform choices. The following is presented as the developer\'s own words, lightly reformatted into paragraphs for readability, not as PromptQuorum\'s independent editorial assessment:',
          '"Pocket AI exists because of one small frustration. Every good local-model app on iPhone asked me for something first: an account, a subscription, or a server round trip. I wanted none of those.',
          'The app runs open-weight models directly on the iPhone through llama.cpp with Metal acceleration. Qwen, Gemma, Llama, Mistral, Phi and DeepSeek are all in the catalogue, 28 models today. There is no account and no server. Once a model is downloaded the app works in airplane mode: on a plane, in a tunnel, or on a phone that has never been signed in to anything. Voice input uses Whisper, on device, so dictation never leaves the phone either.',
          'Pricing follows the same idea. The app is free and the Pro unlock is $4.99 once. No subscription. I would rather sell a thing than rent it.',
          'What it is not: it is not open source, and it is not for old hardware. An iPhone 12 or newer is a real requirement, because model inference is memory-bound and there is no honest way around that.',
          'It is a small app with one promise. Your conversation stays on your phone. That is the whole product."',
        ],
        note: '— Faisal, developer, Dataweal',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free base app',
            'What it means in real use': 'Text chat with the full 28-model catalogue costs nothing and needs no account.',
            'Limitation / caveat': 'Voice input requires the paid Pro unlock; it is not included free.',
          },
          {
            'Benefit': 'One-time paid Pro unlock',
            'What it means in real use': 'No subscription to track or cancel for the voice feature — pay once.',
            'Limitation / caveat': 'It only adds voice input; it does not unlock additional models or features beyond that, per the developer\'s own description.',
          },
          {
            'Benefit': '28-model catalogue across major open-weight families',
            'What it means in real use': 'Choice across Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek without hunting for model files yourself.',
            'Limitation / caveat': 'The catalogue is curated by the developer, and this review has not independently benchmarked performance across all 28 models on specific iPhone hardware.',
          },
          {
            'Benefit': 'No account, fully offline after download',
            'What it means in real use': 'Chat works in airplane mode with nothing to sign up for.',
            'Limitation / caveat': 'Because the app is closed-source, offline and no-data-collection claims rest on the developer\'s own statements rather than independent code audit.',
          },
          {
            'Benefit': 'llama.cpp with Metal acceleration',
            'What it means in real use': 'Uses a widely adopted open-source inference engine rather than a proprietary in-house one.',
            'Limitation / caveat': 'Actual speed depends on the specific model and iPhone model; this review has not published independent benchmark numbers.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Pocket AI vs. Alternatives',
        columns: ['App', 'Platforms', 'Price', 'Model flexibility', 'Key difference'],
        rows: [
          {
            'App': 'Pocket AI - No Internet',
            'Platforms': 'iPhone only',
            'Price': 'Free; one-time paid Pro unlock for voice input',
            'Model flexibility': '28-model catalogue (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek), per the developer',
            'Key difference': 'Free base app; closed source; smallest track record of the apps compared here',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Price': '$4.99 one-time purchase',
            'Model flexibility': '140+ curated models; OmniQuant/GPTQ quantization',
            'Key difference': 'Paid from the start, but with a much larger curated library and three years of App Store history',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iPhone/iPad, with some Android support',
            'Price': 'Free, open source',
            'Model flexibility': 'Any GGUF file the user sources from Hugging Face or elsewhere',
            'Key difference': 'Free and open-source, unlike Pocket AI\'s closed-source app; requires more manual model management',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Platforms': 'iPhone/iPad/Mac',
            'Price': 'Free',
            'Model flexibility': 'Built on Apple MLX; access to Apple\'s on-device foundation model',
            'Key difference': 'Free alternative built specifically on Apple\'s MLX framework instead of llama.cpp',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently — verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Pocket AI',
        items: [
          '**iPhone owners who want a free, no-account offline AI chat app.** The base app costs nothing and needs no sign-up to start chatting with any model in the catalogue.',
          '**Readers who specifically want to avoid a subscription.** Both the free tier and the Pro unlock are one-time purchases — there is no recurring charge either way.',
          '**Users who want on-device voice input without a subscription.** The Pro unlock is a single, one-time purchase for Whisper-based dictation that the developer states runs locally.',
          '**Readers already comparing several iPhone local-AI apps.** With a 28-model catalogue across major open-weight families, Pocket AI is a reasonable free data point next to paid apps like Private LLM.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Pocket AI',
        items: [
          '**Android, Windows, Mac, or Linux users.** Pocket AI is an iPhone-only app; there is no listing on Google Play, the Microsoft Store, the Mac App Store, or any Linux package repository.',
          '**Owners of an iPhone 11 or older.** The app requires an iPhone 12 or newer, per the developer, because inference is memory-bound.',
          '**Readers who need an established track record before trusting an app.** Pocket AI is newer to the App Store than alternatives like Private LLM — readers who weight review volume and track record heavily should factor that in.',
          '**Readers who want to audit the app\'s source code themselves.** Pocket AI is closed-source, per the developer. An open-source alternative like [PocketPal AI](/power-local-llm/pocketpal-ai-review) allows independent code review.',
          '**Teams or organizations wanting a shared, centrally managed deployment.** Pocket AI is a single-user, single-device consumer app with no admin console or team billing.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Pocket AI - No Internet free?',
            a: 'Yes. The app is free to download and use for text chat with any model in its catalogue. See the Pricing section above for what the optional Pro unlock costs.',
          },
          {
            q: 'Who makes Pocket AI - No Internet?',
            a: 'Pocket AI is developed by Faisal at [Dataweal](https://mypocketai.app/).',
          },
          {
            q: 'What models does Pocket AI support?',
            a: 'Per the developer, the app\'s catalogue includes 28 open-weight models spanning the Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, run through [llama.cpp](https://github.com/ggml-org/llama.cpp) with Metal acceleration.',
          },
          {
            q: 'Does Pocket AI work without an internet connection?',
            a: 'Yes, once a model is downloaded. The app needs an internet connection only to download a model or an app update; chat runs fully offline afterward, including in airplane mode.',
          },
          {
            q: 'What iPhone do I need to run Pocket AI?',
            a: 'An iPhone 12 or newer, per the developer. The developer states this requirement exists because model inference is memory-bound — older iPhones do not have enough unified memory to run the catalogue\'s models acceptably.',
          },
          {
            q: 'Is Pocket AI - No Internet open source?',
            a: 'No. The developer states plainly that the app is closed-source.',
          },
          {
            q: 'What does the Pro unlock include?',
            a: 'The one-time Pro unlock (see Pricing above) adds on-device Whisper voice input for dictation. It does not add extra models or other features beyond voice input, per the developer\'s own description.',
          },
          {
            q: 'Does Pocket AI collect personal data or require an account?',
            a: 'No account or sign-in is required to use the app for text chat. Because the app is closed-source, this review relies on the developer\'s own statements and the public App Store listing rather than an independent code audit.',
          },
          {
            q: 'How does Pocket AI compare to Private LLM or PocketPal AI?',
            a: 'Pocket AI is free with an optional one-time paid voice-input unlock (see Pricing above), closed-source, and newer to the App Store. [Private LLM](/power-local-llm/private-llm-review) is a $4.99 one-time purchase from launch with a larger, more established 140+ model library. [PocketPal AI](/power-local-llm/pocketpal-ai-review) is free and open source but requires manually sourcing GGUF model files. Choose based on whether you value cost, model-library size and maturity, or source-code transparency most.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Pocket AI - No Internet delivers on a straightforward promise: a free iPhone app that runs open-weight models entirely on-device via llama.cpp, with no account and no server round trip, distributed through the Apple App Store rather than a sideload or beta build.',
          'The 28-model catalogue across the Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families is a reasonable starting point for a free app, and the developer\'s own reasoning for the iPhone 12 minimum — memory-bound inference — is a plausible, specific explanation rather than a vague hardware requirement.',
          'What keeps this review cautious rather than enthusiastic is the app\'s youth and closed-source status: privacy and offline claims rest on the developer\'s own word rather than independent code review, and the app has a shorter track record than more established alternatives.',
          'Readers who want a free, on-device chat app with a plausible privacy story and no subscription should try it; readers who weight an established App Store track record and independently auditable source code more heavily should start with [PocketPal AI](/power-local-llm/pocketpal-ai-review) or budget for [Private LLM](/power-local-llm/private-llm-review) instead.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Pocket AI - No Internet on the App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — pricing and platform compatibility.',
          '[Pocket AI official site](https://mypocketai.app/) — product overview.',
          'Direct correspondence with Faisal, developer at Dataweal, provided to PromptQuorum before September 8, 2026 — app description, model catalogue count, pricing model, hardware requirement reasoning, and open-source status.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid, more established Apple-only alternative with a much larger model library.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — the free, open-source alternative with manual GGUF import.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the full iPhone app roundup.',
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a free Apple MLX-based alternative.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocket-ai-review-hero-de.webp',
    title: 'Pocket AI im Test (2026): Offline-KI-Chat auf dem Gerät für iPhone',
    seoTitle: 'Pocket AI Test 2026: Offline-KI-Chat fürs iPhone',
    intro:
      '[Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702), entwickelt von Faisal bei [Dataweal](https://mypocketai.app/), ist eine kostenlose iPhone-App, die Open-Weight-Sprachmodelle direkt auf dem Gerät über [llama.cpp](https://github.com/ggml-org/llama.cpp) mit Metal-Beschleunigung ausführt. Es gibt kein Konto und keine Kommunikation mit einem Server, und sobald ein Modell heruntergeladen ist, funktioniert die App im Flugmodus. Die App selbst ist kostenlos; ein kostenpflichtiger Pro-Kauf schaltet Spracheingabe per On-Device-Whisper frei. Anders als viele lokale KI-Apps fürs iPhone, die nur als Sideload, TestFlight-Beta oder selbst gebautes GitHub-Projekt erscheinen, wird Pocket AI direkt über den Apple App Store vertrieben. Dieser Test behandelt, was die App leistet, was sie kostet und welche Hardware sie benötigt.',
    metaDescription:
      'Pocket AI - No Internet Test 2026: kostenlose iPhone-App für Offline-KI-Chat auf dem Gerät via llama.cpp, einmaliger Pro-Kauf für Whisper-Spracheingabe, kein Abo. Preise, Anforderungen und App-Store-Vertrieb.',
    twitterDescription:
      'Pocket AI - No Internet Test 2026: eine kostenlose iPhone-App, die Open-Weight-Modelle auf dem Gerät via llama.cpp mit Metal-Beschleunigung ausführt. Einmaliger 4,99-$-Pro-Kauf für On-Device-Whisper-Spracheingabe. Kein Konto, kein Abo, funktioniert im Flugmodus.',
    audience:
      'iPhone-Nutzer, die eine kostenlose, offline funktionierende, lokale KI-Chat-App in Betracht ziehen — behandelt Preise, den Pro-Kauf, unterstützte Modellfamilien, Hardware-Anforderungen und den Vergleich mit anderen Einzel-App-Tests auf dieser Seite.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Pocket AI review',
    targetKeywords: [
      'pocket ai review',
      'pocket ai no internet',
      'pocket ai iphone app',
      'offline ai chat app iphone',
      'dataweal pocket ai',
      'on-device llama.cpp iphone app',
      'free local ai app iphone',
      'pocket ai pro unlock price',
    ],
    current_models_mentioned: ['Qwen', 'Gemma', 'Llama', 'Mistral', 'Phi', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone 12'],
    leadAnswerBlock:
      '**Pocket AI - No Internet ist eine kostenlose iPhone-App, die Open-Weight-KI-Modelle vollständig auf dem Gerät über [llama.cpp](https://github.com/ggml-org/llama.cpp) mit Metal-Beschleunigung ausführt — ohne Konto, ohne Server, und vollständig offline nutzbar, sobald ein Modell heruntergeladen ist.** Entwickelt von Faisal bei [Dataweal](https://mypocketai.app/), umfasst die Modellbibliothek laut Entwickler 28 Modelle aus den Familien Qwen, Gemma, Llama, Mistral, Phi und DeepSeek. Die App ist für Text-Chat kostenlos nutzbar; ein kostenpflichtiger Pro-Kauf schaltet On-Device-Whisper-Spracheingabe frei. Sie benötigt ein iPhone 12 oder neuer, was der Entwickler damit begründet, dass Inferenz speicherlimitiert ist. Zum Vergleich eignen sich auch der [Private-LLM-Test](/de/power-local-llm/private-llm-review) oder der [PocketPal-AI-Test](/de/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Pocket AI - No Internet worth downloading?',
        answer:
          'Yes, if you want a free, no-account iPhone app that runs open-weight AI models fully offline via llama.cpp, and you own an iPhone 12 or newer. The Pro unlock is optional and only adds on-device Whisper voice input — text chat is free (see Pricing below for the cost). Skip it if you need a larger, more mature curated model library or Android/desktop support; compare it against Private LLM or PocketPal AI first.',
        bullets: [
          'Free to download and use for text chat; no account or sign-in required.',
          'A paid, one-time Pro unlock adds on-device Whisper voice dictation (see Pricing below).',
          'Runs open-weight models via llama.cpp with Metal acceleration: Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, 28 models in the catalogue per the developer.',
          'Works fully offline (airplane mode) once a model is downloaded.',
          'Requires an iPhone 12 or newer; the app is closed-source, per the developer.',
        ],
        updatedDate: '2026-09-11',
      },
      de: {
        question: 'Lohnt sich der Download von Pocket AI - No Internet?',
        answer:
          'Ja, wenn Sie eine kostenlose iPhone-App ohne Konto möchten, die Open-Weight-KI-Modelle vollständig offline über llama.cpp ausführt, und ein iPhone 12 oder neuer besitzen. Der Pro-Kauf ist optional und schaltet nur On-Device-Whisper-Spracheingabe frei — Text-Chat ist kostenlos (Preis siehe Abschnitt „Preise“ unten). Verzichten Sie darauf, wenn Sie eine größere, etabliertere kuratierte Modellbibliothek oder Android-/Desktop-Unterstützung benötigen; vergleichen Sie sie zunächst mit Private LLM oder PocketPal AI.',
        bullets: [
          'Kostenlos zum Herunterladen und für Text-Chat nutzbar; kein Konto oder Login erforderlich.',
          'Ein einmaliger, kostenpflichtiger Pro-Kauf schaltet On-Device-Whisper-Spracheingabe frei (Preis siehe Abschnitt „Preise“ unten).',
          'Führt Open-Weight-Modelle über llama.cpp mit Metal-Beschleunigung aus: Familien Qwen, Gemma, Llama, Mistral, Phi und DeepSeek, laut Entwickler 28 Modelle in der Bibliothek.',
          'Funktioniert vollständig offline (Flugmodus), sobald ein Modell heruntergeladen ist.',
          'Benötigt ein iPhone 12 oder neuer; die App ist laut Entwickler quellcodegeschlossen.',
        ],
        updatedDate: '2026-09-11',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Pocket AI holen', anchor: 'get-it' },
      { label: 'Was Pocket AI ist', anchor: 'what-is-pocket-ai' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Preise: Kostenlose App, einmaliger Pro-Kauf', anchor: 'pricing' },
      { label: 'Unterstützte Modelle', anchor: 'models' },
      { label: 'Anforderungen: Warum iPhone 12 oder neuer', anchor: 'requirements' },
      { label: 'Datenschutz und Offline-Betrieb', anchor: 'privacy' },
      { label: 'Vom Entwickler', anchor: 'from-the-maker' },
      { label: 'Kompromisse: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Pocket AI vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer Pocket AI nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer Pocket AI nicht nutzen sollte', anchor: 'who-should-not-use' },
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
            text: 'Pocket AI - No Internet ist eine kostenlose iPhone-App von Entwickler Faisal bei Dataweal, die Open-Weight-KI-Modelle (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek) vollständig auf dem Gerät über llama.cpp mit Metal-Beschleunigung ausführt, direkt über den Apple App Store vertrieben, mit einem kostenpflichtigen Pro-Kauf für On-Device-Whisper-Spracheingabe.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als kostenlose Chat-App vor, die einmalig ein KI-Modell auf Ihr iPhone lädt, sodass sie danach im Flugmodus funktioniert — ohne Konto, ohne Server und ohne Internetverbindung, um tatsächlich zu chatten.',
          },
        ],
        items: [
          'Preis: kostenlos zum [Herunterladen](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) und für Text-Chat nutzbar; ein kostenpflichtiger Pro-Kauf schaltet On-Device-Whisper-Spracheingabe frei (siehe Abschnitt „Preise“ unten).',
          'Entwickler: Faisal, bei [Dataweal](https://mypocketai.app/).',
          'Engine: [llama.cpp](https://github.com/ggml-org/llama.cpp) mit Metal-Beschleunigung, vollständig auf dem Gerät ausgeführt.',
          'Modellbibliothek: laut Entwickler 28 Modelle aus den Familien Qwen, Gemma, Llama, Mistral, Phi und DeepSeek.',
          'Offline: funktioniert im Flugmodus, sobald ein Modell heruntergeladen ist; kein Konto und keine Serverkommunikation beim Chatten.',
          'Anforderung: iPhone 12 oder neuer — der Entwickler führt dies auf speicherlimitierte Inferenz zurück.',
          'Open-Source-Status: laut eigener Aussage des Entwicklers quellcodegeschlossen.',
          'Vertrieb: direkt über den [Apple App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) erhältlich — durchsuchbar, von Apple geprüft und automatisch aktualisiert, anders als manche lokale KI-Apps fürs iPhone, die nur als Sideload, TestFlight-Beta oder selbst gebautes GitHub-Projekt erscheinen.',
        ],
      },
      getItPocketAI: {
        id: 'get-it',
        title: 'Pocket AI holen',
        content: [
          '**Pocket AI - No Internet ist direkt im Apple App Store erhältlich** — kein Sideloading, keine TestFlight-Beta und kein Selbstbauen aus dem Quellcode nötig.',
          'Dieser Test ist eine Ergänzung zu PromptQuorums [Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory), das lokale KI-Tools über Plattformen hinweg auflistet; Pocket AI hat dort noch keinen eigenen Eintrag.',
        ],
        columns: ['Plattform', 'Holen'],
        rows: [
          {
            'Plattform': 'iPhone (iOS)',
            'Holen': '[Pocket AI - No Internet im App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)',
          },
        ],
        note: 'Die App selbst ist kostenlos herunterzuladen; was der optionale Pro-Kauf kostet, steht im Abschnitt „Preise“ unten.',
      },
      whatIsPocketAI: {
        id: 'what-is-pocket-ai',
        title: 'Was Pocket AI ist',
        content: [
          '**Pocket AI - No Internet ist eine iPhone-App, die Open-Weight-Sprachmodelle herunterlädt und direkt auf dem Gerät ausführt, ohne serverseitige Komponente.** Sobald ein Modell heruntergeladen ist, benötigt die App keine Internetverbindung, um eine Antwort zu generieren — die Inferenz läuft lokal über [llama.cpp](https://github.com/ggml-org/llama.cpp), eine weit verbreitete Open-Source-Inferenz-Engine, beschleunigt durch Apples Metal-Grafik-Framework.',
          'Die App wird von Entwickler Faisal bei [Dataweal](https://mypocketai.app/) entwickelt. Laut Entwickler war die Motivation, dass andere lokale iPhone-KI-Apps typischerweise zuerst ein Konto, ein Abonnement oder eine Serverkommunikation verlangten, bevor man chatten konnte — Pocket AI ist so gebaut, dass keines davon nötig ist.',
          'Die App ist im [Apple App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) unter dem Namen "Pocket AI - No Internet" verfügbar. Dieser Test stützt sich auf die eigene Beschreibung der App-Architektur und Modellbibliothek durch den Entwickler sowie auf den öffentlichen App-Store-Eintrag, nicht auf eine unabhängige Code-Prüfung — die App ist quellcodegeschlossen (siehe Abschnitt Datenschutz unten).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung von Pocket AI dauert wenige Schritte und erfordert keine Kontoerstellung.** Der gesamte Vorgang, vom App-Store-Download bis zur ersten Offline-Antwort, dauert wenige Minuten plus die Zeit, die das gewählte Modell zum Herunterladen benötigt.',
        ],
        numberedItems: [
          {
            title: 'App herunterladen',
            whyItMatters: 'Laden Sie [Pocket AI - No Internet aus dem Apple App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702). Die App selbst ist kostenlos — kein Kauf nötig, um zu starten.',
          },
          {
            title: 'Ein Modell aus der Bibliothek wählen',
            whyItMatters: 'Wählen Sie ein Modell aus der In-App-Bibliothek von laut Entwickler 28 Modellen aus den Familien Qwen, Gemma, Llama, Mistral, Phi und DeepSeek.',
          },
          {
            title: 'Das Modell herunterladen',
            whyItMatters: 'Dieser Schritt erfordert eine Internetverbindung. Die Downloadgröße hängt vom gewählten Modell ab; alle folgenden Schritte benötigen keine Netzwerkverbindung.',
          },
          {
            title: 'Vollständig offline chatten',
            whyItMatters: 'Sobald das Modell heruntergeladen ist, aktivieren Sie den Flugmodus, um die Offline-Behauptung selbst zu überprüfen. Der Chat läuft über llama.cpp mit Metal-Beschleunigung vollständig auf dem Gerät.',
          },
          {
            title: 'Optional: Pro für Spracheingabe freischalten',
            whyItMatters: 'Ein einmaliger, kostenpflichtiger In-App-Kauf schaltet On-Device-Whisper-Spracheingabe für Diktate frei (siehe Abschnitt „Preise“ unten). Dies ist optional — Text-Chat funktioniert auch ohne.',
          },
        ],
        note: 'Genaue Downloadgrößen und die aktuelle Modellliste können sich zwischen App-Store-Updates ändern — prüfen Sie die aktuellen Angaben in der Modellbibliothek der App, bevor Sie sich bei einem begrenzten Datentarif auf einen großen Download festlegen.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise: Kostenlose App, einmaliger Pro-Kauf',
        itemHeadings: true,
        content: [
          '**Pocket AI - No Internet ist kostenlos zum Herunterladen und für Text-Chat nutzbar.** Ein einmaliger In-App-Kauf für 4,99 $ schaltet die Pro-Stufe frei, die On-Device-Whisper-Spracheingabe hinzufügt. Weder für die Basis-App noch für den Pro-Kauf gibt es ein Abonnement.',
        ],
        columns: ['Was Sie zahlen', 'Was es abdeckt', 'Was nicht enthalten ist'],
        rows: [
          {
            'Was Sie zahlen': 'Kostenlos',
            'Was es abdeckt': 'Vollständiger Text-Chat mit jedem Modell der 28-Modell-Bibliothek, vollständig offline nach dem Download',
            'Was nicht enthalten ist': 'On-Device-Whisper-Spracheingabe, die den Pro-Kauf erfordert',
          },
          {
            'Was Sie zahlen': '4,99 $ (einmalig)',
            'Was es abdeckt': 'On-Device-Whisper-Spracheingabe zusätzlich zur kostenlosen Stufe — kein Abonnement',
            'Was nicht enthalten ist': 'Wiederkehrende Kosten — dies ist ein Einmalkauf, kein Abonnement',
          },
        ],
        note: 'App-Store-Preise können sich ohne Vorankündigung ändern und je nach Region variieren. Prüfen Sie den aktuellen Preis im [App-Store-Eintrag](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702), bevor Sie kaufen.',
      },
      models: {
        id: 'models',
        title: 'Unterstützte Modelle',
        content: [
          '**Die Modellbibliothek von Pocket AI umfasst laut Entwickler 28 Open-Weight-Modelle aus den Familien Qwen, Gemma, Llama, Mistral, Phi und DeepSeek.** Diese Zahl stammt direkt vom Entwickler und wurde während der Kontaktaufnahme mit PromptQuorum von einer anfänglichen Beschreibung von "über 25" Modellen nach oben korrigiert — die Bibliothek der App scheint sich aktiv zu erweitern statt fest zu sein.',
          'Modelle laufen über [llama.cpp](https://github.com/ggml-org/llama.cpp), eine Open-Source-Inferenz-Engine, wobei Apples Metal-Grafik-Framework die GPU-Beschleunigung auf dem Gerät übernimmt. Der Entwickler hat zum Zeitpunkt dieses Tests keine unabhängig verifizierten Benchmark-Zahlen für konkrete Modell-Geräte-Kombinationen veröffentlicht; Leser mit leistungskritischen Anforderungen sollten ein bestimmtes Modell selbst auf ihrem iPhone testen, bevor sie sich darauf verlassen.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen: Warum iPhone 12 oder neuer',
        content: [
          '**Pocket AI benötigt ein iPhone 12 oder neuer.** Laut Entwickler besteht diese Untergrenze, weil Modell-Inferenz speicherlimitiert ist — ein Sprachmodell auf dem Gerät auszuführen erfordert genug Unified Memory, um die Gewichte des Modells und den Arbeitskontext zu halten, und ältere iPhones haben davon nicht genug, um die Modelle der Bibliothek akzeptabel auszuführen.',
          'Dies ist die eigene Begründung des Entwicklers, keine unabhängig getestete Grenze. Leser mit einem iPhone am oder nahe dem Minimum sollten davon ausgehen, dass kleinere Modelle der Bibliothek die realistischere Wahl sind als die größten.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Offline-Betrieb',
        content: [
          '**Pocket AI erfordert kein Konto und kein Login.** Da die App so konzipiert ist, dass Inferenz nach einem Modell-Download vollständig auf dem Gerät läuft, gibt es bei normaler Nutzung für Text-Chat keine Chatdaten, die an einen Server gesendet werden müssten — die Architektur selbst, nicht nur eine erklärte Richtlinie, hält ein Gespräch auf dem Telefon.',
          'Die Spracheingabe der Pro-Stufe läuft laut Entwickler ebenfalls über Whisper auf dem Gerät, was bedeutet, dass Diktat-Audio lokal verarbeitet wird statt an einen Transkriptionsserver gesendet zu werden.',
        ],
        items: [
          '**Kein Konto erforderlich.** Die App kann für Text-Chat heruntergeladen und genutzt werden, ohne ein Profil anzulegen oder sich anzumelden.',
          '**Offline nach dem Download.** Sobald ein Modell heruntergeladen ist, blockiert der Flugmodus den Chat nicht.',
          '**Spracheingabe auf dem Gerät.** Das Whisper-basierte Diktat der Pro-Stufe läuft laut Entwickler lokal, nicht über eine Cloud-Transkriptions-API.',
          '**Quellcodegeschlossene App.** Da der Code der App nicht veröffentlicht ist, beruhen Architektur- und Datenverarbeitungsangaben auf den eigenen Aussagen des Entwicklers und dem öffentlichen App-Store-Eintrag, nicht auf einer unabhängigen Code-Prüfung.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Vom Entwickler',
        content: [
          'PromptQuorum bat Faisal, den Entwickler von Pocket AI bei Dataweal, die App und die Beweggründe für ihre Preis- und Plattformentscheidungen zu beschreiben. Das Folgende wird als eigene Worte des Entwicklers wiedergegeben, zur besseren Lesbarkeit in Absätze gegliedert, nicht als unabhängige redaktionelle Einschätzung von PromptQuorum:',
          '„Pocket AI existiert wegen einer kleinen Frustration. Jede gute lokale KI-App auf dem iPhone verlangte zuerst etwas von mir: ein Konto, ein Abonnement oder eine Serverkommunikation. Ich wollte nichts davon.',
          'Die App führt Open-Weight-Modelle direkt auf dem iPhone über llama.cpp mit Metal-Beschleunigung aus. Qwen, Gemma, Llama, Mistral, Phi und DeepSeek sind alle in der Bibliothek, heute 28 Modelle. Es gibt kein Konto und keinen Server. Sobald ein Modell heruntergeladen ist, funktioniert die App im Flugmodus: im Flugzeug, im Tunnel oder auf einem Telefon, das sich nie bei irgendetwas angemeldet hat. Die Spracheingabe nutzt Whisper, auf dem Gerät, sodass auch das Diktat das Telefon nie verlässt.',
          'Die Preisgestaltung folgt derselben Idee. Die App ist kostenlos, und der Pro-Kauf kostet einmalig 4,99 $. Kein Abonnement. Ich verkaufe lieber etwas, als es zu vermieten.',
          'Was sie nicht ist: Sie ist nicht Open Source, und sie ist nicht für alte Hardware gedacht. Ein iPhone 12 oder neuer ist eine echte Anforderung, weil Modell-Inferenz speicherlimitiert ist und es dafür keinen ehrlichen Weg drumherum gibt.',
          'Es ist eine kleine App mit einem Versprechen. Ihr Gespräch bleibt auf Ihrem Telefon. Das ist das ganze Produkt."',
        ],
        note: '— Faisal, Entwickler, Dataweal',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Kompromisse: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Kostenlose Basis-App',
            'Was das in der Praxis bedeutet': 'Text-Chat mit der vollständigen 28-Modell-Bibliothek kostet nichts und benötigt kein Konto.',
            'Einschränkung / Hinweis': 'Spracheingabe erfordert den kostenpflichtigen Pro-Kauf; sie ist nicht kostenlos enthalten.',
          },
          {
            'Vorteil': 'Einmaliger, kostenpflichtiger Pro-Kauf',
            'Was das in der Praxis bedeutet': 'Kein Abonnement für die Sprachfunktion zu verfolgen oder zu kündigen — einmal zahlen.',
            'Einschränkung / Hinweis': 'Er schaltet laut Entwickler nur Spracheingabe frei; keine zusätzlichen Modelle oder Funktionen darüber hinaus.',
          },
          {
            'Vorteil': '28-Modell-Bibliothek über wichtige Open-Weight-Familien',
            'Was das in der Praxis bedeutet': 'Auswahl zwischen Qwen, Gemma, Llama, Mistral, Phi und DeepSeek, ohne selbst nach Modelldateien zu suchen.',
            'Einschränkung / Hinweis': 'Die Bibliothek wird vom Entwickler kuratiert, und dieser Test hat die Leistung nicht unabhängig über alle 28 Modelle auf konkreter iPhone-Hardware benchmarkt.',
          },
          {
            'Vorteil': 'Kein Konto, vollständig offline nach dem Download',
            'Was das in der Praxis bedeutet': 'Der Chat funktioniert im Flugmodus, ohne dass eine Anmeldung nötig ist.',
            'Einschränkung / Hinweis': 'Da die App quellcodegeschlossen ist, beruhen Offline- und Nicht-Datensammlungs-Angaben auf den eigenen Aussagen des Entwicklers, nicht auf einer unabhängigen Code-Prüfung.',
          },
          {
            'Vorteil': 'llama.cpp mit Metal-Beschleunigung',
            'Was das in der Praxis bedeutet': 'Nutzt eine weit verbreitete Open-Source-Inferenz-Engine statt einer proprietären Eigenentwicklung.',
            'Einschränkung / Hinweis': 'Die tatsächliche Geschwindigkeit hängt vom konkreten Modell und iPhone-Modell ab; dieser Test veröffentlicht keine unabhängigen Benchmark-Zahlen.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Pocket AI vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis', 'Modellflexibilität', 'Hauptunterschied'],
        rows: [
          {
            'App': 'Pocket AI - No Internet',
            'Plattformen': 'Nur iPhone',
            'Preis': 'Kostenlos; einmaliger, kostenpflichtiger Pro-Kauf für Spracheingabe',
            'Modellflexibilität': 'Laut Entwickler 28-Modell-Bibliothek (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek)',
            'Hauptunterschied': 'Kostenlose Basis-App; quellcodegeschlossen; kürzeste Erfolgsbilanz der hier verglichenen Apps',
          },
          {
            'App': '[Private LLM](/de/power-local-llm/private-llm-review)',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Preis': '4,99 $ Einmalkauf',
            'Modellflexibilität': '140+ kuratierte Modelle; OmniQuant/GPTQ-Quantisierung',
            'Hauptunterschied': 'Von Anfang an kostenpflichtig, aber mit deutlich größerer kuratierter Bibliothek und drei Jahren App-Store-Geschichte',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iPhone/iPad, mit teilweiser Android-Unterstützung',
            'Preis': 'Kostenlos, Open Source',
            'Modellflexibilität': 'Jede GGUF-Datei, die der Nutzer z. B. von Hugging Face bezieht',
            'Hauptunterschied': 'Kostenlos und Open Source, anders als Pocket AIs quellcodegeschlossene App; erfordert mehr manuelle Modellverwaltung',
          },
          {
            'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Plattformen': 'iPhone/iPad/Mac',
            'Preis': 'Kostenlos',
            'Modellflexibilität': 'Basiert auf Apple MLX; Zugriff auf Apples On-Device-Foundation-Modell',
            'Hauptunterschied': 'Kostenlose Alternative, speziell auf Apples MLX-Framework statt llama.cpp aufgebaut',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Drittanbieter-Apps ändern sich häufig — prüfen Sie vor einer Entscheidung die aktuellen Angaben im jeweiligen App-Eintrag.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer Pocket AI nutzen sollte',
        items: [
          '**iPhone-Besitzer, die eine kostenlose, kontofreie Offline-KI-Chat-App möchten.** Die Basis-App kostet nichts und erfordert keine Anmeldung, um mit jedem Modell der Bibliothek zu chatten.',
          '**Leser, die gezielt ein Abonnement vermeiden möchten.** Sowohl die kostenlose Stufe als auch der Pro-Kauf sind Einmalkäufe — in beiden Fällen keine wiederkehrenden Kosten.',
          '**Nutzer, die Spracheingabe auf dem Gerät ohne Abonnement möchten.** Der Pro-Kauf ist ein einmaliger Kauf für Whisper-basiertes Diktat, das laut Entwickler lokal läuft.',
          '**Leser, die bereits mehrere lokale iPhone-KI-Apps vergleichen.** Mit einer 28-Modell-Bibliothek über wichtige Open-Weight-Familien ist Pocket AI ein vernünftiger kostenloser Vergleichspunkt neben kostenpflichtigen Apps wie Private LLM.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer Pocket AI nicht nutzen sollte',
        items: [
          '**Android-, Windows-, Mac- oder Linux-Nutzer.** Pocket AI ist eine reine iPhone-App; es gibt keinen Eintrag bei Google Play, im Microsoft Store, im Mac App Store oder in einem Linux-Paketrepository.',
          '**Besitzer eines iPhone 11 oder älter.** Die App benötigt laut Entwickler ein iPhone 12 oder neuer, weil Inferenz speicherlimitiert ist.',
          '**Leser, die vor dem Vertrauen in eine App eine etablierte Erfolgsbilanz benötigen.** Pocket AI ist neuer im App Store als Alternativen wie Private LLM — Leser, die viel Wert auf Bewertungsmenge und Erfolgsbilanz legen, sollten das berücksichtigen.',
          '**Leser, die den Quellcode der App selbst prüfen möchten.** Pocket AI ist laut Entwickler quellcodegeschlossen. Eine Open-Source-Alternative wie [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) ermöglicht unabhängige Code-Prüfung.',
          '**Teams oder Organisationen, die eine gemeinsam verwaltete Bereitstellung wünschen.** Pocket AI ist eine Einzelnutzer-, Einzelgerät-Verbraucher-App ohne Admin-Konsole oder Team-Abrechnung.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Pocket AI - No Internet kostenlos?',
            a: 'Ja. Die App ist kostenlos zum Herunterladen und für Text-Chat mit jedem Modell der Bibliothek nutzbar. Was der optionale Pro-Kauf kostet, steht im Abschnitt „Preise“ oben.',
          },
          {
            q: 'Wer entwickelt Pocket AI - No Internet?',
            a: 'Pocket AI wird von Faisal bei [Dataweal](https://mypocketai.app/) entwickelt.',
          },
          {
            q: 'Welche Modelle unterstützt Pocket AI?',
            a: 'Laut Entwickler umfasst die Modellbibliothek der App 28 Open-Weight-Modelle aus den Familien Qwen, Gemma, Llama, Mistral, Phi und DeepSeek, ausgeführt über [llama.cpp](https://github.com/ggml-org/llama.cpp) mit Metal-Beschleunigung.',
          },
          {
            q: 'Funktioniert Pocket AI ohne Internetverbindung?',
            a: 'Ja, sobald ein Modell heruntergeladen ist. Die App benötigt eine Internetverbindung nur zum Herunterladen eines Modells oder eines App-Updates; der Chat läuft danach vollständig offline, auch im Flugmodus.',
          },
          {
            q: 'Welches iPhone brauche ich für Pocket AI?',
            a: 'Laut Entwickler ein iPhone 12 oder neuer. Der Entwickler gibt an, dass diese Anforderung besteht, weil Modell-Inferenz speicherlimitiert ist — ältere iPhones haben nicht genug Unified Memory, um die Modelle der Bibliothek akzeptabel auszuführen.',
          },
          {
            q: 'Ist Pocket AI - No Internet Open Source?',
            a: 'Nein. Der Entwickler gibt klar an, dass die App quellcodegeschlossen ist.',
          },
          {
            q: 'Was ist im Pro-Kauf enthalten?',
            a: 'Der einmalige Pro-Kauf (siehe „Preise“ oben) schaltet On-Device-Whisper-Spracheingabe für Diktate frei. Laut eigener Beschreibung des Entwicklers fügt er keine weiteren Modelle oder Funktionen über die Spracheingabe hinaus hinzu.',
          },
          {
            q: 'Sammelt Pocket AI persönliche Daten oder erfordert es ein Konto?',
            a: 'Für Text-Chat ist kein Konto oder Login erforderlich. Da die App quellcodegeschlossen ist, stützt sich dieser Test auf die eigenen Aussagen des Entwicklers und den öffentlichen App-Store-Eintrag, nicht auf eine unabhängige Code-Prüfung.',
          },
          {
            q: 'Wie schneidet Pocket AI im Vergleich zu Private LLM oder PocketPal AI ab?',
            a: 'Pocket AI ist kostenlos mit optionalem, einmaligem, kostenpflichtigem Sprach-Unlock (siehe „Preise“ oben), quellcodegeschlossen und neuer im App Store. [Private LLM](/de/power-local-llm/private-llm-review) ist von Anfang an ein 4,99-$-Einmalkauf mit größerer, etablierterer Bibliothek von 140+ Modellen. [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) ist kostenlos und Open Source, erfordert aber das manuelle Beschaffen von GGUF-Modelldateien. Wählen Sie danach, ob Ihnen Kosten, Größe und Reife der Modellbibliothek oder Quellcode-Transparenz am wichtigsten sind.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Pocket AI - No Internet hält ein einfaches Versprechen: eine kostenlose iPhone-App, die Open-Weight-Modelle vollständig auf dem Gerät über llama.cpp ausführt, ohne Konto und ohne Serverkommunikation, vertrieben über den Apple App Store statt als Sideload oder Beta-Build.',
          'Die 28-Modell-Bibliothek über die Familien Qwen, Gemma, Llama, Mistral, Phi und DeepSeek ist für eine kostenlose App ein vernünftiger Ausgangspunkt, und die eigene Begründung des Entwicklers für das iPhone-12-Minimum — speicherlimitierte Inferenz — ist eine plausible, konkrete Erklärung statt einer vagen Hardware-Anforderung.',
          'Was diesen Test eher vorsichtig als begeistert hält, sind das junge Alter der App und der geschlossene Quellcode: Datenschutz- und Offline-Angaben beruhen auf dem Wort des Entwicklers statt auf unabhängiger Code-Prüfung, und die App hat eine kürzere Erfolgsbilanz als etabliertere Alternativen.',
          'Leser, die eine kostenlose Chat-App ohne Abonnement mit plausibler Datenschutz-Story auf dem Gerät möchten, sollten sie ausprobieren; Leser, denen eine etablierte App-Store-Erfolgsbilanz und unabhängig prüfbarer Quellcode wichtiger sind, sollten stattdessen mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) beginnen oder für [Private LLM](/de/power-local-llm/private-llm-review) budgetieren.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Pocket AI - No Internet im App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — Preis und Plattformkompatibilität.',
          '[Offizielle Pocket-AI-Website](https://mypocketai.app/) — Produktübersicht.',
          'Direkte Korrespondenz mit Faisal, Entwickler bei Dataweal, PromptQuorum vor dem 8. September 2026 mitgeteilt — App-Beschreibung, Anzahl der Modellbibliothek, Preismodell, Begründung der Hardware-Anforderung und Open-Source-Status.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Private-LLM-Test](/de/power-local-llm/private-llm-review) — eine kostenpflichtige, etabliertere reine Apple-Alternative mit deutlich größerer Modellbibliothek.',
          '[PocketPal-AI-Test](/de/power-local-llm/pocketpal-ai-review) — die kostenlose Open-Source-Alternative mit manuellem GGUF-Import.',
          '[Die besten lokalen LLM-Apps fürs iPhone](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die vollständige iPhone-App-Übersicht.',
          '[Locally-AI-Test](/de/power-local-llm/locally-ai-review) — eine kostenlose Apple-MLX-basierte Alternative.',
          '[Das vollständige lokale LLM-Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory) — ein umfassenderes Verzeichnis lokaler LLM-Tools über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocket-ai-review-hero-fr.webp',
    title: 'Avis Pocket AI (2026) : chat IA hors ligne sur l\'appareil pour iPhone',
    seoTitle: 'Avis Pocket AI 2026 : chat IA hors ligne sur iPhone',
    intro:
      '[Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702), développée par Faisal chez [Dataweal](https://mypocketai.app/), est une application iPhone gratuite qui exécute des modèles de langage à poids ouverts directement sur l\'appareil via [llama.cpp](https://github.com/ggml-org/llama.cpp) avec accélération Metal. Aucun compte, aucun aller-retour vers un serveur, et une fois qu\'un modèle est téléchargé, l\'application fonctionne en mode avion. L\'application elle-même est gratuite ; un déblocage Pro payant ajoute la saisie vocale Whisper sur l\'appareil. Contrairement à de nombreuses applications d\'IA locale pour iPhone qui ne sont proposées qu\'en sideload, en bêta TestFlight ou en projet GitHub à compiler soi-même, Pocket AI est distribuée directement via l\'App Store d\'Apple. Cet avis couvre ce que fait l\'application, son coût et la configuration matérielle qu\'elle nécessite.',
    metaDescription:
      'Avis Pocket AI - No Internet 2026 : application iPhone gratuite pour chat IA hors ligne sur l\'appareil via llama.cpp, déblocage Pro payant unique pour la saisie vocale Whisper, sans abonnement. Prix, configuration requise et distribution via l\'App Store.',
    twitterDescription:
      'Avis Pocket AI - No Internet 2026 : une application iPhone gratuite qui exécute des modèles à poids ouverts sur l\'appareil via llama.cpp avec accélération Metal. Déblocage Pro à 4,99 $ (paiement unique) pour la saisie vocale Whisper sur l\'appareil. Aucun compte, aucun abonnement, fonctionne en mode avion.',
    audience:
      'Utilisateurs d\'iPhone envisageant une application de chat IA locale, gratuite et hors ligne — couvre les prix, le déblocage Pro, les familles de modèles prises en charge, la configuration matérielle requise et la comparaison avec d\'autres avis d\'applications uniques sur ce site.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Pocket AI review',
    targetKeywords: [
      'pocket ai review',
      'pocket ai no internet',
      'pocket ai iphone app',
      'offline ai chat app iphone',
      'dataweal pocket ai',
      'on-device llama.cpp iphone app',
      'free local ai app iphone',
      'pocket ai pro unlock price',
    ],
    current_models_mentioned: ['Qwen', 'Gemma', 'Llama', 'Mistral', 'Phi', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone 12'],
    leadAnswerBlock:
      '**Pocket AI - No Internet est une application iPhone gratuite qui exécute des modèles d\'IA à poids ouverts entièrement sur l\'appareil via [llama.cpp](https://github.com/ggml-org/llama.cpp) avec accélération Metal — sans compte, sans serveur, et utilisable entièrement hors ligne une fois un modèle téléchargé.** Développée par Faisal chez [Dataweal](https://mypocketai.app/), sa bibliothèque compte, selon le développeur, 28 modèles répartis dans les familles Qwen, Gemma, Llama, Mistral, Phi et DeepSeek. L\'application est gratuite pour le chat textuel ; un déblocage Pro payant ajoute la saisie vocale Whisper sur l\'appareil. Elle nécessite un iPhone 12 ou plus récent, ce que le développeur attribue au fait que l\'inférence est limitée par la mémoire. Pour comparer, consultez aussi l\'[avis Private LLM](/fr/power-local-llm/private-llm-review) ou l\'[avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Pocket AI - No Internet worth downloading?',
        answer:
          'Yes, if you want a free, no-account iPhone app that runs open-weight AI models fully offline via llama.cpp, and you own an iPhone 12 or newer. The Pro unlock is optional and only adds on-device Whisper voice input — text chat is free (see Pricing below for the cost). Skip it if you need a larger, more mature curated model library or Android/desktop support; compare it against Private LLM or PocketPal AI first.',
        bullets: [
          'Free to download and use for text chat; no account or sign-in required.',
          'A paid, one-time Pro unlock adds on-device Whisper voice dictation (see Pricing below).',
          'Runs open-weight models via llama.cpp with Metal acceleration: Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, 28 models in the catalogue per the developer.',
          'Works fully offline (airplane mode) once a model is downloaded.',
          'Requires an iPhone 12 or newer; the app is closed-source, per the developer.',
        ],
        updatedDate: '2026-09-11',
      },
      fr: {
        question: 'Pocket AI - No Internet vaut-elle le téléchargement ?',
        answer:
          'Oui, si vous voulez une application iPhone gratuite, sans compte, qui exécute des modèles d\'IA à poids ouverts entièrement hors ligne via llama.cpp, et que vous possédez un iPhone 12 ou plus récent. Le déblocage Pro est facultatif et n\'ajoute que la saisie vocale Whisper sur l\'appareil — le chat textuel est gratuit (voir la section Tarifs ci-dessous). Passez votre chemin si vous avez besoin d\'une bibliothèque de modèles plus large et plus établie, ou d\'un support Android/bureau ; comparez d\'abord avec Private LLM ou PocketPal AI.',
        bullets: [
          'Gratuite à télécharger et à utiliser pour le chat textuel ; aucun compte ni connexion requis.',
          'Un déblocage Pro payant, à paiement unique, ajoute la dictée vocale Whisper sur l\'appareil (voir la section Tarifs ci-dessous).',
          'Exécute des modèles à poids ouverts via llama.cpp avec accélération Metal : familles Qwen, Gemma, Llama, Mistral, Phi et DeepSeek, 28 modèles au catalogue selon le développeur.',
          'Fonctionne entièrement hors ligne (mode avion) une fois un modèle téléchargé.',
          'Nécessite un iPhone 12 ou plus récent ; l\'application est à code source fermé, selon le développeur.',
        ],
        updatedDate: '2026-09-11',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Pocket AI', anchor: 'get-it' },
      { label: 'Ce qu\'est Pocket AI', anchor: 'what-is-pocket-ai' },
      { label: 'Comment commencer', anchor: 'how-to-get-started' },
      { label: 'Tarifs : application gratuite, déblocage Pro unique', anchor: 'pricing' },
      { label: 'Modèles pris en charge', anchor: 'models' },
      { label: 'Configuration requise : pourquoi iPhone 12 ou plus récent', anchor: 'requirements' },
      { label: 'Confidentialité et fonctionnement hors ligne', anchor: 'privacy' },
      { label: 'Le mot du développeur', anchor: 'from-the-maker' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'Pocket AI vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser Pocket AI', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser Pocket AI', anchor: 'who-should-not-use' },
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
            text: 'Pocket AI - No Internet est une application iPhone gratuite développée par Faisal chez Dataweal qui exécute des modèles d\'IA à poids ouverts (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek) entièrement sur l\'appareil via llama.cpp avec accélération Metal, distribuée directement via l\'App Store d\'Apple, avec un déblocage Pro payant pour la saisie vocale Whisper sur l\'appareil.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme une application de chat gratuite qui télécharge un modèle d\'IA une fois sur votre iPhone, de sorte qu\'elle fonctionne ensuite en mode avion, sans compte, sans serveur et sans connexion internet nécessaire pour discuter réellement.',
          },
        ],
        items: [
          'Prix : gratuite à [télécharger](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) et à utiliser pour le chat textuel ; un déblocage Pro payant ajoute la saisie vocale Whisper sur l\'appareil (voir Tarifs ci-dessous).',
          'Développeur : Faisal, chez [Dataweal](https://mypocketai.app/).',
          'Moteur : [llama.cpp](https://github.com/ggml-org/llama.cpp) avec accélération Metal, exécuté entièrement sur l\'appareil.',
          'Catalogue de modèles : 28 modèles, selon le développeur, répartis dans les familles Qwen, Gemma, Llama, Mistral, Phi et DeepSeek.',
          'Hors ligne : fonctionne en mode avion une fois un modèle téléchargé ; aucun compte ni aller-retour serveur pour le chat.',
          'Configuration requise : iPhone 12 ou plus récent — le développeur l\'attribue au fait que l\'inférence est limitée par la mémoire.',
          'Statut open source : code source fermé, selon la propre déclaration du développeur.',
          'Distribution : disponible directement via l\'[App Store d\'Apple](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — recherchable, vérifiée par Apple et mise à jour automatiquement, contrairement à certaines applications d\'IA locale pour iPhone qui ne sont proposées qu\'en sideload, en bêta TestFlight ou en projet GitHub à compiler soi-même.',
        ],
      },
      getItPocketAI: {
        id: 'get-it',
        title: 'Obtenir Pocket AI',
        content: [
          '**Pocket AI - No Internet est disponible directement sur l\'App Store d\'Apple** — aucun sideloading, aucune bêta TestFlight, et aucune compilation depuis les sources requise.',
          'Cet avis est un complément au [répertoire des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) de PromptQuorum, qui recense les outils d\'IA locale toutes plateformes confondues ; Pocket AI n\'y a pas encore sa propre fiche.',
        ],
        columns: ['Plateforme', 'Obtenir'],
        rows: [
          {
            'Plateforme': 'iPhone (iOS)',
            'Obtenir': '[Pocket AI - No Internet sur l\'App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)',
          },
        ],
        note: 'L\'application elle-même est gratuite à télécharger ; voir la section Tarifs ci-dessous pour le coût du déblocage Pro optionnel.',
      },
      whatIsPocketAI: {
        id: 'what-is-pocket-ai',
        title: 'Ce qu\'est Pocket AI',
        content: [
          '**Pocket AI - No Internet est une application iPhone qui télécharge des modèles de langage à poids ouverts et les exécute directement sur l\'appareil, sans composant serveur.** Une fois un modèle téléchargé, l\'application n\'a pas besoin de connexion internet pour générer une réponse — l\'inférence s\'exécute localement via [llama.cpp](https://github.com/ggml-org/llama.cpp), un moteur d\'inférence open source largement utilisé, accéléré par le framework graphique Metal d\'Apple.',
          'L\'application est créée par le développeur Faisal chez [Dataweal](https://mypocketai.app/). Selon le développeur, la motivation était que les autres applications d\'IA locale pour iPhone demandaient généralement un compte, un abonnement ou un aller-retour serveur avant de permettre de discuter — Pocket AI est conçue pour n\'avoir besoin d\'aucun de ces éléments.',
          'L\'application est disponible sur l\'[App Store d\'Apple](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) sous le nom « Pocket AI - No Internet ». Cet avis s\'appuie sur la propre description du développeur concernant l\'architecture et le catalogue de modèles de l\'application, ainsi que sur la fiche App Store publique, plutôt que sur un audit de code indépendant — l\'application est à code source fermé (voir la section Confidentialité ci-dessous).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment commencer',
        content: [
          '**Configurer Pocket AI prend quelques étapes et ne nécessite aucune création de compte.** L\'ensemble du processus, du téléchargement sur l\'App Store à la première réponse hors ligne, prend quelques minutes, plus le temps de téléchargement du modèle choisi.',
        ],
        numberedItems: [
          {
            title: 'Télécharger l\'application',
            whyItMatters: 'Obtenez [Pocket AI - No Internet sur l\'App Store d\'Apple](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702). L\'application elle-même est gratuite — aucun achat requis pour commencer.',
          },
          {
            title: 'Choisir un modèle dans le catalogue',
            whyItMatters: 'Choisissez un modèle dans le catalogue intégré de 28 modèles répartis dans les familles Qwen, Gemma, Llama, Mistral, Phi et DeepSeek, selon le développeur.',
          },
          {
            title: 'Télécharger le modèle',
            whyItMatters: 'Cette étape nécessite une connexion internet. La taille du téléchargement dépend du modèle choisi ; aucune étape suivante ne nécessite de connexion réseau.',
          },
          {
            title: 'Discuter entièrement hors ligne',
            whyItMatters: 'Une fois le modèle téléchargé, activez le mode avion pour vérifier vous-même l\'affirmation de fonctionnement hors ligne. Le chat s\'exécute via llama.cpp avec accélération Metal, entièrement sur l\'appareil.',
          },
          {
            title: 'Facultatif : débloquer le mode Pro pour la saisie vocale',
            whyItMatters: 'Un achat intégré unique et payant débloque la saisie vocale Whisper sur l\'appareil pour la dictée (voir Tarifs ci-dessous). C\'est facultatif — le chat textuel fonctionne sans cela.',
          },
        ],
        note: 'Les tailles de téléchargement exactes et la liste actuelle des modèles peuvent changer entre les mises à jour de l\'App Store — vérifiez les détails actuels dans le catalogue de modèles de l\'application avant de vous engager dans un téléchargement volumineux avec un forfait de données limité.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs : application gratuite, déblocage Pro unique',
        itemHeadings: true,
        content: [
          '**Pocket AI - No Internet est gratuite à télécharger et à utiliser pour le chat textuel.** Un achat intégré unique de 4,99 $ débloque le palier Pro, qui ajoute la saisie vocale Whisper sur l\'appareil. Ni l\'application de base ni le déblocage Pro ne comportent d\'abonnement.',
        ],
        columns: ['Ce que vous payez', 'Ce que cela couvre', 'Ce qui n\'est pas inclus'],
        rows: [
          {
            'Ce que vous payez': 'Gratuit',
            'Ce que cela couvre': 'Chat textuel complet avec n\'importe quel modèle du catalogue de 28 modèles, entièrement hors ligne après téléchargement',
            'Ce qui n\'est pas inclus': 'La saisie vocale Whisper sur l\'appareil, qui nécessite le déblocage Pro',
          },
          {
            'Ce que vous payez': '4,99 $ (paiement unique)',
            'Ce que cela couvre': 'Saisie vocale Whisper sur l\'appareil ajoutée au palier gratuit — sans abonnement',
            'Ce qui n\'est pas inclus': 'Tout coût récurrent — il s\'agit d\'un achat unique, pas d\'un abonnement',
          },
        ],
        note: 'Les prix de l\'App Store peuvent changer sans préavis et varier selon la région. Vérifiez le prix actuel sur la [fiche App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) avant d\'acheter.',
      },
      models: {
        id: 'models',
        title: 'Modèles pris en charge',
        content: [
          '**Le catalogue de Pocket AI compte, selon le développeur, 28 modèles à poids ouverts répartis dans les familles Qwen, Gemma, Llama, Mistral, Phi et DeepSeek.** Ce chiffre provient directement du développeur et a été révisé à la hausse lors des échanges avec PromptQuorum, par rapport à une description initiale de « plus de 25 » modèles — le catalogue de l\'application semble en expansion active plutôt que figé.',
          'Les modèles s\'exécutent via [llama.cpp](https://github.com/ggml-org/llama.cpp), un moteur d\'inférence open source, le framework graphique Metal d\'Apple assurant l\'accélération GPU sur l\'appareil. Le développeur n\'a pas publié de chiffres de benchmark vérifiés indépendamment pour des combinaisons modèle/appareil spécifiques au moment de cet avis ; les lecteurs ayant des besoins critiques en performance devraient tester un modèle précis sur leur propre iPhone avant de s\'y fier.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise : pourquoi iPhone 12 ou plus récent',
        content: [
          '**Pocket AI nécessite un iPhone 12 ou plus récent.** Selon le développeur, ce seuil existe parce que l\'inférence des modèles est limitée par la mémoire — exécuter un modèle de langage sur l\'appareil nécessite suffisamment de mémoire unifiée pour contenir les poids du modèle et le contexte de travail, et les iPhone plus anciens n\'en ont pas assez pour exécuter correctement les modèles du catalogue.',
          'C\'est le raisonnement propre du développeur, pas un seuil vérifié indépendamment par des tests. Les lecteurs possédant un iPhone au niveau ou proche du minimum requis devraient s\'attendre à ce que les modèles les plus petits du catalogue soient le choix le plus réaliste plutôt que les plus grands.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et fonctionnement hors ligne',
        content: [
          '**Pocket AI ne nécessite ni compte ni connexion.** Comme l\'application est conçue pour exécuter l\'inférence entièrement sur l\'appareil après le téléchargement d\'un modèle, il n\'y a aucune donnée de chat à envoyer à un serveur lors d\'une utilisation normale pour le chat textuel — c\'est l\'architecture elle-même, et pas seulement une politique déclarée, qui maintient une conversation sur le téléphone.',
          'La saisie vocale du palier Pro s\'exécute également sur l\'appareil via Whisper, selon le développeur, ce qui signifie que l\'audio de dictée est traité localement plutôt qu\'envoyé à un serveur de transcription.',
        ],
        items: [
          '**Aucun compte requis.** L\'application peut être téléchargée et utilisée pour le chat textuel sans créer de profil ni se connecter.',
          '**Hors ligne après téléchargement.** Une fois un modèle téléchargé, le mode avion ne bloque pas le chat.',
          '**Saisie vocale sur l\'appareil.** La dictée basée sur Whisper du palier Pro s\'exécute localement, selon le développeur, plutôt que via une API de transcription cloud.',
          '**Application à code source fermé.** Comme le code de l\'application n\'est pas publié, ses affirmations sur l\'architecture et le traitement des données reposent sur les propres déclarations du développeur et la fiche App Store publique, pas sur un audit de code indépendant.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Le mot du développeur',
        content: [
          'PromptQuorum a demandé à Faisal, le développeur de Pocket AI chez Dataweal, de décrire l\'application et le raisonnement derrière ses choix de prix et de plateforme. Ce qui suit est présenté comme les propres mots du développeur, réorganisé en paragraphes pour la lisibilité, et non comme une évaluation éditoriale indépendante de PromptQuorum :',
          '« Pocket AI existe à cause d\'une petite frustration. Chaque bonne application de modèle local sur iPhone me demandait d\'abord quelque chose : un compte, un abonnement ou un aller-retour serveur. Je n\'en voulais aucun.',
          'L\'application exécute des modèles à poids ouverts directement sur l\'iPhone via llama.cpp avec accélération Metal. Qwen, Gemma, Llama, Mistral, Phi et DeepSeek sont tous dans le catalogue, 28 modèles aujourd\'hui. Il n\'y a ni compte ni serveur. Une fois un modèle téléchargé, l\'application fonctionne en mode avion : dans un avion, dans un tunnel, ou sur un téléphone qui ne s\'est jamais connecté à quoi que ce soit. La saisie vocale utilise Whisper, sur l\'appareil, donc la dictée ne quitte jamais non plus le téléphone.',
          'La tarification suit la même logique. L\'application est gratuite et le déblocage Pro coûte 4,99 $ une seule fois. Pas d\'abonnement. Je préfère vendre une chose que la louer.',
          'Ce qu\'elle n\'est pas : elle n\'est pas open source, et elle n\'est pas faite pour du matériel ancien. Un iPhone 12 ou plus récent est une exigence réelle, parce que l\'inférence des modèles est limitée par la mémoire et qu\'il n\'y a aucun moyen honnête de contourner cela.',
          'C\'est une petite application avec une seule promesse. Votre conversation reste sur votre téléphone. C\'est tout le produit. »',
        ],
        note: '— Faisal, développeur, Dataweal',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Application de base gratuite',
            'Ce que cela signifie en usage réel': 'Le chat textuel avec le catalogue complet de 28 modèles ne coûte rien et ne nécessite aucun compte.',
            'Limite / réserve': 'La saisie vocale nécessite le déblocage Pro payant ; elle n\'est pas incluse gratuitement.',
          },
          {
            'Avantage': 'Déblocage Pro unique payant',
            'Ce que cela signifie en usage réel': 'Aucun abonnement à suivre ou annuler pour la fonction vocale — paiement unique.',
            'Limite / réserve': 'Il n\'ajoute que la saisie vocale ; il ne débloque pas de modèles ou fonctionnalités supplémentaires au-delà, selon la propre description du développeur.',
          },
          {
            'Avantage': 'Catalogue de 28 modèles couvrant les grandes familles à poids ouverts',
            'Ce que cela signifie en usage réel': 'Choix entre Qwen, Gemma, Llama, Mistral, Phi et DeepSeek sans avoir à chercher soi-même des fichiers de modèle.',
            'Limite / réserve': 'Le catalogue est sélectionné par le développeur, et cet avis n\'a pas testé indépendamment les performances des 28 modèles sur du matériel iPhone spécifique.',
          },
          {
            'Avantage': 'Aucun compte, entièrement hors ligne après téléchargement',
            'Ce que cela signifie en usage réel': 'Le chat fonctionne en mode avion sans rien à créer comme compte.',
            'Limite / réserve': 'L\'application étant à code source fermé, les affirmations sur le fonctionnement hors ligne et l\'absence de collecte de données reposent sur les propres déclarations du développeur plutôt que sur un audit de code indépendant.',
          },
          {
            'Avantage': 'llama.cpp avec accélération Metal',
            'Ce que cela signifie en usage réel': 'Utilise un moteur d\'inférence open source largement adopté plutôt qu\'un moteur propriétaire maison.',
            'Limite / réserve': 'La vitesse réelle dépend du modèle spécifique et du modèle d\'iPhone ; cet avis ne publie pas de chiffres de benchmark indépendants.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Pocket AI vs. alternatives',
        columns: ['Application', 'Plateformes', 'Prix', 'Flexibilité des modèles', 'Différence clé'],
        rows: [
          {
            'Application': 'Pocket AI - No Internet',
            'Plateformes': 'iPhone uniquement',
            'Prix': 'Gratuit ; déblocage Pro payant unique pour la saisie vocale',
            'Flexibilité des modèles': 'Catalogue de 28 modèles (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek), selon le développeur',
            'Différence clé': 'Application de base gratuite ; code source fermé ; historique le plus court des applications comparées ici',
          },
          {
            'Application': '[Private LLM](/fr/power-local-llm/private-llm-review)',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Prix': 'Achat unique à 4,99 $',
            'Flexibilité des modèles': '140+ modèles sélectionnés ; quantification OmniQuant/GPTQ',
            'Différence clé': 'Payante dès le départ, mais avec une bibliothèque bien plus large et trois ans d\'historique sur l\'App Store',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iPhone/iPad, avec un certain support Android',
            'Prix': 'Gratuit, open source',
            'Flexibilité des modèles': 'N\'importe quel fichier GGUF que l\'utilisateur récupère sur Hugging Face ou ailleurs',
            'Différence clé': 'Gratuite et open source, contrairement à l\'application à code source fermé de Pocket AI ; nécessite plus de gestion manuelle des modèles',
          },
          {
            'Application': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Plateformes': 'iPhone/iPad/Mac',
            'Prix': 'Gratuit',
            'Flexibilité des modèles': 'Construit sur Apple MLX ; accès au modèle de fondation sur l\'appareil d\'Apple',
            'Différence clé': 'Alternative gratuite construite spécifiquement sur le framework MLX d\'Apple plutôt que llama.cpp',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment — vérifiez les spécificités actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser Pocket AI',
        items: [
          '**Les propriétaires d\'iPhone qui veulent une application de chat IA hors ligne gratuite, sans compte.** L\'application de base ne coûte rien et ne nécessite aucune inscription pour commencer à discuter avec n\'importe quel modèle du catalogue.',
          '**Les lecteurs qui veulent spécifiquement éviter un abonnement.** Le palier gratuit comme le déblocage Pro sont des paiements uniques — aucun coût récurrent dans un cas comme dans l\'autre.',
          '**Les utilisateurs qui veulent une saisie vocale sur l\'appareil sans abonnement.** Le déblocage Pro est un achat unique pour une dictée basée sur Whisper que le développeur déclare s\'exécuter localement.',
          '**Les lecteurs comparant déjà plusieurs applications d\'IA locale pour iPhone.** Avec un catalogue de 28 modèles couvrant les principales familles à poids ouverts, Pocket AI est un point de comparaison gratuit raisonnable face à des applications payantes comme Private LLM.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser Pocket AI',
        items: [
          '**Les utilisateurs d\'Android, Windows, Mac ou Linux.** Pocket AI est une application exclusivement iPhone ; elle n\'est répertoriée ni sur Google Play, ni sur le Microsoft Store, ni sur le Mac App Store, ni dans aucun dépôt de paquets Linux.',
          '**Les propriétaires d\'un iPhone 11 ou plus ancien.** L\'application nécessite un iPhone 12 ou plus récent, selon le développeur, parce que l\'inférence est limitée par la mémoire.',
          '**Les lecteurs qui ont besoin d\'un historique établi avant de faire confiance à une application.** Pocket AI est plus récente sur l\'App Store que des alternatives comme Private LLM — les lecteurs qui accordent beaucoup de poids au volume d\'avis et à l\'historique devraient en tenir compte.',
          '**Les lecteurs qui veulent auditer eux-mêmes le code source de l\'application.** Pocket AI est à code source fermé, selon le développeur. Une alternative open source comme [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) permet un examen de code indépendant.',
          '**Les équipes ou organisations souhaitant un déploiement partagé et géré de manière centralisée.** Pocket AI est une application grand public mono-utilisateur, mono-appareil, sans console d\'administration ni facturation d\'équipe.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Pocket AI - No Internet est-elle gratuite ?',
            a: 'Oui. L\'application est gratuite à télécharger et à utiliser pour le chat textuel avec n\'importe quel modèle de son catalogue. Voir la section Tarifs ci-dessus pour le coût du déblocage Pro optionnel.',
          },
          {
            q: 'Qui développe Pocket AI - No Internet ?',
            a: 'Pocket AI est développée par Faisal chez [Dataweal](https://mypocketai.app/).',
          },
          {
            q: 'Quels modèles Pocket AI prend-elle en charge ?',
            a: 'Selon le développeur, le catalogue de l\'application compte 28 modèles à poids ouverts répartis dans les familles Qwen, Gemma, Llama, Mistral, Phi et DeepSeek, exécutés via [llama.cpp](https://github.com/ggml-org/llama.cpp) avec accélération Metal.',
          },
          {
            q: 'Pocket AI fonctionne-t-elle sans connexion internet ?',
            a: 'Oui, une fois un modèle téléchargé. L\'application n\'a besoin d\'une connexion internet que pour télécharger un modèle ou une mise à jour ; le chat s\'exécute ensuite entièrement hors ligne, y compris en mode avion.',
          },
          {
            q: 'Quel iPhone me faut-il pour utiliser Pocket AI ?',
            a: 'Un iPhone 12 ou plus récent, selon le développeur. Le développeur déclare que cette exigence existe parce que l\'inférence des modèles est limitée par la mémoire — les iPhone plus anciens n\'ont pas assez de mémoire unifiée pour exécuter correctement les modèles du catalogue.',
          },
          {
            q: 'Pocket AI - No Internet est-elle open source ?',
            a: 'Non. Le développeur déclare clairement que l\'application est à code source fermé.',
          },
          {
            q: 'Que comprend le déblocage Pro ?',
            a: 'Le déblocage Pro unique (voir Tarifs ci-dessus) ajoute la saisie vocale Whisper sur l\'appareil pour la dictée. Il n\'ajoute pas de modèles ou de fonctionnalités supplémentaires au-delà de la saisie vocale, selon la propre description du développeur.',
          },
          {
            q: 'Pocket AI collecte-t-elle des données personnelles ou nécessite-t-elle un compte ?',
            a: 'Aucun compte ni connexion n\'est requis pour utiliser l\'application en chat textuel. L\'application étant à code source fermé, cet avis s\'appuie sur les propres déclarations du développeur et la fiche App Store publique, pas sur un audit de code indépendant.',
          },
          {
            q: 'Comment Pocket AI se compare-t-elle à Private LLM ou PocketPal AI ?',
            a: 'Pocket AI est gratuite avec un déblocage vocal payant optionnel à paiement unique (voir Tarifs ci-dessus), à code source fermé, et plus récente sur l\'App Store. [Private LLM](/fr/power-local-llm/private-llm-review) est un achat unique de 4,99 $ dès son lancement, avec une bibliothèque plus large et plus établie de 140+ modèles. [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) est gratuite et open source mais nécessite de récupérer manuellement des fichiers de modèle GGUF. Choisissez selon que vous privilégiez le coût, la taille et la maturité de la bibliothèque de modèles, ou la transparence du code source.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Pocket AI - No Internet tient une promesse simple : une application iPhone gratuite qui exécute des modèles à poids ouverts entièrement sur l\'appareil via llama.cpp, sans compte ni aller-retour serveur, distribuée via l\'App Store d\'Apple plutôt qu\'en sideload ou en version bêta.',
          'Le catalogue de 28 modèles couvrant les familles Qwen, Gemma, Llama, Mistral, Phi et DeepSeek est un point de départ raisonnable pour une application gratuite, et le raisonnement propre du développeur pour le minimum iPhone 12 — l\'inférence limitée par la mémoire — est une explication plausible et précise plutôt qu\'une exigence matérielle vague.',
          'Ce qui rend cet avis prudent plutôt qu\'enthousiaste, ce sont la jeunesse de l\'application et son code source fermé : les affirmations sur la confidentialité et le hors-ligne reposent sur la parole du développeur plutôt que sur un examen de code indépendant, et l\'application a un historique plus court que des alternatives plus établies.',
          'Les lecteurs qui veulent une application de chat gratuite, sans abonnement, avec une histoire de confidentialité sur l\'appareil plausible devraient l\'essayer ; les lecteurs qui accordent plus de poids à un historique App Store établi et à un code source auditable de manière indépendante devraient plutôt commencer par [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou prévoir un budget pour [Private LLM](/fr/power-local-llm/private-llm-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Pocket AI - No Internet sur l\'App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — prix et compatibilité des plateformes.',
          '[Site officiel de Pocket AI](https://mypocketai.app/) — présentation du produit.',
          'Correspondance directe avec Faisal, développeur chez Dataweal, transmise à PromptQuorum avant le 8 septembre 2026 — description de l\'application, nombre de modèles au catalogue, modèle de tarification, raisonnement sur la configuration matérielle requise et statut open source.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Private LLM](/fr/power-local-llm/private-llm-review) — une alternative payante et plus établie, exclusivement Apple, avec une bibliothèque de modèles bien plus large.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — l\'alternative gratuite et open source avec import manuel de GGUF.',
          '[Meilleures applications LLM locales pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama complet des applications iPhone.',
          '[Avis Locally AI](/fr/power-local-llm/locally-ai-review) — une alternative gratuite basée sur Apple MLX.',
          '[Le répertoire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un répertoire plus large d\'outils LLM locaux multiplateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocket-ai-review-hero-ja.webp',
    title: 'Pocket AIレビュー(2026年):iPhone向けオフラインオンデバイスAIチャット',
    seoTitle: 'Pocket AIレビュー2026:iPhoneのオフラインAIチャット',
    intro:
      '[Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)は、開発者Faisal氏が[Dataweal](https://mypocketai.app/)で開発した無料のiPhoneアプリで、オープンウェイトの言語モデルを[llama.cpp](https://github.com/ggml-org/llama.cpp)とMetalアクセラレーションによって端末上で直接実行します。アカウントは不要で、サーバーとの通信も発生せず、モデルをダウンロードすればアプリは機内モードでも動作します。アプリ自体は無料で、有料のPro解除でオンデバイスのWhisper音声入力が追加されます。多くのiPhone向けローカルAIアプリがサイドロードやTestFlightベータ版、自分でビルドするGitHubプロジェクトとしてしか提供されないのに対し、Pocket AIはApple App Storeを通じて直接配布されています。本レビューでは、アプリの機能、料金、必要なハードウェアについて扱います。',
    metaDescription:
      'Pocket AI - No Internetレビュー2026:llama.cpp経由でオフラインのオンデバイスAIチャットを実現する無料iPhoneアプリ。Whisper音声入力のための1回限りの有料Pro解除、サブスクリプションなし。料金、要件、App Store配布について。',
    twitterDescription:
      'Pocket AI - No Internetレビュー2026:llama.cppとMetalアクセラレーションでオープンウェイトモデルを端末上で実行する無料iPhoneアプリ。オンデバイスWhisper音声入力のための4.99ドルの1回限りPro解除。アカウント不要、サブスクリプションなし、機内モードで動作。',
    audience:
      '無料でオフラインのオンデバイスAIチャットアプリを検討しているiPhoneユーザー向け——料金、Pro解除、対応モデルファミリー、ハードウェア要件、本サイトの他の単体アプリレビューとの比較を扱う。',
    readTime: '8分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Pocket AI review',
    targetKeywords: [
      'pocket ai review',
      'pocket ai no internet',
      'pocket ai iphone app',
      'offline ai chat app iphone',
      'dataweal pocket ai',
      'on-device llama.cpp iphone app',
      'free local ai app iphone',
      'pocket ai pro unlock price',
    ],
    current_models_mentioned: ['Qwen', 'Gemma', 'Llama', 'Mistral', 'Phi', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone 12'],
    leadAnswerBlock:
      '**Pocket AI - No Internetは、[llama.cpp](https://github.com/ggml-org/llama.cpp)とMetalアクセラレーションによってオープンウェイトのAIモデルを完全に端末上で実行する無料のiPhoneアプリです——アカウント不要、サーバー不要で、モデルをダウンロードすれば完全オフラインで利用できます。** [Dataweal](https://mypocketai.app/)の開発者Faisal氏によって作られ、開発者によればカタログはQwen、Gemma、Llama、Mistral、Phi、DeepSeekの各ファミリーにまたがる28モデルに及びます。テキストチャットは無料で利用でき、有料のPro解除でオンデバイスのWhisper音声入力が追加されます。推論がメモリに制約されるため、開発者はiPhone 12以降が必要としています。比較のためには[Private LLMレビュー](/ja/power-local-llm/private-llm-review)や[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review)もご覧ください。',
    quickAnswerTop: {
      en: {
        question: 'Is Pocket AI - No Internet worth downloading?',
        answer:
          'Yes, if you want a free, no-account iPhone app that runs open-weight AI models fully offline via llama.cpp, and you own an iPhone 12 or newer. The Pro unlock is optional and only adds on-device Whisper voice input — text chat is free (see Pricing below for the cost). Skip it if you need a larger, more mature curated model library or Android/desktop support; compare it against Private LLM or PocketPal AI first.',
        bullets: [
          'Free to download and use for text chat; no account or sign-in required.',
          'A paid, one-time Pro unlock adds on-device Whisper voice dictation (see Pricing below).',
          'Runs open-weight models via llama.cpp with Metal acceleration: Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, 28 models in the catalogue per the developer.',
          'Works fully offline (airplane mode) once a model is downloaded.',
          'Requires an iPhone 12 or newer; the app is closed-source, per the developer.',
        ],
        updatedDate: '2026-09-11',
      },
      ja: {
        question: 'Pocket AI - No Internetはダウンロードする価値がありますか?',
        answer:
          'はい、llama.cpp経由でオープンウェイトのAIモデルを完全にオフラインで実行できる、無料でアカウント不要のiPhoneアプリを求めていて、iPhone 12以降を所有している場合はおすすめです。Pro解除は任意で、オンデバイスのWhisper音声入力を追加するだけです——テキストチャットは無料です(価格は下記の料金セクションを参照)。より大規模で成熟したモデルライブラリやAndroid/デスクトップ対応が必要な場合は見送り、まずPrivate LLMやPocketPal AIと比較してください。',
        bullets: [
          '無料でダウンロードでき、テキストチャットに利用可能。アカウントやサインインは不要。',
          '有料の1回限りのPro解除でオンデバイスのWhisper音声入力が追加される(価格は下記の料金セクションを参照)。',
          'llama.cppとMetalアクセラレーションでオープンウェイトモデルを実行:Qwen、Gemma、Llama、Mistral、Phi、DeepSeekの各ファミリー、開発者によればカタログには28モデル。',
          'モデルをダウンロードすれば完全オフライン(機内モード)で動作。',
          'iPhone 12以降が必要。開発者によればアプリはクローズドソース。',
        ],
        updatedDate: '2026-09-11',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Pocket AIを入手する', anchor: 'get-it' },
      { label: 'Pocket AIとは', anchor: 'what-is-pocket-ai' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '料金:無料アプリと1回限りのPro解除', anchor: 'pricing' },
      { label: '対応モデル', anchor: 'models' },
      { label: '必要要件:なぜiPhone 12以降が必要か', anchor: 'requirements' },
      { label: 'プライバシーとオフライン動作', anchor: 'privacy' },
      { label: '開発者から', anchor: 'from-the-maker' },
      { label: 'トレードオフ:メリットと制約', anchor: 'tradeoffs' },
      { label: 'Pocket AI 対 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'Pocket AIを使うべき人', anchor: 'who-should-use' },
      { label: 'Pocket AIを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
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
            text: 'Pocket AI - No Internetは、Datawealの開発者Faisal氏による無料のiPhoneアプリで、オープンウェイトAIモデル(Qwen、Gemma、Llama、Mistral、Phi、DeepSeek)をllama.cppとMetalアクセラレーションによって完全に端末上で実行し、Apple App Storeを通じて直接配布され、オンデバイスWhisper音声入力のための有料のPro解除がある。',
          },
          {
            type: 'plain-terms',
            text: 'クラウドチャットボットに登録する代わりに、一度だけAIモデルをiPhoneにダウンロードして買い切りで使う無料のチャットアプリと考えてください——モデルは自分のiPhone上で動くため、入力した内容が端末の外に出ることはありません。',
          },
        ],
        items: [
          '料金:[ダウンロード](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)は無料でテキストチャットに利用可能。有料のPro解除でオンデバイスWhisper音声入力が追加(下記の料金セクションを参照)。',
          '開発者:[Dataweal](https://mypocketai.app/)のFaisal氏。',
          'エンジン:[llama.cpp](https://github.com/ggml-org/llama.cpp)とMetalアクセラレーションを使用し、完全に端末上で動作。',
          'モデルカタログ:開発者によれば、Qwen、Gemma、Llama、Mistral、Phi、DeepSeekの各ファミリーにまたがる28モデル。',
          'オフライン:モデルをダウンロードすれば機内モードでも動作。チャットにアカウントやサーバー通信は不要。',
          '要件:iPhone 12以降——開発者は推論がメモリに制約されるためとしている。',
          'オープンソース状況:開発者自身の説明によればクローズドソース。',
          '配布:[Apple App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)から直接入手可能——検索可能で、Appleによる審査を受けており、自動更新される。サイドロードやTestFlightベータ版、自分でビルドするGitHubプロジェクトとしてしか提供されない一部のiPhone向けローカルAIアプリとは異なる。',
        ],
      },
      getItPocketAI: {
        id: 'get-it',
        title: 'Pocket AIを入手する',
        content: [
          '**Pocket AI - No InternetはApple App Storeから直接入手できます**——サイドロード、TestFlightベータ版、ソースからのビルドは一切不要です。',
          '本レビューは、PromptQuorumの[ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory)を補完するものです。このディレクトリはプラットフォームを横断してローカルAIツールを掲載していますが、Pocket AIはまだ独自の掲載項目を持っていません。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          {
            'プラットフォーム': 'iPhone(iOS)',
            '入手方法': '[App StoreのPocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)',
          },
        ],
        note: 'アプリ自体のダウンロードは無料です。任意のPro解除の料金については下記の料金セクションを参照してください。',
      },
      whatIsPocketAI: {
        id: 'what-is-pocket-ai',
        title: 'Pocket AIとは',
        content: [
          '**Pocket AI - No Internetは、オープンウェイトの言語モデルをダウンロードし、サーバー側のコンポーネントなしに端末上で直接実行するiPhoneアプリです。** モデルをダウンロードすれば、応答を生成するのにインターネット接続は不要です——推論は[llama.cpp](https://github.com/ggml-org/llama.cpp)という広く使われているオープンソースの推論エンジンを通じてローカルで実行され、AppleのMetalグラフィックスフレームワークによって高速化されます。',
          'このアプリは、[Dataweal](https://mypocketai.app/)の開発者Faisal氏によって構築・保守されています。開発者によれば、他のiPhone向けローカルモデルアプリの多くはチャットを始める前にアカウント、サブスクリプション、サーバー通信のいずれかを要求していたため、Pocket AIはそれらを一切必要としないよう設計されたとのことです。',
          'このアプリは「Pocket AI - No Internet」という名前で[Apple App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)で入手できます。本レビューは、アプリのアーキテクチャやモデルカタログについての開発者自身の説明、および公開されているApp Storeの掲載情報に依拠しており、独立したコード監査によるものではありません——アプリはクローズドソースです(下記のプライバシーの項目を参照)。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**Pocket AIのセットアップはいくつかの手順で完了し、アカウント作成は不要です。** App Storeでのダウンロードから最初のオフライン応答まで、選択したモデルのダウンロード時間を除けば数分程度です。',
        ],
        numberedItems: [
          {
            title: 'アプリをダウンロードする',
            whyItMatters: '[Apple App StoreからPocket AI - No Internetを入手](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)します。アプリ自体は無料で、始めるための購入は不要です。',
          },
          {
            title: 'カタログからモデルを選ぶ',
            whyItMatters: '開発者によれば、Qwen、Gemma、Llama、Mistral、Phi、DeepSeekの各ファミリーにまたがる28モデルのアプリ内カタログからモデルを選びます。',
          },
          {
            title: 'モデルをダウンロードする',
            whyItMatters: 'この手順にはインターネット接続が必要です。ダウンロードサイズは選択したモデルによって異なり、これ以降の手順にはネットワーク接続は不要です。',
          },
          {
            title: '完全オフラインでチャットする',
            whyItMatters: 'モデルをダウンロードしたら、機内モードをオンにしてオフラインであるという主張を自分で確認してください。チャットはllama.cppとMetalアクセラレーションによって完全に端末上で実行されます。',
          },
          {
            title: '任意:音声入力のためにProを解除する',
            whyItMatters: '1回限りの有料アプリ内購入で、口述筆記のためのオンデバイスWhisper音声入力が解除されます(下記の料金セクションを参照)。これは任意であり、テキストチャットはこれがなくても機能します。',
          },
        ],
        note: '正確なダウンロードサイズや現在のモデルリストはApp Storeの更新のたびに変わる可能性があります——データ量に制限のあるプランで大きなダウンロードを行う前に、アプリ自体のモデルカタログで最新情報を確認してください。',
      },
      pricing: {
        id: 'pricing',
        title: '料金:無料アプリと1回限りのPro解除',
        itemHeadings: true,
        content: [
          '**Pocket AI - No Internetはダウンロードもテキストチャットの利用も無料です。** 1回限り4.99ドルのアプリ内購入でProティアが解除され、オンデバイスWhisper音声入力が追加されます。無料アプリにもPro解除にもサブスクリプションはありません。',
        ],
        columns: ['支払う内容', 'カバーされる範囲', '含まれないもの'],
        rows: [
          {
            '支払う内容': '無料',
            'カバーされる範囲': '28モデルすべてを対象とした完全なテキストチャット。ダウンロード後は完全オフライン',
            '含まれないもの': 'オンデバイスWhisper音声入力(Pro解除が必要)',
          },
          {
            '支払う内容': '4.99ドル(1回限り)',
            'カバーされる範囲': '無料ティアに加えてオンデバイスWhisper音声入力——サブスクリプションなし',
            '含まれないもの': '継続的な費用——これは1回限りの購入であり、サブスクリプションではない',
          },
        ],
        note: 'App Storeの価格は予告なく変更される場合があり、地域によって異なる場合があります。購入前に[App Storeの掲載情報](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)で現在の価格を確認してください。',
      },
      models: {
        id: 'models',
        title: '対応モデル',
        content: [
          '**Pocket AIのカタログには、開発者によれば、Qwen、Gemma、Llama、Mistral、Phi、DeepSeekの各ファミリーにまたがる28のオープンウェイトモデルが含まれています。** この数値は開発者から直接得たもので、PromptQuorumとのやり取りの中で当初の「25以上」というモデル数の説明から上方修正されました——アプリのカタログは固定ではなく積極的に拡大しているようです。',
          'モデルはオープンソースの推論エンジンである[llama.cpp](https://github.com/ggml-org/llama.cpp)を通じて実行され、AppleのMetalグラフィックスフレームワークが端末上でのGPUアクセラレーションを提供します。開発者は本レビュー時点で、特定のモデルと端末の組み合わせについて独立検証されたベンチマーク数値を公開していません。性能を重視する読者は、依拠する前に自分のiPhoneで特定のモデルをテストすべきです。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '必要要件:なぜiPhone 12以降が必要か',
        content: [
          '**Pocket AIにはiPhone 12以降が必要です。** 開発者によれば、この下限が存在するのはモデルの推論がメモリに制約されるためです——端末上で言語モデルを実行するには、モデルの重みと作業中のコンテキストを保持できる十分な統合メモリが必要で、旧型のiPhoneにはカタログのモデルを実用的に動かすだけのメモリがありません。',
          'これは開発者自身が述べている理由であり、独立してベンチマークされた基準ではありません。最低要件ぎりぎり、あるいはそれに近いiPhoneを持つ読者は、カタログの中でも小型のモデルの方が最大級のモデルよりも現実的な選択肢になると想定すべきです。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとオフライン動作',
        content: [
          '**Pocket AIはアカウントもサインインも必要としません。** モデルのダウンロード後は推論が完全に端末上で実行されるよう設計されているため、通常のテキストチャット利用中にサーバーへ送信されるチャットデータは存在しません——これは単に方針として述べられているだけでなく、アーキテクチャ自体が会話を端末内にとどめています。',
          '開発者によれば、Proティアの音声入力もWhisperを介して端末上で動作するため、口述筆記の音声は文字起こしサーバーに送られるのではなくローカルで処理されます。',
        ],
        items: [
          '**アカウント不要。** プロフィールの作成やサインインなしに、アプリをダウンロードしてテキストチャットに利用できます。',
          '**ダウンロード後はオフライン。** モデルをダウンロードすれば、機内モードでもチャットがブロックされません。',
          '**オンデバイス音声入力。** 開発者によれば、ProティアのWhisperベースの口述筆記はクラウドの文字起こしAPIではなくローカルで動作します。',
          '**クローズドソースアプリ。** アプリのコードが公開されていないため、アーキテクチャやデータ処理に関する主張は、独立したコード監査ではなく開発者自身の説明と公開されているApp Storeの掲載情報に基づいています。',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '開発者から',
        content: [
          'PromptQuorumは、DatawealでPocket AIを開発しているFaisal氏に、アプリの内容と価格・プラットフォーム選択の背景にある考え方を説明するよう依頼しました。以下は、読みやすさのために段落として再構成した開発者自身の言葉として提示するものであり、PromptQuorumによる独立した編集上の評価ではありません:',
          '「Pocket AIが存在するのは、ある小さな不満のためです。iPhone向けの優れたローカルモデルアプリはどれも、最初に何かを求めてきました。アカウント、サブスクリプション、あるいはサーバーとのやり取りです。私はそのいずれも望みませんでした。',
          'このアプリは、llama.cppとMetalアクセラレーションによってオープンウェイトモデルをiPhone上で直接実行します。Qwen、Gemma、Llama、Mistral、Phi、DeepSeekがすべてカタログに含まれており、今日時点で28モデルです。アカウントもサーバーもありません。モデルをダウンロードすれば、アプリは機内モードで動作します——飛行機の中、トンネルの中、あるいは何にもサインインしたことのない端末でも。音声入力にはオンデバイスのWhisperを使っているので、口述筆記も端末の外に出ることはありません。',
          '価格設定も同じ考え方に従っています。アプリは無料で、Pro解除は1回限り4.99ドルです。サブスクリプションはありません。私は物を貸すよりも売る方を選びます。',
          'このアプリでないもの:オープンソースではなく、古いハードウェア向けでもありません。モデルの推論はメモリに制約されるため、それを回避する誠実な方法はなく、iPhone 12以降というのは実際の要件です。',
          'これは一つの約束を持つ小さなアプリです。あなたの会話はあなたの端末にとどまる。それが製品のすべてです」',
        ],
        note: '——Faisal氏、開発者、Dataweal',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制約',
        columns: ['メリット', '実際の利用での意味', '制約・注意点'],
        rows: [
          {
            'メリット': '無料の基本アプリ',
            '実際の利用での意味': '28モデルのカタログ全体を対象としたテキストチャットは無料で、アカウントも不要。',
            '制約・注意点': '音声入力には有料のPro解除が必要で、無料では含まれない。',
          },
          {
            'メリット': '1回限りの有料Pro解除',
            '実際の利用での意味': '音声機能のためのサブスクリプションを追跡・解約する必要がない——一度払えば済む。',
            '制約・注意点': '開発者自身の説明によれば、追加されるのは音声入力のみで、それ以外の追加モデルや機能は解除されない。',
          },
          {
            'メリット': '主要なオープンウェイトファミリーをカバーする28モデルのカタログ',
            '実際の利用での意味': 'モデルファイルを自分で探す必要なく、Qwen、Gemma、Llama、Mistral、Phi、DeepSeekから選択できる。',
            '制約・注意点': 'カタログは開発者によって選定されており、本レビューは特定のiPhoneハードウェア上での28モデルすべての性能を独立してベンチマークしていない。',
          },
          {
            'メリット': 'アカウント不要、ダウンロード後は完全オフライン',
            '実際の利用での意味': '登録の必要なく、機内モードでもチャットが機能する。',
            '制約・注意点': 'アプリがクローズドソースであるため、オフライン動作やデータ非収集に関する主張は独立したコード監査ではなく開発者自身の説明に基づく。',
          },
          {
            'メリット': 'Metalアクセラレーションを備えたllama.cpp',
            '実際の利用での意味': '独自の自社製エンジンではなく、広く採用されているオープンソースの推論エンジンを使用している。',
            '制約・注意点': '実際の速度は特定のモデルとiPhoneの機種に依存する。本レビューは独立したベンチマーク数値を公開していない。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Pocket AI 対 代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格', 'モデルの柔軟性', '主な違い'],
        rows: [
          {
            'アプリ': 'Pocket AI - No Internet',
            'プラットフォーム': 'iPhoneのみ',
            '価格': '無料。音声入力のための有料の1回限りPro解除',
            'モデルの柔軟性': '開発者によれば28モデルのカタログ(Qwen、Gemma、Llama、Mistral、Phi、DeepSeek)',
            '主な違い': '無料の基本アプリ。クローズドソース。ここで比較したアプリの中で実績が最も短い',
          },
          {
            'アプリ': '[Private LLM](/ja/power-local-llm/private-llm-review)',
            'プラットフォーム': 'iPhone/iPad/Mac(Appleのみ)',
            '価格': '4.99ドルの1回限り購入',
            'モデルの柔軟性': '140以上の厳選モデル。OmniQuant/GPTQ量子化',
            '主な違い': '最初から有料だが、はるかに大きな厳選ライブラリと3年間のApp Store実績を持つ',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iPhone/iPad。一部Android対応',
            '価格': '無料、オープンソース',
            'モデルの柔軟性': 'Hugging Faceなどからユーザーが入手した任意のGGUFファイル',
            '主な違い': 'Pocket AIのクローズドソースアプリとは異なり無料かつオープンソース。より手動でのモデル管理が必要',
          },
          {
            'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            'プラットフォーム': 'iPhone/iPad/Mac',
            '価格': '無料',
            'モデルの柔軟性': 'Apple MLX上に構築。Appleのオンデバイス基盤モデルへのアクセス',
            '主な違い': 'llama.cppではなくAppleのMLXフレームワーク上に特化して構築された無料の代替アプリ',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム、価格、機能の詳細は頻繁に変更されます——決定前に各アプリ自体の掲載情報で現在の詳細を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pocket AIを使うべき人',
        items: [
          '**無料でアカウント不要のオフラインAIチャットアプリを求めるiPhoneユーザー。** 基本アプリは無料で、カタログ内の任意のモデルとのチャットを始めるための登録も不要です。',
          '**特にサブスクリプションを避けたい読者。** 無料ティアもPro解除も1回限りの支払いで、どちらの場合も継続的な請求はありません。',
          '**サブスクリプションなしでオンデバイス音声入力を望むユーザー。** Pro解除は、開発者によればローカルで動作するWhisperベースの口述筆記のための1回限り購入です。',
          '**すでに複数のiPhone向けローカルAIアプリを比較している読者。** 主要なオープンウェイトファミリーにまたがる28モデルのカタログを持つPocket AIは、Private LLMのような有料アプリと並ぶ妥当な無料の比較対象です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pocket AIを使うべきでない人',
        items: [
          '**Android、Windows、Mac、Linuxのユーザー。** Pocket AIはiPhone専用アプリで、Google Play、Microsoft Store、Mac App Store、Linuxのパッケージリポジトリのいずれにも掲載されていません。',
          '**iPhone 11以前を所有するユーザー。** 開発者によれば、推論がメモリに制約されるため、アプリにはiPhone 12以降が必要です。',
          '**アプリを信頼する前に確立された実績を必要とする読者。** Pocket AIはPrivate LLMのような代替アプリよりApp Storeでの歴史が浅いです——レビュー件数や実績を重視する読者はこれを考慮すべきです。',
          '**アプリのソースコードを自分で監査したい読者。** 開発者によればPocket AIはクローズドソースです。[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)のようなオープンソースの代替アプリなら独立したコードレビューが可能です。',
          '**共有され一元管理された展開を望むチームや組織。** Pocket AIは管理コンソールやチーム課金機能を持たない、単一ユーザー・単一端末向けの一般消費者向けアプリです。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Pocket AI - No Internetは無料ですか?',
            a: 'はい。アプリはダウンロードもテキストチャットの利用も無料で、カタログ内の任意のモデルを使えます。任意のPro解除の料金については上記の料金セクションを参照してください。',
          },
          {
            q: 'Pocket AI - No Internetを開発しているのは誰ですか?',
            a: 'Pocket AIは[Dataweal](https://mypocketai.app/)のFaisal氏によって開発されています。',
          },
          {
            q: 'Pocket AIはどのモデルに対応していますか?',
            a: '開発者によれば、アプリのカタログにはQwen、Gemma、Llama、Mistral、Phi、DeepSeekの各ファミリーにまたがる28のオープンウェイトモデルが含まれており、Metalアクセラレーションを備えた[llama.cpp](https://github.com/ggml-org/llama.cpp)を通じて実行されます。',
          },
          {
            q: 'Pocket AIはインターネット接続なしで動作しますか?',
            a: 'はい、モデルをダウンロードすれば動作します。アプリがインターネット接続を必要とするのはモデルやアプリの更新をダウンロードするときのみで、その後のチャットは機内モードを含め完全にオフラインで動作します。',
          },
          {
            q: 'Pocket AIを使うにはどのiPhoneが必要ですか?',
            a: '開発者によれば、iPhone 12以降です。開発者は、モデルの推論がメモリに制約されるためこの要件があるとしています——旧型のiPhoneには、カタログのモデルを実用的に動かすだけの統合メモリがありません。',
          },
          {
            q: 'Pocket AI - No Internetはオープンソースですか?',
            a: 'いいえ。開発者は、アプリがクローズドソースであると明確に述べています。',
          },
          {
            q: 'Pro解除には何が含まれますか?',
            a: '1回限りのPro解除(上記の料金セクションを参照)は、口述筆記のためのオンデバイスWhisper音声入力を追加します。開発者自身の説明によれば、音声入力以外の追加モデルや機能は追加されません。',
          },
          {
            q: 'Pocket AIは個人データを収集しますか、アカウントは必要ですか?',
            a: 'テキストチャットの利用にアカウントやサインインは不要です。アプリがクローズドソースであるため、本レビューは独立したコード監査ではなく、開発者自身の説明と公開されているApp Storeの掲載情報に依拠しています。',
          },
          {
            q: 'Pocket AIはPrivate LLMやPocketPal AIと比べてどうですか?',
            a: 'Pocket AIは無料で、任意の1回限りの有料音声解除があり(上記の料金セクションを参照)、クローズドソースで、App Storeでの歴史が浅いです。[Private LLM](/ja/power-local-llm/private-llm-review)は発売当初から4.99ドルの1回限り購入で、より大規模で確立された140以上のモデルライブラリを持ちます。[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)は無料でオープンソースですが、GGUFモデルファイルを手動で入手する必要があります。コスト、モデルライブラリの規模と成熟度、あるいはソースコードの透明性のどれを最も重視するかで選んでください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'Pocket AI - No Internetは、シンプルな約束を果たしています。アカウントもサーバー通信もなく、llama.cpp経由でオープンウェイトモデルを完全に端末上で実行する無料のiPhoneアプリであり、サイドロードやベータ版ではなくApple App Storeを通じて配布されています。',
          'Qwen、Gemma、Llama、Mistral、Phi、DeepSeekの各ファミリーにまたがる28モデルのカタログは、無料アプリとしては妥当な出発点であり、iPhone 12という最低要件についての開発者自身の理由づけ——メモリに制約される推論——は、曖昧なハードウェア要件ではなく、もっともらしく具体的な説明です。',
          '本レビューが熱狂的ではなく慎重な姿勢を保っているのは、アプリがまだ新しくクローズドソースであるためです。プライバシーやオフラインに関する主張は独立したコードレビューではなく開発者の言葉に依拠しており、アプリはより確立された代替アプリよりも実績が短いです。',
          'オンデバイスのもっともらしいプライバシーの仕組みを備えた、無料でサブスクリプションのないチャットアプリを求める読者は試してみるべきです。確立されたApp Store実績と独立して監査可能なソースコードをより重視する読者は、代わりに[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)から始めるか、[Private LLM](/ja/power-local-llm/private-llm-review)の予算を検討すべきです。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのPocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — 価格とプラットフォームの互換性。',
          '[Pocket AI公式サイト](https://mypocketai.app/) — 製品概要。',
          '2026年9月8日より前にPromptQuorumへ提供された、Datawealの開発者Faisal氏との直接のやり取り — アプリの説明、モデルカタログの数、価格モデル、ハードウェア要件の理由、オープンソース状況。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Private LLMレビュー](/ja/power-local-llm/private-llm-review) — はるかに大規模なモデルライブラリを持つ、有料でより確立されたApple専用の代替アプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 手動でGGUFをインポートする無料のオープンソース代替アプリ。',
          '[2026年版 iPhone向けベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhoneアプリの完全な比較一覧。',
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — Apple MLXベースの無料の代替アプリ。',
          '[完全なローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory) — プラットフォームを横断するローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocket-ai-review-hero-zh.webp',
    title: 'Pocket AI评测(2026):适用于iPhone的离线设备端AI聊天应用',
    seoTitle: 'Pocket AI评测2026:iPhone离线AI聊天应用',
    intro:
      '[Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)是由开发者Faisal在[Dataweal](https://mypocketai.app/)开发的一款免费iPhone应用,通过[llama.cpp](https://github.com/ggml-org/llama.cpp)配合Metal加速,直接在设备上运行开放权重语言模型。无需账户,也不与服务器通信,一旦模型下载完成,应用即可在飞行模式下使用。应用本身免费;付费解锁Pro版即可获得设备端Whisper语音输入。与许多仅以旁加载、TestFlight测试版或自行编译GitHub项目形式提供的iPhone本地AI应用不同,Pocket AI直接通过苹果App Store分发。本评测将介绍该应用的功能、价格以及硬件要求。',
    metaDescription:
      'Pocket AI - No Internet评测2026:通过llama.cpp实现离线设备端AI聊天的免费iPhone应用,一次性付费解锁Pro版获得Whisper语音输入,无订阅。价格、要求以及App Store分发情况。',
    twitterDescription:
      'Pocket AI - No Internet评测2026:一款通过llama.cpp配合Metal加速在设备上运行开放权重模型的免费iPhone应用。一次性4.99美元解锁Pro版获得设备端Whisper语音输入。无需账户,无订阅,支持飞行模式。',
    audience:
      '正在考虑使用免费、离线、设备端AI聊天应用的iPhone用户——涵盖价格、Pro解锁、支持的模型系列、硬件要求,以及与本站其他单一应用评测的对比。',
    readTime: '8分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Pocket AI review',
    targetKeywords: [
      'pocket ai review',
      'pocket ai no internet',
      'pocket ai iphone app',
      'offline ai chat app iphone',
      'dataweal pocket ai',
      'on-device llama.cpp iphone app',
      'free local ai app iphone',
      'pocket ai pro unlock price',
    ],
    current_models_mentioned: ['Qwen', 'Gemma', 'Llama', 'Mistral', 'Phi', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone 12'],
    leadAnswerBlock:
      '**Pocket AI - No Internet是一款免费iPhone应用,通过[llama.cpp](https://github.com/ggml-org/llama.cpp)配合Metal加速,完全在设备端运行开放权重AI模型——无需账户,不依赖服务器,模型下载后即可完全离线使用。** 该应用由[Dataweal](https://mypocketai.app/)的开发者Faisal打造,据开发者介绍,其模型库涵盖Qwen、Gemma、Llama、Mistral、Phi和DeepSeek系列,共28个模型。文本聊天功能免费使用;付费解锁Pro版可获得设备端Whisper语音输入。该应用要求iPhone 12或更新机型,开发者将此归因于推理受内存限制。读者也可参阅[Private LLM评测](/zh/power-local-llm/private-llm-review)或[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review)作为对比。',
    quickAnswerTop: {
      en: {
        question: 'Is Pocket AI - No Internet worth downloading?',
        answer:
          'Yes, if you want a free, no-account iPhone app that runs open-weight AI models fully offline via llama.cpp, and you own an iPhone 12 or newer. The Pro unlock is optional and only adds on-device Whisper voice input — text chat is free (see Pricing below for the cost). Skip it if you need a larger, more mature curated model library or Android/desktop support; compare it against Private LLM or PocketPal AI first.',
        bullets: [
          'Free to download and use for text chat; no account or sign-in required.',
          'A paid, one-time Pro unlock adds on-device Whisper voice dictation (see Pricing below).',
          'Runs open-weight models via llama.cpp with Metal acceleration: Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, 28 models in the catalogue per the developer.',
          'Works fully offline (airplane mode) once a model is downloaded.',
          'Requires an iPhone 12 or newer; the app is closed-source, per the developer.',
        ],
        updatedDate: '2026-09-11',
      },
      zh: {
        question: 'Pocket AI - No Internet值得下载吗?',
        answer:
          '如果您想要一款免费、无需账户、通过llama.cpp完全离线运行开放权重AI模型的iPhone应用,并且拥有iPhone 12或更新机型,那么值得下载。Pro解锁是可选的,仅增加设备端Whisper语音输入——文本聊天是免费的(价格见下方定价部分)。如果您需要更大、更成熟的精选模型库,或需要Android/桌面端支持,则可以跳过;建议先与Private LLM或PocketPal AI进行比较。',
        bullets: [
          '免费下载并用于文本聊天;无需账户或登录。',
          '付费的一次性Pro解锁可增加设备端Whisper语音听写功能(价格见下方定价部分)。',
          '通过llama.cpp配合Metal加速运行开放权重模型:Qwen、Gemma、Llama、Mistral、Phi和DeepSeek系列,据开发者介绍模型库共有28个模型。',
          '模型下载完成后可完全离线运行(飞行模式)。',
          '需要iPhone 12或更新机型;据开发者介绍,该应用为闭源。',
        ],
        updatedDate: '2026-09-11',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '获取Pocket AI', anchor: 'get-it' },
      { label: 'Pocket AI是什么', anchor: 'what-is-pocket-ai' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '价格:免费应用与一次性Pro解锁', anchor: 'pricing' },
      { label: '支持的模型', anchor: 'models' },
      { label: '硬件要求:为何需要iPhone 12或更新机型', anchor: 'requirements' },
      { label: '隐私与离线运行', anchor: 'privacy' },
      { label: '来自开发者', anchor: 'from-the-maker' },
      { label: '权衡:优点与局限', anchor: 'tradeoffs' },
      { label: 'Pocket AI与其他替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用Pocket AI', anchor: 'who-should-use' },
      { label: '谁不适合使用Pocket AI', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '总结', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pocket AI - No Internet是Dataweal开发者Faisal打造的一款免费iPhone应用,通过llama.cpp配合Metal加速,完全在设备端运行开放权重AI模型(Qwen、Gemma、Llama、Mistral、Phi、DeepSeek),直接通过苹果App Store分发,提供付费的Pro解锁以获得设备端Whisper语音输入。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想象成一款免费的聊天应用,只需一次性将AI模型下载到您的iPhone上,之后即可在飞行模式下使用——无需账户、无需服务器,也无需联网即可真正进行聊天。',
          },
        ],
        items: [
          '价格:免费[下载](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)并用于文本聊天;付费的Pro解锁可增加设备端Whisper语音输入(详见下方价格部分)。',
          '开发者:[Dataweal](https://mypocketai.app/)的Faisal。',
          '引擎:[llama.cpp](https://github.com/ggml-org/llama.cpp)配合Metal加速,完全在设备端运行。',
          '模型库:据开发者介绍,涵盖Qwen、Gemma、Llama、Mistral、Phi和DeepSeek系列,共28个模型。',
          '离线:模型下载完成后可在飞行模式下运行;聊天无需账户或与服务器通信。',
          '要求:iPhone 12或更新机型——开发者将此归因于推理受内存限制。',
          '开源状态:据开发者自己声明,该应用为闭源。',
          '分发方式:可直接通过[苹果App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)获取——可搜索、经苹果审核、自动更新,不同于一些仅以旁加载、TestFlight测试版或自行编译GitHub项目形式提供的iPhone本地AI应用。',
        ],
      },
      getItPocketAI: {
        id: 'get-it',
        title: '获取Pocket AI',
        content: [
          '**Pocket AI - No Internet可直接从苹果App Store获取**——无需旁加载、TestFlight测试版,也无需自行从源代码编译。',
          '本评测是PromptQuorum[本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)的配套内容,该目录收录了跨平台的本地AI工具;Pocket AI目前尚未在其中拥有独立条目。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'iPhone(iOS)',
            '获取方式': '[App Store上的Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)',
          },
        ],
        note: '应用本身可免费下载;可选Pro解锁的费用详见下方价格部分。',
      },
      whatIsPocketAI: {
        id: 'what-is-pocket-ai',
        title: 'Pocket AI是什么',
        content: [
          '**Pocket AI - No Internet是一款iPhone应用,可下载开放权重语言模型并直接在设备上运行,没有服务器端组件。** 模型下载完成后,应用无需联网即可生成回复——推理通过[llama.cpp](https://github.com/ggml-org/llama.cpp)(一款广泛使用的开源推理引擎)在本地运行,并由苹果的Metal图形框架提供加速。',
          '该应用由[Dataweal](https://mypocketai.app/)的开发者Faisal构建和维护。据开发者介绍,其开发动机是:其他iPhone本地模型应用通常在让用户聊天之前要求提供账户、订阅或与服务器通信——Pocket AI的设计理念是不需要这些条件中的任何一个。',
          '该应用以"Pocket AI - No Internet"之名在[苹果App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)上架。本评测依据开发者对应用架构和模型库的自述,以及公开的App Store页面信息,而非独立的代码审计——该应用为闭源(见下方隐私部分)。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**设置Pocket AI只需几个步骤,无需创建账户。** 从App Store下载到获得第一条离线回复的整个过程,通常只需几分钟,再加上所选模型的下载时间。',
        ],
        numberedItems: [
          {
            title: '下载应用',
            whyItMatters: '从[苹果App Store获取Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)。应用本身免费——开始使用无需任何购买。',
          },
          {
            title: '从模型库中选择模型',
            whyItMatters: '据开发者介绍,从应用内28个模型的模型库中选择一个模型,涵盖Qwen、Gemma、Llama、Mistral、Phi和DeepSeek系列。',
          },
          {
            title: '下载模型',
            whyItMatters: '此步骤需要联网。下载大小取决于所选模型;此步骤之后的所有步骤均无需联网。',
          },
          {
            title: '完全离线聊天',
            whyItMatters: '模型下载完成后,打开飞行模式即可亲自验证离线使用的说法。聊天完全通过llama.cpp配合Metal加速在设备上运行。',
          },
          {
            title: '可选:解锁Pro版以获得语音输入',
            whyItMatters: '一次性付费的应用内购买可解锁设备端Whisper语音输入用于听写(详见下方价格部分)。这是可选的——文本聊天无需此功能即可使用。',
          },
        ],
        note: '确切的下载大小和当前模型列表可能会在App Store更新之间发生变化——在流量有限的套餐下进行大型下载前,请在应用自身的模型库中确认最新信息。',
      },
      pricing: {
        id: 'pricing',
        title: '价格:免费应用与一次性Pro解锁',
        itemHeadings: true,
        content: [
          '**Pocket AI - No Internet可免费下载并用于文本聊天。** 一次性4.99美元的应用内购买可解锁Pro等级,增加设备端Whisper语音输入功能。无论是基础应用还是Pro解锁,都没有订阅费。',
        ],
        columns: ['您支付的费用', '涵盖的内容', '不包含的内容'],
        rows: [
          {
            '您支付的费用': '免费',
            '涵盖的内容': '使用28个模型库中任意模型的完整文本聊天,下载后完全离线',
            '不包含的内容': '需要Pro解锁的设备端Whisper语音输入',
          },
          {
            '您支付的费用': '4.99美元(一次性)',
            '涵盖的内容': '在免费等级基础上增加设备端Whisper语音输入——无订阅',
            '不包含的内容': '任何经常性费用——这是一次性购买,不是订阅',
          },
        ],
        note: 'App Store价格可能会在不另行通知的情况下变化,且因地区而异。购买前请在[App Store页面](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)确认当前价格。',
      },
      models: {
        id: 'models',
        title: '支持的模型',
        content: [
          '**据开发者介绍,Pocket AI的模型库包含28个开放权重模型,涵盖Qwen、Gemma、Llama、Mistral、Phi和DeepSeek系列。** 该数字直接来自开发者,并在与PromptQuorum沟通期间从最初描述的"超过25个"模型上调——该应用的模型库似乎正在积极扩展,而非固定不变。',
          '模型通过开源推理引擎[llama.cpp](https://github.com/ggml-org/llama.cpp)运行,苹果的Metal图形框架在设备端提供GPU加速。截至本评测时,开发者尚未公布针对特定模型/设备组合的独立验证基准数据;有性能关键需求的读者应在依赖之前先在自己的iPhone上测试具体模型。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '硬件要求:为何需要iPhone 12或更新机型',
        content: [
          '**Pocket AI需要iPhone 12或更新机型。** 据开发者介绍,设定这一门槛是因为模型推理受内存限制——在设备端运行语言模型需要足够的统一内存来容纳模型权重和工作上下文,而较旧的iPhone没有足够的内存来令人满意地运行模型库中的模型。',
          '这是开发者自己给出的理由,并非独立测试得出的界限。拥有处于或接近最低要求机型的读者应预期模型库中较小的模型才是更现实的选择,而非最大的模型。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与离线运行',
        content: [
          '**Pocket AI不需要账户,也无需登录。** 由于该应用设计为在模型下载后完全在设备端运行推理,因此在正常使用文本聊天时没有聊天数据需要发送到服务器——这不仅仅是一项声明的政策,架构本身就使对话留在手机上。',
          '据开发者介绍,Pro等级的语音输入同样通过Whisper在设备端运行,这意味着听写音频在本地处理,而不会发送到转录服务器。',
        ],
        items: [
          '**无需账户。** 无需创建个人资料或登录,即可下载并使用该应用进行文本聊天。',
          '**下载后离线运行。** 模型下载完成后,飞行模式不会阻止聊天。',
          '**设备端语音输入。** 据开发者介绍,Pro等级基于Whisper的听写功能在本地运行,而非通过云端转录API。',
          '**闭源应用。** 由于该应用的代码未公开,其架构和数据处理方面的说法依赖于开发者自身的陈述和公开的App Store页面信息,而非独立的代码审计。',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '来自开发者',
        content: [
          'PromptQuorum请Dataweal公司负责开发Pocket AI的开发者Faisal描述这款应用,以及其定价和平台选择背后的考量。以下内容以开发者本人的话呈现,为便于阅读重新整理为段落,并非PromptQuorum独立的编辑评估:',
          '"Pocket AI的诞生源于一个小小的不满。iPhone上每一款优秀的本地模型应用,都会先向我索取点什么:账户、订阅,或是与服务器的往返通信。我一个都不想要。',
          '这款应用通过llama.cpp配合Metal加速,直接在iPhone上运行开放权重模型。Qwen、Gemma、Llama、Mistral、Phi和DeepSeek都在模型库中,如今共有28个模型。没有账户,也没有服务器。模型下载完成后,应用可在飞行模式下使用:无论是在飞机上、隧道里,还是在一台从未登录过任何账户的手机上。语音输入使用设备端的Whisper,因此听写内容同样不会离开手机。',
          '定价遵循同样的理念。应用免费,Pro解锁一次性收费4.99美元。没有订阅。我宁愿卖出一件东西,也不愿出租它。',
          '它不是什么:它不是开源的,也不适用于旧硬件。iPhone 12或更新机型是真实的要求,因为模型推理受内存限制,而这一点没有诚实的绕过方法。',
          '这是一款只承诺一件事的小应用。您的对话留在您的手机上。这就是产品的全部。"',
        ],
        note: '——Faisal,开发者,Dataweal',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡:优点与局限',
        columns: ['优点', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优点': '免费基础应用',
            '实际使用中的意义': '使用完整的28个模型库进行文本聊天不花一分钱,也无需账户。',
            '局限/注意事项': '语音输入需要付费Pro解锁;并非免费包含。',
          },
          {
            '优点': '一次性付费Pro解锁',
            '实际使用中的意义': '无需为语音功能追踪或取消订阅——只需付费一次。',
            '局限/注意事项': '据开发者自述,它仅增加语音输入功能,不会解锁其他模型或功能。',
          },
          {
            '优点': '涵盖主要开放权重系列的28个模型库',
            '实际使用中的意义': '无需自行寻找模型文件,即可在Qwen、Gemma、Llama、Mistral、Phi和DeepSeek之间进行选择。',
            '局限/注意事项': '模型库由开发者精选,本评测未在具体iPhone硬件上独立测试全部28个模型的性能。',
          },
          {
            '优点': '无需账户,下载后完全离线',
            '实际使用中的意义': '无需注册任何内容,聊天即可在飞行模式下运行。',
            '局限/注意事项': '由于该应用为闭源,离线和不收集数据的说法依赖于开发者自身的陈述,而非独立的代码审计。',
          },
          {
            '优点': '配备Metal加速的llama.cpp',
            '实际使用中的意义': '使用广泛采用的开源推理引擎,而非专有的自研引擎。',
            '局限/注意事项': '实际速度取决于具体模型和iPhone机型;本评测未公布独立的基准测试数据。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Pocket AI与其他替代方案对比',
        columns: ['应用', '平台', '价格', '模型灵活性', '主要区别'],
        rows: [
          {
            '应用': 'Pocket AI - No Internet',
            '平台': '仅限iPhone',
            '价格': '免费;一次性付费Pro解锁获得语音输入',
            '模型灵活性': '据开发者介绍,28个模型库(Qwen、Gemma、Llama、Mistral、Phi、DeepSeek)',
            '主要区别': '免费基础应用;闭源;在此对比的应用中历史最短',
          },
          {
            '应用': '[Private LLM](/zh/power-local-llm/private-llm-review)',
            '平台': 'iPhone/iPad/Mac(仅限苹果设备)',
            '价格': '4.99美元一次性购买',
            '模型灵活性': '140多个精选模型;OmniQuant/GPTQ量化',
            '主要区别': '从一开始就收费,但拥有更大的精选库和三年App Store历史',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iPhone/iPad,部分支持Android',
            '价格': '免费,开源',
            '模型灵活性': '用户从Hugging Face等渠道获取的任意GGUF文件',
            '主要区别': '与Pocket AI的闭源应用不同,它免费且开源;需要更多手动模型管理',
          },
          {
            '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
            '平台': 'iPhone/iPad/Mac',
            '价格': '免费',
            '模型灵活性': '基于Apple MLX构建;可访问苹果的设备端基础模型',
            '主要区别': '专门基于苹果MLX框架(而非llama.cpp)构建的免费替代方案',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化——决定前请在各应用自身的页面上核实当前信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Pocket AI',
        items: [
          '**希望使用免费、无需账户的离线AI聊天应用的iPhone用户。** 基础应用不花一分钱,也无需注册即可开始与模型库中的任意模型聊天。',
          '**特别想避免订阅的读者。** 无论是免费等级还是Pro解锁,都是一次性付费——两种情况下都没有经常性费用。',
          '**希望在不订阅的情况下使用设备端语音输入的用户。** Pro解锁是一次性付费购买,用于据开发者介绍在本地运行的基于Whisper的听写功能。',
          '**已经在比较多款iPhone本地AI应用的读者。** 凭借涵盖主要开放权重系列的28个模型库,Pocket AI是与Private LLM等付费应用相比合理的免费参照点。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用Pocket AI',
        items: [
          '**Android、Windows、Mac或Linux用户。** Pocket AI是一款仅限iPhone的应用;在Google Play、Microsoft Store、Mac App Store或任何Linux软件包仓库中均未上架。',
          '**拥有iPhone 11或更旧机型的用户。** 据开发者介绍,由于推理受内存限制,该应用需要iPhone 12或更新机型。',
          '**在信任一款应用之前需要看到成熟记录的读者。** Pocket AI在App Store上的历史比Private LLM等替代方案更短——非常看重评论数量和历史记录的读者应考虑这一点。',
          '**希望自行审计应用源代码的读者。** 据开发者介绍,Pocket AI为闭源。像[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)这样的开源替代方案允许独立代码审查。',
          '**希望共享和集中管理部署的团队或组织。** Pocket AI是一款面向单一用户、单一设备的消费级应用,没有管理控制台或团队计费功能。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Pocket AI - No Internet免费吗?',
            a: '是的。该应用可免费下载,并用于与模型库中任意模型进行文本聊天。可选Pro解锁的费用详见上方价格部分。',
          },
          {
            q: '谁开发了Pocket AI - No Internet?',
            a: 'Pocket AI由[Dataweal](https://mypocketai.app/)的Faisal开发。',
          },
          {
            q: 'Pocket AI支持哪些模型?',
            a: '据开发者介绍,该应用的模型库包含28个开放权重模型,涵盖Qwen、Gemma、Llama、Mistral、Phi和DeepSeek系列,通过配备Metal加速的[llama.cpp](https://github.com/ggml-org/llama.cpp)运行。',
          },
          {
            q: 'Pocket AI在没有网络连接的情况下能用吗?',
            a: '可以,模型下载完成后即可使用。该应用仅在下载模型或应用更新时需要联网;此后聊天完全离线运行,包括在飞行模式下。',
          },
          {
            q: '运行Pocket AI需要什么样的iPhone?',
            a: '据开发者介绍,需要iPhone 12或更新机型。开发者表示,这一要求的存在是因为模型推理受内存限制——较旧的iPhone没有足够的统一内存来令人满意地运行模型库中的模型。',
          },
          {
            q: 'Pocket AI - No Internet是开源的吗?',
            a: '不是。开发者明确表示该应用为闭源。',
          },
          {
            q: 'Pro解锁包含什么?',
            a: '一次性Pro解锁(详见上方价格部分)可增加用于听写的设备端Whisper语音输入功能。据开发者自述,除语音输入外,它不会增加额外的模型或功能。',
          },
          {
            q: 'Pocket AI是否收集个人数据或需要账户?',
            a: '使用该应用进行文本聊天无需账户或登录。由于该应用为闭源,本评测依赖开发者自身的陈述和公开的App Store页面信息,而非独立的代码审计。',
          },
          {
            q: 'Pocket AI与Private LLM或PocketPal AI相比如何?',
            a: 'Pocket AI免费,可选一次性付费语音解锁(详见上方价格部分),闭源,且在App Store上的历史较短。[Private LLM](/zh/power-local-llm/private-llm-review)从发布之初就是一次性支付4.99美元,拥有更大、更成熟的140多个模型库。[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)免费且开源,但需要手动获取GGUF模型文件。请根据您最看重成本、模型库规模与成熟度,还是源代码透明度来做出选择。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '总结',
        content: [
          'Pocket AI - No Internet兑现了一个简单的承诺:一款免费iPhone应用,通过llama.cpp完全在设备端运行开放权重模型,无需账户,不与服务器通信,通过苹果App Store分发,而非旁加载或测试版。',
          '涵盖Qwen、Gemma、Llama、Mistral、Phi和DeepSeek系列的28个模型库,对于一款免费应用来说是一个合理的起点,而开发者对iPhone 12最低要求的自述理由——推理受内存限制——是一个可信且具体的解释,而非模糊的硬件要求。',
          '使本评测保持谨慎而非热情的原因,在于该应用尚属年轻且闭源:隐私和离线方面的说法依赖于开发者的一面之词,而非独立代码审查,该应用的历史记录也比更成熟的替代方案更短。',
          '希望获得免费、无订阅、具有合理设备端隐私保障的聊天应用的读者可以一试;更看重成熟的App Store记录和可独立审计源代码的读者,则应改为从[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)入手,或为[Private LLM](/zh/power-local-llm/private-llm-review)预留预算。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store上的Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — 价格和平台兼容性。',
          '[Pocket AI官方网站](https://mypocketai.app/) — 产品概述。',
          '2026年9月8日之前提供给PromptQuorum的、与Dataweal开发者Faisal的直接通信 — 应用描述、模型库数量、定价模式、硬件要求的理由以及开源状态。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Private LLM评测](/zh/power-local-llm/private-llm-review) — 一款付费、更成熟的纯苹果替代方案,拥有更大的模型库。',
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) — 免费开源的替代方案,需要手动导入GGUF。',
          '[2026年iPhone最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 完整的iPhone应用汇总。',
          '[Locally AI评测](/zh/power-local-llm/locally-ai-review) — 基于Apple MLX的免费替代方案。',
          '[完整的本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory) — 跨平台本地LLM工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocket-ai-review-hero-es.webp',
    title: 'Reseña de Pocket AI (2026): chat de IA offline en el dispositivo para iPhone',
    seoTitle: 'Reseña Pocket AI 2026: chat de IA offline en iPhone',
    intro:
      '[Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702), creada por el desarrollador Faisal en [Dataweal](https://mypocketai.app/), es una aplicación gratuita para iPhone que ejecuta modelos de lenguaje de pesos abiertos directamente en el dispositivo mediante [llama.cpp](https://github.com/ggml-org/llama.cpp) con aceleración Metal. No requiere cuenta ni comunicación con un servidor, y una vez descargado un modelo, la app funciona en modo avión. La app en sí es gratuita; un desbloqueo Pro de pago añade entrada de voz Whisper en el dispositivo. A diferencia de muchas apps de IA local para iPhone que solo se distribuyen como sideload, beta de TestFlight o proyecto de GitHub para compilar uno mismo, Pocket AI se distribuye directamente a través de la App Store de Apple. Esta reseña cubre qué hace la app, cuánto cuesta y qué hardware necesita.',
    metaDescription:
      'Reseña de Pocket AI - No Internet 2026: app gratuita para iPhone de chat de IA offline en el dispositivo vía llama.cpp, desbloqueo Pro de pago único para entrada de voz Whisper, sin suscripción. Precios, requisitos y distribución en la App Store.',
    twitterDescription:
      'Reseña de Pocket AI - No Internet 2026: una app gratuita para iPhone que ejecuta modelos de pesos abiertos en el dispositivo vía llama.cpp con aceleración Metal. Desbloqueo Pro de pago único de 4,99 $ para entrada de voz Whisper en el dispositivo. Sin cuenta, sin suscripción, funciona en modo avión.',
    audience:
      'Usuarios de iPhone que evalúan una app de chat de IA local, gratuita y offline — cubre precios, el desbloqueo Pro, familias de modelos compatibles, requisitos de hardware y comparación con otras reseñas de apps individuales en este sitio.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Pocket AI review',
    targetKeywords: [
      'pocket ai review',
      'pocket ai no internet',
      'pocket ai iphone app',
      'offline ai chat app iphone',
      'dataweal pocket ai',
      'on-device llama.cpp iphone app',
      'free local ai app iphone',
      'pocket ai pro unlock price',
    ],
    current_models_mentioned: ['Qwen', 'Gemma', 'Llama', 'Mistral', 'Phi', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone 12'],
    leadAnswerBlock:
      '**Pocket AI - No Internet es una app gratuita para iPhone que ejecuta modelos de IA de pesos abiertos completamente en el dispositivo mediante [llama.cpp](https://github.com/ggml-org/llama.cpp) con aceleración Metal — sin cuenta, sin servidor, y utilizable completamente offline una vez descargado un modelo.** Creada por Faisal en [Dataweal](https://mypocketai.app/), su catálogo abarca, según el desarrollador, 28 modelos de las familias Qwen, Gemma, Llama, Mistral, Phi y DeepSeek. La app es gratuita para chat de texto; un desbloqueo Pro de pago añade entrada de voz Whisper en el dispositivo. Requiere un iPhone 12 o más reciente, algo que el desarrollador atribuye a que la inferencia está limitada por la memoria. Para comparar, consulte también la [reseña de Private LLM](/es/power-local-llm/private-llm-review) o la [reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Pocket AI - No Internet worth downloading?',
        answer:
          'Yes, if you want a free, no-account iPhone app that runs open-weight AI models fully offline via llama.cpp, and you own an iPhone 12 or newer. The Pro unlock is optional and only adds on-device Whisper voice input — text chat is free (see Pricing below for the cost). Skip it if you need a larger, more mature curated model library or Android/desktop support; compare it against Private LLM or PocketPal AI first.',
        bullets: [
          'Free to download and use for text chat; no account or sign-in required.',
          'A paid, one-time Pro unlock adds on-device Whisper voice dictation (see Pricing below).',
          'Runs open-weight models via llama.cpp with Metal acceleration: Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, 28 models in the catalogue per the developer.',
          'Works fully offline (airplane mode) once a model is downloaded.',
          'Requires an iPhone 12 or newer; the app is closed-source, per the developer.',
        ],
        updatedDate: '2026-09-11',
      },
      es: {
        question: '¿Vale la pena descargar Pocket AI - No Internet?',
        answer:
          'Sí, si busca una app gratuita para iPhone sin cuenta que ejecute modelos de IA de pesos abiertos completamente offline mediante llama.cpp, y posee un iPhone 12 o más reciente. El desbloqueo Pro es opcional y solo añade entrada de voz Whisper en el dispositivo — el chat de texto es gratuito (precio en la sección Precios más abajo). Sáltesela si necesita una biblioteca de modelos más grande y madura, o compatibilidad con Android/escritorio; compárela primero con Private LLM o PocketPal AI.',
        bullets: [
          'Gratis para descargar y usar en chat de texto; no requiere cuenta ni inicio de sesión.',
          'Un desbloqueo Pro de pago único añade dictado por voz Whisper en el dispositivo (precio en la sección Precios más abajo).',
          'Ejecuta modelos de pesos abiertos vía llama.cpp con aceleración Metal: familias Qwen, Gemma, Llama, Mistral, Phi y DeepSeek, 28 modelos en el catálogo según el desarrollador.',
          'Funciona completamente offline (modo avión) una vez descargado un modelo.',
          'Requiere un iPhone 12 o más reciente; la app es de código cerrado, según el desarrollador.',
        ],
        updatedDate: '2026-09-11',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Cómo conseguir Pocket AI', anchor: 'get-it' },
      { label: 'Qué es Pocket AI', anchor: 'what-is-pocket-ai' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Precios: app gratuita, desbloqueo Pro único', anchor: 'pricing' },
      { label: 'Modelos compatibles', anchor: 'models' },
      { label: 'Requisitos: por qué se necesita iPhone 12 o más reciente', anchor: 'requirements' },
      { label: 'Privacidad y funcionamiento offline', anchor: 'privacy' },
      { label: 'La voz del creador', anchor: 'from-the-maker' },
      { label: 'Compensaciones: ventajas frente a limitaciones', anchor: 'tradeoffs' },
      { label: 'Pocket AI frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Pocket AI', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Pocket AI', anchor: 'who-should-not-use' },
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
            text: 'Pocket AI - No Internet es una app gratuita para iPhone del desarrollador Faisal en Dataweal que ejecuta modelos de IA de pesos abiertos (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek) completamente en el dispositivo mediante llama.cpp con aceleración Metal, distribuida directamente a través de la App Store de Apple, con un desbloqueo Pro de pago para entrada de voz Whisper en el dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Piense en ella como una app de chat gratuita que descarga un modelo de IA una vez en su iPhone, de modo que después funciona en modo avión, sin cuenta, sin servidor y sin necesidad de conexión a internet para chatear de verdad.',
          },
        ],
        items: [
          'Precio: gratis para [descargar](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) y usar en chat de texto; un desbloqueo Pro de pago añade entrada de voz Whisper en el dispositivo (vea Precios más abajo).',
          'Desarrollador: Faisal, en [Dataweal](https://mypocketai.app/).',
          'Motor: [llama.cpp](https://github.com/ggml-org/llama.cpp) con aceleración Metal, ejecutado completamente en el dispositivo.',
          'Catálogo de modelos: 28 modelos, según el desarrollador, de las familias Qwen, Gemma, Llama, Mistral, Phi y DeepSeek.',
          'Offline: funciona en modo avión una vez descargado un modelo; sin cuenta ni comunicación con servidor para chatear.',
          'Requisito: iPhone 12 o más reciente — el desarrollador lo atribuye a que la inferencia está limitada por la memoria.',
          'Estado de código abierto: código cerrado, según la propia declaración del desarrollador.',
          'Distribución: disponible directamente a través de la [App Store de Apple](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — se puede buscar, revisada por Apple y se actualiza automáticamente, a diferencia de algunas apps de IA local para iPhone que solo se distribuyen como sideload, beta de TestFlight o proyecto de GitHub para compilar uno mismo.',
        ],
      },
      getItPocketAI: {
        id: 'get-it',
        title: 'Cómo conseguir Pocket AI',
        content: [
          '**Pocket AI - No Internet está disponible directamente en la App Store de Apple** — no requiere sideloading, ni beta de TestFlight, ni compilarla desde el código fuente.',
          'Esta reseña complementa el [directorio de software LLM local](/es/power-local-llm/local-llm-software-directory) de PromptQuorum, que indexa herramientas de IA local en todas las plataformas; Pocket AI aún no tiene su propia ficha allí.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          {
            'Plataforma': 'iPhone (iOS)',
            'Cómo conseguirla': '[Pocket AI - No Internet en la App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)',
          },
        ],
        note: 'La app en sí es gratuita para descargar; vea la sección de Precios más abajo para conocer el costo del desbloqueo Pro opcional.',
      },
      whatIsPocketAI: {
        id: 'what-is-pocket-ai',
        title: 'Qué es Pocket AI',
        content: [
          '**Pocket AI - No Internet es una app para iPhone que descarga modelos de lenguaje de pesos abiertos y los ejecuta directamente en el dispositivo, sin componente en servidor.** Una vez descargado un modelo, la app no necesita conexión a internet para generar una respuesta — la inferencia se ejecuta localmente mediante [llama.cpp](https://github.com/ggml-org/llama.cpp), un motor de inferencia de código abierto ampliamente usado, acelerado por el framework gráfico Metal de Apple.',
          'La app está construida por el desarrollador Faisal en [Dataweal](https://mypocketai.app/). Según el desarrollador, la motivación fue que otras apps de modelos locales para iPhone normalmente pedían una cuenta, una suscripción o comunicación con un servidor antes de permitir chatear — Pocket AI está diseñada para no necesitar nada de eso.',
          'La app está disponible en la [App Store de Apple](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) bajo el nombre "Pocket AI - No Internet". Esta reseña se basa en la propia descripción del desarrollador sobre la arquitectura y el catálogo de modelos de la app, y en la ficha pública de la App Store, no en una auditoría de código independiente — la app es de código cerrado (vea la sección de Privacidad más abajo).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**Configurar Pocket AI toma unos pocos pasos y no requiere crear una cuenta.** Todo el proceso, desde la descarga en la App Store hasta la primera respuesta offline, suele tardar unos minutos más el tiempo que tarde en descargarse el modelo elegido.',
        ],
        numberedItems: [
          {
            title: 'Descargar la app',
            whyItMatters: 'Obtenga [Pocket AI - No Internet en la App Store de Apple](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702). La app en sí es gratuita — no se requiere ninguna compra para empezar.',
          },
          {
            title: 'Elegir un modelo del catálogo',
            whyItMatters: 'Elija un modelo del catálogo dentro de la app de 28 modelos de las familias Qwen, Gemma, Llama, Mistral, Phi y DeepSeek, según el desarrollador.',
          },
          {
            title: 'Descargar el modelo',
            whyItMatters: 'Este paso requiere conexión a internet. El tamaño de la descarga depende del modelo elegido; ningún paso posterior necesita conexión de red.',
          },
          {
            title: 'Chatear completamente offline',
            whyItMatters: 'Una vez descargado el modelo, active el modo avión para verificar usted mismo la afirmación de funcionamiento offline. El chat se ejecuta mediante llama.cpp con aceleración Metal, completamente en el dispositivo.',
          },
          {
            title: 'Opcional: desbloquear Pro para entrada de voz',
            whyItMatters: 'Una compra dentro de la app de pago único desbloquea la entrada de voz Whisper en el dispositivo para dictado (vea Precios más abajo). Esto es opcional — el chat de texto funciona sin ello.',
          },
        ],
        note: 'Los tamaños de descarga exactos y la lista de modelos actual pueden cambiar entre actualizaciones de la App Store — confirme los detalles actuales en el catálogo de modelos propio de la app antes de comprometerse a una descarga grande con un plan de datos limitado.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios: app gratuita, desbloqueo Pro único',
        itemHeadings: true,
        content: [
          '**Pocket AI - No Internet es gratuita para descargar y usar en chat de texto.** Una compra dentro de la app de pago único de 4,99 $ desbloquea el nivel Pro, que añade entrada de voz Whisper en el dispositivo. Ni la app base ni el desbloqueo Pro tienen suscripción.',
        ],
        columns: ['Lo que paga', 'Lo que cubre', 'Lo que no incluye'],
        rows: [
          {
            'Lo que paga': 'Gratis',
            'Lo que cubre': 'Chat de texto completo con cualquier modelo del catálogo de 28 modelos, completamente offline tras la descarga',
            'Lo que no incluye': 'Entrada de voz Whisper en el dispositivo, que requiere el desbloqueo Pro',
          },
          {
            'Lo que paga': '4,99 $ (pago único)',
            'Lo que cubre': 'Entrada de voz Whisper en el dispositivo añadida sobre el nivel gratuito — sin suscripción',
            'Lo que no incluye': 'Cualquier costo recurrente — esta es una compra única, no una suscripción',
          },
        ],
        note: 'Los precios de la App Store pueden cambiar sin previo aviso y variar según la región. Confirme el precio actual en la [ficha de la App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) antes de comprar.',
      },
      models: {
        id: 'models',
        title: 'Modelos compatibles',
        content: [
          '**El catálogo de Pocket AI incluye, según el desarrollador, 28 modelos de pesos abiertos de las familias Qwen, Gemma, Llama, Mistral, Phi y DeepSeek.** Esta cifra proviene directamente del desarrollador y se revisó al alza durante el contacto con PromptQuorum respecto a una descripción inicial de "más de 25" modelos — el catálogo de la app parece estar en expansión activa en lugar de ser fijo.',
          'Los modelos se ejecutan mediante [llama.cpp](https://github.com/ggml-org/llama.cpp), un motor de inferencia de código abierto, con el framework gráfico Metal de Apple proporcionando aceleración de GPU en el dispositivo. El desarrollador no ha publicado cifras de referencia verificadas de forma independiente para combinaciones específicas de modelo/dispositivo al momento de esta reseña; los lectores con necesidades críticas de rendimiento deberían probar un modelo específico en su propio iPhone antes de confiar en él.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos: por qué se necesita iPhone 12 o más reciente',
        content: [
          '**Pocket AI requiere un iPhone 12 o más reciente.** Según el desarrollador, este mínimo existe porque la inferencia de modelos está limitada por la memoria — ejecutar un modelo de lenguaje en el dispositivo requiere suficiente memoria unificada para contener los pesos del modelo y el contexto de trabajo, y los iPhone más antiguos no tienen suficiente para ejecutar aceptablemente los modelos del catálogo.',
          'Este es el razonamiento propio del desarrollador, no un límite verificado de forma independiente mediante pruebas. Los lectores con un iPhone en el mínimo o cerca de él deberían esperar que los modelos más pequeños del catálogo sean la opción más realista, en lugar de los más grandes.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y funcionamiento offline',
        content: [
          '**Pocket AI no requiere cuenta ni inicio de sesión.** Dado que la app está diseñada para ejecutar la inferencia completamente en el dispositivo tras descargar un modelo, no hay datos de chat que enviar a un servidor durante el uso normal del chat de texto — es la arquitectura en sí, no solo una política declarada, la que mantiene la conversación en el teléfono.',
          'La entrada de voz del nivel Pro también se ejecuta en el dispositivo mediante Whisper, según el desarrollador, lo que significa que el audio del dictado se procesa localmente en lugar de enviarse a un servidor de transcripción.',
        ],
        items: [
          '**No se requiere cuenta.** La app se puede descargar y usar para chat de texto sin crear un perfil ni iniciar sesión.',
          '**Offline tras la descarga.** Una vez descargado un modelo, el modo avión no bloquea el chat.',
          '**Entrada de voz en el dispositivo.** El dictado basado en Whisper del nivel Pro se ejecuta localmente, según el desarrollador, en lugar de mediante una API de transcripción en la nube.',
          '**App de código cerrado.** Dado que el código de la app no está publicado, sus afirmaciones sobre arquitectura y manejo de datos se basan en las propias declaraciones del desarrollador y en la ficha pública de la App Store, no en una auditoría de código independiente.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'La voz del creador',
        content: [
          'PromptQuorum le pidió a Faisal, el desarrollador de Pocket AI en Dataweal, que describiera la app y el razonamiento detrás de sus decisiones de precio y plataforma. Lo siguiente se presenta como las propias palabras del desarrollador, reorganizado en párrafos para facilitar la lectura, no como una evaluación editorial independiente de PromptQuorum:',
          '"Pocket AI existe por una pequeña frustración. Cada buena app de modelo local en iPhone me pedía primero algo: una cuenta, una suscripción o comunicación con un servidor. No quería nada de eso.',
          'La app ejecuta modelos de pesos abiertos directamente en el iPhone mediante llama.cpp con aceleración Metal. Qwen, Gemma, Llama, Mistral, Phi y DeepSeek están todos en el catálogo, hoy son 28 modelos. No hay cuenta ni servidor. Una vez descargado un modelo, la app funciona en modo avión: en un avión, en un túnel, o en un teléfono que nunca ha iniciado sesión en nada. La entrada de voz usa Whisper, en el dispositivo, así que el dictado tampoco sale nunca del teléfono.',
          'Los precios siguen la misma idea. La app es gratuita y el desbloqueo Pro cuesta 4,99 $ una sola vez. Sin suscripción. Prefiero vender algo antes que alquilarlo.',
          'Lo que no es: no es de código abierto, y no está pensada para hardware antiguo. Un iPhone 12 o más reciente es un requisito real, porque la inferencia de modelos está limitada por la memoria y no hay una forma honesta de evitarlo.',
          'Es una app pequeña con una sola promesa. Su conversación se queda en su teléfono. Ese es todo el producto."',
        ],
        note: '— Faisal, desarrollador, Dataweal',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compensaciones: ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'App base gratuita',
            'Qué significa en el uso real': 'El chat de texto con el catálogo completo de 28 modelos no cuesta nada y no requiere cuenta.',
            'Limitación / advertencia': 'La entrada de voz requiere el desbloqueo Pro de pago; no está incluida gratis.',
          },
          {
            'Ventaja': 'Desbloqueo Pro de pago único',
            'Qué significa en el uso real': 'No hay suscripción que rastrear ni cancelar para la función de voz — se paga una sola vez.',
            'Limitación / advertencia': 'Solo añade entrada de voz; según la propia descripción del desarrollador, no desbloquea modelos ni funciones adicionales más allá de eso.',
          },
          {
            'Ventaja': 'Catálogo de 28 modelos de las principales familias de pesos abiertos',
            'Qué significa en el uso real': 'Elección entre Qwen, Gemma, Llama, Mistral, Phi y DeepSeek sin tener que buscar archivos de modelo por su cuenta.',
            'Limitación / advertencia': 'El catálogo está curado por el desarrollador, y esta reseña no ha comparado de forma independiente el rendimiento de los 28 modelos en hardware específico de iPhone.',
          },
          {
            'Ventaja': 'Sin cuenta, completamente offline tras la descarga',
            'Qué significa en el uso real': 'El chat funciona en modo avión sin nada que registrar.',
            'Limitación / advertencia': 'Dado que la app es de código cerrado, las afirmaciones sobre funcionamiento offline y no recopilación de datos se basan en las propias declaraciones del desarrollador, no en una auditoría de código independiente.',
          },
          {
            'Ventaja': 'llama.cpp con aceleración Metal',
            'Qué significa en el uso real': 'Utiliza un motor de inferencia de código abierto ampliamente adoptado en lugar de uno propietario desarrollado internamente.',
            'Limitación / advertencia': 'La velocidad real depende del modelo específico y del modelo de iPhone; esta reseña no publica cifras de referencia independientes.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Pocket AI frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio', 'Flexibilidad de modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'Pocket AI - No Internet',
            'Plataformas': 'Solo iPhone',
            'Precio': 'Gratis; desbloqueo Pro de pago único para entrada de voz',
            'Flexibilidad de modelos': 'Catálogo de 28 modelos (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek), según el desarrollador',
            'Diferencia clave': 'App base gratuita; código cerrado; historial más corto de las apps comparadas aquí',
          },
          {
            'App': '[Private LLM](/es/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Precio': 'Compra única de 4,99 $',
            'Flexibilidad de modelos': '140+ modelos curados; cuantización OmniQuant/GPTQ',
            'Diferencia clave': 'De pago desde el principio, pero con una biblioteca curada mucho más grande y tres años de historial en la App Store',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, con cierto soporte para Android',
            'Precio': 'Gratis, código abierto',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF que el usuario consiga de Hugging Face u otras fuentes',
            'Diferencia clave': 'Gratis y de código abierto, a diferencia de la app de código cerrado de Pocket AI; requiere más gestión manual de modelos',
          },
          {
            'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Plataformas': 'iPhone/iPad/Mac',
            'Precio': 'Gratis',
            'Flexibilidad de modelos': 'Construida sobre Apple MLX; acceso al modelo de fundación en el dispositivo de Apple',
            'Diferencia clave': 'Alternativa gratuita construida específicamente sobre el framework MLX de Apple en lugar de llama.cpp',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia — verifique los detalles actuales en la ficha propia de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Pocket AI',
        items: [
          '**Propietarios de iPhone que quieren una app de chat de IA offline gratuita y sin cuenta.** La app base no cuesta nada y no requiere registro para empezar a chatear con cualquier modelo del catálogo.',
          '**Lectores que específicamente quieren evitar una suscripción.** Tanto el nivel gratuito como el desbloqueo Pro son de pago único — no hay cargo recurrente en ningún caso.',
          '**Usuarios que quieren entrada de voz en el dispositivo sin suscripción.** El desbloqueo Pro es una compra única para dictado basado en Whisper que, según el desarrollador, se ejecuta localmente.',
          '**Lectores que ya están comparando varias apps de IA local para iPhone.** Con un catálogo de 28 modelos de las principales familias de pesos abiertos, Pocket AI es un punto de referencia gratuito razonable junto a apps de pago como Private LLM.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Pocket AI',
        items: [
          '**Usuarios de Android, Windows, Mac o Linux.** Pocket AI es una app exclusiva para iPhone; no aparece en Google Play, Microsoft Store, Mac App Store ni en ningún repositorio de paquetes de Linux.',
          '**Propietarios de un iPhone 11 o anterior.** La app requiere un iPhone 12 o más reciente, según el desarrollador, porque la inferencia está limitada por la memoria.',
          '**Lectores que necesitan un historial establecido antes de confiar en una app.** Pocket AI es más nueva en la App Store que alternativas como Private LLM — los lectores que valoran mucho el volumen de reseñas y el historial deberían tenerlo en cuenta.',
          '**Lectores que quieren auditar ellos mismos el código fuente de la app.** Pocket AI es de código cerrado, según el desarrollador. Una alternativa de código abierto como [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) permite una revisión de código independiente.',
          '**Equipos u organizaciones que quieren una implementación compartida y gestionada de forma centralizada.** Pocket AI es una app de consumo para un solo usuario y un solo dispositivo, sin consola de administración ni facturación de equipo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Pocket AI - No Internet?',
            a: 'Sí. La app es gratuita para descargar y usar en chat de texto con cualquier modelo de su catálogo. Vea la sección de Precios arriba para conocer el costo del desbloqueo Pro opcional.',
          },
          {
            q: '¿Quién desarrolla Pocket AI - No Internet?',
            a: 'Pocket AI está desarrollada por Faisal en [Dataweal](https://mypocketai.app/).',
          },
          {
            q: '¿Qué modelos admite Pocket AI?',
            a: 'Según el desarrollador, el catálogo de la app incluye 28 modelos de pesos abiertos de las familias Qwen, Gemma, Llama, Mistral, Phi y DeepSeek, ejecutados mediante [llama.cpp](https://github.com/ggml-org/llama.cpp) con aceleración Metal.',
          },
          {
            q: '¿Funciona Pocket AI sin conexión a internet?',
            a: 'Sí, una vez descargado un modelo. La app solo necesita conexión a internet para descargar un modelo o una actualización de la app; el chat se ejecuta completamente offline después, incluso en modo avión.',
          },
          {
            q: '¿Qué iPhone necesito para ejecutar Pocket AI?',
            a: 'Un iPhone 12 o más reciente, según el desarrollador. El desarrollador declara que este requisito existe porque la inferencia de modelos está limitada por la memoria — los iPhone más antiguos no tienen suficiente memoria unificada para ejecutar aceptablemente los modelos del catálogo.',
          },
          {
            q: '¿Es Pocket AI - No Internet de código abierto?',
            a: 'No. El desarrollador declara claramente que la app es de código cerrado.',
          },
          {
            q: '¿Qué incluye el desbloqueo Pro?',
            a: 'El desbloqueo Pro de pago único (vea Precios arriba) añade entrada de voz Whisper en el dispositivo para dictado. Según la propia descripción del desarrollador, no añade modelos ni funciones adicionales más allá de la entrada de voz.',
          },
          {
            q: '¿Recopila Pocket AI datos personales o requiere una cuenta?',
            a: 'No se requiere cuenta ni inicio de sesión para usar la app en chat de texto. Dado que la app es de código cerrado, esta reseña se basa en las propias declaraciones del desarrollador y en la ficha pública de la App Store, no en una auditoría de código independiente.',
          },
          {
            q: '¿Cómo se compara Pocket AI con Private LLM o PocketPal AI?',
            a: 'Pocket AI es gratuita con un desbloqueo de voz de pago opcional de único pago (vea Precios arriba), de código cerrado, y más nueva en la App Store. [Private LLM](/es/power-local-llm/private-llm-review) es una compra única de 4,99 $ desde su lanzamiento, con una biblioteca más grande y establecida de más de 140 modelos. [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) es gratuita y de código abierto, pero requiere conseguir manualmente archivos de modelo GGUF. Elija según si valora más el costo, el tamaño y la madurez de la biblioteca de modelos, o la transparencia del código fuente.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Pocket AI - No Internet cumple una promesa sencilla: una app gratuita para iPhone que ejecuta modelos de pesos abiertos completamente en el dispositivo mediante llama.cpp, sin cuenta ni comunicación con servidor, distribuida a través de la App Store de Apple en lugar de un sideload o una beta.',
          'El catálogo de 28 modelos de las familias Qwen, Gemma, Llama, Mistral, Phi y DeepSeek es un punto de partida razonable para una app gratuita, y el propio razonamiento del desarrollador para el mínimo de iPhone 12 —inferencia limitada por la memoria— es una explicación plausible y específica en lugar de un requisito de hardware vago.',
          'Lo que hace que esta reseña sea cautelosa en lugar de entusiasta es la juventud de la app y su código cerrado: las afirmaciones sobre privacidad y funcionamiento offline se basan en la palabra del desarrollador en lugar de una revisión de código independiente, y la app tiene un historial más corto que alternativas más establecidas.',
          'Los lectores que quieran una app de chat gratuita, sin suscripción, con una historia de privacidad en el dispositivo plausible deberían probarla; los lectores que valoren más un historial establecido en la App Store y un código fuente auditable de forma independiente deberían empezar en su lugar con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o presupuestar [Private LLM](/es/power-local-llm/private-llm-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Pocket AI - No Internet en la App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — precio y compatibilidad de plataforma.',
          '[Sitio oficial de Pocket AI](https://mypocketai.app/) — resumen del producto.',
          'Correspondencia directa con Faisal, desarrollador en Dataweal, facilitada a PromptQuorum antes del 8 de septiembre de 2026 — descripción de la app, número de modelos en el catálogo, modelo de precios, razonamiento del requisito de hardware y estado de código abierto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Private LLM](/es/power-local-llm/private-llm-review) — una alternativa de pago y más establecida, exclusiva de Apple, con una biblioteca de modelos mucho más grande.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — la alternativa gratuita y de código abierto con importación manual de GGUF.',
          '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el resumen completo de apps para iPhone.',
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una alternativa gratuita basada en Apple MLX.',
          '[El directorio completo de software LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas LLM locales en todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocket-ai-review-hero-pt.webp',
    title: 'Análise do Pocket AI (2026): chat de IA offline no dispositivo para iPhone',
    seoTitle: 'Análise Pocket AI 2026: chat de IA offline no iPhone',
    intro:
      'O [Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702), criado pelo desenvolvedor Faisal na [Dataweal](https://mypocketai.app/), é um aplicativo gratuito para iPhone que executa modelos de linguagem de pesos abertos diretamente no dispositivo usando [llama.cpp](https://github.com/ggml-org/llama.cpp) com aceleração Metal. Não há conta nem comunicação com servidor, e depois que um modelo é baixado, o aplicativo funciona no modo avião. O aplicativo em si é gratuito; um desbloqueio Pro pago adiciona entrada de voz Whisper no dispositivo. Diferente de muitos aplicativos de IA local para iPhone que só são distribuídos como sideload, beta do TestFlight ou projeto do GitHub para compilar você mesmo, o Pocket AI é distribuído diretamente pela App Store da Apple. Esta análise aborda o que o aplicativo faz, quanto custa e qual hardware exige.',
    metaDescription:
      'Análise do Pocket AI - No Internet 2026: aplicativo gratuito para iPhone de chat de IA offline no dispositivo via llama.cpp, desbloqueio Pro pago e único para entrada de voz Whisper, sem assinatura. Preços, requisitos e distribuição na App Store.',
    twitterDescription:
      'Análise do Pocket AI - No Internet 2026: um aplicativo gratuito para iPhone que executa modelos de pesos abertos no dispositivo via llama.cpp com aceleração Metal. Desbloqueio Pro de pagamento único de US$ 4,99 para entrada de voz Whisper no dispositivo. Sem conta, sem assinatura, funciona no modo avião.',
    audience:
      'Usuários de iPhone que estão avaliando um aplicativo de chat de IA local, gratuito e offline — aborda preços, o desbloqueio Pro, famílias de modelos suportadas, requisitos de hardware e comparação com outras análises de aplicativos individuais neste site.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Pocket AI review',
    targetKeywords: [
      'pocket ai review',
      'pocket ai no internet',
      'pocket ai iphone app',
      'offline ai chat app iphone',
      'dataweal pocket ai',
      'on-device llama.cpp iphone app',
      'free local ai app iphone',
      'pocket ai pro unlock price',
    ],
    current_models_mentioned: ['Qwen', 'Gemma', 'Llama', 'Mistral', 'Phi', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone 12'],
    leadAnswerBlock:
      '**O Pocket AI - No Internet é um aplicativo gratuito para iPhone que executa modelos de IA de pesos abertos totalmente no dispositivo usando [llama.cpp](https://github.com/ggml-org/llama.cpp) com aceleração Metal — sem conta, sem servidor, e utilizável totalmente offline depois que um modelo é baixado.** Criado por Faisal na [Dataweal](https://mypocketai.app/), seu catálogo abrange, segundo o desenvolvedor, 28 modelos das famílias Qwen, Gemma, Llama, Mistral, Phi e DeepSeek. O aplicativo é gratuito para chat de texto; um desbloqueio Pro pago adiciona entrada de voz Whisper no dispositivo. Ele exige um iPhone 12 ou mais recente, algo que o desenvolvedor atribui ao fato de a inferência ser limitada pela memória. Para comparar, veja também a [análise do Private LLM](/pt/power-local-llm/private-llm-review) ou a [análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Pocket AI - No Internet worth downloading?',
        answer:
          'Yes, if you want a free, no-account iPhone app that runs open-weight AI models fully offline via llama.cpp, and you own an iPhone 12 or newer. The Pro unlock is optional and only adds on-device Whisper voice input — text chat is free (see Pricing below for the cost). Skip it if you need a larger, more mature curated model library or Android/desktop support; compare it against Private LLM or PocketPal AI first.',
        bullets: [
          'Free to download and use for text chat; no account or sign-in required.',
          'A paid, one-time Pro unlock adds on-device Whisper voice dictation (see Pricing below).',
          'Runs open-weight models via llama.cpp with Metal acceleration: Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, 28 models in the catalogue per the developer.',
          'Works fully offline (airplane mode) once a model is downloaded.',
          'Requires an iPhone 12 or newer; the app is closed-source, per the developer.',
        ],
        updatedDate: '2026-09-11',
      },
      pt: {
        question: 'Vale a pena baixar o Pocket AI - No Internet?',
        answer:
          'Sim, se você quer um aplicativo gratuito para iPhone, sem conta, que execute modelos de IA de pesos abertos totalmente offline via llama.cpp, e possui um iPhone 12 ou mais recente. O desbloqueio Pro é opcional e adiciona apenas entrada de voz Whisper no dispositivo — o chat de texto é gratuito (preço na seção Preços abaixo). Não vale a pena se você precisa de uma biblioteca de modelos maior e mais madura, ou suporte para Android/desktop; compare primeiro com o Private LLM ou o PocketPal AI.',
        bullets: [
          'Gratuito para baixar e usar em chat de texto; não exige conta ou login.',
          'Um desbloqueio Pro pago e de pagamento único adiciona ditado por voz Whisper no dispositivo (preço na seção Preços abaixo).',
          'Executa modelos de pesos abertos via llama.cpp com aceleração Metal: famílias Qwen, Gemma, Llama, Mistral, Phi e DeepSeek, 28 modelos no catálogo segundo o desenvolvedor.',
          'Funciona totalmente offline (modo avião) depois que um modelo é baixado.',
          'Exige um iPhone 12 ou mais recente; o aplicativo é de código fechado, segundo o desenvolvedor.',
        ],
        updatedDate: '2026-09-11',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Como obter o Pocket AI', anchor: 'get-it' },
      { label: 'O que é o Pocket AI', anchor: 'what-is-pocket-ai' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Preços: aplicativo gratuito, desbloqueio Pro único', anchor: 'pricing' },
      { label: 'Modelos suportados', anchor: 'models' },
      { label: 'Requisitos: por que é preciso iPhone 12 ou mais recente', anchor: 'requirements' },
      { label: 'Privacidade e funcionamento offline', anchor: 'privacy' },
      { label: 'A palavra do criador', anchor: 'from-the-maker' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'Pocket AI vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o Pocket AI', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o Pocket AI', anchor: 'who-should-not-use' },
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
            text: 'O Pocket AI - No Internet é um aplicativo gratuito para iPhone do desenvolvedor Faisal na Dataweal que executa modelos de IA de pesos abertos (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek) totalmente no dispositivo via llama.cpp com aceleração Metal, distribuído diretamente pela App Store da Apple, com um desbloqueio Pro pago para entrada de voz Whisper no dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um aplicativo de chat gratuito que baixa um modelo de IA uma vez para o seu iPhone, de modo que depois funcione no modo avião — sem conta, sem servidor e sem necessidade de conexão com a internet para realmente conversar.',
          },
        ],
        items: [
          'Preço: gratuito para [baixar](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) e usar em chat de texto; um desbloqueio Pro pago adiciona entrada de voz Whisper no dispositivo (veja Preços abaixo).',
          'Desenvolvedor: Faisal, na [Dataweal](https://mypocketai.app/).',
          'Motor: [llama.cpp](https://github.com/ggml-org/llama.cpp) com aceleração Metal, executado totalmente no dispositivo.',
          'Catálogo de modelos: 28 modelos, segundo o desenvolvedor, das famílias Qwen, Gemma, Llama, Mistral, Phi e DeepSeek.',
          'Offline: funciona no modo avião depois que um modelo é baixado; sem conta ou comunicação com servidor para conversar.',
          'Requisito: iPhone 12 ou mais recente — o desenvolvedor atribui isso ao fato de a inferência ser limitada pela memória.',
          'Status de código aberto: código fechado, segundo a própria declaração do desenvolvedor.',
          'Distribuição: disponível diretamente pela [App Store da Apple](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — pesquisável, revisada pela Apple e atualizada automaticamente, diferente de alguns aplicativos de IA local para iPhone que só são distribuídos como sideload, beta do TestFlight ou projeto do GitHub para compilar você mesmo.',
        ],
      },
      getItPocketAI: {
        id: 'get-it',
        title: 'Como obter o Pocket AI',
        content: [
          '**O Pocket AI - No Internet está disponível diretamente na App Store da Apple** — sem sideloading, sem beta do TestFlight, e sem precisar compilar a partir do código-fonte.',
          'Esta análise complementa o [diretório de software de LLM local](/pt/power-local-llm/local-llm-software-directory) da PromptQuorum, que indexa ferramentas de IA local em várias plataformas; o Pocket AI ainda não tem sua própria entrada lá.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          {
            'Plataforma': 'iPhone (iOS)',
            'Como obter': '[Pocket AI - No Internet na App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)',
          },
        ],
        note: 'O aplicativo em si é gratuito para baixar; veja a seção Preços abaixo para o custo do desbloqueio Pro opcional.',
      },
      whatIsPocketAI: {
        id: 'what-is-pocket-ai',
        title: 'O que é o Pocket AI',
        content: [
          '**O Pocket AI - No Internet é um aplicativo para iPhone que baixa modelos de linguagem de pesos abertos e os executa diretamente no dispositivo, sem componente de servidor.** Depois que um modelo é baixado, o aplicativo não precisa de conexão com a internet para gerar uma resposta — a inferência é executada localmente por meio do [llama.cpp](https://github.com/ggml-org/llama.cpp), um motor de inferência de código aberto amplamente utilizado, acelerado pelo framework gráfico Metal da Apple.',
          'O aplicativo é criado e mantido pelo desenvolvedor Faisal na [Dataweal](https://mypocketai.app/). Segundo o desenvolvedor, a motivação foi que outros aplicativos de modelos locais para iPhone geralmente exigiam uma conta, uma assinatura ou comunicação com servidor antes de permitir conversar — o Pocket AI foi projetado para não precisar de nada disso.',
          'O aplicativo está disponível na [App Store da Apple](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) com o nome "Pocket AI - No Internet". Esta análise se baseia na própria descrição do desenvolvedor sobre a arquitetura e o catálogo de modelos do aplicativo, e na ficha pública da App Store, e não em uma auditoria de código independente — o aplicativo é de código fechado (veja a seção Privacidade abaixo).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**Configurar o Pocket AI leva alguns passos e não exige criação de conta.** Todo o processo, desde o download na App Store até a primeira resposta offline, geralmente leva alguns minutos, mais o tempo que o modelo escolhido levar para baixar.',
        ],
        numberedItems: [
          {
            title: 'Baixar o aplicativo',
            whyItMatters: 'Obtenha o [Pocket AI - No Internet na App Store da Apple](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702). O aplicativo em si é gratuito — nenhuma compra é necessária para começar.',
          },
          {
            title: 'Escolher um modelo do catálogo',
            whyItMatters: 'Escolha um modelo no catálogo dentro do aplicativo, com 28 modelos das famílias Qwen, Gemma, Llama, Mistral, Phi e DeepSeek, segundo o desenvolvedor.',
          },
          {
            title: 'Baixar o modelo',
            whyItMatters: 'Esta etapa exige conexão com a internet. O tamanho do download depende do modelo escolhido; nenhuma etapa posterior precisa de conexão de rede.',
          },
          {
            title: 'Conversar totalmente offline',
            whyItMatters: 'Depois que o modelo é baixado, ative o modo avião para verificar você mesmo a alegação de funcionamento offline. O chat é executado via llama.cpp com aceleração Metal, totalmente no dispositivo.',
          },
          {
            title: 'Opcional: desbloquear o Pro para entrada de voz',
            whyItMatters: 'Uma compra dentro do aplicativo de pagamento único desbloqueia a entrada de voz Whisper no dispositivo para ditado (veja Preços abaixo). Isso é opcional — o chat de texto funciona sem isso.',
          },
        ],
        note: 'Os tamanhos exatos de download e a lista atual de modelos podem mudar entre atualizações da App Store — confirme os detalhes atuais no próprio catálogo de modelos do aplicativo antes de se comprometer com um download grande em um plano de dados limitado.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços: aplicativo gratuito, desbloqueio Pro único',
        itemHeadings: true,
        content: [
          '**O Pocket AI - No Internet é gratuito para baixar e usar em chat de texto.** Uma compra dentro do aplicativo de pagamento único de US$ 4,99 desbloqueia o nível Pro, que adiciona entrada de voz Whisper no dispositivo. Nem o aplicativo básico nem o desbloqueio Pro têm assinatura.',
        ],
        columns: ['O que você paga', 'O que cobre', 'O que não inclui'],
        rows: [
          {
            'O que você paga': 'Gratuito',
            'O que cobre': 'Chat de texto completo com qualquer modelo do catálogo de 28 modelos, totalmente offline após o download',
            'O que não inclui': 'Entrada de voz Whisper no dispositivo, que exige o desbloqueio Pro',
          },
          {
            'O que você paga': 'US$ 4,99 (pagamento único)',
            'O que cobre': 'Entrada de voz Whisper no dispositivo adicionada ao nível gratuito — sem assinatura',
            'O que não inclui': 'Qualquer custo recorrente — esta é uma compra única, não uma assinatura',
          },
        ],
        note: 'Os preços da App Store podem mudar sem aviso prévio e variar de acordo com a região. Confirme o preço atual na [ficha da App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) antes de comprar.',
      },
      models: {
        id: 'models',
        title: 'Modelos suportados',
        content: [
          '**O catálogo do Pocket AI inclui, segundo o desenvolvedor, 28 modelos de pesos abertos das famílias Qwen, Gemma, Llama, Mistral, Phi e DeepSeek.** Esse número vem diretamente do desenvolvedor e foi revisado para cima durante o contato com a PromptQuorum, em relação a uma descrição inicial de "mais de 25" modelos — o catálogo do aplicativo parece estar em expansão ativa, e não fixo.',
          'Os modelos são executados via [llama.cpp](https://github.com/ggml-org/llama.cpp), um motor de inferência de código aberto, com o framework gráfico Metal da Apple fornecendo aceleração de GPU no dispositivo. O desenvolvedor não publicou números de benchmark verificados de forma independente para combinações específicas de modelo/dispositivo no momento desta análise; leitores com necessidades críticas de desempenho devem testar um modelo específico no próprio iPhone antes de confiar nele.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos: por que é preciso iPhone 12 ou mais recente',
        content: [
          '**O Pocket AI exige um iPhone 12 ou mais recente.** Segundo o desenvolvedor, esse piso existe porque a inferência de modelos é limitada pela memória — executar um modelo de linguagem no dispositivo exige memória unificada suficiente para conter os pesos do modelo e o contexto de trabalho, e iPhones mais antigos não têm memória suficiente para executar os modelos do catálogo de forma aceitável.',
          'Esse é o raciocínio do próprio desenvolvedor, não um limite verificado de forma independente por benchmarks. Leitores com um iPhone no limite mínimo ou próximo dele devem esperar que os modelos menores do catálogo sejam a escolha mais realista, em vez dos maiores.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e funcionamento offline',
        content: [
          '**O Pocket AI não exige conta nem login.** Como o aplicativo é projetado para executar a inferência totalmente no dispositivo depois de baixar um modelo, não há dados de chat a enviar a um servidor durante o uso normal do chat de texto — é a própria arquitetura, e não apenas uma política declarada, que mantém a conversa no telefone.',
          'A entrada de voz do nível Pro também é executada no dispositivo via Whisper, segundo o desenvolvedor, o que significa que o áudio do ditado é processado localmente, em vez de enviado a um servidor de transcrição.',
        ],
        items: [
          '**Nenhuma conta necessária.** O aplicativo pode ser baixado e usado para chat de texto sem criar um perfil ou fazer login.',
          '**Offline após o download.** Depois que um modelo é baixado, o modo avião não bloqueia o chat.',
          '**Entrada de voz no dispositivo.** O ditado baseado em Whisper do nível Pro é executado localmente, segundo o desenvolvedor, em vez de por meio de uma API de transcrição na nuvem.',
          '**Aplicativo de código fechado.** Como o código do aplicativo não é publicado, suas alegações sobre arquitetura e tratamento de dados se baseiam nas próprias declarações do desenvolvedor e na ficha pública da App Store, não em uma auditoria de código independente.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'A palavra do criador',
        content: [
          'A PromptQuorum pediu a Faisal, o desenvolvedor do Pocket AI na Dataweal, que descrevesse o aplicativo e o raciocínio por trás de suas decisões de preço e plataforma. O que se segue é apresentado como as próprias palavras do desenvolvedor, reorganizadas em parágrafos para facilitar a leitura, e não como uma avaliação editorial independente da PromptQuorum:',
          '"O Pocket AI existe por causa de uma pequena frustração. Todo bom aplicativo de modelo local no iPhone me pedia algo antes de tudo: uma conta, uma assinatura ou comunicação com um servidor. Eu não queria nada disso.',
          'O aplicativo executa modelos de pesos abertos diretamente no iPhone por meio do llama.cpp com aceleração Metal. Qwen, Gemma, Llama, Mistral, Phi e DeepSeek estão todos no catálogo, hoje são 28 modelos. Não há conta nem servidor. Depois que um modelo é baixado, o aplicativo funciona no modo avião: em um avião, em um túnel, ou em um telefone que nunca fez login em nada. A entrada de voz usa o Whisper, no dispositivo, então o ditado também nunca sai do telefone.',
          'O preço segue a mesma ideia. O aplicativo é gratuito e o desbloqueio Pro custa US$ 4,99 uma única vez. Sem assinatura. Prefiro vender uma coisa a alugá-la.',
          'O que ele não é: não é de código aberto, e não é para hardware antigo. Um iPhone 12 ou mais recente é uma exigência real, porque a inferência de modelos é limitada pela memória e não há como contornar isso de forma honesta.',
          'É um aplicativo pequeno com uma única promessa. Sua conversa fica no seu telefone. Esse é todo o produto."',
        ],
        note: '— Faisal, desenvolvedor, Dataweal',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Aplicativo básico gratuito',
            'O que significa no uso real': 'O chat de texto com o catálogo completo de 28 modelos não custa nada e não exige conta.',
            'Limitação / ressalva': 'A entrada de voz exige o desbloqueio Pro pago; não é incluída gratuitamente.',
          },
          {
            'Benefício': 'Desbloqueio Pro pago e único',
            'O que significa no uso real': 'Nenhuma assinatura para acompanhar ou cancelar para a função de voz — pague uma vez.',
            'Limitação / ressalva': 'Segundo a própria descrição do desenvolvedor, ele adiciona apenas entrada de voz; não desbloqueia modelos ou recursos adicionais além disso.',
          },
          {
            'Benefício': 'Catálogo de 28 modelos das principais famílias de pesos abertos',
            'O que significa no uso real': 'Escolha entre Qwen, Gemma, Llama, Mistral, Phi e DeepSeek sem precisar procurar arquivos de modelo por conta própria.',
            'Limitação / ressalva': 'O catálogo é selecionado pelo desenvolvedor, e esta análise não testou de forma independente o desempenho de todos os 28 modelos em hardware específico do iPhone.',
          },
          {
            'Benefício': 'Sem conta, totalmente offline após o download',
            'O que significa no uso real': 'O chat funciona no modo avião sem nada para se inscrever.',
            'Limitação / ressalva': 'Como o aplicativo é de código fechado, as alegações de funcionamento offline e não coleta de dados se baseiam nas próprias declarações do desenvolvedor, e não em uma auditoria de código independente.',
          },
          {
            'Benefício': 'llama.cpp com aceleração Metal',
            'O que significa no uso real': 'Usa um motor de inferência de código aberto amplamente adotado, em vez de um motor proprietário desenvolvido internamente.',
            'Limitação / ressalva': 'A velocidade real depende do modelo específico e do modelo de iPhone; esta análise não publica números de benchmark independentes.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Pocket AI vs. alternativas',
        columns: ['Aplicativo', 'Plataformas', 'Preço', 'Flexibilidade de modelos', 'Diferença-chave'],
        rows: [
          {
            'Aplicativo': 'Pocket AI - No Internet',
            'Plataformas': 'Apenas iPhone',
            'Preço': 'Gratuito; desbloqueio Pro pago e único para entrada de voz',
            'Flexibilidade de modelos': 'Catálogo de 28 modelos (Qwen, Gemma, Llama, Mistral, Phi, DeepSeek), segundo o desenvolvedor',
            'Diferença-chave': 'Aplicativo básico gratuito; código fechado; histórico mais curto entre os aplicativos comparados aqui',
          },
          {
            'Aplicativo': '[Private LLM](/pt/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (apenas Apple)',
            'Preço': 'Compra única de US$ 4,99',
            'Flexibilidade de modelos': '140+ modelos selecionados; quantização OmniQuant/GPTQ',
            'Diferença-chave': 'Pago desde o início, mas com uma biblioteca selecionada muito maior e três anos de histórico na App Store',
          },
          {
            'Aplicativo': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, com algum suporte a Android',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Qualquer arquivo GGUF que o usuário obtenha do Hugging Face ou de outro lugar',
            'Diferença-chave': 'Gratuito e de código aberto, ao contrário do aplicativo de código fechado do Pocket AI; exige mais gerenciamento manual de modelos',
          },
          {
            'Aplicativo': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Plataformas': 'iPhone/iPad/Mac',
            'Preço': 'Gratuito',
            'Flexibilidade de modelos': 'Construído sobre o Apple MLX; acesso ao modelo de fundação no dispositivo da Apple',
            'Diferença-chave': 'Alternativa gratuita construída especificamente sobre o framework MLX da Apple em vez de llama.cpp',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos de aplicativos de terceiros mudam com frequência — verifique os detalhes atuais na ficha de cada aplicativo antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o Pocket AI',
        items: [
          '**Proprietários de iPhone que querem um aplicativo de chat de IA offline gratuito e sem conta.** O aplicativo básico não custa nada e não exige cadastro para começar a conversar com qualquer modelo do catálogo.',
          '**Leitores que especificamente querem evitar uma assinatura.** Tanto o nível gratuito quanto o desbloqueio Pro são pagamentos únicos — sem cobrança recorrente em nenhum dos casos.',
          '**Usuários que querem entrada de voz no dispositivo sem assinatura.** O desbloqueio Pro é uma compra única para ditado baseado em Whisper que, segundo o desenvolvedor, é executado localmente.',
          '**Leitores que já estão comparando vários aplicativos de IA local para iPhone.** Com um catálogo de 28 modelos das principais famílias de pesos abertos, o Pocket AI é um ponto de comparação gratuito razoável ao lado de aplicativos pagos como o Private LLM.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o Pocket AI',
        items: [
          '**Usuários de Android, Windows, Mac ou Linux.** O Pocket AI é um aplicativo exclusivo para iPhone; não há listagem na Google Play, na Microsoft Store, na Mac App Store ou em qualquer repositório de pacotes Linux.',
          '**Proprietários de um iPhone 11 ou modelo anterior.** O aplicativo exige um iPhone 12 ou mais recente, segundo o desenvolvedor, porque a inferência é limitada pela memória.',
          '**Leitores que precisam de um histórico estabelecido antes de confiar em um aplicativo.** O Pocket AI é mais novo na App Store do que alternativas como o Private LLM — leitores que valorizam muito o volume de avaliações e o histórico devem levar isso em conta.',
          '**Leitores que querem auditar o código-fonte do aplicativo por conta própria.** O Pocket AI é de código fechado, segundo o desenvolvedor. Uma alternativa de código aberto como o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) permite uma revisão de código independente.',
          '**Equipes ou organizações que desejam uma implantação compartilhada e gerenciada centralmente.** O Pocket AI é um aplicativo de consumo para um único usuário e um único dispositivo, sem console de administração ou faturamento de equipe.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Pocket AI - No Internet é gratuito?',
            a: 'Sim. O aplicativo é gratuito para baixar e usar em chat de texto com qualquer modelo do seu catálogo. Veja a seção Preços acima para o custo do desbloqueio Pro opcional.',
          },
          {
            q: 'Quem desenvolve o Pocket AI - No Internet?',
            a: 'O Pocket AI é desenvolvido por Faisal na [Dataweal](https://mypocketai.app/).',
          },
          {
            q: 'Quais modelos o Pocket AI suporta?',
            a: 'Segundo o desenvolvedor, o catálogo do aplicativo inclui 28 modelos de pesos abertos das famílias Qwen, Gemma, Llama, Mistral, Phi e DeepSeek, executados via [llama.cpp](https://github.com/ggml-org/llama.cpp) com aceleração Metal.',
          },
          {
            q: 'O Pocket AI funciona sem conexão com a internet?',
            a: 'Sim, depois que um modelo é baixado. O aplicativo só precisa de conexão com a internet para baixar um modelo ou uma atualização do aplicativo; o chat funciona totalmente offline depois disso, inclusive no modo avião.',
          },
          {
            q: 'Qual iPhone eu preciso para usar o Pocket AI?',
            a: 'Um iPhone 12 ou mais recente, segundo o desenvolvedor. O desenvolvedor declara que essa exigência existe porque a inferência de modelos é limitada pela memória — iPhones mais antigos não têm memória unificada suficiente para executar os modelos do catálogo de forma aceitável.',
          },
          {
            q: 'O Pocket AI - No Internet é de código aberto?',
            a: 'Não. O desenvolvedor declara claramente que o aplicativo é de código fechado.',
          },
          {
            q: 'O que está incluído no desbloqueio Pro?',
            a: 'O desbloqueio Pro pago e único (veja Preços acima) adiciona entrada de voz Whisper no dispositivo para ditado. Segundo a própria descrição do desenvolvedor, ele não adiciona modelos ou recursos adicionais além da entrada de voz.',
          },
          {
            q: 'O Pocket AI coleta dados pessoais ou exige uma conta?',
            a: 'Nenhuma conta ou login é necessário para usar o aplicativo em chat de texto. Como o aplicativo é de código fechado, esta análise se baseia nas próprias declarações do desenvolvedor e na ficha pública da App Store, não em uma auditoria de código independente.',
          },
          {
            q: 'Como o Pocket AI se compara ao Private LLM ou ao PocketPal AI?',
            a: 'O Pocket AI é gratuito, com um desbloqueio de voz pago e opcional de pagamento único (veja Preços acima), de código fechado, e mais novo na App Store. O [Private LLM](/pt/power-local-llm/private-llm-review) é uma compra única de US$ 4,99 desde o lançamento, com uma biblioteca maior e mais estabelecida de mais de 140 modelos. O [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) é gratuito e de código aberto, mas exige obter manualmente arquivos de modelo GGUF. Escolha com base no que você mais valoriza: custo, tamanho e maturidade da biblioteca de modelos, ou transparência do código-fonte.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Pocket AI - No Internet cumpre uma promessa simples: um aplicativo gratuito para iPhone que executa modelos de pesos abertos totalmente no dispositivo via llama.cpp, sem conta e sem comunicação com servidor, distribuído pela App Store da Apple em vez de sideload ou versão beta.',
          'O catálogo de 28 modelos das famílias Qwen, Gemma, Llama, Mistral, Phi e DeepSeek é um ponto de partida razoável para um aplicativo gratuito, e o próprio raciocínio do desenvolvedor para o mínimo de iPhone 12 — inferência limitada pela memória — é uma explicação plausível e específica, em vez de uma exigência vaga de hardware.',
          'O que mantém esta análise cautelosa em vez de entusiasmada é a pouca idade do aplicativo e seu código fechado: as alegações sobre privacidade e funcionamento offline se baseiam na palavra do desenvolvedor, e não em uma revisão de código independente, e o aplicativo tem um histórico mais curto do que alternativas mais estabelecidas.',
          'Leitores que querem um aplicativo de chat gratuito, sem assinatura, com uma história de privacidade plausível no dispositivo deveriam experimentá-lo; leitores que valorizam mais um histórico estabelecido na App Store e um código-fonte auditável de forma independente deveriam começar com o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou reservar orçamento para o [Private LLM](/pt/power-local-llm/private-llm-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Pocket AI - No Internet na App Store](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — preço e compatibilidade de plataforma.',
          '[Site oficial do Pocket AI](https://mypocketai.app/) — visão geral do produto.',
          'Correspondência direta com Faisal, desenvolvedor na Dataweal, fornecida à PromptQuorum antes de 8 de setembro de 2026 — descrição do aplicativo, número de modelos no catálogo, modelo de preços, raciocínio sobre o requisito de hardware e status de código aberto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — uma alternativa paga e mais estabelecida, exclusiva da Apple, com uma biblioteca de modelos muito maior.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — a alternativa gratuita e de código aberto com importação manual de GGUF.',
          '[Os melhores aplicativos de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama completo de aplicativos para iPhone.',
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — uma alternativa gratuita baseada no Apple MLX.',
          '[O diretório completo de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em todas as plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocket-ai-review-hero-ar.webp',
    title: 'مراجعة Pocket AI (2026): محادثة ذكاء اصطناعي على الجهاز دون إنترنت لآيفون',
    seoTitle: 'مراجعة Pocket AI 2026: دردشة ذكاء اصطناعي بدون إنترنت للآيفون',
    intro:
      '[Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)، من تطوير فيصل في شركة [Dataweal](https://mypocketai.app/)، هو تطبيق مجاني لآيفون يشغّل نماذج لغوية مفتوحة الأوزان مباشرة على الجهاز باستخدام [llama.cpp](https://github.com/ggml-org/llama.cpp) مع تسريع Metal. لا يوجد حساب ولا اتصال بخادم، وبمجرد تنزيل النموذج، يعمل التطبيق في وضع الطيران. التطبيق نفسه مجاني؛ ويضيف فتح نسخة Pro مدفوعة إدخال صوت Whisper على الجهاز. وعلى عكس العديد من تطبيقات الذكاء الاصطناعي المحلية لآيفون التي لا تُوزَّع إلا كتثبيت جانبي أو نسخة تجريبية عبر TestFlight أو مشروع GitHub يبنيه المستخدم بنفسه، يُوزَّع Pocket AI مباشرة عبر متجر تطبيقات آبل. تتناول هذه المراجعة ما يفعله التطبيق، وتكلفته، والأجهزة المطلوبة.',
    metaDescription:
      'مراجعة Pocket AI - No Internet 2026: تطبيق آيفون مجاني للدردشة بالذكاء الاصطناعي دون إنترنت على الجهاز عبر llama.cpp، فتح Pro مدفوع لمرة واحدة لإدخال الصوت عبر Whisper، دون اشتراك. الأسعار والمتطلبات والتوزيع عبر متجر التطبيقات.',
    twitterDescription:
      'مراجعة Pocket AI - No Internet 2026: تطبيق آيفون مجاني يشغّل نماذج مفتوحة الأوزان على الجهاز عبر llama.cpp مع تسريع Metal. فتح Pro بدفعة واحدة قدرها 4.99 دولار لإدخال الصوت عبر Whisper على الجهاز. دون حساب، ودون اشتراك، ويعمل في وضع الطيران.',
    audience:
      'مستخدمو آيفون الذين يفكرون في تطبيق دردشة ذكاء اصطناعي محلي مجاني ويعمل دون إنترنت — يغطي الأسعار، وفتح Pro، وعائلات النماذج المدعومة، ومتطلبات الأجهزة، والمقارنة مع مراجعات تطبيقات فردية أخرى على هذا الموقع.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Pocket AI review',
    targetKeywords: [
      'pocket ai review',
      'pocket ai no internet',
      'pocket ai iphone app',
      'offline ai chat app iphone',
      'dataweal pocket ai',
      'on-device llama.cpp iphone app',
      'free local ai app iphone',
      'pocket ai pro unlock price',
    ],
    current_models_mentioned: ['Qwen', 'Gemma', 'Llama', 'Mistral', 'Phi', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone 12'],
    leadAnswerBlock:
      '**Pocket AI - No Internet تطبيق مجاني لآيفون يشغّل نماذج ذكاء اصطناعي مفتوحة الأوزان بالكامل على الجهاز باستخدام [llama.cpp](https://github.com/ggml-org/llama.cpp) مع تسريع Metal — دون حساب، ودون خادم، ويمكن استخدامه بالكامل دون إنترنت بمجرد تنزيل نموذج.** من تطوير فيصل في [Dataweal](https://mypocketai.app/)، وتضم مكتبته وفق المطوّر 28 نموذجًا من عائلات Qwen وGemma وLlama وMistral وPhi وDeepSeek. التطبيق مجاني للدردشة النصية؛ ويضيف فتح Pro مدفوع إدخال صوت Whisper على الجهاز. يتطلب آيفون 12 أو أحدث، وهو ما يعزوه المطوّر إلى كون الاستدلال محدودًا بحجم الذاكرة. للمقارنة، راجع أيضًا [مراجعة Private LLM](/ar/power-local-llm/private-llm-review) أو [مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Pocket AI - No Internet worth downloading?',
        answer:
          'Yes, if you want a free, no-account iPhone app that runs open-weight AI models fully offline via llama.cpp, and you own an iPhone 12 or newer. The Pro unlock is optional and only adds on-device Whisper voice input — text chat is free (see Pricing below for the cost). Skip it if you need a larger, more mature curated model library or Android/desktop support; compare it against Private LLM or PocketPal AI first.',
        bullets: [
          'Free to download and use for text chat; no account or sign-in required.',
          'A paid, one-time Pro unlock adds on-device Whisper voice dictation (see Pricing below).',
          'Runs open-weight models via llama.cpp with Metal acceleration: Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, 28 models in the catalogue per the developer.',
          'Works fully offline (airplane mode) once a model is downloaded.',
          'Requires an iPhone 12 or newer; the app is closed-source, per the developer.',
        ],
        updatedDate: '2026-09-11',
      },
      ar: {
        question: 'هل يستحق تطبيق Pocket AI - No Internet التنزيل؟',
        answer:
          'نعم، إذا كنت تريد تطبيق آيفون مجانيًا ودون حساب يشغّل نماذج ذكاء اصطناعي مفتوحة الأوزان دون إنترنت بالكامل عبر llama.cpp، وتمتلك آيفون 12 أو أحدث. فتح Pro اختياري ويضيف فقط إدخال صوت Whisper على الجهاز — الدردشة النصية مجانية (السعر في قسم التسعير أدناه). تجاوزه إذا كنت بحاجة إلى مكتبة نماذج أكبر وأكثر نضجًا أو دعم أندرويد/سطح المكتب؛ قارنه أولًا بـ Private LLM أو PocketPal AI.',
        bullets: [
          'مجاني للتنزيل والاستخدام في الدردشة النصية؛ لا يتطلب حسابًا أو تسجيل دخول.',
          'فتح Pro مدفوع بدفعة واحدة يضيف إملاء صوتي عبر Whisper على الجهاز (السعر في قسم التسعير أدناه).',
          'يشغّل نماذج مفتوحة الأوزان عبر llama.cpp مع تسريع Metal: عائلات Qwen وGemma وLlama وMistral وPhi وDeepSeek، و28 نموذجًا في الكتالوج وفق المطوّر.',
          'يعمل دون إنترنت بالكامل (وضع الطيران) بمجرد تنزيل نموذج.',
          'يتطلب آيفون 12 أو أحدث؛ والتطبيق مغلق المصدر وفق المطوّر.',
        ],
        updatedDate: '2026-09-11',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'كيفية الحصول على Pocket AI', anchor: 'get-it' },
      { label: 'ما هو Pocket AI', anchor: 'what-is-pocket-ai' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'الأسعار: تطبيق مجاني وفتح Pro لمرة واحدة', anchor: 'pricing' },
      { label: 'النماذج المدعومة', anchor: 'models' },
      { label: 'المتطلبات: لماذا يلزم آيفون 12 أو أحدث', anchor: 'requirements' },
      { label: 'الخصوصية والعمل دون إنترنت', anchor: 'privacy' },
      { label: 'من صانع التطبيق', anchor: 'from-the-maker' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Pocket AI مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Pocket AI', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Pocket AI', anchor: 'who-should-not-use' },
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
            text: 'Pocket AI - No Internet تطبيق آيفون مجاني من المطوّر فيصل في Dataweal يشغّل نماذج ذكاء اصطناعي مفتوحة الأوزان (Qwen وGemma وLlama وMistral وPhi وDeepSeek) بالكامل على الجهاز عبر llama.cpp مع تسريع Metal، ويُوزَّع مباشرة عبر متجر تطبيقات آبل، مع فتح Pro مدفوع لإدخال صوت Whisper على الجهاز.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله تطبيق دردشة مجاني يقوم بتنزيل نموذج ذكاء اصطناعي مرة واحدة على آيفونك، بحيث يعمل بعدها في وضع الطيران — دون حساب، ودون خادم، ودون الحاجة إلى اتصال بالإنترنت للدردشة فعليًا.',
          },
        ],
        items: [
          'السعر: مجاني [للتنزيل](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) والاستخدام في الدردشة النصية؛ فتح Pro مدفوع يضيف إدخال صوت Whisper على الجهاز (راجع قسم الأسعار أدناه).',
          'المطوّر: فيصل، في [Dataweal](https://mypocketai.app/).',
          'المحرك: [llama.cpp](https://github.com/ggml-org/llama.cpp) مع تسريع Metal، يعمل بالكامل على الجهاز.',
          'كتالوج النماذج: 28 نموذجًا وفق المطوّر، من عائلات Qwen وGemma وLlama وMistral وPhi وDeepSeek.',
          'العمل دون إنترنت: يعمل في وضع الطيران بمجرد تنزيل نموذج؛ دون حساب أو اتصال بخادم للدردشة.',
          'المتطلب: آيفون 12 أو أحدث — يعزو المطوّر ذلك إلى كون الاستدلال محدودًا بحجم الذاكرة.',
          'حالة المصدر المفتوح: مغلق المصدر، وفق تصريح المطوّر نفسه.',
          'التوزيع: متوفر مباشرة عبر [متجر تطبيقات آبل](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — قابل للبحث، ومراجَع من آبل، ويُحدَّث تلقائيًا، على عكس بعض تطبيقات الذكاء الاصطناعي المحلية لآيفون التي لا تُوزَّع إلا كتثبيت جانبي أو نسخة تجريبية عبر TestFlight أو مشروع GitHub يبنيه المستخدم بنفسه.',
        ],
      },
      getItPocketAI: {
        id: 'get-it',
        title: 'كيفية الحصول على Pocket AI',
        content: [
          '**يتوفر Pocket AI - No Internet مباشرة من متجر تطبيقات آبل** — دون تثبيت جانبي، ودون نسخة تجريبية عبر TestFlight، ودون الحاجة إلى بنائه من الشيفرة المصدرية.',
          'تكمّل هذه المراجعة [دليل برمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) من PromptQuorum، الذي يفهرس أدوات الذكاء الاصطناعي المحلية عبر المنصات؛ ولا يزال Pocket AI بدون إدراج خاص به هناك.',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          {
            'المنصة': 'آيفون (iOS)',
            'كيفية الحصول عليه': '[Pocket AI - No Internet على متجر التطبيقات](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)',
          },
        ],
        note: 'التطبيق نفسه مجاني للتنزيل؛ راجع قسم الأسعار أدناه لمعرفة تكلفة فتح Pro الاختياري.',
      },
      whatIsPocketAI: {
        id: 'what-is-pocket-ai',
        title: 'ما هو Pocket AI',
        content: [
          '**Pocket AI - No Internet هو تطبيق آيفون يقوم بتنزيل نماذج لغوية مفتوحة الأوزان وتشغيلها مباشرة على الجهاز، دون أي مكوّن على الخادم.** بمجرد تنزيل نموذج، لا يحتاج التطبيق إلى اتصال بالإنترنت لتوليد رد — يتم الاستدلال محليًا عبر [llama.cpp](https://github.com/ggml-org/llama.cpp)، وهو محرك استدلال مفتوح المصدر واسع الاستخدام، مسرَّع بإطار عمل Metal الرسومي من آبل.',
          'يُبنى التطبيق ويُصان بواسطة المطوّر فيصل في [Dataweal](https://mypocketai.app/). وفق المطوّر، كان الدافع أن تطبيقات النماذج المحلية الأخرى لآيفون كانت عادةً تطلب حسابًا أو اشتراكًا أو اتصالًا بخادم قبل السماح بالدردشة — بينما صُمّم Pocket AI ليستغني عن كل ذلك.',
          'يتوفر التطبيق على [متجر تطبيقات آبل](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) باسم "Pocket AI - No Internet". تعتمد هذه المراجعة على وصف المطوّر الخاص لبنية التطبيق وكتالوج النماذج، وعلى صفحة متجر التطبيقات العامة، وليس على تدقيق مستقل للشيفرة — فالتطبيق مغلق المصدر (راجع قسم الخصوصية أدناه).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**يستغرق إعداد Pocket AI خطوات قليلة ولا يتطلب إنشاء حساب.** تستغرق العملية بأكملها، من التنزيل من متجر التطبيقات إلى أول رد دون إنترنت، عادةً بضع دقائق بالإضافة إلى الوقت اللازم لتنزيل النموذج المختار.',
        ],
        numberedItems: [
          {
            title: 'تنزيل التطبيق',
            whyItMatters: 'احصل على [Pocket AI - No Internet من متجر تطبيقات آبل](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702). التطبيق نفسه مجاني — لا حاجة لأي عملية شراء للبدء.',
          },
          {
            title: 'اختيار نموذج من الكتالوج',
            whyItMatters: 'اختر نموذجًا من كتالوج داخل التطبيق يضم 28 نموذجًا من عائلات Qwen وGemma وLlama وMistral وPhi وDeepSeek، وفق المطوّر.',
          },
          {
            title: 'تنزيل النموذج',
            whyItMatters: 'تتطلب هذه الخطوة اتصالًا بالإنترنت. يعتمد حجم التنزيل على النموذج المختار؛ ولا تحتاج أي خطوة بعد ذلك إلى اتصال بالشبكة.',
          },
          {
            title: 'الدردشة دون إنترنت بالكامل',
            whyItMatters: 'بمجرد تنزيل النموذج، فعّل وضع الطيران للتحقق بنفسك من ادعاء العمل دون إنترنت. تعمل الدردشة عبر llama.cpp مع تسريع Metal، بالكامل على الجهاز.',
          },
          {
            title: 'اختياري: فتح نسخة Pro للإدخال الصوتي',
            whyItMatters: 'يفتح شراء مدفوع لمرة واحدة داخل التطبيق إدخال صوت Whisper على الجهاز للإملاء (راجع قسم الأسعار أدناه). هذا اختياري — تعمل الدردشة النصية دونه.',
          },
        ],
        note: 'قد تتغير أحجام التنزيل الدقيقة وقائمة النماذج الحالية بين تحديثات متجر التطبيقات — تحقق من التفاصيل الحالية في كتالوج نماذج التطبيق نفسه قبل الالتزام بتنزيل كبير على باقة بيانات محدودة.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار: تطبيق مجاني وفتح Pro لمرة واحدة',
        itemHeadings: true,
        content: [
          '**Pocket AI - No Internet مجاني للتنزيل والاستخدام في الدردشة النصية.** يفتح شراء لمرة واحدة داخل التطبيق بقيمة 4.99 دولار مستوى Pro، الذي يضيف إدخال صوت Whisper على الجهاز. لا يوجد اشتراك سواء للتطبيق الأساسي أو لفتح Pro.',
        ],
        columns: ['ما تدفعه', 'ما يغطيه', 'ما لا يشمله'],
        rows: [
          {
            'ما تدفعه': 'مجاني',
            'ما يغطيه': 'دردشة نصية كاملة مع أي نموذج من كتالوج الـ28 نموذجًا، دون إنترنت بالكامل بعد التنزيل',
            'ما لا يشمله': 'إدخال صوت Whisper على الجهاز، الذي يتطلب فتح Pro',
          },
          {
            'ما تدفعه': '4.99 دولار (لمرة واحدة)',
            'ما يغطيه': 'إدخال صوت Whisper على الجهاز يُضاف فوق المستوى المجاني — دون اشتراك',
            'ما لا يشمله': 'أي تكلفة متكررة — هذه عملية شراء لمرة واحدة، وليست اشتراكًا',
          },
        ],
        note: 'قد تتغير أسعار متجر التطبيقات دون إشعار مسبق وقد تختلف حسب المنطقة. تحقق من السعر الحالي على [صفحة متجر التطبيقات](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) قبل الشراء.',
      },
      models: {
        id: 'models',
        title: 'النماذج المدعومة',
        content: [
          '**يضم كتالوج Pocket AI، وفق المطوّر، 28 نموذجًا مفتوح الأوزان من عائلات Qwen وGemma وLlama وMistral وPhi وDeepSeek.** يأتي هذا الرقم مباشرة من المطوّر وتمت مراجعته صعودًا خلال التواصل مع PromptQuorum من وصف أولي بـ"أكثر من 25" نموذجًا — ويبدو أن كتالوج التطبيق في توسع نشط وليس ثابتًا.',
          'تعمل النماذج عبر [llama.cpp](https://github.com/ggml-org/llama.cpp)، وهو محرك استدلال مفتوح المصدر، مع توفير إطار عمل Metal الرسومي من آبل تسريعًا لوحدة معالجة الرسومات على الجهاز. لم ينشر المطوّر أرقام قياس أداء تم التحقق منها بشكل مستقل لتوليفات نموذج/جهاز محددة حتى وقت هذه المراجعة؛ يجب على القراء ذوي احتياجات الأداء الحرجة اختبار نموذج معيّن على أجهزتهم قبل الاعتماد عليه.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات: لماذا يلزم آيفون 12 أو أحدث',
        content: [
          '**يتطلب Pocket AI آيفون 12 أو أحدث.** وفق المطوّر، يوجد هذا الحد الأدنى لأن استدلال النماذج محدود بحجم الذاكرة — إذ يتطلب تشغيل نموذج لغوي على الجهاز ذاكرة موحّدة كافية لاحتواء أوزان النموذج وسياق العمل، ولا تملك أجهزة آيفون الأقدم ذاكرة كافية لتشغيل نماذج الكتالوج بشكل مقبول.',
          'هذا هو التبرير الخاص بالمطوّر نفسه، وليس حدًا تم التحقق منه بشكل مستقل عبر اختبارات قياس. يجب على القراء الذين يمتلكون آيفون عند الحد الأدنى أو قريبًا منه توقّع أن تكون النماذج الأصغر في الكتالوج الخيار الأكثر واقعية بدلًا من الأكبر منها.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والعمل دون إنترنت',
        content: [
          '**لا يتطلب Pocket AI حسابًا ولا تسجيل دخول.** وبما أن التطبيق مصمم لتشغيل الاستدلال بالكامل على الجهاز بعد تنزيل نموذج، فلا توجد بيانات دردشة تُرسل إلى خادم أثناء الاستخدام العادي للدردشة النصية — فالبنية نفسها، وليست مجرد سياسة معلنة، هي ما يُبقي المحادثة على الهاتف.',
          'يعمل الإدخال الصوتي في مستوى Pro أيضًا على الجهاز عبر Whisper، وفق المطوّر، مما يعني أن صوت الإملاء يُعالج محليًا بدلًا من إرساله إلى خادم لتحويل الصوت إلى نص.',
        ],
        items: [
          '**لا حاجة إلى حساب.** يمكن تنزيل التطبيق واستخدامه للدردشة النصية دون إنشاء ملف شخصي أو تسجيل الدخول.',
          '**دون إنترنت بعد التنزيل.** بمجرد تنزيل نموذج، لا يمنع وضع الطيران الدردشة.',
          '**إدخال صوتي على الجهاز.** وفق المطوّر، يعمل إملاء مستوى Pro المعتمد على Whisper محليًا، بدلًا من واجهة برمجة تطبيقات تحويل صوت سحابية.',
          '**تطبيق مغلق المصدر.** بما أن شيفرة التطبيق غير منشورة، فإن ادعاءاته المتعلقة بالبنية ومعالجة البيانات تستند إلى تصريحات المطوّر نفسه وصفحة متجر التطبيقات العامة، وليس إلى تدقيق مستقل للشيفرة.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'من صانع التطبيق',
        content: [
          'طلبت PromptQuorum من فيصل، مطوّر Pocket AI في Dataweal، أن يصف التطبيق والمنطق وراء قراراته المتعلقة بالتسعير والمنصة. ما يلي مقدَّم بصفته كلمات المطوّر نفسه، أُعيد تنظيمها في فقرات لتسهيل القراءة، وليس بوصفه تقييمًا تحريريًا مستقلًا من PromptQuorum:',
          '«يوجد Pocket AI بسبب إحباط صغير. كل تطبيق نموذج محلي جيد على آيفون كان يطلب مني شيئًا أولًا: حسابًا، أو اشتراكًا، أو اتصالًا بخادم. لم أرد أيًا من ذلك.',
          'يشغّل التطبيق نماذج مفتوحة الأوزان مباشرة على آيفون عبر llama.cpp مع تسريع Metal. تتضمن Qwen وGemma وLlama وMistral وPhi وDeepSeek كلها في الكتالوج، وهي 28 نموذجًا اليوم. لا يوجد حساب ولا خادم. بمجرد تنزيل نموذج، يعمل التطبيق في وضع الطيران: في طائرة، أو في نفق، أو على هاتف لم يسجّل الدخول إلى أي شيء قط. يستخدم الإدخال الصوتي Whisper، على الجهاز، لذا لا يغادر الإملاء الهاتف أيضًا.',
          'يتبع التسعير الفكرة نفسها. التطبيق مجاني وفتح Pro يكلف 4.99 دولار لمرة واحدة. دون اشتراك. أفضّل بيع شيء على تأجيره.',
          'ما لا يكونه: ليس مفتوح المصدر، وليس مخصصًا للأجهزة القديمة. آيفون 12 أو أحدث متطلب حقيقي، لأن استدلال النماذج محدود بحجم الذاكرة ولا توجد طريقة صادقة للالتفاف حول ذلك.',
          'إنه تطبيق صغير بوعد واحد. تبقى محادثتك على هاتفك. هذا هو المنتج بأكمله».',
        ],
        note: '— فيصل، مطوّر، Dataweal',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'تطبيق أساسي مجاني',
            'ما تعنيه في الاستخدام الفعلي': 'الدردشة النصية مع كتالوج الـ28 نموذجًا كاملًا لا تكلف شيئًا ولا تتطلب حسابًا.',
            'القيد / الملاحظة': 'يتطلب الإدخال الصوتي فتح Pro المدفوع؛ وهو غير مُضمَّن مجانًا.',
          },
          {
            'الميزة': 'فتح Pro مدفوع لمرة واحدة',
            'ما تعنيه في الاستخدام الفعلي': 'لا يوجد اشتراك يجب تتبعه أو إلغاؤه لميزة الصوت — ادفع مرة واحدة.',
            'القيد / الملاحظة': 'وفق وصف المطوّر نفسه، يضيف فقط إدخالًا صوتيًا؛ ولا يفتح نماذج أو ميزات إضافية غير ذلك.',
          },
          {
            'الميزة': 'كتالوج من 28 نموذجًا عبر عائلات مفتوحة الأوزان رئيسية',
            'ما تعنيه في الاستخدام الفعلي': 'اختيار بين Qwen وGemma وLlama وMistral وPhi وDeepSeek دون الحاجة للبحث عن ملفات نماذج بنفسك.',
            'القيد / الملاحظة': 'الكتالوج منتقى من قِبل المطوّر، ولم تختبر هذه المراجعة بشكل مستقل أداء النماذج الـ28 كلها على أجهزة آيفون محددة.',
          },
          {
            'الميزة': 'دون حساب، ودون إنترنت بالكامل بعد التنزيل',
            'ما تعنيه في الاستخدام الفعلي': 'تعمل الدردشة في وضع الطيران دون الحاجة لتسجيل أي شيء.',
            'القيد / الملاحظة': 'بما أن التطبيق مغلق المصدر، تستند ادعاءات العمل دون إنترنت وعدم جمع البيانات إلى تصريحات المطوّر نفسه وليس إلى تدقيق مستقل للشيفرة.',
          },
          {
            'الميزة': 'llama.cpp مع تسريع Metal',
            'ما تعنيه في الاستخدام الفعلي': 'يستخدم محرك استدلال مفتوح المصدر منتشرًا على نطاق واسع بدلًا من محرك مملوك مطوَّر داخليًا.',
            'القيد / الملاحظة': 'تعتمد السرعة الفعلية على النموذج المحدد وطراز آيفون؛ ولم تنشر هذه المراجعة أرقام قياس أداء مستقلة.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Pocket AI مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر', 'مرونة النماذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Pocket AI - No Internet',
            'المنصات': 'آيفون فقط',
            'السعر': 'مجاني؛ فتح Pro مدفوع لمرة واحدة للإدخال الصوتي',
            'مرونة النماذج': 'كتالوج من 28 نموذجًا (Qwen وGemma وLlama وMistral وPhi وDeepSeek)، وفق المطوّر',
            'الفرق الرئيسي': 'تطبيق أساسي مجاني؛ مغلق المصدر؛ أقصر سجل بين التطبيقات المقارنة هنا',
          },
          {
            'التطبيق': '[Private LLM](/ar/power-local-llm/private-llm-review)',
            'المنصات': 'آيفون/آيباد/ماك (آبل فقط)',
            'السعر': 'شراء لمرة واحدة بقيمة 4.99 دولار',
            'مرونة النماذج': 'أكثر من 140 نموذجًا منتقًى؛ ضغط OmniQuant/GPTQ',
            'الفرق الرئيسي': 'مدفوع منذ البداية، لكن بمكتبة منتقاة أكبر بكثير وثلاث سنوات من السجل على متجر التطبيقات',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'آيفون/آيباد، مع بعض الدعم لأندرويد',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النماذج': 'أي ملف GGUF يحصل عليه المستخدم من Hugging Face أو غيره',
            'الفرق الرئيسي': 'مجاني ومفتوح المصدر، على عكس تطبيق Pocket AI المغلق المصدر؛ يتطلب إدارة نماذج يدوية أكبر',
          },
          {
            'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'المنصات': 'آيفون/آيباد/ماك',
            'السعر': 'مجاني',
            'مرونة النماذج': 'مبني على Apple MLX؛ وصول إلى نموذج آبل التأسيسي على الجهاز',
            'الفرق الرئيسي': 'بديل مجاني مبني خصيصًا على إطار عمل MLX من آبل بدلًا من llama.cpp',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات للتطبيقات الخارجية بشكل متكرر — تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Pocket AI',
        items: [
          '**مالكو آيفون الذين يريدون تطبيق دردشة ذكاء اصطناعي مجاني ودون حساب يعمل دون إنترنت.** التطبيق الأساسي لا يكلف شيئًا ولا يتطلب تسجيلًا للبدء في الدردشة مع أي نموذج في الكتالوج.',
          '**القراء الذين يريدون تحديدًا تجنب الاشتراك.** كل من المستوى المجاني وفتح Pro هما دفعة واحدة — لا رسوم متكررة في أي من الحالتين.',
          '**المستخدمون الذين يريدون إدخالًا صوتيًا على الجهاز دون اشتراك.** فتح Pro هو شراء لمرة واحدة لإملاء معتمد على Whisper يذكر المطوّر أنه يعمل محليًا.',
          '**القراء الذين يقارنون بالفعل عدة تطبيقات ذكاء اصطناعي محلية لآيفون.** بكتالوج من 28 نموذجًا عبر عائلات مفتوحة الأوزان رئيسية، يُعد Pocket AI نقطة مقارنة مجانية معقولة إلى جانب تطبيقات مدفوعة مثل Private LLM.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Pocket AI',
        items: [
          '**مستخدمو أندرويد أو ويندوز أو ماك أو لينكس.** Pocket AI تطبيق حصري لآيفون؛ ولا يوجد له إدراج على Google Play أو Microsoft Store أو Mac App Store أو أي مستودع حزم لينكس.',
          '**مالكو آيفون 11 أو أقدم.** يتطلب التطبيق آيفون 12 أو أحدث، وفق المطوّر، لأن الاستدلال محدود بحجم الذاكرة.',
          '**القراء الذين يحتاجون إلى سجل راسخ قبل الثقة بتطبيق ما.** Pocket AI أحدث على متجر التطبيقات من بدائل مثل Private LLM — يجب على القراء الذين يعطون وزنًا كبيرًا لحجم المراجعات وللسجل التاريخي أخذ ذلك في الاعتبار.',
          '**القراء الذين يريدون تدقيق شيفرة المصدر بأنفسهم.** Pocket AI مغلق المصدر، وفق المطوّر. يتيح بديل مفتوح المصدر مثل [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) مراجعة شيفرة مستقلة.',
          '**الفرق أو المؤسسات التي تريد نشرًا مشتركًا يُدار مركزيًا.** Pocket AI تطبيق استهلاكي لمستخدم واحد وجهاز واحد دون لوحة تحكم إدارية أو فوترة للفرق.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل تطبيق Pocket AI - No Internet مجاني؟',
            a: 'نعم. التطبيق مجاني للتنزيل والاستخدام في الدردشة النصية مع أي نموذج من كتالوجه. راجع قسم الأسعار أعلاه لمعرفة تكلفة فتح Pro الاختياري.',
          },
          {
            q: 'من يطوّر Pocket AI - No Internet؟',
            a: 'يطوّر Pocket AI فيصل في [Dataweal](https://mypocketai.app/).',
          },
          {
            q: 'ما النماذج التي يدعمها Pocket AI؟',
            a: 'وفق المطوّر، يضم كتالوج التطبيق 28 نموذجًا مفتوح الأوزان من عائلات Qwen وGemma وLlama وMistral وPhi وDeepSeek، تعمل عبر [llama.cpp](https://github.com/ggml-org/llama.cpp) مع تسريع Metal.',
          },
          {
            q: 'هل يعمل Pocket AI دون اتصال بالإنترنت؟',
            a: 'نعم، بمجرد تنزيل نموذج. يحتاج التطبيق إلى اتصال بالإنترنت فقط لتنزيل نموذج أو تحديث للتطبيق؛ وتعمل الدردشة بعد ذلك دون إنترنت بالكامل، بما في ذلك في وضع الطيران.',
          },
          {
            q: 'ما جهاز آيفون الذي أحتاجه لتشغيل Pocket AI؟',
            a: 'آيفون 12 أو أحدث، وفق المطوّر. يذكر المطوّر أن هذا المتطلب موجود لأن استدلال النماذج محدود بحجم الذاكرة — لا تملك أجهزة آيفون الأقدم ذاكرة موحّدة كافية لتشغيل نماذج الكتالوج بشكل مقبول.',
          },
          {
            q: 'هل Pocket AI - No Internet مفتوح المصدر؟',
            a: 'لا. يذكر المطوّر بوضوح أن التطبيق مغلق المصدر.',
          },
          {
            q: 'ما الذي يتضمنه فتح Pro؟',
            a: 'يضيف فتح Pro المدفوع لمرة واحدة (راجع قسم الأسعار أعلاه) إدخال صوت Whisper على الجهاز للإملاء. وفق وصف المطوّر نفسه، لا يضيف نماذج أو ميزات إضافية غير الإدخال الصوتي.',
          },
          {
            q: 'هل يجمع Pocket AI بيانات شخصية أو يتطلب حسابًا؟',
            a: 'لا يلزم حساب أو تسجيل دخول لاستخدام التطبيق في الدردشة النصية. بما أن التطبيق مغلق المصدر، تعتمد هذه المراجعة على تصريحات المطوّر نفسه وصفحة متجر التطبيقات العامة، وليس على تدقيق مستقل للشيفرة.',
          },
          {
            q: 'كيف يقارن Pocket AI بـ Private LLM أو PocketPal AI؟',
            a: 'Pocket AI مجاني مع فتح صوتي مدفوع واختياري لمرة واحدة (راجع قسم الأسعار أعلاه)، ومغلق المصدر، وأحدث على متجر التطبيقات. [Private LLM](/ar/power-local-llm/private-llm-review) هو شراء لمرة واحدة بقيمة 4.99 دولار منذ الإطلاق مع مكتبة أكبر وأكثر رسوخًا تضم أكثر من 140 نموذجًا. [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) مجاني ومفتوح المصدر لكنه يتطلب الحصول يدويًا على ملفات نماذج GGUF. اختر بناءً على ما تقدّره أكثر: التكلفة، أو حجم ونضج مكتبة النماذج، أو شفافية شيفرة المصدر.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content: [
          'يفي Pocket AI - No Internet بوعد بسيط: تطبيق آيفون مجاني يشغّل نماذج مفتوحة الأوزان بالكامل على الجهاز عبر llama.cpp، دون حساب ودون اتصال بخادم، مُوزَّع عبر متجر تطبيقات آبل بدلًا من تثبيت جانبي أو نسخة تجريبية.',
          'يمثل كتالوج الـ28 نموذجًا عبر عائلات Qwen وGemma وLlama وMistral وPhi وDeepSeek نقطة انطلاق معقولة لتطبيق مجاني، ويُعد تبرير المطوّر نفسه للحد الأدنى المتمثل في آيفون 12 — الاستدلال المحدود بالذاكرة — تفسيرًا معقولًا ومحددًا بدلًا من متطلب أجهزة غامض.',
          'ما يجعل هذه المراجعة حذرة بدلًا من متحمسة هو حداثة عمر التطبيق وكونه مغلق المصدر: تستند ادعاءات الخصوصية والعمل دون إنترنت إلى كلمة المطوّر بدلًا من مراجعة مستقلة للشيفرة، والتطبيق له سجل أقصر من البدائل الأكثر رسوخًا.',
          'القراء الذين يريدون تطبيق دردشة مجانيًا دون اشتراك مع قصة خصوصية معقولة على الجهاز ينبغي عليهم تجربته؛ أما القراء الذين يعطون وزنًا أكبر لسجل راسخ على متجر التطبيقات وشيفرة مصدر قابلة للتدقيق المستقل فينبغي عليهم البدء بدلًا من ذلك بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو تخصيص ميزانية لـ[Private LLM](/ar/power-local-llm/private-llm-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Pocket AI - No Internet على متجر التطبيقات](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — السعر وتوافق المنصات.',
          '[الموقع الرسمي لـ Pocket AI](https://mypocketai.app/) — نظرة عامة على المنتج.',
          'مراسلات مباشرة مع فيصل، المطوّر في Dataweal، قُدِّمت إلى PromptQuorum قبل 8 سبتمبر 2026 — وصف التطبيق، وعدد النماذج في الكتالوج، ونموذج التسعير، وتبرير متطلبات الأجهزة، وحالة المصدر المفتوح.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — بديل مدفوع وأكثر رسوخًا وحصري لآبل بمكتبة نماذج أكبر بكثير.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — البديل المجاني ومفتوح المصدر مع استيراد GGUF يدوي.',
          '[أفضل تطبيقات LLM المحلية لآيفون في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — الاستعراض الكامل لتطبيقات آيفون.',
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — بديل مجاني قائم على Apple MLX.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات LLM المحلية عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-11',
    dateModified: '2026-09-11',
    next_refresh_due: '2027-03-11',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/pocket-ai-review-hero-ko.webp',
    title: 'Pocket AI 리뷰(2026년): 아이폰용 오프라인 온디바이스 AI 채팅',
    seoTitle: 'Pocket AI 리뷰 2026: 아이폰 오프라인 AI 채팅',
    intro:
      '[Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)은 [Dataweal](https://mypocketai.app/)의 개발자 Faisal이 만든 무료 아이폰 앱으로, [llama.cpp](https://github.com/ggml-org/llama.cpp)와 Metal 가속을 이용해 오픈 웨이트 언어 모델을 기기에서 직접 실행합니다. 계정이 필요 없고 서버와의 통신도 없으며, 모델을 다운로드하면 비행기 모드에서도 앱이 작동합니다. 앱 자체는 무료이며, 유료 Pro 잠금 해제로 온디바이스 Whisper 음성 입력이 추가됩니다. 사이드로드, TestFlight 베타, 또는 직접 빌드해야 하는 GitHub 프로젝트로만 제공되는 다른 많은 아이폰용 로컬 AI 앱과 달리, Pocket AI는 애플 앱스토어를 통해 직접 배포됩니다. 이 리뷰에서는 앱이 무엇을 하는지, 비용은 얼마인지, 어떤 하드웨어가 필요한지 다룹니다.',
    metaDescription:
      'Pocket AI - No Internet 리뷰 2026: llama.cpp를 통해 오프라인 온디바이스 AI 채팅을 제공하는 무료 아이폰 앱. Whisper 음성 입력을 위한 유료 일회성 Pro 잠금 해제, 구독 없음. 가격, 요구 사항, 앱스토어 배포.',
    twitterDescription:
      'Pocket AI - No Internet 리뷰 2026: llama.cpp와 Metal 가속으로 오픈 웨이트 모델을 기기에서 실행하는 무료 아이폰 앱. 온디바이스 Whisper 음성 입력을 위한 4.99달러 일회성 Pro 잠금 해제. 계정 불필요, 구독 없음, 비행기 모드에서 작동.',
    audience:
      '무료 오프라인 온디바이스 AI 채팅 앱을 고려하는 아이폰 사용자 대상 — 가격, Pro 잠금 해제, 지원되는 모델 계열, 하드웨어 요구 사항, 그리고 이 사이트의 다른 단일 앱 리뷰와의 비교를 다룹니다.',
    readTime: '8분 소요',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Pocket AI review',
    targetKeywords: [
      'pocket ai review',
      'pocket ai no internet',
      'pocket ai iphone app',
      'offline ai chat app iphone',
      'dataweal pocket ai',
      'on-device llama.cpp iphone app',
      'free local ai app iphone',
      'pocket ai pro unlock price',
    ],
    current_models_mentioned: ['Qwen', 'Gemma', 'Llama', 'Mistral', 'Phi', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone 12'],
    leadAnswerBlock:
      '**Pocket AI - No Internet는 [llama.cpp](https://github.com/ggml-org/llama.cpp)와 Metal 가속을 통해 오픈 웨이트 AI 모델을 완전히 기기에서 실행하는 무료 아이폰 앱입니다 — 계정도 서버도 필요 없으며, 모델을 다운로드하면 완전히 오프라인으로 사용할 수 있습니다.** [Dataweal](https://mypocketai.app/)의 Faisal이 만들었으며, 개발자에 따르면 카탈로그는 Qwen, Gemma, Llama, Mistral, Phi, DeepSeek 계열에 걸쳐 28개 모델로 구성됩니다. 텍스트 채팅은 무료로 사용할 수 있으며, 유료 Pro 잠금 해제로 온디바이스 Whisper 음성 입력이 추가됩니다. 개발자에 따르면 추론이 메모리에 제약을 받기 때문에 아이폰 12 이상이 필요합니다. 비교를 원한다면 [Private LLM 리뷰](/ko/power-local-llm/private-llm-review)나 [PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review)도 참고하세요.',
    quickAnswerTop: {
      en: {
        question: 'Is Pocket AI - No Internet worth downloading?',
        answer:
          'Yes, if you want a free, no-account iPhone app that runs open-weight AI models fully offline via llama.cpp, and you own an iPhone 12 or newer. The Pro unlock is optional and only adds on-device Whisper voice input — text chat is free (see Pricing below for the cost). Skip it if you need a larger, more mature curated model library or Android/desktop support; compare it against Private LLM or PocketPal AI first.',
        bullets: [
          'Free to download and use for text chat; no account or sign-in required.',
          'A paid, one-time Pro unlock adds on-device Whisper voice dictation (see Pricing below).',
          'Runs open-weight models via llama.cpp with Metal acceleration: Qwen, Gemma, Llama, Mistral, Phi, and DeepSeek families, 28 models in the catalogue per the developer.',
          'Works fully offline (airplane mode) once a model is downloaded.',
          'Requires an iPhone 12 or newer; the app is closed-source, per the developer.',
        ],
        updatedDate: '2026-09-11',
      },
      ko: {
        question: 'Pocket AI - No Internet는 다운로드할 가치가 있나요?',
        answer:
          '네, llama.cpp를 통해 오픈 웨이트 AI 모델을 완전히 오프라인으로 실행하는 무료, 계정 불필요 아이폰 앱을 원하고 아이폰 12 이상을 보유하고 있다면 그렇습니다. Pro 잠금 해제는 선택 사항이며 온디바이스 Whisper 음성 입력만 추가합니다 — 텍스트 채팅은 무료입니다(가격은 아래 가격 섹션 참고). 더 크고 성숙한 큐레이션 모델 라이브러리나 안드로이드/데스크톱 지원이 필요하다면 건너뛰고, 먼저 Private LLM이나 PocketPal AI와 비교해 보세요.',
        bullets: [
          '무료로 다운로드하여 텍스트 채팅에 사용 가능; 계정이나 로그인이 필요 없음.',
          '유료 일회성 Pro 잠금 해제로 온디바이스 Whisper 음성 받아쓰기 추가(가격은 아래 가격 섹션 참고).',
          'llama.cpp와 Metal 가속으로 오픈 웨이트 모델 실행: Qwen, Gemma, Llama, Mistral, Phi, DeepSeek 계열, 개발자에 따르면 카탈로그에 28개 모델.',
          '모델을 다운로드하면 완전히 오프라인(비행기 모드)에서 작동.',
          '아이폰 12 이상 필요; 개발자에 따르면 앱은 비공개 소스.',
        ],
        updatedDate: '2026-09-11',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Pocket AI 받기', anchor: 'get-it' },
      { label: 'Pocket AI란 무엇인가', anchor: 'what-is-pocket-ai' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '가격: 무료 앱과 일회성 Pro 잠금 해제', anchor: 'pricing' },
      { label: '지원되는 모델', anchor: 'models' },
      { label: '요구 사항: 왜 아이폰 12 이상이 필요한가', anchor: 'requirements' },
      { label: '개인정보 보호 및 오프라인 작동', anchor: 'privacy' },
      { label: '개발자의 말', anchor: 'from-the-maker' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: 'Pocket AI 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'Pocket AI를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'Pocket AI를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pocket AI - No Internet는 Dataweal의 개발자 Faisal이 만든 무료 아이폰 앱으로, llama.cpp와 Metal 가속을 통해 오픈 웨이트 AI 모델(Qwen, Gemma, Llama, Mistral, Phi, DeepSeek)을 완전히 기기에서 실행하며, 애플 앱스토어를 통해 직접 배포되고, 온디바이스 Whisper 음성 입력을 위한 유료 Pro 잠금 해제가 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '클라우드 챗봇에 가입하는 대신, 한 번만 AI 모델을 아이폰에 다운로드해 사용하는 무료 채팅 앱이라고 생각하면 됩니다 — 모델이 자신의 아이폰에서 실행되므로 입력한 내용이 기기 밖으로 나가지 않습니다.',
          },
        ],
        items: [
          '가격: 무료로 [다운로드](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)하여 텍스트 채팅에 사용 가능; 유료 Pro 잠금 해제로 온디바이스 Whisper 음성 입력 추가(아래 가격 섹션 참고).',
          '개발자: [Dataweal](https://mypocketai.app/)의 Faisal.',
          '엔진: [llama.cpp](https://github.com/ggml-org/llama.cpp)와 Metal 가속, 완전히 기기에서 실행.',
          '모델 카탈로그: 개발자에 따르면 Qwen, Gemma, Llama, Mistral, Phi, DeepSeek 계열에 걸쳐 28개 모델.',
          '오프라인: 모델을 다운로드하면 비행기 모드에서 작동; 채팅에 계정이나 서버 통신 불필요.',
          '요구 사항: 아이폰 12 이상 — 개발자는 이를 추론이 메모리에 제약을 받는 것 때문이라고 설명.',
          '오픈소스 여부: 개발자 자신의 설명에 따르면 비공개 소스.',
          '배포: [애플 앱스토어](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)에서 직접 제공 — 검색 가능하고, 애플의 심사를 거쳤으며, 자동 업데이트됩니다. 사이드로드, TestFlight 베타, 또는 직접 빌드해야 하는 GitHub 프로젝트로만 제공되는 일부 아이폰용 로컬 AI 앱과는 다릅니다.',
        ],
      },
      getItPocketAI: {
        id: 'get-it',
        title: 'Pocket AI 받기',
        content: [
          '**Pocket AI - No Internet는 애플 앱스토어에서 직접 받을 수 있습니다** — 사이드로딩, TestFlight 베타, 소스에서 직접 빌드할 필요가 전혀 없습니다.',
          '이 리뷰는 여러 플랫폼의 로컬 AI 도구를 정리한 PromptQuorum의 [로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory)와 짝을 이루는 콘텐츠입니다. Pocket AI는 아직 그곳에 자체 항목이 없습니다.',
        ],
        columns: ['플랫폼', '받는 방법'],
        rows: [
          {
            '플랫폼': '아이폰(iOS)',
            '받는 방법': '[앱스토어의 Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)',
          },
        ],
        note: '앱 자체는 무료로 다운로드할 수 있습니다. 선택 사항인 Pro 잠금 해제의 비용은 아래 가격 섹션을 참고하세요.',
      },
      whatIsPocketAI: {
        id: 'what-is-pocket-ai',
        title: 'Pocket AI란 무엇인가',
        content: [
          '**Pocket AI - No Internet는 오픈 웨이트 언어 모델을 다운로드하여 서버 측 구성 요소 없이 기기에서 직접 실행하는 아이폰 앱입니다.** 모델을 다운로드하면 응답을 생성하는 데 인터넷 연결이 필요 없습니다 — 추론은 널리 사용되는 오픈소스 추론 엔진인 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 로컬에서 실행되며, 애플의 Metal 그래픽 프레임워크로 가속됩니다.',
          '이 앱은 [Dataweal](https://mypocketai.app/)의 개발자 Faisal이 구축하고 유지 관리합니다. 개발자에 따르면, 다른 아이폰용 로컬 모델 앱들은 대개 채팅을 시작하기 전에 계정, 구독, 또는 서버 통신 중 하나를 요구했기 때문에 이 앱을 만들게 되었다고 합니다 — Pocket AI는 이 중 어느 것도 필요로 하지 않도록 설계되었습니다.',
          '이 앱은 "Pocket AI - No Internet"라는 이름으로 [애플 앱스토어](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)에서 제공됩니다. 이 리뷰는 앱의 아키텍처와 모델 카탈로그에 대한 개발자 자신의 설명, 그리고 공개된 앱스토어 목록 정보에 근거하며, 독립적인 코드 감사에 근거하지 않습니다 — 이 앱은 비공개 소스입니다(아래 개인정보 보호 섹션 참조).',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**Pocket AI 설정에는 몇 단계만 필요하며 계정 생성이 필요 없습니다.** 앱스토어 다운로드부터 첫 오프라인 응답까지 전체 과정은 선택한 모델의 다운로드 시간을 제외하면 보통 몇 분 정도 걸립니다.',
        ],
        numberedItems: [
          {
            title: '앱 다운로드하기',
            whyItMatters: '[애플 앱스토어에서 Pocket AI - No Internet를 받으세요](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702). 앱 자체는 무료이며 — 시작하는 데 구매가 필요 없습니다.',
          },
          {
            title: '카탈로그에서 모델 선택하기',
            whyItMatters: '개발자에 따르면 Qwen, Gemma, Llama, Mistral, Phi, DeepSeek 계열에 걸쳐 28개 모델로 구성된 앱 내 카탈로그에서 모델을 선택하세요.',
          },
          {
            title: '모델 다운로드하기',
            whyItMatters: '이 단계에는 인터넷 연결이 필요합니다. 다운로드 크기는 선택한 모델에 따라 다르며, 이후의 모든 단계는 네트워크 연결이 필요 없습니다.',
          },
          {
            title: '완전히 오프라인으로 채팅하기',
            whyItMatters: '모델을 다운로드한 후, 비행기 모드를 켜서 오프라인 작동을 직접 확인해 보세요. 채팅은 llama.cpp와 Metal 가속을 통해 완전히 기기에서 실행됩니다.',
          },
          {
            title: '선택 사항: 음성 입력을 위해 Pro 잠금 해제하기',
            whyItMatters: '유료 일회성 앱 내 구매로 받아쓰기용 온디바이스 Whisper 음성 입력이 잠금 해제됩니다(아래 가격 섹션 참고). 이는 선택 사항이며 — 텍스트 채팅은 이것 없이도 작동합니다.',
          },
        ],
        note: '정확한 다운로드 크기와 현재 모델 목록은 앱스토어 업데이트 사이에 변경될 수 있습니다 — 데이터 요금제가 제한적인 경우 대용량 다운로드를 하기 전에 앱 자체의 모델 카탈로그에서 최신 정보를 확인하세요.',
      },
      pricing: {
        id: 'pricing',
        title: '가격: 무료 앱과 일회성 Pro 잠금 해제',
        itemHeadings: true,
        content: [
          '**Pocket AI - No Internet는 다운로드와 텍스트 채팅 사용이 무료입니다.** 4.99달러의 일회성 앱 내 구매로 Pro 등급이 잠금 해제되며 온디바이스 Whisper 음성 입력이 추가됩니다. 기본 앱과 Pro 잠금 해제 모두 구독이 없습니다.',
        ],
        columns: ['지불하는 금액', '포함되는 내용', '포함되지 않는 내용'],
        rows: [
          {
            '지불하는 금액': '무료',
            '포함되는 내용': '28개 모델 카탈로그 전체를 이용한 완전한 텍스트 채팅, 다운로드 후 완전히 오프라인',
            '포함되지 않는 내용': 'Pro 잠금 해제가 필요한 온디바이스 Whisper 음성 입력',
          },
          {
            '지불하는 금액': '4.99달러(일회성)',
            '포함되는 내용': '무료 등급에 추가되는 온디바이스 Whisper 음성 입력 — 구독 없음',
            '포함되지 않는 내용': '반복적인 비용 — 이는 구독이 아닌 일회성 구매입니다',
          },
        ],
        note: '앱스토어 가격은 사전 통지 없이 변경될 수 있으며 지역에 따라 다를 수 있습니다. 구매 전 [앱스토어 목록](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702)에서 현재 가격을 확인하세요.',
      },
      models: {
        id: 'models',
        title: '지원되는 모델',
        content: [
          '**개발자에 따르면 Pocket AI의 카탈로그에는 Qwen, Gemma, Llama, Mistral, Phi, DeepSeek 계열에 걸쳐 28개의 오픈 웨이트 모델이 포함되어 있습니다.** 이 수치는 개발자로부터 직접 나온 것이며, PromptQuorum과의 소통 중 처음에 "25개 이상"이라고 설명했던 것에서 상향 조정되었습니다 — 앱의 카탈로그는 고정된 것이 아니라 적극적으로 확장되고 있는 것으로 보입니다.',
          '모델은 오픈소스 추론 엔진인 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 실행되며, 애플의 Metal 그래픽 프레임워크가 기기에서 GPU 가속을 제공합니다. 개발자는 이 리뷰 시점까지 특정 모델/기기 조합에 대해 독립적으로 검증된 벤치마크 수치를 발표하지 않았습니다. 성능이 중요한 독자는 의존하기 전에 자신의 아이폰에서 특정 모델을 직접 테스트해야 합니다.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항: 왜 아이폰 12 이상이 필요한가',
        content: [
          '**Pocket AI는 아이폰 12 이상이 필요합니다.** 개발자에 따르면 이 하한선이 존재하는 이유는 모델 추론이 메모리에 제약을 받기 때문입니다 — 기기에서 언어 모델을 실행하려면 모델의 가중치와 작업 컨텍스트를 담을 만큼 충분한 통합 메모리가 필요하며, 구형 아이폰은 카탈로그의 모델을 만족스럽게 실행할 만큼의 메모리가 없습니다.',
          '이는 개발자 자신이 밝힌 이유이며, 독립적으로 벤치마크된 기준이 아닙니다. 최소 사양에 있거나 그에 가까운 아이폰을 가진 독자는 카탈로그 중 가장 큰 모델보다 더 작은 모델이 더 현실적인 선택일 것이라고 예상해야 합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호 및 오프라인 작동',
        content: [
          '**Pocket AI는 계정도 로그인도 필요하지 않습니다.** 이 앱은 모델 다운로드 후 추론을 완전히 기기에서 실행하도록 설계되었기 때문에, 텍스트 채팅을 정상적으로 사용하는 동안 서버로 전송할 채팅 데이터가 없습니다 — 이는 단순히 명시된 정책이 아니라 아키텍처 자체가 대화를 휴대전화에 머물게 하는 것입니다.',
          '개발자에 따르면 Pro 등급의 음성 입력 또한 Whisper를 통해 기기에서 실행되며, 이는 받아쓰기 오디오가 전사 서버로 전송되지 않고 로컬에서 처리됨을 의미합니다.',
        ],
        items: [
          '**계정이 필요 없습니다.** 프로필을 만들거나 로그인하지 않아도 앱을 다운로드하여 텍스트 채팅에 사용할 수 있습니다.',
          '**다운로드 후 오프라인.** 모델을 다운로드하면 비행기 모드가 채팅을 막지 않습니다.',
          '**온디바이스 음성 입력.** 개발자에 따르면 Pro 등급의 Whisper 기반 받아쓰기는 클라우드 전사 API가 아니라 로컬에서 실행됩니다.',
          '**비공개 소스 앱.** 앱의 코드가 공개되지 않았기 때문에, 아키텍처 및 데이터 처리에 관한 주장은 독립적인 코드 감사가 아니라 개발자 자신의 진술과 공개된 앱스토어 목록 정보에 근거합니다.',
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '개발자의 말',
        content: [
          'PromptQuorum은 Dataweal에서 Pocket AI를 개발한 Faisal에게 앱과 가격 및 플랫폼 선택 뒤에 있는 사고방식을 설명해 달라고 요청했습니다. 다음 내용은 가독성을 위해 단락으로 재구성되었을 뿐, 개발자 본인의 말 그대로 제시되는 것이며 PromptQuorum의 독립적인 편집상의 평가가 아닙니다:',
          '"Pocket AI는 작은 불만에서 시작되었습니다. 아이폰에서 좋은 로컬 모델 앱들은 모두 먼저 무언가를 요구했습니다: 계정, 구독, 또는 서버 왕복 통신. 저는 그 어느 것도 원하지 않았습니다.',
          '이 앱은 llama.cpp와 Metal 가속을 통해 오픈 웨이트 모델을 아이폰에서 직접 실행합니다. Qwen, Gemma, Llama, Mistral, Phi, DeepSeek이 모두 카탈로그에 있으며, 오늘날 기준으로 28개 모델입니다. 계정도 서버도 없습니다. 모델을 다운로드하면 앱은 비행기 안, 터널 안, 또는 무엇에도 로그인한 적 없는 휴대전화 등 비행기 모드에서도 작동합니다. 음성 입력은 기기에서 실행되는 Whisper를 사용하므로 받아쓰기 역시 휴대전화를 벗어나지 않습니다.',
          '가격 정책도 같은 생각을 따릅니다. 앱은 무료이고 Pro 잠금 해제는 한 번에 4.99달러입니다. 구독은 없습니다. 저는 무언가를 빌려주기보다는 파는 쪽을 선호합니다.',
          '이 앱이 아닌 것: 오픈소스가 아니며, 오래된 하드웨어를 위한 것도 아닙니다. 아이폰 12 이상은 실제 요구 사항인데, 모델 추론이 메모리에 제약을 받기 때문이며 이를 우회할 정직한 방법은 없습니다.',
          '이것은 하나의 약속을 지닌 작은 앱입니다. 당신의 대화는 당신의 휴대전화에 남습니다. 그것이 이 제품의 전부입니다."',
        ],
        note: '— Faisal, 개발자, Dataweal',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '이점': '무료 기본 앱',
            '실제 사용에서의 의미': '28개 모델 카탈로그 전체를 이용한 텍스트 채팅은 비용이 들지 않으며 계정도 필요 없습니다.',
            '한계 / 유의 사항': '음성 입력에는 유료 Pro 잠금 해제가 필요하며, 무료로 포함되지 않습니다.',
          },
          {
            '이점': '유료 일회성 Pro 잠금 해제',
            '실제 사용에서의 의미': '음성 기능을 위해 추적하거나 취소할 구독이 없습니다 — 한 번만 결제하면 됩니다.',
            '한계 / 유의 사항': '개발자 자신의 설명에 따르면 음성 입력만 추가할 뿐, 그 외 추가 모델이나 기능은 잠금 해제하지 않습니다.',
          },
          {
            '이점': '주요 오픈 웨이트 계열을 아우르는 28개 모델 카탈로그',
            '실제 사용에서의 의미': '직접 모델 파일을 찾을 필요 없이 Qwen, Gemma, Llama, Mistral, Phi, DeepSeek 중에서 선택할 수 있습니다.',
            '한계 / 유의 사항': '카탈로그는 개발자가 선정한 것이며, 이 리뷰는 특정 아이폰 하드웨어에서 28개 모델 전체의 성능을 독립적으로 벤치마크하지 않았습니다.',
          },
          {
            '이점': '계정 불필요, 다운로드 후 완전히 오프라인',
            '실제 사용에서의 의미': '가입할 필요 없이 비행기 모드에서도 채팅이 작동합니다.',
            '한계 / 유의 사항': '앱이 비공개 소스이기 때문에 오프라인 작동 및 데이터 미수집 주장은 독립적인 코드 감사가 아니라 개발자 자신의 진술에 근거합니다.',
          },
          {
            '이점': 'Metal 가속을 갖춘 llama.cpp',
            '실제 사용에서의 의미': '자체 개발한 독점 엔진이 아니라 널리 채택된 오픈소스 추론 엔진을 사용합니다.',
            '한계 / 유의 사항': '실제 속도는 특정 모델과 아이폰 기종에 따라 달라지며, 이 리뷰는 독립적인 벤치마크 수치를 발표하지 않습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Pocket AI 대 대안 앱',
        columns: ['앱', '플랫폼', '가격', '모델 유연성', '핵심 차이점'],
        rows: [
          {
            '앱': 'Pocket AI - No Internet',
            '플랫폼': '아이폰 전용',
            '가격': '무료; 음성 입력을 위한 유료 일회성 Pro 잠금 해제',
            '모델 유연성': '개발자에 따르면 28개 모델 카탈로그(Qwen, Gemma, Llama, Mistral, Phi, DeepSeek)',
            '핵심 차이점': '무료 기본 앱; 비공개 소스; 여기서 비교한 앱 중 실적이 가장 짧음',
          },
          {
            '앱': '[Private LLM](/ko/power-local-llm/private-llm-review)',
            '플랫폼': '아이폰/아이패드/맥(애플 전용)',
            '가격': '4.99달러 일회성 구매',
            '모델 유연성': '140개 이상의 큐레이션 모델; OmniQuant/GPTQ 양자화',
            '핵심 차이점': '처음부터 유료지만 훨씬 더 큰 큐레이션 라이브러리와 3년의 앱스토어 실적을 보유',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': '아이폰/아이패드, 일부 안드로이드 지원',
            '가격': '무료, 오픈소스',
            '모델 유연성': '사용자가 Hugging Face 등에서 가져온 모든 GGUF 파일',
            '핵심 차이점': 'Pocket AI의 비공개 소스 앱과 달리 무료이고 오픈소스이며, 더 많은 수동 모델 관리가 필요',
          },
          {
            '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '플랫폼': '아이폰/아이패드/맥',
            '가격': '무료',
            '모델 유연성': 'Apple MLX 기반; 애플의 온디바이스 파운데이션 모델에 접근 가능',
            '핵심 차이점': 'llama.cpp가 아닌 애플의 MLX 프레임워크 위에 특별히 구축된 무료 대안',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 사항은 자주 변경됩니다 — 결정하기 전에 각 앱 자체의 목록에서 현재 세부 정보를 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pocket AI를 사용해야 하는 사람',
        items: [
          '**무료이고 계정이 필요 없는 오프라인 AI 채팅 앱을 원하는 아이폰 사용자.** 기본 앱은 비용이 들지 않으며, 카탈로그의 어떤 모델과도 채팅을 시작하는 데 가입이 필요 없습니다.',
          '**구독을 특별히 피하고 싶은 독자.** 무료 등급과 Pro 잠금 해제 모두 일회성 결제이며, 어느 쪽도 반복 청구가 없습니다.',
          '**구독 없이 온디바이스 음성 입력을 원하는 사용자.** Pro 잠금 해제는 개발자에 따르면 로컬에서 실행되는 Whisper 기반 받아쓰기를 위한 일회성 구매입니다.',
          '**이미 여러 아이폰 로컬 AI 앱을 비교 중인 독자.** 주요 오픈 웨이트 계열을 아우르는 28개 모델 카탈로그를 갖춘 Pocket AI는 Private LLM과 같은 유료 앱과 나란히 비교할 만한 합리적인 무료 기준점입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pocket AI를 사용하지 말아야 하는 사람',
        items: [
          '**안드로이드, 윈도우, 맥, 리눅스 사용자.** Pocket AI는 아이폰 전용 앱으로, 구글 플레이, 마이크로소프트 스토어, 맥 앱스토어, 리눅스 패키지 저장소 어디에도 등록되어 있지 않습니다.',
          '**아이폰 11 이하를 소유한 사용자.** 개발자에 따르면 추론이 메모리에 제약을 받기 때문에 앱에는 아이폰 12 이상이 필요합니다.',
          '**앱을 신뢰하기 전에 확립된 실적을 필요로 하는 독자.** Pocket AI는 Private LLM 같은 대안보다 앱스토어에서의 역사가 짧습니다 — 리뷰 수와 실적을 중요하게 여기는 독자는 이를 고려해야 합니다.',
          '**앱의 소스 코드를 직접 감사하고 싶은 독자.** 개발자에 따르면 Pocket AI는 비공개 소스입니다. [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review) 같은 오픈소스 대안은 독립적인 코드 검토를 가능하게 합니다.',
          '**공유되고 중앙에서 관리되는 배포를 원하는 팀이나 조직.** Pocket AI는 관리 콘솔이나 팀 결제 기능이 없는 단일 사용자, 단일 기기용 소비자 앱입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Pocket AI - No Internet는 무료인가요?',
            a: '네. 이 앱은 카탈로그의 어떤 모델과도 텍스트 채팅을 하는 데 무료로 다운로드하고 사용할 수 있습니다. 선택 사항인 Pro 잠금 해제의 비용은 위 가격 섹션을 참고하세요.',
          },
          {
            q: 'Pocket AI - No Internet는 누가 개발하나요?',
            a: 'Pocket AI는 [Dataweal](https://mypocketai.app/)의 Faisal이 개발합니다.',
          },
          {
            q: 'Pocket AI는 어떤 모델을 지원하나요?',
            a: '개발자에 따르면 앱의 카탈로그에는 Qwen, Gemma, Llama, Mistral, Phi, DeepSeek 계열에 걸쳐 28개의 오픈 웨이트 모델이 포함되어 있으며, Metal 가속을 갖춘 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 통해 실행됩니다.',
          },
          {
            q: 'Pocket AI는 인터넷 연결 없이 작동하나요?',
            a: '네, 모델을 다운로드하면 작동합니다. 앱은 모델이나 앱 업데이트를 다운로드할 때만 인터넷 연결이 필요하며, 그 이후 채팅은 비행기 모드를 포함해 완전히 오프라인으로 작동합니다.',
          },
          {
            q: 'Pocket AI를 실행하려면 어떤 아이폰이 필요한가요?',
            a: '개발자에 따르면 아이폰 12 이상입니다. 개발자는 모델 추론이 메모리에 제약을 받기 때문에 이 요구 사항이 존재한다고 밝혔습니다 — 구형 아이폰은 카탈로그의 모델을 만족스럽게 실행할 만큼의 통합 메모리가 없습니다.',
          },
          {
            q: 'Pocket AI - No Internet는 오픈소스인가요?',
            a: '아니요. 개발자는 이 앱이 비공개 소스임을 명확히 밝히고 있습니다.',
          },
          {
            q: 'Pro 잠금 해제에는 무엇이 포함되나요?',
            a: '일회성 Pro 잠금 해제(위 가격 섹션 참고)는 받아쓰기를 위한 온디바이스 Whisper 음성 입력을 추가합니다. 개발자 자신의 설명에 따르면 음성 입력 외에 추가 모델이나 기능은 추가하지 않습니다.',
          },
          {
            q: 'Pocket AI는 개인 데이터를 수집하거나 계정을 요구하나요?',
            a: '텍스트 채팅에 앱을 사용하는 데 계정이나 로그인이 필요하지 않습니다. 앱이 비공개 소스이기 때문에 이 리뷰는 독립적인 코드 감사가 아니라 개발자 자신의 진술과 공개된 앱스토어 목록 정보에 근거합니다.',
          },
          {
            q: 'Pocket AI는 Private LLM이나 PocketPal AI와 비교하면 어떤가요?',
            a: 'Pocket AI는 무료이며 선택적인 유료 일회성 음성 잠금 해제가 있고(위 가격 섹션 참고), 비공개 소스이며, 앱스토어에서의 역사가 더 짧습니다. [Private LLM](/ko/power-local-llm/private-llm-review)은 출시 때부터 4.99달러 일회성 구매이며 140개 이상의 더 크고 확립된 모델 라이브러리를 갖추고 있습니다. [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)는 무료이고 오픈소스이지만 GGUF 모델 파일을 수동으로 구해야 합니다. 비용, 모델 라이브러리의 규모와 성숙도, 또는 소스 코드 투명성 중 무엇을 가장 중요하게 여기는지에 따라 선택하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          'Pocket AI - No Internet는 간단한 약속을 지킵니다. 계정도 서버 통신도 없이 llama.cpp를 통해 오픈 웨이트 모델을 완전히 기기에서 실행하는 무료 아이폰 앱이며, 사이드로드나 베타 버전이 아니라 애플 앱스토어를 통해 배포됩니다.',
          'Qwen, Gemma, Llama, Mistral, Phi, DeepSeek 계열을 아우르는 28개 모델 카탈로그는 무료 앱치고는 합리적인 출발점이며, 아이폰 12 최소 사양에 대한 개발자 자신의 이유 — 메모리에 제약을 받는 추론 — 는 모호한 하드웨어 요구 사항이 아니라 그럴듯하고 구체적인 설명입니다.',
          '이 리뷰가 열광적이기보다 신중한 태도를 유지하는 이유는 앱이 아직 새롭고 비공개 소스이기 때문입니다. 개인정보 보호 및 오프라인 작동 주장은 독립적인 코드 검토가 아니라 개발자의 말에 근거하며, 이 앱은 더 확립된 대안보다 실적이 짧습니다.',
          '무료이고 구독이 없으며 그럴듯한 온디바이스 개인정보 보호 방식을 갖춘 채팅 앱을 원하는 독자는 시도해 볼 만합니다. 확립된 앱스토어 실적과 독립적으로 감사 가능한 소스 코드를 더 중요하게 여기는 독자는 대신 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)로 시작하거나 [Private LLM](/ko/power-local-llm/private-llm-review)을 위한 예산을 책정해야 합니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[앱스토어의 Pocket AI - No Internet](https://apps.apple.com/us/app/pocket-ai-no-internet/id6759989702) — 가격 및 플랫폼 호환성.',
          '[Pocket AI 공식 사이트](https://mypocketai.app/) — 제품 개요.',
          '2026년 9월 8일 이전에 PromptQuorum에 제공된 Dataweal의 개발자 Faisal과의 직접 서신 — 앱 설명, 모델 카탈로그 수, 가격 모델, 하드웨어 요구 사항에 대한 이유, 오픈소스 여부.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — 훨씬 더 큰 모델 라이브러리를 갖춘 유료이며 더 확립된 애플 전용 대안.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 수동 GGUF 가져오기가 필요한 무료 오픈소스 대안.',
          '[2026년 아이폰용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — 전체 아이폰 앱 종합 정리.',
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — Apple MLX 기반의 무료 대안.',
          '[완전한 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 플랫폼 전반의 로컬 LLM 도구에 대한 더 광범위한 디렉터리.',
        ],
      },
    },
  },
}
