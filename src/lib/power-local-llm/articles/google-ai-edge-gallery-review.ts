// Google AI Edge Gallery Review: Google's On-Device Gemma App for iPhone
// Slug: google-ai-edge-gallery-review
// Companion to: private-llm-review, pocketpal-ai-review, locally-ai-review, loci-ai-review-offline-local-ai

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-12',
    dateModified: '2026-09-12',
    next_refresh_due: '2027-03-12',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/google-ai-edge-gallery-review-hero-en.webp',
    title: 'Google AI Edge Gallery Review (2026): Gemma 4 On-Device Chat for iPhone',
    seoTitle: 'Google AI Edge Gallery Review 2026: iOS Gemma App',
    intro:
      'Google AI Edge Gallery is a free app from [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) that runs open-source AI models entirely on an iPhone, iPad, or Mac, using Google\'s [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) on-device inference runtime. This review covers the iOS App Store listing specifically (App Store ID 6749645337, version 1.0.10, 4.0 stars from 160+ ratings as of this review) — a companion to [Google AI Edge Gallery\'s entry in the Local LLM Software Directory](/power-local-llm/local-llm-software-directory). The app is the consumer front end for a broader open-source project, [google-ai-edge/gallery on GitHub](https://github.com/google-ai-edge/gallery), which also ships on Android and as a direct APK download — this review does not evaluate the Android build. On iOS it runs Google\'s Gemma model family, including the current Gemma 4 generation, fully offline once a model is downloaded, and lets users import additional models from [Hugging Face](https://huggingface.co/) in LiteRT format. The practical question for a reader comparing on-device iPhone apps is how a free, Google-maintained, officially "experimental Beta" app compares with paid, more polished alternatives like [Private LLM](/power-local-llm/private-llm-review) or free ones like [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
    metaDescription:
      'Google AI Edge Gallery review 2026: free iOS app (App Store ID 6749645337), Gemma 4 on-device chat via LiteRT-LM, 4.0 stars/160+ ratings. Features, privacy, and how it compares to Private LLM and PocketPal AI.',
    twitterDescription:
      'Google AI Edge Gallery review 2026: Google\'s free iOS app for running Gemma 4 fully on-device via LiteRT-LM. Features, the App Store privacy label, and how it stacks up against Private LLM and PocketPal AI.',
    audience:
      'iPhone and iPad users evaluating Google\'s free on-device AI app — covers what Google AI Edge Gallery does, its Gemma 4 model support, the App Store privacy label, how the iOS app relates to the broader open-source Android/GitHub project, and how it compares with paid and free alternatives.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Google AI Edge Gallery review',
    targetKeywords: [
      'google ai edge gallery review',
      'google ai edge gallery ios',
      'google ai edge gallery app',
      'gemma 4 on-device iphone',
      'litert-lm review',
      'google ai edge gallery vs private llm',
      'google ai edge gallery vs pocketpal ai',
      'free on-device ai app iphone',
    ],
    current_models_mentioned: ['Gemma 4 E2B', 'Gemma 4 E4B', 'Gemma 4 26B', 'Gemma 4 31B', 'Gemma 4 12B Unified', 'Gemma 3n'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iOS 17+)', 'Apple Silicon Mac (M1 or later, macOS 14+)', 'Apple Vision Pro (visionOS 1.0+)'],
    leadAnswerBlock:
      '**Google AI Edge Gallery is a free iOS app from [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) that runs Gemma 4 and other open-source models entirely on-device using Google\'s [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) runtime, with no subscription and no per-message cost.** It is the iOS build of the open-source [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) project, which also ships on Android; Google labels the app an "experimental Beta." Once a model is downloaded, chat runs offline, but the App Store privacy label shows Google still collects some device diagnostics and usage data — this is not a zero-telemetry app, even though prompt and chat content stay on-device. Readers who want a more polished, paid, curated alternative should compare it with [Private LLM](/power-local-llm/private-llm-review); readers who want a free, open-source alternative with manual GGUF import should compare it with [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      en: {
        question: 'Is Google AI Edge Gallery worth installing on an iPhone?',
        answer:
          'Yes, if you want free, no-account access to Google\'s current Gemma 4 models running fully on-device, and you are comfortable with a Google-labeled "experimental Beta" app rather than a polished consumer product. It is a strong pick for trying Gemma 4\'s on-device reasoning and multimodal features at no cost. Skip it if you want a more mature, actively curated app experience — [Private LLM](/power-local-llm/private-llm-review) and [PocketPal AI](/power-local-llm/pocketpal-ai-review) are both more established in that respect.',
        bullets: [
          'Free on the Apple App Store; no subscription, no in-app purchases.',
          'Runs Gemma 4 (E2B, E4B, 26B, 31B, 12B Unified) and other open-source models via Google\'s LiteRT-LM runtime.',
          'iPhone, iPad, Mac, and Apple Vision Pro — requires iOS 17.0+ or macOS 14.0+ with Apple Silicon.',
          'Also available as an open-source Android app and direct APK at github.com/google-ai-edge/gallery — this review covers the iOS listing only.',
          'App Store privacy label lists device ID, performance data, and diagnostics as collected — chat content itself stays on-device, but this is not a "zero data" app.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Google AI Edge Gallery Is', anchor: 'what-is-google-ai-edge-gallery' },
      { label: 'Get the App', anchor: 'get-it' },
      { label: 'Models: Gemma 4 and LiteRT-LM', anchor: 'models' },
      { label: 'Platforms: iOS App Store vs. the Open-Source Project', anchor: 'platforms' },
      { label: 'Privacy: What the App Store Label Actually Says', anchor: 'privacy' },
      { label: 'History and Version Milestones', anchor: 'history' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Google AI Edge Gallery vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Google AI Edge Gallery', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Google AI Edge Gallery', anchor: 'who-should-not-use' },
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
            text: 'Google AI Edge Gallery is a free iOS app (App Store ID 6749645337, version 1.0.10) that runs Gemma 4 and other open-source models entirely on-device via Google\'s LiteRT-LM runtime, labeled an "experimental Beta" by Google.',
          },
          {
            type: 'plain-terms',
            text: 'It is Google\'s own showcase app for trying its Gemma models directly on your phone, offline, without an account or subscription — the same underlying open-source project also has an Android version and a downloadable source code repository.',
          },
        ],
        items: [
          'Price: free on the [Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337); no subscription and no in-app purchases.',
          'Developer: Google LLC, current version 1.0.10 (released September 4, 2026), rated 4.0 out of 5 from 160+ ratings.',
          'Platforms (iOS listing): iPhone and iPad on iOS 17.0+, Mac on macOS 14.0+ with Apple M1 or later, and Apple Vision Pro on visionOS 1.0+.',
          'Models: Gemma 4 family (E2B, E4B, 26B, 31B, and the multimodal 12B Unified variant), plus Gemma 3n; custom models can be imported from Hugging Face in LiteRT format.',
          'Open source: the underlying project, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), is Apache 2.0 licensed and also ships on Android and as a direct APK — this review covers the iOS App Store build.',
          'Status: Google\'s own GitHub README describes the project as an "experimental Beta release."',
          'Privacy: the App Store privacy label lists device ID, performance data, and diagnostics as data linked to identity, plus coarse location, product interaction, and crash reports as data not linked to identity — chat prompts run on-device, but this is not a zero-telemetry app.',
        ],
      },
      whatIsGoogleAIEdgeGallery: {
        id: 'what-is-google-ai-edge-gallery',
        title: 'What Google AI Edge Gallery Is',
        content: [
          '**Google AI Edge Gallery is Google\'s own showcase app for running open-source generative AI models directly on a phone, tablet, or Mac, with no server round-trip for inference.** It is built on [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM), Google\'s production inference framework for large language models on edge devices, which itself succeeded the older MediaPipe LLM Inference API used by earlier versions of the project.',
          'The iOS listing reviewed here is [Google AI Edge Gallery on the Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (App Store ID 6749645337), developed and published by Google LLC, currently at version 1.0.10 and rated 4.0 out of 5 stars from more than 160 ratings. It is a free download with no subscription tier.',
          'This same app is one distribution channel of a larger open-source project, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), which Google describes as "the premier destination for running the world\'s most powerful open-source Large Language Models (LLMs) on your mobile device." That project also ships an Android build (via Google Play and direct APK download) and desktop builds. Google\'s own project documentation labels the whole effort an **"experimental Beta release"** rather than a finished consumer product — a distinction this review treats as material, not a formality, given that Google AI Edge Gallery is compared throughout this cluster against apps built specifically as polished consumer products.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'Get the App',
        itemHeadings: true,
        content: [
          '**Google AI Edge Gallery is free to download, with no purchase step.** This review\'s CTA covers the iOS listing specifically; the Android and source-code channels are separate downloads from the same underlying open-source project, not the same install.',
          'This review is a companion to [Google AI Edge Gallery\'s entry in the Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which lists it alongside every other mobile local-AI app covered on this site.',
        ],
        columns: ['Platform', 'Where to get it', 'Notes'],
        rows: [
          {
            'Platform': 'iPhone / iPad',
            'Where to get it': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Notes': 'Free. Requires iOS 17.0 or later. This is the listing this review evaluates.',
          },
          {
            'Platform': 'Mac',
            'Where to get it': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Notes': 'Same App Store listing; requires macOS 14.0+ and Apple M1 or later.',
          },
          {
            'Platform': 'Apple Vision Pro',
            'Where to get it': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Notes': 'Listed as compatible on visionOS 1.0+; not independently hands-on tested for this review.',
          },
          {
            'Platform': 'Android',
            'Where to get it': '[google-ai-edge/gallery on GitHub](https://github.com/google-ai-edge/gallery)',
            'Notes': 'A separate build of the same open-source project, distributed via Google Play or a direct APK — not covered by this review.',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            'Notes': 'Apache 2.0 license; the repository behind every distribution channel above.',
          },
        ],
        note: 'App Store availability, pricing, and version numbers can change without notice. Confirm the current listing on the [App Store page](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) before installing. Verified for this review on 2026-09-12.',
      },
      models: {
        id: 'models',
        title: 'Models: Gemma 4 and LiteRT-LM',
        content: [
          '**Google AI Edge Gallery centers on Google\'s Gemma model family, currently the Gemma 4 generation released April 2, 2026.** Gemma 4 ships in multiple sizes — E2B and E4B (designed for phones), a 26B mixture-of-experts variant, a 31B variant, and a multimodal **Gemma 4 12B Unified** model that handles text, image, and (per Google\'s own documentation) audio input in a single architecture. The app also supports **Gemma 3n**, an earlier Gemma release, which added audio understanding to the on-device stack before Gemma 4 shipped.',
          'Beyond the bundled Gemma models, the app lets users **import their own models from Hugging Face in LiteRT format**, using a model-card URL inside the app\'s model-management screen. Google\'s own project documentation confirms this Hugging Face integration exists for model discovery and download, but does not spell out details like whether a Hugging Face access token is required for gated model repositories — this review treats that as unconfirmed rather than assuming a specific token flow, and readers should check the current in-app instructions before attempting to import a gated model.',
          'Feature-wise, the app packages several distinct modes around these models: **AI Chat with Thinking Mode** (which surfaces the model\'s intermediate reasoning steps), **Ask Image** (multimodal analysis of a photo from the camera or gallery), **Audio Scribe** (on-device speech transcription and translation), **Agent Skills** (external tool access, such as a Wikipedia lookup, layered on top of the base model), and a **model management and benchmarking** screen for comparing download size and on-device performance across models before committing to one.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Platforms: iOS App Store vs. the Open-Source Project',
        itemHeadings: true,
        columns: ['Platform', 'What to expect', 'Important note'],
        rows: [
          {
            'Platform': 'iPhone / iPad',
            'What to expect': 'Requires iOS 17.0 or later, per the App Store listing this review evaluates.',
            'Important note': 'This is the primary platform this review covers; supported chip generation is not broken out separately from the OS requirement on the listing.',
          },
          {
            'Platform': 'Mac',
            'What to expect': 'Requires macOS 14.0 or later with an Apple M1 chip or newer.',
            'Important note': 'Same universal binary and App Store listing as the iPhone/iPad app; Intel Macs are not supported per the listed requirement.',
          },
          {
            'Platform': 'Apple Vision Pro',
            'What to expect': 'Listed as compatible, requiring visionOS 1.0 or later.',
            'Important note': 'This review did not independently test the Vision Pro experience — treat it as App Store-listed compatibility, not a hands-on-verified feature.',
          },
          {
            'Platform': 'Android',
            'What to expect': 'A separate build of the same open-source project is available via Google Play (moved from GitHub-only to open beta on Google Play in a Google announcement dated September 9, 2025) or a direct APK from GitHub.',
            'Important note': 'Not the same install as the iOS App Store app this review covers; do not assume iOS-specific behavior (e.g. the exact App Store privacy label) carries over to the Android build.',
          },
          {
            'Platform': 'The broader OSS project',
            'What to expect': '[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) is Apache 2.0 licensed and spans Android, iOS, and desktop distribution.',
            'Important note': 'Google\'s own documentation labels the whole effort an "experimental Beta release" — this status applies across every platform, not just iOS.',
          },
        ],
        note: 'Platform requirements and beta status can change between updates — confirm current specifics directly on the [App Store listing](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) or the [GitHub repository](https://github.com/google-ai-edge/gallery) before relying on a specific device or OS being supported.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy: What the App Store Label Actually Says',
        content: [
          '**Inference happens on-device once a model is downloaded — chat prompts and model output are not sent to a Google server to generate a response.** That said, this is not the same claim as "the app collects no data," and this review treats those as two separate statements rather than conflating them.',
          'Apple\'s privacy nutrition label for the [Google AI Edge Gallery App Store listing](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) states that **data linked to your identity** includes device ID, performance data, and diagnostics, and that **data not linked to your identity** includes coarse location, product interaction data, and crash reports. This is Apple\'s standard, developer-declared privacy label format, not an independent PromptQuorum audit of the app\'s network traffic.',
          'The practical distinction for a privacy-conscious reader: the content of your conversations and any images or audio you feed the model stay on the device during inference, but Google does collect telemetry-style data (device identifiers, performance/diagnostic data, coarse location, crash reports) about how the app itself is used. Readers who need a stricter "collects nothing at all" posture should compare this against [Private LLM](/power-local-llm/private-llm-review)\'s App Store privacy label, which states no data is collected from that app.',
        ],
        items: [
          '**No account required to chat.** The app does not require sign-in to download and run models.',
          '**Chat content stays on-device during inference.** Prompts and responses are processed locally by LiteRT-LM once a model is downloaded.',
          '**Device ID, performance data, and diagnostics are linked to your identity**, per Apple\'s privacy label for this listing.',
          '**Coarse location, product interaction data, and crash reports are collected but not linked to your identity**, per the same label.',
          '**This review relies on Apple\'s declared privacy label**, not an independent network-traffic audit of the app.',
        ],
      },
      history: {
        id: 'history',
        title: 'History and Version Milestones',
        content: [
          '**Google AI Edge Gallery began as a GitHub-only open-source project before reaching app stores.** The timeline below is sourced from Google\'s own blog posts and the project\'s GitHub repository.',
        ],
        items: [
          '**Initial GitHub release.** The [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) project launched as a source-available Android/desktop showcase for on-device Gemma models, distributed initially as a direct APK download.',
          '**September 9, 2025.** Google\'s own [announcement blog post](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) confirmed the project moved from GitHub-only distribution to an open beta on the Google Play Store, and added audio support (speech-to-text and speech-to-translated-text) via Gemma 3n through the MediaPipe LLM Inference API. Google\'s own post states the project reached 500,000 APK downloads within two months of the GitHub launch, and described a future plan to "bring the app to iOS users."',
          '**April 2, 2026.** Google DeepMind released **Gemma 4** under the Apache 2.0 license, in E2B, E4B, 26B, and 31B sizes, with a later multimodal **Gemma 4 12B Unified** variant following on June 3, 2026.',
          '**iOS App Store availability.** Google AI Edge Gallery reached the App Store as [Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (App Store ID 6749645337), fulfilling the iOS plan announced in the September 2025 blog post; independent coverage described the app climbing into the top downloaded productivity apps on the App Store around the time of the Gemma 4 launch.',
          '**Version 1.0.10 (September 4, 2026).** The current release as of this review, adding what its release notes describe as "global translation and localization support across 100 different countries" plus bug fixes.',
        ],
        note: 'Version history and dates are sourced from Google\'s own developer blog and the project\'s GitHub repository. Confirm the current version and release notes directly in the App Store before relying on a specific feature being present.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free, no account, no subscription',
            'What it means in real use': 'Install from the App Store and start downloading models with no purchase step.',
            'Limitation / caveat': 'Google labels the project an "experimental Beta" — expect rougher edges than a mature paid app.',
          },
          {
            'Benefit': 'Access to Gemma 4 on launch day',
            'What it means in real use': 'One of the fastest ways to try Google\'s current flagship open-weight model family directly on an iPhone.',
            'Limitation / caveat': 'Larger Gemma 4 sizes (26B, 31B) may exceed what typical iPhone hardware can comfortably run; the app does not publish a fixed per-model RAM requirement.',
          },
          {
            'Benefit': 'Custom Hugging Face model import',
            'What it means in real use': 'Not limited to Google\'s bundled Gemma models — LiteRT-format models from Hugging Face can be loaded.',
            'Limitation / caveat': 'Requirements for gated Hugging Face repositories (such as an access token) are not clearly documented; verify current in-app instructions before attempting a gated import.',
          },
          {
            'Benefit': 'On-device inference (LiteRT-LM)',
            'What it means in real use': 'Chat prompts and responses are processed locally once a model is downloaded, with no server round-trip for generation.',
            'Limitation / caveat': 'The App Store privacy label still lists device ID, performance data, diagnostics, coarse location, and crash reports as collected — this is not a zero-telemetry app.',
          },
          {
            'Benefit': 'Multimodal features (Ask Image, Audio Scribe)',
            'What it means in real use': 'Analyze photos or transcribe speech on-device without a separate app.',
            'Limitation / caveat': 'Multimodal support depends on which Gemma model is loaded (audio is supported on Gemma 3n and specific Gemma 4 sizes, not every model in the library).',
          },
          {
            'Benefit': 'Open-source and cross-platform',
            'What it means in real use': 'The same underlying project also runs on Android, with source available on GitHub under Apache 2.0.',
            'Limitation / caveat': 'This review evaluates the iOS App Store build only; behavior, privacy label, and feature parity on Android are not assumed to be identical.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Google AI Edge Gallery vs. Alternatives',
        columns: ['App', 'Platforms', 'Price', 'Model flexibility', 'Key difference'],
        rows: [
          {
            'App': 'Google AI Edge Gallery',
            'Platforms': 'iPhone/iPad/Mac/Vision Pro (also Android, separately)',
            'Price': 'Free',
            'Model flexibility': 'Gemma 4 family bundled; custom Hugging Face LiteRT models importable',
            'Key difference': 'Google-built, labeled "experimental Beta," fastest path to Gemma 4 on iPhone',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Price': '$4.99 one-time purchase',
            'Model flexibility': '140+ curated models; OmniQuant/GPTQ quantization',
            'Key difference': 'Paid, closed-source, more polished and actively maintained as a consumer product',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iPhone/iPad, with some Android support',
            'Price': 'Free, open source',
            'Model flexibility': 'Any GGUF file the user sources from Hugging Face or elsewhere',
            'Key difference': 'Free and fully open source like Google AI Edge Gallery, but not tied to Gemma or LiteRT-LM',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Platforms': 'iPhone/iPad/Mac',
            'Price': 'Free',
            'Model flexibility': 'Runs Llama, Gemma, Qwen, and DeepSeek offline, built on Apple MLX',
            'Key difference': 'Free like Google AI Edge Gallery, but built on Apple\'s own MLX framework instead of LiteRT-LM',
          },
          {
            'App': '[Loci AI](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Platforms': 'iPhone/iPad/Android/Mac/Windows',
            'Price': 'See current listing',
            'Model flexibility': 'Curated ~10-model library; Gemma 4 E2B/E4B among supported models',
            'Key difference': 'Broader cross-platform reach than Google AI Edge Gallery\'s iOS build, with a smaller curated model list',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently — verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Google AI Edge Gallery',
        items: [
          '**Readers who want to try Gemma 4 on an iPhone at no cost.** It is one of the fastest ways to run Google\'s current flagship open-weight model family fully on-device.',
          '**Developers evaluating LiteRT-LM.** The app doubles as a hands-on demo of Google\'s on-device inference runtime, useful before integrating LiteRT-LM into your own project.',
          '**Readers who want to experiment with custom Hugging Face models in LiteRT format** without setting up a full development environment first.',
          '**Readers comfortable with an "experimental Beta" label**, who prioritize trying the newest Gemma releases over a fully polished, long-established consumer app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Google AI Edge Gallery',
        items: [
          '**Readers who want a mature, actively curated consumer product.** [Private LLM](/power-local-llm/private-llm-review) and [PocketPal AI](/power-local-llm/pocketpal-ai-review) both have a longer track record as maintained, non-beta apps.',
          '**Readers who want the strictest possible privacy label.** The App Store listing shows device ID, performance data, diagnostics, coarse location, and crash reports as collected — [Private LLM](/power-local-llm/private-llm-review)\'s label states no data collected at all.',
          '**Readers who need Android support in the same install.** The Android build is a separate download from [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), not the iOS App Store app this review covers.',
          '**Readers who want to run the largest Gemma 4 sizes on a phone.** The 26B and 31B variants are unlikely to run comfortably within typical iPhone memory; the app does not publish a fixed per-model RAM floor to confirm this either way.',
          '**Teams wanting a centrally managed, multi-user deployment.** This is a single-user, single-device consumer app with no admin console or shared license management.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Google AI Edge Gallery free?',
            a: 'Yes. The [App Store listing](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) is free to download, with no subscription and no in-app purchases, verified for this review on 2026-09-12.',
          },
          {
            q: 'What models does Google AI Edge Gallery run?',
            a: 'It runs Google\'s Gemma model family, currently the Gemma 4 generation (E2B, E4B, 26B, 31B, and the multimodal 12B Unified variant, released between April and June 2026), plus the earlier Gemma 3n. Users can also import custom models from Hugging Face in LiteRT format.',
          },
          {
            q: 'Does Google AI Edge Gallery work on Android too?',
            a: 'Yes, but as a separate distribution. The underlying open-source project, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), ships an Android build via Google Play and direct APK download, in addition to the iOS App Store listing this review covers.',
          },
          {
            q: 'Does Google AI Edge Gallery collect my data?',
            a: 'Chat prompts and model responses are processed on-device once a model is downloaded, but Apple\'s privacy label for the iOS listing states that device ID, performance data, and diagnostics are linked to your identity, and coarse location, product interaction data, and crash reports are collected without being linked to your identity. This is not a zero-data app, even though inference itself runs locally.',
          },
          {
            q: 'What is LiteRT-LM?',
            a: '[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) is Google\'s production-focused, open-source inference framework for running large language models on edge devices like phones. It succeeded the earlier MediaPipe LLM Inference API used in older versions of the Gallery app.',
          },
          {
            q: 'Can I import my own model into Google AI Edge Gallery?',
            a: 'Yes — Google\'s own documentation confirms the app supports loading custom models from Hugging Face in LiteRT format via a model-card URL. Details on requirements for gated Hugging Face repositories, such as whether an access token is needed, are not clearly documented; check the current in-app instructions before attempting this.',
          },
          {
            q: 'Is Google AI Edge Gallery a finished product or a beta?',
            a: 'Google\'s own project documentation on GitHub describes it as an "experimental Beta release" and asks for user feedback — this status applies to the underlying project across iOS, Android, and desktop, not only to one platform.',
          },
          {
            q: 'What devices does the iOS version support?',
            a: 'Per the App Store listing: iPhone and iPad on iOS 17.0 or later, Mac on macOS 14.0 or later with an Apple M1 chip or newer, and Apple Vision Pro on visionOS 1.0 or later.',
          },
          {
            q: 'How does Google AI Edge Gallery compare to Private LLM?',
            a: 'Google AI Edge Gallery is free, Google-built, labeled an experimental beta, and centers on Gemma models via LiteRT-LM. [Private LLM](/power-local-llm/private-llm-review) is a $4.99 one-time purchase, closed-source, and offers a larger curated library of 140+ models with a longer track record as a maintained consumer app. Choose Google AI Edge Gallery to try Gemma 4 at no cost; choose Private LLM for a more polished, actively maintained paid experience.',
          },
          {
            q: 'Does Google AI Edge Gallery support audio and image input?',
            a: 'Yes, depending on the model loaded. Ask Image provides multimodal photo analysis, and Audio Scribe provides on-device speech transcription and translation; audio support in the underlying Gemma models started with Gemma 3n and continues in specific Gemma 4 sizes, including the 12B Unified variant.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Google AI Edge Gallery earns a place in this cluster as the fastest, free way to run Google\'s own Gemma 4 models entirely on an iPhone, backed by Google\'s production LiteRT-LM runtime rather than a third-party wrapper around an open-source model. Its Hugging Face import support and multimodal features (Ask Image, Audio Scribe, Thinking Mode) go beyond a bare-bones chat client. The trade-offs are equally real: Google itself labels the project an "experimental Beta," the iOS App Store privacy label shows more data collection than the strictest privacy-focused competitors, and the app has a shorter track record as a maintained consumer product than apps like Private LLM. Readers who specifically want the newest Gemma models at no cost, or who are evaluating LiteRT-LM as developers, should install it. Readers who want the most polished, longest-running, or most privacy-restrictive mobile local-AI app should compare it first against [Private LLM](/power-local-llm/private-llm-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Google AI Edge Gallery on the App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) — price, platform requirements, privacy label, ratings, and version history.',
          '[google-ai-edge/gallery on GitHub](https://github.com/google-ai-edge/gallery) — project overview, supported platforms, Hugging Face import, license, and beta status.',
          '[LiteRT-LM on GitHub](https://github.com/google-ai-edge/LiteRT-LM) — the on-device inference runtime the app is built on.',
          '[Google AI Edge Gallery announcement blog post](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — September 9, 2025 announcement of audio support and Google Play availability.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid, more polished alternative with a larger curated model library.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source alternative with manual GGUF import.',
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a free Apple MLX-based alternative supporting similar model families.',
          '[Loci AI Review](/power-local-llm/loci-ai-review-offline-local-ai) — a cross-platform on-device app also supporting Gemma 4.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms, including Google AI Edge Gallery\'s entry.',
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
    heroImage: '/images/google-ai-edge-gallery-review-hero-de.webp',
    title: 'Google AI Edge Gallery im Test (2026): Gemma 4 On-Device-Chat fürs iPhone',
    seoTitle: 'Google AI Edge Gallery Test 2026: iOS-Gemma-App',
    intro:
      'Google AI Edge Gallery ist eine kostenlose App von [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337), die Open-Source-KI-Modelle vollständig auf dem iPhone, iPad oder Mac ausführt — mithilfe von Googles [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)-Laufzeitumgebung für On-Device-Inferenz. Dieser Test behandelt speziell den iOS-App-Store-Eintrag (App-Store-ID 6749645337, Version 1.0.10, 4,0 von 5 Sternen bei über 160 Bewertungen zum Zeitpunkt dieses Tests) — als Begleitartikel zu [Google AI Edge Gallerys Eintrag im lokalen KI-Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory). Die App ist die Nutzerfront eines größeren Open-Source-Projekts, [google-ai-edge/gallery auf GitHub](https://github.com/google-ai-edge/gallery), das auch für Android und als direkter APK-Download erhältlich ist — diese Bewertung prüft die Android-Version nicht. Auf iOS führt sie Googles Gemma-Modellfamilie aus, einschließlich der aktuellen Gemma-4-Generation, vollständig offline nach dem Herunterladen eines Modells, und erlaubt den Import zusätzlicher Modelle von [Hugging Face](https://huggingface.co/) im LiteRT-Format. Die praktische Frage für Leser, die On-Device-iPhone-Apps vergleichen, ist, wie eine kostenlose, von Google gepflegte, offiziell als „experimentelle Beta" bezeichnete App gegenüber kostenpflichtigen, ausgereifteren Alternativen wie [Private LLM](/de/power-local-llm/private-llm-review) oder kostenlosen wie [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) abschneidet.',
    metaDescription:
      'Google AI Edge Gallery Test 2026: kostenlose iOS-App (App-Store-ID 6749645337), Gemma-4-Chat auf dem Gerät via LiteRT-LM, 4,0 Sterne/160+ Bewertungen. Funktionen, Datenschutz und Vergleich mit Private LLM und PocketPal AI.',
    twitterDescription:
      'Google AI Edge Gallery Test 2026: Googles kostenlose iOS-App für Gemma 4 vollständig auf dem Gerät via LiteRT-LM. Funktionen, App-Store-Datenschutzlabel und Vergleich mit Private LLM und PocketPal AI.',
    audience:
      'iPhone- und iPad-Nutzer, die Googles kostenlose On-Device-KI-App bewerten möchten — behandelt Funktionen, Gemma-4-Unterstützung, das App-Store-Datenschutzlabel, das Verhältnis der iOS-App zum größeren Open-Source-Android/GitHub-Projekt und den Vergleich mit kostenpflichtigen und kostenlosen Alternativen.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Google AI Edge Gallery review',
    targetKeywords: [
      'google ai edge gallery test',
      'google ai edge gallery ios',
      'google ai edge gallery app',
      'gemma 4 on-device iphone',
      'litert-lm test',
      'google ai edge gallery vs private llm',
      'google ai edge gallery vs pocketpal ai',
      'kostenlose on-device-ki-app iphone',
    ],
    current_models_mentioned: ['Gemma 4 E2B', 'Gemma 4 E4B', 'Gemma 4 26B', 'Gemma 4 31B', 'Gemma 4 12B Unified', 'Gemma 3n'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iOS 17+)', 'Apple Silicon Mac (M1 oder neuer, macOS 14+)', 'Apple Vision Pro (visionOS 1.0+)'],
    leadAnswerBlock:
      '**Google AI Edge Gallery ist eine kostenlose iOS-App von [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337), die Gemma 4 und andere Open-Source-Modelle vollständig auf dem Gerät über Googles [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)-Laufzeitumgebung ausführt, ohne Abonnement und ohne Kosten pro Nachricht.** Es handelt sich um die iOS-Version des Open-Source-Projekts [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), das auch für Android erscheint; Google selbst bezeichnet die App als „experimentelle Beta". Sobald ein Modell heruntergeladen ist, läuft der Chat offline, aber das App-Store-Datenschutzlabel zeigt, dass Google weiterhin einige Gerätediagnosen und Nutzungsdaten erfasst — dies ist keine App ohne jegliche Telemetrie, auch wenn Prompt- und Chat-Inhalte auf dem Gerät verbleiben. Leser, die eine ausgereiftere, kostenpflichtige, kuratierte Alternative wünschen, sollten sie mit [Private LLM](/de/power-local-llm/private-llm-review) vergleichen; Leser, die eine kostenlose, quelloffene Alternative mit manuellem GGUF-Import wünschen, mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich die Installation von Google AI Edge Gallery auf einem iPhone?',
        answer:
          'Ja, wenn Sie kostenlosen, kontofreien Zugang zu Googles aktuellen Gemma-4-Modellen vollständig auf dem Gerät wünschen und mit einer von Google selbst als „experimentelle Beta" bezeichneten App statt einem ausgereiften Verbraucherprodukt einverstanden sind. Sie ist eine gute Wahl, um Gemma 4s On-Device-Reasoning und multimodale Funktionen kostenlos auszuprobieren. Überspringen Sie sie, wenn Sie eine ausgereiftere, aktiv kuratierte App-Erfahrung wünschen — [Private LLM](/de/power-local-llm/private-llm-review) und [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) sind in dieser Hinsicht beide etablierter.',
        bullets: [
          'Kostenlos im Apple App Store; kein Abonnement, keine In-App-Käufe.',
          'Führt Gemma 4 (E2B, E4B, 26B, 31B, 12B Unified) und andere Open-Source-Modelle über Googles LiteRT-LM-Laufzeitumgebung aus.',
          'iPhone, iPad, Mac und Apple Vision Pro — erfordert iOS 17.0+ oder macOS 14.0+ mit Apple Silicon.',
          'Auch als Open-Source-Android-App und direkte APK auf github.com/google-ai-edge/gallery verfügbar — dieser Test behandelt nur die iOS-Version.',
          'App-Store-Datenschutzlabel nennt Geräte-ID, Leistungsdaten und Diagnosen als erfasst — Chat-Inhalte selbst bleiben auf dem Gerät, aber dies ist keine „Null-Daten"-App.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Google AI Edge Gallery ist', anchor: 'what-is-google-ai-edge-gallery' },
      { label: 'App holen', anchor: 'get-it' },
      { label: 'Modelle: Gemma 4 und LiteRT-LM', anchor: 'models' },
      { label: 'Plattformen: iOS App Store vs. Open-Source-Projekt', anchor: 'platforms' },
      { label: 'Datenschutz: Was das App-Store-Label wirklich sagt', anchor: 'privacy' },
      { label: 'Geschichte und Versionsmeilensteine', anchor: 'history' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Google AI Edge Gallery im Vergleich', anchor: 'vs-alternatives' },
      { label: 'Für wen sich Google AI Edge Gallery eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich Google AI Edge Gallery nicht eignet', anchor: 'who-should-not-use' },
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
            text: 'Google AI Edge Gallery ist eine kostenlose iOS-App (App-Store-ID 6749645337, Version 1.0.10), die Gemma 4 und andere Open-Source-Modelle vollständig auf dem Gerät über Googles LiteRT-LM-Laufzeitumgebung ausführt und von Google selbst als „experimentelle Beta" bezeichnet wird.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist Googles eigene Showcase-App, um die eigenen Gemma-Modelle direkt auf dem Handy auszuprobieren, offline, ohne Konto oder Abonnement — dasselbe zugrunde liegende Open-Source-Projekt hat auch eine Android-Version und ein herunterladbares Quellcode-Repository.',
          },
        ],
        items: [
          'Preis: kostenlos im [Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337); kein Abonnement, keine In-App-Käufe.',
          'Entwickler: Google LLC, aktuelle Version 1.0.10 (veröffentlicht 4. September 2026), bewertet mit 4,0 von 5 bei über 160 Bewertungen.',
          'Plattformen (iOS-Eintrag): iPhone und iPad ab iOS 17.0, Mac ab macOS 14.0 mit Apple M1 oder neuer, Apple Vision Pro ab visionOS 1.0.',
          'Modelle: Gemma-4-Familie (E2B, E4B, 26B, 31B und die multimodale 12B-Unified-Variante) sowie Gemma 3n; eigene Modelle können im LiteRT-Format von Hugging Face importiert werden.',
          'Open Source: das zugrunde liegende Projekt [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) steht unter Apache-2.0-Lizenz und erscheint auch für Android sowie als direkte APK — dieser Test behandelt die iOS-App-Store-Version.',
          'Status: Googles eigenes GitHub-README beschreibt das Projekt als „experimentelle Beta-Version".',
          'Datenschutz: Das App-Store-Datenschutzlabel nennt Geräte-ID, Leistungsdaten und Diagnosen als mit der Identität verknüpfte Daten sowie ungefähren Standort, Produktinteraktionsdaten und Absturzberichte als nicht verknüpfte Daten — Chat-Eingaben laufen auf dem Gerät, aber dies ist keine telemetriefreie App.',
        ],
      },
      whatIsGoogleAIEdgeGallery: {
        id: 'what-is-google-ai-edge-gallery',
        title: 'Was Google AI Edge Gallery ist',
        content: [
          '**Google AI Edge Gallery ist Googles eigene Showcase-App, um Open-Source-KI-Modelle direkt auf einem Smartphone, Tablet oder Mac auszuführen, ohne dass die Inferenz auf einen Server geht.** Sie basiert auf [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM), Googles produktionsreifer Inferenz-Laufzeitumgebung für große Sprachmodelle auf Edge-Geräten, die selbst die ältere MediaPipe-LLM-Inference-API früherer Projektversionen ablöste.',
          'Die hier getestete iOS-Version ist [Google AI Edge Gallery im Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (App-Store-ID 6749645337), entwickelt und veröffentlicht von Google LLC, derzeit Version 1.0.10, bewertet mit 4,0 von 5 Sternen bei über 160 Bewertungen. Der Download ist kostenlos, es gibt keine Abo-Stufe.',
          'Dieselbe App ist ein Vertriebskanal eines größeren Open-Source-Projekts, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), das Google als „das führende Ziel, um die leistungsstärksten Open-Source-Sprachmodelle der Welt auf dem eigenen Mobilgerät auszuführen" beschreibt. Das Projekt bietet auch eine Android-Version (über Google Play und direkten APK-Download) sowie Desktop-Builds. Googles eigene Projektdokumentation bezeichnet das gesamte Vorhaben als **„experimentelle Beta-Version"** und nicht als fertiges Verbraucherprodukt — eine Unterscheidung, die dieser Test als wesentlich und nicht als Formalität behandelt, da Google AI Edge Gallery in diesem Cluster durchgehend mit Apps verglichen wird, die gezielt als ausgereifte Verbraucherprodukte gebaut wurden.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'App holen',
        itemHeadings: true,
        content: [
          '**Google AI Edge Gallery ist kostenlos herunterladbar, ohne Kaufschritt.** Die CTA dieses Tests behandelt speziell die iOS-Version; die Android- und Quellcode-Kanäle sind separate Downloads desselben zugrunde liegenden Open-Source-Projekts, nicht dieselbe Installation.',
          'Dieser Test ist ein Begleitartikel zu [Google AI Edge Gallerys Eintrag im lokalen KI-Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory), das die App neben jeder anderen auf dieser Seite behandelten mobilen lokalen KI-App listet.',
        ],
        columns: ['Plattform', 'Wo man sie bekommt', 'Hinweise'],
        rows: [
          {
            'Plattform': 'iPhone / iPad',
            'Wo man sie bekommt': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Hinweise': 'Kostenlos. Erfordert iOS 17.0 oder neuer. Dies ist die in diesem Test bewertete Version.',
          },
          {
            'Plattform': 'Mac',
            'Wo man sie bekommt': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Hinweise': 'Derselbe App-Store-Eintrag; erfordert macOS 14.0+ und Apple M1 oder neuer.',
          },
          {
            'Plattform': 'Apple Vision Pro',
            'Wo man sie bekommt': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Hinweise': 'Als kompatibel mit visionOS 1.0+ gelistet; für diesen Test nicht eigenständig getestet.',
          },
          {
            'Plattform': 'Android',
            'Wo man sie bekommt': '[google-ai-edge/gallery auf GitHub](https://github.com/google-ai-edge/gallery)',
            'Hinweise': 'Eine separate Version desselben Open-Source-Projekts über Google Play oder direkte APK — nicht Teil dieses Tests.',
          },
          {
            'Plattform': 'Quellcode',
            'Wo man sie bekommt': '[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            'Hinweise': 'Apache-2.0-Lizenz; das Repository hinter allen oben genannten Vertriebskanälen.',
          },
        ],
        note: 'Verfügbarkeit, Preise und Versionsnummern im App Store können sich ohne Vorankündigung ändern. Prüfen Sie den aktuellen Eintrag auf der [App-Store-Seite](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337), bevor Sie installieren. Verifiziert für diesen Test am 2026-09-12.',
      },
      models: {
        id: 'models',
        title: 'Modelle: Gemma 4 und LiteRT-LM',
        content: [
          '**Google AI Edge Gallery konzentriert sich auf Googles Gemma-Modellfamilie, aktuell die am 2. April 2026 veröffentlichte Gemma-4-Generation.** Gemma 4 erscheint in mehreren Größen — E2B und E4B (für Smartphones konzipiert), eine 26B-Mixture-of-Experts-Variante, eine 31B-Variante sowie ein multimodales **Gemma 4 12B Unified**-Modell, das laut Googles eigener Dokumentation Text-, Bild- und Audioeingaben in einer einzigen Architektur verarbeitet. Die App unterstützt auch **Gemma 3n**, eine frühere Gemma-Version, die dem On-Device-Stack Audioverständnis hinzufügte, bevor Gemma 4 erschien.',
          'Über die mitgelieferten Gemma-Modelle hinaus können Nutzer **eigene Modelle von Hugging Face im LiteRT-Format importieren**, über eine Modellkarten-URL im Modellverwaltungsbildschirm der App. Googles eigene Projektdokumentation bestätigt diese Hugging-Face-Integration für Modellsuche und -download, macht aber keine Angaben zu Details wie einem eventuell erforderlichen Hugging-Face-Zugangstoken für gesperrte Modell-Repositories — dieser Test behandelt das als unbestätigt statt einen bestimmten Token-Ablauf anzunehmen; Leser sollten die aktuellen App-Anleitungen prüfen, bevor sie ein gesperrtes Modell importieren.',
          'Funktional bündelt die App mehrere Modi rund um diese Modelle: **AI Chat mit Thinking Mode** (zeigt die Zwischenschritte des Modell-Reasonings), **Ask Image** (multimodale Analyse eines Fotos aus Kamera oder Galerie), **Audio Scribe** (On-Device-Sprachtranskription und -übersetzung), **Agent Skills** (externer Werkzeugzugriff, etwa Wikipedia-Nachschlagen, oberhalb des Basismodells) und ein Bildschirm für **Modellverwaltung und Benchmarking**, um Downloadgröße und On-Device-Leistung verschiedener Modelle vor der Wahl zu vergleichen.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plattformen: iOS App Store vs. Open-Source-Projekt',
        itemHeadings: true,
        columns: ['Plattform', 'Was Sie erwartet', 'Wichtiger Hinweis'],
        rows: [
          {
            'Plattform': 'iPhone / iPad',
            'Was Sie erwartet': 'Erfordert iOS 17.0 oder neuer, laut dem in diesem Test bewerteten App-Store-Eintrag.',
            'Wichtiger Hinweis': 'Dies ist die primäre Plattform dieses Tests; unterstützte Chip-Generationen werden im Eintrag nicht separat von der OS-Anforderung aufgeführt.',
          },
          {
            'Plattform': 'Mac',
            'Was Sie erwartet': 'Erfordert macOS 14.0 oder neuer mit einem Apple-M1-Chip oder neuer.',
            'Wichtiger Hinweis': 'Derselbe universelle Binärcode und App-Store-Eintrag wie die iPhone/iPad-App; Intel-Macs werden laut Anforderung nicht unterstützt.',
          },
          {
            'Plattform': 'Apple Vision Pro',
            'Was Sie erwartet': 'Als kompatibel gelistet, erfordert visionOS 1.0 oder neuer.',
            'Wichtiger Hinweis': 'Dieser Test hat die Vision-Pro-Erfahrung nicht eigenständig getestet — als App-Store-gelistete Kompatibilität behandeln, nicht als praktisch verifiziertes Feature.',
          },
          {
            'Plattform': 'Android',
            'Was Sie erwartet': 'Eine separate Version desselben Open-Source-Projekts ist über Google Play verfügbar (laut Google-Ankündigung vom 9. September 2025 von reinem GitHub-Vertrieb zu Open Beta auf Google Play gewechselt) oder als direkte APK von GitHub.',
            'Wichtiger Hinweis': 'Nicht dieselbe Installation wie die iOS-App-Store-App dieses Tests; iOS-spezifisches Verhalten (z. B. das genaue App-Store-Datenschutzlabel) ist nicht automatisch auf die Android-Version übertragbar.',
          },
          {
            'Plattform': 'Das größere OSS-Projekt',
            'Was Sie erwartet': '[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) steht unter Apache-2.0-Lizenz und umfasst Android-, iOS- und Desktop-Vertrieb.',
            'Wichtiger Hinweis': 'Googles eigene Dokumentation bezeichnet das gesamte Vorhaben als „experimentelle Beta-Version" — dieser Status gilt für alle Plattformen, nicht nur iOS.',
          },
        ],
        note: 'Plattformanforderungen und Beta-Status können sich zwischen Updates ändern — prüfen Sie aktuelle Details direkt im [App-Store-Eintrag](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) oder im [GitHub-Repository](https://github.com/google-ai-edge/gallery), bevor Sie sich auf ein bestimmtes Gerät oder Betriebssystem verlassen.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz: Was das App-Store-Label wirklich sagt',
        content: [
          '**Die Inferenz erfolgt auf dem Gerät, sobald ein Modell heruntergeladen wurde — Chat-Eingaben und Modellausgaben werden nicht zur Antwortgenerierung an einen Google-Server gesendet.** Das ist jedoch nicht dieselbe Aussage wie „die App erfasst keine Daten", und dieser Test behandelt diese beiden Aussagen getrennt statt sie zu vermischen.',
          'Apples Datenschutz-Kennzeichnung für den [Google AI Edge Gallery App-Store-Eintrag](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) gibt an, dass **mit Ihrer Identität verknüpfte Daten** Geräte-ID, Leistungsdaten und Diagnosen umfassen und **nicht mit Ihrer Identität verknüpfte Daten** ungefähren Standort, Produktinteraktionsdaten und Absturzberichte umfassen. Dies ist Apples standardmäßiges, vom Entwickler selbst deklariertes Datenschutzlabel-Format, kein unabhängiges Audit des Netzwerkverkehrs der App durch PromptQuorum.',
          'Der praktische Unterschied für datenschutzbewusste Leser: Der Inhalt Ihrer Gespräche sowie Bilder oder Audio, die Sie dem Modell geben, verbleiben während der Inferenz auf dem Gerät, aber Google erfasst weiterhin telemetrieartige Daten (Gerätekennungen, Leistungs-/Diagnosedaten, ungefährer Standort, Absturzberichte) darüber, wie die App selbst genutzt wird. Leser, die eine strengere „erfasst überhaupt nichts"-Haltung benötigen, sollten dies mit [Private LLMs](/de/power-local-llm/private-llm-review) App-Store-Datenschutzlabel vergleichen, das angibt, dass keine Daten von dieser App erfasst werden.',
        ],
        items: [
          '**Kein Konto zum Chatten erforderlich.** Die App erfordert keine Anmeldung, um Modelle herunterzuladen und auszuführen.',
          '**Chat-Inhalte bleiben während der Inferenz auf dem Gerät.** Eingaben und Antworten werden lokal von LiteRT-LM verarbeitet, sobald ein Modell heruntergeladen ist.',
          '**Geräte-ID, Leistungsdaten und Diagnosen sind mit Ihrer Identität verknüpft**, laut Apples Datenschutzlabel für diesen Eintrag.',
          '**Ungefährer Standort, Produktinteraktionsdaten und Absturzberichte werden erfasst, aber nicht mit Ihrer Identität verknüpft**, laut demselben Label.',
          '**Dieser Test stützt sich auf Apples deklariertes Datenschutzlabel**, nicht auf ein unabhängiges Netzwerkverkehrs-Audit der App.',
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte und Versionsmeilensteine',
        content: [
          '**Google AI Edge Gallery begann als reines GitHub-Open-Source-Projekt, bevor es in die App Stores kam.** Die folgende Zeitleiste stammt aus Googles eigenen Blogbeiträgen und dem GitHub-Repository des Projekts.',
        ],
        items: [
          '**Erste GitHub-Veröffentlichung.** Das Projekt [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) startete als quelloffenes Android/Desktop-Showcase für On-Device-Gemma-Modelle, zunächst als direkter APK-Download verteilt.',
          '**9. September 2025.** Googles eigener [Ankündigungs-Blogbeitrag](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) bestätigte den Wechsel von reinem GitHub-Vertrieb zu einer Open Beta im Google Play Store und fügte Audiounterstützung (Sprache-zu-Text und Sprache-zu-übersetztem-Text) über Gemma 3n via die MediaPipe-LLM-Inference-API hinzu. Googles eigener Beitrag gibt an, dass das Projekt innerhalb von zwei Monaten nach dem GitHub-Start 500.000 APK-Downloads erreichte, und beschrieb den Plan, „die App für iOS-Nutzer bereitzustellen".',
          '**2. April 2026.** Google DeepMind veröffentlichte **Gemma 4** unter Apache-2.0-Lizenz, in den Größen E2B, E4B, 26B und 31B, mit einer später folgenden multimodalen **Gemma 4 12B Unified**-Variante am 3. Juni 2026.',
          '**iOS-App-Store-Verfügbarkeit.** Google AI Edge Gallery erreichte den App Store als [Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (App-Store-ID 6749645337) und erfüllte damit den im September-2025-Blogbeitrag angekündigten iOS-Plan; unabhängige Berichterstattung beschrieb, wie die App um die Zeit des Gemma-4-Starts in die Top-Downloads unter Produktivitäts-Apps im App Store aufstieg.',
          '**Version 1.0.10 (4. September 2026).** Die aktuelle Version zum Zeitpunkt dieses Tests, die laut Release-Notes „globale Übersetzungs- und Lokalisierungsunterstützung für 100 verschiedene Länder" sowie Fehlerbehebungen hinzufügt.',
        ],
        note: 'Versionsgeschichte und Daten stammen aus Googles eigenem Entwickler-Blog und dem GitHub-Repository des Projekts. Prüfen Sie die aktuelle Version und Release-Notes direkt im App Store, bevor Sie sich auf ein bestimmtes Feature verlassen.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das in der Praxis bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Kostenlos, kein Konto, kein Abo',
            'Was das in der Praxis bedeutet': 'Aus dem App Store installieren und sofort Modelle herunterladen — kein Kaufschritt.',
            'Einschränkung / Hinweis': 'Google bezeichnet das Projekt als „experimentelle Beta" — erwarten Sie mehr Ecken und Kanten als bei einer ausgereiften kostenpflichtigen App.',
          },
          {
            'Vorteil': 'Zugang zu Gemma 4 ab Erscheinungstag',
            'Was das in der Praxis bedeutet': 'Einer der schnellsten Wege, Googles aktuelle Flaggschiff-Open-Weight-Modellfamilie direkt auf einem iPhone auszuprobieren.',
            'Einschränkung / Hinweis': 'Größere Gemma-4-Varianten (26B, 31B) übersteigen wahrscheinlich, was typische iPhone-Hardware bequem ausführen kann; die App nennt keinen festen RAM-Bedarf pro Modell.',
          },
          {
            'Vorteil': 'Import eigener Hugging-Face-Modelle',
            'Was das in der Praxis bedeutet': 'Nicht auf Googles mitgelieferte Gemma-Modelle beschränkt — LiteRT-Format-Modelle von Hugging Face können geladen werden.',
            'Einschränkung / Hinweis': 'Anforderungen für gesperrte Hugging-Face-Repositories (z. B. ein Zugangstoken) sind nicht klar dokumentiert; prüfen Sie die aktuellen App-Anleitungen vor einem gesperrten Import.',
          },
          {
            'Vorteil': 'On-Device-Inferenz (LiteRT-LM)',
            'Was das in der Praxis bedeutet': 'Chat-Eingaben und Antworten werden nach dem Herunterladen eines Modells lokal verarbeitet, ohne Server-Roundtrip zur Generierung.',
            'Einschränkung / Hinweis': 'Das App-Store-Datenschutzlabel listet weiterhin Geräte-ID, Leistungsdaten, Diagnosen, ungefähren Standort und Absturzberichte als erfasst — dies ist keine telemetriefreie App.',
          },
          {
            'Vorteil': 'Multimodale Funktionen (Ask Image, Audio Scribe)',
            'Was das in der Praxis bedeutet': 'Fotos analysieren oder Sprache auf dem Gerät transkribieren, ohne separate App.',
            'Einschränkung / Hinweis': 'Multimodale Unterstützung hängt vom geladenen Gemma-Modell ab (Audio wird bei Gemma 3n und bestimmten Gemma-4-Größen unterstützt, nicht bei jedem Modell in der Bibliothek).',
          },
          {
            'Vorteil': 'Open Source und plattformübergreifend',
            'Was das in der Praxis bedeutet': 'Dasselbe zugrunde liegende Projekt läuft auch auf Android, mit auf GitHub unter Apache 2.0 verfügbarem Quellcode.',
            'Einschränkung / Hinweis': 'Dieser Test bewertet ausschließlich die iOS-App-Store-Version; Verhalten, Datenschutzlabel und Funktionsparität auf Android werden nicht als identisch angenommen.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Google AI Edge Gallery im Vergleich',
        columns: ['App', 'Plattformen', 'Preis', 'Modellflexibilität', 'Hauptunterschied'],
        rows: [
          {
            'App': 'Google AI Edge Gallery',
            'Plattformen': 'iPhone/iPad/Mac/Vision Pro (auch separat Android)',
            'Preis': 'Kostenlos',
            'Modellflexibilität': 'Gemma-4-Familie mitgeliefert; eigene Hugging-Face-LiteRT-Modelle importierbar',
            'Hauptunterschied': 'Von Google gebaut, als „experimentelle Beta" bezeichnet, schnellster Weg zu Gemma 4 auf dem iPhone',
          },
          {
            'App': '[Private LLM](/de/power-local-llm/private-llm-review)',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Preis': '4,99 $ Einmalkauf',
            'Modellflexibilität': '140+ kuratierte Modelle; OmniQuant/GPTQ-Quantisierung',
            'Hauptunterschied': 'Kostenpflichtig, Closed Source, ausgereifter und aktiv gepflegt als Verbraucherprodukt',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iPhone/iPad, teilweise Android',
            'Preis': 'Kostenlos, Open Source',
            'Modellflexibilität': 'Beliebige GGUF-Datei von Hugging Face oder anderswo',
            'Hauptunterschied': 'Kostenlos und vollständig quelloffen wie Google AI Edge Gallery, aber nicht an Gemma oder LiteRT-LM gebunden',
          },
          {
            'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Plattformen': 'iPhone/iPad/Mac',
            'Preis': 'Kostenlos',
            'Modellflexibilität': 'Führt Llama, Gemma, Qwen und DeepSeek offline aus, basiert auf Apple MLX',
            'Hauptunterschied': 'Kostenlos wie Google AI Edge Gallery, aber auf Apples eigenem MLX-Framework statt LiteRT-LM aufgebaut',
          },
          {
            'App': '[Loci AI](/de/power-local-llm/loci-ai-review-offline-local-ai)',
            'Plattformen': 'iPhone/iPad/Android/Mac/Windows',
            'Preis': 'Siehe aktueller Eintrag',
            'Modellflexibilität': 'Kuratierte Bibliothek von ca. 10 Modellen; Gemma 4 E2B/E4B unter den unterstützten Modellen',
            'Hauptunterschied': 'Breitere plattformübergreifende Reichweite als Google AI Edge Gallerys iOS-Version, mit kleinerer kuratierter Modellliste',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsdetails von Drittanbieter-Apps ändern sich häufig — prüfen Sie aktuelle Angaben direkt im jeweiligen Eintrag, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich Google AI Edge Gallery eignet',
        items: [
          '**Leser, die Gemma 4 kostenlos auf einem iPhone ausprobieren möchten.** Es ist einer der schnellsten Wege, Googles aktuelle Flaggschiff-Open-Weight-Modellfamilie vollständig auf dem Gerät auszuführen.',
          '**Entwickler, die LiteRT-LM evaluieren.** Die App dient auch als praktische Demo von Googles On-Device-Inferenz-Laufzeitumgebung, nützlich vor der Integration von LiteRT-LM ins eigene Projekt.',
          '**Leser, die mit eigenen Hugging-Face-Modellen im LiteRT-Format experimentieren möchten**, ohne zuerst eine vollständige Entwicklungsumgebung einzurichten.',
          '**Leser, die mit dem Label „experimentelle Beta" einverstanden sind** und das Ausprobieren der neuesten Gemma-Releases einer ausgereiften, langjährig etablierten Verbraucher-App vorziehen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich Google AI Edge Gallery nicht eignet',
        items: [
          '**Leser, die ein ausgereiftes, aktiv kuratiertes Verbraucherprodukt wünschen.** [Private LLM](/de/power-local-llm/private-llm-review) und [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) haben beide eine längere Historie als gepflegte, nicht-Beta-Apps.',
          '**Leser, die das strengstmögliche Datenschutzlabel wünschen.** Der App-Store-Eintrag zeigt Geräte-ID, Leistungsdaten, Diagnosen, ungefähren Standort und Absturzberichte als erfasst — [Private LLMs](/de/power-local-llm/private-llm-review) Label gibt an, dass überhaupt keine Daten erfasst werden.',
          '**Leser, die Android-Unterstützung in derselben Installation benötigen.** Die Android-Version ist ein separater Download von [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), nicht die iOS-App-Store-App dieses Tests.',
          '**Leser, die die größten Gemma-4-Varianten auf einem Smartphone ausführen möchten.** Die 26B- und 31B-Varianten laufen im typischen iPhone-Speicher wahrscheinlich nicht komfortabel; die App nennt keinen festen RAM-Mindestwert pro Modell zur Bestätigung.',
          '**Teams, die eine zentral verwaltete Multi-User-Bereitstellung wünschen.** Dies ist eine Einzelnutzer-, Einzelgerät-Verbraucher-App ohne Admin-Konsole oder gemeinsame Lizenzverwaltung.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Google AI Edge Gallery kostenlos?',
            a: 'Ja. Der [App-Store-Eintrag](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) ist kostenlos herunterladbar, ohne Abonnement und ohne In-App-Käufe, verifiziert für diesen Test am 2026-09-12.',
          },
          {
            q: 'Welche Modelle führt Google AI Edge Gallery aus?',
            a: 'Sie führt Googles Gemma-Modellfamilie aus, aktuell die Gemma-4-Generation (E2B, E4B, 26B, 31B und die multimodale 12B-Unified-Variante, veröffentlicht zwischen April und Juni 2026), sowie das frühere Gemma 3n. Nutzer können auch eigene Modelle im LiteRT-Format von Hugging Face importieren.',
          },
          {
            q: 'Funktioniert Google AI Edge Gallery auch auf Android?',
            a: 'Ja, aber als separate Verteilung. Das zugrunde liegende Open-Source-Projekt [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) bietet eine Android-Version über Google Play und direkten APK-Download, zusätzlich zum iOS-App-Store-Eintrag dieses Tests.',
          },
          {
            q: 'Erfasst Google AI Edge Gallery meine Daten?',
            a: 'Chat-Eingaben und Modellantworten werden nach dem Herunterladen eines Modells auf dem Gerät verarbeitet, aber Apples Datenschutzlabel für den iOS-Eintrag gibt an, dass Geräte-ID, Leistungsdaten und Diagnosen mit Ihrer Identität verknüpft sind und ungefährer Standort, Produktinteraktionsdaten und Absturzberichte erfasst werden, ohne mit Ihrer Identität verknüpft zu sein. Dies ist keine datenfreie App, auch wenn die Inferenz selbst lokal läuft.',
          },
          {
            q: 'Was ist LiteRT-LM?',
            a: '[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) ist Googles produktionsorientierte, quelloffene Inferenz-Laufzeitumgebung zum Ausführen großer Sprachmodelle auf Edge-Geräten wie Smartphones. Sie löste die ältere MediaPipe-LLM-Inference-API ab, die in älteren Versionen der Gallery-App verwendet wurde.',
          },
          {
            q: 'Kann ich ein eigenes Modell in Google AI Edge Gallery importieren?',
            a: 'Ja — Googles eigene Dokumentation bestätigt, dass die App das Laden eigener Modelle von Hugging Face im LiteRT-Format über eine Modellkarten-URL unterstützt. Details zu Anforderungen für gesperrte Hugging-Face-Repositories, etwa ob ein Zugangstoken benötigt wird, sind nicht klar dokumentiert; prüfen Sie die aktuellen App-Anleitungen, bevor Sie dies versuchen.',
          },
          {
            q: 'Ist Google AI Edge Gallery ein fertiges Produkt oder eine Beta?',
            a: 'Googles eigene Projektdokumentation auf GitHub beschreibt es als „experimentelle Beta-Version" und bittet um Nutzer-Feedback — dieser Status gilt für das zugrunde liegende Projekt auf iOS, Android und Desktop, nicht nur für eine Plattform.',
          },
          {
            q: 'Welche Geräte unterstützt die iOS-Version?',
            a: 'Laut App-Store-Eintrag: iPhone und iPad ab iOS 17.0, Mac ab macOS 14.0 mit Apple-M1-Chip oder neuer, und Apple Vision Pro ab visionOS 1.0.',
          },
          {
            q: 'Wie schneidet Google AI Edge Gallery im Vergleich zu Private LLM ab?',
            a: 'Google AI Edge Gallery ist kostenlos, von Google gebaut, als experimentelle Beta gekennzeichnet und konzentriert sich auf Gemma-Modelle über LiteRT-LM. [Private LLM](/de/power-local-llm/private-llm-review) ist ein Einmalkauf für 4,99 $, Closed Source, und bietet eine größere kuratierte Bibliothek von 140+ Modellen mit längerer Historie als gepflegte Verbraucher-App. Wählen Sie Google AI Edge Gallery, um Gemma 4 kostenlos auszuprobieren; wählen Sie Private LLM für eine ausgereiftere, aktiv gepflegte kostenpflichtige Erfahrung.',
          },
          {
            q: 'Unterstützt Google AI Edge Gallery Audio- und Bildeingaben?',
            a: 'Ja, je nach geladenem Modell. Ask Image bietet multimodale Fotoanalyse, und Audio Scribe bietet On-Device-Sprachtranskription und -übersetzung; Audiounterstützung in den zugrunde liegenden Gemma-Modellen begann mit Gemma 3n und setzt sich bei bestimmten Gemma-4-Größen fort, einschließlich der 12B-Unified-Variante.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Google AI Edge Gallery verdient sich einen Platz in diesem Cluster als schnellster, kostenloser Weg, Googles eigene Gemma-4-Modelle vollständig auf einem iPhone auszuführen, gestützt von Googles produktionsreifer LiteRT-LM-Laufzeitumgebung statt einem Drittanbieter-Wrapper um ein Open-Source-Modell. Die Unterstützung für Hugging-Face-Import und multimodale Funktionen (Ask Image, Audio Scribe, Thinking Mode) gehen über einen bloßen Chat-Client hinaus. Die Abwägungen sind ebenso real: Google selbst bezeichnet das Projekt als „experimentelle Beta", das iOS-App-Store-Datenschutzlabel zeigt mehr Datenerfassung als die strengsten datenschutzorientierten Konkurrenten, und die App hat eine kürzere Historie als gepflegtes Verbraucherprodukt als Apps wie Private LLM. Leser, die speziell die neuesten Gemma-Modelle kostenlos wollen, oder die LiteRT-LM als Entwickler evaluieren, sollten sie installieren. Leser, die die ausgereifteste, am längsten etablierte oder datenschutzstrengste mobile lokale KI-App wünschen, sollten sie zunächst mit [Private LLM](/de/power-local-llm/private-llm-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Google AI Edge Gallery im App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) — Preis, Plattformanforderungen, Datenschutzlabel, Bewertungen und Versionsgeschichte.',
          '[google-ai-edge/gallery auf GitHub](https://github.com/google-ai-edge/gallery) — Projektübersicht, unterstützte Plattformen, Hugging-Face-Import, Lizenz und Beta-Status.',
          '[LiteRT-LM auf GitHub](https://github.com/google-ai-edge/LiteRT-LM) — die On-Device-Inferenz-Laufzeitumgebung, auf der die App basiert.',
          '[Google AI Edge Gallery Ankündigungs-Blogpost](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — Ankündigung vom 9. September 2025 zu Audiounterstützung und Google-Play-Verfügbarkeit.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Private LLM Test](/de/power-local-llm/private-llm-review) — eine kostenpflichtige, ausgereiftere Alternative mit größerer kuratierter Modellbibliothek.',
          '[PocketPal AI Test](/de/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene Alternative mit manuellem GGUF-Import.',
          '[Locally AI Test](/de/power-local-llm/locally-ai-review) — eine kostenlose, auf Apple MLX basierende Alternative mit ähnlichen Modellfamilien.',
          '[Loci AI Test](/de/power-local-llm/loci-ai-review-offline-local-ai) — eine plattformübergreifende On-Device-App, die ebenfalls Gemma 4 unterstützt.',
          '[Das vollständige lokale KI-Software-Verzeichnis](/de/power-local-llm/local-llm-software-directory) — ein umfassenderes Verzeichnis lokaler KI-Tools über alle Plattformen hinweg, einschließlich Google AI Edge Gallerys Eintrag.',
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
    heroImage: '/images/google-ai-edge-gallery-review-hero-fr.webp',
    title: 'Google AI Edge Gallery : test (2026) — chat Gemma 4 sur l\'appareil pour iPhone',
    seoTitle: 'Google AI Edge Gallery 2026 : app Gemma iOS',
    intro:
      'Google AI Edge Gallery est une application gratuite de [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) qui exécute des modèles d\'IA open source entièrement sur iPhone, iPad ou Mac, grâce au moteur d\'inférence sur l\'appareil [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) de Google. Ce test porte spécifiquement sur la fiche App Store iOS (ID App Store 6749645337, version 1.0.10, 4,0 étoiles sur plus de 160 avis au moment de ce test) — un article complémentaire à [la fiche de Google AI Edge Gallery dans le répertoire de logiciels IA locaux](/fr/power-local-llm/local-llm-software-directory). L\'application est la façade grand public d\'un projet open source plus large, [google-ai-edge/gallery sur GitHub](https://github.com/google-ai-edge/gallery), également disponible sur Android et en APK direct — ce test n\'évalue pas la version Android. Sur iOS, elle exécute la famille de modèles Gemma de Google, y compris la génération actuelle Gemma 4, entièrement hors ligne une fois un modèle téléchargé, et permet d\'importer d\'autres modèles depuis [Hugging Face](https://huggingface.co/) au format LiteRT. La question pratique pour un lecteur comparant les apps IA sur iPhone est de savoir comment une application gratuite, maintenue par Google, officiellement qualifiée de « bêta expérimentale », se compare à des alternatives payantes plus abouties comme [Private LLM](/fr/power-local-llm/private-llm-review) ou gratuites comme [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
    metaDescription:
      'Google AI Edge Gallery, test 2026 : app iOS gratuite (ID App Store 6749645337), chat Gemma 4 sur l\'appareil via LiteRT-LM, 4,0 étoiles/160+ avis. Fonctions, confidentialité et comparaison avec Private LLM et PocketPal AI.',
    twitterDescription:
      'Google AI Edge Gallery, test 2026 : l\'app iOS gratuite de Google pour faire tourner Gemma 4 entièrement sur l\'appareil via LiteRT-LM. Fonctions, étiquette de confidentialité App Store et comparaison avec Private LLM et PocketPal AI.',
    audience:
      'Utilisateurs iPhone et iPad évaluant l\'application IA gratuite sur l\'appareil de Google — couvre les fonctions, le support Gemma 4, l\'étiquette de confidentialité App Store, la relation entre l\'app iOS et le projet Android/GitHub plus large, et la comparaison avec des alternatives payantes et gratuites.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Google AI Edge Gallery avis',
    targetKeywords: [
      'google ai edge gallery avis',
      'google ai edge gallery ios',
      'google ai edge gallery app',
      'gemma 4 sur appareil iphone',
      'litert-lm avis',
      'google ai edge gallery vs private llm',
      'google ai edge gallery vs pocketpal ai',
      'app ia locale gratuite iphone',
    ],
    current_models_mentioned: ['Gemma 4 E2B', 'Gemma 4 E4B', 'Gemma 4 26B', 'Gemma 4 31B', 'Gemma 4 12B Unified', 'Gemma 3n'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iOS 17+)', 'Mac Apple Silicon (M1 ou plus récent, macOS 14+)', 'Apple Vision Pro (visionOS 1.0+)'],
    leadAnswerBlock:
      '**Google AI Edge Gallery est une application iOS gratuite de [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) qui exécute Gemma 4 et d\'autres modèles open source entièrement sur l\'appareil via le moteur [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) de Google, sans abonnement ni coût par message.** C\'est la version iOS du projet open source [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), également disponible sur Android ; Google lui-même qualifie l\'app de « bêta expérimentale ». Une fois un modèle téléchargé, le chat fonctionne hors ligne, mais l\'étiquette de confidentialité App Store montre que Google collecte encore certaines données de diagnostic et d\'utilisation de l\'appareil — ce n\'est pas une app sans aucune télémétrie, même si le contenu des messages reste sur l\'appareil. Les lecteurs qui veulent une alternative payante plus aboutie devraient comparer avec [Private LLM](/fr/power-local-llm/private-llm-review) ; ceux qui veulent une alternative gratuite et open source avec import manuel de GGUF, avec [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      fr: {
        question: 'Google AI Edge Gallery vaut-il le coup sur iPhone ?',
        answer:
          'Oui, si vous voulez un accès gratuit et sans compte aux modèles Gemma 4 actuels de Google fonctionnant entièrement sur l\'appareil, et que vous acceptez une app que Google qualifie lui-même de « bêta expérimentale » plutôt qu\'un produit grand public abouti. C\'est un excellent choix pour essayer gratuitement le raisonnement et les fonctions multimodales de Gemma 4 sur l\'appareil. Passez votre chemin si vous voulez une expérience d\'app plus mature et activement soignée — [Private LLM](/fr/power-local-llm/private-llm-review) et [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) sont tous deux plus établis à cet égard.',
        bullets: [
          'Gratuit sur l\'Apple App Store ; pas d\'abonnement, pas d\'achats intégrés.',
          'Exécute Gemma 4 (E2B, E4B, 26B, 31B, 12B Unified) et d\'autres modèles open source via le moteur LiteRT-LM de Google.',
          'iPhone, iPad, Mac et Apple Vision Pro — nécessite iOS 17.0+ ou macOS 14.0+ avec puce Apple Silicon.',
          'Également disponible en app Android open source et en APK direct sur github.com/google-ai-edge/gallery — ce test couvre uniquement la fiche iOS.',
          'L\'étiquette de confidentialité App Store liste l\'identifiant appareil, les données de performance et les diagnostics comme collectés — le contenu des conversations reste sur l\'appareil, mais ce n\'est pas une app « zéro donnée ».',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Ce qu\'est Google AI Edge Gallery', anchor: 'what-is-google-ai-edge-gallery' },
      { label: 'Obtenir l\'app', anchor: 'get-it' },
      { label: 'Modèles : Gemma 4 et LiteRT-LM', anchor: 'models' },
      { label: 'Plateformes : App Store iOS vs. projet open source', anchor: 'platforms' },
      { label: 'Confidentialité : ce que dit vraiment l\'étiquette App Store', anchor: 'privacy' },
      { label: 'Historique et jalons de versions', anchor: 'history' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'Google AI Edge Gallery face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Google AI Edge Gallery convient', anchor: 'who-should-use' },
      { label: 'Pour qui Google AI Edge Gallery ne convient pas', anchor: 'who-should-not-use' },
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
            text: 'Google AI Edge Gallery est une application iOS gratuite (ID App Store 6749645337, version 1.0.10) qui exécute Gemma 4 et d\'autres modèles open source entièrement sur l\'appareil via le moteur LiteRT-LM de Google, qualifiée par Google lui-même de « bêta expérimentale ».',
          },
          {
            type: 'plain-terms',
            text: 'C\'est l\'app vitrine de Google pour essayer ses propres modèles Gemma directement sur votre téléphone, hors ligne, sans compte ni abonnement — le même projet open source sous-jacent a aussi une version Android et un dépôt de code source téléchargeable.',
          },
        ],
        items: [
          'Prix : gratuit sur l\'[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) ; pas d\'abonnement, pas d\'achats intégrés.',
          'Développeur : Google LLC, version actuelle 1.0.10 (publiée le 4 septembre 2026), notée 4,0 sur 5 pour plus de 160 avis.',
          'Plateformes (fiche iOS) : iPhone et iPad sous iOS 17.0+, Mac sous macOS 14.0+ avec puce Apple M1 ou plus récente, Apple Vision Pro sous visionOS 1.0+.',
          'Modèles : famille Gemma 4 (E2B, E4B, 26B, 31B et la variante multimodale 12B Unified), plus Gemma 3n ; import possible de modèles personnalisés depuis Hugging Face au format LiteRT.',
          'Open source : le projet sous-jacent [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) est sous licence Apache 2.0 et disponible aussi sur Android et en APK direct — ce test couvre la version App Store iOS.',
          'Statut : le README GitHub de Google décrit le projet comme une « version bêta expérimentale ».',
          'Confidentialité : l\'étiquette App Store liste l\'identifiant appareil, les données de performance et les diagnostics comme liés à l\'identité, plus la localisation approximative, les données d\'interaction produit et les rapports de plantage comme non liés à l\'identité — les messages tournent sur l\'appareil, mais ce n\'est pas une app sans télémétrie.',
        ],
      },
      whatIsGoogleAIEdgeGallery: {
        id: 'what-is-google-ai-edge-gallery',
        title: 'Ce qu\'est Google AI Edge Gallery',
        content: [
          '**Google AI Edge Gallery est l\'application vitrine de Google pour exécuter des modèles d\'IA générative open source directement sur un téléphone, une tablette ou un Mac, sans aller-retour serveur pour l\'inférence.** Elle repose sur [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM), le framework d\'inférence de production de Google pour les grands modèles de langage sur appareils périphériques, qui a lui-même succédé à l\'ancienne API MediaPipe LLM Inference utilisée par les versions précédentes du projet.',
          'La fiche iOS testée ici est [Google AI Edge Gallery sur l\'Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (ID App Store 6749645337), développée et publiée par Google LLC, actuellement en version 1.0.10 et notée 4,0 sur 5 étoiles pour plus de 160 avis. Le téléchargement est gratuit, sans palier d\'abonnement.',
          'Cette même app est un canal de distribution d\'un projet open source plus vaste, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), que Google décrit comme « la destination de choix pour exécuter les grands modèles de langage open source les plus puissants au monde sur votre appareil mobile ». Ce projet propose aussi une version Android (via Google Play et APK direct) ainsi que des versions bureau. La documentation de Google qualifie l\'ensemble du projet de **« version bêta expérimentale »** plutôt que de produit grand public fini — une distinction que ce test considère comme substantielle et non formelle, Google AI Edge Gallery étant comparé tout au long de ce dossier à des apps conçues spécifiquement comme des produits grand public aboutis.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'Obtenir l\'app',
        itemHeadings: true,
        content: [
          '**Google AI Edge Gallery est gratuite à télécharger, sans étape d\'achat.** Le CTA de ce test couvre spécifiquement la fiche iOS ; les canaux Android et code source sont des téléchargements distincts du même projet open source sous-jacent, pas la même installation.',
          'Ce test est un article complémentaire à [la fiche de Google AI Edge Gallery dans le répertoire de logiciels IA locaux](/fr/power-local-llm/local-llm-software-directory), qui la référence aux côtés de toutes les autres apps mobiles d\'IA locale couvertes sur ce site.',
        ],
        columns: ['Plateforme', 'Où l\'obtenir', 'Remarques'],
        rows: [
          {
            'Plateforme': 'iPhone / iPad',
            'Où l\'obtenir': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Remarques': 'Gratuit. Nécessite iOS 17.0 ou plus récent. C\'est la fiche évaluée par ce test.',
          },
          {
            'Plateforme': 'Mac',
            'Où l\'obtenir': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Remarques': 'Même fiche App Store ; nécessite macOS 14.0+ et une puce Apple M1 ou plus récente.',
          },
          {
            'Plateforme': 'Apple Vision Pro',
            'Où l\'obtenir': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Remarques': 'Listée comme compatible avec visionOS 1.0+ ; non testée directement pour ce test.',
          },
          {
            'Plateforme': 'Android',
            'Où l\'obtenir': '[google-ai-edge/gallery sur GitHub](https://github.com/google-ai-edge/gallery)',
            'Remarques': 'Une version distincte du même projet open source via Google Play ou APK direct — non couverte par ce test.',
          },
          {
            'Plateforme': 'Code source',
            'Où l\'obtenir': '[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            'Remarques': 'Licence Apache 2.0 ; le dépôt derrière tous les canaux de distribution ci-dessus.',
          },
        ],
        note: 'La disponibilité, le prix et les numéros de version sur l\'App Store peuvent changer sans préavis. Vérifiez la fiche actuelle sur la [page App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) avant d\'installer. Vérifié pour ce test le 2026-09-12.',
      },
      models: {
        id: 'models',
        title: 'Modèles : Gemma 4 et LiteRT-LM',
        content: [
          '**Google AI Edge Gallery se concentre sur la famille de modèles Gemma de Google, actuellement la génération Gemma 4 sortie le 2 avril 2026.** Gemma 4 existe en plusieurs tailles — E2B et E4B (conçues pour les téléphones), une variante 26B mixture-of-experts, une variante 31B, et un modèle multimodal **Gemma 4 12B Unified** qui traite texte, image et, selon la documentation de Google, audio dans une seule architecture. L\'app prend aussi en charge **Gemma 3n**, une version Gemma antérieure qui a ajouté la compréhension audio à la pile sur l\'appareil avant la sortie de Gemma 4.',
          'Au-delà des modèles Gemma inclus, l\'app permet d\'**importer ses propres modèles depuis Hugging Face au format LiteRT**, via une URL de fiche modèle dans l\'écran de gestion des modèles. La documentation de Google confirme cette intégration Hugging Face pour la découverte et le téléchargement de modèles, mais ne précise pas si un jeton d\'accès Hugging Face est requis pour les dépôts de modèles restreints — ce test traite ce point comme non confirmé plutôt que de supposer un flux de jeton spécifique ; vérifiez les instructions actuelles dans l\'app avant d\'importer un modèle restreint.',
          'Côté fonctionnalités, l\'app regroupe plusieurs modes autour de ces modèles : **AI Chat avec Thinking Mode** (affiche les étapes de raisonnement intermédiaires du modèle), **Ask Image** (analyse multimodale d\'une photo depuis l\'appareil photo ou la galerie), **Audio Scribe** (transcription et traduction vocale sur l\'appareil), **Agent Skills** (accès à des outils externes, comme une recherche Wikipédia, au-dessus du modèle de base), et un écran de **gestion des modèles et de benchmarking** pour comparer taille de téléchargement et performance sur l\'appareil avant de choisir.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plateformes : App Store iOS vs. projet open source',
        itemHeadings: true,
        columns: ['Plateforme', 'À quoi s\'attendre', 'Remarque importante'],
        rows: [
          {
            'Plateforme': 'iPhone / iPad',
            'À quoi s\'attendre': 'Nécessite iOS 17.0 ou plus récent, selon la fiche App Store évaluée par ce test.',
            'Remarque importante': 'C\'est la plateforme principale de ce test ; la génération de puce prise en charge n\'est pas détaillée séparément de l\'exigence d\'OS sur la fiche.',
          },
          {
            'Plateforme': 'Mac',
            'À quoi s\'attendre': 'Nécessite macOS 14.0 ou plus récent avec une puce Apple M1 ou plus récente.',
            'Remarque importante': 'Même binaire universel et même fiche App Store que l\'app iPhone/iPad ; les Mac Intel ne sont pas pris en charge selon l\'exigence listée.',
          },
          {
            'Plateforme': 'Apple Vision Pro',
            'À quoi s\'attendre': 'Listée comme compatible, nécessitant visionOS 1.0 ou plus récent.',
            'Remarque importante': 'Ce test n\'a pas testé directement l\'expérience Vision Pro — à traiter comme une compatibilité listée sur l\'App Store, pas une fonctionnalité vérifiée en pratique.',
          },
          {
            'Plateforme': 'Android',
            'À quoi s\'attendre': 'Une version distincte du même projet open source est disponible via Google Play (passée d\'une distribution GitHub uniquement à une bêta ouverte sur Google Play selon une annonce de Google du 9 septembre 2025) ou en APK direct depuis GitHub.',
            'Remarque importante': 'Pas la même installation que l\'app App Store iOS couverte par ce test ; ne pas supposer que le comportement spécifique à iOS (par ex. l\'étiquette de confidentialité exacte) se retrouve sur la version Android.',
          },
          {
            'Plateforme': 'Le projet open source plus large',
            'À quoi s\'attendre': '[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) est sous licence Apache 2.0 et couvre la distribution Android, iOS et bureau.',
            'Remarque importante': 'La documentation de Google qualifie l\'ensemble du projet de « version bêta expérimentale » — ce statut s\'applique à toutes les plateformes, pas seulement iOS.',
          },
        ],
        note: 'Les exigences de plateforme et le statut bêta peuvent changer entre les mises à jour — vérifiez les détails actuels directement sur la [fiche App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) ou le [dépôt GitHub](https://github.com/google-ai-edge/gallery) avant de vous fier à la prise en charge d\'un appareil ou d\'un OS précis.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité : ce que dit vraiment l\'étiquette App Store',
        content: [
          '**L\'inférence se fait sur l\'appareil une fois un modèle téléchargé — les messages et les réponses du modèle ne sont pas envoyés à un serveur Google pour générer une réponse.** Cela dit, ce n\'est pas la même affirmation que « l\'app ne collecte aucune donnée », et ce test traite ces deux affirmations séparément plutôt que de les confondre.',
          'L\'étiquette de confidentialité d\'Apple pour la [fiche App Store de Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) indique que les **données liées à votre identité** incluent l\'identifiant appareil, les données de performance et les diagnostics, et que les **données non liées à votre identité** incluent la localisation approximative, les données d\'interaction produit et les rapports de plantage. Il s\'agit du format standard d\'étiquette de confidentialité déclarée par le développeur chez Apple, pas d\'un audit indépendant du trafic réseau de l\'app par PromptQuorum.',
          'La distinction pratique pour un lecteur soucieux de sa confidentialité : le contenu de vos conversations et les images ou l\'audio fournis au modèle restent sur l\'appareil pendant l\'inférence, mais Google collecte tout de même des données de type télémétrie (identifiants appareil, données de performance/diagnostic, localisation approximative, rapports de plantage) sur l\'utilisation de l\'app elle-même. Les lecteurs qui exigent une posture plus stricte de « ne collecte absolument rien » devraient comparer avec l\'étiquette de confidentialité App Store de [Private LLM](/fr/power-local-llm/private-llm-review), qui indique qu\'aucune donnée n\'est collectée par cette app.',
        ],
        items: [
          '**Aucun compte requis pour discuter.** L\'app ne nécessite pas de connexion pour télécharger et exécuter des modèles.',
          '**Le contenu des conversations reste sur l\'appareil pendant l\'inférence.** Les messages et réponses sont traités localement par LiteRT-LM une fois un modèle téléchargé.',
          '**L\'identifiant appareil, les données de performance et les diagnostics sont liés à votre identité**, selon l\'étiquette de confidentialité d\'Apple pour cette fiche.',
          '**La localisation approximative, les données d\'interaction produit et les rapports de plantage sont collectés mais non liés à votre identité**, selon la même étiquette.',
          '**Ce test s\'appuie sur l\'étiquette de confidentialité déclarée par Apple**, pas sur un audit indépendant du trafic réseau de l\'app.',
        ],
      },
      history: {
        id: 'history',
        title: 'Historique et jalons de versions',
        content: [
          '**Google AI Edge Gallery a débuté comme projet open source uniquement sur GitHub avant d\'arriver sur les stores d\'applications.** La chronologie ci-dessous est basée sur les articles de blog de Google et le dépôt GitHub du projet.',
        ],
        items: [
          '**Première publication GitHub.** Le projet [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) a démarré comme vitrine Android/bureau open source pour les modèles Gemma sur l\'appareil, distribué initialement en APK direct.',
          '**9 septembre 2025.** [L\'article de blog d\'annonce](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) de Google a confirmé le passage d\'une distribution GitHub uniquement à une bêta ouverte sur le Google Play Store, et a ajouté la prise en charge audio (voix-vers-texte et voix-vers-texte-traduit) via Gemma 3n grâce à l\'API MediaPipe LLM Inference. L\'article de Google indique que le projet a atteint 500 000 téléchargements APK en deux mois depuis le lancement GitHub, et décrivait un plan futur pour « apporter l\'app aux utilisateurs iOS ».',
          '**2 avril 2026.** Google DeepMind a publié **Gemma 4** sous licence Apache 2.0, en tailles E2B, E4B, 26B et 31B, avec une variante multimodale **Gemma 4 12B Unified** publiée ensuite le 3 juin 2026.',
          '**Disponibilité sur l\'App Store iOS.** Google AI Edge Gallery est arrivée sur l\'App Store sous le nom [Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (ID App Store 6749645337), concrétisant le plan iOS annoncé dans l\'article de septembre 2025 ; une couverture indépendante a décrit l\'app grimpant parmi les apps de productivité les plus téléchargées sur l\'App Store autour du lancement de Gemma 4.',
          '**Version 1.0.10 (4 septembre 2026).** La version actuelle au moment de ce test, ajoutant selon ses notes de version « la prise en charge de la traduction et de la localisation mondiale dans 100 pays différents » ainsi que des corrections de bugs.',
        ],
        note: 'L\'historique des versions et les dates proviennent du blog développeur de Google et du dépôt GitHub du projet. Vérifiez la version actuelle et les notes de version directement dans l\'App Store avant de vous fier à une fonctionnalité précise.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en pratique', 'Limite / remarque'],
        rows: [
          {
            'Avantage': 'Gratuit, sans compte, sans abonnement',
            'Ce que cela signifie en pratique': 'Installer depuis l\'App Store et télécharger des modèles immédiatement — aucune étape d\'achat.',
            'Limite / remarque': 'Google qualifie le projet de « bêta expérimentale » — attendez-vous à plus d\'aspérités qu\'avec une app payante mature.',
          },
          {
            'Avantage': 'Accès à Gemma 4 dès le lancement',
            'Ce que cela signifie en pratique': 'L\'un des moyens les plus rapides d\'essayer la famille de modèles phares open-weight actuelle de Google directement sur un iPhone.',
            'Limite / remarque': 'Les tailles Gemma 4 plus grandes (26B, 31B) dépassent probablement ce qu\'un iPhone classique peut exécuter confortablement ; l\'app ne publie pas d\'exigence de RAM fixe par modèle.',
          },
          {
            'Avantage': 'Import de modèles Hugging Face personnalisés',
            'Ce que cela signifie en pratique': 'Pas limité aux modèles Gemma inclus par Google — les modèles au format LiteRT depuis Hugging Face peuvent être chargés.',
            'Limite / remarque': 'Les exigences pour les dépôts Hugging Face restreints (comme un jeton d\'accès) ne sont pas clairement documentées ; vérifiez les instructions actuelles dans l\'app avant un import restreint.',
          },
          {
            'Avantage': 'Inférence sur l\'appareil (LiteRT-LM)',
            'Ce que cela signifie en pratique': 'Les messages et réponses sont traités localement une fois un modèle téléchargé, sans aller-retour serveur pour la génération.',
            'Limite / remarque': 'L\'étiquette de confidentialité App Store liste toujours l\'identifiant appareil, les données de performance, les diagnostics, la localisation approximative et les rapports de plantage comme collectés — ce n\'est pas une app sans télémétrie.',
          },
          {
            'Avantage': 'Fonctions multimodales (Ask Image, Audio Scribe)',
            'Ce que cela signifie en pratique': 'Analyser des photos ou transcrire de la voix sur l\'appareil sans app séparée.',
            'Limite / remarque': 'La prise en charge multimodale dépend du modèle Gemma chargé (l\'audio est pris en charge par Gemma 3n et certaines tailles de Gemma 4, pas tous les modèles de la bibliothèque).',
          },
          {
            'Avantage': 'Open source et multiplateforme',
            'Ce que cela signifie en pratique': 'Le même projet sous-jacent fonctionne aussi sur Android, avec le code source disponible sur GitHub sous licence Apache 2.0.',
            'Limite / remarque': 'Ce test évalue uniquement la version App Store iOS ; le comportement, l\'étiquette de confidentialité et la parité des fonctions sur Android ne sont pas supposés identiques.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Google AI Edge Gallery face aux alternatives',
        columns: ['App', 'Plateformes', 'Prix', 'Flexibilité des modèles', 'Différence clé'],
        rows: [
          {
            'App': 'Google AI Edge Gallery',
            'Plateformes': 'iPhone/iPad/Mac/Vision Pro (Android séparément)',
            'Prix': 'Gratuit',
            'Flexibilité des modèles': 'Famille Gemma 4 incluse ; modèles Hugging Face LiteRT personnalisés importables',
            'Différence clé': 'Conçue par Google, qualifiée de « bêta expérimentale », voie la plus rapide vers Gemma 4 sur iPhone',
          },
          {
            'App': '[Private LLM](/fr/power-local-llm/private-llm-review)',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Prix': 'Achat unique de 4,99 $',
            'Flexibilité des modèles': '140+ modèles sélectionnés ; quantification OmniQuant/GPTQ',
            'Différence clé': 'Payante, code source fermé, plus aboutie et activement maintenue comme produit grand public',
          },
          {
            'App': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iPhone/iPad, avec un support Android partiel',
            'Prix': 'Gratuit, open source',
            'Flexibilité des modèles': 'N\'importe quel fichier GGUF trouvé sur Hugging Face ou ailleurs',
            'Différence clé': 'Gratuite et entièrement open source comme Google AI Edge Gallery, mais non liée à Gemma ni à LiteRT-LM',
          },
          {
            'App': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Plateformes': 'iPhone/iPad/Mac',
            'Prix': 'Gratuit',
            'Flexibilité des modèles': 'Exécute Llama, Gemma, Qwen et DeepSeek hors ligne, basé sur Apple MLX',
            'Différence clé': 'Gratuite comme Google AI Edge Gallery, mais construite sur le framework MLX d\'Apple plutôt que LiteRT-LM',
          },
          {
            'App': '[Loci AI](/fr/power-local-llm/loci-ai-review-offline-local-ai)',
            'Plateformes': 'iPhone/iPad/Android/Mac/Windows',
            'Prix': 'Voir la fiche actuelle',
            'Flexibilité des modèles': 'Bibliothèque sélectionnée d\'environ 10 modèles ; Gemma 4 E2B/E4B parmi les modèles pris en charge',
            'Différence clé': 'Portée multiplateforme plus large que la version iOS de Google AI Edge Gallery, avec une liste de modèles plus restreinte',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des apps tierces changent fréquemment — vérifiez les spécificités actuelles sur la fiche de chaque app avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Google AI Edge Gallery convient',
        items: [
          '**Les lecteurs qui veulent essayer Gemma 4 sur un iPhone gratuitement.** C\'est l\'un des moyens les plus rapides d\'exécuter la famille de modèles phares open-weight actuelle de Google entièrement sur l\'appareil.',
          '**Les développeurs évaluant LiteRT-LM.** L\'app sert aussi de démo pratique du moteur d\'inférence sur l\'appareil de Google, utile avant d\'intégrer LiteRT-LM dans son propre projet.',
          '**Les lecteurs qui veulent expérimenter avec des modèles Hugging Face personnalisés au format LiteRT** sans configurer d\'abord un environnement de développement complet.',
          '**Les lecteurs à l\'aise avec l\'étiquette « bêta expérimentale »**, qui privilégient l\'essai des dernières versions de Gemma plutôt qu\'une app grand public pleinement aboutie et établie de longue date.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Pour qui Google AI Edge Gallery ne convient pas',
        items: [
          '**Les lecteurs qui veulent un produit grand public mature et activement soigné.** [Private LLM](/fr/power-local-llm/private-llm-review) et [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ont tous deux un historique plus long comme apps maintenues et hors bêta.',
          '**Les lecteurs qui veulent l\'étiquette de confidentialité la plus stricte possible.** La fiche App Store montre l\'identifiant appareil, les données de performance, les diagnostics, la localisation approximative et les rapports de plantage comme collectés — l\'étiquette de [Private LLM](/fr/power-local-llm/private-llm-review) indique qu\'aucune donnée n\'est collectée du tout.',
          '**Les lecteurs qui ont besoin du support Android dans la même installation.** La version Android est un téléchargement distinct depuis [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), pas l\'app App Store iOS couverte par ce test.',
          '**Les lecteurs qui veulent exécuter les plus grandes tailles de Gemma 4 sur un téléphone.** Les variantes 26B et 31B ont peu de chances de fonctionner confortablement dans la mémoire typique d\'un iPhone ; l\'app ne publie pas de seuil de RAM fixe par modèle pour le confirmer.',
          '**Les équipes voulant un déploiement multi-utilisateurs géré de manière centralisée.** C\'est une app grand public mono-utilisateur, mono-appareil, sans console d\'administration ni gestion de licences partagées.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Google AI Edge Gallery est-elle gratuite ?',
            a: 'Oui. La [fiche App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) est gratuite à télécharger, sans abonnement ni achats intégrés, vérifié pour ce test le 2026-09-12.',
          },
          {
            q: 'Quels modèles Google AI Edge Gallery exécute-t-elle ?',
            a: 'Elle exécute la famille de modèles Gemma de Google, actuellement la génération Gemma 4 (E2B, E4B, 26B, 31B et la variante multimodale 12B Unified, publiées entre avril et juin 2026), plus l\'ancien Gemma 3n. Les utilisateurs peuvent aussi importer des modèles personnalisés depuis Hugging Face au format LiteRT.',
          },
          {
            q: 'Google AI Edge Gallery fonctionne-t-elle aussi sur Android ?',
            a: 'Oui, mais en tant que distribution distincte. Le projet open source sous-jacent, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), propose une version Android via Google Play et APK direct, en plus de la fiche App Store iOS couverte par ce test.',
          },
          {
            q: 'Google AI Edge Gallery collecte-t-elle mes données ?',
            a: 'Les messages et réponses du modèle sont traités sur l\'appareil une fois un modèle téléchargé, mais l\'étiquette de confidentialité d\'Apple pour la fiche iOS indique que l\'identifiant appareil, les données de performance et les diagnostics sont liés à votre identité, et que la localisation approximative, les données d\'interaction produit et les rapports de plantage sont collectés sans être liés à votre identité. Ce n\'est pas une app sans données, même si l\'inférence elle-même tourne localement.',
          },
          {
            q: 'Qu\'est-ce que LiteRT-LM ?',
            a: '[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) est le framework d\'inférence open source orienté production de Google pour exécuter de grands modèles de langage sur des appareils périphériques comme les téléphones. Il a succédé à l\'ancienne API MediaPipe LLM Inference utilisée dans les versions antérieures de l\'app Gallery.',
          },
          {
            q: 'Puis-je importer mon propre modèle dans Google AI Edge Gallery ?',
            a: 'Oui — la documentation de Google confirme que l\'app prend en charge le chargement de modèles personnalisés depuis Hugging Face au format LiteRT via une URL de fiche modèle. Les détails sur les exigences pour les dépôts Hugging Face restreints, comme un éventuel jeton d\'accès requis, ne sont pas clairement documentés ; vérifiez les instructions actuelles dans l\'app avant d\'essayer.',
          },
          {
            q: 'Google AI Edge Gallery est-elle un produit fini ou une bêta ?',
            a: 'La documentation du projet de Google sur GitHub la décrit comme une « version bêta expérimentale » et demande les retours des utilisateurs — ce statut s\'applique au projet sous-jacent sur iOS, Android et bureau, pas seulement à une plateforme.',
          },
          {
            q: 'Quels appareils la version iOS prend-elle en charge ?',
            a: 'Selon la fiche App Store : iPhone et iPad sous iOS 17.0 ou plus récent, Mac sous macOS 14.0 ou plus récent avec puce Apple M1 ou plus récente, et Apple Vision Pro sous visionOS 1.0 ou plus récent.',
          },
          {
            q: 'Comment Google AI Edge Gallery se compare-t-elle à Private LLM ?',
            a: 'Google AI Edge Gallery est gratuite, conçue par Google, qualifiée de bêta expérimentale, et centrée sur les modèles Gemma via LiteRT-LM. [Private LLM](/fr/power-local-llm/private-llm-review) est un achat unique à 4,99 $, à code source fermé, et propose une bibliothèque sélectionnée plus large de 140+ modèles avec un historique plus long comme app grand public maintenue. Choisissez Google AI Edge Gallery pour essayer Gemma 4 gratuitement ; choisissez Private LLM pour une expérience payante plus aboutie et activement maintenue.',
          },
          {
            q: 'Google AI Edge Gallery prend-elle en charge l\'audio et l\'image en entrée ?',
            a: 'Oui, selon le modèle chargé. Ask Image propose une analyse photo multimodale, et Audio Scribe propose une transcription et traduction vocale sur l\'appareil ; la prise en charge audio dans les modèles Gemma sous-jacents a commencé avec Gemma 3n et se poursuit avec certaines tailles de Gemma 4, dont la variante 12B Unified.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Google AI Edge Gallery mérite sa place dans ce dossier comme le moyen le plus rapide et gratuit d\'exécuter les propres modèles Gemma 4 de Google entièrement sur un iPhone, soutenu par le moteur de production LiteRT-LM de Google plutôt qu\'une surcouche tierce autour d\'un modèle open source. Sa prise en charge de l\'import Hugging Face et ses fonctions multimodales (Ask Image, Audio Scribe, Thinking Mode) vont au-delà d\'un simple client de chat. Les compromis sont tout aussi réels : Google lui-même qualifie le projet de « bêta expérimentale », l\'étiquette de confidentialité App Store iOS montre davantage de collecte de données que les concurrents les plus stricts en matière de confidentialité, et l\'app a un historique plus court comme produit grand public maintenu que des apps comme Private LLM. Les lecteurs qui veulent spécifiquement les derniers modèles Gemma gratuitement, ou qui évaluent LiteRT-LM en tant que développeurs, devraient l\'installer. Ceux qui veulent l\'app IA locale mobile la plus aboutie, la plus établie ou la plus stricte en matière de confidentialité devraient d\'abord la comparer à [Private LLM](/fr/power-local-llm/private-llm-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Google AI Edge Gallery sur l\'App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) — prix, exigences de plateforme, étiquette de confidentialité, avis et historique des versions.',
          '[google-ai-edge/gallery sur GitHub](https://github.com/google-ai-edge/gallery) — présentation du projet, plateformes prises en charge, import Hugging Face, licence et statut bêta.',
          '[LiteRT-LM sur GitHub](https://github.com/google-ai-edge/LiteRT-LM) — le moteur d\'inférence sur l\'appareil sur lequel l\'app est construite.',
          '[Article de blog d\'annonce de Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — annonce du 9 septembre 2025 du support audio et de la disponibilité sur Google Play.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de Private LLM](/fr/power-local-llm/private-llm-review) — une alternative payante plus aboutie avec une bibliothèque de modèles sélectionnée plus large.',
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une alternative gratuite et open source avec import manuel de GGUF.',
          '[Test de Locally AI](/fr/power-local-llm/locally-ai-review) — une alternative gratuite basée sur Apple MLX prenant en charge des familles de modèles similaires.',
          '[Test de Loci AI](/fr/power-local-llm/loci-ai-review-offline-local-ai) — une app multiplateforme sur l\'appareil prenant elle aussi en charge Gemma 4.',
          '[Le répertoire complet des logiciels IA locaux](/fr/power-local-llm/local-llm-software-directory) — un répertoire plus large d\'outils IA locaux toutes plateformes confondues, incluant la fiche de Google AI Edge Gallery.',
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
    heroImage: '/images/google-ai-edge-gallery-review-hero-es.webp',
    title: 'Google AI Edge Gallery: reseña (2026) — chat Gemma 4 en el dispositivo para iPhone',
    seoTitle: 'Google AI Edge Gallery 2026: app Gemma para iOS',
    intro:
      'Google AI Edge Gallery es una aplicación gratuita de [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) que ejecuta modelos de IA de código abierto completamente en un iPhone, iPad o Mac, usando el motor de inferencia en el dispositivo de Google, [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM). Esta reseña cubre específicamente la ficha de la App Store de iOS (ID de App Store 6749645337, versión 1.0.10, 4,0 estrellas con más de 160 valoraciones al momento de esta reseña) — un artículo complementario a [la ficha de Google AI Edge Gallery en el directorio de software de IA local](/es/power-local-llm/local-llm-software-directory). La app es la cara al usuario de un proyecto de código abierto más amplio, [google-ai-edge/gallery en GitHub](https://github.com/google-ai-edge/gallery), que también se distribuye en Android y como APK directo — esta reseña no evalúa la versión de Android. En iOS ejecuta la familia de modelos Gemma de Google, incluida la generación actual Gemma 4, completamente sin conexión una vez descargado un modelo, y permite importar modelos adicionales desde [Hugging Face](https://huggingface.co/) en formato LiteRT. La pregunta práctica para un lector que compara apps de IA en el dispositivo para iPhone es cómo se compara una app gratuita, mantenida por Google, oficialmente etiquetada como "beta experimental", frente a alternativas de pago más pulidas como [Private LLM](/es/power-local-llm/private-llm-review) o gratuitas como [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
    metaDescription:
      'Google AI Edge Gallery, reseña 2026: app iOS gratuita (ID App Store 6749645337), chat Gemma 4 en el dispositivo vía LiteRT-LM, 4,0 estrellas/160+ valoraciones. Funciones, privacidad y comparación con Private LLM y PocketPal AI.',
    twitterDescription:
      'Google AI Edge Gallery, reseña 2026: la app iOS gratuita de Google para ejecutar Gemma 4 completamente en el dispositivo vía LiteRT-LM. Funciones, etiqueta de privacidad de la App Store y comparación con Private LLM y PocketPal AI.',
    audience:
      'Usuarios de iPhone e iPad que evalúan la app gratuita de IA en el dispositivo de Google — cubre las funciones, el soporte de Gemma 4, la etiqueta de privacidad de la App Store, la relación entre la app de iOS y el proyecto más amplio de Android/GitHub, y la comparación con alternativas de pago y gratuitas.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Google AI Edge Gallery reseña',
    targetKeywords: [
      'google ai edge gallery reseña',
      'google ai edge gallery ios',
      'google ai edge gallery app',
      'gemma 4 en el dispositivo iphone',
      'litert-lm reseña',
      'google ai edge gallery vs private llm',
      'google ai edge gallery vs pocketpal ai',
      'app ia local gratuita iphone',
    ],
    current_models_mentioned: ['Gemma 4 E2B', 'Gemma 4 E4B', 'Gemma 4 26B', 'Gemma 4 31B', 'Gemma 4 12B Unified', 'Gemma 3n'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iOS 17+)', 'Mac con Apple Silicon (M1 o posterior, macOS 14+)', 'Apple Vision Pro (visionOS 1.0+)'],
    leadAnswerBlock:
      '**Google AI Edge Gallery es una app iOS gratuita de [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) que ejecuta Gemma 4 y otros modelos de código abierto completamente en el dispositivo mediante el motor [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) de Google, sin suscripción y sin costo por mensaje.** Es la versión iOS del proyecto de código abierto [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), que también existe para Android; el propio Google etiqueta la app como "beta experimental". Una vez descargado un modelo, el chat funciona sin conexión, pero la etiqueta de privacidad de la App Store muestra que Google sigue recopilando algunos diagnósticos del dispositivo y datos de uso — no es una app sin ningún tipo de telemetría, aunque el contenido de los mensajes permanece en el dispositivo. Los lectores que quieran una alternativa de pago más pulida deberían compararla con [Private LLM](/es/power-local-llm/private-llm-review); quienes quieran una alternativa gratuita y de código abierto con importación manual de GGUF, con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar Google AI Edge Gallery en un iPhone?',
        answer:
          'Sí, si quieres acceso gratuito y sin cuenta a los modelos Gemma 4 actuales de Google funcionando completamente en el dispositivo, y te resulta aceptable una app que el propio Google etiqueta como "beta experimental" en lugar de un producto de consumo pulido. Es una excelente opción para probar el razonamiento en el dispositivo y las funciones multimodales de Gemma 4 sin costo. Sáltatela si buscas una experiencia de app más madura y activamente cuidada — [Private LLM](/es/power-local-llm/private-llm-review) y [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) están ambas más establecidas en ese aspecto.',
        bullets: [
          'Gratis en la Apple App Store; sin suscripción, sin compras dentro de la app.',
          'Ejecuta Gemma 4 (E2B, E4B, 26B, 31B, 12B Unified) y otros modelos de código abierto vía el motor LiteRT-LM de Google.',
          'iPhone, iPad, Mac y Apple Vision Pro — requiere iOS 17.0+ o macOS 14.0+ con Apple Silicon.',
          'También disponible como app Android de código abierto y APK directo en github.com/google-ai-edge/gallery — esta reseña cubre solo la ficha de iOS.',
          'La etiqueta de privacidad de la App Store indica que se recopilan el identificador del dispositivo, datos de rendimiento y diagnósticos — el contenido del chat permanece en el dispositivo, pero no es una app de "cero datos".',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Google AI Edge Gallery', anchor: 'what-is-google-ai-edge-gallery' },
      { label: 'Consigue la app', anchor: 'get-it' },
      { label: 'Modelos: Gemma 4 y LiteRT-LM', anchor: 'models' },
      { label: 'Plataformas: App Store de iOS vs. el proyecto de código abierto', anchor: 'platforms' },
      { label: 'Privacidad: qué dice realmente la etiqueta de la App Store', anchor: 'privacy' },
      { label: 'Historia e hitos de versiones', anchor: 'history' },
      { label: 'Compensaciones: ventajas vs. limitaciones', anchor: 'tradeoffs' },
      { label: 'Google AI Edge Gallery frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quién es adecuada Google AI Edge Gallery', anchor: 'who-should-use' },
      { label: 'Para quién no es adecuada Google AI Edge Gallery', anchor: 'who-should-not-use' },
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
            text: 'Google AI Edge Gallery es una app iOS gratuita (ID App Store 6749645337, versión 1.0.10) que ejecuta Gemma 4 y otros modelos de código abierto completamente en el dispositivo vía el motor LiteRT-LM de Google, etiquetada por el propio Google como "beta experimental".',
          },
          {
            type: 'plain-terms',
            text: 'Es la app de muestra de Google para probar sus propios modelos Gemma directamente en tu teléfono, sin conexión, sin cuenta ni suscripción — el mismo proyecto de código abierto subyacente también tiene una versión Android y un repositorio de código fuente descargable.',
          },
        ],
        items: [
          'Precio: gratis en la [Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337); sin suscripción, sin compras dentro de la app.',
          'Desarrollador: Google LLC, versión actual 1.0.10 (lanzada el 4 de septiembre de 2026), valorada con 4,0 de 5 en más de 160 valoraciones.',
          'Plataformas (ficha iOS): iPhone y iPad con iOS 17.0+, Mac con macOS 14.0+ y chip Apple M1 o posterior, Apple Vision Pro con visionOS 1.0+.',
          'Modelos: familia Gemma 4 (E2B, E4B, 26B, 31B y la variante multimodal 12B Unified), además de Gemma 3n; se pueden importar modelos personalizados desde Hugging Face en formato LiteRT.',
          'Código abierto: el proyecto subyacente [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) tiene licencia Apache 2.0 y también existe para Android y como APK directo — esta reseña cubre la versión de la App Store de iOS.',
          'Estado: el propio README de GitHub de Google describe el proyecto como una "versión beta experimental".',
          'Privacidad: la etiqueta de la App Store indica que el identificador del dispositivo, los datos de rendimiento y los diagnósticos están vinculados a tu identidad, y que la ubicación aproximada, los datos de interacción con el producto y los informes de fallos se recopilan sin vincularse a tu identidad — los mensajes de chat se procesan en el dispositivo, pero no es una app sin telemetría.',
        ],
      },
      whatIsGoogleAIEdgeGallery: {
        id: 'what-is-google-ai-edge-gallery',
        title: 'Qué es Google AI Edge Gallery',
        content: [
          '**Google AI Edge Gallery es la app de muestra propia de Google para ejecutar modelos de IA generativa de código abierto directamente en un teléfono, tableta o Mac, sin viaje de ida y vuelta a un servidor para la inferencia.** Está construida sobre [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM), el framework de inferencia orientado a producción de Google para modelos de lenguaje grandes en dispositivos periféricos, que a su vez sucedió a la antigua API MediaPipe LLM Inference usada en versiones anteriores del proyecto.',
          'La ficha de iOS reseñada aquí es [Google AI Edge Gallery en la Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (ID de App Store 6749645337), desarrollada y publicada por Google LLC, actualmente en la versión 1.0.10 y valorada con 4,0 de 5 estrellas en más de 160 valoraciones. Es una descarga gratuita, sin nivel de suscripción.',
          'Esta misma app es un canal de distribución de un proyecto de código abierto más amplio, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), que Google describe como "el destino preferido para ejecutar los modelos de lenguaje grandes (LLM) de código abierto más potentes del mundo en tu dispositivo móvil". Ese proyecto también incluye una versión Android (vía Google Play y APK directo) y versiones de escritorio. La propia documentación del proyecto de Google etiqueta todo el esfuerzo como una **"versión beta experimental"** en lugar de un producto de consumo terminado — una distinción que esta reseña trata como sustancial, no como formalidad, dado que Google AI Edge Gallery se compara a lo largo de este grupo con apps construidas específicamente como productos de consumo pulidos.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'Consigue la app',
        itemHeadings: true,
        content: [
          '**Google AI Edge Gallery es gratuita para descargar, sin paso de compra.** El llamado a la acción de esta reseña cubre específicamente la ficha de iOS; los canales de Android y código fuente son descargas separadas del mismo proyecto de código abierto subyacente, no la misma instalación.',
          'Esta reseña es un artículo complementario a [la ficha de Google AI Edge Gallery en el directorio de software de IA local](/es/power-local-llm/local-llm-software-directory), que la lista junto a todas las demás apps móviles de IA local cubiertas en este sitio.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla', 'Notas'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Dónde conseguirla': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Notas': 'Gratis. Requiere iOS 17.0 o posterior. Esta es la ficha evaluada por esta reseña.',
          },
          {
            'Plataforma': 'Mac',
            'Dónde conseguirla': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Notas': 'Misma ficha de App Store; requiere macOS 14.0+ y Apple M1 o posterior.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'Dónde conseguirla': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Notas': 'Listada como compatible con visionOS 1.0+; no probada directamente para esta reseña.',
          },
          {
            'Plataforma': 'Android',
            'Dónde conseguirla': '[google-ai-edge/gallery en GitHub](https://github.com/google-ai-edge/gallery)',
            'Notas': 'Una versión separada del mismo proyecto de código abierto vía Google Play o APK directo — no cubierta por esta reseña.',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde conseguirla': '[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            'Notas': 'Licencia Apache 2.0; el repositorio detrás de todos los canales de distribución anteriores.',
          },
        ],
        note: 'La disponibilidad, el precio y los números de versión en la App Store pueden cambiar sin previo aviso. Confirma la ficha actual en la [página de la App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) antes de instalar. Verificado para esta reseña el 2026-09-12.',
      },
      models: {
        id: 'models',
        title: 'Modelos: Gemma 4 y LiteRT-LM',
        content: [
          '**Google AI Edge Gallery se centra en la familia de modelos Gemma de Google, actualmente la generación Gemma 4 lanzada el 2 de abril de 2026.** Gemma 4 se distribuye en varios tamaños — E2B y E4B (diseñados para teléfonos), una variante 26B de mezcla de expertos, una variante 31B, y un modelo multimodal **Gemma 4 12B Unified** que maneja texto, imagen y, según la propia documentación de Google, entrada de audio en una sola arquitectura. La app también admite **Gemma 3n**, una versión Gemma anterior que añadió comprensión de audio a la pila en el dispositivo antes del lanzamiento de Gemma 4.',
          'Más allá de los modelos Gemma incluidos, la app permite **importar tus propios modelos desde Hugging Face en formato LiteRT**, mediante una URL de ficha de modelo dentro de la pantalla de gestión de modelos de la app. La propia documentación de Google confirma esta integración con Hugging Face para descubrimiento y descarga de modelos, pero no detalla si se requiere un token de acceso de Hugging Face para repositorios de modelos restringidos — esta reseña trata ese punto como no confirmado en lugar de asumir un flujo de token específico; verifica las instrucciones actuales dentro de la app antes de intentar importar un modelo restringido.',
          'En cuanto a funciones, la app agrupa varios modos en torno a estos modelos: **AI Chat con Thinking Mode** (que muestra los pasos de razonamiento intermedios del modelo), **Ask Image** (análisis multimodal de una foto de la cámara o la galería), **Audio Scribe** (transcripción y traducción de voz en el dispositivo), **Agent Skills** (acceso a herramientas externas, como una búsqueda en Wikipedia, sobre el modelo base), y una pantalla de **gestión de modelos y benchmarking** para comparar el tamaño de descarga y el rendimiento en el dispositivo antes de decidirse por uno.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plataformas: App Store de iOS vs. el proyecto de código abierto',
        itemHeadings: true,
        columns: ['Plataforma', 'Qué esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Qué esperar': 'Requiere iOS 17.0 o posterior, según la ficha de App Store evaluada por esta reseña.',
            'Nota importante': 'Esta es la plataforma principal que cubre esta reseña; la generación de chip compatible no se detalla por separado del requisito de SO en la ficha.',
          },
          {
            'Plataforma': 'Mac',
            'Qué esperar': 'Requiere macOS 14.0 o posterior con chip Apple M1 o más reciente.',
            'Nota importante': 'Mismo binario universal y ficha de App Store que la app de iPhone/iPad; los Mac Intel no son compatibles según el requisito indicado.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'Qué esperar': 'Listada como compatible, requiere visionOS 1.0 o posterior.',
            'Nota importante': 'Esta reseña no probó directamente la experiencia en Vision Pro — trátese como compatibilidad listada en la App Store, no una función verificada de forma práctica.',
          },
          {
            'Plataforma': 'Android',
            'Qué esperar': 'Una versión separada del mismo proyecto de código abierto está disponible vía Google Play (pasó de distribución solo por GitHub a beta abierta en Google Play, según un anuncio de Google del 9 de septiembre de 2025) o como APK directo desde GitHub.',
            'Nota importante': 'No es la misma instalación que la app de la App Store de iOS que cubre esta reseña; no asumas que el comportamiento específico de iOS (por ejemplo, la etiqueta de privacidad exacta) se traslada a la versión Android.',
          },
          {
            'Plataforma': 'El proyecto de código abierto más amplio',
            'Qué esperar': '[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) tiene licencia Apache 2.0 y abarca distribución en Android, iOS y escritorio.',
            'Nota importante': 'La propia documentación de Google etiqueta todo el esfuerzo como una "versión beta experimental" — este estado aplica a todas las plataformas, no solo a iOS.',
          },
        ],
        note: 'Los requisitos de plataforma y el estado beta pueden cambiar entre actualizaciones — confirma los detalles actuales directamente en la [ficha de App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) o el [repositorio de GitHub](https://github.com/google-ai-edge/gallery) antes de depender de la compatibilidad con un dispositivo o SO específico.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad: qué dice realmente la etiqueta de la App Store',
        content: [
          '**La inferencia ocurre en el dispositivo una vez descargado un modelo — los mensajes de chat y las respuestas del modelo no se envían a un servidor de Google para generar una respuesta.** Dicho esto, esta no es la misma afirmación que "la app no recopila ningún dato", y esta reseña trata ambas afirmaciones por separado en lugar de mezclarlas.',
          'La etiqueta de privacidad de Apple para la [ficha de App Store de Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) indica que los **datos vinculados a tu identidad** incluyen el identificador del dispositivo, datos de rendimiento y diagnósticos, y que los **datos no vinculados a tu identidad** incluyen ubicación aproximada, datos de interacción con el producto e informes de fallos. Este es el formato estándar de etiqueta de privacidad declarada por el desarrollador de Apple, no una auditoría independiente de PromptQuorum del tráfico de red de la app.',
          'La distinción práctica para un lector preocupado por la privacidad: el contenido de tus conversaciones y cualquier imagen o audio que le des al modelo permanecen en el dispositivo durante la inferencia, pero Google sí recopila datos de tipo telemetría (identificadores del dispositivo, datos de rendimiento/diagnóstico, ubicación aproximada, informes de fallos) sobre cómo se usa la app en sí. Los lectores que necesiten una postura más estricta de "no recopila absolutamente nada" deberían comparar esto con la etiqueta de privacidad de App Store de [Private LLM](/es/power-local-llm/private-llm-review), que indica que no se recopilan datos de esa app.',
        ],
        items: [
          '**No se requiere cuenta para chatear.** La app no requiere iniciar sesión para descargar y ejecutar modelos.',
          '**El contenido del chat permanece en el dispositivo durante la inferencia.** Los mensajes y respuestas se procesan localmente mediante LiteRT-LM una vez descargado un modelo.',
          '**El identificador del dispositivo, los datos de rendimiento y los diagnósticos están vinculados a tu identidad**, según la etiqueta de privacidad de Apple para esta ficha.',
          '**La ubicación aproximada, los datos de interacción con el producto y los informes de fallos se recopilan pero no se vinculan a tu identidad**, según la misma etiqueta.',
          '**Esta reseña se basa en la etiqueta de privacidad declarada por Apple**, no en una auditoría independiente del tráfico de red de la app.',
        ],
      },
      history: {
        id: 'history',
        title: 'Historia e hitos de versiones',
        content: [
          '**Google AI Edge Gallery comenzó como un proyecto de código abierto solo en GitHub antes de llegar a las tiendas de aplicaciones.** La siguiente cronología proviene de las publicaciones del blog de Google y del repositorio de GitHub del proyecto.',
        ],
        items: [
          '**Lanzamiento inicial en GitHub.** El proyecto [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) se lanzó como una demostración de código abierto para Android/escritorio de modelos Gemma en el dispositivo, distribuida inicialmente como un APK directo.',
          '**9 de septiembre de 2025.** La [publicación de blog de anuncio](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) de Google confirmó el paso de una distribución exclusiva de GitHub a una beta abierta en Google Play Store, y añadió soporte de audio (voz a texto y voz a texto traducido) vía Gemma 3n mediante la API MediaPipe LLM Inference. La propia publicación de Google indica que el proyecto alcanzó 500.000 descargas de APK en dos meses desde el lanzamiento en GitHub, y describía un plan futuro para "llevar la app a los usuarios de iOS".',
          '**2 de abril de 2026.** Google DeepMind lanzó **Gemma 4** bajo licencia Apache 2.0, en tamaños E2B, E4B, 26B y 31B, con una variante multimodal **Gemma 4 12B Unified** lanzada después, el 3 de junio de 2026.',
          '**Disponibilidad en la App Store de iOS.** Google AI Edge Gallery llegó a la App Store como [Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (ID de App Store 6749645337), cumpliendo el plan de iOS anunciado en la publicación de blog de septiembre de 2025; cobertura independiente describió a la app escalando entre las apps de productividad más descargadas en la App Store en torno al lanzamiento de Gemma 4.',
          '**Versión 1.0.10 (4 de septiembre de 2026).** La versión actual al momento de esta reseña, añadiendo, según sus notas de versión, "soporte de traducción y localización global en 100 países diferentes" además de correcciones de errores.',
        ],
        note: 'El historial de versiones y las fechas provienen del blog de desarrolladores de Google y del repositorio de GitHub del proyecto. Confirma la versión actual y las notas de versión directamente en la App Store antes de depender de una función específica.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compensaciones: ventajas vs. limitaciones',
        columns: ['Ventaja', 'Qué significa en la práctica', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Gratis, sin cuenta, sin suscripción',
            'Qué significa en la práctica': 'Instalar desde la App Store y empezar a descargar modelos sin ningún paso de compra.',
            'Limitación / advertencia': 'Google etiqueta el proyecto como "beta experimental" — espera más aristas que en una app de pago madura.',
          },
          {
            'Ventaja': 'Acceso a Gemma 4 desde el día del lanzamiento',
            'Qué significa en la práctica': 'Una de las formas más rápidas de probar la familia de modelos insignia de peso abierto actual de Google directamente en un iPhone.',
            'Limitación / advertencia': 'Los tamaños más grandes de Gemma 4 (26B, 31B) probablemente superen lo que puede ejecutar cómodamente el hardware típico de un iPhone; la app no publica un requisito fijo de RAM por modelo.',
          },
          {
            'Ventaja': 'Importación de modelos personalizados de Hugging Face',
            'Qué significa en la práctica': 'No limitado a los modelos Gemma incluidos por Google — se pueden cargar modelos en formato LiteRT desde Hugging Face.',
            'Limitación / advertencia': 'Los requisitos para repositorios restringidos de Hugging Face (como un token de acceso) no están claramente documentados; verifica las instrucciones actuales en la app antes de intentar una importación restringida.',
          },
          {
            'Ventaja': 'Inferencia en el dispositivo (LiteRT-LM)',
            'Qué significa en la práctica': 'Los mensajes y respuestas se procesan localmente una vez descargado un modelo, sin viaje de ida y vuelta a un servidor para la generación.',
            'Limitación / advertencia': 'La etiqueta de privacidad de la App Store sigue indicando que se recopilan el identificador del dispositivo, datos de rendimiento, diagnósticos, ubicación aproximada e informes de fallos — no es una app sin telemetría.',
          },
          {
            'Ventaja': 'Funciones multimodales (Ask Image, Audio Scribe)',
            'Qué significa en la práctica': 'Analizar fotos o transcribir voz en el dispositivo sin una app separada.',
            'Limitación / advertencia': 'El soporte multimodal depende del modelo Gemma cargado (el audio es compatible con Gemma 3n y ciertos tamaños de Gemma 4, no con todos los modelos de la biblioteca).',
          },
          {
            'Ventaja': 'Código abierto y multiplataforma',
            'Qué significa en la práctica': 'El mismo proyecto subyacente también funciona en Android, con el código fuente disponible en GitHub bajo licencia Apache 2.0.',
            'Limitación / advertencia': 'Esta reseña evalúa únicamente la versión de la App Store de iOS; el comportamiento, la etiqueta de privacidad y la paridad de funciones en Android no se asumen idénticos.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Google AI Edge Gallery frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio', 'Flexibilidad de modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'Google AI Edge Gallery',
            'Plataformas': 'iPhone/iPad/Mac/Vision Pro (también Android, por separado)',
            'Precio': 'Gratis',
            'Flexibilidad de modelos': 'Familia Gemma 4 incluida; modelos personalizados de Hugging Face en LiteRT importables',
            'Diferencia clave': 'Construida por Google, etiquetada "beta experimental", vía más rápida a Gemma 4 en iPhone',
          },
          {
            'App': '[Private LLM](/es/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Precio': 'Compra única de $4,99',
            'Flexibilidad de modelos': '140+ modelos seleccionados; cuantización OmniQuant/GPTQ',
            'Diferencia clave': 'De pago, código cerrado, más pulida y activamente mantenida como producto de consumo',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, con algo de soporte Android',
            'Precio': 'Gratis, código abierto',
            'Flexibilidad de modelos': 'Cualquier archivo GGUF que el usuario obtenga de Hugging Face u otro lugar',
            'Diferencia clave': 'Gratuita y totalmente de código abierto como Google AI Edge Gallery, pero no ligada a Gemma ni a LiteRT-LM',
          },
          {
            'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Plataformas': 'iPhone/iPad/Mac',
            'Precio': 'Gratis',
            'Flexibilidad de modelos': 'Ejecuta Llama, Gemma, Qwen y DeepSeek sin conexión, construido sobre Apple MLX',
            'Diferencia clave': 'Gratuita como Google AI Edge Gallery, pero construida sobre el propio framework MLX de Apple en lugar de LiteRT-LM',
          },
          {
            'App': '[Loci AI](/es/power-local-llm/loci-ai-review-offline-local-ai)',
            'Plataformas': 'iPhone/iPad/Android/Mac/Windows',
            'Precio': 'Ver ficha actual',
            'Flexibilidad de modelos': 'Biblioteca seleccionada de ~10 modelos; Gemma 4 E2B/E4B entre los modelos compatibles',
            'Diferencia clave': 'Alcance multiplataforma más amplio que la versión iOS de Google AI Edge Gallery, con una lista de modelos más reducida',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia — verifica las especificaciones actuales en la ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es adecuada Google AI Edge Gallery',
        items: [
          '**Lectores que quieren probar Gemma 4 en un iPhone sin costo.** Es una de las formas más rápidas de ejecutar la familia de modelos insignia de peso abierto actual de Google completamente en el dispositivo.',
          '**Desarrolladores que evalúan LiteRT-LM.** La app también sirve como demostración práctica del motor de inferencia en el dispositivo de Google, útil antes de integrar LiteRT-LM en tu propio proyecto.',
          '**Lectores que quieren experimentar con modelos personalizados de Hugging Face en formato LiteRT** sin configurar primero un entorno de desarrollo completo.',
          '**Lectores cómodos con la etiqueta "beta experimental"**, que priorizan probar los lanzamientos más recientes de Gemma sobre una app de consumo totalmente pulida y establecida desde hace tiempo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es adecuada Google AI Edge Gallery',
        items: [
          '**Lectores que quieren un producto de consumo maduro y activamente cuidado.** [Private LLM](/es/power-local-llm/private-llm-review) y [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) tienen ambas un historial más largo como apps mantenidas y fuera de beta.',
          '**Lectores que quieren la etiqueta de privacidad más estricta posible.** La ficha de App Store muestra que se recopilan el identificador del dispositivo, datos de rendimiento, diagnósticos, ubicación aproximada e informes de fallos — la etiqueta de [Private LLM](/es/power-local-llm/private-llm-review) indica que no se recopila ningún dato en absoluto.',
          '**Lectores que necesitan soporte de Android en la misma instalación.** La versión Android es una descarga separada desde [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), no la app de la App Store de iOS que cubre esta reseña.',
          '**Lectores que quieren ejecutar los tamaños más grandes de Gemma 4 en un teléfono.** Es poco probable que las variantes 26B y 31B funcionen cómodamente dentro de la memoria típica de un iPhone; la app no publica un límite fijo de RAM por modelo para confirmarlo.',
          '**Equipos que quieren un despliegue multiusuario gestionado de forma centralizada.** Esta es una app de consumo de un solo usuario y un solo dispositivo, sin consola de administración ni gestión de licencias compartidas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Google AI Edge Gallery?',
            a: 'Sí. La [ficha de App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) es gratuita para descargar, sin suscripción ni compras dentro de la app, verificado para esta reseña el 2026-09-12.',
          },
          {
            q: '¿Qué modelos ejecuta Google AI Edge Gallery?',
            a: 'Ejecuta la familia de modelos Gemma de Google, actualmente la generación Gemma 4 (E2B, E4B, 26B, 31B y la variante multimodal 12B Unified, lanzadas entre abril y junio de 2026), además del anterior Gemma 3n. Los usuarios también pueden importar modelos personalizados desde Hugging Face en formato LiteRT.',
          },
          {
            q: '¿Google AI Edge Gallery funciona también en Android?',
            a: 'Sí, pero como una distribución separada. El proyecto de código abierto subyacente, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), ofrece una versión Android vía Google Play y APK directo, además de la ficha de App Store de iOS que cubre esta reseña.',
          },
          {
            q: '¿Google AI Edge Gallery recopila mis datos?',
            a: 'Los mensajes de chat y las respuestas del modelo se procesan en el dispositivo una vez descargado un modelo, pero la etiqueta de privacidad de Apple para la ficha de iOS indica que el identificador del dispositivo, datos de rendimiento y diagnósticos están vinculados a tu identidad, y que la ubicación aproximada, datos de interacción con el producto e informes de fallos se recopilan sin vincularse a tu identidad. No es una app sin datos, aunque la inferencia en sí se ejecuta localmente.',
          },
          {
            q: '¿Qué es LiteRT-LM?',
            a: '[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) es el framework de inferencia de código abierto orientado a producción de Google para ejecutar modelos de lenguaje grandes en dispositivos periféricos como teléfonos. Sucedió a la antigua API MediaPipe LLM Inference usada en versiones anteriores de la app Gallery.',
          },
          {
            q: '¿Puedo importar mi propio modelo en Google AI Edge Gallery?',
            a: 'Sí — la propia documentación de Google confirma que la app admite cargar modelos personalizados desde Hugging Face en formato LiteRT mediante una URL de ficha de modelo. Los detalles sobre los requisitos para repositorios restringidos de Hugging Face, como si se necesita un token de acceso, no están claramente documentados; revisa las instrucciones actuales en la app antes de intentarlo.',
          },
          {
            q: '¿Google AI Edge Gallery es un producto terminado o una beta?',
            a: 'La propia documentación del proyecto de Google en GitHub la describe como una "versión beta experimental" y pide comentarios de los usuarios — este estado aplica al proyecto subyacente en iOS, Android y escritorio, no solo a una plataforma.',
          },
          {
            q: '¿Qué dispositivos admite la versión de iOS?',
            a: 'Según la ficha de App Store: iPhone y iPad con iOS 17.0 o posterior, Mac con macOS 14.0 o posterior y chip Apple M1 o más reciente, y Apple Vision Pro con visionOS 1.0 o posterior.',
          },
          {
            q: '¿Cómo se compara Google AI Edge Gallery con Private LLM?',
            a: 'Google AI Edge Gallery es gratuita, construida por Google, etiquetada como beta experimental y centrada en los modelos Gemma vía LiteRT-LM. [Private LLM](/es/power-local-llm/private-llm-review) es una compra única de $4,99, de código cerrado, y ofrece una biblioteca seleccionada más amplia de 140+ modelos con un historial más largo como app de consumo mantenida. Elige Google AI Edge Gallery para probar Gemma 4 sin costo; elige Private LLM para una experiencia de pago más pulida y activamente mantenida.',
          },
          {
            q: '¿Google AI Edge Gallery admite entrada de audio e imagen?',
            a: 'Sí, dependiendo del modelo cargado. Ask Image ofrece análisis multimodal de fotos, y Audio Scribe ofrece transcripción y traducción de voz en el dispositivo; el soporte de audio en los modelos Gemma subyacentes comenzó con Gemma 3n y continúa en ciertos tamaños de Gemma 4, incluida la variante 12B Unified.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Google AI Edge Gallery se gana un lugar en este grupo como la forma más rápida y gratuita de ejecutar los propios modelos Gemma 4 de Google completamente en un iPhone, respaldada por el motor de producción LiteRT-LM de Google en lugar de una capa de terceros sobre un modelo de código abierto. Su soporte de importación de Hugging Face y sus funciones multimodales (Ask Image, Audio Scribe, Thinking Mode) van más allá de un cliente de chat básico. Las compensaciones son igual de reales: el propio Google etiqueta el proyecto como "beta experimental", la etiqueta de privacidad de la App Store de iOS muestra más recopilación de datos que los competidores más estrictos en privacidad, y la app tiene un historial más corto como producto de consumo mantenido que apps como Private LLM. Los lectores que quieran específicamente los modelos Gemma más recientes sin costo, o que estén evaluando LiteRT-LM como desarrolladores, deberían instalarla. Quienes quieran la app de IA local móvil más pulida, más establecida o más estricta en privacidad deberían compararla primero con [Private LLM](/es/power-local-llm/private-llm-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Google AI Edge Gallery en la App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) — precio, requisitos de plataforma, etiqueta de privacidad, valoraciones e historial de versiones.',
          '[google-ai-edge/gallery en GitHub](https://github.com/google-ai-edge/gallery) — descripción del proyecto, plataformas compatibles, importación de Hugging Face, licencia y estado beta.',
          '[LiteRT-LM en GitHub](https://github.com/google-ai-edge/LiteRT-LM) — el motor de inferencia en el dispositivo sobre el que se construye la app.',
          '[Publicación de blog de anuncio de Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — anuncio del 9 de septiembre de 2025 sobre soporte de audio y disponibilidad en Google Play.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Private LLM](/es/power-local-llm/private-llm-review) — una alternativa de pago más pulida con una biblioteca de modelos seleccionada más amplia.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una alternativa gratuita y de código abierto con importación manual de GGUF.',
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una alternativa gratuita basada en Apple MLX que admite familias de modelos similares.',
          '[Reseña de Loci AI](/es/power-local-llm/loci-ai-review-offline-local-ai) — una app multiplataforma en el dispositivo que también admite Gemma 4.',
          '[El directorio completo de software de IA local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas de IA local en todas las plataformas, incluida la ficha de Google AI Edge Gallery.',
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
    heroImage: '/images/google-ai-edge-gallery-review-hero-pt.webp',
    title: 'Google AI Edge Gallery: análise (2026) — chat Gemma 4 no dispositivo para iPhone',
    seoTitle: 'Google AI Edge Gallery 2026: app Gemma para iOS',
    intro:
      'Google AI Edge Gallery é um aplicativo gratuito da [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) que executa modelos de IA de código aberto inteiramente em um iPhone, iPad ou Mac, usando o mecanismo de inferência no dispositivo da Google, [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM). Esta análise cobre especificamente a ficha da App Store para iOS (ID da App Store 6749645337, versão 1.0.10, 4,0 estrelas com mais de 160 avaliações no momento desta análise) — um artigo complementar à [ficha do Google AI Edge Gallery no diretório de software de IA local](/pt/power-local-llm/local-llm-software-directory). O app é a interface para o usuário de um projeto de código aberto mais amplo, [google-ai-edge/gallery no GitHub](https://github.com/google-ai-edge/gallery), também distribuído no Android e como APK direto — esta análise não avalia a versão Android. No iOS, ele executa a família de modelos Gemma da Google, incluindo a geração atual Gemma 4, totalmente offline após o download de um modelo, e permite importar modelos adicionais do [Hugging Face](https://huggingface.co/) no formato LiteRT. A questão prática para um leitor comparando apps de IA no dispositivo para iPhone é como um app gratuito, mantido pela Google, oficialmente rotulado como "beta experimental", se compara a alternativas pagas mais polidas como [Private LLM](/pt/power-local-llm/private-llm-review) ou gratuitas como [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
    metaDescription:
      'Google AI Edge Gallery, análise 2026: app iOS gratuito (ID App Store 6749645337), chat Gemma 4 no dispositivo via LiteRT-LM, 4,0 estrelas/160+ avaliações. Recursos, privacidade e comparação com Private LLM e PocketPal AI.',
    twitterDescription:
      'Google AI Edge Gallery, análise 2026: o app iOS gratuito da Google para rodar Gemma 4 totalmente no dispositivo via LiteRT-LM. Recursos, rótulo de privacidade da App Store e comparação com Private LLM e PocketPal AI.',
    audience:
      'Usuários de iPhone e iPad avaliando o app gratuito de IA no dispositivo da Google — cobre recursos, suporte ao Gemma 4, o rótulo de privacidade da App Store, a relação entre o app iOS e o projeto Android/GitHub mais amplo, e a comparação com alternativas pagas e gratuitas.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Google AI Edge Gallery análise',
    targetKeywords: [
      'google ai edge gallery análise',
      'google ai edge gallery ios',
      'google ai edge gallery app',
      'gemma 4 no dispositivo iphone',
      'litert-lm análise',
      'google ai edge gallery vs private llm',
      'google ai edge gallery vs pocketpal ai',
      'app ia local gratuito iphone',
    ],
    current_models_mentioned: ['Gemma 4 E2B', 'Gemma 4 E4B', 'Gemma 4 26B', 'Gemma 4 31B', 'Gemma 4 12B Unified', 'Gemma 3n'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iOS 17+)', 'Mac com Apple Silicon (M1 ou posterior, macOS 14+)', 'Apple Vision Pro (visionOS 1.0+)'],
    leadAnswerBlock:
      '**Google AI Edge Gallery é um app iOS gratuito da [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) que executa o Gemma 4 e outros modelos de código aberto inteiramente no dispositivo por meio do mecanismo [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) da Google, sem assinatura e sem custo por mensagem.** É a versão iOS do projeto de código aberto [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), também disponível para Android; a própria Google rotula o app como "beta experimental". Uma vez baixado um modelo, o chat funciona offline, mas o rótulo de privacidade da App Store mostra que a Google ainda coleta alguns diagnósticos do dispositivo e dados de uso — não é um app sem nenhuma telemetria, mesmo que o conteúdo das mensagens permaneça no dispositivo. Leitores que queiram uma alternativa paga mais polida devem compará-lo com [Private LLM](/pt/power-local-llm/private-llm-review); quem quiser uma alternativa gratuita e de código aberto com importação manual de GGUF, com [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o Google AI Edge Gallery em um iPhone?',
        answer:
          'Sim, se você quer acesso gratuito e sem conta aos modelos Gemma 4 atuais da Google rodando totalmente no dispositivo, e está confortável com um app que a própria Google rotula como "beta experimental" em vez de um produto de consumo polido. É uma ótima opção para experimentar o raciocínio no dispositivo e os recursos multimodais do Gemma 4 sem custo. Pule se você quer uma experiência de app mais madura e ativamente cuidada — [Private LLM](/pt/power-local-llm/private-llm-review) e [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) são ambos mais estabelecidos nesse aspecto.',
        bullets: [
          'Gratuito na Apple App Store; sem assinatura, sem compras no app.',
          'Executa o Gemma 4 (E2B, E4B, 26B, 31B, 12B Unified) e outros modelos de código aberto via mecanismo LiteRT-LM da Google.',
          'iPhone, iPad, Mac e Apple Vision Pro — requer iOS 17.0+ ou macOS 14.0+ com Apple Silicon.',
          'Também disponível como app Android de código aberto e APK direto em github.com/google-ai-edge/gallery — esta análise cobre apenas a ficha iOS.',
          'O rótulo de privacidade da App Store lista identificador do dispositivo, dados de desempenho e diagnósticos como coletados — o conteúdo do chat permanece no dispositivo, mas não é um app de "zero dados".',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Google AI Edge Gallery', anchor: 'what-is-google-ai-edge-gallery' },
      { label: 'Baixe o app', anchor: 'get-it' },
      { label: 'Modelos: Gemma 4 e LiteRT-LM', anchor: 'models' },
      { label: 'Plataformas: App Store iOS vs. o projeto de código aberto', anchor: 'platforms' },
      { label: 'Privacidade: o que o rótulo da App Store realmente diz', anchor: 'privacy' },
      { label: 'Histórico e marcos de versão', anchor: 'history' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'Google AI Edge Gallery vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Google AI Edge Gallery é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o Google AI Edge Gallery não é indicado', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
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
            text: 'Google AI Edge Gallery é um app iOS gratuito (ID App Store 6749645337, versão 1.0.10) que executa o Gemma 4 e outros modelos de código aberto inteiramente no dispositivo via mecanismo LiteRT-LM da Google, rotulado pela própria Google como "beta experimental".',
          },
          {
            type: 'plain-terms',
            text: 'É o app-vitrine da própria Google para experimentar seus modelos Gemma diretamente no celular, offline, sem conta nem assinatura — o mesmo projeto de código aberto subjacente também tem uma versão Android e um repositório de código-fonte para download.',
          },
        ],
        items: [
          'Preço: gratuito na [Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337); sem assinatura, sem compras no app.',
          'Desenvolvedor: Google LLC, versão atual 1.0.10 (lançada em 4 de setembro de 2026), avaliada com 4,0 de 5 em mais de 160 avaliações.',
          'Plataformas (ficha iOS): iPhone e iPad com iOS 17.0+, Mac com macOS 14.0+ e chip Apple M1 ou posterior, Apple Vision Pro com visionOS 1.0+.',
          'Modelos: família Gemma 4 (E2B, E4B, 26B, 31B e a variante multimodal 12B Unified), além do Gemma 3n; modelos personalizados podem ser importados do Hugging Face no formato LiteRT.',
          'Código aberto: o projeto subjacente [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) tem licença Apache 2.0 e também é distribuído para Android e como APK direto — esta análise cobre a versão da App Store para iOS.',
          'Status: o próprio README do GitHub da Google descreve o projeto como uma "versão beta experimental".',
          'Privacidade: o rótulo da App Store indica que identificador do dispositivo, dados de desempenho e diagnósticos estão vinculados à sua identidade, e que localização aproximada, dados de interação com o produto e relatórios de falhas são coletados sem vínculo com sua identidade — as mensagens de chat rodam no dispositivo, mas não é um app sem telemetria.',
        ],
      },
      whatIsGoogleAIEdgeGallery: {
        id: 'what-is-google-ai-edge-gallery',
        title: 'O que é o Google AI Edge Gallery',
        content: [
          '**Google AI Edge Gallery é o próprio app-vitrine da Google para rodar modelos de IA generativa de código aberto diretamente em um celular, tablet ou Mac, sem ida e volta a um servidor para a inferência.** É construído sobre o [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM), o framework de inferência voltado para produção da Google para modelos de linguagem grandes em dispositivos de borda, que sucedeu a antiga API MediaPipe LLM Inference usada em versões anteriores do projeto.',
          'A ficha iOS analisada aqui é o [Google AI Edge Gallery na Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (ID da App Store 6749645337), desenvolvido e publicado pela Google LLC, atualmente na versão 1.0.10 e avaliado com 4,0 de 5 estrelas em mais de 160 avaliações. É um download gratuito, sem nível de assinatura.',
          'Esse mesmo app é um canal de distribuição de um projeto de código aberto maior, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), que a Google descreve como "o destino principal para rodar os modelos de linguagem grandes (LLMs) de código aberto mais poderosos do mundo no seu dispositivo móvel". Esse projeto também tem uma versão Android (via Google Play e APK direto) e versões para desktop. A própria documentação do projeto da Google rotula todo o esforço como uma **"versão beta experimental"** em vez de um produto de consumo finalizado — uma distinção que esta análise trata como substancial, não formal, já que o Google AI Edge Gallery é comparado ao longo deste grupo com apps construídos especificamente como produtos de consumo polidos.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'Baixe o app',
        itemHeadings: true,
        content: [
          '**Google AI Edge Gallery é gratuito para baixar, sem etapa de compra.** O CTA desta análise cobre especificamente a ficha iOS; os canais Android e código-fonte são downloads separados do mesmo projeto de código aberto subjacente, não a mesma instalação.',
          'Esta análise é um artigo complementar à [ficha do Google AI Edge Gallery no diretório de software de IA local](/pt/power-local-llm/local-llm-software-directory), que o lista ao lado de todos os outros apps móveis de IA local cobertos neste site.',
        ],
        columns: ['Plataforma', 'Onde conseguir', 'Notas'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Onde conseguir': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Notas': 'Gratuito. Requer iOS 17.0 ou posterior. Esta é a ficha avaliada nesta análise.',
          },
          {
            'Plataforma': 'Mac',
            'Onde conseguir': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Notas': 'Mesma ficha da App Store; requer macOS 14.0+ e Apple M1 ou posterior.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'Onde conseguir': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'Notas': 'Listado como compatível com visionOS 1.0+; não testado diretamente para esta análise.',
          },
          {
            'Plataforma': 'Android',
            'Onde conseguir': '[google-ai-edge/gallery no GitHub](https://github.com/google-ai-edge/gallery)',
            'Notas': 'Uma versão separada do mesmo projeto de código aberto via Google Play ou APK direto — não coberta por esta análise.',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde conseguir': '[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            'Notas': 'Licença Apache 2.0; o repositório por trás de todos os canais de distribuição acima.',
          },
        ],
        note: 'Disponibilidade, preço e números de versão na App Store podem mudar sem aviso. Confirme a ficha atual na [página da App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) antes de instalar. Verificado para esta análise em 2026-09-12.',
      },
      models: {
        id: 'models',
        title: 'Modelos: Gemma 4 e LiteRT-LM',
        content: [
          '**Google AI Edge Gallery é centrado na família de modelos Gemma da Google, atualmente a geração Gemma 4 lançada em 2 de abril de 2026.** O Gemma 4 vem em vários tamanhos — E2B e E4B (projetados para celulares), uma variante 26B de mistura de especialistas, uma variante 31B, e um modelo multimodal **Gemma 4 12B Unified** que processa texto, imagem e, segundo a própria documentação da Google, entrada de áudio em uma única arquitetura. O app também suporta o **Gemma 3n**, uma versão Gemma anterior que adicionou compreensão de áudio à pilha no dispositivo antes do lançamento do Gemma 4.',
          'Além dos modelos Gemma incluídos, o app permite **importar seus próprios modelos do Hugging Face no formato LiteRT**, por meio de uma URL de ficha de modelo na tela de gerenciamento de modelos do app. A própria documentação da Google confirma essa integração com o Hugging Face para descoberta e download de modelos, mas não detalha se um token de acesso do Hugging Face é necessário para repositórios de modelos restritos — esta análise trata isso como não confirmado em vez de assumir um fluxo específico de token; verifique as instruções atuais no app antes de tentar importar um modelo restrito.',
          'Em termos de recursos, o app reúne vários modos em torno desses modelos: **AI Chat com Thinking Mode** (que exibe as etapas intermediárias de raciocínio do modelo), **Ask Image** (análise multimodal de uma foto da câmera ou da galeria), **Audio Scribe** (transcrição e tradução de voz no dispositivo), **Agent Skills** (acesso a ferramentas externas, como uma busca na Wikipédia, sobre o modelo base), e uma tela de **gerenciamento de modelos e benchmarking** para comparar tamanho de download e desempenho no dispositivo antes de escolher um.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Plataformas: App Store iOS vs. o projeto de código aberto',
        itemHeadings: true,
        columns: ['Plataforma', 'O que esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'O que esperar': 'Requer iOS 17.0 ou posterior, segundo a ficha da App Store avaliada nesta análise.',
            'Nota importante': 'Esta é a plataforma principal desta análise; a geração de chip compatível não é detalhada separadamente do requisito de SO na ficha.',
          },
          {
            'Plataforma': 'Mac',
            'O que esperar': 'Requer macOS 14.0 ou posterior com chip Apple M1 ou mais recente.',
            'Nota importante': 'Mesmo binário universal e ficha de App Store que o app iPhone/iPad; Macs Intel não são suportados segundo o requisito listado.',
          },
          {
            'Plataforma': 'Apple Vision Pro',
            'O que esperar': 'Listado como compatível, requer visionOS 1.0 ou posterior.',
            'Nota importante': 'Esta análise não testou diretamente a experiência no Vision Pro — trate como compatibilidade listada na App Store, não um recurso verificado na prática.',
          },
          {
            'Plataforma': 'Android',
            'O que esperar': 'Uma versão separada do mesmo projeto de código aberto está disponível via Google Play (passou de distribuição exclusiva pelo GitHub para beta aberto no Google Play, segundo um anúncio da Google de 9 de setembro de 2025) ou como APK direto do GitHub.',
            'Nota importante': 'Não é a mesma instalação que o app da App Store iOS coberto por esta análise; não assuma que o comportamento específico do iOS (por exemplo, o rótulo exato de privacidade) se aplique à versão Android.',
          },
          {
            'Plataforma': 'O projeto de código aberto mais amplo',
            'O que esperar': '[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) tem licença Apache 2.0 e abrange distribuição para Android, iOS e desktop.',
            'Nota importante': 'A própria documentação da Google rotula todo o esforço como uma "versão beta experimental" — esse status se aplica a todas as plataformas, não só ao iOS.',
          },
        ],
        note: 'Requisitos de plataforma e status beta podem mudar entre atualizações — confirme os detalhes atuais diretamente na [ficha da App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) ou no [repositório do GitHub](https://github.com/google-ai-edge/gallery) antes de contar com suporte a um dispositivo ou SO específico.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade: o que o rótulo da App Store realmente diz',
        content: [
          '**A inferência acontece no dispositivo depois que um modelo é baixado — mensagens de chat e respostas do modelo não são enviadas a um servidor da Google para gerar uma resposta.** Dito isso, essa não é a mesma afirmação que "o app não coleta nenhum dado", e esta análise trata as duas afirmações separadamente em vez de misturá-las.',
          'O rótulo de privacidade da Apple para a [ficha da App Store do Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) informa que **dados vinculados à sua identidade** incluem identificador do dispositivo, dados de desempenho e diagnósticos, e que **dados não vinculados à sua identidade** incluem localização aproximada, dados de interação com o produto e relatórios de falhas. Este é o formato padrão de rótulo de privacidade declarado pelo desenvolvedor da Apple, não uma auditoria independente do tráfego de rede do app pela PromptQuorum.',
          'A distinção prática para um leitor preocupado com privacidade: o conteúdo das suas conversas e quaisquer imagens ou áudios que você fornecer ao modelo permanecem no dispositivo durante a inferência, mas a Google ainda coleta dados do tipo telemetria (identificadores do dispositivo, dados de desempenho/diagnóstico, localização aproximada, relatórios de falhas) sobre como o app em si é usado. Leitores que precisem de uma postura mais rígida de "não coleta absolutamente nada" devem comparar isso com o rótulo de privacidade da App Store do [Private LLM](/pt/power-local-llm/private-llm-review), que declara que nenhum dado é coletado por aquele app.',
        ],
        items: [
          '**Nenhuma conta necessária para conversar.** O app não exige login para baixar e executar modelos.',
          '**O conteúdo do chat permanece no dispositivo durante a inferência.** Mensagens e respostas são processadas localmente pelo LiteRT-LM depois que um modelo é baixado.',
          '**Identificador do dispositivo, dados de desempenho e diagnósticos estão vinculados à sua identidade**, segundo o rótulo de privacidade da Apple para esta ficha.',
          '**Localização aproximada, dados de interação com o produto e relatórios de falhas são coletados, mas não vinculados à sua identidade**, segundo o mesmo rótulo.',
          '**Esta análise se baseia no rótulo de privacidade declarado pela Apple**, não em uma auditoria independente do tráfego de rede do app.',
        ],
      },
      history: {
        id: 'history',
        title: 'Histórico e marcos de versão',
        content: [
          '**Google AI Edge Gallery começou como um projeto de código aberto exclusivo do GitHub antes de chegar às lojas de aplicativos.** A linha do tempo abaixo tem como fonte as próprias publicações do blog da Google e o repositório GitHub do projeto.',
        ],
        items: [
          '**Lançamento inicial no GitHub.** O projeto [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) começou como uma vitrine de código aberto para Android/desktop de modelos Gemma no dispositivo, distribuída inicialmente como APK direto.',
          '**9 de setembro de 2025.** A [publicação de blog de anúncio](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) da própria Google confirmou a mudança de distribuição exclusiva pelo GitHub para um beta aberto na Google Play Store, e adicionou suporte a áudio (fala-para-texto e fala-para-texto-traduzido) via Gemma 3n por meio da API MediaPipe LLM Inference. A própria publicação da Google afirma que o projeto atingiu 500.000 downloads de APK em dois meses após o lançamento no GitHub, e descreveu um plano futuro para "trazer o app para usuários de iOS".',
          '**2 de abril de 2026.** A Google DeepMind lançou o **Gemma 4** sob licença Apache 2.0, nos tamanhos E2B, E4B, 26B e 31B, com uma variante multimodal **Gemma 4 12B Unified** lançada depois, em 3 de junho de 2026.',
          '**Disponibilidade na App Store para iOS.** O Google AI Edge Gallery chegou à App Store como [Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (ID da App Store 6749645337), cumprindo o plano para iOS anunciado na publicação de blog de setembro de 2025; cobertura independente descreveu o app subindo entre os apps de produtividade mais baixados na App Store por volta do lançamento do Gemma 4.',
          '**Versão 1.0.10 (4 de setembro de 2026).** A versão atual no momento desta análise, adicionando, segundo suas notas de versão, "suporte de tradução e localização global em 100 países diferentes" além de correções de bugs.',
        ],
        note: 'Histórico de versões e datas têm como fonte o blog de desenvolvedores da Google e o repositório GitHub do projeto. Confirme a versão atual e as notas de versão diretamente na App Store antes de contar com um recurso específico.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Gratuito, sem conta, sem assinatura',
            'O que significa na prática': 'Instale pela App Store e comece a baixar modelos sem nenhuma etapa de compra.',
            'Limitação / ressalva': 'A Google rotula o projeto como "beta experimental" — espere mais arestas do que em um app pago maduro.',
          },
          {
            'Benefício': 'Acesso ao Gemma 4 no dia do lançamento',
            'O que significa na prática': 'Uma das formas mais rápidas de experimentar a atual família de modelos de peso aberto principal da Google diretamente em um iPhone.',
            'Limitação / ressalva': 'Os tamanhos maiores do Gemma 4 (26B, 31B) provavelmente excedem o que o hardware típico de um iPhone consegue executar confortavelmente; o app não publica um requisito fixo de RAM por modelo.',
          },
          {
            'Benefício': 'Importação de modelos personalizados do Hugging Face',
            'O que significa na prática': 'Não limitado aos modelos Gemma incluídos pela Google — modelos no formato LiteRT do Hugging Face podem ser carregados.',
            'Limitação / ressalva': 'Requisitos para repositórios restritos do Hugging Face (como um token de acesso) não estão claramente documentados; verifique as instruções atuais no app antes de tentar uma importação restrita.',
          },
          {
            'Benefício': 'Inferência no dispositivo (LiteRT-LM)',
            'O que significa na prática': 'Mensagens e respostas são processadas localmente depois que um modelo é baixado, sem ida e volta a um servidor para a geração.',
            'Limitação / ressalva': 'O rótulo de privacidade da App Store ainda lista identificador do dispositivo, dados de desempenho, diagnósticos, localização aproximada e relatórios de falhas como coletados — não é um app sem telemetria.',
          },
          {
            'Benefício': 'Recursos multimodais (Ask Image, Audio Scribe)',
            'O que significa na prática': 'Analisar fotos ou transcrever fala no dispositivo sem um app separado.',
            'Limitação / ressalva': 'O suporte multimodal depende do modelo Gemma carregado (áudio é suportado no Gemma 3n e em tamanhos específicos do Gemma 4, não em todos os modelos da biblioteca).',
          },
          {
            'Benefício': 'Código aberto e multiplataforma',
            'O que significa na prática': 'O mesmo projeto subjacente também roda no Android, com código-fonte disponível no GitHub sob licença Apache 2.0.',
            'Limitação / ressalva': 'Esta análise avalia apenas a versão da App Store para iOS; comportamento, rótulo de privacidade e paridade de recursos no Android não são presumidos idênticos.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Google AI Edge Gallery vs. alternativas',
        columns: ['App', 'Plataformas', 'Preço', 'Flexibilidade de modelos', 'Diferença principal'],
        rows: [
          {
            'App': 'Google AI Edge Gallery',
            'Plataformas': 'iPhone/iPad/Mac/Vision Pro (também Android, separadamente)',
            'Preço': 'Gratuito',
            'Flexibilidade de modelos': 'Família Gemma 4 incluída; modelos personalizados do Hugging Face em LiteRT importáveis',
            'Diferença principal': 'Construído pela Google, rotulado "beta experimental", caminho mais rápido para o Gemma 4 no iPhone',
          },
          {
            'App': '[Private LLM](/pt/power-local-llm/private-llm-review)',
            'Plataformas': 'iPhone/iPad/Mac (só Apple)',
            'Preço': 'Compra única de US$ 4,99',
            'Flexibilidade de modelos': '140+ modelos selecionados; quantização OmniQuant/GPTQ',
            'Diferença principal': 'Pago, código fechado, mais polido e ativamente mantido como produto de consumo',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, com algum suporte Android',
            'Preço': 'Gratuito, código aberto',
            'Flexibilidade de modelos': 'Qualquer arquivo GGUF que o usuário obtenha do Hugging Face ou de outro lugar',
            'Diferença principal': 'Gratuito e totalmente de código aberto como o Google AI Edge Gallery, mas não ligado ao Gemma ou ao LiteRT-LM',
          },
          {
            'App': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Plataformas': 'iPhone/iPad/Mac',
            'Preço': 'Gratuito',
            'Flexibilidade de modelos': 'Executa Llama, Gemma, Qwen e DeepSeek offline, construído sobre o Apple MLX',
            'Diferença principal': 'Gratuito como o Google AI Edge Gallery, mas construído sobre o framework MLX da própria Apple em vez do LiteRT-LM',
          },
          {
            'App': '[Loci AI](/pt/power-local-llm/loci-ai-review-offline-local-ai)',
            'Plataformas': 'iPhone/iPad/Android/Mac/Windows',
            'Preço': 'Ver ficha atual',
            'Flexibilidade de modelos': 'Biblioteca selecionada de ~10 modelos; Gemma 4 E2B/E4B entre os modelos suportados',
            'Diferença principal': 'Alcance multiplataforma mais amplo que a versão iOS do Google AI Edge Gallery, com lista de modelos menor e mais selecionada',
          },
        ],
        note: 'Detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência — verifique as especificações atuais na ficha de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Google AI Edge Gallery é indicado',
        items: [
          '**Leitores que querem experimentar o Gemma 4 em um iPhone sem custo.** É uma das formas mais rápidas de rodar a atual família de modelos de peso aberto principal da Google totalmente no dispositivo.',
          '**Desenvolvedores avaliando o LiteRT-LM.** O app também serve como demonstração prática do mecanismo de inferência no dispositivo da Google, útil antes de integrar o LiteRT-LM ao seu próprio projeto.',
          '**Leitores que querem experimentar com modelos personalizados do Hugging Face no formato LiteRT** sem configurar antes um ambiente de desenvolvimento completo.',
          '**Leitores confortáveis com o rótulo "beta experimental"**, que priorizam experimentar os lançamentos mais recentes do Gemma em vez de um app de consumo totalmente polido e estabelecido há muito tempo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Google AI Edge Gallery não é indicado',
        items: [
          '**Leitores que querem um produto de consumo maduro e ativamente cuidado.** [Private LLM](/pt/power-local-llm/private-llm-review) e [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) têm ambos um histórico mais longo como apps mantidos e fora de beta.',
          '**Leitores que querem o rótulo de privacidade mais restritivo possível.** A ficha da App Store mostra identificador do dispositivo, dados de desempenho, diagnósticos, localização aproximada e relatórios de falhas como coletados — o rótulo do [Private LLM](/pt/power-local-llm/private-llm-review) declara que nenhum dado é coletado.',
          '**Leitores que precisam de suporte ao Android na mesma instalação.** A versão Android é um download separado de [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), não o app da App Store iOS coberto por esta análise.',
          '**Leitores que querem rodar os maiores tamanhos do Gemma 4 em um celular.** As variantes 26B e 31B provavelmente não rodam confortavelmente na memória típica de um iPhone; o app não publica um piso fixo de RAM por modelo para confirmar isso.',
          '**Equipes que querem uma implantação multiusuário gerenciada centralmente.** Este é um app de consumo de usuário único e dispositivo único, sem console de administração ou gerenciamento de licenças compartilhadas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Google AI Edge Gallery é gratuito?',
            a: 'Sim. A [ficha da App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) é gratuita para baixar, sem assinatura e sem compras no app, verificado para esta análise em 2026-09-12.',
          },
          {
            q: 'Quais modelos o Google AI Edge Gallery executa?',
            a: 'Ele executa a família de modelos Gemma da Google, atualmente a geração Gemma 4 (E2B, E4B, 26B, 31B e a variante multimodal 12B Unified, lançadas entre abril e junho de 2026), além do anterior Gemma 3n. Usuários também podem importar modelos personalizados do Hugging Face no formato LiteRT.',
          },
          {
            q: 'O Google AI Edge Gallery funciona no Android também?',
            a: 'Sim, mas como uma distribuição separada. O projeto de código aberto subjacente, [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery), oferece uma versão Android via Google Play e APK direto, além da ficha da App Store para iOS coberta por esta análise.',
          },
          {
            q: 'O Google AI Edge Gallery coleta meus dados?',
            a: 'Mensagens de chat e respostas do modelo são processadas no dispositivo depois que um modelo é baixado, mas o rótulo de privacidade da Apple para a ficha iOS informa que identificador do dispositivo, dados de desempenho e diagnósticos estão vinculados à sua identidade, e que localização aproximada, dados de interação com o produto e relatórios de falhas são coletados sem vínculo com sua identidade. Não é um app sem dados, mesmo que a inferência em si rode localmente.',
          },
          {
            q: 'O que é o LiteRT-LM?',
            a: '[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) é o framework de inferência de código aberto voltado para produção da Google para rodar modelos de linguagem grandes em dispositivos de borda como celulares. Ele sucedeu a antiga API MediaPipe LLM Inference usada em versões anteriores do app Gallery.',
          },
          {
            q: 'Posso importar meu próprio modelo no Google AI Edge Gallery?',
            a: 'Sim — a própria documentação da Google confirma que o app suporta carregar modelos personalizados do Hugging Face no formato LiteRT via uma URL de ficha de modelo. Detalhes sobre requisitos para repositórios restritos do Hugging Face, como se um token de acesso é necessário, não estão claramente documentados; verifique as instruções atuais no app antes de tentar.',
          },
          {
            q: 'O Google AI Edge Gallery é um produto finalizado ou uma beta?',
            a: 'A própria documentação do projeto da Google no GitHub o descreve como uma "versão beta experimental" e pede feedback dos usuários — esse status se aplica ao projeto subjacente em iOS, Android e desktop, não apenas a uma plataforma.',
          },
          {
            q: 'Quais dispositivos a versão iOS suporta?',
            a: 'Segundo a ficha da App Store: iPhone e iPad com iOS 17.0 ou posterior, Mac com macOS 14.0 ou posterior com chip Apple M1 ou mais recente, e Apple Vision Pro com visionOS 1.0 ou posterior.',
          },
          {
            q: 'Como o Google AI Edge Gallery se compara ao Private LLM?',
            a: 'Google AI Edge Gallery é gratuito, construído pela Google, rotulado como beta experimental e centrado nos modelos Gemma via LiteRT-LM. [Private LLM](/pt/power-local-llm/private-llm-review) é uma compra única de US$ 4,99, código fechado, e oferece uma biblioteca selecionada maior de 140+ modelos com histórico mais longo como app de consumo mantido. Escolha o Google AI Edge Gallery para experimentar o Gemma 4 sem custo; escolha o Private LLM para uma experiência paga mais polida e ativamente mantida.',
          },
          {
            q: 'O Google AI Edge Gallery suporta entrada de áudio e imagem?',
            a: 'Sim, dependendo do modelo carregado. O Ask Image oferece análise multimodal de fotos, e o Audio Scribe oferece transcrição e tradução de fala no dispositivo; o suporte a áudio nos modelos Gemma subjacentes começou com o Gemma 3n e continua em tamanhos específicos do Gemma 4, incluindo a variante 12B Unified.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Google AI Edge Gallery merece um lugar neste grupo como a forma mais rápida e gratuita de rodar os próprios modelos Gemma 4 da Google totalmente em um iPhone, apoiado pelo mecanismo de produção LiteRT-LM da Google em vez de uma camada de terceiros sobre um modelo de código aberto. Seu suporte à importação do Hugging Face e seus recursos multimodais (Ask Image, Audio Scribe, Thinking Mode) vão além de um cliente de chat básico. Os prós e contras são igualmente reais: a própria Google rotula o projeto como "beta experimental", o rótulo de privacidade da App Store para iOS mostra mais coleta de dados do que os concorrentes mais focados em privacidade, e o app tem um histórico mais curto como produto de consumo mantido do que apps como o Private LLM. Leitores que queiram especificamente os modelos Gemma mais recentes sem custo, ou que estejam avaliando o LiteRT-LM como desenvolvedores, devem instalá-lo. Quem quiser o app de IA local móvel mais polido, mais estabelecido ou mais restritivo em privacidade deve compará-lo primeiro com [Private LLM](/pt/power-local-llm/private-llm-review) ou [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Google AI Edge Gallery na App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) — preço, requisitos de plataforma, rótulo de privacidade, avaliações e histórico de versões.',
          '[google-ai-edge/gallery no GitHub](https://github.com/google-ai-edge/gallery) — visão geral do projeto, plataformas suportadas, importação do Hugging Face, licença e status beta.',
          '[LiteRT-LM no GitHub](https://github.com/google-ai-edge/LiteRT-LM) — o mecanismo de inferência no dispositivo sobre o qual o app é construído.',
          '[Publicação de blog de anúncio do Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — anúncio de 9 de setembro de 2025 sobre suporte a áudio e disponibilidade no Google Play.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — uma alternativa paga mais polida com uma biblioteca de modelos selecionada maior.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — uma alternativa gratuita e de código aberto com importação manual de GGUF.',
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — uma alternativa gratuita baseada em Apple MLX que suporta famílias de modelos semelhantes.',
          '[Análise do Loci AI](/pt/power-local-llm/loci-ai-review-offline-local-ai) — um app multiplataforma no dispositivo que também suporta o Gemma 4.',
          '[O diretório completo de software de IA local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de IA local em todas as plataformas, incluindo a ficha do Google AI Edge Gallery.',
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
    heroImage: '/images/google-ai-edge-gallery-review-hero-ja.webp',
    title: 'Google AI Edge Gallery レビュー（2026年）：iPhone向けGemma 4オンデバイスチャット',
    seoTitle: 'Google AI Edge Gallery レビュー2026：iOS版Gemmaアプリ',
    intro:
      'Google AI Edge Gallery は、[Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) が提供する無料アプリで、Googleのオンデバイス推論ランタイム [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) を使い、オープンソースAIモデルをiPhone・iPad・Macで完全に実行します。本レビューはiOS版App Store掲載（App Store ID 6749645337、バージョン1.0.10、レビュー時点で4.0つ星・160件超の評価）を対象としています——[ローカルLLMソフトウェアディレクトリ内のGoogle AI Edge Gallery掲載](/ja/power-local-llm/local-llm-software-directory)の関連記事です。このアプリは、より大きなオープンソースプロジェクト [GitHub上のgoogle-ai-edge/gallery](https://github.com/google-ai-edge/gallery) のユーザー向け窓口であり、同プロジェクトはAndroid版や直接APKダウンロードも提供していますが、本レビューではAndroid版は評価対象外です。iOS版では、現行のGemma 4世代を含むGoogleのGemmaモデルファミリーを、モデルダウンロード後は完全オフラインで実行し、[Hugging Face](https://huggingface.co/) からLiteRT形式で追加モデルをインポートすることもできます。iPhone向けオンデバイスアプリを比較する読者にとって実務的な問いは、Googleが公式に「実験的ベータ版」と位置づける無料アプリが、[Private LLM](/ja/power-local-llm/private-llm-review) のようなより洗練された有料アプリや、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review) のような無料アプリとどう比較されるかです。',
    metaDescription:
      'Google AI Edge Gallery レビュー2026：無料iOSアプリ（App Store ID 6749645337）、LiteRT-LM経由のGemma 4オンデバイスチャット、4.0つ星・160件超の評価。機能、プライバシー、Private LLMやPocketPal AIとの比較。',
    twitterDescription:
      'Google AI Edge Gallery レビュー2026：LiteRT-LM経由でGemma 4を完全にオンデバイス実行するGoogleの無料iOSアプリ。機能、App Storeプライバシーラベル、Private LLM・PocketPal AIとの比較。',
    audience:
      'Googleの無料オンデバイスAIアプリを評価するiPhone・iPadユーザー向け——機能、Gemma 4サポート、App Storeプライバシーラベル、iOS版とより大きなAndroid/GitHubプロジェクトとの関係、有料・無料の代替アプリとの比較を扱います。',
    readTime: '9分で読了',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Google AI Edge Gallery レビュー',
    targetKeywords: [
      'google ai edge gallery レビュー',
      'google ai edge gallery ios',
      'google ai edge gallery アプリ',
      'gemma 4 オンデバイス iphone',
      'litert-lm レビュー',
      'google ai edge gallery vs private llm',
      'google ai edge gallery vs pocketpal ai',
      '無料 ローカルai アプリ iphone',
    ],
    current_models_mentioned: ['Gemma 4 E2B', 'Gemma 4 E4B', 'Gemma 4 26B', 'Gemma 4 31B', 'Gemma 4 12B Unified', 'Gemma 3n'],
    current_hardware_mentioned: ['iPhone（iOS 17以降）', 'iPad（iOS 17以降）', 'Apple Silicon Mac（M1以降、macOS 14以降）', 'Apple Vision Pro（visionOS 1.0以降）'],
    leadAnswerBlock:
      '**Google AI Edge Gallery は、[Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) が提供する無料iOSアプリで、Googleの [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) ランタイムを使いGemma 4など複数のオープンソースモデルを完全にオンデバイスで実行し、サブスクリプションやメッセージ課金はありません。** これはオープンソースプロジェクト [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) のiOS版であり、Android版も提供されています。Google自身がこのアプリを「実験的ベータ版」と位置づけています。モデルをダウンロードすればチャットはオフラインで動作しますが、App Storeのプライバシーラベルによると、Googleは依然として一部のデバイス診断情報や利用データを収集しています——プロンプトやチャット内容自体はデバイス上に留まりますが、テレメトリが完全にゼロというわけではありません。より洗練された有料の代替アプリを求める読者は [Private LLM](/ja/power-local-llm/private-llm-review) と比較すべきであり、手動でGGUFをインポートする無料のオープンソース代替を求める読者は [PocketPal AI](/ja/power-local-llm/pocketpal-ai-review) と比較すべきです。',
    quickAnswerTop: {
      ja: {
        question: 'Google AI Edge GalleryはiPhoneにインストールする価値がありますか？',
        answer:
          'はい、Googleの現行Gemma 4モデルを完全にオンデバイスで、無料かつアカウント不要で試したい場合、そしてGoogle自身が「実験的ベータ版」と位置づけるアプリであることを受け入れられるなら価値があります。Gemma 4のオンデバイス推論とマルチモーダル機能を無料で試すには優れた選択肢です。より成熟し積極的に整備されたアプリ体験を求めるなら見送るべきです——[Private LLM](/ja/power-local-llm/private-llm-review) と [PocketPal AI](/ja/power-local-llm/pocketpal-ai-review) はいずれもその点でより確立されています。',
        bullets: [
          'Apple App Storeで無料。サブスクリプションもアプリ内課金もなし。',
          'Googleの LiteRT-LM ランタイム経由で Gemma 4（E2B、E4B、26B、31B、12B Unified）や他のオープンソースモデルを実行。',
          'iPhone、iPad、Mac、Apple Vision Pro対応——iOS 17以降またはApple SiliconのmacOS 14以降が必要。',
          'github.com/google-ai-edge/galleryではオープンソースAndroidアプリと直接APKも提供——本レビューはiOS版のみを対象。',
          'App Storeプライバシーラベルには、デバイスID、パフォーマンスデータ、診断情報の収集が記載——チャット内容自体はデバイス上に留まるが「データゼロ」のアプリではない。',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Google AI Edge Galleryとは', anchor: 'what-is-google-ai-edge-gallery' },
      { label: 'アプリを入手する', anchor: 'get-it' },
      { label: 'モデル：Gemma 4とLiteRT-LM', anchor: 'models' },
      { label: 'プラットフォーム：iOS App Store対オープンソースプロジェクト', anchor: 'platforms' },
      { label: 'プライバシー：App Storeラベルが実際に伝えていること', anchor: 'privacy' },
      { label: '沿革とバージョン履歴', anchor: 'history' },
      { label: 'トレードオフ：メリットと制限', anchor: 'tradeoffs' },
      { label: 'Google AI Edge Galleryと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'Google AI Edge Galleryが向いている人', anchor: 'who-should-use' },
      { label: 'Google AI Edge Galleryが向いていない人', anchor: 'who-should-not-use' },
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
            text: 'Google AI Edge Galleryは無料のiOSアプリ（App Store ID 6749645337、バージョン1.0.10）で、GoogleのLiteRT-LMランタイム経由でGemma 4や他のオープンソースモデルを完全にオンデバイスで実行し、Google自身が「実験的ベータ版」と位置づけています。',
          },
          {
            type: 'plain-terms',
            text: 'これはGoogle自身のGemmaモデルをスマホ上で直接、オフラインで、アカウントもサブスクリプションも不要で試すためのショーケースアプリです——同じオープンソースプロジェクトにはAndroid版やダウンロード可能なソースコードリポジトリもあります。',
          },
        ],
        items: [
          '価格：[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) で無料。サブスクリプションもアプリ内課金もなし。',
          '開発元：Google LLC。現行バージョンは1.0.10（2026年9月4日リリース）、160件超の評価で5点満点中4.0点。',
          'プラットフォーム（iOS版）：iOS 17以降のiPhone・iPad、macOS 14以降かつApple M1以降のMac、visionOS 1.0以降のApple Vision Pro。',
          'モデル：Gemma 4ファミリー（E2B、E4B、26B、31B、マルチモーダルの12B Unified）に加えGemma 3n。Hugging FaceからLiteRT形式でカスタムモデルをインポート可能。',
          'オープンソース：基盤プロジェクト [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) はApache 2.0ライセンスで、Android版・直接APKも提供——本レビューはiOS App Store版を対象。',
          'ステータス：GoogleのGitHub README自体がこのプロジェクトを「実験的ベータ版」と説明。',
          'プライバシー：App Storeラベルによると、デバイスID・パフォーマンスデータ・診断情報が識別情報に紐づけられ、おおよその位置情報・製品操作データ・クラッシュレポートは識別情報に紐づけずに収集される——チャット入力はデバイス上で処理されるが、テレメトリが全くないアプリではない。',
        ],
      },
      whatIsGoogleAIEdgeGallery: {
        id: 'what-is-google-ai-edge-gallery',
        title: 'Google AI Edge Galleryとは',
        content: [
          '**Google AI Edge Galleryは、推論のためのサーバー往復なしにスマホ・タブレット・Mac上で直接オープンソース生成AIモデルを実行するための、Google自身のショーケースアプリです。** これはエッジデバイス上で大規模言語モデルを実行するためのGoogleの本番向け推論フレームワーク [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) 上に構築されており、同フレームワーク自体は、このプロジェクトの以前のバージョンで使われていた旧MediaPipe LLM Inference APIの後継です。',
          '本レビューが対象とするiOS版は [Apple App Store上のGoogle AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)（App Store ID 6749645337）で、Google LLCが開発・公開しており、現行バージョンは1.0.10、160件超の評価で5点満点中4.0点です。無料ダウンロードで、サブスクリプション階層はありません。',
          'このアプリ自体は、Googleが「世界で最も強力なオープンソース大規模言語モデル（LLM）をモバイルデバイス上で実行するための第一の目的地」と表現する、より大きなオープンソースプロジェクト [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) の配信チャネルの一つです。同プロジェクトはAndroid版（Google Playと直接APK経由）やデスクトップ版も提供しています。Google自身のプロジェクトドキュメントはこの取り組み全体を完成した消費者向け製品ではなく **「実験的ベータ版」** と位置づけています——本レビューはこの区別を形式的なものではなく実質的なものとして扱います。この記事群を通じてGoogle AI Edge Galleryは、消費者向け製品として洗練されるべく特に設計されたアプリと比較されるためです。',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'アプリを入手する',
        itemHeadings: true,
        content: [
          '**Google AI Edge Galleryは購入手続きなしで無料でダウンロードできます。** 本レビューのCTAは特にiOS版を対象としています。Android版とソースコードのチャネルは、同じ基盤オープンソースプロジェクトの別個のダウンロードであり、同一のインストールではありません。',
          '本レビューは[ローカルLLMソフトウェアディレクトリ内のGoogle AI Edge Gallery掲載](/ja/power-local-llm/local-llm-software-directory)の関連記事で、本サイトで扱う他のすべてのモバイルローカルAIアプリと並んで掲載されています。',
        ],
        columns: ['プラットフォーム', '入手先', '備考'],
        rows: [
          {
            'プラットフォーム': 'iPhone / iPad',
            '入手先': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            '備考': '無料。iOS 17以降が必要。本レビューが評価する掲載内容です。',
          },
          {
            'プラットフォーム': 'Mac',
            '入手先': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            '備考': '同じApp Store掲載。macOS 14以降とApple M1以降が必要。',
          },
          {
            'プラットフォーム': 'Apple Vision Pro',
            '入手先': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            '備考': 'visionOS 1.0以降で対応と記載——本レビューでは独自に検証していません。',
          },
          {
            'プラットフォーム': 'Android',
            '入手先': '[GitHub上のgoogle-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            '備考': '同じオープンソースプロジェクトの別ビルドで、Google Playまたは直接APK経由——本レビューの対象外。',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            '備考': 'Apache 2.0ライセンス。上記すべての配信チャネルの背後にあるリポジトリ。',
          },
        ],
        note: 'App Storeの提供状況、価格、バージョン番号は予告なく変更される可能性があります。インストール前に[App Storeページ](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)で最新の掲載内容を確認してください。本レビューの確認日：2026-09-12。',
      },
      models: {
        id: 'models',
        title: 'モデル：Gemma 4とLiteRT-LM',
        content: [
          '**Google AI Edge GalleryはGoogleのGemmaモデルファミリー、現在は2026年4月2日にリリースされたGemma 4世代を中心としています。** Gemma 4には複数のサイズがあります——E2BとE4B（スマホ向け）、26Bのmixture-of-expertsバリアント、31Bバリアント、そしてGoogle自身のドキュメントによればテキスト・画像・音声入力を単一アーキテクチャで扱うマルチモーダルモデル **Gemma 4 12B Unified** です。アプリはGemma 4リリース以前にオンデバイススタックに音声理解を追加した以前のGemmaリリースである **Gemma 3n** もサポートしています。',
          'バンドルされたGemmaモデルに加え、アプリのモデル管理画面内でモデルカードURLを使い、**Hugging Faceから自分自身のモデルをLiteRT形式でインポート**することもできます。Googleのプロジェクトドキュメントはモデルの発見とダウンロードのためのこのHugging Face統合の存在を確認していますが、ゲート付きモデルリポジトリにHugging Faceアクセストークンが必要かどうかなどの詳細は明記していません——本レビューは特定のトークンフローを想定するのではなく、これを未確認事項として扱います。ゲート付きモデルのインポートを試みる前に最新のアプリ内手順を確認してください。',
          '機能面では、アプリはこれらのモデルを中心に複数の異なるモードをまとめています：モデルの中間推論ステップを表示する**Thinking Mode付きAIチャット**、カメラやギャラリーの写真をマルチモーダルで分析する**Ask Image**、オンデバイス音声文字起こし・翻訳の**Audio Scribe**、ベースモデルの上にウィキペディア検索などの外部ツールアクセスを重ねる**Agent Skills**、そしてモデルを選ぶ前にダウンロードサイズとオンデバイス性能を比較するための**モデル管理・ベンチマーク**画面です。',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'プラットフォーム：iOS App Store対オープンソースプロジェクト',
        itemHeadings: true,
        columns: ['プラットフォーム', '想定される内容', '重要な注意点'],
        rows: [
          {
            'プラットフォーム': 'iPhone / iPad',
            '想定される内容': '本レビューが評価するApp Store掲載によればiOS 17以降が必要。',
            '重要な注意点': 'これが本レビューの主要プラットフォームです。対応チップ世代は掲載上OS要件とは別に明示されていません。',
          },
          {
            'プラットフォーム': 'Mac',
            '想定される内容': 'macOS 14以降とApple M1以降のチップが必要。',
            '重要な注意点': 'iPhone/iPadアプリと同一のユニバーサルバイナリ・App Store掲載。記載された要件によればIntel Macは非対応。',
          },
          {
            'プラットフォーム': 'Apple Vision Pro',
            '想定される内容': '対応として記載、visionOS 1.0以降が必要。',
            '重要な注意点': '本レビューではVision Pro体験を独自に検証していません——実際に確認された機能ではなく、App Store掲載上の互換性として扱ってください。',
          },
          {
            'プラットフォーム': 'Android',
            '想定される内容': '同じオープンソースプロジェクトの別ビルドがGoogle Play経由で利用可能（2025年9月9日のGoogleの発表によりGitHub限定配信からGoogle Playでのオープンベータへ移行）、またはGitHubからの直接APK経由。',
            '重要な注意点': '本レビューが対象とするiOS App Storeアプリと同一のインストールではありません。iOS固有の挙動（例：正確なApp Storeプライバシーラベル）がAndroid版にそのまま当てはまるとは想定しないでください。',
          },
          {
            'プラットフォーム': 'より広いOSSプロジェクト',
            '想定される内容': '[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) はApache 2.0ライセンスで、Android・iOS・デスクトップ配信にまたがります。',
            '重要な注意点': 'Google自身のドキュメントはこの取り組み全体を「実験的ベータ版」と位置づけています——このステータスはiOSだけでなくすべてのプラットフォームに適用されます。',
          },
        ],
        note: 'プラットフォーム要件とベータステータスはアップデートごとに変わる可能性があります——特定のデバイスやOSのサポートに依拠する前に、[App Store掲載](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)または[GitHubリポジトリ](https://github.com/google-ai-edge/gallery)で最新の詳細を直接確認してください。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー：App Storeラベルが実際に伝えていること',
        content: [
          '**モデルがダウンロードされれば推論はデバイス上で行われます——応答生成のためにチャットのプロンプトやモデル出力がGoogleのサーバーへ送信されることはありません。** とはいえ、これは「アプリが一切データを収集しない」という主張とは異なるものであり、本レビューはこの二つを混同せず別々に扱います。',
          '[Google AI Edge GalleryのApp Store掲載](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)に対するAppleのプライバシー・ニュートリション・ラベルは、**あなたの識別情報に紐づくデータ**としてデバイスID、パフォーマンスデータ、診断情報を挙げ、**あなたの識別情報に紐づかないデータ**としておおよその位置情報、製品操作データ、クラッシュレポートを挙げています。これはApple標準の、開発者自身が申告するプライバシーラベル形式であり、PromptQuorumによるアプリのネットワークトラフィックの独立監査ではありません。',
          'プライバシーを重視する読者にとっての実務的な区別は次の通りです：会話の内容やモデルに渡す画像・音声は推論中デバイス上に留まりますが、Googleはアプリ自体がどう使われているかについて、テレメトリ的なデータ（デバイス識別子、パフォーマンス／診断データ、おおよその位置情報、クラッシュレポート）を依然として収集しています。「一切何も収集しない」というより厳格な立場を求める読者は、これを[Private LLM](/ja/power-local-llm/private-llm-review)のApp Storeプライバシーラベル（そのアプリからはデータが収集されないと記載）と比較すべきです。',
        ],
        items: [
          '**チャットにアカウントは不要。** モデルのダウンロードと実行にサインインは必要ありません。',
          '**推論中、チャット内容はデバイス上に留まります。** モデルがダウンロードされれば、プロンプトと応答はLiteRT-LMによりローカルで処理されます。',
          '**この掲載に対するAppleのプライバシーラベルによれば、デバイスID、パフォーマンスデータ、診断情報はあなたの識別情報に紐づけられています。**',
          '**同じラベルによれば、おおよその位置情報、製品操作データ、クラッシュレポートは収集されますが、あなたの識別情報には紐づけられていません。**',
          '**本レビューはApple自身が申告したプライバシーラベルに依拠しており**、アプリのネットワークトラフィックの独立監査ではありません。',
        ],
      },
      history: {
        id: 'history',
        title: '沿革とバージョン履歴',
        content: [
          '**Google AI Edge Galleryは、アプリストアに登場する前はGitHub限定のオープンソースプロジェクトとして始まりました。** 以下の年表はGoogle自身のブログ投稿とプロジェクトのGitHubリポジトリを出典としています。',
        ],
        items: [
          '**GitHubでの初回リリース。** [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) プロジェクトは、オンデバイスGemmaモデルのためのソース公開されたAndroid/デスクトップ向けショーケースとして開始され、当初は直接APKダウンロードとして配布されました。',
          '**2025年9月9日。** Google自身の[発表ブログ投稿](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/)は、GitHub限定配信からGoogle Play Storeでのオープンベータへの移行を確認し、MediaPipe LLM Inference API経由でGemma 3nによる音声サポート（音声からテキスト、音声から翻訳テキスト）を追加しました。Google自身の投稿によれば、GitHubでのローンチから2か月以内にプロジェクトは50万件のAPKダウンロードに達し、「iOSユーザー向けにアプリを提供する」という将来計画が記されていました。',
          '**2026年4月2日。** Google DeepMindがApache 2.0ライセンスで**Gemma 4**をE2B、E4B、26B、31Bのサイズでリリースし、続く2026年6月3日にはマルチモーダルの**Gemma 4 12B Unified**バリアントがリリースされました。',
          '**iOS App Storeでの提供開始。** Google AI Edge Galleryは[Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)（App Store ID 6749645337）としてApp Storeに登場し、2025年9月のブログ投稿で発表されたiOS計画を実現しました。独立系の報道によれば、Gemma 4のローンチ時期にアプリはApp Storeの生産性アプリダウンロードランキング上位に浮上したとされています。',
          '**バージョン1.0.10（2026年9月4日）。** 本レビュー時点の最新版で、リリースノートによれば「100か国にわたるグローバル翻訳・ローカライゼーションサポート」とバグ修正が追加されました。',
        ],
        note: 'バージョン履歴と日付はGoogle自身の開発者ブログとプロジェクトのGitHubリポジトリを出典としています。特定の機能の存在に依拠する前に、App Storeで最新バージョンとリリースノートを直接確認してください。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ：メリットと制限',
        columns: ['メリット', '実際の使用における意味', '制限・注意点'],
        rows: [
          {
            'メリット': '無料、アカウント不要、サブスクリプション不要',
            '実際の使用における意味': 'App Storeからインストールし、購入手続きなしですぐにモデルのダウンロードを開始できる。',
            '制限・注意点': 'Googleはこのプロジェクトを「実験的ベータ版」と位置づけている——成熟した有料アプリより粗さがあることを想定すべき。',
          },
          {
            'メリット': 'リリース当日からGemma 4にアクセス可能',
            '実際の使用における意味': 'Googleの現行フラッグシップのオープンウェイトモデルファミリーをiPhone上で直接試す最速の方法の一つ。',
            '制限・注意点': 'より大きなGemma 4サイズ（26B、31B）は一般的なiPhoneハードウェアが快適に実行できる範囲を超える可能性が高い。アプリはモデルごとの固定RAM要件を公開していない。',
          },
          {
            'メリット': 'カスタムHugging Faceモデルのインポート',
            '実際の使用における意味': 'GoogleがバンドルするGemmaモデルに限定されず、Hugging FaceからのLiteRT形式モデルを読み込める。',
            '制限・注意点': 'ゲート付きHugging Faceリポジトリの要件（アクセストークンなど）は明確に文書化されていない。ゲート付きモデルのインポートを試みる前に最新のアプリ内手順を確認すること。',
          },
          {
            'メリット': 'オンデバイス推論（LiteRT-LM）',
            '実際の使用における意味': 'モデルがダウンロードされれば、チャットのプロンプトと応答は生成のためのサーバー往復なしにローカルで処理される。',
            '制限・注意点': 'App Storeプライバシーラベルは依然としてデバイスID、パフォーマンスデータ、診断情報、おおよその位置情報、クラッシュレポートが収集されると記載している——テレメトリが全くないアプリではない。',
          },
          {
            'メリット': 'マルチモーダル機能（Ask Image、Audio Scribe）',
            '実際の使用における意味': '別アプリなしで写真を分析したり、音声をオンデバイスで文字起こししたりできる。',
            '制限・注意点': 'マルチモーダル対応は読み込んだGemmaモデルに依存する（音声はGemma 3nと特定のGemma 4サイズでサポートされるが、ライブラリ内の全モデルではない）。',
          },
          {
            'メリット': 'オープンソースかつクロスプラットフォーム',
            '実際の使用における意味': '同じ基盤プロジェクトはAndroidでも動作し、ソースコードはApache 2.0でGitHubに公開されている。',
            '制限・注意点': '本レビューはiOS App Store版のみを評価している。Androidでの挙動、プライバシーラベル、機能パリティは同一とは想定されない。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Google AI Edge Galleryと代替アプリの比較',
        columns: ['アプリ', 'プラットフォーム', '価格', 'モデルの柔軟性', '主な違い'],
        rows: [
          {
            'アプリ': 'Google AI Edge Gallery',
            'プラットフォーム': 'iPhone/iPad/Mac/Vision Pro（Androidも別途）',
            '価格': '無料',
            'モデルの柔軟性': 'Gemma 4ファミリー同梱、カスタムHugging Face LiteRTモデルのインポート可能',
            '主な違い': 'Google製、「実験的ベータ版」と明記、iPhoneでGemma 4を試す最速の手段',
          },
          {
            'アプリ': '[Private LLM](/ja/power-local-llm/private-llm-review)',
            'プラットフォーム': 'iPhone/iPad/Mac（Appleのみ）',
            '価格': '4.99ドルの買い切り',
            'モデルの柔軟性': '140以上の厳選モデル、OmniQuant/GPTQ量子化',
            '主な違い': '有料、クローズドソースだが、より洗練され消費者向け製品として積極的に整備されている',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iPhone/iPad、一部Android対応',
            '価格': '無料、オープンソース',
            'モデルの柔軟性': 'Hugging Faceなどから入手した任意のGGUFファイル',
            '主な違い': 'Google AI Edge Galleryと同様に無料・完全オープンソースだが、GemmaやLiteRT-LMには縛られない',
          },
          {
            'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            'プラットフォーム': 'iPhone/iPad/Mac',
            '価格': '無料',
            'モデルの柔軟性': 'Apple MLXベースでLlama、Gemma、Qwen、DeepSeekをオフライン実行',
            '主な違い': 'Google AI Edge Galleryと同様に無料だが、LiteRT-LMではなくAppleのMLXフレームワーク上に構築',
          },
          {
            'アプリ': '[Loci AI](/ja/power-local-llm/loci-ai-review-offline-local-ai)',
            'プラットフォーム': 'iPhone/iPad/Android/Mac/Windows',
            '価格': '最新の掲載を参照',
            'モデルの柔軟性': '約10モデルの厳選ライブラリ、対応モデルにGemma 4 E2B/E4Bを含む',
            '主な違い': 'Google AI Edge GalleryのiOS版より広いクロスプラットフォーム展開だが、厳選モデルリストは小規模',
          },
        ],
        note: 'サードパーティ製アプリのプラットフォーム、価格、機能の詳細は頻繁に変わります——判断前に各アプリ自身の掲載で最新の仕様を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Google AI Edge Galleryが向いている人',
        items: [
          '**無料でiPhone上でGemma 4を試したい読者。** Googleの現行フラッグシップのオープンウェイトモデルファミリーを完全にオンデバイスで実行する最速の方法の一つです。',
          '**LiteRT-LMを評価する開発者。** このアプリはGoogleのオンデバイス推論ランタイムの実践的なデモとしても機能し、自身のプロジェクトにLiteRT-LMを組み込む前に有用です。',
          '**フル開発環境を先に整えることなく、LiteRT形式のカスタムHugging Faceモデルで実験したい読者。**',
          '**「実験的ベータ版」というラベルを受け入れられる読者。** 完全に洗練され長く確立された消費者向けアプリよりも、Gemmaの最新リリースを試すことを優先する人向けです。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Google AI Edge Galleryが向いていない人',
        items: [
          '**成熟し積極的に整備された消費者向け製品を求める読者。** [Private LLM](/ja/power-local-llm/private-llm-review) と [PocketPal AI](/ja/power-local-llm/pocketpal-ai-review) はいずれも、維持管理されベータ版ではないアプリとしてより長い実績があります。',
          '**可能な限り厳格なプライバシーラベルを求める読者。** App Store掲載はデバイスID、パフォーマンスデータ、診断情報、おおよその位置情報、クラッシュレポートの収集を示しています——[Private LLM](/ja/power-local-llm/private-llm-review)のラベルは一切のデータ収集がないと記載しています。',
          '**同一インストールでAndroidサポートが必要な読者。** Android版は[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)からの別個のダウンロードであり、本レビューが対象とするiOS App Storeアプリではありません。',
          '**スマホ上で最大サイズのGemma 4を実行したい読者。** 26Bと31Bバリアントは一般的なiPhoneのメモリで快適に動作する可能性は低く、アプリはこれを確認するためのモデルごとの固定RAM下限を公開していません。',
          '**中央集権的に管理されたマルチユーザー展開を求めるチーム。** これは管理コンソールや共有ライセンス管理を持たない、単一ユーザー・単一デバイス向けの消費者アプリです。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Google AI Edge Galleryは無料ですか？',
            a: 'はい。[App Store掲載](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)は無料でダウンロードでき、サブスクリプションもアプリ内課金もありません。本レビューでの確認日は2026-09-12です。',
          },
          {
            q: 'Google AI Edge Galleryはどのモデルを実行しますか？',
            a: 'GoogleのGemmaモデルファミリー、現在は2026年4月から6月にかけてリリースされたGemma 4世代（E2B、E4B、26B、31B、マルチモーダルの12B Unifiedバリアント）に加え、以前のGemma 3nを実行します。ユーザーはHugging FaceからLiteRT形式でカスタムモデルをインポートすることもできます。',
          },
          {
            q: 'Google AI Edge GalleryはAndroidでも動作しますか？',
            a: 'はい、ただし別個の配信としてです。基盤となるオープンソースプロジェクト [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) は、本レビューが対象とするiOS App Store掲載に加え、Google Playと直接APK経由でAndroid版を提供しています。',
          },
          {
            q: 'Google AI Edge Galleryは私のデータを収集しますか？',
            a: 'モデルがダウンロードされれば、チャットのプロンプトとモデルの応答はデバイス上で処理されますが、iOS版に対するAppleのプライバシーラベルによれば、デバイスID、パフォーマンスデータ、診断情報はあなたの識別情報に紐づけられ、おおよその位置情報、製品操作データ、クラッシュレポートは識別情報に紐づけずに収集されます。推論自体はローカルで動作しますが、データが全くないアプリではありません。',
          },
          {
            q: 'LiteRT-LMとは何ですか？',
            a: '[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) は、スマホなどのエッジデバイス上で大規模言語モデルを実行するための、Googleの本番向けオープンソース推論フレームワークです。Galleryアプリの旧バージョンで使われていた旧MediaPipe LLM Inference APIの後継です。',
          },
          {
            q: 'Google AI Edge Galleryに自分のモデルをインポートできますか？',
            a: 'はい——Google自身のドキュメントは、モデルカードURL経由でHugging FaceからLiteRT形式のカスタムモデルを読み込むことをアプリがサポートしていると確認しています。ゲート付きHugging Faceリポジトリの要件（アクセストークンが必要かどうかなど）の詳細は明確に文書化されていません。試みる前に最新のアプリ内手順を確認してください。',
          },
          {
            q: 'Google AI Edge Galleryは完成した製品ですか、それともベータ版ですか？',
            a: 'GitHub上のGoogle自身のプロジェクトドキュメントは、これを「実験的ベータ版」と説明し、ユーザーのフィードバックを求めています——このステータスは、特定のプラットフォームだけでなくiOS、Android、デスクトップ全体にわたる基盤プロジェクトに適用されます。',
          },
          {
            q: 'iOS版はどのデバイスに対応していますか？',
            a: 'App Store掲載によれば：iOS 17以降のiPhoneとiPad、macOS 14以降かつApple M1以降のチップを搭載したMac、visionOS 1.0以降のApple Vision Proです。',
          },
          {
            q: 'Google AI Edge GalleryはPrivate LLMと比べてどうですか？',
            a: 'Google AI Edge Galleryは無料、Google製、実験的ベータ版と位置づけられ、LiteRT-LM経由のGemmaモデルを中心としています。[Private LLM](/ja/power-local-llm/private-llm-review) は4.99ドルの買い切り、クローズドソースで、140以上の厳選モデルからなるより大きなライブラリと、維持管理された消費者アプリとしてのより長い実績を提供します。無料でGemma 4を試すならGoogle AI Edge Galleryを、より洗練され積極的に維持管理された有料体験を求めるならPrivate LLMを選んでください。',
          },
          {
            q: 'Google AI Edge Galleryは音声や画像の入力に対応していますか？',
            a: 'はい、読み込んだモデル次第です。Ask Imageはマルチモーダルな写真分析を、Audio Scribeはオンデバイス音声文字起こしと翻訳を提供します。基盤となるGemmaモデルにおける音声サポートはGemma 3nから始まり、12B Unifiedバリアントを含む特定のGemma 4サイズで継続しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Google AI Edge Galleryは、サードパーティ製のオープンソースモデルラッパーではなく、Google自身の本番向けLiteRT-LMランタイムに支えられ、Google自身のGemma 4モデルを完全にiPhone上で実行する最速かつ無料の手段として、この記事群の中に一定の地位を得ています。Hugging Faceインポート対応とマルチモーダル機能（Ask Image、Audio Scribe、Thinking Mode）は、素のチャットクライアントを超える範囲をカバーします。トレードオフも同様に現実的です：Google自身がこのプロジェクトを「実験的ベータ版」と位置づけ、iOS App Storeのプライバシーラベルは最も厳格なプライバシー重視の競合よりも多くのデータ収集を示し、このアプリはPrivate LLMのようなアプリに比べ維持管理された消費者製品としての実績が短いのです。無料で最新のGemmaモデルを特に求める読者、あるいは開発者としてLiteRT-LMを評価している読者はインストールすべきです。最も洗練され、最も実績があり、あるいは最もプライバシーに厳格なモバイルローカルAIアプリを求める読者は、まず[Private LLM](/ja/power-local-llm/private-llm-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比較すべきです。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App Store上のGoogle AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) — 価格、プラットフォーム要件、プライバシーラベル、評価、バージョン履歴。',
          '[GitHub上のgoogle-ai-edge/gallery](https://github.com/google-ai-edge/gallery) — プロジェクト概要、対応プラットフォーム、Hugging Faceインポート、ライセンス、ベータステータス。',
          '[GitHub上のLiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) — このアプリの基盤となるオンデバイス推論ランタイム。',
          '[Google AI Edge Gallery発表ブログ投稿](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 2025年9月9日発表の音声サポートとGoogle Play提供開始について。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Private LLM レビュー](/ja/power-local-llm/private-llm-review) — より洗練された有料の代替アプリで、より大きな厳選モデルライブラリを持つ。',
          '[PocketPal AI レビュー](/ja/power-local-llm/pocketpal-ai-review) — 手動GGUFインポートに対応した無料オープンソースの代替アプリ。',
          '[Locally AI レビュー](/ja/power-local-llm/locally-ai-review) — 類似のモデルファミリーをサポートする、Apple MLXベースの無料の代替アプリ。',
          '[Loci AI レビュー](/ja/power-local-llm/loci-ai-review-offline-local-ai) — Gemma 4にも対応するクロスプラットフォームのオンデバイスアプリ。',
          '[ローカルLLMソフトウェア完全ディレクトリ](/ja/power-local-llm/local-llm-software-directory) — Google AI Edge Galleryの掲載を含む、全プラットフォームにわたるローカルLLMツールのより広いディレクトリ。',
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
    heroImage: '/images/google-ai-edge-gallery-review-hero-zh.webp',
    title: 'Google AI Edge Gallery 评测（2026）：iPhone 上的 Gemma 4 设备端聊天',
    seoTitle: 'Google AI Edge Gallery 2026 评测：iOS版Gemma应用',
    intro:
      'Google AI Edge Gallery 是 [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) 推出的一款免费应用，使用谷歌的设备端推理运行时 [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)，完全在 iPhone、iPad 或 Mac 上运行开源 AI 模型。本评测专门针对 iOS App Store 的应用列表（App Store ID 6749645337，版本 1.0.10，撰写本评测时评分为 4.0 星，超过 160 条评价）——是[本地 LLM 软件目录中 Google AI Edge Gallery 条目](/zh/power-local-llm/local-llm-software-directory)的配套文章。该应用是一个更大的开源项目——[GitHub 上的 google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)——面向用户的前端，该项目也提供 Android 版本和直接 APK 下载，本评测不评估 Android 版本。在 iOS 上，它运行谷歌的 Gemma 模型系列，包括当前的 Gemma 4 代际，模型下载完成后完全离线运行，并允许从 [Hugging Face](https://huggingface.co/) 以 LiteRT 格式导入其他模型。对于比较设备端 iPhone 应用的读者来说，实际问题在于：一款免费、由谷歌维护、官方标注为"实验性测试版"的应用，与 [Private LLM](/zh/power-local-llm/private-llm-review) 这类更成熟的付费应用，或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 这类免费应用相比如何。',
    metaDescription:
      'Google AI Edge Gallery 评测2026：免费iOS应用（App Store ID 6749645337），通过LiteRT-LM实现Gemma 4设备端聊天，4.0星/160+评价。功能、隐私，以及与Private LLM、PocketPal AI的比较。',
    twitterDescription:
      'Google AI Edge Gallery 评测2026：谷歌的免费iOS应用，通过LiteRT-LM完全在设备端运行Gemma 4。功能、App Store隐私标签，以及与Private LLM、PocketPal AI的比较。',
    audience:
      '正在评估谷歌免费设备端AI应用的iPhone和iPad用户——涵盖功能、Gemma 4支持、App Store隐私标签、iOS应用与更大的Android/GitHub项目之间的关系，以及与付费和免费替代品的比较。',
    readTime: '9分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Google AI Edge Gallery 评测',
    targetKeywords: [
      'google ai edge gallery 评测',
      'google ai edge gallery ios',
      'google ai edge gallery 应用',
      'gemma 4 设备端 iphone',
      'litert-lm 评测',
      'google ai edge gallery vs private llm',
      'google ai edge gallery vs pocketpal ai',
      '免费本地ai应用 iphone',
    ],
    current_models_mentioned: ['Gemma 4 E2B', 'Gemma 4 E4B', 'Gemma 4 26B', 'Gemma 4 31B', 'Gemma 4 12B Unified', 'Gemma 3n'],
    current_hardware_mentioned: ['iPhone（iOS 17+）', 'iPad（iOS 17+）', 'Apple Silicon Mac（M1或更新，macOS 14+）', 'Apple Vision Pro（visionOS 1.0+）'],
    leadAnswerBlock:
      '**Google AI Edge Gallery 是 [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) 推出的一款免费 iOS 应用，通过谷歌的 [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) 运行时完全在设备端运行 Gemma 4 及其他开源模型，无需订阅，也不按消息计费。** 它是开源项目 [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) 的 iOS 版本，该项目也提供 Android 版本；谷歌自己将该应用标注为"实验性测试版"。模型下载完成后，聊天可离线运行，但 App Store 隐私标签显示，谷歌仍会收集部分设备诊断和使用数据——这并非零遥测应用，尽管提示词和聊天内容本身留在设备上。希望获得更成熟付费替代品的读者应将其与 [Private LLM](/zh/power-local-llm/private-llm-review) 比较；希望获得免费开源、手动导入 GGUF 的替代品的读者，应与 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 比较。',
    quickAnswerTop: {
      zh: {
        question: '在 iPhone 上安装 Google AI Edge Gallery 值得吗？',
        answer:
          '值得，如果你想免费、无需账户地完全在设备端使用谷歌当前的 Gemma 4 模型，并且能接受谷歌自己标注为"实验性测试版"而非成熟消费级产品的应用。免费体验 Gemma 4 的设备端推理和多模态功能，这是一个不错的选择。如果你想要更成熟、积极维护的应用体验，则应跳过它——[Private LLM](/zh/power-local-llm/private-llm-review) 和 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 在这方面都更成熟。',
        bullets: [
          '在 Apple App Store 上免费；无订阅，无应用内购买。',
          '通过谷歌的 LiteRT-LM 运行时运行 Gemma 4（E2B、E4B、26B、31B、12B Unified）及其他开源模型。',
          'iPhone、iPad、Mac 和 Apple Vision Pro——需要 iOS 17.0+ 或搭载 Apple Silicon 的 macOS 14.0+。',
          '在 github.com/google-ai-edge/gallery 上也提供开源 Android 应用和直接 APK——本评测仅涵盖 iOS 版本。',
          'App Store 隐私标签列出了设备 ID、性能数据和诊断信息作为已收集数据——聊天内容本身留在设备上，但这并非"零数据"应用。',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Google AI Edge Gallery 是什么', anchor: 'what-is-google-ai-edge-gallery' },
      { label: '获取应用', anchor: 'get-it' },
      { label: '模型：Gemma 4 与 LiteRT-LM', anchor: 'models' },
      { label: '平台：iOS App Store 与开源项目', anchor: 'platforms' },
      { label: '隐私：App Store标签实际说了什么', anchor: 'privacy' },
      { label: '历史与版本里程碑', anchor: 'history' },
      { label: '权衡：优点与局限', anchor: 'tradeoffs' },
      { label: 'Google AI Edge Gallery 与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用 Google AI Edge Gallery', anchor: 'who-should-use' },
      { label: '谁不适合使用 Google AI Edge Gallery', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
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
            text: 'Google AI Edge Gallery 是一款免费 iOS 应用（App Store ID 6749645337，版本 1.0.10），通过谷歌的 LiteRT-LM 运行时完全在设备端运行 Gemma 4 及其他开源模型，谷歌自己将其标注为"实验性测试版"。',
          },
          {
            type: 'plain-terms',
            text: '这是谷歌自己的展示应用，用于在手机上直接、离线、无需账户或订阅地体验其自家的 Gemma 模型——同一底层开源项目也有 Android 版本和可下载的源代码仓库。',
          },
        ],
        items: [
          '价格：在 [Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) 上免费；无订阅，无应用内购买。',
          '开发者：Google LLC，当前版本 1.0.10（2026年9月4日发布），超过 160 条评价中评分为 4.0 分（满分5分）。',
          '平台（iOS版本）：iOS 17.0+ 的 iPhone 和 iPad，macOS 14.0+ 且搭载 Apple M1 或更新芯片的 Mac，visionOS 1.0+ 的 Apple Vision Pro。',
          '模型：Gemma 4 系列（E2B、E4B、26B、31B 及多模态的 12B Unified 变体），以及 Gemma 3n；可从 Hugging Face 以 LiteRT 格式导入自定义模型。',
          '开源：底层项目 [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) 采用 Apache 2.0 许可证，也提供 Android 版本和直接 APK——本评测涵盖 iOS App Store 版本。',
          '状态：谷歌自己的 GitHub README 将该项目描述为"实验性测试版"。',
          '隐私：App Store 标签指出，设备 ID、性能数据和诊断信息与身份相关联，大致位置、产品交互数据和崩溃报告在收集时不与身份关联——聊天提示词在设备上处理，但这并非零遥测应用。',
        ],
      },
      whatIsGoogleAIEdgeGallery: {
        id: 'what-is-google-ai-edge-gallery',
        title: 'Google AI Edge Gallery 是什么',
        content: [
          '**Google AI Edge Gallery 是谷歌自己的展示应用，用于直接在手机、平板电脑或 Mac 上运行开源生成式 AI 模型，推理过程无需服务器往返。** 它构建在 [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) 之上——谷歌面向生产环境、用于在边缘设备上运行大语言模型的推理框架，该框架本身取代了该项目早期版本使用的旧版 MediaPipe LLM Inference API。',
          '本文评测的 iOS 版本是 [Apple App Store 上的 Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)（App Store ID 6749645337），由 Google LLC 开发并发布，当前版本为 1.0.10，超过 160 条评价中评分为 4.0 分（满分5分）。免费下载，无订阅层级。',
          '这款应用本身是一个更大的开源项目——[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)——的一个分发渠道，谷歌将该项目描述为"在你的移动设备上运行世界上最强大的开源大语言模型（LLM）的首选目的地"。该项目还提供 Android 版本（通过 Google Play 和直接 APK）以及桌面版本。谷歌自己的项目文档将整个项目标注为 **"实验性测试版"**，而非成品消费级产品——本评测将这一区分视为实质性的，而非形式上的，因为在本系列文章中，Google AI Edge Gallery 始终与专门打造成成熟消费级产品的应用进行比较。',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: '获取应用',
        itemHeadings: true,
        content: [
          '**Google AI Edge Gallery 免费下载，无需购买步骤。** 本评测的行动号召专门针对 iOS 版本；Android 和源代码渠道是同一底层开源项目的独立下载，并非同一安装。',
          '本评测是[本地 LLM 软件目录中 Google AI Edge Gallery 条目](/zh/power-local-llm/local-llm-software-directory)的配套文章，该目录将其与本站涵盖的所有其他移动端本地 AI 应用一并列出。',
        ],
        columns: ['平台', '获取渠道', '备注'],
        rows: [
          {
            '平台': 'iPhone / iPad',
            '获取渠道': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            '备注': '免费。需要 iOS 17.0 或更新版本。这是本评测所评估的应用列表。',
          },
          {
            '平台': 'Mac',
            '获取渠道': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            '备注': '同一 App Store 列表；需要 macOS 14.0+ 及 Apple M1 或更新芯片。',
          },
          {
            '平台': 'Apple Vision Pro',
            '获取渠道': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            '备注': '列为兼容 visionOS 1.0+；本评测未对此进行独立实测。',
          },
          {
            '平台': 'Android',
            '获取渠道': '[GitHub 上的 google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            '备注': '同一开源项目的独立构建版本，通过 Google Play 或直接 APK 分发——本评测不涵盖。',
          },
          {
            '平台': '源代码',
            '获取渠道': '[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            '备注': 'Apache 2.0 许可证；上述所有分发渠道背后的仓库。',
          },
        ],
        note: 'App Store 的可用性、价格和版本号可能随时变更，恕不另行通知。安装前请在 [App Store 页面](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) 上确认当前信息。本评测的核实日期为 2026-09-12。',
      },
      models: {
        id: 'models',
        title: '模型：Gemma 4 与 LiteRT-LM',
        content: [
          '**Google AI Edge Gallery 以谷歌的 Gemma 模型系列为核心，目前是 2026 年 4 月 2 日发布的 Gemma 4 代际。** Gemma 4 提供多种尺寸——为手机设计的 E2B 和 E4B、26B 混合专家变体、31B 变体，以及多模态的 **Gemma 4 12B Unified** 模型，根据谷歌自己的文档，该模型在单一架构中处理文本、图像及音频输入。该应用还支持 **Gemma 3n**，这是 Gemma 4 发布之前为设备端技术栈增加音频理解能力的早期 Gemma 版本。',
          '除了内置的 Gemma 模型外，该应用还允许通过应用模型管理界面中的模型卡片 URL，**以 LiteRT 格式从 Hugging Face 导入用户自己的模型**。谷歌自己的项目文档确认了这一用于模型发现和下载的 Hugging Face 集成功能，但没有说明诸如受限模型仓库是否需要 Hugging Face 访问令牌等细节——本评测将其视为未经证实的信息，而非假定某种特定的令牌流程；在尝试导入受限模型之前，请查看当前的应用内说明。',
          '在功能方面，该应用围绕这些模型打包了几种不同的模式：显示模型中间推理步骤的 **带思考模式的 AI 聊天**、对相机或相册中照片进行多模态分析的 **Ask Image**、设备端语音转录和翻译的 **Audio Scribe**、在基础模型之上叠加维基百科查询等外部工具访问的 **Agent Skills**，以及用于在选定模型前比较下载大小和设备端性能的 **模型管理与基准测试** 界面。',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '平台：iOS App Store 与开源项目',
        itemHeadings: true,
        columns: ['平台', '预期情况', '重要说明'],
        rows: [
          {
            '平台': 'iPhone / iPad',
            '预期情况': '根据本评测所评估的 App Store 列表，需要 iOS 17.0 或更新版本。',
            '重要说明': '这是本评测涵盖的主要平台；列表中未将支持的芯片代际与操作系统要求分开列出。',
          },
          {
            '平台': 'Mac',
            '预期情况': '需要 macOS 14.0 或更新版本，且搭载 Apple M1 或更新芯片。',
            '重要说明': '与 iPhone/iPad 应用相同的通用二进制文件和 App Store 列表；根据列出的要求，Intel Mac 不受支持。',
          },
          {
            '平台': 'Apple Vision Pro',
            '预期情况': '列为兼容，需要 visionOS 1.0 或更新版本。',
            '重要说明': '本评测未对 Vision Pro 体验进行独立测试——应视为 App Store 列出的兼容性，而非经过实际验证的功能。',
          },
          {
            '平台': 'Android',
            '预期情况': '同一开源项目的独立构建版本可通过 Google Play 获取（根据谷歌 2025 年 9 月 9 日的公告，已从仅限 GitHub 分发转为 Google Play 上的公开测试版），或通过 GitHub 直接下载 APK。',
            '重要说明': '与本评测所涵盖的 iOS App Store 应用并非同一安装；不要假定 iOS 特有的行为（例如确切的 App Store 隐私标签）同样适用于 Android 版本。',
          },
          {
            '平台': '更广泛的开源项目',
            '预期情况': '[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) 采用 Apache 2.0 许可证，涵盖 Android、iOS 和桌面端分发。',
            '重要说明': '谷歌自己的文档将整个项目标注为"实验性测试版"——这一状态适用于所有平台，而不仅仅是 iOS。',
          },
        ],
        note: '平台要求和测试版状态可能随更新而变化——在依赖某个特定设备或操作系统的支持之前，请直接在 [App Store 列表](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) 或 [GitHub 仓库](https://github.com/google-ai-edge/gallery) 中确认当前的具体信息。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私：App Store标签实际说了什么',
        content: [
          '**模型下载完成后，推理在设备上进行——聊天提示词和模型输出不会为了生成响应而发送到谷歌服务器。** 不过，这与"该应用不收集任何数据"的说法并不相同，本评测将这两种说法分开处理，而非混为一谈。',
          '苹果针对 [Google AI Edge Gallery 的 App Store 列表](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) 的隐私营养标签指出，**与你的身份相关联的数据**包括设备 ID、性能数据和诊断信息，而**与你的身份不相关联的数据**包括大致位置、产品交互数据和崩溃报告。这是苹果标准的、由开发者自行声明的隐私标签格式，并非 PromptQuorum 对该应用网络流量的独立审计。',
          '对于关注隐私的读者而言，实际的区别在于：你的对话内容以及你提供给模型的任何图像或音频，在推理过程中都留在设备上，但谷歌仍会收集有关该应用本身使用情况的类似遥测的数据（设备标识符、性能/诊断数据、大致位置、崩溃报告）。需要更严格的"完全不收集任何数据"立场的读者，应将其与 [Private LLM](/zh/power-local-llm/private-llm-review) 的 App Store 隐私标签进行比较，后者声明该应用不收集任何数据。',
        ],
        items: [
          '**聊天无需账户。** 该应用下载和运行模型无需登录。',
          '**推理期间聊天内容留在设备上。** 模型下载完成后，提示词和响应由 LiteRT-LM 在本地处理。',
          '**根据苹果对此列表的隐私标签，设备 ID、性能数据和诊断信息与你的身份相关联。**',
          '**根据同一标签，大致位置、产品交互数据和崩溃报告被收集，但不与你的身份相关联。**',
          '**本评测依据苹果自行声明的隐私标签**，而非对该应用网络流量的独立审计。',
        ],
      },
      history: {
        id: 'history',
        title: '历史与版本里程碑',
        content: [
          '**Google AI Edge Gallery 最初是一个仅限 GitHub 的开源项目，之后才登陆应用商店。** 以下时间线来源于谷歌自己的博客文章和该项目的 GitHub 仓库。',
        ],
        items: [
          '**GitHub 首次发布。** [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) 项目最初是一个用于设备端 Gemma 模型的开源 Android/桌面端展示项目，最初以直接 APK 下载的方式分发。',
          '**2025年9月9日。** 谷歌自己的[发布公告博客文章](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/)确认该项目从仅限 GitHub 分发转为 Google Play Store 上的公开测试版，并通过 MediaPipe LLM Inference API 借助 Gemma 3n 增加了音频支持（语音转文字和语音转翻译文字）。谷歌自己的文章指出，该项目自 GitHub 上线两个月内 APK 下载量达到 50 万次，并描述了未来"将该应用带给 iOS 用户"的计划。',
          '**2026年4月2日。** 谷歌 DeepMind 在 Apache 2.0 许可证下发布了 **Gemma 4**，提供 E2B、E4B、26B 和 31B 尺寸，随后于 2026 年 6 月 3 日发布了多模态的 **Gemma 4 12B Unified** 变体。',
          '**iOS App Store 上线。** Google AI Edge Gallery 以 [Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)（App Store ID 6749645337）登陆 App Store，实现了 2025 年 9 月博客文章中宣布的 iOS 计划；独立报道描述该应用在 Gemma 4 发布前后跻身 App Store 生产力类应用下载量前列。',
          '**版本 1.0.10（2026年9月4日）。** 撰写本评测时的当前版本，根据其发行说明，新增了"覆盖 100 个不同国家的全球翻译和本地化支持"以及错误修复。',
        ],
        note: '版本历史和日期来源于谷歌自己的开发者博客和该项目的 GitHub 仓库。在依赖某个特定功能之前，请直接在 App Store 中确认当前版本和发行说明。',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优点': '免费、无需账户、无需订阅',
            '实际使用中的意义': '从 App Store 安装后即可立即开始下载模型，无需任何购买步骤。',
            '局限/注意事项': '谷歌将该项目标注为"实验性测试版"——应预期它比成熟的付费应用更粗糙。',
          },
          {
            '优点': '发布首日即可访问 Gemma 4',
            '实际使用中的意义': '这是直接在 iPhone 上体验谷歌当前旗舰级开放权重模型系列最快的方式之一。',
            '局限/注意事项': '更大尺寸的 Gemma 4（26B、31B）可能超出典型 iPhone 硬件所能舒适运行的范围；该应用未公布固定的每模型内存要求。',
          },
          {
            '优点': '导入自定义 Hugging Face 模型',
            '实际使用中的意义': '不局限于谷歌内置的 Gemma 模型——可加载 Hugging Face 上 LiteRT 格式的模型。',
            '局限/注意事项': '受限 Hugging Face 仓库的要求（例如访问令牌）没有清楚记录；在尝试受限导入之前，请核实当前的应用内说明。',
          },
          {
            '优点': '设备端推理（LiteRT-LM）',
            '实际使用中的意义': '模型下载完成后，聊天提示词和响应在本地处理，生成过程无需服务器往返。',
            '局限/注意事项': 'App Store 隐私标签仍列出设备 ID、性能数据、诊断信息、大致位置和崩溃报告为已收集——这并非零遥测应用。',
          },
          {
            '优点': '多模态功能（Ask Image、Audio Scribe）',
            '实际使用中的意义': '无需单独的应用即可分析照片或在设备端转录语音。',
            '局限/注意事项': '多模态支持取决于所加载的 Gemma 模型（Gemma 3n 及部分 Gemma 4 尺寸支持音频，但并非库中所有模型都支持）。',
          },
          {
            '优点': '开源且跨平台',
            '实际使用中的意义': '同一底层项目也可在 Android 上运行，源代码在 GitHub 上以 Apache 2.0 许可证公开。',
            '局限/注意事项': '本评测仅评估 iOS App Store 版本；Android 上的行为、隐私标签和功能对等性不应被假定为相同。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Google AI Edge Gallery 与替代方案对比',
        columns: ['应用', '平台', '价格', '模型灵活性', '主要区别'],
        rows: [
          {
            '应用': 'Google AI Edge Gallery',
            '平台': 'iPhone/iPad/Mac/Vision Pro（Android 单独提供）',
            '价格': '免费',
            '模型灵活性': '内置 Gemma 4 系列；可导入自定义 Hugging Face LiteRT 模型',
            '主要区别': '由谷歌打造，标注为"实验性测试版"，是在 iPhone 上体验 Gemma 4 最快的途径',
          },
          {
            '应用': '[Private LLM](/zh/power-local-llm/private-llm-review)',
            '平台': 'iPhone/iPad/Mac（仅限 Apple）',
            '价格': '4.99 美元一次性购买',
            '模型灵活性': '140+ 精选模型；OmniQuant/GPTQ 量化',
            '主要区别': '付费、闭源，作为消费级产品更成熟、维护更积极',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iPhone/iPad，部分支持 Android',
            '价格': '免费，开源',
            '模型灵活性': '用户从 Hugging Face 或其他地方获取的任意 GGUF 文件',
            '主要区别': '与 Google AI Edge Gallery 一样免费且完全开源，但不绑定 Gemma 或 LiteRT-LM',
          },
          {
            '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
            '平台': 'iPhone/iPad/Mac',
            '价格': '免费',
            '模型灵活性': '基于 Apple MLX 离线运行 Llama、Gemma、Qwen 和 DeepSeek',
            '主要区别': '与 Google AI Edge Gallery 一样免费，但构建在苹果自家的 MLX 框架上，而非 LiteRT-LM',
          },
          {
            '应用': '[Loci AI](/zh/power-local-llm/loci-ai-review-offline-local-ai)',
            '平台': 'iPhone/iPad/Android/Mac/Windows',
            '价格': '参见当前列表',
            '模型灵活性': '约 10 个模型的精选库；受支持模型中包括 Gemma 4 E2B/E4B',
            '主要区别': '比 Google AI Edge Gallery 的 iOS 版本覆盖的跨平台范围更广，但精选模型列表更小',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化——决定前请在各应用自己的列表中核实当前具体信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用 Google AI Edge Gallery',
        items: [
          '**想免费在 iPhone 上试用 Gemma 4 的读者。** 这是完全在设备端运行谷歌当前旗舰级开放权重模型系列最快的方式之一。',
          '**评估 LiteRT-LM 的开发者。** 该应用也可作为谷歌设备端推理运行时的实践演示，在将 LiteRT-LM 集成到自己的项目之前会很有用。',
          '**希望在不先搭建完整开发环境的情况下，尝试 LiteRT 格式的自定义 Hugging Face 模型的读者。**',
          '**能接受"实验性测试版"标签的读者。** 他们更看重体验最新的 Gemma 版本，而非一款完全成熟、长期确立的消费级应用。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用 Google AI Edge Gallery',
        items: [
          '**想要成熟、积极维护的消费级产品的读者。** [Private LLM](/zh/power-local-llm/private-llm-review) 和 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 作为受维护且非测试版的应用都有更长的记录。',
          '**想要尽可能严格的隐私标签的读者。** App Store 列表显示设备 ID、性能数据、诊断信息、大致位置和崩溃报告均被收集——[Private LLM](/zh/power-local-llm/private-llm-review) 的标签则声明完全不收集数据。',
          '**需要在同一次安装中支持 Android 的读者。** Android 版本是来自 [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) 的独立下载，并非本评测所涵盖的 iOS App Store 应用。',
          '**想在手机上运行最大尺寸 Gemma 4 的读者。** 26B 和 31B 变体在典型 iPhone 内存中不太可能舒适运行；该应用未公布固定的每模型内存下限来加以确认。',
          '**希望获得集中管理的多用户部署的团队。** 这是一款面向单用户、单设备的消费级应用，没有管理控制台或共享许可证管理。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Google AI Edge Gallery 是免费的吗？',
            a: '是的。[App Store 列表](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)可免费下载，无订阅，无应用内购买，本评测于 2026-09-12 对此进行了核实。',
          },
          {
            q: 'Google AI Edge Gallery 运行哪些模型？',
            a: '它运行谷歌的 Gemma 模型系列，目前是 Gemma 4 代际（E2B、E4B、26B、31B 及多模态 12B Unified 变体，于 2026 年 4 月至 6 月间发布），以及更早的 Gemma 3n。用户还可以从 Hugging Face 以 LiteRT 格式导入自定义模型。',
          },
          {
            q: 'Google AI Edge Gallery 在 Android 上也能用吗？',
            a: '可以，但作为独立分发版本。底层开源项目 [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) 除了本评测所涵盖的 iOS App Store 列表外，还通过 Google Play 和直接 APK 提供 Android 版本。',
          },
          {
            q: 'Google AI Edge Gallery 会收集我的数据吗？',
            a: '模型下载完成后，聊天提示词和模型响应在设备上处理，但苹果针对 iOS 列表的隐私标签指出，设备 ID、性能数据和诊断信息与你的身份相关联，而大致位置、产品交互数据和崩溃报告在收集时不与你的身份关联。这并非一款无数据应用，尽管推理本身在本地运行。',
          },
          {
            q: '什么是 LiteRT-LM？',
            a: '[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) 是谷歌面向生产环境的开源推理框架，用于在手机等边缘设备上运行大语言模型。它取代了旧版 Gallery 应用中使用的旧版 MediaPipe LLM Inference API。',
          },
          {
            q: '我可以将自己的模型导入 Google AI Edge Gallery 吗？',
            a: '可以——谷歌自己的文档确认，该应用支持通过模型卡片 URL 从 Hugging Face 以 LiteRT 格式加载自定义模型。关于受限 Hugging Face 仓库的要求（例如是否需要访问令牌）的细节没有清楚记录；尝试之前请查看当前的应用内说明。',
          },
          {
            q: 'Google AI Edge Gallery 是成品还是测试版？',
            a: '谷歌自己在 GitHub 上的项目文档将其描述为"实验性测试版"，并请求用户反馈——这一状态适用于 iOS、Android 和桌面端整个底层项目，而不仅仅是某一个平台。',
          },
          {
            q: 'iOS 版本支持哪些设备？',
            a: '根据 App Store 列表：iOS 17.0 或更新版本的 iPhone 和 iPad，macOS 14.0 或更新版本且搭载 Apple M1 或更新芯片的 Mac，以及 visionOS 1.0 或更新版本的 Apple Vision Pro。',
          },
          {
            q: 'Google AI Edge Gallery 与 Private LLM 相比如何？',
            a: 'Google AI Edge Gallery 免费、由谷歌打造、标注为实验性测试版，以通过 LiteRT-LM 运行的 Gemma 模型为核心。[Private LLM](/zh/power-local-llm/private-llm-review) 是 4.99 美元一次性购买、闭源，提供更大的 140+ 精选模型库，作为受维护消费级应用的记录也更长。想免费体验 Gemma 4 就选 Google AI Edge Gallery；想要更成熟、维护更积极的付费体验就选 Private LLM。',
          },
          {
            q: 'Google AI Edge Gallery 支持音频和图像输入吗？',
            a: '支持，取决于所加载的模型。Ask Image 提供多模态照片分析，Audio Scribe 提供设备端语音转录和翻译；底层 Gemma 模型的音频支持始于 Gemma 3n，并在包括 12B Unified 变体在内的特定 Gemma 4 尺寸中延续。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Google AI Edge Gallery 在本系列中占有一席之地，因为它是完全在 iPhone 上运行谷歌自家 Gemma 4 模型最快、免费的方式，背后有谷歌面向生产环境的 LiteRT-LM 运行时支撑，而非第三方对开源模型的封装。其对 Hugging Face 导入的支持以及多模态功能（Ask Image、Audio Scribe、Thinking Mode）超越了一个简单的聊天客户端。权衡也同样真实：谷歌自己将该项目标注为"实验性测试版"，iOS App Store 隐私标签显示的数据收集比最严格的注重隐私的竞品更多，而且作为受维护消费级产品，该应用的记录比 Private LLM 等应用更短。特别想免费获得最新 Gemma 模型的读者，或作为开发者评估 LiteRT-LM 的读者，应当安装它。想要最成熟、历史最悠久或隐私最严格的移动端本地 AI 应用的读者，应先将其与 [Private LLM](/zh/power-local-llm/private-llm-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 进行比较。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) — 价格、平台要求、隐私标签、评价及版本历史。',
          '[GitHub 上的 google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) — 项目概览、支持的平台、Hugging Face 导入、许可证及测试版状态。',
          '[GitHub 上的 LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) — 该应用所基于的设备端推理运行时。',
          '[Google AI Edge Gallery 发布公告博客文章](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 2025年9月9日关于音频支持和 Google Play 可用性的公告。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Private LLM 评测](/zh/power-local-llm/private-llm-review) — 一款更成熟的付费替代品，拥有更大的精选模型库。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 一款免费开源、支持手动导入 GGUF 的替代品。',
          '[Locally AI 评测](/zh/power-local-llm/locally-ai-review) — 一款基于 Apple MLX、支持类似模型系列的免费替代品。',
          '[Loci AI 评测](/zh/power-local-llm/loci-ai-review-offline-local-ai) — 一款同样支持 Gemma 4 的跨平台设备端应用。',
          '[完整的本地 LLM 软件目录](/zh/power-local-llm/local-llm-software-directory) — 涵盖所有平台的本地 LLM 工具更广泛目录，包括 Google AI Edge Gallery 的条目。',
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
    heroImage: '/images/google-ai-edge-gallery-review-hero-ar.webp',
    title: 'مراجعة Google AI Edge Gallery (2026): دردشة Gemma 4 على الجهاز لـiPhone',
    seoTitle: 'مراجعة Google AI Edge Gallery 2026: تطبيق Gemma لـiOS',
    intro:
      'Google AI Edge Gallery تطبيق مجاني من [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) يُشغِّل نماذج ذكاء اصطناعي مفتوحة المصدر بالكامل على iPhone أو iPad أو Mac، باستخدام بيئة تشغيل الاستدلال على الجهاز من جوجل، [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM). تتناول هذه المراجعة تحديداً صفحة App Store لـiOS (معرّف App Store 6749645337، الإصدار 1.0.10، تقييم 4.0 من 5 نجوم من أكثر من 160 تقييماً وقت كتابة هذه المراجعة) — وهي مقالة مرافقة [لإدراج Google AI Edge Gallery في دليل برامج الذكاء الاصطناعي المحلية](/ar/power-local-llm/local-llm-software-directory). التطبيق هو الواجهة الاستهلاكية لمشروع مفتوح المصدر أكبر، [google-ai-edge/gallery على GitHub](https://github.com/google-ai-edge/gallery)، والذي يُوزَّع أيضاً على Android وكملف APK مباشر — لا تُقيِّم هذه المراجعة نسخة Android. على iOS، يُشغِّل التطبيق عائلة نماذج Gemma من جوجل، بما في ذلك جيل Gemma 4 الحالي، بلا اتصال تماماً بعد تنزيل النموذج، ويتيح استيراد نماذج إضافية من [Hugging Face](https://huggingface.co/) بصيغة LiteRT. السؤال العملي للقارئ الذي يقارن تطبيقات الذكاء الاصطناعي على الجهاز لـiPhone هو كيف يقارَن تطبيق مجاني، تصونه جوجل، ومُصنَّف رسمياً بأنه "نسخة تجريبية اختبارية"، ببدائل مدفوعة أكثر نضجاً مثل [Private LLM](/ar/power-local-llm/private-llm-review) أو مجانية مثل [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
    metaDescription:
      'مراجعة Google AI Edge Gallery 2026: تطبيق iOS مجاني (معرّف App Store 6749645337)، دردشة Gemma 4 على الجهاز عبر LiteRT-LM، 4.0 نجوم/160+ تقييماً. الميزات، الخصوصية، والمقارنة مع Private LLM وPocketPal AI.',
    twitterDescription:
      'مراجعة Google AI Edge Gallery 2026: تطبيق iOS المجاني من جوجل لتشغيل Gemma 4 بالكامل على الجهاز عبر LiteRT-LM. الميزات، ملصق خصوصية App Store، والمقارنة مع Private LLM وPocketPal AI.',
    audience:
      'مستخدمو iPhone وiPad الذين يُقيِّمون تطبيق جوجل المجاني للذكاء الاصطناعي على الجهاز — تغطي الميزات، دعم Gemma 4، ملصق خصوصية App Store، العلاقة بين تطبيق iOS ومشروع Android/GitHub الأوسع، والمقارنة مع البدائل المدفوعة والمجانية.',
    readTime: '9 دقائق قراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Google AI Edge Gallery',
    targetKeywords: [
      'مراجعة google ai edge gallery',
      'google ai edge gallery ios',
      'تطبيق google ai edge gallery',
      'gemma 4 على الجهاز iphone',
      'مراجعة litert-lm',
      'google ai edge gallery مقابل private llm',
      'google ai edge gallery مقابل pocketpal ai',
      'تطبيق ذكاء اصطناعي محلي مجاني iphone',
    ],
    current_models_mentioned: ['Gemma 4 E2B', 'Gemma 4 E4B', 'Gemma 4 26B', 'Gemma 4 31B', 'Gemma 4 12B Unified', 'Gemma 3n'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iOS 17+)', 'Mac بمعالج Apple Silicon (M1 أو أحدث، macOS 14+)', 'Apple Vision Pro (visionOS 1.0+)'],
    leadAnswerBlock:
      '**Google AI Edge Gallery تطبيق iOS مجاني من [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) يُشغِّل Gemma 4 ونماذج أخرى مفتوحة المصدر بالكامل على الجهاز عبر بيئة تشغيل [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) من جوجل، دون اشتراك ودون تكلفة لكل رسالة.** إنه نسخة iOS من المشروع مفتوح المصدر [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)، والمتوفر أيضاً لـAndroid؛ تُصنِّف جوجل نفسها التطبيق بأنه "نسخة تجريبية اختبارية". بمجرد تنزيل نموذج، تعمل الدردشة بلا اتصال، لكن ملصق خصوصية App Store يُظهر أن جوجل لا تزال تجمع بعض بيانات تشخيص الجهاز والاستخدام — هذا ليس تطبيقاً بلا أي قياس عن بُعد على الإطلاق، رغم أن محتوى الرسائل نفسه يبقى على الجهاز. القرّاء الراغبون في بديل مدفوع أكثر نضجاً يجب أن يقارنوه بـ[Private LLM](/ar/power-local-llm/private-llm-review)؛ ومن يريد بديلاً مجانياً ومفتوح المصدر باستيراد يدوي لملفات GGUF، بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق تثبيت Google AI Edge Gallery على iPhone؟',
        answer:
          'نعم، إذا كنت تريد وصولاً مجانياً وبلا حساب إلى نماذج Gemma 4 الحالية من جوجل تعمل بالكامل على الجهاز، وترتاح لتطبيق تُصنِّفه جوجل نفسها بأنه "نسخة تجريبية اختبارية" بدلاً من منتج استهلاكي مصقول. إنه خيار ممتاز لتجربة الاستدلال على الجهاز وميزات Gemma 4 متعددة الوسائط مجاناً. تجاوزه إذا كنت تريد تجربة تطبيق أكثر نضجاً ورعاية نشطة — كلٌّ من [Private LLM](/ar/power-local-llm/private-llm-review) و[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أكثر رسوخاً في هذا الجانب.',
        bullets: [
          'مجاني على Apple App Store؛ بلا اشتراك، وبلا مشتريات داخل التطبيق.',
          'يُشغِّل Gemma 4 (E2B وE4B و26B و31B و12B Unified) ونماذج أخرى مفتوحة المصدر عبر بيئة تشغيل LiteRT-LM من جوجل.',
          'iPhone وiPad وMac وApple Vision Pro — يتطلب iOS 17.0+ أو macOS 14.0+ بمعالج Apple Silicon.',
          'متوفر أيضاً كتطبيق Android مفتوح المصدر وكملف APK مباشر على github.com/google-ai-edge/gallery — تغطي هذه المراجعة صفحة iOS فقط.',
          'ملصق خصوصية App Store يذكر معرّف الجهاز وبيانات الأداء والتشخيصات ضمن البيانات المُجمَّعة — يبقى محتوى الدردشة نفسه على الجهاز، لكن هذا ليس تطبيقاً "بلا بيانات على الإطلاق".',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Google AI Edge Gallery', anchor: 'what-is-google-ai-edge-gallery' },
      { label: 'احصل على التطبيق', anchor: 'get-it' },
      { label: 'النماذج: Gemma 4 وLiteRT-LM', anchor: 'models' },
      { label: 'المنصات: App Store لـiOS مقابل المشروع مفتوح المصدر', anchor: 'platforms' },
      { label: 'الخصوصية: ما يقوله ملصق App Store فعلاً', anchor: 'privacy' },
      { label: 'التاريخ ومحطات الإصدارات', anchor: 'history' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Google AI Edge Gallery مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Google AI Edge Gallery', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Google AI Edge Gallery', anchor: 'who-should-not-use' },
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
            text: 'Google AI Edge Gallery تطبيق iOS مجاني (معرّف App Store 6749645337، الإصدار 1.0.10) يُشغِّل Gemma 4 ونماذج أخرى مفتوحة المصدر بالكامل على الجهاز عبر بيئة تشغيل LiteRT-LM من جوجل، وتُصنِّفه جوجل نفسها بأنه "نسخة تجريبية اختبارية".',
          },
          {
            type: 'plain-terms',
            text: 'إنه تطبيق العرض التوضيحي الخاص بجوجل لتجربة نماذج Gemma الخاصة بها مباشرة على هاتفك، بلا اتصال، ودون حساب أو اشتراك — نفس المشروع مفتوح المصدر الأساسي له أيضاً نسخة Android ومستودع كود مصدري قابل للتنزيل.',
          },
        ],
        items: [
          'السعر: مجاني على [Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)؛ بلا اشتراك وبلا مشتريات داخل التطبيق.',
          'المطوّر: Google LLC، الإصدار الحالي 1.0.10 (صدر في 4 سبتمبر 2026)، بتقييم 4.0 من 5 من أكثر من 160 تقييماً.',
          'المنصات (صفحة iOS): iPhone وiPad بنظام iOS 17.0+، Mac بنظام macOS 14.0+ ومعالج Apple M1 أو أحدث، Apple Vision Pro بنظام visionOS 1.0+.',
          'النماذج: عائلة Gemma 4 (E2B وE4B و26B و31B والنسخة متعددة الوسائط 12B Unified)، بالإضافة إلى Gemma 3n؛ يمكن استيراد نماذج مخصصة من Hugging Face بصيغة LiteRT.',
          'مفتوح المصدر: المشروع الأساسي [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) مرخّص بموجب Apache 2.0 ومتوفر أيضاً لـAndroid وكملف APK مباشر — تغطي هذه المراجعة نسخة App Store لـiOS.',
          'الحالة: ملف README الخاص بجوجل نفسها على GitHub يصف المشروع بأنه "نسخة تجريبية اختبارية".',
          'الخصوصية: يذكر ملصق App Store أن معرّف الجهاز وبيانات الأداء والتشخيصات مرتبطة بهويتك، بينما الموقع التقريبي وبيانات التفاعل مع المنتج وتقارير الأعطال تُجمَع دون ربطها بهويتك — تتم معالجة رسائل الدردشة على الجهاز، لكن هذا ليس تطبيقاً بلا قياس عن بُعد.',
        ],
      },
      whatIsGoogleAIEdgeGallery: {
        id: 'what-is-google-ai-edge-gallery',
        title: 'ما هو Google AI Edge Gallery',
        content: [
          '**Google AI Edge Gallery هو تطبيق العرض التوضيحي الخاص بجوجل لتشغيل نماذج ذكاء اصطناعي توليدي مفتوحة المصدر مباشرة على هاتف أو جهاز لوحي أو Mac، دون رحلة ذهاب وإياب إلى خادم من أجل الاستدلال.** يُبنى على [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)، إطار عمل الاستدلال الموجّه للإنتاج من جوجل لتشغيل نماذج اللغة الكبيرة على أجهزة الحافة، والذي خلف بدوره واجهة برمجة MediaPipe LLM Inference القديمة المستخدمة في إصدارات سابقة من المشروع.',
          'صفحة iOS التي تُراجَع هنا هي [Google AI Edge Gallery على Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (معرّف App Store 6749645337)، طورتها ونشرتها Google LLC، وهي حالياً في الإصدار 1.0.10 وتقييمها 4.0 من 5 نجوم من أكثر من 160 تقييماً. التنزيل مجاني، دون مستوى اشتراك.',
          'هذا التطبيق نفسه هو أحد قنوات توزيع مشروع مفتوح المصدر أكبر، [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)، الذي تصفه جوجل بأنه "الوجهة الأولى لتشغيل أقوى نماذج اللغة الكبيرة (LLM) مفتوحة المصدر في العالم على جهازك المحمول". يوفر هذا المشروع أيضاً نسخة Android (عبر Google Play وملف APK مباشر) ونسخ لسطح المكتب. توثيق المشروع الخاص بجوجل نفسه يُصنِّف كل هذا الجهد بأنه **"نسخة تجريبية اختبارية"** وليس منتجاً استهلاكياً منتهياً — وهو تمييز تعامله هذه المراجعة كأمر جوهري لا شكلي، إذ تتم مقارنة Google AI Edge Gallery طوال هذه المجموعة بتطبيقات صُمِّمت خصيصاً لتكون منتجات استهلاكية مصقولة.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: 'احصل على التطبيق',
        itemHeadings: true,
        content: [
          '**Google AI Edge Gallery مجاني التنزيل، دون خطوة شراء.** تغطي دعوة العمل في هذه المراجعة صفحة iOS تحديداً؛ قنوات Android والكود المصدري هي تنزيلات منفصلة لنفس المشروع مفتوح المصدر الأساسي، وليست نفس التثبيت.',
          'هذه المراجعة مقالة مرافقة [لإدراج Google AI Edge Gallery في دليل برامج الذكاء الاصطناعي المحلية](/ar/power-local-llm/local-llm-software-directory)، الذي يُدرِجه إلى جانب كل تطبيقات الذكاء الاصطناعي المحلية الأخرى للجوال التي يغطيها هذا الموقع.',
        ],
        columns: ['المنصة', 'أين تجده', 'ملاحظات'],
        rows: [
          {
            'المنصة': 'iPhone / iPad',
            'أين تجده': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'ملاحظات': 'مجاني. يتطلب iOS 17.0 أو أحدث. هذه هي الصفحة التي تُقيِّمها هذه المراجعة.',
          },
          {
            'المنصة': 'Mac',
            'أين تجده': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'ملاحظات': 'نفس صفحة App Store؛ يتطلب macOS 14.0+ ومعالج Apple M1 أو أحدث.',
          },
          {
            'المنصة': 'Apple Vision Pro',
            'أين تجده': '[Apple App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            'ملاحظات': 'مُدرَج كمتوافق مع visionOS 1.0+؛ لم تُختبَر هذه التجربة بشكل مباشر لهذه المراجعة.',
          },
          {
            'المنصة': 'Android',
            'أين تجده': '[google-ai-edge/gallery على GitHub](https://github.com/google-ai-edge/gallery)',
            'ملاحظات': 'نسخة منفصلة من نفس المشروع مفتوح المصدر عبر Google Play أو ملف APK مباشر — لا تغطيها هذه المراجعة.',
          },
          {
            'المنصة': 'الكود المصدري',
            'أين تجده': '[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            'ملاحظات': 'مرخّص بموجب Apache 2.0؛ المستودع الذي يقف خلف كل قنوات التوزيع أعلاه.',
          },
        ],
        note: 'قد تتغير إتاحة App Store والسعر وأرقام الإصدارات دون إشعار مسبق. تحقق من الصفحة الحالية على [صفحة App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) قبل التثبيت. تم التحقق لهذه المراجعة بتاريخ 2026-09-12.',
      },
      models: {
        id: 'models',
        title: 'النماذج: Gemma 4 وLiteRT-LM',
        content: [
          '**يتمحور Google AI Edge Gallery حول عائلة نماذج Gemma من جوجل، وحالياً جيل Gemma 4 الصادر في 2 أبريل 2026.** يتوفر Gemma 4 بأحجام متعددة — E2B وE4B (مصممتان للهواتف)، ونسخة 26B من نوع مزيج الخبراء، ونسخة 31B، ونموذج **Gemma 4 12B Unified** متعدد الوسائط الذي يعالج، وفق توثيق جوجل نفسها، النص والصورة (والصوت) في بنية واحدة. يدعم التطبيق أيضاً **Gemma 3n**، وهو إصدار Gemma أقدم أضاف فهم الصوت إلى المكدس على الجهاز قبل صدور Gemma 4.',
          'بالإضافة إلى نماذج Gemma المُضمَّنة، يتيح التطبيق **استيراد نماذجك الخاصة من Hugging Face بصيغة LiteRT**، باستخدام رابط URL لبطاقة النموذج داخل شاشة إدارة النماذج بالتطبيق. يؤكد توثيق جوجل نفسه وجود هذا التكامل مع Hugging Face لاكتشاف النماذج وتنزيلها، لكنه لا يوضح تفاصيل مثل ما إذا كان يلزم رمز وصول Hugging Face لمستودعات النماذج المقيّدة — تتعامل هذه المراجعة مع هذا الأمر كغير مؤكد بدلاً من افتراض آلية رمز محددة؛ تحقق من التعليمات الحالية داخل التطبيق قبل محاولة استيراد نموذج مقيَّد.',
          'من ناحية الميزات، يُجمِّع التطبيق عدة أوضاع مختلفة حول هذه النماذج: **دردشة ذكاء اصطناعي مع وضع التفكير** (يعرض خطوات الاستدلال الوسيطة للنموذج)، و**Ask Image** (تحليل متعدد الوسائط لصورة من الكاميرا أو المعرض)، و**Audio Scribe** (نسخ صوتي وترجمة على الجهاز)، و**Agent Skills** (وصول لأدوات خارجية، مثل بحث ويكيبيديا، فوق النموذج الأساسي)، وشاشة **إدارة النماذج والقياس المرجعي** لمقارنة حجم التنزيل والأداء على الجهاز قبل اختيار نموذج.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'المنصات: App Store لـiOS مقابل المشروع مفتوح المصدر',
        itemHeadings: true,
        columns: ['المنصة', 'ما تتوقعه', 'ملاحظة مهمة'],
        rows: [
          {
            'المنصة': 'iPhone / iPad',
            'ما تتوقعه': 'يتطلب iOS 17.0 أو أحدث، وفق صفحة App Store التي تُقيِّمها هذه المراجعة.',
            'ملاحظة مهمة': 'هذه هي المنصة الأساسية التي تغطيها هذه المراجعة؛ لا يُفصَّل جيل الشريحة المدعوم بمعزل عن متطلب نظام التشغيل في الصفحة.',
          },
          {
            'المنصة': 'Mac',
            'ما تتوقعه': 'يتطلب macOS 14.0 أو أحدث بمعالج Apple M1 أو أحدث.',
            'ملاحظة مهمة': 'نفس الملف التنفيذي الشامل ونفس صفحة App Store مثل تطبيق iPhone/iPad؛ أجهزة Mac بمعالج Intel غير مدعومة وفق المتطلب المذكور.',
          },
          {
            'المنصة': 'Apple Vision Pro',
            'ما تتوقعه': 'مُدرَج كمتوافق، يتطلب visionOS 1.0 أو أحدث.',
            'ملاحظة مهمة': 'لم تختبر هذه المراجعة تجربة Vision Pro بشكل مستقل — تعامل معها كتوافق مُدرَج في App Store، وليست ميزة موثّقة عملياً.',
          },
          {
            'المنصة': 'Android',
            'ما تتوقعه': 'تتوفر نسخة منفصلة من نفس المشروع مفتوح المصدر عبر Google Play (انتقلت من التوزيع الحصري عبر GitHub إلى نسخة تجريبية مفتوحة على Google Play وفق إعلان جوجل بتاريخ 9 سبتمبر 2025) أو كملف APK مباشر من GitHub.',
            'ملاحظة مهمة': 'ليست نفس التثبيت مثل تطبيق App Store لـiOS الذي تغطيه هذه المراجعة؛ لا تفترض أن السلوك الخاص بـiOS (مثل ملصق الخصوصية الدقيق) ينتقل إلى نسخة Android.',
          },
          {
            'المنصة': 'المشروع مفتوح المصدر الأوسع',
            'ما تتوقعه': '[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) مرخّص بموجب Apache 2.0 ويشمل التوزيع على Android وiOS وسطح المكتب.',
            'ملاحظة مهمة': 'توثيق جوجل نفسه يُصنِّف كل هذا الجهد بأنه "نسخة تجريبية اختبارية" — تنطبق هذه الحالة على جميع المنصات، وليس iOS فقط.',
          },
        ],
        note: 'قد تتغير متطلبات المنصة وحالة النسخة التجريبية بين التحديثات — تحقق من التفاصيل الحالية مباشرة على [صفحة App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) أو [مستودع GitHub](https://github.com/google-ai-edge/gallery) قبل الاعتماد على دعم جهاز أو نظام تشغيل محدد.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية: ما يقوله ملصق App Store فعلاً',
        content: [
          '**يحدث الاستدلال على الجهاز بمجرد تنزيل نموذج — لا تُرسَل رسائل الدردشة ومخرجات النموذج إلى خادم جوجل لتوليد استجابة.** مع ذلك، هذا ليس نفس الادعاء بأن "التطبيق لا يجمع أي بيانات"، وتتعامل هذه المراجعة مع هاتين الجملتين بشكل منفصل بدلاً من الخلط بينهما.',
          'يذكر ملصق خصوصية Apple لـ[صفحة App Store الخاصة بـGoogle AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) أن **البيانات المرتبطة بهويتك** تشمل معرّف الجهاز وبيانات الأداء والتشخيصات، وأن **البيانات غير المرتبطة بهويتك** تشمل الموقع التقريبي وبيانات التفاعل مع المنتج وتقارير الأعطال. هذا هو الشكل القياسي لملصق الخصوصية المُعلَن من قِبل المطوّر لدى Apple، وليس تدقيقاً مستقلاً من PromptQuorum لحركة شبكة التطبيق.',
          'التمييز العملي للقارئ المهتم بالخصوصية: يبقى محتوى محادثاتك وأي صور أو مقاطع صوتية تُقدِّمها للنموذج على الجهاز أثناء الاستدلال، لكن جوجل تجمع مع ذلك بيانات شبيهة بالقياس عن بُعد (معرّفات الجهاز، بيانات الأداء/التشخيص، الموقع التقريبي، تقارير الأعطال) حول كيفية استخدام التطبيق نفسه. القرّاء الذين يحتاجون موقفاً أكثر صرامة من نوع "لا يجمع أي شيء على الإطلاق" يجب أن يقارنوا هذا بملصق خصوصية App Store الخاص بـ[Private LLM](/ar/power-local-llm/private-llm-review)، الذي يذكر أنه لا تُجمَع أي بيانات من ذلك التطبيق.',
        ],
        items: [
          '**لا حاجة لحساب للدردشة.** لا يتطلب التطبيق تسجيل الدخول لتنزيل النماذج وتشغيلها.',
          '**يبقى محتوى الدردشة على الجهاز أثناء الاستدلال.** تتم معالجة الرسائل والاستجابات محلياً بواسطة LiteRT-LM بمجرد تنزيل نموذج.',
          '**معرّف الجهاز وبيانات الأداء والتشخيصات مرتبطة بهويتك**، وفق ملصق خصوصية Apple لهذه الصفحة.',
          '**يُجمَع الموقع التقريبي وبيانات التفاعل مع المنتج وتقارير الأعطال دون ربطها بهويتك**، وفق نفس الملصق.',
          '**تعتمد هذه المراجعة على ملصق الخصوصية المُعلَن من Apple**، وليس على تدقيق مستقل لحركة شبكة التطبيق.',
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ ومحطات الإصدارات',
        content: [
          '**بدأ Google AI Edge Gallery كمشروع مفتوح المصدر حصري على GitHub قبل وصوله إلى متاجر التطبيقات.** الجدول الزمني أدناه مصدره منشورات مدونة جوجل نفسها ومستودع GitHub الخاص بالمشروع.',
        ],
        items: [
          '**الإصدار الأولي على GitHub.** بدأ مشروع [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) كعرض توضيحي مفتوح المصدر لـAndroid/سطح المكتب لنماذج Gemma على الجهاز، ووُزِّع في البداية كملف APK مباشر.',
          '**9 سبتمبر 2025.** أكد [منشور مدونة الإعلان](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) الخاص بجوجل نفسها الانتقال من التوزيع الحصري عبر GitHub إلى نسخة تجريبية مفتوحة على Google Play Store، وأضاف دعم الصوت (تحويل الكلام إلى نص وتحويل الكلام إلى نص مترجَم) عبر Gemma 3n من خلال واجهة برمجة MediaPipe LLM Inference. يذكر منشور جوجل نفسه أن المشروع بلغ 500,000 عملية تنزيل لملف APK خلال شهرين من إطلاقه على GitHub، ووصف خطة مستقبلية "لجلب التطبيق لمستخدمي iOS".',
          '**2 أبريل 2026.** أصدرت Google DeepMind **Gemma 4** بموجب ترخيص Apache 2.0، بأحجام E2B وE4B و26B و31B، تلتها نسخة متعددة الوسائط **Gemma 4 12B Unified** في 3 يونيو 2026.',
          '**توفر التطبيق على App Store لـiOS.** وصل Google AI Edge Gallery إلى App Store باسم [Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) (معرّف App Store 6749645337)، محققاً خطة iOS المُعلَنة في منشور مدونة سبتمبر 2025؛ وصفت تغطية مستقلة صعود التطبيق ضمن أكثر تطبيقات الإنتاجية تنزيلاً على App Store قرب وقت إطلاق Gemma 4.',
          '**الإصدار 1.0.10 (4 سبتمبر 2026).** الإصدار الحالي وقت كتابة هذه المراجعة، يضيف وفق ملاحظات إصداره "دعم الترجمة والتوطين العالمي عبر 100 دولة مختلفة" بالإضافة إلى إصلاحات أخطاء.',
        ],
        note: 'تاريخ الإصدارات والتواريخ مصدرها مدونة مطوّري جوجل ومستودع GitHub الخاص بالمشروع. تحقق من الإصدار الحالي وملاحظات الإصدار مباشرة في App Store قبل الاعتماد على وجود ميزة محددة.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ماذا تعني في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'مجاني، بلا حساب، بلا اشتراك',
            'ماذا تعني في الاستخدام الفعلي': 'ثبّته من App Store وابدأ تنزيل النماذج فوراً دون أي خطوة شراء.',
            'القيد / الملاحظة': 'تُصنِّف جوجل المشروع بأنه "نسخة تجريبية اختبارية" — توقّع خشونة أكثر من تطبيق مدفوع ناضج.',
          },
          {
            'الميزة': 'الوصول إلى Gemma 4 منذ يوم الإصدار',
            'ماذا تعني في الاستخدام الفعلي': 'إحدى أسرع الطرق لتجربة عائلة نماذج جوجل الرائدة الحالية مفتوحة الأوزان مباشرة على iPhone.',
            'القيد / الملاحظة': 'من المرجّح أن تتجاوز أحجام Gemma 4 الأكبر (26B، 31B) ما يمكن لعتاد iPhone النموذجي تشغيله بارتياح؛ لا ينشر التطبيق متطلب ذاكرة وصول عشوائي ثابتاً لكل نموذج.',
          },
          {
            'الميزة': 'استيراد نماذج Hugging Face مخصصة',
            'ماذا تعني في الاستخدام الفعلي': 'غير مقتصر على نماذج Gemma المُضمَّنة من جوجل — يمكن تحميل نماذج بصيغة LiteRT من Hugging Face.',
            'القيد / الملاحظة': 'متطلبات مستودعات Hugging Face المقيّدة (مثل رمز الوصول) غير موثّقة بوضوح؛ تحقق من التعليمات الحالية داخل التطبيق قبل محاولة استيراد مقيَّد.',
          },
          {
            'الميزة': 'استدلال على الجهاز (LiteRT-LM)',
            'ماذا تعني في الاستخدام الفعلي': 'تُعالَج الرسائل والاستجابات محلياً بمجرد تنزيل نموذج، دون رحلة ذهاب وإياب إلى خادم من أجل التوليد.',
            'القيد / الملاحظة': 'لا يزال ملصق خصوصية App Store يذكر معرّف الجهاز وبيانات الأداء والتشخيصات والموقع التقريبي وتقارير الأعطال ضمن البيانات المُجمَّعة — هذا ليس تطبيقاً بلا قياس عن بُعد.',
          },
          {
            'الميزة': 'ميزات متعددة الوسائط (Ask Image، Audio Scribe)',
            'ماذا تعني في الاستخدام الفعلي': 'تحليل الصور أو نسخ الكلام على الجهاز دون تطبيق منفصل.',
            'القيد / الملاحظة': 'الدعم متعدد الوسائط يعتمد على نموذج Gemma المُحمَّل (الصوت مدعوم في Gemma 3n وبعض أحجام Gemma 4، وليس في كل نموذج بالمكتبة).',
          },
          {
            'الميزة': 'مفتوح المصدر وعبر المنصات',
            'ماذا تعني في الاستخدام الفعلي': 'يعمل نفس المشروع الأساسي أيضاً على Android، مع كود مصدري متاح على GitHub بموجب ترخيص Apache 2.0.',
            'القيد / الملاحظة': 'تُقيِّم هذه المراجعة نسخة App Store لـiOS فقط؛ لا يُفترض أن السلوك وملصق الخصوصية وتكافؤ الميزات على Android متطابقة.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Google AI Edge Gallery مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر', 'مرونة النماذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Google AI Edge Gallery',
            'المنصات': 'iPhone/iPad/Mac/Vision Pro (وAndroid بشكل منفصل)',
            'السعر': 'مجاني',
            'مرونة النماذج': 'عائلة Gemma 4 مُضمَّنة؛ يمكن استيراد نماذج Hugging Face LiteRT مخصصة',
            'الفرق الرئيسي': 'من بناء جوجل، مُصنَّف "نسخة تجريبية اختبارية"، أسرع طريق إلى Gemma 4 على iPhone',
          },
          {
            'التطبيق': '[Private LLM](/ar/power-local-llm/private-llm-review)',
            'المنصات': 'iPhone/iPad/Mac (Apple فقط)',
            'السعر': 'شراء لمرة واحدة بـ4.99 دولار',
            'مرونة النماذج': '140+ نموذجاً منتقى؛ تكميم OmniQuant/GPTQ',
            'الفرق الرئيسي': 'مدفوع، مغلق المصدر، أكثر صقلاً ويُصان بفعالية كمنتج استهلاكي',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iPhone/iPad، مع دعم جزئي لـAndroid',
            'السعر': 'مجاني، مفتوح المصدر',
            'مرونة النماذج': 'أي ملف GGUF يحصل عليه المستخدم من Hugging Face أو غيرها',
            'الفرق الرئيسي': 'مجاني ومفتوح المصدر بالكامل مثل Google AI Edge Gallery، لكنه غير مرتبط بـGemma أو LiteRT-LM',
          },
          {
            'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'المنصات': 'iPhone/iPad/Mac',
            'السعر': 'مجاني',
            'مرونة النماذج': 'يُشغِّل Llama وGemma وQwen وDeepSeek بلا اتصال، مبني على Apple MLX',
            'الفرق الرئيسي': 'مجاني مثل Google AI Edge Gallery، لكنه مبني على إطار MLX الخاص بـApple بدلاً من LiteRT-LM',
          },
          {
            'التطبيق': '[Loci AI](/ar/power-local-llm/loci-ai-review-offline-local-ai)',
            'المنصات': 'iPhone/iPad/Android/Mac/Windows',
            'السعر': 'راجع الصفحة الحالية',
            'مرونة النماذج': 'مكتبة منتقاة من نحو 10 نماذج؛ من بين النماذج المدعومة Gemma 4 E2B/E4B',
            'الفرق الرئيسي': 'نطاق أوسع عبر المنصات من نسخة iOS الخاصة بـGoogle AI Edge Gallery، مع قائمة نماذج منتقاة أصغر',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات لتطبيقات الطرف الثالث كثيراً — تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Google AI Edge Gallery',
        items: [
          '**القرّاء الراغبون في تجربة Gemma 4 على iPhone مجاناً.** إنه أحد أسرع الطرق لتشغيل عائلة نماذج جوجل الرائدة الحالية مفتوحة الأوزان بالكامل على الجهاز.',
          '**المطوّرون الذين يُقيِّمون LiteRT-LM.** يعمل التطبيق أيضاً كعرض توضيحي عملي لبيئة تشغيل الاستدلال على الجهاز من جوجل، مفيد قبل دمج LiteRT-LM في مشروعك الخاص.',
          '**القرّاء الراغبون في تجربة نماذج Hugging Face مخصصة بصيغة LiteRT** دون إعداد بيئة تطوير كاملة أولاً.',
          '**القرّاء المرتاحون لتصنيف "نسخة تجريبية اختبارية"**، الذين يُفضِّلون تجربة أحدث إصدارات Gemma على تطبيق استهلاكي مصقول تماماً وراسخ منذ زمن طويل.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Google AI Edge Gallery',
        items: [
          '**القرّاء الراغبون في منتج استهلاكي ناضج ويحظى برعاية نشطة.** كلٌّ من [Private LLM](/ar/power-local-llm/private-llm-review) و[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) لديه سجل أطول كتطبيق مُصان وخارج مرحلة الاختبار.',
          '**القرّاء الراغبون في أشد ملصقات الخصوصية صرامة.** تُظهِر صفحة App Store أن معرّف الجهاز وبيانات الأداء والتشخيصات والموقع التقريبي وتقارير الأعطال ضمن البيانات المُجمَّعة — بينما يذكر ملصق [Private LLM](/ar/power-local-llm/private-llm-review) أنه لا تُجمَع أي بيانات على الإطلاق.',
          '**القرّاء المحتاجون دعم Android ضمن نفس التثبيت.** نسخة Android تنزيل منفصل من [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)، وليست تطبيق App Store لـiOS الذي تغطيه هذه المراجعة.',
          '**القرّاء الراغبون في تشغيل أكبر أحجام Gemma 4 على هاتف.** من غير المرجّح أن تعمل نسختا 26B و31B بارتياح ضمن ذاكرة iPhone النموذجية؛ لا ينشر التطبيق حداً أدنى ثابتاً للذاكرة لكل نموذج للتأكد من ذلك.',
          '**الفرق الراغبة في نشر مُدار مركزياً لعدة مستخدمين.** هذا تطبيق استهلاكي لمستخدم واحد وجهاز واحد، دون لوحة تحكم إدارية أو إدارة تراخيص مشتركة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Google AI Edge Gallery مجاني؟',
            a: 'نعم. [صفحة App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) مجانية التنزيل، دون اشتراك ودون مشتريات داخل التطبيق، تم التحقق لهذه المراجعة بتاريخ 2026-09-12.',
          },
          {
            q: 'ما النماذج التي يُشغِّلها Google AI Edge Gallery؟',
            a: 'يُشغِّل عائلة نماذج Gemma من جوجل، حالياً جيل Gemma 4 (E2B وE4B و26B و31B ونسخة 12B Unified متعددة الوسائط، الصادرة بين أبريل ويونيو 2026)، بالإضافة إلى Gemma 3n الأقدم. يمكن للمستخدمين أيضاً استيراد نماذج مخصصة من Hugging Face بصيغة LiteRT.',
          },
          {
            q: 'هل يعمل Google AI Edge Gallery على Android أيضاً؟',
            a: 'نعم، لكن كتوزيع منفصل. يوفر المشروع مفتوح المصدر الأساسي، [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)، نسخة Android عبر Google Play وملف APK مباشر، بالإضافة إلى صفحة App Store لـiOS التي تغطيها هذه المراجعة.',
          },
          {
            q: 'هل يجمع Google AI Edge Gallery بياناتي؟',
            a: 'تُعالَج رسائل الدردشة واستجابات النموذج على الجهاز بمجرد تنزيل نموذج، لكن ملصق خصوصية Apple لصفحة iOS يذكر أن معرّف الجهاز وبيانات الأداء والتشخيصات مرتبطة بهويتك، وأن الموقع التقريبي وبيانات التفاعل مع المنتج وتقارير الأعطال تُجمَع دون ربطها بهويتك. هذا ليس تطبيقاً بلا بيانات، رغم أن الاستدلال نفسه يعمل محلياً.',
          },
          {
            q: 'ما هو LiteRT-LM؟',
            a: '[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) هو إطار عمل استدلال مفتوح المصدر وموجّه للإنتاج من جوجل لتشغيل نماذج اللغة الكبيرة على أجهزة الحافة مثل الهواتف. خلف واجهة برمجة MediaPipe LLM Inference القديمة المستخدمة في إصدارات أقدم من تطبيق Gallery.',
          },
          {
            q: 'هل يمكنني استيراد نموذجي الخاص إلى Google AI Edge Gallery؟',
            a: 'نعم — يؤكد توثيق جوجل نفسه أن التطبيق يدعم تحميل نماذج مخصصة من Hugging Face بصيغة LiteRT عبر رابط URL لبطاقة النموذج. تفاصيل متطلبات مستودعات Hugging Face المقيّدة، مثل ما إذا كان يلزم رمز وصول، غير موثّقة بوضوح؛ تحقق من التعليمات الحالية داخل التطبيق قبل المحاولة.',
          },
          {
            q: 'هل Google AI Edge Gallery منتج نهائي أم نسخة تجريبية؟',
            a: 'يصف توثيق مشروع جوجل نفسه على GitHub التطبيق بأنه "نسخة تجريبية اختبارية" ويطلب ملاحظات المستخدمين — تنطبق هذه الحالة على المشروع الأساسي عبر iOS وAndroid وسطح المكتب، وليس على منصة واحدة فقط.',
          },
          {
            q: 'ما الأجهزة التي تدعمها نسخة iOS؟',
            a: 'وفق صفحة App Store: iPhone وiPad بنظام iOS 17.0 أو أحدث، Mac بنظام macOS 14.0 أو أحدث ومعالج Apple M1 أو أحدث، وApple Vision Pro بنظام visionOS 1.0 أو أحدث.',
          },
          {
            q: 'كيف يقارَن Google AI Edge Gallery بـPrivate LLM؟',
            a: 'Google AI Edge Gallery مجاني، من بناء جوجل، مُصنَّف كنسخة تجريبية اختبارية، ويتمحور حول نماذج Gemma عبر LiteRT-LM. [Private LLM](/ar/power-local-llm/private-llm-review) هو شراء لمرة واحدة بـ4.99 دولار، مغلق المصدر، ويقدّم مكتبة منتقاة أكبر من 140+ نموذجاً مع سجل أطول كتطبيق استهلاكي مُصان. اختر Google AI Edge Gallery لتجربة Gemma 4 مجاناً؛ واختر Private LLM لتجربة مدفوعة أكثر صقلاً وصيانة نشطة.',
          },
          {
            q: 'هل يدعم Google AI Edge Gallery إدخال الصوت والصورة؟',
            a: 'نعم، حسب النموذج المُحمَّل. يوفر Ask Image تحليلاً متعدد الوسائط للصور، ويوفر Audio Scribe نسخاً صوتياً وترجمة على الجهاز؛ بدأ دعم الصوت في نماذج Gemma الأساسية مع Gemma 3n ويستمر في أحجام معينة من Gemma 4، بما فيها نسخة 12B Unified.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'يستحق Google AI Edge Gallery مكانة في هذه المجموعة باعتباره الطريقة الأسرع والمجانية لتشغيل نماذج Gemma 4 الخاصة بجوجل بالكامل على iPhone، مدعوماً ببيئة تشغيل الإنتاج LiteRT-LM من جوجل بدلاً من طبقة طرف ثالث حول نموذج مفتوح المصدر. دعمه لاستيراد Hugging Face وميزاته متعددة الوسائط (Ask Image وAudio Scribe وThinking Mode) تتجاوز عميل دردشة أساسياً. المفاضلات حقيقية بالقدر نفسه: تُصنِّف جوجل نفسها المشروع بأنه "نسخة تجريبية اختبارية"، ويُظهِر ملصق خصوصية App Store لـiOS جمع بيانات أكثر من أشد المنافسين تركيزاً على الخصوصية، ولدى التطبيق سجل أقصر كمنتج استهلاكي مُصان مقارنة بتطبيقات مثل Private LLM. يجب على القرّاء الراغبين تحديداً في أحدث نماذج Gemma مجاناً، أو الذين يُقيِّمون LiteRT-LM كمطوّرين، تثبيته. أما من يريد أكثر تطبيقات الذكاء الاصطناعي المحلية للجوال صقلاً وترسّخاً وصرامة في الخصوصية، فعليه مقارنته أولاً بـ[Private LLM](/ar/power-local-llm/private-llm-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Google AI Edge Gallery على App Store](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) — السعر، متطلبات المنصة، ملصق الخصوصية، التقييمات، وتاريخ الإصدارات.',
          '[google-ai-edge/gallery على GitHub](https://github.com/google-ai-edge/gallery) — نظرة عامة على المشروع، المنصات المدعومة، استيراد Hugging Face، الترخيص، وحالة النسخة التجريبية.',
          '[LiteRT-LM على GitHub](https://github.com/google-ai-edge/LiteRT-LM) — بيئة تشغيل الاستدلال على الجهاز التي بُني عليها التطبيق.',
          '[منشور مدونة إعلان Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — إعلان بتاريخ 9 سبتمبر 2025 عن دعم الصوت وتوفر Google Play.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — بديل مدفوع أكثر صقلاً بمكتبة نماذج منتقاة أكبر.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — بديل مجاني ومفتوح المصدر باستيراد يدوي لملفات GGUF.',
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — بديل مجاني مبني على Apple MLX يدعم عائلات نماذج مشابهة.',
          '[مراجعة Loci AI](/ar/power-local-llm/loci-ai-review-offline-local-ai) — تطبيق على الجهاز يعمل عبر منصات متعددة ويدعم Gemma 4 أيضاً.',
          '[الدليل الكامل لبرامج الذكاء الاصطناعي المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلية عبر جميع المنصات، بما في ذلك إدراج Google AI Edge Gallery.',
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
    heroImage: '/images/google-ai-edge-gallery-review-hero-ko.webp',
    title: 'Google AI Edge Gallery 리뷰 (2026): iPhone용 Gemma 4 온디바이스 채팅',
    seoTitle: 'Google AI Edge Gallery 2026 리뷰: iOS Gemma 앱',
    intro:
      'Google AI Edge Gallery는 [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)가 제공하는 무료 앱으로, 구글의 온디바이스 추론 런타임인 [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)을 사용해 iPhone, iPad, Mac에서 오픈소스 AI 모델을 완전히 온디바이스로 실행합니다. 이 리뷰는 iOS 앱스토어 등재 정보(앱스토어 ID 6749645337, 버전 1.0.10, 이 리뷰 작성 시점 기준 160개 이상의 평가로 별점 4.0)를 구체적으로 다루며, [로컬 LLM 소프트웨어 디렉터리 내 Google AI Edge Gallery 항목](/ko/power-local-llm/local-llm-software-directory)의 관련 기사입니다. 이 앱은 더 큰 오픈소스 프로젝트인 [GitHub의 google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)의 사용자용 전면부이며, 이 프로젝트는 Android와 직접 APK 다운로드로도 배포됩니다 — 이 리뷰는 Android 버전을 평가하지 않습니다. iOS에서는 현재 세대인 Gemma 4를 포함한 구글의 Gemma 모델 계열을 모델 다운로드 후 완전히 오프라인으로 실행하며, [Hugging Face](https://huggingface.co/)에서 LiteRT 형식으로 추가 모델을 가져올 수도 있습니다. iPhone용 온디바이스 앱을 비교하는 독자에게 실질적인 질문은, 구글이 유지관리하며 공식적으로 "실험적 베타"라고 표시한 무료 앱이 [Private LLM](/ko/power-local-llm/private-llm-review)과 같이 더 완성도 높은 유료 대안이나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 같은 무료 대안과 비교해 어떤지입니다.',
    metaDescription:
      'Google AI Edge Gallery 2026 리뷰: 무료 iOS 앱(앱스토어 ID 6749645337), LiteRT-LM을 통한 Gemma 4 온디바이스 채팅, 별점 4.0/160개 이상 평가. 기능, 개인정보 보호, Private LLM 및 PocketPal AI와의 비교.',
    twitterDescription:
      'Google AI Edge Gallery 2026 리뷰: LiteRT-LM을 통해 Gemma 4를 완전히 온디바이스로 실행하는 구글의 무료 iOS 앱. 기능, 앱스토어 개인정보 보호 라벨, Private LLM 및 PocketPal AI와의 비교.',
    audience:
      '구글의 무료 온디바이스 AI 앱을 평가하는 iPhone 및 iPad 사용자 대상 — 기능, Gemma 4 지원, 앱스토어 개인정보 보호 라벨, iOS 앱과 더 큰 Android/GitHub 프로젝트의 관계, 유료 및 무료 대안과의 비교를 다룹니다.',
    readTime: '읽는 데 9분',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Google AI Edge Gallery 리뷰',
    targetKeywords: [
      'google ai edge gallery 리뷰',
      'google ai edge gallery ios',
      'google ai edge gallery 앱',
      'gemma 4 온디바이스 iphone',
      'litert-lm 리뷰',
      'google ai edge gallery vs private llm',
      'google ai edge gallery vs pocketpal ai',
      '무료 로컬 ai 앱 iphone',
    ],
    current_models_mentioned: ['Gemma 4 E2B', 'Gemma 4 E4B', 'Gemma 4 26B', 'Gemma 4 31B', 'Gemma 4 12B Unified', 'Gemma 3n'],
    current_hardware_mentioned: ['iPhone (iOS 17+)', 'iPad (iOS 17+)', 'Apple Silicon Mac (M1 이상, macOS 14+)', 'Apple Vision Pro (visionOS 1.0+)'],
    leadAnswerBlock:
      '**Google AI Edge Gallery는 [Google LLC](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)가 제공하는 무료 iOS 앱으로, 구글의 [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) 런타임을 통해 Gemma 4를 비롯한 여러 오픈소스 모델을 완전히 온디바이스로 실행하며, 구독이나 메시지당 비용이 없습니다.** 이는 오픈소스 프로젝트 [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)의 iOS 버전이며, Android용으로도 제공됩니다. 구글 스스로 이 앱을 "실험적 베타"로 표시합니다. 모델을 다운로드하면 채팅은 오프라인으로 작동하지만, 앱스토어 개인정보 보호 라벨에 따르면 구글은 여전히 일부 기기 진단 정보와 사용 데이터를 수집합니다 — 프롬프트와 채팅 내용 자체는 기기에 남지만, 텔레메트리가 전혀 없는 앱은 아닙니다. 더 완성도 높은 유료 대안을 원하는 독자는 [Private LLM](/ko/power-local-llm/private-llm-review)과 비교해야 하며, 수동 GGUF 가져오기가 가능한 무료 오픈소스 대안을 원하는 독자는 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 비교해야 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'iPhone에 Google AI Edge Gallery를 설치할 가치가 있나요?',
        answer:
          '네, 구글의 현재 Gemma 4 모델을 완전히 온디바이스로, 무료로, 계정 없이 사용하고 싶고, 구글 스스로 "실험적 베타"로 표시한 앱을 완성도 높은 소비자 제품 대신 받아들일 수 있다면 가치가 있습니다. Gemma 4의 온디바이스 추론과 멀티모달 기능을 무료로 체험하기에 좋은 선택입니다. 더 성숙하고 적극적으로 관리되는 앱 경험을 원한다면 건너뛰세요 — [Private LLM](/ko/power-local-llm/private-llm-review)과 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review) 모두 이 점에서 더 확립되어 있습니다.',
        bullets: [
          'Apple 앱스토어에서 무료; 구독 없음, 인앱 구매 없음.',
          '구글의 LiteRT-LM 런타임을 통해 Gemma 4(E2B, E4B, 26B, 31B, 12B Unified) 및 기타 오픈소스 모델 실행.',
          'iPhone, iPad, Mac, Apple Vision Pro — iOS 17.0+ 또는 Apple Silicon을 탑재한 macOS 14.0+ 필요.',
          'github.com/google-ai-edge/gallery에서 오픈소스 Android 앱과 직접 APK로도 제공 — 이 리뷰는 iOS 등재 정보만 다룹니다.',
          '앱스토어 개인정보 보호 라벨에는 기기 ID, 성능 데이터, 진단 정보가 수집되는 것으로 명시 — 채팅 내용 자체는 기기에 남지만 "데이터 전무" 앱은 아닙니다.',
        ],
        updatedDate: '2026-09-12',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Google AI Edge Gallery란', anchor: 'what-is-google-ai-edge-gallery' },
      { label: '앱 받기', anchor: 'get-it' },
      { label: '모델: Gemma 4와 LiteRT-LM', anchor: 'models' },
      { label: '플랫폼: iOS 앱스토어 대 오픈소스 프로젝트', anchor: 'platforms' },
      { label: '개인정보 보호: 앱스토어 라벨이 실제로 말하는 것', anchor: 'privacy' },
      { label: '역사와 버전 이정표', anchor: 'history' },
      { label: '트레이드오프: 장점 대 한계', anchor: 'tradeoffs' },
      { label: 'Google AI Edge Gallery와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Google AI Edge Gallery가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'Google AI Edge Gallery가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
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
            text: 'Google AI Edge Gallery는 무료 iOS 앱(앱스토어 ID 6749645337, 버전 1.0.10)으로, 구글의 LiteRT-LM 런타임을 통해 Gemma 4 및 기타 오픈소스 모델을 완전히 온디바이스로 실행하며, 구글 스스로 "실험적 베타"로 표시합니다.',
          },
          {
            type: 'plain-terms',
            text: '이것은 구글이 자사의 Gemma 모델을 휴대폰에서 직접, 오프라인으로, 계정이나 구독 없이 체험해볼 수 있도록 만든 구글 자체의 쇼케이스 앱입니다 — 동일한 기반 오픈소스 프로젝트는 Android 버전과 다운로드 가능한 소스 코드 저장소도 갖고 있습니다.',
          },
        ],
        items: [
          '가격: [Apple 앱스토어](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)에서 무료; 구독 없음, 인앱 구매 없음.',
          '개발사: Google LLC, 현재 버전 1.0.10(2026년 9월 4일 출시), 160개 이상의 평가에서 5점 만점에 4.0점.',
          '플랫폼(iOS 등재): iOS 17.0+ iPhone 및 iPad, macOS 14.0+ 및 Apple M1 이상 칩을 탑재한 Mac, visionOS 1.0+ Apple Vision Pro.',
          '모델: Gemma 4 계열(E2B, E4B, 26B, 31B, 멀티모달 12B Unified 변형)과 Gemma 3n; Hugging Face에서 LiteRT 형식으로 커스텀 모델 가져오기 가능.',
          '오픈소스: 기반 프로젝트인 [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)는 Apache 2.0 라이선스이며 Android 버전과 직접 APK로도 제공 — 이 리뷰는 iOS 앱스토어 버전을 다룹니다.',
          '상태: 구글 자체 GitHub README는 이 프로젝트를 "실험적 베타 릴리스"로 설명합니다.',
          '개인정보 보호: 앱스토어 라벨에 따르면 기기 ID, 성능 데이터, 진단 정보는 사용자 신원과 연결되며, 대략적인 위치, 제품 상호작용 데이터, 충돌 보고서는 신원과 연결되지 않은 채로 수집됩니다 — 채팅 프롬프트는 기기에서 처리되지만 텔레메트리가 전혀 없는 앱은 아닙니다.',
        ],
      },
      whatIsGoogleAIEdgeGallery: {
        id: 'what-is-google-ai-edge-gallery',
        title: 'Google AI Edge Gallery란',
        content: [
          '**Google AI Edge Gallery는 추론을 위해 서버를 왕복하지 않고 휴대폰, 태블릿, Mac에서 직접 오픈소스 생성형 AI 모델을 실행하기 위한 구글 자체의 쇼케이스 앱입니다.** 이 앱은 엣지 기기에서 대규모 언어 모델을 실행하기 위한 구글의 프로덕션 지향 추론 프레임워크인 [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) 위에 구축되었으며, 이는 이 프로젝트의 이전 버전에서 사용되던 구형 MediaPipe LLM Inference API를 계승한 것입니다.',
          '여기서 리뷰하는 iOS 등재 정보는 [Apple 앱스토어의 Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)(앱스토어 ID 6749645337)로, Google LLC가 개발 및 게시했으며, 현재 버전 1.0.10에 160개 이상의 평가에서 5점 만점에 4.0점입니다. 무료 다운로드이며 구독 등급이 없습니다.',
          '이 동일한 앱은 구글이 "모바일 기기에서 세계에서 가장 강력한 오픈소스 대규모 언어 모델(LLM)을 실행하기 위한 최고의 목적지"라고 설명하는 더 큰 오픈소스 프로젝트인 [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)의 배포 채널 중 하나입니다. 이 프로젝트는 Google Play와 직접 APK 다운로드를 통한 Android 버전과 데스크톱 빌드도 제공합니다. 구글 자체의 프로젝트 문서는 이 전체 노력을 완성된 소비자 제품이 아니라 **"실험적 베타 릴리스"**로 표시합니다 — 이 리뷰는 이 구분을 형식적인 것이 아니라 실질적인 것으로 다룹니다. 이 기사군 전반에서 Google AI Edge Gallery는 완성도 높은 소비자 제품으로 특별히 설계된 앱들과 비교되기 때문입니다.',
        ],
      },
      getItCTA: {
        id: 'get-it',
        title: '앱 받기',
        itemHeadings: true,
        content: [
          '**Google AI Edge Gallery는 구매 단계 없이 무료로 다운로드할 수 있습니다.** 이 리뷰의 CTA는 iOS 등재 정보를 구체적으로 다룹니다. Android 및 소스 코드 채널은 동일한 기반 오픈소스 프로젝트의 별도 다운로드이며, 동일한 설치가 아닙니다.',
          '이 리뷰는 [로컬 LLM 소프트웨어 디렉터리 내 Google AI Edge Gallery 항목](/ko/power-local-llm/local-llm-software-directory)의 관련 기사로, 이 사이트에서 다루는 다른 모든 모바일 로컬 AI 앱과 함께 나열되어 있습니다.',
        ],
        columns: ['플랫폼', '받는 곳', '참고 사항'],
        rows: [
          {
            '플랫폼': 'iPhone / iPad',
            '받는 곳': '[Apple 앱스토어](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            '참고 사항': '무료. iOS 17.0 이상 필요. 이 리뷰가 평가하는 등재 정보입니다.',
          },
          {
            '플랫폼': 'Mac',
            '받는 곳': '[Apple 앱스토어](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            '참고 사항': '동일한 앱스토어 등재; macOS 14.0+ 및 Apple M1 이상 필요.',
          },
          {
            '플랫폼': 'Apple Vision Pro',
            '받는 곳': '[Apple 앱스토어](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)',
            '참고 사항': 'visionOS 1.0+ 호환으로 등재; 이 리뷰에서는 직접 테스트하지 않았습니다.',
          },
          {
            '플랫폼': 'Android',
            '받는 곳': '[GitHub의 google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            '참고 사항': 'Google Play 또는 직접 APK를 통한 동일 오픈소스 프로젝트의 별도 빌드 — 이 리뷰에서 다루지 않습니다.',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)',
            '참고 사항': 'Apache 2.0 라이선스; 위의 모든 배포 채널 뒤에 있는 저장소.',
          },
        ],
        note: '앱스토어의 제공 여부, 가격, 버전 번호는 예고 없이 변경될 수 있습니다. 설치 전 [앱스토어 페이지](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)에서 현재 등재 정보를 확인하세요. 이 리뷰의 확인 날짜는 2026-09-12입니다.',
      },
      models: {
        id: 'models',
        title: '모델: Gemma 4와 LiteRT-LM',
        content: [
          '**Google AI Edge Gallery는 구글의 Gemma 모델 계열, 현재는 2026년 4월 2일 출시된 Gemma 4 세대를 중심으로 합니다.** Gemma 4는 여러 크기로 제공됩니다 — 휴대폰용으로 설계된 E2B와 E4B, 26B 전문가 혼합(mixture-of-experts) 변형, 31B 변형, 그리고 구글 자체 문서에 따르면 텍스트, 이미지, (오디오) 입력을 단일 아키텍처에서 처리하는 멀티모달 **Gemma 4 12B Unified** 모델입니다. 이 앱은 Gemma 4 출시 전에 온디바이스 스택에 오디오 이해 기능을 추가한 이전 Gemma 릴리스인 **Gemma 3n**도 지원합니다.',
          '번들로 제공되는 Gemma 모델 외에도, 이 앱은 앱의 모델 관리 화면 내 모델 카드 URL을 사용해 **Hugging Face에서 LiteRT 형식으로 자체 모델을 가져올** 수 있게 해줍니다. 구글 자체 프로젝트 문서는 모델 검색 및 다운로드를 위한 이 Hugging Face 통합의 존재를 확인하지만, 게이트가 있는 모델 저장소에 Hugging Face 액세스 토큰이 필요한지 등의 세부 사항은 명시하지 않습니다 — 이 리뷰는 특정 토큰 흐름을 가정하는 대신 이를 미확인 사항으로 다룹니다. 게이트가 있는 모델을 가져오기 전에 현재의 앱 내 안내를 확인하세요.',
          '기능 면에서, 이 앱은 이러한 모델을 중심으로 여러 개의 개별 모드를 패키징합니다: 모델의 중간 추론 단계를 보여주는 **씽킹 모드가 있는 AI 채팅**, 카메라나 갤러리의 사진을 멀티모달로 분석하는 **Ask Image**, 온디바이스 음성 전사 및 번역인 **Audio Scribe**, 기본 모델 위에 위키피디아 조회 같은 외부 도구 접근을 얹은 **Agent Skills**, 그리고 모델을 선택하기 전에 다운로드 크기와 온디바이스 성능을 비교할 수 있는 **모델 관리 및 벤치마킹** 화면입니다.',
        ],
      },
      platforms: {
        id: 'platforms',
        title: '플랫폼: iOS 앱스토어 대 오픈소스 프로젝트',
        itemHeadings: true,
        columns: ['플랫폼', '예상되는 내용', '중요 참고 사항'],
        rows: [
          {
            '플랫폼': 'iPhone / iPad',
            '예상되는 내용': '이 리뷰가 평가하는 앱스토어 등재에 따르면 iOS 17.0 이상 필요.',
            '중요 참고 사항': '이것이 이 리뷰가 다루는 주요 플랫폼입니다. 지원되는 칩 세대는 등재 정보에서 OS 요건과 별도로 명시되지 않습니다.',
          },
          {
            '플랫폼': 'Mac',
            '예상되는 내용': 'macOS 14.0 이상과 Apple M1 이상 칩 필요.',
            '중요 참고 사항': 'iPhone/iPad 앱과 동일한 유니버설 바이너리 및 앱스토어 등재; 명시된 요건에 따르면 Intel Mac은 지원되지 않습니다.',
          },
          {
            '플랫폼': 'Apple Vision Pro',
            '예상되는 내용': '호환으로 등재, visionOS 1.0 이상 필요.',
            '중요 참고 사항': '이 리뷰는 Vision Pro 경험을 직접 테스트하지 않았습니다 — 실제로 검증된 기능이 아니라 앱스토어에 등재된 호환성으로 다루세요.',
          },
          {
            '플랫폼': 'Android',
            '예상되는 내용': '동일한 오픈소스 프로젝트의 별도 빌드가 Google Play를 통해 제공됩니다(2025년 9월 9일 구글 발표에 따르면 GitHub 전용 배포에서 Google Play의 오픈 베타로 전환), 또는 GitHub에서 직접 APK로 제공됩니다.',
            '중요 참고 사항': '이 리뷰가 다루는 iOS 앱스토어 앱과 동일한 설치가 아닙니다. iOS 고유의 동작(예: 정확한 앱스토어 개인정보 보호 라벨)이 Android 버전에도 그대로 적용된다고 가정하지 마세요.',
          },
          {
            '플랫폼': '더 넓은 OSS 프로젝트',
            '예상되는 내용': '[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)는 Apache 2.0 라이선스이며 Android, iOS, 데스크톱 배포에 걸쳐 있습니다.',
            '중요 참고 사항': '구글 자체 문서는 이 전체 노력을 "실험적 베타 릴리스"로 표시합니다 — 이 상태는 iOS뿐 아니라 모든 플랫폼에 적용됩니다.',
          },
        ],
        note: '플랫폼 요건과 베타 상태는 업데이트마다 변경될 수 있습니다 — 특정 기기나 OS 지원에 의존하기 전에 [앱스토어 등재](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) 또는 [GitHub 저장소](https://github.com/google-ai-edge/gallery)에서 현재 세부 정보를 직접 확인하세요.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호: 앱스토어 라벨이 실제로 말하는 것',
        content: [
          '**모델이 다운로드되면 추론은 기기에서 이루어집니다 — 응답을 생성하기 위해 채팅 프롬프트와 모델 출력이 구글 서버로 전송되지 않습니다.** 하지만 이는 "앱이 어떤 데이터도 수집하지 않는다"는 주장과는 다르며, 이 리뷰는 이 두 가지를 혼동하지 않고 별개로 다룹니다.',
          '[Google AI Edge Gallery 앱스토어 등재](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)에 대한 Apple의 개인정보 보호 영양 라벨은 **사용자 신원과 연결된 데이터**로 기기 ID, 성능 데이터, 진단 정보를, **사용자 신원과 연결되지 않은 데이터**로 대략적인 위치, 제품 상호작용 데이터, 충돌 보고서를 명시합니다. 이는 Apple의 표준적인, 개발자가 직접 신고하는 개인정보 보호 라벨 형식이며, PromptQuorum이 앱의 네트워크 트래픽을 독립적으로 감사한 결과가 아닙니다.',
          '개인정보 보호를 중시하는 독자를 위한 실질적인 구분은 다음과 같습니다: 대화 내용과 모델에 제공하는 이미지나 오디오는 추론 중 기기에 남아 있지만, 구글은 여전히 앱 자체가 어떻게 사용되는지에 대해 텔레메트리 성격의 데이터(기기 식별자, 성능/진단 데이터, 대략적인 위치, 충돌 보고서)를 수집합니다. "아무것도 전혀 수집하지 않는다"는 더 엄격한 입장을 필요로 하는 독자는 이를 [Private LLM](/ko/power-local-llm/private-llm-review)의 앱스토어 개인정보 보호 라벨과 비교해야 합니다. 그 앱은 어떤 데이터도 수집하지 않는다고 명시되어 있습니다.',
        ],
        items: [
          '**채팅에 계정이 필요 없습니다.** 모델을 다운로드하고 실행하는 데 로그인이 필요하지 않습니다.',
          '**추론 중 채팅 내용은 기기에 남습니다.** 모델이 다운로드되면 프롬프트와 응답은 LiteRT-LM에 의해 로컬에서 처리됩니다.',
          '**이 등재에 대한 Apple의 개인정보 보호 라벨에 따르면 기기 ID, 성능 데이터, 진단 정보는 사용자 신원과 연결됩니다.**',
          '**동일한 라벨에 따르면 대략적인 위치, 제품 상호작용 데이터, 충돌 보고서는 수집되지만 사용자 신원과 연결되지 않습니다.**',
          '**이 리뷰는 Apple이 신고한 개인정보 보호 라벨에 의존하며**, 앱 네트워크 트래픽에 대한 독립적인 감사가 아닙니다.',
        ],
      },
      history: {
        id: 'history',
        title: '역사와 버전 이정표',
        content: [
          '**Google AI Edge Gallery는 앱스토어에 도달하기 전 GitHub 전용 오픈소스 프로젝트로 시작했습니다.** 아래 타임라인은 구글 자체 블로그 게시물과 프로젝트의 GitHub 저장소를 출처로 합니다.',
        ],
        items: [
          '**초기 GitHub 릴리스.** [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) 프로젝트는 온디바이스 Gemma 모델을 위한 소스 공개 Android/데스크톱 쇼케이스로 시작되었으며, 처음에는 직접 APK 다운로드로 배포되었습니다.',
          '**2025년 9월 9일.** 구글 자체의 [발표 블로그 게시물](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/)은 GitHub 전용 배포에서 Google Play 스토어의 오픈 베타로 전환되었음을 확인했으며, MediaPipe LLM Inference API를 통해 Gemma 3n으로 오디오 지원(음성-텍스트 변환 및 음성-번역 텍스트 변환)을 추가했습니다. 구글 자체 게시물에 따르면 이 프로젝트는 GitHub 출시 후 2개월 안에 APK 다운로드 50만 건에 도달했으며, "iOS 사용자에게 앱을 제공하겠다"는 향후 계획을 설명했습니다.',
          '**2026년 4월 2일.** Google DeepMind가 Apache 2.0 라이선스로 **Gemma 4**를 E2B, E4B, 26B, 31B 크기로 출시했으며, 이후 2026년 6월 3일에 멀티모달 **Gemma 4 12B Unified** 변형이 뒤따랐습니다.',
          '**iOS 앱스토어 제공 개시.** Google AI Edge Gallery는 [Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)(앱스토어 ID 6749645337)로 앱스토어에 등장하여 2025년 9월 블로그 게시물에서 발표된 iOS 계획을 실현했습니다. 독립적인 보도에 따르면 Gemma 4 출시 시기 전후로 이 앱은 앱스토어의 생산성 앱 다운로드 상위권에 올랐습니다.',
          '**버전 1.0.10(2026년 9월 4일).** 이 리뷰 작성 시점의 현재 버전으로, 릴리스 노트에 따르면 "100개 다른 국가에 걸친 전 세계 번역 및 현지화 지원"과 버그 수정을 추가했습니다.',
        ],
        note: '버전 이력과 날짜는 구글 자체 개발자 블로그와 프로젝트의 GitHub 저장소를 출처로 합니다. 특정 기능의 존재에 의존하기 전에 앱스토어에서 현재 버전과 릴리스 노트를 직접 확인하세요.',
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '트레이드오프: 장점 대 한계',
        columns: ['장점', '실제 사용 시 의미', '한계 / 유의점'],
        rows: [
          {
            '장점': '무료, 계정 불필요, 구독 불필요',
            '실제 사용 시 의미': '앱스토어에서 설치하고 구매 단계 없이 바로 모델 다운로드를 시작할 수 있습니다.',
            '한계 / 유의점': '구글은 이 프로젝트를 "실험적 베타"로 표시합니다 — 성숙한 유료 앱보다 더 거친 부분을 예상하세요.',
          },
          {
            '장점': '출시 당일부터 Gemma 4 접근 가능',
            '실제 사용 시 의미': '구글의 현재 플래그십 오픈웨이트 모델 계열을 iPhone에서 직접 체험하는 가장 빠른 방법 중 하나입니다.',
            '한계 / 유의점': '더 큰 Gemma 4 크기(26B, 31B)는 일반적인 iPhone 하드웨어가 편안하게 실행할 수 있는 범위를 초과할 가능성이 높습니다. 이 앱은 모델별 고정 RAM 요구 사항을 공개하지 않습니다.',
          },
          {
            '장점': '커스텀 Hugging Face 모델 가져오기',
            '실제 사용 시 의미': '구글이 번들로 제공하는 Gemma 모델에 국한되지 않습니다 — Hugging Face의 LiteRT 형식 모델을 로드할 수 있습니다.',
            '한계 / 유의점': '게이트가 있는 Hugging Face 저장소에 대한 요구 사항(예: 액세스 토큰)이 명확히 문서화되어 있지 않습니다. 게이트가 있는 가져오기를 시도하기 전에 현재의 앱 내 안내를 확인하세요.',
          },
          {
            '장점': '온디바이스 추론(LiteRT-LM)',
            '실제 사용 시 의미': '모델이 다운로드되면 프롬프트와 응답은 생성을 위한 서버 왕복 없이 로컬에서 처리됩니다.',
            '한계 / 유의점': '앱스토어 개인정보 보호 라벨은 여전히 기기 ID, 성능 데이터, 진단 정보, 대략적인 위치, 충돌 보고서가 수집된다고 명시합니다 — 텔레메트리가 전혀 없는 앱은 아닙니다.',
          },
          {
            '장점': '멀티모달 기능(Ask Image, Audio Scribe)',
            '실제 사용 시 의미': '별도의 앱 없이 사진을 분석하거나 음성을 온디바이스로 전사할 수 있습니다.',
            '한계 / 유의점': '멀티모달 지원은 로드된 Gemma 모델에 따라 다릅니다(오디오는 Gemma 3n과 특정 Gemma 4 크기에서 지원되며, 라이브러리의 모든 모델에서 지원되는 것은 아닙니다).',
          },
          {
            '장점': '오픈소스이자 크로스 플랫폼',
            '실제 사용 시 의미': '동일한 기반 프로젝트가 Android에서도 실행되며, 소스 코드는 Apache 2.0 라이선스로 GitHub에 공개되어 있습니다.',
            '한계 / 유의점': '이 리뷰는 iOS 앱스토어 버전만 평가합니다. Android에서의 동작, 개인정보 보호 라벨, 기능 동등성이 동일하다고 가정되지 않습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Google AI Edge Gallery와 대안 비교',
        columns: ['앱', '플랫폼', '가격', '모델 유연성', '핵심 차이'],
        rows: [
          {
            '앱': 'Google AI Edge Gallery',
            '플랫폼': 'iPhone/iPad/Mac/Vision Pro(Android도 별도 제공)',
            '가격': '무료',
            '모델 유연성': 'Gemma 4 계열 번들 제공; 커스텀 Hugging Face LiteRT 모델 가져오기 가능',
            '핵심 차이': '구글이 만들었고 "실험적 베타"로 표시되며, iPhone에서 Gemma 4를 체험하는 가장 빠른 경로',
          },
          {
            '앱': '[Private LLM](/ko/power-local-llm/private-llm-review)',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '가격': '4.99달러 일회성 구매',
            '모델 유연성': '140개 이상의 엄선된 모델; OmniQuant/GPTQ 양자화',
            '핵심 차이': '유료, 클로즈드 소스이며 소비자 제품으로서 더 완성도 높고 적극적으로 유지관리됨',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iPhone/iPad, 일부 Android 지원',
            '가격': '무료, 오픈소스',
            '모델 유연성': 'Hugging Face 등에서 사용자가 구한 모든 GGUF 파일',
            '핵심 차이': 'Google AI Edge Gallery처럼 무료이며 완전한 오픈소스이지만 Gemma나 LiteRT-LM에 종속되지 않음',
          },
          {
            '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '플랫폼': 'iPhone/iPad/Mac',
            '가격': '무료',
            '모델 유연성': 'Apple MLX 기반으로 Llama, Gemma, Qwen, DeepSeek을 오프라인 실행',
            '핵심 차이': 'Google AI Edge Gallery처럼 무료이지만 LiteRT-LM 대신 Apple 자체의 MLX 프레임워크 위에 구축됨',
          },
          {
            '앱': '[Loci AI](/ko/power-local-llm/loci-ai-review-offline-local-ai)',
            '플랫폼': 'iPhone/iPad/Android/Mac/Windows',
            '가격': '현재 등재 정보 참조',
            '모델 유연성': '약 10개 모델로 구성된 엄선 라이브러리; 지원 모델 중 Gemma 4 E2B/E4B 포함',
            '핵심 차이': 'Google AI Edge Gallery의 iOS 버전보다 더 넓은 크로스 플랫폼 범위를 가지며, 엄선된 모델 목록은 더 작음',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 사항은 자주 변경됩니다 — 결정하기 전에 각 앱 자체 등재 정보에서 현재 세부 사항을 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Google AI Edge Gallery가 적합한 사용자',
        items: [
          '**iPhone에서 무료로 Gemma 4를 체험하고 싶은 독자.** 구글의 현재 플래그십 오픈웨이트 모델 계열을 완전히 온디바이스로 실행하는 가장 빠른 방법 중 하나입니다.',
          '**LiteRT-LM을 평가하는 개발자.** 이 앱은 자신의 프로젝트에 LiteRT-LM을 통합하기 전에 유용한, 구글의 온디바이스 추론 런타임에 대한 실전 데모 역할도 합니다.',
          '**완전한 개발 환경을 먼저 구축하지 않고 LiteRT 형식의 커스텀 Hugging Face 모델을 실험하고 싶은 독자.**',
          '**"실험적 베타" 라벨을 받아들일 수 있는 독자.** 완전히 완성되고 오래 확립된 소비자 앱보다 최신 Gemma 릴리스를 체험하는 것을 우선시하는 사람들입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Google AI Edge Gallery가 적합하지 않은 사용자',
        items: [
          '**성숙하고 적극적으로 관리되는 소비자 제품을 원하는 독자.** [Private LLM](/ko/power-local-llm/private-llm-review)과 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review) 모두 유지관리되고 베타를 벗어난 앱으로서 더 긴 실적을 갖고 있습니다.',
          '**가능한 한 가장 엄격한 개인정보 보호 라벨을 원하는 독자.** 앱스토어 등재는 기기 ID, 성능 데이터, 진단 정보, 대략적인 위치, 충돌 보고서가 수집된다고 나타내며, [Private LLM](/ko/power-local-llm/private-llm-review)의 라벨은 어떤 데이터도 수집되지 않는다고 명시합니다.',
          '**동일한 설치에서 Android 지원이 필요한 독자.** Android 버전은 [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)에서 별도로 다운로드하는 것이며, 이 리뷰가 다루는 iOS 앱스토어 앱이 아닙니다.',
          '**휴대폰에서 가장 큰 Gemma 4 크기를 실행하고 싶은 독자.** 26B와 31B 변형은 일반적인 iPhone 메모리에서 편안하게 실행될 가능성이 낮으며, 이 앱은 이를 확인할 모델별 고정 RAM 최소치를 공개하지 않습니다.',
          '**중앙에서 관리되는 다중 사용자 배포를 원하는 팀.** 이것은 관리 콘솔이나 공유 라이선스 관리가 없는 단일 사용자, 단일 기기용 소비자 앱입니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Google AI Edge Gallery는 무료인가요?',
            a: '네. [앱스토어 등재](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337)는 무료로 다운로드할 수 있으며 구독이나 인앱 구매가 없습니다. 이 리뷰의 확인 날짜는 2026-09-12입니다.',
          },
          {
            q: 'Google AI Edge Gallery는 어떤 모델을 실행하나요?',
            a: '구글의 Gemma 모델 계열, 현재는 Gemma 4 세대(E2B, E4B, 26B, 31B, 멀티모달 12B Unified 변형, 2026년 4월에서 6월 사이 출시)와 이전의 Gemma 3n을 실행합니다. 사용자는 Hugging Face에서 LiteRT 형식으로 커스텀 모델을 가져올 수도 있습니다.',
          },
          {
            q: 'Google AI Edge Gallery는 Android에서도 작동하나요?',
            a: '네, 하지만 별도의 배포로 작동합니다. 기반 오픈소스 프로젝트인 [google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)는 이 리뷰가 다루는 iOS 앱스토어 등재 외에 Google Play와 직접 APK를 통한 Android 버전도 제공합니다.',
          },
          {
            q: 'Google AI Edge Gallery는 제 데이터를 수집하나요?',
            a: '모델이 다운로드되면 채팅 프롬프트와 모델 응답은 기기에서 처리되지만, iOS 등재에 대한 Apple의 개인정보 보호 라벨은 기기 ID, 성능 데이터, 진단 정보가 사용자 신원과 연결되며, 대략적인 위치, 제품 상호작용 데이터, 충돌 보고서는 신원과 연결되지 않은 채로 수집된다고 명시합니다. 추론 자체는 로컬에서 실행되지만 데이터가 전혀 없는 앱은 아닙니다.',
          },
          {
            q: 'LiteRT-LM이란 무엇인가요?',
            a: '[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)은 휴대폰과 같은 엣지 기기에서 대규모 언어 모델을 실행하기 위한 구글의 프로덕션 지향 오픈소스 추론 프레임워크입니다. Gallery 앱의 이전 버전에서 사용되던 구형 MediaPipe LLM Inference API를 계승했습니다.',
          },
          {
            q: 'Google AI Edge Gallery에 제 모델을 가져올 수 있나요?',
            a: '네 — 구글 자체 문서는 이 앱이 모델 카드 URL을 통해 Hugging Face에서 LiteRT 형식의 커스텀 모델을 로드하는 것을 지원한다고 확인합니다. 게이트가 있는 Hugging Face 저장소에 대한 요구 사항(예: 액세스 토큰 필요 여부)의 세부 사항은 명확히 문서화되어 있지 않습니다. 시도하기 전에 현재의 앱 내 안내를 확인하세요.',
          },
          {
            q: 'Google AI Edge Gallery는 완성된 제품인가요, 베타인가요?',
            a: 'GitHub의 구글 자체 프로젝트 문서는 이를 "실험적 베타 릴리스"로 설명하며 사용자 피드백을 요청합니다 — 이 상태는 하나의 플랫폼뿐 아니라 iOS, Android, 데스크톱 전반의 기반 프로젝트에 적용됩니다.',
          },
          {
            q: 'iOS 버전은 어떤 기기를 지원하나요?',
            a: '앱스토어 등재에 따르면: iOS 17.0 이상의 iPhone과 iPad, macOS 14.0 이상과 Apple M1 이상 칩을 탑재한 Mac, visionOS 1.0 이상의 Apple Vision Pro입니다.',
          },
          {
            q: 'Google AI Edge Gallery는 Private LLM과 비교하면 어떤가요?',
            a: 'Google AI Edge Gallery는 무료이고, 구글이 만들었으며, 실험적 베타로 표시되고, LiteRT-LM을 통한 Gemma 모델을 중심으로 합니다. [Private LLM](/ko/power-local-llm/private-llm-review)은 4.99달러 일회성 구매, 클로즈드 소스이며, 140개 이상의 모델로 구성된 더 큰 엄선 라이브러리와 유지관리되는 소비자 앱으로서 더 긴 실적을 제공합니다. 무료로 Gemma 4를 체험하려면 Google AI Edge Gallery를, 더 완성도 높고 적극적으로 유지관리되는 유료 경험을 원한다면 Private LLM을 선택하세요.',
          },
          {
            q: 'Google AI Edge Gallery는 오디오와 이미지 입력을 지원하나요?',
            a: '네, 로드된 모델에 따라 다릅니다. Ask Image는 멀티모달 사진 분석을 제공하고, Audio Scribe는 온디바이스 음성 전사 및 번역을 제공합니다. 기반 Gemma 모델의 오디오 지원은 Gemma 3n에서 시작되었으며 12B Unified 변형을 포함한 특정 Gemma 4 크기에서 계속됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'Google AI Edge Gallery는 오픈소스 모델을 감싼 타사 래퍼가 아니라 구글의 프로덕션급 LiteRT-LM 런타임에 뒷받침되어, 구글 자체의 Gemma 4 모델을 iPhone에서 완전히 실행하는 가장 빠르고 무료인 방법으로서 이 기사군에서 한 자리를 차지합니다. Hugging Face 가져오기 지원과 멀티모달 기능(Ask Image, Audio Scribe, Thinking Mode)은 단순한 채팅 클라이언트를 넘어섭니다. 트레이드오프도 마찬가지로 실질적입니다: 구글 스스로 이 프로젝트를 "실험적 베타"로 표시하고, iOS 앱스토어 개인정보 보호 라벨은 가장 엄격한 프라이버시 중심 경쟁 제품보다 더 많은 데이터 수집을 보여주며, 이 앱은 Private LLM과 같은 앱보다 유지관리되는 소비자 제품으로서 더 짧은 실적을 갖고 있습니다. 특히 최신 Gemma 모델을 무료로 원하거나 개발자로서 LiteRT-LM을 평가하는 독자는 설치해야 합니다. 가장 완성도 높고, 가장 오래 확립되었으며, 가장 프라이버시에 엄격한 모바일 로컬 AI 앱을 원하는 독자는 먼저 [Private LLM](/ko/power-local-llm/private-llm-review)이나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 비교해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[앱스토어의 Google AI Edge Gallery](https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337) — 가격, 플랫폼 요건, 개인정보 보호 라벨, 평가, 버전 이력.',
          '[GitHub의 google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) — 프로젝트 개요, 지원 플랫폼, Hugging Face 가져오기, 라이선스, 베타 상태.',
          '[GitHub의 LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) — 이 앱이 구축된 온디바이스 추론 런타임.',
          '[Google AI Edge Gallery 발표 블로그 게시물](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 2025년 9월 9일 오디오 지원 및 Google Play 제공 발표.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — 더 큰 엄선 모델 라이브러리를 갖춘 더 완성도 높은 유료 대안.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 수동 GGUF 가져오기가 가능한 무료 오픈소스 대안.',
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — 유사한 모델 계열을 지원하는 Apple MLX 기반 무료 대안.',
          '[Loci AI 리뷰](/ko/power-local-llm/loci-ai-review-offline-local-ai) — Gemma 4도 지원하는 크로스 플랫폼 온디바이스 앱.',
          '[완전한 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory) — Google AI Edge Gallery 항목을 포함해 모든 플랫폼에 걸친 로컬 LLM 도구의 더 넓은 디렉터리.',
        ],
      },
    },
  },
}
