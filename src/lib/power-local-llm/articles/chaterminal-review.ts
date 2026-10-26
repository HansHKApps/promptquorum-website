// Mobile LM Server (Chaterminal) Review: Android App for On-Device Models and a Phone-Hosted API
// Slug: chaterminal-review
// Companion to: ollitert-review, pocketpal-ai-review, google-ai-edge-gallery-review, private-mind-review,
// best-local-llm-apps-android-2026
// Sources: Google Play listing com.chaterminal.mobilellm (read 2026-10-26: v1.1.10, updated 2026-10-22), the privacy policy
// the listing links (ledger.chaterminal.com/mobilellm/index.html, a JavaScript page read from its bundled script, "Effective:
// APRIL 2026"). The developer website chaterminal.com returned an AccessDenied error (HTTP 403) on 2026-10-26. No source
// repository was found. No hands-on use, no benchmarks; the request came from the site owner, not from the developer: no maker comment.
// Last upstream update 2026-10-22 (< 90 days) => no stale warning.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chaterminal-review-hero-en.webp',
    title: 'Mobile LM Server Review: Android App for Local Models and a Phone-Hosted API',
    seoTitle: 'Mobile LM Server Review: Local Models and API on Android',
    intro:
      'Mobile LM Server (Google Play package com.chaterminal.mobilellm, developer account "chaterminal") is an Android app that, according to its listing, runs GGUF and LiteRT-LM models on the phone and exposes them through OpenAI-compatible and Ollama-compatible endpoints. It contains ads and in-app purchases. This review is based on the Google Play listing and the privacy policy it links, as checked on 26 October 2026; it involved no hands-on use.',
    metaDescription:
      'Mobile LM Server review: Android app that says it runs GGUF and LiteRT-LM models offline and serves an OpenAI-compatible API. Ads, purchases and unverified claims.',
    twitterDescription:
      'Mobile LM Server review: an Android app that says it runs GGUF and LiteRT-LM models on the phone and serves an OpenAI-compatible API. What the Google Play listing and privacy policy claim, and what is unverified.',
    audience:
      'Android users and developers who want to run models on a phone or use it as a local API endpoint, and who need to know what the listing and policy confirm, what they do not, and what the app collects.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Mobile LM Server review',
    targetKeywords: [
      'mobile lm server review',
      'chaterminal mobile llm',
      'com.chaterminal.mobilellm',
      'android openai compatible api server phone',
      'run gguf models on android',
      'litert-lm llama.cpp android app',
      'mobile lm server vs ollitert',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Phi', 'Mistral', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Mobile LM Server is a closed-source Android app that says it runs GGUF and LiteRT-LM models offline and turns the phone into an OpenAI-compatible and Ollama-compatible API server.** It is free to install but contains ads and in-app purchases, and its privacy policy lists ad-related data collection alongside the "fully local" pitch.',
    quickAnswerTop: {
      en: {
        question: 'Does Mobile LM Server run models offline, and is it free?',
        answer:
          'According to its listing, yes for inference: models run on the phone with no account, and the install is free. The same listing labels the app as containing ads and in-app purchases, and neither the offline claim nor the API was tested here.',
        bullets: [
          'Free install on [Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm), for Android 7.0 or later.',
          'Two engines named in the listing: llama.cpp for GGUF files and LiteRT-LM.',
          'Optional extras: cloud routing for long contexts and online search in the built-in chat.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Mobile LM Server?', anchor: 'what-is-mobile-lm-server' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy, Ads and Network Use', anchor: 'privacy' },
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
            text: 'Mobile LM Server is a closed-source Android app that, according to its developer, runs open-weight models on the phone with llama.cpp or LiteRT-LM and offers OpenAI-style and Ollama-style API endpoints to other devices.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from Google Play, load a model and either chat in the app or point a desktop tool at the phone. Hybrid cloud routing and online search are optional extras, and ads are part of the free version.',
          },
        ],
        items: [
          'Developer: a developer account named "chaterminal" with an address in China on the listing; the developer website returned an error when checked.',
          'Reach: Google Play shows 1K+ downloads and a 3.8 average from 45 ratings, so the public track record is small.',
          'Activity: version 1.1.10 was updated on 22 October 2026, so the app is under active development.',
          'Platform: Android 7.0 or later through Google Play only; no iPhone, desktop or web build was found.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play listing and the privacy policy it links, checked on 26 October 2026. PromptQuorum did not install the app, run a model, call the API or measure speed, battery use or network traffic.',
          },
        ],
      },
      overview: {
        id: 'what-is-mobile-lm-server',
        title: 'What Is Mobile LM Server?',
        content: [
          '**Mobile LM Server is an Android app that, according to its Google Play listing, runs open-weight language models directly on the phone and can act as a small inference server for other devices.** The listing names two engines, LiteRT-LM and llama.cpp (GGUF files), and lists Llama, Gemma, Phi, Mistral, Qwen and DeepSeek distilled models as supported families. It also lists a built-in chat, prompt compression, device monitoring (GPU, memory, speed, temperature) and optional "hybrid AI routing" that can send long queries to cloud models.',
          'The Play title is "Mobile LM Server - Local AI" and the description calls it "Mobile LLM Server"; the developer account is "chaterminal". It is unrelated to the open-source GitHub project named chaterminal (a terminal chat tool) and is a different app from [OlliteRT](/power-local-llm/ollitert-review), which also serves a phone-hosted API.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Mobile LM Server is installed from Google Play like any other Android app; no sideloading or terminal is involved.** The developer\'s website link on the listing returned an access-denied error on 26 October 2026, so the privacy policy page is linked separately below.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) (free install with ads and in-app purchases, Android 7.0 or later)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[chaterminal.com](https://chaterminal.com/) (linked from the listing; returned an access-denied error on 26 October 2026)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Privacy policy](https://ledger.chaterminal.com/mobilellm/index.html) (page effective April 2026)',
          },
        ],
        note: 'Version reviewed: 1.1.10, shown on Google Play as updated on 22 October 2026. The only release note shown says it fixed online search in the built-in chat for GGUF models.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description or its release note; none was tested.**',
        ],
        items: [
          '**Local inference.** Models run on the device through LiteRT-LM or llama.cpp; the description says no internet connection, login or data sharing is needed for local inference.',
          '**API server.** The phone can expose OpenAI-style and Ollama-style endpoints so desktop tools, bots and scripts can use it. The privacy policy describes this PC-to-phone traffic as local network (LAN) communication.',
          '**Built-in chat.** A chat screen for the loaded model; the 1.1.10 release note adds online search to it for GGUF models.',
          '**Hybrid routing.** When local context limits are reached, queries can optionally be offloaded to cloud models; the listing does not say which providers or how they are configured.',
          '**Prompt compression and monitoring.** Long system prompts and tool descriptions are compressed before execution, and the app shows GPU use, memory, generation speed and temperature.',
        ],
        note: 'The listing and the policy are the developer\'s own statements. The installed build is the final authority.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, Ads and Network Use',
        content: [
          '**According to the privacy policy, prompts, model output and conversations are never uploaded to any server, but the app does collect usage data for ads.** The policy (effective April 2026) lists app-launch, model-download and model-start events, crash logs and approximate, city-level location, used for ad serving, content optimization and service improvement.',
          'The Google Play Data safety section reads differently: it says "No data collected" and also lists location among data types the app may share with third parties, notes that data is encrypted in transit and states that data cannot be deleted. The listing carries "Contains ads" and "In-app purchases" labels; the description does not say what the purchases unlock. One reviewer wrote in September 2026 that hosting the API required watching an ad, and the developer replied that ads cannot be removed for now and that the latest version can save models on the device. Both statements are the parties\' own and were not tested here.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source, so none of these claims can be checked in code, and PromptQuorum has not audited network traffic or permissions. Anyone handling confidential prompts should verify behavior on their own device first.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Android developers who want to try a phone as a local API endpoint.** The listing offers OpenAI-style and Ollama-style endpoints with two engines.',
          '**GGUF users who want a phone-side runner.** llama.cpp support is named in the listing; whether your model file loads is untested.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** Speed, battery use, heat and answer quality were not measured; nothing in this review comes from running the app.',
          '**The models.** The listing names families but not specific models, sizes or download sources; one reviewer mentions large downloads from Hugging Face.',
          '**The API.** Which endpoints work, whether authentication exists and how ad prompts affect the server were not tested.',
          '**Hybrid routing.** Which cloud providers receive data when routing is on, and what is sent, is not described.',
          '**Hardware needs.** No RAM or storage requirement is stated; the only stated floor is Android 7.0.',
          '**License and source code.** No repository was found; the policy footer says "Open Source Project" but links none, so the app is treated as closed source.',
          '**Permissions.** The permission list was not inspected.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[OlliteRT](/power-local-llm/ollitert-review)',
            'Platforms': 'Android',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Open-source phone-hosted OpenAI-compatible server built on LiteRT-LM',
          },
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
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source offline chat with on-device document Q&A',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is "Chaterminal" the app or the developer?',
            a: 'Chaterminal is the developer account name on Google Play; the app is titled Mobile LM Server - Local AI and uses the package name com.chaterminal.mobilellm.',
          },
          {
            q: 'Is Mobile LM Server open source?',
            a: 'No repository was found. The privacy policy footer calls it an open-source project but links no code, so this review treats it as closed source until a repository is published.',
          },
          {
            q: 'Does it work on iPhone or desktop?',
            a: 'No such build was found; the listing is Android only.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Mobile LM Server is an actively updated Android app that combines two inference engines, a built-in chat and an OpenAI-style API in one free install, but the offline claim and the API are untested here, and the free version carries ads and a privacy policy that lists ad-related data collection. It suits developers who want to experiment and accept a closed-source build from a small developer whose website returned an error. Anyone who wants an open-source server should compare [OlliteRT](/power-local-llm/ollitert-review); for plain chat, see [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Mobile LM Server on Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) — description, version, update date, release note, labels, Data safety section and reviews, checked 26 October 2026.',
          '[Mobile LM Server privacy policy](https://ledger.chaterminal.com/mobilellm/index.html) — data processing, collected information and LAN communication; page effective April 2026.',
          '[chaterminal.com](https://chaterminal.com/) — the developer website linked from the listing; it returned an access-denied error on 26 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[OlliteRT Review](/power-local-llm/ollitert-review) — an open-source Android app that serves an OpenAI-compatible API from the phone.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s open-source on-device AI app.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mobile LM Server Review: Android App for Local Models and a Phone-Hosted API',
      description:
        'Mobile LM Server review: an Android app that says it runs GGUF and LiteRT-LM models on the phone and serves an OpenAI-compatible API. What the Google Play listing and privacy policy claim, and what is unverified.',
      url: 'https://www.promptquorum.com/power-local-llm/chaterminal-review',
      inLanguage: 'en',
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android users and developers evaluating an on-device model app with an API server' },
      about: [
        { '@type': 'Thing', name: 'Mobile LM Server' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Android' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/chaterminal-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Mobile LM Server Review', item: 'https://www.promptquorum.com/power-local-llm/chaterminal-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chaterminal-review-hero-de.webp',
    title: 'Mobile-LM-Server-Rezension: Android-App für lokale Modelle und eine API auf dem Telefon',
    seoTitle: 'Mobile-LM-Server-Rezension: Lokale Modelle und API',
    intro:
      'Mobile LM Server (Google-Play-Paket com.chaterminal.mobilellm, Entwicklerkonto „chaterminal“) ist eine Android-App, die laut ihrem Eintrag GGUF- und LiteRT-LM-Modelle auf dem Telefon ausführt und über OpenAI-kompatible und Ollama-kompatible Endpunkte bereitstellt. Sie enthält Werbung und In-App-Käufe. Diese Rezension stützt sich auf den Google-Play-Eintrag und die dort verlinkte Datenschutzerklärung, geprüft am 26. Oktober 2026; die App wurde nicht praktisch ausprobiert.',
    metaDescription:
      'Mobile-LM-Server-Rezension: Android-App, die laut Entwickler GGUF- und LiteRT-LM-Modelle offline ausführt, mit OpenAI-kompatibler API. Werbung, ungeprüft.',
    twitterDescription:
      'Mobile-LM-Server-Rezension: eine Android-App, die laut Entwickler GGUF- und LiteRT-LM-Modelle auf dem Telefon ausführt und eine OpenAI-kompatible API bereitstellt. Was der Google-Play-Eintrag und die Datenschutzerklärung behaupten und was ungeprüft ist.',
    audience:
      'Android-Nutzer und Entwickler, die Modelle auf einem Telefon ausführen oder es als lokalen API-Endpunkt nutzen möchten und wissen müssen, was der Eintrag und die Datenschutzerklärung bestätigen, was nicht und was die App erhebt.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Mobile LM Server Rezension',
    targetKeywords: [
      'mobile lm server rezension',
      'chaterminal mobile llm',
      'com.chaterminal.mobilellm',
      'android openai-kompatibler api-server auf dem handy',
      'gguf-modelle auf android ausführen',
      'litert-lm llama.cpp android app',
      'mobile lm server vs ollitert',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Phi', 'Mistral', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Mobile LM Server ist eine nicht quelloffene Android-App, die laut eigener Angabe GGUF- und LiteRT-LM-Modelle offline ausführt und das Telefon in einen OpenAI-kompatiblen und Ollama-kompatiblen API-Server verwandelt.** Die Installation ist kostenlos, enthält aber Werbung und In-App-Käufe, und die Datenschutzerklärung führt werbebezogene Datenerhebung neben dem Versprechen „vollständig lokal“ auf.',
    quickAnswerTop: {
      de: {
        question: 'Führt Mobile LM Server Modelle offline aus, und ist die App kostenlos?',
        answer:
          'Laut Eintrag ja für die Inferenz: Die Modelle laufen auf dem Telefon ohne Konto, und die Installation ist kostenlos. Derselbe Eintrag kennzeichnet die App als werbefinanziert mit In-App-Käufen; weder die Offline-Angabe noch die API wurden hier getestet.',
        bullets: [
          'Kostenlose Installation bei [Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm), für Android 7.0 oder neuer.',
          'Zwei im Eintrag genannte Engines: llama.cpp für GGUF-Dateien und LiteRT-LM.',
          'Optionale Extras: Cloud-Routing für lange Kontexte und Online-Suche im integrierten Chat.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Mobile LM Server?', anchor: 'what-is-mobile-lm-server' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz, Werbung und Netzwerknutzung', anchor: 'privacy' },
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
            text: 'Mobile LM Server ist eine nicht quelloffene Android-App, die laut ihrem Entwickler Open-Weight-Modelle mit llama.cpp oder LiteRT-LM auf dem Telefon ausführt und anderen Geräten Endpunkte im OpenAI- und Ollama-Stil anbietet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App über Google Play, laden ein Modell und chatten entweder in der App oder richten ein Desktop-Tool auf das Telefon. Hybrides Cloud-Routing und Online-Suche sind optionale Extras, und Werbung gehört zur kostenlosen Version.',
          },
        ],
        items: [
          'Entwickler: ein Entwicklerkonto namens „chaterminal“ mit einer Adresse in China im Eintrag; die Website des Entwicklers lieferte bei der Prüfung einen Fehler.',
          'Reichweite: Google Play zeigt 1K+ Downloads und eine durchschnittliche Bewertung von 3.8 bei 45 Bewertungen; die öffentliche Erfolgsbilanz ist also klein.',
          'Aktivität: Version 1.1.10 wurde am 22. Oktober 2026 aktualisiert, die App wird also aktiv weiterentwickelt.',
          'Plattform: Android 7.0 oder neuer, nur über Google Play; ein Build für iPhone, Desktop oder Web wurde nicht gefunden.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den Google-Play-Eintrag und die dort verlinkte Datenschutzerklärung, geprüft am 26. Oktober 2026. PromptQuorum hat die App nicht installiert, kein Modell ausgeführt, die API nicht aufgerufen und weder Geschwindigkeit, Akkuverbrauch noch Netzwerkverkehr gemessen.',
          },
        ],
      },
      overview: {
        id: 'what-is-mobile-lm-server',
        title: 'Was ist Mobile LM Server?',
        content: [
          '**Mobile LM Server ist eine Android-App, die laut ihrem Google-Play-Eintrag Open-Weight-Sprachmodelle direkt auf dem Telefon ausführt und als kleiner Inferenzserver für andere Geräte dienen kann.** Der Eintrag nennt zwei Engines, LiteRT-LM und llama.cpp (GGUF-Dateien), und führt Llama, Gemma, Phi, Mistral, Qwen und destillierte DeepSeek-Modelle als unterstützte Familien auf. Außerdem nennt er einen integrierten Chat, Prompt-Komprimierung, Geräteüberwachung (GPU, Speicher, Geschwindigkeit, Temperatur) und optionales „Hybrid-AI-Routing“, das lange Anfragen an Cloud-Modelle senden kann.',
          'Der Play-Titel lautet „Mobile LM Server - Local AI“, die Beschreibung spricht von „Mobile LLM Server“; das Entwicklerkonto heißt „chaterminal“. Die App hat nichts mit dem quelloffenen GitHub-Projekt namens chaterminal (einem Terminal-Chat-Tool) zu tun und ist eine andere App als [OlliteRT](/de/power-local-llm/ollitert-review), die ebenfalls eine auf dem Telefon gehostete API bereitstellt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Mobile LM Server wird wie jede andere Android-App über Google Play installiert; Sideloading oder Terminal sind nicht nötig.** Der Website-Link des Entwicklers im Eintrag lieferte am 26. Oktober 2026 einen Zugriff-verweigert-Fehler, daher ist die Datenschutzerklärung unten separat verlinkt.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) (kostenlose Installation mit Werbung und In-App-Käufen, Android 7.0 oder neuer)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[chaterminal.com](https://chaterminal.com/) (im Eintrag verlinkt; lieferte am 26. Oktober 2026 einen Zugriff-verweigert-Fehler)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung](https://ledger.chaterminal.com/mobilellm/index.html) (Seite gültig ab April 2026)',
          },
        ],
        note: 'Geprüfte Version: 1.1.10, bei Google Play als aktualisiert am 22. Oktober 2026 angezeigt. Der einzige angezeigte Hinweis zur Version besagt, dass die Online-Suche im integrierten Chat für GGUF-Modelle korrigiert wurde.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Google-Play-Beschreibung oder ihrem Versionshinweis; keiner wurde getestet.**',
        ],
        items: [
          '**Lokale Inferenz.** Die Modelle laufen auf dem Gerät über LiteRT-LM oder llama.cpp; laut Beschreibung sind für die lokale Inferenz keine Internetverbindung, keine Anmeldung und keine Datenweitergabe nötig.',
          '**API-Server.** Das Telefon kann Endpunkte im OpenAI- und Ollama-Stil bereitstellen, damit Desktop-Tools, Bots und Skripte es nutzen können. Die Datenschutzerklärung beschreibt diesen Datenverkehr zwischen PC und Telefon als Kommunikation im lokalen Netzwerk (LAN).',
          '**Integrierter Chat.** Ein Chat-Bildschirm für das geladene Modell; der Versionshinweis zu 1.1.10 ergänzt dort die Online-Suche für GGUF-Modelle.',
          '**Hybrides Routing.** Wenn die lokalen Kontextgrenzen erreicht sind, können Anfragen optional an Cloud-Modelle ausgelagert werden; der Eintrag nennt weder die Anbieter noch deren Konfiguration.',
          '**Prompt-Komprimierung und Überwachung.** Lange System-Prompts und Tool-Beschreibungen werden vor der Ausführung komprimiert, und die App zeigt GPU-Auslastung, Speicher, Generierungsgeschwindigkeit und Temperatur an.',
        ],
        note: 'Eintrag und Datenschutzerklärung sind Aussagen des Entwicklers selbst. Maßgeblich ist letztlich die installierte Version.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Werbung und Netzwerknutzung',
        content: [
          '**Laut Datenschutzerklärung werden Prompts, Modellausgaben und Unterhaltungen nie auf einen Server hochgeladen, die App erhebt aber Nutzungsdaten für Werbung.** Die Erklärung (gültig ab April 2026) nennt App-Start-, Modell-Download- und Modellstart-Ereignisse, Absturzprotokolle und einen ungefähren Standort auf Stadtebene, verwendet für die Auslieferung von Werbung, die Optimierung von Inhalten und die Verbesserung des Dienstes.',
          'Der Abschnitt „Datensicherheit“ (Data safety) bei Google Play liest sich anders: Er sagt „Keine Daten erhoben“, nennt aber zugleich den Standort unter den Datentypen, die die App an Dritte weitergeben kann, vermerkt, dass Daten bei der Übertragung verschlüsselt werden, und gibt an, dass Daten nicht gelöscht werden können. Der Eintrag trägt die Kennzeichnungen „Enthält Werbung“ und „In-App-Käufe“; die Beschreibung sagt nicht, was die Käufe freischalten. Ein Nutzer schrieb im September 2026, für das Hosten der API müsse man sich Werbung ansehen, und der Entwickler antwortete, dass Werbung vorerst nicht entfernt werden könne und die neueste Version Modelle auf dem Gerät speichern könne. Beide Aussagen stammen von den Beteiligten selbst und wurden hier nicht getestet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App ist nicht quelloffen, daher lässt sich keine dieser Angaben im Code prüfen, und PromptQuorum hat Netzwerkverkehr und Berechtigungen nicht geprüft. Wer vertrauliche Prompts verarbeitet, sollte das Verhalten zuerst auf dem eigenen Gerät überprüfen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Android-Entwickler, die ein Telefon als lokalen API-Endpunkt ausprobieren möchten.** Der Eintrag bietet Endpunkte im OpenAI- und Ollama-Stil mit zwei Engines.',
          '**GGUF-Nutzer, die einen Runner auf dem Telefon wünschen.** Der Eintrag nennt die Unterstützung für llama.cpp; ob Ihre Modelldatei geladen wird, ist ungetestet.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praktische Leistung.** Geschwindigkeit, Akkuverbrauch, Wärmeentwicklung und Antwortqualität wurden nicht gemessen; nichts in dieser Rezension stammt aus der Ausführung der App.',
          '**Die Modelle.** Der Eintrag nennt Familien, aber keine konkreten Modelle, Größen oder Download-Quellen; ein Nutzer erwähnt große Downloads von Hugging Face.',
          '**Die API.** Welche Endpunkte funktionieren, ob es eine Authentifizierung gibt und wie sich Werbeaufforderungen auf den Server auswirken, wurde nicht getestet.',
          '**Hybrides Routing.** Welche Cloud-Anbieter bei aktiviertem Routing Daten erhalten und was gesendet wird, ist nicht beschrieben.',
          '**Hardware-Anforderungen.** Eine Anforderung an RAM oder Speicher wird nicht genannt; die einzige angegebene Untergrenze ist Android 7.0.',
          '**Lizenz und Quellcode.** Es wurde kein Repository gefunden; die Fußzeile der Datenschutzerklärung nennt „Open Source Project“, verlinkt aber keines, daher gilt die App als nicht quelloffen.',
          '**Berechtigungen.** Die Liste der Berechtigungen wurde nicht geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[OlliteRT](/de/power-local-llm/ollitert-review)',
            'Plattformen': 'Android',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Quelloffener, auf dem Telefon gehosteter OpenAI-kompatibler Server auf Basis von LiteRT-LM',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener On-Device-Chat-Client mit eigener Modellbibliothek',
          },
          {
            'App': '[Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Quelloffene On-Device-App vom AI-Edge-Team von Google',
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
            q: 'Ist „Chaterminal“ die App oder der Entwickler?',
            a: 'Chaterminal ist der Name des Entwicklerkontos bei Google Play; die App heißt Mobile LM Server - Local AI und verwendet den Paketnamen com.chaterminal.mobilellm.',
          },
          {
            q: 'Ist Mobile LM Server quelloffen?',
            a: 'Es wurde kein Repository gefunden. Die Fußzeile der Datenschutzerklärung nennt die App ein Open-Source-Projekt, verlinkt aber keinen Code; diese Rezension behandelt sie daher als nicht quelloffen, bis ein Repository veröffentlicht wird.',
          },
          {
            q: 'Läuft die App auf dem iPhone oder auf dem Desktop?',
            a: 'Ein solcher Build wurde nicht gefunden; der Eintrag gilt nur für Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Mobile LM Server ist eine aktiv aktualisierte Android-App, die zwei Inferenz-Engines, einen integrierten Chat und eine API im OpenAI-Stil in einer kostenlosen Installation vereint, doch die Offline-Angabe und die API sind hier ungetestet, und die kostenlose Version enthält Werbung sowie eine Datenschutzerklärung, die werbebezogene Datenerhebung nennt. Sie eignet sich für Entwickler, die experimentieren möchten und einen nicht quelloffenen Build eines kleinen Entwicklers akzeptieren, dessen Website einen Fehler lieferte. Wer einen quelloffenen Server möchte, sollte [OlliteRT](/de/power-local-llm/ollitert-review) vergleichen; für einfachen Chat siehe [PocketPal AI](/de/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Mobile LM Server bei Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) — Beschreibung, Version, Aktualisierungsdatum, Versionshinweis, Kennzeichnungen, Abschnitt „Datensicherheit“ und Bewertungen, geprüft am 26. Oktober 2026.',
          '[Datenschutzerklärung von Mobile LM Server](https://ledger.chaterminal.com/mobilellm/index.html) — Datenverarbeitung, erhobene Informationen und LAN-Kommunikation; Seite gültig ab April 2026.',
          '[chaterminal.com](https://chaterminal.com/) — die im Eintrag verlinkte Website des Entwicklers; sie lieferte am 26. Oktober 2026 einen Zugriff-verweigert-Fehler.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[OlliteRT-Rezension](/de/power-local-llm/ollitert-review) — eine quelloffene Android-App, die vom Telefon aus eine OpenAI-kompatible API bereitstellt.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.',
          '[Google-AI-Edge-Gallery-Rezension](/de/power-local-llm/google-ai-edge-gallery-review) — Googles quelloffene On-Device-KI-App.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App für iPhone und Android.',
          '[Die besten lokalen LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chaterminal-review-hero-es.webp',
    title: 'Análisis de Mobile LM Server: app de Android para modelos locales y una API alojada en el teléfono',
    seoTitle: 'Análisis de Mobile LM Server: modelos y API en Android',
    intro:
      'Mobile LM Server (paquete de Google Play com.chaterminal.mobilellm, cuenta de desarrollador «chaterminal») es una app de Android que, según su ficha, ejecuta modelos GGUF y LiteRT-LM en el teléfono y los expone mediante endpoints compatibles con OpenAI y con Ollama. Contiene anuncios y compras dentro de la app. Este análisis se basa en la ficha de Google Play y en la política de privacidad que esta enlaza, consultadas el 26 de octubre de 2026; no implicó ningún uso práctico.',
    metaDescription:
      'Análisis de Mobile LM Server: app de Android que dice ejecutar modelos GGUF y LiteRT-LM offline con API compatible con OpenAI. Con anuncios; sin verificar.',
    twitterDescription:
      'Análisis de Mobile LM Server: una app de Android que dice ejecutar modelos GGUF y LiteRT-LM en el teléfono y ofrecer una API compatible con OpenAI. Lo que afirman la ficha de Google Play y la política de privacidad, y lo que no está verificado.',
    audience:
      'Usuarios y desarrolladores de Android que quieren ejecutar modelos en un teléfono o usarlo como endpoint de API local, y que necesitan saber qué confirman la ficha y la política, qué no confirman y qué datos recopila la app.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de Mobile LM Server',
    targetKeywords: [
      'opiniones mobile lm server',
      'chaterminal mobile llm',
      'com.chaterminal.mobilellm',
      'servidor de api compatible con openai en el teléfono android',
      'ejecutar modelos gguf en android',
      'app android litert-lm llama.cpp',
      'mobile lm server vs ollitert',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Phi', 'Mistral', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Mobile LM Server es una app de Android de código cerrado que dice ejecutar modelos GGUF y LiteRT-LM sin conexión y convertir el teléfono en un servidor de API compatible con OpenAI y con Ollama.** La instalación es gratuita, pero contiene anuncios y compras dentro de la app, y su política de privacidad enumera la recopilación de datos relacionada con los anuncios junto al mensaje de «totalmente local».',
    quickAnswerTop: {
      es: {
        question: '¿Mobile LM Server ejecuta modelos sin conexión y es gratuita?',
        answer:
          'Según su ficha, sí para la inferencia: los modelos se ejecutan en el teléfono sin cuenta y la instalación es gratuita. La misma ficha etiqueta la app como con anuncios y compras dentro de la app, y aquí no se probó ni la afirmación del uso sin conexión ni la API.',
        bullets: [
          'Instalación gratuita en [Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm), para Android 7.0 o posterior.',
          'Dos motores nombrados en la ficha: llama.cpp para archivos GGUF y LiteRT-LM.',
          'Extras opcionales: enrutamiento a la nube para contextos largos y búsqueda en línea en el chat integrado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Mobile LM Server?', anchor: 'what-is-mobile-lm-server' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad, anuncios y uso de la red', anchor: 'privacy' },
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
            text: 'Mobile LM Server es una app de Android de código cerrado que, según su desarrollador, ejecuta modelos de pesos abiertos en el teléfono con llama.cpp o LiteRT-LM y ofrece a otros dispositivos endpoints de API al estilo de OpenAI y de Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas desde Google Play, cargas un modelo y chateas en la app o apuntas una herramienta de escritorio al teléfono. El enrutamiento híbrido a la nube y la búsqueda en línea son extras opcionales, y los anuncios forman parte de la versión gratuita.',
          },
        ],
        items: [
          'Desarrollador: una cuenta de desarrollador llamada «chaterminal» con una dirección en China en la ficha; el sitio web del desarrollador devolvió un error al comprobarlo.',
          'Alcance: Google Play muestra más de 1K descargas y una valoración media de 3.8 con 45 valoraciones, por lo que el historial público es modesto.',
          'Actividad: la versión 1.1.10 se actualizó el 22 de octubre de 2026, por lo que la app está en desarrollo activo.',
          'Plataforma: Android 7.0 o posterior solo a través de Google Play; no se encontró ninguna versión para iPhone, escritorio ni web.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en la ficha de Google Play y en la política de privacidad que esta enlaza, consultadas el 26 de octubre de 2026. PromptQuorum no instaló la app, no ejecutó ningún modelo, no llamó a la API ni midió la velocidad, el consumo de batería o el tráfico de red.',
          },
        ],
      },
      overview: {
        id: 'what-is-mobile-lm-server',
        title: '¿Qué es Mobile LM Server?',
        content: [
          '**Mobile LM Server es una app de Android que, según su ficha de Google Play, ejecuta modelos de lenguaje de pesos abiertos directamente en el teléfono y puede actuar como un pequeño servidor de inferencia para otros dispositivos.** La ficha nombra dos motores, LiteRT-LM y llama.cpp (archivos GGUF), y enumera como familias compatibles Llama, Gemma, Phi, Mistral, Qwen y los modelos destilados de DeepSeek. También menciona un chat integrado, compresión de prompts, monitorización del dispositivo (GPU, memoria, velocidad, temperatura) y un «hybrid AI routing» opcional que puede enviar consultas largas a modelos en la nube.',
          'El título en Play es «Mobile LM Server - Local AI» y la descripción la llama «Mobile LLM Server»; la cuenta de desarrollador es «chaterminal». No guarda relación con el proyecto de código abierto de GitHub llamado chaterminal (una herramienta de chat para terminal) y es una app distinta de [OlliteRT](/es/power-local-llm/ollitert-review), que también ofrece una API alojada en el teléfono.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**Mobile LM Server se instala desde Google Play como cualquier otra app de Android; no hay instalación manual ni terminal.** El enlace al sitio web del desarrollador en la ficha devolvió un error de acceso denegado el 26 de octubre de 2026, así que la página de la política de privacidad se enlaza por separado más abajo.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) (instalación gratuita con anuncios y compras dentro de la app, Android 7.0 o posterior)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[chaterminal.com](https://chaterminal.com/) (enlazado desde la ficha; devolvió un error de acceso denegado el 26 de octubre de 2026)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Política de privacidad](https://ledger.chaterminal.com/mobilellm/index.html) (página vigente desde abril de 2026)',
          },
        ],
        note: 'Versión analizada: 1.1.10, que Google Play muestra como actualizada el 22 de octubre de 2026. La única nota de la versión que aparece dice que corrigió la búsqueda en línea en el chat integrado para los modelos GGUF.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de la descripción de Google Play o de su nota de la versión; ninguno se probó.**',
        ],
        items: [
          '**Inferencia local.** Los modelos se ejecutan en el dispositivo mediante LiteRT-LM o llama.cpp; la descripción dice que para la inferencia local no hace falta conexión a internet, inicio de sesión ni compartir datos.',
          '**Servidor de API.** El teléfono puede exponer endpoints al estilo de OpenAI y de Ollama para que los usen herramientas de escritorio, bots y scripts. La política de privacidad describe este tráfico entre el PC y el teléfono como comunicación en la red local (LAN).',
          '**Chat integrado.** Una pantalla de chat para el modelo cargado; la nota de la versión 1.1.10 le añade búsqueda en línea para los modelos GGUF.',
          '**Enrutamiento híbrido.** Cuando se alcanzan los límites de contexto locales, las consultas pueden derivarse opcionalmente a modelos en la nube; la ficha no dice qué proveedores ni cómo se configuran.',
          '**Compresión de prompts y monitorización.** Los prompts de sistema largos y las descripciones de herramientas se comprimen antes de la ejecución, y la app muestra el uso de la GPU, la memoria, la velocidad de generación y la temperatura.',
        ],
        note: 'La ficha y la política son declaraciones del propio desarrollador. La compilación instalada es la que tiene la última palabra.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, anuncios y uso de la red',
        content: [
          '**Según la política de privacidad, los prompts, las respuestas del modelo y las conversaciones nunca se suben a ningún servidor, pero la app sí recopila datos de uso para los anuncios.** La política (vigente desde abril de 2026) enumera eventos de apertura de la app, de descarga de modelos y de inicio de modelos, registros de fallos y una ubicación aproximada a nivel de ciudad, usados para la publicidad, la optimización de contenido y la mejora del servicio.',
          'La sección Seguridad de los datos de Google Play dice algo distinto: afirma «No data collected» y también enumera la ubicación entre los tipos de datos que la app puede compartir con terceros, indica que los datos se cifran en tránsito y establece que los datos no se pueden eliminar. La ficha lleva las etiquetas «Contains ads» e «In-app purchases»; la descripción no dice qué desbloquean las compras. Un usuario escribió en septiembre de 2026 que alojar la API exigía ver un anuncio, y el desarrollador respondió que los anuncios no se pueden quitar por ahora y que la última versión puede guardar los modelos en el dispositivo. Ambas afirmaciones son de las propias partes y aquí no se probaron.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app es de código cerrado, por lo que ninguna de estas afirmaciones se puede comprobar en el código, y PromptQuorum no ha auditado el tráfico de red ni los permisos. Quien maneje prompts confidenciales debería verificar el comportamiento en su propio dispositivo primero.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Desarrolladores de Android que quieren probar un teléfono como endpoint de API local.** La ficha ofrece endpoints al estilo de OpenAI y de Ollama con dos motores.',
          '**Usuarios de GGUF que quieren un ejecutor en el teléfono.** La ficha nombra la compatibilidad con llama.cpp; no se probó si tu archivo de modelo se carga.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en uso real.** No se midieron la velocidad, el consumo de batería, el calor ni la calidad de las respuestas; nada de este análisis procede de ejecutar la app.',
          '**Los modelos.** La ficha nombra familias, pero no modelos concretos, tamaños ni fuentes de descarga; un usuario menciona descargas grandes desde Hugging Face.',
          '**La API.** No se probó qué endpoints funcionan, si existe autenticación ni cómo afectan al servidor los avisos de anuncios.',
          '**El enrutamiento híbrido.** No se describe qué proveedores de nube reciben datos cuando el enrutamiento está activado ni qué se envía.',
          '**Requisitos de hardware.** No se indica ningún requisito de RAM ni de almacenamiento; el único mínimo indicado es Android 7.0.',
          '**Licencia y código fuente.** No se encontró ningún repositorio; el pie de la política dice «Open Source Project», pero no enlaza ninguno, por lo que la app se trata como de código cerrado.',
          '**Permisos.** No se inspeccionó la lista de permisos.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[OlliteRT](/es/power-local-llm/ollitert-review)',
            'Plataformas': 'Android',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Servidor de código abierto compatible con OpenAI, alojado en el teléfono y basado en LiteRT-LM',
          },
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
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat offline de código abierto con preguntas sobre documentos en el dispositivo',
          },
        ],
        note: 'Los detalles de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿«Chaterminal» es la app o el desarrollador?',
            a: 'Chaterminal es el nombre de la cuenta de desarrollador en Google Play; la app se titula Mobile LM Server - Local AI y usa el nombre de paquete com.chaterminal.mobilellm.',
          },
          {
            q: '¿Mobile LM Server es de código abierto?',
            a: 'No se encontró ningún repositorio. El pie de la política de privacidad la llama proyecto de código abierto, pero no enlaza código, por lo que este análisis la trata como de código cerrado hasta que se publique un repositorio.',
          },
          {
            q: '¿Funciona en iPhone o en escritorio?',
            a: 'No se encontró ninguna versión así; la ficha es solo para Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Mobile LM Server es una app de Android con actualizaciones activas que reúne en una sola instalación gratuita dos motores de inferencia, un chat integrado y una API al estilo de OpenAI, pero aquí no se probaron ni la afirmación del uso sin conexión ni la API, y la versión gratuita lleva anuncios y una política de privacidad que enumera la recopilación de datos relacionada con ellos. Encaja con desarrolladores que quieren experimentar y aceptan una compilación de código cerrado de un desarrollador pequeño cuyo sitio web devolvió un error. Quien busque un servidor de código abierto debería comparar [OlliteRT](/es/power-local-llm/ollitert-review); para un chat sencillo, consulta [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Mobile LM Server en Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) — descripción, versión, fecha de actualización, nota de la versión, etiquetas, sección Seguridad de los datos y valoraciones, consultadas el 26 de octubre de 2026.',
          '[Política de privacidad de Mobile LM Server](https://ledger.chaterminal.com/mobilellm/index.html) — tratamiento de datos, información recopilada y comunicación por LAN; página vigente desde abril de 2026.',
          '[chaterminal.com](https://chaterminal.com/) — el sitio web del desarrollador enlazado desde la ficha; devolvió un error de acceso denegado el 26 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de OlliteRT](/es/power-local-llm/ollitert-review) — una app de Android de código abierto que ofrece una API compatible con OpenAI desde el teléfono.',
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
          '[Análisis de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app de IA de código abierto en el dispositivo de Google.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita con licencia MIT para iPhone y Android.',
          '[Mejores apps de LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el resumen más amplio para Android.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chaterminal-review-hero-fr.webp',
    title: 'Avis Mobile LM Server : appli Android pour modèles locaux et API hébergée sur le téléphone',
    seoTitle: 'Avis Mobile LM Server : modèles locaux et API Android',
    intro:
      'Mobile LM Server (paquet Google Play com.chaterminal.mobilellm, compte développeur « chaterminal ») est une application Android qui, selon sa fiche, exécute des modèles GGUF et LiteRT-LM sur le téléphone et les expose via des points de terminaison compatibles OpenAI et compatibles Ollama. Elle contient des publicités et des achats intégrés. Cet avis repose sur la fiche Google Play et la politique de confidentialité qu\'elle référence, consultées le 26 octobre 2026 ; il ne repose sur aucune utilisation pratique.',
    metaDescription:
      'Avis Mobile LM Server : appli Android qui dit exécuter des modèles GGUF et LiteRT-LM hors ligne et servir une API compatible OpenAI. Pubs et achats.',
    twitterDescription:
      'Avis Mobile LM Server : une appli Android qui dit exécuter des modèles GGUF et LiteRT-LM sur le téléphone et servir une API compatible OpenAI. Ce que revendiquent la fiche Google Play et la politique de confidentialité, et ce qui n\'est pas vérifié.',
    audience:
      'Utilisateurs et développeurs Android qui veulent exécuter des modèles sur un téléphone ou l\'utiliser comme point de terminaison d\'API local, et qui ont besoin de savoir ce que la fiche et la politique confirment, ce qu\'elles ne confirment pas et ce que l\'application collecte.',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis Mobile LM Server',
    targetKeywords: [
      'avis mobile lm server',
      'chaterminal mobile llm',
      'com.chaterminal.mobilellm',
      'serveur api compatible openai sur téléphone android',
      'exécuter des modèles gguf sur android',
      'appli android litert-lm llama.cpp',
      'mobile lm server vs ollitert',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Phi', 'Mistral', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Mobile LM Server est une application Android à code source fermé qui dit exécuter des modèles GGUF et LiteRT-LM hors ligne et transformer le téléphone en serveur d\'API compatible OpenAI et compatible Ollama.** Son installation est gratuite, mais elle contient des publicités et des achats intégrés, et sa politique de confidentialité mentionne une collecte de données liée à la publicité à côté de l\'argument du « tout en local ».',
    quickAnswerTop: {
      fr: {
        question: 'Mobile LM Server exécute-t-elle les modèles hors ligne, et est-elle gratuite ?',
        answer:
          'Selon sa fiche, oui pour l\'inférence : les modèles s\'exécutent sur le téléphone sans compte, et l\'installation est gratuite. La même fiche indique que l\'application contient des publicités et des achats intégrés, et ni l\'affirmation du fonctionnement hors ligne ni l\'API n\'ont été testées ici.',
        bullets: [
          'Installation gratuite sur [Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm), pour Android 7.0 ou version ultérieure.',
          'Deux moteurs cités dans la fiche : llama.cpp pour les fichiers GGUF et LiteRT-LM.',
          'Options supplémentaires : routage cloud pour les contextes longs et recherche en ligne dans le chat intégré.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Mobile LM Server ?', anchor: 'what-is-mobile-lm-server' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité, publicités et usage du réseau', anchor: 'privacy' },
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
            text: 'Mobile LM Server est une application Android à code source fermé qui, selon son développeur, exécute des modèles à poids ouverts sur le téléphone avec llama.cpp ou LiteRT-LM et propose à d\'autres appareils des points de terminaison d\'API de style OpenAI et de style Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez depuis Google Play, chargez un modèle, puis discutez dans l\'application ou pointez un outil de bureau vers le téléphone. Le routage cloud hybride et la recherche en ligne sont des options supplémentaires, et les publicités font partie de la version gratuite.',
          },
        ],
        items: [
          'Développeur : un compte développeur nommé « chaterminal », avec une adresse en Chine sur la fiche ; le site web du développeur a renvoyé une erreur lors de la vérification.',
          'Audience : Google Play affiche 1K+ téléchargements et une note moyenne de 3.8 sur 45 évaluations ; l\'historique public est donc modeste.',
          'Activité : la version 1.1.10 a été mise à jour le 22 octobre 2026 ; l\'application est donc en développement actif.',
          'Plateforme : Android 7.0 ou version ultérieure, uniquement via Google Play ; aucune version pour iPhone, ordinateur ou web n\'a été trouvée.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur la fiche Google Play et la politique de confidentialité qu\'elle référence, consultées le 26 octobre 2026. PromptQuorum n\'a pas installé l\'application, n\'a pas exécuté de modèle, n\'a pas appelé l\'API et n\'a mesuré ni la vitesse, ni la consommation de batterie, ni le trafic réseau.',
          },
        ],
      },
      overview: {
        id: 'what-is-mobile-lm-server',
        title: 'Qu\'est-ce que Mobile LM Server ?',
        content: [
          '**Mobile LM Server est une application Android qui, selon sa fiche Google Play, exécute des modèles de langage à poids ouverts directement sur le téléphone et peut servir de petit serveur d\'inférence pour d\'autres appareils.** La fiche cite deux moteurs, LiteRT-LM et llama.cpp (fichiers GGUF), et indique comme familles prises en charge Llama, Gemma, Phi, Mistral, Qwen et les modèles distillés DeepSeek. Elle mentionne aussi un chat intégré, la compression de prompts, la surveillance de l\'appareil (GPU, mémoire, vitesse, température) et un « routage IA hybride » facultatif qui peut envoyer les requêtes longues vers des modèles cloud.',
          'Le titre Play est « Mobile LM Server - Local AI » et la description l\'appelle « Mobile LLM Server » ; le compte développeur est « chaterminal ». Elle n\'a aucun lien avec le projet open source GitHub nommé chaterminal (un outil de chat en terminal) et diffère de [OlliteRT](/fr/power-local-llm/ollitert-review), qui sert lui aussi une API hébergée sur le téléphone.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**Mobile LM Server s\'installe depuis Google Play comme n\'importe quelle autre application Android ; ni installation manuelle ni terminal ne sont nécessaires.** Le lien vers le site web du développeur figurant sur la fiche a renvoyé une erreur d\'accès refusé le 26 octobre 2026 : la page de la politique de confidentialité est donc liée séparément ci-dessous.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) (installation gratuite avec publicités et achats intégrés, Android 7.0 ou version ultérieure)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[chaterminal.com](https://chaterminal.com/) (référencé par la fiche ; a renvoyé une erreur d\'accès refusé le 26 octobre 2026)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité](https://ledger.chaterminal.com/mobilellm/index.html) (page en vigueur depuis avril 2026)',
          },
        ],
        note: 'Version examinée : 1.1.10, indiquée sur Google Play comme mise à jour le 22 octobre 2026. La seule note de version affichée indique qu\'elle a corrigé la recherche en ligne dans le chat intégré pour les modèles GGUF.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Google Play ou de sa note de version ; aucun n\'a été testé.**',
        ],
        items: [
          '**Inférence locale.** Les modèles s\'exécutent sur l\'appareil via LiteRT-LM ou llama.cpp ; la description indique qu\'aucune connexion internet, aucun identifiant et aucun partage de données ne sont nécessaires pour l\'inférence locale.',
          '**Serveur d\'API.** Le téléphone peut exposer des points de terminaison de style OpenAI et de style Ollama, afin que des outils de bureau, des bots et des scripts puissent l\'utiliser. La politique de confidentialité décrit ce trafic entre PC et téléphone comme une communication sur réseau local (LAN).',
          '**Chat intégré.** Un écran de chat pour le modèle chargé ; la note de la version 1.1.10 y ajoute la recherche en ligne pour les modèles GGUF.',
          '**Routage hybride.** Lorsque les limites de contexte locales sont atteintes, les requêtes peuvent être déléguées en option à des modèles cloud ; la fiche n\'indique ni quels fournisseurs ni comment ils sont configurés.',
          '**Compression de prompts et surveillance.** Les longs prompts système et les descriptions d\'outils sont compressés avant l\'exécution, et l\'application affiche l\'utilisation du GPU, la mémoire, la vitesse de génération et la température.',
        ],
        note: 'La fiche et la politique sont les déclarations du développeur lui-même. La build installée fait foi.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, publicités et usage du réseau',
        content: [
          '**Selon la politique de confidentialité, les prompts, les réponses des modèles et les conversations ne sont jamais envoyés à un serveur, mais l\'application collecte bien des données d\'usage pour la publicité.** La politique (en vigueur depuis avril 2026) énumère les événements de lancement de l\'application, de téléchargement de modèle et de démarrage de modèle, les journaux de plantage et une localisation approximative au niveau de la ville, utilisés pour la diffusion de publicités, l\'optimisation du contenu et l\'amélioration du service.',
          'La section Sécurité des données de Google Play dit autre chose : elle indique « Aucune donnée collectée » et cite aussi la localisation parmi les types de données que l\'application peut partager avec des tiers, précise que les données sont chiffrées en transit et indique que les données ne peuvent pas être supprimées. La fiche porte les mentions « Contient des annonces » et « Achats intégrés » ; la description ne précise pas ce que débloquent les achats. Un utilisateur a écrit en septembre 2026 que l\'hébergement de l\'API nécessitait de regarder une publicité, et le développeur a répondu que les publicités ne peuvent pas être supprimées pour le moment et que la dernière version peut enregistrer des modèles sur l\'appareil. Ces deux déclarations émanent des parties elles-mêmes et n\'ont pas été testées ici.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'application étant à code source fermé, aucune de ces affirmations ne peut être vérifiée dans le code, et PromptQuorum n\'a audité ni le trafic réseau ni les autorisations. Quiconque traite des prompts confidentiels devrait d\'abord vérifier le comportement sur son propre appareil.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les développeurs Android qui veulent essayer un téléphone comme point de terminaison d\'API local.** La fiche propose des points de terminaison de style OpenAI et de style Ollama avec deux moteurs.',
          '**Les utilisateurs de GGUF qui veulent un exécuteur côté téléphone.** La prise en charge de llama.cpp est citée dans la fiche ; le chargement effectif de votre fichier de modèle n\'a pas été testé.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Les performances en pratique.** La vitesse, la consommation de batterie, la chaleur et la qualité des réponses n\'ont pas été mesurées ; rien dans cet avis ne provient de l\'exécution de l\'application.',
          '**Les modèles.** La fiche cite des familles, mais pas de modèles précis, de tailles ni de sources de téléchargement ; un utilisateur mentionne de gros téléchargements depuis Hugging Face.',
          '**L\'API.** Les points de terminaison qui fonctionnent, l\'existence d\'une authentification et l\'effet des invites publicitaires sur le serveur n\'ont pas été testés.',
          '**Le routage hybride.** Les fournisseurs cloud qui reçoivent des données lorsque le routage est activé, et ce qui est envoyé, ne sont pas décrits.',
          '**Les besoins matériels.** Aucune exigence de RAM ou de stockage n\'est indiquée ; le seul minimum indiqué est Android 7.0.',
          '**La licence et le code source.** Aucun dépôt n\'a été trouvé ; le pied de page de la politique indique « Open Source Project » sans aucun lien, l\'application est donc considérée comme à code source fermé.',
          '**Les autorisations.** La liste des autorisations n\'a pas été examinée.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Appli': '[OlliteRT](/fr/power-local-llm/ollitert-review)',
            'Plateformes': 'Android',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Serveur open source compatible OpenAI hébergé sur le téléphone, basé sur LiteRT-LM',
          },
          {
            'Appli': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Client de chat open source sur l\'appareil, avec sa propre bibliothèque de modèles',
          },
          {
            'Appli': '[Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Application open source sur l\'appareil de l\'équipe Google AI Edge',
          },
          {
            'Appli': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
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
            q: '« Chaterminal » désigne-t-il l\'application ou le développeur ?',
            a: 'Chaterminal est le nom du compte développeur sur Google Play ; l\'application s\'intitule Mobile LM Server - Local AI et utilise le nom de paquet com.chaterminal.mobilellm.',
          },
          {
            q: 'Mobile LM Server est-elle open source ?',
            a: 'Aucun dépôt n\'a été trouvé. Le pied de page de la politique de confidentialité la qualifie de projet open source sans lier aucun code ; cet avis la considère donc comme à code source fermé tant qu\'aucun dépôt n\'est publié.',
          },
          {
            q: 'Fonctionne-t-elle sur iPhone ou sur ordinateur ?',
            a: 'Aucune version de ce type n\'a été trouvée ; la fiche concerne uniquement Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Mobile LM Server est une application Android mise à jour activement, qui réunit dans une seule installation gratuite deux moteurs d\'inférence, un chat intégré et une API de style OpenAI, mais l\'affirmation du fonctionnement hors ligne et l\'API n\'ont pas été testées ici, et la version gratuite comporte des publicités ainsi qu\'une politique de confidentialité qui mentionne une collecte de données liée à la publicité. Elle convient aux développeurs qui veulent expérimenter et acceptent une build à code source fermé, publiée par un petit développeur dont le site web a renvoyé une erreur. Quiconque souhaite un serveur open source devrait comparer avec [OlliteRT](/fr/power-local-llm/ollitert-review) ; pour un simple chat, voyez [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Mobile LM Server sur Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) — description, version, date de mise à jour, note de version, mentions, section Sécurité des données et avis, consultés le 26 octobre 2026.',
          '[Politique de confidentialité de Mobile LM Server](https://ledger.chaterminal.com/mobilellm/index.html) — traitement des données, informations collectées et communication sur réseau local (LAN) ; page en vigueur depuis avril 2026.',
          '[chaterminal.com](https://chaterminal.com/) — le site web du développeur référencé par la fiche ; il a renvoyé une erreur d\'accès refusé le 26 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis OlliteRT](/fr/power-local-llm/ollitert-review) — une application Android open source qui sert une API compatible OpenAI depuis le téléphone.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l\'appareil, pour iOS et Android.',
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application d\'IA open source sur l\'appareil de Google.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite, sous licence MIT, pour iPhone et Android.',
          '[Meilleures applications de LLM locaux pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le comparatif Android plus large.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chaterminal-review-hero-ja.webp',
    title: 'Mobile LM Serverレビュー:ローカルモデルとスマホ常駐APIを備えたAndroidアプリ',
    seoTitle: 'Mobile LM Serverレビュー:ローカルモデルとAPI',
    intro:
      'Mobile LM Server(Google Playのパッケージ名はcom.chaterminal.mobilellm、開発者アカウント名は「chaterminal」)は、掲載情報によれば、GGUFとLiteRT-LMのモデルをスマートフォン上で動かし、OpenAI互換とOllama互換のエンドポイントとして公開するAndroidアプリです。広告とアプリ内課金が含まれます。本レビューは、2026年10月26日に確認したGoogle Playの掲載情報と、そこからリンクされているプライバシーポリシーに基づいており、実機での使用は行っていません。',
    metaDescription:
      'Mobile LM Serverレビュー:GGUFとLiteRT-LMのモデルをオフラインで動かし、OpenAI互換APIを提供するとされるAndroidアプリ。広告、課金、未検証の主張を解説します。',
    twitterDescription:
      'Mobile LM Serverレビュー:GGUFとLiteRT-LMのモデルをスマートフォン上で動かし、OpenAI互換APIを提供するとされるAndroidアプリ。Google Playの掲載情報とプライバシーポリシーの主張、未検証の点を解説します。',
    audience:
      'スマートフォンでモデルを動かしたい、またはスマートフォンをローカルAPIのエンドポイントとして使いたいAndroidユーザーと開発者で、掲載情報とポリシーが何を確認していて何を確認していないのか、アプリが何を収集するのかを知りたい方向け。',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Mobile LM Server レビュー',
    targetKeywords: [
      'mobile lm server レビュー',
      'chaterminal mobile llm',
      'com.chaterminal.mobilellm',
      'android openai互換 apiサーバー スマホ',
      'android gguf モデル 実行',
      'litert-lm llama.cpp android アプリ',
      'mobile lm server ollitert 比較',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Phi', 'Mistral', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Mobile LM Serverは、GGUFとLiteRT-LMのモデルをオフラインで動かし、スマートフォンをOpenAI互換・Ollama互換のAPIサーバーにするとされる、ソース非公開のAndroidアプリです。** インストールは無料ですが、広告とアプリ内課金が含まれ、プライバシーポリシーには「完全ローカル」という売り文句と並んで、広告関連のデータ収集が記載されています。',
    quickAnswerTop: {
      ja: {
        question: 'Mobile LM Serverはモデルをオフラインで動かせますか?無料ですか?',
        answer:
          '掲載情報によれば、推論については、その通りです。モデルはアカウントなしでスマートフォン上で動作し、インストールは無料です。ただし、同じ掲載情報には広告とアプリ内課金が含まれると表示されており、オフライン動作の主張もAPIも、本レビューでは検証していません。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm)で無料インストール。Android 7.0以降が対象。',
          '掲載情報に挙げられているエンジンは2つ。GGUFファイル向けのllama.cppとLiteRT-LM。',
          'オプション機能として、長いコンテキスト向けのクラウドルーティングと、内蔵チャットでのオンライン検索がある。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Mobile LM Serverとは?', anchor: 'what-is-mobile-lm-server' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'プライバシー、広告、ネットワーク利用', anchor: 'privacy' },
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
            text: 'Mobile LM Serverは、ソース非公開のAndroidアプリで、開発者によれば、オープンウェイトのモデルをllama.cppまたはLiteRT-LMでスマートフォン上で動かし、ほかの端末向けにOpenAI形式とOllama形式のAPIエンドポイントを提供する。',
          },
          {
            type: 'plain-terms',
            text: 'Google Playからインストールし、モデルを読み込んで、アプリ内でチャットするか、デスクトップのツールからスマートフォンに接続します。ハイブリッドのクラウドルーティングとオンライン検索はオプション機能で、無料版には広告が含まれます。',
          },
        ],
        items: [
          '開発元:「chaterminal」という開発者アカウントで、掲載情報には中国の住所が記載されている。確認した時点では、開発者のウェブサイトはエラーを返した。',
          '利用実績:Google Playのダウンロード数は1K+、45件の評価で平均3.8のため、公開されている実績は小さい。',
          '更新状況:バージョン1.1.10は2026年10月22日に更新されており、アプリは活発に開発されている。',
          'プラットフォーム:Google Play経由のAndroid 7.0以降のみ。iPhone版、デスクトップ版、ウェブ版は見つからなかった。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月26日に確認したGoogle Playの掲載情報と、そこからリンクされているプライバシーポリシーに基づいています。PromptQuorumは、アプリのインストール、モデルの実行、APIの呼び出し、速度・バッテリー消費・ネットワーク通信の計測を行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-mobile-lm-server',
        title: 'Mobile LM Serverとは?',
        content: [
          '**Mobile LM Serverは、Google Playの掲載情報によれば、オープンウェイトの言語モデルをスマートフォン上で直接動かし、ほかの端末向けの小さな推論サーバーとしても機能するAndroidアプリです。** 掲載情報には、LiteRT-LMとllama.cpp(GGUFファイル)の2つのエンジンが挙げられ、対応するモデルファミリーとしてLlama、Gemma、Phi、Mistral、Qwen、DeepSeekの蒸留モデルが記載されています。そのほかに、内蔵チャット、プロンプト圧縮、端末のモニタリング(GPU、メモリ、速度、温度)、長いクエリをクラウドモデルに送れるオプションの「hybrid AI routing」(ハイブリッドAIルーティング)も記載されています。',
          'Playでのタイトルは「Mobile LM Server - Local AI」で、説明文では「Mobile LLM Server」と呼ばれ、開発者アカウントは「chaterminal」です。GitHubにあるchaterminalという名前のオープンソースプロジェクト(ターミナル用のチャットツール)とは無関係で、同じくスマートフォン上でAPIを提供する[OlliteRT](/ja/power-local-llm/ollitert-review)とは別のアプリです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Mobile LM Serverは、ほかのAndroidアプリと同じようにGoogle Playからインストールします。サイドロードやターミナルは必要ありません。** 掲載情報にある開発者のウェブサイトへのリンクは、2026年10月26日にアクセス拒否のエラーを返したため、プライバシーポリシーのページは以下に別途リンクしています。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm)(無料でインストール、広告とアプリ内課金あり、Android 7.0以降)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[chaterminal.com](https://chaterminal.com/)(掲載情報からリンク。2026年10月26日にアクセス拒否のエラーを返した)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[プライバシーポリシー](https://ledger.chaterminal.com/mobilellm/index.html)(ページの発効は2026年4月)',
          },
        ],
        note: '確認したバージョン:1.1.10。Google Playでは2026年10月22日に更新されたと表示されています。表示されている唯一のリリースノートには、GGUFモデルで内蔵チャットのオンライン検索を修正したと書かれています。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、Google Playの説明文またはそのリリースノートに基づいており、いずれも検証していません。**',
        ],
        items: [
          '**ローカル推論。** モデルはLiteRT-LMまたはllama.cppを通じて端末上で動作します。説明文には、ローカル推論にはインターネット接続、ログイン、データ共有が不要と書かれています。',
          '**APIサーバー。** スマートフォンがOpenAI形式とOllama形式のエンドポイントを公開でき、デスクトップのツール、ボット、スクリプトから利用できます。プライバシーポリシーは、このPCとスマートフォン間の通信をローカルネットワーク(LAN)内の通信と説明しています。',
          '**内蔵チャット。** 読み込んだモデル用のチャット画面です。1.1.10のリリースノートでは、GGUFモデル向けのオンライン検索が加わっています。',
          '**ハイブリッドルーティング。** ローカルのコンテキスト上限に達すると、クエリをオプションでクラウドモデルに振り分けられます。掲載情報には、どのプロバイダーに対応するのか、どう設定するのかは書かれていません。',
          '**プロンプト圧縮とモニタリング。** 長いシステムプロンプトとツールの説明は実行前に圧縮され、アプリはGPU使用率、メモリ、生成速度、温度を表示します。',
        ],
        note: '掲載情報とポリシーは、開発者自身の記述です。最終的な判断基準は、インストールしたビルドです。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー、広告、ネットワーク利用',
        content: [
          '**プライバシーポリシーによれば、プロンプト、モデルの出力、会話はどのサーバーにもアップロードされませんが、アプリは広告向けに利用データを収集します。** ポリシー(2026年4月発効)には、アプリの起動、モデルのダウンロード、モデルの開始のイベント、クラッシュログ、市区町村レベルのおおよその位置情報が挙げられ、広告配信、コンテンツの最適化、サービスの改善に使われるとあります。',
          'Google PlayのData safetyセクションの内容は異なります。「No data collected」(収集されるデータなし)と表示されながら、位置情報が第三者と共有される可能性のあるデータの種類に挙げられ、データは転送中に暗号化されること、データを削除できないことも書かれています。掲載情報には「Contains ads」(広告を含む)と「In-app purchases」(アプリ内課金)のラベルがあり、説明文には課金で何が使えるようになるのかは書かれていません。あるレビュー投稿者は2026年9月に、APIをホストするには広告を見る必要があったと書き、開発者は、広告は当面削除できないこと、最新バージョンではモデルを端末に保存できることを返信しています。どちらの記述も当事者自身のもので、本レビューでは検証していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'アプリはソース非公開のため、これらの主張をコードで確認することはできず、PromptQuorumは通信内容や権限の監査も行っていません。機密性の高いプロンプトを扱う方は、先にご自身の端末で動作を確認してください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**スマートフォンをローカルAPIのエンドポイントとして試したいAndroid開発者。** 掲載情報には、2つのエンジンを備えたOpenAI形式とOllama形式のエンドポイントが記載されています。',
          '**スマートフォン側でGGUFを動かしたい方。** 掲載情報にはllama.cppへの対応が記載されていますが、お持ちのモデルファイルが読み込めるかは未検証です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での性能。** 速度、バッテリー消費、発熱、回答の質は計測しておらず、本レビューの内容にアプリを実行して得たものはありません。',
          '**モデル。** 掲載情報にはモデルファミリーが挙げられているだけで、具体的なモデル、サイズ、入手元は書かれていません。あるレビュー投稿者は、Hugging Faceからの大きなダウンロードに触れています。',
          '**API。** どのエンドポイントが動くのか、認証があるのか、広告の表示がサーバーにどう影響するのかは検証していません。',
          '**ハイブリッドルーティング。** ルーティングがオンのとき、どのクラウドプロバイダーにデータが送られるのか、何が送られるのかは説明されていません。',
          '**必要なハードウェア。** RAMやストレージの要件は示されておらず、確認できる最低条件はAndroid 7.0だけです。',
          '**ライセンスとソースコード。** リポジトリは見つかりませんでした。ポリシーのフッターには「Open Source Project」とありますが、リンクはなく、アプリはソース非公開として扱っています。',
          '**権限。** 権限の一覧は確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[OlliteRT](/ja/power-local-llm/ollitert-review)',
            'プラットフォーム': 'Android',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'LiteRT-LMをベースにした、スマートフォン上で動くオープンソースのOpenAI互換サーバー',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '独自のモデルライブラリを持つ、オープンソースの端末内チャットクライアント',
          },
          {
            'アプリ': '[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'GoogleのAI Edgeチームによる、オープンソースの端末内アプリ',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '端末内ドキュメントQ&Aを備えた、オープンソースのオフラインチャット',
          },
        ],
        note: '競合アプリの詳細は頻繁に変わります。現在の価格、ライセンス、対応プラットフォームは、各アプリの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '「Chaterminal」はアプリ名ですか、開発者名ですか?',
            a: 'ChaterminalはGoogle Playの開発者アカウント名です。アプリのタイトルはMobile LM Server - Local AIで、パッケージ名はcom.chaterminal.mobilellmです。',
          },
          {
            q: 'Mobile LM Serverはオープンソースですか?',
            a: 'リポジトリは見つかりませんでした。プライバシーポリシーのフッターはオープンソースプロジェクトと称していますがコードへのリンクはないため、本レビューではリポジトリが公開されるまでソース非公開として扱っています。',
          },
          {
            q: 'iPhoneやデスクトップでも使えますか?',
            a: 'そのようなビルドは見つかりませんでした。掲載情報はAndroidのみです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Mobile LM Serverは、2つの推論エンジン、内蔵チャット、OpenAI形式のAPIを無料のインストール1つにまとめた、活発に更新されているAndroidアプリです。ただし、オフライン動作の主張もAPIも本レビューでは未検証で、無料版には広告が含まれ、プライバシーポリシーには広告関連のデータ収集が記載されています。ウェブサイトがエラーを返した小規模な開発者によるソース非公開のビルドを受け入れたうえで、試してみたい開発者に向いています。オープンソースのサーバーが必要な方は[OlliteRT](/ja/power-local-llm/ollitert-review)と比較してみてください。通常のチャットが目的なら、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)をご覧ください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのMobile LM Server](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) — 説明文、バージョン、更新日、リリースノート、ラベル、Data safetyセクション、レビュー。2026年10月26日に確認。',
          '[Mobile LM Serverのプライバシーポリシー](https://ledger.chaterminal.com/mobilellm/index.html) — データの処理、収集される情報、LAN内の通信。ページの発効は2026年4月。',
          '[chaterminal.com](https://chaterminal.com/) — 掲載情報からリンクされている開発者のウェブサイト。2026年10月26日にアクセス拒否のエラーを返した。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[OlliteRTレビュー](/ja/power-local-llm/ollitert-review) — スマートフォンからOpenAI互換APIを提供する、オープンソースのAndroidアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの、無料でオープンソースの端末内チャットクライアント。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Googleのオープンソースの端末内AIアプリ。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けの、無料でMITライセンスのオフラインチャットアプリ。',
          '[Android向けベストローカルLLMアプリ2026年版](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けアプリを幅広く紹介するまとめ記事。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chaterminal-review-hero-pt.webp',
    title: 'Análise do Mobile LM Server: app Android para modelos locais e uma API hospedada no celular',
    seoTitle: 'Análise do Mobile LM Server: modelos e API no Android',
    intro:
      'O Mobile LM Server (pacote do Google Play com.chaterminal.mobilellm, conta de desenvolvedor "chaterminal") é um app Android que, segundo a ficha dele, roda modelos GGUF e LiteRT-LM no celular e os expõe por endpoints compatíveis com OpenAI e com Ollama. Ele contém anúncios e compras no app. Esta análise se baseia na ficha do Google Play e na política de privacidade que ela linka, consultadas em 26 de outubro de 2026; não houve uso prático do app.',
    metaDescription:
      'Análise do Mobile LM Server: app Android que diz rodar modelos GGUF e LiteRT-LM offline e servir uma API compatível com OpenAI. Há anúncios e dúvidas.',
    twitterDescription:
      'Análise do Mobile LM Server: um app Android que diz rodar modelos GGUF e LiteRT-LM no celular e oferecer uma API compatível com OpenAI. O que a ficha do Google Play e a política de privacidade afirmam, e o que não foi verificado.',
    audience:
      'Usuários e desenvolvedores de Android que querem rodar modelos no celular ou usá-lo como endpoint de API local e que precisam saber o que a ficha e a política confirmam, o que não confirmam e o que o app coleta.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Mobile LM Server',
    targetKeywords: [
      'análise mobile lm server',
      'chaterminal mobile llm',
      'com.chaterminal.mobilellm',
      'servidor de api compatível com openai no celular android',
      'rodar modelos gguf no android',
      'app litert-lm llama.cpp android',
      'mobile lm server vs ollitert',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Phi', 'Mistral', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**O Mobile LM Server é um app Android de código fechado que diz rodar modelos GGUF e LiteRT-LM offline e transformar o celular em um servidor de API compatível com OpenAI e com Ollama.** A instalação é gratuita, mas o app contém anúncios e compras no app, e a política de privacidade dele lista coleta de dados ligada a anúncios ao lado do discurso de "totalmente local".',
    quickAnswerTop: {
      pt: {
        question: 'O Mobile LM Server roda modelos offline e é gratuito?',
        answer:
          'Segundo a ficha dele, sim para a inferência: os modelos rodam no celular, sem conta, e a instalação é gratuita. A mesma ficha indica que o app contém anúncios e compras no app, e nem a afirmação de uso offline nem a API foram testadas aqui.',
        bullets: [
          'Instalação gratuita no [Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm), para Android 7.0 ou posterior.',
          'Dois mecanismos citados na ficha: llama.cpp para arquivos GGUF e LiteRT-LM.',
          'Extras opcionais: roteamento para a nuvem em contextos longos e busca on-line no chat integrado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Mobile LM Server?', anchor: 'what-is-mobile-lm-server' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade, anúncios e uso da rede', anchor: 'privacy' },
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
            text: 'O Mobile LM Server é um app Android de código fechado que, segundo o desenvolvedor, roda modelos de pesos abertos no celular com llama.cpp ou LiteRT-LM e oferece a outros dispositivos endpoints de API no estilo OpenAI e no estilo Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app pelo Google Play, carrega um modelo e conversa no próprio app ou aponta uma ferramenta de desktop para o celular. O roteamento híbrido para a nuvem e a busca on-line são extras opcionais, e os anúncios fazem parte da versão gratuita.',
          },
        ],
        items: [
          'Desenvolvedor: uma conta de desenvolvedor chamada "chaterminal", com endereço na China na ficha; o site do desenvolvedor retornou um erro quando foi consultado.',
          'Alcance: o Google Play mostra mais de 1K downloads e nota média de 3.8 em 45 avaliações, então o histórico público é pequeno.',
          'Atividade: a versão 1.1.10 foi atualizada em 22 de outubro de 2026, então o app está em desenvolvimento ativo.',
          'Plataforma: Android 7.0 ou posterior, somente pelo Google Play; não encontramos versão para iPhone, desktop ou web.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na ficha do Google Play e na política de privacidade que ela linka, consultadas em 26 de outubro de 2026. O PromptQuorum não instalou o app, não rodou um modelo, não chamou a API nem mediu velocidade, uso de bateria ou tráfego de rede.',
          },
        ],
      },
      overview: {
        id: 'what-is-mobile-lm-server',
        title: 'O que é o Mobile LM Server?',
        content: [
          '**O Mobile LM Server é um app Android que, segundo a ficha dele no Google Play, roda modelos de linguagem de pesos abertos diretamente no celular e pode funcionar como um pequeno servidor de inferência para outros dispositivos.** A ficha cita dois mecanismos, LiteRT-LM e llama.cpp (arquivos GGUF), e lista Llama, Gemma, Phi, Mistral, Qwen e modelos destilados do DeepSeek como famílias compatíveis. Ela também lista um chat integrado, compressão de prompts, monitoramento do dispositivo (GPU, memória, velocidade, temperatura) e um "roteamento de IA híbrido" opcional, que pode enviar consultas longas para modelos na nuvem.',
          'O título no Google Play é "Mobile LM Server - Local AI" e a descrição o chama de "Mobile LLM Server"; a conta do desenvolvedor é "chaterminal". Ele não tem relação com o projeto de código aberto do GitHub chamado chaterminal (uma ferramenta de chat para terminal) e é um app diferente do [OlliteRT](/pt/power-local-llm/ollitert-review), que também serve uma API hospedada no celular.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Mobile LM Server é instalado pelo Google Play como qualquer outro app Android; não há instalação manual de arquivo nem terminal.** O link do site do desenvolvedor na ficha retornou um erro de acesso negado em 26 de outubro de 2026, então a página da política de privacidade está linkada separadamente abaixo.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) (instalação gratuita com anúncios e compras no app, Android 7.0 ou posterior)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[chaterminal.com](https://chaterminal.com/) (linkado na ficha; retornou um erro de acesso negado em 26 de outubro de 2026)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Política de privacidade](https://ledger.chaterminal.com/mobilellm/index.html) (página com vigência de abril de 2026)',
          },
        ],
        note: 'Versão analisada: 1.1.10, que o Google Play mostra como atualizada em 22 de outubro de 2026. A única nota da versão exibida diz que ela corrigiu a busca on-line no chat integrado para modelos GGUF.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm da descrição do Google Play ou da nota da versão; nenhum foi testado.**',
        ],
        items: [
          '**Inferência local.** Os modelos rodam no dispositivo por LiteRT-LM ou llama.cpp; a descrição diz que não é preciso conexão com a internet, login nem compartilhamento de dados para a inferência local.',
          '**Servidor de API.** O celular pode expor endpoints no estilo OpenAI e no estilo Ollama, para que ferramentas de desktop, bots e scripts o usem. A política de privacidade descreve esse tráfego entre PC e celular como comunicação na rede local (LAN).',
          '**Chat integrado.** Uma tela de chat para o modelo carregado; a nota da versão 1.1.10 acrescenta a ela a busca on-line para modelos GGUF.',
          '**Roteamento híbrido.** Quando os limites de contexto locais são atingidos, as consultas podem, opcionalmente, ser enviadas a modelos na nuvem; a ficha não diz quais provedores nem como são configurados.',
          '**Compressão de prompts e monitoramento.** Prompts de sistema longos e descrições de ferramentas são comprimidos antes da execução, e o app mostra uso de GPU, memória, velocidade de geração e temperatura.',
        ],
        note: 'A ficha e a política são declarações do próprio desenvolvedor. A versão instalada é a palavra final.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, anúncios e uso da rede',
        content: [
          '**Segundo a política de privacidade, prompts, respostas dos modelos e conversas nunca são enviados a nenhum servidor, mas o app coleta dados de uso para anúncios.** A política (com vigência de abril de 2026) lista eventos de abertura do app, de download de modelo e de início de modelo, logs de falhas e localização aproximada, em nível de cidade, usados para exibir anúncios, otimizar conteúdo e melhorar o serviço.',
          'A seção Segurança dos dados do Google Play diz outra coisa: informa "Nenhum dado coletado" e também lista a localização entre os tipos de dados que o app pode compartilhar com terceiros, observa que os dados são criptografados em trânsito e afirma que os dados não podem ser excluídos. A ficha traz os rótulos "Contém anúncios" e "Compras no app"; a descrição não diz o que as compras liberam. Um usuário escreveu em setembro de 2026 que hospedar a API exigia assistir a um anúncio, e o desenvolvedor respondeu que os anúncios não podem ser removidos por enquanto e que a versão mais recente consegue salvar modelos no dispositivo. Ambas as afirmações são das próprias partes e não foram testadas aqui.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app é de código fechado, então nenhuma dessas afirmações pode ser conferida no código, e o PromptQuorum não auditou o tráfego de rede nem as permissões. Quem lida com prompts confidenciais deve verificar o comportamento no próprio dispositivo antes.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Desenvolvedores Android que querem testar um celular como endpoint de API local.** A ficha oferece endpoints no estilo OpenAI e no estilo Ollama, com dois mecanismos.',
          '**Usuários de GGUF que querem um executor no celular.** O suporte ao llama.cpp é citado na ficha; se o seu arquivo de modelo carrega, não foi testado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** Velocidade, uso de bateria, aquecimento e qualidade das respostas não foram medidos; nada nesta análise vem de uso do app.',
          '**Os modelos.** A ficha cita famílias, mas não modelos específicos, tamanhos nem fontes de download; um usuário menciona downloads grandes do Hugging Face.',
          '**A API.** Quais endpoints funcionam, se existe autenticação e como os avisos de anúncio afetam o servidor não foram testados.',
          '**O roteamento híbrido.** Quais provedores de nuvem recebem dados quando o roteamento está ativado, e o que é enviado, não é descrito.',
          '**Requisitos de hardware.** Nenhum requisito de RAM ou de armazenamento é informado; o único mínimo declarado é o Android 7.0.',
          '**Licença e código-fonte.** Nenhum repositório foi encontrado; o rodapé da política diz "Open Source Project", mas não linka nenhum, então o app é tratado como de código fechado.',
          '**Permissões.** A lista de permissões não foi inspecionada.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[OlliteRT](/pt/power-local-llm/ollitert-review)',
            'Plataformas': 'Android',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Servidor de código aberto compatível com OpenAI, hospedado no celular e baseado em LiteRT-LM',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Cliente de chat de código aberto no dispositivo, com biblioteca própria de modelos',
          },
          {
            'App': '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'App de código aberto no dispositivo, da equipe de AI Edge do Google',
          },
          {
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat offline de código aberto, com perguntas e respostas sobre documentos no dispositivo',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais de cada app na ficha dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: '"Chaterminal" é o app ou o desenvolvedor?',
            a: 'Chaterminal é o nome da conta do desenvolvedor no Google Play; o app se chama Mobile LM Server - Local AI e usa o nome de pacote com.chaterminal.mobilellm.',
          },
          {
            q: 'O Mobile LM Server é de código aberto?',
            a: 'Nenhum repositório foi encontrado. O rodapé da política de privacidade o chama de projeto de código aberto, mas não linka nenhum código, então esta análise o trata como de código fechado até que um repositório seja publicado.',
          },
          {
            q: 'Ele funciona no iPhone ou no desktop?',
            a: 'Não encontramos nenhuma versão assim; a ficha é somente para Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Mobile LM Server é um app Android com atualizações ativas que reúne dois mecanismos de inferência, um chat integrado e uma API no estilo OpenAI em uma única instalação gratuita, mas a afirmação de uso offline e a API não foram testadas aqui, e a versão gratuita traz anúncios e uma política de privacidade que lista coleta de dados ligada a anúncios. Ele serve para desenvolvedores que querem experimentar e aceitam uma versão de código fechado, de um desenvolvedor pequeno cujo site retornou um erro. Quem quer um servidor de código aberto deve comparar com o [OlliteRT](/pt/power-local-llm/ollitert-review); para um chat simples, veja o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Mobile LM Server no Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) — descrição, versão, data da atualização, nota da versão, rótulos, seção Segurança dos dados e avaliações, consultados em 26 de outubro de 2026.',
          '[Política de privacidade do Mobile LM Server](https://ledger.chaterminal.com/mobilellm/index.html) — tratamento de dados, informações coletadas e comunicação na LAN; página com vigência de abril de 2026.',
          '[chaterminal.com](https://chaterminal.com/) — o site do desenvolvedor linkado na ficha; retornou um erro de acesso negado em 26 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do OlliteRT](/pt/power-local-llm/ollitert-review) — um app Android de código aberto que serve uma API compatível com OpenAI a partir do celular.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no dispositivo, para iOS e Android.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app de IA no dispositivo, de código aberto, do Google.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chaterminal-review-hero-ar.webp',
    title: 'مراجعة Mobile LM Server: تطبيق Android للنماذج المحلية وواجهة API على الهاتف',
    seoTitle: 'مراجعة Mobile LM Server: نماذج محلية وAPI على Android',
    intro:
      'Mobile LM Server (حزمة Google Play هي com.chaterminal.mobilellm وحساب المطوّر «chaterminal») تطبيق Android يشغّل، بحسب صفحته، نماذج GGUF وLiteRT-LM على الهاتف ويتيحها عبر نقاط وصول متوافقة مع OpenAI وOllama. يحتوي التطبيق على إعلانات ومشتريات داخل التطبيق. تستند هذه المراجعة إلى صفحة Google Play وسياسة الخصوصية التي تربطها، كما جرى التحقق منهما في 26 أكتوبر 2026، ولم يتضمن إعدادها أي استخدام فعلي للتطبيق.',
    metaDescription:
      'مراجعة Mobile LM Server: تطبيق Android يقول مطوّره إنه يشغّل نماذج GGUF وLiteRT-LM دون اتصال ويوفّر API متوافقاً مع OpenAI. إعلانات وادعاءات لم تُختبر.',
    twitterDescription:
      'مراجعة Mobile LM Server: تطبيق Android يقول مطوّره إنه يشغّل نماذج GGUF وLiteRT-LM على الهاتف ويوفّر واجهة API متوافقة مع OpenAI. ما تدّعيه صفحة Google Play وسياسة الخصوصية، وما لم يُتحقق منه.',
    audience:
      'مستخدمو ومطوّرو Android الذين يريدون تشغيل النماذج على الهاتف أو استخدامه كنقطة وصول API محلية، ويحتاجون إلى معرفة ما تؤكده الصفحة والسياسة وما لا تؤكده، وما الذي يجمعه التطبيق.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Mobile LM Server',
    targetKeywords: [
      'مراجعة mobile lm server',
      'chaterminal mobile llm',
      'com.chaterminal.mobilellm',
      'خادم API متوافق مع OpenAI على هاتف android',
      'تشغيل نماذج gguf على android',
      'تطبيق litert-lm وllama.cpp على android',
      'mobile lm server مقابل ollitert',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Phi', 'Mistral', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Mobile LM Server تطبيق Android مغلق المصدر يقول إنه يشغّل نماذج GGUF وLiteRT-LM دون اتصال ويحوّل الهاتف إلى خادم API متوافق مع OpenAI وOllama.** التثبيت مجاني لكنه يحتوي على إعلانات ومشتريات داخل التطبيق، وتسرد سياسة الخصوصية جمع بيانات متعلقاً بالإعلانات إلى جانب طرح «المحلي بالكامل».',
    quickAnswerTop: {
      ar: {
        question: 'هل يشغّل Mobile LM Server النماذج دون اتصال، وهل هو مجاني؟',
        answer:
          'بحسب صفحته، نعم بالنسبة إلى الاستدلال: تعمل النماذج على الهاتف دون حساب، والتثبيت مجاني. غير أن الصفحة نفسها تصنّف التطبيق بأنه يحتوي على إعلانات ومشتريات داخل التطبيق، ولم يُختبر هنا لا ادعاء العمل دون اتصال ولا واجهة API.',
        bullets: [
          'تثبيت مجاني على [Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm)، لنظام Android 7.0 أو أحدث.',
          'محرّكان تذكرهما الصفحة: llama.cpp لملفات GGUF وLiteRT-LM.',
          'إضافات اختيارية: توجيه سحابي للسياقات الطويلة، وبحث عبر الإنترنت في الدردشة المدمجة.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Mobile LM Server؟', anchor: 'what-is-mobile-lm-server' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية والإعلانات واستخدام الشبكة', anchor: 'privacy' },
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
            text: 'Mobile LM Server تطبيق Android مغلق المصدر يشغّل، بحسب مطوّره، نماذج مفتوحة الأوزان على الهاتف باستخدام llama.cpp أو LiteRT-LM، ويوفّر نقاط وصول API بأسلوب OpenAI وOllama للأجهزة الأخرى.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من Google Play وتحمّل نموذجاً ثم تدردش في التطبيق أو توجّه أداة على الحاسوب إلى الهاتف. التوجيه السحابي الهجين والبحث عبر الإنترنت إضافتان اختياريتان، والإعلانات جزء من النسخة المجانية.',
          },
        ],
        items: [
          'المطوّر: حساب مطوّر باسم «chaterminal» وعنوان في الصين على الصفحة؛ وقد أعاد موقع المطوّر رسالة خطأ عند الفحص.',
          'الانتشار: تُظهر Google Play أكثر من 1K تنزيل ومتوسط تقييم 3.8 من 45 تقييماً، لذا فسجلّ التطبيق العام متواضع.',
          'النشاط: حُدّث الإصدار 1.1.10 في 22 أكتوبر 2026، فالتطبيق قيد التطوير النشط.',
          'المنصة: Android 7.0 أو أحدث عبر Google Play فقط؛ ولم نعثر على نسخة لـ iPhone أو سطح المكتب أو الويب.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة Google Play وسياسة الخصوصية التي تربطها، وقد جرى التحقق منهما في 26 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق، ولم تشغّل نموذجاً، ولم تستدعِ واجهة API، ولم تقِس السرعة أو استهلاك البطارية أو حركة الشبكة.',
          },
        ],
      },
      overview: {
        id: 'what-is-mobile-lm-server',
        title: 'ما هو Mobile LM Server؟',
        content: [
          '**Mobile LM Server تطبيق Android يشغّل، بحسب صفحته على Google Play، نماذج لغوية مفتوحة الأوزان مباشرة على الهاتف، ويمكنه العمل كخادم استدلال صغير للأجهزة الأخرى.** تذكر الصفحة محرّكين هما LiteRT-LM وllama.cpp (ملفات GGUF)، وتسرد عائلات Llama وGemma وPhi وMistral وQwen والنماذج المقطّرة من DeepSeek بوصفها مدعومة. كما تذكر دردشة مدمجة وضغطاً للمطالبات ومراقبة للجهاز (GPU والذاكرة والسرعة والحرارة) و«توجيهاً هجيناً للذكاء الاصطناعي» اختيارياً قد يرسل الاستعلامات الطويلة إلى نماذج سحابية.',
          'عنوان الصفحة على Play هو «Mobile LM Server - Local AI» ويسمّيه الوصف «Mobile LLM Server»، وحساب المطوّر هو «chaterminal». ولا علاقة له بمشروع GitHub مفتوح المصدر الذي يحمل الاسم chaterminal (أداة دردشة في الطرفية)، وهو تطبيق مختلف عن [OlliteRT](/ar/power-local-llm/ollitert-review) الذي يقدّم بدوره واجهة API مستضافة على الهاتف.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Mobile LM Server من Google Play مثل أي تطبيق Android آخر؛ دون تثبيت جانبي أو طرفية.** أعاد رابط موقع المطوّر على الصفحة رسالة رفض وصول في 26 أكتوبر 2026، لذا ترد صفحة سياسة الخصوصية بشكل منفصل أدناه.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'Android',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) (تثبيت مجاني مع إعلانات ومشتريات داخل التطبيق، Android 7.0 أو أحدث)',
          },
          {
            'المنصة': 'الموقع',
            'مكان الحصول عليه': '[chaterminal.com](https://chaterminal.com/) (مرتبط من الصفحة؛ أعاد رسالة رفض وصول في 26 أكتوبر 2026)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية](https://ledger.chaterminal.com/mobilellm/index.html) (الصفحة سارية من أبريل 2026)',
          },
        ],
        note: 'الإصدار الذي جرت مراجعته: 1.1.10، وتعرضه Google Play بآخر تحديث في 22 أكتوبر 2026. وملاحظة الإصدار الوحيدة المعروضة تقول إنه أصلح البحث عبر الإنترنت في الدردشة المدمجة لنماذج GGUF.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من وصف Google Play أو ملاحظة الإصدار؛ ولم يُختبر أي منها.**',
        ],
        items: [
          '**الاستدلال المحلي.** تعمل النماذج على الجهاز عبر LiteRT-LM أو llama.cpp؛ ويقول الوصف إنه لا حاجة إلى اتصال بالإنترنت أو تسجيل دخول أو مشاركة بيانات للاستدلال المحلي.',
          '**خادم API.** يمكن للهاتف إتاحة نقاط وصول بأسلوب OpenAI وOllama لتستخدمها أدوات سطح المكتب والروبوتات والنصوص البرمجية. وتصف سياسة الخصوصية حركة المرور هذه بين الحاسوب والهاتف بأنها اتصال عبر الشبكة المحلية (LAN).',
          '**دردشة مدمجة.** شاشة دردشة للنموذج المحمّل؛ وتضيف ملاحظة الإصدار 1.1.10 إليها البحث عبر الإنترنت لنماذج GGUF.',
          '**التوجيه الهجين.** عند بلوغ حدود السياق المحلي، يمكن اختيارياً تحويل الاستعلامات إلى نماذج سحابية؛ ولا تذكر الصفحة أي مزوّدين ولا كيفية ضبط ذلك.',
          '**ضغط المطالبات والمراقبة.** تُضغط مطالبات النظام الطويلة وأوصاف الأدوات قبل التنفيذ، ويعرض التطبيق استخدام GPU والذاكرة وسرعة التوليد والحرارة.',
        ],
        note: 'الصفحة والسياسة هما أقوال المطوّر نفسه. والنسخة المثبّتة هي المرجع الأخير.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والإعلانات واستخدام الشبكة',
        content: [
          '**بحسب سياسة الخصوصية، لا تُرفع المطالبات ومخرجات النموذج والمحادثات إلى أي خادم، لكن التطبيق يجمع بيانات استخدام للإعلانات.** وتسرد السياسة (السارية من أبريل 2026) أحداث تشغيل التطبيق وتنزيل النموذج وبدء تشغيله، وسجلات الأعطال، وموقعاً تقريبياً على مستوى المدينة، تُستخدم لعرض الإعلانات وتحسين المحتوى وتحسين الخدمة.',
          'ويختلف قسم Data safety في Google Play: فهو يقول «No data collected» ويسرد أيضاً الموقع ضمن أنواع البيانات التي قد يشاركها التطبيق مع أطراف ثالثة، ويذكر أن البيانات مشفّرة أثناء النقل وأنه لا يمكن حذفها. وتحمل الصفحة تصنيفي «Contains ads» و«In-app purchases»؛ ولا يذكر الوصف ما الذي تتيحه المشتريات. وكتب أحد المراجعين في سبتمبر 2026 أن استضافة API تطلبت مشاهدة إعلان، ورد المطوّر بأن الإعلانات لا يمكن إزالتها حالياً وأن أحدث إصدار يستطيع حفظ النماذج على الجهاز. كلا القولين من أصحابهما ولم يُختبرا هنا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'التطبيق مغلق المصدر، لذا لا يمكن التحقق من أي من هذه الادعاءات في الكود، ولم تدقق PromptQuorum حركة الشبكة ولا الأذونات. وينبغي لمن يتعامل مع مطالبات سرية أن يتحقق من السلوك على جهازه أولاً.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مطوّرو Android الذين يريدون تجربة الهاتف كنقطة وصول API محلية.** تعرض الصفحة نقاط وصول بأسلوب OpenAI وOllama مع محرّكين.',
          '**مستخدمو GGUF الذين يريدون مشغّلاً على الهاتف.** تذكر الصفحة دعم llama.cpp؛ أما هل يُحمَّل ملف النموذج لديك فلم يُختبر.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لم تُقَس السرعة واستهلاك البطارية والحرارة وجودة الإجابات؛ ولا يأتي أي شيء في هذه المراجعة من تشغيل التطبيق.',
          '**النماذج.** تذكر الصفحة عائلات ولا تذكر نماذج أو أحجاماً أو مصادر تنزيل محددة؛ ويذكر أحد المراجعين تنزيلات كبيرة من Hugging Face.',
          '**واجهة API.** لم يُختبر أي نقاط الوصول تعمل، وهل توجد مصادقة، وكيف تؤثر مطالبات الإعلانات في الخادم.',
          '**التوجيه الهجين.** لا يُوصف أي مزوّدين سحابيين يتلقون البيانات عند تفعيل التوجيه، ولا ما الذي يُرسل.',
          '**متطلبات العتاد.** لا يُذكر أي حد أدنى للذاكرة أو التخزين؛ والحد الوحيد المذكور هو Android 7.0.',
          '**الترخيص والكود المصدري.** لم نعثر على مستودع؛ يقول تذييل السياسة «Open Source Project» دون أي رابط، لذا يُعامل التطبيق بوصفه مغلق المصدر.',
          '**الأذونات.** لم تُفحص قائمة الأذونات.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[OlliteRT](/ar/power-local-llm/ollitert-review)',
            'المنصات': 'Android',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'خادم مفتوح المصدر متوافق مع OpenAI يُستضاف على الهاتف ومبني على LiteRT-LM',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز مع مكتبة نماذج خاصة به',
          },
          {
            'التطبيق': '[Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'تطبيق مفتوح المصدر على الجهاز من فريق AI Edge في Google',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة وأجوبة عن المستندات على الجهاز',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل «Chaterminal» هو التطبيق أم المطوّر؟',
            a: 'Chaterminal هو اسم حساب المطوّر على Google Play؛ أما التطبيق فعنوانه Mobile LM Server - Local AI ويستخدم اسم الحزمة com.chaterminal.mobilellm.',
          },
          {
            q: 'هل Mobile LM Server مفتوح المصدر؟',
            a: 'لم نعثر على مستودع. يصف تذييل سياسة الخصوصية التطبيق بأنه مشروع مفتوح المصدر دون ربط أي كود، لذا تعامله هذه المراجعة بوصفه مغلق المصدر إلى أن يُنشر مستودع.',
          },
          {
            q: 'هل يعمل على iPhone أو سطح المكتب؟',
            a: 'لم نعثر على نسخة كهذه؛ الصفحة مخصصة لنظام Android فقط.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Mobile LM Server تطبيق Android يُحدَّث بنشاط، يجمع محرّكَي استدلال ودردشة مدمجة وواجهة API بأسلوب OpenAI في تثبيت مجاني واحد، لكن ادعاء العمل دون اتصال وواجهة API لم يُختبرا هنا، وتحمل النسخة المجانية إعلانات وسياسة خصوصية تسرد جمع بيانات متعلقاً بالإعلانات. يناسب المطوّرين الراغبين في التجربة والذين يقبلون نسخة مغلقة المصدر من مطوّر صغير أعاد موقعه رسالة خطأ. ومن يريد خادماً مفتوح المصدر فعليه مقارنة [OlliteRT](/ar/power-local-llm/ollitert-review)؛ وللدردشة البسيطة انظر [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Mobile LM Server على Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) — الوصف والإصدار وتاريخ التحديث وملاحظة الإصدار والتصنيفات وقسم Data safety والمراجعات، جرى التحقق منها في 26 أكتوبر 2026.',
          '[سياسة خصوصية Mobile LM Server](https://ledger.chaterminal.com/mobilellm/index.html) — معالجة البيانات والمعلومات المجمّعة والاتصال عبر LAN؛ الصفحة سارية من أبريل 2026.',
          '[chaterminal.com](https://chaterminal.com/) — موقع المطوّر المرتبط من الصفحة؛ أعاد رسالة رفض وصول في 26 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة OlliteRT](/ar/power-local-llm/ollitert-review) — تطبيق Android مفتوح المصدر يقدّم واجهة API متوافقة مع OpenAI من الهاتف.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني مفتوح المصدر على الجهاز لنظامي iOS وAndroid.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق الذكاء الاصطناعي المفتوح المصدر على الجهاز من Google.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT لـ iPhone وAndroid.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لنظام Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — الملخص الأوسع لتطبيقات Android.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chaterminal-review-hero-zh.webp',
    title: 'Mobile LM Server 评测：支持本地模型与手机端 API 的 Android 应用',
    seoTitle: 'Mobile LM Server 评测：Android 本地模型与 API',
    intro:
      'Mobile LM Server（Google Play 包名 com.chaterminal.mobilellm，开发者账号为“chaterminal”）是一款 Android 应用，根据其页面介绍，它在手机上运行 GGUF 和 LiteRT-LM 模型，并通过兼容 OpenAI 和兼容 Ollama 的端点对外提供服务。应用含有广告和应用内购买。本评测基于 Google Play 页面及其所链接的隐私政策，核实日期为 2026 年 10 月 26 日，未经实际使用。',
    metaDescription:
      'Mobile LM Server 评测：Android 应用，称可离线运行 GGUF 和 LiteRT-LM 模型并提供兼容 OpenAI 的 API。含广告与内购，部分说法未经核实。',
    twitterDescription:
      'Mobile LM Server 评测：一款称可在手机上运行 GGUF 和 LiteRT-LM 模型并提供兼容 OpenAI 的 API 的 Android 应用。Google Play 页面和隐私政策的说法，以及未经核实的部分。',
    audience:
      '希望在手机上运行模型或把手机用作本地 API 端点的 Android 用户和开发者，并且需要了解页面和政策确认了什么、没有确认什么，以及该应用会收集哪些数据。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Mobile LM Server 评测',
    targetKeywords: [
      'mobile lm server 评测',
      'chaterminal mobile llm',
      'com.chaterminal.mobilellm',
      '安卓 手机 兼容 openai 的 api 服务器',
      '在安卓上运行 gguf 模型',
      'litert-lm llama.cpp 安卓应用',
      'mobile lm server 与 ollitert 对比',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Phi', 'Mistral', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Mobile LM Server 是一款闭源的 Android 应用，称其可离线运行 GGUF 和 LiteRT-LM 模型，并把手机变成兼容 OpenAI 和兼容 Ollama 的 API 服务器。** 安装免费，但含有广告和应用内购买，其隐私政策在“完全本地”的宣传之外，还列出了与广告相关的数据收集。',
    quickAnswerTop: {
      zh: {
        question: 'Mobile LM Server 能离线运行模型吗？它是免费的吗？',
        answer:
          '根据其页面，推理确实如此：模型在手机上运行，无需账号，安装免费。同一页面也标明该应用含有广告和应用内购买，而离线说法和 API 在此均未经测试。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) 免费安装，需要 Android 7.0 或更高版本。',
          '页面列出两种引擎：用于 GGUF 文件的 llama.cpp 和 LiteRT-LM。',
          '可选附加功能：针对长上下文的云端路由，以及内置聊天中的在线搜索。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Mobile LM Server 是什么？', anchor: 'what-is-mobile-lm-server' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '隐私、广告与网络使用', anchor: 'privacy' },
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
            text: 'Mobile LM Server 是一款闭源的 Android 应用，据其开发者称，它用 llama.cpp 或 LiteRT-LM 在手机上运行开源权重模型，并向其他设备提供 OpenAI 风格和 Ollama 风格的 API 端点。',
          },
          {
            type: 'plain-terms',
            text: '你从 Google Play 安装后加载模型，既可以在应用内聊天，也可以让桌面工具连接到这台手机。混合云端路由和在线搜索是可选的附加功能，免费版含有广告。',
          },
        ],
        items: [
          '开发者：开发者账号名为“chaterminal”，页面上的地址位于中国；检查时开发者网站返回了错误。',
          '影响范围：Google Play 显示下载量 1K+，45 个评分的平均分为 3.8，因此公开的口碑记录有限。',
          '活跃度：版本 1.1.10 于 2026 年 10 月 22 日更新，因此该应用仍在积极开发。',
          '平台：仅通过 Google Play 提供，需要 Android 7.0 或更高版本；未发现 iPhone、桌面或网页版本。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Google Play 页面及其所链接的隐私政策，核实日期为 2026 年 10 月 26 日。PromptQuorum 没有安装该应用、运行模型、调用 API，也没有测量速度、耗电或网络流量。',
          },
        ],
      },
      overview: {
        id: 'what-is-mobile-lm-server',
        title: 'Mobile LM Server 是什么？',
        content: [
          '**Mobile LM Server 是一款 Android 应用，根据其 Google Play 页面，它直接在手机上运行开源权重语言模型，并可作为供其他设备使用的小型推理服务器。** 页面列出了 LiteRT-LM 和 llama.cpp（GGUF 文件）两种引擎，并把 Llama、Gemma、Phi、Mistral、Qwen 和 DeepSeek 蒸馏模型列为受支持的模型系列。页面还列出了内置聊天、提示词压缩、设备监控（GPU、内存、速度、温度），以及可把长查询发送到云端模型的可选“混合 AI 路由”。',
          'Google Play 上的标题是“Mobile LM Server - Local AI”，描述中则称之为“Mobile LLM Server”；开发者账号为“chaterminal”。它与名为 chaterminal 的开源 GitHub 项目（一个终端聊天工具）无关，也是与 [OlliteRT](/zh/power-local-llm/ollitert-review) 不同的应用，后者同样提供运行在手机上的 API。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Mobile LM Server 与其他 Android 应用一样从 Google Play 安装，无需旁加载或终端。** 页面上的开发者网站链接在 2026 年 10 月 26 日返回了拒绝访问错误，因此隐私政策页面在下方单独给出链接。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Android',
            '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm)（免费安装，含广告和应用内购买，需要 Android 7.0 或更高版本）',
          },
          {
            '平台': '网站',
            '获取方式': '[chaterminal.com](https://chaterminal.com/)（页面所链接；2026 年 10 月 26 日返回拒绝访问错误）',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[隐私政策](https://ledger.chaterminal.com/mobilellm/index.html)（页面生效日期为 2026 年 4 月）',
          },
        ],
        note: '所评测版本：1.1.10，Google Play 显示其更新于 2026 年 10 月 22 日。页面显示的唯一一条更新说明称，它修复了内置聊天中 GGUF 模型的在线搜索。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项均来自 Google Play 描述或其更新说明，均未经测试。**',
        ],
        items: [
          '**本地推理。** 模型通过 LiteRT-LM 或 llama.cpp 在设备上运行；描述称本地推理不需要联网、登录或共享数据。',
          '**API 服务器。** 手机可以提供 OpenAI 风格和 Ollama 风格的端点，供桌面工具、机器人和脚本使用。隐私政策把这种电脑到手机的流量描述为本地网络（LAN）通信。',
          '**内置聊天。** 针对已加载模型的聊天界面；1.1.10 版的更新说明为 GGUF 模型新增了在线搜索。',
          '**混合路由。** 达到本地上下文上限时，查询可以选择性地转交给云端模型；页面没有说明使用哪些提供商，也没有说明如何配置。',
          '**提示词压缩与监控。** 较长的系统提示词和工具描述在执行前会被压缩，应用还会显示 GPU 使用率、内存、生成速度和温度。',
        ],
        note: '页面和政策都是开发者自己的说法。最终以已安装的版本为准。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私、广告与网络使用',
        content: [
          '**根据隐私政策，提示词、模型输出和对话绝不会上传到任何服务器，但该应用确实会为广告收集使用数据。** 政策（2026 年 4 月生效）列出了应用启动、模型下载和模型启动事件、崩溃日志以及城市级的大致位置，用于广告投放、内容优化和服务改进。',
          'Google Play 的数据安全（Data safety）部分的说法不同：它写明“未收集数据”，同时又把位置列为应用可能与第三方共享的数据类型，并注明数据在传输中已加密、数据无法删除。页面带有“含广告”和“应用内购买”标签；描述没有说明这些购买项目能解锁什么。一位用户在 2026 年 9 月写道，托管 API 需要先观看一则广告，开发者回复称目前无法移除广告，并称最新版本可以把模型保存在设备上。这两种说法都出自各方自己，在此均未经测试。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该应用为闭源，因此这些说法均无法通过代码核查，PromptQuorum 也未审计网络流量或权限。处理机密提示词的人应先在自己的设备上核实其行为。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**想尝试把手机用作本地 API 端点的 Android 开发者。** 页面提供 OpenAI 风格和 Ollama 风格的端点，并配有两种引擎。',
          '**想在手机端运行 GGUF 的用户。** 页面提到支持 llama.cpp；你的模型文件能否加载则未经测试。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际使用表现。** 速度、耗电、发热和回答质量均未测量；本评测中没有任何内容来自实际运行该应用。',
          '**模型。** 页面列出了模型系列，但没有列出具体模型、大小或下载来源；一位用户提到从 Hugging Face 下载的文件很大。',
          '**API。** 哪些端点可用、是否有身份验证，以及广告提示如何影响服务器，均未经测试。',
          '**混合路由。** 开启路由后哪些云服务提供商会收到数据、发送的内容是什么，均无说明。',
          '**硬件需求。** 未说明内存或存储要求；唯一注明的下限是 Android 7.0。',
          '**许可证与源代码。** 未发现代码仓库；政策页脚写有“Open Source Project”但没有给出任何链接，因此该应用按闭源处理。',
          '**权限。** 未检查权限列表。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[OlliteRT](/zh/power-local-llm/ollitert-review)',
            '平台': 'Android',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '基于 LiteRT-LM 的开源手机端兼容 OpenAI 服务器',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源的设备端聊天客户端，自带模型库',
          },
          {
            '应用': '[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '来自 Google AI Edge 团队的开源设备端应用',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源离线聊天，支持设备端文档问答',
          },
        ],
        note: '竞品信息变化频繁；请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '“Chaterminal”是应用还是开发者？',
            a: 'Chaterminal 是 Google Play 上的开发者账号名；该应用名为 Mobile LM Server - Local AI，包名为 com.chaterminal.mobilellm。',
          },
          {
            q: 'Mobile LM Server 是开源的吗？',
            a: '未发现代码仓库。隐私政策页脚称其为开源项目，但没有链接任何代码，因此在发布代码仓库之前，本评测将其视为闭源。',
          },
          {
            q: '它能在 iPhone 或桌面上使用吗？',
            a: '未发现这样的版本；该页面仅限 Android。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Mobile LM Server 是一款持续更新的 Android 应用，把两种推理引擎、内置聊天和 OpenAI 风格的 API 放在一次免费安装中，但离线说法和 API 在此均未经测试，免费版含有广告，其隐私政策还列出了与广告相关的数据收集。它适合愿意尝试、并能接受来自一家小型开发者的闭源版本（其网站返回了错误）的开发者。想要开源服务器的读者应比较 [OlliteRT](/zh/power-local-llm/ollitert-review)；只需普通聊天的读者，请参阅 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 Mobile LM Server](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) — 描述、版本、更新日期、更新说明、标签、数据安全部分和用户评价，核实于 2026 年 10 月 26 日。',
          '[Mobile LM Server 隐私政策](https://ledger.chaterminal.com/mobilellm/index.html) — 数据处理、所收集的信息和 LAN 通信；页面生效日期为 2026 年 4 月。',
          '[chaterminal.com](https://chaterminal.com/) — 页面所链接的开发者网站；2026 年 10 月 26 日返回拒绝访问错误。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[OlliteRT 评测](/zh/power-local-llm/ollitert-review) — 一款在手机上提供兼容 OpenAI 的 API 的开源 Android 应用。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 一款适用于 iOS 和 Android 的免费、开源设备端聊天客户端。',
          '[Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google 的开源设备端 AI 应用。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 一款适用于 iPhone 和 Android 的免费、MIT 许可的离线聊天应用。',
          '[2026 年最佳 Android 本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用汇总。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-26',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/chaterminal-review-hero-ko.webp',
    title: 'Mobile LM Server 리뷰: 로컬 모델과 휴대폰 호스팅 API를 제공하는 Android 앱',
    seoTitle: 'Mobile LM Server 리뷰: Android 로컬 AI·API',
    intro:
      'Mobile LM Server(Google Play 패키지 com.chaterminal.mobilellm, 개발자 계정 "chaterminal")는 게재 정보에 따르면 GGUF와 LiteRT-LM 모델을 휴대폰에서 실행하고 OpenAI 호환 및 Ollama 호환 엔드포인트로 제공하는 Android 앱입니다. 광고와 인앱 구매가 포함되어 있습니다. 이 리뷰는 2026년 10월 26일에 확인한 Google Play 게재 정보와 그곳에 링크된 개인정보 처리방침을 근거로 하며, 직접 사용한 내용은 없습니다.',
    metaDescription:
      'Mobile LM Server 리뷰: GGUF와 LiteRT-LM 모델을 오프라인으로 실행하고 OpenAI 호환 API를 제공한다는 Android 앱. 광고, 인앱 구매, 확인되지 않은 주장.',
    twitterDescription:
      'Mobile LM Server 리뷰: GGUF와 LiteRT-LM 모델을 휴대폰에서 실행하고 OpenAI 호환 API를 제공한다는 Android 앱. Google Play 게재 정보와 개인정보 처리방침의 주장, 그리고 확인되지 않은 사항을 다룹니다.',
    audience:
      '휴대폰에서 모델을 실행하거나 휴대폰을 로컬 API 엔드포인트로 쓰고 싶은 Android 이용자와 개발자로, 게재 정보와 처리방침이 무엇을 확인해 주고 무엇을 확인해 주지 않는지, 앱이 무엇을 수집하는지 알아야 하는 분들.',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Mobile LM Server 리뷰',
    targetKeywords: [
      'mobile lm server 리뷰',
      'chaterminal mobile llm',
      'com.chaterminal.mobilellm',
      '안드로이드 openai 호환 api 서버 휴대폰',
      '안드로이드에서 gguf 모델 실행',
      'litert-lm llama.cpp 안드로이드 앱',
      'mobile lm server ollitert 비교',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Phi', 'Mistral', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Mobile LM Server는 GGUF와 LiteRT-LM 모델을 오프라인으로 실행하고 휴대폰을 OpenAI 호환 및 Ollama 호환 API 서버로 바꿔 준다고 밝히는 비공개 소스 Android 앱입니다.** 설치는 무료이지만 광고와 인앱 구매가 포함되어 있으며, 개인정보 처리방침에는 "완전한 로컬" 홍보와 함께 광고 관련 데이터 수집이 나열되어 있습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Mobile LM Server는 모델을 오프라인으로 실행하며 무료입니까?',
        answer:
          '게재 정보에 따르면 추론에 관해서는 그렇습니다. 모델은 계정 없이 휴대폰에서 실행되고 설치는 무료입니다. 같은 게재 정보에는 광고 포함과 인앱 구매 표시가 있으며, 오프라인 주장과 API 모두 여기서는 테스트하지 않았습니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm)에서 무료 설치, Android 7.0 이상.',
          '게재 정보에 명시된 두 엔진: GGUF 파일용 llama.cpp와 LiteRT-LM.',
          '선택 기능: 긴 컨텍스트를 위한 클라우드 라우팅과 내장 채팅의 온라인 검색.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Mobile LM Server란 무엇인가?', anchor: 'what-is-mobile-lm-server' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '개인정보, 광고, 네트워크 사용', anchor: 'privacy' },
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
            text: 'Mobile LM Server는 개발자에 따르면 오픈 웨이트 모델을 llama.cpp 또는 LiteRT-LM으로 휴대폰에서 실행하고 다른 기기에 OpenAI 방식 및 Ollama 방식 API 엔드포인트를 제공하는 비공개 소스 Android 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Google Play에서 설치하고 모델을 불러온 뒤 앱에서 채팅하거나 데스크톱 도구가 휴대폰을 가리키게 설정합니다. 하이브리드 클라우드 라우팅과 온라인 검색은 선택 기능이며, 무료 버전에는 광고가 포함됩니다.',
          },
        ],
        items: [
          '개발자: 게재 정보에 중국 주소가 적힌 "chaterminal"이라는 개발자 계정이며, 확인 시점에 개발자 웹사이트는 오류를 반환했습니다.',
          '도달 범위: Google Play에는 다운로드 1K+, 45개 평점의 평균 3.8이 표시되어 있어, 공개된 이력이 많지 않습니다.',
          '활동: 버전 1.1.10이 2026년 10월 22일에 업데이트되어, 앱이 활발히 개발되고 있습니다.',
          '플랫폼: Google Play를 통한 Android 7.0 이상만 지원하며, iPhone, 데스크톱, 웹 빌드는 찾지 못했습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 26일에 확인한 Google Play 게재 정보와 그곳에 링크된 개인정보 처리방침을 근거로 합니다. PromptQuorum은 앱을 설치하거나, 모델을 실행하거나, API를 호출하거나, 속도, 배터리 사용량, 네트워크 트래픽을 측정하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-mobile-lm-server',
        title: 'Mobile LM Server란 무엇인가?',
        content: [
          '**Mobile LM Server는 Google Play 게재 정보에 따르면 오픈 웨이트 언어 모델을 휴대폰에서 직접 실행하고 다른 기기를 위한 작은 추론 서버 역할도 할 수 있는 Android 앱입니다.** 게재 정보는 LiteRT-LM과 llama.cpp(GGUF 파일)라는 두 엔진을 명시하고, 지원 계열로 Llama, Gemma, Phi, Mistral, Qwen, DeepSeek 증류 모델을 나열합니다. 또한 내장 채팅, 프롬프트 압축, 기기 모니터링(GPU, 메모리, 속도, 온도), 긴 쿼리를 클라우드 모델로 보낼 수 있는 선택형 "하이브리드 AI 라우팅"을 나열합니다.',
          'Play 제목은 "Mobile LM Server - Local AI"이고 설명문은 "Mobile LLM Server"라고 부르며, 개발자 계정은 "chaterminal"입니다. 터미널 채팅 도구인 chaterminal이라는 오픈소스 GitHub 프로젝트와는 관련이 없고, 마찬가지로 휴대폰 호스팅 API를 제공하는 [OlliteRT](/ko/power-local-llm/ollitert-review)와는 다른 앱입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**Mobile LM Server는 다른 Android 앱처럼 Google Play에서 설치하며, 사이드로드나 터미널이 필요 없습니다.** 게재 정보에 있는 개발자 웹사이트 링크는 2026년 10월 26일에 접근 거부 오류를 반환했으므로, 개인정보 처리방침 페이지는 아래에 따로 링크합니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) (광고와 인앱 구매가 있는 무료 설치, Android 7.0 이상)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[chaterminal.com](https://chaterminal.com/) (게재 정보에서 링크됨, 2026년 10월 26일에 접근 거부 오류 반환)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[개인정보 처리방침](https://ledger.chaterminal.com/mobilellm/index.html) (페이지 시행일 2026년 4월)',
          },
        ],
        note: '확인한 버전은 1.1.10이며 Google Play에는 2026년 10월 22일에 업데이트된 것으로 표시되어 있습니다. 표시된 유일한 릴리스 노트에는 GGUF 모델에서 내장 채팅의 온라인 검색을 수정했다고 나와 있습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명 또는 릴리스 노트에서 가져온 것이며, 어느 것도 테스트하지 않았습니다.**',
        ],
        items: [
          '**로컬 추론.** 모델은 LiteRT-LM 또는 llama.cpp를 통해 기기에서 실행됩니다. 설명문에 따르면 로컬 추론에는 인터넷 연결, 로그인, 데이터 공유가 필요하지 않습니다.',
          '**API 서버.** 휴대폰이 OpenAI 방식 및 Ollama 방식 엔드포인트를 제공해 데스크톱 도구, 봇, 스크립트가 사용할 수 있습니다. 개인정보 처리방침은 이 PC와 휴대폰 간 트래픽을 로컬 네트워크(LAN) 통신이라고 설명합니다.',
          '**내장 채팅.** 불러온 모델용 채팅 화면이며, 1.1.10 릴리스 노트에 따르면 GGUF 모델용 온라인 검색이 추가되었습니다.',
          '**하이브리드 라우팅.** 로컬 컨텍스트 한도에 도달하면 쿼리를 선택적으로 클라우드 모델로 넘길 수 있습니다. 게재 정보에는 어떤 제공업체인지, 어떻게 설정하는지 나와 있지 않습니다.',
          '**프롬프트 압축과 모니터링.** 긴 시스템 프롬프트와 도구 설명은 실행 전에 압축되며, 앱은 GPU 사용량, 메모리, 생성 속도, 온도를 보여 줍니다.',
        ],
        note: '게재 정보와 처리방침은 개발자 자신의 진술입니다. 최종 기준은 설치된 빌드입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보, 광고, 네트워크 사용',
        content: [
          '**개인정보 처리방침에 따르면 프롬프트, 모델 출력, 대화는 어떤 서버에도 업로드되지 않지만, 앱은 광고를 위한 사용 데이터를 수집합니다.** 처리방침(시행일 2026년 4월)은 앱 실행, 모델 다운로드, 모델 시작 이벤트, 충돌 로그, 도시 단위의 대략적인 위치를 나열하며, 이는 광고 게재, 콘텐츠 최적화, 서비스 개선에 사용됩니다.',
          'Google Play 데이터 보안 항목은 다르게 표시됩니다. "수집된 데이터 없음"이라고 하면서 위치도 앱이 제3자와 공유할 수 있는 데이터 유형으로 나열하고, 데이터가 전송 중 암호화되며 데이터를 삭제할 수 없다고 명시합니다. 게재 정보에는 "광고 포함"과 "인앱 구매" 표시가 있지만, 설명문은 구매로 무엇이 해제되는지 밝히지 않습니다. 한 리뷰어는 2026년 9월에 API를 호스팅하려면 광고를 시청해야 했다고 적었고, 개발자는 현재 광고를 제거할 수 없으며 최신 버전에서는 모델을 기기에 저장할 수 있다고 답했습니다. 두 진술 모두 당사자 자신의 주장이며 여기서는 테스트하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 앱은 비공개 소스이므로 위 주장은 어느 것도 코드에서 확인할 수 없으며, PromptQuorum은 네트워크 트래픽이나 권한을 감사하지 않았습니다. 기밀 프롬프트를 다루는 분은 먼저 본인 기기에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**휴대폰을 로컬 API 엔드포인트로 시험해 보려는 Android 개발자.** 게재 정보는 두 엔진과 함께 OpenAI 방식 및 Ollama 방식 엔드포인트를 제공한다고 밝힙니다.',
          '**휴대폰에서 돌릴 실행기를 찾는 GGUF 사용자.** 게재 정보에 llama.cpp 지원이 명시되어 있으며, 내 모델 파일이 불러와지는지는 테스트하지 않았습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 사용 성능.** 속도, 배터리 사용량, 발열, 답변 품질은 측정하지 않았으며, 이 리뷰의 어떤 내용도 앱을 실행해서 얻은 것이 아닙니다.',
          '**모델.** 게재 정보는 계열만 명시하고 구체적인 모델, 크기, 다운로드 출처는 밝히지 않습니다. 한 리뷰어는 Hugging Face에서 받는 큰 다운로드를 언급합니다.',
          '**API.** 어떤 엔드포인트가 동작하는지, 인증이 있는지, 광고 프롬프트가 서버에 어떤 영향을 주는지는 테스트하지 않았습니다.',
          '**하이브리드 라우팅.** 라우팅을 켰을 때 어떤 클라우드 제공업체가 데이터를 받는지, 무엇이 전송되는지는 설명되어 있지 않습니다.',
          '**하드웨어 요구 사항.** RAM이나 저장 공간 요구 사항은 명시되어 있지 않으며, 명시된 최소 조건은 Android 7.0뿐입니다.',
          '**라이선스와 소스 코드.** 저장소를 찾지 못했습니다. 처리방침 하단에는 "Open Source Project"라고 적혀 있지만 링크가 없으므로, 앱을 비공개 소스로 취급합니다.',
          '**권한.** 권한 목록은 살펴보지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[OlliteRT](/ko/power-local-llm/ollitert-review)',
            '플랫폼': 'Android',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'LiteRT-LM 기반의 오픈소스 휴대폰 호스팅 OpenAI 호환 서버',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '자체 모델 라이브러리를 갖춘 오픈소스 온디바이스 채팅 클라이언트',
          },
          {
            '앱': '[Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'Google AI Edge 팀이 만든 오픈소스 온디바이스 앱',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '온디바이스 문서 질의응답을 갖춘 오픈소스 오프라인 채팅',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀌므로, 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '"Chaterminal"은 앱 이름입니까, 개발자 이름입니까?',
            a: 'Chaterminal은 Google Play의 개발자 계정 이름입니다. 앱 제목은 Mobile LM Server - Local AI이며 패키지 이름은 com.chaterminal.mobilellm입니다.',
          },
          {
            q: 'Mobile LM Server는 오픈소스입니까?',
            a: '저장소를 찾지 못했습니다. 개인정보 처리방침 하단은 오픈소스 프로젝트라고 하지만 코드 링크가 없으므로, 이 리뷰는 저장소가 공개될 때까지 비공개 소스로 취급합니다.',
          },
          {
            q: 'iPhone이나 데스크톱에서도 작동합니까?',
            a: '그런 빌드는 찾지 못했으며, 게재 정보는 Android 전용입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Mobile LM Server는 두 추론 엔진, 내장 채팅, OpenAI 방식 API를 무료 설치 하나에 담은 활발히 업데이트되는 Android 앱입니다. 다만 오프라인 주장과 API는 여기서 테스트하지 않았고, 무료 버전에는 광고와 광고 관련 데이터 수집을 나열한 개인정보 처리방침이 따릅니다. 웹사이트가 오류를 반환한 소규모 개발자의 비공개 소스 빌드를 감수하고 실험해 보려는 개발자에게 적합합니다. 오픈소스 서버를 원한다면 [OlliteRT](/ko/power-local-llm/ollitert-review)를 비교해 보고, 단순한 채팅은 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 참고하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 Mobile LM Server](https://play.google.com/store/apps/details?id=com.chaterminal.mobilellm) — 설명, 버전, 업데이트 날짜, 릴리스 노트, 표시, 데이터 보안 항목, 리뷰. 2026년 10월 26일 확인.',
          '[Mobile LM Server 개인정보 처리방침](https://ledger.chaterminal.com/mobilellm/index.html) — 데이터 처리, 수집 정보, LAN 통신. 페이지 시행일 2026년 4월.',
          '[chaterminal.com](https://chaterminal.com/) — 게재 정보에서 링크된 개발자 웹사이트. 2026년 10월 26일에 접근 거부 오류를 반환했습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[OlliteRT 리뷰](/ko/power-local-llm/ollitert-review) — 휴대폰에서 OpenAI 호환 API를 제공하는 오픈소스 Android 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 온디바이스 채팅 클라이언트.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 오픈소스 온디바이스 AI 앱.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone과 Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[2026년 Android 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 더 넓은 Android 모음 글.',
        ],
      },
    },
  },
}
