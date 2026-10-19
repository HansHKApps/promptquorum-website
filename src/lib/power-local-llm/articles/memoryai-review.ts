// MemoryAI Review: Free Offline AI Chat for iPhone and Android
// Slug: memoryai-review
// Companion to: private-mind-review, pocketpal-ai-review, off-grid-ai-review, google-ai-edge-gallery-review,
// best-local-llm-apps-android-2026, best-local-llm-apps-iphone-2026
// Sources: App Store + Google Play listings, the developer's website / privacy policy and the public feedback
// repository, all checked 2026-10-19 — no hands-on testing. The developer wrote to PromptQuorum on 2026-10-18 asking
// for inclusion; every fact below was re-checked against those primary sources, not taken from the message.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-en.webp',
    title: 'MemoryAI Review: Free Offline AI Chat for iPhone and Android',
    seoTitle: 'MemoryAI Review: Free Offline AI Chat App for Phones',
    intro:
      'MemoryAI is a free chat app for iPhone and Android from Alessandro Facchini (trading as Facchinits), an independent developer in Italy. It runs open-weight language models on the phone through two engines, llama.cpp and Google\'s LiteRT, and adds document questions, an optional editable Agent Memory, a hands-free voice mode, and a PIN-locked Kid Mode. It is closed source and young: the first App Store release was on 30 March 2026. This review is based on the App Store and Google Play listings, the developer\'s website and privacy policy, and the public feedback repository, checked on 19 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'MemoryAI review: free, closed-source offline AI chat for iPhone and Android with document Q&A, editable Agent Memory and Kid Mode. Privacy and limits.',
    twitterDescription:
      'MemoryAI review: a free, closed-source offline AI chat app for iPhone and Android with document Q&A, editable on-device memory, hands-free voice and a PIN-locked Kid Mode. What the listings and privacy policy say.',
    audience:
      'iPhone and Android users who want a free chat app that runs language models on the device, and who need to know what stays offline, what it sends out, and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI review',
    targetKeywords: [
      'memoryai app review',
      'memoryai offline private ai',
      'offline ai chat app iphone android',
      'on-device ai agent memory',
      'ai kid mode offline app',
      'gguf import mobile app',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (version 1.0.52 on iOS as of 19 October 2026) is a free, closed-source chat app that runs open-weight language models on iPhone and Android with no account, and pairs an editable on-device memory with a PIN-locked Kid Mode.** Models are downloaded once from Hugging Face and then run offline. The store texts and the privacy policy do not fully agree on analytics and purchases, so read the privacy section before relying on the "no tracking" wording.',
    quickAnswerTop: {
      en: {
        question: 'Is MemoryAI really offline and free?',
        answer:
          'Per its listings, yes for the core features: after a one-time model download, chat, document questions and voice run on the phone, with no account and no ads. Its privacy policy adds that anonymous analytics and crash reports are sent out and that purchases for premium features may exist, which the store texts deny.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) and the [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat with GGUF and LiteRT models such as Gemma, Qwen, Llama, Phi and DeepSeek; model downloads are 0.3 to 4 GB each.',
          'Optional Agent Memory that you can view, edit and delete, plus document and image questions.',
          'Kid Mode with a parent PIN, a content filter and a locked model.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is MemoryAI?', anchor: 'what-is-memoryai' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
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
            text: 'MemoryAI is a free, closed-source iPhone and Android app that runs open-weight language models on the device and adds an editable Agent Memory, document questions, hands-free voice and a PIN-locked Kid Mode.',
          },
          {
            type: 'plain-terms',
            text: 'You install it, download a model once, and then chat, talk or ask about your own PDFs without an account; the optional memory it keeps about you lives on the phone, where you can read and delete it.',
          },
        ],
        items: [
          'Developer: Alessandro Facchini, an independent developer in Italy publishing as Facchinits; there is no company behind it beyond that, and no public source code.',
          'Maintenance: the iOS version history shows 13 releases between 30 March and 18 October 2026, and Google Play shows an update on 18 October 2026, so no stale-project warning applies.',
          'Reach: Google Play shows 1K+ downloads and the App Store shows no ratings yet, so the app has little public track record.',
          'Platforms: iPhone (iOS 16.4 or later) and Android; the App Store also lists Macs with Apple M1 or later, marked "not verified for macOS".',
          'Languages: the app is available in English, Italian, German, French, Spanish and Portuguese.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store and Google Play listings, the developer\'s website and privacy policy, and the public feedback repository, checked on 19 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'What Is MemoryAI?',
        content: [
          '**MemoryAI is a mobile chat app that runs open-weight language models locally instead of calling a cloud service.** According to its listings, no model is bundled: you pick one from the in-app list or import any compatible GGUF file from Hugging Face, and the first run needs a network connection to download it. Two inference engines are offered, llama.cpp for GGUF models and Google\'s MediaPipe/LiteRT for Gemma-family models.',
          'The App Store listing is titled "MemoryAI: Offline Private AI" in the US, Japanese and Korean storefronts, "MemoryAI: Private Offline-KI" in Germany and "MemoryAI: a IA que lembra" in Brazil; the Google Play package is com.ts.memoryai. Its "Agent Memory" is a feature of this app, not a separate product.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**MemoryAI is installed from the two mobile stores; no desktop build, source code or sideloaded file is offered.** Both store links below are the ones the developer\'s site and listings use.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'iPhone',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 or later, 198.7 MB)',
          },
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[alessandrofacchini.github.io/memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Same page](https://alessandrofacchini.github.io/memoryai-privacy/) (English, Italian version linked there; last updated 30 June 2026)',
          },
          {
            'Platform': 'Bug reports',
            'Where to get it': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues) (feedback only, no source code)',
          },
        ],
        note: 'Version reviewed: 1.0.52 on iOS, released on 18 October 2026, as shown on the App Store listing; the Google Play page was also updated on 18 October 2026 and its page data lists build 1.0.54. The Google Play listing does not show a minimum Android version in the text read.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**Setup follows the order described in the store listings; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download MemoryAI from the App Store or Google Play; the listings say no account is required and the phone should have 4 GB of RAM or more.',
          },
          {
            title: 'Download a model on Wi-Fi',
            whyItMatters: 'Models are 0.3 to 4 GB each per the listings. The 18 October 2026 update says the first suggested model is now the lightest one that runs well on your phone, and that its download continues if you leave the screen.',
          },
          {
            title: 'Chat or talk',
            whyItMatters: 'Type, dictate, or switch on the continuous voice mode, in which the app listens, answers and reads the answer aloud without taps.',
          },
          {
            title: 'Add documents or images',
            whyItMatters: 'Import PDF, TXT or Markdown files, or pick photos, and ask questions about them.',
          },
          {
            title: 'Optionally turn on Agent Memory',
            whyItMatters: 'It is off by default and needs an embedding model; once on, you can open, edit or delete what it has stored.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store and Google Play descriptions or the privacy policy; none has been independently tested.**',
        ],
        items: [
          '**Two engines and custom models.** Choose llama.cpp or Google\'s MediaPipe/LiteRT per model, import any compatible GGUF file from Hugging Face, save a Hugging Face token for gated models, pause and resume downloads, and adjust temperature, top-k, top-p and maximum tokens per model.',
          '**Agent Memory.** Optional; the AI stores what you tell it in your own words on the device, and you can view, edit or delete each memory. The 1.0.52 notes say requests such as "write an email" are no longer saved as memories.',
          '**Documents and images.** Questions about PDF, TXT and Markdown files, image analysis with vision models (several images at once), and text recognition on photos through Google ML Kit.',
          '**Voice.** On-device voice input, text-to-speech, and a continuous hands-free mode.',
          '**Kid Mode.** A parent PIN, a filter that blocks inappropriate words before they reach the model, a locked model, a safety prompt, warnings for unverified imported models, and a parental unlock that opens settings without ending the mode.',
          '**Everyday tools.** Chat search, 20 persona templates, a speed benchmark in tokens per second, a context-window display, a screen showing whether the loaded model runs on the GPU or CPU, and backup to Google Drive on Android or iCloud on iPhone.',
        ],
        note: 'The two store descriptions are near-identical but not the same; for example, the iOS text mentions iCloud backup and the Android text Google Drive. The installed build is the final authority.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**Chats, documents and memories stay on the device by default, and the developer says the app has no AI servers and sends no chat text.** The Google Play Data safety section declares no data shared with third parties, with possible collection of app info and performance and of device or other IDs, encrypted in transit. The App Store privacy label lists search history, device ID and product interaction for analytics, and device ID, crash and performance data for app functionality, all marked not linked to you.',
          'The [privacy policy](https://alessandrofacchini.github.io/memoryai-privacy/) names what does leave the phone: anonymous usage events to TelemetryDeck, crash reports to Sentry, optional push notifications through OneSignal, model downloads from Hugging Face, and optional backup to your own Google Drive or iCloud. It also says local data is not encrypted by the app and relies on the device\'s own protection, and that conversations leave the app only when you export them.',
          'The store descriptions say "no in-app purchases" and "no tracking", while the policy says the app offers in-app purchases for premium features and lists the analytics above. Which statement matches the current build was not clear from the sources, so treat the policy as the more detailed one.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source, so none of these claims can be checked in code, and PromptQuorum has not audited network traffic. Anyone handling confidential data, or setting up Kid Mode for a child, should verify behavior on their own device.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who want a phone assistant that remembers them without a cloud account.** The Agent Memory is stored locally and editable.',
          '**Parents who want a child-facing offline chat.** Kid Mode combines a PIN, a filter and a locked model, though its effectiveness is unverified.',
          '**People who want to question their own PDFs and photos privately.** Document and image questions are included.',
          '**Users who like to bring their own models.** GGUF import and two engines suit anyone who already has a favorite model.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** PromptQuorum did not run the app, so speed, battery use, answer quality and the real strength of Kid Mode are not assessed.',
          '**Source code and license.** The app is closed source; the feedback repository holds only a README and an issue tracker.',
          '**Purchases and tracking.** The store texts and the privacy policy disagree, as described in the privacy section.',
          '**Android requirements.** The Google Play text read shows no minimum Android version; the iOS minimum is 16.4.',
          '**Track record.** The app has been out for about seven months, with 1K+ Google Play downloads and no App Store ratings yet; the sources give no support commitment.',
          '**Not for users who need very large models.** The listings put downloads at 0.3 to 4 GB, so heavier work belongs on a computer.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source offline chat with on-device document Q&A and benchmarks',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source on-device chat client with its own model library',
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
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing. Of these four, MemoryAI is the only closed-source app.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Who makes MemoryAI?',
            a: 'Alessandro Facchini, an independent developer in Italy who publishes under the name Facchinits. The privacy policy names Facchinits as the data controller.',
          },
          {
            q: 'Can I edit what the AI remembers?',
            a: 'Yes. Agent Memory is optional, stored on the device in your own words, and each entry can be viewed, edited or deleted. It needs an embedding model to work.',
          },
          {
            q: 'How does Kid Mode work?',
            a: 'A parent sets a PIN; the app then locks the active model, filters inappropriate words before they reach the AI, and adds a safety prompt. A parental unlock opens settings temporarily without ending the mode.',
          },
          {
            q: 'Can I use my own models?',
            a: 'Yes. You can import compatible GGUF files from Hugging Face and run them on the llama.cpp engine; Gemma-family models can run on the LiteRT engine. The app warns before an unverified imported model runs in Kid Mode.',
          },
          {
            q: 'Does it work on a Mac?',
            a: 'The App Store lists Macs with Apple M1 or later but marks the app "Designed for iPhone. Not verified for macOS", and there is no separate desktop build.',
          },
          {
            q: 'Where do I report a problem?',
            a: 'In the developer\'s public [feedback repository](https://github.com/alessandrofacchini/memoryai-feedback/issues) on GitHub, or by the support email on the Google Play listing.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'MemoryAI is a free offline mobile chat app that keeps an editable memory of the user on the device and offers a PIN-locked Kid Mode, alongside document and image questions, hands-free voice and two inference engines. It is also frequently updated, with a release the day before this review was checked. Against that, it is closed source, new, small in reach, limited to models of roughly 0.3 to 4 GB, and its store texts and privacy policy disagree on purchases and tracking, so its privacy claims cannot be checked in code. It suits readers who want these specific features and accept a young, closed app; readers who want auditable code can compare [Private Mind](/power-local-llm/private-mind-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[MemoryAI on the App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — price, version history, requirements, privacy label and description, checked 19 October 2026.',
          '[MemoryAI on Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — description, download count, Data safety section and last-updated date, checked 19 October 2026.',
          '[MemoryAI website and privacy policy](https://alessandrofacchini.github.io/memoryai-privacy/) — data handling, network use, permissions and third-party services, policy last updated 30 June 2026.',
          '[memoryai-feedback on GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — the developer\'s public issue tracker.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
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
      headline: 'MemoryAI Review: Free Offline AI Chat for iPhone and Android',
      description:
        'MemoryAI review: a free, closed-source offline AI chat app for iPhone and Android with document Q&A, editable Agent Memory, voice mode and Kid Mode. Privacy, limits and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/memoryai-review',
      inLanguage: 'en',
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'iPhone and Android users evaluating a free offline AI chat app' },
      about: [
        { '@type': 'Thing', name: 'MemoryAI' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/memoryai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'MemoryAI Review', item: 'https://promptquorum.com/power-local-llm/memoryai-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-de.webp',
    title: 'MemoryAI-Rezension: Kostenlose Offline-KI-Chat-App für iPhone und Android',
    seoTitle: 'MemoryAI-Rezension: Kostenlose Offline-KI-Chat-App',
    intro:
      'MemoryAI ist eine kostenlose Chat-App für iPhone und Android von Alessandro Facchini (Handelsname Facchinits), einem unabhängigen Entwickler in Italien. Sie führt Open-Weight-Sprachmodelle über zwei Engines auf dem Telefon aus, llama.cpp und Googles LiteRT, und bietet zusätzlich Fragen zu Dokumenten, einen optionalen, editierbaren Agent Memory (Agentengedächtnis), einen freihändigen Sprachmodus und einen per PIN gesperrten Kindermodus. Sie ist nicht quelloffen und noch jung: Die erste Veröffentlichung im App Store erfolgte am 30. März 2026. Diese Rezension stützt sich auf die Einträge im App Store und bei Google Play, die Website und Datenschutzerklärung des Entwicklers sowie das öffentliche Feedback-Repository, geprüft am 19. Oktober 2026; PromptQuorum hat die App nicht praktisch getestet.',
    metaDescription:
      'MemoryAI-Rezension: kostenlose, nicht quelloffene Offline-KI-Chat-App für iPhone und Android mit Dokumenten-Q&A, Agent Memory, Kindermodus. Datenschutz.',
    twitterDescription:
      'MemoryAI-Rezension: kostenlose, nicht quelloffene Offline-KI-Chat-App für iPhone und Android mit Dokumenten-Q&A, editierbarem Gerätegedächtnis, freihändiger Sprache und PIN-gesperrtem Kindermodus. Was die Quellen sagen.',
    audience:
      'iPhone- und Android-Nutzer, die eine kostenlose Chat-App wünschen, die Sprachmodelle auf dem Gerät ausführt, und die wissen müssen, was offline bleibt, was nach außen gesendet wird und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI Rezension',
    targetKeywords: [
      'memoryai app test',
      'memoryai offline private ki',
      'offline ki chat app iphone android',
      'agent memory ki auf dem gerät',
      'ki kindermodus offline app',
      'gguf import mobile app',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (Version 1.0.52 unter iOS, Stand 19. Oktober 2026) ist eine kostenlose, nicht quelloffene Chat-App, die Open-Weight-Sprachmodelle ohne Konto auf iPhone und Android ausführt und ein editierbares Gedächtnis auf dem Gerät mit einem per PIN gesperrten Kindermodus verbindet.** Modelle werden einmal von Hugging Face heruntergeladen und laufen danach offline. Die Store-Texte und die Datenschutzerklärung stimmen bei Analyse und Käufen nicht vollständig überein; lesen Sie daher den Abschnitt zum Datenschutz, bevor Sie sich auf die Formulierung „kein Tracking“ verlassen.',
    quickAnswerTop: {
      de: {
        question: 'Läuft MemoryAI wirklich offline und kostenlos?',
        answer:
          'Laut den Einträgen ja, für die Kernfunktionen: Nach einem einmaligen Modell-Download laufen Chat, Dokumentenfragen und Sprache auf dem Telefon, ohne Konto und ohne Werbung. Die Datenschutzerklärung ergänzt, dass anonyme Analyse- und Absturzdaten gesendet werden und dass Käufe für Premiumfunktionen möglich sein können, was die Store-Texte verneinen.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) und im [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat mit GGUF- und LiteRT-Modellen wie Gemma, Qwen, Llama, Phi und DeepSeek; die Modell-Downloads umfassen je 0,3 bis 4 GB.',
          'Optionaler Agent Memory, den Sie ansehen, bearbeiten und löschen können, dazu Fragen zu Dokumenten und Bildern.',
          'Kindermodus mit Eltern-PIN, Inhaltsfilter und gesperrtem Modell.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist MemoryAI?', anchor: 'what-is-memoryai' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
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
            text: 'MemoryAI ist eine kostenlose, nicht quelloffene iPhone- und Android-App, die Open-Weight-Sprachmodelle auf dem Gerät ausführt und einen editierbaren Agent Memory, Dokumentenfragen, freihändige Sprache und einen per PIN gesperrten Kindermodus bietet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App, laden einmal ein Modell herunter und chatten, sprechen oder fragen dann ohne Konto zu Ihren eigenen PDFs; das optionale Gedächtnis, das sie über Sie führt, liegt auf dem Telefon, wo Sie es lesen und löschen können.',
          },
        ],
        items: [
          'Entwickler: Alessandro Facchini, ein unabhängiger Entwickler in Italien, der unter dem Namen Facchinits veröffentlicht; dahinter steht kein Unternehmen, und es gibt keinen öffentlichen Quellcode.',
          'Pflege: Die iOS-Versionshistorie zeigt 13 Veröffentlichungen zwischen dem 30. März und dem 18. Oktober 2026, und Google Play zeigt eine Aktualisierung am 18. Oktober 2026; eine Warnung vor einem veralteten Projekt entfällt daher.',
          'Reichweite: Google Play zeigt 1K+ Downloads, und der App Store zeigt noch keine Bewertungen; die App hat also bislang wenig öffentliche Erfolgsbilanz.',
          'Plattformen: iPhone (iOS 16.4 oder neuer) und Android; der App Store führt außerdem Macs mit Apple M1 oder neuer auf, markiert mit „nicht für macOS verifiziert“.',
          'Sprachen: Die App ist auf Englisch, Italienisch, Deutsch, Französisch, Spanisch und Portugiesisch verfügbar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Einträge im App Store und bei Google Play, die Website und Datenschutzerklärung des Entwicklers sowie das öffentliche Feedback-Repository, geprüft am 19. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'Was ist MemoryAI?',
        content: [
          '**MemoryAI ist eine mobile Chat-App, die Open-Weight-Sprachmodelle lokal ausführt, statt einen Cloud-Dienst aufzurufen.** Laut Einträgen ist kein Modell mitgeliefert: Sie wählen eines aus der Liste in der App oder importieren eine beliebige kompatible GGUF-Datei von Hugging Face, und der erste Start braucht eine Netzwerkverbindung für den Download. Angeboten werden zwei Inferenz-Engines, llama.cpp für GGUF-Modelle und Googles MediaPipe/LiteRT für Modelle der Gemma-Familie.',
          'Der App-Store-Eintrag heißt in den Stores für die USA, Japan und Korea „MemoryAI: Offline Private AI“, in Deutschland „MemoryAI: Private Offline-KI“ und in Brasilien „MemoryAI: a IA que lembra“; das Google-Play-Paket lautet com.ts.memoryai. Der „Agent Memory“ (Agentengedächtnis) ist eine Funktion dieser App, kein eigenes Produkt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**MemoryAI wird über die beiden mobilen Stores installiert; weder ein Desktop-Build noch Quellcode noch eine Sideload-Datei werden angeboten.** Die beiden Store-Links unten sind die, die die Website und die Einträge des Entwicklers verwenden.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'iPhone',
            'Bezugsquelle': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 oder neuer, 198,7 MB)',
          },
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[alessandrofacchini.github.io/memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Gleiche Seite](https://alessandrofacchini.github.io/memoryai-privacy/) (Englisch, italienische Fassung dort verlinkt; Stand 30. Juni 2026)',
          },
          {
            'Plattform': 'Fehlermeldungen',
            'Bezugsquelle': '[GitHub Issues](https://github.com/alessandrofacchini/memoryai-feedback/issues) (nur Feedback, kein Quellcode)',
          },
        ],
        note: 'Geprüfte Version: 1.0.52 unter iOS, veröffentlicht am 18. Oktober 2026, laut App-Store-Eintrag; die Google-Play-Seite wurde ebenfalls am 18. Oktober 2026 aktualisiert, und ihre Seitendaten nennen den Build 1.0.54. Der Google-Play-Eintrag zeigt im gelesenen Text keine Mindestversion von Android.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Einrichtung folgt der Reihenfolge, die die Store-Einträge beschreiben; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie MemoryAI aus dem App Store oder von Google Play herunter; laut Einträgen ist kein Konto nötig, und das Telefon sollte 4 GB RAM oder mehr haben.',
          },
          {
            title: 'Modell per WLAN herunterladen',
            whyItMatters: 'Laut Einträgen umfassen Modelle je 0,3 bis 4 GB. Das Update vom 18. Oktober 2026 nennt als erstes vorgeschlagenes Modell nun das leichteste, das auf Ihrem Telefon gut läuft, und der Download läuft weiter, wenn Sie den Bildschirm verlassen.',
          },
          {
            title: 'Chatten oder sprechen',
            whyItMatters: 'Tippen Sie, diktieren Sie oder schalten Sie den kontinuierlichen Sprachmodus ein, in dem die App zuhört, antwortet und die Antwort ohne Antippen vorliest.',
          },
          {
            title: 'Dokumente oder Bilder hinzufügen',
            whyItMatters: 'Importieren Sie PDF-, TXT- oder Markdown-Dateien oder wählen Sie Fotos aus und stellen Sie Fragen dazu.',
          },
          {
            title: 'Optional Agent Memory einschalten',
            whyItMatters: 'Er ist standardmäßig aus und braucht ein Embedding-Modell; ist er an, können Sie ansehen, bearbeiten oder löschen, was er gespeichert hat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus den Beschreibungen im App Store und bei Google Play oder aus der Datenschutzerklärung; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Zwei Engines und eigene Modelle.** Wählen Sie je Modell llama.cpp oder Googles MediaPipe/LiteRT, importieren Sie eine beliebige kompatible GGUF-Datei von Hugging Face, speichern Sie ein Hugging-Face-Token für geschützte Modelle, pausieren und setzen Sie Downloads fort und passen Sie Temperatur, Top-k, Top-p und maximale Tokenzahl je Modell an.',
          '**Agent Memory.** Optional; die KI speichert, was Sie ihr in Ihren eigenen Worten sagen, auf dem Gerät, und Sie können jede Erinnerung ansehen, bearbeiten oder löschen. Die Hinweise zu 1.0.52 besagen, dass Anfragen wie „schreibe eine E-Mail“ nicht mehr als Erinnerungen gespeichert werden.',
          '**Dokumente und Bilder.** Fragen zu PDF-, TXT- und Markdown-Dateien, Bildanalyse mit Vision-Modellen (mehrere Bilder gleichzeitig) und Texterkennung auf Fotos über Google ML Kit.',
          '**Sprache.** Spracheingabe auf dem Gerät, Sprachausgabe und ein kontinuierlicher freihändiger Modus.',
          '**Kindermodus.** Eine Eltern-PIN, ein Filter, der unangemessene Wörter blockiert, bevor sie das Modell erreichen, ein gesperrtes Modell, ein Sicherheitsprompt, Warnungen für nicht verifizierte importierte Modelle und eine Eltern-Entsperrung, die die Einstellungen öffnet, ohne den Modus zu beenden.',
          '**Alltagswerkzeuge.** Chat-Suche, 20 Persona-Vorlagen, ein Geschwindigkeits-Benchmark in Token pro Sekunde, eine Anzeige des Kontextfensters, eine Ansicht, ob das geladene Modell auf GPU oder CPU läuft, und Backup bei Google Drive unter Android oder iCloud auf dem iPhone.',
        ],
        note: 'Die beiden Store-Beschreibungen sind nahezu identisch, aber nicht gleich; so erwähnt der iOS-Text das iCloud-Backup und der Android-Text Google Drive. Maßgeblich ist letztlich die installierte Version.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Chats, Dokumente und Erinnerungen bleiben standardmäßig auf dem Gerät, und der Entwickler gibt an, dass die App keine KI-Server hat und keinen Chattext sendet.** Der Abschnitt „Datensicherheit“ bei Google Play erklärt, dass keine Daten an Dritte weitergegeben werden, mit möglicher Erhebung von App-Informationen und Leistungsdaten sowie von Geräte- oder anderen Kennungen, bei verschlüsselter Übertragung. Das Datenschutzlabel im App Store führt Suchverlauf, Geräte-ID und Produktinteraktion für Analysen sowie Geräte-ID, Absturz- und Leistungsdaten für die App-Funktionalität auf, jeweils als nicht mit Ihnen verknüpft markiert.',
          'Die [Datenschutzerklärung](https://alessandrofacchini.github.io/memoryai-privacy/) nennt, was das Telefon tatsächlich verlässt: anonyme Nutzungsereignisse an TelemetryDeck, Absturzberichte an Sentry, optionale Push-Benachrichtigungen über OneSignal, Modell-Downloads von Hugging Face und ein optionales Backup in Ihrem eigenen Google Drive oder iCloud. Sie besagt außerdem, dass lokale Daten von der App nicht verschlüsselt werden und auf den eigenen Schutz des Geräts vertrauen und dass Unterhaltungen die App nur beim Export verlassen.',
          'Die Store-Beschreibungen sagen „keine In-App-Käufe“ und „kein Tracking“, während die Erklärung angibt, dass die App In-App-Käufe für Premiumfunktionen anbietet, und die oben genannte Analyse aufführt. Welche Aussage zum aktuellen Build passt, war aus den Quellen nicht ersichtlich; betrachten Sie daher die Erklärung als die detailliertere.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App ist nicht quelloffen, daher lässt sich keine dieser Angaben im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht geprüft. Wer vertrauliche Daten verarbeitet oder den Kindermodus für ein Kind einrichtet, sollte das Verhalten auf dem eigenen Gerät überprüfen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Menschen, die einen Telefon-Assistenten wünschen, der sich ohne Cloud-Konto an sie erinnert.** Der Agent Memory wird lokal gespeichert und ist editierbar.',
          '**Eltern, die einen Offline-Chat für ihr Kind wünschen.** Der Kindermodus kombiniert PIN, Filter und gesperrtes Modell, seine Wirksamkeit ist jedoch nicht verifiziert.',
          '**Menschen, die ihre eigenen PDFs und Fotos privat befragen möchten.** Fragen zu Dokumenten und Bildern sind enthalten.',
          '**Nutzer, die gern eigene Modelle mitbringen.** GGUF-Import und zwei Engines passen zu allen, die bereits ein Lieblingsmodell haben.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praktische Leistung.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Akkuverbrauch, Antwortqualität und die tatsächliche Stärke des Kindermodus wurden daher nicht bewertet.',
          '**Quellcode und Lizenz.** Die App ist nicht quelloffen; das Feedback-Repository enthält nur eine README und einen Issue-Tracker.',
          '**Käufe und Tracking.** Die Store-Texte und die Datenschutzerklärung widersprechen sich, wie im Abschnitt zum Datenschutz beschrieben.',
          '**Android-Anforderungen.** Der gelesene Google-Play-Text nennt keine Mindestversion von Android; unter iOS ist das Minimum 16.4.',
          '**Erfolgsbilanz.** Die App ist seit etwa sieben Monaten erhältlich, mit 1K+ Downloads bei Google Play und noch ohne Bewertungen im App Store; die Quellen enthalten keine Zusage zur Unterstützung.',
          '**Nicht für Nutzer, die sehr große Modelle brauchen.** Die Einträge beziffern Downloads auf 0,3 bis 4 GB, schwerere Aufgaben gehören daher auf einen Computer.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[Private Mind](/de/power-local-llm/private-mind-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Offline-Chat mit Dokumenten-Q&A auf dem Gerät und Benchmarks',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener On-Device-Chat-Client mit eigener Modellbibliothek',
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
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag. Von diesen vier ist MemoryAI die einzige App, die nicht quelloffen ist.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wer entwickelt MemoryAI?',
            a: 'Alessandro Facchini, ein unabhängiger Entwickler in Italien, der unter dem Namen Facchinits veröffentlicht. Die Datenschutzerklärung nennt Facchinits als Verantwortlichen für die Datenverarbeitung.',
          },
          {
            q: 'Kann ich bearbeiten, woran sich die KI erinnert?',
            a: 'Ja. Der Agent Memory ist optional, wird in Ihren eigenen Worten auf dem Gerät gespeichert, und jeder Eintrag lässt sich ansehen, bearbeiten oder löschen. Er braucht dafür ein Embedding-Modell.',
          },
          {
            q: 'Wie funktioniert der Kindermodus?',
            a: 'Ein Elternteil legt eine PIN fest; die App sperrt dann das aktive Modell, filtert unangemessene Wörter, bevor sie die KI erreichen, und ergänzt einen Sicherheitsprompt. Eine Eltern-Entsperrung öffnet die Einstellungen vorübergehend, ohne den Modus zu beenden.',
          },
          {
            q: 'Kann ich eigene Modelle verwenden?',
            a: 'Ja. Sie können kompatible GGUF-Dateien von Hugging Face importieren und auf der llama.cpp-Engine ausführen; Modelle der Gemma-Familie können auf der LiteRT-Engine laufen. Die App warnt, bevor ein nicht verifiziertes importiertes Modell im Kindermodus läuft.',
          },
          {
            q: 'Funktioniert sie auf einem Mac?',
            a: 'Der App Store führt Macs mit Apple M1 oder neuer auf, markiert die App aber mit „Für iPhone entwickelt. Nicht für macOS verifiziert“, und es gibt keinen separaten Desktop-Build.',
          },
          {
            q: 'Wo melde ich ein Problem?',
            a: 'Im öffentlichen [Feedback-Repository](https://github.com/alessandrofacchini/memoryai-feedback/issues) des Entwicklers auf GitHub oder über die Support-E-Mail im Google-Play-Eintrag.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'MemoryAI ist eine kostenlose mobile Offline-Chat-App, die ein editierbares Gedächtnis über den Nutzer auf dem Gerät führt und neben Fragen zu Dokumenten und Bildern, freihändiger Sprache und zwei Inferenz-Engines einen per PIN gesperrten Kindermodus bietet. Sie wird zudem häufig aktualisiert, mit einer Veröffentlichung am Tag vor der Prüfung dieser Rezension. Dagegen steht: Sie ist nicht quelloffen, neu, in der Reichweite klein, auf Modelle von etwa 0,3 bis 4 GB begrenzt, und ihre Store-Texte und ihre Datenschutzerklärung widersprechen sich bei Käufen und Tracking, sodass sich ihre Datenschutzangaben nicht im Code prüfen lassen. Sie eignet sich für Leser, die genau diese Funktionen wollen und eine junge, geschlossene App akzeptieren; wer prüfbaren Code möchte, kann [Private Mind](/de/power-local-llm/private-mind-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[MemoryAI im App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — Preis, Versionshistorie, Anforderungen, Datenschutzlabel und Beschreibung, geprüft am 19. Oktober 2026.',
          '[MemoryAI bei Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — Beschreibung, Download-Zahl, Abschnitt „Datensicherheit“ und Datum der letzten Aktualisierung, geprüft am 19. Oktober 2026.',
          '[MemoryAI-Website und Datenschutzerklärung](https://alessandrofacchini.github.io/memoryai-privacy/) — Datenverarbeitung, Netzwerknutzung, Berechtigungen und Drittanbieterdienste, Erklärung zuletzt aktualisiert am 30. Juni 2026.',
          '[memoryai-feedback auf GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — der öffentliche Issue-Tracker des Entwicklers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App für iPhone und Android.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.',
          '[Off-Grid-Rezension](/de/power-local-llm/off-grid-ai-review) — eine quelloffene Offline-KI-Suite für Telefone und Desktops.',
          '[Google-AI-Edge-Gallery-Rezension](/de/power-local-llm/google-ai-edge-gallery-review) — Googles quelloffene On-Device-KI-App.',
          '[Die besten lokalen LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — die breitere Übersicht für Android.',
          '[Die besten lokalen LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere Übersicht für das iPhone.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-es.webp',
    title: 'Análisis de MemoryAI: chat de IA offline y gratuito para iPhone y Android',
    seoTitle: 'Análisis de MemoryAI: app de chat de IA offline gratis',
    intro:
      'MemoryAI es una app de chat gratuita para iPhone y Android de Alessandro Facchini (que opera como Facchinits), un desarrollador independiente de Italia. Ejecuta modelos de lenguaje de pesos abiertos en el teléfono mediante dos motores, llama.cpp y LiteRT de Google, y añade preguntas sobre documentos, una Agent Memory (memoria del agente) opcional y editable, un modo de voz con manos libres y un Kid Mode (modo infantil) protegido con PIN. Es de código cerrado y reciente: la primera versión en la App Store salió el 30 de marzo de 2026. Este análisis se basa en las fichas de App Store y Google Play, el sitio web y la política de privacidad del desarrollador y el repositorio público de comentarios, consultados el 19 de octubre de 2026; PromptQuorum no ha probado la app de forma práctica.',
    metaDescription:
      'Análisis de MemoryAI: chat de IA offline, gratuito y de código cerrado para iPhone y Android, con memoria editable y Kid Mode. Privacidad y límites.',
    twitterDescription:
      'Análisis de MemoryAI: una app de chat de IA offline, gratuita y de código cerrado para iPhone y Android con preguntas sobre documentos, memoria editable en el dispositivo, voz con manos libres y un Kid Mode protegido con PIN. Lo que dicen las fichas y la política de privacidad.',
    audience:
      'Usuarios de iPhone y Android que quieren una app de chat gratuita que ejecute modelos de lenguaje en el dispositivo, y que necesitan saber qué se queda offline, qué envía fuera la app y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de MemoryAI',
    targetKeywords: [
      'opiniones app memoryai',
      'memoryai offline private ai',
      'app de chat de ia offline iphone android',
      'memoria de agente de ia en el dispositivo',
      'modo infantil ia app offline',
      'importar gguf app móvil',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (versión 1.0.52 en iOS a fecha del 19 de octubre de 2026) es una app de chat gratuita y de código cerrado que ejecuta modelos de lenguaje de pesos abiertos en iPhone y Android sin necesidad de cuenta, y combina una memoria editable en el dispositivo con un Kid Mode protegido con PIN.** Los modelos se descargan una sola vez desde Hugging Face y después se ejecutan sin conexión. Los textos de las tiendas y la política de privacidad no coinciden del todo en cuanto a analítica y compras, así que lee la sección de privacidad antes de fiarte de la frase «sin rastreo».',
    quickAnswerTop: {
      es: {
        question: '¿MemoryAI es realmente offline y gratuita?',
        answer:
          'Según sus fichas, sí en las funciones principales: tras una descarga única del modelo, el chat, las preguntas sobre documentos y la voz se ejecutan en el teléfono, sin cuenta y sin anuncios. Su política de privacidad añade que se envían al exterior analítica anónima e informes de fallos y que puede haber compras para funciones premium, algo que los textos de las tiendas niegan.',
        bullets: [
          'Gratis en [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) y en la [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat con modelos GGUF y LiteRT como Gemma, Qwen, Llama, Phi y DeepSeek; las descargas de modelos van de 0.3 a 4 GB cada una.',
          'Agent Memory opcional que puedes ver, editar y borrar, además de preguntas sobre documentos e imágenes.',
          'Kid Mode con PIN para los padres, filtro de contenido y modelo bloqueado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es MemoryAI?', anchor: 'what-is-memoryai' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
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
            text: 'MemoryAI es una app gratuita y de código cerrado para iPhone y Android que ejecuta modelos de lenguaje de pesos abiertos en el dispositivo y añade una Agent Memory editable, preguntas sobre documentos, voz con manos libres y un Kid Mode protegido con PIN.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas, descargas un modelo una sola vez y después chateas, hablas o preguntas sobre tus propios PDF sin cuenta; la memoria opcional que guarda sobre ti vive en el teléfono, donde puedes leerla y borrarla.',
          },
        ],
        items: [
          'Desarrollador: Alessandro Facchini, un desarrollador independiente de Italia que publica como Facchinits; no hay ninguna empresa detrás aparte de eso, ni código fuente público.',
          'Mantenimiento: el historial de versiones de iOS muestra 13 versiones entre el 30 de marzo y el 18 de octubre de 2026, y Google Play muestra una actualización el 18 de octubre de 2026, así que no se aplica ningún aviso de proyecto abandonado.',
          'Alcance: Google Play muestra más de 1 mil descargas y la App Store aún no muestra valoraciones, por lo que la app tiene poco historial público.',
          'Plataformas: iPhone (iOS 16.4 o posterior) y Android; la App Store también incluye Mac con Apple M1 o posterior, marcado como «no verificado para macOS».',
          'Idiomas: la app está disponible en inglés, italiano, alemán, francés, español y portugués.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en las fichas de App Store y Google Play, el sitio web y la política de privacidad del desarrollador y el repositorio público de comentarios, consultados el 19 de octubre de 2026. PromptQuorum no ha instalado, probado ni evaluado con pruebas comparativas la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: '¿Qué es MemoryAI?',
        content: [
          '**MemoryAI es una app de chat para móvil que ejecuta modelos de lenguaje de pesos abiertos en local en lugar de llamar a un servicio en la nube.** Según sus fichas, no incluye ningún modelo: eliges uno de la lista de la app o importas cualquier archivo GGUF compatible de Hugging Face, y la primera ejecución necesita conexión de red para descargarlo. Ofrece dos motores de inferencia: llama.cpp para modelos GGUF y MediaPipe/LiteRT de Google para modelos de la familia Gemma.',
          'La ficha de la App Store se titula «MemoryAI: Offline Private AI» en las tiendas de EE. UU., Japón y Corea, «MemoryAI: Private Offline-KI» en Alemania y «MemoryAI: a IA que lembra» en Brasil; el paquete de Google Play es com.ts.memoryai. Su «Agent Memory» es una función de esta app, no un producto aparte.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**MemoryAI se instala desde las dos tiendas móviles; no se ofrece ninguna versión de escritorio, código fuente ni archivo para instalación manual.** Los dos enlaces de tienda siguientes son los que usan el sitio web y las fichas del desarrollador.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'Dónde obtenerla': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 o posterior, 198.7 MB)',
          },
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[alessandrofacchini.github.io/memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[La misma página](https://alessandrofacchini.github.io/memoryai-privacy/) (inglés e italiano; actualizada el 30 jun 2026)',
          },
          {
            'Plataforma': 'Informes de errores',
            'Dónde obtenerla': '[Incidencias en GitHub](https://github.com/alessandrofacchini/memoryai-feedback/issues) (solo feedback, sin código)',
          },
        ],
        note: 'Versión analizada: 1.0.52 en iOS, publicada el 18 de octubre de 2026, según la ficha de la App Store; la página de Google Play también se actualizó el 18 de octubre de 2026 y los datos de su página indican la compilación 1.0.54. La ficha de Google Play no muestra una versión mínima de Android en el texto leído.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración sigue el orden descrito en las fichas de las tiendas; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga MemoryAI desde la App Store o Google Play; las fichas dicen que no hace falta cuenta y que el teléfono debería tener 4 GB de RAM o más.',
          },
          {
            title: 'Descarga un modelo con Wi-Fi',
            whyItMatters: 'Los modelos pesan de 0.3 a 4 GB cada uno según las fichas. La actualización del 18 de octubre de 2026 dice que el primer modelo sugerido es ahora el más ligero que funciona bien en tu teléfono y que su descarga continúa si sales de la pantalla.',
          },
          {
            title: 'Chatea o habla',
            whyItMatters: 'Escribe, dicta o activa el modo de voz continuo, en el que la app escucha, responde y lee la respuesta en voz alta sin tocar la pantalla.',
          },
          {
            title: 'Añade documentos o imágenes',
            whyItMatters: 'Importa archivos PDF, TXT o Markdown, o elige fotos, y hazles preguntas.',
          },
          {
            title: 'Activa Agent Memory si quieres',
            whyItMatters: 'Está desactivada por defecto y necesita un modelo de embeddings; una vez activada, puedes abrir, editar o borrar lo que ha guardado.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de las descripciones de la App Store y Google Play o de la política de privacidad; ninguno ha sido probado de forma independiente.**',
        ],
        items: [
          '**Dos motores y modelos propios.** Elige llama.cpp o MediaPipe/LiteRT de Google para cada modelo, importa cualquier archivo GGUF compatible de Hugging Face, guarda un token de Hugging Face para modelos restringidos, pausa y reanuda descargas, y ajusta la temperatura, top-k, top-p y el máximo de tokens por modelo.',
          '**Agent Memory.** Opcional; la IA guarda en el dispositivo, con tus propias palabras, lo que le cuentas, y puedes ver, editar o borrar cada recuerdo. Las notas de la versión 1.0.52 dicen que peticiones como «escribe un correo» ya no se guardan como recuerdos.',
          '**Documentos e imágenes.** Preguntas sobre archivos PDF, TXT y Markdown, análisis de imágenes con modelos de visión (varias imágenes a la vez) y reconocimiento de texto en fotos mediante Google ML Kit.',
          '**Voz.** Entrada de voz en el dispositivo, síntesis de voz y un modo continuo con manos libres.',
          '**Kid Mode.** Un PIN para los padres, un filtro que bloquea palabras inapropiadas antes de que lleguen al modelo, un modelo bloqueado, un mensaje de seguridad, avisos para modelos importados no verificados y un desbloqueo parental que abre los ajustes sin terminar el modo.',
          '**Herramientas del día a día.** Búsqueda en los chats, 20 plantillas de personaje, una prueba de velocidad en tokens por segundo, una vista de la ventana de contexto, una pantalla que indica si el modelo cargado se ejecuta en la GPU o en la CPU, y copia de seguridad en Google Drive en Android o en iCloud en iPhone.',
        ],
        note: 'Las dos descripciones de las tiendas son casi idénticas, pero no iguales; por ejemplo, el texto de iOS menciona la copia de seguridad en iCloud y el de Android, Google Drive. La compilación instalada tiene la última palabra.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**Los chats, los documentos y los recuerdos se quedan en el dispositivo por defecto, y el desarrollador dice que la app no tiene servidores de IA y no envía texto de los chats.** La sección Seguridad de los datos de Google Play declara que no se comparten datos con terceros, con posible recopilación de información de la app y de rendimiento y de identificadores de dispositivo u otros, cifrados en tránsito. La etiqueta de privacidad de la App Store enumera el historial de búsqueda, el identificador de dispositivo y la interacción con el producto para analítica, y el identificador de dispositivo y los datos de fallos y de rendimiento para el funcionamiento de la app, todos marcados como no vinculados a ti.',
          'La [política de privacidad](https://alessandrofacchini.github.io/memoryai-privacy/) indica lo que sí sale del teléfono: eventos de uso anónimos a TelemetryDeck, informes de fallos a Sentry, notificaciones push opcionales a través de OneSignal, descargas de modelos desde Hugging Face y copia de seguridad opcional en tu propio Google Drive o iCloud. También dice que la app no cifra los datos locales y que depende de la protección del propio dispositivo, y que las conversaciones solo salen de la app cuando las exportas.',
          'Las descripciones de las tiendas dicen «sin compras dentro de la app» y «sin rastreo», mientras que la política dice que la app ofrece compras dentro de la app para funciones premium y enumera la analítica anterior. Las fuentes no aclaran qué afirmación corresponde a la compilación actual, así que conviene tratar la política como la más detallada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app es de código cerrado, por lo que ninguna de estas afirmaciones se puede comprobar en el código, y PromptQuorum no ha auditado el tráfico de red. Quien maneje datos confidenciales, o configure Kid Mode para un niño, debería verificar el comportamiento en su propio dispositivo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas que quieren un asistente en el teléfono que las recuerde sin una cuenta en la nube.** Agent Memory se guarda en local y se puede editar.',
          '**Padres que quieren un chat offline pensado para niños.** Kid Mode combina un PIN, un filtro y un modelo bloqueado, aunque su eficacia no está verificada.',
          '**Personas que quieren hacer preguntas sobre sus propios PDF y fotos de forma privada.** Las preguntas sobre documentos e imágenes están incluidas.',
          '**Usuarios a los que les gusta traer sus propios modelos.** La importación de GGUF y los dos motores van bien a quien ya tiene un modelo favorito.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en la práctica.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, el consumo de batería, la calidad de las respuestas ni la eficacia real de Kid Mode.',
          '**Código fuente y licencia.** La app es de código cerrado; el repositorio de comentarios solo contiene un README y un gestor de incidencias.',
          '**Compras y rastreo.** Los textos de las tiendas y la política de privacidad no coinciden, como se describe en la sección de privacidad.',
          '**Requisitos de Android.** El texto de Google Play que leímos no muestra una versión mínima de Android; el mínimo de iOS es 16.4.',
          '**Historial.** La app lleva unos siete meses en el mercado, con más de 1 mil descargas en Google Play y sin valoraciones en la App Store todavía; las fuentes no ofrecen ningún compromiso de soporte.',
          '**No es para quien necesita modelos muy grandes.** Las fichas sitúan las descargas entre 0.3 y 4 GB, así que el trabajo más pesado corresponde a un ordenador.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat offline de código abierto con preguntas sobre documentos en el dispositivo y pruebas de rendimiento',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente de chat de código abierto en el dispositivo con su propia biblioteca de modelos',
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
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha. De estas cuatro, MemoryAI es la única app de código cerrado.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Quién hace MemoryAI?',
            a: 'Alessandro Facchini, un desarrollador independiente de Italia que publica con el nombre Facchinits. La política de privacidad nombra a Facchinits como responsable del tratamiento de los datos.',
          },
          {
            q: '¿Puedo editar lo que recuerda la IA?',
            a: 'Sí. Agent Memory es opcional, se guarda en el dispositivo con tus propias palabras y cada entrada se puede ver, editar o borrar. Necesita un modelo de embeddings para funcionar.',
          },
          {
            q: '¿Cómo funciona Kid Mode?',
            a: 'Un padre o una madre establece un PIN; la app bloquea entonces el modelo activo, filtra las palabras inapropiadas antes de que lleguen a la IA y añade un mensaje de seguridad. Un desbloqueo parental abre los ajustes de forma temporal sin terminar el modo.',
          },
          {
            q: '¿Puedo usar mis propios modelos?',
            a: 'Sí. Puedes importar archivos GGUF compatibles de Hugging Face y ejecutarlos con el motor llama.cpp; los modelos de la familia Gemma pueden ejecutarse con el motor LiteRT. La app avisa antes de que un modelo importado no verificado se ejecute en Kid Mode.',
          },
          {
            q: '¿Funciona en un Mac?',
            a: 'La App Store incluye Mac con Apple M1 o posterior, pero marca la app como «Diseñada para iPhone. No verificada para macOS», y no existe una versión de escritorio aparte.',
          },
          {
            q: '¿Dónde informo de un problema?',
            a: 'En el [repositorio público de comentarios](https://github.com/alessandrofacchini/memoryai-feedback/issues) del desarrollador en GitHub, o por el correo de soporte que aparece en la ficha de Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'MemoryAI es una app de chat móvil offline y gratuita que guarda en el dispositivo una memoria editable del usuario y ofrece un Kid Mode protegido con PIN, junto con preguntas sobre documentos e imágenes, voz con manos libres y dos motores de inferencia. También se actualiza con frecuencia, con una versión el día anterior a la consulta de este análisis. En contra, es de código cerrado, reciente, de alcance reducido y limitada a modelos de aproximadamente 0.3 a 4 GB, y sus textos de las tiendas y su política de privacidad no coinciden en compras y rastreo, por lo que sus afirmaciones de privacidad no se pueden comprobar en el código. Encaja con quienes quieren estas funciones concretas y aceptan una app joven y cerrada; quienes quieran código auditable pueden comparar [Private Mind](/es/power-local-llm/private-mind-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[MemoryAI en la App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — precio, historial de versiones, requisitos, etiqueta de privacidad y descripción, consultados el 19 de octubre de 2026.',
          '[MemoryAI en Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — descripción, número de descargas, sección Seguridad de los datos y fecha de la última actualización, consultados el 19 de octubre de 2026.',
          '[Sitio web y política de privacidad de MemoryAI](https://alessandrofacchini.github.io/memoryai-privacy/) — tratamiento de datos, uso de la red, permisos y servicios de terceros; política actualizada por última vez el 30 de junio de 2026.',
          '[memoryai-feedback en GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — el gestor público de incidencias del desarrollador.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita y con licencia MIT para iPhone y Android.',
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat en el dispositivo gratuito y de código abierto para iOS y Android.',
          '[Análisis de Off Grid](/es/power-local-llm/off-grid-ai-review) — una suite de IA offline de código abierto para teléfonos y ordenadores de escritorio.',
          '[Análisis de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app de IA en el dispositivo de código abierto de Google.',
          '[Las mejores apps de LLM local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — la selección más amplia para Android.',
          '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la selección más amplia para iPhone.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-fr.webp',
    title: 'Avis MemoryAI : chat IA gratuit hors ligne pour iPhone et Android',
    seoTitle: 'Avis MemoryAI : appli de chat IA gratuite hors ligne',
    intro:
      'MemoryAI est une application de chat gratuite pour iPhone et Android, créée par Alessandro Facchini (sous le nom Facchinits), développeur indépendant en Italie. Elle exécute des modèles de langage à poids ouverts sur le téléphone grâce à deux moteurs, llama.cpp et LiteRT de Google, et ajoute des questions sur documents, une Agent Memory (mémoire de l\'agent) facultative et modifiable, un mode vocal mains libres et un Kid Mode (mode enfant) verrouillé par code PIN. Elle est à code source fermé et récente : la première version sur l\'App Store date du 30 mars 2026. Cet avis se fonde sur les fiches de l\'App Store et de Google Play, le site du développeur et sa politique de confidentialité, ainsi que le dépôt public de retours, consultés le 19 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'Avis MemoryAI : appli de chat IA gratuite, à code fermé, hors ligne, pour iPhone et Android, avec Q&R sur documents, Agent Memory, voix et Kid Mode.',
    twitterDescription:
      'Avis MemoryAI : une appli de chat IA gratuite et à code fermé pour iPhone et Android, avec Q&R sur documents, mémoire modifiable sur l\'appareil, voix mains libres et Kid Mode verrouillé par PIN. Ce que disent les fiches et la politique de confidentialité.',
    audience:
      'Utilisateurs d\'iPhone et d\'Android qui veulent une application de chat gratuite exécutant des modèles de langage sur l\'appareil, et qui ont besoin de savoir ce qui reste hors ligne, ce qu\'elle envoie à l\'extérieur et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis MemoryAI',
    targetKeywords: [
      'avis application memoryai',
      'memoryai ia privée hors ligne',
      'application chat ia hors ligne iphone android',
      'mémoire d\'agent ia sur l\'appareil',
      'mode enfant ia application hors ligne',
      'importer gguf application mobile',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (version 1.0.52 sur iOS au 19 octobre 2026) est une application de chat gratuite, à code source fermé, qui exécute des modèles de langage à poids ouverts sur iPhone et Android sans compte, et associe une mémoire modifiable sur l\'appareil à un Kid Mode verrouillé par code PIN.** Les modèles sont téléchargés une seule fois depuis Hugging Face, puis exécutés hors ligne. Les textes des boutiques et la politique de confidentialité ne concordent pas entièrement sur l\'analytique et les achats : lisez la section sur la confidentialité avant de vous fier à la mention « aucun suivi ».',
    quickAnswerTop: {
      fr: {
        question: 'MemoryAI fonctionne-t-elle vraiment hors ligne et gratuitement ?',
        answer:
          'Selon ses fiches, oui pour les fonctions de base : après un téléchargement unique de modèle, le chat, les questions sur documents et la voix s\'exécutent sur le téléphone, sans compte ni publicité. Sa politique de confidentialité ajoute que des données d\'analytique anonymes et des rapports de plantage sont envoyés à l\'extérieur et que des achats pour des fonctions premium peuvent exister, ce que les textes des boutiques démentent.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) et l\'[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat avec des modèles GGUF et LiteRT tels que Gemma, Qwen, Llama, Phi et DeepSeek ; les modèles pèsent de 0,3 à 4 Go chacun.',
          'Agent Memory facultative que vous pouvez consulter, modifier et supprimer, ainsi que des questions sur documents et images.',
          'Kid Mode avec code PIN parental, filtre de contenu et modèle verrouillé.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que MemoryAI ?', anchor: 'what-is-memoryai' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
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
            text: 'MemoryAI est une application gratuite à code source fermé pour iPhone et Android, qui exécute des modèles de langage à poids ouverts sur l\'appareil et ajoute une Agent Memory modifiable, des questions sur documents, la voix mains libres et un Kid Mode verrouillé par code PIN.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez, téléchargez un modèle une seule fois, puis discutez, parlez ou posez des questions sur vos propres PDF sans compte ; la mémoire facultative qu\'elle garde à votre sujet reste sur le téléphone, où vous pouvez la lire et la supprimer.',
          },
        ],
        items: [
          'Développeur : Alessandro Facchini, développeur indépendant en Italie qui publie sous le nom Facchinits ; aucune société n\'est derrière l\'application, et son code source n\'est pas public.',
          'Maintenance : l\'historique des versions iOS montre 13 versions entre le 30 mars et le 18 octobre 2026, et Google Play affiche une mise à jour le 18 octobre 2026 ; aucun avertissement de projet inactif ne s\'applique donc.',
          'Audience : Google Play affiche plus de 1 000 téléchargements et l\'App Store n\'affiche encore aucune note ; l\'application a donc peu d\'historique public.',
          'Plateformes : iPhone (iOS 16.4 ou version ultérieure) et Android ; l\'App Store mentionne aussi les Mac avec puce Apple M1 ou ultérieure, avec la mention « non vérifiée pour macOS ».',
          'Langues : l\'application est disponible en anglais, italien, allemand, français, espagnol et portugais.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur les fiches de l\'App Store et de Google Play, le site du développeur et sa politique de confidentialité, ainsi que le dépôt public de retours, consultés le 19 octobre 2026. PromptQuorum n\'a ni installé, ni testé, ni évalué l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'Qu\'est-ce que MemoryAI ?',
        content: [
          '**MemoryAI est une application de chat mobile qui exécute des modèles de langage à poids ouverts en local, au lieu d\'appeler un service cloud.** Selon ses fiches, aucun modèle n\'est fourni avec l\'application : vous en choisissez un dans la liste intégrée ou vous importez n\'importe quel fichier GGUF compatible depuis Hugging Face, et le premier lancement nécessite une connexion pour le télécharger. Deux moteurs d\'inférence sont proposés : llama.cpp pour les modèles GGUF et MediaPipe/LiteRT de Google pour les modèles de la famille Gemma.',
          'La fiche de l\'App Store s\'intitule « MemoryAI: Offline Private AI » dans les boutiques américaine, japonaise et coréenne, « MemoryAI: Private Offline-KI » en Allemagne et « MemoryAI: a IA que lembra » au Brésil ; le paquet Google Play est com.ts.memoryai. Son « Agent Memory » est une fonction de cette application, et non un produit distinct.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**MemoryAI s\'installe depuis les deux boutiques mobiles ; aucune version pour ordinateur, aucun code source ni fichier à installer manuellement n\'est proposé.** Les deux liens de boutique ci-dessous sont ceux qu\'utilisent le site du développeur et les fiches.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'iPhone',
            'Où la trouver': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 ou version ultérieure, 198,7 Mo)',
          },
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[alessandrofacchini.github.io/memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)',
          },
          {
            'Plateforme': 'Confidentialité',
            'Où la trouver': '[Même page](https://alessandrofacchini.github.io/memoryai-privacy/) (versions anglaise et italienne ; mise à jour le 30 juin 2026)',
          },
          {
            'Plateforme': 'Signaler un bug',
            'Où la trouver': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues) (retours uniquement, sans code source)',
          },
        ],
        note: 'Version examinée : 1.0.52 sur iOS, publiée le 18 octobre 2026, selon la fiche de l\'App Store ; la page Google Play a aussi été mise à jour le 18 octobre 2026 et ses données de page indiquent la build 1.0.54. La fiche Google Play n\'indique aucune version minimale d\'Android dans le texte lu.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La configuration suit l\'ordre décrit dans les fiches des boutiques ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Téléchargez MemoryAI depuis l\'App Store ou Google Play ; selon les fiches, aucun compte n\'est requis et le téléphone doit disposer de 4 Go de RAM ou plus.',
          },
          {
            title: 'Télécharger un modèle en Wi-Fi',
            whyItMatters: 'Les modèles pèsent de 0,3 à 4 Go chacun selon les fiches. La mise à jour du 18 octobre 2026 indique que le premier modèle suggéré est désormais le plus léger qui fonctionne bien sur votre téléphone, et que son téléchargement se poursuit si vous quittez l\'écran.',
          },
          {
            title: 'Discuter ou parler',
            whyItMatters: 'Saisissez du texte, dictez, ou activez le mode vocal continu, dans lequel l\'application écoute, répond et lit la réponse à voix haute sans aucun appui.',
          },
          {
            title: 'Ajouter des documents ou des images',
            whyItMatters: 'Importez des fichiers PDF, TXT ou Markdown, ou choisissez des photos, puis posez des questions à leur sujet.',
          },
          {
            title: 'Activer l\'Agent Memory, si souhaité',
            whyItMatters: 'Elle est désactivée par défaut et nécessite un modèle d\'embedding ; une fois activée, vous pouvez ouvrir, modifier ou supprimer ce qu\'elle a enregistré.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient des descriptions de l\'App Store et de Google Play ou de la politique de confidentialité ; aucun n\'a été testé de manière indépendante.**',
        ],
        items: [
          '**Deux moteurs et des modèles personnalisés.** Choisissez llama.cpp ou MediaPipe/LiteRT de Google pour chaque modèle, importez n\'importe quel fichier GGUF compatible depuis Hugging Face, enregistrez un jeton Hugging Face pour les modèles à accès restreint, mettez les téléchargements en pause et reprenez-les, et réglez la température, le top-k, le top-p et le nombre maximal de tokens par modèle.',
          '**Agent Memory.** Facultative ; l\'IA enregistre sur l\'appareil, avec vos propres mots, ce que vous lui dites, et vous pouvez consulter, modifier ou supprimer chaque souvenir. Les notes de la version 1.0.52 indiquent que des demandes telles que « écris un e-mail » ne sont plus enregistrées comme souvenirs.',
          '**Documents et images.** Questions sur des fichiers PDF, TXT et Markdown, analyse d\'images avec des modèles de vision (plusieurs images à la fois) et reconnaissance de texte sur des photos via Google ML Kit.',
          '**Voix.** Saisie vocale sur l\'appareil, synthèse vocale et mode continu mains libres.',
          '**Kid Mode.** Un code PIN parental, un filtre qui bloque les mots inappropriés avant qu\'ils n\'atteignent le modèle, un modèle verrouillé, une consigne de sécurité, des avertissements pour les modèles importés non vérifiés et un déverrouillage parental qui ouvre les réglages sans mettre fin au mode.',
          '**Outils du quotidien.** Recherche dans les conversations, 20 modèles de personas, un test de vitesse en tokens par seconde, un affichage de la fenêtre de contexte, un écran indiquant si le modèle chargé s\'exécute sur le GPU ou le CPU, et une sauvegarde sur Google Drive sur Android ou sur iCloud sur iPhone.',
        ],
        note: 'Les deux descriptions des boutiques sont presque identiques mais pas tout à fait ; par exemple, le texte iOS mentionne la sauvegarde iCloud et le texte Android Google Drive. La build installée fait foi.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Les conversations, les documents et les souvenirs restent par défaut sur l\'appareil, et le développeur affirme que l\'application n\'a aucun serveur d\'IA et n\'envoie aucun texte de conversation.** La section Sécurité des données de Google Play déclare qu\'aucune donnée n\'est partagée avec des tiers, avec une collecte possible d\'informations sur l\'application et de performances ainsi que d\'identifiants d\'appareil ou autres, chiffrés en transit. Le libellé de confidentialité de l\'App Store répertorie l\'historique de recherche, l\'identifiant d\'appareil et l\'interaction avec le produit pour l\'analytique, ainsi que l\'identifiant d\'appareil et les données de plantage et de performance pour le fonctionnement de l\'application, le tout marqué comme non lié à vous.',
          'La [politique de confidentialité](https://alessandrofacchini.github.io/memoryai-privacy/) précise ce qui quitte le téléphone : des événements d\'usage anonymes envoyés à TelemetryDeck, des rapports de plantage envoyés à Sentry, des notifications push facultatives via OneSignal, des téléchargements de modèles depuis Hugging Face et une sauvegarde facultative vers votre propre Google Drive ou iCloud. Elle indique aussi que les données locales ne sont pas chiffrées par l\'application et reposent sur la protection propre de l\'appareil, et que les conversations ne quittent l\'application que si vous les exportez.',
          'Les descriptions des boutiques disent « aucun achat intégré » et « aucun suivi », alors que la politique indique que l\'application propose des achats intégrés pour des fonctions premium et énumère l\'analytique ci-dessus. Les sources ne permettent pas de savoir quelle affirmation correspond à la build actuelle : considérez donc la politique comme la plus détaillée.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'application étant à code source fermé, aucune de ces affirmations ne peut être vérifiée dans le code, et PromptQuorum n\'a pas audité le trafic réseau. Quiconque traite des données confidentielles, ou configure le Kid Mode pour un enfant, devrait vérifier le comportement sur son propre appareil.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les personnes qui veulent un assistant sur téléphone qui se souvient d\'elles sans compte cloud.** L\'Agent Memory est stockée en local et modifiable.',
          '**Les parents qui veulent un chat hors ligne destiné à un enfant.** Le Kid Mode combine un code PIN, un filtre et un modèle verrouillé, bien que son efficacité ne soit pas vérifiée.',
          '**Les personnes qui veulent interroger leurs propres PDF et photos en toute confidentialité.** Les questions sur documents et images sont incluses.',
          '**Les utilisateurs qui aiment apporter leurs propres modèles.** L\'import GGUF et les deux moteurs conviennent à quiconque a déjà un modèle favori.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Performances en pratique.** PromptQuorum n\'a pas exécuté l\'application : la vitesse, la consommation de batterie, la qualité des réponses et la solidité réelle du Kid Mode ne sont donc pas évaluées.',
          '**Code source et licence.** L\'application est à code source fermé ; le dépôt de retours ne contient qu\'un README et un outil de suivi des problèmes.',
          '**Achats et suivi.** Les textes des boutiques et la politique de confidentialité divergent, comme décrit dans la section sur la confidentialité.',
          '**Prérequis Android.** Le texte Google Play lu n\'indique aucune version minimale d\'Android ; le minimum iOS est 16.4.',
          '**Historique.** L\'application est sortie depuis environ sept mois, avec plus de 1 000 téléchargements sur Google Play et aucune note sur l\'App Store pour l\'instant ; les sources ne font état d\'aucun engagement de support.',
          '**Pas adaptée à ceux qui ont besoin de très gros modèles.** Les fiches situent les téléchargements entre 0,3 et 4 Go : les usages plus lourds relèvent d\'un ordinateur.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Chat hors ligne open source avec Q&R sur documents sur l\'appareil et benchmarks',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Client de chat open source sur l\'appareil, avec sa propre bibliothèque de modèles',
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
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche. Parmi ces quatre, MemoryAI est la seule application à code source fermé.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qui développe MemoryAI ?',
            a: 'Alessandro Facchini, développeur indépendant en Italie qui publie sous le nom Facchinits. La politique de confidentialité désigne Facchinits comme responsable du traitement des données.',
          },
          {
            q: 'Puis-je modifier ce dont l\'IA se souvient ?',
            a: 'Oui. L\'Agent Memory est facultative, stockée sur l\'appareil avec vos propres mots, et chaque entrée peut être consultée, modifiée ou supprimée. Elle nécessite un modèle d\'embedding pour fonctionner.',
          },
          {
            q: 'Comment fonctionne le Kid Mode ?',
            a: 'Un parent définit un code PIN ; l\'application verrouille alors le modèle actif, filtre les mots inappropriés avant qu\'ils n\'atteignent l\'IA et ajoute une consigne de sécurité. Un déverrouillage parental ouvre temporairement les réglages sans mettre fin au mode.',
          },
          {
            q: 'Puis-je utiliser mes propres modèles ?',
            a: 'Oui. Vous pouvez importer des fichiers GGUF compatibles depuis Hugging Face et les exécuter avec le moteur llama.cpp ; les modèles de la famille Gemma peuvent s\'exécuter avec le moteur LiteRT. L\'application avertit avant qu\'un modèle importé non vérifié ne s\'exécute en Kid Mode.',
          },
          {
            q: 'Fonctionne-t-elle sur Mac ?',
            a: 'L\'App Store mentionne les Mac avec puce Apple M1 ou ultérieure, mais indique pour l\'application « Designed for iPhone. Not verified for macOS » ; il n\'existe pas de version distincte pour ordinateur.',
          },
          {
            q: 'Où signaler un problème ?',
            a: 'Dans le [dépôt de retours](https://github.com/alessandrofacchini/memoryai-feedback/issues) public du développeur sur GitHub, ou à l\'adresse e-mail de support indiquée sur la fiche Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'MemoryAI est une application de chat mobile gratuite et hors ligne qui conserve sur l\'appareil une mémoire modifiable de l\'utilisateur et propose un Kid Mode verrouillé par code PIN, avec des questions sur documents et images, la voix mains libres et deux moteurs d\'inférence. Elle est aussi mise à jour fréquemment, avec une version la veille de la date de consultation de cet avis. En contrepartie, elle est à code source fermé, récente, de portée limitée, restreinte à des modèles d\'environ 0,3 à 4 Go, et ses textes de boutique et sa politique de confidentialité divergent sur les achats et le suivi, de sorte que ses affirmations de confidentialité ne peuvent pas être vérifiées dans le code. Elle convient aux lecteurs qui veulent ces fonctions précises et acceptent une application jeune et fermée ; ceux qui souhaitent un code auditable peuvent comparer [Private Mind](/fr/power-local-llm/private-mind-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[MemoryAI sur l\'App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — prix, historique des versions, prérequis, libellé de confidentialité et description, consultés le 19 octobre 2026.',
          '[MemoryAI sur Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — description, nombre de téléchargements, section Sécurité des données et date de dernière mise à jour, consultés le 19 octobre 2026.',
          '[Site web et politique de confidentialité de MemoryAI](https://alessandrofacchini.github.io/memoryai-privacy/) — traitement des données, usage du réseau, autorisations et services tiers, politique mise à jour pour la dernière fois le 30 juin 2026.',
          '[memoryai-feedback sur GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — l\'outil public de suivi des problèmes du développeur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite, sous licence MIT, pour iPhone et Android.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source gratuit sur l\'appareil pour iOS et Android.',
          '[Avis Off Grid](/fr/power-local-llm/off-grid-ai-review) — une suite d\'IA hors ligne open source pour téléphones et ordinateurs.',
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application d\'IA open source sur l\'appareil de Google.',
          '[Les meilleures applications de LLM local pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le comparatif Android plus large.',
          '[Les meilleures applications de LLM local pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif iPhone plus large.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-ja.webp',
    title: 'MemoryAIレビュー:iPhone・Android向けの無料オフラインAIチャット',
    seoTitle: 'MemoryAIレビュー:無料のオフラインAIチャットアプリ',
    intro:
      'MemoryAIは、イタリアの個人開発者Alessandro Facchini(Facchinitsの名義で活動)が提供する、iPhone・Android向けの無料チャットアプリです。llama.cppとGoogleのLiteRTという2つのエンジンで、オープンウェイトの言語モデルを端末上で動かします。さらに、ドキュメントへの質問、編集可能なオプションのAgent Memory(エージェントメモリ)、ハンズフリーの音声モード、PINで保護されたキッズモードを備えています。ソースコードは非公開で、公開からも間もなく、App Storeでの最初のリリースは2026年3月30日でした。本レビューは、2026年10月19日に確認したApp StoreとGoogle Playの掲載情報、開発者のウェブサイトとプライバシーポリシー、公開されているフィードバック用リポジトリに基づいています。PromptQuorumはアプリを実際には試していません。',
    metaDescription:
      'MemoryAIレビュー:ドキュメントQ&A、編集可能なAgent Memory、音声、キッズモードを備えた無料のオフラインAIチャット。プライバシーと制約を解説します。',
    twitterDescription:
      'MemoryAIレビュー:ドキュメントQ&A、編集可能な端末内メモリ、ハンズフリー音声、PINで保護されたキッズモードを備えた、iPhone・Android向けの無料・ソース非公開のオフラインAIチャットアプリ。ストアの掲載情報とプライバシーポリシーの内容を解説します。',
    audience:
      '言語モデルを端末上で動かす無料のチャットアプリを求めるiPhoneとAndroidのユーザーで、何がオフラインのままなのか、何が外部に送信されるのか、情報源が何を確認していないのかを知りたい方向け。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI レビュー',
    targetKeywords: [
      'memoryai アプリ レビュー',
      'memoryai offline private ai',
      'オフライン aiチャット アプリ iphone android',
      '端末内 ai エージェントメモリ',
      'ai キッズモード オフライン アプリ',
      'gguf インポート モバイルアプリ',
      'memoryai private mind 比較',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI(2026年10月19日時点のiOS版はバージョン1.0.52)は、アカウント不要でiPhoneとAndroid上のオープンウェイトの言語モデルを動かす、無料でソース非公開のチャットアプリで、編集可能な端末内メモリとPINで保護されたキッズモードを組み合わせています。** モデルはHugging Faceから一度ダウンロードすれば、その後はオフラインで動作します。ストアの説明文とプライバシーポリシーは、分析機能と課金について完全には一致していないため、「トラッキングなし」という表記を当てにする前に、プライバシーの項を読んでください。',
    quickAnswerTop: {
      ja: {
        question: 'MemoryAIは本当にオフラインで動き、無料で使えますか?',
        answer:
          '掲載情報によれば、中核機能についてはその通りです。モデルを一度ダウンロードしたあとは、チャット、ドキュメントへの質問、音声が端末上で動作し、アカウントも広告もありません。一方、プライバシーポリシーには、匿名の分析データとクラッシュレポートが外部に送信されること、プレミアム機能の課金が存在しうることが書かれており、ストアの説明文はこれを否定しています。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)と[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586)で無料。',
          'Gemma、Qwen、Llama、Phi、DeepSeekなどのGGUFおよびLiteRTモデルでチャットできる。モデルのダウンロードは各0.3〜4 GB。',
          '表示・編集・削除できるオプションのAgent Memory、ドキュメントや画像についての質問。',
          '保護者用PIN、コンテンツフィルター、ロックされたモデルを備えたキッズモード。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'MemoryAIとは?', anchor: 'what-is-memoryai' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
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
            text: 'MemoryAIは、オープンウェイトの言語モデルを端末上で動かす、無料でソース非公開のiPhone・Androidアプリで、編集可能なAgent Memory、ドキュメントへの質問、ハンズフリー音声、PINで保護されたキッズモードを備えている。',
          },
          {
            type: 'plain-terms',
            text: 'アプリをインストールし、モデルを一度ダウンロードすれば、アカウントなしでチャットや会話、手元のPDFについての質問ができます。アプリが保持するオプションのメモリは端末上にあり、読むことも削除することもできます。',
          },
        ],
        items: [
          '開発元:Facchinitsの名義で公開しているイタリアの個人開発者Alessandro Facchini。それ以外に背後の企業はなく、ソースコードも公開されていない。',
          'メンテナンス:iOS版のバージョン履歴には2026年3月30日から10月18日までに13回のリリースがあり、Google Playでも2026年10月18日に更新が表示されているため、更新停止の警告は当てはまらない。',
          '利用実績:Google Playのダウンロード数は1K+で、App Storeにはまだ評価がないため、公開されている実績は少ない。',
          'プラットフォーム:iPhone(iOS 16.4以降)とAndroid。App StoreにはApple M1以降のMacも表示されているが、「macOSでは未検証」と記されている。',
          '言語:アプリは英語、イタリア語、ドイツ語、フランス語、スペイン語、ポルトガル語で利用できる。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月19日に確認したApp StoreとGoogle Playの掲載情報、開発者のウェブサイトとプライバシーポリシー、公開されているフィードバック用リポジトリに基づいています。PromptQuorumはアプリのインストール、テスト、ベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'MemoryAIとは?',
        content: [
          '**MemoryAIは、クラウドサービスを呼び出す代わりに、オープンウェイトの言語モデルをローカルで動かすモバイル向けチャットアプリです。** 掲載情報によれば、モデルは同梱されておらず、アプリ内のリストから選ぶか、Hugging Faceから互換性のある任意のGGUFファイルをインポートします。初回の実行にはダウンロードのためのネットワーク接続が必要です。推論エンジンは2種類で、GGUFモデル向けのllama.cppと、Gemma系モデル向けのGoogleのMediaPipe/LiteRTです。',
          'App Storeの掲載タイトルは、米国・日本・韓国のストアでは「MemoryAI: Offline Private AI」、ドイツでは「MemoryAI: Private Offline-KI」、ブラジルでは「MemoryAI: a IA que lembra」です。Google Playのパッケージ名はcom.ts.memoryaiです。「Agent Memory」(エージェントメモリ)はこのアプリの機能であり、別個の製品ではありません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**MemoryAIは2つのモバイルストアから入手します。デスクトップ版、ソースコード、サイドロード用ファイルは提供されていません。** 以下の2つのストアリンクは、開発者のサイトと掲載情報が使っているものです。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'iPhone',
            '入手先': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586)(iOS 16.4以降、198.7 MB)',
          },
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[alessandrofacchini.github.io/memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[同じページ](https://alessandrofacchini.github.io/memoryai-privacy/)(英語、イタリア語版へのリンクあり。最終更新2026年6月30日)',
          },
          {
            'プラットフォーム': '不具合の報告',
            '入手先': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues)(フィードバック専用、ソースコードなし)',
          },
        ],
        note: '確認したバージョン:App Storeの掲載情報によれば、iOS版は2026年10月18日にリリースされた1.0.52です。Google Playのページも2026年10月18日に更新されており、ページデータにはビルド1.0.54と記載されています。確認できたGoogle Playの掲載テキストには、Androidの最低バージョンが示されていません。',
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
            whyItMatters: 'App StoreまたはGoogle PlayからMemoryAIをダウンロードします。掲載情報によれば、アカウントは不要で、端末のRAMは4 GB以上が望ましいとされています。',
          },
          {
            title: 'Wi-Fiでモデルをダウンロードする',
            whyItMatters: '掲載情報によれば、モデルは各0.3〜4 GBです。2026年10月18日のアップデートでは、最初に提案されるモデルが、お使いの端末で問題なく動作する中で最も軽いものになり、画面を離れてもダウンロードが続くとされています。',
          },
          {
            title: 'チャットまたは会話する',
            whyItMatters: '入力するか、音声入力を使うか、連続音声モードをオンにします。このモードでは、アプリが聞き取り、回答し、その回答をタップなしで読み上げます。',
          },
          {
            title: 'ドキュメントや画像を追加する',
            whyItMatters: 'PDF、TXT、Markdownファイルをインポートするか、写真を選んで、それらについて質問します。',
          },
          {
            title: '必要に応じてAgent Memoryをオンにする',
            whyItMatters: '既定ではオフで、埋め込みモデルが必要です。オンにすると、保存された内容を開いて編集または削除できます。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、App StoreとGoogle Playの説明文またはプライバシーポリシーに基づくもので、独自に検証したものはありません。**',
        ],
        items: [
          '**2つのエンジンとカスタムモデル。** モデルごとにllama.cppまたはGoogleのMediaPipe/LiteRTを選べます。Hugging Faceから互換性のある任意のGGUFファイルをインポートでき、制限付きモデル向けにHugging Faceトークンを保存でき、ダウンロードの一時停止と再開ができ、モデルごとにtemperature、top-k、top-p、最大トークン数を調整できます。',
          '**Agent Memory。** オプションの機能です。AIはユーザーが伝えた内容をユーザー自身の言葉で端末上に保存し、各メモリを表示、編集、削除できます。1.0.52のリリースノートによれば、「メールを書いて」のような依頼はメモリとして保存されなくなりました。',
          '**ドキュメントと画像。** PDF、TXT、Markdownファイルについての質問、ビジョンモデルによる画像分析(複数の画像を同時に)、Google ML Kitを通じた写真のテキスト認識に対応しています。',
          '**音声。** 端末内の音声入力、読み上げ(text-to-speech)、連続のハンズフリーモードがあります。',
          '**キッズモード。** 保護者用PIN、不適切な単語がモデルに届く前にブロックするフィルター、ロックされたモデル、安全プロンプト、未検証のインポートモデルに対する警告、モードを終了せずに設定を開ける保護者用ロック解除を備えています。',
          '**日常的なツール。** チャット検索、20種類のペルソナテンプレート、1秒あたりのトークン数で示す速度ベンチマーク、コンテキストウィンドウの表示、読み込んだモデルがGPUとCPUのどちらで動いているかを示す画面、AndroidではGoogle Drive、iPhoneではiCloudへのバックアップがあります。',
        ],
        note: '2つのストアの説明文はほぼ同じですが、同一ではありません。たとえばiOS版のテキストはiCloudバックアップに、Android版のテキストはGoogle Driveに触れています。最終的な判断基準は、インストールしたビルドです。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**チャット、ドキュメント、メモリは既定で端末上にとどまり、開発者によれば、アプリにはAIサーバーがなく、チャットのテキストも送信しません。** Google PlayのData safetyセクションでは、第三者と共有されるデータはなく、アプリ情報とパフォーマンス、デバイスまたはその他のIDが収集される可能性があり、通信中は暗号化されると申告されています。App Storeのプライバシーラベルには、分析用として検索履歴、デバイスID、製品の操作が、アプリの機能用としてデバイスID、クラッシュとパフォーマンスのデータが挙げられており、いずれも「ユーザーに関連付けられない」とされています。',
          '[プライバシーポリシー](https://alessandrofacchini.github.io/memoryai-privacy/)は、端末の外に出るものとして、TelemetryDeckへの匿名の利用イベント、Sentryへのクラッシュレポート、OneSignalを通じたオプションのプッシュ通知、Hugging Faceからのモデルのダウンロード、ご自身のGoogle DriveまたはiCloudへのオプションのバックアップを挙げています。また、ローカルのデータはアプリによって暗号化されず、端末自体の保護に依存すること、会話がアプリの外に出るのはユーザーがエクスポートしたときだけであることも記されています。',
          'ストアの説明文は「アプリ内課金なし」「トラッキングなし」としていますが、ポリシーはプレミアム機能向けのアプリ内課金を提供しているとし、上記の分析機能を挙げています。どちらの記述が現行のビルドに当てはまるかは情報源からは明確にならなかったため、より詳細なポリシーの記述のほうを参考にしてください。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'アプリはソース非公開のため、これらの主張をコードで確認することはできず、PromptQuorumはネットワーク通信の監査も行っていません。機密データを扱う方や、お子さまのためにキッズモードを設定する方は、ご自身の端末で動作を確認してください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**クラウドアカウントなしで、自分のことを覚えていてくれるスマートフォンのアシスタントを求める人。** Agent Memoryは端末内に保存され、編集できます。',
          '**お子さま向けのオフラインチャットを求める保護者。** キッズモードはPIN、フィルター、ロックされたモデルを組み合わせていますが、その効果は未検証です。',
          '**自分のPDFや写真についてプライベートに質問したい人。** ドキュメントと画像への質問が含まれています。',
          '**自分のモデルを持ち込みたいユーザー。** GGUFのインポートと2つのエンジンは、すでにお気に入りのモデルがある人に向いています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での性能。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、回答の品質、キッズモードの実際の強度は評価していません。',
          '**ソースコードとライセンス。** アプリはソース非公開で、フィードバック用リポジトリにはREADMEとイシュートラッカーしかありません。',
          '**課金とトラッキング。** プライバシーの項で述べたとおり、ストアの説明文とプライバシーポリシーは食い違っています。',
          '**Androidの要件。** 確認できたGoogle Playのテキストには、Androidの最低バージョンが示されていません。iOSの最低バージョンは16.4です。',
          '**実績。** アプリの公開からおよそ7か月で、Google Playのダウンロード数は1K+、App Storeにはまだ評価がなく、情報源にサポートの確約もありません。',
          '**非常に大きなモデルが必要な人には向きません。** 掲載情報ではダウンロードが0.3〜4 GBとされているため、より重い作業はコンピューターで行うのが適切です。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '端末内ドキュメントQ&Aとベンチマークを備えた、オープンソースのオフラインチャット',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '独自のモデルライブラリを持つ、オープンソースの端末内チャットクライアント',
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
        note: '競合アプリの詳細は頻繁に変わります。現在の価格、ライセンス、対応プラットフォームは、各アプリの掲載ページで確認してください。この4つのうち、ソースが非公開なのはMemoryAIだけです。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'MemoryAIは誰が作っていますか?',
            a: 'Facchinitsの名前で公開しているイタリアの個人開発者、Alessandro Facchiniです。プライバシーポリシーは、Facchinitsをデータ管理者として挙げています。',
          },
          {
            q: 'AIが覚えている内容を編集できますか?',
            a: 'はい。Agent Memoryはオプションで、ユーザー自身の言葉で端末上に保存され、各項目を表示、編集、削除できます。動作には埋め込みモデルが必要です。',
          },
          {
            q: 'キッズモードはどのように動作しますか?',
            a: '保護者がPINを設定すると、アプリは使用中のモデルをロックし、不適切な単語がAIに届く前にフィルタリングして、安全プロンプトを追加します。保護者用ロック解除を使うと、モードを終了せずに一時的に設定を開けます。',
          },
          {
            q: '自分のモデルを使えますか?',
            a: 'はい。Hugging Faceから互換性のあるGGUFファイルをインポートして、llama.cppエンジンで実行できます。Gemma系モデルはLiteRTエンジンで実行できます。未検証のインポートモデルをキッズモードで実行する前には、アプリが警告を表示します。',
          },
          {
            q: 'Macでも動きますか?',
            a: 'App StoreにはApple M1以降のMacが表示されていますが、アプリには「iPhone向けに設計。macOSでは未検証」と記されており、独立したデスクトップ版はありません。',
          },
          {
            q: '問題はどこに報告すればよいですか?',
            a: 'GitHubにある開発者の公開[フィードバック用リポジトリ](https://github.com/alessandrofacchini/memoryai-feedback/issues)か、Google Playの掲載情報にあるサポート用メールアドレスに報告してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'MemoryAIは、ユーザーに関する編集可能なメモリを端末上に保持し、PINで保護されたキッズモードを提供する無料のオフラインモバイルチャットアプリで、ドキュメントと画像への質問、ハンズフリー音声、2つの推論エンジンも備えています。更新も頻繁で、本レビューの確認日の前日にもリリースがありました。その一方で、ソースは非公開で、公開から間もなく、利用規模は小さく、モデルはおよそ0.3〜4 GBに限られ、ストアの説明文とプライバシーポリシーは課金とトラッキングについて食い違っているため、プライバシーに関する主張をコードで確認することはできません。これらの機能を求め、新しくソース非公開のアプリを受け入れられる方に向いています。検証可能なコードを求める方は、[Private Mind](/ja/power-local-llm/private-mind-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比較してみてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのMemoryAI](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — 価格、バージョン履歴、要件、プライバシーラベル、説明文。2026年10月19日に確認。',
          '[Google PlayのMemoryAI](https://play.google.com/store/apps/details?id=com.ts.memoryai) — 説明文、ダウンロード数、Data safetyセクション、最終更新日。2026年10月19日に確認。',
          '[MemoryAIのウェブサイトとプライバシーポリシー](https://alessandrofacchini.github.io/memoryai-privacy/) — データの扱い、ネットワーク利用、権限、第三者サービス。ポリシーの最終更新は2026年6月30日。',
          '[GitHubのmemoryai-feedback](https://github.com/alessandrofacchini/memoryai-feedback) — 開発者の公開イシュートラッカー。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhone・Android向けの無料でMITライセンスのオフラインチャットアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOS・Android向けの無料のオープンソース端末内チャットクライアント。',
          '[Off Gridレビュー](/ja/power-local-llm/off-grid-ai-review) — スマートフォンとデスクトップ向けのオープンソースのオフラインAIスイート。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Googleのオープンソースの端末内AIアプリ。',
          '[2026年版 Android向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けのより幅広いまとめ。',
          '[2026年版 iPhone向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより幅広いまとめ。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-pt.webp',
    title: 'MemoryAI: Análise do App Gratuito de Chat de IA Offline para iPhone e Android',
    seoTitle: 'Análise do MemoryAI: App Grátis de Chat de IA Offline',
    intro:
      'O MemoryAI é um app de chat gratuito para iPhone e Android de Alessandro Facchini (que atua como Facchinits), desenvolvedor independente na Itália. Ele roda modelos de linguagem de peso aberto no celular por dois motores, o llama.cpp e o LiteRT do Google, e acrescenta perguntas sobre documentos, uma Agent Memory (memória do agente) opcional e editável, um modo de voz com as mãos livres e um Modo Criança protegido por PIN. O código é fechado e o app é recente: a primeira versão na App Store saiu em 30 de março de 2026. Esta análise se baseia nas fichas da App Store e do Google Play, no site e na política de privacidade do desenvolvedor e no repositório público de feedback, consultados em 19 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do MemoryAI: chat de IA offline, grátis e de código fechado para iPhone e Android, com perguntas sobre documentos, memória editável e Modo Criança.',
    twitterDescription:
      'Análise do MemoryAI: app de chat de IA offline, gratuito e de código fechado, para iPhone e Android, com perguntas sobre documentos, memória editável no dispositivo, voz com as mãos livres e um Modo Criança com PIN. O que dizem as fichas e a política de privacidade.',
    audience:
      'Usuários de iPhone e Android que querem um app de chat gratuito que rode modelos de linguagem no dispositivo e que precisam saber o que fica offline, o que é enviado para fora e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do MemoryAI',
    targetKeywords: [
      'memoryai app análise',
      'memoryai ia offline privada',
      'app de chat de ia offline iphone android',
      'memória de agente de ia no dispositivo',
      'modo criança ia app offline',
      'importar gguf app de celular',
      'memoryai vs private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**O MemoryAI (versão 1.0.52 no iOS em 19 de outubro de 2026) é um app de chat gratuito e de código fechado que roda modelos de linguagem de peso aberto em iPhone e Android sem conta, e combina uma memória editável no dispositivo com um Modo Criança protegido por PIN.** Os modelos são baixados uma vez do Hugging Face e depois rodam offline. Os textos das lojas e a política de privacidade não concordam totalmente sobre análises de uso e compras, então leia a seção de privacidade antes de confiar na frase "sem rastreamento".',
    quickAnswerTop: {
      pt: {
        question: 'O MemoryAI é mesmo offline e gratuito?',
        answer:
          'Segundo as fichas, sim para os recursos principais: depois de um download único do modelo, o chat, as perguntas sobre documentos e a voz rodam no celular, sem conta e sem anúncios. A política de privacidade acrescenta que análises de uso anônimas e relatórios de falhas são enviados para fora e que pode haver compras de recursos premium, o que os textos das lojas negam.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) e na [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'Chat com modelos GGUF e LiteRT como Gemma, Qwen, Llama, Phi e DeepSeek; cada download de modelo tem de 0.3 a 4 GB.',
          'Agent Memory opcional que você pode ver, editar e apagar, além de perguntas sobre documentos e imagens.',
          'Modo Criança com PIN dos pais, filtro de conteúdo e modelo bloqueado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o MemoryAI?', anchor: 'what-is-memoryai' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
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
            text: 'O MemoryAI é um app gratuito e de código fechado para iPhone e Android que roda modelos de linguagem de peso aberto no dispositivo e acrescenta uma Agent Memory editável, perguntas sobre documentos, voz com as mãos livres e um Modo Criança protegido por PIN.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app, baixa um modelo uma vez e depois conversa, fala ou faz perguntas sobre seus próprios PDFs sem conta; a memória opcional que ele guarda sobre você fica no celular, onde você pode lê-la e apagá-la.',
          },
        ],
        items: [
          'Desenvolvedor: Alessandro Facchini, desenvolvedor independente na Itália que publica como Facchinits; não há empresa por trás além disso, e o código-fonte não é público.',
          'Manutenção: o histórico de versões do iOS mostra 13 versões entre 30 de março e 18 de outubro de 2026, e o Google Play mostra uma atualização em 18 de outubro de 2026, então não se aplica aviso de projeto abandonado.',
          'Alcance: o Google Play mostra mais de 1 mil downloads e a App Store ainda não mostra avaliações, então o app tem pouco histórico público.',
          'Plataformas: iPhone (iOS 16.4 ou posterior) e Android; a App Store também lista Macs com Apple M1 ou posterior, marcados como "não verificado para macOS".',
          'Idiomas: o app está disponível em inglês, italiano, alemão, francês, espanhol e português.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia nas fichas da App Store e do Google Play, no site e na política de privacidade do desenvolvedor e no repositório público de feedback, consultados em 19 de outubro de 2026. A PromptQuorum não instalou, não testou nem fez benchmarks do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'O que é o MemoryAI?',
        content: [
          '**O MemoryAI é um app de chat para celular que roda modelos de linguagem de peso aberto localmente, em vez de chamar um serviço na nuvem.** Segundo as fichas, nenhum modelo vem incluído: você escolhe um na lista do app ou importa qualquer arquivo GGUF compatível do Hugging Face, e a primeira execução precisa de conexão com a rede para baixá-lo. São oferecidos dois motores de inferência, o llama.cpp para modelos GGUF e o MediaPipe/LiteRT do Google para modelos da família Gemma.',
          'A ficha da App Store tem o título "MemoryAI: Offline Private AI" nas lojas dos EUA, do Japão e da Coreia, "MemoryAI: Private Offline-KI" na Alemanha e "MemoryAI: a IA que lembra" no Brasil; o pacote do Google Play é com.ts.memoryai. A "Agent Memory" é um recurso deste app, não um produto separado.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O MemoryAI é instalado pelas duas lojas de apps para celular; não há versão para computador, código-fonte nem arquivo para instalação manual.** Os dois links das lojas abaixo são os que o site e as fichas do desenvolvedor usam.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'Onde obter': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 ou posterior, 198.7 MB)',
          },
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[alessandrofacchini.github.io/memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Mesma página](https://alessandrofacchini.github.io/memoryai-privacy/) (inglês, com link para a versão italiana; atualizada em 30 de junho de 2026)',
          },
          {
            'Plataforma': 'Relatos de bugs',
            'Onde obter': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues) (só feedback, sem código-fonte)',
          },
        ],
        note: 'Versão analisada: 1.0.52 no iOS, lançada em 18 de outubro de 2026, conforme a ficha da App Store; a página do Google Play também foi atualizada em 18 de outubro de 2026 e os dados da página indicam o build 1.0.54. A ficha do Google Play não mostra uma versão mínima do Android no texto lido.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**A configuração segue a ordem descrita nas fichas das lojas; a PromptQuorum não executou esses passos.**',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Baixe o MemoryAI na App Store ou no Google Play; segundo as fichas, não é necessário conta e o celular deve ter 4 GB de RAM ou mais.',
          },
          {
            title: 'Baixar um modelo no Wi-Fi',
            whyItMatters: 'Segundo as fichas, os modelos têm de 0.3 a 4 GB cada. A atualização de 18 de outubro de 2026 diz que o primeiro modelo sugerido agora é o mais leve que roda bem no seu celular e que o download continua se você sair da tela.',
          },
          {
            title: 'Conversar ou falar',
            whyItMatters: 'Digite, dite ou ative o modo de voz contínuo, no qual o app escuta, responde e lê a resposta em voz alta sem toques.',
          },
          {
            title: 'Adicionar documentos ou imagens',
            whyItMatters: 'Importe arquivos PDF, TXT ou Markdown, ou escolha fotos, e faça perguntas sobre eles.',
          },
          {
            title: 'Ativar a Agent Memory, se quiser',
            whyItMatters: 'Ela vem desativada por padrão e precisa de um modelo de embedding; depois de ativada, você pode abrir, editar ou apagar o que ela guardou.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm das descrições da App Store e do Google Play ou da política de privacidade; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Dois motores e modelos personalizados.** Escolha o llama.cpp ou o MediaPipe/LiteRT do Google para cada modelo, importe qualquer arquivo GGUF compatível do Hugging Face, salve um token do Hugging Face para modelos com acesso restrito, pause e retome downloads e ajuste temperatura, top-k, top-p e o máximo de tokens por modelo.',
          '**Agent Memory.** Opcional; a IA guarda no dispositivo, em suas próprias palavras, o que você conta a ela, e você pode ver, editar ou apagar cada memória. As notas da versão 1.0.52 dizem que pedidos como "escreva um e-mail" deixaram de ser salvos como memórias.',
          '**Documentos e imagens.** Perguntas sobre arquivos PDF, TXT e Markdown, análise de imagens com modelos de visão (várias imagens ao mesmo tempo) e reconhecimento de texto em fotos pelo Google ML Kit.',
          '**Voz.** Entrada de voz no dispositivo, conversão de texto em fala e um modo contínuo com as mãos livres.',
          '**Modo Criança.** Um PIN dos pais, um filtro que bloqueia palavras inadequadas antes de chegarem ao modelo, um modelo bloqueado, um prompt de segurança, avisos para modelos importados não verificados e um desbloqueio dos pais que abre as configurações sem encerrar o modo.',
          '**Ferramentas do dia a dia.** Busca nas conversas, 20 modelos de persona, um benchmark de velocidade em tokens por segundo, a exibição da janela de contexto, uma tela que mostra se o modelo carregado roda na GPU ou na CPU e backup no Google Drive no Android ou no iCloud no iPhone.',
        ],
        note: 'As duas descrições das lojas são quase idênticas, mas não iguais; por exemplo, o texto do iOS menciona o backup no iCloud e o do Android, o Google Drive. A versão instalada é a palavra final.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**Conversas, documentos e memórias ficam no dispositivo por padrão, e o desenvolvedor diz que o app não tem servidores de IA e não envia o texto das conversas.** A seção Segurança dos dados do Google Play declara que nenhum dado é compartilhado com terceiros, com possível coleta de informações do app e de desempenho e de IDs do dispositivo ou outros, criptografados em trânsito. O rótulo de privacidade da App Store lista histórico de pesquisa, ID do dispositivo e interação com o produto para análises, e ID do dispositivo e dados de falhas e desempenho para o funcionamento do app, todos marcados como não vinculados a você.',
          'A [política de privacidade](https://alessandrofacchini.github.io/memoryai-privacy/) nomeia o que sai do celular: eventos de uso anônimos para o TelemetryDeck, relatórios de falhas para o Sentry, notificações push opcionais pelo OneSignal, downloads de modelos do Hugging Face e backup opcional no seu próprio Google Drive ou iCloud. Ela também diz que os dados locais não são criptografados pelo app e dependem da proteção do próprio dispositivo, e que as conversas só saem do app quando você as exporta.',
          'As descrições das lojas dizem "sem compras no app" e "sem rastreamento", enquanto a política diz que o app oferece compras no app para recursos premium e lista as análises acima. Não ficou claro, pelas fontes, qual afirmação corresponde à versão atual, então trate a política como a mais detalhada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app é de código fechado, então nenhuma dessas afirmações pode ser conferida no código, e a PromptQuorum não auditou o tráfego de rede. Quem lida com dados confidenciais, ou configura o Modo Criança para uma criança, deve verificar o comportamento no próprio aparelho.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Pessoas que querem um assistente no celular que se lembre delas sem uma conta na nuvem.** A Agent Memory é guardada localmente e é editável.',
          '**Pais que querem um chat offline para crianças.** O Modo Criança combina PIN, filtro e modelo bloqueado, embora sua eficácia não tenha sido verificada.',
          '**Pessoas que querem fazer perguntas sobre seus próprios PDFs e fotos com privacidade.** Perguntas sobre documentos e imagens estão incluídas.',
          '**Usuários que gostam de trazer os próprios modelos.** A importação de GGUF e os dois motores servem a quem já tem um modelo favorito.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria, qualidade das respostas e a força real do Modo Criança não foram avaliados.',
          '**Código-fonte e licença.** O app é de código fechado; o repositório de feedback contém apenas um README e um rastreador de problemas.',
          '**Compras e rastreamento.** Os textos das lojas e a política de privacidade divergem, como descrito na seção de privacidade.',
          '**Requisitos do Android.** O texto lido do Google Play não mostra uma versão mínima do Android; o mínimo no iOS é 16.4.',
          '**Histórico.** O app está disponível há cerca de sete meses, com mais de 1 mil downloads no Google Play e sem avaliações na App Store ainda; as fontes não indicam nenhum compromisso de suporte.',
          '**Não é para quem precisa de modelos muito grandes.** As fichas colocam os downloads em 0.3 a 4 GB, então trabalhos mais pesados cabem melhor em um computador.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat offline de código aberto com perguntas sobre documentos no dispositivo e benchmarks',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Cliente de chat de código aberto no dispositivo, com biblioteca de modelos própria',
          },
          {
            'App': '[Off Grid](/pt/power-local-llm/off-grid-ai-review)',
            'Plataformas': 'iOS, Android, Mac, Windows',
            'Preço / licença': 'Freemium / MIT',
            'Diferença principal': 'Suíte de IA offline de código aberto para celulares e computadores',
          },
          {
            'App': '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'App de código aberto no dispositivo da equipe de AI Edge do Google',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais de cada app na ficha dele. Entre esses quatro, o MemoryAI é o único app de código fechado.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quem faz o MemoryAI?',
            a: 'Alessandro Facchini, desenvolvedor independente na Itália que publica com o nome Facchinits. A política de privacidade nomeia a Facchinits como controladora dos dados.',
          },
          {
            q: 'Posso editar o que a IA lembra?',
            a: 'Sim. A Agent Memory é opcional, fica guardada no dispositivo em suas próprias palavras, e cada entrada pode ser vista, editada ou apagada. Ela precisa de um modelo de embedding para funcionar.',
          },
          {
            q: 'Como funciona o Modo Criança?',
            a: 'Um dos pais define um PIN; o app então bloqueia o modelo ativo, filtra palavras inadequadas antes de chegarem à IA e adiciona um prompt de segurança. Um desbloqueio dos pais abre as configurações temporariamente sem encerrar o modo.',
          },
          {
            q: 'Posso usar meus próprios modelos?',
            a: 'Sim. Você pode importar arquivos GGUF compatíveis do Hugging Face e rodá-los no motor llama.cpp; modelos da família Gemma podem rodar no motor LiteRT. O app avisa antes de um modelo importado não verificado rodar no Modo Criança.',
          },
          {
            q: 'Funciona em um Mac?',
            a: 'A App Store lista Macs com Apple M1 ou posterior, mas marca o app como "Designed for iPhone. Not verified for macOS" ("Projetado para iPhone. Não verificado para macOS"), e não há versão separada para computador.',
          },
          {
            q: 'Onde relato um problema?',
            a: 'No [repositório de feedback](https://github.com/alessandrofacchini/memoryai-feedback/issues) público do desenvolvedor no GitHub, ou pelo e-mail de suporte que consta na ficha do Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O MemoryAI é um app de chat móvel offline e gratuito que mantém no dispositivo uma memória editável do usuário e oferece um Modo Criança protegido por PIN, além de perguntas sobre documentos e imagens, voz com as mãos livres e dois motores de inferência. Ele também é atualizado com frequência, com uma versão no dia anterior à consulta desta análise. Em contrapartida, é de código fechado, recente, de alcance pequeno, limitado a modelos de aproximadamente 0.3 a 4 GB, e os textos das lojas e a política de privacidade divergem sobre compras e rastreamento, então suas afirmações de privacidade não podem ser conferidas no código. Serve a quem quer esses recursos específicos e aceita um app jovem e fechado; quem quer código auditável pode comparar o [Private Mind](/pt/power-local-llm/private-mind-review) ou o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[MemoryAI na App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — preço, histórico de versões, requisitos, rótulo de privacidade e descrição, consultados em 19 de outubro de 2026.',
          '[MemoryAI no Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — descrição, número de downloads, seção Segurança dos dados e data da última atualização, consultados em 19 de outubro de 2026.',
          '[Site e política de privacidade do MemoryAI](https://alessandrofacchini.github.io/memoryai-privacy/) — tratamento de dados, uso da rede, permissões e serviços de terceiros, política atualizada em 30 de junho de 2026.',
          '[memoryai-feedback no GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — o rastreador público de problemas do desenvolvedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat no dispositivo, gratuito e de código aberto, para iOS e Android.',
          '[Análise do Off Grid](/pt/power-local-llm/off-grid-ai-review) — uma suíte de IA offline de código aberto para celulares e computadores.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app de IA no dispositivo, de código aberto, do Google.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-ar.webp',
    title: 'مراجعة MemoryAI: تطبيق دردشة ذكاء اصطناعي مجاني دون اتصال لـ iPhone وأندرويد',
    seoTitle: 'مراجعة MemoryAI: دردشة ذكاء اصطناعي مجانية دون اتصال',
    intro:
      'MemoryAI تطبيق دردشة مجاني لأجهزة iPhone وأندرويد من أليساندرو فاكيني (باسم Facchinits)، وهو مطوّر مستقل في إيطاليا. يشغّل نماذج لغوية مفتوحة الأوزان على الهاتف عبر محرّكين هما llama.cpp و LiteRT من Google، ويضيف أسئلة عن المستندات، وميزة Agent Memory (ذاكرة الوكيل) الاختيارية القابلة للتعديل، ووضعاً صوتياً دون لمس، ووضع الأطفال المحمي برقم PIN. وهو مغلق المصدر وحديث العهد: صدر أول إصدار على App Store في 30 مارس 2026. تستند هذه المراجعة إلى صفحتي التطبيق في App Store و Google Play وإلى موقع المطوّر وسياسة الخصوصية والمستودع العام للملاحظات، جرى التحقق منها في 19 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عملياً.',
    metaDescription:
      'مراجعة MemoryAI: تطبيق دردشة مجاني ومغلق المصدر دون اتصال لـ iPhone وأندرويد مع أسئلة على المستندات وذاكرة قابلة للتعديل ووضع للأطفال. الخصوصية والقيود.',
    twitterDescription:
      'مراجعة MemoryAI: تطبيق دردشة مجاني ومغلق المصدر دون اتصال لـ iPhone وأندرويد مع أسئلة على المستندات وذاكرة قابلة للتعديل على الجهاز ووضع صوتي دون لمس ووضع للأطفال محمي برقم PIN. ما تقوله صفحتا المتجر وسياسة الخصوصية.',
    audience:
      'مستخدمو iPhone وأندرويد الذين يريدون تطبيق دردشة مجانياً يشغّل النماذج اللغوية على الجهاز، ويحتاجون إلى معرفة ما يبقى دون اتصال، وما الذي يرسله إلى الخارج، وما الذي لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة MemoryAI',
    targetKeywords: [
      'مراجعة تطبيق memoryai',
      'memoryai ذكاء اصطناعي خاص دون اتصال',
      'تطبيق دردشة ذكاء اصطناعي دون اتصال iphone أندرويد',
      'ذاكرة وكيل ذكاء اصطناعي على الجهاز',
      'وضع الأطفال في تطبيق ذكاء اصطناعي دون اتصال',
      'استيراد gguf في تطبيق للهاتف',
      'memoryai مقابل private mind',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI (الإصدار 1.0.52 على iOS اعتباراً من 19 أكتوبر 2026) تطبيق دردشة مجاني ومغلق المصدر يشغّل نماذج لغوية مفتوحة الأوزان على iPhone وأندرويد دون حساب، ويجمع بين ذاكرة قابلة للتعديل على الجهاز ووضع للأطفال محمي برقم PIN.** تُنزَّل النماذج مرة واحدة من Hugging Face ثم تعمل دون اتصال. ولا تتفق نصوص المتجر وسياسة الخصوصية تماماً بشأن التحليلات والمشتريات، لذا اقرأ قسم الخصوصية قبل الاعتماد على عبارة «بلا تتبّع».',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل MemoryAI فعلاً دون اتصال وبلا أي تكلفة؟',
        answer:
          'بحسب صفحتيه، نعم بالنسبة للميزات الأساسية: فبعد تنزيل النموذج مرة واحدة تعمل الدردشة والأسئلة عن المستندات والصوت على الهاتف، دون حساب ودون إعلانات. وتضيف سياسة الخصوصية أن تحليلات مجهولة وتقارير أعطال تُرسل إلى الخارج، وأن مشتريات للميزات المميزة قد تكون موجودة، وهو ما تنفيه نصوص المتجر.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) و[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586).',
          'دردشة مع نماذج GGUF و LiteRT مثل Gemma و Qwen و Llama و Phi و DeepSeek؛ ويبلغ حجم تنزيل كل نموذج من 0.3 إلى 4 جيجابايت.',
          'ميزة Agent Memory اختيارية يمكنك عرضها وتعديلها وحذفها، إضافة إلى أسئلة عن المستندات والصور.',
          'وضع الأطفال برقم PIN للوالدين ومرشّح محتوى ونموذج مقفل.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو MemoryAI؟', anchor: 'what-is-memoryai' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
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
            text: 'MemoryAI تطبيق مجاني ومغلق المصدر لأجهزة iPhone وأندرويد، يشغّل نماذج لغوية مفتوحة الأوزان على الجهاز ويضيف ميزة Agent Memory (ذاكرة الوكيل) القابلة للتعديل، وأسئلة عن المستندات، وصوتاً دون لمس، ووضعاً للأطفال محمياً برقم PIN.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته وتنزّل نموذجاً مرة واحدة، ثم تدردش أو تتحدث أو تسأل عن ملفات PDF الخاصة بك دون حساب؛ أما الذاكرة الاختيارية التي يحتفظ بها عنك فتبقى على الهاتف، حيث يمكنك قراءتها وحذفها.',
          },
        ],
        items: [
          'المطوّر: أليساندرو فاكيني، مطوّر مستقل في إيطاليا ينشر باسم Facchinits؛ ولا توجد شركة وراء التطبيق غير ذلك، ولا كود مصدري عام.',
          'الصيانة: يُظهر سجل إصدارات iOS 13 إصداراً بين 30 مارس و18 أكتوبر 2026، وتُظهر Google Play تحديثاً في 18 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
          'الانتشار: تُظهر Google Play أكثر من ألف تنزيل، ولا تُظهر App Store أي تقييمات بعد، لذا فسجلّ التطبيق العام قليل.',
          'المنصات: iPhone (iOS 16.4 أو أحدث) وأندرويد؛ كما تدرج App Store أجهزة Mac بمعالج Apple M1 أو أحدث، مع عبارة «غير مجرَّب على macOS».',
          'اللغات: التطبيق متاح بالإنجليزية والإيطالية والألمانية والفرنسية والإسبانية والبرتغالية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحتي App Store و Google Play وإلى موقع المطوّر وسياسة الخصوصية والمستودع العام للملاحظات، جرى التحقق منها في 19 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'ما هو MemoryAI؟',
        content: [
          '**MemoryAI تطبيق دردشة للهاتف يشغّل نماذج لغوية مفتوحة الأوزان محلياً بدلاً من الاتصال بخدمة سحابية.** وبحسب صفحتيه، لا يتضمن التطبيق أي نموذج: بل تختار واحداً من القائمة داخل التطبيق أو تستورد أي ملف GGUF متوافق من Hugging Face، ويحتاج التشغيل الأول إلى اتصال بالشبكة لتنزيله. ويتوفر محرّكا استدلال: llama.cpp لنماذج GGUF، و MediaPipe/LiteRT من Google لنماذج عائلة Gemma.',
          'يحمل التطبيق على App Store العنوان «MemoryAI: Offline Private AI» في المتاجر الأمريكي والياباني والكوري، و«MemoryAI: Private Offline-KI» في ألمانيا، و«MemoryAI: a IA que lembra» في البرازيل؛ وحزمته على Google Play هي com.ts.memoryai. أما Agent Memory فهي ميزة في هذا التطبيق وليست منتجاً منفصلاً.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت MemoryAI من متجري الهواتف؛ ولا تتوفر نسخة لسطح المكتب ولا كود مصدري ولا ملف للتثبيت الجانبي.** الرابطان أدناه هما اللذان يستخدمهما موقع المطوّر وصفحتا المتجر.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'iPhone',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 أو أحدث، 198.7 MB)',
          },
          {
            'المنصة': 'أندرويد',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            'المنصة': 'الموقع',
            'مكان الحصول عليه': '[alessandrofacchini.github.io/memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[الصفحة نفسها](https://alessandrofacchini.github.io/memoryai-privacy/) (إنجليزية/إيطالية؛ آخر تحديث 30 يونيو 2026)',
          },
          {
            'المنصة': 'الإبلاغ عن الأخطاء',
            'مكان الحصول عليه': '[مشكلات GitHub](https://github.com/alessandrofacchini/memoryai-feedback/issues) (للملاحظات فقط)',
          },
        ],
        note: 'الإصدار الذي جرت مراجعته: 1.0.52 على iOS، صدر في 18 أكتوبر 2026، بحسب صفحة App Store؛ وقد حُدّثت صفحة Google Play أيضاً في 18 أكتوبر 2026 وتذكر بيانات صفحتها الإصدار 1.0.54. ولا تعرض صفحة Google Play في النص الذي قرأناه حداً أدنى لإصدار أندرويد.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**يتبع الإعداد الترتيب الوارد في صفحتي المتجر؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل MemoryAI من App Store أو Google Play؛ وتقول صفحتا المتجر إنه لا يلزم حساب، وإن ذاكرة الهاتف ينبغي أن تكون 4 جيجابايت أو أكثر.',
          },
          {
            title: 'نزّل نموذجاً عبر Wi-Fi',
            whyItMatters: 'يبلغ حجم كل نموذج من 0.3 إلى 4 جيجابايت بحسب صفحتي المتجر. ويذكر تحديث 18 أكتوبر 2026 أن أول نموذج مقترح صار الأخف بين ما يعمل جيداً على هاتفك، وأن تنزيله يستمر إذا غادرت الشاشة.',
          },
          {
            title: 'دردش أو تحدّث',
            whyItMatters: 'اكتب، أو أملِ، أو فعّل الوضع الصوتي المستمر الذي يستمع فيه التطبيق ويجيب ويقرأ الإجابة بصوت مسموع دون لمس.',
          },
          {
            title: 'أضف مستندات أو صوراً',
            whyItMatters: 'استورد ملفات PDF أو TXT أو Markdown، أو اختر صوراً، واسأل عنها.',
          },
          {
            title: 'فعّل Agent Memory عند الرغبة',
            whyItMatters: 'هي معطّلة افتراضياً وتحتاج إلى نموذج تضمين؛ وبعد تفعيلها يمكنك فتح ما خزّنته وتعديله أو حذفه.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من وصفَي App Store و Google Play أو من سياسة الخصوصية؛ ولم يُختبر أي منها بصورة مستقلة.**',
        ],
        items: [
          '**محرّكان ونماذج مخصصة.** اختر llama.cpp أو MediaPipe/LiteRT من Google لكل نموذج، واستورد أي ملف GGUF متوافق من Hugging Face، واحفظ رمز Hugging Face للنماذج المقيّدة، وأوقف التنزيلات مؤقتاً واستأنفها، واضبط درجة الحرارة و top-k و top-p والحد الأقصى للرموز لكل نموذج.',
          '**Agent Memory.** اختيارية؛ يخزّن الذكاء الاصطناعي ما تخبره به بكلماتك على الجهاز، ويمكنك عرض كل ذاكرة أو تعديلها أو حذفها. وتذكر ملاحظات الإصدار 1.0.52 أن طلبات مثل «اكتب بريداً إلكترونياً» لم تعد تُحفظ كذكريات.',
          '**المستندات والصور.** أسئلة عن ملفات PDF و TXT و Markdown، وتحليل الصور بنماذج الرؤية (عدة صور في آن واحد)، والتعرّف على النص في الصور عبر Google ML Kit.',
          '**الصوت.** إدخال صوتي على الجهاز، وتحويل النص إلى كلام، ووضع مستمر دون لمس.',
          '**وضع الأطفال.** رقم PIN للوالدين، ومرشّح يحجب الكلمات غير اللائقة قبل وصولها إلى النموذج، ونموذج مقفل، وتعليمات أمان، وتحذيرات للنماذج المستوردة غير الموثّقة، وفتح والدي يتيح الوصول إلى الإعدادات دون إنهاء الوضع.',
          '**أدوات يومية.** بحث في المحادثات، و20 قالب شخصية، واختبار سرعة بالرموز في الثانية، وعرض لنافذة السياق، وشاشة تبيّن إن كان النموذج المحمّل يعمل على GPU أو CPU، ونسخ احتياطي إلى Google Drive على أندرويد أو iCloud على iPhone.',
        ],
        note: 'وصفا المتجر متقاربان لكنهما غير متطابقين؛ فمثلاً يذكر نص iOS النسخ الاحتياطي إلى iCloud ويذكر نص أندرويد Google Drive. والنسخة المثبّتة هي المرجع الأخير.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**تبقى المحادثات والمستندات والذكريات على الجهاز افتراضياً، ويقول المطوّر إن التطبيق لا يملك خوادم ذكاء اصطناعي ولا يرسل نص المحادثات.** ويصرّح قسم أمان البيانات في Google Play بعدم مشاركة أي بيانات مع أطراف ثالثة، مع احتمال جمع معلومات التطبيق والأداء ومعرّفات الجهاز أو غيرها، مشفّرة أثناء النقل. وتسرد بطاقة الخصوصية في App Store سجل البحث ومعرّف الجهاز والتفاعل مع المنتج لأغراض التحليلات، ومعرّف الجهاز وبيانات الأعطال والأداء لوظائف التطبيق، وكلها مصنّفة على أنها غير مرتبطة بهويتك.',
          'تحدد [سياسة الخصوصية](https://alessandrofacchini.github.io/memoryai-privacy/) ما يغادر الهاتف فعلاً: أحداث استخدام مجهولة إلى TelemetryDeck، وتقارير أعطال إلى Sentry، وإشعارات دفع اختيارية عبر OneSignal، وتنزيلات النماذج من Hugging Face، ونسخ احتياطي اختياري إلى حسابك على Google Drive أو iCloud. وتقول أيضاً إن البيانات المحلية لا يشفّرها التطبيق بل يعتمد على حماية الجهاز نفسه، وإن المحادثات لا تغادر التطبيق إلا عندما تصدّرها أنت.',
          'تقول وصفا المتجر «بلا مشتريات داخل التطبيق» و«بلا تتبّع»، بينما تقول السياسة إن التطبيق يقدّم مشتريات داخل التطبيق للميزات المميزة وتسرد التحليلات المذكورة أعلاه. ولم يتضح من المصادر أي العبارتين تطابق النسخة الحالية، لذا اعتبر السياسة الأكثر تفصيلاً.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'التطبيق مغلق المصدر، لذا لا يمكن التحقق من أي من هذه الادعاءات في الكود، ولم تدقق PromptQuorum حركة الشبكة. وينبغي لمن يتعامل مع بيانات سرية، أو يهيّئ وضع الأطفال لطفل، أن يتحقق من السلوك على جهازه.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يريد مساعداً على الهاتف يتذكره دون حساب سحابي.** تُخزَّن Agent Memory محلياً وهي قابلة للتعديل.',
          '**الآباء الذين يريدون دردشة دون اتصال موجّهة للأطفال.** يجمع وضع الأطفال بين رقم PIN ومرشّح ونموذج مقفل، وإن كانت فعاليته غير مؤكدة.',
          '**من يريد طرح أسئلة على ملفات PDF وصوره الخاصة بخصوصية.** تتوفر أسئلة المستندات والصور.',
          '**المستخدمون الذين يحبون إحضار نماذجهم الخاصة.** يناسب استيراد GGUF ووجود محرّكين كل من لديه نموذج مفضّل.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم السرعة واستهلاك البطارية وجودة الإجابات والقوة الفعلية لوضع الأطفال.',
          '**الكود المصدري والترخيص.** التطبيق مغلق المصدر؛ ولا يحتوي مستودع الملاحظات إلا على ملف README ونظام تتبع للمشكلات.',
          '**المشتريات والتتبّع.** تختلف نصوص المتجر عن سياسة الخصوصية، كما هو موضح في قسم الخصوصية.',
          '**متطلبات أندرويد.** لا يعرض نص Google Play الذي قرأناه حداً أدنى لإصدار أندرويد؛ والحد الأدنى لـ iOS هو 16.4.',
          '**السجل العام.** مضى على صدور التطبيق نحو سبعة أشهر، مع أكثر من ألف تنزيل على Google Play ودون تقييمات على App Store بعد؛ ولا تقدّم المصادر أي التزام بالدعم.',
          '**لا يناسب من يحتاج إلى نماذج كبيرة جداً.** تضع الصفحتان حجم التنزيلات بين 0.3 و4 جيجابايت، لذا فالأعمال الأثقل مكانها الحاسوب.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وأندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة على المستندات داخل الجهاز واختبارات سرعة',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وأندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز مع مكتبة نماذج خاصة به',
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
        note: 'تتغير تفاصيل المنافسين كثيراً؛ فتأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته. ومن بين هذه التطبيقات الأربعة، MemoryAI هو الوحيد المغلق المصدر.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'من يصنع MemoryAI؟',
            a: 'أليساندرو فاكيني، وهو مطوّر مستقل في إيطاليا ينشر باسم Facchinits. وتسمّي سياسة الخصوصية Facchinits بوصفه المسؤول عن معالجة البيانات.',
          },
          {
            q: 'هل يمكنني تعديل ما يتذكره الذكاء الاصطناعي؟',
            a: 'نعم. ميزة Agent Memory اختيارية، وتُخزَّن على الجهاز بكلماتك أنت، ويمكن عرض كل إدخال أو تعديله أو حذفه. وهي تحتاج إلى نموذج تضمين لتعمل.',
          },
          {
            q: 'كيف يعمل وضع الأطفال؟',
            a: 'يضبط أحد الوالدين رقم PIN؛ ثم يقفل التطبيق النموذج النشط، ويصفّي الكلمات غير اللائقة قبل وصولها إلى الذكاء الاصطناعي، ويضيف تعليمات أمان. ويفتح الفتح الوالدي الإعدادات مؤقتاً دون إنهاء الوضع.',
          },
          {
            q: 'هل يمكنني استخدام نماذجي الخاصة؟',
            a: 'نعم. يمكنك استيراد ملفات GGUF متوافقة من Hugging Face وتشغيلها على محرّك llama.cpp؛ ويمكن تشغيل نماذج عائلة Gemma على محرّك LiteRT. ويحذّر التطبيق قبل تشغيل نموذج مستورد غير موثّق في وضع الأطفال.',
          },
          {
            q: 'هل يعمل على Mac؟',
            a: 'تدرج App Store أجهزة Mac بمعالج Apple M1 أو أحدث لكنها تصف التطبيق بعبارة «مصمَّم لـ iPhone. غير مجرَّب على macOS»، ولا توجد نسخة منفصلة لسطح المكتب.',
          },
          {
            q: 'أين أبلّغ عن مشكلة؟',
            a: 'في [مستودع الملاحظات](https://github.com/alessandrofacchini/memoryai-feedback/issues) العام للمطوّر على GitHub، أو عبر البريد الإلكتروني للدعم المذكور في صفحة Google Play.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'MemoryAI تطبيق دردشة مجاني على الهاتف يعمل دون اتصال، يحتفظ بذاكرة قابلة للتعديل عن المستخدم على الجهاز ويقدّم وضعاً للأطفال محمياً برقم PIN، إلى جانب أسئلة المستندات والصور وصوت دون لمس ومحرّكي استدلال. كما أنه يُحدَّث كثيراً، إذ صدر إصدار قبل يوم من التحقق من هذه المراجعة. في المقابل، هو مغلق المصدر وحديث وضيق الانتشار ومقتصر على نماذج تبلغ نحو 0.3 إلى 4 جيجابايت، وتختلف نصوص المتجر وسياسة الخصوصية بشأن المشتريات والتتبّع، لذا لا يمكن التحقق من ادعاءاته الخاصة بالخصوصية في الكود. وهو يناسب القراء الذين يريدون هذه الميزات تحديداً ويقبلون تطبيقاً حديثاً ومغلقاً؛ أما من يريد كوداً قابلاً للتدقيق فيمكنه مقارنة [Private Mind](/ar/power-local-llm/private-mind-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[MemoryAI على App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — السعر وسجل الإصدارات والمتطلبات وبطاقة الخصوصية والوصف، جرى التحقق منها في 19 أكتوبر 2026.',
          '[MemoryAI على Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) — الوصف وعدد التنزيلات وقسم أمان البيانات وتاريخ آخر تحديث، جرى التحقق منها في 19 أكتوبر 2026.',
          '[موقع MemoryAI وسياسة الخصوصية](https://alessandrofacchini.github.io/memoryai-privacy/) — التعامل مع البيانات واستخدام الشبكة والأذونات والخدمات الخارجية، وآخر تحديث للسياسة في 30 يونيو 2026.',
          '[memoryai-feedback على GitHub](https://github.com/alessandrofacchini/memoryai-feedback) — نظام تتبع المشكلات العام للمطوّر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني بترخيص MIT يعمل دون اتصال لـ iPhone وأندرويد.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لنظامي iOS وأندرويد.',
          '[مراجعة Off Grid](/ar/power-local-llm/off-grid-ai-review) — مجموعة ذكاء اصطناعي مفتوحة المصدر تعمل دون اتصال على الهواتف وأجهزة سطح المكتب.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق Google المفتوح المصدر للذكاء الاصطناعي على الجهاز.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لأندرويد في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — الدليل الأشمل لأندرويد.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — الدليل الأشمل لـ iPhone.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-zh.webp',
    title: 'MemoryAI 评测:适用于 iPhone 和 Android 的免费离线 AI 聊天应用',
    seoTitle: 'MemoryAI 评测:适用于手机的免费离线 AI 聊天应用',
    intro:
      'MemoryAI 是一款适用于 iPhone 和 Android 的免费聊天应用,由意大利独立开发者 Alessandro Facchini(以 Facchinits 名义发布)开发。它通过 llama.cpp 和 Google 的 LiteRT 两个引擎在手机上运行开放权重语言模型,并提供文档问答、可选且可编辑的 Agent Memory(代理记忆)、免动手的语音模式,以及带 PIN 锁的儿童模式(Kid Mode)。该应用为闭源,且上线时间不长:App Store 首个版本发布于 2026 年 3 月 30 日。本评测基于 App Store 和 Google Play 页面、开发者网站与隐私政策,以及公开的反馈代码仓库,核实日期为 2026 年 10 月 19 日;PromptQuorum 并未亲自上手测试该应用。',
    metaDescription:
      'MemoryAI 评测:免费、闭源的 iPhone 和 Android 离线 AI 聊天应用,支持文档问答、可编辑 Agent Memory、语音模式与儿童模式。涵盖隐私与局限。',
    twitterDescription:
      'MemoryAI 评测:免费、闭源的 iPhone 和 Android 离线 AI 聊天应用——文档问答、可编辑的设备端记忆、免动手语音和带 PIN 锁的儿童模式。应用商店页面与隐私政策怎么说。',
    audience:
      '希望使用免费聊天应用在设备上运行语言模型的 iPhone 和 Android 用户,并且需要了解哪些内容保持离线、应用会向外发送什么,以及哪些内容来源并未确认。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI 评测',
    targetKeywords: [
      'memoryai 应用评测',
      'memoryai 离线私密 ai',
      '离线 ai 聊天应用 iphone android',
      '设备端 ai 代理记忆',
      'ai 儿童模式 离线应用',
      'gguf 导入 手机应用',
      'memoryai 与 private mind 对比',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI(截至 2026 年 10 月 19 日,iOS 版本为 1.0.52)是一款免费、闭源的聊天应用,无需账号即可在 iPhone 和 Android 上运行开放权重语言模型,并将可编辑的设备端记忆与带 PIN 锁的儿童模式结合在一起。** 模型只需从 Hugging Face 下载一次,之后即可离线运行。应用商店文字与隐私政策在数据分析和内购方面并不完全一致,因此在依赖“无追踪”的说法之前,请先阅读隐私部分。',
    quickAnswerTop: {
      zh: {
        question: 'MemoryAI 真的能离线运行并且免费吗?',
        answer:
          '根据其应用商店页面,核心功能确实如此:一次性下载模型后,聊天、文档问答和语音均在手机上运行,无需账号,也没有广告。其隐私政策补充说明,应用会发送匿名的数据分析和崩溃报告,并且可能存在高级功能的内购,而应用商店文字对此予以否认。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai) 和 [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) 免费获取。',
          '可与 Gemma、Qwen、Llama、Phi 和 DeepSeek 等 GGUF 和 LiteRT 模型聊天;每个模型下载量为 0.3 至 4 GB。',
          '可选的 Agent Memory,可查看、编辑和删除,另支持文档和图片提问。',
          '儿童模式带家长 PIN、内容过滤器和锁定的模型。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'MemoryAI 是什么?', anchor: 'what-is-memoryai' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '如何开始使用', anchor: 'getting-started' },
      { label: '来源已确认的功能', anchor: 'key-features' },
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
            text: 'MemoryAI 是一款免费、闭源的 iPhone 和 Android 应用,在设备上运行开放权重语言模型,并提供可编辑的 Agent Memory、文档问答、免动手语音和带 PIN 锁的儿童模式。',
          },
          {
            type: 'plain-terms',
            text: '安装应用,下载一次模型,之后无需账号即可聊天、对话,或针对你自己的 PDF 提问;它为你保存的可选记忆存放在手机上,你可以查看并删除。',
          },
        ],
        items: [
          '开发者:Alessandro Facchini,意大利独立开发者,以 Facchinits 名义发布;除此之外背后没有公司,也没有公开的源代码。',
          '维护情况:iOS 版本历史显示,2026 年 3 月 30 日至 10 月 18 日之间共有 13 次发布,Google Play 显示 2026 年 10 月 18 日有更新,因此不适用项目停滞警告。',
          '影响范围:Google Play 显示下载量 1K+,App Store 暂无评分,因此该应用的公开口碑记录很少。',
          '平台:iPhone(iOS 16.4 或更高版本)和 Android;App Store 还列出搭载 Apple M1 或更新芯片的 Mac,并标注“未针对 macOS 验证”。',
          '语言:该应用提供英语、意大利语、德语、法语、西班牙语和葡萄牙语版本。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 App Store 和 Google Play 页面、开发者网站与隐私政策,以及公开的反馈代码仓库,核实日期为 2026 年 10 月 19 日。PromptQuorum 并未安装、测试该应用,也未对其进行基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'MemoryAI 是什么?',
        content: [
          '**MemoryAI 是一款在本地运行开放权重语言模型的手机聊天应用,而不是调用云服务。** 根据其应用商店页面,应用不内置任何模型:你可以从应用内列表中选择一个,或从 Hugging Face 导入任何兼容的 GGUF 文件,首次运行需要联网下载。应用提供两个推理引擎:用于 GGUF 模型的 llama.cpp,以及用于 Gemma 系列模型的 Google MediaPipe/LiteRT。',
          'App Store 页面标题在美国、日本和韩国商店为“MemoryAI: Offline Private AI”,在德国为“MemoryAI: Private Offline-KI”,在巴西为“MemoryAI: a IA que lembra”;Google Play 包名为 com.ts.memoryai。其“Agent Memory”是该应用的一项功能,而不是单独的产品。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**MemoryAI 通过两大手机应用商店安装;不提供桌面版、源代码或旁加载文件。** 下方两个商店链接均为开发者网站和应用商店页面所使用的链接。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'iPhone',
            '获取方式': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586)(iOS 16.4 或更高,198.7 MB)',
          },
          {
            '平台': 'Android',
            '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            '平台': '网站',
            '获取方式': '[alessandrofacchini.github.io/memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[同一页面](https://alessandrofacchini.github.io/memoryai-privacy/)(含英语,另链接意大利语版;最后更新于 2026 年 6 月 30 日)',
          },
          {
            '平台': '问题反馈',
            '获取方式': '[GitHub issues](https://github.com/alessandrofacchini/memoryai-feedback/issues)(仅限反馈,无源代码)',
          },
        ],
        note: '所评测版本:iOS 版 1.0.52,发布于 2026 年 10 月 18 日,以 App Store 页面显示为准;Google Play 页面也在 2026 年 10 月 18 日更新,其页面数据列出的构建版本为 1.0.54。所读取的 Google Play 页面文字中未显示最低 Android 版本。',
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
            whyItMatters: '从 App Store 或 Google Play 下载 MemoryAI;页面称无需账号,且手机应有 4 GB 或更多内存。',
          },
          {
            title: '在 Wi-Fi 下下载模型',
            whyItMatters: '据页面所述,每个模型为 0.3 至 4 GB。2026 年 10 月 18 日的更新称,首个推荐模型现在是最适合你手机运行的最轻量模型,并且即使离开该界面,下载仍会继续。',
          },
          {
            title: '聊天或对话',
            whyItMatters: '可以打字、听写,或开启连续语音模式,应用会在无需点按的情况下聆听、回答并朗读答案。',
          },
          {
            title: '添加文档或图片',
            whyItMatters: '导入 PDF、TXT 或 Markdown 文件,或选择照片,然后针对它们提问。',
          },
          {
            title: '可选:开启 Agent Memory',
            whyItMatters: '默认关闭,并且需要一个嵌入模型;开启后,你可以打开、编辑或删除它已存储的内容。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项均来自 App Store 和 Google Play 的描述或隐私政策;均未经独立测试。**',
        ],
        items: [
          '**两个引擎与自定义模型。** 可按模型选择 llama.cpp 或 Google 的 MediaPipe/LiteRT,从 Hugging Face 导入任何兼容的 GGUF 文件,为受限模型保存 Hugging Face 令牌,暂停和恢复下载,并按模型调整 temperature、top-k、top-p 和最大 token 数。',
          '**Agent Memory。** 可选;AI 会以你自己的话把你告诉它的内容存储在设备上,你可以查看、编辑或删除每一条记忆。1.0.52 版本的更新说明称,诸如“写一封邮件”之类的请求不再被保存为记忆。',
          '**文档与图片。** 针对 PDF、TXT 和 Markdown 文件提问,使用视觉模型分析图片(可同时处理多张),并通过 Google ML Kit 识别照片中的文字。',
          '**语音。** 设备端语音输入、文本转语音,以及连续的免动手模式。',
          '**儿童模式(Kid Mode)。** 家长 PIN、在不当词语到达模型之前将其拦截的过滤器、锁定的模型、安全提示词、对未经验证的导入模型的警告,以及无需结束该模式即可打开设置的家长解锁。',
          '**日常工具。** 聊天搜索、20 个角色模板、以每秒 token 数计的速度基准测试、上下文窗口显示、显示已加载模型运行在 GPU 还是 CPU 上的界面,以及备份(Android 上到 Google Drive,iPhone 上到 iCloud)。',
        ],
        note: '两个应用商店的描述几乎相同,但并不完全一致;例如,iOS 文字提到 iCloud 备份,而 Android 文字提到 Google Drive。最终以已安装的版本为准。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**聊天、文档和记忆默认保存在设备上,开发者称该应用没有 AI 服务器,也不发送聊天文本。** Google Play 的数据安全部分声明未与第三方共享数据,可能收集应用信息、性能数据以及设备或其他 ID,且传输时加密。App Store 隐私标签列出:用于数据分析的搜索历史、设备 ID 和产品交互,以及用于应用功能的设备 ID、崩溃和性能数据,均标注为未与你关联。',
          '[隐私政策](https://alessandrofacchini.github.io/memoryai-privacy/)列出了确实会离开手机的内容:发送至 TelemetryDeck 的匿名使用事件、发送至 Sentry 的崩溃报告、通过 OneSignal 发送的可选推送通知、来自 Hugging Face 的模型下载,以及可选的备份到你自己的 Google Drive 或 iCloud。政策还称,本地数据不由应用加密,而是依赖设备自身的保护,并且对话仅在你导出时才会离开应用。',
          '应用商店描述称“无内购”和“无追踪”,而政策则称应用为高级功能提供内购,并列出了上述数据分析。当前版本究竟符合哪种说法,来源中并不明确,因此请将政策视为更详细的一方。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该应用为闭源,因此这些说法均无法通过代码核查,PromptQuorum 也未审计其网络流量。处理机密数据的人,或为孩子设置儿童模式的人,应在自己的设备上核实其行为。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**想要一个无需云账号就能记住自己的手机助手的人。** Agent Memory 存储在本地,且可编辑。',
          '**想要面向孩子的离线聊天的家长。** 儿童模式结合了 PIN、过滤器和锁定的模型,但其效果未经验证。',
          '**想要私密地查询自己的 PDF 和照片的人。** 已包含文档和图片提问。',
          '**喜欢自带模型的用户。** GGUF 导入和两个引擎适合已经有喜爱模型的人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际使用性能。** PromptQuorum 没有运行该应用,因此速度、耗电、回答质量以及儿童模式的真实效果均未评估。',
          '**源代码与许可证。** 该应用为闭源;反馈代码仓库仅包含 README 和问题追踪器。',
          '**内购与追踪。** 应用商店文字与隐私政策不一致,详见隐私部分。',
          '**Android 要求。** 所读取的 Google Play 文字未显示最低 Android 版本;iOS 最低版本为 16.4。',
          '**口碑记录。** 该应用上线约七个月,Google Play 下载量 1K+,App Store 暂无评分;来源未给出任何支持承诺。',
          '**不适合需要超大模型的用户。** 页面称下载量为 0.3 至 4 GB,因此更重的工作应放在电脑上进行。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源离线聊天,支持设备端文档问答和基准测试',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源设备端聊天客户端,自带模型库',
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
        note: '竞品信息变化频繁;请在各应用自己的页面上确认其当前价格、许可证和平台。这四款应用中,MemoryAI 是唯一闭源的。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'MemoryAI 是谁开发的?',
            a: 'Alessandro Facchini,意大利独立开发者,以 Facchinits 名义发布。隐私政策将 Facchinits 列为数据控制者。',
          },
          {
            q: '我可以编辑 AI 记住的内容吗?',
            a: '可以。Agent Memory 为可选功能,以你自己的话存储在设备上,每一条都可以查看、编辑或删除。它需要一个嵌入模型才能工作。',
          },
          {
            q: '儿童模式是如何工作的?',
            a: '家长设置 PIN;之后应用会锁定当前模型,在不当词语到达 AI 之前将其过滤,并添加安全提示词。家长解锁可临时打开设置,而不会结束该模式。',
          },
          {
            q: '我可以使用自己的模型吗?',
            a: '可以。你可以从 Hugging Face 导入兼容的 GGUF 文件,并在 llama.cpp 引擎上运行;Gemma 系列模型可在 LiteRT 引擎上运行。在儿童模式下运行未经验证的导入模型之前,应用会发出警告。',
          },
          {
            q: '它能在 Mac 上使用吗?',
            a: 'App Store 列出了搭载 Apple M1 或更新芯片的 Mac,但将该应用标注为“为 iPhone 设计。未针对 macOS 验证”,并且没有单独的桌面版。',
          },
          {
            q: '在哪里报告问题?',
            a: '可在开发者位于 GitHub 的公开[反馈代码仓库](https://github.com/alessandrofacchini/memoryai-feedback/issues)中提交,或通过 Google Play 页面上的支持邮箱联系。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'MemoryAI 是一款免费的离线手机聊天应用,在设备上保存用户的可编辑记忆,并提供带 PIN 锁的儿童模式,同时支持文档和图片提问、免动手语音以及两个推理引擎。它的更新也很频繁,在本评测核实的前一天还有一次发布。另一方面,它是闭源的、上线时间短、影响范围小、只能运行约 0.3 至 4 GB 的模型,并且其应用商店文字与隐私政策在内购和追踪方面不一致,因此无法通过代码核查其隐私说法。它适合想要这些特定功能并能接受一款年轻的闭源应用的读者;想要可审计代码的读者可以比较 [Private Mind](/zh/power-local-llm/private-mind-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 MemoryAI](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — 价格、版本历史、系统要求、隐私标签和描述,核实于 2026 年 10 月 19 日。',
          '[Google Play 上的 MemoryAI](https://play.google.com/store/apps/details?id=com.ts.memoryai) — 描述、下载量、数据安全部分和最后更新日期,核实于 2026 年 10 月 19 日。',
          '[MemoryAI 网站与隐私政策](https://alessandrofacchini.github.io/memoryai-privacy/) — 数据处理、网络使用、权限和第三方服务,政策最后更新于 2026 年 6 月 30 日。',
          '[GitHub 上的 memoryai-feedback](https://github.com/alessandrofacchini/memoryai-feedback) — 开发者的公开问题追踪器。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的免费、MIT 许可的离线聊天应用。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[Off Grid 评测](/zh/power-local-llm/off-grid-ai-review) — 覆盖手机和桌面的开源离线 AI 套件。',
          '[Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google 的开源设备端 AI 应用。',
          '[2026 年 Android 最佳本地大模型应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用盘点。',
          '[2026 年 iPhone 最佳本地大模型应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iPhone 应用盘点。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/memoryai-review-hero-ko.webp',
    title: 'MemoryAI 리뷰: iPhone·Android용 무료 오프라인 AI 채팅 앱',
    seoTitle: 'MemoryAI 리뷰: 무료 오프라인 AI 채팅 앱',
    intro:
      'MemoryAI는 이탈리아의 독립 개발자 Alessandro Facchini(Facchinits라는 이름으로 활동)가 만든 iPhone·Android용 무료 채팅 앱입니다. llama.cpp와 Google의 LiteRT라는 두 엔진으로 오픈 웨이트 언어 모델을 휴대폰에서 실행하며, 문서 질문, 선택형 편집 가능 Agent Memory(에이전트 메모리), 핸즈프리 음성 모드, PIN으로 잠그는 키즈 모드를 더했습니다. 소스 코드는 공개되어 있지 않고 출시된 지 얼마 되지 않았으며, App Store 첫 출시일은 2026년 3월 30일입니다. 이 리뷰는 2026년 10월 19일에 확인한 App Store·Google Play 게재 정보, 개발자의 웹사이트와 개인정보 처리방침, 공개 피드백 저장소를 근거로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'MemoryAI 리뷰: 문서 Q&A, 편집 가능한 Agent Memory, 음성 모드, 키즈 모드를 갖춘 iPhone·Android용 무료 비공개 소스 오프라인 AI 앱. 개인정보와 한계.',
    twitterDescription:
      'MemoryAI 리뷰: 문서 Q&A, 편집 가능한 온디바이스 메모리, 핸즈프리 음성, PIN으로 잠그는 키즈 모드를 갖춘 iPhone·Android용 무료 비공개 소스 오프라인 AI 채팅 앱. 스토어 게재 정보와 개인정보 처리방침의 내용을 다룹니다.',
    audience:
      '기기에서 언어 모델을 실행하는 무료 채팅 앱을 찾는 iPhone·Android 이용자로, 무엇이 오프라인에 머무는지, 무엇을 외부로 보내는지, 출처가 무엇을 확인해 주지 않는지 알아야 하는 분들.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'MemoryAI 리뷰',
    targetKeywords: [
      'memoryai 앱 리뷰',
      'memoryai 오프라인 프라이빗 ai',
      '오프라인 ai 채팅 앱 아이폰 안드로이드',
      '온디바이스 ai 에이전트 메모리',
      'ai 키즈 모드 오프라인 앱',
      'gguf 가져오기 모바일 앱',
      'memoryai private mind 비교',
    ],
    current_models_mentioned: ['Gemma', 'Llama', 'Phi', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'Android', 'Apple M1'],
    leadAnswerBlock:
      '**MemoryAI(2026년 10월 19일 기준 iOS 버전 1.0.52)는 계정 없이 iPhone과 Android에서 오픈 웨이트 언어 모델을 실행하는 무료 비공개 소스 채팅 앱으로, 편집 가능한 온디바이스 메모리와 PIN으로 잠그는 키즈 모드를 함께 제공합니다.** 모델은 Hugging Face에서 한 번 내려받은 뒤 오프라인으로 실행됩니다. 스토어 설명과 개인정보 처리방침은 분석과 결제에 관해 서로 완전히 일치하지 않으므로, "추적 없음"이라는 문구에 의존하기 전에 개인정보 항목을 읽어 보시기 바랍니다.',
    quickAnswerTop: {
      ko: {
        question: 'MemoryAI는 정말 오프라인으로 실행되며 무료입니까?',
        answer:
          '게재 정보에 따르면 핵심 기능은 그렇습니다. 모델을 한 번 내려받은 뒤에는 채팅, 문서 질문, 음성이 휴대폰에서 실행되며 계정과 광고가 없습니다. 다만 개인정보 처리방침에는 익명 분석 데이터와 오류 보고서가 외부로 전송되고 프리미엄 기능의 결제가 있을 수 있다고 적혀 있어, 이를 부인하는 스토어 설명과 다릅니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)와 [App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586)에서 무료.',
          'Gemma, Qwen, Llama, Phi, DeepSeek 같은 GGUF·LiteRT 모델로 채팅할 수 있으며, 모델 다운로드는 각각 0.3~4 GB.',
          '이용자가 보고, 편집하고, 삭제할 수 있는 선택형 Agent Memory와 문서·이미지 질문.',
          '부모 PIN, 콘텐츠 필터, 잠긴 모델을 갖춘 키즈 모드.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'MemoryAI란 무엇인가?', anchor: 'what-is-memoryai' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
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
            text: 'MemoryAI는 오픈 웨이트 언어 모델을 기기에서 실행하는 무료 비공개 소스 iPhone·Android 앱으로, 편집 가능한 Agent Memory, 문서 질문, 핸즈프리 음성, PIN으로 잠그는 키즈 모드를 더했습니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 모델을 한 번 내려받으면 계정 없이 채팅하고, 대화하고, 내 PDF에 대해 질문할 수 있습니다. 앱이 이용자에 관해 보관하는 선택형 메모리는 휴대폰에 저장되며, 직접 읽고 삭제할 수 있습니다.',
          },
        ],
        items: [
          '개발자: 이탈리아의 독립 개발자 Alessandro Facchini이며 Facchinits라는 이름으로 배포합니다. 그 외에 뒤에 있는 회사는 없고 공개된 소스 코드도 없습니다.',
          '유지보수: iOS 버전 기록에는 2026년 3월 30일부터 10월 18일까지 13번의 릴리스가 있고, Google Play에도 2026년 10월 18일 업데이트가 표시되므로 방치된 프로젝트 경고는 해당되지 않습니다.',
          '도달 범위: Google Play 다운로드는 1K+이고 App Store에는 아직 평점이 없어, 공개된 이력이 많지 않은 앱입니다.',
          '플랫폼: iPhone(iOS 16.4 이상)과 Android이며, App Store에는 Apple M1 이상 Mac도 표시되어 있으나 "macOS용으로 검증되지 않음"이라고 되어 있습니다.',
          '언어: 앱은 영어, 이탈리아어, 독일어, 프랑스어, 스페인어, 포르투갈어로 제공됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 App Store·Google Play 게재 정보, 개발자의 웹사이트와 개인정보 처리방침, 공개 피드백 저장소를 2026년 10월 19일에 확인한 내용을 근거로 합니다. PromptQuorum은 앱을 설치하거나 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-memoryai',
        title: 'MemoryAI란 무엇인가?',
        content: [
          '**MemoryAI는 클라우드 서비스를 호출하는 대신 오픈 웨이트 언어 모델을 로컬에서 실행하는 모바일 채팅 앱입니다.** 게재 정보에 따르면 모델은 앱에 포함되어 있지 않으며, 앱 내 목록에서 고르거나 Hugging Face의 호환 GGUF 파일을 가져와야 하고, 처음 실행할 때는 내려받기 위해 네트워크 연결이 필요합니다. 추론 엔진은 두 가지로, GGUF 모델에는 llama.cpp, Gemma 계열 모델에는 Google의 MediaPipe/LiteRT를 제공합니다.',
          'App Store 게재 제목은 미국·일본·한국 스토어에서 "MemoryAI: Offline Private AI", 독일에서 "MemoryAI: Private Offline-KI", 브라질에서 "MemoryAI: a IA que lembra"이며, Google Play 패키지는 com.ts.memoryai입니다. 이 앱의 "Agent Memory"는 별도 제품이 아니라 이 앱의 기능입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**MemoryAI는 두 모바일 스토어에서 설치하며, 데스크톱 빌드, 소스 코드, 사이드로드 파일은 제공되지 않습니다.** 아래 두 스토어 링크는 개발자의 사이트와 게재 정보가 사용하는 것입니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'iPhone',
            '받는 곳': '[App Store](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) (iOS 16.4 이상, 198.7 MB)',
          },
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.ts.memoryai)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[alessandrofacchini.github.io/memoryai-privacy](https://alessandrofacchini.github.io/memoryai-privacy/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[같은 페이지](https://alessandrofacchini.github.io/memoryai-privacy/) (영어, 이탈리아어판 링크 있음, 2026년 6월 30일 개정)',
          },
          {
            '플랫폼': '버그 신고',
            '받는 곳': '[GitHub 이슈](https://github.com/alessandrofacchini/memoryai-feedback/issues) (피드백 전용, 소스 코드 없음)',
          },
        ],
        note: '확인한 버전은 iOS 1.0.52이며 App Store 게재 정보 기준 2026년 10월 18일에 출시되었습니다. Google Play 페이지도 2026년 10월 18일에 업데이트되었고 페이지 데이터에는 빌드 1.0.54가 표시됩니다. 읽은 Google Play 설명에는 최소 Android 버전이 나와 있지 않습니다.',
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
            whyItMatters: 'App Store 또는 Google Play에서 MemoryAI를 내려받습니다. 게재 정보에는 계정이 필요 없으며 휴대폰 RAM이 4 GB 이상이어야 한다고 되어 있습니다.',
          },
          {
            title: 'Wi-Fi에서 모델 내려받기',
            whyItMatters: '게재 정보에 따르면 모델은 각각 0.3~4 GB입니다. 2026년 10월 18일 업데이트 노트에는 처음 추천되는 모델이 이제 이용자의 휴대폰에서 잘 실행되는 가장 가벼운 모델이며, 화면을 벗어나도 다운로드가 계속된다고 적혀 있습니다.',
          },
          {
            title: '채팅 또는 대화',
            whyItMatters: '입력하거나 받아쓰기를 하거나, 앱이 듣고 답하고 그 답을 소리 내어 읽어 주는 연속 음성 모드를 켜서 터치 없이 사용합니다.',
          },
          {
            title: '문서나 이미지 추가',
            whyItMatters: 'PDF, TXT, Markdown 파일을 가져오거나 사진을 골라 그에 대해 질문합니다.',
          },
          {
            title: '필요하면 Agent Memory 켜기',
            whyItMatters: '기본값은 꺼짐이며 임베딩 모델이 필요합니다. 켜면 저장된 내용을 열어 보고, 편집하고, 삭제할 수 있습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 App Store·Google Play 설명 또는 개인정보 처리방침에서 가져온 것이며, 어느 것도 독립적으로 테스트되지 않았습니다.**',
        ],
        items: [
          '**두 엔진과 사용자 지정 모델.** 모델별로 llama.cpp 또는 Google의 MediaPipe/LiteRT를 선택하고, Hugging Face의 호환 GGUF 파일을 가져오며, 제한 접근 모델용 Hugging Face 토큰을 저장하고, 다운로드를 일시 중지·재개하며, 모델별로 temperature, top-k, top-p, 최대 토큰 수를 조절할 수 있습니다.',
          '**Agent Memory.** 선택 사항이며, AI가 이용자가 말한 내용을 이용자 자신의 표현으로 기기에 저장하고, 각 메모리를 보고 편집하거나 삭제할 수 있습니다. 1.0.52 노트에는 "이메일 써 줘" 같은 요청은 더 이상 메모리로 저장되지 않는다고 되어 있습니다.',
          '**문서와 이미지.** PDF, TXT, Markdown 파일에 대한 질문, 비전 모델을 이용한 이미지 분석(여러 장 동시 가능), Google ML Kit를 통한 사진 속 텍스트 인식.',
          '**음성.** 온디바이스 음성 입력, 텍스트 음성 변환, 연속 핸즈프리 모드.',
          '**키즈 모드.** 부모 PIN, 부적절한 단어가 모델에 닿기 전에 막는 필터, 잠긴 모델, 안전 프롬프트, 검증되지 않은 가져온 모델에 대한 경고, 모드를 끝내지 않고 설정을 여는 부모 잠금 해제.',
          '**일상 도구.** 채팅 검색, 페르소나 템플릿 20개, 초당 토큰 수로 보여 주는 속도 벤치마크, 컨텍스트 윈도우 표시, 불러온 모델이 GPU와 CPU 중 어디서 실행되는지 보여 주는 화면, Android의 Google Drive 또는 iPhone의 iCloud 백업.',
        ],
        note: '두 스토어 설명은 거의 같지만 동일하지는 않습니다. 예를 들어 iOS 설명에는 iCloud 백업이, Android 설명에는 Google Drive가 언급됩니다. 최종 기준은 설치된 빌드입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**채팅, 문서, 메모리는 기본적으로 기기에 머물며, 개발자는 이 앱에 AI 서버가 없고 채팅 텍스트를 보내지 않는다고 밝힙니다.** Google Play 데이터 보안 항목에는 제3자와 공유하는 데이터가 없다고 되어 있고, 앱 정보와 성능, 기기 또는 기타 ID가 수집될 수 있으며 전송 중 암호화된다고 표시되어 있습니다. App Store 개인정보 보호 라벨에는 분석 목적으로 검색 기록, 기기 ID, 제품 상호작용이, 앱 기능 목적으로 기기 ID, 오류 및 성능 데이터가 나열되어 있으며 모두 이용자와 연결되지 않음으로 표시되어 있습니다.',
          '[개인정보 처리방침](https://alessandrofacchini.github.io/memoryai-privacy/)은 휴대폰 밖으로 나가는 것을 명시합니다. TelemetryDeck로 보내는 익명 사용 이벤트, Sentry로 보내는 오류 보고서, OneSignal을 통한 선택형 푸시 알림, Hugging Face에서의 모델 내려받기, 이용자 본인의 Google Drive 또는 iCloud로의 선택형 백업입니다. 또한 로컬 데이터는 앱이 암호화하지 않고 기기 자체의 보호에 의존하며, 대화는 이용자가 내보낼 때만 앱 밖으로 나간다고 밝힙니다.',
          '스토어 설명에는 "앱 내 구입 없음"과 "추적 없음"이라고 되어 있지만, 처리방침에는 앱이 프리미엄 기능에 대한 앱 내 구입을 제공한다고 되어 있고 위의 분석 항목이 나열되어 있습니다. 어느 쪽이 현재 빌드와 일치하는지는 출처만으로 분명하지 않았으므로, 처리방침을 더 자세한 쪽으로 보시기 바랍니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 앱은 소스 코드가 공개되어 있지 않아 위 주장은 어느 것도 코드에서 확인할 수 없으며, PromptQuorum은 네트워크 트래픽을 감사하지 않았습니다. 기밀 데이터를 다루는 분이나 자녀를 위해 키즈 모드를 설정하는 분은 본인 기기에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**클라우드 계정 없이 자신을 기억하는 휴대폰 어시스턴트를 원하는 분.** Agent Memory는 로컬에 저장되며 편집할 수 있습니다.',
          '**아이가 쓸 오프라인 채팅을 원하는 부모.** 키즈 모드는 PIN, 필터, 잠긴 모델을 결합하지만 그 효과는 검증되지 않았습니다.',
          '**자신의 PDF와 사진에 대해 비공개로 질문하고 싶은 분.** 문서·이미지 질문이 포함되어 있습니다.',
          '**자신의 모델을 가져와 쓰고 싶은 이용자.** GGUF 가져오기와 두 엔진은 이미 좋아하는 모델이 있는 분께 맞습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**직접 사용해 본 성능.** PromptQuorum은 앱을 실행하지 않았으므로 속도, 배터리 사용량, 답변 품질, 키즈 모드의 실제 강도는 평가하지 않았습니다.',
          '**소스 코드와 라이선스.** 앱은 소스 코드가 공개되어 있지 않으며, 피드백 저장소에는 README와 이슈 트래커만 있습니다.',
          '**결제와 추적.** 개인정보 항목에서 설명했듯이 스토어 설명과 개인정보 처리방침이 서로 다릅니다.',
          '**Android 요구 사항.** 읽은 Google Play 설명에는 최소 Android 버전이 나와 있지 않으며, iOS 최소 버전은 16.4입니다.',
          '**이력.** 앱이 나온 지 약 7개월이며, Google Play 다운로드는 1K+이고 App Store 평점은 아직 없습니다. 출처에는 지원 약속이 나와 있지 않습니다.',
          '**매우 큰 모델이 필요한 분께는 맞지 않습니다.** 게재 정보상 다운로드는 0.3~4 GB이므로, 더 무거운 작업은 컴퓨터에서 하는 편이 맞습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '온디바이스 문서 Q&A와 벤치마크를 갖춘 오픈 소스 오프라인 채팅',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '자체 모델 라이브러리를 갖춘 오픈 소스 온디바이스 채팅 클라이언트',
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
        note: '경쟁 앱의 세부 정보는 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하시기 바랍니다. 이 네 앱 중 MemoryAI만 소스 코드가 공개되어 있지 않습니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'MemoryAI는 누가 만들었나요?',
            a: 'Facchinits라는 이름으로 배포하는 이탈리아의 독립 개발자 Alessandro Facchini입니다. 개인정보 처리방침은 Facchinits를 개인정보 처리자(data controller)로 명시합니다.',
          },
          {
            q: 'AI가 기억하는 내용을 편집할 수 있나요?',
            a: '예. Agent Memory는 선택 사항이며 이용자 자신의 표현으로 기기에 저장되고, 각 항목을 보고, 편집하고, 삭제할 수 있습니다. 작동하려면 임베딩 모델이 필요합니다.',
          },
          {
            q: '키즈 모드는 어떻게 작동하나요?',
            a: '부모가 PIN을 설정하면 앱이 사용 중인 모델을 잠그고, 부적절한 단어가 AI에 닿기 전에 걸러내며, 안전 프롬프트를 추가합니다. 부모 잠금 해제를 하면 모드를 끝내지 않고 설정을 잠시 열 수 있습니다.',
          },
          {
            q: '내 모델을 쓸 수 있나요?',
            a: '예. Hugging Face의 호환 GGUF 파일을 가져와 llama.cpp 엔진에서 실행할 수 있고, Gemma 계열 모델은 LiteRT 엔진에서 실행할 수 있습니다. 검증되지 않은 가져온 모델을 키즈 모드에서 실행하기 전에는 앱이 경고합니다.',
          },
          {
            q: 'Mac에서도 작동하나요?',
            a: 'App Store에는 Apple M1 이상 Mac이 표시되어 있지만 앱은 "iPhone용으로 설계됨. macOS용으로 검증되지 않음"으로 표시되어 있고, 별도의 데스크톱 빌드는 없습니다.',
          },
          {
            q: '문제는 어디에 신고하나요?',
            a: 'GitHub에 있는 개발자의 공개 [피드백 저장소](https://github.com/alessandrofacchini/memoryai-feedback/issues)나 Google Play 게재 정보에 있는 지원 이메일로 신고하시면 됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'MemoryAI는 이용자에 관한 편집 가능한 메모리를 기기에 보관하고 PIN으로 잠그는 키즈 모드를 제공하는 무료 오프라인 모바일 채팅 앱이며, 문서·이미지 질문, 핸즈프리 음성, 두 가지 추론 엔진도 갖추고 있습니다. 또한 업데이트가 잦아서, 이 리뷰를 확인하기 하루 전에도 릴리스가 있었습니다. 반면 소스 코드가 공개되어 있지 않고, 출시된 지 얼마 되지 않았으며, 도달 범위가 작고, 모델이 대략 0.3~4 GB로 제한되며, 스토어 설명과 개인정보 처리방침이 결제와 추적에 관해 서로 다르므로 개인정보 주장을 코드에서 확인할 수 없습니다. 이 특정 기능들을 원하고 젊은 비공개 소스 앱을 감수할 수 있는 분께 맞으며, 검증 가능한 코드를 원하는 분은 [Private Mind](/ko/power-local-llm/private-mind-review)나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 비교해 보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 MemoryAI](https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586) — 가격, 버전 기록, 요구 사항, 개인정보 보호 라벨, 설명. 2026년 10월 19일 확인.',
          '[Google Play의 MemoryAI](https://play.google.com/store/apps/details?id=com.ts.memoryai) — 설명, 다운로드 수, 데이터 보안 항목, 마지막 업데이트 날짜. 2026년 10월 19일 확인.',
          '[MemoryAI 웹사이트와 개인정보 처리방침](https://alessandrofacchini.github.io/memoryai-privacy/) — 데이터 처리, 네트워크 사용, 권한, 제3자 서비스. 처리방침은 2026년 6월 30일 개정.',
          '[GitHub의 memoryai-feedback](https://github.com/alessandrofacchini/memoryai-feedback) — 개발자의 공개 이슈 트래커.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone·Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS·Android용 무료 오픈 소스 온디바이스 채팅 클라이언트.',
          '[Off Grid 리뷰](/ko/power-local-llm/off-grid-ai-review) — 휴대폰과 데스크톱용 오픈 소스 오프라인 AI 모음.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 오픈 소스 온디바이스 AI 앱.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 전반을 다룬 종합 정리.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 전반을 다룬 종합 정리.',
        ],
      },
    },
  },
}
