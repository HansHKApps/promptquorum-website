// TokForge Review: Offline Android AI Chat with Roleplay, Image Generation, and a Speed Leaderboard
// Slug: tokforge-review
// Companion to: pocketpal-ai-review, layla-review, llm-hub-review, private-mind-review,
// best-local-llm-apps-android-2026
// Sources: the Google Play listing and the developer's own website, checked 2026-10-03 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tokforge-review-hero-en.webp',
    title: 'TokForge Review: Offline Android AI Chat with Roleplay and Image Generation',
    seoTitle: 'TokForge Review: Offline Android AI Chat App',
    intro:
      'TokForge is a free Android app, published by a developer listed on Google Play as [Defcon-One](https://play.google.com/store/apps/details?id=dev.tokforge), that runs language models on the phone and combines them with roleplay characters, on-device image generation, text-to-speech with voice cloning, document Q&A, and a built-in benchmark that can post speeds to a public leaderboard. Version 1.0 is on Google Play, while the iPhone and iPad version is a public beta on TestFlight. The app\'s source code is not published. This review is based on the Google Play listing and the developer\'s own website at [tokforge.ai](https://tokforge.ai), checked on 3 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'TokForge review: a free offline AI chat app for Android with roleplay characters, image generation, voice cloning, and a speed leaderboard. Models, privacy, limits.',
    twitterDescription:
      'TokForge review: a free Android app for offline AI chat with roleplay characters, on-device images, voice cloning, and a public speed leaderboard — closed source, iPhone version in beta.',
    audience:
      'Android users who want a free offline chat app with roleplay and media features and who need to know what the sources confirm, what the developer only claims, and what could not be verified.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TokForge review',
    targetKeywords: [
      'tokforge review',
      'tokforge offline ai chat',
      'tokforge android app',
      'offline ai roleplay app android',
      'on-device image generation android app',
      'llama.cpp mnn android app',
      'tokforge vs pocketpal ai',
    ],
    current_models_mentioned: ['Kokoro', 'GGUF models', 'MNN models'],
    current_hardware_mentioned: ['Android', 'Snapdragon', 'Adreno', 'Pixel 9 Pro XL'],
    leadAnswerBlock:
      '**TokForge (version 1.0 as of 3 October 2026) is a free Android app by Defcon-One that runs local language models through llama.cpp or MNN and adds roleplay characters, on-device image generation, voice, and document Q&A, with no account.** Its listing says conversations never leave the device, that web search is off by default, and that a benchmark can optionally post results to a public leaderboard. The source code is not published and the license is not stated, and the iPhone and iPad version is still a TestFlight beta.',
    quickAnswerTop: {
      en: {
        question: 'Is TokForge free and does it run fully offline?',
        answer:
          'Per its listing and website, yes: it is free with no subscription or account, and chat, images, and voice run on the device after models are downloaded. Web search is off by default, and posting benchmark results to the leaderboard is optional; a server you connect yourself would receive your chats.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=dev.tokforge); the iPhone and iPad version is a public beta on TestFlight, not on the App Store.',
          'Three inference paths: llama.cpp for GGUF, MNN, or your own OpenAI-compatible server.',
          'Extras: roleplay characters with imported cards, on-device image generation, Kokoro voices with voice cloning, and document Q&A.',
          'As checked on 3 October 2026: version 1.0, 5K+ Google Play downloads, listing last updated on 20 September 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is TokForge?', anchor: 'what-is-tokforge' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Hardware and Speed', anchor: 'hardware-requirements' },
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
            text: 'TokForge is a free, closed-source Android app by Defcon-One that runs local language models with roleplay characters, on-device image generation, voice, and document Q&A, with its iPhone and iPad version still in TestFlight beta.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from Google Play, download a model that fits your phone, and chat, make images, or talk to characters without an account; the developer also runs a public leaderboard where you can choose to post your phone\'s speed results.',
          },
        ],
        items: [
          'Developer: listed as Defcon-One on Google Play, with Isaac Maple and a United States location shown in the developer details and a contact email on the listing.',
          'Price and license: free with no subscription or account; no license and no public source repository were found, and the developer\'s own comparison guide lists "No public repo".',
          'Engines: llama.cpp (GGUF) with OpenCL and Vulkan paths, MNN with OpenCL, or an OpenAI-compatible server you connect yourself.',
          'Scope: roleplay characters, on-device images, Kokoro voices with cloning, document Q&A, a 52-model catalog with Hugging Face search, and an optional public speed leaderboard.',
          'Signals as checked on 3 October 2026: version 1.0, 5K+ Google Play downloads, listing updated on 20 September 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play listing and the developer\'s own website, checked on 3 October 2026. Performance figures on the site are the developer\'s claims, and PromptQuorum has not tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-tokforge',
        title: 'What Is TokForge?',
        content: [
          '**TokForge is an offline-first Android chat app that bundles a local model runner with roleplay, image, voice, and document tools.** According to its [Google Play listing](https://play.google.com/store/apps/details?id=dev.tokforge), it runs full models on the phone with no cloud or account, supports characters imported from chub.ai and TavernAI cards, and picks the fastest engine for your chip automatically.',
          'The developer\'s website describes version 1.0 as the first full release and says the app is much smaller than established alternatives. That candor matters for expectations: it has a small install base, and its iPhone and iPad version is only in TestFlight beta.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**TokForge is distributed through Google Play on Android; the Apple version is a TestFlight beta rather than an App Store release.**',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)',
          },
          {
            'Platform': 'iPhone / iPad',
            'Where to get it': 'Public beta via TestFlight (see [tokforge.ai](https://tokforge.ai))',
          },
          {
            'Platform': 'Source code',
            'Where to get it': 'Not published',
          },
        ],
        note: 'This page is companion material to the app\'s entry in the [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Version as verified on 3 October 2026: 1.0, from the Play description and the developer\'s website.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The sources describe the flow only in outline; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Install and let the app size up your phone',
            whyItMatters: 'The app detects device capabilities and curates the models offered, according to the developer\'s website.',
          },
          {
            title: 'Download a model',
            whyItMatters: 'Choose from the curated catalog of 52 models or search Hugging Face through the built-in downloader.',
          },
          {
            title: 'Optionally run the benchmark',
            whyItMatters: 'AutoForge benchmarks model and backend combinations on your hardware; posting to the public leaderboard is your choice.',
          },
          {
            title: 'Chat, create, or ask your documents',
            whyItMatters: 'Start a chat, create or import a character, generate an image, or add a document and ask about it.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description or the developer\'s website; none has been independently tested.**',
        ],
        items: [
          '**Chat and roleplay.** Create characters or import cards from chub.ai and TavernAI (PNG or JSON), with personas, lorebooks, alternate greetings, and group chats.',
          '**Images.** On-device generation that runs on the CPU everywhere, with GPU acceleration on Adreno and NPU acceleration on supported Snapdragon devices. The developer cites about 31 seconds for a 512x512 image on a Pixel 9 Pro XL.',
          '**Voice.** Kokoro text-to-speech with several voices, voice cloning from about a minute of recorded audio, and voice input.',
          '**Documents and memory.** Questions about PDF, DOCX, EPUB, Markdown, CSV, and text files, plus long-term memory and a knowledge graph.',
          '**Engines and models.** llama.cpp (GGUF) with OpenCL and Vulkan, MNN with OpenCL, or an OpenAI-compatible server, with automatic routing by chip and a 52-model catalog.',
          '**Developer API and backup.** Local API endpoints for automation (270+ per Google Play, 284 per the website) and backup and restore of conversations, characters, and settings.',
        ],
        note: 'The Play text and the website differ slightly (for example on the endpoint count), so the current build and its settings screen are the final authority.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware and Speed',
        content: [
          '**The developer\'s website states a minimum of 4 GB of RAM for small models and 8 GB or more for larger ones.** Speed depends on the chip: the listing describes GPU paths on Adreno and NPU paths on supported Snapdragon devices, with CPU fallback elsewhere.',
          'The app\'s AutoForge benchmark measures each model and backend combination on your phone, and the public leaderboard at leaderboard.tokforge.ai collects device-submitted results if you choose to post. Those figures are user-submitted and developer-hosted, not independent measurements.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Online Features',
        content: [
          '**The Google Play Data safety section declares "No data collected" and "No data shared with third parties", and the description claims zero analytics and zero telemetry.** The website adds that chats are stored only on the device.',
          'Three features go beyond that picture, by the listing\'s own description: web search is off by default and, when turned on, fetches current information; posting results to the public leaderboard is optional; and a connected OpenAI-compatible server receives whatever you send it. Because the source is not published, none of this can be checked against code, and these are the developer\'s declarations, not audit results.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not inspected the app\'s network traffic. Anyone handling confidential data should verify behavior with web search and leaderboard posting off and on.',
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
            'Benefit': 'Free and no account',
            'What it means in real use': 'Install and use without sign-up or subscription.',
            'Limitation / caveat': 'Source is not published and no license is stated.',
          },
          {
            'Benefit': 'Roleplay and media in one app',
            'What it means in real use': 'Characters, images, voices, and documents sit in one install.',
            'Limitation / caveat': 'Breadth is described by the developer; quality is untested here.',
          },
          {
            'Benefit': 'Chip-aware engines',
            'What it means in real use': 'llama.cpp, MNN, and a remote server with automatic routing.',
            'Limitation / caveat': 'Best paths depend on the SoC; speeds vary a lot by phone.',
          },
          {
            'Benefit': 'Public benchmark data',
            'What it means in real use': 'A leaderboard shows how phones perform before you commit.',
            'Limitation / caveat': 'Results are user-submitted and hosted by the developer.',
          },
          {
            'Benefit': 'Android release is stable-labeled',
            'What it means in real use': 'Version 1.0 is on Google Play.',
            'Limitation / caveat': 'Small install base (5K+), and the iPhone version is a beta.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Android users who want offline roleplay with imported character cards.** Chub.ai and TavernAI card import is a headline feature.',
          '**People who want images, voice, and documents without cloud services.** All three are described as running on the device.',
          '**Users who like seeing benchmark data for their chip.** The built-in benchmark and leaderboard are designed for that comparison.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**License and source code.** No license text or public repository was found, and the developer\'s own guide lists "No public repo", so behavior cannot be checked against code.',
          '**Hands-on performance and quality.** PromptQuorum did not run the app, so speed, battery use, and output quality are not assessed.',
          '**In-app purchases and ads.** The Play page read shows no such labels, but the sources do not explicitly rule them out.',
          '**Developer background.** Google Play names Defcon-One, with Isaac Maple and a United States location in the developer details; no company registration or track record was found in the sources read.',
          '**Not for iPhone users yet.** The Apple version is a TestFlight beta, not an App Store release.',
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
            'App': '[Layla](/power-local-llm/layla-review)',
            'Platforms': 'Android, iOS',
            'Price / license': 'Paid / closed source',
            'Key difference': 'Companion and roleplay focus with an optional cloud mode',
          },
          {
            'App': '[LLM Hub](/power-local-llm/llm-hub-review)',
            'Platforms': 'Android, iOS',
            'Price / license': 'Free + IAP / PolyForm NC',
            'Key difference': 'Wider on-device suite with an MCP agent and media generation',
          },
          {
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source offline chat with on-device document Q&A',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is TokForge free?',
            a: 'Yes. Both Google Play and the developer\'s website describe it as free with no subscription or account. The Play page read shows no in-app-purchase label, though the sources do not explicitly rule purchases out.',
          },
          {
            q: 'Is TokForge open source?',
            a: 'No. No public source repository or license was found, and the developer\'s own comparison guide lists "No public repo".',
          },
          {
            q: 'Who makes TokForge?',
            a: 'Google Play lists the developer as Defcon-One, with Isaac Maple and a United States location in the developer details and a contact email on the listing.',
          },
          {
            q: 'Does it work offline?',
            a: 'Per the listing, chat, images, and voice run on the device once models are downloaded. Web search is off by default, leaderboard posting is optional, and downloads and any connected server need a network.',
          },
          {
            q: 'Is there an iPhone version?',
            a: 'Only as a public beta on TestFlight. The Android version is on Google Play.',
          },
          {
            q: 'What hardware does it need?',
            a: 'The developer\'s website states at least 4 GB of RAM for small models and 8 GB or more for larger ones, with GPU and NPU paths on supported Snapdragon phones.',
          },
          {
            q: 'Which engines and models does it use?',
            a: 'llama.cpp for GGUF models, MNN, or an OpenAI-compatible server you connect yourself, plus a 52-model catalog and a Hugging Face downloader.',
          },
          {
            q: 'Can it import character cards?',
            a: 'Yes. The description says cards from chub.ai and TavernAI (PNG or JSON) can be imported, with personas, lorebooks, alternate greetings, and group chats.',
          },
          {
            q: 'How does it compare with PocketPal AI?',
            a: 'PocketPal AI is a free MIT-licensed chat client on iOS and Android, while TokForge is closed source with roleplay, image, and voice features on Android and an iPhone beta.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'TokForge packs roleplay characters, on-device images, voice cloning, document Q&A, and chip-aware engine routing into a free Android app, and its public benchmark leaderboard is an unusual attempt at transparency about speed. Against that, the source is not published and no license is stated, the install base is small at 5K+, the iPhone version is still in beta, performance figures come from the developer, and nothing here has been tested hands-on. It suits Android users who want a free offline roleplay-and-media app and accept those terms; readers who want auditable code can compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private Mind](/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[TokForge on Google Play](https://play.google.com/store/apps/details?id=dev.tokforge) — description, developer details, Data safety section, download count, and last-updated date, checked 3 October 2026.',
          '[tokforge.ai](https://tokforge.ai) — version, platforms, hardware guidance, and the developer\'s own comparison guide, checked 3 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client.',
          '[Layla Review](/power-local-llm/layla-review) — a paid companion and roleplay app.',
          '[LLM Hub Review](/power-local-llm/llm-hub-review) — a wider on-device AI suite for Android and iPhone.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'TokForge Review: Offline Android AI Chat with Roleplay and Image Generation',
      description:
        'TokForge review: a free offline AI chat app for Android with roleplay characters, on-device image generation, voice cloning, and a public speed leaderboard. Privacy, hardware, and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/tokforge-review',
      inLanguage: 'en',
      datePublished: '2026-10-03',
      dateModified: '2026-10-03',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android users evaluating a free offline AI chat app with roleplay and media features' },
      about: [
        { '@type': 'Thing', name: 'TokForge' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/tokforge-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'TokForge Review', item: 'https://promptquorum.com/power-local-llm/tokforge-review' },
      ],
    },
  },
}
