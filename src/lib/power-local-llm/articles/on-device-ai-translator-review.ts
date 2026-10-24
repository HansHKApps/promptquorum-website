// On-Device AI Translator Review: Offline LLM Translation for iPhone
// Slug: on-device-ai-translator-review
// Companion to: locally-ai-review, private-mind-review, pocketpal-ai-review, translate-books-with-llms-review,
// best-local-llm-apps-iphone-2026
// Sources: App Store listing (US storefront text, iTunes lookup, AT/DE/JP/KR/BR storefront titles), the developer's GitHub Pages support
// page and its privacy policy, all read 2026-10-24 — no hands-on testing. The app was found through the SiliconShelf directory entry,
// which is only a pointer; every fact below was re-read from the primary sources.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/on-device-ai-translator-review-hero-en.webp',
    title: 'On-Device AI Translator Review: Offline LLM Translation for iPhone',
    seoTitle: 'On-Device AI Translator Review: Offline iPhone App',
    intro:
      'On-Device AI Translator is an iPhone translation app from an individual developer listed on the App Store as Changwen Li (昌文 李). It translates with Apple\'s built-in translation or with language models that run on the phone, and it was first released on 1 March 2026. This review reflects its App Store listing, the developer\'s support page and its privacy policy as checked on 24 October 2026.',
    metaDescription:
      'On-Device AI Translator review: a closed-source iPhone app that translates with Hy-MT2, TranslateGemma and Qwen on the device. Plans and privacy.',
    twitterDescription:
      'On-Device AI Translator review: a closed-source iPhone translation app with downloadable on-device models, 20 languages and a replacement for the system translate sheet. What the listing and privacy policy say.',
    audience:
      'iPhone users who want text translated by a model on the device instead of a cloud service, and who need to know what the app unlocks for free, what it sends out, and what the sources do not confirm.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On-Device AI Translator review',
    targetKeywords: [
      'on-device ai translator review',
      'offline ai translator iphone',
      'offline translation app iphone',
      'hy-mt2 translator iphone',
      'translategemma iphone app',
      'local ai translate app',
    ],
    current_models_mentioned: ['Hy-MT2', 'TranslateGemma', 'Qwen3', 'Qwen2.5'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple M1'],
    leadAnswerBlock:
      '**On-Device AI Translator (version 1.2) translates on the iPhone with downloadable Hy-MT2, TranslateGemma and Qwen models, and offers Apple\'s built-in translation as a free engine.** The AI models sit behind in-app purchases whose prices the sources do not show, and the privacy policy predates the app, so read the plans and privacy sections before relying on it.',
    quickAnswerTop: {
      en: {
        question: 'Does On-Device AI Translator really translate offline?',
        answer:
          'Per its listing and privacy policy, yes once a model is downloaded: translating with an AI model makes no network requests, and the app works in airplane mode. The only online steps are model downloads and an optional update check.',
        bullets: [
          'Free download on the [App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075), with no account.',
          'Can be set as the default translation app, so selected text in any app opens in it.',
          'Version 1.2 added two-way voice conversations and continuous listening.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is On-Device AI Translator?', anchor: 'what-is-translator' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Free Tier and Paid Plans', anchor: 'plans' },
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
            text: 'On-Device AI Translator is a closed-source iPhone translation app that runs its models on the device and can stand in for the system translate sheet.',
          },
          {
            type: 'plain-terms',
            text: 'You install it, download a translation model once, and from then on select text in any app to translate it without the text going to a server, according to the developer.',
          },
        ],
        items: [
          'Developer: a single developer listed on the App Store as Changwen Li, with no company behind it and no public app source code.',
          'Maintenance: the last App Store update came five days before this check, so no stale-project warning applies.',
          'Reach: the App Store shows 3.0 out of 5 from two ratings, so the app has little public track record.',
          'Platforms: iPhone and iPad with iOS 18.4 or later; there is no Android or desktop build.',
          'Languages: 20 translation languages, while the app\'s own interface is listed in English and Chinese.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store listing, the developer\'s support page and its privacy policy, checked on 24 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-translator',
        title: 'What Is On-Device AI Translator?',
        content: [
          '**On-Device AI Translator is an iPhone app that translates text with models running locally instead of calling a cloud translation service.** According to its App Store listing it has two engines: System Translation, which uses Apple\'s built-in translation with language packs that the system downloads on first use, and on-device AI models (Tencent Hy-MT2 in 1.8B and 7B sizes, Google TranslateGemma 4B, Qwen3 and Qwen2.5) that the app downloads once and then runs offline. The privacy policy names llama.cpp as the inference engine.',
          'The name varies by place. The US App Store title is "On-Device AI Translator", the description calls it "AI Translator", the developer\'s support page and privacy policy say "Local AI Translate", and the Austrian, German, Japanese, Korean and Brazilian storefronts all title it "本地 AI 翻译". The App Store ID (6759458075) is the same on every storefront checked.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**The app is installed from the App Store; no Android build, desktop build or source code is offered.** The developer has no product website beyond the support page below.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'iPhone / iPad',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) (iOS 18.4 or later, 109 MB)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[Developer support page](https://on-device-ai-application.github.io/translator-site/) (English and Chinese)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Privacy policy](https://on-device-ai-application.github.io/translator-site/privacy_en.html) (English, Chinese version linked there; effective 1 January 2025)',
          },
          {
            'Platform': 'Bug reports',
            'Where to get it': '[GitHub issues](https://github.com/On-Device-AI-Application/translator-site/issues) (website repository only, no app source)',
          },
        ],
        note: 'Version reviewed: 1.2, released on the App Store on 19 October 2026 (first release 1 March 2026; 1.1 followed on 18 September 2026).',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store description and release notes.**',
        ],
        items: [
          '**Default translation app.** After you set it as the default, selecting text in any app and tapping Translate opens the app, which translates with the chosen local model and can replace the original text in place or copy the result.',
          '**20 translation languages.** Simplified and Traditional Chinese, English, Japanese, Korean, French, German, Spanish, Italian, Portuguese, Russian, Arabic, Thai, Vietnamese, Indonesian, Turkish, Dutch, Polish, Ukrainian and Hindi; starred favorites stay at the top of every menu.',
          '**Voice conversations.** Version 1.2 adds two-way voice conversations and continuous listening, plus a split view of originals and translations.',
          '**Managed model downloads.** Version 1.1 added background downloads with resume and integrity checks; 1.2 improved offline downloads and language switching.',
        ],
        note: 'The App Store lists the app\'s own interface languages as English and Chinese; the 20 languages above are the ones it translates between.',
      },
      plans: {
        id: 'plans',
        title: 'Free Tier and Paid Plans',
        content: [
          '**The description names System Translation as the free engine and describes two in-app purchases that unlock the on-device AI models.**',
        ],
        items: [
          '**Free.** System Translation with no model download; the system fetches a language pack the first time a language is used.',
          '**Lifetime.** A one-time purchase that unlocks Hy-MT2 1.8B and the Qwen models, including inside the system translate sheet.',
          '**Pro.** Everything in Lifetime plus the large models, TranslateGemma 4B and Hy-MT2 7B, billed monthly or yearly with a free 3-day trial.',
        ],
        note: 'People who bought the app when it was still a paid download receive Lifetime automatically, according to the description.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The listing and the privacy policy both say that text never leaves the device when an AI model translates it.** The App Store privacy label reads "Data Not Collected", which Apple notes is declared by the developer and not verified. The policy adds that the app has no account, makes no calls to external AI services, collects no analytics and has no separate crash-reporting SDK; crash reports go only to Apple, and only if you opt in.',
          'What does use the network, per the policy: downloading GGUF model files at setup or when you pick a new model, and an optional check for app or model updates. The policy does not name where the models are downloaded from.',
          'Two details need care. The policy is effective 1 January 2025, before the app\'s first release, and it calls the app "Local AI Translate". It also says translation text is held in memory only and never written to persistent storage, while version 1.2 saves transcripts and recordings on the device; the policy text does not describe those, nor the in-app purchases.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source, so none of these claims can be checked in code, and PromptQuorum has not audited network traffic. Anyone translating confidential material should verify the behavior on their own device.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who translate private text on an iPhone.** A local model keeps the text off a cloud service, per the developer.',
          '**Travelers and others without reliable data.** Translation works offline once a model is downloaded.',
          '**Users who want to replace the system translate sheet.** The app can be set as the default translation app.',
          '**Readers who want to compare models.** Hy-MT2, TranslateGemma and Qwen are offered side by side.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run the app, so translation quality, speed, battery use and the voice features are not assessed, and no model benchmark is claimed.',
          '**Prices and free scope.** The listing text shows no price for Lifetime or Pro and does not say whether any AI model works without a purchase.',
          '**Source code and license.** The app is closed source; the developer\'s GitHub organization hosts only its website repositories.',
          '**Data flows.** With no code to inspect, the privacy statements above are the account of the developer and its policy.',
          '**Track record.** Two App Store ratings and an individual developer, with no company or support commitment named in the sources.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Platforms': 'iOS, Mac',
            'Price / license': 'Free / closed source',
            'Key difference': 'General chat with open models on iPhone, iPad and Mac via MLX',
          },
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
            'App': '[TranslateBooksWithLLMs](/power-local-llm/translate-books-with-llms-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'Translates whole books and documents with a local Ollama model or cloud LLMs',
          },
        ],
        note: 'No other app in this list is a dedicated phone translator, so these are the nearest reviewed options rather than like-for-like rivals. Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I run it on a Mac with Apple silicon?',
            a: 'The App Store lists Macs with Apple M1 or later but marks the app "Designed for iPhone. Not verified for macOS", so the developer has not verified the Mac experience, and PromptQuorum has not tried it.',
          },
          {
            q: 'What happens to saved transcripts and recordings?',
            a: 'Version 1.2 saves them on the device, per its release notes. The sources do not say how long they are kept or whether they can be deleted inside the app.',
          },
          {
            q: 'Which model should I choose?',
            a: 'The description says to pick one to match the device\'s memory and the quality needed. It gives no memory figures, download sizes or quality comparisons for the models.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'On-Device AI Translator is an iPhone translation app that runs Hy-MT2, TranslateGemma or Qwen models on the device, covers 20 languages and can replace the system translate sheet, with Apple\'s built-in translation as a free fallback. It is also actively updated, with a release five days before this review was checked. Against that, it is closed source, new, rated by only two people, tied to purchases whose prices the sources do not show, and described by a privacy policy older than the app. It suits readers who want a local translation model on an iPhone and accept a young, closed app; readers who want auditable code can compare [Private Mind](/power-local-llm/private-mind-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[On-Device AI Translator on the App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) — description, version history, requirements, ratings, in-app purchases and privacy label, checked 24 October 2026.',
          '[Developer support page](https://on-device-ai-application.github.io/translator-site/) — the developer\'s English and Chinese support page, checked 24 October 2026.',
          '[Privacy policy](https://on-device-ai-application.github.io/translator-site/privacy_en.html) — data handling and network use, effective 1 January 2025, checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a free iPhone, iPad and Mac app for open models via MLX.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[TranslateBooksWithLLMs Review](/power-local-llm/translate-books-with-llms-review) — a desktop tool for translating whole books with local or cloud LLMs.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'On-Device AI Translator Review: Offline LLM Translation for iPhone',
      description:
        'On-Device AI Translator review: a closed-source iPhone translation app with downloadable on-device models, 20 languages and a system translate sheet replacement. Plans, privacy and what the sources do not confirm.',
      url: 'https://www.promptquorum.com/power-local-llm/on-device-ai-translator-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'iPhone users evaluating an offline AI translation app' },
      about: [
        { '@type': 'Thing', name: 'On-Device AI Translator' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Machine translation' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/on-device-ai-translator-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'On-Device AI Translator Review', item: 'https://www.promptquorum.com/power-local-llm/on-device-ai-translator-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/on-device-ai-translator-review-hero-de.webp',
    title: 'On-Device AI Translator Rezension: Offline-KI-Übersetzung für das iPhone',
    seoTitle: 'On-Device AI Translator Rezension: Offline-App fürs iPhone',
    intro:
      'On-Device AI Translator ist eine Übersetzungs-App für das iPhone von einem Einzelentwickler, der im App Store als Changwen Li (昌文 李) geführt wird. Sie übersetzt mit der integrierten Übersetzung von Apple oder mit Sprachmodellen, die auf dem Telefon laufen, und wurde am 1. März 2026 erstmals veröffentlicht. Diese Rezension gibt den App-Store-Eintrag, die Support-Seite des Entwicklers und seine Datenschutzerklärung wieder, wie am 24. Oktober 2026 geprüft.',
    metaDescription:
      'On-Device AI Translator im Test: nicht quelloffene iPhone-App, die mit Hy-MT2, TranslateGemma und Qwen auf dem Gerät übersetzt. Preise, Datenschutz.',
    twitterDescription:
      'On-Device AI Translator im Test: nicht quelloffene iPhone-Übersetzungs-App mit ladbaren Modellen auf dem Gerät, 20 Sprachen und Ersatz für das System-Übersetzungsmenü. Was Eintrag und Datenschutzerklärung sagen.',
    audience:
      'iPhone-Nutzer, die Texte von einem Modell auf dem Gerät statt von einem Cloud-Dienst übersetzen lassen möchten und wissen müssen, was kostenlos freigeschaltet ist, was nach außen gesendet wird und was die Quellen nicht bestätigen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On-Device AI Translator Rezension',
    targetKeywords: [
      'on-device ai translator test',
      'offline ki übersetzer iphone',
      'offline übersetzungs-app iphone',
      'hy-mt2 übersetzer iphone',
      'translategemma iphone app',
      'local ai translate app',
    ],
    current_models_mentioned: ['Hy-MT2', 'TranslateGemma', 'Qwen3', 'Qwen2.5'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple M1'],
    leadAnswerBlock:
      '**On-Device AI Translator (Version 1.2) übersetzt auf dem iPhone mit ladbaren Modellen wie Hy-MT2, TranslateGemma und Qwen und bietet die integrierte Übersetzung von Apple als kostenlose Engine.** Die KI-Modelle stehen hinter In-App-Käufen, deren Preise die Quellen nicht nennen, und die Datenschutzerklärung ist älter als die App; lesen Sie daher die Abschnitte zu Tarifen und Datenschutz, bevor Sie sich darauf verlassen.',
    quickAnswerTop: {
      de: {
        question: 'Übersetzt On-Device AI Translator wirklich offline?',
        answer:
          'Laut Eintrag und Datenschutzerklärung ja, sobald ein Modell geladen ist: Beim Übersetzen mit einem KI-Modell entstehen keine Netzwerkanfragen, und die App funktioniert im Flugmodus. Online ist sie nur für Modell-Downloads und eine optionale Update-Prüfung.',
        bullets: [
          'Kostenloser Download im [App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075), ohne Konto.',
          'Lässt sich als Standard-Übersetzungs-App festlegen, sodass markierter Text aus jeder App darin geöffnet wird.',
          'Version 1.2 brachte zweiseitige Sprachkonversationen und fortlaufendes Zuhören.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist On-Device AI Translator?', anchor: 'what-is-translator' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Kostenlose Stufe und Bezahlpläne', anchor: 'plans' },
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
            text: 'On-Device AI Translator ist eine nicht quelloffene Übersetzungs-App für das iPhone, die ihre Modelle auf dem Gerät ausführt und das System-Übersetzungsmenü ersetzen kann.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App, laden einmal ein Übersetzungsmodell und markieren danach in jeder App Text zum Übersetzen, ohne dass der Text laut Entwickler an einen Server geht.',
          },
        ],
        items: [
          'Entwickler: ein Einzelentwickler, der im App Store als Changwen Li geführt wird, ohne Unternehmen dahinter und ohne öffentlichen Quellcode der App.',
          'Pflege: Das letzte App-Store-Update erschien fünf Tage vor dieser Prüfung, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Reichweite: Der App Store zeigt 3,0 von 5 bei zwei Bewertungen, die App hat also kaum öffentliche Erfolgsbilanz.',
          'Plattformen: iPhone und iPad mit iOS 18.4 oder neuer; es gibt keinen Android- oder Desktop-Build.',
          'Sprachen: 20 Übersetzungssprachen, während die Oberfläche der App auf Englisch und Chinesisch geführt wird.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den App-Store-Eintrag, die Support-Seite des Entwicklers und seine Datenschutzerklärung, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder vermessen.',
          },
        ],
      },
      overview: {
        id: 'what-is-translator',
        title: 'Was ist On-Device AI Translator?',
        content: [
          '**On-Device AI Translator ist eine iPhone-App, die Text mit lokal laufenden Modellen übersetzt, statt einen Cloud-Übersetzungsdienst aufzurufen.** Laut App-Store-Eintrag hat sie zwei Engines: die Systemübersetzung (System Translation), die die integrierte Übersetzung von Apple mit Sprachpaketen nutzt, welche das System beim ersten Gebrauch lädt, und KI-Modelle auf dem Gerät (Tencent Hy-MT2 in den Größen 1.8B und 7B, Google TranslateGemma 4B, Qwen3 und Qwen2.5), die die App einmal herunterlädt und dann offline ausführt. Die Datenschutzerklärung nennt llama.cpp als Inferenz-Engine.',
          'Der Name variiert je nach Ort. Der Titel im US-App-Store lautet „On-Device AI Translator“, die Beschreibung nennt sie „AI Translator“, die Support-Seite des Entwicklers und die Datenschutzerklärung sagen „Local AI Translate“, und die Stores in Österreich, Deutschland, Japan, Korea und Brasilien führen sie alle als „本地 AI 翻译“. Die App-Store-ID (6759458075) ist in allen geprüften Stores dieselbe.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Die App wird über den App Store installiert; es gibt weder einen Android-Build noch einen Desktop-Build noch Quellcode.** Der Entwickler hat keine Produktwebsite außer der unten genannten Support-Seite.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'iPhone / iPad',
            'Bezugsquelle': '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) (iOS 18.4 oder neuer, 109 MB)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[Support-Seite des Entwicklers](https://on-device-ai-application.github.io/translator-site/) (Englisch und Chinesisch)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung](https://on-device-ai-application.github.io/translator-site/privacy_en.html) (Englisch, chinesische Fassung dort verlinkt; gültig ab 1. Januar 2025)',
          },
          {
            'Plattform': 'Fehlermeldungen',
            'Bezugsquelle': '[GitHub Issues](https://github.com/On-Device-AI-Application/translator-site/issues) (nur Website-Repository, kein App-Quellcode)',
          },
        ],
        note: 'Geprüfte Version: 1.2, am 19. Oktober 2026 im App Store veröffentlicht (Erstveröffentlichung am 1. März 2026; 1.1 folgte am 18. September 2026).',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen aus der App-Store-Beschreibung und den Versionshinweisen.**',
        ],
        items: [
          '**Standard-Übersetzungs-App.** Wenn Sie sie als Standard festlegen, öffnet das Markieren von Text in einer beliebigen App und Tippen auf „Übersetzen“ diese App; sie übersetzt mit dem gewählten lokalen Modell und kann den Originaltext direkt ersetzen oder das Ergebnis kopieren.',
          '**20 Übersetzungssprachen.** Vereinfachtes und Traditionelles Chinesisch, Englisch, Japanisch, Koreanisch, Französisch, Deutsch, Spanisch, Italienisch, Portugiesisch, Russisch, Arabisch, Thai, Vietnamesisch, Indonesisch, Türkisch, Niederländisch, Polnisch, Ukrainisch und Hindi; mit Stern markierte Favoriten stehen in jedem Menü oben.',
          '**Sprachkonversationen.** Version 1.2 ergänzt zweiseitige Sprachkonversationen und fortlaufendes Zuhören sowie eine geteilte Ansicht von Original und Übersetzung.',
          '**Verwaltete Modell-Downloads.** Version 1.1 brachte Hintergrund-Downloads mit Fortsetzung und Integritätsprüfung; 1.2 verbesserte Offline-Downloads und den Sprachwechsel.',
        ],
        note: 'Der App Store führt die Oberflächensprachen der App als Englisch und Chinesisch; die 20 oben genannten Sprachen sind die, zwischen denen sie übersetzt.',
      },
      plans: {
        id: 'plans',
        title: 'Kostenlose Stufe und Bezahlpläne',
        content: [
          '**Die Beschreibung nennt die Systemübersetzung als kostenlose Engine und beschreibt zwei In-App-Käufe, die die KI-Modelle auf dem Gerät freischalten.**',
        ],
        items: [
          '**Kostenlos.** Systemübersetzung ohne Modell-Download; das System lädt beim ersten Gebrauch einer Sprache ein Sprachpaket.',
          '**Lifetime.** Ein einmaliger Kauf, der Hy-MT2 1.8B und die Qwen-Modelle freischaltet, auch im System-Übersetzungsmenü.',
          '**Pro.** Alles aus Lifetime plus die großen Modelle TranslateGemma 4B und Hy-MT2 7B, monatlich oder jährlich abgerechnet, mit 3 Tagen kostenloser Testphase.',
        ],
        note: 'Wer die App kaufte, als sie noch ein kostenpflichtiger Download war, erhält laut Beschreibung automatisch Lifetime.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Eintrag und Datenschutzerklärung sagen beide, dass Text das Gerät nicht verlässt, wenn ein KI-Modell ihn übersetzt.** Das Datenschutzlabel im App Store lautet „Daten werden nicht erfasst“; Apple weist darauf hin, dass es vom Entwickler angegeben und nicht überprüft ist. Die Erklärung ergänzt, dass die App kein Konto hat, keine externen KI-Dienste aufruft, keine Analysedaten erhebt und kein eigenes SDK für Absturzberichte nutzt; Absturzberichte gehen nur an Apple und nur, wenn Sie zustimmen.',
          'Was laut Erklärung das Netzwerk nutzt: das Herunterladen von GGUF-Modelldateien bei der Einrichtung oder bei der Wahl eines neuen Modells sowie eine optionale Prüfung auf App- oder Modell-Updates. Woher die Modelle geladen werden, nennt die Erklärung nicht.',
          'Zwei Details verlangen Sorgfalt. Die Erklärung gilt ab dem 1. Januar 2025, also vor der Erstveröffentlichung der App, und nennt die App „Local AI Translate“. Sie sagt außerdem, Übersetzungstext werde nur im Arbeitsspeicher gehalten und nie dauerhaft gespeichert, während Version 1.2 Transkripte und Aufnahmen auf dem Gerät speichert; der Text der Erklärung beschreibt weder dies noch die In-App-Käufe.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App ist nicht quelloffen, daher lässt sich keine dieser Aussagen im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht geprüft. Wer vertrauliches Material übersetzt, sollte das Verhalten auf dem eigenen Gerät überprüfen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Menschen, die auf dem iPhone private Texte übersetzen.** Ein lokales Modell hält den Text laut Entwickler aus einem Cloud-Dienst heraus.',
          '**Reisende und andere ohne verlässliche Datenverbindung.** Das Übersetzen funktioniert offline, sobald ein Modell geladen ist.',
          '**Nutzer, die das System-Übersetzungsmenü ersetzen möchten.** Die App lässt sich als Standard-Übersetzungs-App festlegen.',
          '**Leser, die Modelle vergleichen möchten.** Hy-MT2, TranslateGemma und Qwen werden nebeneinander angeboten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität im Praxiseinsatz.** PromptQuorum hat die App nicht ausgeführt; Übersetzungsqualität, Geschwindigkeit, Akkuverbrauch und Sprachfunktionen sind daher nicht bewertet, und es wird kein Modell-Benchmark behauptet.',
          '**Preise und kostenloser Umfang.** Der Eintragstext nennt keinen Preis für Lifetime oder Pro und sagt nicht, ob ein KI-Modell ohne Kauf funktioniert.',
          '**Quellcode und Lizenz.** Die App ist nicht quelloffen; die GitHub-Organisation des Entwicklers enthält nur seine Website-Repositories.',
          '**Datenflüsse.** Ohne Code zur Prüfung sind die obigen Datenschutzangaben die Darstellung des Entwicklers und seiner Erklärung.',
          '**Erfolgsbilanz.** Zwei App-Store-Bewertungen und ein Einzelentwickler, ohne dass die Quellen ein Unternehmen oder eine Support-Zusage nennen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Plattformen': 'iOS, Mac',
            'Preis / Lizenz': 'Kostenlos / Closed Source',
            'Wesentlicher Unterschied': 'Allgemeiner Chat mit offenen Modellen auf iPhone, iPad und Mac über MLX',
          },
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
            'App': '[TranslateBooksWithLLMs](/de/power-local-llm/translate-books-with-llms-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / AGPL-3.0',
            'Wesentlicher Unterschied': 'Übersetzt ganze Bücher und Dokumente mit einem lokalen Ollama-Modell oder Cloud-LLMs',
          },
        ],
        note: 'Keine andere App in dieser Liste ist ein reiner Übersetzer für das Telefon; es sind die nächstliegenden geprüften Optionen, keine direkten Konkurrenten. Wettbewerberdetails ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich sie auf einem Mac mit Apple Silicon nutzen?',
            a: 'Der App Store führt Macs mit Apple M1 oder neuer auf, markiert die App aber mit „Für iPhone entwickelt. Nicht für macOS verifiziert“; der Entwickler hat das Mac-Erlebnis also nicht verifiziert, und PromptQuorum hat es nicht ausprobiert.',
          },
          {
            q: 'Was geschieht mit gespeicherten Transkripten und Aufnahmen?',
            a: 'Version 1.2 speichert sie laut Versionshinweisen auf dem Gerät. Die Quellen sagen nicht, wie lange sie aufbewahrt werden oder ob sie sich in der App löschen lassen.',
          },
          {
            q: 'Welches Modell soll ich wählen?',
            a: 'Die Beschreibung rät, eines passend zum Gerätespeicher und zur gewünschten Qualität zu wählen. Speicherangaben, Download-Größen oder Qualitätsvergleiche für die Modelle nennt sie nicht.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'On-Device AI Translator ist eine iPhone-Übersetzungs-App, die Hy-MT2-, TranslateGemma- oder Qwen-Modelle auf dem Gerät ausführt, 20 Sprachen abdeckt und das System-Übersetzungsmenü ersetzen kann, mit der integrierten Übersetzung von Apple als kostenloser Rückfalloption. Sie wird zudem aktiv aktualisiert, mit einer Veröffentlichung fünf Tage vor der Prüfung dieser Rezension. Dagegen steht: Sie ist nicht quelloffen, neu, von nur zwei Personen bewertet, an Käufe gebunden, deren Preise die Quellen nicht nennen, und durch eine Datenschutzerklärung beschrieben, die älter ist als die App. Sie eignet sich für Leser, die ein lokales Übersetzungsmodell auf dem iPhone wollen und eine junge, geschlossene App akzeptieren; wer prüfbaren Code möchte, kann [Private Mind](/de/power-local-llm/private-mind-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[On-Device AI Translator im App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) — Beschreibung, Versionshistorie, Anforderungen, Bewertungen, In-App-Käufe und Datenschutzlabel, geprüft am 24. Oktober 2026.',
          '[Support-Seite des Entwicklers](https://on-device-ai-application.github.io/translator-site/) — die englische und chinesische Support-Seite des Entwicklers, geprüft am 24. Oktober 2026.',
          '[Datenschutzerklärung](https://on-device-ai-application.github.io/translator-site/privacy_en.html) — Datenverarbeitung und Netzwerknutzung, gültig ab 1. Januar 2025, geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Locally-AI-Rezension](/de/power-local-llm/locally-ai-review) — eine kostenlose App für iPhone, iPad und Mac mit offenen Modellen über MLX.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App für iPhone und Android.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.',
          '[TranslateBooksWithLLMs-Rezension](/de/power-local-llm/translate-books-with-llms-review) — ein Desktop-Werkzeug, das ganze Bücher mit lokalen oder Cloud-LLMs übersetzt.',
          '[Die besten lokalen LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere Übersicht für das iPhone.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/on-device-ai-translator-review-hero-es.webp',
    title: 'Análisis de On-Device AI Translator: traducción con IA sin conexión en iPhone',
    seoTitle: 'Análisis de On-Device AI Translator: app offline iPhone',
    intro:
      'On-Device AI Translator es una app de traducción para iPhone de un desarrollador individual que figura en la App Store como Changwen Li (昌文 李). Traduce con la traducción integrada de Apple o con modelos de lenguaje que se ejecutan en el teléfono, y se publicó por primera vez el 1 de marzo de 2026. Este análisis refleja su ficha de la App Store, la página de soporte del desarrollador y su política de privacidad, tal como se comprobaron el 24 de octubre de 2026.',
    metaDescription:
      'Análisis de On-Device AI Translator: app de iPhone de código cerrado que traduce con Hy-MT2, TranslateGemma y Qwen en el dispositivo. Planes y privacidad.',
    twitterDescription:
      'Análisis de On-Device AI Translator: app de traducción para iPhone de código cerrado, con modelos descargables en el dispositivo, 20 idiomas y sustituto de la hoja de traducción del sistema. Qué dicen la ficha y la política de privacidad.',
    audience:
      'Usuarios de iPhone que quieren que un modelo en el dispositivo traduzca sus textos en lugar de un servicio en la nube, y que necesitan saber qué desbloquea gratis la app, qué envía al exterior y qué no confirman las fuentes.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de On-Device AI Translator',
    targetKeywords: [
      'on-device ai translator análisis',
      'traductor ia offline iphone',
      'app de traducción sin conexión iphone',
      'hy-mt2 traductor iphone',
      'translategemma app iphone',
      'local ai translate app',
    ],
    current_models_mentioned: ['Hy-MT2', 'TranslateGemma', 'Qwen3', 'Qwen2.5'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple M1'],
    leadAnswerBlock:
      '**On-Device AI Translator (versión 1.2) traduce en el iPhone con modelos descargables como Hy-MT2, TranslateGemma y Qwen, y ofrece la traducción integrada de Apple como motor gratuito.** Los modelos de IA están detrás de compras dentro de la app cuyos precios las fuentes no muestran, y la política de privacidad es anterior a la app; lee las secciones de planes y privacidad antes de confiar en ella.',
    quickAnswerTop: {
      es: {
        question: '¿On-Device AI Translator traduce de verdad sin conexión?',
        answer:
          'Según su ficha y su política de privacidad, sí una vez descargado un modelo: traducir con un modelo de IA no genera peticiones de red y la app funciona en modo avión. Solo se conecta para descargar modelos y, de forma opcional, para comprobar actualizaciones.',
        bullets: [
          'Descarga gratuita en la [App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075), sin cuenta.',
          'Se puede fijar como app de traducción predeterminada, de modo que el texto seleccionado en cualquier app se abra en ella.',
          'La versión 1.2 añadió conversaciones de voz bidireccionales y escucha continua.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es On-Device AI Translator?', anchor: 'what-is-translator' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Nivel gratuito y planes de pago', anchor: 'plans' },
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
            text: 'On-Device AI Translator es una app de traducción para iPhone de código cerrado que ejecuta sus modelos en el dispositivo y puede sustituir la hoja de traducción del sistema.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas, descargas un modelo de traducción una sola vez y, desde entonces, seleccionas texto en cualquier app para traducirlo sin que, según el desarrollador, salga hacia un servidor.',
          },
        ],
        items: [
          'Desarrollador: un desarrollador individual que figura en la App Store como Changwen Li, sin empresa detrás y sin código fuente público de la app.',
          'Mantenimiento: la última actualización en la App Store llegó cinco días antes de esta comprobación, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Alcance: la App Store muestra 3.0 sobre 5 con dos valoraciones, por lo que la app tiene poco historial público.',
          'Plataformas: iPhone y iPad con iOS 18.4 o posterior; no hay versión para Android ni para escritorio.',
          'Idiomas: 20 idiomas de traducción, mientras que la interfaz de la propia app figura en inglés y chino.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en la ficha de la App Store, la página de soporte del desarrollador y su política de privacidad, comprobadas el 24 de octubre de 2026. PromptQuorum no ha instalado, probado ni medido la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-translator',
        title: '¿Qué es On-Device AI Translator?',
        content: [
          '**On-Device AI Translator es una app para iPhone que traduce texto con modelos que se ejecutan en local en lugar de llamar a un servicio de traducción en la nube.** Según su ficha de la App Store, tiene dos motores: la traducción del sistema (System Translation), que usa la traducción integrada de Apple con paquetes de idioma que el sistema descarga la primera vez, y modelos de IA en el dispositivo (Tencent Hy-MT2 en tamaños 1.8B y 7B, Google TranslateGemma 4B, Qwen3 y Qwen2.5) que la app descarga una vez y ejecuta después sin conexión. La política de privacidad nombra llama.cpp como motor de inferencia.',
          'El nombre varía según el lugar. El título en la App Store de EE. UU. es «On-Device AI Translator», la descripción la llama «AI Translator», la página de soporte del desarrollador y la política de privacidad dicen «Local AI Translate», y las tiendas de Austria, Alemania, Japón, Corea y Brasil la titulan «本地 AI 翻译». El ID de la App Store (6759458075) es el mismo en todas las tiendas comprobadas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**La app se instala desde la App Store; no hay versión para Android, versión de escritorio ni código fuente.** El desarrollador no tiene sitio de producto aparte de la página de soporte que figura abajo.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Dónde obtenerla': '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) (iOS 18.4 o posterior, 109 MB)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[Página de soporte del desarrollador](https://on-device-ai-application.github.io/translator-site/) (inglés y chino)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Política de privacidad](https://on-device-ai-application.github.io/translator-site/privacy_en.html) (en inglés, con enlace a la versión en chino; vigente desde el 1 de enero de 2025)',
          },
          {
            'Plataforma': 'Informes de errores',
            'Dónde obtenerla': '[Incidencias en GitHub](https://github.com/On-Device-AI-Application/translator-site/issues) (solo repositorio del sitio web, sin código de la app)',
          },
        ],
        note: 'Versión analizada: 1.2, publicada en la App Store el 19 de octubre de 2026 (primera publicación el 1 de marzo de 2026; la 1.1 llegó el 18 de septiembre de 2026).',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todos los puntos siguientes proceden de la descripción de la App Store y de las notas de versión.**',
        ],
        items: [
          '**App de traducción predeterminada.** Después de fijarla como predeterminada, seleccionar texto en cualquier app y pulsar Traducir abre esta app, que traduce con el modelo local elegido y puede reemplazar el texto original en el sitio o copiar el resultado.',
          '**20 idiomas de traducción.** Chino simplificado y tradicional, inglés, japonés, coreano, francés, alemán, español, italiano, portugués, ruso, árabe, tailandés, vietnamita, indonesio, turco, neerlandés, polaco, ucraniano e hindi; los favoritos marcados con estrella quedan arriba en todos los menús.',
          '**Conversaciones de voz.** La versión 1.2 añade conversaciones de voz bidireccionales y escucha continua, además de una vista dividida del original y la traducción.',
          '**Descargas de modelos gestionadas.** La versión 1.1 añadió descargas en segundo plano con reanudación y comprobación de integridad; la 1.2 mejoró las descargas sin conexión y el cambio de idioma.',
        ],
        note: 'La App Store indica que los idiomas de la interfaz de la propia app son inglés y chino; los 20 idiomas anteriores son aquellos entre los que traduce.',
      },
      plans: {
        id: 'plans',
        title: 'Nivel gratuito y planes de pago',
        content: [
          '**La descripción nombra la traducción del sistema como motor gratuito y describe dos compras dentro de la app que desbloquean los modelos de IA en el dispositivo.**',
        ],
        items: [
          '**Gratis.** Traducción del sistema sin descargar modelos; el sistema obtiene un paquete de idioma la primera vez que se usa un idioma.',
          '**Lifetime.** Una compra única que desbloquea Hy-MT2 1.8B y los modelos Qwen, también dentro de la hoja de traducción del sistema.',
          '**Pro.** Todo lo de Lifetime más los modelos grandes, TranslateGemma 4B y Hy-MT2 7B, con cobro mensual o anual y 3 días de prueba gratuita.',
        ],
        note: 'Quienes compraron la app cuando todavía era una descarga de pago reciben Lifetime automáticamente, según la descripción.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**La ficha y la política de privacidad dicen ambas que el texto no sale del dispositivo cuando un modelo de IA lo traduce.** La etiqueta de privacidad de la App Store dice «Datos no recopilados», que según Apple declara el desarrollador y no está verificada. La política añade que la app no tiene cuenta, no llama a servicios de IA externos, no recopila analítica y no incluye un SDK propio de informes de fallos; los informes de fallos van solo a Apple y solo si lo aceptas.',
          'Lo que sí usa la red, según la política: descargar archivos de modelo GGUF durante la configuración o al elegir un modelo nuevo, y una comprobación opcional de actualizaciones de la app o de los modelos. La política no indica de dónde se descargan los modelos.',
          'Dos detalles requieren cuidado. La política está vigente desde el 1 de enero de 2025, antes de la primera publicación de la app, y llama a la app «Local AI Translate». También dice que el texto traducido se conserva solo en memoria y nunca se escribe en almacenamiento persistente, mientras que la versión 1.2 guarda transcripciones y grabaciones en el dispositivo; el texto de la política no describe esto ni las compras dentro de la app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app es de código cerrado, así que ninguna de estas afirmaciones puede comprobarse en el código, y PromptQuorum no ha auditado el tráfico de red. Quien traduzca material confidencial debería verificar el comportamiento en su propio dispositivo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas que traducen texto privado en el iPhone.** Un modelo local mantiene el texto fuera de un servicio en la nube, según el desarrollador.',
          '**Viajeros y quienes no tienen datos fiables.** La traducción funciona sin conexión una vez descargado un modelo.',
          '**Usuarios que quieren sustituir la hoja de traducción del sistema.** La app se puede fijar como app de traducción predeterminada.',
          '**Lectores que quieren comparar modelos.** Hy-MT2, TranslateGemma y Qwen se ofrecen uno junto a otro.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en el uso real.** PromptQuorum no ejecutó la app, así que no se evalúan la calidad de traducción, la velocidad, el consumo de batería ni las funciones de voz, y no se afirma ningún benchmark de modelos.',
          '**Precios y alcance gratuito.** El texto de la ficha no muestra precio para Lifetime ni Pro y no dice si algún modelo de IA funciona sin comprar.',
          '**Código fuente y licencia.** La app es de código cerrado; la organización de GitHub del desarrollador solo aloja los repositorios de su sitio web.',
          '**Flujos de datos.** Sin código que inspeccionar, las declaraciones de privacidad anteriores son la versión del desarrollador y de su política.',
          '**Historial.** Dos valoraciones en la App Store y un desarrollador individual, sin que las fuentes nombren una empresa ni un compromiso de soporte.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Plataformas': 'iOS, Mac',
            'Precio / licencia': 'Gratis / código cerrado',
            'Diferencia clave': 'Chat general con modelos abiertos en iPhone, iPad y Mac mediante MLX',
          },
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
            'App': '[TranslateBooksWithLLMs](/es/power-local-llm/translate-books-with-llms-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia clave': 'Traduce libros y documentos completos con un modelo local de Ollama o LLM en la nube',
          },
        ],
        note: 'Ninguna otra app de esta lista es un traductor dedicado para el teléfono, así que son las opciones analizadas más cercanas, no rivales directos. Los detalles de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usarla en un Mac con Apple Silicon?',
            a: 'La App Store incluye Mac con Apple M1 o posterior, pero marca la app como «Diseñada para iPhone. No verificada para macOS», así que el desarrollador no ha verificado la experiencia en Mac y PromptQuorum no la ha probado.',
          },
          {
            q: '¿Qué pasa con las transcripciones y grabaciones guardadas?',
            a: 'La versión 1.2 las guarda en el dispositivo, según sus notas de versión. Las fuentes no dicen cuánto tiempo se conservan ni si pueden borrarse desde la app.',
          },
          {
            q: '¿Qué modelo debería elegir?',
            a: 'La descripción indica elegir uno según la memoria del dispositivo y la calidad necesaria. No da cifras de memoria, tamaños de descarga ni comparaciones de calidad de los modelos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'On-Device AI Translator es una app de traducción para iPhone que ejecuta modelos Hy-MT2, TranslateGemma o Qwen en el dispositivo, cubre 20 idiomas y puede sustituir la hoja de traducción del sistema, con la traducción integrada de Apple como alternativa gratuita. Además se actualiza activamente, con una versión cinco días antes de comprobar este análisis. En contra: es de código cerrado, nueva, valorada por solo dos personas, ligada a compras cuyos precios las fuentes no muestran y descrita por una política de privacidad anterior a la app. Es adecuada para quienes quieren un modelo de traducción local en el iPhone y aceptan una app joven y cerrada; quien prefiera código auditable puede comparar [Private Mind](/es/power-local-llm/private-mind-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[On-Device AI Translator en la App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) — descripción, historial de versiones, requisitos, valoraciones, compras dentro de la app y etiqueta de privacidad, comprobados el 24 de octubre de 2026.',
          '[Página de soporte del desarrollador](https://on-device-ai-application.github.io/translator-site/) — la página de soporte del desarrollador en inglés y chino, comprobada el 24 de octubre de 2026.',
          '[Política de privacidad](https://on-device-ai-application.github.io/translator-site/privacy_en.html) — tratamiento de datos y uso de la red, vigente desde el 1 de enero de 2025, comprobada el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Locally AI](/es/power-local-llm/locally-ai-review) — una app gratuita para iPhone, iPad y Mac con modelos abiertos mediante MLX.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita y con licencia MIT para iPhone y Android.',
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
          '[Análisis de TranslateBooksWithLLMs](/es/power-local-llm/translate-books-with-llms-review) — una herramienta de escritorio para traducir libros completos con LLM locales o en la nube.',
          '[Las mejores apps de IA local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la selección más amplia para iPhone.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/on-device-ai-translator-review-hero-fr.webp',
    title: 'Avis On-Device AI Translator : traduction IA hors ligne sur iPhone',
    seoTitle: 'Avis On-Device AI Translator : appli hors ligne iPhone',
    intro:
      'On-Device AI Translator est une application de traduction pour iPhone, publiée par un développeur indépendant que l\'App Store nomme Changwen Li (昌文 李). Elle traduit avec la traduction intégrée d\'Apple ou avec des modèles de langage exécutés sur le téléphone, et a été publiée pour la première fois le 1er mars 2026. Cet avis reflète sa fiche App Store, la page d\'assistance du développeur et sa politique de confidentialité, telles que vérifiées le 24 octobre 2026.',
    metaDescription:
      'Avis On-Device AI Translator : appli iPhone fermée qui traduit avec Hy-MT2, TranslateGemma et Qwen sur l\'appareil. Formules payantes et confidentialité.',
    twitterDescription:
      'Avis On-Device AI Translator : application de traduction iPhone à code fermé, avec modèles téléchargeables sur l\'appareil, 20 langues et remplacement de la fenêtre de traduction du système. Ce que disent la fiche et la politique de confidentialité.',
    audience:
      'Utilisateurs d\'iPhone qui veulent faire traduire leurs textes par un modèle sur l\'appareil plutôt que par un service cloud, et qui doivent savoir ce que l\'application débloque gratuitement, ce qu\'elle envoie à l\'extérieur et ce que les sources ne confirment pas.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis On-Device AI Translator',
    targetKeywords: [
      'avis on-device ai translator',
      'traducteur ia hors ligne iphone',
      'application de traduction hors ligne iphone',
      'hy-mt2 traducteur iphone',
      'translategemma application iphone',
      'local ai translate app',
    ],
    current_models_mentioned: ['Hy-MT2', 'TranslateGemma', 'Qwen3', 'Qwen2.5'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple M1'],
    leadAnswerBlock:
      '**On-Device AI Translator (version 1.2) traduit sur l\'iPhone avec des modèles téléchargeables comme Hy-MT2, TranslateGemma et Qwen, et propose la traduction intégrée d\'Apple comme moteur gratuit.** Les modèles d\'IA sont derrière des achats intégrés dont les sources n\'indiquent pas les prix, et la politique de confidentialité est antérieure à l\'application ; lisez les sections sur les formules et la confidentialité avant de vous y fier.',
    quickAnswerTop: {
      fr: {
        question: 'On-Device AI Translator traduit-elle vraiment hors ligne ?',
        answer:
          'D\'après sa fiche et sa politique de confidentialité, oui une fois un modèle téléchargé : traduire avec un modèle d\'IA ne génère aucune requête réseau, et l\'application fonctionne en mode avion. Elle ne se connecte que pour télécharger des modèles et, en option, vérifier les mises à jour.',
        bullets: [
          'Téléchargement gratuit sur l\'[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075), sans compte.',
          'Peut être définie comme application de traduction par défaut : le texte sélectionné dans n\'importe quelle appli s\'y ouvre.',
          'La version 1.2 a ajouté des conversations vocales bidirectionnelles et l\'écoute continue.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que On-Device AI Translator ?', anchor: 'what-is-translator' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Offre gratuite et formules payantes', anchor: 'plans' },
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
            text: 'On-Device AI Translator est une application de traduction iPhone à code fermé qui exécute ses modèles sur l\'appareil et peut remplacer la fenêtre de traduction du système.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez, téléchargez une fois un modèle de traduction, puis sélectionnez du texte dans n\'importe quelle appli pour le traduire, sans que le texte parte vers un serveur, selon le développeur.',
          },
        ],
        items: [
          'Développeur : un développeur indépendant que l\'App Store nomme Changwen Li, sans entreprise derrière lui et sans code source public de l\'application.',
          'Maintenance : la dernière mise à jour App Store date de cinq jours avant cette vérification ; aucun avertissement de projet abandonné ne s\'applique.',
          'Portée : l\'App Store affiche 3.0 sur 5 pour deux notes, l\'application a donc peu d\'historique public.',
          'Plateformes : iPhone et iPad avec iOS 18.4 ou version ultérieure ; il n\'existe pas de version Android ni pour ordinateur.',
          'Langues : 20 langues de traduction, tandis que l\'interface de l\'application est indiquée en anglais et en chinois.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis repose sur la fiche App Store, la page d\'assistance du développeur et sa politique de confidentialité, vérifiées le 24 octobre 2026. PromptQuorum n\'a ni installé, ni testé, ni mesuré l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-translator',
        title: 'Qu\'est-ce que On-Device AI Translator ?',
        content: [
          '**On-Device AI Translator est une application iPhone qui traduit du texte avec des modèles exécutés en local, au lieu d\'appeler un service de traduction cloud.** D\'après sa fiche App Store, elle propose deux moteurs : la traduction système (System Translation), qui utilise la traduction intégrée d\'Apple avec des packs de langue que le système télécharge à la première utilisation, et des modèles d\'IA sur l\'appareil (Tencent Hy-MT2 en tailles 1.8B et 7B, Google TranslateGemma 4B, Qwen3 et Qwen2.5) que l\'application télécharge une fois, puis exécute hors ligne. La politique de confidentialité cite llama.cpp comme moteur d\'inférence.',
          'Le nom varie selon l\'endroit. Le titre sur l\'App Store américain est « On-Device AI Translator », la description l\'appelle « AI Translator », la page d\'assistance du développeur et la politique de confidentialité disent « Local AI Translate », et les boutiques d\'Autriche, d\'Allemagne, du Japon, de Corée et du Brésil la titrent toutes « 本地 AI 翻译 ». L\'identifiant App Store (6759458075) est le même dans toutes les boutiques vérifiées.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**L\'application s\'installe depuis l\'App Store ; il n\'existe ni version Android, ni version pour ordinateur, ni code source.** Le développeur n\'a pas de site produit en dehors de la page d\'assistance ci-dessous.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'iPhone / iPad',
            'Où la trouver': '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) (iOS 18.4 ou version ultérieure, 109 Mo)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[Page d\'assistance du développeur](https://on-device-ai-application.github.io/translator-site/) (anglais et chinois)',
          },
          {
            'Plateforme': 'Confidentialité',
            'Où la trouver': '[Politique de confidentialité](https://on-device-ai-application.github.io/translator-site/privacy_en.html) (en anglais, version chinoise liée ; en vigueur depuis le 1er janvier 2025)',
          },
          {
            'Plateforme': 'Signaler un bug',
            'Où la trouver': '[GitHub issues](https://github.com/On-Device-AI-Application/translator-site/issues) (dépôt du site web uniquement, sans code de l\'application)',
          },
        ],
        note: 'Version examinée : 1.2, publiée sur l\'App Store le 19 octobre 2026 (première publication le 1er mars 2026 ; la 1.1 est sortie le 18 septembre 2026).',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tous les éléments ci-dessous proviennent de la description App Store et des notes de version.**',
        ],
        items: [
          '**Application de traduction par défaut.** Une fois définie par défaut, sélectionner du texte dans n\'importe quelle appli et toucher Traduire ouvre cette application, qui traduit avec le modèle local choisi et peut remplacer le texte d\'origine sur place ou copier le résultat.',
          '**20 langues de traduction.** Chinois simplifié et traditionnel, anglais, japonais, coréen, français, allemand, espagnol, italien, portugais, russe, arabe, thaï, vietnamien, indonésien, turc, néerlandais, polonais, ukrainien et hindi ; les favoris marqués d\'une étoile restent en haut de chaque menu.',
          '**Conversations vocales.** La version 1.2 ajoute des conversations vocales bidirectionnelles et l\'écoute continue, ainsi qu\'un affichage partagé de l\'original et de la traduction.',
          '**Téléchargements de modèles gérés.** La version 1.1 a ajouté des téléchargements en arrière-plan avec reprise et contrôle d\'intégrité ; la 1.2 a amélioré les téléchargements hors ligne et le changement de langue.',
        ],
        note: 'L\'App Store indique que les langues d\'interface de l\'application sont l\'anglais et le chinois ; les 20 langues ci-dessus sont celles entre lesquelles elle traduit.',
      },
      plans: {
        id: 'plans',
        title: 'Offre gratuite et formules payantes',
        content: [
          '**La description présente la traduction système comme le moteur gratuit et décrit deux achats intégrés qui débloquent les modèles d\'IA sur l\'appareil.**',
        ],
        items: [
          '**Gratuit.** Traduction système sans téléchargement de modèle ; le système récupère un pack de langue la première fois qu\'une langue est utilisée.',
          '**Lifetime.** Un achat unique qui débloque Hy-MT2 1.8B et les modèles Qwen, y compris dans la fenêtre de traduction du système.',
          '**Pro.** Tout ce que contient Lifetime, plus les grands modèles TranslateGemma 4B et Hy-MT2 7B, facturés au mois ou à l\'année, avec 3 jours d\'essai gratuit.',
        ],
        note: 'Les personnes qui ont acheté l\'application quand elle était encore payante reçoivent automatiquement Lifetime, selon la description.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**La fiche et la politique de confidentialité indiquent toutes deux que le texte ne quitte pas l\'appareil lorsqu\'un modèle d\'IA le traduit.** L\'étiquette de confidentialité de l\'App Store indique « Aucune donnée collectée », ce qu\'Apple précise être déclaré par le développeur et non vérifié. La politique ajoute que l\'application n\'a pas de compte, n\'appelle aucun service d\'IA externe, ne collecte aucune statistique d\'usage et n\'intègre pas de SDK de rapports de plantage propre ; les rapports de plantage vont uniquement à Apple, et seulement si vous l\'acceptez.',
          'Ce qui utilise le réseau, selon la politique : le téléchargement de fichiers de modèles GGUF lors de la configuration ou du choix d\'un nouveau modèle, et une vérification facultative des mises à jour de l\'application ou des modèles. La politique ne précise pas d\'où les modèles sont téléchargés.',
          'Deux détails demandent de la prudence. La politique est en vigueur depuis le 1er janvier 2025, donc avant la première publication de l\'application, et elle appelle l\'application « Local AI Translate ». Elle dit aussi que le texte traduit est conservé en mémoire uniquement et jamais écrit dans un stockage persistant, alors que la version 1.2 enregistre des transcriptions et des enregistrements sur l\'appareil ; le texte de la politique ne décrit ni cela ni les achats intégrés.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'application est à code fermé : aucune de ces affirmations ne peut être vérifiée dans le code, et PromptQuorum n\'a pas audité le trafic réseau. Quiconque traduit des documents confidentiels devrait vérifier le comportement sur son propre appareil.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les personnes qui traduisent des textes privés sur iPhone.** Un modèle local garde le texte hors d\'un service cloud, selon le développeur.',
          '**Les voyageurs et ceux qui n\'ont pas de données fiables.** La traduction fonctionne hors ligne une fois un modèle téléchargé.',
          '**Les utilisateurs qui veulent remplacer la fenêtre de traduction du système.** L\'application peut être définie comme application de traduction par défaut.',
          '**Les lecteurs qui veulent comparer des modèles.** Hy-MT2, TranslateGemma et Qwen sont proposés côte à côte.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Qualité à l\'usage.** PromptQuorum n\'a pas exécuté l\'application ; la qualité de traduction, la vitesse, la consommation de batterie et les fonctions vocales ne sont donc pas évaluées, et aucun benchmark de modèle n\'est revendiqué.',
          '**Prix et périmètre gratuit.** Le texte de la fiche n\'affiche aucun prix pour Lifetime ou Pro et ne dit pas si un modèle d\'IA fonctionne sans achat.',
          '**Code source et licence.** L\'application est à code fermé ; l\'organisation GitHub du développeur n\'héberge que les dépôts de ses sites web.',
          '**Flux de données.** Sans code à inspecter, les déclarations de confidentialité ci-dessus sont le récit du développeur et de sa politique.',
          '**Historique.** Deux notes sur l\'App Store et un développeur indépendant, sans qu\'aucune entreprise ni engagement de support ne soit cité dans les sources.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Plateformes': 'iOS, Mac',
            'Prix / licence': 'Gratuite / code fermé',
            'Différence clé': 'Chat généraliste avec des modèles ouverts sur iPhone, iPad et Mac via MLX',
          },
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
            'Application': '[TranslateBooksWithLLMs](/fr/power-local-llm/translate-books-with-llms-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuite / AGPL-3.0',
            'Différence clé': 'Traduit des livres et documents entiers avec un modèle Ollama local ou des LLM cloud',
          },
        ],
        note: 'Aucune autre application de cette liste n\'est un traducteur dédié au téléphone ; ce sont les options examinées les plus proches, pas des rivales directes. Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je l\'utiliser sur un Mac Apple Silicon ?',
            a: 'L\'App Store mentionne les Mac avec puce Apple M1 ou ultérieure, mais indique pour l\'application « Designed for iPhone. Not verified for macOS » (« Conçue pour iPhone. Non vérifiée pour macOS ») ; le développeur n\'a donc pas vérifié l\'expérience sur Mac, et PromptQuorum ne l\'a pas essayée.',
          },
          {
            q: 'Que deviennent les transcriptions et enregistrements sauvegardés ?',
            a: 'La version 1.2 les enregistre sur l\'appareil, selon ses notes de version. Les sources ne disent pas combien de temps ils sont conservés ni s\'ils peuvent être supprimés dans l\'application.',
          },
          {
            q: 'Quel modèle choisir ?',
            a: 'La description conseille d\'en choisir un selon la mémoire de l\'appareil et la qualité voulue. Elle ne donne ni chiffres de mémoire, ni tailles de téléchargement, ni comparaisons de qualité pour les modèles.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'On-Device AI Translator est une application de traduction iPhone qui exécute des modèles Hy-MT2, TranslateGemma ou Qwen sur l\'appareil, couvre 20 langues et peut remplacer la fenêtre de traduction du système, avec la traduction intégrée d\'Apple comme solution gratuite de repli. Elle est aussi mise à jour activement, avec une version cinq jours avant la vérification de cet avis. En revanche, elle est à code fermé, récente, notée par seulement deux personnes, liée à des achats dont les sources n\'indiquent pas les prix, et décrite par une politique de confidentialité plus ancienne que l\'application. Elle convient aux lecteurs qui veulent un modèle de traduction local sur iPhone et acceptent une application jeune et fermée ; ceux qui veulent un code auditable peuvent comparer [Private Mind](/fr/power-local-llm/private-mind-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[On-Device AI Translator sur l\'App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) — description, historique des versions, configuration requise, notes, achats intégrés et étiquette de confidentialité, vérifiés le 24 octobre 2026.',
          '[Page d\'assistance du développeur](https://on-device-ai-application.github.io/translator-site/) — la page d\'assistance du développeur en anglais et en chinois, vérifiée le 24 octobre 2026.',
          '[Politique de confidentialité](https://on-device-ai-application.github.io/translator-site/privacy_en.html) — traitement des données et usage du réseau, en vigueur depuis le 1er janvier 2025, vérifiée le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Locally AI](/fr/power-local-llm/locally-ai-review) — une application gratuite pour iPhone, iPad et Mac qui exécute des modèles ouverts via MLX.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite, sous licence MIT, pour iPhone et Android.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source gratuit sur l\'appareil, pour iOS et Android.',
          '[Avis TranslateBooksWithLLMs](/fr/power-local-llm/translate-books-with-llms-review) — un outil de bureau pour traduire des livres entiers avec des LLM locaux ou cloud.',
          '[Les meilleures applications de LLM local pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif iPhone plus large.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/on-device-ai-translator-review-hero-ja.webp',
    title: 'On-Device AI Translatorレビュー：iPhoneで使うオフラインAI翻訳',
    seoTitle: 'On-Device AI Translatorレビュー：オフライン翻訳アプリ',
    intro:
      'On-Device AI Translatorは、App Storeで「Changwen Li（昌文 李）」と表示される個人開発者によるiPhone向け翻訳アプリです。Appleの標準翻訳か、端末上で動く言語モデルで翻訳し、最初のリリースは2026年3月1日でした。本レビューは、2026年10月24日に確認したApp Storeの掲載情報、開発者のサポートページ、プライバシーポリシーに基づいています。',
    metaDescription:
      'On-Device AI Translatorのレビュー。Hy-MT2、TranslateGemma、Qwenを端末内で動かして翻訳する、クローズドソースのiPhoneアプリ。料金プランとプライバシーを整理します。',
    twitterDescription:
      'On-Device AI Translatorのレビュー：端末内モデルをダウンロードして使う、クローズドソースのiPhone向け翻訳アプリ。20言語に対応し、システムの翻訳シートも置き換えられます。掲載情報とプライバシーポリシーの内容を整理します。',
    audience:
      'クラウドサービスではなく端末上のモデルで翻訳したいiPhoneユーザー。無料で使える範囲、外部に送信されるもの、情報源で確認できなかった点を知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On-Device AI Translator レビュー',
    targetKeywords: [
      'on-device ai translator レビュー',
      'オフライン ai 翻訳 iphone',
      'オフライン翻訳アプリ iphone',
      'hy-mt2 翻訳 iphone',
      'translategemma iphone アプリ',
      'local ai translate アプリ',
    ],
    current_models_mentioned: ['Hy-MT2', 'TranslateGemma', 'Qwen3', 'Qwen2.5'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple M1'],
    leadAnswerBlock:
      '**On-Device AI Translator（バージョン1.2）は、ダウンロード式のHy-MT2・TranslateGemma・QwenモデルでiPhone上で翻訳し、無料のエンジンとしてAppleの標準翻訳も使えます。** AIモデルはアプリ内課金の対象で、情報源には価格が載っていません。さらにプライバシーポリシーはアプリより古い日付です。頼る前に、プランとプライバシーの項目をお読みください。',
    quickAnswerTop: {
      ja: {
        question: 'On-Device AI Translatorは本当にオフラインで翻訳できますか？',
        answer:
          '掲載情報とプライバシーポリシーによれば、モデルをダウンロードしたあとはその通りです。AIモデルでの翻訳はネットワーク通信を行わず、機内モードでも動作します。オンラインになるのは、モデルのダウンロードと、任意のアップデート確認のときだけです。',
        bullets: [
          '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075)で無料ダウンロード。アカウントは不要です。',
          'デフォルトの翻訳アプリに設定でき、どのアプリで選択したテキストもこのアプリで開けます。',
          'バージョン1.2で、双方向の音声会話と連続リスニングが加わりました。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'On-Device AI Translatorとは？', anchor: 'what-is-translator' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: '無料範囲と有料プラン', anchor: 'plans' },
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
            text: 'On-Device AI Translatorは、モデルを端末上で動かし、システムの翻訳シートも置き換えられる、クローズドソースのiPhone向け翻訳アプリです。',
          },
          {
            type: 'plain-terms',
            text: 'インストールして翻訳モデルを一度ダウンロードすれば、あとはどのアプリでもテキストを選んで翻訳できます。開発者によれば、テキストがサーバーに送られることはありません。',
          },
        ],
        items: [
          '開発者：App Storeで「Changwen Li」と表示される個人開発者です。背後に企業はなく、アプリのソースコードも公開されていません。',
          'メンテナンス：App Storeでの最終更新は今回の確認の5日前です。放置プロジェクトの警告は該当しません。',
          '実績：App Storeの評価は2件で3.0（5段階）です。公開されている実績はまだ多くありません。',
          '対応環境：iOS 18.4以降のiPhoneとiPadです。Androidやデスクトップのビルドはありません。',
          '言語：翻訳は20言語に対応し、アプリ自体の表示言語は英語と中国語と記載されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月24日に確認したApp Storeの掲載情報、開発者のサポートページ、プライバシーポリシーに基づいています。PromptQuorumはこのアプリをインストールしておらず、テストやベンチマークも行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-translator',
        title: 'On-Device AI Translatorとは？',
        content: [
          '**On-Device AI Translatorは、クラウドの翻訳サービスを呼び出さず、端末上で動くモデルでテキストを翻訳するiPhoneアプリです。** App Storeの掲載情報によると、エンジンは2つあります。1つは「システム翻訳（System Translation）」で、Appleの標準翻訳を使い、言語パックは初回利用時にOSがダウンロードします。もう1つは端末内のAIモデル（Tencent Hy-MT2の1.8Bと7B、Google TranslateGemma 4B、Qwen3、Qwen2.5）で、アプリが一度ダウンロードすると、その後はオフラインで動きます。プライバシーポリシーには、推論エンジンとしてllama.cppが挙げられています。',
          '名称は場所によって異なります。米国のApp Storeでは「On-Device AI Translator」、説明文では「AI Translator」、開発者のサポートページとプライバシーポリシーでは「Local AI Translate」、オーストリア・ドイツ・日本・韓国・ブラジルのストアではいずれも「本地 AI 翻译」です。App StoreのID（6759458075）は、確認したすべてのストアで共通でした。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**アプリはApp Storeからインストールします。Android版、デスクトップ版、ソースコードは提供されていません。** 開発者には、下記のサポートページ以外に製品サイトはありません。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'iPhone / iPad',
            '入手先': '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075)（iOS 18.4以降、109 MB）',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[開発者のサポートページ](https://on-device-ai-application.github.io/translator-site/)（英語・中国語）',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[プライバシーポリシー](https://on-device-ai-application.github.io/translator-site/privacy_en.html)（英語、中国語版へのリンクあり。2025年1月1日施行）',
          },
          {
            'プラットフォーム': '不具合の報告',
            '入手先': '[GitHub issues](https://github.com/On-Device-AI-Application/translator-site/issues)（ウェブサイトのリポジトリのみ、アプリのソースなし）',
          },
        ],
        note: '確認したバージョン：1.2。2026年10月19日にApp Storeで公開されました（初回リリースは2026年3月1日、1.1は2026年9月18日）。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下はすべて、App Storeの説明文とリリースノートに記載された内容です。**',
        ],
        items: [
          '**デフォルトの翻訳アプリ。** デフォルトに設定すると、どのアプリでもテキストを選んで「翻訳」をタップするだけでこのアプリが開きます。選んだローカルモデルで翻訳し、元のテキストをその場で置き換えることも、結果をコピーすることもできます。',
          '**20の翻訳言語。** 簡体字・繁体字中国語、英語、日本語、韓国語、フランス語、ドイツ語、スペイン語、イタリア語、ポルトガル語、ロシア語、アラビア語、タイ語、ベトナム語、インドネシア語、トルコ語、オランダ語、ポーランド語、ウクライナ語、ヒンディー語。星を付けたお気に入りは、各メニューの先頭に表示されます。',
          '**音声会話。** バージョン1.2で、双方向の音声会話と連続リスニング、原文と訳文の分割表示が加わりました。',
          '**モデルのダウンロード管理。** バージョン1.1で、再開と整合性チェックに対応したバックグラウンドダウンロードが追加されました。1.2ではオフラインでのダウンロードと言語切り替えが改善されています。',
        ],
        note: 'App Storeには、アプリ自体の表示言語は英語と中国語と記載されています。上の20言語は翻訳の対象言語です。',
      },
      plans: {
        id: 'plans',
        title: '無料範囲と有料プラン',
        content: [
          '**説明文では、システム翻訳が無料のエンジンとされ、端末内AIモデルを解放する2つのアプリ内課金が説明されています。**',
        ],
        items: [
          '**無料。** モデルのダウンロードが不要なシステム翻訳。言語パックは、その言語を初めて使うときにOSが取得します。',
          '**Lifetime。** Hy-MT2 1.8BとQwenモデルを解放する買い切りです。システムの翻訳シート内でも使えます。',
          '**Pro。** Lifetimeのすべてに加え、大型モデルのTranslateGemma 4BとHy-MT2 7Bが使えます。月額または年額で、3日間の無料トライアルがあります。',
        ],
        note: '説明文によれば、アプリが有料ダウンロードだった時期に購入した人は、自動的にLifetimeが付与されます。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**掲載情報とプライバシーポリシーはどちらも、AIモデルが翻訳するときテキストは端末の外に出ないとしています。** App Storeのプライバシーラベルは「データの収集なし」ですが、これは開発者の申告であり、Appleによる検証は行われていないと注記されています。ポリシーはさらに、アカウントがなく、外部のAIサービスを呼び出さず、利用状況の分析も収集せず、独自のクラッシュレポートSDKもないと述べています。クラッシュレポートはAppleにのみ送られ、オプトインした場合に限られます。',
          'ポリシーによれば、ネットワークを使うのは、セットアップ時や新しいモデルを選ぶときのGGUFモデルファイルのダウンロードと、任意のアプリ／モデルのアップデート確認です。モデルのダウンロード元はポリシーに書かれていません。',
          '注意すべき点が2つあります。ポリシーの施行日は2025年1月1日で、アプリの初回リリースより前であり、アプリを「Local AI Translate」と呼んでいます。また、翻訳テキストはメモリ上にのみ保持され永続ストレージには書き込まれないとしていますが、バージョン1.2は文字起こしと録音を端末に保存します。ポリシー本文には、この点もアプリ内課金も記載されていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このアプリはクローズドソースのため、上記の記述をコードで確認することはできず、PromptQuorumはネットワーク通信の監査も行っていません。機密性の高い内容を翻訳する場合は、ご自身の端末で動作を確認してください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**iPhoneで私的な文章を翻訳する人。** 開発者によれば、ローカルモデルならテキストがクラウドサービスに渡りません。',
          '**旅行者や、通信環境が安定しない人。** モデルをダウンロードしたあとは、オフラインで翻訳できます。',
          '**システムの翻訳シートを置き換えたい人。** デフォルトの翻訳アプリに設定できます。',
          '**モデルを比べたい人。** Hy-MT2、TranslateGemma、Qwenが並んで提供されています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質。** PromptQuorumはアプリを動かしていないため、翻訳品質、速度、電池消費、音声機能は評価しておらず、モデルのベンチマークも主張しません。',
          '**価格と無料の範囲。** 掲載情報のテキストにはLifetimeとProの価格がなく、購入なしで使えるAIモデルがあるかどうかも書かれていません。',
          '**ソースコードとライセンス。** アプリはクローズドソースで、開発者のGitHub組織にはウェブサイト用のリポジトリしかありません。',
          '**データの流れ。** 確認できるコードがないため、上記のプライバシーに関する記述は、開発者とそのポリシーの説明にとどまります。',
          '**実績。** App Storeの評価は2件で、開発者は個人です。企業やサポートの約束は情報源に記載がありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            'プラットフォーム': 'iOS、Mac',
            '価格 / ライセンス': '無料 / クローズドソース',
            '主な違い': 'MLXでオープンモデルを動かす、iPhone・iPad・Mac向けの汎用チャット',
          },
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
            'アプリ': '[TranslateBooksWithLLMs](/ja/power-local-llm/translate-books-with-llms-review)',
            'プラットフォーム': 'Windows、macOS、Linux',
            '価格 / ライセンス': '無料 / AGPL-3.0',
            '主な違い': 'ローカルのOllamaモデルやクラウドLLMで、書籍や文書を丸ごと翻訳',
          },
        ],
        note: 'この一覧に、スマートフォン向けの専用翻訳アプリは他にありません。ここに挙げたのは、レビュー済みで最も近い選択肢であり、同じ条件で比べられる競合ではありません。競合の情報は変わりやすいため、各アプリの最新の価格・ライセンス・対応環境は、それぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Apple siliconのMacで使えますか？',
            a: 'App StoreにはApple M1以降のMacが表示されていますが、「iPhone向けに設計。macOSでは未検証」と記されています。開発者がMacでの動作を検証していないということで、PromptQuorumも試していません。',
          },
          {
            q: '保存された文字起こしや録音はどうなりますか？',
            a: 'リリースノートによれば、バージョン1.2は端末内に保存します。保存期間や、アプリ内で削除できるかどうかは、情報源に記載がありません。',
          },
          {
            q: 'どのモデルを選べばよいですか？',
            a: '説明文では、端末のメモリと必要な品質に合わせて選ぶとされています。モデルごとのメモリ量、ダウンロードサイズ、品質の比較は示されていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'On-Device AI Translatorは、Hy-MT2、TranslateGemma、Qwenのモデルを端末上で動かし、20言語に対応し、システムの翻訳シートも置き換えられるiPhone向け翻訳アプリです。無料の代替手段として、Appleの標準翻訳も使えます。また、このレビューの確認の5日前にリリースがあり、活発に更新されています。一方で、クローズドソースで新しく、評価は2件のみ、価格が情報源に示されていない課金に紐づき、プライバシーポリシーはアプリより古い日付です。iPhoneでローカルの翻訳モデルを使いたく、新しいクローズドなアプリを受け入れられる方に向いています。コードを確認できることを重視するなら、[Private Mind](/ja/power-local-llm/private-mind-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比べてみてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのOn-Device AI Translator](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) — 説明文、バージョン履歴、動作環境、評価、アプリ内課金、プライバシーラベル。2026年10月24日確認。',
          '[開発者のサポートページ](https://on-device-ai-application.github.io/translator-site/) — 英語・中国語の開発者サポートページ。2026年10月24日確認。',
          '[プライバシーポリシー](https://on-device-ai-application.github.io/translator-site/privacy_en.html) — データの扱いとネットワーク利用。2025年1月1日施行、2026年10月24日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — MLXでオープンモデルを動かす、iPhone・iPad・Mac向けの無料アプリ。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhone・Android向けの無料でMITライセンスのオフラインチャットアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOS・Android向けの無料・オープンソースの端末内チャットクライアント。',
          '[TranslateBooksWithLLMsレビュー](/ja/power-local-llm/translate-books-with-llms-review) — ローカルまたはクラウドのLLMで書籍を丸ごと翻訳するデスクトップツール。',
          '[2026年版 iPhone向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより幅広いまとめ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/on-device-ai-translator-review-hero-pt.webp',
    title: 'Análise do On-Device AI Translator: tradução com IA offline no iPhone',
    seoTitle: 'Análise do On-Device AI Translator: app offline iPhone',
    intro:
      'O On-Device AI Translator é um app de tradução para iPhone de um desenvolvedor individual que aparece na App Store como Changwen Li (昌文 李). Ele traduz com a tradução integrada da Apple ou com modelos de linguagem que rodam no celular, e foi lançado pela primeira vez em 1º de março de 2026. Esta análise reflete a página dele na App Store, a página de suporte do desenvolvedor e a política de privacidade, conforme verificado em 24 de outubro de 2026.',
    metaDescription:
      'Análise do On-Device AI Translator: app de iPhone de código fechado que traduz com Hy-MT2, TranslateGemma e Qwen no aparelho. Planos e privacidade.',
    twitterDescription:
      'Análise do On-Device AI Translator: app de tradução para iPhone de código fechado, com modelos baixáveis no aparelho, 20 idiomas e substituto da janela de tradução do sistema. O que a página da loja e a política de privacidade dizem.',
    audience:
      'Usuários de iPhone que querem que um modelo no aparelho traduza seus textos em vez de um serviço na nuvem, e que precisam saber o que o app libera de graça, o que ele envia para fora e o que as fontes não confirmam.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do On-Device AI Translator',
    targetKeywords: [
      'on-device ai translator análise',
      'tradutor ia offline iphone',
      'app de tradução offline iphone',
      'hy-mt2 tradutor iphone',
      'translategemma app iphone',
      'local ai translate app',
    ],
    current_models_mentioned: ['Hy-MT2', 'TranslateGemma', 'Qwen3', 'Qwen2.5'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple M1'],
    leadAnswerBlock:
      '**O On-Device AI Translator (versão 1.2) traduz no iPhone com modelos baixáveis como Hy-MT2, TranslateGemma e Qwen, e oferece a tradução integrada da Apple como mecanismo gratuito.** Os modelos de IA ficam atrás de compras dentro do app cujos preços as fontes não mostram, e a política de privacidade é anterior ao app; leia as seções sobre planos e privacidade antes de confiar nele.',
    quickAnswerTop: {
      pt: {
        question: 'O On-Device AI Translator traduz mesmo offline?',
        answer:
          'Segundo a página da loja e a política de privacidade, sim, depois que um modelo é baixado: traduzir com um modelo de IA não faz nenhuma requisição de rede, e o app funciona em modo avião. Ele só fica online para baixar modelos e, opcionalmente, verificar atualizações.',
        bullets: [
          'Download gratuito na [App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075), sem conta.',
          'Pode ser definido como app de tradução padrão, e o texto selecionado em qualquer app abre nele.',
          'A versão 1.2 adicionou conversas por voz bidirecionais e escuta contínua.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o On-Device AI Translator?', anchor: 'what-is-translator' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Nível gratuito e planos pagos', anchor: 'plans' },
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
            text: 'O On-Device AI Translator é um app de tradução para iPhone de código fechado que executa seus modelos no aparelho e pode substituir a janela de tradução do sistema.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app, baixa um modelo de tradução uma única vez e, daí em diante, seleciona texto em qualquer app para traduzi-lo sem que o texto vá para um servidor, segundo o desenvolvedor.',
          },
        ],
        items: [
          'Desenvolvedor: um desenvolvedor individual que aparece na App Store como Changwen Li, sem empresa por trás e sem código-fonte público do app.',
          'Manutenção: a última atualização na App Store saiu cinco dias antes desta verificação, então nenhum aviso de projeto abandonado se aplica.',
          'Alcance: a App Store mostra 3.0 de 5 com duas avaliações, então o app tem pouco histórico público.',
          'Plataformas: iPhone e iPad com iOS 18.4 ou posterior; não há versão para Android nem para computador.',
          'Idiomas: 20 idiomas de tradução, enquanto a interface do próprio app é listada em inglês e chinês.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página da App Store, na página de suporte do desenvolvedor e na política de privacidade, verificadas em 24 de outubro de 2026. A PromptQuorum não instalou, testou nem mediu o app.',
          },
        ],
      },
      overview: {
        id: 'what-is-translator',
        title: 'O que é o On-Device AI Translator?',
        content: [
          '**O On-Device AI Translator é um app para iPhone que traduz texto com modelos executados localmente, em vez de chamar um serviço de tradução na nuvem.** Segundo a página da App Store, ele tem dois mecanismos: a tradução do sistema (System Translation), que usa a tradução integrada da Apple com pacotes de idioma que o sistema baixa no primeiro uso, e modelos de IA no aparelho (Tencent Hy-MT2 nos tamanhos 1.8B e 7B, Google TranslateGemma 4B, Qwen3 e Qwen2.5) que o app baixa uma vez e depois executa offline. A política de privacidade cita o llama.cpp como mecanismo de inferência.',
          'O nome varia conforme o lugar. O título na App Store dos EUA é "On-Device AI Translator", a descrição o chama de "AI Translator", a página de suporte do desenvolvedor e a política de privacidade dizem "Local AI Translate", e as lojas da Áustria, Alemanha, Japão, Coreia e Brasil o intitulam "本地 AI 翻译". O ID na App Store (6759458075) é o mesmo em todas as lojas verificadas.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O app é instalado pela App Store; não há versão para Android, versão para computador nem código-fonte.** O desenvolvedor não tem site de produto além da página de suporte abaixo.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Onde obter': '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) (iOS 18.4 ou posterior, 109 MB)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[Página de suporte do desenvolvedor](https://on-device-ai-application.github.io/translator-site/) (inglês e chinês)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Política de privacidade](https://on-device-ai-application.github.io/translator-site/privacy_en.html) (em inglês, com link para a versão em chinês; em vigor desde 1º de janeiro de 2025)',
          },
          {
            'Plataforma': 'Relatos de bugs',
            'Onde obter': '[GitHub issues](https://github.com/On-Device-AI-Application/translator-site/issues) (só o repositório do site, sem código do app)',
          },
        ],
        note: 'Versão analisada: 1.2, lançada na App Store em 19 de outubro de 2026 (primeiro lançamento em 1º de março de 2026; a 1.1 veio em 18 de setembro de 2026).',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm da descrição da App Store e das notas de versão.**',
        ],
        items: [
          '**App de tradução padrão.** Depois de defini-lo como padrão, selecionar texto em qualquer app e tocar em Traduzir abre este app, que traduz com o modelo local escolhido e pode substituir o texto original no lugar ou copiar o resultado.',
          '**20 idiomas de tradução.** Chinês simplificado e tradicional, inglês, japonês, coreano, francês, alemão, espanhol, italiano, português, russo, árabe, tailandês, vietnamita, indonésio, turco, holandês, polonês, ucraniano e híndi; os favoritos marcados com estrela ficam no topo de todos os menus.',
          '**Conversas por voz.** A versão 1.2 adiciona conversas por voz bidirecionais e escuta contínua, além de uma visualização dividida do original e da tradução.',
          '**Downloads de modelos gerenciados.** A versão 1.1 trouxe downloads em segundo plano com retomada e verificação de integridade; a 1.2 melhorou os downloads offline e a troca de idioma.',
        ],
        note: 'A App Store lista os idiomas de interface do próprio app como inglês e chinês; os 20 idiomas acima são aqueles entre os quais ele traduz.',
      },
      plans: {
        id: 'plans',
        title: 'Nível gratuito e planos pagos',
        content: [
          '**A descrição apresenta a tradução do sistema como o mecanismo gratuito e descreve duas compras dentro do app que liberam os modelos de IA no aparelho.**',
        ],
        items: [
          '**Grátis.** Tradução do sistema sem download de modelo; o sistema busca um pacote de idioma na primeira vez que um idioma é usado.',
          '**Lifetime.** Uma compra única que libera o Hy-MT2 1.8B e os modelos Qwen, inclusive na janela de tradução do sistema.',
          '**Pro.** Tudo do Lifetime mais os modelos grandes, TranslateGemma 4B e Hy-MT2 7B, cobrados por mês ou por ano, com 3 dias de teste gratuito.',
        ],
        note: 'Quem comprou o app quando ele ainda era um download pago recebe o Lifetime automaticamente, segundo a descrição.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**A página da loja e a política de privacidade dizem as duas que o texto não sai do aparelho quando um modelo de IA o traduz.** O rótulo de privacidade da App Store diz "Dados não coletados", o que a Apple observa ser declarado pelo desenvolvedor e não verificado. A política acrescenta que o app não tem conta, não chama serviços de IA externos, não coleta análises de uso e não tem um SDK próprio de relatórios de falhas; relatórios de falhas vão só para a Apple, e só se você concordar.',
          'O que usa a rede, segundo a política: baixar arquivos de modelo GGUF na configuração ou ao escolher um modelo novo, e uma verificação opcional de atualizações do app ou dos modelos. A política não diz de onde os modelos são baixados.',
          'Dois detalhes pedem cuidado. A política está em vigor desde 1º de janeiro de 2025, antes do primeiro lançamento do app, e chama o app de "Local AI Translate". Ela também diz que o texto traduzido fica apenas na memória e nunca é gravado em armazenamento persistente, enquanto a versão 1.2 salva transcrições e gravações no aparelho; o texto da política não descreve isso nem as compras dentro do app.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app é de código fechado, então nenhuma dessas afirmações pode ser verificada no código, e a PromptQuorum não auditou o tráfego de rede. Quem traduz material confidencial deve verificar o comportamento no próprio aparelho.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Pessoas que traduzem textos privados no iPhone.** Um modelo local mantém o texto fora de um serviço na nuvem, segundo o desenvolvedor.',
          '**Viajantes e quem não tem dados confiáveis.** A tradução funciona offline depois que um modelo é baixado.',
          '**Usuários que querem substituir a janela de tradução do sistema.** O app pode ser definido como app de tradução padrão.',
          '**Leitores que querem comparar modelos.** Hy-MT2, TranslateGemma e Qwen são oferecidos lado a lado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade no uso real.** A PromptQuorum não executou o app, então qualidade de tradução, velocidade, consumo de bateria e recursos de voz não são avaliados, e nenhum benchmark de modelo é afirmado.',
          '**Preços e escopo gratuito.** O texto da página da loja não mostra preço para Lifetime ou Pro e não diz se algum modelo de IA funciona sem compra.',
          '**Código-fonte e licença.** O app é de código fechado; a organização do desenvolvedor no GitHub só hospeda os repositórios de seus sites.',
          '**Fluxos de dados.** Sem código para inspecionar, as declarações de privacidade acima são o relato do desenvolvedor e de sua política.',
          '**Histórico.** Duas avaliações na App Store e um desenvolvedor individual, sem que as fontes nomeiem uma empresa ou um compromisso de suporte.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Plataformas': 'iOS, Mac',
            'Preço / licença': 'Grátis / código fechado',
            'Diferença principal': 'Chat geral com modelos abertos no iPhone, iPad e Mac via MLX',
          },
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
            'App': '[TranslateBooksWithLLMs](/pt/power-local-llm/translate-books-with-llms-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Diferença principal': 'Traduz livros e documentos inteiros com um modelo Ollama local ou LLMs na nuvem',
          },
        ],
        note: 'Nenhum outro app desta lista é um tradutor dedicado para celular; são as opções analisadas mais próximas, não rivais diretos. Os detalhes da concorrência mudam com frequência; confirme preço, licença e plataformas atuais de cada app na página dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usá-lo em um Mac com Apple Silicon?',
            a: 'A App Store lista Macs com Apple M1 ou posterior, mas marca o app como "Designed for iPhone. Not verified for macOS" ("Projetado para iPhone. Não verificado para macOS"); o desenvolvedor não verificou a experiência no Mac, e a PromptQuorum não a testou.',
          },
          {
            q: 'O que acontece com transcrições e gravações salvas?',
            a: 'A versão 1.2 as salva no aparelho, segundo suas notas de versão. As fontes não dizem por quanto tempo são mantidas nem se podem ser apagadas dentro do app.',
          },
          {
            q: 'Qual modelo devo escolher?',
            a: 'A descrição manda escolher um conforme a memória do aparelho e a qualidade necessária. Ela não dá números de memória, tamanhos de download nem comparações de qualidade dos modelos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O On-Device AI Translator é um app de tradução para iPhone que executa modelos Hy-MT2, TranslateGemma ou Qwen no aparelho, cobre 20 idiomas e pode substituir a janela de tradução do sistema, com a tradução integrada da Apple como alternativa gratuita. Ele também é atualizado ativamente, com uma versão cinco dias antes da verificação desta análise. Em contrapartida, é de código fechado, novo, avaliado por apenas duas pessoas, preso a compras cujos preços as fontes não mostram e descrito por uma política de privacidade mais antiga que o app. Serve para leitores que querem um modelo de tradução local no iPhone e aceitam um app jovem e fechado; quem quer código auditável pode comparar o [Private Mind](/pt/power-local-llm/private-mind-review) ou o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[On-Device AI Translator na App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) — descrição, histórico de versões, requisitos, avaliações, compras dentro do app e rótulo de privacidade, verificados em 24 de outubro de 2026.',
          '[Página de suporte do desenvolvedor](https://on-device-ai-application.github.io/translator-site/) — a página de suporte do desenvolvedor em inglês e chinês, verificada em 24 de outubro de 2026.',
          '[Política de privacidade](https://on-device-ai-application.github.io/translator-site/privacy_en.html) — tratamento de dados e uso da rede, em vigor desde 1º de janeiro de 2025, verificada em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — um app gratuito para iPhone, iPad e Mac com modelos abertos via MLX.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no aparelho, para iOS e Android.',
          '[Análise do TranslateBooksWithLLMs](/pt/power-local-llm/translate-books-with-llms-review) — uma ferramenta de desktop para traduzir livros inteiros com LLMs locais ou na nuvem.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/on-device-ai-translator-review-hero-ar.webp',
    title: 'مراجعة On-Device AI Translator: ترجمة بالذكاء الاصطناعي دون اتصال على iPhone',
    seoTitle: 'مراجعة On-Device AI Translator: تطبيق ترجمة دون اتصال',
    intro:
      'On-Device AI Translator تطبيق ترجمة لـ iPhone من مطوّر فردي يظهر في App Store باسم Changwen Li (昌文 李). يترجم بالترجمة المدمجة من Apple أو بنماذج لغوية تعمل على الهاتف، وصدر لأول مرة في 1 مارس 2026. تعكس هذه المراجعة صفحة التطبيق في App Store وصفحة الدعم لدى المطوّر وسياسة الخصوصية كما جرى التحقق منها في 24 أكتوبر 2026.',
    metaDescription:
      'مراجعة On-Device AI Translator: تطبيق iPhone مغلق المصدر يترجم بنماذج Hy-MT2 وTranslateGemma وQwen على الجهاز. الخطط المدفوعة وسياسة الخصوصية.',
    twitterDescription:
      'مراجعة On-Device AI Translator: تطبيق ترجمة لـ iPhone مغلق المصدر بنماذج قابلة للتنزيل على الجهاز و20 لغة، ويمكنه استبدال لوحة الترجمة في النظام. ما تقوله صفحة المتجر وسياسة الخصوصية.',
    audience:
      'مستخدمو iPhone الذين يريدون أن يترجم نموذج على الجهاز نصوصهم بدلاً من خدمة سحابية، ويحتاجون إلى معرفة ما يتيحه التطبيق مجاناً وما يرسله إلى الخارج وما لا تؤكده المصادر.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة On-Device AI Translator',
    targetKeywords: [
      'مراجعة on-device ai translator',
      'مترجم ذكاء اصطناعي دون اتصال iphone',
      'تطبيق ترجمة دون اتصال iphone',
      'hy-mt2 مترجم iphone',
      'translategemma تطبيق iphone',
      'local ai translate',
    ],
    current_models_mentioned: ['Hy-MT2', 'TranslateGemma', 'Qwen3', 'Qwen2.5'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple M1'],
    leadAnswerBlock:
      '**يترجم On-Device AI Translator (الإصدار 1.2) على iPhone بنماذج قابلة للتنزيل مثل Hy-MT2 وTranslateGemma وQwen، ويقدّم الترجمة المدمجة من Apple محركاً مجانياً.** نماذج الذكاء الاصطناعي مرتبطة بمشتريات داخل التطبيق لا تُظهر المصادر أسعارها، وسياسة الخصوصية أقدم من التطبيق نفسه؛ فاقرأ قسمي الخطط والخصوصية قبل الاعتماد عليه.',
    quickAnswerTop: {
      ar: {
        question: 'هل يترجم On-Device AI Translator دون اتصال فعلاً؟',
        answer:
          'بحسب صفحة المتجر وسياسة الخصوصية، نعم بعد تنزيل نموذج: الترجمة بنموذج ذكاء اصطناعي لا تُجري أي طلبات شبكة، ويعمل التطبيق في وضع الطيران. ولا يتصل بالإنترنت إلا لتنزيل النماذج ولفحص اختياري للتحديثات.',
        bullets: [
          'تنزيل مجاني من [App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) دون حساب.',
          'يمكن تعيينه تطبيق الترجمة الافتراضي، فيُفتح فيه النص المحدد في أي تطبيق.',
          'أضاف الإصدار 1.2 محادثات صوتية ثنائية الاتجاه واستماعاً متواصلاً.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو On-Device AI Translator؟', anchor: 'what-is-translator' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'الجزء المجاني والخطط المدفوعة', anchor: 'plans' },
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
            text: 'On-Device AI Translator تطبيق ترجمة مغلق المصدر لـ iPhone يشغّل نماذجه على الجهاز ويمكنه استبدال لوحة الترجمة في النظام.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّت التطبيق وتنزّل نموذج ترجمة مرة واحدة، ثم تحدد النص في أي تطبيق لترجمته دون أن يُرسل النص إلى خادم، بحسب المطوّر.',
          },
        ],
        items: [
          'المطوّر: مطوّر فردي يظهر في App Store باسم Changwen Li، دون شركة وراءه ودون شيفرة مصدرية عامة للتطبيق.',
          'الصيانة: صدر آخر تحديث في App Store قبل خمسة أيام من هذا التحقق، فلا ينطبق تحذير المشروع المتوقف.',
          'الانتشار: يعرض App Store تقييم 3.0 من 5 من تقييمين فقط، فسجل التطبيق العلني محدود.',
          'المنصات: iPhone وiPad بنظام iOS 18.4 أو أحدث؛ ولا توجد نسخة لأندرويد أو لسطح المكتب.',
          'اللغات: 20 لغة ترجمة، بينما تُدرج واجهة التطبيق نفسه بالإنجليزية والصينية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة App Store وصفحة الدعم لدى المطوّر وسياسة الخصوصية، وقد جرى التحقق منها في 24 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-translator',
        title: 'ما هو On-Device AI Translator؟',
        content: [
          '**On-Device AI Translator تطبيق iPhone يترجم النصوص بنماذج تعمل محلياً بدلاً من استدعاء خدمة ترجمة سحابية.** بحسب صفحته في App Store، له محركان: ترجمة النظام (System Translation) التي تستخدم الترجمة المدمجة من Apple مع حزم لغات ينزّلها النظام عند أول استخدام، ونماذج ذكاء اصطناعي على الجهاز (Tencent Hy-MT2 بحجمي 1.8B و7B، وGoogle TranslateGemma 4B، وQwen3 وQwen2.5) ينزّلها التطبيق مرة واحدة ثم يشغّلها دون اتصال. وتذكر سياسة الخصوصية أن محرك الاستدلال هو llama.cpp.',
          'يختلف الاسم باختلاف المكان. العنوان في App Store الأمريكي هو «On-Device AI Translator»، ويسمّيه الوصف «AI Translator»، وتقول صفحة دعم المطوّر وسياسة الخصوصية «Local AI Translate»، وتعنونه متاجر النمسا وألمانيا واليابان وكوريا والبرازيل جميعاً «本地 AI 翻译». ومعرّف التطبيق في App Store (6759458075) واحد في كل المتاجر التي جرى فحصها.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت التطبيق من App Store؛ ولا تتوفر نسخة لأندرويد أو لسطح المكتب ولا شيفرة مصدرية.** وليس للمطوّر موقع منتج سوى صفحة الدعم أدناه.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'iPhone / iPad',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) (iOS 18.4 أو أحدث، 109 MB)',
          },
          {
            'المنصة': 'الموقع',
            'مكان الحصول عليه': '[صفحة دعم المطوّر](https://on-device-ai-application.github.io/translator-site/) (الإنجليزية والصينية)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية](https://on-device-ai-application.github.io/translator-site/privacy_en.html) (بالإنجليزية، مع رابط للنسخة الصينية؛ سارية منذ 1 يناير 2025)',
          },
          {
            'المنصة': 'الإبلاغ عن الأخطاء',
            'مكان الحصول عليه': '[مشكلات GitHub](https://github.com/On-Device-AI-Application/translator-site/issues) (مستودع الموقع فقط، دون شيفرة التطبيق)',
          },
        ],
        note: 'الإصدار الذي جرت مراجعته: 1.2، صدر في App Store في 19 أكتوبر 2026 (الإصدار الأول في 1 مارس 2026، وتلاه 1.1 في 18 سبتمبر 2026).',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل ما يلي مأخوذ من وصف App Store وملاحظات الإصدار.**',
        ],
        items: [
          '**تطبيق الترجمة الافتراضي.** بعد تعيينه افتراضياً، يؤدي تحديد نص في أي تطبيق والضغط على «ترجمة» إلى فتح هذا التطبيق، فيترجم بالنموذج المحلي المختار ويمكنه استبدال النص الأصلي في مكانه أو نسخ النتيجة.',
          '**20 لغة ترجمة.** الصينية المبسطة والتقليدية، والإنجليزية، واليابانية، والكورية، والفرنسية، والألمانية، والإسبانية، والإيطالية، والبرتغالية، والروسية، والعربية، والتايلاندية، والفيتنامية، والإندونيسية، والتركية، والهولندية، والبولندية، والأوكرانية، والهندية؛ وتبقى اللغات المفضلة المعلَّمة بنجمة في أعلى كل قائمة.',
          '**المحادثات الصوتية.** يضيف الإصدار 1.2 محادثات صوتية ثنائية الاتجاه واستماعاً متواصلاً، إضافة إلى عرض مقسّم للنص الأصلي والترجمة.',
          '**إدارة تنزيل النماذج.** أضاف الإصدار 1.1 التنزيل في الخلفية مع الاستئناف والتحقق من السلامة؛ وحسّن 1.2 التنزيل دون اتصال وتبديل اللغات.',
        ],
        note: 'يُدرج App Store لغات واجهة التطبيق نفسه بالإنجليزية والصينية؛ أما اللغات العشرون أعلاه فهي التي يترجم بينها.',
      },
      plans: {
        id: 'plans',
        title: 'الجزء المجاني والخطط المدفوعة',
        content: [
          '**يسمّي الوصف ترجمة النظام محركاً مجانياً، ويصف عمليتي شراء داخل التطبيق تفتحان نماذج الذكاء الاصطناعي على الجهاز.**',
        ],
        items: [
          '**مجاني.** ترجمة النظام دون تنزيل نموذج؛ ويجلب النظام حزمة اللغة عند أول استخدام للغة.',
          '**Lifetime.** شراء لمرة واحدة يفتح Hy-MT2 1.8B ونماذج Qwen، بما في ذلك داخل لوحة الترجمة في النظام.',
          '**Pro.** كل ما في Lifetime إضافة إلى النماذج الكبيرة TranslateGemma 4B وHy-MT2 7B، بفوترة شهرية أو سنوية مع تجربة مجانية لمدة 3 أيام.',
        ],
        note: 'من اشترى التطبيق حين كان تنزيله مدفوعاً يحصل تلقائياً على Lifetime، بحسب الوصف.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**تقول صفحة المتجر وسياسة الخصوصية معاً إن النص لا يغادر الجهاز حين يترجمه نموذج ذكاء اصطناعي.** تقرأ بطاقة الخصوصية في App Store «لا يتم جمع أي بيانات»، وتنبّه Apple إلى أن المطوّر هو من صرّح بها وأنها لم تُتحقق. وتضيف السياسة أنه لا يوجد حساب، ولا استدعاء لخدمات ذكاء اصطناعي خارجية، ولا جمع لبيانات التحليلات، ولا حزمة SDK مستقلة لتقارير الأعطال؛ فتقارير الأعطال تذهب إلى Apple فقط، وبشرط موافقتك.',
          'أما ما يستخدم الشبكة بحسب السياسة فهو: تنزيل ملفات نماذج GGUF عند الإعداد أو عند اختيار نموذج جديد، وفحص اختياري لتحديثات التطبيق أو النماذج. ولا تذكر السياسة المصدر الذي تُنزَّل منه النماذج.',
          'هناك تفصيلان يستحقان الحذر. فالسياسة سارية منذ 1 يناير 2025، أي قبل أول إصدار للتطبيق، وتسمّي التطبيق «Local AI Translate». وتقول أيضاً إن نص الترجمة يُحفظ في الذاكرة فقط ولا يُكتب أبداً في تخزين دائم، بينما يحفظ الإصدار 1.2 النصوص المفرّغة والتسجيلات على الجهاز؛ ولا يصف نص السياسة ذلك ولا المشتريات داخل التطبيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'التطبيق مغلق المصدر، ولذلك لا يمكن التحقق من أي من هذه الأقوال في الشيفرة، ولم تدقق PromptQuorum حركة الشبكة. على من يترجم مواد سرية أن يتحقق من السلوك على جهازه.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يترجمون نصوصاً خاصة على iPhone.** يُبقي النموذج المحلي النص خارج الخدمات السحابية، بحسب المطوّر.',
          '**المسافرون ومن لا تتوفر لهم بيانات موثوقة.** تعمل الترجمة دون اتصال بعد تنزيل نموذج.',
          '**من يريدون استبدال لوحة الترجمة في النظام.** يمكن تعيين التطبيق تطبيق الترجمة الافتراضي.',
          '**القرّاء الذين يريدون مقارنة النماذج.** يُعرض Hy-MT2 وTranslateGemma وQwen جنباً إلى جنب.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة في الاستخدام الفعلي.** لم تشغّل PromptQuorum التطبيق، فلم تُقيَّم جودة الترجمة ولا السرعة ولا استهلاك البطارية ولا الميزات الصوتية، ولا يُدّعى أي اختبار معياري للنماذج.',
          '**الأسعار والنطاق المجاني.** لا يعرض نص صفحة المتجر سعراً لـ Lifetime أو Pro ولا يذكر هل يعمل أي نموذج ذكاء اصطناعي دون شراء.',
          '**الشيفرة المصدرية والترخيص.** التطبيق مغلق المصدر؛ ولا تضم منظمة المطوّر على GitHub سوى مستودعات مواقعه.',
          '**تدفق البيانات.** لا شيفرة يمكن فحصها، فما سبق عن الخصوصية هو رواية المطوّر وسياسته.',
          '**السجل.** تقييمان فقط في App Store ومطوّر فردي، دون أن تذكر المصادر شركة أو التزاماً بالدعم.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'المنصات': 'iOS وMac',
            'السعر / الترخيص': 'مجاني / مغلق المصدر',
            'الفرق الرئيسي': 'دردشة عامة بنماذج مفتوحة على iPhone وiPad وMac عبر MLX',
          },
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
            'التطبيق': '[TranslateBooksWithLLMs](/ar/power-local-llm/translate-books-with-llms-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الترخيص': 'مجاني / AGPL-3.0',
            'الفرق الرئيسي': 'يترجم كتباً ومستندات كاملة بنموذج Ollama محلي أو نماذج لغوية سحابية',
          },
        ],
        note: 'لا يوجد في هذه القائمة تطبيق آخر مخصص للترجمة على الهاتف، فهذه أقرب الخيارات التي جرت مراجعتها وليست منافسين مباشرين. تتغير تفاصيل المنافسين كثيراً؛ فتحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أستطيع استخدامه على جهاز Mac بمعالج Apple؟',
            a: 'تدرج App Store أجهزة Mac بمعالج Apple M1 أو أحدث لكنها تصف التطبيق بعبارة «مصمَّم لـ iPhone. غير مجرَّب على macOS»؛ أي أن المطوّر لم يتحقق من التجربة على Mac، ولم تجرّبها PromptQuorum.',
          },
          {
            q: 'ماذا يحدث للنصوص المفرّغة والتسجيلات المحفوظة؟',
            a: 'يحفظها الإصدار 1.2 على الجهاز بحسب ملاحظات إصداره. ولا تذكر المصادر مدة الاحتفاظ بها ولا إن كان يمكن حذفها من داخل التطبيق.',
          },
          {
            q: 'أي نموذج أختار؟',
            a: 'يوصي الوصف باختيار نموذج يناسب ذاكرة الجهاز والجودة المطلوبة. ولا يقدّم أرقاماً لحجم الذاكرة ولا أحجام التنزيل ولا مقارنات جودة بين النماذج.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'On-Device AI Translator تطبيق ترجمة لـ iPhone يشغّل نماذج Hy-MT2 أو TranslateGemma أو Qwen على الجهاز، ويغطي 20 لغة، ويمكنه استبدال لوحة الترجمة في النظام، مع الترجمة المدمجة من Apple بديلاً مجانياً. كما يُحدَّث بنشاط، بإصدار قبل خمسة أيام من التحقق من هذه المراجعة. في المقابل هو مغلق المصدر وجديد، ولم يقيّمه سوى شخصين، ومرتبط بمشتريات لا تُظهر المصادر أسعارها، وتصفه سياسة خصوصية أقدم من التطبيق. يناسب القرّاء الذين يريدون نموذج ترجمة محلياً على iPhone ويقبلون تطبيقاً حديثاً ومغلقاً؛ ومن يريد شيفرة قابلة للتدقيق فبإمكانه مقارنة [Private Mind](/ar/power-local-llm/private-mind-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[On-Device AI Translator في App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) — الوصف وسجل الإصدارات والمتطلبات والتقييمات والمشتريات داخل التطبيق وبطاقة الخصوصية، جرى التحقق منها في 24 أكتوبر 2026.',
          '[صفحة دعم المطوّر](https://on-device-ai-application.github.io/translator-site/) — صفحة دعم المطوّر بالإنجليزية والصينية، جرى التحقق منها في 24 أكتوبر 2026.',
          '[سياسة الخصوصية](https://on-device-ai-application.github.io/translator-site/privacy_en.html) — معالجة البيانات واستخدام الشبكة، سارية منذ 1 يناير 2025، جرى التحقق منها في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — تطبيق مجاني لـ iPhone وiPad وMac يشغّل نماذج مفتوحة عبر MLX.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني بترخيص MIT يعمل دون اتصال لـ iPhone وأندرويد.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لـ iOS وأندرويد.',
          '[مراجعة TranslateBooksWithLLMs](/ar/power-local-llm/translate-books-with-llms-review) — أداة لسطح المكتب تترجم كتباً كاملة بنماذج لغوية محلية أو سحابية.',
          '[أفضل تطبيقات الذكاء الاصطناعي المحلي لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — الدليل الأشمل لـ iPhone.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/on-device-ai-translator-review-hero-zh.webp',
    title: 'On-Device AI Translator 评测：iPhone 上的离线 AI 翻译',
    seoTitle: 'On-Device AI Translator 评测:iPhone 离线翻译',
    intro:
      'On-Device AI Translator 是一款 iPhone 翻译应用,由在 App Store 中署名为 Changwen Li(昌文 李)的个人开发者提供。它使用 Apple 内置翻译或在手机上运行的语言模型进行翻译,首次发布于 2026 年 3 月 1 日。本评测基于 2026 年 10 月 24 日核对的 App Store 页面、开发者支持页面和隐私政策。',
    metaDescription:
      'On-Device AI Translator 评测:一款闭源 iPhone 应用,在设备上用 Hy-MT2、TranslateGemma 和 Qwen 翻译。付费方案与隐私一文读懂。',
    twitterDescription:
      'On-Device AI Translator 评测:闭源的 iPhone 翻译应用,可下载设备端模型,支持 20 种语言,并可替代系统翻译面板。商店页面与隐私政策怎么说。',
    audience:
      '希望由设备上的模型而非云服务来翻译文本的 iPhone 用户,以及需要了解哪些功能免费、应用会向外发送什么、来源未能确认什么的读者。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On-Device AI Translator 评测',
    targetKeywords: [
      'on-device ai translator 评测',
      'iphone 离线 ai 翻译',
      'iphone 离线翻译应用',
      'hy-mt2 翻译 iphone',
      'translategemma iphone 应用',
      'local ai translate 应用',
    ],
    current_models_mentioned: ['Hy-MT2', 'TranslateGemma', 'Qwen3', 'Qwen2.5'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple M1'],
    leadAnswerBlock:
      '**On-Device AI Translator(版本 1.2)在 iPhone 上用可下载的 Hy-MT2、TranslateGemma 和 Qwen 模型进行翻译,并提供 Apple 内置翻译作为免费引擎。** AI 模型需要应用内购买解锁,来源中没有显示价格,而且隐私政策的日期早于应用本身;在依赖它之前,请先阅读方案与隐私部分。',
    quickAnswerTop: {
      zh: {
        question: 'On-Device AI Translator 真的能离线翻译吗?',
        answer:
          '根据商店页面和隐私政策,下载模型之后可以:使用 AI 模型翻译不会产生任何网络请求,应用在飞行模式下也能工作。只有下载模型和可选的更新检查会联网。',
        bullets: [
          '在 [App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) 免费下载,无需账号。',
          '可设为默认翻译应用,在任意应用中选中的文本会在其中打开。',
          '1.2 版新增了双向语音对话和持续聆听。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'On-Device AI Translator 是什么?', anchor: 'what-is-translator' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '免费部分与付费方案', anchor: 'plans' },
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
            text: 'On-Device AI Translator 是一款闭源的 iPhone 翻译应用,在设备上运行模型,并可替代系统翻译面板。',
          },
          {
            type: 'plain-terms',
            text: '安装后只需下载一次翻译模型,之后就能在任意应用中选中文本进行翻译;据开发者称,文本不会被发送到服务器。',
          },
        ],
        items: [
          '开发者:在 App Store 中署名为 Changwen Li 的个人开发者,背后没有公司,应用源代码也未公开。',
          '维护状况:App Store 上最近一次更新发生在本次核对的五天前,因此不适用“项目疑似停更”警告。',
          '口碑:App Store 显示 2 条评分、平均 3.0 分(满分 5 分),公开的使用记录还很少。',
          '平台:支持 iOS 18.4 或更高版本的 iPhone 和 iPad;没有 Android 或桌面版本。',
          '语言:支持 20 种翻译语言,而应用自身界面标注为英语和中文。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 24 日核对的 App Store 页面、开发者支持页面和隐私政策。PromptQuorum 没有安装、测试或对该应用做基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-translator',
        title: 'On-Device AI Translator 是什么?',
        content: [
          '**On-Device AI Translator 是一款 iPhone 应用,用在本地运行的模型翻译文本,而不是调用云端翻译服务。** 根据其 App Store 页面,它有两个引擎:系统翻译(System Translation),使用 Apple 内置翻译,语言包由系统在首次使用时下载;以及设备端 AI 模型(腾讯 Hy-MT2 的 1.8B 和 7B 版本、Google TranslateGemma 4B、Qwen3 和 Qwen2.5),应用下载一次后即可离线运行。隐私政策中写明推理引擎为 llama.cpp。',
          '名称因地而异。美国 App Store 标题为“On-Device AI Translator”,描述中称“AI Translator”,开发者支持页面和隐私政策称“Local AI Translate”,奥地利、德国、日本、韩国和巴西的商店则都显示为“本地 AI 翻译”。在所有核对过的商店中,App Store ID(6759458075)都相同。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**应用通过 App Store 安装;没有 Android 版、桌面版或源代码。** 除下方的支持页面外,开发者没有产品网站。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'iPhone / iPad',
            '获取方式': '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075)(iOS 18.4 或更高版本,109 MB)',
          },
          {
            '平台': '网站',
            '获取方式': '[开发者支持页面](https://on-device-ai-application.github.io/translator-site/)(英语和中文)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[隐私政策](https://on-device-ai-application.github.io/translator-site/privacy_en.html)(英语,另链接中文版;自 2025 年 1 月 1 日起生效)',
          },
          {
            '平台': '问题反馈',
            '获取方式': '[GitHub issues](https://github.com/On-Device-AI-Application/translator-site/issues)(仅限网站仓库,无应用源代码)',
          },
        ],
        note: '评测版本:1.2,于 2026 年 10 月 19 日在 App Store 发布(首次发布于 2026 年 3 月 1 日;1.1 版发布于 2026 年 9 月 18 日)。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项都来自 App Store 的描述和更新说明。**',
        ],
        items: [
          '**默认翻译应用。** 设为默认后,在任意应用中选中文本并点按“翻译”,就会打开本应用,用所选的本地模型翻译,并可原地替换原文或复制结果。',
          '**20 种翻译语言。** 简体中文和繁体中文、英语、日语、韩语、法语、德语、西班牙语、意大利语、葡萄牙语、俄语、阿拉伯语、泰语、越南语、印度尼西亚语、土耳其语、荷兰语、波兰语、乌克兰语和印地语;加星标的常用语言会固定在每个菜单的顶部。',
          '**语音对话。** 1.2 版新增双向语音对话和持续聆听,以及原文与译文的分屏显示。',
          '**模型下载管理。** 1.1 版新增支持续传和完整性校验的后台下载;1.2 版改进了离线下载和语言切换。',
        ],
        note: 'App Store 将应用自身的界面语言列为英语和中文;上述 20 种语言是它可互译的语言。',
      },
      plans: {
        id: 'plans',
        title: '免费部分与付费方案',
        content: [
          '**描述中将系统翻译列为免费引擎,并介绍了两项用于解锁设备端 AI 模型的应用内购买。**',
        ],
        items: [
          '**免费。** 无需下载模型的系统翻译;系统会在首次使用某种语言时获取语言包。',
          '**Lifetime。** 一次性购买,解锁 Hy-MT2 1.8B 和 Qwen 模型,包括在系统翻译面板中使用。',
          '**Pro。** 包含 Lifetime 的全部内容,另加大型模型 TranslateGemma 4B 和 Hy-MT2 7B,按月或按年计费,提供 3 天免费试用。',
        ],
        note: '据描述,应用还是付费下载时购买的用户会自动获得 Lifetime。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**商店页面和隐私政策都称,AI 模型翻译时文本不会离开设备。** App Store 隐私标签显示“未收集数据”,Apple 注明该标签由开发者自行声明,未经验证。政策还补充说,应用没有账号,不调用外部 AI 服务,不收集使用分析数据,也没有独立的崩溃报告 SDK;崩溃报告只会发送给 Apple,且仅在你选择加入时发送。',
          '据政策,会用到网络的只有:在初始设置或选择新模型时下载 GGUF 模型文件,以及可选的应用或模型更新检查。政策没有说明模型从哪里下载。',
          '有两点需要留意。政策自 2025 年 1 月 1 日起生效,早于应用的首次发布,并且称该应用为“Local AI Translate”。政策还说翻译文本只保存在内存中、绝不写入持久存储,而 1.2 版会把转写文本和录音保存在设备上;政策正文既没有描述这一点,也没有提到应用内购买。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该应用为闭源,上述说法无法通过代码核实,PromptQuorum 也没有审计网络流量。翻译机密内容的用户应在自己的设备上验证实际行为。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**在 iPhone 上翻译私密文本的人。** 据开发者称,本地模型让文本不经过云服务。',
          '**旅行者和网络不稳定的人。** 下载模型后,翻译可离线进行。',
          '**想替换系统翻译面板的用户。** 该应用可设为默认翻译应用。',
          '**想对比模型的读者。** Hy-MT2、TranslateGemma 和 Qwen 并列提供。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际质量。** PromptQuorum 没有运行该应用,因此翻译质量、速度、耗电和语音功能均未评估,也不宣称任何模型基准成绩。',
          '**价格与免费范围。** 商店页面文本没有给出 Lifetime 或 Pro 的价格,也没有说明不购买是否能使用任何 AI 模型。',
          '**源代码与许可证。** 应用为闭源;开发者的 GitHub 组织只托管其网站仓库。',
          '**数据流向。** 没有可检查的代码,上述隐私说法只是开发者及其政策的一面之词。',
          '**使用记录。** 只有 2 条 App Store 评分,开发者是个人,来源中没有提到公司或支持承诺。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
            '平台': 'iOS、Mac',
            '价格 / 许可证': '免费 / 闭源',
            '主要区别': '通过 MLX 在 iPhone、iPad 和 Mac 上用开放模型进行通用聊天',
          },
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
            '应用': '[TranslateBooksWithLLMs](/zh/power-local-llm/translate-books-with-llms-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / AGPL-3.0',
            '主要区别': '用本地 Ollama 模型或云端 LLM 翻译整本书和文档',
          },
        ],
        note: '这份名单中没有其他专门面向手机的翻译应用,因此这些是已评测的最接近的选项,而非同类直接对手。竞品信息经常变化,请在各应用自己的页面核实当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '能在搭载 Apple 芯片的 Mac 上使用吗?',
            a: 'App Store 列出了搭载 Apple M1 或更新芯片的 Mac,但将该应用标注为“为 iPhone 设计。未针对 macOS 验证”,也就是说开发者没有验证 Mac 上的体验,PromptQuorum 也没有试用过。',
          },
          {
            q: '保存的转写文本和录音会怎样?',
            a: '据更新说明,1.2 版会把它们保存在设备上。来源没有说明保存多久,也没有说明能否在应用内删除。',
          },
          {
            q: '应该选哪个模型?',
            a: '描述建议根据设备内存和所需质量来选择。它没有给出各模型的内存需求、下载大小或质量对比。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'On-Device AI Translator 是一款 iPhone 翻译应用,在设备上运行 Hy-MT2、TranslateGemma 或 Qwen 模型,支持 20 种语言,并可替代系统翻译面板,同时把 Apple 内置翻译作为免费的备选。它的更新也很积极,在本评测核对的五天前刚发布过新版本。不利的一面是:闭源、上线时间短、只有两人评分、绑定了来源未显示价格的购买项,且隐私政策的日期早于应用本身。它适合想在 iPhone 上用本地翻译模型、并能接受一款年轻闭源应用的读者;想要可审计代码的读者可以对比 [Private Mind](/zh/power-local-llm/private-mind-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 On-Device AI Translator](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) — 描述、版本历史、系统要求、评分、应用内购买和隐私标签,核对于 2026 年 10 月 24 日。',
          '[开发者支持页面](https://on-device-ai-application.github.io/translator-site/) — 开发者的英语和中文支持页面,核对于 2026 年 10 月 24 日。',
          '[隐私政策](https://on-device-ai-application.github.io/translator-site/privacy_en.html) — 数据处理与网络使用,自 2025 年 1 月 1 日起生效,核对于 2026 年 10 月 24 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Locally AI 评测](/zh/power-local-llm/locally-ai-review) — 通过 MLX 运行开放模型的 iPhone、iPad 和 Mac 免费应用。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的免费、MIT 许可的离线聊天应用。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[TranslateBooksWithLLMs 评测](/zh/power-local-llm/translate-books-with-llms-review) — 用本地或云端 LLM 翻译整本书的桌面工具。',
          '[2026 年 iPhone 最佳本地大模型应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iPhone 应用盘点。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/on-device-ai-translator-review-hero-ko.webp',
    title: 'On-Device AI Translator 리뷰: iPhone용 오프라인 AI 번역',
    seoTitle: 'On-Device AI Translator 리뷰: 오프라인 번역 앱',
    intro:
      'On-Device AI Translator는 App Store에 Changwen Li(昌文 李)라는 이름으로 등록된 개인 개발자가 만든 iPhone용 번역 앱입니다. Apple의 기본 번역 또는 휴대폰에서 실행되는 언어 모델로 번역하며, 2026년 3월 1일에 처음 출시되었습니다. 이 리뷰는 2026년 10월 24일에 확인한 App Store 목록, 개발자 지원 페이지, 개인정보 처리방침을 바탕으로 합니다.',
    metaDescription:
      'On-Device AI Translator 리뷰. Hy-MT2, TranslateGemma, Qwen을 기기에서 실행해 번역하는 비공개 소스 iPhone 앱입니다. 요금제와 개인정보를 정리했습니다.',
    twitterDescription:
      'On-Device AI Translator 리뷰: 기기에서 모델을 내려받아 쓰는 비공개 소스 iPhone 번역 앱. 20개 언어를 지원하고 시스템 번역 시트를 대체할 수 있습니다. 앱 목록과 개인정보 처리방침의 내용입니다.',
    audience:
      '클라우드 서비스 대신 기기 안의 모델로 텍스트를 번역하고 싶은 iPhone 사용자. 무료로 쓸 수 있는 범위, 외부로 전송되는 정보, 출처로 확인되지 않은 내용을 알아야 하는 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On-Device AI Translator 리뷰',
    targetKeywords: [
      'on-device ai translator 리뷰',
      '오프라인 ai 번역 iphone',
      '오프라인 번역 앱 iphone',
      'hy-mt2 번역 iphone',
      'translategemma iphone 앱',
      'local ai translate 앱',
    ],
    current_models_mentioned: ['Hy-MT2', 'TranslateGemma', 'Qwen3', 'Qwen2.5'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple M1'],
    leadAnswerBlock:
      '**On-Device AI Translator(버전 1.2)는 내려받는 Hy-MT2, TranslateGemma, Qwen 모델로 iPhone에서 번역하며, 무료 엔진으로 Apple의 기본 번역도 제공합니다.** AI 모델은 앱 내 구매 뒤에 있고 출처에는 가격이 나와 있지 않으며, 개인정보 처리방침은 앱보다 날짜가 앞섭니다. 의존하기 전에 요금제와 개인정보 항목을 읽어 보시기 바랍니다.',
    quickAnswerTop: {
      ko: {
        question: 'On-Device AI Translator는 정말 오프라인으로 번역하나요?',
        answer:
          '앱 목록과 개인정보 처리방침에 따르면 모델을 내려받은 뒤에는 그렇습니다. AI 모델로 번역할 때는 네트워크 요청이 없고 비행기 모드에서도 동작합니다. 온라인이 되는 경우는 모델 다운로드와 선택적인 업데이트 확인뿐입니다.',
        bullets: [
          '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075)에서 무료로 내려받을 수 있으며 계정이 필요 없습니다.',
          '기본 번역 앱으로 지정할 수 있어, 어떤 앱에서든 선택한 텍스트가 이 앱에서 열립니다.',
          '버전 1.2에서 양방향 음성 대화와 연속 듣기가 추가되었습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'On-Device AI Translator란 무엇인가?', anchor: 'what-is-translator' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '무료 범위와 유료 요금제', anchor: 'plans' },
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
            text: 'On-Device AI Translator는 모델을 기기에서 실행하고 시스템 번역 시트를 대체할 수 있는, 비공개 소스 iPhone 번역 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '앱을 설치하고 번역 모델을 한 번 내려받으면, 이후에는 어떤 앱에서든 텍스트를 선택해 번역할 수 있습니다. 개발자에 따르면 텍스트는 서버로 전송되지 않습니다.',
          },
        ],
        items: [
          '개발자: App Store에 Changwen Li로 등록된 개인 개발자이며, 뒤에 회사는 없고 앱의 소스 코드도 공개되어 있지 않습니다.',
          '유지 관리: App Store의 마지막 업데이트는 이번 확인 5일 전이어서, 방치된 프로젝트 경고는 해당되지 않습니다.',
          '이용 실적: App Store 평점은 2건에 3.0점(5점 만점)이어서 공개된 이용 실적이 많지 않습니다.',
          '플랫폼: iOS 18.4 이상의 iPhone과 iPad이며, Android나 데스크톱 빌드는 없습니다.',
          '언어: 번역 언어는 20개이고, 앱 자체의 인터페이스 언어는 영어와 중국어로 표시되어 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 24일에 확인한 App Store 목록, 개발자 지원 페이지, 개인정보 처리방침을 바탕으로 합니다. PromptQuorum은 이 앱을 설치하거나 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-translator',
        title: 'On-Device AI Translator란 무엇인가?',
        content: [
          '**On-Device AI Translator는 클라우드 번역 서비스를 호출하는 대신, 로컬에서 실행되는 모델로 텍스트를 번역하는 iPhone 앱입니다.** App Store 목록에 따르면 엔진은 두 가지입니다. 하나는 Apple의 기본 번역을 쓰는 시스템 번역(System Translation)으로, 언어 팩은 처음 사용할 때 시스템이 내려받습니다. 다른 하나는 기기 내 AI 모델(Tencent Hy-MT2 1.8B와 7B, Google TranslateGemma 4B, Qwen3, Qwen2.5)로, 앱이 한 번 내려받으면 이후 오프라인으로 실행됩니다. 개인정보 처리방침은 추론 엔진으로 llama.cpp를 명시하고 있습니다.',
          '이름은 장소에 따라 다릅니다. 미국 App Store 제목은 "On-Device AI Translator", 설명문은 "AI Translator", 개발자 지원 페이지와 개인정보 처리방침은 "Local AI Translate", 오스트리아·독일·일본·한국·브라질 스토어에서는 모두 "本地 AI 翻译"입니다. App Store ID(6759458075)는 확인한 모든 스토어에서 같았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**앱은 App Store에서 설치합니다. Android 빌드, 데스크톱 빌드, 소스 코드는 제공되지 않습니다.** 개발자에게는 아래 지원 페이지 외에 제품 웹사이트가 없습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'iPhone / iPad',
            '받는 곳': '[App Store](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) (iOS 18.4 이상, 109 MB)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[개발자 지원 페이지](https://on-device-ai-application.github.io/translator-site/) (영어, 중국어)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[개인정보 처리방침](https://on-device-ai-application.github.io/translator-site/privacy_en.html) (영어, 중국어판 링크 있음, 2025년 1월 1일 시행)',
          },
          {
            '플랫폼': '버그 신고',
            '받는 곳': '[GitHub 이슈](https://github.com/On-Device-AI-Application/translator-site/issues) (웹사이트 저장소만 해당, 앱 소스 없음)',
          },
        ],
        note: '확인한 버전: 1.2. 2026년 10월 19일에 App Store에서 출시되었습니다(최초 출시는 2026년 3월 1일, 1.1은 2026년 9월 18일).',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 App Store 설명문과 릴리스 노트에서 가져온 내용입니다.**',
        ],
        items: [
          '**기본 번역 앱.** 기본 앱으로 지정하면 어떤 앱에서든 텍스트를 선택하고 번역을 누를 때 이 앱이 열립니다. 선택한 로컬 모델로 번역하며, 원문을 그 자리에서 바꾸거나 결과를 복사할 수 있습니다.',
          '**번역 언어 20개.** 중국어 간체와 번체, 영어, 일본어, 한국어, 프랑스어, 독일어, 스페인어, 이탈리아어, 포르투갈어, 러시아어, 아랍어, 태국어, 베트남어, 인도네시아어, 튀르키예어, 네덜란드어, 폴란드어, 우크라이나어, 힌디어. 별표를 붙인 즐겨찾기는 모든 메뉴의 맨 위에 유지됩니다.',
          '**음성 대화.** 버전 1.2에서 양방향 음성 대화와 연속 듣기, 원문과 번역문을 나란히 보는 분할 보기가 추가되었습니다.',
          '**모델 다운로드 관리.** 버전 1.1에서 이어받기와 무결성 확인을 지원하는 백그라운드 다운로드가 추가되었고, 1.2에서 오프라인 다운로드와 언어 전환이 개선되었습니다.',
        ],
        note: 'App Store는 앱 자체의 인터페이스 언어를 영어와 중국어로 표시합니다. 위의 20개 언어는 번역 대상 언어입니다.',
      },
      plans: {
        id: 'plans',
        title: '무료 범위와 유료 요금제',
        content: [
          '**설명문은 시스템 번역을 무료 엔진으로 소개하고, 기기 내 AI 모델을 여는 두 가지 앱 내 구매를 설명합니다.**',
        ],
        items: [
          '**무료.** 모델을 내려받지 않는 시스템 번역. 언어를 처음 쓸 때 시스템이 언어 팩을 가져옵니다.',
          '**Lifetime.** Hy-MT2 1.8B와 Qwen 모델을 여는 1회성 구매이며, 시스템 번역 시트 안에서도 쓸 수 있습니다.',
          '**Pro.** Lifetime의 모든 내용에 더해 대형 모델인 TranslateGemma 4B와 Hy-MT2 7B를 쓸 수 있습니다. 월 또는 연 단위로 결제되며 3일 무료 체험이 있습니다.',
        ],
        note: '설명문에 따르면 앱이 유료 다운로드이던 시절에 구매한 사용자는 Lifetime을 자동으로 받습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**앱 목록과 개인정보 처리방침은 모두 AI 모델이 번역할 때 텍스트가 기기를 떠나지 않는다고 밝힙니다.** App Store 개인정보 라벨은 "수집된 데이터 없음"이며, Apple은 이것이 개발자가 직접 밝힌 내용이고 검증되지 않았다고 안내합니다. 처리방침은 계정이 없고, 외부 AI 서비스를 호출하지 않으며, 사용 분석을 수집하지 않고, 별도의 충돌 보고 SDK도 없다고 덧붙입니다. 충돌 보고서는 Apple에만 전달되며, 동의한 경우에 한합니다.',
          '처리방침에 따르면 네트워크를 쓰는 경우는 초기 설정이나 새 모델을 고를 때 GGUF 모델 파일을 내려받는 것, 그리고 선택적인 앱 또는 모델 업데이트 확인입니다. 모델을 어디에서 내려받는지는 처리방침에 나와 있지 않습니다.',
          '주의할 점이 두 가지 있습니다. 처리방침의 시행일은 2025년 1월 1일로 앱의 최초 출시보다 앞서며, 앱을 "Local AI Translate"라고 부릅니다. 또 번역 텍스트는 메모리에만 보관되고 영구 저장소에는 기록되지 않는다고 하지만, 버전 1.2는 받아쓰기 기록과 녹음을 기기에 저장합니다. 처리방침 본문은 이 점도, 앱 내 구매도 설명하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 앱은 비공개 소스이므로 위 내용을 코드로 확인할 수 없고, PromptQuorum은 네트워크 트래픽을 감사하지 않았습니다. 기밀 자료를 번역하는 분은 본인 기기에서 동작을 직접 확인하시기 바랍니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**iPhone에서 개인적인 글을 번역하는 분.** 개발자에 따르면 로컬 모델은 텍스트를 클라우드 서비스에 넘기지 않습니다.',
          '**여행자와 데이터 환경이 불안정한 분.** 모델을 내려받은 뒤에는 오프라인으로 번역됩니다.',
          '**시스템 번역 시트를 대체하고 싶은 분.** 기본 번역 앱으로 지정할 수 있습니다.',
          '**모델을 비교해 보고 싶은 분.** Hy-MT2, TranslateGemma, Qwen이 나란히 제공됩니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 품질.** PromptQuorum은 앱을 실행하지 않았으므로 번역 품질, 속도, 배터리 소모, 음성 기능은 평가하지 않았고 모델 벤치마크도 주장하지 않습니다.',
          '**가격과 무료 범위.** 앱 목록 텍스트에는 Lifetime과 Pro의 가격이 없고, 구매 없이 쓸 수 있는 AI 모델이 있는지도 나와 있지 않습니다.',
          '**소스 코드와 라이선스.** 앱은 비공개 소스이며, 개발자의 GitHub 조직에는 웹사이트 저장소만 있습니다.',
          '**데이터 흐름.** 확인할 코드가 없으므로 위의 개인정보 설명은 개발자와 그 처리방침의 설명일 뿐입니다.',
          '**이용 실적.** App Store 평점은 2건이고 개발자는 개인이며, 출처에는 회사나 지원 약속이 언급되어 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '플랫폼': 'iOS, Mac',
            '가격 / 라이선스': '무료 / 비공개 소스',
            '핵심 차이': 'MLX로 오픈 모델을 실행하는 iPhone·iPad·Mac용 범용 채팅',
          },
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
            '앱': '[TranslateBooksWithLLMs](/ko/power-local-llm/translate-books-with-llms-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / AGPL-3.0',
            '핵심 차이': '로컬 Ollama 모델이나 클라우드 LLM으로 책과 문서를 통째로 번역',
          },
        ],
        note: '이 목록에는 휴대폰 전용 번역 앱이 달리 없으므로, 위 앱들은 같은 조건의 경쟁 앱이 아니라 리뷰를 마친 가장 가까운 선택지입니다. 경쟁 앱 정보는 자주 바뀌니 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱 목록에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Apple 실리콘 Mac에서 쓸 수 있나요?',
            a: 'App Store에는 Apple M1 이상 Mac이 표시되어 있지만 앱은 "iPhone용으로 설계됨. macOS용으로 검증되지 않음"으로 표시되어 있습니다. 개발자가 Mac에서의 사용 환경을 검증하지 않았다는 뜻이며, PromptQuorum도 사용해 보지 않았습니다.',
          },
          {
            q: '저장된 받아쓰기 기록과 녹음은 어떻게 되나요?',
            a: '릴리스 노트에 따르면 버전 1.2는 이를 기기에 저장합니다. 얼마나 오래 보관되는지, 앱 안에서 삭제할 수 있는지는 출처에 나와 있지 않습니다.',
          },
          {
            q: '어떤 모델을 골라야 하나요?',
            a: '설명문은 기기의 메모리와 필요한 품질에 맞춰 고르라고 안내합니다. 모델별 메모리 수치, 다운로드 크기, 품질 비교는 제시되어 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'On-Device AI Translator는 Hy-MT2, TranslateGemma, Qwen 모델을 기기에서 실행하고 20개 언어를 지원하며 시스템 번역 시트를 대체할 수 있는 iPhone 번역 앱으로, Apple의 기본 번역을 무료 대안으로 갖추고 있습니다. 이 리뷰를 확인하기 5일 전에 릴리스가 있었을 만큼 활발하게 업데이트되기도 합니다. 반면 비공개 소스이고 출시된 지 얼마 되지 않았으며, 평가는 두 건뿐이고, 가격이 출처에 나오지 않는 구매에 묶여 있으며, 개인정보 처리방침은 앱보다 날짜가 앞섭니다. iPhone에서 로컬 번역 모델을 쓰고 싶고 새롭고 폐쇄적인 앱을 받아들일 수 있는 독자에게 맞습니다. 검증 가능한 코드를 원한다면 [Private Mind](/ko/power-local-llm/private-mind-review)나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 On-Device AI Translator](https://apps.apple.com/us/app/on-device-ai-translator/id6759458075) — 설명문, 버전 기록, 요구 사항, 평점, 앱 내 구매, 개인정보 라벨. 2026년 10월 24일 확인.',
          '[개발자 지원 페이지](https://on-device-ai-application.github.io/translator-site/) — 영어와 중국어로 된 개발자 지원 페이지. 2026년 10월 24일 확인.',
          '[개인정보 처리방침](https://on-device-ai-application.github.io/translator-site/privacy_en.html) — 데이터 처리와 네트워크 사용. 2025년 1월 1일 시행, 2026년 10월 24일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — MLX로 오픈 모델을 실행하는 iPhone·iPad·Mac용 무료 앱.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone·Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS·Android용 무료 오픈 소스 온디바이스 채팅 클라이언트.',
          '[TranslateBooksWithLLMs 리뷰](/ko/power-local-llm/translate-books-with-llms-review) — 로컬 또는 클라우드 LLM으로 책을 통째로 번역하는 데스크톱 도구.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 전반을 다룬 종합 정리.',
        ],
      },
    },
  },
}
