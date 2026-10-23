// Secret AI Review: Private Offline AI Chat for iPhone, Android and Mac
// Slug: secret-ai-review
// Companion to: enclave-ai-review, pocketpal-ai-review, private-mind-review, llm-hub-review, best-local-llm-apps-android-2026
// Sources: the Google Play listing (io.secretai.llm), the App Store listing (id6744668980), the official website secretai.io and its
// privacy policy, checked 2026-10-19 — no hands-on testing.
// Version 1.12.2 is the Android version shown in the Play listing data (tile pqReview.version must match); last upstream update 2026-10-15.
// Prices: App Store US plan prices are in the FAQ; the Get It row shows one line per locale. Play shows only a price range per storefront
// (US $4.99-$119.99, DE/ES/FR 4,99-124,99 EUR, JP 860-20,900 JPY, BR R$ 24,99-599,99, KR 8,000-200,000 KRW, SA 21.99-519.99 SAR, CN none).
// Never FX-converted.

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
    heroImage: '/images/secret-ai-review-hero-en.webp',
    title: 'Secret AI Review: Private Offline AI Chat for iPhone, Android and Mac',
    seoTitle: 'Secret AI Review: Offline AI Chat for iPhone, Android, Mac',
    intro: 'Secret AI is a private AI chat app from [Secret AI L.L.C.](https://secretai.io), a company registered in Wyoming, that runs open-source language models on the phone or Mac and adds custom characters, Skills and MCP tools. It is available for [Android](https://play.google.com/store/apps/details?id=io.secretai.llm), [iPhone and iPad](https://apps.apple.com/us/app/secret-ai/id6744668980), and the App Store lists a Mac version. This review is based on the two store listings, the official website and its privacy policy, checked on 19 October 2026; PromptQuorum has not tested the app hands-on. Other products share the name Secret AI; this review covers only the app with the Android package io.secretai.llm.',
    metaDescription: 'Secret AI review: private offline AI chat for iPhone, Android and Mac with characters, Skills and MCP tools. Free tier, paid plans, source not published.',
    twitterDescription: 'Secret AI review: private offline AI chat for iPhone, Android and Mac. Free tier, Plus and Pro plans, closed source, claims not yet tested.',
    audience: 'People who want a private AI chat app on their phone or Mac and need to know what the sources confirm, what only the developer claims, and what the paid plans unlock.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Secret AI review',
    targetKeywords: [
      'secret ai review',
      'secret ai app',
      'secret ai offline chat',
      'private offline ai chat iphone android',
      'local llm app iphone android mac',
      'ai chat with mcp tools on phone',
      'io.secretai.llm',
    ],
    current_models_mentioned: [
      'Qwen3.5 VL',
      'Gemma 4',
      'LFM2.5 VL',
      'MiniCPM 5',
      'DeepSeek R1 0528',
      'gpt-oss',
      'Llama 4',
      'Phi 4',
      'Mistral',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Android',
    ],
    leadAnswerBlock: '**Secret AI is a phone and Mac app that, per its developer, runs open-source AI models on the device so chats, characters and photos stay private; MCP tool calls and optional remote model servers do send data off the device.** The source code is not published, and the privacy policy was last updated in May 2025, before the app added tools, Skills and MCP servers.',
    quickAnswerTop: {
      en: {
        question: 'Is Secret AI free, and does it work offline?',
        answer: 'The app is free to install, with a daily message limit and paid Plus and Pro plans. Per the developer, chats are generated on the device without an internet connection once a model has been downloaded from Hugging Face.',
        bullets: [
          'Runs GGUF (llama.cpp), MNN and MLX models; the developer lists Qwen3.5 VL, Gemma 4, LFM2.5 VL, MiniCPM 5, gpt-oss, Llama 4, Phi 4 and Mistral among the available models.',
          'Adds custom AI characters, Skills written as SKILL.md files, and MCP servers whose tool calls you approve.',
          'Available on [Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) and the [App Store](https://apps.apple.com/us/app/secret-ai/id6744668980), which lists iPhone, iPad, Mac and Apple Vision.',
          'Android version 1.12.2, last updated on 15 October 2026 (state of the listing on 19 October 2026).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Secret AI?',
        anchor: 'what-is-secret-ai',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Privacy and Data Handling',
        anchor: 'privacy',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Secret AI is an iPhone, Android and Mac app that runs open-source AI models on the device for private chat, with a free tier and paid plans.',
          },
          {
            type: 'plain-terms',
            text: 'You install the app, download an AI model once, and then chat, talk to custom characters or send photos; according to the developer, chats are generated on the device, while MCP tool calls and an optional self-hosted server or Ollama connection send data off it.',
          },
        ],
        items: [
          'Publisher: Secret AI L.L.C., registered in Wyoming, with its own website, a Discord community and a Hugging Face page.',
          'Track record: on Google Play since 12 May 2025 with 50K+ downloads and a 4.1 rating from 976 ratings; the App Store shows 4.5 from 83 ratings.',
          'Privacy declaration: Google Play\'s Data safety section states that no data is collected and none is shared with third parties.',
          'Requirements: Android 7.0 or later, iOS and iPadOS 17.0 or later, macOS 14.0 or later; the AI model is a separate download inside the app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Everything here is taken from the store listings, the website and the privacy policy; PromptQuorum has not tested the app, so offline operation, answer quality and speed are unconfirmed.',
          },
        ],
      },
      overview: {
        id: 'what-is-secret-ai',
        title: 'What Is Secret AI?',
        content: [
          '**Secret AI is a chat app that downloads open-source language models from Hugging Face and runs them on the phone or Mac with its own llama.cpp, MNN and MLX engines.** The [official website](https://secretai.io) describes three additions to plain chat: custom AI characters with their own avatar and wallpaper, Skills taught once as a portable SKILL.md file, and MCP servers whose tool calls open in the chat for approval.',
          'The store titles differ by country, for example "Secret AI: Local AI Chat" on Google Play in English, "Secret AI: Lokaler KI-Chatbot" in Germany and "私密でオフラインの本地AI助理" in Japan. All refer to the same app. The App Store lists 18 interface languages.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Install it from Google Play or the App Store; the AI model is a separate download inside the app.**',
        ],
        columns: [
          'Platform',
          'Where to get it',
        ],
        rows: [
          {
            Platform: 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)',
          },
          {
            Platform: 'iPhone / iPad / Mac',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)',
          },
          {
            Platform: 'Price',
            'Where to get it': 'Free with daily limit; Plus $4.99/mo, Pro $9.99/mo (US)',
          },
          {
            Platform: 'Website',
            'Where to get it': '[secretai.io](https://secretai.io)',
          },
          {
            Platform: 'Privacy policy',
            'Where to get it': '[Privacy policy](https://secretai.io/legal/privacy)',
          },
          {
            Platform: 'Source code',
            'Where to get it': 'Not published',
          },
        ],
        note: 'The Mac version is listed on the App Store (macOS 14.0 or later) and the website shows a macOS tab; PromptQuorum did not check whether it is a native Mac build or the iPad app running on a Mac. The iOS version number could not be read from the listing, so the version stated here is the Android one from Google Play, last updated on 15 October 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description, the App Store listing or the website; none has been independently tested.**',
        ],
        items: [
          '**Offline after a model download, per the developer.** Models come from Hugging Face; the website lists a catalog of GGUF, MNN and MLX files, and the Play description adds a way to connect to a self-hosted LLM server or Ollama. Importing your own model file is not described.',
          '**Three engines and three chips.** llama.cpp (GGUF) runs on the CPU in the free plan; the Pro plan adds GPU and NPU acceleration and the MNN and MLX engines.',
          '**Image input.** Photos are analysed on the device with vision models such as Qwen3.5 VL or Gemma 4; unlimited image understanding is part of the Pro plan.',
          '**Characters, Skills and MCP.** Characters carry a name, avatar and personality, and a character card can be imported; a Skill is a SKILL.md file you switch on per chat; tools stay off until enabled and each is approved the first time it runs. The free plan allows one MCP server, the paid plans more.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Handling',
        content: [
          '**Google Play\'s Data safety section declares "No data collected" and "No data shared with third parties".** The [privacy policy](https://secretai.io/legal/privacy), last updated on 13 May 2025, says the app collects no conversations, usage data, crash reports or photos, stores images only in encrypted form on the device, and uses the network only to download models.',
          '**Two features send data off the device by design.** The Play description says you can connect a self-hosted LLM server or Ollama on your network. On the website, an MCP tool-call demo asks "Send this conversation to deepwiki?" and notes that the tool "runs on deepwiki, not on this device" — a remote MCP server receives what you send it.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the developer\'s declarations, not audit results, and the source code is not published. The policy predates the tools, Skills and MCP features and does not describe them. PromptQuorum has not inspected the app\'s network traffic.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Source code and license.** No repository was found on the website or in the store listings, so the privacy and offline claims cannot be checked against code.',
          '**Hands-on behavior.** PromptQuorum did not run the app, so speed, battery use, answer quality and the hardware each model needs are unknown; the listings state no minimum RAM.',
          '**The Mac build.** It is unclear whether the Mac version is native or the iPad app running on Apple silicon.',
          '**Advertising.** The Plus plan lists "No Ads", but the listings do not say where ads appear in the free plan, and the Data safety section declares no data collection.',
          '**Independent feedback.** No third-party reviews or discussion were found beyond the store ratings and the testimonials on the website.',
          '**Voice input and output.** Neither the store listings nor the website describe it.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: [
          'App',
          'Platforms',
          'Price / license',
          'Key difference',
        ],
        rows: [
          {
            App: '[Enclave AI](/power-local-llm/enclave-ai-review)',
            Platforms: 'iPhone, iPad, Mac',
            'Price / license': 'Freemium / closed source',
            'Key difference': 'Apple-only offline assistant; the paid Pro plan adds cloud models',
          },
          {
            App: '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            Platforms: 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Free open-source local LLM client for iPhone and Android',
          },
          {
            App: '[Private Mind](/power-local-llm/private-mind-review)',
            Platforms: 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source offline chat with on-device document Q&A and built-in benchmarks',
          },
          {
            App: '[LLM Hub](/power-local-llm/llm-hub-review)',
            Platforms: 'Android, iOS',
            'Price / license': 'Freemium / source-available',
            'Key difference': 'Published source code under a non-commercial license, with a one-time Premium unlock',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What do the lifetime plans and the plans in other countries cost?',
            a: 'On 19 October 2026 the App Store listed Plus Lifetime at $59.99 and Pro Lifetime at $119.99 in the US, and these Plus / Pro monthly prices elsewhere: 5,99 € / 9,99 € (Germany, Spain and France), ¥800 / ¥1,500 (Japan), R$ 24,90 / R$ 49,90 (Brazil), ₩6,600 / ₩14,000 (South Korea), 19.99 / 39.99 SAR (Saudi Arabia) and ¥38 / ¥68 (China). Google Play shows only a price range per storefront, for example $4.99–$119.99 in the US, and its prices differ from the App Store; prices can change at any time.',
          },
          {
            q: 'How many messages does the free plan allow?',
            a: 'The privacy policy states a free limit of 10 messages per day, tracked on the device, and the website adds that sharing the app can unlock more.',
          },
          {
            q: 'Does it need an account?',
            a: 'No: the listing states that no registration or account is required. A Google or Apple account is needed only to buy a plan, which the store handles.',
          },
          {
            q: 'Is it suitable for children?',
            a: 'Google Play rates it Teen and the App Store 13+, and the App Store lists user-generated content among the categories; the privacy policy says it is not intended for children under 13.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Secret AI offers private offline chat on iPhone, Android and Mac with open-source models, characters, Skills and MCP tools, a free tier with a daily limit and paid plans for GPU/NPU engines and vision. Its claims cannot yet be checked: no source code is published, and the privacy policy does not describe the newer tool and MCP features, some of which send data to servers you choose. It suits people who want a feature-rich private chat app and will try the free tier first; anyone who needs published code should compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private Mind](/power-local-llm/private-mind-review), both MIT-licensed.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Secret AI on Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) — description, version, update date, Data safety section and price range, checked 19 October 2026.',
          '[Secret AI on the App Store](https://apps.apple.com/us/app/secret-ai/id6744668980) — compatibility, plan prices, languages and release notes, checked 19 October 2026.',
          '[secretai.io](https://secretai.io) — features, plans, model catalog and MCP demo, checked 19 October 2026.',
          '[Privacy policy](https://secretai.io/legal/privacy) — data-handling statements, last updated 13 May 2025.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Enclave AI Review](/power-local-llm/enclave-ai-review) — an offline AI assistant for iPhone, iPad and Mac.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free open-source local LLM client for iOS and Android.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — an open-source offline chat app with on-device document Q&A.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Secret AI Review: Private Offline AI Chat for iPhone, Android and Mac',
      description: 'Secret AI review: a private offline AI chat app for iPhone, Android and Mac with characters, Skills and MCP tools. What the store listings, website and privacy policy confirm, and what they do not.',
      url: 'https://www.promptquorum.com/power-local-llm/secret-ai-review',
      inLanguage: 'en',
      datePublished: '2026-10-19',
      dateModified: '2026-10-23',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'People evaluating a private offline AI chat app for iPhone, Android or Mac',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Secret AI',
        },
        {
          '@type': 'Thing',
          name: 'On-device AI',
        },
        {
          '@type': 'Thing',
          name: 'Model Context Protocol',
        },
        {
          '@type': 'Thing',
          name: 'Local LLM',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/secret-ai-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Secret AI Review',
          item: 'https://www.promptquorum.com/power-local-llm/secret-ai-review',
        },
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
    heroImage: '/images/secret-ai-review-hero-de.webp',
    title: 'Secret AI im Test: Privater Offline-KI-Chat für iPhone, Android und Mac',
    seoTitle: 'Secret AI im Test: Offline-KI für iPhone, Android und Mac',
    intro: 'Secret AI ist eine private KI-Chat-App von [Secret AI L.L.C.](https://secretai.io), einem in Wyoming eingetragenen Unternehmen. Sie führt quelloffene Sprachmodelle auf dem Smartphone oder Mac aus und ergänzt eigene Charaktere, Skills und MCP-Tools. Sie ist für [Android](https://play.google.com/store/apps/details?id=io.secretai.llm) sowie für [iPhone und iPad](https://apps.apple.com/us/app/secret-ai/id6744668980) erhältlich, und der App Store führt eine Mac-Version auf. Dieser Test beruht auf den beiden Store-Einträgen, der offiziellen Website und deren Datenschutzerklärung, geprüft am 19. Oktober 2026; PromptQuorum hat die App nicht selbst ausprobiert. Mehrere Produkte tragen den Namen Secret AI; dieser Test behandelt nur die App mit dem Android-Paket io.secretai.llm.',
    metaDescription: 'Secret AI im Test: private Offline-KI-Chat-App für iPhone, Android und Mac mit Charakteren, Skills und MCP-Tools. Gratis mit Limit, Quellcode nicht offen.',
    twitterDescription: 'Secret AI im Test: privater Offline-KI-Chat für iPhone, Android und Mac. Kostenloser Einstieg, Plus und Pro, Quellcode nicht veröffentlicht, ungetestet.',
    audience: 'Menschen, die eine private KI-Chat-App für Smartphone oder Mac suchen und wissen möchten, was die Quellen bestätigen, was nur der Entwickler behauptet und was die kostenpflichtigen Pläne freischalten.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Secret AI Test',
    targetKeywords: [
      'secret ai test',
      'secret ai app',
      'secret ai offline chat',
      'private offline ki chat iphone android',
      'lokale llm app iphone android mac',
      'ki chat mit mcp tools auf dem smartphone',
      'io.secretai.llm',
    ],
    current_models_mentioned: [
      'Qwen3.5 VL',
      'Gemma 4',
      'LFM2.5 VL',
      'MiniCPM 5',
      'DeepSeek R1 0528',
      'gpt-oss',
      'Llama 4',
      'Phi 4',
      'Mistral',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Android',
    ],
    leadAnswerBlock: '**Secret AI ist laut Entwickler eine App für Smartphone und Mac, die quelloffene KI-Modelle auf dem Gerät ausführt, sodass Chats, Charaktere und Fotos privat bleiben; MCP-Tool-Aufrufe und optionale entfernte Modellserver senden jedoch Daten vom Gerät.** Der Quellcode ist nicht veröffentlicht, und die Datenschutzerklärung wurde zuletzt im Mai 2025 aktualisiert, also bevor die App Tools, Skills und MCP-Server erhielt.',
    quickAnswerTop: {
      de: {
        question: 'Ist Secret AI kostenlos, und funktioniert es offline?',
        answer: 'Die App ist kostenlos installierbar, mit einem Tageslimit für Nachrichten und den kostenpflichtigen Plänen Plus und Pro. Laut Entwickler werden Chats auf dem Gerät ohne Internetverbindung erzeugt, sobald ein Modell von Hugging Face heruntergeladen wurde.',
        bullets: [
          'Führt GGUF-Modelle (llama.cpp), MNN- und MLX-Modelle aus; der Entwickler nennt unter den verfügbaren Modellen Qwen3.5 VL, Gemma 4, LFM2.5 VL, MiniCPM 5, gpt-oss, Llama 4, Phi 4 und Mistral.',
          'Ergänzt eigene KI-Charaktere, Skills als SKILL.md-Dateien und MCP-Server, deren Tool-Aufrufe Sie freigeben.',
          'Erhältlich bei [Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) und im [App Store](https://apps.apple.com/us/app/secret-ai/id6744668980), der iPhone, iPad, Mac und Apple Vision aufführt.',
          'Android-Version 1.12.2, zuletzt am 15. Oktober 2026 aktualisiert (Stand des Eintrags am 19. Oktober 2026).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist Secret AI?',
        anchor: 'what-is-secret-ai',
      },
      {
        label: 'Bezugsquellen',
        anchor: 'get-it',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenschutz und Datenverarbeitung',
        anchor: 'privacy',
      },
      {
        label: 'Was sich nicht überprüfen ließ',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Konkurrenten und Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Secret AI ist eine App für iPhone, Android und Mac, die quelloffene KI-Modelle auf dem Gerät für privaten Chat ausführt, mit kostenlosem Einstieg und kostenpflichtigen Plänen.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App, laden einmal ein KI-Modell herunter und chatten dann, sprechen mit eigenen Charakteren oder senden Fotos; laut Entwickler werden Chats auf dem Gerät erzeugt, während MCP-Tool-Aufrufe und eine optionale Anbindung an einen selbst betriebenen Server oder Ollama Daten vom Gerät senden.',
          },
        ],
        items: [
          'Herausgeber: Secret AI L.L.C., in Wyoming eingetragen, mit eigener Website, einer Discord-Community und einer Hugging-Face-Seite.',
          'Bisherige Bilanz: seit dem 12. Mai 2025 bei Google Play, mit mehr als 50.000 Downloads und einer Bewertung von 4,1 aus 976 Bewertungen; im App Store stehen 4,5 aus 83 Bewertungen.',
          'Datenschutzangabe: Der Abschnitt „Datensicherheit“ bei Google Play erklärt, dass keine Daten erhoben und keine an Dritte weitergegeben werden.',
          'Voraussetzungen: Android 7.0 oder neuer, iOS und iPadOS 17.0 oder neuer, macOS 14.0 oder neuer; das KI-Modell ist ein separater Download innerhalb der App.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Alles hier stammt aus den Store-Einträgen, der Website und der Datenschutzerklärung; PromptQuorum hat die App nicht getestet, daher sind Offline-Betrieb, Antwortqualität und Geschwindigkeit nicht bestätigt.',
          },
        ],
      },
      overview: {
        id: 'what-is-secret-ai',
        title: 'Was ist Secret AI?',
        content: [
          '**Secret AI ist eine Chat-App, die quelloffene Sprachmodelle von Hugging Face herunterlädt und mit eigenen llama.cpp-, MNN- und MLX-Engines auf dem Smartphone oder Mac ausführt.** Die [offizielle Website](https://secretai.io) nennt drei Ergänzungen zum einfachen Chat: eigene KI-Charaktere mit Avatar und Hintergrundbild, Skills, die einmal als portable SKILL.md-Datei angelegt werden, und MCP-Server, deren Tool-Aufrufe zur Freigabe im Chat erscheinen.',
          'Die Store-Titel unterscheiden sich je nach Land, zum Beispiel „Secret AI: Local AI Chat“ bei Google Play auf Englisch, „Secret AI: Lokaler KI-Chatbot“ in Deutschland und „私密でオフラインの本地AI助理“ in Japan. Alle meinen dieselbe App. Der App Store führt 18 Oberflächensprachen auf.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Installieren Sie die App über Google Play oder den App Store; das KI-Modell ist ein separater Download innerhalb der App.**',
        ],
        columns: [
          'Plattform',
          'Bezugsquelle',
        ],
        rows: [
          {
            Plattform: 'Android',
            Bezugsquelle: '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)',
          },
          {
            Plattform: 'iPhone / iPad / Mac',
            Bezugsquelle: '[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)',
          },
          {
            Plattform: 'Preis',
            Bezugsquelle: 'Gratis mit Limit; Plus 5,99 €/Monat, Pro 9,99 €/Monat (App Store DE)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[secretai.io](https://secretai.io)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung](https://secretai.io/legal/privacy)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Nicht veröffentlicht',
          },
        ],
        note: 'Die Mac-Version ist im App Store aufgeführt (macOS 14.0 oder neuer), und die Website zeigt einen macOS-Reiter; PromptQuorum hat nicht geprüft, ob es sich um eine native Mac-App oder die auf einem Mac laufende iPad-App handelt. Die iOS-Versionsnummer ließ sich dem Eintrag nicht entnehmen; die hier genannte Version ist daher die Android-Version von Google Play, zuletzt am 15. Oktober 2026 aktualisiert.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Google-Play-Beschreibung, dem App-Store-Eintrag oder der Website; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Laut Entwickler offline nach dem Modell-Download.** Die Modelle stammen von Hugging Face; die Website nennt einen Katalog aus GGUF-, MNN- und MLX-Dateien, und die Play-Beschreibung ergänzt die Anbindung an einen selbst betriebenen LLM-Server oder Ollama. Das Importieren einer eigenen Modelldatei wird nicht beschrieben.',
          '**Drei Engines und drei Chips.** llama.cpp (GGUF) läuft im kostenlosen Plan auf der CPU; der Pro-Plan ergänzt GPU- und NPU-Beschleunigung sowie die Engines MNN und MLX.',
          '**Bildeingabe.** Fotos werden auf dem Gerät mit Vision-Modellen wie Qwen3.5 VL oder Gemma 4 analysiert; unbegrenzte Bildanalyse gehört zum Pro-Plan.',
          '**Charaktere, Skills und MCP.** Charaktere haben Namen, Avatar und Persönlichkeit, und eine Charakterkarte lässt sich importieren; ein Skill ist eine SKILL.md-Datei, die Sie pro Chat aktivieren; Tools bleiben aus, bis sie eingeschaltet werden, und jedes wird beim ersten Ausführen freigegeben. Der kostenlose Plan erlaubt einen MCP-Server, die kostenpflichtigen Pläne mehr.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenverarbeitung',
        content: [
          '**Der Abschnitt „Datensicherheit“ bei Google Play erklärt „Keine Daten erhoben“ und „Keine Daten an Dritte weitergegeben“.** Die [Datenschutzerklärung](https://secretai.io/legal/privacy), zuletzt am 13. Mai 2025 aktualisiert, besagt, dass die App keine Unterhaltungen, Nutzungsdaten, Absturzberichte oder Fotos erhebt, Bilder nur verschlüsselt auf dem Gerät speichert und das Netzwerk nur zum Herunterladen von Modellen nutzt.',
          '**Zwei Funktionen senden Daten bauartbedingt vom Gerät weg.** Laut Play-Beschreibung lässt sich ein selbst betriebener LLM-Server oder Ollama im eigenen Netzwerk anbinden. Auf der Website fragt eine Demo für MCP-Tool-Aufrufe „Send this conversation to deepwiki?“ und vermerkt, dass das Tool „runs on deepwiki, not on this device“ — ein entfernter MCP-Server erhält, was Sie ihm senden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Entwicklers, keine Prüfergebnisse, und der Quellcode ist nicht veröffentlicht. Die Datenschutzerklärung stammt aus der Zeit vor den Tools, Skills und MCP-Funktionen und beschreibt sie nicht. PromptQuorum hat den Netzwerkverkehr der App nicht untersucht.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was sich nicht überprüfen ließ',
        items: [
          '**Quellcode und Lizenz.** Weder auf der Website noch in den Store-Einträgen wurde ein Repository gefunden, sodass sich die Aussagen zu Datenschutz und Offline-Betrieb nicht am Code prüfen lassen.',
          '**Verhalten in der Praxis.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Akkuverbrauch, Antwortqualität und die je Modell nötige Hardware sind daher unbekannt, und die Einträge nennen keinen Mindest-Arbeitsspeicher.',
          '**Die Mac-Version.** Es ist unklar, ob die Mac-Version nativ ist oder die iPad-App auf Apple-Silicon-Chips läuft.',
          '**Werbung.** Der Plus-Plan führt „No Ads“ auf, doch die Einträge sagen nicht, wo im kostenlosen Plan Werbung erscheint, und der Abschnitt „Datensicherheit“ erklärt, dass keine Daten erhoben werden.',
          '**Unabhängige Rückmeldungen.** Außer den Store-Bewertungen und den Erfahrungsberichten auf der Website wurden keine Tests oder Diskussionen Dritter gefunden.',
          '**Spracheingabe und -ausgabe.** Weder die Store-Einträge noch die Website beschreiben sie.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Konkurrenten und Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Wesentlicher Unterschied',
        ],
        rows: [
          {
            App: '[Enclave AI](/de/power-local-llm/enclave-ai-review)',
            Plattformen: 'iPhone, iPad, Mac',
            'Preis / Lizenz': 'Freemium / Closed Source',
            'Wesentlicher Unterschied': 'Offline-Assistent nur für Apple-Geräte; der kostenpflichtige Pro-Plan ergänzt Cloud-Modelle',
          },
          {
            App: '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            Plattformen: 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Kostenloser, quelloffener lokaler LLM-Client für iPhone und Android',
          },
          {
            App: '[Private Mind](/de/power-local-llm/private-mind-review)',
            Plattformen: 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Offline-Chat mit Dokumentenfragen auf dem Gerät und integrierten Benchmarks',
          },
          {
            App: '[LLM Hub](/de/power-local-llm/llm-hub-review)',
            Plattformen: 'Android, iOS',
            'Preis / Lizenz': 'Freemium / Source-available',
            'Wesentlicher Unterschied': 'Veröffentlichter Quellcode unter nicht-kommerzieller Lizenz, mit einmaliger Premium-Freischaltung',
          },
        ],
        note: 'Angaben zu Konkurrenten ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag der App.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was kosten die Lifetime-Pläne und die Pläne in anderen Ländern?',
            a: 'Am 19. Oktober 2026 nannte der App Store in den USA Plus Lifetime für 59,99 $ und Pro Lifetime für 119,99 $ sowie diese monatlichen Preise für Plus / Pro in anderen Ländern: 5,99 € / 9,99 € (Deutschland, Spanien und Frankreich), 800 ¥ / 1.500 ¥ (Japan), R$ 24,90 / R$ 49,90 (Brasilien), 6.600 ₩ / 14.000 ₩ (Südkorea), 19,99 / 39,99 SAR (Saudi-Arabien) und 38 ¥ / 68 ¥ (China). Google Play zeigt nur eine Preisspanne pro Store, zum Beispiel 4,99–119,99 $ in den USA, und seine Preise weichen vom App Store ab; Preise können sich jederzeit ändern.',
          },
          {
            q: 'Wie viele Nachrichten erlaubt der kostenlose Plan?',
            a: 'Die Datenschutzerklärung nennt ein kostenloses Limit von 10 Nachrichten pro Tag, das auf dem Gerät gezählt wird, und die Website ergänzt, dass das Teilen der App weitere freischalten kann.',
          },
          {
            q: 'Braucht die App ein Konto?',
            a: 'Nein: Der Eintrag erklärt, dass keine Registrierung und kein Konto nötig sind. Ein Google- oder Apple-Konto wird nur für den Kauf eines Plans gebraucht, den der Store abwickelt.',
          },
          {
            q: 'Ist die App für Kinder geeignet?',
            a: 'Google Play stuft sie als „Teen“ und der App Store ab 13 Jahren ein, und der App Store führt nutzergenerierte Inhalte unter den Kategorien auf; die Datenschutzerklärung erklärt, dass sie nicht für Kinder unter 13 Jahren gedacht ist.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Secret AI bietet privaten Offline-Chat auf iPhone, Android und Mac mit quelloffenen Modellen, Charakteren, Skills und MCP-Tools, einen kostenlosen Einstieg mit Tageslimit und kostenpflichtige Pläne für GPU-/NPU-Engines und Bildanalyse. Die Angaben lassen sich noch nicht prüfen: Der Quellcode ist nicht veröffentlicht, und die Datenschutzerklärung beschreibt die neueren Tool- und MCP-Funktionen nicht, von denen einige Daten an Server senden, die Sie selbst wählen. Die App passt zu Nutzern, die eine funktionsreiche private Chat-App wollen und zuerst den kostenlosen Plan ausprobieren; wer veröffentlichten Code braucht, vergleicht [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private Mind](/de/power-local-llm/private-mind-review), beide unter MIT-Lizenz.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Secret AI bei Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) — Beschreibung, Version, Aktualisierungsdatum, Abschnitt „Datensicherheit“ und Preisspanne, geprüft am 19. Oktober 2026.',
          '[Secret AI im App Store](https://apps.apple.com/us/app/secret-ai/id6744668980) — Kompatibilität, Planpreise, Sprachen und Versionshinweise, geprüft am 19. Oktober 2026.',
          '[secretai.io](https://secretai.io) — Funktionen, Pläne, Modellkatalog und MCP-Demo, geprüft am 19. Oktober 2026.',
          '[Datenschutzerklärung](https://secretai.io/legal/privacy) — Aussagen zum Umgang mit Daten, zuletzt am 13. Mai 2025 aktualisiert.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Enclave AI im Test](/de/power-local-llm/enclave-ai-review) — ein Offline-KI-Assistent für iPhone, iPad und Mac.',
          '[PocketPal AI im Test](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener lokaler LLM-Client für iOS und Android.',
          '[Private Mind im Test](/de/power-local-llm/private-mind-review) — eine quelloffene Offline-Chat-App mit Dokumentenfragen auf dem Gerät.',
          '[Die besten lokalen LLM-Apps für Android](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
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
    heroImage: '/images/secret-ai-review-hero-es.webp',
    title: 'Reseña de Secret AI: chat de IA privado y sin conexión para iPhone, Android y Mac',
    seoTitle: 'Secret AI: chat de IA offline para iPhone, Android y Mac',
    intro: 'Secret AI es una app de chat de IA privado de [Secret AI L.L.C.](https://secretai.io), una empresa registrada en Wyoming, que ejecuta modelos de lenguaje de código abierto en el teléfono o en el Mac y añade personajes personalizados, Skills y herramientas MCP. Está disponible para [Android](https://play.google.com/store/apps/details?id=io.secretai.llm) y para [iPhone e iPad](https://apps.apple.com/us/app/secret-ai/id6744668980), y la App Store indica una versión para Mac. Esta reseña se basa en las dos fichas de las tiendas, el sitio web oficial y su política de privacidad, consultados el 19 de octubre de 2026; PromptQuorum no ha probado la app personalmente. Otros productos comparten el nombre Secret AI; esta reseña trata solo la app con el paquete de Android io.secretai.llm.',
    metaDescription: 'Reseña de Secret AI: app de chat de IA privado y sin conexión para iPhone, Android y Mac con personajes, Skills y MCP. Plan gratuito; código no publicado.',
    twitterDescription: 'Reseña de Secret AI: chat de IA privado y sin conexión para iPhone, Android y Mac. Plan gratuito, planes Plus y Pro, código cerrado, sin probar aún.',
    audience: 'Personas que quieren una app de chat de IA privado en el teléfono o el Mac y necesitan saber qué confirman las fuentes, qué afirma solo el desarrollador y qué desbloquean los planes de pago.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Secret AI',
    targetKeywords: [
      'reseña secret ai',
      'secret ai app',
      'secret ai chat sin conexión',
      'chat de ia privado sin conexión iphone android',
      'app de llm local iphone android mac',
      'chat de ia con herramientas mcp en el móvil',
      'io.secretai.llm',
    ],
    current_models_mentioned: [
      'Qwen3.5 VL',
      'Gemma 4',
      'LFM2.5 VL',
      'MiniCPM 5',
      'DeepSeek R1 0528',
      'gpt-oss',
      'Llama 4',
      'Phi 4',
      'Mistral',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Android',
    ],
    leadAnswerBlock: '**Secret AI es una app para móvil y Mac que, según su desarrollador, ejecuta modelos de IA de código abierto en el dispositivo para que los chats, los personajes y las fotos se mantengan privados; las llamadas a herramientas MCP y los servidores de modelos remotos opcionales sí envían datos fuera del dispositivo.** El código fuente no está publicado, y la política de privacidad se actualizó por última vez en mayo de 2025, antes de que la app añadiera herramientas, Skills y servidores MCP.',
    quickAnswerTop: {
      es: {
        question: '¿Secret AI es gratis y funciona sin conexión?',
        answer: 'La app es gratuita de instalar, con un límite diario de mensajes y planes de pago Plus y Pro. Según el desarrollador, los chats se generan en el dispositivo sin conexión a internet una vez descargado un modelo desde Hugging Face.',
        bullets: [
          'Ejecuta modelos GGUF (llama.cpp), MNN y MLX; el desarrollador cita Qwen3.5 VL, Gemma 4, LFM2.5 VL, MiniCPM 5, gpt-oss, Llama 4, Phi 4 y Mistral entre los modelos disponibles.',
          'Añade personajes de IA personalizados, Skills escritas como archivos SKILL.md y servidores MCP cuyas llamadas a herramientas apruebas tú.',
          'Disponible en [Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) y en la [App Store](https://apps.apple.com/us/app/secret-ai/id6744668980), que indica iPhone, iPad, Mac y Apple Vision.',
          'Versión 1.12.2 para Android, actualizada por última vez el 15 de octubre de 2026 (estado de la ficha el 19 de octubre de 2026).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es Secret AI?',
        anchor: 'what-is-secret-ai',
      },
      {
        label: 'Dónde conseguirla',
        anchor: 'get-it',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Privacidad y tratamiento de datos',
        anchor: 'privacy',
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Secret AI es una app para iPhone, Android y Mac que ejecuta modelos de IA de código abierto en el dispositivo para chatear en privado, con un plan gratuito y planes de pago.',
          },
          {
            type: 'plain-terms',
            text: 'Instalas la app, descargas una vez un modelo de IA y luego chateas, hablas con personajes personalizados o envías fotos; según el desarrollador, los chats se generan en el dispositivo, mientras que las llamadas a herramientas MCP y una conexión opcional a un servidor propio u Ollama envían datos fuera de él.',
          },
        ],
        items: [
          'Editor: Secret AI L.L.C., registrada en Wyoming, con su propio sitio web, una comunidad en Discord y una página en Hugging Face.',
          'Trayectoria: en Google Play desde el 12 de mayo de 2025, con más de 50K descargas y una valoración de 4.1 sobre 976 valoraciones; la App Store muestra 4.5 sobre 83 valoraciones.',
          'Declaración de privacidad: la sección Seguridad de los datos de Google Play indica que no se recopilan datos ni se comparten con terceros.',
          'Requisitos: Android 7.0 o superior, iOS e iPadOS 17.0 o superior, macOS 14.0 o superior; el modelo de IA se descarga aparte dentro de la app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Todo lo que aparece aquí procede de las fichas de las tiendas, el sitio web y la política de privacidad; PromptQuorum no ha probado la app, así que el funcionamiento sin conexión, la calidad de las respuestas y la velocidad no están confirmados.',
          },
        ],
      },
      overview: {
        id: 'what-is-secret-ai',
        title: '¿Qué es Secret AI?',
        content: [
          '**Secret AI es una app de chat que descarga modelos de lenguaje de código abierto desde Hugging Face y los ejecuta en el teléfono o en el Mac con sus propios motores llama.cpp, MNN y MLX.** El [sitio web oficial](https://secretai.io) describe tres añadidos al chat básico: personajes de IA personalizados con su propio avatar y fondo de pantalla, Skills que se enseñan una sola vez como un archivo SKILL.md portátil y servidores MCP cuyas llamadas a herramientas se abren en el chat para que las apruebes.',
          'Los títulos en las tiendas varían según el país, por ejemplo «Secret AI: Local AI Chat» en Google Play en inglés, «Secret AI: Lokaler KI-Chatbot» en Alemania y «私密でオフラインの本地AI助理» en Japón. Todos se refieren a la misma app. La App Store indica 18 idiomas de interfaz.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Instálala desde Google Play o la App Store; el modelo de IA es una descarga aparte dentro de la app.**',
        ],
        columns: [
          'Plataforma',
          'Dónde conseguirla',
        ],
        rows: [
          {
            Plataforma: 'Android',
            'Dónde conseguirla': '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)',
          },
          {
            Plataforma: 'iPhone / iPad / Mac',
            'Dónde conseguirla': '[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)',
          },
          {
            Plataforma: 'Precio (App Store ES)',
            'Dónde conseguirla': 'Gratis con límite diario; Plus 5,99 €/mes, Pro 9,99 €/mes',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[secretai.io](https://secretai.io)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad](https://secretai.io/legal/privacy)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'No publicado',
          },
        ],
        note: 'La versión para Mac figura en la App Store (macOS 14.0 o superior) y el sitio web muestra una pestaña de macOS; PromptQuorum no comprobó si es una compilación nativa para Mac o la app de iPad ejecutándose en un Mac. No se pudo leer el número de versión de iOS en la ficha, así que la versión indicada aquí es la de Android de Google Play, actualizada por última vez el 15 de octubre de 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento procede de la descripción de Google Play, la ficha de la App Store o el sitio web; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Según el desarrollador, funciona sin conexión tras descargar un modelo.** Los modelos vienen de Hugging Face; el sitio web enumera un catálogo de archivos GGUF, MNN y MLX, y la descripción de Play añade una forma de conectarse a un servidor LLM autoalojado o a Ollama. No se describe la importación de tu propio archivo de modelo.',
          '**Tres motores y tres chips.** llama.cpp (GGUF) se ejecuta en la CPU en el plan gratuito; el plan Pro añade aceleración por GPU y NPU y los motores MNN y MLX.',
          '**Entrada de imágenes.** Las fotos se analizan en el dispositivo con modelos de visión como Qwen3.5 VL o Gemma 4; la comprensión ilimitada de imágenes forma parte del plan Pro.',
          '**Personajes, Skills y MCP.** Los personajes tienen nombre, avatar y personalidad, y se puede importar una tarjeta de personaje; una Skill es un archivo SKILL.md que activas en cada chat; las herramientas permanecen desactivadas hasta que las habilitas y cada una se aprueba la primera vez que se ejecuta. El plan gratuito permite un servidor MCP, los planes de pago más.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y tratamiento de datos',
        content: [
          '**La sección Seguridad de los datos de Google Play declara «No se recopilan datos» y «No se comparten datos con terceros».** La [política de privacidad](https://secretai.io/legal/privacy), actualizada por última vez el 13 de mayo de 2025, indica que la app no recopila conversaciones, datos de uso, informes de fallos ni fotos, que guarda las imágenes solo cifradas en el dispositivo y que usa la red únicamente para descargar modelos.',
          '**Dos funciones envían datos fuera del dispositivo por diseño.** La descripción de Play indica que puedes conectar un servidor LLM autoalojado o Ollama en tu red. En el sitio web, una demo de llamada a herramientas MCP pregunta «Send this conversation to deepwiki?» y señala que la herramienta «runs on deepwiki, not on this device»: un servidor MCP remoto recibe lo que le envías.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría, y el código fuente no está publicado. La política es anterior a las herramientas, las Skills y las funciones MCP y no las describe. PromptQuorum no ha inspeccionado el tráfico de red de la app.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Código fuente y licencia.** No se encontró ningún repositorio en el sitio web ni en las fichas de las tiendas, así que las afirmaciones de privacidad y de funcionamiento sin conexión no se pueden contrastar con el código.',
          '**Comportamiento en la práctica.** PromptQuorum no ejecutó la app, así que se desconocen la velocidad, el consumo de batería, la calidad de las respuestas y el hardware que necesita cada modelo; las fichas no indican una RAM mínima.',
          '**La versión para Mac.** No está claro si es nativa o la app de iPad ejecutándose en Apple silicon.',
          '**Publicidad.** El plan Plus indica «No Ads», pero las fichas no dicen dónde aparecen anuncios en el plan gratuito, y la sección Seguridad de los datos declara que no se recopilan datos.',
          '**Opiniones independientes.** No se encontraron reseñas ni debates de terceros más allá de las valoraciones de las tiendas y los testimonios del sitio web.',
          '**Entrada y salida de voz.** Ni las fichas de las tiendas ni el sitio web la describen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: [
          'Aplicación',
          'Plataformas',
          'Precio / licencia',
          'Diferencia clave',
        ],
        rows: [
          {
            'Aplicación': '[Enclave AI](/es/power-local-llm/enclave-ai-review)',
            Plataformas: 'iPhone, iPad, Mac',
            'Precio / licencia': 'Freemium / código cerrado',
            'Diferencia clave': 'Asistente sin conexión solo para Apple; el plan Pro de pago añade modelos en la nube',
          },
          {
            'Aplicación': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente gratuito y de código abierto de LLM locales para iPhone y Android',
          },
          {
            'Aplicación': '[Private Mind](/es/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat sin conexión de código abierto con preguntas sobre documentos en el dispositivo y pruebas de rendimiento integradas',
          },
          {
            'Aplicación': '[LLM Hub](/es/power-local-llm/llm-hub-review)',
            Plataformas: 'Android, iOS',
            'Precio / licencia': 'Freemium / código disponible',
            'Diferencia clave': 'Código fuente publicado bajo una licencia no comercial, con un desbloqueo Premium único',
          },
        ],
        note: 'Los datos de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada aplicación.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto cuestan los planes vitalicios y los planes en otros países?',
            a: 'El 19 de octubre de 2026, la App Store mostraba Plus Lifetime a $59.99 y Pro Lifetime a $119.99 en EE. UU., y estos precios mensuales de Plus / Pro en otros países: 5,99 € / 9,99 € (Alemania, España y Francia), ¥800 / ¥1,500 (Japón), R$ 24,90 / R$ 49,90 (Brasil), ₩6,600 / ₩14,000 (Corea del Sur), 19.99 / 39.99 SAR (Arabia Saudí) y ¥38 / ¥68 (China). Google Play muestra solo un intervalo de precios por tienda, por ejemplo $4.99–$119.99 en EE. UU., y sus precios difieren de los de la App Store; los precios pueden cambiar en cualquier momento.',
          },
          {
            q: '¿Cuántos mensajes permite el plan gratuito?',
            a: 'La política de privacidad indica un límite gratuito de 10 mensajes al día, contabilizado en el dispositivo, y el sitio web añade que compartir la app puede desbloquear más.',
          },
          {
            q: '¿Necesita una cuenta?',
            a: 'No: la ficha indica que no se requiere registro ni cuenta. Solo hace falta una cuenta de Google o de Apple para comprar un plan, algo que gestiona la tienda.',
          },
          {
            q: '¿Es adecuada para niños?',
            a: 'Google Play la clasifica como Teen y la App Store como 13+, y la App Store incluye el contenido generado por los usuarios entre sus categorías; la política de privacidad indica que no está pensada para menores de 13 años.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Secret AI ofrece chat privado y sin conexión en iPhone, Android y Mac con modelos de código abierto, personajes, Skills y herramientas MCP, un plan gratuito con límite diario y planes de pago para los motores de GPU/NPU y la visión. Sus afirmaciones aún no se pueden comprobar: el código fuente no está publicado y la política de privacidad no describe las funciones más recientes de herramientas y MCP, algunas de las cuales envían datos a servidores que tú eliges. Encaja con quien quiera una app de chat privado con muchas funciones y pruebe primero el plan gratuito; quien necesite código publicado debería comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private Mind](/es/power-local-llm/private-mind-review), ambas con licencia MIT.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Secret AI en Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) — descripción, versión, fecha de actualización, sección Seguridad de los datos e intervalo de precios, consultados el 19 de octubre de 2026.',
          '[Secret AI en la App Store](https://apps.apple.com/us/app/secret-ai/id6744668980) — compatibilidad, precios de los planes, idiomas y notas de la versión, consultados el 19 de octubre de 2026.',
          '[secretai.io](https://secretai.io) — funciones, planes, catálogo de modelos y demo de MCP, consultados el 19 de octubre de 2026.',
          '[Política de privacidad](https://secretai.io/legal/privacy) — declaraciones sobre el tratamiento de datos, actualizada por última vez el 13 de mayo de 2025.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Enclave AI](/es/power-local-llm/enclave-ai-review) — un asistente de IA sin conexión para iPhone, iPad y Mac.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente gratuito y de código abierto de LLM locales para iOS y Android.',
          '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión de código abierto con preguntas sobre documentos en el dispositivo.',
          '[Las mejores apps de LLM locales para Android](/es/power-local-llm/best-local-llm-apps-android-2026) — el panorama más amplio de Android.',
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
    heroImage: '/images/secret-ai-review-hero-fr.webp',
    title: 'Test de Secret AI : chat IA privé hors ligne sur iPhone, Android et Mac',
    seoTitle: 'Test de Secret AI : chat IA hors ligne sur mobile et Mac',
    intro: 'Secret AI est une application de chat IA privé de [Secret AI L.L.C.](https://secretai.io), société enregistrée dans le Wyoming, qui exécute des modèles de langage open source sur le téléphone ou le Mac et ajoute des personnages personnalisés, des Skills et des outils MCP. Elle est disponible sur [Android](https://play.google.com/store/apps/details?id=io.secretai.llm) et sur [iPhone et iPad](https://apps.apple.com/us/app/secret-ai/id6744668980), et l\'App Store indique aussi une version Mac. Ce test s\'appuie sur les deux fiches des boutiques, le site officiel et sa politique de confidentialité, consultés le 19 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en conditions réelles. D\'autres produits portent le nom Secret AI ; ce test ne couvre que l\'application dont le paquet Android est io.secretai.llm.',
    metaDescription: 'Test de Secret AI : chat IA privé hors ligne sur iPhone, Android et Mac, avec personnages, Skills et outils MCP. Offre gratuite, code non publié.',
    twitterDescription: 'Test de Secret AI : chat IA privé hors ligne sur iPhone, Android et Mac. Offre gratuite, formules Plus et Pro, code fermé, affirmations non testées.',
    audience: 'Utilisateurs qui veulent une application de chat IA privé sur leur téléphone ou leur Mac et veulent savoir ce que les sources confirment, ce que le développeur affirme seulement et ce que débloquent les formules payantes.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Secret AI',
    targetKeywords: [
      'test secret ai',
      'application secret ai',
      'secret ai chat hors ligne',
      'chat ia privé hors ligne iphone android',
      'application llm local iphone android mac',
      'chat ia avec outils mcp sur téléphone',
      'io.secretai.llm',
    ],
    current_models_mentioned: [
      'Qwen3.5 VL',
      'Gemma 4',
      'LFM2.5 VL',
      'MiniCPM 5',
      'DeepSeek R1 0528',
      'gpt-oss',
      'Llama 4',
      'Phi 4',
      'Mistral',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Android',
    ],
    leadAnswerBlock: '**Secret AI est, selon son développeur, une application pour téléphone et Mac qui exécute des modèles d\'IA open source sur l\'appareil, de sorte que les conversations, les personnages et les photos restent privés ; les appels d\'outils MCP et les serveurs de modèles distants facultatifs envoient en revanche des données hors de l\'appareil.** Le code source n\'est pas publié, et la politique de confidentialité a été mise à jour pour la dernière fois en mai 2025, avant l\'arrivée des outils, des Skills et des serveurs MCP.',
    quickAnswerTop: {
      fr: {
        question: 'Secret AI est-elle gratuite, et fonctionne-t-elle hors ligne ?',
        answer: 'L\'application est gratuite à installer, avec une limite quotidienne de messages et des formules payantes Plus et Pro. Selon le développeur, les réponses sont générées sur l\'appareil sans connexion internet une fois un modèle téléchargé depuis Hugging Face.',
        bullets: [
          'Exécute des modèles GGUF (llama.cpp), MNN et MLX ; le développeur cite Qwen3.5 VL, Gemma 4, LFM2.5 VL, MiniCPM 5, gpt-oss, Llama 4, Phi 4 et Mistral parmi les modèles disponibles.',
          'Ajoute des personnages IA personnalisés, des Skills écrits sous forme de fichiers SKILL.md et des serveurs MCP dont vous approuvez les appels d\'outils.',
          'Disponible sur [Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) et sur l\'[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980), qui indique iPhone, iPad, Mac et Apple Vision.',
          'Version Android 1.12.2, mise à jour pour la dernière fois le 15 octobre 2026 (état de la fiche au 19 octobre 2026).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu\'est-ce que Secret AI ?',
        anchor: 'what-is-secret-ai',
      },
      {
        label: 'Où l\'obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Confidentialité et traitement des données',
        anchor: 'privacy',
      },
      {
        label: 'Ce que nous n\'avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Pour aller plus loin',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Secret AI est une application pour iPhone, Android et Mac qui exécute des modèles d\'IA open source sur l\'appareil pour le chat privé, avec une offre gratuite et des formules payantes.',
          },
          {
            type: 'plain-terms',
            text: 'Vous installez l\'application, téléchargez une fois un modèle d\'IA, puis vous discutez, parlez à des personnages personnalisés ou envoyez des photos ; selon le développeur, les conversations sont générées sur l\'appareil, tandis que les appels d\'outils MCP et une connexion facultative à un serveur auto-hébergé ou à Ollama envoient des données hors de celui-ci.',
          },
        ],
        items: [
          'Éditeur : Secret AI L.L.C., enregistrée dans le Wyoming, avec son propre site web, une communauté Discord et une page Hugging Face.',
          'Historique : sur Google Play depuis le 12 mai 2025, avec plus de 50 000 téléchargements et une note de 4.1 sur 976 évaluations ; l\'App Store affiche 4.5 sur 83 évaluations.',
          'Déclaration de confidentialité : la section Sécurité des données de Google Play indique qu\'aucune donnée n\'est collectée ni partagée avec des tiers.',
          'Prérequis : Android 7.0 ou version ultérieure, iOS et iPadOS 17.0 ou version ultérieure, macOS 14.0 ou version ultérieure ; le modèle d\'IA se télécharge séparément dans l\'application.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Tout ce qui figure ici provient des fiches des boutiques, du site web et de la politique de confidentialité ; PromptQuorum n\'a pas testé l\'application, donc le fonctionnement hors ligne, la qualité des réponses et la vitesse ne sont pas confirmés.',
          },
        ],
      },
      overview: {
        id: 'what-is-secret-ai',
        title: 'Qu\'est-ce que Secret AI ?',
        content: [
          '**Secret AI est une application de chat qui télécharge des modèles de langage open source depuis Hugging Face et les exécute sur le téléphone ou le Mac avec ses propres moteurs llama.cpp, MNN et MLX.** Le [site officiel](https://secretai.io) décrit trois ajouts au simple chat : des personnages IA personnalisés avec leur propre avatar et fond d\'écran, des Skills enseignés une fois sous forme de fichier SKILL.md portable, et des serveurs MCP dont les appels d\'outils s\'ouvrent dans le chat pour approbation.',
          'Les titres des boutiques diffèrent selon les pays, par exemple « Secret AI: Local AI Chat » sur Google Play en anglais, « Secret AI: Lokaler KI-Chatbot » en Allemagne et « 私密でオフラインの本地AI助理 » au Japon. Tous désignent la même application. L\'App Store indique 18 langues d\'interface.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Installez-la depuis Google Play ou l\'App Store ; le modèle d\'IA se télécharge séparément dans l\'application.**',
        ],
        columns: [
          'Plateforme',
          'Où l\'obtenir',
        ],
        rows: [
          {
            Plateforme: 'Android',
            'Où l\'obtenir': '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)',
          },
          {
            Plateforme: 'iPhone / iPad / Mac',
            'Où l\'obtenir': '[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)',
          },
          {
            Plateforme: 'Prix',
            'Où l\'obtenir': 'Gratuit limité ; Plus 5,99 €, Pro 9,99 €/mois (App Store FR)',
          },
          {
            Plateforme: 'Site web',
            'Où l\'obtenir': '[secretai.io](https://secretai.io)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où l\'obtenir': '[Politique de confidentialité](https://secretai.io/legal/privacy)',
          },
          {
            Plateforme: 'Code source',
            'Où l\'obtenir': 'Non publié',
          },
        ],
        note: 'La version Mac est indiquée sur l\'App Store (macOS 14.0 ou version ultérieure) et le site affiche un onglet macOS ; PromptQuorum n\'a pas vérifié s\'il s\'agit d\'une version native pour Mac ou de l\'application iPad exécutée sur un Mac. Le numéro de version iOS n\'a pas pu être lu sur la fiche : la version indiquée ici est donc celle d\'Android sur Google Play, mise à jour pour la dernière fois le 15 octobre 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Google Play, de la fiche App Store ou du site web ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Selon le développeur, fonctionne hors ligne après le téléchargement d\'un modèle.** Les modèles viennent de Hugging Face ; le site présente un catalogue de fichiers GGUF, MNN et MLX, et la description Play ajoute la possibilité de se connecter à un serveur LLM auto-hébergé ou à Ollama. L\'import de votre propre fichier de modèle n\'est pas décrit.',
          '**Trois moteurs et trois puces.** llama.cpp (GGUF) s\'exécute sur le CPU dans la formule gratuite ; la formule Pro ajoute l\'accélération GPU et NPU ainsi que les moteurs MNN et MLX.',
          '**Entrée d\'images.** Les photos sont analysées sur l\'appareil avec des modèles de vision comme Qwen3.5 VL ou Gemma 4 ; la compréhension d\'images illimitée fait partie de la formule Pro.',
          '**Personnages, Skills et MCP.** Les personnages ont un nom, un avatar et une personnalité, et une fiche de personnage peut être importée ; un Skill est un fichier SKILL.md que vous activez par conversation ; les outils restent désactivés tant qu\'ils ne sont pas activés, et chacun est approuvé à sa première exécution. La formule gratuite autorise un serveur MCP, les formules payantes davantage.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et traitement des données',
        content: [
          '**La section Sécurité des données de Google Play déclare « Aucune donnée collectée » et « Aucune donnée partagée avec des tiers ».** La [politique de confidentialité](https://secretai.io/legal/privacy), mise à jour pour la dernière fois le 13 mai 2025, indique que l\'application ne collecte ni conversations, ni données d\'utilisation, ni rapports de plantage, ni photos, ne stocke les images que sous forme chiffrée sur l\'appareil et n\'utilise le réseau que pour télécharger des modèles.',
          '**Deux fonctions envoient des données hors de l\'appareil par conception.** La description Play indique que vous pouvez connecter un serveur LLM auto-hébergé ou Ollama sur votre réseau. Sur le site web, une démonstration d\'appel d\'outil MCP demande « Send this conversation to deepwiki? » et précise que l\'outil « runs on deepwiki, not on this device » : un serveur MCP distant reçoit ce que vous lui envoyez.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du développeur, pas des résultats d\'audit, et le code source n\'est pas publié. La politique est antérieure aux fonctions d\'outils, de Skills et de MCP et ne les décrit pas. PromptQuorum n\'a pas inspecté le trafic réseau de l\'application.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Code source et licence.** Aucun dépôt n\'a été trouvé sur le site web ni dans les fiches des boutiques ; les affirmations sur la confidentialité et le fonctionnement hors ligne ne peuvent donc pas être vérifiées dans le code.',
          '**Comportement en pratique.** PromptQuorum n\'a pas exécuté l\'application ; la vitesse, la consommation de batterie, la qualité des réponses et le matériel requis par chaque modèle sont donc inconnus, et les fiches n\'indiquent aucune mémoire vive minimale.',
          '**La version Mac.** On ne sait pas si la version Mac est native ou si c\'est l\'application iPad exécutée sur Apple silicon.',
          '**Publicité.** La formule Plus mentionne « No Ads », mais les fiches n\'indiquent pas où des publicités apparaissent dans la formule gratuite, et la section Sécurité des données déclare qu\'aucune donnée n\'est collectée.',
          '**Avis indépendants.** Aucun test ni débat de tiers n\'a été trouvé, hormis les évaluations des boutiques et les témoignages du site web.',
          '**Entrée et sortie vocales.** Ni les fiches des boutiques ni le site web ne les décrivent.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Application',
          'Plateformes',
          'Prix / licence',
          'Différence clé',
        ],
        rows: [
          {
            Application: '[Enclave AI](/fr/power-local-llm/enclave-ai-review)',
            Plateformes: 'iPhone, iPad, Mac',
            'Prix / licence': 'Freemium / code fermé',
            'Différence clé': 'Assistant hors ligne réservé à Apple ; la formule Pro payante ajoute des modèles cloud',
          },
          {
            Application: '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            Plateformes: 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Client LLM local gratuit et open source pour iPhone et Android',
          },
          {
            Application: '[Private Mind](/fr/power-local-llm/private-mind-review)',
            Plateformes: 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat hors ligne open source avec questions sur documents sur l\'appareil et benchmarks intégrés',
          },
          {
            Application: '[LLM Hub](/fr/power-local-llm/llm-hub-review)',
            Plateformes: 'Android, iOS',
            'Prix / licence': 'Freemium / code disponible',
            'Différence clé': 'Code source publié sous licence non commerciale, avec un déblocage Premium unique',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Combien coûtent les formules à vie et les formules dans d\'autres pays ?',
            a: 'Le 19 octobre 2026, l\'App Store affichait Plus à vie à $59.99 et Pro à vie à $119.99 aux États-Unis, ainsi que ces prix mensuels Plus / Pro ailleurs : 5,99 € / 9,99 € (Allemagne, Espagne et France), ¥800 / ¥1,500 (Japon), R$ 24,90 / R$ 49,90 (Brésil), ₩6,600 / ₩14,000 (Corée du Sud), 19.99 / 39.99 SAR (Arabie saoudite) et ¥38 / ¥68 (Chine). Google Play n\'affiche qu\'une fourchette de prix par boutique, par exemple $4.99–$119.99 aux États-Unis, et ses prix diffèrent de ceux de l\'App Store ; les prix peuvent changer à tout moment.',
          },
          {
            q: 'Combien de messages la formule gratuite autorise-t-elle ?',
            a: 'La politique de confidentialité indique une limite gratuite de 10 messages par jour, comptés sur l\'appareil, et le site web ajoute que le partage de l\'application peut en débloquer davantage.',
          },
          {
            q: 'Faut-il un compte ?',
            a: 'Non : la fiche indique qu\'aucune inscription ni aucun compte n\'est requis. Un compte Google ou Apple n\'est nécessaire que pour acheter une formule, ce que la boutique gère.',
          },
          {
            q: 'Convient-elle aux enfants ?',
            a: 'Google Play la classe Teen et l\'App Store 13+, et l\'App Store cite le contenu généré par les utilisateurs parmi ses catégories ; la politique de confidentialité indique qu\'elle n\'est pas destinée aux enfants de moins de 13 ans.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Secret AI propose un chat privé hors ligne sur iPhone, Android et Mac avec des modèles open source, des personnages, des Skills et des outils MCP, une offre gratuite avec limite quotidienne et des formules payantes pour les moteurs GPU/NPU et la vision. Ses affirmations ne sont pas encore vérifiables : aucun code source n\'est publié, et la politique de confidentialité ne décrit pas les fonctions d\'outils et de MCP plus récentes, dont certaines envoient des données à des serveurs que vous choisissez. Elle convient à ceux qui veulent une application de chat privé riche en fonctions et essaieront d\'abord l\'offre gratuite ; qui a besoin d\'un code publié comparera [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private Mind](/fr/power-local-llm/private-mind-review), toutes deux sous licence MIT.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Secret AI sur Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) — description, version, date de mise à jour, section Sécurité des données et fourchette de prix, consultés le 19 octobre 2026.',
          '[Secret AI sur l\'App Store](https://apps.apple.com/us/app/secret-ai/id6744668980) — compatibilité, prix des formules, langues et notes de version, consultés le 19 octobre 2026.',
          '[secretai.io](https://secretai.io) — fonctions, formules, catalogue de modèles et démonstration MCP, consultés le 19 octobre 2026.',
          '[Politique de confidentialité](https://secretai.io/legal/privacy) — déclarations sur le traitement des données, mise à jour pour la dernière fois le 13 mai 2025.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Test d\'Enclave AI](/fr/power-local-llm/enclave-ai-review) — un assistant IA hors ligne pour iPhone, iPad et Mac.',
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client LLM local gratuit et open source pour iOS et Android.',
          '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne open source avec questions sur documents sur l\'appareil.',
          '[Les meilleures applications de LLM locaux pour Android](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama plus large d\'Android.',
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
    heroImage: '/images/secret-ai-review-hero-ja.webp',
    title: 'Secret AI レビュー：iPhone・Android・Mac向けのプライベートなオフラインAIチャット',
    seoTitle: 'Secret AI レビュー：iPhone・Android・Mac向けAIチャット',
    intro: 'Secret AIは、ワイオミング州に登録された企業[Secret AI L.L.C.](https://secretai.io)が提供するプライベートAIチャットアプリです。オープンソースの言語モデルをスマートフォンやMac上で動かし、カスタムキャラクター、Skills、MCPツールを追加できます。[Android](https://play.google.com/store/apps/details?id=io.secretai.llm)と[iPhone・iPad](https://apps.apple.com/us/app/secret-ai/id6744668980)向けに配信され、App StoreにはMac版も掲載されています。このレビューは2つのストア掲載情報、公式サイト、プライバシーポリシー（2026年10月19日確認）に基づいており、PromptQuorumは実機での検証を行っていません。Secret AIという名前の製品は他にもあり、このレビューが扱うのはAndroidのパッケージ名がio.secretai.llmのアプリのみです。',
    metaDescription: 'Secret AIレビュー：iPhone・Android・Macで使えるオフラインAIチャット。キャラクター、Skills、MCPツールに対応。無料枠と有料プランあり、ソース非公開。',
    twitterDescription: 'Secret AIレビュー：iPhone・Android・Mac向けのオフラインAIチャット。無料枠とPlus・Proプラン、ソース非公開、動作は未検証。',
    audience: 'スマートフォンやMacでプライベートなAIチャットアプリを使いたく、情報源が裏付けている点、開発者の主張にとどまる点、有料プランで何が使えるようになるかを知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Secret AI レビュー',
    targetKeywords: [
      'secret ai レビュー',
      'secret ai アプリ',
      'secret ai オフライン チャット',
      'オフライン aiチャット iphone android',
      'ローカルllm アプリ iphone android mac',
      'mcp ツール スマホ aiチャット',
      'io.secretai.llm',
    ],
    current_models_mentioned: [
      'Qwen3.5 VL',
      'Gemma 4',
      'LFM2.5 VL',
      'MiniCPM 5',
      'DeepSeek R1 0528',
      'gpt-oss',
      'Llama 4',
      'Phi 4',
      'Mistral',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Android',
    ],
    leadAnswerBlock: '**Secret AIは、開発者によれば、オープンソースのAIモデルを端末上で動かし、チャット、キャラクター、写真をプライベートに保つスマートフォン・Mac向けアプリです（ただしMCPツール呼び出しや任意のリモートモデルサーバーはデータを端末外に送ります）。** ソースコードは公開されておらず、プライバシーポリシーの最終更新は2025年5月で、アプリがツール、Skills、MCPサーバーに対応する前のものです。',
    quickAnswerTop: {
      ja: {
        question: 'Secret AIは無料で、オフラインで使えますか？',
        answer: 'インストールは無料で、1日のメッセージ数に上限があり、有料のPlusプランとProプランがあります。開発者によれば、Hugging Faceからモデルをダウンロードしたあとは、インターネット接続なしで端末上で回答が生成されます。',
        bullets: [
          'GGUF（llama.cpp）、MNN、MLXのモデルを実行します。開発者は、利用可能なモデルとしてQwen3.5 VL、Gemma 4、LFM2.5 VL、MiniCPM 5、gpt-oss、Llama 4、Phi 4、Mistralを挙げています。',
          'カスタムAIキャラクター、SKILL.mdファイルで書くSkills、ツール呼び出しを承認制にしたMCPサーバーを追加できます。',
          '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)と[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)で入手でき、App StoreにはiPhone、iPad、Mac、Apple Visionが掲載されています。',
          'Android版はバージョン1.12.2、2026年10月15日更新（2026年10月19日時点の掲載内容）。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Secret AIとは',
        anchor: 'what-is-secret-ai',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'プライバシーとデータの扱い',
        anchor: 'privacy',
      },
      {
        label: '確認できなかった点',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合と代替アプリ',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '総評',
        anchor: 'verdict',
      },
      {
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Secret AIは、オープンソースのAIモデルを端末上で動かしてプライベートなチャットを行うiPhone・Android・Mac向けアプリで、無料枠と有料プランがあります。',
          },
          {
            type: 'plain-terms',
            text: 'アプリをインストールし、AIモデルを一度ダウンロードすれば、チャット、カスタムキャラクターとの会話、写真の送信ができ、開発者によれば、チャットは端末上で生成されますが、MCPツール呼び出しや、任意で接続する自前サーバー／Ollamaではデータが端末の外に出ます。',
          },
        ],
        items: [
          '提供元：ワイオミング州に登録されたSecret AI L.L.C.。公式サイト、Discordコミュニティ、Hugging Faceのページがあります。',
          '実績：Google Playでは2025年5月12日に公開、5万回以上のダウンロードと976件の評価で平均4.1。App Storeでは83件の評価で4.5。',
          'プライバシーの表明：Google Playの「データセーフティ」では、データの収集も第三者への共有もないとされています。',
          '動作条件：Android 7.0以降、iOS・iPadOS 17.0以降、macOS 14.0以降。AIモデルはアプリ内で別途ダウンロードします。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ここに書かれている内容はすべてストアの掲載情報、公式サイト、プライバシーポリシーに基づくもので、PromptQuorumはアプリを検証していないため、オフライン動作、回答品質、速度は未確認です。',
          },
        ],
      },
      overview: {
        id: 'what-is-secret-ai',
        title: 'Secret AIとは',
        content: [
          '**Secret AIは、Hugging Faceからオープンソースの言語モデルをダウンロードし、独自のllama.cpp、MNN、MLXエンジンでスマートフォンやMac上で動かすチャットアプリです。** [公式サイト](https://secretai.io)では、通常のチャットに3つの機能が加わると説明されています。アバターと壁紙を持つカスタムAIキャラクター、持ち運べるSKILL.mdファイルで一度教えるSkills、ツール呼び出しがチャット内で承認を求めるMCPサーバーです。',
          'ストアでのタイトルは国によって異なり、たとえば英語のGoogle Playでは「Secret AI: Local AI Chat」、ドイツでは「Secret AI: Lokaler KI-Chatbot」、日本では「私密でオフラインの本地AI助理」です。いずれも同じアプリを指します。App Storeには18の表示言語が掲載されています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**入手はGoogle PlayまたはApp Storeから。AIモデルはアプリ内で別途ダウンロードします。**',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)',
          },
          {
            'プラットフォーム': 'iPhone／iPad／Mac',
            '入手先': '[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)',
          },
          {
            'プラットフォーム': '価格',
            '入手先': '無料（1日の回数制限）、Plus ¥800／月、Pro ¥1,500／月（日本のApp Store）',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[secretai.io](https://secretai.io)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[プライバシーポリシー](https://secretai.io/legal/privacy)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '非公開',
          },
        ],
        note: 'Mac版はApp Store（macOS 14.0以降）に掲載され、公式サイトにもmacOSのタブがありますが、ネイティブのMacアプリなのか、MacでiPad版を動かすものなのかはPromptQuorumでは確認していません。iOS版のバージョン番号は掲載情報から読み取れなかったため、ここに記載したバージョンはGoogle Play掲載のAndroid版のもので、2026年10月15日に更新されています。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はいずれもGoogle Playの説明文、App Storeの掲載情報、公式サイトに基づく内容で、独立した検証は行っていません。**',
        ],
        items: [
          '**開発元によれば、モデルのダウンロード後はオフラインで動作。** モデルはHugging Faceから取得します。公式サイトにはGGUF、MNN、MLXファイルのカタログがあり、Playの説明文には自前のLLMサーバーやOllamaに接続する方法も載っています。独自のモデルファイルの取り込みについては説明がありません。',
          '**3つのエンジンと3種類のチップ。** 無料プランではllama.cpp（GGUF）がCPUで動作し、ProプランではGPUとNPUによる高速化、MNNとMLXのエンジンが加わります。',
          '**画像入力。** 写真はQwen3.5 VLやGemma 4などのビジョンモデルで端末上で解析されます。画像理解の無制限利用はProプランに含まれます。',
          '**キャラクター、Skills、MCP。** キャラクターには名前、アバター、性格を設定でき、キャラクターカードの取り込みも可能です。SkillはチャットごとにオンにするSKILL.mdファイルで、ツールは有効にするまでオフのままで、初回の実行時に承認が必要です。無料プランで使えるMCPサーバーは1つ、有料プランではそれ以上です。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの扱い',
        content: [
          '**Google Playの「データセーフティ」では「収集されるデータなし」「第三者と共有されるデータなし」と表明されています。** [プライバシーポリシー](https://secretai.io/legal/privacy)（2025年5月13日更新）には、アプリが会話、利用状況データ、クラッシュレポート、写真を収集しないこと、画像は暗号化した形でのみ端末内に保存すること、ネットワークはモデルのダウンロードにのみ使うことが書かれています。',
          '**2つの機能は、仕組み上、データを端末の外に送ります。** Playの説明文によると、ネットワーク上の自前のLLMサーバーやOllamaに接続できます。公式サイトのMCPツール呼び出しのデモでは「Send this conversation to deepwiki?」と確認が出て、ツールは「runs on deepwiki, not on this device」と注記されています。リモートのMCPサーバーは、送信した内容を受け取ります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者の表明であり、監査結果ではありません。ソースコードも公開されていません。プライバシーポリシーはツール、Skills、MCPの機能より前のもので、これらには触れていません。PromptQuorumはアプリの通信を調べていません。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**ソースコードとライセンス。** 公式サイトにもストアの掲載情報にもリポジトリが見つからなかったため、プライバシーとオフライン動作の主張をコードと照合できません。',
          '**実際の挙動。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、回答品質、各モデルに必要な端末性能は不明で、掲載情報には最小RAMも示されていません。',
          '**Mac版。** Mac版がネイティブなのか、Appleシリコン上で動くiPad版なのかは不明です。',
          '**広告。** Plusプランには「No Ads」とありますが、無料プランのどこに広告が出るのかは掲載情報にはなく、データセーフティではデータ収集なしと表明されています。',
          '**第三者の評価。** ストアの評価と公式サイトのお客様の声以外に、第三者によるレビューや議論は見つかりませんでした。',
          '**音声入力と音声出力。** ストアの掲載情報にも公式サイトにも説明がありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: [
          'アプリ',
          '対応環境',
          '価格／ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[Enclave AI](/ja/power-local-llm/enclave-ai-review)',
            '対応環境': 'iPhone、iPad、Mac',
            '価格／ライセンス': 'フリーミアム／クローズドソース',
            '主な違い': 'Apple専用のオフラインアシスタント。有料のProプランでクラウドモデルが加わる',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            '対応環境': 'iOS、Android',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'iPhoneとAndroid向けの無料のオープンソース製ローカルLLMクライアント',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            '対応環境': 'iOS、Android',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'オープンソースのオフラインチャット。端末内の文書Q&Aとベンチマーク機能を内蔵',
          },
          {
            'アプリ': '[LLM Hub](/ja/power-local-llm/llm-hub-review)',
            '対応環境': 'Android、iOS',
            '価格／ライセンス': 'フリーミアム／ソース公開（source-available）',
            '主な違い': '非商用ライセンスでソースコードを公開。買い切りのPremium解除あり',
          },
        ],
        note: '競合アプリの情報は頻繁に変わります。価格、ライセンス、対応環境は各アプリの掲載ページで最新の情報をご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '買い切りプランや他の国のプランはいくらですか？',
            a: '2026年10月19日時点で、App Storeの掲載価格は、米国ではPlus買い切りが$59.99、Pro買い切りが$119.99でした。他の国のPlus／Proの月額は、ドイツ・スペイン・フランスが5,99 €／9,99 €、日本が¥800／¥1,500、ブラジルがR$ 24,90／R$ 49,90、韓国が₩6,600／₩14,000、サウジアラビアが19.99／39.99 SAR、中国が¥38／¥68です。Google Playはストアごとに価格帯のみを表示し（たとえば米国は$4.99～$119.99）、価格はApp Storeと異なります。価格はいつでも変わる可能性があります。',
          },
          {
            q: '無料プランでは何件までメッセージを送れますか？',
            a: 'プライバシーポリシーには、無料枠は1日10メッセージで端末上で集計されると書かれており、公式サイトには、アプリを共有するとさらに解放される場合があると記載されています。',
          },
          {
            q: 'アカウントは必要ですか？',
            a: '不要です。掲載情報には、登録もアカウントも必要ないと記載されています。GoogleアカウントまたはAppleアカウントが必要なのはプランの購入時のみで、手続きはストアが行います。',
          },
          {
            q: '子どもが使っても問題ありませんか？',
            a: 'Google Playでは「ティーン」、App Storeでは13歳以上に分類され、App Storeはユーザー生成コンテンツを含むカテゴリとして挙げています。プライバシーポリシーには、13歳未満の子どもを対象としていないと書かれています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Secret AIは、オープンソースモデル、キャラクター、Skills、MCPツールを使ったプライベートなオフラインチャットをiPhone、Android、Macで提供します。1日の回数制限つきの無料枠があり、GPU・NPUエンジンとビジョン機能は有料プランです。ただし主張はまだ確認できません。ソースコードは公開されておらず、プライバシーポリシーは新しいツールやMCPの機能に触れていません。そのうちいくつかは、利用者が選んだサーバーにデータを送ります。機能の多いプライベートなチャットアプリを求め、まず無料枠を試したい方に向いています。公開されたコードが必要な方は、いずれもMITライセンスの[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private Mind](/ja/power-local-llm/private-mind-review)と比較してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Google PlayのSecret AI](https://play.google.com/store/apps/details?id=io.secretai.llm) — 説明文、バージョン、更新日、データセーフティ、価格帯（2026年10月19日確認）。',
          '[App StoreのSecret AI](https://apps.apple.com/us/app/secret-ai/id6744668980) — 対応環境、プラン価格、言語、リリースノート（2026年10月19日確認）。',
          '[secretai.io](https://secretai.io) — 機能、プラン、モデルカタログ、MCPのデモ（2026年10月19日確認）。',
          '[プライバシーポリシー](https://secretai.io/legal/privacy) — データの扱いに関する記述（2025年5月13日更新）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Enclave AI レビュー](/ja/power-local-llm/enclave-ai-review) — iPhone、iPad、Mac向けのオフラインAIアシスタント。',
          '[PocketPal AI レビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの無料のオープンソース製ローカルLLMクライアント。',
          '[Private Mind レビュー](/ja/power-local-llm/private-mind-review) — 端末内の文書Q&Aに対応するオープンソースのオフラインチャットアプリ。',
          '[Android向けローカルLLMアプリ おすすめ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Androidアプリをより広く取り上げた比較記事。',
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
    heroImage: '/images/secret-ai-review-hero-pt.webp',
    title: 'Análise do Secret AI: chat de IA privado e offline para iPhone, Android e Mac',
    seoTitle: 'Análise do Secret AI: IA offline no iPhone, Android e Mac',
    intro: 'O Secret AI é um app de chat de IA privado da [Secret AI L.L.C.](https://secretai.io), empresa registrada em Wyoming, que executa modelos de linguagem de código aberto no celular ou no Mac e acrescenta personagens personalizados, Skills e ferramentas MCP. Ele está disponível para [Android](https://play.google.com/store/apps/details?id=io.secretai.llm) e para [iPhone e iPad](https://apps.apple.com/us/app/secret-ai/id6744668980), e a App Store lista uma versão para Mac. Esta análise se baseia nas duas páginas de loja, no site oficial e na política de privacidade, consultados em 19 de outubro de 2026; a PromptQuorum não testou o app na prática. Outros produtos usam o nome Secret AI; esta análise trata apenas do app com o pacote Android io.secretai.llm.',
    metaDescription: 'Análise do Secret AI: app de chat de IA privado e offline para iPhone, Android e Mac, com personagens, Skills e MCP. Plano grátis e pagos; código fechado.',
    twitterDescription: 'Análise do Secret AI: chat de IA privado e offline para iPhone, Android e Mac. Plano grátis, planos Plus e Pro, código fechado, sem teste prático.',
    audience: 'Pessoas que querem um app de chat de IA privado no celular ou no Mac e precisam saber o que as fontes confirmam, o que só o desenvolvedor afirma e o que os planos pagos liberam.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Secret AI',
    targetKeywords: [
      'análise secret ai',
      'secret ai app',
      'secret ai chat offline',
      'chat de ia privado offline iphone android',
      'app de llm local iphone android mac',
      'chat de ia com ferramentas mcp no celular',
      'io.secretai.llm',
    ],
    current_models_mentioned: [
      'Qwen3.5 VL',
      'Gemma 4',
      'LFM2.5 VL',
      'MiniCPM 5',
      'DeepSeek R1 0528',
      'gpt-oss',
      'Llama 4',
      'Phi 4',
      'Mistral',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Android',
    ],
    leadAnswerBlock: '**O Secret AI é um app para celular e Mac que, segundo o desenvolvedor, executa modelos de IA de código aberto no aparelho para que conversas, personagens e fotos permaneçam privados; as chamadas de ferramentas MCP e os servidores de modelos remotos opcionais enviam, sim, dados para fora do aparelho.** O código-fonte não é publicado, e a política de privacidade foi atualizada pela última vez em maio de 2025, antes de o app incluir ferramentas, Skills e servidores MCP.',
    quickAnswerTop: {
      pt: {
        question: 'O Secret AI é grátis e funciona offline?',
        answer: 'O app é grátis para instalar, com um limite diário de mensagens e planos pagos Plus e Pro. Segundo o desenvolvedor, as conversas são geradas no aparelho, sem conexão com a internet, depois que um modelo é baixado do Hugging Face.',
        bullets: [
          'Executa modelos GGUF (llama.cpp), MNN e MLX; o desenvolvedor cita Qwen3.5 VL, Gemma 4, LFM2.5 VL, MiniCPM 5, gpt-oss, Llama 4, Phi 4 e Mistral entre os modelos disponíveis.',
          'Acrescenta personagens de IA personalizados, Skills escritas como arquivos SKILL.md e servidores MCP cujas chamadas de ferramentas você aprova.',
          'Disponível no [Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) e na [App Store](https://apps.apple.com/us/app/secret-ai/id6744668980), que lista iPhone, iPad, Mac e Apple Vision.',
          'Versão 1.12.2 para Android, atualizada pela última vez em 15 de outubro de 2026 (estado da página em 19 de outubro de 2026).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o Secret AI?',
        anchor: 'what-is-secret-ai',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Privacidade e tratamento de dados',
        anchor: 'privacy',
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredito',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Secret AI é um app para iPhone, Android e Mac que executa modelos de IA de código aberto no aparelho para chat privado, com plano grátis e planos pagos.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app, baixa uma vez um modelo de IA e depois conversa, fala com personagens personalizados ou envia fotos; segundo o desenvolvedor, as conversas são geradas no aparelho, enquanto as chamadas de ferramentas MCP e uma conexão opcional com um servidor próprio ou Ollama enviam dados para fora dele.',
          },
        ],
        items: [
          'Publicador: Secret AI L.L.C., registrada em Wyoming, com site próprio, uma comunidade no Discord e uma página no Hugging Face.',
          'Histórico: no Google Play desde 12 de maio de 2025, com mais de 50 mil downloads e nota 4.1 em 976 avaliações; a App Store mostra 4.5 em 83 avaliações.',
          'Declaração de privacidade: a seção Segurança dos dados do Google Play informa que nenhum dado é coletado nem compartilhado com terceiros.',
          'Requisitos: Android 7.0 ou superior, iOS e iPadOS 17.0 ou superior, macOS 14.0 ou superior; o modelo de IA é um download separado dentro do app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Tudo aqui vem das páginas de loja, do site e da política de privacidade; a PromptQuorum não testou o app, então o funcionamento offline, a qualidade das respostas e a velocidade não estão confirmados.',
          },
        ],
      },
      overview: {
        id: 'what-is-secret-ai',
        title: 'O que é o Secret AI?',
        content: [
          '**O Secret AI é um app de chat que baixa modelos de linguagem de código aberto do Hugging Face e os executa no celular ou no Mac com seus próprios mecanismos llama.cpp, MNN e MLX.** O [site oficial](https://secretai.io) descreve três acréscimos ao chat simples: personagens de IA personalizados, com avatar e papel de parede próprios, Skills ensinadas uma única vez em um arquivo SKILL.md portátil e servidores MCP cujas chamadas de ferramentas abrem no chat para aprovação.',
          'Os títulos nas lojas variam conforme o país, por exemplo "Secret AI: Local AI Chat" no Google Play em inglês, "Secret AI: Lokaler KI-Chatbot" na Alemanha e "私密でオフラインの本地AI助理" no Japão. Todos se referem ao mesmo app. A App Store lista 18 idiomas de interface.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**Instale pelo Google Play ou pela App Store; o modelo de IA é um download separado dentro do app.**',
        ],
        columns: [
          'Plataforma',
          'Onde obter',
        ],
        rows: [
          {
            Plataforma: 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)',
          },
          {
            Plataforma: 'iPhone / iPad / Mac',
            'Onde obter': '[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)',
          },
          {
            Plataforma: 'Preço',
            'Onde obter': 'Grátis, limite diário; App Store BR: Plus R$ 24,90, Pro R$ 49,90/mês',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[secretai.io](https://secretai.io)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade](https://secretai.io/legal/privacy)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Não publicado',
          },
        ],
        note: 'A versão para Mac está listada na App Store (macOS 14.0 ou superior) e o site mostra uma aba macOS; a PromptQuorum não verificou se é um build nativo para Mac ou o app de iPad executado em um Mac. O número da versão do iOS não pôde ser lido na página, então a versão indicada aqui é a do Android no Google Play, atualizada pela última vez em 15 de outubro de 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da descrição do Google Play, da página da App Store ou do site; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Segundo o desenvolvedor, funciona offline depois do download de um modelo.** Os modelos vêm do Hugging Face; o site lista um catálogo de arquivos GGUF, MNN e MLX, e a descrição do Play acrescenta uma forma de se conectar a um servidor de LLM próprio ou ao Ollama. A importação de um arquivo de modelo seu não é descrita.',
          '**Três mecanismos e três chips.** O llama.cpp (GGUF) roda na CPU no plano grátis; o plano Pro acrescenta aceleração por GPU e NPU e os mecanismos MNN e MLX.',
          '**Entrada de imagens.** As fotos são analisadas no aparelho com modelos de visão como Qwen3.5 VL ou Gemma 4; a compreensão ilimitada de imagens faz parte do plano Pro.',
          '**Personagens, Skills e MCP.** Os personagens têm nome, avatar e personalidade, e é possível importar um cartão de personagem; uma Skill é um arquivo SKILL.md que você ativa por conversa; as ferramentas ficam desativadas até serem ativadas e cada uma é aprovada na primeira vez em que roda. O plano grátis permite um servidor MCP, os planos pagos permitem mais.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e tratamento de dados',
        content: [
          '**A seção Segurança dos dados do Google Play declara "Nenhum dado coletado" e "Nenhum dado compartilhado com terceiros".** A [política de privacidade](https://secretai.io/legal/privacy), atualizada pela última vez em 13 de maio de 2025, diz que o app não coleta conversas, dados de uso, relatórios de falhas nem fotos, armazena imagens apenas de forma criptografada no aparelho e usa a rede somente para baixar modelos.',
          '**Dois recursos enviam dados para fora do aparelho por definição.** A descrição do Play diz que você pode se conectar a um servidor de LLM próprio ou ao Ollama na sua rede. No site, uma demonstração de chamada de ferramenta MCP pergunta "Send this conversation to deepwiki?" e observa que a ferramenta "runs on deepwiki, not on this device" — um servidor MCP remoto recebe o que você envia a ele.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do desenvolvedor, não resultados de auditoria, e o código-fonte não é publicado. A política é anterior aos recursos de ferramentas, Skills e MCP e não os descreve. A PromptQuorum não inspecionou o tráfego de rede do app.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Código-fonte e licença.** Nenhum repositório foi encontrado no site nem nas páginas de loja, então as afirmações de privacidade e de funcionamento offline não podem ser conferidas no código.',
          '**Comportamento na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria, qualidade das respostas e o hardware exigido por cada modelo são desconhecidos; as páginas não indicam RAM mínima.',
          '**O build para Mac.** Não está claro se a versão para Mac é nativa ou o app de iPad executado em Apple silicon.',
          '**Publicidade.** O plano Plus lista "No Ads", mas as páginas não dizem onde os anúncios aparecem no plano grátis, e a seção Segurança dos dados declara que nenhum dado é coletado.',
          '**Opiniões independentes.** Não foram encontradas análises nem discussões de terceiros, além das avaliações nas lojas e dos depoimentos no site.',
          '**Entrada e saída de voz.** Nem as páginas de loja nem o site a descrevem.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Diferença principal',
        ],
        rows: [
          {
            App: '[Enclave AI](/pt/power-local-llm/enclave-ai-review)',
            Plataformas: 'iPhone, iPad, Mac',
            'Preço / licença': 'Freemium / código fechado',
            'Diferença principal': 'Assistente offline só para Apple; o plano Pro pago acrescenta modelos na nuvem',
          },
          {
            App: '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Cliente grátis e de código aberto de LLMs locais para iPhone e Android',
          },
          {
            App: '[Private Mind](/pt/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat offline de código aberto com perguntas sobre documentos no aparelho e benchmarks integrados',
          },
          {
            App: '[LLM Hub](/pt/power-local-llm/llm-hub-review)',
            Plataformas: 'Android, iOS',
            'Preço / licença': 'Freemium / código disponível',
            'Diferença principal': 'Código-fonte publicado sob licença não comercial, com desbloqueio Premium único',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto custam os planos vitalícios e os planos em outros países?',
            a: 'Em 19 de outubro de 2026, a App Store listava o Plus Vitalício por $59.99 e o Pro Vitalício por $119.99 nos EUA, e estes preços mensais do Plus / Pro em outros países: 5,99 € / 9,99 € (Alemanha, Espanha e França), ¥800 / ¥1,500 (Japão), R$ 24,90 / R$ 49,90 (Brasil), ₩6,600 / ₩14,000 (Coreia do Sul), 19.99 / 39.99 SAR (Arábia Saudita) e ¥38 / ¥68 (China). O Google Play mostra apenas uma faixa de preço por loja, por exemplo $4.99–$119.99 nos EUA, e seus preços diferem dos da App Store; os preços podem mudar a qualquer momento.',
          },
          {
            q: 'Quantas mensagens o plano grátis permite?',
            a: 'A política de privacidade informa um limite grátis de 10 mensagens por dia, controlado no aparelho, e o site acrescenta que compartilhar o app pode liberar mais.',
          },
          {
            q: 'Ele exige uma conta?',
            a: 'Não: a página informa que não é preciso cadastro nem conta. Uma conta Google ou Apple é necessária apenas para comprar um plano, o que a loja gerencia.',
          },
          {
            q: 'Ele é adequado para crianças?',
            a: 'O Google Play o classifica como Teen e a App Store como 13+, e a App Store lista conteúdo gerado por usuários entre as categorias; a política de privacidade diz que ele não se destina a crianças menores de 13 anos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Secret AI oferece chat privado e offline no iPhone, Android e Mac com modelos de código aberto, personagens, Skills e ferramentas MCP, um plano grátis com limite diário e planos pagos para mecanismos de GPU/NPU e visão. As afirmações ainda não podem ser conferidas: o código-fonte não é publicado, e a política de privacidade não descreve os recursos mais novos de ferramentas e MCP, alguns dos quais enviam dados a servidores que você escolhe. Serve para quem quer um app de chat privado rico em recursos e vai testar primeiro o plano grátis; quem precisa de código publicado deve comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Private Mind](/pt/power-local-llm/private-mind-review), ambos com licença MIT.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Secret AI no Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) — descrição, versão, data de atualização, seção Segurança dos dados e faixa de preço, consultados em 19 de outubro de 2026.',
          '[Secret AI na App Store](https://apps.apple.com/us/app/secret-ai/id6744668980) — compatibilidade, preços dos planos, idiomas e notas da versão, consultados em 19 de outubro de 2026.',
          '[secretai.io](https://secretai.io) — recursos, planos, catálogo de modelos e demonstração de MCP, consultados em 19 de outubro de 2026.',
          '[Política de privacidade](https://secretai.io/legal/privacy) — declarações sobre o tratamento de dados, atualizada pela última vez em 13 de maio de 2025.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Enclave AI](/pt/power-local-llm/enclave-ai-review) — um assistente de IA offline para iPhone, iPad e Mac.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente grátis e de código aberto de LLMs locais para iOS e Android.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline de código aberto com perguntas sobre documentos no aparelho.',
          '[Os melhores apps de LLM local para Android](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo do Android.',
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
    heroImage: '/images/secret-ai-review-hero-ar.webp',
    title: 'مراجعة Secret AI: دردشة ذكاء اصطناعي خاصة دون إنترنت على iPhone وAndroid وMac',
    seoTitle: 'مراجعة Secret AI: دردشة بلا إنترنت لـ iPhone وAndroid وMac',
    intro: 'Secret AI تطبيق دردشة خاص بالذكاء اصطناعي من شركة [Secret AI L.L.C.](https://secretai.io) المسجّلة في ولاية وايومنغ، يشغّل نماذج لغوية مفتوحة المصدر على الهاتف أو Mac ويضيف شخصيات مخصصة وSkills وأدوات MCP. التطبيق متاح لنظام [Android](https://play.google.com/store/apps/details?id=io.secretai.llm) ولأجهزة [iPhone وiPad](https://apps.apple.com/us/app/secret-ai/id6744668980)، ويعرض App Store نسخة لنظام Mac. تستند هذه المراجعة إلى صفحتي المتجرين والموقع الرسمي وسياسة الخصوصية، التي جرى الاطلاع عليها في 19 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا. تشترك منتجات أخرى في اسم Secret AI، وتغطي هذه المراجعة التطبيق ذا حزمة Android io.secretai.llm فقط.',
    metaDescription: 'مراجعة Secret AI: تطبيق دردشة ذكاء اصطناعي خاص دون إنترنت لأجهزة iPhone وAndroid وMac مع شخصيات وSkills وأدوات MCP. نسخة مجانية وشيفرة غير منشورة.',
    twitterDescription: 'مراجعة Secret AI: دردشة ذكاء اصطناعي خاصة دون إنترنت على iPhone وAndroid وMac. نسخة مجانية وخطتا Plus وPro، والشيفرة مغلقة، والادعاءات لم تُختبر بعد.',
    audience: 'من يريدون تطبيق دردشة ذكاء اصطناعي خاصًا على الهاتف أو Mac، ويحتاجون إلى معرفة ما تؤكده المصادر وما يدّعيه المطوّر فقط وما تتيحه الخطط المدفوعة.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Secret AI',
    targetKeywords: [
      'مراجعة secret ai',
      'تطبيق secret ai',
      'secret ai دردشة دون إنترنت',
      'دردشة ذكاء اصطناعي خاصة دون إنترنت iphone android',
      'تطبيق llm محلي iphone android mac',
      'دردشة ذكاء اصطناعي مع أدوات mcp على الهاتف',
      'io.secretai.llm',
    ],
    current_models_mentioned: [
      'Qwen3.5 VL',
      'Gemma 4',
      'LFM2.5 VL',
      'MiniCPM 5',
      'DeepSeek R1 0528',
      'gpt-oss',
      'Llama 4',
      'Phi 4',
      'Mistral',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Android',
    ],
    leadAnswerBlock: '**Secret AI تطبيق للهاتف ولنظام Mac يشغّل، بحسب مطوّره، نماذج ذكاء اصطناعي مفتوحة المصدر على الجهاز، فتبقى المحادثات والشخصيات والصور خاصة؛ أما استدعاءات أدوات MCP وخوادم النماذج البعيدة الاختيارية فترسل بيانات خارج الجهاز.** الشيفرة المصدرية غير منشورة، وآخر تحديث لسياسة الخصوصية كان في مايو 2025، أي قبل أن يضيف التطبيق الأدوات وSkills وخوادم MCP.',
    quickAnswerTop: {
      ar: {
        question: 'هل Secret AI مجاني، وهل يعمل دون إنترنت؟',
        answer: 'التطبيق مجاني التثبيت، مع حد يومي للرسائل وخطتين مدفوعتين هما Plus وPro. وبحسب المطوّر، تُولَّد المحادثات على الجهاز دون اتصال بالإنترنت بعد تنزيل نموذج من Hugging Face.',
        bullets: [
          'يشغّل نماذج GGUF (llama.cpp) وMNN وMLX؛ ويذكر المطوّر Qwen3.5 VL وGemma 4 وLFM2.5 VL وMiniCPM 5 وgpt-oss وLlama 4 وPhi 4 وMistral ضمن النماذج المتاحة.',
          'يضيف شخصيات ذكاء اصطناعي مخصصة، وSkills تُكتب كملفات SKILL.md، وخوادم MCP توافق أنت على استدعاءات أدواتها.',
          'متاح على [Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) وعلى [App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)، الذي يعرض iPhone وiPad وMac وApple Vision.',
          'إصدار Android 1.12.2، آخر تحديث في 15 أكتوبر 2026 (حالة الصفحة في 19 أكتوبر 2026).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو Secret AI؟',
        anchor: 'what-is-secret-ai',
      },
      {
        label: 'كيفية الحصول عليه',
        anchor: 'get-it',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'الخصوصية ومعالجة البيانات',
        anchor: 'privacy',
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use',
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الخلاصة',
        anchor: 'verdict',
      },
      {
        label: 'المصادر',
        anchor: 'sources',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Secret AI تطبيق لأجهزة iPhone وAndroid وMac يشغّل نماذج ذكاء اصطناعي مفتوحة المصدر على الجهاز للدردشة الخاصة، مع نسخة مجانية وخطط مدفوعة.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّت التطبيق وتنزّل نموذج ذكاء اصطناعي مرة واحدة، ثم تدردش أو تحادث شخصيات مخصصة أو ترسل صورًا؛ وبحسب المطوّر تُولَّد المحادثات على الجهاز، بينما ترسل استدعاءات أدوات MCP والاتصال الاختياري بخادم مستضاف ذاتيًا أو Ollama بيانات خارج الجهاز.',
          },
        ],
        items: [
          'الناشر: Secret AI L.L.C. المسجّلة في ولاية وايومنغ، ولها موقع خاص ومجتمع على Discord وصفحة على Hugging Face.',
          'السجل: على Google Play منذ 12 مايو 2025 مع أكثر من 50 ألف تنزيل وتقييم 4.1 من 976 تقييمًا؛ ويعرض App Store تقييم 4.5 من 83 تقييمًا.',
          'إعلان الخصوصية: يذكر قسم أمان البيانات في Google Play أنه لا تُجمع بيانات ولا تُشارك مع أطراف ثالثة.',
          'المتطلبات: Android 7.0 أو أحدث، وiOS وiPadOS 17.0 أو أحدث، وmacOS 14.0 أو أحدث؛ ونموذج الذكاء الاصطناعي تنزيل منفصل داخل التطبيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'كل ما هنا مأخوذ من صفحتي المتجرين والموقع وسياسة الخصوصية؛ ولم تختبر PromptQuorum التطبيق، لذا لم يتأكد العمل دون إنترنت ولا جودة الإجابات ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-secret-ai',
        title: 'ما هو Secret AI؟',
        content: [
          '**Secret AI تطبيق دردشة ينزّل نماذج لغوية مفتوحة المصدر من Hugging Face ويشغّلها على الهاتف أو Mac بمحركاته الخاصة llama.cpp وMNN وMLX.** ويصف [الموقع الرسمي](https://secretai.io) ثلاث إضافات على الدردشة العادية: شخصيات ذكاء اصطناعي مخصصة لكل منها صورة رمزية وخلفية، وSkills تُعلَّم مرة واحدة كملف SKILL.md قابل للنقل، وخوادم MCP تُفتح استدعاءات أدواتها في المحادثة لتوافق عليها.',
          'تختلف عناوين التطبيق في المتاجر بحسب البلد، مثل "Secret AI: Local AI Chat" على Google Play بالإنجليزية، و"Secret AI: Lokaler KI-Chatbot" في ألمانيا، و"私密でオフラインの本地AI助理" في اليابان. وجميعها تشير إلى التطبيق نفسه. ويعرض App Store 18 لغة للواجهة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**ثبّته من Google Play أو App Store؛ ونموذج الذكاء الاصطناعي تنزيل منفصل داخل التطبيق.**',
        ],
        columns: [
          'المنصة',
          'مكان الحصول عليه',
        ],
        rows: [
          {
            'المنصة': 'Android',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)',
          },
          {
            'المنصة': 'iPhone / iPad / Mac',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)',
          },
          {
            'المنصة': 'السعر',
            'مكان الحصول عليه': 'مجاني بحد يومي؛ Plus 19.99/Pro 39.99 SAR شهريًا (App Store السعودي)',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'مكان الحصول عليه': '[secretai.io](https://secretai.io)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية](https://secretai.io/legal/privacy)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مكان الحصول عليه': 'غير منشورة',
          },
        ],
        note: 'نسخة Mac مدرجة في App Store (macOS 14.0 أو أحدث) ويعرض الموقع تبويبًا لـ macOS؛ ولم تتحقق PromptQuorum مما إذا كانت نسخة Mac أصلية أم تطبيق iPad يعمل على Mac. ولم يمكن قراءة رقم إصدار iOS من الصفحة، لذا فالإصدار المذكور هنا هو إصدار Android من Google Play، وآخر تحديث له في 15 أكتوبر 2026.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من وصف Google Play أو صفحة App Store أو الموقع؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**يعمل دون إنترنت بعد تنزيل النموذج، بحسب المطوّر.** تأتي النماذج من Hugging Face؛ ويعرض الموقع كتالوجًا من ملفات GGUF وMNN وMLX، ويضيف وصف Play إمكانية الاتصال بخادم LLM مستضاف ذاتيًا أو بـ Ollama. أما استيراد ملف نموذج خاص بك فلا يُذكر.',
          '**ثلاثة محركات وثلاثة معالجات.** يعمل llama.cpp (GGUF) على وحدة المعالجة المركزية في الخطة المجانية؛ وتضيف خطة Pro تسريع GPU وNPU ومحركي MNN وMLX.',
          '**إدخال الصور.** تُحلَّل الصور على الجهاز بنماذج رؤية مثل Qwen3.5 VL أو Gemma 4؛ والفهم غير المحدود للصور جزء من خطة Pro.',
          '**الشخصيات وSkills وMCP.** للشخصية اسم وصورة رمزية وطابع، ويمكن استيراد بطاقة شخصية؛ وSkill ملف SKILL.md تفعّله لكل محادثة؛ وتبقى الأدوات معطلة حتى تفعّلها وتُوافق على كل منها عند أول تشغيل. تسمح الخطة المجانية بخادم MCP واحد، والخطط المدفوعة بالمزيد.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية ومعالجة البيانات',
        content: [
          '**يعلن قسم أمان البيانات في Google Play "لا تُجمع أي بيانات" و"لا تُشارك أي بيانات مع أطراف ثالثة".** وتذكر [سياسة الخصوصية](https://secretai.io/legal/privacy)، المحدّثة آخر مرة في 13 مايو 2025، أن التطبيق لا يجمع محادثات ولا بيانات استخدام ولا تقارير أعطال ولا صورًا، ولا يخزّن الصور إلا بشكل مشفّر على الجهاز، ولا يستخدم الشبكة إلا لتنزيل النماذج.',
          '**ميزتان ترسلان بيانات خارج الجهاز بحكم تصميمهما.** يذكر وصف Play أنه يمكنك الاتصال بخادم LLM مستضاف ذاتيًا أو بـ Ollama على شبكتك. وفي الموقع، يسأل عرض توضيحي لاستدعاء أداة MCP "Send this conversation to deepwiki?" ويشير إلى أن الأداة "runs on deepwiki, not on this device" — أي أن خادم MCP بعيدًا يستلم ما ترسله إليه.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المطوّر وليست نتائج تدقيق، والشيفرة المصدرية غير منشورة. وسياسة الخصوصية أسبق من ميزات الأدوات وSkills وMCP ولا تصفها. ولم تفحص PromptQuorum حركة الشبكة الخاصة بالتطبيق.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الشيفرة المصدرية والترخيص.** لم يُعثر على مستودع في الموقع ولا في صفحتي المتجرين، لذا لا يمكن التحقق من ادعاءات الخصوصية والعمل دون إنترنت بمقارنتها بالشيفرة.',
          '**السلوك عمليًا.** لم تشغّل PromptQuorum التطبيق، لذا تبقى السرعة واستهلاك البطارية وجودة الإجابات والعتاد الذي يحتاجه كل نموذج مجهولة؛ ولا تذكر الصفحتان حدًا أدنى لذاكرة RAM.',
          '**نسخة Mac.** ليس واضحًا ما إذا كانت نسخة Mac أصلية أم تطبيق iPad يعمل على معالجات Apple silicon.',
          '**الإعلانات.** تذكر خطة Plus "No Ads"، لكن الصفحتين لا تبيّنان أين تظهر الإعلانات في الخطة المجانية، ويعلن قسم أمان البيانات عدم جمع أي بيانات.',
          '**آراء مستقلة.** لم يُعثر على مراجعات أو نقاشات من أطراف ثالثة سوى تقييمات المتجرين وشهادات المستخدمين المنشورة في الموقع.',
          '**الإدخال والإخراج الصوتي.** لا تصفهما صفحتا المتجرين ولا الموقع.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الترخيص',
          'الفرق الجوهري',
        ],
        rows: [
          {
            'التطبيق': '[Enclave AI](/ar/power-local-llm/enclave-ai-review)',
            'المنصات': 'iPhone وiPad وMac',
            'السعر / الترخيص': 'مجاني بميزات مدفوعة / مغلق المصدر',
            'الفرق الجوهري': 'مساعد يعمل دون إنترنت لأجهزة Apple فقط؛ وتضيف خطة Pro المدفوعة نماذج سحابية',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الجوهري': 'عميل LLM محلي مجاني ومفتوح المصدر لـ iPhone وAndroid',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الجوهري': 'دردشة مفتوحة المصدر دون إنترنت مع أسئلة عن المستندات على الجهاز واختبارات أداء مدمجة',
          },
          {
            'التطبيق': '[LLM Hub](/ar/power-local-llm/llm-hub-review)',
            'المنصات': 'Android وiOS',
            'السعر / الترخيص': 'مجاني بميزات مدفوعة / شيفرة متاحة',
            'الفرق الجوهري': 'شيفرة منشورة بترخيص غير تجاري، مع فتح Premium لمرة واحدة',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم تكلفة الخطط الدائمة والخطط في دول أخرى؟',
            a: 'في 19 أكتوبر 2026 عرض App Store خطة Plus الدائمة بسعر 59.99 دولارًا وخطة Pro الدائمة بسعر 119.99 دولارًا في الولايات المتحدة، وعرض أسعار Plus / Pro الشهرية التالية في بلدان أخرى: 5,99 € / 9,99 € (ألمانيا وإسبانيا وفرنسا)، و¥800 / ¥1,500 (اليابان)، وR$ 24,90 / R$ 49,90 (البرازيل)، و₩6,600 / ₩14,000 (كوريا الجنوبية)، و19.99 / 39.99 SAR (السعودية)، و¥38 / ¥68 (الصين). ويعرض Google Play نطاق أسعار لكل متجر فقط، مثل 4.99–119.99 دولارًا في الولايات المتحدة، وتختلف أسعاره عن App Store؛ وقد تتغير الأسعار في أي وقت.',
          },
          {
            q: 'كم رسالة تسمح بها الخطة المجانية؟',
            a: 'تذكر سياسة الخصوصية حدًا مجانيًا قدره 10 رسائل يوميًا يُحتسب على الجهاز، ويضيف الموقع أن مشاركة التطبيق قد تتيح المزيد.',
          },
          {
            q: 'هل يحتاج إلى حساب؟',
            a: 'لا: تذكر الصفحة أنه لا حاجة إلى تسجيل أو حساب. ويلزم حساب Google أو Apple لشراء خطة فقط، ويتولى المتجر ذلك.',
          },
          {
            q: 'هل يناسب الأطفال؟',
            a: 'يصنّفه Google Play للمراهقين (Teen) ويصنّفه App Store بـ 13+، ويدرج App Store المحتوى الذي ينشئه المستخدمون ضمن فئاته؛ وتذكر سياسة الخصوصية أنه غير موجّه للأطفال دون 13 عامًا.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'يقدّم Secret AI دردشة خاصة دون إنترنت على iPhone وAndroid وMac بنماذج مفتوحة المصدر وشخصيات وSkills وأدوات MCP، مع نسخة مجانية بحد يومي وخطط مدفوعة لمحركات GPU/NPU والرؤية. غير أن ادعاءاته لا يمكن التحقق منها بعد: فالشيفرة المصدرية غير منشورة، ولا تصف سياسة الخصوصية ميزات الأدوات وMCP الأحدث، وبعضها يرسل بيانات إلى خوادم تختارها. يناسب من يريدون تطبيق دردشة خاصًا غنيًا بالميزات وسيجرّبون النسخة المجانية أولًا؛ ومن يحتاج إلى شيفرة منشورة فليقارن مع [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private Mind](/ar/power-local-llm/private-mind-review)، وكلاهما بترخيص MIT.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Secret AI على Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) — الوصف والإصدار وتاريخ التحديث وقسم أمان البيانات ونطاق الأسعار، جرى الاطلاع عليها في 19 أكتوبر 2026.',
          '[Secret AI على App Store](https://apps.apple.com/us/app/secret-ai/id6744668980) — التوافق وأسعار الخطط واللغات وملاحظات الإصدار، جرى الاطلاع عليها في 19 أكتوبر 2026.',
          '[secretai.io](https://secretai.io) — الميزات والخطط وكتالوج النماذج والعرض التوضيحي لـ MCP، جرى الاطلاع عليها في 19 أكتوبر 2026.',
          '[سياسة الخصوصية](https://secretai.io/legal/privacy) — تصريحات التعامل مع البيانات، محدّثة آخر مرة في 13 مايو 2025.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Enclave AI](/ar/power-local-llm/enclave-ai-review) — مساعد ذكاء اصطناعي يعمل دون إنترنت لأجهزة iPhone وiPad وMac.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل LLM محلي مجاني ومفتوح المصدر لنظامي iOS وAndroid.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مفتوح المصدر دون إنترنت مع أسئلة عن المستندات على الجهاز.',
          '[أفضل تطبيقات LLM المحلية لنظام Android](/ar/power-local-llm/best-local-llm-apps-android-2026) — نظرة أوسع على تطبيقات Android.',
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
    heroImage: '/images/secret-ai-review-hero-zh.webp',
    title: 'Secret AI 评测：iPhone、Android 和 Mac 上的私密离线 AI 聊天',
    seoTitle: 'Secret AI 评测：iPhone、Android、Mac 离线聊天',
    intro: 'Secret AI 是 [Secret AI L.L.C.](https://secretai.io)（注册于怀俄明州）推出的私密 AI 聊天应用，在手机或 Mac 上运行开源语言模型，并提供自定义角色、Skills 和 MCP 工具。它有 [Android](https://play.google.com/store/apps/details?id=io.secretai.llm) 版和 [iPhone、iPad](https://apps.apple.com/us/app/secret-ai/id6744668980) 版，App Store 还列出了 Mac 版本。本评测依据两个应用商店页面、官方网站及其隐私政策（2026年10月19日查阅），PromptQuorum 未对该应用进行实际测试。另有其他产品也叫 Secret AI；本评测只涉及 Android 包名为 io.secretai.llm 的应用。',
    metaDescription: 'Secret AI 评测：支持角色、Skills 和 MCP 工具的 iPhone、Android、Mac 私密离线 AI 聊天应用。有免费版和付费方案，源码未公开。',
    twitterDescription: 'Secret AI 评测：iPhone、Android 和 Mac 上的私密离线 AI 聊天。免费版、Plus 与 Pro 方案，源码未公开，说法未经实测。',
    audience: '想在手机或 Mac 上使用私密 AI 聊天应用的用户，希望了解来源能证实什么、哪些只是开发者的说法，以及付费方案能解锁什么。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Secret AI 评测',
    targetKeywords: [
      'secret ai 评测',
      'secret ai 应用',
      'secret ai 离线聊天',
      'iphone android 私密离线 ai 聊天',
      'iphone android mac 本地大模型应用',
      '手机 ai 聊天 mcp 工具',
      'io.secretai.llm',
    ],
    current_models_mentioned: [
      'Qwen3.5 VL',
      'Gemma 4',
      'LFM2.5 VL',
      'MiniCPM 5',
      'DeepSeek R1 0528',
      'gpt-oss',
      'Llama 4',
      'Phi 4',
      'Mistral',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Android',
    ],
    leadAnswerBlock: '**据开发者称，Secret AI 是一款手机和 Mac 应用，在设备上运行开源 AI 模型，使聊天、角色和照片保持私密；但 MCP 工具调用和可选的远程模型服务器会把数据发送到设备之外。** 源码未公开，隐私政策最近更新于 2025 年 5 月，早于应用新增工具、Skills 和 MCP 服务器的时间。',
    quickAnswerTop: {
      zh: {
        question: 'Secret AI 免费吗？能离线使用吗？',
        answer: '应用可免费安装，设有每日消息上限，另有付费的 Plus 和 Pro 方案。据开发者称，从 Hugging Face 下载模型后，聊天内容在设备上生成，无需联网。',
        bullets: [
          '运行 GGUF（llama.cpp）、MNN 和 MLX 模型；开发者列出的可用模型包括 Qwen3.5 VL、Gemma 4、LFM2.5 VL、MiniCPM 5、gpt-oss、Llama 4、Phi 4 和 Mistral。',
          '新增自定义 AI 角色、以 SKILL.md 文件编写的 Skills，以及需要你批准工具调用的 MCP 服务器。',
          '可通过 [Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm) 和 [App Store](https://apps.apple.com/us/app/secret-ai/id6744668980) 获取，后者列出 iPhone、iPad、Mac 和 Apple Vision。',
          'Android 版本 1.12.2，最近更新于 2026年10月15日（2026年10月19日页面状态）。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速解答',
        anchor: 'quick-answer',
      },
      {
        label: 'Secret AI 是什么？',
        anchor: 'what-is-secret-ai',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '来源已确认的功能',
        anchor: 'key-features',
      },
      {
        label: '隐私与数据处理',
        anchor: 'privacy',
      },
      {
        label: '我们无法核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives',
      },
      {
        label: '常见问题',
        anchor: 'faq',
      },
      {
        label: '结论',
        anchor: 'verdict',
      },
      {
        label: '来源',
        anchor: 'sources',
      },
      {
        label: '相关阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Secret AI 是一款 iPhone、Android 和 Mac 应用，在设备上运行开源 AI 模型进行私密聊天，提供免费版和付费方案。',
          },
          {
            type: 'plain-terms',
            text: '安装应用，下载一次 AI 模型，之后就能聊天、与自定义角色对话或发送照片；据开发者称，聊天在设备上生成，而 MCP 工具调用以及可选的自托管服务器或 Ollama 连接会把数据发送到设备之外。',
          },
        ],
        items: [
          '发布者：Secret AI L.L.C.，注册于怀俄明州，设有官方网站、Discord 社区和 Hugging Face 页面。',
          '履历：2025年5月12日起在 Google Play 上架，下载量 5 万次以上，976 条评分，平均 4.1；App Store 显示 83 条评分，平均 4.5。',
          '隐私声明：Google Play 的“数据安全”部分称不收集数据，也不与第三方共享。',
          '运行要求：Android 7.0 或更高版本，iOS 和 iPadOS 17.0 或更高版本，macOS 14.0 或更高版本；AI 模型需在应用内另行下载。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这里的内容全部来自应用商店页面、官方网站和隐私政策；PromptQuorum 未测试该应用，因此离线运行、回答质量和速度均未得到确认。',
          },
        ],
      },
      overview: {
        id: 'what-is-secret-ai',
        title: 'Secret AI 是什么？',
        content: [
          '**Secret AI 是一款聊天应用，从 Hugging Face 下载开源语言模型，并用自带的 llama.cpp、MNN 和 MLX 引擎在手机或 Mac 上运行。** [官方网站](https://secretai.io)介绍了在普通聊天之外的三项补充：带有专属头像和壁纸的自定义 AI 角色、只需教一次的可移植 SKILL.md 文件形式的 Skills，以及工具调用会在聊天中弹出供你批准的 MCP 服务器。',
          '各国应用商店的标题不同，例如 Google Play 英文版为“Secret AI: Local AI Chat”，德国为“Secret AI: Lokaler KI-Chatbot”，日本为“私密でオフラインの本地AI助理”。它们指的是同一款应用。App Store 列出 18 种界面语言。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**请从 Google Play 或 App Store 安装；AI 模型需在应用内另行下载。**',
        ],
        columns: [
          '平台',
          '获取渠道',
        ],
        rows: [
          {
            '平台': 'Android',
            '获取渠道': '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)',
          },
          {
            '平台': 'iPhone / iPad / Mac',
            '获取渠道': '[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)',
          },
          {
            '平台': '价格',
            '获取渠道': '免费但有每日上限；Plus $4.99/月，Pro $9.99/月（美国 App Store）',
          },
          {
            '平台': '官网',
            '获取渠道': '[secretai.io](https://secretai.io)',
          },
          {
            '平台': '隐私政策',
            '获取渠道': '[隐私政策](https://secretai.io/legal/privacy)',
          },
          {
            '平台': '源代码',
            '获取渠道': '未公开',
          },
        ],
        note: 'App Store 列出了 Mac 版本（macOS 14.0 或更高），官网也有 macOS 标签页；PromptQuorum 未核实它是原生 Mac 版本，还是在 Mac 上运行的 iPad 应用。页面上读不到 iOS 版本号，因此这里给出的版本是 Google Play 上的 Android 版本，最近更新于 2026年10月15日。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下各项均来自 Google Play 说明、App Store 页面或官方网站，均未经独立测试。**',
        ],
        items: [
          '**据开发者称，下载模型后可离线运行。** 模型来自 Hugging Face；官网列出了 GGUF、MNN 和 MLX 文件目录，Play 说明还提到可以连接自托管的 LLM 服务器或 Ollama。导入自己的模型文件则没有说明。',
          '**三种引擎，三类芯片。** llama.cpp（GGUF）在免费方案中使用 CPU；Pro 方案增加 GPU 和 NPU 加速，以及 MNN 和 MLX 引擎。',
          '**图像输入。** 照片由 Qwen3.5 VL 或 Gemma 4 等视觉模型在设备上分析；不限次数的图像理解属于 Pro 方案。',
          '**角色、Skills 和 MCP。** 角色包含名称、头像和性格，并可导入角色卡；Skill 是按聊天单独开启的 SKILL.md 文件；工具默认关闭，每个工具在首次运行时都需要批准。免费方案允许一个 MCP 服务器，付费方案允许更多。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据处理',
        content: [
          '**Google Play 的“数据安全”部分声明“未收集任何数据”和“未与第三方共享数据”。** [隐私政策](https://secretai.io/legal/privacy)最近更新于 2025年5月13日，称应用不收集对话、使用数据、崩溃报告或照片，图像仅以加密形式存储在设备上，网络仅用于下载模型。',
          '**有两项功能在设计上会把数据发送到设备之外。** Play 说明称，你可以连接网络中的自托管 LLM 服务器或 Ollama。官网上的 MCP 工具调用演示会询问“Send this conversation to deepwiki?”，并注明该工具“runs on deepwiki, not on this device”——远程 MCP 服务器会收到你发送给它的内容。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发者的声明，不是审计结果，且源码未公开。该政策早于工具、Skills 和 MCP 功能，没有对这些功能作出说明。PromptQuorum 未检查该应用的网络流量。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**源码与许可证。** 官网和应用商店页面上都没有找到代码仓库，因此无法对照代码核实隐私和离线运行的说法。',
          '**实际表现。** PromptQuorum 未运行该应用，因此速度、耗电情况、回答质量以及各模型所需的硬件均不明；页面未注明最低内存要求。',
          '**Mac 版本。** 尚不清楚 Mac 版本是原生应用，还是在 Apple 芯片上运行的 iPad 应用。',
          '**广告。** Plus 方案标有“No Ads”，但页面没有说明免费方案中广告出现在哪里，而“数据安全”部分声明不收集数据。',
          '**独立反馈。** 除应用商店评分和官网上的用户评价外，未找到第三方评测或讨论。',
          '**语音输入与输出。** 应用商店页面和官网都没有说明。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格／许可证',
          '主要区别',
        ],
        rows: [
          {
            '应用': '[Enclave AI](/zh/power-local-llm/enclave-ai-review)',
            '平台': 'iPhone、iPad、Mac',
            '价格／许可证': '免费增值／闭源',
            '主要区别': '仅限 Apple 设备的离线助手；付费 Pro 方案增加云端模型',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格／许可证': '免费／MIT',
            '主要区别': '面向 iPhone 和 Android 的免费开源本地 LLM 客户端',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格／许可证': '免费／MIT',
            '主要区别': '开源离线聊天，带设备端文档问答和内置基准测试',
          },
          {
            '应用': '[LLM Hub](/zh/power-local-llm/llm-hub-review)',
            '平台': 'Android、iOS',
            '价格／许可证': '免费增值／源码可见',
            '主要区别': '源码公开但采用非商业许可证，高级版为一次性解锁',
          },
        ],
        note: '竞品信息变化频繁；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '终身方案和其他国家的方案要多少钱？',
            a: '2026年10月19日，美国 App Store 列出 Plus 终身版 $59.99、Pro 终身版 $119.99；其他地区的 Plus / Pro 月费为：德国、西班牙和法国 5,99 € / 9,99 €，日本 ¥800 / ¥1,500（日元），巴西 R$ 24,90 / R$ 49,90，韩国 ₩6,600 / ₩14,000，沙特阿拉伯 19.99 / 39.99 SAR，中国 ¥38 / ¥68（人民币）。Google Play 各商店只显示一个价格区间，例如美国为 $4.99–$119.99，且与 App Store 的价格不同；价格随时可能变化。',
          },
          {
            q: '免费方案允许发送多少条消息？',
            a: '隐私政策称免费上限为每天 10 条消息，在设备上计数；官网补充说，分享应用可以解锁更多。',
          },
          {
            q: '需要账号吗？',
            a: '不需要：页面表示无需注册或账号。只有购买方案时才需要 Google 或 Apple 账号，由应用商店处理。',
          },
          {
            q: '适合儿童使用吗？',
            a: 'Google Play 评级为 Teen，App Store 为 13+，且 App Store 的类别中列有用户生成内容；隐私政策称应用不面向 13 岁以下儿童。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Secret AI 在 iPhone、Android 和 Mac 上用开源模型提供私密离线聊天，并带有角色、Skills 和 MCP 工具，设有每日限额的免费版，以及解锁 GPU/NPU 引擎和视觉功能的付费方案。但它的说法目前无法核实：源码未公开，隐私政策也没有涵盖较新的工具和 MCP 功能，其中一些会把数据发送到你选择的服务器。它适合想要功能丰富的私密聊天应用、并愿意先试用免费版的用户；需要公开代码的读者可对比同为 MIT 许可证的 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Private Mind](/zh/power-local-llm/private-mind-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 Secret AI](https://play.google.com/store/apps/details?id=io.secretai.llm) — 说明文字、版本、更新日期、数据安全部分和价格区间，2026年10月19日查阅。',
          '[App Store 上的 Secret AI](https://apps.apple.com/us/app/secret-ai/id6744668980) — 兼容性、方案价格、语言和更新说明，2026年10月19日查阅。',
          '[secretai.io](https://secretai.io) — 功能、方案、模型目录和 MCP 演示，2026年10月19日查阅。',
          '[隐私政策](https://secretai.io/legal/privacy) — 数据处理声明，最近更新于 2025年5月13日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Enclave AI 评测](/zh/power-local-llm/enclave-ai-review) — 面向 iPhone、iPad 和 Mac 的离线 AI 助手。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向 iOS 和 Android 的免费开源本地 LLM 客户端。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 带设备端文档问答的开源离线聊天应用。',
          '[Android 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用盘点。',
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
    heroImage: '/images/secret-ai-review-hero-ko.webp',
    title: 'Secret AI 리뷰: iPhone, Android, Mac용 비공개 오프라인 AI 채팅',
    seoTitle: 'Secret AI 리뷰: iPhone·Android·Mac 채팅',
    intro: 'Secret AI는 와이오밍주에 등록된 [Secret AI L.L.C.](https://secretai.io)의 비공개 AI 채팅 앱으로, 오픈소스 언어 모델을 휴대폰이나 Mac에서 실행하며 사용자 지정 캐릭터, Skills, MCP 도구를 더했습니다. [Android](https://play.google.com/store/apps/details?id=io.secretai.llm)와 [iPhone·iPad](https://apps.apple.com/us/app/secret-ai/id6744668980)용으로 나와 있고, App Store에는 Mac 버전도 표시됩니다. 이 리뷰는 두 스토어 등록 정보, 공식 웹사이트와 개인정보처리방침(2026년 10월 19일 확인)을 바탕으로 하며, PromptQuorum은 앱을 직접 사용해 보지 않았습니다. Secret AI라는 이름을 쓰는 다른 제품도 있으므로, 이 리뷰는 Android 패키지 io.secretai.llm 앱만 다룹니다.',
    metaDescription: 'Secret AI 리뷰: 캐릭터, Skills, MCP 도구를 갖춘 iPhone·Android·Mac용 비공개 오프라인 AI 채팅 앱. 무료 플랜과 유료 플랜, 소스는 비공개입니다.',
    twitterDescription: 'Secret AI 리뷰: iPhone, Android, Mac용 비공개 오프라인 AI 채팅. 무료 플랜과 Plus·Pro 플랜, 소스 비공개, 주장은 미검증.',
    audience: '휴대폰이나 Mac에서 쓸 비공개 AI 채팅 앱을 찾으며, 출처가 확인해 주는 내용, 개발자의 주장에 그치는 내용, 유료 플랜이 열어 주는 기능을 알고 싶은 사용자.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Secret AI 리뷰',
    targetKeywords: [
      'secret ai 리뷰',
      'secret ai 앱',
      'secret ai 오프라인 채팅',
      'iphone android 오프라인 ai 채팅',
      'iphone android mac 로컬 llm 앱',
      '휴대폰 ai 채팅 mcp 도구',
      'io.secretai.llm',
    ],
    current_models_mentioned: [
      'Qwen3.5 VL',
      'Gemma 4',
      'LFM2.5 VL',
      'MiniCPM 5',
      'DeepSeek R1 0528',
      'gpt-oss',
      'Llama 4',
      'Phi 4',
      'Mistral',
    ],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
      'Android',
    ],
    leadAnswerBlock: '**Secret AI는 개발자에 따르면 오픈소스 AI 모델을 기기에서 실행해 채팅, 캐릭터, 사진을 비공개로 유지하는 휴대폰·Mac 앱입니다(단, MCP 도구 호출과 선택적 원격 모델 서버는 데이터를 기기 밖으로 보냅니다).** 소스 코드는 공개되지 않았고, 개인정보처리방침은 앱에 도구, Skills, MCP 서버가 추가되기 전인 2025년 5월에 마지막으로 업데이트되었습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Secret AI는 무료이며 오프라인으로 작동하나요?',
        answer: '설치는 무료이며 하루 메시지 한도가 있고, 유료 Plus 및 Pro 플랜이 있습니다. 개발자에 따르면 Hugging Face에서 모델을 내려받은 뒤에는 인터넷 연결 없이 기기에서 채팅이 생성됩니다.',
        bullets: [
          'GGUF(llama.cpp), MNN, MLX 모델을 실행하며, 개발자는 Qwen3.5 VL, Gemma 4, LFM2.5 VL, MiniCPM 5, gpt-oss, Llama 4, Phi 4, Mistral을 제공 모델로 꼽습니다.',
          '사용자 지정 AI 캐릭터, SKILL.md 파일로 작성하는 Skills, 도구 호출을 사용자가 승인하는 MCP 서버를 더했습니다.',
          '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)와 [App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)에서 받을 수 있으며, App Store에는 iPhone, iPad, Mac, Apple Vision이 표시됩니다.',
          'Android 버전 1.12.2, 2026년 10월 15일 마지막 업데이트(2026년 10월 19일 기준 등록 정보).',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Secret AI란?',
        anchor: 'what-is-secret-ai',
      },
      {
        label: '구하는 방법',
        anchor: 'get-it',
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '개인정보 보호와 데이터 처리',
        anchor: 'privacy',
      },
      {
        label: '확인하지 못한 내용',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 앱과 대안',
        anchor: 'vs-alternatives',
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq',
      },
      {
        label: '총평',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Secret AI는 오픈소스 AI 모델을 기기에서 실행해 비공개로 채팅하는 iPhone, Android, Mac 앱이며, 무료 플랜과 유료 플랜이 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 AI 모델을 한 번 내려받으면 채팅하거나 사용자 지정 캐릭터와 대화하거나 사진을 보낼 수 있으며, 개발자에 따르면 채팅은 기기에서 생성되지만, MCP 도구 호출과 선택적으로 연결하는 자체 호스팅 서버 또는 Ollama는 데이터를 기기 밖으로 보냅니다.',
          },
        ],
        items: [
          '게시자: 와이오밍주에 등록된 Secret AI L.L.C.이며, 자체 웹사이트와 Discord 커뮤니티, Hugging Face 페이지를 운영합니다.',
          '이력: 2025년 5월 12일부터 Google Play에 올라와 있으며 다운로드 5만 회 이상, 평점 976건에 평균 4.1이고, App Store에는 평점 83건에 평균 4.5가 표시됩니다.',
          '개인정보 표시: Google Play의 데이터 보안 섹션은 수집하는 데이터가 없고 제3자와 공유하지 않는다고 밝힙니다.',
          '요구 사항: Android 7.0 이상, iOS 및 iPadOS 17.0 이상, macOS 14.0 이상이며, AI 모델은 앱 안에서 별도로 내려받습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '여기 담긴 내용은 모두 스토어 등록 정보, 웹사이트, 개인정보처리방침에서 나온 것이며, PromptQuorum은 앱을 테스트하지 않았으므로 오프라인 동작, 답변 품질, 속도는 확인되지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-secret-ai',
        title: 'Secret AI란?',
        content: [
          '**Secret AI는 Hugging Face에서 오픈소스 언어 모델을 내려받아 자체 llama.cpp, MNN, MLX 엔진으로 휴대폰이나 Mac에서 실행하는 채팅 앱입니다.** [공식 웹사이트](https://secretai.io)는 일반 채팅에 더해진 세 가지를 설명합니다. 고유한 아바타와 배경화면을 가진 사용자 지정 AI 캐릭터, 한 번 가르치면 어디서나 쓰는 SKILL.md 파일 형태의 Skills, 도구 호출을 채팅 안에서 승인하는 MCP 서버입니다.',
          '스토어 제목은 나라마다 다릅니다. 예를 들어 Google Play 영어판은 "Secret AI: Local AI Chat", 독일은 "Secret AI: Lokaler KI-Chatbot", 일본은 "私密でオフラインの本地AI助理"입니다. 모두 같은 앱을 가리킵니다. App Store에는 인터페이스 언어 18개가 표시됩니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: [
          '**Google Play 또는 App Store에서 설치하세요. AI 모델은 앱 안에서 별도로 내려받습니다.**',
        ],
        columns: [
          '플랫폼',
          '구하는 곳',
        ],
        rows: [
          {
            '플랫폼': 'Android',
            '구하는 곳': '[Google Play](https://play.google.com/store/apps/details?id=io.secretai.llm)',
          },
          {
            '플랫폼': 'iPhone / iPad / Mac',
            '구하는 곳': '[App Store](https://apps.apple.com/us/app/secret-ai/id6744668980)',
          },
          {
            '플랫폼': '가격',
            '구하는 곳': '무료(일일 한도), Plus ₩6,600/월, Pro ₩14,000/월(한국 App Store)',
          },
          {
            '플랫폼': '웹사이트',
            '구하는 곳': '[secretai.io](https://secretai.io)',
          },
          {
            '플랫폼': '개인정보처리방침',
            '구하는 곳': '[개인정보처리방침](https://secretai.io/legal/privacy)',
          },
          {
            '플랫폼': '소스 코드',
            '구하는 곳': '비공개',
          },
        ],
        note: 'Mac 버전은 App Store에 표시되고(macOS 14.0 이상) 웹사이트에도 macOS 탭이 있지만, PromptQuorum은 네이티브 Mac 빌드인지 Mac에서 실행되는 iPad 앱인지 확인하지 않았습니다. 등록 정보에서 iOS 버전 번호를 읽을 수 없어, 여기 적은 버전은 Google Play의 Android 버전이며 2026년 10월 15일에 마지막으로 업데이트되었습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명문, App Store 등록 정보, 웹사이트에서 가져온 것이며, 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**개발사에 따르면 모델을 내려받은 뒤에는 오프라인 실행이 가능합니다.** 모델은 Hugging Face에서 받으며, 웹사이트는 GGUF, MNN, MLX 파일 카탈로그를 제시하고 Play 설명문은 자체 호스팅 LLM 서버나 Ollama에 연결하는 방법을 덧붙입니다. 사용자가 가진 모델 파일을 가져오는 기능은 설명되어 있지 않습니다.',
          '**엔진 세 가지와 칩 세 가지.** llama.cpp(GGUF)는 무료 플랜에서 CPU로 실행되며, Pro 플랜은 GPU와 NPU 가속, MNN 및 MLX 엔진을 더합니다.',
          '**이미지 입력.** 사진은 Qwen3.5 VL이나 Gemma 4 같은 비전 모델로 기기에서 분석되며, 무제한 이미지 이해는 Pro 플랜에 포함됩니다.',
          '**캐릭터, Skills, MCP.** 캐릭터는 이름, 아바타, 성격을 갖고 캐릭터 카드를 가져올 수 있습니다. Skill은 채팅마다 켜는 SKILL.md 파일이고, 도구는 켜기 전까지 꺼져 있으며 처음 실행될 때마다 승인합니다. 무료 플랜은 MCP 서버 하나를, 유료 플랜은 더 많이 허용합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 처리',
        content: [
          '**Google Play의 데이터 보안 섹션은 "수집되는 데이터 없음"과 "제3자와 공유되는 데이터 없음"을 밝힙니다.** 2025년 5월 13일에 마지막으로 업데이트된 [개인정보처리방침](https://secretai.io/legal/privacy)은 앱이 대화, 사용 데이터, 비정상 종료 보고서, 사진을 수집하지 않으며, 이미지는 기기에 암호화된 형태로만 저장하고, 네트워크는 모델을 내려받을 때만 쓴다고 설명합니다.',
          '**두 기능은 설계상 데이터를 기기 밖으로 보냅니다.** Play 설명문은 같은 네트워크의 자체 호스팅 LLM 서버나 Ollama에 연결할 수 있다고 밝힙니다. 웹사이트의 MCP 도구 호출 데모는 "Send this conversation to deepwiki?"라고 묻고 해당 도구가 "runs on deepwiki, not on this device"라고 알립니다. 원격 MCP 서버는 사용자가 보내는 내용을 받습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 선언일 뿐 감사 결과가 아니며 소스 코드도 공개되지 않았습니다. 개인정보처리방침은 도구, Skills, MCP 기능보다 먼저 작성되어 이들을 다루지 않습니다. PromptQuorum은 앱의 네트워크 트래픽을 점검하지 않았습니다.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**소스 코드와 라이선스.** 웹사이트와 스토어 등록 정보에서 저장소를 찾지 못해, 개인정보 보호와 오프라인 동작에 대한 주장을 코드와 대조할 수 없습니다.',
          '**실제 동작.** PromptQuorum은 앱을 실행하지 않았으므로 속도, 배터리 소모, 답변 품질, 모델별 필요 사양을 알 수 없으며, 등록 정보에는 최소 RAM도 적혀 있지 않습니다.',
          '**Mac 빌드.** Mac 버전이 네이티브인지, Apple silicon에서 실행되는 iPad 앱인지 분명하지 않습니다.',
          '**광고.** Plus 플랜에는 "No Ads"가 표시되지만, 무료 플랜에서 광고가 어디에 나오는지는 등록 정보에 없으며 데이터 보안 섹션은 데이터 수집이 없다고 밝힙니다.',
          '**독립적인 평가.** 스토어 평점과 웹사이트의 사용 후기 외에 제3자의 리뷰나 논의는 찾지 못했습니다.',
          '**음성 입력과 출력.** 스토어 등록 정보와 웹사이트 어디에도 설명되어 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이',
        ],
        rows: [
          {
            '앱': '[Enclave AI](/ko/power-local-llm/enclave-ai-review)',
            '플랫폼': 'iPhone, iPad, Mac',
            '가격 / 라이선스': '부분 유료 / 비공개 소스',
            '핵심 차이': 'Apple 전용 오프라인 어시스턴트이며, 유료 Pro 플랜은 클라우드 모델을 추가',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': 'iPhone과 Android용 무료 오픈소스 로컬 LLM 클라이언트',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '오픈소스 오프라인 채팅, 기기 내 문서 질의응답과 내장 벤치마크 제공',
          },
          {
            '앱': '[LLM Hub](/ko/power-local-llm/llm-hub-review)',
            '플랫폼': 'Android, iOS',
            '가격 / 라이선스': '부분 유료 / 소스 공개(source-available)',
            '핵심 차이': '비상업 라이선스로 소스 코드를 공개하며, 1회 결제로 Premium을 해제',
          },
        ],
        note: '경쟁 앱의 세부 정보는 자주 바뀌므로 각 앱의 등록 페이지에서 현재 가격, 라이선스, 플랫폼을 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '평생 이용 플랜과 다른 나라의 플랜은 얼마인가요?',
            a: '2026년 10월 19일 기준 App Store는 미국에서 Plus Lifetime을 $59.99, Pro Lifetime을 $119.99로 표시했고, 다른 나라의 Plus / Pro 월 요금은 독일·스페인·프랑스 5,99 € / 9,99 €, 일본 ¥800 / ¥1,500, 브라질 R$ 24,90 / R$ 49,90, 한국 ₩6,600 / ₩14,000, 사우디아라비아 19.99 / 39.99 SAR, 중국 ¥38 / ¥68이었습니다. Google Play는 스토어마다 가격 범위만 표시하며(예: 미국 $4.99–$119.99) App Store와 가격이 다릅니다. 가격은 언제든 바뀔 수 있습니다.',
          },
          {
            q: '무료 플랜은 메시지를 얼마나 허용하나요?',
            a: '개인정보처리방침은 하루 10개 메시지의 무료 한도가 기기에서 집계된다고 밝히며, 웹사이트는 앱을 공유하면 더 많이 해제할 수 있다고 덧붙입니다.',
          },
          {
            q: '계정이 필요한가요?',
            a: '아니요. 등록 정보는 가입이나 계정이 필요 없다고 밝힙니다. 플랜을 구매할 때만 스토어가 처리하는 Google 또는 Apple 계정이 필요합니다.',
          },
          {
            q: '어린이에게 적합한가요?',
            a: 'Google Play는 Teen, App Store는 13+로 분류하며 App Store는 사용자 생성 콘텐츠를 해당 범주에 표시합니다. 개인정보처리방침은 13세 미만 어린이를 대상으로 하지 않는다고 밝힙니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: 'Secret AI는 오픈소스 모델, 캐릭터, Skills, MCP 도구로 iPhone, Android, Mac에서 비공개 오프라인 채팅을 제공하며, 하루 한도가 있는 무료 플랜과 GPU/NPU 엔진 및 비전을 위한 유료 플랜을 갖췄습니다. 다만 주장은 아직 확인할 수 없습니다. 소스 코드는 공개되지 않았고, 개인정보처리방침은 새로 추가된 도구와 MCP 기능을 다루지 않으며, 그중 일부는 사용자가 고른 서버로 데이터를 보냅니다. 기능이 풍부한 비공개 채팅 앱을 원하고 무료 플랜부터 써 보려는 사용자에게 어울리며, 공개된 코드가 필요하다면 둘 다 MIT 라이선스인 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private Mind](/ko/power-local-llm/private-mind-review)와 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 Secret AI](https://play.google.com/store/apps/details?id=io.secretai.llm) — 설명문, 버전, 업데이트 날짜, 데이터 보안 섹션, 가격 범위(2026년 10월 19일 확인).',
          '[App Store의 Secret AI](https://apps.apple.com/us/app/secret-ai/id6744668980) — 호환성, 플랜 가격, 언어, 릴리스 노트(2026년 10월 19일 확인).',
          '[secretai.io](https://secretai.io) — 기능, 플랜, 모델 카탈로그, MCP 데모(2026년 10월 19일 확인).',
          '[개인정보처리방침](https://secretai.io/legal/privacy) — 데이터 처리에 관한 설명(2025년 5월 13일 마지막 업데이트).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Enclave AI 리뷰](/ko/power-local-llm/enclave-ai-review) — iPhone, iPad, Mac용 오프라인 AI 어시스턴트.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 로컬 LLM 클라이언트.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — 기기 내 문서 질의응답을 지원하는 오픈소스 오프라인 채팅 앱.',
          '[Android용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 앱을 더 넓게 다룬 비교 글.',
        ],
      },
    },
  },
}
