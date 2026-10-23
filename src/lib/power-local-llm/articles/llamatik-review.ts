// Llamatik Review: Free Offline AI Chatbot for Android and iPhone
// Slug: llamatik-review
// Companion to: private-mind-review, pocketpal-ai-review, off-grid-ai-review, google-ai-edge-gallery-review, memoryai-review,
// best-local-llm-apps-android-2026, best-local-llm-apps-iphone-2026
// Sources: Google Play + App Store listings, llamatik.com (+ /download), the app's privacy policy and the public GitHub
// repository ferranpons/Llamatik, all checked 2026-10-19 — no hands-on testing. Independent PromptQuorum entry added at the
// operator's request; no maker contact, so there is no "From the Maker" section.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llamatik-review-hero-en.webp',
    title: 'Llamatik Review: Free Open-Source Offline AI Chatbot for Android, iPhone and Desktop',
    seoTitle: 'Llamatik Review: Free Open-Source Offline AI Chatbot',
    intro:
      'Llamatik is a free, MIT-licensed offline AI chatbot for Android, iPhone and desktop, built by the independent developer Ferran Pons as the showcase app of his open-source Llamatik Kotlin Multiplatform SDK. It runs small open-weight language models on the device through llama.cpp, and the Android version was first released on Google Play on 20 November 2025. This review reflects the store listings, website, privacy policy and GitHub repository as checked on 19 October 2026.',
    metaDescription:
      'Llamatik review: free, MIT-licensed offline AI chatbot for Android, iPhone and desktop. Models, Firebase analytics, update status and open questions.',
    twitterDescription:
      'Llamatik review: a free, open-source offline AI chatbot for Android, iPhone and desktop that doubles as the demo of a Kotlin on-device AI SDK. What the listings, privacy policy and repository say.',
    audience:
      'Android and iPhone users who want a free, open-source chatbot that runs language models on the device, and who need to know what stays offline, what is sent out, and what the sources do not confirm.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llamatik review',
    targetKeywords: [
      'llamatik app review',
      'llamatik local ai chatbot',
      'offline ai chatbot android',
      'open source on-device llm app',
      'llamatik kotlin multiplatform sdk',
      'llama.cpp android app',
      'llamatik vs pocketpal',
    ],
    current_models_mentioned: ['Gemma', 'SmolVLM', 'Phi', 'Qwen', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone'],
    leadAnswerBlock:
      '**Llamatik (version 1.9.0 on Google Play and the App Store as of 19 October 2026) is an open-source offline chatbot that its own listing calls an experimental showcase of the developer\'s Kotlin SDK, not a full-featured assistant.** Models are downloaded once and then run on the phone. Firebase analytics and crash reports do leave the device, so read the privacy section before relying on the website\'s "no tracking" wording.',
    quickAnswerTop: {
      en: {
        question: 'Is Llamatik really free and offline?',
        answer:
          'Per its listings, yes for the chat itself: the app is free, Google Play shows no ads or purchase labels, and conversations run on the phone with no internet connection once a model has been downloaded.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) and the [App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708), with desktop installers on the [download page](https://www.llamatik.com/download/).',
          'In-app downloads of small models such as Gemma 3 270M, SmolVLM, Phi-1.5, Qwen 2.5 and Llama 3.2 1B.',
          'Model selector, smart suggestions and quick prompts in the chat screen.',
          'Source code on [GitHub](https://github.com/ferranpons/Llamatik).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Llamatik?', anchor: 'what-is-llamatik' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Open Source and the Llamatik SDK', anchor: 'open-source' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
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
            text: 'Llamatik is a free, open-source chatbot for Android, iPhone and desktop that runs small language models on the device and doubles as the demo app of its developer\'s Kotlin SDK.',
          },
          {
            type: 'plain-terms',
            text: 'You install it, download a model once, and then chat without an account or an internet connection; because it is a demo, expect a simple interface and small models rather than a full assistant.',
          },
        ],
        items: [
          'Developer: Ferran Pons, an independent developer with no company named on the website; the code lives at [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) under the MIT license.',
          'Maintenance: the repository published release v2.0.0 on 14 October 2026, so no stale-project warning applies; the store builds, however, are version 1.9.0 from 14 May 2026.',
          'Reach: Google Play shows 1K+ downloads and a 3.9 rating from 48 ratings, and the App Store shows 3.0 from two ratings, so the public track record is thin.',
          'Platforms: Android, iPhone (iOS 16.6 or later), macOS, Windows, Debian/Ubuntu Linux and a browser version at [llamatik.com/prompt](https://www.llamatik.com/prompt).',
          'Models: small, quantized open-weight models that the app downloads itself; the listing gives no download sizes or RAM requirements.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play and App Store listings, the website, the privacy policy and the public GitHub repository, checked on 19 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-llamatik',
        title: 'What Is Llamatik?',
        content: [
          '**Llamatik is an offline chatbot app that runs open-weight language models on the phone instead of calling a cloud service.** The Google Play description calls it an experimental showcase of the Llamatik Kotlin Multiplatform library. No model is bundled: you download at least one inside the app, pick it in a model selector and chat. The listing names Gemma 3 270M, SmolVLM 256M and 500M, Phi-1.5, Qwen 2.5 and a quantized Llama 3.2 1B.',
          'Three products share the name. This review covers the chat app, titled "Llamatik - Local AI Chatbot" on Google Play (package com.llamatik.app.android). The Llamatik SDK is the library that powers it, and Llamatik Server is a separate remote-inference backend from the same project. The website also lists a Llamatik Code plugin for JetBrains IDEs, which this review does not cover.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Llamatik is a download-and-open install on every platform it supports: two mobile stores plus desktop installers from the website.** The links below are the ones the developer\'s website uses.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) (free)',
          },
          {
            'Platform': 'iPhone',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) (free, iOS 16.6 or later)',
          },
          {
            'Platform': 'macOS',
            'Where to get it': '[.dmg installer](https://www.llamatik.com/download/) (Apple Silicon and Intel)',
          },
          {
            'Platform': 'Windows',
            'Where to get it': '[.msi installer](https://www.llamatik.com/download/) (Windows 10 or later)',
          },
          {
            'Platform': 'Linux',
            'Where to get it': '[.deb package](https://www.llamatik.com/download/) (Debian/Ubuntu, tested on Ubuntu 22.04 or later)',
          },
          {
            'Platform': 'Browser',
            'Where to get it': '[Web app](https://www.llamatik.com/prompt) (no installation)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[llamatik.com](https://www.llamatik.com/)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Llamatik privacy policy](https://multiplatformkickstarter.com/llamatik-privacy.html) (last updated 20 November 2025)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[GitHub](https://github.com/ferranpons/Llamatik) (MIT)',
          },
        ],
        note: 'Version reviewed: 1.9.0, shown on both Google Play and the App Store. The desktop installers attached to the repository\'s releases are also named 1.9.0, even under tags such as v2.0.0, so the tags appear to track the SDK rather than the app version. The download page text still shows a 1.8.0 package name in its install example.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**Setup follows the order described in the store listing; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download Llamatik from Google Play or the App Store; neither the listings nor the website mention an account.',
          },
          {
            title: 'Download a model on Wi-Fi',
            whyItMatters: 'The Google Play description says at least one model must be downloaded before you can chat. Start with the smallest one, because the listing gives no file sizes.',
          },
          {
            title: 'Chat',
            whyItMatters: 'Type a prompt or tap a suggestion or quick prompt, and switch models from the selector when you want to compare answers.',
          },
          {
            title: 'Optionally try the browser version first',
            whyItMatters: 'The website offers a web app that needs no installation, which is a low-effort way to see the interface before downloading models.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description, the website or the repository README.**',
        ],
        items: [
          '**On-device text generation.** Chat runs through llama.cpp on the phone, with no connection needed once a model is installed.',
          '**Built-in model downloader.** The app downloads, installs and switches between its supported models, so no file handling is needed.',
          '**Simple chat interface.** Smart suggestions, quick prompts, a model selector and an onboarding flow.',
          '**Streaming and speech.** The repository README says the app showcases streaming generation and whisper.cpp speech-to-text; the Google Play text mentions neither, so check the installed build.',
          '**Desktop and browser versions.** The same project ships macOS, Windows and Linux installers and a browser app.',
        ],
        note: 'Feature lists on the store pages are short. The README also describes SDK capabilities, such as retrieval, agents and image generation, that are not confirmed for the app itself.',
      },
      openSource: {
        id: 'open-source',
        title: 'Open Source and the Llamatik SDK',
        content: [
          '**The app is the public demo of a larger open-source project.** The repository at [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) is MIT-licensed, was created in July 2025 and shows 206 stars and 12 open issues on 19 October 2026. It holds the apps, the Kotlin Multiplatform SDK and the native bindings for llama.cpp, whisper.cpp and stable-diffusion.cpp.',
          'According to the README, release 2.0.0 of 14 October 2026 renamed the inference library to com.llamatik:core and added a business-logic SDK with chat, model management and retrieval, an agent framework and an agent runtime with permission handling. These parts are aimed at developers building their own Android, iOS, desktop or WASM apps; they are separate from the chat app a reader installs from the store.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**Chat content stays on the device by default, and the developer says nothing typed into the chatbot is sent to Firebase or any other server.** The Google Play Data safety section declares no data shared with third parties. It lists crash logs, diagnostics and other app performance data as collected for app functionality and analytics, encrypted in transit, and it says the developer provides no way to request deletion of that data.',
          'The [privacy policy](https://multiplatformkickstarter.com/llamatik-privacy.html), last updated on 20 November 2025, names Google Analytics for Firebase and Firebase Crashlytics, and says Firebase Performance Monitoring may be enabled. Analytics events are pseudonymous (screen views, device type, operating system version, language and performance metrics). Crash reports carry the device model, operating system version, stack traces and app version, but no chat content. Model files come from public hosts such as Hugging Face, and the app does not log which model you choose.',
          'The website says "No accounts. No tracking." That wording is narrower than the policy, because Firebase analytics and crash reporting still apply; the Google Play description itself says the internet is used only to download models and for analytics and crash reporting.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The source code is public, but PromptQuorum has not audited it or the app\'s network traffic. Anyone handling confidential data should verify behavior on their own device.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who want to try on-device models without cost or an account.** The app is free and bundles a downloader.',
          '**Kotlin and Android developers evaluating the SDK.** The app is its reference demo and the code is MIT-licensed.',
          '**Readers who prefer open-source software.** Source, issues and releases are public.',
          '**Users who accept diagnostics but want chats kept local.** Content stays on the device while Firebase receives crash and usage data.',
          '**Not for users who need large models or document chat.** The listings offer neither.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** PromptQuorum did not run the app, so speed, battery use and answer quality are not assessed.',
          '**Image generation and speech.** A developer reply to a Google Play review mentions a known problem with image-model downloads, which suggests image generation exists in some builds, but no store description lists it.',
          '**Model sizes and hardware needs.** The listings give no download sizes, RAM figures or minimum Android version; the README lists API level 26 for the library, which is not necessarily the app\'s requirement.',
          '**Importing your own models.** The store descriptions mention only the built-in downloader.',
          '**Whether newer SDK releases reached the stores.** The store builds are 1.9.0 from 14 May 2026, and the sources do not say when they will move.',
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
            'Key difference': 'Open-source offline chat with on-device document Q&A and benchmarks',
          },
          {
            'App': '[Off Grid](/power-local-llm/off-grid-ai-review)',
            'Platforms': 'iOS, Android, Mac, Windows',
            'Price / license': 'Freemium / MIT',
            'Key difference': 'Open-source offline AI suite on phones and desktops',
          },
          {
            'App': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Open-source on-device app from Google\'s AI Edge team',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing. All five apps are open source, so Llamatik\'s distinguishing trait is its SDK focus, not its license.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Why does the developer appear under different names?',
            a: 'Google Play lists the developer as Multiplatform Kickstarter and hosts the privacy policy on that domain, while the App Store lists Ferran Pons Sanchez as seller and the GitHub repository belongs to Ferran Pons.',
          },
          {
            q: 'Can I load my own GGUF models?',
            a: 'The store descriptions only mention the built-in downloader. The README lists model-import functions in the SDK, but whether the app exposes them is not stated.',
          },
          {
            q: 'Can I try it without installing anything?',
            a: 'The website offers a browser version at [llamatik.com/prompt](https://www.llamatik.com/prompt). PromptQuorum has not checked where that version runs its models or what it sends.',
          },
          {
            q: 'Where do I report a problem?',
            a: 'In the repository\'s public [issue tracker](https://github.com/ferranpons/Llamatik/issues) on GitHub, or through the support contact on the Google Play listing.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Llamatik is a free, MIT-licensed offline chatbot for Android, iPhone and desktop that runs small models through llama.cpp and shows what its developer\'s Kotlin SDK can do. It is open source and the repository was updated days before this review. Against that, it is an experimental demo with small models, a modest public rating, store builds that are five months old, and Firebase analytics that still leave the device. It suits readers who want an open-source way to try on-device chat, or who evaluate the SDK; readers who want more features can compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private Mind](/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Llamatik on Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) — description, version, rating, download count and Data safety section, checked 19 October 2026.',
          '[Llamatik on the App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) — price, version and requirements, checked 19 October 2026.',
          '[Llamatik website](https://www.llamatik.com/) and [download page](https://www.llamatik.com/download/) — platforms and installers, checked 19 October 2026.',
          '[Llamatik privacy policy](https://multiplatformkickstarter.com/llamatik-privacy.html) — data handling and third-party services, last updated 20 November 2025.',
          '[Llamatik on GitHub](https://github.com/ferranpons/Llamatik) — README, MIT license, releases and issue tracker, checked 19 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[Off Grid Review](/power-local-llm/off-grid-ai-review) — an open-source offline AI suite for phones and desktops.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s open-source on-device AI app.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Llamatik Review: Free Open-Source Offline AI Chatbot for Android, iPhone and Desktop',
      description:
        'Llamatik review: a free, MIT-licensed offline AI chatbot for Android, iPhone and desktop built on an open-source Kotlin SDK. Models, privacy, update status and what the sources do not confirm.',
      url: 'https://www.promptquorum.com/power-local-llm/llamatik-review',
      inLanguage: 'en',
      datePublished: '2026-10-19',
      dateModified: '2026-10-23',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Android and iPhone users evaluating a free offline AI chatbot' },
      about: [
        { '@type': 'Thing', name: 'Llamatik' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/llamatik-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Llamatik Review', item: 'https://www.promptquorum.com/power-local-llm/llamatik-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llamatik-review-hero-de.webp',
    title: 'Llamatik-Rezension: Kostenloser Open-Source-Offline-KI-Chatbot für Android, iPhone und Desktop',
    seoTitle: 'Llamatik-Rezension: Kostenloser Open-Source-KI-Chatbot',
    intro:
      'Llamatik ist ein kostenloser, MIT-lizenzierter Offline-KI-Chatbot für Android, iPhone und Desktop. Der unabhängige Entwickler Ferran Pons hat ihn als Showcase-App seines quelloffenen Llamatik-Kotlin-Multiplatform-SDK gebaut. Er führt kleine Open-Weight-Sprachmodelle über llama.cpp auf dem Gerät aus, und die Android-Version erschien am 20. November 2025 erstmals bei Google Play. Diese Rezension gibt die Store-Einträge, die Website, die Datenschutzerklärung und das GitHub-Repository wieder, wie am 19. Oktober 2026 geprüft.',
    metaDescription:
      'Llamatik-Rezension: kostenloser, MIT-lizenzierter Offline-KI-Chatbot für Android, iPhone und Desktop. Modelle, Firebase-Analyse, Pflegestand, Lücken.',
    twitterDescription:
      'Llamatik-Rezension: ein kostenloser, quelloffener Offline-KI-Chatbot für Android, iPhone und Desktop, der zugleich als Demo eines Kotlin-SDK für On-Device-KI dient. Was Einträge, Datenschutzerklärung und Repository sagen.',
    audience:
      'Android- und iPhone-Nutzer, die einen kostenlosen, quelloffenen Chatbot wünschen, der Sprachmodelle auf dem Gerät ausführt, und die wissen müssen, was offline bleibt, was nach außen gesendet wird und was die Quellen nicht bestätigen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llamatik Rezension',
    targetKeywords: [
      'llamatik app test',
      'llamatik lokaler ki chatbot',
      'offline ki chatbot android',
      'open source on-device llm app',
      'llamatik kotlin multiplatform sdk',
      'llama.cpp android app',
      'llamatik vs pocketpal',
    ],
    current_models_mentioned: ['Gemma', 'SmolVLM', 'Phi', 'Qwen', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone'],
    leadAnswerBlock:
      '**Llamatik (Version 1.9.0 bei Google Play und im App Store, Stand 19. Oktober 2026) ist ein quelloffener Offline-Chatbot, den der eigene Eintrag als experimentellen Showcase des Kotlin-SDK des Entwicklers bezeichnet, nicht als vollwertigen Assistenten.** Modelle werden einmal heruntergeladen und laufen danach auf dem Telefon. Firebase-Analysen und Absturzberichte verlassen das Gerät allerdings; lesen Sie daher den Abschnitt zum Datenschutz, bevor Sie sich auf die Formulierung „kein Tracking“ auf der Website verlassen.',
    quickAnswerTop: {
      de: {
        question: 'Ist Llamatik wirklich kostenlos und offline?',
        answer:
          'Laut den Einträgen ja, für den Chat selbst: Die App ist kostenlos, Google Play zeigt weder Werbung noch Kaufhinweise, und Unterhaltungen laufen nach dem Download eines Modells ohne Internetverbindung auf dem Telefon.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) und im [App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708), dazu Desktop-Installer auf der [Download-Seite](https://www.llamatik.com/download/).',
          'Modell-Downloads in der App für kleine Modelle wie Gemma 3 270M, SmolVLM, Phi-1.5, Qwen 2.5 und Llama 3.2 1B.',
          'Modellauswahl, intelligente Vorschläge und Schnellprompts im Chatbildschirm.',
          'Quellcode auf [GitHub](https://github.com/ferranpons/Llamatik).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Llamatik?', anchor: 'what-is-llamatik' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Open Source und das Llamatik-SDK', anchor: 'open-source' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
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
            text: 'Llamatik ist ein kostenloser, quelloffener Chatbot für Android, iPhone und Desktop, der kleine Sprachmodelle auf dem Gerät ausführt und zugleich als Demo-App des Kotlin-SDK seines Entwicklers dient.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App, laden einmal ein Modell herunter und chatten dann ohne Konto und ohne Internetverbindung; da es eine Demo ist, erwarten Sie eine schlichte Oberfläche und kleine Modelle statt eines vollwertigen Assistenten.',
          },
        ],
        items: [
          'Entwickler: Ferran Pons, ein unabhängiger Entwickler, ohne dass die Website ein Unternehmen nennt; der Code liegt unter [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) unter der MIT-Lizenz.',
          'Pflege: Das Repository hat am 14. Oktober 2026 das Release v2.0.0 veröffentlicht, sodass keine Warnung vor einem veralteten Projekt gilt; die Store-Builds sind dagegen Version 1.9.0 vom 14. Mai 2026.',
          'Reichweite: Google Play zeigt 1K+ Downloads und eine Bewertung von 3,9 aus 48 Bewertungen, der App Store 3,0 aus zwei Bewertungen; die öffentliche Erfolgsbilanz ist also dünn.',
          'Plattformen: Android, iPhone (iOS 16.6 oder neuer), macOS, Windows, Debian/Ubuntu-Linux und eine Browser-Version unter [llamatik.com/prompt](https://www.llamatik.com/prompt).',
          'Modelle: kleine, quantisierte Open-Weight-Modelle, die die App selbst herunterlädt; der Eintrag nennt weder Download-Größen noch RAM-Anforderungen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Einträge bei Google Play und im App Store, die Website, die Datenschutzerklärung und das öffentliche GitHub-Repository, geprüft am 19. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-llamatik',
        title: 'Was ist Llamatik?',
        content: [
          '**Llamatik ist eine Offline-Chatbot-App, die Open-Weight-Sprachmodelle auf dem Telefon ausführt, statt einen Cloud-Dienst aufzurufen.** Die Beschreibung bei Google Play nennt sie einen experimentellen Showcase der Llamatik-Kotlin-Multiplatform-Bibliothek. Es ist kein Modell mitgeliefert: Sie laden in der App mindestens eines herunter, wählen es in einer Modellauswahl aus und chatten. Der Eintrag nennt Gemma 3 270M, SmolVLM 256M und 500M, Phi-1.5, Qwen 2.5 und ein quantisiertes Llama 3.2 1B.',
          'Drei Produkte tragen den Namen. Diese Rezension behandelt die Chat-App, bei Google Play unter dem Titel „Llamatik - Local AI Chatbot“ geführt (Paket com.llamatik.app.android). Das Llamatik-SDK ist die Bibliothek, die sie antreibt, und Llamatik Server ist ein eigenes Backend für Remote-Inferenz desselben Projekts. Die Website führt außerdem ein Plug-in Llamatik Code für JetBrains-IDEs auf, das diese Rezension nicht abdeckt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Llamatik wird auf jeder unterstützten Plattform per Download installiert und geöffnet: zwei mobile Stores plus Desktop-Installer von der Website.** Die Links unten sind die, die die Website des Entwicklers verwendet.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) (kostenlos)',
          },
          {
            'Plattform': 'iPhone',
            'Bezugsquelle': '[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) (kostenlos, iOS 16.6 oder neuer)',
          },
          {
            'Plattform': 'macOS',
            'Bezugsquelle': '[.dmg-Installer](https://www.llamatik.com/download/) (Apple Silicon und Intel)',
          },
          {
            'Plattform': 'Windows',
            'Bezugsquelle': '[.msi-Installer](https://www.llamatik.com/download/) (Windows 10 oder neuer)',
          },
          {
            'Plattform': 'Linux',
            'Bezugsquelle': '[.deb-Paket](https://www.llamatik.com/download/) (Debian/Ubuntu, getestet ab Ubuntu 22.04)',
          },
          {
            'Plattform': 'Browser',
            'Bezugsquelle': '[Web-App](https://www.llamatik.com/prompt) (ohne Installation)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[llamatik.com](https://www.llamatik.com/)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Llamatik-Datenschutzerklärung](https://multiplatformkickstarter.com/llamatik-privacy.html) (zuletzt aktualisiert 20. November 2025)',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': '[GitHub](https://github.com/ferranpons/Llamatik) (MIT)',
          },
        ],
        note: 'Geprüfte Version: 1.9.0, angezeigt bei Google Play und im App Store. Auch die Desktop-Installer an den Releases des Repositorys heißen 1.9.0, selbst unter Tags wie v2.0.0; die Tags scheinen also dem SDK zu folgen, nicht der App-Version. Der Text der Download-Seite zeigt in seinem Installationsbeispiel noch einen Paketnamen mit 1.8.0.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Einrichtung folgt der Reihenfolge, die der Store-Eintrag beschreibt; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie Llamatik bei Google Play oder im App Store herunter; weder die Einträge noch die Website erwähnen ein Konto.',
          },
          {
            title: 'Modell per WLAN herunterladen',
            whyItMatters: 'Die Beschreibung bei Google Play nennt als Voraussetzung, dass vor dem Chatten mindestens ein Modell heruntergeladen sein muss. Beginnen Sie mit dem kleinsten, da der Eintrag keine Dateigrößen nennt.',
          },
          {
            title: 'Chatten',
            whyItMatters: 'Tippen Sie einen Prompt ein oder wählen Sie einen Vorschlag oder Schnellprompt, und wechseln Sie das Modell in der Auswahl, wenn Sie Antworten vergleichen möchten.',
          },
          {
            title: 'Optional zuerst die Browser-Version ausprobieren',
            whyItMatters: 'Die Website bietet eine Web-App ohne Installation, mit der sich die Oberfläche ohne großen Aufwand ansehen lässt, bevor Sie Modelle herunterladen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Beschreibung bei Google Play, von der Website oder aus der README des Repositorys.**',
        ],
        items: [
          '**Textgenerierung auf dem Gerät.** Der Chat läuft über llama.cpp auf dem Telefon, ohne Verbindung, sobald ein Modell installiert ist.',
          '**Integrierter Modell-Downloader.** Die App lädt die unterstützten Modelle herunter, installiert sie und wechselt zwischen ihnen, sodass keine Dateiverwaltung nötig ist.',
          '**Schlichte Chat-Oberfläche.** Intelligente Vorschläge, Schnellprompts, eine Modellauswahl und ein Onboarding.',
          '**Streaming und Sprache.** Laut README der Repositorys zeigt die App Streaming-Generierung und Spracherkennung mit whisper.cpp; der Text bei Google Play erwähnt keines von beiden, prüfen Sie also den installierten Build.',
          '**Desktop- und Browser-Versionen.** Dasselbe Projekt liefert Installer für macOS, Windows und Linux sowie eine Browser-App.',
        ],
        note: 'Die Funktionslisten auf den Store-Seiten sind kurz. Die README beschreibt außerdem SDK-Fähigkeiten wie Retrieval, Agenten und Bildgenerierung, die für die App selbst nicht bestätigt sind.',
      },
      openSource: {
        id: 'open-source',
        title: 'Open Source und das Llamatik-SDK',
        content: [
          '**Die App ist die öffentliche Demo eines größeren quelloffenen Projekts.** Das Repository unter [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) steht unter der MIT-Lizenz, wurde im Juli 2025 angelegt und zeigt am 19. Oktober 2026 206 Sterne und 12 offene Issues. Es enthält die Apps, das Kotlin-Multiplatform-SDK und die nativen Anbindungen für llama.cpp, whisper.cpp und stable-diffusion.cpp.',
          'Laut README hat das Release 2.0.0 vom 14. Oktober 2026 die Inferenzbibliothek in com.llamatik:core umbenannt und ein SDK für Geschäftslogik mit Chat, Modellverwaltung und Retrieval, ein Agenten-Framework sowie eine Agenten-Laufzeit mit Rechteverwaltung ergänzt. Diese Teile richten sich an Entwickler, die eigene Android-, iOS-, Desktop- oder WASM-Apps bauen; sie sind getrennt von der Chat-App, die Leser aus dem Store installieren.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Chat-Inhalte bleiben standardmäßig auf dem Gerät, und der Entwickler gibt an, dass nichts, was in den Chatbot getippt wird, an Firebase oder einen anderen Server gesendet wird.** Der Abschnitt „Datensicherheit“ bei Google Play erklärt, dass keine Daten an Dritte weitergegeben werden. Er führt Absturzprotokolle, Diagnosedaten und andere Leistungsdaten der App als erhoben für App-Funktionalität und Analysen auf, bei verschlüsselter Übertragung, und er besagt, dass der Entwickler keine Möglichkeit bietet, die Löschung dieser Daten zu beantragen.',
          'Die [Datenschutzerklärung](https://multiplatformkickstarter.com/llamatik-privacy.html), zuletzt aktualisiert am 20. November 2025, nennt Google Analytics for Firebase und Firebase Crashlytics und besagt, dass Firebase Performance Monitoring aktiviert sein kann. Analyseereignisse sind pseudonym (Bildschirmaufrufe, Gerätetyp, Version des Betriebssystems, Sprache und Leistungsmetriken). Absturzberichte enthalten Gerätemodell, Version des Betriebssystems, Stack-Traces und App-Version, aber keine Chat-Inhalte. Modelldateien stammen von öffentlichen Hosts wie Hugging Face, und die App protokolliert nicht, welches Modell Sie wählen.',
          'Die Website sagt: „Keine Konten. Kein Tracking.“ Diese Formulierung ist enger gefasst als die Datenschutzerklärung, denn Firebase-Analysen und Absturzberichte gelten weiterhin; die Beschreibung bei Google Play selbst besagt, dass das Internet nur für Modell-Downloads sowie für Analysen und Absturzberichte genutzt wird.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Der Quellcode ist öffentlich, aber PromptQuorum hat weder ihn noch den Netzwerkverkehr der App geprüft. Wer vertrauliche Daten verarbeitet, sollte das Verhalten auf dem eigenen Gerät überprüfen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Menschen, die Modelle auf dem Gerät ohne Kosten und ohne Konto ausprobieren möchten.** Die App ist kostenlos und bringt einen Downloader mit.',
          '**Kotlin- und Android-Entwickler, die das SDK bewerten.** Die App ist seine Referenz-Demo, und der Code steht unter der MIT-Lizenz.',
          '**Leser, die quelloffene Software bevorzugen.** Quellcode, Issues und Releases sind öffentlich.',
          '**Nutzer, die Diagnosedaten akzeptieren, ihre Chats aber lokal halten möchten.** Die Inhalte bleiben auf dem Gerät, während Firebase Absturz- und Nutzungsdaten erhält.',
          '**Nicht für Nutzer, die große Modelle oder Chat mit Dokumenten brauchen.** Die Einträge bieten keines von beiden.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praktische Leistung.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Akkuverbrauch und Antwortqualität wurden daher nicht bewertet.',
          '**Bildgenerierung und Sprache.** Eine Antwort des Entwicklers auf eine Bewertung bei Google Play erwähnt ein bekanntes Problem mit Downloads von Bildmodellen, was darauf hindeutet, dass es Bildgenerierung in einigen Builds gibt, doch keine Store-Beschreibung führt sie auf.',
          '**Modellgrößen und Hardware-Anforderungen.** Die Einträge nennen keine Download-Größen, RAM-Angaben oder Mindestversion von Android; die README nennt API-Level 26 für die Bibliothek, was nicht zwingend die Anforderung der App ist.',
          '**Import eigener Modelle.** Die Store-Beschreibungen erwähnen nur den integrierten Downloader.',
          '**Ob neuere SDK-Releases die Stores erreicht haben.** Die Store-Builds sind 1.9.0 vom 14. Mai 2026, und die Quellen sagen nicht, wann sie nachziehen.',
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
            'Wesentlicher Unterschied': 'Quelloffener On-Device-Chat-Client mit eigener Modellbibliothek',
          },
          {
            'App': '[Private Mind](/de/power-local-llm/private-mind-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Offline-Chat mit Dokumenten-Q&A auf dem Gerät und Benchmarks',
          },
          {
            'App': '[Off Grid](/de/power-local-llm/off-grid-ai-review)',
            'Plattformen': 'iOS, Android, Mac, Windows',
            'Preis / Lizenz': 'Freemium / MIT',
            'Wesentlicher Unterschied': 'Quelloffene Offline-KI-Suite für Telefone und Desktops',
          },
          {
            'App': '[Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Quelloffene On-Device-App vom AI-Edge-Team von Google',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag. Alle fünf Apps sind quelloffen, das Besondere an Llamatik ist also der Fokus auf das SDK, nicht die Lizenz.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Warum erscheint der Entwickler unter verschiedenen Namen?',
            a: 'Google Play führt den Entwickler als Multiplatform Kickstarter und hostet die Datenschutzerklärung auf dieser Domain, während der App Store Ferran Pons Sanchez als Verkäufer nennt und das GitHub-Repository Ferran Pons gehört.',
          },
          {
            q: 'Kann ich eigene GGUF-Modelle laden?',
            a: 'Die Store-Beschreibungen erwähnen nur den integrierten Downloader. Die README führt Funktionen zum Modellimport im SDK auf, ob die App sie anbietet, ist jedoch nicht angegeben.',
          },
          {
            q: 'Kann ich sie ausprobieren, ohne etwas zu installieren?',
            a: 'Die Website bietet eine Browser-Version unter [llamatik.com/prompt](https://www.llamatik.com/prompt). PromptQuorum hat nicht geprüft, wo diese Version ihre Modelle ausführt oder was sie sendet.',
          },
          {
            q: 'Wo melde ich ein Problem?',
            a: 'Im öffentlichen [Issue-Tracker](https://github.com/ferranpons/Llamatik/issues) des Repositorys auf GitHub oder über den Support-Kontakt im Eintrag bei Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Llamatik ist ein kostenloser, MIT-lizenzierter Offline-Chatbot für Android, iPhone und Desktop, der kleine Modelle über llama.cpp ausführt und zeigt, was das Kotlin-SDK seines Entwicklers leisten kann. Er ist quelloffen, und das Repository wurde wenige Tage vor dieser Rezension aktualisiert. Dagegen steht: Er ist eine experimentelle Demo mit kleinen Modellen, einer bescheidenen öffentlichen Bewertung, fünf Monate alten Store-Builds und Firebase-Analysen, die das Gerät weiterhin verlassen. Er eignet sich für Leser, die Chat auf dem Gerät quelloffen ausprobieren oder das SDK bewerten möchten; wer mehr Funktionen will, kann [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private Mind](/de/power-local-llm/private-mind-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Llamatik bei Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) — Beschreibung, Version, Bewertung, Download-Zahl und Abschnitt „Datensicherheit“, geprüft am 19. Oktober 2026.',
          '[Llamatik im App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) — Preis, Version und Anforderungen, geprüft am 19. Oktober 2026.',
          '[Llamatik-Website](https://www.llamatik.com/) und [Download-Seite](https://www.llamatik.com/download/) — Plattformen und Installer, geprüft am 19. Oktober 2026.',
          '[Llamatik-Datenschutzerklärung](https://multiplatformkickstarter.com/llamatik-privacy.html) — Datenverarbeitung und Drittanbieterdienste, zuletzt aktualisiert am 20. November 2025.',
          '[Llamatik auf GitHub](https://github.com/ferranpons/Llamatik) — README, MIT-Lizenz, Releases und Issue-Tracker, geprüft am 19. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App für iPhone und Android.',
          '[Off-Grid-Rezension](/de/power-local-llm/off-grid-ai-review) — eine quelloffene Offline-KI-Suite für Telefone und Desktops.',
          '[Google-AI-Edge-Gallery-Rezension](/de/power-local-llm/google-ai-edge-gallery-review) — Googles quelloffene On-Device-KI-App.',
          '[Die besten lokalen LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — die breitere Übersicht für Android.',
          '[Die besten lokalen LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere Übersicht für das iPhone.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llamatik-review-hero-es.webp',
    title: 'Análisis de Llamatik: chat de IA offline, gratuito y de código abierto para Android, iPhone y escritorio',
    seoTitle: 'Análisis de Llamatik: chat de IA offline de código abierto',
    intro:
      'Llamatik es un chat de IA offline, gratuito y con licencia MIT para Android, iPhone y escritorio, creado por el desarrollador independiente Ferran Pons como app de muestra de su SDK de código abierto Llamatik para Kotlin Multiplatform. Ejecuta pequeños modelos de lenguaje de pesos abiertos en el dispositivo mediante llama.cpp, y la versión para Android salió por primera vez en Google Play el 20 de noviembre de 2025. Este análisis refleja las fichas de las tiendas, el sitio web, la política de privacidad y el repositorio de GitHub, consultados el 19 de octubre de 2026.',
    metaDescription:
      'Análisis de Llamatik: chat de IA offline, gratuito y con licencia MIT para Android, iPhone y escritorio. Modelos, analítica de Firebase y dudas abiertas.',
    twitterDescription:
      'Análisis de Llamatik: un chat de IA offline, gratuito y de código abierto para Android, iPhone y escritorio que sirve también de demo de un SDK de IA en el dispositivo para Kotlin. Lo que dicen las fichas, la política de privacidad y el repositorio.',
    audience:
      'Usuarios de Android y iPhone que quieren un chat gratuito y de código abierto que ejecute modelos de lenguaje en el dispositivo, y que necesitan saber qué se queda offline, qué se envía fuera y qué no confirman las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de Llamatik',
    targetKeywords: [
      'opiniones app llamatik',
      'llamatik chat de ia local',
      'chat de ia offline android',
      'app de llm en el dispositivo de código abierto',
      'llamatik sdk kotlin multiplatform',
      'app llama.cpp android',
      'llamatik vs pocketpal',
    ],
    current_models_mentioned: ['Gemma', 'SmolVLM', 'Phi', 'Qwen', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone'],
    leadAnswerBlock:
      '**Llamatik (versión 1.9.0 en Google Play y en la App Store a fecha del 19 de octubre de 2026) es un chat offline de código abierto que su propia ficha describe como una muestra experimental del SDK de Kotlin de su desarrollador, no como un asistente completo.** Los modelos se descargan una sola vez y después se ejecutan en el teléfono. La analítica y los informes de fallos de Firebase sí salen del dispositivo, así que lee la sección de privacidad antes de fiarte de la frase «sin rastreo» del sitio web.',
    quickAnswerTop: {
      es: {
        question: '¿Llamatik es realmente gratuita y offline?',
        answer:
          'Según sus fichas, sí en el chat: la app es gratuita, Google Play no muestra anuncios ni etiquetas de compra, y las conversaciones se ejecutan en el teléfono sin conexión a internet una vez descargado un modelo.',
        bullets: [
          'Gratis en [Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) y en la [App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708), con instaladores de escritorio en la [página de descarga](https://www.llamatik.com/download/).',
          'Descargas dentro de la app de modelos pequeños como Gemma 3 270M, SmolVLM, Phi-1.5, Qwen 2.5 y Llama 3.2 1B.',
          'Selector de modelos, sugerencias inteligentes y prompts rápidos en la pantalla del chat.',
          'Código fuente en [GitHub](https://github.com/ferranpons/Llamatik).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Llamatik?', anchor: 'what-is-llamatik' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Código abierto y el SDK de Llamatik', anchor: 'open-source' },
      { label: 'Privacidad y uso de la red', anchor: 'privacy' },
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
            text: 'Llamatik es un chat gratuito y de código abierto para Android, iPhone y escritorio que ejecuta pequeños modelos de lenguaje en el dispositivo y sirve también de app de demostración del SDK de Kotlin de su desarrollador.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas, descargas un modelo una sola vez y después chateas sin cuenta y sin conexión a internet; como es una demo, espera una interfaz sencilla y modelos pequeños en lugar de un asistente completo.',
          },
        ],
        items: [
          'Desarrollador: Ferran Pons, un desarrollador independiente sin ninguna empresa nombrada en el sitio web; el código está en [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) con licencia MIT.',
          'Mantenimiento: el repositorio publicó la versión v2.0.0 el 14 de octubre de 2026, así que no se aplica ningún aviso de proyecto abandonado; en cambio, las versiones de las tiendas son la 1.9.0 del 14 de mayo de 2026.',
          'Alcance: Google Play muestra 1K+ descargas y una valoración de 3.9 sobre 48 valoraciones, y la App Store muestra 3.0 con dos valoraciones, por lo que el historial público es escaso.',
          'Plataformas: Android, iPhone (iOS 16.6 o posterior), macOS, Windows, Linux Debian/Ubuntu y una versión para navegador en [llamatik.com/prompt](https://www.llamatik.com/prompt).',
          'Modelos: modelos de pesos abiertos, pequeños y cuantizados, que la propia app descarga; la ficha no indica tamaños de descarga ni requisitos de RAM.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en las fichas de Google Play y la App Store, el sitio web, la política de privacidad y el repositorio público de GitHub, consultados el 19 de octubre de 2026. PromptQuorum no ha instalado, probado ni evaluado con pruebas comparativas la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-llamatik',
        title: '¿Qué es Llamatik?',
        content: [
          '**Llamatik es una app de chat offline que ejecuta modelos de lenguaje de pesos abiertos en el teléfono en lugar de llamar a un servicio en la nube.** La descripción de Google Play la presenta como una muestra experimental de la biblioteca Llamatik para Kotlin Multiplatform. No incluye ningún modelo: descargas al menos uno dentro de la app, lo eliges en un selector de modelos y chateas. La ficha nombra Gemma 3 270M, SmolVLM 256M y 500M, Phi-1.5, Qwen 2.5 y un Llama 3.2 1B cuantizado.',
          'Tres productos comparten el nombre. Este análisis cubre la app de chat, titulada «Llamatik - Local AI Chatbot» en Google Play (paquete com.llamatik.app.android). El SDK de Llamatik es la biblioteca que la impulsa, y Llamatik Server es un backend de inferencia remota aparte del mismo proyecto. El sitio web también menciona un plugin Llamatik Code para los IDE de JetBrains, que este análisis no cubre.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**Llamatik se instala con solo descargarla y abrirla en todas las plataformas compatibles: dos tiendas móviles más instaladores de escritorio desde el sitio web.** Los enlaces siguientes son los que usa el sitio web del desarrollador.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) (gratis)',
          },
          {
            'Plataforma': 'iPhone',
            'Dónde obtenerla': '[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) (gratis, iOS 16.6 o posterior)',
          },
          {
            'Plataforma': 'macOS',
            'Dónde obtenerla': '[Instalador .dmg](https://www.llamatik.com/download/) (Apple Silicon e Intel)',
          },
          {
            'Plataforma': 'Windows',
            'Dónde obtenerla': '[Instalador .msi](https://www.llamatik.com/download/) (Windows 10 o posterior)',
          },
          {
            'Plataforma': 'Linux',
            'Dónde obtenerla': '[Paquete .deb](https://www.llamatik.com/download/) (Debian/Ubuntu, probado en Ubuntu 22.04 o posterior)',
          },
          {
            'Plataforma': 'Navegador',
            'Dónde obtenerla': '[App web](https://www.llamatik.com/prompt) (sin instalación)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[llamatik.com](https://www.llamatik.com/)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Política de privacidad de Llamatik](https://multiplatformkickstarter.com/llamatik-privacy.html) (actualizada el 20 nov 2025)',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde obtenerla': '[GitHub](https://github.com/ferranpons/Llamatik) (MIT)',
          },
        ],
        note: 'Versión analizada: 1.9.0, que figura tanto en Google Play como en la App Store. Los instaladores de escritorio adjuntos a las versiones del repositorio también se llaman 1.9.0, incluso bajo etiquetas como v2.0.0, así que las etiquetas parecen seguir la versión del SDK y no la de la app. El texto de la página de descarga aún muestra un nombre de paquete 1.8.0 en su ejemplo de instalación.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración sigue el orden descrito en la ficha de la tienda; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga Llamatik desde Google Play o la App Store; ni las fichas ni el sitio web mencionan una cuenta.',
          },
          {
            title: 'Descarga un modelo con Wi-Fi',
            whyItMatters: 'La descripción de Google Play dice que hay que descargar al menos un modelo antes de poder chatear. Empieza por el más pequeño, porque la ficha no indica tamaños de archivo.',
          },
          {
            title: 'Chatea',
            whyItMatters: 'Escribe un prompt o toca una sugerencia o un prompt rápido, y cambia de modelo desde el selector cuando quieras comparar respuestas.',
          },
          {
            title: 'Si quieres, prueba antes la versión para navegador',
            whyItMatters: 'El sitio web ofrece una app web que no necesita instalación, una forma sencilla de ver la interfaz antes de descargar modelos.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de la descripción de Google Play, del sitio web o del README del repositorio.**',
        ],
        items: [
          '**Generación de texto en el dispositivo.** El chat se ejecuta con llama.cpp en el teléfono, sin necesidad de conexión una vez instalado un modelo.',
          '**Descargador de modelos integrado.** La app descarga, instala y cambia entre los modelos que admite, así que no hace falta manejar archivos.',
          '**Interfaz de chat sencilla.** Sugerencias inteligentes, prompts rápidos, un selector de modelos y un flujo de bienvenida.',
          '**Streaming y voz.** El README del repositorio dice que la app muestra la generación en streaming y el reconocimiento de voz con whisper.cpp; el texto de Google Play no menciona ninguno de los dos, así que comprueba la compilación instalada.',
          '**Versiones de escritorio y navegador.** El mismo proyecto ofrece instaladores para macOS, Windows y Linux y una app para navegador.',
        ],
        note: 'Las listas de funciones de las páginas de las tiendas son breves. El README también describe capacidades del SDK, como recuperación de información, agentes y generación de imágenes, que no están confirmadas para la propia app.',
      },
      openSource: {
        id: 'open-source',
        title: 'Código abierto y el SDK de Llamatik',
        content: [
          '**La app es la demo pública de un proyecto de código abierto más grande.** El repositorio en [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) tiene licencia MIT, se creó en julio de 2025 y muestra 206 estrellas y 12 incidencias abiertas el 19 de octubre de 2026. Contiene las apps, el SDK de Kotlin Multiplatform y los bindings nativos de llama.cpp, whisper.cpp y stable-diffusion.cpp.',
          'Según el README, la versión 2.0.0 del 14 de octubre de 2026 renombró la biblioteca de inferencia a com.llamatik:core y añadió un SDK de lógica de negocio con chat, gestión de modelos y recuperación de información, un framework de agentes y un entorno de ejecución de agentes con gestión de permisos. Estas piezas están pensadas para desarrolladores que crean sus propias apps para Android, iOS, escritorio o WASM; son independientes de la app de chat que un lector instala desde la tienda.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**El contenido del chat se queda en el dispositivo por defecto, y el desarrollador dice que nada de lo que escribes en el chat se envía a Firebase ni a ningún otro servidor.** La sección Seguridad de los datos de Google Play declara que no se comparten datos con terceros. Enumera los registros de fallos, los diagnósticos y otros datos de rendimiento de la app como recopilados para el funcionamiento de la app y para analítica, cifrados en tránsito, y dice que el desarrollador no ofrece ninguna forma de solicitar la eliminación de esos datos.',
          'La [política de privacidad](https://multiplatformkickstarter.com/llamatik-privacy.html), actualizada por última vez el 20 de noviembre de 2025, nombra Google Analytics para Firebase y Firebase Crashlytics, y dice que puede estar activado Firebase Performance Monitoring. Los eventos de analítica son seudónimos (vistas de pantalla, tipo de dispositivo, versión del sistema operativo, idioma y métricas de rendimiento). Los informes de fallos incluyen el modelo del dispositivo, la versión del sistema operativo, los stack traces y la versión de la app, pero no el contenido de los chats. Los archivos de modelos proceden de servidores públicos como Hugging Face, y la app no registra qué modelo eliges.',
          'El sitio web dice «Sin cuentas. Sin rastreo». Esa frase es más estrecha que la política, porque la analítica y los informes de fallos de Firebase siguen vigentes; la propia descripción de Google Play dice que internet se usa solo para descargar modelos y para la analítica y los informes de fallos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código fuente es público, pero PromptQuorum no lo ha auditado ni ha auditado el tráfico de red de la app. Quien maneje datos confidenciales debería verificar el comportamiento en su propio dispositivo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas que quieren probar modelos en el dispositivo sin coste y sin cuenta.** La app es gratuita e incluye un descargador.',
          '**Desarrolladores de Kotlin y Android que evalúan el SDK.** La app es su demo de referencia y el código tiene licencia MIT.',
          '**Lectores que prefieren el software de código abierto.** El código fuente, las incidencias y las versiones son públicos.',
          '**Usuarios que aceptan los diagnósticos pero quieren sus chats en local.** El contenido se queda en el dispositivo mientras Firebase recibe datos de fallos y de uso.',
          '**No es para quien necesita modelos grandes o chat con documentos.** Las fichas no ofrecen ninguno de los dos.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en la práctica.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, el consumo de batería ni la calidad de las respuestas.',
          '**Generación de imágenes y voz.** La respuesta de un desarrollador a una reseña de Google Play menciona un problema conocido con la descarga de modelos de imágenes, lo que sugiere que la generación de imágenes existe en algunas compilaciones, pero ninguna descripción de las tiendas la menciona.',
          '**Tamaños de modelos y requisitos de hardware.** Las fichas no indican tamaños de descarga, cifras de RAM ni versión mínima de Android; el README indica el nivel de API 26 para la biblioteca, que no es necesariamente el requisito de la app.',
          '**Importar tus propios modelos.** Las descripciones de las tiendas mencionan solo el descargador integrado.',
          '**Si las versiones más recientes del SDK han llegado a las tiendas.** Las versiones de las tiendas son la 1.9.0 del 14 de mayo de 2026, y las fuentes no dicen cuándo se actualizarán.',
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
            'Diferencia clave': 'Chat offline de código abierto con preguntas sobre documentos en el dispositivo y pruebas de rendimiento',
          },
          {
            'App': '[Off Grid](/es/power-local-llm/off-grid-ai-review)',
            'Plataformas': 'iOS, Android, Mac, Windows',
            'Precio / licencia': 'Freemium / MIT',
            'Diferencia clave': 'Suite de IA offline de código abierto para teléfonos y ordenadores de escritorio',
          },
          {
            'App': '[Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'App de código abierto en el dispositivo del equipo de AI Edge de Google',
          },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha. Las cinco apps son de código abierto, así que el rasgo distintivo de Llamatik es su enfoque en el SDK, no su licencia.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Por qué el desarrollador aparece con nombres distintos?',
            a: 'Google Play indica como desarrollador a Multiplatform Kickstarter y aloja la política de privacidad en ese dominio, mientras que la App Store indica a Ferran Pons Sanchez como vendedor y el repositorio de GitHub pertenece a Ferran Pons.',
          },
          {
            q: '¿Puedo cargar mis propios modelos GGUF?',
            a: 'Las descripciones de las tiendas solo mencionan el descargador integrado. El README enumera funciones de importación de modelos en el SDK, pero no indica si la app las ofrece.',
          },
          {
            q: '¿Puedo probarla sin instalar nada?',
            a: 'El sitio web ofrece una versión para navegador en [llamatik.com/prompt](https://www.llamatik.com/prompt). PromptQuorum no ha comprobado dónde ejecuta esa versión sus modelos ni qué envía.',
          },
          {
            q: '¿Dónde informo de un problema?',
            a: 'En el [gestor de incidencias](https://github.com/ferranpons/Llamatik/issues) público del repositorio en GitHub, o por el contacto de soporte que aparece en la ficha de Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Llamatik es un chat offline gratuito y con licencia MIT para Android, iPhone y escritorio que ejecuta pequeños modelos con llama.cpp y muestra lo que puede hacer el SDK de Kotlin de su desarrollador. Es de código abierto y el repositorio se actualizó unos días antes de este análisis. En contra, es una demo experimental con modelos pequeños, una valoración pública modesta, versiones de las tiendas con cinco meses de antigüedad y una analítica de Firebase que sigue saliendo del dispositivo. Encaja con quienes quieren una forma de código abierto de probar el chat en el dispositivo o evalúan el SDK; quienes quieran más funciones pueden comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private Mind](/es/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Llamatik en Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) — descripción, versión, valoración, número de descargas y sección Seguridad de los datos, consultados el 19 de octubre de 2026.',
          '[Llamatik en la App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) — precio, versión y requisitos, consultados el 19 de octubre de 2026.',
          '[Sitio web de Llamatik](https://www.llamatik.com/) y [página de descarga](https://www.llamatik.com/download/) — plataformas e instaladores, consultados el 19 de octubre de 2026.',
          '[Política de privacidad de Llamatik](https://multiplatformkickstarter.com/llamatik-privacy.html) — tratamiento de datos y servicios de terceros, actualizada por última vez el 20 de noviembre de 2025.',
          '[Llamatik en GitHub](https://github.com/ferranpons/Llamatik) — README, licencia MIT, versiones y gestor de incidencias, consultados el 19 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat en el dispositivo gratuito y de código abierto para iOS y Android.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita y con licencia MIT para iPhone y Android.',
          '[Análisis de Off Grid](/es/power-local-llm/off-grid-ai-review) — una suite de IA offline de código abierto para teléfonos y ordenadores de escritorio.',
          '[Análisis de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app de IA en el dispositivo de código abierto de Google.',
          '[Las mejores apps de LLM local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — la selección más amplia para Android.',
          '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la selección más amplia para iPhone.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llamatik-review-hero-fr.webp',
    title: 'Avis Llamatik : chatbot IA gratuit, open source et hors ligne pour Android, iPhone et ordinateur',
    seoTitle: 'Avis Llamatik : chatbot IA open source gratuit hors ligne',
    intro:
      'Llamatik est un chatbot IA hors ligne, gratuit et sous licence MIT, pour Android, iPhone et ordinateur. Il a été créé par le développeur indépendant Ferran Pons comme application vitrine de son SDK open source Llamatik en Kotlin Multiplatform. Il exécute de petits modèles de langage à poids ouverts sur l\'appareil grâce à llama.cpp, et la version Android est sortie pour la première fois sur Google Play le 20 novembre 2025. Cet avis reflète les fiches des boutiques, le site, la politique de confidentialité et le dépôt GitHub, consultés le 19 octobre 2026.',
    metaDescription:
      'Avis Llamatik : chatbot IA gratuit, hors ligne et sous licence MIT pour Android, iPhone et ordinateur. Modèles, analytique Firebase et points non vérifiés.',
    twitterDescription:
      'Avis Llamatik : un chatbot IA hors ligne, gratuit et open source pour Android, iPhone et ordinateur, démo d\'un SDK Kotlin. Ce que disent les fiches, la politique de confidentialité et le dépôt.',
    audience:
      'Utilisateurs d\'Android et d\'iPhone qui veulent un chatbot gratuit et open source exécutant des modèles de langage sur l\'appareil, et qui ont besoin de savoir ce qui reste hors ligne, ce qui est envoyé à l\'extérieur et ce que les sources ne confirment pas.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis Llamatik',
    targetKeywords: [
      'avis application llamatik',
      'llamatik chatbot ia local',
      'chatbot ia hors ligne android',
      'application llm open source sur l\'appareil',
      'llamatik sdk kotlin multiplatform',
      'application android llama.cpp',
      'llamatik vs pocketpal',
    ],
    current_models_mentioned: ['Gemma', 'SmolVLM', 'Phi', 'Qwen', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone'],
    leadAnswerBlock:
      '**Llamatik (version 1.9.0 sur Google Play et l\'App Store au 19 octobre 2026) est un chatbot hors ligne open source que sa propre fiche présente comme une vitrine expérimentale du SDK Kotlin de son développeur, et non comme un assistant complet.** Les modèles sont téléchargés une seule fois, puis exécutés sur le téléphone. L\'analytique et les rapports de plantage de Firebase quittent bien l\'appareil : lisez la section sur la confidentialité avant de vous fier à la mention « aucun suivi » du site.',
    quickAnswerTop: {
      fr: {
        question: 'Llamatik est-elle vraiment gratuite et hors ligne ?',
        answer:
          'Selon ses fiches, oui pour le chat lui-même : l\'application est gratuite, Google Play n\'affiche ni publicité ni mention d\'achat, et les conversations s\'exécutent sur le téléphone sans connexion internet une fois un modèle téléchargé.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) et l\'[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708), avec des installateurs pour ordinateur sur la [page de téléchargement](https://www.llamatik.com/download/).',
          'Téléchargement dans l\'application de petits modèles tels que Gemma 3 270M, SmolVLM, Phi-1.5, Qwen 2.5 et Llama 3.2 1B.',
          'Sélecteur de modèle, suggestions intelligentes et invites rapides dans l\'écran de chat.',
          'Code source sur [GitHub](https://github.com/ferranpons/Llamatik).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Llamatik ?', anchor: 'what-is-llamatik' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Open source et SDK Llamatik', anchor: 'open-source' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
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
            text: 'Llamatik est un chatbot gratuit et open source pour Android, iPhone et ordinateur, qui exécute de petits modèles de langage sur l\'appareil et sert aussi d\'application de démonstration au SDK Kotlin de son développeur.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez, téléchargez un modèle une seule fois, puis discutez sans compte ni connexion internet ; comme il s\'agit d\'une démo, attendez-vous à une interface simple et à de petits modèles plutôt qu\'à un assistant complet.',
          },
        ],
        items: [
          'Développeur : Ferran Pons, développeur indépendant, sans société mentionnée sur le site ; le code est sur [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) sous licence MIT.',
          'Maintenance : le dépôt a publié la version v2.0.0 le 14 octobre 2026, aucun avertissement de projet inactif ne s\'applique donc ; les versions des boutiques sont toutefois en 1.9.0, datant du 14 mai 2026.',
          'Audience : Google Play affiche plus de 1K téléchargements et une note de 3.9 sur 48 évaluations, et l\'App Store affiche 3.0 sur deux évaluations ; l\'historique public est donc mince.',
          'Plateformes : Android, iPhone (iOS 16.6 ou version ultérieure), macOS, Windows, Linux Debian/Ubuntu et une version navigateur sur [llamatik.com/prompt](https://www.llamatik.com/prompt).',
          'Modèles : de petits modèles à poids ouverts et quantifiés, que l\'application télécharge elle-même ; la fiche n\'indique ni taille de téléchargement ni besoins en RAM.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur les fiches de Google Play et de l\'App Store, le site, la politique de confidentialité et le dépôt GitHub public, consultés le 19 octobre 2026. PromptQuorum n\'a ni installé, ni testé, ni évalué l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-llamatik',
        title: 'Qu\'est-ce que Llamatik ?',
        content: [
          '**Llamatik est une application de chatbot hors ligne qui exécute des modèles de langage à poids ouverts sur le téléphone, au lieu d\'appeler un service cloud.** La description Google Play la présente comme une vitrine expérimentale de la bibliothèque Llamatik en Kotlin Multiplatform. Aucun modèle n\'est fourni : vous en téléchargez au moins un dans l\'application, le choisissez dans un sélecteur et discutez. La fiche cite Gemma 3 270M, SmolVLM 256M et 500M, Phi-1.5, Qwen 2.5 et un Llama 3.2 1B quantifié.',
          'Trois produits portent ce nom. Cet avis porte sur l\'application de chat, intitulée « Llamatik - Local AI Chatbot » sur Google Play (paquet com.llamatik.app.android). Le SDK Llamatik est la bibliothèque qui la fait fonctionner, et Llamatik Server est un backend d\'inférence distant distinct, issu du même projet. Le site mentionne aussi un plugin Llamatik Code pour les IDE JetBrains, que cet avis ne couvre pas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**Llamatik s\'installe par simple téléchargement sur chaque plateforme prise en charge : deux boutiques mobiles et des installateurs pour ordinateur sur le site.** Les liens ci-dessous sont ceux qu\'utilise le site du développeur.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) (gratuite)',
          },
          {
            'Plateforme': 'iPhone',
            'Où la trouver': '[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) (gratuite, iOS 16.6 ou ultérieur)',
          },
          {
            'Plateforme': 'macOS',
            'Où la trouver': '[Installateur .dmg](https://www.llamatik.com/download/) (Apple Silicon et Intel)',
          },
          {
            'Plateforme': 'Windows',
            'Où la trouver': '[Installateur .msi](https://www.llamatik.com/download/) (Windows 10 ou ultérieur)',
          },
          {
            'Plateforme': 'Linux',
            'Où la trouver': '[Paquet .deb](https://www.llamatik.com/download/) (Debian/Ubuntu, testé sur Ubuntu 22.04 ou ultérieur)',
          },
          {
            'Plateforme': 'Navigateur',
            'Où la trouver': '[Application web](https://www.llamatik.com/prompt) (sans installation)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[llamatik.com](https://www.llamatik.com/)',
          },
          {
            'Plateforme': 'Confidentialité',
            'Où la trouver': '[Politique de confidentialité de Llamatik](https://multiplatformkickstarter.com/llamatik-privacy.html) (mise à jour le 20 novembre 2025)',
          },
          {
            'Plateforme': 'Code source',
            'Où la trouver': '[GitHub](https://github.com/ferranpons/Llamatik) (MIT)',
          },
        ],
        note: 'Version examinée : 1.9.0, affichée à la fois sur Google Play et sur l\'App Store. Les installateurs pour ordinateur joints aux versions du dépôt portent eux aussi le numéro 1.9.0, même sous des étiquettes comme v2.0.0 ; les étiquettes semblent donc suivre le SDK plutôt que la version de l\'application. Le texte de la page de téléchargement montre encore un nom de paquet 1.8.0 dans son exemple d\'installation.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La configuration suit l\'ordre décrit dans la fiche de la boutique ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Téléchargez Llamatik depuis Google Play ou l\'App Store ; ni les fiches ni le site ne mentionnent de compte.',
          },
          {
            title: 'Télécharger un modèle en Wi-Fi',
            whyItMatters: 'La description Google Play indique qu\'au moins un modèle doit être téléchargé avant de pouvoir discuter. Commencez par le plus petit, car la fiche n\'indique aucune taille de fichier.',
          },
          {
            title: 'Discuter',
            whyItMatters: 'Saisissez une invite ou touchez une suggestion ou une invite rapide, puis changez de modèle depuis le sélecteur pour comparer les réponses.',
          },
          {
            title: 'Essayer d\'abord la version navigateur, si souhaité',
            whyItMatters: 'Le site propose une application web sans installation, un moyen simple de découvrir l\'interface avant de télécharger des modèles.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Google Play, du site ou du README du dépôt.**',
        ],
        items: [
          '**Génération de texte sur l\'appareil.** Le chat passe par llama.cpp sur le téléphone, sans connexion nécessaire une fois un modèle installé.',
          '**Téléchargeur de modèles intégré.** L\'application télécharge, installe et alterne entre les modèles pris en charge, sans manipulation de fichiers.',
          '**Interface de chat simple.** Suggestions intelligentes, invites rapides, sélecteur de modèle et parcours d\'accueil.',
          '**Streaming et voix.** Le README du dépôt indique que l\'application met en avant la génération en streaming et la reconnaissance vocale whisper.cpp ; le texte Google Play ne mentionne ni l\'une ni l\'autre, vérifiez donc la build installée.',
          '**Versions pour ordinateur et navigateur.** Le même projet propose des installateurs macOS, Windows et Linux ainsi qu\'une application dans le navigateur.',
        ],
        note: 'Les listes de fonctions des pages de boutique sont courtes. Le README décrit aussi des capacités du SDK, comme la recherche documentaire, les agents et la génération d\'images, qui ne sont pas confirmées pour l\'application elle-même.',
      },
      openSource: {
        id: 'open-source',
        title: 'Open source et SDK Llamatik',
        content: [
          '**L\'application est la démo publique d\'un projet open source plus vaste.** Le dépôt [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) est sous licence MIT, a été créé en juillet 2025 et affichait 206 étoiles et 12 tickets ouverts le 19 octobre 2026. Il contient les applications, le SDK Kotlin Multiplatform et les liaisons natives pour llama.cpp, whisper.cpp et stable-diffusion.cpp.',
          'D\'après le README, la version 2.0.0 du 14 octobre 2026 a renommé la bibliothèque d\'inférence en com.llamatik:core et ajouté un SDK de logique métier avec chat, gestion des modèles et recherche documentaire, un framework d\'agents et un environnement d\'exécution d\'agents avec gestion des autorisations. Ces éléments s\'adressent aux développeurs qui créent leurs propres applications Android, iOS, ordinateur ou WASM ; ils sont distincts de l\'application de chat que l\'on installe depuis la boutique.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Le contenu des conversations reste par défaut sur l\'appareil, et le développeur affirme que rien de ce qui est saisi dans le chatbot n\'est envoyé à Firebase ni à un autre serveur.** La section Sécurité des données de Google Play ne déclare aucune donnée partagée avec des tiers. Elle indique que les journaux de plantage, les diagnostics et d\'autres données de performance de l\'application sont collectés pour le fonctionnement de l\'application et l\'analytique, chiffrés en transit, et que le développeur ne propose aucun moyen de demander la suppression de ces données.',
          'La [politique de confidentialité](https://multiplatformkickstarter.com/llamatik-privacy.html), mise à jour le 20 novembre 2025, cite Google Analytics pour Firebase et Firebase Crashlytics, et précise que Firebase Performance Monitoring peut être activé. Les événements d\'analytique sont pseudonymes (affichages d\'écran, type d\'appareil, version du système d\'exploitation, langue et mesures de performance). Les rapports de plantage contiennent le modèle de l\'appareil, la version du système d\'exploitation, les traces d\'appel et la version de l\'application, mais aucun contenu de conversation. Les fichiers de modèle proviennent d\'hébergeurs publics comme Hugging Face, et l\'application n\'enregistre pas quel modèle vous choisissez.',
          'Le site affiche « Aucun compte. Aucun suivi. » Cette formulation est plus étroite que la politique, car l\'analytique et les rapports de plantage de Firebase s\'appliquent toujours ; la description Google Play indique elle-même qu\'internet n\'est utilisé que pour télécharger les modèles, ainsi que pour l\'analytique et les rapports de plantage.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code source est public, mais PromptQuorum ne l\'a pas audité, pas plus que le trafic réseau de l\'application. Quiconque traite des données confidentielles devrait vérifier le comportement sur son propre appareil.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les personnes qui veulent essayer des modèles sur l\'appareil sans frais ni compte.** L\'application est gratuite et inclut un téléchargeur.',
          '**Les développeurs Kotlin et Android qui évaluent le SDK.** L\'application en est la démo de référence et le code est sous licence MIT.',
          '**Les lecteurs qui préfèrent les logiciels open source.** Le code, les tickets et les versions sont publics.',
          '**Les utilisateurs qui acceptent les diagnostics mais veulent garder leurs conversations en local.** Le contenu reste sur l\'appareil, tandis que Firebase reçoit les données de plantage et d\'usage.',
          '**Pas adaptée à ceux qui ont besoin de gros modèles ou de discuter avec des documents.** Les fiches n\'offrent ni l\'un ni l\'autre.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Performances en pratique.** PromptQuorum n\'a pas exécuté l\'application : la vitesse, la consommation de batterie et la qualité des réponses ne sont donc pas évaluées.',
          '**Génération d\'images et voix.** Une réponse du développeur à un avis Google Play mentionne un problème connu de téléchargement des modèles d\'image, ce qui laisse penser que la génération d\'images existe dans certaines builds, mais aucune description de boutique ne la cite.',
          '**Taille des modèles et besoins matériels.** Les fiches n\'indiquent ni taille de téléchargement, ni RAM, ni version minimale d\'Android ; le README indique le niveau d\'API 26 pour la bibliothèque, ce qui n\'est pas forcément le prérequis de l\'application.',
          '**Import de vos propres modèles.** Les descriptions des boutiques ne mentionnent que le téléchargeur intégré.',
          '**Arrivée ou non des versions récentes du SDK dans les boutiques.** Les versions des boutiques sont en 1.9.0, datant du 14 mai 2026, et les sources n\'indiquent pas quand elles évolueront.',
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
            'Différence clé': 'Chat hors ligne open source avec Q&R sur documents sur l\'appareil et benchmarks',
          },
          {
            'Application': '[Off Grid](/fr/power-local-llm/off-grid-ai-review)',
            'Plateformes': 'iOS, Android, Mac, Windows',
            'Prix / licence': 'Freemium / MIT',
            'Différence clé': 'Suite d\'IA hors ligne open source sur téléphones et ordinateurs',
          },
          {
            'Application': '[Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / Apache 2.0',
            'Différence clé': 'Application open source sur l\'appareil de l\'équipe Google AI Edge',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche. Ces cinq applications sont toutes open source : ce qui distingue Llamatik, c\'est donc l\'accent mis sur son SDK, pas sa licence.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Pourquoi le développeur apparaît-il sous des noms différents ?',
            a: 'Google Play indique le développeur comme Multiplatform Kickstarter et héberge la politique de confidentialité sur ce domaine, tandis que l\'App Store indique Ferran Pons Sanchez comme vendeur et que le dépôt GitHub appartient à Ferran Pons.',
          },
          {
            q: 'Puis-je charger mes propres modèles GGUF ?',
            a: 'Les descriptions des boutiques ne mentionnent que le téléchargeur intégré. Le README liste des fonctions d\'import de modèles dans le SDK, mais rien n\'indique si l\'application les expose.',
          },
          {
            q: 'Puis-je l\'essayer sans rien installer ?',
            a: 'Le site propose une version navigateur sur [llamatik.com/prompt](https://www.llamatik.com/prompt). PromptQuorum n\'a pas vérifié où cette version exécute ses modèles ni ce qu\'elle envoie.',
          },
          {
            q: 'Où signaler un problème ?',
            a: 'Dans le [suivi des tickets](https://github.com/ferranpons/Llamatik/issues) public du dépôt sur GitHub, ou via le contact d\'assistance indiqué sur la fiche Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Llamatik est un chatbot hors ligne gratuit et sous licence MIT pour Android, iPhone et ordinateur, qui exécute de petits modèles via llama.cpp et montre ce que le SDK Kotlin de son développeur sait faire. Il est open source et le dépôt a été mis à jour quelques jours avant cet avis. En contrepartie, c\'est une démo expérimentale avec de petits modèles, une note publique modeste, des versions de boutique vieilles de cinq mois et une analytique Firebase qui quitte toujours l\'appareil. Il convient aux lecteurs qui veulent un moyen open source d\'essayer le chat sur l\'appareil, ou qui évaluent le SDK ; ceux qui veulent davantage de fonctions peuvent comparer [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private Mind](/fr/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Llamatik sur Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) — description, version, note, nombre de téléchargements et section Sécurité des données, consultés le 19 octobre 2026.',
          '[Llamatik sur l\'App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) — prix, version et prérequis, consultés le 19 octobre 2026.',
          '[Site web de Llamatik](https://www.llamatik.com/) et [page de téléchargement](https://www.llamatik.com/download/) — plateformes et installateurs, consultés le 19 octobre 2026.',
          '[Politique de confidentialité de Llamatik](https://multiplatformkickstarter.com/llamatik-privacy.html) — traitement des données et services tiers, mise à jour le 20 novembre 2025.',
          '[Llamatik sur GitHub](https://github.com/ferranpons/Llamatik) — README, licence MIT, versions et suivi des tickets, consultés le 19 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source gratuit sur l\'appareil pour iOS et Android.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite, sous licence MIT, pour iPhone et Android.',
          '[Avis Off Grid](/fr/power-local-llm/off-grid-ai-review) — une suite d\'IA hors ligne open source pour téléphones et ordinateurs.',
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application d\'IA open source sur l\'appareil de Google.',
          '[Les meilleures applications de LLM local pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le comparatif Android plus large.',
          '[Les meilleures applications de LLM local pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif iPhone plus large.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llamatik-review-hero-ja.webp',
    title: 'Llamatikレビュー:Android・iPhone・デスクトップ向けの無料オープンソースのオフラインAIチャット',
    seoTitle: 'Llamatikレビュー:無料のオープンソースAIチャット',
    intro:
      'Llamatikは、独立系開発者Ferran Pons氏が、自身のオープンソースKotlin Multiplatform SDK「Llamatik」のショーケースアプリとして開発した、Android・iPhone・デスクトップ向けの無料でMITライセンスのオフラインAIチャットアプリです。llama.cppを通じて、小型のオープンウェイト言語モデルを端末上で動かします。Android版がGoogle Playで最初にリリースされたのは2025年11月20日でした。本レビューは、2026年10月19日に確認したストアの掲載情報、ウェブサイト、プライバシーポリシー、GitHubリポジトリに基づいています。',
    metaDescription:
      'Llamatikレビュー:Android・iPhone・デスクトップ向けの無料でMITライセンスのオフラインAIチャット。モデル、Firebase分析、更新状況、未確認の点を解説します。',
    twitterDescription:
      'Llamatikレビュー:Kotlin製の端末内AI SDKのデモを兼ねた、Android・iPhone・デスクトップ向けの無料のオープンソースのオフラインAIチャットアプリ。ストアの掲載情報、プライバシーポリシー、リポジトリの内容を解説します。',
    audience:
      '言語モデルを端末上で動かす無料のオープンソースのチャットアプリを求めるAndroidとiPhoneのユーザーで、何がオフラインのままなのか、何が外部に送信されるのか、情報源が何を確認していないのかを知りたい方向け。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llamatik レビュー',
    targetKeywords: [
      'llamatik アプリ レビュー',
      'llamatik ローカル aiチャット',
      'オフライン aiチャット android',
      'オープンソース 端末内 llm アプリ',
      'llamatik kotlin multiplatform sdk',
      'llama.cpp android アプリ',
      'llamatik pocketpal 比較',
    ],
    current_models_mentioned: ['Gemma', 'SmolVLM', 'Phi', 'Qwen', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone'],
    leadAnswerBlock:
      '**Llamatik(2026年10月19日時点のGoogle PlayとApp Storeのバージョンは1.9.0)は、掲載情報自身が開発者のKotlin SDKの実験的なショーケースであり、多機能なアシスタントではないと説明している、オープンソースのオフラインチャットアプリです。** モデルは一度ダウンロードすれば、その後は端末上で動作します。Firebaseの分析データとクラッシュレポートは端末の外に送られるため、ウェブサイトの「トラッキングなし」という表記を当てにする前に、プライバシーの項を読んでください。',
    quickAnswerTop: {
      ja: {
        question: 'Llamatikは本当に無料で、オフラインで動きますか?',
        answer:
          '掲載情報によれば、チャット自体についてはその通りです。アプリは無料で、Google Playには広告も購入に関する表示もなく、モデルを一度ダウンロードしたあとは、インターネット接続なしで端末上で会話できます。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android)と[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708)で無料。デスクトップ版のインストーラーは[ダウンロードページ](https://www.llamatik.com/download/)にある。',
          'Gemma 3 270M、SmolVLM、Phi-1.5、Qwen 2.5、Llama 3.2 1Bなどの小型モデルをアプリ内でダウンロードできる。',
          'チャット画面にモデルセレクター、スマートサジェスト、クイックプロンプトがある。',
          'ソースコードは[GitHub](https://github.com/ferranpons/Llamatik)で公開されている。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Llamatikとは?', anchor: 'what-is-llamatik' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'オープンソースとLlamatik SDK', anchor: 'open-source' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
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
            text: 'Llamatikは、Android・iPhone・デスクトップ向けの無料のオープンソースのチャットアプリで、小型の言語モデルを端末上で動かし、開発者のKotlin SDKのデモアプリを兼ねている。',
          },
          {
            type: 'plain-terms',
            text: 'アプリをインストールし、モデルを一度ダウンロードすれば、アカウントもインターネット接続もなしでチャットできます。デモアプリのため、多機能なアシスタントではなく、シンプルな画面と小型のモデルを想定してください。',
          },
        ],
        items: [
          '開発元:個人開発者のFerran Pons。ウェブサイトに企業名はなく、コードは[github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik)でMITライセンスの下で公開されている。',
          'メンテナンス:リポジトリでは2026年10月14日にリリースv2.0.0が公開されているため、更新停止の警告は当てはまらない。ただし、ストア版のビルドは2026年5月14日のバージョン1.9.0である。',
          '利用実績:Google Playのダウンロード数は1K+で、評価は48件の評価で3.9。App Storeは2件の評価で3.0のため、公開されている実績は少ない。',
          'プラットフォーム:Android、iPhone(iOS 16.6以降)、macOS、Windows、Debian/Ubuntu Linux、そして[llamatik.com/prompt](https://www.llamatik.com/prompt)のブラウザ版。',
          'モデル:アプリ自身がダウンロードする、量子化された小型のオープンウェイトモデル。掲載情報にはダウンロードサイズもRAM要件も示されていない。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月19日に確認したGoogle PlayとApp Storeの掲載情報、ウェブサイト、プライバシーポリシー、公開されているGitHubリポジトリに基づいています。PromptQuorumはアプリのインストール、テスト、ベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-llamatik',
        title: 'Llamatikとは?',
        content: [
          '**Llamatikは、クラウドサービスを呼び出す代わりに、オープンウェイトの言語モデルをスマートフォン上で動かすオフラインチャットアプリです。** Google Playの説明文は、これをLlamatik Kotlin Multiplatformライブラリの実験的なショーケースと呼んでいます。モデルは同梱されておらず、アプリ内で少なくとも1つダウンロードし、モデルセレクターで選んでチャットします。掲載情報には、Gemma 3 270M、SmolVLM 256Mと500M、Phi-1.5、Qwen 2.5、量子化されたLlama 3.2 1Bが挙げられています。',
          '同じ名前の製品が3つあります。本レビューが扱うのは、Google Playで「Llamatik - Local AI Chatbot」(パッケージ名com.llamatik.app.android)というタイトルのチャットアプリです。Llamatik SDKはこのアプリを動かすライブラリで、Llamatik Serverは同じプロジェクトによる別のリモート推論バックエンドです。ウェブサイトにはJetBrains IDE向けのLlamatik Codeプラグインも掲載されていますが、本レビューでは扱いません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Llamatikは、対応するどのプラットフォームでも、ダウンロードしてすぐ開ける形で入手できます。2つのモバイルストアと、ウェブサイトのデスクトップ用インストーラーです。** 以下のリンクは、開発者のウェブサイトが使っているものです。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android)(無料)',
          },
          {
            'プラットフォーム': 'iPhone',
            '入手先': '[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708)(無料、iOS 16.6以降)',
          },
          {
            'プラットフォーム': 'macOS',
            '入手先': '[.dmgインストーラー](https://www.llamatik.com/download/)(Apple SiliconとIntel)',
          },
          {
            'プラットフォーム': 'Windows',
            '入手先': '[.msiインストーラー](https://www.llamatik.com/download/)(Windows 10以降)',
          },
          {
            'プラットフォーム': 'Linux',
            '入手先': '[.debパッケージ](https://www.llamatik.com/download/)(Debian/Ubuntu、Ubuntu 22.04以降で検証)',
          },
          {
            'プラットフォーム': 'ブラウザ',
            '入手先': '[ウェブアプリ](https://www.llamatik.com/prompt)(インストール不要)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[llamatik.com](https://www.llamatik.com/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Llamatikのプライバシーポリシー](https://multiplatformkickstarter.com/llamatik-privacy.html)(最終更新2025年11月20日)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHub](https://github.com/ferranpons/Llamatik)(MIT)',
          },
        ],
        note: '確認したバージョン:Google PlayとApp Storeの両方に表示されている1.9.0です。リポジトリのリリースに添付されているデスクトップ用インストーラーも、v2.0.0などのタグの下であっても1.9.0という名前になっているため、タグはアプリのバージョンではなくSDKに沿っているようです。ダウンロードページのインストール例には、今も1.8.0のパッケージ名が記載されています。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**セットアップはストアの掲載情報に書かれた順序に沿っています。PromptQuorumはこれらの手順を実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'Google PlayまたはApp StoreからLlamatikをダウンロードします。掲載情報にもウェブサイトにも、アカウントについての記載はありません。',
          },
          {
            title: 'Wi-Fiでモデルをダウンロードする',
            whyItMatters: 'Google Playの説明文によれば、チャットを始める前に少なくとも1つのモデルをダウンロードする必要があります。掲載情報にファイルサイズが示されていないため、まずは最も小さいモデルから始めてください。',
          },
          {
            title: 'チャットする',
            whyItMatters: 'プロンプトを入力するか、サジェストやクイックプロンプトをタップします。回答を比べたいときは、セレクターでモデルを切り替えます。',
          },
          {
            title: '必要に応じて先にブラウザ版を試す',
            whyItMatters: 'ウェブサイトにはインストール不要のウェブアプリがあり、モデルをダウンロードする前に画面を確認する手軽な方法です。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、Google Playの説明文、ウェブサイト、またはリポジトリのREADMEに基づくものです。**',
        ],
        items: [
          '**端末上でのテキスト生成。** チャットはスマートフォン上でllama.cppを通じて動作し、モデルをインストールしたあとは接続が不要です。',
          '**内蔵のモデルダウンローダー。** アプリが対応モデルのダウンロード、インストール、切り替えを行うため、ファイルの扱いは不要です。',
          '**シンプルなチャット画面。** スマートサジェスト、クイックプロンプト、モデルセレクター、オンボーディングの流れがあります。',
          '**ストリーミングと音声。** リポジトリのREADMEによれば、アプリはストリーミング生成とwhisper.cppによる音声入力(speech-to-text)を紹介していますが、Google Playの説明文はどちらにも触れていないため、インストールしたビルドで確認してください。',
          '**デスクトップ版とブラウザ版。** 同じプロジェクトが、macOS、Windows、Linux用のインストーラーとブラウザアプリを提供しています。',
        ],
        note: 'ストアページの機能リストは短いものです。READMEには、検索拡張(retrieval)、エージェント、画像生成といったSDKの機能も書かれていますが、アプリ自体については確認できていません。',
      },
      openSource: {
        id: 'open-source',
        title: 'オープンソースとLlamatik SDK',
        content: [
          '**このアプリは、より大きなオープンソースプロジェクトの公開デモです。** [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik)のリポジトリはMITライセンスで、2025年7月に作成され、2026年10月19日時点でスターは206、未解決のイシューは12件です。アプリ、Kotlin Multiplatform SDK、llama.cpp、whisper.cpp、stable-diffusion.cppのネイティブバインディングが含まれています。',
          'READMEによれば、2026年10月14日のリリース2.0.0で推論ライブラリがcom.llamatik:coreに改名され、チャット、モデル管理、検索拡張を備えたビジネスロジックSDKと、エージェントフレームワーク、権限処理を備えたエージェントランタイムが追加されました。これらは、自分でAndroid、iOS、デスクトップ、WASMのアプリを作る開発者向けの部分であり、ストアからインストールするチャットアプリとは別のものです。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**チャットの内容は既定で端末上にとどまり、開発者によれば、チャットボットに入力した内容はFirebaseにもその他のサーバーにも送信されません。** Google PlayのData safetyセクションでは、第三者と共有されるデータはないと申告されています。クラッシュログ、診断情報、その他のアプリのパフォーマンスデータが、アプリの機能と分析のために収集され、通信中は暗号化されるとされており、このデータの削除を依頼する手段は開発者から提供されていないと記載されています。',
          '[プライバシーポリシー](https://multiplatformkickstarter.com/llamatik-privacy.html)(2025年11月20日更新)は、Google Analytics for FirebaseとFirebase Crashlyticsを挙げ、Firebase Performance Monitoringが有効になる場合があるとしています。分析イベントは仮名化されたもの(画面の表示、デバイスの種類、OSのバージョン、言語、パフォーマンス指標)です。クラッシュレポートには、デバイスのモデル、OSのバージョン、スタックトレース、アプリのバージョンが含まれますが、チャットの内容は含まれません。モデルファイルはHugging Faceなどの公開ホストから取得され、アプリはどのモデルを選んだかを記録しません。',
          'ウェブサイトには「アカウント不要。トラッキングなし。」と書かれています。この表現はポリシーよりも範囲が狭く、Firebaseの分析とクラッシュレポートは引き続き該当します。Google Playの説明文自身も、インターネットを使うのはモデルのダウンロードと、分析およびクラッシュレポートのためだけだと述べています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ソースコードは公開されていますが、PromptQuorumはそのコードも、アプリのネットワーク通信も監査していません。機密データを扱う方は、ご自身の端末で動作を確認してください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**費用やアカウントなしで、端末内モデルを試したい人。** アプリは無料で、ダウンローダーが内蔵されています。',
          '**SDKを評価するKotlinおよびAndroid開発者。** このアプリはSDKのリファレンスデモで、コードはMITライセンスです。',
          '**オープンソースのソフトウェアを好む人。** ソース、イシュー、リリースが公開されています。',
          '**診断データは受け入れつつ、チャットは端末内にとどめたい人。** 内容は端末上に残り、Firebaseが受け取るのはクラッシュと利用状況のデータです。',
          '**大きなモデルやドキュメントとのチャットが必要な人には向きません。** 掲載情報にはどちらもありません。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での性能。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、回答の品質は評価していません。',
          '**画像生成と音声。** Google Playのレビューへの開発者の返信に、画像モデルのダウンロードに関する既知の問題が出てきます。一部のビルドには画像生成があることがうかがえますが、ストアの説明文には記載がありません。',
          '**モデルのサイズと必要なハードウェア。** 掲載情報にはダウンロードサイズ、RAMの数値、Androidの最低バージョンが示されていません。READMEにはライブラリ向けにAPIレベル26とありますが、アプリの要件と同じとは限りません。',
          '**独自モデルのインポート。** ストアの説明文が触れているのは、内蔵のダウンローダーだけです。',
          '**SDKの新しいリリースがストア版に反映されたか。** ストア版のビルドは2026年5月14日の1.9.0で、いつ更新されるかは情報源に書かれていません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '独自のモデルライブラリを持つ、オープンソースの端末内チャットクライアント',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '端末内ドキュメントQ&Aとベンチマークを備えた、オープンソースのオフラインチャット',
          },
          {
            'アプリ': '[Off Grid](/ja/power-local-llm/off-grid-ai-review)',
            'プラットフォーム': 'iOS、Android、Mac、Windows',
            '価格 / ライセンス': 'フリーミアム / MIT',
            '主な違い': 'スマートフォンとデスクトップで使えるオープンソースのオフラインAIスイート',
          },
          {
            'アプリ': '[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'GoogleのAI Edgeチームによるオープンソースの端末内アプリ',
          },
        ],
        note: '競合アプリの詳細は頻繁に変わります。現在の価格、ライセンス、対応プラットフォームは、各アプリの掲載ページで確認してください。5つのアプリはいずれもオープンソースのため、Llamatikの特徴はライセンスではなく、SDKに重点を置いている点です。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '開発者が異なる名前で表示されるのはなぜですか?',
            a: 'Google Playでは開発者がMultiplatform Kickstarterと表示され、プライバシーポリシーもそのドメインで公開されています。一方、App Storeでは販売元がFerran Pons Sanchez、GitHubのリポジトリはFerran Ponsの所有になっています。',
          },
          {
            q: '自分のGGUFモデルを読み込めますか?',
            a: 'ストアの説明文が触れているのは、内蔵のダウンローダーだけです。READMEにはSDKのモデルインポート機能が挙げられていますが、アプリがそれを利用できるかどうかは書かれていません。',
          },
          {
            q: '何もインストールせずに試せますか?',
            a: 'ウェブサイトには[llamatik.com/prompt](https://www.llamatik.com/prompt)にブラウザ版があります。PromptQuorumは、そのバージョンがどこでモデルを動かし、何を送信するのかを確認していません。',
          },
          {
            q: '問題はどこに報告すればよいですか?',
            a: 'GitHubにあるリポジトリの公開[イシュートラッカー](https://github.com/ferranpons/Llamatik/issues)か、Google Playの掲載情報にあるサポート窓口に報告してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Llamatikは、Android・iPhone・デスクトップ向けの無料でMITライセンスのオフラインチャットアプリで、llama.cppを通じて小型モデルを動かし、開発者のKotlin SDKで何ができるかを示します。オープンソースで、リポジトリは本レビューの数日前に更新されています。その一方で、実験的なデモであり、モデルは小型で、公開されている評価は控えめで、ストア版のビルドは5か月前のもので、Firebaseの分析データは今も端末の外に出ます。端末上のチャットをオープンソースで試したい方や、SDKを評価する方に向いています。より多くの機能を求める方は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private Mind](/ja/power-local-llm/private-mind-review)と比較してみてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのLlamatik](https://play.google.com/store/apps/details?id=com.llamatik.app.android) — 説明文、バージョン、評価、ダウンロード数、Data safetyセクション。2026年10月19日に確認。',
          '[App StoreのLlamatik](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) — 価格、バージョン、要件。2026年10月19日に確認。',
          '[Llamatikのウェブサイト](https://www.llamatik.com/)と[ダウンロードページ](https://www.llamatik.com/download/) — プラットフォームとインストーラー。2026年10月19日に確認。',
          '[Llamatikのプライバシーポリシー](https://multiplatformkickstarter.com/llamatik-privacy.html) — データの扱いと第三者サービス。最終更新は2025年11月20日。',
          '[GitHubのLlamatik](https://github.com/ferranpons/Llamatik) — README、MITライセンス、リリース、イシュートラッカー。2026年10月19日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOS・Android向けの無料のオープンソース端末内チャットクライアント。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhone・Android向けの無料でMITライセンスのオフラインチャットアプリ。',
          '[Off Gridレビュー](/ja/power-local-llm/off-grid-ai-review) — スマートフォンとデスクトップ向けのオープンソースのオフラインAIスイート。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Googleのオープンソースの端末内AIアプリ。',
          '[2026年版 Android向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けのより幅広いまとめ。',
          '[2026年版 iPhone向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより幅広いまとめ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llamatik-review-hero-pt.webp',
    title: 'Llamatik: Análise do Chatbot de IA Offline, Gratuito e de Código Aberto para Android, iPhone e Desktop',
    seoTitle: 'Análise do Llamatik: Chatbot de IA Offline Open Source',
    intro:
      'O Llamatik é um chatbot de IA offline gratuito, com licença MIT, para Android, iPhone e computador, criado pelo desenvolvedor independente Ferran Pons como o app de demonstração do seu SDK open source Llamatik para Kotlin Multiplatform. Ele roda modelos de linguagem pequenos, de peso aberto, no próprio dispositivo por meio do llama.cpp, e a versão para Android foi lançada no Google Play em 20 de novembro de 2025. Esta análise reflete as fichas das lojas, o site, a política de privacidade e o repositório do GitHub, consultados em 19 de outubro de 2026.',
    metaDescription:
      'Análise do Llamatik: chatbot de IA offline, gratuito e com licença MIT para Android, iPhone e computador. Modelos, Firebase, atualizações e dúvidas.',
    twitterDescription:
      'Análise do Llamatik: chatbot de IA offline, gratuito e open source para Android, iPhone e computador, e demonstração de um SDK de IA em Kotlin. O que dizem as fichas, a política de privacidade e o repositório.',
    audience:
      'Usuários de Android e iPhone que querem um chatbot gratuito e de código aberto que rode modelos de linguagem no dispositivo e que precisam saber o que fica offline, o que é enviado para fora e o que as fontes não confirmam.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Llamatik',
    targetKeywords: [
      'llamatik app análise',
      'llamatik chatbot de ia local',
      'chatbot de ia offline android',
      'app de llm no dispositivo código aberto',
      'llamatik sdk kotlin multiplatform',
      'app android llama.cpp',
      'llamatik vs pocketpal',
    ],
    current_models_mentioned: ['Gemma', 'SmolVLM', 'Phi', 'Qwen', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone'],
    leadAnswerBlock:
      '**O Llamatik (versão 1.9.0 no Google Play e na App Store em 19 de outubro de 2026) é um chatbot offline de código aberto que a própria ficha chama de demonstração experimental do SDK em Kotlin do desenvolvedor, não de um assistente completo.** Os modelos são baixados uma vez e depois rodam no celular. Os dados de análise e os relatórios de falhas do Firebase saem sim do dispositivo, então leia a seção de privacidade antes de confiar na frase "sem rastreamento" do site.',
    quickAnswerTop: {
      pt: {
        question: 'O Llamatik é mesmo gratuito e offline?',
        answer:
          'Segundo as fichas, sim para o chat em si: o app é gratuito, o Google Play não mostra anúncios nem indicação de compras, e as conversas rodam no celular, sem conexão com a internet, depois que um modelo é baixado.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) e na [App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708), com instaladores para computador na [página de download](https://www.llamatik.com/download/).',
          'Download dentro do app de modelos pequenos como Gemma 3 270M, SmolVLM, Phi-1.5, Qwen 2.5 e Llama 3.2 1B.',
          'Seletor de modelos, sugestões inteligentes e prompts rápidos na tela de chat.',
          'Código-fonte no [GitHub](https://github.com/ferranpons/Llamatik).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Llamatik?', anchor: 'what-is-llamatik' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Código aberto e o SDK do Llamatik', anchor: 'open-source' },
      { label: 'Privacidade e uso da rede', anchor: 'privacy' },
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
            text: 'O Llamatik é um chatbot gratuito e de código aberto para Android, iPhone e computador que roda modelos de linguagem pequenos no dispositivo e também serve de app de demonstração do SDK em Kotlin do seu desenvolvedor.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app, baixa um modelo uma vez e depois conversa sem conta e sem conexão com a internet; como é uma demonstração, espere uma interface simples e modelos pequenos, não um assistente completo.',
          },
        ],
        items: [
          'Desenvolvedor: Ferran Pons, desenvolvedor independente, sem empresa citada no site; o código fica em [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik), sob a licença MIT.',
          'Manutenção: o repositório publicou a versão v2.0.0 em 14 de outubro de 2026, então não se aplica aviso de projeto abandonado; os builds das lojas, porém, são a versão 1.9.0 de 14 de maio de 2026.',
          'Alcance: o Google Play mostra mais de 1 mil downloads e nota 3.9 com base em 48 avaliações, e a App Store mostra 3.0 com duas avaliações, então o histórico público é pequeno.',
          'Plataformas: Android, iPhone (iOS 16.6 ou posterior), macOS, Windows, Linux Debian/Ubuntu e uma versão para navegador em [llamatik.com/prompt](https://www.llamatik.com/prompt).',
          'Modelos: modelos de peso aberto, pequenos e quantizados, que o próprio app baixa; a ficha não informa tamanhos de download nem requisitos de RAM.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia nas fichas do Google Play e da App Store, no site, na política de privacidade e no repositório público do GitHub, consultados em 19 de outubro de 2026. A PromptQuorum não instalou, não testou nem fez benchmarks do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-llamatik',
        title: 'O que é o Llamatik?',
        content: [
          '**O Llamatik é um app de chatbot offline que roda modelos de linguagem de peso aberto no celular, em vez de chamar um serviço na nuvem.** A descrição do Google Play o chama de demonstração experimental da biblioteca Llamatik para Kotlin Multiplatform. Nenhum modelo vem incluído: você baixa pelo menos um dentro do app, escolhe-o em um seletor de modelos e conversa. A ficha cita Gemma 3 270M, SmolVLM 256M e 500M, Phi-1.5, Qwen 2.5 e um Llama 3.2 1B quantizado.',
          'Três produtos compartilham o nome. Esta análise cobre o app de chat, chamado "Llamatik - Local AI Chatbot" no Google Play (pacote com.llamatik.app.android). O SDK do Llamatik é a biblioteca que o sustenta, e o Llamatik Server é um backend de inferência remota separado, do mesmo projeto. O site também lista um plugin Llamatik Code para IDEs da JetBrains, que esta análise não cobre.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Llamatik se instala baixando e abrindo, em todas as plataformas compatíveis: duas lojas de apps para celular e instaladores para computador no site.** Os links abaixo são os que o site do desenvolvedor usa.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) (grátis)',
          },
          {
            'Plataforma': 'iPhone',
            'Onde obter': '[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) (grátis, iOS 16.6 ou posterior)',
          },
          {
            'Plataforma': 'macOS',
            'Onde obter': '[Instalador .dmg](https://www.llamatik.com/download/) (Apple Silicon e Intel)',
          },
          {
            'Plataforma': 'Windows',
            'Onde obter': '[Instalador .msi](https://www.llamatik.com/download/) (Windows 10 ou posterior)',
          },
          {
            'Plataforma': 'Linux',
            'Onde obter': '[Pacote .deb](https://www.llamatik.com/download/) (Debian/Ubuntu, testado no Ubuntu 22.04 ou posterior)',
          },
          {
            'Plataforma': 'Navegador',
            'Onde obter': '[App web](https://www.llamatik.com/prompt) (sem instalação)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[llamatik.com](https://www.llamatik.com/)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Política de privacidade do Llamatik](https://multiplatformkickstarter.com/llamatik-privacy.html) (atualizada em 20 de novembro de 2025)',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': '[GitHub](https://github.com/ferranpons/Llamatik) (MIT)',
          },
        ],
        note: 'Versão analisada: 1.9.0, exibida tanto no Google Play quanto na App Store. Os instaladores para computador anexados às versões do repositório também se chamam 1.9.0, mesmo em tags como v2.0.0, então as tags parecem acompanhar o SDK e não a versão do app. O texto da página de download ainda mostra o nome de um pacote 1.8.0 no exemplo de instalação.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**A configuração segue a ordem descrita na ficha da loja; a PromptQuorum não executou esses passos.**',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Baixe o Llamatik no Google Play ou na App Store; nem as fichas nem o site mencionam uma conta.',
          },
          {
            title: 'Baixar um modelo no Wi-Fi',
            whyItMatters: 'A descrição do Google Play diz que é preciso baixar pelo menos um modelo antes de conversar. Comece pelo menor, porque a ficha não informa tamanhos de arquivo.',
          },
          {
            title: 'Conversar',
            whyItMatters: 'Digite um prompt ou toque em uma sugestão ou em um prompt rápido, e troque de modelo no seletor quando quiser comparar respostas.',
          },
          {
            title: 'Se quiser, experimentar antes a versão para navegador',
            whyItMatters: 'O site oferece um app web que não precisa de instalação, uma forma simples de conhecer a interface antes de baixar modelos.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm da descrição do Google Play, do site ou do README do repositório.**',
        ],
        items: [
          '**Geração de texto no dispositivo.** O chat roda pelo llama.cpp no celular, sem precisar de conexão depois que um modelo é instalado.',
          '**Downloader de modelos integrado.** O app baixa, instala e alterna entre os modelos compatíveis, sem precisar mexer em arquivos.',
          '**Interface de chat simples.** Sugestões inteligentes, prompts rápidos, um seletor de modelos e um fluxo de boas-vindas.',
          '**Streaming e voz.** O README do repositório diz que o app demonstra geração em streaming e transcrição de voz com o whisper.cpp; o texto do Google Play não menciona nenhum dos dois, então confira no build instalado.',
          '**Versões para computador e navegador.** O mesmo projeto oferece instaladores para macOS, Windows e Linux e um app para navegador.',
        ],
        note: 'As listas de recursos nas páginas das lojas são curtas. O README também descreve recursos do SDK, como recuperação de informações, agentes e geração de imagens, que não estão confirmados para o app em si.',
      },
      openSource: {
        id: 'open-source',
        title: 'Código aberto e o SDK do Llamatik',
        content: [
          '**O app é a demonstração pública de um projeto open source maior.** O repositório em [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) tem licença MIT, foi criado em julho de 2025 e mostra 206 estrelas e 12 issues abertas em 19 de outubro de 2026. Ele reúne os apps, o SDK Kotlin Multiplatform e as bindings nativas do llama.cpp, do whisper.cpp e do stable-diffusion.cpp.',
          'Segundo o README, a versão 2.0.0, de 14 de outubro de 2026, renomeou a biblioteca de inferência para com.llamatik:core e acrescentou um SDK de lógica de negócio com chat, gerenciamento de modelos e recuperação de informações, um framework de agentes e um runtime de agentes com tratamento de permissões. Essas partes se destinam a desenvolvedores que criam os próprios apps para Android, iOS, computador ou WASM; elas são separadas do app de chat que o leitor instala pela loja.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**O conteúdo do chat fica no dispositivo por padrão, e o desenvolvedor afirma que nada do que é digitado no chatbot é enviado ao Firebase nem a qualquer outro servidor.** A seção Segurança dos dados do Google Play declara que nenhum dado é compartilhado com terceiros. Ela lista registros de falhas, diagnósticos e outros dados de desempenho do app como coletados para o funcionamento do app e para análises, criptografados em trânsito, e informa que o desenvolvedor não oferece como solicitar a exclusão desses dados.',
          'A [política de privacidade](https://multiplatformkickstarter.com/llamatik-privacy.html), atualizada em 20 de novembro de 2025, cita o Google Analytics para Firebase e o Firebase Crashlytics, e diz que o Firebase Performance Monitoring pode estar ativado. Os eventos de análise são pseudônimos (visualizações de tela, tipo de dispositivo, versão do sistema operacional, idioma e métricas de desempenho). Os relatórios de falhas trazem o modelo do dispositivo, a versão do sistema operacional, rastreamentos de pilha e a versão do app, mas não o conteúdo das conversas. Os arquivos de modelo vêm de hosts públicos como o Hugging Face, e o app não registra qual modelo você escolhe.',
          'O site diz "Sem contas. Sem rastreamento." Essa frase é mais restrita que a política, porque a análise e o relatório de falhas do Firebase continuam valendo; a própria descrição do Google Play diz que a internet é usada apenas para baixar modelos e para análise e relatórios de falhas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O código-fonte é público, mas a PromptQuorum não o auditou nem analisou o tráfego de rede do app. Quem lida com dados confidenciais deve verificar o comportamento no próprio dispositivo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Pessoas que querem experimentar modelos no dispositivo sem custo e sem conta.** O app é gratuito e traz um downloader integrado.',
          '**Desenvolvedores Kotlin e Android que avaliam o SDK.** O app é a demonstração de referência e o código tem licença MIT.',
          '**Leitores que preferem software de código aberto.** Código-fonte, issues e versões são públicos.',
          '**Usuários que aceitam diagnósticos, mas querem manter as conversas locais.** O conteúdo fica no dispositivo, enquanto o Firebase recebe dados de falhas e de uso.',
          '**Não é indicado para quem precisa de modelos grandes ou de chat com documentos.** As fichas não oferecem nenhum dos dois.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria e qualidade das respostas não foram avaliados.',
          '**Geração de imagens e voz.** Uma resposta do desenvolvedor a uma avaliação do Google Play menciona um problema conhecido nos downloads de modelos de imagem, o que sugere que a geração de imagens existe em alguns builds, mas nenhuma descrição das lojas a lista.',
          '**Tamanhos de modelo e requisitos de hardware.** As fichas não informam tamanhos de download, quantidade de RAM nem versão mínima do Android; o README indica o nível de API 26 para a biblioteca, que não é necessariamente o requisito do app.',
          '**Importação de modelos próprios.** As descrições das lojas mencionam apenas o downloader integrado.',
          '**Se as versões mais novas do SDK chegaram às lojas.** Os builds das lojas são a versão 1.9.0 de 14 de maio de 2026, e as fontes não dizem quando serão atualizados.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Cliente de chat open source no dispositivo, com biblioteca própria de modelos',
          },
          {
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat offline open source com perguntas sobre documentos no dispositivo e benchmarks',
          },
          {
            'App': '[Off Grid](/pt/power-local-llm/off-grid-ai-review)',
            'Plataformas': 'iOS, Android, Mac, Windows',
            'Preço / licença': 'Freemium / MIT',
            'Diferença principal': 'Suíte de IA offline open source para celulares e computadores',
          },
          {
            'App': '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'App open source no dispositivo da equipe de AI Edge do Google',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais de cada app na ficha dele. Todos os cinco apps são de código aberto, então o diferencial do Llamatik é o foco no SDK, não a licença.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Por que o desenvolvedor aparece com nomes diferentes?',
            a: 'O Google Play lista o desenvolvedor como Multiplatform Kickstarter e hospeda a política de privacidade nesse domínio, enquanto a App Store lista Ferran Pons Sanchez como vendedor e o repositório do GitHub pertence a Ferran Pons.',
          },
          {
            q: 'Posso carregar meus próprios modelos GGUF?',
            a: 'As descrições das lojas mencionam apenas o downloader integrado. O README lista funções de importação de modelos no SDK, mas não diz se o app as expõe.',
          },
          {
            q: 'Posso experimentar sem instalar nada?',
            a: 'O site oferece uma versão para navegador em [llamatik.com/prompt](https://www.llamatik.com/prompt). A PromptQuorum não verificou onde essa versão roda seus modelos nem o que ela envia.',
          },
          {
            q: 'Onde relato um problema?',
            a: 'No [rastreador de issues](https://github.com/ferranpons/Llamatik/issues) público do repositório no GitHub, ou pelo contato de suporte na ficha do Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Llamatik é um chatbot offline gratuito, com licença MIT, para Android, iPhone e computador, que roda modelos pequenos pelo llama.cpp e mostra o que o SDK em Kotlin do seu desenvolvedor consegue fazer. É de código aberto, e o repositório foi atualizado poucos dias antes desta análise. Em contrapartida, é uma demonstração experimental, com modelos pequenos, avaliação pública modesta, builds nas lojas de cinco meses atrás e análises do Firebase que ainda saem do dispositivo. Serve para quem quer uma forma open source de experimentar chat no dispositivo ou avalia o SDK; quem quer mais recursos pode comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Private Mind](/pt/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Llamatik no Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) — descrição, versão, nota, número de downloads e seção Segurança dos dados, consultados em 19 de outubro de 2026.',
          '[Llamatik na App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) — preço, versão e requisitos, consultados em 19 de outubro de 2026.',
          '[Site do Llamatik](https://www.llamatik.com/) e [página de download](https://www.llamatik.com/download/) — plataformas e instaladores, consultados em 19 de outubro de 2026.',
          '[Política de privacidade do Llamatik](https://multiplatformkickstarter.com/llamatik-privacy.html) — tratamento de dados e serviços de terceiros, atualizada em 20 de novembro de 2025.',
          '[Llamatik no GitHub](https://github.com/ferranpons/Llamatik) — README, licença MIT, versões e rastreador de issues, consultados em 19 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat no dispositivo, gratuito e de código aberto, para iOS e Android.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
          '[Análise do Off Grid](/pt/power-local-llm/off-grid-ai-review) — uma suíte de IA offline de código aberto para celulares e computadores.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app de IA no dispositivo, de código aberto, do Google.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llamatik-review-hero-ar.webp',
    title: 'مراجعة Llamatik: تطبيق دردشة ذكاء اصطناعي مجاني ومفتوح المصدر دون اتصال لأندرويد و iPhone وسطح المكتب',
    seoTitle: 'مراجعة Llamatik: دردشة ذكاء اصطناعي مفتوحة المصدر',
    intro:
      'Llamatik تطبيق دردشة مجاني بترخيص MIT يعمل دون اتصال على أندرويد و iPhone وسطح المكتب، من تطوير فيران بونس (Ferran Pons)، وهو مطوّر مستقل، وهو التطبيق التجريبي لحزمة تطويره مفتوحة المصدر Llamatik Kotlin Multiplatform SDK. يشغّل نماذج لغوية صغيرة مفتوحة الأوزان على الجهاز عبر llama.cpp، وصدرت نسخة أندرويد منه لأول مرة على Google Play في 20 نوفمبر 2025. تعكس هذه المراجعة صفحتي المتجر والموقع وسياسة الخصوصية ومستودع GitHub كما جرى التحقق منها في 19 أكتوبر 2026.',
    metaDescription:
      'مراجعة Llamatik: تطبيق دردشة مجاني بترخيص MIT يعمل دون اتصال على أندرويد و iPhone وسطح المكتب. النماذج وتحليلات Firebase وحالة التحديث وما لم يتأكد.',
    twitterDescription:
      'مراجعة Llamatik: تطبيق دردشة مجاني ومفتوح المصدر يعمل دون اتصال على أندرويد و iPhone وسطح المكتب، وهو في الوقت نفسه العرض التجريبي لحزمة SDK بلغة Kotlin للذكاء الاصطناعي على الجهاز. ما تقوله صفحتا المتجر وسياسة الخصوصية والمستودع.',
    audience:
      'مستخدمو أندرويد و iPhone الذين يريدون تطبيق دردشة مجانياً ومفتوح المصدر يشغّل النماذج اللغوية على الجهاز، ويحتاجون إلى معرفة ما يبقى دون اتصال، وما الذي يُرسل إلى الخارج، وما الذي لا تؤكده المصادر.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Llamatik',
    targetKeywords: [
      'مراجعة تطبيق llamatik',
      'llamatik دردشة ذكاء اصطناعي محلية',
      'تطبيق دردشة ذكاء اصطناعي دون اتصال أندرويد',
      'تطبيق نماذج لغوية مفتوح المصدر على الجهاز',
      'llamatik kotlin multiplatform sdk',
      'تطبيق llama.cpp لأندرويد',
      'llamatik مقابل pocketpal',
    ],
    current_models_mentioned: ['Gemma', 'SmolVLM', 'Phi', 'Qwen', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone'],
    leadAnswerBlock:
      '**Llamatik (الإصدار 1.9.0 على Google Play و App Store اعتباراً من 19 أكتوبر 2026) تطبيق دردشة مفتوح المصدر يعمل دون اتصال، وتصفه صفحته نفسها بأنه عرض تجريبي لحزمة المطوّر بلغة Kotlin وليس مساعداً كامل الميزات.** تُنزَّل النماذج مرة واحدة ثم تعمل على الهاتف. لكن تحليلات Firebase وتقارير الأعطال تغادر الجهاز فعلاً، لذا اقرأ قسم الخصوصية قبل الاعتماد على عبارة «بلا تتبّع» الواردة في الموقع.',
    quickAnswerTop: {
      ar: {
        question: 'هل Llamatik مجاني فعلاً ويعمل دون اتصال؟',
        answer:
          'بحسب صفحتيه، نعم بالنسبة للدردشة نفسها: فالتطبيق مجاني، ولا تُظهر Google Play إعلانات ولا علامات شراء، وتعمل المحادثات على الهاتف دون اتصال بالإنترنت بعد تنزيل النموذج.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) و[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708)، مع ملفات تثبيت لسطح المكتب في [صفحة التنزيل](https://www.llamatik.com/download/).',
          'تنزيل نماذج صغيرة من داخل التطبيق مثل Gemma 3 270M و SmolVLM و Phi-1.5 و Qwen 2.5 و Llama 3.2 1B.',
          'محدّد للنماذج واقتراحات ذكية وطلبات سريعة في شاشة الدردشة.',
          'الكود المصدري على [GitHub](https://github.com/ferranpons/Llamatik).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Llamatik؟', anchor: 'what-is-llamatik' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'المصدر المفتوح وحزمة Llamatik SDK', anchor: 'open-source' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
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
            text: 'Llamatik تطبيق دردشة مجاني ومفتوح المصدر لأندرويد و iPhone وسطح المكتب، يشغّل نماذج لغوية صغيرة على الجهاز، وهو في الوقت نفسه التطبيق التجريبي لحزمة مطوّره بلغة Kotlin.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته وتنزّل نموذجاً مرة واحدة، ثم تدردش دون حساب ودون اتصال بالإنترنت؛ ولأنه عرض تجريبي، توقّع واجهة بسيطة ونماذج صغيرة لا مساعداً كامل الميزات.',
          },
        ],
        items: [
          'المطوّر: فيران بونس، مطوّر مستقل دون شركة مذكورة على الموقع؛ ويقع الكود في [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) بترخيص MIT.',
          'الصيانة: نشر المستودع الإصدار v2.0.0 في 14 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف؛ أما إصدارات المتجرين فهي 1.9.0 الصادر في 14 مايو 2026.',
          'الانتشار: تُظهر Google Play أكثر من 1K تنزيل وتقييم 3.9 من 48 تقييماً، وتُظهر App Store تقييم 3.0 من تقييمين، لذا فالسجل العام قليل.',
          'المنصات: أندرويد، و iPhone (iOS 16.6 أو أحدث)، و macOS، و Windows، و Linux (Debian/Ubuntu)، ونسخة متصفح على [llamatik.com/prompt](https://www.llamatik.com/prompt).',
          'النماذج: نماذج صغيرة مكمّمة مفتوحة الأوزان ينزّلها التطبيق بنفسه؛ ولا تذكر الصفحة أحجام التنزيل ولا متطلبات الذاكرة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحتي Google Play و App Store وإلى الموقع وسياسة الخصوصية ومستودع GitHub العام، جرى التحقق منها في 19 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-llamatik',
        title: 'ما هو Llamatik؟',
        content: [
          '**Llamatik تطبيق دردشة يعمل دون اتصال ويشغّل نماذج لغوية مفتوحة الأوزان على الهاتف بدلاً من الاتصال بخدمة سحابية.** يصفه نص Google Play بأنه عرض تجريبي لمكتبة Llamatik Kotlin Multiplatform. لا يتضمن التطبيق أي نموذج: تنزّل نموذجاً واحداً على الأقل من داخله، وتختاره في محدّد النماذج، ثم تدردش. وتذكر الصفحة Gemma 3 270M و SmolVLM بحجمي 256M و 500M و Phi-1.5 و Qwen 2.5 ونسخة مكمّمة من Llama 3.2 1B.',
          'ثلاثة منتجات تحمل الاسم نفسه. تغطي هذه المراجعة تطبيق الدردشة المسمى «Llamatik - Local AI Chatbot» على Google Play (الحزمة com.llamatik.app.android). أما Llamatik SDK فهي المكتبة التي تشغّله، و Llamatik Server خلفية استدلال عن بُعد منفصلة من المشروع نفسه. ويدرج الموقع أيضاً إضافة Llamatik Code لبيئات JetBrains، وهي خارج نطاق هذه المراجعة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Llamatik بالتنزيل والفتح على كل منصة يدعمها: متجران للهواتف وملفات تثبيت لسطح المكتب من الموقع.** الروابط أدناه هي التي يستخدمها موقع المطوّر.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'أندرويد',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) (مجاني)',
          },
          {
            'المنصة': 'iPhone',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) (مجاني، iOS 16.6 أو أحدث)',
          },
          {
            'المنصة': 'macOS',
            'مكان الحصول عليه': '[مثبّت .dmg](https://www.llamatik.com/download/) (Apple Silicon و Intel)',
          },
          {
            'المنصة': 'Windows',
            'مكان الحصول عليه': '[مثبّت .msi](https://www.llamatik.com/download/) (Windows 10 أو أحدث)',
          },
          {
            'المنصة': 'Linux',
            'مكان الحصول عليه': '[حزمة .deb](https://www.llamatik.com/download/) (Debian/Ubuntu، جُرّبت على Ubuntu 22.04 أو أحدث)',
          },
          {
            'المنصة': 'المتصفح',
            'مكان الحصول عليه': '[تطبيق ويب](https://www.llamatik.com/prompt) (دون تثبيت)',
          },
          {
            'المنصة': 'الموقع',
            'مكان الحصول عليه': '[llamatik.com](https://www.llamatik.com/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة خصوصية Llamatik](https://multiplatformkickstarter.com/llamatik-privacy.html) (آخر تحديث 20 نوفمبر 2025)',
          },
          {
            'المنصة': 'الكود المصدري',
            'مكان الحصول عليه': '[GitHub](https://github.com/ferranpons/Llamatik) (MIT)',
          },
        ],
        note: 'الإصدار الذي جرت مراجعته: 1.9.0، المعروض على Google Play و App Store معاً. وملفات التثبيت لسطح المكتب المرفقة بإصدارات المستودع تحمل الرقم 1.9.0 أيضاً، حتى تحت وسوم مثل v2.0.0، ويبدو أن الوسوم تتبع إصدار الحزمة (SDK) لا إصدار التطبيق. ولا يزال نص صفحة التنزيل يعرض في مثال التثبيت اسم حزمة بالإصدار 1.8.0.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**يتبع الإعداد الترتيب الوارد في صفحة المتجر؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل Llamatik من Google Play أو App Store؛ ولا تذكر صفحتا المتجر ولا الموقع أي حساب.',
          },
          {
            title: 'نزّل نموذجاً عبر Wi-Fi',
            whyItMatters: 'يقول وصف Google Play إنه يجب تنزيل نموذج واحد على الأقل قبل الدردشة. ابدأ بأصغر نموذج، لأن الصفحة لا تذكر أحجام الملفات.',
          },
          {
            title: 'دردش',
            whyItMatters: 'اكتب طلباً أو اضغط على اقتراح أو طلب سريع، وبدّل النماذج من المحدّد عندما تريد مقارنة الإجابات.',
          },
          {
            title: 'جرّب نسخة المتصفح أولاً إن شئت',
            whyItMatters: 'يقدّم الموقع تطبيق ويب لا يحتاج إلى تثبيت، وهو طريقة سهلة لرؤية الواجهة قبل تنزيل النماذج.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من وصف Google Play أو من الموقع أو من ملف README في المستودع.**',
        ],
        items: [
          '**توليد النصوص على الجهاز.** تعمل الدردشة عبر llama.cpp على الهاتف، دون حاجة إلى اتصال بعد تثبيت النموذج.',
          '**منزّل نماذج مدمج.** ينزّل التطبيق نماذجه المدعومة ويثبّتها ويبدّل بينها، فلا حاجة إلى التعامل مع الملفات.',
          '**واجهة دردشة بسيطة.** اقتراحات ذكية وطلبات سريعة ومحدّد للنماذج وتدفق تعريفي.',
          '**البث والكلام.** يذكر README في المستودع أن التطبيق يعرض التوليد المتدفق وتحويل الكلام إلى نص عبر whisper.cpp؛ ولا يذكر نص Google Play أياً منهما، لذا تحقق من النسخة المثبّتة.',
          '**نسخ لسطح المكتب والمتصفح.** يوفر المشروع نفسه ملفات تثبيت لـ macOS و Windows و Linux وتطبيق متصفح.',
        ],
        note: 'قوائم الميزات في صفحتي المتجر قصيرة. ويصف README أيضاً قدرات في الحزمة (SDK)، مثل الاسترجاع والوكلاء وتوليد الصور، لا تتأكد من وجودها في التطبيق نفسه.',
      },
      openSource: {
        id: 'open-source',
        title: 'المصدر المفتوح وحزمة Llamatik SDK',
        content: [
          '**التطبيق هو العرض التجريبي العام لمشروع مفتوح المصدر أكبر.** مستودع [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) بترخيص MIT، وأُنشئ في يوليو 2025، ويُظهر 206 نجوم و 12 مشكلة مفتوحة في 19 أكتوبر 2026. ويضم التطبيقات وحزمة Kotlin Multiplatform SDK والارتباطات الأصلية لـ llama.cpp و whisper.cpp و stable-diffusion.cpp.',
          'بحسب README، أعاد الإصدار 2.0.0 الصادر في 14 أكتوبر 2026 تسمية مكتبة الاستدلال إلى com.llamatik:core وأضاف حزمة SDK لمنطق الأعمال تشمل الدردشة وإدارة النماذج والاسترجاع، وإطاراً للوكلاء، وبيئة تشغيل للوكلاء مع معالجة للأذونات. وهذه الأجزاء موجّهة إلى المطوّرين الذين يبنون تطبيقات أندرويد أو iOS أو سطح المكتب أو WASM الخاصة بهم؛ وهي منفصلة عن تطبيق الدردشة الذي يثبّته القارئ من المتجر.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**يبقى محتوى الدردشة على الجهاز افتراضياً، ويقول المطوّر إن شيئاً مما تكتبه في الدردشة لا يُرسل إلى Firebase ولا إلى أي خادم آخر.** ويصرّح قسم أمان البيانات في Google Play بعدم مشاركة أي بيانات مع أطراف ثالثة. ويسرد سجلات الأعطال والتشخيصات وبيانات أداء التطبيق الأخرى على أنها تُجمع لوظائف التطبيق والتحليلات، مشفّرة أثناء النقل، ويقول إن المطوّر لا يوفّر وسيلة لطلب حذف تلك البيانات.',
          'تسمّي [سياسة الخصوصية](https://multiplatformkickstarter.com/llamatik-privacy.html)، المحدَّثة في 20 نوفمبر 2025، Google Analytics for Firebase و Firebase Crashlytics، وتقول إن Firebase Performance Monitoring قد يكون مفعّلاً. أحداث التحليلات بأسماء مستعارة (مشاهدات الشاشات ونوع الجهاز وإصدار نظام التشغيل واللغة ومقاييس الأداء). وتحمل تقارير الأعطال طراز الجهاز وإصدار نظام التشغيل وتتبّعات المكدس وإصدار التطبيق، دون محتوى الدردشة. وتأتي ملفات النماذج من مضيفين عامين مثل Hugging Face، ولا يسجّل التطبيق أي نموذج تختاره.',
          'يقول الموقع «بلا حسابات. بلا تتبّع.» وهذه العبارة أضيق من السياسة، لأن تحليلات Firebase وتقارير الأعطال ما زالت سارية؛ كما يقول وصف Google Play نفسه إن الإنترنت يُستخدم فقط لتنزيل النماذج وللتحليلات وتقارير الأعطال.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الكود المصدري عام، لكن PromptQuorum لم تدقق فيه ولا في حركة الشبكة للتطبيق. وينبغي لمن يتعامل مع بيانات سرية أن يتحقق من السلوك على جهازه.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يريد تجربة النماذج على الجهاز دون تكلفة ودون حساب.** التطبيق مجاني ويضم منزّلاً للنماذج.',
          '**مطوّرو Kotlin وأندرويد الذين يقيّمون الحزمة (SDK).** التطبيق هو عرضها المرجعي، والكود بترخيص MIT.',
          '**القراء الذين يفضلون البرمجيات مفتوحة المصدر.** الكود والمشكلات والإصدارات كلها عامة.',
          '**المستخدمون الذين يقبلون التشخيصات لكن يريدون إبقاء محادثاتهم محلية.** يبقى المحتوى على الجهاز بينما يتلقى Firebase بيانات الأعطال والاستخدام.',
          '**لا يناسب من يحتاج إلى نماذج كبيرة أو دردشة مع المستندات.** فالصفحتان لا تقدمان أياً منهما.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم السرعة واستهلاك البطارية وجودة الإجابات.',
          '**توليد الصور والكلام.** يذكر رد من المطوّر على مراجعة في Google Play مشكلة معروفة في تنزيل نماذج الصور، ما يوحي بوجود توليد الصور في بعض الإصدارات، لكن لا يدرجه أي وصف في المتجر.',
          '**أحجام النماذج ومتطلبات العتاد.** لا تذكر الصفحتان أحجام التنزيل ولا حجم الذاكرة ولا الحد الأدنى لإصدار أندرويد؛ ويذكر README مستوى API 26 للمكتبة، وليس بالضرورة أنه متطلب التطبيق.',
          '**استيراد نماذجك الخاصة.** لا يذكر وصفا المتجر سوى المنزّل المدمج.',
          '**هل وصلت إصدارات SDK الأحدث إلى المتجرين.** إصدارات المتجرين هي 1.9.0 الصادر في 14 مايو 2026، ولا تذكر المصادر متى ستنتقل.',
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
            'المنصات': 'iOS وأندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز مع مكتبة نماذج خاصة به',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وأندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة على المستندات داخل الجهاز واختبارات سرعة',
          },
          {
            'التطبيق': '[Off Grid](/ar/power-local-llm/off-grid-ai-review)',
            'المنصات': 'iOS وأندرويد وMac وWindows',
            'السعر / الترخيص': 'مجاني جزئياً (Freemium) / MIT',
            'الفرق الرئيسي': 'مجموعة ذكاء اصطناعي مفتوحة المصدر تعمل دون اتصال على الهواتف وأجهزة سطح المكتب',
          },
          {
            'التطبيق': '[Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)',
            'المنصات': 'iOS وأندرويد',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'تطبيق مفتوح المصدر على الجهاز من فريق AI Edge في Google',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيراً؛ فتأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته. وجميع هذه التطبيقات الخمسة مفتوحة المصدر، لذا فما يميّز Llamatik هو تركيزه على الحزمة (SDK) لا ترخيصه.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'لماذا يظهر المطوّر بأسماء مختلفة؟',
            a: 'تدرج Google Play المطوّر باسم Multiplatform Kickstarter وتستضيف سياسة الخصوصية على هذا النطاق، بينما تدرج App Store البائع باسم Ferran Pons Sanchez، ويعود مستودع GitHub إلى Ferran Pons.',
          },
          {
            q: 'هل يمكنني تحميل نماذج GGUF الخاصة بي؟',
            a: 'لا يذكر وصفا المتجر سوى المنزّل المدمج. ويسرد README دوال استيراد النماذج في الحزمة (SDK)، لكن لا يُذكر ما إذا كان التطبيق يتيحها.',
          },
          {
            q: 'هل يمكنني تجربته دون تثبيت أي شيء؟',
            a: 'يقدّم الموقع نسخة متصفح على [llamatik.com/prompt](https://www.llamatik.com/prompt). ولم تتحقق PromptQuorum من المكان الذي تشغّل فيه هذه النسخة نماذجها ولا مما ترسله.',
          },
          {
            q: 'أين أبلّغ عن مشكلة؟',
            a: 'في [نظام تتبع المشكلات](https://github.com/ferranpons/Llamatik/issues) العام للمستودع على GitHub، أو عبر جهة الدعم المذكورة في صفحة Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Llamatik تطبيق دردشة مجاني بترخيص MIT يعمل دون اتصال على أندرويد و iPhone وسطح المكتب، يشغّل نماذج صغيرة عبر llama.cpp ويُظهر ما تستطيع حزمة مطوّره بلغة Kotlin فعله. وهو مفتوح المصدر، وقد حُدّث المستودع قبل أيام من هذه المراجعة. في المقابل، هو عرض تجريبي بنماذج صغيرة وتقييم عام متواضع وإصدارات متجر عمرها خمسة أشهر، وتحليلات Firebase التي ما زالت تغادر الجهاز. وهو يناسب القراء الذين يريدون طريقة مفتوحة المصدر لتجربة الدردشة على الجهاز، أو الذين يقيّمون الحزمة (SDK)؛ أما من يريد ميزات أكثر فيمكنه مقارنة [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private Mind](/ar/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Llamatik على Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) — الوصف والإصدار والتقييم وعدد التنزيلات وقسم أمان البيانات، جرى التحقق منها في 19 أكتوبر 2026.',
          '[Llamatik على App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) — السعر والإصدار والمتطلبات، جرى التحقق منها في 19 أكتوبر 2026.',
          '[موقع Llamatik](https://www.llamatik.com/) و[صفحة التنزيل](https://www.llamatik.com/download/) — المنصات وملفات التثبيت، جرى التحقق منها في 19 أكتوبر 2026.',
          '[سياسة خصوصية Llamatik](https://multiplatformkickstarter.com/llamatik-privacy.html) — التعامل مع البيانات والخدمات الخارجية، وآخر تحديث لها في 20 نوفمبر 2025.',
          '[Llamatik على GitHub](https://github.com/ferranpons/Llamatik) — README وترخيص MIT والإصدارات ونظام تتبع المشكلات، جرى التحقق منها في 19 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لنظامي iOS وأندرويد.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني بترخيص MIT يعمل دون اتصال لـ iPhone وأندرويد.',
          '[مراجعة Off Grid](/ar/power-local-llm/off-grid-ai-review) — مجموعة ذكاء اصطناعي مفتوحة المصدر تعمل دون اتصال على الهواتف وأجهزة سطح المكتب.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق Google المفتوح المصدر للذكاء الاصطناعي على الجهاز.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لأندرويد في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — الدليل الأشمل لأندرويد.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — الدليل الأشمل لـ iPhone.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llamatik-review-hero-zh.webp',
    title: 'Llamatik 评测:适用于 Android、iPhone 和桌面的免费开源离线 AI 聊天应用',
    seoTitle: 'Llamatik 评测:免费开源的手机离线 AI 聊天应用',
    intro:
      'Llamatik 是一款免费、采用 MIT 许可的离线 AI 聊天应用,适用于 Android、iPhone 和桌面,由独立开发者 Ferran Pons 开发,是其开源 Llamatik Kotlin Multiplatform SDK 的示范应用。它通过 llama.cpp 在设备上运行小型开放权重语言模型,Android 版于 2025 年 11 月 20 日首次在 Google Play 发布。本评测反映其应用商店页面、网站、隐私政策和 GitHub 代码仓库在 2026 年 10 月 19 日的情况。',
    metaDescription:
      'Llamatik 评测:免费、MIT 许可的 Android、iPhone 和桌面离线 AI 聊天应用。涵盖模型、Firebase 数据分析、更新状态和尚未确认的问题。',
    twitterDescription:
      'Llamatik 评测:适用于 Android、iPhone 和桌面的免费开源离线 AI 聊天应用,同时是 Kotlin 设备端 AI SDK 的示范应用。应用商店页面、隐私政策和代码仓库怎么说。',
    audience:
      '希望使用免费开源聊天应用在设备上运行语言模型的 Android 和 iPhone 用户,并且需要了解哪些内容保持离线、应用会向外发送什么,以及哪些内容来源并未确认。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llamatik 评测',
    targetKeywords: [
      'llamatik 应用评测',
      'llamatik 本地 ai 聊天应用',
      '离线 ai 聊天应用 android',
      '开源 设备端 llm 应用',
      'llamatik kotlin multiplatform sdk',
      'llama.cpp android 应用',
      'llamatik 与 pocketpal 对比',
    ],
    current_models_mentioned: ['Gemma', 'SmolVLM', 'Phi', 'Qwen', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone'],
    leadAnswerBlock:
      '**Llamatik(截至 2026 年 10 月 19 日,Google Play 和 App Store 上的版本为 1.9.0)是一款开源离线聊天应用,其自身页面称它是开发者 Kotlin SDK 的实验性示范,而不是功能完整的助手。** 模型只需下载一次,之后即可在手机上运行。Firebase 数据分析和崩溃报告确实会离开设备,因此在依赖网站“无追踪”的说法之前,请先阅读隐私部分。',
    quickAnswerTop: {
      zh: {
        question: 'Llamatik 真的免费并且能离线运行吗?',
        answer:
          '根据其应用商店页面,聊天功能确实如此:应用免费,Google Play 未显示广告或内购标签,模型下载完成后,对话在手机上运行,无需联网。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) 和 [App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) 免费获取,桌面安装包见[下载页面](https://www.llamatik.com/download/)。',
          '可在应用内下载 Gemma 3 270M、SmolVLM、Phi-1.5、Qwen 2.5 和 Llama 3.2 1B 等小型模型。',
          '聊天界面提供模型选择器、智能建议和快捷提示词。',
          '源代码见 [GitHub](https://github.com/ferranpons/Llamatik)。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Llamatik 是什么?', anchor: 'what-is-llamatik' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '如何开始使用', anchor: 'getting-started' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '开源与 Llamatik SDK', anchor: 'open-source' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '适合哪些人使用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llamatik 是一款免费的开源聊天应用,适用于 Android、iPhone 和桌面,在设备上运行小型语言模型,同时是其开发者 Kotlin SDK 的示范应用。',
          },
          {
            type: 'plain-terms',
            text: '安装应用,下载一次模型,之后无需账号和网络即可聊天;由于它是示范应用,界面会比较简单,模型也比较小,不要期待完整的助手。',
          },
        ],
        items: [
          '开发者:Ferran Pons,独立开发者,网站上没有列出任何公司;代码位于 [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik),采用 MIT 许可证。',
          '维护情况:代码仓库于 2026 年 10 月 14 日发布了 v2.0.0,因此不适用项目停滞警告;不过应用商店中的构建版本是 2026 年 5 月 14 日的 1.9.0。',
          '影响范围:Google Play 显示下载量 1K+,3.9 分(48 个评分);App Store 显示 3.0 分(两个评分),因此公开口碑记录很少。',
          '平台:Android、iPhone(iOS 16.6 或更高版本)、macOS、Windows、Debian/Ubuntu Linux,以及 [llamatik.com/prompt](https://www.llamatik.com/prompt) 上的浏览器版本。',
          '模型:由应用自行下载的小型量化开放权重模型;页面未给出下载大小或内存要求。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Google Play 和 App Store 页面、网站、隐私政策以及公开的 GitHub 代码仓库,核实日期为 2026 年 10 月 19 日。PromptQuorum 并未安装、测试该应用,也未对其进行基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-llamatik',
        title: 'Llamatik 是什么?',
        content: [
          '**Llamatik 是一款在手机上运行开放权重语言模型的离线聊天应用,而不是调用云服务。** Google Play 的描述称它是 Llamatik Kotlin Multiplatform 库的实验性示范。应用不内置任何模型:你需要在应用内至少下载一个,在模型选择器中选定后即可聊天。页面列出了 Gemma 3 270M、SmolVLM 256M 和 500M、Phi-1.5、Qwen 2.5,以及量化的 Llama 3.2 1B。',
          '有三个产品共用这一名称。本评测针对的是聊天应用,它在 Google Play 上的标题为“Llamatik - Local AI Chatbot”(包名 com.llamatik.app.android)。Llamatik SDK 是驱动它的库,Llamatik Server 则是同一项目中独立的远程推理后端。网站还列出了面向 JetBrains IDE 的 Llamatik Code 插件,本评测不涉及。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Llamatik 在所有支持的平台上都是下载即用:两大手机应用商店,加上网站上的桌面安装包。** 下方链接均为开发者网站所使用的链接。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Android',
            '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android)(免费)',
          },
          {
            '平台': 'iPhone',
            '获取方式': '[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708)(免费,iOS 16.6 或更高)',
          },
          {
            '平台': 'macOS',
            '获取方式': '[.dmg 安装包](https://www.llamatik.com/download/)(Apple Silicon 和 Intel)',
          },
          {
            '平台': 'Windows',
            '获取方式': '[.msi 安装包](https://www.llamatik.com/download/)(Windows 10 或更高)',
          },
          {
            '平台': 'Linux',
            '获取方式': '[.deb 软件包](https://www.llamatik.com/download/)(Debian/Ubuntu,在 Ubuntu 22.04 或更高版本上测试)',
          },
          {
            '平台': '浏览器',
            '获取方式': '[网页版](https://www.llamatik.com/prompt)(无需安装)',
          },
          {
            '平台': '网站',
            '获取方式': '[llamatik.com](https://www.llamatik.com/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[Llamatik 隐私政策](https://multiplatformkickstarter.com/llamatik-privacy.html)(最后更新于 2025 年 11 月 20 日)',
          },
          {
            '平台': '源代码',
            '获取方式': '[GitHub](https://github.com/ferranpons/Llamatik)(MIT)',
          },
        ],
        note: '所评测版本:1.9.0,Google Play 和 App Store 均显示该版本。代码仓库各发布版本所附的桌面安装包同样命名为 1.9.0,即使标签为 v2.0.0 等也是如此,因此这些标签似乎对应的是 SDK 版本,而不是应用版本。下载页面文字中的安装示例仍显示 1.8.0 的包名。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用',
        content: [
          '**设置顺序遵循应用商店页面中的描述;PromptQuorum 并未实际执行这些步骤。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从 Google Play 或 App Store 下载 Llamatik;页面和网站均未提及账号。',
          },
          {
            title: '在 Wi-Fi 下下载模型',
            whyItMatters: 'Google Play 的描述称,聊天之前必须至少下载一个模型。由于页面未给出文件大小,建议从最小的模型开始。',
          },
          {
            title: '开始聊天',
            whyItMatters: '输入提示词,或点按建议或快捷提示词;想对比回答时,可在选择器中切换模型。',
          },
          {
            title: '可选:先试用浏览器版本',
            whyItMatters: '网站提供无需安装的网页版,在下载模型之前,这是先了解界面的省力方式。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项均来自 Google Play 的描述、网站或代码仓库的 README。**',
        ],
        items: [
          '**设备端文本生成。** 聊天通过 llama.cpp 在手机上运行,模型安装完成后无需联网。',
          '**内置模型下载器。** 应用可下载、安装其支持的模型并在它们之间切换,无需自己处理文件。',
          '**简洁的聊天界面。** 包括智能建议、快捷提示词、模型选择器和新手引导流程。',
          '**流式输出与语音。** 代码仓库的 README 称,该应用展示了流式生成和 whisper.cpp 语音转文字;Google Play 的文字对两者均未提及,请以已安装的版本为准。',
          '**桌面版与浏览器版。** 同一项目提供 macOS、Windows 和 Linux 安装包以及浏览器应用。',
        ],
        note: '应用商店页面上的功能列表很简短。README 还描述了 SDK 的能力,例如检索、Agent 和图像生成,但这些并未被确认属于应用本身。',
      },
      openSource: {
        id: 'open-source',
        title: '开源与 Llamatik SDK',
        content: [
          '**该应用是一个更大的开源项目的公开示范。** 代码仓库 [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) 采用 MIT 许可证,创建于 2025 年 7 月,截至 2026 年 10 月 19 日有 206 个星标和 12 个未解决的问题。其中包含应用、Kotlin Multiplatform SDK,以及 llama.cpp、whisper.cpp 和 stable-diffusion.cpp 的原生绑定。',
          '根据 README,2026 年 10 月 14 日的 2.0.0 版本将推理库更名为 com.llamatik:core,并新增了包含聊天、模型管理和检索的业务逻辑 SDK、Agent 框架,以及带权限处理的 Agent 运行时。这些部分面向构建自己的 Android、iOS、桌面或 WASM 应用的开发者,与读者从应用商店安装的聊天应用相互独立。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**聊天内容默认保存在设备上,开发者称,在聊天机器人中输入的任何内容都不会发送到 Firebase 或其他任何服务器。** Google Play 的数据安全部分声明未与第三方共享数据。它列出崩溃日志、诊断信息和其他应用性能数据,用于应用功能和数据分析,传输时加密,并称开发者不提供申请删除这些数据的途径。',
          '[隐私政策](https://multiplatformkickstarter.com/llamatik-privacy.html)最后更新于 2025 年 11 月 20 日,其中列出了 Google Analytics for Firebase 和 Firebase Crashlytics,并称可能启用 Firebase Performance Monitoring。数据分析事件为假名化数据(屏幕浏览、设备类型、操作系统版本、语言和性能指标)。崩溃报告包含设备型号、操作系统版本、堆栈跟踪和应用版本,但不含聊天内容。模型文件来自 Hugging Face 等公共托管站点,应用不会记录你选择了哪个模型。',
          '网站写道“No accounts. No tracking.”(无账号,无追踪)。这一说法比政策更窄,因为 Firebase 数据分析和崩溃报告依然适用;Google Play 的描述本身也称,网络仅用于下载模型以及数据分析和崩溃报告。',
        ],
        callouts: [
          {
            type: 'note',
            text: '源代码是公开的,但 PromptQuorum 并未审计源代码或应用的网络流量。处理机密数据的人应在自己的设备上核实其行为。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**想免费、无需账号就尝试设备端模型的人。** 应用免费,并内置下载器。',
          '**正在评估该 SDK 的 Kotlin 和 Android 开发者。** 该应用是它的参考示范,代码采用 MIT 许可。',
          '**偏好开源软件的读者。** 源代码、问题和发布版本均为公开。',
          '**接受诊断数据、但希望聊天保持在本地的用户。** 聊天内容留在设备上,而 Firebase 会收到崩溃和使用数据。',
          '**不适合需要大型模型或文档聊天的用户。** 页面两者均未提供。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际使用性能。** PromptQuorum 没有运行该应用,因此速度、耗电和回答质量均未评估。',
          '**图像生成与语音。** 开发者对一条 Google Play 评论的回复提到了图像模型下载的已知问题,这表明某些构建中存在图像生成功能,但没有任何应用商店描述列出该功能。',
          '**模型大小与硬件要求。** 页面未给出下载大小、内存数据或最低 Android 版本;README 为该库列出了 API 级别 26,但这不一定是应用的要求。',
          '**导入自己的模型。** 应用商店的描述只提到了内置下载器。',
          '**较新的 SDK 版本是否已进入应用商店。** 应用商店中的构建版本是 2026 年 5 月 14 日的 1.9.0,来源并未说明它们何时会更新。',
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
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源离线聊天,支持设备端文档问答和基准测试',
          },
          {
            '应用': '[Off Grid](/zh/power-local-llm/off-grid-ai-review)',
            '平台': 'iOS、Android、Mac、Windows',
            '价格 / 许可证': '免费增值 / MIT',
            '主要区别': '覆盖手机和桌面的开源离线 AI 套件',
          },
          {
            '应用': '[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '来自 Google AI Edge 团队的开源设备端应用',
          },
        ],
        note: '竞品信息变化频繁;请在各应用自己的页面上确认其当前价格、许可证和平台。这五款应用均为开源,因此 Llamatik 的区别在于专注 SDK,而不是许可证。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '为什么开发者以不同的名称出现?',
            a: 'Google Play 将开发者列为 Multiplatform Kickstarter,并把隐私政策托管在该域名下;App Store 则把 Ferran Pons Sanchez 列为销售方,GitHub 代码仓库属于 Ferran Pons。',
          },
          {
            q: '我可以加载自己的 GGUF 模型吗?',
            a: '应用商店的描述只提到了内置下载器。README 在 SDK 中列出了模型导入函数,但应用是否开放这些功能并未说明。',
          },
          {
            q: '我可以不安装任何东西就试用吗?',
            a: '网站在 [llamatik.com/prompt](https://www.llamatik.com/prompt) 提供浏览器版本。PromptQuorum 并未核实该版本在哪里运行其模型,也未核实它会发送什么。',
          },
          {
            q: '在哪里报告问题?',
            a: '可在 GitHub 上该代码仓库的公开[问题追踪器](https://github.com/ferranpons/Llamatik/issues)中提交,或通过 Google Play 页面上的支持联系方式。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Llamatik 是一款免费、采用 MIT 许可的离线聊天应用,适用于 Android、iPhone 和桌面,通过 llama.cpp 运行小型模型,并展示其开发者 Kotlin SDK 的能力。它是开源的,代码仓库在本评测的几天前刚有更新。另一方面,它是一款实验性示范应用,模型较小,公开评分不高,应用商店的构建版本已有五个月之久,而且 Firebase 数据分析仍会离开设备。它适合想以开源方式尝试设备端聊天的读者,或评估该 SDK 的读者;想要更多功能的读者可以比较 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Private Mind](/zh/power-local-llm/private-mind-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 Llamatik](https://play.google.com/store/apps/details?id=com.llamatik.app.android) — 描述、版本、评分、下载量和数据安全部分,核实于 2026 年 10 月 19 日。',
          '[App Store 上的 Llamatik](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) — 价格、版本和系统要求,核实于 2026 年 10 月 19 日。',
          '[Llamatik 网站](https://www.llamatik.com/)和[下载页面](https://www.llamatik.com/download/) — 平台和安装包,核实于 2026 年 10 月 19 日。',
          '[Llamatik 隐私政策](https://multiplatformkickstarter.com/llamatik-privacy.html) — 数据处理和第三方服务,最后更新于 2025 年 11 月 20 日。',
          '[GitHub 上的 Llamatik](https://github.com/ferranpons/Llamatik) — README、MIT 许可证、发布版本和问题追踪器,核实于 2026 年 10 月 19 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的免费、MIT 许可的离线聊天应用。',
          '[Off Grid 评测](/zh/power-local-llm/off-grid-ai-review) — 覆盖手机和桌面的开源离线 AI 套件。',
          '[Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google 的开源设备端 AI 应用。',
          '[2026 年 Android 最佳本地大模型应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用盘点。',
          '[2026 年 iPhone 最佳本地大模型应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iPhone 应用盘点。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llamatik-review-hero-ko.webp',
    title: 'Llamatik 리뷰: Android·iPhone·데스크톱용 무료 오픈소스 오프라인 AI 챗봇',
    seoTitle: 'Llamatik 리뷰: 무료 오픈 소스 오프라인 AI 챗봇',
    intro:
      'Llamatik은 독립 개발자 Ferran Pons가 자신의 오픈 소스 Llamatik Kotlin Multiplatform SDK의 쇼케이스 앱으로 만든, MIT 라이선스의 무료 오프라인 AI 챗봇이며 Android, iPhone, 데스크톱에서 쓸 수 있습니다. llama.cpp를 통해 작은 오픈 웨이트 언어 모델을 기기에서 실행하며, Android 버전은 2025년 11월 20일에 Google Play에 처음 출시되었습니다. 이 리뷰는 2026년 10월 19일에 확인한 스토어 게재 정보, 웹사이트, 개인정보 처리방침, GitHub 저장소를 반영합니다.',
    metaDescription:
      'Llamatik 리뷰: Android, iPhone, 데스크톱용 MIT 라이선스 무료 오프라인 AI 챗봇. 모델, Firebase 분석, 업데이트 현황과 확인되지 않은 점을 다룹니다.',
    twitterDescription:
      'Llamatik 리뷰: Kotlin 온디바이스 AI SDK의 데모를 겸하는 Android, iPhone, 데스크톱용 무료 오픈 소스 오프라인 AI 챗봇. 스토어 게재 정보, 개인정보 처리방침, 저장소의 내용을 다룹니다.',
    audience:
      '기기에서 언어 모델을 실행하는 무료 오픈 소스 챗봇을 찾는 Android·iPhone 이용자로, 무엇이 오프라인에 머무는지, 무엇을 외부로 보내는지, 출처가 무엇을 확인해 주지 않는지 알아야 하는 분들.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llamatik 리뷰',
    targetKeywords: [
      'llamatik 앱 리뷰',
      'llamatik 로컬 ai 챗봇',
      '오프라인 ai 챗봇 안드로이드',
      '오픈 소스 온디바이스 llm 앱',
      'llamatik kotlin multiplatform sdk',
      'llama.cpp 안드로이드 앱',
      'llamatik pocketpal 비교',
    ],
    current_models_mentioned: ['Gemma', 'SmolVLM', 'Phi', 'Qwen', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone'],
    leadAnswerBlock:
      '**Llamatik(2026년 10월 19일 기준 Google Play와 App Store 버전 1.9.0)은 자체 게재 정보가 개발자의 Kotlin SDK를 보여 주는 실험적 쇼케이스이지 완전한 어시스턴트가 아니라고 밝히는 오픈 소스 오프라인 챗봇입니다.** 모델은 한 번 내려받은 뒤 휴대폰에서 실행됩니다. Firebase 분석과 오류 보고서는 기기 밖으로 전송되므로, 웹사이트의 "추적 없음"이라는 문구에 의존하기 전에 개인정보 항목을 읽어 보시기 바랍니다.',
    quickAnswerTop: {
      ko: {
        question: 'Llamatik은 정말 무료이며 오프라인으로 실행됩니까?',
        answer:
          '게재 정보에 따르면 채팅 자체는 그렇습니다. 앱은 무료이고, Google Play에는 광고나 구입 표시가 없으며, 모델을 한 번 내려받은 뒤에는 인터넷 연결 없이 휴대폰에서 대화가 실행됩니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android)와 [App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708)에서 무료이며, 데스크톱 설치 파일은 [다운로드 페이지](https://www.llamatik.com/download/)에 있습니다.',
          'Gemma 3 270M, SmolVLM, Phi-1.5, Qwen 2.5, Llama 3.2 1B 같은 작은 모델을 앱 안에서 내려받을 수 있습니다.',
          '채팅 화면의 모델 선택기, 스마트 제안, 빠른 프롬프트.',
          '소스 코드는 [GitHub](https://github.com/ferranpons/Llamatik)에 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Llamatik이란 무엇인가?', anchor: 'what-is-llamatik' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '오픈 소스와 Llamatik SDK', anchor: 'open-source' },
      { label: '개인정보와 네트워크 사용', anchor: 'privacy' },
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
            text: 'Llamatik은 작은 언어 모델을 기기에서 실행하고 개발자의 Kotlin SDK 데모 앱을 겸하는, Android·iPhone·데스크톱용 무료 오픈 소스 챗봇입니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 모델을 한 번 내려받으면 계정이나 인터넷 연결 없이 채팅할 수 있습니다. 데모 앱이므로 완전한 어시스턴트보다는 단순한 인터페이스와 작은 모델을 예상하시기 바랍니다.',
          },
        ],
        items: [
          '개발자: 개인 개발자 Ferran Pons이며 웹사이트에 회사 이름은 없고, 코드는 MIT 라이선스로 [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik)에 있습니다.',
          '유지보수: 저장소가 2026년 10월 14일에 v2.0.0을 릴리스했으므로 방치된 프로젝트 경고는 해당되지 않습니다. 다만 스토어 빌드는 2026년 5월 14일의 버전 1.9.0입니다.',
          '도달 범위: Google Play는 다운로드 1K+와 48개 평가에서 평점 3.9를, App Store는 평가 두 건에서 3.0을 표시하므로 공개된 이력이 많지 않습니다.',
          '플랫폼: Android, iPhone(iOS 16.6 이상), macOS, Windows, Debian/Ubuntu Linux, 그리고 [llamatik.com/prompt](https://www.llamatik.com/prompt)의 브라우저 버전.',
          '모델: 앱이 직접 내려받는 작은 양자화 오픈 웨이트 모델이며, 게재 정보에는 다운로드 크기나 RAM 요구 사항이 나와 있지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 Google Play·App Store 게재 정보, 웹사이트, 개인정보 처리방침, 공개 GitHub 저장소를 2026년 10월 19일에 확인한 내용을 근거로 합니다. PromptQuorum은 앱을 설치하거나 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-llamatik',
        title: 'Llamatik이란 무엇인가?',
        content: [
          '**Llamatik은 클라우드 서비스를 호출하는 대신 오픈 웨이트 언어 모델을 휴대폰에서 실행하는 오프라인 챗봇 앱입니다.** Google Play 설명은 이 앱을 Llamatik Kotlin Multiplatform 라이브러리의 실험적 쇼케이스라고 소개합니다. 모델은 포함되어 있지 않으며, 앱 안에서 하나 이상 내려받아 모델 선택기에서 고른 뒤 채팅합니다. 게재 정보에는 Gemma 3 270M, SmolVLM 256M과 500M, Phi-1.5, Qwen 2.5, 양자화된 Llama 3.2 1B가 나와 있습니다.',
          '같은 이름을 쓰는 제품이 세 가지 있습니다. 이 리뷰는 Google Play에서 "Llamatik - Local AI Chatbot"이라는 제목으로 게재된 채팅 앱(패키지 com.llamatik.app.android)을 다룹니다. Llamatik SDK는 이 앱을 구동하는 라이브러리이고, Llamatik Server는 같은 프로젝트의 별도 원격 추론 백엔드입니다. 웹사이트에는 JetBrains IDE용 Llamatik Code 플러그인도 나와 있으나 이 리뷰에서는 다루지 않습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**Llamatik은 지원하는 모든 플랫폼에서 내려받아 바로 여는 방식으로 설치하며, 모바일 스토어 두 곳과 웹사이트의 데스크톱 설치 파일이 있습니다.** 아래 링크는 개발자의 웹사이트가 사용하는 것입니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.llamatik.app.android) (무료)',
          },
          {
            '플랫폼': 'iPhone',
            '받는 곳': '[App Store](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) (무료, iOS 16.6 이상)',
          },
          {
            '플랫폼': 'macOS',
            '받는 곳': '[.dmg 설치 파일](https://www.llamatik.com/download/) (Apple Silicon·Intel)',
          },
          {
            '플랫폼': 'Windows',
            '받는 곳': '[.msi 설치 파일](https://www.llamatik.com/download/) (Windows 10 이상)',
          },
          {
            '플랫폼': 'Linux',
            '받는 곳': '[.deb 패키지](https://www.llamatik.com/download/) (Debian/Ubuntu, Ubuntu 22.04 이상에서 테스트)',
          },
          {
            '플랫폼': '브라우저',
            '받는 곳': '[웹 앱](https://www.llamatik.com/prompt) (설치 불필요)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[llamatik.com](https://www.llamatik.com/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Llamatik 개인정보 처리방침](https://multiplatformkickstarter.com/llamatik-privacy.html) (2025년 11월 20일 갱신)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub](https://github.com/ferranpons/Llamatik) (MIT)',
          },
        ],
        note: '확인한 버전은 Google Play와 App Store에 모두 표시된 1.9.0입니다. 저장소 릴리스에 첨부된 데스크톱 설치 파일도 v2.0.0 같은 태그 아래에서 1.9.0으로 명명되어 있어, 태그는 앱 버전이 아니라 SDK를 따르는 것으로 보입니다. 다운로드 페이지의 설치 예시에는 여전히 1.8.0 패키지 이름이 나와 있습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**설정은 스토어 게재 정보에 설명된 순서를 따른 것이며, PromptQuorum은 이 단계를 직접 실행하지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'Google Play 또는 App Store에서 Llamatik을 내려받습니다. 게재 정보와 웹사이트 어디에도 계정에 대한 언급은 없습니다.',
          },
          {
            title: 'Wi-Fi에서 모델 내려받기',
            whyItMatters: 'Google Play 설명에 따르면 채팅하기 전에 모델을 하나 이상 내려받아야 합니다. 게재 정보에 파일 크기가 나와 있지 않으므로 가장 작은 모델부터 시작하십시오.',
          },
          {
            title: '채팅',
            whyItMatters: '프롬프트를 입력하거나 제안 또는 빠른 프롬프트를 누르고, 답변을 비교하고 싶을 때는 선택기에서 모델을 바꿉니다.',
          },
          {
            title: '원하면 브라우저 버전을 먼저 사용',
            whyItMatters: '웹사이트에는 설치가 필요 없는 웹 앱이 있어, 모델을 내려받기 전에 인터페이스를 가볍게 확인할 수 있습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명, 웹사이트 또는 저장소 README에서 가져온 것입니다.**',
        ],
        items: [
          '**온디바이스 텍스트 생성.** 채팅은 휴대폰에서 llama.cpp로 실행되며, 모델을 설치한 뒤에는 연결이 필요 없습니다.',
          '**내장 모델 다운로더.** 앱이 지원하는 모델을 직접 내려받고, 설치하고, 전환하므로 파일을 직접 다룰 필요가 없습니다.',
          '**단순한 채팅 인터페이스.** 스마트 제안, 빠른 프롬프트, 모델 선택기, 온보딩 흐름.',
          '**스트리밍과 음성.** 저장소 README는 앱이 스트리밍 생성과 whisper.cpp 음성 인식을 보여 준다고 밝히지만 Google Play 설명에는 둘 다 나와 있지 않으므로, 설치한 빌드에서 확인하시기 바랍니다.',
          '**데스크톱과 브라우저 버전.** 같은 프로젝트가 macOS, Windows, Linux 설치 파일과 브라우저 앱을 제공합니다.',
        ],
        note: '스토어 페이지의 기능 목록은 짧습니다. README에는 검색, 에이전트, 이미지 생성 같은 SDK 기능도 설명되어 있으나, 앱 자체에서 지원되는지는 확인되지 않습니다.',
      },
      openSource: {
        id: 'open-source',
        title: '오픈 소스와 Llamatik SDK',
        content: [
          '**이 앱은 더 큰 오픈 소스 프로젝트의 공개 데모입니다.** [github.com/ferranpons/Llamatik](https://github.com/ferranpons/Llamatik) 저장소는 MIT 라이선스이고 2025년 7월에 만들어졌으며, 2026년 10월 19일 기준 스타 206개와 열린 이슈 12개가 표시됩니다. 저장소에는 앱, Kotlin Multiplatform SDK, llama.cpp·whisper.cpp·stable-diffusion.cpp용 네이티브 바인딩이 들어 있습니다.',
          'README에 따르면 2026년 10월 14일의 릴리스 2.0.0은 추론 라이브러리 이름을 com.llamatik:core로 바꾸고, 채팅·모델 관리·검색을 갖춘 비즈니스 로직 SDK, 에이전트 프레임워크, 권한 처리가 있는 에이전트 런타임을 추가했습니다. 이 부분들은 자신의 Android, iOS, 데스크톱 또는 WASM 앱을 만드는 개발자를 위한 것이며, 독자가 스토어에서 설치하는 채팅 앱과는 별개입니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**채팅 내용은 기본적으로 기기에 머물며, 개발자는 챗봇에 입력한 어떤 내용도 Firebase나 다른 서버로 전송되지 않는다고 밝힙니다.** Google Play 데이터 보안 항목에는 제3자와 공유하는 데이터가 없다고 되어 있습니다. 충돌 로그, 진단, 기타 앱 성능 데이터가 앱 기능과 분석 목적으로 수집되고 전송 중 암호화된다고 나열하며, 개발자가 이 데이터의 삭제를 요청할 방법을 제공하지 않는다고 밝힙니다.',
          '2025년 11월 20일에 갱신된 [개인정보 처리방침](https://multiplatformkickstarter.com/llamatik-privacy.html)은 Google Analytics for Firebase와 Firebase Crashlytics를 명시하며, Firebase Performance Monitoring이 활성화될 수 있다고 밝힙니다. 분석 이벤트는 가명 처리되어 있습니다(화면 조회, 기기 유형, 운영체제 버전, 언어, 성능 지표). 오류 보고서에는 기기 모델, 운영체제 버전, 스택 트레이스, 앱 버전이 담기지만 채팅 내용은 담기지 않습니다. 모델 파일은 Hugging Face 같은 공개 호스트에서 오며, 앱은 이용자가 어떤 모델을 고르는지 기록하지 않습니다.',
          '웹사이트는 "계정 없음. 추적 없음."이라고 밝힙니다. Firebase 분석과 오류 보고는 여전히 적용되므로 이 문구는 처리방침보다 범위가 좁습니다. Google Play 설명 자체는 인터넷을 모델 내려받기와 분석, 오류 보고에만 사용한다고 밝힙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '소스 코드는 공개되어 있지만 PromptQuorum은 소스 코드나 앱의 네트워크 트래픽을 감사하지 않았습니다. 기밀 데이터를 다루는 분은 본인 기기에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**비용이나 계정 없이 온디바이스 모델을 써 보고 싶은 분.** 앱은 무료이며 다운로더가 내장되어 있습니다.',
          '**SDK를 평가하는 Kotlin·Android 개발자.** 이 앱이 SDK의 레퍼런스 데모이고 코드는 MIT 라이선스입니다.',
          '**오픈 소스 소프트웨어를 선호하는 분.** 소스, 이슈, 릴리스가 공개되어 있습니다.',
          '**진단 정보는 받아들이되 채팅은 로컬에 두고 싶은 이용자.** 내용은 기기에 머물고 Firebase는 충돌 및 사용 데이터를 받습니다.',
          '**대형 모델이나 문서 채팅이 필요한 분께는 맞지 않습니다.** 게재 정보에는 둘 다 나와 있지 않습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**직접 사용해 본 성능.** PromptQuorum은 앱을 실행하지 않았으므로 속도, 배터리 사용량, 답변 품질은 평가하지 않았습니다.',
          '**이미지 생성과 음성.** Google Play 리뷰에 대한 개발자의 답변에 이미지 모델 다운로드 관련 알려진 문제가 언급되어 일부 빌드에 이미지 생성이 있음을 시사하지만, 어떤 스토어 설명에도 나와 있지 않습니다.',
          '**모델 크기와 하드웨어 요구 사항.** 게재 정보에는 다운로드 크기, RAM 수치, 최소 Android 버전이 나와 있지 않습니다. README는 라이브러리에 API 레벨 26을 명시하지만 이것이 앱의 요구 사항이라고 단정할 수는 없습니다.',
          '**내 모델 가져오기.** 스토어 설명에는 내장 다운로더만 언급됩니다.',
          '**새 SDK 릴리스가 스토어에 반영되었는지.** 스토어 빌드는 2026년 5월 14일의 1.9.0이며, 언제 바뀔지는 출처에 나와 있지 않습니다.',
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
            '핵심 차이': '온디바이스 문서 Q&A와 벤치마크를 갖춘 오픈 소스 오프라인 채팅',
          },
          {
            '앱': '[Off Grid](/ko/power-local-llm/off-grid-ai-review)',
            '플랫폼': 'iOS, Android, Mac, Windows',
            '가격 / 라이선스': '프리미엄 / MIT',
            '핵심 차이': '휴대폰과 데스크톱에서 쓰는 오픈 소스 오프라인 AI 모음',
          },
          {
            '앱': '[Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'Google AI Edge 팀이 만든 오픈 소스 온디바이스 앱',
          },
        ],
        note: '경쟁 앱의 세부 정보는 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하시기 바랍니다. 다섯 앱 모두 오픈 소스이므로 Llamatik의 차별점은 라이선스가 아니라 SDK 중심이라는 점입니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '개발자가 왜 서로 다른 이름으로 나오나요?',
            a: 'Google Play는 개발자를 Multiplatform Kickstarter로 표시하고 개인정보 처리방침도 그 도메인에 두고 있으며, App Store는 판매자를 Ferran Pons Sanchez로, GitHub 저장소는 Ferran Pons 소유로 표시합니다.',
          },
          {
            q: '내 GGUF 모델을 불러올 수 있나요?',
            a: '스토어 설명에는 내장 다운로더만 언급됩니다. README에는 SDK의 모델 가져오기 함수가 나와 있지만, 앱이 이를 제공하는지는 밝혀져 있지 않습니다.',
          },
          {
            q: '설치하지 않고 사용해 볼 수 있나요?',
            a: '웹사이트가 [llamatik.com/prompt](https://www.llamatik.com/prompt)에서 브라우저 버전을 제공합니다. PromptQuorum은 이 버전이 모델을 어디서 실행하는지, 무엇을 전송하는지 확인하지 않았습니다.',
          },
          {
            q: '문제는 어디에 신고하나요?',
            a: 'GitHub의 저장소 공개 [이슈 트래커](https://github.com/ferranpons/Llamatik/issues)나 Google Play 게재 정보에 있는 지원 연락처로 신고하시면 됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Llamatik은 llama.cpp로 작은 모델을 실행하고 개발자의 Kotlin SDK가 할 수 있는 일을 보여 주는, Android·iPhone·데스크톱용 MIT 라이선스의 무료 오프라인 챗봇입니다. 오픈 소스이며 저장소는 이 리뷰를 쓰기 며칠 전에 업데이트되었습니다. 반면 작은 모델을 쓰는 실험적 데모이고, 공개 평점은 높지 않으며, 스토어 빌드는 다섯 달 전 것이고, Firebase 분석은 여전히 기기 밖으로 나갑니다. 온디바이스 채팅을 오픈 소스로 써 보고 싶거나 SDK를 평가하는 분께 맞으며, 더 많은 기능을 원하는 분은 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private Mind](/ko/power-local-llm/private-mind-review)와 비교해 보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 Llamatik](https://play.google.com/store/apps/details?id=com.llamatik.app.android) — 설명, 버전, 평점, 다운로드 수, 데이터 보안 항목. 2026년 10월 19일 확인.',
          '[App Store의 Llamatik](https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708) — 가격, 버전, 요구 사항. 2026년 10월 19일 확인.',
          '[Llamatik 웹사이트](https://www.llamatik.com/)와 [다운로드 페이지](https://www.llamatik.com/download/) — 플랫폼과 설치 파일. 2026년 10월 19일 확인.',
          '[Llamatik 개인정보 처리방침](https://multiplatformkickstarter.com/llamatik-privacy.html) — 데이터 처리와 제3자 서비스. 2025년 11월 20일 갱신.',
          '[GitHub의 Llamatik](https://github.com/ferranpons/Llamatik) — README, MIT 라이선스, 릴리스, 이슈 트래커. 2026년 10월 19일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS·Android용 무료 오픈 소스 온디바이스 채팅 클라이언트.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone·Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[Off Grid 리뷰](/ko/power-local-llm/off-grid-ai-review) — 휴대폰과 데스크톱용 오픈 소스 오프라인 AI 모음.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 오픈 소스 온디바이스 AI 앱.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 전반을 다룬 종합 정리.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 전반을 다룬 종합 정리.',
        ],
      },
    },
  },
}
