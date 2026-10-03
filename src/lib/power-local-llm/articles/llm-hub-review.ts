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
          '**Product website.** The site at llm-hub.app loads only with JavaScript, so its content could not be read; facts here come from the stores and the repository.',
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
}
