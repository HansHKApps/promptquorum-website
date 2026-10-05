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
    dateModified: '2026-10-05',
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
      { label: 'From the Maker', anchor: 'from-the-maker' },
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
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'From the Maker',
        content: [
          'Isaac Maple, the developer behind TokForge, shared the following about the app and the reasons for building it. It is presented as the developer\'s own words, lightly edited for readability, not as PromptQuorum\'s independent editorial assessment:',
          '"I think our best feature is autoForge, which finds the best and fastest inference setup for each handset and model: CPU, OpenCL or Vulkan, thread count and context size.',
          'I originally had 4 of these character cards from the get-go, but until maybe a month ago the app didn\'t offer the plain system default without a prompt, which annoyed some folks.',
          'The app is really just me and one other buddy, guardian37x in the Discord.',
          'I convert and try to optimize a lot of the smaller LLMs for Edge AI and upload them to my Hugging Face account. I think there are around 85 models there now.',
          'As for why I built it: when I started, there were a few other options for mobile inference, but most were llama/GGUF based, cost money, were filtered, had ads, and weren\'t really performance-based or didn\'t have an API backend to really dive in. I also hadn\'t seen any that used MNN, and as an engineer, MNN at that time was sometimes 50% faster than GGUF, which was really exciting.',
          'So that\'s why I built it. I figure AI inference costs will keep going up and become more expensive for regular people to access AI they own, on their own devices, that isn\'t filtered or censored. So I wanted to make something that addressed that and was fast, free and without ads."',
        ],
        note: '— Isaac Maple, developer',
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
      dateModified: '2026-10-05',
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
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tokforge-review-hero-de.webp',
    title: 'TokForge-Rezension: Offline-KI-Chat für Android mit Rollenspiel und Bildgenerierung',
    seoTitle: 'TokForge-Rezension: Offline-KI-Chat-App für Android',
    intro:
      'TokForge ist eine kostenlose Android-App eines Entwicklers, der bei Google Play als [Defcon-One](https://play.google.com/store/apps/details?id=dev.tokforge) geführt wird. Sie führt Sprachmodelle auf dem Smartphone aus und verbindet sie mit Rollenspiel-Charakteren, Bildgenerierung auf dem Gerät, Text-to-Speech mit Stimmklonen, Dokumenten-Q&A und einem integrierten Benchmark, der Geschwindigkeiten in einer öffentlichen Rangliste veröffentlichen kann. Version 1.0 ist bei Google Play erhältlich, während die Version für iPhone und iPad eine öffentliche Beta bei TestFlight ist. Der Quellcode der App ist nicht veröffentlicht. Diese Rezension stützt sich auf den Google-Play-Eintrag und die eigene Website des Entwicklers unter [tokforge.ai](https://tokforge.ai), geprüft am 3. Oktober 2026; PromptQuorum hat die App nicht praktisch getestet.',
    metaDescription:
      'TokForge-Rezension: kostenlose Offline-KI-App für Android mit Rollenspiel, Bildgenerierung, Stimmklonen und Speed-Rangliste. Modelle, Datenschutz, Grenzen.',
    twitterDescription:
      'TokForge-Rezension: eine kostenlose Android-App für Offline-KI-Chat mit Rollenspiel-Charakteren, Bildern auf dem Gerät, Stimmklonen und öffentlicher Geschwindigkeits-Rangliste — Closed Source, iPhone-Version in der Beta.',
    audience:
      'Android-Nutzer, die eine kostenlose Offline-Chat-App mit Rollenspiel- und Medienfunktionen suchen und wissen müssen, was die Quellen bestätigen, was der Entwickler nur behauptet und was sich nicht überprüfen ließ.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TokForge Rezension',
    targetKeywords: [
      'tokforge test',
      'tokforge offline ki chat',
      'tokforge android app',
      'offline ki rollenspiel app android',
      'bildgenerierung auf dem gerät android app',
      'llama.cpp mnn android app',
      'tokforge vs pocketpal ai',
    ],
    current_models_mentioned: ['Kokoro', 'GGUF models', 'MNN models'],
    current_hardware_mentioned: ['Android', 'Snapdragon', 'Adreno', 'Pixel 9 Pro XL'],
    leadAnswerBlock:
      '**TokForge (Version 1.0, Stand 3. Oktober 2026) ist eine kostenlose Android-App von Defcon-One, die lokale Sprachmodelle über llama.cpp oder MNN ausführt und Rollenspiel-Charaktere, Bildgenerierung auf dem Gerät, Sprache und Dokumenten-Q&A ergänzt, ohne Konto.** Laut Eintrag verlassen Unterhaltungen das Gerät nie, die Websuche ist standardmäßig aus, und ein Benchmark kann Ergebnisse optional in einer öffentlichen Rangliste veröffentlichen. Der Quellcode ist nicht veröffentlicht, die Lizenz wird nicht genannt, und die Version für iPhone und iPad ist noch eine TestFlight-Beta.',
    quickAnswerTop: {
      de: {
        question: 'Ist TokForge kostenlos, und läuft es vollständig offline?',
        answer:
          'Laut Eintrag und Website ja: Die App ist kostenlos, ohne Abo und ohne Konto, und Chat, Bilder und Sprache laufen nach dem Herunterladen der Modelle auf dem Gerät. Die Websuche ist standardmäßig aus, und das Veröffentlichen von Benchmark-Ergebnissen in der Rangliste ist optional; ein Server, den Sie selbst anbinden, würde Ihre Chats erhalten.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=dev.tokforge); die Version für iPhone und iPad ist eine öffentliche Beta bei TestFlight, nicht im App Store.',
          'Drei Inferenzwege: llama.cpp für GGUF, MNN oder ein eigener OpenAI-kompatibler Server.',
          'Extras: Rollenspiel-Charaktere mit importierten Karten, Bildgenerierung auf dem Gerät, Kokoro-Stimmen mit Stimmklonen und Dokumenten-Q&A.',
          'Stand der Prüfung am 3. Oktober 2026: Version 1.0, 5K+ Downloads bei Google Play, Eintrag zuletzt aktualisiert am 20. September 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist TokForge?', anchor: 'what-is-tokforge' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Hardware und Geschwindigkeit', anchor: 'hardware-requirements' },
      { label: 'Datenschutz und Online-Funktionen', anchor: 'privacy' },
      { label: 'Vom Entwickler', anchor: 'from-the-maker' },
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
            text: 'TokForge ist eine kostenlose Android-App von Defcon-One ohne veröffentlichten Quellcode, die lokale Sprachmodelle mit Rollenspiel-Charakteren, Bildgenerierung auf dem Gerät, Sprache und Dokumenten-Q&A ausführt; die Version für iPhone und iPad befindet sich noch in der TestFlight-Beta.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App über Google Play, laden ein zu Ihrem Smartphone passendes Modell herunter und chatten, erzeugen Bilder oder sprechen mit Charakteren, ohne Konto; der Entwickler betreibt außerdem eine öffentliche Rangliste, in der Sie die Geschwindigkeitsergebnisse Ihres Smartphones auf Wunsch veröffentlichen können.',
          },
        ],
        items: [
          'Entwickler: bei Google Play als Defcon-One geführt, mit Isaac Maple und einem Standort in den Vereinigten Staaten in den Entwicklerangaben sowie einer Kontakt-E-Mail im Eintrag.',
          'Preis und Lizenz: kostenlos, ohne Abo und ohne Konto; es wurden weder eine Lizenz noch ein öffentliches Quellcode-Repository gefunden, und der eigene Vergleichsratgeber des Entwicklers führt „No public repo“.',
          'Engines: llama.cpp (GGUF) mit OpenCL- und Vulkan-Pfaden, MNN mit OpenCL oder ein OpenAI-kompatibler Server, den Sie selbst anbinden.',
          'Umfang: Rollenspiel-Charaktere, Bilder auf dem Gerät, Kokoro-Stimmen mit Klonen, Dokumenten-Q&A, ein Katalog mit 52 Modellen samt Hugging-Face-Suche und eine optionale öffentliche Geschwindigkeits-Rangliste.',
          'Signale, Stand der Prüfung am 3. Oktober 2026: Version 1.0, 5K+ Downloads bei Google Play, Eintrag aktualisiert am 20. September 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den Google-Play-Eintrag und die eigene Website des Entwicklers, geprüft am 3. Oktober 2026. Leistungsangaben auf der Website sind Aussagen des Entwicklers, und PromptQuorum hat die App weder getestet noch einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-tokforge',
        title: 'Was ist TokForge?',
        content: [
          '**TokForge ist eine Offline-first-Chat-App für Android, die einen lokalen Modell-Runner mit Werkzeugen für Rollenspiel, Bilder, Sprache und Dokumente bündelt.** Laut [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=dev.tokforge) führt sie vollständige Modelle ohne Cloud und ohne Konto auf dem Smartphone aus, unterstützt Charaktere aus chub.ai und TavernAI-Karten und wählt automatisch die schnellste Engine für Ihren Chip.',
          'Die Website des Entwicklers beschreibt Version 1.0 als erste vollständige Veröffentlichung und sagt, die App sei deutlich kleiner als etablierte Alternativen. Diese Offenheit ist für die Erwartungen wichtig: Die Nutzerbasis ist klein, und die Version für iPhone und iPad befindet sich nur in der TestFlight-Beta.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**TokForge wird für Android über Google Play verbreitet; die Apple-Version ist eine TestFlight-Beta und keine Veröffentlichung im App Store.**',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)',
          },
          {
            'Plattform': 'iPhone / iPad',
            'Bezugsquelle': 'Öffentliche Beta über TestFlight (siehe [tokforge.ai](https://tokforge.ai))',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': 'Nicht veröffentlicht',
          },
        ],
        note: 'Diese Seite ist Begleitmaterial zum Eintrag der App im [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Version, geprüft am 3. Oktober 2026: 1.0, laut Play-Beschreibung und Website des Entwicklers.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Quellen beschreiben den Ablauf nur in groben Zügen; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Installieren und die App Ihr Smartphone einschätzen lassen',
            whyItMatters: 'Laut Website des Entwicklers erkennt die App die Fähigkeiten des Geräts und stellt das angebotene Modellangebot entsprechend zusammen.',
          },
          {
            title: 'Modell herunterladen',
            whyItMatters: 'Wählen Sie aus dem kuratierten Katalog mit 52 Modellen oder suchen Sie über den integrierten Downloader bei Hugging Face.',
          },
          {
            title: 'Optional den Benchmark ausführen',
            whyItMatters: 'AutoForge testet Kombinationen aus Modell und Backend auf Ihrer Hardware; das Veröffentlichen in der öffentlichen Rangliste liegt bei Ihnen.',
          },
          {
            title: 'Chatten, Inhalte erstellen oder Ihre Dokumente befragen',
            whyItMatters: 'Starten Sie einen Chat, erstellen oder importieren Sie einen Charakter, erzeugen Sie ein Bild oder fügen Sie ein Dokument hinzu und stellen Sie Fragen dazu.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus der Google-Play-Beschreibung oder der Website des Entwicklers; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Chat und Rollenspiel.** Charaktere erstellen oder Karten aus chub.ai und TavernAI (PNG oder JSON) importieren, mit Personas, Lorebooks, alternativen Begrüßungen und Gruppenchats.',
          '**Bilder.** Generierung auf dem Gerät, die überall auf der CPU läuft, mit GPU-Beschleunigung auf Adreno und NPU-Beschleunigung auf unterstützten Snapdragon-Geräten. Der Entwickler nennt rund 31 Sekunden für ein Bild mit 512x512 Pixeln auf einem Pixel 9 Pro XL.',
          '**Sprache.** Kokoro-Text-to-Speech mit mehreren Stimmen, Stimmklonen aus etwa einer Minute Aufnahme und Spracheingabe.',
          '**Dokumente und Gedächtnis.** Fragen zu PDF-, DOCX-, EPUB-, Markdown-, CSV- und Textdateien sowie ein Langzeitgedächtnis und ein Wissensgraph.',
          '**Engines und Modelle.** llama.cpp (GGUF) mit OpenCL und Vulkan, MNN mit OpenCL oder ein OpenAI-kompatibler Server, mit automatischer Zuweisung nach Chip und einem Katalog mit 52 Modellen.',
          '**Entwickler-API und Backup.** Lokale API-Endpunkte für Automatisierung (270+ laut Google Play, 284 laut Website) sowie Sicherung und Wiederherstellung von Unterhaltungen, Charakteren und Einstellungen.',
        ],
        note: 'Der Play-Text und die Website weichen leicht voneinander ab (zum Beispiel bei der Zahl der Endpunkte); maßgeblich sind daher der aktuelle Build und sein Einstellungsbildschirm.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware und Geschwindigkeit',
        content: [
          '**Die Website des Entwicklers nennt mindestens 4 GB RAM für kleine Modelle und 8 GB oder mehr für größere.** Die Geschwindigkeit hängt vom Chip ab: Der Eintrag beschreibt GPU-Pfade auf Adreno und NPU-Pfade auf unterstützten Snapdragon-Geräten, mit CPU-Fallback anderswo.',
          'Der AutoForge-Benchmark der App misst jede Kombination aus Modell und Backend auf Ihrem Smartphone, und die öffentliche Rangliste unter leaderboard.tokforge.ai sammelt von Geräten übermittelte Ergebnisse, wenn Sie sich fürs Veröffentlichen entscheiden. Diese Werte werden von Nutzern übermittelt und vom Entwickler gehostet; es sind keine unabhängigen Messungen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Online-Funktionen',
        content: [
          '**Der Abschnitt „Datensicherheit“ bei Google Play erklärt „Keine Daten erhoben“ und „Keine Daten an Dritte weitergegeben“, und die Beschreibung behauptet null Analytics und null Telemetrie.** Die Website ergänzt, dass Chats nur auf dem Gerät gespeichert werden.',
          'Drei Funktionen gehen laut der eigenen Beschreibung des Eintrags über dieses Bild hinaus: Die Websuche ist standardmäßig aus und holt, wenn sie eingeschaltet wird, aktuelle Informationen; das Veröffentlichen von Ergebnissen in der öffentlichen Rangliste ist optional; und ein angebundener OpenAI-kompatibler Server erhält alles, was Sie ihm senden. Da der Quellcode nicht veröffentlicht ist, lässt sich nichts davon am Code prüfen, und es handelt sich um Erklärungen des Entwicklers, nicht um Prüfergebnisse.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat den Netzwerkverkehr der App nicht geprüft. Wer vertrauliche Daten verarbeitet, sollte das Verhalten sowohl mit ausgeschalteter als auch mit eingeschalteter Websuche und Ranglisten-Veröffentlichung überprüfen.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Vom Entwickler',
        content: [
          'Isaac Maple, der Entwickler hinter TokForge, hat Folgendes zur App und zu den Gründen für ihre Entwicklung mitgeteilt. Es wird als eigene Worte des Entwicklers wiedergegeben, zur besseren Lesbarkeit leicht redigiert, nicht als unabhängige redaktionelle Einschätzung von PromptQuorum:',
          '"Ich denke, unser bestes Feature ist autoForge, das für jedes Gerät und jedes Modell das beste und schnellste Inferenz-Setup findet: CPU, OpenCL oder Vulkan, Thread-Anzahl und Kontextgröße.',
          'Ich hatte ursprünglich von Anfang an 4 dieser Charakterkarten, aber bis vor etwa einem Monat bot die App den reinen Systemstandard ohne Prompt nicht an, was einige Leute geärgert hat.',
          'Die App besteht eigentlich nur aus mir und einem weiteren Kumpel, guardian37x auf Discord.',
          'Ich konvertiere und optimiere viele der kleineren LLMs für Edge AI und lade sie in meinen Hugging-Face-Account hoch. Ich glaube, es sind dort inzwischen rund 85 Modelle.',
          'Warum ich sie gebaut habe: Als ich anfing, gab es einige andere Optionen für mobile Inferenz, aber die meisten basierten auf llama/GGUF, kosteten Geld, waren gefiltert, hatten Werbung und waren nicht wirklich leistungsorientiert oder hatten kein API-Backend, mit dem man richtig tief einsteigen konnte. Außerdem hatte ich noch keine gesehen, die MNN nutzte, und als Ingenieur fand ich es sehr spannend, dass MNN damals manchmal 50 % schneller war als GGUF.',
          'Deshalb habe ich sie gebaut. Ich gehe davon aus, dass die Kosten für KI-Inferenz weiter steigen und es für normale Menschen teurer wird, Zugang zu KI zu bekommen, die ihnen gehört, auf ihren eigenen Geräten läuft und weder gefiltert noch zensiert ist. Also wollte ich etwas bauen, das genau das angeht und dabei schnell, kostenlos und werbefrei ist."',
        ],
        note: '— Isaac Maple, Entwickler',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung in der Praxis', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Kostenlos und ohne Konto',
            'Bedeutung in der Praxis': 'Installieren und nutzen ohne Registrierung oder Abo.',
            'Einschränkung / Hinweis': 'Der Quellcode ist nicht veröffentlicht, und es wird keine Lizenz genannt.',
          },
          {
            'Vorteil': 'Rollenspiel und Medien in einer App',
            'Bedeutung in der Praxis': 'Charaktere, Bilder, Stimmen und Dokumente stecken in einer Installation.',
            'Einschränkung / Hinweis': 'Den Umfang beschreibt der Entwickler; die Qualität wurde hier nicht getestet.',
          },
          {
            'Vorteil': 'Chipbezogene Engines',
            'Bedeutung in der Praxis': 'llama.cpp, MNN und ein Remote-Server mit automatischer Zuweisung.',
            'Einschränkung / Hinweis': 'Die besten Pfade hängen vom SoC ab; die Geschwindigkeit schwankt je nach Smartphone stark.',
          },
          {
            'Vorteil': 'Öffentliche Benchmark-Daten',
            'Bedeutung in der Praxis': 'Eine Rangliste zeigt, wie Smartphones abschneiden, bevor Sie sich festlegen.',
            'Einschränkung / Hinweis': 'Die Ergebnisse werden von Nutzern übermittelt und vom Entwickler gehostet.',
          },
          {
            'Vorteil': 'Android-Version als stabil gekennzeichnet',
            'Bedeutung in der Praxis': 'Version 1.0 ist bei Google Play erhältlich.',
            'Einschränkung / Hinweis': 'Kleine Nutzerbasis (5K+), und die iPhone-Version ist eine Beta.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Android-Nutzer, die Offline-Rollenspiel mit importierten Charakterkarten wollen.** Der Import von Karten aus chub.ai und TavernAI ist eine Kernfunktion.',
          '**Menschen, die Bilder, Sprache und Dokumente ohne Cloud-Dienste wollen.** Alle drei laufen laut Beschreibung auf dem Gerät.',
          '**Nutzer, die gern Benchmark-Daten für ihren Chip sehen.** Der integrierte Benchmark und die Rangliste sind für diesen Vergleich gedacht.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Lizenz und Quellcode.** Es wurden weder ein Lizenztext noch ein öffentliches Repository gefunden, und der eigene Ratgeber des Entwicklers führt „No public repo“; das Verhalten lässt sich daher nicht am Code prüfen.',
          '**Praktische Leistung und Qualität.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Akkuverbrauch und Ausgabequalität sind daher nicht bewertet.',
          '**In-App-Käufe und Werbung.** Die gelesene Play-Seite zeigt keine solchen Hinweise, doch die Quellen schließen sie nicht ausdrücklich aus.',
          '**Hintergrund des Entwicklers.** Google Play nennt Defcon-One, mit Isaac Maple und einem Standort in den Vereinigten Staaten in den Entwicklerangaben; in den gelesenen Quellen fanden sich weder eine Firmenregistrierung noch Referenzen.',
          '**Noch nichts für iPhone-Nutzer.** Die Apple-Version ist eine TestFlight-Beta und keine Veröffentlichung im App Store.',
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
            'App': '[Layla](/de/power-local-llm/layla-review)',
            'Plattformen': 'Android, iOS',
            'Preis / Lizenz': 'Kostenpflichtig / Closed Source',
            'Wesentlicher Unterschied': 'Fokus auf Begleiter und Rollenspiel mit optionalem Cloud-Modus',
          },
          {
            'App': '[LLM Hub](/de/power-local-llm/llm-hub-review)',
            'Plattformen': 'Android, iOS',
            'Preis / Lizenz': 'Kostenlos + IAP / PolyForm NC',
            'Wesentlicher Unterschied': 'Breitere On-Device-Suite mit MCP-Agent und Mediengenerierung',
          },
          {
            'App': '[Private Mind](/de/power-local-llm/private-mind-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Offline-Chat mit Dokumenten-Q&A auf dem Gerät',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist TokForge kostenlos?',
            a: 'Ja. Sowohl Google Play als auch die Website des Entwicklers beschreiben die App als kostenlos, ohne Abo und ohne Konto. Die gelesene Play-Seite zeigt keinen Hinweis auf In-App-Käufe, doch die Quellen schließen Käufe nicht ausdrücklich aus.',
          },
          {
            q: 'Ist TokForge Open Source?',
            a: 'Nein. Es wurden weder ein öffentliches Quellcode-Repository noch eine Lizenz gefunden, und der eigene Vergleichsratgeber des Entwicklers führt „No public repo“.',
          },
          {
            q: 'Wer macht TokForge?',
            a: 'Google Play führt den Entwickler als Defcon-One, mit Isaac Maple und einem Standort in den Vereinigten Staaten in den Entwicklerangaben sowie einer Kontakt-E-Mail im Eintrag.',
          },
          {
            q: 'Funktioniert sie offline?',
            a: 'Laut Eintrag laufen Chat, Bilder und Sprache auf dem Gerät, sobald die Modelle heruntergeladen sind. Die Websuche ist standardmäßig aus, das Veröffentlichen in der Rangliste ist optional, und Downloads sowie ein angebundener Server brauchen ein Netzwerk.',
          },
          {
            q: 'Gibt es eine iPhone-Version?',
            a: 'Nur als öffentliche Beta bei TestFlight. Die Android-Version ist bei Google Play erhältlich.',
          },
          {
            q: 'Welche Hardware braucht sie?',
            a: 'Die Website des Entwicklers nennt mindestens 4 GB RAM für kleine Modelle und 8 GB oder mehr für größere, mit GPU- und NPU-Pfaden auf unterstützten Snapdragon-Smartphones.',
          },
          {
            q: 'Welche Engines und Modelle nutzt sie?',
            a: 'llama.cpp für GGUF-Modelle, MNN oder ein OpenAI-kompatibler Server, den Sie selbst anbinden, dazu ein Katalog mit 52 Modellen und ein Hugging-Face-Downloader.',
          },
          {
            q: 'Kann sie Charakterkarten importieren?',
            a: 'Ja. Laut Beschreibung lassen sich Karten aus chub.ai und TavernAI (PNG oder JSON) importieren, mit Personas, Lorebooks, alternativen Begrüßungen und Gruppenchats.',
          },
          {
            q: 'Wie schneidet sie im Vergleich zu PocketPal AI ab?',
            a: 'PocketPal AI ist ein kostenloser, MIT-lizenzierter Chat-Client für iOS und Android, während TokForge Closed Source ist und Rollenspiel-, Bild- und Sprachfunktionen für Android sowie eine iPhone-Beta bietet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'TokForge packt Rollenspiel-Charaktere, Bilder auf dem Gerät, Stimmklonen, Dokumenten-Q&A und chipbezogene Engine-Zuweisung in eine kostenlose Android-App, und die öffentliche Benchmark-Rangliste ist ein ungewöhnlicher Versuch, bei der Geschwindigkeit Transparenz zu schaffen. Dem stehen gegenüber: Der Quellcode ist nicht veröffentlicht und es wird keine Lizenz genannt, die Nutzerbasis ist mit 5K+ klein, die iPhone-Version ist noch in der Beta, die Leistungsangaben stammen vom Entwickler, und nichts davon wurde praktisch getestet. Die App eignet sich für Android-Nutzer, die eine kostenlose Offline-App für Rollenspiel und Medien wollen und diese Bedingungen akzeptieren; wer prüfbaren Code möchte, kann [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private Mind](/de/power-local-llm/private-mind-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[TokForge bei Google Play](https://play.google.com/store/apps/details?id=dev.tokforge) — Beschreibung, Entwicklerangaben, Abschnitt „Datensicherheit“, Download-Zahl und Datum der letzten Aktualisierung, geprüft am 3. Oktober 2026.',
          '[tokforge.ai](https://tokforge.ai) — Version, Plattformen, Hardwarehinweise und der eigene Vergleichsratgeber des Entwicklers, geprüft am 3. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät.',
          '[Layla-Rezension](/de/power-local-llm/layla-review) — eine kostenpflichtige App für Begleiter und Rollenspiel.',
          '[LLM-Hub-Rezension](/de/power-local-llm/llm-hub-review) — eine breitere On-Device-KI-Suite für Android und iPhone.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App.',
          '[Die besten lokalen LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tokforge-review-hero-es.webp',
    title: 'Análisis de TokForge: chat de IA offline para Android con juegos de rol e imágenes',
    seoTitle: 'Análisis de TokForge: app de chat de IA offline',
    intro:
      'TokForge es una app gratuita para Android, publicada por un desarrollador que figura en Google Play como [Defcon-One](https://play.google.com/store/apps/details?id=dev.tokforge), que ejecuta modelos de lenguaje en el teléfono y los combina con personajes de juegos de rol, generación de imágenes en el dispositivo, texto a voz con clonación de voz, preguntas sobre documentos y un benchmark integrado que puede publicar velocidades en un ranking público. La versión 1.0 está en Google Play, mientras que la versión para iPhone y iPad es una beta pública en TestFlight. El código fuente de la app no está publicado. Este análisis se basa en la ficha de Google Play y en el sitio web del propio desarrollador, [tokforge.ai](https://tokforge.ai), consultados el 3 de octubre de 2026; PromptQuorum no ha probado la app de forma práctica.',
    metaDescription:
      'Análisis de TokForge: app gratuita de chat de IA offline para Android con personajes de rol, imágenes, voz y ranking de velocidad. Privacidad y límites.',
    twitterDescription:
      'Análisis de TokForge: una app gratuita para Android de chat de IA offline con personajes de rol, imágenes en el dispositivo, clonación de voz y un ranking público de velocidad; código cerrado y versión para iPhone en beta.',
    audience:
      'Usuarios de Android que quieren una app de chat offline gratuita con juegos de rol y funciones multimedia, y que necesitan saber qué confirman las fuentes, qué es solo una afirmación del desarrollador y qué no se pudo verificar.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de TokForge',
    targetKeywords: [
      'opiniones tokforge',
      'tokforge chat de ia offline',
      'tokforge app android',
      'app de ia offline para juegos de rol android',
      'app de generación de imágenes en el dispositivo android',
      'app android llama.cpp mnn',
      'tokforge vs pocketpal ai',
    ],
    current_models_mentioned: ['Kokoro', 'GGUF models', 'MNN models'],
    current_hardware_mentioned: ['Android', 'Snapdragon', 'Adreno', 'Pixel 9 Pro XL'],
    leadAnswerBlock:
      '**TokForge (versión 1.0 a fecha del 3 de octubre de 2026) es una app gratuita para Android de Defcon-One que ejecuta modelos de lenguaje locales con llama.cpp o MNN y añade personajes de juegos de rol, generación de imágenes en el dispositivo, voz y preguntas sobre documentos, sin necesidad de cuenta.** Su ficha dice que las conversaciones nunca salen del dispositivo, que la búsqueda web está desactivada por defecto y que un benchmark puede publicar resultados, de forma opcional, en un ranking público. El código fuente no está publicado y no se indica la licencia, y la versión para iPhone y iPad sigue siendo una beta en TestFlight.',
    quickAnswerTop: {
      es: {
        question: '¿TokForge es gratis y funciona totalmente offline?',
        answer:
          'Según su ficha y su sitio web, sí: es gratis, sin suscripción ni cuenta, y el chat, las imágenes y la voz se ejecutan en el dispositivo una vez descargados los modelos. La búsqueda web está desactivada por defecto y publicar resultados del benchmark en el ranking es opcional; un servidor que conectes tú mismo recibiría tus conversaciones.',
        bullets: [
          'Gratis en [Google Play](https://play.google.com/store/apps/details?id=dev.tokforge); la versión para iPhone y iPad es una beta pública en TestFlight, no está en la App Store.',
          'Tres vías de inferencia: llama.cpp para GGUF, MNN o tu propio servidor compatible con OpenAI.',
          'Extras: personajes de rol con tarjetas importadas, generación de imágenes en el dispositivo, voces Kokoro con clonación de voz y preguntas sobre documentos.',
          'Según la consulta del 3 de octubre de 2026: versión 1.0, más de 5K descargas en Google Play y ficha actualizada por última vez el 20 de septiembre de 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es TokForge?', anchor: 'what-is-tokforge' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Hardware y velocidad', anchor: 'hardware-requirements' },
      { label: 'Privacidad y funciones en línea', anchor: 'privacy' },
      { label: 'La voz del creador', anchor: 'from-the-maker' },
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
            text: 'TokForge es una app gratuita y de código cerrado para Android, de Defcon-One, que ejecuta modelos de lenguaje locales con personajes de juegos de rol, generación de imágenes en el dispositivo, voz y preguntas sobre documentos, y cuya versión para iPhone y iPad sigue en beta en TestFlight.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas desde Google Play, descargas un modelo que se ajuste a tu teléfono y chateas, creas imágenes o hablas con personajes sin cuenta; el desarrollador también mantiene un ranking público en el que puedes elegir publicar los resultados de velocidad de tu teléfono.',
          },
        ],
        items: [
          'Desarrollador: figura como Defcon-One en Google Play, con Isaac Maple y una ubicación en Estados Unidos en los datos del desarrollador y un correo de contacto en la ficha.',
          'Precio y licencia: gratis, sin suscripción ni cuenta; no se encontró ninguna licencia ni un repositorio de código público, y la propia guía comparativa del desarrollador indica «No public repo».',
          'Motores: llama.cpp (GGUF) con vías OpenCL y Vulkan, MNN con OpenCL, o un servidor compatible con OpenAI que conectas tú mismo.',
          'Alcance: personajes de rol, imágenes en el dispositivo, voces Kokoro con clonación, preguntas sobre documentos, un catálogo de 52 modelos con búsqueda en Hugging Face y un ranking público de velocidad opcional.',
          'Indicadores según la consulta del 3 de octubre de 2026: versión 1.0, más de 5K descargas en Google Play, ficha actualizada el 20 de septiembre de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en la ficha de Google Play y en el sitio web del propio desarrollador, consultados el 3 de octubre de 2026. Las cifras de rendimiento del sitio son afirmaciones del desarrollador, y PromptQuorum no ha probado ni evaluado con pruebas comparativas la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-tokforge',
        title: '¿Qué es TokForge?',
        content: [
          '**TokForge es una app de chat para Android, pensada para funcionar sin conexión, que reúne un ejecutor de modelos locales con herramientas de juegos de rol, imágenes, voz y documentos.** Según su [ficha de Google Play](https://play.google.com/store/apps/details?id=dev.tokforge), ejecuta modelos completos en el teléfono sin nube ni cuenta, admite personajes importados desde chub.ai y tarjetas TavernAI, y elige automáticamente el motor más rápido para tu chip.',
          'El sitio web del desarrollador describe la versión 1.0 como la primera versión completa y dice que la app es mucho más pequeña que las alternativas consolidadas. Esa franqueza importa para las expectativas: tiene una base de instalaciones reducida, y su versión para iPhone y iPad solo está en beta en TestFlight.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**TokForge se distribuye a través de Google Play en Android; la versión de Apple es una beta en TestFlight y no una versión de la App Store.**',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Dónde obtenerla': 'Beta pública en TestFlight (véase [tokforge.ai](https://tokforge.ai))',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde obtenerla': 'No publicado',
          },
        ],
        note: 'Esta página es material complementario de la entrada de la app en el [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versión verificada el 3 de octubre de 2026: 1.0, según la descripción de Play y el sitio web del desarrollador.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Las fuentes describen el flujo solo a grandes rasgos; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app y deja que evalúe tu teléfono',
            whyItMatters: 'Según el sitio web del desarrollador, la app detecta las capacidades del dispositivo y selecciona los modelos que ofrece.',
          },
          {
            title: 'Descarga un modelo',
            whyItMatters: 'Elige entre el catálogo seleccionado de 52 modelos o busca en Hugging Face con el descargador integrado.',
          },
          {
            title: 'Ejecuta el benchmark si quieres',
            whyItMatters: 'AutoForge evalúa combinaciones de modelo y motor en tu hardware; publicar en el ranking público es decisión tuya.',
          },
          {
            title: 'Chatea, crea o pregunta a tus documentos',
            whyItMatters: 'Empieza un chat, crea o importa un personaje, genera una imagen, o añade un documento y pregunta sobre él.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de la descripción de Google Play o del sitio web del desarrollador; ninguno ha sido probado de forma independiente.**',
        ],
        items: [
          '**Chat y juegos de rol.** Crea personajes o importa tarjetas de chub.ai y TavernAI (PNG o JSON), con personas, lorebooks, saludos alternativos y chats grupales.',
          '**Imágenes.** Generación en el dispositivo que se ejecuta en la CPU en todos los casos, con aceleración por GPU en Adreno y por NPU en dispositivos Snapdragon compatibles. El desarrollador cita unos 31 segundos para una imagen de 512x512 en un Pixel 9 Pro XL.',
          '**Voz.** Texto a voz con Kokoro y varias voces, clonación de voz a partir de aproximadamente un minuto de audio grabado, y entrada de voz.',
          '**Documentos y memoria.** Preguntas sobre archivos PDF, DOCX, EPUB, Markdown, CSV y de texto, además de memoria a largo plazo y un grafo de conocimiento.',
          '**Motores y modelos.** llama.cpp (GGUF) con OpenCL y Vulkan, MNN con OpenCL, o un servidor compatible con OpenAI, con enrutamiento automático según el chip y un catálogo de 52 modelos.',
          '**API para desarrolladores y copia de seguridad.** Endpoints de API locales para automatización (más de 270 según Google Play, 284 según el sitio web) y copia de seguridad y restauración de conversaciones, personajes y ajustes.',
        ],
        note: 'El texto de Play y el sitio web difieren ligeramente (por ejemplo, en el número de endpoints), así que la compilación actual y su pantalla de ajustes tienen la última palabra.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware y velocidad',
        content: [
          '**El sitio web del desarrollador indica un mínimo de 4 GB de RAM para modelos pequeños y 8 GB o más para los más grandes.** La velocidad depende del chip: la ficha describe vías de GPU en Adreno y vías de NPU en dispositivos Snapdragon compatibles, con CPU como alternativa en el resto.',
          'El benchmark AutoForge de la app mide cada combinación de modelo y motor en tu teléfono, y el ranking público en leaderboard.tokforge.ai recoge los resultados enviados desde los dispositivos si decides publicarlos. Esas cifras las envían los usuarios y las aloja el desarrollador, y no son mediciones independientes.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y funciones en línea',
        content: [
          '**La sección Seguridad de los datos de Google Play declara «No se recopilan datos» y «No se comparten datos con terceros», y la descripción afirma que no hay analíticas ni telemetría.** El sitio web añade que las conversaciones se almacenan únicamente en el dispositivo.',
          'Tres funciones van más allá de ese panorama, según la propia descripción de la ficha: la búsqueda web está desactivada por defecto y, al activarla, obtiene información actual; publicar resultados en el ranking público es opcional; y un servidor compatible con OpenAI que conectes recibe todo lo que le envíes. Como el código fuente no está publicado, nada de esto puede comprobarse con el código, y se trata de declaraciones del desarrollador, no de resultados de una auditoría.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha inspeccionado el tráfico de red de la app. Quien maneje datos confidenciales debería verificar el comportamiento con la búsqueda web y la publicación en el ranking desactivadas y activadas.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'La voz del creador',
        content: [
          'Isaac Maple, el desarrollador de TokForge, compartió lo siguiente sobre la app y los motivos por los que la creó. Se presenta como las propias palabras del desarrollador, ligeramente editadas para facilitar la lectura, no como una evaluación editorial independiente de PromptQuorum:',
          '"Creo que nuestra mejor función es autoForge, que encuentra la mejor y más rápida configuración de inferencia para cada dispositivo y modelo: CPU, OpenCL o Vulkan, número de hilos y tamaño de contexto.',
          'Originalmente tenía 4 de estas tarjetas de personaje desde el principio, pero hasta hace quizá un mes la app no ofrecía el comportamiento predeterminado del sistema sin un prompt, lo que molestaba a algunas personas.',
          'La app es en realidad solo yo y otro amigo, guardian37x en Discord.',
          'Convierto y trato de optimizar muchos de los LLM más pequeños para Edge AI y los subo a mi cuenta de Hugging Face. Creo que ahora hay unos 85 modelos allí.',
          'En cuanto a por qué la creé: cuando empecé, había algunas otras opciones para inferencia móvil, pero la mayoría se basaban en llama/GGUF, costaban dinero, estaban filtradas, tenían anuncios y no estaban realmente orientadas al rendimiento ni tenían un backend de API para profundizar de verdad. Tampoco había visto ninguna que usara MNN, y como ingeniero, MNN en ese momento era a veces un 50 % más rápido que GGUF, lo que me entusiasmaba mucho.',
          'Por eso la creé. Calculo que los costes de la inferencia de IA seguirán subiendo y que será más caro para la gente común acceder a una IA que sea suya, en sus propios dispositivos, sin filtros ni censura. Así que quise hacer algo que abordara eso y que fuera rápido, gratuito y sin anuncios."',
        ],
        note: '— Isaac Maple, desarrollador',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'En el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Gratis y sin cuenta',
            'En el uso real': 'Se instala y se usa sin registro ni suscripción.',
            'Limitación / salvedad': 'El código no está publicado y no se indica licencia.',
          },
          {
            'Ventaja': 'Juegos de rol y multimedia en una app',
            'En el uso real': 'Personajes, imágenes, voces y documentos en una sola instalación.',
            'Limitación / salvedad': 'La amplitud la describe el desarrollador; la calidad no se ha probado aquí.',
          },
          {
            'Ventaja': 'Motores adaptados al chip',
            'En el uso real': 'llama.cpp, MNN y un servidor remoto con enrutamiento automático.',
            'Limitación / salvedad': 'Las mejores vías dependen del SoC; la velocidad varía mucho según el teléfono.',
          },
          {
            'Ventaja': 'Datos públicos de benchmark',
            'En el uso real': 'Un ranking muestra cómo rinden los teléfonos antes de comprometerte.',
            'Limitación / salvedad': 'Los resultados los envían los usuarios y los aloja el desarrollador.',
          },
          {
            'Ventaja': 'Versión de Android marcada como estable',
            'En el uso real': 'La versión 1.0 está en Google Play.',
            'Limitación / salvedad': 'Base de instalaciones pequeña (5K+) y la versión para iPhone es una beta.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Android que quieren juegos de rol offline con tarjetas de personaje importadas.** La importación de tarjetas de Chub.ai y TavernAI es una función destacada.',
          '**Personas que quieren imágenes, voz y documentos sin servicios en la nube.** Se describe que las tres funciones se ejecutan en el dispositivo.',
          '**Usuarios a quienes les gusta ver datos de benchmark de su chip.** El benchmark integrado y el ranking están pensados para esa comparación.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Licencia y código fuente.** No se encontró ningún texto de licencia ni repositorio público, y la propia guía del desarrollador indica «No public repo», por lo que el comportamiento no puede comprobarse con el código.',
          '**Rendimiento y calidad en uso real.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, el consumo de batería ni la calidad de las respuestas.',
          '**Compras dentro de la app y anuncios.** La página de Play que se leyó no muestra esas etiquetas, pero las fuentes no las descartan de forma explícita.',
          '**Trayectoria del desarrollador.** Google Play nombra a Defcon-One, con Isaac Maple y una ubicación en Estados Unidos en los datos del desarrollador; en las fuentes leídas no se encontró ningún registro de empresa ni trayectoria previa.',
          '**Todavía no es para usuarios de iPhone.** La versión de Apple es una beta en TestFlight, no una versión de la App Store.',
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
            'App': '[Layla](/es/power-local-llm/layla-review)',
            'Plataformas': 'Android, iOS',
            'Precio / licencia': 'De pago / código cerrado',
            'Diferencia clave': 'Enfoque en compañía y juegos de rol, con un modo en la nube opcional',
          },
          {
            'App': '[LLM Hub](/es/power-local-llm/llm-hub-review)',
            'Plataformas': 'Android, iOS',
            'Precio / licencia': 'Gratis + compras / PolyForm NC',
            'Diferencia clave': 'Suite más amplia en el dispositivo con agente MCP y generación multimedia',
          },
          {
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat offline de código abierto con preguntas sobre documentos en el dispositivo',
          },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿TokForge es gratis?',
            a: 'Sí. Tanto Google Play como el sitio web del desarrollador la describen como gratuita, sin suscripción ni cuenta. La página de Play que se leyó no muestra ninguna etiqueta de compras dentro de la app, aunque las fuentes no descartan de forma explícita las compras.',
          },
          {
            q: '¿TokForge es de código abierto?',
            a: 'No. No se encontró ningún repositorio de código público ni licencia, y la propia guía comparativa del desarrollador indica «No public repo».',
          },
          {
            q: '¿Quién hace TokForge?',
            a: 'Google Play lista al desarrollador como Defcon-One, con Isaac Maple y una ubicación en Estados Unidos en los datos del desarrollador y un correo de contacto en la ficha.',
          },
          {
            q: '¿Funciona sin conexión?',
            a: 'Según la ficha, el chat, las imágenes y la voz se ejecutan en el dispositivo una vez descargados los modelos. La búsqueda web está desactivada por defecto, publicar en el ranking es opcional, y las descargas y cualquier servidor conectado necesitan red.',
          },
          {
            q: '¿Hay versión para iPhone?',
            a: 'Solo como beta pública en TestFlight. La versión para Android está en Google Play.',
          },
          {
            q: '¿Qué hardware necesita?',
            a: 'El sitio web del desarrollador indica al menos 4 GB de RAM para modelos pequeños y 8 GB o más para los más grandes, con vías de GPU y NPU en teléfonos Snapdragon compatibles.',
          },
          {
            q: '¿Qué motores y modelos usa?',
            a: 'llama.cpp para modelos GGUF, MNN o un servidor compatible con OpenAI que conectas tú mismo, además de un catálogo de 52 modelos y un descargador de Hugging Face.',
          },
          {
            q: '¿Puede importar tarjetas de personaje?',
            a: 'Sí. La descripción dice que se pueden importar tarjetas de chub.ai y TavernAI (PNG o JSON), con personas, lorebooks, saludos alternativos y chats grupales.',
          },
          {
            q: '¿Cómo se compara con PocketPal AI?',
            a: 'PocketPal AI es un cliente de chat gratuito con licencia MIT para iOS y Android, mientras que TokForge es de código cerrado, con funciones de juegos de rol, imágenes y voz en Android y una beta para iPhone.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'TokForge reúne personajes de juegos de rol, imágenes en el dispositivo, clonación de voz, preguntas sobre documentos y un enrutamiento de motores adaptado al chip en una app gratuita para Android, y su ranking público de benchmark es un intento poco habitual de transparencia sobre la velocidad. En contra, el código fuente no está publicado y no se indica ninguna licencia, la base de instalaciones es pequeña (5K+), la versión para iPhone sigue en beta, las cifras de rendimiento proceden del desarrollador y nada de esto se ha probado de forma práctica. Encaja con quienes usan Android y quieren una app gratuita y offline de juegos de rol y multimedia y aceptan esas condiciones; quienes quieran código auditable pueden comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private Mind](/es/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[TokForge en Google Play](https://play.google.com/store/apps/details?id=dev.tokforge) — descripción, datos del desarrollador, sección Seguridad de los datos, número de descargas y fecha de última actualización, consultados el 3 de octubre de 2026.',
          '[tokforge.ai](https://tokforge.ai) — versión, plataformas, orientación sobre hardware y la propia guía comparativa del desarrollador, consultados el 3 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo.',
          '[Análisis de Layla](/es/power-local-llm/layla-review) — una app de pago de compañía y juegos de rol.',
          '[Análisis de LLM Hub](/es/power-local-llm/llm-hub-review) — una suite de IA más amplia en el dispositivo para Android e iPhone.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita con licencia MIT.',
          '[Las mejores apps de LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el repaso más amplio para Android.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tokforge-review-hero-fr.webp',
    title: 'Avis TokForge : chat IA hors ligne sur Android avec jeu de rôle et génération d\'images',
    seoTitle: 'Avis TokForge : appli de chat IA hors ligne, Android',
    intro:
      'TokForge est une application Android gratuite, publiée par un développeur indiqué sur Google Play sous le nom [Defcon-One](https://play.google.com/store/apps/details?id=dev.tokforge), qui exécute des modèles de langage sur le téléphone et y ajoute des personnages de jeu de rôle, la génération d\'images sur l\'appareil, la synthèse vocale avec clonage de voix, des questions-réponses sur documents et un benchmark intégré qui peut publier les vitesses sur un classement public. La version 1.0 est disponible sur Google Play, tandis que la version pour iPhone et iPad est une bêta publique sur TestFlight. Le code source de l\'application n\'est pas publié. Cet avis se fonde sur la fiche Google Play et sur le site du développeur, [tokforge.ai](https://tokforge.ai), consultés le 3 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'Avis TokForge : appli Android gratuite de chat IA hors ligne avec personnages de jeu de rôle, génération d\'images, clonage de voix et classement de vitesse.',
    twitterDescription:
      'Avis TokForge : une appli Android gratuite de chat IA hors ligne avec personnages de jeu de rôle, images sur l\'appareil, clonage de voix et classement public de vitesse — code fermé, version iPhone en bêta.',
    audience:
      'Utilisateurs d\'Android qui veulent une application de chat hors ligne gratuite avec jeu de rôle et fonctions multimédias, et qui ont besoin de savoir ce que les sources confirment, ce que le développeur affirme seulement et ce qui n\'a pas pu être vérifié.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis TokForge',
    targetKeywords: [
      'avis tokforge',
      'tokforge chat ia hors ligne',
      'tokforge application android',
      'application ia jeu de rôle hors ligne android',
      'application génération d\'images sur l\'appareil android',
      'application llama.cpp mnn android',
      'tokforge vs pocketpal ai',
    ],
    current_models_mentioned: ['Kokoro', 'GGUF models', 'MNN models'],
    current_hardware_mentioned: ['Android', 'Snapdragon', 'Adreno', 'Pixel 9 Pro XL'],
    leadAnswerBlock:
      '**TokForge (version 1.0 au 3 octobre 2026) est une application Android gratuite de Defcon-One qui exécute des modèles de langage locaux via llama.cpp ou MNN et ajoute des personnages de jeu de rôle, la génération d\'images sur l\'appareil, la voix et les questions-réponses sur documents, sans compte.** Selon sa fiche, les conversations ne quittent jamais l\'appareil, la recherche web est désactivée par défaut, et un benchmark peut, facultativement, publier ses résultats sur un classement public. Le code source n\'est pas publié et la licence n\'est pas indiquée, et la version pour iPhone et iPad reste une bêta sur TestFlight.',
    quickAnswerTop: {
      fr: {
        question: 'TokForge est-elle gratuite et fonctionne-t-elle entièrement hors ligne ?',
        answer:
          'Selon sa fiche et son site, oui : elle est gratuite, sans abonnement ni compte, et le chat, les images et la voix s\'exécutent sur l\'appareil une fois les modèles téléchargés. La recherche web est désactivée par défaut, et la publication des résultats du benchmark sur le classement est facultative ; un serveur que vous connectez vous-même recevrait vos conversations.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=dev.tokforge) ; la version pour iPhone et iPad est une bêta publique sur TestFlight, pas sur l\'App Store.',
          'Trois voies d\'inférence : llama.cpp pour GGUF, MNN, ou votre propre serveur compatible OpenAI.',
          'Extras : personnages de jeu de rôle avec cartes importées, génération d\'images sur l\'appareil, voix Kokoro avec clonage de voix et questions-réponses sur documents.',
          'Au 3 octobre 2026 : version 1.0, plus de 5 000 téléchargements sur Google Play (5K+), fiche mise à jour pour la dernière fois le 20 septembre 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que TokForge ?', anchor: 'what-is-tokforge' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Matériel et vitesse', anchor: 'hardware-requirements' },
      { label: 'Confidentialité et fonctions en ligne', anchor: 'privacy' },
      { label: 'Le mot du développeur', anchor: 'from-the-maker' },
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
            text: 'TokForge est une application Android gratuite à code fermé de Defcon-One qui exécute des modèles de langage locaux avec des personnages de jeu de rôle, la génération d\'images sur l\'appareil, la voix et les questions-réponses sur documents, sa version pour iPhone et iPad restant en bêta sur TestFlight.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez depuis Google Play, téléchargez un modèle adapté à votre téléphone, puis discutez, créez des images ou parlez à des personnages sans compte ; le développeur tient aussi un classement public où vous pouvez choisir de publier les résultats de vitesse de votre téléphone.',
          },
        ],
        items: [
          'Développeur : indiqué comme Defcon-One sur Google Play, avec Isaac Maple et une localisation aux États-Unis dans les informations sur le développeur, et une adresse e-mail de contact sur la fiche.',
          'Prix et licence : gratuite, sans abonnement ni compte ; aucune licence ni dépôt de code public n\'a été trouvé, et le guide comparatif du développeur indique « No public repo ».',
          'Moteurs : llama.cpp (GGUF) avec des voies OpenCL et Vulkan, MNN avec OpenCL, ou un serveur compatible OpenAI que vous connectez vous-même.',
          'Périmètre : personnages de jeu de rôle, images sur l\'appareil, voix Kokoro avec clonage, questions-réponses sur documents, un catalogue de 52 modèles avec recherche Hugging Face et un classement public de vitesse facultatif.',
          'Indicateurs au 3 octobre 2026 : version 1.0, plus de 5 000 téléchargements sur Google Play (5K+), fiche mise à jour le 20 septembre 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur la fiche Google Play et sur le site du développeur, consultés le 3 octobre 2026. Les chiffres de performance du site sont des affirmations du développeur, et PromptQuorum n\'a ni testé ni évalué par benchmark l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-tokforge',
        title: 'Qu\'est-ce que TokForge ?',
        content: [
          '**TokForge est une application de chat Android axée sur le hors ligne, qui réunit un exécuteur de modèles locaux et des outils de jeu de rôle, d\'image, de voix et de documents.** D\'après sa [fiche Google Play](https://play.google.com/store/apps/details?id=dev.tokforge), elle exécute des modèles complets sur le téléphone, sans cloud ni compte, prend en charge les personnages importés depuis chub.ai et les cartes TavernAI, et choisit automatiquement le moteur le plus rapide pour votre puce.',
          'Le site du développeur décrit la version 1.0 comme la première version complète et indique que l\'application est beaucoup plus petite que les alternatives établies. Cette franchise compte pour les attentes : sa base d\'installations est réduite, et sa version pour iPhone et iPad n\'existe qu\'en bêta sur TestFlight.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**TokForge est distribuée via Google Play sur Android ; la version Apple est une bêta TestFlight et non une version de l\'App Store.**',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)',
          },
          {
            'Plateforme': 'iPhone / iPad',
            'Où la trouver': 'Bêta publique via TestFlight (voir [tokforge.ai](https://tokforge.ai))',
          },
          {
            'Plateforme': 'Code source',
            'Où la trouver': 'Non publié',
          },
        ],
        note: 'Cette page est un complément à l\'entrée de l\'application dans le [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Version vérifiée le 3 octobre 2026 : 1.0, d\'après la description Play et le site du développeur.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**Les sources ne décrivent le déroulement qu\'à grands traits ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Installer et laisser l\'application évaluer votre téléphone',
            whyItMatters: 'Selon le site du développeur, l\'application détecte les capacités de l\'appareil et sélectionne les modèles proposés.',
          },
          {
            title: 'Télécharger un modèle',
            whyItMatters: 'Choisissez dans le catalogue sélectionné de 52 modèles ou cherchez sur Hugging Face via le téléchargeur intégré.',
          },
          {
            title: 'Lancer le benchmark, si vous le souhaitez',
            whyItMatters: 'AutoForge évalue les combinaisons de modèles et de moteurs sur votre matériel ; la publication sur le classement public est votre choix.',
          },
          {
            title: 'Discuter, créer ou interroger vos documents',
            whyItMatters: 'Lancez une conversation, créez ou importez un personnage, générez une image, ou ajoutez un document et posez-lui des questions.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Google Play ou du site du développeur ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Chat et jeu de rôle.** Création de personnages ou import de cartes depuis chub.ai et TavernAI (PNG ou JSON), avec personas, lorebooks, salutations alternatives et conversations de groupe.',
          '**Images.** Génération sur l\'appareil, qui fonctionne partout sur le CPU, avec une accélération GPU sur Adreno et une accélération NPU sur les appareils Snapdragon compatibles. Le développeur cite environ 31 secondes pour une image 512x512 sur un Pixel 9 Pro XL.',
          '**Voix.** Synthèse vocale Kokoro avec plusieurs voix, clonage de voix à partir d\'environ une minute d\'audio enregistré, et saisie vocale.',
          '**Documents et mémoire.** Questions sur des fichiers PDF, DOCX, EPUB, Markdown, CSV et texte, ainsi qu\'une mémoire à long terme et un graphe de connaissances.',
          '**Moteurs et modèles.** llama.cpp (GGUF) avec OpenCL et Vulkan, MNN avec OpenCL, ou un serveur compatible OpenAI, avec un routage automatique selon la puce et un catalogue de 52 modèles.',
          '**API développeur et sauvegarde.** Points d\'accès d\'API locaux pour l\'automatisation (plus de 270 selon Google Play, 284 selon le site) et sauvegarde et restauration des conversations, des personnages et des réglages.',
        ],
        note: 'Le texte de Play et le site diffèrent légèrement (par exemple sur le nombre de points d\'accès) ; la version actuelle de l\'application et son écran de réglages font donc foi.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Matériel et vitesse',
        content: [
          '**Le site du développeur indique un minimum de 4 GB de RAM pour les petits modèles et de 8 GB ou plus pour les plus grands.** La vitesse dépend de la puce : la fiche décrit des voies GPU sur Adreno et des voies NPU sur les appareils Snapdragon compatibles, avec un repli sur le CPU ailleurs.',
          'Le benchmark AutoForge de l\'application mesure chaque combinaison de modèle et de moteur sur votre téléphone, et le classement public sur leaderboard.tokforge.ai rassemble les résultats envoyés depuis les appareils si vous choisissez de les publier. Ces chiffres sont soumis par les utilisateurs et hébergés par le développeur, et ne constituent pas des mesures indépendantes.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et fonctions en ligne',
        content: [
          '**La section Sécurité des données de Google Play déclare « Aucune donnée collectée » et « Aucune donnée partagée avec des tiers », et la description affirme zéro analyse d\'audience et zéro télémétrie.** Le site ajoute que les conversations sont stockées uniquement sur l\'appareil.',
          'Trois fonctions dépassent ce tableau, selon la description de la fiche elle-même : la recherche web est désactivée par défaut et, une fois activée, récupère des informations actuelles ; la publication des résultats sur le classement public est facultative ; et un serveur compatible OpenAI connecté reçoit tout ce que vous lui envoyez. Le code source n\'étant pas publié, rien de tout cela ne peut être vérifié dans le code, et ce sont des déclarations du développeur, et non des résultats d\'audit.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n\'a pas inspecté le trafic réseau de l\'application. Quiconque traite des données confidentielles devrait vérifier le comportement avec la recherche web et la publication sur le classement désactivées puis activées.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Le mot du développeur',
        content: [
          'Isaac Maple, le développeur de TokForge, a partagé ce qui suit au sujet de l\'application et des raisons pour lesquelles il l\'a créée. Ce texte est présenté comme les propres mots du développeur, légèrement retouchés pour la lisibilité, et non comme une évaluation éditoriale indépendante de PromptQuorum :',
          '"Je pense que notre meilleure fonctionnalité est autoForge, qui trouve la configuration d\'inférence la meilleure et la plus rapide pour chaque appareil et chaque modèle : CPU, OpenCL ou Vulkan, nombre de threads et taille du contexte.',
          'À l\'origine, j\'avais dès le départ 4 de ces cartes de personnages, mais jusqu\'à il y a peut-être un mois, l\'application ne proposait pas le comportement système par défaut sans prompt, ce qui agaçait certaines personnes.',
          'L\'application, c\'est en réalité juste moi et un autre ami, guardian37x sur Discord.',
          'Je convertis et j\'essaie d\'optimiser beaucoup de petits LLM pour l\'Edge AI et je les publie sur mon compte Hugging Face. Je crois qu\'il y a environ 85 modèles aujourd\'hui.',
          'Pourquoi je l\'ai créée : quand j\'ai commencé, il existait quelques autres options pour l\'inférence mobile, mais la plupart reposaient sur llama/GGUF, étaient payantes, filtrées, avaient des publicités et n\'étaient pas vraiment axées sur la performance ou n\'avaient pas de backend API permettant de creuser vraiment. Je n\'en avais en outre vu aucune qui utilise MNN, et en tant qu\'ingénieur, MNN était à l\'époque parfois 50 % plus rapide que GGUF, ce qui était vraiment enthousiasmant.',
          'Voilà pourquoi je l\'ai créée. Je pense que les coûts de l\'inférence IA vont continuer à augmenter et qu\'il deviendra plus cher pour le grand public d\'accéder à une IA qui lui appartient, sur ses propres appareils, sans filtre ni censure. J\'ai donc voulu créer quelque chose qui réponde à cela, et qui soit rapide, gratuit et sans publicité."',
        ],
        note: '— Isaac Maple, développeur',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'En pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Gratuite et sans compte',
            'En pratique': 'Installation et usage sans inscription ni abonnement.',
            'Limite / réserve': 'Le code source n\'est pas publié et aucune licence n\'est indiquée.',
          },
          {
            'Avantage': 'Jeu de rôle et médias en un seul endroit',
            'En pratique': 'Personnages, images, voix et documents dans une seule installation.',
            'Limite / réserve': 'L\'étendue est décrite par le développeur ; la qualité n\'a pas été testée ici.',
          },
          {
            'Avantage': 'Moteurs adaptés à la puce',
            'En pratique': 'llama.cpp, MNN et un serveur distant, avec routage automatique.',
            'Limite / réserve': 'Les meilleures voies dépendent du SoC ; les vitesses varient beaucoup selon le téléphone.',
          },
          {
            'Avantage': 'Données de benchmark publiques',
            'En pratique': 'Un classement montre les performances des téléphones avant de vous engager.',
            'Limite / réserve': 'Les résultats sont soumis par les utilisateurs et hébergés par le développeur.',
          },
          {
            'Avantage': 'Version Android étiquetée stable',
            'En pratique': 'La version 1.0 est sur Google Play.',
            'Limite / réserve': 'Base d\'installations réduite (5K+), et la version iPhone est une bêta.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les utilisateurs d\'Android qui veulent du jeu de rôle hors ligne avec des cartes de personnages importées.** L\'import de cartes chub.ai et TavernAI est une fonction phare.',
          '**Ceux qui veulent des images, de la voix et des documents sans services cloud.** Les trois sont décrits comme s\'exécutant sur l\'appareil.',
          '**Les utilisateurs qui aiment consulter les données de benchmark de leur puce.** Le benchmark intégré et le classement sont conçus pour cette comparaison.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Licence et code source.** Aucun texte de licence ni dépôt public n\'a été trouvé, et le guide du développeur indique « No public repo » ; le comportement ne peut donc pas être vérifié dans le code.',
          '**Performances et qualité en conditions réelles.** PromptQuorum n\'a pas exécuté l\'application : la vitesse, la consommation de batterie et la qualité des résultats ne sont donc pas évaluées.',
          '**Achats intégrés et publicités.** La page Play lue n\'affiche aucune mention de ce type, mais les sources ne les excluent pas explicitement.',
          '**Parcours du développeur.** Google Play indique Defcon-One, avec Isaac Maple et une localisation aux États-Unis dans les informations sur le développeur ; aucune immatriculation d\'entreprise ni historique n\'a été trouvé dans les sources lues.',
          '**Pas encore pour les utilisateurs d\'iPhone.** La version Apple est une bêta TestFlight, et non une version de l\'App Store.',
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
            'Application': '[Layla](/fr/power-local-llm/layla-review)',
            'Plateformes': 'Android, iOS',
            'Prix / licence': 'Payante / code fermé',
            'Différence clé': 'Orientée compagnon et jeu de rôle, avec un mode cloud facultatif',
          },
          {
            'Application': '[LLM Hub](/fr/power-local-llm/llm-hub-review)',
            'Plateformes': 'Android, iOS',
            'Prix / licence': 'Gratuite + achats / PolyForm NC',
            'Différence clé': 'Suite plus large sur l\'appareil, avec un agent MCP et la génération de médias',
          },
          {
            'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Chat hors ligne open source avec questions-réponses sur documents sur l\'appareil',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'TokForge est-elle gratuite ?',
            a: 'Oui. Google Play et le site du développeur la décrivent comme gratuite, sans abonnement ni compte. La page Play lue n\'affiche aucune mention d\'achat intégré, mais les sources n\'excluent pas explicitement les achats.',
          },
          {
            q: 'TokForge est-elle open source ?',
            a: 'Non. Aucun dépôt de code public ni licence n\'a été trouvé, et le guide comparatif du développeur indique « No public repo ».',
          },
          {
            q: 'Qui crée TokForge ?',
            a: 'Google Play indique le développeur comme Defcon-One, avec Isaac Maple et une localisation aux États-Unis dans les informations sur le développeur, et une adresse e-mail de contact sur la fiche.',
          },
          {
            q: 'Fonctionne-t-elle hors ligne ?',
            a: 'Selon la fiche, le chat, les images et la voix s\'exécutent sur l\'appareil une fois les modèles téléchargés. La recherche web est désactivée par défaut, la publication sur le classement est facultative, et les téléchargements ainsi que tout serveur connecté nécessitent un réseau.',
          },
          {
            q: 'Existe-t-il une version pour iPhone ?',
            a: 'Seulement en bêta publique sur TestFlight. La version Android est sur Google Play.',
          },
          {
            q: 'De quel matériel a-t-elle besoin ?',
            a: 'Le site du développeur indique au moins 4 GB de RAM pour les petits modèles et 8 GB ou plus pour les plus grands, avec des voies GPU et NPU sur les téléphones Snapdragon compatibles.',
          },
          {
            q: 'Quels moteurs et modèles utilise-t-elle ?',
            a: 'llama.cpp pour les modèles GGUF, MNN, ou un serveur compatible OpenAI que vous connectez vous-même, ainsi qu\'un catalogue de 52 modèles et un téléchargeur Hugging Face.',
          },
          {
            q: 'Peut-elle importer des cartes de personnages ?',
            a: 'Oui. La description indique que les cartes de chub.ai et TavernAI (PNG ou JSON) peuvent être importées, avec personas, lorebooks, salutations alternatives et conversations de groupe.',
          },
          {
            q: 'Comment se compare-t-elle à PocketPal AI ?',
            a: 'PocketPal AI est un client de chat gratuit sous licence MIT sur iOS et Android, tandis que TokForge est à code fermé, avec des fonctions de jeu de rôle, d\'image et de voix sur Android et une bêta pour iPhone.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'TokForge réunit des personnages de jeu de rôle, des images sur l\'appareil, le clonage de voix, des questions-réponses sur documents et un routage des moteurs adapté à la puce dans une application Android gratuite, et son classement public de benchmark est une tentative inhabituelle de transparence sur la vitesse. En face, le code source n\'est pas publié et aucune licence n\'est indiquée, la base d\'installations est réduite (5K+), la version iPhone est encore en bêta, les chiffres de performance viennent du développeur, et rien ici n\'a été testé en pratique. Elle convient aux utilisateurs d\'Android qui veulent une application gratuite de jeu de rôle et de médias hors ligne et acceptent ces conditions ; ceux qui veulent un code vérifiable peuvent comparer [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private Mind](/fr/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[TokForge sur Google Play](https://play.google.com/store/apps/details?id=dev.tokforge) — description, informations sur le développeur, section Sécurité des données, nombre de téléchargements et date de dernière mise à jour, consultés le 3 octobre 2026.',
          '[tokforge.ai](https://tokforge.ai) — version, plateformes, indications matérielles et guide comparatif du développeur, consultés le 3 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l\'appareil.',
          '[Avis Layla](/fr/power-local-llm/layla-review) — une application payante de compagnon et de jeu de rôle.',
          '[Avis LLM Hub](/fr/power-local-llm/llm-hub-review) — une suite d\'IA plus large sur l\'appareil pour Android et iPhone.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite, sous licence MIT.',
          '[Meilleures applications LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama Android plus large.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tokforge-review-hero-ja.webp',
    title: 'TokForgeレビュー:ロールプレイと画像生成を備えたオフラインのAndroid向けAIチャット',
    seoTitle: 'TokForgeレビュー:オフラインのAndroid向けAIチャットアプリ',
    intro:
      'TokForgeは、Google Playで[Defcon-One](https://play.google.com/store/apps/details?id=dev.tokforge)と表記されている開発者が公開している無料のAndroidアプリで、スマートフォン上で言語モデルを動かし、ロールプレイのキャラクター、端末上での画像生成、音声クローンに対応したテキスト読み上げ、ドキュメントQ&A、そして速度を公開リーダーボードに投稿できる内蔵ベンチマークをひとまとめにしています。バージョン1.0がGoogle Playで公開されており、iPhoneとiPad向けのバージョンはTestFlightの公開ベータです。アプリのソースコードは公開されていません。本レビューは、2026年10月3日に確認したGoogle Playの掲載情報と開発者自身のウェブサイト[tokforge.ai](https://tokforge.ai)に基づいており、PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'TokForgeレビュー:ロールプレイ、画像生成、音声クローン、速度リーダーボードを備えた、Android向けの無料オフラインAIチャットアプリ。モデル、プライバシー、制約を解説します。',
    twitterDescription:
      'TokForgeレビュー:ロールプレイのキャラクター、端末上での画像生成、音声クローン、公開の速度リーダーボードを備えた、無料のAndroid向けオフラインAIチャットアプリ。クローズドソースで、iPhone版はベータ。',
    audience:
      'ロールプレイやメディア機能を備えた無料のオフラインチャットアプリを求めるAndroidユーザーで、情報源が何を確認しているのか、開発者が主張しているだけの点は何か、確認できなかった点は何かを知りたい方向け。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TokForge レビュー',
    targetKeywords: [
      'tokforge レビュー',
      'tokforge オフライン aiチャット',
      'tokforge android アプリ',
      'オフライン aiロールプレイ アプリ android',
      'オンデバイス 画像生成 androidアプリ',
      'llama.cpp mnn androidアプリ',
      'tokforge pocketpal ai 比較',
    ],
    current_models_mentioned: ['Kokoro', 'GGUF models', 'MNN models'],
    current_hardware_mentioned: ['Android', 'Snapdragon', 'Adreno', 'Pixel 9 Pro XL'],
    leadAnswerBlock:
      '**TokForge(2026年10月3日時点のバージョン1.0)は、Defcon-Oneによる無料のAndroidアプリで、llama.cppまたはMNNでローカルの言語モデルを動かし、ロールプレイのキャラクター、端末上での画像生成、音声、ドキュメントQ&Aを加えており、アカウントは不要です。** 掲載情報によれば、会話は端末の外に出ず、Web検索は初期状態でオフで、ベンチマークの結果を公開リーダーボードに投稿することもオプションです。ソースコードは公開されておらず、ライセンスも明記されておらず、iPhoneとiPad向けのバージョンはまだTestFlightのベータです。',
    quickAnswerTop: {
      ja: {
        question: 'TokForgeは無料ですか。完全にオフラインで動きますか?',
        answer:
          '掲載情報とウェブサイトによれば、はい。サブスクリプションもアカウントも不要で無料であり、モデルをダウンロードしたあとは、チャット、画像、音声が端末上で動作します。Web検索は初期状態でオフで、ベンチマークの結果をリーダーボードに投稿するのはオプションです。ご自身で接続したサーバーには、チャットの内容が送られます。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)で無料。iPhoneとiPad向けのバージョンはTestFlightの公開ベータで、App Storeにはありません。',
          '3つの推論経路:GGUF向けのllama.cpp、MNN、またはご自身のOpenAI互換サーバー。',
          '追加機能:取り込んだカードによるロールプレイのキャラクター、端末上での画像生成、音声クローンに対応したKokoroの音声、ドキュメントQ&A。',
          '2026年10月3日の確認時点:バージョン1.0、Google Playで5K+ダウンロード、掲載情報の最終更新は2026年9月20日。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'TokForgeとは?', anchor: 'what-is-tokforge' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'ハードウェアと速度', anchor: 'hardware-requirements' },
      { label: 'プライバシーとオンライン機能', anchor: 'privacy' },
      { label: '開発者から', anchor: 'from-the-maker' },
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
            text: 'TokForgeは、Defcon-Oneによる無料のクローズドソースのAndroidアプリで、ローカルの言語モデルを動かし、ロールプレイのキャラクター、端末上での画像生成、音声、ドキュメントQ&Aを加えており、iPhoneとiPad向けのバージョンはまだTestFlightのベータである。',
          },
          {
            type: 'plain-terms',
            text: 'Google Playからインストールし、スマートフォンに合うモデルをダウンロードすれば、アカウントなしでチャット、画像の作成、キャラクターとの会話ができ、開発者は公開リーダーボードも運営していて、ご自分のスマートフォンの速度の結果を投稿するかどうかを選べます。',
          },
        ],
        items: [
          '開発者:Google PlayではDefcon-Oneと表記され、開発者の詳細にはIsaac Mapleと米国の所在地が、掲載情報には連絡先メールアドレスが示されている。',
          '料金とライセンス:サブスクリプションもアカウントも不要で無料。ライセンスも公開ソースリポジトリも見つからず、開発者自身の比較ガイドは「No public repo」と記載している。',
          'エンジン:OpenCLとVulkanの経路を持つllama.cpp(GGUF)、OpenCLを使うMNN、またはご自身で接続するOpenAI互換サーバー。',
          '機能の範囲:ロールプレイのキャラクター、端末上での画像生成、音声クローンに対応したKokoroの音声、ドキュメントQ&A、Hugging Face検索付きの52モデルのカタログ、オプションの公開速度リーダーボード。',
          '2026年10月3日の確認時点の指標:バージョン1.0、Google Playで5K+ダウンロード、掲載情報の更新は2026年9月20日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月3日に確認したGoogle Playの掲載情報と開発者自身のウェブサイトに基づいています。サイトに載っている性能の数値は開発者の主張であり、PromptQuorumはアプリのテストやベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-tokforge',
        title: 'TokForgeとは?',
        content: [
          '**TokForgeは、ローカルのモデル実行環境に、ロールプレイ、画像、音声、ドキュメントのツールをまとめた、オフライン優先のAndroidチャットアプリです。** [Google Playの掲載情報](https://play.google.com/store/apps/details?id=dev.tokforge)によれば、クラウドもアカウントも使わずにスマートフォン上で完全なモデルを動かし、chub.aiやTavernAIのカードから取り込んだキャラクターに対応し、お使いのチップに最も速いエンジンを自動的に選びます。',
          '開発者のウェブサイトは、バージョン1.0を最初の正式リリースと説明し、アプリは確立された代替アプリよりずっと小規模だと述べています。この率直さは期待値を考えるうえで重要で、インストール数は少なく、iPhoneとiPad向けのバージョンはTestFlightのベータにとどまっています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**TokForgeはAndroidではGoogle Play経由で配布されており、Apple版はApp Storeのリリースではなく、TestFlightのベータです。**',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)',
          },
          {
            'プラットフォーム': 'iPhone / iPad',
            '入手先': 'TestFlightの公開ベータ([tokforge.ai](https://tokforge.ai)を参照)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '非公開',
          },
        ],
        note: 'このページは、[Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)にある本アプリの項目の補足資料です。2026年10月3日に確認したバージョン:1.0(Playの説明と開発者のウェブサイトによる)。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**情報源は流れの概要しか説明しておらず、PromptQuorumはこれらの手順を実行していません。**',
        ],
        numberedItems: [
          {
            title: 'インストールして、アプリにスマートフォンの性能を見極めさせる',
            whyItMatters: '開発者のウェブサイトによれば、アプリは端末の性能を検出し、提示するモデルを絞り込みます。',
          },
          {
            title: 'モデルをダウンロードする',
            whyItMatters: '厳選された52モデルのカタログから選ぶか、内蔵のダウンローダーでHugging Faceを検索します。',
          },
          {
            title: '必要ならベンチマークを実行する',
            whyItMatters: 'AutoForgeがお使いのハードウェアでモデルとバックエンドの組み合わせを計測します。公開リーダーボードへの投稿は任意です。',
          },
          {
            title: 'チャットする、作る、ドキュメントに質問する',
            whyItMatters: 'チャットを始める、キャラクターを作成または取り込む、画像を生成する、ドキュメントを追加してその内容について質問する、のいずれかができます。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべてGoogle Playの説明または開発者のウェブサイトに基づくもので、独自にテストしたものはありません。**',
        ],
        items: [
          '**チャットとロールプレイ。** キャラクターを作成するか、chub.aiやTavernAIのカード(PNGまたはJSON)を取り込み、ペルソナ、ロアブック、代替の挨拶文、グループチャットに対応。',
          '**画像。** どの端末でもCPUで動く端末上での生成で、AdrenoではGPUによる高速化、対応するSnapdragon端末ではNPUによる高速化がある。開発者は、Pixel 9 Pro XLで512x512の画像におよそ31秒かかると述べている。',
          '**音声。** 複数の声を持つKokoroのテキスト読み上げ、約1分の録音音声からの音声クローン、音声入力。',
          '**ドキュメントとメモリ。** PDF、DOCX、EPUB、Markdown、CSV、テキストファイルについての質問に加え、長期メモリとナレッジグラフ。',
          '**エンジンとモデル。** OpenCLとVulkanを使うllama.cpp(GGUF)、OpenCLを使うMNN、またはOpenAI互換サーバーで、チップに応じた自動ルーティングと52モデルのカタログがある。',
          '**開発者向けAPIとバックアップ。** 自動化のためのローカルAPIエンドポイント(Google Playでは270以上、ウェブサイトでは284)と、会話、キャラクター、設定のバックアップと復元。',
        ],
        note: 'Playの文面とウェブサイトにはわずかな違いがあり(たとえばエンドポイント数)、最終的な基準は現行のビルドとその設定画面です。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'ハードウェアと速度',
        content: [
          '**開発者のウェブサイトは、小さなモデルには最小4 GBのRAM、大きなモデルには8 GB以上を必要と述べています。** 速度はチップに左右されます。掲載情報では、AdrenoにはGPUの経路、対応するSnapdragon端末にはNPUの経路があり、それ以外ではCPUにフォールバックすると説明されています。',
          'アプリのAutoForgeベンチマークは、お使いのスマートフォンでモデルとバックエンドの組み合わせごとに計測します。leaderboard.tokforge.aiの公開リーダーボードは、投稿することを選んだ場合に、端末から提出された結果を集めます。これらの数値はユーザーが提出し、開発者がホストしているもので、第三者による測定ではありません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとオンライン機能',
        content: [
          '**Google Playのデータセーフティのセクションには「収集するデータなし」「第三者と共有されるデータなし」とあり、説明はアナリティクスもテレメトリも一切ないと主張しています。** ウェブサイトは、チャットは端末内にのみ保存されると付け加えています。',
          '掲載情報自身の説明によれば、3つの機能はこの内容を超えています。Web検索は初期状態でオフで、オンにすると最新の情報を取得します。結果を公開リーダーボードに投稿するのはオプションです。接続したOpenAI互換サーバーは、送信した内容をすべて受け取ります。ソースコードが公開されていないため、これらをコードと照らして確認することはできず、いずれも開発者による申告であり、監査の結果ではありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはアプリのネットワーク通信を調べていません。機密データを扱う方は、Web検索とリーダーボードへの投稿をオフにした場合とオンにした場合の動作をご自身で確認してください。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '開発者から',
        content: [
          'TokForgeの開発者であるIsaac Maple氏が、このアプリと開発の理由について次のように述べています。以下は、読みやすさのために軽く編集した開発者自身の言葉として提示するものであり、PromptQuorumによる独立した編集上の評価ではありません:',
          '"最大の特長はautoForgeだと思っています。端末とモデルの組み合わせごとに、CPU、OpenCL、Vulkanの選択、スレッド数、コンテキストサイズといった最適で最速の推論設定を見つけ出します。',
          'このキャラクターカードは最初から4枚ありましたが、1か月ほど前まで、プロンプトなしの素のシステムデフォルトは用意しておらず、それを不満に思う方もいました。',
          'このアプリは実質的に私と、Discordのguardian37xというもう一人の仲間だけで作っています。',
          'Edge AI向けに小型のLLMを数多く変換・最適化し、自分のHugging Faceアカウントにアップロードしています。現在は約85モデルあると思います。',
          'なぜ作ったのかというと、私が始めた頃、モバイル推論の選択肢はいくつかありましたが、ほとんどがllama/GGUFベースで、有料だったり、フィルタリングされていたり、広告が表示されたりし、性能重視でもなく、深く掘り下げられるAPIバックエンドもありませんでした。MNNを使ったものも見たことがなく、エンジニアとして、当時のMNNはGGUFより最大50%速いこともあり、とてもわくわくしました。',
          'それが作った理由です。AI推論のコストは今後も上がり続け、一般の人が自分のデバイスで、フィルタリングも検閲もされない、自分のものと言えるAIを使うのは、さらに高くつくようになると考えています。そこで、その課題に応える、高速で無料、広告なしのものを作りたいと思いました。"',
        ],
        note: '— Isaac Maple氏、開発者',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'トレードオフ:利点と制約',
        columns: ['利点', '実際の使用での意味', '制約・注意点'],
        rows: [
          {
            '利点': '無料でアカウント不要',
            '実際の使用での意味': '登録やサブスクリプションなしでインストールして使える。',
            '制約・注意点': 'ソースは公開されておらず、ライセンスも明記されていない。',
          },
          {
            '利点': 'ロールプレイとメディアが1つのアプリに',
            '実際の使用での意味': 'キャラクター、画像、音声、ドキュメントが1回のインストールにまとまっている。',
            '制約・注意点': '機能の広さは開発者の説明であり、品質はここでは未検証。',
          },
          {
            '利点': 'チップに応じたエンジン',
            '実際の使用での意味': 'llama.cpp、MNN、リモートサーバーを自動ルーティングで使い分ける。',
            '制約・注意点': '最適な経路はSoCに左右され、速度はスマートフォンごとに大きく異なる。',
          },
          {
            '利点': '公開されたベンチマークデータ',
            '実際の使用での意味': '導入を決める前に、リーダーボードで各スマートフォンの性能がわかる。',
            '制約・注意点': '結果はユーザーが提出し、開発者がホストしている。',
          },
          {
            '利点': 'Android版は安定版の表記',
            '実際の使用での意味': 'バージョン1.0がGoogle Playにある。',
            '制約・注意点': 'インストール数は少なく(5K+)、iPhone版はベータ。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**取り込んだキャラクターカードでオフラインのロールプレイをしたいAndroidユーザー。** chub.aiとTavernAIのカードの取り込みは目玉の機能。',
          '**クラウドサービスなしで、画像、音声、ドキュメントを扱いたい人。** 3つとも端末上で動くと説明されている。',
          '**お使いのチップのベンチマークデータを見たい人。** 内蔵のベンチマークとリーダーボードは、その比較のために作られている。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**ライセンスとソースコード。** ライセンス文も公開リポジトリも見つからず、開発者自身のガイドは「No public repo」と記載しているため、動作をコードと照らして確認することはできない。',
          '**実機での性能と品質。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、出力品質は評価していない。',
          '**アプリ内課金と広告。** 読み取れたPlayのページにはそのような表示はないが、情報源はそれらを明確には否定していない。',
          '**開発者の背景。** Google PlayはDefcon-Oneを挙げ、開発者の詳細にはIsaac Mapleと米国の所在地が示されているが、読み取れた情報源には会社の登録情報も実績も見つからなかった。',
          '**まだiPhoneユーザー向けではない。** Apple版はApp Storeのリリースではなく、TestFlightのベータ。',
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
            'アプリ': '[Layla](/ja/power-local-llm/layla-review)',
            'プラットフォーム': 'Android、iOS',
            '料金/ライセンス': '有料 / クローズドソース',
            '主な違い': 'コンパニオンとロールプレイが中心で、オプションのクラウドモードがある',
          },
          {
            'アプリ': '[LLM Hub](/ja/power-local-llm/llm-hub-review)',
            'プラットフォーム': 'Android、iOS',
            '料金/ライセンス': '無料 + 課金 / PolyForm NC',
            '主な違い': 'MCPエージェントとメディア生成を備えた、より幅広い端末内スイート',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': '端末内のドキュメントQ&Aを備えた、オープンソースのオフラインチャット',
          },
        ],
        note: '競合の詳細は頻繁に変わります。各アプリの現在の料金、ライセンス、対応プラットフォームは、それぞれの掲載情報で確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'TokForgeは無料ですか?',
            a: 'はい。Google Playも開発者のウェブサイトも、サブスクリプションもアカウントも不要で無料と説明しています。読み取れたPlayのページにはアプリ内課金の表示はありませんが、情報源は課金を明確には否定していません。',
          },
          {
            q: 'TokForgeはオープンソースですか?',
            a: 'いいえ。公開ソースリポジトリもライセンスも見つからず、開発者自身の比較ガイドは「No public repo」と記載しています。',
          },
          {
            q: 'TokForgeを作っているのは誰ですか?',
            a: 'Google Playは開発者をDefcon-Oneと表記しており、開発者の詳細にはIsaac Mapleと米国の所在地が、掲載情報には連絡先メールアドレスが示されています。',
          },
          {
            q: 'オフラインで動きますか?',
            a: '掲載情報によれば、モデルをダウンロードしたあとは、チャット、画像、音声が端末上で動作します。Web検索は初期状態でオフで、リーダーボードへの投稿はオプションであり、ダウンロードと接続したサーバーにはネットワークが必要です。',
          },
          {
            q: 'iPhone版はありますか?',
            a: 'TestFlightの公開ベータとしてのみです。Android版はGoogle Playにあります。',
          },
          {
            q: 'どんなハードウェアが必要ですか?',
            a: '開発者のウェブサイトは、小さなモデルには少なくとも4 GBのRAM、大きなモデルには8 GB以上を必要と述べており、対応するSnapdragonのスマートフォンにはGPUとNPUの経路があります。',
          },
          {
            q: 'どのエンジンとモデルを使いますか?',
            a: 'GGUFモデル向けのllama.cpp、MNN、またはご自身で接続するOpenAI互換サーバーに加えて、52モデルのカタログとHugging Faceのダウンローダーがあります。',
          },
          {
            q: 'キャラクターカードを取り込めますか?',
            a: 'はい。説明によれば、chub.aiやTavernAIのカード(PNGまたはJSON)を取り込め、ペルソナ、ロアブック、代替の挨拶文、グループチャットにも対応します。',
          },
          {
            q: 'PocketPal AIとの違いは?',
            a: 'PocketPal AIはiOSとAndroidで使える、MITライセンスの無料チャットクライアントです。一方TokForgeはクローズドソースで、Androidでロールプレイ、画像、音声の機能を備え、iPhone版はベータです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'TokForgeは、ロールプレイのキャラクター、端末上での画像生成、音声クローン、ドキュメントQ&A、チップに応じたエンジンのルーティングを無料のAndroidアプリにまとめており、公開のベンチマーク・リーダーボードは速度について透明性を保とうとする珍しい試みです。その一方で、ソースは公開されておらずライセンスも明記されていません。インストール数は5K+と少なく、iPhone版はまだベータで、性能の数値は開発者によるもので、ここで述べた内容は実機でテストされていません。無料のオフラインのロールプレイ&メディアアプリを求め、これらの条件を受け入れられるAndroidユーザーに向いています。検証可能なコードを求める読者は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private Mind](/ja/power-local-llm/private-mind-review)と比較できます。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのTokForge](https://play.google.com/store/apps/details?id=dev.tokforge) — 説明、開発者の詳細、データセーフティのセクション、ダウンロード数、最終更新日。2026年10月3日確認。',
          '[tokforge.ai](https://tokforge.ai) — バージョン、プラットフォーム、ハードウェアの目安、開発者自身の比較ガイド。2026年10月3日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料のオープンソースの端末内チャットクライアント。',
          '[Laylaレビュー](/ja/power-local-llm/layla-review) — 有料のコンパニオン・ロールプレイアプリ。',
          '[LLM Hubレビュー](/ja/power-local-llm/llm-hub-review) — AndroidとiPhone向けの、より幅広い端末内AIスイート。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — 無料のMITライセンスのオフラインチャットアプリ。',
          '[2026年版 Android向けおすすめローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けのより広い比較記事。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tokforge-review-hero-pt.webp',
    title: 'TokForge: Análise do App de Chat de IA Offline para Android com Roleplay e Imagens',
    seoTitle: 'TokForge Análise: App de Chat de IA Offline',
    intro:
      'O TokForge é um app gratuito para Android, publicado por um desenvolvedor listado no Google Play como [Defcon-One](https://play.google.com/store/apps/details?id=dev.tokforge), que roda modelos de linguagem no celular e os combina com personagens de roleplay, geração de imagens no dispositivo, síntese de voz com clonagem de voz, perguntas sobre documentos e um benchmark integrado capaz de publicar velocidades em um ranking público. A versão 1.0 está no Google Play, enquanto a versão para iPhone e iPad é um beta público no TestFlight. O código-fonte do app não é publicado. Esta análise se baseia na ficha do Google Play e no site do próprio desenvolvedor, [tokforge.ai](https://tokforge.ai), consultados em 3 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do TokForge: app gratuito de IA offline para Android com roleplay, imagens, clonagem de voz e ranking de velocidade. Privacidade, hardware e limites.',
    twitterDescription:
      'Análise do TokForge: um app gratuito para Android de chat de IA offline com personagens de roleplay, imagens no dispositivo, clonagem de voz e um ranking público de velocidade — código fechado, versão para iPhone em beta.',
    audience:
      'Usuários de Android que querem um app de chat offline gratuito com roleplay e recursos de mídia e precisam saber o que as fontes confirmam, o que o desenvolvedor apenas afirma e o que não pôde ser verificado.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do TokForge',
    targetKeywords: [
      'tokforge análise',
      'tokforge chat de ia offline',
      'tokforge app android',
      'app de roleplay com ia offline android',
      'app de geração de imagens no dispositivo android',
      'app llama.cpp mnn android',
      'tokforge vs pocketpal ai',
    ],
    current_models_mentioned: ['Kokoro', 'GGUF models', 'MNN models'],
    current_hardware_mentioned: ['Android', 'Snapdragon', 'Adreno', 'Pixel 9 Pro XL'],
    leadAnswerBlock:
      '**O TokForge (versão 1.0 em 3 de outubro de 2026) é um app gratuito para Android, da Defcon-One, que roda modelos de linguagem locais por meio do llama.cpp ou do MNN e acrescenta personagens de roleplay, geração de imagens no dispositivo, voz e perguntas sobre documentos, sem conta.** Segundo sua ficha, as conversas nunca saem do dispositivo, a busca na web vem desligada por padrão e um benchmark pode, opcionalmente, publicar resultados em um ranking público. O código-fonte não é publicado e a licença não é informada, e a versão para iPhone e iPad ainda é um beta no TestFlight.',
    quickAnswerTop: {
      pt: {
        question: 'O TokForge é gratuito e roda totalmente offline?',
        answer:
          'Segundo sua ficha e seu site, sim: é gratuito, sem assinatura nem conta, e o chat, as imagens e a voz rodam no dispositivo depois que os modelos são baixados. A busca na web vem desligada por padrão, e publicar resultados do benchmark no ranking é opcional; um servidor que você mesmo conectar receberia suas conversas.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=dev.tokforge); a versão para iPhone e iPad é um beta público no TestFlight, e não está na App Store.',
          'Três caminhos de inferência: llama.cpp para GGUF, MNN ou o seu próprio servidor compatível com OpenAI.',
          'Extras: personagens de roleplay com cartões importados, geração de imagens no dispositivo, vozes Kokoro com clonagem de voz e perguntas sobre documentos.',
          'Conforme consultado em 3 de outubro de 2026: versão 1.0, mais de 5 mil downloads no Google Play, ficha atualizada pela última vez em 20 de setembro de 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o TokForge?', anchor: 'what-is-tokforge' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Hardware e velocidade', anchor: 'hardware-requirements' },
      { label: 'Privacidade e recursos online', anchor: 'privacy' },
      { label: 'A palavra do criador', anchor: 'from-the-maker' },
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
            text: 'O TokForge é um app gratuito de código fechado para Android, da Defcon-One, que roda modelos de linguagem locais com personagens de roleplay, geração de imagens no dispositivo, voz e perguntas sobre documentos, com a versão para iPhone e iPad ainda em beta no TestFlight.',
          },
          {
            type: 'plain-terms',
            text: 'Você o instala pelo Google Play, baixa um modelo que caiba no seu celular e conversa, cria imagens ou fala com personagens sem precisar de conta; o desenvolvedor também mantém um ranking público em que você pode optar por publicar os resultados de velocidade do seu celular.',
          },
        ],
        items: [
          'Desenvolvedor: listado como Defcon-One no Google Play, com Isaac Maple e uma localização nos Estados Unidos nos dados do desenvolvedor e um e-mail de contato na ficha.',
          'Preço e licença: gratuito, sem assinatura nem conta; nenhuma licença e nenhum repositório de código público foram encontrados, e o guia de comparação do próprio desenvolvedor lista "No public repo".',
          'Motores: llama.cpp (GGUF) com caminhos OpenCL e Vulkan, MNN com OpenCL ou um servidor compatível com OpenAI que você mesmo conecta.',
          'Escopo: personagens de roleplay, imagens no dispositivo, vozes Kokoro com clonagem, perguntas sobre documentos, um catálogo de 52 modelos com busca no Hugging Face e um ranking público de velocidade opcional.',
          'Sinais conforme consultados em 3 de outubro de 2026: versão 1.0, mais de 5 mil downloads no Google Play, ficha atualizada em 20 de setembro de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na ficha do Google Play e no site do próprio desenvolvedor, consultados em 3 de outubro de 2026. Os números de desempenho do site são afirmações do desenvolvedor, e a PromptQuorum não testou nem fez benchmarks do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-tokforge',
        title: 'O que é o TokForge?',
        content: [
          '**O TokForge é um app de chat para Android, offline em primeiro lugar, que reúne um executor de modelos locais com ferramentas de roleplay, imagem, voz e documentos.** Segundo sua [ficha no Google Play](https://play.google.com/store/apps/details?id=dev.tokforge), ele roda modelos completos no celular, sem nuvem nem conta, aceita personagens importados do chub.ai e cartões do TavernAI e escolhe automaticamente o motor mais rápido para o seu chip.',
          'O site do desenvolvedor descreve a versão 1.0 como o primeiro lançamento completo e diz que o app é muito menor do que as alternativas já estabelecidas. Essa franqueza importa para as expectativas: a base de instalações é pequena, e a versão para iPhone e iPad está apenas em beta no TestFlight.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O TokForge é distribuído pelo Google Play no Android; a versão para Apple é um beta no TestFlight, e não um lançamento na App Store.**',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Onde obter': 'Beta público via TestFlight (veja [tokforge.ai](https://tokforge.ai))',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': 'Não publicado',
          },
        ],
        note: 'Esta página é material complementar à entrada do app no [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versão conforme verificada em 3 de outubro de 2026: 1.0, a partir da descrição do Play e do site do desenvolvedor.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**As fontes descrevem o fluxo apenas em linhas gerais; a PromptQuorum não executou esses passos.**',
        ],
        numberedItems: [
          {
            title: 'Instalar e deixar o app avaliar o seu celular',
            whyItMatters: 'Segundo o site do desenvolvedor, o app detecta os recursos do dispositivo e seleciona os modelos oferecidos.',
          },
          {
            title: 'Baixar um modelo',
            whyItMatters: 'Escolha entre o catálogo selecionado de 52 modelos ou pesquise no Hugging Face pelo downloader integrado.',
          },
          {
            title: 'Executar o benchmark, se quiser',
            whyItMatters: 'O AutoForge avalia combinações de modelo e backend no seu hardware; publicar no ranking público é uma escolha sua.',
          },
          {
            title: 'Conversar, criar ou perguntar sobre seus documentos',
            whyItMatters: 'Inicie um chat, crie ou importe um personagem, gere uma imagem ou adicione um documento e pergunte sobre ele.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm da descrição do Google Play ou do site do desenvolvedor; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Chat e roleplay.** Crie personagens ou importe cartões do chub.ai e do TavernAI (PNG ou JSON), com personas, lorebooks, saudações alternativas e chats em grupo.',
          '**Imagens.** Geração no dispositivo que roda na CPU em qualquer aparelho, com aceleração por GPU em Adreno e por NPU em dispositivos Snapdragon compatíveis. O desenvolvedor cita cerca de 31 segundos para uma imagem de 512x512 em um Pixel 9 Pro XL.',
          '**Voz.** Síntese de voz Kokoro com várias vozes, clonagem de voz a partir de cerca de um minuto de áudio gravado e entrada por voz.',
          '**Documentos e memória.** Perguntas sobre arquivos PDF, DOCX, EPUB, Markdown, CSV e de texto, além de memória de longo prazo e um grafo de conhecimento.',
          '**Motores e modelos.** llama.cpp (GGUF) com OpenCL e Vulkan, MNN com OpenCL ou um servidor compatível com OpenAI, com roteamento automático por chip e um catálogo de 52 modelos.',
          '**API para desenvolvedores e backup.** Endpoints de API locais para automação (mais de 270 segundo o Google Play, 284 segundo o site) e backup e restauração de conversas, personagens e configurações.',
        ],
        note: 'O texto do Play e o site diferem um pouco (por exemplo, na contagem de endpoints), então a build atual e sua tela de configurações são a referência final.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware e velocidade',
        content: [
          '**O site do desenvolvedor informa um mínimo de 4 GB de RAM para modelos pequenos e 8 GB ou mais para modelos maiores.** A velocidade depende do chip: a ficha descreve caminhos de GPU em Adreno e de NPU em dispositivos Snapdragon compatíveis, com CPU como alternativa nos demais.',
          'O benchmark AutoForge do app mede cada combinação de modelo e backend no seu celular, e o ranking público em leaderboard.tokforge.ai reúne os resultados enviados pelos dispositivos, se você optar por publicar. Esses números são enviados por usuários e hospedados pelo desenvolvedor, e não são medições independentes.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e recursos online',
        content: [
          '**A seção Segurança dos dados do Google Play declara "No data collected" e "No data shared with third parties", e a descrição afirma que não há nenhuma análise de uso nem telemetria.** O site acrescenta que as conversas ficam armazenadas apenas no dispositivo.',
          'Três recursos vão além desse quadro, segundo a própria descrição da ficha: a busca na web vem desligada por padrão e, quando ativada, busca informações atuais; publicar resultados no ranking público é opcional; e um servidor compatível com OpenAI conectado recebe tudo o que você enviar a ele. Como o código-fonte não é publicado, nada disso pode ser conferido no código, e essas são declarações do desenvolvedor, não resultados de auditoria.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não inspecionou o tráfego de rede do app. Quem lida com dados confidenciais deve verificar o comportamento com a busca na web e a publicação no ranking desligadas e ligadas.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'A palavra do criador',
        content: [
          'Isaac Maple, o desenvolvedor do TokForge, compartilhou o seguinte sobre o aplicativo e os motivos de tê-lo criado. É apresentado como as próprias palavras do desenvolvedor, levemente editadas para facilitar a leitura, não como uma avaliação editorial independente da PromptQuorum:',
          '"Acho que o nosso melhor recurso é o autoForge, que encontra a melhor e mais rápida configuração de inferência para cada aparelho e modelo: CPU, OpenCL ou Vulkan, número de threads e tamanho de contexto.',
          'Originalmente eu tinha 4 desses cartões de personagem desde o início, mas até talvez um mês atrás o aplicativo não oferecia o padrão do sistema puro, sem prompt, o que incomodava algumas pessoas.',
          'O aplicativo é, na verdade, só eu e mais um amigo, o guardian37x no Discord.',
          'Eu converto e tento otimizar muitos dos LLMs menores para Edge AI e os envio para a minha conta no Hugging Face. Acho que hoje há cerca de 85 modelos lá.',
          'Quanto ao motivo de eu tê-lo criado: quando comecei, havia algumas outras opções de inferência móvel, mas a maioria era baseada em llama/GGUF, custava dinheiro, era filtrada, tinha anúncios e não era realmente focada em desempenho nem tinha um backend de API para se aprofundar de verdade. Também não tinha visto nenhuma que usasse MNN, e, como engenheiro, o MNN na época chegava a ser 50% mais rápido que o GGUF, o que era muito empolgante.',
          'Foi por isso que o criei. Imagino que os custos de inferência de IA continuarão subindo e que ficará mais caro para as pessoas comuns terem acesso a uma IA que seja delas, nos próprios dispositivos, sem filtros nem censura. Então quis fazer algo que abordasse isso e que fosse rápido, gratuito e sem anúncios."',
        ],
        note: '— Isaac Maple, desenvolvedor',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'Na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Gratuito e sem conta',
            'Na prática': 'Instale e use sem cadastro nem assinatura.',
            'Limitação / ressalva': 'O código-fonte não é publicado e nenhuma licença é informada.',
          },
          {
            'Benefício': 'Roleplay e mídia em um só app',
            'Na prática': 'Personagens, imagens, vozes e documentos em uma só instalação.',
            'Limitação / ressalva': 'A amplitude é descrita pelo desenvolvedor; a qualidade não foi testada aqui.',
          },
          {
            'Benefício': 'Motores adaptados ao chip',
            'Na prática': 'llama.cpp, MNN e um servidor remoto com roteamento automático.',
            'Limitação / ressalva': 'Os melhores caminhos dependem do SoC; a velocidade varia muito por celular.',
          },
          {
            'Benefício': 'Dados públicos de benchmark',
            'Na prática': 'Um ranking mostra o desempenho dos celulares antes de você se decidir.',
            'Limitação / ressalva': 'Os resultados são enviados por usuários e hospedados pelo desenvolvedor.',
          },
          {
            'Benefício': 'Versão Android marcada como estável',
            'Na prática': 'A versão 1.0 está no Google Play.',
            'Limitação / ressalva': 'Base de instalações pequena (5 mil+) e a versão para iPhone é um beta.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Usuários de Android que querem roleplay offline com cartões de personagem importados.** A importação de cartões do chub.ai e do TavernAI é um recurso de destaque.',
          '**Quem quer imagens, voz e documentos sem serviços na nuvem.** Os três são descritos como rodando no dispositivo.',
          '**Usuários que gostam de ver dados de benchmark para o seu chip.** O benchmark integrado e o ranking foram feitos para essa comparação.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Licença e código-fonte.** Nenhum texto de licença nem repositório público foi encontrado, e o guia do próprio desenvolvedor lista "No public repo", então o comportamento não pode ser conferido no código.',
          '**Desempenho e qualidade na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria e qualidade das respostas não foram avaliados.',
          '**Compras dentro do app e anúncios.** A página do Play lida não mostra esses rótulos, mas as fontes não os descartam de forma explícita.',
          '**Histórico do desenvolvedor.** O Google Play cita a Defcon-One, com Isaac Maple e uma localização nos Estados Unidos nos dados do desenvolvedor; nenhum registro de empresa nem histórico foi encontrado nas fontes lidas.',
          '**Ainda não é para usuários de iPhone.** A versão para Apple é um beta no TestFlight, e não um lançamento na App Store.',
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
            'App': '[Layla](/pt/power-local-llm/layla-review)',
            'Plataformas': 'Android, iOS',
            'Preço / licença': 'Pago / código fechado',
            'Principal diferença': 'Foco em companhia e roleplay, com modo na nuvem opcional',
          },
          {
            'App': '[LLM Hub](/pt/power-local-llm/llm-hub-review)',
            'Plataformas': 'Android, iOS',
            'Preço / licença': 'Gratuito + compras / PolyForm NC',
            'Principal diferença': 'Suíte mais ampla no dispositivo, com agente MCP e geração de mídia',
          },
          {
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Gratuito / MIT',
            'Principal diferença': 'Chat offline open source com perguntas sobre documentos no dispositivo',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais de cada app na própria ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O TokForge é gratuito?',
            a: 'Sim. Tanto o Google Play quanto o site do desenvolvedor o descrevem como gratuito, sem assinatura nem conta. A página do Play lida não mostra rótulo de compras dentro do app, embora as fontes não descartem as compras de forma explícita.',
          },
          {
            q: 'O TokForge é open source?',
            a: 'Não. Nenhum repositório de código público nem licença foi encontrado, e o guia de comparação do próprio desenvolvedor lista "No public repo".',
          },
          {
            q: 'Quem faz o TokForge?',
            a: 'O Google Play lista o desenvolvedor como Defcon-One, com Isaac Maple e uma localização nos Estados Unidos nos dados do desenvolvedor e um e-mail de contato na ficha.',
          },
          {
            q: 'Ele funciona offline?',
            a: 'Segundo a ficha, o chat, as imagens e a voz rodam no dispositivo depois que os modelos são baixados. A busca na web vem desligada por padrão, a publicação no ranking é opcional, e os downloads e qualquer servidor conectado precisam de rede.',
          },
          {
            q: 'Existe uma versão para iPhone?',
            a: 'Apenas como beta público no TestFlight. A versão para Android está no Google Play.',
          },
          {
            q: 'De que hardware ele precisa?',
            a: 'O site do desenvolvedor informa pelo menos 4 GB de RAM para modelos pequenos e 8 GB ou mais para modelos maiores, com caminhos de GPU e NPU em celulares Snapdragon compatíveis.',
          },
          {
            q: 'Quais motores e modelos ele usa?',
            a: 'llama.cpp para modelos GGUF, MNN ou um servidor compatível com OpenAI que você mesmo conecta, além de um catálogo de 52 modelos e um downloader do Hugging Face.',
          },
          {
            q: 'Ele consegue importar cartões de personagem?',
            a: 'Sim. A descrição diz que é possível importar cartões do chub.ai e do TavernAI (PNG ou JSON), com personas, lorebooks, saudações alternativas e chats em grupo.',
          },
          {
            q: 'Como ele se compara ao PocketPal AI?',
            a: 'O PocketPal AI é um cliente de chat gratuito com licença MIT para iOS e Android, enquanto o TokForge é de código fechado, com recursos de roleplay, imagem e voz no Android e um beta para iPhone.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O TokForge reúne personagens de roleplay, imagens no dispositivo, clonagem de voz, perguntas sobre documentos e roteamento de motores adaptado ao chip em um app gratuito para Android, e seu ranking público de benchmark é uma tentativa incomum de transparência sobre velocidade. Em contrapartida, o código-fonte não é publicado e nenhuma licença é informada, a base de instalações é pequena, com 5 mil+, a versão para iPhone ainda está em beta, os números de desempenho vêm do desenvolvedor e nada aqui foi testado na prática. Ele serve a usuários de Android que querem um app gratuito de roleplay e mídia offline e aceitam esses termos; quem quer código auditável pode comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Private Mind](/pt/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[TokForge no Google Play](https://play.google.com/store/apps/details?id=dev.tokforge) — descrição, dados do desenvolvedor, seção Segurança dos dados, número de downloads e data da última atualização, consultados em 3 de outubro de 2026.',
          '[tokforge.ai](https://tokforge.ai) — versão, plataformas, orientações de hardware e o guia de comparação do próprio desenvolvedor, consultados em 3 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e open source no dispositivo.',
          '[Análise do Layla](/pt/power-local-llm/layla-review) — um app pago de companhia e roleplay.',
          '[Análise do LLM Hub](/pt/power-local-llm/llm-hub-review) — uma suíte de IA no dispositivo mais ampla para Android e iPhone.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito com licença MIT.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tokforge-review-hero-ar.webp',
    title: 'مراجعة TokForge: دردشة ذكاء اصطناعي دون اتصال لأندرويد مع لعب الأدوار وتوليد الصور',
    seoTitle: 'مراجعة TokForge: دردشة ذكاء اصطناعي دون اتصال لأندرويد',
    intro:
      'TokForge تطبيق مجاني لأندرويد ينشره مطوّر مدرج على Google Play باسم [Defcon-One](https://play.google.com/store/apps/details?id=dev.tokforge)، ويشغّل النماذج اللغوية على الهاتف ويجمعها مع شخصيات لعب الأدوار، وتوليد الصور على الجهاز، وتحويل النص إلى كلام مع استنساخ الصوت، والأسئلة والأجوبة على المستندات، واختبار أداء مدمج يمكنه نشر السرعات على لوحة متصدرين عامة. الإصدار 1.0 (version 1.0) متاح على Google Play، أما نسخة iPhone و iPad فهي نسخة تجريبية عامة على TestFlight. والكود المصدري للتطبيق غير منشور. تستند هذه المراجعة إلى صفحة Google Play وإلى موقع المطوّر نفسه [tokforge.ai](https://tokforge.ai)، جرى التحقق منهما في 3 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عملياً.',
    metaDescription:
      'مراجعة TokForge: تطبيق ذكاء اصطناعي مجاني دون اتصال لأندرويد بشخصيات لعب أدوار وتوليد صور واستنساخ صوت ولوحة متصدرين للسرعة. النماذج والخصوصية والقيود.',
    twitterDescription:
      'مراجعة TokForge: تطبيق مجاني لأندرويد للدردشة دون اتصال مع شخصيات لعب الأدوار وصور على الجهاز واستنساخ الصوت ولوحة متصدرين عامة للسرعة — مغلق المصدر ونسخة iPhone تجريبية.',
    audience:
      'مستخدمو أندرويد الذين يريدون تطبيق دردشة مجانياً دون اتصال مع لعب الأدوار وميزات الوسائط، ويحتاجون إلى معرفة ما تؤكده المصادر وما يدّعيه المطوّر فقط وما تعذّر التحقق منه.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة TokForge',
    targetKeywords: [
      'مراجعة tokforge',
      'tokforge دردشة ذكاء اصطناعي دون اتصال',
      'تطبيق tokforge لأندرويد',
      'تطبيق لعب أدوار بالذكاء الاصطناعي دون اتصال لأندرويد',
      'تطبيق توليد صور على الجهاز لأندرويد',
      'تطبيق llama.cpp mnn لأندرويد',
      'tokforge مقابل pocketpal ai',
    ],
    current_models_mentioned: ['Kokoro', 'GGUF models', 'MNN models'],
    current_hardware_mentioned: ['Android', 'Snapdragon', 'Adreno', 'Pixel 9 Pro XL'],
    leadAnswerBlock:
      '**TokForge (الإصدار 1.0 اعتباراً من 3 أكتوبر 2026) تطبيق مجاني لأندرويد من Defcon-One يشغّل نماذج لغوية محلية عبر llama.cpp أو MNN ويضيف شخصيات لعب الأدوار وتوليد الصور على الجهاز والصوت والأسئلة والأجوبة على المستندات، دون حساب.** تذكر صفحته أن المحادثات لا تغادر الجهاز، وأن البحث على الويب معطَّل افتراضياً، وأن اختبار الأداء يمكنه اختيارياً نشر النتائج على لوحة متصدرين عامة. الكود المصدري غير منشور والترخيص غير مذكور، ونسخة iPhone و iPad لا تزال نسخة تجريبية على TestFlight.',
    quickAnswerTop: {
      ar: {
        question: 'هل TokForge مجاني، وهل يعمل دون اتصال بالكامل؟',
        answer:
          'بحسب صفحته وموقعه، نعم: هو مجاني دون اشتراك أو حساب، وتعمل الدردشة والصور والصوت على الجهاز بعد تنزيل النماذج. البحث على الويب معطَّل افتراضياً، ونشر نتائج اختبار الأداء على لوحة المتصدرين اختياري؛ أما الخادم الذي توصله بنفسك فسيستقبل محادثاتك.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)؛ ونسخة iPhone و iPad تجريبية عامة على TestFlight وليست على App Store.',
          'ثلاثة مسارات استدلال: llama.cpp لصيغة GGUF، أو MNN، أو خادمك المتوافق مع OpenAI.',
          'الإضافات: شخصيات لعب أدوار مع بطاقات مستوردة، وتوليد صور على الجهاز، وأصوات Kokoro مع استنساخ الصوت، وأسئلة وأجوبة على المستندات.',
          'بحسب ما جرى التحقق منه في 3 أكتوبر 2026: الإصدار 1.0، وأكثر من 5K تنزيل على Google Play، وآخر تحديث للصفحة في 20 سبتمبر 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو TokForge؟', anchor: 'what-is-tokforge' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'العتاد والسرعة', anchor: 'hardware-requirements' },
      { label: 'الخصوصية والميزات عبر الإنترنت', anchor: 'privacy' },
      { label: 'من صانع التطبيق', anchor: 'from-the-maker' },
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
            text: 'TokForge تطبيق مجاني مغلق المصدر لأندرويد من Defcon-One يشغّل نماذج لغوية محلية مع شخصيات لعب الأدوار وتوليد الصور على الجهاز والصوت والأسئلة والأجوبة على المستندات، ولا تزال نسخة iPhone و iPad منه تجريبية على TestFlight.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من Google Play، وتنزّل نموذجاً يناسب هاتفك، ثم تدردش أو تنشئ الصور أو تحادث الشخصيات دون حساب؛ ويشغّل المطوّر أيضاً لوحة متصدرين عامة يمكنك أن تختار نشر نتائج سرعة هاتفك عليها.',
          },
        ],
        items: [
          'المطوّر: مدرج باسم Defcon-One على Google Play، مع ظهور Isaac Maple وموقع في الولايات المتحدة في تفاصيل المطوّر، وبريد إلكتروني للتواصل في الصفحة.',
          'السعر والترخيص: مجاني دون اشتراك أو حساب؛ ولم يُعثر على ترخيص ولا على مستودع كود عام، ويدرج دليل المقارنة الخاص بالمطوّر عبارة "No public repo".',
          'المحركات: llama.cpp (GGUF) مع مساري OpenCL و Vulkan، أو MNN مع OpenCL، أو خادم متوافق مع OpenAI توصله بنفسك.',
          'النطاق: شخصيات لعب أدوار، وصور على الجهاز، وأصوات Kokoro مع الاستنساخ، وأسئلة وأجوبة على المستندات، وكتالوج من 52 نموذجاً مع بحث في Hugging Face، ولوحة متصدرين عامة اختيارية للسرعة.',
          'المؤشرات بحسب ما جرى التحقق منه في 3 أكتوبر 2026: الإصدار 1.0، وأكثر من 5K تنزيل على Google Play، وتحديث الصفحة في 20 سبتمبر 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة Google Play وإلى موقع المطوّر نفسه، جرى التحقق منهما في 3 أكتوبر 2026. أرقام الأداء على الموقع هي ادعاءات المطوّر، ولم تختبر PromptQuorum التطبيق ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-tokforge',
        title: 'ما هو TokForge؟',
        content: [
          '**TokForge تطبيق دردشة لأندرويد يعمل دون اتصال أولاً، ويجمع مشغّل نماذج محلياً مع أدوات لعب الأدوار والصور والصوت والمستندات.** وبحسب [صفحته على Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)، يشغّل نماذج كاملة على الهاتف دون سحابة أو حساب، ويدعم الشخصيات المستوردة من chub.ai وبطاقات TavernAI، ويختار تلقائياً أسرع محرك لشريحتك.',
          'يصف موقع المطوّر الإصدار 1.0 بأنه أول إصدار كامل، ويذكر أن التطبيق أصغر بكثير من البدائل الراسخة. وهذه الصراحة مهمة لضبط التوقعات: قاعدة تثبيته صغيرة، ونسخة iPhone و iPad منه لا تزال تجريبية على TestFlight فقط.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُوزَّع TokForge عبر Google Play على أندرويد؛ ونسخة Apple نسخة تجريبية على TestFlight وليست إصداراً على App Store.**',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'أندرويد',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)',
          },
          {
            'المنصة': 'iPhone / iPad',
            'مكان الحصول عليه': 'نسخة تجريبية عامة عبر TestFlight (انظر [tokforge.ai](https://tokforge.ai))',
          },
          {
            'المنصة': 'الكود المصدري',
            'مكان الحصول عليه': 'غير منشور',
          },
        ],
        note: 'هذه الصفحة مادة مرافقة لإدخال التطبيق في [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). الإصدار بحسب ما جرى التحقق منه في 3 أكتوبر 2026: 1.0، من وصف Play ومن موقع المطوّر.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تصف المصادر هذا المسار بخطوطه العريضة فقط؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق ودعه يقدّر إمكانات هاتفك',
            whyItMatters: 'يكتشف التطبيق قدرات الجهاز وينتقي النماذج المعروضة، بحسب موقع المطوّر.',
          },
          {
            title: 'نزّل نموذجاً',
            whyItMatters: 'اختر من الكتالوج المنتقى المكوَّن من 52 نموذجاً أو ابحث في Hugging Face عبر أداة التنزيل المدمجة.',
          },
          {
            title: 'شغّل اختبار الأداء اختيارياً',
            whyItMatters: 'يختبر AutoForge تركيبات النماذج والمحركات على عتادك؛ ونشر النتائج على لوحة المتصدرين العامة خيارك.',
          },
          {
            title: 'دردش أو أنشئ أو اسأل مستنداتك',
            whyItMatters: 'ابدأ دردشة، أو أنشئ شخصية أو استوردها، أو ولّد صورة، أو أضف مستنداً واسأل عنه.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل عنصر أدناه مأخوذ من وصف Google Play أو من موقع المطوّر؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**الدردشة ولعب الأدوار.** أنشئ شخصيات أو استورد بطاقات من chub.ai و TavernAI (PNG أو JSON)، مع شخصيات مستخدم (personas) ودفاتر معلومات (lorebooks) وتحيات بديلة ومحادثات جماعية.',
          '**الصور.** توليد على الجهاز يعمل على المعالج المركزي في كل مكان، مع تسريع بوحدة GPU على Adreno وبوحدة NPU على أجهزة Snapdragon المدعومة. ويذكر المطوّر نحو 31 ثانية لصورة 512x512 على هاتف Pixel 9 Pro XL.',
          '**الصوت.** تحويل النص إلى كلام بواسطة Kokoro بعدة أصوات، واستنساخ الصوت من نحو دقيقة من الصوت المسجَّل، وإدخال صوتي.',
          '**المستندات والذاكرة.** أسئلة عن ملفات PDF و DOCX و EPUB و Markdown و CSV والنصوص، إضافة إلى ذاكرة طويلة الأمد ورسم معرفي (knowledge graph).',
          '**المحركات والنماذج.** llama.cpp (GGUF) مع OpenCL و Vulkan، أو MNN مع OpenCL، أو خادم متوافق مع OpenAI، مع توجيه تلقائي بحسب الشريحة وكتالوج من 52 نموذجاً.',
          '**واجهة المطوّرين والنسخ الاحتياطي.** نقاط API محلية للأتمتة (270+ بحسب Google Play و 284 بحسب الموقع)، ونسخ احتياطي واستعادة للمحادثات والشخصيات والإعدادات.',
        ],
        note: 'يختلف نص Play عن الموقع قليلاً (مثلاً في عدد نقاط API)، لذا فإن الإصدار الحالي وشاشة إعداداته هما المرجع النهائي.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'العتاد والسرعة',
        content: [
          '**يذكر موقع المطوّر حداً أدنى قدره 4 GB من الذاكرة RAM للنماذج الصغيرة و 8 GB أو أكثر للنماذج الأكبر.** وتعتمد السرعة على الشريحة: تصف الصفحة مسارات GPU على Adreno ومسارات NPU على أجهزة Snapdragon المدعومة، مع الرجوع إلى المعالج المركزي في غيرها.',
          'يقيس اختبار AutoForge في التطبيق كل تركيبة من النموذج والمحرك على هاتفك، وتجمع لوحة المتصدرين العامة على leaderboard.tokforge.ai النتائج التي ترسلها الأجهزة إذا اخترت نشرها. وهذه الأرقام يرسلها المستخدمون ويستضيفها المطوّر، وليست قياسات مستقلة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والميزات عبر الإنترنت',
        content: [
          '**يعلن قسم أمان البيانات في Google Play عبارتي "No data collected" و"No data shared with third parties"، ويزعم الوصف عدم وجود أي تحليلات ولا قياس عن بُعد (telemetry).** ويضيف الموقع أن المحادثات تُخزَّن على الجهاز فقط.',
          'ثلاث ميزات تتجاوز هذه الصورة بحسب وصف الصفحة نفسها: البحث على الويب معطَّل افتراضياً، وعند تفعيله يجلب معلومات حديثة؛ ونشر النتائج على لوحة المتصدرين العامة اختياري؛ والخادم المتوافق مع OpenAI الذي توصله يستقبل كل ما ترسله إليه. ولأن الكود المصدري غير منشور، لا يمكن التحقق من أي من هذا بمقارنته بالكود، وهذه إعلانات من المطوّر وليست نتائج تدقيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تفحص PromptQuorum حركة الشبكة للتطبيق. وعلى من يتعامل مع بيانات سرية أن يتحقق من السلوك مع تعطيل البحث على الويب ونشر لوحة المتصدرين وتفعيلهما.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'من صانع التطبيق',
        content: [
          'شارك Isaac Maple، مطور TokForge، ما يلي عن التطبيق وأسباب بنائه. يُعرض هنا بوصفه كلمات المطور نفسه بعد تحرير طفيف لتسهيل القراءة، وليس تقييمًا تحريريًا مستقلًا من PromptQuorum:',
          '"أعتقد أن أفضل ميزة لدينا هي autoForge، التي تجد أفضل وأسرع إعداد للاستدلال لكل جهاز ولكل نموذج: CPU أو OpenCL أو Vulkan، وعدد الخيوط (threads)، وحجم السياق.',
          'كان لدي في الأصل 4 من بطاقات الشخصيات هذه منذ البداية، لكن حتى قبل نحو شهر لم يكن التطبيق يقدم الإعداد الافتراضي للنظام من دون موجّه (prompt)، وهذا أزعج بعض الناس.',
          'التطبيق في الواقع مجرد أنا وصديق آخر، هو guardian37x على Discord.',
          'أقوم بتحويل الكثير من نماذج LLM الأصغر وتحسينها لـ Edge AI وأرفعها إلى حسابي على Hugging Face. أظن أن هناك نحو 85 نموذجًا هناك الآن.',
          'أما لماذا بنيته: حين بدأت، كانت هناك بعض الخيارات الأخرى للاستدلال على الهاتف، لكن معظمها كان قائمًا على llama/GGUF، وبعضها مدفوع أو مفلتر أو يعرض إعلانات، ولم تكن موجهة فعلًا نحو الأداء ولا تملك واجهة API خلفية للتعمق حقًا. ولم أكن قد رأيت أيًا منها يستخدم MNN، وبصفتي مهندسًا، كان MNN في ذلك الوقت أسرع أحيانًا بنسبة 50% من GGUF، وكان ذلك مثيرًا حقًا.',
          'لهذا بنيته. أتوقع أن تستمر تكاليف الاستدلال بالذكاء الاصطناعي في الارتفاع وأن يصبح وصول الناس العاديين إلى ذكاء اصطناعي يملكونه ويعمل على أجهزتهم من دون فلترة أو رقابة أكثر كلفة. لذلك أردت أن أصنع شيئًا يعالج ذلك، وأن يكون سريعًا ومجانيًا وخاليًا من الإعلانات."',
        ],
        note: '— Isaac Maple، مطور',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: ['الميزة', 'المعنى في الاستخدام', 'القيد / التحفّظ'],
        rows: [
          {
            'الميزة': 'مجاني ودون حساب',
            'المعنى في الاستخدام': 'تثبّته وتستخدمه دون تسجيل أو اشتراك.',
            'القيد / التحفّظ': 'الكود المصدري غير منشور والترخيص غير مذكور.',
          },
          {
            'الميزة': 'لعب الأدوار والوسائط في تطبيق واحد',
            'المعنى في الاستخدام': 'الشخصيات والصور والأصوات والمستندات في تثبيت واحد.',
            'القيد / التحفّظ': 'المطوّر هو من يصف هذا الاتساع؛ والجودة لم تُختبر هنا.',
          },
          {
            'الميزة': 'محركات تراعي الشريحة',
            'المعنى في الاستخدام': 'llama.cpp و MNN وخادم بعيد مع توجيه تلقائي.',
            'القيد / التحفّظ': 'أفضل المسارات تعتمد على الشريحة؛ والسرعات تختلف كثيراً بين الهواتف.',
          },
          {
            'الميزة': 'بيانات اختبار أداء عامة',
            'المعنى في الاستخدام': 'تُظهر لوحة المتصدرين أداء الهواتف قبل أن تلتزم.',
            'القيد / التحفّظ': 'النتائج يرسلها المستخدمون ويستضيفها المطوّر.',
          },
          {
            'الميزة': 'إصدار أندرويد موسوم بأنه مستقر',
            'المعنى في الاستخدام': 'الإصدار 1.0 متاح على Google Play.',
            'القيد / التحفّظ': 'قاعدة تثبيت صغيرة (5K+)، ونسخة iPhone تجريبية.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو أندرويد الذين يريدون لعب أدوار دون اتصال مع بطاقات شخصيات مستوردة.** استيراد بطاقات chub.ai و TavernAI ميزة رئيسية.',
          '**من يريدون الصور والصوت والمستندات دون خدمات سحابية.** تُوصف الثلاثة بأنها تعمل على الجهاز.',
          '**المستخدمون الذين يحبون الاطلاع على بيانات الأداء لشريحتهم.** صُمّم اختبار الأداء المدمج ولوحة المتصدرين لهذه المقارنة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الترخيص والكود المصدري.** لم يُعثر على نص ترخيص ولا على مستودع عام، ويدرج دليل المطوّر نفسه عبارة "No public repo"، لذا لا يمكن التحقق من السلوك بمقارنته بالكود.',
          '**الأداء والجودة عملياً.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم السرعة واستهلاك البطارية وجودة المخرجات.',
          '**عمليات الشراء داخل التطبيق والإعلانات.** لا تُظهر صفحة Play التي قُرئت أي ملصقات بهذا الشأن، لكن المصادر لا تستبعدها صراحةً.',
          '**خلفية المطوّر.** تسمّي Google Play الجهة Defcon-One، مع Isaac Maple وموقع في الولايات المتحدة في تفاصيل المطوّر؛ ولم يُعثر في المصادر التي قُرئت على تسجيل شركة ولا على سجل إنجازات.',
          '**ليس لمستخدمي iPhone بعد.** نسخة Apple نسخة تجريبية على TestFlight وليست إصداراً على App Store.',
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
            'التطبيق': '[Layla](/ar/power-local-llm/layla-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر / الترخيص': 'مدفوع / مغلق المصدر',
            'الفرق الرئيسي': 'تركيز على الرفيق ولعب الأدوار مع وضع سحابي اختياري',
          },
          {
            'التطبيق': '[LLM Hub](/ar/power-local-llm/llm-hub-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر / الترخيص': 'مجاني + شراء داخل التطبيق / PolyForm NC',
            'الفرق الرئيسي': 'مجموعة أوسع على الجهاز مع وكيل MCP وتوليد وسائط',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة وأجوبة على المستندات داخل الجهاز',
          },
        ],
        note: 'تفاصيل المنافسين تتغير كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق من صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل TokForge مجاني؟',
            a: 'نعم. يصفه كل من Google Play وموقع المطوّر بأنه مجاني دون اشتراك أو حساب. ولا تُظهر صفحة Play التي قُرئت ملصق عمليات شراء داخل التطبيق، لكن المصادر لا تستبعد عمليات الشراء صراحةً.',
          },
          {
            q: 'هل TokForge مفتوح المصدر؟',
            a: 'لا. لم يُعثر على مستودع كود عام ولا على ترخيص، ويدرج دليل المقارنة الخاص بالمطوّر عبارة "No public repo".',
          },
          {
            q: 'من يصنع TokForge؟',
            a: 'تدرج Google Play المطوّر باسم Defcon-One، مع Isaac Maple وموقع في الولايات المتحدة في تفاصيل المطوّر، وبريد إلكتروني للتواصل في الصفحة.',
          },
          {
            q: 'هل يعمل دون اتصال؟',
            a: 'بحسب الصفحة، تعمل الدردشة والصور والصوت على الجهاز بعد تنزيل النماذج. البحث على الويب معطَّل افتراضياً، ونشر لوحة المتصدرين اختياري، أما التنزيلات وأي خادم متصل فتحتاج إلى شبكة.',
          },
          {
            q: 'هل توجد نسخة لـ iPhone؟',
            a: 'فقط كنسخة تجريبية عامة على TestFlight. أما نسخة أندرويد فهي على Google Play.',
          },
          {
            q: 'ما العتاد الذي يحتاجه؟',
            a: 'يذكر موقع المطوّر 4 GB على الأقل من الذاكرة RAM للنماذج الصغيرة و 8 GB أو أكثر للنماذج الأكبر، مع مسارات GPU و NPU على هواتف Snapdragon المدعومة.',
          },
          {
            q: 'ما المحركات والنماذج التي يستخدمها؟',
            a: 'llama.cpp لنماذج GGUF، أو MNN، أو خادم متوافق مع OpenAI توصله بنفسك، إضافة إلى كتالوج من 52 نموذجاً وأداة تنزيل من Hugging Face.',
          },
          {
            q: 'هل يمكنه استيراد بطاقات الشخصيات؟',
            a: 'نعم. يذكر الوصف إمكان استيراد بطاقات من chub.ai و TavernAI (PNG أو JSON)، مع شخصيات مستخدم ودفاتر معلومات وتحيات بديلة ومحادثات جماعية.',
          },
          {
            q: 'كيف يقارن بـ PocketPal AI؟',
            a: 'PocketPal AI عميل دردشة مجاني بترخيص MIT على iOS وأندرويد، بينما TokForge مغلق المصدر مع ميزات لعب الأدوار والصور والصوت على أندرويد ونسخة iPhone تجريبية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يجمع TokForge شخصيات لعب الأدوار وصور الجهاز واستنساخ الصوت والأسئلة والأجوبة على المستندات وتوجيه المحركات بحسب الشريحة في تطبيق مجاني لأندرويد، ولوحة المتصدرين العامة لاختبار الأداء محاولة غير معتادة للشفافية في السرعة. في المقابل، الكود المصدري غير منشور والترخيص غير مذكور، وقاعدة التثبيت صغيرة عند 5K+، ونسخة iPhone لا تزال تجريبية، وأرقام الأداء مصدرها المطوّر، ولم يُختبر شيء مما هنا عملياً. وهو يناسب مستخدمي أندرويد الذين يريدون تطبيق لعب أدوار ووسائط مجانياً دون اتصال ويقبلون هذه الشروط؛ أما من يريدون كوداً قابلاً للتدقيق فيمكنهم مقارنته بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private Mind](/ar/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[TokForge على Google Play](https://play.google.com/store/apps/details?id=dev.tokforge) — الوصف وتفاصيل المطوّر وقسم أمان البيانات وعدد التنزيلات وتاريخ آخر تحديث، جرى التحقق منها في 3 أكتوبر 2026.',
          '[tokforge.ai](https://tokforge.ai) — الإصدار والمنصات وإرشادات العتاد ودليل المقارنة الخاص بالمطوّر، جرى التحقق منها في 3 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز.',
          '[مراجعة Layla](/ar/power-local-llm/layla-review) — تطبيق مدفوع بطابع الرفيق ولعب الأدوار.',
          '[مراجعة LLM Hub](/ar/power-local-llm/llm-hub-review) — مجموعة ذكاء اصطناعي أوسع على الجهاز لأندرويد و iPhone.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT.',
          '[أفضل تطبيقات LLM المحلية لأندرويد في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — نظرة أوسع على تطبيقات أندرويد.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tokforge-review-hero-zh.webp',
    title: 'TokForge 评测:支持角色扮演与图像生成的 Android 离线 AI 聊天应用',
    seoTitle: 'TokForge 评测:Android 离线 AI 聊天应用',
    intro:
      'TokForge 是一款免费的 Android 应用,由在 Google Play 上列为 [Defcon-One](https://play.google.com/store/apps/details?id=dev.tokforge) 的开发者发布,在手机上运行语言模型,并整合了角色扮演角色、设备端图像生成、带声音克隆的文字转语音、文档问答,以及可将速度结果发布到公开排行榜的内置基准测试。版本 1.0 已在 Google Play 上架,而 iPhone 和 iPad 版本是 TestFlight 上的公开测试版。该应用的源代码未公开。本评测基于 Google Play 页面和开发者自己的网站 [tokforge.ai](https://tokforge.ai),核实于 2026 年 10 月 3 日;PromptQuorum 没有对该应用进行实测。',
    metaDescription:
      'TokForge 评测:一款免费的 Android 离线 AI 聊天应用,含角色扮演、图像生成、声音克隆和速度排行榜。涵盖模型、隐私与局限。',
    twitterDescription:
      'TokForge 评测:一款免费的 Android 离线 AI 聊天应用,含角色扮演角色、设备端图像、声音克隆和公开速度排行榜——闭源,iPhone 版本为测试版。',
    audience:
      '希望使用带角色扮演和媒体功能的免费离线聊天应用的 Android 用户,并且需要了解来源确认了什么、开发者只是声称了什么,以及哪些内容无法验证。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TokForge 评测',
    targetKeywords: [
      'tokforge 评测',
      'tokforge 离线 ai 聊天',
      'tokforge android 应用',
      'android 离线 ai 角色扮演应用',
      'android 设备端图像生成应用',
      'llama.cpp mnn android 应用',
      'tokforge 与 pocketpal ai 对比',
    ],
    current_models_mentioned: ['Kokoro', 'GGUF models', 'MNN models'],
    current_hardware_mentioned: ['Android', 'Snapdragon', 'Adreno', 'Pixel 9 Pro XL'],
    leadAnswerBlock:
      '**TokForge(截至 2026 年 10 月 3 日为版本 1.0)是 Defcon-One 开发的一款免费 Android 应用,通过 llama.cpp 或 MNN 运行本地语言模型,并附带角色扮演角色、设备端图像生成、语音和文档问答,无需账号。** 其页面称对话不会离开设备,网页搜索默认关闭,基准测试可选择将结果发布到公开排行榜。源代码未公开,许可证也未说明,iPhone 和 iPad 版本仍是 TestFlight 测试版。',
    quickAnswerTop: {
      zh: {
        question: 'TokForge 免费吗?能完全离线运行吗?',
        answer:
          '据其页面和网站,是的:免费,无需订阅或账号,模型下载完成后,聊天、图像和语音都在设备上运行。网页搜索默认关闭,将基准测试结果发布到排行榜是可选的;你自己连接的服务器则会收到你的聊天内容。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=dev.tokforge) 免费获取;iPhone 和 iPad 版本是 TestFlight 上的公开测试版,不在 App Store 上架。',
          '三种推理路径:用于 GGUF 的 llama.cpp、MNN,或你自己的兼容 OpenAI 的服务器。',
          '附加功能:可导入角色卡的角色扮演、设备端图像生成、带声音克隆的 Kokoro 语音,以及文档问答。',
          '据 2026 年 10 月 3 日核实:版本 1.0,Google Play 下载量 5K+,页面最近更新于 2026 年 9 月 20 日。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'TokForge 是什么?', anchor: 'what-is-tokforge' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '如何开始使用', anchor: 'getting-started' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '硬件与速度', anchor: 'hardware-requirements' },
      { label: '隐私与联网功能', anchor: 'privacy' },
      { label: '来自开发者', anchor: 'from-the-maker' },
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
            text: 'TokForge 是 Defcon-One 开发的一款免费闭源 Android 应用,运行本地语言模型,并附带角色扮演角色、设备端图像生成、语音和文档问答,其 iPhone 和 iPad 版本仍处于 TestFlight 测试阶段。',
          },
          {
            type: 'plain-terms',
            text: '你从 Google Play 安装,下载一个适合你手机的模型,无需账号即可聊天、生成图像或与角色对话;开发者还运营着一个公开排行榜,你可以选择发布自己手机的速度结果。',
          },
        ],
        items: [
          '开发者:在 Google Play 上列为 Defcon-One,开发者详情中显示 Isaac Maple 和美国地址,页面上有联系邮箱。',
          '价格与许可证:免费,无需订阅或账号;未找到许可证和公开的源代码仓库,开发者自己的对比指南列出的是“No public repo”。',
          '引擎:带 OpenCL 和 Vulkan 路径的 llama.cpp(GGUF)、带 OpenCL 的 MNN,或你自己连接的兼容 OpenAI 的服务器。',
          '范围:角色扮演角色、设备端图像、带克隆功能的 Kokoro 语音、文档问答、含 Hugging Face 搜索的 52 个模型目录,以及可选的公开速度排行榜。',
          '据 2026 年 10 月 3 日核实的信号:版本 1.0,Google Play 下载量 5K+,页面更新于 2026 年 9 月 20 日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Google Play 页面和开发者自己的网站,核实于 2026 年 10 月 3 日。网站上的性能数据是开发者的声明,PromptQuorum 没有对该应用进行实测或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-tokforge',
        title: 'TokForge 是什么?',
        content: [
          '**TokForge 是一款离线优先的 Android 聊天应用,把本地模型运行器与角色扮演、图像、语音和文档工具打包在一起。** 据其 [Google Play 页面](https://play.google.com/store/apps/details?id=dev.tokforge),它在手机上运行完整模型,无需云端或账号,支持导入来自 chub.ai 的角色和 TavernAI 角色卡,并会为你的芯片自动选择最快的引擎。',
          '开发者网站将版本 1.0 描述为首个完整版本,并称该应用比成熟的替代品小得多。这种坦率有助于调整预期:它的安装基数较小,其 iPhone 和 iPad 版本也仅处于 TestFlight 测试阶段。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**TokForge 在 Android 上通过 Google Play 发布;Apple 版本是 TestFlight 测试版,而非 App Store 正式发布。**',
        ],
        columns: ['平台', '获取途径'],
        rows: [
          {
            '平台': 'Android',
            '获取途径': '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)',
          },
          {
            '平台': 'iPhone / iPad',
            '获取途径': '通过 TestFlight 的公开测试版(见 [tokforge.ai](https://tokforge.ai))',
          },
          {
            '平台': '源代码',
            '获取途径': '未公开',
          },
        ],
        note: '本页是该应用在 [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory) 中词条的配套资料。据 2026 年 10 月 3 日核实的版本:1.0,来自 Play 描述和开发者网站。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用',
        content: [
          '**来源只是概略描述了这一流程;PromptQuorum 没有执行过这些步骤。**',
        ],
        numberedItems: [
          {
            title: '安装并让应用评估你的手机',
            whyItMatters: '据开发者网站,应用会检测设备能力并筛选提供的模型。',
          },
          {
            title: '下载模型',
            whyItMatters: '从精选的 52 个模型目录中选择,或通过内置下载器搜索 Hugging Face。',
          },
          {
            title: '可选:运行基准测试',
            whyItMatters: 'AutoForge 会在你的硬件上对各种模型与后端组合进行基准测试;是否发布到公开排行榜由你决定。',
          },
          {
            title: '聊天、创作或向文档提问',
            whyItMatters: '开始聊天,创建或导入角色,生成图像,或添加文档并就其提问。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**下面每一项都来自 Google Play 描述或开发者网站;均未经独立测试。**',
        ],
        items: [
          '**聊天与角色扮演。** 创建角色或导入来自 chub.ai 和 TavernAI 的角色卡(PNG 或 JSON),带有人设、世界书(lorebook)、备选开场白和群聊。',
          '**图像。** 设备端生成,在任何设备上都可用 CPU 运行,在 Adreno 上有 GPU 加速,在受支持的 Snapdragon 设备上有 NPU 加速。开发者称在 Pixel 9 Pro XL 上生成 512x512 图像约需 31 秒。',
          '**语音。** 带多种声音的 Kokoro 文字转语音、可根据约一分钟录音进行的声音克隆,以及语音输入。',
          '**文档与记忆。** 可就 PDF、DOCX、EPUB、Markdown、CSV 和文本文件提问,另有长期记忆和知识图谱。',
          '**引擎与模型。** 带 OpenCL 和 Vulkan 的 llama.cpp(GGUF)、带 OpenCL 的 MNN,或兼容 OpenAI 的服务器,按芯片自动路由,并有 52 个模型的目录。',
          '**开发者 API 与备份。** 用于自动化的本地 API 端点(Google Play 称 270+,网站称 284),以及对话、角色和设置的备份与恢复。',
        ],
        note: 'Play 文本与网站略有出入(例如端点数量),因此应以当前构建版本及其设置界面为准。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '硬件与速度',
        content: [
          '**开发者网站给出的最低要求是:小型模型 4 GB 内存,较大模型 8 GB 或更多。** 速度取决于芯片:页面描述了 Adreno 上的 GPU 路径和受支持的 Snapdragon 设备上的 NPU 路径,其他设备则回退到 CPU。',
          '应用的 AutoForge 基准测试会在你的手机上测量每种模型与后端组合,如果你选择发布,位于 leaderboard.tokforge.ai 的公开排行榜会收集设备提交的结果。这些数据由用户提交、由开发者托管,并非独立测量。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与联网功能',
        content: [
          '**Google Play 的“数据安全”部分声明“未收集任何数据”和“未与第三方共享任何数据”,描述中还称零分析、零遥测。** 网站补充说,聊天仅存储在设备上。',
          '据页面自己的描述,有三项功能超出了这一图景:网页搜索默认关闭,开启后会获取最新信息;将结果发布到公开排行榜是可选的;而所连接的兼容 OpenAI 的服务器会收到你发送给它的所有内容。由于源代码未公开,这些都无法对照代码核查,而且这些是开发者的声明,而非审计结果。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 没有检查该应用的网络流量。处理机密数据的人应分别在关闭和开启网页搜索及排行榜发布的情况下核实其行为。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '来自开发者',
        content: [
          'TokForge的开发者Isaac Maple分享了以下关于这款应用及其开发原因的内容。以下内容以开发者本人的话呈现,为便于阅读略作编辑,并非PromptQuorum独立的编辑评估:',
          '"我认为我们最好的功能是autoForge,它会针对每台手机和每个模型找到最佳、最快的推理配置:CPU、OpenCL或Vulkan、线程数和上下文长度。',
          '这类角色卡片最初就有4张,但直到大约一个月前,应用还没有提供不带提示词的纯系统默认模式,这让一些用户很不满。',
          '这款应用其实只有我和另一位朋友,也就是Discord上的guardian37x。',
          '我把许多较小的LLM转换并尽量优化,用于Edge AI,然后上传到我的Hugging Face账号。我想现在大约有85个模型。',
          '至于我为什么要做它:我刚开始时,移动端推理有几个其他选择,但大多基于llama/GGUF,要收费、有过滤、带广告,而且并不真正以性能为导向,也没有可以深入使用的API后端。我也没见过使用MNN的应用,而作为工程师,当时的MNN有时比GGUF快50%,这让我非常兴奋。',
          '这就是我做它的原因。我认为AI推理的成本会持续上升,普通人要使用属于自己、运行在自己设备上、没有过滤和审查的AI会变得更贵。所以我想做出一款能解决这个问题的应用,既快速、免费,又没有广告。"',
        ],
        note: '— Isaac Maple,开发者',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '权衡:优点与局限',
        columns: ['优点', '实际使用中的含义', '局限 / 注意事项'],
        rows: [
          {
            '优点': '免费且无需账号',
            '实际使用中的含义': '无需注册或订阅即可安装使用。',
            '局限 / 注意事项': '源代码未公开,也未说明许可证。',
          },
          {
            '优点': '角色扮演与媒体合一',
            '实际使用中的含义': '角色、图像、语音和文档集中在一次安装里。',
            '局限 / 注意事项': '功能广度由开发者描述;质量在此未经测试。',
          },
          {
            '优点': '适配芯片的引擎',
            '实际使用中的含义': 'llama.cpp、MNN 和远程服务器,自动路由。',
            '局限 / 注意事项': '最佳路径取决于 SoC;不同手机速度差异很大。',
          },
          {
            '优点': '公开的基准测试数据',
            '实际使用中的含义': '排行榜可让你在决定前了解各手机的表现。',
            '局限 / 注意事项': '结果由用户提交,并由开发者托管。',
          },
          {
            '优点': 'Android 版本标为正式版',
            '实际使用中的含义': '版本 1.0 已在 Google Play 上架。',
            '局限 / 注意事项': '安装基数较小(5K+),iPhone 版本是测试版。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**希望用导入的角色卡进行离线角色扮演的 Android 用户。** 导入 chub.ai 和 TavernAI 角色卡是其主打功能。',
          '**希望不依赖云服务使用图像、语音和文档功能的人。** 这三项都被描述为在设备上运行。',
          '**喜欢查看自己芯片基准测试数据的用户。** 内置基准测试和排行榜正是为这种对比而设计的。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法验证的内容',
        items: [
          '**许可证与源代码。** 未找到许可证文本或公开代码仓库,开发者自己的指南列出的是“No public repo”,因此无法对照代码核查其行为。',
          '**实际使用的性能与质量。** PromptQuorum 没有运行该应用,因此速度、电池消耗和输出质量均未评估。',
          '**应用内购买与广告。** 所读的 Play 页面没有显示此类标签,但来源并未明确排除它们。',
          '**开发者背景。** Google Play 列出 Defcon-One,开发者详情中有 Isaac Maple 和美国地址;在所读来源中未找到公司注册信息或过往记录。',
          '**暂不适合 iPhone 用户。** Apple 版本是 TestFlight 测试版,而非 App Store 正式发布。',
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
            '应用': '[Layla](/zh/power-local-llm/layla-review)',
            '平台': 'Android、iOS',
            '价格 / 许可证': '付费 / 闭源',
            '主要区别': '侧重陪伴与角色扮演,另有可选的云端模式',
          },
          {
            '应用': '[LLM Hub](/zh/power-local-llm/llm-hub-review)',
            '平台': 'Android、iOS',
            '价格 / 许可证': '免费 + 内购 / PolyForm NC',
            '主要区别': '更广的设备端套件,含 MCP 智能体和媒体生成',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源离线聊天,带设备端文档问答',
          },
        ],
        note: '竞品信息经常变化;请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'TokForge 免费吗?',
            a: '是的。Google Play 和开发者网站都将其描述为免费,无需订阅或账号。所读的 Play 页面没有显示应用内购买标签,但来源并未明确排除购买。',
          },
          {
            q: 'TokForge 是开源的吗?',
            a: '不是。未找到公开的源代码仓库或许可证,开发者自己的对比指南列出的是“No public repo”。',
          },
          {
            q: 'TokForge 是谁开发的?',
            a: 'Google Play 将开发者列为 Defcon-One,开发者详情中有 Isaac Maple 和美国地址,页面上有联系邮箱。',
          },
          {
            q: '它能离线使用吗?',
            a: '据页面描述,模型下载完成后,聊天、图像和语音都在设备上运行。网页搜索默认关闭,发布到排行榜是可选的,而下载以及任何所连接的服务器都需要网络。',
          },
          {
            q: '有 iPhone 版本吗?',
            a: '仅有 TestFlight 上的公开测试版。Android 版本在 Google Play 上。',
          },
          {
            q: '它需要什么硬件?',
            a: '开发者网站称小型模型至少需要 4 GB 内存,较大模型需要 8 GB 或更多,受支持的 Snapdragon 手机上有 GPU 和 NPU 路径。',
          },
          {
            q: '它使用哪些引擎和模型?',
            a: '用于 GGUF 模型的 llama.cpp、MNN,或你自己连接的兼容 OpenAI 的服务器,另有 52 个模型的目录和 Hugging Face 下载器。',
          },
          {
            q: '它能导入角色卡吗?',
            a: '能。描述称可以导入来自 chub.ai 和 TavernAI 的角色卡(PNG 或 JSON),带有人设、世界书、备选开场白和群聊。',
          },
          {
            q: '它与 PocketPal AI 相比如何?',
            a: 'PocketPal AI 是 iOS 和 Android 上免费、MIT 许可的聊天客户端,而 TokForge 是闭源的,在 Android 上提供角色扮演、图像和语音功能,另有 iPhone 测试版。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'TokForge 把角色扮演角色、设备端图像、声音克隆、文档问答和适配芯片的引擎路由整合进一款免费的 Android 应用,其公开的基准测试排行榜是在速度透明度方面一次少见的尝试。另一方面,源代码未公开,许可证也未说明,安装基数仅为 5K+,iPhone 版本仍是测试版,性能数据来自开发者,这里的一切也都没有经过实测。它适合希望使用免费离线角色扮演与媒体应用并接受这些条件的 Android 用户;希望使用可审计代码的读者可以对比 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Private Mind](/zh/power-local-llm/private-mind-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Google Play 上的 TokForge](https://play.google.com/store/apps/details?id=dev.tokforge) — 描述、开发者信息、数据安全部分、下载量和最近更新日期,核实于 2026 年 10 月 3 日。',
          '[tokforge.ai](https://tokforge.ai) — 版本、平台、硬件指引和开发者自己的对比指南,核实于 2026 年 10 月 3 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 免费、开源的设备端聊天客户端。',
          '[Layla 评测](/zh/power-local-llm/layla-review) — 付费的陪伴与角色扮演应用。',
          '[LLM Hub 评测](/zh/power-local-llm/llm-hub-review) — 适用于 Android 和 iPhone 的更全面的设备端 AI 套件。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 免费、MIT 许可的离线聊天应用。',
          '[2026 年 Android 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用汇总。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-05',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/tokforge-review-hero-ko.webp',
    title: 'TokForge 리뷰: 롤플레이와 이미지 생성을 갖춘 오프라인 Android AI 채팅 앱',
    seoTitle: 'TokForge 리뷰: 오프라인 Android AI 채팅 앱',
    intro:
      'TokForge는 Google Play에 [Defcon-One](https://play.google.com/store/apps/details?id=dev.tokforge)으로 표기된 개발자가 배포하는 무료 Android 앱으로, 휴대폰에서 언어 모델을 실행하고 롤플레이 캐릭터, 온디바이스 이미지 생성, 음성 복제를 지원하는 텍스트 음성 변환, 문서 Q&A, 그리고 속도를 공개 리더보드에 올릴 수 있는 내장 벤치마크를 하나로 묶었습니다. 버전 1.0은 Google Play에 있고, iPhone·iPad 버전은 TestFlight 공개 베타입니다. 앱의 소스 코드는 공개되어 있지 않습니다. 이 리뷰는 2026년 10월 3일에 확인한 Google Play 게재 정보와 개발자 본인의 웹사이트 [tokforge.ai](https://tokforge.ai)를 근거로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'TokForge 리뷰: 롤플레이 캐릭터, 이미지 생성, 음성 복제, 속도 리더보드를 갖춘 무료 오프라인 Android AI 채팅 앱입니다. 지원 엔진과 모델, 하드웨어 요구 사항, 개인정보 처리, 클로즈드 소스라는 한계, 그리고 확인하지 못한 사항까지 출처 기준으로 정리했습니다.',
    twitterDescription:
      'TokForge 리뷰: 롤플레이 캐릭터, 온디바이스 이미지, 음성 복제, 공개 속도 리더보드를 갖춘 무료 오프라인 AI 채팅 Android 앱. 클로즈드 소스이며 iPhone 버전은 베타입니다.',
    audience:
      '롤플레이와 미디어 기능을 갖춘 무료 오프라인 채팅 앱을 찾는 Android 이용자로, 출처가 무엇을 확인해 주는지, 개발자가 무엇을 주장만 하는지, 무엇을 확인하지 못했는지 알아야 하는 분들.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'TokForge 리뷰',
    targetKeywords: [
      'tokforge 리뷰',
      'tokforge 오프라인 ai 채팅',
      'tokforge 안드로이드 앱',
      '안드로이드 오프라인 ai 롤플레이 앱',
      '안드로이드 온디바이스 이미지 생성 앱',
      'llama.cpp mnn 안드로이드 앱',
      'tokforge pocketpal ai 비교',
    ],
    current_models_mentioned: ['Kokoro', 'GGUF models', 'MNN models'],
    current_hardware_mentioned: ['Android', 'Snapdragon', 'Adreno', 'Pixel 9 Pro XL'],
    leadAnswerBlock:
      '**TokForge(2026년 10월 3일 기준 버전 1.0)는 Defcon-One이 만든 무료 Android 앱으로, llama.cpp 또는 MNN으로 로컬 언어 모델을 실행하고 롤플레이 캐릭터, 온디바이스 이미지 생성, 음성, 문서 Q&A를 더했으며 계정이 필요 없습니다.** 게재 정보에 따르면 대화는 기기 밖으로 나가지 않고, 웹 검색은 기본적으로 꺼져 있으며, 벤치마크 결과는 선택에 따라 공개 리더보드에 올릴 수 있습니다. 소스 코드는 공개되어 있지 않고 라이선스도 명시되어 있지 않으며, iPhone·iPad 버전은 아직 TestFlight 베타입니다.',
    quickAnswerTop: {
      ko: {
        question: 'TokForge는 무료이며 완전히 오프라인으로 실행됩니까?',
        answer:
          '게재 정보와 웹사이트에 따르면 그렇습니다. 구독이나 계정 없이 무료이며, 모델을 내려받은 뒤에는 채팅, 이미지, 음성이 기기에서 실행됩니다. 웹 검색은 기본적으로 꺼져 있고 벤치마크 결과를 리더보드에 올리는 것은 선택 사항이며, 직접 연결한 서버는 이용자의 대화를 받게 됩니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)에서 무료이며, iPhone·iPad 버전은 App Store가 아니라 TestFlight 공개 베타임.',
          '추론 경로 세 가지: GGUF용 llama.cpp, MNN, 또는 직접 연결하는 OpenAI 호환 서버.',
          '부가 기능: 가져온 카드를 쓰는 롤플레이 캐릭터, 온디바이스 이미지 생성, 음성 복제를 지원하는 Kokoro 음성, 문서 Q&A.',
          '2026년 10월 3일 확인 기준: 버전 1.0, Google Play 다운로드 5K+, 게재 정보 최종 업데이트 2026년 9월 20일.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'TokForge란 무엇인가?', anchor: 'what-is-tokforge' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '하드웨어와 속도', anchor: 'hardware-requirements' },
      { label: '개인정보와 온라인 기능', anchor: 'privacy' },
      { label: '개발자의 말', anchor: 'from-the-maker' },
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
            text: 'TokForge는 Defcon-One이 만든 클로즈드 소스 무료 Android 앱으로, 롤플레이 캐릭터, 온디바이스 이미지 생성, 음성, 문서 Q&A와 함께 로컬 언어 모델을 실행하며, iPhone·iPad 버전은 아직 TestFlight 베타입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Google Play에서 설치하고 휴대폰에 맞는 모델을 내려받으면 계정 없이 채팅하고, 이미지를 만들고, 캐릭터와 대화할 수 있습니다. 개발자는 공개 리더보드도 운영하며, 내 휴대폰의 속도 결과를 올릴지는 이용자가 선택합니다.',
          },
        ],
        items: [
          '개발자: Google Play에는 Defcon-One으로 표기되어 있고, 개발자 정보에 Isaac Maple과 미국 위치가 표시되며 게재 정보에 연락처 이메일이 있음.',
          '가격과 라이선스: 구독이나 계정 없이 무료이며, 라이선스와 공개 소스 저장소는 찾지 못했고 개발자 본인의 비교 가이드에는 "No public repo"로 적혀 있음.',
          '엔진: OpenCL·Vulkan 경로를 갖춘 llama.cpp(GGUF), OpenCL을 쓰는 MNN, 또는 직접 연결하는 OpenAI 호환 서버.',
          '범위: 롤플레이 캐릭터, 온디바이스 이미지, 음성 복제를 지원하는 Kokoro 음성, 문서 Q&A, Hugging Face 검색이 되는 52개 모델 카탈로그, 선택형 공개 속도 리더보드.',
          '2026년 10월 3일 확인 기준 지표: 버전 1.0, Google Play 다운로드 5K+, 게재 정보 업데이트 2026년 9월 20일.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 3일에 확인한 Google Play 게재 정보와 개발자 본인의 웹사이트를 근거로 합니다. 사이트의 성능 수치는 개발자의 주장이며, PromptQuorum은 앱을 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-tokforge',
        title: 'TokForge란 무엇인가?',
        content: [
          '**TokForge는 로컬 모델 실행기에 롤플레이, 이미지, 음성, 문서 도구를 묶은 오프라인 우선 Android 채팅 앱입니다.** [Google Play 게재 정보](https://play.google.com/store/apps/details?id=dev.tokforge)에 따르면 클라우드나 계정 없이 휴대폰에서 전체 모델을 실행하고, chub.ai와 TavernAI 카드에서 가져온 캐릭터를 지원하며, 칩에 가장 빠른 엔진을 자동으로 고릅니다.',
          '개발자의 웹사이트는 버전 1.0을 첫 정식 릴리스로 설명하고, 앱이 기존의 널리 쓰이는 대안보다 훨씬 작은 규모라고 밝힙니다. 이 솔직함은 기대치를 잡는 데 중요합니다. 설치 기반이 작고, iPhone·iPad 버전은 TestFlight 베타일 뿐입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**TokForge는 Android의 Google Play로 배포되며, Apple 버전은 App Store 릴리스가 아니라 TestFlight 베타입니다.**',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=dev.tokforge)',
          },
          {
            '플랫폼': 'iPhone / iPad',
            '받는 곳': 'TestFlight 공개 베타 ([tokforge.ai](https://tokforge.ai) 참고)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '공개되지 않음',
          },
        ],
        note: '이 페이지는 [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)에 있는 이 앱 항목의 보조 자료입니다. 2026년 10월 3일에 확인한 버전: 1.0 (Play 설명과 개발자 웹사이트 기준).',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**출처는 이 흐름을 개략적으로만 설명하며, PromptQuorum은 이 단계를 직접 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '설치하고 앱이 휴대폰을 파악하게 하기',
            whyItMatters: '개발자 웹사이트에 따르면 앱이 기기 성능을 감지해 제공할 모델을 선별합니다.',
          },
          {
            title: '모델 내려받기',
            whyItMatters: '선별된 52개 모델 카탈로그에서 고르거나 내장 다운로더로 Hugging Face를 검색합니다.',
          },
          {
            title: '원하면 벤치마크 실행',
            whyItMatters: 'AutoForge가 내 하드웨어에서 모델과 백엔드 조합을 벤치마크하며, 공개 리더보드에 올릴지는 이용자의 선택입니다.',
          },
          {
            title: '채팅, 만들기, 문서에 질문하기',
            whyItMatters: '채팅을 시작하고, 캐릭터를 만들거나 가져오고, 이미지를 생성하거나, 문서를 추가해 그에 대해 질문합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명 또는 개발자 웹사이트에서 가져온 것이며, 어느 것도 독립적으로 테스트되지 않았습니다.**',
        ],
        items: [
          '**채팅과 롤플레이.** 캐릭터를 만들거나 chub.ai와 TavernAI 카드(PNG 또는 JSON)를 가져올 수 있으며, 페르소나, 로어북, 대체 인사말, 그룹 채팅을 지원합니다.',
          '**이미지.** 어디서나 CPU에서 실행되는 온디바이스 생성으로, Adreno에서는 GPU 가속, 지원되는 Snapdragon 기기에서는 NPU 가속을 씁니다. 개발자는 Pixel 9 Pro XL에서 512x512 이미지에 약 31초가 걸린다고 밝힙니다.',
          '**음성.** 여러 음성을 갖춘 Kokoro 텍스트 음성 변환, 약 1분 분량의 녹음으로 하는 음성 복제, 음성 입력.',
          '**문서와 메모리.** PDF, DOCX, EPUB, Markdown, CSV, 텍스트 파일에 대한 질문과 장기 메모리, 지식 그래프.',
          '**엔진과 모델.** OpenCL·Vulkan을 쓰는 llama.cpp(GGUF), OpenCL을 쓰는 MNN, 또는 OpenAI 호환 서버이며, 칩에 따른 자동 라우팅과 52개 모델 카탈로그를 갖춥니다.',
          '**개발자 API와 백업.** 자동화용 로컬 API 엔드포인트(Google Play는 270개 이상, 웹사이트는 284개)와 대화, 캐릭터, 설정의 백업 및 복원.',
        ],
        note: 'Play 텍스트와 웹사이트는 엔드포인트 수처럼 조금씩 다르므로, 최종 기준은 현재 빌드와 그 설정 화면입니다.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '하드웨어와 속도',
        content: [
          '**개발자 웹사이트는 작은 모델에는 최소 4 GB RAM, 더 큰 모델에는 8 GB 이상이 필요하다고 밝힙니다.** 속도는 칩에 따라 달라지며, 게재 정보는 Adreno의 GPU 경로와 지원되는 Snapdragon 기기의 NPU 경로를 설명하고 그 밖에는 CPU로 대체한다고 합니다.',
          '앱의 AutoForge 벤치마크는 내 휴대폰에서 모델과 백엔드 조합마다 속도를 측정하며, leaderboard.tokforge.ai의 공개 리더보드는 이용자가 올리기로 선택한 기기 제출 결과를 모읍니다. 이 수치는 이용자가 제출하고 개발자가 호스팅하는 것으로, 독립적인 측정이 아닙니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 온라인 기능',
        content: [
          '**Google Play 데이터 보안 섹션에는 "수집된 데이터 없음"과 "제3자와 공유된 데이터 없음"이 선언되어 있고, 설명은 분석과 원격 측정이 전혀 없다고 주장합니다.** 웹사이트는 여기에 대화가 기기에만 저장된다고 덧붙입니다.',
          '게재 정보 자체의 설명에 따르면 세 가지 기능은 이 그림을 넘어섭니다. 웹 검색은 기본적으로 꺼져 있고 켜면 최신 정보를 가져옵니다. 결과를 공개 리더보드에 올리는 것은 선택 사항입니다. 연결한 OpenAI 호환 서버는 이용자가 보내는 모든 내용을 받습니다. 소스가 공개되어 있지 않으므로 이 어느 것도 코드와 대조해 확인할 수 없으며, 이는 개발자의 선언이지 감사 결과가 아닙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 앱의 네트워크 트래픽을 점검하지 않았습니다. 기밀 데이터를 다루는 경우에는 웹 검색과 리더보드 게시를 끈 상태와 켠 상태 모두에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '개발자의 말',
        content: [
          'TokForge의 개발자 Isaac Maple이 앱과 개발 이유에 대해 다음과 같이 전했습니다. 가독성을 위해 가볍게 편집한 개발자 본인의 말로 제시하는 것이며, PromptQuorum의 독립적인 편집 평가가 아닙니다:',
          '"가장 좋은 기능은 autoForge라고 생각합니다. 기기와 모델마다 CPU, OpenCL 또는 Vulkan, 스레드 수, 컨텍스트 크기까지 가장 좋고 빠른 추론 설정을 찾아줍니다.',
          '이 캐릭터 카드는 처음부터 4개가 있었지만, 한 달쯤 전까지는 프롬프트 없는 기본 시스템 상태를 제공하지 않아서 불편해하시는 분들이 있었습니다.',
          '이 앱은 사실 저와 Discord의 guardian37x라는 친구 한 명이 전부입니다.',
          'Edge AI용으로 작은 LLM을 많이 변환하고 최적화해서 제 Hugging Face 계정에 올리고 있습니다. 지금은 약 85개 모델이 있는 것 같습니다.',
          '제가 이 앱을 만든 이유는, 제가 시작했을 때 모바일 추론에는 몇 가지 다른 선택지가 있었지만 대부분 llama/GGUF 기반이었고, 유료이거나 필터링이 되어 있거나 광고가 있었으며, 성능 중심이 아니거나 깊이 파고들 수 있는 API 백엔드가 없었기 때문입니다. MNN을 쓰는 앱도 본 적이 없었고, 엔지니어로서 당시 MNN은 GGUF보다 때로는 50% 더 빨라서 정말 흥미로웠습니다.',
          '그래서 만들었습니다. 저는 AI 추론 비용이 계속 오르고, 일반 사람들이 자신의 기기에서 필터링이나 검열 없이 자기 소유의 AI를 쓰는 데 점점 더 많은 비용이 들게 될 것이라고 생각합니다. 그래서 이 문제를 해결하면서 빠르고, 무료이고, 광고 없는 것을 만들고 싶었습니다."',
        ],
        note: '— Isaac Maple, 개발자',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의사항'],
        rows: [
          {
            '이점': '무료, 계정 불필요',
            '실제 사용에서의 의미': '가입이나 구독 없이 설치해 사용함.',
            '한계 / 유의사항': '소스가 공개되어 있지 않고 라이선스도 명시되어 있지 않음.',
          },
          {
            '이점': '롤플레이와 미디어를 한 앱에',
            '실제 사용에서의 의미': '캐릭터, 이미지, 음성, 문서가 한 번의 설치에 들어 있음.',
            '한계 / 유의사항': '범위는 개발자의 설명이며, 품질은 여기서 테스트하지 않음.',
          },
          {
            '이점': '칩을 고려한 엔진',
            '실제 사용에서의 의미': 'llama.cpp, MNN, 원격 서버를 자동 라우팅으로 사용함.',
            '한계 / 유의사항': '최적 경로는 SoC에 좌우되며 속도는 휴대폰마다 크게 다름.',
          },
          {
            '이점': '공개 벤치마크 데이터',
            '실제 사용에서의 의미': '선택하기 전에 휴대폰별 성능을 리더보드에서 볼 수 있음.',
            '한계 / 유의사항': '결과는 이용자가 제출하고 개발자가 호스팅함.',
          },
          {
            '이점': 'Android 릴리스는 안정판으로 표시됨',
            '실제 사용에서의 의미': '버전 1.0이 Google Play에 있음.',
            '한계 / 유의사항': '설치 기반이 작고(5K+) iPhone 버전은 베타임.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**가져온 캐릭터 카드로 오프라인 롤플레이를 하고 싶은 Android 이용자.** chub.ai와 TavernAI 카드 가져오기가 대표 기능입니다.',
          '**클라우드 서비스 없이 이미지, 음성, 문서를 쓰고 싶은 분.** 세 가지 모두 기기에서 실행되는 것으로 설명되어 있습니다.',
          '**내 칩의 벤치마크 데이터를 보고 싶은 분.** 내장 벤치마크와 리더보드는 그런 비교를 위해 설계되었습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**라이선스와 소스 코드.** 라이선스 본문이나 공개 저장소를 찾지 못했고 개발자 본인의 가이드에도 "No public repo"로 적혀 있으므로, 동작을 코드와 대조해 확인할 수 없습니다.',
          '**실제 사용 성능과 품질.** PromptQuorum은 앱을 실행하지 않았으므로 속도, 배터리 소모, 출력 품질은 평가하지 않았습니다.',
          '**인앱 구매와 광고.** 확인한 Play 페이지에는 그런 표시가 없지만, 출처가 이를 명시적으로 배제하지는 않습니다.',
          '**개발자 배경.** Google Play는 Defcon-One을 개발자로 밝히고 개발자 정보에 Isaac Maple과 미국 위치를 표시하지만, 확인한 출처에서는 회사 등록이나 이력을 찾지 못했습니다.',
          '**아직 iPhone 이용자용이 아닙니다.** Apple 버전은 App Store 릴리스가 아니라 TestFlight 베타입니다.',
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
            '앱': '[Layla](/ko/power-local-llm/layla-review)',
            '플랫폼': 'Android, iOS',
            '가격 / 라이선스': '유료 / 클로즈드 소스',
            '핵심 차이': '컴패니언·롤플레이 중심이며 선택형 클라우드 모드 제공',
          },
          {
            '앱': '[LLM Hub](/ko/power-local-llm/llm-hub-review)',
            '플랫폼': 'Android, iOS',
            '가격 / 라이선스': '무료 + 인앱 구매 / PolyForm NC',
            '핵심 차이': 'MCP 에이전트와 미디어 생성을 갖춘 더 폭넓은 온디바이스 모음',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '온디바이스 문서 Q&A를 갖춘 오픈 소스 오프라인 채팅',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'TokForge는 무료입니까?',
            a: '네. Google Play와 개발자 웹사이트 모두 구독이나 계정 없이 무료라고 설명합니다. 확인한 Play 페이지에는 인앱 구매 표시가 없지만, 출처가 구매를 명시적으로 배제하지는 않습니다.',
          },
          {
            q: 'TokForge는 오픈 소스입니까?',
            a: '아닙니다. 공개 소스 저장소나 라이선스를 찾지 못했고, 개발자 본인의 비교 가이드에는 "No public repo"로 적혀 있습니다.',
          },
          {
            q: 'TokForge는 누가 만드나요?',
            a: 'Google Play는 개발자를 Defcon-One으로 표기하며, 개발자 정보에 Isaac Maple과 미국 위치가 있고 게재 정보에 연락처 이메일이 있습니다.',
          },
          {
            q: '오프라인에서도 작동하나요?',
            a: '게재 정보에 따르면 모델을 내려받은 뒤에는 채팅, 이미지, 음성이 기기에서 실행됩니다. 웹 검색은 기본적으로 꺼져 있고 리더보드 게시는 선택 사항이며, 다운로드와 연결한 서버에는 네트워크가 필요합니다.',
          },
          {
            q: 'iPhone 버전이 있나요?',
            a: 'TestFlight 공개 베타로만 있습니다. Android 버전은 Google Play에 있습니다.',
          },
          {
            q: '어떤 하드웨어가 필요한가요?',
            a: '개발자 웹사이트는 작은 모델에 최소 4 GB RAM, 더 큰 모델에 8 GB 이상이 필요하다고 밝히며, 지원되는 Snapdragon 휴대폰에는 GPU와 NPU 경로가 있다고 합니다.',
          },
          {
            q: '어떤 엔진과 모델을 쓰나요?',
            a: 'GGUF 모델용 llama.cpp, MNN, 또는 직접 연결하는 OpenAI 호환 서버를 쓰며, 52개 모델 카탈로그와 Hugging Face 다운로더가 있습니다.',
          },
          {
            q: '캐릭터 카드를 가져올 수 있나요?',
            a: '네. 설명에 따르면 chub.ai와 TavernAI의 카드(PNG 또는 JSON)를 가져올 수 있으며, 페르소나, 로어북, 대체 인사말, 그룹 채팅을 지원합니다.',
          },
          {
            q: 'PocketPal AI와 비교하면 어떤가요?',
            a: 'PocketPal AI는 iOS와 Android의 MIT 라이선스 무료 채팅 클라이언트이고, TokForge는 클로즈드 소스이며 Android의 롤플레이, 이미지, 음성 기능과 iPhone 베타를 갖추고 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'TokForge는 롤플레이 캐릭터, 온디바이스 이미지, 음성 복제, 문서 Q&A, 칩을 고려한 엔진 라우팅을 무료 Android 앱에 담았고, 공개 벤치마크 리더보드는 속도에 대한 투명성을 높이려는 보기 드문 시도입니다. 반면 소스는 공개되어 있지 않고 라이선스도 명시되어 있지 않으며, 설치 기반은 5K+로 작고, iPhone 버전은 아직 베타이고, 성능 수치는 개발자에게서 나왔으며, 여기서는 아무것도 직접 테스트하지 않았습니다. 무료 오프라인 롤플레이·미디어 앱을 원하고 이런 조건을 받아들이는 Android 이용자에게 적합하며, 감사할 수 있는 코드를 원한다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private Mind](/ko/power-local-llm/private-mind-review)와 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 TokForge](https://play.google.com/store/apps/details?id=dev.tokforge) — 설명, 개발자 정보, 데이터 보안 섹션, 다운로드 수, 최종 업데이트 날짜. 2026년 10월 3일 확인.',
          '[tokforge.ai](https://tokforge.ai) — 버전, 플랫폼, 하드웨어 안내, 개발자 본인의 비교 가이드. 2026년 10월 3일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 무료 오픈 소스 온디바이스 채팅 클라이언트.',
          '[Layla 리뷰](/ko/power-local-llm/layla-review) — 유료 컴패니언·롤플레이 앱.',
          '[LLM Hub 리뷰](/ko/power-local-llm/llm-hub-review) — Android와 iPhone용 더 폭넓은 온디바이스 AI 모음.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — MIT 라이선스의 무료 오프라인 채팅 앱.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 더 폭넓은 Android 종합 비교.',
        ],
      },
    },
  },
}
