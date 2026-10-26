// Laria Review: Paid Android AI Assistant With Local Models
// Slug: laria-review
// Companion to: layla-review, tokforge-review, pocketpal-ai-review, private-mind-review, best-local-llm-apps-android-2026
// Sources: Google Play listing com.mick.genai.laria (read 2026-10-26, incl. storefront prices via hl/gl), the developer's product page
// mick-software.com/main/laria.html, its privacy notice and studio site — all read 2026-10-26. No hands-on use: the review says so.
// The Play web page shows no version number => no pqReview on the tile and no version in the text. Last upstream update
// 2026-10-23 (3 days old) => no stale warning. Request came from the site owner, not from the developer: no maker comment exists.
// Storefront prices in the getIt table: US $4.99, DE 4.49 EUR, FR/ES 2.90 EUR, JP 790 JPY, BR R$ 10.99, KR 1,200 KRW (ZH/AR: USD).
// geo-translation applied from docs/geo-translation.md (readTime/tldr titles, /{lang} link prefixes, rekeyed table rows, no schema outside EN).

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
    heroImage: '/images/laria-review-hero-en.webp',
    title: 'Laria Review: Paid Android AI Assistant With Local Models',
    seoTitle: 'Laria Review: Android AI Assistant With Local Models',
    intro:
      'Laria is a paid Android AI assistant from MiCK Software, an independent studio in France. According to its Google Play listing and the developer\'s website, it runs downloadable models on the phone and can also connect to cloud providers and private servers. This review reflects those sources, checked on 26 October 2026; PromptQuorum did not test the app.',
    metaDescription:
      'Laria review: paid, closed-source Android AI assistant with downloadable local models, optional cloud providers, image tools and AI identities.',
    twitterDescription:
      'Laria review: a paid Android AI assistant that mixes downloadable on-device models with optional cloud providers. What the listing and the developer claim, and what is unverified.',
    audience:
      'Android users who want local AI models on the phone, with optional cloud providers, and who need to know what the sources confirm and what they do not.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Laria review',
    targetKeywords: [
      'laria app review',
      'laria local ai assistant',
      'offline ai assistant android',
      'android app local models gemma qwen',
      'ai identities android app',
      'com.mick.genai.laria',
      'laria vs layla',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Laria is a closed-source Android app that runs downloadable AI models on the phone and can optionally connect to cloud providers, with customizable AI identities and image tools.**',
    quickAnswerTop: {
      en: {
        question: 'Is Laria really offline?',
        answer:
          'According to the listing and the developer\'s privacy notice, chats with a downloaded local model run on the phone and collect no data. Cloud providers, web search and some image services need a connection, and none of this was tested.',
        bullets: [
          'A paid install on [Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria).',
          'Local model families named in the listing: Gemma, Granite, Mistral, Phi, Qwen, DeepSeek and SmolLM.',
          'Home-screen widgets and reminders for news or weather summaries.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Laria?', anchor: 'what-is-laria' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
      { label: 'Content and Age Rating', anchor: 'content-rating' },
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
            text: 'Laria is a closed-source Android app that, according to its developer, runs downloadable AI models on the phone and can also use online providers and private servers.',
          },
          {
            type: 'plain-terms',
            text: 'You buy it on Google Play, download one or more models inside the app and chat with them; online providers are optional extras that send your prompts to those services. Each "identity" is a separate assistant with its own model, voice and instructions.',
          },
        ],
        items: [
          'Developer: MiCK Software, an independent studio in France that also publishes Picagen, HarmonyX and other Android apps.',
          'Reach: Google Play shows 1K+ downloads and a 2.9 average from 89 reviews, so the track record is small and mixed.',
          'Platform: Android through Google Play only; no iPhone, desktop or web build was found.',
          'Content: Google Play rates it Teen, and the developer\'s model page shows companion-style sample replies, some of them sexually explicit.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play listing, the developer\'s product page and its privacy notice, checked on 26 October 2026. PromptQuorum did not run, test or benchmark the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-laria',
        title: 'What Is Laria?',
        content: [
          '**Laria (listed on Google Play as "LARIA - Local AI Assistant") is an Android assistant that combines models downloaded to the phone with optional online providers.** The listing describes chat, writing and brainstorming, image generation, reminders and "AI identities": separate assistants, each with its own name, avatar, system prompt, model or provider, voice, color theme, greeting and web-search setting. The developer\'s site calls it "a premium offline AI companion".',
          'The developer is MiCK Software, and the app is published only on Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Laria is installed from Google Play as a paid app; no sign-up or terminal is involved.** The developer\'s product page links to the same listing.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) (paid install; $4.99 on the US store, other stores price it differently)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[mick-software.com](https://mick-software.com/main/laria.html) (official product page with the model overview)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[MiCK Software privacy notice](https://mick-software.com/main/privacy-notice.html) (covers all of the studio\'s Android apps)',
          },
        ],
        note: 'Last updated on Google Play: 23 October 2026 (release note: "UX improvements & bug fixes"). Neither the web listing nor the developer\'s page shows a version number, so none is stated here.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description or the developer\'s product page.**',
        ],
        items: [
          '**Local models.** Downloadable models for on-device chat; the app recommends models for your hardware. The developer\'s page also names LFM models and shows LiteRT, ONNX and GGUF builds.',
          '**Model overview.** The developer\'s page scores each local model on speed, reasoning, warmth and stability from its own benchmark runs; these are the developer\'s ratings, not PromptQuorum\'s.',
          '**Online providers and endpoints.** Gemini, OpenAI, OpenRouter, Anthropic, xAI/Grok, Ollama-compatible endpoints and OpenAI-compatible private servers; the developer\'s page adds LM Studio, vLLM, LocalAI and llama.cpp server.',
          '**AI identities.** Several assistants, each with its own name, avatar, system prompt, model or provider, voice and greeting.',
          '**Images.** Image generation with offline image models, private image servers or online services, with controls for size, steps, quality, count and strength; compatible multimodal models can discuss attached images.',
          '**Daily use.** Identity widgets on the Android home screen, reminders for news, weather summaries or personal instructions, and voice playback with optional ambient sound.',
        ],
        note: 'The listing says local performance depends on the device: small models are faster and run on more phones.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**According to the developer\'s privacy notice, no data is collected when you use a local model.** When online services are used, MiCK Software says it does not collect personal data, but the third-party providers may process it under their own policies.',
          'The Google Play Data safety section says "No data collected", also states that data is not encrypted and cannot be deleted, and lists Location among the data types that may be shared with third parties; the listing does not explain how these statements fit together.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source, so none of these claims can be checked in code, and PromptQuorum has not audited network traffic or reviewed the app\'s permissions.',
          },
        ],
      },
      contentRating: {
        id: 'content-rating',
        title: 'Content and Age Rating',
        content: [
          '**Google Play rates Laria Teen with the descriptor "Diverse Content: Discretion Advised".** The listing presents a general assistant, but the developer\'s model page shows companion-style sample replies, and some of the samples are romantic or sexually explicit; the page also scores models for "freedom". Check this before installing on a shared or work device.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Android users who want local models and cloud providers in one paid app.** The sources describe both.',
          '**Readers who like separate assistants.** Each identity can have its own model, voice and system prompt.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** Speed, battery use and answer quality were not assessed. Some August 2026 Google Play reviews report freezes or crashes on certain phones, and the developer replied with settings to try; these are user reports, not tested here.',
          '**Offline use.** Download sizes, which models run on which phones and whether the app works in airplane mode are untested.',
          '**Hardware needs.** No RAM or storage requirement is stated.',
          '**License and source code.** No public repository was found, so the app is treated as closed source.',
          '**Purchases and ads.** The listing page shows a paid install and no in-app-purchase or ads label; the app itself was not opened.',
          '**Version.** No version number is published on the sources read.',
          '**Developer\'s scores.** The model ratings on the developer\'s page were not independently checked.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Layla](/power-local-llm/layla-review)',
            'Platforms': 'Android',
            'Price / license': 'Freemium / closed source',
            'Key difference': 'Android-first local LLM app',
          },
          {
            'App': '[TokForge](/power-local-llm/tokforge-review)',
            'Platforms': 'Android',
            'Price / license': 'Free / proprietary',
            'Key difference': 'Offline chat with roleplay characters, image generation, voice and a speed leaderboard',
          },
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
            q: 'Is Laria related to Layla?',
            a: 'No connection was found. They are separate apps with similar names; Laria is made by MiCK Software.',
          },
          {
            q: 'Does Laria work on iPhone or desktop?',
            a: 'No such build was found. The developer\'s page offers only Google Play.',
          },
          {
            q: 'Is the project still active?',
            a: 'Google Play shows an update on 23 October 2026, and the developer\'s site lists Laria among its projects in progress.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Laria is a paid Android assistant that combines downloadable on-device models with optional cloud providers, and it was updated on 23 October 2026. Against that stand a low user rating, crash reports on some phones, no public source code and a Teen rating with the note "Discretion Advised", next to sexually explicit companion-style samples on the developer\'s page. It suits readers who want to test local models alongside cloud providers; those who want an open-source or free option should compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private Mind](/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LARIA on Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) — description, update date, downloads, ratings, content rating and Data safety section, checked 26 October 2026.',
          '[Laria product page](https://mick-software.com/main/laria.html) — the developer\'s feature overview, endpoint list and model overview, checked 26 October 2026.',
          '[MiCK Software privacy notice](https://mick-software.com/main/privacy-notice.html) — data handling for local and online use, checked 26 October 2026.',
          '[MiCK Software](https://mick-software.com/main/) — the studio\'s site with its app list and project status, checked 26 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Layla Review](/power-local-llm/layla-review) — an Android-first local LLM app.',
          '[TokForge Review](/power-local-llm/tokforge-review) — an offline Android chat app with roleplay characters and image generation.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Laria Review: Paid Android AI Assistant With Local Models',
      description:
        'Laria review: a paid, closed-source Android AI assistant with downloadable local models and optional cloud providers. What the Google Play listing and developer claim, and what is unverified.',
      url: 'https://www.promptquorum.com/power-local-llm/laria-review',
      inLanguage: 'en',
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Android users evaluating an AI assistant with on-device models' },
      about: [
        { '@type': 'Thing', name: 'Laria' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Android' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/laria-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Laria Review', item: 'https://www.promptquorum.com/power-local-llm/laria-review' },
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
    heroImage: '/images/laria-review-hero-de.webp',
    title: 'Laria-Rezension: Bezahlter Android-KI-Assistent mit lokalen Modellen',
    seoTitle: 'Laria-Rezension: Android-KI-Assistent mit lokalen Modellen',
    intro:
      'Laria ist ein kostenpflichtiger KI-Assistent für Android von MiCK Software, einem unabhängigen Studio in Frankreich. Laut Google-Play-Eintrag und Website des Entwicklers führt die App herunterladbare Modelle auf dem Telefon aus und kann sich zusätzlich mit Cloud-Anbietern und privaten Servern verbinden. Diese Rezension gibt diese Quellen wieder, geprüft am 26. Oktober 2026; PromptQuorum hat die App nicht getestet.',
    metaDescription:
      'Laria-Rezension: kostenpflichtiger, nicht quelloffener Android-KI-Assistent mit lokalen Modellen, optionalen Cloud-Anbietern und Bildwerkzeugen.',
    twitterDescription:
      'Laria-Rezension: ein kostenpflichtiger Android-KI-Assistent, der herunterladbare On-Device-Modelle mit optionalen Cloud-Anbietern verbindet. Was Eintrag und Entwickler behaupten und was ungeprüft ist.',
    audience:
      'Android-Nutzer, die lokale KI-Modelle auf dem Telefon wollen, optional mit Cloud-Anbietern, und wissen müssen, was die Quellen bestätigen und was nicht.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Laria Rezension',
    targetKeywords: [
      'laria app test',
      'laria lokaler ki-assistent',
      'offline ki assistent android',
      'android app lokale modelle gemma qwen',
      'ki-identitäten android app',
      'com.mick.genai.laria',
      'laria vs layla',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Laria ist eine nicht quelloffene Android-App, die herunterladbare KI-Modelle auf dem Telefon ausführt und sich optional mit Cloud-Anbietern verbinden kann, mit anpassbaren KI-Identitäten und Bildwerkzeugen.**',
    quickAnswerTop: {
      de: {
        question: 'Läuft Laria wirklich offline?',
        answer:
          'Laut Eintrag und Datenschutzerklärung des Entwicklers laufen Chats mit einem heruntergeladenen lokalen Modell auf dem Telefon und erheben keine Daten. Cloud-Anbieter, Websuche und manche Bilddienste brauchen eine Verbindung; nichts davon wurde getestet.',
        bullets: [
          'Kostenpflichtige Installation bei [Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria).',
          'Im Eintrag genannte lokale Modellfamilien: Gemma, Granite, Mistral, Phi, Qwen, DeepSeek und SmolLM.',
          'Widgets für den Startbildschirm und Erinnerungen für Nachrichten- oder Wetterzusammenfassungen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Laria?', anchor: 'what-is-laria' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
      { label: 'Inhalte und Altersfreigabe', anchor: 'content-rating' },
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
            text: 'Laria ist eine nicht quelloffene Android-App, die laut Entwickler herunterladbare KI-Modelle auf dem Telefon ausführt und auch Online-Anbieter und private Server nutzen kann.',
          },
          {
            type: 'plain-terms',
            text: 'Sie kaufen die App bei Google Play, laden in der App ein oder mehrere Modelle herunter und chatten mit ihnen; Online-Anbieter sind optionale Extras, die Ihre Eingaben an diese Dienste senden. Jede „Identität“ ist ein eigener Assistent mit eigenem Modell, eigener Stimme und eigenen Anweisungen.',
          },
        ],
        items: [
          'Entwickler: MiCK Software, ein unabhängiges Studio in Frankreich, das auch Picagen, HarmonyX und weitere Android-Apps veröffentlicht.',
          'Reichweite: Google Play zeigt 1K+ Downloads und einen Durchschnitt von 2,9 bei 89 Bewertungen; die Erfolgsbilanz ist also klein und gemischt.',
          'Plattform: nur Android über Google Play; ein Build für iPhone, Desktop oder Web wurde nicht gefunden.',
          'Inhalte: Google Play stuft die App als „Teen“ ein, und die Modellseite des Entwicklers zeigt Beispielantworten im Companion-Stil, einige davon sexuell explizit.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den Google-Play-Eintrag, die Produktseite des Entwicklers und seine Datenschutzerklärung, geprüft am 26. Oktober 2026. PromptQuorum hat die App weder ausgeführt noch getestet oder einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-laria',
        title: 'Was ist Laria?',
        content: [
          '**Laria (bei Google Play als „LARIA - Local AI Assistant“ gelistet) ist ein Android-Assistent, der auf das Telefon heruntergeladene Modelle mit optionalen Online-Anbietern kombiniert.** Der Eintrag beschreibt Chat, Schreiben und Brainstorming, Bildgenerierung, Erinnerungen und „KI-Identitäten“: getrennte Assistenten mit eigenem Namen, Avatar, Systemprompt, Modell oder Anbieter, eigener Stimme, Farbgestaltung, Begrüßung und Websuche-Einstellung. Die Website des Entwicklers nennt die App „a premium offline AI companion“.',
          'Entwickler ist MiCK Software; die App wird ausschließlich über Google Play veröffentlicht.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Laria wird als kostenpflichtige App über Google Play installiert; Registrierung oder Terminal sind nicht nötig.** Die Produktseite des Entwicklers verlinkt auf denselben Eintrag.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) (kostenpflichtige Installation; 4,49 € im deutschen Store, andere Stores nennen andere Preise)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[mick-software.com](https://mick-software.com/main/laria.html) (offizielle Produktseite mit Modellübersicht)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung von MiCK Software](https://mick-software.com/main/privacy-notice.html) (gilt für alle Android-Apps des Studios)',
          },
        ],
        note: 'Zuletzt bei Google Play aktualisiert: 23. Oktober 2026 (Hinweis zur Version: „UX improvements & bug fixes“). Weder der Web-Eintrag noch die Seite des Entwicklers nennt eine Versionsnummer, daher wird hier keine angegeben.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Google-Play-Beschreibung oder der Produktseite des Entwicklers.**',
        ],
        items: [
          '**Lokale Modelle.** Herunterladbare Modelle für Chat auf dem Gerät; die App empfiehlt Modelle passend zu Ihrer Hardware. Die Seite des Entwicklers nennt zusätzlich LFM-Modelle und zeigt Builds in den Formaten LiteRT, ONNX und GGUF.',
          '**Modellübersicht.** Die Seite des Entwicklers bewertet jedes lokale Modell nach Tempo, Schlussfolgern, Wärme und Stabilität anhand eigener Benchmark-Läufe; das sind die Bewertungen des Entwicklers, nicht die von PromptQuorum.',
          '**Online-Anbieter und Endpunkte.** Gemini, OpenAI, OpenRouter, Anthropic, xAI/Grok, Ollama-kompatible Endpunkte und OpenAI-kompatible private Server; die Seite des Entwicklers ergänzt LM Studio, vLLM, LocalAI und den llama.cpp-Server.',
          '**KI-Identitäten.** Mehrere Assistenten, jeweils mit eigenem Namen, Avatar, Systemprompt, Modell oder Anbieter, eigener Stimme und Begrüßung.',
          '**Bilder.** Bildgenerierung mit Offline-Bildmodellen, privaten Bildservern oder Online-Diensten, mit Einstellungen für Größe, Schritte, Qualität, Anzahl und Stärke; kompatible multimodale Modelle können angehängte Bilder besprechen.',
          '**Alltag.** Identitäts-Widgets auf dem Android-Startbildschirm, Erinnerungen für Nachrichten, Wetterzusammenfassungen oder persönliche Anweisungen sowie Sprachausgabe mit optionaler Hintergrundkulisse.',
        ],
        note: 'Laut Eintrag hängt die lokale Leistung vom Gerät ab: Kleine Modelle sind schneller und laufen auf mehr Telefonen.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Laut Datenschutzerklärung des Entwicklers werden bei Nutzung eines lokalen Modells keine Daten erhoben.** Bei Online-Diensten erhebt MiCK Software nach eigener Aussage keine personenbezogenen Daten, doch die Drittanbieter können sie nach ihren eigenen Richtlinien verarbeiten.',
          'Der Abschnitt „Datensicherheit“ bei Google Play nennt „Keine Daten erhoben“, gibt zugleich an, dass Daten nicht verschlüsselt werden und nicht gelöscht werden können, und führt Standort unter den Datentypen auf, die an Dritte weitergegeben werden können; der Eintrag erklärt nicht, wie diese Angaben zusammenpassen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App ist nicht quelloffen, sodass sich keine dieser Angaben im Code prüfen lässt; PromptQuorum hat weder den Netzwerkverkehr geprüft noch die Berechtigungen der App ausgewertet.',
          },
        ],
      },
      contentRating: {
        id: 'content-rating',
        title: 'Inhalte und Altersfreigabe',
        content: [
          '**Google Play stuft Laria als „Teen“ mit dem Hinweis „Diverse Content: Discretion Advised“ ein.** Der Eintrag stellt einen allgemeinen Assistenten vor, doch die Modellseite des Entwicklers zeigt Beispielantworten im Companion-Stil, und einige der Beispiele sind romantisch oder sexuell explizit; die Seite bewertet Modelle außerdem nach „Freiheit“. Prüfen Sie das vor der Installation auf einem geteilten oder dienstlichen Gerät.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Android-Nutzer, die lokale Modelle und Cloud-Anbieter in einer kostenpflichtigen App wollen.** Die Quellen beschreiben beides.',
          '**Leser, die getrennte Assistenten mögen.** Jede Identität kann ein eigenes Modell, eine eigene Stimme und einen eigenen Systemprompt haben.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praxisleistung.** Tempo, Akkuverbrauch und Antwortqualität wurden nicht bewertet. Einige Google-Play-Rezensionen vom August 2026 berichten von Hängern oder Abstürzen auf bestimmten Telefonen, und der Entwickler antwortete mit Einstellungen zum Ausprobieren; das sind Nutzerberichte, hier nicht getestet.',
          '**Offline-Nutzung.** Downloadgrößen, welche Modelle auf welchen Telefonen laufen und ob die App im Flugmodus funktioniert, sind ungetestet.',
          '**Hardwarebedarf.** Eine RAM- oder Speicheranforderung wird nicht genannt.',
          '**Lizenz und Quellcode.** Es wurde kein öffentliches Repository gefunden, daher gilt die App als nicht quelloffen.',
          '**Käufe und Werbung.** Die Eintragsseite zeigt eine kostenpflichtige Installation und kein Label für In-App-Käufe oder Werbung; die App selbst wurde nicht geöffnet.',
          '**Version.** In den gelesenen Quellen wird keine Versionsnummer veröffentlicht.',
          '**Bewertungen des Entwicklers.** Die Modellbewertungen auf der Seite des Entwicklers wurden nicht unabhängig geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[Layla](/de/power-local-llm/layla-review)',
            'Plattformen': 'Android',
            'Preis / Lizenz': 'Freemium / nicht quelloffen',
            'Wesentlicher Unterschied': 'Android-zentrierte App für lokale LLMs',
          },
          {
            'App': '[TokForge](/de/power-local-llm/tokforge-review)',
            'Plattformen': 'Android',
            'Preis / Lizenz': 'Kostenlos / proprietär',
            'Wesentlicher Unterschied': 'Offline-Chat mit Rollenspiel-Charakteren, Bildgenerierung, Sprache und Geschwindigkeits-Rangliste',
          },
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
            'Wesentlicher Unterschied': 'Quelloffener Offline-Chat mit Dokumentenfragen auf dem Gerät',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Hat Laria etwas mit Layla zu tun?',
            a: 'Es wurde keine Verbindung gefunden. Es sind getrennte Apps mit ähnlichen Namen; Laria stammt von MiCK Software.',
          },
          {
            q: 'Läuft Laria auf iPhone oder Desktop?',
            a: 'Ein solcher Build wurde nicht gefunden. Die Seite des Entwicklers bietet nur Google Play an.',
          },
          {
            q: 'Wird das Projekt noch weiterentwickelt?',
            a: 'Google Play zeigt ein Update vom 23. Oktober 2026, und die Website des Entwicklers führt Laria unter den laufenden Projekten.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Laria ist ein kostenpflichtiger Android-Assistent, der herunterladbare On-Device-Modelle mit optionalen Cloud-Anbietern verbindet und am 23. Oktober 2026 aktualisiert wurde. Dem stehen eine niedrige Nutzerbewertung, Absturzberichte auf einigen Telefonen, fehlender öffentlicher Quellcode und eine „Teen“-Einstufung mit dem Hinweis „Discretion Advised“, daneben sexuell explizite Companion-Beispiele auf der Seite des Entwicklers. Die App eignet sich für Leser, die lokale Modelle neben Cloud-Anbietern ausprobieren wollen; wer eine quelloffene oder kostenlose Option sucht, sollte [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private Mind](/de/power-local-llm/private-mind-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LARIA bei Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) — Beschreibung, Aktualisierungsdatum, Downloads, Bewertungen, Altersfreigabe und Abschnitt „Datensicherheit“, geprüft am 26. Oktober 2026.',
          '[Laria-Produktseite](https://mick-software.com/main/laria.html) — Funktionsübersicht, Endpunktliste und Modellübersicht des Entwicklers, geprüft am 26. Oktober 2026.',
          '[Datenschutzerklärung von MiCK Software](https://mick-software.com/main/privacy-notice.html) — Datenverarbeitung bei lokaler und Online-Nutzung, geprüft am 26. Oktober 2026.',
          '[MiCK Software](https://mick-software.com/main/) — Website des Studios mit App-Liste und Projektstatus, geprüft am 26. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Layla-Rezension](/de/power-local-llm/layla-review) — eine Android-zentrierte App für lokale LLMs.',
          '[TokForge-Rezension](/de/power-local-llm/tokforge-review) — eine Offline-Chat-App für Android mit Rollenspiel-Charakteren und Bildgenerierung.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.',
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
    heroImage: '/images/laria-review-hero-es.webp',
    title: 'Reseña de Laria: asistente de IA de pago para Android con modelos locales',
    seoTitle: 'Reseña de Laria: asistente de IA con modelos locales',
    intro:
      'Laria es un asistente de IA de pago para Android de MiCK Software, un estudio independiente en Francia. Según su ficha de Google Play y el sitio del desarrollador, ejecuta modelos descargables en el teléfono y también puede conectarse a proveedores en la nube y a servidores privados. Esta reseña refleja esas fuentes, consultadas el 26 de octubre de 2026; PromptQuorum no probó la app.',
    metaDescription:
      'Reseña de Laria: asistente de IA Android de pago y código cerrado, con modelos locales descargables, proveedores en la nube opcionales e imagen.',
    twitterDescription:
      'Reseña de Laria: un asistente de IA Android de pago que combina modelos locales descargables con proveedores en la nube opcionales. Qué afirman la ficha y el desarrollador, y qué no está verificado.',
    audience:
      'Usuarios de Android que quieren modelos de IA locales en el teléfono, con proveedores en la nube opcionales, y necesitan saber qué confirman las fuentes y qué no.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Laria',
    targetKeywords: [
      'reseña app laria',
      'laria asistente de ia local',
      'asistente de ia sin conexión android',
      'app android modelos locales gemma qwen',
      'identidades de ia app android',
      'com.mick.genai.laria',
      'laria vs layla',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Laria es una app de Android de código cerrado que ejecuta modelos de IA descargables en el teléfono y puede conectarse, de forma opcional, a proveedores en la nube, con identidades de IA personalizables y herramientas de imagen.**',
    quickAnswerTop: {
      es: {
        question: '¿Funciona Laria realmente sin conexión?',
        answer:
          'Según la ficha y el aviso de privacidad del desarrollador, los chats con un modelo local descargado se ejecutan en el teléfono y no recopilan datos. Los proveedores en la nube, la búsqueda web y algunos servicios de imagen necesitan conexión; nada de esto se probó.',
        bullets: [
          'Instalación de pago en [Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria).',
          'Familias de modelos locales citadas en la ficha: Gemma, Granite, Mistral, Phi, Qwen, DeepSeek y SmolLM.',
          'Widgets para la pantalla de inicio y recordatorios de resúmenes de noticias o del tiempo.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Laria?', anchor: 'what-is-laria' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y uso de la red', anchor: 'privacy' },
      { label: 'Contenido y clasificación por edades', anchor: 'content-rating' },
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
            text: 'Laria es una app de Android de código cerrado que, según su desarrollador, ejecuta modelos de IA descargables en el teléfono y también puede usar proveedores en línea y servidores privados.',
          },
          {
            type: 'plain-terms',
            text: 'La compras en Google Play, descargas uno o varios modelos dentro de la app y chateas con ellos; los proveedores en línea son extras opcionales que envían tus mensajes a esos servicios. Cada «identidad» es un asistente aparte, con su propio modelo, voz e instrucciones.',
          },
        ],
        items: [
          'Desarrollador: MiCK Software, un estudio independiente en Francia que también publica Picagen, HarmonyX y otras apps de Android.',
          'Alcance: Google Play muestra más de 1000 descargas y una media de 2.9 con 89 reseñas, así que su trayectoria es pequeña y desigual.',
          'Plataforma: solo Android a través de Google Play; no se encontró ninguna versión para iPhone, escritorio o web.',
          'Contenido: Google Play la clasifica como «Teen», y la página de modelos del desarrollador muestra respuestas de ejemplo de estilo acompañante, algunas sexualmente explícitas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la ficha de Google Play, la página de producto del desarrollador y su aviso de privacidad, consultados el 26 de octubre de 2026. PromptQuorum no ejecutó, probó ni midió la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-laria',
        title: '¿Qué es Laria?',
        content: [
          '**Laria (listada en Google Play como «LARIA - Local AI Assistant») es un asistente para Android que combina modelos descargados en el teléfono con proveedores en línea opcionales.** La ficha describe chat, redacción y lluvia de ideas, generación de imágenes, recordatorios e «identidades de IA»: asistentes independientes, cada uno con su nombre, avatar, prompt de sistema, modelo o proveedor, voz, tema de color, saludo y ajuste de búsqueda web. El sitio del desarrollador la llama «a premium offline AI companion».',
          'El desarrollador es MiCK Software, y la app solo se publica en Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**Laria se instala desde Google Play como app de pago; no hace falta registrarse ni usar un terminal.** La página de producto del desarrollador enlaza a la misma ficha.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) (instalación de pago; 2,90 € en la tienda de España, otras tiendas muestran otros precios)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[mick-software.com](https://mick-software.com/main/laria.html) (página oficial del producto con la vista general de modelos)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Aviso de privacidad de MiCK Software](https://mick-software.com/main/privacy-notice.html) (cubre todas las apps de Android del estudio)',
          },
        ],
        note: 'Última actualización en Google Play: 23 de octubre de 2026 (nota de versión: «UX improvements & bug fixes»). Ni la ficha web ni la página del desarrollador muestran un número de versión, así que aquí no se indica ninguno.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto siguiente procede de la descripción de Google Play o de la página de producto del desarrollador.**',
        ],
        items: [
          '**Modelos locales.** Modelos descargables para chatear en el dispositivo; la app recomienda modelos según tu hardware. La página del desarrollador también nombra modelos LFM y muestra compilaciones en formatos LiteRT, ONNX y GGUF.',
          '**Vista general de modelos.** La página del desarrollador puntúa cada modelo local en velocidad, razonamiento, calidez y estabilidad a partir de sus propias pruebas; son valoraciones del desarrollador, no de PromptQuorum.',
          '**Proveedores en línea y endpoints.** Gemini, OpenAI, OpenRouter, Anthropic, xAI/Grok, endpoints compatibles con Ollama y servidores privados compatibles con OpenAI; la página del desarrollador añade LM Studio, vLLM, LocalAI y el servidor de llama.cpp.',
          '**Identidades de IA.** Varios asistentes, cada uno con su nombre, avatar, prompt de sistema, modelo o proveedor, voz y saludo.',
          '**Imágenes.** Generación de imágenes con modelos sin conexión, servidores de imagen privados o servicios en línea, con ajustes de tamaño, pasos, calidad, cantidad e intensidad; los modelos multimodales compatibles pueden comentar imágenes adjuntas.',
          '**Uso diario.** Widgets de identidad en la pantalla de inicio de Android, recordatorios de noticias, resúmenes del tiempo o instrucciones personales, y reproducción de voz con sonido ambiente opcional.',
        ],
        note: 'Según la ficha, el rendimiento local depende del dispositivo: los modelos pequeños son más rápidos y funcionan en más teléfonos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**Según el aviso de privacidad del desarrollador, no se recopilan datos cuando usas un modelo local.** Cuando se usan servicios en línea, MiCK Software dice que no recopila datos personales, pero los proveedores externos pueden tratarlos según sus propias políticas.',
          'La sección «Seguridad de los datos» de Google Play indica «No se recopilan datos», afirma también que los datos no están cifrados y no se pueden eliminar, y menciona la ubicación entre los tipos de datos que pueden compartirse con terceros; la ficha no explica cómo encajan estas afirmaciones.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app es de código cerrado, así que ninguna de estas afirmaciones se puede comprobar en el código, y PromptQuorum no ha auditado el tráfico de red ni revisado los permisos de la app.',
          },
        ],
      },
      contentRating: {
        id: 'content-rating',
        title: 'Contenido y clasificación por edades',
        content: [
          '**Google Play clasifica Laria como «Teen» con el descriptor «Diverse Content: Discretion Advised».** La ficha presenta un asistente general, pero la página de modelos del desarrollador muestra respuestas de ejemplo de estilo acompañante, y algunas de ellas son románticas o sexualmente explícitas; la página también puntúa los modelos por «libertad». Compruébalo antes de instalarla en un dispositivo compartido o de trabajo.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Android que quieren modelos locales y proveedores en la nube en una sola app de pago.** Las fuentes describen ambos.',
          '**Lectores a los que les gustan los asistentes independientes.** Cada identidad puede tener su propio modelo, voz y prompt de sistema.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en la práctica.** No se evaluaron la velocidad, el consumo de batería ni la calidad de las respuestas. Algunas reseñas de Google Play de agosto de 2026 informan de bloqueos o cierres inesperados en ciertos teléfonos, y el desarrollador respondió con ajustes para probar; son comentarios de usuarios, no probados aquí.',
          '**Uso sin conexión.** No se probaron los tamaños de descarga, qué modelos funcionan en qué teléfonos ni si la app funciona en modo avión.',
          '**Requisitos de hardware.** No se indica ningún requisito de RAM ni de almacenamiento.',
          '**Licencia y código fuente.** No se encontró un repositorio público, así que la app se trata como de código cerrado.',
          '**Compras y anuncios.** La página de la ficha muestra una instalación de pago y ninguna etiqueta de compras integradas ni de anuncios; la app en sí no se abrió.',
          '**Versión.** Las fuentes leídas no publican ningún número de versión.',
          '**Puntuaciones del desarrollador.** Las valoraciones de modelos de la página del desarrollador no se comprobaron de forma independiente.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[Layla](/es/power-local-llm/layla-review)',
            'Plataformas': 'Android',
            'Precio / licencia': 'Freemium / código cerrado',
            'Diferencia clave': 'App de LLM locales orientada a Android',
          },
          {
            'App': '[TokForge](/es/power-local-llm/tokforge-review)',
            'Plataformas': 'Android',
            'Precio / licencia': 'Gratis / propietaria',
            'Diferencia clave': 'Chat sin conexión con personajes de rol, generación de imágenes, voz y clasificación de velocidad',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente de chat de código abierto en el dispositivo, con su propia biblioteca de modelos',
          },
          {
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat sin conexión de código abierto con preguntas sobre documentos en el dispositivo',
          },
        ],
        note: 'Los detalles de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Está Laria relacionada con Layla?',
            a: 'No se encontró ninguna conexión. Son apps distintas con nombres parecidos; Laria es de MiCK Software.',
          },
          {
            q: '¿Funciona Laria en iPhone o en escritorio?',
            a: 'No se encontró ninguna versión así. La página del desarrollador solo ofrece Google Play.',
          },
          {
            q: '¿Sigue activo el proyecto?',
            a: 'Google Play muestra una actualización del 23 de octubre de 2026, y el sitio del desarrollador incluye Laria entre sus proyectos en curso.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Laria es un asistente de pago para Android que combina modelos descargables en el dispositivo con proveedores en la nube opcionales, y se actualizó el 23 de octubre de 2026. En su contra: una valoración baja de los usuarios, informes de cierres inesperados en algunos teléfonos, la ausencia de código fuente público y una clasificación «Teen» con la nota «Discretion Advised» junto a ejemplos de estilo acompañante sexualmente explícitos en la página del desarrollador. Encaja con quienes quieren probar modelos locales junto a proveedores en la nube; quien busque una opción de código abierto o gratuita debería comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private Mind](/es/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[LARIA en Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) — descripción, fecha de actualización, descargas, valoraciones, clasificación de contenido y sección «Seguridad de los datos», consultados el 26 de octubre de 2026.',
          '[Página de producto de Laria](https://mick-software.com/main/laria.html) — vista general de funciones, lista de endpoints y vista general de modelos del desarrollador, consultadas el 26 de octubre de 2026.',
          '[Aviso de privacidad de MiCK Software](https://mick-software.com/main/privacy-notice.html) — tratamiento de datos en uso local y en línea, consultado el 26 de octubre de 2026.',
          '[MiCK Software](https://mick-software.com/main/) — sitio del estudio con su lista de apps y el estado de sus proyectos, consultado el 26 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Layla](/es/power-local-llm/layla-review) — una app de LLM locales orientada a Android.',
          '[Reseña de TokForge](/es/power-local-llm/tokforge-review) — una app de chat sin conexión para Android con personajes de rol y generación de imágenes.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
          '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión, gratuita y con licencia MIT, para iPhone y Android.',
          '[Las mejores apps de LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el panorama más amplio de Android.',
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
    heroImage: '/images/laria-review-hero-fr.webp',
    title: 'Test de Laria : assistant IA payant pour Android avec modèles locaux',
    seoTitle: 'Test de Laria : assistant IA Android avec modèles locaux',
    intro:
      'Laria est un assistant IA payant pour Android, édité par MiCK Software, un studio indépendant en France. Selon sa fiche Google Play et le site du développeur, il exécute des modèles téléchargeables sur le téléphone et peut aussi se connecter à des fournisseurs cloud et à des serveurs privés. Ce test reflète ces sources, consultées le 26 octobre 2026 ; PromptQuorum n’a pas testé l’application.',
    metaDescription:
      'Test de Laria : assistant IA Android payant et à code fermé, avec modèles locaux téléchargeables, fournisseurs cloud optionnels et outils d’image.',
    twitterDescription:
      'Test de Laria : un assistant IA Android payant qui associe des modèles locaux téléchargeables à des fournisseurs cloud optionnels. Ce qu’affirment la fiche et le développeur, et ce qui n’est pas vérifié.',
    audience:
      'Utilisateurs Android qui veulent des modèles d’IA locaux sur leur téléphone, avec des fournisseurs cloud en option, et qui doivent savoir ce que les sources confirment ou non.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Laria',
    targetKeywords: [
      'avis application laria',
      'laria assistant ia local',
      'assistant ia hors ligne android',
      'application android modèles locaux gemma qwen',
      'identités ia application android',
      'com.mick.genai.laria',
      'laria vs layla',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Laria est une application Android à code fermé qui exécute des modèles d’IA téléchargeables sur le téléphone et peut se connecter, en option, à des fournisseurs cloud, avec des identités IA personnalisables et des outils d’image.**',
    quickAnswerTop: {
      fr: {
        question: 'Laria fonctionne-t-elle vraiment hors ligne ?',
        answer:
          'Selon la fiche et la politique de confidentialité du développeur, les discussions avec un modèle local téléchargé s’exécutent sur le téléphone et ne collectent aucune donnée. Les fournisseurs cloud, la recherche web et certains services d’image exigent une connexion ; rien de tout cela n’a été testé.',
        bullets: [
          'Installation payante sur [Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria).',
          'Familles de modèles locaux citées dans la fiche : Gemma, Granite, Mistral, Phi, Qwen, DeepSeek et SmolLM.',
          'Widgets pour l’écran d’accueil et rappels pour des résumés d’actualités ou de météo.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Laria ?', anchor: 'what-is-laria' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
      { label: 'Contenus et classification d’âge', anchor: 'content-rating' },
      { label: 'À qui elle convient', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
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
            text: 'Laria est une application Android à code fermé qui, selon son développeur, exécute des modèles d’IA téléchargeables sur le téléphone et peut aussi utiliser des fournisseurs en ligne et des serveurs privés.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’achetez sur Google Play, téléchargez un ou plusieurs modèles dans l’application et discutez avec eux ; les fournisseurs en ligne sont des options qui envoient vos requêtes à ces services. Chaque « identité » est un assistant distinct, avec son modèle, sa voix et ses instructions.',
          },
        ],
        items: [
          'Développeur : MiCK Software, un studio indépendant en France qui publie aussi Picagen, HarmonyX et d’autres applications Android.',
          'Audience : Google Play affiche plus de 1 000 téléchargements et une moyenne de 2,9 sur 89 avis ; le bilan est donc modeste et mitigé.',
          'Plateforme : Android via Google Play uniquement ; aucune version iPhone, bureau ou web n’a été trouvée.',
          'Contenu : Google Play la classe « Teen », et la page des modèles du développeur montre des réponses d’exemple de style compagnon, dont certaines sexuellement explicites.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur la fiche Google Play, la page produit du développeur et sa politique de confidentialité, consultées le 26 octobre 2026. PromptQuorum n’a ni exécuté, ni testé, ni évalué l’application.',
          },
        ],
      },
      overview: {
        id: 'what-is-laria',
        title: 'Qu’est-ce que Laria ?',
        content: [
          '**Laria (listée sur Google Play sous le nom « LARIA - Local AI Assistant ») est un assistant Android qui associe des modèles téléchargés sur le téléphone à des fournisseurs en ligne optionnels.** La fiche décrit le chat, la rédaction et le brainstorming, la génération d’images, les rappels et des « identités IA » : des assistants distincts, chacun avec son nom, son avatar, son prompt système, son modèle ou fournisseur, sa voix, son thème de couleurs, son message d’accueil et son réglage de recherche web. Le site du développeur la présente comme « a premium offline AI companion ».',
          'Le développeur est MiCK Software, et l’application n’est publiée que sur Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**Laria s’installe depuis Google Play comme application payante ; aucune inscription ni terminal n’est nécessaire.** La page produit du développeur renvoie vers la même fiche.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) (payante ; 2,90 € en France, prix variable selon la boutique)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[mick-software.com](https://mick-software.com/main/laria.html) (page produit officielle avec l’aperçu des modèles)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité de MiCK Software](https://mick-software.com/main/privacy-notice.html) (couvre toutes les applications Android du studio)',
          },
        ],
        note: 'Dernière mise à jour sur Google Play : 23 octobre 2026 (note de version : « UX improvements & bug fixes »). Ni la fiche web ni la page du développeur n’indiquent de numéro de version ; aucun n’est donc mentionné ici.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Google Play ou de la page produit du développeur.**',
        ],
        items: [
          '**Modèles locaux.** Modèles téléchargeables pour discuter sur l’appareil ; l’application recommande des modèles adaptés à votre matériel. La page du développeur cite aussi des modèles LFM et montre des builds aux formats LiteRT, ONNX et GGUF.',
          '**Aperçu des modèles.** La page du développeur note chaque modèle local sur la vitesse, le raisonnement, la chaleur et la stabilité à partir de ses propres benchmarks ; ce sont les notes du développeur, pas celles de PromptQuorum.',
          '**Fournisseurs en ligne et points d’accès.** Gemini, OpenAI, OpenRouter, Anthropic, xAI/Grok, points d’accès compatibles Ollama et serveurs privés compatibles OpenAI ; la page du développeur ajoute LM Studio, vLLM, LocalAI et le serveur llama.cpp.',
          '**Identités IA.** Plusieurs assistants, chacun avec son nom, son avatar, son prompt système, son modèle ou fournisseur, sa voix et son message d’accueil.',
          '**Images.** Génération d’images avec des modèles d’image hors ligne, des serveurs d’image privés ou des services en ligne, avec réglages de taille, d’étapes, de qualité, de nombre et d’intensité ; les modèles multimodaux compatibles peuvent commenter des images jointes.',
          '**Usage quotidien.** Widgets d’identité sur l’écran d’accueil Android, rappels pour des actualités, des résumés météo ou des instructions personnelles, et lecture vocale avec ambiance sonore optionnelle.',
        ],
        note: 'Selon la fiche, les performances en local dépendent de l’appareil : les petits modèles sont plus rapides et tournent sur davantage de téléphones.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Selon la politique de confidentialité du développeur, aucune donnée n’est collectée lorsque vous utilisez un modèle local.** Lorsque des services en ligne sont utilisés, MiCK Software indique ne pas collecter de données personnelles, mais les fournisseurs tiers peuvent les traiter selon leurs propres politiques.',
          'La section « Sécurité des données » de Google Play indique « Aucune donnée collectée », précise aussi que les données ne sont pas chiffrées et ne peuvent pas être supprimées, et range la localisation parmi les types de données pouvant être partagés avec des tiers ; la fiche n’explique pas comment ces mentions s’articulent.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L’application est à code fermé : aucune de ces affirmations ne peut être vérifiée dans le code, et PromptQuorum n’a ni audité le trafic réseau ni examiné les autorisations de l’application.',
          },
        ],
      },
      contentRating: {
        id: 'content-rating',
        title: 'Contenus et classification d’âge',
        content: [
          '**Google Play classe Laria « Teen » avec la mention « Diverse Content: Discretion Advised ».** La fiche présente un assistant généraliste, mais la page des modèles du développeur montre des réponses d’exemple de style compagnon, et certains de ces exemples sont romantiques ou sexuellement explicites ; la page note aussi les modèles sur la « liberté ». Vérifiez-le avant de l’installer sur un appareil partagé ou professionnel.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Utilisateurs Android qui veulent des modèles locaux et des fournisseurs cloud dans une seule application payante.** Les sources décrivent les deux.',
          '**Lecteurs qui aiment les assistants distincts.** Chaque identité peut avoir son propre modèle, sa voix et son prompt système.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Performances en pratique.** La vitesse, la consommation de batterie et la qualité des réponses n’ont pas été évaluées. Certains avis Google Play d’août 2026 signalent des blocages ou des plantages sur certains téléphones, et le développeur a répondu en proposant des réglages à essayer ; ce sont des témoignages d’utilisateurs, non testés ici.',
          '**Usage hors ligne.** Les tailles de téléchargement, les modèles qui tournent sur tel ou tel téléphone et le fonctionnement en mode avion n’ont pas été testés.',
          '**Besoins matériels.** Aucune exigence de RAM ou de stockage n’est indiquée.',
          '**Licence et code source.** Aucun dépôt public n’a été trouvé ; l’application est donc considérée comme à code fermé.',
          '**Achats et publicités.** La page de la fiche montre une installation payante et aucune mention d’achats intégrés ni de publicités ; l’application elle-même n’a pas été ouverte.',
          '**Version.** Aucun numéro de version n’est publié dans les sources lues.',
          '**Notes du développeur.** Les notes de modèles de la page du développeur n’ont pas été vérifiées de façon indépendante.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[Layla](/fr/power-local-llm/layla-review)',
            'Plateformes': 'Android',
            'Prix / licence': 'Freemium / code fermé',
            'Différence clé': 'Application de LLM locaux pensée d’abord pour Android',
          },
          {
            'Application': '[TokForge](/fr/power-local-llm/tokforge-review)',
            'Plateformes': 'Android',
            'Prix / licence': 'Gratuit / propriétaire',
            'Différence clé': 'Chat hors ligne avec personnages de jeu de rôle, génération d’images, voix et classement de vitesse',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Client de chat open source sur l’appareil, avec sa propre bibliothèque de modèles',
          },
          {
            'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat hors ligne open source avec questions sur les documents sur l’appareil',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Laria est-elle liée à Layla ?',
            a: 'Aucun lien n’a été trouvé. Ce sont deux applications distinctes aux noms proches ; Laria est éditée par MiCK Software.',
          },
          {
            q: 'Laria fonctionne-t-elle sur iPhone ou sur ordinateur ?',
            a: 'Aucune version de ce type n’a été trouvée. La page du développeur ne propose que Google Play.',
          },
          {
            q: 'Le projet est-il encore actif ?',
            a: 'Google Play affiche une mise à jour du 23 octobre 2026, et le site du développeur range Laria parmi ses projets en cours.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Laria est un assistant Android payant qui associe des modèles téléchargeables sur l’appareil à des fournisseurs cloud optionnels, et qui a été mis à jour le 23 octobre 2026. En face : une note d’utilisateurs basse, des signalements de plantages sur certains téléphones, l’absence de code source public, ainsi qu’une classification « Teen » avec la mention « Discretion Advised » et des exemples de style compagnon sexuellement explicites sur la page du développeur. Elle convient aux lecteurs qui veulent essayer des modèles locaux aux côtés de fournisseurs cloud ; ceux qui cherchent une option open source ou gratuite devraient comparer [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private Mind](/fr/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LARIA sur Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) — description, date de mise à jour, téléchargements, notes, classification de contenu et section « Sécurité des données », consultés le 26 octobre 2026.',
          '[Page produit de Laria](https://mick-software.com/main/laria.html) — aperçu des fonctions, liste des points d’accès et aperçu des modèles du développeur, consultés le 26 octobre 2026.',
          '[Politique de confidentialité de MiCK Software](https://mick-software.com/main/privacy-notice.html) — traitement des données en usage local et en ligne, consultée le 26 octobre 2026.',
          '[MiCK Software](https://mick-software.com/main/) — site du studio avec sa liste d’applications et l’état de ses projets, consulté le 26 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de Layla](/fr/power-local-llm/layla-review) — une application de LLM locaux pensée d’abord pour Android.',
          '[Test de TokForge](/fr/power-local-llm/tokforge-review) — une application de chat hors ligne pour Android avec personnages de jeu de rôle et génération d’images.',
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source et gratuit sur l’appareil pour iOS et Android.',
          '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite sous licence MIT pour iPhone et Android.',
          '[Les meilleures applications LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama Android plus large.',
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
    heroImage: '/images/laria-review-hero-ja.webp',
    title: 'Laria レビュー:ローカルモデル対応の有料Android向けAIアシスタント',
    seoTitle: 'Laria レビュー:ローカルモデル対応のAndroid AI',
    intro:
      'Laria は、フランスの独立系スタジオ MiCK Software が提供する、Android向けの有料AIアシスタントです。Google Playの掲載情報と開発者のウェブサイトによれば、ダウンロード可能なモデルを端末上で実行でき、クラウドプロバイダーやプライベートサーバーにも接続できます。本レビューは、2026年10月26日に確認したこれらの情報源に基づいており、PromptQuorumはアプリを試していません。',
    metaDescription:
      'Laria レビュー:ダウンロード可能なローカルモデル、任意のクラウド連携、画像ツールを備えた、有料でソース非公開のAndroid向けAIアシスタントを解説します。',
    twitterDescription:
      'Laria レビュー:ダウンロード可能なオンデバイスモデルと任意のクラウドプロバイダーを組み合わせた有料のAndroid向けAIアシスタント。掲載情報と開発者の主張、未検証の点を解説します。',
    audience:
      '端末上のローカルAIモデルを使いたく、必要に応じてクラウドプロバイダーも使いたいAndroidユーザーで、情報源が確認できることとできないことを知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Laria レビュー',
    targetKeywords: [
      'laria アプリ レビュー',
      'laria ローカルAIアシスタント',
      'オフライン AIアシスタント android',
      'android アプリ ローカルモデル gemma qwen',
      'AIアイデンティティ android アプリ',
      'com.mick.genai.laria',
      'laria layla 比較',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Laria は、ダウンロード可能なAIモデルを端末上で実行し、任意でクラウドプロバイダーにも接続できる、ソース非公開のAndroidアプリです。カスタマイズ可能なAIアイデンティティと画像ツールを備えています。**',
    quickAnswerTop: {
      ja: {
        question: 'Laria は本当にオフラインで動きますか?',
        answer:
          '掲載情報と開発者のプライバシー通知によれば、ダウンロード済みのローカルモデルとのチャットは端末上で動作し、データは収集されません。クラウドプロバイダー、ウェブ検索、一部の画像サービスには接続が必要です。いずれも検証していません。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria)での有料インストール。',
          '掲載情報に挙がるローカルモデルのファミリー:Gemma、Granite、Mistral、Phi、Qwen、DeepSeek、SmolLM。',
          'ホーム画面ウィジェットと、ニュースや天気の要約のリマインダー。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Laria とは?', anchor: 'what-is-laria' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
      { label: 'コンテンツと年齢区分', anchor: 'content-rating' },
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
            text: 'Laria は、開発者によれば、ダウンロード可能なAIモデルを端末上で実行し、オンラインプロバイダーやプライベートサーバーも利用できる、ソース非公開のAndroidアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'Google Playで購入し、アプリ内で1つ以上のモデルをダウンロードして、チャットします。オンラインプロバイダーは任意の追加機能で、入力内容がそれらのサービスに送信されます。「アイデンティティ」はそれぞれ独自のモデル、音声、指示を持つ別個のアシスタントです。',
          },
        ],
        items: [
          '開発元:フランスの独立系スタジオ MiCK Software。Picagen や HarmonyX などのAndroidアプリも公開しています。',
          '実績:Google Playのダウンロード数は1,000回以上、評価は89件で平均2.9です。実績は小規模で評価も分かれています。',
          'プラットフォーム:Google Play経由のAndroidのみ。iPhone、デスクトップ、ウェブ版は見つかりませんでした。',
          'コンテンツ:Google Playの年齢区分は「Teen」で、開発者のモデルページにはコンパニオン風のサンプル応答があり、性的に露骨なものも含まれます。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月26日に確認したGoogle Playの掲載情報、開発者の製品ページ、プライバシー通知に基づいています。PromptQuorumはこのアプリを実行、テスト、ベンチマークしていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-laria',
        title: 'Laria とは?',
        content: [
          '**Laria(Google Playでの表記は「LARIA - Local AI Assistant」)は、端末にダウンロードしたモデルと、任意のオンラインプロバイダーを組み合わせるAndroid向けアシスタントです。**掲載情報には、チャット、文章作成とブレインストーミング、画像生成、リマインダー、そして「AIアイデンティティ」が挙げられています。アイデンティティとは、名前、アバター、システムプロンプト、モデルまたはプロバイダー、音声、カラーテーマ、あいさつ、ウェブ検索設定をそれぞれ持つ、別個のアシスタントです。開発者のサイトでは「a premium offline AI companion」と紹介されています。',
          '開発元は MiCK Software で、アプリはGoogle Playでのみ公開されています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Laria はGoogle Playから有料アプリとしてインストールします。サインアップやターミナルは不要です。**開発者の製品ページも同じ掲載ページにリンクしています。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria)(有料インストール。日本のストアでは¥790。ストアによって価格は異なります)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[mick-software.com](https://mick-software.com/main/laria.html)(モデル一覧を含む公式製品ページ)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[MiCK Software のプライバシー通知](https://mick-software.com/main/privacy-notice.html)(同スタジオのAndroidアプリ全般が対象)',
          },
        ],
        note: 'Google Playでの最終更新:2026年10月23日(リリースノート:「UX improvements & bug fixes」)。ウェブ版の掲載ページにも開発者のページにもバージョン番号の記載がないため、ここでは記載しません。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、Google Playの説明または開発者の製品ページに基づいています。**',
        ],
        items: [
          '**ローカルモデル。**端末上のチャット用にダウンロード可能なモデルがあり、アプリがハードウェアに合うモデルを提案します。開発者のページにはLFMモデルの記載もあり、LiteRT、ONNX、GGUFの各形式のビルドが示されています。',
          '**モデル一覧。**開発者のページでは、独自のベンチマーク結果をもとに、各ローカルモデルを速度、推論、温かみ、安定性で評価しています。これは開発者による評価であり、PromptQuorumの評価ではありません。',
          '**オンラインプロバイダーとエンドポイント。**Gemini、OpenAI、OpenRouter、Anthropic、xAI/Grok、Ollama互換エンドポイント、OpenAI互換のプライベートサーバー。開発者のページには、LM Studio、vLLM、LocalAI、llama.cppサーバーも挙げられています。',
          '**AIアイデンティティ。**複数のアシスタントを作成でき、それぞれに名前、アバター、システムプロンプト、モデルまたはプロバイダー、音声、あいさつを設定できます。',
          '**画像。**オフラインの画像モデル、プライベート画像サーバー、オンラインサービスによる画像生成に対応し、サイズ、ステップ数、品質、枚数、強度を調整できます。対応するマルチモーダルモデルでは、添付画像について会話できます。',
          '**日常での利用。**Androidのホーム画面にアイデンティティのウィジェットを置け、ニュース、天気の要約、個人的な指示のリマインダー、音声読み上げ(環境音は任意)も使えます。',
        ],
        note: '掲載情報によれば、ローカルでの性能は端末次第です。小さなモデルほど高速で、より多くのスマートフォンで動作します。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**開発者のプライバシー通知によれば、ローカルモデルの使用時にはデータは収集されません。**オンラインサービスを使う場合、MiCK Software は個人データを収集しないとしていますが、第三者のプロバイダーが各社のポリシーに従って処理することがあります。',
          'Google Playの「データ セーフティ」欄には「収集されるデータなし」と表示される一方で、データは暗号化されず削除もできないこと、また位置情報が第三者と共有される可能性のあるデータ種別に挙げられていることが記載されています。これらの記述がどう両立するのかは、掲載情報では説明されていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このアプリはソース非公開のため、これらの主張をコードで確認することはできません。PromptQuorumは、ネットワーク通信の監査もアプリの権限の確認も行っていません。',
          },
        ],
      },
      contentRating: {
        id: 'content-rating',
        title: 'コンテンツと年齢区分',
        content: [
          '**Google Playは Laria を「Teen」に分類し、「Diverse Content: Discretion Advised」という注記を付けています。**掲載情報は汎用アシスタントとして紹介していますが、開発者のモデルページにはコンパニオン風のサンプル応答が載っており、サンプルの一部は恋愛的または性的に露骨な内容です。同ページはモデルを「自由度」でも評価しています。共有端末や仕事用の端末にインストールする前にご確認ください。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**ローカルモデルとクラウドプロバイダーを1つの有料アプリで使いたいAndroidユーザー。**情報源は両方について説明しています。',
          '**用途ごとにアシスタントを分けたい方。**アイデンティティごとに独自のモデル、音声、システムプロンプトを設定できます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の性能。**速度、バッテリー消費、回答品質は評価していません。2026年8月のGoogle Playレビューには、一部の機種でのフリーズやクラッシュの報告があり、開発者は試すべき設定を返信しています。これらはユーザーの報告であり、ここでは検証していません。',
          '**オフライン利用。**ダウンロードサイズ、機種ごとに動作するモデル、機内モードで動くかどうかは未検証です。',
          '**必要なハードウェア。**RAMやストレージの要件は記載されていません。',
          '**ライセンスとソースコード。**公開リポジトリが見つからなかったため、ソース非公開として扱っています。',
          '**購入と広告。**掲載ページには有料インストールと表示され、アプリ内課金や広告のラベルはありません。ただしアプリ自体は開いていません。',
          '**バージョン。**確認した情報源にはバージョン番号が公開されていません。',
          '**開発者によるスコア。**開発者のページにあるモデル評価は、独立して確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Layla](/ja/power-local-llm/layla-review)',
            'プラットフォーム': 'Android',
            '価格 / ライセンス': 'フリーミアム / クローズドソース',
            '主な違い': 'Android優先のローカルLLMアプリ',
          },
          {
            'アプリ': '[TokForge](/ja/power-local-llm/tokforge-review)',
            'プラットフォーム': 'Android',
            '価格 / ライセンス': '無料 / プロプライエタリ',
            '主な違い': 'ロールプレイキャラクター、画像生成、音声、速度リーダーボードを備えたオフラインチャット',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '独自のモデルライブラリを持つオープンソースのオンデバイスチャットクライアント',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': '端末上の文書への質問に対応するオープンソースのオフラインチャット',
          },
        ],
        note: '競合アプリの詳細は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Laria は Layla と関係がありますか?',
            a: '関係は見つかりませんでした。名前が似ているだけの別々のアプリで、Laria の開発元は MiCK Software です。',
          },
          {
            q: 'Laria はiPhoneやデスクトップで使えますか?',
            a: 'そのようなビルドは見つかりませんでした。開発者のページが案内しているのはGoogle Playのみです。',
          },
          {
            q: 'プロジェクトはまだ活動していますか?',
            a: 'Google Playには2026年10月23日の更新が表示されており、開発者のサイトも Laria を進行中のプロジェクトとして挙げています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Laria は、ダウンロード可能なオンデバイスモデルと任意のクラウドプロバイダーを組み合わせた有料のAndroidアシスタントで、2026年10月23日に更新されています。一方で、ユーザー評価は低く、一部の機種でクラッシュの報告があり、ソースコードは非公開で、年齢区分は「Teen」に「Discretion Advised」の注記が付き、開発者のページには性的に露骨なコンパニオン風のサンプルがあります。クラウドプロバイダーと並べてローカルモデルを試したい方に向いています。オープンソースや無料の選択肢を求める方は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private Mind](/ja/power-local-llm/private-mind-review)と比較してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google Playの LARIA](https://play.google.com/store/apps/details?id=com.mick.genai.laria) — 説明、更新日、ダウンロード数、評価、コンテンツ区分、データ セーフティ欄。2026年10月26日確認。',
          '[Laria 製品ページ](https://mick-software.com/main/laria.html) — 開発者による機能概要、エンドポイント一覧、モデル一覧。2026年10月26日確認。',
          '[MiCK Software プライバシー通知](https://mick-software.com/main/privacy-notice.html) — ローカル利用とオンライン利用でのデータの扱い。2026年10月26日確認。',
          '[MiCK Software](https://mick-software.com/main/) — アプリ一覧とプロジェクトの状況を載せたスタジオのサイト。2026年10月26日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Layla レビュー](/ja/power-local-llm/layla-review) — Android優先のローカルLLMアプリ。',
          '[TokForge レビュー](/ja/power-local-llm/tokforge-review) — ロールプレイキャラクターと画像生成を備えたAndroid向けオフラインチャットアプリ。',
          '[PocketPal AI レビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroidに対応する無料のオープンソースのオンデバイスチャットクライアント。',
          '[Private Mind レビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroidに対応する、MITライセンスの無料オフラインチャットアプリ。',
          '[2026年版 Android向けローカルLLMアプリのおすすめ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Androidアプリを幅広く取り上げた一覧。',
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
    heroImage: '/images/laria-review-hero-pt.webp',
    title: 'Análise do Laria: assistente de IA pago para Android com modelos locais',
    seoTitle: 'Análise do Laria: assistente de IA com modelos locais',
    intro:
      'O Laria é um assistente de IA pago para Android da MiCK Software, um estúdio independente na França. Segundo a página do Google Play e o site do desenvolvedor, ele executa modelos baixáveis no celular e também pode se conectar a provedores na nuvem e a servidores privados. Esta análise reflete essas fontes, consultadas em 26 de outubro de 2026; a PromptQuorum não testou o app.',
    metaDescription:
      'Análise do Laria: assistente de IA Android pago e de código fechado, com modelos locais baixáveis, provedores na nuvem opcionais e ferramentas de imagem.',
    twitterDescription:
      'Análise do Laria: um assistente de IA Android pago que combina modelos locais baixáveis com provedores na nuvem opcionais. O que a página e o desenvolvedor afirmam e o que não foi verificado.',
    audience:
      'Usuários de Android que querem modelos de IA locais no celular, com provedores na nuvem opcionais, e precisam saber o que as fontes confirmam e o que não confirmam.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Laria',
    targetKeywords: [
      'laria app análise',
      'laria assistente de ia local',
      'assistente de ia offline android',
      'app android modelos locais gemma qwen',
      'identidades de ia app android',
      'com.mick.genai.laria',
      'laria vs layla',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**O Laria é um app Android de código fechado que executa modelos de IA baixáveis no celular e pode se conectar, de forma opcional, a provedores na nuvem, com identidades de IA personalizáveis e ferramentas de imagem.**',
    quickAnswerTop: {
      pt: {
        question: 'O Laria funciona mesmo offline?',
        answer:
          'Segundo a página e o aviso de privacidade do desenvolvedor, os chats com um modelo local baixado rodam no celular e não coletam dados. Provedores na nuvem, busca na web e alguns serviços de imagem exigem conexão; nada disso foi testado.',
        bullets: [
          'Instalação paga no [Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria).',
          'Famílias de modelos locais citadas na página: Gemma, Granite, Mistral, Phi, Qwen, DeepSeek e SmolLM.',
          'Widgets para a tela inicial e lembretes de resumos de notícias ou do tempo.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Laria?', anchor: 'what-is-laria' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e uso da rede', anchor: 'privacy' },
      { label: 'Conteúdo e classificação indicativa', anchor: 'content-rating' },
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
            text: 'O Laria é um app Android de código fechado que, segundo o desenvolvedor, executa modelos de IA baixáveis no celular e também pode usar provedores online e servidores privados.',
          },
          {
            type: 'plain-terms',
            text: 'Você compra o app no Google Play, baixa um ou mais modelos dentro dele e conversa com eles; os provedores online são extras opcionais que enviam suas mensagens a esses serviços. Cada «identidade» é um assistente separado, com modelo, voz e instruções próprios.',
          },
        ],
        items: [
          'Desenvolvedor: MiCK Software, um estúdio independente na França que também publica Picagen, HarmonyX e outros apps Android.',
          'Alcance: o Google Play mostra mais de 1 mil downloads e média de 2.9 em 89 avaliações; o histórico é pequeno e misto.',
          'Plataforma: somente Android pelo Google Play; não foi encontrada versão para iPhone, desktop ou web.',
          'Conteúdo: o Google Play o classifica como «Teen», e a página de modelos do desenvolvedor mostra respostas de exemplo em estilo de companhia, algumas sexualmente explícitas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página do Google Play, na página do produto do desenvolvedor e no aviso de privacidade dele, consultados em 26 de outubro de 2026. A PromptQuorum não executou, testou nem mediu o desempenho do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-laria',
        title: 'O que é o Laria?',
        content: [
          '**O Laria (listado no Google Play como «LARIA - Local AI Assistant») é um assistente para Android que combina modelos baixados no celular com provedores online opcionais.** A página descreve chat, redação e brainstorming, geração de imagens, lembretes e «identidades de IA»: assistentes separados, cada um com nome, avatar, prompt de sistema, modelo ou provedor, voz, tema de cores, saudação e configuração de busca na web próprios. O site do desenvolvedor o chama de «a premium offline AI companion».',
          'O desenvolvedor é a MiCK Software, e o app é publicado somente no Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Laria é instalado pelo Google Play como app pago; não é preciso cadastro nem terminal.** A página do produto do desenvolvedor leva à mesma página da loja.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) (instalação paga; R$ 10,99 na loja brasileira, outras lojas mostram outros preços)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[mick-software.com](https://mick-software.com/main/laria.html) (página oficial do produto com a visão geral dos modelos)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Aviso de privacidade da MiCK Software](https://mick-software.com/main/privacy-notice.html) (cobre todos os apps Android do estúdio)',
          },
        ],
        note: 'Última atualização no Google Play: 23 de outubro de 2026 (nota de versão: «UX improvements & bug fixes»). Nem a página web da loja nem a página do desenvolvedor mostram número de versão, por isso nenhum é informado aqui.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da descrição do Google Play ou da página do produto do desenvolvedor.**',
        ],
        items: [
          '**Modelos locais.** Modelos baixáveis para conversar no próprio aparelho; o app recomenda modelos de acordo com o seu hardware. A página do desenvolvedor também cita modelos LFM e mostra builds nos formatos LiteRT, ONNX e GGUF.',
          '**Visão geral dos modelos.** A página do desenvolvedor avalia cada modelo local em velocidade, raciocínio, simpatia e estabilidade, com base nos próprios testes; são notas do desenvolvedor, não da PromptQuorum.',
          '**Provedores online e endpoints.** Gemini, OpenAI, OpenRouter, Anthropic, xAI/Grok, endpoints compatíveis com Ollama e servidores privados compatíveis com OpenAI; a página do desenvolvedor acrescenta LM Studio, vLLM, LocalAI e o servidor do llama.cpp.',
          '**Identidades de IA.** Vários assistentes, cada um com nome, avatar, prompt de sistema, modelo ou provedor, voz e saudação próprios.',
          '**Imagens.** Geração de imagens com modelos offline, servidores de imagem privados ou serviços online, com controles de tamanho, passos, qualidade, quantidade e intensidade; modelos multimodais compatíveis podem comentar imagens anexadas.',
          '**Uso diário.** Widgets de identidade na tela inicial do Android, lembretes de notícias, resumos do tempo ou instruções pessoais e reprodução de voz com som ambiente opcional.',
        ],
        note: 'Segundo a página, o desempenho local depende do aparelho: modelos pequenos são mais rápidos e rodam em mais celulares.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**Segundo o aviso de privacidade do desenvolvedor, nenhum dado é coletado quando você usa um modelo local.** Quando serviços online são usados, a MiCK Software diz que não coleta dados pessoais, mas os provedores terceiros podem processá-los conforme as próprias políticas.',
          'A seção «Segurança dos dados» do Google Play diz «Nenhum dado coletado», afirma também que os dados não são criptografados e não podem ser excluídos, e lista a localização entre os tipos de dados que podem ser compartilhados com terceiros; a página não explica como essas afirmações se conciliam.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app é de código fechado, então nenhuma dessas afirmações pode ser conferida no código, e a PromptQuorum não auditou o tráfego de rede nem revisou as permissões do app.',
          },
        ],
      },
      contentRating: {
        id: 'content-rating',
        title: 'Conteúdo e classificação indicativa',
        content: [
          '**O Google Play classifica o Laria como «Teen» com o descritor «Diverse Content: Discretion Advised».** A página apresenta um assistente geral, mas a página de modelos do desenvolvedor mostra respostas de exemplo em estilo de companhia, e algumas delas são românticas ou sexualmente explícitas; a página também pontua os modelos em «liberdade». Verifique isso antes de instalar em um aparelho compartilhado ou de trabalho.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Usuários de Android que querem modelos locais e provedores na nuvem em um só app pago.** As fontes descrevem os dois.',
          '**Leitores que gostam de assistentes separados.** Cada identidade pode ter modelo, voz e prompt de sistema próprios.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** Velocidade, consumo de bateria e qualidade das respostas não foram avaliados. Algumas avaliações do Google Play de agosto de 2026 relatam travamentos ou fechamentos inesperados em certos celulares, e o desenvolvedor respondeu com ajustes para tentar; são relatos de usuários, não testados aqui.',
          '**Uso offline.** Tamanhos de download, quais modelos rodam em quais celulares e se o app funciona no modo avião não foram testados.',
          '**Requisitos de hardware.** Nenhum requisito de RAM ou armazenamento é informado.',
          '**Licença e código-fonte.** Nenhum repositório público foi encontrado, então o app é tratado como de código fechado.',
          '**Compras e anúncios.** A página da loja mostra instalação paga e nenhum rótulo de compras no app ou de anúncios; o app em si não foi aberto.',
          '**Versão.** As fontes lidas não publicam número de versão.',
          '**Notas do desenvolvedor.** As avaliações de modelos na página do desenvolvedor não foram verificadas de forma independente.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[Layla](/pt/power-local-llm/layla-review)',
            'Plataformas': 'Android',
            'Preço / licença': 'Freemium / código fechado',
            'Diferença principal': 'App de LLM local orientado a Android',
          },
          {
            'App': '[TokForge](/pt/power-local-llm/tokforge-review)',
            'Plataformas': 'Android',
            'Preço / licença': 'Grátis / proprietário',
            'Diferença principal': 'Chat offline com personagens de roleplay, geração de imagens, voz e ranking de velocidade',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Cliente de chat de código aberto no aparelho, com biblioteca própria de modelos',
          },
          {
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat offline de código aberto com perguntas sobre documentos no aparelho',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas de cada app na própria página da loja.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Laria tem relação com o Layla?',
            a: 'Nenhuma conexão foi encontrada. São apps separados com nomes parecidos; o Laria é da MiCK Software.',
          },
          {
            q: 'O Laria funciona no iPhone ou no desktop?',
            a: 'Nenhuma versão assim foi encontrada. A página do desenvolvedor oferece apenas o Google Play.',
          },
          {
            q: 'O projeto ainda está ativo?',
            a: 'O Google Play mostra uma atualização de 23 de outubro de 2026, e o site do desenvolvedor lista o Laria entre os projetos em andamento.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Laria é um assistente Android pago que combina modelos baixáveis no aparelho com provedores na nuvem opcionais e foi atualizado em 23 de outubro de 2026. Em contrapartida, há uma nota baixa dos usuários, relatos de travamentos em alguns celulares, ausência de código-fonte público e uma classificação «Teen» com a nota «Discretion Advised», ao lado de exemplos em estilo de companhia sexualmente explícitos na página do desenvolvedor. Ele serve a quem quer testar modelos locais ao lado de provedores na nuvem; quem busca uma opção de código aberto ou gratuita deve comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Private Mind](/pt/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[LARIA no Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) — descrição, data de atualização, downloads, avaliações, classificação de conteúdo e seção «Segurança dos dados», consultados em 26 de outubro de 2026.',
          '[Página do produto Laria](https://mick-software.com/main/laria.html) — visão geral de recursos, lista de endpoints e visão geral dos modelos do desenvolvedor, consultadas em 26 de outubro de 2026.',
          '[Aviso de privacidade da MiCK Software](https://mick-software.com/main/privacy-notice.html) — tratamento de dados no uso local e online, consultado em 26 de outubro de 2026.',
          '[MiCK Software](https://mick-software.com/main/) — site do estúdio com a lista de apps e o status dos projetos, consultado em 26 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Layla](/pt/power-local-llm/layla-review) — um app de LLM local orientado a Android.',
          '[Análise do TokForge](/pt/power-local-llm/tokforge-review) — um app de chat offline para Android com personagens de roleplay e geração de imagens.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no aparelho para iOS e Android.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
          '[Os melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo do Android.',
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
    heroImage: '/images/laria-review-hero-ar.webp',
    title: 'مراجعة Laria: مساعد ذكاء اصطناعي مدفوع لنظام Android مع نماذج محلية',
    seoTitle: 'مراجعة Laria: مساعد ذكاء اصطناعي لـ Android بنماذج محلية',
    intro:
      'Laria مساعد ذكاء اصطناعي مدفوع لنظام Android من MiCK Software، وهي استوديو مستقل في فرنسا. بحسب صفحة التطبيق على Google Play وموقع المطوّر، يشغّل التطبيق نماذج قابلة للتنزيل على الهاتف، ويمكنه أيضًا الاتصال بمزودين سحابيين وخوادم خاصة. تعكس هذه المراجعة تلك المصادر التي جرى فحصها في 26 أكتوبر 2026؛ ولم تختبر PromptQuorum التطبيق.',
    metaDescription:
      'مراجعة Laria: مساعد ذكاء اصطناعي مدفوع ومغلق المصدر لـ Android، مع نماذج محلية قابلة للتنزيل ومزودين سحابيين اختياريين وأدوات للصور وهويات قابلة للتخصيص.',
    twitterDescription:
      'مراجعة Laria: مساعد ذكاء اصطناعي مدفوع لنظام Android يجمع نماذج محلية قابلة للتنزيل مع مزودين سحابيين اختياريين. ما تذكره الصفحة والمطوّر وما لم يُتحقق منه.',
    audience:
      'مستخدمو Android الذين يريدون نماذج ذكاء اصطناعي محلية على الهاتف، مع مزودين سحابيين اختياريين، ويحتاجون إلى معرفة ما تؤكده المصادر وما لا تؤكده.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Laria',
    targetKeywords: [
      'مراجعة تطبيق laria',
      'laria مساعد ذكاء اصطناعي محلي',
      'مساعد ذكاء اصطناعي دون اتصال android',
      'تطبيق android نماذج محلية gemma qwen',
      'هويات الذكاء الاصطناعي تطبيق android',
      'com.mick.genai.laria',
      'laria مقابل layla',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Laria تطبيق Android مغلق المصدر يشغّل نماذج ذكاء اصطناعي قابلة للتنزيل على الهاتف ويمكنه الاتصال اختياريًا بمزودين سحابيين، مع هويات ذكاء اصطناعي قابلة للتخصيص وأدوات للصور.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Laria دون اتصال فعلًا؟',
        answer:
          'بحسب الصفحة وإشعار الخصوصية لدى المطوّر، تعمل المحادثات مع نموذج محلي منزَّل على الهاتف ولا تجمع أي بيانات. أما المزودون السحابيون والبحث على الويب وبعض خدمات الصور فتحتاج إلى اتصال؛ ولم يُختبر أي من ذلك.',
        bullets: [
          'تثبيت مدفوع عبر [Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria).',
          'عائلات النماذج المحلية المذكورة في الصفحة: Gemma وGranite وMistral وPhi وQwen وDeepSeek وSmolLM.',
          'ودجات للشاشة الرئيسية وتذكيرات لملخصات الأخبار أو الطقس.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Laria؟', anchor: 'what-is-laria' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
      { label: 'المحتوى والتصنيف العمري', anchor: 'content-rating' },
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
            text: 'Laria تطبيق Android مغلق المصدر يشغّل، بحسب مطوّره، نماذج ذكاء اصطناعي قابلة للتنزيل على الهاتف، ويمكنه أيضًا استخدام مزودين عبر الإنترنت وخوادم خاصة.',
          },
          {
            type: 'plain-terms',
            text: 'تشتري التطبيق من Google Play، وتنزّل نموذجًا أو أكثر داخله، ثم تتحدث معها؛ والمزودون عبر الإنترنت إضافات اختيارية ترسل رسائلك إلى تلك الخدمات. كل «هوية» مساعد منفصل له نموذجه وصوته وتعليماته.',
          },
        ],
        items: [
          'المطوّر: MiCK Software، استوديو مستقل في فرنسا ينشر أيضًا Picagen وHarmonyX وتطبيقات Android أخرى.',
          'الانتشار: تعرض Google Play أكثر من 1000 تنزيل ومتوسط تقييم 2.9 من 89 تقييمًا، فالسجل صغير ومتباين.',
          'المنصة: Android فقط عبر Google Play؛ ولم يُعثر على إصدار لـ iPhone أو سطح المكتب أو الويب.',
          'المحتوى: تصنّفه Google Play «Teen»، وتعرض صفحة النماذج لدى المطوّر ردودًا نموذجية بأسلوب الرفيق، بعضها صريح جنسيًا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة Google Play وصفحة المنتج لدى المطوّر وإشعار الخصوصية، التي جرى فحصها في 26 أكتوبر 2026. لم تشغّل PromptQuorum التطبيق ولم تختبره ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-laria',
        title: 'ما هو Laria؟',
        content: [
          '**Laria (المدرج على Google Play باسم «LARIA - Local AI Assistant») مساعد لنظام Android يجمع بين نماذج منزَّلة على الهاتف ومزودين اختياريين عبر الإنترنت.** تصف الصفحة المحادثة والكتابة وتوليد الأفكار وتوليد الصور والتذكيرات و«هويات الذكاء الاصطناعي»: مساعدون منفصلون، لكل منهم اسمه وصورته الرمزية وتعليمات النظام ونموذجه أو مزوده وصوته ولونه وتحيته وإعداد البحث على الويب. ويصف موقع المطوّر التطبيق بأنه «a premium offline AI companion».',
          'المطوّر هو MiCK Software، ولا يُنشر التطبيق إلا على Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Laria من Google Play كتطبيق مدفوع؛ ولا حاجة إلى تسجيل أو طرفية.** وتؤدي صفحة المنتج لدى المطوّر إلى الصفحة نفسها.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'Android',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) (تثبيت مدفوع؛ 4.99 دولارًا في المتجر الأمريكي، وتعرض المتاجر الأخرى أسعارًا مختلفة)',
          },
          {
            'المنصة': 'الموقع',
            'مكان الحصول عليه': '[mick-software.com](https://mick-software.com/main/laria.html) (صفحة المنتج الرسمية مع نظرة عامة على النماذج)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[إشعار الخصوصية لدى MiCK Software](https://mick-software.com/main/privacy-notice.html) (يشمل جميع تطبيقات Android للاستوديو)',
          },
        ],
        note: 'آخر تحديث على Google Play: 23 أكتوبر 2026 (ملاحظة الإصدار: «UX improvements & bug fixes»). لا تعرض صفحة المتجر على الويب ولا صفحة المطوّر رقم إصدار، لذلك لا يُذكر هنا أي رقم.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مصدره وصف Google Play أو صفحة المنتج لدى المطوّر.**',
        ],
        items: [
          '**النماذج المحلية.** نماذج قابلة للتنزيل للمحادثة على الجهاز؛ ويوصي التطبيق بنماذج تناسب عتادك. وتذكر صفحة المطوّر أيضًا نماذج LFM وتعرض إصدارات بصيغ LiteRT وONNX وGGUF.',
          '**نظرة عامة على النماذج.** تقيّم صفحة المطوّر كل نموذج محلي من حيث السرعة والاستدلال والدفء والاستقرار اعتمادًا على اختباراته الخاصة؛ وهذه تقييمات المطوّر لا تقييمات PromptQuorum.',
          '**المزودون عبر الإنترنت ونقاط الاتصال.** Gemini وOpenAI وOpenRouter وAnthropic وxAI/Grok ونقاط اتصال متوافقة مع Ollama وخوادم خاصة متوافقة مع OpenAI؛ وتضيف صفحة المطوّر LM Studio وvLLM وLocalAI وخادم llama.cpp.',
          '**هويات الذكاء الاصطناعي.** عدة مساعدين، لكل منهم اسمه وصورته الرمزية وتعليمات النظام ونموذجه أو مزوده وصوته وتحيته.',
          '**الصور.** توليد صور بنماذج صور تعمل دون اتصال أو بخوادم صور خاصة أو بخدمات عبر الإنترنت، مع ضبط الحجم والخطوات والجودة والعدد والقوة؛ ويمكن للنماذج متعددة الوسائط المتوافقة مناقشة الصور المرفقة.',
          '**الاستخدام اليومي.** ودجات الهويات على الشاشة الرئيسية في Android، وتذكيرات للأخبار أو ملخصات الطقس أو التعليمات الشخصية، وتشغيل صوتي مع صوت محيطي اختياري.',
        ],
        note: 'تقول الصفحة إن الأداء المحلي يعتمد على الجهاز: النماذج الصغيرة أسرع وتعمل على هواتف أكثر.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**بحسب إشعار الخصوصية لدى المطوّر، لا تُجمع أي بيانات عند استخدام نموذج محلي.** وعند استخدام خدمات عبر الإنترنت، تقول MiCK Software إنها لا تجمع بيانات شخصية، لكن المزودين من الأطراف الثالثة قد يعالجونها وفق سياساتهم الخاصة.',
          'يذكر قسم «أمان البيانات» في Google Play عبارة «لم تُجمع أي بيانات»، ويذكر أيضًا أن البيانات غير مشفّرة ولا يمكن حذفها، ويدرج الموقع ضمن أنواع البيانات التي قد تُشارك مع أطراف ثالثة؛ ولا توضح الصفحة كيف تتسق هذه العبارات.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'التطبيق مغلق المصدر، لذا لا يمكن التحقق من أي من هذه الادعاءات في الشيفرة، ولم تدقق PromptQuorum حركة الشبكة ولم تراجع أذونات التطبيق.',
          },
        ],
      },
      contentRating: {
        id: 'content-rating',
        title: 'المحتوى والتصنيف العمري',
        content: [
          '**تصنّف Google Play تطبيق Laria «Teen» مع الوصف «Diverse Content: Discretion Advised».** تعرض الصفحة مساعدًا عامًا، لكن صفحة النماذج لدى المطوّر تعرض ردودًا نموذجية بأسلوب الرفيق، وبعض هذه الردود رومانسية أو صريحة جنسيًا؛ كما تقيّم الصفحة النماذج بحسب «الحرية». تحقّق من ذلك قبل التثبيت على جهاز مشترك أو جهاز عمل.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Android الذين يريدون نماذج محلية ومزودين سحابيين في تطبيق مدفوع واحد.** وتصف المصادر الأمرين.',
          '**القراء الذين يفضلون المساعدين المنفصلين.** يمكن لكل هوية أن يكون لها نموذجها وصوتها وتعليمات نظامها.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لم تُقيَّم السرعة ولا استهلاك البطارية ولا جودة الإجابات. تذكر بعض تقييمات Google Play في أغسطس 2026 حالات تجمّد أو تعطل على هواتف معينة، وردّ المطوّر بإعدادات يمكن تجربتها؛ وهذه تقارير مستخدمين لم تُختبر هنا.',
          '**الاستخدام دون اتصال.** لم تُختبر أحجام التنزيل ولا أي النماذج تعمل على أي الهواتف ولا عمل التطبيق في وضع الطيران.',
          '**متطلبات العتاد.** لا يُذكر أي متطلب للذاكرة أو التخزين.',
          '**الترخيص والشيفرة المصدرية.** لم يُعثر على مستودع عام، لذا يُعامل التطبيق على أنه مغلق المصدر.',
          '**المشتريات والإعلانات.** تعرض صفحة المتجر تثبيتًا مدفوعًا ولا تعرض وسمًا للمشتريات داخل التطبيق أو للإعلانات؛ ولم يُفتح التطبيق نفسه.',
          '**الإصدار.** لا تنشر المصادر التي قُرئت أي رقم إصدار.',
          '**درجات المطوّر.** لم يُتحقق بشكل مستقل من تقييمات النماذج في صفحة المطوّر.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Layla](/ar/power-local-llm/layla-review)',
            'المنصات': 'Android',
            'السعر / الترخيص': 'مجاني جزئيًا / مغلق المصدر',
            'الفرق الرئيسي': 'تطبيق نماذج لغوية محلية موجَّه لـ Android أولًا',
          },
          {
            'التطبيق': '[TokForge](/ar/power-local-llm/tokforge-review)',
            'المنصات': 'Android',
            'السعر / الترخيص': 'مجاني / ملكي',
            'الفرق الرئيسي': 'دردشة دون اتصال مع شخصيات لعب أدوار وتوليد صور وصوت ولوحة صدارة للسرعة',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز مع مكتبة نماذج خاصة به',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة عن المستندات على الجهاز',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل لـ Laria علاقة بـ Layla؟',
            a: 'لم يُعثر على أي صلة. هما تطبيقان منفصلان باسمين متشابهين؛ Laria من MiCK Software.',
          },
          {
            q: 'هل يعمل Laria على iPhone أو سطح المكتب؟',
            a: 'لم يُعثر على إصدار كهذا. لا تعرض صفحة المطوّر سوى Google Play.',
          },
          {
            q: 'هل المشروع ما زال نشطًا؟',
            a: 'تعرض Google Play تحديثًا في 23 أكتوبر 2026، ويدرج موقع المطوّر Laria ضمن مشاريعه الجارية.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Laria مساعد مدفوع لنظام Android يجمع نماذج قابلة للتنزيل على الجهاز مع مزودين سحابيين اختياريين، وقد حُدّث في 23 أكتوبر 2026. في المقابل هناك تقييم منخفض من المستخدمين، وتقارير عن تعطل على بعض الهواتف، وغياب الشيفرة المصدرية العامة، وتصنيف «Teen» مع ملاحظة «Discretion Advised»، إلى جانب ردود نموذجية صريحة جنسيًا بأسلوب الرفيق في صفحة المطوّر. يناسب القراء الذين يريدون تجربة نماذج محلية إلى جانب مزودين سحابيين؛ ومن يريد خيارًا مفتوح المصدر أو مجانيًا فعليه مقارنة [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private Mind](/ar/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[LARIA على Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) — الوصف وتاريخ التحديث وعدد التنزيلات والتقييمات وتصنيف المحتوى وقسم «أمان البيانات»، جرى فحصها في 26 أكتوبر 2026.',
          '[صفحة منتج Laria](https://mick-software.com/main/laria.html) — نظرة المطوّر العامة على الميزات وقائمة نقاط الاتصال ونظرته العامة على النماذج، جرى فحصها في 26 أكتوبر 2026.',
          '[إشعار الخصوصية لدى MiCK Software](https://mick-software.com/main/privacy-notice.html) — معالجة البيانات في الاستخدام المحلي والاستخدام عبر الإنترنت، جرى فحصه في 26 أكتوبر 2026.',
          '[MiCK Software](https://mick-software.com/main/) — موقع الاستوديو مع قائمة تطبيقاته وحالة مشاريعه، جرى فحصه في 26 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Layla](/ar/power-local-llm/layla-review) — تطبيق نماذج لغوية محلية موجَّه لـ Android أولًا.',
          '[مراجعة TokForge](/ar/power-local-llm/tokforge-review) — تطبيق دردشة دون اتصال لنظام Android مع شخصيات لعب أدوار وتوليد صور.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لنظامي iOS وAndroid.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT لـ iPhone وAndroid.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لنظام Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — نظرة أوسع على تطبيقات Android.',
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
    heroImage: '/images/laria-review-hero-zh.webp',
    title: 'Laria 评测:支持本地模型的付费 Android AI 助手',
    seoTitle: 'Laria 评测:支持本地模型的 Android AI 助手',
    intro:
      'Laria 是法国独立工作室 MiCK Software 推出的付费 Android AI 助手。据其 Google Play 页面和开发者网站介绍,它可在手机上运行可下载的模型,也能连接云端服务商和私有服务器。本评测基于 2026 年 10 月 26 日查阅的这些来源,PromptQuorum 未测试该应用。',
    metaDescription:
      'Laria 评测:付费、闭源的 Android AI 助手,支持可下载的本地模型、可选云端服务商和图像工具,AI 身份可自定义,并说明哪些信息未经核实。',
    twitterDescription:
      'Laria 评测:一款付费 Android AI 助手,将可下载的设备端模型与可选的云端服务商结合。商店页面和开发者的说法,以及尚未核实的部分。',
    audience:
      '希望在手机上使用本地 AI 模型、并可选用云端服务商的 Android 用户,需要了解来源已确认和未确认的内容。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Laria 评测',
    targetKeywords: [
      'laria 应用评测',
      'laria 本地 AI 助手',
      'android 离线 AI 助手',
      'android 应用 本地模型 gemma qwen',
      'AI 身份 android 应用',
      'com.mick.genai.laria',
      'laria 对比 layla',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Laria 是一款闭源 Android 应用,可在手机上运行可下载的 AI 模型,并可选连接云端服务商,提供可自定义的 AI 身份和图像工具。**',
    quickAnswerTop: {
      zh: {
        question: 'Laria 真的能离线使用吗?',
        answer:
          '据商店页面和开发者的隐私声明,使用已下载本地模型的聊天在手机上运行,不收集数据。云端服务商、网页搜索和部分图像服务需要联网;以上均未经测试。',
        bullets: [
          '在 [Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) 付费安装。',
          '页面列出的本地模型系列:Gemma、Granite、Mistral、Phi、Qwen、DeepSeek 和 SmolLM。',
          '主屏幕小组件,以及新闻或天气摘要提醒。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Laria 是什么?', anchor: 'what-is-laria' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '内容与年龄分级', anchor: 'content-rating' },
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
            text: 'Laria 是一款闭源 Android 应用,据开发者介绍,它可在手机上运行可下载的 AI 模型,也能使用在线服务商和私有服务器。',
          },
          {
            type: 'plain-terms',
            text: '你在 Google Play 购买后,在应用内下载一个或多个模型并与之聊天;在线服务商是可选附加项,会把你的输入发送给这些服务。每个“身份”是独立的助手,有自己的模型、声音和指令。',
          },
        ],
        items: [
          '开发者:MiCK Software,法国独立工作室,还发布 Picagen、HarmonyX 等 Android 应用。',
          '用户规模:Google Play 显示下载量 1000+,89 条评价平均 2.9 分,口碑规模较小且评价不一。',
          '平台:仅限通过 Google Play 安装的 Android;未发现 iPhone、桌面或网页版本。',
          '内容:Google Play 评级为 Teen,开发者的模型页面展示了陪伴风格的示例回复,其中部分含露骨的性内容。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 26 日查阅的 Google Play 页面、开发者产品页面及其隐私声明。PromptQuorum 未运行、测试或对该应用做基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-laria',
        title: 'Laria 是什么?',
        content: [
          '**Laria(在 Google Play 上名为“LARIA - Local AI Assistant”)是一款 Android 助手,将下载到手机上的模型与可选的在线服务商结合起来。**页面介绍了聊天、写作与头脑风暴、图像生成、提醒,以及“AI 身份”:每个身份是独立的助手,各有名称、头像、系统提示词、模型或服务商、声音、配色、问候语和网页搜索设置。开发者网站称其为“a premium offline AI companion”。',
          '开发者是 MiCK Software,该应用仅在 Google Play 发布。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Laria 作为付费应用从 Google Play 安装,无需注册或使用终端。**开发者的产品页面链接到同一商店页面。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Android',
            '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria)(付费安装;美国商店 $4.99,其他商店定价不同)',
          },
          {
            '平台': '网站',
            '获取方式': '[mick-software.com](https://mick-software.com/main/laria.html)(官方产品页面,含模型概览)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[MiCK Software 隐私声明](https://mick-software.com/main/privacy-notice.html)(涵盖该工作室的所有 Android 应用)',
          },
        ],
        note: 'Google Play 上的最近更新:2026 年 10 月 23 日(更新说明:“UX improvements & bug fixes”)。网页版商店页面和开发者页面均未显示版本号,因此此处不列版本号。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项均来自 Google Play 描述或开发者的产品页面。**',
        ],
        items: [
          '**本地模型。**可下载的模型用于设备端聊天;应用会按你的硬件推荐模型。开发者页面还提到 LFM 模型,并展示了 LiteRT、ONNX 和 GGUF 格式的构建。',
          '**模型概览。**开发者页面根据其自己的基准测试,从速度、推理、亲和力和稳定性给每个本地模型打分;这些是开发者的评分,不是 PromptQuorum 的。',
          '**在线服务商与端点。**Gemini、OpenAI、OpenRouter、Anthropic、xAI/Grok、兼容 Ollama 的端点和兼容 OpenAI 的私有服务器;开发者页面另列出 LM Studio、vLLM、LocalAI 和 llama.cpp 服务器。',
          '**AI 身份。**可创建多个助手,每个都有自己的名称、头像、系统提示词、模型或服务商、声音和问候语。',
          '**图像。**可使用离线图像模型、私有图像服务器或在线服务生成图像,可调整尺寸、步数、质量、数量和强度;兼容的多模态模型可以讨论附带的图片。',
          '**日常使用。**Android 主屏幕上的身份小组件,新闻、天气摘要或个人指令提醒,以及可选环境音的语音播放。',
        ],
        note: '页面称本地性能取决于设备:小模型更快,可在更多手机上运行。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**据开发者的隐私声明,使用本地模型时不收集任何数据。**使用在线服务时,MiCK Software 称不收集个人数据,但第三方服务商可能按其自身政策处理数据。',
          'Google Play 的“数据安全”部分写明“未收集任何数据”,同时说明数据未加密且无法删除,并将位置信息列为可能与第三方共享的数据类型;页面没有解释这些说法如何相互吻合。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该应用闭源,因此这些说法都无法在代码中核实,PromptQuorum 也未审计其网络流量或审查其权限。',
          },
        ],
      },
      contentRating: {
        id: 'content-rating',
        title: '内容与年龄分级',
        content: [
          '**Google Play 将 Laria 评为 Teen,并标注“Diverse Content: Discretion Advised”。**商店页面将其介绍为通用助手,但开发者的模型页面展示了陪伴风格的示例回复,部分示例带有浪漫或露骨的性内容;该页面还按“自由度”给模型打分。在共享设备或工作设备上安装前请先确认。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**希望在一款付费应用里同时使用本地模型和云端服务商的 Android 用户。**来源对二者均有描述。',
          '**喜欢把助手分开的读者。**每个身份都可以有自己的模型、声音和系统提示词。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际性能。**速度、耗电和回答质量均未评估。2026 年 8 月的一些 Google Play 评价反映个别手机卡死或崩溃,开发者回复了可尝试的设置;这些是用户反馈,未在此测试。',
          '**离线使用。**下载大小、哪些模型能在哪些手机上运行,以及应用能否在飞行模式下工作,均未测试。',
          '**硬件需求。**未说明任何内存或存储要求。',
          '**许可证与源代码。**未找到公开仓库,因此按闭源处理。',
          '**购买与广告。**商店页面显示为付费安装,没有应用内购买或广告标签;未打开应用本身。',
          '**版本。**所查阅的来源均未公布版本号。',
          '**开发者评分。**开发者页面上的模型评分未经独立核实。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Layla](/zh/power-local-llm/layla-review)',
            '平台': 'Android',
            '价格 / 许可证': '免费增值 / 闭源',
            '主要区别': '以 Android 为先的本地 LLM 应用',
          },
          {
            '应用': '[TokForge](/zh/power-local-llm/tokforge-review)',
            '平台': 'Android',
            '价格 / 许可证': '免费 / 专有',
            '主要区别': '支持角色扮演、图像生成、语音和速度排行榜的离线聊天',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源的设备端聊天客户端,带自有模型库',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源离线聊天,支持设备端文档问答',
          },
        ],
        note: '竞品信息经常变化;请在各应用自己的商店页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Laria 与 Layla 有关系吗?',
            a: '未发现任何关联。它们是名称相近的两款独立应用;Laria 由 MiCK Software 开发。',
          },
          {
            q: 'Laria 能在 iPhone 或桌面上使用吗?',
            a: '未发现此类版本。开发者页面只提供 Google Play。',
          },
          {
            q: '这个项目还在活跃吗?',
            a: 'Google Play 显示最近一次更新在 2026 年 10 月 23 日,开发者网站也把 Laria 列在进行中的项目里。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Laria 是一款付费 Android 助手,将可下载的设备端模型与可选云端服务商结合,并在 2026 年 10 月 23 日有过更新。不利的一面是:用户评分偏低,个别手机有崩溃报告,没有公开源代码,年龄分级为 Teen 并带有“Discretion Advised”提示,开发者页面还有含露骨性内容的陪伴风格示例。它适合想在云端服务商之外试用本地模型的读者;想要开源或免费方案的读者应比较 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Private Mind](/zh/power-local-llm/private-mind-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 LARIA](https://play.google.com/store/apps/details?id=com.mick.genai.laria) — 描述、更新日期、下载量、评分、内容分级和“数据安全”部分,2026 年 10 月 26 日查阅。',
          '[Laria 产品页面](https://mick-software.com/main/laria.html) — 开发者的功能概览、端点列表和模型概览,2026 年 10 月 26 日查阅。',
          '[MiCK Software 隐私声明](https://mick-software.com/main/privacy-notice.html) — 本地使用与在线使用时的数据处理,2026 年 10 月 26 日查阅。',
          '[MiCK Software](https://mick-software.com/main/) — 含应用列表和项目状态的工作室网站,2026 年 10 月 26 日查阅。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Layla 评测](/zh/power-local-llm/layla-review) — 以 Android 为先的本地 LLM 应用。',
          '[TokForge 评测](/zh/power-local-llm/tokforge-review) — 支持角色扮演和图像生成的 Android 离线聊天应用。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的免费 MIT 许可离线聊天应用。',
          '[2026 年 Android 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用盘点。',
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
    heroImage: '/images/laria-review-hero-ko.webp',
    title: 'Laria 리뷰: 로컬 모델을 쓰는 유료 Android AI 어시스턴트',
    seoTitle: 'Laria 리뷰: 로컬 모델 지원 Android AI 어시스턴트',
    intro:
      'Laria는 프랑스의 독립 스튜디오 MiCK Software가 만든 유료 Android AI 어시스턴트입니다. Google Play 목록과 개발자 웹사이트에 따르면, 다운로드한 모델을 휴대폰에서 실행하며 클라우드 제공업체와 비공개 서버에도 연결할 수 있습니다. 이 리뷰는 2026년 10월 26일에 확인한 해당 출처를 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'Laria 리뷰: 다운로드형 로컬 모델, 선택형 클라우드 제공업체, 이미지 도구를 갖춘 유료 비공개 소스 Android AI 어시스턴트를 다룹니다.',
    twitterDescription:
      'Laria 리뷰: 다운로드형 온디바이스 모델과 선택형 클라우드 제공업체를 함께 쓰는 유료 Android AI 어시스턴트. 목록과 개발자의 주장, 미확인 사항을 정리했습니다.',
    audience:
      '휴대폰에서 로컬 AI 모델을 쓰고 싶고 필요하면 클라우드 제공업체도 쓰려는 Android 사용자로, 출처가 확인한 것과 확인하지 못한 것을 알고 싶은 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Laria 리뷰',
    targetKeywords: [
      'laria 앱 리뷰',
      'laria 로컬 ai 어시스턴트',
      '오프라인 ai 어시스턴트 android',
      'android 앱 로컬 모델 gemma qwen',
      'ai 아이덴티티 android 앱',
      'com.mick.genai.laria',
      'laria layla 비교',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Laria는 다운로드한 AI 모델을 휴대폰에서 실행하고 선택적으로 클라우드 제공업체에도 연결할 수 있는 비공개 소스 Android 앱으로, 맞춤형 AI 아이덴티티와 이미지 도구를 갖추고 있습니다.**',
    quickAnswerTop: {
      ko: {
        question: 'Laria는 정말 오프라인으로 작동하나요?',
        answer:
          '목록과 개발자의 개인정보 처리 안내에 따르면, 다운로드한 로컬 모델과의 대화는 휴대폰에서 실행되며 데이터를 수집하지 않습니다. 클라우드 제공업체, 웹 검색, 일부 이미지 서비스에는 연결이 필요하며, 이 중 어느 것도 테스트하지 않았습니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria)에서 유료로 설치합니다.',
          '목록에 언급된 로컬 모델 계열: Gemma, Granite, Mistral, Phi, Qwen, DeepSeek, SmolLM.',
          '홈 화면 위젯, 뉴스나 날씨 요약 알림.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Laria란 무엇인가?', anchor: 'what-is-laria' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '개인정보와 네트워크 사용', anchor: 'privacy' },
      { label: '콘텐츠와 연령 등급', anchor: 'content-rating' },
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
            text: 'Laria는 개발자에 따르면 다운로드한 AI 모델을 휴대폰에서 실행하고 온라인 제공업체와 비공개 서버도 쓸 수 있는 비공개 소스 Android 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Google Play에서 구매한 뒤 앱 안에서 모델을 하나 이상 내려받아 대화합니다. 온라인 제공업체는 선택 사항이며 입력 내용을 해당 서비스로 보냅니다. 각 "아이덴티티"는 고유한 모델, 음성, 지침을 가진 별도의 어시스턴트입니다.',
          },
        ],
        items: [
          '개발자: 프랑스의 독립 스튜디오 MiCK Software로, Picagen, HarmonyX 등 다른 Android 앱도 출시했습니다.',
          '이용 규모: Google Play에는 다운로드 1,000회 이상, 리뷰 89개에 평균 2.9점으로 표시되어 실적이 작고 평가가 엇갈립니다.',
          '플랫폼: Google Play를 통한 Android만 지원하며 iPhone, 데스크톱, 웹 버전은 찾지 못했습니다.',
          '콘텐츠: Google Play 등급은 Teen이며, 개발자의 모델 페이지에는 동반자 스타일의 예시 답변이 있고 그중 일부는 성적으로 노골적입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 26일에 확인한 Google Play 목록, 개발자의 제품 페이지와 개인정보 처리 안내를 바탕으로 합니다. PromptQuorum은 이 앱을 실행하거나 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-laria',
        title: 'Laria란 무엇인가?',
        content: [
          '**Laria(Google Play 표기는 "LARIA - Local AI Assistant")는 휴대폰에 내려받은 모델과 선택형 온라인 제공업체를 결합한 Android 어시스턴트입니다.** 목록에는 채팅, 글쓰기와 아이디어 구상, 이미지 생성, 알림, 그리고 "AI 아이덴티티"가 소개되어 있습니다. 아이덴티티는 이름, 아바타, 시스템 프롬프트, 모델 또는 제공업체, 음성, 색상 테마, 인사말, 웹 검색 설정을 각각 갖는 별도의 어시스턴트입니다. 개발자 사이트는 이 앱을 "a premium offline AI companion"이라고 부릅니다.',
          '개발자는 MiCK Software이며, 앱은 Google Play에서만 배포됩니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**Laria는 Google Play에서 유료 앱으로 설치합니다. 가입이나 터미널은 필요 없습니다.** 개발자의 제품 페이지도 같은 목록으로 연결됩니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.mick.genai.laria) (유료 설치, 한국 스토어 ₩1,200이며 다른 스토어는 가격이 다릅니다)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[mick-software.com](https://mick-software.com/main/laria.html) (모델 개요가 있는 공식 제품 페이지)',
          },
          {
            '플랫폼': '개인정보처리방침',
            '받는 곳': '[MiCK Software 개인정보 처리 안내](https://mick-software.com/main/privacy-notice.html) (스튜디오의 모든 Android 앱에 적용)',
          },
        ],
        note: 'Google Play 마지막 업데이트: 2026년 10월 23일(릴리스 노트: "UX improvements & bug fixes"). 웹 목록과 개발자 페이지 어디에도 버전 번호가 없어 여기에는 적지 않습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명 또는 개발자의 제품 페이지에서 가져왔습니다.**',
        ],
        items: [
          '**로컬 모델.** 기기에서 대화할 수 있는 다운로드형 모델이 있으며, 앱이 하드웨어에 맞는 모델을 추천합니다. 개발자 페이지에는 LFM 모델도 언급되고 LiteRT, ONNX, GGUF 형식의 빌드가 나와 있습니다.',
          '**모델 개요.** 개발자 페이지는 자체 벤치마크 실행을 바탕으로 각 로컬 모델을 속도, 추론, 친근함, 안정성으로 평가합니다. 이는 개발자의 평가이며 PromptQuorum의 평가가 아닙니다.',
          '**온라인 제공업체와 엔드포인트.** Gemini, OpenAI, OpenRouter, Anthropic, xAI/Grok, Ollama 호환 엔드포인트, OpenAI 호환 비공개 서버가 있으며, 개발자 페이지에는 LM Studio, vLLM, LocalAI, llama.cpp 서버도 나옵니다.',
          '**AI 아이덴티티.** 어시스턴트를 여러 개 만들 수 있고, 각각 이름, 아바타, 시스템 프롬프트, 모델 또는 제공업체, 음성, 인사말을 따로 설정합니다.',
          '**이미지.** 오프라인 이미지 모델, 비공개 이미지 서버, 온라인 서비스로 이미지를 생성할 수 있으며 크기, 단계 수, 품질, 장수, 강도를 조절합니다. 호환되는 멀티모달 모델은 첨부한 이미지에 대해 이야기할 수 있습니다.',
          '**일상 사용.** Android 홈 화면의 아이덴티티 위젯, 뉴스·날씨 요약·개인 지침 알림, 선택형 배경음이 있는 음성 재생.',
        ],
        note: '목록에 따르면 로컬 성능은 기기에 달려 있습니다. 작은 모델일수록 빠르고 더 많은 휴대폰에서 실행됩니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**개발자의 개인정보 처리 안내에 따르면 로컬 모델을 쓸 때는 데이터를 수집하지 않습니다.** 온라인 서비스를 쓰는 경우 MiCK Software는 개인 데이터를 수집하지 않는다고 하지만, 제3자 제공업체가 각자의 정책에 따라 처리할 수 있습니다.',
          'Google Play의 "데이터 보안" 항목에는 "수집된 데이터 없음"이라고 되어 있으면서, 데이터가 암호화되지 않고 삭제할 수도 없다는 점과 위치 정보가 제3자와 공유될 수 있는 데이터 유형으로 나열되어 있습니다. 목록은 이 내용들이 어떻게 맞물리는지 설명하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 앱은 비공개 소스이므로 위 주장은 코드로 확인할 수 없으며, PromptQuorum은 네트워크 트래픽을 감사하거나 앱 권한을 검토하지 않았습니다.',
          },
        ],
      },
      contentRating: {
        id: 'content-rating',
        title: '콘텐츠와 연령 등급',
        content: [
          '**Google Play는 Laria를 Teen으로 분류하고 "Diverse Content: Discretion Advised"라는 표시를 붙입니다.** 목록은 범용 어시스턴트로 소개하지만 개발자의 모델 페이지에는 동반자 스타일의 예시 답변이 있고, 예시 중 일부는 연애적이거나 성적으로 노골적입니다. 이 페이지는 모델을 "자유도"로도 평가합니다. 공용 기기나 업무용 기기에 설치하기 전에 확인하세요.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**로컬 모델과 클라우드 제공업체를 유료 앱 하나에서 쓰고 싶은 Android 사용자.** 출처가 두 가지를 모두 설명합니다.',
          '**어시스턴트를 따로 두고 싶은 분.** 아이덴티티마다 고유한 모델, 음성, 시스템 프롬프트를 둘 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 성능.** 속도, 배터리 사용량, 답변 품질은 평가하지 않았습니다. 2026년 8월의 일부 Google Play 리뷰는 특정 휴대폰에서 멈춤이나 충돌이 있다고 하며, 개발자는 시도해 볼 설정을 답했습니다. 이는 사용자 보고이며 여기서는 테스트하지 않았습니다.',
          '**오프라인 사용.** 다운로드 크기, 어떤 모델이 어떤 휴대폰에서 실행되는지, 비행기 모드에서 작동하는지는 테스트하지 않았습니다.',
          '**하드웨어 요건.** RAM이나 저장 공간 요건은 명시되어 있지 않습니다.',
          '**라이선스와 소스 코드.** 공개 저장소를 찾지 못해 비공개 소스로 취급합니다.',
          '**구매와 광고.** 목록 페이지에는 유료 설치로 표시되고 인앱 구매나 광고 라벨은 없습니다. 앱 자체는 열어 보지 않았습니다.',
          '**버전.** 확인한 출처에는 버전 번호가 공개되어 있지 않습니다.',
          '**개발자의 점수.** 개발자 페이지의 모델 평가는 독립적으로 확인하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Layla](/ko/power-local-llm/layla-review)',
            '플랫폼': 'Android',
            '가격 / 라이선스': '부분 유료화 / 비공개 소스',
            '핵심 차이': 'Android 중심의 로컬 LLM 앱',
          },
          {
            '앱': '[TokForge](/ko/power-local-llm/tokforge-review)',
            '플랫폼': 'Android',
            '가격 / 라이선스': '무료 / 독점',
            '핵심 차이': '롤플레이 캐릭터, 이미지 생성, 음성, 속도 리더보드를 갖춘 오프라인 채팅',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '자체 모델 라이브러리를 갖춘 오픈소스 온디바이스 채팅 클라이언트',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '기기 내 문서 질의응답을 지원하는 오픈소스 오프라인 채팅',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀝니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱 목록에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Laria는 Layla와 관련이 있나요?',
            a: '관련성은 찾지 못했습니다. 이름만 비슷한 별개의 앱이며 Laria는 MiCK Software가 만들었습니다.',
          },
          {
            q: 'Laria를 iPhone이나 데스크톱에서 쓸 수 있나요?',
            a: '그런 빌드는 찾지 못했습니다. 개발자 페이지는 Google Play만 안내합니다.',
          },
          {
            q: '프로젝트는 아직 활발한가요?',
            a: 'Google Play에는 2026년 10월 23일 업데이트가 표시되며, 개발자 사이트도 Laria를 진행 중인 프로젝트로 나열합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Laria는 다운로드형 온디바이스 모델과 선택형 클라우드 제공업체를 결합한 유료 Android 어시스턴트이며 2026년 10월 23일에 업데이트되었습니다. 반면 사용자 평점이 낮고, 일부 휴대폰에서 충돌 보고가 있으며, 공개 소스 코드가 없고, 연령 등급은 Teen에 "Discretion Advised" 표시가 붙으며 개발자 페이지에는 성적으로 노골적인 동반자 스타일 예시가 있습니다. 클라우드 제공업체와 함께 로컬 모델을 시험해 보려는 독자에게 적합하며, 오픈소스나 무료 선택지를 원한다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private Mind](/ko/power-local-llm/private-mind-review)를 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 LARIA](https://play.google.com/store/apps/details?id=com.mick.genai.laria) — 설명, 업데이트 날짜, 다운로드 수, 평점, 콘텐츠 등급, 데이터 보안 항목. 2026년 10월 26일 확인.',
          '[Laria 제품 페이지](https://mick-software.com/main/laria.html) — 개발자의 기능 개요, 엔드포인트 목록, 모델 개요. 2026년 10월 26일 확인.',
          '[MiCK Software 개인정보 처리 안내](https://mick-software.com/main/privacy-notice.html) — 로컬 사용과 온라인 사용 시의 데이터 처리. 2026년 10월 26일 확인.',
          '[MiCK Software](https://mick-software.com/main/) — 앱 목록과 프로젝트 현황이 있는 스튜디오 사이트. 2026년 10월 26일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Layla 리뷰](/ko/power-local-llm/layla-review) — Android 중심의 로컬 LLM 앱.',
          '[TokForge 리뷰](/ko/power-local-llm/tokforge-review) — 롤플레이 캐릭터와 이미지 생성을 갖춘 Android 오프라인 채팅 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 온디바이스 채팅 클라이언트.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone과 Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[2026년 Android 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 더 폭넓은 Android 앱 모음.',
        ],
      },
    },
  },}
