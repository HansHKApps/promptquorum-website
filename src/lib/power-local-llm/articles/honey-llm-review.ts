// Honey LLM Review: Offline AI Chat and Document Q&A for Android
// Slug: honey-llm-review
// Companion to: private-mind-review, toolneuron-review, pocketpal-ai-review, best-local-llm-apps-android-2026
// Sources: the Google Play listing (com.ronbee.honeyllm) and the privacy policy it links, checked 2026-10-16 — no hands-on testing.
// Version 3.5.0 is the app version shown in the Play listing data (tile pqReview.version must match).
// Prices: Play shows one in-app purchase price per storefront (US $6.99, DE 6,99 EUR, ES/FR 7,49 EUR, JP 1,220 JPY, BR R$ 9,99,
// KR 12,000 KRW, SA 29.99 SAR, CN none); each locale's Get It row shows its own storefront, the FAQ lists them all. Never FX-converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/honey-llm-review-hero-en.webp',
    title: 'Honey LLM Review: Offline AI Chat and Document Q&A for Android',
    seoTitle: 'Honey LLM Review: Offline AI Chat and Docs (Android)',
    intro: 'Honey LLM - Offline AI is an Android app published on Google Play under the developer name [Ron.Bee](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) that chats with an AI model stored on the phone and answers questions about PDF, DOCX, TXT and Markdown files. It has been on Google Play since March 2026 and is at version 3.5.0. This review is based on the Google Play listing and the app\'s privacy policy, checked on 16 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'Honey LLM review: an Android app for offline AI chat and document Q&A with a free demo and a one-time unlock. Source not published, claims not yet tested.',
    twitterDescription: 'Honey LLM review: Android app for offline AI chat and questions about your own files. Free demo, one-time unlock, source not published.',
    audience: 'Android users who want an offline AI chat and document Q&A app and need to know what the sources confirm, what only the developer claims, and what the unlock costs.',
    readTime: '5 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Honey LLM review',
    targetKeywords: [
      'honey llm review',
      'honey llm android',
      'honey llm offline ai',
      'offline ai chat android',
      'chat with pdf offline android',
      'on-device document q&a android',
      'com.ronbee.honeyllm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'Android',
    ],
    leadAnswerBlock: '**Honey LLM - Offline AI is an Android app that, per its developer, runs an AI model on the phone for private chat and for questions about your own documents.** The source code is not published, so every privacy and offline claim rests on the store listing and a short privacy policy.',
    quickAnswerTop: {
      en: {
        question: 'Is Honey LLM free, and does it work offline?',
        answer: 'It has a free local demo, and the listing describes a one-time in-app purchase for unlimited use, with no subscription. Per the developer, chat and document processing run on the phone without an internet connection once an AI model has been downloaded.',
        bullets: [
          'Beginner mode checks the phone and recommends a compatible model; Advanced mode lets you choose the model and tune response behavior.',
          'Answers questions about your own documents and shows supporting page or section references.',
          'Android only, through [Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm); no iPhone, desktop or web version is listed.',
          'Version 3.5.0, last updated on 1 October 2026 (state of the listing on 16 October 2026).',
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
        label: 'What Is Honey LLM?',
        anchor: 'what-is-honey-llm',
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
            text: 'Honey LLM is an Android app that uses an on-device AI model for private chat and document Q&A, with a free trial and one paid unlock.',
          },
          {
            type: 'plain-terms',
            text: 'You install the app, download an AI model to the phone once, and then chat or ask about your own files; according to the developer, the text stays on the device.',
          },
        ],
        items: [
          'Publisher: listed on Google Play as Ron.Bee; no company, product website or source repository was found.',
          'Track record: released on 13 March 2026, with 10K+ downloads and a 3.7 average rating from 31 ratings on Google Play.',
          'Privacy declaration: the Data safety section states that no data is collected and none is shared with third parties.',
          'Requirements: Android 8.0 or later; the AI model is a separate download inside the app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Everything here is taken from the listing and the privacy policy; PromptQuorum has not tested the app, so offline operation, answer quality and speed are unconfirmed.',
          },
        ],
      },
      overview: {
        id: 'what-is-honey-llm',
        title: 'What Is Honey LLM?',
        content: [
          '**Honey LLM - Offline AI is an Android app that combines an AI chat, document question answering and an encrypted file Vault around a model stored on the phone.** According to its [Google Play listing](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm), conversations and supported documents are processed on the device instead of being sent to a cloud AI service.',
          'The app goes by slightly different names: the Play title is "Honey LLM - Offline AI", the description calls it "Honey", and the privacy policy calls it "HoneyLLM Offline AI". All three refer to the package com.ronbee.honeyllm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Install it from Google Play; the AI model is a separate download inside the app.**',
        ],
        columns: [
          'Platform',
          'Where to get it',
        ],
        rows: [
          {
            Platform: 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)',
          },
          {
            Platform: 'Price',
            'Where to get it': 'Free demo; one-time in-app purchase of $6.99 (US store)',
          },
          {
            Platform: 'Website',
            'Where to get it': 'None found',
          },
          {
            Platform: 'Privacy policy',
            'Where to get it': '[Privacy policy](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy)',
          },
          {
            Platform: 'Source code',
            'Where to get it': 'Not published',
          },
        ],
        note: 'No dedicated product website was found: the Play listing links only the privacy policy, and the developer\'s GitHub profile lists no site or repository for the app. Version as verified on 16 October 2026: 3.5.0, last updated on 1 October 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description; none has been independently tested.**',
        ],
        items: [
          '**Beginner and Advanced modes.** Beginner mode evaluates the phone and recommends a compatible model, and starts the chat at once if that model is already installed; Advanced mode offers several local models and controls for response style, response length, temperature and Top P.',
          '**Document questions.** PDF, DOCX, TXT and Markdown files can be summarized or questioned, with follow-up questions and supporting page or section references; the app is designed to say so when the answer is not in the selected documents.',
          '**Encrypted Vault.** Files can be imported into app-private storage described as AES-256-GCM encrypted with Android Keystore, checked for integrity, exported or deleted, and backed up to an encrypted .hvault file.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Handling',
        content: [
          '**Google Play\'s Data safety section declares "No data collected" and "No data shared with third parties".** The developer\'s privacy policy, last updated in February 2026, says the app does not collect, store or transmit personal data to external servers and requests network access only for optional features such as downloading AI models or app updates.',
          '**Some steps still need the internet, according to the Play description:** downloading models, Google Play purchases, restoring purchases and app updates. Generating answers and processing documents are described as local.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the developer\'s declarations, not audit results, and the source code is not published. The privacy policy does not mention documents, the Vault or purchases, so it does not say how files are handled. PromptQuorum has not inspected the app\'s network traffic.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Source code and license.** No public repository or license text was found, so the privacy and offline claims cannot be checked against code.',
          '**Models and engine.** The listing refers to a local model catalog but names no model, download size or inference engine, so answer quality, speed and the phone hardware needed are unknown.',
          '**Hands-on behavior.** PromptQuorum did not run the app, so page-reference accuracy, battery use and the limits of the free demo are unknown.',
          '**Vault encryption.** The AES-256-GCM description is the developer\'s own and cannot be confirmed without published code.',
          '**Independent feedback.** No third-party reviews or discussion of the app were found beyond its Google Play ratings.',
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
            App: '[Private Mind](/power-local-llm/private-mind-review)',
            Platforms: 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source offline chat with on-device document Q&A and built-in benchmarks',
          },
          {
            App: '[ToolNeuron](/power-local-llm/toolneuron-review)',
            Platforms: 'Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source Android app with encrypted storage, document RAG and voice',
          },
          {
            App: '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            Platforms: 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Free open-source local LLM client for iPhone and Android',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much does the unlock cost in other countries?',
            a: 'On 16 October 2026 Google Play listed one in-app purchase price per storefront: $6.99 (US), 6,99 € (Germany), 7,49 € (Spain and France), ¥1,220 (Japan), R$ 9,99 (Brazil), ₩12,000 (South Korea) and 29.99 SAR (Saudi Arabia); the Chinese storefront showed no price. Prices can change at any time.',
          },
          {
            q: 'Can it read scanned PDFs?',
            a: 'Not necessarily: the listing warns that image-only scans may need OCR before Honey can read their text.',
          },
          {
            q: 'Can I ask questions about files in the Vault?',
            a: 'Yes for supported readable documents, per the listing. It adds that the Vault stays local to the device; the version 3.5.0 notes mention the encrypted .hvault backup and restore.',
          },
          {
            q: 'Does it need an account?',
            a: 'No: the listing states that no Honey account or AI subscription is required. A Google account on the phone is needed for the Play purchase and for restoring it.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Honey LLM - Offline AI offers private chat and document questions on an Android phone with a free demo, a one-time unlock and no account. Its claims cannot yet be checked: no source code is published, the model and engine are not named, and the short privacy policy does not cover documents or the Vault. It suits Android users who are happy to try the free demo before paying; anyone who needs published code should compare [Private Mind](/power-local-llm/private-mind-review) or [ToolNeuron](/power-local-llm/toolneuron-review), both MIT-licensed.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Honey LLM - Offline AI on Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) — description, release notes, version, Data safety section and price, checked 16 October 2026.',
          '[Privacy policy](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy) — data-handling statements, last updated February 2026, hosted on the developer\'s GitHub account.',
          '[Ron-Bee on GitHub](https://github.com/Ron-Bee) — the developer\'s public profile, checked 16 October 2026; it lists no product website or repository for this app.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Private Mind Review](/power-local-llm/private-mind-review) — an open-source offline chat app with on-device document Q&A.',
          '[ToolNeuron Review](/power-local-llm/toolneuron-review) — an open-source Android app with encrypted storage and document RAG.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free local LLM client for iOS and Android.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Honey LLM Review: Offline AI Chat and Document Q&A for Android',
      description: 'Honey LLM review: an Android app for offline AI chat and document Q&A with a free demo and a one-time unlock. What the Google Play listing and privacy policy confirm, and what they do not.',
      url: 'https://www.promptquorum.com/power-local-llm/honey-llm-review',
      inLanguage: 'en',
      datePublished: '2026-10-16',
      dateModified: '2026-10-16',
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
        audienceType: 'Android users evaluating an offline AI chat and document Q&A app',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Honey LLM',
        },
        {
          '@type': 'Thing',
          name: 'On-device AI',
        },
        {
          '@type': 'Thing',
          name: 'Document Q&A',
        },
        {
          '@type': 'Thing',
          name: 'Local LLM',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/honey-llm-review',
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
          name: 'Honey LLM Review',
          item: 'https://www.promptquorum.com/power-local-llm/honey-llm-review',
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-16',
    dateModified: '2026-10-16',
    next_refresh_due: '2027-04-16',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/honey-llm-review-hero-de.webp',
    title: 'Honey LLM im Test: Offline-KI-Chat und Dokumentenfragen für Android',
    seoTitle: 'Honey LLM im Test: Offline-KI-Chat und Dokumente (Android)',
    intro: 'Honey LLM - Offline AI ist eine Android-App, die bei Google Play unter dem Entwicklernamen [Ron.Bee](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) veröffentlicht wird. Sie chattet mit einem KI-Modell, das auf dem Smartphone gespeichert ist, und beantwortet Fragen zu PDF-, DOCX-, TXT- und Markdown-Dateien. Sie ist seit März 2026 bei Google Play und liegt in Version 3.5.0 vor. Dieser Test beruht auf dem Google-Play-Eintrag und der Datenschutzerklärung der App, geprüft am 16. Oktober 2026; PromptQuorum hat die App nicht selbst ausprobiert.',
    metaDescription: 'Honey LLM im Test: Android-App für Offline-KI-Chat und Dokumentenfragen, kostenlose Demo und einmalige Freischaltung. Quellcode nicht veröffentlicht.',
    twitterDescription: 'Honey LLM im Test: Android-App für Offline-KI-Chat und Fragen zu PDF-, DOCX-, TXT- und Markdown-Dateien. Kostenlose Demo, einmalige Freischaltung, Quellcode nicht veröffentlicht.',
    audience: 'Android-Nutzer, die eine Offline-KI-App für Chat und Dokumentenfragen suchen und wissen möchten, was die Quellen bestätigen, was nur der Entwickler behauptet und was die Freischaltung kostet.',
    readTime: '5 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Honey LLM Test',
    targetKeywords: [
      'honey llm test',
      'honey llm android',
      'honey llm offline ki',
      'offline ki chat android',
      'pdf offline chatten android',
      'dokumentenfragen auf dem gerät android',
      'com.ronbee.honeyllm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'Android',
    ],
    leadAnswerBlock: '**Honey LLM - Offline AI ist laut Entwickler eine Android-App, die ein KI-Modell auf dem Smartphone für privaten Chat und für Fragen zu eigenen Dokumenten ausführt.** Sie bietet eine kostenlose Demo und eine einmalige kostenpflichtige Freischaltung; der Quellcode ist nicht veröffentlicht, sodass jede Aussage zu Datenschutz und Offline-Betrieb auf dem Google-Play-Eintrag und einer kurzen Datenschutzerklärung beruht.',
    quickAnswerTop: {
      de: {
        question: 'Ist Honey LLM kostenlos, und funktioniert es offline?',
        answer: 'Es gibt eine kostenlose lokale Demo, und der Eintrag beschreibt einen einmaligen In-App-Kauf für unbegrenzte Nutzung ohne Abonnement. Laut Entwickler laufen Chat und Dokumentenverarbeitung ohne Internetverbindung auf dem Smartphone, sobald ein KI-Modell heruntergeladen wurde.',
        bullets: [
          'Der Einsteigermodus prüft das Smartphone und empfiehlt ein passendes Modell; im erweiterten Modus wählen Sie das Modell selbst und passen das Antwortverhalten an.',
          'Beantwortet Fragen zu PDF-, DOCX-, TXT- und Markdown-Dateien und zeigt Verweise auf die zugrunde liegenden Seiten oder Abschnitte.',
          'Nur für Android über [Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm); eine Version für iPhone, Desktop oder Web ist nicht aufgeführt.',
          'Version 3.5.0, zuletzt am 1. Oktober 2026 aktualisiert (Stand des Eintrags am 16. Oktober 2026).',
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
        label: 'Was ist Honey LLM?',
        anchor: 'what-is-honey-llm',
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
            text: 'Honey LLM ist eine Android-App mit kostenloser Demo und einmaliger kostenpflichtiger Freischaltung, die ein KI-Modell auf dem Gerät für privaten Chat und Dokumentenfragen nutzt; der Quellcode des Entwicklers ist nicht veröffentlicht.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App, laden einmal ein KI-Modell auf das Smartphone und chatten dann oder fragen zu eigenen Dateien; laut Entwickler bleibt der Text auf dem Gerät.',
          },
        ],
        items: [
          'Herausgeber: bei Google Play als Ron.Bee geführt; weder ein Unternehmen noch eine Produktwebsite oder ein Quellcode-Repository wurde gefunden.',
          'Bisherige Bilanz: am 13. März 2026 veröffentlicht, mit mehr als 10.000 Downloads und einer durchschnittlichen Bewertung von 3,7 aus 31 Bewertungen bei Google Play.',
          'Datenschutzangabe: Der Abschnitt „Datensicherheit“ erklärt, dass keine Daten erhoben und keine an Dritte weitergegeben werden.',
          'Voraussetzungen: Android 8.0 oder neuer; das KI-Modell ist ein separater Download innerhalb der App.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Alles hier stammt aus dem Google-Play-Eintrag und der Datenschutzerklärung des Entwicklers; PromptQuorum hat die App nicht getestet, daher sind Offline-Betrieb, Antwortqualität und Geschwindigkeit nicht bestätigt.',
          },
        ],
      },
      overview: {
        id: 'what-is-honey-llm',
        title: 'Was ist Honey LLM?',
        content: [
          '**Honey LLM - Offline AI ist eine Android-App, die KI-Chat, Dokumentenfragen und einen verschlüsselten Datei-Tresor rund um ein auf dem Smartphone gespeichertes Modell verbindet.** Laut [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) werden Unterhaltungen und unterstützte Dokumente auf dem Gerät verarbeitet, statt an einen Cloud-KI-Dienst gesendet zu werden.',
          'Die App trägt leicht abweichende Namen: Der Play-Titel lautet „Honey LLM - Offline AI“, die Beschreibung nennt sie „Honey“, und die Datenschutzerklärung nennt sie „HoneyLLM Offline AI“. Alle drei meinen das Paket com.ronbee.honeyllm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Installieren Sie die App über Google Play; das KI-Modell ist ein separater Download innerhalb der App.**',
        ],
        columns: [
          'Plattform',
          'Bezugsquelle',
        ],
        rows: [
          {
            Plattform: 'Android',
            Bezugsquelle: '[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)',
          },
          {
            Plattform: 'Preis',
            Bezugsquelle: 'Kostenlose Demo; einmaliger In-App-Kauf 6,99 € (deutscher Store)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: 'Keine gefunden',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy)',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: 'Nicht veröffentlicht',
          },
        ],
        note: 'Eine eigene Produktwebsite wurde nicht gefunden: Der Play-Eintrag verlinkt nur die Datenschutzerklärung, und das GitHub-Profil des Entwicklers nennt weder eine Website noch ein Repository zur App. Geprüfte Version am 16. Oktober 2026: 3.5.0, zuletzt am 1. Oktober 2026 aktualisiert.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Beschreibung bei Google Play; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Einsteiger- und erweiterter Modus.** Der Einsteigermodus bewertet das Smartphone und empfiehlt ein passendes Modell; ist es bereits installiert, startet der Chat sofort. Der erweiterte Modus bietet mehrere lokale Modelle sowie Einstellungen für Antwortstil, Antwortlänge, Temperatur und Top P.',
          '**Dokumentenfragen.** PDF-, DOCX-, TXT- und Markdown-Dateien lassen sich zusammenfassen oder befragen, mit Folgefragen und Verweisen auf Seiten oder Abschnitte; die App soll darauf hinweisen, wenn die Antwort nicht in den gewählten Dokumenten steht.',
          '**Verschlüsselter Tresor.** Dateien lassen sich in einen app-privaten Speicher importieren, der als mit AES-256-GCM über den Android Keystore verschlüsselt beschrieben wird, auf Integrität prüfen, exportieren oder löschen und in einer verschlüsselten .hvault-Datei sichern.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenverarbeitung',
        content: [
          '**Der Abschnitt „Datensicherheit“ bei Google Play erklärt „Keine Daten erhoben“ und „Keine Daten an Dritte weitergegeben“.** Die Datenschutzerklärung des Entwicklers, zuletzt im Februar 2026 aktualisiert, besagt, dass die App keine personenbezogenen Daten erhebt, speichert oder an externe Server überträgt und Netzwerkzugriff nur für optionale Funktionen wie das Herunterladen von KI-Modellen oder App-Updates anfordert.',
          '**Einige Schritte brauchen laut Play-Beschreibung weiterhin Internet:** das Herunterladen von Modellen, Käufe über Google Play, das Wiederherstellen von Käufen und App-Updates. Das Erzeugen von Antworten und die Verarbeitung von Dokumenten werden als lokal beschrieben.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Entwicklers, keine Prüfergebnisse, und der Quellcode ist nicht veröffentlicht. Die Datenschutzerklärung erwähnt weder Dokumente noch den Tresor oder Käufe und sagt daher nicht, wie Dateien behandelt werden. PromptQuorum hat den Netzwerkverkehr der App nicht untersucht.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was sich nicht überprüfen ließ',
        items: [
          '**Quellcode und Lizenz.** Es wurde weder ein öffentliches Repository noch ein Lizenztext gefunden, sodass sich die Aussagen zu Datenschutz und Offline-Betrieb nicht am Code prüfen lassen.',
          '**Modelle und Engine.** Der Eintrag verweist auf einen lokalen Modellkatalog, nennt aber kein Modell, keine Downloadgröße und keine Inferenz-Engine; Antwortqualität, Geschwindigkeit und die nötige Smartphone-Hardware sind daher unbekannt.',
          '**Verhalten in der Praxis.** PromptQuorum hat die App nicht ausgeführt; die Genauigkeit der Seitenverweise, der Akkuverbrauch und die Grenzen der kostenlosen Demo sind daher unbekannt.',
          '**Tresor-Verschlüsselung.** Die Beschreibung mit AES-256-GCM stammt vom Entwickler selbst und lässt sich ohne veröffentlichten Code nicht bestätigen.',
          '**Unabhängige Rückmeldungen.** Außer den Bewertungen bei Google Play wurden keine Tests oder Diskussionen Dritter zur App gefunden.',
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
            App: '[Private Mind](/de/power-local-llm/private-mind-review)',
            Plattformen: 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Offline-Chat mit Dokumentenfragen auf dem Gerät und integrierten Benchmarks',
          },
          {
            App: '[ToolNeuron](/de/power-local-llm/toolneuron-review)',
            Plattformen: 'Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffene Android-App mit verschlüsseltem Speicher, Dokument-RAG und Sprache',
          },
          {
            App: '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            Plattformen: 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Kostenloser, quelloffener lokaler LLM-Client für iPhone und Android',
          },
        ],
        note: 'Angaben zu Konkurrenten ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag der App.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was kostet die Freischaltung in anderen Ländern?',
            a: 'Am 16. Oktober 2026 nannte Google Play pro Store einen In-App-Kaufpreis: $6.99 (USA), 6,99 € (Deutschland), 7,49 € (Spanien und Frankreich), ¥1,220 (Japan), R$ 9,99 (Brasilien), ₩12,000 (Südkorea) und 29.99 SAR (Saudi-Arabien); der chinesische Store zeigte keinen Preis. Preise können sich jederzeit ändern.',
          },
          {
            q: 'Kann die App gescannte PDFs lesen?',
            a: 'Nicht unbedingt: Der Eintrag weist darauf hin, dass reine Bild-Scans möglicherweise zuerst eine Texterkennung (OCR) brauchen, bevor Honey ihren Text lesen kann.',
          },
          {
            q: 'Kann ich Fragen zu Dateien im Tresor stellen?',
            a: 'Laut Eintrag ja, für unterstützte lesbare Dokumente. Er ergänzt, dass der Tresor lokal auf dem Gerät bleibt; die Hinweise zu Version 3.5.0 nennen die verschlüsselte .hvault-Sicherung samt Wiederherstellung.',
          },
          {
            q: 'Braucht die App ein Konto?',
            a: 'Nein: Der Eintrag erklärt, dass weder ein Honey-Konto noch ein KI-Abonnement nötig ist. Für den Kauf über Google Play und dessen Wiederherstellung wird ein Google-Konto auf dem Smartphone gebraucht.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Honey LLM - Offline AI bietet privaten Chat und Dokumentenfragen auf dem Android-Smartphone mit kostenloser Demo, einmaliger Freischaltung und ohne Konto. Die Angaben lassen sich noch nicht prüfen: Der Quellcode ist nicht veröffentlicht, Modell und Engine werden nicht genannt, und die kurze Datenschutzerklärung deckt weder Dokumente noch den Tresor ab. Die App passt zu Android-Nutzern, die die kostenlose Demo gern vor dem Kauf ausprobieren; wer veröffentlichten Code braucht, vergleicht [Private Mind](/de/power-local-llm/private-mind-review) oder [ToolNeuron](/de/power-local-llm/toolneuron-review), beide unter MIT-Lizenz.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Honey LLM - Offline AI bei Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) — Beschreibung, Versionshinweise, Version, Abschnitt „Datensicherheit“ und Preis, geprüft am 16. Oktober 2026.',
          '[Datenschutzerklärung](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy) — Aussagen zum Umgang mit Daten, zuletzt im Februar 2026 aktualisiert, auf dem GitHub-Konto des Entwicklers gehostet.',
          '[Ron-Bee auf GitHub](https://github.com/Ron-Bee) — öffentliches Profil des Entwicklers, geprüft am 16. Oktober 2026; es nennt weder eine Produktwebsite noch ein Repository für diese App.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Private Mind im Test](/de/power-local-llm/private-mind-review) — eine quelloffene Offline-Chat-App mit Dokumentenfragen auf dem Gerät.',
          '[ToolNeuron im Test](/de/power-local-llm/toolneuron-review) — eine quelloffene Android-App mit verschlüsseltem Speicher und Dokument-RAG.',
          '[PocketPal AI im Test](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser lokaler LLM-Client für iOS und Android.',
          '[Die besten lokalen LLM-Apps für Android](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
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
    heroImage: '/images/honey-llm-review-hero-es.webp',
    title: 'Reseña de Honey LLM: chat de IA sin conexión y preguntas sobre documentos en Android',
    seoTitle: 'Reseña de Honey LLM: chat de IA offline y documentos',
    intro: 'Honey LLM - Offline AI es una app de Android publicada en Google Play bajo el nombre de desarrollador [Ron.Bee](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) que conversa con un modelo de IA almacenado en el teléfono y responde preguntas sobre archivos PDF, DOCX, TXT y Markdown. Está en Google Play desde marzo de 2026 y se encuentra en la versión 3.5.0. Esta reseña se basa en la ficha de Google Play y en la política de privacidad de la app, consultadas el 16 de octubre de 2026; PromptQuorum no ha probado la app personalmente.',
    metaDescription: 'Reseña de Honey LLM: app de Android de chat de IA sin conexión y preguntas sobre documentos, con demo gratuita y desbloqueo único. Código no publicado.',
    twitterDescription: 'Reseña de Honey LLM: app de Android para chat de IA sin conexión y preguntas sobre tus archivos PDF, DOCX, TXT y Markdown. Demo gratuita, desbloqueo único, código no publicado.',
    audience: 'Usuarios de Android que buscan una app de chat de IA sin conexión y preguntas sobre documentos, y quieren saber qué confirman las fuentes, qué afirma solo el desarrollador y cuánto cuesta el desbloqueo.',
    readTime: '5 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Honey LLM',
    targetKeywords: [
      'reseña honey llm',
      'honey llm android',
      'honey llm ia sin conexión',
      'chat de ia offline android',
      'chatear con pdf sin conexión android',
      'preguntas sobre documentos en el dispositivo android',
      'com.ronbee.honeyllm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'Android',
    ],
    leadAnswerBlock: '**Honey LLM - Offline AI es una app de Android que, según su desarrollador, ejecuta un modelo de IA en el teléfono para chatear en privado y hacer preguntas sobre tus propios documentos.** Ofrece una demo gratuita y un desbloqueo de pago único; el código fuente no está publicado, así que cada afirmación sobre privacidad y funcionamiento sin conexión se apoya en la ficha de Google Play y en una política de privacidad breve.',
    quickAnswerTop: {
      es: {
        question: '¿Honey LLM es gratis y funciona sin conexión?',
        answer: 'Tiene una demo local gratuita, y la ficha describe una compra integrada única para el uso ilimitado, sin suscripción. Según el desarrollador, el chat y el procesamiento de documentos se ejecutan en el teléfono sin conexión a internet una vez descargado un modelo de IA.',
        bullets: [
          'El modo Principiante revisa el teléfono y recomienda un modelo compatible; el modo Avanzado te deja elegir el modelo y ajustar el comportamiento de las respuestas.',
          'Responde preguntas sobre archivos PDF, DOCX, TXT y Markdown y muestra referencias a la página o sección que las respalda.',
          'Solo para Android, a través de [Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm); no figura ninguna versión para iPhone, escritorio o web.',
          'Versión 3.5.0, actualizada por última vez el 1 de octubre de 2026 (estado de la ficha el 16 de octubre de 2026).',
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
        label: '¿Qué es Honey LLM?',
        anchor: 'what-is-honey-llm',
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
            text: 'Honey LLM es una app de Android con demo gratuita y desbloqueo de pago único que usa un modelo de IA en el dispositivo para chatear en privado y consultar documentos, de un desarrollador cuyo código fuente no está publicado.',
          },
          {
            type: 'plain-terms',
            text: 'Instalas la app, descargas una vez un modelo de IA al teléfono y luego chateas o preguntas sobre tus propios archivos; según el desarrollador, el texto se queda en el dispositivo.',
          },
        ],
        items: [
          'Editor: figura en Google Play como Ron.Bee; no se encontró ninguna empresa, sitio web del producto ni repositorio de código fuente.',
          'Trayectoria: publicada el 13 de marzo de 2026, con más de 10K descargas y una valoración media de 3.7 sobre 31 valoraciones en Google Play.',
          'Declaración de privacidad: la sección Seguridad de los datos indica que no se recopilan datos ni se comparten con terceros.',
          'Requisitos: Android 8.0 o superior; el modelo de IA se descarga aparte dentro de la app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Todo lo que aparece aquí procede de la ficha de Google Play y de la política de privacidad del desarrollador; PromptQuorum no ha probado la app, así que el funcionamiento sin conexión, la calidad de las respuestas y la velocidad no están confirmados.',
          },
        ],
      },
      overview: {
        id: 'what-is-honey-llm',
        title: '¿Qué es Honey LLM?',
        content: [
          '**Honey LLM - Offline AI es una app de Android que reúne un chat de IA, preguntas sobre documentos y una bóveda cifrada de archivos en torno a un modelo almacenado en el teléfono.** Según su [ficha de Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm), las conversaciones y los documentos compatibles se procesan en el dispositivo en lugar de enviarse a un servicio de IA en la nube.',
          'La app recibe nombres ligeramente distintos: el título en Play es «Honey LLM - Offline AI», la descripción la llama «Honey» y la política de privacidad la llama «HoneyLLM Offline AI». Los tres se refieren al paquete com.ronbee.honeyllm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Instálala desde Google Play; el modelo de IA es una descarga aparte dentro de la app.**',
        ],
        columns: [
          'Plataforma',
          'Dónde conseguirla',
        ],
        rows: [
          {
            Plataforma: 'Android',
            'Dónde conseguirla': '[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)',
          },
          {
            Plataforma: 'Precio',
            'Dónde conseguirla': 'Demo gratuita; compra integrada única de 7,49 € (tienda española)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': 'No se encontró',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy)',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': 'No publicado',
          },
        ],
        note: 'No se encontró un sitio web propio del producto: la ficha de Play enlaza solo la política de privacidad, y el perfil de GitHub del desarrollador no indica ningún sitio ni repositorio de la app. Versión verificada el 16 de octubre de 2026: 3.5.0, actualizada por última vez el 1 de octubre de 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento procede de la descripción de Google Play; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Modos Principiante y Avanzado.** El modo Principiante evalúa el teléfono y recomienda un modelo compatible, y abre el chat de inmediato si ya está instalado; el modo Avanzado ofrece varios modelos locales y controles de estilo de respuesta, longitud de respuesta, temperatura y Top P.',
          '**Preguntas sobre documentos.** Los archivos PDF, DOCX, TXT y Markdown se pueden resumir o consultar, con preguntas de seguimiento y referencias a la página o sección; la app está diseñada para avisar cuando la respuesta no está en los documentos seleccionados.',
          '**Bóveda cifrada.** Los archivos se pueden importar a un almacenamiento privado de la app descrito como cifrado con AES-256-GCM mediante Android Keystore, comprobar su integridad, exportarlos o eliminarlos, y copiarlos en un archivo .hvault cifrado.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y tratamiento de datos',
        content: [
          '**La sección Seguridad de los datos de Google Play declara «No se recopilan datos» y «No se comparten datos con terceros».** La política de privacidad del desarrollador, actualizada por última vez en febrero de 2026, indica que la app no recopila, almacena ni transmite datos personales a servidores externos y solo solicita acceso a la red para funciones opcionales, como descargar modelos de IA o actualizaciones de la app.',
          '**Algunos pasos siguen necesitando internet, según la descripción de Play:** descargar modelos, comprar en Google Play, restaurar compras y actualizar la app. Generar respuestas y procesar documentos se describen como locales.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría, y el código fuente no está publicado. La política de privacidad no menciona los documentos, la bóveda ni las compras, de modo que no explica cómo se tratan los archivos. PromptQuorum no ha inspeccionado el tráfico de red de la app.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Código fuente y licencia.** No se encontró ningún repositorio público ni texto de licencia, así que las afirmaciones de privacidad y de funcionamiento sin conexión no se pueden contrastar con el código.',
          '**Modelos y motor.** La ficha menciona un catálogo de modelos locales, pero no nombra ningún modelo, tamaño de descarga ni motor de inferencia, por lo que se desconocen la calidad de las respuestas, la velocidad y el hardware necesario.',
          '**Comportamiento en la práctica.** PromptQuorum no ejecutó la app, así que se desconocen la precisión de las referencias de página, el consumo de batería y los límites de la demo gratuita.',
          '**Cifrado de la bóveda.** La descripción con AES-256-GCM es del propio desarrollador y no se puede confirmar sin código publicado.',
          '**Opiniones independientes.** No se encontraron reseñas ni debates de terceros sobre la app, más allá de sus valoraciones en Google Play.',
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
            'Aplicación': '[Private Mind](/es/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat sin conexión de código abierto con preguntas sobre documentos en el dispositivo y pruebas de rendimiento integradas',
          },
          {
            'Aplicación': '[ToolNeuron](/es/power-local-llm/toolneuron-review)',
            Plataformas: 'Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App de Android de código abierto con almacenamiento cifrado, RAG de documentos y voz',
          },
          {
            'Aplicación': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente gratuito y de código abierto de LLM locales para iPhone y Android',
          },
        ],
        note: 'Los datos de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada aplicación.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto cuesta el desbloqueo en otros países?',
            a: 'El 16 de octubre de 2026, Google Play mostraba un precio de compra integrada por tienda: $6.99 (EE. UU.), 6,99 € (Alemania), 7,49 € (España y Francia), ¥1,220 (Japón), R$ 9,99 (Brasil), ₩12,000 (Corea del Sur) y 29.99 SAR (Arabia Saudí); la tienda de China no mostraba precio. Los precios pueden cambiar en cualquier momento.',
          },
          {
            q: '¿Puede leer PDF escaneados?',
            a: 'No necesariamente: la ficha advierte de que los escaneos que son solo imagen pueden necesitar OCR antes de que Honey pueda leer su texto.',
          },
          {
            q: '¿Puedo hacer preguntas sobre los archivos de la bóveda?',
            a: 'Sí, para documentos legibles compatibles, según la ficha. Añade que la bóveda permanece local en el dispositivo; las notas de la versión 3.5.0 mencionan la copia de seguridad y restauración cifradas en formato .hvault.',
          },
          {
            q: '¿Necesita una cuenta?',
            a: 'No: la ficha indica que no hace falta una cuenta de Honey ni una suscripción de IA. Se necesita una cuenta de Google en el teléfono para la compra en Play y para restaurarla.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Honey LLM - Offline AI ofrece chat privado y preguntas sobre documentos en un teléfono Android, con demo gratuita, desbloqueo único y sin cuenta. Sus afirmaciones aún no se pueden comprobar: el código no está publicado, no se nombran el modelo ni el motor, y la breve política de privacidad no cubre los documentos ni la bóveda. Encaja con usuarios de Android que quieran probar la demo gratuita antes de pagar; quien necesite código publicado debería comparar [Private Mind](/es/power-local-llm/private-mind-review) o [ToolNeuron](/es/power-local-llm/toolneuron-review), ambas con licencia MIT.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Honey LLM - Offline AI en Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) — descripción, notas de la versión, versión, sección Seguridad de los datos y precio, consultados el 16 de octubre de 2026.',
          '[Política de privacidad](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy) — declaraciones sobre el tratamiento de datos, actualizada por última vez en febrero de 2026, alojada en la cuenta de GitHub del desarrollador.',
          '[Ron-Bee en GitHub](https://github.com/Ron-Bee) — perfil público del desarrollador, consultado el 16 de octubre de 2026; no indica ningún sitio web del producto ni repositorio de esta app.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión de código abierto con preguntas sobre documentos en el dispositivo.',
          '[Reseña de ToolNeuron](/es/power-local-llm/toolneuron-review) — una app de Android de código abierto con almacenamiento cifrado y RAG de documentos.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente gratuito de LLM locales para iOS y Android.',
          '[Las mejores apps de LLM locales para Android](/es/power-local-llm/best-local-llm-apps-android-2026) — el panorama más amplio de Android.',
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
    heroImage: '/images/honey-llm-review-hero-fr.webp',
    title: 'Test de Honey LLM : chat IA hors ligne et questions sur vos documents sur Android',
    seoTitle: 'Test de Honey LLM : chat IA hors ligne et documents',
    intro: 'Honey LLM - Offline AI est une application Android publiée sur Google Play sous le nom de développeur [Ron.Bee](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm), qui dialogue avec un modèle d\'IA stocké sur le téléphone et répond aux questions sur des fichiers PDF, DOCX, TXT et Markdown. Elle est sur Google Play depuis mars 2026 et en est à la version 3.5.0. Ce test s\'appuie sur la fiche Google Play et la politique de confidentialité de l\'application, consultées le 16 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en conditions réelles.',
    metaDescription: 'Test de Honey LLM : application Android de chat IA hors ligne et de questions sur documents, démo gratuite et déblocage unique. Code non publié.',
    twitterDescription: 'Test de Honey LLM : application Android de chat IA hors ligne et de questions sur vos fichiers PDF, DOCX, TXT et Markdown. Démo gratuite, déblocage unique, code non publié.',
    audience: 'Utilisateurs Android qui cherchent une application de chat IA hors ligne et de questions sur documents, et veulent savoir ce que les sources confirment, ce que le développeur affirme seulement et ce que coûte le déblocage.',
    readTime: '5 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Honey LLM',
    targetKeywords: [
      'test honey llm',
      'honey llm android',
      'honey llm ia hors ligne',
      'chat ia hors ligne android',
      'discuter avec un pdf hors ligne android',
      'questions sur documents sur appareil android',
      'com.ronbee.honeyllm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'Android',
    ],
    leadAnswerBlock: '**Honey LLM - Offline AI est, selon son développeur, une application Android qui exécute un modèle d\'IA sur le téléphone pour discuter en privé et poser des questions sur vos propres documents.** Elle propose une démo gratuite et un déblocage payant unique ; le code source n\'est pas publié, si bien que chaque affirmation sur la confidentialité et le fonctionnement hors ligne repose sur la fiche Google Play et une courte politique de confidentialité.',
    quickAnswerTop: {
      fr: {
        question: 'Honey LLM est-elle gratuite, et fonctionne-t-elle hors ligne ?',
        answer: 'Elle propose une démo locale gratuite, et la fiche décrit un achat intégré unique pour un usage illimité, sans abonnement. Selon le développeur, le chat et le traitement des documents s\'exécutent sur le téléphone sans connexion internet une fois un modèle d\'IA téléchargé.',
        bullets: [
          'Le mode Débutant analyse le téléphone et recommande un modèle compatible ; le mode Avancé permet de choisir le modèle et d\'ajuster le comportement des réponses.',
          'Répond aux questions sur des fichiers PDF, DOCX, TXT et Markdown et affiche les références de page ou de section correspondantes.',
          'Uniquement sur Android, via [Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) ; aucune version pour iPhone, ordinateur ou web n\'est indiquée.',
          'Version 3.5.0, mise à jour pour la dernière fois le 1er octobre 2026 (état de la fiche au 16 octobre 2026).',
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
        label: 'Qu\'est-ce que Honey LLM ?',
        anchor: 'what-is-honey-llm',
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
            text: 'Honey LLM est une application Android avec démo gratuite et déblocage payant unique, qui utilise un modèle d\'IA sur l\'appareil pour le chat privé et les questions sur documents, d\'un développeur dont le code source n\'est pas publié.',
          },
          {
            type: 'plain-terms',
            text: 'Vous installez l\'application, téléchargez une fois un modèle d\'IA sur le téléphone, puis vous discutez ou interrogez vos propres fichiers ; selon le développeur, le texte reste sur l\'appareil.',
          },
        ],
        items: [
          'Éditeur : listé sur Google Play sous le nom Ron.Bee ; ni entreprise, ni site web du produit, ni dépôt de code source n\'a été trouvé.',
          'Historique : publiée le 13 mars 2026, avec plus de 10 000 téléchargements et une note moyenne de 3.7 sur 31 évaluations sur Google Play.',
          'Déclaration de confidentialité : la section Sécurité des données indique qu\'aucune donnée n\'est collectée ni partagée avec des tiers.',
          'Prérequis : Android 8.0 ou version ultérieure ; le modèle d\'IA se télécharge séparément dans l\'application.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Tout ce qui figure ici provient de la fiche Google Play et de la politique de confidentialité du développeur ; PromptQuorum n\'a pas testé l\'application, donc le fonctionnement hors ligne, la qualité des réponses et la vitesse ne sont pas confirmés.',
          },
        ],
      },
      overview: {
        id: 'what-is-honey-llm',
        title: 'Qu\'est-ce que Honey LLM ?',
        content: [
          '**Honey LLM - Offline AI est une application Android qui réunit un chat IA, des questions sur documents et un coffre chiffré pour les fichiers autour d\'un modèle stocké sur le téléphone.** D\'après sa [fiche Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm), les conversations et les documents pris en charge sont traités sur l\'appareil au lieu d\'être envoyés à un service d\'IA dans le cloud.',
          'L\'application porte des noms légèrement différents : le titre Play est « Honey LLM - Offline AI », la description la nomme « Honey » et la politique de confidentialité la nomme « HoneyLLM Offline AI ». Les trois désignent le paquet com.ronbee.honeyllm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Installez-la depuis Google Play ; le modèle d\'IA se télécharge séparément dans l\'application.**',
        ],
        columns: [
          'Plateforme',
          'Où l\'obtenir',
        ],
        rows: [
          {
            Plateforme: 'Android',
            'Où l\'obtenir': '[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)',
          },
          {
            Plateforme: 'Prix',
            'Où l\'obtenir': 'Démo gratuite ; achat intégré unique de 7,49 € (boutique française)',
          },
          {
            Plateforme: 'Site web',
            'Où l\'obtenir': 'Aucun trouvé',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où l\'obtenir': '[Politique de confidentialité](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy)',
          },
          {
            Plateforme: 'Code source',
            'Où l\'obtenir': 'Non publié',
          },
        ],
        note: 'Aucun site web dédié au produit n\'a été trouvé : la fiche Play ne renvoie que vers la politique de confidentialité, et le profil GitHub du développeur n\'indique ni site ni dépôt pour l\'application. Version vérifiée le 16 octobre 2026 : 3.5.0, mise à jour pour la dernière fois le 1er octobre 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Google Play ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Modes Débutant et Avancé.** Le mode Débutant évalue le téléphone et recommande un modèle compatible, puis lance le chat aussitôt s\'il est déjà installé ; le mode Avancé propose plusieurs modèles locaux et des réglages du style de réponse, de la longueur de réponse, de la température et du Top P.',
          '**Questions sur documents.** Les fichiers PDF, DOCX, TXT et Markdown peuvent être résumés ou interrogés, avec des questions de suivi et des références de page ou de section ; l\'application est conçue pour signaler que la réponse ne figure pas dans les documents sélectionnés.',
          '**Coffre chiffré.** Les fichiers peuvent être importés dans un stockage privé à l\'application décrit comme chiffré en AES-256-GCM via Android Keystore, vérifiés pour leur intégrité, exportés ou supprimés, et sauvegardés dans un fichier .hvault chiffré.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et traitement des données',
        content: [
          '**La section Sécurité des données de Google Play déclare « Aucune donnée collectée » et « Aucune donnée partagée avec des tiers ».** La politique de confidentialité du développeur, mise à jour pour la dernière fois en février 2026, indique que l\'application ne collecte, ne stocke ni ne transmet de données personnelles à des serveurs externes et ne demande l\'accès au réseau que pour des fonctions optionnelles, comme le téléchargement de modèles d\'IA ou de mises à jour.',
          '**Certaines étapes exigent encore internet, selon la description Play :** le téléchargement des modèles, les achats Google Play, la restauration des achats et les mises à jour. La génération des réponses et le traitement des documents sont décrits comme locaux.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations du développeur, pas des résultats d\'audit, et le code source n\'est pas publié. La politique de confidentialité ne mentionne ni les documents, ni le coffre, ni les achats, et n\'indique donc pas comment les fichiers sont traités. PromptQuorum n\'a pas inspecté le trafic réseau de l\'application.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Code source et licence.** Aucun dépôt public ni texte de licence n\'a été trouvé ; les affirmations sur la confidentialité et le fonctionnement hors ligne ne peuvent donc pas être vérifiées dans le code.',
          '**Modèles et moteur.** La fiche évoque un catalogue de modèles locaux mais ne nomme aucun modèle, aucune taille de téléchargement ni aucun moteur d\'inférence ; la qualité des réponses, la vitesse et le matériel requis sont donc inconnus.',
          '**Comportement en pratique.** PromptQuorum n\'a pas exécuté l\'application ; la précision des références de page, la consommation de batterie et les limites de la démo gratuite sont donc inconnues.',
          '**Chiffrement du coffre.** La description en AES-256-GCM émane du développeur et ne peut pas être confirmée sans code publié.',
          '**Avis indépendants.** Aucun test ni débat de tiers sur l\'application n\'a été trouvé, hormis ses évaluations sur Google Play.',
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
            Application: '[Private Mind](/fr/power-local-llm/private-mind-review)',
            Plateformes: 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat hors ligne open source avec questions sur documents sur l\'appareil et benchmarks intégrés',
          },
          {
            Application: '[ToolNeuron](/fr/power-local-llm/toolneuron-review)',
            Plateformes: 'Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Application Android open source avec stockage chiffré, RAG de documents et voix',
          },
          {
            Application: '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            Plateformes: 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Client LLM local gratuit et open source pour iPhone et Android',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Combien coûte le déblocage dans d\'autres pays ?',
            a: 'Le 16 octobre 2026, Google Play affichait un prix d\'achat intégré par boutique : $6.99 (États-Unis), 6,99 € (Allemagne), 7,49 € (Espagne et France), ¥1,220 (Japon), R$ 9,99 (Brésil), ₩12,000 (Corée du Sud) et 29.99 SAR (Arabie saoudite) ; la boutique chinoise n\'affichait aucun prix. Les prix peuvent changer à tout moment.',
          },
          {
            q: 'Peut-elle lire des PDF numérisés ?',
            a: 'Pas forcément : la fiche avertit que les numérisations composées uniquement d\'images peuvent nécessiter une reconnaissance de texte (OCR) avant que Honey puisse en lire le texte.',
          },
          {
            q: 'Puis-je poser des questions sur les fichiers du coffre ?',
            a: 'Oui pour les documents lisibles pris en charge, d\'après la fiche. Elle précise que le coffre reste local à l\'appareil ; les notes de la version 3.5.0 mentionnent la sauvegarde et la restauration chiffrées au format .hvault.',
          },
          {
            q: 'Faut-il un compte ?',
            a: 'Non : la fiche indique qu\'aucun compte Honey ni abonnement d\'IA n\'est nécessaire. Un compte Google sur le téléphone sert à l\'achat sur Play et à sa restauration.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Honey LLM - Offline AI propose chat privé et questions sur documents sur un téléphone Android, avec démo gratuite, déblocage unique et sans compte. Ses affirmations ne sont pas encore vérifiables : le code n\'est pas publié, le modèle et le moteur ne sont pas nommés, et la courte politique de confidentialité ne couvre ni les documents ni le coffre. Elle convient aux utilisateurs Android qui veulent essayer la démo gratuite avant de payer ; qui a besoin d\'un code publié comparera [Private Mind](/fr/power-local-llm/private-mind-review) ou [ToolNeuron](/fr/power-local-llm/toolneuron-review), toutes deux sous licence MIT.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Honey LLM - Offline AI sur Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) — description, notes de version, version, section Sécurité des données et prix, consultés le 16 octobre 2026.',
          '[Politique de confidentialité](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy) — déclarations sur le traitement des données, mise à jour pour la dernière fois en février 2026, hébergée sur le compte GitHub du développeur.',
          '[Ron-Bee sur GitHub](https://github.com/Ron-Bee) — profil public du développeur, consulté le 16 octobre 2026 ; il n\'indique ni site web du produit ni dépôt pour cette application.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne open source avec questions sur documents sur l\'appareil.',
          '[Test de ToolNeuron](/fr/power-local-llm/toolneuron-review) — une application Android open source avec stockage chiffré et RAG de documents.',
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client LLM local gratuit pour iOS et Android.',
          '[Les meilleures applications de LLM locaux pour Android](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama plus large d\'Android.',
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
    heroImage: '/images/honey-llm-review-hero-ja.webp',
    title: 'Honey LLM レビュー：Android向けオフラインAIチャットと文書Q&A',
    seoTitle: 'Honey LLM レビュー：オフラインAIチャット（Android）',
    intro: 'Honey LLM - Offline AI は、開発者名[Ron.Bee](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)でGoogle Playに公開されているAndroidアプリです。スマートフォンに保存したAIモデルとチャットし、PDF・DOCX・TXT・Markdownファイルについての質問に答えます。2026年3月からGoogle Playで配信され、現在のバージョンは3.5.0です。このレビューはGoogle Playの掲載情報とアプリのプライバシーポリシー（2026年10月16日確認）に基づいており、PromptQuorumは実機での検証を行っていません。',
    metaDescription: 'Honey LLM レビュー：オフラインAIチャットと文書Q&Aを備えたAndroidアプリ。無料デモと買い切りの解除方式。ソース非公開で、動作は未検証です。',
    twitterDescription: 'Honey LLM レビュー：オフラインAIチャットと、PDF・DOCX・TXT・Markdownファイルへの質問に対応するAndroidアプリ。無料デモ、買い切り解除、ソース非公開。',
    audience: 'オフラインのAIチャットと文書Q&Aアプリを探していて、情報源が裏付けている点、開発者の主張にとどまる点、解除に必要な費用を知りたいAndroidユーザー。',
    readTime: '5分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Honey LLM レビュー',
    targetKeywords: [
      'honey llm レビュー',
      'honey llm android',
      'honey llm オフラインai',
      'オフラインai チャット android',
      'pdf チャット オフライン android',
      '端末内 文書qa android',
      'com.ronbee.honeyllm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'Android',
    ],
    leadAnswerBlock: '**Honey LLM - Offline AI は、開発者によれば、スマートフォン上でAIモデルを動かし、プライベートなチャットと自分の文書についての質問に使えるAndroidアプリです。** 無料デモと買い切りの有料解除があり、ソースコードは公開されていないため、プライバシーとオフライン動作に関する記述はすべてGoogle Playの掲載情報と短いプライバシーポリシーに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'Honey LLMは無料で、オフラインで使えますか？',
        answer: '無料のローカルデモがあり、掲載情報には、サブスクリプションなしで無制限に使える買い切りのアプリ内課金が記載されています。開発者によれば、AIモデルをダウンロードしたあとは、インターネット接続なしでチャットと文書処理がスマートフォン上で行われます。',
        bullets: [
          'ビギナーモードは端末を調べて対応モデルを提案し、アドバンストモードではモデルを選び、応答の挙動を調整できます。',
          'PDF・DOCX・TXT・Markdownファイルについての質問に答え、根拠となるページやセクションの参照を表示します。',
          'Android専用で、[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)から入手します。iPhone、デスクトップ、Web版は掲載されていません。',
          'バージョン3.5.0、2026年10月1日更新（2026年10月16日時点の掲載内容）。',
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
        label: 'Honey LLMとは',
        anchor: 'what-is-honey-llm',
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
            text: 'Honey LLMは、無料デモと買い切りの有料解除を備え、端末内のAIモデルでプライベートなチャットと文書Q&Aを行うAndroidアプリで、ソースコードは公開されていません。',
          },
          {
            type: 'plain-terms',
            text: 'アプリをインストールし、AIモデルを一度スマートフォンにダウンロードすれば、チャットや自分のファイルへの質問ができ、開発者によればテキストは端末内にとどまります。',
          },
        ],
        items: [
          '提供元：Google PlayではRon.Beeと表示。企業、製品サイト、ソースコードのリポジトリは見つかりませんでした。',
          '実績：2026年3月13日に公開、Google Playでは1万回以上のダウンロードと、31件の評価で平均3.7。',
          'プライバシーの表明：「データセーフティ」では、データの収集も第三者への共有もないとされています。',
          '動作条件：Android 8.0以降。AIモデルはアプリ内で別途ダウンロードします。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ここに書かれている内容はすべてGoogle Playの掲載情報と開発者のプライバシーポリシーに基づくもので、PromptQuorumはアプリを検証していないため、オフライン動作、回答品質、速度は未確認です。',
          },
        ],
      },
      overview: {
        id: 'what-is-honey-llm',
        title: 'Honey LLMとは',
        content: [
          '**Honey LLM - Offline AI は、スマートフォンに保存したモデルを軸に、AIチャット、文書への質問、暗号化ファイル保管庫（Vault）をまとめたAndroidアプリです。** [Google Playの掲載情報](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)によると、会話と対応文書はクラウドAIサービスに送られず、端末上で処理されます。',
          'アプリの呼び名は少しずつ異なります。Playのタイトルは「Honey LLM - Offline AI」、説明文では「Honey」、プライバシーポリシーでは「HoneyLLM Offline AI」です。いずれもパッケージcom.ronbee.honeyllmを指します。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**入手はGoogle Playから。AIモデルはアプリ内で別途ダウンロードします。**',
        ],
        columns: [
          'プラットフォーム',
          '入手先',
        ],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)',
          },
          {
            'プラットフォーム': '価格',
            '入手先': '無料デモ、買い切りのアプリ内課金¥1,220（日本のストア）',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '見つかりませんでした',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[プライバシーポリシー](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '非公開',
          },
        ],
        note: '製品専用のサイトは見つかりませんでした。Playの掲載情報がリンクしているのはプライバシーポリシーのみで、開発者のGitHubプロフィールにもこのアプリのサイトやリポジトリはありません。2026年10月16日に確認したバージョン：3.5.0（2026年10月1日更新）。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下はいずれもGoogle Playの説明文に基づく内容で、独立した検証は行っていません。**',
        ],
        items: [
          '**ビギナーモードとアドバンストモード。** ビギナーモードは端末を評価して対応モデルを提案し、インストール済みならすぐにチャットを始めます。アドバンストモードでは複数のローカルモデルを選べ、応答スタイル、応答の長さ、温度、Top Pを調整できます。',
          '**文書への質問。** PDF・DOCX・TXT・Markdownファイルを要約したり質問したりでき、追加の質問や根拠となるページ・セクションの参照にも対応します。選んだ文書に答えがない場合はそう伝える設計とされています。',
          '**暗号化Vault。** ファイルをアプリ専用ストレージに取り込めます。ストレージはAndroid Keystoreを使ったAES-256-GCMで暗号化されると説明されており、整合性の確認、書き出し、削除のほか、暗号化された.hvaultファイルへのバックアップも可能です。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの扱い',
        content: [
          '**Google Playの「データセーフティ」では「収集されるデータなし」「第三者と共有されるデータなし」と表明されています。** 開発者のプライバシーポリシー（2026年2月更新）には、アプリが個人データを収集・保存せず外部サーバーにも送信しないこと、ネットワークアクセスはAIモデルやアプリ更新のダウンロードなど任意の機能にのみ求めることが書かれています。',
          '**Playの説明文によると、一部の手順にはなおインターネットが必要です。** モデルのダウンロード、Google Playでの購入、購入の復元、アプリの更新です。回答の生成と文書の処理はローカルで行われると説明されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発者の表明であり、監査結果ではありません。ソースコードも公開されていません。プライバシーポリシーは文書、Vault、購入に触れていないため、ファイルの扱いは説明されていません。PromptQuorumはアプリの通信を調べていません。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**ソースコードとライセンス。** 公開リポジトリもライセンス文書も見つからなかったため、プライバシーとオフライン動作の主張をコードと照合できません。',
          '**モデルとエンジン。** 掲載情報はローカルモデルのカタログに触れていますが、モデル名、ダウンロードサイズ、推論エンジンは示されておらず、回答品質、速度、必要な端末性能は不明です。',
          '**実際の挙動。** PromptQuorumはアプリを実行していないため、ページ参照の正確さ、バッテリー消費、無料デモの制限は不明です。',
          '**Vaultの暗号化。** AES-256-GCMという説明は開発者自身によるもので、コードが公開されていない以上、確認できません。',
          '**第三者の評価。** Google Playの評価以外に、第三者によるレビューや議論は見つかりませんでした。',
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
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            '対応環境': 'iOS、Android',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'オープンソースのオフラインチャット。端末内の文書Q&Aとベンチマーク機能を内蔵',
          },
          {
            'アプリ': '[ToolNeuron](/ja/power-local-llm/toolneuron-review)',
            '対応環境': 'Android',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'オープンソースのAndroidアプリ。暗号化ストレージ、文書RAG、音声に対応',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            '対応環境': 'iOS、Android',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'iPhoneとAndroid向けの無料のオープンソース製ローカルLLMクライアント',
          },
        ],
        note: '競合アプリの情報は頻繁に変わります。価格、ライセンス、対応環境は各アプリの掲載ページで最新の情報をご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '他の国での解除料金はいくらですか？',
            a: '2026年10月16日時点で、Google Playはストアごとに1つのアプリ内課金価格を表示していました。米国$6.99、ドイツ6,99 €、スペインとフランス7,49 €、日本¥1,220、ブラジルR$ 9,99、韓国₩12,000、サウジアラビア29.99 SAR。中国のストアには価格が表示されていませんでした。価格はいつでも変わる可能性があります。',
          },
          {
            q: 'スキャンしたPDFは読めますか？',
            a: '必ずしも読めるとは限りません。掲載情報には、画像だけのスキャンはHoneyが文字を読み取る前にOCRが必要な場合があると記載されています。',
          },
          {
            q: 'Vault内のファイルについて質問できますか？',
            a: '掲載情報によれば、対応する読み取り可能な文書なら可能です。Vaultは端末内にとどまるとも書かれており、バージョン3.5.0のリリースノートには暗号化された.hvaultバックアップと復元が挙げられています。',
          },
          {
            q: 'アカウントは必要ですか？',
            a: '不要です。掲載情報には、Honeyアカウントもサブスクリプションも必要ないと記載されています。Playでの購入とその復元には、端末のGoogleアカウントが必要です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Honey LLM - Offline AI は、無料デモ、買い切りの解除、アカウント不要で、Androidスマートフォン上のプライベートなチャットと文書への質問を提供します。ただし主張はまだ確認できません。ソースは非公開で、モデルとエンジンも明示されず、短いプライバシーポリシーは文書やVaultを扱っていません。支払う前に無料デモを試したいAndroidユーザーに向いています。公開されたコードが必要な方は、いずれもMITライセンスの[Private Mind](/ja/power-local-llm/private-mind-review)や[ToolNeuron](/ja/power-local-llm/toolneuron-review)と比較してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Google Playの Honey LLM - Offline AI](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) — 説明文、リリースノート、バージョン、データセーフティ、価格（2026年10月16日確認）。',
          '[プライバシーポリシー](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy) — データの扱いに関する記述（2026年2月更新）。開発者のGitHubアカウントで公開されています。',
          '[GitHubのRon-Bee](https://github.com/Ron-Bee) — 開発者の公開プロフィール（2026年10月16日確認）。このアプリの製品サイトやリポジトリは掲載されていません。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Private Mind レビュー](/ja/power-local-llm/private-mind-review) — 端末内の文書Q&Aに対応するオープンソースのオフラインチャットアプリ。',
          '[ToolNeuron レビュー](/ja/power-local-llm/toolneuron-review) — 暗号化ストレージと文書RAGを備えたオープンソースのAndroidアプリ。',
          '[PocketPal AI レビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの無料ローカルLLMクライアント。',
          '[Android向けローカルLLMアプリ おすすめ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Androidアプリをより広く取り上げた比較記事。',
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
    heroImage: '/images/honey-llm-review-hero-pt.webp',
    title: 'Análise do Honey LLM: chat de IA offline e perguntas sobre documentos no Android',
    seoTitle: 'Análise do Honey LLM: chat de IA offline e documentos',
    intro: 'O Honey LLM - Offline AI é um app para Android publicado no Google Play sob o nome de desenvolvedor [Ron.Bee](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm), que conversa com um modelo de IA armazenado no celular e responde perguntas sobre arquivos PDF, DOCX, TXT e Markdown. Ele está no Google Play desde março de 2026 e na versão 3.5.0. Esta análise se baseia na página do Google Play e na política de privacidade do app, consultadas em 16 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription: 'Análise do Honey LLM: app Android de chat de IA offline e perguntas sobre documentos, com demo grátis e desbloqueio único. Código não publicado.',
    twitterDescription: 'Análise do Honey LLM: app Android de chat de IA offline e perguntas sobre seus arquivos PDF, DOCX, TXT e Markdown. Demo grátis, desbloqueio único, código não publicado.',
    audience: 'Usuários de Android que procuram um app de chat de IA offline e perguntas sobre documentos e querem saber o que as fontes confirmam, o que só o desenvolvedor afirma e quanto custa o desbloqueio.',
    readTime: '5 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Honey LLM',
    targetKeywords: [
      'análise honey llm',
      'honey llm android',
      'honey llm ia offline',
      'chat de ia offline android',
      'conversar com pdf offline android',
      'perguntas sobre documentos no aparelho android',
      'com.ronbee.honeyllm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'Android',
    ],
    leadAnswerBlock: '**O Honey LLM - Offline AI é um app para Android que, segundo o desenvolvedor, executa um modelo de IA no celular para conversar em particular e fazer perguntas sobre seus próprios documentos.** Ele oferece uma demo grátis e um desbloqueio pago único; o código-fonte não é publicado, então toda afirmação sobre privacidade e funcionamento offline se apoia na página do Google Play e em uma política de privacidade curta.',
    quickAnswerTop: {
      pt: {
        question: 'O Honey LLM é grátis e funciona offline?',
        answer: 'Ele tem uma demo local grátis, e a página descreve uma compra no app única para uso ilimitado, sem assinatura. Segundo o desenvolvedor, o chat e o processamento de documentos rodam no celular sem conexão com a internet depois que um modelo de IA é baixado.',
        bullets: [
          'O modo Iniciante analisa o celular e recomenda um modelo compatível; o modo Avançado permite escolher o modelo e ajustar o comportamento das respostas.',
          'Responde perguntas sobre arquivos PDF, DOCX, TXT e Markdown e mostra referências à página ou seção que as sustenta.',
          'Somente para Android, pelo [Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm); não há versão listada para iPhone, desktop ou web.',
          'Versão 3.5.0, atualizada pela última vez em 1º de outubro de 2026 (estado da página em 16 de outubro de 2026).',
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
        label: 'O que é o Honey LLM?',
        anchor: 'what-is-honey-llm',
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
            text: 'O Honey LLM é um app para Android com demo grátis e desbloqueio pago único que usa um modelo de IA no aparelho para chat privado e perguntas sobre documentos, de um desenvolvedor cujo código-fonte não é publicado.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app, baixa uma vez um modelo de IA no celular e depois conversa ou pergunta sobre seus próprios arquivos; segundo o desenvolvedor, o texto fica no aparelho.',
          },
        ],
        items: [
          'Publicador: listado no Google Play como Ron.Bee; não foram encontrados empresa, site do produto nem repositório de código-fonte.',
          'Histórico: lançado em 13 de março de 2026, com mais de 10 mil downloads e nota média de 3.7 em 31 avaliações no Google Play.',
          'Declaração de privacidade: a seção Segurança dos dados informa que nenhum dado é coletado nem compartilhado com terceiros.',
          'Requisitos: Android 8.0 ou superior; o modelo de IA é um download separado dentro do app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Tudo aqui vem da página do Google Play e da política de privacidade do desenvolvedor; a PromptQuorum não testou o app, então o funcionamento offline, a qualidade das respostas e a velocidade não estão confirmados.',
          },
        ],
      },
      overview: {
        id: 'what-is-honey-llm',
        title: 'O que é o Honey LLM?',
        content: [
          '**O Honey LLM - Offline AI é um app para Android que reúne chat de IA, perguntas sobre documentos e um cofre criptografado de arquivos em torno de um modelo armazenado no celular.** Segundo a [página do Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm), as conversas e os documentos compatíveis são processados no aparelho em vez de serem enviados a um serviço de IA na nuvem.',
          'O app aparece com nomes ligeiramente diferentes: o título no Play é "Honey LLM - Offline AI", a descrição o chama de "Honey" e a política de privacidade o chama de "HoneyLLM Offline AI". Os três se referem ao pacote com.ronbee.honeyllm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**Instale pelo Google Play; o modelo de IA é um download separado dentro do app.**',
        ],
        columns: [
          'Plataforma',
          'Onde obter',
        ],
        rows: [
          {
            Plataforma: 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)',
          },
          {
            Plataforma: 'Preço',
            'Onde obter': 'Demo grátis; compra no app única de R$ 9,99 (loja brasileira)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': 'Nenhum encontrado',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy)',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': 'Não publicado',
          },
        ],
        note: 'Não foi encontrado um site próprio do produto: a página do Play linka apenas a política de privacidade, e o perfil do desenvolvedor no GitHub não lista site nem repositório do app. Versão verificada em 16 de outubro de 2026: 3.5.0, atualizada pela última vez em 1º de outubro de 2026.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da descrição do Google Play; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Modos Iniciante e Avançado.** O modo Iniciante avalia o celular e recomenda um modelo compatível, abrindo o chat na hora se ele já estiver instalado; o modo Avançado oferece vários modelos locais e controles de estilo de resposta, tamanho da resposta, temperatura e Top P.',
          '**Perguntas sobre documentos.** Arquivos PDF, DOCX, TXT e Markdown podem ser resumidos ou questionados, com perguntas de acompanhamento e referências à página ou seção; o app foi projetado para avisar quando a resposta não está nos documentos selecionados.',
          '**Cofre criptografado.** Os arquivos podem ser importados para um armazenamento privado do app descrito como criptografado com AES-256-GCM pelo Android Keystore, ter a integridade verificada, ser exportados ou excluídos e ganhar backup em um arquivo .hvault criptografado.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e tratamento de dados',
        content: [
          '**A seção Segurança dos dados do Google Play declara "Nenhum dado coletado" e "Nenhum dado compartilhado com terceiros".** A política de privacidade do desenvolvedor, atualizada pela última vez em fevereiro de 2026, diz que o app não coleta, armazena nem transmite dados pessoais a servidores externos e só solicita acesso à rede para recursos opcionais, como baixar modelos de IA ou atualizações do app.',
          '**Algumas etapas ainda precisam de internet, segundo a descrição do Play:** baixar modelos, compras no Google Play, restaurar compras e atualizar o app. A geração das respostas e o processamento dos documentos são descritos como locais.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do desenvolvedor, não resultados de auditoria, e o código-fonte não é publicado. A política de privacidade não menciona documentos, o cofre nem compras, portanto não diz como os arquivos são tratados. A PromptQuorum não inspecionou o tráfego de rede do app.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Código-fonte e licença.** Não foi encontrado repositório público nem texto de licença, então as afirmações de privacidade e de funcionamento offline não podem ser conferidas no código.',
          '**Modelos e mecanismo.** A página menciona um catálogo de modelos locais, mas não cita nenhum modelo, tamanho de download nem mecanismo de inferência; por isso a qualidade das respostas, a velocidade e o hardware necessário são desconhecidos.',
          '**Comportamento na prática.** A PromptQuorum não executou o app, então a precisão das referências de página, o consumo de bateria e os limites da demo grátis são desconhecidos.',
          '**Criptografia do cofre.** A descrição com AES-256-GCM é do próprio desenvolvedor e não pode ser confirmada sem código publicado.',
          '**Opiniões independentes.** Não foram encontradas análises nem discussões de terceiros sobre o app, além das avaliações no Google Play.',
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
            App: '[Private Mind](/pt/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat offline de código aberto com perguntas sobre documentos no aparelho e benchmarks integrados',
          },
          {
            App: '[ToolNeuron](/pt/power-local-llm/toolneuron-review)',
            Plataformas: 'Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'App Android de código aberto com armazenamento criptografado, RAG de documentos e voz',
          },
          {
            App: '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Cliente grátis e de código aberto de LLMs locais para iPhone e Android',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto custa o desbloqueio em outros países?',
            a: 'Em 16 de outubro de 2026, o Google Play mostrava um preço de compra no app por loja: $6.99 (EUA), 6,99 € (Alemanha), 7,49 € (Espanha e França), ¥1,220 (Japão), R$ 9,99 (Brasil), ₩12,000 (Coreia do Sul) e 29.99 SAR (Arábia Saudita); a loja da China não mostrava preço. Os preços podem mudar a qualquer momento.',
          },
          {
            q: 'Ele consegue ler PDFs escaneados?',
            a: 'Não necessariamente: a página avisa que digitalizações feitas só de imagem podem precisar de OCR antes que o Honey consiga ler o texto.',
          },
          {
            q: 'Posso fazer perguntas sobre arquivos do cofre?',
            a: 'Sim, para documentos legíveis compatíveis, segundo a página. Ela acrescenta que o cofre permanece local no aparelho; as notas da versão 3.5.0 mencionam o backup e a restauração criptografados em .hvault.',
          },
          {
            q: 'Ele exige uma conta?',
            a: 'Não: a página informa que não é preciso conta Honey nem assinatura de IA. Uma conta Google no celular é necessária para a compra no Play e para restaurá-la.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Honey LLM - Offline AI oferece chat privado e perguntas sobre documentos em um celular Android, com demo grátis, desbloqueio único e sem conta. As afirmações ainda não podem ser conferidas: o código não é publicado, o modelo e o mecanismo não são citados, e a política de privacidade curta não cobre documentos nem o cofre. Serve para quem usa Android e quer testar a demo grátis antes de pagar; quem precisa de código publicado deve comparar o [Private Mind](/pt/power-local-llm/private-mind-review) ou o [ToolNeuron](/pt/power-local-llm/toolneuron-review), ambos com licença MIT.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Honey LLM - Offline AI no Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) — descrição, notas da versão, versão, seção Segurança dos dados e preço, consultados em 16 de outubro de 2026.',
          '[Política de privacidade](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy) — declarações sobre o tratamento de dados, atualizada pela última vez em fevereiro de 2026, hospedada na conta do desenvolvedor no GitHub.',
          '[Ron-Bee no GitHub](https://github.com/Ron-Bee) — perfil público do desenvolvedor, consultado em 16 de outubro de 2026; não lista site do produto nem repositório deste app.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline de código aberto com perguntas sobre documentos no aparelho.',
          '[Análise do ToolNeuron](/pt/power-local-llm/toolneuron-review) — um app Android de código aberto com armazenamento criptografado e RAG de documentos.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente grátis de LLMs locais para iOS e Android.',
          '[Os melhores apps de LLM local para Android](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo do Android.',
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
    heroImage: '/images/honey-llm-review-hero-ar.webp',
    title: 'مراجعة Honey LLM: دردشة ذكاء اصطناعي دون إنترنت وأسئلة عن المستندات على Android',
    seoTitle: 'مراجعة Honey LLM: دردشة ذكاء اصطناعي ومستندات دون إنترنت',
    intro: 'Honey LLM - Offline AI تطبيق لنظام Android منشور على Google Play باسم المطوّر [Ron.Bee](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)، يدردش مع نموذج ذكاء اصطناعي مخزَّن على الهاتف ويجيب عن الأسئلة حول ملفات PDF وDOCX وTXT وMarkdown. التطبيق متاح على Google Play منذ مارس 2026 ويعمل بالإصدار 3.5.0. تستند هذه المراجعة إلى صفحة التطبيق على Google Play وسياسة الخصوصية الخاصة به، اللتين جرى الاطلاع عليهما في 16 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة Honey LLM: تطبيق Android للدردشة بالذكاء الاصطناعي دون إنترنت والأسئلة عن المستندات، مع نسخة مجانية وفتح لمرة واحدة. شيفرته غير منشورة ولم يُختبر.',
    twitterDescription: 'مراجعة Honey LLM: تطبيق Android للدردشة بالذكاء الاصطناعي دون إنترنت وللأسئلة عن ملفات PDF وDOCX وTXT وMarkdown. نسخة تجريبية مجانية، وفتح لمرة واحدة، والشيفرة غير منشورة.',
    audience: 'مستخدمو Android الباحثون عن تطبيق دردشة ذكاء اصطناعي وأسئلة عن المستندات دون إنترنت، ويريدون معرفة ما تؤكده المصادر وما يدّعيه المطوّر فقط وكم يكلّف فتح التطبيق.',
    readTime: '5 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Honey LLM',
    targetKeywords: [
      'مراجعة honey llm',
      'honey llm android',
      'honey llm ذكاء اصطناعي دون إنترنت',
      'دردشة ذكاء اصطناعي دون إنترنت android',
      'الدردشة مع pdf دون إنترنت android',
      'أسئلة عن المستندات على الجهاز android',
      'com.ronbee.honeyllm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'Android',
    ],
    leadAnswerBlock: '**Honey LLM - Offline AI تطبيق Android يشغّل، بحسب مطوّره، نموذج ذكاء اصطناعي على الهاتف للدردشة الخاصة وللأسئلة عن مستنداتك.** يقدّم نسخة تجريبية مجانية وفتحًا مدفوعًا لمرة واحدة؛ والشيفرة المصدرية غير منشورة، لذا يستند كل ما يُقال عن الخصوصية والعمل دون إنترنت إلى صفحة Google Play وسياسة خصوصية قصيرة.',
    quickAnswerTop: {
      ar: {
        question: 'هل Honey LLM مجاني، وهل يعمل دون إنترنت؟',
        answer: 'فيه نسخة تجريبية محلية مجانية، وتصف الصفحة عملية شراء واحدة داخل التطبيق للاستخدام غير المحدود دون اشتراك. وبحسب المطوّر، تعمل الدردشة ومعالجة المستندات على الهاتف دون اتصال بالإنترنت بعد تنزيل نموذج ذكاء اصطناعي.',
        bullets: [
          'يفحص وضع المبتدئ الهاتف ويوصي بنموذج متوافق، بينما يتيح الوضع المتقدم اختيار النموذج وضبط سلوك الإجابات.',
          'يجيب عن الأسئلة حول ملفات PDF وDOCX وTXT وMarkdown ويعرض مراجع الصفحة أو القسم التي تدعم الإجابة.',
          'لنظام Android فقط، عبر [Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)؛ ولا يُذكر إصدار لـ iPhone أو سطح المكتب أو الويب.',
          'الإصدار 3.5.0، آخر تحديث في 1 أكتوبر 2026 (حالة الصفحة في 16 أكتوبر 2026).',
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
        label: 'ما هو Honey LLM؟',
        anchor: 'what-is-honey-llm',
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
            text: 'Honey LLM تطبيق Android بنسخة تجريبية مجانية وفتح مدفوع لمرة واحدة، يستخدم نموذج ذكاء اصطناعي على الجهاز للدردشة الخاصة والأسئلة عن المستندات، من مطوّر لم تُنشر شيفرته المصدرية.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّت التطبيق وتنزّل نموذج ذكاء اصطناعي إلى الهاتف مرة واحدة، ثم تدردش أو تسأل عن ملفاتك؛ وبحسب المطوّر يبقى النص على الجهاز.',
          },
        ],
        items: [
          'الناشر: مُدرج على Google Play باسم Ron.Bee؛ ولم يُعثر على شركة أو موقع للمنتج أو مستودع للشيفرة المصدرية.',
          'السجل: صدر في 13 مارس 2026، مع أكثر من 10 آلاف تنزيل ومتوسط تقييم 3.7 من 31 تقييمًا على Google Play.',
          'إعلان الخصوصية: يذكر قسم أمان البيانات أنه لا تُجمع بيانات ولا تُشارك مع أطراف ثالثة.',
          'المتطلبات: Android 8.0 أو أحدث؛ ونموذج الذكاء الاصطناعي يُنزَّل بشكل منفصل داخل التطبيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'كل ما هنا مأخوذ من صفحة Google Play وسياسة خصوصية المطوّر؛ ولم تختبر PromptQuorum التطبيق، لذا لم يتأكد العمل دون إنترنت ولا جودة الإجابات ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-honey-llm',
        title: 'ما هو Honey LLM؟',
        content: [
          '**Honey LLM - Offline AI تطبيق Android يجمع دردشة الذكاء الاصطناعي والأسئلة عن المستندات وخزنة ملفات مشفّرة حول نموذج مخزَّن على الهاتف.** وبحسب [صفحته على Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)، تُعالَج المحادثات والمستندات المدعومة على الجهاز بدلًا من إرسالها إلى خدمة ذكاء اصطناعي سحابية.',
          'يظهر التطبيق بأسماء مختلفة قليلًا: عنوانه في Play هو "Honey LLM - Offline AI"، ويسميه الوصف "Honey"، وتسميه سياسة الخصوصية "HoneyLLM Offline AI". وجميعها تشير إلى الحزمة com.ronbee.honeyllm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**ثبّته من Google Play؛ ونموذج الذكاء الاصطناعي تنزيل منفصل داخل التطبيق.**',
        ],
        columns: [
          'المنصة',
          'مكان الحصول عليه',
        ],
        rows: [
          {
            'المنصة': 'Android',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)',
          },
          {
            'المنصة': 'السعر',
            'مكان الحصول عليه': 'نسخة تجريبية مجانية؛ شراء واحد داخل التطبيق بسعر 6.99 دولارًا (المتجر الأمريكي)',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'مكان الحصول عليه': 'لم يُعثر على موقع',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مكان الحصول عليه': 'غير منشورة',
          },
        ],
        note: 'لم يُعثر على موقع مخصص للمنتج: صفحة Play تربط بسياسة الخصوصية فقط، ولا يذكر ملف المطوّر على GitHub موقعًا أو مستودعًا لهذا التطبيق. الإصدار الذي جرى التحقق منه في 16 أكتوبر 2026: 3.5.0، وآخر تحديث في 1 أكتوبر 2026.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من وصف Google Play؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**وضعا المبتدئ والمتقدم.** يقيّم وضع المبتدئ الهاتف ويوصي بنموذج متوافق، ويبدأ الدردشة فورًا إن كان مثبّتًا؛ ويقدّم الوضع المتقدم عدة نماذج محلية مع أدوات للتحكم في أسلوب الإجابة وطولها ودرجة الحرارة وTop P.',
          '**الأسئلة عن المستندات.** يمكن تلخيص ملفات PDF وDOCX وTXT وMarkdown أو سؤالها، مع أسئلة متابعة ومراجع للصفحة أو القسم؛ وصُمم التطبيق ليذكر عندما لا تكون الإجابة في المستندات المحددة.',
          '**خزنة مشفّرة.** يمكن استيراد الملفات إلى تخزين خاص بالتطبيق يوصف بأنه مشفّر بـ AES-256-GCM عبر Android Keystore، والتحقق من سلامتها وتصديرها أو حذفها ونسخها احتياطيًا في ملف .hvault مشفّر.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية ومعالجة البيانات',
        content: [
          '**يعلن قسم أمان البيانات في Google Play "لا تُجمع أي بيانات" و"لا تُشارك أي بيانات مع أطراف ثالثة".** وتذكر سياسة خصوصية المطوّر، المحدّثة آخر مرة في فبراير 2026، أن التطبيق لا يجمع بيانات شخصية ولا يخزّنها ولا ينقلها إلى خوادم خارجية، ولا يطلب الوصول إلى الشبكة إلا لميزات اختيارية مثل تنزيل نماذج الذكاء الاصطناعي أو تحديثات التطبيق.',
          '**بعض الخطوات ما زالت تحتاج إلى الإنترنت بحسب وصف Play:** تنزيل النماذج، والشراء عبر Google Play، واستعادة المشتريات، وتحديثات التطبيق. أما توليد الإجابات ومعالجة المستندات فيُوصفان بأنهما محليان.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المطوّر وليست نتائج تدقيق، والشيفرة المصدرية غير منشورة. ولا تذكر سياسة الخصوصية المستندات ولا الخزنة ولا المشتريات، لذا لا توضح كيفية التعامل مع الملفات. ولم تفحص PromptQuorum حركة الشبكة الخاصة بالتطبيق.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الشيفرة المصدرية والترخيص.** لم يُعثر على مستودع عام ولا على نص ترخيص، لذا لا يمكن التحقق من ادعاءات الخصوصية والعمل دون إنترنت بمقارنتها بالشيفرة.',
          '**النماذج والمحرّك.** تشير الصفحة إلى كتالوج نماذج محلية لكنها لا تسمّي نموذجًا ولا حجم تنزيل ولا محرك استدلال، لذا تبقى جودة الإجابات والسرعة والعتاد المطلوب في الهاتف مجهولة.',
          '**السلوك عمليًا.** لم تشغّل PromptQuorum التطبيق، لذا تبقى دقة مراجع الصفحات واستهلاك البطارية وحدود النسخة التجريبية المجانية مجهولة.',
          '**تشفير الخزنة.** وصف AES-256-GCM صادر عن المطوّر نفسه ولا يمكن تأكيده دون شيفرة منشورة.',
          '**آراء مستقلة.** لم يُعثر على مراجعات أو نقاشات من أطراف ثالثة حول التطبيق سوى تقييماته على Google Play.',
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
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الجوهري': 'دردشة مفتوحة المصدر دون إنترنت مع أسئلة عن المستندات على الجهاز واختبارات أداء مدمجة',
          },
          {
            'التطبيق': '[ToolNeuron](/ar/power-local-llm/toolneuron-review)',
            'المنصات': 'Android',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الجوهري': 'تطبيق Android مفتوح المصدر بتخزين مشفّر وRAG للمستندات والصوت',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الجوهري': 'عميل LLM محلي مجاني ومفتوح المصدر لـ iPhone وAndroid',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم تبلغ تكلفة الفتح في دول أخرى؟',
            a: 'في 16 أكتوبر 2026 عرض Google Play سعرًا واحدًا للشراء داخل التطبيق في كل متجر: 6.99 دولارًا (الولايات المتحدة)، و6,99 € (ألمانيا)، و7,49 € (إسبانيا وفرنسا)، و¥1,220 (اليابان)، وR$ 9,99 (البرازيل)، و₩12,000 (كوريا الجنوبية)، و29.99 SAR (السعودية)؛ ولم يعرض المتجر الصيني سعرًا. وقد تتغير الأسعار في أي وقت.',
          },
          {
            q: 'هل يستطيع قراءة ملفات PDF الممسوحة ضوئيًا؟',
            a: 'ليس بالضرورة: تحذّر الصفحة من أن المسوحات المكوّنة من صور فقط قد تحتاج إلى OCR قبل أن يتمكن Honey من قراءة نصها.',
          },
          {
            q: 'هل يمكنني طرح أسئلة عن الملفات الموجودة في الخزنة؟',
            a: 'نعم للمستندات المقروءة المدعومة بحسب الصفحة، التي تضيف أن الخزنة تبقى محلية على الجهاز؛ وتذكر ملاحظات الإصدار 3.5.0 النسخ الاحتياطي واستعادة ملف .hvault المشفّر.',
          },
          {
            q: 'هل يحتاج إلى حساب؟',
            a: 'لا: تذكر الصفحة أنه لا حاجة إلى حساب Honey ولا إلى اشتراك في الذكاء الاصطناعي. لكن يلزم حساب Google على الهاتف للشراء من Play ولاستعادته.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'يقدّم Honey LLM - Offline AI دردشة خاصة وأسئلة عن المستندات على هاتف Android، مع نسخة تجريبية مجانية وفتح لمرة واحدة ودون حساب. غير أن ادعاءاته لا يمكن التحقق منها بعد: فالشيفرة غير منشورة، ولا يُذكر النموذج ولا المحرّك، ولا تغطي سياسة الخصوصية القصيرة المستندات ولا الخزنة. يناسب مستخدمي Android الراغبين في تجربة النسخة المجانية قبل الدفع؛ ومن يحتاج إلى شيفرة منشورة فليقارن مع [Private Mind](/ar/power-local-llm/private-mind-review) أو [ToolNeuron](/ar/power-local-llm/toolneuron-review)، وكلاهما بترخيص MIT.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Honey LLM - Offline AI على Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) — الوصف وملاحظات الإصدار والإصدار وقسم أمان البيانات والسعر، جرى الاطلاع عليها في 16 أكتوبر 2026.',
          '[سياسة الخصوصية](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy) — تصريحات التعامل مع البيانات، محدّثة آخر مرة في فبراير 2026، ومستضافة في حساب المطوّر على GitHub.',
          '[Ron-Bee على GitHub](https://github.com/Ron-Bee) — الملف العام للمطوّر، جرى الاطلاع عليه في 16 أكتوبر 2026؛ ولا يذكر موقعًا للمنتج ولا مستودعًا لهذا التطبيق.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مفتوح المصدر دون إنترنت مع أسئلة عن المستندات على الجهاز.',
          '[مراجعة ToolNeuron](/ar/power-local-llm/toolneuron-review) — تطبيق Android مفتوح المصدر بتخزين مشفّر وRAG للمستندات.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل LLM محلي مجاني لنظامي iOS وAndroid.',
          '[أفضل تطبيقات LLM المحلية لنظام Android](/ar/power-local-llm/best-local-llm-apps-android-2026) — نظرة أوسع على تطبيقات Android.',
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
    heroImage: '/images/honey-llm-review-hero-zh.webp',
    title: 'Honey LLM 评测：Android 上的离线 AI 聊天与文档问答',
    seoTitle: 'Honey LLM 评测：Android 离线 AI 聊天与文档问答',
    intro: 'Honey LLM - Offline AI 是一款以开发者名 [Ron.Bee](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) 发布在 Google Play 的 Android 应用，用存储在手机上的 AI 模型聊天，并回答关于 PDF、DOCX、TXT 和 Markdown 文件的问题。它自 2026 年 3 月起在 Google Play 上架，当前版本为 3.5.0。本评测依据 Google Play 页面和应用的隐私政策（2026 年 10 月 16 日查阅），PromptQuorum 未对该应用进行实际测试。',
    metaDescription: 'Honey LLM 评测：支持离线 AI 聊天和文档问答的 Android 应用，提供免费试用和一次性解锁。源码未公开，功能尚未经过 PromptQuorum 实测。',
    twitterDescription: 'Honey LLM 评测：Android 离线 AI 聊天，可就 PDF、DOCX、TXT 和 Markdown 文件提问。免费试用、一次性解锁，源码未公开。',
    audience: '想找离线 AI 聊天和文档问答应用的 Android 用户，希望了解来源能证实什么、哪些只是开发者的说法，以及解锁需要多少钱。',
    readTime: '阅读约5分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Honey LLM 评测',
    targetKeywords: [
      'honey llm 评测',
      'honey llm android',
      'honey llm 离线 ai',
      'android 离线 ai 聊天',
      'android 离线 pdf 问答',
      'android 设备端文档问答',
      'com.ronbee.honeyllm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'Android',
    ],
    leadAnswerBlock: '**Honey LLM - Offline AI 是一款 Android 应用，据开发者称，它在手机上运行 AI 模型，用于私密聊天和针对自己文档的提问。** 它提供免费试用和一次性付费解锁；源码未公开，因此关于隐私和离线运行的说法都只依据 Google Play 页面和一份简短的隐私政策。',
    quickAnswerTop: {
      zh: {
        question: 'Honey LLM 免费吗？能离线使用吗？',
        answer: '它有免费的本地试用，页面还描述了一次性应用内购买以无限使用，无需订阅。据开发者称，下载 AI 模型后，聊天和文档处理在手机上运行，无需联网。',
        bullets: [
          '新手模式会检测手机并推荐兼容的模型；高级模式可自选模型并调整回答行为。',
          '可回答关于 PDF、DOCX、TXT 和 Markdown 文件的问题，并显示支持答案的页码或章节引用。',
          '仅限 Android，通过 [Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) 获取；未列出 iPhone、桌面或网页版本。',
          '版本 3.5.0，最近更新于 2026 年 10 月 1 日（2026 年 10 月 16 日页面状态）。',
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
        label: 'Honey LLM 是什么？',
        anchor: 'what-is-honey-llm',
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
            text: 'Honey LLM 是一款提供免费试用和一次性付费解锁的 Android 应用，使用设备端 AI 模型进行私密聊天和文档问答，开发者未公开源码。',
          },
          {
            type: 'plain-terms',
            text: '安装应用，把 AI 模型下载到手机一次，之后就能聊天或就自己的文件提问；据开发者称，文本留在设备上。',
          },
        ],
        items: [
          '发布者：在 Google Play 上显示为 Ron.Bee；未找到公司、产品官网或源码仓库。',
          '履历：2026 年 3 月 13 日发布，Google Play 上有 1 万次以上下载，31 条评分，平均 3.7。',
          '隐私声明：“数据安全”部分称不收集数据，也不与第三方共享。',
          '运行要求：Android 8.0 或更高版本；AI 模型需在应用内另行下载。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这里的内容全部来自 Google Play 页面和开发者的隐私政策；PromptQuorum 未测试该应用，因此离线运行、回答质量和速度均未得到确认。',
          },
        ],
      },
      overview: {
        id: 'what-is-honey-llm',
        title: 'Honey LLM 是什么？',
        content: [
          '**Honey LLM - Offline AI 是一款 Android 应用，围绕存储在手机上的模型，把 AI 聊天、文档问答和加密文件保险库（Vault）结合在一起。** 据其 [Google Play 页面](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)，对话和受支持的文档在设备上处理，而不是发送到云端 AI 服务。',
          '该应用有几种略有不同的叫法：Play 标题是“Honey LLM - Offline AI”，说明文字称其为“Honey”，隐私政策则称其为“HoneyLLM Offline AI”。三者指的都是包名 com.ronbee.honeyllm。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**请从 Google Play 安装；AI 模型需在应用内另行下载。**',
        ],
        columns: [
          '平台',
          '获取渠道',
        ],
        rows: [
          {
            '平台': 'Android',
            '获取渠道': '[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)',
          },
          {
            '平台': '价格',
            '获取渠道': '免费试用；一次性应用内购买 $6.99（美国商店）',
          },
          {
            '平台': '官网',
            '获取渠道': '未找到',
          },
          {
            '平台': '隐私政策',
            '获取渠道': '[隐私政策](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy)',
          },
          {
            '平台': '源代码',
            '获取渠道': '未公开',
          },
        ],
        note: '未找到产品专属官网：Play 页面只链接了隐私政策，开发者的 GitHub 主页也没有列出该应用的网站或仓库。2026 年 10 月 16 日核实的版本：3.5.0，最近更新于 2026 年 10 月 1 日。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下各项均来自 Google Play 的说明文字，均未经独立测试。**',
        ],
        items: [
          '**新手模式与高级模式。** 新手模式评估手机并推荐兼容的模型，若已安装则立即开始聊天；高级模式提供多个本地模型，并可调整回答风格、回答长度、温度和 Top P。',
          '**文档问答。** PDF、DOCX、TXT 和 Markdown 文件可以被总结或提问，支持追问以及页码或章节引用；应用被设计为在所选文档中找不到答案时如实告知。',
          '**加密保险库。** 文件可导入应用私有存储，该存储被描述为通过 Android Keystore 使用 AES-256-GCM 加密，可校验完整性、导出或删除，并备份为加密的 .hvault 文件。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据处理',
        content: [
          '**Google Play 的“数据安全”部分声明“未收集任何数据”和“未与第三方共享数据”。** 开发者的隐私政策（最近更新于 2026 年 2 月）称，应用不会收集、存储或向外部服务器传输个人数据，仅为下载 AI 模型或应用更新等可选功能请求网络访问。',
          '**据 Play 说明，有些步骤仍需联网：** 下载模型、通过 Google Play 购买、恢复购买以及应用更新。生成回答和处理文档则被描述为在本地进行。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是开发者的声明，不是审计结果，且源码未公开。隐私政策没有提到文档、保险库或购买，因此并未说明文件如何处理。PromptQuorum 未检查该应用的网络流量。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**源码与许可证。** 未找到公开仓库或许可证文本，因此无法对照代码核实隐私和离线运行的说法。',
          '**模型与引擎。** 页面提到本地模型目录，但没有指明任何模型、下载大小或推理引擎，因此回答质量、速度和所需的手机硬件均不明。',
          '**实际表现。** PromptQuorum 未运行该应用，因此页码引用的准确性、耗电情况和免费试用的限制均不明。',
          '**保险库加密。** AES-256-GCM 的说法出自开发者本人，在源码未公开的情况下无法确认。',
          '**独立反馈。** 除 Google Play 评分外，未找到第三方对该应用的评测或讨论。',
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
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格／许可证': '免费／MIT',
            '主要区别': '开源离线聊天，带设备端文档问答和内置基准测试',
          },
          {
            '应用': '[ToolNeuron](/zh/power-local-llm/toolneuron-review)',
            '平台': 'Android',
            '价格／许可证': '免费／MIT',
            '主要区别': '开源 Android 应用，带加密存储、文档 RAG 和语音',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格／许可证': '免费／MIT',
            '主要区别': '面向 iPhone 和 Android 的免费开源本地 LLM 客户端',
          },
        ],
        note: '竞品信息变化频繁；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '在其他国家解锁要多少钱？',
            a: '2026 年 10 月 16 日，Google Play 各商店各显示一个应用内购买价格：美国 $6.99、德国 6,99 €、西班牙和法国 7,49 €、日本 ¥1,220、巴西 R$ 9,99、韩国 ₩12,000、沙特阿拉伯 29.99 SAR；中国商店未显示价格。价格随时可能变化。',
          },
          {
            q: '能读取扫描版 PDF 吗？',
            a: '不一定：页面提醒，纯图片的扫描件可能需要先做 OCR，Honey 才能读取其中的文字。',
          },
          {
            q: '可以就保险库里的文件提问吗？',
            a: '据页面所述，对受支持的可读文档可以。页面还说保险库保留在设备本地；3.5.0 版本的更新说明提到了加密的 .hvault 备份与恢复。',
          },
          {
            q: '需要账号吗？',
            a: '不需要：页面表示无需 Honey 账号或 AI 订阅。通过 Play 购买及恢复购买需要手机上登录 Google 账号。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Honey LLM - Offline AI 在 Android 手机上提供私密聊天和文档问答，有免费试用、一次性解锁，且无需账号。但它的说法目前无法核实：源码未公开，没有指明模型和引擎，简短的隐私政策也未涵盖文档和保险库。它适合想先试用免费版再付费的 Android 用户；需要公开代码的读者可对比同为 MIT 许可证的 [Private Mind](/zh/power-local-llm/private-mind-review) 或 [ToolNeuron](/zh/power-local-llm/toolneuron-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 Honey LLM - Offline AI](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) — 说明文字、更新说明、版本、数据安全部分和价格，2026 年 10 月 16 日查阅。',
          '[隐私政策](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy) — 数据处理声明，最近更新于 2026 年 2 月，托管在开发者的 GitHub 账号下。',
          '[GitHub 上的 Ron-Bee](https://github.com/Ron-Bee) — 开发者的公开主页，2026 年 10 月 16 日查阅；其中没有列出该应用的产品官网或仓库。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 带设备端文档问答的开源离线聊天应用。',
          '[ToolNeuron 评测](/zh/power-local-llm/toolneuron-review) — 带加密存储和文档 RAG 的开源 Android 应用。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向 iOS 和 Android 的免费本地 LLM 客户端。',
          '[Android 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用盘点。',
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
    heroImage: '/images/honey-llm-review-hero-ko.webp',
    title: 'Honey LLM 리뷰: Android용 오프라인 AI 채팅과 문서 질의응답',
    seoTitle: 'Honey LLM 리뷰: Android 오프라인 AI 채팅',
    intro: 'Honey LLM - Offline AI는 개발자명 [Ron.Bee](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)로 Google Play에 게시된 Android 앱으로, 휴대폰에 저장된 AI 모델과 채팅하고 PDF, DOCX, TXT, Markdown 파일에 대한 질문에 답합니다. 2026년 3월부터 Google Play에 올라와 있으며 현재 버전은 3.5.0입니다. 이 리뷰는 Google Play 등록 정보와 앱의 개인정보처리방침(2026년 10월 16일 확인)을 바탕으로 하며, PromptQuorum은 앱을 직접 사용해 보지 않았습니다.',
    metaDescription: 'Honey LLM 리뷰: 오프라인 AI 채팅과 문서 질의응답을 제공하는 Android 앱. 무료 체험과 1회 결제 해제 방식이며 소스는 비공개이고 미검증입니다.',
    twitterDescription: 'Honey LLM 리뷰: 오프라인 AI 채팅과 PDF·DOCX·TXT·Markdown 파일 질의응답을 제공하는 Android 앱. 무료 체험, 1회 결제 해제, 소스 비공개.',
    audience: '오프라인 AI 채팅과 문서 질의응답 앱을 찾으며, 출처가 확인해 주는 내용, 개발자의 주장에 그치는 내용, 해제 비용을 알고 싶은 Android 사용자.',
    readTime: '5분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Honey LLM 리뷰',
    targetKeywords: [
      'honey llm 리뷰',
      'honey llm android',
      'honey llm 오프라인 ai',
      'android 오프라인 ai 채팅',
      'android pdf 오프라인 질의응답',
      'android 기기 내 문서 질의응답',
      'com.ronbee.honeyllm',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'Android',
    ],
    leadAnswerBlock: '**Honey LLM - Offline AI는 개발자에 따르면 휴대폰에서 AI 모델을 실행해 비공개 채팅과 사용자의 문서에 대한 질문에 쓰는 Android 앱입니다.** 무료 체험과 1회 결제 해제를 제공하며 소스 코드는 공개되지 않아, 개인정보 보호와 오프라인 동작에 관한 설명은 모두 Google Play 등록 정보와 짧은 개인정보처리방침에 의존합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Honey LLM은 무료이며 오프라인으로 작동하나요?',
        answer: '무료 로컬 체험이 있고, 등록 정보에는 구독 없이 무제한으로 쓸 수 있는 1회 인앱 결제가 설명되어 있습니다. 개발자에 따르면 AI 모델을 내려받은 뒤에는 인터넷 연결 없이 채팅과 문서 처리가 휴대폰에서 이루어집니다.',
        bullets: [
          '초보자 모드는 휴대폰을 점검해 호환 모델을 추천하고, 고급 모드에서는 모델을 직접 고르고 응답 동작을 조정할 수 있습니다.',
          'PDF, DOCX, TXT, Markdown 파일에 대한 질문에 답하고 근거가 되는 페이지 또는 섹션 참조를 보여 줍니다.',
          'Android 전용이며 [Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)에서 받습니다. iPhone, 데스크톱, 웹 버전은 나와 있지 않습니다.',
          '버전 3.5.0, 2026년 10월 1일 마지막 업데이트(2026년 10월 16일 기준 등록 정보).',
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
        label: 'Honey LLM이란?',
        anchor: 'what-is-honey-llm',
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
            text: 'Honey LLM은 무료 체험과 1회 유료 해제를 갖추고 기기 내 AI 모델로 비공개 채팅과 문서 질의응답을 하는 Android 앱이며, 개발자는 소스 코드를 공개하지 않았습니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 AI 모델을 휴대폰에 한 번 내려받으면 채팅하거나 자신의 파일에 대해 질문할 수 있으며, 개발자에 따르면 텍스트는 기기에 머뭅니다.',
          },
        ],
        items: [
          '게시자: Google Play에는 Ron.Bee로 표시되며, 회사, 제품 웹사이트, 소스 코드 저장소는 찾지 못했습니다.',
          '이력: 2026년 3월 13일 출시, Google Play에서 다운로드 1만 회 이상, 평점 31건에 평균 3.7.',
          '개인정보 표시: 데이터 보안 섹션은 수집하는 데이터가 없고 제3자와 공유하지 않는다고 밝힙니다.',
          '요구 사항: Android 8.0 이상이며, AI 모델은 앱 안에서 별도로 내려받습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '여기 담긴 내용은 모두 Google Play 등록 정보와 개발자의 개인정보처리방침에서 나온 것이며, PromptQuorum은 앱을 테스트하지 않았으므로 오프라인 동작, 답변 품질, 속도는 확인되지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-honey-llm',
        title: 'Honey LLM이란?',
        content: [
          '**Honey LLM - Offline AI는 휴대폰에 저장된 모델을 중심으로 AI 채팅, 문서 질의응답, 암호화된 파일 보관함(Vault)을 묶은 Android 앱입니다.** [Google Play 등록 정보](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)에 따르면 대화와 지원되는 문서는 클라우드 AI 서비스로 보내지 않고 기기에서 처리됩니다.',
          '앱은 조금씩 다른 이름으로 불립니다. Play 제목은 "Honey LLM - Offline AI", 설명문은 "Honey", 개인정보처리방침은 "HoneyLLM Offline AI"라고 부르며, 모두 패키지 com.ronbee.honeyllm을 가리킵니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: [
          '**Google Play에서 설치하세요. AI 모델은 앱 안에서 별도로 내려받습니다.**',
        ],
        columns: [
          '플랫폼',
          '구하는 곳',
        ],
        rows: [
          {
            '플랫폼': 'Android',
            '구하는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm)',
          },
          {
            '플랫폼': '가격',
            '구하는 곳': '무료 체험, 1회 인앱 결제 ₩12,000(한국 스토어)',
          },
          {
            '플랫폼': '웹사이트',
            '구하는 곳': '찾지 못함',
          },
          {
            '플랫폼': '개인정보처리방침',
            '구하는 곳': '[개인정보처리방침](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy)',
          },
          {
            '플랫폼': '소스 코드',
            '구하는 곳': '비공개',
          },
        ],
        note: '제품 전용 웹사이트는 찾지 못했습니다. Play 등록 정보는 개인정보처리방침만 링크하고, 개발자의 GitHub 프로필에도 이 앱의 사이트나 저장소가 없습니다. 2026년 10월 16일 확인한 버전: 3.5.0, 2026년 10월 1일 마지막 업데이트.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명문에서 가져온 것이며, 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**초보자 모드와 고급 모드.** 초보자 모드는 휴대폰을 평가해 호환 모델을 추천하고, 이미 설치되어 있으면 바로 채팅을 시작합니다. 고급 모드는 여러 로컬 모델을 제공하고 응답 스타일, 응답 길이, 온도, Top P를 조정할 수 있습니다.',
          '**문서 질의응답.** PDF, DOCX, TXT, Markdown 파일을 요약하거나 질문할 수 있고, 추가 질문과 페이지·섹션 참조를 지원합니다. 선택한 문서에 답이 없으면 그렇게 알려 주도록 설계되었다고 합니다.',
          '**암호화된 Vault.** 파일을 앱 전용 저장소로 가져올 수 있으며, 이 저장소는 Android Keystore 기반 AES-256-GCM으로 암호화된다고 설명됩니다. 무결성 확인, 내보내기, 삭제가 가능하고 암호화된 .hvault 파일로 백업할 수 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 처리',
        content: [
          '**Google Play의 데이터 보안 섹션은 "수집되는 데이터 없음"과 "제3자와 공유되는 데이터 없음"을 밝힙니다.** 개발자의 개인정보처리방침(2026년 2월 마지막 업데이트)은 앱이 개인 데이터를 수집·저장하거나 외부 서버로 전송하지 않으며, AI 모델이나 앱 업데이트 다운로드 같은 선택 기능에만 네트워크 접근을 요청한다고 설명합니다.',
          '**Play 설명에 따르면 일부 단계는 여전히 인터넷이 필요합니다.** 모델 다운로드, Google Play 구매, 구매 복원, 앱 업데이트입니다. 답변 생성과 문서 처리는 로컬에서 이루어진다고 설명됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발자의 선언일 뿐 감사 결과가 아니며 소스 코드도 공개되지 않았습니다. 개인정보처리방침은 문서, Vault, 구매를 언급하지 않아 파일 처리 방식을 설명하지 않습니다. PromptQuorum은 앱의 네트워크 트래픽을 점검하지 않았습니다.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**소스 코드와 라이선스.** 공개 저장소나 라이선스 문서를 찾지 못해, 개인정보 보호와 오프라인 동작에 대한 주장을 코드와 대조할 수 없습니다.',
          '**모델과 엔진.** 등록 정보는 로컬 모델 카탈로그를 언급하지만 모델 이름, 다운로드 크기, 추론 엔진을 밝히지 않아 답변 품질, 속도, 필요한 휴대폰 사양을 알 수 없습니다.',
          '**실제 동작.** PromptQuorum은 앱을 실행하지 않았으므로 페이지 참조의 정확도, 배터리 소모, 무료 체험의 제한을 알 수 없습니다.',
          '**Vault 암호화.** AES-256-GCM 설명은 개발자 본인의 것이며, 코드가 공개되지 않아 확인할 수 없습니다.',
          '**독립적인 평가.** Google Play 평점 외에 제3자의 리뷰나 논의는 찾지 못했습니다.',
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
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '오픈소스 오프라인 채팅, 기기 내 문서 질의응답과 내장 벤치마크 제공',
          },
          {
            '앱': '[ToolNeuron](/ko/power-local-llm/toolneuron-review)',
            '플랫폼': 'Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '암호화 저장소, 문서 RAG, 음성을 갖춘 오픈소스 Android 앱',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': 'iPhone과 Android용 무료 오픈소스 로컬 LLM 클라이언트',
          },
        ],
        note: '경쟁 앱의 세부 정보는 자주 바뀌므로 각 앱의 등록 페이지에서 현재 가격, 라이선스, 플랫폼을 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '다른 나라에서는 해제 비용이 얼마인가요?',
            a: '2026년 10월 16일 기준 Google Play는 스토어마다 인앱 결제 가격 하나를 표시했습니다. 미국 $6.99, 독일 6,99 €, 스페인·프랑스 7,49 €, 일본 ¥1,220, 브라질 R$ 9,99, 한국 ₩12,000, 사우디아라비아 29.99 SAR이며, 중국 스토어에는 가격이 표시되지 않았습니다. 가격은 언제든 바뀔 수 있습니다.',
          },
          {
            q: '스캔한 PDF도 읽을 수 있나요?',
            a: '꼭 그렇지는 않습니다. 등록 정보는 이미지로만 된 스캔본은 Honey가 텍스트를 읽기 전에 OCR이 필요할 수 있다고 안내합니다.',
          },
          {
            q: 'Vault에 있는 파일에 대해 질문할 수 있나요?',
            a: '등록 정보에 따르면 지원되는 읽기 가능한 문서는 가능합니다. Vault는 기기에 로컬로 남는다고도 하며, 버전 3.5.0 릴리스 노트에는 암호화된 .hvault 백업과 복원이 언급되어 있습니다.',
          },
          {
            q: '계정이 필요한가요?',
            a: '아니요. 등록 정보는 Honey 계정이나 AI 구독이 필요 없다고 밝힙니다. Play 결제와 그 복원에는 휴대폰의 Google 계정이 필요합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: 'Honey LLM - Offline AI는 무료 체험, 1회 해제, 계정 불필요라는 조건으로 Android 휴대폰에서 비공개 채팅과 문서 질의응답을 제공합니다. 다만 주장은 아직 확인할 수 없습니다. 소스는 비공개이고, 모델과 엔진도 밝히지 않으며, 짧은 개인정보처리방침은 문서와 Vault를 다루지 않습니다. 결제 전에 무료 체험부터 써 보려는 Android 사용자에게 어울리며, 공개된 코드가 필요하다면 둘 다 MIT 라이선스인 [Private Mind](/ko/power-local-llm/private-mind-review)나 [ToolNeuron](/ko/power-local-llm/toolneuron-review)과 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 Honey LLM - Offline AI](https://play.google.com/store/apps/details?id=com.ronbee.honeyllm) — 설명문, 릴리스 노트, 버전, 데이터 보안 섹션, 가격(2026년 10월 16일 확인).',
          '[개인정보처리방침](https://github.com/Ron-Bee/privacy.html/blob/Hive/privacy%20policy) — 데이터 처리에 관한 설명(2026년 2월 마지막 업데이트), 개발자의 GitHub 계정에 게시되어 있습니다.',
          '[GitHub의 Ron-Bee](https://github.com/Ron-Bee) — 개발자의 공개 프로필(2026년 10월 16일 확인). 이 앱의 제품 웹사이트나 저장소는 나와 있지 않습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — 기기 내 문서 질의응답을 지원하는 오픈소스 오프라인 채팅 앱.',
          '[ToolNeuron 리뷰](/ko/power-local-llm/toolneuron-review) — 암호화 저장소와 문서 RAG를 갖춘 오픈소스 Android 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 로컬 LLM 클라이언트.',
          '[Android용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 앱을 더 넓게 다룬 비교 글.',
        ],
      },
    },
  },
}
