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
        note: 'ExecuTorch-format models are different files from the GGUF models used by llama.cpp-based apps, which is why Private Mind downloads its own prepared models rather than loading any GGUF file.',
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
        note: 'This page is companion material to the app\'s entry in the [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Current version as verified on 3 October 2026: 1.3.0, published on the project\'s [releases page](https://github.com/software-mansion-labs/private-mind/releases) on 17 September 2026.',
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
}
