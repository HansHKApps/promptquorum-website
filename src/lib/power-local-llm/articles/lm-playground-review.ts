// LM Playground Review: Open-Source Offline LLM Chat for Android
// Slug: lm-playground-review
// Companion to: pocketpal-ai-review, private-mind-review, off-grid-ai-review, llm-hub-review,
// best-local-llm-apps-android-2026
// Sources: Google Play listing, official website, privacy policy and the public GitHub repository (README,
// MIT LICENSE, releases, version file), all checked 2026-10-16 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/lm-playground-review-hero-en.webp',
    title: 'LM Playground Review: Open-Source Offline LLM Chat for Android',
    seoTitle: 'LM Playground Review: Free Offline LLM App for Android',
    intro:
      'LM Playground is a free, MIT-licensed Android app by the independent developer [Andriy Druk](https://www.andriydruk.com) that runs open-weight language models in GGUF format directly on the phone through llama.cpp. Beyond chat it offers on-device document Q&A, photo input for vision models, reasoning-model display, optional tools, and voice dictation. This review is based on the [Google Play listing](https://play.google.com/store/apps/details?id=com.druk.lmplayground), the [official website](https://lmplayground.app/), the [privacy policy](https://www.andriydruk.com/privacy-policy-for-lm-playground), and the public [GitHub repository](https://github.com/andriydruk/LMPlayground), checked on 16 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'LM Playground review: a free, MIT-licensed Android app that runs GGUF models offline with document Q&A and vision. Models, privacy, versions, and limits.',
    twitterDescription:
      'LM Playground review: an open-source Android app for offline chat with GGUF models, plus documents, photos, dictation, and open questions.',
    audience:
      'Android users who want a free, open-source chat app that runs language models on the phone, and who need to know which models and features it offers, what stays offline, and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LM Playground review',
    targetKeywords: [
      'lm playground app review',
      'lm playground android',
      'run llm on android offline',
      'llama.cpp android app',
      'open source local llm app android',
      'andriy druk lm playground',
      'gguf models android app',
    ],
    current_models_mentioned: ['Qwen 3.5', 'Gemma 4', 'GPT-OSS', 'Nemotron 3 Nano', 'Granite 4', 'DeepSeek R1 Distill', 'Phi-4 mini', 'LFM2.5', 'Ministral 3', 'Llama 3.2'],
    current_hardware_mentioned: ['Android', 'ARM'],
    leadAnswerBlock:
      '**LM Playground (version 1.10.1 as of 16 October 2026, last updated on Google Play on 8 October 2026) needs no account and is built on llama.cpp, the open-source engine that executes the models on the phone.** Models are downloaded once from Hugging Face and then chat, document questions, photo input, and dictation work offline. Only two things go online by design: model downloads and the optional web search and page-fetch tools, which are off by default.',
    quickAnswerTop: {
      en: {
        question: 'Is LM Playground free, open source, and really offline?',
        answer:
          'Per its listing, website, and repository, yes: the app is free with no ads or purchases shown on Google Play, the code is under the MIT license, and once a model is downloaded, inference runs on the device. The exceptions are the model downloads themselves and the optional web tools.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground), Android only; source on [GitHub](https://github.com/andriydruk/LMPlayground).',
          'Built-in catalog of 40+ models, plus loading of your own GGUF files from any folder.',
          'Document Q&A, vision input, reasoning display, per-model settings, system prompts, and voice dictation.',
          'Store signals as checked on 16 October 2026: 50K+ Google Play downloads, 3.9 stars from 479 ratings, 161 GitHub stars.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is LM Playground?', anchor: 'what-is-lm-playground' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Which Models Does It Offer?', anchor: 'models-supported' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
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
            text: 'LM Playground turns an Android phone into a private place to chat with open-weight models, question your own documents, and show photos to vision-capable models.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from Google Play, download a model once, and then chat without an account or an internet connection; the web tools and model downloads are the only parts that need the network.',
          },
        ],
        items: [
          'Developer: Andriy Druk, an independent Android developer; the project has been public on GitHub since March 2024 and is a one-person project as far as the sources show.',
          'Price and license: free with no account; the source code is under the MIT license.',
          'Models: a built-in catalog (the website says 40+) from Qwen, Gemma, Llama, GPT-OSS, Nemotron, Phi-4, Granite, Mistral, DeepSeek, and Liquid AI, plus your own GGUF files.',
          'Platform: Android only; the sources mention no iPhone, desktop, or web version.',
          'Recency: Google Play shows the last update on 8 October 2026 and GitHub shows release 1.10.1 on 12 October 2026, so both dates are recent.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play listing, the official website, the privacy policy, and the public GitHub repository (README, license, releases, and release notes), checked on 16 October 2026. PromptQuorum has not tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-lm-playground',
        title: 'What Is LM Playground?',
        content: [
          '**LM Playground is an Android chat app that runs language models locally instead of calling a cloud service.** According to its [README](https://github.com/andriydruk/LMPlayground), you download models, load them in one tap, and chat offline; the inference engine is [llama.cpp](https://github.com/ggml-org/llama.cpp) and the models are GGUF files from [Hugging Face](https://huggingface.co/). Models are not bundled, so the first run needs a network connection.',
          'The developer, Andriy Druk, is listed on Google Play under that name and publishes the project in his own GitHub account. The project is unrelated to products with similar names, such as the Playground tools of cloud AI vendors.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**LM Playground is a store app: install it from Google Play, the one channel the project and its website point to.** GitHub is for source code and release notes; the releases page carries no APK file.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) (free; minimum Android version not shown)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[lmplayground.app](https://lmplayground.app/)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Privacy policy for LM Playground](https://www.andriydruk.com/privacy-policy-for-lm-playground)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[GitHub](https://github.com/andriydruk/LMPlayground) (MIT)',
          },
        ],
        note: 'Version and recency as verified on 16 October 2026: the latest GitHub release is 1.10.1, published on 12 October 2026 (the website header still shows 1.10.0). Google Play lists the app as updated on 8 October 2026 but does not show its build number, so the Play build may be older than the newest GitHub release.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**Setup follows the order described in the README and Play listing; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Install LM Playground from Google Play; no account or API key is required according to the listing.',
          },
          {
            title: 'Download a model on Wi-Fi',
            whyItMatters: 'Pick a model from the built-in list or load your own GGUF file. The smallest model is 267 MB, models of 4B to 8B parameters benefit from 8 GB of RAM or more per the Play listing, and downloads resume after interruptions.',
          },
          {
            title: 'Chat, attach a file, or send a photo',
            whyItMatters: 'Start a chat, attach a document and ask about it, or send an image to a vision-capable model. Document search and dictation each download a small helper model once on first use.',
          },
          {
            title: 'Optionally turn on tools',
            whyItMatters: 'Tools are off by default and can be enabled per model in Settings. Leave them off to keep every chat on the device.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Which Models Does It Offer?',
        itemHeadings: true,
        columns: ['Model family', 'Sizes', 'Notes'],
        rows: [
          {
            'Model family': 'Qwen 3.5 / Qwen 3',
            'Sizes': '0.8B, 2B, 4B / 0.6B, 1.7B, 4B',
            'Notes': 'Qwen 3.5 entries accept images',
          },
          {
            'Model family': 'Gemma 4 / Gemma 3n / Gemma 3',
            'Sizes': 'E2B, E4B, 12B / E2B, E4B / 1B, 4B',
            'Notes': 'Vision on Gemma 4 E4B and Gemma 3 4B per the README',
          },
          {
            'Model family': 'GPT-OSS',
            'Sizes': '20B',
            'Notes': 'Needs a high-end phone with plenty of memory per the Play listing',
          },
          {
            'Model family': 'Llama 3.2 / 3.1',
            'Sizes': '1B, 3B / 8B',
            'Notes': 'From Meta',
          },
          {
            'Model family': 'Granite, Nemotron, Phi-4, DeepSeek R1 Distill',
            'Sizes': 'Granite 4.x 3B to 8B; Nemotron 4B; Phi-4 mini 3.8B; R1 Distill 1.5B, 7B',
            'Notes': 'DeepSeek R1 and Nemotron show their thinking steps',
          },
          {
            'Model family': 'LFM2.5, MiniCPM5, SmolLM3, Spark-X2.5, Ministral 3',
            'Sizes': 'LFM2.5 350M to 2.6B; LFM2.5 VL 450M to 3B; Ministral 3 3B, 8B',
            'Notes': 'Ministral 3 and LFM2.5 VL accept images',
          },
        ],
        note: 'Entries come from the repository README on 16 October 2026; most use Q4_K_M quantization, Qwen 3.5 uses Q3_K_M, and GPT-OSS ships in its native MXFP4 format. The Play listing names a shorter list of ten families, and the catalog changes with each release.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the README, the website, the release notes, or the Play listing; none has been independently tested.**',
        ],
        items: [
          '**Document Q&A.** Attach a PDF, Word, EPUB, HTML, Markdown, or plain-text file; on-device semantic search finds the relevant passages and hands them to the model. It downloads a 278 MB embedding model once.',
          '**Vision input.** Attach a gallery photo or take one with the camera and ask a vision-capable model to describe it or read its text.',
          '**Voice dictation.** Added in version 1.10.0: tap the microphone and speak; recognition runs on the phone in 35 languages after a one-time 718 MB speech model download. It appears on the website and in the release notes but not in the Play description.',
          '**Reasoning display.** Thinking steps of models such as DeepSeek R1 and Nemotron appear in a collapsible section with an adjustable thinking budget.',
          '**Control and history.** Per-model settings (context size, temperature, Top-P, Top-K, Min-P, repetition penalty, seed), reusable system prompts, and a searchable chat history with pin, rename, and delete.',
          '**Tools.** Capable models can search the web, fetch a page, and run JavaScript in a sandbox; each tool is off by default.',
          '**Background generation and storage.** Replies keep running when you leave the app, models can live in any folder or on an SD card, and the interface is translated into 28 languages.',
        ],
        note: 'The Play description, the README, and the website list slightly different features (dictation and 28 languages appear on the website only), so the app\'s current build is the final authority.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**Core use is offline by design: the website claims zero network calls at inference, and the Google Play Data safety section declares "No data collected" and "No data shared with third parties."** The [privacy policy](https://www.andriydruk.com/privacy-policy-for-lm-playground) says the developer collects no personal or non-personal information.',
          'That policy took effect on 16 March 2024 and describes Internet access only as the permission that lets the app download models. The web search and page-fetch tools came later; the sources do not say which search service receives a query, so treat those two tools as the part that goes online and keep them off for confidential chats.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The source code is public, so these claims can be checked by anyone who builds the app, but PromptQuorum has not audited the code or the network traffic.',
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
            'Limitation / caveat': 'A single developer maintains it; the sources state no support commitment.',
          },
          {
            'Benefit': 'Bring your own GGUF',
            'What it means in real use': 'Load model files from any folder next to the built-in catalog.',
            'Limitation / caveat': 'Play reviews we read call loading external models hit-and-miss; these are individual user reports.',
          },
          {
            'Benefit': 'Documents, photos, voice',
            'What it means in real use': 'One app covers file questions, image input, and dictation, all on the device.',
            'Limitation / caveat': 'Quality depends on the small model you load, and helper models add downloads.',
          },
          {
            'Benefit': 'Active development',
            'What it means in real use': 'Frequent releases add new models and fixes, such as the 1.10.1 vision-crash fix.',
            'Limitation / caveat': 'Fast change means the Play build, the website, and GitHub can show different versions.',
          },
          {
            'Benefit': 'Optional web tools',
            'What it means in real use': 'Models can look up current pages when you enable the tools.',
            'Limitation / caveat': 'Goes online, and a Play reviewer reported the model looping while "thinking" with web search on.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Android users who want a free, auditable offline chat app.** The MIT license and public repository make it checkable.',
          '**People who want to question their own files privately.** Document Q&A with on-device search is a headline feature.',
          '**Tinkerers who bring their own models.** Custom GGUF loading and per-model sampling controls are built for that.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** PromptQuorum did not run the app, so speed, battery use, and answer quality are not assessed.',
          '**Which build Google Play serves.** The listing shows an update date but no version number or minimum Android version.',
          '**Which search service the web tool uses.** The sources read do not name it.',
          '**Whether the privacy policy covers the web tools.** The policy text predates them and was not found updated.',
          '**Not for iPhone, Mac, or Windows users.** The sources describe an Android-only app.',
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
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source chat on ExecuTorch with document Q&A and benchmarks',
          },
          {
            'App': '[Off Grid](/power-local-llm/off-grid-ai-review)',
            'Platforms': 'iOS, Android, Mac, Windows',
            'Price / license': 'Freemium / MIT',
            'Key difference': 'Offline AI suite across phone and desktop',
          },
          {
            'App': '[LLM Hub](/power-local-llm/llm-hub-review)',
            'Platforms': 'Android, iOS',
            'Price / license': 'Freemium / source-available',
            'Key difference': 'Broader suite with agent, image, and translation features',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Who makes LM Playground?',
            a: 'Andriy Druk, an independent developer who publishes the app on Google Play under his own name and the code on GitHub since March 2024.',
          },
          {
            q: 'Is there an iPhone version?',
            a: 'No iPhone, desktop, or web version appears in the README, website, or Play listing; the project describes itself as an Android application.',
          },
          {
            q: 'Can I load my own models?',
            a: 'Yes. The README lists custom GGUF model files from any source alongside the built-in catalog; the formats beyond GGUF were not stated.',
          },
          {
            q: 'How much memory do I need?',
            a: 'There is no fixed minimum. The listing says the smallest model is 267 MB, 4B to 8B models benefit from 8 GB of RAM or more, and the 20B model needs a high-end device.',
          },
          {
            q: 'Does voice dictation work offline?',
            a: 'Per the website and release notes, yes after a one-time speech model download. It is not mentioned in the Play description, so check your installed version.',
          },
          {
            q: 'Where can I read the source?',
            a: 'The full code is in the [LMPlayground repository](https://github.com/andriydruk/LMPlayground) on GitHub under the MIT license.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LM Playground is a free, MIT-licensed way to run GGUF models on an Android phone: it combines a large built-in catalog with your own model files, on-device document Q&A, photo input, and dictation, and its public repository means its privacy claims can in principle be checked. Against that, it is Android-only, maintained by one developer, and its Play listing does not show the build number, so the version you install can differ from the newest GitHub release. It suits Android users who want an auditable, offline-first app; people on iPhone or desktop can compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Off Grid](/power-local-llm/off-grid-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LM Playground on Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) — description, developer, download count, rating, Data safety section, and last-updated date, checked 16 October 2026.',
          '[LM Playground website](https://lmplayground.app/) — features, model library, languages, and displayed version, checked 16 October 2026.',
          '[Privacy policy](https://www.andriydruk.com/privacy-policy-for-lm-playground) — data-collection and permission statements.',
          '[LMPlayground on GitHub](https://github.com/andriydruk/LMPlayground) — README, MIT license file, releases, release notes, and version file.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — an open-source offline chat app with document Q&A.',
          '[Off Grid Review](/power-local-llm/off-grid-ai-review) — an offline AI suite for phone and desktop.',
          '[LLM Hub Review](/power-local-llm/llm-hub-review) — an on-device AI suite for Android and iPhone.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LM Playground Review: Open-Source Offline LLM Chat for Android',
      description:
        'LM Playground review: a free, MIT-licensed Android app that runs GGUF language models offline with document Q&A and vision input. Models, privacy, versions, and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/lm-playground-review',
      inLanguage: 'en',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Android users evaluating a free, open-source offline AI chat app' },
      about: [
        { '@type': 'Thing', name: 'LM Playground' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/lm-playground-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LM Playground Review', item: 'https://promptquorum.com/power-local-llm/lm-playground-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/lm-playground-review-hero-de.webp',
    title: 'LM-Playground-Rezension: Quelloffene Offline-KI-Chat-App für Android',
    seoTitle: 'LM-Playground-Rezension: Kostenlose Offline-KI-App',
    intro:
      'LM Playground ist eine kostenlose, MIT-lizenzierte Android-App des unabhängigen Entwicklers [Andriy Druk](https://www.andriydruk.com), die Open-Weight-Sprachmodelle im GGUF-Format über llama.cpp direkt auf dem Smartphone ausführt. Über den Chat hinaus bietet sie Dokumenten-Q&A auf dem Gerät, Fotoeingabe für Modelle mit Bildverständnis, die Anzeige von Reasoning-Modellen, optionale Werkzeuge und Sprachdiktat. Diese Rezension stützt sich auf den [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=com.druk.lmplayground), die [offizielle Website](https://lmplayground.app/), die [Datenschutzerklärung](https://www.andriydruk.com/privacy-policy-for-lm-playground) und das öffentliche [GitHub-Repository](https://github.com/andriydruk/LMPlayground), geprüft am 16. Oktober 2026; PromptQuorum hat die App nicht praktisch getestet.',
    metaDescription:
      'LM-Playground-Rezension: kostenlose Android-App (MIT), die GGUF-Modelle offline ausführt, mit Dokumenten-Q&A und Vision. Modelle, Datenschutz, Grenzen.',
    twitterDescription:
      'LM-Playground-Rezension: eine quelloffene Android-App für Offline-Chat mit GGUF-Modellen, dazu Dokumente, Fotos, Diktat und offene Fragen.',
    audience:
      'Android-Nutzer, die eine kostenlose, quelloffene Chat-App wünschen, die Sprachmodelle auf dem Smartphone ausführt, und die wissen müssen, welche Modelle und Funktionen sie bietet, was offline bleibt und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LM Playground Rezension',
    targetKeywords: [
      'lm playground app test',
      'lm playground android',
      'llm offline auf android ausführen',
      'llama.cpp android app',
      'open source lokale llm app android',
      'andriy druk lm playground',
      'gguf modelle android app',
    ],
    current_models_mentioned: ['Qwen 3.5', 'Gemma 4', 'GPT-OSS', 'Nemotron 3 Nano', 'Granite 4', 'DeepSeek R1 Distill', 'Phi-4 mini', 'LFM2.5', 'Ministral 3', 'Llama 3.2'],
    current_hardware_mentioned: ['Android', 'ARM'],
    leadAnswerBlock:
      '**LM Playground (Version 1.10.1, Stand 16. Oktober 2026, bei Google Play zuletzt aktualisiert am 8. Oktober 2026) braucht kein Konto und baut auf llama.cpp auf, der Open-Source-Engine, die die Modelle auf dem Smartphone ausführt.** Modelle werden einmal von Hugging Face heruntergeladen; danach funktionieren Chat, Dokumentenfragen, Fotoeingabe und Diktat offline. Nur zwei Dinge gehen konzeptionsbedingt online: Modell-Downloads sowie die optionalen Werkzeuge für Websuche und Seitenabruf, die standardmäßig ausgeschaltet sind.',
    quickAnswerTop: {
      de: {
        question: 'Ist LM Playground kostenlos, quelloffen und wirklich offline?',
        answer:
          'Laut Eintrag, Website und Repository ja: Die App ist kostenlos, bei Google Play werden weder Werbung noch Käufe angezeigt, der Code steht unter der MIT-Lizenz, und sobald ein Modell heruntergeladen ist, läuft die Inferenz auf dem Gerät. Die Ausnahmen sind die Modell-Downloads selbst und die optionalen Web-Werkzeuge.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground), nur für Android; Quellcode auf [GitHub](https://github.com/andriydruk/LMPlayground).',
          'Integrierter Katalog mit über 40 Modellen sowie das Laden eigener GGUF-Dateien aus jedem Ordner.',
          'Dokumenten-Q&A, Bildeingabe, Anzeige von Reasoning, Einstellungen je Modell, System-Prompts und Sprachdiktat.',
          'Store-Signale, Stand der Prüfung am 16. Oktober 2026: über 50.000 Downloads bei Google Play, 3,9 Sterne bei 479 Bewertungen, 161 GitHub-Sterne.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist LM Playground?', anchor: 'what-is-lm-playground' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Welche Modelle bietet die App?', anchor: 'models-supported' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
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
            text: 'LM Playground macht ein Android-Smartphone zu einem privaten Ort, um mit Open-Weight-Modellen zu chatten, Fragen zu Ihren eigenen Dokumenten zu stellen und Modellen mit Bildverständnis Fotos zu zeigen.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App über Google Play, laden einmal ein Modell herunter und chatten danach ohne Konto und ohne Internetverbindung; nur die Web-Werkzeuge und die Modell-Downloads brauchen das Netzwerk.',
          },
        ],
        items: [
          'Entwickler: Andriy Druk, ein unabhängiger Android-Entwickler; das Projekt ist seit März 2024 auf GitHub öffentlich und laut den Quellen ein Ein-Personen-Projekt.',
          'Preis und Lizenz: kostenlos und ohne Konto; der Quellcode steht unter der MIT-Lizenz.',
          'Modelle: ein integrierter Katalog (laut Website über 40 Modelle) von Qwen, Gemma, Llama, GPT-OSS, Nemotron, Phi-4, Granite, Mistral, DeepSeek und Liquid AI, dazu eigene GGUF-Dateien.',
          'Plattform: nur Android; die Quellen erwähnen weder eine iPhone- noch eine Desktop- oder Webversion.',
          'Aktualität: Google Play zeigt die letzte Aktualisierung am 8. Oktober 2026 und GitHub das Release 1.10.1 vom 12. Oktober 2026, beide Daten sind also aktuell.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den Google-Play-Eintrag, die offizielle Website, die Datenschutzerklärung und das öffentliche GitHub-Repository (README, Lizenz, Releases und Release Notes), geprüft am 16. Oktober 2026. PromptQuorum hat die App weder getestet noch einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-lm-playground',
        title: 'Was ist LM Playground?',
        content: [
          '**LM Playground ist eine Android-Chat-App, die Sprachmodelle lokal ausführt, statt einen Cloud-Dienst aufzurufen.** Laut [README](https://github.com/andriydruk/LMPlayground) laden Sie Modelle herunter, öffnen sie mit einem Tipp und chatten offline; die Inferenz-Engine ist [llama.cpp](https://github.com/ggml-org/llama.cpp), und die Modelle sind GGUF-Dateien von [Hugging Face](https://huggingface.co/). Modelle sind nicht mitgeliefert, sodass der erste Start eine Netzwerkverbindung braucht.',
          'Der Entwickler Andriy Druk ist bei Google Play unter diesem Namen geführt und veröffentlicht das Projekt in seinem eigenen GitHub-Konto. Das Projekt hat nichts mit Produkten ähnlichen Namens zu tun, etwa den Playground-Werkzeugen von Anbietern von Cloud-KI.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**LM Playground ist eine Store-App: Installieren Sie sie über Google Play, den einzigen Kanal, auf den das Projekt und seine Website verweisen.** GitHub dient für Quellcode und Release Notes; auf der Releases-Seite liegt keine APK-Datei.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) (kostenlos; Mindestversion von Android nicht angegeben)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[lmplayground.app](https://lmplayground.app/)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung für LM Playground](https://www.andriydruk.com/privacy-policy-for-lm-playground)',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': '[GitHub](https://github.com/andriydruk/LMPlayground) (MIT)',
          },
        ],
        note: 'Version und Aktualität, geprüft am 16. Oktober 2026: Das neueste GitHub-Release ist 1.10.1, veröffentlicht am 12. Oktober 2026 (die Kopfzeile der Website zeigt noch 1.10.0). Google Play nennt als Aktualisierungsdatum den 8. Oktober 2026, zeigt aber die Build-Nummer nicht, sodass der Play-Build älter sein kann als das neueste GitHub-Release.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Einrichtung folgt der Reihenfolge aus dem README und dem Play-Eintrag; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Installieren Sie LM Playground über Google Play; laut dem Eintrag sind weder ein Konto noch ein API-Schlüssel nötig.',
          },
          {
            title: 'Modell per WLAN herunterladen',
            whyItMatters: 'Wählen Sie ein Modell aus der integrierten Liste oder laden Sie Ihre eigene GGUF-Datei. Das kleinste Modell ist 267 MB groß, Modelle mit 4B bis 8B Parametern profitieren laut Play-Eintrag von 8 GB RAM oder mehr, und Downloads werden nach Unterbrechungen fortgesetzt.',
          },
          {
            title: 'Chatten, Datei anhängen oder Foto senden',
            whyItMatters: 'Starten Sie einen Chat, hängen Sie ein Dokument an und stellen Sie Fragen dazu, oder senden Sie ein Bild an ein Modell mit Bildverständnis. Dokumentensuche und Diktat laden bei der ersten Nutzung jeweils einmal ein kleines Hilfsmodell herunter.',
          },
          {
            title: 'Optional Werkzeuge einschalten',
            whyItMatters: 'Werkzeuge sind standardmäßig ausgeschaltet und lassen sich in den Einstellungen je Modell aktivieren. Lassen Sie sie aus, damit jeder Chat auf dem Gerät bleibt.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Welche Modelle bietet die App?',
        itemHeadings: true,
        columns: ['Modellfamilie', 'Größen', 'Hinweise'],
        rows: [
          {
            'Modellfamilie': 'Qwen 3.5 / Qwen 3',
            'Größen': '0.8B, 2B, 4B / 0.6B, 1.7B, 4B',
            'Hinweise': 'Qwen-3.5-Einträge nehmen Bilder an',
          },
          {
            'Modellfamilie': 'Gemma 4 / Gemma 3n / Gemma 3',
            'Größen': 'E2B, E4B, 12B / E2B, E4B / 1B, 4B',
            'Hinweise': 'Vision bei Gemma 4 E4B und Gemma 3 4B laut README',
          },
          {
            'Modellfamilie': 'GPT-OSS',
            'Größen': '20B',
            'Hinweise': 'Laut Play-Eintrag ist ein Highend-Smartphone mit viel Speicher nötig',
          },
          {
            'Modellfamilie': 'Llama 3.2 / 3.1',
            'Größen': '1B, 3B / 8B',
            'Hinweise': 'Von Meta',
          },
          {
            'Modellfamilie': 'Granite, Nemotron, Phi-4, DeepSeek R1 Distill',
            'Größen': 'Granite 4.x 3B bis 8B; Nemotron 4B; Phi-4 mini 3.8B; R1 Distill 1.5B, 7B',
            'Hinweise': 'DeepSeek R1 und Nemotron zeigen ihre Denkschritte',
          },
          {
            'Modellfamilie': 'LFM2.5, MiniCPM5, SmolLM3, Spark-X2.5, Ministral 3',
            'Größen': 'LFM2.5 350M bis 2.6B; LFM2.5 VL 450M bis 3B; Ministral 3 3B, 8B',
            'Hinweise': 'Ministral 3 und LFM2.5 VL nehmen Bilder an',
          },
        ],
        note: 'Die Einträge stammen aus dem Repository-README vom 16. Oktober 2026; die meisten verwenden die Quantisierung Q4_K_M, Qwen 3.5 verwendet Q3_K_M, und GPT-OSS wird im nativen Format MXFP4 ausgeliefert. Der Play-Eintrag nennt eine kürzere Liste von zehn Familien, und der Katalog ändert sich mit jedem Release.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus dem README, der Website, den Release Notes oder dem Play-Eintrag; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Dokumenten-Q&A.** Hängen Sie eine PDF-, Word-, EPUB-, HTML-, Markdown- oder Nur-Text-Datei an; die semantische Suche auf dem Gerät findet die relevanten Passagen und übergibt sie an das Modell. Dafür wird einmalig ein Embedding-Modell mit 278 MB heruntergeladen.',
          '**Bildeingabe.** Hängen Sie ein Foto aus der Galerie an oder nehmen Sie eines mit der Kamera auf und bitten Sie ein Modell mit Bildverständnis, es zu beschreiben oder seinen Text zu lesen.',
          '**Sprachdiktat.** In Version 1.10.0 ergänzt: Tippen Sie auf das Mikrofon und sprechen Sie; die Erkennung läuft in 35 Sprachen auf dem Smartphone, nach einem einmaligen Download eines Sprachmodells mit 718 MB. Sie steht auf der Website und in den Release Notes, aber nicht in der Play-Beschreibung.',
          '**Anzeige von Reasoning.** Die Denkschritte von Modellen wie DeepSeek R1 und Nemotron erscheinen in einem einklappbaren Bereich mit einstellbarem Denkbudget.',
          '**Steuerung und Verlauf.** Einstellungen je Modell (Kontextgröße, Temperature, Top-P, Top-K, Min-P, Wiederholungsstrafe, Seed), wiederverwendbare System-Prompts und ein durchsuchbarer Chatverlauf mit Anheften, Umbenennen und Löschen.',
          '**Werkzeuge.** Leistungsfähige Modelle können im Web suchen, eine Seite abrufen und JavaScript in einer Sandbox ausführen; jedes Werkzeug ist standardmäßig ausgeschaltet.',
          '**Generierung im Hintergrund und Speicher.** Antworten laufen weiter, wenn Sie die App verlassen, Modelle können in jedem Ordner oder auf einer SD-Karte liegen, und die Oberfläche ist in 28 Sprachen übersetzt.',
        ],
        note: 'Die Play-Beschreibung, das README und die Website führen leicht unterschiedliche Funktionen auf (Diktat und 28 Sprachen erscheinen nur auf der Website); maßgeblich ist daher der aktuelle Build der App.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Die Kernnutzung ist von der Konzeption her offline: Die Website behauptet null Netzwerkaufrufe bei der Inferenz, und der Abschnitt „Datensicherheit“ bei Google Play nennt „Keine Daten erhoben“ und „Keine Daten an Dritte weitergegeben“.** Laut [Datenschutzerklärung](https://www.andriydruk.com/privacy-policy-for-lm-playground) erhebt der Entwickler weder personenbezogene noch nicht personenbezogene Informationen.',
          'Diese Erklärung trat am 16. März 2024 in Kraft und beschreibt den Internetzugriff nur als Berechtigung, die der App das Herunterladen von Modellen erlaubt. Die Werkzeuge für Websuche und Seitenabruf kamen später; die Quellen sagen nicht, welcher Suchdienst eine Anfrage erhält. Betrachten Sie diese beiden Werkzeuge daher als den Teil, der online geht, und lassen Sie sie bei vertraulichen Chats ausgeschaltet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Der Quellcode ist öffentlich, sodass jeder, der die App baut, diese Angaben prüfen kann, doch PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft.',
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
            'Einschränkung / Hinweis': 'Ein einzelner Entwickler pflegt sie; die Quellen nennen keine Support-Zusage.',
          },
          {
            'Vorteil': 'Eigene GGUF-Dateien',
            'Bedeutung in der Praxis': 'Modelldateien aus jedem Ordner laden, neben dem integrierten Katalog.',
            'Einschränkung / Hinweis': 'Von uns gelesene Play-Bewertungen nennen das Laden externer Modelle unzuverlässig; das sind individuelle Nutzerberichte.',
          },
          {
            'Vorteil': 'Dokumente, Fotos, Sprache',
            'Bedeutung in der Praxis': 'Eine App deckt Dateifragen, Bildeingabe und Diktat ab, alles auf dem Gerät.',
            'Einschränkung / Hinweis': 'Die Qualität hängt vom kleinen Modell ab, das Sie laden, und Hilfsmodelle bedeuten zusätzliche Downloads.',
          },
          {
            'Vorteil': 'Aktive Entwicklung',
            'Bedeutung in der Praxis': 'Häufige Releases bringen neue Modelle und Korrekturen, etwa den Fix für den Vision-Absturz in 1.10.1.',
            'Einschränkung / Hinweis': 'Schnelle Änderungen bedeuten, dass Play-Build, Website und GitHub unterschiedliche Versionen zeigen können.',
          },
          {
            'Vorteil': 'Optionale Web-Werkzeuge',
            'Bedeutung in der Praxis': 'Modelle können aktuelle Seiten nachschlagen, wenn Sie die Werkzeuge einschalten.',
            'Einschränkung / Hinweis': 'Geht online, und ein Play-Rezensent berichtete, das Modell habe bei eingeschalteter Websuche beim „Denken“ in einer Schleife festgehangen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Android-Nutzer, die eine kostenlose, prüfbare Offline-Chat-App wollen.** Die MIT-Lizenz und das öffentliche Repository machen sie überprüfbar.',
          '**Menschen, die eigene Dateien privat befragen möchten.** Dokumenten-Q&A mit Suche auf dem Gerät ist eine Kernfunktion.',
          '**Tüftler, die eigene Modelle mitbringen.** Das Laden eigener GGUF-Dateien und Sampling-Einstellungen je Modell sind genau dafür gedacht.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praktische Leistung.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Akkuverbrauch und Antwortqualität sind daher nicht bewertet.',
          '**Welchen Build Google Play ausliefert.** Der Eintrag zeigt ein Aktualisierungsdatum, aber weder eine Versionsnummer noch eine Mindestversion von Android.',
          '**Welchen Suchdienst das Web-Werkzeug nutzt.** Die gelesenen Quellen nennen ihn nicht.',
          '**Ob die Datenschutzerklärung die Web-Werkzeuge abdeckt.** Der Text der Erklärung stammt aus der Zeit vor ihnen, und eine aktualisierte Fassung wurde nicht gefunden.',
          '**Nicht für Nutzer von iPhone, Mac oder Windows.** Die Quellen beschreiben eine reine Android-App.',
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
            'App': '[Private Mind](/de/power-local-llm/private-mind-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Chat auf ExecuTorch mit Dokumenten-Q&A und Benchmarks',
          },
          {
            'App': '[Off Grid](/de/power-local-llm/off-grid-ai-review)',
            'Plattformen': 'iOS, Android, Mac, Windows',
            'Preis / Lizenz': 'Freemium / MIT',
            'Wesentlicher Unterschied': 'Offline-KI-Suite für Smartphone und Desktop',
          },
          {
            'App': '[LLM Hub](/de/power-local-llm/llm-hub-review)',
            'Plattformen': 'Android, iOS',
            'Preis / Lizenz': 'Freemium / Source-available',
            'Wesentlicher Unterschied': 'Breitere Suite mit Agenten-, Bild- und Übersetzungsfunktionen',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wer macht LM Playground?',
            a: 'Andriy Druk, ein unabhängiger Entwickler, der die App unter seinem eigenen Namen bei Google Play und den Code seit März 2024 auf GitHub veröffentlicht.',
          },
          {
            q: 'Gibt es eine iPhone-Version?',
            a: 'Weder im README noch auf der Website oder im Play-Eintrag erscheint eine iPhone-, Desktop- oder Webversion; das Projekt beschreibt sich selbst als Android-Anwendung.',
          },
          {
            q: 'Kann ich eigene Modelle laden?',
            a: 'Ja. Das README nennt eigene GGUF-Modelldateien aus beliebiger Quelle neben dem integrierten Katalog; welche Formate es über GGUF hinaus gibt, wurde nicht angegeben.',
          },
          {
            q: 'Wie viel Arbeitsspeicher brauche ich?',
            a: 'Es gibt kein festes Minimum. Der Eintrag nennt 267 MB für das kleinste Modell, sagt, dass Modelle mit 4B bis 8B von 8 GB RAM oder mehr profitieren, und dass das 20B-Modell ein Highend-Gerät braucht.',
          },
          {
            q: 'Funktioniert das Sprachdiktat offline?',
            a: 'Laut Website und Release Notes ja, nach einem einmaligen Download eines Sprachmodells. In der Play-Beschreibung wird es nicht erwähnt; prüfen Sie daher Ihre installierte Version.',
          },
          {
            q: 'Wo kann ich den Quellcode lesen?',
            a: 'Der vollständige Code liegt im [LMPlayground-Repository](https://github.com/andriydruk/LMPlayground) auf GitHub unter der MIT-Lizenz.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'LM Playground ist ein kostenloser, MIT-lizenzierter Weg, GGUF-Modelle auf einem Android-Smartphone auszuführen: Die App verbindet einen großen integrierten Katalog mit eigenen Modelldateien, Dokumenten-Q&A auf dem Gerät, Fotoeingabe und Diktat, und ihr öffentliches Repository bedeutet, dass sich ihre Datenschutzangaben grundsätzlich prüfen lassen. Dem steht gegenüber, dass sie nur für Android erhältlich ist, von einem einzelnen Entwickler gepflegt wird und ihr Play-Eintrag die Build-Nummer nicht zeigt, sodass die installierte Version vom neuesten GitHub-Release abweichen kann. Sie eignet sich für Android-Nutzer, die eine prüfbare, Offline-first-App wollen; wer ein iPhone oder einen Desktop nutzt, kann [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Off Grid](/de/power-local-llm/off-grid-ai-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LM Playground bei Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) — Beschreibung, Entwickler, Download-Zahl, Bewertung, Abschnitt „Datensicherheit“ und Datum der letzten Aktualisierung, geprüft am 16. Oktober 2026.',
          '[Website von LM Playground](https://lmplayground.app/) — Funktionen, Modellbibliothek, Sprachen und angezeigte Version, geprüft am 16. Oktober 2026.',
          '[Datenschutzerklärung](https://www.andriydruk.com/privacy-policy-for-lm-playground) — Angaben zur Datenerhebung und zu Berechtigungen.',
          '[LMPlayground auf GitHub](https://github.com/andriydruk/LMPlayground) — README, MIT-Lizenzdatei, Releases, Release Notes und Versionsdatei.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät für iOS und Android.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine quelloffene Offline-Chat-App mit Dokumenten-Q&A.',
          '[Off-Grid-Rezension](/de/power-local-llm/off-grid-ai-review) — eine Offline-KI-Suite für Smartphone und Desktop.',
          '[LLM-Hub-Rezension](/de/power-local-llm/llm-hub-review) — eine KI-Suite auf dem Gerät für Android und iPhone.',
          '[Beste lokale LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/lm-playground-review-hero-es.webp',
    title: 'Análisis de LM Playground: chat de LLM offline y de código abierto para Android',
    seoTitle: 'Análisis de LM Playground: app de LLM offline y gratuita',
    intro:
      'LM Playground es una app gratuita para Android con licencia MIT, creada por el desarrollador independiente [Andriy Druk](https://www.andriydruk.com), que ejecuta modelos de lenguaje de pesos abiertos en formato GGUF directamente en el teléfono mediante llama.cpp. Además del chat, ofrece preguntas sobre documentos en el dispositivo, entrada de fotos para modelos de visión, visualización de modelos de razonamiento, herramientas opcionales y dictado por voz. Este análisis se basa en la [ficha de Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground), el [sitio web oficial](https://lmplayground.app/), la [política de privacidad](https://www.andriydruk.com/privacy-policy-for-lm-playground) y el [repositorio público de GitHub](https://github.com/andriydruk/LMPlayground), consultados el 16 de octubre de 2026; PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'Análisis de LM Playground: app gratuita y MIT para Android que ejecuta modelos GGUF offline, con documentos y visión. Modelos, privacidad y límites.',
    twitterDescription:
      'Análisis de LM Playground: una app de código abierto para Android que chatea offline con modelos GGUF, con documentos, fotos, dictado y dudas abiertas.',
    audience:
      'Usuarios de Android que quieren una app de chat gratuita y de código abierto que ejecute modelos de lenguaje en el teléfono, y que necesitan saber qué modelos y funciones ofrece, qué se queda offline y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de LM Playground',
    targetKeywords: [
      'opiniones app lm playground',
      'lm playground android',
      'ejecutar llm en android sin conexión',
      'app llama.cpp para android',
      'app de llm local de código abierto para android',
      'andriy druk lm playground',
      'app de modelos gguf para android',
    ],
    current_models_mentioned: ['Qwen 3.5', 'Gemma 4', 'GPT-OSS', 'Nemotron 3 Nano', 'Granite 4', 'DeepSeek R1 Distill', 'Phi-4 mini', 'LFM2.5', 'Ministral 3', 'Llama 3.2'],
    current_hardware_mentioned: ['Android', 'ARM'],
    leadAnswerBlock:
      '**LM Playground (versión 1.10.1 a fecha del 16 de octubre de 2026, última actualización en Google Play el 8 de octubre de 2026) no requiere cuenta y está construida sobre llama.cpp, el motor de código abierto que ejecuta los modelos en el teléfono.** Los modelos se descargan una sola vez desde Hugging Face y después el chat, las preguntas sobre documentos, la entrada de fotos y el dictado funcionan offline. Solo dos cosas se conectan a internet por diseño: las descargas de modelos y las herramientas opcionales de búsqueda web y de lectura de páginas, que vienen desactivadas por defecto.',
    quickAnswerTop: {
      es: {
        question: '¿LM Playground es gratuita, de código abierto y realmente offline?',
        answer:
          'Según su ficha, su sitio web y su repositorio, sí: la app es gratuita y Google Play no muestra anuncios ni compras, el código está bajo la licencia MIT y, una vez descargado un modelo, la inferencia se ejecuta en el dispositivo. Las excepciones son las propias descargas de modelos y las herramientas web opcionales.',
        bullets: [
          'Gratis en [Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground), solo para Android; código fuente en [GitHub](https://github.com/andriydruk/LMPlayground).',
          'Catálogo integrado de más de 40 modelos, además de la carga de tus propios archivos GGUF desde cualquier carpeta.',
          'Preguntas sobre documentos, entrada de visión, visualización del razonamiento, ajustes por modelo, prompts de sistema y dictado por voz.',
          'Indicadores de la tienda según la consulta del 16 de octubre de 2026: más de 50 mil descargas en Google Play, 3.9 estrellas con 479 valoraciones y 161 estrellas en GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es LM Playground?', anchor: 'what-is-lm-playground' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: '¿Qué modelos ofrece?', anchor: 'models-supported' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y uso de la red', anchor: 'privacy' },
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
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LM Playground convierte un teléfono Android en un espacio privado para chatear con modelos de pesos abiertos, hacer preguntas sobre tus propios documentos y mostrar fotos a modelos con capacidad de visión.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas desde Google Play, descargas un modelo una sola vez y después chateas sin cuenta ni conexión a internet; las herramientas web y las descargas de modelos son las únicas partes que necesitan la red.',
          },
        ],
        items: [
          'Desarrollador: Andriy Druk, un desarrollador independiente de Android; el proyecto es público en GitHub desde marzo de 2024 y, por lo que muestran las fuentes, es un proyecto de una sola persona.',
          'Precio y licencia: gratuita y sin cuenta; el código fuente está bajo la licencia MIT.',
          'Modelos: un catálogo integrado (el sitio web indica más de 40) de Qwen, Gemma, Llama, GPT-OSS, Nemotron, Phi-4, Granite, Mistral, DeepSeek y Liquid AI, además de tus propios archivos GGUF.',
          'Plataforma: solo Android; las fuentes no mencionan versión para iPhone, escritorio ni web.',
          'Actualidad: Google Play muestra la última actualización el 8 de octubre de 2026 y GitHub muestra la versión 1.10.1 del 12 de octubre de 2026, por lo que ambas fechas son recientes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en la ficha de Google Play, el sitio web oficial, la política de privacidad y el repositorio público de GitHub (README, licencia, versiones y notas de versión), consultados el 16 de octubre de 2026. PromptQuorum no ha probado ni medido el rendimiento de la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-lm-playground',
        title: '¿Qué es LM Playground?',
        content: [
          '**LM Playground es una app de chat para Android que ejecuta modelos de lenguaje en local en lugar de llamar a un servicio en la nube.** Según su [README](https://github.com/andriydruk/LMPlayground), descargas los modelos, los cargas con un toque y chateas offline; el motor de inferencia es [llama.cpp](https://github.com/ggml-org/llama.cpp) y los modelos son archivos GGUF de [Hugging Face](https://huggingface.co/). Los modelos no vienen incluidos, así que la primera ejecución necesita conexión a la red.',
          'El desarrollador, Andriy Druk, figura en Google Play con ese nombre y publica el proyecto en su propia cuenta de GitHub. El proyecto no guarda relación con productos de nombre parecido, como las herramientas Playground de los proveedores de IA en la nube.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**LM Playground es una app de tienda: se instala desde Google Play, el único canal al que remiten el proyecto y su sitio web.** GitHub sirve para el código fuente y las notas de versión; la página de versiones no incluye ningún archivo APK.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) (gratis; versión mínima de Android no indicada)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[lmplayground.app](https://lmplayground.app/)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Política de privacidad de LM Playground](https://www.andriydruk.com/privacy-policy-for-lm-playground)',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde obtenerla': '[GitHub](https://github.com/andriydruk/LMPlayground) (MIT)',
          },
        ],
        note: 'Versión y actualidad verificadas el 16 de octubre de 2026: la última versión en GitHub es la 1.10.1, publicada el 12 de octubre de 2026 (el encabezado del sitio web sigue mostrando la 1.10.0). Google Play indica la app como actualizada el 8 de octubre de 2026 pero no muestra su número de compilación, así que la compilación de Play puede ser anterior a la versión más reciente de GitHub.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración sigue el orden descrito en el README y en la ficha de Play; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Instala LM Playground desde Google Play; según la ficha, no se requiere cuenta ni clave de API.',
          },
          {
            title: 'Descarga un modelo con Wi-Fi',
            whyItMatters: 'Elige un modelo de la lista integrada o carga tu propio archivo GGUF. El modelo más pequeño ocupa 267 MB, los modelos de 4B a 8B parámetros se benefician de 8 GB de RAM o más según la ficha de Play, y las descargas se reanudan tras una interrupción.',
          },
          {
            title: 'Chatea, adjunta un archivo o envía una foto',
            whyItMatters: 'Inicia un chat, adjunta un documento y pregunta sobre él, o envía una imagen a un modelo con capacidad de visión. La búsqueda en documentos y el dictado descargan cada uno un pequeño modelo auxiliar una sola vez en el primer uso.',
          },
          {
            title: 'Activa las herramientas si quieres',
            whyItMatters: 'Las herramientas vienen desactivadas por defecto y se pueden activar por modelo en Ajustes. Déjalas desactivadas para que cada chat se quede en el dispositivo.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '¿Qué modelos ofrece?',
        itemHeadings: true,
        columns: ['Familia de modelos', 'Tamaños', 'Notas'],
        rows: [
          {
            'Familia de modelos': 'Qwen 3.5 / Qwen 3',
            'Tamaños': '0.8B, 2B, 4B / 0.6B, 1.7B, 4B',
            'Notas': 'Las entradas de Qwen 3.5 aceptan imágenes',
          },
          {
            'Familia de modelos': 'Gemma 4 / Gemma 3n / Gemma 3',
            'Tamaños': 'E2B, E4B, 12B / E2B, E4B / 1B, 4B',
            'Notas': 'Visión en Gemma 4 E4B y Gemma 3 4B según el README',
          },
          {
            'Familia de modelos': 'GPT-OSS',
            'Tamaños': '20B',
            'Notas': 'Requiere un teléfono de gama alta con mucha memoria según la ficha de Play',
          },
          {
            'Familia de modelos': 'Llama 3.2 / 3.1',
            'Tamaños': '1B, 3B / 8B',
            'Notas': 'De Meta',
          },
          {
            'Familia de modelos': 'Granite, Nemotron, Phi-4, DeepSeek R1 Distill',
            'Tamaños': 'Granite 4.x de 3B a 8B; Nemotron 4B; Phi-4 mini 3.8B; R1 Distill 1.5B, 7B',
            'Notas': 'DeepSeek R1 y Nemotron muestran sus pasos de razonamiento',
          },
          {
            'Familia de modelos': 'LFM2.5, MiniCPM5, SmolLM3, Spark-X2.5, Ministral 3',
            'Tamaños': 'LFM2.5 de 350M a 2.6B; LFM2.5 VL de 450M a 3B; Ministral 3 3B, 8B',
            'Notas': 'Ministral 3 y LFM2.5 VL aceptan imágenes',
          },
        ],
        note: 'Las entradas proceden del README del repositorio del 16 de octubre de 2026; la mayoría usa cuantización Q4_K_M, Qwen 3.5 usa Q3_K_M y GPT-OSS se distribuye en su formato nativo MXFP4. La ficha de Play nombra una lista más corta de diez familias, y el catálogo cambia con cada versión.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede del README, el sitio web, las notas de versión o la ficha de Play; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Preguntas sobre documentos.** Adjunta un archivo PDF, Word, EPUB, HTML, Markdown o de texto plano; una búsqueda semántica en el dispositivo encuentra los pasajes relevantes y se los entrega al modelo. Descarga una sola vez un modelo de embeddings de 278 MB.',
          '**Entrada de visión.** Adjunta una foto de la galería o haz una con la cámara y pide a un modelo con capacidad de visión que la describa o lea su texto.',
          '**Dictado por voz.** Añadido en la versión 1.10.0: toca el micrófono y habla; el reconocimiento se ejecuta en el teléfono en 35 idiomas tras una descarga única de 718 MB del modelo de voz. Aparece en el sitio web y en las notas de versión, pero no en la descripción de Play.',
          '**Visualización del razonamiento.** Los pasos de razonamiento de modelos como DeepSeek R1 y Nemotron aparecen en una sección plegable con un presupuesto de razonamiento ajustable.',
          '**Control e historial.** Ajustes por modelo (tamaño de contexto, temperature, Top-P, Top-K, Min-P, penalización por repetición, seed), prompts de sistema reutilizables y un historial de chats con búsqueda, con opciones para fijar, renombrar y eliminar.',
          '**Herramientas.** Los modelos compatibles pueden buscar en la web, leer una página y ejecutar JavaScript en un entorno aislado; cada herramienta viene desactivada por defecto.',
          '**Generación en segundo plano y almacenamiento.** Las respuestas siguen generándose cuando sales de la app, los modelos pueden estar en cualquier carpeta o en una tarjeta SD, y la interfaz está traducida a 28 idiomas.',
        ],
        note: 'La descripción de Play, el README y el sitio web enumeran funciones ligeramente distintas (el dictado y los 28 idiomas aparecen solo en el sitio web), así que la compilación actual de la app tiene la última palabra.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**El uso principal es offline por diseño: el sitio web afirma cero llamadas de red durante la inferencia, y la sección de seguridad de los datos de Google Play declara "No se recopilan datos" y "No se comparten datos con terceros".** La [política de privacidad](https://www.andriydruk.com/privacy-policy-for-lm-playground) dice que el desarrollador no recopila información personal ni no personal.',
          'Esa política entró en vigor el 16 de marzo de 2024 y describe el acceso a internet solo como el permiso que permite a la app descargar modelos. Las herramientas de búsqueda web y de lectura de páginas llegaron después; las fuentes no indican qué servicio de búsqueda recibe una consulta, así que considera esas dos herramientas como la parte que se conecta a internet y mantenlas desactivadas en los chats confidenciales.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código fuente es público, por lo que cualquiera que compile la app puede comprobar estas afirmaciones, pero PromptQuorum no ha auditado el código ni el tráfico de red.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Gratuita y de código abierto',
            'Qué significa en el uso real': 'Sin cuenta ni suscripción, y el código con licencia MIT se puede leer y compilar.',
            'Limitación / salvedad': 'La mantiene un solo desarrollador; las fuentes no indican ningún compromiso de soporte.',
          },
          {
            'Ventaja': 'Trae tu propio GGUF',
            'Qué significa en el uso real': 'Carga archivos de modelos desde cualquier carpeta junto al catálogo integrado.',
            'Limitación / salvedad': 'Las reseñas de Play que leímos describen la carga de modelos externos como irregular; son relatos individuales de usuarios.',
          },
          {
            'Ventaja': 'Documentos, fotos, voz',
            'Qué significa en el uso real': 'Una sola app cubre preguntas sobre archivos, entrada de imágenes y dictado, todo en el dispositivo.',
            'Limitación / salvedad': 'La calidad depende del modelo pequeño que cargues, y los modelos auxiliares suman descargas.',
          },
          {
            'Ventaja': 'Desarrollo activo',
            'Qué significa en el uso real': 'Las versiones frecuentes añaden modelos nuevos y correcciones, como la corrección del cierre inesperado de visión en la 1.10.1.',
            'Limitación / salvedad': 'Con cambios rápidos, la compilación de Play, el sitio web y GitHub pueden mostrar versiones distintas.',
          },
          {
            'Ventaja': 'Herramientas web opcionales',
            'Qué significa en el uso real': 'Los modelos pueden consultar páginas actuales cuando activas las herramientas.',
            'Limitación / salvedad': 'Se conecta a internet, y un usuario de Play comunicó que el modelo entraba en bucle mientras "pensaba" con la búsqueda web activada.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Android que quieren una app de chat offline gratuita y auditable.** La licencia MIT y el repositorio público permiten comprobarla.',
          '**Personas que quieren hacer preguntas sobre sus propios archivos de forma privada.** Las preguntas sobre documentos con búsqueda en el dispositivo son una función destacada.',
          '**Aficionados que traen sus propios modelos.** La carga de GGUF personalizados y los controles de muestreo por modelo están pensados para eso.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en la práctica.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, el consumo de batería ni la calidad de las respuestas.',
          '**Qué compilación sirve Google Play.** La ficha muestra una fecha de actualización, pero no un número de versión ni la versión mínima de Android.',
          '**Qué servicio de búsqueda usa la herramienta web.** Las fuentes consultadas no lo nombran.',
          '**Si la política de privacidad cubre las herramientas web.** El texto de la política es anterior a ellas y no se encontró actualizado.',
          '**No es para usuarios de iPhone, Mac ni Windows.** Las fuentes describen una app solo para Android.',
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
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat de código abierto sobre ExecuTorch con preguntas sobre documentos y pruebas de rendimiento',
          },
          {
            'App': '[Off Grid](/es/power-local-llm/off-grid-ai-review)',
            'Plataformas': 'iOS, Android, Mac, Windows',
            'Precio / licencia': 'Freemium / MIT',
            'Diferencia clave': 'Suite de IA offline para teléfono y escritorio',
          },
          {
            'App': '[LLM Hub](/es/power-local-llm/llm-hub-review)',
            'Plataformas': 'Android, iOS',
            'Precio / licencia': 'Freemium / código disponible',
            'Diferencia clave': 'Suite más amplia con funciones de agente, imagen y traducción',
          },
        ],
        note: 'Los detalles de la competencia cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Quién hace LM Playground?',
            a: 'Andriy Druk, un desarrollador independiente que publica la app en Google Play con su propio nombre y el código en GitHub desde marzo de 2024.',
          },
          {
            q: '¿Hay una versión para iPhone?',
            a: 'En el README, el sitio web y la ficha de Play no aparece ninguna versión para iPhone, escritorio ni web; el proyecto se describe a sí mismo como una aplicación para Android.',
          },
          {
            q: '¿Puedo cargar mis propios modelos?',
            a: 'Sí. El README menciona archivos de modelos GGUF personalizados de cualquier origen junto al catálogo integrado; no se indicaron otros formatos aparte de GGUF.',
          },
          {
            q: '¿Cuánta memoria necesito?',
            a: 'No hay un mínimo fijo. La ficha indica que el modelo más pequeño ocupa 267 MB, que los modelos de 4B a 8B se benefician de 8 GB de RAM o más y que el modelo de 20B requiere un dispositivo de gama alta.',
          },
          {
            q: '¿El dictado por voz funciona offline?',
            a: 'Según el sitio web y las notas de versión, sí, tras una descarga única del modelo de voz. No se menciona en la descripción de Play, así que comprueba tu versión instalada.',
          },
          {
            q: '¿Dónde puedo leer el código fuente?',
            a: 'El código completo está en el [repositorio LMPlayground](https://github.com/andriydruk/LMPlayground) de GitHub, bajo la licencia MIT.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'LM Playground es una forma gratuita y con licencia MIT de ejecutar modelos GGUF en un teléfono Android: combina un amplio catálogo integrado con tus propios archivos de modelos, preguntas sobre documentos en el dispositivo, entrada de fotos y dictado, y su repositorio público permite, en principio, comprobar sus afirmaciones de privacidad. En contra, es solo para Android, la mantiene un solo desarrollador y su ficha de Play no muestra el número de compilación, por lo que la versión que instales puede diferir de la última de GitHub. Es adecuada para usuarios de Android que quieren una app auditable y centrada en el uso offline; quienes usan iPhone o escritorio pueden comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) u [Off Grid](/es/power-local-llm/off-grid-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[LM Playground en Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) — descripción, desarrollador, número de descargas, valoración, sección de seguridad de los datos y fecha de la última actualización, consultados el 16 de octubre de 2026.',
          '[Sitio web de LM Playground](https://lmplayground.app/) — funciones, biblioteca de modelos, idiomas y versión mostrada, consultados el 16 de octubre de 2026.',
          '[Política de privacidad](https://www.andriydruk.com/privacy-policy-for-lm-playground) — declaraciones sobre recopilación de datos y permisos.',
          '[LMPlayground en GitHub](https://github.com/andriydruk/LMPlayground) — README, archivo de licencia MIT, versiones, notas de versión y archivo de versión.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline y de código abierto con preguntas sobre documentos.',
          '[Análisis de Off Grid](/es/power-local-llm/off-grid-ai-review) — una suite de IA offline para teléfono y escritorio.',
          '[Análisis de LLM Hub](/es/power-local-llm/llm-hub-review) — una suite de IA en el dispositivo para Android e iPhone.',
          '[Las mejores apps de LLM local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el resumen más amplio para Android.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/lm-playground-review-hero-fr.webp',
    title: 'Avis LM Playground : chat LLM open source hors ligne pour Android',
    seoTitle: 'Avis LM Playground : appli LLM gratuite hors ligne Android',
    intro:
      'LM Playground est une application Android gratuite, sous licence MIT, du développeur indépendant [Andriy Druk](https://www.andriydruk.com), qui exécute directement sur le téléphone des modèles de langage à poids ouverts au format GGUF grâce à llama.cpp. Au-delà du chat, elle propose des questions-réponses sur documents sur l\'appareil, l\'envoi de photos aux modèles de vision, l\'affichage des modèles de raisonnement, des outils facultatifs et la dictée vocale. Cet avis se fonde sur la [fiche Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground), le [site officiel](https://lmplayground.app/), la [politique de confidentialité](https://www.andriydruk.com/privacy-policy-for-lm-playground) et le [dépôt GitHub](https://github.com/andriydruk/LMPlayground) public, consultés le 16 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'Avis LM Playground : appli Android gratuite (MIT) qui exécute des modèles GGUF hors ligne, avec Q&R sur documents et vision. Modèles, vie privée, limites.',
    twitterDescription:
      'Avis LM Playground : une application Android open source pour discuter hors ligne avec des modèles GGUF, avec documents, photos, dictée et questions en suspens.',
    audience:
      'Utilisateurs d\'Android qui veulent une application de chat gratuite et open source exécutant des modèles de langage sur le téléphone, et qui ont besoin de savoir quels modèles et quelles fonctions elle propose, ce qui reste hors ligne et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis LM Playground',
    targetKeywords: [
      'avis application lm playground',
      'lm playground android',
      'exécuter un llm sur android hors ligne',
      'application android llama.cpp',
      'application llm local open source android',
      'andriy druk lm playground',
      'application android modèles gguf',
    ],
    current_models_mentioned: ['Qwen 3.5', 'Gemma 4', 'GPT-OSS', 'Nemotron 3 Nano', 'Granite 4', 'DeepSeek R1 Distill', 'Phi-4 mini', 'LFM2.5', 'Ministral 3', 'Llama 3.2'],
    current_hardware_mentioned: ['Android', 'ARM'],
    leadAnswerBlock:
      '**LM Playground (version 1.10.1 au 16 octobre 2026, dernière mise à jour sur Google Play le 8 octobre 2026) ne demande aucun compte et repose sur llama.cpp, le moteur open source qui exécute les modèles sur le téléphone.** Les modèles sont téléchargés une seule fois depuis Hugging Face, puis le chat, les questions sur documents, l\'envoi de photos et la dictée fonctionnent hors ligne. Seules deux choses passent par internet par conception : les téléchargements de modèles et les outils facultatifs de recherche web et de récupération de pages, désactivés par défaut.',
    quickAnswerTop: {
      fr: {
        question: 'LM Playground est-elle gratuite, open source et vraiment hors ligne ?',
        answer:
          'Selon sa fiche, son site et son dépôt, oui : l\'application est gratuite, sans publicité ni achat affichés sur Google Play, le code est sous licence MIT et, une fois un modèle téléchargé, l\'inférence s\'exécute sur l\'appareil. Les exceptions sont les téléchargements de modèles eux-mêmes et les outils web facultatifs.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground), Android uniquement ; code source sur [GitHub](https://github.com/andriydruk/LMPlayground).',
          'Catalogue intégré de plus de 40 modèles, plus le chargement de vos propres fichiers GGUF depuis n\'importe quel dossier.',
          'Questions-réponses sur documents, entrée d\'images, affichage du raisonnement, réglages par modèle, prompts système et dictée vocale.',
          'Indicateurs des boutiques au 16 octobre 2026 : plus de 50 000 téléchargements sur Google Play, 3.9 étoiles pour 479 avis, 161 étoiles sur GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que LM Playground ?', anchor: 'what-is-lm-playground' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Quels modèles propose-t-elle ?', anchor: 'models-supported' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
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
            text: 'LM Playground transforme un téléphone Android en espace privé pour discuter avec des modèles à poids ouverts, interroger vos propres documents et montrer des photos aux modèles compatibles avec la vision.',
          },
          {
            type: 'plain-terms',
            text: 'On l\'installe depuis Google Play, on télécharge un modèle une seule fois, puis on discute sans compte ni connexion internet ; seuls les outils web et les téléchargements de modèles ont besoin du réseau.',
          },
        ],
        items: [
          'Développeur : Andriy Druk, développeur Android indépendant ; le projet est public sur GitHub depuis mars 2024 et, d\'après les sources, il est mené par une seule personne.',
          'Prix et licence : gratuite, sans compte ; code source sous licence MIT.',
          'Modèles : un catalogue intégré (le site indique plus de 40 modèles) de Qwen, Gemma, Llama, GPT-OSS, Nemotron, Phi-4, Granite, Mistral, DeepSeek et Liquid AI, plus vos propres fichiers GGUF.',
          'Plateforme : Android uniquement ; les sources ne mentionnent aucune version pour iPhone, ordinateur ou web.',
          'Actualité : Google Play indique une dernière mise à jour le 8 octobre 2026 et GitHub la version 1.10.1 du 12 octobre 2026 ; les deux dates sont donc récentes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur la fiche Google Play, le site officiel, la politique de confidentialité et le dépôt GitHub public (README, licence, versions et notes de version), consultés le 16 octobre 2026. PromptQuorum n\'a ni testé ni évalué par benchmark l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-lm-playground',
        title: 'Qu\'est-ce que LM Playground ?',
        content: [
          '**LM Playground est une application de chat pour Android qui exécute des modèles de langage en local au lieu d\'appeler un service cloud.** D\'après son [README](https://github.com/andriydruk/LMPlayground), on télécharge des modèles, on les charge d\'une seule pression et on discute hors ligne ; le moteur d\'inférence est [llama.cpp](https://github.com/ggml-org/llama.cpp) et les modèles sont des fichiers GGUF provenant de [Hugging Face](https://huggingface.co/). Les modèles ne sont pas fournis avec l\'application, si bien que le premier lancement nécessite une connexion réseau.',
          'Le développeur, Andriy Druk, figure sous ce nom sur Google Play et publie le projet sur son propre compte GitHub. Le projet n\'a aucun lien avec des produits aux noms voisins, comme les outils Playground des fournisseurs d\'IA cloud.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**LM Playground est une application de boutique : installez-la depuis Google Play, le seul canal vers lequel pointent le projet et son site.** GitHub sert au code source et aux notes de version ; la page des versions ne propose aucun fichier APK.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) (gratuite ; version minimale d\'Android non indiquée)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[lmplayground.app](https://lmplayground.app/)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité de LM Playground](https://www.andriydruk.com/privacy-policy-for-lm-playground)',
          },
          {
            'Plateforme': 'Code source',
            'Où la trouver': '[GitHub](https://github.com/andriydruk/LMPlayground) (MIT)',
          },
        ],
        note: 'Version et actualité vérifiées le 16 octobre 2026 : la dernière version sur GitHub est la 1.10.1, publiée le 12 octobre 2026 (l\'en-tête du site affiche encore la 1.10.0). Google Play indique une mise à jour le 8 octobre 2026 mais n\'affiche pas le numéro de build ; la version de Play peut donc être plus ancienne que la dernière version GitHub.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La mise en route suit l\'ordre décrit dans le README et la fiche Play ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Installez LM Playground depuis Google Play ; selon la fiche, aucun compte ni clé d\'API n\'est requis.',
          },
          {
            title: 'Télécharger un modèle en Wi-Fi',
            whyItMatters: 'Choisissez un modèle dans la liste intégrée ou chargez votre propre fichier GGUF. Le plus petit modèle pèse 267 Mo, les modèles de 4B à 8B paramètres gagnent à disposer de 8 Go de RAM ou plus selon la fiche Play, et les téléchargements reprennent après une interruption.',
          },
          {
            title: 'Discuter, joindre un fichier ou envoyer une photo',
            whyItMatters: 'Lancez une conversation, joignez un document et posez-lui des questions, ou envoyez une image à un modèle compatible avec la vision. La recherche documentaire et la dictée téléchargent chacune un petit modèle auxiliaire, une seule fois, à la première utilisation.',
          },
          {
            title: 'Activer les outils, si souhaité',
            whyItMatters: 'Les outils sont désactivés par défaut et peuvent être activés modèle par modèle dans les Réglages. Laissez-les désactivés pour garder chaque conversation sur l\'appareil.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quels modèles propose-t-elle ?',
        itemHeadings: true,
        columns: ['Famille de modèles', 'Tailles', 'Remarques'],
        rows: [
          {
            'Famille de modèles': 'Qwen 3.5 / Qwen 3',
            'Tailles': '0.8B, 2B, 4B / 0.6B, 1.7B, 4B',
            'Remarques': 'Les entrées Qwen 3.5 acceptent des images',
          },
          {
            'Famille de modèles': 'Gemma 4 / Gemma 3n / Gemma 3',
            'Tailles': 'E2B, E4B, 12B / E2B, E4B / 1B, 4B',
            'Remarques': 'Vision sur Gemma 4 E4B et Gemma 3 4B selon le README',
          },
          {
            'Famille de modèles': 'GPT-OSS',
            'Tailles': '20B',
            'Remarques': 'Demande un téléphone haut de gamme avec beaucoup de mémoire selon la fiche Play',
          },
          {
            'Famille de modèles': 'Llama 3.2 / 3.1',
            'Tailles': '1B, 3B / 8B',
            'Remarques': 'De Meta',
          },
          {
            'Famille de modèles': 'Granite, Nemotron, Phi-4, DeepSeek R1 Distill',
            'Tailles': 'Granite 4.x de 3B à 8B ; Nemotron 4B ; Phi-4 mini 3.8B ; R1 Distill 1.5B, 7B',
            'Remarques': 'DeepSeek R1 et Nemotron affichent leurs étapes de réflexion',
          },
          {
            'Famille de modèles': 'LFM2.5, MiniCPM5, SmolLM3, Spark-X2.5, Ministral 3',
            'Tailles': 'LFM2.5 de 350M à 2.6B ; LFM2.5 VL de 450M à 3B ; Ministral 3 3B, 8B',
            'Remarques': 'Ministral 3 et LFM2.5 VL acceptent des images',
          },
        ],
        note: 'Les entrées proviennent du README du dépôt au 16 octobre 2026 ; la plupart utilisent la quantification Q4_K_M, Qwen 3.5 utilise Q3_K_M et GPT-OSS est fourni dans son format natif MXFP4. La fiche Play cite une liste plus courte de dix familles, et le catalogue change à chaque version.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du README, du site, des notes de version ou de la fiche Play ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Questions-réponses sur documents.** Joignez un fichier PDF, Word, EPUB, HTML, Markdown ou texte brut ; une recherche sémantique sur l\'appareil trouve les passages pertinents et les transmet au modèle. Elle télécharge une seule fois un modèle d\'embeddings de 278 Mo.',
          '**Entrée d\'images.** Joignez une photo de la galerie ou prenez-en une avec l\'appareil photo, puis demandez à un modèle compatible avec la vision de la décrire ou d\'en lire le texte.',
          '**Dictée vocale.** Ajoutée dans la version 1.10.0 : appuyez sur le micro et parlez ; la reconnaissance s\'exécute sur le téléphone dans 35 langues après un téléchargement unique d\'un modèle vocal de 718 Mo. Elle figure sur le site et dans les notes de version, mais pas dans la description Play.',
          '**Affichage du raisonnement.** Les étapes de réflexion de modèles comme DeepSeek R1 et Nemotron apparaissent dans une section repliable avec un budget de réflexion réglable.',
          '**Contrôle et historique.** Réglages par modèle (taille du contexte, température, Top-P, Top-K, Min-P, pénalité de répétition, seed), prompts système réutilisables et historique de conversations avec recherche, épinglage, renommage et suppression.',
          '**Outils.** Les modèles compatibles peuvent rechercher sur le web, récupérer une page et exécuter du JavaScript dans un bac à sable ; chaque outil est désactivé par défaut.',
          '**Génération en arrière-plan et stockage.** Les réponses continuent lorsque vous quittez l\'application, les modèles peuvent se trouver dans n\'importe quel dossier ou sur une carte SD, et l\'interface est traduite en 28 langues.',
        ],
        note: 'La description Play, le README et le site énumèrent des fonctions légèrement différentes (la dictée et les 28 langues n\'apparaissent que sur le site) ; la version actuelle de l\'application fait donc foi.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**L\'usage de base est conçu pour rester hors ligne : le site affirme zéro appel réseau pendant l\'inférence, et la section Sécurité des données de Google Play déclare « Aucune donnée collectée » et « Aucune donnée partagée avec des tiers ».** La [politique de confidentialité](https://www.andriydruk.com/privacy-policy-for-lm-playground) indique que le développeur ne collecte aucune information personnelle ni non personnelle.',
          'Cette politique est entrée en vigueur le 16 mars 2024 et ne décrit l\'accès à internet que comme l\'autorisation qui permet à l\'application de télécharger des modèles. Les outils de recherche web et de récupération de pages sont arrivés plus tard ; les sources n\'indiquent pas quel service de recherche reçoit une requête. Considérez donc ces deux outils comme la partie qui passe par internet et laissez-les désactivés pour les conversations confidentielles.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code source est public : ces affirmations peuvent donc être vérifiées par quiconque compile l\'application, mais PromptQuorum n\'a audité ni le code ni le trafic réseau.',
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
            'En pratique': 'Pas de compte ni d\'abonnement, et le code sous licence MIT peut être lu et compilé.',
            'Limite / réserve': 'Un seul développeur la maintient ; les sources n\'indiquent aucun engagement de support.',
          },
          {
            'Avantage': 'Vos propres fichiers GGUF',
            'En pratique': 'Chargez des fichiers de modèles depuis n\'importe quel dossier, en plus du catalogue intégré.',
            'Limite / réserve': 'Des avis Play que nous avons lus jugent le chargement de modèles externes aléatoire ; il s\'agit de retours individuels d\'utilisateurs.',
          },
          {
            'Avantage': 'Documents, photos, voix',
            'En pratique': 'Une seule application couvre les questions sur fichiers, l\'entrée d\'images et la dictée, le tout sur l\'appareil.',
            'Limite / réserve': 'La qualité dépend du petit modèle chargé, et les modèles auxiliaires ajoutent des téléchargements.',
          },
          {
            'Avantage': 'Développement actif',
            'En pratique': 'Des versions fréquentes ajoutent de nouveaux modèles et des correctifs, comme celui du plantage de la vision dans la 1.10.1.',
            'Limite / réserve': 'Avec des changements rapides, la version Play, le site et GitHub peuvent afficher des versions différentes.',
          },
          {
            'Avantage': 'Outils web facultatifs',
            'En pratique': 'Les modèles peuvent consulter des pages récentes lorsque vous activez les outils.',
            'Limite / réserve': 'Passe par internet, et un utilisateur Play a signalé que le modèle tournait en boucle pendant sa « réflexion » avec la recherche web activée.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les utilisateurs d\'Android qui veulent une application de chat hors ligne gratuite et vérifiable.** La licence MIT et le dépôt public permettent de la contrôler.',
          '**Ceux qui veulent interroger leurs propres fichiers en privé.** Les questions-réponses sur documents avec recherche sur l\'appareil sont une fonction phare.',
          '**Les bidouilleurs qui apportent leurs propres modèles.** Le chargement de GGUF personnalisés et les réglages d\'échantillonnage par modèle sont faits pour cela.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Les performances en pratique.** PromptQuorum n\'a pas exécuté l\'application : la vitesse, la consommation de batterie et la qualité des réponses ne sont donc pas évaluées.',
          '**Quelle version Google Play distribue.** La fiche indique une date de mise à jour mais ni numéro de version ni version minimale d\'Android.',
          '**Quel service de recherche l\'outil web utilise.** Les sources lues ne le nomment pas.',
          '**Si la politique de confidentialité couvre les outils web.** Le texte de la politique est antérieur à ces outils et aucune mise à jour n\'a été trouvée.',
          '**Pas pour les utilisateurs d\'iPhone, de Mac ou de Windows.** Les sources décrivent une application uniquement Android.',
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
            'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Chat open source sur ExecuTorch, avec Q&R sur documents et benchmarks',
          },
          {
            'Application': '[Off Grid](/fr/power-local-llm/off-grid-ai-review)',
            'Plateformes': 'iOS, Android, Mac, Windows',
            'Prix / licence': 'Freemium / MIT',
            'Différence clé': 'Suite d\'IA hors ligne pour téléphone et ordinateur',
          },
          {
            'Application': '[LLM Hub](/fr/power-local-llm/llm-hub-review)',
            'Plateformes': 'Android, iOS',
            'Prix / licence': 'Freemium / code source disponible',
            'Différence clé': 'Suite plus large avec agent, image et traduction',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qui développe LM Playground ?',
            a: 'Andriy Druk, un développeur indépendant qui publie l\'application sur Google Play sous son propre nom et le code sur GitHub depuis mars 2024.',
          },
          {
            q: 'Existe-t-il une version pour iPhone ?',
            a: 'Aucune version pour iPhone, ordinateur ou web n\'apparaît dans le README, sur le site ou dans la fiche Play ; le projet se présente comme une application Android.',
          },
          {
            q: 'Puis-je charger mes propres modèles ?',
            a: 'Oui. Le README mentionne des fichiers de modèles GGUF personnalisés, de toute provenance, en plus du catalogue intégré ; les formats autres que GGUF n\'étaient pas précisés.',
          },
          {
            q: 'De combien de mémoire ai-je besoin ?',
            a: 'Il n\'y a pas de minimum fixe. La fiche indique que le plus petit modèle pèse 267 Mo, que les modèles de 4B à 8B gagnent à disposer de 8 Go de RAM ou plus, et que le modèle de 20B exige un appareil haut de gamme.',
          },
          {
            q: 'La dictée vocale fonctionne-t-elle hors ligne ?',
            a: 'Selon le site et les notes de version, oui, après un téléchargement unique d\'un modèle vocal. Elle n\'est pas mentionnée dans la description Play ; vérifiez donc votre version installée.',
          },
          {
            q: 'Où puis-je lire le code source ?',
            a: 'Le code complet se trouve dans le [dépôt LMPlayground](https://github.com/andriydruk/LMPlayground) sur GitHub, sous licence MIT.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LM Playground est un moyen gratuit, sous licence MIT, d\'exécuter des modèles GGUF sur un téléphone Android : elle associe un vaste catalogue intégré à vos propres fichiers de modèles, des questions-réponses sur documents sur l\'appareil, l\'envoi de photos et la dictée, et son dépôt public permet, en principe, de vérifier ses affirmations sur la confidentialité. En contrepartie, elle est réservée à Android, maintenue par un seul développeur, et sa fiche Play n\'affiche pas le numéro de build ; la version installée peut donc différer de la dernière version GitHub. Elle convient aux utilisateurs d\'Android qui veulent une application vérifiable et pensée d\'abord pour le hors ligne ; sur iPhone ou ordinateur, on peut comparer [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Off Grid](/fr/power-local-llm/off-grid-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LM Playground sur Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) — description, développeur, nombre de téléchargements, note, section Sécurité des données et date de dernière mise à jour, consultés le 16 octobre 2026.',
          '[Site web de LM Playground](https://lmplayground.app/) — fonctions, bibliothèque de modèles, langues et version affichée, consultés le 16 octobre 2026.',
          '[Politique de confidentialité](https://www.andriydruk.com/privacy-policy-for-lm-playground) — déclarations sur la collecte de données et les autorisations.',
          '[LMPlayground sur GitHub](https://github.com/andriydruk/LMPlayground) — README, fichier de licence MIT, versions, notes de version et fichier de version.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l\'appareil, pour iOS et Android.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne open source avec questions-réponses sur documents.',
          '[Avis Off Grid](/fr/power-local-llm/off-grid-ai-review) — une suite d\'IA hors ligne pour téléphone et ordinateur.',
          '[Avis LLM Hub](/fr/power-local-llm/llm-hub-review) — une suite d\'IA sur l\'appareil pour Android et iPhone.',
          '[Meilleures applications de LLM local pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama plus large pour Android.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/lm-playground-review-hero-ja.webp',
    title: 'LM Playgroundレビュー:Android向けオープンソースのオフラインLLMチャット',
    seoTitle: 'LM Playgroundレビュー:無料のオフラインLLMアプリ',
    intro:
      'LM Playgroundは、個人開発者の[Andriy Druk](https://www.andriydruk.com)が公開する無料のMITライセンスのAndroidアプリで、llama.cppを通じて、GGUF形式のオープンウェイトの言語モデルをスマートフォン上で直接動かします。チャットに加えて、端末内のドキュメントQ&A、画像対応モデル向けの写真入力、推論モデルの表示、オプションのツール、音声入力を備えています。本レビューは、[Google Playの掲載情報](https://play.google.com/store/apps/details?id=com.druk.lmplayground)、[公式サイト](https://lmplayground.app/)、[プライバシーポリシー](https://www.andriydruk.com/privacy-policy-for-lm-playground)、公開されている[GitHubリポジトリ](https://github.com/andriydruk/LMPlayground)に基づいており、いずれも2026年10月16日に確認しました。PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'LM Playgroundレビュー:GGUFモデルをオフラインで動かす、無料のMITライセンスのAndroidアプリ。ドキュメントQ&Aと画像入力、モデル、プライバシー、バージョン、制約を解説します。',
    twitterDescription:
      'LM Playgroundレビュー:GGUFモデルでオフラインチャットができるオープンソースのAndroidアプリ。ドキュメント、写真、音声入力に対応し、未確認の点も解説します。',
    audience:
      '言語モデルをスマートフォン上で動かす無料のオープンソースチャットアプリを求めるAndroidユーザーで、どのモデルと機能が提供されているのか、何がオフラインのままなのか、情報源が何を確認していないのかを知りたい方向け。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LM Playground レビュー',
    targetKeywords: [
      'lm playground アプリ レビュー',
      'lm playground android',
      'android オフライン llm 動かす',
      'llama.cpp android アプリ',
      'オープンソース ローカルllm android アプリ',
      'andriy druk lm playground',
      'gguf モデル android アプリ',
    ],
    current_models_mentioned: ['Qwen 3.5', 'Gemma 4', 'GPT-OSS', 'Nemotron 3 Nano', 'Granite 4', 'DeepSeek R1 Distill', 'Phi-4 mini', 'LFM2.5', 'Ministral 3', 'Llama 3.2'],
    current_hardware_mentioned: ['Android', 'ARM'],
    leadAnswerBlock:
      '**LM Playground(2026年10月16日時点のバージョンは1.10.1、Google Playでの最終更新は2026年10月8日)はアカウント不要で、モデルをスマートフォン上で実行するオープンソースのエンジンであるllama.cppを土台にしています。** モデルはHugging Faceから一度ダウンロードすれば、その後はチャット、ドキュメントへの質問、写真入力、音声入力がオフラインで動作します。設計上オンラインになるのは、モデルのダウンロードと、既定ではオフのオプションのWeb検索・ページ取得ツールの2つだけです。',
    quickAnswerTop: {
      ja: {
        question: 'LM Playgroundは無料のオープンソースで、本当にオフラインで動きますか?',
        answer:
          '掲載情報、公式サイト、リポジトリによれば、その通りです。アプリは無料で、Google Playには広告も購入項目も表示されておらず、コードはMITライセンスで、モデルをダウンロードしたあとは推論が端末上で実行されます。例外は、モデルのダウンロード自体と、オプションのWebツールです。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground)で無料、Androidのみ。ソースは[GitHub](https://github.com/andriydruk/LMPlayground)で公開されている。',
          '40以上のモデルを収録した内蔵カタログに加え、任意のフォルダにある独自のGGUFファイルも読み込める。',
          'ドキュメントQ&A、画像入力、推論の表示、モデルごとの設定、システムプロンプト、音声入力。',
          '2026年10月16日の確認時点のストア指標:Google Playで5万以上のダウンロード、479件の評価で星3.9、GitHubのスター161件。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'LM Playgroundとは?', anchor: 'what-is-lm-playground' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '提供されているモデル', anchor: 'models-supported' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワークの利用', anchor: 'privacy' },
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
            text: 'LM Playgroundは、Androidスマートフォンを、オープンウェイトのモデルとチャットし、ご自身のドキュメントについて質問し、画像対応モデルに写真を見せられるプライベートな場所に変えるアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'Google Playからインストールし、モデルを一度ダウンロードすれば、アカウントもインターネット接続もなしにチャットできます。ネットワークが必要なのは、Webツールとモデルのダウンロードだけです。',
          },
        ],
        items: [
          '開発者:個人のAndroid開発者Andriy Druk。プロジェクトは2024年3月からGitHubで公開されており、情報源から分かる限り、1人で進めているプロジェクトである。',
          '料金とライセンス:アカウント不要で無料。ソースコードはMITライセンス。',
          'モデル:Qwen、Gemma、Llama、GPT-OSS、Nemotron、Phi-4、Granite、Mistral、DeepSeek、Liquid AIのモデルを収録した内蔵カタログ(公式サイトでは40以上)と、独自のGGUFファイル。',
          'プラットフォーム:Androidのみ。情報源には、iPhone版、デスクトップ版、Web版の記載はない。',
          '更新状況:Google Playの最終更新は2026年10月8日、GitHubのリリース1.10.1は2026年10月12日であり、いずれの日付も直近である。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月16日に確認したGoogle Playの掲載情報、公式サイト、プライバシーポリシー、公開GitHubリポジトリ(README、ライセンス、リリース、リリースノート)に基づいています。PromptQuorumはアプリのテストやベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-lm-playground',
        title: 'LM Playgroundとは?',
        content: [
          '**LM Playgroundは、クラウドサービスを呼び出す代わりに、言語モデルをローカルで動かすAndroidのチャットアプリです。** [README](https://github.com/andriydruk/LMPlayground)によれば、モデルをダウンロードし、ワンタップで読み込み、オフラインでチャットします。推論エンジンは[llama.cpp](https://github.com/ggml-org/llama.cpp)で、モデルは[Hugging Face](https://huggingface.co/)にあるGGUFファイルです。モデルは同梱されていないため、初回の実行にはネットワーク接続が必要です。',
          '開発者のAndriy DrukはGoogle Playでその名前で表示されており、自身のGitHubアカウントでプロジェクトを公開しています。このプロジェクトは、クラウドAIベンダーのPlaygroundツールなど、名前の似た製品とは無関係です。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**LM Playgroundはストアアプリです。プロジェクトとそのサイトが案内している唯一の入手先であるGoogle Playからインストールしてください。** GitHubはソースコードとリリースノート用で、リリースページにAPKファイルはありません。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground)(無料。最小Androidバージョンは表示なし)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[lmplayground.app](https://lmplayground.app/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[LM Playgroundのプライバシーポリシー](https://www.andriydruk.com/privacy-policy-for-lm-playground)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHub](https://github.com/andriydruk/LMPlayground)(MIT)',
          },
        ],
        note: '2026年10月16日に確認したバージョンと更新状況:GitHubの最新リリースは2026年10月12日に公開された1.10.1です(公式サイトのヘッダーには依然として1.10.0と表示されています)。Google Playの最終更新日は2026年10月8日と表示されていますが、ビルド番号は表示されないため、Play版のビルドはGitHubの最新リリースより古い可能性があります。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**セットアップは、READMEとPlayの掲載情報に記載された順序に従います。PromptQuorumはこれらの手順を実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'Google PlayからLM Playgroundをインストールします。掲載情報によれば、アカウントやAPIキーは不要です。',
          },
          {
            title: 'Wi-Fiでモデルをダウンロードする',
            whyItMatters: '内蔵リストからモデルを選ぶか、独自のGGUFファイルを読み込みます。最小のモデルは267 MBで、Playの掲載情報によれば、4B〜8Bパラメータのモデルは8 GB以上のRAMがあると有利で、ダウンロードは中断後に再開されます。',
          },
          {
            title: 'チャットする、ファイルを添付する、写真を送る',
            whyItMatters: 'チャットを始めるか、ドキュメントを添付して質問するか、画像対応モデルに画像を送ります。ドキュメント検索と音声入力は、それぞれ初回利用時に小さな補助モデルを一度ダウンロードします。',
          },
          {
            title: '必要に応じてツールをオンにする',
            whyItMatters: 'ツールは既定ではオフで、設定でモデルごとに有効にできます。すべてのチャットを端末上にとどめるには、オフのままにしてください。',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '提供されているモデル',
        itemHeadings: true,
        columns: ['モデルファミリー', 'サイズ', '備考'],
        rows: [
          {
            'モデルファミリー': 'Qwen 3.5 / Qwen 3',
            'サイズ': '0.8B、2B、4B / 0.6B、1.7B、4B',
            '備考': 'Qwen 3.5の項目は画像を受け付ける',
          },
          {
            'モデルファミリー': 'Gemma 4 / Gemma 3n / Gemma 3',
            'サイズ': 'E2B、E4B、12B / E2B、E4B / 1B、4B',
            '備考': 'READMEによれば、Gemma 4 E4BとGemma 3 4Bは画像対応',
          },
          {
            'モデルファミリー': 'GPT-OSS',
            'サイズ': '20B',
            '備考': 'Playの掲載情報によれば、メモリを多く積んだハイエンドスマートフォンが必要',
          },
          {
            'モデルファミリー': 'Llama 3.2 / 3.1',
            'サイズ': '1B、3B / 8B',
            '備考': 'Meta提供',
          },
          {
            'モデルファミリー': 'Granite、Nemotron、Phi-4、DeepSeek R1 Distill',
            'サイズ': 'Granite 4.xは3B〜8B、Nemotronは4B、Phi-4 miniは3.8B、R1 Distillは1.5B・7B',
            '備考': 'DeepSeek R1とNemotronは思考ステップを表示する',
          },
          {
            'モデルファミリー': 'LFM2.5、MiniCPM5、SmolLM3、Spark-X2.5、Ministral 3',
            'サイズ': 'LFM2.5は350M〜2.6B、LFM2.5 VLは450M〜3B、Ministral 3は3B・8B',
            '備考': 'Ministral 3とLFM2.5 VLは画像を受け付ける',
          },
        ],
        note: '項目は2026年10月16日時点のリポジトリのREADMEに基づいています。大半はQ4_K_M量子化を使い、Qwen 3.5はQ3_K_M、GPT-OSSはネイティブのMXFP4形式で提供されます。Playの掲載情報は10ファミリーというより短いリストを挙げており、カタログはリリースごとに変わります。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、README、公式サイト、リリースノート、またはPlayの掲載情報に基づくもので、独自にテストしたものはありません。**',
        ],
        items: [
          '**ドキュメントQ&A。** PDF、Word、EPUB、HTML、Markdown、プレーンテキストのファイルを添付すると、端末内のセマンティック検索が該当箇所を見つけてモデルに渡す。278 MBの埋め込みモデルを一度ダウンロードする。',
          '**画像入力。** ギャラリーの写真を添付するか、カメラで撮影して、画像対応モデルに内容の説明や文字の読み取りを依頼できる。',
          '**音声入力。** バージョン1.10.0で追加。マイクをタップして話すと、718 MBの音声モデルを一度ダウンロードしたあと、35言語の認識が端末上で実行される。公式サイトとリリースノートには記載があるが、Playの説明にはない。',
          '**推論の表示。** DeepSeek R1やNemotronなどのモデルの思考ステップが、折りたたみ可能なセクションに表示され、思考の予算を調整できる。',
          '**操作と履歴。** モデルごとの設定(コンテキストサイズ、temperature、Top-P、Top-K、Min-P、繰り返しペナルティ、シード)、再利用できるシステムプロンプト、固定・名前変更・削除ができる検索可能なチャット履歴。',
          '**ツール。** 対応モデルは、Web検索、ページの取得、サンドボックス内でのJavaScript実行ができる。各ツールは既定ではオフ。',
          '**バックグラウンド生成とストレージ。** アプリを離れても返信の生成は続き、モデルは任意のフォルダやSDカードに置け、インターフェースは28言語に翻訳されている。',
        ],
        note: 'Playの説明、README、公式サイトでは、挙げられている機能が少しずつ異なります(音声入力と28言語は公式サイトにのみ記載)。そのため、最終的な判断基準はアプリの現行ビルドです。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワークの利用',
        content: [
          '**中核的な使い方は設計上オフラインです。公式サイトは推論時のネットワーク呼び出しがゼロだと述べ、Google Playのデータセーフティのセクションは「収集するデータなし」「第三者と共有するデータなし」と申告しています。** [プライバシーポリシー](https://www.andriydruk.com/privacy-policy-for-lm-playground)には、開発者が個人情報も非個人情報も収集しないと記載されています。',
          'このポリシーは2024年3月16日に発効しており、インターネットアクセスについては、アプリがモデルをダウンロードするための権限としてのみ説明しています。Web検索とページ取得のツールはそのあとに追加されたもので、どの検索サービスがクエリを受け取るのかは情報源に記載がないため、この2つのツールはオンラインになる部分として扱い、機密性の高いチャットではオフのままにしてください。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ソースコードは公開されているため、アプリをビルドすれば誰でもこれらの主張を確認できますが、PromptQuorumはコードもネットワーク通信も監査していません。',
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
            '制約・注意点': '1人の開発者が保守しており、サポートの約束は情報源に記載されていない。',
          },
          {
            '利点': '独自のGGUFを使える',
            '実際の使用での意味': '内蔵カタログに加えて、任意のフォルダからモデルファイルを読み込める。',
            '制約・注意点': '確認したPlayのレビューには、外部モデルの読み込みは成功したりしなかったりするというものがある。これらは個々のユーザーの報告である。',
          },
          {
            '利点': 'ドキュメント、写真、音声',
            '実際の使用での意味': '1つのアプリで、ファイルへの質問、画像入力、音声入力をすべて端末上で行える。',
            '制約・注意点': '品質は読み込む小型モデルに左右され、補助モデルの分だけダウンロードが増える。',
          },
          {
            '利点': '活発な開発',
            '実際の使用での意味': '頻繁なリリースで新しいモデルや修正が加わる(例:1.10.1の画像入力のクラッシュ修正)。',
            '制約・注意点': '変化が速いため、Play版、公式サイト、GitHubで表示されるバージョンが異なることがある。',
          },
          {
            '利点': 'オプションのWebツール',
            '実際の使用での意味': 'ツールを有効にすると、モデルが最新のページを調べられる。',
            '制約・注意点': 'オンラインになる。また、Webツールをオンにすると、モデルが「思考中」にループしたとPlayのレビュアーが報告している。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**無料で監査可能なオフラインチャットアプリを使いたいAndroidユーザー。** MITライセンスと公開リポジトリにより、確認できる。',
          '**ご自身のファイルについて、プライベートに質問したい人。** 端末内検索によるドキュメントQ&Aは目玉機能である。',
          '**独自のモデルを持ち込んで試したい人。** 独自のGGUFの読み込みとモデルごとのサンプリング設定は、そのために作られている。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での性能。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、回答品質は評価していない。',
          '**Google Playが配信しているビルド。** 掲載情報には更新日は表示されるが、バージョン番号も最小Androidバージョンも表示されない。',
          '**Webツールが使う検索サービス。** 読み取れた情報源には名前が挙がっていない。',
          '**プライバシーポリシーがWebツールを対象にしているか。** ポリシーの文面はWebツールの追加より前のもので、更新された形跡は見つからなかった。',
          '**iPhone、Mac、Windowsのユーザーには不向き。** 情報源は、Android専用のアプリだと説明している。',
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
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': 'ExecuTorch上のオープンソースチャットで、ドキュメントQ&Aとベンチマークを備える',
          },
          {
            'アプリ': '[Off Grid](/ja/power-local-llm/off-grid-ai-review)',
            'プラットフォーム': 'iOS、Android、Mac、Windows',
            '料金/ライセンス': 'フリーミアム / MIT',
            '主な違い': 'スマートフォンとデスクトップにまたがるオフラインAIスイート',
          },
          {
            'アプリ': '[LLM Hub](/ja/power-local-llm/llm-hub-review)',
            'プラットフォーム': 'Android、iOS',
            '料金/ライセンス': 'フリーミアム / ソースアベイラブル',
            '主な違い': 'エージェント、画像、翻訳の機能を備えた、より幅広いスイート',
          },
        ],
        note: '競合の詳細は頻繁に変わります。各アプリの現在の料金、ライセンス、対応プラットフォームは、それぞれの掲載情報で確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'LM Playgroundを作っているのは誰ですか?',
            a: '個人開発者のAndriy Drukで、Google Playでは自身の名前でアプリを公開し、2024年3月からGitHubでコードを公開しています。',
          },
          {
            q: 'iPhone版はありますか?',
            a: 'README、公式サイト、Playの掲載情報には、iPhone版、デスクトップ版、Web版の記載はなく、プロジェクト自身もAndroidアプリケーションだと説明しています。',
          },
          {
            q: '独自のモデルを読み込めますか?',
            a: 'はい。READMEには、内蔵カタログとは別に、任意の入手元のGGUFモデルファイルを読み込めると記載されています。GGUF以外の形式については記載がありませんでした。',
          },
          {
            q: 'どれくらいのメモリが必要ですか?',
            a: '決まった最小要件はありません。掲載情報によれば、最小のモデルは267 MBで、4B〜8Bのモデルは8 GB以上のRAMがあると有利で、20Bのモデルにはハイエンドの端末が必要です。',
          },
          {
            q: '音声入力はオフラインで動きますか?',
            a: '公式サイトとリリースノートによれば、音声モデルを一度ダウンロードしたあとは動作します。Playの説明には記載がないため、お使いのバージョンで確認してください。',
          },
          {
            q: 'ソースコードはどこで読めますか?',
            a: 'コード全体は、GitHubの[LMPlaygroundリポジトリ](https://github.com/andriydruk/LMPlayground)でMITライセンスの下で公開されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'LM Playgroundは、AndroidスマートフォンでGGUFモデルを動かすための、無料でMITライセンスの選択肢です。大規模な内蔵カタログと独自のモデルファイル、端末内のドキュメントQ&A、写真入力、音声入力を組み合わせており、公開リポジトリがあるため、プライバシーに関する主張も原理的には確認できます。一方で、Android専用で、1人の開発者が保守しており、Playの掲載情報にはビルド番号が表示されないため、インストールされるバージョンがGitHubの最新リリースと異なる場合があります。監査可能でオフライン優先のアプリを求めるAndroidユーザーに向いています。iPhoneやデスクトップを使う方は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Off Grid](/ja/power-local-llm/off-grid-ai-review)と比較できます。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのLM Playground](https://play.google.com/store/apps/details?id=com.druk.lmplayground) — 説明、開発者、ダウンロード数、評価、データセーフティのセクション、最終更新日。2026年10月16日確認。',
          '[LM Playgroundの公式サイト](https://lmplayground.app/) — 機能、モデルライブラリ、対応言語、表示されているバージョン。2026年10月16日確認。',
          '[プライバシーポリシー](https://www.andriydruk.com/privacy-policy-for-lm-playground) — データ収集と権限に関する記述。',
          '[GitHubのLMPlayground](https://github.com/andriydruk/LMPlayground) — README、MITライセンスファイル、リリース、リリースノート、バージョンファイル。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの、無料のオープンソース端末内チャットクライアント。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — ドキュメントQ&Aを備えた、オープンソースのオフラインチャットアプリ。',
          '[Off Gridレビュー](/ja/power-local-llm/off-grid-ai-review) — スマートフォンとデスクトップ向けのオフラインAIスイート。',
          '[LLM Hubレビュー](/ja/power-local-llm/llm-hub-review) — AndroidとiPhone向けの端末内AIスイート。',
          '[2026年版 Android向けおすすめローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けのより広い比較記事。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/lm-playground-review-hero-pt.webp',
    title: 'LM Playground: Análise do App de Chat de IA Offline e Open Source para Android',
    seoTitle: 'Análise do LM Playground: App de LLM Offline Grátis',
    intro:
      'O LM Playground é um app Android gratuito, com licença MIT, do desenvolvedor independente [Andriy Druk](https://www.andriydruk.com), que roda modelos de linguagem de peso aberto no formato GGUF diretamente no celular por meio do llama.cpp. Além do chat, oferece perguntas e respostas sobre documentos no próprio dispositivo, envio de fotos para modelos de visão, exibição do raciocínio dos modelos, ferramentas opcionais e ditado por voz. Esta análise se baseia na [ficha do Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground), no [site oficial](https://lmplayground.app/), na [política de privacidade](https://www.andriydruk.com/privacy-policy-for-lm-playground) e no [repositório público do GitHub](https://github.com/andriydruk/LMPlayground), consultados em 16 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do LM Playground: app Android gratuito (MIT) que roda modelos GGUF offline, com perguntas sobre documentos e visão. Modelos, privacidade e limites.',
    twitterDescription:
      'Análise do LM Playground: um app Android open source para chat offline com modelos GGUF, além de documentos, fotos, ditado e dúvidas em aberto.',
    audience:
      'Usuários de Android que querem um app de chat gratuito e de código aberto que rode modelos de linguagem no celular e que precisam saber quais modelos e recursos ele oferece, o que fica offline e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do LM Playground',
    targetKeywords: [
      'lm playground app análise',
      'lm playground android',
      'rodar llm no android offline',
      'app android llama.cpp',
      'app de llm local open source android',
      'andriy druk lm playground',
      'app android modelos gguf',
    ],
    current_models_mentioned: ['Qwen 3.5', 'Gemma 4', 'GPT-OSS', 'Nemotron 3 Nano', 'Granite 4', 'DeepSeek R1 Distill', 'Phi-4 mini', 'LFM2.5', 'Ministral 3', 'Llama 3.2'],
    current_hardware_mentioned: ['Android', 'ARM'],
    leadAnswerBlock:
      '**O LM Playground (versão 1.10.1 em 16 de outubro de 2026, última atualização no Google Play em 8 de outubro de 2026) não exige conta e é construído sobre o llama.cpp, o motor de código aberto que executa os modelos no celular.** Os modelos são baixados uma vez do Hugging Face e, depois disso, o chat, as perguntas sobre documentos, o envio de fotos e o ditado funcionam offline. Apenas duas coisas ficam online por projeto: o download dos modelos e as ferramentas opcionais de busca na web e de leitura de páginas, que vêm desligadas por padrão.',
    quickAnswerTop: {
      pt: {
        question: 'O LM Playground é gratuito, open source e realmente offline?',
        answer:
          'Segundo a ficha, o site e o repositório, sim: o app é gratuito, sem anúncios nem compras exibidos no Google Play, o código está sob a licença MIT e, depois que um modelo é baixado, a inferência roda no dispositivo. As exceções são o próprio download dos modelos e as ferramentas web opcionais.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground), somente Android; código-fonte no [GitHub](https://github.com/andriydruk/LMPlayground).',
          'Catálogo integrado com mais de 40 modelos, além da possibilidade de carregar seus próprios arquivos GGUF de qualquer pasta.',
          'Perguntas e respostas sobre documentos, entrada de imagens, exibição do raciocínio, configurações por modelo, prompts de sistema e ditado por voz.',
          'Sinais das lojas conforme consultados em 16 de outubro de 2026: mais de 50 mil downloads no Google Play, 3,9 estrelas em 479 avaliações, 161 estrelas no GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o LM Playground?', anchor: 'what-is-lm-playground' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Quais modelos ele oferece?', anchor: 'models-supported' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e uso da rede', anchor: 'privacy' },
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
            text: 'O LM Playground transforma um celular Android em um lugar privado para conversar com modelos de peso aberto, fazer perguntas sobre seus próprios documentos e mostrar fotos a modelos com suporte a visão.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app pelo Google Play, baixa um modelo uma vez e depois conversa sem conta nem conexão com a internet; as ferramentas web e o download de modelos são as únicas partes que precisam da rede.',
          },
        ],
        items: [
          'Desenvolvedor: Andriy Druk, desenvolvedor Android independente; o projeto é público no GitHub desde março de 2024 e, até onde as fontes mostram, é um projeto de uma pessoa só.',
          'Preço e licença: gratuito e sem conta; o código-fonte está sob a licença MIT.',
          'Modelos: um catálogo integrado (o site diz mais de 40) com Qwen, Gemma, Llama, GPT-OSS, Nemotron, Phi-4, Granite, Mistral, DeepSeek e Liquid AI, além dos seus próprios arquivos GGUF.',
          'Plataforma: somente Android; as fontes não mencionam versão para iPhone, desktop ou web.',
          'Atualização: o Google Play mostra a última atualização em 8 de outubro de 2026 e o GitHub mostra a versão 1.10.1 em 12 de outubro de 2026, então ambas as datas são recentes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na ficha do Google Play, no site oficial, na política de privacidade e no repositório público do GitHub (README, licença, releases e notas de versão), consultados em 16 de outubro de 2026. A PromptQuorum não testou nem fez benchmarks do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-lm-playground',
        title: 'O que é o LM Playground?',
        content: [
          '**O LM Playground é um app de chat para Android que roda modelos de linguagem localmente, em vez de chamar um serviço na nuvem.** Segundo o [README](https://github.com/andriydruk/LMPlayground), você baixa os modelos, carrega um com um toque e conversa offline; o motor de inferência é o [llama.cpp](https://github.com/ggml-org/llama.cpp) e os modelos são arquivos GGUF do [Hugging Face](https://huggingface.co/). Os modelos não vêm incluídos, então a primeira execução precisa de conexão com a rede.',
          'O desenvolvedor, Andriy Druk, aparece no Google Play com esse nome e publica o projeto na própria conta do GitHub. O projeto não tem relação com produtos de nome parecido, como as ferramentas Playground de fornecedores de IA na nuvem.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O LM Playground é um app de loja: instale-o pelo Google Play, o único canal para o qual o projeto e o site apontam.** O GitHub serve para o código-fonte e as notas de versão; a página de releases não traz nenhum arquivo APK.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) (gratuito; versão mínima do Android não informada)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[lmplayground.app](https://lmplayground.app/)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Política de privacidade do LM Playground](https://www.andriydruk.com/privacy-policy-for-lm-playground)',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': '[GitHub](https://github.com/andriydruk/LMPlayground) (MIT)',
          },
        ],
        note: 'Versão e atualização conforme verificadas em 16 de outubro de 2026: a release mais recente do GitHub é a 1.10.1, publicada em 12 de outubro de 2026 (o cabeçalho do site ainda mostra a 1.10.0). O Google Play indica o app como atualizado em 8 de outubro de 2026, mas não mostra o número da build, então a build do Play pode ser mais antiga que a release mais recente do GitHub.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**A configuração segue a ordem descrita no README e na ficha do Play; a PromptQuorum não executou esses passos.**',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Instale o LM Playground pelo Google Play; segundo a ficha, não é necessário conta nem chave de API.',
          },
          {
            title: 'Baixar um modelo no Wi-Fi',
            whyItMatters: 'Escolha um modelo da lista integrada ou carregue seu próprio arquivo GGUF. O menor modelo tem 267 MB, modelos de 4B a 8B de parâmetros se beneficiam de 8 GB de RAM ou mais, segundo a ficha do Play, e os downloads são retomados após interrupções.',
          },
          {
            title: 'Conversar, anexar um arquivo ou enviar uma foto',
            whyItMatters: 'Inicie uma conversa, anexe um documento e pergunte sobre ele, ou envie uma imagem a um modelo com suporte a visão. A busca em documentos e o ditado baixam, cada um, um pequeno modelo auxiliar uma vez, no primeiro uso.',
          },
          {
            title: 'Ativar as ferramentas, se quiser',
            whyItMatters: 'As ferramentas vêm desligadas por padrão e podem ser ativadas por modelo em Configurações. Deixe-as desligadas para manter todas as conversas no dispositivo.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quais modelos ele oferece?',
        itemHeadings: true,
        columns: ['Família do modelo', 'Tamanhos', 'Observações'],
        rows: [
          {
            'Família do modelo': 'Qwen 3.5 / Qwen 3',
            'Tamanhos': '0.8B, 2B, 4B / 0.6B, 1.7B, 4B',
            'Observações': 'As entradas do Qwen 3.5 aceitam imagens',
          },
          {
            'Família do modelo': 'Gemma 4 / Gemma 3n / Gemma 3',
            'Tamanhos': 'E2B, E4B, 12B / E2B, E4B / 1B, 4B',
            'Observações': 'Visão no Gemma 4 E4B e no Gemma 3 4B, segundo o README',
          },
          {
            'Família do modelo': 'GPT-OSS',
            'Tamanhos': '20B',
            'Observações': 'Exige um celular topo de linha com bastante memória, segundo a ficha do Play',
          },
          {
            'Família do modelo': 'Llama 3.2 / 3.1',
            'Tamanhos': '1B, 3B / 8B',
            'Observações': 'Da Meta',
          },
          {
            'Família do modelo': 'Granite, Nemotron, Phi-4, DeepSeek R1 Distill',
            'Tamanhos': 'Granite 4.x de 3B a 8B; Nemotron 4B; Phi-4 mini 3.8B; R1 Distill 1.5B, 7B',
            'Observações': 'O DeepSeek R1 e o Nemotron mostram suas etapas de raciocínio',
          },
          {
            'Família do modelo': 'LFM2.5, MiniCPM5, SmolLM3, Spark-X2.5, Ministral 3',
            'Tamanhos': 'LFM2.5 de 350M a 2.6B; LFM2.5 VL de 450M a 3B; Ministral 3 3B, 8B',
            'Observações': 'O Ministral 3 e o LFM2.5 VL aceitam imagens',
          },
        ],
        note: 'As entradas vêm do README do repositório em 16 de outubro de 2026; a maioria usa quantização Q4_K_M, o Qwen 3.5 usa Q3_K_M e o GPT-OSS vem no formato nativo MXFP4. A ficha do Play cita uma lista mais curta, de dez famílias, e o catálogo muda a cada versão.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm do README, do site, das notas de versão ou da ficha do Play; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Perguntas e respostas sobre documentos.** Anexe um arquivo PDF, Word, EPUB, HTML, Markdown ou de texto simples; a busca semântica no dispositivo encontra os trechos relevantes e os entrega ao modelo. Ela baixa uma vez um modelo de embeddings de 278 MB.',
          '**Entrada de imagens.** Anexe uma foto da galeria ou tire uma com a câmera e peça a um modelo com suporte a visão que a descreva ou leia o texto dela.',
          '**Ditado por voz.** Adicionado na versão 1.10.0: toque no microfone e fale; o reconhecimento roda no celular em 35 idiomas, depois de um download único de um modelo de fala de 718 MB. Aparece no site e nas notas de versão, mas não na descrição do Play.',
          '**Exibição do raciocínio.** As etapas de raciocínio de modelos como o DeepSeek R1 e o Nemotron aparecem em uma seção recolhível, com um orçamento de raciocínio ajustável.',
          '**Controle e histórico.** Configurações por modelo (tamanho do contexto, temperatura, Top-P, Top-K, Min-P, penalidade de repetição, seed), prompts de sistema reutilizáveis e um histórico de conversas pesquisável, com fixar, renomear e excluir.',
          '**Ferramentas.** Modelos capazes podem pesquisar na web, buscar uma página e executar JavaScript em um sandbox; cada ferramenta vem desligada por padrão.',
          '**Geração em segundo plano e armazenamento.** As respostas continuam sendo geradas quando você sai do app, os modelos podem ficar em qualquer pasta ou em um cartão SD, e a interface está traduzida para 28 idiomas.',
        ],
        note: 'A descrição do Play, o README e o site listam recursos um pouco diferentes (o ditado e os 28 idiomas aparecem apenas no site), então a build atual do app é a autoridade final.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**O uso principal é offline por projeto: o site afirma zero chamadas de rede durante a inferência, e a seção Segurança dos dados do Google Play declara "No data collected" e "No data shared with third parties".** A [política de privacidade](https://www.andriydruk.com/privacy-policy-for-lm-playground) diz que o desenvolvedor não coleta informações pessoais nem não pessoais.',
          'Essa política entrou em vigor em 16 de março de 2024 e descreve o acesso à internet apenas como a permissão que permite ao app baixar modelos. As ferramentas de busca na web e de leitura de páginas vieram depois; as fontes não dizem qual serviço de busca recebe uma consulta, então trate essas duas ferramentas como a parte que fica online e mantenha-as desligadas em conversas confidenciais.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O código-fonte é público, então essas afirmações podem ser conferidas por quem compilar o app, mas a PromptQuorum não auditou o código nem o tráfego de rede.',
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
            'Limitação / ressalva': 'Um único desenvolvedor o mantém; as fontes não indicam compromisso de suporte.',
          },
          {
            'Benefício': 'Traga seu próprio GGUF',
            'Na prática': 'Carregue arquivos de modelo de qualquer pasta, ao lado do catálogo integrado.',
            'Limitação / ressalva': 'Avaliações do Play que lemos dizem que carregar modelos externos é irregular; são relatos individuais de usuários.',
          },
          {
            'Benefício': 'Documentos, fotos, voz',
            'Na prática': 'Um único app cobre perguntas sobre arquivos, entrada de imagens e ditado, tudo no dispositivo.',
            'Limitação / ressalva': 'A qualidade depende do modelo pequeno que você carregar, e os modelos auxiliares acrescentam downloads.',
          },
          {
            'Benefício': 'Desenvolvimento ativo',
            'Na prática': 'Releases frequentes trazem novos modelos e correções, como a correção de travamento na visão da 1.10.1.',
            'Limitação / ressalva': 'Mudanças rápidas fazem com que a build do Play, o site e o GitHub possam mostrar versões diferentes.',
          },
          {
            'Benefício': 'Ferramentas web opcionais',
            'Na prática': 'Os modelos podem consultar páginas atuais quando você ativa as ferramentas.',
            'Limitação / ressalva': 'Fica online, e um avaliador do Play relatou que o modelo entrou em loop enquanto "pensava" com a busca na web ligada.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Usuários de Android que querem um app de chat offline gratuito e auditável.** A licença MIT e o repositório público o tornam verificável.',
          '**Quem quer questionar seus próprios arquivos com privacidade.** As perguntas e respostas sobre documentos com busca no dispositivo são um dos recursos principais.',
          '**Entusiastas que levam os próprios modelos.** O carregamento de GGUF personalizados e os controles de amostragem por modelo foram feitos para isso.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria e qualidade das respostas não foram avaliados.',
          '**Qual build o Google Play entrega.** A ficha mostra uma data de atualização, mas não o número da versão nem a versão mínima do Android.',
          '**Qual serviço de busca a ferramenta web usa.** As fontes lidas não o nomeiam.',
          '**Se a política de privacidade cobre as ferramentas web.** O texto da política é anterior a elas e não foi encontrado atualizado.',
          '**Não é para quem usa iPhone, Mac ou Windows.** As fontes descrevem um app somente para Android.',
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
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Gratuito / MIT',
            'Principal diferença': 'Chat open source sobre o ExecuTorch, com perguntas sobre documentos e benchmarks',
          },
          {
            'App': '[Off Grid](/pt/power-local-llm/off-grid-ai-review)',
            'Plataformas': 'iOS, Android, Mac, Windows',
            'Preço / licença': 'Freemium / MIT',
            'Principal diferença': 'Suíte de IA offline para celular e desktop',
          },
          {
            'App': '[LLM Hub](/pt/power-local-llm/llm-hub-review)',
            'Plataformas': 'Android, iOS',
            'Preço / licença': 'Freemium / código disponível',
            'Principal diferença': 'Suíte mais ampla, com recursos de agente, imagem e tradução',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais de cada app na própria ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quem faz o LM Playground?',
            a: 'Andriy Druk, desenvolvedor independente que publica o app no Google Play com o próprio nome e o código no GitHub desde março de 2024.',
          },
          {
            q: 'Existe versão para iPhone?',
            a: 'Nenhuma versão para iPhone, desktop ou web aparece no README, no site ou na ficha do Play; o projeto se descreve como um aplicativo Android.',
          },
          {
            q: 'Posso carregar meus próprios modelos?',
            a: 'Sim. O README lista arquivos de modelo GGUF personalizados, de qualquer origem, ao lado do catálogo integrado; os formatos além do GGUF não foram informados.',
          },
          {
            q: 'De quanta memória eu preciso?',
            a: 'Não há um mínimo fixo. A ficha diz que o menor modelo tem 267 MB, que modelos de 4B a 8B se beneficiam de 8 GB de RAM ou mais e que o modelo de 20B exige um dispositivo topo de linha.',
          },
          {
            q: 'O ditado por voz funciona offline?',
            a: 'Segundo o site e as notas de versão, sim, depois de um download único de um modelo de fala. Ele não é mencionado na descrição do Play, então confira a versão instalada.',
          },
          {
            q: 'Onde posso ler o código-fonte?',
            a: 'O código completo está no [repositório LMPlayground](https://github.com/andriydruk/LMPlayground), no GitHub, sob a licença MIT.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O LM Playground é uma forma gratuita, com licença MIT, de rodar modelos GGUF em um celular Android: combina um grande catálogo integrado com seus próprios arquivos de modelo, perguntas e respostas sobre documentos no dispositivo, envio de fotos e ditado, e seu repositório público significa que suas afirmações de privacidade podem, em princípio, ser conferidas. Em contrapartida, ele é somente para Android, é mantido por um único desenvolvedor e a ficha do Play não mostra o número da build, então a versão que você instala pode ser diferente da release mais recente do GitHub. Ele serve a usuários de Android que querem um app auditável e offline em primeiro lugar; quem usa iPhone ou desktop pode comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Off Grid](/pt/power-local-llm/off-grid-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[LM Playground no Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) — descrição, desenvolvedor, número de downloads, avaliação, seção Segurança dos dados e data da última atualização, consultados em 16 de outubro de 2026.',
          '[Site do LM Playground](https://lmplayground.app/) — recursos, biblioteca de modelos, idiomas e versão exibida, consultados em 16 de outubro de 2026.',
          '[Política de privacidade](https://www.andriydruk.com/privacy-policy-for-lm-playground) — declarações sobre coleta de dados e permissões.',
          '[LMPlayground no GitHub](https://github.com/andriydruk/LMPlayground) — README, arquivo de licença MIT, releases, notas de versão e arquivo de versão.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat open source gratuito no dispositivo para iOS e Android.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline open source com perguntas sobre documentos.',
          '[Análise do Off Grid](/pt/power-local-llm/off-grid-ai-review) — uma suíte de IA offline para celular e desktop.',
          '[Análise do LLM Hub](/pt/power-local-llm/llm-hub-review) — uma suíte de IA no dispositivo para Android e iPhone.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/lm-playground-review-hero-ar.webp',
    title: 'مراجعة LM Playground: تطبيق دردشة مفتوح المصدر يعمل دون اتصال لأندرويد',
    seoTitle: 'مراجعة LM Playground: تطبيق LLM مجاني دون اتصال لأندرويد',
    intro:
      'LM Playground تطبيق أندرويد مجاني بترخيص MIT من المطوّر المستقل [Andriy Druk](https://www.andriydruk.com)، يشغّل نماذج لغوية مفتوحة الأوزان بصيغة GGUF مباشرة على الهاتف عبر llama.cpp. وإلى جانب الدردشة يقدّم أسئلة وأجوبة على المستندات داخل الجهاز، وإدخال الصور لنماذج الرؤية، وعرض خطوات التفكير في نماذج الاستدلال، وأدوات اختيارية، وإملاءً صوتياً. تستند هذه المراجعة إلى [صفحة Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) و[الموقع الرسمي](https://lmplayground.app/) و[سياسة الخصوصية](https://www.andriydruk.com/privacy-policy-for-lm-playground) و[مستودع GitHub](https://github.com/andriydruk/LMPlayground) العام، جرى التحقق منها في 16 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عملياً.',
    metaDescription:
      'مراجعة LM Playground: تطبيق أندرويد مجاني بترخيص MIT يشغّل نماذج GGUF دون اتصال مع أسئلة على المستندات ودعم الرؤية. النماذج والخصوصية والإصدارات والحدود.',
    twitterDescription:
      'مراجعة LM Playground: تطبيق أندرويد مفتوح المصدر للدردشة دون اتصال مع نماذج GGUF، إضافة إلى المستندات والصور والإملاء، وأسئلة لا تزال مفتوحة.',
    audience:
      'مستخدمو أندرويد الذين يريدون تطبيق دردشة مجانياً ومفتوح المصدر يشغّل النماذج اللغوية على الهاتف، ويحتاجون إلى معرفة النماذج والميزات التي يقدّمها، وما الذي يبقى دون اتصال، وما الذي لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة LM Playground',
    targetKeywords: [
      'مراجعة تطبيق lm playground',
      'lm playground أندرويد',
      'تشغيل نموذج لغوي على أندرويد دون اتصال',
      'تطبيق llama.cpp لأندرويد',
      'تطبيق نموذج لغوي محلي مفتوح المصدر لأندرويد',
      'andriy druk lm playground',
      'تطبيق نماذج gguf لأندرويد',
    ],
    current_models_mentioned: ['Qwen 3.5', 'Gemma 4', 'GPT-OSS', 'Nemotron 3 Nano', 'Granite 4', 'DeepSeek R1 Distill', 'Phi-4 mini', 'LFM2.5', 'Ministral 3', 'Llama 3.2'],
    current_hardware_mentioned: ['Android', 'ARM'],
    leadAnswerBlock:
      '**LM Playground (الإصدار 1.10.1 اعتباراً من 16 أكتوبر 2026، وآخر تحديث على Google Play في 8 أكتوبر 2026) لا يتطلب حساباً ويعتمد على llama.cpp، وهو المحرك مفتوح المصدر الذي ينفّذ النماذج على الهاتف.** تُنزَّل النماذج مرة واحدة من Hugging Face، وبعدها تعمل الدردشة وأسئلة المستندات وإدخال الصور والإملاء دون اتصال. ولا يتصل بالإنترنت بحسب تصميمه سوى أمرين: تنزيل النماذج، وأداتا البحث على الويب وجلب الصفحات الاختياريتان المعطّلتان افتراضياً.',
    quickAnswerTop: {
      ar: {
        question: 'هل LM Playground مجاني ومفتوح المصدر ويعمل فعلاً دون اتصال؟',
        answer:
          'بحسب صفحته وموقعه ومستودعه، نعم: التطبيق مجاني دون إعلانات أو مشتريات ظاهرة على Google Play، والكود بترخيص MIT، وبعد تنزيل النموذج يجري الاستدلال على الجهاز. والاستثناءات هي عمليات تنزيل النماذج نفسها وأدوات الويب الاختيارية.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) لأندرويد فقط؛ والكود المصدري على [GitHub](https://github.com/andriydruk/LMPlayground).',
          'كتالوج مدمج يضم أكثر من 40 نموذجاً، إضافة إلى تحميل ملفات GGUF الخاصة بك من أي مجلد.',
          'أسئلة وأجوبة على المستندات، وإدخال الصور، وعرض خطوات الاستدلال، وإعدادات لكل نموذج، وموجّهات نظام، وإملاء صوتي.',
          'مؤشرات المتجر بحسب ما جرى التحقق منه في 16 أكتوبر 2026: أكثر من 50 ألف تنزيل على Google Play، وتقييم 3.9 نجمة من 479 تقييماً، و161 نجمة على GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو LM Playground؟', anchor: 'what-is-lm-playground' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'ما النماذج التي يقدّمها؟', anchor: 'models-supported' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
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
            text: 'يحوّل LM Playground هاتف أندرويد إلى مكان خاص للدردشة مع نماذج مفتوحة الأوزان، وطرح الأسئلة على مستنداتك، وعرض الصور على النماذج التي تدعم الرؤية.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من Google Play وتنزّل نموذجاً مرة واحدة، ثم تدردش دون حساب ودون اتصال بالإنترنت؛ وأدوات الويب وتنزيل النماذج هما الجزءان الوحيدان اللذان يحتاجان إلى الشبكة.',
          },
        ],
        items: [
          'المطوّر: Andriy Druk، مطوّر أندرويد مستقل؛ والمشروع عام على GitHub منذ مارس 2024، وهو مشروع فرد واحد بحسب ما تُظهره المصادر.',
          'السعر والترخيص: مجاني دون حساب؛ والكود المصدري بترخيص MIT.',
          'النماذج: كتالوج مدمج (يذكر الموقع أكثر من 40 نموذجاً) من Qwen و Gemma و Llama و GPT-OSS و Nemotron و Phi-4 و Granite و Mistral و DeepSeek و Liquid AI، إضافة إلى ملفات GGUF الخاصة بك.',
          'المنصة: أندرويد فقط؛ ولا تذكر المصادر إصداراً لـ iPhone أو لسطح المكتب أو للويب.',
          'مدى حداثته: يُظهر Google Play آخر تحديث في 8 أكتوبر 2026 ويُظهر GitHub الإصدار 1.10.1 في 12 أكتوبر 2026، لذا فكلا التاريخين حديث.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة Google Play والموقع الرسمي وسياسة الخصوصية ومستودع GitHub العام (ملف README والترخيص والإصدارات وملاحظات الإصدار)، جرى التحقق منها في 16 أكتوبر 2026. لم تختبر PromptQuorum التطبيق ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-lm-playground',
        title: 'ما هو LM Playground؟',
        content: [
          '**LM Playground تطبيق دردشة لأندرويد يشغّل النماذج اللغوية محلياً بدلاً من الاتصال بخدمة سحابية.** وبحسب [README](https://github.com/andriydruk/LMPlayground) الخاص به، تنزّل النماذج وتحمّلها بنقرة واحدة وتدردش دون اتصال؛ ومحرك الاستدلال هو [llama.cpp](https://github.com/ggml-org/llama.cpp) والنماذج ملفات GGUF من [Hugging Face](https://huggingface.co/). والنماذج غير مضمَّنة في التطبيق، لذا يحتاج التشغيل الأول إلى اتصال بالشبكة.',
          'المطوّر Andriy Druk مدرج على Google Play بهذا الاسم، وينشر المشروع في حسابه الشخصي على GitHub. والمشروع لا علاقة له بمنتجات ذات أسماء مشابهة، مثل أدوات Playground التابعة لمزوّدي الذكاء الاصطناعي السحابي.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**LM Playground تطبيق متجر: ثبّته من Google Play، وهي القناة الوحيدة التي يشير إليها المشروع وموقعه.** أما GitHub فللكود المصدري وملاحظات الإصدار، ولا تتضمن صفحة الإصدارات ملف APK.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'أندرويد',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) (مجاني؛ الحد الأدنى لإصدار أندرويد غير معروض)',
          },
          {
            'المنصة': 'الموقع',
            'مكان الحصول عليه': '[lmplayground.app](https://lmplayground.app/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية الخاصة بـ LM Playground](https://www.andriydruk.com/privacy-policy-for-lm-playground)',
          },
          {
            'المنصة': 'الكود المصدري',
            'مكان الحصول عليه': '[GitHub](https://github.com/andriydruk/LMPlayground) (MIT)',
          },
        ],
        note: 'الإصدار ومدى حداثته بحسب ما جرى التحقق منه في 16 أكتوبر 2026: أحدث إصدار على GitHub هو 1.10.1، نُشر في 12 أكتوبر 2026 (ولا يزال رأس الموقع يعرض 1.10.0). ويذكر Google Play أن التطبيق حُدّث في 8 أكتوبر 2026 لكنه لا يعرض رقم البناء، لذا قد يكون بناء Play أقدم من أحدث إصدار على GitHub.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**يتبع الإعداد الترتيب الوارد في README وصفحة Play؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'ثبّت LM Playground من Google Play؛ ولا يلزم حساب أو مفتاح API بحسب الصفحة.',
          },
          {
            title: 'نزّل نموذجاً عبر Wi-Fi',
            whyItMatters: 'اختر نموذجاً من القائمة المدمجة أو حمّل ملف GGUF الخاص بك. أصغر نموذج حجمه 267 ميجابايت، والنماذج من 4B إلى 8B من المعاملات تستفيد من ذاكرة RAM بسعة 8 جيجابايت أو أكثر بحسب صفحة Play، وتُستأنف التنزيلات بعد الانقطاع.',
          },
          {
            title: 'دردش، أو أرفق ملفاً، أو أرسل صورة',
            whyItMatters: 'ابدأ محادثة، أو أرفق مستنداً واسأل عنه، أو أرسل صورة إلى نموذج يدعم الرؤية. ويُنزّل البحث في المستندات والإملاء كلٌّ منهما نموذجاً مساعداً صغيراً مرة واحدة عند أول استخدام.',
          },
          {
            title: 'فعّل الأدوات عند الرغبة',
            whyItMatters: 'الأدوات معطّلة افتراضياً ويمكن تفعيلها لكل نموذج من الإعدادات. اتركها معطّلة لتبقى كل محادثة على الجهاز.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'ما النماذج التي يقدّمها؟',
        itemHeadings: true,
        columns: ['عائلة النموذج', 'الأحجام', 'ملاحظات'],
        rows: [
          {
            'عائلة النموذج': 'Qwen 3.5 / Qwen 3',
            'الأحجام': '0.8B و2B و4B / 0.6B و1.7B و4B',
            'ملاحظات': 'إدخالات Qwen 3.5 تقبل الصور',
          },
          {
            'عائلة النموذج': 'Gemma 4 / Gemma 3n / Gemma 3',
            'الأحجام': 'E2B و E4B و12B / E2B و E4B / 1B و4B',
            'ملاحظات': 'الرؤية في Gemma 4 E4B و Gemma 3 4B بحسب README',
          },
          {
            'عائلة النموذج': 'GPT-OSS',
            'الأحجام': '20B',
            'ملاحظات': 'يتطلب هاتفاً متقدماً بذاكرة كبيرة بحسب صفحة Play',
          },
          {
            'عائلة النموذج': 'Llama 3.2 / 3.1',
            'الأحجام': '1B و3B / 8B',
            'ملاحظات': 'من Meta',
          },
          {
            'عائلة النموذج': 'Granite و Nemotron و Phi-4 و DeepSeek R1 Distill',
            'الأحجام': 'Granite 4.x من 3B إلى 8B؛ Nemotron 4B؛ Phi-4 mini 3.8B؛ R1 Distill 1.5B و7B',
            'ملاحظات': 'يعرض DeepSeek R1 و Nemotron خطوات تفكيرهما',
          },
          {
            'عائلة النموذج': 'LFM2.5 و MiniCPM5 و SmolLM3 و Spark-X2.5 و Ministral 3',
            'الأحجام': 'LFM2.5 من 350M إلى 2.6B؛ LFM2.5 VL من 450M إلى 3B؛ Ministral 3 بحجمي 3B و8B',
            'ملاحظات': 'يقبل Ministral 3 و LFM2.5 VL الصور',
          },
        ],
        note: 'الإدخالات مأخوذة من README المستودع بتاريخ 16 أكتوبر 2026؛ ومعظمها يستخدم تكميم Q4_K_M، ويستخدم Qwen 3.5 التكميم Q3_K_M، ويأتي GPT-OSS بصيغته الأصلية MXFP4. وتذكر صفحة Play قائمة أقصر من عشر عائلات، ويتغير الكتالوج مع كل إصدار.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل عنصر أدناه مأخوذ من README أو الموقع أو ملاحظات الإصدار أو صفحة Play؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**أسئلة وأجوبة على المستندات.** أرفق ملف PDF أو Word أو EPUB أو HTML أو Markdown أو نصاً عادياً؛ يعثر البحث الدلالي على الجهاز على المقاطع ذات الصلة ويمرّرها إلى النموذج. وينزّل نموذج تضمينات (embeddings) بحجم 278 ميجابايت مرة واحدة.',
          '**إدخال الصور.** أرفق صورة من المعرض أو التقطها بالكاميرا واطلب من نموذج يدعم الرؤية وصفها أو قراءة النص فيها.',
          '**الإملاء الصوتي.** أُضيف في الإصدار 1.10.0: اضغط على الميكروفون وتحدّث؛ ويجري التعرّف على الكلام على الهاتف بـ 35 لغة بعد تنزيل نموذج كلام بحجم 718 ميجابايت مرة واحدة. وهو مذكور في الموقع وملاحظات الإصدار لكنه غير مذكور في وصف Play.',
          '**عرض الاستدلال.** تظهر خطوات تفكير نماذج مثل DeepSeek R1 و Nemotron في قسم قابل للطي مع ميزانية تفكير قابلة للضبط.',
          '**التحكم والسجل.** إعدادات لكل نموذج (حجم السياق ودرجة الحرارة و Top-P و Top-K و Min-P وعقوبة التكرار والبذرة seed)، وموجّهات نظام قابلة لإعادة الاستخدام، وسجل محادثات قابل للبحث مع التثبيت وإعادة التسمية والحذف.',
          '**الأدوات.** يمكن للنماذج القادرة البحث على الويب وجلب صفحة وتشغيل JavaScript في بيئة معزولة؛ وكل أداة معطّلة افتراضياً.',
          '**التوليد في الخلفية والتخزين.** تستمر الردود في العمل عند مغادرة التطبيق، ويمكن حفظ النماذج في أي مجلد أو على بطاقة SD، وواجهة التطبيق مترجمة إلى 28 لغة.',
        ],
        note: 'تُدرج صفحة Play و README والموقع ميزات مختلفة قليلاً (فالإملاء و28 لغة يظهران في الموقع فقط)، لذا فالنسخة الحالية من التطبيق هي المرجع الأخير.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**الاستخدام الأساسي مصمَّم ليعمل دون اتصال: يزعم الموقع انعدام أي اتصال بالشبكة أثناء الاستدلال، ويعلن قسم أمان البيانات في Google Play عبارتي "No data collected" و"No data shared with third parties".** وتذكر [سياسة الخصوصية](https://www.andriydruk.com/privacy-policy-for-lm-playground) أن المطوّر لا يجمع أي معلومات شخصية أو غير شخصية.',
          'دخلت هذه السياسة حيز التنفيذ في 16 مارس 2024، وهي تصف الوصول إلى الإنترنت فقط بوصفه الإذن الذي يتيح للتطبيق تنزيل النماذج. وقد أُضيفت أداتا البحث على الويب وجلب الصفحات لاحقاً؛ ولا تذكر المصادر أي خدمة بحث تتلقى الاستعلام، لذا تعامل مع هاتين الأداتين على أنهما الجزء الذي يتصل بالإنترنت، وأبقهما معطّلتين في المحادثات السرية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الكود المصدري عام، لذا يمكن لأي شخص يبني التطبيق التحقق من هذه الادعاءات، لكن PromptQuorum لم تدقق الكود ولا حركة الشبكة.',
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
            'القيد / التحفّظ': 'يصونه مطوّر واحد؛ ولا تذكر المصادر أي التزام بالدعم.',
          },
          {
            'الميزة': 'أحضر ملف GGUF الخاص بك',
            'المعنى في الاستخدام': 'حمّل ملفات النماذج من أي مجلد إلى جانب الكتالوج المدمج.',
            'القيد / التحفّظ': 'تصف مراجعات Play التي قرأناها تحميل النماذج الخارجية بأنه يعمل أحياناً ولا يعمل أحياناً؛ وهي تقارير فردية من المستخدمين.',
          },
          {
            'الميزة': 'مستندات وصور وصوت',
            'المعنى في الاستخدام': 'تطبيق واحد يغطي أسئلة الملفات وإدخال الصور والإملاء، كلها على الجهاز.',
            'القيد / التحفّظ': 'تعتمد الجودة على النموذج الصغير الذي تحمّله، وتضيف النماذج المساعدة تنزيلات إضافية.',
          },
          {
            'الميزة': 'تطوير نشط',
            'المعنى في الاستخدام': 'تضيف الإصدارات المتكررة نماذج وإصلاحات، مثل إصلاح انهيار الرؤية في 1.10.1.',
            'القيد / التحفّظ': 'التغيّر السريع يعني أن بناء Play والموقع و GitHub قد تعرض إصدارات مختلفة.',
          },
          {
            'الميزة': 'أدوات ويب اختيارية',
            'المعنى في الاستخدام': 'يمكن للنماذج الاطلاع على صفحات حديثة عند تفعيل الأدوات.',
            'القيد / التحفّظ': 'يتصل بالإنترنت، وأفاد أحد مراجعي Play بأن النموذج يدخل في حلقة تكرار أثناء "التفكير" مع تفعيل البحث على الويب.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو أندرويد الذين يريدون تطبيق دردشة مجانياً وقابلاً للتدقيق يعمل دون اتصال.** ترخيص MIT والمستودع العام يجعلانه قابلاً للفحص.',
          '**من يريدون طرح أسئلة على ملفاتهم الخاصة بسرية.** الأسئلة والأجوبة على المستندات مع البحث على الجهاز ميزة رئيسية.',
          '**المهتمون بالتجربة الذين يحضرون نماذجهم الخاصة.** تحميل ملفات GGUF المخصصة وعناصر التحكم في أخذ العينات لكل نموذج مصمَّمة لذلك.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم السرعة واستهلاك البطارية وجودة الإجابات.',
          '**أي بناء يقدّمه Google Play.** تُظهر الصفحة تاريخ تحديث لكن دون رقم إصدار أو حد أدنى لإصدار أندرويد.',
          '**أي خدمة بحث تستخدمها أداة الويب.** لا تذكرها المصادر التي قُرئت.',
          '**هل تغطي سياسة الخصوصية أدوات الويب.** نص السياسة أسبق منها ولم يُعثر على نسخة محدَّثة له.',
          '**غير مناسب لمستخدمي iPhone أو Mac أو Windows.** تصف المصادر تطبيقاً لأندرويد فقط.',
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
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر مبنية على ExecuTorch مع أسئلة على المستندات واختبارات سرعة',
          },
          {
            'التطبيق': '[Off Grid](/ar/power-local-llm/off-grid-ai-review)',
            'المنصات': 'iOS، أندرويد، Mac، Windows',
            'السعر / الترخيص': 'مجاني جزئياً (Freemium) / MIT',
            'الفرق الرئيسي': 'مجموعة ذكاء اصطناعي تعمل دون اتصال على الهاتف وسطح المكتب',
          },
          {
            'التطبيق': '[LLM Hub](/ar/power-local-llm/llm-hub-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر / الترخيص': 'مجاني جزئياً (Freemium) / متاح المصدر',
            'الفرق الرئيسي': 'مجموعة أوسع بميزات الوكلاء والصور والترجمة',
          },
        ],
        note: 'تفاصيل المنافسين تتغير كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق من صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'من يصنع LM Playground؟',
            a: 'Andriy Druk، مطوّر مستقل ينشر التطبيق على Google Play باسمه الشخصي وينشر الكود على GitHub منذ مارس 2024.',
          },
          {
            q: 'هل توجد نسخة لـ iPhone؟',
            a: 'لا تظهر نسخة لـ iPhone أو لسطح المكتب أو للويب في README أو الموقع أو صفحة Play؛ ويصف المشروع نفسه بأنه تطبيق أندرويد.',
          },
          {
            q: 'هل يمكنني تحميل نماذجي الخاصة؟',
            a: 'نعم. يدرج README ملفات نماذج GGUF مخصصة من أي مصدر إلى جانب الكتالوج المدمج؛ ولم تُذكر الصيغ غير GGUF.',
          },
          {
            q: 'كم أحتاج من الذاكرة؟',
            a: 'لا يوجد حد أدنى ثابت. تذكر الصفحة أن أصغر نموذج حجمه 267 ميجابايت، وأن نماذج 4B إلى 8B تستفيد من ذاكرة RAM بسعة 8 جيجابايت أو أكثر، وأن نموذج 20B يحتاج إلى جهاز متقدم.',
          },
          {
            q: 'هل يعمل الإملاء الصوتي دون اتصال؟',
            a: 'بحسب الموقع وملاحظات الإصدار، نعم بعد تنزيل نموذج الكلام مرة واحدة. وهو غير مذكور في وصف Play، لذا تحقق من الإصدار المثبّت لديك.',
          },
          {
            q: 'أين يمكنني قراءة الكود المصدري؟',
            a: 'الكود الكامل في [مستودع LMPlayground](https://github.com/andriydruk/LMPlayground) على GitHub بترخيص MIT.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'LM Playground طريقة مجانية بترخيص MIT لتشغيل نماذج GGUF على هاتف أندرويد: فهو يجمع بين كتالوج مدمج كبير وملفات النماذج الخاصة بك، وأسئلة وأجوبة على المستندات داخل الجهاز، وإدخال الصور، والإملاء، ويعني مستودعه العام أن ادعاءات الخصوصية فيه قابلة للتحقق من حيث المبدأ. في المقابل، هو لأندرويد فقط، ويصونه مطوّر واحد، ولا تعرض صفحته على Play رقم البناء، لذا قد يختلف الإصدار الذي تثبّته عن أحدث إصدار على GitHub. وهو يناسب مستخدمي أندرويد الذين يريدون تطبيقاً قابلاً للتدقيق يعمل دون اتصال بالدرجة الأولى؛ أما مستخدمو iPhone أو سطح المكتب فيمكنهم المقارنة مع [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Off Grid](/ar/power-local-llm/off-grid-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[LM Playground على Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) — الوصف والمطوّر وعدد التنزيلات والتقييم وقسم أمان البيانات وتاريخ آخر تحديث، جرى التحقق منها في 16 أكتوبر 2026.',
          '[موقع LM Playground](https://lmplayground.app/) — الميزات ومكتبة النماذج واللغات والإصدار المعروض، جرى التحقق منها في 16 أكتوبر 2026.',
          '[سياسة الخصوصية](https://www.andriydruk.com/privacy-policy-for-lm-playground) — بيانات جمع المعلومات والأذونات.',
          '[LMPlayground على GitHub](https://github.com/andriydruk/LMPlayground) — README وملف ترخيص MIT والإصدارات وملاحظات الإصدار وملف الإصدار.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لـ iOS وأندرويد.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مفتوح المصدر يعمل دون اتصال مع أسئلة وأجوبة على المستندات.',
          '[مراجعة Off Grid](/ar/power-local-llm/off-grid-ai-review) — مجموعة ذكاء اصطناعي تعمل دون اتصال على الهاتف وسطح المكتب.',
          '[مراجعة LLM Hub](/ar/power-local-llm/llm-hub-review) — مجموعة ذكاء اصطناعي على الجهاز لأندرويد و iPhone.',
          '[أفضل تطبيقات LLM المحلية لأندرويد في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — نظرة أوسع على تطبيقات أندرويد.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/lm-playground-review-hero-zh.webp',
    title: 'LM Playground 评测：适用于 Android 的开源离线大模型聊天应用',
    seoTitle: 'LM Playground 评测：免费 Android 离线大模型应用',
    intro:
      'LM Playground 是独立开发者 [Andriy Druk](https://www.andriydruk.com) 推出的一款免费、采用 MIT 许可证的 Android 应用，通过 llama.cpp 直接在手机上运行 GGUF 格式的开放权重语言模型。除聊天外，它还提供设备端文档问答、面向视觉模型的照片输入、推理模型思考过程显示、可选工具以及语音听写。本评测基于 [Google Play 页面](https://play.google.com/store/apps/details?id=com.druk.lmplayground)、[官方网站](https://lmplayground.app/)、[隐私政策](https://www.andriydruk.com/privacy-policy-for-lm-playground)以及公开的 [GitHub 代码仓库](https://github.com/andriydruk/LMPlayground)（核实于 2026 年 10 月 16 日）；PromptQuorum 没有对该应用进行实测。',
    metaDescription:
      'LM Playground 评测：免费、MIT 许可的 Android 应用，可离线运行 GGUF 模型，支持文档问答与视觉输入。涵盖模型、隐私、版本与局限。',
    twitterDescription:
      'LM Playground 评测：开源 Android 应用，可用 GGUF 模型离线聊天，另有文档、照片、语音听写，以及尚未确认的问题。',
    audience:
      '希望使用免费开源聊天应用在手机上运行语言模型的 Android 用户，并且需要了解它提供哪些模型和功能、哪些内容保持离线，以及哪些内容来源并未确认。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LM Playground 评测',
    targetKeywords: [
      'lm playground 应用评测',
      'lm playground android',
      'android 离线运行大模型',
      'llama.cpp android 应用',
      '开源本地大模型 android 应用',
      'andriy druk lm playground',
      'gguf 模型 android 应用',
    ],
    current_models_mentioned: ['Qwen 3.5', 'Gemma 4', 'GPT-OSS', 'Nemotron 3 Nano', 'Granite 4', 'DeepSeek R1 Distill', 'Phi-4 mini', 'LFM2.5', 'Ministral 3', 'Llama 3.2'],
    current_hardware_mentioned: ['Android', 'ARM'],
    leadAnswerBlock:
      '**LM Playground（截至 2026 年 10 月 16 日为 1.10.1 版本，Google Play 上最近更新于 2026 年 10 月 8 日）无需账号，基于 llama.cpp 构建，后者是在手机上执行模型的开源引擎。** 模型只需从 Hugging Face 下载一次，之后聊天、文档提问、照片输入和语音听写均可离线使用。按设计只有两件事会联网：模型下载，以及默认关闭的可选网页搜索和网页获取工具。',
    quickAnswerTop: {
      zh: {
        question: 'LM Playground 免费、开源，并且真的能离线使用吗？',
        answer:
          '根据其页面、网站和代码仓库，是的：该应用免费，Google Play 上未显示广告或应用内购买，代码采用 MIT 许可证，模型下载完成后推理在设备上运行。例外是模型下载本身和可选的网页工具。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) 免费获取，仅限 Android；源代码在 [GitHub](https://github.com/andriydruk/LMPlayground) 上。',
          '内置 40 多个模型的目录，也可以从任意文件夹加载你自己的 GGUF 文件。',
          '文档问答、视觉输入、推理过程显示、按模型设置、系统提示词和语音听写。',
          '据 2026 年 10 月 16 日核实的商店信号：Google Play 下载量 5 万以上，479 个评分、平均 3.9 星，GitHub 星标 161 个。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'LM Playground 是什么？', anchor: 'what-is-lm-playground' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '如何开始使用', anchor: 'getting-started' },
      { label: '它提供哪些模型？', anchor: 'models-supported' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '权衡：优点与局限', anchor: 'tradeoffs' },
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
            text: 'LM Playground 把 Android 手机变成一个私密的场所，可以与开放权重模型聊天、就你自己的文档提问，并向支持视觉的模型展示照片。',
          },
          {
            type: 'plain-terms',
            text: '你从 Google Play 安装应用、下载一次模型，之后无需账号或网络连接即可聊天；只有网页工具和模型下载需要联网。',
          },
        ],
        items: [
          '开发者：Andriy Druk，一位独立 Android 开发者；该项目自 2024 年 3 月起公开发布在 GitHub 上，据来源所示是一个单人项目。',
          '价格与许可证：免费且无需账号；源代码采用 MIT 许可证。',
          '模型：内置目录（网站称有 40 多个），来自 Qwen、Gemma、Llama、GPT-OSS、Nemotron、Phi-4、Granite、Mistral、DeepSeek 和 Liquid AI，另可加载你自己的 GGUF 文件。',
          '平台：仅限 Android；来源中没有提到 iPhone、桌面或网页版本。',
          '时效：Google Play 显示最近更新于 2026 年 10 月 8 日，GitHub 显示 1.10.1 版本发布于 2026 年 10 月 12 日，因此两个日期都比较近。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Google Play 页面、官方网站、隐私政策以及公开的 GitHub 代码仓库（README、许可证、版本发布和发布说明），核实于 2026 年 10 月 16 日。PromptQuorum 没有对该应用进行实测或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-lm-playground',
        title: 'LM Playground 是什么？',
        content: [
          '**LM Playground 是一款在本地运行语言模型、而非调用云服务的 Android 聊天应用。** 根据其 [README](https://github.com/andriydruk/LMPlayground)，你下载模型后一键加载即可离线聊天；推理引擎是 [llama.cpp](https://github.com/ggml-org/llama.cpp)，模型是来自 [Hugging Face](https://huggingface.co/) 的 GGUF 文件。模型不随应用打包，因此首次运行需要网络连接。',
          '开发者 Andriy Druk 在 Google Play 上以该名字列出，并在自己的 GitHub 账号下发布该项目。该项目与名称相近的产品无关，例如各云端 AI 厂商的 Playground 工具。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**LM Playground 是商店应用：请从 Google Play 安装，这是项目及其网站指向的唯一渠道。** GitHub 用于源代码和发布说明；发布页面不提供 APK 文件。',
        ],
        columns: ['平台', '获取途径'],
        rows: [
          {
            '平台': 'Android',
            '获取途径': '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground)（免费；未显示最低 Android 版本）',
          },
          {
            '平台': '网站',
            '获取途径': '[lmplayground.app](https://lmplayground.app/)',
          },
          {
            '平台': '隐私政策',
            '获取途径': '[LM Playground 隐私政策](https://www.andriydruk.com/privacy-policy-for-lm-playground)',
          },
          {
            '平台': '源代码',
            '获取途径': '[GitHub](https://github.com/andriydruk/LMPlayground)（MIT）',
          },
        ],
        note: '据 2026 年 10 月 16 日核实的版本与时效：GitHub 上最新的版本是 1.10.1，发布于 2026 年 10 月 12 日（网站页眉仍显示 1.10.0）。Google Play 显示该应用更新于 2026 年 10 月 8 日，但未显示其构建号，因此 Play 上的构建可能早于 GitHub 上最新的版本。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用',
        content: [
          '**设置顺序遵循 README 和 Play 页面中的描述；PromptQuorum 没有执行过这些步骤。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从 Google Play 安装 LM Playground；根据页面信息，无需账号或 API 密钥。',
          },
          {
            title: '在 Wi-Fi 下下载模型',
            whyItMatters: '从内置列表中选择模型，或加载你自己的 GGUF 文件。最小的模型为 267 MB，据 Play 页面，4B 至 8B 参数的模型在 8 GB 或更多内存下表现更好，下载中断后可以继续。',
          },
          {
            title: '聊天、附加文件或发送照片',
            whyItMatters: '开始聊天，附加文档并就其提问，或向支持视觉的模型发送图像。文档检索和语音听写在首次使用时各会下载一次小型辅助模型。',
          },
          {
            title: '可选：开启工具',
            whyItMatters: '工具默认关闭，可在设置中按模型启用。保持关闭即可让每次聊天都留在设备上。',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '它提供哪些模型？',
        itemHeadings: true,
        columns: ['模型系列', '大小', '说明'],
        rows: [
          {
            '模型系列': 'Qwen 3.5 / Qwen 3',
            '大小': '0.8B、2B、4B / 0.6B、1.7B、4B',
            '说明': 'Qwen 3.5 条目可接受图像',
          },
          {
            '模型系列': 'Gemma 4 / Gemma 3n / Gemma 3',
            '大小': 'E2B、E4B、12B / E2B、E4B / 1B、4B',
            '说明': '据 README，Gemma 4 E4B 和 Gemma 3 4B 支持视觉',
          },
          {
            '模型系列': 'GPT-OSS',
            '大小': '20B',
            '说明': '据 Play 页面，需要内存充足的高端手机',
          },
          {
            '模型系列': 'Llama 3.2 / 3.1',
            '大小': '1B、3B / 8B',
            '说明': '来自 Meta',
          },
          {
            '模型系列': 'Granite、Nemotron、Phi-4、DeepSeek R1 Distill',
            '大小': 'Granite 4.x 3B 至 8B；Nemotron 4B；Phi-4 mini 3.8B；R1 Distill 1.5B、7B',
            '说明': 'DeepSeek R1 和 Nemotron 会显示其思考步骤',
          },
          {
            '模型系列': 'LFM2.5、MiniCPM5、SmolLM3、Spark-X2.5、Ministral 3',
            '大小': 'LFM2.5 350M 至 2.6B；LFM2.5 VL 450M 至 3B；Ministral 3 3B、8B',
            '说明': 'Ministral 3 和 LFM2.5 VL 可接受图像',
          },
        ],
        note: '条目来自 2026 年 10 月 16 日的代码仓库 README；大多数使用 Q4_K_M 量化，Qwen 3.5 使用 Q3_K_M，GPT-OSS 以其原生 MXFP4 格式提供。Play 页面列出的系列较少，共十个，目录也会随每次版本更新而变化。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**下面每一项都来自 README、网站、发布说明或 Play 页面；均未经独立测试。**',
        ],
        items: [
          '**文档问答。** 附加 PDF、Word、EPUB、HTML、Markdown 或纯文本文件；设备端语义检索会找出相关段落并交给模型。它会一次性下载一个 278 MB 的嵌入模型。',
          '**视觉输入。** 附加相册中的照片或用相机拍摄一张，并请支持视觉的模型描述图片或读取其中的文字。',
          '**语音听写。** 1.10.0 版本新增：点击麦克风并说话；在一次性下载 718 MB 的语音模型后，识别在手机上进行，支持 35 种语言。该功能出现在网站和发布说明中，但不在 Play 描述中。',
          '**推理过程显示。** DeepSeek R1 和 Nemotron 等模型的思考步骤显示在可折叠的区域中，思考预算可调。',
          '**控制与历史记录。** 按模型设置（上下文大小、temperature、Top-P、Top-K、Min-P、重复惩罚、随机种子）、可复用的系统提示词，以及可搜索的聊天记录，支持置顶、重命名和删除。',
          '**工具。** 能力足够的模型可以搜索网页、获取页面并在沙盒中运行 JavaScript；每个工具默认关闭。',
          '**后台生成与存储。** 离开应用后回复仍会继续生成，模型可以存放在任意文件夹或 SD 卡中，界面已翻译成 28 种语言。',
        ],
        note: 'Play 描述、README 和网站所列的功能略有差异（语音听写和 28 种语言仅出现在网站上），因此以应用当前构建版本为准。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**核心使用方式在设计上是离线的：网站称推理时零网络调用，Google Play 的“数据安全”部分声明“未收集任何数据”以及“未与第三方共享任何数据”。** [隐私政策](https://www.andriydruk.com/privacy-policy-for-lm-playground)称开发者不收集任何个人或非个人信息。',
          '该政策于 2024 年 3 月 16 日生效，只将互联网访问描述为让应用下载模型的权限。网页搜索和网页获取工具是后来加入的；来源并未说明查询会发送到哪个搜索服务，因此应将这两个工具视为会联网的部分，并在涉及机密内容的聊天中保持关闭。',
        ],
        callouts: [
          {
            type: 'note',
            text: '源代码是公开的，因此任何构建该应用的人都可以核查这些说法，但 PromptQuorum 没有审计代码或网络流量。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的含义', '局限 / 注意事项'],
        rows: [
          {
            '优点': '免费且开源',
            '实际使用中的含义': '无需账号、无需订阅，MIT 许可的代码可供阅读和构建。',
            '局限 / 注意事项': '由一位开发者维护；来源并未说明任何支持承诺。',
          },
          {
            '优点': '自带 GGUF 模型',
            '实际使用中的含义': '除内置目录外，还可以从任意文件夹加载模型文件。',
            '局限 / 注意事项': '我们读到的 Play 评论称加载外部模型时成败不定；这些只是个别用户的反馈。',
          },
          {
            '优点': '文档、照片、语音',
            '实际使用中的含义': '一款应用即可完成文件提问、图像输入和语音听写，全部在设备上进行。',
            '局限 / 注意事项': '质量取决于你加载的小型模型，辅助模型还会增加下载。',
          },
          {
            '优点': '开发活跃',
            '实际使用中的含义': '频繁的版本更新会加入新模型和修复，例如 1.10.1 的视觉崩溃修复。',
            '局限 / 注意事项': '更新快意味着 Play 构建、网站和 GitHub 显示的版本可能不同。',
          },
          {
            '优点': '可选的网页工具',
            '实际使用中的含义': '启用工具后，模型可以查询最新网页。',
            '局限 / 注意事项': '需要联网；一位 Play 评论者称开启网页搜索时模型在“思考”中陷入循环。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**希望使用免费、可审计的离线聊天应用的 Android 用户。** MIT 许可证和公开的代码仓库使其可以被核查。',
          '**希望私密地就自己的文件提问的人。** 带设备端检索的文档问答是其主打功能。',
          '**喜欢自带模型的折腾爱好者。** 自定义 GGUF 加载和按模型的采样控制正是为此设计的。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法验证的内容',
        items: [
          '**实际使用表现。** PromptQuorum 没有运行该应用，因此速度、电池消耗和回答质量均未评估。',
          '**Google Play 提供的是哪个构建。** 页面显示了更新日期，但没有版本号或最低 Android 版本。',
          '**网页工具使用哪个搜索服务。** 所读来源并未指明。',
          '**隐私政策是否涵盖网页工具。** 该政策文本早于这些工具，并且未发现其更新。',
          '**不适合 iPhone、Mac 或 Windows 用户。** 来源描述的是一款仅限 Android 的应用。',
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
            '主要区别': '开源设备端聊天客户端，自带模型库',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '基于 ExecuTorch 的开源聊天，带文档问答和基准测试',
          },
          {
            '应用': '[Off Grid](/zh/power-local-llm/off-grid-ai-review)',
            '平台': 'iOS、Android、Mac、Windows',
            '价格 / 许可证': '免费增值 / MIT',
            '主要区别': '横跨手机和桌面的离线 AI 套件',
          },
          {
            '应用': '[LLM Hub](/zh/power-local-llm/llm-hub-review)',
            '平台': 'Android、iOS',
            '价格 / 许可证': '免费增值 / 源码可见',
            '主要区别': '功能更广的套件，含智能体、图像和翻译功能',
          },
        ],
        note: '竞品信息经常变化；请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '谁开发了 LM Playground？',
            a: 'Andriy Druk，一位独立开发者，他以自己的名字在 Google Play 上发布该应用，并自 2024 年 3 月起在 GitHub 上发布代码。',
          },
          {
            q: '有 iPhone 版本吗？',
            a: 'README、网站和 Play 页面中都没有出现 iPhone、桌面或网页版本；该项目自称是一款 Android 应用。',
          },
          {
            q: '我可以加载自己的模型吗？',
            a: '可以。README 列出了除内置目录外、来自任意来源的自定义 GGUF 模型文件；GGUF 之外的格式并未说明。',
          },
          {
            q: '我需要多大内存？',
            a: '没有固定的最低要求。页面称最小的模型为 267 MB，4B 至 8B 的模型在 8 GB 或更多内存下表现更好，20B 模型则需要高端设备。',
          },
          {
            q: '语音听写可以离线使用吗？',
            a: '据网站和发布说明，一次性下载语音模型后可以。Play 描述中没有提到它，因此请查看你安装的版本。',
          },
          {
            q: '在哪里可以阅读源代码？',
            a: '完整代码在 GitHub 的 [LMPlayground 代码仓库](https://github.com/andriydruk/LMPlayground)中，采用 MIT 许可证。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'LM Playground 是在 Android 手机上运行 GGUF 模型的一种免费、MIT 许可的方式：它把庞大的内置目录与你自己的模型文件、设备端文档问答、照片输入和语音听写结合在一起，公开的代码仓库也意味着其隐私声明原则上可以被核查。另一方面，它仅限 Android，由一位开发者维护，其 Play 页面没有显示构建号，因此你安装的版本可能与 GitHub 上最新的版本不同。它适合希望获得可审计、离线优先应用的 Android 用户；使用 iPhone 或桌面的读者可以对比 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Off Grid](/zh/power-local-llm/off-grid-ai-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Google Play 上的 LM Playground](https://play.google.com/store/apps/details?id=com.druk.lmplayground) — 描述、开发者、下载量、评分、数据安全部分和最近更新日期，核实于 2026 年 10 月 16 日。',
          '[LM Playground 网站](https://lmplayground.app/) — 功能、模型库、语言和显示的版本，核实于 2026 年 10 月 16 日。',
          '[隐私政策](https://www.andriydruk.com/privacy-policy-for-lm-playground) — 数据收集和权限方面的声明。',
          '[GitHub 上的 LMPlayground](https://github.com/andriydruk/LMPlayground) — README、MIT 许可证文件、版本发布、发布说明和版本文件。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 带文档问答的开源离线聊天应用。',
          '[Off Grid 评测](/zh/power-local-llm/off-grid-ai-review) — 面向手机和桌面的离线 AI 套件。',
          '[LLM Hub 评测](/zh/power-local-llm/llm-hub-review) — 面向 Android 和 iPhone 的设备端 AI 套件。',
          '[2026 年 Android 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用汇总。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/lm-playground-review-hero-ko.webp',
    title: 'LM Playground 리뷰: Android용 오픈 소스 오프라인 LLM 채팅 앱',
    seoTitle: 'LM Playground 리뷰: 무료 Android 오프라인 LLM',
    intro:
      'LM Playground는 독립 개발자 [Andriy Druk](https://www.andriydruk.com)가 만든 무료 MIT 라이선스 Android 앱으로, llama.cpp를 통해 GGUF 형식의 오픈 웨이트 언어 모델을 휴대폰에서 직접 실행합니다. 채팅 외에도 온디바이스 문서 Q&A, 비전 모델용 사진 입력, 추론 모델 표시, 선택형 도구, 음성 받아쓰기를 제공합니다. 이 리뷰는 [Google Play 게재 정보](https://play.google.com/store/apps/details?id=com.druk.lmplayground), [공식 웹사이트](https://lmplayground.app/), [개인정보 처리방침](https://www.andriydruk.com/privacy-policy-for-lm-playground), 공개 [GitHub 저장소](https://github.com/andriydruk/LMPlayground)를 2026년 10월 16일에 확인한 내용을 근거로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'LM Playground 리뷰: GGUF 모델을 오프라인으로 실행하는 무료 MIT 라이선스 Android 앱. 문서 Q&A, 비전 입력, 개인정보, 한계를 정리했습니다.',
    twitterDescription:
      'LM Playground 리뷰: GGUF 모델로 오프라인 채팅을 하는 오픈 소스 Android 앱. 문서, 사진, 받아쓰기와 아직 확인되지 않은 사항을 다룹니다.',
    audience:
      '휴대폰에서 언어 모델을 실행하는 무료 오픈 소스 채팅 앱을 찾는 Android 이용자로, 어떤 모델과 기능을 제공하는지, 무엇이 오프라인에 머무는지, 출처가 무엇을 확인해 주지 않는지 알아야 하는 분들.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LM Playground 리뷰',
    targetKeywords: [
      'lm playground 앱 리뷰',
      'lm playground 안드로이드',
      '안드로이드 오프라인 llm 실행',
      'llama.cpp 안드로이드 앱',
      '오픈소스 로컬 llm 앱 안드로이드',
      'andriy druk lm playground',
      'gguf 모델 안드로이드 앱',
    ],
    current_models_mentioned: ['Qwen 3.5', 'Gemma 4', 'GPT-OSS', 'Nemotron 3 Nano', 'Granite 4', 'DeepSeek R1 Distill', 'Phi-4 mini', 'LFM2.5', 'Ministral 3', 'Llama 3.2'],
    current_hardware_mentioned: ['Android', 'ARM'],
    leadAnswerBlock:
      '**LM Playground(2026년 10월 16일 기준 버전 1.10.1, Google Play 최종 업데이트 2026년 10월 8일)는 계정이 필요 없으며, 휴대폰에서 모델을 실행하는 오픈 소스 엔진인 llama.cpp를 기반으로 합니다.** 모델은 Hugging Face에서 한 번 내려받은 뒤에는 채팅, 문서 질문, 사진 입력, 받아쓰기가 오프라인으로 작동합니다. 설계상 온라인으로 연결되는 것은 모델 다운로드와, 기본값이 꺼짐인 선택형 웹 검색·페이지 가져오기 도구 두 가지뿐입니다.',
    quickAnswerTop: {
      ko: {
        question: 'LM Playground는 무료이고 오픈 소스이며 정말 오프라인으로 작동합니까?',
        answer:
          '게재 정보, 웹사이트, 저장소에 따르면 그렇습니다. 앱은 무료이며 Google Play에 광고나 구매 항목이 표시되지 않고, 코드는 MIT 라이선스이며, 모델을 내려받은 뒤에는 추론이 기기에서 실행됩니다. 예외는 모델 다운로드 자체와 선택형 웹 도구입니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground)에서 무료이며 Android 전용이고, 소스는 [GitHub](https://github.com/andriydruk/LMPlayground)에서 공개됨.',
          '40개 이상의 모델이 담긴 내장 카탈로그와, 어느 폴더에 있든 직접 가져온 GGUF 파일 불러오기.',
          '문서 Q&A, 비전 입력, 추론 과정 표시, 모델별 설정, 시스템 프롬프트, 음성 받아쓰기.',
          '2026년 10월 16일 확인 기준 스토어 지표: Google Play 다운로드 50K+, 479개 평점에서 별 3.9개, GitHub 스타 161개.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'LM Playground란 무엇인가?', anchor: 'what-is-lm-playground' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '어떤 모델을 제공하나요?', anchor: 'models-supported' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '개인정보와 네트워크 사용', anchor: 'privacy' },
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
            text: 'LM Playground는 Android 휴대폰을 오픈 웨이트 모델과 채팅하고, 내 문서에 질문하고, 비전 지원 모델에 사진을 보여 줄 수 있는 비공개 공간으로 바꿔 줍니다.',
          },
          {
            type: 'plain-terms',
            text: 'Google Play에서 설치하고 모델을 한 번 내려받으면 계정이나 인터넷 연결 없이 채팅할 수 있으며, 네트워크가 필요한 것은 웹 도구와 모델 다운로드뿐입니다.',
          },
        ],
        items: [
          '개발자: 독립 Android 개발자 Andriy Druk이며, 프로젝트는 2024년 3월부터 GitHub에 공개되어 있고 출처로 확인되는 한 1인 프로젝트임.',
          '가격과 라이선스: 계정 없이 무료이며, 소스 코드는 MIT 라이선스임.',
          '모델: Qwen, Gemma, Llama, GPT-OSS, Nemotron, Phi-4, Granite, Mistral, DeepSeek, Liquid AI의 모델로 구성된 내장 카탈로그(웹사이트 기준 40개 이상)와 직접 가져온 GGUF 파일.',
          '플랫폼: Android 전용이며, 출처에는 iPhone, 데스크톱, 웹 버전이 언급되지 않음.',
          '최신성: Google Play에는 최종 업데이트가 2026년 10월 8일로, GitHub에는 릴리스 1.10.1이 2026년 10월 12일로 표시되어 두 날짜 모두 최근임.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 Google Play 게재 정보, 공식 웹사이트, 개인정보 처리방침, 공개 GitHub 저장소(README, 라이선스, 릴리스, 릴리스 노트)를 2026년 10월 16일에 확인한 내용을 근거로 합니다. PromptQuorum은 앱을 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-lm-playground',
        title: 'LM Playground란 무엇인가?',
        content: [
          '**LM Playground는 클라우드 서비스를 호출하는 대신 언어 모델을 로컬에서 실행하는 Android 채팅 앱입니다.** [README](https://github.com/andriydruk/LMPlayground)에 따르면 모델을 내려받아 한 번의 탭으로 불러온 뒤 오프라인으로 채팅하며, 추론 엔진은 [llama.cpp](https://github.com/ggml-org/llama.cpp)이고 모델은 [Hugging Face](https://huggingface.co/)의 GGUF 파일입니다. 모델은 앱에 포함되어 있지 않으므로 첫 실행에는 네트워크 연결이 필요합니다.',
          '개발자 Andriy Druk은 Google Play에 같은 이름으로 등록되어 있으며 프로젝트를 자신의 GitHub 계정에 공개하고 있습니다. 이 프로젝트는 클라우드 AI 업체의 Playground 도구처럼 이름이 비슷한 제품과는 관련이 없습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**LM Playground는 스토어 앱입니다. 프로젝트와 웹사이트가 안내하는 유일한 경로인 Google Play에서 설치하세요.** GitHub는 소스 코드와 릴리스 노트용이며, 릴리스 페이지에는 APK 파일이 없습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.druk.lmplayground) (무료, 최소 Android 버전은 표시되지 않음)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[lmplayground.app](https://lmplayground.app/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[LM Playground 개인정보 처리방침](https://www.andriydruk.com/privacy-policy-for-lm-playground)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub](https://github.com/andriydruk/LMPlayground) (MIT)',
          },
        ],
        note: '2026년 10월 16일에 확인한 버전과 최신성: 최신 GitHub 릴리스는 2026년 10월 12일에 게시된 1.10.1입니다(웹사이트 헤더에는 아직 1.10.0으로 표시됨). Google Play에는 2026년 10월 8일에 업데이트된 것으로 나오지만 빌드 번호는 표시되지 않으므로, Play 빌드가 최신 GitHub 릴리스보다 오래되었을 수 있습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**설정은 README와 Play 게재 정보에 설명된 순서를 따르며, PromptQuorum은 이 단계를 직접 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'Google Play에서 LM Playground를 설치합니다. 게재 정보에 따르면 계정이나 API 키는 필요하지 않습니다.',
          },
          {
            title: 'Wi-Fi에서 모델 내려받기',
            whyItMatters: '내장 목록에서 모델을 고르거나 직접 가진 GGUF 파일을 불러옵니다. 가장 작은 모델은 267 MB이고, Play 게재 정보에 따르면 4B~8B 파라미터 모델은 RAM 8 GB 이상에서 이점이 있으며, 다운로드는 중단된 뒤에도 이어받을 수 있습니다.',
          },
          {
            title: '채팅하거나 파일 첨부, 사진 전송',
            whyItMatters: '채팅을 시작하거나, 문서를 첨부해 질문하거나, 비전 지원 모델에 이미지를 보냅니다. 문서 검색과 받아쓰기는 처음 사용할 때 각각 작은 보조 모델을 한 번 내려받습니다.',
          },
          {
            title: '필요하면 도구 켜기',
            whyItMatters: '도구는 기본적으로 꺼져 있으며 설정에서 모델별로 켤 수 있습니다. 꺼 두면 모든 채팅이 기기 안에 머뭅니다.',
          },
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '어떤 모델을 제공하나요?',
        itemHeadings: true,
        columns: ['모델 계열', '크기', '비고'],
        rows: [
          {
            '모델 계열': 'Qwen 3.5 / Qwen 3',
            '크기': '0.8B, 2B, 4B / 0.6B, 1.7B, 4B',
            '비고': 'Qwen 3.5 항목은 이미지를 받을 수 있음',
          },
          {
            '모델 계열': 'Gemma 4 / Gemma 3n / Gemma 3',
            '크기': 'E2B, E4B, 12B / E2B, E4B / 1B, 4B',
            '비고': 'README에 따르면 Gemma 4 E4B와 Gemma 3 4B에서 비전 지원',
          },
          {
            '모델 계열': 'GPT-OSS',
            '크기': '20B',
            '비고': 'Play 게재 정보에 따르면 메모리가 넉넉한 고사양 휴대폰이 필요함',
          },
          {
            '모델 계열': 'Llama 3.2 / 3.1',
            '크기': '1B, 3B / 8B',
            '비고': 'Meta 제공',
          },
          {
            '모델 계열': 'Granite, Nemotron, Phi-4, DeepSeek R1 Distill',
            '크기': 'Granite 4.x 3B~8B, Nemotron 4B, Phi-4 mini 3.8B, R1 Distill 1.5B·7B',
            '비고': 'DeepSeek R1과 Nemotron은 추론 과정을 보여 줌',
          },
          {
            '모델 계열': 'LFM2.5, MiniCPM5, SmolLM3, Spark-X2.5, Ministral 3',
            '크기': 'LFM2.5 350M~2.6B, LFM2.5 VL 450M~3B, Ministral 3 3B·8B',
            '비고': 'Ministral 3과 LFM2.5 VL은 이미지를 받을 수 있음',
          },
        ],
        note: '항목은 2026년 10월 16일 기준 저장소 README에서 가져온 것이며, 대부분 Q4_K_M 양자화를 사용하고 Qwen 3.5는 Q3_K_M을, GPT-OSS는 고유 형식인 MXFP4를 사용합니다. Play 게재 정보에는 더 짧은 열 개 계열 목록이 나오며, 카탈로그는 릴리스마다 바뀝니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 README, 웹사이트, 릴리스 노트, Play 게재 정보에서 가져온 것이며, 어느 것도 독립적으로 테스트되지 않았습니다.**',
        ],
        items: [
          '**문서 Q&A.** PDF, Word, EPUB, HTML, Markdown, 일반 텍스트 파일을 첨부하면 온디바이스 시맨틱 검색이 관련 구절을 찾아 모델에 전달합니다. 278 MB 임베딩 모델을 한 번 내려받습니다.',
          '**비전 입력.** 갤러리의 사진을 첨부하거나 카메라로 촬영한 뒤, 비전 지원 모델에 설명이나 텍스트 읽기를 요청할 수 있습니다.',
          '**음성 받아쓰기.** 버전 1.10.0에서 추가되었습니다. 마이크를 누르고 말하면 되며, 718 MB 음성 모델을 한 번 내려받은 뒤에는 인식이 휴대폰에서 35개 언어로 실행됩니다. 웹사이트와 릴리스 노트에는 있지만 Play 설명에는 나오지 않습니다.',
          '**추론 과정 표시.** DeepSeek R1, Nemotron 같은 모델의 사고 단계가 접을 수 있는 영역에 표시되며 사고 예산을 조정할 수 있습니다.',
          '**제어와 기록.** 모델별 설정(컨텍스트 크기, temperature, Top-P, Top-K, Min-P, 반복 페널티, 시드), 재사용 가능한 시스템 프롬프트, 고정·이름 변경·삭제가 가능한 검색형 채팅 기록.',
          '**도구.** 성능이 충분한 모델은 웹을 검색하고, 페이지를 가져오고, 샌드박스에서 JavaScript를 실행할 수 있으며, 각 도구는 기본적으로 꺼져 있습니다.',
          '**백그라운드 생성과 저장.** 앱을 벗어나도 답변 생성이 계속되고, 모델은 어떤 폴더나 SD 카드에도 둘 수 있으며, 인터페이스는 28개 언어로 번역되어 있습니다.',
        ],
        note: 'Play 설명, README, 웹사이트가 나열하는 기능은 조금씩 다르므로(받아쓰기와 28개 언어는 웹사이트에만 나옴) 앱의 현재 빌드가 최종 기준입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**핵심 사용은 설계상 오프라인입니다. 웹사이트는 추론 중 네트워크 호출이 전혀 없다고 밝히고, Google Play 데이터 보안 섹션은 "수집된 데이터 없음"과 "제3자와 공유되는 데이터 없음"을 선언합니다.** [개인정보 처리방침](https://www.andriydruk.com/privacy-policy-for-lm-playground)은 개발자가 개인 정보도 비개인 정보도 수집하지 않는다고 밝힙니다.',
          '이 방침은 2024년 3월 16일에 시행되었으며, 인터넷 접근을 앱이 모델을 내려받도록 허용하는 권한으로만 설명합니다. 웹 검색과 페이지 가져오기 도구는 그 후에 추가되었고, 어떤 검색 서비스가 질의를 받는지 출처에는 나와 있지 않으므로, 이 두 도구는 온라인으로 연결되는 부분으로 보고 기밀 대화에서는 꺼 두세요.',
        ],
        callouts: [
          {
            type: 'note',
            text: '소스 코드가 공개되어 있으므로 앱을 직접 빌드하는 사람은 누구나 이 주장을 확인할 수 있지만, PromptQuorum은 코드나 네트워크 트래픽을 감사하지 않았습니다.',
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
            '이점': '무료 및 오픈 소스',
            '실제 사용에서의 의미': '계정도 구독도 없고, MIT 라이선스 코드를 읽고 빌드할 수 있습니다.',
            '한계 / 유의사항': '한 명의 개발자가 관리하며, 출처에는 지원 약속이 명시되어 있지 않습니다.',
          },
          {
            '이점': '직접 가져온 GGUF 사용',
            '실제 사용에서의 의미': '내장 카탈로그와 함께 어느 폴더에 있든 모델 파일을 불러올 수 있습니다.',
            '한계 / 유의사항': '확인한 Play 리뷰는 외부 모델 불러오기가 들쑥날쑥하다고 하며, 이는 개별 이용자의 보고입니다.',
          },
          {
            '이점': '문서, 사진, 음성',
            '실제 사용에서의 의미': '앱 하나로 파일 질문, 이미지 입력, 받아쓰기를 모두 기기에서 처리합니다.',
            '한계 / 유의사항': '품질은 불러온 소형 모델에 좌우되고, 보조 모델 때문에 내려받을 것이 늘어납니다.',
          },
          {
            '이점': '활발한 개발',
            '실제 사용에서의 의미': '잦은 릴리스로 새 모델과 수정이 추가되며, 1.10.1의 비전 충돌 수정이 한 예입니다.',
            '한계 / 유의사항': '변화가 빠르다 보니 Play 빌드, 웹사이트, GitHub가 서로 다른 버전을 표시할 수 있습니다.',
          },
          {
            '이점': '선택형 웹 도구',
            '실제 사용에서의 의미': '도구를 켜면 모델이 최신 페이지를 조회할 수 있습니다.',
            '한계 / 유의사항': '온라인으로 연결되며, 한 Play 리뷰어는 웹 검색을 켠 상태에서 모델이 "생각"하다가 반복에 빠졌다고 보고했습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**감사할 수 있는 무료 오프라인 채팅 앱을 원하는 Android 이용자.** MIT 라이선스와 공개 저장소 덕분에 확인이 가능합니다.',
          '**자신의 파일에 비공개로 질문하고 싶은 분.** 온디바이스 검색을 쓰는 문서 Q&A가 대표 기능입니다.',
          '**자신의 모델을 가져와 만져 보는 분.** 직접 가져온 GGUF 불러오기와 모델별 샘플링 제어는 그런 용도에 맞춰 만들어졌습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 사용 성능.** PromptQuorum은 앱을 실행해 보지 않았으므로 속도, 배터리 사용량, 답변 품질은 평가하지 않았습니다.',
          '**Google Play가 제공하는 빌드.** 게재 정보에는 업데이트 날짜만 있고 버전 번호나 최소 Android 버전은 없습니다.',
          '**웹 도구가 사용하는 검색 서비스.** 확인한 출처에는 이름이 나와 있지 않습니다.',
          '**개인정보 처리방침이 웹 도구를 포함하는지 여부.** 방침 본문은 웹 도구보다 먼저 작성되었고 갱신된 것을 찾지 못했습니다.',
          '**iPhone, Mac, Windows 이용자에게는 해당하지 않습니다.** 출처는 Android 전용 앱이라고 설명합니다.',
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
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '문서 Q&A와 벤치마크를 갖춘, ExecuTorch 기반 오픈 소스 채팅',
          },
          {
            '앱': '[Off Grid](/ko/power-local-llm/off-grid-ai-review)',
            '플랫폼': 'iOS, Android, Mac, Windows',
            '가격 / 라이선스': '프리미엄 / MIT',
            '핵심 차이': '휴대폰과 데스크톱을 아우르는 오프라인 AI 모음',
          },
          {
            '앱': '[LLM Hub](/ko/power-local-llm/llm-hub-review)',
            '플랫폼': 'Android, iOS',
            '가격 / 라이선스': '프리미엄 / 소스 공개',
            '핵심 차이': '에이전트, 이미지, 번역 기능을 갖춘 더 폭넓은 모음',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'LM Playground는 누가 만들었나요?',
            a: '독립 개발자 Andriy Druk이 만들었으며, Google Play에는 본인 이름으로 앱을 게시하고 있고 코드는 2024년 3월부터 GitHub에 공개하고 있습니다.',
          },
          {
            q: 'iPhone 버전이 있나요?',
            a: 'README, 웹사이트, Play 게재 정보 어디에도 iPhone, 데스크톱, 웹 버전은 나오지 않으며, 프로젝트는 스스로를 Android 애플리케이션이라고 설명합니다.',
          },
          {
            q: '내가 가진 모델을 불러올 수 있나요?',
            a: '예. README에는 내장 카탈로그와 함께 어떤 출처의 GGUF 모델 파일이든 직접 불러올 수 있다고 나와 있으며, GGUF 외의 형식은 명시되어 있지 않습니다.',
          },
          {
            q: '메모리는 얼마나 필요한가요?',
            a: '정해진 최소 사양은 없습니다. 게재 정보에 따르면 가장 작은 모델은 267 MB이고, 4B~8B 모델은 RAM 8 GB 이상에서 이점이 있으며, 20B 모델은 고사양 기기가 필요합니다.',
          },
          {
            q: '음성 받아쓰기는 오프라인에서 작동하나요?',
            a: '웹사이트와 릴리스 노트에 따르면 음성 모델을 한 번 내려받은 뒤에는 그렇습니다. Play 설명에는 언급되지 않으므로 설치된 버전을 확인하세요.',
          },
          {
            q: '소스는 어디서 볼 수 있나요?',
            a: '전체 코드는 GitHub의 [LMPlayground 저장소](https://github.com/andriydruk/LMPlayground)에서 MIT 라이선스로 공개되어 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'LM Playground는 Android 휴대폰에서 GGUF 모델을 실행하는 무료 MIT 라이선스 방법입니다. 대규모 내장 카탈로그에 직접 가져온 모델 파일, 온디바이스 문서 Q&A, 사진 입력, 받아쓰기를 결합했으며, 공개 저장소 덕분에 개인정보 관련 주장도 원칙적으로 확인할 수 있습니다. 반면 Android 전용이고, 한 명의 개발자가 관리하며, Play 게재 정보에 빌드 번호가 표시되지 않아 설치되는 버전이 최신 GitHub 릴리스와 다를 수 있습니다. 감사 가능하고 오프라인을 우선하는 앱을 원하는 Android 이용자에게 맞고, iPhone이나 데스크톱 이용자는 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Off Grid](/ko/power-local-llm/off-grid-ai-review)를 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 LM Playground](https://play.google.com/store/apps/details?id=com.druk.lmplayground) — 설명, 개발자, 다운로드 수, 평점, 데이터 보안 섹션, 최종 업데이트 날짜, 2026년 10월 16일 확인.',
          '[LM Playground 웹사이트](https://lmplayground.app/) — 기능, 모델 라이브러리, 언어, 표시된 버전, 2026년 10월 16일 확인.',
          '[개인정보 처리방침](https://www.andriydruk.com/privacy-policy-for-lm-playground) — 데이터 수집 및 권한에 관한 설명.',
          '[GitHub의 LMPlayground](https://github.com/andriydruk/LMPlayground) — README, MIT 라이선스 파일, 릴리스, 릴리스 노트, 버전 파일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS·Android용 무료 오픈 소스 온디바이스 채팅 클라이언트.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — 문서 Q&A를 갖춘 오픈 소스 오프라인 채팅 앱.',
          '[Off Grid 리뷰](/ko/power-local-llm/off-grid-ai-review) — 휴대폰과 데스크톱용 오프라인 AI 모음.',
          '[LLM Hub 리뷰](/ko/power-local-llm/llm-hub-review) — Android와 iPhone용 온디바이스 AI 모음.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 더 폭넓은 Android 종합 정리.',
        ],
      },
    },
  },
}
