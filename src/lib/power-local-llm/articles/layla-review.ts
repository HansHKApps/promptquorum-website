// Layla Review: On-Device AI Companion App for Android and iOS
// Slug: layla-review
// Companion to: pocketpal-ai-review, private-llm-review, enclave-ai-review, backyard-ai-review-local-roleplay,
// loci-ai-review-offline-local-ai, locally-ai-review, best-local-llm-apps-android-2026, best-local-llm-apps-iphone-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/layla-review-hero-en.webp',
    title: 'Layla Review (2026): On-Device AI Companion App for Android and iOS',
    seoTitle: 'Layla Review 2026: Local AI Companion App, Pricing & Privacy',
    intro:
      'Layla, made by [Layla Network Pty Ltd](https://www.layla-network.ai) — an Australia-registered company also linked on GitHub to developer [l3utterfly](https://github.com/l3utterfly), who publishes the "Layla" family of fine-tuned open-weight models — is a paid app for Android and iOS built around running a personal AI companion locally on your phone, with persona, roleplay, and character features that go beyond plain chat. It costs [$19.99 as a one-time app purchase](https://apps.apple.com/us/app/layla/id6456886656) on both the App Store and Google Play, on top of which the App Store listing shows three named in-app purchase tiers. Layla\'s core chat is designed to run entirely on-device using GGUF models via llama.cpp, but the app also ships an optional, separately consented cloud mode called Layla Cloud that is not on by default — this review covers exactly what runs locally, what does not, what it actually costs, and who it fits, based on the developer\'s own privacy policy, app store listings, and public documentation rather than independent hands-on testing.',
    metaDescription:
      'Layla review 2026: $19.99 on-device AI companion app for Android and iOS. What actually runs locally vs. the optional Layla Cloud mode, exact pricing, models, and who should skip it.',
    twitterDescription:
      'Layla review 2026: a $19.99 local AI companion app for Android and iOS with roleplay and persona features. What runs on-device, what the optional cloud mode collects, and how it compares to PocketPal AI and Private LLM.',
    audience:
      'Android and iOS users considering a paid, on-device AI companion/roleplay app and who need to know precisely what stays local versus what an optional cloud mode collects, plus exact pricing and reliability caveats from public app store reviews.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Layla review',
    targetKeywords: [
      'layla ai review',
      'layla app local llm',
      'layla network ai',
      'layla ai android iphone',
      'layla ai privacy cloud',
      'layla ai pricing',
      'local ai companion app',
      'layla vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama2 7B Layla', 'OpenLLaMA 3B v2 Layla', 'GGUF models', 'Stable Diffusion 1.5'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**Layla is a $19.99 one-time-purchase app for Android and iOS, made by [Layla Network Pty Ltd](https://www.layla-network.ai), that runs GGUF language models on-device for a persona-driven AI companion, complete with roleplay characters, voices, and image generation.** Per the developer\'s own [privacy policy](https://blog.layla-network.ai/privacy), the app\'s core functionality is designed to run offline, and it shows a warning before any data leaves the device — but Layla also ships an optional, separately activated cloud mode called Layla Cloud, which is not the same as the fully local, no-cloud-component design of an app like [PocketPal AI](/power-local-llm/pocketpal-ai-review). Readers who want the strongest possible "never touches a server, ever" guarantee should weigh that distinction carefully before buying.',
    quickAnswerTop: {
      en: {
        question: 'Is Layla a fully offline, local-only AI app?',
        answer:
          'Mostly, but not entirely. Layla\'s core chat and character features are designed to run on-device via GGUF models, and its privacy policy states the app warns you before any data leaves your phone. However, Layla also offers an optional, separately installed or enabled cloud mode called Layla Cloud, which does collect anonymized conversation data when active — so Layla is not a strictly local-only app the way some competitors are.',
        bullets: [
          '$19.99 one-time purchase on the [App Store](https://apps.apple.com/us/app/layla/id6456886656) and [Google Play](https://play.google.com/store/apps/details?id=com.layla) — plus three named in-app purchase tiers.',
          'Core chat runs on-device via GGUF models through llama.cpp; the developer\'s privacy policy says it warns you before any data leaves the device.',
          'Layla Cloud is a separate, optional, opt-in mode that collects anonymized conversation data when enabled — it is off unless you activate it.',
          'Roleplay-focused: persona characters, group conversations, 100+ TTS voices, and local Stable Diffusion 1.5 image generation, per the app store listings.',
          'App Store rating is 3.8/5 from 31 ratings at review time; some reviewers report unreliable offline features — treat this as user-reported, not independently verified by PromptQuorum.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Layla?', anchor: 'what-is-layla' },
      { label: 'Who Built Layla?', anchor: 'history-and-developer' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Which Models Does Layla Support?', anchor: 'models-supported' },
      { label: 'Is Layla Available on Android and iPhone?', anchor: 'platform-availability' },
      { label: 'How Much Does Layla Cost?', anchor: 'pricing' },
      { label: 'Privacy: Local Chat vs. Layla Cloud', anchor: 'privacy' },
      { label: 'Companion and Roleplay Features', anchor: 'key-features' },
      { label: 'What Hardware Do You Need?', anchor: 'hardware-requirements' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Who Should Use Layla', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Layla', anchor: 'who-should-not-use' },
      { label: 'Layla vs. Alternatives', anchor: 'vs-alternatives' },
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
            text: 'Layla is a $19.99 one-time-purchase Android and iOS app, made by Layla Network Pty Ltd, that runs GGUF language models on-device for a persona-driven AI companion, and separately offers an optional, opt-in cloud mode called Layla Cloud.',
          },
          {
            type: 'plain-terms',
            text: 'It is a companion-style chat app you install to talk with a customizable AI character that mostly runs on your own phone rather than a company server — but unlike some fully local apps, it also has an optional online mode you can turn on for cloud-based chat and features, which is not enabled by default.',
          },
        ],
        items: [
          'Price: [$19.99 one-time purchase](https://apps.apple.com/us/app/layla/id6456886656) on the App Store and Google Play, plus three named in-app purchase tiers whose exact contents are not fully detailed in the public listing.',
          'Developer: [Layla Network Pty Ltd](https://www.layla-network.ai), an Australia-registered company; Layla-branded fine-tuned models on Hugging Face are published under the GitHub account [l3utterfly](https://github.com/l3utterfly).',
          'Core chat runs on-device via GGUF models through llama.cpp; the app also supports LiteRT-LM and PTE (ExecuTorch) model backends and local Stable Diffusion 1.5 image generation, per the developer\'s own technical blog posts.',
          'Privacy: per the developer\'s [privacy policy](https://blog.layla-network.ai/privacy), core functionality is designed to run offline and the app warns you before data leaves the device — except for the separate, optional Layla Cloud mode, which is off by default.',
          'Companion and roleplay focus: customizable personas, group conversations, 100+ voices, and Live2D character animation, distinguishing it from plainer chat apps in this category.',
          'App Store rating: 3.8/5 from 31 ratings at review time; some reviewers report crashes and unreliable offline behavior — a user-reported concern this review has not independently verified.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Naming note: "Layla" is used by several unrelated apps and companies — including an AI travel-planning company acquired by Expedia Group in 2026, and a separate "Layla – Voice Chat & Party Rooms" social app. This review covers only the on-device AI companion app published by Layla Network Pty Ltd (App Store ID 6456886656, Google Play package com.layla), also marketed at [layla-network.ai](https://www.layla-network.ai).',
          },
          {
            type: 'note',
            text: 'This review is based on Layla\'s public privacy policy, the App Store and Google Play listings, the developer\'s own technical blog posts, and publicly visible user reviews, checked in September 2026. PromptQuorum has not conducted independent hands-on testing or benchmarking of Layla for this review.',
          },
        ],
      },
      overview: {
        id: 'what-is-layla',
        title: 'What Is Layla?',
        content: [
          '**Layla is a mobile app for Android and iOS built around a persona-driven AI companion that runs primarily on-device, using [llama.cpp](https://github.com/ggml-org/llama.cpp) to execute GGUF-format open-weight language models locally.** Rather than framing itself as a general-purpose chat client, Layla leans into character and roleplay features: users can create or download customizable AI personalities, hold group conversations with multiple characters, and generate images locally via a bundled Stable Diffusion 1.5 pipeline.',
          'Per its own [privacy policy](https://blog.layla-network.ai/privacy), "the core functionality of our App is designed to run offline on your device," and the policy states the app shows a warning and confirmation message before any action that sends data outside the device. Separately, the developer also publishes an optional cloud-based mode — Layla Cloud — described on its own store listing as "the cloud version of the premium app \'Layla,\'" aimed at less technical users who want character chat without managing local models. That optional cloud path, covered in detail in the Privacy section below, is the single most important nuance for a privacy-focused reader to understand before buying.',
        ],
        note: 'GGUF is a file format for packaging quantized open-weight language models so they can run efficiently on consumer hardware via runtimes like llama.cpp, instead of calling a cloud API for every response.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Who Built Layla?',
        content: [
          '**Layla is published by [Layla Network Pty Ltd](https://www.layla-network.ai), a company registered in Southport, Queensland, Australia, and the app first appeared publicly around August 2023.** The technical model work behind the app is attributed on GitHub and Hugging Face to a developer using the handle [l3utterfly](https://github.com/l3utterfly), who has published dozens of "Layla"-branded fine-tuned open-weight models — including [Llama2 7B Layla](https://huggingface.co/l3utterfly/llama2-7b-layla) and [OpenLLaMA 3B v2 Layla](https://huggingface.co/l3utterfly/open-llama-3b-v2-layla) — described in their own model cards as base models used by the Layla app.',
          'The same GitHub account also maintains adjacent infrastructure projects: [Layla-Server](https://github.com/l3utterfly/Layla-Server), a wrapper that proxies OpenAI-compatible requests through WebRTC so the mobile app can connect to a more powerful PC running its own local model, and a [Layla SDK](https://github.com/l3utterfly/layla-sdk) for building custom mini-apps that run inside Layla. This points to an actively maintained technical ecosystem around the app rather than a single static release, though — unlike PocketPal AI\'s fully open-source repository — Layla\'s own client app source code is not published, so its internal behavior cannot be independently audited the way an MIT-licensed app\'s can.',
        ],
        items: [
          'Publisher: [Layla Network Pty Ltd](https://www.layla-network.ai), registered in Southport, Queensland, Australia.',
          'Public launch: around August 2023, per third-party app-directory listings.',
          'Model development: Layla-branded open-weight fine-tunes published on Hugging Face under the GitHub account [l3utterfly](https://github.com/l3utterfly).',
          'Related projects: [Layla-Server](https://github.com/l3utterfly/Layla-Server) (connect the app to a self-hosted PC backend over WebRTC) and [Layla SDK](https://github.com/l3utterfly/layla-sdk) (build mini-apps inside Layla).',
          'Client app source code is not public — unlike PocketPal AI or Maid, Layla\'s app itself is closed source even though some of its underlying models are open-weight.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**Setting up Layla for local chat takes a few steps after purchase, based on the app\'s own store description and technical blog posts.** There is no account required to use the core local features.',
        ],
        numberedItems: [
          {
            title: 'Buy and install the app',
            whyItMatters: 'Download Layla from the [App Store](https://apps.apple.com/us/app/layla/id6456886656) ($19.99) or [Google Play](https://play.google.com/store/apps/details?id=com.layla) ($19.99). A separate, more limited free version has reportedly been distributed via direct APK download from the developer\'s own site — check [layla-network.ai](https://www.layla-network.ai) directly for current availability of that option before assuming it applies to your platform.',
          },
          {
            title: 'Let the app download its default model',
            whyItMatters: 'On first launch, Layla downloads a language model (reported at around 4 GB in past versions) before you can start chatting; this is a one-time download for that model.',
          },
          {
            title: 'Pick or customize a persona',
            whyItMatters: 'Choose a built-in character or create your own with a name, personality, and voice — Layla\'s interface is organized around characters rather than a single generic chat thread.',
          },
          {
            title: 'Optionally import a custom GGUF model',
            whyItMatters: 'Advanced users can load their own GGUF-format model file instead of, or alongside, the app\'s default models.',
          },
          {
            title: 'Chat offline, or opt into Layla Cloud',
            whyItMatters: 'Local chat and image generation do not require a network connection once a model is downloaded. Layla Cloud is a separate, optional mode you must explicitly install or enable — it is not part of the default local experience described above.',
          },
        ],
        note: 'Some App Store and Google Play reviewers report that offline model loading and custom model import have been unreliable in past versions, particularly on iOS. This review has not independently verified current stability — treat first-time setup as something to test within the platform\'s refund window before relying on the app.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Which Models Does Layla Support?',
        itemHeadings: true,
        columns: ['Model type', 'Access method', 'Typical use case'],
        rows: [
          {
            'Model type': 'Bundled default model',
            'Access method': 'Downloaded automatically on first launch',
            'Typical use case': 'General companion chat out of the box, no configuration required',
          },
          {
            'Model type': 'Layla-branded fine-tunes',
            'Access method': 'Published on [Hugging Face](https://huggingface.co/l3utterfly) by developer l3utterfly (e.g. Llama2 7B Layla, OpenLLaMA 3B v2 Layla)',
            'Typical use case': 'Roleplay- and persona-oriented chat tuned for the app\'s character format',
          },
          {
            'Model type': 'Custom GGUF import',
            'Access method': 'Manual import of any GGUF-format file from device storage or Hugging Face',
            'Typical use case': 'Users who already have a preferred open-weight model in GGUF format',
          },
          {
            'Model type': 'LiteRT-LM and PTE (ExecuTorch) models',
            'Access method': 'Alternative on-device runtime backends, per the developer\'s technical blog posts',
            'Typical use case': 'Device- or backend-specific optimized inference beyond plain llama.cpp/GGUF',
          },
          {
            'Model type': 'Stable Diffusion 1.5',
            'Access method': 'Runs locally on-device for image generation, per the developer\'s technical blog posts',
            'Typical use case': 'Local character or scene image generation without a cloud image API',
          },
        ],
        note: 'Exact bundled-model identities and default download sizes have changed across app versions; confirm the current default model and its size in-app before downloading on a limited data plan.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Is Layla Available on Android and iPhone?',
        itemHeadings: true,
        columns: ['Platform', 'Availability', 'Notes'],
        rows: [
          {
            'Platform': 'iPhone / iPad',
            'Availability': 'Available on the [App Store](https://apps.apple.com/us/app/layla/id6456886656), requires iOS 16.4 / iPadOS 16.4 or later',
            'Notes': 'App Store listing also shows Mac (macOS 13.0, Apple M1 or later) and Apple Vision (visionOS 1.0 or later) compatibility for the same app.',
          },
          {
            'Platform': 'Android',
            'Availability': 'Available on [Google Play](https://play.google.com/store/apps/details?id=com.layla)',
            'Notes': 'A direct APK distribution channel has also reportedly been offered from the developer\'s own site, separate from Google Play — verify current availability directly before relying on it.',
          },
          {
            'Platform': 'Windows / Linux',
            'Availability': 'No native Windows or Linux desktop release confirmed at review time',
            'Notes': 'The [Layla-Server](https://github.com/l3utterfly/Layla-Server) project lets the mobile app connect to a PC running its own local backend over WebRTC, which is a bridge rather than a native desktop client.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'How Much Does Layla Cost?',
        content: [
          '**Layla costs $19.99 as a one-time purchase on both the [Apple App Store](https://apps.apple.com/us/app/layla/id6456886656) and [Google Play](https://play.google.com/store/apps/details?id=com.layla).** On top of that base purchase, the App Store listing shows three named in-app purchase tiers — Monarch ($4.99), Birdwing ($19.99), and Blue Morpho ($29.99) — but the public store listing does not fully spell out what each tier unlocks (for example, whether they cover cloud usage credits, premium characters, or additional voices). Confirm exactly what a given tier includes inside the app before purchasing it.',
          'A separate, more limited free version of the app has reportedly been distributed via direct APK download from the developer\'s own site, according to the developer\'s own blog content — this is distinct from the paid App Store and Google Play listings, and its current availability and feature set should be checked directly on [layla-network.ai](https://www.layla-network.ai) rather than assumed from this review.',
          'Layla Cloud, the separate optional cloud-chat mode, is listed as free to download as its own app on the stores; whether ongoing use of Layla Cloud requires a subscription or credits beyond the free tier is not detailed in the public listing reviewed for this article.',
        ],
        items: [
          '**Base app:** $19.99 one-time purchase on the App Store and Google Play — no subscription required for the base purchase itself.',
          '**In-app purchase tiers:** Monarch ($4.99), Birdwing ($19.99), Blue Morpho ($29.99) — named on the App Store listing; exact inclusions not fully detailed publicly.',
          '**Free/limited version:** Reportedly available via direct APK download from the developer\'s own site, separate from the paid store listings — verify current status directly.',
          '**Layla Cloud:** A separate, free-to-download companion app for cloud-based character chat; its own cost structure beyond the free tier is not detailed in the public listing.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy: Local Chat vs. Layla Cloud',
        content: [
          '**Layla\'s own [privacy policy](https://blog.layla-network.ai/privacy) states that "the core functionality of our App is designed to run offline on your device," and that the app will show you a warning and a confirmation message before taking any action that sends your data outside the device.** The policy names specific triggers for outbound data: uploading a character to the Personality Hub, using the in-app "Report a Bug" feature, and enabling optional cloud features.',
          'That last item — optional cloud features — is Layla Cloud, described by the developer as a distinct, separate mode: per the policy, "Layla Cloud is only enabled if you install the \'Layla Cloud\' mini-app within Layla," and if it is not installed or activated, "no features related to Layla Cloud are enabled." When Layla Cloud is active, the developer\'s own documentation states it collects conversation history — your messages, character responses, and data from auxiliary features such as Long-Term Memory, PDF Digest, and Dream — and that this data is anonymized and not linked to your account, though it may be used for debugging or to improve the service. The policy also states Layla Cloud does not retroactively collect conversations from before it was enabled.',
          'Taken together, this is a materially different privacy design from an app whose core functionality has no cloud component at all: Layla\'s default local mode is designed to stay on-device with an explicit consent gate before any transmission, but the product itself ships an optional, separately activated cloud path that does collect anonymized conversation data when a user turns it on. Readers who want the strongest possible guarantee — a product with no cloud mode to opt into in the first place — should compare this against [PocketPal AI](/power-local-llm/pocketpal-ai-review), whose entire codebase is open source and MIT-licensed with no built-in cloud chat feature to activate.',
        ],
        items: [
          '**Local mode:** Per the developer\'s policy, designed to run offline; the app is stated to warn and ask for confirmation before any data leaves the device.',
          '**Layla Cloud:** A separate, opt-in mode (installed as a mini-app or a distinct app) that collects anonymized conversation history, including auxiliary feature data, when activated.',
          '**Not retroactive:** Per the policy, enabling Layla Cloud does not pull in conversation history from before it was turned on.',
          '**Closed source:** Unlike PocketPal AI or Maid, Layla\'s client app code is not published, so the no-transmission-by-default claim rests on the developer\'s own privacy policy rather than independent code audit.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review has not independently audited Layla\'s network traffic or source code. The description above reflects the developer\'s own published privacy policy and store listings, not an independent security assessment by PromptQuorum.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Companion and Roleplay Features',
        content: [
          '**Layla\'s feature set is built around persona and roleplay use cases more than a plain question-and-answer chat interface, per its own app store descriptions.** Named features include:',
        ],
        items: [
          '**Customizable personalities.** Users can create or download AI characters with distinct personas rather than talking to one fixed assistant identity.',
          '**Group conversations.** Multiple characters can participate in the same conversation thread, per the app\'s listing.',
          '**100+ voices.** The app lists a large voice library for text-to-speech character responses.',
          '**Live2D character animation.** Visual, animated character representations rather than a plain text interface.',
          '**Local image generation.** A bundled Stable Diffusion 1.5 pipeline runs on-device for character or scene images, per the developer\'s technical blog posts.',
          '**Programmable agents (Python).** Advanced users can script agent-style behaviors using Python, per the app\'s own description.',
          '**No built-in content filter on local inference.** Because local generation runs entirely on the device\'s own hardware, the developer\'s own materials describe it as having no server-side content moderation layer for that mode — a deliberate design choice, and one that shifts responsibility for appropriate use onto the individual user rather than a hosted moderation system.',
        ],
        note: 'Feature availability, the size of the voice library, and specific model integrations have changed across app versions; confirm current feature availability in-app rather than assuming everything described in older marketing material still applies unchanged.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'What Hardware Do You Need to Run Layla?',
        content: [
          '**The App Store listing recommends a minimum of 8 GB of RAM, and Layla\'s own marketing has historically described the app as targeting recent flagship phones rather than budget or older hardware.** This is a stricter baseline than some competing local-chat apps that support smaller 2–4B parameter models comfortably on 4 GB of RAM — Layla\'s companion features (larger default models, local image generation, and character animation) push the practical hardware floor higher.',
          'As with any GGUF-based app, the specific model loaded — not the app itself — is the real determinant of memory needs: a smaller quantized model needs less RAM than a 7B+ parameter model, and running local Stable Diffusion image generation alongside chat adds additional memory and processing overhead beyond text-only inference.',
        ],
        items: [
          'Minimum recommended: 8 GB of RAM, per the App Store listing — meaningfully higher than the 4 GB floor common among plainer local-chat apps in this category.',
          'Recent flagship-tier phones (roughly the last few generations) are recommended over older or budget devices, per the developer\'s own marketing materials.',
          'Storage: the default first-launch model download has been reported at around 4 GB in past versions; custom GGUF models and Stable Diffusion checkpoints add further storage requirements.',
          'Local image generation (Stable Diffusion 1.5) adds processing and memory overhead beyond text-only chat — expect slower performance on lower-RAM devices when using this feature.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Companion and roleplay depth',
            'What it means in real use': 'Persona characters, group chat, 100+ voices, and Live2D animation go beyond a plain chat interface.',
            'Limitation / caveat': 'Readers who just want a straightforward assistant-style chat app may find PocketPal AI or Private LLM simpler to use.',
          },
          {
            'Benefit': 'Local text and image generation',
            'What it means in real use': 'Both chat and Stable Diffusion 1.5 image generation can run entirely on-device.',
            'Limitation / caveat': 'Requires meaningfully more RAM and storage than text-only local chat apps; the App Store lists an 8 GB minimum.',
          },
          {
            'Benefit': 'Explicit consent gate before outbound data',
            'What it means in real use': 'Per the privacy policy, the app warns before sending data outside the device for features like character uploads or bug reports.',
            'Limitation / caveat': 'The app also ships an optional Layla Cloud mode that does collect anonymized conversation data once a user opts in — it is not a no-cloud-component product by design.',
          },
          {
            'Benefit': 'Active model and infrastructure development',
            'What it means in real use': 'Layla-branded fine-tunes on Hugging Face and adjacent projects like Layla-Server show ongoing technical work.',
            'Limitation / caveat': 'The client app\'s own source code is closed, so behavior cannot be independently code-audited the way PocketPal AI\'s or Maid\'s can.',
          },
          {
            'Benefit': 'One-time $19.99 purchase',
            'What it means in real use': 'No subscription required for the base app on either store.',
            'Limitation / caveat': 'Three additional named in-app purchase tiers exist whose exact inclusions are not fully detailed in the public listing — confirm what you are buying in-app.',
          },
          {
            'Benefit': 'Cross-platform: Android and iOS',
            'What it means in real use': 'Available on both major mobile platforms, unlike Apple-only apps such as Private LLM.',
            'Limitation / caveat': 'Public App Store reviews report crashes and unreliable offline features on some devices — user-reported, not independently verified by PromptQuorum.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Layla',
        items: [
          '**Users who want a companion/roleplay-style local AI, not a plain assistant.** If persona characters, group conversations, and voice output matter more than a minimal chat UI, Layla\'s feature set is built specifically for that use case.',
          '**Users who want local image generation alongside chat.** The bundled Stable Diffusion 1.5 pipeline lets a single app handle both text and image generation on-device.',
          '**Users comfortable buying a paid app once rather than using a free tool.** $19.99 buys the base app outright on both major mobile platforms.',
          '**Users who read privacy policies carefully and are comfortable with an opt-in cloud mode.** Layla\'s local-by-default design with an explicit warning before any data leaves the device may be an acceptable middle ground for readers who do not need a product with zero cloud capability whatsoever.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Layla',
        items: [
          '**Readers who need a guaranteed zero-cloud-component product.** Because Layla ships an optional cloud mode (Layla Cloud) that collects anonymized data once activated, readers who specifically want an app with no cloud feature to ever opt into should choose [PocketPal AI](/power-local-llm/pocketpal-ai-review), whose entire open-source codebase has no built-in cloud chat path.',
          '**Readers who want a free or fully open-source app.** Layla is a $19.99 paid, closed-source app; PocketPal AI (free, MIT-licensed) and Maid (free, MIT-licensed) both cover that need instead.',
          '**Readers who want a simple, minimal assistant-style chat interface.** Layla\'s character- and persona-first design adds complexity that users who just want a straightforward Q&A chat may not want; Private LLM or PocketPal AI are more assistant-shaped.',
          '**Readers on lower-RAM or older devices.** The App Store lists 8 GB of RAM as a minimum recommendation, higher than several competing apps that run smaller models comfortably on 4 GB.',
          '**Readers who need enterprise or team features.** Layla is a single-user consumer app with no admin console, shared licensing, or team billing; organizations should look at self-hosted, server-side local-LLM infrastructure instead.',
          '**Readers who want to independently audit the app\'s source code.** Layla\'s client app is closed source; readers who need that level of assurance should use an MIT- or AGPL-licensed alternative like PocketPal AI, Maid, or ChatterUI.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Layla vs. Alternatives',
        columns: ['App', 'Platforms', 'Price', 'Local vs. cloud', 'Key difference'],
        rows: [
          {
            'App': 'Layla',
            'Platforms': 'Android, iPhone/iPad (also Mac/Vision Pro per App Store listing)',
            'Price': '$19.99 one-time, plus named IAP tiers',
            'Local vs. cloud': 'Local by design; optional opt-in Layla Cloud mode',
            'Key difference': 'Companion/roleplay focus: personas, group chat, voices, local image generation',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iPhone/iPad, Android',
            'Price': 'Free, open source (MIT)',
            'Local vs. cloud': 'Fully local; no built-in cloud chat feature',
            'Key difference': 'Free, fully open source, plain-chat-focused rather than roleplay-focused',
          },
          {
            'App': 'Private LLM',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Price': '$4.99 one-time',
            'Local vs. cloud': 'Fully local; no cloud fallback, per App Store privacy label',
            'Key difference': '140+ curated models with OmniQuant/GPTQ quantization; assistant-style, not roleplay-first',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Platforms': 'See full review for current platform support',
            'Price': 'See current listing',
            'Local vs. cloud': 'See full review',
            'Key difference': 'Apple-focused on-device assistant with Siri/Shortcuts integration',
          },
          {
            'App': '[Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay)',
            'Platforms': 'Windows/Mac desktop (Backyard Cloud adds mobile/web sync)',
            'Price': 'Free desktop app; optional Backyard Cloud $7–$35/month',
            'Local vs. cloud': 'Local by default; explicit paid cloud tier for hosted inference',
            'Key difference': 'Desktop-first roleplay app with a much larger Character Hub; cloud tier is a clearly priced, separate product rather than a free opt-in mode',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Platforms': 'iOS/Mac (open source, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Price': 'Free, open source',
            'Local vs. cloud': 'Fully local',
            'Key difference': 'Was pulled from the App Store and TestFlight per its own GitHub README — verify current availability before relying on it',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Platforms': 'Cross-platform Flutter app (Android primary)',
            'Price': 'Free, open source (MIT)',
            'Local vs. cloud': 'Local via GGUF/llama.cpp; can also connect to remote APIs if the user configures them',
            'Key difference': 'Fully open source and not roleplay-first; remote API use is opt-in and user-configured',
          },
          {
            'App': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'Platforms': 'Android (build from source)',
            'Price': 'Free, open source (AGPL-3.0)',
            'Local vs. cloud': 'Local via GGUF/llama.cpp, or connects to remote APIs if configured',
            'Key difference': 'Character Card v2 support for roleplay, fully open source, more technical setup',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Platforms': 'Android',
            'Price': 'Free, open source',
            'Local vs. cloud': 'Multi-provider client; local inference via a LiteRT provider',
            'Key difference': 'Positions itself as a multi-provider client rather than a local-first companion app',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Platforms': 'Android (iOS planned)',
            'Price': 'Free, open source',
            'Local vs. cloud': 'On-device via Cactus Compute, or pairs with a self-hosted server',
            'Key difference': 'Designed to pair with a self-hosted AnythingLLM workspace, not a standalone companion app',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently — verify current specifics on each app\'s own listing before deciding. LLM Farm\'s App Store availability in particular should be re-checked, since its own GitHub README described it as pulled from the App Store.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Layla free?',
            a: 'No, the main Layla app is a $19.99 one-time purchase on both the App Store and Google Play. The App Store listing also shows three named in-app purchase tiers (Monarch $4.99, Birdwing $19.99, Blue Morpho $29.99). A separate, more limited free version has reportedly been distributed via direct APK download from the developer\'s own site — check [layla-network.ai](https://www.layla-network.ai) for current availability. Layla Cloud, a separate companion app for cloud-based chat, is free to download as its own app.',
          },
          {
            q: 'Does Layla run completely offline, with no cloud component at all?',
            a: 'Not entirely. Per Layla\'s own privacy policy, the core app is designed to run offline and warns you before sending data outside the device. However, Layla also ships an optional, separately activated mode called Layla Cloud that does collect anonymized conversation data when a user turns it on. Layla is not a strictly local-only product the way an app with no cloud feature at all would be — readers who want that stronger guarantee should compare it with [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
          },
          {
            q: 'Who develops Layla?',
            a: 'Layla is published by [Layla Network Pty Ltd](https://www.layla-network.ai), a company registered in Southport, Queensland, Australia. Layla-branded fine-tuned open-weight models used by the app are published on Hugging Face under the GitHub account [l3utterfly](https://github.com/l3utterfly).',
          },
          {
            q: 'Which models can Layla run?',
            a: 'Layla downloads a default model on first launch and can also load Layla-branded fine-tunes published on Hugging Face, or any custom GGUF-format model file, via llama.cpp. The developer\'s technical blog posts also describe support for LiteRT-LM and PTE (ExecuTorch) model backends, plus local Stable Diffusion 1.5 for image generation.',
          },
          {
            q: 'Does Layla work on both Android and iPhone?',
            a: 'Yes. Layla is available on [Google Play](https://play.google.com/store/apps/details?id=com.layla) for Android and on the [App Store](https://apps.apple.com/us/app/layla/id6456886656) for iPhone and iPad; the App Store listing also shows Mac and Apple Vision compatibility for the same app. No native Windows or Linux desktop release was confirmed at review time.',
          },
          {
            q: 'How much RAM does Layla need?',
            a: 'The App Store listing recommends a minimum of 8 GB of RAM, which is higher than the roughly 4 GB floor common among plainer text-only local-chat apps, reflecting Layla\'s larger default models, local image generation, and character animation features.',
          },
          {
            q: 'What is Layla Cloud, and is it the same as the main Layla app?',
            a: 'No. Layla Cloud is a separate, optional mode or mini-app that provides cloud-based character chat for users who do not want to manage local models. Per the privacy policy, it is only active if a user installs or enables it, and when active it collects anonymized conversation history for debugging or service improvement. It does not retroactively collect data from before it was enabled.',
          },
          {
            q: 'Is Layla reliable? Do users report problems?',
            a: 'Layla holds a 3.8/5 rating from 31 ratings on the App Store at review time. Some public App Store reviewers report crashes and unreliable offline features, particularly around custom model import on iOS. This review has not independently verified current app stability — treat these as user-reported observations, and test the app within your platform\'s refund window before relying on it.',
          },
          {
            q: 'Is the "Layla" AI companion app the same company as the "Layla" AI travel planner acquired by Expedia?',
            a: 'No. This review covers the on-device AI companion app published by Layla Network Pty Ltd (App Store ID 6456886656, Google Play package com.layla). It is unrelated to the separate "Layla" AI travel-planning company, based in Berlin, that Expedia Group announced acquiring in 2026, and unrelated to other same-named apps such as "Layla – Voice Chat & Party Rooms."',
          },
          {
            q: 'How does Layla compare to PocketPal AI or Private LLM?',
            a: 'Layla is a $19.99 paid, closed-source, companion/roleplay-focused app with an optional opt-in cloud mode, available on both Android and iOS. PocketPal AI is free, open source, and has no built-in cloud chat feature at all. Private LLM is a $4.99 paid, closed-source, Apple-only, assistant-style app with a larger curated model library and no cloud fallback per its App Store privacy label. Choose Layla for companion/roleplay depth across both mobile platforms; choose PocketPal AI for a free, fully local, open-source option; choose Private LLM for a polished Apple-only assistant experience.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Layla is a genuinely distinctive entry in the mobile local-AI category: it leans into companion and roleplay features — personas, group chat, 100+ voices, and local image generation — that plainer chat apps like PocketPal AI or Private LLM do not attempt, and its $19.99 one-time price covers both Android and iOS from a single purchase. The privacy story is more nuanced than a simple "fully offline" claim: the developer\'s own policy describes a local-by-default core with an explicit warning before any data transmission, but the app also ships an optional Layla Cloud mode that does collect anonymized conversation data once a user turns it on — a meaningfully different design from an app with no cloud path built in at all. Combined with a closed-source client, three in-app purchase tiers whose exact contents are not fully public, and user reports of reliability issues with offline and custom-model features on iOS, Layla suits readers who specifically want its persona/roleplay feature set and are comfortable with that privacy trade-off. Readers who want the strongest available local-only guarantee, full source-code transparency, or the lowest cost should start with [PocketPal AI](/power-local-llm/pocketpal-ai-review) instead.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Layla on the App Store](https://apps.apple.com/us/app/layla/id6456886656) — price, in-app purchase tiers, platform requirements, ratings, and version history.',
          '[Layla on Google Play](https://play.google.com/store/apps/details?id=com.layla) — Android availability and pricing.',
          '[Layla official site](https://www.layla-network.ai) — product overview and developer-published feature descriptions.',
          '[Layla privacy policy](https://blog.layla-network.ai/privacy) — local-vs-cloud data handling, Layla Cloud scope, and data collection disclosures.',
          '[Layla (Cloud) on the App Store](https://apps.apple.com/gb/app/layla-cloud/id6764344419) — the separate optional cloud-mode app listing.',
          '[l3utterfly on GitHub](https://github.com/l3utterfly) and [l3utterfly on Hugging Face](https://huggingface.co/l3utterfly) — Layla-branded model releases and related infrastructure projects (Layla-Server, Layla SDK).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, fully open-source, fully local alternative with no built-in cloud chat feature.',
          '[Private LLM Review](/power-local-llm/private-llm-review) — a $4.99 Apple-only, assistant-style app with a larger curated model library.',
          '[Enclave AI Review](/power-local-llm/enclave-ai-review) — another Apple-focused on-device AI app for comparison.',
          '[Backyard AI Review: Local AI Character Chat and Roleplay](/power-local-llm/backyard-ai-review-local-roleplay) — a desktop-first roleplay alternative with a much larger character library and a clearly priced cloud tier.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android app roundup for comparison.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iOS app roundup for comparison.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Layla Review (2026): On-Device AI Companion App for Android and iOS',
      description:
        'Layla review: a $19.99 on-device AI companion app for Android and iOS with roleplay features. What runs locally vs. the optional Layla Cloud mode, pricing, and who it fits.',
      url: 'https://promptquorum.com/power-local-llm/layla-review',
      inLanguage: 'en',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android and iOS users evaluating a paid, on-device AI companion and roleplay app' },
      about: [
        { '@type': 'Thing', name: 'Layla' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'On-device AI privacy' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/layla-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Layla Review (2026)', item: 'https://promptquorum.com/power-local-llm/layla-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/layla-review-hero-de.webp',
    title: 'Layla im Test (2026): KI-Begleiter-App für Android und iOS auf dem Gerät',
    seoTitle: 'Layla Test 2026: Lokale KI-Begleiter-App, Preise & Datenschutz',
    intro:
      'Layla, entwickelt von [Layla Network Pty Ltd](https://www.layla-network.ai) — einem in Australien registrierten Unternehmen, das auf GitHub auch mit dem Entwickler [l3utterfly](https://github.com/l3utterfly) verknüpft ist, der die "Layla"-Familie feinabgestimmter Open-Weight-Modelle veröffentlicht —, ist eine kostenpflichtige App für Android und iOS, die auf einem lokal auf dem Smartphone laufenden persönlichen KI-Begleiter aufbaut, mit Persona-, Rollenspiel- und Charakterfunktionen, die über einen einfachen Chat hinausgehen. Sie kostet [19,99 $ als einmaligen App-Kauf](https://apps.apple.com/us/app/layla/id6456886656) sowohl im App Store als auch bei Google Play; zusätzlich zeigt der App-Store-Eintrag drei benannte In-App-Kauf-Stufen. Laylas Kern-Chat ist so ausgelegt, dass er vollständig auf dem Gerät über GGUF-Modelle mit llama.cpp läuft, doch die App bietet zusätzlich einen optionalen, separat zustimmungspflichtigen Cloud-Modus namens Layla Cloud, der nicht standardmäßig aktiv ist — dieser Test zeigt genau, was tatsächlich lokal läuft, was nicht, was die App wirklich kostet und für wen sie geeignet ist, basierend auf der eigenen Datenschutzrichtlinie des Entwicklers, den App-Store-Einträgen und öffentlicher Dokumentation statt auf eigenständigen praktischen Tests.',
    metaDescription:
      'Layla Test 2026: 19,99 $ KI-Begleiter-App für Android und iOS auf dem Gerät. Was tatsächlich lokal läuft vs. der optionale Layla-Cloud-Modus, genaue Preise, Modelle und für wen sie geeignet ist.',
    twitterDescription:
      'Layla Test 2026: eine 19,99 $ lokale KI-Begleiter-App für Android und iOS mit Rollenspiel- und Persona-Funktionen. Was auf dem Gerät läuft, was der optionale Cloud-Modus sammelt, und der Vergleich mit PocketPal AI und Private LLM.',
    audience:
      'Android- und iOS-Nutzer, die eine kostenpflichtige KI-Begleiter-/Rollenspiel-App auf dem Gerät in Betracht ziehen und genau wissen müssen, was lokal bleibt und was ein optionaler Cloud-Modus sammelt, plus genaue Preise und Zuverlässigkeitshinweise aus öffentlichen App-Store-Bewertungen.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Layla review',
    targetKeywords: [
      'layla ai test',
      'layla app lokales llm',
      'layla network ai',
      'layla ai android iphone',
      'layla ai datenschutz cloud',
      'layla ai preise',
      'lokale ki begleiter app',
      'layla vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama2 7B Layla', 'OpenLLaMA 3B v2 Layla', 'GGUF models', 'Stable Diffusion 1.5'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**Layla ist eine App mit einmaligem Kaufpreis von 19,99 $ für Android und iOS, entwickelt von [Layla Network Pty Ltd](https://www.layla-network.ai), die Sprachmodelle im GGUF-Format auf dem Gerät ausführt, für einen persona-basierten KI-Begleiter mit Rollenspiel-Charakteren, Stimmen und Bildgenerierung.** Laut der eigenen [Datenschutzrichtlinie](https://blog.layla-network.ai/privacy) des Entwicklers ist die Kernfunktion der App darauf ausgelegt, offline zu laufen, und die App zeigt eine Warnung, bevor Daten das Gerät verlassen — Layla bietet aber zusätzlich einen optionalen, separat aktivierten Cloud-Modus namens Layla Cloud, was ein anderes Design ist als bei einer App ohne jegliche Cloud-Komponente wie [PocketPal AI](/de/power-local-llm/pocketpal-ai-review). Leser, die die stärkstmögliche Garantie wollen — ein Produkt, das gar keinen Cloud-Modus zum Aktivieren anbietet —, sollten diesen Unterschied vor dem Kauf sorgfältig abwägen.',
    quickAnswerTop: {
      de: {
        question: 'Ist Layla eine vollständig offline laufende, rein lokale KI-App?',
        answer:
          'Größtenteils, aber nicht vollständig. Laylas Kern-Chat- und Charakterfunktionen sind so ausgelegt, dass sie über GGUF-Modelle auf dem Gerät laufen, und die Datenschutzrichtlinie besagt, dass die App warnt, bevor Daten das Smartphone verlassen. Layla bietet jedoch zusätzlich einen optionalen, separat installierten oder aktivierten Cloud-Modus namens Layla Cloud, der bei Aktivierung anonymisierte Gesprächsdaten sammelt — Layla ist also keine rein lokale App im Sinne mancher Wettbewerber.',
        bullets: [
          'Einmaliger Kauf für 19,99 $ im [App Store](https://apps.apple.com/us/app/layla/id6456886656) und bei [Google Play](https://play.google.com/store/apps/details?id=com.layla) — plus drei benannte In-App-Kauf-Stufen.',
          'Der Kern-Chat läuft über GGUF-Modelle mit llama.cpp auf dem Gerät; laut Datenschutzrichtlinie des Entwicklers warnt die App, bevor Daten das Gerät verlassen.',
          'Layla Cloud ist ein separater, optionaler Opt-in-Modus, der bei Aktivierung anonymisierte Gesprächsdaten sammelt — er ist standardmäßig deaktiviert.',
          'Rollenspiel-fokussiert: Persona-Charaktere, Gruppenunterhaltungen, über 100 TTS-Stimmen und lokale Stable-Diffusion-1.5-Bildgenerierung, laut App-Store-Einträgen.',
          'Die App-Store-Bewertung liegt zum Testzeitpunkt bei 3,8/5 aus 31 Bewertungen; manche Rezensenten berichten von unzuverlässigen Offline-Funktionen — dies ist nutzergemeldet und wurde von PromptQuorum nicht unabhängig überprüft.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Layla?', anchor: 'what-is-layla' },
      { label: 'Wer hat Layla entwickelt?', anchor: 'history-and-developer' },
      { label: 'Erste Schritte', anchor: 'getting-started' },
      { label: 'Welche Modelle unterstützt Layla?', anchor: 'models-supported' },
      { label: 'Ist Layla für Android und iPhone verfügbar?', anchor: 'platform-availability' },
      { label: 'Was kostet Layla?', anchor: 'pricing' },
      { label: 'Datenschutz: lokaler Chat vs. Layla Cloud', anchor: 'privacy' },
      { label: 'Begleiter- und Rollenspiel-Funktionen', anchor: 'key-features' },
      { label: 'Welche Hardware wird benötigt?', anchor: 'hardware-requirements' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Für wen sich Layla eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich Layla nicht eignet', anchor: 'who-should-not-use' },
      { label: 'Layla im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
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
            text: 'Layla ist eine App von Layla Network Pty Ltd mit einmaligem Kaufpreis von 19,99 $ für Android und iOS, die Sprachmodelle im GGUF-Format auf dem Gerät für einen persona-basierten KI-Begleiter ausführt und separat einen optionalen Opt-in-Cloud-Modus namens Layla Cloud anbietet.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist eine Begleiter-Chat-App, mit der man mit einem individuell anpassbaren KI-Charakter spricht, der größtenteils auf dem eigenen Smartphone statt auf einem Firmenserver läuft — anders als bei manchen rein lokalen Apps gibt es aber zusätzlich einen optionalen Online-Modus für Cloud-basierten Chat, der standardmäßig nicht aktiviert ist.',
          },
        ],
        items: [
          'Preis: [19,99 $ einmaliger Kauf](https://apps.apple.com/us/app/layla/id6456886656) im App Store und bei Google Play, plus drei benannte In-App-Kauf-Stufen, deren genauer Inhalt im öffentlichen Eintrag nicht vollständig aufgeschlüsselt ist.',
          'Entwickler: [Layla Network Pty Ltd](https://www.layla-network.ai), ein in Australien registriertes Unternehmen; die Layla-Marken-Feinabstimmungsmodelle auf Hugging Face werden unter dem GitHub-Konto [l3utterfly](https://github.com/l3utterfly) veröffentlicht.',
          'Der Kern-Chat läuft über GGUF-Modelle mit llama.cpp auf dem Gerät; die App unterstützt laut den technischen Blogbeiträgen des Entwicklers zusätzlich LiteRT-LM- und PTE-Modell-Backends (ExecuTorch) sowie lokale Stable-Diffusion-1.5-Bildgenerierung.',
          'Datenschutz: Laut der [Datenschutzrichtlinie](https://blog.layla-network.ai/privacy) des Entwicklers ist die Kernfunktion darauf ausgelegt, offline zu laufen, und die App warnt, bevor Daten das Gerät verlassen — mit Ausnahme des separaten, optionalen Layla-Cloud-Modus, der standardmäßig deaktiviert ist.',
          'Begleiter- und Rollenspiel-Fokus: individuell anpassbare Personas, Gruppenunterhaltungen, über 100 Stimmen und Live2D-Charakteranimation heben die App von schlichteren Chat-Apps in dieser Kategorie ab.',
          'App-Store-Bewertung: 3,8/5 aus 31 Bewertungen zum Testzeitpunkt; manche Rezensenten berichten von Abstürzen und unzuverlässigem Offline-Verhalten — ein nutzergemeldetes Anliegen, das dieser Test nicht unabhängig überprüft hat.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Hinweis zur Namensgleichheit: "Layla" wird von mehreren unabhängigen Apps und Unternehmen verwendet — darunter ein 2026 von der Expedia Group übernommenes KI-Reiseplanungsunternehmen sowie eine separate Social-App namens "Layla – Voice Chat & Party Rooms". Dieser Test behandelt ausschließlich die KI-Begleiter-App auf dem Gerät, die von Layla Network Pty Ltd veröffentlicht wird (App-Store-ID 6456886656, Google-Play-Paket com.layla), auch vermarktet unter [layla-network.ai](https://www.layla-network.ai).',
          },
          {
            type: 'note',
            text: 'Dieser Test basiert auf Laylas öffentlicher Datenschutzrichtlinie, den App-Store- und Google-Play-Einträgen, den eigenen technischen Blogbeiträgen des Entwicklers und öffentlich einsehbaren Nutzerbewertungen, geprüft im September 2026. PromptQuorum hat für diesen Test keine eigenständigen praktischen Tests oder Benchmarks von Layla durchgeführt.',
          },
        ],
      },
      overview: {
        id: 'what-is-layla',
        title: 'Was ist Layla?',
        content: [
          '**Layla ist eine mobile App für Android und iOS, die auf einem persona-basierten KI-Begleiter aufbaut, der überwiegend auf dem Gerät läuft und dafür [llama.cpp](https://github.com/ggml-org/llama.cpp) nutzt, um Open-Weight-Sprachmodelle im GGUF-Format lokal auszuführen.** Statt sich als allgemeiner Chat-Client zu positionieren, setzt Layla auf Charakter- und Rollenspiel-Funktionen: Nutzer können individuell anpassbare KI-Persönlichkeiten erstellen oder herunterladen, Gruppengespräche mit mehreren Charakteren führen und über eine integrierte Stable-Diffusion-1.5-Pipeline lokal Bilder erzeugen.',
          'Laut der eigenen [Datenschutzrichtlinie](https://blog.layla-network.ai/privacy) ist "die Kernfunktion unserer App darauf ausgelegt, offline auf Ihrem Gerät zu laufen", und die Richtlinie besagt, dass die App eine Warnung und eine Bestätigungsmeldung anzeigt, bevor eine Aktion Daten außerhalb des Geräts sendet. Separat bietet der Entwickler zusätzlich einen optionalen Cloud-basierten Modus an — Layla Cloud —, der im eigenen Store-Eintrag als "die Cloud-Version der Premium-App \'Layla\'" beschrieben wird, gerichtet an weniger technikaffine Nutzer, die Charakter-Chat ohne die Verwaltung lokaler Modelle wollen. Dieser optionale Cloud-Pfad, der im Abschnitt Datenschutz weiter unten im Detail behandelt wird, ist die für datenschutzbewusste Leser wichtigste Nuance vor dem Kauf.',
        ],
        note: 'GGUF ist ein Dateiformat zum Verpacken quantisierter Open-Weight-Sprachmodelle, damit sie über Laufzeitumgebungen wie llama.cpp effizient auf handelsüblicher Hardware laufen, statt für jede Antwort eine Cloud-API aufzurufen.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Wer hat Layla entwickelt?',
        content: [
          '**Layla wird von [Layla Network Pty Ltd](https://www.layla-network.ai) veröffentlicht, einem Unternehmen mit Sitz in Southport, Queensland, Australien; die App erschien öffentlich erstmals um August 2023.** Die technische Modellarbeit hinter der App wird auf GitHub und Hugging Face einem Entwickler mit dem Nutzernamen [l3utterfly](https://github.com/l3utterfly) zugeschrieben, der Dutzende "Layla"-Marken-Feinabstimmungsmodelle veröffentlicht hat — darunter [Llama2 7B Layla](https://huggingface.co/l3utterfly/llama2-7b-layla) und [OpenLLaMA 3B v2 Layla](https://huggingface.co/l3utterfly/open-llama-3b-v2-layla) —, die in den eigenen Modellkarten als Basismodelle der Layla-App beschrieben werden.',
          'Dasselbe GitHub-Konto pflegt zudem angrenzende Infrastrukturprojekte: [Layla-Server](https://github.com/l3utterfly/Layla-Server), einen Wrapper, der OpenAI-kompatible Anfragen über WebRTC weiterleitet, damit die mobile App sich mit einem leistungsstärkeren PC verbinden kann, auf dem ein eigenes lokales Modell läuft, sowie ein [Layla SDK](https://github.com/l3utterfly/layla-sdk) zum Erstellen individueller Mini-Apps innerhalb von Layla. Das deutet auf ein aktiv gepflegtes technisches Ökosystem rund um die App hin statt auf eine einzelne statische Veröffentlichung — anders als bei PocketPal AIs vollständig quelloffenem Repository ist Laylas eigener App-Quellcode jedoch nicht veröffentlicht, sodass das interne Verhalten nicht unabhängig geprüft werden kann wie bei einer MIT-lizenzierten App.',
        ],
        items: [
          'Herausgeber: [Layla Network Pty Ltd](https://www.layla-network.ai), registriert in Southport, Queensland, Australien.',
          'Öffentlicher Start: um August 2023, laut Drittanbieter-App-Verzeichnissen.',
          'Modellentwicklung: Layla-Marken-Open-Weight-Feinabstimmungen, veröffentlicht auf Hugging Face unter dem GitHub-Konto [l3utterfly](https://github.com/l3utterfly).',
          'Verwandte Projekte: [Layla-Server](https://github.com/l3utterfly/Layla-Server) (Verbindung der App mit einem selbst gehosteten PC-Backend über WebRTC) und [Layla SDK](https://github.com/l3utterfly/layla-sdk) (Mini-Apps innerhalb von Layla erstellen).',
          'Der Quellcode der Client-App ist nicht öffentlich — anders als bei PocketPal AI oder Maid ist Laylas App selbst Closed Source, auch wenn einige der zugrunde liegenden Modelle Open Weight sind.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung von Layla für den lokalen Chat erfordert nach dem Kauf einige Schritte, laut der eigenen Store-Beschreibung und den technischen Blogbeiträgen der App.** Für die grundlegenden lokalen Funktionen ist kein Konto erforderlich.',
        ],
        numberedItems: [
          {
            title: 'App kaufen und installieren',
            whyItMatters: 'Laden Sie Layla aus dem [App Store](https://apps.apple.com/us/app/layla/id6456886656) (19,99 $) oder bei [Google Play](https://play.google.com/store/apps/details?id=com.layla) (19,99 $) herunter. Eine separate, eingeschränktere kostenlose Version wurde Berichten zufolge als direkter APK-Download von der eigenen Website des Entwicklers angeboten — prüfen Sie die aktuelle Verfügbarkeit dieser Option direkt auf [layla-network.ai](https://www.layla-network.ai), bevor Sie annehmen, dass sie für Ihre Plattform gilt.',
          },
          {
            title: 'App das Standardmodell herunterladen lassen',
            whyItMatters: 'Beim ersten Start lädt Layla ein Sprachmodell herunter (in früheren Versionen mit rund 4 GB angegeben), bevor der Chat beginnen kann; dies ist ein einmaliger Download für dieses Modell.',
          },
          {
            title: 'Persona auswählen oder anpassen',
            whyItMatters: 'Wählen Sie einen integrierten Charakter oder erstellen Sie einen eigenen mit Name, Persönlichkeit und Stimme — Laylas Oberfläche ist um Charaktere herum organisiert statt um einen einzigen generischen Chat-Thread.',
          },
          {
            title: 'Optional: eigenes GGUF-Modell importieren',
            whyItMatters: 'Fortgeschrittene Nutzer können eine eigene Modelldatei im GGUF-Format anstelle von oder zusätzlich zu den Standardmodellen der App laden.',
          },
          {
            title: 'Offline chatten oder Layla Cloud aktivieren',
            whyItMatters: 'Lokaler Chat und Bildgenerierung benötigen nach dem Herunterladen eines Modells keine Netzwerkverbindung. Layla Cloud ist ein separater, optionaler Modus, den Sie ausdrücklich installieren oder aktivieren müssen — er ist nicht Teil der oben beschriebenen standardmäßigen lokalen Erfahrung.',
          },
        ],
        note: 'Manche App-Store- und Google-Play-Rezensenten berichten, dass das Laden von Offline-Modellen und der Import eigener Modelle in früheren Versionen unzuverlässig waren, insbesondere unter iOS. Dieser Test hat die aktuelle Stabilität nicht unabhängig überprüft — testen Sie die Ersteinrichtung innerhalb des Rückgabefensters der jeweiligen Plattform, bevor Sie sich auf die App verlassen.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Welche Modelle unterstützt Layla?',
        itemHeadings: true,
        columns: ['Modelltyp', 'Zugriffsmethode', 'Typischer Anwendungsfall'],
        rows: [
          {
            'Modelltyp': 'Mitgeliefertes Standardmodell',
            'Zugriffsmethode': 'Wird beim ersten Start automatisch heruntergeladen',
            'Typischer Anwendungsfall': 'Allgemeiner Begleiter-Chat ohne Konfiguration',
          },
          {
            'Modelltyp': 'Layla-Marken-Feinabstimmungen',
            'Zugriffsmethode': 'Veröffentlicht auf [Hugging Face](https://huggingface.co/l3utterfly) durch Entwickler l3utterfly (z. B. Llama2 7B Layla, OpenLLaMA 3B v2 Layla)',
            'Typischer Anwendungsfall': 'Auf Rollenspiel und Persona ausgerichteter Chat, abgestimmt auf das Charakterformat der App',
          },
          {
            'Modelltyp': 'Eigener GGUF-Import',
            'Zugriffsmethode': 'Manueller Import einer beliebigen GGUF-Datei aus dem Gerätespeicher oder von Hugging Face',
            'Typischer Anwendungsfall': 'Nutzer, die bereits ein bevorzugtes Open-Weight-Modell im GGUF-Format haben',
          },
          {
            'Modelltyp': 'LiteRT-LM- und PTE-Modelle (ExecuTorch)',
            'Zugriffsmethode': 'Alternative On-Device-Laufzeit-Backends, laut den technischen Blogbeiträgen des Entwicklers',
            'Typischer Anwendungsfall': 'Geräte- oder Backend-spezifisch optimierte Inferenz über einfaches llama.cpp/GGUF hinaus',
          },
          {
            'Modelltyp': 'Stable Diffusion 1.5',
            'Zugriffsmethode': 'Läuft lokal auf dem Gerät zur Bildgenerierung, laut den technischen Blogbeiträgen des Entwicklers',
            'Typischer Anwendungsfall': 'Lokale Charakter- oder Szenenbilderzeugung ohne Cloud-Bild-API',
          },
        ],
        note: 'Die genaue Identität der mitgelieferten Modelle und die Standard-Downloadgrößen haben sich über App-Versionen hinweg geändert; bestätigen Sie das aktuelle Standardmodell und dessen Größe in der App, bevor Sie es bei begrenztem Datenvolumen herunterladen.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Ist Layla für Android und iPhone verfügbar?',
        itemHeadings: true,
        columns: ['Plattform', 'Verfügbarkeit', 'Hinweise'],
        rows: [
          {
            'Plattform': 'iPhone / iPad',
            'Verfügbarkeit': 'Verfügbar im [App Store](https://apps.apple.com/us/app/layla/id6456886656), erfordert iOS 16.4 / iPadOS 16.4 oder neuer',
            'Hinweise': 'Der App-Store-Eintrag zeigt zudem Mac- (macOS 13.0, Apple M1 oder neuer) und Apple-Vision-Kompatibilität (visionOS 1.0 oder neuer) für dieselbe App.',
          },
          {
            'Plattform': 'Android',
            'Verfügbarkeit': 'Verfügbar bei [Google Play](https://play.google.com/store/apps/details?id=com.layla)',
            'Hinweise': 'Berichten zufolge wurde zudem ein direkter APK-Vertriebsweg von der eigenen Website des Entwicklers angeboten, getrennt von Google Play — prüfen Sie die aktuelle Verfügbarkeit direkt, bevor Sie sich darauf verlassen.',
          },
          {
            'Plattform': 'Windows / Linux',
            'Verfügbarkeit': 'Zum Testzeitpunkt keine native Windows- oder Linux-Desktop-Version bestätigt',
            'Hinweise': 'Das Projekt [Layla-Server](https://github.com/l3utterfly/Layla-Server) erlaubt es der mobilen App, sich über WebRTC mit einem PC zu verbinden, auf dem ein eigenes lokales Backend läuft — das ist eine Brücke, kein nativer Desktop-Client.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Was kostet Layla?',
        content: [
          '**Layla kostet 19,99 $ als einmaligen Kauf sowohl im [Apple App Store](https://apps.apple.com/us/app/layla/id6456886656) als auch bei [Google Play](https://play.google.com/store/apps/details?id=com.layla).** Zusätzlich zu diesem Basiskauf zeigt der App-Store-Eintrag drei benannte In-App-Kauf-Stufen — Monarch (4,99 $), Birdwing (19,99 $) und Blue Morpho (29,99 $) —, doch der öffentliche Store-Eintrag schlüsselt nicht vollständig auf, was jede Stufe freischaltet (zum Beispiel, ob sie Cloud-Nutzungsguthaben, Premium-Charaktere oder zusätzliche Stimmen abdecken). Bestätigen Sie vor dem Kauf in der App genau, was eine bestimmte Stufe enthält.',
          'Eine separate, eingeschränktere kostenlose Version der App wurde laut den eigenen Blog-Inhalten des Entwicklers Berichten zufolge als direkter APK-Download von der eigenen Website des Entwicklers angeboten — das ist getrennt von den kostenpflichtigen App-Store- und Google-Play-Einträgen; die aktuelle Verfügbarkeit und der Funktionsumfang sollten direkt auf [layla-network.ai](https://www.layla-network.ai) geprüft werden, statt aus diesem Test übernommen zu werden.',
          'Layla Cloud, der separate optionale Cloud-Chat-Modus, wird als eigene App in den Stores kostenlos zum Download angeboten; ob die fortlaufende Nutzung von Layla Cloud über die kostenlose Stufe hinaus ein Abonnement oder Guthaben erfordert, ist im für diesen Artikel geprüften öffentlichen Eintrag nicht aufgeschlüsselt.',
        ],
        items: [
          '**Basis-App:** 19,99 $ einmaliger Kauf im App Store und bei Google Play — für den Basiskauf selbst ist kein Abonnement erforderlich.',
          '**In-App-Kauf-Stufen:** Monarch (4,99 $), Birdwing (19,99 $), Blue Morpho (29,99 $) — im App-Store-Eintrag benannt; genauer Inhalt öffentlich nicht vollständig aufgeschlüsselt.',
          '**Kostenlose/eingeschränkte Version:** Berichten zufolge über direkten APK-Download von der eigenen Website des Entwicklers verfügbar, getrennt von den kostenpflichtigen Store-Einträgen — aktuellen Status direkt prüfen.',
          '**Layla Cloud:** Eine separate, kostenlos herunterladbare Begleit-App für Cloud-basierten Charakter-Chat; die eigene Kostenstruktur über die kostenlose Stufe hinaus ist im öffentlichen Eintrag nicht aufgeschlüsselt.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz: lokaler Chat vs. Layla Cloud',
        content: [
          '**Laylas eigene [Datenschutzrichtlinie](https://blog.layla-network.ai/privacy) besagt, dass "die Kernfunktion unserer App darauf ausgelegt ist, offline auf Ihrem Gerät zu laufen", und dass die App eine Warnung und eine Bestätigungsmeldung anzeigt, bevor eine Aktion Ihre Daten außerhalb des Geräts sendet.** Die Richtlinie nennt konkrete Auslöser für ausgehende Daten: das Hochladen eines Charakters in den Personality Hub, die Nutzung der In-App-Funktion "Fehler melden" sowie die Aktivierung optionaler Cloud-Funktionen.',
          'Dieser letzte Punkt — optionale Cloud-Funktionen — ist Layla Cloud, vom Entwickler als eigenständiger, separater Modus beschrieben: Laut der Richtlinie "wird Layla Cloud nur aktiviert, wenn Sie die Mini-App \'Layla Cloud\' innerhalb von Layla installieren", und wenn sie nicht installiert oder aktiviert ist, "sind keine mit Layla Cloud verbundenen Funktionen aktiv". Wenn Layla Cloud aktiv ist, sammelt es laut der eigenen Dokumentation des Entwicklers den Gesprächsverlauf — Ihre Nachrichten, Charakterantworten sowie Daten aus Zusatzfunktionen wie Langzeitgedächtnis, PDF Digest und Dream —, und diese Daten sind anonymisiert und nicht mit Ihrem Konto verknüpft, können aber zur Fehlerbehebung oder zur Verbesserung des Dienstes verwendet werden. Die Richtlinie besagt zudem, dass Layla Cloud keine Gespräche rückwirkend erfasst, die vor der Aktivierung stattfanden.',
          'Insgesamt ist das ein deutlich anderes Datenschutzkonzept als bei einer App ohne jegliche Cloud-Komponente: Laylas lokaler Standardmodus ist darauf ausgelegt, mit einer ausdrücklichen Zustimmungsschranke vor jeder Übertragung auf dem Gerät zu bleiben, doch das Produkt selbst bietet einen optionalen, separat aktivierten Cloud-Pfad, der bei Aktivierung anonymisierte Gesprächsdaten sammelt. Leser, die die stärkstmögliche Garantie wollen — ein Produkt ohne überhaupt aktivierbaren Cloud-Modus —, sollten dies mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen, dessen gesamter Quellcode Open Source und MIT-lizenziert ist, ohne integrierte Cloud-Chat-Funktion zum Aktivieren.',
        ],
        items: [
          '**Lokaler Modus:** Laut der Richtlinie des Entwicklers darauf ausgelegt, offline zu laufen; die App warnt und fragt laut Angabe nach Bestätigung, bevor Daten das Gerät verlassen.',
          '**Layla Cloud:** Ein separater, Opt-in-Modus (als Mini-App oder eigenständige App installiert), der bei Aktivierung anonymisierten Gesprächsverlauf einschließlich Zusatzfunktionsdaten sammelt.',
          '**Nicht rückwirkend:** Laut der Richtlinie erfasst die Aktivierung von Layla Cloud keinen Gesprächsverlauf von vor der Aktivierung.',
          '**Closed Source:** Anders als PocketPal AI oder Maid ist Laylas Client-Code nicht veröffentlicht, sodass die Standard-Nicht-Übertragung-Behauptung auf der eigenen Datenschutzrichtlinie des Entwicklers beruht statt auf einer unabhängigen Code-Prüfung.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test hat weder den Netzwerkverkehr noch den Quellcode von Layla unabhängig geprüft. Die obige Beschreibung gibt die veröffentlichte Datenschutzrichtlinie und die Store-Einträge des Entwicklers wieder, keine unabhängige Sicherheitsbewertung durch PromptQuorum.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Begleiter- und Rollenspiel-Funktionen',
        content: [
          '**Laylas Funktionsumfang ist laut eigenen App-Store-Beschreibungen stärker auf Persona- und Rollenspiel-Anwendungsfälle ausgerichtet als auf eine reine Frage-Antwort-Chat-Oberfläche.** Genannte Funktionen sind:',
        ],
        items: [
          '**Individuell anpassbare Persönlichkeiten.** Nutzer können KI-Charaktere mit eigenen Persönlichkeiten erstellen oder herunterladen, statt mit einer einzigen festen Assistenten-Identität zu sprechen.',
          '**Gruppenunterhaltungen.** Laut Eintrag der App können mehrere Charaktere im selben Gesprächsverlauf mitwirken.',
          '**Über 100 Stimmen.** Die App listet eine große Stimmbibliothek für Text-zu-Sprache-Charakterantworten.',
          '**Live2D-Charakteranimation.** Visuelle, animierte Charakterdarstellungen statt einer reinen Textoberfläche.',
          '**Lokale Bildgenerierung.** Eine integrierte Stable-Diffusion-1.5-Pipeline läuft laut den technischen Blogbeiträgen des Entwicklers auf dem Gerät für Charakter- oder Szenenbilder.',
          '**Programmierbare Agenten (Python).** Fortgeschrittene Nutzer können laut eigener Beschreibung der App agentenartiges Verhalten mit Python skripten.',
          '**Kein integrierter Inhaltsfilter bei lokaler Inferenz.** Da die lokale Generierung vollständig auf der eigenen Hardware des Geräts läuft, beschreibt der Entwickler dies in eigenen Materialien als eine Konfiguration ohne serverseitige Moderationsschicht für diesen Modus — eine bewusste Designentscheidung, die die Verantwortung für angemessene Nutzung eher dem einzelnen Nutzer als einem gehosteten Moderationssystem überträgt.',
        ],
        note: 'Funktionsumfang, Größe der Stimmbibliothek und bestimmte Modellintegrationen haben sich über App-Versionen hinweg geändert; bestätigen Sie die aktuelle Funktionsverfügbarkeit in der App, statt anzunehmen, dass alles in älterem Marketingmaterial Beschriebene unverändert gilt.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Welche Hardware wird für Layla benötigt?',
        content: [
          '**Der App-Store-Eintrag empfiehlt mindestens 8 GB RAM, und Laylas eigenes Marketing hat die App historisch als für aktuelle Flaggschiff-Smartphones statt für Budget- oder ältere Hardware ausgelegt beschrieben.** Das ist eine strengere Untergrenze als bei manchen konkurrierenden lokalen Chat-Apps, die kleinere 2–4B-Parameter-Modelle bequem mit 4 GB RAM unterstützen — Laylas Begleiter-Funktionen (größere Standardmodelle, lokale Bildgenerierung und Charakteranimation) heben die praktische Hardware-Untergrenze an.',
          'Wie bei jeder GGUF-basierten App bestimmt das konkret geladene Modell — nicht die App selbst — den tatsächlichen Speicherbedarf: Ein kleineres quantisiertes Modell benötigt weniger RAM als ein Modell mit 7B+ Parametern, und die lokale Stable-Diffusion-Bildgenerierung parallel zum Chat bringt zusätzlichen Speicher- und Rechenaufwand über reine Textinferenz hinaus mit sich.',
        ],
        items: [
          'Empfohlene Mindestausstattung: 8 GB RAM laut App-Store-Eintrag — deutlich höher als die in dieser Kategorie übliche Untergrenze von 4 GB bei schlichteren lokalen Chat-Apps.',
          'Laut eigenen Marketingmaterialien des Entwicklers werden aktuelle Flaggschiff-Smartphones (etwa die letzten paar Generationen) gegenüber älteren oder Budget-Geräten empfohlen.',
          'Speicherplatz: Der Standard-Modell-Download beim ersten Start wurde in früheren Versionen mit rund 4 GB angegeben; eigene GGUF-Modelle und Stable-Diffusion-Checkpoints erhöhen den Speicherbedarf zusätzlich.',
          'Lokale Bildgenerierung (Stable Diffusion 1.5) bringt zusätzlichen Rechen- und Speicheraufwand über reinen Text-Chat hinaus mit sich — bei Geräten mit weniger RAM ist bei dieser Funktion mit langsamerer Leistung zu rechnen.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung in der Praxis', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Begleiter- und Rollenspiel-Tiefe',
            'Bedeutung in der Praxis': 'Persona-Charaktere, Gruppenchat, über 100 Stimmen und Live2D-Animation gehen über eine reine Chat-Oberfläche hinaus.',
            'Einschränkung / Hinweis': 'Leser, die einfach einen unkomplizierten Assistenten-Chat wollen, finden PocketPal AI oder Private LLM möglicherweise einfacher zu bedienen.',
          },
          {
            'Vorteil': 'Lokale Text- und Bildgenerierung',
            'Bedeutung in der Praxis': 'Sowohl Chat als auch Stable-Diffusion-1.5-Bildgenerierung können vollständig auf dem Gerät laufen.',
            'Einschränkung / Hinweis': 'Erfordert deutlich mehr RAM und Speicherplatz als reine Text-Chat-Apps; der App Store nennt ein Minimum von 8 GB.',
          },
          {
            'Vorteil': 'Ausdrückliche Zustimmungsschranke vor ausgehenden Daten',
            'Bedeutung in der Praxis': 'Laut Datenschutzrichtlinie warnt die App, bevor sie für Funktionen wie Charakter-Uploads oder Fehlerberichte Daten außerhalb des Geräts sendet.',
            'Einschränkung / Hinweis': 'Die App bietet außerdem einen optionalen Layla-Cloud-Modus, der nach Aktivierung anonymisierte Gesprächsdaten sammelt — Layla ist konzeptionell kein Produkt ohne jegliche Cloud-Komponente.',
          },
          {
            'Vorteil': 'Aktive Modell- und Infrastrukturentwicklung',
            'Bedeutung in der Praxis': 'Layla-Marken-Feinabstimmungen auf Hugging Face und angrenzende Projekte wie Layla-Server zeigen laufende technische Arbeit.',
            'Einschränkung / Hinweis': 'Der Quellcode der Client-App selbst ist nicht öffentlich, sodass das Verhalten nicht unabhängig geprüft werden kann wie bei PocketPal AI oder Maid.',
          },
          {
            'Vorteil': 'Einmaliger Kauf für 19,99 $',
            'Bedeutung in der Praxis': 'Für die Basis-App ist auf keiner der beiden Stores ein Abonnement erforderlich.',
            'Einschränkung / Hinweis': 'Es gibt drei zusätzliche benannte In-App-Kauf-Stufen, deren genauer Inhalt im öffentlichen Eintrag nicht vollständig aufgeschlüsselt ist — in der App prüfen, was genau gekauft wird.',
          },
          {
            'Vorteil': 'Plattformübergreifend: Android und iOS',
            'Bedeutung in der Praxis': 'Verfügbar auf beiden großen mobilen Plattformen, anders als reine Apple-Apps wie Private LLM.',
            'Einschränkung / Hinweis': 'Öffentliche App-Store-Bewertungen berichten von Abstürzen und unzuverlässigen Offline-Funktionen auf manchen Geräten — nutzergemeldet, nicht unabhängig von PromptQuorum überprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich Layla eignet',
        items: [
          '**Nutzer, die eine begleiter-/rollenspielartige lokale KI wollen, keinen reinen Assistenten.** Wenn Persona-Charaktere, Gruppenunterhaltungen und Sprachausgabe wichtiger sind als eine minimalistische Chat-Oberfläche, ist Laylas Funktionsumfang genau dafür gebaut.',
          '**Nutzer, die lokale Bildgenerierung zusammen mit Chat wollen.** Die integrierte Stable-Diffusion-1.5-Pipeline lässt eine einzige App sowohl Text- als auch Bildgenerierung auf dem Gerät abwickeln.',
          '**Nutzer, die bereit sind, eine App einmalig zu kaufen, statt ein kostenloses Tool zu nutzen.** 19,99 $ kaufen die Basis-App auf beiden großen mobilen Plattformen dauerhaft frei.',
          '**Nutzer, die Datenschutzrichtlinien sorgfältig lesen und mit einem Opt-in-Cloud-Modus einverstanden sind.** Laylas standardmäßig lokales Design mit ausdrücklicher Warnung vor jeder Datenübertragung kann für Leser, die kein Produkt mit null Cloud-Fähigkeit benötigen, ein akzeptabler Mittelweg sein.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich Layla nicht eignet',
        items: [
          '**Leser, die ein garantiert komponentenfreies Cloud-Produkt benötigen.** Da Layla einen optionalen Cloud-Modus (Layla Cloud) anbietet, der nach Aktivierung anonymisierte Daten sammelt, sollten Leser, die ausdrücklich eine App ohne jemals aktivierbare Cloud-Funktion wollen, [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) wählen, dessen gesamter Open-Source-Code keinen integrierten Cloud-Chat-Pfad hat.',
          '**Leser, die eine kostenlose oder vollständig quelloffene App wollen.** Layla ist eine kostenpflichtige, Closed-Source-App für 19,99 $; PocketPal AI (kostenlos, MIT-lizenziert) und Maid (kostenlos, MIT-lizenziert) decken diesen Bedarf stattdessen ab.',
          '**Leser, die eine schlichte, minimalistische Assistenten-Chat-Oberfläche wollen.** Laylas charakter- und persona-erstes Design bringt Komplexität mit sich, die Nutzer, die nur einen unkomplizierten Frage-Antwort-Chat wollen, möglicherweise nicht wünschen; Private LLM oder PocketPal AI sind eher assistentenartig gestaltet.',
          '**Leser mit Geräten mit weniger RAM oder älterer Hardware.** Der App Store nennt 8 GB RAM als Mindestempfehlung, höher als bei mehreren konkurrierenden Apps, die kleinere Modelle bequem mit 4 GB unterstützen.',
          '**Leser, die Unternehmens- oder Team-Funktionen benötigen.** Layla ist eine Einzelnutzer-Verbraucher-App ohne Admin-Konsole, gemeinsame Lizenzverwaltung oder Team-Abrechnung; Organisationen sollten stattdessen selbst gehostete, serverseitige lokale-LLM-Infrastruktur in Betracht ziehen.',
          '**Leser, die den Quellcode der App selbst unabhängig prüfen wollen.** Laylas Client-App ist Closed Source; Leser, die diese Sicherheit benötigen, sollten eine MIT- oder AGPL-lizenzierte Alternative wie PocketPal AI, Maid oder ChatterUI nutzen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Layla im Vergleich zu Alternativen',
        columns: ['App', 'Plattformen', 'Preis', 'Lokal vs. Cloud', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': 'Layla',
            'Plattformen': 'Android, iPhone/iPad (laut App-Store-Eintrag auch Mac/Vision Pro)',
            'Preis': '19,99 $ einmalig, plus benannte IAP-Stufen',
            'Lokal vs. Cloud': 'Standardmäßig lokal; optionaler Opt-in-Modus Layla Cloud',
            'Wesentlicher Unterschied': 'Begleiter-/Rollenspiel-Fokus: Personas, Gruppenchat, Stimmen, lokale Bildgenerierung',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iPhone/iPad, Android',
            'Preis': 'Kostenlos, Open Source (MIT)',
            'Lokal vs. Cloud': 'Vollständig lokal; keine integrierte Cloud-Chat-Funktion',
            'Wesentlicher Unterschied': 'Kostenlos, vollständig quelloffen, eher auf reinen Chat als auf Rollenspiel ausgerichtet',
          },
          {
            'App': 'Private LLM',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Preis': '4,99 $ einmalig',
            'Lokal vs. Cloud': 'Vollständig lokal; laut App-Store-Datenschutzlabel kein Cloud-Fallback',
            'Wesentlicher Unterschied': '140+ kuratierte Modelle mit OmniQuant/GPTQ-Quantisierung; assistentenartig statt rollenspiel-erst',
          },
          {
            'App': '[Enclave AI](/de/power-local-llm/enclave-ai-review)',
            'Plattformen': 'Siehe vollständigen Test für aktuelle Plattformunterstützung',
            'Preis': 'Siehe aktuellen Eintrag',
            'Lokal vs. Cloud': 'Siehe vollständigen Test',
            'Wesentlicher Unterschied': 'Auf Apple ausgerichteter On-Device-Assistent mit Siri-/Shortcuts-Integration',
          },
          {
            'App': '[Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay)',
            'Plattformen': 'Windows/Mac-Desktop (Backyard Cloud fügt Mobil-/Web-Synchronisierung hinzu)',
            'Preis': 'Kostenlose Desktop-App; optionale Backyard Cloud 7–35 $/Monat',
            'Lokal vs. Cloud': 'Standardmäßig lokal; ausdrückliche kostenpflichtige Cloud-Stufe für gehostete Inferenz',
            'Wesentlicher Unterschied': 'Desktop-erste Rollenspiel-App mit deutlich größerem Character Hub; die Cloud-Stufe ist ein klar bepreistes, separates Produkt statt eines kostenlosen Opt-in-Modus',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Plattformen': 'iOS/Mac (Open Source, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Preis': 'Kostenlos, Open Source',
            'Lokal vs. Cloud': 'Vollständig lokal',
            'Wesentlicher Unterschied': 'Wurde laut eigener GitHub-README aus dem App Store und TestFlight entfernt — aktuelle Verfügbarkeit vor Nutzung prüfen',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plattformen': 'Plattformübergreifende Flutter-App (primär Android)',
            'Preis': 'Kostenlos, Open Source (MIT)',
            'Lokal vs. Cloud': 'Lokal über GGUF/llama.cpp; kann bei Nutzerkonfiguration auch mit Remote-APIs verbunden werden',
            'Wesentlicher Unterschied': 'Vollständig quelloffen und nicht rollenspiel-erst; Remote-API-Nutzung ist Opt-in und nutzerkonfiguriert',
          },
          {
            'App': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'Plattformen': 'Android (aus Quellcode gebaut)',
            'Preis': 'Kostenlos, Open Source (AGPL-3.0)',
            'Lokal vs. Cloud': 'Lokal über GGUF/llama.cpp, oder Verbindung zu Remote-APIs bei Konfiguration',
            'Wesentlicher Unterschied': 'Character-Card-v2-Unterstützung für Rollenspiel, vollständig quelloffen, technisch aufwendigere Einrichtung',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plattformen': 'Android',
            'Preis': 'Kostenlos, Open Source',
            'Lokal vs. Cloud': 'Multi-Provider-Client; lokale Inferenz über einen LiteRT-Provider',
            'Wesentlicher Unterschied': 'Positioniert sich als Multi-Provider-Client statt als lokal-erste Begleiter-App',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plattformen': 'Android (iOS geplant)',
            'Preis': 'Kostenlos, Open Source',
            'Lokal vs. Cloud': 'Auf dem Gerät über Cactus Compute, oder in Kombination mit einem selbst gehosteten Server',
            'Wesentlicher Unterschied': 'Für die Kombination mit einem selbst gehosteten AnythingLLM-Workspace konzipiert, keine eigenständige Begleiter-App',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsdetails für Apps von Drittanbietern ändern sich häufig — prüfen Sie vor einer Entscheidung die aktuellen Angaben im jeweiligen App-Eintrag. Insbesondere die App-Store-Verfügbarkeit von LLM Farm sollte erneut geprüft werden, da die eigene GitHub-README die Entfernung aus dem App Store beschrieb.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Layla kostenlos?',
            a: 'Nein, die Haupt-App Layla kostet 19,99 $ als einmaligen Kauf sowohl im App Store als auch bei Google Play. Der App-Store-Eintrag zeigt zudem drei benannte In-App-Kauf-Stufen (Monarch 4,99 $, Birdwing 19,99 $, Blue Morpho 29,99 $). Eine separate, eingeschränktere kostenlose Version wurde Berichten zufolge als direkter APK-Download von der eigenen Website des Entwicklers angeboten — aktuelle Verfügbarkeit auf [layla-network.ai](https://www.layla-network.ai) prüfen. Layla Cloud, eine separate Begleit-App für Cloud-basierten Chat, ist als eigene App kostenlos herunterladbar.',
          },
          {
            q: 'Läuft Layla vollständig offline, ganz ohne Cloud-Komponente?',
            a: 'Nicht ganz. Laut Laylas eigener Datenschutzrichtlinie ist die Kern-App darauf ausgelegt, offline zu laufen, und warnt, bevor Daten das Gerät verlassen. Layla bietet jedoch zusätzlich einen optionalen, separat aktivierten Modus namens Layla Cloud, der bei Aktivierung anonymisierte Gesprächsdaten sammelt. Layla ist also kein rein lokales Produkt im Sinne einer App ganz ohne Cloud-Funktion — Leser, die diese stärkere Garantie wollen, sollten es mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen.',
          },
          {
            q: 'Wer entwickelt Layla?',
            a: 'Layla wird von [Layla Network Pty Ltd](https://www.layla-network.ai) veröffentlicht, einem in Southport, Queensland, Australien registrierten Unternehmen. Die von der App genutzten Layla-Marken-Open-Weight-Feinabstimmungsmodelle werden auf Hugging Face unter dem GitHub-Konto [l3utterfly](https://github.com/l3utterfly) veröffentlicht.',
          },
          {
            q: 'Welche Modelle kann Layla ausführen?',
            a: 'Layla lädt beim ersten Start ein Standardmodell herunter und kann zusätzlich Layla-Marken-Feinabstimmungen von Hugging Face oder jede eigene Modelldatei im GGUF-Format über llama.cpp laden. Die technischen Blogbeiträge des Entwicklers beschreiben zudem Unterstützung für LiteRT-LM- und PTE-Modell-Backends (ExecuTorch) sowie lokale Stable Diffusion 1.5 zur Bildgenerierung.',
          },
          {
            q: 'Funktioniert Layla sowohl auf Android als auch auf dem iPhone?',
            a: 'Ja. Layla ist bei [Google Play](https://play.google.com/store/apps/details?id=com.layla) für Android und im [App Store](https://apps.apple.com/us/app/layla/id6456886656) für iPhone und iPad verfügbar; der App-Store-Eintrag zeigt zudem Mac- und Apple-Vision-Kompatibilität für dieselbe App. Zum Testzeitpunkt wurde keine native Windows- oder Linux-Desktop-Version bestätigt.',
          },
          {
            q: 'Wie viel RAM benötigt Layla?',
            a: 'Der App-Store-Eintrag empfiehlt mindestens 8 GB RAM, was höher ist als die bei schlichteren reinen Text-Chat-Apps übliche Untergrenze von rund 4 GB — bedingt durch Laylas größere Standardmodelle, lokale Bildgenerierung und Charakteranimationsfunktionen.',
          },
          {
            q: 'Was ist Layla Cloud, und ist es dasselbe wie die Haupt-App Layla?',
            a: 'Nein. Layla Cloud ist ein separater, optionaler Modus bzw. eine Mini-App, die Cloud-basierten Charakter-Chat für Nutzer bietet, die keine lokalen Modelle verwalten möchten. Laut Datenschutzrichtlinie ist er nur aktiv, wenn ein Nutzer ihn installiert oder aktiviert, und sammelt im aktiven Zustand anonymisierten Gesprächsverlauf zur Fehlerbehebung oder Diensteverbesserung. Er erfasst keine Daten rückwirkend von vor der Aktivierung.',
          },
          {
            q: 'Ist Layla zuverlässig? Berichten Nutzer von Problemen?',
            a: 'Layla hat zum Testzeitpunkt eine Bewertung von 3,8/5 aus 31 Bewertungen im App Store. Manche öffentlichen App-Store-Rezensenten berichten von Abstürzen und unzuverlässigen Offline-Funktionen, insbesondere beim Import eigener Modelle unter iOS. Dieser Test hat die aktuelle App-Stabilität nicht unabhängig überprüft — betrachten Sie dies als nutzergemeldete Beobachtungen und testen Sie die App innerhalb des Rückgabefensters Ihrer Plattform, bevor Sie sich darauf verlassen.',
          },
          {
            q: 'Ist die KI-Begleiter-App "Layla" dasselbe Unternehmen wie der von Expedia übernommene KI-Reiseplaner "Layla"?',
            a: 'Nein. Dieser Test behandelt die KI-Begleiter-App auf dem Gerät, veröffentlicht von Layla Network Pty Ltd (App-Store-ID 6456886656, Google-Play-Paket com.layla). Sie steht in keiner Verbindung zu dem separaten, in Berlin ansässigen KI-Reiseplanungsunternehmen "Layla", dessen Übernahme die Expedia Group 2026 bekannt gab, und auch nicht zu anderen gleichnamigen Apps wie "Layla – Voice Chat & Party Rooms".',
          },
          {
            q: 'Wie schneidet Layla im Vergleich zu PocketPal AI oder Private LLM ab?',
            a: 'Layla ist eine kostenpflichtige, Closed-Source-App für 19,99 $ mit Begleiter-/Rollenspiel-Fokus und optionalem Opt-in-Cloud-Modus, verfügbar sowohl für Android als auch iOS. PocketPal AI ist kostenlos, quelloffen und hat überhaupt keine integrierte Cloud-Chat-Funktion. Private LLM ist eine kostenpflichtige (4,99 $), Closed-Source, ausschließlich für Apple verfügbare, assistentenartige App mit einer größeren kuratierten Modellbibliothek und laut App-Store-Datenschutzlabel ohne Cloud-Fallback. Wählen Sie Layla für Begleiter-/Rollenspiel-Tiefe auf beiden mobilen Plattformen; wählen Sie PocketPal AI für eine kostenlose, vollständig lokale, quelloffene Option; wählen Sie Private LLM für eine ausgereifte, ausschließlich für Apple verfügbare Assistenten-Erfahrung.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Layla ist ein wirklich eigenständiger Beitrag in der Kategorie mobiler lokaler KI: Die App setzt auf Begleiter- und Rollenspiel-Funktionen — Personas, Gruppenchat, über 100 Stimmen und lokale Bildgenerierung —, an die sich schlichtere Chat-Apps wie PocketPal AI oder Private LLM nicht heranwagen, und der einmalige Kaufpreis von 19,99 $ deckt Android und iOS aus einem einzigen Kauf ab. Das Datenschutzbild ist differenzierter als eine einfache "vollständig offline"-Aussage: Die eigene Richtlinie des Entwicklers beschreibt einen standardmäßig lokalen Kern mit ausdrücklicher Warnung vor jeder Datenübertragung, doch die App bietet zusätzlich einen optionalen Layla-Cloud-Modus, der nach Aktivierung anonymisierte Gesprächsdaten sammelt — ein deutlich anderes Design als bei einer App gänzlich ohne integrierten Cloud-Pfad. Zusammen mit einer Closed-Source-Client-App, drei In-App-Kauf-Stufen, deren genauer Inhalt nicht vollständig öffentlich ist, und Nutzerberichten über Zuverlässigkeitsprobleme bei Offline- und eigenen Modellfunktionen unter iOS eignet sich Layla für Leser, die speziell den Persona-/Rollenspiel-Funktionsumfang wollen und mit dieser Datenschutz-Abwägung einverstanden sind. Leser, die die stärkstmögliche rein lokale Garantie, vollständige Quellcode-Transparenz oder den niedrigsten Preis wollen, sollten stattdessen mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) beginnen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Layla im App Store](https://apps.apple.com/us/app/layla/id6456886656) — Preis, In-App-Kauf-Stufen, Plattformanforderungen, Bewertungen und Versionsverlauf.',
          '[Layla bei Google Play](https://play.google.com/store/apps/details?id=com.layla) — Verfügbarkeit und Preise für Android.',
          '[Offizielle Layla-Website](https://www.layla-network.ai) — Produktübersicht und vom Entwickler veröffentlichte Funktionsbeschreibungen.',
          '[Layla-Datenschutzrichtlinie](https://blog.layla-network.ai/privacy) — Umgang mit lokalen vs. Cloud-Daten, Umfang von Layla Cloud und Angaben zur Datenerfassung.',
          '[Layla (Cloud) im App Store](https://apps.apple.com/gb/app/layla-cloud/id6764344419) — der Eintrag der separaten optionalen Cloud-Modus-App.',
          '[l3utterfly auf GitHub](https://github.com/l3utterfly) und [l3utterfly auf Hugging Face](https://huggingface.co/l3utterfly) — Layla-Marken-Modellveröffentlichungen und verwandte Infrastrukturprojekte (Layla-Server, Layla SDK).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal AI Test](/de/power-local-llm/pocketpal-ai-review) — eine kostenlose, vollständig quelloffene, vollständig lokale Alternative ohne integrierte Cloud-Chat-Funktion.',
          '[Private LLM Test](/de/power-local-llm/private-llm-review) — eine 4,99-$-App ausschließlich für Apple mit assistentenartigem Stil und größerer kuratierter Modellbibliothek.',
          '[Enclave AI Test](/de/power-local-llm/enclave-ai-review) — eine weitere auf Apple ausgerichtete On-Device-KI-App zum Vergleich.',
          '[Backyard AI Test: lokaler KI-Charakter-Chat und Rollenspiel](/de/power-local-llm/backyard-ai-review-local-roleplay) — eine desktop-erste Rollenspiel-Alternative mit deutlich größerer Charakterbibliothek und klar bepreister Cloud-Stufe.',
          '[Beste lokale LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-App-Überblick zum Vergleich.',
          '[Beste lokale LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — der breitere iOS-App-Überblick zum Vergleich.',
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
    heroImage: '/images/layla-review-hero-es.webp',
    title: 'Layla: Análisis (2026): App de Compañero de IA en el Dispositivo para Android e iOS',
    seoTitle: 'Layla Análisis 2026: App de IA Local, Precios y Privacidad',
    intro:
      'Layla, creada por [Layla Network Pty Ltd](https://www.layla-network.ai) —una empresa registrada en Australia también vinculada en GitHub al desarrollador [l3utterfly](https://github.com/l3utterfly), quien publica la familia de modelos de peso abierto ajustados "Layla"—, es una app de pago para Android e iOS centrada en ejecutar un compañero de IA personal de forma local en el teléfono, con funciones de persona, rol y personaje que van más allá del chat simple. Cuesta [$19.99 como compra única](https://apps.apple.com/us/app/layla/id6456886656) tanto en la App Store como en Google Play, y además la ficha de la App Store muestra tres niveles de compra dentro de la app. El chat principal de Layla está diseñado para ejecutarse completamente en el dispositivo mediante modelos GGUF con llama.cpp, pero la app también incluye un modo en la nube opcional y con consentimiento aparte llamado Layla Cloud, que no está activo por defecto. Este análisis explica exactamente qué se ejecuta localmente, qué no, cuánto cuesta realmente y para quién es adecuada, basado en la política de privacidad del propio desarrollador, las fichas de las tiendas de apps y documentación pública, no en pruebas prácticas independientes.',
    metaDescription:
      'Análisis de Layla 2026: app de compañero de IA en el dispositivo para Android e iOS por $19.99. Qué se ejecuta realmente en local frente al modo opcional Layla Cloud, precios exactos, modelos y para quién es adecuada.',
    twitterDescription:
      'Análisis de Layla 2026: una app de compañero de IA local para Android e iOS por $19.99, con funciones de rol y persona. Qué se ejecuta en el dispositivo, qué recopila el modo de nube opcional y cómo se compara con PocketPal AI y Private LLM.',
    audience:
      'Usuarios de Android e iOS que consideran una app de pago de compañero de IA/rol en el dispositivo y necesitan saber con precisión qué permanece local frente a lo que recopila un modo de nube opcional, además de precios exactos y observaciones de fiabilidad de reseñas públicas en las tiendas de apps.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Layla review',
    targetKeywords: [
      'layla ai análisis',
      'layla app llm local',
      'layla network ai',
      'layla ai android iphone',
      'layla ai privacidad nube',
      'layla ai precio',
      'app de compañero de ia local',
      'layla vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama2 7B Layla', 'OpenLLaMA 3B v2 Layla', 'GGUF models', 'Stable Diffusion 1.5'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**Layla es una app de compra única de $19.99 para Android e iOS, creada por [Layla Network Pty Ltd](https://www.layla-network.ai), que ejecuta modelos de lenguaje GGUF en el dispositivo para un compañero de IA basado en personas, con personajes de rol, voces y generación de imágenes.** Según la propia [política de privacidad](https://blog.layla-network.ai/privacy) del desarrollador, la funcionalidad principal de la app está diseñada para funcionar sin conexión, y esta muestra una advertencia antes de que cualquier dato salga del dispositivo; sin embargo, Layla también incluye un modo de nube opcional y activado por separado llamado Layla Cloud, algo distinto del diseño totalmente local, sin ningún componente de nube, de una app como [PocketPal AI](/es/power-local-llm/pocketpal-ai-review). Los lectores que buscan la garantía más sólida posible de que "nunca se conecta a un servidor" deben sopesar cuidadosamente esta distinción antes de comprar.',
    quickAnswerTop: {
      es: {
        question: '¿Es Layla una app de IA completamente sin conexión y solo local?',
        answer:
          'En su mayor parte, pero no del todo. El chat principal y las funciones de personaje de Layla están diseñados para ejecutarse en el dispositivo mediante modelos GGUF, y su política de privacidad indica que la app advierte antes de que cualquier dato salga del teléfono. Sin embargo, Layla también ofrece un modo de nube opcional, activado por separado, llamado Layla Cloud, que sí recopila datos de conversación anonimizados cuando está activo, por lo que Layla no es una app estrictamente solo local como algunos competidores.',
        bullets: [
          'Compra única de $19.99 en la [App Store](https://apps.apple.com/us/app/layla/id6456886656) y [Google Play](https://play.google.com/store/apps/details?id=com.layla), además de tres niveles de compra dentro de la app.',
          'El chat principal se ejecuta en el dispositivo mediante modelos GGUF con llama.cpp; la política de privacidad del desarrollador afirma que advierte antes de que cualquier dato salga del dispositivo.',
          'Layla Cloud es un modo separado y opcional que recopila datos de conversación anonimizados cuando está activado; está desactivado a menos que se active.',
          'Enfocada en el rol: personajes de persona, conversaciones grupales, más de 100 voces de texto a voz y generación local de imágenes con Stable Diffusion 1.5, según las fichas de las tiendas de apps.',
          'La calificación en la App Store es de 3.8/5 sobre 31 valoraciones al momento del análisis; algunas reseñas mencionan funciones sin conexión poco fiables — tratar esto como algo reportado por usuarios, no verificado de forma independiente por PromptQuorum.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Layla?', anchor: 'what-is-layla' },
      { label: '¿Quién creó Layla?', anchor: 'history-and-developer' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: '¿Qué modelos admite Layla?', anchor: 'models-supported' },
      { label: '¿Está Layla disponible en Android e iPhone?', anchor: 'platform-availability' },
      { label: '¿Cuánto cuesta Layla?', anchor: 'pricing' },
      { label: 'Privacidad: chat local vs. Layla Cloud', anchor: 'privacy' },
      { label: 'Funciones de compañero y rol', anchor: 'key-features' },
      { label: '¿Qué hardware se necesita?', anchor: 'hardware-requirements' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Para quién es Layla', anchor: 'who-should-use' },
      { label: 'Para quién no es Layla', anchor: 'who-should-not-use' },
      { label: 'Layla frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
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
            text: 'Layla es una app de Android e iOS de compra única por $19.99, creada por Layla Network Pty Ltd, que ejecuta modelos de lenguaje GGUF en el dispositivo para un compañero de IA basado en personas, y ofrece por separado un modo de nube opcional llamado Layla Cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Es una app de chat estilo compañero que se instala para hablar con un personaje de IA personalizable que se ejecuta principalmente en el propio teléfono en lugar de en un servidor de una empresa; a diferencia de algunas apps totalmente locales, también tiene un modo en línea opcional que se puede activar para chatear en la nube, no activado por defecto.',
          },
        ],
        items: [
          'Precio: [compra única de $19.99](https://apps.apple.com/us/app/layla/id6456886656) en la App Store y Google Play, además de tres niveles de compra dentro de la app cuyo contenido exacto no se detalla del todo en la ficha pública.',
          'Desarrollador: [Layla Network Pty Ltd](https://www.layla-network.ai), una empresa registrada en Australia; los modelos ajustados de la marca Layla en Hugging Face se publican bajo la cuenta de GitHub [l3utterfly](https://github.com/l3utterfly).',
          'El chat principal se ejecuta en el dispositivo mediante modelos GGUF con llama.cpp; la app también admite backends de modelo LiteRT-LM y PTE (ExecuTorch), además de generación local de imágenes con Stable Diffusion 1.5, según las propias publicaciones técnicas del desarrollador.',
          'Privacidad: según la [política de privacidad](https://blog.layla-network.ai/privacy) del desarrollador, la funcionalidad principal está diseñada para funcionar sin conexión y la app advierte antes de que los datos salgan del dispositivo, excepto en el modo separado y opcional Layla Cloud, que está desactivado por defecto.',
          'Enfoque de compañero y rol: personas personalizables, conversaciones grupales, más de 100 voces y animación de personajes Live2D, lo que la distingue de apps de chat más simples en esta categoría.',
          'Calificación en la App Store: 3.8/5 sobre 31 valoraciones al momento del análisis; algunas reseñas mencionan fallos y comportamiento sin conexión poco fiable — una preocupación reportada por usuarios que este análisis no ha verificado de forma independiente.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Nota sobre el nombre: "Layla" es utilizado por varias apps y empresas no relacionadas, incluida una empresa de planificación de viajes con IA adquirida por Expedia Group en 2026, y una app social independiente llamada "Layla – Voice Chat & Party Rooms". Este análisis cubre únicamente la app de compañero de IA en el dispositivo publicada por Layla Network Pty Ltd (ID de App Store 6456886656, paquete de Google Play com.layla), también promocionada en [layla-network.ai](https://www.layla-network.ai).',
          },
          {
            type: 'note',
            text: 'Este análisis se basa en la política de privacidad pública de Layla, las fichas de la App Store y Google Play, las publicaciones técnicas del propio desarrollador y reseñas de usuarios visibles públicamente, revisadas en septiembre de 2026. PromptQuorum no ha realizado pruebas prácticas independientes ni evaluaciones comparativas de Layla para este análisis.',
          },
        ],
      },
      overview: {
        id: 'what-is-layla',
        title: '¿Qué es Layla?',
        content: [
          '**Layla es una app móvil para Android e iOS centrada en un compañero de IA basado en personas que se ejecuta principalmente en el dispositivo, usando [llama.cpp](https://github.com/ggml-org/llama.cpp) para ejecutar modelos de lenguaje de peso abierto en formato GGUF de forma local.** En lugar de presentarse como un cliente de chat de propósito general, Layla apuesta por funciones de personaje y rol: los usuarios pueden crear o descargar personalidades de IA personalizables, mantener conversaciones grupales con varios personajes y generar imágenes localmente mediante una canalización integrada de Stable Diffusion 1.5.',
          'Según su propia [política de privacidad](https://blog.layla-network.ai/privacy), "la funcionalidad principal de nuestra app está diseñada para funcionar sin conexión en su dispositivo", y la política indica que la app muestra una advertencia y un mensaje de confirmación antes de cualquier acción que envíe datos fuera del dispositivo. Por separado, el desarrollador también ofrece un modo opcional basado en la nube —Layla Cloud—, descrito en su propia ficha de tienda como "la versión en la nube de la app premium \'Layla\'", dirigida a usuarios menos técnicos que quieren chat de personajes sin gestionar modelos locales. Ese camino opcional hacia la nube, tratado en detalle en la sección de privacidad más abajo, es el matiz más importante que un lector centrado en la privacidad debe entender antes de comprar.',
        ],
        note: 'GGUF es un formato de archivo para empaquetar modelos de lenguaje de peso abierto cuantizados de manera que se ejecuten eficientemente en hardware de consumo mediante entornos de ejecución como llama.cpp, en lugar de llamar a una API en la nube en cada respuesta.',
      },
      history: {
        id: 'history-and-developer',
        title: '¿Quién creó Layla?',
        content: [
          '**Layla es publicada por [Layla Network Pty Ltd](https://www.layla-network.ai), una empresa registrada en Southport, Queensland, Australia, y la app apareció públicamente por primera vez alrededor de agosto de 2023.** El trabajo técnico de modelos detrás de la app se atribuye en GitHub y Hugging Face a un desarrollador con el usuario [l3utterfly](https://github.com/l3utterfly), quien ha publicado docenas de modelos de peso abierto ajustados de la marca "Layla" —incluidos [Llama2 7B Layla](https://huggingface.co/l3utterfly/llama2-7b-layla) y [OpenLLaMA 3B v2 Layla](https://huggingface.co/l3utterfly/open-llama-3b-v2-layla)—, descritos en sus propias fichas de modelo como modelos base utilizados por la app Layla.',
          'La misma cuenta de GitHub también mantiene proyectos de infraestructura relacionados: [Layla-Server](https://github.com/l3utterfly/Layla-Server), un envoltorio que reenvía solicitudes compatibles con OpenAI a través de WebRTC para que la app móvil pueda conectarse a un PC más potente que ejecute su propio modelo local, y un [Layla SDK](https://github.com/l3utterfly/layla-sdk) para crear miniaplicaciones personalizadas dentro de Layla. Esto apunta a un ecosistema técnico activamente mantenido en torno a la app, más que a una única versión estática, aunque —a diferencia del repositorio totalmente de código abierto de PocketPal AI— el código fuente del cliente de Layla no está publicado, por lo que su comportamiento interno no se puede auditar de forma independiente como el de una app con licencia MIT.',
        ],
        items: [
          'Editor: [Layla Network Pty Ltd](https://www.layla-network.ai), registrada en Southport, Queensland, Australia.',
          'Lanzamiento público: alrededor de agosto de 2023, según directorios de apps de terceros.',
          'Desarrollo de modelos: modelos ajustados de peso abierto de la marca Layla publicados en Hugging Face bajo la cuenta de GitHub [l3utterfly](https://github.com/l3utterfly).',
          'Proyectos relacionados: [Layla-Server](https://github.com/l3utterfly/Layla-Server) (conecta la app con un backend de PC autoalojado mediante WebRTC) y [Layla SDK](https://github.com/l3utterfly/layla-sdk) (crear miniaplicaciones dentro de Layla).',
          'El código fuente de la app del cliente no es público; a diferencia de PocketPal AI o Maid, la propia app de Layla es de código cerrado aunque algunos de sus modelos subyacentes sean de peso abierto.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Configurar Layla para el chat local requiere unos pasos tras la compra, según la propia descripción de la tienda y las publicaciones técnicas de la app.** No se necesita cuenta para usar las funciones locales principales.',
        ],
        numberedItems: [
          {
            title: 'Comprar e instalar la app',
            whyItMatters: 'Descargue Layla desde la [App Store](https://apps.apple.com/us/app/layla/id6456886656) ($19.99) o [Google Play](https://play.google.com/store/apps/details?id=com.layla) ($19.99). Según se ha informado, existe una versión gratuita más limitada distribuida como descarga directa de APK desde el propio sitio del desarrollador — consulte [layla-network.ai](https://www.layla-network.ai) directamente para conocer la disponibilidad actual antes de asumir que aplica a su plataforma.',
          },
          {
            title: 'Dejar que la app descargue su modelo predeterminado',
            whyItMatters: 'En el primer inicio, Layla descarga un modelo de lenguaje (en versiones anteriores, alrededor de 4 GB) antes de poder chatear; esta es una descarga única para ese modelo.',
          },
          {
            title: 'Elegir o personalizar una persona',
            whyItMatters: 'Elija un personaje integrado o cree el suyo propio con nombre, personalidad y voz; la interfaz de Layla se organiza en torno a personajes en lugar de un único hilo de chat genérico.',
          },
          {
            title: 'Opcionalmente, importar un modelo GGUF personalizado',
            whyItMatters: 'Los usuarios avanzados pueden cargar su propio archivo de modelo en formato GGUF en lugar de, o junto con, los modelos predeterminados de la app.',
          },
          {
            title: 'Chatear sin conexión, o activar Layla Cloud',
            whyItMatters: 'El chat local y la generación de imágenes no requieren conexión de red una vez descargado un modelo. Layla Cloud es un modo separado y opcional que hay que instalar o activar explícitamente; no forma parte de la experiencia local predeterminada descrita anteriormente.',
          },
        ],
        note: 'Algunas reseñas de la App Store y Google Play indican que la carga de modelos sin conexión y la importación de modelos personalizados han sido poco fiables en versiones anteriores, especialmente en iOS. Este análisis no ha verificado de forma independiente la estabilidad actual; pruebe la configuración inicial dentro del plazo de devolución de su plataforma antes de confiar en la app.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: '¿Qué modelos admite Layla?',
        itemHeadings: true,
        columns: ['Tipo de modelo', 'Método de acceso', 'Caso de uso típico'],
        rows: [
          {
            'Tipo de modelo': 'Modelo predeterminado incluido',
            'Método de acceso': 'Se descarga automáticamente en el primer inicio',
            'Caso de uso típico': 'Chat de compañero general listo para usar, sin configuración',
          },
          {
            'Tipo de modelo': 'Modelos ajustados de la marca Layla',
            'Método de acceso': 'Publicados en [Hugging Face](https://huggingface.co/l3utterfly) por el desarrollador l3utterfly (p. ej., Llama2 7B Layla, OpenLLaMA 3B v2 Layla)',
            'Caso de uso típico': 'Chat orientado a rol y persona, ajustado al formato de personaje de la app',
          },
          {
            'Tipo de modelo': 'Importación de GGUF personalizado',
            'Método de acceso': 'Importación manual de cualquier archivo en formato GGUF desde el almacenamiento del dispositivo o Hugging Face',
            'Caso de uso típico': 'Usuarios que ya tienen un modelo de peso abierto preferido en formato GGUF',
          },
          {
            'Tipo de modelo': 'Modelos LiteRT-LM y PTE (ExecuTorch)',
            'Método de acceso': 'Backends de ejecución en el dispositivo alternativos, según las publicaciones técnicas del desarrollador',
            'Caso de uso típico': 'Inferencia optimizada específica de dispositivo o backend más allá del simple llama.cpp/GGUF',
          },
          {
            'Tipo de modelo': 'Stable Diffusion 1.5',
            'Método de acceso': 'Se ejecuta localmente en el dispositivo para generación de imágenes, según las publicaciones técnicas del desarrollador',
            'Caso de uso típico': 'Generación local de imágenes de personajes o escenas sin una API de imágenes en la nube',
          },
        ],
        note: 'La identidad exacta de los modelos incluidos y los tamaños de descarga predeterminados han cambiado entre versiones de la app; confirme el modelo predeterminado actual y su tamaño dentro de la app antes de descargarlo con un plan de datos limitado.',
      },
      platform: {
        id: 'platform-availability',
        title: '¿Está Layla disponible en Android e iPhone?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidad', 'Notas'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidad': 'Disponible en la [App Store](https://apps.apple.com/us/app/layla/id6456886656), requiere iOS 16.4 / iPadOS 16.4 o posterior',
            'Notas': 'La ficha de la App Store también muestra compatibilidad con Mac (macOS 13.0, Apple M1 o posterior) y Apple Vision (visionOS 1.0 o posterior) para la misma app.',
          },
          {
            'Plataforma': 'Android',
            'Disponibilidad': 'Disponible en [Google Play](https://play.google.com/store/apps/details?id=com.layla)',
            'Notas': 'Según se ha informado, también se ha ofrecido un canal de distribución directa de APK desde el propio sitio del desarrollador, separado de Google Play; verifique la disponibilidad actual directamente antes de confiar en él.',
          },
          {
            'Plataforma': 'Windows / Linux',
            'Disponibilidad': 'No se confirmó ninguna versión nativa de escritorio para Windows o Linux al momento del análisis',
            'Notas': 'El proyecto [Layla-Server](https://github.com/l3utterfly/Layla-Server) permite que la app móvil se conecte a un PC que ejecute su propio backend local mediante WebRTC, lo cual es un puente y no un cliente de escritorio nativo.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: '¿Cuánto cuesta Layla?',
        content: [
          '**Layla cuesta $19.99 como compra única tanto en la [Apple App Store](https://apps.apple.com/us/app/layla/id6456886656) como en [Google Play](https://play.google.com/store/apps/details?id=com.layla).** Además de esa compra base, la ficha de la App Store muestra tres niveles de compra dentro de la app con nombre propio: Monarch ($4.99), Birdwing ($19.99) y Blue Morpho ($29.99), pero la ficha pública de la tienda no detalla por completo qué desbloquea cada nivel (por ejemplo, si cubren créditos de uso en la nube, personajes premium o voces adicionales). Confirme exactamente qué incluye un nivel determinado dentro de la app antes de comprarlo.',
          'Según el propio contenido del blog del desarrollador, una versión gratuita más limitada de la app se ha distribuido, aparentemente, mediante descarga directa de APK desde su propio sitio; esto es distinto de las fichas de pago de la App Store y Google Play, y su disponibilidad y conjunto de funciones actuales deben verificarse directamente en [layla-network.ai](https://www.layla-network.ai) en lugar de asumirse a partir de este análisis.',
          'Layla Cloud, el modo de chat en la nube opcional y separado, aparece como descarga gratuita como app independiente en las tiendas; si el uso continuo de Layla Cloud requiere una suscripción o créditos más allá del nivel gratuito no se detalla en la ficha pública revisada para este artículo.',
        ],
        items: [
          '**App base:** compra única de $19.99 en la App Store y Google Play; no se requiere suscripción para la compra base en sí.',
          '**Niveles de compra dentro de la app:** Monarch ($4.99), Birdwing ($19.99), Blue Morpho ($29.99); mencionados en la ficha de la App Store; su contenido exacto no se detalla públicamente por completo.',
          '**Versión gratuita/limitada:** según se ha informado, disponible mediante descarga directa de APK desde el propio sitio del desarrollador, separada de las fichas de pago de las tiendas; verifique el estado actual directamente.',
          '**Layla Cloud:** una app complementaria separada y gratuita para chat de personajes basado en la nube; su propia estructura de costos más allá del nivel gratuito no se detalla en la ficha pública.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad: chat local vs. Layla Cloud',
        content: [
          '**La propia [política de privacidad](https://blog.layla-network.ai/privacy) de Layla indica que "la funcionalidad principal de nuestra app está diseñada para funcionar sin conexión en su dispositivo", y que la app mostrará una advertencia y un mensaje de confirmación antes de realizar cualquier acción que envíe sus datos fuera del dispositivo.** La política nombra desencadenantes específicos para el envío de datos: subir un personaje al Personality Hub, usar la función "Reportar un error" dentro de la app y activar funciones de nube opcionales.',
          'Ese último elemento —funciones de nube opcionales— es Layla Cloud, descrito por el desarrollador como un modo distinto y separado: según la política, "Layla Cloud solo se activa si instala la miniaplicación \'Layla Cloud\' dentro de Layla", y si no está instalada o activada, "no hay funciones relacionadas con Layla Cloud habilitadas". Cuando Layla Cloud está activo, la propia documentación del desarrollador indica que recopila el historial de conversación —sus mensajes, las respuestas de los personajes y datos de funciones auxiliares como Memoria a Largo Plazo, PDF Digest y Dream—, y que estos datos están anonimizados y no vinculados a su cuenta, aunque pueden usarse para depuración o para mejorar el servicio. La política también indica que Layla Cloud no recopila retroactivamente conversaciones anteriores a su activación.',
          'En conjunto, este es un diseño de privacidad materialmente distinto al de una app cuya funcionalidad principal no tiene ningún componente de nube en absoluto: el modo local predeterminado de Layla está diseñado para permanecer en el dispositivo con una barrera explícita de consentimiento antes de cualquier transmisión, pero el propio producto ofrece un camino opcional y activado por separado hacia la nube que sí recopila datos de conversación anonimizados cuando el usuario lo activa. Los lectores que buscan la garantía más sólida posible —un producto sin ningún modo de nube que activar— deben comparar esto con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), cuyo código base es totalmente de código abierto y con licencia MIT, sin función de chat en la nube integrada.',
        ],
        items: [
          '**Modo local:** según la política del desarrollador, diseñado para funcionar sin conexión; se afirma que la app advierte y pide confirmación antes de que los datos salgan del dispositivo.',
          '**Layla Cloud:** un modo separado y opcional (instalado como miniaplicación o app distinta) que recopila historial de conversación anonimizado, incluidos datos de funciones auxiliares, cuando está activado.',
          '**No retroactivo:** según la política, activar Layla Cloud no incorpora historial de conversación anterior a su activación.',
          '**Código cerrado:** a diferencia de PocketPal AI o Maid, el código de la app cliente de Layla no está publicado, por lo que la afirmación de "no transmisión por defecto" se basa en la propia política de privacidad del desarrollador y no en una auditoría de código independiente.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis no ha auditado de forma independiente el tráfico de red ni el código fuente de Layla. La descripción anterior refleja la política de privacidad publicada por el desarrollador y las fichas de las tiendas, no una evaluación de seguridad independiente por parte de PromptQuorum.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones de compañero y rol',
        content: [
          '**El conjunto de funciones de Layla está diseñado, según sus propias descripciones en las tiendas de apps, más en torno a casos de uso de persona y rol que a una interfaz de chat de preguntas y respuestas simple.** Las funciones mencionadas incluyen:',
        ],
        items: [
          '**Personalidades personalizables.** Los usuarios pueden crear o descargar personajes de IA con personas distintas en lugar de hablar con una única identidad de asistente fija.',
          '**Conversaciones grupales.** Según la ficha de la app, varios personajes pueden participar en el mismo hilo de conversación.',
          '**Más de 100 voces.** La app menciona una amplia biblioteca de voces para respuestas de personajes por texto a voz.',
          '**Animación de personajes Live2D.** Representaciones visuales y animadas de los personajes en lugar de una interfaz de solo texto.',
          '**Generación local de imágenes.** Una canalización integrada de Stable Diffusion 1.5 se ejecuta en el dispositivo para imágenes de personajes o escenas, según las publicaciones técnicas del desarrollador.',
          '**Agentes programables (Python).** Los usuarios avanzados pueden programar comportamientos tipo agente usando Python, según la propia descripción de la app.',
          '**Sin filtro de contenido integrado en la inferencia local.** Dado que la generación local se ejecuta enteramente en el propio hardware del dispositivo, los materiales del propio desarrollador la describen como carente de una capa de moderación de contenido del lado del servidor para ese modo, una decisión de diseño deliberada que traslada la responsabilidad del uso apropiado al usuario individual en lugar de a un sistema de moderación alojado.',
        ],
        note: 'La disponibilidad de funciones, el tamaño de la biblioteca de voces y ciertas integraciones de modelos han cambiado entre versiones de la app; confirme la disponibilidad actual de las funciones dentro de la app en lugar de asumir que todo lo descrito en material de marketing anterior sigue vigente sin cambios.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '¿Qué hardware se necesita para ejecutar Layla?',
        content: [
          '**La ficha de la App Store recomienda un mínimo de 8 GB de RAM, y el propio marketing de Layla ha descrito históricamente la app como orientada a teléfonos insignia recientes en lugar de hardware económico o antiguo.** Este es un umbral más estricto que el de algunas apps de chat local competidoras que admiten cómodamente modelos más pequeños de 2–4B de parámetros con 4 GB de RAM; las funciones de compañero de Layla (modelos predeterminados más grandes, generación local de imágenes y animación de personajes) elevan el umbral de hardware práctico.',
          'Como con cualquier app basada en GGUF, el modelo concreto cargado —no la app en sí— determina realmente las necesidades de memoria: un modelo cuantizado más pequeño necesita menos RAM que uno de 7B+ parámetros, y ejecutar generación local de imágenes con Stable Diffusion junto con el chat añade sobrecarga adicional de memoria y procesamiento más allá de la inferencia de solo texto.',
        ],
        items: [
          'Mínimo recomendado: 8 GB de RAM, según la ficha de la App Store; notablemente más alto que el umbral de 4 GB común entre apps de chat local más simples en esta categoría.',
          'Se recomiendan teléfonos de gama insignia recientes (aproximadamente las últimas generaciones) frente a dispositivos más antiguos o económicos, según los propios materiales de marketing del desarrollador.',
          'Almacenamiento: la descarga del modelo predeterminado en el primer inicio se ha reportado en torno a 4 GB en versiones anteriores; los modelos GGUF personalizados y los checkpoints de Stable Diffusion añaden requisitos de almacenamiento adicionales.',
          'La generación local de imágenes (Stable Diffusion 1.5) añade sobrecarga de procesamiento y memoria más allá del chat de solo texto; espere un rendimiento más lento en dispositivos con menos RAM al usar esta función.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Profundidad de compañero y rol',
            'Qué significa en el uso real': 'Personajes de persona, chat grupal, más de 100 voces y animación Live2D van más allá de una interfaz de chat simple.',
            'Limitación / advertencia': 'Los lectores que solo quieren un chat tipo asistente sencillo pueden encontrar PocketPal AI o Private LLM más fáciles de usar.',
          },
          {
            'Ventaja': 'Generación local de texto e imágenes',
            'Qué significa en el uso real': 'Tanto el chat como la generación de imágenes con Stable Diffusion 1.5 pueden ejecutarse completamente en el dispositivo.',
            'Limitación / advertencia': 'Requiere notablemente más RAM y almacenamiento que las apps de chat local de solo texto; la App Store indica un mínimo de 8 GB.',
          },
          {
            'Ventaja': 'Barrera explícita de consentimiento antes del envío de datos',
            'Qué significa en el uso real': 'Según la política de privacidad, la app advierte antes de enviar datos fuera del dispositivo para funciones como subidas de personajes o reportes de errores.',
            'Limitación / advertencia': 'La app también incluye un modo opcional Layla Cloud que sí recopila datos de conversación anonimizados una vez que el usuario lo activa; no es, por diseño, un producto sin ningún componente de nube.',
          },
          {
            'Ventaja': 'Desarrollo activo de modelos e infraestructura',
            'Qué significa en el uso real': 'Los modelos ajustados de la marca Layla en Hugging Face y proyectos relacionados como Layla-Server muestran trabajo técnico continuo.',
            'Limitación / advertencia': 'El código fuente de la propia app cliente es cerrado, por lo que su comportamiento no puede auditarse de forma independiente como el de PocketPal AI o Maid.',
          },
          {
            'Ventaja': 'Compra única de $19.99',
            'Qué significa en el uso real': 'No se requiere suscripción para la app base en ninguna de las dos tiendas.',
            'Limitación / advertencia': 'Existen tres niveles adicionales de compra dentro de la app cuyo contenido exacto no se detalla del todo en la ficha pública; confirme dentro de la app qué está comprando exactamente.',
          },
          {
            'Ventaja': 'Multiplataforma: Android e iOS',
            'Qué significa en el uso real': 'Disponible en ambas plataformas móviles principales, a diferencia de apps exclusivas de Apple como Private LLM.',
            'Limitación / advertencia': 'Reseñas públicas en la App Store reportan fallos y funciones sin conexión poco fiables en algunos dispositivos; información reportada por usuarios, no verificada de forma independiente por PromptQuorum.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es Layla',
        items: [
          '**Usuarios que quieren una IA local estilo compañero/rol, no un simple asistente.** Si los personajes de persona, las conversaciones grupales y la salida de voz importan más que una interfaz de chat mínima, el conjunto de funciones de Layla está diseñado específicamente para ese caso de uso.',
          '**Usuarios que quieren generación local de imágenes junto con el chat.** La canalización integrada de Stable Diffusion 1.5 permite que una sola app gestione tanto texto como generación de imágenes en el dispositivo.',
          '**Usuarios cómodos con pagar una app una sola vez en lugar de usar una herramienta gratuita.** $19.99 compra la app base de forma definitiva en ambas plataformas móviles principales.',
          '**Usuarios que leen las políticas de privacidad con atención y aceptan un modo de nube opcional.** El diseño local por defecto de Layla, con una advertencia explícita antes de que salgan datos, puede ser un término medio aceptable para lectores que no necesitan un producto sin ninguna capacidad de nube en absoluto.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es Layla',
        items: [
          '**Lectores que necesitan un producto garantizado sin componente de nube.** Dado que Layla incluye un modo de nube opcional (Layla Cloud) que recopila datos anonimizados una vez activado, los lectores que específicamente quieren una app sin función de nube que activar jamás deben elegir [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), cuyo código base totalmente abierto no tiene ningún camino de chat en la nube integrado.',
          '**Lectores que quieren una app gratuita o totalmente de código abierto.** Layla es una app de pago y código cerrado de $19.99; PocketPal AI (gratis, licencia MIT) y Maid (gratis, licencia MIT) cubren esa necesidad en su lugar.',
          '**Lectores que quieren una interfaz de chat sencilla y minimalista tipo asistente.** El diseño de Layla centrado en personajes y personas añade complejidad que los usuarios que solo quieren un chat de preguntas y respuestas sencillo pueden no desear; Private LLM o PocketPal AI tienen un formato más de asistente.',
          '**Lectores con dispositivos de poca RAM o antiguos.** La App Store indica 8 GB de RAM como recomendación mínima, más alta que varias apps competidoras que ejecutan modelos más pequeños cómodamente con 4 GB.',
          '**Lectores que necesitan funciones empresariales o de equipo.** Layla es una app de consumo para un solo usuario, sin consola de administración, licencias compartidas ni facturación de equipo; las organizaciones deberían considerar infraestructura de LLM local autoalojada del lado del servidor en su lugar.',
          '**Lectores que quieren auditar de forma independiente el código fuente de la app.** La app cliente de Layla es de código cerrado; los lectores que necesiten ese nivel de garantía deberían usar una alternativa con licencia MIT o AGPL como PocketPal AI, Maid o ChatterUI.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Layla frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio', 'Local vs. nube', 'Diferencia clave'],
        rows: [
          {
            'App': 'Layla',
            'Plataformas': 'Android, iPhone/iPad (también Mac/Vision Pro según la ficha de la App Store)',
            'Precio': '$19.99 única vez, más niveles de compra dentro de la app con nombre propio',
            'Local vs. nube': 'Local por diseño; modo opcional Layla Cloud activable',
            'Diferencia clave': 'Enfoque de compañero/rol: personas, chat grupal, voces, generación local de imágenes',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, Android',
            'Precio': 'Gratis, código abierto (MIT)',
            'Local vs. nube': 'Totalmente local; sin función de chat en la nube integrada',
            'Diferencia clave': 'Gratis, totalmente de código abierto, enfocada en el chat simple más que en el rol',
          },
          {
            'App': 'Private LLM',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Precio': '$4.99 única vez',
            'Local vs. nube': 'Totalmente local; sin respaldo en la nube, según la etiqueta de privacidad de la App Store',
            'Diferencia clave': 'Más de 140 modelos curados con cuantización OmniQuant/GPTQ; estilo asistente, no centrada en el rol',
          },
          {
            'App': '[Enclave AI](/es/power-local-llm/enclave-ai-review)',
            'Plataformas': 'Ver el análisis completo para el soporte de plataformas actual',
            'Precio': 'Ver ficha actual',
            'Local vs. nube': 'Ver análisis completo',
            'Diferencia clave': 'Asistente en el dispositivo centrado en Apple con integración de Siri/Shortcuts',
          },
          {
            'App': '[Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay)',
            'Plataformas': 'Escritorio Windows/Mac (Backyard Cloud añade sincronización móvil/web)',
            'Precio': 'App de escritorio gratuita; Backyard Cloud opcional de $7–$35/mes',
            'Local vs. nube': 'Local por defecto; nivel de nube de pago explícito para inferencia alojada',
            'Diferencia clave': 'App de rol centrada en escritorio con un Character Hub mucho más grande; el nivel de nube es un producto separado con precio claro, no un modo gratuito opcional',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Plataformas': 'iOS/Mac (código abierto, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Precio': 'Gratis, código abierto',
            'Local vs. nube': 'Totalmente local',
            'Diferencia clave': 'Fue retirada de la App Store y TestFlight según su propio README de GitHub; verifique la disponibilidad actual antes de confiar en ella',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plataformas': 'App multiplataforma en Flutter (Android como principal)',
            'Precio': 'Gratis, código abierto (MIT)',
            'Local vs. nube': 'Local mediante GGUF/llama.cpp; también puede conectarse a APIs remotas si el usuario las configura',
            'Diferencia clave': 'Totalmente de código abierto y no centrada en el rol; el uso de API remota es opcional y configurado por el usuario',
          },
          {
            'App': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'Plataformas': 'Android (compilación desde el código fuente)',
            'Precio': 'Gratis, código abierto (AGPL-3.0)',
            'Local vs. nube': 'Local mediante GGUF/llama.cpp, o conexión a APIs remotas si se configura',
            'Diferencia clave': 'Soporte de Character Card v2 para rol, totalmente de código abierto, configuración más técnica',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plataformas': 'Android',
            'Precio': 'Gratis, código abierto',
            'Local vs. nube': 'Cliente multiproveedor; inferencia local mediante un proveedor LiteRT',
            'Diferencia clave': 'Se posiciona como un cliente multiproveedor en lugar de una app de compañero local-primero',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plataformas': 'Android (iOS planeado)',
            'Precio': 'Gratis, código abierto',
            'Local vs. nube': 'En el dispositivo mediante Cactus Compute, o combinado con un servidor autoalojado',
            'Diferencia clave': 'Diseñada para combinarse con un espacio de trabajo de AnythingLLM autoalojado, no una app de compañero independiente',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de las apps de terceros cambian con frecuencia; verifique las particularidades actuales en la ficha de cada app antes de decidir. La disponibilidad de LLM Farm en la App Store en particular debería reverificarse, ya que su propio README de GitHub la describía como retirada de la App Store.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Layla?',
            a: 'No, la app principal Layla cuesta $19.99 como compra única tanto en la App Store como en Google Play. La ficha de la App Store también muestra tres niveles de compra dentro de la app con nombre propio (Monarch $4.99, Birdwing $19.99, Blue Morpho $29.99). Según se ha informado, existe una versión gratuita más limitada distribuida mediante descarga directa de APK desde el propio sitio del desarrollador; consulte [layla-network.ai](https://www.layla-network.ai) para conocer la disponibilidad actual. Layla Cloud, una app complementaria separada para chat basado en la nube, es gratuita de descargar como app independiente.',
          },
          {
            q: '¿Funciona Layla completamente sin conexión, sin ningún componente de nube en absoluto?',
            a: 'No del todo. Según la propia política de privacidad de Layla, la app principal está diseñada para funcionar sin conexión y advierte antes de que los datos salgan del dispositivo. Sin embargo, Layla también incluye un modo separado y activado aparte llamado Layla Cloud que sí recopila datos de conversación anonimizados cuando el usuario lo activa. Layla no es un producto estrictamente solo local como lo sería una app sin ninguna función de nube en absoluto; los lectores que quieran esa garantía más sólida deben compararla con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
          },
          {
            q: '¿Quién desarrolla Layla?',
            a: 'Layla es publicada por [Layla Network Pty Ltd](https://www.layla-network.ai), una empresa registrada en Southport, Queensland, Australia. Los modelos de peso abierto ajustados de la marca Layla utilizados por la app se publican en Hugging Face bajo la cuenta de GitHub [l3utterfly](https://github.com/l3utterfly).',
          },
          {
            q: '¿Qué modelos puede ejecutar Layla?',
            a: 'Layla descarga un modelo predeterminado en el primer inicio y también puede cargar modelos ajustados de la marca Layla publicados en Hugging Face, o cualquier archivo de modelo personalizado en formato GGUF, mediante llama.cpp. Las publicaciones técnicas del desarrollador también describen soporte para backends de modelo LiteRT-LM y PTE (ExecuTorch), además de Stable Diffusion 1.5 local para generación de imágenes.',
          },
          {
            q: '¿Funciona Layla tanto en Android como en iPhone?',
            a: 'Sí. Layla está disponible en [Google Play](https://play.google.com/store/apps/details?id=com.layla) para Android y en la [App Store](https://apps.apple.com/us/app/layla/id6456886656) para iPhone y iPad; la ficha de la App Store también muestra compatibilidad con Mac y Apple Vision para la misma app. No se confirmó ninguna versión nativa de escritorio para Windows o Linux al momento del análisis.',
          },
          {
            q: '¿Cuánta RAM necesita Layla?',
            a: 'La ficha de la App Store recomienda un mínimo de 8 GB de RAM, más alto que el umbral de aproximadamente 4 GB común entre apps de chat local de solo texto más simples, reflejando los modelos predeterminados más grandes de Layla, la generación local de imágenes y las funciones de animación de personajes.',
          },
          {
            q: '¿Qué es Layla Cloud, y es lo mismo que la app principal Layla?',
            a: 'No. Layla Cloud es un modo separado y opcional, o miniaplicación, que ofrece chat de personajes basado en la nube para usuarios que no quieren gestionar modelos locales. Según la política de privacidad, solo está activo si un usuario lo instala o lo activa, y cuando está activo recopila historial de conversación anonimizado para depuración o mejora del servicio. No recopila datos retroactivamente de antes de su activación.',
          },
          {
            q: '¿Es fiable Layla? ¿Reportan problemas los usuarios?',
            a: 'Layla tiene una calificación de 3.8/5 sobre 31 valoraciones en la App Store al momento del análisis. Algunas reseñas públicas de la App Store mencionan fallos y funciones sin conexión poco fiables, especialmente en la importación de modelos personalizados en iOS. Este análisis no ha verificado de forma independiente la estabilidad actual de la app; trate esto como observaciones reportadas por usuarios y pruebe la app dentro del plazo de devolución de su plataforma antes de confiar en ella.',
          },
          {
            q: '¿Es la app de compañero de IA "Layla" la misma empresa que el planificador de viajes con IA "Layla" adquirido por Expedia?',
            a: 'No. Este análisis cubre la app de compañero de IA en el dispositivo publicada por Layla Network Pty Ltd (ID de App Store 6456886656, paquete de Google Play com.layla). No tiene relación con la empresa independiente de planificación de viajes con IA "Layla", con sede en Berlín, cuya adquisición anunció Expedia Group en 2026, ni con otras apps del mismo nombre como "Layla – Voice Chat & Party Rooms".',
          },
          {
            q: '¿Cómo se compara Layla con PocketPal AI o Private LLM?',
            a: 'Layla es una app de pago, de código cerrado, de $19.99, centrada en compañero/rol, con un modo de nube opcional activable, disponible tanto en Android como en iOS. PocketPal AI es gratis, de código abierto y no tiene ninguna función de chat en la nube integrada. Private LLM es una app de pago ($4.99), de código cerrado, exclusiva de Apple, tipo asistente, con una biblioteca de modelos curados más grande y sin respaldo en la nube según su etiqueta de privacidad de la App Store. Elija Layla para profundidad de compañero/rol en ambas plataformas móviles; elija PocketPal AI para una opción gratuita, totalmente local y de código abierto; elija Private LLM para una experiencia de asistente pulida y exclusiva de Apple.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Layla es una entrada genuinamente distintiva en la categoría de IA local móvil: apuesta por funciones de compañero y rol —personas, chat grupal, más de 100 voces y generación local de imágenes— que apps de chat más simples como PocketPal AI o Private LLM no intentan, y su precio único de $19.99 cubre tanto Android como iOS con una sola compra. La historia de privacidad es más matizada que una simple afirmación de "totalmente sin conexión": la propia política del desarrollador describe un núcleo local por defecto con una advertencia explícita antes de cualquier transmisión de datos, pero la app también incluye un modo opcional Layla Cloud que sí recopila datos de conversación anonimizados una vez que el usuario lo activa, un diseño notablemente distinto al de una app sin ningún camino de nube integrado en absoluto. Junto con un cliente de código cerrado, tres niveles de compra dentro de la app cuyo contenido exacto no es del todo público, y reportes de usuarios sobre problemas de fiabilidad en funciones sin conexión y de modelos personalizados en iOS, Layla se adapta a lectores que quieren específicamente su conjunto de funciones de persona/rol y aceptan esa compensación de privacidad. Los lectores que quieran la garantía solo local más sólida disponible, transparencia total del código fuente o el costo más bajo deberían empezar con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) en su lugar.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Layla en la App Store](https://apps.apple.com/us/app/layla/id6456886656) — precio, niveles de compra dentro de la app, requisitos de plataforma, calificaciones e historial de versiones.',
          '[Layla en Google Play](https://play.google.com/store/apps/details?id=com.layla) — disponibilidad y precios para Android.',
          '[Sitio oficial de Layla](https://www.layla-network.ai) — resumen del producto y descripciones de funciones publicadas por el desarrollador.',
          '[Política de privacidad de Layla](https://blog.layla-network.ai/privacy) — manejo de datos local vs. nube, alcance de Layla Cloud y divulgaciones de recopilación de datos.',
          '[Layla (Cloud) en la App Store](https://apps.apple.com/gb/app/layla-cloud/id6764344419) — la ficha de la app separada del modo de nube opcional.',
          '[l3utterfly en GitHub](https://github.com/l3utterfly) y [l3utterfly en Hugging Face](https://huggingface.co/l3utterfly) — publicaciones de modelos de la marca Layla y proyectos de infraestructura relacionados (Layla-Server, Layla SDK).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una alternativa gratuita, totalmente de código abierto y totalmente local, sin función de chat en la nube integrada.',
          '[Análisis de Private LLM](/es/power-local-llm/private-llm-review) — una app de $4.99 exclusiva de Apple, tipo asistente, con una biblioteca de modelos curados más grande.',
          '[Análisis de Enclave AI](/es/power-local-llm/enclave-ai-review) — otra app de IA en el dispositivo centrada en Apple, para comparar.',
          '[Análisis de Backyard AI: chat de personajes de IA local y rol](/es/power-local-llm/backyard-ai-review-local-roleplay) — una alternativa de rol centrada en escritorio con una biblioteca de personajes mucho más grande y un nivel de nube con precio claro.',
          '[Mejores apps de LLM local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el resumen más amplio de apps para Android, para comparar.',
          '[Mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el resumen más amplio de apps para iOS, para comparar.',
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
    heroImage: '/images/layla-review-hero-fr.webp',
    title: 'Layla : Avis (2026) — Application de Compagnon IA Local pour Android et iOS',
    seoTitle: 'Layla Avis 2026 : App IA Locale, Prix et Confidentialité',
    intro:
      'Layla, développée par [Layla Network Pty Ltd](https://www.layla-network.ai) — une société enregistrée en Australie également liée sur GitHub au développeur [l3utterfly](https://github.com/l3utterfly), qui publie la famille de modèles à poids ouverts affinés "Layla" —, est une application payante pour Android et iOS conçue autour d\'un compagnon IA personnel fonctionnant localement sur le téléphone, avec des fonctionnalités de persona, de jeu de rôle et de personnage qui vont au-delà du simple chat. Elle coûte [19,99 $ en achat unique](https://apps.apple.com/us/app/layla/id6456886656) sur l\'App Store comme sur Google Play, et la fiche de l\'App Store affiche en plus trois paliers d\'achat intégré nommés. Le chat principal de Layla est conçu pour fonctionner entièrement sur l\'appareil via des modèles GGUF avec llama.cpp, mais l\'application propose également un mode cloud optionnel et activé séparément, appelé Layla Cloud, qui n\'est pas actif par défaut — cet avis détaille précisément ce qui fonctionne réellement en local, ce qui n\'y fonctionne pas, ce que cela coûte réellement et à qui l\'application convient, sur la base de la politique de confidentialité du développeur, des fiches des boutiques d\'applications et de la documentation publique, et non de tests pratiques indépendants.',
    metaDescription:
      'Avis Layla 2026 : application de compagnon IA locale à 19,99 $ pour Android et iOS. Ce qui fonctionne réellement en local face au mode optionnel Layla Cloud, prix exacts, modèles et public cible.',
    twitterDescription:
      'Avis Layla 2026 : une application de compagnon IA locale à 19,99 $ pour Android et iOS, avec fonctions de jeu de rôle et de persona. Ce qui fonctionne sur l\'appareil, ce que collecte le mode cloud optionnel, et la comparaison avec PocketPal AI et Private LLM.',
    audience:
      'Utilisateurs Android et iOS envisageant une application payante de compagnon/jeu de rôle IA locale, qui ont besoin de savoir précisément ce qui reste local par rapport à ce que collecte un mode cloud optionnel, ainsi que les prix exacts et les réserves de fiabilité issues d\'avis publics sur les boutiques d\'applications.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Layla review',
    targetKeywords: [
      'layla ai avis',
      'layla app llm local',
      'layla network ai',
      'layla ai android iphone',
      'layla ai confidentialité cloud',
      'layla ai prix',
      'application compagnon ia locale',
      'layla vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama2 7B Layla', 'OpenLLaMA 3B v2 Layla', 'GGUF models', 'Stable Diffusion 1.5'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**Layla est une application à achat unique de 19,99 $ pour Android et iOS, développée par [Layla Network Pty Ltd](https://www.layla-network.ai), qui exécute des modèles de langage GGUF sur l\'appareil pour un compagnon IA basé sur des personas, avec personnages de jeu de rôle, voix et génération d\'images.** Selon la propre [politique de confidentialité](https://blog.layla-network.ai/privacy) du développeur, la fonctionnalité principale de l\'application est conçue pour fonctionner hors ligne, et celle-ci affiche un avertissement avant que des données ne quittent l\'appareil — mais Layla propose également un mode cloud optionnel et activé séparément, appelé Layla Cloud, ce qui diffère de la conception entièrement locale, sans aucune composante cloud, d\'une application comme [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review). Les lecteurs souhaitant la garantie la plus forte possible qu\'aucune donnée ne touche jamais un serveur devraient bien évaluer cette distinction avant d\'acheter.',
    quickAnswerTop: {
      fr: {
        question: 'Layla est-elle une application IA entièrement hors ligne, uniquement locale ?',
        answer:
          'En grande partie, mais pas totalement. Le chat principal et les fonctions de personnage de Layla sont conçus pour fonctionner sur l\'appareil via des modèles GGUF, et sa politique de confidentialité indique que l\'application avertit avant que des données ne quittent le téléphone. Layla propose toutefois aussi un mode cloud optionnel et activé séparément, appelé Layla Cloud, qui collecte bien des données de conversation anonymisées lorsqu\'il est actif — Layla n\'est donc pas une application strictement locale comme le sont certains concurrents.',
        bullets: [
          'Achat unique de 19,99 $ sur l\'[App Store](https://apps.apple.com/us/app/layla/id6456886656) et [Google Play](https://play.google.com/store/apps/details?id=com.layla), plus trois paliers d\'achat intégré nommés.',
          'Le chat principal fonctionne sur l\'appareil via des modèles GGUF avec llama.cpp ; la politique de confidentialité du développeur indique qu\'un avertissement s\'affiche avant toute sortie de données de l\'appareil.',
          'Layla Cloud est un mode séparé et facultatif qui collecte des données de conversation anonymisées lorsqu\'il est activé — il est désactivé sauf activation explicite.',
          'Axée sur le jeu de rôle : personnages de persona, conversations de groupe, plus de 100 voix TTS et génération locale d\'images via Stable Diffusion 1.5, selon les fiches des boutiques d\'applications.',
          'La note sur l\'App Store est de 3,8/5 sur 31 avis au moment de l\'évaluation ; certains avis signalent des fonctions hors ligne peu fiables — à considérer comme des signalements d\'utilisateurs, non vérifiés de façon indépendante par PromptQuorum.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Layla ?', anchor: 'what-is-layla' },
      { label: 'Qui a développé Layla ?', anchor: 'history-and-developer' },
      { label: 'Comment démarrer', anchor: 'getting-started' },
      { label: 'Quels modèles Layla prend-elle en charge ?', anchor: 'models-supported' },
      { label: 'Layla est-elle disponible sur Android et iPhone ?', anchor: 'platform-availability' },
      { label: 'Combien coûte Layla ?', anchor: 'pricing' },
      { label: 'Confidentialité : chat local vs. Layla Cloud', anchor: 'privacy' },
      { label: 'Fonctions de compagnon et de jeu de rôle', anchor: 'key-features' },
      { label: 'Quel matériel est nécessaire ?', anchor: 'hardware-requirements' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'À qui Layla convient', anchor: 'who-should-use' },
      { label: 'À qui Layla ne convient pas', anchor: 'who-should-not-use' },
      { label: 'Layla face aux alternatives', anchor: 'vs-alternatives' },
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
            text: 'Layla est une application Android et iOS à achat unique de 19,99 $, développée par Layla Network Pty Ltd, qui exécute des modèles de langage GGUF sur l\'appareil pour un compagnon IA basé sur des personas, avec en plus un mode cloud optionnel appelé Layla Cloud.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est une application de chat façon compagnon que l\'on installe pour discuter avec un personnage IA personnalisable qui fonctionne surtout sur son propre téléphone plutôt que sur un serveur d\'entreprise — contrairement à certaines applications entièrement locales, elle dispose aussi d\'un mode en ligne optionnel activable pour un chat basé sur le cloud, non activé par défaut.',
          },
        ],
        items: [
          'Prix : [achat unique de 19,99 $](https://apps.apple.com/us/app/layla/id6456886656) sur l\'App Store et Google Play, plus trois paliers d\'achat intégré nommés dont le contenu exact n\'est pas entièrement détaillé sur la fiche publique.',
          'Développeur : [Layla Network Pty Ltd](https://www.layla-network.ai), une société enregistrée en Australie ; les modèles affinés de la marque Layla sur Hugging Face sont publiés sous le compte GitHub [l3utterfly](https://github.com/l3utterfly).',
          'Le chat principal fonctionne sur l\'appareil via des modèles GGUF avec llama.cpp ; l\'application prend également en charge les backends de modèles LiteRT-LM et PTE (ExecuTorch), ainsi que la génération locale d\'images via Stable Diffusion 1.5, selon les propres billets techniques du développeur.',
          'Confidentialité : selon la [politique de confidentialité](https://blog.layla-network.ai/privacy) du développeur, la fonctionnalité principale est conçue pour fonctionner hors ligne et l\'application avertit avant que des données ne quittent l\'appareil — à l\'exception du mode séparé et optionnel Layla Cloud, désactivé par défaut.',
          'Orientation compagnon et jeu de rôle : personas personnalisables, conversations de groupe, plus de 100 voix et animation de personnage Live2D, ce qui la distingue des applications de chat plus sobres de cette catégorie.',
          'Note sur l\'App Store : 3,8/5 sur 31 avis au moment de l\'évaluation ; certains avis signalent des plantages et un comportement hors ligne peu fiable — un signalement d\'utilisateurs que cet avis n\'a pas vérifié de façon indépendante.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Remarque sur le nom : "Layla" est utilisé par plusieurs applications et sociétés sans lien entre elles, dont une société de planification de voyages IA rachetée par Expedia Group en 2026, et une application sociale distincte nommée "Layla – Voice Chat & Party Rooms". Cet avis porte uniquement sur l\'application de compagnon IA locale publiée par Layla Network Pty Ltd (identifiant App Store 6456886656, paquet Google Play com.layla), également présentée sur [layla-network.ai](https://www.layla-network.ai).',
          },
          {
            type: 'note',
            text: 'Cet avis se fonde sur la politique de confidentialité publique de Layla, les fiches App Store et Google Play, les billets techniques du développeur et des avis d\'utilisateurs publiquement visibles, vérifiés en septembre 2026. PromptQuorum n\'a pas réalisé de tests pratiques ni de benchmarks indépendants de Layla pour cet avis.',
          },
        ],
      },
      overview: {
        id: 'what-is-layla',
        title: 'Qu\'est-ce que Layla ?',
        content: [
          '**Layla est une application mobile pour Android et iOS conçue autour d\'un compagnon IA basé sur des personas, fonctionnant principalement sur l\'appareil grâce à [llama.cpp](https://github.com/ggml-org/llama.cpp) pour exécuter localement des modèles de langage à poids ouverts au format GGUF.** Plutôt que de se présenter comme un client de chat généraliste, Layla mise sur des fonctionnalités de personnage et de jeu de rôle : les utilisateurs peuvent créer ou télécharger des personnalités IA personnalisables, tenir des conversations de groupe avec plusieurs personnages et générer des images localement via un pipeline Stable Diffusion 1.5 intégré.',
          'Selon sa propre [politique de confidentialité](https://blog.layla-network.ai/privacy), "la fonctionnalité principale de notre application est conçue pour fonctionner hors ligne sur votre appareil", et la politique précise que l\'application affiche un avertissement et un message de confirmation avant toute action envoyant des données hors de l\'appareil. Séparément, le développeur propose également un mode optionnel basé sur le cloud — Layla Cloud —, décrit sur sa propre fiche boutique comme "la version cloud de l\'application premium \'Layla\'", destinée aux utilisateurs moins techniques souhaitant un chat de personnage sans gérer de modèles locaux. Ce chemin optionnel vers le cloud, détaillé dans la section Confidentialité plus bas, est la nuance la plus importante pour un lecteur soucieux de la confidentialité avant d\'acheter.',
        ],
        note: 'GGUF est un format de fichier permettant d\'empaqueter des modèles de langage à poids ouverts quantifiés afin qu\'ils s\'exécutent efficacement sur du matériel grand public via des moteurs d\'inférence comme llama.cpp, au lieu d\'appeler une API cloud à chaque réponse.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Qui a développé Layla ?',
        content: [
          '**Layla est publiée par [Layla Network Pty Ltd](https://www.layla-network.ai), une société enregistrée à Southport, dans le Queensland, en Australie, et l\'application est apparue publiquement pour la première fois vers août 2023.** Le travail technique sur les modèles derrière l\'application est attribué sur GitHub et Hugging Face à un développeur utilisant le pseudonyme [l3utterfly](https://github.com/l3utterfly), qui a publié des dizaines de modèles à poids ouverts affinés sous la marque "Layla" — dont [Llama2 7B Layla](https://huggingface.co/l3utterfly/llama2-7b-layla) et [OpenLLaMA 3B v2 Layla](https://huggingface.co/l3utterfly/open-llama-3b-v2-layla) —, décrits dans leurs propres fiches modèle comme des modèles de base utilisés par l\'application Layla.',
          'Le même compte GitHub maintient également des projets d\'infrastructure connexes : [Layla-Server](https://github.com/l3utterfly/Layla-Server), un wrapper qui relaie des requêtes compatibles OpenAI via WebRTC pour permettre à l\'application mobile de se connecter à un PC plus puissant exécutant son propre modèle local, et un [Layla SDK](https://github.com/l3utterfly/layla-sdk) pour créer des mini-applications personnalisées à l\'intérieur de Layla. Cela indique un écosystème technique activement maintenu autour de l\'application plutôt qu\'une simple version statique — contrairement au dépôt entièrement open source de PocketPal AI, le code source du client Layla n\'est cependant pas publié, ce qui empêche un audit indépendant de son comportement interne comme cela serait possible pour une application sous licence MIT.',
        ],
        items: [
          'Éditeur : [Layla Network Pty Ltd](https://www.layla-network.ai), enregistrée à Southport, Queensland, Australie.',
          'Lancement public : vers août 2023, selon des annuaires d\'applications tiers.',
          'Développement des modèles : modèles à poids ouverts affinés de la marque Layla publiés sur Hugging Face sous le compte GitHub [l3utterfly](https://github.com/l3utterfly).',
          'Projets connexes : [Layla-Server](https://github.com/l3utterfly/Layla-Server) (connecter l\'application à un backend PC auto-hébergé via WebRTC) et [Layla SDK](https://github.com/l3utterfly/layla-sdk) (créer des mini-applications à l\'intérieur de Layla).',
          'Le code source de l\'application cliente n\'est pas public — contrairement à PocketPal AI ou Maid, l\'application Layla elle-même est à code source fermé même si certains de ses modèles sous-jacents sont à poids ouverts.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Comment démarrer',
        content: [
          '**Configurer Layla pour le chat local nécessite quelques étapes après l\'achat, d\'après la propre description de la boutique et les billets techniques de l\'application.** Aucun compte n\'est requis pour utiliser les fonctionnalités locales principales.',
        ],
        numberedItems: [
          {
            title: 'Acheter et installer l\'application',
            whyItMatters: 'Téléchargez Layla depuis l\'[App Store](https://apps.apple.com/us/app/layla/id6456886656) (19,99 $) ou [Google Play](https://play.google.com/store/apps/details?id=com.layla) (19,99 $). Une version gratuite plus limitée aurait été distribuée en téléchargement direct d\'APK depuis le site du développeur — vérifiez directement sur [layla-network.ai](https://www.layla-network.ai) la disponibilité actuelle de cette option avant de supposer qu\'elle s\'applique à votre plateforme.',
          },
          {
            title: 'Laisser l\'application télécharger son modèle par défaut',
            whyItMatters: 'Au premier lancement, Layla télécharge un modèle de langage (environ 4 Go dans les versions précédentes) avant de pouvoir discuter ; il s\'agit d\'un téléchargement unique pour ce modèle.',
          },
          {
            title: 'Choisir ou personnaliser un persona',
            whyItMatters: 'Choisissez un personnage intégré ou créez le vôtre avec un nom, une personnalité et une voix — l\'interface de Layla est organisée autour des personnages plutôt qu\'autour d\'un unique fil de discussion générique.',
          },
          {
            title: 'Importer éventuellement un modèle GGUF personnalisé',
            whyItMatters: 'Les utilisateurs avancés peuvent charger leur propre fichier modèle au format GGUF à la place ou en complément des modèles par défaut de l\'application.',
          },
          {
            title: 'Discuter hors ligne, ou activer Layla Cloud',
            whyItMatters: 'Le chat local et la génération d\'images ne nécessitent pas de connexion réseau une fois un modèle téléchargé. Layla Cloud est un mode séparé et optionnel qu\'il faut explicitement installer ou activer — il ne fait pas partie de l\'expérience locale par défaut décrite ci-dessus.',
          },
        ],
        note: 'Certains avis App Store et Google Play signalent que le chargement de modèles hors ligne et l\'importation de modèles personnalisés ont été peu fiables dans les versions précédentes, notamment sur iOS. Cet avis n\'a pas vérifié de façon indépendante la stabilité actuelle — testez la configuration initiale pendant le délai de remboursement de votre plateforme avant de vous y fier.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quels modèles Layla prend-elle en charge ?',
        itemHeadings: true,
        columns: ['Type de modèle', 'Méthode d\'accès', 'Cas d\'usage typique'],
        rows: [
          {
            'Type de modèle': 'Modèle par défaut intégré',
            'Méthode d\'accès': 'Téléchargé automatiquement au premier lancement',
            'Cas d\'usage typique': 'Chat compagnon général prêt à l\'emploi, sans configuration',
          },
          {
            'Type de modèle': 'Modèles affinés de la marque Layla',
            'Méthode d\'accès': 'Publiés sur [Hugging Face](https://huggingface.co/l3utterfly) par le développeur l3utterfly (par ex. Llama2 7B Layla, OpenLLaMA 3B v2 Layla)',
            'Cas d\'usage typique': 'Chat orienté jeu de rôle et persona, adapté au format personnage de l\'application',
          },
          {
            'Type de modèle': 'Import GGUF personnalisé',
            'Méthode d\'accès': 'Import manuel de tout fichier au format GGUF depuis le stockage de l\'appareil ou Hugging Face',
            'Cas d\'usage typique': 'Utilisateurs disposant déjà d\'un modèle à poids ouverts préféré au format GGUF',
          },
          {
            'Type de modèle': 'Modèles LiteRT-LM et PTE (ExecuTorch)',
            'Méthode d\'accès': 'Backends d\'exécution sur l\'appareil alternatifs, selon les billets techniques du développeur',
            'Cas d\'usage typique': 'Inférence optimisée spécifique à l\'appareil ou au backend, au-delà du simple llama.cpp/GGUF',
          },
          {
            'Type de modèle': 'Stable Diffusion 1.5',
            'Méthode d\'accès': 'Fonctionne localement sur l\'appareil pour la génération d\'images, selon les billets techniques du développeur',
            'Cas d\'usage typique': 'Génération locale d\'images de personnages ou de scènes sans API cloud d\'images',
          },
        ],
        note: 'L\'identité exacte des modèles intégrés et les tailles de téléchargement par défaut ont varié selon les versions de l\'application ; confirmez le modèle par défaut actuel et sa taille dans l\'application avant de le télécharger avec un forfait de données limité.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Layla est-elle disponible sur Android et iPhone ?',
        itemHeadings: true,
        columns: ['Plateforme', 'Disponibilité', 'Remarques'],
        rows: [
          {
            'Plateforme': 'iPhone / iPad',
            'Disponibilité': 'Disponible sur l\'[App Store](https://apps.apple.com/us/app/layla/id6456886656), nécessite iOS 16.4 / iPadOS 16.4 ou ultérieur',
            'Remarques': 'La fiche App Store indique également une compatibilité Mac (macOS 13.0, Apple M1 ou ultérieur) et Apple Vision (visionOS 1.0 ou ultérieur) pour la même application.',
          },
          {
            'Plateforme': 'Android',
            'Disponibilité': 'Disponible sur [Google Play](https://play.google.com/store/apps/details?id=com.layla)',
            'Remarques': 'Un canal de distribution APK direct aurait également été proposé depuis le site du développeur, séparément de Google Play — vérifiez la disponibilité actuelle directement avant de vous y fier.',
          },
          {
            'Plateforme': 'Windows / Linux',
            'Disponibilité': 'Aucune version de bureau native pour Windows ou Linux confirmée au moment de l\'évaluation',
            'Remarques': 'Le projet [Layla-Server](https://github.com/l3utterfly/Layla-Server) permet à l\'application mobile de se connecter via WebRTC à un PC exécutant son propre backend local, ce qui constitue un pont plutôt qu\'un client de bureau natif.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Combien coûte Layla ?',
        content: [
          '**Layla coûte 19,99 $ en achat unique, aussi bien sur l\'[Apple App Store](https://apps.apple.com/us/app/layla/id6456886656) que sur [Google Play](https://play.google.com/store/apps/details?id=com.layla).** Au-delà de cet achat de base, la fiche App Store affiche trois paliers d\'achat intégré nommés — Monarch (4,99 $), Birdwing (19,99 $) et Blue Morpho (29,99 $) —, mais la fiche publique de la boutique ne détaille pas entièrement ce que chaque palier débloque (par exemple, s\'ils couvrent des crédits d\'usage cloud, des personnages premium ou des voix supplémentaires). Confirmez précisément ce qu\'inclut un palier donné dans l\'application avant de l\'acheter.',
          'Selon le propre contenu du blog du développeur, une version gratuite plus limitée de l\'application aurait été distribuée en téléchargement direct d\'APK depuis son propre site — cela diffère des fiches payantes de l\'App Store et de Google Play, et sa disponibilité et son périmètre de fonctionnalités actuels devraient être vérifiés directement sur [layla-network.ai](https://www.layla-network.ai) plutôt que présumés à partir de cet avis.',
          'Layla Cloud, le mode de chat cloud optionnel et séparé, est proposé au téléchargement gratuit en tant qu\'application distincte sur les boutiques ; la question de savoir si l\'usage continu de Layla Cloud nécessite un abonnement ou des crédits au-delà du palier gratuit n\'est pas détaillée dans la fiche publique consultée pour cet article.',
        ],
        items: [
          '**Application de base :** achat unique de 19,99 $ sur l\'App Store et Google Play — aucun abonnement requis pour l\'achat de base lui-même.',
          '**Paliers d\'achat intégré :** Monarch (4,99 $), Birdwing (19,99 $), Blue Morpho (29,99 $) — nommés sur la fiche App Store ; contenu exact non entièrement détaillé publiquement.',
          '**Version gratuite/limitée :** disponible, selon les informations disponibles, via téléchargement direct d\'APK depuis le site du développeur, séparément des fiches payantes des boutiques — vérifier le statut actuel directement.',
          '**Layla Cloud :** une application compagnon distincte et gratuite au téléchargement pour le chat de personnage basé sur le cloud ; sa propre structure de coûts au-delà du palier gratuit n\'est pas détaillée dans la fiche publique.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité : chat local vs. Layla Cloud',
        content: [
          '**La propre [politique de confidentialité](https://blog.layla-network.ai/privacy) de Layla indique que "la fonctionnalité principale de notre application est conçue pour fonctionner hors ligne sur votre appareil", et que l\'application affichera un avertissement et un message de confirmation avant toute action envoyant vos données hors de l\'appareil.** La politique nomme des déclencheurs spécifiques pour la sortie de données : téléverser un personnage vers le Personality Hub, utiliser la fonction "Signaler un bug" intégrée, et activer des fonctionnalités cloud optionnelles.',
          'Ce dernier point — les fonctionnalités cloud optionnelles — correspond à Layla Cloud, décrit par le développeur comme un mode distinct et séparé : selon la politique, "Layla Cloud n\'est activé que si vous installez la mini-application \'Layla Cloud\' à l\'intérieur de Layla", et si elle n\'est pas installée ou activée, "aucune fonctionnalité liée à Layla Cloud n\'est activée". Lorsque Layla Cloud est actif, la propre documentation du développeur indique qu\'il collecte l\'historique des conversations — vos messages, les réponses des personnages, ainsi que les données de fonctionnalités auxiliaires comme la Mémoire à Long Terme, le PDF Digest et Dream —, et que ces données sont anonymisées et non liées à votre compte, bien qu\'elles puissent être utilisées pour le débogage ou l\'amélioration du service. La politique précise également que Layla Cloud ne collecte pas rétroactivement les conversations antérieures à son activation.',
          'Dans l\'ensemble, il s\'agit d\'une conception de confidentialité sensiblement différente de celle d\'une application dont la fonctionnalité principale ne comporte aucune composante cloud : le mode local par défaut de Layla est conçu pour rester sur l\'appareil avec une barrière de consentement explicite avant toute transmission, mais le produit lui-même propose un chemin optionnel et activé séparément vers le cloud qui collecte bien des données de conversation anonymisées lorsqu\'un utilisateur l\'active. Les lecteurs souhaitant la garantie la plus forte possible — un produit sans aucun mode cloud à activer — devraient comparer cela à [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), dont l\'intégralité du code est open source sous licence MIT, sans aucune fonction de chat cloud intégrée.',
        ],
        items: [
          '**Mode local :** selon la politique du développeur, conçu pour fonctionner hors ligne ; l\'application est indiquée comme avertissant et demandant confirmation avant toute sortie de données de l\'appareil.',
          '**Layla Cloud :** un mode séparé et optionnel (installé comme mini-application ou application distincte) qui collecte un historique de conversation anonymisé, y compris des données de fonctionnalités auxiliaires, une fois activé.',
          '**Non rétroactif :** selon la politique, l\'activation de Layla Cloud n\'intègre pas l\'historique de conversation antérieur à son activation.',
          '**Code source fermé :** contrairement à PocketPal AI ou Maid, le code de l\'application cliente de Layla n\'est pas publié, de sorte que l\'affirmation d\'absence de transmission par défaut repose sur la politique de confidentialité du développeur lui-même plutôt que sur un audit de code indépendant.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis n\'a pas audité de façon indépendante le trafic réseau ni le code source de Layla. La description ci-dessus reflète la politique de confidentialité publiée par le développeur et les fiches des boutiques, et non une évaluation de sécurité indépendante réalisée par PromptQuorum.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions de compagnon et de jeu de rôle',
        content: [
          '**L\'ensemble des fonctionnalités de Layla est conçu, selon ses propres descriptions sur les boutiques d\'applications, davantage autour de cas d\'usage de persona et de jeu de rôle que d\'une simple interface de chat questions-réponses.** Les fonctionnalités mentionnées incluent :',
        ],
        items: [
          '**Personnalités personnalisables.** Les utilisateurs peuvent créer ou télécharger des personnages IA avec des personas distincts plutôt que de discuter avec une identité d\'assistant unique et fixe.',
          '**Conversations de groupe.** Selon la fiche de l\'application, plusieurs personnages peuvent participer au même fil de conversation.',
          '**Plus de 100 voix.** L\'application mentionne une large bibliothèque de voix pour les réponses de personnage en synthèse vocale.',
          '**Animation de personnage Live2D.** Des représentations visuelles et animées des personnages plutôt qu\'une interface purement textuelle.',
          '**Génération locale d\'images.** Un pipeline Stable Diffusion 1.5 intégré fonctionne sur l\'appareil pour les images de personnages ou de scènes, selon les billets techniques du développeur.',
          '**Agents programmables (Python).** Les utilisateurs avancés peuvent scripter des comportements de type agent en Python, selon la propre description de l\'application.',
          '**Aucun filtre de contenu intégré pour l\'inférence locale.** Comme la génération locale s\'exécute entièrement sur le matériel de l\'appareil, les propres documents du développeur la décrivent comme dépourvue de couche de modération de contenu côté serveur pour ce mode — un choix de conception délibéré, qui reporte la responsabilité d\'un usage approprié sur l\'utilisateur individuel plutôt que sur un système de modération hébergé.',
        ],
        note: 'La disponibilité des fonctionnalités, la taille de la bibliothèque de voix et certaines intégrations de modèles ont changé selon les versions de l\'application ; vérifiez la disponibilité actuelle des fonctionnalités dans l\'application plutôt que de supposer que tout ce qui est décrit dans un ancien matériel marketing s\'applique encore sans changement.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Quel matériel est nécessaire pour faire fonctionner Layla ?',
        content: [
          '**La fiche App Store recommande un minimum de 8 Go de RAM, et le propre marketing de Layla a historiquement décrit l\'application comme visant les smartphones haut de gamme récents plutôt que du matériel économique ou ancien.** Il s\'agit d\'un seuil plus strict que celui de certaines applications de chat local concurrentes prenant en charge confortablement des modèles plus petits de 2 à 4 milliards de paramètres avec 4 Go de RAM — les fonctionnalités de compagnon de Layla (modèles par défaut plus lourds, génération locale d\'images et animation de personnage) relèvent le seuil matériel pratique.',
          'Comme pour toute application basée sur GGUF, le modèle précis chargé — et non l\'application elle-même — détermine réellement les besoins en mémoire : un modèle quantifié plus petit nécessite moins de RAM qu\'un modèle de 7 milliards de paramètres ou plus, et exécuter la génération locale d\'images Stable Diffusion en parallèle du chat ajoute une surcharge de mémoire et de traitement supplémentaire au-delà de l\'inférence en texte seul.',
        ],
        items: [
          'Minimum recommandé : 8 Go de RAM, selon la fiche App Store — nettement plus élevé que le seuil de 4 Go courant chez les applications de chat local plus sobres de cette catégorie.',
          'Les smartphones haut de gamme récents (approximativement les dernières générations) sont recommandés plutôt que du matériel plus ancien ou économique, selon les propres supports marketing du développeur.',
          'Stockage : le téléchargement du modèle par défaut au premier lancement a été signalé autour de 4 Go dans les versions précédentes ; les modèles GGUF personnalisés et les checkpoints Stable Diffusion ajoutent des besoins de stockage supplémentaires.',
          'La génération locale d\'images (Stable Diffusion 1.5) ajoute une surcharge de traitement et de mémoire au-delà du chat en texte seul — attendez-vous à des performances plus lentes sur les appareils à faible RAM lors de l\'utilisation de cette fonctionnalité.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'Portée en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Profondeur du compagnon et du jeu de rôle',
            'Portée en usage réel': 'Personnages de persona, chat de groupe, plus de 100 voix et animation Live2D vont au-delà d\'une simple interface de chat.',
            'Limite / réserve': 'Les lecteurs souhaitant simplement un chat sobre façon assistant pourraient trouver PocketPal AI ou Private LLM plus simples à utiliser.',
          },
          {
            'Avantage': 'Génération locale de texte et d\'images',
            'Portée en usage réel': 'Le chat comme la génération d\'images Stable Diffusion 1.5 peuvent fonctionner entièrement sur l\'appareil.',
            'Limite / réserve': 'Nécessite sensiblement plus de RAM et de stockage que les applications de chat local en texte seul ; l\'App Store indique un minimum de 8 Go.',
          },
          {
            'Avantage': 'Barrière de consentement explicite avant sortie de données',
            'Portée en usage réel': 'Selon la politique de confidentialité, l\'application avertit avant d\'envoyer des données hors de l\'appareil pour des fonctions comme le téléversement de personnages ou les signalements de bugs.',
            'Limite / réserve': 'L\'application propose aussi un mode optionnel Layla Cloud qui collecte bien des données de conversation anonymisées une fois activé par l\'utilisateur — ce n\'est pas, par conception, un produit sans aucune composante cloud.',
          },
          {
            'Avantage': 'Développement actif des modèles et de l\'infrastructure',
            'Portée en usage réel': 'Les modèles affinés de la marque Layla sur Hugging Face et des projets connexes comme Layla-Server montrent un travail technique continu.',
            'Limite / réserve': 'Le code source de l\'application cliente elle-même est fermé, ce qui empêche un audit indépendant de son comportement comme cela serait possible pour PocketPal AI ou Maid.',
          },
          {
            'Avantage': 'Achat unique de 19,99 $',
            'Portée en usage réel': 'Aucun abonnement requis pour l\'application de base, sur aucune des deux boutiques.',
            'Limite / réserve': 'Trois paliers d\'achat intégré supplémentaires existent, dont le contenu exact n\'est pas entièrement détaillé sur la fiche publique — vérifiez dans l\'application ce que vous achetez exactement.',
          },
          {
            'Avantage': 'Multiplateforme : Android et iOS',
            'Portée en usage réel': 'Disponible sur les deux plateformes mobiles majeures, contrairement à des applications exclusives à Apple comme Private LLM.',
            'Limite / réserve': 'Des avis publics sur l\'App Store signalent des plantages et des fonctions hors ligne peu fiables sur certains appareils — signalé par des utilisateurs, non vérifié de façon indépendante par PromptQuorum.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui Layla convient',
        items: [
          '**Utilisateurs souhaitant une IA locale de type compagnon/jeu de rôle, et non un simple assistant.** Si les personnages de persona, les conversations de groupe et la sortie vocale comptent davantage qu\'une interface de chat minimale, l\'ensemble des fonctionnalités de Layla est spécifiquement conçu pour ce cas d\'usage.',
          '**Utilisateurs souhaitant la génération locale d\'images en complément du chat.** Le pipeline Stable Diffusion 1.5 intégré permet à une seule application de gérer à la fois le texte et la génération d\'images sur l\'appareil.',
          '**Utilisateurs à l\'aise avec l\'achat unique d\'une application plutôt qu\'avec un outil gratuit.** 19,99 $ permettent d\'acquérir définitivement l\'application de base sur les deux plateformes mobiles majeures.',
          '**Utilisateurs lisant attentivement les politiques de confidentialité et acceptant un mode cloud optionnel.** La conception locale par défaut de Layla, avec avertissement explicite avant toute sortie de données, peut constituer un compromis acceptable pour des lecteurs qui n\'ont pas besoin d\'un produit sans aucune capacité cloud du tout.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui Layla ne convient pas',
        items: [
          '**Lecteurs ayant besoin d\'un produit garanti sans aucune composante cloud.** Layla proposant un mode cloud optionnel (Layla Cloud) qui collecte des données anonymisées une fois activé, les lecteurs souhaitant spécifiquement une application sans jamais aucune fonction cloud à activer devraient plutôt choisir [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), dont l\'intégralité du code open source ne comporte aucun chemin de chat cloud intégré.',
          '**Lecteurs souhaitant une application gratuite ou entièrement open source.** Layla est une application payante à code source fermé à 19,99 $ ; PocketPal AI (gratuite, licence MIT) et Maid (gratuite, licence MIT) répondent plutôt à ce besoin.',
          '**Lecteurs souhaitant une interface de chat simple et minimale façon assistant.** La conception de Layla centrée sur les personnages et les personas ajoute une complexité que les utilisateurs souhaitant un simple chat questions-réponses pourraient ne pas vouloir ; Private LLM ou PocketPal AI sont conçus de façon plus proche d\'un assistant.',
          '**Lecteurs disposant d\'appareils à faible RAM ou anciens.** L\'App Store indique 8 Go de RAM comme recommandation minimale, plus élevée que plusieurs applications concurrentes exécutant confortablement des modèles plus petits avec 4 Go.',
          '**Lecteurs ayant besoin de fonctionnalités d\'entreprise ou d\'équipe.** Layla est une application grand public mono-utilisateur, sans console d\'administration, sans gestion de licences partagées ni facturation d\'équipe ; les organisations devraient plutôt envisager une infrastructure LLM locale auto-hébergée côté serveur.',
          '**Lecteurs souhaitant auditer eux-mêmes le code source de l\'application.** L\'application cliente de Layla est à code source fermé ; les lecteurs ayant besoin de ce niveau de garantie devraient utiliser une alternative sous licence MIT ou AGPL comme PocketPal AI, Maid ou ChatterUI.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Layla face aux alternatives',
        columns: ['Application', 'Plateformes', 'Prix', 'Local vs. cloud', 'Différence clé'],
        rows: [
          {
            'Application': 'Layla',
            'Plateformes': 'Android, iPhone/iPad (également Mac/Vision Pro selon la fiche App Store)',
            'Prix': '19,99 $ à l\'achat, plus paliers d\'achat intégré nommés',
            'Local vs. cloud': 'Local par conception ; mode optionnel activable Layla Cloud',
            'Différence clé': 'Orientation compagnon/jeu de rôle : personas, chat de groupe, voix, génération locale d\'images',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iPhone/iPad, Android',
            'Prix': 'Gratuit, open source (MIT)',
            'Local vs. cloud': 'Entièrement local ; aucune fonction de chat cloud intégrée',
            'Différence clé': 'Gratuit, entièrement open source, davantage axé sur le chat simple que sur le jeu de rôle',
          },
          {
            'Application': 'Private LLM',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Prix': '4,99 $ à l\'achat',
            'Local vs. cloud': 'Entièrement local ; aucun repli cloud, selon l\'étiquette de confidentialité de l\'App Store',
            'Différence clé': 'Plus de 140 modèles sélectionnés avec quantification OmniQuant/GPTQ ; style assistant, pas orienté jeu de rôle',
          },
          {
            'Application': '[Enclave AI](/fr/power-local-llm/enclave-ai-review)',
            'Plateformes': 'Voir l\'avis complet pour le support de plateformes actuel',
            'Prix': 'Voir la fiche actuelle',
            'Local vs. cloud': 'Voir l\'avis complet',
            'Différence clé': 'Assistant sur l\'appareil centré sur Apple avec intégration Siri/Shortcuts',
          },
          {
            'Application': '[Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay)',
            'Plateformes': 'Bureau Windows/Mac (Backyard Cloud ajoute la synchronisation mobile/web)',
            'Prix': 'Application de bureau gratuite ; Backyard Cloud optionnel à 7–35 $/mois',
            'Local vs. cloud': 'Local par défaut ; palier cloud payant explicite pour l\'inférence hébergée',
            'Différence clé': 'Application de jeu de rôle centrée sur le bureau avec un Character Hub bien plus vaste ; le palier cloud est un produit distinct au prix clair, non un mode gratuit optionnel',
          },
          {
            'Application': '[LLM Farm](https://llmfarm.space/)',
            'Plateformes': 'iOS/Mac (open source, GitHub : [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Prix': 'Gratuit, open source',
            'Local vs. cloud': 'Entièrement local',
            'Différence clé': 'A été retirée de l\'App Store et de TestFlight selon son propre README GitHub — vérifiez la disponibilité actuelle avant de vous y fier',
          },
          {
            'Application': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plateformes': 'Application multiplateforme Flutter (Android en priorité)',
            'Prix': 'Gratuit, open source (MIT)',
            'Local vs. cloud': 'Local via GGUF/llama.cpp ; peut aussi se connecter à des API distantes si l\'utilisateur les configure',
            'Différence clé': 'Entièrement open source et non orientée jeu de rôle ; l\'usage d\'API distante est optionnel et configuré par l\'utilisateur',
          },
          {
            'Application': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'Plateformes': 'Android (à compiler depuis les sources)',
            'Prix': 'Gratuit, open source (AGPL-3.0)',
            'Local vs. cloud': 'Local via GGUF/llama.cpp, ou connexion à des API distantes si configuré',
            'Différence clé': 'Prise en charge de Character Card v2 pour le jeu de rôle, entièrement open source, configuration plus technique',
          },
          {
            'Application': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plateformes': 'Android',
            'Prix': 'Gratuit, open source',
            'Local vs. cloud': 'Client multi-fournisseurs ; inférence locale via un fournisseur LiteRT',
            'Différence clé': 'Se positionne comme un client multi-fournisseurs plutôt qu\'une application de compagnon local en priorité',
          },
          {
            'Application': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plateformes': 'Android (iOS prévu)',
            'Prix': 'Gratuit, open source',
            'Local vs. cloud': 'Sur l\'appareil via Cactus Compute, ou associé à un serveur auto-hébergé',
            'Différence clé': 'Conçue pour être associée à un espace de travail AnythingLLM auto-hébergé, pas une application de compagnon autonome',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment — vérifiez les spécificités actuelles sur la fiche de chaque application avant de décider. La disponibilité de LLM Farm sur l\'App Store en particulier devrait être revérifiée, son propre README GitHub la décrivant comme retirée de l\'App Store.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Layla est-elle gratuite ?',
            a: 'Non, l\'application principale Layla coûte 19,99 $ en achat unique sur l\'App Store comme sur Google Play. La fiche App Store affiche également trois paliers d\'achat intégré nommés (Monarch 4,99 $, Birdwing 19,99 $, Blue Morpho 29,99 $). Une version gratuite plus limitée aurait été distribuée en téléchargement direct d\'APK depuis le site du développeur — vérifiez la disponibilité actuelle sur [layla-network.ai](https://www.layla-network.ai). Layla Cloud, une application compagnon distincte pour le chat basé sur le cloud, est gratuite au téléchargement en tant qu\'application autonome.',
          },
          {
            q: 'Layla fonctionne-t-elle entièrement hors ligne, sans aucune composante cloud ?',
            a: 'Pas entièrement. Selon la propre politique de confidentialité de Layla, l\'application principale est conçue pour fonctionner hors ligne et avertit avant que des données ne quittent l\'appareil. Layla propose toutefois aussi un mode séparé et activé à part, appelé Layla Cloud, qui collecte bien des données de conversation anonymisées lorsqu\'un utilisateur l\'active. Layla n\'est donc pas un produit strictement local comme le serait une application sans aucune fonction cloud ; les lecteurs souhaitant cette garantie plus forte devraient la comparer à [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
          },
          {
            q: 'Qui développe Layla ?',
            a: 'Layla est publiée par [Layla Network Pty Ltd](https://www.layla-network.ai), une société enregistrée à Southport, Queensland, Australie. Les modèles à poids ouverts affinés de la marque Layla utilisés par l\'application sont publiés sur Hugging Face sous le compte GitHub [l3utterfly](https://github.com/l3utterfly).',
          },
          {
            q: 'Quels modèles Layla peut-elle exécuter ?',
            a: 'Layla télécharge un modèle par défaut au premier lancement et peut également charger des modèles affinés de la marque Layla publiés sur Hugging Face, ou tout fichier modèle personnalisé au format GGUF, via llama.cpp. Les billets techniques du développeur décrivent également la prise en charge des backends de modèles LiteRT-LM et PTE (ExecuTorch), ainsi que Stable Diffusion 1.5 en local pour la génération d\'images.',
          },
          {
            q: 'Layla fonctionne-t-elle à la fois sur Android et sur iPhone ?',
            a: 'Oui. Layla est disponible sur [Google Play](https://play.google.com/store/apps/details?id=com.layla) pour Android et sur l\'[App Store](https://apps.apple.com/us/app/layla/id6456886656) pour iPhone et iPad ; la fiche App Store indique également une compatibilité Mac et Apple Vision pour la même application. Aucune version de bureau native pour Windows ou Linux n\'a été confirmée au moment de l\'évaluation.',
          },
          {
            q: 'De combien de RAM Layla a-t-elle besoin ?',
            a: 'La fiche App Store recommande un minimum de 8 Go de RAM, plus élevé que le seuil d\'environ 4 Go courant chez les applications de chat local en texte seul plus sobres, reflétant les modèles par défaut plus lourds de Layla, la génération locale d\'images et les fonctionnalités d\'animation de personnage.',
          },
          {
            q: 'Qu\'est-ce que Layla Cloud, et est-ce la même chose que l\'application principale Layla ?',
            a: 'Non. Layla Cloud est un mode séparé et optionnel, ou une mini-application, qui propose un chat de personnage basé sur le cloud pour les utilisateurs ne souhaitant pas gérer de modèles locaux. Selon la politique de confidentialité, il n\'est actif que si un utilisateur l\'installe ou l\'active, et lorsqu\'il est actif, il collecte un historique de conversation anonymisé à des fins de débogage ou d\'amélioration du service. Il ne collecte pas rétroactivement de données antérieures à son activation.',
          },
          {
            q: 'Layla est-elle fiable ? Les utilisateurs signalent-ils des problèmes ?',
            a: 'Layla affiche une note de 3,8/5 sur 31 avis sur l\'App Store au moment de l\'évaluation. Certains avis publics sur l\'App Store signalent des plantages et des fonctions hors ligne peu fiables, en particulier lors de l\'import de modèles personnalisés sur iOS. Cet avis n\'a pas vérifié de façon indépendante la stabilité actuelle de l\'application — considérez cela comme des observations signalées par des utilisateurs, et testez l\'application pendant le délai de remboursement de votre plateforme avant de vous y fier.',
          },
          {
            q: 'L\'application de compagnon IA "Layla" est-elle la même société que le planificateur de voyages IA "Layla" racheté par Expedia ?',
            a: 'Non. Cet avis porte sur l\'application de compagnon IA locale publiée par Layla Network Pty Ltd (identifiant App Store 6456886656, paquet Google Play com.layla). Elle n\'a aucun lien avec la société distincte de planification de voyages IA "Layla", basée à Berlin, dont Expedia Group a annoncé le rachat en 2026, ni avec d\'autres applications du même nom comme "Layla – Voice Chat & Party Rooms".',
          },
          {
            q: 'Comment Layla se compare-t-elle à PocketPal AI ou Private LLM ?',
            a: 'Layla est une application payante à code source fermé à 19,99 $, axée sur le compagnon/jeu de rôle, avec un mode cloud optionnel activable, disponible à la fois sur Android et iOS. PocketPal AI est gratuite, open source, et ne comporte aucune fonction de chat cloud intégrée. Private LLM est une application payante (4,99 $), à code source fermé, exclusive à Apple, de style assistant, avec une bibliothèque de modèles sélectionnés plus large et aucun repli cloud selon son étiquette de confidentialité App Store. Choisissez Layla pour la profondeur compagnon/jeu de rôle sur les deux plateformes mobiles ; choisissez PocketPal AI pour une option gratuite, entièrement locale et open source ; choisissez Private LLM pour une expérience assistant soignée et exclusive à Apple.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Layla constitue une entrée réellement distinctive dans la catégorie des IA locales mobiles : elle mise sur des fonctionnalités de compagnon et de jeu de rôle — personas, chat de groupe, plus de 100 voix et génération locale d\'images — que des applications de chat plus sobres comme PocketPal AI ou Private LLM ne tentent pas, et son prix unique de 19,99 $ couvre Android comme iOS avec un seul achat. La question de la confidentialité est plus nuancée qu\'une simple affirmation "entièrement hors ligne" : la propre politique du développeur décrit un cœur local par défaut avec un avertissement explicite avant toute transmission de données, mais l\'application propose aussi un mode optionnel Layla Cloud qui collecte bien des données de conversation anonymisées une fois activé par l\'utilisateur — une conception sensiblement différente de celle d\'une application sans aucun chemin cloud intégré. Combiné à un client à code source fermé, à trois paliers d\'achat intégré dont le contenu exact n\'est pas entièrement public, et à des signalements d\'utilisateurs concernant des problèmes de fiabilité des fonctions hors ligne et de modèle personnalisé sur iOS, Layla convient aux lecteurs qui recherchent spécifiquement son ensemble de fonctionnalités persona/jeu de rôle et qui acceptent ce compromis en matière de confidentialité. Les lecteurs souhaitant la garantie locale la plus forte disponible, une transparence totale du code source ou le coût le plus bas devraient plutôt commencer par [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Layla sur l\'App Store](https://apps.apple.com/us/app/layla/id6456886656) — prix, paliers d\'achat intégré, exigences de plateforme, notes et historique des versions.',
          '[Layla sur Google Play](https://play.google.com/store/apps/details?id=com.layla) — disponibilité et prix pour Android.',
          '[Site officiel de Layla](https://www.layla-network.ai) — présentation du produit et descriptions des fonctionnalités publiées par le développeur.',
          '[Politique de confidentialité de Layla](https://blog.layla-network.ai/privacy) — traitement des données local vs. cloud, périmètre de Layla Cloud et informations sur la collecte de données.',
          '[Layla (Cloud) sur l\'App Store](https://apps.apple.com/gb/app/layla-cloud/id6764344419) — la fiche de l\'application distincte du mode cloud optionnel.',
          '[l3utterfly sur GitHub](https://github.com/l3utterfly) et [l3utterfly sur Hugging Face](https://huggingface.co/l3utterfly) — publications de modèles de la marque Layla et projets d\'infrastructure connexes (Layla-Server, Layla SDK).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une alternative gratuite, entièrement open source et entièrement locale, sans fonction de chat cloud intégrée.',
          '[Avis Private LLM](/fr/power-local-llm/private-llm-review) — une application à 4,99 $ exclusive à Apple, de style assistant, avec une bibliothèque de modèles sélectionnés plus large.',
          '[Avis Enclave AI](/fr/power-local-llm/enclave-ai-review) — une autre application IA sur l\'appareil centrée sur Apple, pour comparaison.',
          '[Avis Backyard AI : chat de personnage IA local et jeu de rôle](/fr/power-local-llm/backyard-ai-review-local-roleplay) — une alternative de jeu de rôle centrée sur le bureau avec une bibliothèque de personnages bien plus vaste et un palier cloud au prix clair.',
          '[Meilleures applications LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama plus large des applications Android, pour comparaison.',
          '[Meilleures applications LLM locales pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama plus large des applications iOS, pour comparaison.',
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
    heroImage: '/images/layla-review-hero-ja.webp',
    title: 'Layla レビュー(2026):Android・iOS向けオンデバイスAIコンパニオンアプリ',
    seoTitle: 'Layla レビュー2026:ローカルAIコンパニオンアプリの料金とプライバシー',
    intro:
      '[Layla Network Pty Ltd](https://www.layla-network.ai)（オーストラリアで登記された企業で、GitHub上では"Layla"ブランドのファインチューニング済みオープンウェイトモデルを公開する開発者[l3utterfly](https://github.com/l3utterfly)とも関連付けられています)が手がけるLaylaは、スマートフォン上でローカルに動作するパーソナルAIコンパニオンを軸に、単なるチャットにとどまらないペルソナ・ロールプレイ・キャラクター機能を備えたAndroidとiOS向けの有料アプリです。App StoreとGoogle Playの両方で[19.99ドルの買い切り](https://apps.apple.com/us/app/layla/id6456886656)で、App Storeの掲載情報にはさらに名前付きのアプリ内課金プランが3種類表示されています。Laylaのコアチャットはllama.cppを使ってGGUFモデルを完全に端末上で動かすよう設計されていますが、アプリには「Layla Cloud」というデフォルトでは有効ではない、別途同意が必要なオプションのクラウドモードも用意されています。本レビューは、実際にローカルで動く部分・動かない部分、実際の料金、そしてどのような読者に向いているかを、独自のハンズオンテストではなく、開発者自身のプライバシーポリシー、アプリストアの掲載情報、公開ドキュメントに基づいて解説します。',
    metaDescription:
      'Layla レビュー2026:Android・iOS向け19.99ドルのオンデバイスAIコンパニオンアプリ。実際にローカルで動く部分とオプションのLayla Cloudモードの違い、正確な料金、モデル、向いている読者を解説。',
    twitterDescription:
      'Layla レビュー2026:ロールプレイ・ペルソナ機能を備えたAndroid・iOS向け19.99ドルのローカルAIコンパニオンアプリ。端末上で動く部分、オプションのクラウドモードが収集するデータ、PocketPal AIやPrivate LLMとの比較を解説。',
    audience:
      '有料のオンデバイスAIコンパニオン/ロールプレイアプリを検討しているAndroid・iOSユーザー向け。ローカルに留まる部分とオプションのクラウドモードが収集する内容を正確に把握したい読者、正確な料金、公開アプリストアレビューに基づく信頼性の注意点も扱います。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Layla review',
    targetKeywords: [
      'layla ai レビュー',
      'layla app ローカルllm',
      'layla network ai',
      'layla ai android iphone',
      'layla ai プライバシー クラウド',
      'layla ai 料金',
      'ローカル ai コンパニオン アプリ',
      'layla vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama2 7B Layla', 'OpenLLaMA 3B v2 Layla', 'GGUF models', 'Stable Diffusion 1.5'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**Laylaは、[Layla Network Pty Ltd](https://www.layla-network.ai)が開発したAndroid・iOS向けの19.99ドル買い切りアプリで、GGUF形式の言語モデルを端末上で動かし、ロールプレイキャラクター・音声・画像生成を備えたペルソナベースのAIコンパニオンを提供します。** 開発者自身の[プライバシーポリシー](https://blog.layla-network.ai/privacy)によれば、アプリのコア機能はオフラインで動作するよう設計されており、データが端末外に送信される前に警告を表示するとされています。しかしLaylaには「Layla Cloud」という、デフォルトでは無効な、別途有効化が必要なオプションのクラウドモードも搭載されており、これは[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)のようなクラウドコンポーネントが一切ないアプリの設計とは異なります。「サーバーに一切触れない」という最も強い保証を求める読者は、購入前にこの違いを慎重に検討する必要があります。',
    quickAnswerTop: {
      ja: {
        question: 'Laylaは完全オフラインのローカル専用AIアプリですか?',
        answer:
          '概ねそうですが、完全ではありません。Laylaのコアチャットとキャラクター機能はGGUFモデルを使って端末上で動作するよう設計されており、プライバシーポリシーではデータが端末外に出る前に警告すると記載されています。ただしLaylaには「Layla Cloud」という別途インストールまたは有効化が必要なオプションのクラウドモードもあり、有効化すると匿名化された会話データを収集します。そのためLaylaは一部の競合アプリのような厳密にローカル専用のアプリではありません。',
        bullets: [
          '[App Store](https://apps.apple.com/us/app/layla/id6456886656)と[Google Play](https://play.google.com/store/apps/details?id=com.layla)で19.99ドルの買い切り、加えて名前付きのアプリ内課金プランが3種類。',
          'コアチャットはllama.cppを使ってGGUFモデルで端末上で動作。開発者のプライバシーポリシーによれば、データが端末外に出る前に警告するとされている。',
          'Layla Cloudは別個のオプションのモードで、有効化すると匿名化された会話データを収集する。デフォルトでは無効。',
          'ロールプレイに重点:ペルソナキャラクター、グループ会話、100種類以上のTTS音声、ローカルStable Diffusion 1.5による画像生成(アプリストアの掲載情報による)。',
          'レビュー時点でApp Storeの評価は31件のレビューで3.8/5。一部のレビュアーはオフライン機能の不安定さを報告しているが、これはユーザー報告であり、PromptQuorumが独自に検証したものではない。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Laylaとは?', anchor: 'what-is-layla' },
      { label: 'Laylaを開発したのは?', anchor: 'history-and-developer' },
      { label: '使い始め方', anchor: 'getting-started' },
      { label: 'Laylaが対応するモデルは?', anchor: 'models-supported' },
      { label: 'LaylaはAndroidとiPhoneで使える?', anchor: 'platform-availability' },
      { label: 'Laylaの料金は?', anchor: 'pricing' },
      { label: 'プライバシー:ローカルチャット vs. Layla Cloud', anchor: 'privacy' },
      { label: 'コンパニオン・ロールプレイ機能', anchor: 'key-features' },
      { label: '必要なハードウェアは?', anchor: 'hardware-requirements' },
      { label: 'トレードオフ:利点と制約', anchor: 'tradeoffs' },
      { label: 'Laylaが向いている人', anchor: 'who-should-use' },
      { label: 'Laylaが向いていない人', anchor: 'who-should-not-use' },
      { label: 'Laylaと代替アプリの比較', anchor: 'vs-alternatives' },
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
            text: 'Laylaは、Layla Network Pty Ltdが開発したAndroid・iOS向け19.99ドル買い切りアプリで、GGUF形式の言語モデルを端末上で動かしペルソナベースのAIコンパニオンを提供し、別途「Layla Cloud」というオプションのオプトインクラウドモードも用意している。',
          },
          {
            type: 'plain-terms',
            text: '企業のサーバーではなく主に自分のスマートフォン上で動くカスタマイズ可能なAIキャラクターと話すためにインストールする、コンパニオン型のチャットアプリです。完全ローカルの一部のアプリと異なり、クラウドベースのチャット用にオンにできるオプションのオンラインモードも用意されていますが、デフォルトでは有効になっていません。',
          },
        ],
        items: [
          '料金:[App Store](https://apps.apple.com/us/app/layla/id6456886656)とGoogle Playで19.99ドルの買い切り、加えて公開情報では内容が完全には示されていない、名前付きのアプリ内課金プランが3種類ある。',
          '開発元:[Layla Network Pty Ltd](https://www.layla-network.ai)というオーストラリアで登記された企業。Hugging Face上のLaylaブランドのファインチューニングモデルはGitHubアカウント[l3utterfly](https://github.com/l3utterfly)の下で公開されている。',
          'コアチャットはllama.cppを使ってGGUFモデルで端末上で動作する。開発者自身の技術ブログ記事によれば、LiteRT-LMおよびPTE(ExecuTorch)モデルバックエンド、ローカルStable Diffusion 1.5による画像生成にも対応している。',
          'プライバシー:開発者の[プライバシーポリシー](https://blog.layla-network.ai/privacy)によれば、コア機能はオフラインで動作するよう設計されており、デフォルトでは無効な別個のオプション「Layla Cloud」モードを除き、データが端末外に出る前に警告する。',
          'コンパニオン・ロールプレイ重視:カスタマイズ可能なペルソナ、グループ会話、100種類以上の音声、Live2Dキャラクターアニメーションが、このカテゴリのよりシンプルなチャットアプリとの違いとなっている。',
          'App Store評価:レビュー時点で31件のレビューで3.8/5。一部のレビュアーはクラッシュや不安定なオフライン動作を報告しているが、本レビューはこのユーザー報告を独自に検証していない。',
        ],
        callouts: [
          {
            type: 'note',
            text: '名称に関する注意:「Layla」という名称は、2026年にExpedia Groupに買収されたAI旅行計画企業や、「Layla – Voice Chat & Party Rooms」という別のソーシャルアプリなど、無関係の複数のアプリ・企業でも使われています。本レビューは、Layla Network Pty Ltdが公開しているオンデバイスAIコンパニオンアプリ(App Store ID 6456886656、Google Playパッケージcom.layla)のみを対象としており、[layla-network.ai](https://www.layla-network.ai)でも紹介されています。',
          },
          {
            type: 'note',
            text: '本レビューは、Laylaの公開プライバシーポリシー、App StoreとGoogle Playの掲載情報、開発者自身の技術ブログ記事、公開されているユーザーレビューに基づき、2026年9月時点で確認したものです。PromptQuorumは本レビューのために独自のハンズオンテストやベンチマークをLaylaに対して実施していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-layla',
        title: 'Laylaとは?',
        content: [
          '**Laylaは、[llama.cpp](https://github.com/ggml-org/llama.cpp)を使ってGGUF形式のオープンウェイト言語モデルを端末上でローカルに実行する、ペルソナベースのAIコンパニオンを軸としたAndroid・iOS向けモバイルアプリです。** 汎用チャットクライアントとして自らを位置づけるのではなく、Laylaはキャラクター・ロールプレイ機能に力を入れています。ユーザーはカスタマイズ可能なAIパーソナリティを作成またはダウンロードでき、複数のキャラクターとグループ会話を行い、内蔵のStable Diffusion 1.5パイプラインを通じてローカルに画像を生成できます。',
          '開発者自身の[プライバシーポリシー](https://blog.layla-network.ai/privacy)によれば、「当アプリのコア機能はお使いの端末上でオフラインに動作するよう設計されています」とされ、端末外にデータを送信するアクションの前には警告と確認メッセージを表示するとされています。これとは別に、開発者は「Layla Cloud」というオプションのクラウドベースモードも提供しており、これは自社のストア掲載情報で「プレミアムアプリ『Layla』のクラウド版」と説明され、ローカルモデルを管理せずにキャラクターチャットを利用したい技術に詳しくないユーザーを対象としています。このオプションのクラウド経路は、下記のプライバシーのセクションで詳しく扱いますが、プライバシーを重視する読者が購入前に理解すべき最も重要なニュアンスです。',
        ],
        note: 'GGUFは、量子化されたオープンウェイト言語モデルを、応答のたびにクラウドAPIを呼び出す代わりに、llama.cppのようなランタイムを通じて一般向けハードウェア上で効率的に動作させるためにパッケージ化するファイル形式です。',
      },
      history: {
        id: 'history-and-developer',
        title: 'Laylaを開発したのは?',
        content: [
          '**Laylaは、オーストラリア・クイーンズランド州サウスポートに登記された[Layla Network Pty Ltd](https://www.layla-network.ai)によって公開されており、アプリは2023年8月頃に初めて公にリリースされました。** アプリを支える技術的なモデル開発は、GitHubとHugging Face上で[l3utterfly](https://github.com/l3utterfly)というユーザー名の開発者に帰属しており、[Llama2 7B Layla](https://huggingface.co/l3utterfly/llama2-7b-layla)や[OpenLLaMA 3B v2 Layla](https://huggingface.co/l3utterfly/open-llama-3b-v2-layla)など、数十個の「Layla」ブランドのファインチューニング済みオープンウェイトモデルを公開しています。これらは各モデルカード自体でLaylaアプリが使用するベースモデルとして説明されています。',
          '同じGitHubアカウントは、隣接するインフラプロジェクトも維持しています。[Layla-Server](https://github.com/l3utterfly/Layla-Server)は、OpenAI互換のリクエストをWebRTC経由で転送するラッパーで、モバイルアプリがより強力なPC上で独自のローカルモデルを動かして接続できるようにするものです。また[Layla SDK](https://github.com/l3utterfly/layla-sdk)は、Layla内で動作する独自のミニアプリを構築するためのものです。これは単一の静的なリリースというより、アプリ周辺で活発に維持されている技術エコシステムを示しています。ただし、完全にオープンソースなPocketPal AIのリポジトリとは異なり、Layla自体のアプリのソースコードは公開されていないため、MITライセンスのアプリのように内部の挙動を独自に監査することはできません。',
        ],
        items: [
          '発行元:[Layla Network Pty Ltd](https://www.layla-network.ai)、オーストラリア・クイーンズランド州サウスポートに登記。',
          '公開開始:サードパーティのアプリディレクトリによれば2023年8月頃。',
          'モデル開発:LaylaブランドのオープンウェイトファインチューニングモデルはGitHubアカウント[l3utterfly](https://github.com/l3utterfly)の下でHugging Faceに公開されている。',
          '関連プロジェクト:[Layla-Server](https://github.com/l3utterfly/Layla-Server)(WebRTC経由でアプリを自己ホスト型のPCバックエンドに接続する)、[Layla SDK](https://github.com/l3utterfly/layla-sdk)(Layla内でミニアプリを構築する)。',
          'クライアントアプリのソースコードは公開されていない — PocketPal AIやMaidと異なり、Laylaのアプリ自体はクローズドソースであり、一部の基盤モデルがオープンウェイトであっても同様。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使い始め方',
        content: [
          '**アプリ自身のストア説明と技術ブログ記事によると、Laylaでローカルチャットを始めるには購入後にいくつかのステップが必要です。** コアのローカル機能を使うためにアカウントは不要です。',
        ],
        numberedItems: [
          {
            title: 'アプリを購入してインストールする',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/layla/id6456886656)(19.99ドル)または[Google Play](https://play.google.com/store/apps/details?id=com.layla)(19.99ドル)からLaylaをダウンロードします。開発者自身のサイトから直接APKをダウンロードする、より機能が制限された無料版が提供されているとの報告もあります — お使いのプラットフォームに当てはまると仮定する前に、[layla-network.ai](https://www.layla-network.ai)で現在の提供状況を直接確認してください。',
          },
          {
            title: 'アプリにデフォルトモデルをダウンロードさせる',
            whyItMatters: '初回起動時、Laylaはチャットを開始する前に言語モデル(過去のバージョンでは約4GBと報告)をダウンロードします。これはそのモデルについて一度だけのダウンロードです。',
          },
          {
            title: 'ペルソナを選択またはカスタマイズする',
            whyItMatters: '内蔵のキャラクターを選ぶか、名前・性格・音声を持つ独自のキャラクターを作成します。Laylaのインターフェースは、単一の汎用チャットスレッドではなく、キャラクターを中心に構成されています。',
          },
          {
            title: 'オプションでカスタムGGUFモデルをインポートする',
            whyItMatters: '上級ユーザーは、アプリのデフォルトモデルの代わりに、あるいはそれに加えて、独自のGGUF形式のモデルファイルを読み込むことができます。',
          },
          {
            title: 'オフラインでチャットするか、Layla Cloudを有効にする',
            whyItMatters: 'モデルをダウンロードした後は、ローカルチャットと画像生成にネットワーク接続は不要です。Layla Cloudは明示的にインストールまたは有効化する必要がある別個のオプションのモードで、上記で説明したデフォルトのローカル体験には含まれていません。',
          },
        ],
        note: '一部のApp StoreおよびGoogle Playのレビュアーは、過去のバージョンでオフラインのモデル読み込みやカスタムモデルのインポートが不安定だったと報告しており、特にiOSで顕著だとしています。本レビューは現在の安定性を独自に検証していません — アプリに依存する前に、お使いのプラットフォームの返金期間内に初回セットアップをテストしてください。',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Laylaが対応するモデルは?',
        itemHeadings: true,
        columns: ['モデルの種類', 'アクセス方法', '典型的な用途'],
        rows: [
          {
            'モデルの種類': '同梱のデフォルトモデル',
            'アクセス方法': '初回起動時に自動でダウンロード',
            '典型的な用途': '設定不要ですぐに使える一般的なコンパニオンチャット',
          },
          {
            'モデルの種類': 'Laylaブランドのファインチューニングモデル',
            'アクセス方法': '開発者l3utterflyにより[Hugging Face](https://huggingface.co/l3utterfly)で公開(例:Llama2 7B Layla、OpenLLaMA 3B v2 Layla)',
            '典型的な用途': 'アプリのキャラクター形式に合わせて調整された、ロールプレイ・ペルソナ志向のチャット',
          },
          {
            'モデルの種類': 'カスタムGGUFインポート',
            'アクセス方法': '端末ストレージまたはHugging Faceから任意のGGUF形式ファイルを手動でインポート',
            '典型的な用途': 'すでにGGUF形式でお気に入りのオープンウェイトモデルを持っているユーザー向け',
          },
          {
            'モデルの種類': 'LiteRT-LMおよびPTE(ExecuTorch)モデル',
            'アクセス方法': '開発者の技術ブログ記事によれば、代替のオンデバイスランタイムバックエンド',
            '典型的な用途': '単純なllama.cpp/GGUFを超えた、端末またはバックエンドに特化した最適化推論',
          },
          {
            'モデルの種類': 'Stable Diffusion 1.5',
            'アクセス方法': '開発者の技術ブログ記事によれば、画像生成のため端末上でローカルに動作',
            '典型的な用途': 'クラウド画像APIなしでキャラクターやシーンの画像をローカルに生成',
          },
        ],
        note: '同梱されるモデルの正確な内容やデフォルトのダウンロードサイズは、アプリのバージョンによって変わってきました。データ通信量に制限のある回線でダウンロードする前に、アプリ内で現在のデフォルトモデルとそのサイズを確認してください。',
      },
      platform: {
        id: 'platform-availability',
        title: 'LaylaはAndroidとiPhoneで使える?',
        itemHeadings: true,
        columns: ['プラットフォーム', '提供状況', '備考'],
        rows: [
          {
            'プラットフォーム': 'iPhone / iPad',
            '提供状況': '[App Store](https://apps.apple.com/us/app/layla/id6456886656)で提供、iOS 16.4 / iPadOS 16.4以降が必要',
            '備考': 'App Storeの掲載情報には、同じアプリのMac(macOS 13.0、Apple M1以降)およびApple Vision(visionOS 1.0以降)への対応も表示されている。',
          },
          {
            'プラットフォーム': 'Android',
            '提供状況': '[Google Play](https://play.google.com/store/apps/details?id=com.layla)で提供',
            '備考': 'Google Playとは別に、開発者自身のサイトから直接APKを配布するチャネルも提供されているとの報告がある — 依存する前に現在の提供状況を直接確認すること。',
          },
          {
            'プラットフォーム': 'Windows / Linux',
            '提供状況': 'レビュー時点でネイティブのWindowsまたはLinuxデスクトップ版は確認されていない',
            '備考': '[Layla-Server](https://github.com/l3utterfly/Layla-Server)プロジェクトにより、モバイルアプリはWebRTC経由で独自のローカルバックエンドを動かすPCに接続できるが、これはネイティブのデスクトップクライアントではなくブリッジである。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Laylaの料金は?',
        content: [
          '**Laylaは、[Apple App Store](https://apps.apple.com/us/app/layla/id6456886656)と[Google Play](https://play.google.com/store/apps/details?id=com.layla)の両方で19.99ドルの買い切りです。** この基本購入に加えて、App Storeの掲載情報には、Monarch(4.99ドル)、Birdwing(19.99ドル)、Blue Morpho(29.99ドル)という名前付きのアプリ内課金プランが3種類表示されていますが、各プランが具体的に何を解放するのか(たとえばクラウド利用クレジット、プレミアムキャラクター、追加音声を含むかどうかなど)は、公開されているストア情報では完全には示されていません。購入前に、アプリ内で特定のプランに何が含まれるかを正確に確認してください。',
          '開発者自身のブログコンテンツによれば、より機能が制限された無料版のアプリが、開発者自身のサイトから直接APKでダウンロードできる形で提供されていると報告されています。これは有料のApp StoreおよびGoogle Playの掲載とは別のもので、現在の提供状況と機能セットは、本レビューから推測するのではなく[layla-network.ai](https://www.layla-network.ai)で直接確認する必要があります。',
          '別個のオプションのクラウドチャットモードであるLayla Cloudは、各ストアで独立したアプリとして無料でダウンロードできると表示されています。Layla Cloudの継続利用が無料枠を超えて定期課金やクレジットを必要とするかどうかは、本記事で確認した公開掲載情報では示されていません。',
        ],
        items: [
          '**基本アプリ:** App StoreとGoogle Playで19.99ドルの買い切り — 基本購入自体には定期課金は不要。',
          '**アプリ内課金プラン:** Monarch(4.99ドル)、Birdwing(19.99ドル)、Blue Morpho(29.99ドル) — App Storeの掲載情報に名前が記載されているが、正確な内容は公開情報では完全には示されていない。',
          '**無料/機能限定版:** 開発者自身のサイトから直接APKでダウンロードできると報告されており、有料のストア掲載とは別のもの — 現在の状況を直接確認すること。',
          '**Layla Cloud:** クラウドベースのキャラクターチャット向けの、無料でダウンロードできる別個のコンパニオンアプリ。無料枠を超えた独自の費用体系は公開掲載情報では示されていない。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー:ローカルチャット vs. Layla Cloud',
        content: [
          '**Layla自身の[プライバシーポリシー](https://blog.layla-network.ai/privacy)には「当アプリのコア機能はお使いの端末上でオフラインに動作するよう設計されています」と記載されており、端末外にデータを送信するアクションの前に、警告と確認メッセージを表示するとされています。** ポリシーでは、外向きデータの具体的なトリガーとして、Personality Hubへのキャラクターのアップロード、アプリ内「不具合を報告」機能の利用、オプションのクラウド機能の有効化を挙げています。',
          'この最後の項目 — オプションのクラウド機能 — がLayla Cloudであり、開発者はこれを独立した別個のモードとして説明しています。ポリシーによれば「Layla Cloudは、Layla内で『Layla Cloud』ミニアプリをインストールした場合にのみ有効になります」とされ、インストールまたは有効化していない場合は「Layla Cloudに関連する機能は一切有効になりません」とされています。Layla Cloudが有効な場合、開発者自身のドキュメントによれば、メッセージ・キャラクターの応答、長期記憶・PDF Digest・Dreamなどの補助機能のデータを含む会話履歴を収集するとされており、このデータは匿名化されアカウントに紐付けられませんが、デバッグやサービス改善に使用される可能性があります。ポリシーはまた、Layla Cloudが有効化前の会話を遡って収集することはないとも述べています。',
          '総合すると、これはコア機能にクラウドコンポーネントが一切ないアプリとは実質的に異なるプライバシー設計です。Laylaのデフォルトのローカルモードは、送信前に明示的な同意ゲートを設けて端末内に留まるよう設計されていますが、製品自体は、ユーザーがオンにすると匿名化された会話データを収集する、別途有効化が必要なオプションのクラウド経路を搭載しています。「そもそもオンにできるクラウドモードが存在しない」という最も強い保証を求める読者は、これを、MITライセンスの下で全コードがオープンソースであり、組み込みのクラウドチャット機能が一切ない[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比較検討すべきです。',
        ],
        items: [
          '**ローカルモード:** 開発者のポリシーによれば、オフラインで動作するよう設計されており、データが端末外に出る前にアプリが警告し確認を求めるとされている。',
          '**Layla Cloud:** ミニアプリまたは別のアプリとしてインストールされる別個のオプトインモードで、有効化すると補助機能のデータを含む匿名化された会話履歴を収集する。',
          '**遡及なし:** ポリシーによれば、Layla Cloudを有効化しても、有効化前の会話履歴が取り込まれることはない。',
          '**クローズドソース:** PocketPal AIやMaidと異なり、Laylaのクライアントアプリのコードは公開されていないため、「デフォルトでは送信しない」という主張は、独立したコード監査ではなく開発者自身のプライバシーポリシーに依拠している。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューはLaylaのネットワーク通信やソースコードを独自に監査していません。上記の説明は、開発者が公開しているプライバシーポリシーとストア掲載情報を反映したものであり、PromptQuorumによる独立したセキュリティ評価ではありません。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'コンパニオン・ロールプレイ機能',
        content: [
          '**Laylaの機能セットは、自社のアプリストア説明によれば、単純な一問一答型のチャットインターフェースよりも、ペルソナやロールプレイのユースケースを中心に構築されています。** 挙げられている機能には次のものがあります:',
        ],
        items: [
          '**カスタマイズ可能なパーソナリティ。** ユーザーは、単一の固定されたアシスタントの人格と話す代わりに、独自のペルソナを持つAIキャラクターを作成またはダウンロードできる。',
          '**グループ会話。** アプリの掲載情報によれば、同じ会話スレッドに複数のキャラクターが参加できる。',
          '**100種類以上の音声。** アプリは、キャラクターの応答をテキスト読み上げする大規模な音声ライブラリを掲載している。',
          '**Live2Dキャラクターアニメーション。** 単なるテキストインターフェースではなく、視覚的でアニメーション化されたキャラクター表現。',
          '**ローカル画像生成。** 開発者の技術ブログ記事によれば、内蔵のStable Diffusion 1.5パイプラインが端末上でキャラクターやシーンの画像を生成する。',
          '**プログラム可能なエージェント(Python)。** アプリ自身の説明によれば、上級ユーザーはPythonを使ってエージェント的な挙動をスクリプトできる。',
          '**ローカル推論に組み込みのコンテンツフィルターがない。** ローカル生成が端末自体のハードウェア上で完全に実行されるため、開発者自身の資料はこのモードにサーバー側のコンテンツモデレーション層がないと説明している。これは意図的な設計上の選択であり、適切な利用の責任をホスト型のモデレーションシステムではなく個々のユーザーに委ねるものである。',
        ],
        note: '機能の提供状況、音声ライブラリの規模、特定のモデル統合はアプリのバージョンによって変わってきました。古いマーケティング資料に記載されている内容がすべて変わらず当てはまると仮定せず、アプリ内で現在の機能の提供状況を確認してください。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Laylaを動かすにはどのハードウェアが必要?',
        content: [
          '**App Storeの掲載情報では最低8GBのRAMを推奨しており、Layla自身のマーケティングは歴史的に、廉価または古いハードウェアではなく最近のフラッグシップスマートフォンを対象としているとアプリを説明してきました。** これは、4GBのRAMで2〜4Bパラメータの小型モデルを快適にサポートする一部の競合ローカルチャットアプリよりも厳しい基準です。Laylaのコンパニオン機能(より大きなデフォルトモデル、ローカル画像生成、キャラクターアニメーション)が、実用上のハードウェアの下限を押し上げています。',
          'GGUFベースのアプリと同様、実際のメモリ要件を決定するのはアプリ自体ではなく読み込む具体的なモデルです。より小さい量子化モデルは7B以上のパラメータを持つモデルより少ないRAMで済み、チャットと並行してローカルのStable Diffusion画像生成を実行すると、テキストのみの推論を超える追加のメモリと処理のオーバーヘッドが発生します。',
        ],
        items: [
          '推奨最小構成:App Storeの掲載情報によれば8GBのRAM — このカテゴリのよりシンプルなローカルチャットアプリで一般的な4GBの下限よりも著しく高い。',
          '開発者自身のマーケティング資料によれば、古いまたは廉価なデバイスよりも、最近のフラッグシップ級スマートフォン(おおよそ直近数世代)が推奨される。',
          'ストレージ:初回起動時のデフォルトモデルダウンロードは、過去のバージョンで約4GBと報告されている。カスタムGGUFモデルとStable Diffusionのチェックポイントは、さらなるストレージ要件を追加する。',
          'ローカル画像生成(Stable Diffusion 1.5)は、テキストのみのチャットを超える処理・メモリのオーバーヘッドを追加する — RAMが少ないデバイスでこの機能を使う場合、より遅いパフォーマンスを想定すべき。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:利点と制約',
        columns: ['利点', '実際の利用での意味', '制約・注意点'],
        rows: [
          {
            '利点': 'コンパニオン・ロールプレイの奥深さ',
            '実際の利用での意味': 'ペルソナキャラクター、グループチャット、100種類以上の音声、Live2Dアニメーションは、単純なチャットインターフェースを超えるものである。',
            '制約・注意点': 'シンプルなアシスタント風チャットだけを求める読者には、PocketPal AIやPrivate LLMの方が使いやすく感じられる可能性がある。',
          },
          {
            '利点': 'ローカルなテキストと画像の生成',
            '実際の利用での意味': 'チャットとStable Diffusion 1.5による画像生成の両方が完全に端末上で動作できる。',
            '制約・注意点': 'テキストのみのローカルチャットアプリより著しく多くのRAMとストレージが必要 — App Storeは最低8GBを挙げている。',
          },
          {
            '利点': '外向きデータ送信前の明示的な同意ゲート',
            '実際の利用での意味': 'プライバシーポリシーによれば、キャラクターのアップロードや不具合報告などの機能で、端末外にデータを送信する前にアプリが警告する。',
            '制約・注意点': 'アプリには、ユーザーがオプトインすると匿名化された会話データを収集するオプションのLayla Cloudモードも搭載されている — 設計上、クラウドコンポーネントが一切ない製品ではない。',
          },
          {
            '利点': '活発なモデル・インフラ開発',
            '実際の利用での意味': 'Hugging Face上のLaylaブランドのファインチューニングモデルや、Layla-Serverなどの関連プロジェクトは、継続的な技術的取り組みを示している。',
            '制約・注意点': 'クライアントアプリ自体のソースコードは非公開のため、PocketPal AIやMaidのように挙動を独自に監査することはできない。',
          },
          {
            '利点': '19.99ドルの買い切り',
            '実際の利用での意味': 'どちらのストアでも基本アプリに定期課金は不要。',
            '制約・注意点': '公開情報では正確な内容が完全には示されていない、名前付きのアプリ内課金プランが3種類さらに存在する — 何を購入しているのかアプリ内で確認すること。',
          },
          {
            '利点': 'クロスプラットフォーム:AndroidとiOS',
            '実際の利用での意味': 'Private LLMのようなApple専用アプリと異なり、両方の主要モバイルプラットフォームで利用できる。',
            '制約・注意点': '公開されているApp Storeのレビューでは、一部の端末でクラッシュや不安定なオフライン機能が報告されている — ユーザー報告であり、PromptQuorumによる独立した検証ではない。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Laylaが向いている人',
        items: [
          '**単なるアシスタントではなく、コンパニオン/ロールプレイ型のローカルAIを求めるユーザー。** ミニマルなチャットUIよりもペルソナキャラクター、グループ会話、音声出力を重視するなら、Laylaの機能セットはまさにそのユースケース向けに構築されている。',
          '**チャットと併せてローカル画像生成を求めるユーザー。** 内蔵のStable Diffusion 1.5パイプラインにより、単一のアプリでテキストと画像生成の両方を端末上で処理できる。',
          '**無料ツールではなく一度だけアプリを購入することに抵抗がないユーザー。** 19.99ドルで、両方の主要モバイルプラットフォームで基本アプリを永続的に利用できる。',
          '**プライバシーポリシーを注意深く読み、オプトインのクラウドモードに抵抗がないユーザー。** データが端末外に出る前に明示的に警告する、デフォルトでローカルなLaylaの設計は、クラウド機能が全くない製品を必要としない読者にとって、許容できる妥協点となり得る。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Laylaが向いていない人',
        items: [
          '**クラウドコンポーネントが一切ないことが保証された製品を必要とする読者。** Laylaは有効化するとデータを収集する、オプションのクラウドモード(Layla Cloud)を搭載しているため、そもそも一度もオンにできるクラウド機能がないアプリを特に求める読者は、組み込みのクラウドチャット経路が一切ない、オープンソースの全コードを持つ[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)を選ぶべきである。',
          '**無料または完全にオープンソースなアプリを求める読者。** Laylaは19.99ドルの有料・クローズドソースアプリであり、PocketPal AI(無料、MITライセンス)やMaid(無料、MITライセンス)がこのニーズをそれぞれカバーする。',
          '**シンプルで最小限のアシスタント風チャットインターフェースを求める読者。** キャラクターとペルソナを最優先するLaylaの設計は、シンプルな一問一答形式のチャットだけを求めるユーザーには不要な複雑さを加える。Private LLMやPocketPal AIの方がよりアシスタントに近い形をしている。',
          '**RAMが少ない、または古いデバイスを使う読者。** App Storeでは最低推奨として8GBのRAMを挙げており、4GBで小型モデルを快適に動かせる複数の競合アプリよりも高い基準となっている。',
          '**企業やチーム向け機能を必要とする読者。** Laylaは管理コンソール、共有ライセンス管理、チーム請求のない単一ユーザー向けコンシューマーアプリであり、組織はサーバーサイドの自己ホスト型ローカルLLMインフラを検討すべきである。',
          '**アプリのソースコードを自分で独自に監査したい読者。** Laylaのクライアントアプリはクローズドソースであり、その水準の保証を必要とする読者は、PocketPal AI、Maid、ChatterUIなどのMITまたはAGPLライセンスの代替アプリを利用すべきである。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Laylaと代替アプリの比較',
        columns: ['アプリ', 'プラットフォーム', '料金', 'ローカル vs. クラウド', '主な違い'],
        rows: [
          {
            'アプリ': 'Layla',
            'プラットフォーム': 'Android、iPhone/iPad(App Storeの掲載情報によればMac/Vision Proにも対応)',
            '料金': '19.99ドル買い切り、加えて名前付きのIAPプラン',
            'ローカル vs. クラウド': '設計上ローカル、オプションのオプトインLayla Cloudモード',
            '主な違い': 'コンパニオン/ロールプレイ重視:ペルソナ、グループチャット、音声、ローカル画像生成',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iPhone/iPad、Android',
            '料金': '無料、オープンソース(MIT)',
            'ローカル vs. クラウド': '完全にローカル、組み込みのクラウドチャット機能なし',
            '主な違い': '無料、完全にオープンソース、ロールプレイよりもシンプルなチャット寄り',
          },
          {
            'アプリ': 'Private LLM',
            'プラットフォーム': 'iPhone/iPad/Mac(Apple専用)',
            '料金': '4.99ドル買い切り',
            'ローカル vs. クラウド': '完全にローカル、App Storeのプライバシーラベルによればクラウドへのフォールバックなし',
            '主な違い': 'OmniQuant/GPTQ量子化を用いた140以上の厳選モデル。アシスタント寄りでロールプレイ優先ではない',
          },
          {
            'アプリ': '[Enclave AI](/ja/power-local-llm/enclave-ai-review)',
            'プラットフォーム': '現在のプラットフォーム対応状況は完全レビューを参照',
            '料金': '現在の掲載情報を参照',
            'ローカル vs. クラウド': '完全レビューを参照',
            '主な違い': 'Siri/Shortcuts統合を備えたApple重視のオンデバイスアシスタント',
          },
          {
            'アプリ': '[Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay)',
            'プラットフォーム': 'Windows/Macデスクトップ(Backyard Cloudでモバイル/ウェブ同期を追加)',
            '料金': '無料のデスクトップアプリ、オプションのBackyard Cloudは月額7〜35ドル',
            'ローカル vs. クラウド': 'デフォルトでローカル、ホスト型推論向けの明確な有料クラウドプランあり',
            '主な違い': 'はるかに大きなCharacter Hubを備えたデスクトップ優先のロールプレイアプリ。クラウドプランは無料のオプトインモードではなく、料金が明確な別製品',
          },
          {
            'アプリ': '[LLM Farm](https://llmfarm.space/)',
            'プラットフォーム': 'iOS/Mac(オープンソース、GitHub:[guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            '料金': '無料、オープンソース',
            'ローカル vs. クラウド': '完全にローカル',
            '主な違い': '自身のGitHub READMEによればApp StoreとTestFlightから削除された — 依存する前に現在の提供状況を確認すること',
          },
          {
            'アプリ': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'プラットフォーム': 'クロスプラットフォームのFlutterアプリ(主にAndroid)',
            '料金': '無料、オープンソース(MIT)',
            'ローカル vs. クラウド': 'GGUF/llama.cpp経由でローカル。ユーザーが設定すればリモートAPIにも接続可能',
            '主な違い': '完全にオープンソースでロールプレイ優先ではない。リモートAPIの利用はオプトインでユーザー設定による',
          },
          {
            'アプリ': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'プラットフォーム': 'Android(ソースからビルド)',
            '料金': '無料、オープンソース(AGPL-3.0)',
            'ローカル vs. クラウド': 'GGUF/llama.cpp経由でローカル、または設定すればリモートAPIに接続',
            '主な違い': 'ロールプレイ向けのCharacter Card v2対応、完全にオープンソース、より技術的なセットアップ',
          },
          {
            'アプリ': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'プラットフォーム': 'Android',
            '料金': '無料、オープンソース',
            'ローカル vs. クラウド': 'マルチプロバイダークライアント、LiteRTプロバイダー経由のローカル推論',
            '主な違い': 'ローカル優先のコンパニオンアプリというより、マルチプロバイダークライアントとして位置づけられている',
          },
          {
            'アプリ': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'プラットフォーム': 'Android(iOSは計画中)',
            '料金': '無料、オープンソース',
            'ローカル vs. クラウド': 'Cactus Compute経由で端末上、または自己ホスト型サーバーと組み合わせ',
            '主な違い': '自己ホスト型AnythingLLMワークスペースと組み合わせる設計であり、単体のコンパニオンアプリではない',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム・料金・機能の詳細は頻繁に変わります — 判断する前に各アプリ自身の掲載情報で最新の詳細を確認してください。特にLLM FarmのApp Storeでの提供状況は、その自身のGitHub READMEがApp Storeから削除されたと説明しているため、再確認すべきです。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Laylaは無料ですか?',
            a: 'いいえ。メインのLaylaアプリはApp StoreとGoogle Playの両方で19.99ドルの買い切りです。App Storeの掲載情報には、名前付きのアプリ内課金プランが3種類(Monarch 4.99ドル、Birdwing 19.99ドル、Blue Morpho 29.99ドル)も表示されています。開発者自身のサイトから直接APKでダウンロードできる、より機能が制限された無料版が提供されているとの報告もあります — 現在の提供状況は[layla-network.ai](https://www.layla-network.ai)で確認してください。クラウドベースのチャット向けの別個のコンパニオンアプリであるLayla Cloudは、独立したアプリとして無料でダウンロードできます。',
          },
          {
            q: 'Laylaはクラウドコンポーネントが一切なく完全にオフラインで動作しますか?',
            a: '完全にではありません。Layla自身のプライバシーポリシーによれば、コアアプリはオフラインで動作するよう設計されており、データが端末外に出る前に警告します。しかしLaylaには、ユーザーがオンにすると匿名化された会話データを収集する、Layla Cloudという別途有効化が必要なモードも搭載されています。したがってLaylaは、クラウド機能が一切ないアプリのような厳密にローカル専用の製品ではありません。その強い保証を求める読者は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比較すべきです。',
          },
          {
            q: 'Laylaを開発しているのは誰ですか?',
            a: 'Laylaは、オーストラリア・クイーンズランド州サウスポートに登記された[Layla Network Pty Ltd](https://www.layla-network.ai)によって公開されています。アプリが使用するLaylaブランドのオープンウェイトファインチューニングモデルは、GitHubアカウント[l3utterfly](https://github.com/l3utterfly)の下でHugging Faceに公開されています。',
          },
          {
            q: 'Laylaはどのモデルを動かせますか?',
            a: 'Laylaは初回起動時にデフォルトモデルをダウンロードし、Hugging Face上に公開されているLaylaブランドのファインチューニングモデルや、llama.cpp経由で任意のカスタムGGUF形式のモデルファイルも読み込めます。開発者の技術ブログ記事では、LiteRT-LMおよびPTE(ExecuTorch)モデルバックエンド、画像生成向けのローカルStable Diffusion 1.5への対応も説明されています。',
          },
          {
            q: 'LaylaはAndroidとiPhoneの両方で使えますか?',
            a: 'はい。Laylaは、Android向けに[Google Play](https://play.google.com/store/apps/details?id=com.layla)で、iPhoneとiPad向けに[App Store](https://apps.apple.com/us/app/layla/id6456886656)で提供されています。App Storeの掲載情報には、同じアプリのMacおよびApple Vision対応も示されています。レビュー時点で、ネイティブのWindowsまたはLinuxデスクトップ版は確認されていません。',
          },
          {
            q: 'Laylaにはどれくらいのメモリが必要ですか?',
            a: 'App Storeの掲載情報では最低8GBのRAMを推奨しており、これはよりシンプルなテキストのみのローカルチャットアプリで一般的な約4GBの下限より高く、Laylaのより大きなデフォルトモデル、ローカル画像生成、キャラクターアニメーション機能を反映しています。',
          },
          {
            q: 'Layla Cloudとは何ですか、それはメインのLaylaアプリと同じものですか?',
            a: 'いいえ。Layla Cloudは、ローカルモデルを管理したくないユーザー向けに、クラウドベースのキャラクターチャットを提供する、別個のオプションのモードまたはミニアプリです。プライバシーポリシーによれば、ユーザーがインストールまたは有効化した場合にのみアクティブになり、アクティブな間は、デバッグやサービス改善のために匿名化された会話履歴を収集します。有効化前のデータを遡って収集することはありません。',
          },
          {
            q: 'Laylaは信頼できますか?ユーザーは問題を報告していますか?',
            a: 'レビュー時点で、LaylaはApp Storeで31件のレビューによる3.8/5の評価を得ています。一部の公開されたApp Storeレビュアーは、特にiOSでのカスタムモデルインポート周りでのクラッシュや不安定なオフライン機能を報告しています。本レビューは現在のアプリの安定性を独自に検証していません — これらをユーザー報告による観察として扱い、依存する前にお使いのプラットフォームの返金期間内にアプリをテストしてください。',
          },
          {
            q: 'AIコンパニオンアプリの「Layla」は、Expediaに買収されたAI旅行プランナーの「Layla」と同じ企業ですか?',
            a: 'いいえ。本レビューは、Layla Network Pty Ltd(App Store ID 6456886656、Google Playパッケージcom.layla)が公開しているオンデバイスAIコンパニオンアプリを対象としています。これは、Expedia Groupが2026年に買収を発表した、ベルリンを拠点とする別のAI旅行計画企業「Layla」や、「Layla – Voice Chat & Party Rooms」といった同名の他のアプリとは無関係です。',
          },
          {
            q: 'LaylaはPocketPal AIやPrivate LLMとどう比較されますか?',
            a: 'Laylaは、コンパニオン/ロールプレイに重点を置き、オプションのオプトインクラウドモードを備えた、19.99ドルの有料・クローズドソースアプリで、AndroidとiOSの両方で利用できます。PocketPal AIは無料でオープンソースであり、組み込みのクラウドチャット機能が一切ありません。Private LLMは4.99ドルの有料・クローズドソースでApple専用のアシスタント風アプリで、より大規模な厳選モデルライブラリを持ち、App Storeのプライバシーラベルによればクラウドへのフォールバックはありません。両方のモバイルプラットフォームでコンパニオン/ロールプレイの深さを求めるならLaylaを、無料で完全にローカルなオープンソースの選択肢を求めるならPocketPal AIを、洗練されたApple専用のアシスタント体験を求めるならPrivate LLMを選んでください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Laylaは、モバイルローカルAIというカテゴリにおいて真に独自性のある存在です。ペルソナ、グループチャット、100種類以上の音声、ローカル画像生成といった、PocketPal AIやPrivate LLMのようなよりシンプルなチャットアプリが手を出さないコンパニオン・ロールプレイ機能に力を入れており、19.99ドルの買い切り価格で1回の購入でAndroidとiOSの両方をカバーします。プライバシーに関する実態は、単純な「完全オフライン」という主張よりも複雑です。開発者自身のポリシーは、あらゆるデータ送信前に明示的な警告を伴う、デフォルトでローカルなコアを説明していますが、アプリにはユーザーがオンにすると匿名化された会話データを収集するオプションのLayla Cloudモードも搭載されており、これは組み込みのクラウド経路が一切ないアプリとは実質的に異なる設計です。クローズドソースのクライアント、正確な内容が完全には公開されていない3種類のアプリ内課金プラン、iOSでのオフライン機能とカスタムモデル機能に関する信頼性問題のユーザー報告と合わせて考えると、Laylaは、特にそのペルソナ/ロールプレイ機能セットを求め、そのプライバシー上のトレードオフを受け入れられる読者に向いています。利用可能な最も強いローカル専用の保証、ソースコードの完全な透明性、あるいは最も低いコストを求める読者は、代わりに[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)から検討を始めるべきです。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App Store上のLayla](https://apps.apple.com/us/app/layla/id6456886656) — 料金、アプリ内課金プラン、プラットフォーム要件、評価、バージョン履歴。',
          '[Google Play上のLayla](https://play.google.com/store/apps/details?id=com.layla) — Androidでの提供状況と料金。',
          '[Layla公式サイト](https://www.layla-network.ai) — 製品概要と開発者公開の機能説明。',
          '[Laylaプライバシーポリシー](https://blog.layla-network.ai/privacy) — ローカルとクラウドのデータ取り扱い、Layla Cloudの範囲、データ収集に関する開示。',
          '[App Store上のLayla(Cloud)](https://apps.apple.com/gb/app/layla-cloud/id6764344419) — 別個のオプションのクラウドモードアプリの掲載情報。',
          '[GitHub上のl3utterfly](https://github.com/l3utterfly)および[Hugging Face上のl3utterfly](https://huggingface.co/l3utterfly) — Laylaブランドのモデル公開および関連インフラプロジェクト(Layla-Server、Layla SDK)。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AI レビュー](/ja/power-local-llm/pocketpal-ai-review) — 組み込みのクラウドチャット機能がない、無料で完全にオープンソース・完全にローカルな代替アプリ。',
          '[Private LLM レビュー](/ja/power-local-llm/private-llm-review) — より大規模な厳選モデルライブラリを持つ、4.99ドルのApple専用アシスタント風アプリ。',
          '[Enclave AI レビュー](/ja/power-local-llm/enclave-ai-review) — 比較対象となる、もう一つのApple重視のオンデバイスAIアプリ。',
          '[Backyard AI レビュー:ローカルAIキャラクターチャットとロールプレイ](/ja/power-local-llm/backyard-ai-review-local-roleplay) — はるかに大きなキャラクターライブラリと料金が明確なクラウドプランを持つ、デスクトップ優先のロールプレイ代替アプリ。',
          '[2026年版 Android向けベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — 比較対象となる、より幅広いAndroidアプリの総まとめ。',
          '[2026年版 iPhone向けベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — 比較対象となる、より幅広いiOSアプリの総まとめ。',
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
    heroImage: '/images/layla-review-hero-pt.webp',
    title: 'Layla: Análise (2026) — App de Companheiro de IA no Dispositivo para Android e iOS',
    seoTitle: 'Layla Análise 2026: App de IA Local, Preço e Privacidade',
    intro:
      'A Layla, criada pela [Layla Network Pty Ltd](https://www.layla-network.ai) — uma empresa registrada na Austrália também vinculada no GitHub ao desenvolvedor [l3utterfly](https://github.com/l3utterfly), que publica a família de modelos de peso aberto ajustados "Layla" —, é um app pago para Android e iOS voltado para executar um companheiro de IA pessoal localmente no celular, com recursos de persona, roleplay e personagens que vão além do chat simples. Custa [$19,99 em compra única](https://apps.apple.com/us/app/layla/id6456886656) tanto na App Store quanto no Google Play, e a ficha da App Store ainda mostra três níveis de compra dentro do app com nomes próprios. O chat principal da Layla é projetado para rodar inteiramente no dispositivo usando modelos GGUF via llama.cpp, mas o app também traz um modo de nuvem opcional e ativado separadamente, chamado Layla Cloud, que não vem ativado por padrão — esta análise mostra exatamente o que roda localmente, o que não roda, quanto custa de fato e para quem o app é indicado, com base na própria política de privacidade do desenvolvedor, nas fichas das lojas de apps e em documentação pública, e não em testes práticos independentes.',
    metaDescription:
      'Análise da Layla 2026: app de companheiro de IA no dispositivo para Android e iOS por $19,99. O que realmente roda localmente vs. o modo opcional Layla Cloud, preço exato, modelos e para quem é indicado.',
    twitterDescription:
      'Análise da Layla 2026: um app de companheiro de IA local para Android e iOS por $19,99, com recursos de roleplay e persona. O que roda no dispositivo, o que o modo de nuvem opcional coleta e como se compara ao PocketPal AI e ao Private LLM.',
    audience:
      'Usuários de Android e iOS avaliando um app pago de companheiro/roleplay de IA no dispositivo que precisam saber com precisão o que permanece local versus o que um modo de nuvem opcional coleta, além do preço exato e ressalvas de confiabilidade a partir de avaliações públicas nas lojas de apps.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Layla review',
    targetKeywords: [
      'layla ai análise',
      'layla app llm local',
      'layla network ai',
      'layla ai android iphone',
      'layla ai privacidade nuvem',
      'layla ai preço',
      'app de companheiro de ia local',
      'layla vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama2 7B Layla', 'OpenLLaMA 3B v2 Layla', 'GGUF models', 'Stable Diffusion 1.5'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**A Layla é um app de compra única por $19,99 para Android e iOS, criado pela [Layla Network Pty Ltd](https://www.layla-network.ai), que executa modelos de linguagem GGUF no dispositivo para um companheiro de IA baseado em personas, com personagens de roleplay, vozes e geração de imagens.** Segundo a própria [política de privacidade](https://blog.layla-network.ai/privacy) do desenvolvedor, a funcionalidade principal do app é projetada para funcionar offline, e o app exibe um aviso antes de qualquer dado sair do dispositivo — mas a Layla também traz um modo de nuvem opcional e ativado separadamente, chamado Layla Cloud, o que é diferente do design totalmente local, sem nenhum componente de nuvem, de um app como o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review). Leitores que buscam a garantia mais forte possível de que "nunca toca em um servidor" devem avaliar essa distinção com cuidado antes de comprar.',
    quickAnswerTop: {
      pt: {
        question: 'A Layla é um app de IA totalmente offline, apenas local?',
        answer:
          'Em grande parte, mas não totalmente. O chat principal e os recursos de personagem da Layla são projetados para rodar no dispositivo via modelos GGUF, e sua política de privacidade afirma que o app avisa antes que qualquer dado saia do celular. No entanto, a Layla também oferece um modo de nuvem opcional, ativado separadamente, chamado Layla Cloud, que coleta dados de conversa anonimizados quando ativo — portanto, a Layla não é um app estritamente local como alguns concorrentes.',
        bullets: [
          'Compra única de $19,99 na [App Store](https://apps.apple.com/us/app/layla/id6456886656) e no [Google Play](https://play.google.com/store/apps/details?id=com.layla), além de três níveis de compra dentro do app com nomes próprios.',
          'O chat principal roda no dispositivo via modelos GGUF com llama.cpp; a política de privacidade do desenvolvedor afirma que o app avisa antes que qualquer dado saia do dispositivo.',
          'O Layla Cloud é um modo separado e opcional que coleta dados de conversa anonimizados quando ativado — vem desativado por padrão.',
          'Foco em roleplay: personagens de persona, conversas em grupo, mais de 100 vozes TTS e geração local de imagens com Stable Diffusion 1.5, segundo as fichas das lojas de apps.',
          'A avaliação na App Store é de 3,8/5 com 31 avaliações no momento desta análise; algumas resenhas mencionam recursos offline pouco confiáveis — trate isso como relato de usuários, não verificado de forma independente pela PromptQuorum.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é a Layla?', anchor: 'what-is-layla' },
      { label: 'Quem criou a Layla?', anchor: 'history-and-developer' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Quais modelos a Layla suporta?', anchor: 'models-supported' },
      { label: 'A Layla está disponível no Android e no iPhone?', anchor: 'platform-availability' },
      { label: 'Quanto custa a Layla?', anchor: 'pricing' },
      { label: 'Privacidade: chat local vs. Layla Cloud', anchor: 'privacy' },
      { label: 'Recursos de companheiro e roleplay', anchor: 'key-features' },
      { label: 'Qual hardware é necessário?', anchor: 'hardware-requirements' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Para quem a Layla é indicada', anchor: 'who-should-use' },
      { label: 'Para quem a Layla não é indicada', anchor: 'who-should-not-use' },
      { label: 'Layla vs. alternativas', anchor: 'vs-alternatives' },
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
            text: 'A Layla é um app de Android e iOS de compra única por $19,99, criado pela Layla Network Pty Ltd, que executa modelos de linguagem GGUF no dispositivo para um companheiro de IA baseado em personas, e oferece separadamente um modo de nuvem opcional chamado Layla Cloud.',
          },
          {
            type: 'plain-terms',
            text: 'É um app de chat estilo companheiro que você instala para conversar com um personagem de IA personalizável que roda majoritariamente no seu próprio celular em vez de em um servidor de empresa — diferente de alguns apps totalmente locais, ele também tem um modo online opcional que pode ser ativado para chat baseado em nuvem, não ativado por padrão.',
          },
        ],
        items: [
          'Preço: [compra única de $19,99](https://apps.apple.com/us/app/layla/id6456886656) na App Store e no Google Play, além de três níveis de compra dentro do app cujo conteúdo exato não é totalmente detalhado na ficha pública.',
          'Desenvolvedor: [Layla Network Pty Ltd](https://www.layla-network.ai), empresa registrada na Austrália; os modelos ajustados da marca Layla no Hugging Face são publicados sob a conta do GitHub [l3utterfly](https://github.com/l3utterfly).',
          'O chat principal roda no dispositivo via modelos GGUF com llama.cpp; o app também suporta backends de modelo LiteRT-LM e PTE (ExecuTorch), além de geração local de imagens com Stable Diffusion 1.5, segundo os próprios posts técnicos do desenvolvedor.',
          'Privacidade: segundo a [política de privacidade](https://blog.layla-network.ai/privacy) do desenvolvedor, a funcionalidade principal é projetada para funcionar offline e o app avisa antes que dados saiam do dispositivo — exceto no modo separado e opcional Layla Cloud, desativado por padrão.',
          'Foco em companheiro e roleplay: personas personalizáveis, conversas em grupo, mais de 100 vozes e animação de personagem Live2D distinguem o app de apps de chat mais simples nessa categoria.',
          'Avaliação na App Store: 3,8/5 com 31 avaliações no momento desta análise; algumas resenhas mencionam travamentos e comportamento offline pouco confiável — uma preocupação relatada por usuários que esta análise não verificou de forma independente.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Observação sobre o nome: "Layla" é usado por vários apps e empresas sem relação entre si, incluindo uma empresa de planejamento de viagens com IA adquirida pela Expedia Group em 2026, e um app social separado chamado "Layla – Voice Chat & Party Rooms". Esta análise cobre apenas o app de companheiro de IA no dispositivo publicado pela Layla Network Pty Ltd (ID na App Store 6456886656, pacote do Google Play com.layla), também divulgado em [layla-network.ai](https://www.layla-network.ai).',
          },
          {
            type: 'note',
            text: 'Esta análise se baseia na política de privacidade pública da Layla, nas fichas da App Store e do Google Play, nos posts técnicos do próprio desenvolvedor e em avaliações de usuários visíveis publicamente, verificadas em setembro de 2026. A PromptQuorum não realizou testes práticos nem benchmarks independentes da Layla para esta análise.',
          },
        ],
      },
      overview: {
        id: 'what-is-layla',
        title: 'O que é a Layla?',
        content: [
          '**A Layla é um app móvel para Android e iOS construído em torno de um companheiro de IA baseado em personas que roda principalmente no dispositivo, usando o [llama.cpp](https://github.com/ggml-org/llama.cpp) para executar modelos de linguagem de peso aberto em formato GGUF localmente.** Em vez de se posicionar como um cliente de chat de propósito geral, a Layla aposta em recursos de personagem e roleplay: os usuários podem criar ou baixar personalidades de IA personalizáveis, manter conversas em grupo com vários personagens e gerar imagens localmente por meio de um pipeline integrado de Stable Diffusion 1.5.',
          'Segundo sua própria [política de privacidade](https://blog.layla-network.ai/privacy), "a funcionalidade principal do nosso app é projetada para rodar offline no seu dispositivo", e a política afirma que o app exibe um aviso e uma mensagem de confirmação antes de qualquer ação que envie dados para fora do dispositivo. Separadamente, o desenvolvedor também oferece um modo opcional baseado em nuvem — o Layla Cloud —, descrito na própria ficha da loja como "a versão em nuvem do app premium \'Layla\'", voltado a usuários menos técnicos que querem chat de personagens sem gerenciar modelos locais. Esse caminho opcional para a nuvem, detalhado na seção de privacidade abaixo, é a nuance mais importante para um leitor preocupado com privacidade entender antes de comprar.',
        ],
        note: 'GGUF é um formato de arquivo para empacotar modelos de linguagem de peso aberto quantizados de modo que rodem de forma eficiente em hardware de consumo por meio de runtimes como o llama.cpp, em vez de chamar uma API na nuvem a cada resposta.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Quem criou a Layla?',
        content: [
          '**A Layla é publicada pela [Layla Network Pty Ltd](https://www.layla-network.ai), uma empresa registrada em Southport, Queensland, Austrália, e o app apareceu publicamente pela primeira vez por volta de agosto de 2023.** O trabalho técnico de modelos por trás do app é atribuído, no GitHub e no Hugging Face, a um desenvolvedor com o nome de usuário [l3utterfly](https://github.com/l3utterfly), que publicou dezenas de modelos de peso aberto ajustados da marca "Layla" — incluindo o [Llama2 7B Layla](https://huggingface.co/l3utterfly/llama2-7b-layla) e o [OpenLLaMA 3B v2 Layla](https://huggingface.co/l3utterfly/open-llama-3b-v2-layla) —, descritos em suas próprias fichas de modelo como modelos-base usados pelo app Layla.',
          'A mesma conta do GitHub também mantém projetos de infraestrutura relacionados: o [Layla-Server](https://github.com/l3utterfly/Layla-Server), um wrapper que encaminha solicitações compatíveis com a OpenAI via WebRTC para que o app móvel se conecte a um PC mais potente rodando seu próprio modelo local, e um [Layla SDK](https://github.com/l3utterfly/layla-sdk) para criar mini-apps personalizados dentro da Layla. Isso aponta para um ecossistema técnico ativamente mantido em torno do app, e não apenas para uma versão estática única — embora, diferente do repositório totalmente open source do PocketPal AI, o código-fonte do cliente da Layla não seja publicado, de modo que seu comportamento interno não pode ser auditado de forma independente como o de um app com licença MIT.',
        ],
        items: [
          'Editora: [Layla Network Pty Ltd](https://www.layla-network.ai), registrada em Southport, Queensland, Austrália.',
          'Lançamento público: por volta de agosto de 2023, segundo diretórios de apps de terceiros.',
          'Desenvolvimento de modelos: modelos de peso aberto ajustados da marca Layla publicados no Hugging Face sob a conta do GitHub [l3utterfly](https://github.com/l3utterfly).',
          'Projetos relacionados: [Layla-Server](https://github.com/l3utterfly/Layla-Server) (conecta o app a um backend de PC auto-hospedado via WebRTC) e [Layla SDK](https://github.com/l3utterfly/layla-sdk) (criar mini-apps dentro da Layla).',
          'O código-fonte do app cliente não é público — diferente do PocketPal AI ou do Maid, o próprio app da Layla é de código fechado, mesmo que alguns de seus modelos subjacentes sejam de peso aberto.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Configurar a Layla para chat local exige alguns passos após a compra, segundo a própria descrição da loja e os posts técnicos do app.** Não é necessária conta para usar os recursos locais principais.',
        ],
        numberedItems: [
          {
            title: 'Comprar e instalar o app',
            whyItMatters: 'Baixe a Layla pela [App Store](https://apps.apple.com/us/app/layla/id6456886656) ($19,99) ou pelo [Google Play](https://play.google.com/store/apps/details?id=com.layla) ($19,99). Uma versão gratuita mais limitada foi, segundo relatos, distribuída via download direto de APK no próprio site do desenvolvedor — verifique diretamente em [layla-network.ai](https://www.layla-network.ai) a disponibilidade atual dessa opção antes de assumir que ela se aplica à sua plataforma.',
          },
          {
            title: 'Deixar o app baixar o modelo padrão',
            whyItMatters: 'No primeiro uso, a Layla baixa um modelo de linguagem (relatado em torno de 4 GB em versões anteriores) antes de você poder conversar; esse é um download único para esse modelo.',
          },
          {
            title: 'Escolher ou personalizar uma persona',
            whyItMatters: 'Escolha um personagem embutido ou crie o seu com nome, personalidade e voz — a interface da Layla é organizada em torno de personagens, e não de um único chat genérico.',
          },
          {
            title: 'Opcionalmente, importar um modelo GGUF personalizado',
            whyItMatters: 'Usuários avançados podem carregar seu próprio arquivo de modelo em formato GGUF em vez dos, ou além dos, modelos padrão do app.',
          },
          {
            title: 'Conversar offline, ou ativar o Layla Cloud',
            whyItMatters: 'O chat local e a geração de imagens não exigem conexão de rede depois que um modelo é baixado. O Layla Cloud é um modo separado e opcional que precisa ser explicitamente instalado ou ativado — não faz parte da experiência local padrão descrita acima.',
          },
        ],
        note: 'Algumas avaliações na App Store e no Google Play relatam que o carregamento de modelos offline e a importação de modelos personalizados foram pouco confiáveis em versões anteriores, especialmente no iOS. Esta análise não verificou de forma independente a estabilidade atual — teste a configuração inicial dentro do prazo de reembolso da sua plataforma antes de confiar no app.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quais modelos a Layla suporta?',
        itemHeadings: true,
        columns: ['Tipo de modelo', 'Método de acesso', 'Uso típico'],
        rows: [
          {
            'Tipo de modelo': 'Modelo padrão incluído',
            'Método de acesso': 'Baixado automaticamente no primeiro uso',
            'Uso típico': 'Chat de companheiro geral pronto para uso, sem configuração',
          },
          {
            'Tipo de modelo': 'Modelos ajustados da marca Layla',
            'Método de acesso': 'Publicados no [Hugging Face](https://huggingface.co/l3utterfly) pelo desenvolvedor l3utterfly (ex.: Llama2 7B Layla, OpenLLaMA 3B v2 Layla)',
            'Uso típico': 'Chat orientado a roleplay e persona, ajustado ao formato de personagem do app',
          },
          {
            'Tipo de modelo': 'Importação de GGUF personalizado',
            'Método de acesso': 'Importação manual de qualquer arquivo em formato GGUF do armazenamento do dispositivo ou do Hugging Face',
            'Uso típico': 'Usuários que já têm um modelo de peso aberto preferido em formato GGUF',
          },
          {
            'Tipo de modelo': 'Modelos LiteRT-LM e PTE (ExecuTorch)',
            'Método de acesso': 'Backends de execução no dispositivo alternativos, segundo os posts técnicos do desenvolvedor',
            'Uso típico': 'Inferência otimizada específica de dispositivo ou backend, além do simples llama.cpp/GGUF',
          },
          {
            'Tipo de modelo': 'Stable Diffusion 1.5',
            'Método de acesso': 'Roda localmente no dispositivo para geração de imagens, segundo os posts técnicos do desenvolvedor',
            'Uso típico': 'Geração local de imagens de personagens ou cenas sem uma API de imagens na nuvem',
          },
        ],
        note: 'A identidade exata dos modelos incluídos e os tamanhos de download padrão mudaram entre versões do app; confirme o modelo padrão atual e seu tamanho dentro do app antes de baixá-lo com um plano de dados limitado.',
      },
      platform: {
        id: 'platform-availability',
        title: 'A Layla está disponível no Android e no iPhone?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidade', 'Observações'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidade': 'Disponível na [App Store](https://apps.apple.com/us/app/layla/id6456886656), exige iOS 16.4 / iPadOS 16.4 ou posterior',
            'Observações': 'A ficha da App Store também mostra compatibilidade com Mac (macOS 13.0, Apple M1 ou posterior) e Apple Vision (visionOS 1.0 ou posterior) para o mesmo app.',
          },
          {
            'Plataforma': 'Android',
            'Disponibilidade': 'Disponível no [Google Play](https://play.google.com/store/apps/details?id=com.layla)',
            'Observações': 'Segundo relatos, também foi oferecido um canal de distribuição direta de APK a partir do próprio site do desenvolvedor, separado do Google Play — verifique a disponibilidade atual diretamente antes de confiar nisso.',
          },
          {
            'Plataforma': 'Windows / Linux',
            'Disponibilidade': 'Nenhuma versão nativa de desktop para Windows ou Linux confirmada no momento desta análise',
            'Observações': 'O projeto [Layla-Server](https://github.com/l3utterfly/Layla-Server) permite que o app móvel se conecte a um PC rodando seu próprio backend local via WebRTC, o que é uma ponte, não um cliente de desktop nativo.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Quanto custa a Layla?',
        content: [
          '**A Layla custa $19,99 em compra única tanto na [Apple App Store](https://apps.apple.com/us/app/layla/id6456886656) quanto no [Google Play](https://play.google.com/store/apps/details?id=com.layla).** Além dessa compra base, a ficha da App Store mostra três níveis de compra dentro do app com nomes próprios — Monarch ($4,99), Birdwing ($19,99) e Blue Morpho ($29,99) —, mas a ficha pública da loja não detalha totalmente o que cada nível desbloqueia (por exemplo, se cobrem créditos de uso em nuvem, personagens premium ou vozes adicionais). Confirme exatamente o que um determinado nível inclui dentro do app antes de comprá-lo.',
          'Segundo o próprio conteúdo de blog do desenvolvedor, uma versão gratuita mais limitada do app foi, aparentemente, distribuída via download direto de APK a partir do próprio site do desenvolvedor — isso é diferente das fichas pagas da App Store e do Google Play, e sua disponibilidade e conjunto de recursos atuais devem ser verificados diretamente em [layla-network.ai](https://www.layla-network.ai), em vez de presumidos a partir desta análise.',
          'O Layla Cloud, o modo de chat em nuvem opcional e separado, aparece como download gratuito como app próprio nas lojas; se o uso contínuo do Layla Cloud exige assinatura ou créditos além do nível gratuito não é detalhado na ficha pública revisada para este artigo.',
        ],
        items: [
          '**App base:** compra única de $19,99 na App Store e no Google Play — não é exigida assinatura para a compra base em si.',
          '**Níveis de compra dentro do app:** Monarch ($4,99), Birdwing ($19,99), Blue Morpho ($29,99) — nomeados na ficha da App Store; conteúdo exato não totalmente detalhado publicamente.',
          '**Versão gratuita/limitada:** segundo relatos, disponível via download direto de APK a partir do próprio site do desenvolvedor, separada das fichas pagas das lojas — verifique o status atual diretamente.',
          '**Layla Cloud:** um app complementar separado e gratuito para chat de personagens baseado em nuvem; sua própria estrutura de custos além do nível gratuito não é detalhada na ficha pública.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade: chat local vs. Layla Cloud',
        content: [
          '**A própria [política de privacidade](https://blog.layla-network.ai/privacy) da Layla afirma que "a funcionalidade principal do nosso app é projetada para rodar offline no seu dispositivo", e que o app exibirá um aviso e uma mensagem de confirmação antes de qualquer ação que envie seus dados para fora do dispositivo.** A política nomeia gatilhos específicos para saída de dados: enviar um personagem para o Personality Hub, usar o recurso "Reportar um bug" dentro do app e ativar recursos de nuvem opcionais.',
          'Esse último item — recursos de nuvem opcionais — é o Layla Cloud, descrito pelo desenvolvedor como um modo distinto e separado: segundo a política, "o Layla Cloud só é ativado se você instalar o mini-app \'Layla Cloud\' dentro da Layla", e se ele não estiver instalado ou ativado, "nenhum recurso relacionado ao Layla Cloud fica habilitado". Quando o Layla Cloud está ativo, a própria documentação do desenvolvedor afirma que ele coleta o histórico de conversas — suas mensagens, as respostas dos personagens e dados de recursos auxiliares como Memória de Longo Prazo, PDF Digest e Dream —, e que esses dados são anonimizados e não vinculados à sua conta, embora possam ser usados para depuração ou para melhorar o serviço. A política também afirma que o Layla Cloud não coleta retroativamente conversas anteriores à sua ativação.',
          'No conjunto, esse é um design de privacidade materialmente diferente de um app cuja funcionalidade principal não tem nenhum componente de nuvem: o modo local padrão da Layla é projetado para permanecer no dispositivo, com uma barreira explícita de consentimento antes de qualquer transmissão, mas o próprio produto oferece um caminho opcional e ativado separadamente para a nuvem, que coleta dados de conversa anonimizados quando o usuário o ativa. Leitores que buscam a garantia mais forte possível — um produto sem nenhum modo de nuvem para ativar — devem comparar isso com o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), cujo código é totalmente open source sob licença MIT, sem nenhum recurso de chat em nuvem embutido.',
        ],
        items: [
          '**Modo local:** segundo a política do desenvolvedor, projetado para rodar offline; o app é descrito como avisando e pedindo confirmação antes de os dados saírem do dispositivo.',
          '**Layla Cloud:** um modo separado e opcional (instalado como mini-app ou app distinto) que coleta histórico de conversas anonimizado, incluindo dados de recursos auxiliares, quando ativado.',
          '**Não retroativo:** segundo a política, ativar o Layla Cloud não traz o histórico de conversas anterior à ativação.',
          '**Código fechado:** diferente do PocketPal AI ou do Maid, o código do app cliente da Layla não é publicado, então a afirmação de "sem transmissão por padrão" se baseia na própria política de privacidade do desenvolvedor, e não em uma auditoria de código independente.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise não auditou de forma independente o tráfego de rede nem o código-fonte da Layla. A descrição acima reflete a política de privacidade publicada pelo desenvolvedor e as fichas das lojas, não uma avaliação de segurança independente feita pela PromptQuorum.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos de companheiro e roleplay',
        content: [
          '**O conjunto de recursos da Layla é construído, segundo suas próprias descrições nas lojas de apps, mais em torno de casos de uso de persona e roleplay do que de uma interface de chat simples de perguntas e respostas.** Os recursos mencionados incluem:',
        ],
        items: [
          '**Personalidades personalizáveis.** Os usuários podem criar ou baixar personagens de IA com personas distintas, em vez de conversar com uma única identidade de assistente fixa.',
          '**Conversas em grupo.** Segundo a ficha do app, vários personagens podem participar da mesma conversa.',
          '**Mais de 100 vozes.** O app lista uma grande biblioteca de vozes para respostas de personagem em texto-para-fala.',
          '**Animação de personagem Live2D.** Representações visuais e animadas de personagens, em vez de uma interface apenas de texto.',
          '**Geração local de imagens.** Um pipeline integrado de Stable Diffusion 1.5 roda no dispositivo para imagens de personagens ou cenas, segundo os posts técnicos do desenvolvedor.',
          '**Agentes programáveis (Python).** Usuários avançados podem programar comportamentos estilo agente usando Python, segundo a própria descrição do app.',
          '**Sem filtro de conteúdo embutido na inferência local.** Como a geração local roda inteiramente no próprio hardware do dispositivo, os próprios materiais do desenvolvedor a descrevem como sem uma camada de moderação de conteúdo do lado do servidor para esse modo — uma escolha de design deliberada, que transfere a responsabilidade pelo uso apropriado para o usuário individual, em vez de para um sistema de moderação hospedado.',
        ],
        note: 'A disponibilidade de recursos, o tamanho da biblioteca de vozes e certas integrações de modelo mudaram entre versões do app; confirme a disponibilidade atual dos recursos dentro do app em vez de presumir que tudo descrito em material de marketing antigo ainda se aplica sem mudanças.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Qual hardware é necessário para rodar a Layla?',
        content: [
          '**A ficha da App Store recomenda no mínimo 8 GB de RAM, e o próprio marketing da Layla historicamente descreveu o app como voltado a smartphones topo de linha recentes, em vez de hardware econômico ou antigo.** Esse é um patamar mais rígido do que alguns apps de chat local concorrentes, que suportam confortavelmente modelos menores de 2–4B parâmetros com 4 GB de RAM — os recursos de companheiro da Layla (modelos padrão maiores, geração local de imagens e animação de personagem) elevam o piso prático de hardware.',
          'Como em qualquer app baseado em GGUF, o modelo específico carregado — não o app em si — é o que realmente determina as necessidades de memória: um modelo quantizado menor precisa de menos RAM do que um modelo de 7B+ parâmetros, e rodar a geração local de imagens com Stable Diffusion junto com o chat adiciona sobrecarga extra de memória e processamento além da inferência apenas de texto.',
        ],
        items: [
          'Mínimo recomendado: 8 GB de RAM, segundo a ficha da App Store — significativamente maior que o piso de 4 GB comum entre apps de chat local mais simples nessa categoria.',
          'Smartphones topo de linha recentes (aproximadamente as últimas gerações) são recomendados em vez de dispositivos mais antigos ou econômicos, segundo os próprios materiais de marketing do desenvolvedor.',
          'Armazenamento: o download do modelo padrão no primeiro uso foi relatado em torno de 4 GB em versões anteriores; modelos GGUF personalizados e checkpoints de Stable Diffusion adicionam requisitos de armazenamento extras.',
          'A geração local de imagens (Stable Diffusion 1.5) adiciona sobrecarga de processamento e memória além do chat apenas de texto — espere desempenho mais lento em dispositivos com menos RAM ao usar esse recurso.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'O que significa na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Vantagem': 'Profundidade de companheiro e roleplay',
            'O que significa na prática': 'Personagens de persona, chat em grupo, mais de 100 vozes e animação Live2D vão além de uma interface de chat simples.',
            'Limitação / ressalva': 'Leitores que só querem um chat simples estilo assistente podem achar o PocketPal AI ou o Private LLM mais fáceis de usar.',
          },
          {
            'Vantagem': 'Geração local de texto e imagem',
            'O que significa na prática': 'Tanto o chat quanto a geração de imagens com Stable Diffusion 1.5 podem rodar inteiramente no dispositivo.',
            'Limitação / ressalva': 'Exige significativamente mais RAM e armazenamento do que apps de chat local apenas de texto; a App Store lista um mínimo de 8 GB.',
          },
          {
            'Vantagem': 'Barreira explícita de consentimento antes do envio de dados',
            'O que significa na prática': 'Segundo a política de privacidade, o app avisa antes de enviar dados para fora do dispositivo em recursos como envio de personagens ou relatos de bugs.',
            'Limitação / ressalva': 'O app também traz um modo opcional Layla Cloud que coleta dados de conversa anonimizados assim que o usuário o ativa — não é, por design, um produto sem nenhum componente de nuvem.',
          },
          {
            'Vantagem': 'Desenvolvimento ativo de modelos e infraestrutura',
            'O que significa na prática': 'Modelos ajustados da marca Layla no Hugging Face e projetos relacionados como o Layla-Server mostram trabalho técnico contínuo.',
            'Limitação / ressalva': 'O código-fonte do próprio app cliente é fechado, então seu comportamento não pode ser auditado de forma independente como o do PocketPal AI ou do Maid.',
          },
          {
            'Vantagem': 'Compra única de $19,99',
            'O que significa na prática': 'Nenhuma assinatura é exigida para o app base em nenhuma das duas lojas.',
            'Limitação / ressalva': 'Existem três níveis adicionais de compra dentro do app cujo conteúdo exato não é totalmente detalhado na ficha pública — confirme dentro do app exatamente o que está comprando.',
          },
          {
            'Vantagem': 'Multiplataforma: Android e iOS',
            'O que significa na prática': 'Disponível nas duas principais plataformas móveis, diferente de apps exclusivos da Apple como o Private LLM.',
            'Limitação / ressalva': 'Avaliações públicas na App Store relatam travamentos e recursos offline pouco confiáveis em alguns dispositivos — relato de usuários, não verificado de forma independente pela PromptQuorum.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem a Layla é indicada',
        items: [
          '**Usuários que querem uma IA local estilo companheiro/roleplay, não apenas um assistente.** Se personagens de persona, conversas em grupo e saída de voz importam mais do que uma interface de chat mínima, o conjunto de recursos da Layla é construído especificamente para esse caso de uso.',
          '**Usuários que querem geração local de imagens junto com o chat.** O pipeline integrado de Stable Diffusion 1.5 permite que um único app cuide tanto de texto quanto de geração de imagens no dispositivo.',
          '**Usuários confortáveis em pagar por um app uma única vez em vez de usar uma ferramenta gratuita.** $19,99 compram o app base de forma definitiva nas duas principais plataformas móveis.',
          '**Usuários que leem políticas de privacidade com atenção e aceitam um modo de nuvem opcional.** O design local por padrão da Layla, com aviso explícito antes de qualquer dado sair do dispositivo, pode ser um meio-termo aceitável para leitores que não precisam de um produto com absolutamente nenhuma capacidade de nuvem.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem a Layla não é indicada',
        items: [
          '**Leitores que precisam de um produto garantidamente sem componente de nuvem.** Como a Layla traz um modo de nuvem opcional (Layla Cloud) que coleta dados anonimizados uma vez ativado, leitores que especificamente querem um app sem nenhum recurso de nuvem para ativar em algum momento devem escolher o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), cujo código totalmente aberto não tem nenhum caminho de chat em nuvem embutido.',
          '**Leitores que querem um app gratuito ou totalmente open source.** A Layla é um app pago e de código fechado por $19,99; o PocketPal AI (gratuito, licença MIT) e o Maid (gratuito, licença MIT) cobrem essa necessidade em vez disso.',
          '**Leitores que querem uma interface de chat simples e minimalista estilo assistente.** O design da Layla centrado em personagens e personas adiciona complexidade que usuários que só querem um chat simples de perguntas e respostas podem não desejar; o Private LLM ou o PocketPal AI têm um formato mais de assistente.',
          '**Leitores com dispositivos de pouca RAM ou mais antigos.** A App Store lista 8 GB de RAM como recomendação mínima, mais alta que vários apps concorrentes que rodam modelos menores confortavelmente com 4 GB.',
          '**Leitores que precisam de recursos empresariais ou de equipe.** A Layla é um app de consumo para um único usuário, sem console de administração, licenciamento compartilhado ou faturamento de equipe; organizações devem considerar infraestrutura de LLM local auto-hospedada do lado do servidor em vez disso.',
          '**Leitores que querem auditar de forma independente o código-fonte do app.** O app cliente da Layla é de código fechado; leitores que precisam desse nível de garantia devem usar uma alternativa com licença MIT ou AGPL, como PocketPal AI, Maid ou ChatterUI.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Layla vs. alternativas',
        columns: ['App', 'Plataformas', 'Preço', 'Local vs. nuvem', 'Diferença principal'],
        rows: [
          {
            'App': 'Layla',
            'Plataformas': 'Android, iPhone/iPad (também Mac/Vision Pro segundo a ficha da App Store)',
            'Preço': '$19,99 à vista, mais níveis de compra dentro do app com nomes próprios',
            'Local vs. nuvem': 'Local por design; modo opcional Layla Cloud ativável',
            'Diferença principal': 'Foco em companheiro/roleplay: personas, chat em grupo, vozes, geração local de imagens',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone/iPad, Android',
            'Preço': 'Gratuito, open source (MIT)',
            'Local vs. nuvem': 'Totalmente local; sem recurso de chat em nuvem embutido',
            'Diferença principal': 'Gratuito, totalmente open source, mais voltado ao chat simples do que ao roleplay',
          },
          {
            'App': 'Private LLM',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Preço': '$4,99 à vista',
            'Local vs. nuvem': 'Totalmente local; sem fallback em nuvem, segundo o rótulo de privacidade da App Store',
            'Diferença principal': 'Mais de 140 modelos selecionados com quantização OmniQuant/GPTQ; estilo assistente, não focado em roleplay',
          },
          {
            'App': '[Enclave AI](/pt/power-local-llm/enclave-ai-review)',
            'Plataformas': 'Veja a análise completa para o suporte de plataformas atual',
            'Preço': 'Veja a ficha atual',
            'Local vs. nuvem': 'Veja a análise completa',
            'Diferença principal': 'Assistente no dispositivo focado em Apple com integração Siri/Shortcuts',
          },
          {
            'App': '[Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay)',
            'Plataformas': 'Desktop Windows/Mac (Backyard Cloud adiciona sincronização móvel/web)',
            'Preço': 'App de desktop gratuito; Backyard Cloud opcional de $7–$35/mês',
            'Local vs. nuvem': 'Local por padrão; nível de nuvem pago explícito para inferência hospedada',
            'Diferença principal': 'App de roleplay focado em desktop com um Character Hub muito maior; o nível de nuvem é um produto separado com preço claro, não um modo gratuito opcional',
          },
          {
            'App': '[LLM Farm](https://llmfarm.space/)',
            'Plataformas': 'iOS/Mac (open source, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'Preço': 'Gratuito, open source',
            'Local vs. nuvem': 'Totalmente local',
            'Diferença principal': 'Foi retirado da App Store e do TestFlight segundo seu próprio README no GitHub — verifique a disponibilidade atual antes de confiar nele',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Plataformas': 'App multiplataforma em Flutter (Android como principal)',
            'Preço': 'Gratuito, open source (MIT)',
            'Local vs. nuvem': 'Local via GGUF/llama.cpp; também pode se conectar a APIs remotas se o usuário configurar',
            'Diferença principal': 'Totalmente open source e não focado em roleplay; o uso de API remota é opcional e configurado pelo usuário',
          },
          {
            'App': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'Plataformas': 'Android (compilar a partir do código-fonte)',
            'Preço': 'Gratuito, open source (AGPL-3.0)',
            'Local vs. nuvem': 'Local via GGUF/llama.cpp, ou conecta-se a APIs remotas se configurado',
            'Diferença principal': 'Suporte a Character Card v2 para roleplay, totalmente open source, configuração mais técnica',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Plataformas': 'Android',
            'Preço': 'Gratuito, open source',
            'Local vs. nuvem': 'Cliente multiprovedor; inferência local via um provedor LiteRT',
            'Diferença principal': 'Se posiciona como um cliente multiprovedor em vez de um app de companheiro local-primeiro',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Plataformas': 'Android (iOS planejado)',
            'Preço': 'Gratuito, open source',
            'Local vs. nuvem': 'No dispositivo via Cactus Compute, ou combinado com um servidor auto-hospedado',
            'Diferença principal': 'Projetado para combinar com um workspace AnythingLLM auto-hospedado, não um app de companheiro independente',
          },
        ],
        note: 'Detalhes de plataforma, preço e recursos de apps de terceiros mudam com frequência — verifique as especificações atuais na ficha de cada app antes de decidir. A disponibilidade do LLM Farm na App Store, em particular, deve ser reverificada, já que seu próprio README no GitHub o descrevia como retirado da App Store.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'A Layla é gratuita?',
            a: 'Não, o app principal Layla custa $19,99 em compra única tanto na App Store quanto no Google Play. A ficha da App Store também mostra três níveis de compra dentro do app com nomes próprios (Monarch $4,99, Birdwing $19,99, Blue Morpho $29,99). Segundo relatos, uma versão gratuita mais limitada foi distribuída via download direto de APK a partir do próprio site do desenvolvedor — verifique a disponibilidade atual em [layla-network.ai](https://www.layla-network.ai). O Layla Cloud, um app complementar separado para chat baseado em nuvem, é gratuito para baixar como app próprio.',
          },
          {
            q: 'A Layla roda completamente offline, sem nenhum componente de nuvem?',
            a: 'Não totalmente. Segundo a própria política de privacidade da Layla, o app principal é projetado para rodar offline e avisa antes que os dados saiam do dispositivo. No entanto, a Layla também traz um modo separado e ativado à parte chamado Layla Cloud, que coleta dados de conversa anonimizados quando um usuário o ativa. A Layla não é, portanto, um produto estritamente local como seria um app sem nenhum recurso de nuvem; leitores que querem essa garantia mais forte devem compará-la com o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
          },
          {
            q: 'Quem desenvolve a Layla?',
            a: 'A Layla é publicada pela [Layla Network Pty Ltd](https://www.layla-network.ai), empresa registrada em Southport, Queensland, Austrália. Os modelos de peso aberto ajustados da marca Layla usados pelo app são publicados no Hugging Face sob a conta do GitHub [l3utterfly](https://github.com/l3utterfly).',
          },
          {
            q: 'Quais modelos a Layla pode rodar?',
            a: 'A Layla baixa um modelo padrão no primeiro uso e também pode carregar modelos ajustados da marca Layla publicados no Hugging Face, ou qualquer arquivo de modelo personalizado em formato GGUF, via llama.cpp. Os posts técnicos do desenvolvedor também descrevem suporte a backends de modelo LiteRT-LM e PTE (ExecuTorch), além do Stable Diffusion 1.5 local para geração de imagens.',
          },
          {
            q: 'A Layla funciona tanto no Android quanto no iPhone?',
            a: 'Sim. A Layla está disponível no [Google Play](https://play.google.com/store/apps/details?id=com.layla) para Android e na [App Store](https://apps.apple.com/us/app/layla/id6456886656) para iPhone e iPad; a ficha da App Store também mostra compatibilidade com Mac e Apple Vision para o mesmo app. Nenhuma versão nativa de desktop para Windows ou Linux foi confirmada no momento desta análise.',
          },
          {
            q: 'Quanta RAM a Layla precisa?',
            a: 'A ficha da App Store recomenda no mínimo 8 GB de RAM, mais alto que o piso de cerca de 4 GB comum entre apps de chat local apenas de texto mais simples, refletindo os modelos padrão maiores da Layla, a geração local de imagens e os recursos de animação de personagem.',
          },
          {
            q: 'O que é o Layla Cloud, e é o mesmo que o app principal Layla?',
            a: 'Não. O Layla Cloud é um modo separado e opcional, ou mini-app, que oferece chat de personagens baseado em nuvem para usuários que não querem gerenciar modelos locais. Segundo a política de privacidade, ele só fica ativo se um usuário o instalar ou ativar, e enquanto ativo coleta histórico de conversas anonimizado para depuração ou melhoria do serviço. Ele não coleta dados retroativamente de antes de sua ativação.',
          },
          {
            q: 'A Layla é confiável? Os usuários relatam problemas?',
            a: 'A Layla tem uma avaliação de 3,8/5 com 31 avaliações na App Store no momento desta análise. Algumas resenhas públicas na App Store relatam travamentos e recursos offline pouco confiáveis, especialmente na importação de modelos personalizados no iOS. Esta análise não verificou de forma independente a estabilidade atual do app — trate isso como observações relatadas por usuários, e teste o app dentro do prazo de reembolso da sua plataforma antes de confiar nele.',
          },
          {
            q: 'O app de companheiro de IA "Layla" é a mesma empresa do planejador de viagens com IA "Layla" adquirido pela Expedia?',
            a: 'Não. Esta análise cobre o app de companheiro de IA no dispositivo publicado pela Layla Network Pty Ltd (ID na App Store 6456886656, pacote do Google Play com.layla). Não tem relação com a empresa separada de planejamento de viagens com IA "Layla", sediada em Berlim, cuja aquisição a Expedia Group anunciou em 2026, nem com outros apps de mesmo nome, como "Layla – Voice Chat & Party Rooms".',
          },
          {
            q: 'Como a Layla se compara ao PocketPal AI ou ao Private LLM?',
            a: 'A Layla é um app pago, de código fechado, por $19,99, focado em companheiro/roleplay, com um modo de nuvem opcional ativável, disponível tanto no Android quanto no iOS. O PocketPal AI é gratuito, open source, e não tem nenhum recurso de chat em nuvem embutido. O Private LLM é um app pago ($4,99), de código fechado, exclusivo da Apple, estilo assistente, com uma biblioteca de modelos selecionados maior e sem fallback em nuvem segundo seu rótulo de privacidade da App Store. Escolha a Layla para profundidade de companheiro/roleplay nas duas plataformas móveis; escolha o PocketPal AI para uma opção gratuita, totalmente local e open source; escolha o Private LLM para uma experiência de assistente refinada e exclusiva da Apple.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'A Layla é uma entrada genuinamente distinta na categoria de IA local móvel: ela aposta em recursos de companheiro e roleplay — personas, chat em grupo, mais de 100 vozes e geração local de imagens — que apps de chat mais simples como o PocketPal AI ou o Private LLM não tentam, e seu preço único de $19,99 cobre tanto Android quanto iOS com uma única compra. A questão da privacidade é mais nuançada do que uma simples afirmação de "totalmente offline": a própria política do desenvolvedor descreve um núcleo local por padrão com aviso explícito antes de qualquer transmissão de dados, mas o app também traz um modo opcional Layla Cloud que coleta dados de conversa anonimizados assim que o usuário o ativa — um design significativamente diferente de um app sem nenhum caminho de nuvem embutido. Somado a um cliente de código fechado, três níveis de compra dentro do app cujo conteúdo exato não é totalmente público, e relatos de usuários sobre problemas de confiabilidade em recursos offline e de modelo personalizado no iOS, a Layla é indicada para leitores que especificamente querem seu conjunto de recursos de persona/roleplay e aceitam essa troca em privacidade. Leitores que querem a garantia apenas-local mais forte disponível, transparência total de código-fonte ou o menor custo devem começar pelo [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) em vez disso.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Layla na App Store](https://apps.apple.com/us/app/layla/id6456886656) — preço, níveis de compra dentro do app, requisitos de plataforma, avaliações e histórico de versões.',
          '[Layla no Google Play](https://play.google.com/store/apps/details?id=com.layla) — disponibilidade e preço para Android.',
          '[Site oficial da Layla](https://www.layla-network.ai) — visão geral do produto e descrições de recursos publicadas pelo desenvolvedor.',
          '[Política de privacidade da Layla](https://blog.layla-network.ai/privacy) — tratamento de dados local vs. nuvem, escopo do Layla Cloud e divulgações sobre coleta de dados.',
          '[Layla (Cloud) na App Store](https://apps.apple.com/gb/app/layla-cloud/id6764344419) — a ficha do app separado do modo de nuvem opcional.',
          '[l3utterfly no GitHub](https://github.com/l3utterfly) e [l3utterfly no Hugging Face](https://huggingface.co/l3utterfly) — publicações de modelos da marca Layla e projetos de infraestrutura relacionados (Layla-Server, Layla SDK).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — uma alternativa gratuita, totalmente open source e totalmente local, sem recurso de chat em nuvem embutido.',
          '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — um app de $4,99 exclusivo da Apple, estilo assistente, com uma biblioteca de modelos selecionados maior.',
          '[Análise do Enclave AI](/pt/power-local-llm/enclave-ai-review) — outro app de IA no dispositivo focado em Apple, para comparação.',
          '[Análise do Backyard AI: chat de personagens de IA local e roleplay](/pt/power-local-llm/backyard-ai-review-local-roleplay) — uma alternativa de roleplay focada em desktop com uma biblioteca de personagens muito maior e um nível de nuvem com preço claro.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo de apps para Android, para comparação.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo de apps para iOS, para comparação.',
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
    heroImage: '/images/layla-review-hero-ar.webp',
    title: 'مراجعة Layla (2026): تطبيق رفيق ذكاء اصطناعي على الجهاز لأندرويد و iOS',
    seoTitle: 'مراجعة Layla 2026: تطبيق ذكاء اصطناعي محلي، السعر والخصوصية',
    intro:
      'تطبيق Layla، من تطوير [Layla Network Pty Ltd](https://www.layla-network.ai) — شركة مسجّلة في أستراليا ومرتبطة أيضاً على GitHub بالمطوّر [l3utterfly](https://github.com/l3utterfly) الذي ينشر عائلة نماذج "Layla" ذات الأوزان المفتوحة المضبوطة —، هو تطبيق مدفوع لأندرويد و iOS مبني حول تشغيل رفيق ذكاء اصطناعي شخصي محلياً على الهاتف، مع ميزات شخصية (persona) ولعب أدوار وشخصيات تتجاوز الدردشة البسيطة. سعره [19.99 دولاراً كشراء لمرة واحدة](https://apps.apple.com/us/app/layla/id6456886656) على متجر App Store ومتجر Google Play، وتُظهر صفحة App Store أيضاً ثلاث فئات شراء داخل التطبيق باسم محدد. صُمّمت الدردشة الأساسية في Layla لتعمل بالكامل على الجهاز باستخدام نماذج GGUF عبر llama.cpp، لكن التطبيق يتضمن أيضاً وضعاً سحابياً اختيارياً يُفعَّل بشكل منفصل يُسمى Layla Cloud وغير مفعّل افتراضياً — تشرح هذه المراجعة بدقة ما يعمل فعلياً محلياً وما لا يعمل، والتكلفة الحقيقية، ومن يناسبه التطبيق، استناداً إلى سياسة خصوصية المطوّر نفسه وصفحات متاجر التطبيقات والوثائق العامة، وليس إلى اختبارات عملية مستقلة.',
    metaDescription:
      'مراجعة Layla 2026: تطبيق رفيق ذكاء اصطناعي على الجهاز لأندرويد و iOS بسعر 19.99 دولاراً. ما يعمل فعلياً محلياً مقابل وضع Layla Cloud الاختياري، السعر الدقيق، النماذج، ومن يناسبه التطبيق.',
    twitterDescription:
      'مراجعة Layla 2026: تطبيق رفيق ذكاء اصطناعي محلي لأندرويد و iOS بسعر 19.99 دولاراً، مع ميزات لعب أدوار وشخصية. ما يعمل على الجهاز، وما يجمعه الوضع السحابي الاختياري، والمقارنة مع PocketPal AI و Private LLM.',
    audience:
      'مستخدمو أندرويد و iOS الذين يفكرون في تطبيق مدفوع لرفيق/لعب أدوار ذكاء اصطناعي على الجهاز، ويحتاجون إلى معرفة بدقة ما يبقى محلياً مقابل ما يجمعه وضع سحابي اختياري، إضافة إلى السعر الدقيق وملاحظات الموثوقية من مراجعات علنية في متاجر التطبيقات.',
    readTime: '11 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Layla review',
    targetKeywords: [
      'layla ai مراجعة',
      'layla app llm محلي',
      'layla network ai',
      'layla ai android iphone',
      'layla ai خصوصية سحابة',
      'layla ai سعر',
      'تطبيق رفيق ذكاء اصطناعي محلي',
      'layla vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama2 7B Layla', 'OpenLLaMA 3B v2 Layla', 'GGUF models', 'Stable Diffusion 1.5'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**Layla هو تطبيق شراء لمرة واحدة بسعر 19.99 دولاراً لأندرويد و iOS، من تطوير [Layla Network Pty Ltd](https://www.layla-network.ai)، يشغّل نماذج لغوية بصيغة GGUF على الجهاز لرفيق ذكاء اصطناعي مبني على الشخصيات، مع شخصيات لعب أدوار وأصوات وتوليد صور.** وفقاً لـ[سياسة الخصوصية](https://blog.layla-network.ai/privacy) الخاصة بالمطوّر نفسه، صُمّمت الوظيفة الأساسية للتطبيق لتعمل دون اتصال بالإنترنت، ويعرض التطبيق تحذيراً قبل خروج أي بيانات من الجهاز — لكن Layla يتضمن أيضاً وضعاً سحابياً اختيارياً يُفعَّل بشكل منفصل يُسمى Layla Cloud، وهو ما يختلف عن التصميم المحلي بالكامل بلا أي مكوّن سحابي في تطبيق مثل [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review). القراء الذين يريدون أقوى ضمان ممكن بأن البيانات "لا تصل أبداً إلى خادم" يجب أن يزنوا هذا الفارق بعناية قبل الشراء.',
    quickAnswerTop: {
      ar: {
        question: 'هل Layla تطبيق ذكاء اصطناعي يعمل بالكامل دون اتصال بالإنترنت ومحلي فقط؟',
        answer:
          'في معظمه، لكن ليس بالكامل. صُمّمت الدردشة الأساسية وميزات الشخصيات في Layla لتعمل على الجهاز عبر نماذج GGUF، وتنص سياسة الخصوصية على أن التطبيق يحذّر قبل خروج أي بيانات من الهاتف. مع ذلك، يقدّم Layla أيضاً وضعاً سحابياً اختيارياً يُفعَّل بشكل منفصل يُسمى Layla Cloud، وهو يجمع بيانات محادثة مجهولة المصدر عند تفعيله — لذلك فإن Layla ليس تطبيقاً محلياً بحتاً كما هو الحال في بعض المنافسين.',
        bullets: [
          'شراء لمرة واحدة بسعر 19.99 دولاراً على [App Store](https://apps.apple.com/us/app/layla/id6456886656) و[Google Play](https://play.google.com/store/apps/details?id=com.layla)، إضافة إلى ثلاث فئات شراء داخل التطبيق باسم محدد.',
          'تعمل الدردشة الأساسية على الجهاز عبر نماذج GGUF مع llama.cpp؛ وتنص سياسة خصوصية المطوّر على أنه يحذّر قبل خروج أي بيانات من الجهاز.',
          'Layla Cloud وضع منفصل واختياري يجمع بيانات محادثة مجهولة المصدر عند تفعيله — وهو معطّل ما لم يُفعَّل.',
          'يركّز على لعب الأدوار: شخصيات (persona)، محادثات جماعية، أكثر من 100 صوت تحويل نص إلى كلام، وتوليد صور محلي عبر Stable Diffusion 1.5، وفقاً لصفحات متاجر التطبيقات.',
          'تقييم التطبيق على App Store هو 3.8 من 5 من 31 تقييماً وقت إعداد المراجعة؛ يذكر بعض المراجعين عدم موثوقية الميزات دون اتصال — يجب التعامل مع هذا كإفادة من المستخدمين لم تتحقق منها PromptQuorum بشكل مستقل.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Layla؟', anchor: 'what-is-layla' },
      { label: 'من طوّر Layla؟', anchor: 'history-and-developer' },
      { label: 'كيفية البدء', anchor: 'getting-started' },
      { label: 'ما النماذج التي يدعمها Layla؟', anchor: 'models-supported' },
      { label: 'هل Layla متاح على أندرويد و iPhone؟', anchor: 'platform-availability' },
      { label: 'كم تكلفة Layla؟', anchor: 'pricing' },
      { label: 'الخصوصية: الدردشة المحلية مقابل Layla Cloud', anchor: 'privacy' },
      { label: 'ميزات الرفيق ولعب الأدوار', anchor: 'key-features' },
      { label: 'ما العتاد المطلوب؟', anchor: 'hardware-requirements' },
      { label: 'المقايضات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'لمن يناسب Layla', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Layla', anchor: 'who-should-not-use' },
      { label: 'Layla مقابل البدائل', anchor: 'vs-alternatives' },
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
            text: 'Layla تطبيق لأندرويد و iOS بشراء لمرة واحدة بسعر 19.99 دولاراً، من تطوير Layla Network Pty Ltd، يشغّل نماذج لغوية بصيغة GGUF على الجهاز لرفيق ذكاء اصطناعي مبني على الشخصيات، ويوفّر بشكل منفصل وضعاً سحابياً اختيارياً يُسمى Layla Cloud.',
          },
          {
            type: 'plain-terms',
            text: 'هو تطبيق دردشة على طراز الرفيق يُثبَّت للتحدث مع شخصية ذكاء اصطناعي قابلة للتخصيص تعمل غالباً على هاتفك الخاص بدلاً من خادم شركة — وخلافاً لبعض التطبيقات المحلية بالكامل، لديه أيضاً وضع اتصال اختياري يمكن تفعيله للدردشة القائمة على السحابة، وهو غير مفعّل افتراضياً.',
          },
        ],
        items: [
          'السعر: [شراء لمرة واحدة بسعر 19.99 دولاراً](https://apps.apple.com/us/app/layla/id6456886656) على App Store و Google Play، إضافة إلى ثلاث فئات شراء داخل التطبيق لا يوضّح المحتوى العام تفاصيلها بالكامل.',
          'المطوّر: [Layla Network Pty Ltd](https://www.layla-network.ai)، شركة مسجّلة في أستراليا؛ تُنشر النماذج المضبوطة بعلامة Layla على Hugging Face تحت حساب GitHub [l3utterfly](https://github.com/l3utterfly).',
          'تعمل الدردشة الأساسية على الجهاز عبر نماذج GGUF مع llama.cpp؛ ويدعم التطبيق أيضاً واجهات نماذج LiteRT-LM و PTE (ExecuTorch)، إضافة إلى توليد الصور المحلي عبر Stable Diffusion 1.5، وفقاً لمنشورات المطوّر التقنية الخاصة.',
          'الخصوصية: وفقاً لسياسة خصوصية المطوّر، صُمّمت الوظيفة الأساسية لتعمل دون اتصال بالإنترنت ويحذّر التطبيق قبل خروج البيانات من الجهاز — باستثناء وضع Layla Cloud المنفصل والاختياري، وهو معطّل افتراضياً.',
          'التركيز على الرفيق ولعب الأدوار: شخصيات قابلة للتخصيص، محادثات جماعية، أكثر من 100 صوت، ورسوم متحركة للشخصيات بتقنية Live2D، ما يميّزه عن تطبيقات الدردشة الأبسط في هذه الفئة.',
          'تقييم App Store: 3.8 من 5 من 31 تقييماً وقت إعداد المراجعة؛ يذكر بعض المراجعين تعطلاً وسلوكاً غير موثوق دون اتصال — وهو أمر أفاد به المستخدمون ولم تتحقق منه هذه المراجعة بشكل مستقل.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ملاحظة حول الاسم: يُستخدم اسم "Layla" من قبل عدة تطبيقات وشركات غير مرتبطة، منها شركة تخطيط سفر بالذكاء الاصطناعي استحوذت عليها Expedia Group عام 2026، وتطبيق اجتماعي منفصل يُسمى "Layla – Voice Chat & Party Rooms". تتناول هذه المراجعة فقط تطبيق الرفيق بالذكاء الاصطناعي على الجهاز الذي تنشره Layla Network Pty Ltd (معرّف App Store 6456886656، حزمة Google Play com.layla)، والمُعلَن عنه أيضاً على [layla-network.ai](https://www.layla-network.ai).',
          },
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى سياسة خصوصية Layla العامة، وصفحات App Store و Google Play، ومنشورات المطوّر التقنية الخاصة، ومراجعات المستخدمين المتاحة علناً، التي جرى التحقق منها في سبتمبر 2026. لم تُجرِ PromptQuorum اختبارات عملية أو مقارنات أداء مستقلة على Layla لأجل هذه المراجعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-layla',
        title: 'ما هو Layla؟',
        content: [
          '**Layla تطبيق جوّال لأندرويد و iOS مبني حول رفيق ذكاء اصطناعي مبني على الشخصيات يعمل بشكل أساسي على الجهاز، باستخدام [llama.cpp](https://github.com/ggml-org/llama.cpp) لتشغيل نماذج لغوية ذات أوزان مفتوحة بصيغة GGUF محلياً.** بدلاً من تقديم نفسه كعميل دردشة عام الغرض، يراهن Layla على ميزات الشخصيات ولعب الأدوار: يمكن للمستخدمين إنشاء أو تنزيل شخصيات ذكاء اصطناعي قابلة للتخصيص، وإجراء محادثات جماعية مع عدة شخصيات، وتوليد صور محلياً عبر خط أنابيب Stable Diffusion 1.5 مدمج.',
          'وفقاً لـ[سياسة الخصوصية](https://blog.layla-network.ai/privacy) الخاصة به، فإن "الوظيفة الأساسية لتطبيقنا مصمَّمة للعمل دون اتصال بالإنترنت على جهازك"، وتنص السياسة على أن التطبيق يعرض تحذيراً ورسالة تأكيد قبل أي إجراء يرسل بيانات خارج الجهاز. وبشكل منفصل، يقدّم المطوّر أيضاً وضعاً اختيارياً قائماً على السحابة — Layla Cloud — تصفه صفحة المتجر الخاصة به بأنه "النسخة السحابية من التطبيق المميّز \'Layla\'"، وهو موجّه للمستخدمين الأقل تقنية الذين يريدون دردشة الشخصيات دون إدارة نماذج محلية. هذا المسار السحابي الاختياري، الذي يُشرح بالتفصيل في قسم الخصوصية أدناه، هو أهم فارق دقيق يحتاج القارئ المهتم بالخصوصية إلى فهمه قبل الشراء.',
        ],
        note: 'GGUF هو صيغة ملف لتغليف نماذج لغوية ذات أوزان مفتوحة ومكمَّمة (quantized) بحيث تعمل بكفاءة على عتاد المستهلك عبر بيئات تشغيل مثل llama.cpp، بدلاً من استدعاء واجهة برمجية سحابية في كل استجابة.',
      },
      history: {
        id: 'history-and-developer',
        title: 'من طوّر Layla؟',
        content: [
          '**ينشر Layla شركة [Layla Network Pty Ltd](https://www.layla-network.ai)، وهي شركة مسجّلة في ساوثبورت، كوينزلاند، أستراليا، وظهر التطبيق علناً لأول مرة حوالي أغسطس 2023.** يُنسب العمل التقني على النماذج خلف التطبيق، على GitHub و Hugging Face، إلى مطوّر يستخدم اسم المستخدم [l3utterfly](https://github.com/l3utterfly)، الذي نشر عشرات النماذج ذات الأوزان المفتوحة المضبوطة بعلامة "Layla" — بما فيها [Llama2 7B Layla](https://huggingface.co/l3utterfly/llama2-7b-layla) و[OpenLLaMA 3B v2 Layla](https://huggingface.co/l3utterfly/open-llama-3b-v2-layla) — الموصوفة في بطاقات النماذج الخاصة بها كنماذج أساسية يستخدمها تطبيق Layla.',
          'يحافظ حساب GitHub نفسه أيضاً على مشاريع بنية تحتية مرتبطة: [Layla-Server](https://github.com/l3utterfly/Layla-Server)، وهو غلاف (wrapper) يمرّر طلبات متوافقة مع OpenAI عبر WebRTC للسماح للتطبيق الجوّال بالاتصال بجهاز كمبيوتر أقوى يشغّل نموذجه المحلي الخاص، و[Layla SDK](https://github.com/l3utterfly/layla-sdk) لإنشاء تطبيقات مصغّرة مخصّصة داخل Layla. يشير هذا إلى نظام تقني بيئي يُصان بنشاط حول التطبيق بدلاً من إصدار ثابت واحد — لكن، على عكس مستودع PocketPal AI مفتوح المصدر بالكامل، لا يُنشر الكود المصدري لعميل Layla نفسه، لذا لا يمكن تدقيق سلوكه الداخلي بشكل مستقل كما هو الحال مع تطبيق مرخّص بموجب MIT.',
        ],
        items: [
          'الناشر: [Layla Network Pty Ltd](https://www.layla-network.ai)، مسجّلة في ساوثبورت، كوينزلاند، أستراليا.',
          'الإطلاق العلني: حوالي أغسطس 2023، وفقاً لأدلة تطبيقات تابعة لجهات خارجية.',
          'تطوير النماذج: نماذج ذات أوزان مفتوحة مضبوطة بعلامة Layla منشورة على Hugging Face تحت حساب GitHub [l3utterfly](https://github.com/l3utterfly).',
          'مشاريع ذات صلة: [Layla-Server](https://github.com/l3utterfly/Layla-Server) (يربط التطبيق بخادم كمبيوتر مُستضاف ذاتياً عبر WebRTC) و[Layla SDK](https://github.com/l3utterfly/layla-sdk) (لإنشاء تطبيقات مصغّرة داخل Layla).',
          'الكود المصدري لتطبيق العميل غير متاح للعامة — على عكس PocketPal AI أو Maid، تطبيق Layla نفسه مغلق المصدر حتى وإن كانت بعض النماذج التي يعتمد عليها ذات أوزان مفتوحة.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيفية البدء',
        content: [
          '**يتطلّب إعداد Layla للدردشة المحلية بضع خطوات بعد الشراء، وفقاً لوصف المتجر الخاص بالتطبيق ومنشوراته التقنية.** لا حاجة إلى حساب لاستخدام الميزات المحلية الأساسية.',
        ],
        numberedItems: [
          {
            title: 'شراء التطبيق وتثبيته',
            whyItMatters: 'نزّل Layla من [App Store](https://apps.apple.com/us/app/layla/id6456886656) (19.99 دولاراً) أو [Google Play](https://play.google.com/store/apps/details?id=com.layla) (19.99 دولاراً). أفيد بوجود نسخة مجانية أكثر محدودية تُوزَّع كملف APK للتنزيل المباشر من موقع المطوّر نفسه — تحقّق مباشرة من [layla-network.ai](https://www.layla-network.ai) بشأن توفّر هذا الخيار حالياً قبل افتراض أنه ينطبق على منصتك.',
          },
          {
            title: 'السماح للتطبيق بتنزيل نموذجه الافتراضي',
            whyItMatters: 'عند التشغيل الأول، يُنزّل Layla نموذجاً لغوياً (أُفيد بأنه حوالي 4 جيجابايت في إصدارات سابقة) قبل أن يمكنك الدردشة؛ وهذا تنزيل لمرة واحدة لهذا النموذج.',
          },
          {
            title: 'اختيار أو تخصيص شخصية',
            whyItMatters: 'اختر شخصية مدمجة أو أنشئ شخصيتك الخاصة باسم وشخصية وصوت — واجهة Layla منظَّمة حول الشخصيات بدلاً من موضوع دردشة عام واحد.',
          },
          {
            title: 'اختيارياً: استيراد نموذج GGUF مخصّص',
            whyItMatters: 'يمكن للمستخدمين المتقدمين تحميل ملف نموذج خاص بهم بصيغة GGUF بدلاً من نماذج التطبيق الافتراضية أو إلى جانبها.',
          },
          {
            title: 'الدردشة دون اتصال، أو تفعيل Layla Cloud',
            whyItMatters: 'لا تتطلّب الدردشة المحلية وتوليد الصور اتصالاً بالشبكة بعد تنزيل نموذج ما. Layla Cloud وضع منفصل واختياري يجب تثبيته أو تفعيله صراحةً — وهو ليس جزءاً من التجربة المحلية الافتراضية الموصوفة أعلاه.',
          },
        ],
        note: 'يفيد بعض المراجعين على App Store و Google Play بأن تحميل النماذج دون اتصال واستيراد النماذج المخصّصة كانا غير موثوقين في إصدارات سابقة، خصوصاً على iOS. لم تتحقق هذه المراجعة من الاستقرار الحالي بشكل مستقل — اختبر الإعداد الأولي ضمن فترة استرداد الأموال الخاصة بمنصتك قبل الاعتماد على التطبيق.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'ما النماذج التي يدعمها Layla؟',
        itemHeadings: true,
        columns: ['نوع النموذج', 'طريقة الوصول', 'الاستخدام النموذجي'],
        rows: [
          {
            'نوع النموذج': 'النموذج الافتراضي المدمج',
            'طريقة الوصول': 'يُنزَّل تلقائياً عند التشغيل الأول',
            'الاستخدام النموذجي': 'دردشة رفيق عامة جاهزة للاستخدام دون إعداد',
          },
          {
            'نوع النموذج': 'نماذج مضبوطة بعلامة Layla',
            'طريقة الوصول': 'منشورة على [Hugging Face](https://huggingface.co/l3utterfly) من قبل المطوّر l3utterfly (مثل Llama2 7B Layla، OpenLLaMA 3B v2 Layla)',
            'الاستخدام النموذجي': 'دردشة موجّهة نحو لعب الأدوار والشخصيات، مضبوطة لصيغة شخصيات التطبيق',
          },
          {
            'نوع النموذج': 'استيراد GGUF مخصّص',
            'طريقة الوصول': 'استيراد يدوي لأي ملف بصيغة GGUF من تخزين الجهاز أو من Hugging Face',
            'الاستخدام النموذجي': 'للمستخدمين الذين لديهم بالفعل نموذج مفضّل ذو أوزان مفتوحة بصيغة GGUF',
          },
          {
            'نوع النموذج': 'نماذج LiteRT-LM و PTE (ExecuTorch)',
            'طريقة الوصول': 'واجهات تشغيل بديلة على الجهاز، وفقاً لمنشورات المطوّر التقنية',
            'الاستخدام النموذجي': 'استدلال مُحسَّن خاص بالجهاز أو الواجهة الخلفية يتجاوز llama.cpp/GGUF البسيط',
          },
          {
            'نوع النموذج': 'Stable Diffusion 1.5',
            'طريقة الوصول': 'يعمل محلياً على الجهاز لتوليد الصور، وفقاً لمنشورات المطوّر التقنية',
            'الاستخدام النموذجي': 'توليد صور شخصيات أو مشاهد محلياً دون واجهة برمجية سحابية للصور',
          },
        ],
        note: 'تغيّرت هوية النماذج المدمجة الدقيقة وأحجام التنزيل الافتراضية عبر إصدارات التطبيق؛ تأكد من النموذج الافتراضي الحالي وحجمه داخل التطبيق قبل تنزيله بباقة بيانات محدودة.',
      },
      platform: {
        id: 'platform-availability',
        title: 'هل Layla متاح على أندرويد و iPhone؟',
        itemHeadings: true,
        columns: ['المنصة', 'التوفر', 'ملاحظات'],
        rows: [
          {
            'المنصة': 'iPhone / iPad',
            'التوفر': 'متاح على [App Store](https://apps.apple.com/us/app/layla/id6456886656)، يتطلّب iOS 16.4 / iPadOS 16.4 أو أحدث',
            'ملاحظات': 'تُظهر صفحة App Store أيضاً توافقاً مع Mac (macOS 13.0، Apple M1 أو أحدث) و Apple Vision (visionOS 1.0 أو أحدث) لنفس التطبيق.',
          },
          {
            'المنصة': 'Android',
            'التوفر': 'متاح على [Google Play](https://play.google.com/store/apps/details?id=com.layla)',
            'ملاحظات': 'أُفيد أيضاً بوجود قناة توزيع مباشرة لملف APK من موقع المطوّر نفسه، منفصلة عن Google Play — تحقّق مباشرة من التوفر الحالي قبل الاعتماد عليها.',
          },
          {
            'المنصة': 'Windows / Linux',
            'التوفر': 'لم يُؤكَّد وجود إصدار سطح مكتب أصلي لـ Windows أو Linux وقت إعداد المراجعة',
            'ملاحظات': 'يتيح مشروع [Layla-Server](https://github.com/l3utterfly/Layla-Server) للتطبيق الجوّال الاتصال عبر WebRTC بجهاز كمبيوتر يشغّل خلفيته المحلية الخاصة، وهو جسر وليس عميل سطح مكتب أصلي.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'كم تكلفة Layla؟',
        content: [
          '**يبلغ سعر Layla 19.99 دولاراً كشراء لمرة واحدة على كل من [Apple App Store](https://apps.apple.com/us/app/layla/id6456886656) و[Google Play](https://play.google.com/store/apps/details?id=com.layla).** بالإضافة إلى هذا الشراء الأساسي، تُظهر صفحة App Store ثلاث فئات شراء داخل التطبيق باسم محدد — Monarch (4.99 دولاراً)، وBirdwing (19.99 دولاراً)، وBlue Morpho (29.99 دولاراً) — لكن صفحة المتجر العامة لا توضّح بالكامل ما تفتحه كل فئة (مثلاً، ما إذا كانت تغطي رصيداً لاستخدام السحابة، أو شخصيات مميّزة، أو أصواتاً إضافية). تأكد بدقة مما تتضمنه فئة معينة داخل التطبيق قبل شرائها.',
          'وفقاً لمحتوى مدونة المطوّر نفسه، أُفيد بأن نسخة مجانية أكثر محدودية من التطبيق وُزِّعت عبر تنزيل مباشر لملف APK من موقعه الخاص — وهذا يختلف عن صفحتَي App Store و Google Play المدفوعتين، وينبغي التحقق من توفرها ومجموعة ميزاتها الحاليين مباشرة على [layla-network.ai](https://www.layla-network.ai) بدلاً من افتراض ذلك من هذه المراجعة.',
          'يظهر Layla Cloud، وضع الدردشة السحابي الاختياري والمنفصل، كتنزيل مجاني كتطبيق مستقل على المتاجر؛ أما ما إذا كان الاستخدام المستمر لـ Layla Cloud يتطلّب اشتراكاً أو رصيداً بعد المستوى المجاني فغير موضّح في صفحة المتجر العامة التي جرى الاطلاع عليها لهذا المقال.',
        ],
        items: [
          '**التطبيق الأساسي:** شراء لمرة واحدة بسعر 19.99 دولاراً على App Store و Google Play — لا يُطلب اشتراك للشراء الأساسي نفسه.',
          '**فئات الشراء داخل التطبيق:** Monarch (4.99 دولاراً)، Birdwing (19.99 دولاراً)، Blue Morpho (29.99 دولاراً) — مذكورة على صفحة App Store؛ المحتوى الدقيق غير موضّح علناً بالكامل.',
          '**النسخة المجانية/المحدودة:** أُفيد بتوفرها عبر تنزيل مباشر لملف APK من موقع المطوّر نفسه، منفصلة عن صفحات المتاجر المدفوعة — تحقق من الوضع الحالي مباشرة.',
          '**Layla Cloud:** تطبيق مرافق منفصل ومجاني التنزيل لدردشة الشخصيات القائمة على السحابة؛ هيكل تكلفته الخاص بعد المستوى المجاني غير موضّح في صفحة المتجر العامة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية: الدردشة المحلية مقابل Layla Cloud',
        content: [
          '**تنص [سياسة الخصوصية](https://blog.layla-network.ai/privacy) الخاصة بـ Layla على أن "الوظيفة الأساسية لتطبيقنا مصمَّمة للعمل دون اتصال بالإنترنت على جهازك"، وأن التطبيق سيعرض تحذيراً ورسالة تأكيد قبل أي إجراء يرسل بياناتك خارج الجهاز.** تحدّد السياسة محفّزات معيّنة لخروج البيانات: رفع شخصية إلى Personality Hub، واستخدام ميزة "الإبلاغ عن خلل" داخل التطبيق، وتفعيل ميزات سحابية اختيارية.',
          'هذا البند الأخير — الميزات السحابية الاختيارية — هو Layla Cloud، الذي يصفه المطوّر بأنه وضع منفصل ومستقل: وفقاً للسياسة، "لا يُفعَّل Layla Cloud إلا إذا ثبّتَّ التطبيق المصغّر \'Layla Cloud\' داخل Layla"، وإذا لم يكن مثبّتاً أو مفعّلاً، فإن "لا ميزات متعلقة بـ Layla Cloud مُفعَّلة". عندما يكون Layla Cloud نشطاً، تنص وثائق المطوّر نفسه على أنه يجمع سجل المحادثات — رسائلك واستجابات الشخصيات وبيانات من ميزات مساعدة مثل الذاكرة طويلة المدى و PDF Digest و Dream —، وأن هذه البيانات مجهولة المصدر وغير مرتبطة بحسابك، وإن كان يمكن استخدامها لتصحيح الأخطاء أو تحسين الخدمة. تنص السياسة أيضاً على أن Layla Cloud لا يجمع بأثر رجعي محادثات سابقة لتفعيله.',
          'إجمالاً، هذا تصميم خصوصية مختلف جوهرياً عن تطبيق لا تحتوي وظيفته الأساسية على أي مكوّن سحابي على الإطلاق: الوضع المحلي الافتراضي لـ Layla مصمَّم للبقاء على الجهاز مع حاجز موافقة صريح قبل أي إرسال، لكن المنتج نفسه يوفّر مساراً سحابياً اختيارياً يُفعَّل بشكل منفصل يجمع بالفعل بيانات محادثة مجهولة المصدر عندما يفعّله المستخدم. القراء الذين يريدون أقوى ضمان ممكن — منتج بلا أي وضع سحابي يمكن تفعيله أساساً — يجب أن يقارنوا ذلك بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)، الذي تكون قاعدة كوده بأكملها مفتوحة المصدر بترخيص MIT دون أي ميزة دردشة سحابية مدمجة.',
        ],
        items: [
          '**الوضع المحلي:** وفقاً لسياسة المطوّر، مصمَّم للعمل دون اتصال بالإنترنت؛ يُذكَر أن التطبيق يحذّر ويطلب تأكيداً قبل خروج البيانات من الجهاز.',
          '**Layla Cloud:** وضع منفصل واختياري (مُثبَّت كتطبيق مصغّر أو تطبيق مستقل) يجمع سجل محادثات مجهول المصدر، بما في ذلك بيانات الميزات المساعدة، عند تفعيله.',
          '**غير رجعي:** وفقاً للسياسة، لا يستوعب تفعيل Layla Cloud سجل المحادثات السابق لتفعيله.',
          '**مغلق المصدر:** على عكس PocketPal AI أو Maid، لا يُنشر كود تطبيق العميل الخاص بـ Layla، لذا يعتمد الادعاء بعدم الإرسال افتراضياً على سياسة خصوصية المطوّر نفسه بدلاً من تدقيق كود مستقل.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تُدقّق هذه المراجعة بشكل مستقل حركة الشبكة أو الكود المصدري لـ Layla. يعكس الوصف أعلاه سياسة الخصوصية وصفحات المتاجر التي ينشرها المطوّر، وليس تقييماً أمنياً مستقلاً أجرته PromptQuorum.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'ميزات الرفيق ولعب الأدوار',
        content: [
          '**تُبنى مجموعة ميزات Layla، وفقاً لأوصافه الخاصة في متاجر التطبيقات، حول حالات استخدام الشخصية ولعب الأدوار أكثر من واجهة دردشة أسئلة وأجوبة بسيطة.** تشمل الميزات المذكورة:',
        ],
        items: [
          '**شخصيات قابلة للتخصيص.** يمكن للمستخدمين إنشاء أو تنزيل شخصيات ذكاء اصطناعي بهويات مميّزة بدلاً من التحدث إلى هوية مساعد واحدة ثابتة.',
          '**محادثات جماعية.** وفقاً لصفحة التطبيق، يمكن لعدة شخصيات المشاركة في نفس موضوع المحادثة.',
          '**أكثر من 100 صوت.** يذكر التطبيق مكتبة أصوات كبيرة لاستجابات الشخصيات بتحويل النص إلى كلام.',
          '**رسوم متحركة للشخصيات بتقنية Live2D.** تمثيلات مرئية ومتحركة للشخصيات بدلاً من واجهة نصية فقط.',
          '**توليد صور محلي.** يعمل خط أنابيب Stable Diffusion 1.5 المدمج على الجهاز لتوليد صور الشخصيات أو المشاهد، وفقاً لمنشورات المطوّر التقنية.',
          '**وكلاء قابلون للبرمجة (Python).** يمكن للمستخدمين المتقدمين برمجة سلوكيات شبيهة بالوكلاء باستخدام Python، وفقاً لوصف التطبيق نفسه.',
          '**لا فلتر محتوى مدمج للاستدلال المحلي.** بما أن التوليد المحلي يعمل بالكامل على عتاد الجهاز نفسه، تصف مواد المطوّر نفسه هذا الوضع بأنه بلا طبقة إشراف محتوى من جانب الخادم — وهو خيار تصميم متعمّد ينقل مسؤولية الاستخدام المناسب إلى المستخدم الفرد بدلاً من نظام إشراف مُستضاف.',
        ],
        note: 'تغيّرت توفّر الميزات، وحجم مكتبة الأصوات، وبعض تكاملات النماذج عبر إصدارات التطبيق؛ تأكد من توفّر الميزات الحالي داخل التطبيق بدلاً من افتراض أن كل ما وُصف في مواد تسويقية أقدم لا يزال ينطبق دون تغيير.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'ما العتاد المطلوب لتشغيل Layla؟',
        content: [
          '**توصي صفحة App Store بحد أدنى 8 جيجابايت من ذاكرة الوصول العشوائي (RAM)، وقد وصف تسويق Layla نفسه تاريخياً التطبيق بأنه موجَّه للهواتف الرائدة الحديثة بدلاً من العتاد الاقتصادي أو القديم.** هذا حد أعلى صرامة من بعض تطبيقات الدردشة المحلية المنافسة التي تدعم بشكل مريح نماذج أصغر بحجم 2-4 مليار معامل بذاكرة 4 جيجابايت — ترفع ميزات الرفيق في Layla (نماذج افتراضية أكبر، توليد صور محلي، ورسوم متحركة للشخصيات) الحد الأدنى العملي للعتاد.',
          'كما هو الحال مع أي تطبيق مبني على GGUF، فإن النموذج المحدَّد المُحمَّل — وليس التطبيق نفسه — هو ما يحدد فعلياً احتياجات الذاكرة: يحتاج نموذج مكمَّم أصغر إلى ذاكرة أقل من نموذج بـ 7 مليارات معامل أو أكثر، ويضيف تشغيل توليد صور Stable Diffusion المحلي إلى جانب الدردشة عبئاً إضافياً على الذاكرة والمعالجة يتجاوز الاستدلال النصي فقط.',
        ],
        items: [
          'الحد الأدنى الموصى به: 8 جيجابايت من ذاكرة الوصول العشوائي، وفقاً لصفحة App Store — أعلى بشكل ملحوظ من الحد الأدنى الشائع البالغ 4 جيجابايت لدى تطبيقات الدردشة المحلية الأبسط في هذه الفئة.',
          'يُوصى بالهواتف الرائدة الحديثة (تقريباً الأجيال القليلة الأخيرة) بدلاً من العتاد الأقدم أو الاقتصادي، وفقاً لمواد التسويق الخاصة بالمطوّر.',
          'التخزين: أُفيد بأن تنزيل النموذج الافتراضي عند التشغيل الأول كان حوالي 4 جيجابايت في إصدارات سابقة؛ تضيف نماذج GGUF المخصّصة ونقاط تفتيش Stable Diffusion متطلبات تخزين إضافية.',
          'يضيف توليد الصور المحلي (Stable Diffusion 1.5) عبئاً على المعالجة والذاكرة يتجاوز الدردشة النصية فقط — تُوقَّع أداء أبطأ على الأجهزة ذات ذاكرة الوصول العشوائي الأقل عند استخدام هذه الميزة.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: ['الميزة', 'ماذا تعني في الاستخدام الفعلي', 'القيد / التحفّظ'],
        rows: [
          {
            'الميزة': 'عمق الرفيق ولعب الأدوار',
            'ماذا تعني في الاستخدام الفعلي': 'شخصيات، دردشة جماعية، أكثر من 100 صوت، ورسوم متحركة Live2D تتجاوز واجهة دردشة بسيطة.',
            'القيد / التحفّظ': 'القراء الذين يريدون فقط دردشة بسيطة على طراز المساعد قد يجدون PocketPal AI أو Private LLM أسهل استخداماً.',
          },
          {
            'الميزة': 'توليد نص وصور محلياً',
            'ماذا تعني في الاستخدام الفعلي': 'يمكن للدردشة وتوليد الصور عبر Stable Diffusion 1.5 كليهما العمل بالكامل على الجهاز.',
            'القيد / التحفّظ': 'يتطلّب ذاكرة وتخزيناً أكبر بكثير من تطبيقات الدردشة المحلية النصية فقط؛ يذكر App Store حداً أدنى قدره 8 جيجابايت.',
          },
          {
            'الميزة': 'حاجز موافقة صريح قبل خروج البيانات',
            'ماذا تعني في الاستخدام الفعلي': 'وفقاً لسياسة الخصوصية، يحذّر التطبيق قبل إرسال بيانات خارج الجهاز لميزات مثل رفع الشخصيات أو الإبلاغ عن الأخطاء.',
            'القيد / التحفّظ': 'يتضمن التطبيق أيضاً وضع Layla Cloud الاختياري الذي يجمع بالفعل بيانات محادثة مجهولة المصدر بمجرد تفعيل المستخدم له — وهو ليس، بحسب التصميم، منتجاً بلا أي مكوّن سحابي.',
          },
          {
            'الميزة': 'تطوير نشط للنماذج والبنية التحتية',
            'ماذا تعني في الاستخدام الفعلي': 'تُظهر النماذج المضبوطة بعلامة Layla على Hugging Face والمشاريع ذات الصلة مثل Layla-Server عملاً تقنياً مستمراً.',
            'القيد / التحفّظ': 'كود تطبيق العميل نفسه مغلق، لذا لا يمكن تدقيق سلوكه بشكل مستقل كما هو الحال مع PocketPal AI أو Maid.',
          },
          {
            'الميزة': 'شراء لمرة واحدة بسعر 19.99 دولاراً',
            'ماذا تعني في الاستخدام الفعلي': 'لا يُطلب اشتراك للتطبيق الأساسي على أي من المتجرين.',
            'القيد / التحفّظ': 'توجد ثلاث فئات إضافية للشراء داخل التطبيق لا يوضّح المحتوى العام تفاصيلها بالكامل — تأكد داخل التطبيق مما تشتريه بالضبط.',
          },
          {
            'الميزة': 'متعدد المنصات: أندرويد و iOS',
            'ماذا تعني في الاستخدام الفعلي': 'متاح على كلا المنصتين الجوّالتين الرئيسيتين، على عكس التطبيقات الحصرية لأبل مثل Private LLM.',
            'القيد / التحفّظ': 'تذكر مراجعات علنية على App Store تعطلاً وميزات دون اتصال غير موثوقة على بعض الأجهزة — إفادة من المستخدمين لم تتحقق منها PromptQuorum بشكل مستقل.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Layla',
        items: [
          '**المستخدمون الذين يريدون ذكاءً اصطناعياً محلياً على طراز الرفيق/لعب الأدوار، لا مساعداً بسيطاً فقط.** إذا كانت شخصيات، محادثات جماعية، ومخرجات صوتية أهم من واجهة دردشة بسيطة، فإن مجموعة ميزات Layla مُصمَّمة تحديداً لهذا الاستخدام.',
          '**المستخدمون الذين يريدون توليد صور محلياً إلى جانب الدردشة.** يتيح خط أنابيب Stable Diffusion 1.5 المدمج لتطبيق واحد التعامل مع النص وتوليد الصور معاً على الجهاز.',
          '**المستخدمون المرتاحون لشراء تطبيق لمرة واحدة بدلاً من استخدام أداة مجانية.** يشتري مبلغ 19.99 دولاراً التطبيق الأساسي بشكل نهائي على كلا المنصتين الجوّالتين الرئيسيتين.',
          '**المستخدمون الذين يقرؤون سياسات الخصوصية بعناية ويرتاحون لوضع سحابي اختياري.** يمكن أن يكون تصميم Layla المحلي افتراضياً، مع تحذير صريح قبل خروج أي بيانات، حلاً وسطاً مقبولاً للقراء الذين لا يحتاجون إلى منتج بلا أي قدرة سحابية على الإطلاق.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Layla',
        items: [
          '**القراء الذين يحتاجون إلى منتج مضمون بلا أي مكوّن سحابي.** بما أن Layla يتضمن وضعاً سحابياً اختيارياً (Layla Cloud) يجمع بيانات مجهولة المصدر عند تفعيله، فإن القراء الذين يريدون تحديداً تطبيقاً بلا أي ميزة سحابية يمكن تفعيلها أساساً يجب أن يختاروا [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)، الذي لا يحتوي كوده المفتوح بالكامل على أي مسار دردشة سحابية مدمج.',
          '**القراء الذين يريدون تطبيقاً مجانياً أو مفتوح المصدر بالكامل.** Layla تطبيق مدفوع ومغلق المصدر بسعر 19.99 دولاراً؛ يغطي PocketPal AI (مجاني، ترخيص MIT) و Maid (مجاني، ترخيص MIT) هذه الحاجة بدلاً منه.',
          '**القراء الذين يريدون واجهة دردشة بسيطة وبسيطة التصميم على طراز المساعد.** يضيف تصميم Layla الذي يركّز على الشخصيات والهويات تعقيداً قد لا يريده المستخدمون الذين يريدون فقط دردشة أسئلة وأجوبة بسيطة؛ Private LLM أو PocketPal AI مصمَّمان بشكل أقرب إلى المساعد.',
          '**القراء الذين لديهم أجهزة بذاكرة وصول عشوائي أقل أو أقدم.** يذكر App Store 8 جيجابايت من ذاكرة الوصول العشوائي كحد أدنى موصى به، وهو أعلى من عدة تطبيقات منافسة تشغّل نماذج أصغر بشكل مريح بذاكرة 4 جيجابايت.',
          '**القراء الذين يحتاجون إلى ميزات مؤسسية أو جماعية.** Layla تطبيق استهلاكي لمستخدم واحد بلا لوحة تحكم إدارية أو ترخيص مشترك أو فوترة جماعية؛ يجب على المؤسسات النظر بدلاً من ذلك في بنية تحتية لنموذج لغوي محلي مُستضافة ذاتياً من جانب الخادم.',
          '**القراء الذين يريدون تدقيق الكود المصدري للتطبيق بأنفسهم بشكل مستقل.** تطبيق عميل Layla مغلق المصدر؛ يجب على القراء الذين يحتاجون إلى هذا المستوى من الضمان استخدام بديل مرخّص بموجب MIT أو AGPL مثل PocketPal AI أو Maid أو ChatterUI.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Layla مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر', 'محلي مقابل سحابي', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Layla',
            'المنصات': 'أندرويد، iPhone/iPad (أيضاً Mac/Vision Pro وفقاً لصفحة App Store)',
            'السعر': '19.99 دولاراً لمرة واحدة، إضافة إلى فئات شراء داخل التطبيق باسم محدد',
            'محلي مقابل سحابي': 'محلي بحسب التصميم؛ وضع Layla Cloud الاختياري القابل للتفعيل',
            'الفرق الرئيسي': 'تركيز على الرفيق/لعب الأدوار: شخصيات، دردشة جماعية، أصوات، توليد صور محلي',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iPhone/iPad، أندرويد',
            'السعر': 'مجاني، مفتوح المصدر (MIT)',
            'محلي مقابل سحابي': 'محلي بالكامل؛ لا ميزة دردشة سحابية مدمجة',
            'الفرق الرئيسي': 'مجاني، مفتوح المصدر بالكامل، أقرب إلى الدردشة البسيطة منه إلى لعب الأدوار',
          },
          {
            'التطبيق': 'Private LLM',
            'المنصات': 'iPhone/iPad/Mac (أبل فقط)',
            'السعر': '4.99 دولاراً لمرة واحدة',
            'محلي مقابل سحابي': 'محلي بالكامل؛ بلا احتياط سحابي وفقاً لملصق خصوصية App Store',
            'الفرق الرئيسي': 'أكثر من 140 نموذجاً منتقى بتكميم OmniQuant/GPTQ؛ طراز مساعد لا لعب أدوار أولاً',
          },
          {
            'التطبيق': '[Enclave AI](/ar/power-local-llm/enclave-ai-review)',
            'المنصات': 'راجع المراجعة الكاملة لدعم المنصات الحالي',
            'السعر': 'راجع الصفحة الحالية',
            'محلي مقابل سحابي': 'راجع المراجعة الكاملة',
            'الفرق الرئيسي': 'مساعد على الجهاز موجَّه لأبل مع تكامل Siri/Shortcuts',
          },
          {
            'التطبيق': '[Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay)',
            'المنصات': 'سطح مكتب Windows/Mac (يضيف Backyard Cloud مزامنة جوّال/ويب)',
            'السعر': 'تطبيق سطح مكتب مجاني؛ Backyard Cloud اختياري بسعر 7-35 دولاراً شهرياً',
            'محلي مقابل سحابي': 'محلي افتراضياً؛ فئة سحابية مدفوعة صريحة للاستدلال المُستضاف',
            'الفرق الرئيسي': 'تطبيق لعب أدوار موجَّه لسطح المكتب مع Character Hub أكبر بكثير؛ الفئة السحابية منتج منفصل بسعر واضح وليست وضعاً مجانياً اختيارياً',
          },
          {
            'التطبيق': '[LLM Farm](https://llmfarm.space/)',
            'المنصات': 'iOS/Mac (مفتوح المصدر، GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            'السعر': 'مجاني، مفتوح المصدر',
            'محلي مقابل سحابي': 'محلي بالكامل',
            'الفرق الرئيسي': 'أُزيل من App Store و TestFlight وفقاً لملف README الخاص به على GitHub — تحقق من التوفر الحالي قبل الاعتماد عليه',
          },
          {
            'التطبيق': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'المنصات': 'تطبيق Flutter متعدد المنصات (أندرويد أساساً)',
            'السعر': 'مجاني، مفتوح المصدر (MIT)',
            'محلي مقابل سحابي': 'محلي عبر GGUF/llama.cpp؛ يمكنه أيضاً الاتصال بواجهات برمجية بعيدة إذا أعدّها المستخدم',
            'الفرق الرئيسي': 'مفتوح المصدر بالكامل وليس موجّهاً للعب الأدوار أولاً؛ استخدام الواجهة البعيدة اختياري ويُعدّه المستخدم',
          },
          {
            'التطبيق': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'المنصات': 'أندرويد (يُبنى من الكود المصدري)',
            'السعر': 'مجاني، مفتوح المصدر (AGPL-3.0)',
            'محلي مقابل سحابي': 'محلي عبر GGUF/llama.cpp، أو يتصل بواجهات برمجية بعيدة إذا أُعِدَّ',
            'الفرق الرئيسي': 'دعم Character Card v2 للعب الأدوار، مفتوح المصدر بالكامل، إعداد أكثر تقنية',
          },
          {
            'التطبيق': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'المنصات': 'أندرويد',
            'السعر': 'مجاني، مفتوح المصدر',
            'محلي مقابل سحابي': 'عميل متعدد المزوّدين؛ استدلال محلي عبر مزوّد LiteRT',
            'الفرق الرئيسي': 'يقدّم نفسه كعميل متعدد المزوّدين وليس تطبيق رفيق محلي أولاً',
          },
          {
            'التطبيق': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'المنصات': 'أندرويد (iOS مخطَّط له)',
            'السعر': 'مجاني، مفتوح المصدر',
            'محلي مقابل سحابي': 'على الجهاز عبر Cactus Compute، أو مقترن بخادم مُستضاف ذاتياً',
            'الفرق الرئيسي': 'مصمَّم للاقتران بمساحة عمل AnythingLLM مُستضافة ذاتياً، وليس تطبيق رفيق مستقلاً',
          },
        ],
        note: 'تتغيّر تفاصيل المنصة والسعر والميزات للتطبيقات التابعة لجهات خارجية بشكل متكرر — تحقق من التفاصيل الحالية في صفحة كل تطبيق قبل اتخاذ قرار. ينبغي إعادة التحقق تحديداً من توفر LLM Farm على App Store، إذ وصف ملف README الخاص به على GitHub إزالته من App Store.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Layla مجاني؟',
            a: 'لا، يبلغ سعر تطبيق Layla الرئيسي 19.99 دولاراً كشراء لمرة واحدة على كل من App Store و Google Play. تُظهر صفحة App Store أيضاً ثلاث فئات شراء داخل التطبيق باسم محدد (Monarch بسعر 4.99 دولاراً، Birdwing بسعر 19.99 دولاراً، Blue Morpho بسعر 29.99 دولاراً). أُفيد بوجود نسخة مجانية أكثر محدودية وُزِّعت عبر تنزيل مباشر لملف APK من موقع المطوّر نفسه — تحقق من التوفر الحالي على [layla-network.ai](https://www.layla-network.ai). Layla Cloud، تطبيق مرافق منفصل للدردشة القائمة على السحابة، مجاني التنزيل كتطبيق مستقل.',
          },
          {
            q: 'هل يعمل Layla بالكامل دون اتصال بالإنترنت، بلا أي مكوّن سحابي؟',
            a: 'ليس بالكامل. وفقاً لسياسة خصوصية Layla نفسه، صُمِّم التطبيق الرئيسي للعمل دون اتصال ويحذّر قبل خروج البيانات من الجهاز. لكن Layla يتضمن أيضاً وضعاً منفصلاً يُفعَّل بشكل مستقل يُسمى Layla Cloud يجمع بالفعل بيانات محادثة مجهولة المصدر عندما يفعّله المستخدم. لذا فإن Layla ليس منتجاً محلياً بحتاً كما لو كان تطبيقاً بلا أي ميزة سحابية على الإطلاق؛ القراء الذين يريدون هذا الضمان الأقوى يجب أن يقارنوه بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
          },
          {
            q: 'من يطوّر Layla؟',
            a: 'ينشر Layla شركة [Layla Network Pty Ltd](https://www.layla-network.ai)، وهي شركة مسجّلة في ساوثبورت، كوينزلاند، أستراليا. تُنشر النماذج ذات الأوزان المفتوحة المضبوطة بعلامة Layla التي يستخدمها التطبيق على Hugging Face تحت حساب GitHub [l3utterfly](https://github.com/l3utterfly).',
          },
          {
            q: 'ما النماذج التي يمكن لـ Layla تشغيلها؟',
            a: 'يُنزّل Layla نموذجاً افتراضياً عند التشغيل الأول، ويمكنه أيضاً تحميل نماذج مضبوطة بعلامة Layla منشورة على Hugging Face، أو أي ملف نموذج مخصّص بصيغة GGUF، عبر llama.cpp. تصف منشورات المطوّر التقنية أيضاً دعم واجهات نماذج LiteRT-LM و PTE (ExecuTorch)، إضافة إلى Stable Diffusion 1.5 المحلي لتوليد الصور.',
          },
          {
            q: 'هل يعمل Layla على كل من أندرويد و iPhone؟',
            a: 'نعم. Layla متاح على [Google Play](https://play.google.com/store/apps/details?id=com.layla) لأندرويد وعلى [App Store](https://apps.apple.com/us/app/layla/id6456886656) لـ iPhone و iPad؛ تُظهر صفحة App Store أيضاً توافقاً مع Mac و Apple Vision لنفس التطبيق. لم يُؤكَّد وجود إصدار سطح مكتب أصلي لـ Windows أو Linux وقت إعداد المراجعة.',
          },
          {
            q: 'كم من ذاكرة الوصول العشوائي يحتاج Layla؟',
            a: 'توصي صفحة App Store بحد أدنى 8 جيجابايت من ذاكرة الوصول العشوائي، وهو أعلى من الحد الأدنى الشائع البالغ نحو 4 جيجابايت لدى تطبيقات الدردشة المحلية النصية الأبسط، مما يعكس نماذج Layla الافتراضية الأكبر وتوليد الصور المحلي وميزات الرسوم المتحركة للشخصيات.',
          },
          {
            q: 'ما هو Layla Cloud، وهل هو نفسه تطبيق Layla الرئيسي؟',
            a: 'لا. Layla Cloud وضع منفصل واختياري، أو تطبيق مصغّر، يوفّر دردشة شخصيات قائمة على السحابة للمستخدمين الذين لا يريدون إدارة نماذج محلية. وفقاً لسياسة الخصوصية، لا يكون نشطاً إلا إذا ثبّته المستخدم أو فعّله، وعند نشاطه يجمع سجل محادثات مجهول المصدر لأغراض تصحيح الأخطاء أو تحسين الخدمة. لا يجمع بيانات بأثر رجعي من قبل تفعيله.',
          },
          {
            q: 'هل Layla موثوق؟ هل يبلّغ المستخدمون عن مشاكل؟',
            a: 'يحمل Layla تقييماً قدره 3.8 من 5 من 31 تقييماً على App Store وقت إعداد المراجعة. يذكر بعض المراجعين العلنيين على App Store تعطلاً وميزات دون اتصال غير موثوقة، خصوصاً حول استيراد النماذج المخصّصة على iOS. لم تتحقق هذه المراجعة من استقرار التطبيق الحالي بشكل مستقل — تعامل مع هذه كملاحظات أفاد بها المستخدمون، واختبر التطبيق ضمن فترة استرداد الأموال الخاصة بمنصتك قبل الاعتماد عليه.',
          },
          {
            q: 'هل تطبيق رفيق الذكاء الاصطناعي "Layla" هو نفس شركة مخطِّط السفر بالذكاء الاصطناعي "Layla" الذي استحوذت عليه Expedia؟',
            a: 'لا. تتناول هذه المراجعة تطبيق رفيق الذكاء الاصطناعي على الجهاز الذي تنشره Layla Network Pty Ltd (معرّف App Store 6456886656، حزمة Google Play com.layla). لا علاقة له بشركة تخطيط السفر بالذكاء الاصطناعي المنفصلة "Layla"، ومقرها برلين، التي أعلنت Expedia Group استحواذها عليها عام 2026، ولا بتطبيقات أخرى تحمل الاسم نفسه مثل "Layla – Voice Chat & Party Rooms".',
          },
          {
            q: 'كيف يُقارن Layla بـ PocketPal AI أو Private LLM؟',
            a: 'Layla تطبيق مدفوع ومغلق المصدر بسعر 19.99 دولاراً، يركّز على الرفيق/لعب الأدوار، مع وضع سحابي اختياري قابل للتفعيل، متاح على كل من أندرويد و iOS. PocketPal AI مجاني ومفتوح المصدر ولا يحتوي على أي ميزة دردشة سحابية مدمجة. Private LLM تطبيق مدفوع (4.99 دولاراً) ومغلق المصدر وحصري لأبل وعلى طراز المساعد، بمكتبة نماذج منتقاة أكبر وبلا احتياط سحابي وفقاً لملصق خصوصية App Store. اختر Layla لعمق الرفيق/لعب الأدوار على كلا المنصتين الجوّالتين؛ اختر PocketPal AI لخيار مجاني ومحلي بالكامل ومفتوح المصدر؛ اختر Private LLM لتجربة مساعد أنيقة وحصرية لأبل.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يُعدّ Layla إضافة مميّزة حقاً في فئة الذكاء الاصطناعي المحلي على الجوّال: فهو يراهن على ميزات الرفيق ولعب الأدوار — الشخصيات، الدردشة الجماعية، أكثر من 100 صوت، وتوليد الصور محلياً — التي لا تحاولها تطبيقات دردشة أبسط مثل PocketPal AI أو Private LLM، ويغطي سعره الواحد البالغ 19.99 دولاراً كلاً من أندرويد و iOS بشراء واحد. قصة الخصوصية أكثر دقة من مجرد ادعاء "دون اتصال بالكامل": تصف سياسة المطوّر نفسه نواة محلية افتراضية مع تحذير صريح قبل أي إرسال للبيانات، لكن التطبيق يتضمن أيضاً وضع Layla Cloud الاختياري الذي يجمع بالفعل بيانات محادثة مجهولة المصدر بمجرد أن يفعّله المستخدم — وهو تصميم مختلف جوهرياً عن تطبيق بلا أي مسار سحابي مدمج على الإطلاق. إلى جانب عميل مغلق المصدر، وثلاث فئات شراء داخل التطبيق لا يُنشر محتواها الدقيق بالكامل، وإفادات مستخدمين عن مشاكل موثوقية في ميزات دون اتصال ونماذج مخصّصة على iOS، يناسب Layla القراء الذين يريدون تحديداً مجموعة ميزاته الخاصة بالشخصية/لعب الأدوار ويقبلون هذه المقايضة في الخصوصية. القراء الذين يريدون أقوى ضمان محلي متاح، أو شفافية كاملة للكود المصدري، أو أقل تكلفة يجب أن يبدؤوا بدلاً من ذلك بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Layla على App Store](https://apps.apple.com/us/app/layla/id6456886656) — السعر، فئات الشراء داخل التطبيق، متطلبات المنصة، التقييمات، وسجل الإصدارات.',
          '[Layla على Google Play](https://play.google.com/store/apps/details?id=com.layla) — التوفر والسعر لأندرويد.',
          '[موقع Layla الرسمي](https://www.layla-network.ai) — نظرة عامة على المنتج وأوصاف الميزات التي ينشرها المطوّر.',
          '[سياسة خصوصية Layla](https://blog.layla-network.ai/privacy) — التعامل مع البيانات المحلية مقابل السحابية، نطاق Layla Cloud، والإفصاحات عن جمع البيانات.',
          '[Layla (Cloud) على App Store](https://apps.apple.com/gb/app/layla-cloud/id6764344419) — صفحة التطبيق المنفصل للوضع السحابي الاختياري.',
          '[l3utterfly على GitHub](https://github.com/l3utterfly) و[l3utterfly على Hugging Face](https://huggingface.co/l3utterfly) — منشورات نماذج بعلامة Layla ومشاريع البنية التحتية ذات الصلة (Layla-Server، Layla SDK).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — بديل مجاني ومفتوح المصدر بالكامل ومحلي بالكامل بلا ميزة دردشة سحابية مدمجة.',
          '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — تطبيق حصري لأبل بسعر 4.99 دولاراً على طراز المساعد، بمكتبة نماذج منتقاة أكبر.',
          '[مراجعة Enclave AI](/ar/power-local-llm/enclave-ai-review) — تطبيق آخر للذكاء الاصطناعي على الجهاز موجَّه لأبل، للمقارنة.',
          '[مراجعة Backyard AI: دردشة شخصيات ذكاء اصطناعي محلية ولعب أدوار](/ar/power-local-llm/backyard-ai-review-local-roleplay) — بديل لعب أدوار موجَّه لسطح المكتب بمكتبة شخصيات أكبر بكثير وفئة سحابية بسعر واضح.',
          '[أفضل تطبيقات LLM المحلية لأندرويد في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — نظرة أوسع على تطبيقات أندرويد، للمقارنة.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — نظرة أوسع على تطبيقات iOS، للمقارنة.',
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
    heroImage: '/images/layla-review-hero-zh.webp',
    title: 'Layla 评测(2026):面向 Android 和 iOS 的本地 AI 伴侣应用',
    seoTitle: 'Layla 评测2026:本地 AI 伴侣应用价格与隐私解析',
    intro:
      'Layla 由 [Layla Network Pty Ltd](https://www.layla-network.ai) 开发——这是一家在澳大利亚注册的公司,在 GitHub 上也与开发者 [l3utterfly](https://github.com/l3utterfly) 有关联,后者发布了"Layla"系列经过微调的开放权重模型——是一款面向 Android 和 iOS 的付费应用,核心是在手机上本地运行个人 AI 伴侣,具备超越普通聊天的人设、角色扮演和角色功能。该应用在 App Store 和 Google Play 上均为[一次性付费 19.99 美元](https://apps.apple.com/us/app/layla/id6456886656),App Store 页面还显示了三档具名的应用内购买选项。Layla 的核心聊天功能设计为完全通过 llama.cpp 在设备本地运行 GGUF 模型,但该应用还提供一个默认未启用、需单独同意开启的可选云端模式,名为 Layla Cloud。本评测基于开发商自身的隐私政策、应用商店页面信息和公开文档,而非独立的实测,详细说明了究竟哪些部分真正在本地运行、哪些没有、实际费用如何,以及这款应用适合哪些用户。',
    metaDescription:
      'Layla 评测2026:面向 Android 和 iOS、售价 19.99 美元的本地 AI 伴侣应用。实际本地运行的部分与可选的 Layla Cloud 模式对比、准确价格、支持的模型以及适用人群。',
    twitterDescription:
      'Layla 评测2026:一款售价 19.99 美元、面向 Android 和 iOS 的本地 AI 伴侣应用,具备角色扮演和人设功能。设备端运行的内容、可选云端模式收集的数据,以及与 PocketPal AI、Private LLM 的对比。',
    audience:
      '正在考虑购买付费本地 AI 伴侣/角色扮演应用的 Android 和 iOS 用户,需要准确了解哪些内容留在本地、可选云端模式又会收集哪些数据,以及来自应用商店公开评价的准确价格和可靠性提醒。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Layla review',
    targetKeywords: [
      'layla ai 评测',
      'layla app 本地llm',
      'layla network ai',
      'layla ai android iphone',
      'layla ai 隐私 云端',
      'layla ai 价格',
      '本地 ai 伴侣 应用',
      'layla vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama2 7B Layla', 'OpenLLaMA 3B v2 Layla', 'GGUF models', 'Stable Diffusion 1.5'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**Layla 是一款面向 Android 和 iOS、一次性付费 19.99 美元的应用,由 [Layla Network Pty Ltd](https://www.layla-network.ai) 开发,可在设备本地运行 GGUF 格式的语言模型,提供基于人设的 AI 伴侣,包含角色扮演角色、语音和图像生成功能。** 根据开发商自身的[隐私政策](https://blog.layla-network.ai/privacy),该应用的核心功能设计为离线运行,并会在任何数据离开设备前显示警告——但 Layla 同时也提供一个需单独启用的可选云端模式,名为 Layla Cloud,这与 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 这类完全没有任何云端组件的应用设计不同。希望获得"数据绝不触及服务器"这一最强保证的读者,购买前应仔细权衡这一区别。',
    quickAnswerTop: {
      zh: {
        question: 'Layla 是一款完全离线、仅限本地的 AI 应用吗?',
        answer:
          '大体上是,但并非完全如此。Layla 的核心聊天和角色功能设计为通过 GGUF 模型在设备本地运行,其隐私政策指出应用会在任何数据离开手机前发出警告。但 Layla 也提供一个需单独安装或启用的可选云端模式,名为 Layla Cloud,启用后确实会收集匿名化的对话数据——因此 Layla 并非像部分竞品那样严格意义上的纯本地应用。',
        bullets: [
          '在 [App Store](https://apps.apple.com/us/app/layla/id6456886656) 和 [Google Play](https://play.google.com/store/apps/details?id=com.layla) 均为一次性付费 19.99 美元,另有三档具名的应用内购买选项。',
          '核心聊天通过 llama.cpp 使用 GGUF 模型在设备本地运行;开发商的隐私政策称会在任何数据离开设备前发出警告。',
          'Layla Cloud 是一个独立的可选模式,启用后会收集匿名化的对话数据——默认处于关闭状态。',
          '主打角色扮演:人设角色、群组对话、100 多种文本转语音音色,以及通过 Stable Diffusion 1.5 实现的本地图像生成,均见于应用商店页面信息。',
          '评测时 App Store 评分为 3.8/5(31 条评价);部分评价提到离线功能不够稳定——这属于用户反馈,PromptQuorum 未对此进行独立验证。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Layla 是什么?', anchor: 'what-is-layla' },
      { label: 'Layla 由谁开发?', anchor: 'history-and-developer' },
      { label: '如何开始使用', anchor: 'getting-started' },
      { label: 'Layla 支持哪些模型?', anchor: 'models-supported' },
      { label: 'Layla 在 Android 和 iPhone 上都能用吗?', anchor: 'platform-availability' },
      { label: 'Layla 的价格是多少?', anchor: 'pricing' },
      { label: '隐私:本地聊天 vs. Layla Cloud', anchor: 'privacy' },
      { label: '伴侣与角色扮演功能', anchor: 'key-features' },
      { label: '需要什么硬件?', anchor: 'hardware-requirements' },
      { label: '权衡:优点与局限', anchor: 'tradeoffs' },
      { label: 'Layla 适合谁', anchor: 'who-should-use' },
      { label: 'Layla 不适合谁', anchor: 'who-should-not-use' },
      { label: 'Layla 与其他替代方案对比', anchor: 'vs-alternatives' },
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
            text: 'Layla 是一款由 Layla Network Pty Ltd 开发的 Android 和 iOS 应用,一次性付费 19.99 美元,可在设备本地运行 GGUF 语言模型以提供基于人设的 AI 伴侣,并另外提供一个名为 Layla Cloud 的可选可开启云端模式。',
          },
          {
            type: 'plain-terms',
            text: '这是一款伴侣式聊天应用,安装后可与一个可自定义的 AI 角色对话,该角色主要在你自己的手机上运行,而不是在公司服务器上——与部分完全本地化的应用不同,它还提供一个可选的在线模式,可开启以进行基于云端的聊天,默认并未启用。',
          },
        ],
        items: [
          '价格:在 [App Store](https://apps.apple.com/us/app/layla/id6456886656) 和 Google Play 上[一次性付费 19.99 美元](https://apps.apple.com/us/app/layla/id6456886656),另有三档具名的应用内购买选项,公开页面并未完整说明其具体内容。',
          '开发商:[Layla Network Pty Ltd](https://www.layla-network.ai),一家在澳大利亚注册的公司;Hugging Face 上 Layla 品牌的微调模型发布于 GitHub 账号 [l3utterfly](https://github.com/l3utterfly) 名下。',
          '核心聊天通过 llama.cpp 使用 GGUF 模型在设备本地运行;根据开发商自身的技术博客文章,该应用还支持 LiteRT-LM 和 PTE(ExecuTorch)模型后端,以及通过 Stable Diffusion 1.5 实现的本地图像生成。',
          '隐私:根据开发商的[隐私政策](https://blog.layla-network.ai/privacy),核心功能设计为离线运行,应用会在数据离开设备前发出警告——但默认关闭的独立可选模式 Layla Cloud 是例外。',
          '主打伴侣与角色扮演:可自定义人设、群组对话、100 多种音色和 Live2D 角色动画,使其区别于该类别中更简单的聊天应用。',
          'App Store 评分:评测时为 3.8/5(31 条评价);部分评价提到崩溃和离线行为不稳定——这是用户反馈的问题,本评测未对此进行独立验证。',
        ],
        callouts: [
          {
            type: 'note',
            text: '名称提示:"Layla"这一名称也被多个互不相关的应用和公司使用,包括一家 2026 年被 Expedia Group 收购的 AI 旅行规划公司,以及一款名为"Layla – Voice Chat & Party Rooms"的独立社交应用。本评测仅涉及由 Layla Network Pty Ltd 发布的本地 AI 伴侣应用(App Store ID 6456886656,Google Play 包名 com.layla),该应用也在 [layla-network.ai](https://www.layla-network.ai) 上进行宣传。',
          },
          {
            type: 'note',
            text: '本评测基于 Layla 公开的隐私政策、App Store 和 Google Play 页面信息、开发商自身的技术博客文章以及公开可见的用户评价,资料核实于2026年9月。PromptQuorum 未针对本评测对 Layla 进行独立的实测或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-layla',
        title: 'Layla 是什么?',
        content: [
          '**Layla 是一款面向 Android 和 iOS 的移动应用,核心是基于人设的 AI 伴侣,主要在设备本地运行,使用 [llama.cpp](https://github.com/ggml-org/llama.cpp) 在本地执行 GGUF 格式的开放权重语言模型。** Layla 并未将自己定位为通用聊天客户端,而是押注于角色和角色扮演功能:用户可以创建或下载可自定义的 AI 人格,与多个角色进行群组对话,并通过内置的 Stable Diffusion 1.5 管线在本地生成图像。',
          '根据其自身的[隐私政策](https://blog.layla-network.ai/privacy),"我们应用的核心功能设计为在您的设备上离线运行",该政策指出,在执行任何会将数据发送到设备之外的操作前,应用会显示警告和确认信息。此外,开发商还单独提供一个可选的云端模式——Layla Cloud——其自身商店页面将其描述为"高级版应用『Layla』的云端版本",面向不想自行管理本地模型、技术能力较弱的用户,让他们也能进行角色聊天。这一可选的云端路径将在下方隐私部分详细说明,是注重隐私的读者在购买前需要理解的最重要细节。',
        ],
        note: 'GGUF 是一种文件格式,用于打包经过量化的开放权重语言模型,使其能够通过 llama.cpp 等运行时在消费级硬件上高效运行,而无需每次响应都调用云端 API。',
      },
      history: {
        id: 'history-and-developer',
        title: 'Layla 由谁开发?',
        content: [
          '**Layla 由 [Layla Network Pty Ltd](https://www.layla-network.ai) 发布,这是一家注册于澳大利亚昆士兰州绍斯波特(Southport)的公司,该应用大约在2023年8月首次公开发布。** 该应用背后的模型技术工作在 GitHub 和 Hugging Face 上被归功于用户名为 [l3utterfly](https://github.com/l3utterfly) 的开发者,后者发布了数十个"Layla"品牌的经过微调的开放权重模型——包括 [Llama2 7B Layla](https://huggingface.co/l3utterfly/llama2-7b-layla) 和 [OpenLLaMA 3B v2 Layla](https://huggingface.co/l3utterfly/open-llama-3b-v2-layla)——这些模型的模型卡自身将其描述为 Layla 应用所使用的基础模型。',
          '同一 GitHub 账号还维护着相关的基础设施项目:[Layla-Server](https://github.com/l3utterfly/Layla-Server) 是一个通过 WebRTC 转发 OpenAI 兼容请求的封装工具,让移动应用可以连接到运行自有本地模型的更强大 PC;此外还有 [Layla SDK](https://github.com/l3utterfly/layla-sdk),用于在 Layla 内部构建自定义的迷你应用。这表明该应用周围存在一个持续维护的技术生态系统,而非一次性的静态发布——不过,与 PocketPal AI 完全开源的代码仓库不同,Layla 自身应用的源代码并未公开,因此其内部行为无法像 MIT 许可的应用那样接受独立审计。',
        ],
        items: [
          '发布方:[Layla Network Pty Ltd](https://www.layla-network.ai),注册于澳大利亚昆士兰州绍斯波特。',
          '公开发布时间:根据第三方应用目录信息,约在2023年8月。',
          '模型开发:Layla 品牌的开放权重微调模型发布于 Hugging Face,归属 GitHub 账号 [l3utterfly](https://github.com/l3utterfly)。',
          '相关项目:[Layla-Server](https://github.com/l3utterfly/Layla-Server)(通过 WebRTC 将应用连接到自托管的 PC 后端)和 [Layla SDK](https://github.com/l3utterfly/layla-sdk)(在 Layla 内构建迷你应用)。',
          '客户端应用源代码并未公开——与 PocketPal AI 或 Maid 不同,即便部分底层模型是开放权重的,Layla 应用本身仍为闭源。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用',
        content: [
          '**根据应用自身的商店描述和技术博客文章,购买后需完成几个步骤才能在 Layla 中开始本地聊天。** 使用核心本地功能无需账号。',
        ],
        numberedItems: [
          {
            title: '购买并安装应用',
            whyItMatters: '从 [App Store](https://apps.apple.com/us/app/layla/id6456886656)(19.99 美元)或 [Google Play](https://play.google.com/store/apps/details?id=com.layla)(19.99 美元)下载 Layla。据报道,开发商自己的网站还提供功能更受限的免费版本,可通过直接下载 APK 获取——在假定该选项适用于你的平台之前,请直接在 [layla-network.ai](https://www.layla-network.ai) 上确认当前的可用情况。',
          },
          {
            title: '让应用下载其默认模型',
            whyItMatters: '首次启动时,Layla 会先下载一个语言模型(据报道,以往版本约为 4 GB),之后才能开始聊天;该模型只需下载一次。',
          },
          {
            title: '选择或自定义人设',
            whyItMatters: '选择一个内置角色,或自己创建一个具有名称、性格和语音的角色——Layla 的界面是围绕角色而非单一通用聊天线程组织的。',
          },
          {
            title: '可选:导入自定义 GGUF 模型',
            whyItMatters: '高级用户可以加载自己的 GGUF 格式模型文件,替代或补充应用的默认模型。',
          },
          {
            title: '离线聊天,或启用 Layla Cloud',
            whyItMatters: '模型下载完成后,本地聊天和图像生成无需网络连接。Layla Cloud 是一个需要明确安装或启用的独立可选模式——它并不属于上述默认的本地体验。',
          },
        ],
        note: '部分 App Store 和 Google Play 评价指出,以往版本中离线模型加载和自定义模型导入不够稳定,尤其是在 iOS 上。本评测未对当前的稳定性进行独立验证——在依赖该应用之前,建议在你所在平台的退款期限内测试初始设置。',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Layla 支持哪些模型?',
        itemHeadings: true,
        columns: ['模型类型', '获取方式', '典型用途'],
        rows: [
          {
            '模型类型': '内置默认模型',
            '获取方式': '首次启动时自动下载',
            '典型用途': '开箱即用的通用伴侣聊天,无需配置',
          },
          {
            '模型类型': 'Layla 品牌微调模型',
            '获取方式': '由开发者 l3utterfly 发布于 [Hugging Face](https://huggingface.co/l3utterfly)(例如 Llama2 7B Layla、OpenLLaMA 3B v2 Layla)',
            '典型用途': '针对应用角色格式调优的角色扮演与人设导向聊天',
          },
          {
            '模型类型': '自定义 GGUF 导入',
            '获取方式': '从设备存储或 Hugging Face 手动导入任意 GGUF 格式文件',
            '典型用途': '已拥有偏好的 GGUF 格式开放权重模型的用户',
          },
          {
            '模型类型': 'LiteRT-LM 和 PTE(ExecuTorch)模型',
            '获取方式': '根据开发商的技术博客文章,属于可选的设备端运行时后端',
            '典型用途': '超越简单 llama.cpp/GGUF 的、针对设备或后端优化的推理',
          },
          {
            '模型类型': 'Stable Diffusion 1.5',
            '获取方式': '根据开发商的技术博客文章,在设备本地运行以生成图像',
            '典型用途': '无需云端图像 API 即可在本地生成角色或场景图像',
          },
        ],
        note: '内置模型的具体身份和默认下载大小在不同应用版本间有所变化;在流量有限的情况下下载之前,请在应用内确认当前的默认模型及其大小。',
      },
      platform: {
        id: 'platform-availability',
        title: 'Layla 在 Android 和 iPhone 上都能用吗?',
        itemHeadings: true,
        columns: ['平台', '可用性', '备注'],
        rows: [
          {
            '平台': 'iPhone / iPad',
            '可用性': '在 [App Store](https://apps.apple.com/us/app/layla/id6456886656) 上提供,需要 iOS 16.4 / iPadOS 16.4 或更高版本',
            '备注': 'App Store 页面还显示同一应用兼容 Mac(macOS 13.0、Apple M1 或更高)和 Apple Vision(visionOS 1.0 或更高)。',
          },
          {
            '平台': 'Android',
            '可用性': '在 [Google Play](https://play.google.com/store/apps/details?id=com.layla) 上提供',
            '备注': '据报道,开发商自己的网站也提供了独立于 Google Play 的直接 APK 分发渠道——依赖它之前请直接确认当前的可用情况。',
          },
          {
            '平台': 'Windows / Linux',
            '可用性': '截至评测时,未确认存在原生的 Windows 或 Linux 桌面版本',
            '备注': '[Layla-Server](https://github.com/l3utterfly/Layla-Server) 项目让移动应用可以通过 WebRTC 连接到运行自有本地后端的 PC,这是一种桥接方式,而非原生桌面客户端。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Layla 的价格是多少?',
        content: [
          '**Layla 在 [Apple App Store](https://apps.apple.com/us/app/layla/id6456886656) 和 [Google Play](https://play.google.com/store/apps/details?id=com.layla) 上均为一次性付费 19.99 美元。** 在这一基础购买之外,App Store 页面还显示了三档具名的应用内购买选项——Monarch(4.99 美元)、Birdwing(19.99 美元)和 Blue Morpho(29.99 美元)——但公开的商店页面并未完整说明每档具体解锁的内容(例如是否包含云端使用额度、高级角色或额外音色)。购买前,请在应用内确认某一档具体包含的内容。',
          '根据开发商自身博客内容,据报道还有一个功能更受限的免费版本,通过开发商自己网站上的直接 APK 下载提供——这与 App Store 和 Google Play 上的付费版本不同,其当前可用情况和功能集应直接在 [layla-network.ai](https://www.layla-network.ai) 上确认,而非根据本评测假设。',
          'Layla Cloud 作为独立的可选云端聊天模式,在应用商店中以独立应用形式免费下载;持续使用 Layla Cloud 是否需要在免费额度之外订阅或消耗额度,本文查阅的公开页面信息中并未说明。',
        ],
        items: [
          '**基础应用:** 在 App Store 和 Google Play 均为一次性付费 19.99 美元——基础购买本身无需订阅。',
          '**应用内购买档位:** Monarch(4.99 美元)、Birdwing(19.99 美元)、Blue Morpho(29.99 美元)——在 App Store 页面中列出;具体内容公开信息中未完整说明。',
          '**免费/受限版本:** 据报道可通过开发商自己网站的直接 APK 下载获得,与付费商店页面分开——请直接确认当前状态。',
          '**Layla Cloud:** 一款独立且免费下载的伴侣应用,提供基于云端的角色聊天;其在免费额度之外的具体费用结构在公开页面中未说明。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私:本地聊天 vs. Layla Cloud',
        content: [
          '**Layla 自身的[隐私政策](https://blog.layla-network.ai/privacy)指出,"我们应用的核心功能设计为在您的设备上离线运行",并称在任何会将您的数据发送到设备之外的操作前,应用都会显示警告和确认信息。** 该政策列出了触发数据外传的具体场景:将角色上传到 Personality Hub、使用应用内"举报错误"功能,以及启用可选的云端功能。',
          '最后一项——可选的云端功能——即 Layla Cloud,开发商将其描述为一个独立的单独模式:根据该政策,"只有在 Layla 内安装『Layla Cloud』迷你应用后,Layla Cloud 才会启用",如果未安装或启用,"任何与 Layla Cloud 相关的功能都不会生效"。当 Layla Cloud 处于活跃状态时,开发商自身的文档指出它会收集对话历史——你的消息、角色的回复,以及长期记忆(Long-Term Memory)、PDF Digest 和 Dream 等辅助功能产生的数据——这些数据经过匿名化处理且不与你的账号关联,但可能用于调试或改进服务。该政策还指出,Layla Cloud 不会追溯收集其启用之前的对话。',
          '综合来看,这与核心功能完全不含任何云端组件的应用相比,是一种截然不同的隐私设计:Layla 默认的本地模式设计为在传输前设置明确的同意关卡,从而将数据留在设备上,但产品本身确实提供了一条可选、需单独启用的云端路径,一旦用户开启,就会收集匿名化的对话数据。希望获得最强保证——即产品从一开始就没有任何可开启的云端模式——的读者,应将其与 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 进行比较,后者的全部代码库均以 MIT 许可开源,不包含任何内置的云端聊天功能。',
        ],
        items: [
          '**本地模式:** 根据开发商的政策,设计为离线运行;据称应用会在数据离开设备前发出警告并要求确认。',
          '**Layla Cloud:** 一种独立的可选启用模式(以迷你应用或独立应用形式安装),启用后会收集匿名化的对话历史,包括辅助功能产生的数据。',
          '**不追溯:** 根据政策,启用 Layla Cloud 不会纳入其启用之前的对话历史。',
          '**闭源:** 与 PocketPal AI 或 Maid 不同,Layla 的客户端代码并未公开,因此"默认不传输"的说法依据的是开发商自身的隐私政策,而非独立的代码审计。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测并未对 Layla 的网络流量或源代码进行独立审计。上述描述反映的是开发商公开发布的隐私政策和商店页面信息,而非 PromptQuorum 进行的独立安全评估。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '伴侣与角色扮演功能',
        content: [
          '**根据自身在应用商店中的描述,Layla 的功能集更多围绕人设和角色扮演场景构建,而非简单的问答式聊天界面。** 提到的功能包括:',
        ],
        items: [
          '**可自定义的人格。** 用户可以创建或下载具有独特人设的 AI 角色,而非只能与单一固定的助手身份对话。',
          '**群组对话。** 根据应用页面信息,多个角色可以参与同一个对话线程。',
          '**100 多种音色。** 该应用列出了一个规模庞大的语音库,用于以文本转语音方式生成角色回复。',
          '**Live2D 角色动画。** 提供可视化、动态的角色呈现,而非单纯的文本界面。',
          '**本地图像生成。** 根据开发商的技术博客文章,内置的 Stable Diffusion 1.5 管线在设备本地运行,用于生成角色或场景图像。',
          '**可编程代理(Python)。** 根据应用自身描述,高级用户可以使用 Python 编写具有代理性质的行为脚本。',
          '**本地推理未内置内容过滤器。** 由于本地生成完全在设备自身硬件上执行,开发商自身的资料将此模式描述为没有服务器端的内容审核层——这是一项有意的设计选择,将合理使用的责任转移给了个人用户,而非托管式审核系统。',
        ],
        note: '功能可用性、语音库规模以及某些模型集成方式在不同应用版本间有所变化;请在应用内确认当前的功能可用情况,而不要假设旧版营销材料中描述的一切都仍无变化地适用。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '运行 Layla 需要什么硬件?',
        content: [
          '**App Store 页面建议最低配备 8 GB 内存(RAM),而 Layla 自身的宣传材料历来将该应用定位为面向近期旗舰智能手机,而非经济型或较旧的硬件。** 这一门槛比部分竞品本地聊天应用更为严格,后者通常可用 4 GB 内存流畅支持 2-4B 参数的小型模型——Layla 的伴侣功能(更大的默认模型、本地图像生成和角色动画)提高了实际的硬件下限。',
          '与任何基于 GGUF 的应用一样,真正决定内存需求的是所加载的具体模型,而非应用本身:较小的量化模型所需内存低于 70 亿参数以上的模型,而在聊天的同时并行运行本地 Stable Diffusion 图像生成,会带来超出纯文本推理的额外内存和处理开销。',
        ],
        items: [
          '建议最低配置:根据 App Store 页面信息,为 8 GB 内存——明显高于该类别中更简单的本地聊天应用常见的 4 GB 下限。',
          '根据开发商自身的宣传材料,建议使用近期旗舰级智能手机(大致为最近几代产品),而非较旧或经济型设备。',
          '存储空间:据报道,以往版本首次启动时的默认模型下载约为 4 GB;自定义 GGUF 模型和 Stable Diffusion 检查点会增加额外的存储需求。',
          '本地图像生成(Stable Diffusion 1.5)会带来超出纯文本聊天的处理和内存开销——在内存较低的设备上使用该功能时,预期性能会更慢。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡:优点与局限',
        columns: ['优点', '实际使用中的含义', '局限 / 提醒'],
        rows: [
          {
            '优点': '伴侣与角色扮演的深度',
            '实际使用中的含义': '人设角色、群组聊天、100 多种音色以及 Live2D 动画,超越了简单的聊天界面。',
            '局限 / 提醒': '只想要简单助手式聊天的读者,可能会觉得 PocketPal AI 或 Private LLM 更易上手。',
          },
          {
            '优点': '本地文本与图像生成',
            '实际使用中的含义': '聊天和 Stable Diffusion 1.5 图像生成均可完全在设备本地运行。',
            '局限 / 提醒': '相比纯文本本地聊天应用,需要明显更多的内存和存储空间;App Store 列出的最低要求为 8 GB。',
          },
          {
            '优点': '数据外传前的明确同意关卡',
            '实际使用中的含义': '根据隐私政策,在角色上传或错误报告等功能将数据发送到设备之外前,应用会发出警告。',
            '局限 / 提醒': '该应用同时也提供可选的 Layla Cloud 模式,一旦用户选择开启,确实会收集匿名化的对话数据——按设计而言,这并非一款完全没有云端组件的产品。',
          },
          {
            '优点': '持续的模型与基础设施开发',
            '实际使用中的含义': 'Hugging Face 上 Layla 品牌的微调模型以及 Layla-Server 等相关项目,显示出持续的技术投入。',
            '局限 / 提醒': '客户端应用自身的源代码为闭源,因此无法像 PocketPal AI 或 Maid 那样对其行为进行独立审计。',
          },
          {
            '优点': '19.99 美元一次性付费',
            '实际使用中的含义': '两个应用商店均不要求订阅即可使用基础应用。',
            '局限 / 提醒': '另有三档具名的应用内购买选项,其确切内容在公开页面中未完整说明——请在应用内确认自己具体购买了什么。',
          },
          {
            '优点': '跨平台:Android 与 iOS',
            '实际使用中的含义': '在两大主流移动平台均可使用,不同于 Private LLM 这类仅限 Apple 的应用。',
            '局限 / 提醒': 'App Store 上的公开评价称部分设备存在崩溃和离线功能不稳定的情况——属于用户反馈,PromptQuorum 未对此进行独立验证。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Layla 适合谁',
        items: [
          '**希望获得伴侣/角色扮演式本地 AI,而非单纯助手的用户。** 如果比起极简的聊天界面,人设角色、群组对话和语音输出对你更重要,那么 Layla 的功能集正是为这一用例而构建的。',
          '**希望在聊天之外还能进行本地图像生成的用户。** 内置的 Stable Diffusion 1.5 管线让单一应用可以在设备本地同时处理文本和图像生成。',
          '**能接受一次性付费购买应用、而非使用免费工具的用户。** 19.99 美元即可在两大主流移动平台上永久解锁基础应用。',
          '**仔细阅读隐私政策、并能接受可选云端模式的用户。** Layla 默认本地、在数据外传前明确警告的设计,对于不需要完全没有任何云端能力产品的读者来说,可能是一个可以接受的折中方案。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Layla 不适合谁',
        items: [
          '**需要保证完全不含云端组件产品的读者。** 由于 Layla 提供了一个可选的云端模式(Layla Cloud),一旦启用就会收集匿名化数据,特别希望使用一款从一开始就没有任何可开启云端功能应用的读者,应选择 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review),其全部开源代码中不包含任何内置的云端聊天路径。',
          '**希望使用免费或完全开源应用的读者。** Layla 是一款售价 19.99 美元的付费闭源应用;PocketPal AI(免费,MIT 许可)和 Maid(免费,MIT 许可)可以满足这一需求。',
          '**希望使用简洁、极简助手式聊天界面的读者。** Layla 以角色和人设为先的设计,增加了那些只想要简单问答式聊天的用户可能并不需要的复杂度;Private LLM 或 PocketPal AI 的形态更接近助手。',
          '**内存较低或设备较旧的读者。** App Store 将 8 GB 内存列为最低建议配置,高于多款可用 4 GB 内存流畅运行较小模型的竞品应用。',
          '**需要企业或团队功能的读者。** Layla 是一款面向单一用户的消费级应用,没有管理控制台、共享许可管理或团队计费功能;组织机构应转而考虑自托管的服务器端本地 LLM 基础设施。',
          '**希望自行独立审计应用源代码的读者。** Layla 的客户端应用为闭源;需要这一保证级别的读者应使用 PocketPal AI、Maid 或 ChatterUI 等采用 MIT 或 AGPL 许可的替代方案。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Layla 与其他替代方案对比',
        columns: ['应用', '平台', '价格', '本地 vs. 云端', '主要区别'],
        rows: [
          {
            '应用': 'Layla',
            '平台': 'Android、iPhone/iPad(根据 App Store 页面还包括 Mac/Vision Pro)',
            '价格': '一次性付费 19.99 美元,另有具名的应用内购买档位',
            '本地 vs. 云端': '设计上以本地为主;可选的可开启 Layla Cloud 模式',
            '主要区别': '主打伴侣/角色扮演:人设、群组聊天、语音、本地图像生成',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iPhone/iPad、Android',
            '价格': '免费,开源(MIT)',
            '本地 vs. 云端': '完全本地;不含内置云端聊天功能',
            '主要区别': '免费、完全开源,更偏向简单聊天而非角色扮演',
          },
          {
            '应用': 'Private LLM',
            '平台': 'iPhone/iPad/Mac(仅限 Apple)',
            '价格': '一次性付费 4.99 美元',
            '本地 vs. 云端': '完全本地;根据 App Store 隐私标签,无云端回退',
            '主要区别': '140 多个精选模型,采用 OmniQuant/GPTQ 量化;偏助手风格,而非角色扮演优先',
          },
          {
            '应用': '[Enclave AI](/zh/power-local-llm/enclave-ai-review)',
            '平台': '当前平台支持情况请参阅完整评测',
            '价格': '请参阅当前页面信息',
            '本地 vs. 云端': '请参阅完整评测',
            '主要区别': '面向 Apple 的设备端助手,支持 Siri/Shortcuts 集成',
          },
          {
            '应用': '[Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay)',
            '平台': 'Windows/Mac 桌面版(Backyard Cloud 增加移动端/网页端同步)',
            '价格': '免费桌面应用;可选 Backyard Cloud 每月 7-35 美元',
            '本地 vs. 云端': '默认本地;针对托管推理提供明确的付费云端档位',
            '主要区别': '以桌面为先的角色扮演应用,拥有规模大得多的 Character Hub;云端档位是价格明确的独立产品,而非免费的可选模式',
          },
          {
            '应用': '[LLM Farm](https://llmfarm.space/)',
            '平台': 'iOS/Mac(开源,GitHub:[guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            '价格': '免费,开源',
            '本地 vs. 云端': '完全本地',
            '主要区别': '根据其自身 GitHub README,已从 App Store 和 TestFlight 下架——依赖之前请确认当前可用情况',
          },
          {
            '应用': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            '平台': '跨平台 Flutter 应用(主要面向 Android)',
            '价格': '免费,开源(MIT)',
            '本地 vs. 云端': '通过 GGUF/llama.cpp 实现本地运行;若用户自行配置,也可连接远程 API',
            '主要区别': '完全开源,并非以角色扮演为先;远程 API 的使用为可选且由用户自行配置',
          },
          {
            '应用': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            '平台': 'Android(需从源码构建)',
            '价格': '免费,开源(AGPL-3.0)',
            '本地 vs. 云端': '通过 GGUF/llama.cpp 实现本地运行,或在配置后连接远程 API',
            '主要区别': '支持 Character Card v2 角色扮演格式,完全开源,配置更偏技术性',
          },
          {
            '应用': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            '平台': 'Android',
            '价格': '免费,开源',
            '本地 vs. 云端': '多提供商客户端;通过 LiteRT 提供商实现本地推理',
            '主要区别': '将自身定位为多提供商客户端,而非本地优先的伴侣应用',
          },
          {
            '应用': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            '平台': 'Android(iOS 计划中)',
            '价格': '免费,开源',
            '本地 vs. 云端': '通过 Cactus Compute 在设备端运行,或与自托管服务器配合使用',
            '主要区别': '设计用于配合自托管的 AnythingLLM 工作空间使用,而非独立的伴侣应用',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化——在做决定前,请在各应用自身的页面上核实当前的具体信息。LLM Farm 在 App Store 上的可用性尤其需要重新核实,因为其自身 GitHub README 曾说明它已从 App Store 下架。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Layla 免费吗?',
            a: '不是,Layla 主应用在 App Store 和 Google Play 上均为一次性付费 19.99 美元。App Store 页面还显示了三档具名的应用内购买选项(Monarch 4.99 美元、Birdwing 19.99 美元、Blue Morpho 29.99 美元)。据报道,还有一个功能更受限的免费版本,可通过开发商自己网站上的直接 APK 下载获得——请在 [layla-network.ai](https://www.layla-network.ai) 上确认当前的可用情况。Layla Cloud 是一款用于基于云端聊天的独立伴侣应用,作为独立应用可免费下载。',
          },
          {
            q: 'Layla 是否完全离线运行,完全不含任何云端组件?',
            a: '并非完全如此。根据 Layla 自身的隐私政策,核心应用设计为离线运行,并会在数据离开设备前发出警告。但 Layla 同时也提供一个名为 Layla Cloud 的独立可单独启用模式,一旦用户开启,确实会收集匿名化的对话数据。因此,Layla 并非像完全不含任何云端功能的应用那样严格意义上的纯本地产品;希望获得这一更强保证的读者,应将其与 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 进行比较。',
          },
          {
            q: 'Layla 由谁开发?',
            a: 'Layla 由 [Layla Network Pty Ltd](https://www.layla-network.ai) 发布,该公司注册于澳大利亚昆士兰州绍斯波特。应用所使用的 Layla 品牌开放权重微调模型发布于 Hugging Face,归属 GitHub 账号 [l3utterfly](https://github.com/l3utterfly)。',
          },
          {
            q: 'Layla 可以运行哪些模型?',
            a: 'Layla 首次启动时会下载一个默认模型,还可以通过 llama.cpp 加载发布在 Hugging Face 上的 Layla 品牌微调模型,或任何自定义的 GGUF 格式模型文件。开发商的技术博客文章还介绍了对 LiteRT-LM 和 PTE(ExecuTorch)模型后端的支持,以及用于图像生成的本地 Stable Diffusion 1.5。',
          },
          {
            q: 'Layla 在 Android 和 iPhone 上都能使用吗?',
            a: '可以。Layla 在 Android 上通过 [Google Play](https://play.google.com/store/apps/details?id=com.layla) 提供,在 iPhone 和 iPad 上通过 [App Store](https://apps.apple.com/us/app/layla/id6456886656) 提供;App Store 页面还显示同一应用兼容 Mac 和 Apple Vision。截至评测时,未确认存在原生的 Windows 或 Linux 桌面版本。',
          },
          {
            q: 'Layla 需要多少内存?',
            a: 'App Store 页面建议最低配备 8 GB 内存,高于更简单的纯文本本地聊天应用常见的约 4 GB 下限,这反映了 Layla 更大的默认模型、本地图像生成以及角色动画功能带来的需求。',
          },
          {
            q: 'Layla Cloud 是什么,它和 Layla 主应用是同一个东西吗?',
            a: '不是。Layla Cloud 是一个独立的可选模式或迷你应用,为不想管理本地模型的用户提供基于云端的角色聊天。根据隐私政策,只有用户安装或启用它后才会生效,处于活跃状态时会收集匿名化的对话历史,用于调试或改进服务。它不会追溯收集其启用之前的数据。',
          },
          {
            q: 'Layla 可靠吗?用户是否反馈过问题?',
            a: '评测时,Layla 在 App Store 上的评分为 3.8/5(31 条评价)。部分公开的 App Store 评价提到崩溃以及不稳定的离线功能,尤其是在 iOS 上导入自定义模型时。本评测未对当前的应用稳定性进行独立验证——请将这些视为用户反馈的观察,并在依赖该应用之前,先在你所在平台的退款期限内进行测试。',
          },
          {
            q: 'AI 伴侣应用"Layla"和被 Expedia 收购的 AI 旅行规划公司"Layla"是同一家公司吗?',
            a: '不是。本评测涉及的是由 Layla Network Pty Ltd 发布的本地 AI 伴侣应用(App Store ID 6456886656,Google Play 包名 com.layla)。它与总部位于柏林、Expedia Group 于2026年宣布收购的另一家独立 AI 旅行规划公司"Layla"没有任何关系,也与"Layla – Voice Chat & Party Rooms"等其他同名应用无关。',
          },
          {
            q: 'Layla 与 PocketPal AI 或 Private LLM 相比如何?',
            a: 'Layla 是一款售价 19.99 美元的付费闭源应用,主打伴侣/角色扮演,并提供可选的可开启云端模式,同时支持 Android 和 iOS。PocketPal AI 免费且开源,完全不包含任何内置的云端聊天功能。Private LLM 是一款售价 4.99 美元的付费闭源应用,仅限 Apple,偏助手风格,拥有更大规模的精选模型库,根据其 App Store 隐私标签,不含云端回退。如果你想在两大移动平台上获得伴侣/角色扮演的深度体验,可选择 Layla;如果想要免费、完全本地且开源的选项,可选择 PocketPal AI;如果想要精致、仅限 Apple 的助手体验,可选择 Private LLM。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Layla 在移动本地 AI 这一类别中确实具有独特性:它押注于人设、群组聊天、100 多种音色和本地图像生成等伴侣与角色扮演功能,而 PocketPal AI 或 Private LLM 这类更简单的聊天应用并未尝试涉足这些领域,而其 19.99 美元的一次性定价,单次购买即可覆盖 Android 和 iOS。隐私方面的实际情况比简单的"完全离线"说法更为复杂:开发商自身的政策描述了一个默认本地的核心,在任何数据传输前都设有明确警告,但该应用同时也提供一个可选的 Layla Cloud 模式,一旦用户开启,确实会收集匿名化的对话数据——这与完全不含内置云端路径的应用相比,是一种实质性不同的设计。再加上闭源客户端、三档具体内容未完全公开的应用内购买选项,以及用户反馈的 iOS 离线功能和自定义模型可靠性问题,Layla 适合那些特别看重其人设/角色扮演功能集、并愿意接受这一隐私权衡的读者。希望获得目前可得的最强纯本地保证、完全的源代码透明度或最低成本的读者,应转而从 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 开始考虑。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[App Store 上的 Layla](https://apps.apple.com/us/app/layla/id6456886656) — 价格、应用内购买档位、平台要求、评分和版本历史。',
          '[Google Play 上的 Layla](https://play.google.com/store/apps/details?id=com.layla) — Android 端的可用性和价格。',
          '[Layla 官方网站](https://www.layla-network.ai) — 产品概览和开发商发布的功能说明。',
          '[Layla 隐私政策](https://blog.layla-network.ai/privacy) — 本地与云端数据处理方式、Layla Cloud 的范围以及数据收集方面的披露。',
          '[App Store 上的 Layla(Cloud)](https://apps.apple.com/gb/app/layla-cloud/id6764344419) — 独立可选云端模式应用的页面信息。',
          '[GitHub 上的 l3utterfly](https://github.com/l3utterfly) 与 [Hugging Face 上的 l3utterfly](https://huggingface.co/l3utterfly) — Layla 品牌模型的发布及相关基础设施项目(Layla-Server、Layla SDK)。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 一款免费、完全开源、完全本地化且不含内置云端聊天功能的替代方案。',
          '[Private LLM 评测](/zh/power-local-llm/private-llm-review) — 一款售价 4.99 美元、仅限 Apple、偏助手风格的应用,拥有更大规模的精选模型库。',
          '[Enclave AI 评测](/zh/power-local-llm/enclave-ai-review) — 另一款面向 Apple 的设备端 AI 应用,可供对比参考。',
          '[Backyard AI 评测:本地 AI 角色聊天与角色扮演](/zh/power-local-llm/backyard-ai-review-local-roleplay) — 一款以桌面为先的角色扮演替代方案,拥有规模大得多的角色库和价格明确的云端档位。',
          '[2026年 Android 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用概览,可供对比参考。',
          '[2026年 iPhone 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iOS 应用概览,可供对比参考。',
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
    heroImage: '/images/layla-review-hero-ko.webp',
    title: 'Layla 리뷰(2026): Android·iOS용 온디바이스 AI 컴패니언 앱',
    seoTitle: 'Layla 리뷰 2026: 로컬 AI 컴패니언 앱 가격 및 개인정보',
    intro:
      'Layla는 [Layla Network Pty Ltd](https://www.layla-network.ai)가 개발했습니다. 이 회사는 호주에 등록되어 있으며, GitHub에서는 "Layla" 브랜드의 파인튜닝된 오픈 웨이트 모델을 공개하는 개발자 [l3utterfly](https://github.com/l3utterfly)와도 연관되어 있습니다. Layla는 스마트폰에서 로컬로 실행되는 개인 AI 컴패니언을 중심으로 설계된 Android·iOS용 유료 앱으로, 단순한 채팅을 넘어선 페르소나·롤플레이·캐릭터 기능을 갖추고 있습니다. App Store와 Google Play 모두에서 [19.99달러 일회성 구매](https://apps.apple.com/us/app/layla/id6456886656)로 제공되며, App Store 페이지에는 이름이 붙은 앱 내 구매 등급 3종도 표시되어 있습니다. Layla의 핵심 채팅 기능은 llama.cpp를 통해 GGUF 모델을 기기에서 완전히 실행하도록 설계되어 있지만, 기본적으로 활성화되어 있지 않고 별도 동의가 필요한 선택적 클라우드 모드인 Layla Cloud도 함께 제공됩니다. 이 리뷰는 자체적인 실사용 테스트가 아니라 개발사 자체의 개인정보 처리방침, 앱스토어 게재 정보, 공개 문서를 근거로 실제로 무엇이 로컬에서 작동하고 무엇이 그렇지 않은지, 실제 비용은 얼마인지, 어떤 독자에게 적합한지를 정확히 다룹니다.',
    metaDescription:
      'Layla 리뷰 2026: Android·iOS용 19.99달러 온디바이스 AI 컴패니언 앱. 실제로 로컬에서 작동하는 부분과 선택적 Layla Cloud 모드의 차이, 정확한 가격, 모델, 적합한 이용자를 분석합니다.',
    twitterDescription:
      'Layla 리뷰 2026: 롤플레이 및 페르소나 기능을 갖춘 Android·iOS용 19.99달러 로컬 AI 컴패니언 앱. 기기에서 작동하는 부분, 선택적 클라우드 모드가 수집하는 항목, PocketPal AI·Private LLM과의 비교를 다룹니다.',
    audience:
      '온디바이스 AI 컴패니언·롤플레이 유료 앱을 검토 중이며, 무엇이 로컬에 남고 선택적 클라우드 모드가 무엇을 수집하는지 정확히 알아야 하는 Android·iOS 이용자. 정확한 가격과 공개 앱스토어 리뷰에 근거한 신뢰성 관련 유의사항도 함께 다룹니다.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Layla review',
    targetKeywords: [
      'layla ai 리뷰',
      'layla app 로컬llm',
      'layla network ai',
      'layla ai android iphone',
      'layla ai 개인정보 클라우드',
      'layla ai 가격',
      '로컬 ai 컴패니언 앱',
      'layla vs pocketpal ai',
    ],
    current_models_mentioned: ['Llama2 7B Layla', 'OpenLLaMA 3B v2 Layla', 'GGUF models', 'Stable Diffusion 1.5'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**Layla는 [Layla Network Pty Ltd](https://www.layla-network.ai)가 개발한 Android·iOS용 19.99달러 일회성 구매 앱으로, GGUF 형식의 언어 모델을 기기에서 실행하여 롤플레이 캐릭터, 음성, 이미지 생성 기능을 갖춘 페르소나 기반 AI 컴패니언을 제공합니다.** 개발사 자체의 [개인정보 처리방침](https://blog.layla-network.ai/privacy)에 따르면, 앱의 핵심 기능은 오프라인으로 작동하도록 설계되어 있으며 데이터가 기기 밖으로 나가기 전에 경고를 표시한다고 명시되어 있습니다. 다만 Layla는 기본적으로 비활성화되어 있고 별도로 활성화해야 하는 선택적 클라우드 모드인 Layla Cloud도 함께 제공하는데, 이는 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)처럼 클라우드 구성 요소가 전혀 없는 앱의 설계와는 다릅니다. "서버에 절대 닿지 않는다"는 가장 강력한 보장을 원하는 독자는 구매 전 이 차이를 신중히 검토해야 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Layla는 완전히 오프라인으로만 작동하는 로컬 전용 AI 앱입니까?',
        answer:
          '대체로 그렇지만 완전히 그렇지는 않습니다. Layla의 핵심 채팅과 캐릭터 기능은 GGUF 모델을 통해 기기에서 작동하도록 설계되어 있으며, 개인정보 처리방침에는 데이터가 휴대폰 밖으로 나가기 전에 경고한다고 명시되어 있습니다. 그러나 Layla는 별도로 설치하거나 활성화해야 하는 선택적 클라우드 모드인 Layla Cloud도 제공하며, 이 모드는 활성화되면 익명화된 대화 데이터를 수집합니다. 따라서 Layla는 일부 경쟁 앱처럼 엄격하게 로컬 전용인 앱은 아닙니다.',
        bullets: [
          '[App Store](https://apps.apple.com/us/app/layla/id6456886656)와 [Google Play](https://play.google.com/store/apps/details?id=com.layla)에서 19.99달러 일회성 구매, 이름이 붙은 앱 내 구매 등급 3종 추가 제공.',
          '핵심 채팅은 llama.cpp를 사용해 GGUF 모델로 기기에서 작동하며, 개발사의 개인정보 처리방침에 따르면 데이터가 기기 밖으로 나가기 전에 경고한다고 명시되어 있음.',
          'Layla Cloud는 별도의 선택적 모드로, 활성화되면 익명화된 대화 데이터를 수집하며 기본값은 비활성화 상태.',
          '롤플레이 중심: 페르소나 캐릭터, 그룹 대화, 100개 이상의 TTS 음성, Stable Diffusion 1.5를 통한 로컬 이미지 생성(앱스토어 게재 정보 기준).',
          '리뷰 시점 기준 App Store 평점은 31건의 평가에서 3.8/5; 일부 리뷰는 오프라인 기능의 불안정성을 지적하나, 이는 이용자 제보이며 PromptQuorum이 독립적으로 검증한 사항은 아님.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Layla란 무엇인가?', anchor: 'what-is-layla' },
      { label: 'Layla를 개발한 곳은?', anchor: 'history-and-developer' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: 'Layla가 지원하는 모델은?', anchor: 'models-supported' },
      { label: 'Layla는 Android와 iPhone에서 사용 가능한가?', anchor: 'platform-availability' },
      { label: 'Layla의 가격은?', anchor: 'pricing' },
      { label: '개인정보: 로컬 채팅 vs. Layla Cloud', anchor: 'privacy' },
      { label: '컴패니언·롤플레이 기능', anchor: 'key-features' },
      { label: '필요한 하드웨어는?', anchor: 'hardware-requirements' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: 'Layla가 적합한 이용자', anchor: 'who-should-use' },
      { label: 'Layla가 적합하지 않은 이용자', anchor: 'who-should-not-use' },
      { label: 'Layla와 대안 비교', anchor: 'vs-alternatives' },
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
            text: 'Layla는 Layla Network Pty Ltd가 개발한 Android·iOS용 19.99달러 일회성 구매 앱으로, GGUF 언어 모델을 기기에서 실행하여 페르소나 기반 AI 컴패니언을 제공하며, 별도로 Layla Cloud라는 선택적 옵트인 클라우드 모드도 제공합니다.',
          },
          {
            type: 'plain-terms',
            text: '기업 서버가 아니라 주로 자신의 휴대폰에서 실행되는 커스터마이즈 가능한 AI 캐릭터와 대화하기 위해 설치하는 컴패니언형 채팅 앱입니다. 완전히 로컬인 일부 앱과 달리, 클라우드 기반 채팅을 위해 켤 수 있는 선택적 온라인 모드도 있지만 기본적으로 활성화되어 있지 않습니다.',
          },
        ],
        items: [
          '가격: [App Store](https://apps.apple.com/us/app/layla/id6456886656)와 Google Play에서 [19.99달러 일회성 구매](https://apps.apple.com/us/app/layla/id6456886656), 공개 페이지에 정확한 내용이 전부 나와 있지 않은 이름 붙은 앱 내 구매 등급 3종 추가.',
          '개발사: [Layla Network Pty Ltd](https://www.layla-network.ai), 호주에 등록된 회사; Hugging Face의 Layla 브랜드 파인튜닝 모델은 GitHub 계정 [l3utterfly](https://github.com/l3utterfly) 명의로 공개됨.',
          '핵심 채팅은 llama.cpp를 사용해 GGUF 모델로 기기에서 작동함; 개발사 자체 기술 블로그 게시물에 따르면 LiteRT-LM 및 PTE(ExecuTorch) 모델 백엔드와 Stable Diffusion 1.5를 통한 로컬 이미지 생성도 지원함.',
          '개인정보: 개발사의 [개인정보 처리방침](https://blog.layla-network.ai/privacy)에 따르면 핵심 기능은 오프라인으로 작동하도록 설계되어 있으며 기본적으로 비활성화된 별도의 선택적 Layla Cloud 모드를 제외하고는 데이터가 기기 밖으로 나가기 전에 경고함.',
          '컴패니언·롤플레이 중심: 커스터마이즈 가능한 페르소나, 그룹 대화, 100개 이상의 음성, Live2D 캐릭터 애니메이션이 이 카테고리의 더 단순한 채팅 앱들과 차별화되는 요소.',
          'App Store 평점: 리뷰 시점 기준 31건의 평가에서 3.8/5; 일부 리뷰는 충돌 및 불안정한 오프라인 동작을 지적하며, 이는 이 리뷰가 독립적으로 검증하지 않은 이용자 제보 사항임.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이름 관련 참고: "Layla"라는 이름은 2026년 Expedia Group에 인수된 AI 여행 계획 기업, "Layla – Voice Chat & Party Rooms"라는 별개의 소셜 앱 등 서로 무관한 여러 앱과 기업에서 사용됩니다. 이 리뷰는 Layla Network Pty Ltd가 게시한 온디바이스 AI 컴패니언 앱(App Store ID 6456886656, Google Play 패키지 com.layla)만을 다루며, 이 앱은 [layla-network.ai](https://www.layla-network.ai)에서도 소개됩니다.',
          },
          {
            type: 'note',
            text: '이 리뷰는 Layla의 공개 개인정보 처리방침, App Store 및 Google Play 게재 정보, 개발사 자체 기술 블로그 게시물, 공개적으로 확인 가능한 이용자 리뷰를 근거로 하며 2026년 9월 기준으로 확인되었습니다. PromptQuorum은 이 리뷰를 위해 Layla에 대한 독립적인 실사용 테스트나 벤치마크를 수행하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-layla',
        title: 'Layla란 무엇인가?',
        content: [
          '**Layla는 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 사용해 GGUF 형식의 오픈 웨이트 언어 모델을 로컬에서 실행하는, 페르소나 기반 AI 컴패니언을 중심으로 한 Android·iOS용 모바일 앱입니다.** 범용 채팅 클라이언트로 자리매김하는 대신, Layla는 캐릭터·롤플레이 기능에 주력합니다. 이용자는 커스터마이즈 가능한 AI 페르소나를 만들거나 다운로드할 수 있고, 여러 캐릭터와 그룹 대화를 나눌 수 있으며, 내장된 Stable Diffusion 1.5 파이프라인을 통해 로컬에서 이미지를 생성할 수 있습니다.',
          '자체 [개인정보 처리방침](https://blog.layla-network.ai/privacy)에 따르면 "당사 앱의 핵심 기능은 사용자 기기에서 오프라인으로 작동하도록 설계되었습니다"라고 명시되어 있으며, 해당 방침은 기기 밖으로 데이터를 전송하는 어떤 조치를 취하기 전에도 경고 및 확인 메시지를 표시한다고 밝히고 있습니다. 이와 별개로 개발사는 선택적 클라우드 기반 모드인 Layla Cloud도 제공하는데, 자체 스토어 페이지에서는 이를 "프리미엄 앱 \'Layla\'의 클라우드 버전"으로 설명하며, 로컬 모델을 관리하지 않고도 캐릭터 채팅을 원하는 비기술적 이용자를 대상으로 합니다. 아래 개인정보 섹션에서 자세히 다룰 이 선택적 클라우드 경로는, 개인정보를 중시하는 독자가 구매 전에 이해해야 할 가장 중요한 세부 사항입니다.',
        ],
        note: 'GGUF는 양자화된 오픈 웨이트 언어 모델을 패키징하는 파일 형식으로, 매 응답마다 클라우드 API를 호출하는 대신 llama.cpp와 같은 런타임을 통해 소비자용 하드웨어에서 효율적으로 실행되도록 합니다.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Layla를 개발한 곳은?',
        content: [
          '**Layla는 호주 퀸즐랜드주 사우스포트에 등록된 [Layla Network Pty Ltd](https://www.layla-network.ai)가 게시하며, 이 앱은 2026년경이 아니라 2023년 8월경 처음 공개적으로 출시되었습니다.** 앱을 뒷받침하는 기술적 모델 작업은 GitHub와 Hugging Face에서 [l3utterfly](https://github.com/l3utterfly)라는 사용자명의 개발자에게 귀속되며, 이 개발자는 [Llama2 7B Layla](https://huggingface.co/l3utterfly/llama2-7b-layla)와 [OpenLLaMA 3B v2 Layla](https://huggingface.co/l3utterfly/open-llama-3b-v2-layla)를 포함해 "Layla" 브랜드의 파인튜닝된 오픈 웨이트 모델 수십 개를 공개했으며, 각 모델 카드에서 이를 Layla 앱이 사용하는 기반 모델로 설명하고 있습니다.',
          '같은 GitHub 계정은 인접한 인프라 프로젝트도 유지 관리합니다. [Layla-Server](https://github.com/l3utterfly/Layla-Server)는 OpenAI 호환 요청을 WebRTC를 통해 중계하는 래퍼로, 모바일 앱이 자체 로컬 모델을 실행하는 더 강력한 PC에 연결할 수 있게 해주며, [Layla SDK](https://github.com/l3utterfly/layla-sdk)는 Layla 내에서 실행되는 커스텀 미니 앱을 만들기 위한 것입니다. 이는 단일 정적 릴리스가 아니라 앱을 둘러싼 활발히 유지 관리되는 기술 생태계를 시사합니다. 다만 PocketPal AI의 완전한 오픈소스 저장소와 달리, Layla 자체 앱의 소스 코드는 공개되어 있지 않아 MIT 라이선스 앱처럼 내부 동작을 독립적으로 감사할 수는 없습니다.',
        ],
        items: [
          '게시자: [Layla Network Pty Ltd](https://www.layla-network.ai), 호주 퀸즐랜드주 사우스포트에 등록.',
          '공개 출시: 서드파티 앱 디렉터리에 따르면 2023년 8월경.',
          '모델 개발: Layla 브랜드의 오픈 웨이트 파인튜닝 모델은 GitHub 계정 [l3utterfly](https://github.com/l3utterfly) 명의로 Hugging Face에 공개됨.',
          '관련 프로젝트: [Layla-Server](https://github.com/l3utterfly/Layla-Server)(WebRTC를 통해 앱을 자체 호스팅 PC 백엔드에 연결)와 [Layla SDK](https://github.com/l3utterfly/layla-sdk)(Layla 내에서 미니 앱 제작).',
          '클라이언트 앱 소스 코드는 공개되지 않음 — PocketPal AI나 Maid와 달리, 일부 기반 모델이 오픈 웨이트임에도 Layla 앱 자체는 클로즈드 소스임.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**앱 자체의 스토어 설명과 기술 블로그 게시물에 따르면, 구매 후 Layla에서 로컬 채팅을 설정하는 데는 몇 가지 단계가 필요합니다.** 핵심 로컬 기능을 사용하는 데는 계정이 필요하지 않습니다.',
        ],
        numberedItems: [
          {
            title: '앱 구매 및 설치',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/layla/id6456886656)(19.99달러) 또는 [Google Play](https://play.google.com/store/apps/details?id=com.layla)(19.99달러)에서 Layla를 다운로드합니다. 개발사 자체 사이트에서 직접 APK 다운로드로 배포되는 기능이 더 제한된 무료 버전이 있다는 보고도 있습니다 — 자신의 플랫폼에 적용된다고 가정하기 전에 [layla-network.ai](https://www.layla-network.ai)에서 현재 제공 여부를 직접 확인하세요.',
          },
          {
            title: '앱이 기본 모델을 다운로드하도록 함',
            whyItMatters: '최초 실행 시 Layla는 채팅을 시작하기 전에 언어 모델(과거 버전에서는 약 4GB로 보고됨)을 다운로드합니다. 이는 해당 모델에 대해 한 번만 진행되는 다운로드입니다.',
          },
          {
            title: '페르소나 선택 또는 커스터마이즈',
            whyItMatters: '내장된 캐릭터를 선택하거나 이름, 성격, 음성을 가진 자신만의 캐릭터를 만듭니다 — Layla의 인터페이스는 단일한 범용 채팅 스레드가 아니라 캐릭터를 중심으로 구성되어 있습니다.',
          },
          {
            title: '선택 사항: 커스텀 GGUF 모델 가져오기',
            whyItMatters: '고급 이용자는 앱의 기본 모델 대신, 또는 함께 자신만의 GGUF 형식 모델 파일을 불러올 수 있습니다.',
          },
          {
            title: '오프라인으로 채팅하거나 Layla Cloud 활성화',
            whyItMatters: '모델을 다운로드한 후에는 로컬 채팅과 이미지 생성에 네트워크 연결이 필요하지 않습니다. Layla Cloud는 명시적으로 설치하거나 활성화해야 하는 별도의 선택적 모드이며, 위에서 설명한 기본 로컬 경험에는 포함되지 않습니다.',
          },
        ],
        note: '일부 App Store 및 Google Play 리뷰에서는 과거 버전에서 오프라인 모델 로딩과 커스텀 모델 가져오기가 불안정했다고 보고하며, 특히 iOS에서 그렇다고 지적합니다. 이 리뷰는 현재의 안정성을 독립적으로 검증하지 않았습니다 — 앱에 의존하기 전에 해당 플랫폼의 환불 기간 내에 초기 설정을 테스트해 보세요.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Layla가 지원하는 모델은?',
        itemHeadings: true,
        columns: ['모델 유형', '접근 방식', '일반적인 용도'],
        rows: [
          {
            '모델 유형': '내장 기본 모델',
            '접근 방식': '최초 실행 시 자동으로 다운로드됨',
            '일반적인 용도': '설정 없이 바로 사용 가능한 일반 컴패니언 채팅',
          },
          {
            '모델 유형': 'Layla 브랜드 파인튜닝 모델',
            '접근 방식': '개발자 l3utterfly가 [Hugging Face](https://huggingface.co/l3utterfly)에 공개(예: Llama2 7B Layla, OpenLLaMA 3B v2 Layla)',
            '일반적인 용도': '앱의 캐릭터 형식에 맞춰 조정된 롤플레이·페르소나 중심 채팅',
          },
          {
            '모델 유형': '커스텀 GGUF 가져오기',
            '접근 방식': '기기 저장소나 Hugging Face에서 임의의 GGUF 형식 파일을 수동으로 가져오기',
            '일반적인 용도': '이미 GGUF 형식의 선호 오픈 웨이트 모델을 가진 이용자',
          },
          {
            '모델 유형': 'LiteRT-LM 및 PTE(ExecuTorch) 모델',
            '접근 방식': '개발사 기술 블로그 게시물에 따른 대체 온디바이스 런타임 백엔드',
            '일반적인 용도': '단순한 llama.cpp/GGUF를 넘어선 기기별·백엔드별 최적화 추론',
          },
          {
            '모델 유형': 'Stable Diffusion 1.5',
            '접근 방식': '개발사 기술 블로그 게시물에 따르면 이미지 생성을 위해 기기에서 로컬로 실행됨',
            '일반적인 용도': '클라우드 이미지 API 없이 캐릭터나 장면 이미지를 로컬에서 생성',
          },
        ],
        note: '내장 모델의 정확한 정체와 기본 다운로드 크기는 앱 버전에 따라 변경되어 왔습니다; 데이터 요금제가 제한된 상태에서 다운로드하기 전에 앱 내에서 현재 기본 모델과 크기를 확인하세요.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Layla는 Android와 iPhone에서 사용 가능한가?',
        itemHeadings: true,
        columns: ['플랫폼', '제공 여부', '참고 사항'],
        rows: [
          {
            '플랫폼': 'iPhone / iPad',
            '제공 여부': '[App Store](https://apps.apple.com/us/app/layla/id6456886656)에서 제공, iOS 16.4 / iPadOS 16.4 이상 필요',
            '참고 사항': 'App Store 페이지에는 동일한 앱의 Mac(macOS 13.0, Apple M1 이상) 및 Apple Vision(visionOS 1.0 이상) 호환성도 표시되어 있음.',
          },
          {
            '플랫폼': 'Android',
            '제공 여부': '[Google Play](https://play.google.com/store/apps/details?id=com.layla)에서 제공',
            '참고 사항': 'Google Play와 별개로 개발사 자체 사이트에서 직접 APK를 배포하는 채널도 제공되었다는 보고가 있음 — 의존하기 전에 현재 제공 여부를 직접 확인할 것.',
          },
          {
            '플랫폼': 'Windows / Linux',
            '제공 여부': '리뷰 시점 기준 네이티브 Windows 또는 Linux 데스크톱 버전은 확인되지 않음',
            '참고 사항': '[Layla-Server](https://github.com/l3utterfly/Layla-Server) 프로젝트를 통해 모바일 앱이 자체 로컬 백엔드를 실행하는 PC에 WebRTC로 연결할 수 있으나, 이는 네이티브 데스크톱 클라이언트가 아니라 브리지임.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Layla의 가격은?',
        content: [
          '**Layla는 [Apple App Store](https://apps.apple.com/us/app/layla/id6456886656)와 [Google Play](https://play.google.com/store/apps/details?id=com.layla) 모두에서 19.99달러 일회성 구매로 제공됩니다.** 이 기본 구매 외에도 App Store 페이지에는 Monarch(4.99달러), Birdwing(19.99달러), Blue Morpho(29.99달러)라는 이름이 붙은 앱 내 구매 등급 3종이 표시되어 있지만, 공개 스토어 페이지에서는 각 등급이 정확히 무엇을 잠금 해제하는지(예: 클라우드 이용 크레딧, 프리미엄 캐릭터, 추가 음성 포함 여부 등) 전부 설명하지 않습니다. 구매 전 앱 내에서 특정 등급에 정확히 무엇이 포함되는지 확인하세요.',
          '개발사 자체 블로그 콘텐츠에 따르면, 개발사 자체 사이트에서 직접 APK 다운로드로 배포되는 기능이 더 제한된 무료 버전이 있는 것으로 보고됩니다 — 이는 유료 App Store 및 Google Play 페이지와는 별개이며, 현재 제공 여부와 기능 구성은 이 리뷰에서 추정하기보다 [layla-network.ai](https://www.layla-network.ai)에서 직접 확인해야 합니다.',
          '별도의 선택적 클라우드 채팅 모드인 Layla Cloud는 각 스토어에서 독립된 앱으로 무료 다운로드가 가능하다고 표시됩니다. Layla Cloud를 계속 사용하는 데 무료 등급을 넘어서는 구독이나 크레딧이 필요한지 여부는 이 글에서 확인한 공개 페이지에 명시되어 있지 않습니다.',
        ],
        items: [
          '**기본 앱:** App Store와 Google Play에서 19.99달러 일회성 구매 — 기본 구매 자체에는 구독이 필요하지 않음.',
          '**앱 내 구매 등급:** Monarch(4.99달러), Birdwing(19.99달러), Blue Morpho(29.99달러) — App Store 페이지에 이름이 명시되어 있으나 정확한 내용은 공개적으로 전부 설명되어 있지 않음.',
          '**무료/제한 버전:** 개발사 자체 사이트의 직접 APK 다운로드로 제공된다고 보고되며 유료 스토어 페이지와는 별개 — 현재 상태를 직접 확인할 것.',
          '**Layla Cloud:** 클라우드 기반 캐릭터 채팅을 위한 별도의 무료 다운로드 컴패니언 앱; 무료 등급을 넘어서는 자체 비용 구조는 공개 페이지에 명시되어 있지 않음.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보: 로컬 채팅 vs. Layla Cloud',
        content: [
          '**Layla 자체의 [개인정보 처리방침](https://blog.layla-network.ai/privacy)에는 "당사 앱의 핵심 기능은 사용자 기기에서 오프라인으로 작동하도록 설계되었습니다"라고 명시되어 있으며, 사용자의 데이터를 기기 밖으로 전송하는 어떤 조치를 취하기 전에도 경고 및 확인 메시지를 표시할 것이라고 밝히고 있습니다.** 이 방침은 데이터 외부 전송의 구체적인 계기로 Personality Hub에 캐릭터를 업로드하는 것, 앱 내 "버그 신고" 기능을 사용하는 것, 선택적 클라우드 기능을 활성화하는 것을 명시하고 있습니다.',
          '이 마지막 항목인 선택적 클라우드 기능이 바로 Layla Cloud이며, 개발사는 이를 별개의 독립된 모드로 설명합니다. 방침에 따르면 "Layla Cloud는 Layla 내에서 \'Layla Cloud\' 미니 앱을 설치한 경우에만 활성화되며", 설치하거나 활성화하지 않으면 "Layla Cloud와 관련된 어떤 기능도 활성화되지 않습니다." Layla Cloud가 활성화된 경우, 개발사 자체 문서에 따르면 메시지, 캐릭터의 응답, 장기 기억(Long-Term Memory), PDF Digest, Dream 등 보조 기능에서 나온 데이터를 포함한 대화 기록을 수집하며, 이 데이터는 익명화되어 계정과 연결되지 않지만 디버깅이나 서비스 개선에 사용될 수 있습니다. 또한 이 방침은 Layla Cloud가 활성화되기 이전의 대화를 소급하여 수집하지 않는다고도 명시합니다.',
          '종합하면, 이는 핵심 기능에 클라우드 구성 요소가 전혀 없는 앱과는 실질적으로 다른 개인정보 설계입니다. Layla의 기본 로컬 모드는 전송 전 명시적인 동의 관문을 두어 기기 내에 머물도록 설계되어 있지만, 제품 자체는 이용자가 활성화하면 익명화된 대화 데이터를 수집하는 선택적이고 별도로 활성화되는 클라우드 경로를 제공합니다. 애초에 활성화할 수 있는 클라우드 모드가 전혀 없는 제품이라는 가장 강력한 보장을 원하는 독자는, MIT 라이선스로 전체 코드가 오픈소스이며 내장된 클라우드 채팅 기능이 전혀 없는 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 비교해 봐야 합니다.',
        ],
        items: [
          '**로컬 모드:** 개발사의 방침에 따르면 오프라인으로 작동하도록 설계되어 있으며, 데이터가 기기 밖으로 나가기 전에 앱이 경고하고 확인을 요청한다고 명시됨.',
          '**Layla Cloud:** 미니 앱 또는 별도 앱으로 설치되는 독립적이고 선택적인 모드로, 활성화되면 보조 기능 데이터를 포함한 익명화된 대화 기록을 수집함.',
          '**소급 없음:** 방침에 따르면 Layla Cloud를 활성화해도 활성화 이전의 대화 기록은 반영되지 않음.',
          '**클로즈드 소스:** PocketPal AI나 Maid와 달리 Layla의 클라이언트 앱 코드는 공개되어 있지 않아, "기본적으로 전송하지 않는다"는 주장은 독립적인 코드 감사가 아니라 개발사 자체의 개인정보 처리방침에 의존함.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 Layla의 네트워크 트래픽이나 소스 코드를 독립적으로 감사하지 않았습니다. 위 설명은 개발사가 공개한 개인정보 처리방침과 스토어 페이지를 반영한 것이며, PromptQuorum이 수행한 독립적인 보안 평가가 아닙니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '컴패니언·롤플레이 기능',
        content: [
          '**Layla의 기능 구성은 자체 앱스토어 설명에 따르면 단순한 질의응답 채팅 인터페이스보다 페르소나와 롤플레이 사용 사례를 중심으로 설계되어 있습니다.** 언급된 기능은 다음과 같습니다:',
        ],
        items: [
          '**커스터마이즈 가능한 개성.** 이용자는 단일하고 고정된 어시스턴트 정체성과 대화하는 대신, 서로 다른 페르소나를 가진 AI 캐릭터를 만들거나 다운로드할 수 있습니다.',
          '**그룹 대화.** 앱 게재 정보에 따르면 여러 캐릭터가 동일한 대화 스레드에 참여할 수 있습니다.',
          '**100개 이상의 음성.** 앱은 텍스트 음성 변환 캐릭터 응답을 위한 대규모 음성 라이브러리를 명시하고 있습니다.',
          '**Live2D 캐릭터 애니메이션.** 단순한 텍스트 인터페이스가 아니라 시각적이고 애니메이션화된 캐릭터 표현.',
          '**로컬 이미지 생성.** 개발사 기술 블로그 게시물에 따르면 내장된 Stable Diffusion 1.5 파이프라인이 캐릭터나 장면 이미지를 위해 기기에서 실행됩니다.',
          '**프로그래밍 가능한 에이전트(Python).** 앱 자체 설명에 따르면 고급 이용자는 Python을 사용해 에이전트 방식의 동작을 스크립트로 작성할 수 있습니다.',
          '**로컬 추론에는 내장 콘텐츠 필터가 없음.** 로컬 생성이 기기 자체 하드웨어에서 전적으로 실행되기 때문에, 개발사 자체 자료는 이 모드에 서버 측 콘텐츠 조정 계층이 없다고 설명합니다 — 이는 의도적인 설계 선택으로, 적절한 사용에 대한 책임을 호스팅된 조정 시스템이 아니라 개별 이용자에게 넘깁니다.',
        ],
        note: '기능 제공 여부, 음성 라이브러리 규모, 특정 모델 통합은 앱 버전에 따라 변경되어 왔습니다; 이전 마케팅 자료에 설명된 모든 내용이 변함없이 적용된다고 가정하지 말고 앱 내에서 현재 기능 제공 여부를 확인하세요.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Layla를 실행하려면 어떤 하드웨어가 필요한가?',
        content: [
          '**App Store 페이지는 최소 8GB의 RAM을 권장하며, Layla 자체 마케팅은 이 앱을 저가형이나 오래된 하드웨어가 아니라 최근 플래그십 스마트폰을 대상으로 한다고 역사적으로 설명해 왔습니다.** 이는 4GB RAM으로 2-4B 파라미터의 소형 모델을 편안하게 지원하는 일부 경쟁 로컬 채팅 앱보다 더 엄격한 기준입니다 — Layla의 컴패니언 기능(더 큰 기본 모델, 로컬 이미지 생성, 캐릭터 애니메이션)이 실질적인 하드웨어 최소 기준을 높입니다.',
          '모든 GGUF 기반 앱과 마찬가지로, 실제 메모리 요구량을 결정하는 것은 앱 자체가 아니라 로드된 특정 모델입니다: 작게 양자화된 모델은 70억 파라미터 이상의 모델보다 적은 RAM을 필요로 하며, 채팅과 함께 로컬 Stable Diffusion 이미지 생성을 실행하면 텍스트 전용 추론을 넘어서는 추가적인 메모리 및 처리 오버헤드가 발생합니다.',
        ],
        items: [
          '권장 최소 사양: App Store 페이지에 따르면 8GB RAM — 이 카테고리의 더 단순한 로컬 채팅 앱에서 흔한 4GB 최소 기준보다 눈에 띄게 높음.',
          '개발사 자체 마케팅 자료에 따르면 오래되었거나 저가형인 기기보다 최근 플래그십급 스마트폰(대략 최근 몇 세대)을 권장함.',
          '저장 공간: 최초 실행 시 기본 모델 다운로드는 과거 버전에서 약 4GB로 보고됨; 커스텀 GGUF 모델과 Stable Diffusion 체크포인트는 추가적인 저장 공간 요구를 더함.',
          '로컬 이미지 생성(Stable Diffusion 1.5)은 텍스트 전용 채팅을 넘어서는 처리 및 메모리 오버헤드를 더함 — RAM이 적은 기기에서 이 기능을 사용할 경우 더 느린 성능을 예상해야 함.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의사항'],
        rows: [
          {
            '이점': '컴패니언·롤플레이의 깊이',
            '실제 사용에서의 의미': '페르소나 캐릭터, 그룹 채팅, 100개 이상의 음성, Live2D 애니메이션은 단순한 채팅 인터페이스를 넘어섭니다.',
            '한계 / 유의사항': '단순한 어시스턴트형 채팅만 원하는 독자는 PocketPal AI나 Private LLM이 더 사용하기 쉽다고 느낄 수 있습니다.',
          },
          {
            '이점': '로컬 텍스트 및 이미지 생성',
            '실제 사용에서의 의미': '채팅과 Stable Diffusion 1.5 이미지 생성 모두 기기에서 완전히 실행될 수 있습니다.',
            '한계 / 유의사항': '텍스트 전용 로컬 채팅 앱보다 눈에 띄게 더 많은 RAM과 저장 공간이 필요합니다; App Store는 최소 8GB를 명시합니다.',
          },
          {
            '이점': '데이터 외부 전송 전 명시적 동의 관문',
            '실제 사용에서의 의미': '개인정보 처리방침에 따르면 캐릭터 업로드나 버그 신고 같은 기능에서 데이터를 기기 밖으로 보내기 전에 앱이 경고합니다.',
            '한계 / 유의사항': '앱은 이용자가 옵트인하면 익명화된 대화 데이터를 실제로 수집하는 선택적 Layla Cloud 모드도 함께 제공합니다 — 설계상 클라우드 구성 요소가 전혀 없는 제품은 아닙니다.',
          },
          {
            '이점': '활발한 모델 및 인프라 개발',
            '실제 사용에서의 의미': 'Hugging Face의 Layla 브랜드 파인튜닝 모델과 Layla-Server 같은 관련 프로젝트는 지속적인 기술적 작업을 보여줍니다.',
            '한계 / 유의사항': '클라이언트 앱 자체의 소스 코드는 비공개여서 PocketPal AI나 Maid처럼 동작을 독립적으로 감사할 수 없습니다.',
          },
          {
            '이점': '19.99달러 일회성 구매',
            '실제 사용에서의 의미': '두 스토어 모두에서 기본 앱에 구독이 필요하지 않습니다.',
            '한계 / 유의사항': '공개 페이지에서 정확한 내용이 전부 설명되지 않은 이름 붙은 앱 내 구매 등급 3종이 추가로 존재합니다 — 앱 내에서 정확히 무엇을 구매하는지 확인하세요.',
          },
          {
            '이점': '크로스 플랫폼: Android와 iOS',
            '실제 사용에서의 의미': 'Private LLM 같은 Apple 전용 앱과 달리 두 주요 모바일 플랫폼 모두에서 사용 가능합니다.',
            '한계 / 유의사항': '공개된 App Store 리뷰는 일부 기기에서 충돌 및 신뢰할 수 없는 오프라인 기능을 지적합니다 — 이용자 제보이며 PromptQuorum이 독립적으로 검증하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Layla가 적합한 이용자',
        items: [
          '**단순한 어시스턴트가 아니라 컴패니언/롤플레이형 로컬 AI를 원하는 이용자.** 최소한의 채팅 UI보다 페르소나 캐릭터, 그룹 대화, 음성 출력이 더 중요하다면, Layla의 기능 구성은 바로 이 사용 사례를 위해 만들어졌습니다.',
          '**채팅과 함께 로컬 이미지 생성을 원하는 이용자.** 내장된 Stable Diffusion 1.5 파이프라인을 통해 단일 앱이 기기에서 텍스트와 이미지 생성을 모두 처리할 수 있습니다.',
          '**무료 도구 대신 앱을 한 번 구매하는 것에 부담이 없는 이용자.** 19.99달러로 두 주요 모바일 플랫폼에서 기본 앱을 영구적으로 이용할 수 있습니다.',
          '**개인정보 처리방침을 꼼꼼히 읽고 선택적 클라우드 모드를 받아들일 수 있는 이용자.** 데이터가 기기 밖으로 나가기 전에 명시적으로 경고하는 Layla의 기본 로컬 설계는, 클라우드 기능이 전혀 없는 제품이 필요하지 않은 독자에게는 받아들일 만한 절충안이 될 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Layla가 적합하지 않은 이용자',
        items: [
          '**클라우드 구성 요소가 전혀 없다는 보장이 필요한 독자.** Layla는 활성화되면 익명화된 데이터를 수집하는 선택적 클라우드 모드(Layla Cloud)를 제공하므로, 애초에 활성화할 수 있는 클라우드 기능이 전혀 없는 앱을 특별히 원하는 독자는 내장된 클라우드 채팅 경로가 전혀 없는 완전 오픈소스 코드의 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 선택해야 합니다.',
          '**무료이거나 완전한 오픈소스 앱을 원하는 독자.** Layla는 19.99달러의 유료 클로즈드 소스 앱입니다; PocketPal AI(무료, MIT 라이선스)와 Maid(무료, MIT 라이선스)가 이러한 요구를 대신 충족합니다.',
          '**단순하고 미니멀한 어시스턴트형 채팅 인터페이스를 원하는 독자.** 캐릭터와 페르소나를 우선시하는 Layla의 설계는 단순한 질의응답 채팅만 원하는 이용자에게는 필요 없는 복잡성을 더할 수 있습니다; Private LLM이나 PocketPal AI가 더 어시스턴트에 가까운 형태입니다.',
          '**RAM이 적거나 오래된 기기를 사용하는 독자.** App Store는 8GB RAM을 최소 권장 사양으로 명시하는데, 이는 4GB로도 작은 모델을 편안하게 실행하는 여러 경쟁 앱보다 높은 기준입니다.',
          '**엔터프라이즈 또는 팀 기능이 필요한 독자.** Layla는 관리 콘솔, 공유 라이선스 관리, 팀 청구 기능이 없는 단일 이용자용 소비자 앱입니다; 조직은 대신 자체 호스팅되는 서버 측 로컬 LLM 인프라를 검토해야 합니다.',
          '**앱의 소스 코드를 스스로 독립적으로 감사하고 싶은 독자.** Layla의 클라이언트 앱은 클로즈드 소스입니다; 이 수준의 보장이 필요한 독자는 PocketPal AI, Maid, ChatterUI 같은 MIT 또는 AGPL 라이선스 대안을 사용해야 합니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Layla와 대안 비교',
        columns: ['앱', '플랫폼', '가격', '로컬 vs. 클라우드', '핵심 차이'],
        rows: [
          {
            '앱': 'Layla',
            '플랫폼': 'Android, iPhone/iPad(App Store 페이지에 따르면 Mac/Vision Pro도 포함)',
            '가격': '19.99달러 일회성, 이름 붙은 IAP 등급 추가',
            '로컬 vs. 클라우드': '설계상 로컬; 선택적 옵트인 Layla Cloud 모드',
            '핵심 차이': '컴패니언/롤플레이 중심: 페르소나, 그룹 채팅, 음성, 로컬 이미지 생성',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iPhone/iPad, Android',
            '가격': '무료, 오픈소스(MIT)',
            '로컬 vs. 클라우드': '완전히 로컬; 내장 클라우드 채팅 기능 없음',
            '핵심 차이': '무료, 완전 오픈소스, 롤플레이보다는 단순 채팅에 중점',
          },
          {
            '앱': 'Private LLM',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '가격': '4.99달러 일회성',
            '로컬 vs. 클라우드': '완전히 로컬; App Store 개인정보 라벨에 따르면 클라우드 폴백 없음',
            '핵심 차이': 'OmniQuant/GPTQ 양자화를 사용한 140개 이상의 엄선된 모델; 롤플레이보다는 어시스턴트 스타일',
          },
          {
            '앱': '[Enclave AI](/ko/power-local-llm/enclave-ai-review)',
            '플랫폼': '현재 플랫폼 지원 현황은 전체 리뷰 참조',
            '가격': '현재 페이지 참조',
            '로컬 vs. 클라우드': '전체 리뷰 참조',
            '핵심 차이': 'Siri/Shortcuts 통합을 갖춘 Apple 중심 온디바이스 어시스턴트',
          },
          {
            '앱': '[Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay)',
            '플랫폼': 'Windows/Mac 데스크톱(Backyard Cloud로 모바일/웹 동기화 추가)',
            '가격': '무료 데스크톱 앱; 선택적 Backyard Cloud 월 7-35달러',
            '로컬 vs. 클라우드': '기본적으로 로컬; 호스팅 추론을 위한 명시적 유료 클라우드 등급 제공',
            '핵심 차이': '훨씬 더 큰 Character Hub를 갖춘 데스크톱 우선 롤플레이 앱; 클라우드 등급은 무료 옵트인 모드가 아니라 가격이 명확한 별도 제품',
          },
          {
            '앱': '[LLM Farm](https://llmfarm.space/)',
            '플랫폼': 'iOS/Mac(오픈소스, GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))',
            '가격': '무료, 오픈소스',
            '로컬 vs. 클라우드': '완전히 로컬',
            '핵심 차이': '자체 GitHub README에 따르면 App Store 및 TestFlight에서 제외됨 — 의존하기 전에 현재 제공 여부를 확인할 것',
          },
          {
            '앱': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            '플랫폼': '크로스 플랫폼 Flutter 앱(Android 우선)',
            '가격': '무료, 오픈소스(MIT)',
            '로컬 vs. 클라우드': 'GGUF/llama.cpp를 통해 로컬 실행; 이용자가 설정하면 원격 API에도 연결 가능',
            '핵심 차이': '완전 오픈소스이며 롤플레이 중심이 아님; 원격 API 사용은 선택 사항이며 이용자가 직접 설정함',
          },
          {
            '앱': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            '플랫폼': 'Android(소스에서 빌드)',
            '가격': '무료, 오픈소스(AGPL-3.0)',
            '로컬 vs. 클라우드': 'GGUF/llama.cpp를 통해 로컬 실행, 또는 설정 시 원격 API에 연결',
            '핵심 차이': '롤플레이를 위한 Character Card v2 지원, 완전 오픈소스, 더 기술적인 설정',
          },
          {
            '앱': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            '플랫폼': 'Android',
            '가격': '무료, 오픈소스',
            '로컬 vs. 클라우드': '다중 제공업체 클라이언트; LiteRT 제공업체를 통한 로컬 추론',
            '핵심 차이': '로컬 우선 컴패니언 앱이 아니라 다중 제공업체 클라이언트로 자리매김함',
          },
          {
            '앱': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            '플랫폼': 'Android(iOS 계획 중)',
            '가격': '무료, 오픈소스',
            '로컬 vs. 클라우드': 'Cactus Compute를 통해 기기에서 실행, 또는 자체 호스팅 서버와 함께 사용',
            '핵심 차이': '독립형 컴패니언 앱이 아니라 자체 호스팅 AnythingLLM 워크스페이스와 함께 사용하도록 설계됨',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능 세부 사항은 자주 변경됩니다 — 결정하기 전에 각 앱 자체 페이지에서 현재 정보를 확인하세요. 특히 LLM Farm의 App Store 제공 여부는 자체 GitHub README에서 App Store에서 제외되었다고 설명했으므로 재확인해야 합니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Layla는 무료입니까?',
            a: '아니요, Layla 메인 앱은 App Store와 Google Play 모두에서 19.99달러 일회성 구매입니다. App Store 페이지에는 이름이 붙은 앱 내 구매 등급 3종(Monarch 4.99달러, Birdwing 19.99달러, Blue Morpho 29.99달러)도 표시되어 있습니다. 개발사 자체 사이트에서 직접 APK 다운로드로 배포되는 기능이 더 제한된 무료 버전이 있다는 보고도 있습니다 — 현재 제공 여부는 [layla-network.ai](https://www.layla-network.ai)에서 확인하세요. 클라우드 기반 채팅을 위한 별도 컴패니언 앱인 Layla Cloud는 독립된 앱으로 무료 다운로드가 가능합니다.',
          },
          {
            q: 'Layla는 클라우드 구성 요소가 전혀 없이 완전히 오프라인으로 작동합니까?',
            a: '완전히 그렇지는 않습니다. Layla 자체의 개인정보 처리방침에 따르면 핵심 앱은 오프라인으로 작동하도록 설계되어 있으며 데이터가 기기 밖으로 나가기 전에 경고합니다. 하지만 Layla는 이용자가 활성화하면 익명화된 대화 데이터를 실제로 수집하는, 별도로 활성화되는 Layla Cloud라는 모드도 함께 제공합니다. 따라서 Layla는 클라우드 기능이 전혀 없는 앱만큼 엄격하게 로컬 전용인 제품은 아닙니다; 그 더 강력한 보장을 원하는 독자는 이를 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 비교해야 합니다.',
          },
          {
            q: 'Layla는 누가 개발합니까?',
            a: 'Layla는 호주 퀸즐랜드주 사우스포트에 등록된 [Layla Network Pty Ltd](https://www.layla-network.ai)가 게시합니다. 앱이 사용하는 Layla 브랜드의 오픈 웨이트 파인튜닝 모델은 GitHub 계정 [l3utterfly](https://github.com/l3utterfly) 명의로 Hugging Face에 공개됩니다.',
          },
          {
            q: 'Layla는 어떤 모델을 실행할 수 있습니까?',
            a: 'Layla는 최초 실행 시 기본 모델을 다운로드하며, llama.cpp를 통해 Hugging Face에 공개된 Layla 브랜드 파인튜닝 모델이나 임의의 커스텀 GGUF 형식 모델 파일도 불러올 수 있습니다. 개발사의 기술 블로그 게시물은 LiteRT-LM 및 PTE(ExecuTorch) 모델 백엔드 지원과 이미지 생성을 위한 로컬 Stable Diffusion 1.5도 설명합니다.',
          },
          {
            q: 'Layla는 Android와 iPhone 모두에서 작동합니까?',
            a: '네. Layla는 Android용 [Google Play](https://play.google.com/store/apps/details?id=com.layla)와 iPhone·iPad용 [App Store](https://apps.apple.com/us/app/layla/id6456886656)에서 제공됩니다; App Store 페이지에는 동일한 앱의 Mac 및 Apple Vision 호환성도 표시되어 있습니다. 리뷰 시점 기준 네이티브 Windows 또는 Linux 데스크톱 버전은 확인되지 않았습니다.',
          },
          {
            q: 'Layla는 얼마나 많은 RAM이 필요합니까?',
            a: 'App Store 페이지는 최소 8GB의 RAM을 권장하는데, 이는 더 단순한 텍스트 전용 로컬 채팅 앱에서 흔한 약 4GB 최소 기준보다 높으며, Layla의 더 큰 기본 모델, 로컬 이미지 생성, 캐릭터 애니메이션 기능을 반영합니다.',
          },
          {
            q: 'Layla Cloud란 무엇이며, Layla 메인 앱과 같은 것입니까?',
            a: '아니요. Layla Cloud는 로컬 모델을 관리하고 싶지 않은 이용자를 위해 클라우드 기반 캐릭터 채팅을 제공하는 별도의 선택적 모드 또는 미니 앱입니다. 개인정보 처리방침에 따르면 이용자가 설치하거나 활성화한 경우에만 활성화되며, 활성화된 동안에는 디버깅이나 서비스 개선을 위해 익명화된 대화 기록을 수집합니다. 활성화 이전의 데이터는 소급하여 수집하지 않습니다.',
          },
          {
            q: 'Layla는 신뢰할 만합니까? 이용자들이 문제를 제보합니까?',
            a: '리뷰 시점 기준 Layla는 App Store에서 31건의 평가로 3.8/5의 평점을 받고 있습니다. 일부 공개된 App Store 리뷰는 충돌과 신뢰할 수 없는 오프라인 기능을 지적하며, 특히 iOS에서 커스텀 모델 가져오기와 관련해 그렇습니다. 이 리뷰는 현재의 앱 안정성을 독립적으로 검증하지 않았습니다 — 이를 이용자가 제보한 관찰 사항으로 간주하고, 앱에 의존하기 전에 해당 플랫폼의 환불 기간 내에 테스트해 보세요.',
          },
          {
            q: 'AI 컴패니언 앱 "Layla"는 Expedia가 인수한 AI 여행 플래너 "Layla"와 같은 회사입니까?',
            a: '아니요. 이 리뷰는 Layla Network Pty Ltd(App Store ID 6456886656, Google Play 패키지 com.layla)가 게시한 온디바이스 AI 컴패니언 앱을 다룹니다. 이는 Expedia Group이 2026년 인수를 발표한, 베를린에 본사를 둔 별개의 AI 여행 계획 기업 "Layla"나 "Layla – Voice Chat & Party Rooms" 같은 동명의 다른 앱들과는 무관합니다.',
          },
          {
            q: 'Layla는 PocketPal AI나 Private LLM과 비교해 어떻습니까?',
            a: 'Layla는 컴패니언/롤플레이에 중점을 두고 선택적으로 활성화 가능한 클라우드 모드를 제공하는 19.99달러의 유료 클로즈드 소스 앱으로, Android와 iOS 모두에서 사용 가능합니다. PocketPal AI는 무료이고 오픈소스이며 내장된 클라우드 채팅 기능이 전혀 없습니다. Private LLM은 4.99달러의 유료 클로즈드 소스, Apple 전용, 어시스턴트 스타일 앱으로 더 큰 엄선된 모델 라이브러리를 갖추고 있으며 App Store 개인정보 라벨에 따르면 클라우드 폴백이 없습니다. 두 모바일 플랫폼 모두에서 컴패니언/롤플레이의 깊이를 원한다면 Layla를, 무료이고 완전히 로컬이며 오픈소스인 옵션을 원한다면 PocketPal AI를, 세련되고 Apple 전용인 어시스턴트 경험을 원한다면 Private LLM을 선택하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Layla는 모바일 로컬 AI 카테고리에서 진정으로 독특한 위치를 차지합니다: 페르소나, 그룹 채팅, 100개 이상의 음성, 로컬 이미지 생성 같은 컴패니언·롤플레이 기능을 강조하는데, 이는 PocketPal AI나 Private LLM 같은 더 단순한 채팅 앱들이 시도하지 않는 영역이며, 19.99달러라는 단일 가격으로 한 번의 구매만으로 Android와 iOS를 모두 커버합니다. 개인정보 측면의 실제 상황은 단순한 "완전 오프라인" 주장보다 더 미묘합니다: 개발사 자체의 방침은 모든 데이터 전송 전에 명시적인 경고가 있는, 기본적으로 로컬인 핵심을 설명하지만, 앱은 이용자가 활성화하면 익명화된 대화 데이터를 실제로 수집하는 선택적 Layla Cloud 모드도 함께 제공합니다 — 이는 내장된 클라우드 경로가 전혀 없는 앱과는 실질적으로 다른 설계입니다. 클로즈드 소스 클라이언트, 정확한 내용이 완전히 공개되지 않은 세 가지 앱 내 구매 등급, iOS에서의 오프라인 기능과 커스텀 모델 관련 신뢰성 문제에 대한 이용자 제보까지 더하면, Layla는 특별히 페르소나/롤플레이 기능 구성을 원하고 이러한 개인정보 절충을 받아들일 수 있는 독자에게 적합합니다. 이용 가능한 가장 강력한 로컬 전용 보장, 완전한 소스 코드 투명성, 또는 가장 낮은 비용을 원하는 독자는 대신 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)부터 검토해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Layla](https://apps.apple.com/us/app/layla/id6456886656) — 가격, 앱 내 구매 등급, 플랫폼 요구 사항, 평점, 버전 히스토리.',
          '[Google Play의 Layla](https://play.google.com/store/apps/details?id=com.layla) — Android 제공 여부 및 가격.',
          '[Layla 공식 사이트](https://www.layla-network.ai) — 제품 개요 및 개발사가 게시한 기능 설명.',
          '[Layla 개인정보 처리방침](https://blog.layla-network.ai/privacy) — 로컬 대 클라우드 데이터 처리, Layla Cloud의 범위, 데이터 수집 공개 사항.',
          '[App Store의 Layla(Cloud)](https://apps.apple.com/gb/app/layla-cloud/id6764344419) — 별도의 선택적 클라우드 모드 앱 페이지.',
          '[GitHub의 l3utterfly](https://github.com/l3utterfly) 및 [Hugging Face의 l3utterfly](https://huggingface.co/l3utterfly) — Layla 브랜드 모델 게시 및 관련 인프라 프로젝트(Layla-Server, Layla SDK).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 내장 클라우드 채팅 기능이 없는 무료, 완전 오픈소스, 완전 로컬 대안.',
          '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — 더 큰 엄선된 모델 라이브러리를 갖춘 4.99달러의 Apple 전용 어시스턴트 스타일 앱.',
          '[Enclave AI 리뷰](/ko/power-local-llm/enclave-ai-review) — 비교를 위한 또 다른 Apple 중심 온디바이스 AI 앱.',
          '[Backyard AI 리뷰: 로컬 AI 캐릭터 채팅과 롤플레이](/ko/power-local-llm/backyard-ai-review-local-roleplay) — 훨씬 더 큰 캐릭터 라이브러리와 가격이 명확한 클라우드 등급을 갖춘 데스크톱 우선 롤플레이 대안.',
          '[2026년 Android 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 비교를 위한 더 폭넓은 Android 앱 총정리.',
          '[2026년 iPhone 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — 비교를 위한 더 폭넓은 iOS 앱 총정리.',
        ],
      },
    },
  },
}
