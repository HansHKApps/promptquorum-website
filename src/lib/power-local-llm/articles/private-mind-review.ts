// Private Mind Review: Open-Source Offline AI Chat for iPhone and Android
// Slug: private-mind-review
// Companion to: pocketpal-ai-review, google-ai-edge-gallery-review, mlc-chat-review, maid-review,
// best-local-llm-apps-android-2026, best-local-llm-apps-iphone-2026
// Sources: App Store + Google Play listings, the public GitHub repository (README, LICENSE, releases,
// model catalog, in-repo release notes and known-issues doc), all checked 2026-10-03 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-mind-review-hero-en.webp',
    title: 'Private Mind Review: Open-Source Offline AI Chat for iPhone and Android',
    seoTitle: 'Private Mind Review: Offline Open-Source AI Chat App',
    intro:
      'Private Mind is a free, open-source chat app from [Software Mansion](https://swmansion.com), a Polish software company, that runs open-weight language models on an iPhone, iPad, or Android phone through the React Native ExecuTorch library. Beyond chat it offers on-device document Q&A with source citations, dictation with Whisper, vision-capable models, built-in speed benchmarks, and — since version 1.3.0 — an optional Web toggle that fetches pages from the internet. Its source code is published under the MIT license on [GitHub](https://github.com/software-mansion-labs/private-mind). This review is based on the App Store and Google Play listings and the public repository, checked on 3 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Private Mind review: a free, MIT-licensed offline AI chat app for iPhone and Android with on-device document Q&A. Models, privacy, web search, and limits.',
    twitterDescription:
      'Private Mind review: Software Mansion\'s free, open-source (MIT) offline AI chat app for iPhone and Android — document Q&A, benchmarks, vision models, and an optional web search that is the one part that goes online.',
    audience:
      'iPhone, iPad, and Android users who want a free, open-source chat app that runs language models on the device, and who need to know exactly what stays offline, which models it offers, and what the sources do not confirm.',
    readTime: '9 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Private Mind review',
    targetKeywords: [
      'private mind app review',
      'private mind local ai',
      'software mansion private mind',
      'offline ai chat app iphone android',
      'react native executorch app',
      'open source local llm app mobile',
      'private mind vs pocketpal ai',
    ],
    current_models_mentioned: ['Qwen 3', 'LLaMA 3.2', 'Qwen 2.5', 'LFM 2.5', 'Gemma 4', 'Bielik'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**Private Mind (version 1.3.0 as of 3 October 2026) is a free, MIT-licensed chat app by Software Mansion that runs open-weight language models on iPhone, iPad, and Android with no account, and can answer questions about your own PDF and text files using on-device retrieval with source citations.** Models are downloaded once from Hugging Face and then run offline through React Native ExecuTorch. Version 1.3.0 added an optional Web toggle that fetches web pages, so the app is offline by default but not offline when that feature is used.',
    quickAnswerTop: {
      en: {
        question: 'Does Private Mind really run fully offline and cost nothing?',
        answer:
          'Per its listings and repository, yes for the core features: once a model is downloaded, chat, document Q&A, and dictation run on the device, and the app is free with no account. The exception is the optional Web toggle introduced in version 1.3.0, which fetches pages from the internet; the first model download also needs a connection.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) and the [App Store](https://apps.apple.com/pl/app/private-mind/id6746713439); source on [GitHub](https://github.com/software-mansion-labs/private-mind) under the MIT license.',
          'Models (about 0.65 to 4 GB each per the repository\'s catalog) download from Hugging Face on first use, then run on-device.',
          'On-device document Q&A with clickable citations, Whisper dictation, vision-capable models, and built-in benchmarks.',
          'As checked on 3 October 2026: version 1.3.0, 5K+ Google Play downloads, and 385 GitHub stars.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Private Mind?', anchor: 'what-is-private-mind' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Which Models Does It Offer?', anchor: 'models-supported' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Web Search', anchor: 'privacy' },
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
            text: 'Private Mind is a free, MIT-licensed iPhone, iPad, and Android app by Software Mansion that runs open-weight language models on the device, answers questions about your own documents, and offers an optional web search added in version 1.3.0.',
          },
          {
            type: 'plain-terms',
            text: 'You install it, download a model once, and then chat with it without an account or an internet connection; you can also give it PDFs and text files to question, and only the optional Web toggle sends requests to the internet.',
          },
        ],
        items: [
          'Developer: [Software Mansion](https://swmansion.com) (Software Mansion S.A. on Google Play), which describes itself as a software agency since 2012 and core React Native contributors; the app lives in its [software-mansion-labs](https://github.com/software-mansion-labs) GitHub organization.',
          'Price and license: free with no account; source code under the MIT license, with a bundled notice for the BSD-3-Clause-licensed ExecuTorch components.',
          'Models: 15 entries in the repository\'s catalog across Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4, and a Polish-language model, including vision-capable options.',
          'Platforms: iPhone and iPad (iOS and iPadOS 17.0 or later), Macs with Apple M1 or later via the App Store listing, and Android through Google Play.',
          'Store signals as checked on 3 October 2026: version 1.3.0, 5K+ Google Play downloads, 385 GitHub stars.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store and Google Play listings and the public GitHub repository (README, license, releases, model catalog, and the project\'s own release notes and known-issues document), checked on 3 October 2026. PromptQuorum has not tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-private-mind',
        title: 'What Is Private Mind?',
        content: [
          '**Private Mind is a mobile chat app that runs open-weight language models locally instead of calling a cloud service.** According to its [README](https://github.com/software-mansion-labs/private-mind), all conversations happen on the device, there are no sign-ups or subscriptions, and models are not bundled: they are downloaded from Hugging Face on first use, so the first run needs a network connection.',
          'Under the hood it uses React Native ExecuTorch, a separate open-source library from the same company that wraps the ExecuTorch inference runtime for React Native apps. The app, the library, and the runtime are three different projects: Private Mind is the finished app reviewed here, React Native ExecuTorch is the library it is built on, and ExecuTorch is the runtime maintained in the PyTorch ecosystem.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Private Mind is distributed through both mobile stores and as source code; all three links below are the ones the project\'s README lists.**',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'iPhone / iPad',
            'Where to get it': '[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) (iOS and iPadOS 17.0 or later)',
          },
          {
            'Platform': 'Mac (Apple M1+)',
            'Where to get it': 'Same App Store listing (shown as Mac availability)',
          },
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[GitHub](https://github.com/software-mansion-labs/private-mind) (MIT)',
          },
        ],
        note: 'Current version as verified on 3 October 2026: 1.3.0, published on the project\'s [releases page](https://github.com/software-mansion-labs/private-mind/releases) on 17 September 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**Setup follows the order described in the README and store listings; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download Private Mind from the App Store or Google Play; no account or sign-up is required according to the listings.',
          },
          {
            title: 'Download a model on Wi-Fi',
            whyItMatters: 'Models are fetched from Hugging Face on first use and are about 1 to 3 GB each per the Play listing, so use Wi-Fi. The in-app list marks which models fit your device, per the README.',
          },
          {
            title: 'Run the built-in benchmark',
            whyItMatters: 'The Play listing suggests the benchmark if you are unsure which model your phone can handle; it measures speed and memory on your own hardware.',
          },
          {
            title: 'Chat, or attach a document',
            whyItMatters: 'Start a chat, or attach a PDF, TXT, Markdown, HTML, or CSV file and ask about it; answers link back to the passages they used.',
          },
          {
            title: 'Optionally turn on Web',
            whyItMatters: 'Version 1.3.0 added a Web toggle that brings current information into a chat. Leave it off to keep a chat fully offline.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Which Models Does It Offer?',
        itemHeadings: true,
        columns: ['Model family', 'Entries and sizes', 'Notes'],
        rows: [
          {
            'Model family': 'Qwen 3',
            'Entries and sizes': '0.6B and 1.7B (about 0.9 to 2.2 GB)',
            'Notes': 'Labeled with reasoning in the catalog',
          },
          {
            'Model family': 'LLaMA 3.2',
            'Entries and sizes': '1B and 3B, QLoRA and SpinQuant variants (about 1.1 to 2.7 GB)',
            'Notes': 'Labeled as good at coding',
          },
          {
            'Model family': 'Qwen 2.5',
            'Entries and sizes': '0.5B, 1.5B, and 3B (about 0.8 to 2.9 GB)',
            'Notes': 'Small to balanced to powerful options',
          },
          {
            'Model family': 'LFM 2.5',
            'Entries and sizes': '1.2B text, plus 1.6B and 450M vision models',
            'Notes': 'The two VL entries accept images',
          },
          {
            'Model family': 'Gemma 4',
            'Entries and sizes': '2B text and 2B vision, sizes differ by platform',
            'Notes': 'Text about 2.5 to 2.9 GB, vision about 3 to 4 GB',
          },
          {
            'Model family': 'Bielik v3.0',
            'Entries and sizes': 'About 0.9 GB',
            'Notes': 'Polish-language model',
          },
        ],
        note: 'Sizes and entries come from the repository\'s model-catalog file on 3 October 2026 and will change as the catalog is updated. The Play listing also says you can import your own models; which file formats that accepts was not stated in the sources read.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the project\'s README, its in-repo release notes, or the store listings; none has been independently tested.**',
        ],
        items: [
          '**Document Q&A.** Attach a PDF, TXT, Markdown, HTML, or CSV file; retrieval and embeddings run on-device and answers link to the source passages (the Play listing names PDF and TXT).',
          '**Images and voice.** Send a photo to a vision-capable model, or dictate with Whisper speech-to-text transcribed on the device.',
          '**Built-in benchmarks.** Compare models on speed and memory on your own hardware before committing to one.',
          '**Conversation tools.** Fork a chat from any message, save system prompts as reusable presets, search chats, and export conversations.',
          '**Model Hub.** Curated open models grouped by family, plus import of your own models.',
          '**Web toggle (version 1.3.0).** Brings current information into a chat, shows the pages an answer used, and, according to the release notes, fetches and reads those pages on the device.',
        ],
        note: 'Feature lists differ slightly between the README, the Play description, and the App Store description (for example, web search appears in the App Store text and release notes but not in the README); the app\'s current build is the final authority.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Web Search',
        content: [
          '**Core use is offline by design: the README says conversations stay on the device, and the Play listing says there is no telemetry.** The App Store privacy label states the developer does not collect any data, and the Play Data safety section declares "No data collected" and encryption in transit.',
          'The Play Data safety section also lists "App activity" under data types the app may share with third parties. The sources do not say what that refers to, and the app\'s optional web search is the obvious network feature, so treat the "offline" claim as applying to chats where Web is off. The project\'s own [known-issues document](https://github.com/software-mansion-labs/private-mind/blob/main/docs/KNOWN_ISSUES.md) describes the web search as a scraper that fetches pages, and the repository fetches site icons through DuckDuckGo\'s icon service. Which search service receives your query was not identified from the sources read.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The source code is public, so these claims can be checked by anyone who builds the app, but PromptQuorum has not audited the code or the network traffic. Anyone handling confidential data should verify behavior with Web turned off and on.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free and open source',
            'What it means in real use': 'No account, no subscription, and the MIT-licensed code can be read and built.',
            'Limitation / caveat': 'Published in the company\'s labs GitHub organization; the sources state no support commitments.',
          },
          {
            'Benefit': 'Documents on-device',
            'What it means in real use': 'Ask questions about your own files with clickable source passages.',
            'Limitation / caveat': 'Quality depends on the small model you load.',
          },
          {
            'Benefit': 'Built-in benchmarks',
            'What it means in real use': 'You can see speed and memory on your phone before settling on a model.',
            'Limitation / caveat': 'Results are for your device only, and no published figures exist in the sources.',
          },
          {
            'Benefit': 'Both mobile platforms',
            'What it means in real use': 'The same app is on iPhone, iPad, Android, and Apple-silicon Macs.',
            'Limitation / caveat': 'Models are limited to what its catalog and its import feature support.',
          },
          {
            'Benefit': 'Optional web search',
            'What it means in real use': 'Answers can use current pages, with the pages shown.',
            'Limitation / caveat': 'Goes online, and the known-issues doc reports empty results on JavaScript-heavy pages and 30 to 40 seconds to first token with web search on.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who want a free, auditable offline chat app on a phone.** The MIT license and public repository make it checkable in a way closed apps are not.',
          '**People who want to question their own PDFs and notes privately.** On-device retrieval with citations is a headline feature.',
          '**Users deciding which model their phone can run.** The built-in benchmark and the in-app fit markers are designed for that.',
          '**Developers curious about React Native ExecuTorch.** The app is a working example built by the library\'s maintainers.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** PromptQuorum did not run the app, so speed, battery use, and answer quality are not assessed.',
          '**What "App activity" sharing refers to.** The Play Data safety section lists it alongside "No data collected"; the sources do not explain it.',
          '**Which search service the Web toggle uses.** The sources read do not name it.',
          '**Android version requirements and the Play build number.** The Play text read does not show a minimum Android version or version number; version 1.3.0 comes from the App Store listing and GitHub releases.',
          '**Product website.** The project site at privatemind.swmansion.com loads only with JavaScript, so its content could not be read; facts here come from the README and store listings.',
          '**Not for users who need very large models.** The catalog tops out at models of roughly 4 GB, so heavier work belongs on a computer.',
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
            'App': '[MLC Chat](/power-local-llm/mlc-chat-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Open-source on-device chat built on the MLC LLM engine',
          },
          {
            'App': '[Maid](/power-local-llm/maid-review)',
            'Platforms': 'Android, iOS',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source chat app for local GGUF models or remote providers',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Private Mind free?',
            a: 'Yes. Both store listings and the README describe it as free with no account or subscription, and the source code is under the MIT license. Check the stores for any change after 3 October 2026.',
          },
          {
            q: 'Who makes Private Mind?',
            a: 'Software Mansion, a Polish software company listed as Software Mansion S.A. on Google Play. The app\'s code is in the company\'s software-mansion-labs organization on GitHub.',
          },
          {
            q: 'Does it work offline?',
            a: 'Core chat, document Q&A, and dictation run on the device once a model is downloaded. The first model download and the optional Web toggle need an internet connection.',
          },
          {
            q: 'Which models can it run?',
            a: 'The repository\'s catalog lists 15 entries across Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4, and a Polish-language model, including two LFM and one Gemma vision model. Your own models can be imported, but the accepted formats were not stated.',
          },
          {
            q: 'Can I ask questions about my own files?',
            a: 'Yes. Attach a PDF, TXT, Markdown, HTML, or CSV file; retrieval runs on-device and each answer links to the passages it used.',
          },
          {
            q: 'What does the Web toggle do?',
            a: 'Introduced in version 1.3.0, it brings current web information into a chat and shows the pages used. It goes online, unlike the rest of the app, and the project\'s known-issues document lists weaknesses such as empty results from JavaScript-heavy pages.',
          },
          {
            q: 'Does it run on a Mac or only on phones?',
            a: 'The App Store listing shows availability on iPhone, iPad, and Macs with Apple M1 or later. There is no separate native desktop build in the sources read.',
          },
          {
            q: 'How much memory do I need?',
            a: 'The Play listing recommends a modern phone with 4 GB or more of RAM for larger models. The built-in benchmark and the in-app fit markers show what your phone can run.',
          },
          {
            q: 'Is it the same as React Native ExecuTorch?',
            a: 'No. React Native ExecuTorch is the open-source library the app is built on; Private Mind is the finished chat app. Both come from Software Mansion.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Private Mind is an open-source option among offline mobile chat apps: it is free, MIT-licensed, available on iPhone, iPad, Android, and Apple-silicon Macs, and built by a company that maintains the library it runs on. Its on-device document Q&A with citations, Whisper dictation, vision models, and built-in benchmarks go beyond plain chat, and the public repository means its privacy claims can in principle be checked. Against that, its model catalog is limited to small models of roughly 0.65 to 4 GB, the repository was created in May 2025, its optional Web toggle is the one part that goes online, and the Play Data safety wording about "App activity" is unexplained in the sources. It suits readers who want an auditable, free, offline-first phone app; readers who prefer a different open-source option can compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Private Mind on the App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) — price, version, platform requirements, privacy label, and description, checked 3 October 2026.',
          '[Private Mind on Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) — description, developer, download count, Data safety section, and last-updated date, checked 3 October 2026.',
          '[private-mind on GitHub](https://github.com/software-mansion-labs/private-mind) — README, MIT license file, releases, model catalog, in-repo release notes, and known-issues document.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s open-source on-device AI app.',
          '[MLC Chat Review](/power-local-llm/mlc-chat-review) — an open-source on-device chat app built on MLC LLM.',
          '[Maid Review](/power-local-llm/maid-review) — an open-source app for local GGUF models or remote providers.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Private Mind Review: Open-Source Offline AI Chat for iPhone and Android',
      description:
        'Private Mind review: a free, MIT-licensed offline AI chat app for iPhone and Android with on-device document Q&A. Models, privacy, the optional web search, and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/private-mind-review',
      inLanguage: 'en',
      datePublished: '2026-10-03',
      dateModified: '2026-10-03',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'iPhone and Android users evaluating a free, open-source offline AI chat app' },
      about: [
        { '@type': 'Thing', name: 'Private Mind' },
        { '@type': 'Thing', name: 'React Native ExecuTorch' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/private-mind-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Private Mind Review', item: 'https://promptquorum.com/power-local-llm/private-mind-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-03',
    dateModified: '2026-10-03',
    next_refresh_due: '2027-04-03',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/private-mind-review-hero-de.webp',
    title: 'Private-Mind-Rezension: Quelloffene Offline-KI-Chat-App für iPhone und Android',
    seoTitle: 'Private-Mind-Rezension: Quelloffene Offline-KI-Chat-App',
    intro:
      'Private Mind ist eine kostenlose, quelloffene Chat-App von [Software Mansion](https://swmansion.com), einem polnischen Softwareunternehmen, die Open-Weight-Sprachmodelle über die Bibliothek React Native ExecuTorch auf einem iPhone, iPad oder Android-Smartphone ausführt. Über den Chat hinaus bietet sie Dokumenten-Q&A auf dem Gerät mit Quellenangaben, Diktat mit Whisper, Modelle mit Bildverständnis, integrierte Geschwindigkeits-Benchmarks und — seit Version 1.3.0 — einen optionalen Web-Schalter, der Seiten aus dem Internet abruft. Der Quellcode ist unter der MIT-Lizenz auf [GitHub](https://github.com/software-mansion-labs/private-mind) veröffentlicht. Diese Rezension stützt sich auf die Einträge im App Store und bei Google Play sowie auf das öffentliche Repository, geprüft am 3. Oktober 2026; PromptQuorum hat die App nicht praktisch getestet.',
    metaDescription:
      'Private-Mind-Rezension: kostenlose, MIT-lizenzierte Offline-KI-Chat-App für iPhone und Android mit Dokumenten-Q&A. Modelle, Datenschutz, Websuche und Grenzen.',
    twitterDescription:
      'Private-Mind-Rezension: die kostenlose, quelloffene (MIT) Offline-KI-Chat-App von Software Mansion für iPhone und Android — Dokumenten-Q&A, Benchmarks, Vision-Modelle und eine optionale Websuche, der einzige Teil, der online geht.',
    audience:
      'iPhone-, iPad- und Android-Nutzer, die eine kostenlose, quelloffene Chat-App wünschen, die Sprachmodelle auf dem Gerät ausführt, und die genau wissen müssen, was offline bleibt, welche Modelle sie anbietet und was die Quellen nicht bestätigen.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Private Mind Rezension',
    targetKeywords: [
      'private mind app test',
      'private mind lokale ki',
      'software mansion private mind',
      'offline ki chat app iphone android',
      'react native executorch app',
      'open source lokale llm app smartphone',
      'private mind vs pocketpal ai',
    ],
    current_models_mentioned: ['Qwen 3', 'LLaMA 3.2', 'Qwen 2.5', 'LFM 2.5', 'Gemma 4', 'Bielik'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**Private Mind (Version 1.3.0, Stand 3. Oktober 2026) ist eine kostenlose, MIT-lizenzierte Chat-App von Software Mansion, die Open-Weight-Sprachmodelle ohne Konto auf iPhone, iPad und Android ausführt und mit On-Device-Retrieval und Quellenangaben Fragen zu Ihren eigenen PDF- und Textdateien beantworten kann.** Modelle werden einmal von Hugging Face heruntergeladen und laufen danach offline über React Native ExecuTorch. Version 1.3.0 hat einen optionalen Web-Schalter ergänzt, der Webseiten abruft; die App ist daher standardmäßig offline, aber nicht offline, wenn diese Funktion genutzt wird.',
    quickAnswerTop: {
      de: {
        question: 'Läuft Private Mind wirklich vollständig offline und kostet nichts?',
        answer:
          'Laut Einträgen und Repository ja, für die Kernfunktionen: Sobald ein Modell heruntergeladen ist, laufen Chat, Dokumenten-Q&A und Diktat auf dem Gerät, und die App ist kostenlos und ohne Konto nutzbar. Die Ausnahme ist der optionale Web-Schalter aus Version 1.3.0, der Seiten aus dem Internet abruft; auch der erste Modell-Download braucht eine Verbindung.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) und im [App Store](https://apps.apple.com/pl/app/private-mind/id6746713439); Quellcode auf [GitHub](https://github.com/software-mansion-labs/private-mind) unter der MIT-Lizenz.',
          'Modelle (laut Katalog des Repositorys etwa 0,65 bis 4 GB je Modell) werden bei der ersten Nutzung von Hugging Face geladen und laufen dann auf dem Gerät.',
          'Dokumenten-Q&A auf dem Gerät mit anklickbaren Quellenangaben, Whisper-Diktat, Modelle mit Bildverständnis und integrierte Benchmarks.',
          'Stand der Prüfung am 3. Oktober 2026: Version 1.3.0, 5K+ Downloads bei Google Play und 385 GitHub-Sterne.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Private Mind?', anchor: 'what-is-private-mind' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Welche Modelle bietet die App?', anchor: 'models-supported' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Websuche', anchor: 'privacy' },
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
            text: 'Private Mind ist eine kostenlose, MIT-lizenzierte iPhone-, iPad- und Android-App von Software Mansion, die Open-Weight-Sprachmodelle auf dem Gerät ausführt, Fragen zu Ihren eigenen Dokumenten beantwortet und eine mit Version 1.3.0 ergänzte, optionale Websuche bietet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App, laden einmal ein Modell herunter und chatten dann ohne Konto und ohne Internetverbindung damit; außerdem können Sie ihr PDFs und Textdateien zum Befragen geben, und nur der optionale Web-Schalter sendet Anfragen ins Internet.',
          },
        ],
        items: [
          'Entwickler: [Software Mansion](https://swmansion.com) (bei Google Play als Software Mansion S.A. geführt), das sich selbst als Softwareagentur seit 2012 und als zentralen React-Native-Mitwirkenden beschreibt; die App liegt in der GitHub-Organisation [software-mansion-labs](https://github.com/software-mansion-labs).',
          'Preis und Lizenz: kostenlos und ohne Konto; Quellcode unter der MIT-Lizenz, mit einem beigefügten Hinweis auf die BSD-3-Clause-lizenzierten ExecuTorch-Komponenten.',
          'Modelle: 15 Einträge im Katalog des Repositorys aus den Familien Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4 und einem polnischsprachigen Modell, darunter Optionen mit Bildverständnis.',
          'Plattformen: iPhone und iPad (iOS und iPadOS 17.0 oder neuer), Macs mit Apple M1 oder neuer laut App-Store-Eintrag sowie Android über Google Play.',
          'Store-Signale, Stand der Prüfung am 3. Oktober 2026: Version 1.3.0, 5K+ Downloads bei Google Play, 385 GitHub-Sterne.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Einträge im App Store und bei Google Play sowie auf das öffentliche GitHub-Repository (README, Lizenz, Releases, Modellkatalog sowie die eigenen Release Notes und das Dokument zu bekannten Problemen des Projekts), geprüft am 3. Oktober 2026. PromptQuorum hat die App weder getestet noch einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-private-mind',
        title: 'Was ist Private Mind?',
        content: [
          '**Private Mind ist eine mobile Chat-App, die Open-Weight-Sprachmodelle lokal ausführt, statt einen Cloud-Dienst aufzurufen.** Laut [README](https://github.com/software-mansion-labs/private-mind) finden alle Unterhaltungen auf dem Gerät statt, es gibt weder Registrierung noch Abonnements, und Modelle sind nicht mitgeliefert: Sie werden bei der ersten Nutzung von Hugging Face geladen, sodass der erste Start eine Netzwerkverbindung braucht.',
          'Intern nutzt sie React Native ExecuTorch, eine eigenständige Open-Source-Bibliothek desselben Unternehmens, die die Inferenz-Laufzeitumgebung ExecuTorch für React-Native-Apps einbindet. App, Bibliothek und Laufzeitumgebung sind drei verschiedene Projekte: Private Mind ist die hier getestete fertige App, React Native ExecuTorch ist die Bibliothek, auf der sie aufbaut, und ExecuTorch ist die im PyTorch-Ökosystem gepflegte Laufzeitumgebung.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Private Mind wird über beide mobilen Stores und als Quellcode verbreitet; die drei Links unten sind die, die das README des Projekts nennt.**',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'iPhone / iPad',
            'Bezugsquelle': '[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) (iOS und iPadOS 17.0 oder neuer)',
          },
          {
            'Plattform': 'Mac (Apple M1+)',
            'Bezugsquelle': 'Derselbe App-Store-Eintrag (als Mac-Verfügbarkeit angezeigt)',
          },
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': '[GitHub](https://github.com/software-mansion-labs/private-mind) (MIT)',
          },
        ],
        note: 'Aktuelle Version, geprüft am 3. Oktober 2026: 1.3.0, veröffentlicht am 17. September 2026 auf der [Releases-Seite](https://github.com/software-mansion-labs/private-mind/releases) des Projekts.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Einrichtung folgt der Reihenfolge aus dem README und den Store-Einträgen; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie Private Mind aus dem App Store oder von Google Play; laut den Einträgen ist weder ein Konto noch eine Registrierung nötig.',
          },
          {
            title: 'Modell per WLAN herunterladen',
            whyItMatters: 'Modelle werden bei der ersten Nutzung von Hugging Face geladen und sind laut Play-Eintrag etwa 1 bis 3 GB groß; nutzen Sie daher WLAN. Die Liste in der App kennzeichnet laut README, welche Modelle zu Ihrem Gerät passen.',
          },
          {
            title: 'Integrierten Benchmark ausführen',
            whyItMatters: 'Der Play-Eintrag empfiehlt den Benchmark, wenn Sie unsicher sind, welches Modell Ihr Smartphone bewältigt; er misst Geschwindigkeit und Speicherbedarf auf Ihrer eigenen Hardware.',
          },
          {
            title: 'Chatten oder ein Dokument anhängen',
            whyItMatters: 'Starten Sie einen Chat oder hängen Sie eine PDF-, TXT-, Markdown-, HTML- oder CSV-Datei an und stellen Sie Fragen dazu; die Antworten verweisen auf die verwendeten Passagen.',
          },
          {
            title: 'Optional Web einschalten',
            whyItMatters: 'Version 1.3.0 hat einen Web-Schalter ergänzt, der aktuelle Informationen in einen Chat holt. Lassen Sie ihn aus, um einen Chat vollständig offline zu halten.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Welche Modelle bietet die App?',
        itemHeadings: true,
        columns: ['Modellfamilie', 'Einträge und Größen', 'Hinweise'],
        rows: [
          {
            'Modellfamilie': 'Qwen 3',
            'Einträge und Größen': '0.6B und 1.7B (etwa 0,9 bis 2,2 GB)',
            'Hinweise': 'Im Katalog mit Reasoning gekennzeichnet',
          },
          {
            'Modellfamilie': 'LLaMA 3.2',
            'Einträge und Größen': '1B und 3B, QLoRA- und SpinQuant-Varianten (etwa 1,1 bis 2,7 GB)',
            'Hinweise': 'Als gut beim Programmieren gekennzeichnet',
          },
          {
            'Modellfamilie': 'Qwen 2.5',
            'Einträge und Größen': '0.5B, 1.5B und 3B (etwa 0,8 bis 2,9 GB)',
            'Hinweise': 'Kleine, ausgewogene bis leistungsstarke Optionen',
          },
          {
            'Modellfamilie': 'LFM 2.5',
            'Einträge und Größen': '1.2B Text sowie 1.6B- und 450M-Vision-Modelle',
            'Hinweise': 'Die beiden VL-Einträge nehmen Bilder an',
          },
          {
            'Modellfamilie': 'Gemma 4',
            'Einträge und Größen': '2B Text und 2B Vision, Größen je nach Plattform verschieden',
            'Hinweise': 'Text etwa 2,5 bis 2,9 GB, Vision etwa 3 bis 4 GB',
          },
          {
            'Modellfamilie': 'Bielik v3.0',
            'Einträge und Größen': 'Etwa 0,9 GB',
            'Hinweise': 'Polnischsprachiges Modell',
          },
        ],
        note: 'Größen und Einträge stammen aus der Modellkatalog-Datei des Repositorys vom 3. Oktober 2026 und ändern sich mit Aktualisierungen des Katalogs. Der Play-Eintrag nennt außerdem den Import eigener Modelle; welche Dateiformate dabei akzeptiert werden, wurde in den gelesenen Quellen nicht angegeben.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus dem README des Projekts, seinen Release Notes im Repository oder den Store-Einträgen; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Dokumenten-Q&A.** Hängen Sie eine PDF-, TXT-, Markdown-, HTML- oder CSV-Datei an; Retrieval und Embeddings laufen auf dem Gerät, und Antworten verweisen auf die Quellpassagen (der Play-Eintrag nennt PDF und TXT).',
          '**Bilder und Sprache.** Senden Sie ein Foto an ein Modell mit Bildverständnis oder diktieren Sie mit Whisper-Spracherkennung, die auf dem Gerät transkribiert.',
          '**Integrierte Benchmarks.** Vergleichen Sie Modelle bei Geschwindigkeit und Speicherbedarf auf Ihrer eigenen Hardware, bevor Sie sich für eines entscheiden.',
          '**Unterhaltungswerkzeuge.** Einen Chat ab jeder Nachricht verzweigen, System-Prompts als wiederverwendbare Vorlagen speichern, Chats durchsuchen und Unterhaltungen exportieren.',
          '**Model Hub.** Kuratierte offene Modelle nach Familien gruppiert, dazu der Import eigener Modelle.',
          '**Web-Schalter (Version 1.3.0).** Holt aktuelle Informationen in einen Chat, zeigt die für eine Antwort genutzten Seiten und ruft diese Seiten laut den Release Notes auf dem Gerät ab und liest sie.',
        ],
        note: 'Die Funktionslisten in README, Play-Beschreibung und App-Store-Beschreibung weichen leicht voneinander ab (zum Beispiel erscheint die Websuche im App-Store-Text und in den Release Notes, aber nicht im README); maßgeblich ist der aktuelle Build der App.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Websuche',
        content: [
          '**Die Kernnutzung ist von der Konzeption her offline: Laut README bleiben Unterhaltungen auf dem Gerät, und laut Play-Eintrag gibt es keine Telemetrie.** Das Datenschutzlabel im App Store besagt, dass der Entwickler keine Daten erhebt, und der Abschnitt „Datensicherheit“ bei Google Play nennt „Keine Daten erhoben“ sowie Verschlüsselung bei der Übertragung.',
          'Der Abschnitt „Datensicherheit“ bei Google Play führt zugleich „App-Aktivitäten“ unter den Datentypen auf, die die App an Dritte weitergeben kann. Die Quellen sagen nicht, worauf sich das bezieht, und die optionale Websuche der App ist die naheliegende Netzwerkfunktion; betrachten Sie die Aussage „offline“ daher als gültig für Chats, in denen Web ausgeschaltet ist. Das [Dokument zu bekannten Problemen](https://github.com/software-mansion-labs/private-mind/blob/main/docs/KNOWN_ISSUES.md) des Projekts beschreibt die Websuche als Scraper, der Seiten abruft, und das Repository bezieht Website-Icons über den Icon-Dienst von DuckDuckGo. Welcher Suchdienst Ihre Anfrage erhält, wurde anhand der gelesenen Quellen nicht ermittelt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Der Quellcode ist öffentlich, sodass jeder, der die App baut, diese Angaben prüfen kann, doch PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft. Wer vertrauliche Daten verarbeitet, sollte das Verhalten sowohl mit ausgeschaltetem als auch mit eingeschaltetem Web verifizieren.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung in der Praxis', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Kostenlos und quelloffen',
            'Bedeutung in der Praxis': 'Kein Konto, kein Abonnement, und der MIT-lizenzierte Code lässt sich lesen und bauen.',
            'Einschränkung / Hinweis': 'Veröffentlicht in der Labs-GitHub-Organisation des Unternehmens; die Quellen nennen keine Support-Zusagen.',
          },
          {
            'Vorteil': 'Dokumente auf dem Gerät',
            'Bedeutung in der Praxis': 'Fragen zu eigenen Dateien stellen, mit anklickbaren Quellpassagen.',
            'Einschränkung / Hinweis': 'Die Qualität hängt vom kleinen Modell ab, das Sie laden.',
          },
          {
            'Vorteil': 'Integrierte Benchmarks',
            'Bedeutung in der Praxis': 'Sie sehen Geschwindigkeit und Speicherbedarf auf Ihrem Smartphone, bevor Sie sich für ein Modell entscheiden.',
            'Einschränkung / Hinweis': 'Die Ergebnisse gelten nur für Ihr Gerät, und die Quellen enthalten keine veröffentlichten Messwerte.',
          },
          {
            'Vorteil': 'Beide mobilen Plattformen',
            'Bedeutung in der Praxis': 'Dieselbe App gibt es für iPhone, iPad, Android und Macs mit Apple Silicon.',
            'Einschränkung / Hinweis': 'Die Modelle beschränken sich auf das, was Katalog und Importfunktion unterstützen.',
          },
          {
            'Vorteil': 'Optionale Websuche',
            'Bedeutung in der Praxis': 'Antworten können aktuelle Seiten nutzen, wobei die Seiten angezeigt werden.',
            'Einschränkung / Hinweis': 'Geht online; das Dokument zu bekannten Problemen nennt leere Ergebnisse bei JavaScript-lastigen Seiten und 30 bis 40 Sekunden bis zum ersten Token mit Websuche.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Menschen, die eine kostenlose, prüfbare Offline-Chat-App auf dem Smartphone wollen.** Die MIT-Lizenz und das öffentliche Repository machen sie überprüfbar, anders als geschlossene Apps.',
          '**Menschen, die eigene PDFs und Notizen privat befragen möchten.** Retrieval auf dem Gerät mit Quellenangaben ist eine Kernfunktion.',
          '**Nutzer, die entscheiden wollen, welches Modell ihr Smartphone bewältigt.** Der integrierte Benchmark und die Eignungskennzeichnungen in der App sind genau dafür gedacht.',
          '**Entwickler, die sich für React Native ExecuTorch interessieren.** Die App ist ein funktionierendes Beispiel der Maintainer der Bibliothek.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praktische Leistung.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Akkuverbrauch und Antwortqualität sind daher nicht bewertet.',
          '**Worauf sich die Weitergabe von „App-Aktivitäten“ bezieht.** Der Abschnitt „Datensicherheit“ bei Google Play führt sie neben „Keine Daten erhoben“ auf; die Quellen erklären sie nicht.',
          '**Welchen Suchdienst der Web-Schalter nutzt.** Die gelesenen Quellen nennen ihn nicht.',
          '**Android-Versionsanforderungen und die Build-Nummer bei Google Play.** Der gelesene Play-Text zeigt weder eine Mindestversion von Android noch eine Versionsnummer; Version 1.3.0 stammt aus dem App-Store-Eintrag und den GitHub-Releases.',
          '**Produkt-Website.** Die Projektseite privatemind.swmansion.com lädt nur mit JavaScript, sodass ihr Inhalt nicht gelesen werden konnte; die Angaben hier stammen aus dem README und den Store-Einträgen.',
          '**Nicht für Nutzer, die sehr große Modelle brauchen.** Der Katalog endet bei Modellen von etwa 4 GB; schwerere Aufgaben gehören auf einen Computer.',
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
            'App': '[MLC Chat](/de/power-local-llm/mlc-chat-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Quelloffener Chat auf dem Gerät, aufgebaut auf der MLC-LLM-Engine',
          },
          {
            'App': '[Maid](/de/power-local-llm/maid-review)',
            'Plattformen': 'Android, iOS',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffene Chat-App für lokale GGUF-Modelle oder Remote-Anbieter',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Private Mind kostenlos?',
            a: 'Ja. Beide Store-Einträge und das README beschreiben die App als kostenlos, ohne Konto und ohne Abonnement, und der Quellcode steht unter der MIT-Lizenz. Prüfen Sie die Stores auf Änderungen nach dem 3. Oktober 2026.',
          },
          {
            q: 'Wer macht Private Mind?',
            a: 'Software Mansion, ein polnisches Softwareunternehmen, das bei Google Play als Software Mansion S.A. geführt wird. Der Code der App liegt in der Organisation software-mansion-labs des Unternehmens auf GitHub.',
          },
          {
            q: 'Funktioniert sie offline?',
            a: 'Chat, Dokumenten-Q&A und Diktat laufen auf dem Gerät, sobald ein Modell heruntergeladen ist. Der erste Modell-Download und der optionale Web-Schalter brauchen eine Internetverbindung.',
          },
          {
            q: 'Welche Modelle kann sie ausführen?',
            a: 'Der Katalog des Repositorys führt 15 Einträge aus den Familien Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4 und einem polnischsprachigen Modell auf, darunter zwei LFM- und ein Gemma-Vision-Modell. Eigene Modelle lassen sich importieren, doch die akzeptierten Formate wurden nicht angegeben.',
          },
          {
            q: 'Kann ich Fragen zu meinen eigenen Dateien stellen?',
            a: 'Ja. Hängen Sie eine PDF-, TXT-, Markdown-, HTML- oder CSV-Datei an; das Retrieval läuft auf dem Gerät, und jede Antwort verweist auf die verwendeten Passagen.',
          },
          {
            q: 'Was macht der Web-Schalter?',
            a: 'Er wurde mit Version 1.3.0 eingeführt, holt aktuelle Webinformationen in einen Chat und zeigt die genutzten Seiten. Anders als der Rest der App geht er online, und das Dokument des Projekts zu bekannten Problemen nennt Schwächen wie leere Ergebnisse bei JavaScript-lastigen Seiten.',
          },
          {
            q: 'Läuft sie auf einem Mac oder nur auf Smartphones?',
            a: 'Der App-Store-Eintrag zeigt Verfügbarkeit auf iPhone, iPad und Macs mit Apple M1 oder neuer. In den gelesenen Quellen gibt es keinen separaten nativen Desktop-Build.',
          },
          {
            q: 'Wie viel Arbeitsspeicher brauche ich?',
            a: 'Der Play-Eintrag empfiehlt für größere Modelle ein modernes Smartphone mit 4 GB RAM oder mehr. Der integrierte Benchmark und die Eignungskennzeichnungen in der App zeigen, was Ihr Smartphone ausführen kann.',
          },
          {
            q: 'Ist sie dasselbe wie React Native ExecuTorch?',
            a: 'Nein. React Native ExecuTorch ist die Open-Source-Bibliothek, auf der die App aufbaut; Private Mind ist die fertige Chat-App. Beide stammen von Software Mansion.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Private Mind ist eine quelloffene Option unter den mobilen Offline-Chat-Apps: Sie ist kostenlos, MIT-lizenziert, für iPhone, iPad, Android und Macs mit Apple Silicon verfügbar und stammt von einem Unternehmen, das die Bibliothek pflegt, auf der sie läuft. Dokumenten-Q&A auf dem Gerät mit Quellenangaben, Whisper-Diktat, Vision-Modelle und integrierte Benchmarks gehen über reinen Chat hinaus, und das öffentliche Repository bedeutet, dass sich ihre Datenschutzangaben grundsätzlich prüfen lassen. Dem steht gegenüber, dass ihr Modellkatalog auf kleine Modelle von etwa 0,65 bis 4 GB beschränkt ist, das Repository im Mai 2025 angelegt wurde, der optionale Web-Schalter der einzige Teil ist, der online geht, und die Formulierung „App-Aktivitäten“ im Abschnitt „Datensicherheit“ bei Google Play in den Quellen nicht erklärt wird. Sie eignet sich für Leser, die eine prüfbare, kostenlose, Offline-first-App für das Smartphone wollen; wer eine andere Open-Source-Option bevorzugt, kann [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Private Mind im App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) — Preis, Version, Plattformanforderungen, Datenschutzlabel und Beschreibung, geprüft am 3. Oktober 2026.',
          '[Private Mind bei Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) — Beschreibung, Entwickler, Download-Zahl, Abschnitt „Datensicherheit“ und Datum der letzten Aktualisierung, geprüft am 3. Oktober 2026.',
          '[private-mind auf GitHub](https://github.com/software-mansion-labs/private-mind) — README, MIT-Lizenzdatei, Releases, Modellkatalog, Release Notes im Repository und Dokument zu bekannten Problemen.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät für iOS und Android.',
          '[Google-AI-Edge-Gallery-Rezension](/de/power-local-llm/google-ai-edge-gallery-review) — Googles quelloffene KI-App für das Gerät.',
          '[MLC-Chat-Rezension](/de/power-local-llm/mlc-chat-review) — eine quelloffene Chat-App auf dem Gerät, aufgebaut auf MLC LLM.',
          '[Maid-Rezension](/de/power-local-llm/maid-review) — eine quelloffene App für lokale GGUF-Modelle oder Remote-Anbieter.',
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
    heroImage: '/images/private-mind-review-hero-es.webp',
    title: 'Análisis de Private Mind: chat de IA offline y de código abierto para iPhone y Android',
    seoTitle: 'Análisis de Private Mind: chat de IA offline open source',
    intro:
      'Private Mind es una app de chat gratuita y de código abierto de [Software Mansion](https://swmansion.com), una empresa de software polaca, que ejecuta modelos de lenguaje de pesos abiertos en un iPhone, un iPad o un teléfono Android mediante la biblioteca React Native ExecuTorch. Además del chat, ofrece preguntas y respuestas sobre documentos en el dispositivo con citas de las fuentes, dictado con Whisper, modelos con capacidad de visión, pruebas de velocidad integradas y, desde la versión 1.3.0, un interruptor Web opcional que obtiene páginas de internet. Su código fuente está publicado bajo la licencia MIT en [GitHub](https://github.com/software-mansion-labs/private-mind). Este análisis se basa en las fichas de App Store y Google Play y en el repositorio público, consultados el 3 de octubre de 2026; PromptQuorum no ha probado la app de forma práctica.',
    metaDescription:
      'Análisis de Private Mind: app de chat de IA offline, gratuita y MIT para iPhone y Android, con preguntas sobre documentos en el dispositivo. Modelos y límites.',
    twitterDescription:
      'Análisis de Private Mind: la app de chat de IA offline, gratuita y de código abierto (MIT) de Software Mansion para iPhone y Android: preguntas sobre documentos, pruebas de velocidad, modelos de visión y una búsqueda web opcional que es la única parte que se conecta a internet.',
    audience:
      'Usuarios de iPhone, iPad y Android que quieren una app de chat gratuita y de código abierto que ejecute modelos de lenguaje en el dispositivo, y que necesitan saber con exactitud qué se queda offline, qué modelos ofrece y qué no confirman las fuentes.',
    readTime: '9 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de Private Mind',
    targetKeywords: [
      'opiniones app private mind',
      'private mind ia local',
      'software mansion private mind',
      'app de chat de ia offline iphone android',
      'app react native executorch',
      'app de llm local de código abierto para móvil',
      'private mind vs pocketpal ai',
    ],
    current_models_mentioned: ['Qwen 3', 'LLaMA 3.2', 'Qwen 2.5', 'LFM 2.5', 'Gemma 4', 'Bielik'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**Private Mind (versión 1.3.0 a fecha del 3 de octubre de 2026) es una app de chat gratuita y con licencia MIT de Software Mansion que ejecuta modelos de lenguaje de pesos abiertos en iPhone, iPad y Android sin necesidad de cuenta, y puede responder preguntas sobre tus propios archivos PDF y de texto mediante recuperación en el dispositivo con citas de las fuentes.** Los modelos se descargan una sola vez desde Hugging Face y después se ejecutan sin conexión mediante React Native ExecuTorch. La versión 1.3.0 añadió un interruptor Web opcional que obtiene páginas web, por lo que la app funciona offline por defecto, pero no cuando se usa esa función.',
    quickAnswerTop: {
      es: {
        question: '¿Private Mind funciona realmente de forma totalmente offline y no cuesta nada?',
        answer:
          'Según sus fichas y su repositorio, sí en las funciones principales: una vez descargado un modelo, el chat, las preguntas sobre documentos y el dictado se ejecutan en el dispositivo, y la app es gratuita y no requiere cuenta. La excepción es el interruptor Web opcional introducido en la versión 1.3.0, que obtiene páginas de internet; la primera descarga de un modelo también necesita conexión.',
        bullets: [
          'Gratis en [Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) y en la [App Store](https://apps.apple.com/pl/app/private-mind/id6746713439); código fuente en [GitHub](https://github.com/software-mansion-labs/private-mind) bajo la licencia MIT.',
          'Los modelos (de unos 0.65 a 4 GB cada uno según el catálogo del repositorio) se descargan desde Hugging Face en el primer uso y después se ejecutan en el dispositivo.',
          'Preguntas sobre documentos en el dispositivo con citas en las que se puede hacer clic, dictado con Whisper, modelos con capacidad de visión y pruebas de rendimiento integradas.',
          'Según la consulta del 3 de octubre de 2026: versión 1.3.0, más de 5 mil descargas en Google Play y 385 estrellas en GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Private Mind?', anchor: 'what-is-private-mind' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: '¿Qué modelos ofrece?', anchor: 'models-supported' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y búsqueda web', anchor: 'privacy' },
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
            text: 'Private Mind es una app gratuita y con licencia MIT para iPhone, iPad y Android de Software Mansion que ejecuta modelos de lenguaje de pesos abiertos en el dispositivo, responde preguntas sobre tus propios documentos y ofrece una búsqueda web opcional añadida en la versión 1.3.0.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas, descargas un modelo una sola vez y después chateas con él sin cuenta ni conexión a internet; también puedes darle archivos PDF y de texto para hacerles preguntas, y solo el interruptor Web opcional envía solicitudes a internet.',
          },
        ],
        items: [
          'Desarrollador: [Software Mansion](https://swmansion.com) (Software Mansion S.A. en Google Play), que se describe como una agencia de software desde 2012 y colaboradora principal de React Native; la app está en su organización de GitHub [software-mansion-labs](https://github.com/software-mansion-labs).',
          'Precio y licencia: gratuita y sin cuenta; código fuente bajo la licencia MIT, con un aviso incluido para los componentes de ExecuTorch bajo licencia BSD-3-Clause.',
          'Modelos: 15 entradas en el catálogo del repositorio entre Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4 y un modelo en polaco, incluidas opciones con capacidad de visión.',
          'Plataformas: iPhone y iPad (iOS y iPadOS 17.0 o posterior), Mac con Apple M1 o posterior según la ficha de la App Store, y Android a través de Google Play.',
          'Indicadores de la tienda según la consulta del 3 de octubre de 2026: versión 1.3.0, más de 5 mil descargas en Google Play, 385 estrellas en GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en las fichas de App Store y Google Play y en el repositorio público de GitHub (README, licencia, versiones, catálogo de modelos y las notas de versión y el documento de problemas conocidos del propio proyecto), consultados el 3 de octubre de 2026. PromptQuorum no ha probado ni evaluado con pruebas comparativas la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-private-mind',
        title: '¿Qué es Private Mind?',
        content: [
          '**Private Mind es una app de chat para móvil que ejecuta modelos de lenguaje de pesos abiertos en local en lugar de llamar a un servicio en la nube.** Según su [README](https://github.com/software-mansion-labs/private-mind), todas las conversaciones ocurren en el dispositivo, no hay registros ni suscripciones, y los modelos no vienen incluidos: se descargan desde Hugging Face en el primer uso, por lo que la primera ejecución necesita conexión de red.',
          'Por debajo usa React Native ExecuTorch, una biblioteca de código abierto independiente de la misma empresa que envuelve el entorno de ejecución de inferencia ExecuTorch para apps de React Native. La app, la biblioteca y el entorno de ejecución son tres proyectos distintos: Private Mind es la app terminada que se analiza aquí, React Native ExecuTorch es la biblioteca sobre la que está construida y ExecuTorch es el entorno de ejecución que se mantiene en el ecosistema de PyTorch.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**Private Mind se distribuye a través de las dos tiendas móviles y como código fuente; los tres enlaces siguientes son los que indica el README del proyecto.**',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Dónde obtenerla': '[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) (iOS y iPadOS 17.0 o posterior)',
          },
          {
            'Plataforma': 'Mac (Apple M1+)',
            'Dónde obtenerla': 'La misma ficha de la App Store (aparece como disponibilidad para Mac)',
          },
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde obtenerla': '[GitHub](https://github.com/software-mansion-labs/private-mind) (MIT)',
          },
        ],
        note: 'Versión actual verificada el 3 de octubre de 2026: 1.3.0, publicada en la [página de versiones](https://github.com/software-mansion-labs/private-mind/releases) del proyecto el 17 de septiembre de 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración sigue el orden descrito en el README y en las fichas de las tiendas; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga Private Mind desde la App Store o Google Play; según las fichas, no se requiere cuenta ni registro.',
          },
          {
            title: 'Descarga un modelo con Wi-Fi',
            whyItMatters: 'Los modelos se obtienen de Hugging Face en el primer uso y ocupan de 1 a 3 GB cada uno según la ficha de Play, así que usa Wi-Fi. Según el README, la lista de la app marca qué modelos caben en tu dispositivo.',
          },
          {
            title: 'Ejecuta la prueba de rendimiento integrada',
            whyItMatters: 'La ficha de Play sugiere usar la prueba de rendimiento si no estás seguro de qué modelo puede manejar tu teléfono; mide la velocidad y la memoria en tu propio hardware.',
          },
          {
            title: 'Chatea o adjunta un documento',
            whyItMatters: 'Inicia un chat, o adjunta un archivo PDF, TXT, Markdown, HTML o CSV y pregunta sobre él; las respuestas enlazan con los pasajes que usaron.',
          },
          {
            title: 'Activa Web si quieres',
            whyItMatters: 'La versión 1.3.0 añadió un interruptor Web que incorpora información actual a un chat. Déjalo desactivado para mantener un chat totalmente offline.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '¿Qué modelos ofrece?',
        itemHeadings: true,
        columns: ['Familia de modelos', 'Entradas y tamaños', 'Notas'],
        rows: [
          {
            'Familia de modelos': 'Qwen 3',
            'Entradas y tamaños': '0.6B y 1.7B (de unos 0.9 a 2.2 GB)',
            'Notas': 'Etiquetado con razonamiento en el catálogo',
          },
          {
            'Familia de modelos': 'LLaMA 3.2',
            'Entradas y tamaños': '1B y 3B, variantes QLoRA y SpinQuant (de unos 1.1 a 2.7 GB)',
            'Notas': 'Etiquetado como bueno para programar',
          },
          {
            'Familia de modelos': 'Qwen 2.5',
            'Entradas y tamaños': '0.5B, 1.5B y 3B (de unos 0.8 a 2.9 GB)',
            'Notas': 'Opciones pequeñas, equilibradas y potentes',
          },
          {
            'Familia de modelos': 'LFM 2.5',
            'Entradas y tamaños': '1.2B de texto, más modelos de visión de 1.6B y 450M',
            'Notas': 'Las dos entradas VL aceptan imágenes',
          },
          {
            'Familia de modelos': 'Gemma 4',
            'Entradas y tamaños': '2B de texto y 2B de visión, tamaños distintos según la plataforma',
            'Notas': 'Texto de unos 2.5 a 2.9 GB, visión de unos 3 a 4 GB',
          },
          {
            'Familia de modelos': 'Bielik v3.0',
            'Entradas y tamaños': 'Unos 0.9 GB',
            'Notas': 'Modelo en polaco',
          },
        ],
        note: 'Los tamaños y las entradas proceden del archivo del catálogo de modelos del repositorio el 3 de octubre de 2026 y cambiarán a medida que se actualice el catálogo. La ficha de Play también dice que puedes importar tus propios modelos; en las fuentes leídas no se indicó qué formatos de archivo admite.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede del README del proyecto, de sus notas de versión en el repositorio o de las fichas de las tiendas; ninguno ha sido probado de forma independiente.**',
        ],
        items: [
          '**Preguntas sobre documentos.** Adjunta un archivo PDF, TXT, Markdown, HTML o CSV; la recuperación y los embeddings se ejecutan en el dispositivo y las respuestas enlazan con los pasajes de origen (la ficha de Play menciona PDF y TXT).',
          '**Imágenes y voz.** Envía una foto a un modelo con capacidad de visión, o dicta con Whisper, con la voz transcrita en el dispositivo.',
          '**Pruebas de rendimiento integradas.** Compara modelos en velocidad y memoria en tu propio hardware antes de decidirte por uno.',
          '**Herramientas de conversación.** Bifurca un chat desde cualquier mensaje, guarda indicaciones de sistema como preajustes reutilizables, busca en los chats y exporta las conversaciones.',
          '**Model Hub.** Modelos abiertos seleccionados y agrupados por familia, además de la importación de tus propios modelos.',
          '**Interruptor Web (versión 1.3.0).** Incorpora información actual a un chat, muestra las páginas que usó una respuesta y, según las notas de versión, obtiene y lee esas páginas en el dispositivo.',
        ],
        note: 'Las listas de funciones difieren ligeramente entre el README, la descripción de Play y la descripción de la App Store (por ejemplo, la búsqueda web aparece en el texto de la App Store y en las notas de versión, pero no en el README); la compilación actual de la app tiene la última palabra.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y búsqueda web',
        content: [
          '**El uso principal es offline por diseño: el README dice que las conversaciones permanecen en el dispositivo y la ficha de Play dice que no hay telemetría.** La etiqueta de privacidad de la App Store indica que el desarrollador no recopila ningún dato, y la sección Seguridad de los datos de Play declara «No se recopilan datos» y cifrado en tránsito.',
          'La sección Seguridad de los datos de Play también incluye «Actividad de la app» entre los tipos de datos que la app puede compartir con terceros. Las fuentes no dicen a qué se refiere, y la búsqueda web opcional de la app es la función de red más evidente, así que conviene entender que la afirmación «offline» se aplica a los chats con Web desactivado. El propio [documento de problemas conocidos](https://github.com/software-mansion-labs/private-mind/blob/main/docs/KNOWN_ISSUES.md) del proyecto describe la búsqueda web como un rastreador que obtiene páginas, y el repositorio obtiene los iconos de los sitios mediante el servicio de iconos de DuckDuckGo. En las fuentes leídas no se identificó qué servicio de búsqueda recibe tu consulta.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código fuente es público, por lo que cualquiera que compile la app puede comprobar estas afirmaciones, pero PromptQuorum no ha auditado el código ni el tráfico de red. Quien maneje datos confidenciales debería verificar el comportamiento con Web desactivado y activado.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'En el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Gratis y de código abierto',
            'En el uso real': 'Sin cuenta ni suscripción, y el código con licencia MIT se puede leer y compilar.',
            'Limitación / salvedad': 'Publicada en la organización de GitHub de laboratorios de la empresa; las fuentes no indican ningún compromiso de soporte.',
          },
          {
            'Ventaja': 'Documentos en el dispositivo',
            'En el uso real': 'Haz preguntas sobre tus propios archivos con pasajes de origen en los que se puede hacer clic.',
            'Limitación / salvedad': 'La calidad depende del modelo pequeño que cargues.',
          },
          {
            'Ventaja': 'Pruebas de rendimiento integradas',
            'En el uso real': 'Puedes ver la velocidad y la memoria en tu teléfono antes de decidirte por un modelo.',
            'Limitación / salvedad': 'Los resultados valen solo para tu dispositivo, y en las fuentes no hay cifras publicadas.',
          },
          {
            'Ventaja': 'Las dos plataformas móviles',
            'En el uso real': 'La misma app está en iPhone, iPad, Android y Mac con Apple Silicon.',
            'Limitación / salvedad': 'Los modelos se limitan a lo que admiten su catálogo y su función de importación.',
          },
          {
            'Ventaja': 'Búsqueda web opcional',
            'En el uso real': 'Las respuestas pueden usar páginas actuales, mostrando las páginas.',
            'Limitación / salvedad': 'Se conecta a internet, y el documento de problemas conocidos informa de resultados vacíos en páginas con mucho JavaScript y de 30 a 40 segundos hasta el primer token con la búsqueda web activada.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas que quieren una app de chat offline gratuita y auditable en el teléfono.** La licencia MIT y el repositorio público la hacen verificable de una forma que las apps cerradas no permiten.',
          '**Personas que quieren hacer preguntas sobre sus propios PDF y notas de forma privada.** La recuperación en el dispositivo con citas es una función destacada.',
          '**Usuarios que están decidiendo qué modelo puede ejecutar su teléfono.** La prueba de rendimiento integrada y los marcadores de compatibilidad de la app están pensados para eso.',
          '**Desarrolladores curiosos por React Native ExecuTorch.** La app es un ejemplo funcional creado por los responsables de la biblioteca.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en uso real.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, el consumo de batería ni la calidad de las respuestas.',
          '**A qué se refiere el uso compartido de «Actividad de la app».** La sección Seguridad de los datos de Play lo incluye junto a «No se recopilan datos»; las fuentes no lo explican.',
          '**Qué servicio de búsqueda usa el interruptor Web.** Las fuentes leídas no lo nombran.',
          '**Requisitos de versión de Android y número de compilación de Play.** El texto de Play que se leyó no muestra una versión mínima de Android ni un número de versión; la versión 1.3.0 procede de la ficha de la App Store y de las versiones de GitHub.',
          '**Sitio web del producto.** El sitio del proyecto, privatemind.swmansion.com, solo carga con JavaScript, por lo que no se pudo leer su contenido; los datos de aquí proceden del README y de las fichas de las tiendas.',
          '**No es para quienes necesitan modelos muy grandes.** El catálogo llega como máximo a modelos de unos 4 GB, así que el trabajo más pesado corresponde a un ordenador.',
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
            'App': '[MLC Chat](/es/power-local-llm/mlc-chat-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Chat de código abierto en el dispositivo basado en el motor MLC LLM',
          },
          {
            'App': '[Maid](/es/power-local-llm/maid-review)',
            'Plataformas': 'Android, iOS',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App de chat de código abierto para modelos GGUF locales o proveedores remotos',
          },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Private Mind es gratis?',
            a: 'Sí. Las dos fichas de las tiendas y el README la describen como gratuita, sin cuenta ni suscripción, y el código fuente está bajo la licencia MIT. Consulta las tiendas por si algo cambia después del 3 de octubre de 2026.',
          },
          {
            q: '¿Quién hace Private Mind?',
            a: 'Software Mansion, una empresa de software polaca que figura como Software Mansion S.A. en Google Play. El código de la app está en la organización software-mansion-labs de la empresa en GitHub.',
          },
          {
            q: '¿Funciona sin conexión?',
            a: 'El chat principal, las preguntas sobre documentos y el dictado se ejecutan en el dispositivo una vez descargado un modelo. La primera descarga de un modelo y el interruptor Web opcional necesitan conexión a internet.',
          },
          {
            q: '¿Qué modelos puede ejecutar?',
            a: 'El catálogo del repositorio enumera 15 entradas entre Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4 y un modelo en polaco, incluidos dos modelos de visión LFM y uno Gemma. Se pueden importar tus propios modelos, pero no se indicaron los formatos admitidos.',
          },
          {
            q: '¿Puedo hacer preguntas sobre mis propios archivos?',
            a: 'Sí. Adjunta un archivo PDF, TXT, Markdown, HTML o CSV; la recuperación se ejecuta en el dispositivo y cada respuesta enlaza con los pasajes que usó.',
          },
          {
            q: '¿Qué hace el interruptor Web?',
            a: 'Introducido en la versión 1.3.0, incorpora información web actual a un chat y muestra las páginas usadas. Se conecta a internet, a diferencia del resto de la app, y el documento de problemas conocidos del proyecto enumera debilidades como los resultados vacíos en páginas con mucho JavaScript.',
          },
          {
            q: '¿Funciona en un Mac o solo en teléfonos?',
            a: 'La ficha de la App Store muestra disponibilidad en iPhone, iPad y Mac con Apple M1 o posterior. En las fuentes leídas no hay una versión de escritorio nativa independiente.',
          },
          {
            q: '¿Cuánta memoria necesito?',
            a: 'La ficha de Play recomienda un teléfono moderno con 4 GB o más de RAM para los modelos más grandes. La prueba de rendimiento integrada y los marcadores de compatibilidad de la app muestran qué puede ejecutar tu teléfono.',
          },
          {
            q: '¿Es lo mismo que React Native ExecuTorch?',
            a: 'No. React Native ExecuTorch es la biblioteca de código abierto sobre la que está construida la app; Private Mind es la app de chat terminada. Ambas proceden de Software Mansion.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Private Mind es una opción de código abierto entre las apps de chat móviles offline: es gratuita, tiene licencia MIT, está disponible en iPhone, iPad, Android y Mac con Apple Silicon, y la ha creado una empresa que mantiene la biblioteca sobre la que se ejecuta. Sus preguntas sobre documentos en el dispositivo con citas, el dictado con Whisper, los modelos de visión y las pruebas de rendimiento integradas van más allá del chat simple, y el repositorio público permite que, en principio, sus afirmaciones de privacidad puedan comprobarse. En contra, su catálogo de modelos se limita a modelos pequeños de unos 0.65 a 4 GB, el repositorio se creó en mayo de 2025, su interruptor Web opcional es la única parte que se conecta a internet, y la redacción de Seguridad de los datos de Play sobre «Actividad de la app» queda sin explicar en las fuentes. Encaja con quienes quieren una app de teléfono auditable, gratuita y offline por defecto; quienes prefieran otra opción de código abierto pueden comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Private Mind en la App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) — precio, versión, requisitos de plataforma, etiqueta de privacidad y descripción, consultados el 3 de octubre de 2026.',
          '[Private Mind en Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) — descripción, desarrollador, número de descargas, sección Seguridad de los datos y fecha de última actualización, consultados el 3 de octubre de 2026.',
          '[private-mind en GitHub](https://github.com/software-mansion-labs/private-mind) — README, archivo de licencia MIT, versiones, catálogo de modelos, notas de versión del repositorio y documento de problemas conocidos.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
          '[Análisis de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app de IA de código abierto en el dispositivo de Google.',
          '[Análisis de MLC Chat](/es/power-local-llm/mlc-chat-review) — una app de chat de código abierto en el dispositivo basada en MLC LLM.',
          '[Análisis de Maid](/es/power-local-llm/maid-review) — una app de código abierto para modelos GGUF locales o proveedores remotos.',
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
    heroImage: '/images/private-mind-review-hero-fr.webp',
    title: 'Avis Private Mind : chat IA open source hors ligne pour iPhone et Android',
    seoTitle: 'Avis Private Mind : chat IA open source hors ligne',
    intro:
      'Private Mind est une application de chat gratuite et open source de [Software Mansion](https://swmansion.com), une entreprise polonaise de logiciels, qui exécute des modèles de langage à poids ouverts sur un iPhone, un iPad ou un téléphone Android grâce à la bibliothèque React Native ExecuTorch. Au-delà du chat, elle propose des questions-réponses sur documents directement sur l\'appareil avec citation des sources, la dictée avec Whisper, des modèles compatibles avec la vision, des benchmarks de vitesse intégrés et — depuis la version 1.3.0 — une option Web facultative qui récupère des pages sur internet. Son code source est publié sous licence MIT sur [GitHub](https://github.com/software-mansion-labs/private-mind). Cet avis se fonde sur les fiches de l\'App Store et de Google Play ainsi que sur le dépôt public, consultés le 3 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'Avis Private Mind : app de chat IA hors ligne, gratuite et sous licence MIT, pour iPhone et Android, avec Q&R sur documents. Modèles, confidentialité, limites.',
    twitterDescription:
      'Avis Private Mind : l\'application de chat IA hors ligne, gratuite et open source (MIT) de Software Mansion pour iPhone et Android — Q&R sur documents, benchmarks, modèles de vision et recherche web facultative, seule partie qui passe par internet.',
    audience:
      'Utilisateurs d\'iPhone, d\'iPad et d\'Android qui veulent une application de chat gratuite et open source exécutant des modèles de langage sur l\'appareil, et qui ont besoin de savoir précisément ce qui reste hors ligne, quels modèles elle propose et ce que les sources ne confirment pas.',
    readTime: '9 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis Private Mind',
    targetKeywords: [
      'avis application private mind',
      'private mind ia locale',
      'software mansion private mind',
      'application chat ia hors ligne iphone android',
      'application react native executorch',
      'application llm local open source mobile',
      'private mind vs pocketpal ai',
    ],
    current_models_mentioned: ['Qwen 3', 'LLaMA 3.2', 'Qwen 2.5', 'LFM 2.5', 'Gemma 4', 'Bielik'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**Private Mind (version 1.3.0 au 3 octobre 2026) est une application de chat gratuite, sous licence MIT, de Software Mansion, qui exécute des modèles de langage à poids ouverts sur iPhone, iPad et Android sans compte, et peut répondre à des questions sur vos propres fichiers PDF et texte grâce à une recherche documentaire sur l\'appareil avec citation des sources.** Les modèles sont téléchargés une seule fois depuis Hugging Face puis exécutés hors ligne via React Native ExecuTorch. La version 1.3.0 a ajouté une option Web facultative qui récupère des pages web : l\'application est donc hors ligne par défaut, mais pas lorsque cette fonction est utilisée.',
    quickAnswerTop: {
      fr: {
        question: 'Private Mind fonctionne-t-elle vraiment entièrement hors ligne et gratuitement ?',
        answer:
          'Selon ses fiches et son dépôt, oui pour les fonctions de base : une fois un modèle téléchargé, le chat, les questions-réponses sur documents et la dictée s\'exécutent sur l\'appareil, et l\'application est gratuite, sans compte. L\'exception est l\'option Web facultative introduite avec la version 1.3.0, qui récupère des pages sur internet ; le premier téléchargement d\'un modèle nécessite aussi une connexion.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) et l\'[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) ; code source sur [GitHub](https://github.com/software-mansion-labs/private-mind) sous licence MIT.',
          'Les modèles (environ 0,65 à 4 Go chacun selon le catalogue du dépôt) sont téléchargés depuis Hugging Face à la première utilisation, puis exécutés sur l\'appareil.',
          'Questions-réponses sur documents avec citations cliquables, dictée Whisper, modèles compatibles avec la vision et benchmarks intégrés.',
          'Au 3 octobre 2026 : version 1.3.0, plus de 5 000 téléchargements sur Google Play et 385 étoiles sur GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Private Mind ?', anchor: 'what-is-private-mind' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Quels modèles propose-t-elle ?', anchor: 'models-supported' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité et recherche web', anchor: 'privacy' },
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
            text: 'Private Mind est une application gratuite pour iPhone, iPad et Android, sous licence MIT, de Software Mansion : elle exécute des modèles de langage à poids ouverts sur l\'appareil, répond à des questions sur vos propres documents et propose une recherche web facultative ajoutée dans la version 1.3.0.',
          },
          {
            type: 'plain-terms',
            text: 'On l\'installe, on télécharge un modèle une seule fois, puis on discute avec lui sans compte ni connexion internet ; on peut aussi lui donner des PDF et des fichiers texte à interroger, et seule l\'option Web facultative envoie des requêtes sur internet.',
          },
        ],
        items: [
          'Développeur : [Software Mansion](https://swmansion.com) (Software Mansion S.A. sur Google Play), qui se décrit comme une agence logicielle active depuis 2012 et un contributeur majeur de React Native ; l\'application se trouve dans son organisation GitHub [software-mansion-labs](https://github.com/software-mansion-labs).',
          'Prix et licence : gratuite, sans compte ; code source sous licence MIT, avec un avis joint pour les composants ExecuTorch sous licence BSD-3-Clause.',
          'Modèles : 15 entrées dans le catalogue du dépôt, réparties entre Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4 et un modèle en langue polonaise, dont des options compatibles avec la vision.',
          'Plateformes : iPhone et iPad (iOS et iPadOS 17.0 ou version ultérieure), Mac avec Apple M1 ou version ultérieure via la fiche de l\'App Store, et Android via Google Play.',
          'Indicateurs des boutiques au 3 octobre 2026 : version 1.3.0, plus de 5 000 téléchargements sur Google Play, 385 étoiles sur GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur les fiches de l\'App Store et de Google Play ainsi que sur le dépôt GitHub public (README, licence, versions, catalogue de modèles, notes de version et document des problèmes connus du projet), consultés le 3 octobre 2026. PromptQuorum n\'a ni testé ni évalué par benchmark l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-private-mind',
        title: 'Qu\'est-ce que Private Mind ?',
        content: [
          '**Private Mind est une application mobile de chat qui exécute des modèles de langage à poids ouverts en local au lieu d\'appeler un service cloud.** D\'après son [README](https://github.com/software-mansion-labs/private-mind), toutes les conversations se déroulent sur l\'appareil, il n\'y a ni inscription ni abonnement, et les modèles ne sont pas fournis avec l\'application : ils sont téléchargés depuis Hugging Face à la première utilisation, si bien que le premier lancement nécessite une connexion réseau.',
          'En interne, elle s\'appuie sur React Native ExecuTorch, une bibliothèque open source distincte de la même entreprise, qui encapsule le runtime d\'inférence ExecuTorch pour les applications React Native. L\'application, la bibliothèque et le runtime sont trois projets différents : Private Mind est l\'application finie présentée ici, React Native ExecuTorch est la bibliothèque sur laquelle elle repose, et ExecuTorch est le runtime maintenu dans l\'écosystème PyTorch.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**Private Mind est distribuée via les deux boutiques mobiles et sous forme de code source ; les trois liens ci-dessous sont ceux que le README du projet indique.**',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'iPhone / iPad',
            'Où la trouver': '[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) (iOS et iPadOS 17.0 ou version ultérieure)',
          },
          {
            'Plateforme': 'Mac (Apple M1+)',
            'Où la trouver': 'Même fiche App Store (indiquée comme disponibilité Mac)',
          },
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)',
          },
          {
            'Plateforme': 'Code source',
            'Où la trouver': '[GitHub](https://github.com/software-mansion-labs/private-mind) (MIT)',
          },
        ],
        note: 'Version actuelle vérifiée le 3 octobre 2026 : 1.3.0, publiée sur la [page des versions](https://github.com/software-mansion-labs/private-mind/releases) du projet le 17 septembre 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La mise en route suit l\'ordre décrit dans le README et les fiches des boutiques ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Téléchargez Private Mind depuis l\'App Store ou Google Play ; selon les fiches, aucun compte ni inscription n\'est requis.',
          },
          {
            title: 'Télécharger un modèle en Wi-Fi',
            whyItMatters: 'Les modèles sont récupérés depuis Hugging Face à la première utilisation et pèsent environ 1 à 3 Go chacun selon la fiche Play ; utilisez donc le Wi-Fi. Selon le README, la liste dans l\'application indique les modèles adaptés à votre appareil.',
          },
          {
            title: 'Lancer le benchmark intégré',
            whyItMatters: 'La fiche Play suggère le benchmark si vous ne savez pas quel modèle votre téléphone peut gérer ; il mesure la vitesse et la mémoire sur votre propre matériel.',
          },
          {
            title: 'Discuter ou joindre un document',
            whyItMatters: 'Lancez une conversation, ou joignez un fichier PDF, TXT, Markdown, HTML ou CSV et posez-lui des questions ; les réponses renvoient aux passages utilisés.',
          },
          {
            title: 'Activer Web, si souhaité',
            whyItMatters: 'La version 1.3.0 a ajouté une option Web qui apporte des informations récentes dans une conversation. Laissez-la désactivée pour garder une conversation entièrement hors ligne.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quels modèles propose-t-elle ?',
        itemHeadings: true,
        columns: ['Famille de modèles', 'Entrées et tailles', 'Remarques'],
        rows: [
          {
            'Famille de modèles': 'Qwen 3',
            'Entrées et tailles': '0,6B et 1,7B (environ 0,9 à 2,2 Go)',
            'Remarques': 'Marqués avec raisonnement dans le catalogue',
          },
          {
            'Famille de modèles': 'LLaMA 3.2',
            'Entrées et tailles': '1B et 3B, variantes QLoRA et SpinQuant (environ 1,1 à 2,7 Go)',
            'Remarques': 'Marqués comme bons en programmation',
          },
          {
            'Famille de modèles': 'Qwen 2.5',
            'Entrées et tailles': '0,5B, 1,5B et 3B (environ 0,8 à 2,9 Go)',
            'Remarques': 'Options petites, équilibrées ou puissantes',
          },
          {
            'Famille de modèles': 'LFM 2.5',
            'Entrées et tailles': '1,2B texte, plus des modèles de vision 1,6B et 450M',
            'Remarques': 'Les deux entrées VL acceptent des images',
          },
          {
            'Famille de modèles': 'Gemma 4',
            'Entrées et tailles': '2B texte et 2B vision, tailles variables selon la plateforme',
            'Remarques': 'Texte environ 2,5 à 2,9 Go, vision environ 3 à 4 Go',
          },
          {
            'Famille de modèles': 'Bielik v3.0',
            'Entrées et tailles': 'Environ 0,9 Go',
            'Remarques': 'Modèle en langue polonaise',
          },
        ],
        note: 'Les tailles et les entrées proviennent du fichier de catalogue de modèles du dépôt au 3 octobre 2026 et évolueront au fil des mises à jour du catalogue. La fiche Play indique aussi qu\'il est possible d\'importer ses propres modèles ; les formats de fichier acceptés n\'étaient pas précisés dans les sources lues.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du README du projet, de ses notes de version dans le dépôt ou des fiches des boutiques ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Questions-réponses sur documents.** Joignez un fichier PDF, TXT, Markdown, HTML ou CSV ; la recherche documentaire et les embeddings s\'exécutent sur l\'appareil et les réponses renvoient aux passages sources (la fiche Play cite PDF et TXT).',
          '**Images et voix.** Envoyez une photo à un modèle compatible avec la vision, ou dictez avec Whisper, la reconnaissance vocale étant transcrite sur l\'appareil.',
          '**Benchmarks intégrés.** Comparez les modèles en vitesse et en mémoire sur votre propre matériel avant d\'en choisir un.',
          '**Outils de conversation.** Créez une nouvelle branche de conversation à partir de n\'importe quel message, enregistrez des prompts système comme préréglages réutilisables, recherchez dans vos conversations et exportez-les.',
          '**Model Hub.** Modèles ouverts sélectionnés et regroupés par famille, avec en plus l\'import de vos propres modèles.',
          '**Option Web (version 1.3.0).** Apporte des informations récentes dans une conversation, affiche les pages utilisées pour une réponse et, selon les notes de version, récupère et lit ces pages sur l\'appareil.',
        ],
        note: 'Les listes de fonctions diffèrent légèrement entre le README, la description Play et la description de l\'App Store (par exemple, la recherche web figure dans le texte de l\'App Store et dans les notes de version, mais pas dans le README) ; la version actuelle de l\'application fait foi.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et recherche web',
        content: [
          '**L\'usage de base est conçu pour rester hors ligne : le README indique que les conversations restent sur l\'appareil, et la fiche Play indique l\'absence de télémétrie.** L\'étiquette de confidentialité de l\'App Store précise que le développeur ne collecte aucune donnée, et la section Sécurité des données de Google Play déclare « Aucune donnée collectée » ainsi qu\'un chiffrement en transit.',
          'La section Sécurité des données de Play mentionne aussi « Activité dans l\'application » parmi les types de données que l\'application peut partager avec des tiers. Les sources n\'expliquent pas à quoi cela renvoie, et la recherche web facultative de l\'application est la fonction réseau la plus évidente ; la mention « hors ligne » doit donc être considérée comme valable pour les conversations où Web est désactivé. Le [document des problèmes connus](https://github.com/software-mansion-labs/private-mind/blob/main/docs/KNOWN_ISSUES.md) du projet décrit la recherche web comme un scraper qui récupère des pages, et le dépôt récupère les icônes de sites via le service d\'icônes de DuckDuckGo. Le service de recherche qui reçoit votre requête n\'a pas été identifié à partir des sources lues.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code source est public : ces affirmations peuvent donc être vérifiées par quiconque compile l\'application, mais PromptQuorum n\'a audité ni le code ni le trafic réseau. Quiconque traite des données confidentielles devrait vérifier le comportement avec Web désactivé puis activé.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'En pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Gratuite et open source',
            'En pratique': 'Ni compte ni abonnement, et le code sous licence MIT peut être lu et compilé.',
            'Limite / réserve': 'Publiée dans l\'organisation GitHub « labs » de l\'entreprise ; les sources n\'indiquent aucun engagement de support.',
          },
          {
            'Avantage': 'Documents sur l\'appareil',
            'En pratique': 'Posez des questions sur vos propres fichiers, avec des passages sources cliquables.',
            'Limite / réserve': 'La qualité dépend du petit modèle que vous chargez.',
          },
          {
            'Avantage': 'Benchmarks intégrés',
            'En pratique': 'Vous voyez la vitesse et la mémoire sur votre téléphone avant de choisir un modèle.',
            'Limite / réserve': 'Les résultats ne valent que pour votre appareil, et les sources ne contiennent aucun chiffre publié.',
          },
          {
            'Avantage': 'Deux plateformes mobiles',
            'En pratique': 'La même application existe sur iPhone, iPad, Android et Mac à puce Apple.',
            'Limite / réserve': 'Les modèles se limitent à ce que son catalogue et sa fonction d\'import prennent en charge.',
          },
          {
            'Avantage': 'Recherche web facultative',
            'En pratique': 'Les réponses peuvent s\'appuyer sur des pages récentes, les pages étant affichées.',
            'Limite / réserve': 'Passe par internet ; le document des problèmes connus signale des résultats vides sur les pages riches en JavaScript et 30 à 40 secondes avant le premier token avec la recherche web.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Ceux qui veulent une application de chat hors ligne gratuite et auditable sur un téléphone.** La licence MIT et le dépôt public la rendent vérifiable, ce que les applications fermées ne permettent pas.',
          '**Ceux qui veulent interroger leurs propres PDF et notes en toute confidentialité.** La recherche documentaire sur l\'appareil avec citations est une fonction phare.',
          '**Ceux qui cherchent quel modèle leur téléphone peut exécuter.** Le benchmark intégré et les indicateurs d\'adéquation dans l\'application sont conçus pour cela.',
          '**Les développeurs curieux de React Native ExecuTorch.** L\'application est un exemple concret réalisé par les mainteneurs de la bibliothèque.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Performances en conditions réelles.** PromptQuorum n\'a pas exécuté l\'application : la vitesse, la consommation de batterie et la qualité des réponses ne sont donc pas évaluées.',
          '**À quoi renvoie le partage d\'« Activité dans l\'application ».** La section Sécurité des données de Play le mentionne à côté de « Aucune donnée collectée » ; les sources ne l\'expliquent pas.',
          '**Quel service de recherche l\'option Web utilise.** Les sources lues ne le nomment pas.',
          '**Version d\'Android requise et numéro de build Play.** Le texte Play lu n\'indique ni version minimale d\'Android ni numéro de version ; la version 1.3.0 provient de la fiche de l\'App Store et des versions GitHub.',
          '**Site du produit.** Le site du projet, privatemind.swmansion.com, ne se charge qu\'avec JavaScript, son contenu n\'a donc pas pu être lu ; les faits présentés ici proviennent du README et des fiches des boutiques.',
          '**Pas pour ceux qui ont besoin de très gros modèles.** Le catalogue plafonne à des modèles d\'environ 4 Go ; les travaux plus lourds relèvent d\'un ordinateur.',
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
            'Application': '[MLC Chat](/fr/power-local-llm/mlc-chat-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / Apache 2.0',
            'Différence clé': 'Chat open source sur l\'appareil, basé sur le moteur MLC LLM',
          },
          {
            'Application': '[Maid](/fr/power-local-llm/maid-review)',
            'Plateformes': 'Android, iOS',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Application de chat open source pour GGUF local ou fournisseurs distants',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Private Mind est-elle gratuite ?',
            a: 'Oui. Les deux fiches des boutiques et le README la décrivent comme gratuite, sans compte ni abonnement, et son code source est sous licence MIT. Consultez les boutiques pour tout changement après le 3 octobre 2026.',
          },
          {
            q: 'Qui crée Private Mind ?',
            a: 'Software Mansion, une entreprise polonaise de logiciels répertoriée sous le nom Software Mansion S.A. sur Google Play. Le code de l\'application se trouve dans l\'organisation software-mansion-labs de l\'entreprise sur GitHub.',
          },
          {
            q: 'Fonctionne-t-elle hors ligne ?',
            a: 'Le chat de base, les questions-réponses sur documents et la dictée s\'exécutent sur l\'appareil une fois un modèle téléchargé. Le premier téléchargement d\'un modèle et l\'option Web facultative nécessitent une connexion internet.',
          },
          {
            q: 'Quels modèles peut-elle exécuter ?',
            a: 'Le catalogue du dépôt répertorie 15 entrées réparties entre Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4 et un modèle en langue polonaise, dont deux modèles de vision LFM et un modèle de vision Gemma. Vous pouvez importer vos propres modèles, mais les formats acceptés n\'étaient pas précisés.',
          },
          {
            q: 'Puis-je poser des questions sur mes propres fichiers ?',
            a: 'Oui. Joignez un fichier PDF, TXT, Markdown, HTML ou CSV ; la recherche documentaire s\'exécute sur l\'appareil et chaque réponse renvoie aux passages utilisés.',
          },
          {
            q: 'À quoi sert l\'option Web ?',
            a: 'Introduite avec la version 1.3.0, elle apporte des informations web récentes dans une conversation et affiche les pages utilisées. Contrairement au reste de l\'application, elle passe par internet, et le document des problèmes connus du projet mentionne des faiblesses comme des résultats vides sur les pages riches en JavaScript.',
          },
          {
            q: 'Fonctionne-t-elle sur Mac ou seulement sur téléphone ?',
            a: 'La fiche de l\'App Store indique une disponibilité sur iPhone, iPad et Mac avec Apple M1 ou version ultérieure. Les sources lues ne mentionnent aucune version de bureau native distincte.',
          },
          {
            q: 'De combien de mémoire ai-je besoin ?',
            a: 'La fiche Play recommande un téléphone récent avec 4 Go de RAM ou plus pour les modèles plus gros. Le benchmark intégré et les indicateurs d\'adéquation dans l\'application montrent ce que votre téléphone peut exécuter.',
          },
          {
            q: 'Est-ce la même chose que React Native ExecuTorch ?',
            a: 'Non. React Native ExecuTorch est la bibliothèque open source sur laquelle l\'application repose ; Private Mind est l\'application de chat finie. Les deux viennent de Software Mansion.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Private Mind est une option open source parmi les applications mobiles de chat hors ligne : elle est gratuite, sous licence MIT, disponible sur iPhone, iPad, Android et Mac à puce Apple, et créée par une entreprise qui maintient la bibliothèque sur laquelle elle repose. Ses questions-réponses sur documents avec citations, sa dictée Whisper, ses modèles de vision et ses benchmarks intégrés vont au-delà du simple chat, et le dépôt public permet, en principe, de vérifier ses affirmations sur la confidentialité. En face, son catalogue se limite à de petits modèles d\'environ 0,65 à 4 Go, le dépôt a été créé en mai 2025, son option Web facultative est la seule partie qui passe par internet, et la formulation de la section Sécurité des données de Play sur l\'« Activité dans l\'application » reste inexpliquée dans les sources. Elle convient aux lecteurs qui veulent une application de téléphone gratuite, auditable et pensée d\'abord pour le hors ligne ; ceux qui préfèrent une autre option open source peuvent comparer [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Private Mind sur l\'App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) — prix, version, configuration requise, étiquette de confidentialité et description, consultés le 3 octobre 2026.',
          '[Private Mind sur Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) — description, développeur, nombre de téléchargements, section Sécurité des données et date de dernière mise à jour, consultés le 3 octobre 2026.',
          '[private-mind sur GitHub](https://github.com/software-mansion-labs/private-mind) — README, fichier de licence MIT, versions, catalogue de modèles, notes de version dans le dépôt et document des problèmes connus.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l\'appareil pour iOS et Android.',
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application d\'IA open source sur l\'appareil de Google.',
          '[Avis MLC Chat](/fr/power-local-llm/mlc-chat-review) — une application de chat open source sur l\'appareil, basée sur MLC LLM.',
          '[Avis Maid](/fr/power-local-llm/maid-review) — une application open source pour GGUF local ou fournisseurs distants.',
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
    heroImage: '/images/private-mind-review-hero-ja.webp',
    title: 'Private Mindレビュー:iPhone・Android向けオープンソースのオフラインAIチャット',
    seoTitle: 'Private Mindレビュー:オフラインのオープンソースAIチャット',
    intro:
      'Private Mindは、ポーランドのソフトウェア企業[Software Mansion](https://swmansion.com)が提供する無料のオープンソースチャットアプリで、React Native ExecuTorchライブラリを通じて、iPhone、iPad、Androidスマートフォン上でオープンウェイトの言語モデルを動かします。チャットに加えて、出典付きの端末内ドキュメントQ&A、Whisperによる音声入力、画像に対応したモデル、組み込みの速度ベンチマーク、そしてバージョン1.3.0以降はインターネットからページを取得するオプションのWebトグルを備えています。ソースコードは[GitHub](https://github.com/software-mansion-labs/private-mind)でMITライセンスの下で公開されています。本レビューは、2026年10月3日に確認したApp StoreとGoogle Playの掲載情報および公開リポジトリに基づいています。PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'Private Mindレビュー:端末内ドキュメントQ&Aを備えた、iPhone・Android向けの無料MITライセンスのオフラインAIチャットアプリ。モデル、プライバシー、Web検索、制約を解説します。',
    twitterDescription:
      'Private Mindレビュー:Software Mansionが提供する、iPhone・Android向けの無料オープンソース(MIT)のオフラインAIチャットアプリ。ドキュメントQ&A、ベンチマーク、画像対応モデル、そして唯一オンラインになるオプションのWeb検索を解説します。',
    audience:
      '言語モデルを端末上で動かす無料のオープンソースチャットアプリを求めるiPhone、iPad、Androidユーザーで、何がオフラインのままなのか、どのモデルが提供されているのか、情報源が何を確認していないのかを正確に知りたい方向け。',
    readTime: '9分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Private Mind レビュー',
    targetKeywords: [
      'private mind アプリ レビュー',
      'private mind ローカルai',
      'software mansion private mind',
      'オフライン aiチャット アプリ iphone android',
      'react native executorch アプリ',
      'オープンソース ローカルllm モバイルアプリ',
      'private mind pocketpal ai 比較',
    ],
    current_models_mentioned: ['Qwen 3', 'LLaMA 3.2', 'Qwen 2.5', 'LFM 2.5', 'Gemma 4', 'Bielik'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**Private Mind(2026年10月3日時点のバージョンは1.3.0)は、Software Mansionが提供する無料のMITライセンスのチャットアプリで、アカウント不要でiPhone、iPad、Android上でオープンウェイトの言語モデルを動かし、端末内の検索により、ご自身のPDFやテキストファイルについての質問に出典付きで答えられます。** モデルはHugging Faceから一度ダウンロードすれば、その後はReact Native ExecuTorchを通じてオフラインで動作します。バージョン1.3.0ではウェブページを取得するオプションのWebトグルが追加されたため、このアプリは既定ではオフラインですが、この機能を使うときはオフラインではありません。',
    quickAnswerTop: {
      ja: {
        question: 'Private Mindは本当に完全オフラインで動き、無料で使えますか?',
        answer:
          '掲載情報とリポジトリによれば、中核機能についてはその通りです。モデルをダウンロードしたあとは、チャット、ドキュメントQ&A、音声入力が端末上で動作し、アプリは無料でアカウントも不要です。例外は、バージョン1.3.0で導入されたインターネットからページを取得するオプションのWebトグルで、最初のモデルのダウンロードにも接続が必要です。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)と[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439)で無料。ソースは[GitHub](https://github.com/software-mansion-labs/private-mind)でMITライセンスの下で公開されている。',
          'モデル(リポジトリのカタログによれば各約0.65〜4 GB)は初回利用時にHugging Faceからダウンロードされ、その後は端末上で動作する。',
          'クリックできる出典付きの端末内ドキュメントQ&A、Whisperによる音声入力、画像対応モデル、組み込みのベンチマーク。',
          '2026年10月3日の確認時点:バージョン1.3.0、Google Playで5K+ダウンロード、GitHubのスター385件。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Private Mindとは?', anchor: 'what-is-private-mind' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '提供されているモデル', anchor: 'models-supported' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'プライバシーとWeb検索', anchor: 'privacy' },
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
            text: 'Private Mindは、Software Mansionが提供する無料のMITライセンスのiPhone・iPad・Androidアプリで、オープンウェイトの言語モデルを端末上で動かし、ご自身のドキュメントについての質問に答え、バージョン1.3.0で追加されたオプションのWeb検索も備えている。',
          },
          {
            type: 'plain-terms',
            text: 'アプリをインストールし、モデルを一度ダウンロードすれば、アカウントもインターネット接続もなしにチャットできます。PDFやテキストファイルを渡して質問することもでき、インターネットにリクエストを送るのはオプションのWebトグルだけです。',
          },
        ],
        items: [
          '開発元:[Software Mansion](https://swmansion.com)(Google PlayではSoftware Mansion S.A.と表記)。同社は自らを2012年から続くソフトウェア開発会社であり、React Nativeの主要コントリビューターであると説明している。アプリは同社の[software-mansion-labs](https://github.com/software-mansion-labs) GitHub組織にある。',
          '料金とライセンス:アカウント不要で無料。ソースコードはMITライセンスで、BSD-3-Clauseライセンスが適用されるExecuTorchコンポーネント向けの通知が同梱されている。',
          'モデル:リポジトリのカタログに15項目。Qwen 3、LLaMA 3.2、Qwen 2.5、LFM 2.5、Gemma 4、ポーランド語モデルにまたがり、画像対応のものも含む。',
          'プラットフォーム:iPhoneとiPad(iOSおよびiPadOS 17.0以降)、App Storeの掲載情報によればApple M1以降のMac、そしてGoogle Play経由のAndroid。',
          '2026年10月3日の確認時点のストア指標:バージョン1.3.0、Google Playで5K+ダウンロード、GitHubのスター385件。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月3日に確認したApp StoreとGoogle Playの掲載情報、および公開GitHubリポジトリ(README、ライセンス、リリース、モデルカタログ、プロジェクト自身のリリースノートと既知の問題に関する文書)に基づいています。PromptQuorumはアプリのテストやベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-private-mind',
        title: 'Private Mindとは?',
        content: [
          '**Private Mindは、クラウドサービスを呼び出す代わりに、オープンウェイトの言語モデルをローカルで動かすモバイル向けチャットアプリです。** [README](https://github.com/software-mansion-labs/private-mind)によれば、会話はすべて端末上で行われ、サインアップもサブスクリプションもありません。モデルは同梱されておらず、初回利用時にHugging Faceからダウンロードされるため、初回の実行にはネットワーク接続が必要です。',
          '内部では、同じ会社が提供する別個のオープンソースライブラリであるReact Native ExecuTorchを使っています。これは、ExecuTorch推論ランタイムをReact Nativeアプリ向けにラップするものです。アプリ、ライブラリ、ランタイムは3つの別々のプロジェクトです。Private Mindは本レビューで取り上げる完成したアプリ、React Native ExecuTorchはその土台となるライブラリ、ExecuTorchはPyTorchエコシステムで保守されているランタイムです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Private Mindは両方のモバイルストアとソースコードとして配布されており、以下の3つのリンクはいずれもプロジェクトのREADMEに記載されているものです。**',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'iPhone / iPad',
            '入手先': '[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439)(iOS・iPadOS 17.0以降)',
          },
          {
            'プラットフォーム': 'Mac(Apple M1以降)',
            '入手先': '同じApp Store掲載(Mac対応として表示)',
          },
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHub](https://github.com/software-mansion-labs/private-mind)(MIT)',
          },
        ],
        note: '2026年10月3日に確認した現行バージョンは1.3.0で、プロジェクトの[リリースページ](https://github.com/software-mansion-labs/private-mind/releases)に2026年9月17日に公開されています。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**セットアップは、READMEとストア掲載情報に記載された順序に従います。PromptQuorumはこれらの手順を実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'App StoreまたはGoogle PlayからPrivate Mindをダウンロードします。掲載情報によれば、アカウントやサインアップは不要です。',
          },
          {
            title: 'Wi-Fiでモデルをダウンロードする',
            whyItMatters: 'モデルは初回利用時にHugging Faceから取得され、Playの掲載情報によれば各約1〜3 GBなので、Wi-Fiを使ってください。READMEによれば、アプリ内のリストには端末に収まるモデルが示されます。',
          },
          {
            title: '組み込みのベンチマークを実行する',
            whyItMatters: 'Playの掲載情報は、スマートフォンでどのモデルを扱えるか分からない場合にベンチマークを勧めています。ご自身のハードウェアでの速度とメモリを測定します。',
          },
          {
            title: 'チャットするか、ドキュメントを添付する',
            whyItMatters: 'チャットを始めるか、PDF、TXT、Markdown、HTML、CSVのファイルを添付して質問します。回答は、使われた箇所へのリンクが付きます。',
          },
          {
            title: '必要に応じてWebをオンにする',
            whyItMatters: 'バージョン1.3.0では、最新情報をチャットに取り込むWebトグルが追加されました。チャットを完全にオフラインに保つには、オフのままにしてください。',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '提供されているモデル',
        itemHeadings: true,
        columns: ['モデルファミリー', '項目とサイズ', '備考'],
        rows: [
          {
            'モデルファミリー': 'Qwen 3',
            '項目とサイズ': '0.6Bと1.7B(約0.9〜2.2 GB)',
            '備考': 'カタログでは推論対応と表示',
          },
          {
            'モデルファミリー': 'LLaMA 3.2',
            '項目とサイズ': '1Bと3B、QLoRAとSpinQuantの派生版(約1.1〜2.7 GB)',
            '備考': 'コーディングが得意と表示',
          },
          {
            'モデルファミリー': 'Qwen 2.5',
            '項目とサイズ': '0.5B、1.5B、3B(約0.8〜2.9 GB)',
            '備考': '小型・バランス型・高性能型の選択肢',
          },
          {
            'モデルファミリー': 'LFM 2.5',
            '項目とサイズ': '1.2Bテキスト、および1.6Bと450Mの画像対応モデル',
            '備考': '2つのVL項目は画像を受け付ける',
          },
          {
            'モデルファミリー': 'Gemma 4',
            '項目とサイズ': '2Bテキストと2B画像対応、サイズはプラットフォームで異なる',
            '備考': 'テキストは約2.5〜2.9 GB、画像対応は約3〜4 GB',
          },
          {
            'モデルファミリー': 'Bielik v3.0',
            '項目とサイズ': '約0.9 GB',
            '備考': 'ポーランド語モデル',
          },
        ],
        note: 'サイズと項目は、2026年10月3日時点のリポジトリのモデルカタログファイルに基づいており、カタログの更新に伴って変わります。Playの掲載情報には独自のモデルをインポートできるとも記載されていますが、どのファイル形式を受け付けるかは、読み取れた情報源には記載がありませんでした。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、プロジェクトのREADME、リポジトリ内のリリースノート、またはストア掲載情報に基づくもので、独自に検証したものはありません。**',
        ],
        items: [
          '**ドキュメントQ&A。** PDF、TXT、Markdown、HTML、CSVのファイルを添付すると、検索と埋め込みが端末上で実行され、回答は出典の箇所にリンクする(Playの掲載情報ではPDFとTXTが挙げられている)。',
          '**画像と音声。** 画像対応モデルに写真を送ったり、端末上で文字起こしされるWhisperの音声入力で話しかけたりできる。',
          '**組み込みのベンチマーク。** 一つに決める前に、ご自身のハードウェアでモデルの速度とメモリを比較できる。',
          '**会話ツール。** 任意のメッセージからチャットを分岐でき、システムプロンプトを再利用可能なプリセットとして保存でき、チャットの検索や会話のエクスポートもできる。',
          '**Model Hub。** ファミリー別に整理された厳選のオープンモデルと、独自モデルのインポート。',
          '**Webトグル(バージョン1.3.0)。** 最新情報をチャットに取り込み、回答に使われたページを表示する。リリースノートによれば、それらのページは端末上で取得して読み取られる。',
        ],
        note: '機能の一覧は、README、Playの説明、App Storeの説明の間で少しずつ異なります(たとえば、Web検索はApp Storeの文面とリリースノートにはありますが、READMEにはありません)。最終的な判断基準は、アプリの現行ビルドです。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとWeb検索',
        content: [
          '**中核的な使い方は設計上オフラインです。READMEは会話が端末上にとどまると述べ、Playの掲載情報はテレメトリがないと述べています。** App Storeのプライバシーラベルには、開発元がデータを一切収集しないと記載されており、Playのデータセーフティのセクションは「収集するデータなし」と転送中の暗号化を申告しています。',
          'Playのデータセーフティのセクションには、アプリが第三者と共有する可能性のあるデータの種類として「アプリのアクティビティ」も挙げられています。情報源にはこれが何を指すのか記載がなく、アプリのオプションのWeb検索が最も思い当たるネットワーク機能であるため、「オフライン」という説明は、Webをオフにしたチャットに当てはまるものとして扱ってください。プロジェクト自身の[既知の問題に関する文書](https://github.com/software-mansion-labs/private-mind/blob/main/docs/KNOWN_ISSUES.md)は、Web検索をページを取得するスクレイパーとして説明しており、リポジトリはDuckDuckGoのアイコンサービスからサイトのアイコンを取得しています。どの検索サービスがクエリを受け取るのかは、読み取れた情報源からは特定できませんでした。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ソースコードは公開されているため、アプリをビルドすれば誰でもこれらの主張を確認できますが、PromptQuorumはコードもネットワーク通信も監査していません。機密データを扱う方は、Webをオフにした場合とオンにした場合の動作をご自身で確認してください。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:利点と制約',
        columns: ['利点', '実際の使用での意味', '制約・注意点'],
        rows: [
          {
            '利点': '無料でオープンソース',
            '実際の使用での意味': 'アカウントもサブスクリプションも不要で、MITライセンスのコードを読んでビルドできる。',
            '制約・注意点': '同社のlabsのGitHub組織で公開されており、サポートの約束は情報源に記載されていない。',
          },
          {
            '利点': '端末内でドキュメントを扱える',
            '実際の使用での意味': 'クリックできる出典の箇所付きで、ご自身のファイルについて質問できる。',
            '制約・注意点': '品質は、読み込む小型モデルに左右される。',
          },
          {
            '利点': '組み込みのベンチマーク',
            '実際の使用での意味': 'モデルを決める前に、スマートフォンでの速度とメモリを確認できる。',
            '制約・注意点': '結果はご自身の端末にのみ当てはまり、情報源には公表された数値がない。',
          },
          {
            '利点': '両方のモバイルプラットフォーム',
            '実際の使用での意味': '同じアプリがiPhone、iPad、Android、Apple siliconのMacで使える。',
            '制約・注意点': 'モデルは、カタログとインポート機能が対応するものに限られる。',
          },
          {
            '利点': 'オプションのWeb検索',
            '実際の使用での意味': '回答に最新のページを使え、使われたページが表示される。',
            '制約・注意点': 'オンラインになる。既知の問題の文書では、JavaScriptを多用するページで結果が空になることや、Web検索をオンにすると最初のトークンまで30〜40秒かかることが報告されている。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**スマートフォンで、無料で監査可能なオフラインチャットアプリを使いたい人。** MITライセンスと公開リポジトリにより、クローズドなアプリにはない形で確認できる。',
          '**ご自身のPDFやメモについて、プライベートに質問したい人。** 出典付きの端末内検索が目玉機能である。',
          '**スマートフォンでどのモデルを動かせるか見極めたいユーザー。** 組み込みのベンチマークとアプリ内の適合マーカーは、そのために設計されている。',
          '**React Native ExecuTorchに関心のある開発者。** このアプリは、ライブラリのメンテナーが作った実際に動く例である。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での性能。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、回答品質は評価していない。',
          '**「アプリのアクティビティ」の共有が指すもの。** Playのデータセーフティのセクションでは「収集するデータなし」と並んで挙げられているが、情報源には説明がない。',
          '**Webトグルが使う検索サービス。** 読み取れた情報源には名前が挙がっていない。',
          '**Androidのバージョン要件とPlayのビルド番号。** 読み取れたPlayの文面には、最小Androidバージョンもバージョン番号も示されていない。バージョン1.3.0は、App Storeの掲載情報とGitHubのリリースに基づく。',
          '**製品ウェブサイト。** プロジェクトのサイトprivatemind.swmansion.comはJavaScriptがないと読み込めず、内容を読み取れなかった。ここでの事実はREADMEとストア掲載情報に基づく。',
          '**非常に大きなモデルが必要なユーザーには不向き。** カタログは約4 GBのモデルが上限のため、より重い作業はパソコンで行うのが適している。',
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
            'アプリ': '[MLC Chat](/ja/power-local-llm/mlc-chat-review)',
            'プラットフォーム': 'iOS、Android',
            '料金/ライセンス': '無料 / Apache 2.0',
            '主な違い': 'MLC LLMエンジン上に構築された、オープンソースの端末内チャット',
          },
          {
            'アプリ': '[Maid](/ja/power-local-llm/maid-review)',
            'プラットフォーム': 'Android、iOS',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': 'ローカルのGGUFモデルまたはリモートプロバイダー向けのオープンソースチャットアプリ',
          },
        ],
        note: '競合の詳細は頻繁に変わります。各アプリの現在の料金、ライセンス、対応プラットフォームは、それぞれの掲載情報で確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Private Mindは無料ですか?',
            a: 'はい。両方のストア掲載情報とREADMEは、アカウントもサブスクリプションも不要の無料と説明しており、ソースコードはMITライセンスです。2026年10月3日以降の変更については、各ストアで確認してください。',
          },
          {
            q: 'Private Mindを作っているのは誰ですか?',
            a: 'ポーランドのソフトウェア企業Software Mansionで、Google PlayではSoftware Mansion S.A.と表記されています。アプリのコードは、同社のGitHub上のsoftware-mansion-labs組織にあります。',
          },
          {
            q: 'オフラインで動きますか?',
            a: 'モデルをダウンロードしたあとは、中核となるチャット、ドキュメントQ&A、音声入力が端末上で動作します。最初のモデルのダウンロードとオプションのWebトグルには、インターネット接続が必要です。',
          },
          {
            q: 'どのモデルを動かせますか?',
            a: 'リポジトリのカタログには、Qwen 3、LLaMA 3.2、Qwen 2.5、LFM 2.5、Gemma 4、ポーランド語モデルにまたがる15項目があり、LFMの画像対応モデル2つとGemmaの画像対応モデル1つを含みます。独自のモデルをインポートできますが、受け付ける形式は記載されていませんでした。',
          },
          {
            q: '自分のファイルについて質問できますか?',
            a: 'はい。PDF、TXT、Markdown、HTML、CSVのファイルを添付すると、検索は端末上で実行され、各回答には使われた箇所へのリンクが付きます。',
          },
          {
            q: 'Webトグルは何をしますか?',
            a: 'バージョン1.3.0で導入されたもので、最新のウェブ情報をチャットに取り込み、使われたページを表示します。アプリの他の部分と異なりオンラインになり、プロジェクトの既知の問題に関する文書には、JavaScriptを多用するページで結果が空になるなどの弱点が挙げられています。',
          },
          {
            q: 'Macでも動きますか、それともスマートフォンだけですか?',
            a: 'App Storeの掲載情報には、iPhone、iPad、Apple M1以降のMacで利用できると表示されています。読み取れた情報源には、独立したネイティブのデスクトップ版はありませんでした。',
          },
          {
            q: 'どれくらいのメモリが必要ですか?',
            a: 'Playの掲載情報は、大きめのモデルにはRAM 4 GB以上の最新のスマートフォンを推奨しています。組み込みのベンチマークとアプリ内の適合マーカーで、お使いのスマートフォンで動かせるものが分かります。',
          },
          {
            q: 'React Native ExecuTorchと同じものですか?',
            a: 'いいえ。React Native ExecuTorchはアプリの土台となるオープンソースライブラリで、Private Mindは完成したチャットアプリです。どちらもSoftware Mansionが提供しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Private Mindは、オフラインのモバイルチャットアプリの中のオープンソースの選択肢です。無料でMITライセンスであり、iPhone、iPad、Android、Apple siliconのMacで利用でき、動作の基盤となるライブラリを保守する会社が作っています。出典付きの端末内ドキュメントQ&A、Whisperによる音声入力、画像対応モデル、組み込みのベンチマークは、単なるチャットの域を超えており、公開リポジトリがあるため、プライバシーに関する主張も原理的には確認できます。一方で、モデルカタログは約0.65〜4 GBの小型モデルに限られ、リポジトリが作られたのは2025年5月であり、オプションのWebトグルはオンラインになる唯一の部分で、Playのデータセーフティにある「アプリのアクティビティ」という表現は情報源では説明されていません。監査可能で無料のオフライン優先のスマートフォンアプリを求める読者に向いています。別のオープンソースの選択肢を好む読者は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)と比較できます。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのPrivate Mind](https://apps.apple.com/pl/app/private-mind/id6746713439) — 料金、バージョン、プラットフォーム要件、プライバシーラベル、説明。2026年10月3日確認。',
          '[Google PlayのPrivate Mind](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) — 説明、開発者、ダウンロード数、データセーフティのセクション、最終更新日。2026年10月3日確認。',
          '[GitHubのprivate-mind](https://github.com/software-mansion-labs/private-mind) — README、MITライセンスファイル、リリース、モデルカタログ、リポジトリ内のリリースノート、既知の問題に関する文書。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの、無料のオープンソース端末内チャットクライアント。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Googleのオープンソースの端末内AIアプリ。',
          '[MLC Chatレビュー](/ja/power-local-llm/mlc-chat-review) — MLC LLM上に構築された、オープンソースの端末内チャットアプリ。',
          '[Maidレビュー](/ja/power-local-llm/maid-review) — ローカルのGGUFモデルまたはリモートプロバイダー向けのオープンソースアプリ。',
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
    heroImage: '/images/private-mind-review-hero-pt.webp',
    title: 'Private Mind: Análise do App de Chat de IA Offline e Open Source para iPhone e Android',
    seoTitle: 'Private Mind Análise: App de Chat de IA Offline',
    intro:
      'O Private Mind é um app de chat gratuito e de código aberto da [Software Mansion](https://swmansion.com), empresa polonesa de software, que roda modelos de linguagem de peso aberto em iPhone, iPad ou celular Android por meio da biblioteca React Native ExecuTorch. Além do chat, oferece perguntas e respostas sobre documentos no próprio dispositivo com citação das fontes, ditado com Whisper, modelos com suporte a visão, benchmarks de velocidade integrados e, desde a versão 1.3.0, um botão Web opcional que busca páginas na internet. O código-fonte é publicado sob a licença MIT no [GitHub](https://github.com/software-mansion-labs/private-mind). Esta análise se baseia nas fichas da App Store e do Google Play e no repositório público, consultados em 3 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do Private Mind: chat de IA offline, gratuito, licença MIT, para iPhone e Android, com perguntas sobre documentos. Modelos, privacidade e limites.',
    twitterDescription:
      'Análise do Private Mind: o app de chat de IA offline, gratuito e open source (MIT) da Software Mansion para iPhone e Android — perguntas sobre documentos, benchmarks, modelos de visão e uma busca na web opcional, a única parte que fica online.',
    audience:
      'Usuários de iPhone, iPad e Android que querem um app de chat gratuito e de código aberto que rode modelos de linguagem no dispositivo e que precisam saber exatamente o que fica offline, quais modelos ele oferece e o que as fontes não confirmam.',
    readTime: '9 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Private Mind',
    targetKeywords: [
      'private mind app análise',
      'private mind ia local',
      'software mansion private mind',
      'app de chat de ia offline iphone android',
      'app react native executorch',
      'app de llm local open source para celular',
      'private mind vs pocketpal ai',
    ],
    current_models_mentioned: ['Qwen 3', 'LLaMA 3.2', 'Qwen 2.5', 'LFM 2.5', 'Gemma 4', 'Bielik'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**O Private Mind (versão 1.3.0 em 3 de outubro de 2026) é um app de chat gratuito, com licença MIT, da Software Mansion que roda modelos de linguagem de peso aberto em iPhone, iPad e Android sem conta e que consegue responder perguntas sobre seus próprios arquivos PDF e de texto usando recuperação no dispositivo, com citação das fontes.** Os modelos são baixados uma vez do Hugging Face e depois rodam offline por meio do React Native ExecuTorch. A versão 1.3.0 acrescentou um botão Web opcional que busca páginas da web, então o app é offline por padrão, mas não é offline quando esse recurso é usado.',
    quickAnswerTop: {
      pt: {
        question: 'O Private Mind roda mesmo totalmente offline e não custa nada?',
        answer:
          'Segundo as fichas e o repositório, sim para os recursos principais: depois que um modelo é baixado, o chat, as perguntas sobre documentos e o ditado rodam no dispositivo, e o app é gratuito e sem conta. A exceção é o botão Web opcional introduzido na versão 1.3.0, que busca páginas na internet; o primeiro download de um modelo também exige conexão.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) e na [App Store](https://apps.apple.com/pl/app/private-mind/id6746713439); código-fonte no [GitHub](https://github.com/software-mansion-labs/private-mind) sob a licença MIT.',
          'Os modelos (cerca de 0,65 a 4 GB cada, segundo o catálogo do repositório) são baixados do Hugging Face no primeiro uso e depois rodam no dispositivo.',
          'Perguntas e respostas sobre documentos no dispositivo com citações clicáveis, ditado com Whisper, modelos com suporte a visão e benchmarks integrados.',
          'Conforme consultado em 3 de outubro de 2026: versão 1.3.0, mais de 5 mil downloads no Google Play e 385 estrelas no GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Private Mind?', anchor: 'what-is-private-mind' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Quais modelos ele oferece?', anchor: 'models-supported' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e busca na web', anchor: 'privacy' },
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
            text: 'O Private Mind é um app gratuito, com licença MIT, da Software Mansion para iPhone, iPad e Android que roda modelos de linguagem de peso aberto no dispositivo, responde perguntas sobre seus próprios documentos e oferece uma busca na web opcional, adicionada na versão 1.3.0.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app, baixa um modelo uma vez e depois conversa com ele sem conta nem conexão com a internet; também pode dar PDFs e arquivos de texto para questionar, e somente o botão Web opcional envia solicitações à internet.',
          },
        ],
        items: [
          'Desenvolvedora: [Software Mansion](https://swmansion.com) (Software Mansion S.A. no Google Play), que se descreve como uma agência de software desde 2012 e contribuidora central do React Native; o app fica na organização [software-mansion-labs](https://github.com/software-mansion-labs) no GitHub.',
          'Preço e licença: gratuito e sem conta; código-fonte sob a licença MIT, com um aviso incluído para os componentes do ExecuTorch licenciados sob BSD-3-Clause.',
          'Modelos: 15 entradas no catálogo do repositório, entre Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4 e um modelo em polonês, incluindo opções com suporte a visão.',
          'Plataformas: iPhone e iPad (iOS e iPadOS 17.0 ou posterior), Macs com Apple M1 ou posterior pela ficha da App Store e Android pelo Google Play.',
          'Sinais das lojas conforme consultados em 3 de outubro de 2026: versão 1.3.0, mais de 5 mil downloads no Google Play, 385 estrelas no GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia nas fichas da App Store e do Google Play e no repositório público do GitHub (README, licença, releases, catálogo de modelos e as notas de versão e o documento de problemas conhecidos do próprio projeto), consultados em 3 de outubro de 2026. A PromptQuorum não testou nem fez benchmarks do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-private-mind',
        title: 'O que é o Private Mind?',
        content: [
          '**O Private Mind é um app de chat para celular que roda modelos de linguagem de peso aberto localmente, em vez de chamar um serviço na nuvem.** Segundo o [README](https://github.com/software-mansion-labs/private-mind), todas as conversas acontecem no dispositivo, não há cadastro nem assinatura, e os modelos não vêm incluídos: eles são baixados do Hugging Face no primeiro uso, então a primeira execução precisa de conexão com a rede.',
          'Por baixo dos panos, ele usa o React Native ExecuTorch, uma biblioteca de código aberto separada, da mesma empresa, que envolve o runtime de inferência ExecuTorch para apps React Native. O app, a biblioteca e o runtime são três projetos diferentes: o Private Mind é o app pronto analisado aqui, o React Native ExecuTorch é a biblioteca sobre a qual ele é construído, e o ExecuTorch é o runtime mantido no ecossistema do PyTorch.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Private Mind é distribuído pelas duas lojas de apps e como código-fonte; os três links abaixo são os que o README do projeto lista.**',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Onde obter': '[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) (iOS e iPadOS 17.0 ou posterior)',
          },
          {
            'Plataforma': 'Mac (Apple M1+)',
            'Onde obter': 'Mesma ficha da App Store (exibida como disponibilidade para Mac)',
          },
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': '[GitHub](https://github.com/software-mansion-labs/private-mind) (MIT)',
          },
        ],
        note: 'Versão atual conforme verificada em 3 de outubro de 2026: 1.3.0, publicada na [página de releases](https://github.com/software-mansion-labs/private-mind/releases) do projeto em 17 de setembro de 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**A configuração segue a ordem descrita no README e nas fichas das lojas; a PromptQuorum não executou esses passos.**',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Baixe o Private Mind na App Store ou no Google Play; segundo as fichas, não é necessário conta nem cadastro.',
          },
          {
            title: 'Baixar um modelo no Wi-Fi',
            whyItMatters: 'Os modelos são baixados do Hugging Face no primeiro uso e têm cerca de 1 a 3 GB cada, segundo a ficha do Play, então use Wi-Fi. A lista dentro do app marca quais modelos cabem no seu dispositivo, segundo o README.',
          },
          {
            title: 'Executar o benchmark integrado',
            whyItMatters: 'A ficha do Play sugere o benchmark caso você não saiba qual modelo o seu celular aguenta; ele mede velocidade e memória no seu próprio hardware.',
          },
          {
            title: 'Conversar ou anexar um documento',
            whyItMatters: 'Inicie uma conversa ou anexe um arquivo PDF, TXT, Markdown, HTML ou CSV e pergunte sobre ele; as respostas apontam de volta para os trechos usados.',
          },
          {
            title: 'Ativar o Web, se quiser',
            whyItMatters: 'A versão 1.3.0 acrescentou um botão Web que traz informações atuais para a conversa. Deixe-o desligado para manter uma conversa totalmente offline.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quais modelos ele oferece?',
        itemHeadings: true,
        columns: ['Família do modelo', 'Entradas e tamanhos', 'Observações'],
        rows: [
          {
            'Família do modelo': 'Qwen 3',
            'Entradas e tamanhos': '0.6B e 1.7B (cerca de 0,9 a 2,2 GB)',
            'Observações': 'Marcado com raciocínio no catálogo',
          },
          {
            'Família do modelo': 'LLaMA 3.2',
            'Entradas e tamanhos': '1B e 3B, variantes QLoRA e SpinQuant (cerca de 1,1 a 2,7 GB)',
            'Observações': 'Marcado como bom em programação',
          },
          {
            'Família do modelo': 'Qwen 2.5',
            'Entradas e tamanhos': '0.5B, 1.5B e 3B (cerca de 0,8 a 2,9 GB)',
            'Observações': 'Opções pequena, equilibrada e potente',
          },
          {
            'Família do modelo': 'LFM 2.5',
            'Entradas e tamanhos': '1.2B de texto, mais modelos de visão de 1.6B e 450M',
            'Observações': 'As duas entradas VL aceitam imagens',
          },
          {
            'Família do modelo': 'Gemma 4',
            'Entradas e tamanhos': '2B de texto e 2B de visão, tamanhos variam por plataforma',
            'Observações': 'Texto cerca de 2,5 a 2,9 GB, visão cerca de 3 a 4 GB',
          },
          {
            'Família do modelo': 'Bielik v3.0',
            'Entradas e tamanhos': 'Cerca de 0,9 GB',
            'Observações': 'Modelo em polonês',
          },
        ],
        note: 'Tamanhos e entradas vêm do arquivo de catálogo de modelos do repositório em 3 de outubro de 2026 e vão mudar conforme o catálogo for atualizado. A ficha do Play também diz que é possível importar seus próprios modelos; quais formatos de arquivo isso aceita não foi informado nas fontes lidas.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm do README do projeto, das notas de versão dentro do repositório ou das fichas das lojas; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Perguntas e respostas sobre documentos.** Anexe um arquivo PDF, TXT, Markdown, HTML ou CSV; a recuperação e os embeddings rodam no dispositivo e as respostas apontam para os trechos de origem (a ficha do Play cita PDF e TXT).',
          '**Imagens e voz.** Envie uma foto a um modelo com suporte a visão ou dite com a transcrição de fala para texto do Whisper feita no dispositivo.',
          '**Benchmarks integrados.** Compare modelos em velocidade e memória no seu próprio hardware antes de se decidir por um.',
          '**Ferramentas de conversa.** Crie uma ramificação da conversa a partir de qualquer mensagem, salve prompts de sistema como predefinições reutilizáveis, pesquise conversas e exporte-as.',
          '**Model Hub.** Modelos abertos selecionados e agrupados por família, além da importação dos seus próprios modelos.',
          '**Botão Web (versão 1.3.0).** Traz informações atuais para a conversa, mostra as páginas usadas em uma resposta e, segundo as notas de versão, busca e lê essas páginas no dispositivo.',
        ],
        note: 'As listas de recursos diferem um pouco entre o README, a descrição do Play e a descrição da App Store (por exemplo, a busca na web aparece no texto da App Store e nas notas de versão, mas não no README); a build atual do app é a autoridade final.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e busca na web',
        content: [
          '**O uso principal é offline por projeto: o README diz que as conversas ficam no dispositivo, e a ficha do Play diz que não há telemetria.** O rótulo de privacidade da App Store informa que a desenvolvedora não coleta nenhum dado, e a seção Segurança dos dados do Play declara "No data collected" e criptografia em trânsito.',
          'A seção Segurança dos dados do Play também lista "App activity" entre os tipos de dados que o app pode compartilhar com terceiros. As fontes não dizem a que isso se refere, e a busca na web opcional do app é o recurso de rede mais óbvio, então trate a afirmação de "offline" como válida para conversas com o Web desligado. O próprio [documento de problemas conhecidos](https://github.com/software-mansion-labs/private-mind/blob/main/docs/KNOWN_ISSUES.md) do projeto descreve a busca na web como um scraper que busca páginas, e o repositório obtém ícones de sites pelo serviço de ícones do DuckDuckGo. Qual serviço de busca recebe a sua consulta não foi identificado nas fontes lidas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O código-fonte é público, então essas afirmações podem ser conferidas por quem compilar o app, mas a PromptQuorum não auditou o código nem o tráfego de rede. Quem lida com dados confidenciais deve verificar o comportamento com o Web desligado e ligado.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'Na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Gratuito e open source',
            'Na prática': 'Sem conta nem assinatura, e o código com licença MIT pode ser lido e compilado.',
            'Limitação / ressalva': 'Publicado na organização de laboratório da empresa no GitHub; as fontes não indicam compromissos de suporte.',
          },
          {
            'Benefício': 'Documentos no dispositivo',
            'Na prática': 'Faça perguntas sobre seus próprios arquivos, com trechos de origem clicáveis.',
            'Limitação / ressalva': 'A qualidade depende do modelo pequeno que você carregar.',
          },
          {
            'Benefício': 'Benchmarks integrados',
            'Na prática': 'Você vê velocidade e memória no seu celular antes de escolher um modelo.',
            'Limitação / ressalva': 'Os resultados valem só para o seu dispositivo, e as fontes não trazem números publicados.',
          },
          {
            'Benefício': 'Ambas as plataformas móveis',
            'Na prática': 'O mesmo app está no iPhone, no iPad, no Android e em Macs com chip Apple.',
            'Limitação / ressalva': 'Os modelos se limitam ao que o catálogo e o recurso de importação suportam.',
          },
          {
            'Benefício': 'Busca na web opcional',
            'Na prática': 'As respostas podem usar páginas atuais, com as páginas exibidas.',
            'Limitação / ressalva': 'Fica online, e o documento de problemas conhecidos relata resultados vazios em páginas com muito JavaScript e 30 a 40 segundos até o primeiro token com a busca na web ligada.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Quem quer um app de chat offline gratuito e auditável no celular.** A licença MIT e o repositório público o tornam verificável de um modo que apps fechados não são.',
          '**Quem quer questionar seus próprios PDFs e anotações com privacidade.** A recuperação no dispositivo com citações é um dos recursos principais.',
          '**Usuários que estão decidindo qual modelo o celular consegue rodar.** O benchmark integrado e os marcadores de compatibilidade dentro do app foram feitos para isso.',
          '**Desenvolvedores curiosos sobre o React Native ExecuTorch.** O app é um exemplo funcional criado pelos mantenedores da biblioteca.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria e qualidade das respostas não foram avaliados.',
          '**A que se refere o compartilhamento de "App activity".** A seção Segurança dos dados do Play o lista ao lado de "No data collected"; as fontes não o explicam.',
          '**Qual serviço de busca o botão Web usa.** As fontes lidas não o nomeiam.',
          '**Requisitos de versão do Android e número da build no Play.** O texto do Play lido não mostra uma versão mínima do Android nem um número de versão; a versão 1.3.0 vem da ficha da App Store e dos releases do GitHub.',
          '**Site do produto.** O site do projeto, privatemind.swmansion.com, só carrega com JavaScript, então seu conteúdo não pôde ser lido; os fatos aqui vêm do README e das fichas das lojas.',
          '**Não é para quem precisa de modelos muito grandes.** O catálogo chega no máximo a modelos de cerca de 4 GB, então trabalhos mais pesados pertencem a um computador.',
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
            'App': '[MLC Chat](/pt/power-local-llm/mlc-chat-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Gratuito / Apache 2.0',
            'Principal diferença': 'Chat open source no dispositivo, construído sobre o motor MLC LLM',
          },
          {
            'App': '[Maid](/pt/power-local-llm/maid-review)',
            'Plataformas': 'Android, iOS',
            'Preço / licença': 'Gratuito / MIT',
            'Principal diferença': 'App de chat open source para modelos GGUF locais ou provedores remotos',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais de cada app na própria ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Private Mind é gratuito?',
            a: 'Sim. As duas fichas das lojas e o README o descrevem como gratuito, sem conta nem assinatura, e o código-fonte está sob a licença MIT. Confira nas lojas se algo mudou depois de 3 de outubro de 2026.',
          },
          {
            q: 'Quem faz o Private Mind?',
            a: 'A Software Mansion, empresa polonesa de software listada como Software Mansion S.A. no Google Play. O código do app está na organização software-mansion-labs da empresa no GitHub.',
          },
          {
            q: 'Ele funciona offline?',
            a: 'O chat principal, as perguntas sobre documentos e o ditado rodam no dispositivo depois que um modelo é baixado. O primeiro download de um modelo e o botão Web opcional precisam de conexão com a internet.',
          },
          {
            q: 'Quais modelos ele consegue rodar?',
            a: 'O catálogo do repositório lista 15 entradas, entre Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4 e um modelo em polonês, incluindo dois modelos de visão LFM e um Gemma. Seus próprios modelos podem ser importados, mas os formatos aceitos não foram informados.',
          },
          {
            q: 'Posso fazer perguntas sobre os meus próprios arquivos?',
            a: 'Sim. Anexe um arquivo PDF, TXT, Markdown, HTML ou CSV; a recuperação roda no dispositivo e cada resposta aponta para os trechos que usou.',
          },
          {
            q: 'O que faz o botão Web?',
            a: 'Introduzido na versão 1.3.0, ele traz informações atuais da web para a conversa e mostra as páginas usadas. Ele fica online, ao contrário do resto do app, e o documento de problemas conhecidos do projeto lista fraquezas como resultados vazios em páginas com muito JavaScript.',
          },
          {
            q: 'Ele roda em Mac ou só em celulares?',
            a: 'A ficha da App Store mostra disponibilidade para iPhone, iPad e Macs com Apple M1 ou posterior. As fontes lidas não indicam uma versão nativa separada para desktop.',
          },
          {
            q: 'De quanta memória eu preciso?',
            a: 'A ficha do Play recomenda um celular moderno com 4 GB ou mais de RAM para modelos maiores. O benchmark integrado e os marcadores de compatibilidade dentro do app mostram o que o seu celular consegue rodar.',
          },
          {
            q: 'Ele é o mesmo que o React Native ExecuTorch?',
            a: 'Não. O React Native ExecuTorch é a biblioteca de código aberto sobre a qual o app é construído; o Private Mind é o app de chat pronto. Ambos vêm da Software Mansion.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Private Mind é uma opção open source entre os apps de chat móveis offline: é gratuito, tem licença MIT, está disponível em iPhone, iPad, Android e Macs com chip Apple e é feito por uma empresa que mantém a biblioteca sobre a qual ele roda. Suas perguntas e respostas sobre documentos no dispositivo com citações, o ditado com Whisper, os modelos de visão e os benchmarks integrados vão além do chat simples, e o repositório público significa que suas afirmações de privacidade podem, em princípio, ser conferidas. Em contrapartida, seu catálogo de modelos se limita a modelos pequenos, de cerca de 0,65 a 4 GB, o repositório foi criado em maio de 2025, o botão Web opcional é a única parte que fica online, e a redação de "App activity" na seção Segurança dos dados do Play não é explicada nas fontes. Ele serve a leitores que querem um app para celular auditável, gratuito e offline em primeiro lugar; quem prefere outra opção open source pode comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Private Mind na App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) — preço, versão, requisitos de plataforma, rótulo de privacidade e descrição, consultados em 3 de outubro de 2026.',
          '[Private Mind no Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) — descrição, desenvolvedora, número de downloads, seção Segurança dos dados e data da última atualização, consultados em 3 de outubro de 2026.',
          '[private-mind no GitHub](https://github.com/software-mansion-labs/private-mind) — README, arquivo de licença MIT, releases, catálogo de modelos, notas de versão dentro do repositório e documento de problemas conhecidos.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat open source gratuito no dispositivo para iOS e Android.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app de IA open source no dispositivo do Google.',
          '[Análise do MLC Chat](/pt/power-local-llm/mlc-chat-review) — um app de chat open source no dispositivo construído sobre o MLC LLM.',
          '[Análise do Maid](/pt/power-local-llm/maid-review) — um app open source para modelos GGUF locais ou provedores remotos.',
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
    heroImage: '/images/private-mind-review-hero-ar.webp',
    title: 'مراجعة Private Mind: تطبيق دردشة ذكاء اصطناعي مفتوح المصدر يعمل دون اتصال لـ iPhone وأندرويد',
    seoTitle: 'مراجعة Private Mind: دردشة ذكاء اصطناعي مفتوحة المصدر',
    intro:
      'Private Mind تطبيق دردشة مجاني ومفتوح المصدر من [Software Mansion](https://swmansion.com)، وهي شركة برمجيات بولندية، يشغّل نماذج لغوية مفتوحة الأوزان على iPhone أو iPad أو هاتف أندرويد عبر مكتبة React Native ExecuTorch. وإلى جانب الدردشة يقدّم أسئلة وأجوبة على المستندات على الجهاز مع الاستشهاد بالمصادر، والإملاء الصوتي بواسطة Whisper، ونماذج تدعم الرؤية، واختبارات سرعة مدمجة، ومنذ الإصدار 1.3.0 مفتاح Web اختيارياً يجلب صفحات من الإنترنت. ونشر كوده المصدري بترخيص MIT على [GitHub](https://github.com/software-mansion-labs/private-mind). تستند هذه المراجعة إلى صفحتي التطبيق في App Store و Google Play وإلى المستودع العام، جرى التحقق منها في 3 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عملياً.',
    metaDescription:
      'مراجعة Private Mind: تطبيق دردشة مجاني بترخيص MIT دون اتصال لـ iPhone وأندرويد مع أسئلة على المستندات داخل الجهاز. النماذج والخصوصية والبحث على الويب.',
    twitterDescription:
      'مراجعة Private Mind: تطبيق Software Mansion المجاني ومفتوح المصدر (MIT) للدردشة دون اتصال على iPhone وأندرويد — أسئلة على المستندات، واختبارات سرعة، ونماذج رؤية، وبحث ويب اختياري هو الجزء الوحيد الذي يتصل بالإنترنت.',
    audience:
      'مستخدمو iPhone و iPad وأندرويد الذين يريدون تطبيق دردشة مجانياً ومفتوح المصدر يشغّل النماذج اللغوية على الجهاز، ويحتاجون إلى معرفة بدقة ما يبقى دون اتصال، وما النماذج التي يقدّمها، وما الذي لا تؤكده المصادر.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Private Mind',
    targetKeywords: [
      'مراجعة تطبيق private mind',
      'private mind ذكاء اصطناعي محلي',
      'software mansion private mind',
      'تطبيق دردشة ذكاء اصطناعي دون اتصال iphone أندرويد',
      'تطبيق react native executorch',
      'تطبيق نموذج لغوي محلي مفتوح المصدر للهاتف',
      'private mind مقابل pocketpal ai',
    ],
    current_models_mentioned: ['Qwen 3', 'LLaMA 3.2', 'Qwen 2.5', 'LFM 2.5', 'Gemma 4', 'Bielik'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**Private Mind (الإصدار 1.3.0 اعتباراً من 3 أكتوبر 2026) تطبيق دردشة مجاني بترخيص MIT من Software Mansion يشغّل نماذج لغوية مفتوحة الأوزان على iPhone و iPad وأندرويد دون حساب، ويمكنه الإجابة عن أسئلة حول ملفات PDF والملفات النصية الخاصة بك باستخدام استرجاع على الجهاز مع الاستشهاد بالمصادر.** تُنزَّل النماذج مرة واحدة من Hugging Face ثم تعمل دون اتصال عبر React Native ExecuTorch. وأضاف الإصدار 1.3.0 مفتاح Web اختيارياً يجلب صفحات الويب، لذا فالتطبيق يعمل دون اتصال افتراضياً لكنه لا يعمل دون اتصال عند استخدام هذه الميزة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Private Mind فعلاً دون اتصال بالكامل وبلا أي تكلفة؟',
        answer:
          'بحسب صفحتيه ومستودعه، نعم بالنسبة للميزات الأساسية: فبعد تنزيل النموذج تعمل الدردشة والأسئلة والأجوبة على المستندات والإملاء على الجهاز، والتطبيق مجاني دون حساب. والاستثناء هو مفتاح Web الاختياري الذي أُدخل في الإصدار 1.3.0 ويجلب صفحات من الإنترنت؛ كما يحتاج تنزيل النموذج الأول إلى اتصال.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) و[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439)؛ والكود المصدري على [GitHub](https://github.com/software-mansion-labs/private-mind) بترخيص MIT.',
          'تُنزَّل النماذج (نحو 0.65 إلى 4 جيجابايت لكل منها بحسب كتالوج المستودع) من Hugging Face عند أول استخدام، ثم تعمل على الجهاز.',
          'أسئلة وأجوبة على المستندات داخل الجهاز مع استشهادات قابلة للنقر، وإملاء Whisper، ونماذج تدعم الرؤية، واختبارات سرعة مدمجة.',
          'بحسب ما جرى التحقق منه في 3 أكتوبر 2026: الإصدار 1.3.0، وأكثر من 5 آلاف تنزيل على Google Play، و385 نجمة على GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Private Mind؟', anchor: 'what-is-private-mind' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'ما النماذج التي يقدّمها؟', anchor: 'models-supported' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية والبحث على الويب', anchor: 'privacy' },
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
            text: 'Private Mind تطبيق مجاني بترخيص MIT لأجهزة iPhone و iPad وأندرويد من Software Mansion، يشغّل نماذج لغوية مفتوحة الأوزان على الجهاز ويجيب عن أسئلة حول مستنداتك الخاصة، ويقدّم بحثاً اختيارياً على الويب أُضيف في الإصدار 1.3.0.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته وتنزّل نموذجاً مرة واحدة ثم تدردش معه دون حساب ودون اتصال بالإنترنت؛ ويمكنك أيضاً تزويده بملفات PDF وملفات نصية لتسأل عنها، ولا يرسل طلبات إلى الإنترنت سوى مفتاح Web الاختياري.',
          },
        ],
        items: [
          'المطوّر: [Software Mansion](https://swmansion.com) (باسم Software Mansion S.A. على Google Play)، وتصف نفسها بأنها وكالة برمجيات منذ 2012 ومساهم أساسي في React Native؛ والتطبيق ضمن منظمتها [software-mansion-labs](https://github.com/software-mansion-labs) على GitHub.',
          'السعر والترخيص: مجاني دون حساب؛ والكود المصدري بترخيص MIT، مع إشعار مرفق لمكوّنات ExecuTorch المرخّصة بترخيص BSD-3-Clause.',
          'النماذج: 15 إدخالاً في كتالوج المستودع ضمن Qwen 3 و LLaMA 3.2 و Qwen 2.5 و LFM 2.5 و Gemma 4 ونموذج بولندي اللغة، بما في ذلك خيارات تدعم الرؤية.',
          'المنصات: iPhone و iPad (iOS و iPadOS 17.0 أو أحدث)، وأجهزة Mac بمعالج Apple M1 أو أحدث عبر صفحة App Store، وأندرويد عبر Google Play.',
          'مؤشرات المتجر بحسب ما جرى التحقق منه في 3 أكتوبر 2026: الإصدار 1.3.0، وأكثر من 5 آلاف تنزيل على Google Play، و385 نجمة على GitHub.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحتي App Store و Google Play وإلى مستودع GitHub العام (ملف README والترخيص والإصدارات وكتالوج النماذج وملاحظات الإصدار ووثيقة المشكلات المعروفة الخاصة بالمشروع)، جرى التحقق منها في 3 أكتوبر 2026. لم تختبر PromptQuorum التطبيق ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-private-mind',
        title: 'ما هو Private Mind؟',
        content: [
          '**Private Mind تطبيق دردشة للهاتف يشغّل نماذج لغوية مفتوحة الأوزان محلياً بدلاً من الاتصال بخدمة سحابية.** وبحسب [README](https://github.com/software-mansion-labs/private-mind) الخاص به، تجري جميع المحادثات على الجهاز، ولا توجد عمليات تسجيل أو اشتراكات، والنماذج غير مضمَّنة في التطبيق: بل تُنزَّل من Hugging Face عند أول استخدام، لذا يحتاج التشغيل الأول إلى اتصال بالشبكة.',
          'يعتمد التطبيق في الخلفية على React Native ExecuTorch، وهي مكتبة مفتوحة المصدر منفصلة من الشركة نفسها تغلّف بيئة الاستدلال ExecuTorch لتطبيقات React Native. والتطبيق والمكتبة وبيئة التشغيل ثلاثة مشاريع مختلفة: Private Mind هو التطبيق الجاهز موضوع هذه المراجعة، وReact Native ExecuTorch هي المكتبة المبني عليها، وExecuTorch هي بيئة التشغيل التي تُصان ضمن منظومة PyTorch.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُوزَّع Private Mind عبر متجري الهواتف وكذلك ككود مصدري؛ والروابط الثلاثة أدناه هي التي يدرجها README الخاص بالمشروع.**',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'iPhone / iPad',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) (iOS و iPadOS 17.0 أو أحدث)',
          },
          {
            'المنصة': 'Mac (Apple M1+)',
            'مكان الحصول عليه': 'صفحة App Store نفسها (تظهر كتوفّر على Mac)',
          },
          {
            'المنصة': 'أندرويد',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)',
          },
          {
            'المنصة': 'الكود المصدري',
            'مكان الحصول عليه': '[GitHub](https://github.com/software-mansion-labs/private-mind) (MIT)',
          },
        ],
        note: 'الإصدار الحالي بحسب ما جرى التحقق منه في 3 أكتوبر 2026: 1.3.0، نُشر على [صفحة إصدارات](https://github.com/software-mansion-labs/private-mind/releases) المشروع في 17 سبتمبر 2026.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**يتبع الإعداد الترتيب الوارد في README وصفحتي المتجر؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل Private Mind من App Store أو Google Play؛ ولا يلزم حساب أو تسجيل بحسب صفحتي المتجر.',
          },
          {
            title: 'نزّل نموذجاً عبر Wi-Fi',
            whyItMatters: 'تُجلب النماذج من Hugging Face عند أول استخدام ويبلغ حجم كل منها نحو 1 إلى 3 جيجابايت بحسب صفحة Play، لذا استخدم Wi-Fi. وتحدّد القائمة داخل التطبيق النماذج التي تناسب جهازك، بحسب README.',
          },
          {
            title: 'شغّل اختبار السرعة المدمج',
            whyItMatters: 'تقترح صفحة Play تشغيل الاختبار إذا لم تكن متأكداً من النموذج الذي يستطيع هاتفك تشغيله؛ فهو يقيس السرعة والذاكرة على عتادك أنت.',
          },
          {
            title: 'دردش، أو أرفق مستنداً',
            whyItMatters: 'ابدأ محادثة، أو أرفق ملف PDF أو TXT أو Markdown أو HTML أو CSV واسأل عنه؛ وترتبط الإجابات بالمقاطع التي استندت إليها.',
          },
          {
            title: 'فعّل Web عند الرغبة',
            whyItMatters: 'أضاف الإصدار 1.3.0 مفتاح Web يجلب معلومات حديثة إلى المحادثة. اتركه معطّلاً لتبقى المحادثة دون اتصال بالكامل.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'ما النماذج التي يقدّمها؟',
        itemHeadings: true,
        columns: ['عائلة النموذج', 'الإدخالات والأحجام', 'ملاحظات'],
        rows: [
          {
            'عائلة النموذج': 'Qwen 3',
            'الإدخالات والأحجام': '0.6B و1.7B (نحو 0.9 إلى 2.2 جيجابايت)',
            'ملاحظات': 'موسوم بالاستدلال في الكتالوج',
          },
          {
            'عائلة النموذج': 'LLaMA 3.2',
            'الإدخالات والأحجام': '1B و3B، بنسختي QLoRA و SpinQuant (نحو 1.1 إلى 2.7 جيجابايت)',
            'ملاحظات': 'موسوم بأنه جيد في البرمجة',
          },
          {
            'عائلة النموذج': 'Qwen 2.5',
            'الإدخالات والأحجام': '0.5B و1.5B و3B (نحو 0.8 إلى 2.9 جيجابايت)',
            'ملاحظات': 'خيارات صغيرة ومتوازنة وقوية',
          },
          {
            'عائلة النموذج': 'LFM 2.5',
            'الإدخالات والأحجام': '1.2B نصي، ونموذجا رؤية 1.6B و450M',
            'ملاحظات': 'إدخالا VL يقبلان الصور',
          },
          {
            'عائلة النموذج': 'Gemma 4',
            'الإدخالات والأحجام': '2B نصي و2B رؤية، وتختلف الأحجام بحسب المنصة',
            'ملاحظات': 'النصي نحو 2.5 إلى 2.9 جيجابايت، والرؤية نحو 3 إلى 4',
          },
          {
            'عائلة النموذج': 'Bielik v3.0',
            'الإدخالات والأحجام': 'نحو 0.9 جيجابايت',
            'ملاحظات': 'نموذج بولندي اللغة',
          },
        ],
        note: 'الأحجام والإدخالات مأخوذة من ملف كتالوج النماذج في المستودع بتاريخ 3 أكتوبر 2026، وستتغير مع تحديث الكتالوج. وتذكر صفحة Play أيضاً إمكانية استيراد نماذجك الخاصة؛ أما صيغ الملفات التي يقبلها ذلك فلم تُذكر في المصادر التي قُرئت.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل عنصر أدناه مأخوذ من README المشروع أو ملاحظات الإصدار داخل المستودع أو صفحتي المتجر؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**أسئلة وأجوبة على المستندات.** أرفق ملف PDF أو TXT أو Markdown أو HTML أو CSV؛ ويعمل الاسترجاع والتضمينات (embeddings) على الجهاز وترتبط الإجابات بالمقاطع المصدرية (تذكر صفحة Play صيغتي PDF و TXT).',
          '**الصور والصوت.** أرسل صورة إلى نموذج يدعم الرؤية، أو أملِ بصوتك باستخدام تحويل الكلام إلى نص Whisper الذي يُنفَّذ على الجهاز.',
          '**اختبارات سرعة مدمجة.** قارن النماذج من حيث السرعة والذاكرة على عتادك قبل أن تستقر على أحدها.',
          '**أدوات المحادثة.** تفريع محادثة من أي رسالة، وحفظ موجّهات النظام كإعدادات جاهزة قابلة لإعادة الاستخدام، والبحث في المحادثات، وتصدير المحادثات.',
          '**Model Hub.** نماذج مفتوحة منتقاة مجمّعة بحسب العائلة، مع استيراد نماذجك الخاصة.',
          '**مفتاح Web (الإصدار 1.3.0).** يجلب معلومات حديثة إلى المحادثة، ويعرض الصفحات التي استندت إليها الإجابة، ويجلب تلك الصفحات ويقرؤها على الجهاز بحسب ملاحظات الإصدار.',
        ],
        note: 'تختلف قوائم الميزات قليلاً بين README ووصف Play ووصف App Store (فمثلاً يظهر البحث على الويب في نص App Store وملاحظات الإصدار لا في README)؛ والنسخة الحالية من التطبيق هي المرجع الأخير.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والبحث على الويب',
        content: [
          '**الاستخدام الأساسي مصمَّم ليعمل دون اتصال: يذكر README أن المحادثات تبقى على الجهاز، وتذكر صفحة Play أنه لا توجد قياسات عن بُعد (telemetry).** وتنص بطاقة الخصوصية في App Store على أن المطوّر لا يجمع أي بيانات، ويعلن قسم أمان البيانات في Play عبارة "No data collected" وتشفير البيانات أثناء النقل.',
          'ويدرج قسم أمان البيانات في Play أيضاً "App activity" ضمن أنواع البيانات التي قد يشاركها التطبيق مع أطراف ثالثة. ولا تذكر المصادر ما الذي يشير إليه ذلك، وميزة البحث الاختياري على الويب هي ميزة الشبكة الأوضح، لذا تعامل مع ادعاء "دون اتصال" على أنه ينطبق على المحادثات التي يكون فيها Web معطّلاً. وتصف [وثيقة المشكلات المعروفة](https://github.com/software-mansion-labs/private-mind/blob/main/docs/KNOWN_ISSUES.md) الخاصة بالمشروع البحث على الويب بأنه أداة كشط (scraper) تجلب الصفحات، ويجلب المستودع أيقونات المواقع عبر خدمة الأيقونات التابعة لـ DuckDuckGo. أما خدمة البحث التي تتلقى استعلامك فلم تُحدَّد من المصادر التي قُرئت.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الكود المصدري عام، لذا يمكن لأي شخص يبني التطبيق التحقق من هذه الادعاءات، لكن PromptQuorum لم تدقق الكود ولا حركة الشبكة. وعلى من يتعامل مع بيانات سرية أن يتحقق من السلوك مع تعطيل Web وتفعيله.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: ['الميزة', 'المعنى في الاستخدام', 'القيد / التحفّظ'],
        rows: [
          {
            'الميزة': 'مجاني ومفتوح المصدر',
            'المعنى في الاستخدام': 'دون حساب أو اشتراك، ويمكن قراءة الكود المرخّص بترخيص MIT وبناؤه.',
            'القيد / التحفّظ': 'منشور في منظمة labs التابعة للشركة على GitHub؛ ولا تذكر المصادر أي التزامات دعم.',
          },
          {
            'الميزة': 'المستندات على الجهاز',
            'المعنى في الاستخدام': 'اسأل عن ملفاتك الخاصة مع مقاطع مصدرية قابلة للنقر.',
            'القيد / التحفّظ': 'تعتمد الجودة على النموذج الصغير الذي تحمّله.',
          },
          {
            'الميزة': 'اختبارات سرعة مدمجة',
            'المعنى في الاستخدام': 'ترى السرعة والذاكرة على هاتفك قبل أن تستقر على نموذج.',
            'القيد / التحفّظ': 'النتائج لجهازك وحده، ولا توجد أرقام منشورة في المصادر.',
          },
          {
            'الميزة': 'منصتان للهواتف',
            'المعنى في الاستخدام': 'التطبيق نفسه على iPhone و iPad وأندرويد وأجهزة Mac بمعالج Apple.',
            'القيد / التحفّظ': 'النماذج محصورة فيما يدعمه كتالوجه وميزة الاستيراد.',
          },
          {
            'الميزة': 'بحث اختياري على الويب',
            'المعنى في الاستخدام': 'يمكن للإجابات استخدام صفحات حديثة مع عرض الصفحات.',
            'القيد / التحفّظ': 'يتصل بالإنترنت، وتفيد وثيقة المشكلات المعروفة بنتائج فارغة من الصفحات الثقيلة بـ JavaScript وبزمن 30 إلى 40 ثانية حتى أول رمز مع تفعيل البحث على الويب.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يريدون تطبيق دردشة مجانياً وقابلاً للتدقيق يعمل دون اتصال على الهاتف.** ترخيص MIT والمستودع العام يجعلانه قابلاً للفحص بطريقة لا تتيحها التطبيقات المغلقة.',
          '**من يريدون طرح أسئلة على ملفات PDF وملاحظاتهم الخاصة بسرية.** الاسترجاع على الجهاز مع الاستشهادات ميزة رئيسية.',
          '**من يقررون أي نموذج يستطيع هاتفهم تشغيله.** صُمّم اختبار السرعة المدمج وعلامات الملاءمة داخل التطبيق لهذا الغرض.',
          '**المطوّرون المهتمون بـ React Native ExecuTorch.** التطبيق مثال عملي بناه القائمون على صيانة المكتبة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم السرعة واستهلاك البطارية وجودة الإجابات.',
          '**ما الذي تشير إليه مشاركة "App activity".** يدرجها قسم أمان البيانات في Play بجانب "No data collected"؛ ولا تشرحها المصادر.',
          '**أي خدمة بحث يستخدمها مفتاح Web.** لا تذكرها المصادر التي قُرئت.',
          '**متطلبات إصدار أندرويد ورقم بناء Play.** لا يُظهر نص Play الذي قُرئ حداً أدنى لإصدار أندرويد ولا رقم إصدار؛ والإصدار 1.3.0 مأخوذ من صفحة App Store وإصدارات GitHub.',
          '**موقع المنتج.** موقع المشروع privatemind.swmansion.com لا يُحمَّل إلا مع JavaScript، لذا تعذّرت قراءة محتواه؛ والحقائق هنا مأخوذة من README وصفحتي المتجر.',
          '**غير مناسب لمن يحتاجون إلى نماذج كبيرة جداً.** يتوقف الكتالوج عند نماذج بحجم نحو 4 جيجابايت، لذا فالأعمال الأثقل مكانها الحاسوب.',
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
            'التطبيق': '[MLC Chat](/ar/power-local-llm/mlc-chat-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر على الجهاز مبنية على محرك MLC LLM',
          },
          {
            'التطبيق': '[Maid](/ar/power-local-llm/maid-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'تطبيق دردشة مفتوح المصدر لنماذج GGUF المحلية أو المزوّدين البعيدين',
          },
        ],
        note: 'تفاصيل المنافسين تتغير كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق من صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Private Mind مجاني؟',
            a: 'نعم. تصفه صفحتا المتجر وREADME بأنه مجاني دون حساب أو اشتراك، والكود المصدري بترخيص MIT. تحقق من المتجرين لمعرفة أي تغيير بعد 3 أكتوبر 2026.',
          },
          {
            q: 'من يصنع Private Mind؟',
            a: 'Software Mansion، وهي شركة برمجيات بولندية تُدرج باسم Software Mansion S.A. على Google Play. وكود التطبيق في منظمة software-mansion-labs التابعة للشركة على GitHub.',
          },
          {
            q: 'هل يعمل دون اتصال؟',
            a: 'تعمل الدردشة الأساسية والأسئلة والأجوبة على المستندات والإملاء على الجهاز بعد تنزيل نموذج. أما تنزيل النموذج الأول ومفتاح Web الاختياري فيحتاجان إلى اتصال بالإنترنت.',
          },
          {
            q: 'ما النماذج التي يستطيع تشغيلها؟',
            a: 'يدرج كتالوج المستودع 15 إدخالاً ضمن Qwen 3 و LLaMA 3.2 و Qwen 2.5 و LFM 2.5 و Gemma 4 ونموذج بولندي اللغة، بينها نموذجا رؤية من LFM ونموذج رؤية من Gemma. ويمكن استيراد نماذجك الخاصة، لكن الصيغ المقبولة لم تُذكر.',
          },
          {
            q: 'هل يمكنني طرح أسئلة حول ملفاتي الخاصة؟',
            a: 'نعم. أرفق ملف PDF أو TXT أو Markdown أو HTML أو CSV؛ يعمل الاسترجاع على الجهاز وترتبط كل إجابة بالمقاطع التي استندت إليها.',
          },
          {
            q: 'ماذا يفعل مفتاح Web؟',
            a: 'أُدخل في الإصدار 1.3.0، وهو يجلب معلومات حديثة من الويب إلى المحادثة ويعرض الصفحات المستخدمة. وهو يتصل بالإنترنت خلافاً لبقية التطبيق، وتدرج وثيقة المشكلات المعروفة الخاصة بالمشروع جوانب ضعف مثل النتائج الفارغة من الصفحات الثقيلة بـ JavaScript.',
          },
          {
            q: 'هل يعمل على Mac أم على الهواتف فقط؟',
            a: 'تُظهر صفحة App Store توفّره على iPhone و iPad وأجهزة Mac بمعالج Apple M1 أو أحدث. ولا يوجد في المصادر التي قُرئت إصدار أصلي منفصل لسطح المكتب.',
          },
          {
            q: 'كم أحتاج من الذاكرة؟',
            a: 'توصي صفحة Play بهاتف حديث بذاكرة RAM لا تقل عن 4 جيجابايت للنماذج الأكبر. ويبيّن اختبار السرعة المدمج وعلامات الملاءمة داخل التطبيق ما يستطيع هاتفك تشغيله.',
          },
          {
            q: 'هل هو نفسه React Native ExecuTorch؟',
            a: 'لا. React Native ExecuTorch هي المكتبة مفتوحة المصدر التي بُني عليها التطبيق؛ أما Private Mind فهو تطبيق الدردشة الجاهز. وكلاهما من Software Mansion.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Private Mind خيار مفتوح المصدر بين تطبيقات الدردشة المحمولة التي تعمل دون اتصال: فهو مجاني وبترخيص MIT ومتوفر على iPhone و iPad وأندرويد وأجهزة Mac بمعالج Apple، وتبنيه شركة تصون المكتبة التي يعمل عليها. وتتجاوز أسئلته وأجوبته على المستندات داخل الجهاز مع الاستشهادات، وإملاء Whisper، ونماذج الرؤية، واختبارات السرعة المدمجة، الدردشة البسيطة، ويعني المستودع العام أن ادعاءات الخصوصية فيه قابلة للتحقق من حيث المبدأ. في المقابل، يقتصر كتالوج نماذجه على نماذج صغيرة بحجم نحو 0.65 إلى 4 جيجابايت، وأُنشئ المستودع في مايو 2025، ومفتاح Web الاختياري هو الجزء الوحيد الذي يتصل بالإنترنت، وصياغة "App activity" في قسم أمان البيانات على Play غير موضحة في المصادر. وهو يناسب القراء الذين يريدون تطبيق هاتف قابلاً للتدقيق ومجانياً ويعمل دون اتصال بالدرجة الأولى؛ أما من يفضّلون خياراً مفتوح المصدر آخر فيمكنهم مقارنته بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Private Mind على App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) — السعر والإصدار ومتطلبات المنصة وبطاقة الخصوصية والوصف، جرى التحقق منها في 3 أكتوبر 2026.',
          '[Private Mind على Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) — الوصف والمطوّر وعدد التنزيلات وقسم أمان البيانات وتاريخ آخر تحديث، جرى التحقق منها في 3 أكتوبر 2026.',
          '[private-mind على GitHub](https://github.com/software-mansion-labs/private-mind) — README وملف ترخيص MIT والإصدارات وكتالوج النماذج وملاحظات الإصدار داخل المستودع ووثيقة المشكلات المعروفة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لـ iOS وأندرويد.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق Google مفتوح المصدر للذكاء الاصطناعي على الجهاز.',
          '[مراجعة MLC Chat](/ar/power-local-llm/mlc-chat-review) — تطبيق دردشة مفتوح المصدر على الجهاز مبني على MLC LLM.',
          '[مراجعة Maid](/ar/power-local-llm/maid-review) — تطبيق مفتوح المصدر لنماذج GGUF المحلية أو المزوّدين البعيدين.',
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
    heroImage: '/images/private-mind-review-hero-zh.webp',
    title: 'Private Mind 评测:适用于 iPhone 和 Android 的开源离线 AI 聊天应用',
    seoTitle: 'Private Mind 评测:开源离线 AI 聊天应用',
    intro:
      'Private Mind 是波兰软件公司 [Software Mansion](https://swmansion.com) 推出的一款免费开源聊天应用,通过 React Native ExecuTorch 库,在 iPhone、iPad 或 Android 手机上运行开放权重语言模型。除聊天外,它还提供带来源引用的设备端文档问答、基于 Whisper 的语音听写、支持视觉的模型、内置速度基准测试,并且自 1.3.0 版本起新增了可选的 Web 开关,用于从互联网获取网页。其源代码以 MIT 许可证发布在 [GitHub](https://github.com/software-mansion-labs/private-mind) 上。本评测基于 App Store 和 Google Play 页面信息以及公开代码仓库(核实于 2026 年 10 月 3 日);PromptQuorum 没有对该应用进行实测。',
    metaDescription:
      'Private Mind 评测:免费、MIT 许可的 iPhone 和 Android 离线 AI 聊天应用,支持设备端文档问答。涵盖模型、隐私、网页搜索与局限。',
    twitterDescription:
      'Private Mind 评测:Software Mansion 推出的免费开源(MIT)iPhone 和 Android 离线 AI 聊天应用——文档问答、基准测试、视觉模型,以及唯一需要联网的可选网页搜索。',
    audience:
      '希望使用免费开源聊天应用在设备上运行语言模型的 iPhone、iPad 和 Android 用户,并且需要准确了解哪些功能保持离线、应用提供哪些模型,以及哪些内容来源并未确认。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Private Mind 评测',
    targetKeywords: [
      'private mind 应用评测',
      'private mind 本地 ai',
      'software mansion private mind',
      '离线 ai 聊天应用 iphone android',
      'react native executorch 应用',
      '开源本地大模型手机应用',
      'private mind 与 pocketpal ai 对比',
    ],
    current_models_mentioned: ['Qwen 3', 'LLaMA 3.2', 'Qwen 2.5', 'LFM 2.5', 'Gemma 4', 'Bielik'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**Private Mind(截至 2026 年 10 月 3 日为 1.3.0 版本)是 Software Mansion 推出的一款免费、MIT 许可的聊天应用,无需账号即可在 iPhone、iPad 和 Android 上运行开放权重语言模型,并能通过设备端检索回答关于你自己的 PDF 和文本文件的问题,同时附带来源引用。** 模型只需从 Hugging Face 下载一次,之后即通过 React Native ExecuTorch 离线运行。1.3.0 版本新增了可选的 Web 开关用于获取网页,因此该应用默认离线,但在使用该功能时并非离线。',
    quickAnswerTop: {
      zh: {
        question: 'Private Mind 真的能完全离线运行并且免费吗?',
        answer:
          '根据其应用商店页面和代码仓库,核心功能是这样:模型下载完成后,聊天、文档问答和语音听写均在设备上运行,应用免费且无需账号。例外是 1.3.0 版本引入的可选 Web 开关,它会从互联网获取网页;首次下载模型也需要联网。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) 和 [App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) 免费获取;源代码以 MIT 许可证发布在 [GitHub](https://github.com/software-mansion-labs/private-mind) 上。',
          '模型(据代码仓库的模型目录,每个约 0.65 至 4 GB)首次使用时从 Hugging Face 下载,之后在设备上运行。',
          '设备端文档问答(带可点击引用)、Whisper 语音听写、支持视觉的模型以及内置基准测试。',
          '据 2026 年 10 月 3 日核实:1.3.0 版本,Google Play 下载量 5K+,GitHub 星标 385 个。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Private Mind 是什么?', anchor: 'what-is-private-mind' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '如何开始使用', anchor: 'getting-started' },
      { label: '它提供哪些模型?', anchor: 'models-supported' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '隐私与网页搜索', anchor: 'privacy' },
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
            text: 'Private Mind 是 Software Mansion 推出的一款免费、MIT 许可的 iPhone、iPad 和 Android 应用,可在设备上运行开放权重语言模型、回答关于你自己文档的问题,并提供 1.3.0 版本新增的可选网页搜索。',
          },
          {
            type: 'plain-terms',
            text: '你安装应用、下载一次模型,之后无需账号或网络连接即可与之聊天;你也可以把 PDF 和文本文件交给它提问,只有可选的 Web 开关会向互联网发送请求。',
          },
        ],
        items: [
          '开发者:[Software Mansion](https://swmansion.com)(在 Google Play 上为 Software Mansion S.A.),该公司自称是自 2012 年起的软件开发公司,也是 React Native 的核心贡献者;该应用位于其 [software-mansion-labs](https://github.com/software-mansion-labs) GitHub 组织下。',
          '价格与许可证:免费且无需账号;源代码采用 MIT 许可证,并附带针对 BSD-3-Clause 许可的 ExecuTorch 组件的声明。',
          '模型:代码仓库的模型目录共有 15 个条目,涵盖 Qwen 3、LLaMA 3.2、Qwen 2.5、LFM 2.5、Gemma 4 以及一个波兰语模型,其中包括支持视觉的选项。',
          '平台:iPhone 和 iPad(iOS 和 iPadOS 17.0 或更高版本)、通过 App Store 页面提供的搭载 Apple M1 或更新芯片的 Mac,以及通过 Google Play 提供的 Android。',
          '据 2026 年 10 月 3 日核实的商店信号:1.3.0 版本,Google Play 下载量 5K+,GitHub 星标 385 个。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 App Store 和 Google Play 页面信息以及公开的 GitHub 代码仓库(README、许可证、版本发布、模型目录,以及项目自己的发布说明和已知问题文档),核实于 2026 年 10 月 3 日。PromptQuorum 没有对该应用进行实测或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-private-mind',
        title: 'Private Mind 是什么?',
        content: [
          '**Private Mind 是一款在本地运行开放权重语言模型、而非调用云服务的手机聊天应用。** 根据其 [README](https://github.com/software-mansion-labs/private-mind),所有对话都在设备上进行,无需注册或订阅,模型也不随应用打包:它们在首次使用时从 Hugging Face 下载,因此首次运行需要网络连接。',
          '在底层,它使用 React Native ExecuTorch,这是同一家公司推出的另一个独立开源库,用于为 React Native 应用封装 ExecuTorch 推理运行时。应用、库和运行时是三个不同的项目:Private Mind 是本文评测的成品应用,React Native ExecuTorch 是它所基于的库,而 ExecuTorch 是在 PyTorch 生态系统中维护的运行时。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Private Mind 通过两大手机应用商店和源代码发布;下面三条链接都是项目 README 中列出的。**',
        ],
        columns: ['平台', '获取途径'],
        rows: [
          {
            '平台': 'iPhone / iPad',
            '获取途径': '[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439)(iOS 和 iPadOS 17.0 或更高版本)',
          },
          {
            '平台': 'Mac(Apple M1+)',
            '获取途径': '同一 App Store 页面(显示为 Mac 可用)',
          },
          {
            '平台': 'Android',
            '获取途径': '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)',
          },
          {
            '平台': '源代码',
            '获取途径': '[GitHub](https://github.com/software-mansion-labs/private-mind)(MIT)',
          },
        ],
        note: '据 2026 年 10 月 3 日核实的当前版本:1.3.0,已于 2026 年 9 月 17 日发布在项目的[发布页面](https://github.com/software-mansion-labs/private-mind/releases)。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用',
        content: [
          '**设置顺序遵循 README 和应用商店页面中的描述;PromptQuorum 没有执行过这些步骤。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从 App Store 或 Google Play 下载 Private Mind;根据商店页面,无需账号或注册。',
          },
          {
            title: '在 Wi-Fi 下下载模型',
            whyItMatters: '模型在首次使用时从 Hugging Face 获取,据 Play 页面每个约 1 至 3 GB,因此请使用 Wi-Fi。据 README,应用内列表会标出哪些模型适合你的设备。',
          },
          {
            title: '运行内置基准测试',
            whyItMatters: 'Play 页面建议,如果你不确定手机能运行哪个模型,可以先运行基准测试;它会在你自己的硬件上测量速度和内存。',
          },
          {
            title: '聊天,或附加文档',
            whyItMatters: '开始聊天,或附加 PDF、TXT、Markdown、HTML 或 CSV 文件并就其提问;回答会链接回所引用的段落。',
          },
          {
            title: '可选:开启 Web',
            whyItMatters: '1.3.0 版本新增了 Web 开关,可将最新信息带入聊天。保持关闭即可让聊天完全离线。',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '它提供哪些模型?',
        itemHeadings: true,
        columns: ['模型系列', '条目与大小', '说明'],
        rows: [
          {
            '模型系列': 'Qwen 3',
            '条目与大小': '0.6B 和 1.7B(约 0.9 至 2.2 GB)',
            '说明': '目录中标注为带推理能力',
          },
          {
            '模型系列': 'LLaMA 3.2',
            '条目与大小': '1B 和 3B,含 QLoRA 与 SpinQuant 变体(约 1.1 至 2.7 GB)',
            '说明': '标注为擅长编程',
          },
          {
            '模型系列': 'Qwen 2.5',
            '条目与大小': '0.5B、1.5B 和 3B(约 0.8 至 2.9 GB)',
            '说明': '提供小型、均衡和强力选项',
          },
          {
            '模型系列': 'LFM 2.5',
            '条目与大小': '1.2B 文本模型,另有 1.6B 和 450M 视觉模型',
            '说明': '两个 VL 条目可接受图像',
          },
          {
            '模型系列': 'Gemma 4',
            '条目与大小': '2B 文本和 2B 视觉,大小因平台而异',
            '说明': '文本约 2.5 至 2.9 GB,视觉约 3 至 4 GB',
          },
          {
            '模型系列': 'Bielik v3.0',
            '条目与大小': '约 0.9 GB',
            '说明': '波兰语模型',
          },
        ],
        note: '大小与条目来自 2026 年 10 月 3 日代码仓库的模型目录文件,随目录更新会有变化。Play 页面还说明可以导入你自己的模型;所读来源并未说明其接受哪些文件格式。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**下面每一项都来自项目的 README、仓库内的发布说明或应用商店页面;均未经独立测试。**',
        ],
        items: [
          '**文档问答。** 附加 PDF、TXT、Markdown、HTML 或 CSV 文件;检索和向量嵌入在设备上运行,回答会链接到来源段落(Play 页面提到的是 PDF 和 TXT)。',
          '**图像与语音。** 向支持视觉的模型发送照片,或使用 Whisper 语音转文字在设备上进行听写。',
          '**内置基准测试。** 在选定某个模型之前,先在你自己的硬件上比较各模型的速度和内存。',
          '**对话工具。** 从任意消息处分叉出新聊天、将系统提示词保存为可复用的预设、搜索聊天记录并导出对话。',
          '**模型库(Model Hub)。** 按系列分组的精选开放模型,并可导入你自己的模型。',
          '**Web 开关(1.3.0 版本)。** 将最新信息带入聊天,显示回答所用的网页,并且据发布说明,会在设备上获取并读取这些网页。',
        ],
        note: 'README、Play 描述和 App Store 描述中的功能列表略有差异(例如,网页搜索出现在 App Store 文字和发布说明中,但未出现在 README 中);以应用当前构建版本为准。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网页搜索',
        content: [
          '**核心使用方式在设计上是离线的:README 称对话保留在设备上,Play 页面称没有遥测。** App Store 隐私标签声明开发者不收集任何数据,Play 的“数据安全”部分则声明“未收集任何数据”以及传输中加密。',
          'Play 的“数据安全”部分还在应用可能与第三方共享的数据类型中列出了“应用活动”(App activity)。来源并未说明这指的是什么,而该应用的可选网页搜索显然是联网功能,因此应将“离线”的说法理解为适用于 Web 关闭时的聊天。项目自己的[已知问题文档](https://github.com/software-mansion-labs/private-mind/blob/main/docs/KNOWN_ISSUES.md)将网页搜索描述为一个获取网页的抓取器,并且代码仓库通过 DuckDuckGo 的图标服务获取网站图标。所读来源并未指明你的查询会发送到哪个搜索服务。',
        ],
        callouts: [
          {
            type: 'note',
            text: '源代码是公开的,因此任何构建该应用的人都可以核查这些说法,但 PromptQuorum 没有审计代码或网络流量。处理机密数据的人应分别在 Web 关闭和开启的情况下核实其行为。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡:优点与局限',
        columns: ['优点', '实际使用中的含义', '局限 / 注意事项'],
        rows: [
          {
            '优点': '免费且开源',
            '实际使用中的含义': '无需账号、无需订阅,MIT 许可的代码可供阅读和构建。',
            '局限 / 注意事项': '发布在公司的 labs GitHub 组织下;来源并未说明任何支持承诺。',
          },
          {
            '优点': '文档在设备上处理',
            '实际使用中的含义': '就你自己的文件提问,并附可点击的来源段落。',
            '局限 / 注意事项': '质量取决于你加载的小型模型。',
          },
          {
            '优点': '内置基准测试',
            '实际使用中的含义': '在选定模型之前,可以查看手机上的速度和内存。',
            '局限 / 注意事项': '结果仅适用于你的设备,来源中也没有公布的数据。',
          },
          {
            '优点': '覆盖两大手机平台',
            '实际使用中的含义': '同一款应用可用于 iPhone、iPad、Android 和搭载 Apple 芯片的 Mac。',
            '局限 / 注意事项': '模型仅限于其目录和导入功能所支持的范围。',
          },
          {
            '优点': '可选的网页搜索',
            '实际使用中的含义': '回答可以使用最新网页,并显示所用网页。',
            '局限 / 注意事项': '需要联网;已知问题文档提到 JavaScript 较重的网页会返回空结果,开启网页搜索时首个 token 需 30 至 40 秒。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**希望在手机上使用免费、可审计的离线聊天应用的人。** MIT 许可证和公开的代码仓库使它具备闭源应用所不具备的可核查性。',
          '**希望私密地就自己的 PDF 和笔记提问的人。** 带引用的设备端检索是其主打功能。',
          '**想弄清手机能运行哪个模型的用户。** 内置基准测试和应用内的适配标记正是为此设计的。',
          '**对 React Native ExecuTorch 感兴趣的开发者。** 该应用是由该库的维护者构建的可运行示例。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法验证的内容',
        items: [
          '**实际使用表现。** PromptQuorum 没有运行该应用,因此速度、电池消耗和回答质量均未评估。',
          '**“应用活动”共享指的是什么。** Play 的“数据安全”部分将其与“未收集任何数据”并列列出;来源并未对此作出解释。',
          '**Web 开关使用哪个搜索服务。** 所读来源并未指明。',
          '**Android 版本要求和 Play 构建号。** 所读的 Play 文本没有显示最低 Android 版本或版本号;1.3.0 版本来自 App Store 页面和 GitHub 发布页。',
          '**产品网站。** 项目网站 privatemind.swmansion.com 仅在启用 JavaScript 时才能加载,因此无法读取其内容;本文的事实来自 README 和应用商店页面。',
          '**不适合需要超大模型的用户。** 其目录中的模型最大约为 4 GB,因此更重的工作应放在电脑上进行。',
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
            '应用': '[MLC Chat](/zh/power-local-llm/mlc-chat-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '基于 MLC LLM 引擎构建的开源设备端聊天',
          },
          {
            '应用': '[Maid](/zh/power-local-llm/maid-review)',
            '平台': 'Android、iOS',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '面向本地 GGUF 模型或远程服务商的开源聊天应用',
          },
        ],
        note: '竞品信息经常变化;请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Private Mind 免费吗?',
            a: '是的。两个应用商店页面和 README 都称其免费,无需账号或订阅,源代码采用 MIT 许可证。2026 年 10 月 3 日之后如有变化,请查看应用商店。',
          },
          {
            q: 'Private Mind 是谁开发的?',
            a: 'Software Mansion,一家波兰软件公司,在 Google Play 上列为 Software Mansion S.A.。该应用的代码位于该公司在 GitHub 上的 software-mansion-labs 组织下。',
          },
          {
            q: '它能离线使用吗?',
            a: '模型下载完成后,核心聊天、文档问答和语音听写均在设备上运行。首次下载模型和可选的 Web 开关需要互联网连接。',
          },
          {
            q: '它可以运行哪些模型?',
            a: '代码仓库的目录共列出 15 个条目,涵盖 Qwen 3、LLaMA 3.2、Qwen 2.5、LFM 2.5、Gemma 4 以及一个波兰语模型,其中包括两个 LFM 视觉模型和一个 Gemma 视觉模型。可以导入你自己的模型,但来源未说明接受哪些格式。',
          },
          {
            q: '我可以就自己的文件提问吗?',
            a: '可以。附加 PDF、TXT、Markdown、HTML 或 CSV 文件;检索在设备上运行,每个回答都会链接到所引用的段落。',
          },
          {
            q: 'Web 开关有什么作用?',
            a: '该功能在 1.3.0 版本中引入,可将最新网页信息带入聊天并显示所用网页。与应用的其余部分不同,它需要联网,项目的已知问题文档也列出了一些弱点,例如 JavaScript 较重的网页会返回空结果。',
          },
          {
            q: '它能在 Mac 上运行,还是只能在手机上运行?',
            a: 'App Store 页面显示其可用于 iPhone、iPad 以及搭载 Apple M1 或更新芯片的 Mac。所读来源中没有单独的原生桌面版本。',
          },
          {
            q: '我需要多大内存?',
            a: 'Play 页面建议运行较大模型时使用 4 GB 或更多内存的较新手机。内置基准测试和应用内的适配标记会显示你的手机能运行什么。',
          },
          {
            q: '它和 React Native ExecuTorch 是一回事吗?',
            a: '不是。React Native ExecuTorch 是该应用所基于的开源库;Private Mind 是成品聊天应用。两者都来自 Software Mansion。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Private Mind 是离线手机聊天应用中的一个开源选项:它免费、采用 MIT 许可证,可用于 iPhone、iPad、Android 和搭载 Apple 芯片的 Mac,并由维护其所运行的库的公司开发。它带引用的设备端文档问答、Whisper 语音听写、视觉模型和内置基准测试超出了单纯的聊天,公开的代码仓库也意味着其隐私声明原则上可以被核查。另一方面,它的模型目录仅限于约 0.65 至 4 GB 的小型模型,代码仓库创建于 2025 年 5 月,可选的 Web 开关是唯一需要联网的部分,Play“数据安全”中关于“应用活动”的措辞在来源中也没有得到解释。它适合希望获得可审计、免费、离线优先的手机应用的读者;偏好其他开源选项的读者可以对比 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[App Store 上的 Private Mind](https://apps.apple.com/pl/app/private-mind/id6746713439) — 价格、版本、平台要求、隐私标签和描述,核实于 2026 年 10 月 3 日。',
          '[Google Play 上的 Private Mind](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) — 描述、开发者、下载量、数据安全部分和最近更新日期,核实于 2026 年 10 月 3 日。',
          '[GitHub 上的 private-mind](https://github.com/software-mansion-labs/private-mind) — README、MIT 许可证文件、版本发布、模型目录、仓库内的发布说明和已知问题文档。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google 的开源设备端 AI 应用。',
          '[MLC Chat 评测](/zh/power-local-llm/mlc-chat-review) — 基于 MLC LLM 构建的开源设备端聊天应用。',
          '[Maid 评测](/zh/power-local-llm/maid-review) — 面向本地 GGUF 模型或远程服务商的开源应用。',
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
    heroImage: '/images/private-mind-review-hero-ko.webp',
    title: 'Private Mind 리뷰: iPhone·Android용 오픈 소스 오프라인 AI 채팅 앱',
    seoTitle: 'Private Mind 리뷰: 오픈 소스 오프라인 AI 채팅 앱',
    intro:
      'Private Mind는 폴란드 소프트웨어 회사 [Software Mansion](https://swmansion.com)이 만든 무료 오픈 소스 채팅 앱으로, React Native ExecuTorch 라이브러리를 통해 iPhone, iPad, Android 휴대폰에서 오픈 웨이트 언어 모델을 실행합니다. 채팅 외에도 출처 인용이 달리는 온디바이스 문서 Q&A, Whisper 받아쓰기, 비전 지원 모델, 내장 속도 벤치마크를 제공하며, 버전 1.3.0부터는 인터넷에서 페이지를 가져오는 선택형 Web 토글도 갖추고 있습니다. 소스 코드는 [GitHub](https://github.com/software-mansion-labs/private-mind)에서 MIT 라이선스로 공개되어 있습니다. 이 리뷰는 2026년 10월 3일에 확인한 App Store·Google Play 게재 정보와 공개 저장소를 근거로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Private Mind 리뷰: 온디바이스 문서 Q&A를 갖춘 iPhone·Android용 무료 MIT 라이선스 오프라인 AI 채팅 앱입니다. 제공 모델, 개인정보 처리, 유일하게 온라인으로 연결되는 선택형 웹 검색, 그리고 출처로 확인되지 않은 한계까지 정리했습니다.',
    twitterDescription:
      'Private Mind 리뷰: Software Mansion이 만든 iPhone·Android용 무료 오픈 소스(MIT) 오프라인 AI 채팅 앱. 문서 Q&A, 벤치마크, 비전 모델, 그리고 유일하게 온라인으로 연결되는 선택형 웹 검색을 다룹니다.',
    audience:
      '기기에서 언어 모델을 실행하는 무료 오픈 소스 채팅 앱을 찾는 iPhone, iPad, Android 이용자로, 무엇이 오프라인에 머무는지, 어떤 모델을 제공하는지, 출처가 무엇을 확인해 주지 않는지 정확히 알아야 하는 분들.',
    readTime: '9분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Private Mind 리뷰',
    targetKeywords: [
      'private mind 앱 리뷰',
      'private mind 로컬 ai',
      'software mansion private mind',
      '오프라인 ai 채팅 앱 아이폰 안드로이드',
      'react native executorch 앱',
      '모바일 오픈소스 로컬 llm 앱',
      'private mind pocketpal ai 비교',
    ],
    current_models_mentioned: ['Qwen 3', 'LLaMA 3.2', 'Qwen 2.5', 'LFM 2.5', 'Gemma 4', 'Bielik'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**Private Mind(2026년 10월 3일 기준 버전 1.3.0)는 Software Mansion이 만든 무료 MIT 라이선스 채팅 앱으로, 계정 없이 iPhone, iPad, Android에서 오픈 웨이트 언어 모델을 실행하며, 온디바이스 검색을 통해 이용자의 PDF·텍스트 파일에 대한 질문에 출처 인용과 함께 답할 수 있습니다.** 모델은 Hugging Face에서 한 번 내려받은 뒤 React Native ExecuTorch를 통해 오프라인으로 실행됩니다. 버전 1.3.0에서 웹 페이지를 가져오는 선택형 Web 토글이 추가되었으므로, 이 앱은 기본적으로 오프라인이지만 해당 기능을 사용할 때는 오프라인이 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Private Mind는 정말 완전히 오프라인으로 실행되며 무료입니까?',
        answer:
          '게재 정보와 저장소에 따르면 핵심 기능은 그렇습니다. 모델을 내려받은 뒤에는 채팅, 문서 Q&A, 받아쓰기가 기기에서 실행되고, 앱은 계정 없이 무료입니다. 예외는 버전 1.3.0에서 도입된 선택형 Web 토글로, 인터넷에서 페이지를 가져옵니다. 처음 모델을 내려받을 때도 네트워크 연결이 필요합니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)와 [App Store](https://apps.apple.com/pl/app/private-mind/id6746713439)에서 무료이며, 소스는 [GitHub](https://github.com/software-mansion-labs/private-mind)에서 MIT 라이선스로 공개됨.',
          '모델(저장소 카탈로그 기준 각각 약 0.65~4 GB)은 처음 사용할 때 Hugging Face에서 내려받은 뒤 기기에서 실행됨.',
          '클릭 가능한 인용이 달리는 온디바이스 문서 Q&A, Whisper 받아쓰기, 비전 지원 모델, 내장 벤치마크.',
          '2026년 10월 3일 확인 기준: 버전 1.3.0, Google Play 다운로드 5K+, GitHub 스타 385개.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Private Mind란 무엇인가?', anchor: 'what-is-private-mind' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '어떤 모델을 제공하나요?', anchor: 'models-supported' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '개인정보와 웹 검색', anchor: 'privacy' },
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
            text: 'Private Mind는 Software Mansion이 만든 무료 MIT 라이선스 iPhone, iPad, Android 앱으로, 오픈 웨이트 언어 모델을 기기에서 실행하고, 이용자의 문서에 대한 질문에 답하며, 버전 1.3.0에서 추가된 선택형 웹 검색을 제공합니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 모델을 한 번 내려받으면 계정이나 인터넷 연결 없이 채팅할 수 있습니다. PDF와 텍스트 파일을 넘겨 질문할 수도 있으며, 인터넷으로 요청을 보내는 것은 선택형 Web 토글뿐입니다.',
          },
        ],
        items: [
          '개발자: [Software Mansion](https://swmansion.com)(Google Play 표기는 Software Mansion S.A.)은 2012년부터 활동한 소프트웨어 에이전시이자 React Native 핵심 기여자라고 스스로를 소개하며, 이 앱은 해당 회사의 [software-mansion-labs](https://github.com/software-mansion-labs) GitHub 조직에 있음.',
          '가격과 라이선스: 계정 없이 무료이며, 소스 코드는 MIT 라이선스이고 BSD-3-Clause 라이선스인 ExecuTorch 구성 요소에 대한 고지문이 함께 포함되어 있음.',
          '모델: 저장소 카탈로그에 15개 항목이 있으며 Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4, 폴란드어 모델에 걸쳐 있고 비전 지원 옵션도 포함됨.',
          '플랫폼: iPhone과 iPad(iOS·iPadOS 17.0 이상), App Store 게재 정보 기준 Apple M1 이상 Mac, 그리고 Google Play를 통한 Android.',
          '2026년 10월 3일 확인 기준 스토어 지표: 버전 1.3.0, Google Play 다운로드 5K+, GitHub 스타 385개.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 App Store·Google Play 게재 정보와 공개 GitHub 저장소(README, 라이선스, 릴리스, 모델 카탈로그, 프로젝트 자체의 릴리스 노트와 알려진 문제 문서)를 2026년 10월 3일에 확인한 내용을 근거로 합니다. PromptQuorum은 앱을 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-private-mind',
        title: 'Private Mind란 무엇인가?',
        content: [
          '**Private Mind는 클라우드 서비스를 호출하는 대신 오픈 웨이트 언어 모델을 로컬에서 실행하는 모바일 채팅 앱입니다.** [README](https://github.com/software-mansion-labs/private-mind)에 따르면 모든 대화는 기기에서 이루어지고, 가입이나 구독이 없으며, 모델은 앱에 포함되어 있지 않고 처음 사용할 때 Hugging Face에서 내려받으므로 첫 실행에는 네트워크 연결이 필요합니다.',
          '내부적으로는 같은 회사가 만든 별도의 오픈 소스 라이브러리인 React Native ExecuTorch를 사용하며, 이 라이브러리는 ExecuTorch 추론 런타임을 React Native 앱에서 쓸 수 있게 감싼 것입니다. 앱, 라이브러리, 런타임은 서로 다른 세 프로젝트입니다. Private Mind는 이 리뷰에서 다루는 완성된 앱이고, React Native ExecuTorch는 그 바탕이 되는 라이브러리이며, ExecuTorch는 PyTorch 생태계에서 관리되는 런타임입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**Private Mind는 두 모바일 스토어와 소스 코드로 배포되며, 아래 세 링크는 프로젝트 README에 실려 있는 것입니다.**',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'iPhone / iPad',
            '받는 곳': '[App Store](https://apps.apple.com/pl/app/private-mind/id6746713439) (iOS·iPadOS 17.0 이상)',
          },
          {
            '플랫폼': 'Mac (Apple M1+)',
            '받는 곳': '같은 App Store 게재 정보(Mac 지원으로 표시)',
          },
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.swmansion.privatemind)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub](https://github.com/software-mansion-labs/private-mind) (MIT)',
          },
        ],
        note: '2026년 10월 3일에 확인한 현재 버전은 1.3.0이며, 프로젝트의 [릴리스 페이지](https://github.com/software-mansion-labs/private-mind/releases)에 2026년 9월 17일 게시되었습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**설정은 README와 스토어 게재 정보에 설명된 순서를 따르며, PromptQuorum은 이 단계를 직접 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'App Store 또는 Google Play에서 Private Mind를 내려받습니다. 게재 정보에 따르면 계정이나 가입은 필요하지 않습니다.',
          },
          {
            title: 'Wi-Fi에서 모델 내려받기',
            whyItMatters: '모델은 처음 사용할 때 Hugging Face에서 가져오며, Play 게재 정보 기준 각각 약 1~3 GB이므로 Wi-Fi를 사용하세요. README에 따르면 앱 내 목록에 내 기기에 맞는 모델이 표시됩니다.',
          },
          {
            title: '내장 벤치마크 실행',
            whyItMatters: 'Play 게재 정보는 휴대폰이 어떤 모델을 감당할 수 있을지 확신이 없을 때 벤치마크를 권합니다. 이 벤치마크는 내 하드웨어에서 속도와 메모리를 측정합니다.',
          },
          {
            title: '채팅하거나 문서 첨부',
            whyItMatters: '채팅을 시작하거나 PDF, TXT, Markdown, HTML, CSV 파일을 첨부해 질문하면, 답변이 사용한 구절로 연결되는 링크가 달립니다.',
          },
          {
            title: '필요하면 Web 켜기',
            whyItMatters: '버전 1.3.0에서 최신 정보를 채팅에 가져오는 Web 토글이 추가되었습니다. 채팅을 완전히 오프라인으로 유지하려면 꺼 두세요.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '어떤 모델을 제공하나요?',
        itemHeadings: true,
        columns: ['모델 계열', '항목과 크기', '비고'],
        rows: [
          {
            '모델 계열': 'Qwen 3',
            '항목과 크기': '0.6B, 1.7B (약 0.9~2.2 GB)',
            '비고': '카탈로그에 추론 지원으로 표시',
          },
          {
            '모델 계열': 'LLaMA 3.2',
            '항목과 크기': '1B, 3B, QLoRA·SpinQuant 변형 (약 1.1~2.7 GB)',
            '비고': '코딩에 강하다고 표시',
          },
          {
            '모델 계열': 'Qwen 2.5',
            '항목과 크기': '0.5B, 1.5B, 3B (약 0.8~2.9 GB)',
            '비고': '소형·균형형·고성능 옵션',
          },
          {
            '모델 계열': 'LFM 2.5',
            '항목과 크기': '1.2B 텍스트, 1.6B·450M 비전 모델',
            '비고': 'VL 항목 2개는 이미지 입력 가능',
          },
          {
            '모델 계열': 'Gemma 4',
            '항목과 크기': '2B 텍스트, 2B 비전 (플랫폼별 크기 상이)',
            '비고': '텍스트 약 2.5~2.9 GB, 비전 약 3~4 GB',
          },
          {
            '모델 계열': 'Bielik v3.0',
            '항목과 크기': '약 0.9 GB',
            '비고': '폴란드어 모델',
          },
        ],
        note: '크기와 항목은 2026년 10월 3일 기준 저장소의 모델 카탈로그 파일에서 가져온 것이며 카탈로그가 업데이트되면 바뀔 수 있습니다. Play 게재 정보에는 직접 가져온 모델도 사용할 수 있다고 되어 있으나, 어떤 파일 형식을 받는지는 확인한 출처에 나와 있지 않았습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 프로젝트 README, 저장소의 릴리스 노트 또는 스토어 게재 정보에서 가져온 것이며, 어느 것도 독립적으로 테스트되지 않았습니다.**',
        ],
        items: [
          '**문서 Q&A.** PDF, TXT, Markdown, HTML, CSV 파일을 첨부하면 검색과 임베딩이 기기에서 실행되고 답변이 출처 구절로 연결됩니다(Play 게재 정보에는 PDF와 TXT가 명시되어 있음).',
          '**이미지와 음성.** 비전 지원 모델에 사진을 보내거나, 기기에서 변환되는 Whisper 음성 인식으로 받아쓰기를 할 수 있습니다.',
          '**내장 벤치마크.** 모델을 정하기 전에 내 하드웨어에서 속도와 메모리를 비교해 볼 수 있습니다.',
          '**대화 도구.** 어느 메시지에서든 채팅을 분기하고, 시스템 프롬프트를 재사용 가능한 프리셋으로 저장하고, 채팅을 검색하고, 대화를 내보낼 수 있습니다.',
          '**Model Hub.** 계열별로 묶인 엄선된 오픈 모델과, 직접 가져온 모델 사용 기능.',
          '**Web 토글(버전 1.3.0).** 채팅에 최신 정보를 가져오고, 답변에 사용된 페이지를 보여 주며, 릴리스 노트에 따르면 그 페이지를 기기에서 가져와 읽습니다.',
        ],
        note: 'README, Play 설명, App Store 설명 사이에 기능 목록이 조금씩 다릅니다(예: 웹 검색은 App Store 문구와 릴리스 노트에는 있지만 README에는 없음). 최종 기준은 앱의 현재 빌드입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 웹 검색',
        content: [
          '**핵심 사용은 설계상 오프라인입니다. README는 대화가 기기에 머문다고 하고, Play 게재 정보는 텔레메트리가 없다고 합니다.** App Store 개인정보 라벨은 개발자가 어떤 데이터도 수집하지 않는다고 밝히고, Play 데이터 보안 섹션은 "수집된 데이터 없음"과 전송 중 암호화를 선언합니다.',
          'Play 데이터 보안 섹션에는 앱이 제3자와 공유할 수 있는 데이터 유형으로 "앱 활동"도 나열되어 있습니다. 출처에는 이것이 무엇을 가리키는지 나와 있지 않고, 앱의 선택형 웹 검색이 가장 눈에 띄는 네트워크 기능이므로, "오프라인"이라는 주장은 Web을 끈 채팅에 적용되는 것으로 보아야 합니다. 프로젝트 자체의 [알려진 문제 문서](https://github.com/software-mansion-labs/private-mind/blob/main/docs/KNOWN_ISSUES.md)는 웹 검색을 페이지를 가져오는 스크레이퍼로 설명하며, 저장소는 DuckDuckGo의 아이콘 서비스를 통해 사이트 아이콘을 가져옵니다. 어떤 검색 서비스가 내 질의를 받는지는 확인한 출처에서 밝혀지지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '소스 코드가 공개되어 있으므로 앱을 직접 빌드하는 사람은 이 주장들을 확인할 수 있지만, PromptQuorum은 코드나 네트워크 트래픽을 감사하지 않았습니다. 기밀 데이터를 다루는 경우에는 Web을 끈 상태와 켠 상태 모두에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의사항'],
        rows: [
          {
            '이점': '무료 오픈 소스',
            '실제 사용에서의 의미': '계정도 구독도 없고, MIT 라이선스 코드를 읽고 빌드할 수 있음.',
            '한계 / 유의사항': '회사의 labs GitHub 조직에 게시되어 있으며, 출처에는 지원 약속이 명시되어 있지 않음.',
          },
          {
            '이점': '기기 내 문서 처리',
            '실제 사용에서의 의미': '내 파일에 대해 클릭 가능한 출처 구절과 함께 질문할 수 있음.',
            '한계 / 유의사항': '품질은 불러온 소형 모델에 좌우됨.',
          },
          {
            '이점': '내장 벤치마크',
            '실제 사용에서의 의미': '모델을 정하기 전에 내 휴대폰의 속도와 메모리를 확인할 수 있음.',
            '한계 / 유의사항': '결과는 내 기기에만 해당하며, 출처에는 공개된 수치가 없음.',
          },
          {
            '이점': '두 모바일 플랫폼 지원',
            '실제 사용에서의 의미': '같은 앱이 iPhone, iPad, Android, Apple 실리콘 Mac에서 제공됨.',
            '한계 / 유의사항': '모델은 카탈로그와 가져오기 기능이 지원하는 범위로 제한됨.',
          },
          {
            '이점': '선택형 웹 검색',
            '실제 사용에서의 의미': '답변이 최신 페이지를 활용할 수 있고, 사용한 페이지가 표시됨.',
            '한계 / 유의사항': '온라인으로 연결되며, 알려진 문제 문서에는 JavaScript가 많은 페이지에서 빈 결과가 나오고 웹 검색을 켜면 첫 토큰까지 30~40초가 걸린다고 보고됨.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**휴대폰에서 무료이며 검증 가능한 오프라인 채팅 앱을 원하는 분.** MIT 라이선스와 공개 저장소 덕분에 폐쇄형 앱과 달리 직접 확인해 볼 수 있습니다.',
          '**내 PDF와 메모에 대해 비공개로 질문하고 싶은 분.** 인용이 달리는 온디바이스 검색이 핵심 기능입니다.',
          '**내 휴대폰이 어떤 모델을 실행할 수 있을지 정하려는 분.** 내장 벤치마크와 앱 내 적합 표시가 바로 이를 위해 설계되었습니다.',
          '**React Native ExecuTorch에 관심 있는 개발자.** 이 앱은 라이브러리 관리자들이 만든 실제 작동 예시입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 사용 성능.** PromptQuorum은 앱을 실행하지 않았으므로 속도, 배터리 소모, 답변 품질은 평가하지 않았습니다.',
          '**"앱 활동" 공유가 가리키는 내용.** Play 데이터 보안 섹션은 이를 "수집된 데이터 없음"과 함께 나열하며, 출처는 이를 설명하지 않습니다.',
          '**Web 토글이 어떤 검색 서비스를 사용하는지.** 확인한 출처에는 이름이 나와 있지 않습니다.',
          '**Android 버전 요구 사항과 Play 빌드 번호.** 확인한 Play 텍스트에는 최소 Android 버전이나 버전 번호가 나와 있지 않으며, 버전 1.3.0은 App Store 게재 정보와 GitHub 릴리스에서 가져온 것입니다.',
          '**제품 웹사이트.** privatemind.swmansion.com의 프로젝트 사이트는 JavaScript가 있어야만 로드되어 내용을 읽을 수 없었으므로, 여기의 사실은 README와 스토어 게재 정보에서 가져왔습니다.',
          '**매우 큰 모델이 필요한 분께는 적합하지 않습니다.** 카탈로그는 대략 4 GB 정도의 모델까지이므로 더 무거운 작업은 컴퓨터에서 하는 편이 맞습니다.',
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
            '앱': '[MLC Chat](/ko/power-local-llm/mlc-chat-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'MLC LLM 엔진 기반의 오픈 소스 온디바이스 채팅',
          },
          {
            '앱': '[Maid](/ko/power-local-llm/maid-review)',
            '플랫폼': 'Android, iOS',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '로컬 GGUF 모델 또는 원격 제공업체용 오픈 소스 채팅 앱',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Private Mind는 무료입니까?',
            a: '네. 두 스토어 게재 정보와 README 모두 계정이나 구독 없이 무료라고 설명하며, 소스 코드는 MIT 라이선스입니다. 2026년 10월 3일 이후의 변경 사항은 스토어에서 확인하세요.',
          },
          {
            q: 'Private Mind는 누가 만드나요?',
            a: '폴란드 소프트웨어 회사 Software Mansion이며, Google Play에는 Software Mansion S.A.로 표기되어 있습니다. 앱 코드는 이 회사의 GitHub software-mansion-labs 조직에 있습니다.',
          },
          {
            q: '오프라인에서도 작동하나요?',
            a: '모델을 내려받은 뒤에는 핵심 채팅, 문서 Q&A, 받아쓰기가 기기에서 실행됩니다. 처음 모델을 내려받을 때와 선택형 Web 토글에는 인터넷 연결이 필요합니다.',
          },
          {
            q: '어떤 모델을 실행할 수 있나요?',
            a: '저장소 카탈로그에는 Qwen 3, LLaMA 3.2, Qwen 2.5, LFM 2.5, Gemma 4, 폴란드어 모델에 걸쳐 15개 항목이 있으며, LFM 비전 모델 2개와 Gemma 비전 모델 1개가 포함됩니다. 직접 가져온 모델도 쓸 수 있지만 받는 형식은 명시되어 있지 않았습니다.',
          },
          {
            q: '내 파일에 대해 질문할 수 있나요?',
            a: '네. PDF, TXT, Markdown, HTML, CSV 파일을 첨부하면 검색이 기기에서 실행되고 각 답변이 사용한 구절로 연결됩니다.',
          },
          {
            q: 'Web 토글은 무엇을 하나요?',
            a: '버전 1.3.0에서 도입되었으며, 최신 웹 정보를 채팅에 가져오고 사용한 페이지를 보여 줍니다. 앱의 나머지 기능과 달리 온라인으로 연결되며, 프로젝트의 알려진 문제 문서에는 JavaScript가 많은 페이지에서 빈 결과가 나오는 등의 약점이 나열되어 있습니다.',
          },
          {
            q: 'Mac에서도 실행되나요, 휴대폰에서만 되나요?',
            a: 'App Store 게재 정보에는 iPhone, iPad, Apple M1 이상 Mac에서 제공되는 것으로 표시됩니다. 확인한 출처에는 별도의 네이티브 데스크톱 빌드가 나와 있지 않습니다.',
          },
          {
            q: '메모리는 얼마나 필요한가요?',
            a: 'Play 게재 정보는 더 큰 모델을 위해 RAM 4 GB 이상의 최신 휴대폰을 권장합니다. 내장 벤치마크와 앱 내 적합 표시가 내 휴대폰에서 실행할 수 있는 모델을 보여 줍니다.',
          },
          {
            q: 'React Native ExecuTorch와 같은 것인가요?',
            a: '아닙니다. React Native ExecuTorch는 앱의 바탕이 되는 오픈 소스 라이브러리이고, Private Mind는 완성된 채팅 앱입니다. 둘 다 Software Mansion에서 나왔습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Private Mind는 오프라인 모바일 채팅 앱 가운데 하나인 오픈 소스 선택지입니다. 무료이고 MIT 라이선스이며, iPhone, iPad, Android, Apple 실리콘 Mac에서 제공되고, 자신이 실행되는 기반 라이브러리를 직접 관리하는 회사가 만들었습니다. 인용이 달리는 온디바이스 문서 Q&A, Whisper 받아쓰기, 비전 모델, 내장 벤치마크는 단순한 채팅을 넘어서며, 공개 저장소 덕분에 개인정보 관련 주장도 원칙적으로 확인할 수 있습니다. 반면 모델 카탈로그는 대략 0.65~4 GB의 소형 모델로 제한되고, 저장소는 2025년 5월에 만들어졌으며, 선택형 Web 토글이 온라인으로 연결되는 유일한 부분이고, "앱 활동"에 관한 Play 데이터 보안 문구는 출처에서 설명되지 않습니다. 검증 가능하고 무료이며 오프라인을 우선하는 휴대폰 앱을 원하는 분께 맞고, 다른 오픈 소스 선택지를 선호한다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)를 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Private Mind](https://apps.apple.com/pl/app/private-mind/id6746713439) — 가격, 버전, 플랫폼 요구 사항, 개인정보 라벨, 설명. 2026년 10월 3일 확인.',
          '[Google Play의 Private Mind](https://play.google.com/store/apps/details?id=com.swmansion.privatemind) — 설명, 개발자, 다운로드 수, 데이터 보안 섹션, 최종 업데이트 날짜. 2026년 10월 3일 확인.',
          '[GitHub의 private-mind](https://github.com/software-mansion-labs/private-mind) — README, MIT 라이선스 파일, 릴리스, 모델 카탈로그, 저장소 내 릴리스 노트, 알려진 문제 문서.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS·Android용 무료 오픈 소스 온디바이스 채팅 클라이언트.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 오픈 소스 온디바이스 AI 앱.',
          '[MLC Chat 리뷰](/ko/power-local-llm/mlc-chat-review) — MLC LLM 기반의 오픈 소스 온디바이스 채팅 앱.',
          '[Maid 리뷰](/ko/power-local-llm/maid-review) — 로컬 GGUF 모델 또는 원격 제공업체용 오픈 소스 앱.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 더 폭넓은 Android 종합 정리.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — 더 폭넓은 iPhone 종합 정리.',
        ],
      },
    },
  },
}
