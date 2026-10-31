// Local AI Chat Pocket Review: Offline LLM and Image Chat for iPhone and iPad
// Slug: local-ai-chat-pocket-review
// Companion to: locally-ai-review, private-mind-review, oscilla-review, pocketpal-ai-review, mlxhub-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-06',
    dateModified: '2026-10-06',
    next_refresh_due: '2027-04-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-chat-pocket-review-hero-en.webp',
    title: 'Local AI Chat Pocket Review: Offline LLM and Image Chat for iPhone and iPad',
    seoTitle: 'Local AI Chat Pocket Review: Offline LLM Chat for iPhone and iPad',
    intro:
      'Local AI Chat - pocket, which its own site calls Pocket, is an iPhone and iPad app that downloads open language models to the device, generates images, and chats with no connection. This review covers what its App Store listing, product site and privacy policy document, what is unclear, and how it compares with other iOS local-AI apps.',
    metaDescription:
      'Local AI Chat Pocket review: iPhone and iPad app for offline on-device LLM and image chat. Pricing from $6.99 weekly, iOS 18.6 requirement, privacy policy and cloud option, limits, alternatives.',
    twitterDescription:
      'Local AI Chat Pocket review: a freemium iOS/iPadOS app for offline on-device models and image generation. Pricing, requirements, privacy policy, limits, and alternatives.',
    audience:
      'iPhone and iPad owners who want to run open models offline on the device — covers features, requirements, pricing, privacy, limits, and alternatives.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Chat Pocket review',
    targetKeywords: [
      'local ai chat pocket review',
      'local ai chat pocket ios',
      'pocket offline llm iphone',
      'rica harz pocket app',
      'run llm on iphone offline',
      'offline ai chat ipad',
      'on-device image generation iphone',
      'private llm app ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Warning: Local AI Chat - pocket has had no update since 27 May 2026 (version 0.5.6), so it may be unmaintained — check that it works on your device before relying on it.** **Local AI Chat - pocket is a freemium, closed-source iOS and iPadOS app that downloads open models such as Llama, Gemma, Qwen and Mistral to the device, generates images, and chats offline.** Per its App Store listing it needs iOS or iPadOS 18.6 or later and is free to download, with weekly, monthly and yearly in-app purchases. This review covers version 0.5.6 and is based on the public listing, product site and privacy policy, not hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is Local AI Chat Pocket worth installing for offline AI on an iPhone or iPad?',
        answer:
          'Maybe, if you want a simple offline chat app with a broad model list, image generation and Shortcuts support, and you are on iOS 18.6 or later. Check three things first: the paid tiers are priced weekly, monthly and yearly with no stated feature split, the app is closed source at version 0.5.6, and the privacy policy describes anonymous telemetry plus an optional cloud mode. Private Mind and PocketPal AI are open-source alternatives.',
        bullets: [
          'Free download with in-app purchases: $6.99 weekly, $14.99 monthly, or $99.99 yearly.',
          'Downloads open models (Llama, Gemma, Qwen, Mistral, Phi) and also supports image generation.',
          'Shortcuts integration, adjustable themes and fonts, and an editable system prompt.',
          'Needs iOS or iPadOS 18.6 or later; the listing also shows visionOS 2.6 or later.',
          'Closed source; the privacy policy lists anonymous telemetry and an optional, off-by-default cloud mode.',
        ],
        updatedDate: '2026-10-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Local AI Chat Pocket', anchor: 'get-it' },
      { label: 'Local AI Chat Pocket at a Glance', anchor: 'at-a-glance' },
      { label: 'What Local AI Chat Pocket Is', anchor: 'what-is-pocket' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Device Requirements', anchor: 'requirements' },
      { label: 'Pricing and Privacy', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Local AI Chat Pocket vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Local AI Chat Pocket', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Local AI Chat Pocket', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI Chat - pocket, by developer Rica Harz, is a freemium iPhone and iPad app that downloads open language models to the device, generates images, and chats offline.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a pocket-sized offline chatbot: once a model is on the phone, no connection is needed, and the app adds Shortcuts and image generation on top.',
          },
        ],
        items: [
          'Version reviewed: 0.5.6, as shown on the [App Store listing](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661).',
          'Price: free to download; in-app purchases are listed at $6.99 weekly, $14.99 monthly and $99.99 yearly.',
          'Platform: iOS and iPadOS 18.6 or later; the listing also shows visionOS 2.6 or later.',
          'Standout features: broad model list, image generation, Shortcuts integration, editable system prompt.',
          'Openness: closed source; no public repository was found.',
        ],
      },
      getItPocket: {
        id: 'get-it',
        title: 'Get Local AI Chat Pocket',
        content: [
          '**Local AI Chat - pocket is distributed through the Apple App Store.** The download is 256.4 MB and the app is a free download with in-app purchases.',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/directory), which lists the app alongside other mobile and desktop local AI tools.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Apple App Store',
            'Get It': '[Local AI Chat - pocket on the App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)',
          },
          {
            'Channel': 'Website',
            'Get It': '[oneai.framer.website](https://oneai.framer.website/)',
          },
          {
            'Channel': 'Support',
            'Get It': '[Pocket support page](https://oneai.framer.website/support)',
          },
          {
            'Channel': 'Privacy policy',
            'Get It': '[Pocket privacy policy](https://oneai.framer.website/privacy)',
          },
        ],
        note: 'No public source repository was found. There is no Android or Mac build; the listing covers iPhone, iPad and Apple Vision only.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Local AI Chat Pocket at a Glance',
        columns: ['Attribute', 'Local AI Chat Pocket'],
        rows: [
          { 'Attribute': 'Platform', 'Local AI Chat Pocket': 'iOS, iPadOS (18.6+)' },
          { 'Attribute': 'Price', 'Local AI Chat Pocket': 'Free, in-app purchases' },
          { 'Attribute': 'License', 'Local AI Chat Pocket': 'Closed source' },
          { 'Attribute': 'Runs fully offline', 'Local AI Chat Pocket': 'Yes, once a model is on the device' },
          { 'Attribute': 'In-app model downloads', 'Local AI Chat Pocket': 'Not stated in the listing' },
          { 'Attribute': 'Image input', 'Local AI Chat Pocket': 'Not stated in the listing' },
          { 'Attribute': 'Image generation', 'Local AI Chat Pocket': 'Yes, on-device image models' },
          { 'Attribute': 'Voice input / output', 'Local AI Chat Pocket': 'Not stated in the listing' },
        ],
        note: 'Attributes follow the mobile-chat comparison used in the Local LLM Software Directory. They come from the App Store listing and product site, which do not cover every feature.',
      },
      whatIsPocket: {
        id: 'what-is-pocket',
        title: 'What Local AI Chat Pocket Is',
        content: [
          '**Local AI Chat - pocket is an offline chat app built around switchable on-device models.** The listing pitches "the simplest way to use private LLMs" that "works fully offline", and its product site calls the app Pocket, "the local LLM app that keeps your data private".',
          'It is published by Rica Harz, an individual developer, and is categorized as Productivity. Do not confuse it with similarly named apps such as "Private AI Chat: Pocket LLM", which has a different developer.',
          'This review draws on the App Store listing, the product site and the privacy policy only. It does not include hands-on testing, so speed, stability and answer quality are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an App Store install, then picking a model inside the app.** The listing does not document the first-run flow, so the steps below follow what it states.',
        ],
        numberedItems: [
          {
            title: 'Check device and OS',
            whyItMatters: 'The listing requires iOS or iPadOS 18.6 or later, or visionOS 2.6 or later.',
          },
          {
            title: 'Install the app',
            whyItMatters: 'Get it from the [App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661); the download is 256.4 MB before any model.',
          },
          {
            title: 'Choose a model',
            whyItMatters: 'The listing says you can choose a new model or switch between existing ones in the app; larger models need more of the device\'s memory.',
          },
          {
            title: 'Chat offline, then customize',
            whyItMatters: 'Once a model is on the device, chat works with no connection. Adjust the theme, fonts and system prompt, or call the model from Shortcuts.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The app\'s selling point is a wide model list in a simple interface.** Everything below comes from the App Store listing.',
        ],
        items: [
          '**Language models.** The listing names Llama 3.2 1B and 3B, Llama 3 8B, Mistral 7B, Phi, Gemma 2 2B and 9B, OpenELM, Qwen 3 and Deepseek, mostly as 4-bit builds.',
          '**Image generation.** Image models are supported alongside text models, with a switch between them; the listing does not name which image models.',
          '**Shortcuts.** You can chat with the local model or send its output to other actions through Apple Shortcuts.',
          '**Personalization.** Theme, fonts and the system prompt can be adjusted in the app, and chats can be pinned.',
          '**Languages.** The interface is available in English plus 22 other languages.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Device Requirements',
        content: [
          '**The app requires iOS or iPadOS 18.6 or later, or visionOS 2.6 or later.** The listing gives no RAM figure and no list of supported chips.',
          'Memory is the real limit: a 1B model fits far more devices than a 7B or 9B one. Neither the listing nor the site says which models fit which iPhone, so test a small model first.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Pricing and Privacy',
        content: [
          '**Local AI Chat - pocket is free to download, with in-app purchases listed at $6.99 weekly, $14.99 monthly and $99.99 yearly.** Neither the listing nor the site says what the paid tiers unlock, so check the paywall in the app before relying on a feature.',
          'The listing says "zero data collection" and that your data never leaves the device. The privacy policy, effective February 17, 2026, is more detailed: it describes minimal anonymized telemetry, crash and performance data kept for up to 12 months, and says chats and personal content stay on the device by default.',
          'The policy also describes an optional cloud processing mode, off by default, that would send text, images and chats to the third-party provider TogetherAI. The policy does not cover subscription payments. The app is closed source and this review did not inspect network traffic, so these statements are the developer\'s own.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Offline chat',
            'What it means in real use': 'Chat with downloaded models with no connection.',
            'Limitation / caveat': 'Needs iOS 18.6 and enough memory for the chosen model.',
          },
          {
            'Benefit': 'Wide model list',
            'What it means in real use': 'Llama, Gemma, Qwen, Mistral, Phi and Deepseek in one app.',
            'Limitation / caveat': 'No sizes, fit guidance or runtime are published per device.',
          },
          {
            'Benefit': 'Image generation',
            'What it means in real use': 'Text and image models in the same app.',
            'Limitation / caveat': 'The listing does not name the image models or speeds.',
          },
          {
            'Benefit': 'Shortcuts support',
            'What it means in real use': 'Call the local model from your own automations.',
            'Limitation / caveat': 'Only what the listing states; no action list is published.',
          },
          {
            'Benefit': 'Free to start',
            'What it means in real use': 'No cost to download and try.',
            'Limitation / caveat': 'Paid tiers cost up to $99.99 a year with no stated feature split.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Local AI Chat Pocket vs. Alternatives',
        columns: ['App', 'Platforms', 'Price and license', 'Model source', 'Key difference'],
        rows: [
          {
            'App': 'Local AI Chat Pocket',
            'Platforms': 'iOS, iPadOS',
            'Price and license': 'Freemium, closed source',
            'Model source': 'In-app model list',
            'Key difference': 'Adds image generation and Shortcuts; weekly paid tier',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Platforms': 'iOS, Mac',
            'Price and license': 'Freemium, closed source',
            'Model source': 'In-app model catalog',
            'Key difference': 'Also on Mac; no image generation is listed',
          },
          {
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price and license': 'Free, MIT',
            'Model source': 'Hugging Face downloads',
            'Key difference': 'Open source and on Android too; fully free',
          },
          {
            'App': '[Oscilla](/power-local-llm/oscilla-review)',
            'Platforms': 'iOS',
            'Price and license': 'Free, closed source',
            'Model source': '40+ in-app models',
            'Key difference': 'Larger fixed catalog; no in-app purchases listed',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iOS, Android',
            'Price and license': 'Free, MIT',
            'Model source': 'GGUF models',
            'Key difference': 'Open source, llama.cpp-based, cross-platform',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Local AI Chat Pocket',
        items: [
          '**People who want one offline app for text and image models.** Both are listed in the same interface.',
          '**Shortcuts users.** The Shortcuts integration lets other automations call the local model.',
          '**Anyone who wants a broad model list to try.** Llama, Gemma, Qwen, Mistral and more are named.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Local AI Chat Pocket',
        items: [
          '**Anyone who needs open source.** The code is not public; [Private Mind](/power-local-llm/private-mind-review) and [PocketPal AI](/power-local-llm/pocketpal-ai-review) are open source.',
          '**Android or Mac users.** Only iPhone, iPad and Apple Vision are listed; PocketPal AI and Private Mind both run on Android.',
          '**Devices below iOS or iPadOS 18.6.** The listing sets that floor.',
          '**Anyone who needs a strict no-telemetry guarantee.** The privacy policy describes anonymous telemetry and an optional cloud mode; read it first.',
          '**Anyone who wants a recently updated app.** Version 0.5.6 dates from May 27, 2026, with release notes reading only "Bug fixes and performance improvements."',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Local AI Chat Pocket free?',
            a: 'It is free to download with in-app purchases at $6.99 weekly, $14.99 monthly or $99.99 yearly, as shown on the App Store listing.',
          },
          {
            q: 'Who makes Local AI Chat - pocket?',
            a: 'Rica Harz, an individual developer, per the App Store and the privacy policy. Apps with similar names, such as "Private AI Chat: Pocket LLM", come from different developers.',
          },
          {
            q: 'Can it run without an internet connection?',
            a: 'Yes, once a model is on the device. The optional cloud mode in the privacy policy is off by default.',
          },
          {
            q: 'Does it work on Android or Mac?',
            a: 'No. The listing covers iPhone, iPad and Apple Vision only.',
          },
          {
            q: 'Which models can I run?',
            a: 'The listing names Llama, Gemma, Qwen, Mistral, Phi, OpenELM and Deepseek models, mostly 4-bit builds, plus image models.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Local AI Chat - pocket is a good fit on paper for someone who wants a simple offline chat app with a wide model list, image generation and Shortcuts on an iPhone or iPad running iOS 18.6 or later.',
          'The caveats are transparency, pricing and upkeep: it is closed source, the paid tiers are undocumented, the privacy policy is more nuanced than the listing\'s "zero data collection", and the last update was in May 2026.',
          'If you want open source, start with [Private Mind](/power-local-llm/private-mind-review). If you want image generation and Shortcuts in one app, try the free tier before paying.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Local AI Chat - pocket on the App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) — version, price, requirements, features and developer.',
          '[Pocket product site](https://oneai.framer.website/) — the developer\'s own description of the app.',
          '[Pocket privacy policy](https://oneai.framer.website/privacy) — data collection, telemetry and the optional cloud mode.',
          '[Pocket support page](https://oneai.framer.website/support) — support entry linked from the product site.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a freemium on-device app for iPhone, iPad and Mac.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — an open-source offline chat app for iPhone and Android.',
          '[Oscilla Review](/power-local-llm/oscilla-review) — an iOS app with a fixed catalog of on-device models.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — open-source on-device chat for iOS and Android.',
          '[MLXHub Review](/power-local-llm/mlxhub-review) — an iPhone and iPad app with a LAN server and multi-device model splitting.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-06',
    dateModified: '2026-10-06',
    next_refresh_due: '2027-04-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-chat-pocket-review-hero-de.webp',
    title: 'Local AI Chat Pocket Rezension: Offline-LLM und Bild-Chat für iPhone und iPad',
    seoTitle: 'Local AI Chat Pocket Rezension: Offline-LLM-Chat für iPhone und iPad',
    intro:
      'Local AI Chat - pocket, auf der eigenen Website Pocket genannt, ist eine iPhone- und iPad-App, die offene Sprachmodelle auf das Gerät lädt, Bilder erzeugt und ohne Verbindung chattet. Diese Rezension beschreibt, was App-Store-Eintrag, Produktwebsite und Datenschutzerklärung dokumentieren, was unklar bleibt und wie die App im Vergleich zu anderen lokalen KI-Apps für iOS abschneidet.',
    metaDescription:
      'Local AI Chat Pocket Rezension: iPhone- und iPad-App für Offline-LLM- und Bild-Chat auf dem Gerät. Preise ab $6.99 pro Woche, iOS-18.6-Voraussetzung, Datenschutzerklärung und Cloud-Option, Grenzen, Alternativen.',
    twitterDescription:
      'Local AI Chat Pocket Rezension: eine Freemium-App für iOS/iPadOS für Offline-Modelle auf dem Gerät und Bilderzeugung. Preise, Anforderungen, Datenschutzerklärung, Grenzen und Alternativen.',
    audience:
      'iPhone- und iPad-Nutzer, die offene Modelle offline auf dem Gerät ausführen möchten — behandelt Funktionen, Anforderungen, Preise, Datenschutz, Grenzen und Alternativen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Chat Pocket Rezension',
    targetKeywords: [
      'local ai chat pocket test',
      'local ai chat pocket ios',
      'pocket offline llm iphone',
      'rica harz pocket app',
      'llm offline auf iphone ausführen',
      'offline ki chat ipad',
      'bilderzeugung auf dem iphone lokal',
      'private llm app ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Warnung: Local AI Chat - pocket wurde seit dem 27. Mai 2026 (Version 0.5.6) nicht aktualisiert und wird möglicherweise nicht mehr gepflegt — prüfen Sie vor dem Einsatz, ob die App auf Ihrem Gerät funktioniert.** **Local AI Chat - pocket ist eine nicht quelloffene Freemium-App für iOS und iPadOS, die offene Modelle wie Llama, Gemma, Qwen und Mistral auf das Gerät lädt, Bilder erzeugt und offline chattet.** Laut App-Store-Eintrag setzt sie iOS oder iPadOS 18.6 oder neuer voraus und lässt sich kostenlos herunterladen; es gibt wöchentliche, monatliche und jährliche In-App-Käufe. Diese Rezension behandelt Version 0.5.6 und beruht auf dem öffentlichen Eintrag, der Produktwebsite und der Datenschutzerklärung, nicht auf praktischen Tests.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich Local AI Chat Pocket für Offline-KI auf dem iPhone oder iPad?',
        answer:
          'Vielleicht, wenn Sie eine einfache Offline-Chat-App mit breiter Modellliste, Bilderzeugung und Unterstützung für Kurzbefehle suchen und iOS 18.6 oder neuer nutzen. Prüfen Sie vorher drei Dinge: Die Bezahlstufen werden wöchentlich, monatlich und jährlich berechnet, ohne angegebene Funktionsaufteilung; die App ist in Version 0.5.6 nicht quelloffen; und die Datenschutzerklärung beschreibt anonyme Telemetrie sowie einen optionalen Cloud-Modus. Private Mind und PocketPal AI sind quelloffene Alternativen.',
        bullets: [
          'Kostenloser Download mit In-App-Käufen: $6.99 pro Woche, $14.99 pro Monat oder $99.99 pro Jahr.',
          'Lädt offene Modelle (Llama, Gemma, Qwen, Mistral, Phi) und unterstützt auch Bilderzeugung.',
          'Integration mit Kurzbefehlen, anpassbare Designs und Schriften sowie ein bearbeitbarer System-Prompt.',
          'Benötigt iOS oder iPadOS 18.6 oder neuer; der Eintrag zeigt außerdem visionOS 2.6 oder neuer.',
          'Nicht quelloffen; die Datenschutzerklärung nennt anonyme Telemetrie und einen optionalen, standardmäßig deaktivierten Cloud-Modus.',
        ],
        updatedDate: '2026-10-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Local AI Chat Pocket herunterladen', anchor: 'get-it' },
      { label: 'Local AI Chat Pocket im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Local AI Chat Pocket ist', anchor: 'what-is-pocket' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Geräteanforderungen', anchor: 'requirements' },
      { label: 'Preise und Datenschutz', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Local AI Chat Pocket vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer Local AI Chat Pocket nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer Local AI Chat Pocket nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI Chat - pocket von Rica Harz ist eine Freemium-App für iPhone und iPad, die offene Sprachmodelle auf das Gerät lädt, Bilder erzeugt und offline chattet.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Offline-Chatbot für die Hosentasche vor: Sobald ein Modell auf dem Telefon ist, braucht es keine Verbindung mehr, und die App ergänzt Kurzbefehle und Bilderzeugung.',
          },
        ],
        items: [
          'Getestete Version: 0.5.6, wie im [App-Store-Eintrag](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) angezeigt.',
          'Preis: kostenloser Download; In-App-Käufe sind mit $6.99 pro Woche, $14.99 pro Monat und $99.99 pro Jahr gelistet.',
          'Plattform: iOS und iPadOS 18.6 oder neuer; der Eintrag zeigt außerdem visionOS 2.6 oder neuer.',
          'Besondere Funktionen: breite Modellliste, Bilderzeugung, Integration mit Kurzbefehlen, bearbeitbarer System-Prompt.',
          'Offenheit: nicht quelloffen; es wurde kein öffentliches Repository gefunden.',
        ],
      },
      getItPocket: {
        id: 'get-it',
        title: 'Local AI Chat Pocket herunterladen',
        content: [
          '**Local AI Chat - pocket wird über den Apple App Store vertrieben.** Der Download umfasst 256.4 MB, und die App lässt sich kostenlos laden, mit In-App-Käufen.',
          'Diese Rezension ist ein Begleitartikel zum [Verzeichnis lokaler LLM-Software](/de/directory) von PromptQuorum, das die App neben anderen mobilen und Desktop-Tools für lokale KI listet.',
        ],
        columns: ['Kanal', 'Download'],
        rows: [
          {
            'Kanal': 'Apple App Store',
            'Download': '[Local AI Chat - pocket im App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)',
          },
          {
            'Kanal': 'Website',
            'Download': '[oneai.framer.website](https://oneai.framer.website/)',
          },
          {
            'Kanal': 'Support',
            'Download': '[Support-Seite von Pocket](https://oneai.framer.website/support)',
          },
          {
            'Kanal': 'Datenschutzerklärung',
            'Download': '[Datenschutzerklärung von Pocket](https://oneai.framer.website/privacy)',
          },
        ],
        note: 'Es wurde kein öffentliches Quellcode-Repository gefunden. Es gibt keine Android- oder Mac-Version; der Eintrag deckt nur iPhone, iPad und Apple Vision ab.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Local AI Chat Pocket im Überblick',
        columns: ['Merkmal', 'Local AI Chat Pocket'],
        rows: [
          { 'Merkmal': 'Plattform', 'Local AI Chat Pocket': 'iOS, iPadOS (18.6+)' },
          { 'Merkmal': 'Preis', 'Local AI Chat Pocket': 'Kostenlos, In-App-Käufe' },
          { 'Merkmal': 'Lizenz', 'Local AI Chat Pocket': 'Closed Source' },
          { 'Merkmal': 'Läuft vollständig offline', 'Local AI Chat Pocket': 'Ja, sobald ein Modell auf dem Gerät ist' },
          { 'Merkmal': 'Modell-Downloads in der App', 'Local AI Chat Pocket': 'Im Eintrag nicht angegeben' },
          { 'Merkmal': 'Bildeingabe', 'Local AI Chat Pocket': 'Im Eintrag nicht angegeben' },
          { 'Merkmal': 'Bilderzeugung', 'Local AI Chat Pocket': 'Ja, Bildmodelle auf dem Gerät' },
          { 'Merkmal': 'Spracheingabe / -ausgabe', 'Local AI Chat Pocket': 'Im Eintrag nicht angegeben' },
        ],
        note: 'Die Merkmale folgen dem Vergleichsschema für mobile Chat-Apps im Verzeichnis lokaler LLM-Software. Sie stammen aus dem App-Store-Eintrag und der Produktwebsite, die nicht jede Funktion abdecken.',
      },
      whatIsPocket: {
        id: 'what-is-pocket',
        title: 'Was Local AI Chat Pocket ist',
        content: [
          '**Local AI Chat - pocket ist eine Offline-Chat-App rund um austauschbare Modelle auf dem Gerät.** Der Eintrag wirbt mit „the simplest way to use private LLMs“, die „works fully offline“, und die Produktwebsite nennt die App Pocket, „the local LLM app that keeps your data private“ (Zitate aus dem englischen Eintrag und der englischen Website; sinngemäß: der einfachste Weg, private LLMs zu nutzen; funktioniert vollständig offline; die lokale LLM-App, die Ihre Daten privat hält).',
          'Veröffentlicht wird sie von Rica Harz, einer Einzelperson, und sie ist in der Kategorie Produktivität eingeordnet. Verwechseln Sie sie nicht mit ähnlich benannten Apps wie „Private AI Chat: Pocket LLM“, die von einem anderen Entwickler stammen.',
          'Diese Rezension stützt sich ausschließlich auf den App-Store-Eintrag, die Produktwebsite und die Datenschutzerklärung. Praktische Tests sind nicht enthalten, daher werden Geschwindigkeit, Stabilität und Antwortqualität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus einer Installation über den App Store und anschließend der Modellauswahl in der App.** Der Eintrag dokumentiert den ersten Start nicht, daher folgen die Schritte unten dem, was er angibt.',
        ],
        numberedItems: [
          {
            title: 'Gerät und Betriebssystem prüfen',
            whyItMatters: 'Der Eintrag setzt iOS oder iPadOS 18.6 oder neuer bzw. visionOS 2.6 oder neuer voraus.',
          },
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie sie im [App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) herunter; der Download umfasst 256.4 MB, noch ohne Modell.',
          },
          {
            title: 'Ein Modell auswählen',
            whyItMatters: 'Laut Eintrag können Sie in der App ein neues Modell wählen oder zwischen vorhandenen wechseln; größere Modelle brauchen mehr Speicher des Geräts.',
          },
          {
            title: 'Offline chatten, dann anpassen',
            whyItMatters: 'Sobald ein Modell auf dem Gerät ist, funktioniert der Chat ohne Verbindung. Passen Sie Design, Schriften und System-Prompt an oder rufen Sie das Modell über Kurzbefehle auf.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Das Verkaufsargument der App ist eine breite Modellliste in einer schlichten Oberfläche.** Alles Folgende stammt aus dem App-Store-Eintrag.',
        ],
        items: [
          '**Sprachmodelle.** Der Eintrag nennt Llama 3.2 1B und 3B, Llama 3 8B, Mistral 7B, Phi, Gemma 2 2B und 9B, OpenELM, Qwen 3 und Deepseek, überwiegend als 4-Bit-Varianten.',
          '**Bilderzeugung.** Bildmodelle werden neben Textmodellen unterstützt, mit einem Umschalter zwischen beiden; der Eintrag nennt nicht, welche Bildmodelle.',
          '**Kurzbefehle.** Über Apples Kurzbefehle können Sie mit dem lokalen Modell chatten oder dessen Ausgabe an andere Aktionen weitergeben.',
          '**Personalisierung.** Design, Schriften und System-Prompt lassen sich in der App anpassen, und Chats können angeheftet werden.',
          '**Sprachen.** Die Oberfläche ist auf Englisch sowie in 22 weiteren Sprachen verfügbar.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Geräteanforderungen',
        content: [
          '**Die App setzt iOS oder iPadOS 18.6 oder neuer bzw. visionOS 2.6 oder neuer voraus.** Der Eintrag nennt weder eine RAM-Angabe noch eine Liste unterstützter Chips.',
          'Der Speicher ist die eigentliche Grenze: Ein 1B-Modell passt auf deutlich mehr Geräte als ein 7B- oder 9B-Modell. Weder Eintrag noch Website sagen, welche Modelle auf welches iPhone passen, testen Sie daher zuerst ein kleines Modell.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preise und Datenschutz',
        content: [
          '**Local AI Chat - pocket lässt sich kostenlos herunterladen; In-App-Käufe sind mit $6.99 pro Woche, $14.99 pro Monat und $99.99 pro Jahr gelistet.** Weder der Eintrag noch die Website nennen, was die Bezahlstufen freischalten, prüfen Sie daher die Paywall in der App, bevor Sie sich auf eine Funktion verlassen.',
          'Der Eintrag spricht von „zero data collection“ (englisches Zitat aus dem Eintrag; sinngemäß: keine Datenerhebung) und sagt, Ihre Daten verließen das Gerät nie. Die Datenschutzerklärung mit Stand 17. Februar 2026 ist detaillierter: Sie beschreibt minimale anonymisierte Telemetrie, Absturz- und Leistungsdaten, die bis zu 12 Monate gespeichert werden, und sagt, Chats und persönliche Inhalte blieben standardmäßig auf dem Gerät.',
          'Die Erklärung beschreibt außerdem einen optionalen Cloud-Verarbeitungsmodus, standardmäßig deaktiviert, der Text, Bilder und Chats an den Drittanbieter TogetherAI senden würde. Die Erklärung behandelt keine Abonnementzahlungen. Die App ist nicht quelloffen, und diese Rezension hat den Netzwerkverkehr nicht untersucht, die Angaben stammen also vom Entwickler selbst.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Offline-Chat',
            'Bedeutung im Alltag': 'Chat mit heruntergeladenen Modellen ohne Verbindung.',
            'Einschränkung / Hinweis': 'Braucht iOS 18.6 und genug Speicher für das gewählte Modell.',
          },
          {
            'Vorteil': 'Breite Modellliste',
            'Bedeutung im Alltag': 'Llama, Gemma, Qwen, Mistral, Phi und Deepseek in einer App.',
            'Einschränkung / Hinweis': 'Keine Größen-, Passform- oder Laufzeitangaben pro Gerät veröffentlicht.',
          },
          {
            'Vorteil': 'Bilderzeugung',
            'Bedeutung im Alltag': 'Text- und Bildmodelle in derselben App.',
            'Einschränkung / Hinweis': 'Der Eintrag nennt weder die Bildmodelle noch das Tempo.',
          },
          {
            'Vorteil': 'Unterstützung für Kurzbefehle',
            'Bedeutung im Alltag': 'Das lokale Modell aus eigenen Automationen aufrufen.',
            'Einschränkung / Hinweis': 'Nur, was der Eintrag angibt; keine Aktionsliste veröffentlicht.',
          },
          {
            'Vorteil': 'Kostenloser Einstieg',
            'Bedeutung im Alltag': 'Herunterladen und Ausprobieren ohne Kosten.',
            'Einschränkung / Hinweis': 'Bezahlstufen kosten bis zu $99.99 pro Jahr, ohne angegebene Funktionsaufteilung.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Local AI Chat Pocket vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Modellquelle', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'Local AI Chat Pocket',
            'Plattformen': 'iOS, iPadOS',
            'Preis und Lizenz': 'Freemium, Closed Source',
            'Modellquelle': 'Modellliste in der App',
            'Wichtigster Unterschied': 'Mit Bilderzeugung und Kurzbefehlen; wöchentliche Bezahlstufe',
          },
          {
            'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Plattformen': 'iOS, Mac',
            'Preis und Lizenz': 'Freemium, Closed Source',
            'Modellquelle': 'Modellkatalog in der App',
            'Wichtigster Unterschied': 'Auch für Mac; keine Bilderzeugung gelistet',
          },
          {
            'App': '[Private Mind](/de/power-local-llm/private-mind-review)',
            'Plattformen': 'iOS, Android',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Modellquelle': 'Hugging-Face-Downloads',
            'Wichtigster Unterschied': 'Quelloffen und auch für Android; komplett kostenlos',
          },
          {
            'App': '[Oscilla](/de/power-local-llm/oscilla-review)',
            'Plattformen': 'iOS',
            'Preis und Lizenz': 'Kostenlos, Closed Source',
            'Modellquelle': '40+ Modelle in der App',
            'Wichtigster Unterschied': 'Größerer fester Katalog; keine In-App-Käufe gelistet',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iOS, Android',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Modellquelle': 'GGUF-Modelle',
            'Wichtigster Unterschied': 'Quelloffen, auf llama.cpp basierend, plattformübergreifend',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Apps Dritter ändern sich häufig. Prüfen Sie die aktuellen Details im jeweiligen App-Eintrag, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer Local AI Chat Pocket nutzen sollte',
        items: [
          '**Menschen, die eine Offline-App für Text- und Bildmodelle wollen.** Beides ist in derselben Oberfläche gelistet.',
          '**Nutzer von Kurzbefehlen.** Die Integration mit Kurzbefehlen lässt andere Automationen das lokale Modell aufrufen.',
          '**Alle, die eine breite Modellliste zum Ausprobieren möchten.** Llama, Gemma, Qwen, Mistral und weitere werden genannt.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer Local AI Chat Pocket nicht nutzen sollte',
        items: [
          '**Alle, die Open Source brauchen.** Der Code ist nicht öffentlich; [Private Mind](/de/power-local-llm/private-mind-review) und [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) sind quelloffen.',
          '**Android- oder Mac-Nutzer.** Es sind nur iPhone, iPad und Apple Vision gelistet; PocketPal AI und Private Mind laufen beide unter Android.',
          '**Geräte mit iOS oder iPadOS unter Version 18.6.** Der Eintrag setzt diese Untergrenze.',
          '**Alle, die eine strikte Garantie ohne Telemetrie brauchen.** Die Datenschutzerklärung beschreibt anonyme Telemetrie und einen optionalen Cloud-Modus; lesen Sie sie zuerst.',
          '**Alle, die eine aktuell gepflegte App wollen.** Version 0.5.6 stammt vom 27. Mai 2026, die Versionshinweise lauten nur „Bug fixes and performance improvements.“ (englisches Zitat aus dem Eintrag; sinngemäß: Fehlerbehebungen und Leistungsverbesserungen).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Local AI Chat Pocket kostenlos?',
            a: 'Der Download ist kostenlos, mit In-App-Käufen für $6.99 pro Woche, $14.99 pro Monat oder $99.99 pro Jahr, wie im App-Store-Eintrag angezeigt.',
          },
          {
            q: 'Wer entwickelt Local AI Chat - pocket?',
            a: 'Rica Harz, eine Einzelperson, laut App Store und Datenschutzerklärung. Apps mit ähnlichen Namen, etwa „Private AI Chat: Pocket LLM“, stammen von anderen Entwicklern.',
          },
          {
            q: 'Läuft die App ohne Internetverbindung?',
            a: 'Ja, sobald ein Modell auf dem Gerät ist. Der optionale Cloud-Modus in der Datenschutzerklärung ist standardmäßig deaktiviert.',
          },
          {
            q: 'Läuft sie unter Android oder auf dem Mac?',
            a: 'Nein. Der Eintrag deckt nur iPhone, iPad und Apple Vision ab.',
          },
          {
            q: 'Welche Modelle kann ich ausführen?',
            a: 'Der Eintrag nennt Modelle von Llama, Gemma, Qwen, Mistral, Phi, OpenELM und Deepseek, überwiegend als 4-Bit-Varianten, sowie Bildmodelle.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Local AI Chat - pocket passt auf dem Papier gut zu jemandem, der auf einem iPhone oder iPad mit iOS 18.6 oder neuer eine einfache Offline-Chat-App mit breiter Modellliste, Bilderzeugung und Kurzbefehlen möchte.',
          'Die Vorbehalte sind Transparenz, Preise und Pflege: Die App ist nicht quelloffen, die Bezahlstufen sind nicht dokumentiert, die Datenschutzerklärung ist differenzierter als das „zero data collection“ des Eintrags, und das letzte Update stammt vom Mai 2026.',
          'Wenn Sie Open Source wollen, beginnen Sie mit [Private Mind](/de/power-local-llm/private-mind-review). Wenn Sie Bilderzeugung und Kurzbefehle in einer App möchten, probieren Sie zuerst die kostenlose Stufe aus, bevor Sie zahlen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Local AI Chat - pocket im App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) — Version, Preis, Anforderungen, Funktionen und Entwickler.',
          '[Produktwebsite von Pocket](https://oneai.framer.website/) — die eigene Beschreibung der App durch den Entwickler.',
          '[Datenschutzerklärung von Pocket](https://oneai.framer.website/privacy) — Datenerhebung, Telemetrie und der optionale Cloud-Modus.',
          '[Support-Seite von Pocket](https://oneai.framer.website/support) — von der Produktwebsite verlinkter Support-Einstieg.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Locally-AI-Rezension](/de/power-local-llm/locally-ai-review) — eine Freemium-On-Device-App für iPhone, iPad und Mac.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine quelloffene Offline-Chat-App für iPhone und Android.',
          '[Oscilla-Rezension](/de/power-local-llm/oscilla-review) — eine iOS-App mit festem Katalog von On-Device-Modellen.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — quelloffener On-Device-Chat für iOS und Android.',
          '[MLXHub-Rezension](/de/power-local-llm/mlxhub-review) — eine iPhone- und iPad-App mit LAN-Server und Modellaufteilung auf mehrere Geräte.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/directory) — ein breiteres Verzeichnis lokaler LLM-Tools über alle Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-06',
    dateModified: '2026-10-06',
    next_refresh_due: '2027-04-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-chat-pocket-review-hero-fr.webp',
    title: 'Avis Local AI Chat Pocket: chat LLM et images hors ligne pour iPhone et iPad',
    seoTitle: 'Avis Local AI Chat Pocket: chat LLM hors ligne pour iPhone et iPad',
    intro:
      'Local AI Chat - pocket, que son propre site appelle Pocket, est une application iPhone et iPad qui télécharge des modèles de langage ouverts sur l\'appareil, génère des images et permet de discuter sans connexion. Cet avis couvre ce que documentent sa fiche App Store, son site officiel et sa politique de confidentialité, ce qui reste flou, et la comparaison avec d\'autres applications d\'IA locale pour iOS.',
    metaDescription:
      'Avis Local AI Chat Pocket : application iPhone et iPad pour chat LLM et images hors ligne sur l\'appareil. Tarifs dès $6.99 par semaine, prérequis iOS 18.6, confidentialité et mode cloud, limites, alternatives.',
    twitterDescription:
      'Avis Local AI Chat Pocket : une application iOS/iPadOS freemium pour modèles hors ligne sur l\'appareil et génération d\'images. Tarifs, configuration requise, confidentialité, limites et alternatives.',
    audience:
      'Utilisateurs d\'iPhone et d\'iPad qui veulent exécuter des modèles ouverts hors ligne sur l\'appareil — couvre les fonctionnalités, la configuration requise, les tarifs, la confidentialité, les limites et les alternatives.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis Local AI Chat Pocket',
    targetKeywords: [
      'avis local ai chat pocket',
      'local ai chat pocket ios',
      'pocket llm hors ligne iphone',
      'rica harz application pocket',
      'faire tourner un llm sur iphone hors ligne',
      'chat ia hors ligne ipad',
      'génération d\'images sur iphone en local',
      'application llm privée ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Avertissement : Local AI Chat - pocket n\'a reçu aucune mise à jour depuis le 27 mai 2026 (version 0.5.6) et n\'est peut-être plus maintenue — vérifiez qu\'elle fonctionne sur votre appareil avant de vous y fier.** **Local AI Chat - pocket est une application iOS et iPadOS freemium, à code source fermé, qui télécharge sur l\'appareil des modèles ouverts comme Llama, Gemma, Qwen et Mistral, génère des images et permet de discuter hors ligne.** Selon sa fiche App Store, elle exige iOS ou iPadOS 18.6 ou ultérieur et se télécharge gratuitement, avec des achats intégrés hebdomadaires, mensuels et annuels. Cet avis porte sur la version 0.5.6 et s\'appuie sur la fiche publique, le site officiel et la politique de confidentialité, pas sur des tests pratiques.',
    quickAnswerTop: {
      fr: {
        question: 'Local AI Chat Pocket vaut-elle d\'être installée pour l\'IA hors ligne sur iPhone ou iPad ?',
        answer:
          'Peut-être, si vous voulez une application de chat hors ligne simple, avec une large liste de modèles, la génération d\'images et la prise en charge de Raccourcis, et que vous êtes sous iOS 18.6 ou ultérieur. Vérifiez d\'abord trois points : les offres payantes sont facturées à la semaine, au mois et à l\'année sans répartition indiquée des fonctionnalités, l\'application est à code source fermé en version 0.5.6, et la politique de confidentialité décrit une télémétrie anonyme ainsi qu\'un mode cloud facultatif. Private Mind et PocketPal AI sont des alternatives open source.',
        bullets: [
          'Téléchargement gratuit avec achats intégrés : $6.99 par semaine, $14.99 par mois ou $99.99 par an.',
          'Télécharge des modèles ouverts (Llama, Gemma, Qwen, Mistral, Phi) et prend aussi en charge la génération d\'images.',
          'Intégration à Raccourcis, thèmes et polices réglables, et invite système modifiable.',
          'Nécessite iOS ou iPadOS 18.6 ou ultérieur ; la fiche indique aussi visionOS 2.6 ou ultérieur.',
          'Code source fermé ; la politique de confidentialité mentionne une télémétrie anonyme et un mode cloud facultatif, désactivé par défaut.',
        ],
        updatedDate: '2026-10-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Local AI Chat Pocket', anchor: 'get-it' },
      { label: 'Local AI Chat Pocket en bref', anchor: 'at-a-glance' },
      { label: 'Ce qu\'est Local AI Chat Pocket', anchor: 'what-is-pocket' },
      { label: 'Comment commencer', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Tarifs et confidentialité', anchor: 'privacy' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'Local AI Chat Pocket vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser Local AI Chat Pocket', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser Local AI Chat Pocket', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI Chat - pocket, de Rica Harz, est une application iPhone et iPad freemium qui télécharge des modèles de langage ouverts sur l\'appareil, génère des images et permet de discuter hors ligne.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme un chatbot hors ligne de poche : une fois un modèle sur le téléphone, aucune connexion n\'est nécessaire, et l\'application y ajoute Raccourcis et la génération d\'images.',
          },
        ],
        items: [
          'Version testée : 0.5.6, telle qu\'affichée sur la [fiche App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661).',
          'Prix : téléchargement gratuit ; les achats intégrés sont listés à $6.99 par semaine, $14.99 par mois et $99.99 par an.',
          'Plateforme : iOS et iPadOS 18.6 ou ultérieur ; la fiche indique aussi visionOS 2.6 ou ultérieur.',
          'Points forts : large liste de modèles, génération d\'images, intégration à Raccourcis, invite système modifiable.',
          'Ouverture : code source fermé ; aucun dépôt public n\'a été trouvé.',
        ],
      },
      getItPocket: {
        id: 'get-it',
        title: 'Obtenir Local AI Chat Pocket',
        content: [
          '**Local AI Chat - pocket est distribuée par l\'Apple App Store.** Le téléchargement pèse 256,4 Mo et l\'application se télécharge gratuitement, avec des achats intégrés.',
          'Cet avis est un complément au [répertoire des logiciels LLM locaux](/fr/directory) de PromptQuorum, qui recense l\'application aux côtés d\'autres outils d\'IA locale mobiles et de bureau.',
        ],
        columns: ['Canal', 'Obtenir'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Obtenir': '[Local AI Chat - pocket sur l\'App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)',
          },
          {
            'Canal': 'Site officiel',
            'Obtenir': '[oneai.framer.website](https://oneai.framer.website/)',
          },
          {
            'Canal': 'Assistance',
            'Obtenir': '[Page d\'assistance de Pocket](https://oneai.framer.website/support)',
          },
          {
            'Canal': 'Politique de confidentialité',
            'Obtenir': '[Politique de confidentialité de Pocket](https://oneai.framer.website/privacy)',
          },
        ],
        note: 'Aucun dépôt de code source public n\'a été trouvé. Il n\'existe pas de version Android ni Mac ; la fiche ne couvre que l\'iPhone, l\'iPad et Apple Vision.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Local AI Chat Pocket en bref',
        columns: ['Attribut', 'Local AI Chat Pocket'],
        rows: [
          { 'Attribut': 'Plateforme', 'Local AI Chat Pocket': 'iOS, iPadOS (18.6+)' },
          { 'Attribut': 'Prix', 'Local AI Chat Pocket': 'Gratuit, achats intégrés' },
          { 'Attribut': 'Licence', 'Local AI Chat Pocket': 'Code source fermé' },
          { 'Attribut': 'Fonctionne hors ligne', 'Local AI Chat Pocket': 'Oui, une fois un modèle sur l\'appareil' },
          { 'Attribut': 'Téléchargement de modèles', 'Local AI Chat Pocket': 'Non indiqué dans la fiche' },
          { 'Attribut': 'Entrée d\'images', 'Local AI Chat Pocket': 'Non indiqué dans la fiche' },
          { 'Attribut': 'Génération d\'images', 'Local AI Chat Pocket': 'Oui, modèles d\'images sur l\'appareil' },
          { 'Attribut': 'Entrée / sortie vocale', 'Local AI Chat Pocket': 'Non indiqué dans la fiche' },
        ],
        note: 'Les attributs suivent la comparaison des applications de chat mobiles utilisée dans le répertoire des logiciels LLM locaux. Ils proviennent de la fiche App Store et du site officiel, qui ne couvrent pas toutes les fonctionnalités.',
      },
      whatIsPocket: {
        id: 'what-is-pocket',
        title: 'Ce qu\'est Local AI Chat Pocket',
        content: [
          '**Local AI Chat - pocket est une application de chat hors ligne construite autour de modèles interchangeables sur l\'appareil.** La fiche (citations en anglais tirées de la fiche et du site, avec traduction entre parenthèses) promet « the simplest way to use private LLMs » (le moyen le plus simple d\'utiliser des LLM privés) qui « works fully offline » (fonctionne entièrement hors ligne), et son site officiel appelle l\'application Pocket, « the local LLM app that keeps your data private » (l\'application LLM locale qui protège vos données).',
          'Elle est publiée par Rica Harz, à titre individuel, et classée dans la catégorie Productivité. Ne la confondez pas avec des applications au nom proche, comme « Private AI Chat: Pocket LLM », qui a un autre développeur.',
          'Cet avis s\'appuie uniquement sur la fiche App Store, le site officiel et la politique de confidentialité. Il n\'inclut pas de tests pratiques ; la vitesse, la stabilité et la qualité des réponses ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment commencer',
        content: [
          '**La mise en route consiste à installer l\'application depuis l\'App Store, puis à choisir un modèle dans l\'application.** La fiche ne documente pas le premier lancement ; les étapes ci-dessous suivent donc ce qu\'elle indique.',
        ],
        numberedItems: [
          {
            title: 'Vérifier l\'appareil et le système',
            whyItMatters: 'La fiche exige iOS ou iPadOS 18.6 ou ultérieur, ou visionOS 2.6 ou ultérieur.',
          },
          {
            title: 'Installer l\'application',
            whyItMatters: 'Obtenez-la sur l\'[App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) ; le téléchargement pèse 256,4 Mo avant tout modèle.',
          },
          {
            title: 'Choisir un modèle',
            whyItMatters: 'La fiche indique que vous pouvez choisir un nouveau modèle ou passer d\'un modèle existant à un autre dans l\'application ; les modèles plus gros demandent plus de mémoire à l\'appareil.',
          },
          {
            title: 'Discuter hors ligne, puis personnaliser',
            whyItMatters: 'Une fois un modèle sur l\'appareil, le chat fonctionne sans connexion. Réglez le thème, les polices et l\'invite système, ou appelez le modèle depuis Raccourcis.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**L\'atout de l\'application est une large liste de modèles dans une interface simple.** Tout ce qui suit provient de la fiche App Store.',
        ],
        items: [
          '**Modèles de langage.** La fiche cite Llama 3.2 1B et 3B, Llama 3 8B, Mistral 7B, Phi, Gemma 2 2B et 9B, OpenELM, Qwen 3 et Deepseek, pour la plupart en versions 4 bits.',
          '**Génération d\'images.** Les modèles d\'images sont pris en charge à côté des modèles de texte, avec un bouton pour passer de l\'un à l\'autre ; la fiche ne nomme pas les modèles d\'images.',
          '**Raccourcis.** Vous pouvez discuter avec le modèle local ou envoyer sa sortie à d\'autres actions via Raccourcis d\'Apple.',
          '**Personnalisation.** Le thème, les polices et l\'invite système se règlent dans l\'application, et les conversations peuvent être épinglées.',
          '**Langues.** L\'interface est disponible en anglais et dans 22 autres langues.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**L\'application exige iOS ou iPadOS 18.6 ou ultérieur, ou visionOS 2.6 ou ultérieur.** La fiche ne donne aucun chiffre de RAM ni liste de puces prises en charge.',
          'La mémoire est la vraie limite : un modèle de 1B tient sur bien plus d\'appareils qu\'un modèle de 7B ou 9B. Ni la fiche ni le site n\'indiquent quels modèles conviennent à quel iPhone ; commencez donc par un petit modèle.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Tarifs et confidentialité',
        content: [
          '**Local AI Chat - pocket se télécharge gratuitement, avec des achats intégrés listés à $6.99 par semaine, $14.99 par mois et $99.99 par an.** Ni la fiche ni le site n\'indiquent ce que débloquent les offres payantes ; vérifiez donc l\'écran d\'achat dans l\'application avant de compter sur une fonctionnalité.',
          'La fiche affirme « zero data collection » (citation en anglais de la fiche : aucune collecte de données) et que vos données ne quittent jamais l\'appareil. La politique de confidentialité, en vigueur depuis le 17 février 2026, est plus détaillée : elle décrit une télémétrie anonymisée minimale, des données de plantage et de performance conservées jusqu\'à 12 mois, et indique que les conversations et contenus personnels restent par défaut sur l\'appareil.',
          'La politique décrit aussi un mode de traitement cloud facultatif, désactivé par défaut, qui enverrait textes, images et conversations au fournisseur tiers TogetherAI. La politique ne couvre pas les paiements d\'abonnement. L\'application est à code source fermé et cet avis n\'a pas inspecté le trafic réseau ; ces déclarations sont donc celles du développeur.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Chat hors ligne',
            'Ce que cela signifie en usage réel': 'Discutez avec des modèles téléchargés sans connexion.',
            'Limite / réserve': 'Exige iOS 18.6 et assez de mémoire pour le modèle choisi.',
          },
          {
            'Avantage': 'Large liste de modèles',
            'Ce que cela signifie en usage réel': 'Llama, Gemma, Qwen, Mistral, Phi et Deepseek dans une seule application.',
            'Limite / réserve': 'Aucune taille, aucun conseil d\'adéquation ni moteur publié par appareil.',
          },
          {
            'Avantage': 'Génération d\'images',
            'Ce que cela signifie en usage réel': 'Modèles de texte et d\'images dans la même application.',
            'Limite / réserve': 'La fiche ne nomme ni les modèles d\'images ni les vitesses.',
          },
          {
            'Avantage': 'Prise en charge de Raccourcis',
            'Ce que cela signifie en usage réel': 'Appelez le modèle local depuis vos propres automatisations.',
            'Limite / réserve': 'Seulement ce qu\'indique la fiche ; aucune liste d\'actions publiée.',
          },
          {
            'Avantage': 'Gratuite pour commencer',
            'Ce que cela signifie en usage réel': 'Aucun coût pour télécharger et essayer.',
            'Limite / réserve': 'Les offres payantes vont jusqu\'à $99.99 par an, sans répartition des fonctionnalités indiquée.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Local AI Chat Pocket vs. alternatives',
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Source des modèles', 'Différence clé'],
        rows: [
          {
            'Application': 'Local AI Chat Pocket',
            'Plateformes': 'iOS, iPadOS',
            'Prix et licence': 'Freemium, code source fermé',
            'Source des modèles': 'Liste de modèles intégrée',
            'Différence clé': 'Ajoute images et Raccourcis ; offre payante hebdomadaire',
          },
          {
            'Application': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Plateformes': 'iOS, Mac',
            'Prix et licence': 'Freemium, code source fermé',
            'Source des modèles': 'Catalogue de modèles intégré',
            'Différence clé': 'Aussi sur Mac ; aucune génération d\'images listée',
          },
          {
            'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix et licence': 'Gratuit, MIT',
            'Source des modèles': 'Téléchargements Hugging Face',
            'Différence clé': 'Open source et aussi sur Android ; entièrement gratuite',
          },
          {
            'Application': '[Oscilla](/fr/power-local-llm/oscilla-review)',
            'Plateformes': 'iOS',
            'Prix et licence': 'Gratuit, code source fermé',
            'Source des modèles': '40+ modèles intégrés',
            'Différence clé': 'Catalogue fixe plus large ; aucun achat intégré listé',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iOS, Android',
            'Prix et licence': 'Gratuit, MIT',
            'Source des modèles': 'Modèles GGUF',
            'Différence clé': 'Open source, basé sur llama.cpp, multiplateforme',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment. Vérifiez les spécificités actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser Local AI Chat Pocket',
        items: [
          '**Les personnes qui veulent une seule application hors ligne pour modèles de texte et d\'images.** Les deux sont listés dans la même interface.',
          '**Les utilisateurs de Raccourcis.** L\'intégration à Raccourcis permet à d\'autres automatisations d\'appeler le modèle local.',
          '**Ceux qui veulent une large liste de modèles à essayer.** Llama, Gemma, Qwen, Mistral et d\'autres sont cités.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser Local AI Chat Pocket',
        items: [
          '**Toute personne qui a besoin d\'open source.** Le code n\'est pas public ; [Private Mind](/fr/power-local-llm/private-mind-review) et [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) sont open source.',
          '**Les utilisateurs d\'Android ou de Mac.** Seuls l\'iPhone, l\'iPad et Apple Vision sont listés ; PocketPal AI et Private Mind fonctionnent tous deux sur Android.',
          '**Les appareils sous iOS ou iPadOS 18.6.** La fiche fixe ce seuil.',
          '**Ceux qui exigent une garantie stricte d\'absence de télémétrie.** La politique de confidentialité décrit une télémétrie anonyme et un mode cloud facultatif ; lisez-la d\'abord.',
          '**Ceux qui veulent une application mise à jour récemment.** La version 0.5.6 date du 27 mai 2026, avec des notes de version se limitant à « Bug fixes and performance improvements. » (citation en anglais de la fiche : corrections de bugs et améliorations de performance).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Local AI Chat Pocket est-elle gratuite ?',
            a: 'Elle se télécharge gratuitement, avec des achats intégrés à $6.99 par semaine, $14.99 par mois ou $99.99 par an, comme indiqué sur la fiche App Store.',
          },
          {
            q: 'Qui développe Local AI Chat - pocket ?',
            a: 'Rica Harz, à titre individuel, selon l\'App Store et la politique de confidentialité. Les applications aux noms proches, comme « Private AI Chat: Pocket LLM », viennent d\'autres développeurs.',
          },
          {
            q: 'Peut-elle fonctionner sans connexion internet ?',
            a: 'Oui, une fois un modèle sur l\'appareil. Le mode cloud facultatif décrit dans la politique de confidentialité est désactivé par défaut.',
          },
          {
            q: 'Fonctionne-t-elle sur Android ou Mac ?',
            a: 'Non. La fiche ne couvre que l\'iPhone, l\'iPad et Apple Vision.',
          },
          {
            q: 'Quels modèles puis-je exécuter ?',
            a: 'La fiche cite des modèles Llama, Gemma, Qwen, Mistral, Phi, OpenELM et Deepseek, pour la plupart en versions 4 bits, ainsi que des modèles d\'images.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Sur le papier, Local AI Chat - pocket convient bien à qui veut une application de chat hors ligne simple, avec une large liste de modèles, la génération d\'images et Raccourcis, sur un iPhone ou un iPad sous iOS 18.6 ou ultérieur.',
          'Les réserves tiennent à la transparence, aux tarifs et au suivi : le code est fermé, les offres payantes ne sont pas documentées, la politique de confidentialité est plus nuancée que le « zero data collection » de la fiche (citation en anglais), et la dernière mise à jour date de mai 2026.',
          'Si vous voulez de l\'open source, commencez par [Private Mind](/fr/power-local-llm/private-mind-review). Si vous voulez la génération d\'images et Raccourcis dans une seule application, essayez d\'abord la version gratuite avant de payer.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Local AI Chat - pocket sur l\'App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) — version, prix, configuration requise, fonctionnalités et développeur.',
          '[Site officiel de Pocket](https://oneai.framer.website/) — la description de l\'application sur le site même du produit.',
          '[Politique de confidentialité de Pocket](https://oneai.framer.website/privacy) — collecte de données, télémétrie et mode cloud facultatif.',
          '[Page d\'assistance de Pocket](https://oneai.framer.website/support) — entrée d\'assistance liée depuis le site officiel.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Locally AI](/fr/power-local-llm/locally-ai-review) — une application freemium sur l\'appareil pour iPhone, iPad et Mac.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne open source pour iPhone et Android.',
          '[Avis Oscilla](/fr/power-local-llm/oscilla-review) — une application iOS avec un catalogue fixe de modèles sur l\'appareil.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — chat open source sur l\'appareil pour iOS et Android.',
          '[Avis MLXHub](/fr/power-local-llm/mlxhub-review) — une application iPhone et iPad avec serveur LAN et répartition de modèle entre appareils.',
          '[Le répertoire complet des logiciels LLM locaux](/fr/directory) — un répertoire plus large d\'outils LLM locaux multiplateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-06',
    dateModified: '2026-10-06',
    next_refresh_due: '2027-04-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-chat-pocket-review-hero-ja.webp',
    title: 'Local AI Chat Pocketレビュー:iPhoneとiPad向けのオフラインLLM・画像チャットアプリ',
    seoTitle: 'Local AI Chat Pocketレビュー:iPhoneとiPad向けオフラインLLMチャット',
    intro:
      'Local AI Chat - pocket(公式サイトではPocketと呼ばれています)は、オープンな言語モデルを端末にダウンロードし、画像を生成し、接続なしでチャットできるiPhoneとiPad向けアプリです。本レビューでは、App Storeの掲載情報、公式サイト、プライバシーポリシーに記載されている内容、不明な点、そして他のiOS向けローカルAIアプリとの比較を扱います。',
    metaDescription:
      'Local AI Chat Pocketレビュー:オフラインのオンデバイスLLMと画像チャットに対応するiPhoneとiPad向けアプリ。料金は週額$6.99から、iOS 18.6の要件、プライバシーポリシーとクラウドモード、制約、代替アプリを解説。',
    twitterDescription:
      'Local AI Chat Pocketレビュー:オフラインのオンデバイスモデルと画像生成に対応するフリーミアムのiOS/iPadOSアプリ。料金、要件、プライバシーポリシー、制約、代替アプリを解説。',
    audience:
      'オープンモデルを端末上でオフライン実行したいiPhoneとiPadのユーザー向け——機能、要件、料金、プライバシー、制約、代替アプリを扱う。',
    readTime: '8分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Chat Pocketレビュー',
    targetKeywords: [
      'local ai chat pocket レビュー',
      'local ai chat pocket ios',
      'pocket オフライン llm iphone',
      'rica harz pocket アプリ',
      'iphone オフライン llm 実行',
      'ipad オフライン aiチャット',
      'iphone オンデバイス 画像生成',
      'プライベート llm アプリ ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**警告：Local AI Chat - pocketは2026年5月27日（バージョン0.5.6）以降更新されておらず、メンテナンスが終了している可能性があります。利用前にお使いの端末で動作するか確認してください。** **Local AI Chat - pocketは、Llama、Gemma、Qwen、Mistralなどのオープンモデルを端末にダウンロードし、画像を生成し、オフラインでチャットできる、フリーミアムでクローズドソースのiOS/iPadOSアプリです。** App Storeの掲載情報によれば、iOSまたはiPadOS 18.6以降が必要で、ダウンロードは無料、週額・月額・年額のアプリ内課金が用意されています。本レビューはバージョン0.5.6が対象で、公開されている掲載情報、公式サイト、プライバシーポリシーに基づいており、実機テストは含みません。',
    quickAnswerTop: {
      ja: {
        question: 'iPhoneやiPadでオフラインAIを使うために、Local AI Chat Pocketをインストールする価値はありますか?',
        answer:
          'iOS 18.6以降をお使いで、幅広いモデル一覧、画像生成、ショートカット対応を備えたシンプルなオフラインチャットアプリがほしいなら、検討の余地があります。事前に3点を確認してください。有料プランは週額・月額・年額で提供され、機能の違いは記載がないこと、アプリはバージョン0.5.6のクローズドソースであること、そしてプライバシーポリシーに匿名のテレメトリと任意のクラウドモードの記載があることです。オープンソースの代替アプリは、Private MindとPocketPal AIです。',
        bullets: [
          'ダウンロードは無料でアプリ内課金あり:週額$6.99、月額$14.99、年額$99.99。',
          'オープンモデル(Llama、Gemma、Qwen、Mistral、Phi)をダウンロードでき、画像生成にも対応。',
          'ショートカットとの連携、テーマとフォントの変更、編集可能なシステムプロンプト。',
          'iOSまたはiPadOS 18.6以降が必要。掲載情報にはvisionOS 2.6以降も表示されている。',
          'クローズドソース。プライバシーポリシーには、匿名のテレメトリと、初期状態でオフの任意のクラウドモードが記載されている。',
        ],
        updatedDate: '2026-10-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Local AI Chat Pocketを入手する', anchor: 'get-it' },
      { label: 'Local AI Chat Pocketの概要', anchor: 'at-a-glance' },
      { label: 'Local AI Chat Pocketとは', anchor: 'what-is-pocket' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: '必要な端末要件', anchor: 'requirements' },
      { label: '料金とプライバシー', anchor: 'privacy' },
      { label: 'トレードオフ:メリットと制約', anchor: 'tradeoffs' },
      { label: 'Local AI Chat Pocket 対 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'Local AI Chat Pocketを使うべき人', anchor: 'who-should-use' },
      { label: 'Local AI Chat Pocketを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '開発者Rica Harz氏によるLocal AI Chat - pocketは、オープンな言語モデルを端末にダウンロードし、画像を生成し、オフラインでチャットできる、フリーミアムのiPhoneとiPad向けアプリである。',
          },
          {
            type: 'plain-terms',
            text: 'ポケットサイズのオフラインチャットボットと考えてください。モデルを端末に入れたあとは接続が不要で、アプリはそこにショートカットと画像生成を加えています。',
          },
        ],
        items: [
          'レビュー対象のバージョン:0.5.6。[App Storeの掲載情報](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)に記載のとおり。',
          '価格:ダウンロードは無料。アプリ内課金は週額$6.99、月額$14.99、年額$99.99と記載されている。',
          'プラットフォーム:iOSとiPadOSの18.6以降。掲載情報にはvisionOS 2.6以降も表示されている。',
          '主な機能:幅広いモデル一覧、画像生成、ショートカットとの連携、編集可能なシステムプロンプト。',
          'オープン性:クローズドソース。公開リポジトリは見つからなかった。',
        ],
      },
      getItPocket: {
        id: 'get-it',
        title: 'Local AI Chat Pocketを入手する',
        content: [
          '**Local AI Chat - pocketはApple App Storeで配布されています。** ダウンロードサイズは256.4 MBで、アプリはダウンロード無料、アプリ内課金ありです。',
          '本レビューは、PromptQuorumの[ローカルLLMソフトウェアディレクトリ](/ja/directory)を補完するものです。このディレクトリはこのアプリを他のモバイルやデスクトップのローカルAIツールと並べて掲載しています。',
        ],
        columns: ['入手経路', '入手方法'],
        rows: [
          {
            '入手経路': 'Apple App Store',
            '入手方法': '[App StoreのLocal AI Chat - pocket](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)',
          },
          {
            '入手経路': '公式サイト',
            '入手方法': '[oneai.framer.website](https://oneai.framer.website/)',
          },
          {
            '入手経路': 'サポート',
            '入手方法': '[Pocketのサポートページ](https://oneai.framer.website/support)',
          },
          {
            '入手経路': 'プライバシーポリシー',
            '入手方法': '[Pocketのプライバシーポリシー](https://oneai.framer.website/privacy)',
          },
        ],
        note: '公開されているソースリポジトリは見つかりませんでした。Android版とMac版はなく、掲載情報の対象はiPhone、iPad、Apple Visionのみです。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Local AI Chat Pocketの概要',
        columns: ['項目', 'Local AI Chat Pocket'],
        rows: [
          { '項目': 'プラットフォーム', 'Local AI Chat Pocket': 'iOS、iPadOS(18.6以降)' },
          { '項目': '価格', 'Local AI Chat Pocket': '無料、アプリ内課金あり' },
          { '項目': 'ライセンス', 'Local AI Chat Pocket': 'クローズドソース' },
          { '項目': '完全オフラインで動作', 'Local AI Chat Pocket': '可、モデルを端末に入れた後' },
          { '項目': 'アプリ内モデルダウンロード', 'Local AI Chat Pocket': '掲載情報に記載なし' },
          { '項目': '画像入力', 'Local AI Chat Pocket': '掲載情報に記載なし' },
          { '項目': '画像生成', 'Local AI Chat Pocket': '可、オンデバイスの画像モデル' },
          { '項目': '音声入力/出力', 'Local AI Chat Pocket': '掲載情報に記載なし' },
        ],
        note: '各項目は、ローカルLLMソフトウェアディレクトリで使われているモバイルチャットの比較基準に沿っています。内容はApp Storeの掲載情報と公式サイトに基づいており、すべての機能が網羅されているわけではありません。',
      },
      whatIsPocket: {
        id: 'what-is-pocket',
        title: 'Local AI Chat Pocketとは',
        content: [
          '**Local AI Chat - pocketは、切り替え可能なオンデバイスモデルを軸にしたオフラインのチャットアプリです。** 掲載情報(英語)は「the simplest way to use private LLMs」(プライベートなLLMを使う最もシンプルな方法)で「works fully offline」(完全にオフラインで動作する)とうたい、公式サイトはこのアプリをPocketと呼び、「the local LLM app that keeps your data private」(データをプライベートに保つローカルLLMアプリ)と説明しています。いずれも英語の掲載文・サイト文の引用で、日本語訳は参考訳です。',
          '公開者は個人開発者のRica Harz氏で、カテゴリは「仕事効率化」にあたるProductivityです。開発者が異なる「Private AI Chat: Pocket LLM」など、名前の似たアプリと混同しないでください。',
          '本レビューはApp Storeの掲載情報、公式サイト、プライバシーポリシーのみに基づいています。実機テストは含まれていないため、速度、安定性、回答品質は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、App Storeからのインストールに続けて、アプリ内でモデルを選ぶという流れです。** 掲載情報には初回起動時の流れが記載されていないため、以下の手順は掲載情報に記載されている内容に沿っています。',
        ],
        numberedItems: [
          {
            title: '端末とOSを確認する',
            whyItMatters: '掲載情報ではiOSまたはiPadOS 18.6以降、もしくはvisionOS 2.6以降が必要です。',
          },
          {
            title: 'アプリをインストールする',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)から入手します。モデルを入れる前の時点で、ダウンロードサイズは256.4 MBです。',
          },
          {
            title: 'モデルを選ぶ',
            whyItMatters: '掲載情報によれば、アプリ内で新しいモデルを選んだり既存のモデルを切り替えたりできます。大きなモデルほど端末のメモリを多く使います。',
          },
          {
            title: 'オフラインでチャットし、必要に応じてカスタマイズする',
            whyItMatters: 'モデルを端末に入れたあとは、接続なしでチャットできます。テーマ、フォント、システムプロンプトを調整したり、ショートカットからモデルを呼び出したりできます。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**このアプリの売りは、シンプルなインターフェースに幅広いモデル一覧を備えている点です。** 以下はすべて、App Storeの掲載情報に基づいています。',
        ],
        items: [
          '**言語モデル。** 掲載情報にはLlama 3.2 1Bと3B、Llama 3 8B、Mistral 7B、Phi、Gemma 2 2Bと9B、OpenELM、Qwen 3、Deepseekが挙げられており、大半は4ビット版である。',
          '**画像生成。** テキストモデルと並んで画像モデルにも対応し、両者を切り替えられる。掲載情報には、どの画像モデルかの記載はない。',
          '**ショートカット。** Appleのショートカットを通じて、ローカルモデルとチャットしたり、その出力を他のアクションに渡したりできる。',
          '**パーソナライズ。** アプリ内でテーマ、フォント、システムプロンプトを調整でき、チャットをピン留めできる。',
          '**言語。** インターフェースは英語に加えて22の言語で利用できる。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '必要な端末要件',
        content: [
          '**このアプリには、iOSまたはiPadOS 18.6以降、もしくはvisionOS 2.6以降が必要です。** 掲載情報には、RAMの数値も対応チップの一覧も記載がありません。',
          '実際の限界はメモリです。1Bモデルは7Bや9Bのモデルよりはるかに多くの端末に載ります。掲載情報にも公式サイトにも、どのモデルがどのiPhoneに載るかは記載がないため、まず小さなモデルで試してください。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '料金とプライバシー',
        content: [
          '**Local AI Chat - pocketはダウンロード無料で、アプリ内課金は週額$6.99、月額$14.99、年額$99.99と記載されています。** 掲載情報にも公式サイトにも、有料プランで何が使えるようになるかは記載がないため、機能を当てにする前にアプリ内の課金画面を確認してください。',
          '掲載情報は「zero data collection」(データ収集ゼロ)とし、データが端末の外に出ることはないと説明しています。これは英語の掲載文の引用で、日本語訳は参考訳です。2026年2月17日施行のプライバシーポリシーはより詳細で、最小限の匿名化されたテレメトリ、最長12か月保持されるクラッシュデータとパフォーマンスデータについて記し、チャットと個人のコンテンツは初期状態では端末内にとどまると述べています。',
          'ポリシーはさらに、初期状態ではオフの任意のクラウド処理モードについても記しており、これを使うとテキスト、画像、チャットが第三者プロバイダーのTogetherAIに送信されます。ポリシーはサブスクリプションの支払いについては扱っていません。アプリはクローズドソースであり、本レビューではネットワーク通信を検査していないため、これらの記述は開発者自身によるものです。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制約',
        columns: ['メリット', '実際の利用での意味', '制約・注意点'],
        rows: [
          {
            'メリット': 'オフラインチャット',
            '実際の利用での意味': '接続なしで、ダウンロードしたモデルとチャットできる。',
            '制約・注意点': 'iOS 18.6と、選んだモデルに足りるメモリが必要。',
          },
          {
            'メリット': '幅広いモデル一覧',
            '実際の利用での意味': 'Llama、Gemma、Qwen、Mistral、Phi、Deepseekを1つのアプリで使える。',
            '制約・注意点': 'サイズ、端末ごとの適合の目安、ランタイムは公開されていない。',
          },
          {
            'メリット': '画像生成',
            '実際の利用での意味': 'テキストモデルと画像モデルを同じアプリで使える。',
            '制約・注意点': '掲載情報には画像モデルの名前も速度も記載がない。',
          },
          {
            'メリット': 'ショートカット対応',
            '実際の利用での意味': '自分のオートメーションからローカルモデルを呼び出せる。',
            '制約・注意点': '掲載情報の記載のみ。アクションの一覧は公開されていない。',
          },
          {
            'メリット': '無料で始められる',
            '実際の利用での意味': 'ダウンロードして試すのに費用がかからない。',
            '制約・注意点': '有料プランは年額最大$99.99で、機能の違いは記載がない。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Local AI Chat Pocket 対 代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格とライセンス', 'モデルの接続元', '主な違い'],
        rows: [
          {
            'アプリ': 'Local AI Chat Pocket',
            'プラットフォーム': 'iOS、iPadOS',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            'モデルの接続元': 'アプリ内のモデル一覧',
            '主な違い': '画像生成とショートカットに対応。週額の有料プランあり',
          },
          {
            'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            'プラットフォーム': 'iOS、Mac',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            'モデルの接続元': 'アプリ内のモデルカタログ',
            '主な違い': 'Macにも対応。画像生成の記載なし',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '価格とライセンス': '無料、MIT',
            'モデルの接続元': 'Hugging Faceからのダウンロード',
            '主な違い': 'オープンソースでAndroidにも対応。完全無料',
          },
          {
            'アプリ': '[Oscilla](/ja/power-local-llm/oscilla-review)',
            'プラットフォーム': 'iOS',
            '価格とライセンス': '無料、クローズドソース',
            'モデルの接続元': 'アプリ内の40以上のモデル',
            '主な違い': 'より大きな固定カタログ。アプリ内課金の記載なし',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '価格とライセンス': '無料、MIT',
            'モデルの接続元': 'GGUFモデル',
            '主な違い': 'オープンソースでllama.cppベース、クロスプラットフォーム',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム、価格、機能の詳細は頻繁に変更されます。決定前に各アプリ自体の掲載情報で現在の詳細を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Local AI Chat Pocketを使うべき人',
        items: [
          '**テキストモデルと画像モデルを1つのオフラインアプリで使いたい人。** 両方が同じインターフェースに掲載されています。',
          '**ショートカットを使う人。** ショートカットとの連携により、他のオートメーションからローカルモデルを呼び出せます。',
          '**幅広いモデル一覧から試したい人。** Llama、Gemma、Qwen、Mistralなどが挙げられています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Local AI Chat Pocketを使うべきでない人',
        items: [
          '**オープンソースが必須の人。** コードは公開されていません。[Private Mind](/ja/power-local-llm/private-mind-review)と[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)はオープンソースです。',
          '**AndroidまたはMacのユーザー。** 記載されているのはiPhone、iPad、Apple Visionのみです。PocketPal AIとPrivate MindはどちらもAndroidで動作します。',
          '**iOSまたはiPadOS 18.6未満の端末。** 掲載情報がその下限を定めています。',
          '**テレメトリなしの厳格な保証が必要な人。** プライバシーポリシーには匿名のテレメトリと任意のクラウドモードの記載があるため、先に読んでください。',
          '**最近更新されたアプリを求める人。** バージョン0.5.6は2026年5月27日のもので、リリースノートは「Bug fixes and performance improvements.」(バグ修正とパフォーマンスの改善)のみです。これは英語の掲載文の引用で、日本語訳は参考訳です。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Local AI Chat Pocketは無料ですか?',
            a: 'ダウンロードは無料で、App Storeの掲載情報のとおり、アプリ内課金が週額$6.99、月額$14.99、年額$99.99で提供されています。',
          },
          {
            q: 'Local AI Chat - pocketを開発しているのは誰ですか?',
            a: 'App Storeとプライバシーポリシーによれば、個人開発者のRica Harz氏です。「Private AI Chat: Pocket LLM」など、名前の似たアプリは別の開発者によるものです。',
          },
          {
            q: 'インターネット接続なしで動作しますか?',
            a: 'はい、モデルを端末に入れたあとであれば動作します。プライバシーポリシーに記載された任意のクラウドモードは、初期状態ではオフです。',
          },
          {
            q: 'AndroidやMacで動作しますか?',
            a: 'いいえ。掲載情報が対象としているのは、iPhone、iPad、Apple Visionのみです。',
          },
          {
            q: 'どのモデルを実行できますか?',
            a: '掲載情報には、Llama、Gemma、Qwen、Mistral、Phi、OpenELM、Deepseekのモデル(大半は4ビット版)と、画像モデルが挙げられています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'iOS 18.6以降のiPhoneやiPadで、幅広いモデル一覧、画像生成、ショートカットを備えたシンプルなオフラインチャットアプリがほしい人には、書面上はよく合っています。',
          '懸念は透明性、料金、更新の頻度です。クローズドソースで、有料プランの内容は記載がなく、プライバシーポリシーは掲載情報の「zero data collection」(データ収集ゼロ)より込み入っており、最後の更新は2026年5月でした。',
          'オープンソースを求めるなら、[Private Mind](/ja/power-local-llm/private-mind-review)から始めてください。画像生成とショートカットを1つのアプリで使いたいなら、課金する前に無料版を試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのLocal AI Chat - pocket](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) — バージョン、価格、要件、機能、開発者。',
          '[Pocket公式サイト](https://oneai.framer.website/) — 開発者自身によるアプリの説明。',
          '[Pocketのプライバシーポリシー](https://oneai.framer.website/privacy) — データ収集、テレメトリ、任意のクラウドモード。',
          '[Pocketのサポートページ](https://oneai.framer.website/support) — 公式サイトからリンクされているサポートの窓口。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — iPhone、iPad、Mac向けのフリーミアムのオンデバイスアプリ。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けのオープンソースのオフラインチャットアプリ。',
          '[Oscillaレビュー](/ja/power-local-llm/oscilla-review) — オンデバイスモデルの固定カタログを備えたiOSアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けのオープンソースのオンデバイスチャット。',
          '[MLXHubレビュー](/ja/power-local-llm/mlxhub-review) — LANサーバーと複数端末でのモデル分割に対応するiPhoneとiPad向けアプリ。',
          '[完全なローカルLLMソフトウェアディレクトリ](/ja/directory) — プラットフォームを横断するローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-06',
    dateModified: '2026-10-06',
    next_refresh_due: '2027-04-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-chat-pocket-review-hero-zh.webp',
    title: 'Local AI Chat Pocket评测：适用于iPhone和iPad的离线大模型与图像聊天',
    seoTitle: 'Local AI Chat Pocket评测：iPhone和iPad离线大模型聊天',
    intro:
      'Local AI Chat - pocket（其官方网站称之为Pocket）是一款iPhone和iPad应用，可把开源语言模型下载到设备上，生成图像，并在无网络时聊天。本评测介绍它的App Store页面、官方网站和隐私政策记载了什么、哪些地方不明确，以及它与其他iOS本地AI应用的对比。',
    metaDescription:
      'Local AI Chat Pocket评测：支持设备端离线大模型和图像聊天的iPhone和iPad应用。每周$6.99起的定价、iOS 18.6要求、隐私政策与云端选项、局限、替代方案。',
    twitterDescription:
      'Local AI Chat Pocket评测：免费增值的iOS/iPadOS应用，支持离线设备端模型和图像生成。定价、设备要求、隐私政策、局限和替代方案。',
    audience:
      '想在iPhone或iPad上离线运行开源模型的用户——涵盖功能、设备要求、定价、隐私、局限和替代方案。',
    readTime: '8分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Chat Pocket评测',
    targetKeywords: [
      'local ai chat pocket评测',
      'local ai chat pocket ios',
      'pocket iPhone离线大模型',
      'rica harz pocket应用',
      'iPhone离线运行大模型',
      'iPad离线AI聊天',
      'iPhone设备端图像生成',
      'iOS私密大模型应用',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**警告：Local AI Chat - pocket自2026年5月27日（版本0.5.6）以来未再更新，可能已无人维护——使用前请先确认它能在你的设备上正常运行。** **Local AI Chat - pocket是一款免费增值、闭源的iOS和iPadOS应用，可把Llama、Gemma、Qwen和Mistral等开源模型下载到设备上，生成图像，并支持离线聊天。** 据其App Store页面，它需要iOS或iPadOS 18.6或更高版本，下载免费，提供每周、每月和每年的应用内购买。本评测对应版本0.5.6，依据公开的应用页面、官方网站和隐私政策撰写，并未实际测试。',
    quickAnswerTop: {
      zh: {
        question: '想在iPhone或iPad上使用离线AI，Local AI Chat Pocket值得安装吗？',
        answer:
          '如果您想要一款简单的离线聊天应用，希望模型列表丰富，并需要图像生成和快捷指令支持，同时设备运行iOS 18.6或更高版本，那么也许值得。请先确认三点：付费档位按每周、每月和每年定价，没有说明各档位的功能区别；应用为闭源，版本为0.5.6；隐私政策提到了匿名遥测数据，以及一个可选的云端模式。Private Mind和PocketPal AI是开源的替代方案。',
        bullets: [
          '免费下载，含应用内购买：每周$6.99、每月$14.99或每年$99.99。',
          '可下载开源模型（Llama、Gemma、Qwen、Mistral、Phi），也支持图像生成。',
          '支持快捷指令集成、可调整的主题和字体，以及可编辑的系统提示词。',
          '需要iOS或iPadOS 18.6或更高版本；页面还显示支持visionOS 2.6或更高版本。',
          '闭源；隐私政策列出了匿名遥测数据和一个可选、默认关闭的云端模式。',
        ],
        updatedDate: '2026-10-06',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '获取Local AI Chat Pocket', anchor: 'get-it' },
      { label: 'Local AI Chat Pocket概览', anchor: 'at-a-glance' },
      { label: 'Local AI Chat Pocket是什么', anchor: 'what-is-pocket' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '设备要求', anchor: 'requirements' },
      { label: '定价与隐私', anchor: 'privacy' },
      { label: '权衡：优点与局限', anchor: 'tradeoffs' },
      { label: 'Local AI Chat Pocket与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用Local AI Chat Pocket', anchor: 'who-should-use' },
      { label: '谁不适合使用Local AI Chat Pocket', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点速览',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI Chat - pocket由开发者Rica Harz打造，是一款免费增值的iPhone和iPad应用，可把开源语言模型下载到设备上，生成图像，并支持离线聊天。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作装在口袋里的离线聊天机器人：模型装到手机上之后无需联网，应用还在此基础上增加了快捷指令和图像生成。',
          },
        ],
        items: [
          '评测版本：0.5.6，见[App Store页面](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)。',
          '价格：免费下载；应用内购买列为每周$6.99、每月$14.99和每年$99.99。',
          '平台：iOS和iPadOS 18.6或更高版本；页面还显示支持visionOS 2.6或更高版本。',
          '突出功能：模型列表丰富、图像生成、快捷指令集成、可编辑的系统提示词。',
          '开放性：闭源；没有找到公开的代码仓库。',
        ],
      },
      getItPocket: {
        id: 'get-it',
        title: '获取Local AI Chat Pocket',
        content: [
          '**Local AI Chat - pocket通过Apple App Store发布。** 下载大小为256.4 MB，应用免费下载，含应用内购买。',
          '本评测是PromptQuorum[本地LLM软件目录](/zh/directory)的配套文章，该目录将这款应用与其他移动端和桌面端本地AI工具一并列出。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Apple App Store',
            '获取方式': '[App Store上的Local AI Chat - pocket](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)',
          },
          {
            '渠道': '官方网站',
            '获取方式': '[oneai.framer.website](https://oneai.framer.website/)',
          },
          {
            '渠道': '支持',
            '获取方式': '[Pocket支持页面](https://oneai.framer.website/support)',
          },
          {
            '渠道': '隐私政策',
            '获取方式': '[Pocket隐私政策](https://oneai.framer.website/privacy)',
          },
        ],
        note: '没有找到公开的源代码仓库。没有Android或Mac版本；应用页面只涵盖iPhone、iPad和Apple Vision。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Local AI Chat Pocket概览',
        columns: ['属性', 'Local AI Chat Pocket'],
        rows: [
          { '属性': '平台', 'Local AI Chat Pocket': 'iOS、iPadOS（18.6+）' },
          { '属性': '价格', 'Local AI Chat Pocket': '免费，含应用内购买' },
          { '属性': '许可证', 'Local AI Chat Pocket': '闭源' },
          { '属性': '完全离线运行', 'Local AI Chat Pocket': '是，模型装到设备上之后' },
          { '属性': '应用内下载模型', 'Local AI Chat Pocket': '应用页面未说明' },
          { '属性': '图像输入', 'Local AI Chat Pocket': '应用页面未说明' },
          { '属性': '图像生成', 'Local AI Chat Pocket': '是，设备端图像模型' },
          { '属性': '语音输入/输出', 'Local AI Chat Pocket': '应用页面未说明' },
        ],
        note: '各属性沿用本地LLM软件目录中使用的移动端聊天对比项。它们来自App Store页面和官方网站，而这些来源并未涵盖所有功能。',
      },
      whatIsPocket: {
        id: 'what-is-pocket',
        title: 'Local AI Chat Pocket是什么',
        content: [
          '**Local AI Chat - pocket是一款围绕可切换的设备端模型构建的离线聊天应用。** 应用页面的宣传语是英文原文“the simplest way to use private LLMs”（使用私有大模型的最简单方式），并称其“works fully offline”（完全离线运行）；官方网站则称该应用为Pocket，即“the local LLM app that keeps your data private”（保护您数据隐私的本地大模型应用）。以上引文均引自英文页面和网站。',
          '它由个人开发者Rica Harz发布，分类为“效率”。请不要把它与名称相近的应用混淆，例如“Private AI Chat: Pocket LLM”，后者出自另一位开发者。',
          '本评测仅依据App Store页面、官方网站和隐私政策撰写，不包含实际测试，因此这里不对速度、稳定性和回答质量进行评价。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**设置过程就是先从App Store安装，再在应用内选择模型。** 应用页面没有记载首次运行的流程，因此以下步骤依据页面所述内容整理。',
        ],
        numberedItems: [
          {
            title: '确认设备和系统版本',
            whyItMatters: '应用页面要求iOS或iPadOS 18.6或更高版本，或visionOS 2.6或更高版本。',
          },
          {
            title: '安装应用',
            whyItMatters: '可从[App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)获取；在下载任何模型之前，应用本身大小为256.4 MB。',
          },
          {
            title: '选择模型',
            whyItMatters: '应用页面称，您可以在应用内选择新模型，或在已有模型之间切换；模型越大，占用设备的内存越多。',
          },
          {
            title: '离线聊天，再按需个性化',
            whyItMatters: '模型装到设备上之后，聊天无需联网。您可以调整主题、字体和系统提示词，或通过快捷指令调用该模型。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**这款应用的卖点是在简洁的界面中提供丰富的模型列表。** 以下内容均来自App Store页面。',
        ],
        items: [
          '**语言模型。** 页面点名了Llama 3.2 1B和3B、Llama 3 8B、Mistral 7B、Phi、Gemma 2 2B和9B、OpenELM、Qwen 3和Deepseek，大多为4位量化版本。',
          '**图像生成。** 在文本模型之外也支持图像模型，两者之间可以切换；页面没有说明具体是哪些图像模型。',
          '**快捷指令。** 您可以通过苹果的快捷指令与本地模型聊天，或把它的输出发送给其他操作。',
          '**个性化。** 主题、字体和系统提示词都可以在应用内调整，聊天也可以置顶。',
          '**语言。** 界面提供英语以及另外22种语言。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '设备要求',
        content: [
          '**该应用需要iOS或iPadOS 18.6或更高版本，或visionOS 2.6或更高版本。** 应用页面没有给出内存数值，也没有列出支持的芯片。',
          '内存才是真正的上限：1B模型能适配的设备远多于7B或9B模型。应用页面和网站都没有说明哪些模型适合哪款iPhone，因此请先试用小模型。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '定价与隐私',
        content: [
          '**Local AI Chat - pocket免费下载，应用内购买列为每周$6.99、每月$14.99和每年$99.99。** 应用页面和网站都没有说明付费档位解锁了什么，因此在依赖某项功能之前，请先在应用内查看付费墙。',
          '应用页面写有“zero data collection”（零数据收集，引自英文页面），并称您的数据不会离开设备。2026年2月17日生效的隐私政策则更为详细：它提到收集最少量的匿名遥测数据，崩溃和性能数据最长保留12个月，并称聊天和个人内容默认保留在设备上。',
          '该政策还描述了一个可选的云端处理模式，默认关闭，开启后会把文本、图像和聊天发送给第三方服务商TogetherAI。该政策不涵盖订阅付款。该应用是闭源的，本评测没有检查网络流量，因此这些说法来自开发者自己。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优点': '离线聊天',
            '实际使用中的意义': '无需联网，即可与已下载的模型聊天。',
            '局限/注意事项': '需要iOS 18.6，且内存要足够容纳所选模型。',
          },
          {
            '优点': '模型列表丰富',
            '实际使用中的意义': '一款应用内就有Llama、Gemma、Qwen、Mistral、Phi和Deepseek。',
            '局限/注意事项': '没有公布各设备的模型大小、适配建议或运行时。',
          },
          {
            '优点': '图像生成',
            '实际使用中的意义': '同一款应用内同时提供文本和图像模型。',
            '局限/注意事项': '应用页面没有说明图像模型或生成速度。',
          },
          {
            '优点': '支持快捷指令',
            '实际使用中的意义': '在您自己的自动化流程中调用本地模型。',
            '局限/注意事项': '仅限页面所述内容；没有公布操作列表。',
          },
          {
            '优点': '可免费开始',
            '实际使用中的意义': '下载和试用无需付费。',
            '局限/注意事项': '付费档位每年最高$99.99，且没有说明功能区别。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Local AI Chat Pocket与替代方案对比',
        columns: ['应用', '平台', '价格与许可证', '模型来源', '主要区别'],
        rows: [
          {
            '应用': 'Local AI Chat Pocket',
            '平台': 'iOS、iPadOS',
            '价格与许可证': '免费增值，闭源',
            '模型来源': '应用内模型列表',
            '主要区别': '增加图像生成和快捷指令；有每周付费档位',
          },
          {
            '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
            '平台': 'iOS、Mac',
            '价格与许可证': '免费增值，闭源',
            '模型来源': '应用内模型目录',
            '主要区别': '同时支持Mac；未列出图像生成',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格与许可证': '免费，MIT',
            '模型来源': 'Hugging Face下载',
            '主要区别': '开源，也支持Android；完全免费',
          },
          {
            '应用': '[Oscilla](/zh/power-local-llm/oscilla-review)',
            '平台': 'iOS',
            '价格与许可证': '免费，闭源',
            '模型来源': '40多个应用内模型',
            '主要区别': '固定目录更大；未列出应用内购买',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格与许可证': '免费，MIT',
            '模型来源': 'GGUF模型',
            '主要区别': '开源，基于llama.cpp，跨平台',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化。做决定前，请在各应用自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Local AI Chat Pocket',
        items: [
          '**想用一款离线应用同时运行文本和图像模型的用户。** 两者都列在同一个界面中。',
          '**快捷指令用户。** 快捷指令集成让其他自动化流程可以调用本地模型。',
          '**想试用丰富模型列表的用户。** 页面点名了Llama、Gemma、Qwen、Mistral等模型。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用Local AI Chat Pocket',
        items: [
          '**需要开源的用户。** 代码并未公开；[Private Mind](/zh/power-local-llm/private-mind-review)和[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)都是开源的。',
          '**Android或Mac用户。** 只列出了iPhone、iPad和Apple Vision；PocketPal AI和Private Mind都支持Android。',
          '**系统低于iOS或iPadOS 18.6的设备。** 应用页面设定了这一门槛。',
          '**需要严格保证无遥测数据的用户。** 隐私政策提到了匿名遥测数据和一个可选的云端模式；请先阅读。',
          '**想要近期仍在更新的应用的用户。** 版本0.5.6发布于2026年5月27日，更新说明只有英文原文“Bug fixes and performance improvements.”（错误修复和性能改进）。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Local AI Chat Pocket免费吗？',
            a: '可免费下载，含应用内购买：每周$6.99、每月$14.99或每年$99.99，见App Store页面。',
          },
          {
            q: 'Local AI Chat - pocket是谁开发的？',
            a: '据App Store页面和隐私政策，开发者是个人Rica Harz。名称相近的应用，例如“Private AI Chat: Pocket LLM”，出自不同的开发者。',
          },
          {
            q: '它可以在没有网络的情况下运行吗？',
            a: '可以，模型装到设备上之后即可。隐私政策中提到的可选云端模式默认关闭。',
          },
          {
            q: '它能在Android或Mac上使用吗？',
            a: '不能。应用页面只涵盖iPhone、iPad和Apple Vision。',
          },
          {
            q: '我可以运行哪些模型？',
            a: '页面点名了Llama、Gemma、Qwen、Mistral、Phi、OpenELM和Deepseek模型，大多为4位量化版本，此外还有图像模型。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '从纸面上看，对于想要一款简单的离线聊天应用、希望模型列表丰富，并需要在运行iOS 18.6或更高版本的iPhone或iPad上使用图像生成和快捷指令的用户，Local AI Chat - pocket很合适。',
          '需要注意的是透明度、定价和维护：它是闭源的，付费档位没有记载，隐私政策比应用页面上的英文原文“zero data collection”更为复杂，而且最近一次更新是在2026年5月。',
          '如果您想要开源方案，请先从[Private Mind](/zh/power-local-llm/private-mind-review)开始。如果您想在一款应用中同时使用图像生成和快捷指令，建议先试用免费版，再决定是否付费。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store上的Local AI Chat - pocket](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) — 版本、价格、要求、功能和开发者。',
          '[Pocket官方网站](https://oneai.framer.website/) — 开发者自己对这款应用的说明。',
          '[Pocket隐私政策](https://oneai.framer.website/privacy) — 数据收集、遥测数据和可选的云端模式。',
          '[Pocket支持页面](https://oneai.framer.website/support) — 官方网站链接的支持入口。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Locally AI评测](/zh/power-local-llm/locally-ai-review) — 适用于iPhone、iPad和Mac的免费增值设备端应用。',
          '[Private Mind评测](/zh/power-local-llm/private-mind-review) — 适用于iPhone和Android的开源离线聊天应用。',
          '[Oscilla评测](/zh/power-local-llm/oscilla-review) — 内置固定设备端模型目录的iOS应用。',
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于iOS和Android的开源设备端聊天应用。',
          '[MLXHub评测](/zh/power-local-llm/mlxhub-review) — 带有局域网服务器和多设备模型拆分功能的iPhone和iPad应用。',
          '[完整本地LLM软件目录](/zh/directory) — 涵盖多平台本地LLM工具的更全面目录。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-06',
    dateModified: '2026-10-06',
    next_refresh_due: '2027-04-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-chat-pocket-review-hero-es.webp',
    title: 'Reseña de Local AI Chat Pocket: chat de LLM e imágenes sin conexión para iPhone y iPad',
    seoTitle: 'Reseña de Local AI Chat Pocket: chat LLM sin conexión para iPhone y iPad',
    intro:
      'Local AI Chat - pocket, a la que su propio sitio llama Pocket, es una app para iPhone y iPad que descarga modelos abiertos de lenguaje en el dispositivo, genera imágenes y chatea sin conexión. Esta reseña explica qué documentan su ficha de la App Store, su sitio oficial y su política de privacidad, qué queda poco claro y cómo se compara con otras apps de IA local para iOS.',
    metaDescription:
      'Reseña de Local AI Chat Pocket: app para iPhone y iPad con chat de LLM e imágenes sin conexión en el dispositivo. Precios desde $6.99 semanales, requisito de iOS 18.6, política de privacidad y modo nube, límites, alternativas.',
    twitterDescription:
      'Reseña de Local AI Chat Pocket: una app freemium de iOS/iPadOS con modelos sin conexión en el dispositivo y generación de imágenes. Precios, requisitos, política de privacidad, límites y alternativas.',
    audience:
      'Usuarios de iPhone y iPad que quieren ejecutar modelos abiertos sin conexión en el dispositivo — cubre funciones, requisitos, precios, privacidad, límites y alternativas.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Local AI Chat Pocket',
    targetKeywords: [
      'reseña local ai chat pocket',
      'local ai chat pocket ios',
      'pocket llm sin conexión iphone',
      'rica harz pocket app',
      'ejecutar llm en iphone sin conexión',
      'chat ia sin conexión ipad',
      'generación de imágenes en el dispositivo iphone',
      'app llm privada ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Advertencia: Local AI Chat - pocket no recibe actualizaciones desde el 27 de mayo de 2026 (versión 0.5.6), por lo que podría estar sin mantenimiento; comprueba que funciona en tu dispositivo antes de depender de ella.** **Local AI Chat - pocket es una app freemium y de código cerrado para iOS y iPadOS que descarga en el dispositivo modelos abiertos como Llama, Gemma, Qwen y Mistral, genera imágenes y chatea sin conexión.** Según su ficha de la App Store, requiere iOS o iPadOS 18.6 o posterior y se descarga gratis, con compras dentro de la app semanales, mensuales y anuales. Esta reseña cubre la versión 0.5.6 y se basa en la ficha pública, el sitio oficial y la política de privacidad, no en pruebas prácticas.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar Local AI Chat Pocket para IA sin conexión en un iPhone o iPad?',
        answer:
          'Quizá, si quieres una app de chat sin conexión sencilla, con una amplia lista de modelos, generación de imágenes y compatibilidad con Atajos, y tienes iOS 18.6 o posterior. Comprueba antes tres cosas: los niveles de pago se cobran por semana, mes y año sin que se indique qué funciones incluye cada uno, la app es de código cerrado en la versión 0.5.6, y la política de privacidad describe telemetría anónima además de un modo nube opcional. Private Mind y PocketPal AI son alternativas de código abierto.',
        bullets: [
          'Descarga gratuita con compras dentro de la app: $6.99 semanales, $14.99 mensuales o $99.99 anuales.',
          'Descarga modelos abiertos (Llama, Gemma, Qwen, Mistral, Phi) y también admite generación de imágenes.',
          'Integración con Atajos, temas y fuentes ajustables y un system prompt editable.',
          'Requiere iOS o iPadOS 18.6 o posterior; la ficha muestra además visionOS 2.6 o posterior.',
          'Código cerrado; la política de privacidad menciona telemetría anónima y un modo nube opcional, desactivado por defecto.',
        ],
        updatedDate: '2026-10-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Cómo conseguir Local AI Chat Pocket', anchor: 'get-it' },
      { label: 'Local AI Chat Pocket de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Local AI Chat Pocket', anchor: 'what-is-pocket' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Requisitos del dispositivo', anchor: 'requirements' },
      { label: 'Precios y privacidad', anchor: 'privacy' },
      { label: 'Compensaciones: ventajas frente a limitaciones', anchor: 'tradeoffs' },
      { label: 'Local AI Chat Pocket frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Local AI Chat Pocket', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Local AI Chat Pocket', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI Chat - pocket, de Rica Harz, es una app freemium para iPhone y iPad que descarga modelos abiertos de lenguaje en el dispositivo, genera imágenes y chatea sin conexión.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en ella como un chatbot sin conexión que llevas en el bolsillo: una vez que el modelo está en el teléfono no hace falta conexión, y la app añade Atajos y generación de imágenes.',
          },
        ],
        items: [
          'Versión reseñada: 0.5.6, según la [ficha de la App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661).',
          'Precio: descarga gratuita; las compras dentro de la app figuran a $6.99 semanales, $14.99 mensuales y $99.99 anuales.',
          'Plataforma: iOS y iPadOS 18.6 o posterior; la ficha muestra además visionOS 2.6 o posterior.',
          'Funciones destacadas: amplia lista de modelos, generación de imágenes, integración con Atajos, system prompt editable.',
          'Apertura: código cerrado; no se encontró ningún repositorio público.',
        ],
      },
      getItPocket: {
        id: 'get-it',
        title: 'Cómo conseguir Local AI Chat Pocket',
        content: [
          '**Local AI Chat - pocket se distribuye a través de la App Store de Apple.** La descarga ocupa 256.4 MB y la app se descarga gratis con compras dentro de la app.',
          'Esta reseña complementa el [directorio de software LLM local](/es/directory) de PromptQuorum, que incluye la app junto a otras herramientas de IA local móviles y de escritorio.',
        ],
        columns: ['Canal', 'Cómo conseguirla'],
        rows: [
          {
            'Canal': 'App Store de Apple',
            'Cómo conseguirla': '[Local AI Chat - pocket en la App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)',
          },
          {
            'Canal': 'Sitio oficial',
            'Cómo conseguirla': '[oneai.framer.website](https://oneai.framer.website/)',
          },
          {
            'Canal': 'Soporte',
            'Cómo conseguirla': '[Página de soporte de Pocket](https://oneai.framer.website/support)',
          },
          {
            'Canal': 'Política de privacidad',
            'Cómo conseguirla': '[Política de privacidad de Pocket](https://oneai.framer.website/privacy)',
          },
        ],
        note: 'No se encontró ningún repositorio público de código fuente. No hay versión para Android ni para Mac; la ficha cubre solo iPhone, iPad y Apple Vision.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Local AI Chat Pocket de un vistazo',
        columns: ['Atributo', 'Local AI Chat Pocket'],
        rows: [
          { 'Atributo': 'Plataforma', 'Local AI Chat Pocket': 'iOS, iPadOS (18.6+)' },
          { 'Atributo': 'Precio', 'Local AI Chat Pocket': 'Gratis, compras dentro de la app' },
          { 'Atributo': 'Licencia', 'Local AI Chat Pocket': 'Código cerrado' },
          { 'Atributo': 'Funciona totalmente offline', 'Local AI Chat Pocket': 'Sí, con un modelo en el dispositivo' },
          { 'Atributo': 'Descarga de modelos en la app', 'Local AI Chat Pocket': 'No se indica en la ficha' },
          { 'Atributo': 'Entrada de imágenes', 'Local AI Chat Pocket': 'No se indica en la ficha' },
          { 'Atributo': 'Generación de imágenes', 'Local AI Chat Pocket': 'Sí, modelos de imagen locales' },
          { 'Atributo': 'Entrada / salida de voz', 'Local AI Chat Pocket': 'No se indica en la ficha' },
        ],
        note: 'Los atributos siguen la comparación de chats móviles usada en el directorio de software LLM local. Proceden de la ficha de la App Store y del sitio oficial, que no cubren todas las funciones.',
      },
      whatIsPocket: {
        id: 'what-is-pocket',
        title: 'Qué es Local AI Chat Pocket',
        content: [
          '**Local AI Chat - pocket es una app de chat sin conexión construida en torno a modelos intercambiables en el dispositivo.** La ficha ofrece «the simplest way to use private LLMs» que «works fully offline» (la forma más sencilla de usar LLM privados, que funciona totalmente sin conexión; citas de la ficha en inglés), y su sitio oficial llama a la app Pocket, «the local LLM app that keeps your data private» (la app de LLM local que mantiene tus datos privados; cita del sitio en inglés).',
          'La publica Rica Harz, a título individual, y está categorizada como Productividad. No la confundas con apps de nombre parecido como «Private AI Chat: Pocket LLM», que tiene otro desarrollador.',
          'Esta reseña se basa únicamente en la ficha de la App Store, el sitio oficial y la política de privacidad. No incluye pruebas prácticas, por lo que aquí no se valoran la velocidad, la estabilidad ni la calidad de las respuestas.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración es una instalación desde la App Store y, después, elegir un modelo dentro de la app.** La ficha no documenta el flujo del primer arranque, así que los pasos siguientes se basan en lo que indica.',
        ],
        numberedItems: [
          {
            title: 'Comprueba el dispositivo y el sistema operativo',
            whyItMatters: 'La ficha exige iOS o iPadOS 18.6 o posterior, o visionOS 2.6 o posterior.',
          },
          {
            title: 'Instala la app',
            whyItMatters: 'Consíguela en la [App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661); la descarga ocupa 256.4 MB antes de bajar ningún modelo.',
          },
          {
            title: 'Elige un modelo',
            whyItMatters: 'La ficha dice que en la app puedes elegir un modelo nuevo o cambiar entre los existentes; los modelos más grandes necesitan más memoria del dispositivo.',
          },
          {
            title: 'Chatea sin conexión y personaliza',
            whyItMatters: 'Una vez que el modelo está en el dispositivo, el chat funciona sin conexión. Ajusta el tema, las fuentes y el system prompt, o llama al modelo desde Atajos.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El punto fuerte de la app es una amplia lista de modelos en una interfaz sencilla.** Todo lo que sigue procede de la ficha de la App Store.',
        ],
        items: [
          '**Modelos de lenguaje.** La ficha nombra Llama 3.2 1B y 3B, Llama 3 8B, Mistral 7B, Phi, Gemma 2 2B y 9B, OpenELM, Qwen 3 y Deepseek, sobre todo en versiones de 4 bits.',
          '**Generación de imágenes.** Se admiten modelos de imagen junto a los de texto, con un interruptor entre ambos; la ficha no nombra qué modelos de imagen.',
          '**Atajos.** Puedes chatear con el modelo local o enviar su resultado a otras acciones mediante Atajos de Apple.',
          '**Personalización.** El tema, las fuentes y el system prompt se pueden ajustar en la app, y los chats se pueden fijar.',
          '**Idiomas.** La interfaz está disponible en inglés y otros 22 idiomas.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos del dispositivo',
        content: [
          '**La app requiere iOS o iPadOS 18.6 o posterior, o visionOS 2.6 o posterior.** La ficha no da ninguna cifra de RAM ni una lista de chips compatibles.',
          'La memoria es el límite real: un modelo de 1B cabe en muchos más dispositivos que uno de 7B o 9B. Ni la ficha ni el sitio indican qué modelos caben en qué iPhone, así que prueba primero un modelo pequeño.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Precios y privacidad',
        content: [
          '**Local AI Chat - pocket se descarga gratis, con compras dentro de la app a $6.99 semanales, $14.99 mensuales y $99.99 anuales.** Ni la ficha ni el sitio dicen qué desbloquean los niveles de pago, así que revisa el muro de pago en la app antes de depender de una función.',
          'La ficha dice «zero data collection» (cero recopilación de datos; cita de la ficha en inglés) y que tus datos nunca salen del dispositivo. La política de privacidad, vigente desde el 17 de febrero de 2026, es más detallada: describe telemetría mínima y anonimizada, datos de fallos y rendimiento conservados hasta 12 meses, y dice que los chats y el contenido personal permanecen por defecto en el dispositivo.',
          'La política describe también un modo opcional de procesamiento en la nube, desactivado por defecto, que enviaría texto, imágenes y chats al proveedor externo TogetherAI. La política no cubre los pagos de suscripción. La app es de código cerrado y esta reseña no inspeccionó el tráfico de red, así que estas afirmaciones son del propio desarrollador.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compensaciones: ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Chat sin conexión',
            'Qué significa en el uso real': 'Chatea con los modelos descargados sin conexión.',
            'Limitación / advertencia': 'Requiere iOS 18.6 y memoria suficiente para el modelo elegido.',
          },
          {
            'Ventaja': 'Amplia lista de modelos',
            'Qué significa en el uso real': 'Llama, Gemma, Qwen, Mistral, Phi y Deepseek en una sola app.',
            'Limitación / advertencia': 'No se publican tamaños, guía de compatibilidad ni motor por dispositivo.',
          },
          {
            'Ventaja': 'Generación de imágenes',
            'Qué significa en el uso real': 'Modelos de texto y de imagen en la misma app.',
            'Limitación / advertencia': 'La ficha no nombra los modelos de imagen ni sus velocidades.',
          },
          {
            'Ventaja': 'Compatibilidad con Atajos',
            'Qué significa en el uso real': 'Llama al modelo local desde tus propias automatizaciones.',
            'Limitación / advertencia': 'Solo lo que indica la ficha; no se publica lista de acciones.',
          },
          {
            'Ventaja': 'Gratis para empezar',
            'Qué significa en el uso real': 'Sin coste para descargarla y probarla.',
            'Limitación / advertencia': 'Los niveles de pago cuestan hasta $99.99 al año sin desglose de funciones.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Local AI Chat Pocket frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Origen de los modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'Local AI Chat Pocket',
            'Plataformas': 'iOS, iPadOS',
            'Precio y licencia': 'Freemium, código cerrado',
            'Origen de los modelos': 'Lista de modelos en la app',
            'Diferencia clave': 'Añade generación de imágenes y Atajos; nivel de pago semanal',
          },
          {
            'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Plataformas': 'iOS, Mac',
            'Precio y licencia': 'Freemium, código cerrado',
            'Origen de los modelos': 'Catálogo de modelos en la app',
            'Diferencia clave': 'También en Mac; no figura generación de imágenes',
          },
          {
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio y licencia': 'Gratis, MIT',
            'Origen de los modelos': 'Descargas de Hugging Face',
            'Diferencia clave': 'Código abierto y también en Android; totalmente gratis',
          },
          {
            'App': '[Oscilla](/es/power-local-llm/oscilla-review)',
            'Plataformas': 'iOS',
            'Precio y licencia': 'Gratis, código cerrado',
            'Origen de los modelos': 'Más de 40 modelos en la app',
            'Diferencia clave': 'Catálogo fijo más amplio; sin compras dentro de la app',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Precio y licencia': 'Gratis, MIT',
            'Origen de los modelos': 'Modelos GGUF',
            'Diferencia clave': 'Código abierto, basada en llama.cpp, multiplataforma',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia. Verifica los detalles actuales en la ficha propia de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Local AI Chat Pocket',
        items: [
          '**Personas que quieren una sola app sin conexión para modelos de texto y de imagen.** Ambos figuran en la misma interfaz.',
          '**Usuarios de Atajos.** La integración con Atajos permite que otras automatizaciones llamen al modelo local.',
          '**Quien quiera una amplia lista de modelos para probar.** Se nombran Llama, Gemma, Qwen, Mistral y más.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Local AI Chat Pocket',
        items: [
          '**Cualquiera que necesite código abierto.** El código no es público; [Private Mind](/es/power-local-llm/private-mind-review) y [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) son de código abierto.',
          '**Usuarios de Android o Mac.** Solo figuran iPhone, iPad y Apple Vision; PocketPal AI y Private Mind funcionan ambas en Android.',
          '**Dispositivos con una versión anterior a iOS o iPadOS 18.6.** La ficha fija ese mínimo.',
          '**Quien necesite una garantía estricta de cero telemetría.** La política de privacidad describe telemetría anónima y un modo nube opcional; léela primero.',
          '**Quien quiera una app actualizada recientemente.** La versión 0.5.6 data del 27 de mayo de 2026, y sus notas de versión dicen solo «Bug fixes and performance improvements.» (correcciones de errores y mejoras de rendimiento; cita de la ficha en inglés).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Local AI Chat Pocket?',
            a: 'Se descarga gratis con compras dentro de la app a $6.99 semanales, $14.99 mensuales o $99.99 anuales, según la ficha de la App Store.',
          },
          {
            q: '¿Quién desarrolla Local AI Chat - pocket?',
            a: 'Rica Harz, a título individual, según la App Store y la política de privacidad. Las apps con nombres parecidos, como «Private AI Chat: Pocket LLM», son de otros desarrolladores.',
          },
          {
            q: '¿Puede funcionar sin conexión a internet?',
            a: 'Sí, una vez que el modelo está en el dispositivo. El modo nube opcional de la política de privacidad está desactivado por defecto.',
          },
          {
            q: '¿Funciona en Android o Mac?',
            a: 'No. La ficha cubre solo iPhone, iPad y Apple Vision.',
          },
          {
            q: '¿Qué modelos puedo ejecutar?',
            a: 'La ficha nombra modelos Llama, Gemma, Qwen, Mistral, Phi, OpenELM y Deepseek, sobre todo en versiones de 4 bits, además de modelos de imagen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Sobre el papel, Local AI Chat - pocket encaja bien con quien quiere una app de chat sin conexión sencilla, con una amplia lista de modelos, generación de imágenes y Atajos en un iPhone o iPad con iOS 18.6 o posterior.',
          'Las salvedades son la transparencia, el precio y el mantenimiento: es de código cerrado, los niveles de pago no están documentados, la política de privacidad es más matizada que el «zero data collection» de la ficha y la última actualización fue en mayo de 2026.',
          'Si quieres código abierto, empieza con [Private Mind](/es/power-local-llm/private-mind-review). Si quieres generación de imágenes y Atajos en una sola app, prueba el nivel gratuito antes de pagar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Local AI Chat - pocket en la App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) — versión, precio, requisitos, funciones y autoría.',
          '[Sitio oficial de Pocket](https://oneai.framer.website/) — la descripción de la app en la propia web del producto.',
          '[Política de privacidad de Pocket](https://oneai.framer.website/privacy) — recopilación de datos, telemetría y modo nube opcional.',
          '[Página de soporte de Pocket](https://oneai.framer.website/support) — entrada de soporte enlazada desde el sitio oficial.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una app freemium en el dispositivo para iPhone, iPad y Mac.',
          '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión de código abierto para iPhone y Android.',
          '[Reseña de Oscilla](/es/power-local-llm/oscilla-review) — una app de iOS con un catálogo fijo de modelos en el dispositivo.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — chat en el dispositivo de código abierto para iOS y Android.',
          '[Reseña de MLXHub](/es/power-local-llm/mlxhub-review) — una app para iPhone y iPad con servidor LAN y reparto de modelos entre dispositivos.',
          '[El directorio completo de software LLM local](/es/directory) — un directorio más amplio de herramientas LLM locales en todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-06',
    dateModified: '2026-10-06',
    next_refresh_due: '2027-04-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-chat-pocket-review-hero-pt.webp',
    title: 'Análise do Local AI Chat Pocket: chat offline com LLM e imagens no iPhone e iPad',
    seoTitle: 'Análise do Local AI Chat Pocket: chat de LLM offline no iPhone e iPad',
    intro:
      'O Local AI Chat - pocket, que o próprio site chama de Pocket, é um aplicativo para iPhone e iPad que baixa modelos abertos de linguagem para o aparelho, gera imagens e conversa sem conexão. Esta análise cobre o que a ficha dele na App Store, o site oficial e a política de privacidade documentam, o que fica pouco claro e como ele se compara a outros aplicativos de IA local para iOS.',
    metaDescription:
      'Análise do Local AI Chat Pocket: app para iPhone e iPad com chat de LLM e imagens offline no dispositivo. Preços a partir de $6.99 por semana, exigência do iOS 18.6, política de privacidade, modo na nuvem, limites e alternativas.',
    twitterDescription:
      'Análise do Local AI Chat Pocket: um app iOS/iPadOS freemium com modelos offline no dispositivo e geração de imagens. Preços, requisitos, política de privacidade, limites e alternativas.',
    audience:
      'Donos de iPhone e iPad que querem rodar modelos abertos offline no próprio aparelho — aborda recursos, requisitos, preços, privacidade, limites e alternativas.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Local AI Chat Pocket',
    targetKeywords: [
      'análise local ai chat pocket',
      'local ai chat pocket ios',
      'pocket llm offline iphone',
      'rica harz app pocket',
      'rodar llm no iphone offline',
      'chat de ia offline ipad',
      'geração de imagens no iphone sem internet',
      'app de llm privado ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**Aviso: o Local AI Chat - pocket não recebe atualização desde 27 de maio de 2026 (versão 0.5.6) e pode estar sem manutenção — confirme se funciona no seu dispositivo antes de depender dele.** **O Local AI Chat - pocket é um aplicativo freemium e de código fechado para iOS e iPadOS que baixa modelos abertos, como Llama, Gemma, Qwen e Mistral, para o aparelho, gera imagens e conversa offline.** Segundo a ficha dele na App Store, exige iOS ou iPadOS 18.6 ou posterior e é gratuito para baixar, com compras no aplicativo semanais, mensais e anuais. Esta análise cobre a versão 0.5.6 e se baseia na ficha pública, no site oficial e na política de privacidade, não em testes práticos.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o Local AI Chat Pocket para IA offline em um iPhone ou iPad?',
        answer:
          'Talvez, se você quer um app de chat offline simples, com uma lista ampla de modelos, geração de imagens e suporte a Atalhos, e usa o iOS 18.6 ou posterior. Confira três pontos antes: os planos pagos são cobrados por semana, mês e ano sem divisão de recursos informada, o app é de código fechado na versão 0.5.6, e a política de privacidade descreve telemetria anônima e um modo opcional na nuvem. O Private Mind e o PocketPal AI são alternativas de código aberto.',
        bullets: [
          'Download gratuito com compras no aplicativo: $6.99 por semana, $14.99 por mês ou $99.99 por ano.',
          'Baixa modelos abertos (Llama, Gemma, Qwen, Mistral, Phi) e também oferece geração de imagens.',
          'Integração com Atalhos, temas e fontes ajustáveis e prompt de sistema editável.',
          'Exige iOS ou iPadOS 18.6 ou posterior; a ficha também mostra visionOS 2.6 ou posterior.',
          'Código fechado; a política de privacidade cita telemetria anônima e um modo opcional na nuvem, desativado por padrão.',
        ],
        updatedDate: '2026-10-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Como obter o Local AI Chat Pocket', anchor: 'get-it' },
      { label: 'Local AI Chat Pocket em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Local AI Chat Pocket', anchor: 'what-is-pocket' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Requisitos do aparelho', anchor: 'requirements' },
      { label: 'Preços e privacidade', anchor: 'privacy' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'Local AI Chat Pocket vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o Local AI Chat Pocket', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o Local AI Chat Pocket', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Local AI Chat - pocket, de Rica Harz, é um aplicativo freemium para iPhone e iPad que baixa modelos abertos de linguagem para o aparelho, gera imagens e conversa offline.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um chatbot offline de bolso: depois que um modelo está no celular, não é preciso conexão, e o app acrescenta Atalhos e geração de imagens.',
          },
        ],
        items: [
          'Versão analisada: 0.5.6, conforme a [ficha da App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661).',
          'Preço: download gratuito; as compras no aplicativo são listadas a $6.99 por semana, $14.99 por mês e $99.99 por ano.',
          'Plataforma: iOS e iPadOS 18.6 ou posterior; a ficha também mostra visionOS 2.6 ou posterior.',
          'Recursos de destaque: lista ampla de modelos, geração de imagens, integração com Atalhos, prompt de sistema editável.',
          'Abertura: código fechado; não foi encontrado repositório público.',
        ],
      },
      getItPocket: {
        id: 'get-it',
        title: 'Como obter o Local AI Chat Pocket',
        content: [
          '**O Local AI Chat - pocket é distribuído pela Apple App Store.** O download tem 256.4 MB e o aplicativo é gratuito para baixar, com compras no aplicativo.',
          'Esta análise complementa o [diretório de software de LLM local](/pt/directory) da PromptQuorum, que lista o app ao lado de outras ferramentas de IA local para celular e desktop.',
        ],
        columns: ['Canal', 'Como obter'],
        rows: [
          {
            'Canal': 'Apple App Store',
            'Como obter': '[Local AI Chat - pocket na App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)',
          },
          {
            'Canal': 'Site oficial',
            'Como obter': '[oneai.framer.website](https://oneai.framer.website/)',
          },
          {
            'Canal': 'Suporte',
            'Como obter': '[Página de suporte do Pocket](https://oneai.framer.website/support)',
          },
          {
            'Canal': 'Política de privacidade',
            'Como obter': '[Política de privacidade do Pocket](https://oneai.framer.website/privacy)',
          },
        ],
        note: 'Não foi encontrado repositório público de código-fonte. Não há versão para Android nem para Mac; a ficha cobre apenas iPhone, iPad e Apple Vision.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Local AI Chat Pocket em resumo',
        columns: ['Atributo', 'Local AI Chat Pocket'],
        rows: [
          { 'Atributo': 'Plataforma', 'Local AI Chat Pocket': 'iOS, iPadOS (18.6+)' },
          { 'Atributo': 'Preço', 'Local AI Chat Pocket': 'Gratuito, compras no app' },
          { 'Atributo': 'Licença', 'Local AI Chat Pocket': 'Código fechado' },
          { 'Atributo': 'Funciona totalmente offline', 'Local AI Chat Pocket': 'Sim, após ter um modelo no aparelho' },
          { 'Atributo': 'Download de modelos no app', 'Local AI Chat Pocket': 'Não informado na ficha' },
          { 'Atributo': 'Entrada de imagens', 'Local AI Chat Pocket': 'Não informado na ficha' },
          { 'Atributo': 'Geração de imagens', 'Local AI Chat Pocket': 'Sim, modelos de imagem no aparelho' },
          { 'Atributo': 'Entrada / saída de voz', 'Local AI Chat Pocket': 'Não informado na ficha' },
        ],
        note: 'Os atributos seguem a comparação de chat para celular usada no Diretório de Software de LLM Local. Eles vêm da ficha da App Store e do site oficial, que não cobrem todos os recursos.',
      },
      whatIsPocket: {
        id: 'what-is-pocket',
        title: 'O que é o Local AI Chat Pocket',
        content: [
          '**O Local AI Chat - pocket é um app de chat offline construído em torno de modelos intercambiáveis no dispositivo.** A ficha anuncia "the simplest way to use private LLMs" (a forma mais simples de usar LLMs privados) que "works fully offline" (funciona totalmente offline), e o site oficial chama o app de Pocket, "the local LLM app that keeps your data private" (o app de LLM local que mantém seus dados privados); as três frases são citações da ficha e do site em inglês.',
          'Ele é publicado por Rica Harz, a título individual, e está na categoria Produtividade. Não o confunda com apps de nome parecido, como "Private AI Chat: Pocket LLM", que tem outro desenvolvedor.',
          'Esta análise se baseia apenas na ficha da App Store, no site oficial e na política de privacidade. Ela não inclui testes práticos, por isso velocidade, estabilidade e qualidade das respostas não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**A configuração é uma instalação pela App Store, seguida da escolha de um modelo dentro do aplicativo.** A ficha não documenta o fluxo da primeira execução, então os passos abaixo seguem o que ela informa.',
        ],
        numberedItems: [
          {
            title: 'Verifique o aparelho e o sistema',
            whyItMatters: 'A ficha exige iOS ou iPadOS 18.6 ou posterior, ou visionOS 2.6 ou posterior.',
          },
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe-o na [App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661); o download tem 256.4 MB, antes de qualquer modelo.',
          },
          {
            title: 'Escolha um modelo',
            whyItMatters: 'A ficha diz que você pode escolher um novo modelo ou alternar entre os existentes no app; modelos maiores exigem mais memória do aparelho.',
          },
          {
            title: 'Converse offline e depois personalize',
            whyItMatters: 'Depois que um modelo está no aparelho, o chat funciona sem conexão. Ajuste o tema, as fontes e o prompt de sistema, ou chame o modelo pelos Atalhos.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O diferencial do app é uma lista ampla de modelos em uma interface simples.** Tudo abaixo vem da ficha da App Store.',
        ],
        items: [
          '**Modelos de linguagem.** A ficha cita Llama 3.2 1B e 3B, Llama 3 8B, Mistral 7B, Phi, Gemma 2 2B e 9B, OpenELM, Qwen 3 e Deepseek, em sua maioria como versões de 4 bits.',
          '**Geração de imagens.** Modelos de imagem são compatíveis ao lado dos de texto, com uma opção para alternar entre eles; a ficha não diz quais modelos de imagem são esses.',
          '**Atalhos.** Você pode conversar com o modelo local ou enviar a saída dele para outras ações por meio dos Atalhos da Apple.',
          '**Personalização.** Tema, fontes e prompt de sistema podem ser ajustados no app, e as conversas podem ser fixadas.',
          '**Idiomas.** A interface está disponível em inglês e em outros 22 idiomas.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos do aparelho',
        content: [
          '**O app exige iOS ou iPadOS 18.6 ou posterior, ou visionOS 2.6 ou posterior.** A ficha não informa a quantidade de RAM nem lista os chips compatíveis.',
          'A memória é o limite real: um modelo de 1B cabe em muito mais aparelhos do que um de 7B ou 9B. Nem a ficha nem o site dizem quais modelos cabem em cada iPhone, então teste primeiro um modelo pequeno.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Preços e privacidade',
        content: [
          '**O Local AI Chat - pocket é gratuito para baixar, com compras no aplicativo listadas a $6.99 por semana, $14.99 por mês e $99.99 por ano.** Nem a ficha nem o site dizem o que os planos pagos liberam, então confira a tela de assinatura no aplicativo antes de contar com algum recurso.',
          'A ficha diz "zero data collection" (nenhuma coleta de dados), citação em inglês, e que os seus dados nunca saem do aparelho. A política de privacidade, em vigor desde 17 de fevereiro de 2026, é mais detalhada: descreve telemetria anonimizada mínima e dados de falhas e desempenho guardados por até 12 meses, e diz que conversas e conteúdo pessoal ficam no aparelho por padrão.',
          'A política também descreve um modo opcional de processamento na nuvem, desativado por padrão, que enviaria texto, imagens e conversas ao provedor terceiro TogetherAI. A política não cobre os pagamentos de assinatura. O aplicativo é de código fechado e esta análise não inspecionou o tráfego de rede, então essas afirmações são do próprio desenvolvedor.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Chat offline',
            'O que significa no uso real': 'Converse com modelos baixados sem conexão.',
            'Limitação / ressalva': 'Exige iOS 18.6 e memória suficiente para o modelo escolhido.',
          },
          {
            'Benefício': 'Lista ampla de modelos',
            'O que significa no uso real': 'Llama, Gemma, Qwen, Mistral, Phi e Deepseek em um só app.',
            'Limitação / ressalva': 'Não há tamanhos, orientação de adequação nem ambiente de execução por aparelho.',
          },
          {
            'Benefício': 'Geração de imagens',
            'O que significa no uso real': 'Modelos de texto e de imagem no mesmo app.',
            'Limitação / ressalva': 'A ficha não cita os modelos de imagem nem as velocidades.',
          },
          {
            'Benefício': 'Suporte a Atalhos',
            'O que significa no uso real': 'Chame o modelo local a partir das suas próprias automações.',
            'Limitação / ressalva': 'Só o que a ficha informa; não há lista de ações publicada.',
          },
          {
            'Benefício': 'Gratuito para começar',
            'O que significa no uso real': 'Sem custo para baixar e experimentar.',
            'Limitação / ressalva': 'Os planos pagos custam até $99.99 por ano, sem divisão de recursos informada.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Local AI Chat Pocket vs. alternativas',
        columns: ['Aplicativo', 'Plataformas', 'Preço e licença', 'Fonte de modelos', 'Diferença-chave'],
        rows: [
          {
            'Aplicativo': 'Local AI Chat Pocket',
            'Plataformas': 'iOS, iPadOS',
            'Preço e licença': 'Freemium, código fechado',
            'Fonte de modelos': 'Lista de modelos no app',
            'Diferença-chave': 'Acrescenta geração de imagens e Atalhos; plano pago semanal',
          },
          {
            'Aplicativo': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Plataformas': 'iOS, Mac',
            'Preço e licença': 'Freemium, código fechado',
            'Fonte de modelos': 'Catálogo de modelos no app',
            'Diferença-chave': 'Também no Mac; nenhuma geração de imagens é listada',
          },
          {
            'Aplicativo': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço e licença': 'Gratuito, MIT',
            'Fonte de modelos': 'Downloads do Hugging Face',
            'Diferença-chave': 'Código aberto e também no Android; totalmente gratuito',
          },
          {
            'Aplicativo': '[Oscilla](/pt/power-local-llm/oscilla-review)',
            'Plataformas': 'iOS',
            'Preço e licença': 'Gratuito, código fechado',
            'Fonte de modelos': 'Mais de 40 modelos no app',
            'Diferença-chave': 'Catálogo fixo maior; nenhuma compra no app listada',
          },
          {
            'Aplicativo': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço e licença': 'Gratuito, MIT',
            'Fonte de modelos': 'Modelos GGUF',
            'Diferença-chave': 'Código aberto, baseado em llama.cpp, multiplataforma',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos de aplicativos de terceiros mudam com frequência. Verifique os detalhes atuais na ficha de cada aplicativo antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o Local AI Chat Pocket',
        items: [
          '**Pessoas que querem um único app offline para modelos de texto e de imagem.** Ambos aparecem na mesma interface.',
          '**Usuários de Atalhos.** A integração com os Atalhos permite que outras automações chamem o modelo local.',
          '**Quem quer uma lista ampla de modelos para experimentar.** Llama, Gemma, Qwen, Mistral e outros são citados.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o Local AI Chat Pocket',
        items: [
          '**Quem precisa de código aberto.** O código não é público; o [Private Mind](/pt/power-local-llm/private-mind-review) e o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) são de código aberto.',
          '**Usuários de Android ou Mac.** Só iPhone, iPad e Apple Vision são listados; o PocketPal AI e o Private Mind funcionam no Android.',
          '**Aparelhos abaixo do iOS ou iPadOS 18.6.** A ficha define esse mínimo.',
          '**Quem precisa de garantia estrita de ausência de telemetria.** A política de privacidade descreve telemetria anônima e um modo opcional na nuvem; leia-a primeiro.',
          '**Quem quer um app atualizado recentemente.** A versão 0.5.6 é de 27 de maio de 2026, e as notas de lançamento dizem apenas "Bug fixes and performance improvements." (correções de bugs e melhorias de desempenho), citação em inglês.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Local AI Chat Pocket é gratuito?',
            a: 'Ele é gratuito para baixar, com compras no aplicativo a $6.99 por semana, $14.99 por mês ou $99.99 por ano, conforme a ficha da App Store.',
          },
          {
            q: 'Quem faz o Local AI Chat - pocket?',
            a: 'Rica Harz, a título individual, segundo a App Store e a política de privacidade. Apps de nome parecido, como "Private AI Chat: Pocket LLM", são de outros desenvolvedores.',
          },
          {
            q: 'Ele funciona sem conexão com a internet?',
            a: 'Sim, depois que um modelo está no aparelho. O modo opcional na nuvem descrito na política de privacidade vem desativado por padrão.',
          },
          {
            q: 'Ele funciona no Android ou no Mac?',
            a: 'Não. A ficha cobre apenas iPhone, iPad e Apple Vision.',
          },
          {
            q: 'Quais modelos posso executar?',
            a: 'A ficha cita modelos Llama, Gemma, Qwen, Mistral, Phi, OpenELM e Deepseek, em sua maioria de 4 bits, além de modelos de imagem.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'No papel, o Local AI Chat - pocket é uma boa opção para quem quer um app de chat offline simples, com lista ampla de modelos, geração de imagens e Atalhos em um iPhone ou iPad com iOS 18.6 ou posterior.',
          'As ressalvas são transparência, preço e manutenção: o código é fechado, os planos pagos não são documentados, a política de privacidade é mais nuançada do que o "zero data collection" da ficha, e a última atualização foi em maio de 2026.',
          'Se você quer código aberto, comece pelo [Private Mind](/pt/power-local-llm/private-mind-review). Se quer geração de imagens e Atalhos em um só app, experimente primeiro a versão gratuita antes de pagar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Local AI Chat - pocket na App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) — versão, preço, requisitos, recursos e desenvolvedor.',
          '[Site oficial do Pocket](https://oneai.framer.website/) — a descrição do app no próprio site do produto.',
          '[Política de privacidade do Pocket](https://oneai.framer.website/privacy) — coleta de dados, telemetria e o modo opcional na nuvem.',
          '[Página de suporte do Pocket](https://oneai.framer.website/support) — página de suporte vinculada no site oficial.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — um aplicativo freemium no dispositivo para iPhone, iPad e Mac.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline de código aberto para iPhone e Android.',
          '[Análise do Oscilla](/pt/power-local-llm/oscilla-review) — um aplicativo iOS com um catálogo fixo de modelos no dispositivo.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — chat de código aberto no dispositivo para iOS e Android.',
          '[Análise do MLXHub](/pt/power-local-llm/mlxhub-review) — um aplicativo para iPhone e iPad com servidor LAN e divisão de modelos entre dispositivos.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de LLM local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-06',
    dateModified: '2026-10-06',
    next_refresh_due: '2027-04-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-chat-pocket-review-hero-ar.webp',
    title: 'مراجعة Local AI Chat Pocket: دردشة نماذج لغوية وصور دون إنترنت للآيفون والآيباد',
    seoTitle: 'مراجعة Local AI Chat Pocket: دردشة نماذج لغوية دون إنترنت للآيفون والآيباد',
    intro:
      'Local AI Chat - pocket، ويسميه موقعه الرسمي Pocket، تطبيق للآيفون والآيباد ينزّل نماذج لغوية مفتوحة إلى الجهاز، ويولّد الصور، ويتيح الدردشة دون اتصال بالإنترنت. تتناول هذه المراجعة ما توثّقه صفحة التطبيق على App Store والموقع الرسمي وسياسة الخصوصية، وما هو غير واضح، ومقارنته بتطبيقات الذكاء الاصطناعي المحلي الأخرى على iOS.',
    metaDescription:
      'مراجعة Local AI Chat Pocket: تطبيق للآيفون والآيباد للدردشة مع نماذج لغوية وصور على الجهاز دون إنترنت. الأسعار من $6.99 أسبوعيًا، ومتطلب iOS 18.6، وسياسة الخصوصية وخيار السحابة، والقيود والبدائل.',
    twitterDescription:
      'مراجعة Local AI Chat Pocket: تطبيق iOS/iPadOS مجاني مع مشتريات داخل التطبيق لتشغيل نماذج وتوليد صور على الجهاز دون إنترنت. الأسعار والمتطلبات وسياسة الخصوصية والقيود والبدائل.',
    audience:
      'مستخدمو آيفون وآيباد الذين يريدون تشغيل نماذج مفتوحة على الجهاز دون إنترنت — يغطي الميزات والمتطلبات والأسعار والخصوصية والقيود والبدائل.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Local AI Chat Pocket',
    targetKeywords: [
      'مراجعة local ai chat pocket',
      'تطبيق local ai chat pocket لنظام ios',
      'تطبيق pocket نموذج لغوي دون إنترنت للآيفون',
      'تطبيق rica harz pocket',
      'تشغيل نموذج لغوي على الآيفون دون إنترنت',
      'دردشة ذكاء اصطناعي دون إنترنت للآيباد',
      'توليد الصور على الآيفون دون إنترنت',
      'تطبيق نموذج لغوي خاص لنظام ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**تحذير: لم يتلقَّ Local AI Chat - pocket أي تحديث منذ 27 مايو 2026 (الإصدار 0.5.6)، وقد يكون غير مدعوم — تأكد من عمله على جهازك قبل الاعتماد عليه.** **Local AI Chat - pocket تطبيق مجاني مغلق المصدر مع مشتريات داخل التطبيق لنظامي iOS وiPadOS، ينزّل نماذج مفتوحة مثل Llama وGemma وQwen وMistral إلى الجهاز، ويولّد الصور، ويتيح الدردشة دون إنترنت.** بحسب صفحته على App Store يتطلب iOS أو iPadOS بالإصدار 18.6 أو أحدث، وتنزيله مجاني مع مشتريات داخل التطبيق أسبوعية وشهرية وسنوية. تغطي هذه المراجعة الإصدار 0.5.6 وتستند إلى الصفحة العلنية والموقع الرسمي وسياسة الخصوصية، لا إلى اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق Local AI Chat Pocket التثبيت لتشغيل الذكاء الاصطناعي دون إنترنت على الآيفون أو الآيباد؟',
        answer:
          'ربما، إذا كنت تريد تطبيق دردشة بسيطًا دون إنترنت مع قائمة واسعة من النماذج وتوليد الصور ودعم الاختصارات (Shortcuts)، وكان جهازك بإصدار iOS 18.6 أو أحدث. تحقق أولًا من ثلاثة أمور: الشرائح المدفوعة مسعّرة أسبوعيًا وشهريًا وسنويًا دون توضيح لتقسيم الميزات، والتطبيق مغلق المصدر في الإصدار 0.5.6، وتصف سياسة الخصوصية بيانات قياس مجهولة مع وضع سحابي اختياري. يظل Private Mind وPocketPal AI بديلين مفتوحي المصدر.',
        bullets: [
          'تنزيل مجاني مع مشتريات داخل التطبيق: $6.99 أسبوعيًا أو $14.99 شهريًا أو $99.99 سنويًا.',
          'ينزّل نماذج مفتوحة (Llama وGemma وQwen وMistral وPhi) ويدعم توليد الصور أيضًا.',
          'تكامل مع الاختصارات (Shortcuts)، وسمات وخطوط قابلة للتعديل، وموجّه نظام قابل للتحرير.',
          'يتطلب iOS أو iPadOS بالإصدار 18.6 أو أحدث؛ وتُظهر الصفحة أيضًا visionOS 2.6 أو أحدث.',
          'مغلق المصدر؛ وتذكر سياسة الخصوصية بيانات قياس مجهولة ووضعًا سحابيًا اختياريًا مطفأً افتراضيًا.',
        ],
        updatedDate: '2026-10-06',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'كيفية الحصول على Local AI Chat Pocket', anchor: 'get-it' },
      { label: 'Local AI Chat Pocket في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Local AI Chat Pocket', anchor: 'what-is-pocket' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'متطلبات الجهاز', anchor: 'requirements' },
      { label: 'الأسعار والخصوصية', anchor: 'privacy' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Local AI Chat Pocket مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Local AI Chat Pocket', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Local AI Chat Pocket', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الخلاصة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local AI Chat - pocket، من تطوير Rica Harz، تطبيق للآيفون والآيباد مجاني مع مشتريات داخل التطبيق، ينزّل نماذج لغوية مفتوحة إلى الجهاز، ويولّد الصور، ويتيح الدردشة دون إنترنت.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله روبوت دردشة في جيبك يعمل دون إنترنت: بعد تنزيل النموذج إلى الهاتف لا يلزم أي اتصال، ويضيف التطبيق الاختصارات (Shortcuts) وتوليد الصور فوق ذلك.',
          },
        ],
        items: [
          'الإصدار المراجَع: 0.5.6 كما يظهر في [صفحة التطبيق على App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661).',
          'السعر: التنزيل مجاني؛ وتُدرج المشتريات داخل التطبيق بسعر $6.99 أسبوعيًا و$14.99 شهريًا و$99.99 سنويًا.',
          'المنصة: iOS وiPadOS بالإصدار 18.6 أو أحدث؛ وتُظهر الصفحة أيضًا visionOS 2.6 أو أحدث.',
          'أبرز الميزات: قائمة واسعة من النماذج وتوليد الصور وتكامل الاختصارات (Shortcuts) وموجّه نظام قابل للتحرير.',
          'الانفتاح: مغلق المصدر؛ ولم يُعثر على مستودع علني.',
        ],
      },
      getItPocket: {
        id: 'get-it',
        title: 'كيفية الحصول على Local AI Chat Pocket',
        content: [
          '**يُوزَّع Local AI Chat - pocket عبر متجر Apple App Store.** حجم التنزيل 256.4 MB، والتطبيق مجاني التنزيل مع مشتريات داخل التطبيق.',
          'تكمّل هذه المراجعة [دليل برمجيات LLM المحلية](/ar/directory) من PromptQuorum، الذي يدرج التطبيق إلى جانب أدوات ذكاء اصطناعي محلي أخرى للجوال وسطح المكتب.',
        ],
        columns: ['القناة', 'كيفية الحصول عليه'],
        rows: [
          {
            'القناة': 'Apple App Store',
            'كيفية الحصول عليه': '[Local AI Chat - pocket على App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)',
          },
          {
            'القناة': 'الموقع الرسمي',
            'كيفية الحصول عليه': '[oneai.framer.website](https://oneai.framer.website/)',
          },
          {
            'القناة': 'الدعم',
            'كيفية الحصول عليه': '[صفحة دعم Pocket](https://oneai.framer.website/support)',
          },
          {
            'القناة': 'سياسة الخصوصية',
            'كيفية الحصول عليه': '[سياسة خصوصية Pocket](https://oneai.framer.website/privacy)',
          },
        ],
        note: 'لم يُعثر على مستودع علني للشيفرة المصدرية. ولا يوجد إصدار لأندرويد أو ماك؛ فالصفحة تغطي الآيفون والآيباد وApple Vision فقط.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Local AI Chat Pocket في لمحة',
        columns: ['الخاصية', 'Local AI Chat Pocket'],
        rows: [
          { 'الخاصية': 'المنصة', 'Local AI Chat Pocket': 'iOS وiPadOS (18.6+)' },
          { 'الخاصية': 'السعر', 'Local AI Chat Pocket': 'مجاني، مع مشتريات داخل التطبيق' },
          { 'الخاصية': 'الترخيص', 'Local AI Chat Pocket': 'مغلق المصدر' },
          { 'الخاصية': 'يعمل دون إنترنت بالكامل', 'Local AI Chat Pocket': 'نعم، بعد تنزيل النموذج' },
          { 'الخاصية': 'تنزيل النماذج داخل التطبيق', 'Local AI Chat Pocket': 'غير مذكور في الصفحة' },
          { 'الخاصية': 'إدخال الصور', 'Local AI Chat Pocket': 'غير مذكور في الصفحة' },
          { 'الخاصية': 'توليد الصور', 'Local AI Chat Pocket': 'نعم، نماذج صور على الجهاز' },
          { 'الخاصية': 'إدخال/إخراج صوتي', 'Local AI Chat Pocket': 'غير مذكور في الصفحة' },
        ],
        note: 'تتبع الخصائص مقارنة تطبيقات الدردشة على الجوال المعتمدة في دليل برمجيات LLM المحلية. وهي مستمدة من صفحة App Store والموقع الرسمي، اللذين لا يغطيان كل ميزة.',
      },
      whatIsPocket: {
        id: 'what-is-pocket',
        title: 'ما هو Local AI Chat Pocket',
        content: [
          '**Local AI Chat - pocket تطبيق دردشة يعمل دون إنترنت ويقوم على نماذج على الجهاز يمكن التبديل بينها.** تقدّمه الصفحة بعبارة "the simplest way to use private LLMs" التي "works fully offline" (أبسط طريقة لاستخدام النماذج اللغوية الخاصة، وتعمل دون إنترنت بالكامل)، ويصف موقعه الرسمي التطبيق بأنه Pocket، "the local LLM app that keeps your data private" (تطبيق النماذج المحلية الذي يحافظ على خصوصية بياناتك)؛ وهذه العبارات مقتبسة من الصفحة والموقع الإنجليزيين.',
          'ينشره Rica Harz بصفة فردية، ويُصنَّف ضمن فئة الإنتاجية (Productivity). لا تخلطه بتطبيقات مشابهة الاسم مثل "Private AI Chat: Pocket LLM" الذي يطوّره مطوّر مختلف.',
          'تعتمد هذه المراجعة على صفحة App Store والموقع الرسمي وسياسة الخصوصية وحدها. ولا تتضمن اختبارًا عمليًا، لذا لا تُقيَّم هنا السرعة ولا الاستقرار ولا جودة الإجابات.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**الإعداد عبارة عن تثبيت من App Store ثم اختيار نموذج داخل التطبيق.** لا توثّق الصفحة تدفق التشغيل الأول، لذا تتبع الخطوات أدناه ما تذكره الصفحة.',
        ],
        numberedItems: [
          {
            title: 'تحقق من الجهاز ونظام التشغيل',
            whyItMatters: 'تشترط الصفحة iOS أو iPadOS بالإصدار 18.6 أو أحدث، أو visionOS بالإصدار 2.6 أو أحدث.',
          },
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'احصل عليه من [App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)؛ وحجم التنزيل 256.4 MB قبل تنزيل أي نموذج.',
          },
          {
            title: 'اختر نموذجًا',
            whyItMatters: 'تقول الصفحة إنه يمكنك اختيار نموذج جديد أو التبديل بين النماذج الموجودة داخل التطبيق؛ وتحتاج النماذج الأكبر إلى مزيد من ذاكرة الجهاز.',
          },
          {
            title: 'ادردش دون إنترنت، ثم خصّص التطبيق',
            whyItMatters: 'بعد تنزيل النموذج إلى الجهاز تعمل الدردشة دون اتصال. عدّل السمة والخطوط وموجّه النظام، أو استدعِ النموذج من الاختصارات (Shortcuts).',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**نقطة قوة التطبيق هي قائمة واسعة من النماذج في واجهة بسيطة.** كل ما يلي مأخوذ من صفحة App Store.',
        ],
        items: [
          '**النماذج اللغوية.** تذكر الصفحة Llama 3.2 1B و3B وLlama 3 8B وMistral 7B وPhi وGemma 2 2B و9B وOpenELM وQwen 3 وDeepseek، معظمها بصيغة 4 بت.',
          '**توليد الصور.** تُدعم نماذج الصور إلى جانب النماذج النصية مع تبديل بينها؛ ولا تسمّي الصفحة نماذج الصور.',
          '**الاختصارات (Shortcuts).** يمكنك الدردشة مع النموذج المحلي أو إرسال مخرجاته إلى إجراءات أخرى عبر اختصارات Apple.',
          '**التخصيص.** يمكن تعديل السمة والخطوط وموجّه النظام داخل التطبيق، كما يمكن تثبيت المحادثات.',
          '**اللغات.** الواجهة متاحة بالإنجليزية و22 لغة أخرى.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'متطلبات الجهاز',
        content: [
          '**يتطلب التطبيق الإصدار 18.6 أو أحدث من iOS أو iPadOS، أو الإصدار 2.6 أو أحدث من visionOS.** ولا تذكر الصفحة حجم الذاكرة العشوائية ولا قائمة المعالجات المدعومة.',
          'الذاكرة هي الحد الفعلي: يتسع نموذج 1B لأجهزة أكثر بكثير مما يتسع له نموذج 7B أو 9B. ولا تذكر الصفحة ولا الموقع أي النماذج يتسع لأي آيفون، لذا جرّب نموذجًا صغيرًا أولًا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الأسعار والخصوصية',
        content: [
          '**تنزيل Local AI Chat - pocket مجاني، وتُدرج المشتريات داخل التطبيق بسعر $6.99 أسبوعيًا و$14.99 شهريًا و$99.99 سنويًا.** لا تذكر الصفحة ولا الموقع ما تفتحه الشرائح المدفوعة، لذا افحص شاشة الدفع في التطبيق قبل الاعتماد على ميزة ما.',
          'تقول الصفحة "zero data collection" (دون أي جمع للبيانات) وإن بياناتك لا تغادر الجهاز أبدًا؛ والعبارة مقتبسة من الصفحة الإنجليزية. أما سياسة الخصوصية السارية من 17 فبراير 2026 فهي أكثر تفصيلًا: تصف بيانات قياس مجهولة في حدها الأدنى وبيانات أعطال وأداء تُحفظ حتى 12 شهرًا، وتقول إن المحادثات والمحتوى الشخصي تبقى على الجهاز افتراضيًا.',
          'وتصف السياسة أيضًا وضع معالجة سحابية اختياريًا، مطفأً افتراضيًا، يرسل النصوص والصور والمحادثات إلى مزوّد خارجي هو TogetherAI. ولا تغطي السياسة مدفوعات الاشتراك. والتطبيق مغلق المصدر ولم تفحص هذه المراجعة حركة الشبكة، لذا فإن هذه البيانات هي أقوال المطوّر نفسه.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'دردشة دون إنترنت',
            'ما تعنيه في الاستخدام الفعلي': 'ادردش مع النماذج المنزَّلة دون اتصال.',
            'القيد / الملاحظة': 'يتطلب iOS 18.6 وذاكرة تكفي للنموذج المختار.',
          },
          {
            'الميزة': 'قائمة نماذج واسعة',
            'ما تعنيه في الاستخدام الفعلي': 'Llama وGemma وQwen وMistral وPhi وDeepseek في تطبيق واحد.',
            'القيد / الملاحظة': 'لا تُنشر أحجام ولا إرشادات ملاءمة ولا محرك تشغيل لكل جهاز.',
          },
          {
            'الميزة': 'توليد الصور',
            'ما تعنيه في الاستخدام الفعلي': 'نماذج نصوص وصور في التطبيق نفسه.',
            'القيد / الملاحظة': 'لا تسمّي الصفحة نماذج الصور ولا سرعتها.',
          },
          {
            'الميزة': 'دعم الاختصارات (Shortcuts)',
            'ما تعنيه في الاستخدام الفعلي': 'استدعِ النموذج المحلي من أتمتتك الخاصة.',
            'القيد / الملاحظة': 'فقط ما تذكره الصفحة؛ ولا تُنشر قائمة بالإجراءات.',
          },
          {
            'الميزة': 'مجاني للبدء',
            'ما تعنيه في الاستخدام الفعلي': 'دون تكلفة للتنزيل والتجربة.',
            'القيد / الملاحظة': 'تبلغ الشرائح المدفوعة حتى $99.99 سنويًا دون تقسيم معلن للميزات.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Local AI Chat Pocket مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'مصدر النموذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Local AI Chat Pocket',
            'المنصات': 'iOS، iPadOS',
            'السعر والترخيص': 'مجاني مع ميزات مدفوعة، مغلق المصدر',
            'مصدر النموذج': 'قائمة نماذج داخل التطبيق',
            'الفرق الرئيسي': 'يضيف توليد الصور والاختصارات؛ شريحة مدفوعة أسبوعية',
          },
          {
            'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'المنصات': 'iOS، ماك',
            'السعر والترخيص': 'مجاني مع ميزات مدفوعة، مغلق المصدر',
            'مصدر النموذج': 'كتالوج نماذج داخل التطبيق',
            'الفرق الرئيسي': 'يعمل على ماك أيضًا؛ ولا يُدرج توليد الصور',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر والترخيص': 'مجاني، MIT',
            'مصدر النموذج': 'تنزيلات من Hugging Face',
            'الفرق الرئيسي': 'مفتوح المصدر ويعمل على أندرويد أيضًا؛ مجاني بالكامل',
          },
          {
            'التطبيق': '[Oscilla](/ar/power-local-llm/oscilla-review)',
            'المنصات': 'iOS',
            'السعر والترخيص': 'مجاني، مغلق المصدر',
            'مصدر النموذج': 'أكثر من 40 نموذجًا داخل التطبيق',
            'الفرق الرئيسي': 'كتالوج ثابت أكبر؛ ولا تُدرج مشتريات داخل التطبيق',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS، أندرويد',
            'السعر والترخيص': 'مجاني، MIT',
            'مصدر النموذج': 'نماذج GGUF',
            'الفرق الرئيسي': 'مفتوح المصدر، قائم على llama.cpp، متعدد المنصات',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات للتطبيقات الخارجية بشكل متكرر. تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Local AI Chat Pocket',
        items: [
          '**من يريدون تطبيقًا واحدًا يعمل دون إنترنت للنماذج النصية ونماذج الصور.** كلاهما مُدرج في الواجهة نفسها.',
          '**مستخدمو الاختصارات (Shortcuts).** يتيح تكامل الاختصارات لأتمتة أخرى استدعاء النموذج المحلي.',
          '**كل من يريد قائمة واسعة من النماذج لتجربتها.** تُذكر Llama وGemma وQwen وMistral وغيرها.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Local AI Chat Pocket',
        items: [
          '**كل من يحتاج إلى مصدر مفتوح.** الشيفرة غير متاحة للعموم؛ و[Private Mind](/ar/power-local-llm/private-mind-review) و[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) مفتوحا المصدر.',
          '**مستخدمو أندرويد أو ماك.** تُدرج الصفحة الآيفون والآيباد وApple Vision فقط؛ ويعمل PocketPal AI وPrivate Mind كلاهما على أندرويد.',
          '**الأجهزة التي تعمل بإصدار أقدم من iOS أو iPadOS 18.6.** فهذا هو الحد الأدنى الذي تضعه الصفحة.',
          '**كل من يحتاج إلى ضمان صارم بعدم وجود أي بيانات قياس.** تصف سياسة الخصوصية بيانات قياس مجهولة ووضعًا سحابيًا اختياريًا؛ فاقرأها أولًا.',
          '**كل من يريد تطبيقًا محدَّثًا حديثًا.** يعود الإصدار 0.5.6 إلى 27 مايو 2026، وملاحظات الإصدار فيه تقتصر على "Bug fixes and performance improvements." (اقتباس من الصفحة الإنجليزية: إصلاحات أخطاء وتحسينات أداء).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Local AI Chat Pocket مجاني؟',
            a: 'تنزيله مجاني مع مشتريات داخل التطبيق بسعر $6.99 أسبوعيًا أو $14.99 شهريًا أو $99.99 سنويًا، كما تعرض صفحة App Store.',
          },
          {
            q: 'من يطوّر Local AI Chat - pocket؟',
            a: 'Rica Harz بصفة فردية، بحسب App Store وسياسة الخصوصية. أما التطبيقات المشابهة الاسم، مثل "Private AI Chat: Pocket LLM"، فمن مطوّرين مختلفين.',
          },
          {
            q: 'هل يعمل دون اتصال بالإنترنت؟',
            a: 'نعم، بعد تنزيل النموذج إلى الجهاز. أما الوضع السحابي الاختياري المذكور في سياسة الخصوصية فهو مطفأ افتراضيًا.',
          },
          {
            q: 'هل يعمل على أندرويد أو ماك؟',
            a: 'لا. تغطي الصفحة الآيفون والآيباد وApple Vision فقط.',
          },
          {
            q: 'ما النماذج التي يمكنني تشغيلها؟',
            a: 'تذكر الصفحة نماذج Llama وGemma وQwen وMistral وPhi وOpenELM وDeepseek، معظمها بصيغة 4 بت، إضافة إلى نماذج صور.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content: [
          'يبدو Local AI Chat - pocket مناسبًا على الورق لمن يريد تطبيق دردشة بسيطًا دون إنترنت مع قائمة واسعة من النماذج وتوليد الصور والاختصارات (Shortcuts) على آيفون أو آيباد بإصدار iOS 18.6 أو أحدث.',
          'التحفظات هي الشفافية والتسعير والتحديث: فهو مغلق المصدر، والشرائح المدفوعة غير موثّقة، وسياسة الخصوصية أكثر تفصيلًا من عبارة "zero data collection" في الصفحة، وكان آخر تحديث في مايو 2026.',
          'إذا كنت تريد مصدرًا مفتوحًا فابدأ بـ[Private Mind](/ar/power-local-llm/private-mind-review). وإذا أردت توليد الصور والاختصارات في تطبيق واحد، فجرّب الطبقة المجانية قبل الدفع.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Local AI Chat - pocket على App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) — الإصدار والسعر والمتطلبات والميزات والجهة المطوّرة.',
          '[الموقع الرسمي لـ Pocket](https://oneai.framer.website/) — وصف الجهة المطوّرة نفسها للتطبيق.',
          '[سياسة خصوصية Pocket](https://oneai.framer.website/privacy) — جمع البيانات وبيانات القياس والوضع السحابي الاختياري.',
          '[صفحة دعم Pocket](https://oneai.framer.website/support) — صفحة الدعم المرتبطة من الموقع الرسمي.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — تطبيق يعمل على الجهاز لأجهزة آيفون وآيباد وماك، مجاني مع ميزات مدفوعة.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مفتوح المصدر يعمل دون إنترنت على آيفون وأندرويد.',
          '[مراجعة Oscilla](/ar/power-local-llm/oscilla-review) — تطبيق iOS بكتالوج ثابت من النماذج على الجهاز.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — دردشة مفتوحة المصدر على الجهاز لنظامي iOS وأندرويد.',
          '[مراجعة MLXHub](/ar/power-local-llm/mlxhub-review) — تطبيق للآيفون والآيباد مع خادم شبكة محلية وتقسيم النموذج على عدة أجهزة.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/directory) — دليل أوسع لأدوات LLM المحلية عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-06',
    dateModified: '2026-10-06',
    next_refresh_due: '2027-04-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/local-ai-chat-pocket-review-hero-ko.webp',
    title: 'Local AI Chat Pocket 리뷰: 아이폰과 아이패드용 오프라인 LLM 및 이미지 채팅',
    seoTitle: 'Local AI Chat Pocket 리뷰: 아이폰·아이패드 오프라인 LLM 채팅',
    intro:
      'Local AI Chat - pocket(공식 사이트에서는 Pocket이라고 부릅니다)은 오픈 언어 모델을 기기에 내려받아 이미지를 생성하고, 인터넷 연결 없이 채팅할 수 있는 아이폰 및 아이패드 앱입니다. 이 리뷰는 App Store 목록, 공식 사이트, 개인정보 처리방침에 문서화된 내용, 불분명한 부분, 그리고 다른 iOS 로컬 AI 앱과의 비교를 다룹니다.',
    metaDescription:
      'Local AI Chat Pocket 리뷰: 오프라인 온디바이스 LLM 및 이미지 채팅용 아이폰·아이패드 앱. 주간 $6.99부터 시작하는 가격, iOS 18.6 요구 사항, 개인정보 처리방침과 클라우드 옵션, 한계, 대안.',
    twitterDescription:
      'Local AI Chat Pocket 리뷰: 오프라인 온디바이스 모델과 이미지 생성을 지원하는 프리미엄 iOS/iPadOS 앱. 가격, 요구 사항, 개인정보 처리방침, 한계, 대안.',
    audience:
      '오픈 모델을 기기에서 오프라인으로 실행하고 싶은 아이폰 및 아이패드 사용자 대상 — 기능, 요구 사항, 가격, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '8분 소요',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Local AI Chat Pocket 리뷰',
    targetKeywords: [
      'local ai chat pocket 리뷰',
      'local ai chat pocket ios',
      'pocket 아이폰 오프라인 llm',
      'rica harz pocket 앱',
      '아이폰 오프라인 llm 실행',
      '아이패드 오프라인 ai 채팅',
      '아이폰 온디바이스 이미지 생성',
      '개인정보 보호 llm 앱 ios',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple silicon', 'Apple Vision Pro'],
    leadAnswerBlock:
      '**경고: Local AI Chat - pocket은 2026년 5월 27일(버전 0.5.6) 이후 업데이트가 없어 유지보수가 중단되었을 수 있습니다. 사용 전에 기기에서 정상 작동하는지 확인하십시오.** **Local AI Chat - pocket은 Llama, Gemma, Qwen, Mistral 같은 오픈 모델을 기기에 내려받아 이미지를 생성하고 오프라인으로 채팅하는 프리미엄 방식의 비공개 소스 iOS 및 iPadOS 앱입니다.** App Store 목록에 따르면 iOS 또는 iPadOS 18.6 이상이 필요하고, 내려받기는 무료이며, 앱 내 구매로 주간, 월간, 연간 플랜을 판매합니다. 이 리뷰는 버전 0.5.6을 다루며, 직접 테스트한 결과가 아니라 공개 목록, 공식 사이트, 개인정보 처리방침에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: '아이폰이나 아이패드에서 오프라인 AI를 쓰려면 Local AI Chat Pocket을 설치할 가치가 있나요?',
        answer:
          '어쩌면 그렇습니다. 폭넓은 모델 목록, 이미지 생성, 단축어 지원을 갖춘 단순한 오프라인 채팅 앱을 원하고 iOS 18.6 이상을 쓴다면 그렇습니다. 먼저 세 가지를 확인하세요. 유료 플랜은 주간, 월간, 연간으로 판매되지만 기능 구분이 명시되어 있지 않고, 앱은 버전 0.5.6의 비공개 소스이며, 개인정보 처리방침에는 익명 원격 측정과 선택형 클라우드 모드가 기술되어 있습니다. Private Mind와 PocketPal AI는 오픈소스 대안입니다.',
        bullets: [
          '앱 내 구매가 있는 무료 다운로드: 주간 $6.99, 월간 $14.99, 연간 $99.99.',
          '오픈 모델(Llama, Gemma, Qwen, Mistral, Phi)을 내려받으며 이미지 생성도 지원함.',
          '단축어 연동, 조정 가능한 테마와 글꼴, 편집 가능한 시스템 프롬프트.',
          'iOS 또는 iPadOS 18.6 이상 필요. 목록에는 visionOS 2.6 이상도 표시됨.',
          '비공개 소스. 개인정보 처리방침에 익명 원격 측정과 기본값이 꺼짐인 선택형 클라우드 모드가 명시되어 있음.',
        ],
        updatedDate: '2026-10-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Local AI Chat Pocket 받기', anchor: 'get-it' },
      { label: 'Local AI Chat Pocket 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Local AI Chat Pocket이란 무엇인가', anchor: 'what-is-pocket' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '기기 요구 사항', anchor: 'requirements' },
      { label: '가격 및 개인정보 보호', anchor: 'privacy' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: 'Local AI Chat Pocket 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'Local AI Chat Pocket을 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'Local AI Chat Pocket을 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '개발자 Rica Harz가 만든 Local AI Chat - pocket은 오픈 언어 모델을 기기에 내려받아 이미지를 생성하고 오프라인으로 채팅하는 프리미엄 방식의 아이폰 및 아이패드 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '주머니 속에 들어 있는 오프라인 챗봇이라고 생각하면 됩니다. 모델을 휴대폰에 내려받고 나면 인터넷 연결이 필요 없고, 앱은 그 위에 단축어와 이미지 생성 기능을 더해 줍니다.',
          },
        ],
        items: [
          '검토한 버전: 0.5.6, [App Store 목록](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)에 표시된 버전.',
          '가격: 내려받기는 무료이며, 앱 내 구매는 주간 $6.99, 월간 $14.99, 연간 $99.99로 표시되어 있음.',
          '플랫폼: iOS 및 iPadOS 18.6 이상이며, 목록에는 visionOS 2.6 이상도 표시됨.',
          '주요 기능: 폭넓은 모델 목록, 이미지 생성, 단축어 연동, 편집 가능한 시스템 프롬프트.',
          '개방성: 비공개 소스; 공개 저장소를 찾지 못함.',
        ],
      },
      getItPocket: {
        id: 'get-it',
        title: 'Local AI Chat Pocket 받기',
        content: [
          '**Local AI Chat - pocket은 Apple App Store로 배포됩니다.** 앱 용량은 256.4 MB이며 앱 내 구매가 있는 무료 앱입니다.',
          '이 리뷰는 이 앱을 다른 모바일 및 데스크톱 로컬 AI 도구와 함께 소개하는 PromptQuorum의 [로컬 LLM 소프트웨어 디렉터리](/ko/directory)와 짝을 이루는 콘텐츠입니다.',
        ],
        columns: ['경로', '받는 방법'],
        rows: [
          {
            '경로': 'Apple App Store',
            '받는 방법': '[App Store의 Local AI Chat - pocket](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)',
          },
          {
            '경로': '공식 사이트',
            '받는 방법': '[oneai.framer.website](https://oneai.framer.website/)',
          },
          {
            '경로': '지원',
            '받는 방법': '[Pocket 지원 페이지](https://oneai.framer.website/support)',
          },
          {
            '경로': '개인정보 처리방침',
            '받는 방법': '[Pocket 개인정보 처리방침](https://oneai.framer.website/privacy)',
          },
        ],
        note: '공개 소스 저장소는 찾지 못했습니다. 안드로이드나 Mac 빌드는 없으며, 목록은 아이폰, 아이패드, Apple Vision만 다룹니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Local AI Chat Pocket 한눈에 보기',
        columns: ['항목', 'Local AI Chat Pocket'],
        rows: [
          { '항목': '플랫폼', 'Local AI Chat Pocket': 'iOS, iPadOS(18.6 이상)' },
          { '항목': '가격', 'Local AI Chat Pocket': '무료, 앱 내 구매' },
          { '항목': '라이선스', 'Local AI Chat Pocket': '비공개 소스' },
          { '항목': '완전 오프라인 실행', 'Local AI Chat Pocket': '예, 모델을 기기에 받은 후' },
          { '항목': '앱 내 모델 다운로드', 'Local AI Chat Pocket': '목록에 명시되어 있지 않음' },
          { '항목': '이미지 입력', 'Local AI Chat Pocket': '목록에 명시되어 있지 않음' },
          { '항목': '이미지 생성', 'Local AI Chat Pocket': '예, 온디바이스 이미지 모델' },
          { '항목': '음성 입력/출력', 'Local AI Chat Pocket': '목록에 명시되어 있지 않음' },
        ],
        note: '항목은 로컬 LLM 소프트웨어 디렉터리에서 사용하는 모바일 채팅 비교 기준을 따릅니다. App Store 목록과 공식 사이트를 근거로 하며, 두 곳이 모든 기능을 다루지는 않습니다.',
      },
      whatIsPocket: {
        id: 'what-is-pocket',
        title: 'Local AI Chat Pocket이란 무엇인가',
        content: [
          '**Local AI Chat - pocket은 전환 가능한 온디바이스 모델을 중심으로 만든 오프라인 채팅 앱입니다.** 목록은 "the simplest way to use private LLMs"이며 "works fully offline"이라고 소개하고, 공식 사이트는 이 앱을 Pocket이라 부르며 "the local LLM app that keeps your data private"라고 설명합니다(모두 영어 목록과 사이트의 원문 인용).',
          '개인 개발자 Rica Harz가 배포하며 카테고리는 생산성입니다. 개발자가 다른 "Private AI Chat: Pocket LLM" 같은 비슷한 이름의 앱과 혼동하지 마세요.',
          '이 리뷰는 App Store 목록, 공식 사이트, 개인정보 처리방침에만 근거합니다. 직접 테스트한 내용은 포함하지 않으므로 속도, 안정성, 답변 품질은 평가하지 않았습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 App Store 설치 후 앱 안에서 모델을 고르는 것입니다.** 목록은 첫 실행 과정을 문서화하지 않으므로, 아래 단계는 목록에 명시된 내용을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '기기와 운영체제 확인하기',
            whyItMatters: '목록에서 iOS 또는 iPadOS 18.6 이상, 또는 visionOS 2.6 이상을 요구합니다.',
          },
          {
            title: '앱 설치하기',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661)에서 받으세요. 모델을 받기 전 앱 용량은 256.4 MB입니다.',
          },
          {
            title: '모델 고르기',
            whyItMatters: '목록에 따르면 앱 안에서 새 모델을 고르거나 기존 모델 사이를 전환할 수 있습니다. 더 큰 모델은 기기의 메모리를 더 많이 필요로 합니다.',
          },
          {
            title: '오프라인으로 채팅하고 맞춤 설정하기',
            whyItMatters: '모델을 기기에 받고 나면 연결 없이도 채팅이 됩니다. 테마, 글꼴, 시스템 프롬프트를 조정하거나 단축어에서 모델을 호출할 수 있습니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**이 앱의 강점은 단순한 인터페이스 안의 폭넓은 모델 목록입니다.** 아래 내용은 모두 App Store 목록에서 가져온 것입니다.',
        ],
        items: [
          '**언어 모델.** 목록에는 Llama 3.2 1B와 3B, Llama 3 8B, Mistral 7B, Phi, Gemma 2 2B와 9B, OpenELM, Qwen 3, Deepseek가 명시되어 있으며, 대부분 4비트 빌드입니다.',
          '**이미지 생성.** 텍스트 모델과 함께 이미지 모델을 지원하며 둘 사이를 전환할 수 있습니다. 목록에는 어떤 이미지 모델인지 명시되어 있지 않습니다.',
          '**단축어.** Apple 단축어를 통해 로컬 모델과 채팅하거나 그 출력을 다른 동작으로 보낼 수 있습니다.',
          '**개인화.** 앱 안에서 테마, 글꼴, 시스템 프롬프트를 조정할 수 있고 채팅을 고정할 수 있습니다.',
          '**언어.** 인터페이스는 영어 외에 22개 언어로 제공됩니다.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '기기 요구 사항',
        content: [
          '**이 앱에는 iOS 또는 iPadOS 18.6 이상, 또는 visionOS 2.6 이상이 필요합니다.** 목록에는 RAM 수치도, 지원하는 칩 목록도 나와 있지 않습니다.',
          '실제 한계는 메모리입니다. 1B 모델은 7B나 9B 모델보다 훨씬 많은 기기에 들어갑니다. 목록과 사이트 어디에도 어떤 모델이 어떤 아이폰에 맞는지 나와 있지 않으므로, 작은 모델부터 시험해 보세요.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '가격 및 개인정보 보호',
        content: [
          '**Local AI Chat - pocket은 내려받기는 무료이며, 앱 내 구매는 주간 $6.99, 월간 $14.99, 연간 $99.99로 표시되어 있습니다.** 목록과 사이트 어디에도 유료 플랜이 무엇을 열어 주는지 나와 있지 않으므로, 기능에 의존하기 전에 앱 안의 결제 화면을 확인하세요.',
          '목록은 "zero data collection"이라고 밝히고(영어 목록의 원문 인용) 데이터가 기기를 떠나지 않는다고 설명합니다. 2026년 2월 17일부터 시행되는 개인정보 처리방침은 더 자세합니다. 최소한의 익명화된 원격 측정과 최대 12개월 보관되는 충돌 및 성능 데이터를 기술하고, 채팅과 개인 콘텐츠는 기본적으로 기기에 남는다고 밝힙니다.',
          '방침에는 텍스트, 이미지, 채팅을 제3자 제공업체인 TogetherAI로 보낼 수 있는, 기본값이 꺼짐인 선택형 클라우드 처리 모드도 기술되어 있습니다. 방침은 구독 결제는 다루지 않습니다. 앱은 비공개 소스이고 이 리뷰에서는 네트워크 트래픽을 검사하지 않았으므로, 이 내용은 개발자 본인의 설명입니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '이점': '오프라인 채팅',
            '실제 사용에서의 의미': '연결 없이 내려받은 모델과 대화할 수 있습니다.',
            '한계 / 유의 사항': 'iOS 18.6과 선택한 모델에 충분한 메모리가 필요합니다.',
          },
          {
            '이점': '폭넓은 모델 목록',
            '실제 사용에서의 의미': 'Llama, Gemma, Qwen, Mistral, Phi, Deepseek를 한 앱에서 씁니다.',
            '한계 / 유의 사항': '크기, 기기별 적합성 안내, 런타임은 공개되어 있지 않습니다.',
          },
          {
            '이점': '이미지 생성',
            '실제 사용에서의 의미': '같은 앱에서 텍스트 모델과 이미지 모델을 씁니다.',
            '한계 / 유의 사항': '목록에는 이미지 모델과 속도가 명시되어 있지 않습니다.',
          },
          {
            '이점': '단축어 지원',
            '실제 사용에서의 의미': '내 자동화에서 로컬 모델을 호출할 수 있습니다.',
            '한계 / 유의 사항': '목록에 명시된 내용뿐이며 동작 목록은 공개되어 있지 않습니다.',
          },
          {
            '이점': '무료로 시작',
            '실제 사용에서의 의미': '내려받아 써 보는 데 비용이 들지 않습니다.',
            '한계 / 유의 사항': '유료 플랜은 연 최대 $99.99이며 기능 구분이 명시되어 있지 않습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Local AI Chat Pocket 대 대안 앱',
        columns: ['앱', '플랫폼', '가격 및 라이선스', '모델 소스', '핵심 차이점'],
        rows: [
          {
            '앱': 'Local AI Chat Pocket',
            '플랫폼': 'iOS, iPadOS',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '모델 소스': '앱 내 모델 목록',
            '핵심 차이점': '이미지 생성과 단축어 추가; 주간 유료 플랜',
          },
          {
            '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '플랫폼': 'iOS, Mac',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '모델 소스': '앱 내 모델 카탈로그',
            '핵심 차이점': 'Mac에서도 사용 가능; 이미지 생성은 표시되어 있지 않음',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, 안드로이드',
            '가격 및 라이선스': '무료, MIT',
            '모델 소스': 'Hugging Face 다운로드',
            '핵심 차이점': '오픈소스이며 안드로이드에서도 쓸 수 있음; 완전 무료',
          },
          {
            '앱': '[Oscilla](/ko/power-local-llm/oscilla-review)',
            '플랫폼': 'iOS',
            '가격 및 라이선스': '무료, 비공개 소스',
            '모델 소스': '앱 내 모델 40개 이상',
            '핵심 차이점': '더 큰 고정 카탈로그; 앱 내 구매는 표시되어 있지 않음',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, 안드로이드',
            '가격 및 라이선스': '무료, MIT',
            '모델 소스': 'GGUF 모델',
            '핵심 차이점': '오픈소스, llama.cpp 기반, 크로스 플랫폼',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 사항은 자주 변경됩니다. 결정하기 전에 각 앱 자체의 목록에서 현재 세부 정보를 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Local AI Chat Pocket을 사용해야 하는 사람',
        items: [
          '**텍스트 모델과 이미지 모델을 위한 오프라인 앱 하나를 원하는 사용자.** 둘 다 같은 인터페이스에 표시되어 있습니다.',
          '**단축어 사용자.** 단축어 연동으로 다른 자동화에서 로컬 모델을 호출할 수 있습니다.',
          '**폭넓은 모델 목록을 써 보고 싶은 사용자.** Llama, Gemma, Qwen, Mistral 등이 명시되어 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Local AI Chat Pocket을 사용하지 말아야 하는 사람',
        items: [
          '**오픈소스가 필요한 사용자.** 코드가 공개되어 있지 않습니다. [Private Mind](/ko/power-local-llm/private-mind-review)와 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)는 오픈소스입니다.',
          '**안드로이드 또는 Mac 사용자.** 아이폰, 아이패드, Apple Vision만 표시되어 있으며, PocketPal AI와 Private Mind는 모두 안드로이드에서 실행됩니다.',
          '**iOS 또는 iPadOS 18.6 미만인 기기.** 목록이 그 기준을 정해 두었습니다.',
          '**원격 측정이 전혀 없다는 확실한 보장이 필요한 사용자.** 개인정보 처리방침에 익명 원격 측정과 선택형 클라우드 모드가 기술되어 있으므로 먼저 읽어 보세요.',
          '**최근에 업데이트된 앱을 원하는 사용자.** 버전 0.5.6은 2026년 5월 27일자이며, 릴리스 노트는 "Bug fixes and performance improvements."라고만 적혀 있습니다(영어 목록의 원문 인용).',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Local AI Chat Pocket은 무료인가요?',
            a: 'App Store 목록에 표시된 대로 내려받기는 무료이며 앱 내 구매는 주간 $6.99, 월간 $14.99, 연간 $99.99입니다.',
          },
          {
            q: 'Local AI Chat - pocket은 누가 만드나요?',
            a: 'App Store와 개인정보 처리방침에 따르면 개인 개발자 Rica Harz입니다. "Private AI Chat: Pocket LLM"처럼 이름이 비슷한 앱은 다른 개발자가 만든 것입니다.',
          },
          {
            q: '인터넷 연결 없이 실행할 수 있나요?',
            a: '네, 모델을 기기에 받고 나면 가능합니다. 개인정보 처리방침에 기술된 선택형 클라우드 모드는 기본값이 꺼짐입니다.',
          },
          {
            q: '안드로이드나 Mac에서 작동하나요?',
            a: '아니요. 목록은 아이폰, 아이패드, Apple Vision만 다룹니다.',
          },
          {
            q: '어떤 모델을 실행할 수 있나요?',
            a: '목록에는 Llama, Gemma, Qwen, Mistral, Phi, OpenELM, Deepseek 모델(대부분 4비트 빌드)과 이미지 모델이 명시되어 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          'Local AI Chat - pocket은 iOS 18.6 이상을 쓰는 아이폰이나 아이패드에서 폭넓은 모델 목록, 이미지 생성, 단축어를 갖춘 단순한 오프라인 채팅 앱을 원하는 사람에게 문서상으로는 잘 맞습니다.',
          '유의할 점은 투명성, 가격, 관리 상태입니다. 비공개 소스이고, 유료 플랜은 문서화되어 있지 않으며, 개인정보 처리방침은 목록의 "zero data collection"보다 더 복잡한 내용을 담고 있고, 마지막 업데이트는 2026년 5월이었습니다.',
          '오픈소스를 원한다면 [Private Mind](/ko/power-local-llm/private-mind-review)부터 시작하세요. 이미지 생성과 단축어를 한 앱에서 원한다면 결제하기 전에 무료 이용 범위부터 써 보세요.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Local AI Chat - pocket](https://apps.apple.com/us/app/local-ai-chat-pocket/id6476791661) — 버전, 가격, 요구 사항, 기능, 개발자.',
          '[Pocket 공식 사이트](https://oneai.framer.website/) — 개발자가 직접 쓴 앱 설명.',
          '[Pocket 개인정보 처리방침](https://oneai.framer.website/privacy) — 데이터 수집, 원격 측정, 선택형 클라우드 모드.',
          '[Pocket 지원 페이지](https://oneai.framer.website/support) — 공식 사이트에서 연결된 지원 페이지.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — 아이폰, 아이패드, Mac용 프리미엄 온디바이스 앱.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — 아이폰과 안드로이드용 오픈소스 오프라인 채팅 앱.',
          '[Oscilla 리뷰](/ko/power-local-llm/oscilla-review) — 온디바이스 모델의 고정 카탈로그를 갖춘 iOS 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 안드로이드용 오픈소스 온디바이스 채팅.',
          '[MLXHub 리뷰](/ko/power-local-llm/mlxhub-review) — LAN 서버와 다중 기기 모델 분할을 갖춘 아이폰 및 아이패드 앱.',
          '[완전한 로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 플랫폼 전반의 로컬 LLM 도구에 대한 더 광범위한 디렉터리.',
        ],
      },
    },
  },
}
