// On Device LLM Review: Free Offline Android Chat App
// Slug: on-device-llm-review
// Companion to: pocketpal-ai-review, private-mind-review, toolneuron-review, google-ai-edge-gallery-review,
// best-local-llm-apps-android-2026
// Sources: Google Play listing com.ondevicellm (read 2026-10-26), the developer's website on-device-llm-ff80d.web.app and its
// privacy policy (last updated 2026-08-24). No hands-on use, benchmarking or network inspection; the request came from the
// site owner, not the developer, so no maker comment exists. Last upstream update 2026-09-11 => no stale warning.
// Not the same product as on-device-ai-review / ai-on-device-review (iPhone/Mac apps from other developers).

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
    heroImage: '/images/on-device-llm-review-hero-en.webp',
    title: 'On Device LLM Review: Free Offline Android Chat App',
    seoTitle: 'On Device LLM Review: Free Offline Android Chat App',
    intro:
      'On Device LLM is a free Android chat app that, according to its Google Play listing and privacy policy, runs open-weight language models on the phone without an account. Google Play titles it "Local LLM"; it is a different app from the iPhone and Mac apps On Device AI and AI on Device. This review reflects the store listing and the developer\'s website and privacy policy, as checked on 26 October 2026.',
    metaDescription:
      'On Device LLM review: free, closed-source Android chat app that says it runs open-weight models offline, with GGUF import and an optional local API.',
    twitterDescription:
      'On Device LLM review: a new free Android app that says its AI runs offline. What the Google Play listing and privacy policy claim, how they differ on analytics, and what is unverified.',
    audience:
      'Android users who want a free offline chat app with their own choice of models, and who need to know what the sources confirm, what they do not, and how new the project is.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On Device LLM review',
    targetKeywords: [
      'on device llm app review',
      'local llm android app',
      'offline llm android gguf',
      'run llama 3.2 on android phone',
      'android local openai compatible api',
      'com.ondevicellm',
      'on device llm vs pocketpal',
    ],
    current_models_mentioned: ['SmolLM2 360M', 'Qwen2.5 0.5B', 'TinyLlama 1.1B', 'Llama 3.2 1B', 'Qwen2.5 1.5B', 'Gemma 2 2B', 'Llama 3.2 3B'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**On Device LLM is a free, closed-source Android app that says it runs open-weight models such as Llama 3.2 on the phone with no account.** The project is brand new, so its claims rest on a listing and a policy that no one has independently tested.',
    quickAnswerTop: {
      en: {
        question: 'Does On Device LLM really run offline?',
        answer:
          'According to its listing and privacy policy, yes: after a model is downloaded, chat runs on the phone with no internet, and message text is never sent anywhere. This was not tested here, and the app still contacts the network for model downloads, a startup configuration read and analytics.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm), for 64-bit Android 7.0 or later.',
          'Seven built-in models, or a pasted link to any GGUF file.',
          'An optional OpenAI-compatible API for other devices on your network.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is On Device LLM?', anchor: 'what-is-on-device-llm' },
      { label: 'Get It', anchor: 'get-it' },
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
            text: 'On Device LLM is a closed-source Android app that, according to its developer, runs open-weight language models on the phone with no account, no ads and no server.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from Google Play, download one of seven models (or paste a link to your own GGUF file) and chat with it; the developer does not name the software that runs the models.',
          },
        ],
        items: [
          'Developer: an individual in India, listed on Google Play as Raushan kumar Pandey; the store page also shows the byline "Feather AI".',
          'Age and reach: the first release is version 1.0, last updated on 11 September 2026, and Google Play shows 100+ downloads, so there is no track record yet.',
          'Platform: Android 7.0 or later on 64-bit devices, through Google Play only; no iPhone, desktop or web build was found.',
          'Maintenance: the last update is 45 days old as of 26 October 2026, so no stale warning applies.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play listing and the developer\'s website and privacy policy, checked on 26 October 2026. No hands-on use, benchmarking or network inspection was done.',
          },
        ],
      },
      overview: {
        id: 'what-is-on-device-llm',
        title: 'What Is On Device LLM?',
        content: [
          '**On Device LLM is an Android chat app that, according to its Google Play listing, answers prompts with open-weight models running on the phone instead of a cloud service.** The listing is titled "Local LLM", while the developer\'s website and privacy policy call it "local LLM" and describe on-device AI chat for Android; this review uses "On Device LLM" to tell it apart from the iPhone and Mac apps [On Device AI](/power-local-llm/on-device-ai-review) and [AI on Device](/power-local-llm/ai-on-device-review), which have a different developer, platform and package name.',
          'The listing names its developer as Raushan kumar Pandey in India; the Android package is com.ondevicellm. The app is published only on Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**On Device LLM is installed from Google Play like any other Android app; no terminal or account is involved.** The first model download is 369 MB or more, so the first run needs a connection and free storage.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) (free install, 64-bit Android 7.0 or later)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[on-device-llm-ff80d.web.app](https://on-device-llm-ff80d.web.app/) (developer site with legal pages only)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Privacy policy](https://on-device-llm-ff80d.web.app/privacy) (last updated 24 August 2026)',
          },
        ],
        note: 'Version reviewed: 1.0, shown on Google Play as last updated on 11 September 2026; the release notes call it the first release. The listing names no source repository.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description or the privacy policy.**',
        ],
        items: [
          '**Seven built-in models.** SmolLM2 360M, Qwen2.5 0.5B, TinyLlama 1.1B, Llama 3.2 1B, Qwen2.5 1.5B, Gemma 2 2B and Llama 3.2 3B, each showing its download size before you commit; models can be switched without leaving the chat.',
          '**Your own models.** You can paste a direct link to any GGUF file.',
          '**Saved chats.** Conversations are stored in a database on the device, titles are written by the model, markdown and code blocks render with one-tap copy, and all chats can be cleared at once.',
          '**Optional local API.** An OpenAI-compatible HTTP endpoint on port 11434 lets curl, the Python SDK or your own scripts use the phone\'s model over Wi-Fi or USB, with streaming. It is off by default and shows a notification while active.',
          '**Requirements.** The listing states roughly 1 to 3 GB of free RAM depending on the model, and says larger models are noticeably slower on older phones.',
        ],
        note: 'The store description and the privacy policy agree on these points. The installed build is the final authority.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**According to the privacy policy, messages and replies stay in a private database on the device, and no prompt is ever sent to a server.** There is no account, and the listing says there are no ads. The Google Play Data safety section says "No data collected" and "No data shared with third parties".',
          'The policy is more detailed than that card. It says the app uses Google Firebase Analytics to record anonymous events: event names, the model name, message length in characters (not the text), durations, an anonymous app instance ID and standard device information. It also lists model downloads from the host you select (by default huggingface.co) and a read-only Google Cloud Firestore request at startup for the model catalogue and update checks. The two statements differ on analytics, so the policy is the fuller source.',
          'The optional local API has no authentication: the policy says anything on your network that can reach the phone can send prompts and read replies, and advises enabling it only on networks you trust.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source, so none of these claims can be checked in code, and PromptQuorum has not audited network traffic. Anyone handling confidential material should verify behavior on their own device first.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Android users who want a free offline chat app with their own choice of models.** The GGUF link import is the main reason to try it.',
          '**Developers who want a phone-hosted endpoint on a trusted network.** The local API is the other.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** Speed, battery use and answer quality were not tested, and nobody here confirmed that chat works in airplane mode.',
          '**The runtime.** The listing says models are GGUF files but does not name the inference engine.',
          '**License and source code.** No public repository was found, so the app is treated as closed source; each model also carries its own license from its publisher.',
          '**In-app purchases.** The install is free and the description names no purchases or ads, but the Data safety card does not state a business model.',
          '**The developer contact.** The privacy policy shows a placeholder contact address (SUPPORT@EXAMPLE.COM); the support email is on the Google Play listing.',
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
            'App': '[ToolNeuron](/power-local-llm/toolneuron-review)',
            'Platforms': 'Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source encrypted on-device AI app for Android',
          },
          {
            'App': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Open-source on-device app from Google\'s AI Edge team',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is On Device LLM the same as On Device AI or AI on Device?',
            a: 'No. Those are separate iPhone and Mac apps from other developers; this one is an Android app with the package name com.ondevicellm.',
          },
          {
            q: 'Can I use a model that is not in the list?',
            a: 'The listing says you can paste a direct link to any GGUF model. Whether a given model runs well depends on your phone\'s RAM, and its license is set by its publisher.',
          },
          {
            q: 'Does it work on iPhone or desktop?',
            a: 'No such build was found; the developer\'s website describes it as on-device AI chat for Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'On Device LLM is a free Android chat app with a clear offline pitch, a GGUF link import and a local API, but it is newly released, closed source and has 100+ downloads, and its offline and privacy claims are untested. It suits readers who want to try a small, account-less assistant and accept those risks; anyone who wants an open-source, established client should compare [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private Mind](/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[On Device LLM on Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) — description, release notes, update date, download count and Data safety section, checked 26 October 2026.',
          '[On Device LLM website](https://on-device-llm-ff80d.web.app/) — the developer\'s site, checked 26 October 2026.',
          '[On Device LLM privacy policy](https://on-device-llm-ff80d.web.app/privacy) — data handling, analytics, network requests and the local API; last updated 24 August 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[ToolNeuron Review](/power-local-llm/toolneuron-review) — an open-source, encrypted on-device AI app for Android.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s open-source on-device AI app.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'On Device LLM Review: Free Offline Android Chat App',
      description:
        'On Device LLM review: a free, closed-source Android chat app that says it runs open-weight models offline. What the Google Play listing and privacy policy claim, how they differ on analytics, and what is unverified.',
      url: 'https://www.promptquorum.com/power-local-llm/on-device-llm-review',
      inLanguage: 'en',
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Android users evaluating a free offline AI chat app' },
      about: [
        { '@type': 'Thing', name: 'On Device LLM' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Android' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/on-device-llm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'On Device LLM Review', item: 'https://www.promptquorum.com/power-local-llm/on-device-llm-review' },
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
    heroImage: '/images/on-device-llm-review-hero-de.webp',
    title: 'On-Device-LLM-Rezension: Kostenlose Offline-KI-Chat-App für Android',
    seoTitle: 'On Device LLM Rezension: Kostenlose Offline-Chat-App',
    intro:
      'On Device LLM ist eine kostenlose Android-Chat-App, die laut Google-Play-Eintrag und Datenschutzerklärung Open-Weight-Sprachmodelle ohne Konto auf dem Telefon ausführt. Bei Google Play heißt sie „Local LLM“; sie ist eine andere App als die iPhone- und Mac-Apps On Device AI und AI on Device. Diese Rezension gibt den Store-Eintrag sowie die Website und die Datenschutzerklärung des Entwicklers wieder, wie am 26. Oktober 2026 geprüft.',
    metaDescription:
      'On-Device-LLM-Rezension: kostenlose, nicht quelloffene Android-Chat-App, die Open-Weight-Modelle laut Entwickler offline ausführt, mit GGUF-Import.',
    twitterDescription:
      'On-Device-LLM-Rezension: eine neue, kostenlose Android-App, deren KI laut Entwickler offline läuft. Was der Google-Play-Eintrag und die Datenschutzerklärung behaupten, wo sie sich bei der Analyse unterscheiden und was ungeprüft ist.',
    audience:
      'Android-Nutzer, die eine kostenlose Offline-Chat-App mit eigener Modellwahl suchen und wissen müssen, was die Quellen bestätigen, was nicht und wie neu das Projekt ist.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On Device LLM Rezension',
    targetKeywords: [
      'on device llm app test',
      'lokale llm android app',
      'offline llm android gguf',
      'llama 3.2 auf android handy ausführen',
      'android lokale openai-kompatible api',
      'com.ondevicellm',
      'on device llm vs pocketpal',
    ],
    current_models_mentioned: ['SmolLM2 360M', 'Qwen2.5 0.5B', 'TinyLlama 1.1B', 'Llama 3.2 1B', 'Qwen2.5 1.5B', 'Gemma 2 2B', 'Llama 3.2 3B'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**On Device LLM ist eine kostenlose, nicht quelloffene Android-App, die Open-Weight-Modelle wie Llama 3.2 laut eigener Angabe ohne Konto auf dem Telefon ausführt.** Das Projekt ist brandneu, seine Angaben beruhen daher auf einem Eintrag und einer Erklärung, die niemand unabhängig getestet hat.',
    quickAnswerTop: {
      de: {
        question: 'Läuft On Device LLM wirklich offline?',
        answer:
          'Laut Eintrag und Datenschutzerklärung ja: Nach dem Download eines Modells läuft der Chat ohne Internet auf dem Telefon, und der Nachrichtentext wird nirgendwohin gesendet. Das wurde hier nicht getestet, und die App greift weiterhin für Modell-Downloads, das Lesen einer Startkonfiguration und die Analyse auf das Netzwerk zu.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm), für 64-Bit-Android 7.0 oder neuer.',
          'Sieben integrierte Modelle oder ein eingefügter Link zu einer beliebigen GGUF-Datei.',
          'Eine optionale OpenAI-kompatible API für andere Geräte in Ihrem Netzwerk.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist On Device LLM?', anchor: 'what-is-on-device-llm' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
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
            text: 'On Device LLM ist eine nicht quelloffene Android-App, die laut Entwickler Open-Weight-Sprachmodelle ohne Konto, ohne Werbung und ohne Server auf dem Telefon ausführt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App über Google Play, laden eines von sieben Modellen herunter (oder fügen den Link zu Ihrer eigenen GGUF-Datei ein) und chatten damit; die Software, die die Modelle ausführt, nennt der Entwickler nicht.',
          },
        ],
        items: [
          'Entwickler: eine Einzelperson in Indien, bei Google Play als Raushan kumar Pandey geführt; die Store-Seite zeigt zudem die Zeile „Feather AI“.',
          'Alter und Reichweite: Die erste Veröffentlichung ist Version 1.0, zuletzt aktualisiert am 11. September 2026, und Google Play zeigt 100+ Downloads; es gibt also noch keine Erfolgsbilanz.',
          'Plattform: Android 7.0 oder neuer auf 64-Bit-Geräten, nur über Google Play; ein Build für iPhone, Desktop oder Web wurde nicht gefunden.',
          'Pflege: Das letzte Update liegt zum 26. Oktober 2026 45 Tage zurück, daher gilt keine Warnung wegen fehlender Pflege.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den Google-Play-Eintrag sowie die Website und die Datenschutzerklärung des Entwicklers, geprüft am 26. Oktober 2026. Es wurde weder die App praktisch genutzt noch ein Benchmark oder eine Netzwerkanalyse durchgeführt.',
          },
        ],
      },
      overview: {
        id: 'what-is-on-device-llm',
        title: 'Was ist On Device LLM?',
        content: [
          '**On Device LLM ist eine Chat-App für Android, die laut Google-Play-Eintrag Eingaben mit Open-Weight-Modellen beantwortet, die auf dem Telefon laufen statt in einem Cloud-Dienst.** Der Eintrag heißt „Local LLM“, während die Website und die Datenschutzerklärung des Entwicklers von „local LLM“ sprechen und KI-Chat auf dem Gerät für Android beschreiben; diese Rezension verwendet „On Device LLM“, um die App von den iPhone- und Mac-Apps [On Device AI](/de/power-local-llm/on-device-ai-review) und [AI on Device](/de/power-local-llm/ai-on-device-review) abzugrenzen, die einen anderen Entwickler, eine andere Plattform und einen anderen Paketnamen haben.',
          'Als Entwickler nennt der Eintrag Raushan kumar Pandey in Indien; das Android-Paket heißt com.ondevicellm. Die App wird ausschließlich über Google Play veröffentlicht.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**On Device LLM wird wie jede andere Android-App über Google Play installiert; ein Terminal oder ein Konto sind nicht nötig.** Der erste Modell-Download umfasst 369 MB oder mehr, daher braucht der erste Start eine Verbindung und freien Speicherplatz.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) (kostenlose Installation, 64-Bit-Android 7.0 oder neuer)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[on-device-llm-ff80d.web.app](https://on-device-llm-ff80d.web.app/) (Entwicklerseite nur mit Rechtstexten)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung](https://on-device-llm-ff80d.web.app/privacy) (zuletzt aktualisiert am 24. August 2026)',
          },
        ],
        note: 'Geprüfte Version: 1.0, bei Google Play zuletzt aktualisiert am 11. September 2026; die Versionshinweise nennen sie die erste Veröffentlichung. Der Eintrag nennt kein Quellcode-Repository.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Beschreibung bei Google Play oder der Datenschutzerklärung.**',
        ],
        items: [
          '**Sieben integrierte Modelle.** SmolLM2 360M, Qwen2.5 0.5B, TinyLlama 1.1B, Llama 3.2 1B, Qwen2.5 1.5B, Gemma 2 2B und Llama 3.2 3B, jeweils mit Angabe der Downloadgröße, bevor Sie sich entscheiden; Modelle lassen sich wechseln, ohne den Chat zu verlassen.',
          '**Eigene Modelle.** Sie können den direkten Link zu einer beliebigen GGUF-Datei einfügen.',
          '**Gespeicherte Chats.** Unterhaltungen werden in einer Datenbank auf dem Gerät gespeichert, Titel schreibt das Modell, Markdown und Codeblöcke werden dargestellt und lassen sich mit einem Tipp kopieren, und alle Chats können auf einmal gelöscht werden.',
          '**Optionale lokale API.** Ein OpenAI-kompatibler HTTP-Endpunkt auf Port 11434 erlaubt es curl, dem Python-SDK oder eigenen Skripten, das Modell des Telefons per WLAN oder USB zu nutzen, mit Streaming. Er ist standardmäßig aus und zeigt bei Aktivität eine Benachrichtigung.',
          '**Anforderungen.** Der Eintrag nennt je nach Modell etwa 1 bis 3 GB freien Arbeitsspeicher (RAM) und sagt, größere Modelle seien auf älteren Telefonen spürbar langsamer.',
        ],
        note: 'Store-Beschreibung und Datenschutzerklärung stimmen in diesen Punkten überein. Maßgeblich ist letztlich die installierte Version.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Laut Datenschutzerklärung bleiben Nachrichten und Antworten in einer privaten Datenbank auf dem Gerät, und kein Prompt wird je an einen Server gesendet.** Es gibt kein Konto, und laut Eintrag gibt es keine Werbung. Der Abschnitt „Datensicherheit“ (Data safety) bei Google Play sagt „Keine Daten erhoben“ und „Keine Daten an Dritte weitergegeben“.',
          'Die Erklärung ist detaillierter als diese Karte. Sie sagt, die App nutze Google Firebase Analytics, um anonyme Ereignisse aufzuzeichnen: Ereignisnamen, den Modellnamen, die Nachrichtenlänge in Zeichen (nicht den Text), Dauern, eine anonyme App-Instanz-ID und übliche Geräteinformationen. Außerdem nennt sie Modell-Downloads vom ausgewählten Host (standardmäßig huggingface.co) und beim Start eine schreibgeschützte Google-Cloud-Firestore-Anfrage für den Modellkatalog und Update-Prüfungen. Beide Aussagen unterscheiden sich bei der Analyse, daher ist die Erklärung die ausführlichere Quelle.',
          'Die optionale lokale API hat keine Authentifizierung: Laut Erklärung kann jedes Gerät in Ihrem Netzwerk, das das Telefon erreicht, Prompts senden und Antworten lesen; sie rät, die API nur in Netzwerken zu aktivieren, denen Sie vertrauen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App ist nicht quelloffen, daher lässt sich keine dieser Angaben im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht geprüft. Wer vertrauliche Inhalte verarbeitet, sollte das Verhalten zuerst auf dem eigenen Gerät überprüfen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Android-Nutzer, die eine kostenlose Offline-Chat-App mit eigener Modellwahl wünschen.** Der Import per GGUF-Link ist der wichtigste Grund, sie auszuprobieren.',
          '**Entwickler, die in einem vertrauenswürdigen Netzwerk einen Endpunkt auf dem Telefon betreiben wollen.** Die lokale API ist der andere.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praktische Leistung.** Geschwindigkeit, Akkuverbrauch und Antwortqualität wurden nicht getestet, und niemand hat hier bestätigt, dass der Chat im Flugmodus funktioniert.',
          '**Die Laufzeitumgebung.** Der Eintrag sagt, die Modelle seien GGUF-Dateien, nennt aber die Inferenz-Engine nicht.',
          '**Lizenz und Quellcode.** Es wurde kein öffentliches Repository gefunden, daher gilt die App als nicht quelloffen; außerdem trägt jedes Modell die eigene Lizenz seines Herausgebers.',
          '**In-App-Käufe.** Die Installation ist kostenlos, und die Beschreibung nennt weder Käufe noch Werbung, doch die Karte „Datensicherheit“ nennt kein Geschäftsmodell.',
          '**Der Entwicklerkontakt.** Die Datenschutzerklärung zeigt eine Platzhalter-Kontaktadresse (SUPPORT@EXAMPLE.COM); die Support-E-Mail-Adresse steht im Google-Play-Eintrag.',
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
            'App': '[ToolNeuron](/de/power-local-llm/toolneuron-review)',
            'Plattformen': 'Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffene, verschlüsselte On-Device-KI-App für Android',
          },
          {
            'App': '[Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Quelloffene On-Device-App vom AI-Edge-Team von Google',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist On Device LLM dasselbe wie On Device AI oder AI on Device?',
            a: 'Nein. Das sind getrennte iPhone- und Mac-Apps anderer Entwickler; diese hier ist eine Android-App mit dem Paketnamen com.ondevicellm.',
          },
          {
            q: 'Kann ich ein Modell verwenden, das nicht in der Liste steht?',
            a: 'Laut Eintrag können Sie einen direkten Link zu einem beliebigen GGUF-Modell einfügen. Ob ein bestimmtes Modell gut läuft, hängt vom Arbeitsspeicher Ihres Telefons ab, und seine Lizenz legt sein Herausgeber fest.',
          },
          {
            q: 'Läuft die App auf dem iPhone oder auf dem Desktop?',
            a: 'Ein solcher Build wurde nicht gefunden; die Website des Entwicklers beschreibt die App als KI-Chat auf dem Gerät für Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'On Device LLM ist eine kostenlose Android-Chat-App mit klarem Offline-Versprechen, GGUF-Link-Import und lokaler API, aber sie ist erst kürzlich erschienen, nicht quelloffen und hat 100+ Downloads, und ihre Angaben zu Offline-Betrieb und Datenschutz sind ungetestet. Sie eignet sich für Leser, die einen kleinen Assistenten ohne Konto ausprobieren und diese Risiken akzeptieren; wer einen quelloffenen, etablierten Client möchte, sollte [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Private Mind](/de/power-local-llm/private-mind-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[On Device LLM bei Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) — Beschreibung, Versionshinweise, Aktualisierungsdatum, Download-Anzahl und Abschnitt „Datensicherheit“, geprüft am 26. Oktober 2026.',
          '[On-Device-LLM-Website](https://on-device-llm-ff80d.web.app/) — die Seite des Entwicklers, geprüft am 26. Oktober 2026.',
          '[On-Device-LLM-Datenschutzerklärung](https://on-device-llm-ff80d.web.app/privacy) — Datenverarbeitung, Analyse, Netzwerkanfragen und die lokale API; zuletzt aktualisiert am 24. August 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App für iPhone und Android.',
          '[ToolNeuron-Rezension](/de/power-local-llm/toolneuron-review) — eine quelloffene, verschlüsselte On-Device-KI-App für Android.',
          '[Google-AI-Edge-Gallery-Rezension](/de/power-local-llm/google-ai-edge-gallery-review) — Googles quelloffene On-Device-KI-App.',
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
    heroImage: '/images/on-device-llm-review-hero-es.webp',
    title: 'Análisis de On Device LLM: app de chat offline gratis para Android',
    seoTitle: 'Análisis de On Device LLM: chat de IA offline gratis',
    intro:
      'On Device LLM es una app de chat gratuita para Android que, según su ficha de Google Play y su política de privacidad, ejecuta modelos de lenguaje de pesos abiertos en el teléfono sin necesidad de cuenta. Google Play la titula «Local LLM»; es una app distinta de las apps para iPhone y Mac On Device AI y AI on Device. Este análisis refleja la ficha de la tienda y el sitio web y la política de privacidad del desarrollador, consultados el 26 de octubre de 2026.',
    metaDescription:
      'Análisis de On Device LLM: app gratuita de código cerrado para Android que dice ejecutar modelos abiertos offline, con GGUF y API local opcional.',
    twitterDescription:
      'Análisis de On Device LLM: una app gratuita y nueva para Android que dice ejecutar su IA sin conexión. Lo que afirman la ficha de Google Play y la política de privacidad, en qué difieren sobre las analíticas y lo que no está verificado.',
    audience:
      'Usuarios de Android que quieren una app de chat gratuita y offline con los modelos que elijan, y que necesitan saber qué confirman las fuentes, qué no confirman y lo reciente que es el proyecto.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de On Device LLM',
    targetKeywords: [
      'opiniones app on device llm',
      'app de llm local para android',
      'llm offline android gguf',
      'ejecutar llama 3.2 en un teléfono android',
      'api local compatible con openai en android',
      'com.ondevicellm',
      'on device llm vs pocketpal',
    ],
    current_models_mentioned: ['SmolLM2 360M', 'Qwen2.5 0.5B', 'TinyLlama 1.1B', 'Llama 3.2 1B', 'Qwen2.5 1.5B', 'Gemma 2 2B', 'Llama 3.2 3B'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**On Device LLM es una app gratuita y de código cerrado para Android que dice ejecutar en el teléfono modelos de pesos abiertos, como Llama 3.2, sin cuenta.** El proyecto es completamente nuevo, así que sus afirmaciones se apoyan en una ficha y una política que nadie ha probado de forma independiente.',
    quickAnswerTop: {
      es: {
        question: '¿On Device LLM funciona de verdad sin conexión?',
        answer:
          'Según su ficha y su política de privacidad, sí: una vez descargado un modelo, el chat se ejecuta en el teléfono sin internet y el texto de los mensajes nunca se envía a ningún sitio. Esto no se probó aquí, y la app sigue conectándose a la red para descargar modelos, leer una configuración al iniciarse y enviar analíticas.',
        bullets: [
          'Gratis en [Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm), para Android 7.0 o posterior de 64 bits.',
          'Siete modelos integrados, o un enlace pegado a cualquier archivo GGUF.',
          'Una API opcional compatible con OpenAI para otros dispositivos de tu red.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es On Device LLM?', anchor: 'what-is-on-device-llm' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
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
            text: 'On Device LLM es una app de código cerrado para Android que, según su desarrollador, ejecuta modelos de lenguaje de pesos abiertos en el teléfono sin cuenta, sin anuncios y sin servidor.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas desde Google Play, descargas uno de los siete modelos (o pegas un enlace a tu propio archivo GGUF) y chateas con él; el desarrollador no nombra el software que ejecuta los modelos.',
          },
        ],
        items: [
          'Desarrollador: una persona de la India, que figura en Google Play como Raushan kumar Pandey; la página de la tienda muestra además la firma «Feather AI».',
          'Antigüedad y alcance: la primera versión es la 1.0, actualizada por última vez el 11 de septiembre de 2026, y Google Play muestra más de 100 descargas, por lo que todavía no hay historial.',
          'Plataforma: Android 7.0 o posterior en dispositivos de 64 bits, solo a través de Google Play; no se encontró ninguna versión para iPhone, escritorio ni web.',
          'Mantenimiento: la última actualización tiene 45 días a fecha del 26 de octubre de 2026, por lo que no se aplica ninguna advertencia de abandono.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en la ficha de Google Play y en el sitio web y la política de privacidad del desarrollador, consultados el 26 de octubre de 2026. No se hizo ningún uso práctico, prueba comparativa ni inspección de la red.',
          },
        ],
      },
      overview: {
        id: 'what-is-on-device-llm',
        title: '¿Qué es On Device LLM?',
        content: [
          '**On Device LLM es una app de chat para Android que, según su ficha de Google Play, responde a los prompts con modelos de pesos abiertos que se ejecutan en el teléfono en lugar de en un servicio en la nube.** La ficha se titula «Local LLM», mientras que el sitio web y la política de privacidad del desarrollador la llaman «local LLM» y la describen como un chat de IA en el dispositivo para Android; este análisis usa «On Device LLM» para distinguirla de las apps para iPhone y Mac [On Device AI](/es/power-local-llm/on-device-ai-review) y [AI on Device](/es/power-local-llm/ai-on-device-review), que tienen otro desarrollador, otra plataforma y otro nombre de paquete.',
          'La ficha nombra como desarrollador a Raushan kumar Pandey, en la India; el paquete de Android es com.ondevicellm. La app se publica solo en Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**On Device LLM se instala desde Google Play como cualquier otra app de Android; no hace falta terminal ni cuenta.** La primera descarga de un modelo ocupa 369 MB o más, así que el primer uso necesita conexión y espacio libre.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) (instalación gratuita, Android 7.0 o posterior de 64 bits)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[on-device-llm-ff80d.web.app](https://on-device-llm-ff80d.web.app/) (sitio del desarrollador solo con páginas legales)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Política de privacidad](https://on-device-llm-ff80d.web.app/privacy) (última actualización: 24 de agosto de 2026)',
          },
        ],
        note: 'Versión analizada: 1.0, que Google Play muestra como actualizada por última vez el 11 de septiembre de 2026; las notas de la versión la llaman la primera versión. La ficha no nombra ningún repositorio de código fuente.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de la descripción de Google Play o de la política de privacidad.**',
        ],
        items: [
          '**Siete modelos integrados.** SmolLM2 360M, Qwen2.5 0.5B, TinyLlama 1.1B, Llama 3.2 1B, Qwen2.5 1.5B, Gemma 2 2B y Llama 3.2 3B, cada uno con su tamaño de descarga visible antes de decidirte; se puede cambiar de modelo sin salir del chat.',
          '**Tus propios modelos.** Puedes pegar un enlace directo a cualquier archivo GGUF.',
          '**Chats guardados.** Las conversaciones se guardan en una base de datos del dispositivo, los títulos los escribe el modelo, el markdown y los bloques de código se muestran con copia en un toque, y se pueden borrar todos los chats a la vez.',
          '**API local opcional.** Un endpoint HTTP compatible con OpenAI en el puerto 11434 permite que curl, el SDK de Python o tus propios scripts usen el modelo del teléfono por Wi-Fi o USB, con streaming. Viene desactivado por defecto y muestra una notificación mientras está activo.',
          '**Requisitos.** La ficha indica aproximadamente de 1 a 3 GB de RAM libre según el modelo, y dice que los modelos más grandes son notablemente más lentos en teléfonos antiguos.',
        ],
        note: 'La descripción de la tienda y la política de privacidad coinciden en estos puntos. La compilación instalada es la que tiene la última palabra.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**Según la política de privacidad, los mensajes y las respuestas se quedan en una base de datos privada del dispositivo y ningún prompt se envía nunca a un servidor.** No hay cuenta, y la ficha dice que no hay anuncios. La sección Seguridad de los datos de Google Play dice «No data collected» y «No data shared with third parties».',
          'La política es más detallada que esa tarjeta. Dice que la app usa Google Firebase Analytics para registrar eventos anónimos: nombres de eventos, el nombre del modelo, la longitud del mensaje en caracteres (no el texto), duraciones, un identificador anónimo de la instancia de la app e información estándar del dispositivo. También enumera las descargas de modelos desde el host que elijas (por defecto huggingface.co) y una consulta de solo lectura a Google Cloud Firestore al iniciar la app para obtener el catálogo de modelos y comprobar actualizaciones. Las dos declaraciones difieren en las analíticas, por lo que la política es la fuente más completa.',
          'La API local opcional no tiene autenticación: la política dice que cualquier dispositivo de tu red que pueda llegar al teléfono puede enviar prompts y leer las respuestas, y recomienda activarla solo en redes de confianza.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app es de código cerrado, por lo que ninguna de estas afirmaciones se puede comprobar en el código, y PromptQuorum no ha auditado el tráfico de red. Quien maneje material confidencial debería verificar el comportamiento en su propio dispositivo primero.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Android que quieren una app de chat gratuita y offline con los modelos que elijan.** La importación de enlaces GGUF es el principal motivo para probarla.',
          '**Desarrolladores que quieren un endpoint alojado en el teléfono dentro de una red de confianza.** La API local es el otro.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en la práctica.** No se probaron la velocidad, el consumo de batería ni la calidad de las respuestas, y nadie aquí confirmó que el chat funcione en modo avión.',
          '**El motor de ejecución.** La ficha dice que los modelos son archivos GGUF, pero no nombra el motor de inferencia.',
          '**Licencia y código fuente.** No se encontró ningún repositorio público, por lo que la app se trata como de código cerrado; además, cada modelo lleva la licencia de su propio editor.',
          '**Compras dentro de la app.** La instalación es gratuita y la descripción no menciona compras ni anuncios, pero la tarjeta de Seguridad de los datos no indica un modelo de negocio.',
          '**El contacto del desarrollador.** La política de privacidad muestra una dirección de contacto de ejemplo (SUPPORT@EXAMPLE.COM); el correo de soporte figura en la ficha de Google Play.',
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
            'Diferencia clave': 'Cliente de chat en el dispositivo de código abierto con su propia biblioteca de modelos',
          },
          {
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat offline de código abierto con preguntas sobre documentos en el dispositivo y pruebas comparativas',
          },
          {
            'App': '[ToolNeuron](/es/power-local-llm/toolneuron-review)',
            'Plataformas': 'Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App de IA en el dispositivo, de código abierto y cifrada, para Android',
          },
          {
            'App': '[Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'App de código abierto en el dispositivo del equipo de AI Edge de Google',
          },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿On Device LLM es lo mismo que On Device AI o AI on Device?',
            a: 'No. Esas son apps distintas para iPhone y Mac de otros desarrolladores; esta es una app para Android con el nombre de paquete com.ondevicellm.',
          },
          {
            q: '¿Puedo usar un modelo que no está en la lista?',
            a: 'La ficha dice que puedes pegar un enlace directo a cualquier modelo GGUF. Que un modelo concreto funcione bien depende de la RAM de tu teléfono, y su licencia la fija su editor.',
          },
          {
            q: '¿Funciona en iPhone o en el escritorio?',
            a: 'No se encontró ninguna versión así; el sitio web del desarrollador la describe como un chat de IA en el dispositivo para Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'On Device LLM es una app de chat gratuita para Android con una propuesta offline clara, importación de enlaces GGUF y una API local, pero se lanzó hace poco, es de código cerrado y suma más de 100 descargas, y sus afirmaciones sobre el uso offline y la privacidad no están probadas. Encaja con quien quiera probar un asistente pequeño y sin cuenta y acepte esos riesgos; quien busque un cliente de código abierto y consolidado debería comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Private Mind](/es/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[On Device LLM en Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) — descripción, notas de la versión, fecha de actualización, número de descargas y sección Seguridad de los datos, consultado el 26 de octubre de 2026.',
          '[Sitio web de On Device LLM](https://on-device-llm-ff80d.web.app/) — el sitio del desarrollador, consultado el 26 de octubre de 2026.',
          '[Política de privacidad de On Device LLM](https://on-device-llm-ff80d.web.app/privacy) — tratamiento de datos, analíticas, solicitudes de red y la API local; última actualización: 24 de agosto de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat en el dispositivo gratuito y de código abierto para iOS y Android.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita y con licencia MIT para iPhone y Android.',
          '[Análisis de ToolNeuron](/es/power-local-llm/toolneuron-review) — una app de IA en el dispositivo, de código abierto y cifrada, para Android.',
          '[Análisis de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app de IA en el dispositivo de código abierto de Google.',
          '[Las mejores apps de LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el resumen más amplio para Android.',
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
    heroImage: '/images/on-device-llm-review-hero-fr.webp',
    title: 'Avis On Device LLM : appli de chat IA gratuite hors ligne pour Android',
    seoTitle: 'Avis On Device LLM : chat IA gratuit hors ligne Android',
    intro:
      'On Device LLM est une application de chat gratuite pour Android qui, selon sa fiche Google Play et sa politique de confidentialité, exécute des modèles de langage à poids ouverts sur le téléphone, sans compte. Google Play l\'intitule « Local LLM » ; c\'est une autre application que les applications iPhone et Mac On Device AI et AI on Device. Cet avis reflète la fiche de la boutique ainsi que le site web et la politique de confidentialité du développeur, consultés le 26 octobre 2026.',
    metaDescription:
      'Avis On Device LLM : appli Android gratuite, à code fermé, qui dit exécuter des modèles ouverts hors ligne, avec import GGUF et API locale en option.',
    twitterDescription:
      'Avis On Device LLM : une nouvelle appli Android gratuite dont l\'IA fonctionnerait hors ligne. Ce que disent la fiche Google Play et la politique de confidentialité, leurs écarts sur l\'analytique et ce qui n\'est pas vérifié.',
    audience:
      'Utilisateurs d\'Android qui veulent une application de chat gratuite et hors ligne avec le choix de leurs propres modèles, et qui ont besoin de savoir ce que les sources confirment, ce qu\'elles ne confirment pas et à quel point le projet est récent.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis On Device LLM',
    targetKeywords: [
      'avis application on device llm',
      'application llm local android',
      'llm hors ligne android gguf',
      'exécuter llama 3.2 sur téléphone android',
      'api locale compatible openai android',
      'com.ondevicellm',
      'on device llm vs pocketpal',
    ],
    current_models_mentioned: ['SmolLM2 360M', 'Qwen2.5 0.5B', 'TinyLlama 1.1B', 'Llama 3.2 1B', 'Qwen2.5 1.5B', 'Gemma 2 2B', 'Llama 3.2 3B'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**On Device LLM est une application Android gratuite, à code source fermé, qui affirme exécuter sur le téléphone, sans compte, des modèles à poids ouverts tels que Llama 3.2.** Le projet est tout récent : ses affirmations reposent sur une fiche et une politique que personne n\'a testées de façon indépendante.',
    quickAnswerTop: {
      fr: {
        question: 'On Device LLM fonctionne-t-elle vraiment hors ligne ?',
        answer:
          'Selon sa fiche et sa politique de confidentialité, oui : une fois un modèle téléchargé, le chat s\'exécute sur le téléphone sans internet, et le texte des messages n\'est envoyé nulle part. Cela n\'a pas été testé ici, et l\'application contacte tout de même le réseau pour télécharger les modèles, lire une configuration au démarrage et envoyer des données d\'analytique.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm), pour Android 7.0 ou version ultérieure en 64 bits.',
          'Sept modèles intégrés, ou un lien collé vers n\'importe quel fichier GGUF.',
          'Une API facultative compatible OpenAI pour d\'autres appareils de votre réseau.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que On Device LLM ?', anchor: 'what-is-on-device-llm' },
      { label: 'Où la télécharger', anchor: 'get-it' },
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
            text: 'On Device LLM est une application Android à code source fermé qui, selon son développeur, exécute des modèles de langage à poids ouverts sur le téléphone, sans compte, sans publicité et sans serveur.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez depuis Google Play, téléchargez l\'un des sept modèles (ou collez un lien vers votre propre fichier GGUF) et discutez avec lui ; le développeur ne nomme pas le logiciel qui exécute les modèles.',
          },
        ],
        items: [
          'Développeur : un particulier en Inde, indiqué sur Google Play sous le nom de Raushan kumar Pandey ; la page de la boutique affiche aussi la mention « Feather AI ».',
          'Ancienneté et audience : la première version est la 1.0, mise à jour le 11 septembre 2026, et Google Play affiche plus de 100 téléchargements ; il n\'y a donc encore aucun historique.',
          'Plateforme : Android 7.0 ou version ultérieure sur appareils 64 bits, uniquement via Google Play ; aucune version pour iPhone, ordinateur ou web n\'a été trouvée.',
          'Maintenance : la dernière mise à jour date de 45 jours au 26 octobre 2026 ; aucun avertissement d\'obsolescence ne s\'applique donc.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur la fiche Google Play ainsi que sur le site web et la politique de confidentialité du développeur, consultés le 26 octobre 2026. Aucune utilisation pratique, aucun benchmark ni aucune inspection du réseau n\'ont été réalisés.',
          },
        ],
      },
      overview: {
        id: 'what-is-on-device-llm',
        title: 'Qu\'est-ce que On Device LLM ?',
        content: [
          '**On Device LLM est une application de chat pour Android qui, selon sa fiche Google Play, répond aux requêtes avec des modèles à poids ouverts exécutés sur le téléphone plutôt que par un service cloud.** La fiche s\'intitule « Local LLM », tandis que le site web et la politique de confidentialité du développeur parlent de « local LLM » et décrivent un chat IA sur l\'appareil pour Android ; cet avis emploie « On Device LLM » pour la distinguer des applications iPhone et Mac [On Device AI](/fr/power-local-llm/on-device-ai-review) et [AI on Device](/fr/power-local-llm/ai-on-device-review), dont le développeur, la plateforme et le nom de paquet sont différents.',
          'La fiche désigne comme développeur Raushan kumar Pandey, en Inde ; le paquet Android est com.ondevicellm. L\'application n\'est publiée que sur Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**On Device LLM s\'installe depuis Google Play comme n\'importe quelle autre application Android ; ni terminal ni compte ne sont nécessaires.** Le premier téléchargement de modèle pèse 369 Mo ou plus : le premier lancement exige donc une connexion et de l\'espace de stockage libre.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) (installation gratuite, Android 7.0 ou version ultérieure en 64 bits)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[on-device-llm-ff80d.web.app](https://on-device-llm-ff80d.web.app/) (site du développeur, pages juridiques uniquement)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité](https://on-device-llm-ff80d.web.app/privacy) (dernière mise à jour le 24 août 2026)',
          },
        ],
        note: 'Version examinée : 1.0, indiquée sur Google Play comme mise à jour le 11 septembre 2026 ; les notes de version la présentent comme la première version. La fiche ne mentionne aucun dépôt de code source.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Google Play ou de la politique de confidentialité.**',
        ],
        items: [
          '**Sept modèles intégrés.** SmolLM2 360M, Qwen2.5 0.5B, TinyLlama 1.1B, Llama 3.2 1B, Qwen2.5 1.5B, Gemma 2 2B et Llama 3.2 3B, chacun affichant sa taille de téléchargement avant que vous vous engagiez ; on peut changer de modèle sans quitter la conversation.',
          '**Vos propres modèles.** Vous pouvez coller un lien direct vers n\'importe quel fichier GGUF.',
          '**Conversations enregistrées.** Les conversations sont stockées dans une base de données sur l\'appareil, les titres sont rédigés par le modèle, le markdown et les blocs de code s\'affichent avec copie en un geste, et toutes les conversations peuvent être effacées d\'un coup.',
          '**API locale facultative.** Un point d\'accès HTTP compatible OpenAI sur le port 11434 permet à curl, au SDK Python ou à vos propres scripts d\'utiliser le modèle du téléphone via le Wi-Fi ou l\'USB, avec streaming. Il est désactivé par défaut et affiche une notification lorsqu\'il est actif.',
          '**Configuration requise.** La fiche indique environ 1 à 3 Go de RAM libre selon le modèle, et précise que les grands modèles sont nettement plus lents sur les téléphones anciens.',
        ],
        note: 'La description de la boutique et la politique de confidentialité concordent sur ces points. La build installée fait foi.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Selon la politique de confidentialité, les messages et les réponses restent dans une base de données privée sur l\'appareil, et aucune requête n\'est jamais envoyée à un serveur.** Il n\'y a pas de compte, et la fiche indique l\'absence de publicité. La section Sécurité des données de Google Play affiche « Aucune donnée collectée » et « Aucune donnée partagée avec des tiers ».',
          'La politique est plus détaillée que cette fiche. Elle indique que l\'application utilise Google Firebase Analytics pour enregistrer des événements anonymes : noms d\'événements, nom du modèle, longueur des messages en caractères (et non le texte), durées, identifiant anonyme d\'instance de l\'application et informations standard sur l\'appareil. Elle mentionne aussi les téléchargements de modèles depuis l\'hôte que vous sélectionnez (par défaut huggingface.co) et une requête Google Cloud Firestore en lecture seule au démarrage, pour le catalogue de modèles et la recherche de mises à jour. Les deux textes divergent sur l\'analytique : la politique est donc la source la plus complète.',
          'L\'API locale facultative n\'a aucune authentification : selon la politique, tout appareil de votre réseau qui peut joindre le téléphone peut envoyer des requêtes et lire les réponses, et elle recommande de ne l\'activer que sur des réseaux de confiance.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'application étant à code source fermé, aucune de ces affirmations ne peut être vérifiée dans le code, et PromptQuorum n\'a pas audité le trafic réseau. Quiconque traite des documents confidentiels devrait d\'abord vérifier le comportement sur son propre appareil.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les utilisateurs d\'Android qui veulent une application de chat gratuite et hors ligne avec le choix de leurs propres modèles.** L\'import par lien GGUF est la principale raison de l\'essayer.',
          '**Les développeurs qui veulent un point d\'accès hébergé sur un téléphone, dans un réseau de confiance.** L\'API locale en est l\'autre.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Performances en pratique.** La vitesse, la consommation de batterie et la qualité des réponses n\'ont pas été testées, et personne ici n\'a confirmé que le chat fonctionne en mode avion.',
          '**Le moteur d\'exécution.** La fiche indique que les modèles sont des fichiers GGUF mais ne nomme pas le moteur d\'inférence.',
          '**Licence et code source.** Aucun dépôt public n\'a été trouvé ; l\'application est donc considérée comme à code source fermé, et chaque modèle porte aussi sa propre licence, définie par son éditeur.',
          '**Achats intégrés.** L\'installation est gratuite et la description ne mentionne ni achats ni publicité, mais la fiche Sécurité des données n\'indique aucun modèle économique.',
          '**Le contact du développeur.** La politique de confidentialité affiche une adresse de contact fictive (SUPPORT@EXAMPLE.COM) ; l\'e-mail d\'assistance figure sur la fiche Google Play.',
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
            'Application': '[ToolNeuron](/fr/power-local-llm/toolneuron-review)',
            'Plateformes': 'Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Application d\'IA open source et chiffrée sur l\'appareil pour Android',
          },
          {
            'Application': '[Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / Apache 2.0',
            'Différence clé': 'Application open source sur l\'appareil de l\'équipe Google AI Edge',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'On Device LLM est-elle la même chose que On Device AI ou AI on Device ?',
            a: 'Non. Ce sont des applications distinctes pour iPhone et Mac, éditées par d\'autres développeurs ; celle-ci est une application Android dont le nom de paquet est com.ondevicellm.',
          },
          {
            q: 'Puis-je utiliser un modèle qui ne figure pas dans la liste ?',
            a: 'La fiche indique que vous pouvez coller un lien direct vers n\'importe quel modèle GGUF. Le bon fonctionnement d\'un modèle donné dépend de la RAM de votre téléphone, et sa licence est fixée par son éditeur.',
          },
          {
            q: 'Fonctionne-t-elle sur iPhone ou sur ordinateur ?',
            a: 'Aucune version de ce type n\'a été trouvée ; le site du développeur la présente comme un chat IA sur l\'appareil pour Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'On Device LLM est une application de chat Android gratuite, avec un argumentaire hors ligne clair, un import de lien GGUF et une API locale, mais elle vient de sortir, est à code source fermé et compte plus de 100 téléchargements, et ses affirmations sur le hors ligne et la confidentialité n\'ont pas été testées. Elle convient aux lecteurs qui veulent essayer un petit assistant sans compte en acceptant ces risques ; ceux qui veulent un client open source et établi devraient comparer [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Private Mind](/fr/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[On Device LLM sur Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) — description, notes de version, date de mise à jour, nombre de téléchargements et section Sécurité des données, consultés le 26 octobre 2026.',
          '[Site web d\'On Device LLM](https://on-device-llm-ff80d.web.app/) — le site du développeur, consulté le 26 octobre 2026.',
          '[Politique de confidentialité d\'On Device LLM](https://on-device-llm-ff80d.web.app/privacy) — traitement des données, analytique, requêtes réseau et API locale ; dernière mise à jour le 24 août 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source gratuit sur l\'appareil pour iOS et Android.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite, sous licence MIT, pour iPhone et Android.',
          '[Avis ToolNeuron](/fr/power-local-llm/toolneuron-review) — une application d\'IA open source et chiffrée sur l\'appareil pour Android.',
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application d\'IA open source sur l\'appareil de Google.',
          '[Les meilleures applications de LLM local pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le comparatif Android plus large.',
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
    heroImage: '/images/on-device-llm-review-hero-ja.webp',
    title: 'On Device LLMレビュー:Android向けの無料オフラインチャットアプリ',
    seoTitle: 'On Device LLMレビュー:Android向け無料オフラインチャット',
    intro:
      'On Device LLMは、Google Playの掲載情報とプライバシーポリシーによれば、アカウントなしでオープンウェイトの言語モデルを端末上で動かす、Android向けの無料チャットアプリです。Google Playでの掲載タイトルは「Local LLM」で、iPhone・Mac向けのアプリOn Device AIやAI on Deviceとは別のアプリです。本レビューは、2026年10月26日に確認したストアの掲載情報と、開発者のウェブサイトおよびプライバシーポリシーに基づいています。',
    metaDescription:
      'On Device LLMレビュー:オフラインで動くとされる、無料でソース非公開のAndroidチャットアプリ。GGUFの読み込みとオプションのローカルAPIを備えます。',
    twitterDescription:
      'On Device LLMレビュー:AIがオフラインで動くとされる、新しい無料のAndroidアプリ。Google Playの掲載情報とプライバシーポリシーの主張、分析機能に関する両者の違い、未検証の点を解説します。',
    audience:
      '好きなモデルを選べる無料のオフラインチャットアプリを探しているAndroidユーザーで、情報源が何を確認していて何を確認していないのか、プロジェクトがどれほど新しいのかを知りたい方向け。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On Device LLM レビュー',
    targetKeywords: [
      'on device llm アプリ レビュー',
      'ローカル llm android アプリ',
      'オフライン llm android gguf',
      'android スマホ llama 3.2 動かす',
      'android ローカル openai互換 api',
      'com.ondevicellm',
      'on device llm pocketpal 比較',
    ],
    current_models_mentioned: ['SmolLM2 360M', 'Qwen2.5 0.5B', 'TinyLlama 1.1B', 'Llama 3.2 1B', 'Qwen2.5 1.5B', 'Gemma 2 2B', 'Llama 3.2 3B'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**On Device LLMは、Llama 3.2などのオープンウェイトモデルをアカウントなしで端末上で動かすとされる、無料でソース非公開のAndroidアプリです。** プロジェクトは公開されたばかりで、主張は掲載情報とポリシーに基づくものであり、第三者による検証は行われていません。',
    quickAnswerTop: {
      ja: {
        question: 'On Device LLMは本当にオフラインで動きますか?',
        answer:
          '掲載情報とプライバシーポリシーによれば、その通りです。モデルをダウンロードしたあとは、インターネットなしで端末上でチャットが動作し、メッセージの本文はどこにも送信されません。ただし、ここでは検証していません。また、アプリはモデルのダウンロード、起動時の設定の読み取り、分析のために引き続きネットワークに接続します。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm)で無料。64ビットのAndroid 7.0以降が対象。',
          '内蔵モデルは7種類。任意のGGUFファイルのリンクを貼り付けることもできる。',
          'ネットワーク上のほかの端末から使える、オプションのOpenAI互換API。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'On Device LLMとは?', anchor: 'what-is-on-device-llm' },
      { label: '入手方法', anchor: 'get-it' },
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
            text: 'On Device LLMは、ソース非公開のAndroidアプリで、開発者によれば、アカウントも広告もサーバーも使わず、オープンウェイトの言語モデルを端末上で動かす。',
          },
          {
            type: 'plain-terms',
            text: 'Google Playからインストールし、7種類のモデルのいずれか(または自分のGGUFファイルへのリンク)をダウンロードしてチャットします。モデルを動かすソフトウェアの名前は、開発者から明かされていません。',
          },
        ],
        items: [
          '開発元:インドの個人開発者で、Google PlayではRaushan kumar Pandeyと表示。ストアのページには「Feather AI」という表記も見られる。',
          '公開時期と利用実績:最初のリリースであるバージョン1.0の最終更新は2026年9月11日で、Google Playのダウンロード数は100+のため、実績はまだない。',
          'プラットフォーム:64ビット端末のAndroid 7.0以降で、Google Play経由のみ。iPhone版、デスクトップ版、ウェブ版は見つからなかった。',
          'メンテナンス:最終更新は2026年10月26日時点で45日前のため、更新停止の警告は該当しない。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月26日に確認したGoogle Playの掲載情報と、開発者のウェブサイトおよびプライバシーポリシーに基づいています。実機での使用、ベンチマーク、ネットワーク通信の調査は行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-on-device-llm',
        title: 'On Device LLMとは?',
        content: [
          '**On Device LLMは、Google Playの掲載情報によれば、クラウドサービスではなく端末上で動くオープンウェイトモデルでプロンプトに答える、Android向けのチャットアプリです。** 掲載タイトルは「Local LLM」で、開発者のウェブサイトとプライバシーポリシーでは「local LLM」と呼ばれ、Android向けの端末内AIチャットと説明されています。本レビューでは、開発者、プラットフォーム、パッケージ名が異なるiPhone・Mac向けのアプリ[On Device AI](/ja/power-local-llm/on-device-ai-review)や[AI on Device](/ja/power-local-llm/ai-on-device-review)と区別するため、「On Device LLM」と表記します。',
          '掲載情報は開発者をインドのRaushan kumar Pandeyとしており、Androidのパッケージ名はcom.ondevicellmです。アプリはGoogle Playでのみ公開されています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**On Device LLMは、ほかのAndroidアプリと同じようにGoogle Playからインストールします。ターミナルもアカウントも必要ありません。** 最初のモデルのダウンロードは369 MB以上のため、初回の起動には接続環境と空きストレージが必要です。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm)(無料でインストール、64ビットのAndroid 7.0以降)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[on-device-llm-ff80d.web.app](https://on-device-llm-ff80d.web.app/)(法的ページのみの開発者サイト)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[プライバシーポリシー](https://on-device-llm-ff80d.web.app/privacy)(最終更新は2026年8月24日)',
          },
        ],
        note: '確認したバージョン:1.0。Google Playでは最終更新日が2026年9月11日と表示されており、リリースノートでは最初のリリースとされています。掲載情報にはソースリポジトリの記載がありません。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、Google Playの説明文またはプライバシーポリシーに基づいています。**',
        ],
        items: [
          '**内蔵モデルは7種類。** SmolLM2 360M、Qwen2.5 0.5B、TinyLlama 1.1B、Llama 3.2 1B、Qwen2.5 1.5B、Gemma 2 2B、Llama 3.2 3B。選ぶ前にそれぞれのダウンロードサイズが表示され、チャットから離れずにモデルを切り替えられます。',
          '**自分のモデル。** 任意のGGUFファイルへの直接リンクを貼り付けられます。',
          '**チャットの保存。** 会話は端末上のデータベースに保存され、タイトルはモデルが付けます。Markdownとコードブロックが表示され、ワンタップでコピーでき、すべてのチャットを一括で消去できます。',
          '**オプションのローカルAPI。** ポート11434のOpenAI互換HTTPエンドポイントにより、curl、PythonのSDK、自作のスクリプトから、Wi-FiまたはUSB経由で端末のモデルを利用でき、ストリーミングにも対応します。初期状態ではオフで、有効な間は通知が表示されます。',
          '**要件。** 掲載情報には、モデルに応じて空きRAMがおよそ1〜3 GB必要と記載されており、古い端末では大きなモデルほど動作がかなり遅くなるとされています。',
        ],
        note: 'ストアの説明文とプライバシーポリシーは、これらの点で一致しています。最終的な判断基準は、インストールしたビルドです。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**プライバシーポリシーによれば、メッセージと返信は端末上の非公開データベースにとどまり、プロンプトがサーバーに送信されることはありません。** アカウントはなく、掲載情報には広告もないと書かれています。Google PlayのData safetyセクションには「No data collected」(収集されるデータなし)と「No data shared with third parties」(第三者とのデータ共有なし)とあります。',
          'ポリシーは、このカードより詳しい内容です。アプリはGoogle Firebase Analyticsを使って匿名のイベントを記録するとあり、記録されるのはイベント名、モデル名、メッセージの文字数(本文ではない)、所要時間、匿名のアプリインスタンスID、標準的な端末情報です。また、選択したホスト(デフォルトはhuggingface.co)からのモデルのダウンロードと、モデルカタログと更新確認のための、起動時の読み取り専用のGoogle Cloud Firestoreへのリクエストも挙げられています。分析に関しては両者の記述が異なるため、ポリシーのほうが詳しい情報源です。',
          'オプションのローカルAPIには認証がありません。ポリシーによれば、端末に到達できるネットワーク上のあらゆる機器がプロンプトを送信して返信を読み取れるため、信頼できるネットワークでのみ有効にするよう勧められています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'アプリはソース非公開のため、これらの主張をコードで確認することはできず、PromptQuorumはネットワーク通信の監査も行っていません。機密性の高い内容を扱う方は、先にご自身の端末で動作を確認してください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**好きなモデルを選べる、無料のオフラインチャットアプリを求めるAndroidユーザー。** GGUFのリンク読み込みが、試す最大の理由です。',
          '**信頼できるネットワーク上で、スマートフォンをホストにしたエンドポイントを使いたい開発者。** ローカルAPIが、もう一つの理由です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での性能。** 速度、バッテリー消費、回答の質は検証しておらず、機内モードでチャットが動くことも、ここでは誰も確認していません。',
          '**ランタイム。** 掲載情報にはモデルがGGUFファイルだと書かれていますが、推論エンジンの名前は記載されていません。',
          '**ライセンスとソースコード。** 公開リポジトリは見つからなかったため、アプリはソース非公開として扱っています。各モデルにも、提供元が定めた独自のライセンスがあります。',
          '**アプリ内課金。** インストールは無料で、説明文に課金や広告の記載はありませんが、Data safetyカードにはビジネスモデルが記載されていません。',
          '**開発者への連絡先。** プライバシーポリシーには仮の連絡先(SUPPORT@EXAMPLE.COM)が表示されており、サポート用のメールアドレスはGoogle Playの掲載情報にあります。',
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
            'アプリ': '[ToolNeuron](/ja/power-local-llm/toolneuron-review)',
            'プラットフォーム': 'Android',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': 'Android向けの、暗号化されたオープンソースの端末内AIアプリ',
          },
          {
            'アプリ': '[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'GoogleのAI Edgeチームによる、オープンソースの端末内アプリ',
          },
        ],
        note: '競合アプリの詳細は頻繁に変わります。現在の価格、ライセンス、対応プラットフォームは、各アプリの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'On Device LLMは、On Device AIやAI on Deviceと同じものですか?',
            a: 'いいえ。それらは別の開発者によるiPhone・Mac向けの別のアプリで、本アプリはパッケージ名がcom.ondevicellmのAndroidアプリです。',
          },
          {
            q: 'リストにないモデルも使えますか?',
            a: '掲載情報によれば、任意のGGUFモデルへの直接リンクを貼り付けられます。個々のモデルがうまく動くかどうかはスマートフォンのRAMしだいで、ライセンスは提供元が定めています。',
          },
          {
            q: 'iPhoneやデスクトップでも使えますか?',
            a: 'そのようなビルドは見つかりませんでした。開発者のウェブサイトは、Android向けの端末内AIチャットとして紹介しています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'On Device LLMは、オフラインを明確に打ち出し、GGUFのリンク読み込みとローカルAPIを備えた、無料のAndroid向けチャットアプリです。ただし、公開から日が浅く、ソースは非公開で、ダウンロード数は100+にとどまり、オフラインとプライバシーに関する主張は未検証です。アカウント不要の小さなアシスタントを試してみたく、これらのリスクを受け入れられる方に向いています。オープンソースで実績のあるクライアントを求める方は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Private Mind](/ja/power-local-llm/private-mind-review)と比較してみてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのOn Device LLM](https://play.google.com/store/apps/details?id=com.ondevicellm) — 説明文、リリースノート、更新日、ダウンロード数、Data safetyセクション。2026年10月26日に確認。',
          '[On Device LLMのウェブサイト](https://on-device-llm-ff80d.web.app/) — 開発者のサイト。2026年10月26日に確認。',
          '[On Device LLMのプライバシーポリシー](https://on-device-llm-ff80d.web.app/privacy) — データの扱い、分析、ネットワークリクエスト、ローカルAPI。最終更新は2026年8月24日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの、無料でオープンソースの端末内チャットクライアント。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けの、無料でMITライセンスのオフラインチャットアプリ。',
          '[ToolNeuronレビュー](/ja/power-local-llm/toolneuron-review) — Android向けの、暗号化されたオープンソースの端末内AIアプリ。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Googleのオープンソースの端末内AIアプリ。',
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
    heroImage: '/images/on-device-llm-review-hero-pt.webp',
    title: 'Análise do On Device LLM: app Android de chat offline grátis',
    seoTitle: 'Análise do On Device LLM: chat offline grátis para Android',
    intro:
      'O On Device LLM é um app de chat gratuito para Android que, segundo a ficha dele no Google Play e a política de privacidade, roda modelos de linguagem de pesos abertos no celular, sem conta. O Google Play o intitula “Local LLM”; ele é um app diferente dos apps para iPhone e Mac On Device AI e AI on Device. Esta análise reflete a ficha da loja, o site do desenvolvedor e a política de privacidade, consultados em 26 de outubro de 2026.',
    metaDescription:
      'Análise do On Device LLM: app Android grátis e de código fechado que diz rodar modelos abertos offline, com importação de GGUF e API local opcional.',
    twitterDescription:
      'Análise do On Device LLM: um app Android gratuito e novo que diz rodar a IA offline. O que a ficha do Google Play e a política de privacidade afirmam, como divergem sobre analytics e o que não foi verificado.',
    audience:
      'Usuários de Android que querem um app de chat offline gratuito, com escolha própria de modelos, e que precisam saber o que as fontes confirmam, o que não confirmam e quão novo é o projeto.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do On Device LLM',
    targetKeywords: [
      'on device llm app análise',
      'llm local android app',
      'llm offline android gguf',
      'rodar llama 3.2 no celular android',
      'api local compatível com openai android',
      'com.ondevicellm',
      'on device llm vs pocketpal',
    ],
    current_models_mentioned: ['SmolLM2 360M', 'Qwen2.5 0.5B', 'TinyLlama 1.1B', 'Llama 3.2 1B', 'Qwen2.5 1.5B', 'Gemma 2 2B', 'Llama 3.2 3B'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**O On Device LLM é um app Android gratuito e de código fechado que diz rodar modelos de pesos abertos, como o Llama 3.2, no celular, sem conta.** O projeto é novíssimo, então as afirmações dele se apoiam em uma ficha e em uma política que ninguém testou de forma independente.',
    quickAnswerTop: {
      pt: {
        question: 'O On Device LLM roda mesmo offline?',
        answer:
          'Segundo a ficha e a política de privacidade, sim: depois que um modelo é baixado, o chat roda no celular sem internet, e o texto das mensagens nunca é enviado a lugar nenhum. Isso não foi testado aqui, e o app ainda acessa a rede para baixar modelos, ler uma configuração na inicialização e enviar analytics.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm), para Android 7.0 ou posterior de 64 bits.',
          'Sete modelos integrados, ou um link colado para qualquer arquivo GGUF.',
          'Uma API opcional compatível com a da OpenAI para outros dispositivos da sua rede.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o On Device LLM?', anchor: 'what-is-on-device-llm' },
      { label: 'Como obter', anchor: 'get-it' },
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
            text: 'O On Device LLM é um app Android de código fechado que, segundo o desenvolvedor, roda modelos de linguagem de pesos abertos no celular, sem conta, sem anúncios e sem servidor.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app pelo Google Play, baixa um dos sete modelos (ou cola um link para o seu próprio arquivo GGUF) e conversa com ele; o desenvolvedor não informa qual software executa os modelos.',
          },
        ],
        items: [
          'Desenvolvedor: uma pessoa física na Índia, listada no Google Play como Raushan kumar Pandey; a página da loja também mostra a assinatura “Feather AI”.',
          'Idade e alcance: a primeira versão é a 1.0, atualizada pela última vez em 11 de setembro de 2026, e o Google Play mostra mais de 100 downloads, então ainda não há histórico.',
          'Plataforma: Android 7.0 ou posterior em dispositivos de 64 bits, somente pelo Google Play; não encontramos versão para iPhone, desktop ou web.',
          'Manutenção: a última atualização tem 45 dias em 26 de outubro de 2026, então nenhum aviso de abandono se aplica.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na ficha do Google Play, no site do desenvolvedor e na política de privacidade, consultados em 26 de outubro de 2026. Não foram feitos uso prático, benchmarks nem inspeção de rede.',
          },
        ],
      },
      overview: {
        id: 'what-is-on-device-llm',
        title: 'O que é o On Device LLM?',
        content: [
          '**O On Device LLM é um app de chat para Android que, segundo a ficha dele no Google Play, responde aos prompts com modelos de pesos abertos que rodam no celular, em vez de um serviço na nuvem.** A ficha tem o título “Local LLM”, enquanto o site do desenvolvedor e a política de privacidade o chamam de “local LLM” e descrevem um chat de IA no dispositivo para Android; esta análise usa “On Device LLM” para diferenciá-lo dos apps para iPhone e Mac [On Device AI](/pt/power-local-llm/on-device-ai-review) e [AI on Device](/pt/power-local-llm/ai-on-device-review), que têm outro desenvolvedor, outra plataforma e outro nome de pacote.',
          'A ficha indica como desenvolvedor Raushan kumar Pandey, na Índia; o pacote Android é com.ondevicellm. O app é publicado somente no Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O On Device LLM é instalado pelo Google Play como qualquer outro app Android; não há terminal nem conta.** O primeiro download de modelo tem 369 MB ou mais, então a primeira execução exige conexão e espaço livre.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) (instalação gratuita, Android 7.0 ou posterior de 64 bits)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[on-device-llm-ff80d.web.app](https://on-device-llm-ff80d.web.app/) (site do desenvolvedor, apenas com páginas legais)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Política de privacidade](https://on-device-llm-ff80d.web.app/privacy) (atualizada pela última vez em 24 de agosto de 2026)',
          },
        ],
        note: 'Versão analisada: 1.0, que o Google Play mostra como atualizada pela última vez em 11 de setembro de 2026; as notas da versão a chamam de primeira versão. A ficha não indica nenhum repositório de código-fonte.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm da descrição do Google Play ou da política de privacidade.**',
        ],
        items: [
          '**Sete modelos integrados.** SmolLM2 360M, Qwen2.5 0.5B, TinyLlama 1.1B, Llama 3.2 1B, Qwen2.5 1.5B, Gemma 2 2B e Llama 3.2 3B, cada um mostrando o tamanho do download antes de você se comprometer; é possível trocar de modelo sem sair do chat.',
          '**Seus próprios modelos.** Você pode colar um link direto para qualquer arquivo GGUF.',
          '**Conversas salvas.** As conversas ficam em um banco de dados no dispositivo, os títulos são escritos pelo modelo, markdown e blocos de código são renderizados com cópia em um toque, e todas as conversas podem ser apagadas de uma vez.',
          '**API local opcional.** Um endpoint HTTP compatível com o da OpenAI na porta 11434 permite que curl, o SDK de Python ou os seus próprios scripts usem o modelo do celular por Wi-Fi ou USB, com streaming. Ele vem desativado por padrão e mostra uma notificação enquanto está ativo.',
          '**Requisitos.** A ficha indica cerca de 1 a 3 GB de RAM livre, conforme o modelo, e diz que modelos maiores ficam visivelmente mais lentos em celulares mais antigos.',
        ],
        note: 'A descrição da loja e a política de privacidade concordam nesses pontos. A versão instalada é a palavra final.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**Segundo a política de privacidade, as mensagens e as respostas ficam em um banco de dados privado no dispositivo, e nenhum prompt é enviado a um servidor.** Não há conta, e a ficha diz que não há anúncios. A seção Segurança dos dados do Google Play diz “Nenhum dado coletado” e “Nenhum dado compartilhado com terceiros”.',
          'A política é mais detalhada que esse cartão. Ela diz que o app usa o Google Firebase Analytics para registrar eventos anônimos: nomes de eventos, o nome do modelo, o tamanho da mensagem em caracteres (não o texto), durações, um ID anônimo da instância do app e informações padrão do dispositivo. Ela também lista os downloads de modelos a partir do host que você selecionar (por padrão, huggingface.co) e uma requisição somente de leitura ao Google Cloud Firestore na inicialização, para o catálogo de modelos e a verificação de atualizações. As duas declarações divergem sobre analytics, então a política é a fonte mais completa.',
          'A API local opcional não tem autenticação: a política diz que qualquer dispositivo da sua rede que consiga alcançar o celular pode enviar prompts e ler as respostas, e recomenda ativá-la apenas em redes confiáveis.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app é de código fechado, então nenhuma dessas afirmações pode ser conferida no código, e a PromptQuorum não auditou o tráfego de rede. Quem lida com material confidencial deve verificar o comportamento no próprio aparelho antes.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Usuários de Android que querem um app de chat offline gratuito, com escolha própria de modelos.** A importação por link de GGUF é o principal motivo para experimentá-lo.',
          '**Desenvolvedores que querem um endpoint hospedado no celular em uma rede confiável.** A API local é o outro.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** Velocidade, consumo de bateria e qualidade das respostas não foram testados, e ninguém aqui confirmou que o chat funciona no modo avião.',
          '**O runtime.** A ficha diz que os modelos são arquivos GGUF, mas não informa qual é o mecanismo de inferência.',
          '**Licença e código-fonte.** Nenhum repositório público foi encontrado, então o app é tratado como de código fechado; cada modelo também tem a própria licença, definida por quem o publica.',
          '**Compras no app.** A instalação é gratuita e a descrição não cita compras nem anúncios, mas o cartão Segurança dos dados não informa um modelo de negócio.',
          '**O contato do desenvolvedor.** A política de privacidade mostra um endereço de contato provisório (SUPPORT@EXAMPLE.COM); o e-mail de suporte está na ficha do Google Play.',
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
            'Diferença principal': 'Cliente de chat de código aberto no dispositivo, com biblioteca própria de modelos',
          },
          {
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat offline de código aberto, com perguntas e respostas sobre documentos no dispositivo e benchmarks',
          },
          {
            'App': '[ToolNeuron](/pt/power-local-llm/toolneuron-review)',
            'Plataformas': 'Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'App de IA no dispositivo, de código aberto e criptografado, para Android',
          },
          {
            'App': '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'App de código aberto no dispositivo, da equipe de AI Edge do Google',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais de cada app na ficha dele.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O On Device LLM é o mesmo que On Device AI ou AI on Device?',
            a: 'Não. Esses são apps separados para iPhone e Mac, de outros desenvolvedores; este é um app Android com o nome de pacote com.ondevicellm.',
          },
          {
            q: 'Posso usar um modelo que não está na lista?',
            a: 'A ficha diz que você pode colar um link direto para qualquer modelo GGUF. Se um determinado modelo roda bem depende da RAM do seu celular, e a licença dele é definida por quem o publica.',
          },
          {
            q: 'Funciona no iPhone ou no desktop?',
            a: 'Não encontramos nenhuma versão assim; o site do desenvolvedor o descreve como um chat de IA no dispositivo para Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O On Device LLM é um app Android gratuito de chat, com uma proposta offline clara, importação de GGUF por link e uma API local, mas é novíssimo, de código fechado e tem mais de 100 downloads, e as afirmações dele sobre uso offline e privacidade não foram testadas. Serve para quem quer experimentar um assistente pequeno e sem conta e aceita esses riscos; quem quer um cliente de código aberto e consolidado deve comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Private Mind](/pt/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[On Device LLM no Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) — descrição, notas da versão, data de atualização, número de downloads e seção Segurança dos dados, consultados em 26 de outubro de 2026.',
          '[Site do On Device LLM](https://on-device-llm-ff80d.web.app/) — o site do desenvolvedor, consultado em 26 de outubro de 2026.',
          '[Política de privacidade do On Device LLM](https://on-device-llm-ff80d.web.app/privacy) — tratamento de dados, analytics, requisições de rede e a API local; atualizada pela última vez em 24 de agosto de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no dispositivo, para iOS e Android.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
          '[Análise do ToolNeuron](/pt/power-local-llm/toolneuron-review) — um app de IA no dispositivo, de código aberto e criptografado, para Android.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app de IA no dispositivo, de código aberto, do Google.',
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
    heroImage: '/images/on-device-llm-review-hero-ar.webp',
    title: 'مراجعة On Device LLM: تطبيق دردشة مجاني دون اتصال لـ Android',
    seoTitle: 'مراجعة On Device LLM: دردشة Android مجانية دون اتصال',
    intro:
      'On Device LLM تطبيق دردشة مجاني لنظام Android يشغّل، بحسب صفحته على Google Play وسياسة الخصوصية، نماذج لغوية مفتوحة الأوزان على الهاتف دون حساب. تعنونه Google Play بـ «Local LLM»، وهو تطبيق مختلف عن تطبيقَي iPhone وMac المسميين On Device AI وAI on Device. تعكس هذه المراجعة صفحة المتجر وموقع المطوّر وسياسة الخصوصية، كما جرى التحقق منها في 26 أكتوبر 2026.',
    metaDescription:
      'مراجعة On Device LLM: تطبيق دردشة مجاني ومغلق المصدر على Android يقول إنه يشغّل نماذج مفتوحة الأوزان دون اتصال، مع استيراد GGUF وواجهة API محلية اختيارية.',
    twitterDescription:
      'مراجعة On Device LLM: تطبيق Android مجاني وجديد يقول إن ذكاءه الاصطناعي يعمل دون اتصال. ما تدّعيه صفحة Google Play وسياسة الخصوصية، وكيف تختلفان في التحليلات، وما لم يُتحقق منه.',
    audience:
      'مستخدمو Android الذين يريدون تطبيق دردشة مجانياً يعمل دون اتصال مع اختيار نماذجهم بأنفسهم، ويحتاجون إلى معرفة ما تؤكده المصادر وما لا تؤكده، ومدى حداثة المشروع.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة On Device LLM',
    targetKeywords: [
      'مراجعة تطبيق on device llm',
      'تطبيق llm محلي android',
      'نموذج لغوي دون اتصال android gguf',
      'تشغيل llama 3.2 على هاتف android',
      'واجهة api محلية متوافقة مع openai على android',
      'com.ondevicellm',
      'on device llm مقابل pocketpal',
    ],
    current_models_mentioned: ['SmolLM2 360M', 'Qwen2.5 0.5B', 'TinyLlama 1.1B', 'Llama 3.2 1B', 'Qwen2.5 1.5B', 'Gemma 2 2B', 'Llama 3.2 3B'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**On Device LLM تطبيق مجاني مغلق المصدر لنظام Android يقول إنه يشغّل نماذج مفتوحة الأوزان مثل Llama 3.2 على الهاتف دون حساب.** المشروع جديد تماماً، لذا تستند ادعاءاته إلى صفحة متجر وسياسة خصوصية لم يختبرهما أحد بصورة مستقلة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل On Device LLM فعلاً دون اتصال؟',
        answer:
          'بحسب صفحته وسياسة الخصوصية، نعم: بعد تنزيل النموذج تعمل الدردشة على الهاتف دون إنترنت، ولا يُرسل نص الرسائل إلى أي جهة. لم يُختبر هذا هنا، ولا يزال التطبيق يتصل بالشبكة لتنزيل النماذج وقراءة إعدادات عند بدء التشغيل وإرسال التحليلات.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm)، لنظام Android 7.0 أو أحدث بمعمارية 64 بت.',
          'سبعة نماذج مدمجة، أو رابط تلصقه لأي ملف GGUF.',
          'واجهة API اختيارية متوافقة مع OpenAI لأجهزة أخرى على شبكتك.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو On Device LLM؟', anchor: 'what-is-on-device-llm' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
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
            text: 'On Device LLM تطبيق مغلق المصدر لنظام Android يشغّل، بحسب مطوّره، نماذج لغوية مفتوحة الأوزان على الهاتف دون حساب ودون إعلانات ودون خادم.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من Google Play وتنزّل أحد سبعة نماذج (أو تلصق رابطاً لملف GGUF خاص بك) وتدردش معه؛ ولا يذكر المطوّر اسم البرنامج الذي يشغّل النماذج.',
          },
        ],
        items: [
          'المطوّر: فرد في الهند، مدرج على Google Play باسم Raushan kumar Pandey؛ وتعرض صفحة المتجر أيضاً العبارة «Feather AI».',
          'العمر والانتشار: الإصدار الأول هو 1.0، وآخر تحديث له في 11 سبتمبر 2026، وتعرض Google Play أكثر من 100 تنزيل، لذا لا يوجد سجل سابق بعد.',
          'المنصة: Android 7.0 أو أحدث على أجهزة 64 بت عبر Google Play فقط؛ ولم نعثر على نسخة لـ iPhone أو سطح المكتب أو الويب.',
          'الصيانة: مضى 45 يوماً على آخر تحديث حتى 26 أكتوبر 2026، لذا لا ينطبق تحذير انقطاع التحديثات.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة Google Play وموقع المطوّر وسياسة الخصوصية، وقد جرى التحقق منها في 26 أكتوبر 2026. لم يُجرَ أي استخدام فعلي أو اختبار أداء أو فحص لحركة الشبكة.',
          },
        ],
      },
      overview: {
        id: 'what-is-on-device-llm',
        title: 'ما هو On Device LLM؟',
        content: [
          '**On Device LLM تطبيق دردشة لنظام Android يجيب عن الأسئلة، بحسب صفحته على Google Play، بنماذج مفتوحة الأوزان تعمل على الهاتف بدلاً من خدمة سحابية.** عنوان الصفحة «Local LLM»، بينما يسمّيه موقع المطوّر وسياسة الخصوصية «local LLM» ويصفانه بأنه دردشة ذكاء اصطناعي على الجهاز لنظام Android؛ وتستخدم هذه المراجعة الاسم «On Device LLM» للتمييز بينه وبين تطبيقَي iPhone وMac [On Device AI](/ar/power-local-llm/on-device-ai-review) و[AI on Device](/ar/power-local-llm/ai-on-device-review)، وهما بمطوّر ومنصة واسم حزمة مختلفة.',
          'تذكر الصفحة أن المطوّر هو Raushan kumar Pandey في الهند؛ واسم حزمة Android هو com.ondevicellm. والتطبيق منشور على Google Play فقط.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت On Device LLM من Google Play مثل أي تطبيق Android آخر؛ دون طرفية أو حساب.** يبلغ أول تنزيل للنموذج 369 MB أو أكثر، لذا يتطلب أول تشغيل اتصالاً بالإنترنت ومساحة تخزين فارغة.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'Android',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) (تثبيت مجاني، Android 7.0 أو أحدث بمعمارية 64 بت)',
          },
          {
            'المنصة': 'الموقع',
            'مكان الحصول عليه': '[on-device-llm-ff80d.web.app](https://on-device-llm-ff80d.web.app/) (موقع المطوّر، صفحات قانونية فقط)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية](https://on-device-llm-ff80d.web.app/privacy) (آخر تحديث في 24 أغسطس 2026)',
          },
        ],
        note: 'الإصدار الذي جرت مراجعته: 1.0، وتعرضه Google Play بآخر تحديث في 11 سبتمبر 2026؛ وتصفه ملاحظات الإصدار بأنه الإصدار الأول. ولا تذكر الصفحة أي مستودع للكود المصدري.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من وصف Google Play أو سياسة الخصوصية.**',
        ],
        items: [
          '**سبعة نماذج مدمجة.** SmolLM2 360M وQwen2.5 0.5B وTinyLlama 1.1B وLlama 3.2 1B وQwen2.5 1.5B وGemma 2 2B وLlama 3.2 3B، ويعرض كل منها حجم تنزيله قبل أن تلتزم به؛ ويمكن التبديل بين النماذج دون مغادرة الدردشة.',
          '**نماذجك الخاصة.** يمكنك لصق رابط مباشر لأي ملف GGUF.',
          '**محادثات محفوظة.** تُخزَّن المحادثات في قاعدة بيانات على الجهاز، ويكتب النموذج العناوين، وتُعرض صيغة markdown وكتل الكود مع نسخ بنقرة واحدة، ويمكن مسح كل المحادثات دفعة واحدة.',
          '**واجهة API محلية اختيارية.** نقطة نهاية HTTP متوافقة مع OpenAI على المنفذ 11434 تتيح لـ curl أو Python SDK أو سكربتاتك استخدام نموذج الهاتف عبر Wi-Fi أو USB مع البث. وهي معطّلة افتراضياً وتعرض إشعاراً أثناء تفعيلها.',
          '**المتطلبات.** تذكر الصفحة نحو 1 إلى 3 GB من ذاكرة RAM الفارغة بحسب النموذج، وتقول إن النماذج الأكبر أبطأ بوضوح على الهواتف الأقدم.',
        ],
        note: 'يتفق وصف المتجر وسياسة الخصوصية على هذه النقاط. والنسخة المثبّتة هي المرجع الأخير.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**بحسب سياسة الخصوصية، تبقى الرسائل والردود في قاعدة بيانات خاصة على الجهاز، ولا يُرسل أي موجّه إلى خادم.** لا يوجد حساب، وتقول الصفحة إنه لا توجد إعلانات. ويذكر قسم Data safety في Google Play عبارتَي «No data collected» و«No data shared with third parties».',
          'السياسة أكثر تفصيلاً من هذه البطاقة. فهي تقول إن التطبيق يستخدم Google Firebase Analytics لتسجيل أحداث مجهولة: أسماء الأحداث واسم النموذج وطول الرسالة بالأحرف (لا نصها) والمدد ومعرّف مجهول لنسخة التطبيق ومعلومات الجهاز القياسية. وتذكر أيضاً تنزيل النماذج من المضيف الذي تختاره (huggingface.co افتراضياً) وطلب قراءة فقط إلى Google Cloud Firestore عند بدء التشغيل لكتالوج النماذج والتحقق من التحديثات. ويختلف القولان في شأن التحليلات، لذا تُعدّ السياسة المصدر الأشمل.',
          'لا تتطلب واجهة API المحلية الاختيارية أي مصادقة: تقول السياسة إن أي جهاز على شبكتك يستطيع الوصول إلى الهاتف يمكنه إرسال موجّهات وقراءة الردود، وتنصح بتفعيلها فقط على شبكات تثق بها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'التطبيق مغلق المصدر، لذا لا يمكن التحقق من أي من هذه الادعاءات في الكود، ولم تدقق PromptQuorum حركة الشبكة. وينبغي لمن يتعامل مع مواد سرية أن يتحقق من السلوك على جهازه أولاً.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Android الذين يريدون تطبيق دردشة مجانياً يعمل دون اتصال مع اختيار نماذجهم بأنفسهم.** استيراد GGUF عبر رابط هو السبب الرئيسي لتجربته.',
          '**المطوّرون الذين يريدون نقطة نهاية يستضيفها الهاتف على شبكة موثوقة.** وواجهة API المحلية هي السبب الآخر.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لم تُختبر السرعة واستهلاك البطارية وجودة الإجابات، ولم يؤكد أحد هنا أن الدردشة تعمل في وضع الطيران.',
          '**بيئة التشغيل.** تقول الصفحة إن النماذج ملفات GGUF لكنها لا تسمّي محرك الاستدلال.',
          '**الترخيص والكود المصدري.** لم نعثر على مستودع عام، لذا يُعامل التطبيق بوصفه مغلق المصدر؛ ويحمل كل نموذج أيضاً ترخيصه الخاص من ناشره.',
          '**المشتريات داخل التطبيق.** التثبيت مجاني ولا يذكر الوصف أي مشتريات أو إعلانات، لكن بطاقة Data safety لا تذكر نموذجاً تجارياً.',
          '**جهة اتصال المطوّر.** تعرض سياسة الخصوصية عنوان بريد إلكتروني بديلاً (SUPPORT@EXAMPLE.COM)؛ أما بريد الدعم فموجود في صفحة Google Play.',
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
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز مع مكتبة نماذج خاصة به',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة وأجوبة عن المستندات على الجهاز واختبارات أداء',
          },
          {
            'التطبيق': '[ToolNeuron](/ar/power-local-llm/toolneuron-review)',
            'المنصات': 'Android',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'تطبيق ذكاء اصطناعي مفتوح المصدر ومشفّر على الجهاز لنظام Android',
          },
          {
            'التطبيق': '[Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'تطبيق مفتوح المصدر على الجهاز من فريق AI Edge في Google',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل On Device LLM هو نفسه On Device AI أو AI on Device؟',
            a: 'لا. هذان تطبيقان منفصلان لـ iPhone وMac من مطوّرين آخرين؛ أما هذا التطبيق فهو تطبيق Android باسم الحزمة com.ondevicellm.',
          },
          {
            q: 'هل يمكنني استخدام نموذج غير موجود في القائمة؟',
            a: 'تقول الصفحة إنه يمكنك لصق رابط مباشر لأي نموذج GGUF. ويعتمد حسن تشغيل نموذج معيّن على ذاكرة RAM في هاتفك، ويحدد ناشره ترخيصه.',
          },
          {
            q: 'هل يعمل على iPhone أو سطح المكتب؟',
            a: 'لم نعثر على نسخة كهذه؛ ويصفه موقع المطوّر بأنه دردشة ذكاء اصطناعي على الجهاز لنظام Android.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'On Device LLM تطبيق دردشة مجاني على Android بطرح واضح للعمل دون اتصال واستيراد GGUF عبر رابط وواجهة API محلية، لكنه حديث الإصدار، ومغلق المصدر، وله أكثر من 100 تنزيل، وادعاءاته عن العمل دون اتصال والخصوصية لم تُختبر. يناسب من يريد تجربة مساعد صغير دون حساب ويقبل هذه المخاطر؛ أما من يريد عميلاً مفتوح المصدر وراسخاً فعليه مقارنة [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Private Mind](/ar/power-local-llm/private-mind-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[On Device LLM على Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) — الوصف وملاحظات الإصدار وتاريخ التحديث وعدد التنزيلات وقسم Data safety، جرى التحقق منها في 26 أكتوبر 2026.',
          '[موقع On Device LLM](https://on-device-llm-ff80d.web.app/) — موقع المطوّر، جرى التحقق منه في 26 أكتوبر 2026.',
          '[سياسة خصوصية On Device LLM](https://on-device-llm-ff80d.web.app/privacy) — التعامل مع البيانات والتحليلات وطلبات الشبكة وواجهة API المحلية؛ آخر تحديث في 24 أغسطس 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني مفتوح المصدر على الجهاز لنظامي iOS وAndroid.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT لـ iPhone وAndroid.',
          '[مراجعة ToolNeuron](/ar/power-local-llm/toolneuron-review) — تطبيق ذكاء اصطناعي مفتوح المصدر ومشفّر على الجهاز لنظام Android.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق الذكاء الاصطناعي المفتوح المصدر على الجهاز من Google.',
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
    heroImage: '/images/on-device-llm-review-hero-zh.webp',
    title: 'On Device LLM 评测：适用于 Android 的免费离线聊天应用',
    seoTitle: 'On Device LLM 评测：免费离线 Android 聊天应用',
    intro:
      'On Device LLM 是一款适用于 Android 的免费聊天应用。根据其 Google Play 页面和隐私政策，它在手机上运行开放权重语言模型，无需账号。Google Play 上的标题是“Local LLM”；它与 iPhone 和 Mac 应用 On Device AI 及 AI on Device 是不同的应用。本评测反映其应用商店页面以及开发者网站和隐私政策在 2026 年 10 月 26 日的情况。',
    metaDescription:
      'On Device LLM 评测：免费闭源的 Android 聊天应用，称其开放权重模型离线运行，支持导入 GGUF 和可选的本地 API。内容基于商店页面和隐私政策，未经实测。',
    twitterDescription:
      'On Device LLM 评测：一款称其 AI 离线运行的新免费 Android 应用。Google Play 页面和隐私政策的说法、两者在数据分析上的差异，以及未经核实的部分。',
    audience:
      '希望使用可自选模型的免费离线聊天应用的 Android 用户，并且需要了解哪些内容已被来源确认、哪些没有，以及该项目有多新。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On Device LLM 评测',
    targetKeywords: [
      'on device llm 应用评测',
      '安卓 本地 llm 应用',
      '安卓 离线 llm gguf',
      '在安卓手机上运行 llama 3.2',
      '安卓 本地 openai 兼容 api',
      'com.ondevicellm',
      'on device llm 与 pocketpal 对比',
    ],
    current_models_mentioned: ['SmolLM2 360M', 'Qwen2.5 0.5B', 'TinyLlama 1.1B', 'Llama 3.2 1B', 'Qwen2.5 1.5B', 'Gemma 2 2B', 'Llama 3.2 3B'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**On Device LLM 是一款免费、闭源的 Android 应用，称其在手机上运行 Llama 3.2 等开放权重模型，无需账号。** 该项目全新上线，因此其说法依据的是一份页面描述和一份政策，尚无人独立测试过。',
    quickAnswerTop: {
      zh: {
        question: 'On Device LLM 真的能离线运行吗？',
        answer:
          '根据其页面和隐私政策，确实如此：模型下载完成后，聊天在手机上运行，无需联网，消息文本不会发送到任何地方。这一点未经本评测测试，而且应用仍会为下载模型、读取启动配置和数据分析而访问网络。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) 免费获取，需要 64 位 Android 7.0 或更高版本。',
          '内置七个模型，也可粘贴任意 GGUF 文件的链接。',
          '可选的 OpenAI 兼容 API，供你网络中的其他设备使用。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'On Device LLM 是什么？', anchor: 'what-is-on-device-llm' },
      { label: '获取方式', anchor: 'get-it' },
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
            text: 'On Device LLM 是一款闭源的 Android 应用，据其开发者称，它在手机上运行开放权重语言模型，无需账号、没有广告、也没有服务器。',
          },
          {
            type: 'plain-terms',
            text: '你从 Google Play 安装后，下载七个模型之一（或粘贴指向你自己的 GGUF 文件的链接）即可与它聊天；开发者没有说明运行这些模型的是哪款软件。',
          },
        ],
        items: [
          '开发者：印度的一名个人开发者，在 Google Play 上列为 Raushan kumar Pandey；应用商店页面还显示署名“Feather AI”。',
          '上线时间与影响范围：首个版本为 1.0，最后更新于 2026 年 9 月 11 日，Google Play 显示下载量 100+，因此尚无历史记录可循。',
          '平台：仅通过 Google Play 提供，需要 64 位设备上的 Android 7.0 或更高版本；未发现 iPhone、桌面或网页版本。',
          '维护情况：截至 2026 年 10 月 26 日，最后一次更新是 45 天前，因此不适用过期警告。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Google Play 页面以及开发者网站和隐私政策，核实日期为 2026 年 10 月 26 日。未进行实际使用、基准测试或网络流量检查。',
          },
        ],
      },
      overview: {
        id: 'what-is-on-device-llm',
        title: 'On Device LLM 是什么？',
        content: [
          '**On Device LLM 是一款 Android 聊天应用，根据其 Google Play 页面，它用在手机上运行的开放权重模型回答提示，而不是调用云服务。** 该页面的标题是“Local LLM”，而开发者网站和隐私政策称之为“local LLM”，并将其描述为适用于 Android 的设备端 AI 聊天；本评测使用“On Device LLM”这一名称，以区别于 iPhone 和 Mac 应用 [On Device AI](/zh/power-local-llm/on-device-ai-review) 和 [AI on Device](/zh/power-local-llm/ai-on-device-review)，后两者的开发者、平台和包名都不同。',
          '页面注明开发者为印度的 Raushan kumar Pandey；Android 包名为 com.ondevicellm。该应用仅在 Google Play 上架。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**On Device LLM 与其他 Android 应用一样从 Google Play 安装，无需终端或账号。** 首次模型下载为 369 MB 或更大，因此首次运行需要网络连接和可用存储空间。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Android',
            '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm)（免费安装，需要 64 位 Android 7.0 或更高版本）',
          },
          {
            '平台': '网站',
            '获取方式': '[on-device-llm-ff80d.web.app](https://on-device-llm-ff80d.web.app/)（仅含法律页面的开发者网站）',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[隐私政策](https://on-device-llm-ff80d.web.app/privacy)（最后更新于 2026 年 8 月 24 日）',
          },
        ],
        note: '所评测版本：1.0，Google Play 显示其最后更新于 2026 年 9 月 11 日；更新说明称其为首个版本。页面未列出任何源代码仓库。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项均来自 Google Play 描述或隐私政策。**',
        ],
        items: [
          '**七个内置模型。** SmolLM2 360M、Qwen2.5 0.5B、TinyLlama 1.1B、Llama 3.2 1B、Qwen2.5 1.5B、Gemma 2 2B 和 Llama 3.2 3B，下载前会显示各自的下载大小；无需离开聊天界面即可切换模型。',
          '**你自己的模型。** 你可以粘贴任意 GGUF 文件的直接链接。',
          '**保存的聊天。** 对话存储在设备上的数据库中，标题由模型生成，Markdown 和代码块可渲染并支持一键复制，也可一次性清除所有聊天。',
          '**可选的本地 API。** 端口 11434 上的 OpenAI 兼容 HTTP 端点，让 curl、Python SDK 或你自己的脚本可以通过 Wi-Fi 或 USB 使用手机上的模型，并支持流式输出。它默认关闭，启用时会显示通知。',
          '**运行要求。** 页面称根据模型不同，大约需要 1 至 3 GB 的可用内存，并称在较旧的手机上，较大的模型明显更慢。',
        ],
        note: '应用商店描述与隐私政策在这些方面一致。最终以已安装的版本为准。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**根据隐私政策，消息和回复保存在设备上的私有数据库中，任何提示都不会发送到服务器。** 无需账号，页面称没有广告。Google Play 的数据安全（Data safety）部分写明“未收集数据”和“未与第三方共享数据”。',
          '政策比该说明卡更详细。它称应用使用 Google Firebase Analytics 记录匿名事件：事件名称、模型名称、消息长度（以字符数计，而非文本本身）、时长、匿名的应用实例 ID 和标准设备信息。政策还列出了从你所选主机（默认为 huggingface.co）下载模型，以及启动时一次只读的 Google Cloud Firestore 请求，用于获取模型目录和检查更新。两处说法在数据分析上存在差异，因此政策是更完整的来源。',
          '可选的本地 API 没有身份验证：政策称，网络中任何能访问该手机的设备都可以发送提示并读取回复，并建议只在你信任的网络上启用它。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该应用为闭源，因此这些说法均无法通过代码核查，PromptQuorum 也未审计其网络流量。处理机密材料的人应先在自己的设备上核实其行为。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**想要一款可自选模型的免费离线聊天应用的 Android 用户。** 通过链接导入 GGUF 是尝试它的主要理由。',
          '**希望在可信网络上使用手机作为端点的开发者。** 本地 API 是另一个理由。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际使用表现。** 速度、耗电和回答质量均未测试，这里也没有人确认过聊天能否在飞行模式下工作。',
          '**运行时。** 页面称模型是 GGUF 文件，但没有说明所用的推理引擎。',
          '**许可证与源代码。** 未发现公开的代码仓库，因此该应用按闭源对待；每个模型还带有其发布者各自的许可证。',
          '**应用内购买。** 安装免费，描述中也没有提到任何购买项目或广告，但数据安全说明卡没有说明商业模式。',
          '**开发者联系方式。** 隐私政策中显示的是占位联系邮箱（SUPPORT@EXAMPLE.COM）；支持邮箱见 Google Play 页面。',
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
            '主要区别': '开源的设备端聊天客户端，自带模型库',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源离线聊天，支持设备端文档问答和基准测试',
          },
          {
            '应用': '[ToolNeuron](/zh/power-local-llm/toolneuron-review)',
            '平台': 'Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '适用于 Android 的开源加密设备端 AI 应用',
          },
          {
            '应用': '[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '来自 Google AI Edge 团队的开源设备端应用',
          },
        ],
        note: '竞品信息变化频繁；请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'On Device LLM 与 On Device AI 或 AI on Device 是同一个应用吗？',
            a: '不是。那两款是其他开发者的独立 iPhone 和 Mac 应用；这一款是包名为 com.ondevicellm 的 Android 应用。',
          },
          {
            q: '我可以使用列表之外的模型吗？',
            a: '页面称你可以粘贴任意 GGUF 模型的直接链接。某个模型能否流畅运行取决于你手机的内存，其许可证则由发布者决定。',
          },
          {
            q: '它能在 iPhone 或桌面上使用吗？',
            a: '未发现这样的版本；开发者网站将其描述为适用于 Android 的设备端 AI 聊天。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'On Device LLM 是一款免费的 Android 聊天应用，离线卖点明确，支持通过链接导入 GGUF 并提供本地 API，但它刚发布不久、闭源、下载量仅 100+，其离线和隐私说法均未经测试。它适合想试用小型、无需账号的助手并接受这些风险的读者；想要开源、成熟客户端的读者，应比较 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Private Mind](/zh/power-local-llm/private-mind-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 On Device LLM](https://play.google.com/store/apps/details?id=com.ondevicellm) — 描述、更新说明、更新日期、下载量和数据安全部分，核实于 2026 年 10 月 26 日。',
          '[On Device LLM 网站](https://on-device-llm-ff80d.web.app/) — 开发者网站，核实于 2026 年 10 月 26 日。',
          '[On Device LLM 隐私政策](https://on-device-llm-ff80d.web.app/privacy) — 数据处理、数据分析、网络请求和本地 API；最后更新于 2026 年 8 月 24 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 一款适用于 iOS 和 Android 的免费、开源设备端聊天客户端。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 一款适用于 iPhone 和 Android 的免费、MIT 许可的离线聊天应用。',
          '[ToolNeuron 评测](/zh/power-local-llm/toolneuron-review) — 一款适用于 Android 的开源、加密设备端 AI 应用。',
          '[Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google 的开源设备端 AI 应用。',
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
    heroImage: '/images/on-device-llm-review-hero-ko.webp',
    title: 'On Device LLM 리뷰: Android용 무료 오프라인 채팅 앱',
    seoTitle: 'On Device LLM 리뷰: Android 무료 오프라인 앱',
    intro:
      'On Device LLM은 Google Play 게재 정보와 개인정보 처리방침에 따르면 계정 없이 오픈 웨이트 언어 모델을 휴대폰에서 실행하는 Android용 무료 채팅 앱입니다. Google Play에서는 "Local LLM"이라는 제목으로 등록되어 있으며, iPhone·Mac 앱인 On Device AI, AI on Device와는 다른 앱입니다. 이 리뷰는 2026년 10월 26일에 확인한 스토어 게재 정보와 개발자 웹사이트 및 개인정보 처리방침을 반영합니다.',
    metaDescription:
      'On Device LLM 리뷰: 오픈 웨이트 모델을 오프라인으로 실행한다는 무료 비공개 소스 Android 채팅 앱. GGUF 가져오기와 선택형 로컬 API를 다룹니다.',
    twitterDescription:
      'On Device LLM 리뷰: AI가 오프라인으로 실행된다는 새로운 무료 Android 앱. Google Play 게재 정보와 개인정보 처리방침의 주장, 분석 항목에서 둘의 차이, 확인되지 않은 사항을 다룹니다.',
    audience:
      '원하는 모델을 직접 고를 수 있는 무료 오프라인 채팅 앱을 찾는 Android 이용자로, 출처가 무엇을 확인해 주고 무엇을 확인해 주지 않는지, 프로젝트가 얼마나 새로운지 알아야 하는 분들.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'On Device LLM 리뷰',
    targetKeywords: [
      'on device llm 앱 리뷰',
      '로컬 llm 안드로이드 앱',
      '오프라인 llm 안드로이드 gguf',
      '안드로이드 폰에서 llama 3.2 실행',
      '안드로이드 로컬 openai 호환 api',
      'com.ondevicellm',
      'on device llm pocketpal 비교',
    ],
    current_models_mentioned: ['SmolLM2 360M', 'Qwen2.5 0.5B', 'TinyLlama 1.1B', 'Llama 3.2 1B', 'Qwen2.5 1.5B', 'Gemma 2 2B', 'Llama 3.2 3B'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**On Device LLM은 Llama 3.2 같은 오픈 웨이트 모델을 계정 없이 휴대폰에서 실행한다고 밝히는 무료 비공개 소스 Android 앱입니다.** 프로젝트가 막 나온 상태라, 주장은 아무도 독립적으로 테스트하지 않은 게재 정보와 처리방침에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'On Device LLM은 정말 오프라인으로 실행됩니까?',
        answer:
          '게재 정보와 개인정보 처리방침에 따르면 그렇습니다. 모델을 내려받은 뒤에는 인터넷 없이 휴대폰에서 채팅이 실행되며 메시지 텍스트는 어디로도 전송되지 않습니다. 이 리뷰에서는 테스트하지 않았으며, 앱은 모델 다운로드, 시작 시 설정 읽기, 분석을 위해 여전히 네트워크에 접속합니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm)에서 무료, 64비트 Android 7.0 이상.',
          '기본 제공 모델 7개, 또는 GGUF 파일 링크를 붙여 넣어 사용.',
          '같은 네트워크의 다른 기기를 위한 선택형 OpenAI 호환 API.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'On Device LLM이란 무엇인가?', anchor: 'what-is-on-device-llm' },
      { label: '어디서 받나요?', anchor: 'get-it' },
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
            text: 'On Device LLM은 개발자에 따르면 계정, 광고, 서버 없이 오픈 웨이트 언어 모델을 휴대폰에서 실행하는 비공개 소스 Android 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Google Play에서 설치해 모델 7개 중 하나를 내려받거나(또는 직접 만든 GGUF 파일 링크를 붙여 넣어) 채팅합니다. 개발자는 모델을 실행하는 소프트웨어의 이름을 밝히지 않습니다.',
          },
        ],
        items: [
          '개발자: 인도의 개인 개발자로, Google Play에는 Raushan kumar Pandey로 등록되어 있으며 스토어 페이지에는 "Feather AI"라는 표기도 보입니다.',
          '연식과 도달 범위: 첫 릴리스는 버전 1.0이며 2026년 9월 11일에 마지막으로 업데이트되었고, Google Play에는 다운로드 100+가 표시되어 있어 아직 검증된 이력이 없습니다.',
          '플랫폼: Google Play를 통한 64비트 기기의 Android 7.0 이상만 지원하며, iPhone, 데스크톱, 웹 빌드는 찾지 못했습니다.',
          '유지보수: 마지막 업데이트는 2026년 10월 26일 기준 45일 전이므로 유지보수 중단 경고는 해당하지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 Google Play 게재 정보와 개발자의 웹사이트 및 개인정보 처리방침을 2026년 10월 26일에 확인한 내용을 근거로 합니다. 직접 사용, 벤치마크, 네트워크 점검은 하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-on-device-llm',
        title: 'On Device LLM이란 무엇인가?',
        content: [
          '**On Device LLM은 Google Play 게재 정보에 따르면 클라우드 서비스 대신 휴대폰에서 실행되는 오픈 웨이트 모델로 프롬프트에 답하는 Android 채팅 앱입니다.** 게재 제목은 "Local LLM"이고 개발자의 웹사이트와 개인정보 처리방침은 "local LLM"이라 부르며 Android용 온디바이스 AI 채팅이라고 설명합니다. 이 리뷰에서는 개발자, 플랫폼, 패키지 이름이 다른 iPhone·Mac 앱 [On Device AI](/ko/power-local-llm/on-device-ai-review), [AI on Device](/ko/power-local-llm/ai-on-device-review)와 구별하기 위해 "On Device LLM"이라고 부릅니다.',
          '게재 정보는 개발자를 인도의 Raushan kumar Pandey로 명시하며, Android 패키지 이름은 com.ondevicellm입니다. 앱은 Google Play에서만 배포됩니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**On Device LLM은 다른 Android 앱처럼 Google Play에서 설치하며, 터미널이나 계정이 필요 없습니다.** 첫 모델 다운로드는 369 MB 이상이므로 처음 실행할 때는 인터넷 연결과 여유 저장 공간이 필요합니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.ondevicellm) (무료 설치, 64비트 Android 7.0 이상)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[on-device-llm-ff80d.web.app](https://on-device-llm-ff80d.web.app/) (법적 고지 페이지만 있는 개발자 사이트)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[개인정보 처리방침](https://on-device-llm-ff80d.web.app/privacy) (2026년 8월 24일 마지막 업데이트)',
          },
        ],
        note: '확인한 버전은 1.0이며 Google Play에는 마지막 업데이트가 2026년 9월 11일로 표시되어 있고, 릴리스 노트는 이를 첫 릴리스라고 부릅니다. 게재 정보에는 소스 저장소가 나와 있지 않습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명 또는 개인정보 처리방침에서 가져온 것입니다.**',
        ],
        items: [
          '**기본 제공 모델 7개.** SmolLM2 360M, Qwen2.5 0.5B, TinyLlama 1.1B, Llama 3.2 1B, Qwen2.5 1.5B, Gemma 2 2B, Llama 3.2 3B이며, 선택 전에 각 다운로드 크기가 표시되고 채팅을 벗어나지 않고 모델을 바꿀 수 있습니다.',
          '**직접 구한 모델.** 어떤 GGUF 파일이든 직접 링크를 붙여 넣을 수 있습니다.',
          '**저장된 채팅.** 대화는 기기의 데이터베이스에 저장되고, 제목은 모델이 작성하며, 마크다운과 코드 블록은 원터치 복사와 함께 표시되고, 모든 채팅을 한 번에 지울 수 있습니다.',
          '**선택형 로컬 API.** 포트 11434의 OpenAI 호환 HTTP 엔드포인트로, curl, Python SDK 또는 직접 만든 스크립트가 Wi-Fi나 USB를 통해 휴대폰의 모델을 스트리밍으로 사용할 수 있습니다. 기본값은 꺼짐이며 활성화되어 있는 동안 알림을 표시합니다.',
          '**요구 사항.** 게재 정보에는 모델에 따라 대략 1~3 GB의 여유 RAM이 필요하다고 되어 있고, 더 큰 모델은 오래된 휴대폰에서 눈에 띄게 느리다고 적혀 있습니다.',
        ],
        note: '스토어 설명과 개인정보 처리방침은 이 점들에서 일치합니다. 최종 기준은 설치된 빌드입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**개인정보 처리방침에 따르면 메시지와 답변은 기기의 비공개 데이터베이스에 머물며, 어떤 프롬프트도 서버로 전송되지 않습니다.** 계정이 없고 게재 정보에는 광고가 없다고 되어 있습니다. Google Play 데이터 보안 항목에는 "수집된 데이터 없음"과 "제3자와 공유되는 데이터 없음"이라고 표시되어 있습니다.',
          '처리방침은 이 카드보다 더 자세합니다. 앱은 Google Firebase Analytics를 사용해 익명 이벤트를 기록한다고 합니다. 이벤트 이름, 모델 이름, 메시지 길이(텍스트가 아닌 글자 수), 소요 시간, 익명 앱 인스턴스 ID, 표준 기기 정보입니다. 또한 선택한 호스트(기본값 huggingface.co)에서의 모델 다운로드와, 시작 시 모델 카탈로그와 업데이트 확인을 위한 Google Cloud Firestore 읽기 전용 요청도 명시합니다. 두 설명은 분석 항목에서 서로 다르므로 처리방침이 더 상세한 출처입니다.',
          '선택형 로컬 API에는 인증이 없습니다. 처리방침에 따르면 휴대폰에 접근할 수 있는 네트워크상의 누구나 프롬프트를 보내고 답변을 읽을 수 있으며, 신뢰할 수 있는 네트워크에서만 사용하도록 권고합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 앱은 소스 코드가 공개되어 있지 않아 위 주장은 어느 것도 코드에서 확인할 수 없으며, PromptQuorum은 네트워크 트래픽을 감사하지 않았습니다. 기밀 자료를 다루는 분은 먼저 본인 기기에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**원하는 모델을 직접 고를 수 있는 무료 오프라인 채팅 앱을 원하는 Android 이용자.** GGUF 링크 가져오기가 써 볼 만한 가장 큰 이유입니다.',
          '**신뢰할 수 있는 네트워크에서 휴대폰이 호스팅하는 엔드포인트를 원하는 개발자.** 로컬 API가 또 다른 이유입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 사용 성능.** 속도, 배터리 사용량, 답변 품질은 테스트하지 않았으며, 비행기 모드에서 채팅이 작동하는지도 이 리뷰에서 확인하지 않았습니다.',
          '**런타임.** 게재 정보는 모델이 GGUF 파일이라고 밝히지만 추론 엔진의 이름은 나와 있지 않습니다.',
          '**라이선스와 소스 코드.** 공개 저장소를 찾지 못해 앱을 비공개 소스로 간주하며, 각 모델에는 게시자가 정한 별도의 라이선스가 있습니다.',
          '**앱 내 구입.** 설치는 무료이고 설명에는 구입 항목이나 광고가 나와 있지 않지만, 데이터 보안 카드에는 수익 모델이 명시되어 있지 않습니다.',
          '**개발자 연락처.** 개인정보 처리방침에는 자리 표시자 연락 주소(SUPPORT@EXAMPLE.COM)가 적혀 있으며, 지원 이메일은 Google Play 게재 정보에 있습니다.',
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
            '앱': '[ToolNeuron](/ko/power-local-llm/toolneuron-review)',
            '플랫폼': 'Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': 'Android용 오픈 소스 암호화 온디바이스 AI 앱',
          },
          {
            '앱': '[Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'Google AI Edge 팀이 만든 오픈 소스 온디바이스 앱',
          },
        ],
        note: '경쟁 앱의 세부 정보는 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하시기 바랍니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'On Device LLM은 On Device AI나 AI on Device와 같은 앱인가요?',
            a: '아니요. 그 앱들은 다른 개발자가 만든 별개의 iPhone·Mac 앱이며, 이 앱은 패키지 이름이 com.ondevicellm인 Android 앱입니다.',
          },
          {
            q: '목록에 없는 모델도 사용할 수 있나요?',
            a: '게재 정보에는 어떤 GGUF 모델이든 직접 링크를 붙여 넣을 수 있다고 되어 있습니다. 특정 모델이 잘 실행되는지는 휴대폰의 RAM에 달려 있으며, 라이선스는 게시자가 정합니다.',
          },
          {
            q: 'iPhone이나 데스크톱에서도 작동하나요?',
            a: '그런 빌드는 찾지 못했습니다. 개발자의 웹사이트는 이 앱을 Android용 온디바이스 AI 채팅이라고 설명합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'On Device LLM은 오프라인이라는 분명한 장점, GGUF 링크 가져오기, 로컬 API를 갖춘 무료 Android 채팅 앱이지만, 출시된 지 얼마 되지 않았고 소스 코드가 공개되어 있지 않으며 다운로드는 100+에 그치고, 오프라인 및 개인정보 주장은 테스트되지 않았습니다. 계정 없는 작은 어시스턴트를 써 보고 이런 위험을 감수할 수 있는 분께 맞으며, 오픈 소스이면서 검증된 클라이언트를 원하는 분은 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Private Mind](/ko/power-local-llm/private-mind-review)를 비교해 보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 On Device LLM](https://play.google.com/store/apps/details?id=com.ondevicellm) — 설명, 릴리스 노트, 업데이트 날짜, 다운로드 수, 데이터 보안 항목. 2026년 10월 26일 확인.',
          '[On Device LLM 웹사이트](https://on-device-llm-ff80d.web.app/) — 개발자 사이트. 2026년 10월 26일 확인.',
          '[On Device LLM 개인정보 처리방침](https://on-device-llm-ff80d.web.app/privacy) — 데이터 처리, 분석, 네트워크 요청, 로컬 API. 2026년 8월 24일 마지막 업데이트.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS·Android용 무료 오픈 소스 온디바이스 채팅 클라이언트.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone·Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[ToolNeuron 리뷰](/ko/power-local-llm/toolneuron-review) — Android용 오픈 소스 암호화 온디바이스 AI 앱.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 오픈 소스 온디바이스 AI 앱.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 앱 전반을 다룬 종합 정리.',
        ],
      },
    },
  },
}
