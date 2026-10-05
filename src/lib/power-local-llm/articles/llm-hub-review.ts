// LLM Hub Review: On-Device AI Suite for Android and iPhone
// Slug: llm-hub-review
// Companion to: pocketpal-ai-review, google-ai-edge-gallery-review, private-mind-review, layla-review,
// best-local-llm-apps-android-2026, best-local-llm-apps-iphone-2026
// Sources: Google Play + App Store listings and the public GitHub repository (README, LICENSE, build files),
// all checked 2026-10-03 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-hub-review-hero-en.webp',
    title: 'LLM Hub Review: On-Device AI Suite for Android and iPhone',
    seoTitle: 'LLM Hub Review: On-Device AI Suite for Android and iOS',
    intro:
      'LLM Hub is a mobile app, published by an individual developer, that bundles a local language-model chat with an AI agent that can use MCP servers, image and music generation, translation, Whisper transcription, and a "Vibe Coder" that previews generated HTML. It is available on [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) and the [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820), free to install with a paid Premium tier. The project describes itself as open source, but its repository\'s LICENSE file is a noncommercial PolyForm license, which makes the code source-available rather than open source in the usual sense. This review is based on the store listings and the public [GitHub repository](https://github.com/timmyy123/LLM-Hub), checked on 3 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'LLM Hub review: an on-device AI app for Android and iPhone with chat, an MCP agent, image and music generation. Pricing, the PolyForm license, privacy, and limits.',
    twitterDescription:
      'LLM Hub review: one Android and iPhone app for local chat, an MCP agent, image and music generation, translation, and transcription — with a noncommercial PolyForm license and a paid Premium tier.',
    audience:
      'Android and iPhone users considering an all-in-one on-device AI app who need to know exactly what runs locally, what the Premium tier and the license mean, and what the sources do not confirm.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LLM Hub review',
    targetKeywords: [
      'llm hub app review',
      'llm hub local ai assistant',
      'llm hub android ios',
      'on-device ai app image music generation',
      'local llm app mcp agent android',
      'llm hub polyform noncommercial license',
      'llm hub vs pocketpal ai',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Stable Diffusion 1.5', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad', 'Apple M1', 'Qualcomm NPU'],
    leadAnswerBlock:
      '**LLM Hub (Android version 4.4.2 and iOS version 1.4.0 as of 3 October 2026) is a free-to-install mobile app that runs local language models and adds an MCP-capable agent, image and music generation, translation, Whisper transcription, and voice chat, with a paid Premium tier.** Its listings say conversations stay on the device during local inference, with internet needed only to download models and for optional features such as web search and remote MCP servers. The README and Google Play call it open source, but the repository\'s LICENSE file is headed PolyForm Noncommercial License 1.0.0, which restricts commercial use.',
    quickAnswerTop: {
      en: {
        question: 'Is LLM Hub open source, and does it run fully offline?',
        answer:
          'It is source-available rather than open source in the usual sense: the project calls itself open source, but the LICENSE file is a PolyForm Noncommercial license that restricts commercial use. Per its listings, local inference runs offline once models are downloaded; web search and remote MCP servers are optional online features.',
        bullets: [
          'Free to install on [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) and the [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820); the App Store lists a Premium Lifetime purchase at $9.99, while the Play text only says some features require Premium.',
          'Local chat with models such as Gemma and Llama, importable GGUF, LiteRT and MNN-format files, and downloads from Hugging Face.',
          'Extras beyond chat: an agent with MCP and device tools, image, music, and (on iOS) video generation, translation, and Whisper transcription.',
          'As checked on 3 October 2026: Android build 4.4.2 and iOS 1.4.0, 10K+ Play downloads, 602 GitHub stars.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is LLM Hub?', anchor: 'what-is-llm-hub' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Models and Formats', anchor: 'models-supported' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Android vs. iPhone Differences', anchor: 'platform-differences' },
      { label: 'Pricing and License', anchor: 'pricing-license' },
      { label: 'Privacy and Online Features', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'vs-alternatives' },
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
            text: 'LLM Hub is a free-to-install Android and iPhone app that runs local language models and adds an MCP-capable agent, image and music generation, translation, and transcription, under a source-available noncommercial PolyForm license with a paid Premium tier.',
          },
          {
            type: 'plain-terms',
            text: 'It is one app that tries to do many on-device AI jobs — chat, an assistant that can use tools, making images and music, translating, and turning speech into text — and you can read its source code, but the license does not let others use it commercially.',
          },
        ],
        items: [
          'Developer: listed as "timmy boy" on Google Play and Yuan Qian on the App Store, with the GitHub account [timmyy123](https://github.com/timmyy123) and the same contact email in the LICENSE and the Play listing; an Australian address is shown on Google Play.',
          'Price: free to install; the App Store lists "LLM Hub Premium Lifetime" at $9.99, and Google Play states that some features require Premium.',
          'License: LICENSE file headed PolyForm Noncommercial License 1.0.0, restricting commercial use including app-store distribution by others; the project nevertheless calls itself open source.',
          'Scope: chat with RAG memory and optional web search, an agent with MCP and Termux (Android), image, music and video generation, upscaling, translation, Whisper transcription, scam detection, and voice chat.',
          'Store and repository signals as checked on 3 October 2026: Android 4.4.2, iOS 1.4.0, 10K+ Play downloads with a 3.0 rating from 335 reviews, 602 GitHub stars.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play and App Store listings and the public GitHub repository (README, LICENSE, build files), checked on 3 October 2026. PromptQuorum has not tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-hub',
        title: 'What Is LLM Hub?',
        content: [
          '**LLM Hub is a mobile app that packages a local chat model together with a collection of other on-device AI tools.** According to its [README](https://github.com/timmyy123/LLM-Hub), the suite covers chat, an AI agent, persona design (creAItor), a Vibe Coder, writing aid, image generation, music generation, image upscaling, video generation on iOS, translation, transcription, a scam detector, and hands-free voice chat.',
          'Different runtimes power it on each platform: the README lists MediaPipe, LiteRT, and Qualcomm\'s GenieX SDK for GGUF on Android, and the RunAnywhere SDK with llama.cpp on iOS. The developer states it is optimized for CPU, GPU, and NPU acceleration, so speed and which features work depend on the phone and chipset, as the Play description also notes.',
        ],
        note: 'MCP (Model Context Protocol) is a standard way for an AI app to connect to external tool servers; in LLM Hub every MCP tool call requires user approval, per the README.',
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**LLM Hub is distributed through both mobile stores and as source code; the links below are the ones the README lists.**',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)',
          },
          {
            'Platform': 'iPhone / iPad',
            'Where to get it': '[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) (iOS and iPadOS 17.5 or later)',
          },
          {
            'Platform': 'Mac / Vision',
            'Where to get it': 'Same App Store listing (Mac with Apple M1+, visionOS 1.2+)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[GitHub](https://github.com/timmyy123/LLM-Hub) (PolyForm Noncommercial)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[llm-hub.app](https://www.llm-hub.app)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[LLM Hub privacy policy](https://www.llm-hub.app/privacy)',
          },
        ],
        note: 'This page is companion material to the app\'s entry in the [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versions as verified on 3 October 2026: Android 4.4.2 / iOS 1.4.0 (Android from the repository\'s build file, since the Play text read shows no version; iOS from the App Store). The README says native Windows and macOS apps are planned, not released.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The README\'s quick start has three steps; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download LLM Hub from Google Play or the App Store, or build it from source following the README; no account is required according to the Play listing.',
          },
          {
            title: 'Download or import a model',
            whyItMatters: 'Open Settings, then Download Models, and download a model or import one; the README lists .task, .litertlm, qnn, .mnn, and .gguf files and direct Hugging Face downloads.',
          },
          {
            title: 'Pick a model and start',
            whyItMatters: 'Select the model and start chatting, or open one of the other tools such as the image generator, translator, or transcriber.',
          },
        ],
        note: 'Internet access is needed to download models and for optional online features such as web search and remote MCP servers, per the Play description.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Models and Formats',
        itemHeadings: true,
        columns: ['Area', 'Named in the sources', 'Notes'],
        rows: [
          {
            'Area': 'Chat models',
            'Named in the sources': 'Gemma and Llama (Play); Gemma 4 on iPhone (README demo)',
            'Notes': 'Other families can be imported or downloaded',
          },
          {
            'Area': 'Import formats',
            'Named in the sources': '.task, .litertlm, qnn, .mnn, .gguf',
            'Notes': 'Per the README; GGUF runs through GenieX on Android',
          },
          {
            'Area': 'Images',
            'Named in the sources': 'Stable Diffusion 1.5; RealESRGAN and UltraSharp upscalers',
            'Notes': 'Upscaling up to 4x, with NPU acceleration noted',
          },
          {
            'Area': 'Audio',
            'Named in the sources': 'Whisper (transcription); Kokoro TTS on Android',
            'Notes': 'Music: SoundGen on Android, Magenta Realtime 2 on iOS',
          },
          {
            'Area': 'Video',
            'Named in the sources': 'Stable Video Diffusion',
            'Notes': 'Listed for iOS only in the README',
          },
        ],
        note: 'The README, not an in-app catalog, is the source for this table, and model availability changes with each app version. Hardware requirements per model were not stated.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Play description or the README; none has been independently tested.**',
        ],
        items: [
          '**Chat.** Multi-turn conversations with RAG memory, image input, optional web search, and local text-to-speech replies.',
          '**AI Agent and MCP.** An on-device agent with function calling, maps, and device tools; connects compatible MCP servers, with every tool call needing approval.',
          '**Termux commands (Android).** The agent drafts shell commands for Termux that you can inspect and edit before they run, and feeds errors back to the model to propose fixes.',
          '**Create.** Offline image generation, local music and sound-effect generation, image upscaling, creAItor personas, and a Vibe Coder that previews generated HTML and JavaScript.',
          '**Language and voice.** Translation across 50+ languages including image text (OCR) and audio, a writing aid, Whisper transcription, VibeVoice voice chat, and a scam detector for suspicious messages.',
        ],
      },
      platformDifferences: {
        id: 'platform-differences',
        title: 'Android vs. iPhone Differences',
        itemHeadings: true,
        columns: ['Capability', 'Android', 'iPhone'],
        rows: [
          {
            'Capability': 'Runtime',
            'Android': 'MediaPipe, LiteRT, GenieX (GGUF)',
            'iPhone': 'RunAnywhere SDK, llama.cpp',
          },
          {
            'Capability': 'Music',
            'Android': 'SoundGen (LiteRT)',
            'iPhone': 'Magenta Realtime 2 (MLX)',
          },
          {
            'Capability': 'Video',
            'Android': 'Not listed',
            'iPhone': 'Stable Video Diffusion',
          },
          {
            'Capability': 'Termux commands',
            'Android': 'Yes',
            'iPhone': 'Not applicable',
          },
        ],
        note: 'Versions differ too: Android 4.4.2 and iOS 1.4.0 as of 3 October 2026, and features may not arrive on both platforms at the same time.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Pricing and License',
        content: [
          '**The app is free to install, with in-app purchases.** The App Store lists "LLM Hub Premium Lifetime" at $9.99 (Australian storefront, checked 3 October 2026); the Google Play listing shows in-app purchases and says some features require Premium, without naming a price or what is locked. The README\'s developer-setup note describes a flag to skip ads and unlock premium locally, which suggests the free Android build may show ads; the Play text read does not state this.',
          'On the license: the README and Play description call the project open source, but the repository\'s LICENSE file is headed PolyForm Noncommercial License 1.0.0, and its terms define commercial purposes to include distributing the software on an app store, charging for it, and monetizing it through ads or in-app purchases. GitHub reports the license as "Other". In plain terms this is source-available code you can read, modify, and use noncommercially, not a permissive open-source license; this is not legal advice, so read the LICENSE file before reusing any code.',
        ],
        items: [
          '**App Store:** free; Premium Lifetime $9.99 in-app purchase.',
          '**Google Play:** free; in-app purchases; Premium features unspecified.',
          '**Source code:** PolyForm Noncommercial 1.0.0 per the LICENSE file; the developer\'s own store releases are the commercial distribution.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Online Features',
        content: [
          '**Both stores carry no-data-collection declarations:** the Play Data safety section says "No data collected" and "No data shared with third parties", and the App Store privacy label says the developer does not collect any data. The README adds "zero data collection" and "no accounts, no tracking".',
          'Those claims apply to local inference. The Play description states that internet access is required to download models and for optional online features such as web search and remote MCP servers, so a chat using those features sends requests off the device. These are the developer\'s declarations, not audit results.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The source code is public, so claims can be checked by building the app, but PromptQuorum has not audited the code or the network traffic. Anyone handling confidential data should verify behavior with web search and remote MCP servers switched off and on.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'All-in-one toolset',
            'What it means in real use': 'Chat, agent, images, music, translation, and transcription live in one app.',
            'Limitation / caveat': 'Breadth means more to maintain; no hands-on quality assessment exists in the sources.',
          },
          {
            'Benefit': 'MCP-capable agent',
            'What it means in real use': 'The agent can use device tools and connected MCP servers, with per-call approval.',
            'Limitation / caveat': 'Remote MCP servers and web search go online.',
          },
          {
            'Benefit': 'Many import formats',
            'What it means in real use': 'GGUF, LiteRT, and MNN files can be imported, plus Hugging Face downloads.',
            'Limitation / caveat': 'Which formats work on which phone depends on the runtime and chipset.',
          },
          {
            'Benefit': 'Source code is readable',
            'What it means in real use': 'You can read and build the code, and the app is free to install.',
            'Limitation / caveat': 'The PolyForm Noncommercial license is not an open-source license, and Premium is paid.',
          },
          {
            'Benefit': 'Both platforms',
            'What it means in real use': 'Android and iPhone versions exist, plus iPad and Apple-silicon Macs.',
            'Limitation / caveat': 'Features differ by platform, and the Play rating was 3.0 from 335 reviews on 3 October 2026.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who want one on-device app for many AI jobs.** Chat, translation, transcription, and image or music generation are in a single install.',
          '**Android users who want an agent that drafts Termux commands.** The edit-before-run flow is described in the README.',
          '**Tinkerers who want readable source.** The code is public, provided the noncommercial license terms suit the intended use.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** PromptQuorum did not run the app, so speed, battery use, output quality, and stability are not assessed.',
          '**Hardware requirements.** No minimum RAM, Android version, or chipset list was found in the sources read.',
          '**What Premium unlocks.** The App Store gives a price; neither store text read lists the locked features, and the Play price was not shown.',
          '**Whether the free build shows ads.** Only an indirect mention in the README\'s setup notes.',
          '**Product website.** The site at [llm-hub.app](https://www.llm-hub.app) loads only with JavaScript, so its content could not be read; facts here come from the stores and the repository.',
          '**Similarly named repositories.** Search results show other GitHub repositories with near-identical names; this review covers only [timmyy123/LLM-Hub](https://github.com/timmyy123/LLM-Hub), the one the app\'s README and the license-holder email point to.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source on-device chat client with its own model library',
          },
          {
            'App': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Open-source on-device app from Google\'s AI Edge team',
          },
          {
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source offline chat with on-device document Q&A',
          },
          {
            'App': '[Layla](/power-local-llm/layla-review)',
            'Platforms': 'Android, iOS',
            'Price / license': 'Paid / closed source',
            'Key difference': 'Companion and roleplay focus with an optional cloud mode',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is LLM Hub free?',
            a: 'It is free to install on both stores, with in-app purchases. The App Store lists a Premium Lifetime purchase at $9.99; Google Play says some features require Premium without naming a price.',
          },
          {
            q: 'Is LLM Hub open source?',
            a: 'Not in the usual sense. The project calls itself open source, but the LICENSE file is headed PolyForm Noncommercial License 1.0.0, which restricts commercial use. The code is readable, so it is better described as source-available.',
          },
          {
            q: 'Who makes LLM Hub?',
            a: 'An individual developer: Google Play lists "timmy boy" (developer name Yuan Qian, with an Australian address), the App Store lists Yuan Qian, and the code is on the GitHub account timmyy123, with the same contact email in the license and the Play listing.',
          },
          {
            q: 'Does it work offline?',
            a: 'Local inference runs on the device once models are downloaded. Downloading models, web search, and remote MCP servers need the internet, per the Play description.',
          },
          {
            q: 'Which platforms does it support?',
            a: 'Android through Google Play, and iPhone, iPad, Apple-silicon Macs, and Apple Vision through the App Store. Some features differ: video generation is listed for iOS, and Termux commands for Android.',
          },
          {
            q: 'What is the MCP support?',
            a: 'The agent can connect compatible Model Context Protocol servers to use external tools, and each tool call must be approved before it runs, per the Play description and the README.',
          },
          {
            q: 'Which models can I use?',
            a: 'Gemma and Llama are named on Google Play. You can download models from Hugging Face or import .task, .litertlm, qnn, .mnn, and .gguf files, according to the README.',
          },
          {
            q: 'What data does it collect?',
            a: 'Both stores carry declarations of no data collected. These are the developer\'s own statements, and online features such as web search and remote MCP servers send requests off the device.',
          },
          {
            q: 'How does it compare with PocketPal AI?',
            a: 'PocketPal AI is a free MIT-licensed on-device chat client, while LLM Hub is a wider suite with an agent, media generation, and a paid Premium tier under a noncommercial source-available license.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LLM Hub is the broadest app in this group of mobile local-AI apps on paper: chat, an MCP-capable agent, image and music generation, translation, and transcription on both Android and iPhone, from a developer who publishes the source. Against that, the license is source-available and noncommercial rather than open source, Premium is paid with its scope not spelled out in the store text, the Play rating was 3.0 from 335 reviews on 3 October 2026, no hardware requirements are published, and nothing here has been tested hands-on. It suits readers who want one on-device app for many tasks and accept those terms; readers who want a permissively licensed chat client can compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private Mind](/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LLM Hub on Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) — description, developer details, Data safety section, download count, rating, and last-updated date, checked 3 October 2026.',
          '[LLM Hub on the App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) — price, Premium Lifetime purchase, version, platform requirements, and privacy label, checked 3 October 2026.',
          '[LLM-Hub on GitHub](https://github.com/timmyy123/LLM-Hub) — README, LICENSE file, and the Android and iOS build files for version numbers.',
          '[LLM Hub privacy policy](https://www.llm-hub.app/privacy) — the developer\'s privacy policy, linked from the product website.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, MIT-licensed on-device chat client.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app with document Q&A.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s open-source on-device AI app.',
          '[Layla Review](/power-local-llm/layla-review) — a paid companion-style on-device app.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Hub Review: On-Device AI Suite for Android and iPhone',
      description:
        'LLM Hub review: an on-device AI app for Android and iPhone with chat, an MCP-capable agent, image and music generation, translation, and transcription. Pricing, the PolyForm Noncommercial license, privacy, and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/llm-hub-review',
      inLanguage: 'en',
      datePublished: '2026-10-03',
      dateModified: '2026-10-03',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android and iPhone users evaluating an all-in-one on-device AI app' },
      about: [
        { '@type': 'Thing', name: 'LLM Hub' },
        { '@type': 'Thing', name: 'Model Context Protocol' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-hub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLM Hub Review', item: 'https://promptquorum.com/power-local-llm/llm-hub-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-hub-review-hero-de.webp',
    title: 'LLM-Hub-Rezension: On-Device-KI-Suite für Android und iPhone',
    seoTitle: 'LLM-Hub-Rezension: On-Device-KI-Suite für Android und iOS',
    intro:
      'LLM Hub ist eine mobile App eines einzelnen Entwicklers, die einen Chat mit lokalen Sprachmodellen mit einem KI-Agenten, der MCP-Server nutzen kann, Bild- und Musikgenerierung, Übersetzung, Whisper-Transkription und einem „Vibe Coder“ bündelt, der erzeugtes HTML in einer Vorschau zeigt. Sie ist bei [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) und im [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) kostenlos installierbar, mit einer kostenpflichtigen Premium-Stufe. Das Projekt bezeichnet sich selbst als Open Source, doch die LICENSE-Datei des Repositorys ist eine nichtkommerzielle PolyForm-Lizenz; damit ist der Code „source-available“ (quelleinsehbar) und nicht Open Source im üblichen Sinn. Diese Rezension stützt sich auf die Store-Einträge und das öffentliche [GitHub-Repository](https://github.com/timmyy123/LLM-Hub), geprüft am 3. Oktober 2026; PromptQuorum hat die App nicht praktisch getestet.',
    metaDescription:
      'LLM-Hub-Rezension: On-Device-KI-App für Android und iPhone mit Chat, MCP-Agent sowie Bild- und Musikgenerierung. Preis, PolyForm-Lizenz, Datenschutz, Grenzen.',
    twitterDescription:
      'LLM-Hub-Rezension: eine App für Android und iPhone mit lokalem Chat, MCP-Agent, Bild- und Musikgenerierung, Übersetzung und Transkription — mit nichtkommerzieller PolyForm-Lizenz und kostenpflichtiger Premium-Stufe.',
    audience:
      'Android- und iPhone-Nutzer, die eine All-in-One-KI-App für das Gerät in Betracht ziehen und genau wissen müssen, was lokal läuft, was die Premium-Stufe und die Lizenz bedeuten und was die Quellen nicht bestätigen.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LLM Hub Rezension',
    targetKeywords: [
      'llm hub app test',
      'llm hub lokaler ki assistent',
      'llm hub android ios',
      'on-device ki app bild musik generierung',
      'lokale llm app mcp agent android',
      'llm hub polyform nichtkommerziell lizenz',
      'llm hub vs pocketpal ai',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Stable Diffusion 1.5', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad', 'Apple M1', 'Qualcomm NPU'],
    leadAnswerBlock:
      '**LLM Hub (Android-Version 4.4.2 und iOS-Version 1.4.0, Stand 3. Oktober 2026) ist eine kostenlos installierbare mobile App, die lokale Sprachmodelle ausführt und einen MCP-fähigen Agenten, Bild- und Musikgenerierung, Übersetzung, Whisper-Transkription und Sprachchat ergänzt, mit einer kostenpflichtigen Premium-Stufe.** Laut Einträgen bleiben Unterhaltungen bei der lokalen Inferenz auf dem Gerät; Internet wird nur zum Herunterladen von Modellen und für optionale Funktionen wie die Websuche und Remote-MCP-Server benötigt. README und Google Play nennen die App Open Source, doch die LICENSE-Datei des Repositorys trägt die Überschrift PolyForm Noncommercial License 1.0.0, die die kommerzielle Nutzung einschränkt.',
    quickAnswerTop: {
      de: {
        question: 'Ist LLM Hub Open Source, und läuft es vollständig offline?',
        answer:
          'Es ist „source-available“ (quelleinsehbar) und nicht Open Source im üblichen Sinn: Das Projekt nennt sich selbst Open Source, aber die LICENSE-Datei ist eine nichtkommerzielle PolyForm-Lizenz, die die kommerzielle Nutzung einschränkt. Laut Einträgen läuft die lokale Inferenz offline, sobald Modelle heruntergeladen sind; Websuche und Remote-MCP-Server sind optionale Online-Funktionen.',
        bullets: [
          'Kostenlos installierbar bei [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) und im [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820); der App Store führt einen Kauf „Premium Lifetime“ für $9.99, während der Play-Text nur sagt, dass einige Funktionen Premium erfordern.',
          'Lokaler Chat mit Modellen wie Gemma und Llama, importierbare Dateien in den Formaten GGUF, LiteRT und MNN sowie Downloads von Hugging Face.',
          'Extras über den Chat hinaus: ein Agent mit MCP und Gerätewerkzeugen, Bild-, Musik- und (unter iOS) Videogenerierung, Übersetzung und Whisper-Transkription.',
          'Stand der Prüfung am 3. Oktober 2026: Android-Build 4.4.2 und iOS 1.4.0, 10K+ Downloads bei Google Play, 602 GitHub-Sterne.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist LLM Hub?', anchor: 'what-is-llm-hub' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Modelle und Formate', anchor: 'models-supported' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Unterschiede: Android vs. iPhone', anchor: 'platform-differences' },
      { label: 'Preis und Lizenz', anchor: 'pricing-license' },
      { label: 'Datenschutz und Online-Funktionen', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Für wen sich die App eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'vs-alternatives' },
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
            text: 'LLM Hub ist eine kostenlos installierbare Android- und iPhone-App, die lokale Sprachmodelle ausführt und einen MCP-fähigen Agenten, Bild- und Musikgenerierung, Übersetzung und Transkription ergänzt, unter einer „source-available“ (quelleinsehbaren) nichtkommerziellen PolyForm-Lizenz und mit einer kostenpflichtigen Premium-Stufe.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist eine einzige App, die viele KI-Aufgaben auf dem Gerät übernehmen will — Chat, einen Assistenten, der Werkzeuge nutzen kann, das Erzeugen von Bildern und Musik, Übersetzen und das Umwandeln von Sprache in Text —, und Sie können ihren Quellcode lesen, aber die Lizenz erlaubt anderen keine kommerzielle Nutzung.',
          },
        ],
        items: [
          'Entwickler: bei Google Play als „timmy boy“ und im App Store als Yuan Qian geführt, mit dem GitHub-Konto [timmyy123](https://github.com/timmyy123) und derselben Kontakt-E-Mail in der LICENSE und im Play-Eintrag; bei Google Play wird eine australische Adresse angezeigt.',
          'Preis: kostenlos installierbar; der App Store führt „LLM Hub Premium Lifetime“ für $9.99, und Google Play gibt an, dass einige Funktionen Premium erfordern.',
          'Lizenz: LICENSE-Datei mit der Überschrift PolyForm Noncommercial License 1.0.0, die die kommerzielle Nutzung einschließlich der Verbreitung in App-Stores durch Dritte einschränkt; das Projekt bezeichnet sich dennoch als Open Source.',
          'Umfang: Chat mit RAG-Gedächtnis und optionaler Websuche, ein Agent mit MCP und Termux (Android), Bild-, Musik- und Videogenerierung, Hochskalierung, Übersetzung, Whisper-Transkription, Betrugserkennung und Sprachchat.',
          'Store- und Repository-Signale, Stand der Prüfung am 3. Oktober 2026: Android 4.4.2, iOS 1.4.0, 10K+ Downloads bei Google Play mit einer Bewertung von 3,0 aus 335 Rezensionen, 602 GitHub-Sterne.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Einträge bei Google Play und im App Store sowie auf das öffentliche GitHub-Repository (README, LICENSE, Build-Dateien), geprüft am 3. Oktober 2026. PromptQuorum hat die App weder getestet noch einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-hub',
        title: 'Was ist LLM Hub?',
        content: [
          '**LLM Hub ist eine mobile App, die ein lokales Chat-Modell zusammen mit einer Sammlung weiterer KI-Werkzeuge auf dem Gerät bündelt.** Laut [README](https://github.com/timmyy123/LLM-Hub) umfasst die Suite Chat, einen KI-Agenten, das Entwerfen von Personas (creAItor), einen Vibe Coder, eine Schreibhilfe, Bildgenerierung, Musikgenerierung, Bild-Hochskalierung, Videogenerierung unter iOS, Übersetzung, Transkription, einen Betrugsdetektor und freihändigen Sprachchat.',
          'Auf jeder Plattform arbeiten andere Laufzeitumgebungen: Das README nennt für Android MediaPipe, LiteRT und das GenieX-SDK von Qualcomm für GGUF sowie für iOS das RunAnywhere SDK mit llama.cpp. Der Entwickler gibt an, die App sei für die Beschleunigung per CPU, GPU und NPU optimiert; Geschwindigkeit und verfügbare Funktionen hängen also vom Smartphone und vom Chipsatz ab, wie auch die Play-Beschreibung anmerkt.',
        ],
        note: 'MCP (Model Context Protocol) ist ein Standard, mit dem eine KI-App externe Werkzeug-Server anbindet; in LLM Hub erfordert laut README jeder MCP-Werkzeugaufruf die Zustimmung des Nutzers.',
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**LLM Hub wird über beide mobilen Stores und als Quellcode verbreitet; die Links unten sind die, die das README nennt.**',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)',
          },
          {
            'Plattform': 'iPhone / iPad',
            'Bezugsquelle': '[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) (iOS und iPadOS 17.5 oder neuer)',
          },
          {
            'Plattform': 'Mac / Vision',
            'Bezugsquelle': 'Derselbe App-Store-Eintrag (Mac mit Apple M1+, visionOS 1.2+)',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': '[GitHub](https://github.com/timmyy123/LLM-Hub) (PolyForm Noncommercial)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[llm-hub.app](https://www.llm-hub.app)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung von LLM Hub](https://www.llm-hub.app/privacy)',
          },
        ],
        note: 'Diese Seite ist Begleitmaterial zum Eintrag der App im [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versionen, geprüft am 3. Oktober 2026: Android 4.4.2 / iOS 1.4.0 (Android aus der Build-Datei des Repositorys, da der gelesene Play-Text keine Version zeigt; iOS aus dem App Store). Laut README sind native Windows- und macOS-Apps geplant, aber nicht veröffentlicht.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Der Schnellstart im README hat drei Schritte; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie LLM Hub bei Google Play oder im App Store herunter oder bauen Sie es gemäß README aus dem Quellcode; laut Play-Eintrag ist kein Konto nötig.',
          },
          {
            title: 'Modell herunterladen oder importieren',
            whyItMatters: 'Öffnen Sie Einstellungen, dann „Download Models“, und laden Sie ein Modell herunter oder importieren Sie eines; das README nennt Dateien in den Formaten .task, .litertlm, qnn, .mnn und .gguf sowie direkte Downloads von Hugging Face.',
          },
          {
            title: 'Modell auswählen und loslegen',
            whyItMatters: 'Wählen Sie das Modell und chatten Sie, oder öffnen Sie eines der anderen Werkzeuge wie den Bildgenerator, den Übersetzer oder die Transkription.',
          },
        ],
        note: 'Internetzugang wird laut Play-Beschreibung zum Herunterladen von Modellen und für optionale Online-Funktionen wie die Websuche und Remote-MCP-Server benötigt.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Modelle und Formate',
        itemHeadings: true,
        columns: ['Bereich', 'In den Quellen genannt', 'Hinweise'],
        rows: [
          {
            'Bereich': 'Chat-Modelle',
            'In den Quellen genannt': 'Gemma und Llama (Play); Gemma 4 auf dem iPhone (README-Demo)',
            'Hinweise': 'Andere Familien lassen sich importieren oder herunterladen',
          },
          {
            'Bereich': 'Import-Formate',
            'In den Quellen genannt': '.task, .litertlm, qnn, .mnn, .gguf',
            'Hinweise': 'Laut README; GGUF läuft unter Android über GenieX',
          },
          {
            'Bereich': 'Bilder',
            'In den Quellen genannt': 'Stable Diffusion 1.5; Upscaler RealESRGAN und UltraSharp',
            'Hinweise': 'Hochskalierung bis 4x, NPU-Beschleunigung vermerkt',
          },
          {
            'Bereich': 'Audio',
            'In den Quellen genannt': 'Whisper (Transkription); Kokoro TTS unter Android',
            'Hinweise': 'Musik: SoundGen unter Android, Magenta Realtime 2 unter iOS',
          },
          {
            'Bereich': 'Video',
            'In den Quellen genannt': 'Stable Video Diffusion',
            'Hinweise': 'Laut README nur für iOS aufgeführt',
          },
        ],
        note: 'Quelle dieser Tabelle ist das README und nicht ein Katalog in der App; die Modellverfügbarkeit ändert sich mit jeder App-Version. Hardwareanforderungen je Modell wurden nicht angegeben.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus der Play-Beschreibung oder dem README; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Chat.** Mehrstufige Unterhaltungen mit RAG-Gedächtnis, Bildeingabe, optionaler Websuche und lokalen Sprachantworten per Text-to-Speech.',
          '**KI-Agent und MCP.** Ein Agent auf dem Gerät mit Funktionsaufrufen, Karten und Gerätewerkzeugen; er verbindet kompatible MCP-Server, wobei jeder Werkzeugaufruf eine Zustimmung braucht.',
          '**Termux-Befehle (Android).** Der Agent entwirft Shell-Befehle für Termux, die Sie vor der Ausführung prüfen und bearbeiten können, und gibt Fehler an das Modell zurück, damit es Korrekturen vorschlägt.',
          '**Erstellen.** Bildgenerierung offline, lokale Musik- und Soundeffekt-Generierung, Bild-Hochskalierung, creAItor-Personas und ein Vibe Coder, der erzeugtes HTML und JavaScript in einer Vorschau zeigt.',
          '**Sprache und Stimme.** Übersetzung in mehr als 50 Sprachen, auch von Bildtext (OCR) und Audio, eine Schreibhilfe, Whisper-Transkription, VibeVoice-Sprachchat und ein Betrugsdetektor für verdächtige Nachrichten.',
        ],
      },
      platformDifferences: {
        id: 'platform-differences',
        title: 'Unterschiede: Android vs. iPhone',
        itemHeadings: true,
        columns: ['Funktion', 'Android', 'iPhone'],
        rows: [
          {
            'Funktion': 'Laufzeitumgebung',
            'Android': 'MediaPipe, LiteRT, GenieX (GGUF)',
            'iPhone': 'RunAnywhere SDK, llama.cpp',
          },
          {
            'Funktion': 'Musik',
            'Android': 'SoundGen (LiteRT)',
            'iPhone': 'Magenta Realtime 2 (MLX)',
          },
          {
            'Funktion': 'Video',
            'Android': 'Nicht aufgeführt',
            'iPhone': 'Stable Video Diffusion',
          },
          {
            'Funktion': 'Termux-Befehle',
            'Android': 'Ja',
            'iPhone': 'Nicht zutreffend',
          },
        ],
        note: 'Auch die Versionen unterscheiden sich: Android 4.4.2 und iOS 1.4.0, Stand 3. Oktober 2026, und Funktionen erscheinen möglicherweise nicht gleichzeitig auf beiden Plattformen.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Preis und Lizenz',
        content: [
          '**Die App ist kostenlos installierbar, mit In-App-Käufen.** Der App Store führt „LLM Hub Premium Lifetime“ für $9.99 (australischer Storefront, geprüft am 3. Oktober 2026); der Eintrag bei Google Play zeigt In-App-Käufe und sagt, dass einige Funktionen Premium erfordern, ohne einen Preis oder die gesperrten Inhalte zu nennen. Der Hinweis zur Entwickler-Einrichtung im README beschreibt ein Flag, mit dem sich Werbung überspringen und Premium lokal freischalten lässt, was darauf hindeutet, dass der kostenlose Android-Build Werbung zeigen könnte; der gelesene Play-Text gibt dies nicht an.',
          'Zur Lizenz: README und Play-Beschreibung nennen das Projekt Open Source, doch die LICENSE-Datei des Repositorys trägt die Überschrift PolyForm Noncommercial License 1.0.0, und ihre Bedingungen zählen zu kommerziellen Zwecken auch das Verbreiten der Software in einem App-Store, das Verlangen von Geld dafür und die Monetarisierung über Werbung oder In-App-Käufe. GitHub weist die Lizenz als „Other“ aus. Einfach gesagt handelt es sich um „source-available“ Code, den Sie lesen, ändern und nichtkommerziell nutzen können, nicht um eine freizügige Open-Source-Lizenz; das ist keine Rechtsberatung, lesen Sie daher die LICENSE-Datei, bevor Sie Code wiederverwenden.',
        ],
        items: [
          '**App Store:** kostenlos; Premium Lifetime als In-App-Kauf für $9.99.',
          '**Google Play:** kostenlos; In-App-Käufe; Premium-Funktionen nicht näher angegeben.',
          '**Quellcode:** PolyForm Noncommercial 1.0.0 laut LICENSE-Datei; die eigenen Store-Veröffentlichungen des Entwicklers sind die kommerzielle Verbreitung.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Online-Funktionen',
        content: [
          '**Beide Stores enthalten Erklärungen, dass keine Daten erhoben werden:** Der Abschnitt „Datensicherheit“ bei Google Play nennt „Keine Daten erhoben“ und „Keine Daten an Dritte weitergegeben“, und das Datenschutzlabel im App Store besagt, dass der Entwickler keine Daten erhebt. Das README ergänzt „zero data collection“ sowie „no accounts, no tracking“.',
          'Diese Aussagen gelten für die lokale Inferenz. Die Play-Beschreibung gibt an, dass Internetzugang zum Herunterladen von Modellen und für optionale Online-Funktionen wie die Websuche und Remote-MCP-Server nötig ist; ein Chat mit diesen Funktionen sendet also Anfragen vom Gerät aus. Dies sind Erklärungen des Entwicklers, keine Prüfergebnisse.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Der Quellcode ist öffentlich, sodass sich die Aussagen durch Bauen der App prüfen lassen, doch PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft. Wer vertrauliche Daten verarbeitet, sollte das Verhalten sowohl mit ausgeschalteter als auch mit eingeschalteter Websuche und ebensolchen Remote-MCP-Servern verifizieren.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung in der Praxis', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Komplettes Werkzeugpaket',
            'Bedeutung in der Praxis': 'Chat, Agent, Bilder, Musik, Übersetzung und Transkription in einer App.',
            'Einschränkung / Hinweis': 'Der Umfang bedeutet mehr Pflegeaufwand; die Quellen enthalten keine praktische Qualitätsbewertung.',
          },
          {
            'Vorteil': 'MCP-fähiger Agent',
            'Bedeutung in der Praxis': 'Der Agent kann Gerätewerkzeuge und angebundene MCP-Server nutzen, mit Zustimmung je Aufruf.',
            'Einschränkung / Hinweis': 'Remote-MCP-Server und Websuche gehen online.',
          },
          {
            'Vorteil': 'Viele Import-Formate',
            'Bedeutung in der Praxis': 'GGUF-, LiteRT- und MNN-Dateien lassen sich importieren, dazu Downloads von Hugging Face.',
            'Einschränkung / Hinweis': 'Welche Formate auf welchem Smartphone laufen, hängt von Laufzeitumgebung und Chipsatz ab.',
          },
          {
            'Vorteil': 'Lesbarer Quellcode',
            'Bedeutung in der Praxis': 'Sie können den Code lesen und bauen, und die App ist kostenlos installierbar.',
            'Einschränkung / Hinweis': 'Die nichtkommerzielle PolyForm-Lizenz ist keine Open-Source-Lizenz, und Premium kostet Geld.',
          },
          {
            'Vorteil': 'Beide Plattformen',
            'Bedeutung in der Praxis': 'Es gibt Android- und iPhone-Versionen, dazu iPad und Macs mit Apple Silicon.',
            'Einschränkung / Hinweis': 'Funktionen unterscheiden sich je Plattform, und die Play-Bewertung lag am 3. Oktober 2026 bei 3,0 aus 335 Rezensionen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Menschen, die eine App auf dem Gerät für viele KI-Aufgaben wollen.** Chat, Übersetzung, Transkription und Bild- oder Musikgenerierung stecken in einer einzigen Installation.',
          '**Android-Nutzer, die einen Agenten wollen, der Termux-Befehle entwirft.** Der Ablauf „vor dem Ausführen bearbeiten“ ist im README beschrieben.',
          '**Tüftler, die lesbaren Quellcode wollen.** Der Code ist öffentlich, sofern die Bedingungen der nichtkommerziellen Lizenz zum beabsichtigten Zweck passen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praktische Leistung.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Akkuverbrauch, Ausgabequalität und Stabilität sind daher nicht bewertet.',
          '**Hardwareanforderungen.** In den gelesenen Quellen fand sich keine Angabe zu Mindest-RAM, Android-Version oder Chipsatz.',
          '**Was Premium freischaltet.** Der App Store nennt einen Preis; keiner der gelesenen Store-Texte führt die gesperrten Funktionen auf, und der Play-Preis wurde nicht angezeigt.',
          '**Ob der kostenlose Build Werbung zeigt.** Nur ein indirekter Hinweis in den Einrichtungsnotizen des READMEs.',
          '**Produkt-Website.** Die Seite [llm-hub.app](https://www.llm-hub.app) lädt nur mit JavaScript, sodass ihr Inhalt nicht gelesen werden konnte; die Angaben hier stammen aus den Stores und dem Repository.',
          '**Ähnlich benannte Repositorys.** Suchergebnisse zeigen weitere GitHub-Repositorys mit nahezu identischen Namen; diese Rezension behandelt nur [timmyy123/LLM-Hub](https://github.com/timmyy123/LLM-Hub), auf das das README der App und die E-Mail des Lizenzinhabers verweisen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Chat-Client auf dem Gerät mit eigener Modellbibliothek',
          },
          {
            'App': '[Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Quelloffene On-Device-App des AI-Edge-Teams von Google',
          },
          {
            'App': '[Private Mind](/de/power-local-llm/private-mind-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Offline-Chat mit Dokumenten-Q&A auf dem Gerät',
          },
          {
            'App': '[Layla](/de/power-local-llm/layla-review)',
            'Plattformen': 'Android, iOS',
            'Preis / Lizenz': 'Kostenpflichtig / Closed Source',
            'Wesentlicher Unterschied': 'Fokus auf Begleiter und Rollenspiel mit optionalem Cloud-Modus',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist LLM Hub kostenlos?',
            a: 'Die App ist in beiden Stores kostenlos installierbar, mit In-App-Käufen. Der App Store führt einen Kauf „Premium Lifetime“ für $9.99; Google Play sagt, dass einige Funktionen Premium erfordern, ohne einen Preis zu nennen.',
          },
          {
            q: 'Ist LLM Hub Open Source?',
            a: 'Nicht im üblichen Sinn. Das Projekt nennt sich selbst Open Source, doch die LICENSE-Datei trägt die Überschrift PolyForm Noncommercial License 1.0.0, die die kommerzielle Nutzung einschränkt. Der Code ist lesbar, daher lässt sich die App besser als „source-available“ (quelleinsehbar) beschreiben.',
          },
          {
            q: 'Wer macht LLM Hub?',
            a: 'Ein einzelner Entwickler: Google Play führt „timmy boy“ (Entwicklername Yuan Qian, mit australischer Adresse), der App Store führt Yuan Qian, und der Code liegt im GitHub-Konto timmyy123, mit derselben Kontakt-E-Mail in der Lizenz und im Play-Eintrag.',
          },
          {
            q: 'Funktioniert sie offline?',
            a: 'Die lokale Inferenz läuft auf dem Gerät, sobald Modelle heruntergeladen sind. Das Herunterladen von Modellen, die Websuche und Remote-MCP-Server brauchen laut Play-Beschreibung das Internet.',
          },
          {
            q: 'Welche Plattformen unterstützt sie?',
            a: 'Android über Google Play sowie iPhone, iPad, Macs mit Apple Silicon und Apple Vision über den App Store. Einige Funktionen unterscheiden sich: Videogenerierung ist für iOS aufgeführt, Termux-Befehle für Android.',
          },
          {
            q: 'Was bietet die MCP-Unterstützung?',
            a: 'Der Agent kann kompatible Model-Context-Protocol-Server anbinden, um externe Werkzeuge zu nutzen, und jeder Werkzeugaufruf muss laut Play-Beschreibung und README vor der Ausführung genehmigt werden.',
          },
          {
            q: 'Welche Modelle kann ich nutzen?',
            a: 'Gemma und Llama werden bei Google Play genannt. Laut README können Sie Modelle von Hugging Face herunterladen oder Dateien in den Formaten .task, .litertlm, qnn, .mnn und .gguf importieren.',
          },
          {
            q: 'Welche Daten erhebt sie?',
            a: 'Beide Stores enthalten Erklärungen, dass keine Daten erhoben werden. Das sind eigene Aussagen des Entwicklers, und Online-Funktionen wie die Websuche und Remote-MCP-Server senden Anfragen vom Gerät aus.',
          },
          {
            q: 'Wie schneidet sie im Vergleich zu PocketPal AI ab?',
            a: 'PocketPal AI ist ein kostenloser, MIT-lizenzierter Chat-Client auf dem Gerät, während LLM Hub eine breitere Suite mit Agent, Mediengenerierung und kostenpflichtiger Premium-Stufe unter einer nichtkommerziellen, „source-available“ Lizenz ist.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'LLM Hub ist auf dem Papier die umfangreichste App in dieser Gruppe mobiler Lokal-KI-Apps: Chat, ein MCP-fähiger Agent, Bild- und Musikgenerierung, Übersetzung und Transkription unter Android und auf dem iPhone, von einem Entwickler, der den Quellcode veröffentlicht. Dem steht gegenüber, dass die Lizenz „source-available“ und nichtkommerziell ist und nicht Open Source, Premium kostenpflichtig ist und sein Umfang im Store-Text nicht ausgeführt wird, die Play-Bewertung am 3. Oktober 2026 bei 3,0 aus 335 Rezensionen lag, keine Hardwareanforderungen veröffentlicht sind und nichts davon praktisch getestet wurde. Sie eignet sich für Leser, die eine App auf dem Gerät für viele Aufgaben wollen und diese Bedingungen akzeptieren; wer einen freizügig lizenzierten Chat-Client bevorzugt, kann [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private Mind](/de/power-local-llm/private-mind-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LLM Hub bei Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) — Beschreibung, Entwicklerangaben, Abschnitt „Datensicherheit“, Download-Zahl, Bewertung und Datum der letzten Aktualisierung, geprüft am 3. Oktober 2026.',
          '[LLM Hub im App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) — Preis, Kauf „Premium Lifetime“, Version, Plattformanforderungen und Datenschutzlabel, geprüft am 3. Oktober 2026.',
          '[LLM-Hub auf GitHub](https://github.com/timmyy123/LLM-Hub) — README, LICENSE-Datei sowie die Android- und iOS-Build-Dateien für die Versionsnummern.',
          '[Datenschutzerklärung von LLM Hub](https://www.llm-hub.app/privacy) — die Datenschutzerklärung des Entwicklers, verlinkt von der Produkt-Website.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, MIT-lizenzierter Chat-Client auf dem Gerät.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App mit Dokumenten-Q&A.',
          '[Google-AI-Edge-Gallery-Rezension](/de/power-local-llm/google-ai-edge-gallery-review) — Googles quelloffene KI-App für das Gerät.',
          '[Layla-Rezension](/de/power-local-llm/layla-review) — eine kostenpflichtige App auf dem Gerät im Stil eines Begleiters.',
          '[Beste lokale LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
          '[Beste lokale LLM-Apps für das iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — der breitere iPhone-Überblick.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-hub-review-hero-es.webp',
    title: 'Análisis de LLM Hub: suite de IA en el dispositivo para Android y iPhone',
    seoTitle: 'Análisis de LLM Hub: suite de IA en el dispositivo',
    intro:
      'LLM Hub es una app móvil, publicada por un desarrollador individual, que reúne un chat con un modelo de lenguaje local, un agente de IA que puede usar servidores MCP, generación de imágenes y música, traducción, transcripción con Whisper y un «Vibe Coder» que muestra una vista previa del HTML generado. Está disponible en [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) y en la [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820), es gratuita de instalar y tiene un nivel Premium de pago. El proyecto se describe a sí mismo como de código abierto, pero el archivo LICENSE de su repositorio es una licencia PolyForm no comercial, lo que hace que el código sea de código disponible (source-available) y no de código abierto en el sentido habitual. Este análisis se basa en las fichas de las tiendas y en el [repositorio público de GitHub](https://github.com/timmyy123/LLM-Hub), consultados el 3 de octubre de 2026; PromptQuorum no ha probado la app de forma práctica.',
    metaDescription:
      'Análisis de LLM Hub: app de IA en el dispositivo para Android y iPhone con chat, agente MCP e imágenes y música. Precio, licencia PolyForm y límites.',
    twitterDescription:
      'Análisis de LLM Hub: una sola app para Android y iPhone con chat local, agente MCP, generación de imágenes y música, traducción y transcripción, con licencia PolyForm no comercial y un nivel Premium de pago.',
    audience:
      'Usuarios de Android y iPhone que valoran una app de IA todo en uno en el dispositivo y necesitan saber con exactitud qué se ejecuta en local, qué significan el nivel Premium y la licencia, y qué no confirman las fuentes.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de LLM Hub',
    targetKeywords: [
      'opiniones app llm hub',
      'llm hub asistente de ia local',
      'llm hub android ios',
      'app de ia en el dispositivo generación de imágenes y música',
      'app de llm local con agente mcp android',
      'llm hub licencia polyform no comercial',
      'llm hub vs pocketpal ai',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Stable Diffusion 1.5', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad', 'Apple M1', 'Qualcomm NPU'],
    leadAnswerBlock:
      '**LLM Hub (versión 4.4.2 para Android y 1.4.0 para iOS a fecha del 3 de octubre de 2026) es una app móvil gratuita de instalar que ejecuta modelos de lenguaje locales y añade un agente compatible con MCP, generación de imágenes y música, traducción, transcripción con Whisper y chat de voz, con un nivel Premium de pago.** Según sus fichas, las conversaciones permanecen en el dispositivo durante la inferencia local, y solo se necesita internet para descargar modelos y para funciones opcionales como la búsqueda web y los servidores MCP remotos. El README y Google Play la describen como de código abierto, pero el archivo LICENSE del repositorio lleva el encabezado PolyForm Noncommercial License 1.0.0, que restringe el uso comercial.',
    quickAnswerTop: {
      es: {
        question: '¿LLM Hub es de código abierto y funciona totalmente offline?',
        answer:
          'Es de código disponible (source-available) y no de código abierto en el sentido habitual: el proyecto se describe como de código abierto, pero el archivo LICENSE es una licencia PolyForm Noncommercial que restringe el uso comercial. Según sus fichas, la inferencia local se ejecuta offline una vez descargados los modelos; la búsqueda web y los servidores MCP remotos son funciones opcionales que usan internet.',
        bullets: [
          'Gratis de instalar en [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) y en la [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820); la App Store lista una compra Premium Lifetime de $9.99, mientras que el texto de Play solo dice que algunas funciones requieren Premium.',
          'Chat local con modelos como Gemma y Llama, archivos importables en formato GGUF, LiteRT y MNN, y descargas desde Hugging Face.',
          'Extras más allá del chat: un agente con MCP y herramientas del dispositivo, generación de imágenes, música y (en iOS) vídeo, traducción y transcripción con Whisper.',
          'Según la consulta del 3 de octubre de 2026: compilación 4.4.2 para Android e iOS 1.4.0, 10K+ descargas en Play y 602 estrellas en GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es LLM Hub?', anchor: 'what-is-llm-hub' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Modelos y formatos', anchor: 'models-supported' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Diferencias entre Android y iPhone', anchor: 'platform-differences' },
      { label: 'Precio y licencia', anchor: 'pricing-license' },
      { label: 'Privacidad y funciones en línea', anchor: 'privacy' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Competidores y alternativas', anchor: 'vs-alternatives' },
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
            text: 'LLM Hub es una app gratuita de instalar para Android y iPhone que ejecuta modelos de lenguaje locales y añade un agente compatible con MCP, generación de imágenes y música, traducción y transcripción, con una licencia PolyForm no comercial de código disponible y un nivel Premium de pago.',
          },
          {
            type: 'plain-terms',
            text: 'Es una sola app que intenta cubrir muchas tareas de IA en el dispositivo (chat, un asistente que puede usar herramientas, crear imágenes y música, traducir y convertir voz en texto), y puedes leer su código fuente, pero la licencia no permite que otros lo usen con fines comerciales.',
          },
        ],
        items: [
          'Desarrollador: figura como «timmy boy» en Google Play y como Yuan Qian en la App Store, con la cuenta de GitHub [timmyy123](https://github.com/timmyy123) y el mismo correo de contacto en el archivo LICENSE y en la ficha de Play; Google Play muestra una dirección en Australia.',
          'Precio: gratis de instalar; la App Store lista «LLM Hub Premium Lifetime» a $9.99, y Google Play indica que algunas funciones requieren Premium.',
          'Licencia: archivo LICENSE con el encabezado PolyForm Noncommercial License 1.0.0, que restringe el uso comercial, incluida la distribución en tiendas de apps por parte de terceros; aun así, el proyecto se describe como de código abierto.',
          'Alcance: chat con memoria RAG y búsqueda web opcional, un agente con MCP y Termux (Android), generación de imágenes, música y vídeo, escalado de imágenes, traducción, transcripción con Whisper, detección de estafas y chat de voz.',
          'Indicadores de las tiendas y del repositorio según la consulta del 3 de octubre de 2026: Android 4.4.2, iOS 1.4.0, 10K+ descargas en Play con una valoración de 3.0 sobre 335 reseñas, 602 estrellas en GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en las fichas de Google Play y de la App Store y en el repositorio público de GitHub (README, LICENSE y archivos de compilación), consultados el 3 de octubre de 2026. PromptQuorum no ha probado ni evaluado con pruebas comparativas la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-hub',
        title: '¿Qué es LLM Hub?',
        content: [
          '**LLM Hub es una app móvil que reúne un modelo de chat local con una colección de otras herramientas de IA en el dispositivo.** Según su [README](https://github.com/timmyy123/LLM-Hub), la suite abarca chat, un agente de IA, diseño de personajes (creAItor), un Vibe Coder, ayuda para escribir, generación de imágenes, generación de música, escalado de imágenes, generación de vídeo en iOS, traducción, transcripción, un detector de estafas y chat de voz con manos libres.',
          'En cada plataforma la impulsan entornos de ejecución distintos: el README enumera MediaPipe, LiteRT y el SDK GenieX de Qualcomm para GGUF en Android, y el SDK RunAnywhere con llama.cpp en iOS. El desarrollador afirma que está optimizada para la aceleración con CPU, GPU y NPU, de modo que la velocidad y las funciones que funcionan dependen del teléfono y del chipset, como también señala la descripción de Play.',
        ],
        note: 'MCP (Model Context Protocol) es una forma estándar de que una app de IA se conecte a servidores de herramientas externos; en LLM Hub, cada llamada a una herramienta MCP requiere la aprobación del usuario, según el README.',
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**LLM Hub se distribuye a través de las dos tiendas móviles y como código fuente; los enlaces siguientes son los que indica el README.**',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Dónde obtenerla': '[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) (iOS y iPadOS 17.5 o posterior)',
          },
          {
            'Plataforma': 'Mac / Vision',
            'Dónde obtenerla': 'La misma ficha de la App Store (Mac con Apple M1+, visionOS 1.2+)',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde obtenerla': '[GitHub](https://github.com/timmyy123/LLM-Hub) (PolyForm Noncommercial)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[llm-hub.app](https://www.llm-hub.app)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Política de privacidad de LLM Hub](https://www.llm-hub.app/privacy)',
          },
        ],
        note: 'Esta página es material complementario de la entrada de la app en el [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versiones verificadas el 3 de octubre de 2026: Android 4.4.2 / iOS 1.4.0 (la de Android procede del archivo de compilación del repositorio, ya que el texto de Play que se leyó no muestra versión; la de iOS, de la App Store). El README dice que las apps nativas para Windows y macOS están planificadas, no publicadas.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La guía de inicio rápido del README tiene tres pasos; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga LLM Hub desde Google Play o la App Store, o compílala desde el código fuente siguiendo el README; según la ficha de Play, no se requiere cuenta.',
          },
          {
            title: 'Descarga o importa un modelo',
            whyItMatters: 'Abre Ajustes y luego Descargar modelos, y descarga un modelo o importa uno; el README enumera archivos .task, .litertlm, qnn, .mnn y .gguf y descargas directas desde Hugging Face.',
          },
          {
            title: 'Elige un modelo y empieza',
            whyItMatters: 'Selecciona el modelo y empieza a chatear, o abre alguna de las otras herramientas, como el generador de imágenes, el traductor o el transcriptor.',
          },
        ],
        note: 'Según la descripción de Play, se necesita acceso a internet para descargar modelos y para funciones opcionales en línea, como la búsqueda web y los servidores MCP remotos.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Modelos y formatos',
        itemHeadings: true,
        columns: ['Área', 'Citado en las fuentes', 'Notas'],
        rows: [
          {
            'Área': 'Modelos de chat',
            'Citado en las fuentes': 'Gemma y Llama (Play); Gemma 4 en iPhone (demo del README)',
            'Notas': 'Se pueden importar o descargar otras familias',
          },
          {
            'Área': 'Formatos de importación',
            'Citado en las fuentes': '.task, .litertlm, qnn, .mnn, .gguf',
            'Notas': 'Según el README; GGUF se ejecuta con GenieX en Android',
          },
          {
            'Área': 'Imágenes',
            'Citado en las fuentes': 'Stable Diffusion 1.5; escaladores RealESRGAN y UltraSharp',
            'Notas': 'Escalado de hasta 4x, con aceleración NPU indicada',
          },
          {
            'Área': 'Audio',
            'Citado en las fuentes': 'Whisper (transcripción); Kokoro TTS en Android',
            'Notas': 'Música: SoundGen en Android, Magenta Realtime 2 en iOS',
          },
          {
            'Área': 'Vídeo',
            'Citado en las fuentes': 'Stable Video Diffusion',
            'Notas': 'Según el README, solo para iOS',
          },
        ],
        note: 'La fuente de esta tabla es el README, no un catálogo dentro de la app, y la disponibilidad de modelos cambia con cada versión de la app. No se indicaron los requisitos de hardware de cada modelo.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de la descripción de Play o del README; ninguno ha sido probado de forma independiente.**',
        ],
        items: [
          '**Chat.** Conversaciones de varios turnos con memoria RAG, entrada de imágenes, búsqueda web opcional y respuestas con texto a voz local.',
          '**Agente de IA y MCP.** Un agente en el dispositivo con llamadas a funciones, mapas y herramientas del dispositivo; se conecta a servidores MCP compatibles, y cada llamada a una herramienta necesita aprobación.',
          '**Comandos de Termux (Android).** El agente redacta comandos de shell para Termux que puedes revisar y editar antes de ejecutarlos, y devuelve los errores al modelo para que proponga correcciones.',
          '**Crear.** Generación de imágenes offline, generación local de música y efectos de sonido, escalado de imágenes, personajes creAItor y un Vibe Coder que muestra una vista previa del HTML y JavaScript generados.',
          '**Idioma y voz.** Traducción en más de 50 idiomas, incluido el texto de imágenes (OCR) y audio, ayuda para escribir, transcripción con Whisper, chat de voz con VibeVoice y un detector de estafas para mensajes sospechosos.',
        ],
      },
      platformDifferences: {
        id: 'platform-differences',
        title: 'Diferencias entre Android y iPhone',
        itemHeadings: true,
        columns: ['Capacidad', 'Android', 'iPhone'],
        rows: [
          {
            'Capacidad': 'Entorno de ejecución',
            'Android': 'MediaPipe, LiteRT, GenieX (GGUF)',
            'iPhone': 'SDK RunAnywhere, llama.cpp',
          },
          {
            'Capacidad': 'Música',
            'Android': 'SoundGen (LiteRT)',
            'iPhone': 'Magenta Realtime 2 (MLX)',
          },
          {
            'Capacidad': 'Vídeo',
            'Android': 'No figura',
            'iPhone': 'Stable Video Diffusion',
          },
          {
            'Capacidad': 'Comandos de Termux',
            'Android': 'Sí',
            'iPhone': 'No aplicable',
          },
        ],
        note: 'Las versiones también difieren: Android 4.4.2 e iOS 1.4.0 a fecha del 3 de octubre de 2026, y es posible que las funciones no lleguen a ambas plataformas al mismo tiempo.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Precio y licencia',
        content: [
          '**La app es gratuita de instalar, con compras dentro de la app.** La App Store lista «LLM Hub Premium Lifetime» a $9.99 (tienda de Australia, consultada el 3 de octubre de 2026); la ficha de Google Play muestra compras dentro de la app y dice que algunas funciones requieren Premium, sin indicar un precio ni qué está bloqueado. La nota de configuración para desarrolladores del README describe una opción para omitir los anuncios y desbloquear Premium en local, lo que sugiere que la compilación gratuita de Android podría mostrar anuncios; el texto de Play que se leyó no lo indica.',
          'Sobre la licencia: el README y la descripción de Play describen el proyecto como de código abierto, pero el archivo LICENSE del repositorio lleva el encabezado PolyForm Noncommercial License 1.0.0, y sus términos definen los fines comerciales de modo que incluyen distribuir el software en una tienda de apps, cobrar por él y monetizarlo mediante anuncios o compras dentro de la app. GitHub informa de la licencia como «Other». En términos sencillos, es código de código disponible que puedes leer, modificar y usar sin fines comerciales, no una licencia permisiva de código abierto; esto no es asesoramiento jurídico, así que lee el archivo LICENSE antes de reutilizar cualquier código.',
        ],
        items: [
          '**App Store:** gratis; compra dentro de la app Premium Lifetime a $9.99.',
          '**Google Play:** gratis; compras dentro de la app; funciones Premium sin especificar.',
          '**Código fuente:** PolyForm Noncommercial 1.0.0 según el archivo LICENSE; las versiones del propio desarrollador en las tiendas son la distribución comercial.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y funciones en línea',
        content: [
          '**Las dos tiendas incluyen declaraciones de que no se recopilan datos:** la sección Seguridad de los datos de Play dice «No se recopilan datos» y «No se comparten datos con terceros», y la etiqueta de privacidad de la App Store indica que el desarrollador no recopila ningún dato. El README añade «zero data collection» y «no accounts, no tracking».',
          'Esas afirmaciones se aplican a la inferencia local. La descripción de Play indica que se requiere acceso a internet para descargar modelos y para funciones opcionales en línea, como la búsqueda web y los servidores MCP remotos, por lo que un chat que use esas funciones envía solicitudes fuera del dispositivo. Son declaraciones del desarrollador, no resultados de una auditoría.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código fuente es público, por lo que las afirmaciones pueden comprobarse compilando la app, pero PromptQuorum no ha auditado el código ni el tráfico de red. Quien maneje datos confidenciales debería verificar el comportamiento con la búsqueda web y los servidores MCP remotos desactivados y activados.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'En el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Conjunto de herramientas todo en uno',
            'En el uso real': 'Chat, agente, imágenes, música, traducción y transcripción en una sola app.',
            'Limitación / salvedad': 'Tanta amplitud implica más que mantener; las fuentes no contienen ninguna evaluación práctica de la calidad.',
          },
          {
            'Ventaja': 'Agente compatible con MCP',
            'En el uso real': 'El agente puede usar herramientas del dispositivo y servidores MCP conectados, con aprobación en cada llamada.',
            'Limitación / salvedad': 'Los servidores MCP remotos y la búsqueda web usan internet.',
          },
          {
            'Ventaja': 'Muchos formatos de importación',
            'En el uso real': 'Se pueden importar archivos GGUF, LiteRT y MNN, además de descargas desde Hugging Face.',
            'Limitación / salvedad': 'Qué formatos funcionan en cada teléfono depende del entorno de ejecución y del chipset.',
          },
          {
            'Ventaja': 'El código fuente es legible',
            'En el uso real': 'Puedes leer y compilar el código, y la app es gratuita de instalar.',
            'Limitación / salvedad': 'La licencia PolyForm Noncommercial no es una licencia de código abierto, y Premium es de pago.',
          },
          {
            'Ventaja': 'Las dos plataformas',
            'En el uso real': 'Hay versiones para Android y iPhone, además de iPad y Mac con Apple Silicon.',
            'Limitación / salvedad': 'Las funciones difieren según la plataforma, y la valoración en Play era de 3.0 sobre 335 reseñas el 3 de octubre de 2026.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas que quieren una sola app en el dispositivo para muchas tareas de IA.** Chat, traducción, transcripción y generación de imágenes o música vienen en una única instalación.',
          '**Usuarios de Android que quieren un agente que redacte comandos de Termux.** El README describe el flujo de editar antes de ejecutar.',
          '**Aficionados a trastear que quieren un código fuente legible.** El código es público, siempre que los términos de la licencia no comercial se ajusten al uso previsto.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en uso real.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, el consumo de batería, la calidad de las respuestas ni la estabilidad.',
          '**Requisitos de hardware.** En las fuentes leídas no se encontró una lista de RAM mínima, versión de Android ni chipsets.',
          '**Qué desbloquea Premium.** La App Store indica un precio; ninguno de los textos de las tiendas que se leyeron enumera las funciones bloqueadas, y el precio en Play no se mostraba.',
          '**Si la compilación gratuita muestra anuncios.** Solo hay una mención indirecta en las notas de configuración del README.',
          '**Sitio web del producto.** El sitio [llm-hub.app](https://www.llm-hub.app) solo carga con JavaScript, por lo que no se pudo leer su contenido; los datos de aquí proceden de las tiendas y del repositorio.',
          '**Repositorios con nombres parecidos.** Los resultados de búsqueda muestran otros repositorios de GitHub con nombres casi idénticos; este análisis cubre solo [timmyy123/LLM-Hub](https://github.com/timmyy123/LLM-Hub), el repositorio al que apuntan el README de la app y el correo del titular de la licencia.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente de chat de código abierto en el dispositivo con su propia biblioteca de modelos',
          },
          {
            'App': '[Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'App de código abierto en el dispositivo del equipo de AI Edge de Google',
          },
          {
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat offline de código abierto con preguntas sobre documentos en el dispositivo',
          },
          {
            'App': '[Layla](/es/power-local-llm/layla-review)',
            'Plataformas': 'Android, iOS',
            'Precio / licencia': 'De pago / código cerrado',
            'Diferencia clave': 'Enfoque en compañía y juegos de rol, con un modo en la nube opcional',
          },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿LLM Hub es gratis?',
            a: 'Es gratuita de instalar en las dos tiendas, con compras dentro de la app. La App Store lista una compra Premium Lifetime a $9.99; Google Play dice que algunas funciones requieren Premium sin indicar un precio.',
          },
          {
            q: '¿LLM Hub es de código abierto?',
            a: 'No en el sentido habitual. El proyecto se describe como de código abierto, pero el archivo LICENSE lleva el encabezado PolyForm Noncommercial License 1.0.0, que restringe el uso comercial. El código es legible, por lo que se describe mejor como de código disponible (source-available).',
          },
          {
            q: '¿Quién hace LLM Hub?',
            a: 'Un desarrollador individual: Google Play lista a «timmy boy» (nombre de desarrollador Yuan Qian, con una dirección en Australia), la App Store lista a Yuan Qian, y el código está en la cuenta de GitHub timmyy123, con el mismo correo de contacto en la licencia y en la ficha de Play.',
          },
          {
            q: '¿Funciona sin conexión?',
            a: 'La inferencia local se ejecuta en el dispositivo una vez descargados los modelos. Descargar modelos, la búsqueda web y los servidores MCP remotos necesitan internet, según la descripción de Play.',
          },
          {
            q: '¿Qué plataformas admite?',
            a: 'Android a través de Google Play, y iPhone, iPad, Mac con Apple Silicon y Apple Vision a través de la App Store. Algunas funciones difieren: la generación de vídeo figura para iOS y los comandos de Termux para Android.',
          },
          {
            q: '¿Qué es la compatibilidad con MCP?',
            a: 'El agente puede conectarse a servidores compatibles con Model Context Protocol para usar herramientas externas, y cada llamada a una herramienta debe aprobarse antes de ejecutarse, según la descripción de Play y el README.',
          },
          {
            q: '¿Qué modelos puedo usar?',
            a: 'Gemma y Llama se citan en Google Play. Puedes descargar modelos desde Hugging Face o importar archivos .task, .litertlm, qnn, .mnn y .gguf, según el README.',
          },
          {
            q: '¿Qué datos recopila?',
            a: 'Las dos tiendas incluyen declaraciones de que no se recopilan datos. Son declaraciones del propio desarrollador, y las funciones en línea, como la búsqueda web y los servidores MCP remotos, envían solicitudes fuera del dispositivo.',
          },
          {
            q: '¿Cómo se compara con PocketPal AI?',
            a: 'PocketPal AI es un cliente de chat gratuito en el dispositivo con licencia MIT, mientras que LLM Hub es una suite más amplia con un agente, generación de contenido multimedia y un nivel Premium de pago, bajo una licencia no comercial de código disponible.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Sobre el papel, LLM Hub es la app más amplia de este grupo de apps móviles de IA local: chat, un agente compatible con MCP, generación de imágenes y música, traducción y transcripción en Android y iPhone, de un desarrollador que publica el código fuente. En contra, la licencia es de código disponible y no comercial, no de código abierto; Premium es de pago y su alcance no se detalla en el texto de las tiendas; la valoración en Play era de 3.0 sobre 335 reseñas el 3 de octubre de 2026; no se publican requisitos de hardware, y nada de esto se ha probado de forma práctica. Encaja con quienes quieren una sola app en el dispositivo para muchas tareas y aceptan esas condiciones; quienes prefieran un cliente de chat con licencia permisiva pueden comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private Mind](/es/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[LLM Hub en Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) — descripción, datos del desarrollador, sección Seguridad de los datos, número de descargas, valoración y fecha de última actualización, consultados el 3 de octubre de 2026.',
          '[LLM Hub en la App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) — precio, compra Premium Lifetime, versión, requisitos de plataforma y etiqueta de privacidad, consultados el 3 de octubre de 2026.',
          '[LLM-Hub en GitHub](https://github.com/timmyy123/LLM-Hub) — README, archivo LICENSE y archivos de compilación de Android e iOS para los números de versión.',
          '[Política de privacidad de LLM Hub](https://www.llm-hub.app/privacy) — la política de privacidad del desarrollador, enlazada desde el sitio web del producto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito en el dispositivo con licencia MIT.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita con licencia MIT y preguntas sobre documentos.',
          '[Análisis de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app de IA de código abierto en el dispositivo de Google.',
          '[Análisis de Layla](/es/power-local-llm/layla-review) — una app de pago en el dispositivo de estilo acompañante.',
          '[Las mejores apps de LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el repaso más amplio para Android.',
          '[Las mejores apps de LLM locales para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el repaso más amplio para iPhone.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-hub-review-hero-fr.webp',
    title: 'Avis LLM Hub : suite d\'IA sur l\'appareil pour Android et iPhone',
    seoTitle: 'Avis LLM Hub : suite d\'IA sur l\'appareil, Android et iOS',
    intro:
      'LLM Hub est une application mobile, publiée par un développeur individuel, qui réunit un chat avec un modèle de langage local, un agent d\'IA capable d\'utiliser des serveurs MCP, la génération d\'images et de musique, la traduction, la transcription Whisper et un « Vibe Coder » qui affiche un aperçu du HTML généré. Elle est disponible sur [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) et l\'[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820), gratuite à installer avec une offre Premium payante. Le projet se décrit comme open source, mais le fichier LICENSE de son dépôt est une licence PolyForm non commerciale, ce qui fait du code un code source disponible (source-available) plutôt qu\'un logiciel open source au sens habituel. Cet avis se fonde sur les fiches des boutiques et sur le [dépôt GitHub](https://github.com/timmyy123/LLM-Hub) public, consultés le 3 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'Avis LLM Hub : appli d\'IA sur l\'appareil pour Android et iPhone avec chat, agent MCP, images et musique. Tarifs, licence PolyForm, confidentialité et limites.',
    twitterDescription:
      'Avis LLM Hub : une seule application Android et iPhone pour le chat local, un agent MCP, la génération d\'images et de musique, la traduction et la transcription — avec une licence PolyForm non commerciale et une offre Premium payante.',
    audience:
      'Utilisateurs d\'Android et d\'iPhone qui envisagent une application d\'IA tout-en-un sur l\'appareil et ont besoin de savoir précisément ce qui s\'exécute en local, ce que signifient l\'offre Premium et la licence, et ce que les sources ne confirment pas.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis LLM Hub',
    targetKeywords: [
      'avis application llm hub',
      'llm hub assistant ia local',
      'llm hub android ios',
      'application ia sur l\'appareil génération image musique',
      'application llm local agent mcp android',
      'llm hub licence polyform non commerciale',
      'llm hub vs pocketpal ai',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Stable Diffusion 1.5', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad', 'Apple M1', 'Qualcomm NPU'],
    leadAnswerBlock:
      '**LLM Hub (version 4.4.2 sur Android et 1.4.0 sur iOS au 3 octobre 2026) est une application mobile gratuite à installer qui exécute des modèles de langage locaux et ajoute un agent compatible MCP, la génération d\'images et de musique, la traduction, la transcription Whisper et le chat vocal, avec une offre Premium payante.** Selon ses fiches, les conversations restent sur l\'appareil pendant l\'inférence locale, internet n\'étant nécessaire que pour télécharger les modèles et pour des fonctions facultatives comme la recherche web et les serveurs MCP distants. Le README et Google Play la qualifient d\'open source, mais le fichier LICENSE du dépôt porte l\'intitulé PolyForm Noncommercial License 1.0.0, qui restreint l\'usage commercial.',
    quickAnswerTop: {
      fr: {
        question: 'LLM Hub est-elle open source, et fonctionne-t-elle entièrement hors ligne ?',
        answer:
          'Elle relève du code source disponible plutôt que de l\'open source au sens habituel : le projet se dit open source, mais le fichier LICENSE est une licence PolyForm Noncommercial qui restreint l\'usage commercial. Selon ses fiches, l\'inférence locale s\'exécute hors ligne une fois les modèles téléchargés ; la recherche web et les serveurs MCP distants sont des fonctions facultatives en ligne.',
        bullets: [
          'Gratuite à installer sur [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) et l\'[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) ; l\'App Store indique un achat Premium à vie à 9,99 $, tandis que le texte de Play dit seulement que certaines fonctions nécessitent Premium.',
          'Chat local avec des modèles comme Gemma et Llama, import de fichiers aux formats GGUF, LiteRT et MNN, et téléchargements depuis Hugging Face.',
          'Au-delà du chat : un agent avec MCP et outils de l\'appareil, la génération d\'images, de musique et (sur iOS) de vidéo, la traduction et la transcription Whisper.',
          'Au 3 octobre 2026 : build Android 4.4.2 et iOS 1.4.0, plus de 10 000 téléchargements sur Play, 602 étoiles sur GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que LLM Hub ?', anchor: 'what-is-llm-hub' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Modèles et formats', anchor: 'models-supported' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Android et iPhone : les différences', anchor: 'platform-differences' },
      { label: 'Tarifs et licence', anchor: 'pricing-license' },
      { label: 'Confidentialité et fonctions en ligne', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'À qui elle convient', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
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
            text: 'LLM Hub est une application Android et iPhone gratuite à installer qui exécute des modèles de langage locaux et ajoute un agent compatible MCP, la génération d\'images et de musique, la traduction et la transcription, sous une licence PolyForm non commerciale à code source disponible, avec une offre Premium payante.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est une seule application qui tente d\'assurer de nombreuses tâches d\'IA sur l\'appareil — le chat, un assistant capable d\'utiliser des outils, la création d\'images et de musique, la traduction et la conversion de la parole en texte — et son code source est consultable, mais la licence n\'autorise pas d\'autres personnes à l\'utiliser à des fins commerciales.',
          },
        ],
        items: [
          'Développeur : indiqué comme « timmy boy » sur Google Play et Yuan Qian sur l\'App Store, avec le compte GitHub [timmyy123](https://github.com/timmyy123) et la même adresse e-mail de contact dans le fichier LICENSE et sur la fiche Play ; une adresse en Australie figure sur Google Play.',
          'Prix : gratuite à installer ; l\'App Store indique « LLM Hub Premium Lifetime » à 9,99 $, et Google Play précise que certaines fonctions nécessitent Premium.',
          'Licence : fichier LICENSE intitulé PolyForm Noncommercial License 1.0.0, qui restreint l\'usage commercial, y compris la distribution par d\'autres sur les boutiques d\'applications ; le projet se dit néanmoins open source.',
          'Périmètre : chat avec mémoire RAG et recherche web facultative, agent avec MCP et Termux (Android), génération d\'images, de musique et de vidéo, upscaling, traduction, transcription Whisper, détection d\'arnaques et chat vocal.',
          'Indicateurs des boutiques et du dépôt au 3 octobre 2026 : Android 4.4.2, iOS 1.4.0, plus de 10 000 téléchargements sur Play avec une note de 3,0 sur 335 avis, 602 étoiles sur GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur les fiches de Google Play et de l\'App Store ainsi que sur le dépôt GitHub public (README, LICENSE, fichiers de build), consultés le 3 octobre 2026. PromptQuorum n\'a ni testé ni évalué par benchmark l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-hub',
        title: 'Qu\'est-ce que LLM Hub ?',
        content: [
          '**LLM Hub est une application mobile qui réunit un modèle de chat local et un ensemble d\'autres outils d\'IA sur l\'appareil.** D\'après son [README](https://github.com/timmyy123/LLM-Hub), la suite couvre le chat, un agent d\'IA, la création de personas (creAItor), un Vibe Coder, une aide à la rédaction, la génération d\'images, la génération de musique, l\'upscaling d\'images, la génération de vidéo sur iOS, la traduction, la transcription, un détecteur d\'arnaques et le chat vocal mains libres.',
          'Des runtimes différents la font fonctionner selon la plateforme : le README cite MediaPipe, LiteRT et le SDK GenieX de Qualcomm pour GGUF sur Android, et le SDK RunAnywhere avec llama.cpp sur iOS. Le développeur indique qu\'elle est optimisée pour l\'accélération CPU, GPU et NPU ; la vitesse et les fonctions disponibles dépendent donc du téléphone et de son processeur, comme le note aussi la description Play.',
        ],
        note: 'MCP (Model Context Protocol) est une méthode standard permettant à une application d\'IA de se connecter à des serveurs d\'outils externes ; dans LLM Hub, chaque appel d\'outil MCP nécessite l\'approbation de l\'utilisateur, selon le README.',
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**LLM Hub est distribuée via les deux boutiques mobiles et sous forme de code source ; les liens ci-dessous sont ceux que le README indique.**',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)',
          },
          {
            'Plateforme': 'iPhone / iPad',
            'Où la trouver': '[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) (iOS et iPadOS 17.5 ou version ultérieure)',
          },
          {
            'Plateforme': 'Mac / Vision',
            'Où la trouver': 'Même fiche App Store (Mac avec Apple M1+, visionOS 1.2+)',
          },
          {
            'Plateforme': 'Code source',
            'Où la trouver': '[GitHub](https://github.com/timmyy123/LLM-Hub) (PolyForm Noncommercial)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[llm-hub.app](https://www.llm-hub.app)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité de LLM Hub](https://www.llm-hub.app/privacy)',
          },
        ],
        note: 'Cette page est un complément à l\'entrée de l\'application dans le [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versions vérifiées le 3 octobre 2026 : Android 4.4.2 / iOS 1.4.0 (Android d\'après le fichier de build du dépôt, car le texte Play lu n\'indique aucune version ; iOS d\'après l\'App Store). Le README indique que des applications natives pour Windows et macOS sont prévues, mais non publiées.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**Le démarrage rapide du README comporte trois étapes ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Téléchargez LLM Hub depuis Google Play ou l\'App Store, ou compilez-la à partir du code source en suivant le README ; selon la fiche Play, aucun compte n\'est requis.',
          },
          {
            title: 'Télécharger ou importer un modèle',
            whyItMatters: 'Ouvrez Paramètres, puis Download Models, et téléchargez un modèle ou importez-en un ; le README mentionne les fichiers .task, .litertlm, qnn, .mnn et .gguf ainsi que les téléchargements directs depuis Hugging Face.',
          },
          {
            title: 'Choisir un modèle et commencer',
            whyItMatters: 'Sélectionnez le modèle et commencez à discuter, ou ouvrez l\'un des autres outils, comme le générateur d\'images, le traducteur ou l\'outil de transcription.',
          },
        ],
        note: 'Une connexion internet est nécessaire pour télécharger les modèles et pour des fonctions en ligne facultatives comme la recherche web et les serveurs MCP distants, selon la description Play.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Modèles et formats',
        itemHeadings: true,
        columns: ['Domaine', 'Cité dans les sources', 'Remarques'],
        rows: [
          {
            'Domaine': 'Modèles de chat',
            'Cité dans les sources': 'Gemma et Llama (Play) ; Gemma 4 sur iPhone (démo du README)',
            'Remarques': 'D\'autres familles peuvent être importées ou téléchargées',
          },
          {
            'Domaine': 'Formats d\'import',
            'Cité dans les sources': '.task, .litertlm, qnn, .mnn, .gguf',
            'Remarques': 'Selon le README ; GGUF passe par GenieX sur Android',
          },
          {
            'Domaine': 'Images',
            'Cité dans les sources': 'Stable Diffusion 1.5 ; upscalers RealESRGAN et UltraSharp',
            'Remarques': 'Upscaling jusqu\'à 4x, accélération NPU mentionnée',
          },
          {
            'Domaine': 'Audio',
            'Cité dans les sources': 'Whisper (transcription) ; Kokoro TTS sur Android',
            'Remarques': 'Musique : SoundGen sur Android, Magenta Realtime 2 sur iOS',
          },
          {
            'Domaine': 'Vidéo',
            'Cité dans les sources': 'Stable Video Diffusion',
            'Remarques': 'Indiquée uniquement pour iOS dans le README',
          },
        ],
        note: 'Ce tableau s\'appuie sur le README, et non sur un catalogue intégré à l\'application, et la disponibilité des modèles change à chaque version. La configuration matérielle requise par modèle n\'était pas précisée.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Play ou du README ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Chat.** Conversations multitours avec mémoire RAG, entrée d\'images, recherche web facultative et réponses vocales par synthèse vocale locale.',
          '**Agent d\'IA et MCP.** Un agent sur l\'appareil avec appel de fonctions, cartes et outils de l\'appareil ; il se connecte à des serveurs MCP compatibles, chaque appel d\'outil nécessitant une approbation.',
          '**Commandes Termux (Android).** L\'agent rédige des commandes shell pour Termux que vous pouvez examiner et modifier avant leur exécution, et renvoie les erreurs au modèle pour proposer des corrections.',
          '**Création.** Génération d\'images hors ligne, génération locale de musique et d\'effets sonores, upscaling d\'images, personas creAItor et un Vibe Coder qui affiche un aperçu du HTML et du JavaScript générés.',
          '**Langue et voix.** Traduction dans plus de 50 langues, y compris le texte dans les images (OCR) et l\'audio, une aide à la rédaction, la transcription Whisper, le chat vocal VibeVoice et un détecteur d\'arnaques pour les messages suspects.',
        ],
      },
      platformDifferences: {
        id: 'platform-differences',
        title: 'Android et iPhone : les différences',
        itemHeadings: true,
        columns: ['Fonction', 'Android', 'iPhone'],
        rows: [
          {
            'Fonction': 'Runtime',
            'Android': 'MediaPipe, LiteRT, GenieX (GGUF)',
            'iPhone': 'SDK RunAnywhere, llama.cpp',
          },
          {
            'Fonction': 'Musique',
            'Android': 'SoundGen (LiteRT)',
            'iPhone': 'Magenta Realtime 2 (MLX)',
          },
          {
            'Fonction': 'Vidéo',
            'Android': 'Non indiquée',
            'iPhone': 'Stable Video Diffusion',
          },
          {
            'Fonction': 'Commandes Termux',
            'Android': 'Oui',
            'iPhone': 'Sans objet',
          },
        ],
        note: 'Les versions diffèrent aussi : Android 4.4.2 et iOS 1.4.0 au 3 octobre 2026, et les fonctions peuvent ne pas arriver en même temps sur les deux plateformes.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Tarifs et licence',
        content: [
          '**L\'application est gratuite à installer, avec des achats intégrés.** L\'App Store indique « LLM Hub Premium Lifetime » à 9,99 $ (boutique australienne, consultée le 3 octobre 2026) ; la fiche Google Play mentionne des achats intégrés et précise que certaines fonctions nécessitent Premium, sans indiquer de prix ni ce qui est verrouillé. La note de configuration développeur du README décrit un indicateur permettant de supprimer les publicités et de déverrouiller Premium en local, ce qui laisse penser que la version Android gratuite pourrait afficher des publicités ; le texte Play lu ne le précise pas.',
          'Concernant la licence : le README et la description Play qualifient le projet d\'open source, mais le fichier LICENSE du dépôt porte l\'intitulé PolyForm Noncommercial License 1.0.0, et ses termes définissent comme usages commerciaux notamment la distribution du logiciel sur une boutique d\'applications, sa vente et sa monétisation par la publicité ou les achats intégrés. GitHub indique la licence comme « Other ». Concrètement, il s\'agit d\'un code source disponible que l\'on peut lire, modifier et utiliser à titre non commercial, et non d\'une licence open source permissive ; ceci ne constitue pas un avis juridique, lisez donc le fichier LICENSE avant de réutiliser du code.',
        ],
        items: [
          '**App Store :** gratuite ; achat intégré Premium Lifetime à 9,99 $.',
          '**Google Play :** gratuite ; achats intégrés ; fonctions Premium non précisées.',
          '**Code source :** PolyForm Noncommercial 1.0.0 selon le fichier LICENSE ; les versions publiées par le développeur sur les boutiques constituent la distribution commerciale.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et fonctions en ligne',
        content: [
          '**Les deux boutiques comportent des déclarations d\'absence de collecte de données :** la section Sécurité des données de Play indique « Aucune donnée collectée » et « Aucune donnée partagée avec des tiers », et l\'étiquette de confidentialité de l\'App Store indique que le développeur ne collecte aucune donnée. Le README ajoute « zero data collection » et « no accounts, no tracking ».',
          'Ces affirmations valent pour l\'inférence locale. La description Play précise qu\'un accès à internet est nécessaire pour télécharger les modèles et pour des fonctions en ligne facultatives comme la recherche web et les serveurs MCP distants ; une conversation qui les utilise envoie donc des requêtes hors de l\'appareil. Ce sont des déclarations du développeur, et non des résultats d\'audit.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code source est public : ces affirmations peuvent donc être vérifiées en compilant l\'application, mais PromptQuorum n\'a audité ni le code ni le trafic réseau. Quiconque traite des données confidentielles devrait vérifier le comportement avec la recherche web et les serveurs MCP distants désactivés puis activés.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'En pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Boîte à outils tout-en-un',
            'En pratique': 'Chat, agent, images, musique, traduction et transcription dans une seule application.',
            'Limite / réserve': 'Cette étendue demande plus de maintenance ; les sources ne contiennent aucune évaluation de la qualité en pratique.',
          },
          {
            'Avantage': 'Agent compatible MCP',
            'En pratique': 'L\'agent peut utiliser les outils de l\'appareil et des serveurs MCP connectés, avec approbation à chaque appel.',
            'Limite / réserve': 'Les serveurs MCP distants et la recherche web passent par internet.',
          },
          {
            'Avantage': 'Nombreux formats d\'import',
            'En pratique': 'Les fichiers GGUF, LiteRT et MNN peuvent être importés, en plus des téléchargements Hugging Face.',
            'Limite / réserve': 'Les formats qui fonctionnent sur tel téléphone dépendent du runtime et du processeur.',
          },
          {
            'Avantage': 'Code source lisible',
            'En pratique': 'Vous pouvez lire et compiler le code, et l\'application est gratuite à installer.',
            'Limite / réserve': 'La licence PolyForm Noncommercial n\'est pas une licence open source, et Premium est payant.',
          },
          {
            'Avantage': 'Deux plateformes',
            'En pratique': 'Il existe des versions Android et iPhone, ainsi que pour iPad et les Mac à puce Apple.',
            'Limite / réserve': 'Les fonctions diffèrent selon la plateforme, et la note Play était de 3,0 sur 335 avis au 3 octobre 2026.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Ceux qui veulent une seule application sur l\'appareil pour de nombreuses tâches d\'IA.** Chat, traduction, transcription et génération d\'images ou de musique tiennent dans une seule installation.',
          '**Les utilisateurs d\'Android qui veulent un agent rédigeant des commandes Termux.** Le fonctionnement avec modification avant exécution est décrit dans le README.',
          '**Les bidouilleurs qui veulent un code source lisible.** Le code est public, à condition que les termes de la licence non commerciale conviennent à l\'usage prévu.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Performances en conditions réelles.** PromptQuorum n\'a pas exécuté l\'application : la vitesse, la consommation de batterie, la qualité des résultats et la stabilité ne sont donc pas évaluées.',
          '**Configuration matérielle requise.** Aucune liste de RAM minimale, de version d\'Android ou de processeurs n\'a été trouvée dans les sources lues.',
          '**Ce que Premium déverrouille.** L\'App Store indique un prix ; aucun des textes des boutiques lus ne détaille les fonctions verrouillées, et le prix sur Play n\'était pas affiché.',
          '**Si la version gratuite affiche des publicités.** Seule une mention indirecte figure dans les notes de configuration du README.',
          '**Site du produit.** Le site [llm-hub.app](https://www.llm-hub.app) ne se charge qu\'avec JavaScript, son contenu n\'a donc pas pu être lu ; les faits présentés ici proviennent des boutiques et du dépôt.',
          '**Dépôts aux noms similaires.** Les résultats de recherche montrent d\'autres dépôts GitHub aux noms quasi identiques ; cet avis ne couvre que [timmyy123/LLM-Hub](https://github.com/timmyy123/LLM-Hub), celui vers lequel pointent le README de l\'application et l\'adresse e-mail du titulaire de la licence.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Client de chat open source sur l\'appareil, avec sa propre bibliothèque de modèles',
          },
          {
            'Application': '[Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / Apache 2.0',
            'Différence clé': 'Application open source sur l\'appareil de l\'équipe AI Edge de Google',
          },
          {
            'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Chat hors ligne open source avec questions-réponses sur documents sur l\'appareil',
          },
          {
            'Application': '[Layla](/fr/power-local-llm/layla-review)',
            'Plateformes': 'Android, iOS',
            'Prix / licence': 'Payante / code fermé',
            'Différence clé': 'Orientée compagnon et jeu de rôle, avec un mode cloud facultatif',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'LLM Hub est-elle gratuite ?',
            a: 'Elle est gratuite à installer sur les deux boutiques, avec des achats intégrés. L\'App Store indique un achat Premium à vie à 9,99 $ ; Google Play précise que certaines fonctions nécessitent Premium, sans indiquer de prix.',
          },
          {
            q: 'LLM Hub est-elle open source ?',
            a: 'Pas au sens habituel. Le projet se dit open source, mais le fichier LICENSE porte l\'intitulé PolyForm Noncommercial License 1.0.0, qui restreint l\'usage commercial. Le code est lisible : il est donc plus juste de parler de code source disponible.',
          },
          {
            q: 'Qui crée LLM Hub ?',
            a: 'Un développeur individuel : Google Play indique « timmy boy » (nom de développeur Yuan Qian, avec une adresse en Australie), l\'App Store indique Yuan Qian, et le code se trouve sur le compte GitHub timmyy123, avec la même adresse e-mail de contact dans la licence et sur la fiche Play.',
          },
          {
            q: 'Fonctionne-t-elle hors ligne ?',
            a: 'L\'inférence locale s\'exécute sur l\'appareil une fois les modèles téléchargés. Le téléchargement des modèles, la recherche web et les serveurs MCP distants nécessitent internet, selon la description Play.',
          },
          {
            q: 'Quelles plateformes prend-elle en charge ?',
            a: 'Android via Google Play, ainsi que l\'iPhone, l\'iPad, les Mac à puce Apple et Apple Vision via l\'App Store. Certaines fonctions diffèrent : la génération de vidéo est indiquée pour iOS, et les commandes Termux pour Android.',
          },
          {
            q: 'Comment fonctionne la prise en charge de MCP ?',
            a: 'L\'agent peut se connecter à des serveurs Model Context Protocol compatibles pour utiliser des outils externes, et chaque appel d\'outil doit être approuvé avant son exécution, selon la description Play et le README.',
          },
          {
            q: 'Quels modèles puis-je utiliser ?',
            a: 'Gemma et Llama sont cités sur Google Play. Vous pouvez télécharger des modèles depuis Hugging Face ou importer des fichiers .task, .litertlm, qnn, .mnn et .gguf, d\'après le README.',
          },
          {
            q: 'Quelles données collecte-t-elle ?',
            a: 'Les deux boutiques comportent des déclarations d\'absence de collecte de données. Ce sont des déclarations du développeur, et les fonctions en ligne comme la recherche web et les serveurs MCP distants envoient des requêtes hors de l\'appareil.',
          },
          {
            q: 'Comment se compare-t-elle à PocketPal AI ?',
            a: 'PocketPal AI est un client de chat gratuit sous licence MIT sur l\'appareil, tandis que LLM Hub est une suite plus large avec un agent, la génération de médias et une offre Premium payante, sous une licence non commerciale à code source disponible.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Sur le papier, LLM Hub est l\'application la plus étendue de ce groupe d\'applications mobiles d\'IA locale : chat, agent compatible MCP, génération d\'images et de musique, traduction et transcription sur Android comme sur iPhone, par un développeur qui publie son code source. En face, la licence relève du code source disponible et non commercial plutôt que de l\'open source, Premium est payant sans que son périmètre soit détaillé dans le texte des boutiques, la note Play était de 3,0 sur 335 avis au 3 octobre 2026, aucune configuration matérielle requise n\'est publiée, et rien ici n\'a été testé en pratique. Elle convient aux lecteurs qui veulent une seule application sur l\'appareil pour de nombreuses tâches et acceptent ces conditions ; ceux qui préfèrent un client de chat sous licence permissive peuvent comparer [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private Mind](/fr/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LLM Hub sur Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) — description, informations sur le développeur, section Sécurité des données, nombre de téléchargements, note et date de dernière mise à jour, consultés le 3 octobre 2026.',
          '[LLM Hub sur l\'App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) — prix, achat Premium Lifetime, version, configuration requise des plateformes et étiquette de confidentialité, consultés le 3 octobre 2026.',
          '[LLM-Hub sur GitHub](https://github.com/timmyy123/LLM-Hub) — README, fichier LICENSE, ainsi que les fichiers de build Android et iOS pour les numéros de version.',
          '[Politique de confidentialité de LLM Hub](https://www.llm-hub.app/privacy) — la politique de confidentialité du développeur, liée depuis le site du produit.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit sur l\'appareil, sous licence MIT.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite, sous licence MIT, avec questions-réponses sur documents.',
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application d\'IA open source sur l\'appareil de Google.',
          '[Avis Layla](/fr/power-local-llm/layla-review) — une application payante sur l\'appareil, orientée compagnon.',
          '[Meilleures applications LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama Android plus large.',
          '[Meilleures applications LLM locales pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama iPhone plus large.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-hub-review-hero-ja.webp',
    title: 'LLM Hubレビュー:Android・iPhone向けのオンデバイスAIスイート',
    seoTitle: 'LLM Hubレビュー:AndroidとiOSのオンデバイスAIスイート',
    intro:
      'LLM Hubは、個人の開発者が公開しているモバイルアプリで、ローカルの言語モデルによるチャットに加えて、MCPサーバーを使えるAIエージェント、画像・音楽の生成、翻訳、Whisperによる文字起こし、生成したHTMLをプレビューする「Vibe Coder」をひとまとめにしています。[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)と[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820)で、インストールは無料、有料のPremiumプランがあります。プロジェクトは自らをオープンソースと説明していますが、リポジトリのLICENSEファイルは非商用のPolyFormライセンスであり、コードは一般的な意味でのオープンソースではなく、ソース公開型(source-available)にあたります。本レビューは、2026年10月3日に確認したストアの掲載情報と公開された[GitHubリポジトリ](https://github.com/timmyy123/LLM-Hub)に基づいています。PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'LLM Hubレビュー:チャット、MCPエージェント、画像・音楽生成を備えたAndroid・iPhone向けのオンデバイスAIアプリ。料金、PolyFormライセンス、プライバシー、制約を解説します。',
    twitterDescription:
      'LLM Hubレビュー:ローカルチャット、MCPエージェント、画像・音楽生成、翻訳、文字起こしを1つにまとめたAndroid・iPhone向けアプリ。非商用のPolyFormライセンスと有料のPremiumプランを解説します。',
    audience:
      'オールインワンのオンデバイスAIアプリを検討しているAndroid・iPhoneユーザーで、何が端末上で動くのか、Premiumプランとライセンスが何を意味するのか、情報源が何を確認していないのかを正確に知りたい方向け。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LLM Hub レビュー',
    targetKeywords: [
      'llm hub アプリ レビュー',
      'llm hub ローカルai アシスタント',
      'llm hub android ios',
      'オンデバイスai アプリ 画像生成 音楽生成',
      'ローカルllm アプリ mcp エージェント android',
      'llm hub polyform 非商用ライセンス',
      'llm hub pocketpal ai 比較',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Stable Diffusion 1.5', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad', 'Apple M1', 'Qualcomm NPU'],
    leadAnswerBlock:
      '**LLM Hub(2026年10月3日時点のバージョンはAndroid 4.4.2、iOS 1.4.0)は、ローカルの言語モデルを動かし、MCP対応のエージェント、画像・音楽の生成、翻訳、Whisperによる文字起こし、音声チャットを加えた、インストール無料のモバイルアプリで、有料のPremiumプランがあります。** 掲載情報によれば、ローカル推論中の会話は端末内にとどまり、インターネットが必要なのはモデルのダウンロードと、Web検索やリモートMCPサーバーといったオプション機能だけです。READMEとGoogle Playはオープンソースと説明していますが、リポジトリのLICENSEファイルの見出しはPolyForm Noncommercial License 1.0.0であり、商用利用を制限しています。',
    quickAnswerTop: {
      ja: {
        question: 'LLM Hubはオープンソースですか。完全にオフラインで動きますか?',
        answer:
          '一般的な意味でのオープンソースではなく、ソース公開型です。プロジェクトは自らをオープンソースと説明していますが、LICENSEファイルは商用利用を制限する非商用のPolyFormライセンスです。掲載情報によれば、モデルをダウンロードしたあとはローカル推論がオフラインで動作し、Web検索とリモートMCPサーバーはオプションのオンライン機能です。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)と[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820)でインストール無料。App StoreにはPremium Lifetimeの購入($9.99)が表示され、Playの文面には一部の機能にPremiumが必要とあるだけ。',
          'GemmaやLlamaなどのモデルによるローカルチャット、GGUF・LiteRT・MNN形式のファイルのインポート、Hugging Faceからのダウンロード。',
          'チャット以外の機能:MCPとデバイスツールを使えるエージェント、画像・音楽(iOSでは動画も)の生成、翻訳、Whisperによる文字起こし。',
          '2026年10月3日の確認時点:Androidビルド4.4.2とiOS 1.4.0、Google Playで10K+ダウンロード、GitHubのスター602件。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'LLM Hubとは?', anchor: 'what-is-llm-hub' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: 'モデルと形式', anchor: 'models-supported' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'AndroidとiPhoneの違い', anchor: 'platform-differences' },
      { label: '料金とライセンス', anchor: 'pricing-license' },
      { label: 'プライバシーとオンライン機能', anchor: 'privacy' },
      { label: 'トレードオフ:利点と制約', anchor: 'tradeoffs' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替アプリ', anchor: 'vs-alternatives' },
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
            text: 'LLM Hubは、ローカルの言語モデルを動かし、MCP対応のエージェント、画像・音楽の生成、翻訳、文字起こしを加えた、インストール無料のAndroid・iPhoneアプリで、ソース公開型の非商用PolyFormライセンスの下で提供され、有料のPremiumプランがある。',
          },
          {
            type: 'plain-terms',
            text: '1つのアプリで、チャット、ツールを使えるアシスタント、画像や音楽の作成、翻訳、音声のテキスト化といった多くのオンデバイスAIの作業をこなそうとするもので、ソースコードは読めますが、ライセンス上、他者が商用利用することはできません。',
          },
        ],
        items: [
          '開発者:Google Playでは「timmy boy」、App StoreではYuan Qianと表記され、GitHubアカウントは[timmyy123](https://github.com/timmyy123)。LICENSEとPlayの掲載情報に同じ連絡先メールアドレスがあり、Google Playにはオーストラリアの住所が表示されている。',
          '料金:インストールは無料。App Storeには「LLM Hub Premium Lifetime」が$9.99で表示され、Google Playには一部の機能にPremiumが必要と記載されている。',
          'ライセンス:LICENSEファイルの見出しはPolyForm Noncommercial License 1.0.0で、他者によるアプリストアでの配布を含む商用利用を制限している。それでもプロジェクトは自らをオープンソースと説明している。',
          '機能の範囲:RAGメモリとオプションのWeb検索付きチャット、MCPとTermux(Android)を使えるエージェント、画像・音楽・動画の生成、アップスケーリング、翻訳、Whisperによる文字起こし、詐欺検出、音声チャット。',
          '2026年10月3日の確認時点のストアとリポジトリの指標:Android 4.4.2、iOS 1.4.0、Google Playで10K+ダウンロード(335件のレビューで評価3.0)、GitHubのスター602件。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月3日に確認したGoogle PlayとApp Storeの掲載情報、および公開GitHubリポジトリ(README、LICENSE、ビルドファイル)に基づいています。PromptQuorumはアプリのテストやベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-hub',
        title: 'LLM Hubとは?',
        content: [
          '**LLM Hubは、ローカルのチャットモデルと、端末上で動くその他のAIツール群をまとめたモバイルアプリです。** [README](https://github.com/timmyy123/LLM-Hub)によれば、このスイートにはチャット、AIエージェント、ペルソナ設計(creAItor)、Vibe Coder、文章作成支援、画像生成、音楽生成、画像のアップスケーリング、iOSでの動画生成、翻訳、文字起こし、詐欺検出、ハンズフリーの音声チャットが含まれます。',
          'プラットフォームごとに異なるランタイムが使われています。READMEには、AndroidではMediaPipe、LiteRT、GGUF向けのQualcomm製GenieX SDK、iOSではllama.cppを用いたRunAnywhere SDKが挙げられています。開発者はCPU、GPU、NPUのアクセラレーションに最適化していると述べているため、速度や動作する機能はスマートフォンとチップセットに左右され、これはPlayの説明にも記されています。',
        ],
        note: 'MCP(Model Context Protocol)は、AIアプリが外部のツールサーバーに接続するための標準的な方法です。READMEによれば、LLM HubではMCPツールの呼び出しごとにユーザーの承認が必要です。',
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**LLM Hubは両方のモバイルストアとソースコードとして配布されており、以下のリンクはREADMEに記載されているものです。**',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)',
          },
          {
            'プラットフォーム': 'iPhone / iPad',
            '入手先': '[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820)(iOS・iPadOS 17.5以降)',
          },
          {
            'プラットフォーム': 'Mac / Vision',
            '入手先': '同じApp Store掲載(Apple M1以降のMac、visionOS 1.2以降)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHub](https://github.com/timmyy123/LLM-Hub)(PolyForm Noncommercial)',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[llm-hub.app](https://www.llm-hub.app)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[LLM Hubのプライバシーポリシー](https://www.llm-hub.app/privacy)',
          },
        ],
        note: 'このページは、[Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)にある本アプリの項目の補足資料です。2026年10月3日に確認したバージョン:Android 4.4.2 / iOS 1.4.0(Androidはリポジトリのビルドファイルによる。読み取れたPlayの文面にはバージョンが示されていないため。iOSはApp Storeによる)。READMEによれば、ネイティブのWindowsおよびmacOSアプリは計画中で、未リリースです。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**READMEのクイックスタートは3つの手順です。PromptQuorumはこれらを実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'Google PlayまたはApp StoreからLLM Hubをダウンロードするか、READMEに従ってソースからビルドします。Playの掲載情報によれば、アカウントは不要です。',
          },
          {
            title: 'モデルをダウンロードまたはインポートする',
            whyItMatters: '設定からモデルのダウンロードを開き、モデルをダウンロードするかインポートします。READMEには、.task、.litertlm、qnn、.mnn、.ggufのファイルと、Hugging Faceからの直接ダウンロードが挙げられています。',
          },
          {
            title: 'モデルを選んで始める',
            whyItMatters: 'モデルを選んでチャットを始めるか、画像生成、翻訳、文字起こしなど他のツールを開きます。',
          },
        ],
        note: 'Playの説明によれば、モデルのダウンロードと、Web検索やリモートMCPサーバーといったオプションのオンライン機能にはインターネット接続が必要です。',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'モデルと形式',
        itemHeadings: true,
        columns: ['分野', '情報源で挙げられているもの', '備考'],
        rows: [
          {
            '分野': 'チャットモデル',
            '情報源で挙げられているもの': 'GemmaとLlama(Play)、iPhoneではGemma 4(READMEのデモ)',
            '備考': '他のファミリーもインポートまたはダウンロード可能',
          },
          {
            '分野': 'インポート形式',
            '情報源で挙げられているもの': '.task、.litertlm、qnn、.mnn、.gguf',
            '備考': 'READMEによる。AndroidではGGUFはGenieX経由で動作',
          },
          {
            '分野': '画像',
            '情報源で挙げられているもの': 'Stable Diffusion 1.5、RealESRGANとUltraSharpのアップスケーラー',
            '備考': '最大4倍のアップスケーリング、NPUアクセラレーションの記載あり',
          },
          {
            '分野': '音声',
            '情報源で挙げられているもの': 'Whisper(文字起こし)、AndroidではKokoro TTS',
            '備考': '音楽:AndroidはSoundGen、iOSはMagenta Realtime 2',
          },
          {
            '分野': '動画',
            '情報源で挙げられているもの': 'Stable Video Diffusion',
            '備考': 'READMEではiOSのみに記載',
          },
        ],
        note: 'この表の情報源はアプリ内のカタログではなくREADMEであり、利用できるモデルはアプリのバージョンごとに変わります。モデルごとのハードウェア要件は記載されていませんでした。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべてPlayの説明またはREADMEに基づくもので、独自にテストしたものはありません。**',
        ],
        items: [
          '**チャット。** RAGメモリ、画像入力、オプションのWeb検索、ローカルのテキスト読み上げによる返答を備えた、複数ターンの会話。',
          '**AIエージェントとMCP。** 関数呼び出し、地図、デバイスツールを備えた端末内のエージェント。互換性のあるMCPサーバーに接続でき、ツールの呼び出しごとに承認が必要。',
          '**Termuxコマンド(Android)。** エージェントがTermux向けのシェルコマンドを下書きし、実行前に内容を確認・編集でき、エラーはモデルに戻されて修正案が提案される。',
          '**クリエイト。** オフラインの画像生成、ローカルの音楽・効果音の生成、画像のアップスケーリング、creAItorのペルソナ、生成したHTMLとJavaScriptをプレビューするVibe Coder。',
          '**言語と音声。** 画像内の文字(OCR)や音声を含む50以上の言語への翻訳、文章作成支援、Whisperによる文字起こし、VibeVoiceによる音声チャット、不審なメッセージ向けの詐欺検出。',
        ],
      },
      platformDifferences: {
        id: 'platform-differences',
        title: 'AndroidとiPhoneの違い',
        itemHeadings: true,
        columns: ['機能', 'Android', 'iPhone'],
        rows: [
          {
            '機能': 'ランタイム',
            'Android': 'MediaPipe、LiteRT、GenieX(GGUF)',
            'iPhone': 'RunAnywhere SDK、llama.cpp',
          },
          {
            '機能': '音楽',
            'Android': 'SoundGen(LiteRT)',
            'iPhone': 'Magenta Realtime 2(MLX)',
          },
          {
            '機能': '動画',
            'Android': '記載なし',
            'iPhone': 'Stable Video Diffusion',
          },
          {
            '機能': 'Termuxコマンド',
            'Android': '対応',
            'iPhone': '該当なし',
          },
        ],
        note: 'バージョンも異なります。2026年10月3日時点でAndroidは4.4.2、iOSは1.4.0で、機能が両プラットフォームに同時に届くとは限りません。',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: '料金とライセンス',
        content: [
          '**アプリのインストールは無料で、アプリ内課金があります。** App Storeには「LLM Hub Premium Lifetime」が$9.99で表示されています(オーストラリアのストア、2026年10月3日確認)。Google Playの掲載情報にはアプリ内課金の表示と、一部の機能にPremiumが必要との記載がありますが、価格や何が制限されるのかは示されていません。READMEの開発者向けセットアップの注記には、広告をスキップしてローカルでプレミアムを解除するフラグが記されており、無料のAndroidビルドには広告が表示される可能性を示唆していますが、読み取れたPlayの文面にはその記載がありません。',
          'ライセンスについて:READMEとPlayの説明はプロジェクトをオープンソースと呼んでいますが、リポジトリのLICENSEファイルの見出しはPolyForm Noncommercial License 1.0.0であり、その条項は、アプリストアでの配布、販売、広告やアプリ内課金による収益化を商用目的に含むと定めています。GitHubはこのライセンスを「Other」と表示しています。平たく言えば、読んで、改変して、非商用で使えるソース公開型のコードであり、寛容なオープンソースライセンスではありません。これは法的助言ではないため、コードを再利用する前にLICENSEファイルをお読みください。',
        ],
        items: [
          '**App Store:** 無料。Premium Lifetimeは$9.99のアプリ内課金。',
          '**Google Play:** 無料。アプリ内課金あり。Premiumの機能は不明。',
          '**ソースコード:** LICENSEファイルによればPolyForm Noncommercial 1.0.0。開発者自身によるストアでのリリースが商用配布にあたる。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとオンライン機能',
        content: [
          '**両方のストアに、データを収集しないという申告があります。** Playのデータセーフティのセクションには「収集するデータなし」「第三者と共有されるデータなし」とあり、App Storeのプライバシーラベルには、開発元がデータを一切収集しないと記載されています。READMEは「データ収集ゼロ」「アカウントなし、トラッキングなし」と付け加えています。',
          'これらの主張はローカル推論に当てはまるものです。Playの説明には、モデルのダウンロードと、Web検索やリモートMCPサーバーといったオプションのオンライン機能にインターネット接続が必要と記されているため、それらの機能を使うチャットは、端末の外にリクエストを送ります。これらは開発者による申告であり、監査の結果ではありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ソースコードは公開されているため、アプリをビルドすれば主張を確認できますが、PromptQuorumはコードもネットワーク通信も監査していません。機密データを扱う方は、Web検索とリモートMCPサーバーをオフにした場合とオンにした場合の動作をご自身で確認してください。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'トレードオフ:利点と制約',
        columns: ['利点', '実際の使用での意味', '制約・注意点'],
        rows: [
          {
            '利点': 'オールインワンのツール群',
            '実際の使用での意味': 'チャット、エージェント、画像、音楽、翻訳、文字起こしが1つのアプリにある。',
            '制約・注意点': '機能が広い分、保守すべきものも増える。情報源には実機での品質評価がない。',
          },
          {
            '利点': 'MCP対応のエージェント',
            '実際の使用での意味': 'エージェントがデバイスツールや接続したMCPサーバーを、呼び出しごとの承認付きで使える。',
            '制約・注意点': 'リモートMCPサーバーとWeb検索はオンラインになる。',
          },
          {
            '利点': '多くのインポート形式',
            '実際の使用での意味': 'GGUF、LiteRT、MNNのファイルをインポートでき、Hugging Faceからのダウンロードもできる。',
            '制約・注意点': 'どのスマートフォンでどの形式が動くかは、ランタイムとチップセットに左右される。',
          },
          {
            '利点': 'ソースコードが読める',
            '実際の使用での意味': 'コードを読んでビルドでき、アプリのインストールは無料。',
            '制約・注意点': 'PolyForm Noncommercialライセンスはオープンソースライセンスではなく、Premiumは有料。',
          },
          {
            '利点': '両方のプラットフォーム',
            '実際の使用での意味': 'AndroidとiPhoneのバージョンがあり、iPadとApple siliconのMacにも対応する。',
            '制約・注意点': '機能はプラットフォームごとに異なり、2026年10月3日時点のPlayの評価は335件のレビューで3.0だった。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**多くのAIの作業を1つのオンデバイスアプリで済ませたい人。** チャット、翻訳、文字起こし、画像・音楽の生成が1回のインストールにまとまっている。',
          '**Termuxコマンドを下書きしてくれるエージェントを求めるAndroidユーザー。** 実行前に編集できる流れがREADMEに記載されている。',
          '**読めるソースを求める開発好きの人。** コードは公開されているが、非商用ライセンスの条件が意図する用途に合う場合に限る。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での性能。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、出力品質、安定性は評価していない。',
          '**ハードウェア要件。** 読み取れた情報源には、最小RAM、Androidバージョン、チップセットの一覧が見つからなかった。',
          '**Premiumで何が解除されるか。** App Storeには価格があるが、読み取れたどちらのストアの文面にも制限される機能の一覧はなく、Playの価格は表示されていなかった。',
          '**無料ビルドに広告が表示されるか。** READMEのセットアップ注記に間接的な言及があるだけ。',
          '**製品ウェブサイト。** [llm-hub.app](https://www.llm-hub.app)のサイトはJavaScriptがないと読み込めず、内容を読み取れなかった。ここでの事実はストアとリポジトリに基づく。',
          '**名前の似たリポジトリ。** 検索結果には、ほぼ同じ名前の他のGitHubリポジトリが表示される。本レビューが対象とするのは、アプリのREADMEとライセンス保有者のメールアドレスが指す[timmyy123/LLM-Hub](https://github.com/timmyy123/LLM-Hub)だけである。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '料金/ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': '独自のモデルライブラリを持つ、オープンソースの端末内チャットクライアント',
          },
          {
            'アプリ': '[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)',
            'プラットフォーム': 'iOS、Android',
            '料金/ライセンス': '無料 / Apache 2.0',
            '主な違い': 'GoogleのAI Edgeチームによるオープンソースの端末内アプリ',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': '端末内のドキュメントQ&Aを備えた、オープンソースのオフラインチャット',
          },
          {
            'アプリ': '[Layla](/ja/power-local-llm/layla-review)',
            'プラットフォーム': 'Android、iOS',
            '料金/ライセンス': '有料 / クローズドソース',
            '主な違い': 'コンパニオンとロールプレイが中心で、オプションのクラウドモードがある',
          },
        ],
        note: '競合の詳細は頻繁に変わります。各アプリの現在の料金、ライセンス、対応プラットフォームは、それぞれの掲載情報で確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'LLM Hubは無料ですか?',
            a: '両方のストアでインストールは無料で、アプリ内課金があります。App StoreにはPremium Lifetimeの購入が$9.99で表示され、Google Playには価格を示さずに、一部の機能にPremiumが必要と記載されています。',
          },
          {
            q: 'LLM Hubはオープンソースですか?',
            a: '一般的な意味ではそうではありません。プロジェクトは自らをオープンソースと説明していますが、LICENSEファイルの見出しはPolyForm Noncommercial License 1.0.0で、商用利用を制限しています。コードは読めるため、ソース公開型と表現するほうが適切です。',
          },
          {
            q: 'LLM Hubを作っているのは誰ですか?',
            a: '個人の開発者です。Google Playでは「timmy boy」(開発者名はYuan Qian、オーストラリアの住所)、App StoreではYuan Qianと表記され、コードはGitHubアカウントtimmyy123にあり、ライセンスとPlayの掲載情報に同じ連絡先メールアドレスがあります。',
          },
          {
            q: 'オフラインで動きますか?',
            a: 'モデルをダウンロードしたあとは、ローカル推論が端末上で動作します。Playの説明によれば、モデルのダウンロード、Web検索、リモートMCPサーバーにはインターネットが必要です。',
          },
          {
            q: '対応しているプラットフォームは?',
            a: 'AndroidはGoogle Play、iPhone、iPad、Apple siliconのMac、Apple VisionはApp Store経由です。一部の機能は異なり、動画生成はiOS、TermuxコマンドはAndroidに記載されています。',
          },
          {
            q: 'MCP対応とは何ですか?',
            a: 'Playの説明とREADMEによれば、エージェントは互換性のあるModel Context Protocolサーバーに接続して外部ツールを使うことができ、各ツールの呼び出しは実行前に承認が必要です。',
          },
          {
            q: 'どのモデルを使えますか?',
            a: 'Google PlayにはGemmaとLlamaが挙げられています。READMEによれば、Hugging Faceからモデルをダウンロードするか、.task、.litertlm、qnn、.mnn、.ggufのファイルをインポートできます。',
          },
          {
            q: 'どんなデータを収集しますか?',
            a: '両方のストアに、データを収集しないという申告があります。これらは開発者自身の説明であり、Web検索やリモートMCPサーバーといったオンライン機能は、端末の外にリクエストを送ります。',
          },
          {
            q: 'PocketPal AIとの違いは?',
            a: 'PocketPal AIは無料のMITライセンスの端末内チャットクライアントです。一方LLM Hubは、エージェント、メディア生成、有料のPremiumプランを備えた、より幅広いスイートで、非商用のソース公開型ライセンスの下にあります。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'LLM Hubは、書面上は、このモバイル向けローカルAIアプリのグループの中で最も幅広いアプリです。AndroidとiPhoneの両方で、チャット、MCP対応のエージェント、画像・音楽の生成、翻訳、文字起こしを備え、ソースを公開している開発者が作っています。その一方で、ライセンスはオープンソースではなくソース公開型の非商用であり、Premiumは有料でストアの文面にその範囲が明記されておらず、2026年10月3日時点のPlayの評価は335件のレビューで3.0、ハードウェア要件は公表されておらず、ここで述べた内容は実機でテストされていません。多くの作業を1つのオンデバイスアプリで済ませたく、これらの条件を受け入れられる読者に向いています。寛容なライセンスのチャットクライアントを求める読者は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private Mind](/ja/power-local-llm/private-mind-review)と比較できます。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのLLM Hub](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) — 説明、開発者の詳細、データセーフティのセクション、ダウンロード数、評価、最終更新日。2026年10月3日確認。',
          '[App StoreのLLM Hub](https://apps.apple.com/au/app/llm-hub/id6762511820) — 料金、Premium Lifetimeの購入、バージョン、プラットフォーム要件、プライバシーラベル。2026年10月3日確認。',
          '[GitHubのLLM-Hub](https://github.com/timmyy123/LLM-Hub) — README、LICENSEファイル、バージョン番号を確認したAndroidとiOSのビルドファイル。',
          '[LLM Hubのプライバシーポリシー](https://www.llm-hub.app/privacy) — 開発者のプライバシーポリシー。製品ウェブサイトからリンクされている。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料のMITライセンスの端末内チャットクライアント。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — ドキュメントQ&Aを備えた、無料のMITライセンスのオフラインチャットアプリ。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Googleのオープンソースの端末内AIアプリ。',
          '[Laylaレビュー](/ja/power-local-llm/layla-review) — 有料のコンパニオン型の端末内アプリ。',
          '[2026年版 Android向けおすすめローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けのより広い比較記事。',
          '[2026年版 iPhone向けおすすめローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより広い比較記事。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-hub-review-hero-pt.webp',
    title: 'LLM Hub: Análise da Suíte de IA no Dispositivo para Android e iPhone',
    seoTitle: 'LLM Hub Análise: IA no Dispositivo para Android e iOS',
    intro:
      'O LLM Hub é um app para celular, publicado por um desenvolvedor individual, que reúne um chat com modelo de linguagem local, um agente de IA capaz de usar servidores MCP, geração de imagens e de música, tradução, transcrição com Whisper e um "Vibe Coder" que mostra uma prévia do HTML gerado. Está disponível no [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) e na [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820), com instalação gratuita e uma camada Premium paga. O projeto se descreve como open source, mas o arquivo LICENSE do repositório é uma licença PolyForm não comercial, o que torna o código disponível para leitura (source-available) e não open source no sentido usual. Esta análise se baseia nas fichas das lojas e no [repositório público do GitHub](https://github.com/timmyy123/LLM-Hub), consultados em 3 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do LLM Hub: app de IA no dispositivo para Android e iPhone com chat, agente MCP, imagens e música. Preço, licença PolyForm, privacidade e limites.',
    twitterDescription:
      'Análise do LLM Hub: um app para Android e iPhone com chat local, agente MCP, geração de imagens e música, tradução e transcrição — com licença PolyForm não comercial e uma camada Premium paga.',
    audience:
      'Usuários de Android e iPhone que avaliam um app de IA completo no dispositivo e precisam saber exatamente o que roda localmente, o que significam a camada Premium e a licença e o que as fontes não confirmam.',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do LLM Hub',
    targetKeywords: [
      'llm hub app análise',
      'llm hub assistente de ia local',
      'llm hub android ios',
      'app de ia no dispositivo geração de imagens e música',
      'app de llm local com agente mcp android',
      'llm hub licença polyform não comercial',
      'llm hub vs pocketpal ai',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Stable Diffusion 1.5', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad', 'Apple M1', 'Qualcomm NPU'],
    leadAnswerBlock:
      '**O LLM Hub (versão 4.4.2 para Android e 1.4.0 para iOS em 3 de outubro de 2026) é um app para celular de instalação gratuita que roda modelos de linguagem locais e acrescenta um agente compatível com MCP, geração de imagens e de música, tradução, transcrição com Whisper e chat por voz, com uma camada Premium paga.** Segundo suas fichas, as conversas ficam no dispositivo durante a inferência local, e a internet só é necessária para baixar modelos e para recursos opcionais como a busca na web e servidores MCP remotos. O README e o Google Play o chamam de open source, mas o arquivo LICENSE do repositório tem o título PolyForm Noncommercial License 1.0.0, que restringe o uso comercial.',
    quickAnswerTop: {
      pt: {
        question: 'O LLM Hub é open source e roda totalmente offline?',
        answer:
          'Ele é source-available (código disponível para leitura) e não open source no sentido usual: o projeto se descreve como open source, mas o arquivo LICENSE é uma licença PolyForm Noncommercial que restringe o uso comercial. Segundo as fichas, a inferência local roda offline depois que os modelos são baixados; a busca na web e os servidores MCP remotos são recursos online opcionais.',
        bullets: [
          'Instalação gratuita no [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) e na [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820); a App Store lista uma compra Premium Lifetime de $9.99, enquanto o texto do Play só diz que alguns recursos exigem o Premium.',
          'Chat local com modelos como Gemma e Llama, arquivos importáveis nos formatos GGUF, LiteRT e MNN e downloads do Hugging Face.',
          'Extras além do chat: um agente com MCP e ferramentas do dispositivo, geração de imagens, de música e (no iOS) de vídeo, tradução e transcrição com Whisper.',
          'Conforme consultado em 3 de outubro de 2026: build 4.4.2 para Android e 1.4.0 para iOS, mais de 10 mil downloads no Play, 602 estrelas no GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o LLM Hub?', anchor: 'what-is-llm-hub' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Modelos e formatos', anchor: 'models-supported' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Diferenças entre Android e iPhone', anchor: 'platform-differences' },
      { label: 'Preço e licença', anchor: 'pricing-license' },
      { label: 'Privacidade e recursos online', anchor: 'privacy' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'Para quem é indicado', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
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
            text: 'O LLM Hub é um app para Android e iPhone de instalação gratuita que roda modelos de linguagem locais e acrescenta um agente compatível com MCP, geração de imagens e de música, tradução e transcrição, sob uma licença PolyForm não comercial com código disponível para leitura e uma camada Premium paga.',
          },
          {
            type: 'plain-terms',
            text: 'É um único app que tenta cumprir muitas tarefas de IA no dispositivo — conversar, um assistente que usa ferramentas, criar imagens e música, traduzir e transformar fala em texto — e você pode ler o código-fonte, mas a licença não permite que outros o usem comercialmente.',
          },
        ],
        items: [
          'Desenvolvedor: listado como "timmy boy" no Google Play e como Yuan Qian na App Store, com a conta [timmyy123](https://github.com/timmyy123) no GitHub e o mesmo e-mail de contato na LICENSE e na ficha do Play; o Google Play exibe um endereço na Austrália.',
          'Preço: instalação gratuita; a App Store lista o "LLM Hub Premium Lifetime" a $9.99, e o Google Play informa que alguns recursos exigem o Premium.',
          'Licença: arquivo LICENSE com o título PolyForm Noncommercial License 1.0.0, que restringe o uso comercial, inclusive a distribuição em lojas de apps por terceiros; ainda assim, o projeto se descreve como open source.',
          'Escopo: chat com memória RAG e busca na web opcional, um agente com MCP e Termux (Android), geração de imagens, de música e de vídeo, ampliação de imagens, tradução, transcrição com Whisper, detecção de golpes e chat por voz.',
          'Sinais das lojas e do repositório conforme consultados em 3 de outubro de 2026: Android 4.4.2, iOS 1.4.0, mais de 10 mil downloads no Play com nota 3,0 em 335 avaliações, 602 estrelas no GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia nas fichas do Google Play e da App Store e no repositório público do GitHub (README, LICENSE, arquivos de build), consultados em 3 de outubro de 2026. A PromptQuorum não testou nem fez benchmarks do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-hub',
        title: 'O que é o LLM Hub?',
        content: [
          '**O LLM Hub é um app para celular que reúne um modelo de chat local e um conjunto de outras ferramentas de IA no dispositivo.** Segundo o [README](https://github.com/timmyy123/LLM-Hub), a suíte abrange chat, um agente de IA, criação de personas (creAItor), um Vibe Coder, auxílio à escrita, geração de imagens, geração de música, ampliação de imagens, geração de vídeo no iOS, tradução, transcrição, um detector de golpes e chat por voz com as mãos livres.',
          'Em cada plataforma ele é movido por runtimes diferentes: o README lista MediaPipe, LiteRT e o SDK GenieX da Qualcomm para GGUF no Android, e o SDK RunAnywhere com llama.cpp no iOS. O desenvolvedor afirma que o app é otimizado para aceleração por CPU, GPU e NPU, então a velocidade e os recursos que funcionam dependem do celular e do chipset, como a descrição do Play também observa.',
        ],
        note: 'MCP (Model Context Protocol) é uma forma padronizada de um app de IA se conectar a servidores de ferramentas externos; no LLM Hub, toda chamada de ferramenta MCP exige aprovação do usuário, segundo o README.',
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O LLM Hub é distribuído pelas duas lojas de apps e como código-fonte; os links abaixo são os que o README lista.**',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Onde obter': '[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) (iOS e iPadOS 17.5 ou posterior)',
          },
          {
            'Plataforma': 'Mac / Vision',
            'Onde obter': 'Mesma ficha da App Store (Mac com Apple M1+, visionOS 1.2+)',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': '[GitHub](https://github.com/timmyy123/LLM-Hub) (PolyForm Noncommercial)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[llm-hub.app](https://www.llm-hub.app)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Política de privacidade do LLM Hub](https://www.llm-hub.app/privacy)',
          },
        ],
        note: 'Esta página é material complementar à entrada do app no [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versões conforme verificadas em 3 de outubro de 2026: Android 4.4.2 / iOS 1.4.0 (Android a partir do arquivo de build do repositório, já que o texto do Play lido não mostra versão; iOS a partir da App Store). O README diz que apps nativos para Windows e macOS estão planejados, mas não foram lançados.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**O guia de início rápido do README tem três passos; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Baixe o LLM Hub no Google Play ou na App Store, ou compile-o a partir do código-fonte seguindo o README; segundo a ficha do Play, não é necessária conta.',
          },
          {
            title: 'Baixar ou importar um modelo',
            whyItMatters: 'Abra Settings, depois Download Models, e baixe um modelo ou importe um; o README lista arquivos .task, .litertlm, qnn, .mnn e .gguf e downloads diretos do Hugging Face.',
          },
          {
            title: 'Escolher um modelo e começar',
            whyItMatters: 'Selecione o modelo e comece a conversar, ou abra uma das outras ferramentas, como o gerador de imagens, o tradutor ou o transcritor.',
          },
        ],
        note: 'É preciso acesso à internet para baixar modelos e para recursos online opcionais, como a busca na web e servidores MCP remotos, segundo a descrição do Play.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Modelos e formatos',
        itemHeadings: true,
        columns: ['Área', 'Citado nas fontes', 'Observações'],
        rows: [
          {
            'Área': 'Modelos de chat',
            'Citado nas fontes': 'Gemma e Llama (Play); Gemma 4 no iPhone (demo do README)',
            'Observações': 'Outras famílias podem ser importadas ou baixadas',
          },
          {
            'Área': 'Formatos de importação',
            'Citado nas fontes': '.task, .litertlm, qnn, .mnn, .gguf',
            'Observações': 'Segundo o README; o GGUF roda pelo GenieX no Android',
          },
          {
            'Área': 'Imagens',
            'Citado nas fontes': 'Stable Diffusion 1.5; ampliadores RealESRGAN e UltraSharp',
            'Observações': 'Ampliação de até 4x, com aceleração por NPU citada',
          },
          {
            'Área': 'Áudio',
            'Citado nas fontes': 'Whisper (transcrição); Kokoro TTS no Android',
            'Observações': 'Música: SoundGen no Android, Magenta Realtime 2 no iOS',
          },
          {
            'Área': 'Vídeo',
            'Citado nas fontes': 'Stable Video Diffusion',
            'Observações': 'Listado só para iOS no README',
          },
        ],
        note: 'A fonte desta tabela é o README, e não um catálogo dentro do app, e a disponibilidade de modelos muda a cada versão do app. Os requisitos de hardware por modelo não foram informados.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm da descrição do Play ou do README; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Chat.** Conversas com várias interações, com memória RAG, entrada de imagens, busca na web opcional e respostas faladas por síntese de voz local.',
          '**Agente de IA e MCP.** Um agente no dispositivo com chamada de funções, mapas e ferramentas do dispositivo; conecta servidores MCP compatíveis, com aprovação exigida para cada chamada de ferramenta.',
          '**Comandos do Termux (Android).** O agente redige comandos de shell para o Termux que você pode inspecionar e editar antes de executá-los, e devolve os erros ao modelo para propor correções.',
          '**Criação.** Geração de imagens offline, geração local de música e de efeitos sonoros, ampliação de imagens, personas do creAItor e um Vibe Coder que mostra uma prévia do HTML e do JavaScript gerados.',
          '**Idiomas e voz.** Tradução em mais de 50 idiomas, inclusive de texto em imagens (OCR) e de áudio, um auxílio à escrita, transcrição com Whisper, chat por voz com o VibeVoice e um detector de golpes para mensagens suspeitas.',
        ],
      },
      platformDifferences: {
        id: 'platform-differences',
        title: 'Diferenças entre Android e iPhone',
        itemHeadings: true,
        columns: ['Recurso', 'Android', 'iPhone'],
        rows: [
          {
            'Recurso': 'Runtime',
            'Android': 'MediaPipe, LiteRT, GenieX (GGUF)',
            'iPhone': 'SDK RunAnywhere, llama.cpp',
          },
          {
            'Recurso': 'Música',
            'Android': 'SoundGen (LiteRT)',
            'iPhone': 'Magenta Realtime 2 (MLX)',
          },
          {
            'Recurso': 'Vídeo',
            'Android': 'Não listado',
            'iPhone': 'Stable Video Diffusion',
          },
          {
            'Recurso': 'Comandos do Termux',
            'Android': 'Sim',
            'iPhone': 'Não se aplica',
          },
        ],
        note: 'As versões também diferem: Android 4.4.2 e iOS 1.4.0 em 3 de outubro de 2026, e os recursos podem não chegar às duas plataformas ao mesmo tempo.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'Preço e licença',
        content: [
          '**O app tem instalação gratuita, com compras dentro do app.** A App Store lista o "LLM Hub Premium Lifetime" a $9.99 (loja australiana, consultada em 3 de outubro de 2026); a ficha do Google Play mostra compras dentro do app e diz que alguns recursos exigem o Premium, sem citar um preço nem o que fica bloqueado. A nota de configuração para desenvolvedores do README descreve uma flag para pular anúncios e liberar o premium localmente, o que sugere que a build gratuita para Android pode exibir anúncios; o texto do Play lido não afirma isso.',
          'Sobre a licença: o README e a descrição do Play chamam o projeto de open source, mas o arquivo LICENSE do repositório tem o título PolyForm Noncommercial License 1.0.0, e seus termos definem como finalidades comerciais, entre outras, distribuir o software em uma loja de apps, cobrar por ele e monetizá-lo com anúncios ou compras dentro do app. O GitHub informa a licença como "Other". Em termos simples, trata-se de código com fonte disponível que você pode ler, modificar e usar de forma não comercial, e não de uma licença open source permissiva; isto não é aconselhamento jurídico, então leia o arquivo LICENSE antes de reutilizar qualquer código.',
        ],
        items: [
          '**App Store:** gratuito; compra dentro do app Premium Lifetime a $9.99.',
          '**Google Play:** gratuito; compras dentro do app; recursos Premium não especificados.',
          '**Código-fonte:** PolyForm Noncommercial 1.0.0 segundo o arquivo LICENSE; os lançamentos do próprio desenvolvedor nas lojas são a distribuição comercial.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e recursos online',
        content: [
          '**As duas lojas trazem declarações de nenhuma coleta de dados:** a seção Segurança dos dados do Play diz "No data collected" e "No data shared with third parties", e o rótulo de privacidade da App Store diz que o desenvolvedor não coleta nenhum dado. O README acrescenta "zero data collection" e "no accounts, no tracking".',
          'Essas afirmações valem para a inferência local. A descrição do Play informa que o acesso à internet é necessário para baixar modelos e para recursos online opcionais, como a busca na web e servidores MCP remotos, então uma conversa que usa esses recursos envia solicitações para fora do dispositivo. Essas são declarações do desenvolvedor, não resultados de auditoria.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O código-fonte é público, então as afirmações podem ser conferidas por quem compilar o app, mas a PromptQuorum não auditou o código nem o tráfego de rede. Quem lida com dados confidenciais deve verificar o comportamento com a busca na web e os servidores MCP remotos desligados e ligados.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'Na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Conjunto de ferramentas tudo-em-um',
            'Na prática': 'Chat, agente, imagens, música, tradução e transcrição ficam em um só app.',
            'Limitação / ressalva': 'Mais recursos significam mais para manter; as fontes não trazem avaliação prática da qualidade.',
          },
          {
            'Benefício': 'Agente compatível com MCP',
            'Na prática': 'O agente pode usar ferramentas do dispositivo e servidores MCP conectados, com aprovação a cada chamada.',
            'Limitação / ressalva': 'Servidores MCP remotos e a busca na web ficam online.',
          },
          {
            'Benefício': 'Muitos formatos de importação',
            'Na prática': 'Arquivos GGUF, LiteRT e MNN podem ser importados, além de downloads do Hugging Face.',
            'Limitação / ressalva': 'Quais formatos funcionam em cada celular depende do runtime e do chipset.',
          },
          {
            'Benefício': 'Código-fonte legível',
            'Na prática': 'Você pode ler e compilar o código, e o app tem instalação gratuita.',
            'Limitação / ressalva': 'A licença PolyForm Noncommercial não é uma licença open source, e o Premium é pago.',
          },
          {
            'Benefício': 'Ambas as plataformas',
            'Na prática': 'Existem versões para Android e iPhone, além de iPad e Macs com chip Apple.',
            'Limitação / ressalva': 'Os recursos diferem por plataforma, e a nota no Play era 3,0 em 335 avaliações em 3 de outubro de 2026.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Quem quer um único app no dispositivo para muitas tarefas de IA.** Chat, tradução, transcrição e geração de imagens ou música estão em uma só instalação.',
          '**Usuários de Android que querem um agente que redija comandos do Termux.** O fluxo de editar antes de executar é descrito no README.',
          '**Entusiastas que querem código-fonte legível.** O código é público, desde que os termos da licença não comercial sirvam ao uso pretendido.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria, qualidade das respostas e estabilidade não foram avaliados.',
          '**Requisitos de hardware.** Nenhuma lista de RAM mínima, versão do Android ou chipset foi encontrada nas fontes lidas.',
          '**O que o Premium libera.** A App Store informa um preço; nenhum dos textos das lojas lidos lista os recursos bloqueados, e o preço no Play não foi exibido.',
          '**Se a build gratuita exibe anúncios.** Há apenas uma menção indireta nas notas de configuração do README.',
          '**Site do produto.** O site [llm-hub.app](https://www.llm-hub.app) só carrega com JavaScript, então seu conteúdo não pôde ser lido; os fatos aqui vêm das lojas e do repositório.',
          '**Repositórios com nomes parecidos.** Os resultados de busca mostram outros repositórios do GitHub com nomes quase idênticos; esta análise cobre apenas o [timmyy123/LLM-Hub](https://github.com/timmyy123/LLM-Hub), para o qual apontam o README do app e o e-mail do titular da licença.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Principal diferença'],
        rows: [
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Gratuito / MIT',
            'Principal diferença': 'Cliente de chat open source no dispositivo, com biblioteca de modelos própria',
          },
          {
            'App': '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Gratuito / Apache 2.0',
            'Principal diferença': 'App open source no dispositivo da equipe de AI Edge do Google',
          },
          {
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Gratuito / MIT',
            'Principal diferença': 'Chat offline open source com perguntas sobre documentos no dispositivo',
          },
          {
            'App': '[Layla](/pt/power-local-llm/layla-review)',
            'Plataformas': 'Android, iOS',
            'Preço / licença': 'Pago / código fechado',
            'Principal diferença': 'Foco em companhia e roleplay, com modo na nuvem opcional',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais de cada app na própria ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O LLM Hub é gratuito?',
            a: 'A instalação é gratuita nas duas lojas, com compras dentro do app. A App Store lista uma compra Premium Lifetime a $9.99; o Google Play diz que alguns recursos exigem o Premium, sem citar um preço.',
          },
          {
            q: 'O LLM Hub é open source?',
            a: 'Não no sentido usual. O projeto se descreve como open source, mas o arquivo LICENSE tem o título PolyForm Noncommercial License 1.0.0, que restringe o uso comercial. O código pode ser lido, então é mais correto descrevê-lo como source-available.',
          },
          {
            q: 'Quem faz o LLM Hub?',
            a: 'Um desenvolvedor individual: o Google Play lista "timmy boy" (nome de desenvolvedor Yuan Qian, com endereço na Austrália), a App Store lista Yuan Qian, e o código está na conta timmyy123 do GitHub, com o mesmo e-mail de contato na licença e na ficha do Play.',
          },
          {
            q: 'Ele funciona offline?',
            a: 'A inferência local roda no dispositivo depois que os modelos são baixados. Baixar modelos, a busca na web e os servidores MCP remotos precisam de internet, segundo a descrição do Play.',
          },
          {
            q: 'Quais plataformas ele suporta?',
            a: 'Android pelo Google Play, e iPhone, iPad, Macs com chip Apple e Apple Vision pela App Store. Alguns recursos diferem: a geração de vídeo é listada para iOS, e os comandos do Termux para Android.',
          },
          {
            q: 'Como funciona o suporte a MCP?',
            a: 'O agente pode se conectar a servidores compatíveis com o Model Context Protocol para usar ferramentas externas, e cada chamada de ferramenta precisa ser aprovada antes de ser executada, segundo a descrição do Play e o README.',
          },
          {
            q: 'Quais modelos posso usar?',
            a: 'Gemma e Llama são citados no Google Play. Você pode baixar modelos do Hugging Face ou importar arquivos .task, .litertlm, qnn, .mnn e .gguf, segundo o README.',
          },
          {
            q: 'Quais dados ele coleta?',
            a: 'As duas lojas trazem declarações de nenhum dado coletado. Essas são afirmações do próprio desenvolvedor, e recursos online como a busca na web e servidores MCP remotos enviam solicitações para fora do dispositivo.',
          },
          {
            q: 'Como ele se compara ao PocketPal AI?',
            a: 'O PocketPal AI é um cliente de chat gratuito no dispositivo com licença MIT, enquanto o LLM Hub é uma suíte mais ampla, com agente, geração de mídia e uma camada Premium paga, sob uma licença não comercial com código disponível para leitura.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'Em teoria, o LLM Hub é o app mais abrangente deste grupo de apps móveis de IA local: chat, agente compatível com MCP, geração de imagens e de música, tradução e transcrição em Android e iPhone, de um desenvolvedor que publica o código-fonte. Em contrapartida, a licença é source-available e não comercial, e não open source; o Premium é pago e seu alcance não é detalhado no texto das lojas; a nota no Play era 3,0 em 335 avaliações em 3 de outubro de 2026; não há requisitos de hardware publicados; e nada aqui foi testado na prática. Ele serve a leitores que querem um único app no dispositivo para muitas tarefas e aceitam esses termos; quem prefere um cliente de chat com licença permissiva pode comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Private Mind](/pt/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[LLM Hub no Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) — descrição, dados do desenvolvedor, seção Segurança dos dados, número de downloads, nota e data da última atualização, consultados em 3 de outubro de 2026.',
          '[LLM Hub na App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) — preço, compra Premium Lifetime, versão, requisitos de plataforma e rótulo de privacidade, consultados em 3 de outubro de 2026.',
          '[LLM-Hub no GitHub](https://github.com/timmyy123/LLM-Hub) — README, arquivo LICENSE e os arquivos de build de Android e iOS para os números de versão.',
          '[Política de privacidade do LLM Hub](https://www.llm-hub.app/privacy) — a política de privacidade do desenvolvedor, com link a partir do site do produto.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito no dispositivo com licença MIT.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito com licença MIT e perguntas sobre documentos.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app de IA open source no dispositivo do Google.',
          '[Análise do Layla](/pt/power-local-llm/layla-review) — um app pago no dispositivo no estilo companhia.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-hub-review-hero-ar.webp',
    title: 'مراجعة LLM Hub: مجموعة ذكاء اصطناعي على الجهاز لأندرويد و iPhone',
    seoTitle: 'مراجعة LLM Hub: ذكاء اصطناعي على الجهاز لأندرويد و iOS',
    intro:
      'LLM Hub تطبيق للهاتف ينشره مطوّر فرد، ويجمع دردشة مع نموذج لغوي محلي ووكيل ذكاء اصطناعي يمكنه استخدام خوادم MCP، وتوليد الصور والموسيقى، والترجمة، والتفريغ الصوتي بواسطة Whisper، و"Vibe Coder" الذي يعاين صفحات HTML المولَّدة. وهو متاح على [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) و[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820)، مجاني التثبيت مع مستوى Premium مدفوع. ويصف المشروع نفسه بأنه مفتوح المصدر، لكن ملف LICENSE في مستودعه هو ترخيص PolyForm غير تجاري، ما يجعل الكود متاحاً مصدرياً (source-available) لا مفتوح المصدر بالمعنى المعتاد. تستند هذه المراجعة إلى صفحتي المتجرين و[مستودع GitHub](https://github.com/timmyy123/LLM-Hub) العام، جرى التحقق منها في 3 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عملياً.',
    metaDescription:
      'مراجعة LLM Hub: تطبيق ذكاء اصطناعي على الجهاز لأندرويد و iPhone بدردشة ووكيل MCP وتوليد صور وموسيقى. السعر وترخيص PolyForm والخصوصية والقيود.',
    twitterDescription:
      'مراجعة LLM Hub: تطبيق واحد لأندرويد و iPhone للدردشة المحلية ووكيل MCP وتوليد الصور والموسيقى والترجمة والتفريغ الصوتي — بترخيص PolyForm غير تجاري ومستوى Premium مدفوع.',
    audience:
      'مستخدمو أندرويد و iPhone الذين يفكرون في تطبيق ذكاء اصطناعي شامل يعمل على الجهاز، ويحتاجون إلى معرفة بدقة ما الذي يعمل محلياً، وماذا يعني مستوى Premium والترخيص، وما الذي لا تؤكده المصادر.',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة LLM Hub',
    targetKeywords: [
      'مراجعة تطبيق llm hub',
      'llm hub مساعد ذكاء اصطناعي محلي',
      'llm hub أندرويد iphone',
      'تطبيق ذكاء اصطناعي على الجهاز لتوليد الصور والموسيقى',
      'تطبيق نموذج لغوي محلي مع وكيل mcp لأندرويد',
      'llm hub ترخيص polyform غير تجاري',
      'llm hub مقابل pocketpal ai',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Stable Diffusion 1.5', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad', 'Apple M1', 'Qualcomm NPU'],
    leadAnswerBlock:
      '**LLM Hub (إصدار أندرويد 4.4.2 وإصدار iOS 1.4.0 اعتباراً من 3 أكتوبر 2026) تطبيق هاتف مجاني التثبيت يشغّل نماذج لغوية محلية ويضيف وكيلاً يدعم MCP، وتوليد الصور والموسيقى، والترجمة، والتفريغ الصوتي بواسطة Whisper، والدردشة الصوتية، مع مستوى Premium مدفوع.** تذكر صفحتاه أن المحادثات تبقى على الجهاز أثناء الاستدلال المحلي، وأن الإنترنت مطلوب فقط لتنزيل النماذج وللميزات الاختيارية مثل البحث على الويب وخوادم MCP البعيدة. ويصفه README وصفحة Google Play بأنه مفتوح المصدر، لكن ملف LICENSE في المستودع يحمل عنوان PolyForm Noncommercial License 1.0.0 الذي يقيّد الاستخدام التجاري.',
    quickAnswerTop: {
      ar: {
        question: 'هل LLM Hub مفتوح المصدر، وهل يعمل دون اتصال بالكامل؟',
        answer:
          'هو متاح مصدرياً (source-available) لا مفتوح المصدر بالمعنى المعتاد: فالمشروع يصف نفسه بأنه مفتوح المصدر، لكن ملف LICENSE هو ترخيص PolyForm غير تجاري يقيّد الاستخدام التجاري. وبحسب صفحتيه، يعمل الاستدلال المحلي دون اتصال بعد تنزيل النماذج؛ أما البحث على الويب وخوادم MCP البعيدة فميزتان اختياريتان تتطلبان الإنترنت.',
        bullets: [
          'مجاني التثبيت على [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) و[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820)؛ ويدرج App Store عملية شراء Premium Lifetime بسعر $9.99، بينما يكتفي نص Play بالقول إن بعض الميزات تتطلب Premium.',
          'دردشة محلية مع نماذج مثل Gemma و Llama، واستيراد ملفات بصيغ GGUF و LiteRT و MNN، والتنزيل من Hugging Face.',
          'إضافات تتجاوز الدردشة: وكيل مع MCP وأدوات الجهاز، وتوليد الصور والموسيقى (والفيديو على iOS)، والترجمة، والتفريغ الصوتي بواسطة Whisper.',
          'بحسب ما جرى التحقق منه في 3 أكتوبر 2026: إصدار أندرويد 4.4.2 و iOS 1.4.0، وأكثر من 10 آلاف تنزيل على Play، و602 نجمة على GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو LLM Hub؟', anchor: 'what-is-llm-hub' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'النماذج والصيغ', anchor: 'models-supported' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'الفروق بين أندرويد و iPhone', anchor: 'platform-differences' },
      { label: 'السعر والترخيص', anchor: 'pricing-license' },
      { label: 'الخصوصية والميزات عبر الإنترنت', anchor: 'privacy' },
      { label: 'المقايضات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
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
            text: 'LLM Hub تطبيق لأندرويد و iPhone مجاني التثبيت يشغّل نماذج لغوية محلية ويضيف وكيلاً يدعم MCP وتوليد الصور والموسيقى والترجمة والتفريغ الصوتي، بترخيص PolyForm غير تجاري متاح مصدرياً ومع مستوى Premium مدفوع.',
          },
          {
            type: 'plain-terms',
            text: 'هو تطبيق واحد يحاول أداء مهام ذكاء اصطناعي كثيرة على الجهاز — دردشة، ومساعد يستطيع استخدام الأدوات، وإنشاء الصور والموسيقى، والترجمة، وتحويل الكلام إلى نص — ويمكنك قراءة كوده المصدري، لكن الترخيص لا يسمح للآخرين باستخدامه تجارياً.',
          },
        ],
        items: [
          'المطوّر: مدرج باسم "timmy boy" على Google Play وباسم Yuan Qian على App Store، مع حساب GitHub [timmyy123](https://github.com/timmyy123) ونفس البريد الإلكتروني للتواصل في ملف LICENSE وفي صفحة Play؛ ويظهر عنوان أسترالي على Google Play.',
          'السعر: مجاني التثبيت؛ ويدرج App Store "LLM Hub Premium Lifetime" بسعر $9.99، وتذكر Google Play أن بعض الميزات تتطلب Premium.',
          'الترخيص: ملف LICENSE بعنوان PolyForm Noncommercial License 1.0.0، ويقيّد الاستخدام التجاري بما يشمل التوزيع على متاجر التطبيقات من قبل الآخرين؛ ومع ذلك يصف المشروع نفسه بأنه مفتوح المصدر.',
          'النطاق: دردشة مع ذاكرة RAM وبحث اختياري على الويب، ووكيل مع MCP و Termux (على أندرويد)، وتوليد الصور والموسيقى والفيديو، وتكبير الصور، والترجمة، والتفريغ الصوتي بواسطة Whisper، وكشف الاحتيال، والدردشة الصوتية.',
          'مؤشرات المتجر والمستودع بحسب ما جرى التحقق منه في 3 أكتوبر 2026: أندرويد 4.4.2 و iOS 1.4.0، وأكثر من 10 آلاف تنزيل على Play بتقييم 3.0 من 335 مراجعة، و602 نجمة على GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحتي Google Play و App Store وإلى مستودع GitHub العام (ملف README والترخيص وملفات البناء)، جرى التحقق منها في 3 أكتوبر 2026. لم تختبر PromptQuorum التطبيق ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-hub',
        title: 'ما هو LLM Hub؟',
        content: [
          '**LLM Hub تطبيق للهاتف يجمع نموذج دردشة محلياً مع مجموعة من أدوات الذكاء اصطناعي الأخرى على الجهاز.** وبحسب [README](https://github.com/timmyy123/LLM-Hub) الخاص به، تشمل المجموعة الدردشة، ووكيل ذكاء اصطناعي، وتصميم الشخصيات (creAItor)، و Vibe Coder، ومساعد كتابة، وتوليد الصور، وتوليد الموسيقى، وتكبير الصور، وتوليد الفيديو على iOS، والترجمة، والتفريغ الصوتي، وكاشف احتيال، ودردشة صوتية دون استخدام اليدين.',
          'تشغّله بيئات تشغيل مختلفة على كل منصة: يدرج README ‏MediaPipe و LiteRT وحزمة GenieX من Qualcomm لصيغة GGUF على أندرويد، وحزمة RunAnywhere مع llama.cpp على iOS. ويذكر المطوّر أنه محسَّن للتسريع عبر CPU و GPU و NPU، لذا تعتمد السرعة والميزات العاملة على الهاتف والشريحة، كما يشير وصف Play أيضاً.',
        ],
        note: 'MCP (Model Context Protocol) طريقة معيارية لتوصيل تطبيق ذكاء اصطناعي بخوادم أدوات خارجية؛ وفي LLM Hub يتطلب كل استدعاء لأداة MCP موافقة المستخدم، بحسب README.',
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُوزَّع LLM Hub عبر متجري الهواتف وكذلك ككود مصدري؛ والروابط أدناه هي التي يدرجها README.**',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'أندرويد',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)',
          },
          {
            'المنصة': 'iPhone / iPad',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) (iOS و iPadOS 17.5 أو أحدث)',
          },
          {
            'المنصة': 'Mac / Vision',
            'مكان الحصول عليه': 'صفحة App Store نفسها (Mac بمعالج Apple M1+، و visionOS 1.2+)',
          },
          {
            'المنصة': 'الكود المصدري',
            'مكان الحصول عليه': '[GitHub](https://github.com/timmyy123/LLM-Hub) (PolyForm Noncommercial)',
          },
          {
            'المنصة': 'الموقع الرسمي',
            'مكان الحصول عليه': '[llm-hub.app](https://www.llm-hub.app)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة خصوصية LLM Hub](https://www.llm-hub.app/privacy)',
          },
        ],
        note: 'هذه الصفحة مادة مرافقة لإدخال التطبيق في [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). الإصدارات بحسب ما جرى التحقق منه في 3 أكتوبر 2026: Android 4.4.2 / iOS 1.4.0 (إصدار أندرويد من ملف البناء في المستودع لأن نص Play الذي قُرئ لا يُظهر رقم إصدار؛ وإصدار iOS من App Store). ويذكر README أن تطبيقين أصليين لـ Windows و macOS مخطَّط لهما ولم يصدرا بعد.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**البدء السريع في README من ثلاث خطوات؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل LLM Hub من Google Play أو App Store، أو ابنِه من الكود المصدري باتباع README؛ ولا يلزم حساب بحسب صفحة Play.',
          },
          {
            title: 'نزّل نموذجاً أو استورده',
            whyItMatters: 'افتح الإعدادات ثم تنزيل النماذج (Download Models)، ونزّل نموذجاً أو استورد واحداً؛ ويدرج README ملفات .task و .litertlm و qnn و .mnn و .gguf والتنزيل المباشر من Hugging Face.',
          },
          {
            title: 'اختر نموذجاً وابدأ',
            whyItMatters: 'اختر النموذج وابدأ الدردشة، أو افتح إحدى الأدوات الأخرى مثل مولّد الصور أو المترجم أو أداة التفريغ الصوتي.',
          },
        ],
        note: 'الاتصال بالإنترنت مطلوب لتنزيل النماذج وللميزات الاختيارية عبر الإنترنت مثل البحث على الويب وخوادم MCP البعيدة، بحسب وصف Play.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'النماذج والصيغ',
        itemHeadings: true,
        columns: ['المجال', 'المذكور في المصادر', 'ملاحظات'],
        rows: [
          {
            'المجال': 'نماذج الدردشة',
            'المذكور في المصادر': 'Gemma و Llama (Play)؛ و Gemma 4 على iPhone (عرض README)',
            'ملاحظات': 'يمكن استيراد عائلات أخرى أو تنزيلها',
          },
          {
            'المجال': 'صيغ الاستيراد',
            'المذكور في المصادر': '.task و .litertlm و qnn و .mnn و .gguf',
            'ملاحظات': 'بحسب README؛ ويعمل GGUF عبر GenieX على أندرويد',
          },
          {
            'المجال': 'الصور',
            'المذكور في المصادر': 'Stable Diffusion 1.5؛ ومكبّرا RealESRGAN و UltraSharp',
            'ملاحظات': 'تكبير حتى 4x مع الإشارة إلى تسريع NPU',
          },
          {
            'المجال': 'الصوت',
            'المذكور في المصادر': 'Whisper (تفريغ صوتي)؛ و Kokoro TTS على أندرويد',
            'ملاحظات': 'الموسيقى: SoundGen على أندرويد و Magenta Realtime 2 على iOS',
          },
          {
            'المجال': 'الفيديو',
            'المذكور في المصادر': 'Stable Video Diffusion',
            'ملاحظات': 'مدرج لنظام iOS فقط في README',
          },
        ],
        note: 'مصدر هذا الجدول هو README لا كتالوج داخل التطبيق، وتتغير النماذج المتاحة مع كل إصدار من التطبيق. ولم تُذكر متطلبات العتاد لكل نموذج.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل عنصر أدناه مأخوذ من وصف Play أو README؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**الدردشة.** محادثات متعددة الأدوار مع ذاكرة RAG، وإدخال الصور، وبحث اختياري على الويب، وردود صوتية محلية بتحويل النص إلى كلام.',
          '**الوكيل و MCP.** وكيل على الجهاز مع استدعاء الدوال والخرائط وأدوات الجهاز؛ ويتصل بخوادم MCP المتوافقة، مع اشتراط الموافقة على كل استدعاء أداة.',
          '**أوامر Termux (أندرويد).** يصوغ الوكيل أوامر shell لـ Termux يمكنك فحصها وتعديلها قبل تشغيلها، ويعيد الأخطاء إلى النموذج ليقترح إصلاحات.',
          '**الإنشاء.** توليد صور دون اتصال، وتوليد موسيقى ومؤثرات صوتية محلياً، وتكبير الصور، وشخصيات creAItor، و Vibe Coder الذي يعاين HTML و JavaScript المولَّدين.',
          '**اللغة والصوت.** ترجمة بين أكثر من 50 لغة تشمل نص الصور (OCR) والصوت، ومساعد كتابة، وتفريغ صوتي بواسطة Whisper، ودردشة صوتية VibeVoice، وكاشف احتيال للرسائل المشبوهة.',
        ],
      },
      platformDifferences: {
        id: 'platform-differences',
        title: 'الفروق بين أندرويد و iPhone',
        itemHeadings: true,
        columns: ['القدرة', 'أندرويد', 'iPhone'],
        rows: [
          {
            'القدرة': 'بيئة التشغيل',
            'أندرويد': 'MediaPipe و LiteRT و GenieX (GGUF)',
            'iPhone': 'حزمة RunAnywhere و llama.cpp',
          },
          {
            'القدرة': 'الموسيقى',
            'أندرويد': 'SoundGen (LiteRT)',
            'iPhone': 'Magenta Realtime 2 (MLX)',
          },
          {
            'القدرة': 'الفيديو',
            'أندرويد': 'غير مدرج',
            'iPhone': 'Stable Video Diffusion',
          },
          {
            'القدرة': 'أوامر Termux',
            'أندرويد': 'نعم',
            'iPhone': 'لا ينطبق',
          },
        ],
        note: 'والإصدارات تختلف أيضاً: أندرويد 4.4.2 و iOS 1.4.0 اعتباراً من 3 أكتوبر 2026، وقد لا تصل الميزات إلى المنصتين في الوقت نفسه.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: 'السعر والترخيص',
        content: [
          '**التطبيق مجاني التثبيت مع عمليات شراء داخل التطبيق.** يدرج App Store "LLM Hub Premium Lifetime" بسعر $9.99 (المتجر الأسترالي، جرى التحقق منه في 3 أكتوبر 2026)؛ وتُظهر صفحة Google Play عمليات شراء داخل التطبيق وتذكر أن بعض الميزات تتطلب Premium دون ذكر سعر أو ما الذي يُقفل. وتصف ملاحظة إعداد المطوّر في README خياراً لتخطي الإعلانات وفتح premium محلياً، ما يوحي بأن نسخة أندرويد المجانية قد تعرض إعلانات؛ ولا يذكر نص Play الذي قُرئ ذلك.',
          'أما الترخيص: فيصف README ووصف Play المشروع بأنه مفتوح المصدر، لكن ملف LICENSE في المستودع يحمل عنوان PolyForm Noncommercial License 1.0.0، وتعرّف بنوده الأغراض التجارية بما يشمل توزيع البرنامج على متجر تطبيقات وتقاضي مقابل عنه وتحقيق الدخل منه عبر الإعلانات أو عمليات الشراء داخل التطبيق. وتصنّف GitHub الترخيص بأنه "Other". وبعبارة بسيطة، هذا كود متاح مصدرياً يمكنك قراءته وتعديله واستخدامه لأغراض غير تجارية، وليس ترخيصاً متساهلاً مفتوح المصدر؛ وهذا ليس استشارة قانونية، لذا اقرأ ملف LICENSE قبل إعادة استخدام أي كود.',
        ],
        items: [
          '**App Store:** مجاني؛ وشراء Premium Lifetime داخل التطبيق بسعر $9.99.',
          '**Google Play:** مجاني؛ مع عمليات شراء داخل التطبيق؛ وميزات Premium غير محددة.',
          '**الكود المصدري:** PolyForm Noncommercial 1.0.0 بحسب ملف LICENSE؛ وإصدارات المطوّر الخاصة على المتجرين هي التوزيع التجاري.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والميزات عبر الإنترنت',
        content: [
          '**يحمل المتجران إعلانين بعدم جمع البيانات:** يذكر قسم أمان البيانات في Play عبارتي "No data collected" و"No data shared with third parties"، وتنص بطاقة الخصوصية في App Store على أن المطوّر لا يجمع أي بيانات. ويضيف README عبارات "zero data collection" و"no accounts, no tracking".',
          'تنطبق هذه الادعاءات على الاستدلال المحلي. فيذكر وصف Play أن الاتصال بالإنترنت مطلوب لتنزيل النماذج وللميزات الاختيارية عبر الإنترنت مثل البحث على الويب وخوادم MCP البعيدة، لذا فالمحادثة التي تستخدم تلك الميزات ترسل طلبات خارج الجهاز. وهذه إعلانات من المطوّر وليست نتائج تدقيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الكود المصدري عام، لذا يمكن التحقق من الادعاءات ببناء التطبيق، لكن PromptQuorum لم تدقق الكود ولا حركة الشبكة. وعلى من يتعامل مع بيانات سرية أن يتحقق من السلوك مع تعطيل البحث على الويب وخوادم MCP البعيدة وتفعيلها.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: ['الميزة', 'المعنى في الاستخدام', 'القيد / التحفّظ'],
        rows: [
          {
            'الميزة': 'مجموعة أدوات شاملة',
            'المعنى في الاستخدام': 'الدردشة والوكيل والصور والموسيقى والترجمة والتفريغ الصوتي في تطبيق واحد.',
            'القيد / التحفّظ': 'الاتساع يعني صيانة أكثر؛ ولا يوجد في المصادر تقييم عملي للجودة.',
          },
          {
            'الميزة': 'وكيل يدعم MCP',
            'المعنى في الاستخدام': 'يستطيع الوكيل استخدام أدوات الجهاز وخوادم MCP المتصلة، مع موافقة على كل استدعاء.',
            'القيد / التحفّظ': 'خوادم MCP البعيدة والبحث على الويب تتصل بالإنترنت.',
          },
          {
            'الميزة': 'صيغ استيراد كثيرة',
            'المعنى في الاستخدام': 'يمكن استيراد ملفات GGUF و LiteRT و MNN، إضافة إلى التنزيل من Hugging Face.',
            'القيد / التحفّظ': 'الصيغ التي تعمل على كل هاتف تعتمد على بيئة التشغيل والشريحة.',
          },
          {
            'الميزة': 'الكود المصدري مقروء',
            'المعنى في الاستخدام': 'يمكنك قراءة الكود وبناؤه، والتطبيق مجاني التثبيت.',
            'القيد / التحفّظ': 'ترخيص PolyForm Noncommercial ليس ترخيصاً مفتوح المصدر، و Premium مدفوع.',
          },
          {
            'الميزة': 'المنصتان معاً',
            'المعنى في الاستخدام': 'توجد نسختان لأندرويد و iPhone، إضافة إلى iPad وأجهزة Mac بمعالج Apple.',
            'القيد / التحفّظ': 'الميزات تختلف بحسب المنصة، وكان تقييم Play هو 3.0 من 335 مراجعة في 3 أكتوبر 2026.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يريدون تطبيقاً واحداً على الجهاز لمهام ذكاء اصطناعي كثيرة.** الدردشة والترجمة والتفريغ الصوتي وتوليد الصور أو الموسيقى في تثبيت واحد.',
          '**مستخدمو أندرويد الذين يريدون وكيلاً يصوغ أوامر Termux.** يرد وصف آلية التعديل قبل التشغيل في README.',
          '**المهتمون بالتجريب ممن يريدون كوداً مصدرياً مقروءاً.** الكود عام، شرط أن تناسب بنود الترخيص غير التجاري الاستخدام المقصود.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم السرعة واستهلاك البطارية وجودة المخرجات والاستقرار.',
          '**متطلبات العتاد.** لم يُعثر في المصادر التي قُرئت على حد أدنى للذاكرة RAM أو إصدار أندرويد أو قائمة بالشرائح.',
          '**ما الذي يفتحه Premium.** يذكر App Store سعراً؛ ولا يدرج نص أي من المتجرين الذي قُرئ الميزات المقفلة، ولم يظهر سعر Play.',
          '**هل تعرض النسخة المجانية إعلانات.** لا يوجد سوى إشارة غير مباشرة في ملاحظات الإعداد في README.',
          '**موقع المنتج.** موقع [llm-hub.app](https://www.llm-hub.app) لا يُحمَّل إلا مع JavaScript، لذا تعذّرت قراءة محتواه؛ والحقائق هنا مأخوذة من المتجرين والمستودع.',
          '**مستودعات متشابهة الأسماء.** تُظهر نتائج البحث مستودعات GitHub أخرى بأسماء شبه متطابقة؛ وتغطي هذه المراجعة [timmyy123/LLM-Hub](https://github.com/timmyy123/LLM-Hub) فقط، وهو المستودع الذي يشير إليه README التطبيق والبريد الإلكتروني لصاحب الترخيص.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز بمكتبة نماذج خاصة به',
          },
          {
            'التطبيق': '[Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'تطبيق مفتوح المصدر على الجهاز من فريق AI Edge في Google',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة وأجوبة على المستندات داخل الجهاز',
          },
          {
            'التطبيق': '[Layla](/ar/power-local-llm/layla-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر / الترخيص': 'مدفوع / مغلق المصدر',
            'الفرق الرئيسي': 'تركيز على الرفيق ولعب الأدوار مع وضع سحابي اختياري',
          },
        ],
        note: 'تفاصيل المنافسين تتغير كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق من صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل LLM Hub مجاني؟',
            a: 'هو مجاني التثبيت على المتجرين، مع عمليات شراء داخل التطبيق. ويدرج App Store عملية شراء Premium Lifetime بسعر $9.99؛ وتذكر Google Play أن بعض الميزات تتطلب Premium دون ذكر سعر.',
          },
          {
            q: 'هل LLM Hub مفتوح المصدر؟',
            a: 'ليس بالمعنى المعتاد. فالمشروع يصف نفسه بأنه مفتوح المصدر، لكن ملف LICENSE بعنوان PolyForm Noncommercial License 1.0.0 الذي يقيّد الاستخدام التجاري. والكود مقروء، لذا يوصف بدقة أكبر بأنه متاح مصدرياً (source-available).',
          },
          {
            q: 'من يصنع LLM Hub؟',
            a: 'مطوّر فرد: تدرج Google Play "timmy boy" (واسم المطوّر Yuan Qian، مع عنوان أسترالي)، ويدرج App Store اسم Yuan Qian، والكود على حساب GitHub ‏timmyy123، مع نفس البريد الإلكتروني للتواصل في الترخيص وفي صفحة Play.',
          },
          {
            q: 'هل يعمل دون اتصال؟',
            a: 'يعمل الاستدلال المحلي على الجهاز بعد تنزيل النماذج. أما تنزيل النماذج والبحث على الويب وخوادم MCP البعيدة فتحتاج إلى الإنترنت، بحسب وصف Play.',
          },
          {
            q: 'ما المنصات التي يدعمها؟',
            a: 'أندرويد عبر Google Play، و iPhone و iPad وأجهزة Mac بمعالج Apple و Apple Vision عبر App Store. وبعض الميزات تختلف: توليد الفيديو مدرج لنظام iOS، وأوامر Termux لأندرويد.',
          },
          {
            q: 'ما دعم MCP فيه؟',
            a: 'يستطيع الوكيل الاتصال بخوادم Model Context Protocol المتوافقة لاستخدام أدوات خارجية، ويجب الموافقة على كل استدعاء أداة قبل تشغيله، بحسب وصف Play وREADME.',
          },
          {
            q: 'ما النماذج التي يمكنني استخدامها؟',
            a: 'يُذكر Gemma و Llama على Google Play. ويمكنك تنزيل النماذج من Hugging Face أو استيراد ملفات .task و .litertlm و qnn و .mnn و .gguf، بحسب README.',
          },
          {
            q: 'ما البيانات التي يجمعها؟',
            a: 'يحمل المتجران إعلانين بعدم جمع أي بيانات. وهذه تصريحات المطوّر نفسه، والميزات عبر الإنترنت مثل البحث على الويب وخوادم MCP البعيدة ترسل طلبات خارج الجهاز.',
          },
          {
            q: 'كيف يقارن بـ PocketPal AI؟',
            a: 'PocketPal AI عميل دردشة مجاني على الجهاز بترخيص MIT، بينما LLM Hub مجموعة أوسع تضم وكيلاً وتوليد وسائط ومستوى Premium مدفوعاً بترخيص غير تجاري متاح مصدرياً.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'LLM Hub هو الأوسع نطاقاً على الورق بين تطبيقات الذكاء الاصطناعي المحلي للهواتف في هذه المجموعة: دردشة، ووكيل يدعم MCP، وتوليد صور وموسيقى، وترجمة، وتفريغ صوتي على أندرويد و iPhone معاً، من مطوّر ينشر الكود المصدري. في المقابل، الترخيص متاح مصدرياً وغير تجاري لا مفتوح المصدر، و Premium مدفوع ولا يوضّح نص المتجر نطاقه، وكان تقييم Play هو 3.0 من 335 مراجعة في 3 أكتوبر 2026، ولا تُنشر متطلبات عتاد، ولم يُختبر شيء مما هنا عملياً. وهو يناسب القراء الذين يريدون تطبيقاً واحداً على الجهاز لمهام كثيرة ويقبلون هذه الشروط؛ أما من يريدون عميل دردشة بترخيص متساهل فيمكنهم مقارنته بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private Mind](/ar/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[LLM Hub على Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) — الوصف وتفاصيل المطوّر وقسم أمان البيانات وعدد التنزيلات والتقييم وتاريخ آخر تحديث، جرى التحقق منها في 3 أكتوبر 2026.',
          '[LLM Hub على App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) — السعر وشراء Premium Lifetime والإصدار ومتطلبات المنصة وبطاقة الخصوصية، جرى التحقق منها في 3 أكتوبر 2026.',
          '[LLM-Hub على GitHub](https://github.com/timmyy123/LLM-Hub) — README وملف LICENSE وملفا البناء لأندرويد و iOS لمعرفة أرقام الإصدارات.',
          '[سياسة خصوصية LLM Hub](https://www.llm-hub.app/privacy) — سياسة الخصوصية الخاصة بالمطوّر، وهي مرتبطة من موقع المنتج.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني على الجهاز بترخيص MIT.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT مع أسئلة وأجوبة على المستندات.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق Google مفتوح المصدر للذكاء الاصطناعي على الجهاز.',
          '[مراجعة Layla](/ar/power-local-llm/layla-review) — تطبيق مدفوع على الجهاز بطابع الرفيق.',
          '[أفضل تطبيقات LLM المحلية لأندرويد في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — نظرة أوسع على تطبيقات أندرويد.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — نظرة أوسع على تطبيقات iPhone.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-hub-review-hero-zh.webp',
    title: 'LLM Hub 评测:适用于 Android 和 iPhone 的设备端 AI 套件',
    seoTitle: 'LLM Hub 评测:Android 与 iOS 设备端 AI 套件',
    intro:
      'LLM Hub 是一款由个人开发者发布的手机应用,它把本地语言模型聊天、可使用 MCP 服务器的 AI 智能体、图像和音乐生成、翻译、Whisper 转录,以及可预览所生成 HTML 的“Vibe Coder”整合在一起。它可在 [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) 和 [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) 获取,免费安装,另设付费 Premium 层级。该项目自称开源,但其代码仓库的 LICENSE 文件是非商业性质的 PolyForm 许可证,因此这些代码属于源码可见(source-available),而非通常意义上的开源。本评测基于应用商店页面和公开的 [GitHub 代码仓库](https://github.com/timmyy123/LLM-Hub),核实于 2026 年 10 月 3 日;PromptQuorum 没有对该应用进行实测。',
    metaDescription:
      'LLM Hub 评测:适用于 Android 和 iPhone 的设备端 AI 应用,含聊天、MCP 智能体、图像和音乐生成。涵盖价格、PolyForm 许可证、隐私与局限。',
    twitterDescription:
      'LLM Hub 评测:一款 Android 和 iPhone 应用,集本地聊天、MCP 智能体、图像和音乐生成、翻译与转录于一身——采用非商业 PolyForm 许可证,另有付费 Premium 层级。',
    audience:
      '正在考虑一体化设备端 AI 应用的 Android 和 iPhone 用户,并且需要准确了解哪些内容在本地运行、Premium 层级和许可证意味着什么,以及哪些内容来源并未确认。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LLM Hub 评测',
    targetKeywords: [
      'llm hub 应用评测',
      'llm hub 本地 ai 助手',
      'llm hub android ios',
      '设备端 ai 应用 图像 音乐生成',
      'android 本地大模型应用 mcp 智能体',
      'llm hub polyform 非商业许可证',
      'llm hub 与 pocketpal ai 对比',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Stable Diffusion 1.5', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad', 'Apple M1', 'Qualcomm NPU'],
    leadAnswerBlock:
      '**LLM Hub(截至 2026 年 10 月 3 日,Android 版本为 4.4.2,iOS 版本为 1.4.0)是一款可免费安装的手机应用,运行本地语言模型,并附带支持 MCP 的智能体、图像和音乐生成、翻译、Whisper 转录和语音聊天,另设付费 Premium 层级。** 据其应用商店页面,本地推理期间对话保留在设备上,只有下载模型以及网页搜索、远程 MCP 服务器等可选功能才需要联网。README 和 Google Play 称其为开源,但代码仓库的 LICENSE 文件标题为 PolyForm Noncommercial License 1.0.0,限制商业使用。',
    quickAnswerTop: {
      zh: {
        question: 'LLM Hub 是开源的吗?它能完全离线运行吗?',
        answer:
          '它是源码可见,而非通常意义上的开源:项目自称开源,但 LICENSE 文件是限制商业使用的 PolyForm Noncommercial 许可证。据其应用商店页面,模型下载完成后本地推理可离线运行;网页搜索和远程 MCP 服务器是可选的联网功能。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) 和 [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) 免费安装;App Store 列出了 9.99 美元的 Premium Lifetime 内购,而 Play 页面只说部分功能需要 Premium。',
          '可与 Gemma、Llama 等模型进行本地聊天,可导入 GGUF、LiteRT 和 MNN 格式的文件,并支持从 Hugging Face 下载。',
          '聊天之外的功能:带有 MCP 和设备工具的智能体、图像、音乐和(仅 iOS)视频生成、翻译,以及 Whisper 转录。',
          '据 2026 年 10 月 3 日核实:Android 构建版本 4.4.2、iOS 1.4.0,Google Play 下载量 10K+,GitHub 星标 602 个。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'LLM Hub 是什么?', anchor: 'what-is-llm-hub' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '如何开始使用', anchor: 'getting-started' },
      { label: '模型与格式', anchor: 'models-supported' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: 'Android 与 iPhone 的差异', anchor: 'platform-differences' },
      { label: '价格与许可证', anchor: 'pricing-license' },
      { label: '隐私与联网功能', anchor: 'privacy' },
      { label: '权衡:优点与局限', anchor: 'tradeoffs' },
      { label: '适合谁使用', anchor: 'who-should-use' },
      { label: '我们无法验证的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
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
            text: 'LLM Hub 是一款可免费安装的 Android 和 iPhone 应用,运行本地语言模型,并附带支持 MCP 的智能体、图像和音乐生成、翻译与转录,采用源码可见的非商业 PolyForm 许可证,另设付费 Premium 层级。',
          },
          {
            type: 'plain-terms',
            text: '这是一款试图完成多种设备端 AI 任务的应用——聊天、能使用工具的助手、生成图像和音乐、翻译,以及把语音转成文字——你可以阅读它的源代码,但许可证不允许他人将其用于商业用途。',
          },
        ],
        items: [
          '开发者:在 Google Play 上列为“timmy boy”,在 App Store 上列为 Yuan Qian,GitHub 账号为 [timmyy123](https://github.com/timmyy123),LICENSE 与 Play 页面中使用同一个联系邮箱;Google Play 上显示的是澳大利亚地址。',
          '价格:免费安装;App Store 列出“LLM Hub Premium Lifetime”,价格为 9.99 美元,Google Play 则说明部分功能需要 Premium。',
          '许可证:LICENSE 文件标题为 PolyForm Noncommercial License 1.0.0,限制商业使用,包括他人通过应用商店分发;尽管如此,项目仍自称开源。',
          '范围:带有 RAG 记忆和可选网页搜索的聊天、带有 MCP 和 Termux(Android)的智能体、图像、音乐和视频生成、放大、翻译、Whisper 转录、诈骗检测以及语音聊天。',
          '据 2026 年 10 月 3 日核实的商店与代码仓库信号:Android 4.4.2、iOS 1.4.0,Google Play 下载量 10K+,335 条评价的评分为 3.0,GitHub 星标 602 个。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Google Play 和 App Store 页面信息以及公开的 GitHub 代码仓库(README、LICENSE、构建文件),核实于 2026 年 10 月 3 日。PromptQuorum 没有对该应用进行实测或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-hub',
        title: 'LLM Hub 是什么?',
        content: [
          '**LLM Hub 是一款手机应用,把本地聊天模型与一系列其他设备端 AI 工具打包在一起。** 根据其 [README](https://github.com/timmyy123/LLM-Hub),该套件涵盖聊天、AI 智能体、角色设计(creAItor)、Vibe Coder、写作辅助、图像生成、音乐生成、图像放大、iOS 上的视频生成、翻译、转录、诈骗检测器以及免提语音聊天。',
          '两个平台由不同的运行时驱动:README 列出 Android 上使用 MediaPipe、LiteRT 以及用于 GGUF 的 Qualcomm GenieX SDK,iOS 上使用 RunAnywhere SDK 和 llama.cpp。开发者表示它针对 CPU、GPU 和 NPU 加速进行了优化,因此速度以及哪些功能可用取决于手机和芯片,Play 页面的描述也提到了这一点。',
        ],
        note: 'MCP(Model Context Protocol)是 AI 应用连接外部工具服务器的一种标准方式;据 README,在 LLM Hub 中每次 MCP 工具调用都需要用户批准。',
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**LLM Hub 通过两大手机应用商店和源代码发布;下面的链接都是 README 中列出的。**',
        ],
        columns: ['平台', '获取途径'],
        rows: [
          {
            '平台': 'Android',
            '获取途径': '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)',
          },
          {
            '平台': 'iPhone / iPad',
            '获取途径': '[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820)(iOS 和 iPadOS 17.5 或更高版本)',
          },
          {
            '平台': 'Mac / Vision',
            '获取途径': '同一 App Store 页面(搭载 Apple M1+ 的 Mac,visionOS 1.2+)',
          },
          {
            '平台': '源代码',
            '获取途径': '[GitHub](https://github.com/timmyy123/LLM-Hub)(PolyForm Noncommercial)',
          },
          {
            '平台': '官方网站',
            '获取途径': '[llm-hub.app](https://www.llm-hub.app)',
          },
          {
            '平台': '隐私政策',
            '获取途径': '[LLM Hub 隐私政策](https://www.llm-hub.app/privacy)',
          },
        ],
        note: '本页是该应用在 [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory) 中词条的配套资料。据 2026 年 10 月 3 日核实的版本:Android 4.4.2 / iOS 1.4.0(Android 版本来自代码仓库的构建文件,因为所读的 Play 文本未显示版本号;iOS 版本来自 App Store)。README 称原生 Windows 和 macOS 应用已在计划中,尚未发布。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用',
        content: [
          '**README 的快速入门共有三个步骤;PromptQuorum 没有执行过这些步骤。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从 Google Play 或 App Store 下载 LLM Hub,或按照 README 从源代码构建;据 Play 页面,无需账号。',
          },
          {
            title: '下载或导入模型',
            whyItMatters: '打开“设置”,再进入“下载模型”,下载或导入一个模型;README 列出了 .task、.litertlm、qnn、.mnn 和 .gguf 文件,以及直接从 Hugging Face 下载。',
          },
          {
            title: '选择模型并开始',
            whyItMatters: '选择模型后开始聊天,或打开图像生成器、翻译器、转录器等其他工具。',
          },
        ],
        note: '据 Play 页面描述,下载模型以及网页搜索、远程 MCP 服务器等可选的联网功能需要互联网连接。',
      },
      modelsSupported: {
        id: 'models-supported',
        title: '模型与格式',
        itemHeadings: true,
        columns: ['领域', '来源中提到的内容', '说明'],
        rows: [
          {
            '领域': '聊天模型',
            '来源中提到的内容': 'Gemma 和 Llama(Play);iPhone 上的 Gemma 4(README 演示)',
            '说明': '其他系列可导入或下载',
          },
          {
            '领域': '导入格式',
            '来源中提到的内容': '.task、.litertlm、qnn、.mnn、.gguf',
            '说明': '据 README;Android 上 GGUF 通过 GenieX 运行',
          },
          {
            '领域': '图像',
            '来源中提到的内容': 'Stable Diffusion 1.5;RealESRGAN 和 UltraSharp 放大器',
            '说明': '最高 4 倍放大,并提到 NPU 加速',
          },
          {
            '领域': '音频',
            '来源中提到的内容': 'Whisper(转录);Android 上的 Kokoro TTS',
            '说明': '音乐:Android 为 SoundGen,iOS 为 Magenta Realtime 2',
          },
          {
            '领域': '视频',
            '来源中提到的内容': 'Stable Video Diffusion',
            '说明': 'README 中仅列为 iOS 功能',
          },
        ],
        note: '本表的来源是 README,而非应用内目录,模型的可用性会随应用版本变化。各模型的硬件要求并未说明。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**下面每一项都来自 Play 描述或 README;均未经独立测试。**',
        ],
        items: [
          '**聊天。** 带有 RAG 记忆的多轮对话、图像输入、可选的网页搜索以及本地文字转语音回复。',
          '**AI 智能体与 MCP。** 具备函数调用、地图和设备工具的设备端智能体;可连接兼容的 MCP 服务器,每次工具调用都需要批准。',
          '**Termux 命令(Android)。** 智能体为 Termux 起草 shell 命令,你可以在运行前查看和编辑,并将错误反馈给模型以提出修复建议。',
          '**创作。** 离线图像生成、本地音乐和音效生成、图像放大、creAItor 角色,以及可预览所生成 HTML 和 JavaScript 的 Vibe Coder。',
          '**语言与语音。** 支持 50 多种语言的翻译,包括图像文字(OCR)和音频、写作辅助、Whisper 转录、VibeVoice 语音聊天,以及用于识别可疑消息的诈骗检测器。',
        ],
      },
      platformDifferences: {
        id: 'platform-differences',
        title: 'Android 与 iPhone 的差异',
        itemHeadings: true,
        columns: ['功能', 'Android', 'iPhone'],
        rows: [
          {
            '功能': '运行时',
            'Android': 'MediaPipe、LiteRT、GenieX(GGUF)',
            'iPhone': 'RunAnywhere SDK、llama.cpp',
          },
          {
            '功能': '音乐',
            'Android': 'SoundGen(LiteRT)',
            'iPhone': 'Magenta Realtime 2(MLX)',
          },
          {
            '功能': '视频',
            'Android': '未列出',
            'iPhone': 'Stable Video Diffusion',
          },
          {
            '功能': 'Termux 命令',
            'Android': '有',
            'iPhone': '不适用',
          },
        ],
        note: '版本也不同:截至 2026 年 10 月 3 日,Android 为 4.4.2,iOS 为 1.4.0,功能也可能不会同时登陆两个平台。',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: '价格与许可证',
        content: [
          '**应用可免费安装,带有应用内购买。** App Store 列出“LLM Hub Premium Lifetime”,价格为 9.99 美元(澳大利亚区商店,核实于 2026 年 10 月 3 日);Google Play 页面显示有应用内购买,并称部分功能需要 Premium,但没有给出价格,也没有说明锁定了哪些功能。README 中的开发者设置说明描述了一个用于跳过广告并在本地解锁 premium 的标志,这暗示免费的 Android 版本可能会显示广告;所读的 Play 文本并未说明这一点。',
          '关于许可证:README 和 Play 描述称该项目开源,但代码仓库的 LICENSE 文件标题为 PolyForm Noncommercial License 1.0.0,其条款将商业目的界定为包括在应用商店分发该软件、对其收费,以及通过广告或应用内购买将其变现。GitHub 将该许可证显示为“Other”。通俗地说,这是可以阅读、修改并用于非商业用途的源码可见代码,而不是宽松的开源许可证;这不构成法律意见,因此在复用任何代码之前,请先阅读 LICENSE 文件。',
        ],
        items: [
          '**App Store:** 免费;Premium Lifetime 为 9.99 美元的应用内购买。',
          '**Google Play:** 免费;有应用内购买;Premium 功能未具体说明。',
          '**源代码:** 据 LICENSE 文件为 PolyForm Noncommercial 1.0.0;开发者自己的商店发行版属于商业分发。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与联网功能',
        content: [
          '**两大应用商店都带有不收集数据的声明:** Play 的“数据安全”部分写明“未收集任何数据”和“未与第三方共享任何数据”,App Store 隐私标签则称开发者不收集任何数据。README 还补充了“zero data collection”(零数据收集)以及“no accounts, no tracking”(无账号、无跟踪)。',
          '这些说法适用于本地推理。Play 描述称,下载模型以及网页搜索、远程 MCP 服务器等可选的联网功能需要互联网连接,因此使用这些功能的聊天会把请求发送到设备之外。以上是开发者的声明,而非审计结果。',
        ],
        callouts: [
          {
            type: 'note',
            text: '源代码是公开的,因此可以通过构建该应用来核查这些说法,但 PromptQuorum 没有审计代码或网络流量。处理机密数据的人应分别在关闭和开启网页搜索及远程 MCP 服务器的情况下核实其行为。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '权衡:优点与局限',
        columns: ['优点', '实际使用中的含义', '局限 / 注意事项'],
        rows: [
          {
            '优点': '一体化工具集',
            '实际使用中的含义': '聊天、智能体、图像、音乐、翻译和转录集中在一个应用里。',
            '局限 / 注意事项': '功能越广,需要维护的越多;来源中没有实际使用质量的评估。',
          },
          {
            '优点': '支持 MCP 的智能体',
            '实际使用中的含义': '智能体可以使用设备工具和已连接的 MCP 服务器,每次调用都需批准。',
            '局限 / 注意事项': '远程 MCP 服务器和网页搜索需要联网。',
          },
          {
            '优点': '多种导入格式',
            '实际使用中的含义': '可导入 GGUF、LiteRT 和 MNN 文件,也可从 Hugging Face 下载。',
            '局限 / 注意事项': '哪种格式能在哪部手机上运行,取决于运行时和芯片。',
          },
          {
            '优点': '源代码可阅读',
            '实际使用中的含义': '你可以阅读并构建代码,应用也可免费安装。',
            '局限 / 注意事项': 'PolyForm Noncommercial 许可证不是开源许可证,而且 Premium 需要付费。',
          },
          {
            '优点': '覆盖两个平台',
            '实际使用中的含义': '有 Android 和 iPhone 版本,另有 iPad 和搭载 Apple 芯片的 Mac。',
            '局限 / 注意事项': '各平台功能不同;2026 年 10 月 3 日 Play 评分为 3.0(335 条评价)。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**希望用一款设备端应用完成多种 AI 任务的人。** 聊天、翻译、转录以及图像或音乐生成都在一次安装中。',
          '**希望智能体起草 Termux 命令的 Android 用户。** README 描述了运行前可编辑的流程。',
          '**想阅读源代码的爱好者。** 代码是公开的,前提是非商业许可证的条款符合你的预期用途。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法验证的内容',
        items: [
          '**实际使用表现。** PromptQuorum 没有运行该应用,因此速度、电池消耗、输出质量和稳定性均未评估。',
          '**硬件要求。** 所读来源中没有找到最低内存、Android 版本或芯片清单。',
          '**Premium 解锁了什么。** App Store 给出了价格;所读的两个商店文本都没有列出被锁定的功能,Play 的价格也未显示。',
          '**免费版本是否显示广告。** 只有 README 设置说明中的间接提及。',
          '**产品网站。** [llm-hub.app](https://www.llm-hub.app) 网站仅在启用 JavaScript 时才能加载,因此无法读取其内容;本文的事实来自应用商店和代码仓库。',
          '**名称相近的代码仓库。** 搜索结果中还有其他名称几乎相同的 GitHub 代码仓库;本评测仅涵盖 [timmyy123/LLM-Hub](https://github.com/timmyy123/LLM-Hub),即该应用的 README 和许可证持有者邮箱所指向的那一个。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源设备端聊天客户端,自带模型库',
          },
          {
            '应用': '[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '来自 Google AI Edge 团队的开源设备端应用',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源离线聊天,带设备端文档问答',
          },
          {
            '应用': '[Layla](/zh/power-local-llm/layla-review)',
            '平台': 'Android、iOS',
            '价格 / 许可证': '付费 / 闭源',
            '主要区别': '侧重陪伴与角色扮演,另有可选的云端模式',
          },
        ],
        note: '竞品信息经常变化;请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'LLM Hub 免费吗?',
            a: '两个应用商店均可免费安装,带有应用内购买。App Store 列出 9.99 美元的 Premium Lifetime 内购;Google Play 称部分功能需要 Premium,但没有给出价格。',
          },
          {
            q: 'LLM Hub 是开源的吗?',
            a: '不是通常意义上的开源。项目自称开源,但 LICENSE 文件标题为 PolyForm Noncommercial License 1.0.0,限制商业使用。代码可以阅读,因此更准确的说法是源码可见。',
          },
          {
            q: 'LLM Hub 是谁开发的?',
            a: '一位个人开发者:Google Play 列为“timmy boy”(开发者名称为 Yuan Qian,带有澳大利亚地址),App Store 列为 Yuan Qian,代码位于 GitHub 账号 timmyy123 下,许可证与 Play 页面中使用同一个联系邮箱。',
          },
          {
            q: '它能离线使用吗?',
            a: '模型下载完成后,本地推理在设备上运行。据 Play 描述,下载模型、网页搜索和远程 MCP 服务器需要互联网。',
          },
          {
            q: '它支持哪些平台?',
            a: '通过 Google Play 支持 Android,通过 App Store 支持 iPhone、iPad、搭载 Apple 芯片的 Mac 和 Apple Vision。部分功能有所不同:视频生成列为 iOS 功能,Termux 命令则是 Android 功能。',
          },
          {
            q: 'MCP 支持是怎样的?',
            a: '据 Play 描述和 README,智能体可以连接兼容的 Model Context Protocol 服务器以使用外部工具,每次工具调用在运行前都必须获得批准。',
          },
          {
            q: '我可以使用哪些模型?',
            a: 'Google Play 页面提到了 Gemma 和 Llama。据 README,你可以从 Hugging Face 下载模型,也可以导入 .task、.litertlm、qnn、.mnn 和 .gguf 文件。',
          },
          {
            q: '它会收集哪些数据?',
            a: '两个应用商店都带有未收集数据的声明。这些是开发者自己的陈述,而网页搜索和远程 MCP 服务器等联网功能会把请求发送到设备之外。',
          },
          {
            q: '它与 PocketPal AI 相比如何?',
            a: 'PocketPal AI 是免费的 MIT 许可设备端聊天客户端,而 LLM Hub 是范围更广的套件,带有智能体、媒体生成和付费 Premium 层级,采用非商业的源码可见许可证。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '就纸面功能而言,LLM Hub 是这一组手机本地 AI 应用中范围最广的:在 Android 和 iPhone 上提供聊天、支持 MCP 的智能体、图像和音乐生成、翻译与转录,并且开发者公开了源代码。另一方面,其许可证是源码可见的非商业许可证,而非开源;Premium 需要付费,商店文本并未说明其范围;2026 年 10 月 3 日 Play 评分为 3.0(335 条评价);没有公布硬件要求;这里的一切也都没有经过实测。它适合希望用一款设备端应用完成多种任务并接受这些条件的读者;希望使用宽松许可证聊天客户端的读者可以对比 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Private Mind](/zh/power-local-llm/private-mind-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Google Play 上的 LLM Hub](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) — 描述、开发者信息、数据安全部分、下载量、评分和最近更新日期,核实于 2026 年 10 月 3 日。',
          '[App Store 上的 LLM Hub](https://apps.apple.com/au/app/llm-hub/id6762511820) — 价格、Premium Lifetime 内购、版本、平台要求和隐私标签,核实于 2026 年 10 月 3 日。',
          '[GitHub 上的 LLM-Hub](https://github.com/timmyy123/LLM-Hub) — README、LICENSE 文件,以及用于确认版本号的 Android 和 iOS 构建文件。',
          '[LLM Hub 隐私政策](https://www.llm-hub.app/privacy) — 开发者的隐私政策,链接自产品网站。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 免费、MIT 许可的设备端聊天客户端。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 免费、MIT 许可、带文档问答的离线聊天应用。',
          '[Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google 的开源设备端 AI 应用。',
          '[Layla 评测](/zh/power-local-llm/layla-review) — 付费的陪伴型设备端应用。',
          '[2026 年 Android 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用汇总。',
          '[2026 年 iPhone 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iPhone 应用汇总。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-hub-review-hero-ko.webp',
    title: 'LLM Hub 리뷰: Android·iPhone용 온디바이스 AI 종합 앱',
    seoTitle: 'LLM Hub 리뷰: Android·iOS용 온디바이스 AI 종합 앱',
    intro:
      'LLM Hub는 개인 개발자가 배포하는 모바일 앱으로, 로컬 언어 모델 채팅에 더해 MCP 서버를 사용할 수 있는 AI 에이전트, 이미지·음악 생성, 번역, Whisper 받아쓰기, 생성된 HTML을 미리 보여 주는 "Vibe Coder"를 하나로 묶었습니다. [Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)와 [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820)에서 설치는 무료이고 유료 Premium 등급이 있습니다. 프로젝트는 스스로를 오픈 소스라고 소개하지만 저장소의 LICENSE 파일은 비상업용 PolyForm 라이선스이므로, 이 코드는 통상적인 의미의 오픈 소스가 아니라 소스 공개(source-available)에 해당합니다. 이 리뷰는 2026년 10월 3일에 확인한 스토어 게재 정보와 공개 [GitHub 저장소](https://github.com/timmyy123/LLM-Hub)를 근거로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'LLM Hub 리뷰: 채팅, MCP 에이전트, 이미지·음악 생성, 번역, 받아쓰기를 갖춘 Android·iPhone용 온디바이스 AI 앱입니다. 가격, 비상업용 PolyForm 라이선스, 개인정보 처리, 그리고 출처로 확인되지 않은 한계까지 정리했습니다.',
    twitterDescription:
      'LLM Hub 리뷰: 로컬 채팅, MCP 에이전트, 이미지·음악 생성, 번역, 받아쓰기를 하나로 묶은 Android·iPhone 앱. 비상업용 PolyForm 라이선스와 유료 Premium 등급을 다룹니다.',
    audience:
      '올인원 온디바이스 AI 앱을 고려하는 Android·iPhone 이용자로, 무엇이 기기에서 실행되는지, Premium 등급과 라이선스가 무엇을 뜻하는지, 출처가 무엇을 확인해 주지 않는지 정확히 알아야 하는 분들.',
    readTime: '10분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'LLM Hub 리뷰',
    targetKeywords: [
      'llm hub 앱 리뷰',
      'llm hub 로컬 ai 어시스턴트',
      'llm hub 안드로이드 ios',
      '온디바이스 ai 앱 이미지 음악 생성',
      '안드로이드 로컬 llm 앱 mcp 에이전트',
      'llm hub polyform 비상업 라이선스',
      'llm hub pocketpal ai 비교',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Stable Diffusion 1.5', 'Whisper', 'Kokoro'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad', 'Apple M1', 'Qualcomm NPU'],
    leadAnswerBlock:
      '**LLM Hub(2026년 10월 3일 기준 Android 버전 4.4.2, iOS 버전 1.4.0)는 로컬 언어 모델을 실행하고 MCP를 지원하는 에이전트, 이미지·음악 생성, 번역, Whisper 받아쓰기, 음성 채팅을 더한, 설치 무료의 모바일 앱이며 유료 Premium 등급이 있습니다.** 게재 정보에 따르면 로컬 추론 중에는 대화가 기기에 머물고, 인터넷은 모델을 내려받을 때와 웹 검색, 원격 MCP 서버 같은 선택 기능에만 필요합니다. README와 Google Play는 이를 오픈 소스라고 부르지만 저장소의 LICENSE 파일 제목은 PolyForm Noncommercial License 1.0.0이며, 이는 상업적 사용을 제한합니다.',
    quickAnswerTop: {
      ko: {
        question: 'LLM Hub는 오픈 소스이며 완전히 오프라인으로 실행됩니까?',
        answer:
          '통상적인 의미의 오픈 소스가 아니라 소스 공개(source-available)입니다. 프로젝트는 스스로를 오픈 소스라고 부르지만 LICENSE 파일은 상업적 사용을 제한하는 비상업용 PolyForm 라이선스입니다. 게재 정보에 따르면 모델을 내려받은 뒤에는 로컬 추론이 오프라인으로 실행되며, 웹 검색과 원격 MCP 서버는 선택형 온라인 기능입니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)와 [App Store](https://apps.apple.com/au/app/llm-hub/id6762511820)에서 설치 무료이며, App Store에는 Premium Lifetime 구매가 $9.99로 표시되고 Play 설명에는 일부 기능이 Premium을 필요로 한다고만 되어 있음.',
          'Gemma, Llama 같은 모델로 로컬 채팅을 하고, GGUF, LiteRT, MNN 형식 파일을 가져오며, Hugging Face에서 내려받을 수 있음.',
          '채팅 외 기능: MCP와 기기 도구를 쓰는 에이전트, 이미지·음악(iOS에서는 동영상 포함) 생성, 번역, Whisper 받아쓰기.',
          '2026년 10월 3일 확인 기준: Android 빌드 4.4.2와 iOS 1.4.0, Play 다운로드 10K+, GitHub 스타 602개.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'LLM Hub란 무엇인가?', anchor: 'what-is-llm-hub' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '모델과 형식', anchor: 'models-supported' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: 'Android와 iPhone의 차이', anchor: 'platform-differences' },
      { label: '가격과 라이선스', anchor: 'pricing-license' },
      { label: '개인정보와 온라인 기능', anchor: 'privacy' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
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
            text: 'LLM Hub는 로컬 언어 모델을 실행하고 MCP를 지원하는 에이전트, 이미지·음악 생성, 번역, 받아쓰기를 더한 설치 무료의 Android·iPhone 앱으로, 소스 공개 방식의 비상업용 PolyForm 라이선스이며 유료 Premium 등급이 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '채팅, 도구를 쓸 수 있는 어시스턴트, 이미지와 음악 만들기, 번역, 음성을 글로 바꾸기처럼 여러 온디바이스 AI 작업을 하나의 앱으로 처리하려는 앱입니다. 소스 코드를 읽을 수는 있지만 라이선스상 다른 사람이 상업적으로 사용할 수는 없습니다.',
          },
        ],
        items: [
          '개발자: Google Play에는 "timmy boy", App Store에는 Yuan Qian으로 표기되어 있고, GitHub 계정은 [timmyy123](https://github.com/timmyy123)이며, LICENSE와 Play 게재 정보에 같은 연락처 이메일이 있고 Google Play에는 호주 주소가 표시됨.',
          '가격: 설치 무료이며, App Store에는 "LLM Hub Premium Lifetime"이 $9.99로 표시되고 Google Play는 일부 기능이 Premium을 필요로 한다고 밝힘.',
          '라이선스: 제목이 PolyForm Noncommercial License 1.0.0인 LICENSE 파일이 다른 사람의 앱 스토어 배포를 포함한 상업적 사용을 제한하며, 그럼에도 프로젝트는 스스로를 오픈 소스라고 부름.',
          '범위: RAG 메모리와 선택형 웹 검색을 갖춘 채팅, MCP와 Termux(Android)를 쓰는 에이전트, 이미지·음악·동영상 생성, 업스케일링, 번역, Whisper 받아쓰기, 사기 탐지, 음성 채팅.',
          '2026년 10월 3일 확인 기준 스토어 및 저장소 지표: Android 4.4.2, iOS 1.4.0, Play 다운로드 10K+(평점 3.0, 리뷰 335건), GitHub 스타 602개.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 Google Play·App Store 게재 정보와 공개 GitHub 저장소(README, LICENSE, 빌드 파일)를 2026년 10월 3일에 확인한 내용을 근거로 합니다. PromptQuorum은 앱을 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-hub',
        title: 'LLM Hub란 무엇인가?',
        content: [
          '**LLM Hub는 로컬 채팅 모델과 여러 다른 온디바이스 AI 도구를 하나로 묶은 모바일 앱입니다.** [README](https://github.com/timmyy123/LLM-Hub)에 따르면 이 모음에는 채팅, AI 에이전트, 페르소나 설계(creAItor), Vibe Coder, 글쓰기 보조, 이미지 생성, 음악 생성, 이미지 업스케일링, iOS의 동영상 생성, 번역, 받아쓰기, 사기 탐지기, 핸즈프리 음성 채팅이 포함됩니다.',
          '플랫폼마다 다른 런타임을 사용합니다. README에는 Android에서 MediaPipe, LiteRT, GGUF용 Qualcomm GenieX SDK가, iOS에서 llama.cpp를 쓰는 RunAnywhere SDK가 나와 있습니다. 개발자는 CPU, GPU, NPU 가속에 최적화되어 있다고 밝히므로, Play 설명에도 적혀 있듯이 속도와 작동하는 기능은 휴대폰과 칩셋에 따라 달라집니다.',
        ],
        note: 'MCP(Model Context Protocol)는 AI 앱이 외부 도구 서버에 연결하는 표준 방식이며, README에 따르면 LLM Hub에서는 모든 MCP 도구 호출에 이용자의 승인이 필요합니다.',
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**LLM Hub는 두 모바일 스토어와 소스 코드로 배포되며, 아래 링크는 README에 실려 있는 것입니다.**',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.llmhub.llmhub)',
          },
          {
            '플랫폼': 'iPhone / iPad',
            '받는 곳': '[App Store](https://apps.apple.com/au/app/llm-hub/id6762511820) (iOS·iPadOS 17.5 이상)',
          },
          {
            '플랫폼': 'Mac / Vision',
            '받는 곳': '같은 App Store 게재 정보(Apple M1+ Mac, visionOS 1.2+)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub](https://github.com/timmyy123/LLM-Hub) (PolyForm Noncommercial)',
          },
          {
            '플랫폼': '공식 웹사이트',
            '받는 곳': '[llm-hub.app](https://www.llm-hub.app)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[LLM Hub 개인정보 처리방침](https://www.llm-hub.app/privacy)',
          },
        ],
        note: '이 페이지는 [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)에 있는 이 앱 항목의 보조 자료입니다. 2026년 10월 3일에 확인한 버전: Android 4.4.2 / iOS 1.4.0 (Play 텍스트에는 버전이 나와 있지 않아 Android는 저장소의 빌드 파일에서, iOS는 App Store에서 가져옴). README에 따르면 네이티브 Windows·macOS 앱은 계획 단계이며 출시되지 않았습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**README의 빠른 시작은 세 단계이며, PromptQuorum은 이를 직접 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'Google Play 또는 App Store에서 LLM Hub를 내려받거나 README에 따라 소스에서 빌드합니다. Play 게재 정보에 따르면 계정은 필요하지 않습니다.',
          },
          {
            title: '모델 내려받기 또는 가져오기',
            whyItMatters: '설정에서 모델 다운로드를 열고 모델을 내려받거나 가져옵니다. README에는 .task, .litertlm, qnn, .mnn, .gguf 파일과 Hugging Face 직접 다운로드가 나와 있습니다.',
          },
          {
            title: '모델을 고르고 시작',
            whyItMatters: '모델을 선택해 채팅을 시작하거나, 이미지 생성기, 번역기, 받아쓰기 같은 다른 도구를 엽니다.',
          },
        ],
        note: 'Play 설명에 따르면 모델을 내려받을 때와 웹 검색, 원격 MCP 서버 같은 선택형 온라인 기능에는 인터넷 연결이 필요합니다.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: '모델과 형식',
        itemHeadings: true,
        columns: ['영역', '출처에 언급된 항목', '비고'],
        rows: [
          {
            '영역': '채팅 모델',
            '출처에 언급된 항목': 'Gemma와 Llama(Play), iPhone의 Gemma 4(README 데모)',
            '비고': '다른 계열도 가져오거나 내려받을 수 있음',
          },
          {
            '영역': '가져오기 형식',
            '출처에 언급된 항목': '.task, .litertlm, qnn, .mnn, .gguf',
            '비고': 'README 기준이며 Android에서 GGUF는 GenieX로 실행',
          },
          {
            '영역': '이미지',
            '출처에 언급된 항목': 'Stable Diffusion 1.5, RealESRGAN·UltraSharp 업스케일러',
            '비고': '최대 4배 업스케일링, NPU 가속 언급',
          },
          {
            '영역': '오디오',
            '출처에 언급된 항목': 'Whisper(받아쓰기), Android의 Kokoro TTS',
            '비고': '음악: Android는 SoundGen, iOS는 Magenta Realtime 2',
          },
          {
            '영역': '동영상',
            '출처에 언급된 항목': 'Stable Video Diffusion',
            '비고': 'README에는 iOS 전용으로 표시',
          },
        ],
        note: '이 표의 출처는 앱 내 카탈로그가 아니라 README이며, 모델 제공 여부는 앱 버전마다 바뀝니다. 모델별 하드웨어 요구 사항은 명시되어 있지 않았습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 Play 설명 또는 README에서 가져온 것이며, 어느 것도 독립적으로 테스트되지 않았습니다.**',
        ],
        items: [
          '**채팅.** RAG 메모리, 이미지 입력, 선택형 웹 검색, 로컬 텍스트 음성 변환 답변을 갖춘 다중 턴 대화.',
          '**AI 에이전트와 MCP.** 함수 호출, 지도, 기기 도구를 갖춘 온디바이스 에이전트로, 호환되는 MCP 서버에 연결하며 모든 도구 호출에 승인이 필요합니다.',
          '**Termux 명령(Android).** 에이전트가 Termux용 셸 명령을 작성하면 실행 전에 확인하고 수정할 수 있으며, 오류는 모델에 다시 전달되어 수정안을 제안받습니다.',
          '**만들기.** 오프라인 이미지 생성, 로컬 음악·효과음 생성, 이미지 업스케일링, creAItor 페르소나, 생성된 HTML과 JavaScript를 미리 보여 주는 Vibe Coder.',
          '**언어와 음성.** 이미지 속 글자(OCR)와 오디오를 포함해 50개 이상 언어를 지원하는 번역, 글쓰기 보조, Whisper 받아쓰기, VibeVoice 음성 채팅, 의심스러운 메시지를 위한 사기 탐지기.',
        ],
      },
      platformDifferences: {
        id: 'platform-differences',
        title: 'Android와 iPhone의 차이',
        itemHeadings: true,
        columns: ['기능', 'Android', 'iPhone'],
        rows: [
          {
            '기능': '런타임',
            'Android': 'MediaPipe, LiteRT, GenieX (GGUF)',
            'iPhone': 'RunAnywhere SDK, llama.cpp',
          },
          {
            '기능': '음악',
            'Android': 'SoundGen (LiteRT)',
            'iPhone': 'Magenta Realtime 2 (MLX)',
          },
          {
            '기능': '동영상',
            'Android': '표시되지 않음',
            'iPhone': 'Stable Video Diffusion',
          },
          {
            '기능': 'Termux 명령',
            'Android': '지원',
            'iPhone': '해당 없음',
          },
        ],
        note: '버전도 다릅니다. 2026년 10월 3일 기준 Android는 4.4.2, iOS는 1.4.0이며, 기능이 두 플랫폼에 동시에 도착하지 않을 수 있습니다.',
      },
      pricingLicense: {
        id: 'pricing-license',
        title: '가격과 라이선스',
        content: [
          '**앱은 설치 무료이며 인앱 구매가 있습니다.** App Store에는 "LLM Hub Premium Lifetime"이 $9.99로 표시됩니다(호주 스토어프런트, 2026년 10월 3일 확인). Google Play 게재 정보에는 인앱 구매가 표시되고 일부 기능이 Premium을 필요로 한다고 되어 있지만, 가격이나 잠긴 기능은 나와 있지 않습니다. README의 개발자 설정 안내에는 광고를 건너뛰고 로컬에서 프리미엄을 해제하는 플래그가 설명되어 있어 무료 Android 빌드에 광고가 표시될 수 있음을 시사하지만, 확인한 Play 텍스트에는 이런 내용이 없습니다.',
          '라이선스에 관해서는, README와 Play 설명이 프로젝트를 오픈 소스라고 부르지만 저장소의 LICENSE 파일 제목은 PolyForm Noncommercial License 1.0.0이며, 그 조항은 앱 스토어 배포, 판매, 광고나 인앱 구매를 통한 수익화를 상업적 목적에 포함하는 것으로 정의합니다. GitHub는 이 라이선스를 "Other"로 표시합니다. 쉽게 말해 읽고 수정하고 비상업적으로 사용할 수 있는 소스 공개 코드이며, 허용적인 오픈 소스 라이선스가 아닙니다. 이는 법률 자문이 아니므로 코드를 재사용하기 전에 LICENSE 파일을 직접 읽어 보세요.',
        ],
        items: [
          '**App Store:** 무료이며 Premium Lifetime 인앱 구매 $9.99.',
          '**Google Play:** 무료이며 인앱 구매가 있고 Premium 기능은 명시되지 않음.',
          '**소스 코드:** LICENSE 파일 기준 PolyForm Noncommercial 1.0.0이며, 개발자 본인의 스토어 릴리스가 상업적 배포임.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 온라인 기능',
        content: [
          '**두 스토어 모두 데이터 미수집 선언을 싣고 있습니다.** Play 데이터 보안 섹션에는 "수집된 데이터 없음"과 "제3자와 공유된 데이터 없음"이 적혀 있고, App Store 개인정보 라벨은 개발자가 어떤 데이터도 수집하지 않는다고 밝힙니다. README는 여기에 "데이터 수집 제로"와 "계정 없음, 추적 없음"을 덧붙입니다.',
          '이 주장들은 로컬 추론에 적용됩니다. Play 설명에는 모델을 내려받을 때와 웹 검색, 원격 MCP 서버 같은 선택형 온라인 기능에 인터넷 접속이 필요하다고 되어 있으므로, 그 기능을 쓰는 채팅은 요청을 기기 밖으로 보냅니다. 이는 개발자의 선언이며 감사 결과가 아닙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '소스 코드가 공개되어 있으므로 앱을 직접 빌드해 주장을 확인할 수 있지만, PromptQuorum은 코드나 네트워크 트래픽을 감사하지 않았습니다. 기밀 데이터를 다루는 경우에는 웹 검색과 원격 MCP 서버를 끈 상태와 켠 상태 모두에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의사항'],
        rows: [
          {
            '이점': '올인원 도구 모음',
            '실제 사용에서의 의미': '채팅, 에이전트, 이미지, 음악, 번역, 받아쓰기가 앱 하나에 있음.',
            '한계 / 유의사항': '범위가 넓은 만큼 관리할 것이 많고, 출처에는 직접 사용해 본 품질 평가가 없음.',
          },
          {
            '이점': 'MCP 지원 에이전트',
            '실제 사용에서의 의미': '에이전트가 기기 도구와 연결된 MCP 서버를 호출별 승인과 함께 사용할 수 있음.',
            '한계 / 유의사항': '원격 MCP 서버와 웹 검색은 온라인으로 연결됨.',
          },
          {
            '이점': '다양한 가져오기 형식',
            '실제 사용에서의 의미': 'GGUF, LiteRT, MNN 파일을 가져오고 Hugging Face에서 내려받을 수 있음.',
            '한계 / 유의사항': '어떤 형식이 어떤 휴대폰에서 작동하는지는 런타임과 칩셋에 좌우됨.',
          },
          {
            '이점': '소스 코드를 읽을 수 있음',
            '실제 사용에서의 의미': '코드를 읽고 빌드할 수 있으며 앱은 설치 무료임.',
            '한계 / 유의사항': 'PolyForm Noncommercial 라이선스는 오픈 소스 라이선스가 아니며 Premium은 유료임.',
          },
          {
            '이점': '두 플랫폼 지원',
            '실제 사용에서의 의미': 'Android와 iPhone 버전이 있고 iPad, Apple 실리콘 Mac도 지원함.',
            '한계 / 유의사항': '기능이 플랫폼마다 다르며, 2026년 10월 3일 기준 Play 평점은 3.0(리뷰 335건)이었음.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**여러 AI 작업을 하나의 온디바이스 앱으로 처리하고 싶은 분.** 채팅, 번역, 받아쓰기, 이미지·음악 생성이 한 번의 설치에 들어 있습니다.',
          '**Termux 명령을 작성해 주는 에이전트를 원하는 Android 이용자.** 실행 전에 수정하는 흐름은 README에 설명되어 있습니다.',
          '**읽을 수 있는 소스를 원하는 개발자.** 코드는 공개되어 있으며, 의도한 용도가 비상업용 라이선스 조건에 맞는 경우에 해당합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 사용 성능.** PromptQuorum은 앱을 실행하지 않았으므로 속도, 배터리 소모, 출력 품질, 안정성은 평가하지 않았습니다.',
          '**하드웨어 요구 사항.** 확인한 출처에서는 최소 RAM, Android 버전, 칩셋 목록을 찾지 못했습니다.',
          '**Premium이 해제하는 기능.** App Store에는 가격이 나와 있지만, 확인한 두 스토어 텍스트 어디에도 잠긴 기능 목록이 없고 Play의 가격은 표시되지 않았습니다.',
          '**무료 빌드에 광고가 표시되는지 여부.** README의 설정 안내에 간접적인 언급이 있을 뿐입니다.',
          '**제품 웹사이트.** [llm-hub.app](https://www.llm-hub.app) 사이트는 JavaScript가 있어야만 로드되어 내용을 읽을 수 없었으므로, 여기의 사실은 스토어와 저장소에서 가져왔습니다.',
          '**이름이 비슷한 저장소.** 검색 결과에는 거의 같은 이름의 다른 GitHub 저장소가 나타납니다. 이 리뷰는 앱 README와 라이선스 보유자 이메일이 가리키는 [timmyy123/LLM-Hub](https://github.com/timmyy123/LLM-Hub)만 다룹니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '자체 모델 라이브러리를 갖춘 오픈 소스 온디바이스 채팅 클라이언트',
          },
          {
            '앱': '[Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'Google AI Edge 팀이 만든 오픈 소스 온디바이스 앱',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '온디바이스 문서 Q&A를 갖춘 오픈 소스 오프라인 채팅',
          },
          {
            '앱': '[Layla](/ko/power-local-llm/layla-review)',
            '플랫폼': 'Android, iOS',
            '가격 / 라이선스': '유료 / 클로즈드 소스',
            '핵심 차이': '컴패니언·롤플레이 중심이며 선택형 클라우드 모드 제공',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'LLM Hub는 무료입니까?',
            a: '두 스토어 모두 설치는 무료이며 인앱 구매가 있습니다. App Store에는 Premium Lifetime 구매가 $9.99로 표시되고, Google Play는 가격을 밝히지 않은 채 일부 기능이 Premium을 필요로 한다고 설명합니다.',
          },
          {
            q: 'LLM Hub는 오픈 소스입니까?',
            a: '통상적인 의미에서는 아닙니다. 프로젝트는 스스로를 오픈 소스라고 부르지만 LICENSE 파일의 제목은 상업적 사용을 제한하는 PolyForm Noncommercial License 1.0.0입니다. 코드를 읽을 수 있으므로 소스 공개(source-available)라고 설명하는 편이 더 정확합니다.',
          },
          {
            q: 'LLM Hub는 누가 만드나요?',
            a: '개인 개발자입니다. Google Play에는 "timmy boy"(개발자 이름 Yuan Qian, 호주 주소 포함)로, App Store에는 Yuan Qian으로 표기되어 있고, 코드는 GitHub 계정 timmyy123에 있으며 라이선스와 Play 게재 정보에 같은 연락처 이메일이 있습니다.',
          },
          {
            q: '오프라인에서도 작동하나요?',
            a: '모델을 내려받은 뒤에는 로컬 추론이 기기에서 실행됩니다. Play 설명에 따르면 모델 다운로드, 웹 검색, 원격 MCP 서버에는 인터넷이 필요합니다.',
          },
          {
            q: '어떤 플랫폼을 지원하나요?',
            a: 'Google Play를 통한 Android, 그리고 App Store를 통한 iPhone, iPad, Apple 실리콘 Mac, Apple Vision입니다. 일부 기능은 다릅니다. 동영상 생성은 iOS에, Termux 명령은 Android에 표시되어 있습니다.',
          },
          {
            q: 'MCP 지원은 어떤 것인가요?',
            a: 'Play 설명과 README에 따르면 에이전트가 호환되는 Model Context Protocol 서버에 연결해 외부 도구를 쓸 수 있으며, 모든 도구 호출은 실행 전에 승인되어야 합니다.',
          },
          {
            q: '어떤 모델을 쓸 수 있나요?',
            a: 'Google Play에는 Gemma와 Llama가 언급되어 있습니다. README에 따르면 Hugging Face에서 모델을 내려받거나 .task, .litertlm, qnn, .mnn, .gguf 파일을 가져올 수 있습니다.',
          },
          {
            q: '어떤 데이터를 수집하나요?',
            a: '두 스토어 모두 데이터 미수집 선언을 싣고 있습니다. 이는 개발자 본인의 진술이며, 웹 검색과 원격 MCP 서버 같은 온라인 기능은 요청을 기기 밖으로 보냅니다.',
          },
          {
            q: 'PocketPal AI와 비교하면 어떤가요?',
            a: 'PocketPal AI는 MIT 라이선스의 무료 온디바이스 채팅 클라이언트이고, LLM Hub는 에이전트, 미디어 생성, 유료 Premium 등급을 갖춘 더 폭넓은 모음이며 비상업용 소스 공개 라이선스를 따릅니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'LLM Hub는 서류상으로는 이 모바일 로컬 AI 앱 그룹에서 가장 폭넓은 앱입니다. 소스를 공개하는 개발자가 Android와 iPhone 모두에서 채팅, MCP 지원 에이전트, 이미지·음악 생성, 번역, 받아쓰기를 제공합니다. 반면 라이선스는 오픈 소스가 아니라 비상업용 소스 공개이고, Premium은 유료이지만 스토어 텍스트에 범위가 명시되어 있지 않으며, 2026년 10월 3일 기준 Play 평점은 3.0(리뷰 335건)이었고, 하드웨어 요구 사항은 공개되어 있지 않으며, 여기의 어느 것도 직접 테스트되지 않았습니다. 여러 작업을 하나의 온디바이스 앱으로 처리하고 이런 조건을 받아들이는 분께 맞고, 허용적 라이선스의 채팅 클라이언트를 원한다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private Mind](/ko/power-local-llm/private-mind-review)를 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 LLM Hub](https://play.google.com/store/apps/details?id=com.llmhub.llmhub) — 설명, 개발자 정보, 데이터 보안 섹션, 다운로드 수, 평점, 최종 업데이트 날짜. 2026년 10월 3일 확인.',
          '[App Store의 LLM Hub](https://apps.apple.com/au/app/llm-hub/id6762511820) — 가격, Premium Lifetime 구매, 버전, 플랫폼 요구 사항, 개인정보 라벨. 2026년 10월 3일 확인.',
          '[GitHub의 LLM-Hub](https://github.com/timmyy123/LLM-Hub) — README, LICENSE 파일, 버전 번호 확인용 Android·iOS 빌드 파일.',
          '[LLM Hub 개인정보 처리방침](https://www.llm-hub.app/privacy) — 개발자의 개인정보 처리방침으로, 제품 웹사이트에서 링크되어 있습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — MIT 라이선스의 무료 온디바이스 채팅 클라이언트.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — 문서 Q&A를 갖춘 MIT 라이선스의 무료 오프라인 채팅 앱.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 오픈 소스 온디바이스 AI 앱.',
          '[Layla 리뷰](/ko/power-local-llm/layla-review) — 컴패니언 스타일의 유료 온디바이스 앱.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 더 폭넓은 Android 종합 정리.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — 더 폭넓은 iPhone 종합 정리.',
        ],
      },
    },
  },
}
