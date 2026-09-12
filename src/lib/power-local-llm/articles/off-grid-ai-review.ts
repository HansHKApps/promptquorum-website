// Off Grid AI Review: Cross-Platform Local AI for iOS, Android, macOS, and Windows
// Slug: off-grid-ai-review
// Companion to: private-llm-review, pocketpal-ai-review, enclave-ai-review, loci-ai-review-offline-local-ai

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/off-grid-ai-review-hero-en.webp',
    title: 'Off Grid AI Review (2026): Cross-Platform Local AI for iOS, Android, macOS, and Windows',
    seoTitle: 'Off Grid AI Review 2026: Local AI for 4 Platforms',
    intro:
      'Off Grid AI, made by [Wednesday Solutions, Inc.](https://getoffgridai.co), is a free, open-source, account-free app that runs open-weight AI models entirely on-device across four platforms: iOS, Android, macOS, and Windows. Per the developer\'s own site, it has passed [180,000+ combined downloads](https://getoffgridai.co) across the App Store, Google Play, and GitHub, and its mobile client, [OGAM on GitHub](https://github.com/off-grid-ai/OGAM), has more than 3,000 stars under the MIT license. The App Store listing alone tells a thinner story — [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) shows a 3.1-star average from only 26 ratings, which is a weak signal in isolation. This review checks both pictures directly: the cross-platform download and star numbers from [getoffgridai.co](https://getoffgridai.co) and GitHub, and the narrower iOS-only rating from the App Store, so readers can weigh a small rating sample against a larger, verifiable open-source footprint.',
    metaDescription:
      'Off Grid AI review 2026: free, open-source, no-account local AI for iOS, Android, macOS, and Windows. 180K+ downloads, 3K+ GitHub stars, but a 3.1-star/26-rating App Store listing. Full verification, pricing, and alternatives.',
    twitterDescription:
      'Off Grid AI review 2026: free, open-source, cross-platform local AI (iOS/Android/macOS/Windows). 180K+ downloads and 3K+ GitHub stars per the developer, against a thin 3.1-star/26-rating App Store listing. Verified links, pricing, and how it compares to Private LLM, PocketPal AI, Enclave AI, and Loci.',
    audience:
      'Users comparing free, open-source, cross-platform local-AI apps against paid or mobile-only alternatives — covers verified download/star counts, the App Store rating gap, supported models, pricing, and privacy.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Off Grid AI review',
    targetKeywords: [
      'off grid ai review',
      'off grid ai app',
      'getoffgridai',
      'off grid ai github',
      'off grid ai vs private llm',
      'free local ai app iphone android',
      'off grid ai pro price',
      'open source local llm app cross platform',
    ],
    current_models_mentioned: ['Llama', 'Qwen 3', 'Qwen 3.5', 'Gemma 3', 'Gemma 4', 'Phi-4', 'Mistral', 'Stable Diffusion XL'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'Android 10+', 'Apple Silicon Mac (M1 or later)', 'Windows PC'],
    leadAnswerBlock:
      '**Off Grid AI is a free, open-source, account-free app that runs GGUF-format language models, Stable Diffusion image models, and Whisper speech-to-text entirely on-device on iOS, Android, macOS, and Windows.** Made by [Wednesday Solutions, Inc.](https://getoffgridai.co), it reports [180,000+ combined downloads](https://getoffgridai.co) across the App Store, Google Play, and GitHub, and its mobile repository, [OGAM](https://github.com/off-grid-ai/OGAM), carries more than 3,000 GitHub stars under the MIT license — figures this review verified directly against GitHub and the developer\'s own site, not just the developer\'s claim. Its [App Store listing](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), taken alone, shows only 26 ratings averaging 3.1 stars — a genuinely weak signal that this review does not hide behind the stronger cross-platform numbers. An optional Off Grid AI Pro tier ($69 lifetime or $49/year, per the developer\'s site) adds extras on top of a free core that already has no account, no subscription requirement, and no cloud dependency.',
    quickAnswerTop: {
      en: {
        question: 'Is Off Grid AI worth installing, given its weak App Store rating?',
        answer:
          'Yes, for most readers who want a free, open-source, cross-platform local-AI app — the 3.1-star/26-rating App Store listing is thin on its own, but it sits alongside a verified 3,000+ GitHub-star open-source codebase and 180,000+ combined downloads across the App Store, Google Play, and GitHub, which is a more complete picture than the App Store page shows in isolation. Skip it if you specifically want a single-purchase, non-open-source app with a large App Store rating history — Private LLM is the closer fit there.',
          bullets: [
          'Free core app: no account, no subscription, no cloud — verified on [getoffgridai.co](https://getoffgridai.co).',
          'Cross-platform: iOS 17+, Android 10+, macOS 14+ (Apple Silicon), and Windows — not iOS-only.',
          '180,000+ combined downloads and 3,000+ GitHub stars (MIT-licensed [OGAM](https://github.com/off-grid-ai/OGAM) repo) per the developer\'s own site, verified against GitHub directly.',
          'App Store-only signal is weak: [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) shows 3.1 stars from 26 ratings as of this review.',
          'Optional Off Grid AI Pro: $69 lifetime or $49/year, per the developer\'s pricing page — the core chat, vision, image generation, and voice features do not require it.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Off Grid AI Is', anchor: 'what-is-off-grid-ai' },
      { label: 'Get It: Download for Every Platform', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Pricing: Free Core vs. Off Grid AI Pro', anchor: 'pricing' },
      { label: 'Supported Models', anchor: 'supported-models' },
      { label: 'Downloads, GitHub Stars, and the App Store Rating Gap', anchor: 'traction-and-ratings' },
      { label: 'Privacy', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Off Grid AI vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Off Grid AI', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Off Grid AI', anchor: 'who-should-not-use' },
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
            text: 'Off Grid AI is a free, open-source, cross-platform (iOS, Android, macOS, Windows) app by Wednesday Solutions, Inc. that runs GGUF language models, Stable Diffusion image models, and Whisper speech-to-text entirely on-device, with 180,000+ combined downloads and 3,000+ GitHub stars, but only 26 App Store ratings.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a free, open-source alternative to a subscription AI chatbot — you install it on your phone, tablet, Mac, or PC, download a model once, and everything after that runs on your own hardware with no account and no internet required for chat.',
          },
        ],
        items: [
          'Free and open source: no account, no subscription, no cloud dependency for the core app — [MIT license](https://github.com/off-grid-ai/OGAM).',
          'Cross-platform: iOS, Android, macOS, and Windows — the desktop client (OGAD) is at stable version 0.0.43; the iOS App Store listing is at version 0.0.107.',
          '180,000+ combined downloads and 3,000+ GitHub stars, per [getoffgridai.co](https://getoffgridai.co) and verified directly on GitHub.',
          'App Store rating is thin in isolation: 3.1 stars from 26 ratings on [the iOS listing](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) as of this review — a fact this review states plainly alongside the stronger cross-platform numbers, not instead of them.',
          'Models: Llama, Qwen 3.5, Gemma, Phi-4, Mistral, and any GGUF-format model for chat; Stable Diffusion XL for image generation; Whisper for speech-to-text.',
          'Community: a Slack community and an active [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) subreddit, described by the developer as 600+ members.',
          'Optional Off Grid AI Pro: $69 lifetime (developer states this price is rising toward $149) or $49/year, per the developer\'s pricing page — not required for the core on-device chat, vision, image, or voice features.',
        ],
      },
      whatIsOffGridAI: {
        id: 'what-is-off-grid-ai',
        title: 'What Off Grid AI Is',
        content: [
          '**Off Grid AI is an open-source app that downloads and runs open-weight AI models directly on a phone, tablet, Mac, or Windows PC, with no server-side component for the core features.** Once a model is downloaded, chat, image generation, vision, and voice transcription all run without an internet connection.',
          'It is built by [Wednesday Solutions, Inc.](https://getoffgridai.co), whose positioning on its own site is "no account, no subscription for the core, no cloud." The project is split across several GitHub repositories under the [off-grid-ai organization](https://github.com/off-grid-ai): [OGAM](https://github.com/off-grid-ai/OGAM) (iOS and Android, the largest repo at 3,000+ stars), [OGAD](https://github.com/off-grid-ai/OGAD) (macOS and Windows desktop, currently at stable version 0.0.43), plus smaller companion repositories for enterprise governance (OGAC) and local file/text sharing between devices (OGAS).',
          'Off Grid AI\'s iOS/Android app first reached the App Store as [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), currently at version 0.0.107. That App Store-only view — 3.1 stars from 26 ratings at the time of this review — understates the project\'s actual reach once the desktop apps, GitHub releases, and Google Play installs are counted together: 180,000+ downloads and 3,000+ GitHub stars, per the developer\'s own homepage and verified directly against GitHub star counts in this review.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'Get It: Download for Every Platform',
        itemHeadings: true,
        content: [
          '**Off Grid AI is a genuine downloadable app on four platforms — there is no single "official" download; each platform has its own verified link.**',
        ],
        columns: ['Platform', 'Where to get it', 'Notes'],
        rows: [
          { 'Platform': '**iOS**', 'Where to get it': '[App Store listing](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)', 'Notes': 'Requires iOS 17+. Free download, in-app Pro purchase.' },
          { 'Platform': '**Android**', 'Where to get it': '[Google Play listing](https://play.google.com/store/apps/details?id=ai.offgridmobile)', 'Notes': 'Requires Android 10+. Direct APK also on [GitHub releases](https://github.com/off-grid-ai/OGAM/releases/latest).' },
          { 'Platform': '**macOS**', 'Where to get it': '[DMG download](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest.dmg)', 'Notes': 'Requires macOS 14+ on Apple Silicon (M1 or later). Desktop stable version 0.0.43.' },
          { 'Platform': '**Windows**', 'Where to get it': '[Setup .exe download](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest-setup.exe)', 'Notes': 'Desktop stable version 0.0.43, same release channel as macOS.' },
        ],
        note: 'This review is a companion to Off Grid AI\'s entry in the [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which lists it alongside other mobile and cross-platform local-AI apps. All four links above were checked directly for this review and returned a live page at the time of writing; version numbers and pricing can change between releases — confirm the current specifics on [getoffgridai.co](https://getoffgridai.co) before installing.',
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setting up Off Grid AI takes four steps and no account creation, on any of its four platforms.**',
        ],
        numberedItems: [
          {
            title: 'Install the app for your platform',
            whyItMatters: 'Use the App Store, Google Play, or the direct macOS/Windows download links above. All four are free downloads — there is no paywall to install the app itself.',
          },
          {
            title: 'Pick a model that fits your device',
            whyItMatters: 'Off Grid AI supports GGUF-format models from families including Llama, Qwen 3.5, Gemma, Phi-4, and Mistral. Phones and tablets handle smaller quantized models; a Mac or Windows PC with more RAM and a discrete or Apple Silicon GPU can run larger ones.',
          },
          {
            title: 'Download the model once',
            whyItMatters: 'Model files range from roughly 1 GB to double digits of gigabytes depending on parameter count and quantization. This step needs an internet connection; every step after it does not.',
          },
          {
            title: 'Chat, generate images, or transcribe speech offline',
            whyItMatters: 'Once a model is downloaded, turn on airplane mode to verify the offline claim yourself. Text chat, Stable Diffusion XL image generation, and Whisper-based voice transcription all run without a network connection.',
          },
          {
            title: 'Optional: join the community or upgrade to Pro',
            whyItMatters: 'The developer runs a Slack community and an [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) subreddit (described by the developer as 600+ members) for support and feature requests. Off Grid AI Pro is a separate, optional purchase layered on top — not required to use the core app.',
          },
        ],
        note: 'Exact model list, download sizes, and minimum OS versions can change between releases — confirm current specifics in the app or on [getoffgridai.co](https://getoffgridai.co) before committing to a large download on a limited data plan.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing: Free Core vs. Off Grid AI Pro',
        itemHeadings: true,
        content: [
          '**The core Off Grid AI app is free on all four platforms, with no account and no subscription required.** An optional Off Grid AI Pro tier adds extras for readers who want more; this review checked the price directly on the developer\'s own site.',
        ],
        columns: ['Tier', 'Price', 'What it covers'],
        rows: [
          { 'Tier': '**Core app**', 'Price': 'Free', 'What it covers': 'On-device chat, vision, Stable Diffusion XL image generation, and Whisper voice transcription — no account, no subscription, no cloud.' },
          { 'Tier': '**Off Grid AI Pro**', 'Price': '$69 lifetime or $49/year', 'What it covers': 'Developer states the lifetime price is increasing toward $149 over time; exact Pro-only features should be confirmed on the current pricing page before purchase.' },
        ],
        note: 'Pricing for optional tiers can change between app updates — this review confirmed the figures above against the developer\'s site at the time of writing, but readers should verify the current price before buying.',
      },
      supportedModels: {
        id: 'supported-models',
        title: 'Supported Models',
        content: [
          '**Off Grid AI supports any GGUF-format language model, plus dedicated image and speech models, rather than locking users into a single curated list.**',
          'For text and chat: Llama, Qwen 3 and Qwen 3.5, Gemma 3 and Gemma 4, Phi-4, Mistral, and other GGUF-format open-weight models. For image generation: Stable Diffusion XL and other Stable Diffusion-family models. For speech-to-text: Whisper-based transcription models. Model support depends on the app version and the device\'s available memory — larger models generally need a Mac or Windows PC rather than a phone.',
        ],
      },
      tractionAndRatings: {
        id: 'traction-and-ratings',
        title: 'Downloads, GitHub Stars, and the App Store Rating Gap',
        itemHeadings: true,
        content: [
          '**Off Grid AI\'s traction looks very different depending on which single source a reader checks — this review checked all of them rather than picking one.**',
          'On the developer\'s own homepage, [getoffgridai.co](https://getoffgridai.co) states 180,000+ combined downloads across the App Store, Google Play, and GitHub, and a "600+ strong community." This review verified the GitHub-star portion of that claim directly: the [off-grid-ai GitHub organization](https://github.com/off-grid-ai) shows the [OGAM repository](https://github.com/off-grid-ai/OGAM) (iOS and Android, MIT-licensed) at over 3,000 stars, with the [OGAD repository](https://github.com/off-grid-ai/OGAD) (macOS and Windows) at roughly 100 stars — the two together, plus smaller companion repositories, account for the "3,000+ GitHub stars" figure on the homepage.',
          'The [App Store listing](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) alone tells a much thinner story: 3.1 stars from only 26 ratings, at version 0.0.107, as of this review. That is a small, weak sample on its own — nowhere near enough ratings to draw a confident quality conclusion from the App Store page in isolation. This review states that fact plainly rather than letting the larger cross-platform numbers paper over it. The honest read: Off Grid AI has a verifiable, sizeable open-source following and download base, but its iOS App Store review history specifically is thin, and a reader relying only on the App Store star rating would see a materially weaker signal than the full picture supports.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy',
        content: [
          '**Off Grid AI\'s core positioning is "no account, no subscription for the core, no cloud."** Because chat, vision, image generation, and voice transcription run on-device once a model is downloaded, none of that content needs to leave the device to function. The app is open source under the MIT license for its mobile and desktop clients, which means the on-device processing claim can be independently checked in the published source code rather than taken only on the developer\'s word — an option closed-source competitors do not offer.',
          'Readers who want a fully audited privacy review should check the specific repository\'s source for the version they install, since privacy behavior in open-source software can change between releases.',
        ],
      },
      tradeoffs: {
        id: 'tradeoffs',
        title: 'Trade-Offs: Benefits vs. Limitations',
        itemHeadings: true,
        content: [
          '**Off Grid AI\'s biggest strength is being genuinely free, open source, and cross-platform at once — few local-AI apps cover all three.** Its biggest weakness is a thin App Store review history that undersells the size of its actual user base.',
        ],
        columns: ['Benefit', 'Limitation / caveat'],
        rows: [
          { 'Benefit': 'Free core app, no account, no subscription, no cloud dependency.', 'Limitation / caveat': 'Optional Pro tier ($69 lifetime or $49/year) is needed for some extras.' },
          { 'Benefit': 'Runs on iOS, Android, macOS, and Windows — genuinely cross-platform.', 'Limitation / caveat': 'Desktop (0.0.43) and mobile (0.0.107) version numbers differ, since they are separate codebases (OGAD vs. OGAM).' },
          { 'Benefit': 'Open source under MIT license; 3,000+ GitHub stars is independently verifiable.', 'Limitation / caveat': 'App Store rating is thin: only 26 ratings averaging 3.1 stars as of this review.' },
          { 'Benefit': 'Supports chat, vision, Stable Diffusion XL image generation, and Whisper voice — not chat-only.', 'Limitation / caveat': 'Larger, higher-quality models still need a Mac or Windows PC rather than a phone.' },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Off Grid AI vs. Alternatives',
        content: [
          '**Off Grid AI\'s closest comparisons are other mobile and cross-platform local-AI apps, not general chatbot apps.**',
        ],
        columns: ['App', 'Platforms', 'Price', 'Key difference'],
        rows: [
          { 'App': '**[Off Grid AI](/power-local-llm/off-grid-ai-review)**', 'Platforms': 'iOS/Android/macOS/Windows', 'Price': 'Free (Pro optional)', 'Key difference': 'Open source, 4 platforms, weak App Store rating sample.' },
          { 'App': '**[Private LLM](/power-local-llm/private-llm-review)**', 'Platforms': 'iPhone/iPad/Mac', 'Price': '$4.99 one-time', 'Key difference': 'Closed source, Apple-only, 140+ curated models, OmniQuant quantization.' },
          { 'App': '**[PocketPal AI](/power-local-llm/pocketpal-ai-review)**', 'Platforms': 'iOS/Android', 'Price': 'Free', 'Key difference': 'Open source (MIT), mobile-only, no desktop or image generation.' },
          { 'App': '**[Enclave AI](/power-local-llm/enclave-ai-review)**', 'Platforms': 'iOS/Android', 'Price': 'Free', 'Key difference': 'Mobile-only local chat app; compare model libraries directly.' },
          { 'App': '**[Loci](/power-local-llm/loci-ai-review-offline-local-ai)**', 'Platforms': 'iPhone/iPad/Android/Mac/Windows', 'Price': 'Free', 'Key difference': 'Curated model list and low-friction setup vs. Off Grid AI\'s open model library.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Off Grid AI',
        content: [
          'Readers who want a free, open-source, no-account local-AI app that works the same way across a phone, tablet, Mac, and Windows PC.',
          'Readers who value being able to check the source code behind an on-device privacy claim rather than relying only on a developer\'s marketing copy.',
          'Readers who want chat, image generation, and voice transcription in one app rather than separate single-purpose tools.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Off Grid AI',
        content: [
          'Readers who want a large, established App Store rating history before installing — Off Grid AI\'s iOS listing currently has only 26 ratings.',
          'Readers who specifically want a one-time-purchase, closed-source app with a long, curated model catalog — [Private LLM](/power-local-llm/private-llm-review) fits that case better.',
          'Readers who want to run large, frontier-scale models — those still need cloud AI or a high-end workstation, not a phone or laptop app.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Off Grid AI actually free?',
            a: 'The core app is free on iOS, Android, macOS, and Windows, with no account and no subscription required for on-device chat, vision, image generation, or voice transcription. An optional Off Grid AI Pro tier costs $69 lifetime or $49/year, per the developer\'s pricing page.',
          },
          {
            q: 'Why does Off Grid AI have such a low App Store rating?',
            a: 'The App Store listing shows 3.1 stars from only 26 ratings as of this review — a small sample that is a weak signal on its own. That number reflects iOS App Store reviews specifically; it does not capture the app\'s broader footprint across Android, macOS, Windows, and GitHub, where the developer reports 180,000+ combined downloads and where the mobile codebase has more than 3,000 GitHub stars.',
          },
          {
            q: 'Is Off Grid AI open source?',
            a: 'Yes. Its mobile client, OGAM, and desktop client, OGAD, are both published under the MIT license on GitHub, under the [off-grid-ai organization](https://github.com/off-grid-ai). This review verified the star counts and license directly on GitHub rather than relying only on the developer\'s claim.',
          },
          {
            q: 'What is the difference between Off Grid AI\'s desktop and mobile version numbers?',
            a: 'They are separate codebases with independent release cycles. The macOS and Windows desktop app (OGAD) is at stable version 0.0.43, while the iOS App Store listing (OGAM-based) is at version 0.0.107. A different version number on each platform is expected for a cross-platform project built from separate repositories, not an error.',
          },
          {
            q: 'What models does Off Grid AI support?',
            a: 'Any GGUF-format language model, including Llama, Qwen 3.5, Gemma, Phi-4, and Mistral families, plus Stable Diffusion XL for image generation and Whisper for speech-to-text transcription.',
          },
          {
            q: 'Does Off Grid AI have a community I can join?',
            a: 'The developer runs a Slack community and an active [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) subreddit, described on the developer\'s site as having 600+ members.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Off Grid AI earns a place among the better free, cross-platform local-AI options, with one honest caveat: its iOS App Store rating history is thin.** The 3.1-star/26-rating App Store listing is a weak signal in isolation, and this review does not pretend otherwise. But it sits alongside a verified, open-source codebase with 3,000+ GitHub stars and a developer-reported 180,000+ combined downloads across the App Store, Google Play, and GitHub — a materially stronger picture than the App Store page shows on its own. Readers who want the broadest free, open-source, four-platform option should install it and judge for themselves; readers who want a large existing App Store review history before committing should look at [Private LLM](/power-local-llm/private-llm-review) instead.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        content: [
          '[Off Grid AI official site](https://getoffgridai.co) — download counts, GitHub star claim, community size, and Pro pricing.',
          '[Off Grid AI - Private Local AI on the App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) — iOS version number, star rating, rating count, and price.',
          '[off-grid-ai GitHub organization](https://github.com/off-grid-ai) — repository list and star counts, verified directly for this review.',
          '[OGAM repository](https://github.com/off-grid-ai/OGAM) (iOS/Android, MIT license) — mobile star count and license.',
          '[OGAD repository](https://github.com/off-grid-ai/OGAD) (macOS/Windows) — desktop version number and releases.',
          '[Google Play listing](https://play.google.com/store/apps/details?id=ai.offgridmobile) — Android download link.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        content: [
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid, closed-source Apple-only alternative with 140+ curated models.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source mobile-only alternative.',
          '[Enclave AI Review](/power-local-llm/enclave-ai-review) — another free mobile local-AI app to compare model libraries.',
          '[Loci AI Review](/power-local-llm/loci-ai-review-offline-local-ai) — a curated, low-friction cross-platform alternative.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/off-grid-ai-review-hero-de.webp',
    title: 'Off Grid AI Test (2026): Plattformübergreifende lokale KI für iOS, Android, macOS und Windows',
    seoTitle: 'Off Grid AI Test 2026: Lokale KI für 4 Plattformen',
    intro:
      'Off Grid AI von [Wednesday Solutions, Inc.](https://getoffgridai.co) ist eine kostenlose, quelloffene App ohne Konto, die offene KI-Modelle vollständig auf dem Gerät ausführt — auf vier Plattformen: iOS, Android, macOS und Windows. Laut der eigenen Website des Entwicklers hat die App [über 180.000 Downloads](https://getoffgridai.co) im App Store, bei Google Play und auf GitHub zusammen erreicht, und der Mobil-Client [OGAM auf GitHub](https://github.com/off-grid-ai/OGAM) hat unter MIT-Lizenz mehr als 3.000 Sterne. Der App-Store-Eintrag allein zeichnet ein dünneres Bild — [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) zeigt einen Durchschnitt von nur 3,1 Sternen bei 26 Bewertungen, was isoliert betrachtet ein schwaches Signal ist. Dieser Test prüft beide Bilder direkt: die plattformübergreifenden Download- und Sternezahlen von [getoffgridai.co](https://getoffgridai.co) und GitHub sowie die schmalere iOS-Bewertung im App Store, damit Leser eine kleine Bewertungsstichprobe gegen eine größere, überprüfbare Open-Source-Basis abwägen können.',
    metaDescription:
      'Off Grid AI Test 2026: kostenlose, quelloffene, kontofreie lokale KI für iOS, Android, macOS und Windows. 180.000+ Downloads, 3.000+ GitHub-Sterne, aber nur 3,1 Sterne bei 26 Bewertungen im App Store. Vollständige Prüfung, Preise und Alternativen.',
    twitterDescription:
      'Off Grid AI Test 2026: kostenlose, quelloffene, plattformübergreifende lokale KI (iOS/Android/macOS/Windows). 180.000+ Downloads und 3.000+ GitHub-Sterne laut Entwickler, gegenüber einem dünnen App-Store-Eintrag mit 3,1 Sternen bei 26 Bewertungen. Geprüfte Links, Preise und Vergleich mit Private LLM, PocketPal AI, Enclave AI und Loci.',
    audience:
      'Leser, die kostenlose, quelloffene, plattformübergreifende lokale KI-Apps mit bezahlten oder mobil-only Alternativen vergleichen — mit geprüften Download-/Sternezahlen, der App-Store-Bewertungslücke, unterstützten Modellen, Preisen und Datenschutz.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Off Grid AI Test',
    targetKeywords: [
      'off grid ai test',
      'off grid ai app',
      'getoffgridai',
      'off grid ai github',
      'off grid ai vs private llm',
      'kostenlose lokale ki app iphone android',
      'off grid ai pro preis',
      'open source lokale llm app plattformübergreifend',
    ],
    current_models_mentioned: ['Llama', 'Qwen 3', 'Qwen 3.5', 'Gemma 3', 'Gemma 4', 'Phi-4', 'Mistral', 'Stable Diffusion XL'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'Android 10+', 'Apple-Silicon-Mac (M1 oder neuer)', 'Windows-PC'],
    leadAnswerBlock:
      '**Off Grid AI ist eine kostenlose, quelloffene App ohne Konto, die GGUF-Sprachmodelle, Stable-Diffusion-Bildmodelle und Whisper-Sprache-zu-Text vollständig auf dem Gerät ausführt — auf iOS, Android, macOS und Windows.** Entwickelt von [Wednesday Solutions, Inc.](https://getoffgridai.co), meldet die App [über 180.000 Downloads](https://getoffgridai.co) zusammen über App Store, Google Play und GitHub, und ihr Mobil-Repository [OGAM](https://github.com/off-grid-ai/OGAM) trägt unter MIT-Lizenz mehr als 3.000 GitHub-Sterne — Zahlen, die dieser Test direkt gegen GitHub und die eigene Website des Entwicklers geprüft hat, nicht nur gegen die Behauptung des Entwicklers. Der [App-Store-Eintrag](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) allein zeigt nur 26 Bewertungen mit einem Durchschnitt von 3,1 Sternen — ein wirklich schwaches Signal, das dieser Test nicht hinter den stärkeren plattformübergreifenden Zahlen versteckt. Eine optionale Off-Grid-AI-Pro-Stufe (69 $ einmalig oder 49 $/Jahr laut Website des Entwicklers) bietet Extras zusätzlich zu einem kostenlosen Kern, der bereits ohne Konto, ohne Abo-Pflicht und ohne Cloud-Abhängigkeit auskommt.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich Off Grid AI trotz der schwachen App-Store-Bewertung?',
        answer:
          'Ja, für die meisten Leser, die eine kostenlose, quelloffene, plattformübergreifende lokale KI-App wollen — der App-Store-Eintrag mit 3,1 Sternen bei 26 Bewertungen ist für sich genommen dünn, steht aber neben einer geprüften Open-Source-Codebasis mit über 3.000 GitHub-Sternen und über 180.000 Downloads insgesamt über App Store, Google Play und GitHub, was ein vollständigeres Bild ergibt, als die App-Store-Seite allein zeigt. Verzichten Sie darauf, wenn Sie speziell eine einmalig gekaufte, nicht quelloffene App mit langer App-Store-Bewertungshistorie wollen — dort passt Private LLM besser.',
        bullets: [
          'Kostenloser Kern: kein Konto, kein Abo, keine Cloud — geprüft auf [getoffgridai.co](https://getoffgridai.co).',
          'Plattformübergreifend: iOS 17+, Android 10+, macOS 14+ (Apple Silicon) und Windows — nicht nur iOS.',
          'Über 180.000 Downloads insgesamt und über 3.000 GitHub-Sterne (MIT-lizenziertes [OGAM](https://github.com/off-grid-ai/OGAM)-Repo) laut Website des Entwicklers, direkt gegen GitHub geprüft.',
          'Signal allein aus dem App Store ist schwach: [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) zeigt zum Zeitpunkt dieses Tests 3,1 Sterne bei 26 Bewertungen.',
          'Optional Off Grid AI Pro: 69 $ einmalig oder 49 $/Jahr laut Preisseite des Entwicklers — Kernfunktionen für Chat, Vision, Bildgenerierung und Sprache benötigen es nicht.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Off Grid AI ist', anchor: 'what-is-off-grid-ai' },
      { label: 'Download für jede Plattform', anchor: 'get-it' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Preise: Kostenloser Kern vs. Off Grid AI Pro', anchor: 'pricing' },
      { label: 'Unterstützte Modelle', anchor: 'supported-models' },
      { label: 'Downloads, GitHub-Sterne und die App-Store-Bewertungslücke', anchor: 'traction-and-ratings' },
      { label: 'Datenschutz', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Off Grid AI vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer Off Grid AI nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer Off Grid AI nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Off Grid AI ist eine kostenlose, quelloffene, plattformübergreifende (iOS, Android, macOS, Windows) App von Wednesday Solutions, Inc., die GGUF-Sprachmodelle, Stable-Diffusion-Bildmodelle und Whisper-Sprache-zu-Text vollständig auf dem Gerät ausführt, mit über 180.000 Downloads und über 3.000 GitHub-Sternen, aber nur 26 App-Store-Bewertungen.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als kostenlose, quelloffene Alternative zu einem Abo-Chatbot vor — Sie installieren es auf Telefon, Tablet, Mac oder PC, laden einmal ein Modell herunter, und alles danach läuft auf Ihrer eigenen Hardware, ohne Konto und ohne Internet für den Chat.',
          },
        ],
        items: [
          'Kostenlos und quelloffen: kein Konto, kein Abo, keine Cloud-Abhängigkeit für die Kern-App — [MIT-Lizenz](https://github.com/off-grid-ai/OGAM).',
          'Plattformübergreifend: iOS, Android, macOS und Windows — der Desktop-Client (OGAD) ist bei stabiler Version 0.0.43; der iOS-App-Store-Eintrag bei Version 0.0.107.',
          'Über 180.000 Downloads insgesamt und über 3.000 GitHub-Sterne laut [getoffgridai.co](https://getoffgridai.co), direkt auf GitHub geprüft.',
          'App-Store-Bewertung ist isoliert dünn: 3,1 Sterne bei 26 Bewertungen auf [dem iOS-Eintrag](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) zum Zeitpunkt dieses Tests — eine Tatsache, die dieser Test klar neben den stärkeren plattformübergreifenden Zahlen nennt, nicht anstelle davon.',
          'Modelle: Llama, Qwen 3.5, Gemma, Phi-4, Mistral und jedes GGUF-Format-Modell für Chat; Stable Diffusion XL für Bildgenerierung; Whisper für Sprache-zu-Text.',
          'Community: eine Slack-Community und ein aktives [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)-Subreddit, laut Entwickler mit über 600 Mitgliedern.',
          'Optional Off Grid AI Pro: 69 $ einmalig (Entwickler nennt einen steigenden Preis Richtung 149 $) oder 49 $/Jahr laut Preisseite des Entwicklers — nicht erforderlich für Kernfunktionen wie Chat, Vision, Bild oder Sprache.',
        ],
      },
      whatIsOffGridAI: {
        id: 'what-is-off-grid-ai',
        title: 'Was Off Grid AI ist',
        content: [
          '**Off Grid AI ist eine quelloffene App, die offene KI-Modelle direkt auf Telefon, Tablet, Mac oder Windows-PC herunterlädt und ausführt, ohne serverseitige Komponente für die Kernfunktionen.** Sobald ein Modell heruntergeladen ist, laufen Chat, Bildgenerierung, Vision und Sprachtranskription ohne Internetverbindung.',
          'Entwickelt wird die App von [Wednesday Solutions, Inc.](https://getoffgridai.co), deren Positionierung auf der eigenen Website lautet: "kein Konto, kein Abo für den Kern, keine Cloud". Das Projekt verteilt sich auf mehrere GitHub-Repositories unter der [off-grid-ai-Organisation](https://github.com/off-grid-ai): [OGAM](https://github.com/off-grid-ai/OGAM) (iOS und Android, das größte Repo mit über 3.000 Sternen), [OGAD](https://github.com/off-grid-ai/OGAD) (macOS- und Windows-Desktop, aktuell stabile Version 0.0.43), sowie kleinere Begleit-Repositories für Enterprise-Governance (OGAC) und lokales Datei-/Text-Sharing zwischen Geräten (OGAS).',
          'Die iOS/Android-App von Off Grid AI erschien zuerst im App Store als [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), aktuell bei Version 0.0.107. Diese rein aus dem App Store gewonnene Sicht — 3,1 Sterne bei 26 Bewertungen zum Zeitpunkt dieses Tests — unterschätzt die tatsächliche Reichweite des Projekts, sobald Desktop-Apps, GitHub-Releases und Google-Play-Installationen zusammengezählt werden: über 180.000 Downloads und über 3.000 GitHub-Sterne laut der eigenen Startseite des Entwicklers, in diesem Test direkt gegen GitHub-Sternezahlen geprüft.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'Download für jede Plattform',
        itemHeadings: true,
        content: [
          '**Off Grid AI ist eine echte herunterladbare App auf vier Plattformen — es gibt keinen einzelnen "offiziellen" Download; jede Plattform hat ihren eigenen geprüften Link.**',
        ],
        columns: ['Plattform', 'Wo man es bekommt', 'Hinweise'],
        rows: [
          { 'Plattform': '**iOS**', 'Wo man es bekommt': '[App-Store-Eintrag](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)', 'Hinweise': 'Benötigt iOS 17+. Kostenloser Download, optionaler In-App-Pro-Kauf.' },
          { 'Plattform': '**Android**', 'Wo man es bekommt': '[Google-Play-Eintrag](https://play.google.com/store/apps/details?id=ai.offgridmobile)', 'Hinweise': 'Benötigt Android 10+. Direkte APK auch auf [GitHub-Releases](https://github.com/off-grid-ai/OGAM/releases/latest).' },
          { 'Plattform': '**macOS**', 'Wo man es bekommt': '[DMG-Download](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest.dmg)', 'Hinweise': 'Benötigt macOS 14+ auf Apple Silicon (M1 oder neuer). Desktop-Stabilversion 0.0.43.' },
          { 'Plattform': '**Windows**', 'Wo man es bekommt': '[Setup-.exe-Download](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest-setup.exe)', 'Hinweise': 'Desktop-Stabilversion 0.0.43, gleicher Release-Kanal wie macOS.' },
        ],
        note: 'Dieser Test ist ein Begleitartikel zum Eintrag von Off Grid AI im [Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory), das die App neben anderen mobilen und plattformübergreifenden lokalen KI-Apps listet. Alle vier Links oben wurden für diesen Test direkt geprüft und zeigten zum Zeitpunkt der Erstellung eine aktive Seite; Versionsnummern und Preise können sich zwischen Releases ändern — prüfen Sie die aktuellen Angaben auf [getoffgridai.co](https://getoffgridai.co), bevor Sie installieren.',
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung von Off Grid AI dauert vier Schritte und erfordert keine Kontoerstellung, auf keiner der vier Plattformen.**',
        ],
        numberedItems: [
          {
            title: 'App für Ihre Plattform installieren',
            whyItMatters: 'Nutzen Sie App Store, Google Play oder die direkten macOS-/Windows-Download-Links oben. Alle vier sind kostenlose Downloads — es gibt keine Bezahlschranke für die Installation der App selbst.',
          },
          {
            title: 'Ein passendes Modell wählen',
            whyItMatters: 'Off Grid AI unterstützt GGUF-Format-Modelle aus Familien wie Llama, Qwen 3.5, Gemma, Phi-4 und Mistral. Telefone und Tablets bewältigen kleinere quantisierte Modelle; ein Mac oder Windows-PC mit mehr RAM und dedizierter oder Apple-Silicon-GPU kann größere ausführen.',
          },
          {
            title: 'Das Modell einmalig herunterladen',
            whyItMatters: 'Modelldateien reichen je nach Parameteranzahl und Quantisierung von etwa 1 GB bis in den zweistelligen Gigabyte-Bereich. Dieser Schritt braucht eine Internetverbindung; alle folgenden Schritte nicht.',
          },
          {
            title: 'Offline chatten, Bilder generieren oder Sprache transkribieren',
            whyItMatters: 'Sobald ein Modell heruntergeladen ist, aktivieren Sie den Flugmodus, um die Offline-Behauptung selbst zu prüfen. Textchat, Stable-Diffusion-XL-Bildgenerierung und Whisper-basierte Sprachtranskription laufen alle ohne Netzwerkverbindung.',
          },
          {
            title: 'Optional: der Community beitreten oder auf Pro upgraden',
            whyItMatters: 'Der Entwickler betreibt eine Slack-Community und ein [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)-Subreddit (laut Entwickler über 600 Mitglieder) für Support und Feature-Wünsche. Off Grid AI Pro ist ein separater, optionaler Kauf zusätzlich zur Kern-App — nicht erforderlich für die Nutzung.',
          },
        ],
        note: 'Genaue Modellliste, Download-Größen und Mindest-Betriebssystemversionen können sich zwischen Releases ändern — prüfen Sie die aktuellen Angaben in der App oder auf [getoffgridai.co](https://getoffgridai.co), bevor Sie einen großen Download über einen begrenzten Datentarif starten.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise: Kostenloser Kern vs. Off Grid AI Pro',
        itemHeadings: true,
        content: [
          '**Die Kern-App von Off Grid AI ist auf allen vier Plattformen kostenlos, ohne Konto und ohne Abo.** Eine optionale Off-Grid-AI-Pro-Stufe bietet Extras für Leser, die mehr wollen; dieser Test hat den Preis direkt auf der Website des Entwicklers geprüft.',
        ],
        columns: ['Stufe', 'Preis', 'Was enthalten ist'],
        rows: [
          { 'Stufe': '**Kern-App**', 'Preis': 'Kostenlos', 'Was enthalten ist': 'On-Device-Chat, Vision, Stable-Diffusion-XL-Bildgenerierung und Whisper-Sprachtranskription — kein Konto, kein Abo, keine Cloud.' },
          { 'Stufe': '**Off Grid AI Pro**', 'Preis': '69 $ einmalig oder 49 $/Jahr', 'Was enthalten ist': 'Entwickler nennt einen mit der Zeit auf 149 $ steigenden Einmalpreis; genaue Pro-exklusive Funktionen sollten vor dem Kauf auf der aktuellen Preisseite geprüft werden.' },
        ],
        note: 'Preise für optionale Stufen können sich zwischen App-Updates ändern — dieser Test hat die obigen Zahlen zum Zeitpunkt der Erstellung gegen die Website des Entwicklers geprüft, Leser sollten den aktuellen Preis vor dem Kauf aber selbst verifizieren.',
      },
      supportedModels: {
        id: 'supported-models',
        title: 'Unterstützte Modelle',
        content: [
          '**Off Grid AI unterstützt jedes Sprachmodell im GGUF-Format sowie dedizierte Bild- und Sprachmodelle, statt Nutzer auf eine einzige kuratierte Liste zu beschränken.**',
          'Für Text und Chat: Llama, Qwen 3 und Qwen 3.5, Gemma 3 und Gemma 4, Phi-4, Mistral und andere offene GGUF-Format-Modelle. Für Bildgenerierung: Stable Diffusion XL und andere Modelle der Stable-Diffusion-Familie. Für Sprache-zu-Text: Whisper-basierte Transkriptionsmodelle. Die Modellunterstützung hängt von der App-Version und dem verfügbaren Gerätespeicher ab — größere Modelle brauchen in der Regel einen Mac oder Windows-PC statt eines Telefons.',
        ],
      },
      tractionAndRatings: {
        id: 'traction-and-ratings',
        title: 'Downloads, GitHub-Sterne und die App-Store-Bewertungslücke',
        itemHeadings: true,
        content: [
          '**Die Reichweite von Off Grid AI sieht sehr unterschiedlich aus, je nachdem, welche einzelne Quelle man prüft — dieser Test hat alle geprüft, statt sich auf eine zu verlassen.**',
          'Auf der eigenen Startseite des Entwicklers, [getoffgridai.co](https://getoffgridai.co), werden über 180.000 Downloads insgesamt über App Store, Google Play und GitHub sowie eine "über 600-köpfige Community" genannt. Dieser Test hat den GitHub-Sterne-Teil dieser Behauptung direkt geprüft: Die [GitHub-Organisation off-grid-ai](https://github.com/off-grid-ai) zeigt das [OGAM-Repository](https://github.com/off-grid-ai/OGAM) (iOS und Android, MIT-lizenziert) mit über 3.000 Sternen, während das [OGAD-Repository](https://github.com/off-grid-ai/OGAD) (macOS und Windows) rund 100 Sterne hat — beide zusammen, plus kleinere Begleit-Repositories, ergeben die Zahl "über 3.000 GitHub-Sterne" auf der Startseite.',
          'Der [App-Store-Eintrag](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) allein zeichnet ein viel dünneres Bild: 3,1 Sterne bei nur 26 Bewertungen, bei Version 0.0.107, zum Zeitpunkt dieses Tests. Das ist für sich genommen eine kleine, schwache Stichprobe — bei Weitem nicht genug Bewertungen, um allein aus der App-Store-Seite ein verlässliches Qualitätsurteil abzuleiten. Dieser Test nennt diese Tatsache klar, statt sie hinter den größeren plattformübergreifenden Zahlen zu verstecken. Die ehrliche Einschätzung: Off Grid AI hat eine überprüfbare, beachtliche Open-Source-Fangemeinde und Download-Basis, aber speziell die iOS-App-Store-Bewertungshistorie ist dünn, und ein Leser, der sich nur auf die App-Store-Sternebewertung verlässt, sähe ein deutlich schwächeres Signal, als das Gesamtbild hergibt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz',
        content: [
          '**Off Grid AIs Kernpositionierung lautet "kein Konto, kein Abo für den Kern, keine Cloud".** Da Chat, Vision, Bildgenerierung und Sprachtranskription nach dem Download eines Modells auf dem Gerät laufen, müssen diese Inhalte das Gerät nicht verlassen, um zu funktionieren. Die App ist für ihre Mobil- und Desktop-Clients unter MIT-Lizenz quelloffen, was bedeutet, dass die Behauptung der On-Device-Verarbeitung im veröffentlichten Quellcode unabhängig geprüft werden kann, statt nur auf das Wort des Entwicklers vertrauen zu müssen — eine Option, die geschlossene Konkurrenten nicht bieten.',
          'Leser, die eine vollständig geprüfte Datenschutzbewertung wünschen, sollten den Quellcode des jeweiligen Repositories für die installierte Version prüfen, da sich das Datenschutzverhalten bei quelloffener Software zwischen Releases ändern kann.',
        ],
      },
      tradeoffs: {
        id: 'tradeoffs',
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        itemHeadings: true,
        content: [
          '**Off Grid AIs größte Stärke ist, gleichzeitig wirklich kostenlos, quelloffen und plattformübergreifend zu sein — das schaffen nur wenige lokale KI-Apps.** Seine größte Schwäche ist eine dünne App-Store-Bewertungshistorie, die die tatsächliche Größe der Nutzerbasis unterschätzt.',
        ],
        columns: ['Vorteil', 'Einschränkung / Hinweis'],
        rows: [
          { 'Vorteil': 'Kostenlose Kern-App, kein Konto, kein Abo, keine Cloud-Abhängigkeit.', 'Einschränkung / Hinweis': 'Optionale Pro-Stufe (69 $ einmalig oder 49 $/Jahr) wird für manche Extras benötigt.' },
          { 'Vorteil': 'Läuft auf iOS, Android, macOS und Windows — wirklich plattformübergreifend.', 'Einschränkung / Hinweis': 'Desktop- (0.0.43) und Mobil-Versionsnummer (0.0.107) unterscheiden sich, da es separate Codebasen sind (OGAD vs. OGAM).' },
          { 'Vorteil': 'Quelloffen unter MIT-Lizenz; über 3.000 GitHub-Sterne sind unabhängig überprüfbar.', 'Einschränkung / Hinweis': 'App-Store-Bewertung ist dünn: nur 26 Bewertungen mit 3,1 Sternen im Durchschnitt zum Zeitpunkt dieses Tests.' },
          { 'Vorteil': 'Unterstützt Chat, Vision, Stable-Diffusion-XL-Bildgenerierung und Whisper-Sprache — nicht nur Chat.', 'Einschränkung / Hinweis': 'Größere, hochwertigere Modelle brauchen weiterhin einen Mac oder Windows-PC statt eines Telefons.' },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Off Grid AI vs. Alternativen',
        content: [
          '**Off Grid AIs engste Vergleiche sind andere mobile und plattformübergreifende lokale KI-Apps, nicht allgemeine Chatbot-Apps.**',
        ],
        columns: ['App', 'Plattformen', 'Preis', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '**[Off Grid AI](/de/power-local-llm/off-grid-ai-review)**', 'Plattformen': 'iOS/Android/macOS/Windows', 'Preis': 'Kostenlos (Pro optional)', 'Wichtigster Unterschied': 'Quelloffen, 4 Plattformen, schwache App-Store-Bewertungsstichprobe.' },
          { 'App': '**[Private LLM](/de/power-local-llm/private-llm-review)**', 'Plattformen': 'iPhone/iPad/Mac', 'Preis': '4,99 $ einmalig', 'Wichtigster Unterschied': 'Closed Source, nur Apple, 140+ kuratierte Modelle, OmniQuant-Quantisierung.' },
          { 'App': '**[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)**', 'Plattformen': 'iOS/Android', 'Preis': 'Kostenlos', 'Wichtigster Unterschied': 'Quelloffen (MIT), nur mobil, kein Desktop und keine Bildgenerierung.' },
          { 'App': '**[Enclave AI](/de/power-local-llm/enclave-ai-review)**', 'Plattformen': 'iOS/Android', 'Preis': 'Kostenlos', 'Wichtigster Unterschied': 'Rein mobile lokale Chat-App; Modellbibliotheken direkt vergleichen.' },
          { 'App': '**[Loci](/de/power-local-llm/loci-ai-review-offline-local-ai)**', 'Plattformen': 'iPhone/iPad/Android/Mac/Windows', 'Preis': 'Kostenlos', 'Wichtigster Unterschied': 'Kuratierte Modellliste und reibungslose Einrichtung vs. Off Grid AIs offene Modellbibliothek.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer Off Grid AI nutzen sollte',
        content: [
          'Leser, die eine kostenlose, quelloffene, kontofreie lokale KI-App wollen, die auf Telefon, Tablet, Mac und Windows-PC gleich funktioniert.',
          'Leser, denen es wichtig ist, eine On-Device-Datenschutzbehauptung im Quellcode selbst prüfen zu können, statt sich nur auf die Marketing-Texte eines Entwicklers zu verlassen.',
          'Leser, die Chat, Bildgenerierung und Sprachtranskription in einer App wollen statt in mehreren Einzelzweck-Tools.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer Off Grid AI nicht nutzen sollte',
        content: [
          'Leser, die vor der Installation eine große, etablierte App-Store-Bewertungshistorie sehen wollen — der iOS-Eintrag von Off Grid AI hat aktuell nur 26 Bewertungen.',
          'Leser, die speziell eine einmalig gekaufte, closed-source App mit langem, kuratiertem Modellkatalog wollen — dafür passt [Private LLM](/de/power-local-llm/private-llm-review) besser.',
          'Leser, die große, hochmoderne Modelle betreiben wollen — dafür braucht es weiterhin Cloud-KI oder eine leistungsstarke Workstation, keine Telefon- oder Laptop-App.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Off Grid AI wirklich kostenlos?',
            a: 'Die Kern-App ist auf iOS, Android, macOS und Windows kostenlos, ohne Konto und ohne Abo für On-Device-Chat, Vision, Bildgenerierung oder Sprachtranskription. Eine optionale Off-Grid-AI-Pro-Stufe kostet laut Preisseite des Entwicklers 69 $ einmalig oder 49 $/Jahr.',
          },
          {
            q: 'Warum hat Off Grid AI eine so niedrige App-Store-Bewertung?',
            a: 'Der App-Store-Eintrag zeigt zum Zeitpunkt dieses Tests 3,1 Sterne bei nur 26 Bewertungen — eine kleine Stichprobe, die für sich genommen ein schwaches Signal ist. Diese Zahl spiegelt speziell die iOS-App-Store-Bewertungen wider; sie erfasst nicht die breitere Reichweite der App über Android, macOS, Windows und GitHub, wo der Entwickler über 180.000 Downloads insgesamt meldet und die Mobil-Codebasis über 3.000 GitHub-Sterne hat.',
          },
          {
            q: 'Ist Off Grid AI quelloffen?',
            a: 'Ja. Sowohl der Mobil-Client OGAM als auch der Desktop-Client OGAD sind unter MIT-Lizenz auf GitHub veröffentlicht, unter der [off-grid-ai-Organisation](https://github.com/off-grid-ai). Dieser Test hat die Sternezahlen und die Lizenz direkt auf GitHub geprüft, statt sich nur auf die Behauptung des Entwicklers zu verlassen.',
          },
          {
            q: 'Was ist der Unterschied zwischen den Desktop- und Mobil-Versionsnummern von Off Grid AI?',
            a: 'Es handelt sich um separate Codebasen mit unabhängigen Release-Zyklen. Die macOS- und Windows-Desktop-App (OGAD) ist bei stabiler Version 0.0.43, während der iOS-App-Store-Eintrag (basierend auf OGAM) bei Version 0.0.107 steht. Eine unterschiedliche Versionsnummer je Plattform ist bei einem plattformübergreifenden Projekt aus separaten Repositories zu erwarten, kein Fehler.',
          },
          {
            q: 'Welche Modelle unterstützt Off Grid AI?',
            a: 'Jedes Sprachmodell im GGUF-Format, einschließlich der Familien Llama, Qwen 3.5, Gemma, Phi-4 und Mistral, sowie Stable Diffusion XL für Bildgenerierung und Whisper für Sprache-zu-Text-Transkription.',
          },
          {
            q: 'Gibt es eine Community, der ich beitreten kann?',
            a: 'Der Entwickler betreibt eine Slack-Community und ein aktives [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)-Subreddit, laut Website des Entwicklers mit über 600 Mitgliedern.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Off Grid AI gehört zu den besseren kostenlosen, plattformübergreifenden lokalen KI-Optionen, mit einem ehrlichen Vorbehalt: Die iOS-App-Store-Bewertungshistorie ist dünn.** Der App-Store-Eintrag mit 3,1 Sternen bei 26 Bewertungen ist isoliert ein schwaches Signal, und dieser Test verschweigt das nicht. Er steht aber neben einer geprüften, quelloffenen Codebasis mit über 3.000 GitHub-Sternen und laut Entwickler über 180.000 Downloads insgesamt über App Store, Google Play und GitHub — ein deutlich vollständigeres Bild, als die App-Store-Seite allein zeigt. Leser, die die breiteste kostenlose, quelloffene Vier-Plattformen-Option wollen, sollten die App installieren und selbst urteilen; Leser, die vor dem Kauf eine große bestehende App-Store-Bewertungshistorie sehen wollen, sollten sich stattdessen [Private LLM](/de/power-local-llm/private-llm-review) ansehen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        content: [
          '[Offizielle Off-Grid-AI-Website](https://getoffgridai.co) — Download-Zahlen, GitHub-Sterne-Behauptung, Community-Größe und Pro-Preise.',
          '[Off Grid AI - Private Local AI im App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) — iOS-Versionsnummer, Sternebewertung, Bewertungsanzahl und Preis.',
          '[GitHub-Organisation off-grid-ai](https://github.com/off-grid-ai) — Repository-Liste und Sternezahlen, für diesen Test direkt geprüft.',
          '[OGAM-Repository](https://github.com/off-grid-ai/OGAM) (iOS/Android, MIT-Lizenz) — Mobil-Sternezahl und Lizenz.',
          '[OGAD-Repository](https://github.com/off-grid-ai/OGAD) (macOS/Windows) — Desktop-Versionsnummer und Releases.',
          '[Google-Play-Eintrag](https://play.google.com/store/apps/details?id=ai.offgridmobile) — Android-Download-Link.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        content: [
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) — ein breiteres Verzeichnis lokaler LLM-Tools über alle Plattformen hinweg.',
          '[Private LLM Test](/de/power-local-llm/private-llm-review) — eine bezahlte, closed-source, nur-Apple-Alternative mit 140+ kuratierten Modellen.',
          '[PocketPal AI Test](/de/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene, nur-mobile Alternative.',
          '[Enclave AI Test](/de/power-local-llm/enclave-ai-review) — eine weitere kostenlose mobile lokale KI-App zum Vergleich der Modellbibliotheken.',
          '[Loci AI Test](/de/power-local-llm/loci-ai-review-offline-local-ai) — eine kuratierte, reibungslose plattformübergreifende Alternative.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/off-grid-ai-review-hero-fr.webp',
    title: 'Avis Off Grid AI (2026) : IA locale multiplateforme pour iOS, Android, macOS et Windows',
    seoTitle: 'Avis Off Grid AI 2026 : IA locale sur 4 plateformes',
    intro:
      'Off Grid AI, créé par [Wednesday Solutions, Inc.](https://getoffgridai.co), est une application gratuite, open source et sans compte qui exécute des modèles d\'IA ouverts entièrement sur l\'appareil, sur quatre plateformes : iOS, Android, macOS et Windows. Selon le site du développeur, elle a dépassé [180 000 téléchargements cumulés](https://getoffgridai.co) entre l\'App Store, Google Play et GitHub, et son client mobile, [OGAM sur GitHub](https://github.com/off-grid-ai/OGAM), compte plus de 3 000 étoiles sous licence MIT. La fiche App Store, elle seule, raconte une histoire plus modeste — [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) affiche une moyenne de 3,1 étoiles sur seulement 26 avis, un signal faible isolément. Cet avis vérifie les deux images directement : les chiffres multiplateformes de téléchargements et d\'étoiles de [getoffgridai.co](https://getoffgridai.co) et GitHub, ainsi que la note iOS plus étroite de l\'App Store, afin que le lecteur puisse mettre en balance un petit échantillon d\'avis et une base open source plus large et vérifiable.',
    metaDescription:
      'Avis Off Grid AI 2026 : IA locale gratuite, open source, sans compte, pour iOS, Android, macOS et Windows. 180K+ téléchargements, 3K+ étoiles GitHub, mais seulement 3,1 étoiles sur 26 avis sur l\'App Store. Vérification complète, prix et alternatives.',
    twitterDescription:
      'Avis Off Grid AI 2026 : IA locale gratuite, open source et multiplateforme (iOS/Android/macOS/Windows). 180K+ téléchargements et 3K+ étoiles GitHub selon le développeur, face à une fiche App Store maigre (3,1 étoiles, 26 avis). Liens vérifiés, prix et comparaison avec Private LLM, PocketPal AI, Enclave AI et Loci.',
    audience:
      'Lecteurs comparant des applications d\'IA locale gratuites, open source et multiplateformes à des alternatives payantes ou mobile uniquement — couvre les chiffres vérifiés de téléchargements/étoiles, l\'écart de notation App Store, les modèles pris en charge, les prix et la confidentialité.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis Off Grid AI',
    targetKeywords: [
      'avis off grid ai',
      'off grid ai application',
      'getoffgridai',
      'off grid ai github',
      'off grid ai vs private llm',
      'application ia locale gratuite iphone android',
      'off grid ai pro prix',
      'application llm locale open source multiplateforme',
    ],
    current_models_mentioned: ['Llama', 'Qwen 3', 'Qwen 3.5', 'Gemma 3', 'Gemma 4', 'Phi-4', 'Mistral', 'Stable Diffusion XL'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'Android 10+', 'Mac Apple Silicon (M1 ou plus récent)', 'PC Windows'],
    leadAnswerBlock:
      '**Off Grid AI est une application gratuite, open source et sans compte qui exécute des modèles de langage au format GGUF, des modèles d\'image Stable Diffusion et la transcription vocale Whisper entièrement sur l\'appareil, sur iOS, Android, macOS et Windows.** Créée par [Wednesday Solutions, Inc.](https://getoffgridai.co), elle revendique [plus de 180 000 téléchargements cumulés](https://getoffgridai.co) entre l\'App Store, Google Play et GitHub, et son dépôt mobile, [OGAM](https://github.com/off-grid-ai/OGAM), affiche plus de 3 000 étoiles GitHub sous licence MIT — des chiffres que cet avis a vérifiés directement sur GitHub et le site du développeur, pas seulement acceptés sur parole. Sa [fiche App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), prise isolément, ne montre que 26 avis pour une moyenne de 3,1 étoiles — un signal réellement faible que cet avis n\'occulte pas derrière les chiffres multiplateformes plus favorables. Une offre Off Grid AI Pro optionnelle (69 $ à vie ou 49 $/an, selon le site du développeur) ajoute des extras à un cœur gratuit déjà sans compte, sans obligation d\'abonnement et sans dépendance au cloud.',
    quickAnswerTop: {
      fr: {
        question: 'Off Grid AI vaut-il l\'installation malgré sa note faible sur l\'App Store ?',
        answer:
          'Oui, pour la plupart des lecteurs qui veulent une application d\'IA locale gratuite, open source et multiplateforme — la fiche App Store à 3,1 étoiles sur 26 avis est maigre isolément, mais elle s\'accompagne d\'une base de code open source vérifiée de plus de 3 000 étoiles GitHub et de plus de 180 000 téléchargements cumulés entre l\'App Store, Google Play et GitHub, ce qui donne une image plus complète que la seule fiche App Store. Passez votre chemin si vous voulez spécifiquement une application à achat unique, non open source, avec un long historique d\'avis App Store — Private LLM correspond mieux à ce cas.',
        bullets: [
          'Application principale gratuite : sans compte, sans abonnement, sans cloud — vérifié sur [getoffgridai.co](https://getoffgridai.co).',
          'Multiplateforme : iOS 17+, Android 10+, macOS 14+ (Apple Silicon) et Windows — pas seulement iOS.',
          'Plus de 180 000 téléchargements cumulés et plus de 3 000 étoiles GitHub (dépôt [OGAM](https://github.com/off-grid-ai/OGAM) sous licence MIT) selon le site du développeur, vérifié directement sur GitHub.',
          'Le signal isolé de l\'App Store est faible : [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) affiche 3,1 étoiles sur 26 avis au moment de cet avis.',
          'Off Grid AI Pro en option : 69 $ à vie ou 49 $/an selon la page de tarifs du développeur — les fonctions principales de chat, vision, génération d\'images et voix n\'en ont pas besoin.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Ce qu\'est Off Grid AI', anchor: 'what-is-off-grid-ai' },
      { label: 'Télécharger sur chaque plateforme', anchor: 'get-it' },
      { label: 'Comment démarrer', anchor: 'how-to-get-started' },
      { label: 'Prix : cœur gratuit vs. Off Grid AI Pro', anchor: 'pricing' },
      { label: 'Modèles pris en charge', anchor: 'supported-models' },
      { label: 'Téléchargements, étoiles GitHub et écart de notation App Store', anchor: 'traction-and-ratings' },
      { label: 'Confidentialité', anchor: 'privacy' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'Off Grid AI vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser Off Grid AI', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser Off Grid AI', anchor: 'who-should-not-use' },
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
            text: 'Off Grid AI est une application gratuite, open source et multiplateforme (iOS, Android, macOS, Windows) de Wednesday Solutions, Inc. qui exécute des modèles de langage GGUF, des modèles d\'image Stable Diffusion et la transcription vocale Whisper entièrement sur l\'appareil, avec plus de 180 000 téléchargements cumulés et plus de 3 000 étoiles GitHub, mais seulement 26 avis sur l\'App Store.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme une alternative gratuite et open source à un chatbot IA par abonnement — vous l\'installez sur votre téléphone, tablette, Mac ou PC, téléchargez un modèle une fois, et tout ce qui suit tourne sur votre propre matériel, sans compte et sans internet nécessaire pour discuter.',
          },
        ],
        items: [
          'Gratuite et open source : sans compte, sans abonnement, sans dépendance au cloud pour l\'application principale — [licence MIT](https://github.com/off-grid-ai/OGAM).',
          'Multiplateforme : iOS, Android, macOS et Windows — le client de bureau (OGAD) est en version stable 0.0.43 ; la fiche App Store iOS est en version 0.0.107.',
          'Plus de 180 000 téléchargements cumulés et plus de 3 000 étoiles GitHub, selon [getoffgridai.co](https://getoffgridai.co) et vérifié directement sur GitHub.',
          'La note App Store est maigre isolément : 3,1 étoiles sur 26 avis sur [la fiche iOS](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) au moment de cet avis — un fait que cet avis énonce clairement à côté des chiffres multiplateformes plus favorables, pas à leur place.',
          'Modèles : Llama, Qwen 3.5, Gemma, Phi-4, Mistral et tout modèle au format GGUF pour le chat ; Stable Diffusion XL pour la génération d\'images ; Whisper pour la transcription vocale.',
          'Communauté : une communauté Slack et un subreddit actif [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/), décrit par le développeur comme comptant plus de 600 membres.',
          'Off Grid AI Pro en option : 69 $ à vie (le développeur indique que ce prix augmente vers 149 $) ou 49 $/an selon la page de tarifs du développeur — non requis pour les fonctions principales de chat, vision, image ou voix.',
        ],
      },
      whatIsOffGridAI: {
        id: 'what-is-off-grid-ai',
        title: 'Ce qu\'est Off Grid AI',
        content: [
          '**Off Grid AI est une application open source qui télécharge et exécute des modèles d\'IA ouverts directement sur un téléphone, une tablette, un Mac ou un PC Windows, sans composant serveur pour les fonctions principales.** Une fois un modèle téléchargé, le chat, la génération d\'images, la vision et la transcription vocale fonctionnent tous sans connexion internet.',
          'Elle est développée par [Wednesday Solutions, Inc.](https://getoffgridai.co), dont le positionnement sur son propre site est « pas de compte, pas d\'abonnement pour le cœur, pas de cloud ». Le projet est réparti sur plusieurs dépôts GitHub sous l\'[organisation off-grid-ai](https://github.com/off-grid-ai) : [OGAM](https://github.com/off-grid-ai/OGAM) (iOS et Android, le plus grand dépôt avec plus de 3 000 étoiles), [OGAD](https://github.com/off-grid-ai/OGAD) (bureau macOS et Windows, actuellement en version stable 0.0.43), plus de petits dépôts complémentaires pour la gouvernance en entreprise (OGAC) et le partage local de fichiers/texte entre appareils (OGAS).',
          'L\'application iOS/Android d\'Off Grid AI est apparue pour la première fois sur l\'App Store sous le nom [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), actuellement en version 0.0.107. Cette vue limitée à l\'App Store — 3,1 étoiles sur 26 avis au moment de cet avis — sous-estime la portée réelle du projet une fois les applications de bureau, les versions GitHub et les installations Google Play comptabilisées ensemble : plus de 180 000 téléchargements et plus de 3 000 étoiles GitHub, selon la page d\'accueil du développeur, vérifié directement par rapport aux compteurs d\'étoiles GitHub dans cet avis.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'Télécharger sur chaque plateforme',
        itemHeadings: true,
        content: [
          '**Off Grid AI est une véritable application téléchargeable sur quatre plateformes — il n\'existe pas un seul téléchargement « officiel » ; chaque plateforme a son propre lien vérifié.**',
        ],
        columns: ['Plateforme', 'Où l\'obtenir', 'Remarques'],
        rows: [
          { 'Plateforme': '**iOS**', 'Où l\'obtenir': '[Fiche App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)', 'Remarques': 'Nécessite iOS 17+. Téléchargement gratuit, achat Pro intégré optionnel.' },
          { 'Plateforme': '**Android**', 'Où l\'obtenir': '[Fiche Google Play](https://play.google.com/store/apps/details?id=ai.offgridmobile)', 'Remarques': 'Nécessite Android 10+. APK direct aussi sur les [versions GitHub](https://github.com/off-grid-ai/OGAM/releases/latest).' },
          { 'Plateforme': '**macOS**', 'Où l\'obtenir': '[Téléchargement DMG](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest.dmg)', 'Remarques': 'Nécessite macOS 14+ sur Apple Silicon (M1 ou plus récent). Version stable bureau 0.0.43.' },
          { 'Plateforme': '**Windows**', 'Où l\'obtenir': '[Téléchargement du .exe d\'installation](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest-setup.exe)', 'Remarques': 'Version stable bureau 0.0.43, même canal de version que macOS.' },
        ],
        note: 'Cet avis est un complément à la fiche d\'Off Grid AI dans le [répertoire des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory), qui le liste aux côtés d\'autres applications mobiles et multiplateformes d\'IA locale. Les quatre liens ci-dessus ont été vérifiés directement pour cet avis et menaient vers une page active au moment de la rédaction ; les numéros de version et les prix peuvent changer entre les versions — vérifiez les détails actuels sur [getoffgridai.co](https://getoffgridai.co) avant d\'installer.',
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment démarrer',
        content: [
          '**La configuration d\'Off Grid AI prend quatre étapes et ne nécessite aucune création de compte, sur aucune des quatre plateformes.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application pour votre plateforme',
            whyItMatters: 'Utilisez l\'App Store, Google Play ou les liens de téléchargement direct macOS/Windows ci-dessus. Les quatre sont des téléchargements gratuits — il n\'y a aucune barrière de paiement pour installer l\'application elle-même.',
          },
          {
            title: 'Choisir un modèle adapté à votre appareil',
            whyItMatters: 'Off Grid AI prend en charge les modèles au format GGUF de familles incluant Llama, Qwen 3.5, Gemma, Phi-4 et Mistral. Les téléphones et tablettes gèrent des modèles quantifiés plus petits ; un Mac ou un PC Windows avec plus de RAM et un GPU dédié ou Apple Silicon peut en exécuter de plus grands.',
          },
          {
            title: 'Télécharger le modèle une seule fois',
            whyItMatters: 'Les fichiers de modèle vont d\'environ 1 Go à plusieurs dizaines de gigaoctets selon le nombre de paramètres et la quantification. Cette étape nécessite une connexion internet ; toutes les suivantes non.',
          },
          {
            title: 'Discuter, générer des images ou transcrire la voix hors ligne',
            whyItMatters: 'Une fois un modèle téléchargé, activez le mode avion pour vérifier vous-même l\'affirmation de fonctionnement hors ligne. Le chat texte, la génération d\'images Stable Diffusion XL et la transcription vocale basée sur Whisper fonctionnent tous sans connexion réseau.',
          },
          {
            title: 'En option : rejoindre la communauté ou passer à Pro',
            whyItMatters: 'Le développeur gère une communauté Slack et un subreddit [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) (décrit par le développeur comme comptant plus de 600 membres) pour le support et les demandes de fonctionnalités. Off Grid AI Pro est un achat séparé et optionnel en plus de l\'application principale — non requis pour l\'utiliser.',
          },
        ],
        note: 'La liste exacte des modèles, les tailles de téléchargement et les versions minimales du système d\'exploitation peuvent changer entre les versions — vérifiez les détails actuels dans l\'application ou sur [getoffgridai.co](https://getoffgridai.co) avant de lancer un gros téléchargement sur un forfait de données limité.',
      },
      pricing: {
        id: 'pricing',
        title: 'Prix : cœur gratuit vs. Off Grid AI Pro',
        itemHeadings: true,
        content: [
          '**L\'application principale Off Grid AI est gratuite sur les quatre plateformes, sans compte ni abonnement requis.** Une offre Off Grid AI Pro optionnelle ajoute des extras pour les lecteurs qui en veulent plus ; cet avis a vérifié le prix directement sur le site du développeur.',
        ],
        columns: ['Niveau', 'Prix', 'Ce qui est inclus'],
        rows: [
          { 'Niveau': '**Application principale**', 'Prix': 'Gratuit', 'Ce qui est inclus': 'Chat, vision, génération d\'images Stable Diffusion XL et transcription vocale Whisper sur l\'appareil — sans compte, sans abonnement, sans cloud.' },
          { 'Niveau': '**Off Grid AI Pro**', 'Prix': '69 $ à vie ou 49 $/an', 'Ce qui est inclus': 'Le développeur indique que le prix à vie augmente avec le temps vers 149 $ ; les fonctionnalités exactes réservées à Pro doivent être vérifiées sur la page de tarifs actuelle avant l\'achat.' },
        ],
        note: 'Les prix des niveaux optionnels peuvent changer entre les mises à jour de l\'application — cet avis a vérifié les chiffres ci-dessus par rapport au site du développeur au moment de la rédaction, mais les lecteurs doivent vérifier le prix actuel avant l\'achat.',
      },
      supportedModels: {
        id: 'supported-models',
        title: 'Modèles pris en charge',
        content: [
          '**Off Grid AI prend en charge tout modèle de langage au format GGUF, ainsi que des modèles dédiés d\'image et de voix, plutôt que d\'enfermer les utilisateurs dans une seule liste organisée.**',
          'Pour le texte et le chat : Llama, Qwen 3 et Qwen 3.5, Gemma 3 et Gemma 4, Phi-4, Mistral et d\'autres modèles ouverts au format GGUF. Pour la génération d\'images : Stable Diffusion XL et d\'autres modèles de la famille Stable Diffusion. Pour la transcription vocale : des modèles basés sur Whisper. La prise en charge des modèles dépend de la version de l\'application et de la mémoire disponible sur l\'appareil — les modèles plus grands nécessitent généralement un Mac ou un PC Windows plutôt qu\'un téléphone.',
        ],
      },
      tractionAndRatings: {
        id: 'traction-and-ratings',
        title: 'Téléchargements, étoiles GitHub et écart de notation App Store',
        itemHeadings: true,
        content: [
          '**La traction d\'Off Grid AI semble très différente selon la source unique consultée — cet avis les a toutes vérifiées plutôt que de n\'en choisir qu\'une.**',
          'Sur sa propre page d\'accueil, [getoffgridai.co](https://getoffgridai.co) indique plus de 180 000 téléchargements cumulés entre l\'App Store, Google Play et GitHub, ainsi qu\'une « communauté de plus de 600 personnes ». Cet avis a vérifié directement la partie « étoiles GitHub » de cette affirmation : l\'[organisation GitHub off-grid-ai](https://github.com/off-grid-ai) montre que le [dépôt OGAM](https://github.com/off-grid-ai/OGAM) (iOS et Android, sous licence MIT) dépasse 3 000 étoiles, tandis que le [dépôt OGAD](https://github.com/off-grid-ai/OGAD) (macOS et Windows) en compte environ 100 — les deux ensemble, plus de petits dépôts complémentaires, expliquent le chiffre de « plus de 3 000 étoiles GitHub » de la page d\'accueil.',
          'La [fiche App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), à elle seule, raconte une histoire bien plus modeste : 3,1 étoiles sur seulement 26 avis, en version 0.0.107, au moment de cet avis. C\'est, isolément, un échantillon petit et faible — loin d\'être suffisant pour tirer une conclusion de qualité fiable de la seule page App Store. Cet avis énonce ce fait clairement plutôt que de le laisser masqué par les chiffres multiplateformes plus favorables. Le constat honnête : Off Grid AI a une base open source et de téléchargements vérifiable et conséquente, mais son historique d\'avis sur l\'App Store iOS spécifiquement est maigre, et un lecteur se fiant uniquement à la note App Store verrait un signal nettement plus faible que ce que l\'image complète suggère.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité',
        content: [
          '**Le positionnement principal d\'Off Grid AI est « pas de compte, pas d\'abonnement pour le cœur, pas de cloud ».** Comme le chat, la vision, la génération d\'images et la transcription vocale fonctionnent sur l\'appareil une fois un modèle téléchargé, ce contenu n\'a pas besoin de quitter l\'appareil pour fonctionner. L\'application est open source sous licence MIT pour ses clients mobile et bureau, ce qui signifie que l\'affirmation de traitement sur l\'appareil peut être vérifiée indépendamment dans le code source publié plutôt que d\'être acceptée sur la seule parole du développeur — une option que les concurrents fermés n\'offrent pas.',
          'Les lecteurs souhaitant un audit complet de la confidentialité devraient examiner le code source du dépôt spécifique à la version installée, car le comportement en matière de confidentialité des logiciels open source peut changer d\'une version à l\'autre.',
        ],
      },
      tradeoffs: {
        id: 'tradeoffs',
        title: 'Compromis : avantages vs. limites',
        itemHeadings: true,
        content: [
          '**La plus grande force d\'Off Grid AI est d\'être à la fois vraiment gratuite, open source et multiplateforme — peu d\'applications d\'IA locale cochent les trois cases à la fois.** Sa plus grande faiblesse est un historique d\'avis App Store maigre qui sous-estime la taille réelle de sa base d\'utilisateurs.',
        ],
        columns: ['Avantage', 'Limite / remarque'],
        rows: [
          { 'Avantage': 'Application principale gratuite, sans compte, sans abonnement, sans dépendance au cloud.', 'Limite / remarque': 'Le niveau Pro optionnel (69 $ à vie ou 49 $/an) est nécessaire pour certains extras.' },
          { 'Avantage': 'Fonctionne sur iOS, Android, macOS et Windows — vraiment multiplateforme.', 'Limite / remarque': 'Les numéros de version bureau (0.0.43) et mobile (0.0.107) diffèrent, car ce sont des bases de code séparées (OGAD vs. OGAM).' },
          { 'Avantage': 'Open source sous licence MIT ; plus de 3 000 étoiles GitHub vérifiables indépendamment.', 'Limite / remarque': 'La note App Store est maigre : seulement 26 avis pour une moyenne de 3,1 étoiles au moment de cet avis.' },
          { 'Avantage': 'Prend en charge le chat, la vision, la génération d\'images Stable Diffusion XL et la voix Whisper — pas seulement le chat.', 'Limite / remarque': 'Les modèles plus grands et de meilleure qualité nécessitent encore un Mac ou un PC Windows plutôt qu\'un téléphone.' },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Off Grid AI vs. alternatives',
        content: [
          '**Les comparaisons les plus pertinentes pour Off Grid AI sont d\'autres applications mobiles et multiplateformes d\'IA locale, pas des applications de chatbot génériques.**',
        ],
        columns: ['Application', 'Plateformes', 'Prix', 'Différence clé'],
        rows: [
          { 'Application': '**[Off Grid AI](/fr/power-local-llm/off-grid-ai-review)**', 'Plateformes': 'iOS/Android/macOS/Windows', 'Prix': 'Gratuit (Pro optionnel)', 'Différence clé': 'Open source, 4 plateformes, échantillon d\'avis App Store faible.' },
          { 'Application': '**[Private LLM](/fr/power-local-llm/private-llm-review)**', 'Plateformes': 'iPhone/iPad/Mac', 'Prix': '4,99 $ à vie', 'Différence clé': 'Closed source, Apple uniquement, 140+ modèles organisés, quantification OmniQuant.' },
          { 'Application': '**[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)**', 'Plateformes': 'iOS/Android', 'Prix': 'Gratuit', 'Différence clé': 'Open source (MIT), mobile uniquement, pas de bureau ni de génération d\'images.' },
          { 'Application': '**[Enclave AI](/fr/power-local-llm/enclave-ai-review)**', 'Plateformes': 'iOS/Android', 'Prix': 'Gratuit', 'Différence clé': 'Application de chat locale mobile uniquement ; comparez directement les bibliothèques de modèles.' },
          { 'Application': '**[Loci](/fr/power-local-llm/loci-ai-review-offline-local-ai)**', 'Plateformes': 'iPhone/iPad/Android/Mac/Windows', 'Prix': 'Gratuit', 'Différence clé': 'Modèles organisés, configuration simplifiée, sans bibliothèque ouverte.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser Off Grid AI',
        content: [
          'Les lecteurs qui veulent une application d\'IA locale gratuite, open source et sans compte, fonctionnant de la même façon sur téléphone, tablette, Mac et PC Windows.',
          'Les lecteurs qui tiennent à pouvoir vérifier une affirmation de confidentialité sur l\'appareil dans le code source, plutôt que de se fier uniquement au discours marketing d\'un développeur.',
          'Les lecteurs qui veulent le chat, la génération d\'images et la transcription vocale dans une seule application plutôt que dans des outils séparés à usage unique.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser Off Grid AI',
        content: [
          'Les lecteurs qui veulent un long historique d\'avis App Store établi avant d\'installer — la fiche iOS d\'Off Grid AI ne compte actuellement que 26 avis.',
          'Les lecteurs qui veulent spécifiquement une application à achat unique, non open source, avec un long catalogue de modèles organisés — [Private LLM](/fr/power-local-llm/private-llm-review) correspond mieux à ce cas.',
          'Les lecteurs qui veulent exécuter des modèles de très grande taille — cela nécessite toujours une IA cloud ou une station de travail haut de gamme, pas une application téléphone ou ordinateur portable.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Off Grid AI est-il vraiment gratuit ?',
            a: 'L\'application principale est gratuite sur iOS, Android, macOS et Windows, sans compte ni abonnement pour le chat, la vision, la génération d\'images ou la transcription vocale sur l\'appareil. Une offre Off Grid AI Pro optionnelle coûte 69 $ à vie ou 49 $/an, selon la page de tarifs du développeur.',
          },
          {
            q: 'Pourquoi Off Grid AI a-t-il une note App Store aussi basse ?',
            a: 'La fiche App Store affiche 3,1 étoiles sur seulement 26 avis au moment de cet avis — un petit échantillon qui est un signal faible en soi. Ce chiffre reflète spécifiquement les avis de l\'App Store iOS ; il ne capture pas la portée plus large de l\'application sur Android, macOS, Windows et GitHub, où le développeur revendique plus de 180 000 téléchargements cumulés et où la base de code mobile compte plus de 3 000 étoiles GitHub.',
          },
          {
            q: 'Off Grid AI est-il open source ?',
            a: 'Oui. Son client mobile, OGAM, et son client bureau, OGAD, sont tous deux publiés sous licence MIT sur GitHub, sous l\'[organisation off-grid-ai](https://github.com/off-grid-ai). Cet avis a vérifié directement les compteurs d\'étoiles et la licence sur GitHub plutôt que de se fier uniquement à l\'affirmation du développeur.',
          },
          {
            q: 'Quelle est la différence entre les numéros de version bureau et mobile d\'Off Grid AI ?',
            a: 'Ce sont des bases de code séparées avec des cycles de version indépendants. L\'application de bureau macOS et Windows (OGAD) est en version stable 0.0.43, tandis que la fiche App Store iOS (basée sur OGAM) est en version 0.0.107. Un numéro de version différent par plateforme est attendu pour un projet multiplateforme construit à partir de dépôts distincts, pas une erreur.',
          },
          {
            q: 'Quels modèles Off Grid AI prend-il en charge ?',
            a: 'Tout modèle de langage au format GGUF, y compris les familles Llama, Qwen 3.5, Gemma, Phi-4 et Mistral, ainsi que Stable Diffusion XL pour la génération d\'images et Whisper pour la transcription vocale.',
          },
          {
            q: 'Off Grid AI a-t-il une communauté à rejoindre ?',
            a: 'Le développeur gère une communauté Slack et un subreddit actif [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/), décrit sur le site du développeur comme comptant plus de 600 membres.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Off Grid AI mérite sa place parmi les meilleures options d\'IA locale gratuites et multiplateformes, avec une réserve honnête : son historique d\'avis App Store iOS est maigre.** La fiche App Store à 3,1 étoiles sur 26 avis est un signal faible isolément, et cet avis ne prétend pas le contraire. Mais elle s\'accompagne d\'une base de code open source vérifiée de plus de 3 000 étoiles GitHub et de plus de 180 000 téléchargements cumulés revendiqués par le développeur entre l\'App Store, Google Play et GitHub — une image nettement plus complète que ce que montre la seule page App Store. Les lecteurs qui veulent l\'option gratuite, open source et quatre plateformes la plus large devraient l\'installer et juger par eux-mêmes ; ceux qui veulent un long historique d\'avis App Store existant avant de s\'engager devraient plutôt regarder [Private LLM](/fr/power-local-llm/private-llm-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        content: [
          '[Site officiel d\'Off Grid AI](https://getoffgridai.co) — chiffres de téléchargements, revendication d\'étoiles GitHub, taille de communauté et prix Pro.',
          '[Off Grid AI - Private Local AI sur l\'App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) — numéro de version iOS, note, nombre d\'avis et prix.',
          '[Organisation GitHub off-grid-ai](https://github.com/off-grid-ai) — liste des dépôts et compteurs d\'étoiles, vérifiés directement pour cet avis.',
          '[Dépôt OGAM](https://github.com/off-grid-ai/OGAM) (iOS/Android, licence MIT) — compteur d\'étoiles mobile et licence.',
          '[Dépôt OGAD](https://github.com/off-grid-ai/OGAD) (macOS/Windows) — numéro de version bureau et versions.',
          '[Fiche Google Play](https://play.google.com/store/apps/details?id=ai.offgridmobile) — lien de téléchargement Android.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        content: [
          '[L\'annuaire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un annuaire plus large d\'outils LLM locaux sur toutes les plateformes.',
          '[Avis Private LLM](/fr/power-local-llm/private-llm-review) — une alternative payante, closed source, Apple uniquement, avec 140+ modèles organisés.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une alternative gratuite, open source, mobile uniquement.',
          '[Avis Enclave AI](/fr/power-local-llm/enclave-ai-review) — une autre application mobile locale gratuite pour comparer les bibliothèques de modèles.',
          '[Avis Loci AI](/fr/power-local-llm/loci-ai-review-offline-local-ai) — une alternative multiplateforme organisée et à faible friction.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/off-grid-ai-review-hero-es.webp',
    title: 'Reseña de Off Grid AI (2026): IA local multiplataforma para iOS, Android, macOS y Windows',
    seoTitle: 'Reseña de Off Grid AI 2026: IA local en 4 plataformas',
    intro:
      'Off Grid AI, creada por [Wednesday Solutions, Inc.](https://getoffgridai.co), es una aplicación gratuita, de código abierto y sin cuenta que ejecuta modelos de IA abiertos completamente en el dispositivo, en cuatro plataformas: iOS, Android, macOS y Windows. Según el propio sitio del desarrollador, ha superado [180.000 descargas combinadas](https://getoffgridai.co) entre App Store, Google Play y GitHub, y su cliente móvil, [OGAM en GitHub](https://github.com/off-grid-ai/OGAM), tiene más de 3.000 estrellas bajo licencia MIT. La ficha de la App Store por sí sola cuenta una historia más modesta: [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) muestra un promedio de 3,1 estrellas con solo 26 valoraciones, una señal débil de forma aislada. Esta reseña verifica ambas imágenes directamente: las cifras multiplataforma de descargas y estrellas de [getoffgridai.co](https://getoffgridai.co) y GitHub, y la valoración más estrecha solo de iOS en la App Store, para que el lector pueda sopesar una pequeña muestra de valoraciones frente a una base open source más amplia y verificable.',
    metaDescription:
      'Reseña de Off Grid AI 2026: IA local gratuita, de código abierto y sin cuenta para iOS, Android, macOS y Windows. 180K+ descargas, 3K+ estrellas en GitHub, pero solo 3,1 estrellas en 26 valoraciones en la App Store. Verificación completa, precios y alternativas.',
    twitterDescription:
      'Reseña de Off Grid AI 2026: IA local gratuita, de código abierto y multiplataforma (iOS/Android/macOS/Windows). 180K+ descargas y 3K+ estrellas en GitHub según el desarrollador, frente a una ficha de App Store modesta (3,1 estrellas, 26 valoraciones). Enlaces verificados, precios y comparación con Private LLM, PocketPal AI, Enclave AI y Loci.',
    audience:
      'Lectores que comparan aplicaciones de IA local gratuitas, de código abierto y multiplataforma con alternativas de pago o solo móviles — cubre cifras verificadas de descargas/estrellas, la brecha de valoración en la App Store, modelos compatibles, precios y privacidad.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Off Grid AI',
    targetKeywords: [
      'reseña off grid ai',
      'off grid ai app',
      'getoffgridai',
      'off grid ai github',
      'off grid ai vs private llm',
      'app ia local gratis iphone android',
      'off grid ai pro precio',
      'app llm local open source multiplataforma',
    ],
    current_models_mentioned: ['Llama', 'Qwen 3', 'Qwen 3.5', 'Gemma 3', 'Gemma 4', 'Phi-4', 'Mistral', 'Stable Diffusion XL'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'Android 10+', 'Mac Apple Silicon (M1 o posterior)', 'PC con Windows'],
    leadAnswerBlock:
      '**Off Grid AI es una aplicación gratuita, de código abierto y sin cuenta que ejecuta modelos de lenguaje en formato GGUF, modelos de imagen Stable Diffusion y transcripción de voz Whisper completamente en el dispositivo, en iOS, Android, macOS y Windows.** Creada por [Wednesday Solutions, Inc.](https://getoffgridai.co), reporta [más de 180.000 descargas combinadas](https://getoffgridai.co) entre App Store, Google Play y GitHub, y su repositorio móvil, [OGAM](https://github.com/off-grid-ai/OGAM), tiene más de 3.000 estrellas en GitHub bajo licencia MIT — cifras que esta reseña verificó directamente contra GitHub y el sitio del propio desarrollador, no solo aceptadas de palabra. Su [ficha en la App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), considerada sola, muestra solo 26 valoraciones con un promedio de 3,1 estrellas — una señal genuinamente débil que esta reseña no oculta detrás de las cifras multiplataforma más favorables. Un nivel opcional Off Grid AI Pro (69 $ de por vida o 49 $/año, según el sitio del desarrollador) añade extras sobre un núcleo gratuito que ya no requiere cuenta, ni suscripción obligatoria, ni dependencia de la nube.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar Off Grid AI a pesar de su baja valoración en la App Store?',
        answer:
          'Sí, para la mayoría de los lectores que quieren una app de IA local gratuita, de código abierto y multiplataforma — la ficha de App Store con 3,1 estrellas y 26 valoraciones es escasa por sí sola, pero coexiste con una base de código open source verificada de más de 3.000 estrellas en GitHub y más de 180.000 descargas combinadas entre App Store, Google Play y GitHub, lo que ofrece una imagen más completa de la que muestra solo la página de App Store. Evítala si quieres específicamente una app de pago único, no open source, con un largo historial de valoraciones en la App Store — Private LLM encaja mejor en ese caso.',
        bullets: [
          'Núcleo gratuito: sin cuenta, sin suscripción, sin nube — verificado en [getoffgridai.co](https://getoffgridai.co).',
          'Multiplataforma: iOS 17+, Android 10+, macOS 14+ (Apple Silicon) y Windows — no solo iOS.',
          'Más de 180.000 descargas combinadas y más de 3.000 estrellas en GitHub (repositorio [OGAM](https://github.com/off-grid-ai/OGAM) con licencia MIT) según el sitio del desarrollador, verificado directamente en GitHub.',
          'La señal aislada de la App Store es débil: [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) muestra 3,1 estrellas con 26 valoraciones al momento de esta reseña.',
          'Off Grid AI Pro opcional: 69 $ de por vida o 49 $/año según la página de precios del desarrollador — las funciones principales de chat, visión, generación de imágenes y voz no lo requieren.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Off Grid AI', anchor: 'what-is-off-grid-ai' },
      { label: 'Descárgalo para cada plataforma', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Precios: núcleo gratuito vs. Off Grid AI Pro', anchor: 'pricing' },
      { label: 'Modelos compatibles', anchor: 'supported-models' },
      { label: 'Descargas, estrellas en GitHub y la brecha de valoración en la App Store', anchor: 'traction-and-ratings' },
      { label: 'Privacidad', anchor: 'privacy' },
      { label: 'Ventajas y desventajas', anchor: 'tradeoffs' },
      { label: 'Off Grid AI frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Off Grid AI', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Off Grid AI', anchor: 'who-should-not-use' },
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
            text: 'Off Grid AI es una aplicación gratuita, de código abierto y multiplataforma (iOS, Android, macOS, Windows) de Wednesday Solutions, Inc. que ejecuta modelos de lenguaje GGUF, modelos de imagen Stable Diffusion y transcripción de voz Whisper completamente en el dispositivo, con más de 180.000 descargas combinadas y más de 3.000 estrellas en GitHub, pero solo 26 valoraciones en la App Store.',
          },
          {
            type: 'plain-terms',
            text: 'Piénsala como una alternativa gratuita y de código abierto a un chatbot de IA por suscripción: la instalas en tu teléfono, tableta, Mac o PC, descargas un modelo una vez, y todo lo demás se ejecuta en tu propio hardware, sin cuenta y sin necesitar internet para chatear.',
          },
        ],
        items: [
          'Gratuita y de código abierto: sin cuenta, sin suscripción, sin dependencia de la nube para la app principal — [licencia MIT](https://github.com/off-grid-ai/OGAM).',
          'Multiplataforma: iOS, Android, macOS y Windows — el cliente de escritorio (OGAD) está en la versión estable 0.0.43; la ficha de App Store de iOS está en la versión 0.0.107.',
          'Más de 180.000 descargas combinadas y más de 3.000 estrellas en GitHub según [getoffgridai.co](https://getoffgridai.co), verificado directamente en GitHub.',
          'La valoración de App Store es escasa de forma aislada: 3,1 estrellas con 26 valoraciones en [la ficha de iOS](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) al momento de esta reseña — un hecho que esta reseña señala claramente junto a las cifras multiplataforma más favorables, no en su lugar.',
          'Modelos: Llama, Qwen 3.5, Gemma, Phi-4, Mistral y cualquier modelo en formato GGUF para chat; Stable Diffusion XL para generación de imágenes; Whisper para transcripción de voz.',
          'Comunidad: una comunidad de Slack y un subreddit activo [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/), descrito por el desarrollador con más de 600 miembros.',
          'Off Grid AI Pro opcional: 69 $ de por vida (el desarrollador indica que este precio subirá hacia 149 $) o 49 $/año según la página de precios del desarrollador — no requerido para las funciones principales de chat, visión, imagen o voz.',
        ],
      },
      whatIsOffGridAI: {
        id: 'what-is-off-grid-ai',
        title: 'Qué es Off Grid AI',
        content: [
          '**Off Grid AI es una app de código abierto que descarga y ejecuta modelos de IA abiertos directamente en un teléfono, tableta, Mac o PC con Windows, sin componente del lado del servidor para las funciones principales.** Una vez descargado un modelo, el chat, la generación de imágenes, la visión y la transcripción de voz funcionan todos sin conexión a internet.',
          'Está construida por [Wednesday Solutions, Inc.](https://getoffgridai.co), cuyo posicionamiento en su propio sitio es "sin cuenta, sin suscripción para el núcleo, sin nube". El proyecto se distribuye en varios repositorios de GitHub bajo la [organización off-grid-ai](https://github.com/off-grid-ai): [OGAM](https://github.com/off-grid-ai/OGAM) (iOS y Android, el repositorio más grande con más de 3.000 estrellas), [OGAD](https://github.com/off-grid-ai/OGAD) (escritorio macOS y Windows, actualmente en la versión estable 0.0.43), además de repositorios complementarios más pequeños para gobernanza empresarial (OGAC) y para compartir archivos/texto localmente entre dispositivos (OGAS).',
          'La app iOS/Android de Off Grid AI apareció por primera vez en la App Store como [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), actualmente en la versión 0.0.107. Esa vista limitada a la App Store —3,1 estrellas con 26 valoraciones al momento de esta reseña— subestima el alcance real del proyecto una vez que se suman las apps de escritorio, las versiones de GitHub y las instalaciones de Google Play: más de 180.000 descargas y más de 3.000 estrellas en GitHub, según la propia página de inicio del desarrollador, verificado directamente contra los recuentos de estrellas de GitHub en esta reseña.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'Descárgalo para cada plataforma',
        itemHeadings: true,
        content: [
          '**Off Grid AI es una app genuinamente descargable en cuatro plataformas — no existe una única descarga "oficial"; cada plataforma tiene su propio enlace verificado.**',
        ],
        columns: ['Plataforma', 'Dónde conseguirla', 'Notas'],
        rows: [
          { 'Plataforma': '**iOS**', 'Dónde conseguirla': '[Ficha en App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)', 'Notas': 'Requiere iOS 17+. Descarga gratuita, compra Pro opcional dentro de la app.' },
          { 'Plataforma': '**Android**', 'Dónde conseguirla': '[Ficha en Google Play](https://play.google.com/store/apps/details?id=ai.offgridmobile)', 'Notas': 'Requiere Android 10+. APK directo también en las [versiones de GitHub](https://github.com/off-grid-ai/OGAM/releases/latest).' },
          { 'Plataforma': '**macOS**', 'Dónde conseguirla': '[Descarga en DMG](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest.dmg)', 'Notas': 'Requiere macOS 14+ en Apple Silicon (M1 o posterior). Versión estable de escritorio 0.0.43.' },
          { 'Plataforma': '**Windows**', 'Dónde conseguirla': '[Descarga del instalador .exe](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest-setup.exe)', 'Notas': 'Versión estable de escritorio 0.0.43, mismo canal de versiones que macOS.' },
        ],
        note: 'Esta reseña es un complemento a la ficha de Off Grid AI en el [directorio de software LLM local](/es/power-local-llm/local-llm-software-directory), que la lista junto a otras apps móviles y multiplataforma de IA local. Los cuatro enlaces anteriores se verificaron directamente para esta reseña y mostraron una página activa al momento de escribirla; los números de versión y precios pueden cambiar entre versiones — confirma los detalles actuales en [getoffgridai.co](https://getoffgridai.co) antes de instalar.',
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**Configurar Off Grid AI toma cuatro pasos y no requiere crear una cuenta, en ninguna de sus cuatro plataformas.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app para tu plataforma',
            whyItMatters: 'Usa App Store, Google Play o los enlaces de descarga directa de macOS/Windows anteriores. Las cuatro son descargas gratuitas — no hay barrera de pago para instalar la app en sí.',
          },
          {
            title: 'Elige un modelo adecuado para tu dispositivo',
            whyItMatters: 'Off Grid AI admite modelos en formato GGUF de familias como Llama, Qwen 3.5, Gemma, Phi-4 y Mistral. Los teléfonos y tabletas manejan modelos cuantizados más pequeños; un Mac o PC con Windows con más RAM y una GPU dedicada o Apple Silicon puede ejecutar modelos más grandes.',
          },
          {
            title: 'Descarga el modelo una vez',
            whyItMatters: 'Los archivos de modelo van desde aproximadamente 1 GB hasta decenas de gigabytes según el número de parámetros y la cuantización. Este paso necesita conexión a internet; todos los siguientes no.',
          },
          {
            title: 'Chatea, genera imágenes o transcribe voz sin conexión',
            whyItMatters: 'Una vez descargado un modelo, activa el modo avión para verificar tú mismo la afirmación de funcionamiento sin conexión. El chat de texto, la generación de imágenes con Stable Diffusion XL y la transcripción de voz basada en Whisper funcionan todos sin conexión de red.',
          },
          {
            title: 'Opcional: únete a la comunidad o actualiza a Pro',
            whyItMatters: 'El desarrollador mantiene una comunidad de Slack y un subreddit [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) (descrito por el desarrollador con más de 600 miembros) para soporte y solicitudes de funciones. Off Grid AI Pro es una compra separada y opcional además de la app principal — no requerida para usarla.',
          },
        ],
        note: 'La lista exacta de modelos, los tamaños de descarga y las versiones mínimas del sistema operativo pueden cambiar entre versiones — confirma los detalles actuales en la app o en [getoffgridai.co](https://getoffgridai.co) antes de comprometerte con una descarga grande en un plan de datos limitado.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios: núcleo gratuito vs. Off Grid AI Pro',
        itemHeadings: true,
        content: [
          '**La app principal de Off Grid AI es gratuita en las cuatro plataformas, sin cuenta ni suscripción requeridas.** Un nivel opcional Off Grid AI Pro añade extras para lectores que quieren más; esta reseña verificó el precio directamente en el sitio del desarrollador.',
        ],
        columns: ['Nivel', 'Precio', 'Qué incluye'],
        rows: [
          { 'Nivel': '**App principal**', 'Precio': 'Gratis', 'Qué incluye': 'Chat, visión, generación de imágenes con Stable Diffusion XL y transcripción de voz con Whisper en el dispositivo — sin cuenta, sin suscripción, sin nube.' },
          { 'Nivel': '**Off Grid AI Pro**', 'Precio': '69 $ de por vida o 49 $/año', 'Qué incluye': 'El desarrollador indica que el precio de por vida sube con el tiempo hacia 149 $; las funciones exactas exclusivas de Pro deben confirmarse en la página de precios vigente antes de comprar.' },
        ],
        note: 'Los precios de los niveles opcionales pueden cambiar entre actualizaciones de la app — esta reseña confirmó las cifras anteriores contra el sitio del desarrollador al momento de escribirla, pero los lectores deben verificar el precio actual antes de comprar.',
      },
      supportedModels: {
        id: 'supported-models',
        title: 'Modelos compatibles',
        content: [
          '**Off Grid AI admite cualquier modelo de lenguaje en formato GGUF, además de modelos dedicados de imagen y voz, en lugar de limitar a los usuarios a una única lista curada.**',
          'Para texto y chat: Llama, Qwen 3 y Qwen 3.5, Gemma 3 y Gemma 4, Phi-4, Mistral y otros modelos abiertos en formato GGUF. Para generación de imágenes: Stable Diffusion XL y otros modelos de la familia Stable Diffusion. Para transcripción de voz: modelos basados en Whisper. El soporte de modelos depende de la versión de la app y de la memoria disponible del dispositivo — los modelos más grandes generalmente necesitan un Mac o PC con Windows en lugar de un teléfono.',
        ],
      },
      tractionAndRatings: {
        id: 'traction-and-ratings',
        title: 'Descargas, estrellas en GitHub y la brecha de valoración en la App Store',
        itemHeadings: true,
        content: [
          '**La tracción de Off Grid AI luce muy diferente según qué única fuente se consulte — esta reseña las verificó todas en lugar de elegir una sola.**',
          'En su propia página de inicio, [getoffgridai.co](https://getoffgridai.co) declara más de 180.000 descargas combinadas entre App Store, Google Play y GitHub, y una "comunidad de más de 600 personas". Esta reseña verificó directamente la parte de estrellas de GitHub de esa afirmación: la [organización de GitHub off-grid-ai](https://github.com/off-grid-ai) muestra que el [repositorio OGAM](https://github.com/off-grid-ai/OGAM) (iOS y Android, con licencia MIT) supera las 3.000 estrellas, mientras que el [repositorio OGAD](https://github.com/off-grid-ai/OGAD) (macOS y Windows) tiene alrededor de 100 — los dos juntos, más repositorios complementarios más pequeños, explican la cifra de "más de 3.000 estrellas en GitHub" de la página de inicio.',
          'La [ficha de App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), tomada sola, cuenta una historia mucho más modesta: 3,1 estrellas con solo 26 valoraciones, en la versión 0.0.107, al momento de esta reseña. Eso es, de forma aislada, una muestra pequeña y débil — muy lejos de ser suficiente para sacar una conclusión de calidad confiable solo de la página de App Store. Esta reseña plantea ese hecho con claridad en lugar de dejarlo oculto tras las cifras multiplataforma más favorables. La lectura honesta: Off Grid AI tiene una base open source y de descargas verificable y considerable, pero su historial de valoraciones en la App Store de iOS específicamente es escaso, y un lector que confíe solo en la valoración de App Store vería una señal notablemente más débil de la que sugiere el panorama completo.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad',
        content: [
          '**El posicionamiento central de Off Grid AI es "sin cuenta, sin suscripción para el núcleo, sin nube".** Como el chat, la visión, la generación de imágenes y la transcripción de voz se ejecutan en el dispositivo una vez descargado un modelo, ese contenido no necesita salir del dispositivo para funcionar. La app es de código abierto bajo licencia MIT para sus clientes móvil y de escritorio, lo que significa que la afirmación de procesamiento en el dispositivo puede verificarse de forma independiente en el código fuente publicado, en lugar de aceptarse solo de palabra del desarrollador — una opción que los competidores de código cerrado no ofrecen.',
          'Los lectores que deseen una auditoría de privacidad totalmente verificada deberían revisar el código fuente del repositorio específico para la versión que instalan, ya que el comportamiento de privacidad del software de código abierto puede cambiar entre versiones.',
        ],
      },
      tradeoffs: {
        id: 'tradeoffs',
        title: 'Ventajas y desventajas',
        itemHeadings: true,
        content: [
          '**La mayor fortaleza de Off Grid AI es ser genuinamente gratuita, de código abierto y multiplataforma a la vez — pocas apps de IA local cubren las tres cosas.** Su mayor debilidad es un historial de valoraciones en App Store escaso que subestima el tamaño real de su base de usuarios.',
        ],
        columns: ['Ventaja', 'Limitación / advertencia'],
        rows: [
          { 'Ventaja': 'App principal gratuita, sin cuenta, sin suscripción, sin dependencia de la nube.', 'Limitación / advertencia': 'Se necesita el nivel Pro opcional (69 $ de por vida o 49 $/año) para algunos extras.' },
          { 'Ventaja': 'Funciona en iOS, Android, macOS y Windows — genuinamente multiplataforma.', 'Limitación / advertencia': 'Los números de versión de escritorio (0.0.43) y móvil (0.0.107) difieren, ya que son bases de código separadas (OGAD vs. OGAM).' },
          { 'Ventaja': 'Código abierto bajo licencia MIT; más de 3.000 estrellas en GitHub son verificables de forma independiente.', 'Limitación / advertencia': 'La valoración de App Store es escasa: solo 26 valoraciones con un promedio de 3,1 estrellas al momento de esta reseña.' },
          { 'Ventaja': 'Admite chat, visión, generación de imágenes con Stable Diffusion XL y voz Whisper — no solo chat.', 'Limitación / advertencia': 'Los modelos más grandes y de mayor calidad todavía necesitan un Mac o PC con Windows en lugar de un teléfono.' },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Off Grid AI frente a alternativas',
        content: [
          '**Las comparaciones más cercanas de Off Grid AI son otras apps móviles y multiplataforma de IA local, no apps de chatbot genéricas.**',
        ],
        columns: ['App', 'Plataformas', 'Precio', 'Diferencia clave'],
        rows: [
          { 'App': '**[Off Grid AI](/es/power-local-llm/off-grid-ai-review)**', 'Plataformas': 'iOS/Android/macOS/Windows', 'Precio': 'Gratis (Pro opcional)', 'Diferencia clave': 'Código abierto, 4 plataformas, muestra de valoraciones en App Store débil.' },
          { 'App': '**[Private LLM](/es/power-local-llm/private-llm-review)**', 'Plataformas': 'iPhone/iPad/Mac', 'Precio': '4,99 $ pago único', 'Diferencia clave': 'Código cerrado, solo Apple, 140+ modelos curados, cuantización OmniQuant.' },
          { 'App': '**[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)**', 'Plataformas': 'iOS/Android', 'Precio': 'Gratis', 'Diferencia clave': 'Código abierto (MIT), solo móvil, sin escritorio ni generación de imágenes.' },
          { 'App': '**[Enclave AI](/es/power-local-llm/enclave-ai-review)**', 'Plataformas': 'iOS/Android', 'Precio': 'Gratis', 'Diferencia clave': 'App de chat local solo móvil; compara bibliotecas de modelos directamente.' },
          { 'App': '**[Loci](/es/power-local-llm/loci-ai-review-offline-local-ai)**', 'Plataformas': 'iPhone/iPad/Android/Mac/Windows', 'Precio': 'Gratis', 'Diferencia clave': 'Modelos curados, configuración simple, sin biblioteca abierta.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Off Grid AI',
        content: [
          'Lectores que quieren una app de IA local gratuita, de código abierto y sin cuenta que funcione igual en teléfono, tableta, Mac y PC con Windows.',
          'Lectores a los que les importa poder verificar una afirmación de privacidad en el dispositivo en el código fuente, en lugar de confiar solo en el discurso de marketing de un desarrollador.',
          'Lectores que quieren chat, generación de imágenes y transcripción de voz en una sola app en lugar de herramientas separadas de un solo propósito.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Off Grid AI',
        content: [
          'Lectores que quieren un historial de valoraciones en App Store grande y establecido antes de instalar — la ficha de iOS de Off Grid AI actualmente tiene solo 26 valoraciones.',
          'Lectores que quieren específicamente una app de pago único, de código cerrado, con un catálogo de modelos curado y extenso — [Private LLM](/es/power-local-llm/private-llm-review) encaja mejor en ese caso.',
          'Lectores que quieren ejecutar modelos grandes de última generación — eso todavía necesita IA en la nube o una estación de trabajo de alta gama, no una app de teléfono o portátil.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Off Grid AI es realmente gratis?',
            a: 'La app principal es gratuita en iOS, Android, macOS y Windows, sin cuenta ni suscripción requerida para el chat, la visión, la generación de imágenes o la transcripción de voz en el dispositivo. Un nivel opcional Off Grid AI Pro cuesta 69 $ de por vida o 49 $/año, según la página de precios del desarrollador.',
          },
          {
            q: '¿Por qué Off Grid AI tiene una valoración tan baja en la App Store?',
            a: 'La ficha de App Store muestra 3,1 estrellas con solo 26 valoraciones al momento de esta reseña — una muestra pequeña que es una señal débil por sí sola. Esa cifra refleja específicamente las valoraciones de la App Store de iOS; no captura el alcance más amplio de la app en Android, macOS, Windows y GitHub, donde el desarrollador declara más de 180.000 descargas combinadas y donde la base de código móvil tiene más de 3.000 estrellas en GitHub.',
          },
          {
            q: '¿Off Grid AI es de código abierto?',
            a: 'Sí. Su cliente móvil, OGAM, y su cliente de escritorio, OGAD, se publican ambos bajo licencia MIT en GitHub, bajo la [organización off-grid-ai](https://github.com/off-grid-ai). Esta reseña verificó los recuentos de estrellas y la licencia directamente en GitHub, en lugar de confiar solo en la afirmación del desarrollador.',
          },
          {
            q: '¿Cuál es la diferencia entre los números de versión de escritorio y móvil de Off Grid AI?',
            a: 'Son bases de código separadas con ciclos de versión independientes. La app de escritorio para macOS y Windows (OGAD) está en la versión estable 0.0.43, mientras que la ficha de App Store de iOS (basada en OGAM) está en la versión 0.0.107. Un número de versión diferente por plataforma es esperable en un proyecto multiplataforma construido a partir de repositorios separados, no un error.',
          },
          {
            q: '¿Qué modelos admite Off Grid AI?',
            a: 'Cualquier modelo de lenguaje en formato GGUF, incluidas las familias Llama, Qwen 3.5, Gemma, Phi-4 y Mistral, además de Stable Diffusion XL para generación de imágenes y Whisper para transcripción de voz.',
          },
          {
            q: '¿Off Grid AI tiene una comunidad a la que pueda unirme?',
            a: 'El desarrollador mantiene una comunidad de Slack y un subreddit activo [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/), descrito en el sitio del desarrollador con más de 600 miembros.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Off Grid AI se gana un lugar entre las mejores opciones gratuitas y multiplataforma de IA local, con una salvedad honesta: su historial de valoraciones en App Store de iOS es escaso.** La ficha de App Store con 3,1 estrellas y 26 valoraciones es una señal débil de forma aislada, y esta reseña no lo oculta. Pero coexiste con una base de código open source verificada de más de 3.000 estrellas en GitHub y más de 180.000 descargas combinadas reportadas por el desarrollador entre App Store, Google Play y GitHub — un panorama notablemente más completo del que muestra la página de App Store por sí sola. Los lectores que quieran la opción gratuita, de código abierto y de cuatro plataformas más amplia deberían instalarla y juzgar por sí mismos; los que quieran un historial de valoraciones en App Store grande y ya establecido antes de comprometerse deberían mirar en su lugar [Private LLM](/es/power-local-llm/private-llm-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        content: [
          '[Sitio oficial de Off Grid AI](https://getoffgridai.co) — cifras de descargas, afirmación de estrellas en GitHub, tamaño de la comunidad y precios de Pro.',
          '[Off Grid AI - Private Local AI en la App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) — número de versión de iOS, valoración, cantidad de valoraciones y precio.',
          '[Organización de GitHub off-grid-ai](https://github.com/off-grid-ai) — lista de repositorios y recuentos de estrellas, verificados directamente para esta reseña.',
          '[Repositorio OGAM](https://github.com/off-grid-ai/OGAM) (iOS/Android, licencia MIT) — recuento de estrellas móvil y licencia.',
          '[Repositorio OGAD](https://github.com/off-grid-ai/OGAD) (macOS/Windows) — número de versión de escritorio y versiones.',
          '[Ficha en Google Play](https://play.google.com/store/apps/details?id=ai.offgridmobile) — enlace de descarga para Android.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        content: [
          '[El directorio completo de software LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas de LLM local en todas las plataformas.',
          '[Reseña de Private LLM](/es/power-local-llm/private-llm-review) — una alternativa de pago, de código cerrado, solo para Apple, con 140+ modelos curados.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una alternativa gratuita, de código abierto, solo móvil.',
          '[Reseña de Enclave AI](/es/power-local-llm/enclave-ai-review) — otra app móvil local gratuita para comparar bibliotecas de modelos.',
          '[Reseña de Loci AI](/es/power-local-llm/loci-ai-review-offline-local-ai) — una alternativa multiplataforma curada y de baja fricción.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/off-grid-ai-review-hero-pt.webp',
    title: 'Análise do Off Grid AI (2026): IA local multiplataforma para iOS, Android, macOS e Windows',
    seoTitle: 'Análise Off Grid AI 2026: IA local em 4 plataformas',
    intro:
      'Off Grid AI, criado pela [Wednesday Solutions, Inc.](https://getoffgridai.co), é um aplicativo gratuito, de código aberto e sem conta que executa modelos de IA abertos inteiramente no dispositivo, em quatro plataformas: iOS, Android, macOS e Windows. Segundo o próprio site do desenvolvedor, já passou de [180.000 downloads combinados](https://getoffgridai.co) entre App Store, Google Play e GitHub, e seu cliente móvel, [OGAM no GitHub](https://github.com/off-grid-ai/OGAM), tem mais de 3.000 estrelas sob licença MIT. A ficha da App Store isoladamente conta uma história mais modesta — [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) mostra uma média de 3,1 estrelas com apenas 26 avaliações, um sinal fraco isoladamente. Esta análise verifica os dois quadros diretamente: os números multiplataforma de downloads e estrelas de [getoffgridai.co](https://getoffgridai.co) e do GitHub, e a avaliação mais restrita apenas do iOS na App Store, para que o leitor possa ponderar uma amostra pequena de avaliações contra uma base open source maior e verificável.',
    metaDescription:
      'Análise do Off Grid AI 2026: IA local gratuita, de código aberto e sem conta para iOS, Android, macOS e Windows. 180K+ downloads, 3K+ estrelas no GitHub, mas apenas 3,1 estrelas em 26 avaliações na App Store. Verificação completa, preços e alternativas.',
    twitterDescription:
      'Análise do Off Grid AI 2026: IA local gratuita, de código aberto e multiplataforma (iOS/Android/macOS/Windows). 180K+ downloads e 3K+ estrelas no GitHub segundo o desenvolvedor, contra uma ficha modesta na App Store (3,1 estrelas, 26 avaliações). Links verificados, preços e comparação com Private LLM, PocketPal AI, Enclave AI e Loci.',
    audience:
      'Leitores que comparam aplicativos de IA local gratuitos, de código aberto e multiplataforma com alternativas pagas ou apenas móveis — cobre números verificados de downloads/estrelas, a lacuna de avaliação da App Store, modelos suportados, preços e privacidade.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Off Grid AI',
    targetKeywords: [
      'análise off grid ai',
      'off grid ai aplicativo',
      'getoffgridai',
      'off grid ai github',
      'off grid ai vs private llm',
      'app ia local gratuito iphone android',
      'off grid ai pro preço',
      'app llm local open source multiplataforma',
    ],
    current_models_mentioned: ['Llama', 'Qwen 3', 'Qwen 3.5', 'Gemma 3', 'Gemma 4', 'Phi-4', 'Mistral', 'Stable Diffusion XL'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'Android 10+', 'Mac Apple Silicon (M1 ou mais recente)', 'PC com Windows'],
    leadAnswerBlock:
      '**Off Grid AI é um aplicativo gratuito, de código aberto e sem conta que executa modelos de linguagem no formato GGUF, modelos de imagem Stable Diffusion e transcrição de voz Whisper inteiramente no dispositivo, em iOS, Android, macOS e Windows.** Criado pela [Wednesday Solutions, Inc.](https://getoffgridai.co), reporta [mais de 180.000 downloads combinados](https://getoffgridai.co) entre App Store, Google Play e GitHub, e seu repositório móvel, [OGAM](https://github.com/off-grid-ai/OGAM), tem mais de 3.000 estrelas no GitHub sob licença MIT — números que esta análise verificou diretamente no GitHub e no site do próprio desenvolvedor, não apenas aceitos de palavra. Sua [ficha na App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), isoladamente, mostra apenas 26 avaliações com média de 3,1 estrelas — um sinal genuinamente fraco que esta análise não esconde atrás dos números multiplataforma mais favoráveis. Um nível opcional Off Grid AI Pro (US$ 69 vitalício ou US$ 49/ano, segundo o site do desenvolvedor) adiciona extras sobre um núcleo gratuito que já não exige conta, nem assinatura obrigatória, nem dependência de nuvem.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o Off Grid AI apesar da baixa avaliação na App Store?',
        answer:
          'Sim, para a maioria dos leitores que querem um app de IA local gratuito, de código aberto e multiplataforma — a ficha da App Store com 3,1 estrelas e 26 avaliações é escassa isoladamente, mas coexiste com uma base de código open source verificada com mais de 3.000 estrelas no GitHub e mais de 180.000 downloads combinados entre App Store, Google Play e GitHub, o que dá um quadro mais completo do que a página da App Store mostra sozinha. Evite se você quer especificamente um app de compra única, não open source, com um longo histórico de avaliações na App Store — o Private LLM se encaixa melhor nesse caso.',
        bullets: [
          'Núcleo gratuito: sem conta, sem assinatura, sem nuvem — verificado em [getoffgridai.co](https://getoffgridai.co).',
          'Multiplataforma: iOS 17+, Android 10+, macOS 14+ (Apple Silicon) e Windows — não apenas iOS.',
          'Mais de 180.000 downloads combinados e mais de 3.000 estrelas no GitHub (repositório [OGAM](https://github.com/off-grid-ai/OGAM) sob licença MIT) segundo o site do desenvolvedor, verificado diretamente no GitHub.',
          'O sinal isolado da App Store é fraco: [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) mostra 3,1 estrelas com 26 avaliações no momento desta análise.',
          'Off Grid AI Pro opcional: US$ 69 vitalício ou US$ 49/ano segundo a página de preços do desenvolvedor — os recursos principais de chat, visão, geração de imagens e voz não exigem isso.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Off Grid AI', anchor: 'what-is-off-grid-ai' },
      { label: 'Baixe para cada plataforma', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Preços: núcleo gratuito vs. Off Grid AI Pro', anchor: 'pricing' },
      { label: 'Modelos suportados', anchor: 'supported-models' },
      { label: 'Downloads, estrelas no GitHub e a lacuna de avaliação na App Store', anchor: 'traction-and-ratings' },
      { label: 'Privacidade', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Off Grid AI vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o Off Grid AI', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o Off Grid AI', anchor: 'who-should-not-use' },
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
            text: 'Off Grid AI é um aplicativo gratuito, de código aberto e multiplataforma (iOS, Android, macOS, Windows) da Wednesday Solutions, Inc. que executa modelos de linguagem GGUF, modelos de imagem Stable Diffusion e transcrição de voz Whisper inteiramente no dispositivo, com mais de 180.000 downloads combinados e mais de 3.000 estrelas no GitHub, mas apenas 26 avaliações na App Store.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma alternativa gratuita e de código aberto a um chatbot de IA por assinatura — você instala no telefone, tablet, Mac ou PC, baixa um modelo uma vez, e tudo depois disso roda no seu próprio hardware, sem conta e sem precisar de internet para conversar.',
          },
        ],
        items: [
          'Gratuito e de código aberto: sem conta, sem assinatura, sem dependência de nuvem para o app principal — [licença MIT](https://github.com/off-grid-ai/OGAM).',
          'Multiplataforma: iOS, Android, macOS e Windows — o cliente desktop (OGAD) está na versão estável 0.0.43; a ficha da App Store no iOS está na versão 0.0.107.',
          'Mais de 180.000 downloads combinados e mais de 3.000 estrelas no GitHub, segundo [getoffgridai.co](https://getoffgridai.co) e verificado diretamente no GitHub.',
          'A avaliação da App Store é escassa isoladamente: 3,1 estrelas com 26 avaliações na [ficha do iOS](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) no momento desta análise — um fato que esta análise declara claramente ao lado dos números multiplataforma mais favoráveis, não em seu lugar.',
          'Modelos: Llama, Qwen 3.5, Gemma, Phi-4, Mistral e qualquer modelo em formato GGUF para chat; Stable Diffusion XL para geração de imagens; Whisper para transcrição de voz.',
          'Comunidade: uma comunidade no Slack e um subreddit ativo [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/), descrito pelo desenvolvedor com mais de 600 membros.',
          'Off Grid AI Pro opcional: US$ 69 vitalício (o desenvolvedor indica que esse preço sobe rumo a US$ 149) ou US$ 49/ano segundo a página de preços do desenvolvedor — não exigido para os recursos principais de chat, visão, imagem ou voz.',
        ],
      },
      whatIsOffGridAI: {
        id: 'what-is-off-grid-ai',
        title: 'O que é o Off Grid AI',
        content: [
          '**Off Grid AI é um app de código aberto que baixa e executa modelos de IA abertos diretamente em um telefone, tablet, Mac ou PC com Windows, sem componente do lado do servidor para os recursos principais.** Uma vez baixado um modelo, chat, geração de imagens, visão e transcrição de voz funcionam todos sem conexão à internet.',
          'É construído pela [Wednesday Solutions, Inc.](https://getoffgridai.co), cujo posicionamento no próprio site é "sem conta, sem assinatura para o núcleo, sem nuvem". O projeto está distribuído em vários repositórios do GitHub sob a [organização off-grid-ai](https://github.com/off-grid-ai): [OGAM](https://github.com/off-grid-ai/OGAM) (iOS e Android, o maior repositório com mais de 3.000 estrelas), [OGAD](https://github.com/off-grid-ai/OGAD) (desktop macOS e Windows, atualmente na versão estável 0.0.43), além de repositórios complementares menores para governança empresarial (OGAC) e compartilhamento local de arquivos/texto entre dispositivos (OGAS).',
          'O app iOS/Android do Off Grid AI apareceu primeiro na App Store como [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), atualmente na versão 0.0.107. Essa visão limitada à App Store — 3,1 estrelas com 26 avaliações no momento desta análise — subestima o alcance real do projeto quando os apps de desktop, os lançamentos no GitHub e as instalações do Google Play são somados: mais de 180.000 downloads e mais de 3.000 estrelas no GitHub, segundo a própria página inicial do desenvolvedor, verificado diretamente contra as contagens de estrelas do GitHub nesta análise.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'Baixe para cada plataforma',
        itemHeadings: true,
        content: [
          '**Off Grid AI é um app genuinamente baixável em quatro plataformas — não existe um único download "oficial"; cada plataforma tem seu próprio link verificado.**',
        ],
        columns: ['Plataforma', 'Onde conseguir', 'Notas'],
        rows: [
          { 'Plataforma': '**iOS**', 'Onde conseguir': '[Ficha na App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)', 'Notas': 'Requer iOS 17+. Download gratuito, compra Pro opcional dentro do app.' },
          { 'Plataforma': '**Android**', 'Onde conseguir': '[Ficha no Google Play](https://play.google.com/store/apps/details?id=ai.offgridmobile)', 'Notas': 'Requer Android 10+. APK direto também nos [lançamentos do GitHub](https://github.com/off-grid-ai/OGAM/releases/latest).' },
          { 'Plataforma': '**macOS**', 'Onde conseguir': '[Download em DMG](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest.dmg)', 'Notas': 'Requer macOS 14+ em Apple Silicon (M1 ou mais recente). Versão estável de desktop 0.0.43.' },
          { 'Plataforma': '**Windows**', 'Onde conseguir': '[Download do instalador .exe](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest-setup.exe)', 'Notas': 'Versão estável de desktop 0.0.43, mesmo canal de lançamento que o macOS.' },
        ],
        note: 'Esta análise é um complemento à ficha do Off Grid AI no [diretório de software LLM local](/pt/power-local-llm/local-llm-software-directory), que o lista ao lado de outros apps móveis e multiplataforma de IA local. Os quatro links acima foram verificados diretamente para esta análise e mostraram uma página ativa no momento da redação; números de versão e preços podem mudar entre lançamentos — confirme os detalhes atuais em [getoffgridai.co](https://getoffgridai.co) antes de instalar.',
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**Configurar o Off Grid AI leva quatro passos e não exige criação de conta, em nenhuma das quatro plataformas.**',
        ],
        numberedItems: [
          {
            title: 'Instale o app para sua plataforma',
            whyItMatters: 'Use a App Store, o Google Play ou os links de download direto para macOS/Windows acima. Todos os quatro são downloads gratuitos — não há barreira de pagamento para instalar o app em si.',
          },
          {
            title: 'Escolha um modelo adequado ao seu dispositivo',
            whyItMatters: 'Off Grid AI suporta modelos em formato GGUF de famílias como Llama, Qwen 3.5, Gemma, Phi-4 e Mistral. Telefones e tablets lidam bem com modelos quantizados menores; um Mac ou PC com Windows com mais RAM e uma GPU dedicada ou Apple Silicon pode executar modelos maiores.',
          },
          {
            title: 'Baixe o modelo uma vez',
            whyItMatters: 'Os arquivos de modelo variam de cerca de 1 GB a dezenas de gigabytes, dependendo do número de parâmetros e da quantização. Esta etapa precisa de conexão à internet; todas as seguintes não.',
          },
          {
            title: 'Converse, gere imagens ou transcreva voz offline',
            whyItMatters: 'Depois de baixar um modelo, ative o modo avião para verificar você mesmo a alegação de funcionamento offline. Chat de texto, geração de imagens com Stable Diffusion XL e transcrição de voz baseada em Whisper funcionam todos sem conexão de rede.',
          },
          {
            title: 'Opcional: entre na comunidade ou faça upgrade para o Pro',
            whyItMatters: 'O desenvolvedor mantém uma comunidade no Slack e um subreddit [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) (descrito pelo desenvolvedor com mais de 600 membros) para suporte e pedidos de recursos. Off Grid AI Pro é uma compra separada e opcional além do app principal — não exigida para usá-lo.',
          },
        ],
        note: 'A lista exata de modelos, os tamanhos de download e as versões mínimas do sistema operacional podem mudar entre lançamentos — confirme os detalhes atuais no app ou em [getoffgridai.co](https://getoffgridai.co) antes de se comprometer com um download grande em um plano de dados limitado.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços: núcleo gratuito vs. Off Grid AI Pro',
        itemHeadings: true,
        content: [
          '**O app principal do Off Grid AI é gratuito nas quatro plataformas, sem conta ou assinatura exigidas.** Um nível opcional Off Grid AI Pro adiciona extras para leitores que querem mais; esta análise verificou o preço diretamente no site do desenvolvedor.',
        ],
        columns: ['Nível', 'Preço', 'O que cobre'],
        rows: [
          { 'Nível': '**App principal**', 'Preço': 'Gratuito', 'O que cobre': 'Chat, visão, geração de imagens com Stable Diffusion XL e transcrição de voz com Whisper no dispositivo — sem conta, sem assinatura, sem nuvem.' },
          { 'Nível': '**Off Grid AI Pro**', 'Preço': 'US$ 69 vitalício ou US$ 49/ano', 'O que cobre': 'O desenvolvedor indica que o preço vitalício sobe com o tempo rumo a US$ 149; os recursos exatos exclusivos do Pro devem ser confirmados na página de preços atual antes da compra.' },
        ],
        note: 'Os preços dos níveis opcionais podem mudar entre atualizações do app — esta análise confirmou os números acima em relação ao site do desenvolvedor no momento da redação, mas os leitores devem verificar o preço atual antes de comprar.',
      },
      supportedModels: {
        id: 'supported-models',
        title: 'Modelos suportados',
        content: [
          '**Off Grid AI suporta qualquer modelo de linguagem em formato GGUF, além de modelos dedicados de imagem e voz, em vez de limitar os usuários a uma única lista curada.**',
          'Para texto e chat: Llama, Qwen 3 e Qwen 3.5, Gemma 3 e Gemma 4, Phi-4, Mistral e outros modelos abertos em formato GGUF. Para geração de imagens: Stable Diffusion XL e outros modelos da família Stable Diffusion. Para transcrição de voz: modelos baseados em Whisper. O suporte a modelos depende da versão do app e da memória disponível no dispositivo — modelos maiores geralmente precisam de um Mac ou PC com Windows em vez de um telefone.',
        ],
      },
      tractionAndRatings: {
        id: 'traction-and-ratings',
        title: 'Downloads, estrelas no GitHub e a lacuna de avaliação na App Store',
        itemHeadings: true,
        content: [
          '**A tração do Off Grid AI parece muito diferente dependendo de qual fonte isolada se consulta — esta análise verificou todas elas em vez de escolher apenas uma.**',
          'Na própria página inicial, [getoffgridai.co](https://getoffgridai.co) declara mais de 180.000 downloads combinados entre App Store, Google Play e GitHub, e uma "comunidade de mais de 600 pessoas". Esta análise verificou diretamente a parte de estrelas do GitHub dessa alegação: a [organização do GitHub off-grid-ai](https://github.com/off-grid-ai) mostra que o [repositório OGAM](https://github.com/off-grid-ai/OGAM) (iOS e Android, licenciado sob MIT) ultrapassa 3.000 estrelas, enquanto o [repositório OGAD](https://github.com/off-grid-ai/OGAD) (macOS e Windows) tem cerca de 100 — os dois juntos, mais repositórios complementares menores, explicam o número de "mais de 3.000 estrelas no GitHub" da página inicial.',
          'A [ficha da App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882), isoladamente, conta uma história bem mais modesta: 3,1 estrelas com apenas 26 avaliações, na versão 0.0.107, no momento desta análise. Isso é, isoladamente, uma amostra pequena e fraca — longe de ser suficiente para tirar uma conclusão de qualidade confiável apenas da página da App Store. Esta análise afirma esse fato com clareza em vez de deixá-lo escondido atrás dos números multiplataforma mais favoráveis. A leitura honesta: o Off Grid AI tem uma base open source e de downloads verificável e considerável, mas seu histórico de avaliações na App Store do iOS especificamente é escasso, e um leitor que confie apenas na avaliação da App Store veria um sinal notavelmente mais fraco do que o quadro completo sugere.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade',
        content: [
          '**O posicionamento central do Off Grid AI é "sem conta, sem assinatura para o núcleo, sem nuvem".** Como chat, visão, geração de imagens e transcrição de voz rodam no dispositivo depois de baixado um modelo, esse conteúdo não precisa sair do dispositivo para funcionar. O app é de código aberto sob licença MIT para seus clientes móvel e desktop, o que significa que a alegação de processamento no dispositivo pode ser verificada de forma independente no código-fonte publicado, em vez de aceita apenas pela palavra do desenvolvedor — uma opção que concorrentes de código fechado não oferecem.',
          'Leitores que desejam uma auditoria de privacidade totalmente verificada devem revisar o código-fonte do repositório específico da versão que instalam, já que o comportamento de privacidade de software de código aberto pode mudar entre versões.',
        ],
      },
      tradeoffs: {
        id: 'tradeoffs',
        title: 'Prós e contras',
        itemHeadings: true,
        content: [
          '**A maior força do Off Grid AI é ser genuinamente gratuito, de código aberto e multiplataforma ao mesmo tempo — poucos apps de IA local cobrem os três.** Sua maior fraqueza é um histórico de avaliações na App Store escasso que subestima o tamanho real de sua base de usuários.',
        ],
        columns: ['Vantagem', 'Limitação / ressalva'],
        rows: [
          { 'Vantagem': 'App principal gratuito, sem conta, sem assinatura, sem dependência de nuvem.', 'Limitação / ressalva': 'O nível Pro opcional (US$ 69 vitalício ou US$ 49/ano) é necessário para alguns extras.' },
          { 'Vantagem': 'Roda em iOS, Android, macOS e Windows — genuinamente multiplataforma.', 'Limitação / ressalva': 'Os números de versão de desktop (0.0.43) e móvel (0.0.107) diferem, pois são bases de código separadas (OGAD vs. OGAM).' },
          { 'Vantagem': 'Código aberto sob licença MIT; mais de 3.000 estrelas no GitHub são verificáveis de forma independente.', 'Limitação / ressalva': 'A avaliação da App Store é escassa: apenas 26 avaliações com média de 3,1 estrelas no momento desta análise.' },
          { 'Vantagem': 'Suporta chat, visão, geração de imagens com Stable Diffusion XL e voz Whisper — não apenas chat.', 'Limitação / ressalva': 'Modelos maiores e de maior qualidade ainda precisam de um Mac ou PC com Windows em vez de um telefone.' },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Off Grid AI vs. alternativas',
        content: [
          '**As comparações mais próximas do Off Grid AI são outros apps móveis e multiplataforma de IA local, não apps de chatbot genéricos.**',
        ],
        columns: ['App', 'Plataformas', 'Preço', 'Diferença-chave'],
        rows: [
          { 'App': '**[Off Grid AI](/pt/power-local-llm/off-grid-ai-review)**', 'Plataformas': 'iOS/Android/macOS/Windows', 'Preço': 'Gratuito (Pro opcional)', 'Diferença-chave': 'Código aberto, 4 plataformas, amostra de avaliações na App Store fraca.' },
          { 'App': '**[Private LLM](/pt/power-local-llm/private-llm-review)**', 'Plataformas': 'iPhone/iPad/Mac', 'Preço': 'US$ 4,99 pagamento único', 'Diferença-chave': 'Código fechado, apenas Apple, 140+ modelos curados, quantização OmniQuant.' },
          { 'App': '**[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)**', 'Plataformas': 'iOS/Android', 'Preço': 'Gratuito', 'Diferença-chave': 'Código aberto (MIT), apenas móvel, sem desktop nem geração de imagens.' },
          { 'App': '**[Enclave AI](/pt/power-local-llm/enclave-ai-review)**', 'Plataformas': 'iOS/Android', 'Preço': 'Gratuito', 'Diferença-chave': 'App de chat local apenas móvel; compare bibliotecas de modelos diretamente.' },
          { 'App': '**[Loci](/pt/power-local-llm/loci-ai-review-offline-local-ai)**', 'Plataformas': 'iPhone/iPad/Android/Mac/Windows', 'Preço': 'Gratuito', 'Diferença-chave': 'Lista de modelos curada e configuração de baixo atrito frente à biblioteca de modelos aberta do Off Grid AI.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o Off Grid AI',
        content: [
          'Leitores que querem um app de IA local gratuito, de código aberto e sem conta que funcione da mesma forma em telefone, tablet, Mac e PC com Windows.',
          'Leitores que valorizam poder verificar uma alegação de privacidade no dispositivo no código-fonte, em vez de confiar apenas no discurso de marketing de um desenvolvedor.',
          'Leitores que querem chat, geração de imagens e transcrição de voz em um só app, em vez de ferramentas separadas de propósito único.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o Off Grid AI',
        content: [
          'Leitores que querem um histórico de avaliações grande e estabelecido na App Store antes de instalar — a ficha do iOS do Off Grid AI atualmente tem apenas 26 avaliações.',
          'Leitores que querem especificamente um app de pagamento único, de código fechado, com um catálogo de modelos curado e extenso — [Private LLM](/pt/power-local-llm/private-llm-review) se encaixa melhor nesse caso.',
          'Leitores que querem rodar modelos grandes de última geração — isso ainda precisa de IA em nuvem ou de uma estação de trabalho de alto desempenho, não de um app de telefone ou notebook.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Off Grid AI é realmente gratuito?',
            a: 'O app principal é gratuito em iOS, Android, macOS e Windows, sem conta ou assinatura exigida para chat, visão, geração de imagens ou transcrição de voz no dispositivo. Um nível opcional Off Grid AI Pro custa US$ 69 vitalício ou US$ 49/ano, segundo a página de preços do desenvolvedor.',
          },
          {
            q: 'Por que o Off Grid AI tem uma avaliação tão baixa na App Store?',
            a: 'A ficha da App Store mostra 3,1 estrelas com apenas 26 avaliações no momento desta análise — uma amostra pequena que é um sinal fraco por si só. Esse número reflete especificamente as avaliações da App Store no iOS; não captura o alcance mais amplo do app em Android, macOS, Windows e GitHub, onde o desenvolvedor declara mais de 180.000 downloads combinados e onde a base de código móvel tem mais de 3.000 estrelas no GitHub.',
          },
          {
            q: 'O Off Grid AI é de código aberto?',
            a: 'Sim. Seu cliente móvel, OGAM, e seu cliente desktop, OGAD, são publicados sob licença MIT no GitHub, sob a [organização off-grid-ai](https://github.com/off-grid-ai). Esta análise verificou as contagens de estrelas e a licença diretamente no GitHub, em vez de confiar apenas na alegação do desenvolvedor.',
          },
          {
            q: 'Qual é a diferença entre os números de versão de desktop e móvel do Off Grid AI?',
            a: 'São bases de código separadas com ciclos de versão independentes. O app de desktop para macOS e Windows (OGAD) está na versão estável 0.0.43, enquanto a ficha da App Store no iOS (baseada em OGAM) está na versão 0.0.107. Um número de versão diferente por plataforma é esperado em um projeto multiplataforma construído a partir de repositórios separados, não um erro.',
          },
          {
            q: 'Quais modelos o Off Grid AI suporta?',
            a: 'Qualquer modelo de linguagem em formato GGUF, incluindo as famílias Llama, Qwen 3.5, Gemma, Phi-4 e Mistral, além de Stable Diffusion XL para geração de imagens e Whisper para transcrição de voz.',
          },
          {
            q: 'O Off Grid AI tem uma comunidade para eu participar?',
            a: 'O desenvolvedor mantém uma comunidade no Slack e um subreddit ativo [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/), descrito no site do desenvolvedor com mais de 600 membros.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Off Grid AI merece um lugar entre as melhores opções gratuitas e multiplataforma de IA local, com uma ressalva honesta: seu histórico de avaliações na App Store do iOS é escasso.** A ficha da App Store com 3,1 estrelas e 26 avaliações é um sinal fraco isoladamente, e esta análise não finge o contrário. Mas ela coexiste com uma base de código open source verificada com mais de 3.000 estrelas no GitHub e mais de 180.000 downloads combinados relatados pelo desenvolvedor entre App Store, Google Play e GitHub — um quadro notavelmente mais completo do que a página da App Store mostra sozinha. Leitores que querem a opção gratuita, de código aberto e de quatro plataformas mais ampla devem instalá-lo e julgar por si mesmos; os que querem um histórico de avaliações na App Store grande e já estabelecido antes de se comprometer devem olhar em vez disso para o [Private LLM](/pt/power-local-llm/private-llm-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        content: [
          '[Site oficial do Off Grid AI](https://getoffgridai.co) — números de downloads, alegação de estrelas no GitHub, tamanho da comunidade e preços do Pro.',
          '[Off Grid AI - Private Local AI na App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) — número de versão do iOS, avaliação, quantidade de avaliações e preço.',
          '[Organização do GitHub off-grid-ai](https://github.com/off-grid-ai) — lista de repositórios e contagens de estrelas, verificadas diretamente para esta análise.',
          '[Repositório OGAM](https://github.com/off-grid-ai/OGAM) (iOS/Android, licença MIT) — contagem de estrelas móvel e licença.',
          '[Repositório OGAD](https://github.com/off-grid-ai/OGAD) (macOS/Windows) — número de versão de desktop e lançamentos.',
          '[Ficha no Google Play](https://play.google.com/store/apps/details?id=ai.offgridmobile) — link de download para Android.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        content: [
          '[O diretório completo de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em todas as plataformas.',
          '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — uma alternativa paga, de código fechado, apenas para Apple, com 140+ modelos curados.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — uma alternativa gratuita, de código aberto, apenas móvel.',
          '[Análise do Enclave AI](/pt/power-local-llm/enclave-ai-review) — outro app móvel local gratuito para comparar bibliotecas de modelos.',
          '[Análise do Loci AI](/pt/power-local-llm/loci-ai-review-offline-local-ai) — uma alternativa multiplataforma curada e de baixo atrito.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/off-grid-ai-review-hero-ja.webp',
    title: 'Off Grid AIレビュー（2026年）：iOS・Android・macOS・Windows対応のクロスプラットフォームローカルAI',
    seoTitle: 'Off Grid AIレビュー2026：4プラットフォーム対応のローカルAI',
    intro:
      '[Wednesday Solutions, Inc.](https://getoffgridai.co)が開発するOff Grid AIは、無料・オープンソース・アカウント不要で、iOS、Android、macOS、Windowsの4プラットフォームで完全にデバイス上でオープンウェイトAIモデルを実行するアプリです。開発元の公式サイトによると、App Store、Google Play、GitHubを合わせて[累計18万件以上のダウンロード](https://getoffgridai.co)を達成しており、モバイルクライアントの[GitHub上のOGAM](https://github.com/off-grid-ai/OGAM)はMITライセンスの下で3,000以上のスターを獲得しています。App Storeの掲載情報だけを見ると、もっと控えめな数字になります——[Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)の評価はわずか26件のレビューで平均3.1星と、単独で見ると弱いシグナルです。本レビューは両方の実態を直接検証しました。[getoffgridai.co](https://getoffgridai.co)とGitHubのクロスプラットフォームなダウンロード数・スター数、そしてApp Storeの狭いiOS限定の評価の両方を確認し、読者が小さな評価サンプルと、より大規模で検証可能なオープンソースの実績を比較検討できるようにしています。',
    metaDescription:
      'Off Grid AIレビュー2026：iOS、Android、macOS、Windows向けの無料・オープンソース・アカウント不要のローカルAI。18万件以上のダウンロード、3,000以上のGitHubスターを持つ一方、App Storeでは26件のレビューで3.1星に留まる。完全な検証、価格、代替アプリを解説。',
    twitterDescription:
      'Off Grid AIレビュー2026：無料・オープンソース・クロスプラットフォーム（iOS/Android/macOS/Windows）のローカルAI。開発元によると18万件以上のダウンロードと3,000以上のGitHubスターがある一方、App Storeの評価は3.1星・26件と控えめ。検証済みリンク、価格、Private LLM・PocketPal AI・Enclave AI・Lociとの比較。',
    audience:
      '無料・オープンソース・クロスプラットフォームのローカルAIアプリを有料アプリやモバイル専用の代替アプリと比較検討する読者向け——検証済みのダウンロード数・スター数、App Store評価のギャップ、対応モデル、価格、プライバシーを解説。',
    readTime: '読了時間9分',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Off Grid AIレビュー',
    targetKeywords: [
      'off grid ai レビュー',
      'off grid ai アプリ',
      'getoffgridai',
      'off grid ai github',
      'off grid ai vs private llm',
      '無料 ローカルai アプリ iphone android',
      'off grid ai pro 価格',
      'オープンソース ローカルllm アプリ クロスプラットフォーム',
    ],
    current_models_mentioned: ['Llama', 'Qwen 3', 'Qwen 3.5', 'Gemma 3', 'Gemma 4', 'Phi-4', 'Mistral', 'Stable Diffusion XL'],
    current_hardware_mentioned: ['iPhone（iOS 17以降）', 'Android 10以降', 'Apple Silicon搭載Mac（M1以降）', 'Windows PC'],
    leadAnswerBlock:
      '**Off Grid AIは、GGUF形式の言語モデル、Stable Diffusion画像モデル、Whisper音声認識をiOS、Android、macOS、Windows上で完全にデバイス内で実行する、無料・オープンソース・アカウント不要のアプリです。** [Wednesday Solutions, Inc.](https://getoffgridai.co)が開発し、App Store、Google Play、GitHubを合わせて[累計18万件以上のダウンロード](https://getoffgridai.co)を報告しており、モバイルリポジトリの[OGAM](https://github.com/off-grid-ai/OGAM)はMITライセンスの下で3,000以上のGitHubスターを持ちます——これらの数字は本レビューが開発元の主張を鵜呑みにせず、GitHubと開発元の公式サイトに対して直接検証したものです。[App Storeの掲載情報](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)だけを見ると、わずか26件のレビューで平均3.1星と、本レビューはより有利なクロスプラットフォームの数字の陰に隠さず、率直に示す本当に弱いシグナルです。オプションのOff Grid AI Pro階層（開発元のサイトによると生涯69ドルまたは年間49ドル）は、すでにアカウント不要・サブスクリプション義務なし・クラウド依存なしの無料コアに追加機能を加えます。',
    quickAnswerTop: {
      ja: {
        question: 'App Storeの評価が低いにもかかわらず、Off Grid AIをインストールする価値はありますか？',
        answer:
          'はい、無料・オープンソース・クロスプラットフォームのローカルAIアプリを求めるほとんどの読者にとっては価値があります——App Storeの評価3.1星・26件という数字だけでは物足りませんが、検証済みで3,000以上のGitHubスターを持つオープンソースコードベースと、App Store、Google Play、GitHubを合わせた18万件以上のダウンロードが伴っており、App Storeのページ単体よりも完全な実態を示しています。特に、実績あるApp Store評価履歴を持つ買い切り型・非オープンソースのアプリが欲しい場合は避けてください——その用途にはPrivate LLMの方が適しています。',
        bullets: [
          '無料コア：アカウント不要、サブスクリプション不要、クラウド不要——[getoffgridai.co](https://getoffgridai.co)で確認済み。',
          'クロスプラットフォーム：iOS 17以降、Android 10以降、macOS 14以降（Apple Silicon）、Windows——iOS専用ではない。',
          '開発元のサイトによると累計18万件以上のダウンロードと3,000以上のGitHubスター（MITライセンスの[OGAM](https://github.com/off-grid-ai/OGAM)リポジトリ）、GitHubで直接検証済み。',
          'App Store単体のシグナルは弱い：[Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)は本レビュー時点で26件のレビューで3.1星。',
          'オプションのOff Grid AI Pro：開発元の価格ページによると生涯69ドルまたは年間49ドル——コアのチャット、視覚認識、画像生成、音声機能には不要。',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Off Grid AIとは', anchor: 'what-is-off-grid-ai' },
      { label: '入手方法：全プラットフォーム対応ダウンロード', anchor: 'get-it' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '価格：無料コア vs. Off Grid AI Pro', anchor: 'pricing' },
      { label: '対応モデル', anchor: 'supported-models' },
      { label: 'ダウンロード数、GitHubスター、App Store評価のギャップ', anchor: 'traction-and-ratings' },
      { label: 'プライバシー', anchor: 'privacy' },
      { label: 'トレードオフ：利点と制限', anchor: 'tradeoffs' },
      { label: 'Off Grid AI vs. 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'Off Grid AIを使うべき人', anchor: 'who-should-use' },
      { label: 'Off Grid AIを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
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
            text: 'Off Grid AIは、Wednesday Solutions, Inc.が開発した無料・オープンソース・クロスプラットフォーム（iOS、Android、macOS、Windows）のアプリで、GGUF言語モデル、Stable Diffusion画像モデル、Whisper音声認識を完全にデバイス上で実行し、累計18万件以上のダウンロードと3,000以上のGitHubスターを持つ一方、App Storeのレビューはわずか26件です。',
          },
          {
            type: 'plain-terms',
            text: 'サブスクリプション型AIチャットボットの無料・オープンソース版と考えてください——スマートフォン、タブレット、Mac、PCにインストールし、モデルを一度ダウンロードすれば、その後はすべて自分のハードウェア上で動作し、アカウントもチャット用のインターネット接続も不要です。',
          },
        ],
        items: [
          '無料かつオープンソース：コアアプリにはアカウント、サブスクリプション、クラウド依存が不要——[MITライセンス](https://github.com/off-grid-ai/OGAM)。',
          'クロスプラットフォーム：iOS、Android、macOS、Windows——デスクトップクライアント（OGAD）は安定版0.0.43、iOS版App Storeの掲載情報はバージョン0.0.107。',
          '[getoffgridai.co](https://getoffgridai.co)によると累計18万件以上のダウンロードと3,000以上のGitHubスター、GitHubで直接検証済み。',
          'App Storeの評価は単体では乏しい：本レビュー時点で[iOS版の掲載情報](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)は3.1星・26件——本レビューはより有利なクロスプラットフォームの数字の代わりではなく、その隣に明確に記載しています。',
          'モデル：Llama、Qwen 3.5、Gemma、Phi-4、Mistral、および任意のGGUF形式モデルによるチャット、Stable Diffusion XLによる画像生成、Whisperによる音声認識。',
          'コミュニティ：Slackコミュニティと活発な[r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)サブレディット。開発元によると600人以上のメンバーがいる。',
          'オプションのOff Grid AI Pro：開発元の価格ページによると生涯69ドル（開発元は149ドルまで値上げすると表明）または年間49ドル——コアのチャット、視覚認識、画像、音声機能には不要。',
        ],
      },
      whatIsOffGridAI: {
        id: 'what-is-off-grid-ai',
        title: 'Off Grid AIとは',
        content: [
          '**Off Grid AIは、スマートフォン、タブレット、Mac、Windows PC上に直接オープンウェイトAIモデルをダウンロードして実行するオープンソースアプリで、コア機能にサーバー側のコンポーネントを必要としません。** モデルをダウンロードすれば、チャット、画像生成、視覚認識、音声認識はすべてインターネット接続なしで動作します。',
          '開発元は[Wednesday Solutions, Inc.](https://getoffgridai.co)で、自社サイトでの立ち位置は「コアにはアカウント不要、サブスクリプション不要、クラウドなし」です。プロジェクトは[off-grid-ai組織](https://github.com/off-grid-ai)の下で複数のGitHubリポジトリに分かれています：[OGAM](https://github.com/off-grid-ai/OGAM)（iOSおよびAndroid、3,000以上のスターを持つ最大のリポジトリ）、[OGAD](https://github.com/off-grid-ai/OGAD)（macOSおよびWindowsデスクトップ、現在安定版0.0.43）、さらにエンタープライズガバナンス向けの小規模な補助リポジトリ（OGAC）とデバイス間のローカルファイル・テキスト共有（OGAS）があります。',
          'Off Grid AIのiOS/Androidアプリは、App Storeに[Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)として最初に登場し、現在バージョン0.0.107です。このApp Store単体の視点——本レビュー時点で3.1星・26件のレビュー——は、デスクトップアプリ、GitHubリリース、Google Playのインストールをすべて合わせた実際の到達範囲を過小評価しています：開発元の公式ホームページによれば累計18万件以上のダウンロードと3,000以上のGitHubスターがあり、本レビューではGitHubのスター数と直接照合して検証しました。',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: '入手方法：全プラットフォーム対応ダウンロード',
        itemHeadings: true,
        content: [
          '**Off Grid AIは4つのプラットフォームで実際にダウンロード可能なアプリです——単一の「公式」ダウンロードは存在せず、各プラットフォームに独自の検証済みリンクがあります。**',
        ],
        columns: ['プラットフォーム', '入手先', '注記'],
        rows: [
          { 'プラットフォーム': '**iOS**', '入手先': '[App Store掲載ページ](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)', '注記': 'iOS 17以降が必要。無料ダウンロード、アプリ内オプションでPro購入可能。' },
          { 'プラットフォーム': '**Android**', '入手先': '[Google Play掲載ページ](https://play.google.com/store/apps/details?id=ai.offgridmobile)', '注記': 'Android 10以降が必要。[GitHubリリース](https://github.com/off-grid-ai/OGAM/releases/latest)から直接APKも入手可能。' },
          { 'プラットフォーム': '**macOS**', '入手先': '[DMGダウンロード](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest.dmg)', '注記': 'Apple Silicon（M1以降）搭載macOS 14以降が必要。デスクトップ安定版0.0.43。' },
          { 'プラットフォーム': '**Windows**', '入手先': '[セットアップ.exeダウンロード](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest-setup.exe)', '注記': 'デスクトップ安定版0.0.43、macOSと同じリリースチャンネル。' },
        ],
        note: '本レビューは、[ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory)におけるOff Grid AIの掲載情報を補完するもので、他のモバイル・クロスプラットフォームのローカルAIアプリと並んで掲載されています。上記4つのリンクはすべて本レビューのために直接確認され、執筆時点で有効なページが表示されました。バージョン番号や価格はリリース間で変わる可能性があるため、インストール前に[getoffgridai.co](https://getoffgridai.co)で最新情報を確認してください。',
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**Off Grid AIのセットアップは4ステップで、4つのプラットフォームすべてでアカウント作成は不要です。**',
        ],
        numberedItems: [
          {
            title: 'お使いのプラットフォーム向けにアプリをインストールする',
            whyItMatters: '上記のApp Store、Google Play、またはmacOS/Windowsの直接ダウンロードリンクを使用してください。4つすべてが無料ダウンロードで、アプリ自体のインストールに支払いの壁はありません。',
          },
          {
            title: 'デバイスに合ったモデルを選ぶ',
            whyItMatters: 'Off Grid AIはLlama、Qwen 3.5、Gemma、Phi-4、Mistralなどのファミリーの GGUF形式モデルに対応しています。スマートフォンやタブレットは小さな量子化モデルを扱い、RAMが多くディスクリートGPUまたはApple Silicon GPUを搭載したMacやWindows PCはより大きなモデルを実行できます。',
          },
          {
            title: 'モデルを一度だけダウンロードする',
            whyItMatters: 'モデルファイルはパラメータ数と量子化に応じて約1GBから数十GBまで幅があります。このステップにはインターネット接続が必要ですが、それ以降のステップには不要です。',
          },
          {
            title: 'オフラインでチャット、画像生成、音声文字起こしを行う',
            whyItMatters: 'モデルをダウンロードしたら、機内モードをオンにしてオフライン動作の主張を自分で検証してください。テキストチャット、Stable Diffusion XLによる画像生成、Whisperベースの音声文字起こしはすべてネットワーク接続なしで動作します。',
          },
          {
            title: 'オプション：コミュニティに参加する、またはProにアップグレードする',
            whyItMatters: '開発元はサポートと機能リクエストのためにSlackコミュニティと[r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)サブレディット（開発元によると600人以上のメンバー）を運営しています。Off Grid AI Proはコアアプリに追加する独立したオプション購入であり、利用に必須ではありません。',
          },
        ],
        note: '正確なモデルリスト、ダウンロードサイズ、最小OSバージョンはリリース間で変わる可能性があります——限られたデータプランで大きなダウンロードを行う前に、アプリ内または[getoffgridai.co](https://getoffgridai.co)で最新情報を確認してください。',
      },
      pricing: {
        id: 'pricing',
        title: '価格：無料コア vs. Off Grid AI Pro',
        itemHeadings: true,
        content: [
          '**Off Grid AIのコアアプリは4つのプラットフォームすべてで無料であり、アカウントもサブスクリプションも必要ありません。** オプションのOff Grid AI Pro階層は、さらに求める読者に追加機能を提供します。本レビューは開発元のサイトで直接価格を確認しました。',
        ],
        columns: ['階層', '価格', '内容'],
        rows: [
          { '階層': '**コアアプリ**', '価格': '無料', '内容': 'デバイス上でのチャット、視覚認識、Stable Diffusion XLによる画像生成、Whisperによる音声文字起こし——アカウント不要、サブスクリプション不要、クラウド不要。' },
          { '階層': '**Off Grid AI Pro**', '価格': '生涯69ドルまたは年間49ドル', '内容': '開発元は生涯価格が時間とともに149ドルまで上昇すると表明しています。Pro限定の正確な機能は購入前に最新の価格ページで確認してください。' },
        ],
        note: 'オプション階層の価格はアプリのアップデート間で変わる可能性があります——本レビューは執筆時点で上記の数字を開発元のサイトに照らして確認しましたが、読者は購入前に現在の価格を自分で確認してください。',
      },
      supportedModels: {
        id: 'supported-models',
        title: '対応モデル',
        content: [
          '**Off Grid AIは、ユーザーを単一の厳選リストに限定するのではなく、任意のGGUF形式の言語モデルに加え、専用の画像・音声モデルにも対応しています。**',
          'テキストとチャット向け：Llama、Qwen 3・Qwen 3.5、Gemma 3・Gemma 4、Phi-4、Mistral、その他のオープンなGGUF形式モデル。画像生成向け：Stable Diffusion XLおよびStable Diffusionファミリーの他のモデル。音声認識向け：Whisperベースの文字起こしモデル。モデルのサポートはアプリのバージョンとデバイスの利用可能メモリに依存し、大きなモデルは一般的にスマートフォンではなくMacやWindows PCが必要です。',
        ],
      },
      tractionAndRatings: {
        id: 'traction-and-ratings',
        title: 'ダウンロード数、GitHubスター、App Store評価のギャップ',
        itemHeadings: true,
        content: [
          '**Off Grid AIの実績は、どの単一の情報源を確認するかによってまったく異なって見えます——本レビューは1つだけを選ぶのではなく、すべてを確認しました。**',
          '開発元の公式ホームページ[getoffgridai.co](https://getoffgridai.co)は、App Store、Google Play、GitHubを合わせて累計18万件以上のダウンロードと、「600人以上の強力なコミュニティ」を表明しています。本レビューはこの主張のうちGitHubスターの部分を直接検証しました。[off-grid-ai GitHub組織](https://github.com/off-grid-ai)は、[OGAMリポジトリ](https://github.com/off-grid-ai/OGAM)（iOSおよびAndroid、MITライセンス）が3,000以上のスターを持ち、[OGADリポジトリ](https://github.com/off-grid-ai/OGAD)（macOSおよびWindows）が約100スターであることを示しています——この2つに加えて小規模な補助リポジトリを合わせると、ホームページの「3,000以上のGitHubスター」という数字に一致します。',
          '[App Storeの掲載情報](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)だけを見ると、はるかに控えめな実態が見えます：本レビュー時点でバージョン0.0.107、わずか26件のレビューで3.1星です。これは単体で見ると小さく弱いサンプルであり、App Storeのページだけから信頼できる品質の結論を導き出すには到底十分ではありません。本レビューはこの事実を、より有利なクロスプラットフォームの数字の陰に隠すのではなく、明確に述べています。率直な見方をすれば、Off Grid AIは検証可能でかなりの規模のオープンソースの支持基盤とダウンロード基盤を持つ一方、特にiOSのApp Storeレビュー履歴は乏しく、App Storeの星評価だけに頼る読者は、全体像が示すよりも著しく弱いシグナルを目にすることになります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー',
        content: [
          '**Off Grid AIの中核的な立ち位置は「コアにはアカウント不要、サブスクリプション不要、クラウドなし」です。** チャット、視覚認識、画像生成、音声文字起こしはモデルをダウンロードすればデバイス上で動作するため、これらのコンテンツは機能するために端末外に出る必要がありません。アプリはモバイルおよびデスクトップクライアントについてMITライセンスの下でオープンソース化されており、デバイス上処理の主張を、開発元の言葉だけを信じるのではなく、公開されたソースコードで独立して検証できます——これはクローズドソースの競合が提供できない選択肢です。',
          '完全に監査されたプライバシーレビューを求める読者は、インストールするバージョンの特定のリポジトリのソースコードを確認すべきです。オープンソースソフトウェアのプライバシー動作はリリース間で変わる可能性があるためです。',
        ],
      },
      tradeoffs: {
        id: 'tradeoffs',
        title: 'トレードオフ：利点と制限',
        itemHeadings: true,
        content: [
          '**Off Grid AIの最大の強みは、真に無料でオープンソースかつクロスプラットフォームであることを同時に実現している点で、この3つすべてをカバーするローカルAIアプリはほとんどありません。** 最大の弱みは、実際のユーザーベースの規模を過小評価させる乏しいApp Storeレビュー履歴です。',
        ],
        columns: ['利点', '制限・注記'],
        rows: [
          { '利点': '無料コアアプリ、アカウント不要、サブスクリプション不要、クラウド依存なし。', '制限・注記': 'オプションのProプラン（生涯69ドルまたは年間49ドル）が一部の追加機能に必要。' },
          { '利点': 'iOS、Android、macOS、Windowsで動作——真にクロスプラットフォーム。', '制限・注記': 'デスクトップ（0.0.43）とモバイル（0.0.107）のバージョン番号が異なる。別々のコードベース（OGAD対OGAM）のため。' },
          { '利点': 'MITライセンスのオープンソース。3,000以上のGitHubスターは独立して検証可能。', '制限・注記': 'App Store評価は乏しい：本レビュー時点でわずか26件のレビューで平均3.1星。' },
          { '利点': 'チャット、視覚認識、Stable Diffusion XLによる画像生成、Whisper音声に対応——チャットのみではない。', '制限・注記': 'より大きく高品質なモデルには依然としてスマートフォンではなくMacやWindows PCが必要。' },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Off Grid AI vs. 代替アプリ',
        content: [
          '**Off Grid AIに最も近い比較対象は、一般的なチャットボットアプリではなく、他のモバイル・クロスプラットフォームのローカルAIアプリです。**',
        ],
        columns: ['アプリ', 'プラットフォーム', '価格', '主な違い'],
        rows: [
          { 'アプリ': '**[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)**', 'プラットフォーム': 'iOS/Android/macOS/Windows', '価格': '無料（Proはオプション）', '主な違い': 'オープンソース、4プラットフォーム対応、App Store評価サンプルが弱い。' },
          { 'アプリ': '**[Private LLM](/ja/power-local-llm/private-llm-review)**', 'プラットフォーム': 'iPhone/iPad/Mac', '価格': '4.99ドル買い切り', '主な違い': 'クローズドソース、Apple専用、140以上の厳選モデル、OmniQuant量子化。' },
          { 'アプリ': '**[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)**', 'プラットフォーム': 'iOS/Android', '価格': '無料', '主な違い': 'オープンソース（MIT）、モバイル専用、デスクトップや画像生成なし。' },
          { 'アプリ': '**[Enclave AI](/ja/power-local-llm/enclave-ai-review)**', 'プラットフォーム': 'iOS/Android', '価格': '無料', '主な違い': 'モバイル専用のローカルチャットアプリ。モデルライブラリを直接比較。' },
          { 'アプリ': '**[Loci](/ja/power-local-llm/loci-ai-review-offline-local-ai)**', 'プラットフォーム': 'iPhone/iPad/Android/Mac/Windows', '価格': '無料', '主な違い': '厳選されたモデルリストと摩擦の少ないセットアップ vs. Off Grid AIのオープンなモデルライブラリ。' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Off Grid AIを使うべき人',
        content: [
          'スマートフォン、タブレット、Mac、Windows PCで同じように動作する、無料・オープンソース・アカウント不要のローカルAIアプリを求める読者。',
          '開発元のマーケティング文言だけに頼るのではなく、デバイス上プライバシーの主張をソースコードで自分で確認できることを重視する読者。',
          '個別の単機能ツールではなく、チャット、画像生成、音声文字起こしを1つのアプリで済ませたい読者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Off Grid AIを使うべきでない人',
        content: [
          'インストール前に大規模で確立されたApp Storeレビュー履歴を求める読者——Off Grid AIのiOS版は現時点でわずか26件のレビューしかありません。',
          '特に買い切り型・非オープンソースで、長く厳選されたモデルカタログを持つアプリを求める読者——その用途には[Private LLM](/ja/power-local-llm/private-llm-review)の方が適しています。',
          '大規模な最先端モデルを実行したい読者——それには依然としてクラウドAIまたはハイエンドワークステーションが必要で、スマートフォンやノートPCアプリでは対応できません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Off Grid AIは本当に無料ですか？',
            a: 'コアアプリはiOS、Android、macOS、Windowsで無料であり、デバイス上でのチャット、視覚認識、画像生成、音声文字起こしにアカウントもサブスクリプションも必要ありません。オプションのOff Grid AI Proは、開発元の価格ページによると生涯69ドルまたは年間49ドルです。',
          },
          {
            q: 'なぜOff Grid AIのApp Store評価はこれほど低いのですか？',
            a: '本レビュー時点でApp Storeの掲載情報は、わずか26件のレビューで3.1星を示しています——これは単体では弱いシグナルとなる小さなサンプルです。この数字は特にiOSのApp Storeレビューを反映したものであり、開発元がApp Store、Google Play、GitHubを合わせて累計18万件以上のダウンロードを報告し、モバイルコードベースが3,000以上のGitHubスターを持つ、Android、macOS、Windows、GitHubにまたがるアプリの広範な実績を捉えていません。',
          },
          {
            q: 'Off Grid AIはオープンソースですか？',
            a: 'はい。モバイルクライアントのOGAMとデスクトップクライアントのOGADはどちらも、[off-grid-ai組織](https://github.com/off-grid-ai)の下でGitHub上にMITライセンスで公開されています。本レビューは開発元の主張だけに頼るのではなく、スター数とライセンスをGitHubで直接検証しました。',
          },
          {
            q: 'Off Grid AIのデスクトップ版とモバイル版のバージョン番号の違いは何ですか？',
            a: 'これらは独立したリリースサイクルを持つ別々のコードベースです。macOSおよびWindowsのデスクトップアプリ（OGAD）は安定版0.0.43で、iOS版App Storeの掲載情報（OGAMベース）はバージョン0.0.107です。別々のリポジトリから構築されたクロスプラットフォームプロジェクトでプラットフォームごとにバージョン番号が異なるのは想定内であり、誤りではありません。',
          },
          {
            q: 'Off Grid AIはどのモデルに対応していますか？',
            a: 'Llama、Qwen 3.5、Gemma、Phi-4、Mistralファミリーを含む任意のGGUF形式の言語モデルに加え、画像生成にはStable Diffusion XL、音声文字起こしにはWhisperが利用できます。',
          },
          {
            q: 'Off Grid AIには参加できるコミュニティがありますか？',
            a: '開発元はSlackコミュニティと活発な[r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)サブレディットを運営しており、開発元のサイトによると600人以上のメンバーがいます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          '**Off Grid AIは、無料でクロスプラットフォームなローカルAIの優れた選択肢の一つとしての地位を得ていますが、1つ正直な注意点があります。iOSのApp Storeレビュー履歴が乏しいことです。** 3.1星・26件のレビューというApp Storeの掲載情報は単体では弱いシグナルであり、本レビューはそれを取り繕いません。しかし、それは検証済みで3,000以上のGitHubスターを持つオープンソースコードベースと、開発元が報告するApp Store、Google Play、GitHubを合わせた累計18万件以上のダウンロードと並んで存在しており、App Storeのページ単体が示すよりも著しく完全な実態です。最も幅広い無料・オープンソース・4プラットフォーム対応の選択肢を求める読者はインストールして自分で判断すべきであり、購入前に大規模で確立済みのApp Storeレビュー履歴を求める読者は代わりに[Private LLM](/ja/power-local-llm/private-llm-review)を検討すべきです。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        content: [
          '[Off Grid AI公式サイト](https://getoffgridai.co) — ダウンロード数、GitHubスターの主張、コミュニティ規模、Pro価格。',
          '[App StoreのOff Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) — iOSのバージョン番号、星評価、レビュー件数、価格。',
          '[off-grid-ai GitHub組織](https://github.com/off-grid-ai) — リポジトリ一覧とスター数、本レビューのために直接検証済み。',
          '[OGAMリポジトリ](https://github.com/off-grid-ai/OGAM)（iOS/Android、MITライセンス） — モバイルのスター数とライセンス。',
          '[OGADリポジトリ](https://github.com/off-grid-ai/OGAD)（macOS/Windows） — デスクトップのバージョン番号とリリース。',
          '[Google Play掲載ページ](https://play.google.com/store/apps/details?id=ai.offgridmobile) — Androidのダウンロードリンク。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        content: [
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/power-local-llm/local-llm-software-directory) — 全プラットフォームにわたるローカルLLMツールのより広範なディレクトリ。',
          '[Private LLMレビュー](/ja/power-local-llm/private-llm-review) — 140以上の厳選モデルを持つ有料・クローズドソースのApple専用アプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料・オープンソースのモバイル専用アプリ。',
          '[Enclave AIレビュー](/ja/power-local-llm/enclave-ai-review) — モデルライブラリを比較するためのもう一つの無料モバイルローカルAIアプリ。',
          '[Loci AIレビュー](/ja/power-local-llm/loci-ai-review-offline-local-ai) — 厳選されたモデルと摩擦の少ないクロスプラットフォームアプリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/off-grid-ai-review-hero-zh.webp',
    title: 'Off Grid AI评测（2026年）：支持iOS、Android、macOS和Windows的跨平台本地AI',
    seoTitle: 'Off Grid AI评测2026：四大平台本地AI',
    intro:
      'Off Grid AI由[Wednesday Solutions, Inc.](https://getoffgridai.co)开发，是一款免费、开源、无需账号的应用，可在iOS、Android、macOS和Windows四个平台上完全在设备本地运行开放权重AI模型。据开发者官网称，其在App Store、Google Play和GitHub上的[累计下载量已超过18万次](https://getoffgridai.co)，其移动端仓库[GitHub上的OGAM](https://github.com/off-grid-ai/OGAM)在MIT许可证下获得了超过3,000颗星标。仅看App Store的信息则呈现出更单薄的一面——[Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)仅有26条评分，平均3.1星，单独来看是一个较弱的信号。本评测直接核实了两方面的情况：来自[getoffgridai.co](https://getoffgridai.co)和GitHub的跨平台下载量与星标数字，以及仅限iOS的App Store评分，以便读者权衡一个较小的评分样本与更庞大、可核实的开源基础。',
    metaDescription:
      'Off Grid AI评测2026：面向iOS、Android、macOS和Windows的免费开源、无需账号的本地AI。累计下载超18万次，GitHub星标超3,000，但App Store仅26条评分、3.1星。完整核实、定价与替代方案。',
    twitterDescription:
      'Off Grid AI评测2026：免费、开源、跨平台（iOS/Android/macOS/Windows）本地AI。据开发者称累计下载超18万次、GitHub星标超3,000，但App Store评分单薄（3.1星，26条）。核实过的链接、定价，以及与Private LLM、PocketPal AI、Enclave AI和Loci的对比。',
    audience:
      '正在将免费、开源、跨平台本地AI应用与付费或仅限移动端的替代方案进行比较的读者——涵盖核实过的下载量/星标数字、App Store评分差距、支持的模型、定价和隐私。',
    readTime: '阅读时间9分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Off Grid AI评测',
    targetKeywords: [
      'off grid ai 评测',
      'off grid ai 应用',
      'getoffgridai',
      'off grid ai github',
      'off grid ai vs private llm',
      '免费本地ai应用 iphone android',
      'off grid ai pro 价格',
      '开源本地llm应用 跨平台',
    ],
    current_models_mentioned: ['Llama', 'Qwen 3', 'Qwen 3.5', 'Gemma 3', 'Gemma 4', 'Phi-4', 'Mistral', 'Stable Diffusion XL'],
    current_hardware_mentioned: ['iPhone（iOS 17以上）', 'Android 10以上', '搭载Apple Silicon的Mac（M1或更新）', 'Windows PC'],
    leadAnswerBlock:
      '**Off Grid AI是一款免费、开源、无需账号的应用，可在iOS、Android、macOS和Windows上完全在设备本地运行GGUF格式的语言模型、Stable Diffusion图像模型以及Whisper语音转文字。** 由[Wednesday Solutions, Inc.](https://getoffgridai.co)开发，据其官网称，App Store、Google Play和GitHub上的[累计下载量已超过18万次](https://getoffgridai.co)，其移动端仓库[OGAM](https://github.com/off-grid-ai/OGAM)在MIT许可证下拥有超过3,000个GitHub星标——本评测直接对照GitHub和开发者官网核实了这些数字，而非仅仅采信开发者的说法。仅看[App Store页面](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)，只有26条评分，平均3.1星——这确实是一个较弱的信号，本评测不会将其掩藏在更有利的跨平台数字背后。一个可选的Off Grid AI Pro层级（据开发者官网称为终身69美元或每年49美元）在已经无需账号、无强制订阅、无云依赖的免费核心基础上增加了额外功能。',
    quickAnswerTop: {
      zh: {
        question: '尽管App Store评分较低，Off Grid AI值得安装吗？',
        answer:
          '对大多数希望使用免费、开源、跨平台本地AI应用的读者来说，值得——单看3.1星、26条评分的App Store页面确实单薄，但它与一个经过核实、拥有超过3,000个GitHub星标的开源代码库，以及App Store、Google Play和GitHub合计超过18万次的下载量并存，这比单独的App Store页面呈现出更完整的图景。如果你特别想要一款有大量App Store评分历史的一次性付费、非开源应用，请跳过它——Private LLM更适合这种情况。',
        bullets: [
          '免费核心：无需账号、无需订阅、无云依赖——已在[getoffgridai.co](https://getoffgridai.co)核实。',
          '跨平台：iOS 17以上、Android 10以上、macOS 14以上（Apple Silicon）和Windows——不仅限于iOS。',
          '据开发者官网称累计下载超过18万次，GitHub星标超过3,000（MIT许可证的[OGAM](https://github.com/off-grid-ai/OGAM)仓库），已直接对照GitHub核实。',
          '仅App Store的信号较弱：本评测撰写时，[Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)显示3.1星、26条评分。',
          '可选的Off Grid AI Pro：据开发者定价页面，终身69美元或每年49美元——核心聊天、视觉识别、图像生成和语音功能均不需要它。',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Off Grid AI是什么', anchor: 'what-is-off-grid-ai' },
      { label: '获取方式：各平台下载', anchor: 'get-it' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '定价：免费核心 vs. Off Grid AI Pro', anchor: 'pricing' },
      { label: '支持的模型', anchor: 'supported-models' },
      { label: '下载量、GitHub星标与App Store评分差距', anchor: 'traction-and-ratings' },
      { label: '隐私', anchor: 'privacy' },
      { label: '取舍：优点与局限', anchor: 'tradeoffs' },
      { label: 'Off Grid AI与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁应该使用Off Grid AI', anchor: 'who-should-use' },
      { label: '谁不应该使用Off Grid AI', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点速览',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Off Grid AI是Wednesday Solutions, Inc.开发的一款免费、开源、跨平台（iOS、Android、macOS、Windows）应用，可完全在设备本地运行GGUF语言模型、Stable Diffusion图像模型和Whisper语音转文字，累计下载超过18万次、GitHub星标超过3,000，但App Store仅有26条评分。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想象成订阅制AI聊天机器人的免费开源替代品——你把它安装在手机、平板、Mac或PC上，下载一次模型，之后的一切都在你自己的硬件上运行，无需账号，聊天也无需联网。',
          },
        ],
        items: [
          '免费且开源：核心应用无需账号、无需订阅、无云依赖——[MIT许可证](https://github.com/off-grid-ai/OGAM)。',
          '跨平台：iOS、Android、macOS和Windows——桌面客户端（OGAD）处于稳定版0.0.43；iOS版App Store页面为0.0.107版本。',
          '据[getoffgridai.co](https://getoffgridai.co)称累计下载超过18万次、GitHub星标超过3,000，已直接在GitHub上核实。',
          '单看App Store评分较为单薄：本评测撰写时，[iOS页面](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)显示3.1星、26条评分——本评测明确地将这一事实与更有利的跨平台数字并列陈述，而非用其取代。',
          '模型：Llama、Qwen 3.5、Gemma、Phi-4、Mistral以及任何GGUF格式模型用于聊天；Stable Diffusion XL用于图像生成；Whisper用于语音转文字。',
          '社区：一个Slack社区和一个活跃的[r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)子版块，据开发者称拥有600多名成员。',
          '可选的Off Grid AI Pro：据开发者定价页面，终身69美元（开发者表示该价格将上涨至149美元）或每年49美元——核心的聊天、视觉识别、图像或语音功能不需要它。',
        ],
      },
      whatIsOffGridAI: {
        id: 'what-is-off-grid-ai',
        title: 'Off Grid AI是什么',
        content: [
          '**Off Grid AI是一款开源应用，可直接在手机、平板、Mac或Windows PC上下载并运行开放权重AI模型，核心功能没有服务器端组件。** 模型下载完成后，聊天、图像生成、视觉识别和语音转录都无需联网即可运行。',
          '它由[Wednesday Solutions, Inc.](https://getoffgridai.co)开发，其官网上的定位是"核心无需账号、无需订阅、无云端"。该项目分布在[off-grid-ai组织](https://github.com/off-grid-ai)下的多个GitHub仓库中：[OGAM](https://github.com/off-grid-ai/OGAM)（iOS和Android，最大的仓库，拥有超过3,000个星标）、[OGAD](https://github.com/off-grid-ai/OGAD)（macOS和Windows桌面版，目前为稳定版0.0.43），此外还有面向企业治理的小型配套仓库（OGAC）和设备间本地文件/文本共享（OGAS）。',
          'Off Grid AI的iOS/Android应用最初以[Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)的名义登陆App Store，目前版本为0.0.107。这一仅限App Store的视角——本评测撰写时为3.1星、26条评分——低估了该项目的实际影响力，如果把桌面应用、GitHub发布版本和Google Play安装量都算在一起：据开发者官网首页称，累计下载超过18万次、GitHub星标超过3,000，本评测已直接对照GitHub星标数字进行核实。',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: '获取方式：各平台下载',
        itemHeadings: true,
        content: [
          '**Off Grid AI是一款真正可在四个平台下载的应用——不存在单一的"官方"下载入口；每个平台都有自己核实过的链接。**',
        ],
        columns: ['平台', '获取地址', '备注'],
        rows: [
          { '平台': '**iOS**', '获取地址': '[App Store页面](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)', '备注': '需要iOS 17以上。免费下载，应用内可选购买Pro。' },
          { '平台': '**Android**', '获取地址': '[Google Play页面](https://play.google.com/store/apps/details?id=ai.offgridmobile)', '备注': '需要Android 10以上。也可在[GitHub发布页](https://github.com/off-grid-ai/OGAM/releases/latest)直接下载APK。' },
          { '平台': '**macOS**', '获取地址': '[DMG下载](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest.dmg)', '备注': '需要搭载Apple Silicon（M1或更新）的macOS 14以上。桌面稳定版0.0.43。' },
          { '平台': '**Windows**', '获取地址': '[安装程序.exe下载](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest-setup.exe)', '备注': '桌面稳定版0.0.43，与macOS使用相同的发布渠道。' },
        ],
        note: '本评测是[本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)中Off Grid AI条目的配套文章，该目录将其与其他移动端及跨平台本地AI应用一并列出。上述四个链接均已为本评测直接核实，撰写时均可正常打开；版本号和价格可能在不同发布版本间变化——安装前请在[getoffgridai.co](https://getoffgridai.co)确认最新信息。',
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**设置Off Grid AI只需四个步骤，在其四个平台上都无需创建账号。**',
        ],
        numberedItems: [
          {
            title: '为你的平台安装应用',
            whyItMatters: '使用上面的App Store、Google Play或macOS/Windows直接下载链接。四者均为免费下载——安装应用本身没有付费门槛。',
          },
          {
            title: '选择适合你设备的模型',
            whyItMatters: 'Off Grid AI支持Llama、Qwen 3.5、Gemma、Phi-4和Mistral等系列的GGUF格式模型。手机和平板可以流畅运行较小的量化模型；拥有更多内存和独立GPU或Apple Silicon GPU的Mac或Windows PC可以运行更大的模型。',
          },
          {
            title: '下载一次模型',
            whyItMatters: '模型文件大小从约1GB到数十GB不等，取决于参数量和量化程度。这一步需要联网，之后的每一步都不需要。',
          },
          {
            title: '离线聊天、生成图像或转录语音',
            whyItMatters: '模型下载完成后，打开飞行模式，自己验证离线运行的说法。文本聊天、Stable Diffusion XL图像生成和基于Whisper的语音转录都可以在没有网络连接的情况下运行。',
          },
          {
            title: '可选：加入社区或升级到Pro',
            whyItMatters: '开发者运营着一个Slack社区和一个活跃的[r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)子版块（据开发者称拥有600多名成员），用于支持和功能请求。Off Grid AI Pro是一项独立的可选购买，叠加在核心应用之上——使用核心应用并不需要它。',
          },
        ],
        note: '确切的模型列表、下载大小和最低操作系统版本可能在不同发布版本间变化——在使用有限流量套餐进行大型下载之前，请在应用内或[getoffgridai.co](https://getoffgridai.co)确认当前的具体信息。',
      },
      pricing: {
        id: 'pricing',
        title: '定价：免费核心 vs. Off Grid AI Pro',
        itemHeadings: true,
        content: [
          '**Off Grid AI的核心应用在全部四个平台上都是免费的，无需账号或订阅。** 一个可选的Off Grid AI Pro层级为想要更多功能的读者增加了额外内容；本评测已直接在开发者网站上核实价格。',
        ],
        columns: ['层级', '价格', '包含内容'],
        rows: [
          { '层级': '**核心应用**', '价格': '免费', '包含内容': '设备本地聊天、视觉识别、Stable Diffusion XL图像生成和Whisper语音转录——无需账号、无需订阅、无云端。' },
          { '层级': '**Off Grid AI Pro**', '价格': '终身69美元或每年49美元', '包含内容': '开发者表示终身价格会随时间上涨至149美元；购买前应在最新定价页面确认Pro专属功能的确切内容。' },
        ],
        note: '可选层级的定价可能在应用更新之间发生变化——本评测在撰写时已对照开发者网站核实了上述数字，但读者购买前应自行核实当前价格。',
      },
      supportedModels: {
        id: 'supported-models',
        title: '支持的模型',
        content: [
          '**Off Grid AI支持任意GGUF格式的语言模型，以及专门的图像和语音模型，而不是将用户限制在单一的精选列表中。**',
          '文本和聊天方面：Llama、Qwen 3和Qwen 3.5、Gemma 3和Gemma 4、Phi-4、Mistral以及其他开放的GGUF格式模型。图像生成方面：Stable Diffusion XL以及Stable Diffusion系列的其他模型。语音转文字方面：基于Whisper的转录模型。模型支持情况取决于应用版本和设备可用内存——更大的模型通常需要Mac或Windows PC，而不是手机。',
        ],
      },
      tractionAndRatings: {
        id: 'traction-and-ratings',
        title: '下载量、GitHub星标与App Store评分差距',
        itemHeadings: true,
        content: [
          '**Off Grid AI的影响力表现，取决于你查看的是哪一个单一来源——本评测核实了所有来源，而不是只挑一个。**',
          '在开发者自己的首页[getoffgridai.co](https://getoffgridai.co)上，宣称App Store、Google Play和GitHub合计累计下载超过18万次，以及一个"600多人的强大社区"。本评测直接核实了这一说法中GitHub星标的部分：[off-grid-ai GitHub组织](https://github.com/off-grid-ai)显示，[OGAM仓库](https://github.com/off-grid-ai/OGAM)（iOS和Android，MIT许可证）拥有超过3,000个星标，而[OGAD仓库](https://github.com/off-grid-ai/OGAD)（macOS和Windows）约有100个星标——两者相加，再加上更小的配套仓库，共同构成了首页所称的"超过3,000个GitHub星标"这一数字。',
          '仅看[App Store页面](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)，情况要单薄得多：本评测撰写时版本为0.0.107，仅有26条评分，平均3.1星。单独来看，这是一个小而弱的样本——远不足以仅凭App Store页面就得出可靠的质量结论。本评测明确陈述这一事实，而不是让它被更有利的跨平台数字所掩盖。诚实的结论是：Off Grid AI拥有可核实且相当规模的开源用户群和下载基础，但其iOS App Store的评分历史确实单薄，仅依赖App Store星级评分的读者所看到的信号，会明显弱于完整图景所支持的水平。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私',
        content: [
          '**Off Grid AI的核心定位是"核心无需账号、无需订阅、无云端"。** 由于聊天、视觉识别、图像生成和语音转录在模型下载后都在设备本地运行，这些内容无需离开设备即可正常工作。该应用的移动端和桌面端客户端均在MIT许可证下开源，这意味着设备本地处理的说法可以在公开的源代码中独立核实，而不必仅凭开发者的一面之词——这是闭源竞品无法提供的选项。',
          '希望进行完全审计的隐私评测的读者，应查看所安装版本对应的具体仓库源代码，因为开源软件的隐私行为可能在不同版本之间发生变化。',
        ],
      },
      tradeoffs: {
        id: 'tradeoffs',
        title: '取舍：优点与局限',
        itemHeadings: true,
        content: [
          '**Off Grid AI最大的优势是同时做到真正免费、开源和跨平台——很少有本地AI应用能同时兼顾这三点。** 它最大的弱点是App Store评分历史单薄，低估了其实际用户群的规模。',
        ],
        columns: ['优点', '局限/说明'],
        rows: [
          { '优点': '免费核心应用，无需账号、无需订阅、无云依赖。', '局限/说明': '部分附加功能需要可选的Pro层级（终身69美元或每年49美元）。' },
          { '优点': '可在iOS、Android、macOS和Windows上运行——真正的跨平台。', '局限/说明': '桌面版（0.0.43）和移动版（0.0.107）的版本号不同，因为它们是各自独立的代码库（OGAD对比OGAM）。' },
          { '优点': 'MIT许可证开源；超过3,000个GitHub星标可独立核实。', '局限/说明': 'App Store评分单薄：本评测撰写时仅26条评分，平均3.1星。' },
          { '优点': '支持聊天、视觉识别、Stable Diffusion XL图像生成和Whisper语音——不仅限于聊天。', '局限/说明': '更大、更高质量的模型仍需Mac或Windows PC，而非手机。' },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Off Grid AI与替代方案对比',
        content: [
          '**Off Grid AI最接近的对比对象是其他移动端和跨平台本地AI应用，而不是通用聊天机器人应用。**',
        ],
        columns: ['应用', '平台', '价格', '关键区别'],
        rows: [
          { '应用': '**[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)**', '平台': 'iOS/Android/macOS/Windows', '价格': '免费（Pro可选）', '关键区别': '开源、支持4个平台、App Store评分样本较弱。' },
          { '应用': '**[Private LLM](/zh/power-local-llm/private-llm-review)**', '平台': 'iPhone/iPad/Mac', '价格': '4.99美元一次性付费', '关键区别': '闭源，仅限Apple，140多个精选模型，OmniQuant量化。' },
          { '应用': '**[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)**', '平台': 'iOS/Android', '价格': '免费', '关键区别': '开源（MIT），仅限移动端，没有桌面版或图像生成。' },
          { '应用': '**[Enclave AI](/zh/power-local-llm/enclave-ai-review)**', '平台': 'iOS/Android', '价格': '免费', '关键区别': '仅限移动端的本地聊天应用；可直接对比模型库。' },
          { '应用': '**[Loci](/zh/power-local-llm/loci-ai-review-offline-local-ai)**', '平台': 'iPhone/iPad/Android/Mac/Windows', '价格': '免费', '关键区别': '精选模型列表和低摩擦设置，对比Off Grid AI的开放模型库。' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁应该使用Off Grid AI',
        content: [
          '希望在手机、平板、Mac和Windows PC上以相同方式使用免费、开源、无需账号的本地AI应用的读者。',
          '重视能够在源代码中亲自核实设备本地隐私声明，而不是仅依赖开发者营销文案的读者。',
          '希望在一个应用中同时使用聊天、图像生成和语音转录，而不是分别使用多个单一功能工具的读者。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不应该使用Off Grid AI',
        content: [
          '希望在安装前看到规模庞大、历史悠久的App Store评分记录的读者——Off Grid AI的iOS页面目前只有26条评分。',
          '特别想要一款一次性付费、非开源、拥有长期精选模型目录的应用的读者——[Private LLM](/zh/power-local-llm/private-llm-review)更适合这种情况。',
          '想要运行超大规模前沿模型的读者——这仍然需要云端AI或高端工作站，而非手机或笔记本应用。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Off Grid AI真的免费吗？',
            a: '核心应用在iOS、Android、macOS和Windows上免费，设备本地的聊天、视觉识别、图像生成或语音转录均无需账号或订阅。据开发者定价页面，可选的Off Grid AI Pro终身69美元或每年49美元。',
          },
          {
            q: '为什么Off Grid AI的App Store评分这么低？',
            a: '本评测撰写时，App Store页面显示3.1星、仅26条评分——这是一个小样本，单独来看信号较弱。这个数字特指iOS App Store的评分；它无法反映该应用在Android、macOS、Windows和GitHub上更广泛的影响力，据开发者称，这些平台合计累计下载超过18万次，且移动端代码库拥有超过3,000个GitHub星标。',
          },
          {
            q: 'Off Grid AI是开源的吗？',
            a: '是的。其移动端客户端OGAM和桌面端客户端OGAD均在[off-grid-ai组织](https://github.com/off-grid-ai)下以MIT许可证发布在GitHub上。本评测直接在GitHub上核实了星标数和许可证，而不是仅仅采信开发者的说法。',
          },
          {
            q: 'Off Grid AI桌面版和移动版的版本号有什么区别？',
            a: '它们是拥有各自独立发布周期的独立代码库。macOS和Windows桌面应用（OGAD）处于稳定版0.0.43，而iOS版App Store页面（基于OGAM）则为0.0.107版本。对于由独立仓库构建的跨平台项目而言，各平台版本号不同是预期之中的情况，而非错误。',
          },
          {
            q: 'Off Grid AI支持哪些模型？',
            a: '任何GGUF格式的语言模型，包括Llama、Qwen 3.5、Gemma、Phi-4和Mistral系列，此外还有用于图像生成的Stable Diffusion XL和用于语音转文字的Whisper。',
          },
          {
            q: 'Off Grid AI有可以加入的社区吗？',
            a: '开发者运营着一个Slack社区和一个活跃的[r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)子版块，据开发者网站称拥有600多名成员。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**Off Grid AI凭借其表现，跻身更优秀的免费跨平台本地AI选项之列，但有一个诚实的注意事项：其iOS App Store评分历史较为单薄。** 3.1星、26条评分的App Store页面单独来看是一个较弱的信号，本评测并不回避这一点。但它与一个经过核实、拥有超过3,000个GitHub星标的开源代码库，以及开发者报告的App Store、Google Play和GitHub合计超过18万次的下载量并存——这比App Store页面单独呈现的情况要完整得多。希望获得最广泛的免费、开源、四平台选项的读者应安装并自行判断；而希望在投入之前看到庞大且已确立的App Store评分历史的读者，则应转而考虑[Private LLM](/zh/power-local-llm/private-llm-review)。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        content: [
          '[Off Grid AI官方网站](https://getoffgridai.co) — 下载量数字、GitHub星标说法、社区规模和Pro定价。',
          '[App Store上的Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) — iOS版本号、星级评分、评分数量和价格。',
          '[off-grid-ai GitHub组织](https://github.com/off-grid-ai) — 仓库列表和星标数，已为本评测直接核实。',
          '[OGAM仓库](https://github.com/off-grid-ai/OGAM)（iOS/Android，MIT许可证） — 移动端星标数和许可证。',
          '[OGAD仓库](https://github.com/off-grid-ai/OGAD)（macOS/Windows） — 桌面版本号和发布记录。',
          '[Google Play页面](https://play.google.com/store/apps/details?id=ai.offgridmobile) — Android下载链接。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        content: [
          '[完整的本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory) — 涵盖所有平台的更广泛本地LLM工具目录。',
          '[Private LLM评测](/zh/power-local-llm/private-llm-review) — 一款拥有140多个精选模型的付费闭源Apple专属替代品。',
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) — 一款免费开源的仅限移动端替代品。',
          '[Enclave AI评测](/zh/power-local-llm/enclave-ai-review) — 另一款免费移动端本地AI应用，可用于对比模型库。',
          '[Loci AI评测](/zh/power-local-llm/loci-ai-review-offline-local-ai) — 一款精选、低摩擦的跨平台替代品。',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/off-grid-ai-review-hero-ar.webp',
    title: 'مراجعة Off Grid AI (2026): ذكاء اصطناعي محلي عبر المنصات لـ iOS وAndroid وmacOS وWindows',
    seoTitle: 'مراجعة Off Grid AI 2026: ذكاء اصطناعي محلي على 4 منصات',
    intro:
      'تطبيق Off Grid AI، الذي طورته [Wednesday Solutions, Inc.](https://getoffgridai.co)، هو تطبيق مجاني ومفتوح المصدر ولا يتطلب حسابًا، يُشغّل نماذج ذكاء اصطناعي مفتوحة بالكامل على الجهاز عبر أربع منصات: iOS وAndroid وmacOS وWindows. وفقًا لموقع المطوّر نفسه، تجاوز التطبيق [180,000+ تنزيل مجمّع](https://getoffgridai.co) عبر App Store وGoogle Play وGitHub، ويحمل عميله للجوال، [OGAM على GitHub](https://github.com/off-grid-ai/OGAM)، أكثر من 3,000 نجمة بموجب رخصة MIT. أما قائمة App Store وحدها فتروي قصة أضعف — يُظهر [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) متوسط 3.1 نجوم من 26 تقييمًا فقط، وهي إشارة ضعيفة عند النظر إليها بمعزل عن غيرها. تتحقق هذه المراجعة من الصورتين مباشرة: أرقام التنزيلات والنجوم عبر المنصات من [getoffgridai.co](https://getoffgridai.co) وGitHub، وتقييم App Store الأضيق الخاص بـ iOS فقط، لكي يتمكن القارئ من الموازنة بين عيّنة تقييم صغيرة وقاعدة مفتوحة المصدر أكبر وقابلة للتحقق.',
    metaDescription:
      'مراجعة Off Grid AI 2026: ذكاء اصطناعي محلي مجاني ومفتوح المصدر ولا يتطلب حسابًا لـ iOS وAndroid وmacOS وWindows. أكثر من 180 ألف تنزيل، وأكثر من 3 آلاف نجمة على GitHub، لكن 3.1 نجوم فقط من 26 تقييمًا على App Store. تحقق كامل، الأسعار، والبدائل.',
    twitterDescription:
      'مراجعة Off Grid AI 2026: ذكاء اصطناعي محلي مجاني ومفتوح المصدر وعابر للمنصات (iOS/Android/macOS/Windows). أكثر من 180 ألف تنزيل وأكثر من 3 آلاف نجمة على GitHub بحسب المطوّر، مقابل قائمة App Store ضعيفة (3.1 نجوم، 26 تقييمًا). روابط تم التحقق منها، الأسعار، ومقارنة مع Private LLM وPocketPal AI وEnclave AI وLoci.',
    audience:
      'قرّاء يقارنون تطبيقات الذكاء الاصطناعي المحلي المجانية والمفتوحة المصدر والعابرة للمنصات بالبدائل المدفوعة أو المخصصة للجوال فقط — يغطي أرقام التنزيلات/النجوم التي تم التحقق منها، فجوة تقييم App Store، النماذج المدعومة، الأسعار، والخصوصية.',
    readTime: '9 دقائق قراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Off Grid AI',
    targetKeywords: [
      'مراجعة off grid ai',
      'تطبيق off grid ai',
      'getoffgridai',
      'off grid ai github',
      'off grid ai مقابل private llm',
      'تطبيق ذكاء اصطناعي محلي مجاني iphone android',
      'سعر off grid ai pro',
      'تطبيق llm محلي مفتوح المصدر عابر للمنصات',
    ],
    current_models_mentioned: ['Llama', 'Qwen 3', 'Qwen 3.5', 'Gemma 3', 'Gemma 4', 'Phi-4', 'Mistral', 'Stable Diffusion XL'],
    current_hardware_mentioned: ['آيفون (iOS 17 فأعلى)', 'أندرويد 10 فأعلى', 'ماك بمعالج Apple Silicon (M1 أو أحدث)', 'حاسوب Windows'],
    leadAnswerBlock:
      '**Off Grid AI تطبيق مجاني ومفتوح المصدر ولا يتطلب حسابًا، يُشغّل نماذج لغوية بصيغة GGUF ونماذج صور Stable Diffusion وتفريغ صوتي عبر Whisper بالكامل على الجهاز، على iOS وAndroid وmacOS وWindows.** طوّرته [Wednesday Solutions, Inc.](https://getoffgridai.co)، ويُبلغ عن [أكثر من 180,000 تنزيل مجمّع](https://getoffgridai.co) عبر App Store وGoogle Play وGitHub، ويحمل مستودعه الخاص بالجوال، [OGAM](https://github.com/off-grid-ai/OGAM)، أكثر من 3,000 نجمة على GitHub بموجب رخصة MIT — وهي أرقام تحققت منها هذه المراجعة مباشرة مقابل GitHub وموقع المطوّر نفسه، وليس مجرد قبول ادعاء المطوّر. أما [قائمة App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) بمفردها فتُظهر 26 تقييمًا فقط بمتوسط 3.1 نجوم — إشارة ضعيفة فعلًا لا تُخفيها هذه المراجعة خلف الأرقام العابرة للمنصات الأكثر إيجابية. تضيف طبقة اختيارية Off Grid AI Pro (69 دولارًا مدى الحياة أو 49 دولارًا سنويًا، بحسب موقع المطوّر) مزايا إضافية فوق نواة مجانية لا تتطلب أصلًا حسابًا، ولا اشتراكًا إلزاميًا، ولا اعتمادًا على السحابة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق تثبيت Off Grid AI رغم تقييمه الضعيف على App Store؟',
        answer:
          'نعم، بالنسبة لمعظم القراء الراغبين في تطبيق ذكاء اصطناعي محلي مجاني ومفتوح المصدر وعابر للمنصات — فقائمة App Store بتقييم 3.1 نجوم من 26 تقييمًا ضعيفة بمفردها، لكنها تترافق مع قاعدة كود مفتوحة المصدر موثّقة بأكثر من 3,000 نجمة على GitHub وأكثر من 180,000 تنزيل مجمّع عبر App Store وGoogle Play وGitHub، وهي صورة أكثر اكتمالًا مما تُظهره صفحة App Store وحدها. تجاوزه إذا كنت تريد تحديدًا تطبيقًا يُشترى مرة واحدة وغير مفتوح المصدر وله سجل تقييمات طويل على App Store — إذ يناسب Private LLM هذه الحالة بشكل أفضل.',
        bullets: [
          'نواة مجانية: بلا حساب، بلا اشتراك، بلا سحابة — تم التحقق منها على [getoffgridai.co](https://getoffgridai.co).',
          'عابر للمنصات: iOS 17 فأعلى، Android 10 فأعلى، macOS 14 فأعلى (Apple Silicon)، وWindows — وليس مقتصرًا على iOS.',
          'أكثر من 180,000 تنزيل مجمّع وأكثر من 3,000 نجمة على GitHub (مستودع [OGAM](https://github.com/off-grid-ai/OGAM) بترخيص MIT) بحسب موقع المطوّر، وتم التحقق منها مباشرة على GitHub.',
          'الإشارة المعزولة من App Store ضعيفة: يُظهر [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) 3.1 نجوم من 26 تقييمًا وقت إعداد هذه المراجعة.',
          'طبقة Off Grid AI Pro الاختيارية: 69 دولارًا مدى الحياة أو 49 دولارًا سنويًا بحسب صفحة أسعار المطوّر — لا تحتاجها ميزات الدردشة والرؤية وتوليد الصور والصوت الأساسية.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Off Grid AI', anchor: 'what-is-off-grid-ai' },
      { label: 'الحصول عليه: تنزيل لكل منصة', anchor: 'get-it' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'الأسعار: نواة مجانية مقابل Off Grid AI Pro', anchor: 'pricing' },
      { label: 'النماذج المدعومة', anchor: 'supported-models' },
      { label: 'التنزيلات ونجوم GitHub وفجوة تقييم App Store', anchor: 'traction-and-ratings' },
      { label: 'الخصوصية', anchor: 'privacy' },
      { label: 'المقايضات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Off Grid AI مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Off Grid AI', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Off Grid AI', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الخلاصة السريعة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Off Grid AI هو تطبيق مجاني ومفتوح المصدر وعابر للمنصات (iOS وAndroid وmacOS وWindows) من Wednesday Solutions, Inc.، يُشغّل نماذج لغوية بصيغة GGUF ونماذج صور Stable Diffusion وتفريغًا صوتيًا عبر Whisper بالكامل على الجهاز، بأكثر من 180,000 تنزيل مجمّع وأكثر من 3,000 نجمة على GitHub، لكن بـ26 تقييمًا فقط على App Store.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله كبديل مجاني ومفتوح المصدر لروبوت دردشة ذكاء اصطناعي بالاشتراك — تثبّته على هاتفك أو جهازك اللوحي أو ماك أو حاسوبك، وتنزّل نموذجًا مرة واحدة، وبعد ذلك يعمل كل شيء على جهازك الخاص، دون حساب ودون الحاجة إلى إنترنت للدردشة.',
          },
        ],
        items: [
          'مجاني ومفتوح المصدر: التطبيق الأساسي لا يحتاج حسابًا ولا اشتراكًا ولا اعتمادًا على السحابة — [رخصة MIT](https://github.com/off-grid-ai/OGAM).',
          'عابر للمنصات: iOS وAndroid وmacOS وWindows — عميل سطح المكتب (OGAD) عند الإصدار المستقر 0.0.43؛ قائمة App Store على iOS عند الإصدار 0.0.107.',
          'أكثر من 180,000 تنزيل مجمّع وأكثر من 3,000 نجمة على GitHub بحسب [getoffgridai.co](https://getoffgridai.co)، وتم التحقق منها مباشرة على GitHub.',
          'تقييم App Store ضعيف بمفرده: 3.1 نجوم من 26 تقييمًا على [قائمة iOS](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) وقت إعداد هذه المراجعة — حقيقة تذكرها هذه المراجعة بوضوح جنبًا إلى جنب مع الأرقام العابرة للمنصات الأكثر إيجابية، لا بدلًا منها.',
          'النماذج: Llama وQwen 3.5 وGemma وPhi-4 وMistral وأي نموذج بصيغة GGUF للدردشة؛ Stable Diffusion XL لتوليد الصور؛ Whisper للتفريغ الصوتي.',
          'المجتمع: مجتمع على Slack ومنتدى فرعي نشط [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)، يصفه المطوّر بأنه يضم أكثر من 600 عضو.',
          'طبقة Off Grid AI Pro الاختيارية: 69 دولارًا مدى الحياة (يذكر المطوّر أن هذا السعر يرتفع نحو 149 دولارًا) أو 49 دولارًا سنويًا بحسب صفحة أسعار المطوّر — غير مطلوبة لميزات الدردشة والرؤية والصور والصوت الأساسية.',
        ],
      },
      whatIsOffGridAI: {
        id: 'what-is-off-grid-ai',
        title: 'ما هو Off Grid AI',
        content: [
          '**Off Grid AI تطبيق مفتوح المصدر يُنزّل ويُشغّل نماذج ذكاء اصطناعي مفتوحة مباشرة على هاتف أو جهاز لوحي أو ماك أو حاسوب Windows، دون أي مكوّن على جانب الخادم للميزات الأساسية.** بمجرد تنزيل نموذج، تعمل الدردشة وتوليد الصور والرؤية والتفريغ الصوتي جميعًا دون اتصال بالإنترنت.',
          'طوّرته [Wednesday Solutions, Inc.](https://getoffgridai.co)، التي يتمثّل موقعها التسويقي على موقعها الخاص بعبارة "بلا حساب، بلا اشتراك للنواة، بلا سحابة". يتوزّع المشروع على عدة مستودعات GitHub تحت [منظمة off-grid-ai](https://github.com/off-grid-ai): [OGAM](https://github.com/off-grid-ai/OGAM) (iOS وAndroid، أكبر مستودع بأكثر من 3,000 نجمة)، و[OGAD](https://github.com/off-grid-ai/OGAD) (سطح مكتب macOS وWindows، حاليًا عند الإصدار المستقر 0.0.43)، بالإضافة إلى مستودعات مصاحبة أصغر لحوكمة المؤسسات (OGAC) ومشاركة الملفات/النصوص المحلية بين الأجهزة (OGAS).',
          'ظهر تطبيق Off Grid AI لـ iOS/Android أولًا على App Store باسم [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)، وهو حاليًا عند الإصدار 0.0.107. تلك النظرة المقتصرة على App Store — 3.1 نجوم من 26 تقييمًا وقت إعداد هذه المراجعة — تقلل من الانتشار الفعلي للمشروع عند احتساب تطبيقات سطح المكتب وإصدارات GitHub وتنزيلات Google Play معًا: أكثر من 180,000 تنزيل وأكثر من 3,000 نجمة على GitHub، بحسب الصفحة الرئيسية لموقع المطوّر، وتم التحقق منها مباشرة مقابل عدّادات نجوم GitHub في هذه المراجعة.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'الحصول عليه: تنزيل لكل منصة',
        itemHeadings: true,
        content: [
          '**Off Grid AI تطبيق قابل للتنزيل فعليًا على أربع منصات — لا يوجد تنزيل "رسمي" واحد؛ لكل منصة رابطها الخاص الذي تم التحقق منه.**',
        ],
        columns: ['المنصة', 'أين تحصل عليه', 'ملاحظات'],
        rows: [
          { 'المنصة': '**iOS**', 'أين تحصل عليه': '[قائمة App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)', 'ملاحظات': 'يتطلب iOS 17 فأعلى. تنزيل مجاني، وشراء Pro اختياري داخل التطبيق.' },
          { 'المنصة': '**Android**', 'أين تحصل عليه': '[قائمة Google Play](https://play.google.com/store/apps/details?id=ai.offgridmobile)', 'ملاحظات': 'يتطلب Android 10 فأعلى. يتوفر ملف APK مباشر أيضًا على [إصدارات GitHub](https://github.com/off-grid-ai/OGAM/releases/latest).' },
          { 'المنصة': '**macOS**', 'أين تحصل عليه': '[تنزيل DMG](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest.dmg)', 'ملاحظات': 'يتطلب macOS 14 فأعلى على Apple Silicon (M1 أو أحدث). إصدار سطح المكتب المستقر 0.0.43.' },
          { 'المنصة': '**Windows**', 'أين تحصل عليه': '[تنزيل ملف التثبيت .exe](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest-setup.exe)', 'ملاحظات': 'إصدار سطح المكتب المستقر 0.0.43، ونفس قناة الإصدار الخاصة بـ macOS.' },
        ],
        note: 'هذه المراجعة مكمّلة لقيد Off Grid AI في [دليل برمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory)، الذي يدرجه إلى جانب تطبيقات أخرى للجوال وعابرة للمنصات للذكاء الاصطناعي المحلي. جميع الروابط الأربعة أعلاه تم التحقق منها مباشرة لهذه المراجعة وأظهرت صفحة نشطة وقت الكتابة؛ قد تتغير أرقام الإصدارات والأسعار بين الإصدارات — تحقق من التفاصيل الحالية على [getoffgridai.co](https://getoffgridai.co) قبل التثبيت.',
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**يستغرق إعداد Off Grid AI أربع خطوات ولا يتطلب إنشاء حساب، على أي من منصاته الأربع.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق على منصتك',
            whyItMatters: 'استخدم App Store أو Google Play أو روابط التنزيل المباشر لـ macOS/Windows أعلاه. الأربعة جميعها تنزيلات مجانية — لا يوجد حاجز دفع لتثبيت التطبيق نفسه.',
          },
          {
            title: 'اختر نموذجًا يناسب جهازك',
            whyItMatters: 'يدعم Off Grid AI نماذج بصيغة GGUF من عائلات تشمل Llama وQwen 3.5 وGemma وPhi-4 وMistral. تتعامل الهواتف والأجهزة اللوحية مع نماذج مكمّمة أصغر؛ بينما يمكن لماك أو حاسوب Windows بذاكرة أكبر ومعالج رسومي مستقل أو Apple Silicon تشغيل نماذج أكبر.',
          },
          {
            title: 'نزّل النموذج مرة واحدة',
            whyItMatters: 'تتراوح ملفات النماذج من حوالي 1 جيجابايت إلى عشرات الجيجابايتات حسب عدد المعاملات ومستوى التكميم. تحتاج هذه الخطوة اتصالًا بالإنترنت؛ أما كل خطوة بعدها فلا تحتاج ذلك.',
          },
          {
            title: 'دردش أو ولّد صورًا أو فرّغ الصوت دون اتصال',
            whyItMatters: 'بمجرد تنزيل نموذج، فعّل وضع الطيران للتحقق بنفسك من ادعاء العمل دون اتصال. تعمل الدردشة النصية وتوليد الصور عبر Stable Diffusion XL والتفريغ الصوتي المعتمد على Whisper جميعًا دون اتصال شبكة.',
          },
          {
            title: 'اختياري: انضم إلى المجتمع أو ترقَّ إلى Pro',
            whyItMatters: 'يدير المطوّر مجتمعًا على Slack ومنتدى فرعيًا [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) (يصفه المطوّر بأنه يضم أكثر من 600 عضو) للدعم وطلبات الميزات. Off Grid AI Pro هو شراء منفصل واختياري إضافي فوق التطبيق الأساسي — وليس مطلوبًا لاستخدامه.',
          },
        ],
        note: 'قد تتغير قائمة النماذج الدقيقة وأحجام التنزيل والحد الأدنى لإصدارات نظام التشغيل بين الإصدارات — تحقق من التفاصيل الحالية داخل التطبيق أو على [getoffgridai.co](https://getoffgridai.co) قبل الالتزام بتنزيل كبير على باقة بيانات محدودة.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار: نواة مجانية مقابل Off Grid AI Pro',
        itemHeadings: true,
        content: [
          '**التطبيق الأساسي لـ Off Grid AI مجاني على المنصات الأربع جميعها، دون الحاجة إلى حساب أو اشتراك.** تضيف طبقة اختيارية من Off Grid AI Pro مزايا إضافية للقراء الراغبين في المزيد؛ تحقّقت هذه المراجعة من السعر مباشرة على موقع المطوّر.',
        ],
        columns: ['المستوى', 'السعر', 'ما يشمله'],
        rows: [
          { 'المستوى': '**التطبيق الأساسي**', 'السعر': 'مجاني', 'ما يشمله': 'الدردشة على الجهاز، والرؤية، وتوليد الصور عبر Stable Diffusion XL، والتفريغ الصوتي عبر Whisper — بلا حساب، بلا اشتراك، بلا سحابة.' },
          { 'المستوى': '**Off Grid AI Pro**', 'السعر': '69 دولارًا مدى الحياة أو 49 دولارًا سنويًا', 'ما يشمله': 'يذكر المطوّر أن سعر مدى الحياة يرتفع مع الوقت نحو 149 دولارًا؛ ينبغي التحقق من الميزات الدقيقة الحصرية لـ Pro على صفحة الأسعار الحالية قبل الشراء.' },
        ],
        note: 'قد تتغير أسعار المستويات الاختيارية بين تحديثات التطبيق — تحقّقت هذه المراجعة من الأرقام أعلاه مقابل موقع المطوّر وقت الكتابة، لكن ينبغي للقراء التحقق من السعر الحالي قبل الشراء.',
      },
      supportedModels: {
        id: 'supported-models',
        title: 'النماذج المدعومة',
        content: [
          '**يدعم Off Grid AI أي نموذج لغوي بصيغة GGUF، إضافة إلى نماذج صور وصوت مخصصة، بدلًا من حصر المستخدمين في قائمة واحدة منتقاة.**',
          'للنصوص والدردشة: Llama وQwen 3 وQwen 3.5 وGemma 3 وGemma 4 وPhi-4 وMistral ونماذج مفتوحة أخرى بصيغة GGUF. لتوليد الصور: Stable Diffusion XL ونماذج أخرى من عائلة Stable Diffusion. للتفريغ الصوتي: نماذج تفريغ معتمدة على Whisper. يعتمد دعم النماذج على إصدار التطبيق والذاكرة المتاحة في الجهاز — عادةً ما تحتاج النماذج الأكبر إلى ماك أو حاسوب Windows بدلًا من الهاتف.',
        ],
      },
      tractionAndRatings: {
        id: 'traction-and-ratings',
        title: 'التنزيلات ونجوم GitHub وفجوة تقييم App Store',
        itemHeadings: true,
        content: [
          '**يبدو انتشار Off Grid AI مختلفًا جدًا بحسب أي مصدر واحد يُطّلع عليه القارئ — وتحققت هذه المراجعة من جميع المصادر بدلًا من الاكتفاء بواحد.**',
          'على الصفحة الرئيسية لموقع المطوّر، [getoffgridai.co](https://getoffgridai.co)، يُذكر أكثر من 180,000 تنزيل مجمّع عبر App Store وGoogle Play وGitHub، و"مجتمع قوي يضم أكثر من 600 عضو". تحقّقت هذه المراجعة مباشرة من جزء نجوم GitHub في هذا الادعاء: تُظهر [منظمة off-grid-ai على GitHub](https://github.com/off-grid-ai) أن [مستودع OGAM](https://github.com/off-grid-ai/OGAM) (iOS وAndroid، بترخيص MIT) يتجاوز 3,000 نجمة، بينما يحمل [مستودع OGAD](https://github.com/off-grid-ai/OGAD) (macOS وWindows) نحو 100 نجمة — يفسّر المستودعان معًا، إلى جانب مستودعات مصاحبة أصغر، رقم "أكثر من 3,000 نجمة على GitHub" على الصفحة الرئيسية.',
          'أما [قائمة App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) بمفردها فتروي قصة أضعف بكثير: 3.1 نجوم من 26 تقييمًا فقط، عند الإصدار 0.0.107، وقت إعداد هذه المراجعة. تلك عيّنة صغيرة وضعيفة بمعزل عن غيرها — أبعد ما يكون عن الكفاية لاستخلاص استنتاج جودة موثوق من صفحة App Store وحدها. تذكر هذه المراجعة تلك الحقيقة بوضوح بدلًا من تركها مخفية خلف الأرقام العابرة للمنصات الأكثر إيجابية. القراءة الصادقة: يمتلك Off Grid AI قاعدة مستخدمين وتنزيلات مفتوحة المصدر قابلة للتحقق وكبيرة نسبيًا، لكن سجل تقييماته على App Store لـ iOS تحديدًا ضعيف، وسيرى القارئ الذي يعتمد فقط على تقييم App Store إشارة أضعف بكثير مما تدعمه الصورة الكاملة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية',
        content: [
          '**الموقف الأساسي لـ Off Grid AI هو "بلا حساب، بلا اشتراك للنواة، بلا سحابة".** بما أن الدردشة والرؤية وتوليد الصور والتفريغ الصوتي تعمل على الجهاز بمجرد تنزيل نموذج، فإن هذا المحتوى لا يحتاج إلى مغادرة الجهاز ليعمل. التطبيق مفتوح المصدر بموجب رخصة MIT لعميليه على الجوال وسطح المكتب، ما يعني أن ادعاء المعالجة على الجهاز يمكن التحقق منه بشكل مستقل في الكود المصدري المنشور، بدلًا من قبوله فقط بكلمة المطوّر — وهو خيار لا يقدمه المنافسون مغلقو المصدر.',
          'ينبغي للقراء الراغبين في مراجعة خصوصية مدققة بالكامل مراجعة الكود المصدري للمستودع المحدد للإصدار الذي يثبّتونه، إذ يمكن أن يتغير سلوك الخصوصية في البرمجيات مفتوحة المصدر بين الإصدارات.',
        ],
      },
      tradeoffs: {
        id: 'tradeoffs',
        title: 'المقايضات: المزايا مقابل القيود',
        itemHeadings: true,
        content: [
          '**أكبر نقاط قوة Off Grid AI هي كونه مجانيًا ومفتوح المصدر وعابرًا للمنصات فعليًا في آن واحد — وهو أمر نادر بين تطبيقات الذكاء الاصطناعي المحلي.** أما أكبر نقاط ضعفه فهي سجل تقييمات App Store الضعيف الذي يقلل من الحجم الفعلي لقاعدة مستخدميه.',
        ],
        columns: ['ميزة', 'قيد / ملاحظة'],
        rows: [
          { 'ميزة': 'تطبيق أساسي مجاني، بلا حساب، بلا اشتراك، بلا اعتماد على السحابة.', 'قيد / ملاحظة': 'يلزم مستوى Pro الاختياري (69 دولارًا مدى الحياة أو 49 دولارًا سنويًا) لبعض الإضافات.' },
          { 'ميزة': 'يعمل على iOS وAndroid وmacOS وWindows — عابر للمنصات فعليًا.', 'قيد / ملاحظة': 'تختلف أرقام إصدار سطح المكتب (0.0.43) والجوال (0.0.107)، لأنهما قاعدتا كود منفصلتان (OGAD مقابل OGAM).' },
          { 'ميزة': 'مفتوح المصدر بموجب رخصة MIT؛ يمكن التحقق بشكل مستقل من أكثر من 3,000 نجمة على GitHub.', 'قيد / ملاحظة': 'تقييم App Store ضعيف: 26 تقييمًا فقط بمتوسط 3.1 نجوم وقت إعداد هذه المراجعة.' },
          { 'ميزة': 'يدعم الدردشة والرؤية وتوليد الصور عبر Stable Diffusion XL وصوت Whisper — وليس الدردشة فقط.', 'قيد / ملاحظة': 'لا تزال النماذج الأكبر والأعلى جودة تحتاج إلى ماك أو حاسوب Windows بدلًا من الهاتف.' },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Off Grid AI مقابل البدائل',
        content: [
          '**أقرب المقارنات لـ Off Grid AI هي تطبيقات أخرى للجوال وعابرة للمنصات للذكاء الاصطناعي المحلي، وليست تطبيقات دردشة عامة.**',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر', 'الفرق الرئيسي'],
        rows: [
          { 'التطبيق': '**[Off Grid AI](/ar/power-local-llm/off-grid-ai-review)**', 'المنصات': 'iOS/Android/macOS/Windows', 'السعر': 'مجاني (Pro اختياري)', 'الفرق الرئيسي': 'مفتوح المصدر، 4 منصات، عيّنة تقييمات App Store ضعيفة.' },
          { 'التطبيق': '**[Private LLM](/ar/power-local-llm/private-llm-review)**', 'المنصات': 'iPhone/iPad/Mac', 'السعر': '4.99 دولارًا لمرة واحدة', 'الفرق الرئيسي': 'مغلق المصدر، Apple فقط، أكثر من 140 نموذجًا منتقى، تكميم OmniQuant.' },
          { 'التطبيق': '**[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)**', 'المنصات': 'iOS/Android', 'السعر': 'مجاني', 'الفرق الرئيسي': 'مفتوح المصدر (MIT)، للجوال فقط، بلا سطح مكتب أو توليد صور.' },
          { 'التطبيق': '**[Enclave AI](/ar/power-local-llm/enclave-ai-review)**', 'المنصات': 'iOS/Android', 'السعر': 'مجاني', 'الفرق الرئيسي': 'تطبيق دردشة محلي للجوال فقط؛ قارن مكتبات النماذج مباشرة.' },
          { 'التطبيق': '**[Loci](/ar/power-local-llm/loci-ai-review-offline-local-ai)**', 'المنصات': 'iPhone/iPad/Android/Mac/Windows', 'السعر': 'مجاني', 'الفرق الرئيسي': 'قائمة نماذج منتقاة وإعداد سلس مقابل مكتبة النماذج المفتوحة لدى Off Grid AI.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Off Grid AI',
        content: [
          'القراء الراغبون في تطبيق ذكاء اصطناعي محلي مجاني ومفتوح المصدر ولا يتطلب حسابًا، يعمل بالطريقة نفسها على الهاتف والجهاز اللوحي وماك وحاسوب Windows.',
          'القراء الذين يقدّرون إمكانية التحقق من ادعاء الخصوصية على الجهاز في الكود المصدري بدلًا من الاعتماد فقط على الخطاب التسويقي للمطوّر.',
          'القراء الراغبون في الدردشة وتوليد الصور والتفريغ الصوتي في تطبيق واحد بدلًا من أدوات منفصلة أحادية الغرض.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Off Grid AI',
        content: [
          'القراء الراغبون في رؤية سجل تقييمات كبير وراسخ على App Store قبل التثبيت — إذ لا تحمل قائمة Off Grid AI على iOS حاليًا سوى 26 تقييمًا.',
          'القراء الراغبون تحديدًا في تطبيق يُشترى مرة واحدة، غير مفتوح المصدر، وله كتالوج نماذج منتقى وطويل — إذ يناسب [Private LLM](/ar/power-local-llm/private-llm-review) هذه الحالة بشكل أفضل.',
          'القراء الراغبون في تشغيل نماذج ضخمة متطورة — فذلك لا يزال يتطلب ذكاءً اصطناعيًا سحابيًا أو محطة عمل عالية الأداء، وليس تطبيق هاتف أو حاسوب محمول.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Off Grid AI مجاني حقًا؟',
            a: 'التطبيق الأساسي مجاني على iOS وAndroid وmacOS وWindows، دون الحاجة إلى حساب أو اشتراك للدردشة أو الرؤية أو توليد الصور أو التفريغ الصوتي على الجهاز. تبلغ تكلفة طبقة Off Grid AI Pro الاختيارية 69 دولارًا مدى الحياة أو 49 دولارًا سنويًا، بحسب صفحة أسعار المطوّر.',
          },
          {
            q: 'لماذا يحمل Off Grid AI تقييمًا منخفضًا على App Store؟',
            a: 'تُظهر قائمة App Store 3.1 نجوم من 26 تقييمًا فقط وقت إعداد هذه المراجعة — وهي عيّنة صغيرة تمثّل إشارة ضعيفة بمفردها. يعكس هذا الرقم تقييمات App Store لـ iOS تحديدًا؛ ولا يعكس الانتشار الأوسع للتطبيق عبر Android وmacOS وWindows وGitHub، حيث يُبلغ المطوّر عن أكثر من 180,000 تنزيل مجمّع، وحيث تحمل قاعدة كود الجوال أكثر من 3,000 نجمة على GitHub.',
          },
          {
            q: 'هل Off Grid AI مفتوح المصدر؟',
            a: 'نعم. يُنشر كل من عميل الجوال OGAM وعميل سطح المكتب OGAD بموجب رخصة MIT على GitHub، تحت [منظمة off-grid-ai](https://github.com/off-grid-ai). تحقّقت هذه المراجعة مباشرة من عدد النجوم والترخيص على GitHub، بدلًا من الاعتماد فقط على ادعاء المطوّر.',
          },
          {
            q: 'ما الفرق بين أرقام إصدار سطح المكتب والجوال لـ Off Grid AI؟',
            a: 'هما قاعدتا كود منفصلتان بدورات إصدار مستقلة. يبلغ تطبيق سطح المكتب لـ macOS وWindows (OGAD) الإصدار المستقر 0.0.43، بينما تبلغ قائمة App Store على iOS (المبنية على OGAM) الإصدار 0.0.107. يُعد اختلاف رقم الإصدار بين المنصات أمرًا متوقعًا في مشروع عابر للمنصات مبني من مستودعات منفصلة، وليس خطأً.',
          },
          {
            q: 'ما النماذج التي يدعمها Off Grid AI؟',
            a: 'أي نموذج لغوي بصيغة GGUF، بما في ذلك عائلات Llama وQwen 3.5 وGemma وPhi-4 وMistral، إضافة إلى Stable Diffusion XL لتوليد الصور وWhisper للتفريغ الصوتي.',
          },
          {
            q: 'هل لدى Off Grid AI مجتمع يمكنني الانضمام إليه؟',
            a: 'يدير المطوّر مجتمعًا على Slack ومنتدى فرعيًا نشطًا [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/)، يصفه موقع المطوّر بأنه يضم أكثر من 600 عضو.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Off Grid AI مكانًا بين أفضل خيارات الذكاء الاصطناعي المحلي المجانية والعابرة للمنصات، مع تحفظ صادق واحد: سجل تقييماته على App Store لـ iOS ضعيف.** تمثّل قائمة App Store بتقييم 3.1 نجوم من 26 تقييمًا إشارة ضعيفة بمعزل عن غيرها، ولا تدّعي هذه المراجعة عكس ذلك. لكنها تترافق مع قاعدة كود مفتوحة المصدر موثّقة بأكثر من 3,000 نجمة على GitHub وأكثر من 180,000 تنزيل مجمّع يُبلغ عنها المطوّر عبر App Store وGoogle Play وGitHub — وهي صورة أكثر اكتمالًا بكثير مما تُظهره صفحة App Store وحدها. ينبغي للقراء الراغبين في أوسع خيار مجاني ومفتوح المصدر وعابر لأربع منصات تثبيته والحكم بأنفسهم؛ أما الراغبون في رؤية سجل تقييمات كبير وراسخ على App Store قبل الالتزام فينبغي أن ينظروا بدلًا من ذلك إلى [Private LLM](/ar/power-local-llm/private-llm-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        content: [
          '[موقع Off Grid AI الرسمي](https://getoffgridai.co) — أرقام التنزيلات، ادعاء نجوم GitHub، حجم المجتمع، وأسعار Pro.',
          '[Off Grid AI - Private Local AI على App Store](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) — رقم إصدار iOS، التقييم، عدد التقييمات، والسعر.',
          '[منظمة off-grid-ai على GitHub](https://github.com/off-grid-ai) — قائمة المستودعات وعدد النجوم، تم التحقق منها مباشرة لهذه المراجعة.',
          '[مستودع OGAM](https://github.com/off-grid-ai/OGAM) (iOS/Android، رخصة MIT) — عدد نجوم الجوال والترخيص.',
          '[مستودع OGAD](https://github.com/off-grid-ai/OGAD) (macOS/Windows) — رقم إصدار سطح المكتب والإصدارات.',
          '[قائمة Google Play](https://play.google.com/store/apps/details?id=ai.offgridmobile) — رابط تنزيل Android.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        content: [
          '[الدليل الشامل لبرمجيات النماذج اللغوية المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات النماذج اللغوية المحلية عبر جميع المنصات.',
          '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — بديل مدفوع ومغلق المصدر خاص بـ Apple فقط مع أكثر من 140 نموذجًا منتقى.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — بديل مجاني ومفتوح المصدر للجوال فقط.',
          '[مراجعة Enclave AI](/ar/power-local-llm/enclave-ai-review) — تطبيق آخر مجاني للجوال للذكاء الاصطناعي المحلي لمقارنة مكتبات النماذج.',
          '[مراجعة Loci AI](/ar/power-local-llm/loci-ai-review-offline-local-ai) — بديل عابر للمنصات منتقى وسلس الإعداد.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/off-grid-ai-review-hero-ko.webp',
    title: 'Off Grid AI 리뷰 (2026년): iOS, Android, macOS, Windows용 크로스플랫폼 로컬 AI',
    seoTitle: 'Off Grid AI 리뷰 2026: 4개 플랫폼용 로컬 AI',
    intro:
      '[Wednesday Solutions, Inc.](https://getoffgridai.co)가 개발한 Off Grid AI는 iOS, Android, macOS, Windows 네 개 플랫폼에서 완전히 기기 내에서 오픈 웨이트 AI 모델을 실행하는 무료, 오픈소스, 계정 불필요 앱입니다. 개발사 자체 웹사이트에 따르면 App Store, Google Play, GitHub를 합쳐 [누적 18만 건 이상의 다운로드](https://getoffgridai.co)를 기록했으며, 모바일 클라이언트인 [GitHub의 OGAM](https://github.com/off-grid-ai/OGAM)은 MIT 라이선스 하에 3,000개 이상의 스타를 보유하고 있습니다. App Store 등록 정보만 보면 더 빈약한 그림을 보여줍니다 — [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)는 단 26개의 평가로 평균 3.1점을 기록하고 있으며, 이는 단독으로 보면 약한 신호입니다. 이 리뷰는 두 그림을 모두 직접 확인했습니다: [getoffgridai.co](https://getoffgridai.co)와 GitHub의 크로스플랫폼 다운로드 및 스타 수치, 그리고 App Store에서만 확인되는 좁은 iOS 평점을 함께 검토하여, 독자가 작은 평가 표본과 더 크고 검증 가능한 오픈소스 기반을 저울질할 수 있도록 했습니다.',
    metaDescription:
      'Off Grid AI 리뷰 2026: iOS, Android, macOS, Windows용 무료, 오픈소스, 계정 불필요 로컬 AI. 18만 건 이상의 다운로드, GitHub 스타 3,000개 이상, 그러나 App Store에서는 26개 평가에 3.1점. 전체 검증, 가격, 대안 앱 비교.',
    twitterDescription:
      'Off Grid AI 리뷰 2026: 무료, 오픈소스, 크로스플랫폼(iOS/Android/macOS/Windows) 로컬 AI. 개발사에 따르면 18만 건 이상의 다운로드와 GitHub 스타 3,000개 이상을 보유했지만, App Store 등록 정보는 빈약함(3.1점, 26개 평가). 검증된 링크, 가격, Private LLM·PocketPal AI·Enclave AI·Loci와의 비교.',
    audience:
      '무료, 오픈소스, 크로스플랫폼 로컬 AI 앱을 유료 또는 모바일 전용 대안과 비교하는 독자 — 검증된 다운로드/스타 수치, App Store 평점 격차, 지원 모델, 가격, 개인정보 보호를 다룹니다.',
    readTime: '읽는 시간 9분',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Off Grid AI 리뷰',
    targetKeywords: [
      'off grid ai 리뷰',
      'off grid ai 앱',
      'getoffgridai',
      'off grid ai github',
      'off grid ai vs private llm',
      '무료 로컬 ai 앱 아이폰 안드로이드',
      'off grid ai pro 가격',
      '오픈소스 로컬 llm 앱 크로스플랫폼',
    ],
    current_models_mentioned: ['Llama', 'Qwen 3', 'Qwen 3.5', 'Gemma 3', 'Gemma 4', 'Phi-4', 'Mistral', 'Stable Diffusion XL'],
    current_hardware_mentioned: ['iPhone(iOS 17 이상)', 'Android 10 이상', 'Apple Silicon Mac(M1 이상)', 'Windows PC'],
    leadAnswerBlock:
      '**Off Grid AI는 GGUF 형식 언어 모델, Stable Diffusion 이미지 모델, Whisper 음성 텍스트 변환을 iOS, Android, macOS, Windows에서 완전히 기기 내에서 실행하는 무료, 오픈소스, 계정 불필요 앱입니다.** [Wednesday Solutions, Inc.](https://getoffgridai.co)가 개발했으며, App Store, Google Play, GitHub를 합쳐 [누적 18만 건 이상의 다운로드](https://getoffgridai.co)를 보고하고 있고, 모바일 저장소인 [OGAM](https://github.com/off-grid-ai/OGAM)은 MIT 라이선스 하에 3,000개 이상의 GitHub 스타를 보유하고 있습니다 — 이 수치는 이 리뷰가 개발사의 주장을 그대로 받아들이지 않고 GitHub와 개발사 자체 웹사이트에 직접 대조하여 검증한 것입니다. [App Store 등록 정보](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)만 보면 단 26개의 평가로 평균 3.1점에 불과합니다 — 이 리뷰는 더 유리한 크로스플랫폼 수치 뒤에 이를 숨기지 않고, 실제로 약한 이 신호를 그대로 밝힙니다. 선택적인 Off Grid AI Pro 등급(개발사 웹사이트에 따르면 평생 69달러 또는 연 49달러)은 이미 계정, 필수 구독, 클라우드 의존성이 없는 무료 코어 위에 추가 기능을 더합니다.',
    quickAnswerTop: {
      ko: {
        question: 'App Store 평점이 낮은데도 Off Grid AI를 설치할 가치가 있나요?',
        answer:
          '네, 무료이고 오픈소스이며 크로스플랫폼인 로컬 AI 앱을 원하는 대부분의 독자에게는 그렇습니다 — 3.1점·26개 평가라는 App Store 등록 정보는 단독으로는 빈약하지만, 검증된 3,000개 이상의 GitHub 스타를 보유한 오픈소스 코드베이스와 App Store·Google Play·GitHub를 합친 18만 건 이상의 누적 다운로드와 함께 존재하며, 이는 App Store 페이지 하나만으로 보여주는 것보다 더 완전한 그림입니다. 특히 오랜 App Store 평가 이력을 가진 일회성 구매의 비오픈소스 앱을 원한다면 건너뛰세요 — 그 경우에는 Private LLM이 더 적합합니다.',
        bullets: [
          '무료 코어: 계정 불필요, 구독 불필요, 클라우드 불필요 — [getoffgridai.co](https://getoffgridai.co)에서 확인.',
          '크로스플랫폼: iOS 17 이상, Android 10 이상, macOS 14 이상(Apple Silicon), Windows — iOS 전용이 아님.',
          '개발사 웹사이트에 따르면 누적 18만 건 이상의 다운로드와 3,000개 이상의 GitHub 스타(MIT 라이선스 [OGAM](https://github.com/off-grid-ai/OGAM) 저장소), GitHub에서 직접 검증.',
          'App Store 단독 신호는 약함: 이 리뷰 작성 시점 기준 [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)는 26개 평가에 3.1점을 기록.',
          '선택적 Off Grid AI Pro: 개발사 가격 페이지에 따르면 평생 69달러 또는 연 49달러 — 핵심 채팅, 비전, 이미지 생성, 음성 기능에는 필요하지 않음.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Off Grid AI란 무엇인가', anchor: 'what-is-off-grid-ai' },
      { label: '다운로드: 모든 플랫폼 지원', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '가격: 무료 코어 vs. Off Grid AI Pro', anchor: 'pricing' },
      { label: '지원 모델', anchor: 'supported-models' },
      { label: '다운로드 수, GitHub 스타, App Store 평점 격차', anchor: 'traction-and-ratings' },
      { label: '개인정보 보호', anchor: 'privacy' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: 'Off Grid AI 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'Off Grid AI를 사용해야 할 사람', anchor: 'who-should-use' },
      { label: 'Off Grid AI를 사용하지 말아야 할 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Off Grid AI는 Wednesday Solutions, Inc.가 개발한 무료, 오픈소스, 크로스플랫폼(iOS, Android, macOS, Windows) 앱으로, GGUF 언어 모델, Stable Diffusion 이미지 모델, Whisper 음성 텍스트 변환을 완전히 기기 내에서 실행하며, 누적 18만 건 이상의 다운로드와 3,000개 이상의 GitHub 스타를 보유하고 있지만 App Store 평가는 26개에 불과합니다.',
          },
          {
            type: 'plain-terms',
            text: '구독형 AI 챗봇의 무료 오픈소스 대안이라고 생각하면 됩니다 — 휴대폰, 태블릿, Mac, PC에 설치하고 모델을 한 번 다운로드하면, 이후 모든 작업은 자신의 하드웨어에서 실행되며 계정도, 채팅을 위한 인터넷도 필요하지 않습니다.',
          },
        ],
        items: [
          '무료이자 오픈소스: 핵심 앱에는 계정, 구독, 클라우드 의존성이 필요 없음 — [MIT 라이선스](https://github.com/off-grid-ai/OGAM).',
          '크로스플랫폼: iOS, Android, macOS, Windows — 데스크톱 클라이언트(OGAD)는 안정 버전 0.0.43, iOS App Store 등록 정보는 버전 0.0.107.',
          '[getoffgridai.co](https://getoffgridai.co)에 따르면 누적 18만 건 이상의 다운로드와 3,000개 이상의 GitHub 스타, GitHub에서 직접 검증.',
          'App Store 평점은 단독으로 보면 빈약함: 이 리뷰 작성 시점 기준 [iOS 등록 정보](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)는 3.1점·26개 평가 — 이 리뷰는 더 유리한 크로스플랫폼 수치를 대신하는 것이 아니라 나란히 명확하게 밝히는 사실입니다.',
          '모델: Llama, Qwen 3.5, Gemma, Phi-4, Mistral 및 채팅을 위한 모든 GGUF 형식 모델; 이미지 생성을 위한 Stable Diffusion XL; 음성 텍스트 변환을 위한 Whisper.',
          '커뮤니티: Slack 커뮤니티와 활발한 [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) 서브레딧, 개발사에 따르면 600명 이상의 회원 보유.',
          '선택적 Off Grid AI Pro: 개발사 가격 페이지에 따르면 평생 69달러(개발사는 이 가격이 149달러까지 오를 것이라고 밝힘) 또는 연 49달러 — 핵심 채팅, 비전, 이미지, 음성 기능에는 필요하지 않음.',
        ],
      },
      whatIsOffGridAI: {
        id: 'what-is-off-grid-ai',
        title: 'Off Grid AI란 무엇인가',
        content: [
          '**Off Grid AI는 휴대폰, 태블릿, Mac, Windows PC에 오픈 웨이트 AI 모델을 직접 다운로드하여 실행하는 오픈소스 앱으로, 핵심 기능에는 서버 측 구성 요소가 없습니다.** 모델을 다운로드하면 채팅, 이미지 생성, 비전, 음성 전사가 모두 인터넷 연결 없이 동작합니다.',
          '이 앱은 [Wednesday Solutions, Inc.](https://getoffgridai.co)가 개발했으며, 자체 웹사이트에서의 포지셔닝은 "코어에는 계정 불필요, 구독 불필요, 클라우드 없음"입니다. 이 프로젝트는 [off-grid-ai 조직](https://github.com/off-grid-ai) 아래 여러 GitHub 저장소로 나뉘어 있습니다: [OGAM](https://github.com/off-grid-ai/OGAM)(iOS 및 Android, 3,000개 이상의 스타를 보유한 가장 큰 저장소), [OGAD](https://github.com/off-grid-ai/OGAD)(macOS 및 Windows 데스크톱, 현재 안정 버전 0.0.43), 그리고 기업용 거버넌스(OGAC)와 기기 간 로컬 파일/텍스트 공유(OGAS)를 위한 더 작은 보조 저장소들입니다.',
          'Off Grid AI의 iOS/Android 앱은 처음 App Store에 [Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)로 등장했으며, 현재 버전 0.0.107입니다. 이 리뷰 작성 시점 기준 3.1점·26개 평가라는 App Store만의 시각은, 데스크톱 앱, GitHub 릴리스, Google Play 설치를 모두 합산했을 때의 실제 프로젝트 규모를 과소평가합니다: 개발사 자체 홈페이지에 따르면 누적 18만 건 이상의 다운로드와 3,000개 이상의 GitHub 스타를 보유하고 있으며, 이 리뷰에서는 GitHub 스타 수치와 직접 대조하여 검증했습니다.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: '다운로드: 모든 플랫폼 지원',
        itemHeadings: true,
        content: [
          '**Off Grid AI는 네 개 플랫폼에서 실제로 다운로드할 수 있는 앱입니다 — 단일한 "공식" 다운로드는 존재하지 않으며, 각 플랫폼마다 자체적으로 검증된 링크가 있습니다.**',
        ],
        columns: ['플랫폼', '다운로드 위치', '참고'],
        rows: [
          { '플랫폼': '**iOS**', '다운로드 위치': '[App Store 등록 정보](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)', '참고': 'iOS 17 이상 필요. 무료 다운로드, 앱 내 선택적 Pro 구매 가능.' },
          { '플랫폼': '**Android**', '다운로드 위치': '[Google Play 등록 정보](https://play.google.com/store/apps/details?id=ai.offgridmobile)', '참고': 'Android 10 이상 필요. [GitHub 릴리스](https://github.com/off-grid-ai/OGAM/releases/latest)에서 직접 APK도 제공.' },
          { '플랫폼': '**macOS**', '다운로드 위치': '[DMG 다운로드](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest.dmg)', '참고': 'Apple Silicon(M1 이상) 탑재 macOS 14 이상 필요. 데스크톱 안정 버전 0.0.43.' },
          { '플랫폼': '**Windows**', '다운로드 위치': '[설치용 .exe 다운로드](https://github.com/off-grid-ai/OGAD/releases/latest/download/OffGrid-latest-setup.exe)', '참고': '데스크톱 안정 버전 0.0.43, macOS와 동일한 릴리스 채널.' },
        ],
        note: '이 리뷰는 [로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory)에 실린 Off Grid AI 항목의 보완 자료로, 다른 모바일 및 크로스플랫폼 로컬 AI 앱들과 함께 나열되어 있습니다. 위 네 개 링크는 모두 이 리뷰를 위해 직접 확인되었으며 작성 시점에 정상적으로 작동하는 페이지를 보여주었습니다. 버전 번호와 가격은 릴리스마다 변경될 수 있으므로 설치 전 [getoffgridai.co](https://getoffgridai.co)에서 최신 정보를 확인하세요.',
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**Off Grid AI 설정은 네 단계로 이루어지며, 네 플랫폼 어디에서도 계정 생성이 필요하지 않습니다.**',
        ],
        numberedItems: [
          {
            title: '사용 플랫폼에 맞게 앱 설치하기',
            whyItMatters: '위의 App Store, Google Play, 또는 macOS/Windows 직접 다운로드 링크를 사용하세요. 네 가지 모두 무료 다운로드이며, 앱 자체를 설치하는 데 결제 장벽이 없습니다.',
          },
          {
            title: '기기에 맞는 모델 선택하기',
            whyItMatters: 'Off Grid AI는 Llama, Qwen 3.5, Gemma, Phi-4, Mistral 등의 계열에서 GGUF 형식 모델을 지원합니다. 휴대폰과 태블릿은 더 작은 양자화 모델을 처리하며, RAM이 더 많고 전용 GPU 또는 Apple Silicon GPU를 탑재한 Mac이나 Windows PC는 더 큰 모델을 실행할 수 있습니다.',
          },
          {
            title: '모델을 한 번 다운로드하기',
            whyItMatters: '모델 파일 크기는 파라미터 수와 양자화 수준에 따라 약 1GB에서 수십 GB까지 다양합니다. 이 단계에는 인터넷 연결이 필요하지만, 이후의 모든 단계는 필요하지 않습니다.',
          },
          {
            title: '오프라인으로 채팅, 이미지 생성, 음성 전사하기',
            whyItMatters: '모델을 다운로드한 후 비행기 모드를 켜서 오프라인 작동 주장을 직접 확인해 보세요. 텍스트 채팅, Stable Diffusion XL 이미지 생성, Whisper 기반 음성 전사는 모두 네트워크 연결 없이 작동합니다.',
          },
          {
            title: '선택 사항: 커뮤니티 가입 또는 Pro로 업그레이드하기',
            whyItMatters: '개발사는 지원과 기능 요청을 위해 Slack 커뮤니티와 [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) 서브레딧(개발사에 따르면 600명 이상의 회원)을 운영하고 있습니다. Off Grid AI Pro는 핵심 앱 위에 추가되는 별도의 선택적 구매이며, 사용을 위해 필수는 아닙니다.',
          },
        ],
        note: '정확한 모델 목록, 다운로드 크기, 최소 운영체제 버전은 릴리스마다 변경될 수 있습니다 — 데이터 요금제가 제한된 상태에서 큰 다운로드를 진행하기 전에 앱 내 또는 [getoffgridai.co](https://getoffgridai.co)에서 현재 세부 정보를 확인하세요.',
      },
      pricing: {
        id: 'pricing',
        title: '가격: 무료 코어 vs. Off Grid AI Pro',
        itemHeadings: true,
        content: [
          '**Off Grid AI의 핵심 앱은 네 플랫폼 모두에서 무료이며, 계정이나 구독이 필요하지 않습니다.** 선택적인 Off Grid AI Pro 등급은 더 많은 기능을 원하는 독자를 위해 추가 기능을 제공합니다. 이 리뷰는 개발사 웹사이트에서 가격을 직접 확인했습니다.',
        ],
        columns: ['등급', '가격', '포함 내용'],
        rows: [
          { '등급': '**핵심 앱**', '가격': '무료', '포함 내용': '기기 내 채팅, 비전, Stable Diffusion XL 이미지 생성, Whisper 음성 전사 — 계정 불필요, 구독 불필요, 클라우드 불필요.' },
          { '등급': '**Off Grid AI Pro**', '가격': '평생 69달러 또는 연 49달러', '포함 내용': '개발사는 평생 가격이 시간이 지나면서 149달러까지 오를 것이라고 밝혔습니다. Pro 전용 정확한 기능은 구매 전 최신 가격 페이지에서 확인해야 합니다.' },
        ],
        note: '선택적 등급의 가격은 앱 업데이트 사이에 변경될 수 있습니다 — 이 리뷰는 작성 시점에 위 수치를 개발사 웹사이트와 대조하여 확인했지만, 독자는 구매 전 현재 가격을 직접 확인해야 합니다.',
      },
      supportedModels: {
        id: 'supported-models',
        title: '지원 모델',
        content: [
          '**Off Grid AI는 사용자를 단일 큐레이션 목록에 제한하는 대신, 모든 GGUF 형식 언어 모델과 전용 이미지·음성 모델을 지원합니다.**',
          '텍스트 및 채팅용: Llama, Qwen 3 및 Qwen 3.5, Gemma 3 및 Gemma 4, Phi-4, Mistral, 그리고 기타 오픈 GGUF 형식 모델. 이미지 생성용: Stable Diffusion XL 및 Stable Diffusion 계열의 다른 모델. 음성 텍스트 변환용: Whisper 기반 전사 모델. 모델 지원 여부는 앱 버전과 기기의 가용 메모리에 따라 달라지며, 더 큰 모델은 일반적으로 휴대폰이 아닌 Mac이나 Windows PC가 필요합니다.',
        ],
      },
      tractionAndRatings: {
        id: 'traction-and-ratings',
        title: '다운로드 수, GitHub 스타, App Store 평점 격차',
        itemHeadings: true,
        content: [
          '**Off Grid AI의 실적은 어떤 단일 출처를 확인하느냐에 따라 매우 다르게 보입니다 — 이 리뷰는 하나만 선택하는 대신 모든 출처를 확인했습니다.**',
          '개발사 자체 홈페이지인 [getoffgridai.co](https://getoffgridai.co)는 App Store, Google Play, GitHub를 합쳐 누적 18만 건 이상의 다운로드와 "600명 이상의 강력한 커뮤니티"를 밝히고 있습니다. 이 리뷰는 이 주장 중 GitHub 스타 부분을 직접 검증했습니다: [off-grid-ai GitHub 조직](https://github.com/off-grid-ai)은 [OGAM 저장소](https://github.com/off-grid-ai/OGAM)(iOS 및 Android, MIT 라이선스)가 3,000개 이상의 스타를 보유하고, [OGAD 저장소](https://github.com/off-grid-ai/OGAD)(macOS 및 Windows)가 약 100개의 스타를 보유하고 있음을 보여줍니다 — 두 저장소를 합치고 더 작은 보조 저장소들을 더하면 홈페이지의 "3,000개 이상의 GitHub 스타"라는 수치가 설명됩니다.',
          '[App Store 등록 정보](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882)만 보면 훨씬 더 빈약한 이야기를 들려줍니다: 이 리뷰 작성 시점 기준 버전 0.0.107에서 단 26개의 평가로 3.1점입니다. 이는 단독으로 보면 작고 약한 표본으로, App Store 페이지만으로 신뢰할 수 있는 품질 결론을 내리기에는 턱없이 부족합니다. 이 리뷰는 더 유리한 크로스플랫폼 수치 뒤에 이 사실을 숨기는 대신 명확하게 밝힙니다. 정직하게 말하면: Off Grid AI는 검증 가능하고 상당한 규모의 오픈소스 지지 기반과 다운로드 기반을 가지고 있지만, 특히 iOS App Store 리뷰 이력은 빈약하며, App Store 별점 평가에만 의존하는 독자는 전체 그림이 뒷받침하는 것보다 훨씬 더 약한 신호를 보게 될 것입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호',
        content: [
          '**Off Grid AI의 핵심 포지셔닝은 "코어에는 계정 불필요, 구독 불필요, 클라우드 없음"입니다.** 채팅, 비전, 이미지 생성, 음성 전사가 모델 다운로드 후 기기 내에서 실행되므로, 이러한 콘텐츠는 작동하기 위해 기기를 벗어날 필요가 없습니다. 이 앱은 모바일 및 데스크톱 클라이언트 모두 MIT 라이선스 하에 오픈소스화되어 있어, 기기 내 처리 주장을 개발사의 말만 믿는 대신 공개된 소스 코드에서 독립적으로 검증할 수 있습니다 — 이는 폐쇄형 소스 경쟁 앱이 제공하지 않는 선택지입니다.',
          '완전히 감사된 개인정보 보호 검토를 원하는 독자는 설치하는 버전에 해당하는 특정 저장소의 소스 코드를 확인해야 합니다. 오픈소스 소프트웨어의 개인정보 보호 동작은 버전마다 달라질 수 있기 때문입니다.',
        ],
      },
      tradeoffs: {
        id: 'tradeoffs',
        title: '장단점: 이점과 한계',
        itemHeadings: true,
        content: [
          '**Off Grid AI의 가장 큰 강점은 진정으로 무료이면서 오픈소스이자 크로스플랫폼이라는 점을 동시에 갖추고 있다는 것입니다 — 이 세 가지를 모두 갖춘 로컬 AI 앱은 드뭅니다.** 가장 큰 약점은 실제 사용자 기반의 규모를 과소평가하게 만드는 빈약한 App Store 평가 이력입니다.',
        ],
        columns: ['이점', '한계 / 참고'],
        rows: [
          { '이점': '무료 핵심 앱, 계정 불필요, 구독 불필요, 클라우드 의존성 없음.', '한계 / 참고': '일부 추가 기능에는 선택적 Pro 등급(평생 69달러 또는 연 49달러)이 필요.' },
          { '이점': 'iOS, Android, macOS, Windows에서 실행 — 진정한 크로스플랫폼.', '한계 / 참고': '데스크톱(0.0.43)과 모바일(0.0.107) 버전 번호가 다른데, 이는 별개의 코드베이스(OGAD 대 OGAM)이기 때문.' },
          { '이점': 'MIT 라이선스 오픈소스; 3,000개 이상의 GitHub 스타는 독립적으로 검증 가능.', '한계 / 참고': 'App Store 평점이 빈약함: 이 리뷰 작성 시점 기준 단 26개 평가에 평균 3.1점.' },
          { '이점': '채팅, 비전, Stable Diffusion XL 이미지 생성, Whisper 음성을 지원 — 채팅만이 아님.', '한계 / 참고': '더 크고 고품질인 모델은 여전히 휴대폰이 아닌 Mac이나 Windows PC가 필요.' },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Off Grid AI 대 대안 앱',
        content: [
          '**Off Grid AI와 가장 근접한 비교 대상은 일반 챗봇 앱이 아니라 다른 모바일 및 크로스플랫폼 로컬 AI 앱입니다.**',
        ],
        columns: ['앱', '플랫폼', '가격', '핵심 차이'],
        rows: [
          { '앱': '**[Off Grid AI](/ko/power-local-llm/off-grid-ai-review)**', '플랫폼': 'iOS/Android/macOS/Windows', '가격': '무료(Pro 선택)', '핵심 차이': '오픈소스, 4개 플랫폼 지원, App Store 평가 표본이 약함.' },
          { '앱': '**[Private LLM](/ko/power-local-llm/private-llm-review)**', '플랫폼': 'iPhone/iPad/Mac', '가격': '4.99달러 일회성 결제', '핵심 차이': '폐쇄형 소스, Apple 전용, 140개 이상의 큐레이션 모델, OmniQuant 양자화.' },
          { '앱': '**[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)**', '플랫폼': 'iOS/Android', '가격': '무료', '핵심 차이': '오픈소스(MIT), 모바일 전용, 데스크톱이나 이미지 생성 없음.' },
          { '앱': '**[Enclave AI](/ko/power-local-llm/enclave-ai-review)**', '플랫폼': 'iOS/Android', '가격': '무료', '핵심 차이': '모바일 전용 로컬 채팅 앱; 모델 라이브러리를 직접 비교.' },
          { '앱': '**[Loci](/ko/power-local-llm/loci-ai-review-offline-local-ai)**', '플랫폼': 'iPhone/iPad/Android/Mac/Windows', '가격': '무료', '핵심 차이': '큐레이션된 모델 목록과 저마찰 설정 대 Off Grid AI의 개방형 모델 라이브러리.' },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Off Grid AI를 사용해야 할 사람',
        content: [
          '휴대폰, 태블릿, Mac, Windows PC에서 동일하게 작동하는 무료, 오픈소스, 계정 불필요 로컬 AI 앱을 원하는 독자.',
          '개발사의 마케팅 문구만 믿기보다 기기 내 개인정보 보호 주장을 소스 코드에서 직접 확인할 수 있는 것을 중요하게 생각하는 독자.',
          '채팅, 이미지 생성, 음성 전사를 별도의 단일 목적 도구가 아닌 하나의 앱에서 사용하고 싶은 독자.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Off Grid AI를 사용하지 말아야 할 사람',
        content: [
          '설치 전에 크고 확립된 App Store 평가 이력을 보고 싶은 독자 — Off Grid AI의 iOS 등록 정보는 현재 26개의 평가만 보유하고 있습니다.',
          '특히 일회성 구매의 폐쇄형 소스 앱으로 크고 큐레이션된 모델 카탈로그를 원하는 독자 — 그 경우에는 [Private LLM](/ko/power-local-llm/private-llm-review)이 더 적합합니다.',
          '대규모 최첨단 모델을 실행하고 싶은 독자 — 이는 여전히 클라우드 AI나 고성능 워크스테이션이 필요하며, 휴대폰이나 노트북 앱으로는 해결되지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Off Grid AI는 정말로 무료인가요?',
            a: '핵심 앱은 iOS, Android, macOS, Windows에서 무료이며, 기기 내 채팅, 비전, 이미지 생성, 음성 전사에 계정이나 구독이 필요하지 않습니다. 선택적인 Off Grid AI Pro는 개발사 가격 페이지에 따르면 평생 69달러 또는 연 49달러입니다.',
          },
          {
            q: 'Off Grid AI의 App Store 평점이 왜 이렇게 낮은가요?',
            a: '이 리뷰 작성 시점 기준 App Store 등록 정보는 단 26개의 평가로 3.1점을 보여줍니다 — 이는 단독으로는 약한 신호가 되는 작은 표본입니다. 이 수치는 특히 iOS App Store 평가를 반영한 것으로, 개발사가 App Store, Google Play, GitHub를 합쳐 누적 18만 건 이상의 다운로드를 보고하고 모바일 코드베이스가 3,000개 이상의 GitHub 스타를 보유한 Android, macOS, Windows, GitHub 전반에 걸친 앱의 더 넓은 실적은 반영하지 않습니다.',
          },
          {
            q: 'Off Grid AI는 오픈소스인가요?',
            a: '네. 모바일 클라이언트인 OGAM과 데스크톱 클라이언트인 OGAD 모두 [off-grid-ai 조직](https://github.com/off-grid-ai) 아래 GitHub에서 MIT 라이선스로 공개되어 있습니다. 이 리뷰는 개발사의 주장만 믿는 대신 GitHub에서 스타 수와 라이선스를 직접 확인했습니다.',
          },
          {
            q: 'Off Grid AI의 데스크톱과 모바일 버전 번호는 왜 다른가요?',
            a: '이들은 독립적인 릴리스 주기를 가진 별개의 코드베이스입니다. macOS 및 Windows 데스크톱 앱(OGAD)은 안정 버전 0.0.43이고, iOS App Store 등록 정보(OGAM 기반)는 버전 0.0.107입니다. 별개의 저장소로 구축된 크로스플랫폼 프로젝트에서 플랫폼마다 버전 번호가 다른 것은 오류가 아니라 예상되는 일입니다.',
          },
          {
            q: 'Off Grid AI는 어떤 모델을 지원하나요?',
            a: 'Llama, Qwen 3.5, Gemma, Phi-4, Mistral 계열을 포함한 모든 GGUF 형식 언어 모델과, 이미지 생성을 위한 Stable Diffusion XL, 음성 텍스트 변환을 위한 Whisper를 지원합니다.',
          },
          {
            q: 'Off Grid AI에는 가입할 수 있는 커뮤니티가 있나요?',
            a: '개발사는 Slack 커뮤니티와 활발한 [r/off_grid_ai](https://www.reddit.com/r/off_grid_ai/) 서브레딧을 운영하고 있으며, 개발사 웹사이트에 따르면 600명 이상의 회원이 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**Off Grid AI는 무료 크로스플랫폼 로컬 AI 옵션 중 더 나은 앱으로 자리매김할 자격이 있지만, 한 가지 솔직한 유보 사항이 있습니다: iOS App Store 평가 이력이 빈약하다는 점입니다.** 3.1점·26개 평가라는 App Store 등록 정보는 단독으로는 약한 신호이며, 이 리뷰는 그렇지 않은 척하지 않습니다. 하지만 이는 검증된 3,000개 이상의 GitHub 스타를 보유한 오픈소스 코드베이스와, 개발사가 보고한 App Store·Google Play·GitHub를 합친 18만 건 이상의 누적 다운로드와 함께 존재하며, 이는 App Store 페이지 하나만으로 보여주는 것보다 훨씬 더 완전한 그림입니다. 가장 폭넓은 무료, 오픈소스, 4개 플랫폼 옵션을 원하는 독자는 설치하여 직접 판단해야 하며, 투자 전에 크고 이미 확립된 App Store 평가 이력을 원하는 독자는 대신 [Private LLM](/ko/power-local-llm/private-llm-review)을 살펴봐야 합니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        content: [
          '[Off Grid AI 공식 웹사이트](https://getoffgridai.co) — 다운로드 수치, GitHub 스타 주장, 커뮤니티 규모, Pro 가격.',
          '[App Store의 Off Grid AI - Private Local AI](https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882) — iOS 버전 번호, 평점, 평가 수, 가격.',
          '[off-grid-ai GitHub 조직](https://github.com/off-grid-ai) — 저장소 목록과 스타 수, 이 리뷰를 위해 직접 검증.',
          '[OGAM 저장소](https://github.com/off-grid-ai/OGAM)(iOS/Android, MIT 라이선스) — 모바일 스타 수와 라이선스.',
          '[OGAD 저장소](https://github.com/off-grid-ai/OGAD)(macOS/Windows) — 데스크톱 버전 번호와 릴리스.',
          '[Google Play 등록 정보](https://play.google.com/store/apps/details?id=ai.offgridmobile) — Android 다운로드 링크.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        content: [
          '[전체 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 모든 플랫폼에 걸친 더 광범위한 로컬 LLM 도구 디렉터리.',
          '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — 140개 이상의 큐레이션 모델을 갖춘 유료, 폐쇄형 소스, Apple 전용 대안.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 무료, 오픈소스, 모바일 전용 대안.',
          '[Enclave AI 리뷰](/ko/power-local-llm/enclave-ai-review) — 모델 라이브러리를 비교할 수 있는 또 다른 무료 모바일 로컬 AI 앱.',
          '[Loci AI 리뷰](/ko/power-local-llm/loci-ai-review-offline-local-ai) — 큐레이션되고 저마찰인 크로스플랫폼 대안.',
        ],
      },
    },
  },
}
