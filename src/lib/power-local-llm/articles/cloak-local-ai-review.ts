// Cloak: Local AI Review: Offline AI Chat for iPhone and Mac
// Slug: cloak-local-ai-review
// Companion to: locally-ai-review, pocketpal-ai-review, private-llm-review, enclave-ai-review, compass-local-ai-review, best-local-llm-apps-iphone-2026
// Sources: App Store listing id6781878402 (iPhone/iPad, US raw HTML incl. privacy label) and Mac App Store listing id6821064382, Apple iTunes lookup API
// (US/DE/ES/FR/JP/KR/BR price checks), polyaura.com/cloak (iOS + Mac pages, JSON-LD), polyaura.com/changelog and polyaura.com/privacy (last updated 2026-10-27) — read 2026-10-30.
// No hands-on use, no network inspection. The request came from the site owner, not from the developer: no maker comment exists.
// Last upstream update 2026-10-27 (iPhone/iPad 1.2.9; Mac 1.0 on 2026-10-20) => no stale warning.
// geo-translation: APPLIED (docs/geo-translation.md read before writing the 8 non-EN blocks).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-30',
      dateModified: '2026-10-30',
      next_refresh_due: '2027-04-30',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/cloak-local-ai-review-hero-en.webp',
      title: 'Cloak: Local AI Review: Offline AI Chat for iPhone and Mac',
      seoTitle: 'Cloak: Local AI Review: Offline AI Chat for iPhone & Mac',
      intro: 'Cloak: Local AI is a paid-once chat app for iPhone and iPad from Polyaura LLC, with a separate Mac version called Cloak: Local AI Chat. According to the developer, the app downloads one recommended AI model during setup and then answers on the device, with no account. This review reflects the App Store listings, Polyaura\'s website and its privacy policy as checked on 30 October 2026.',
      metaDescription: 'Cloak: Local AI review: a paid-once iPhone, iPad and Mac chat app that downloads a model, then answers on the device. What it sends and what is unverified.',
      twitterDescription: 'Cloak: Local AI review: an offline AI chat app for iPhone, iPad and Mac. What the privacy policy says stays on the device, what the iPhone version sends out and what is unverified.',
      audience: 'iPhone, iPad and Mac owners who want to know what Cloak: Local AI runs on the device, what its iPhone version sends to the developer and what the sources confirm and do not.',
      readTime: '6 min read',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'Cloak: Local AI review',
      targetKeywords: [
        'cloak local ai review',
        'cloak local ai app',
        'polyaura cloak',
        'offline ai chat iphone',
        'private ai app ios',
        'local ai chat mac',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock: '**Cloak: Local AI is an iPhone, iPad and Mac chat app that, according to its developer, runs a downloaded AI model on the device and keeps conversations there.** **The privacy policy says the iPhone version sends Polyaura two optional items, a setup survey answer and, only if switched on, daily feature-use counts; the Mac version sends nothing.**',
      quickAnswerTop: {
        en: {
          question: 'Does Cloak keep my chats on my device?',
          answer: 'According to the developer, yes: after a one-time model download, the AI runs on the device and Polyaura never receives conversations. This review did not test the apps or inspect their network traffic.',
          bullets: [
            'A one-time purchase of $1.99 in the US [App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402), with no subscription; the Mac version is a separate listing.',
            'The model is downloaded from Hugging Face during setup; the policy says the AI works without internet afterwards.',
            'Both listings show English as the only language.',
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
          label: 'What Is Cloak: Local AI?',
          anchor: 'what-is-cloak',
        },
        {
          label: 'Where Your Chats Run',
          anchor: 'where-it-runs',
        },
        {
          label: 'Get It',
          anchor: 'get-it',
        },
        {
          label: 'Features Listed by the Developer',
          anchor: 'key-features',
        },
        {
          label: 'Privacy Policy and Data Flow',
          anchor: 'privacy',
        },
        {
          label: 'Who Should Use It',
          anchor: 'who-should-use',
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
            { type: 'one-sentence', text: 'Cloak: Local AI is an offline-first chat app for iPhone, iPad and Mac that downloads a recommended model once and, per the developer, answers on the device without an account.' },
            { type: 'plain-terms', text: 'You buy the app once, open it and chat; there is no model to pick. If you want to test the claim, the developer\'s own guide suggests turning on airplane mode after setup and sending a message.' },
          ],
          items: [
            'Developer: Polyaura LLC publishes both apps, and the site\'s structured data names Alex Sahinidis as founder.',
            'Requirements: iOS or iPadOS 18.0 or later for iPhone and iPad; macOS 26.0 or later on Apple silicon for the Mac.',
            'Updates: iPhone and iPad version 1.2.9 arrived on 27 October 2026; the Mac version 1.0 launched on 20 October 2026.',
            'Source: closed source, so the privacy claims cannot be checked in code.',
          ],
          callouts: [{ type: 'note', text: 'This review is based on the App Store listings, Apple\'s lookup data, Polyaura\'s website and its privacy policy, checked on 30 October 2026. It involved no hands-on use, network inspection or benchmarking.' }],
        },
        overview: {
          id: 'what-is-cloak',
          title: 'What Is Cloak: Local AI?',
          content: [
            '**Cloak: Local AI is a chat assistant that the developer describes as "Offline & Private"; the Mac version is listed as Cloak: Local AI Chat.** You open the app, a recommended model is prepared in the background and you chat, without choosing a model or configuring anything. The iPhone and iPad version adds Voice Memos and a weekly Recap, while the Mac listing describes everyday questions, writing, notes and files and mentions neither.',
            'The developer\'s story is a trip to a Greek island without cell service, which prompted the idea of AI that works offline. Other products share the name Cloak; this review covers only the apps published by Polyaura.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Where Your Chats Run',
          content: [
            '**According to the developer, the model runs on the device after a one-time download; apart from that download, only two optional items on iPhone and iPad leave it.**',
          ],
          items: [
            '**Model download.** During setup Cloak downloads its AI model over HTTPS from Hugging Face, which, per the policy, sees the device\'s IP address and request information. The sources name neither the model nor its size.',
            '**Chat.** Once the model is on the device, the policy says the AI works without an internet connection. Polyaura\'s site adds that Apple Intelligence answers on supported devices until the model is ready.',
            '**Voice Memos and Recap (iPhone and iPad).** The policy says memos are transcribed by Apple\'s on-device speech recognition. Recap rebuilds the last seven days from Photos, Location and Voice Memos, each optional, and photo understanding downloads an additional model.',
            '**Storage.** Conversations are stored in the device\'s own storage, and the policy notes that iCloud or computer backups can include them. On iPhone and iPad, Recap data, attached documents and downloaded models are kept out of backups.',
          ],
          note: 'The policy says Cloak for Mac makes no network requests other than model downloads.',
        },
        getIt: {
          id: 'get-it',
          title: 'Get It',
          columns: [
            'Platform',
            'Where to get it',
          ],
          rows: [
            {
              'Platform': 'iPhone and iPad',
              'Where to get it': '[App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) ("Cloak: Local AI", paid download, iOS or iPadOS 18.0 or later)',
            },
            {
              'Platform': 'Mac',
              'Where to get it': '[Mac App Store](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) ("Cloak: Local AI Chat", macOS 26.0 or later, Apple silicon)',
            },
            {
              'Platform': 'Website',
              'Where to get it': '[polyaura.com/cloak](https://polyaura.com/cloak/) (official product pages for iPhone and Mac, plus the [changelog](https://polyaura.com/changelog/))',
            },
            {
              'Platform': 'Privacy policy',
              'Where to get it': '[Polyaura privacy policy](https://polyaura.com/privacy) (covers iPhone, iPad and Mac; last updated 27 October 2026)',
            },
            {
              'Platform': 'Source code',
              'Where to get it': 'No public repository found',
            },
          ],
          note: 'Versions reviewed: 1.2.9 for iPhone and iPad (release note "Small improvements and bug fixes") and 1.0 for the Mac. Each app is a one-time purchase of $1.99 in the US store, with no subscription, and the iPhone listing shows no in-app purchases. Version 1.1 (30 September 2026) added Voice Memos and removed message and memo limits, and version 1.2 (5 October 2026) added Recap.',
        },
        features: {
          id: 'key-features',
          title: 'Features Listed by the Developer',
          content: [
            '**Everything below comes from the App Store listings, Polyaura\'s website and its changelog; none of it was tested.**',
          ],
          items: [
            '**Chat.** Multiple chat threads stored locally and a customizable system prompt.',
            '**No setup.** No account and no model selection; the recommended model is downloaded and prepared automatically.',
            '**Voice Memos (iPhone and iPad).** Recordings become notes, next steps or a new chat, with editable transcripts and a Trash for deleted chats and memos. Since version 1.2 a thought can be recorded from Siri, Shortcuts, Control Center, the Lock Screen or the Action button.',
            '**Recap (iPhone and iPad).** A summary of the last seven days built from any mix of Photos, Location and Voice Memos.',
            '**No usage limits.** Version 1.1 removed message and memo limits.',
          ],
          note: 'The installed build is the final authority on what works.',
        },
        privacy: {
          id: 'privacy',
          title: 'Privacy Policy and Data Flow',
          content: [
            '**The privacy policy says Polyaura never receives conversations, prompts, replies, voice recordings, transcripts, recaps, photos, location history or documents, and that Cloak has no accounts, advertising or tracking.** It also names no third-party analytics or advertising SDKs.',
            'The iPhone and iPad version sends Polyaura an answer to an optional setup question ("What made you buy Cloak?") and, only if you turn on "Share feature-use counts" (off by default, with a confirmation that you are 18 or older), daily counts of four events such as onboarding started or a recap started. Neither carries a device identifier. The App Store privacy label, filled in by the developer and not verified by Apple, lists Analytics, User Content and Other User Content as data not linked to you.',
            'Hugging Face serves model downloads under its own policy. Netlify hosts polyaura.com and, per the policy, stores survey answers and daily totals in its US East region; answers are deleted after 12 months.',
          ],
          callouts: [{ type: 'note', text: 'The policy and label are the developer\'s statements. No network traffic was inspected, and there is no source code to read.' }],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Who Should Use It',
          items: [
            '**iPhone, iPad or Mac owners** who want a simple one-time-purchase chat app with no account and no model to choose.',
            '**Readers who prefer a specific policy:** it lists what is sent and when, and the airplane-mode test can check the core claim.',
            '**People who want voice memos or a weekly recap handled on the phone itself,** a feature of the iPhone and iPad version only.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'What We Could Not Verify',
          items: [
            '**Hands-on behavior.** This review did not time answers, test offline use or judge answer quality, battery use or device heat.',
            '**The model.** No source names it or gives its download size, and how the Apple Intelligence handoff works was not tested.',
            '**Source and licence.** No public repository was found, so the data-handling claims cannot be checked in code.',
            '**Network traffic.** The policy and the privacy label are developer statements; neither was compared with the apps\' actual requests.',
            '**The Mac version.** It launched on 20 October 2026 as version 1.0, and its listing carries no release notes yet.',
            '**Reputation.** The iPhone listing showed only three ratings at the time of checking.',
            '**Maker input.** The request came from the site owner; Polyaura was not contacted and gave no comment.',
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
              'App': '[Locally AI](/power-local-llm/locally-ai-review)',
              'Platforms': 'iOS, macOS',
              'Price / license': 'Free / Closed source',
              'Key difference': 'Runs open models on-device via MLX',
            },
            {
              'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
              'Platforms': 'iOS, Android',
              'Price / license': 'Free / MIT',
              'Key difference': 'Open-source chat that downloads models you choose',
            },
            {
              'App': '[Private LLM](/power-local-llm/private-llm-review)',
              'Platforms': 'iOS, macOS',
              'Price / license': 'Paid / Closed source',
              'Key difference': 'Curated model library with Siri and Shortcuts integration',
            },
            {
              'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
              'Platforms': 'iOS, macOS',
              'Price / license': 'Freemium / Closed source',
              'Key difference': 'On-device models by default, optional Pro cloud models',
            },
          ],
          note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
        },
        faq: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Which AI model does Cloak use?',
              a: 'None of the sources name it. The policy says Cloak downloads its models from Hugging Face, and the changelog speaks of a "recommended model" that Cloak prepares for you.',
            },
            {
              q: 'Do I need to buy the iPhone and Mac versions separately?',
              a: 'They are separate App Store listings, and each shows its own price. The sources mention no shared or bundled purchase.',
            },
            {
              q: 'Does Cloak run on Android or Windows?',
              a: 'No. The listings and Polyaura\'s site cover iPhone, iPad and Mac only.',
            },
            {
              q: 'How can I check the offline claim myself?',
              a: 'The developer\'s guide on private iPhone AI suggests turning on airplane mode after the model has downloaded and sending a message. This review did not run that test.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content: 'Cloak: Local AI is a small, paid-once chat app that, according to its developer, downloads one recommended model and then answers on the device, with Voice Memos and Recap on iPhone and iPad and a Mac version since 20 October 2026. Its privacy policy is specific about what is sent, but the model is not named, the code is closed and nothing was tested here. It suits readers who want setup-free on-device chat and accept that; anyone who wants to choose and download models should compare [Locally AI](/power-local-llm/locally-ai-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Cloak: Local AI on the App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) — description, privacy label, requirements and ratings, checked 30 October 2026.',
            '[Cloak: Local AI Chat on the Mac App Store](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) — Mac description, requirements and release date, checked 30 October 2026.',
            '[Apple lookup data for Cloak: Local AI](https://itunes.apple.com/lookup?id=6781878402&country=us) — version, release dates, price and file size, checked 30 October 2026.',
            '[Polyaura: Cloak](https://polyaura.com/cloak/) and its [changelog](https://polyaura.com/changelog/) — product pages, feature list and release history, checked 30 October 2026.',
            '[Polyaura privacy policy](https://polyaura.com/privacy) — data flow, survey, feature-use counts and processors, last updated 27 October 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Locally AI Review](/power-local-llm/locally-ai-review) — a free, closed-source app that runs open models on iPhone and Mac.',
            '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
            '[Private LLM Review](/power-local-llm/private-llm-review) — a paid iPhone and Mac app with a curated model library.',
            '[Enclave AI Review](/power-local-llm/enclave-ai-review) — an on-device assistant app for iPhone, iPad and Mac with an optional Pro tier.',
            '[Compass - Local AI Review](/power-local-llm/compass-local-ai-review) — a free iPhone chat app that uses Apple Intelligence.',
            '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
          ],
        },
      },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Cloak: Local AI Review: Offline AI Chat for iPhone and Mac',
      description: 'Cloak: Local AI review: an offline AI chat app for iPhone, iPad and Mac. What the privacy policy says stays on the device, what the iPhone version sends out and what is unverified.',
      url: 'https://www.promptquorum.com/power-local-llm/cloak-local-ai-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
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
        audienceType: 'iPhone, iPad and Mac users evaluating an offline AI chat app',
      },
      about: [
        { '@type': 'Thing', name: 'Cloak: Local AI' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'iPhone' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/cloak-local-ai-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Cloak: Local AI Review', item: 'https://www.promptquorum.com/power-local-llm/cloak-local-ai-review' },
      ],
    },
    },
    de: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-30',
      dateModified: '2026-10-30',
      next_refresh_due: '2027-04-30',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/cloak-local-ai-review-hero-de.webp',
      title: 'Cloak: Local AI im Test: Offline-KI-Chat für iPhone und Mac',
      seoTitle: 'Cloak: Local AI im Test: Offline-KI-Chat für iPhone & Mac',
      intro: 'Cloak: Local AI ist eine einmalig zu bezahlende Chat-App für iPhone und iPad von Polyaura LLC; für den Mac gibt es eine eigene Version namens Cloak: Local AI Chat. Laut Entwickler lädt die App bei der Einrichtung ein empfohlenes KI-Modell herunter und antwortet danach auf dem Gerät, ganz ohne Konto. Dieser Test gibt die App-Store-Einträge, die Website von Polyaura und die Datenschutzerklärung wieder, wie am 30. Oktober 2026 geprüft.',
      metaDescription: 'Cloak: Local AI im Test: Einmalkauf-Chat-App für iPhone, iPad und Mac; lädt ein Modell, antwortet dann auf dem Gerät. Was sie sendet, was ungeprüft ist.',
      twitterDescription: 'Cloak: Local AI im Test: eine Offline-KI-Chat-App für iPhone, iPad und Mac. Was laut Datenschutzerklärung auf dem Gerät bleibt, was die iPhone-Version sendet und was ungeprüft ist.',
      audience: 'iPhone-, iPad- und Mac-Nutzer, die wissen möchten, was Cloak: Local AI auf dem Gerät ausführt, was die iPhone-Version an den Entwickler sendet und was die Quellen bestätigen und was nicht.',
      readTime: '6 Min. Lesezeit',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'Cloak: Local AI Test',
      targetKeywords: [
        'cloak local ai test',
        'cloak local ai app',
        'polyaura cloak',
        'offline ki chat iphone',
        'private ki app ios',
        'lokaler ki chat mac',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock: '**Cloak: Local AI ist eine Chat-App für iPhone, iPad und Mac, die laut Entwickler ein heruntergeladenes KI-Modell auf dem Gerät ausführt und Gespräche dort belässt.** **Laut Datenschutzerklärung sendet die iPhone-Version zwei optionale Dinge an Polyaura, nämlich die Antwort auf eine Umfrage bei der Einrichtung und, nur wenn eingeschaltet, tägliche Nutzungszähler; die Mac-Version sendet nichts.**',
      quickAnswerTop: {
        de: {
          question: 'Bleiben meine Chats in Cloak auf meinem Gerät?',
          answer: 'Laut Entwickler ja: Nach einem einmaligen Modell-Download läuft die KI auf dem Gerät, und Polyaura erhält keine Gespräche. Dieser Test hat die Apps weder ausprobiert noch ihren Netzwerkverkehr geprüft.',
          bullets: [
            'Einmalkauf für 1,99 € im deutschen [App Store](https://apps.apple.com/de/app/cloak-local-ai/id6781878402), ohne Abo; die Mac-Version ist ein separater Eintrag.',
            'Das Modell wird bei der Einrichtung von Hugging Face geladen; danach arbeitet die KI laut Richtlinie ohne Internet.',
            'Beide Einträge nennen Englisch als einzige Sprache.',
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
          label: 'Was ist Cloak: Local AI?',
          anchor: 'what-is-cloak',
        },
        {
          label: 'Wo Ihre Chats laufen',
          anchor: 'where-it-runs',
        },
        {
          label: 'Bezugsquellen',
          anchor: 'get-it',
        },
        {
          label: 'Vom Entwickler genannte Funktionen',
          anchor: 'key-features',
        },
        {
          label: 'Datenschutzerklärung und Datenfluss',
          anchor: 'privacy',
        },
        {
          label: 'Für wen geeignet',
          anchor: 'who-should-use',
        },
        {
          label: 'Was wir nicht prüfen konnten',
          anchor: 'who-should-not-use',
        },
        {
          label: 'Konkurrenz und Alternativen',
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
            { type: 'one-sentence', text: 'Cloak: Local AI ist eine Offline-first-Chat-App für iPhone, iPad und Mac, die einmal ein empfohlenes Modell lädt und laut Entwickler danach ohne Konto auf dem Gerät antwortet.' },
            { type: 'plain-terms', text: 'Sie kaufen die App einmal, öffnen sie und chatten; ein Modell müssen Sie nicht auswählen. Wer die Aussage prüfen möchte: Der Leitfaden des Entwicklers empfiehlt, nach der Einrichtung den Flugmodus einzuschalten und eine Nachricht zu senden.' },
          ],
          items: [
            'Entwickler: Polyaura LLC veröffentlicht beide Apps, und die strukturierten Daten der Website nennen Alex Sahinidis als Gründer.',
            'Voraussetzungen: iOS oder iPadOS 18.0 oder neuer für iPhone und iPad; macOS 26.0 oder neuer auf Apple Silicon für den Mac.',
            'Updates: Die iPhone-und-iPad-Version 1.2.9 erschien am 27. Oktober 2026; die Mac-Version 1.0 startete am 20. Oktober 2026.',
            'Quelle: Closed Source, die Datenschutzaussagen lassen sich daher nicht im Code prüfen.',
          ],
          callouts: [{ type: 'note', text: 'Dieser Test beruht auf den App-Store-Einträgen, den Lookup-Daten von Apple, der Website von Polyaura und der Datenschutzerklärung, geprüft am 30. Oktober 2026. Es gab keine praktische Nutzung, keine Netzwerkanalyse und keine Benchmarks.' }],
        },
        overview: {
          id: 'what-is-cloak',
          title: 'Was ist Cloak: Local AI?',
          content: [
            '**Cloak: Local AI ist ein Chat-Assistent, den der Entwickler als „Offline & Private“ beschreibt; die Mac-Version heißt Cloak: Local AI Chat.** Sie öffnen die App, ein empfohlenes Modell wird im Hintergrund vorbereitet, und Sie chatten, ohne ein Modell zu wählen oder etwas zu konfigurieren. Die Version für iPhone und iPad bietet zusätzlich Sprachmemos und einen wöchentlichen Rückblick (Recap); der Mac-Eintrag beschreibt alltägliche Fragen, Schreiben, Notizen und Dateien und erwähnt beides nicht.',
            'Die Geschichte des Entwicklers beginnt mit einer Reise auf eine griechische Insel ohne Mobilfunkempfang, die ihn auf die Idee einer KI brachte, die offline funktioniert. Auch andere Produkte heißen Cloak; dieser Test behandelt nur die Apps von Polyaura.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Wo Ihre Chats laufen',
          content: [
            '**Laut Entwickler läuft das Modell nach einem einmaligen Download auf dem Gerät; außer diesem Download verlassen es nur zwei optionale Dinge auf iPhone und iPad.**',
          ],
          items: [
            '**Modell-Download.** Bei der Einrichtung lädt Cloak sein KI-Modell per HTTPS von Hugging Face, das laut Richtlinie die IP-Adresse des Geräts und Anfragedaten sieht. Die Quellen nennen weder das Modell noch seine Größe.',
            '**Chat.** Sobald das Modell auf dem Gerät liegt, arbeitet die KI laut Richtlinie ohne Internetverbindung. Die Website von Polyaura ergänzt, dass auf unterstützten Geräten Apple Intelligence antwortet, bis das Modell bereit ist.',
            '**Sprachmemos und Recap (iPhone und iPad).** Laut Richtlinie werden Memos mit der Spracherkennung von Apple auf dem Gerät transkribiert. Recap baut die letzten sieben Tage aus Fotos, Standort und Sprachmemos auf, jeweils optional, und für das Verstehen von Fotos wird ein zusätzliches Modell geladen.',
            '**Speicherung.** Gespräche liegen im geräteeigenen Speicher; laut Richtlinie können iCloud- oder Computer-Backups sie enthalten. Auf iPhone und iPad bleiben Recap-Daten, angehängte Dokumente und heruntergeladene Modelle außerhalb der Backups.',
          ],
          note: 'Laut Richtlinie stellt Cloak für den Mac außer Modell-Downloads keine Netzwerkanfragen.',
        },
        getIt: {
          id: 'get-it',
          title: 'Bezugsquellen',
          columns: [
            'Plattform',
            'Bezugsquelle',
          ],
          rows: [
            {
              'Plattform': 'iPhone und iPad',
              'Bezugsquelle': '[App Store](https://apps.apple.com/de/app/cloak-local-ai/id6781878402) („Cloak: Local AI“, kostenpflichtiger Download, iOS oder iPadOS 18.0 oder neuer)',
            },
            {
              'Plattform': 'Mac',
              'Bezugsquelle': '[Mac App Store](https://apps.apple.com/de/app/cloak-local-ai-chat/id6821064382?mt=12) („Cloak: Local AI Chat“, macOS 26.0 oder neuer, Apple Silicon)',
            },
            {
              'Plattform': 'Website',
              'Bezugsquelle': '[polyaura.com/cloak](https://polyaura.com/cloak/) (offizielle Produktseiten für iPhone und Mac sowie das [Changelog](https://polyaura.com/changelog/))',
            },
            {
              'Plattform': 'Datenschutzerklärung',
              'Bezugsquelle': '[Datenschutzerklärung von Polyaura](https://polyaura.com/privacy) (gilt für iPhone, iPad und Mac; zuletzt aktualisiert am 27. Oktober 2026)',
            },
            {
              'Plattform': 'Quellcode',
              'Bezugsquelle': 'Kein öffentliches Repository gefunden',
            },
          ],
          note: 'Geprüfte Versionen: 1.2.9 für iPhone und iPad (Versionshinweis „Small improvements and bug fixes“) und 1.0 für den Mac. Jede App ist ein Einmalkauf für 1,99 € im deutschen Store, ohne Abo, und der iPhone-Eintrag nennt keine In-App-Käufe. Version 1.1 (30. September 2026) brachte Sprachmemos und hob die Grenzen für Nachrichten und Memos auf, Version 1.2 (5. Oktober 2026) ergänzte Recap.',
        },
        features: {
          id: 'key-features',
          title: 'Vom Entwickler genannte Funktionen',
          content: [
            '**Alles Folgende stammt aus den App-Store-Einträgen, der Website von Polyaura und ihrem Changelog; nichts davon wurde getestet.**',
          ],
          items: [
            '**Chat.** Mehrere lokal gespeicherte Chat-Verläufe und ein anpassbarer System-Prompt.',
            '**Keine Einrichtung.** Kein Konto und keine Modellauswahl; das empfohlene Modell wird automatisch geladen und vorbereitet.',
            '**Sprachmemos (iPhone und iPad).** Aufnahmen werden zu Notizen, nächsten Schritten oder einem neuen Chat, mit bearbeitbaren Transkripten und einem Papierkorb für gelöschte Chats und Memos. Seit Version 1.2 lässt sich ein Gedanke über Siri, Kurzbefehle, das Kontrollzentrum, den Sperrbildschirm oder die Aktionstaste aufnehmen.',
            '**Recap (iPhone und iPad).** Eine Zusammenfassung der letzten sieben Tage aus beliebiger Kombination von Fotos, Standort und Sprachmemos.',
            '**Keine Nutzungsgrenzen.** Version 1.1 hat die Grenzen für Nachrichten und Memos entfernt.',
          ],
          note: 'Maßgeblich ist, was die installierte Version tatsächlich kann.',
        },
        privacy: {
          id: 'privacy',
          title: 'Datenschutzerklärung und Datenfluss',
          content: [
            '**Laut Datenschutzerklärung erhält Polyaura nie Gespräche, Prompts, Antworten, Sprachaufnahmen, Transkripte, Recaps, Fotos, Standortverlauf oder Dokumente, und Cloak hat weder Konten noch Werbung oder Tracking.** Außerdem nennt sie keine Analyse- oder Werbe-SDKs von Drittanbietern.',
            'Die Version für iPhone und iPad sendet Polyaura die Antwort auf eine optionale Frage bei der Einrichtung („What made you buy Cloak?“) und, nur wenn Sie „Share feature-use counts“ einschalten (standardmäßig aus, mit Bestätigung, dass Sie mindestens 18 sind), tägliche Zähler zu vier Ereignissen, etwa „Onboarding gestartet“ oder „Recap gestartet“. Keines von beiden enthält eine Geräte-ID. Das App-Store-Datenschutzlabel, vom Entwickler ausgefüllt und von Apple nicht geprüft, führt Analytics, User Content und Other User Content als Daten auf, die nicht mit Ihnen verknüpft sind.',
            'Hugging Face liefert die Modell-Downloads nach eigener Richtlinie aus. Netlify hostet polyaura.com und speichert laut Richtlinie Umfrageantworten und Tagessummen in der Region US East; Antworten werden nach 12 Monaten gelöscht.',
          ],
          callouts: [{ type: 'note', text: 'Richtlinie und Label sind Angaben des Entwicklers. Der Netzwerkverkehr wurde nicht geprüft, und es gibt keinen Quellcode zum Nachlesen.' }],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Für wen geeignet',
          items: [
            '**iPhone-, iPad- oder Mac-Besitzer,** die eine einfache Chat-App im Einmalkauf ohne Konto und ohne Modellauswahl möchten.',
            '**Leser, die eine konkrete Richtlinie bevorzugen:** Sie nennt, was wann gesendet wird, und der Flugmodus-Test kann die Kernaussage prüfen.',
            '**Menschen, die Sprachmemos oder einen Wochenrückblick auf dem Telefon selbst verarbeiten möchten;** das bietet nur die Version für iPhone und iPad.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Was wir nicht prüfen konnten',
          items: [
            '**Praktisches Verhalten.** Dieser Test hat weder Antwortzeiten gemessen noch die Offline-Nutzung ausprobiert oder Antwortqualität, Akkuverbrauch und Erwärmung bewertet.',
            '**Das Modell.** Keine Quelle nennt es oder seine Download-Größe, und die Übergabe von Apple Intelligence wurde nicht getestet.',
            '**Quelle und Lizenz.** Es wurde kein öffentliches Repository gefunden, die Aussagen zum Umgang mit Daten lassen sich daher nicht im Code prüfen.',
            '**Netzwerkverkehr.** Richtlinie und Datenschutzlabel sind Aussagen des Entwicklers; keine wurde mit den tatsächlichen Anfragen der Apps verglichen.',
            '**Die Mac-Version.** Sie erschien am 20. Oktober 2026 als Version 1.0, und ihr Eintrag enthält bislang keine Versionshinweise.',
            '**Reputation.** Der iPhone-Eintrag zeigte zum Prüfzeitpunkt nur drei Bewertungen.',
            '**Angaben des Herstellers.** Die Anfrage kam vom Betreiber der Website; Polyaura wurde nicht kontaktiert und hat sich nicht geäußert.',
          ],
        },
        vsAlternatives: {
          id: 'vs-alternatives',
          itemHeadings: true,
          title: 'Konkurrenz und Alternativen',
          columns: [
            'App',
            'Plattformen',
            'Preis / Lizenz',
            'Hauptunterschied',
          ],
          rows: [
            {
              'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
              'Plattformen': 'iOS, macOS',
              'Preis / Lizenz': 'Gratis / Closed Source',
              'Hauptunterschied': 'Führt offene Modelle per MLX auf dem Gerät aus',
            },
            {
              'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
              'Plattformen': 'iOS, Android',
              'Preis / Lizenz': 'Gratis / MIT',
              'Hauptunterschied': 'Quelloffener Chat, der von Ihnen gewählte Modelle lädt',
            },
            {
              'App': '[Private LLM](/de/power-local-llm/private-llm-review)',
              'Plattformen': 'iOS, macOS',
              'Preis / Lizenz': 'Kostenpflichtig / Closed Source',
              'Hauptunterschied': 'Kuratierte Modellbibliothek mit Siri- und Kurzbefehle-Anbindung',
            },
            {
              'App': '[Enclave AI](/de/power-local-llm/enclave-ai-review)',
              'Plattformen': 'iOS, macOS',
              'Preis / Lizenz': 'Freemium / Closed Source',
              'Hauptunterschied': 'Standardmäßig Modelle auf dem Gerät, optional Cloud-Modelle in Pro',
            },
          ],
          note: 'Angaben zur Konkurrenz ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Welches KI-Modell nutzt Cloak?',
              a: 'Keine der Quellen nennt es. Laut Richtlinie lädt Cloak seine Modelle von Hugging Face, und das Changelog spricht von einem „empfohlenen Modell“, das Cloak für Sie vorbereitet.',
            },
            {
              q: 'Muss ich die iPhone- und die Mac-Version getrennt kaufen?',
              a: 'Es sind getrennte App-Store-Einträge, und jeder zeigt seinen eigenen Preis. Die Quellen erwähnen keinen gemeinsamen oder gebündelten Kauf.',
            },
            {
              q: 'Läuft Cloak auf Android oder Windows?',
              a: 'Nein. Die Einträge und die Website von Polyaura decken nur iPhone, iPad und Mac ab.',
            },
            {
              q: 'Wie kann ich die Offline-Aussage selbst prüfen?',
              a: 'Der Leitfaden des Entwicklers zu privater KI auf dem iPhone empfiehlt, nach dem Modell-Download den Flugmodus einzuschalten und eine Nachricht zu senden. Dieser Test wurde hier nicht durchgeführt.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Fazit',
          content: 'Cloak: Local AI ist eine kleine Chat-App im Einmalkauf, die laut Entwickler ein empfohlenes Modell lädt und danach auf dem Gerät antwortet, mit Sprachmemos und Recap auf iPhone und iPad und einer Mac-Version seit dem 20. Oktober 2026. Die Datenschutzerklärung ist konkret darin, was gesendet wird, doch das Modell wird nicht genannt, der Code ist geschlossen, und hier wurde nichts getestet. Die App passt zu Lesern, die einen Chat auf dem Gerät ohne Einrichtung wollen und das in Kauf nehmen; wer Modelle selbst wählen und laden möchte, vergleicht [Locally AI](/de/power-local-llm/locally-ai-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[Cloak: Local AI im App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) — Beschreibung, Datenschutzlabel, Voraussetzungen und Bewertungen, geprüft am 30. Oktober 2026.',
            '[Cloak: Local AI Chat im Mac App Store](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) — Mac-Beschreibung, Voraussetzungen und Erscheinungsdatum, geprüft am 30. Oktober 2026.',
            '[Apple-Lookup-Daten zu Cloak: Local AI](https://itunes.apple.com/lookup?id=6781878402&country=us) — Version, Veröffentlichungsdaten, Preis und Dateigröße, geprüft am 30. Oktober 2026.',
            '[Polyaura: Cloak](https://polyaura.com/cloak/) und das [Changelog](https://polyaura.com/changelog/) — Produktseiten, Funktionsliste und Versionsverlauf, geprüft am 30. Oktober 2026.',
            '[Datenschutzerklärung von Polyaura](https://polyaura.com/privacy) — Datenfluss, Umfrage, Nutzungszähler und Auftragsverarbeiter, zuletzt aktualisiert am 27. Oktober 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Artikel',
          items: [
            '[Locally-AI-Test](/de/power-local-llm/locally-ai-review) — eine kostenlose Closed-Source-App, die offene Modelle auf iPhone und Mac ausführt.',
            '[PocketPal-AI-Test](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät für iOS und Android.',
            '[Private-LLM-Test](/de/power-local-llm/private-llm-review) — eine kostenpflichtige iPhone- und Mac-App mit kuratierter Modellbibliothek.',
            '[Enclave-AI-Test](/de/power-local-llm/enclave-ai-review) — eine Assistenten-App auf dem Gerät für iPhone, iPad und Mac mit optionaler Pro-Stufe.',
            '[Compass-Local-AI-Test](/de/power-local-llm/compass-local-ai-review) — eine kostenlose iPhone-Chat-App, die Apple Intelligence nutzt.',
            '[Die besten lokalen LLM-Apps für das iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere Übersicht für das iPhone.',
          ],
        },
      },
    },
    es: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-30',
      dateModified: '2026-10-30',
      next_refresh_due: '2027-04-30',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/cloak-local-ai-review-hero-es.webp',
      title: 'Reseña de Cloak: Local AI: chat de IA sin conexión en iPhone y Mac',
      seoTitle: 'Reseña de Cloak: Local AI: chat de IA sin conexión',
      intro: 'Cloak: Local AI es una app de chat de pago único para iPhone y iPad de Polyaura LLC, con una versión aparte para Mac llamada Cloak: Local AI Chat. Según el desarrollador, la app descarga durante la configuración un modelo de IA recomendado y después responde en el propio dispositivo, sin cuenta. Esta reseña refleja las fichas de la App Store, el sitio web de Polyaura y su política de privacidad, comprobados el 30 de octubre de 2026.',
      metaDescription: 'Reseña de Cloak: Local AI: chat de pago único para iPhone, iPad y Mac; descarga un modelo y responde en el dispositivo. Qué envía y qué no se verificó.',
      twitterDescription: 'Reseña de Cloak: Local AI: una app de chat de IA sin conexión para iPhone, iPad y Mac. Qué se queda en el dispositivo según la política, qué envía la versión de iPhone y qué está sin verificar.',
      audience: 'Personas con iPhone, iPad o Mac que quieren saber qué ejecuta Cloak: Local AI en el dispositivo, qué envía su versión de iPhone al desarrollador y qué confirman y qué no confirman las fuentes.',
      readTime: '6 min de lectura',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'reseña de Cloak: Local AI',
      targetKeywords: [
        'reseña cloak local ai',
        'cloak local ai app',
        'polyaura cloak',
        'chat ia sin conexión iphone',
        'app de ia privada ios',
        'chat de ia local mac',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock: '**Cloak: Local AI es una app de chat para iPhone, iPad y Mac que, según su desarrollador, ejecuta en el dispositivo un modelo de IA descargado y mantiene allí las conversaciones.** **La política de privacidad dice que la versión de iPhone envía a Polyaura dos elementos opcionales, una respuesta a una encuesta de configuración y, solo si lo activas, recuentos diarios de uso; la versión de Mac no envía nada.**',
      quickAnswerTop: {
        es: {
          question: '¿Cloak mantiene mis chats en mi dispositivo?',
          answer: 'Según el desarrollador, sí: tras una única descarga del modelo, la IA se ejecuta en el dispositivo y Polyaura nunca recibe las conversaciones. Esta reseña no probó las apps ni inspeccionó su tráfico de red.',
          bullets: [
            'Compra única de 1,99 € en la [App Store](https://apps.apple.com/es/app/cloak-local-ai/id6781878402) de España, sin suscripción; la versión de Mac es una ficha aparte.',
            'El modelo se descarga de Hugging Face durante la configuración; después, según la política, la IA funciona sin internet.',
            'Ambas fichas muestran el inglés como único idioma.',
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
          label: '¿Qué es Cloak: Local AI?',
          anchor: 'what-is-cloak',
        },
        {
          label: 'Dónde se ejecutan tus chats',
          anchor: 'where-it-runs',
        },
        {
          label: 'Cómo conseguirla',
          anchor: 'get-it',
        },
        {
          label: 'Funciones indicadas por el desarrollador',
          anchor: 'key-features',
        },
        {
          label: 'Política de privacidad y flujo de datos',
          anchor: 'privacy',
        },
        {
          label: 'Para quién es',
          anchor: 'who-should-use',
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
            { type: 'one-sentence', text: 'Cloak: Local AI es una app de chat sin conexión para iPhone, iPad y Mac que descarga una vez un modelo recomendado y, según el desarrollador, responde después en el dispositivo y sin cuenta.' },
            { type: 'plain-terms', text: 'Compras la app una vez, la abres y chateas; no hay que elegir un modelo. Si quieres comprobar la afirmación, la propia guía del desarrollador sugiere activar el modo avión tras la configuración y enviar un mensaje.' },
          ],
          items: [
            'Desarrollador: Polyaura LLC publica ambas apps, y los datos estructurados del sitio nombran a Alex Sahinidis como fundador.',
            'Requisitos: iOS o iPadOS 18.0 o posterior para iPhone y iPad; macOS 26.0 o posterior con Apple silicon para el Mac.',
            'Actualizaciones: la versión 1.2.9 para iPhone y iPad llegó el 27 de octubre de 2026; la versión 1.0 para Mac se lanzó el 20 de octubre de 2026.',
            'Código: de código cerrado, así que las afirmaciones de privacidad no se pueden comprobar en el código.',
          ],
          callouts: [{ type: 'note', text: 'Esta reseña se basa en las fichas de la App Store, los datos de consulta de Apple, el sitio web de Polyaura y su política de privacidad, comprobados el 30 de octubre de 2026. No hubo uso práctico, inspección de red ni pruebas de rendimiento.' }],
        },
        overview: {
          id: 'what-is-cloak',
          title: '¿Qué es Cloak: Local AI?',
          content: [
            '**Cloak: Local AI es un asistente de chat que el desarrollador describe como «Offline & Private»; la versión de Mac figura como Cloak: Local AI Chat.** Abres la app, se prepara en segundo plano un modelo recomendado y chateas, sin elegir modelo ni configurar nada. La versión para iPhone y iPad añade notas de voz y un resumen semanal (Recap); la ficha de Mac describe preguntas cotidianas, escritura, notas y archivos, y no menciona ninguna de las dos.',
            'La historia del desarrollador parte de un viaje a una isla griega sin cobertura móvil, que le llevó a la idea de una IA que funcione sin conexión. Otros productos comparten el nombre Cloak; esta reseña trata solo las apps publicadas por Polyaura.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Dónde se ejecutan tus chats',
          content: [
            '**Según el desarrollador, el modelo se ejecuta en el dispositivo tras una única descarga; aparte de esa descarga, solo dos elementos opcionales salen del dispositivo en iPhone y iPad.**',
          ],
          items: [
            '**Descarga del modelo.** Durante la configuración, Cloak descarga su modelo de IA por HTTPS desde Hugging Face, que, según la política, ve la dirección IP del dispositivo y los datos de la solicitud. Las fuentes no nombran el modelo ni indican su tamaño.',
            '**Chat.** Cuando el modelo está en el dispositivo, la política dice que la IA funciona sin conexión a internet. El sitio de Polyaura añade que, en los dispositivos compatibles, Apple Intelligence responde hasta que el modelo esté listo.',
            '**Notas de voz y Recap (iPhone y iPad).** La política dice que las notas se transcriben con el reconocimiento de voz de Apple en el dispositivo. Recap reconstruye los últimos siete días a partir de Fotos, Ubicación y Notas de voz, cada una opcional, y la comprensión de fotos descarga un modelo adicional.',
            '**Almacenamiento.** Las conversaciones se guardan en el almacenamiento del propio dispositivo, y la política señala que las copias de seguridad de iCloud o del ordenador pueden incluirlas. En iPhone y iPad, los datos de Recap, los documentos adjuntos y los modelos descargados quedan fuera de las copias.',
          ],
          note: 'Según la política, Cloak para Mac no hace más solicitudes de red que las descargas de modelos.',
        },
        getIt: {
          id: 'get-it',
          title: 'Cómo conseguirla',
          columns: [
            'Plataforma',
            'Dónde conseguirla',
          ],
          rows: [
            {
              'Plataforma': 'iPhone y iPad',
              'Dónde conseguirla': '[App Store](https://apps.apple.com/es/app/cloak-local-ai/id6781878402) («Cloak: Local AI», descarga de pago, iOS o iPadOS 18.0 o posterior)',
            },
            {
              'Plataforma': 'Mac',
              'Dónde conseguirla': '[Mac App Store](https://apps.apple.com/es/app/cloak-local-ai-chat/id6821064382?mt=12) («Cloak: Local AI Chat», macOS 26.0 o posterior, Apple silicon)',
            },
            {
              'Plataforma': 'Sitio web',
              'Dónde conseguirla': '[polyaura.com/cloak](https://polyaura.com/cloak/) (páginas oficiales del producto para iPhone y Mac, y el [registro de cambios](https://polyaura.com/changelog/))',
            },
            {
              'Plataforma': 'Política de privacidad',
              'Dónde conseguirla': '[Política de privacidad de Polyaura](https://polyaura.com/privacy) (cubre iPhone, iPad y Mac; última actualización el 27 de octubre de 2026)',
            },
            {
              'Plataforma': 'Código fuente',
              'Dónde conseguirla': 'No se encontró ningún repositorio público',
            },
          ],
          note: 'Versiones revisadas: 1.2.9 para iPhone y iPad (nota de versión «Small improvements and bug fixes») y 1.0 para Mac. Cada app es una compra única de 1,99 € en la tienda de España, sin suscripción, y la ficha de iPhone no muestra compras dentro de la app. La versión 1.1 (30 de septiembre de 2026) añadió Notas de voz y eliminó los límites de mensajes y notas, y la 1.2 (5 de octubre de 2026) añadió Recap.',
        },
        features: {
          id: 'key-features',
          title: 'Funciones indicadas por el desarrollador',
          content: [
            '**Todo lo siguiente procede de las fichas de la App Store, el sitio web de Polyaura y su registro de cambios; nada se probó.**',
          ],
          items: [
            '**Chat.** Varios hilos de chat guardados en local y un prompt de sistema personalizable.',
            '**Sin configuración.** Sin cuenta ni selección de modelo; el modelo recomendado se descarga y se prepara automáticamente.',
            '**Notas de voz (iPhone y iPad).** Las grabaciones se convierten en notas, próximos pasos o un chat nuevo, con transcripciones editables y una papelera para chats y notas eliminados. Desde la versión 1.2 se puede grabar una idea desde Siri, Atajos, el Centro de control, la pantalla de bloqueo o el botón de acción.',
            '**Recap (iPhone y iPad).** Un resumen de los últimos siete días a partir de cualquier combinación de Fotos, Ubicación y Notas de voz.',
            '**Sin límites de uso.** La versión 1.1 eliminó los límites de mensajes y notas.',
          ],
          note: 'La versión instalada es la que decide qué funciona realmente.',
        },
        privacy: {
          id: 'privacy',
          title: 'Política de privacidad y flujo de datos',
          content: [
            '**La política de privacidad dice que Polyaura nunca recibe conversaciones, prompts, respuestas, grabaciones de voz, transcripciones, recaps, fotos, historial de ubicación ni documentos, y que Cloak no tiene cuentas, publicidad ni rastreo.** Tampoco nombra SDK de analítica o publicidad de terceros.',
            'La versión para iPhone y iPad envía a Polyaura la respuesta a una pregunta opcional de configuración («What made you buy Cloak?») y, solo si activas «Share feature-use counts» (desactivado por defecto, con la confirmación de que tienes 18 años o más), recuentos diarios de cuatro eventos, como el inicio de la configuración o el inicio de un recap. Ninguno incluye un identificador del dispositivo. La etiqueta de privacidad de la App Store, rellenada por el desarrollador y no verificada por Apple, enumera Analytics, User Content y Other User Content como datos no vinculados contigo.',
            'Hugging Face sirve las descargas de modelos según su propia política. Netlify aloja polyaura.com y, según la política, guarda las respuestas de la encuesta y los totales diarios en su región US East; las respuestas se eliminan a los 12 meses.',
          ],
          callouts: [{ type: 'note', text: 'La política y la etiqueta son declaraciones del desarrollador. No se inspeccionó el tráfico de red y no hay código fuente que leer.' }],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quién es',
          items: [
            '**Personas con iPhone, iPad o Mac** que quieren una app de chat sencilla de compra única, sin cuenta y sin modelo que elegir.',
            '**Quienes prefieren una política concreta:** indica qué se envía y cuándo, y la prueba del modo avión puede comprobar la afirmación central.',
            '**Quienes quieren procesar notas de voz o un resumen semanal en el propio teléfono,** algo que solo ofrece la versión de iPhone y iPad.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Lo que no pudimos verificar',
          items: [
            '**Comportamiento real.** Esta reseña no cronometró respuestas, no probó el uso sin conexión ni valoró la calidad de las respuestas, el consumo de batería o el calentamiento.',
            '**El modelo.** Ninguna fuente lo nombra ni indica su tamaño de descarga, y no se probó cómo funciona el relevo con Apple Intelligence.',
            '**Código y licencia.** No se encontró ningún repositorio público, así que las afirmaciones sobre el tratamiento de datos no se pueden comprobar en el código.',
            '**Tráfico de red.** La política y la etiqueta de privacidad son declaraciones del desarrollador; ninguna se contrastó con las solicitudes reales de las apps.',
            '**La versión de Mac.** Se lanzó el 20 de octubre de 2026 como versión 1.0, y su ficha aún no incluye notas de versión.',
            '**Reputación.** La ficha de iPhone mostraba solo tres valoraciones en el momento de la comprobación.',
            '**Aportación del creador.** La petición vino del propietario del sitio; no se contactó con Polyaura y no hizo ningún comentario.',
          ],
        },
        vsAlternatives: {
          id: 'vs-alternatives',
          itemHeadings: true,
          title: 'Competidores y alternativas',
          columns: [
            'App',
            'Plataformas',
            'Precio / licencia',
            'Diferencia principal',
          ],
          rows: [
            {
              'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
              'Plataformas': 'iOS, macOS',
              'Precio / licencia': 'Gratis / Código cerrado',
              'Diferencia principal': 'Ejecuta modelos abiertos en el dispositivo con MLX',
            },
            {
              'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
              'Plataformas': 'iOS, Android',
              'Precio / licencia': 'Gratis / MIT',
              'Diferencia principal': 'Chat de código abierto que descarga los modelos que elijas',
            },
            {
              'App': '[Private LLM](/es/power-local-llm/private-llm-review)',
              'Plataformas': 'iOS, macOS',
              'Precio / licencia': 'De pago / Código cerrado',
              'Diferencia principal': 'Biblioteca de modelos seleccionada, con integración con Siri y Atajos',
            },
            {
              'App': '[Enclave AI](/es/power-local-llm/enclave-ai-review)',
              'Plataformas': 'iOS, macOS',
              'Precio / licencia': 'Freemium / Código cerrado',
              'Diferencia principal': 'Modelos en el dispositivo por defecto, modelos en la nube opcionales con Pro',
            },
          ],
          note: 'Los datos de la competencia cambian a menudo; comprueba el precio, la licencia y las plataformas de cada app en su propia ficha.',
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿Qué modelo de IA usa Cloak?',
              a: 'Ninguna de las fuentes lo nombra. La política dice que Cloak descarga sus modelos de Hugging Face, y el registro de cambios habla de un «modelo recomendado» que Cloak prepara por ti.',
            },
            {
              q: '¿Tengo que comprar por separado las versiones de iPhone y Mac?',
              a: 'Son fichas distintas de la App Store, y cada una muestra su propio precio. Las fuentes no mencionan una compra compartida ni conjunta.',
            },
            {
              q: '¿Funciona Cloak en Android o Windows?',
              a: 'No. Las fichas y el sitio de Polyaura cubren solo iPhone, iPad y Mac.',
            },
            {
              q: '¿Cómo puedo comprobar yo mismo la afirmación de que funciona sin conexión?',
              a: 'La guía del desarrollador sobre IA privada en iPhone sugiere activar el modo avión una vez descargado el modelo y enviar un mensaje. Esta reseña no hizo esa prueba.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredicto',
          content: 'Cloak: Local AI es una app de chat pequeña y de pago único que, según su desarrollador, descarga un modelo recomendado y después responde en el dispositivo, con Notas de voz y Recap en iPhone y iPad y una versión de Mac desde el 20 de octubre de 2026. Su política de privacidad es concreta sobre lo que se envía, pero el modelo no se nombra, el código es cerrado y aquí no se probó nada. Encaja con quien quiera un chat en el dispositivo sin configuración y acepte eso; quien quiera elegir y descargar modelos debería comparar [Locally AI](/es/power-local-llm/locally-ai-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[Cloak: Local AI en la App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) — descripción, etiqueta de privacidad, requisitos y valoraciones, comprobados el 30 de octubre de 2026.',
            '[Cloak: Local AI Chat en la Mac App Store](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) — descripción para Mac, requisitos y fecha de lanzamiento, comprobados el 30 de octubre de 2026.',
            '[Datos de consulta de Apple sobre Cloak: Local AI](https://itunes.apple.com/lookup?id=6781878402&country=us) — versión, fechas de lanzamiento, precio y tamaño del archivo, comprobados el 30 de octubre de 2026.',
            '[Polyaura: Cloak](https://polyaura.com/cloak/) y su [registro de cambios](https://polyaura.com/changelog/) — páginas del producto, lista de funciones e historial de versiones, comprobados el 30 de octubre de 2026.',
            '[Política de privacidad de Polyaura](https://polyaura.com/privacy) — flujo de datos, encuesta, recuentos de uso y encargados del tratamiento, última actualización el 27 de octubre de 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una app gratuita de código cerrado que ejecuta modelos abiertos en iPhone y Mac.',
            '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
            '[Reseña de Private LLM](/es/power-local-llm/private-llm-review) — una app de pago para iPhone y Mac con una biblioteca de modelos seleccionada.',
            '[Reseña de Enclave AI](/es/power-local-llm/enclave-ai-review) — una app de asistente en el dispositivo para iPhone, iPad y Mac con un nivel Pro opcional.',
            '[Reseña de Compass - Local AI](/es/power-local-llm/compass-local-ai-review) — una app de chat gratuita para iPhone que usa Apple Intelligence.',
            '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la guía más amplia para iPhone.',
          ],
        },
      },
    },
    fr: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-30',
      dateModified: '2026-10-30',
      next_refresh_due: '2027-04-30',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/cloak-local-ai-review-hero-fr.webp',
      title: 'Test de Cloak: Local AI : chat IA hors ligne sur iPhone et Mac',
      seoTitle: 'Test de Cloak: Local AI : chat IA hors ligne iPhone & Mac',
      intro: 'Cloak: Local AI est une application de chat à achat unique pour iPhone et iPad, éditée par Polyaura LLC, avec une version Mac distincte nommée Cloak: Local AI Chat. Selon le développeur, l’application télécharge un modèle d’IA recommandé lors de la configuration, puis répond sur l’appareil, sans compte. Ce test reflète les fiches de l’App Store, le site de Polyaura et sa politique de confidentialité, consultés le 30 octobre 2026.',
      metaDescription: 'Test de Cloak: Local AI : appli de chat à achat unique pour iPhone, iPad et Mac, qui télécharge un modèle puis répond sur l’appareil. Ce qu’elle envoie.',
      twitterDescription: 'Test de Cloak: Local AI : une appli de chat IA hors ligne pour iPhone, iPad et Mac. Ce qui reste sur l’appareil selon la politique, ce qu’envoie la version iPhone et ce qui n’est pas vérifié.',
      audience: 'Les utilisateurs d’iPhone, d’iPad et de Mac qui veulent savoir ce que Cloak: Local AI exécute sur l’appareil, ce que sa version iPhone envoie au développeur, et ce que les sources confirment ou non.',
      readTime: '6 min de lecture',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'test de Cloak: Local AI',
      targetKeywords: [
        'test cloak local ai',
        'cloak local ai appli',
        'polyaura cloak',
        'chat ia hors ligne iphone',
        'appli ia privée ios',
        'chat ia local mac',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock: '**Cloak: Local AI est une appli de chat pour iPhone, iPad et Mac qui, selon son développeur, exécute sur l’appareil un modèle d’IA téléchargé et y garde les conversations.** **La politique de confidentialité indique que la version iPhone envoie deux éléments facultatifs à Polyaura, une réponse à un sondage de configuration et, uniquement si vous l’activez, des compteurs quotidiens d’usage ; la version Mac n’envoie rien.**',
      quickAnswerTop: {
        fr: {
          question: 'Cloak garde-t-il mes conversations sur mon appareil ?',
          answer: 'Selon le développeur, oui : après un téléchargement unique du modèle, l’IA tourne sur l’appareil et Polyaura ne reçoit jamais les conversations. Ce test n’a ni essayé les applis ni inspecté leur trafic réseau.',
          bullets: [
            'Achat unique à 1,99 € sur l’[App Store](https://apps.apple.com/fr/app/cloak-local-ai/id6781878402) français, sans abonnement ; la version Mac est une fiche distincte.',
            'Le modèle est téléchargé depuis Hugging Face pendant la configuration ; ensuite, selon la politique, l’IA fonctionne sans internet.',
            'Les deux fiches indiquent l’anglais comme seule langue.',
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
          label: 'Qu’est-ce que Cloak: Local AI ?',
          anchor: 'what-is-cloak',
        },
        {
          label: 'Où tournent vos conversations',
          anchor: 'where-it-runs',
        },
        {
          label: 'Où l’obtenir',
          anchor: 'get-it',
        },
        {
          label: 'Fonctions annoncées par le développeur',
          anchor: 'key-features',
        },
        {
          label: 'Politique de confidentialité et flux de données',
          anchor: 'privacy',
        },
        {
          label: 'À qui s’adresse-t-elle',
          anchor: 'who-should-use',
        },
        {
          label: 'Ce que nous n’avons pas pu vérifier',
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
          label: 'Lectures associées',
          anchor: 'related-reading',
        },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: 'Points clés',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Cloak: Local AI est une appli de chat axée sur le hors ligne pour iPhone, iPad et Mac, qui télécharge une fois un modèle recommandé et, selon le développeur, répond ensuite sur l’appareil sans compte.' },
            { type: 'plain-terms', text: 'Vous achetez l’appli une fois, vous l’ouvrez et vous discutez ; aucun modèle à choisir. Pour vérifier l’affirmation, le guide du développeur suggère d’activer le mode avion après la configuration et d’envoyer un message.' },
          ],
          items: [
            'Éditeur : Polyaura LLC publie les deux applis, et les données structurées du site nomment Alex Sahinidis comme fondateur.',
            'Prérequis : iOS ou iPadOS 18.0 ou version ultérieure pour iPhone et iPad ; macOS 26.0 ou version ultérieure sur puce Apple silicon pour le Mac.',
            'Mises à jour : la version 1.2.9 pour iPhone et iPad est sortie le 27 octobre 2026 ; la version Mac 1.0 a été lancée le 20 octobre 2026.',
            'Code : source fermée, les affirmations sur la confidentialité ne peuvent donc pas être vérifiées dans le code.',
          ],
          callouts: [{ type: 'note', text: 'Ce test repose sur les fiches de l’App Store, les données de recherche d’Apple, le site de Polyaura et sa politique de confidentialité, consultés le 30 octobre 2026. Il n’y a eu ni utilisation pratique, ni inspection du réseau, ni mesure de performances.' }],
        },
        overview: {
          id: 'what-is-cloak',
          title: 'Qu’est-ce que Cloak: Local AI ?',
          content: [
            '**Cloak: Local AI est un assistant de chat que le développeur décrit comme « Offline & Private » ; la version Mac s’appelle Cloak: Local AI Chat.** Vous ouvrez l’appli, un modèle recommandé est préparé en arrière-plan et vous discutez, sans choisir de modèle ni rien configurer. La version iPhone et iPad ajoute les mémos vocaux et un récapitulatif hebdomadaire (Recap) ; la fiche Mac décrit des questions du quotidien, l’écriture, les notes et les fichiers, et ne mentionne ni l’un ni l’autre.',
            'L’histoire du développeur part d’un séjour sur une île grecque sans réseau mobile, qui lui a donné l’idée d’une IA fonctionnant hors ligne. D’autres produits portent le nom Cloak ; ce test ne traite que les applis publiées par Polyaura.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Où tournent vos conversations',
          content: [
            '**Selon le développeur, le modèle tourne sur l’appareil après un téléchargement unique ; hormis ce téléchargement, seuls deux éléments facultatifs quittent l’appareil sur iPhone et iPad.**',
          ],
          items: [
            '**Téléchargement du modèle.** Lors de la configuration, Cloak télécharge son modèle d’IA en HTTPS depuis Hugging Face, qui, selon la politique, voit l’adresse IP de l’appareil et les informations de requête. Les sources ne nomment pas le modèle et n’en donnent pas la taille.',
            '**Chat.** Une fois le modèle sur l’appareil, la politique indique que l’IA fonctionne sans connexion internet. Le site de Polyaura ajoute que, sur les appareils compatibles, Apple Intelligence répond jusqu’à ce que le modèle soit prêt.',
            '**Mémos vocaux et Recap (iPhone et iPad).** La politique indique que les mémos sont transcrits par la reconnaissance vocale d’Apple, sur l’appareil. Recap reconstitue les sept derniers jours à partir de Photos, de la localisation et des mémos vocaux, chacun facultatif, et la compréhension des photos télécharge un modèle supplémentaire.',
            '**Stockage.** Les conversations sont conservées dans le stockage de l’appareil, et la politique précise que les sauvegardes iCloud ou sur ordinateur peuvent les inclure. Sur iPhone et iPad, les données de Recap, les documents joints et les modèles téléchargés sont exclus des sauvegardes.',
          ],
          note: 'Selon la politique, Cloak pour Mac n’effectue aucune requête réseau en dehors des téléchargements de modèles.',
        },
        getIt: {
          id: 'get-it',
          title: 'Où l’obtenir',
          columns: [
            'Plateforme',
            'Où l’obtenir',
          ],
          rows: [
            {
              'Plateforme': 'iPhone et iPad',
              'Où l’obtenir': '[App Store](https://apps.apple.com/fr/app/cloak-local-ai/id6781878402) (« Cloak: Local AI », téléchargement payant, iOS ou iPadOS 18.0 ou version ultérieure)',
            },
            {
              'Plateforme': 'Mac',
              'Où l’obtenir': '[Mac App Store](https://apps.apple.com/fr/app/cloak-local-ai-chat/id6821064382?mt=12) (« Cloak: Local AI Chat », macOS 26.0 ou version ultérieure, Apple silicon)',
            },
            {
              'Plateforme': 'Site web',
              'Où l’obtenir': '[polyaura.com/cloak](https://polyaura.com/cloak/) (pages produit officielles pour iPhone et Mac, ainsi que le [journal des modifications](https://polyaura.com/changelog/))',
            },
            {
              'Plateforme': 'Politique de confidentialité',
              'Où l’obtenir': '[Politique de confidentialité de Polyaura](https://polyaura.com/privacy) (iPhone, iPad et Mac ; dernière mise à jour le 27 octobre 2026)',
            },
            {
              'Plateforme': 'Code source',
              'Où l’obtenir': 'Aucun dépôt public trouvé',
            },
          ],
          note: 'Versions testées : 1.2.9 pour iPhone et iPad (note de version « Small improvements and bug fixes ») et 1.0 pour le Mac. Chaque appli est un achat unique à 1,99 € sur l’App Store français, sans abonnement, et la fiche iPhone n’indique aucun achat intégré. La version 1.1 (30 septembre 2026) a ajouté les mémos vocaux et supprimé les limites de messages et de mémos, et la version 1.2 (5 octobre 2026) a ajouté Recap.',
        },
        features: {
          id: 'key-features',
          title: 'Fonctions annoncées par le développeur',
          content: [
            '**Tout ce qui suit provient des fiches de l’App Store, du site de Polyaura et de son journal des modifications ; rien n’a été testé.**',
          ],
          items: [
            '**Chat.** Plusieurs fils de discussion stockés en local et un prompt système personnalisable.',
            '**Aucune configuration.** Ni compte ni choix de modèle ; le modèle recommandé est téléchargé et préparé automatiquement.',
            '**Mémos vocaux (iPhone et iPad).** Les enregistrements deviennent des notes, des prochaines étapes ou une nouvelle conversation, avec des transcriptions modifiables et une corbeille pour les conversations et mémos supprimés. Depuis la version 1.2, une idée peut être enregistrée depuis Siri, Raccourcis, le Centre de contrôle, l’écran verrouillé ou le bouton Action.',
            '**Recap (iPhone et iPad).** Un résumé des sept derniers jours à partir de n’importe quelle combinaison de Photos, de localisation et de mémos vocaux.',
            '**Aucune limite d’usage.** La version 1.1 a supprimé les limites de messages et de mémos.',
          ],
          note: 'La version installée fait foi pour ce qui fonctionne réellement.',
        },
        privacy: {
          id: 'privacy',
          title: 'Politique de confidentialité et flux de données',
          content: [
            '**La politique de confidentialité indique que Polyaura ne reçoit jamais les conversations, prompts, réponses, enregistrements vocaux, transcriptions, récapitulatifs, photos, historique de localisation ni documents, et que Cloak n’a ni compte, ni publicité, ni suivi.** Elle ne mentionne aucun SDK tiers d’analyse ou de publicité.',
            'La version iPhone et iPad envoie à Polyaura la réponse à une question facultative de configuration (« What made you buy Cloak? ») et, uniquement si vous activez « Share feature-use counts » (désactivé par défaut, avec confirmation que vous avez 18 ans ou plus), des compteurs quotidiens de quatre événements, comme le démarrage de la configuration ou d’un récapitulatif. Aucun ne contient d’identifiant d’appareil. L’étiquette de confidentialité de l’App Store, remplie par le développeur et non vérifiée par Apple, classe Analytics, User Content et Other User Content parmi les données non liées à vous.',
            'Hugging Face diffuse les téléchargements de modèles selon sa propre politique. Netlify héberge polyaura.com et, selon la politique, stocke les réponses au sondage et les totaux quotidiens dans sa région US East ; les réponses sont supprimées au bout de 12 mois.',
          ],
          callouts: [{ type: 'note', text: 'La politique et l’étiquette sont des déclarations du développeur. Le trafic réseau n’a pas été inspecté, et il n’existe pas de code source à lire.' }],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'À qui s’adresse-t-elle',
          items: [
            '**Les possesseurs d’iPhone, d’iPad ou de Mac** qui veulent une appli de chat simple, à achat unique, sans compte ni modèle à choisir.',
            '**Les lecteurs qui préfèrent une politique précise :** elle indique ce qui est envoyé et quand, et le test du mode avion permet de vérifier l’affirmation centrale.',
            '**Ceux qui veulent traiter des mémos vocaux ou un récapitulatif hebdomadaire sur le téléphone lui-même,** ce que seule la version iPhone et iPad propose.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Ce que nous n’avons pas pu vérifier',
          items: [
            '**Le comportement en pratique.** Ce test n’a ni chronométré les réponses, ni essayé l’usage hors ligne, ni jugé la qualité des réponses, la consommation de batterie ou l’échauffement.',
            '**Le modèle.** Aucune source ne le nomme ni n’en donne la taille de téléchargement, et le relais avec Apple Intelligence n’a pas été testé.',
            '**Code source et licence.** Aucun dépôt public n’a été trouvé, donc les affirmations sur le traitement des données ne peuvent pas être vérifiées dans le code.',
            '**Trafic réseau.** La politique et l’étiquette de confidentialité sont des déclarations du développeur ; aucune n’a été comparée aux requêtes réelles des applis.',
            '**La version Mac.** Elle est sortie le 20 octobre 2026 en version 1.0, et sa fiche ne comporte pas encore de notes de version.',
            '**Réputation.** La fiche iPhone n’affichait que trois évaluations au moment de la vérification.',
            '**Avis de l’éditeur.** La demande vient du propriétaire du site ; Polyaura n’a pas été contacté et n’a fait aucun commentaire.',
          ],
        },
        vsAlternatives: {
          id: 'vs-alternatives',
          itemHeadings: true,
          title: 'Concurrents et alternatives',
          columns: [
            'Appli',
            'Plateformes',
            'Prix / licence',
            'Différence principale',
          ],
          rows: [
            {
              'Appli': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
              'Plateformes': 'iOS, macOS',
              'Prix / licence': 'Gratuit / Source fermée',
              'Différence principale': 'Exécute des modèles ouverts sur l’appareil via MLX',
            },
            {
              'Appli': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
              'Plateformes': 'iOS, Android',
              'Prix / licence': 'Gratuit / MIT',
              'Différence principale': 'Chat open source qui télécharge les modèles que vous choisissez',
            },
            {
              'Appli': '[Private LLM](/fr/power-local-llm/private-llm-review)',
              'Plateformes': 'iOS, macOS',
              'Prix / licence': 'Payant / Source fermée',
              'Différence principale': 'Bibliothèque de modèles sélectionnés, avec intégration à Siri et Raccourcis',
            },
            {
              'Appli': '[Enclave AI](/fr/power-local-llm/enclave-ai-review)',
              'Plateformes': 'iOS, macOS',
              'Prix / licence': 'Freemium / Source fermée',
              'Différence principale': 'Modèles sur l’appareil par défaut, modèles cloud facultatifs avec Pro',
            },
          ],
          note: 'Les informations sur la concurrence changent souvent ; vérifiez le prix, la licence et les plateformes de chaque appli sur sa propre fiche.',
        },
        faq: {
          id: 'faq',
          title: 'Questions fréquentes',
          faqs: [
            {
              q: 'Quel modèle d’IA Cloak utilise-t-il ?',
              a: 'Aucune source ne le nomme. La politique indique que Cloak télécharge ses modèles depuis Hugging Face, et le journal des modifications parle d’un « modèle recommandé » que Cloak prépare pour vous.',
            },
            {
              q: 'Dois-je acheter séparément les versions iPhone et Mac ?',
              a: 'Ce sont des fiches distinctes de l’App Store, et chacune affiche son propre prix. Les sources ne mentionnent aucun achat commun ou groupé.',
            },
            {
              q: 'Cloak fonctionne-t-il sur Android ou Windows ?',
              a: 'Non. Les fiches et le site de Polyaura ne couvrent que l’iPhone, l’iPad et le Mac.',
            },
            {
              q: 'Comment vérifier moi-même l’affirmation du hors ligne ?',
              a: 'Le guide du développeur sur l’IA privée sur iPhone suggère d’activer le mode avion une fois le modèle téléchargé, puis d’envoyer un message. Ce test n’a pas été réalisé ici.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content: 'Cloak: Local AI est une petite appli de chat à achat unique qui, selon son développeur, télécharge un modèle recommandé puis répond sur l’appareil, avec les mémos vocaux et Recap sur iPhone et iPad et une version Mac depuis le 20 octobre 2026. Sa politique de confidentialité est précise sur ce qui est envoyé, mais le modèle n’est pas nommé, le code est fermé et rien n’a été testé ici. Elle convient aux lecteurs qui veulent un chat sur l’appareil sans configuration et acceptent ces limites ; ceux qui souhaitent choisir et télécharger leurs modèles comparent [Locally AI](/fr/power-local-llm/locally-ai-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Cloak: Local AI sur l’App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) — description, étiquette de confidentialité, prérequis et évaluations, consultés le 30 octobre 2026.',
            '[Cloak: Local AI Chat sur le Mac App Store](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) — description Mac, prérequis et date de sortie, consultés le 30 octobre 2026.',
            '[Données de recherche d’Apple sur Cloak: Local AI](https://itunes.apple.com/lookup?id=6781878402&country=us) — version, dates de sortie, prix et taille du fichier, consultés le 30 octobre 2026.',
            '[Polyaura : Cloak](https://polyaura.com/cloak/) et son [journal des modifications](https://polyaura.com/changelog/) — pages produit, liste des fonctions et historique des versions, consultés le 30 octobre 2026.',
            '[Politique de confidentialité de Polyaura](https://polyaura.com/privacy) — flux de données, sondage, compteurs d’usage et sous-traitants, dernière mise à jour le 27 octobre 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures associées',
          items: [
            '[Test de Locally AI](/fr/power-local-llm/locally-ai-review) — une appli gratuite à source fermée qui exécute des modèles ouverts sur iPhone et Mac.',
            '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l’appareil pour iOS et Android.',
            '[Test de Private LLM](/fr/power-local-llm/private-llm-review) — une appli payante pour iPhone et Mac avec une bibliothèque de modèles sélectionnés.',
            '[Test d’Enclave AI](/fr/power-local-llm/enclave-ai-review) — une appli d’assistant sur l’appareil pour iPhone, iPad et Mac, avec un niveau Pro facultatif.',
            '[Test de Compass - Local AI](/fr/power-local-llm/compass-local-ai-review) — une appli de chat gratuite pour iPhone qui utilise Apple Intelligence.',
            '[Les meilleures applis LLM locales pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le guide plus large pour iPhone.',
          ],
        },
      },
    },
    ja: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-30',
      dateModified: '2026-10-30',
      next_refresh_due: '2027-04-30',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/cloak-local-ai-review-hero-ja.webp',
      title: 'Cloak: Local AIレビュー：iPhoneとMacで使うオフラインAIチャット',
      seoTitle: 'Cloak: Local AIレビュー：オフラインAIチャット',
      intro: 'Cloak: Local AIは、Polyaura LLCが提供する買い切り型のiPhone・iPad向けチャットアプリで、Mac向けには別アプリのCloak: Local AI Chatがあります。開発者によれば、初期設定時に推奨AIモデルを1つダウンロードし、その後は端末上で回答し、アカウントは不要です。このレビューは、2026年10月30日に確認したApp Storeの掲載情報、Polyauraの公式サイト、プライバシーポリシーに基づきます。',
      metaDescription: 'Cloak: Local AIのレビュー。買い切りのiPhone・iPad・Mac向けチャットアプリで、モデルを一度ダウンロードした後は端末上で回答します。送信される情報と未確認の点も整理しました。',
      twitterDescription: 'Cloak: Local AIのレビュー。iPhone・iPad・Mac向けのオフラインAIチャットアプリです。ポリシー上は端末内に残る情報、iPhone版が送る情報、未確認の点をまとめました。',
      audience: 'Cloak: Local AIが端末上で何を実行し、iPhone版が開発者に何を送るのか、情報源が何を確認していて何を確認していないのかを知りたいiPhone・iPad・Macユーザー。',
      readTime: '6分で読める',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'Cloak: Local AI レビュー',
      targetKeywords: [
        'cloak local ai レビュー',
        'cloak local ai アプリ',
        'polyaura cloak',
        'オフライン ai チャット iphone',
        'プライベート ai アプリ ios',
        'ローカル ai チャット mac',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock: '**Cloak: Local AIは、開発者によればダウンロード済みのAIモデルを端末上で実行し、会話を端末内にとどめるiPhone・iPad・Mac向けチャットアプリです。** **プライバシーポリシーによると、iPhone版がPolyauraに送るのは任意の2点、つまり初期設定のアンケート回答と、オンにした場合のみの日次の機能利用カウントで、Mac版は何も送りません。**',
      quickAnswerTop: {
        ja: {
          question: 'Cloakは会話を端末内にとどめますか？',
          answer: '開発者によれば、はい。モデルを一度ダウンロードした後はAIが端末上で動作し、Polyauraが会話を受け取ることはありません。このレビューでは、アプリの動作確認も通信の検査も行っていません。',
          bullets: [
            '日本の[App Store](https://apps.apple.com/jp/app/cloak-local-ai/id6781878402)では買い切りの¥300（日本のストア）で、サブスクリプションはありません。Mac版は別の掲載です。',
            'モデルは初期設定中にHugging Faceからダウンロードされ、その後はポリシー上、インターネットなしで動作します。',
            'どちらの掲載も、対応言語は英語のみです。',
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
          label: 'Cloak: Local AIとは',
          anchor: 'what-is-cloak',
        },
        {
          label: 'チャットが動作する場所',
          anchor: 'where-it-runs',
        },
        {
          label: '入手方法',
          anchor: 'get-it',
        },
        {
          label: '開発者が挙げる機能',
          anchor: 'key-features',
        },
        {
          label: 'プライバシーポリシーとデータの流れ',
          anchor: 'privacy',
        },
        {
          label: 'おすすめの人',
          anchor: 'who-should-use',
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
          label: '結論',
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
            { type: 'one-sentence', text: 'Cloak: Local AIは、推奨モデルを一度ダウンロードし、開発者によればその後はアカウントなしで端末上で回答する、オフライン重視のiPhone・iPad・Mac向けチャットアプリです。' },
            { type: 'plain-terms', text: 'アプリを一度購入して開き、そのままチャットします。モデルを選ぶ必要はありません。主張を確かめたい場合は、開発者自身のガイドが、設定後に機内モードをオンにしてメッセージを送ることを勧めています。' },
          ],
          items: [
            '開発元：両アプリともPolyaura LLCが公開しており、サイトの構造化データは創業者としてAlex Sahinidisの名前を挙げています。',
            '動作条件：iPhone・iPadはiOS／iPadOS 18.0以降、MacはApple silicon搭載のmacOS 26.0以降です。',
            '更新：iPhone・iPad版1.2.9は2026年10月27日に、Mac版1.0は2026年10月20日にリリースされました。',
            'ソース：クローズドソースのため、プライバシーに関する主張をコードで確認することはできません。',
          ],
          callouts: [{ type: 'note', text: 'このレビューは、2026年10月30日に確認したApp Storeの掲載情報、Appleのルックアップデータ、Polyauraの公式サイト、プライバシーポリシーに基づきます。実機での使用、通信の検査、ベンチマークは行っていません。' }],
        },
        overview: {
          id: 'what-is-cloak',
          title: 'Cloak: Local AIとは',
          content: [
            '**Cloak: Local AIは、開発者が「Offline & Private」と説明するチャットアシスタントで、Mac版はCloak: Local AI Chatという名前で掲載されています。** アプリを開くと推奨モデルがバックグラウンドで準備され、モデルを選んだり設定したりすることなくチャットできます。iPhone・iPad版にはボイスメモと週次の振り返り（Recap）が加わり、Mac版の掲載は日常の質問、文章作成、メモ、ファイルを挙げていて、そのどちらにも触れていません。',
            '開発者の話は、携帯電波のないギリシャの島での出来事から始まり、オフラインで使えるAIという発想につながったというものです。Cloakという名前の製品は他にもあります。このレビューが扱うのはPolyauraが公開するアプリだけです。',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'チャットが動作する場所',
          content: [
            '**開発者によれば、モデルは一度ダウンロードした後は端末上で動作します。このダウンロードのほかに端末の外へ出るのは、iPhone・iPadでは任意の2点だけです。**',
          ],
          items: [
            '**モデルのダウンロード。** 初期設定中、CloakはHTTPSでHugging FaceからAIモデルをダウンロードします。ポリシーによれば、Hugging Faceは端末のIPアドレスとリクエスト情報を受け取ります。モデル名もサイズも、情報源には記載がありません。',
            '**チャット。** モデルが端末に入った後は、ポリシー上、AIはインターネット接続なしで動作します。Polyauraのサイトによると、対応端末ではモデルの準備が整うまでApple Intelligenceが回答します。',
            '**ボイスメモとRecap（iPhone・iPad）。** ポリシーによれば、メモはAppleのオンデバイス音声認識で文字起こしされます。Recapは直近7日間を写真、位置情報、ボイスメモ（いずれも任意）から再構成し、写真の理解には追加モデルがダウンロードされます。',
            '**保存。** 会話は端末自身のストレージに保存され、ポリシーによればiCloudやパソコンのバックアップに含まれることがあります。iPhone・iPadでは、Recapのデータ、添付した書類、ダウンロード済みモデルはバックアップから除外されます。',
          ],
          note: 'ポリシーによれば、Mac版Cloakはモデルのダウンロード以外のネットワークリクエストを行いません。',
        },
        getIt: {
          id: 'get-it',
          title: '入手方法',
          columns: [
            'プラットフォーム',
            '入手先',
          ],
          rows: [
            {
              'プラットフォーム': 'iPhone・iPad',
              '入手先': '[App Store](https://apps.apple.com/jp/app/cloak-local-ai/id6781878402)（「Cloak: Local AI」、有料ダウンロード、iOS／iPadOS 18.0以降）',
            },
            {
              'プラットフォーム': 'Mac',
              '入手先': '[Mac App Store](https://apps.apple.com/jp/app/cloak-local-ai-chat/id6821064382?mt=12)（「Cloak: Local AI Chat」、macOS 26.0以降、Apple silicon）',
            },
            {
              'プラットフォーム': 'Webサイト',
              '入手先': '[polyaura.com/cloak](https://polyaura.com/cloak/)（iPhone・Mac向けの公式製品ページと[更新履歴](https://polyaura.com/changelog/)）',
            },
            {
              'プラットフォーム': 'プライバシーポリシー',
              '入手先': '[Polyauraのプライバシーポリシー](https://polyaura.com/privacy)（iPhone、iPad、Macが対象。最終更新は2026年10月27日）',
            },
            {
              'プラットフォーム': 'ソースコード',
              '入手先': '公開リポジトリは見つかりませんでした',
            },
          ],
          note: '確認したバージョンは、iPhone・iPad版が1.2.9（リリースノートは「Small improvements and bug fixes」）、Mac版が1.0です。どちらも日本のストアで買い切りの¥300で、サブスクリプションはなく、iPhone版の掲載にアプリ内課金の記載はありません。バージョン1.1（2026年9月30日）でボイスメモが加わりメッセージとメモの上限がなくなり、バージョン1.2（2026年10月5日）でRecapが加わりました。',
        },
        features: {
          id: 'key-features',
          title: '開発者が挙げる機能',
          content: [
            '**以下はすべてApp Storeの掲載情報、Polyauraのサイト、更新履歴に基づくもので、動作確認は行っていません。**',
          ],
          items: [
            '**チャット。** 端末内に保存される複数のチャットスレッドと、カスタマイズできるシステムプロンプト。',
            '**セットアップ不要。** アカウントもモデル選択も不要で、推奨モデルが自動でダウンロードされ準備されます。',
            '**ボイスメモ（iPhone・iPad）。** 録音をメモ、次のステップ、新しいチャットに変換でき、編集できる文字起こしと、削除したチャットやメモ用のゴミ箱があります。バージョン1.2以降は、Siri、ショートカット、コントロールセンター、ロック画面、アクションボタンから思いつきを録音できます。',
            '**Recap（iPhone・iPad）。** 写真、位置情報、ボイスメモを自由に組み合わせて、直近7日間の要約を作ります。',
            '**利用上限なし。** バージョン1.1でメッセージとメモの上限がなくなりました。',
          ],
          note: '実際に何ができるかは、インストールしたビルドが最終的な判断材料です。',
        },
        privacy: {
          id: 'privacy',
          title: 'プライバシーポリシーとデータの流れ',
          content: [
            '**プライバシーポリシーによれば、Polyauraは会話、プロンプト、回答、音声録音、文字起こし、Recap、写真、位置情報履歴、書類を一切受け取らず、Cloakにはアカウント、広告、トラッキングがありません。** サードパーティの分析SDKや広告SDKも挙げられていません。',
            'iPhone・iPad版がPolyauraに送るのは、初期設定時の任意の質問（「What made you buy Cloak?」）への回答と、「Share feature-use counts」をオンにした場合のみ（初期状態はオフで、18歳以上であることの確認が必要）、オンボーディング開始やRecap開始など4種類のイベントの日次カウントです。どちらにも端末識別子は含まれません。App Storeのプライバシーラベルは開発者自身が記入したもので、Appleは検証していません。そこではAnalytics、User Content、Other User Contentが「ユーザーに関連付けられないデータ」として挙げられています。',
            'モデルのダウンロードはHugging Faceが自社のポリシーに基づいて配信します。Netlifyはpolyaura.comをホストしており、ポリシーによればアンケート回答と日次合計を米国東部リージョンに保存し、回答は12か月後に削除されます。',
          ],
          callouts: [{ type: 'note', text: 'ポリシーとラベルは開発者の申告です。通信の検査は行っておらず、読めるソースコードもありません。' }],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'おすすめの人',
          items: [
            '**iPhone、iPad、Macをお持ちで、** アカウント不要・モデル選択不要の買い切り型チャットアプリを求める人。',
            '**具体的なポリシーを好む人。** 何がいつ送られるかが書かれており、機内モードのテストで中心的な主張を確かめられます。',
            '**ボイスメモや週次の振り返りを端末内で処理したい人。** ただし、これはiPhone・iPad版だけの機能です。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '確認できなかった点',
          items: [
            '**実際の動作。** このレビューでは、回答時間の計測、オフライン動作の確認、回答品質・電池消費・発熱の評価を行っていません。',
            '**モデル。** どの情報源もモデル名やダウンロードサイズを示しておらず、Apple Intelligenceへの切り替えの挙動も検証していません。',
            '**ソースとライセンス。** 公開リポジトリが見つからないため、データの扱いに関する主張をコードで確認できません。',
            '**通信。** ポリシーとプライバシーラベルは開発者の申告であり、アプリの実際のリクエストとは照合していません。',
            '**Mac版。** 2026年10月20日にバージョン1.0として登場したばかりで、掲載にはまだリリースノートがありません。',
            '**評判。** 確認時点で、iPhone版の掲載には評価が3件しかありませんでした。',
            '**開発者のコメント。** 依頼はサイト運営者からのもので、Polyauraには連絡しておらず、コメントもありません。',
          ],
        },
        vsAlternatives: {
          id: 'vs-alternatives',
          itemHeadings: true,
          title: '競合と代替アプリ',
          columns: [
            'アプリ',
            '対応',
            '価格/ライセンス',
            '主な違い',
          ],
          rows: [
            {
              'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
              '対応': 'iOS、macOS',
              '価格/ライセンス': '無料 / クローズドソース',
              '主な違い': 'MLXでオープンモデルを端末上で実行',
            },
            {
              'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
              '対応': 'iOS、Android',
              '価格/ライセンス': '無料 / MIT',
              '主な違い': '選んだモデルをダウンロードするオープンソースのチャット',
            },
            {
              'アプリ': '[Private LLM](/ja/power-local-llm/private-llm-review)',
              '対応': 'iOS、macOS',
              '価格/ライセンス': '有料 / クローズドソース',
              '主な違い': 'Siriやショートカットと連携する厳選モデルライブラリ',
            },
            {
              'アプリ': '[Enclave AI](/ja/power-local-llm/enclave-ai-review)',
              '対応': 'iOS、macOS',
              '価格/ライセンス': 'フリーミアム / クローズドソース',
              '主な違い': '標準は端末内モデル、Proではクラウドモデルも任意で利用可',
            },
          ],
          note: '競合アプリの情報は変わりやすいため、各アプリの掲載ページで最新の価格、ライセンス、対応プラットフォームをご確認ください。',
        },
        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'CloakはどのAIモデルを使っていますか？',
              a: 'どの情報源もモデル名を挙げていません。ポリシーによればCloakはHugging Faceからモデルをダウンロードし、更新履歴は、Cloakが用意する「推奨モデル」に言及しています。',
            },
            {
              q: 'iPhone版とMac版は別々に購入する必要がありますか？',
              a: 'App Storeの掲載は別々で、それぞれが自分の価格を表示しています。共通購入やセット購入に触れた情報源はありません。',
            },
            {
              q: 'CloakはAndroidやWindowsで動きますか？',
              a: 'いいえ。掲載ページもPolyauraのサイトも、対象はiPhone、iPad、Macのみです。',
            },
            {
              q: 'オフラインで動くという主張を自分で確かめるには？',
              a: '開発者のiPhone向けプライベートAIガイドは、モデルのダウンロード後に機内モードをオンにしてメッセージを送ることを勧めています。このレビューではそのテストを行っていません。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '結論',
          content: 'Cloak: Local AIは、開発者によれば推奨モデルを1つダウンロードして、その後は端末上で回答する小さな買い切り型チャットアプリで、iPhone・iPad版にはボイスメモとRecapがあり、Mac版は2026年10月20日から提供されています。プライバシーポリシーは何が送られるかを具体的に書いていますが、モデル名は示されず、コードは非公開で、ここでは何もテストしていません。設定不要の端末内チャットを求め、その点を了承できる人に向いています。モデルを自分で選んでダウンロードしたい場合は、[Locally AI](/ja/power-local-llm/locally-ai-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比べてください。',
        },
        sources: {
          id: 'sources',
          title: '情報源',
          items: [
            '[App StoreのCloak: Local AI](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) — 説明、プライバシーラベル、動作条件、評価。2026年10月30日確認。',
            '[Mac App StoreのCloak: Local AI Chat](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) — Mac版の説明、動作条件、リリース日。2026年10月30日確認。',
            '[Cloak: Local AIのAppleルックアップデータ](https://itunes.apple.com/lookup?id=6781878402&country=us) — バージョン、リリース日、価格、ファイルサイズ。2026年10月30日確認。',
            '[Polyaura: Cloak](https://polyaura.com/cloak/)と[更新履歴](https://polyaura.com/changelog/) — 製品ページ、機能一覧、リリース履歴。2026年10月30日確認。',
            '[Polyauraのプライバシーポリシー](https://polyaura.com/privacy) — データの流れ、アンケート、機能利用カウント、委託先。最終更新は2026年10月27日。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — オープンモデルをiPhoneとMacで動かす、無料のクローズドソースアプリ。',
            '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの、無料でオープンソースの端末内チャットクライアント。',
            '[Private LLMレビュー](/ja/power-local-llm/private-llm-review) — 厳選モデルライブラリを備えた、iPhoneとMac向けの有料アプリ。',
            '[Enclave AIレビュー](/ja/power-local-llm/enclave-ai-review) — iPhone、iPad、Mac向けで、任意のProプランがある端末内アシスタントアプリ。',
            '[Compass - Local AIレビュー](/ja/power-local-llm/compass-local-ai-review) — Apple Intelligenceを使う、無料のiPhoneチャットアプリ。',
            '[2026年版 iPhone向けローカルLLMアプリ比較](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより広い比較記事。',
          ],
        },
      },
    },
    pt: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-30',
      dateModified: '2026-10-30',
      next_refresh_due: '2027-04-30',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/cloak-local-ai-review-hero-pt.webp',
      title: 'Análise do Cloak: Local AI: chat de IA offline no iPhone e no Mac',
      seoTitle: 'Análise do Cloak: Local AI: IA offline no iPhone e no Mac',
      intro: 'O Cloak: Local AI é um app de chat de pagamento único para iPhone e iPad, da Polyaura LLC, com uma versão separada para Mac chamada Cloak: Local AI Chat. Segundo o desenvolvedor, o app baixa um modelo de IA recomendado durante a configuração e depois responde no próprio aparelho, sem conta. Esta análise reflete as páginas da App Store, o site da Polyaura e a política de privacidade, verificados em 30 de outubro de 2026.',
      metaDescription: 'Análise do Cloak: Local AI: app de chat pago uma vez para iPhone, iPad e Mac; baixa um modelo e responde no aparelho. O que envia e o que não se verificou.',
      twitterDescription: 'Análise do Cloak: Local AI: um app de chat de IA offline para iPhone, iPad e Mac. O que fica no aparelho segundo a política, o que a versão para iPhone envia e o que não foi verificado.',
      audience: 'Quem tem iPhone, iPad ou Mac e quer saber o que o Cloak: Local AI executa no aparelho, o que a versão para iPhone envia ao desenvolvedor e o que as fontes confirmam e não confirmam.',
      readTime: '6 min de leitura',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'análise do Cloak: Local AI',
      targetKeywords: [
        'análise cloak local ai',
        'cloak local ai app',
        'polyaura cloak',
        'chat de ia offline iphone',
        'app de ia privado ios',
        'chat de ia local mac',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock: '**O Cloak: Local AI é um app de chat para iPhone, iPad e Mac que, segundo o desenvolvedor, executa no aparelho um modelo de IA baixado e mantém as conversas lá.** **A política de privacidade diz que a versão para iPhone envia à Polyaura dois itens opcionais, uma resposta a uma pesquisa de configuração e, só se você ativar, contagens diárias de uso; a versão para Mac não envia nada.**',
      quickAnswerTop: {
        pt: {
          question: 'O Cloak mantém meus chats no meu aparelho?',
          answer: 'Segundo o desenvolvedor, sim: depois de um único download do modelo, a IA roda no aparelho e a Polyaura nunca recebe as conversas. Esta análise não testou os apps nem inspecionou o tráfego de rede deles.',
          bullets: [
            'Compra única de R$ 12,90 na [App Store](https://apps.apple.com/br/app/cloak-local-ai/id6781878402) do Brasil, sem assinatura; a versão para Mac é uma página separada.',
            'O modelo é baixado do Hugging Face durante a configuração; depois, segundo a política, a IA funciona sem internet.',
            'As duas páginas mostram o inglês como único idioma.',
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
          label: 'O que é o Cloak: Local AI?',
          anchor: 'what-is-cloak',
        },
        {
          label: 'Onde seus chats rodam',
          anchor: 'where-it-runs',
        },
        {
          label: 'Como obter',
          anchor: 'get-it',
        },
        {
          label: 'Recursos listados pelo desenvolvedor',
          anchor: 'key-features',
        },
        {
          label: 'Política de privacidade e fluxo de dados',
          anchor: 'privacy',
        },
        {
          label: 'Para quem é',
          anchor: 'who-should-use',
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
            { type: 'one-sentence', text: 'O Cloak: Local AI é um app de chat com foco em uso offline para iPhone, iPad e Mac que baixa uma vez um modelo recomendado e, segundo o desenvolvedor, depois responde no aparelho, sem conta.' },
            { type: 'plain-terms', text: 'Você compra o app uma vez, abre e conversa; não há modelo para escolher. Para testar a afirmação, o guia do próprio desenvolvedor sugere ativar o modo avião depois da configuração e enviar uma mensagem.' },
          ],
          items: [
            'Desenvolvedor: a Polyaura LLC publica os dois apps, e os dados estruturados do site citam Alex Sahinidis como fundador.',
            'Requisitos: iOS ou iPadOS 18.0 ou posterior para iPhone e iPad; macOS 26.0 ou posterior com Apple silicon para o Mac.',
            'Atualizações: a versão 1.2.9 para iPhone e iPad saiu em 27 de outubro de 2026; a versão 1.0 para Mac foi lançada em 20 de outubro de 2026.',
            'Código: código fechado, então as afirmações de privacidade não podem ser conferidas no código.',
          ],
          callouts: [{ type: 'note', text: 'Esta análise se baseia nas páginas da App Store, nos dados de consulta da Apple, no site da Polyaura e na política de privacidade, verificados em 30 de outubro de 2026. Não houve uso prático, inspeção de rede nem benchmark.' }],
        },
        overview: {
          id: 'what-is-cloak',
          title: 'O que é o Cloak: Local AI?',
          content: [
            '**O Cloak: Local AI é um assistente de chat que o desenvolvedor descreve como "Offline & Private"; a versão para Mac aparece como Cloak: Local AI Chat.** Você abre o app, um modelo recomendado é preparado em segundo plano e você conversa, sem escolher modelo nem configurar nada. A versão para iPhone e iPad acrescenta Notas de Voz e um resumo semanal (Recap); a página do Mac descreve perguntas do dia a dia, escrita, anotações e arquivos, e não menciona nenhum dos dois.',
            'A história do desenvolvedor começa com uma viagem a uma ilha grega sem sinal de celular, que o levou à ideia de uma IA que funcione offline. Outros produtos usam o nome Cloak; esta análise trata apenas dos apps publicados pela Polyaura.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'Onde seus chats rodam',
          content: [
            '**Segundo o desenvolvedor, o modelo roda no aparelho depois de um único download; além desse download, só dois itens opcionais saem do aparelho no iPhone e no iPad.**',
          ],
          items: [
            '**Download do modelo.** Durante a configuração, o Cloak baixa seu modelo de IA por HTTPS do Hugging Face, que, segundo a política, vê o endereço IP do aparelho e as informações da requisição. As fontes não nomeiam o modelo nem informam o tamanho dele.',
            '**Chat.** Com o modelo no aparelho, a política diz que a IA funciona sem conexão com a internet. O site da Polyaura acrescenta que, em aparelhos compatíveis, o Apple Intelligence responde até o modelo ficar pronto.',
            '**Notas de Voz e Recap (iPhone e iPad).** A política diz que as notas são transcritas pelo reconhecimento de fala da Apple no aparelho. O Recap reconstrói os últimos sete dias a partir de Fotos, Localização e Notas de Voz, cada um opcional, e o entendimento de fotos baixa um modelo adicional.',
            '**Armazenamento.** As conversas ficam no armazenamento do próprio aparelho, e a política observa que backups do iCloud ou do computador podem incluí-las. No iPhone e no iPad, os dados do Recap, os documentos anexados e os modelos baixados ficam fora dos backups.',
          ],
          note: 'Segundo a política, o Cloak para Mac não faz requisições de rede além dos downloads de modelos.',
        },
        getIt: {
          id: 'get-it',
          title: 'Como obter',
          columns: [
            'Plataforma',
            'Onde obter',
          ],
          rows: [
            {
              'Plataforma': 'iPhone e iPad',
              'Onde obter': '[App Store](https://apps.apple.com/br/app/cloak-local-ai/id6781878402) ("Cloak: Local AI", download pago, iOS ou iPadOS 18.0 ou posterior)',
            },
            {
              'Plataforma': 'Mac',
              'Onde obter': '[Mac App Store](https://apps.apple.com/br/app/cloak-local-ai-chat/id6821064382?mt=12) ("Cloak: Local AI Chat", macOS 26.0 ou posterior, Apple silicon)',
            },
            {
              'Plataforma': 'Site',
              'Onde obter': '[polyaura.com/cloak](https://polyaura.com/cloak/) (páginas oficiais do produto para iPhone e Mac, mais o [registro de alterações](https://polyaura.com/changelog/))',
            },
            {
              'Plataforma': 'Política de privacidade',
              'Onde obter': '[Política de privacidade da Polyaura](https://polyaura.com/privacy) (cobre iPhone, iPad e Mac; última atualização em 27 de outubro de 2026)',
            },
            {
              'Plataforma': 'Código-fonte',
              'Onde obter': 'Nenhum repositório público encontrado',
            },
          ],
          note: 'Versões analisadas: 1.2.9 para iPhone e iPad (nota de versão "Small improvements and bug fixes") e 1.0 para o Mac. Cada app é uma compra única de R$ 12,90 na loja brasileira, sem assinatura, e a página do iPhone não mostra compras dentro do app. A versão 1.1 (30 de setembro de 2026) trouxe as Notas de Voz e removeu os limites de mensagens e de notas, e a 1.2 (5 de outubro de 2026) acrescentou o Recap.',
        },
        features: {
          id: 'key-features',
          title: 'Recursos listados pelo desenvolvedor',
          content: [
            '**Tudo o que segue vem das páginas da App Store, do site da Polyaura e do registro de alterações; nada foi testado.**',
          ],
          items: [
            '**Chat.** Várias conversas guardadas localmente e um prompt de sistema personalizável.',
            '**Sem configuração.** Sem conta e sem escolha de modelo; o modelo recomendado é baixado e preparado automaticamente.',
            '**Notas de Voz (iPhone e iPad).** As gravações viram anotações, próximos passos ou um novo chat, com transcrições editáveis e uma Lixeira para chats e notas excluídos. Desde a versão 1.2, é possível gravar um pensamento pela Siri, pelos Atalhos, pela Central de Controle, pela tela de bloqueio ou pelo botão de ação.',
            '**Recap (iPhone e iPad).** Um resumo dos últimos sete dias feito a partir de qualquer combinação de Fotos, Localização e Notas de Voz.',
            '**Sem limites de uso.** A versão 1.1 removeu os limites de mensagens e de notas.',
          ],
          note: 'O que vale é o que a versão instalada realmente faz.',
        },
        privacy: {
          id: 'privacy',
          title: 'Política de privacidade e fluxo de dados',
          content: [
            '**A política de privacidade diz que a Polyaura nunca recebe conversas, prompts, respostas, gravações de voz, transcrições, recaps, fotos, histórico de localização nem documentos, e que o Cloak não tem contas, publicidade nem rastreamento.** Ela também não cita SDKs de terceiros para análise ou publicidade.',
            'A versão para iPhone e iPad envia à Polyaura a resposta a uma pergunta opcional de configuração ("What made you buy Cloak?") e, só se você ativar "Share feature-use counts" (desativado por padrão, com confirmação de que você tem 18 anos ou mais), contagens diárias de quatro eventos, como a configuração iniciada ou um recap iniciado. Nenhum dos dois traz um identificador do aparelho. O selo de privacidade da App Store, preenchido pelo desenvolvedor e não verificado pela Apple, lista Analytics, User Content e Other User Content como dados não vinculados a você.',
            'O Hugging Face entrega os downloads de modelos sob a própria política. A Netlify hospeda polyaura.com e, segundo a política, guarda as respostas da pesquisa e os totais diários na região US East; as respostas são excluídas após 12 meses.',
          ],
          callouts: [{ type: 'note', text: 'A política e o selo são declarações do desenvolvedor. O tráfego de rede não foi inspecionado e não há código-fonte para ler.' }],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quem é',
          items: [
            '**Donos de iPhone, iPad ou Mac** que querem um app de chat simples, de compra única, sem conta e sem modelo para escolher.',
            '**Quem prefere uma política específica:** ela diz o que é enviado e quando, e o teste do modo avião pode conferir a afirmação central.',
            '**Quem quer tratar notas de voz ou um resumo semanal no próprio celular,** algo que só a versão para iPhone e iPad oferece.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'O que não conseguimos verificar',
          items: [
            '**Comportamento na prática.** Esta análise não cronometrou respostas, não testou o uso offline nem avaliou a qualidade das respostas, o consumo de bateria ou o aquecimento.',
            '**O modelo.** Nenhuma fonte o nomeia nem informa o tamanho do download, e a transferência para o Apple Intelligence não foi testada.',
            '**Código e licença.** Nenhum repositório público foi encontrado, então as afirmações sobre o tratamento de dados não podem ser conferidas no código.',
            '**Tráfego de rede.** A política e o selo de privacidade são declarações do desenvolvedor; nenhum foi comparado com as requisições reais dos apps.',
            '**A versão para Mac.** Foi lançada em 20 de outubro de 2026 como versão 1.0, e a página dela ainda não traz notas de versão.',
            '**Reputação.** A página do iPhone mostrava só três avaliações no momento da verificação.',
            '**Posição do criador.** O pedido veio do dono do site; a Polyaura não foi contatada e não fez comentários.',
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
            'Principal diferença',
          ],
          rows: [
            {
              'App': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
              'Plataformas': 'iOS, macOS',
              'Preço / licença': 'Grátis / Código fechado',
              'Principal diferença': 'Executa modelos abertos no aparelho com MLX',
            },
            {
              'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
              'Plataformas': 'iOS, Android',
              'Preço / licença': 'Grátis / MIT',
              'Principal diferença': 'Chat de código aberto que baixa os modelos que você escolher',
            },
            {
              'App': '[Private LLM](/pt/power-local-llm/private-llm-review)',
              'Plataformas': 'iOS, macOS',
              'Preço / licença': 'Pago / Código fechado',
              'Principal diferença': 'Biblioteca de modelos selecionados, com integração à Siri e aos Atalhos',
            },
            {
              'App': '[Enclave AI](/pt/power-local-llm/enclave-ai-review)',
              'Plataformas': 'iOS, macOS',
              'Preço / licença': 'Freemium / Código fechado',
              'Principal diferença': 'Modelos no aparelho por padrão, modelos na nuvem opcionais no Pro',
            },
          ],
          note: 'Os dados dos concorrentes mudam com frequência; confira preço, licença e plataformas de cada app na página dele.',
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            {
              q: 'Qual modelo de IA o Cloak usa?',
              a: 'Nenhuma das fontes o nomeia. A política diz que o Cloak baixa seus modelos do Hugging Face, e o registro de alterações fala de um "modelo recomendado" que o Cloak prepara para você.',
            },
            {
              q: 'Preciso comprar as versões para iPhone e Mac separadamente?',
              a: 'São páginas separadas da App Store, e cada uma mostra o próprio preço. As fontes não mencionam compra compartilhada nem em pacote.',
            },
            {
              q: 'O Cloak funciona no Android ou no Windows?',
              a: 'Não. As páginas e o site da Polyaura cobrem apenas iPhone, iPad e Mac.',
            },
            {
              q: 'Como posso conferir sozinho a afirmação de funcionar offline?',
              a: 'O guia do desenvolvedor sobre IA privada no iPhone sugere ativar o modo avião depois que o modelo for baixado e enviar uma mensagem. Esta análise não fez esse teste.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredito',
          content: 'O Cloak: Local AI é um app de chat pequeno e de pagamento único que, segundo o desenvolvedor, baixa um modelo recomendado e depois responde no aparelho, com Notas de Voz e Recap no iPhone e no iPad e uma versão para Mac desde 20 de outubro de 2026. A política de privacidade é específica sobre o que é enviado, mas o modelo não é nomeado, o código é fechado e nada foi testado aqui. Serve a quem quer um chat no aparelho sem configuração e aceita isso; quem quiser escolher e baixar modelos deve comparar o [Locally AI](/pt/power-local-llm/locally-ai-review) ou o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[Cloak: Local AI na App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) — descrição, selo de privacidade, requisitos e avaliações, verificados em 30 de outubro de 2026.',
            '[Cloak: Local AI Chat na Mac App Store](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) — descrição para Mac, requisitos e data de lançamento, verificados em 30 de outubro de 2026.',
            '[Dados de consulta da Apple sobre o Cloak: Local AI](https://itunes.apple.com/lookup?id=6781878402&country=us) — versão, datas de lançamento, preço e tamanho do arquivo, verificados em 30 de outubro de 2026.',
            '[Polyaura: Cloak](https://polyaura.com/cloak/) e o [registro de alterações](https://polyaura.com/changelog/) — páginas do produto, lista de recursos e histórico de versões, verificados em 30 de outubro de 2026.',
            '[Política de privacidade da Polyaura](https://polyaura.com/privacy) — fluxo de dados, pesquisa, contagens de uso e operadores, última atualização em 27 de outubro de 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — um app gratuito de código fechado que executa modelos abertos no iPhone e no Mac.',
            '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no aparelho para iOS e Android.',
            '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — um app pago para iPhone e Mac com uma biblioteca de modelos selecionados.',
            '[Análise do Enclave AI](/pt/power-local-llm/enclave-ai-review) — um app assistente no aparelho para iPhone, iPad e Mac com um nível Pro opcional.',
            '[Análise do Compass - Local AI](/pt/power-local-llm/compass-local-ai-review) — um app de chat gratuito para iPhone que usa o Apple Intelligence.',
            '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o guia mais amplo para iPhone.',
          ],
        },
      },
    },
    ar: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-30',
      dateModified: '2026-10-30',
      next_refresh_due: '2027-04-30',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/cloak-local-ai-review-hero-ar.webp',
      title: 'مراجعة Cloak: Local AI: دردشة ذكاء اصطناعي دون اتصال على أجهزة Apple',
      seoTitle: 'مراجعة Cloak: Local AI: دردشة ذكاء اصطناعي دون اتصال',
      intro: 'Cloak: Local AI تطبيق دردشة يُشترى مرة واحدة لأجهزة iPhone وiPad من Polyaura LLC، وله نسخة منفصلة لـ Mac باسم Cloak: Local AI Chat. بحسب المطوّر، ينزّل التطبيق أثناء الإعداد نموذج ذكاء اصطناعي موصى به ثم يجيب على الجهاز نفسه دون حساب. تستند هذه المراجعة إلى صفحات App Store وموقع Polyaura وسياسة الخصوصية، وقد رُوجعت في 30 أكتوبر 2026.',
      metaDescription: 'مراجعة Cloak: Local AI: تطبيق دردشة بشراء لمرة واحدة لأجهزة iPhone وiPad وMac ينزّل نموذجًا ثم يجيب على الجهاز. ما الذي يرسله وما الذي لم يُتحقق منه.',
      twitterDescription: 'مراجعة Cloak: Local AI: تطبيق دردشة ذكاء اصطناعي دون اتصال لأجهزة iPhone وiPad وMac. ما الذي يبقى على الجهاز بحسب السياسة، وما الذي ترسله نسخة iPhone، وما الذي لم يُتحقق منه.',
      audience: 'مستخدمو iPhone وiPad وMac الذين يريدون معرفة ما ينفّذه Cloak: Local AI على الجهاز، وما ترسله نسخة iPhone إلى المطوّر، وما تؤكده المصادر وما لا تؤكده.',
      readTime: '6 دقائق للقراءة',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'مراجعة Cloak: Local AI',
      targetKeywords: [
        'مراجعة cloak local ai',
        'تطبيق cloak local ai',
        'polyaura cloak',
        'دردشة ذكاء اصطناعي دون اتصال iphone',
        'تطبيق ذكاء اصطناعي خاص ios',
        'دردشة ذكاء اصطناعي محلية mac',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock: '**Cloak: Local AI تطبيق دردشة لأجهزة iPhone وiPad وMac يشغّل، بحسب مطوّره، نموذج ذكاء اصطناعي منزّلًا على الجهاز ويُبقي المحادثات عليه.** **تقول سياسة الخصوصية إن نسخة iPhone ترسل إلى Polyaura عنصرين اختياريين: إجابة عن استبيان الإعداد، وعدّادات يومية لاستخدام الميزات إذا فعّلتها فقط؛ أما نسخة Mac فلا ترسل شيئًا.**',
      quickAnswerTop: {
        ar: {
          question: 'هل يُبقي Cloak محادثاتي على جهازي؟',
          answer: 'بحسب المطوّر، نعم: بعد تنزيل النموذج مرة واحدة يعمل الذكاء الاصطناعي على الجهاز ولا تتلقى Polyaura المحادثات أبدًا. لم تجرّب هذه المراجعة التطبيقين ولم تفحص حركة الشبكة الخاصة بهما.',
          bullets: [
            'شراء لمرة واحدة بسعر $1.99 في [App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) الأمريكي دون اشتراك؛ ونسخة Mac صفحة منفصلة.',
            'يُنزَّل النموذج من Hugging Face أثناء الإعداد؛ وبعد ذلك يعمل الذكاء الاصطناعي دون إنترنت بحسب السياسة.',
            'تعرض الصفحتان اللغة الإنجليزية لغةً وحيدة.',
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
          label: 'ما هو Cloak: Local AI؟',
          anchor: 'what-is-cloak',
        },
        {
          label: 'أين تعمل محادثاتك',
          anchor: 'where-it-runs',
        },
        {
          label: 'كيف تحصل عليه',
          anchor: 'get-it',
        },
        {
          label: 'الميزات التي يذكرها المطوّر',
          anchor: 'key-features',
        },
        {
          label: 'سياسة الخصوصية وتدفق البيانات',
          anchor: 'privacy',
        },
        {
          label: 'لمن يناسب',
          anchor: 'who-should-use',
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
            { type: 'one-sentence', text: 'Cloak: Local AI تطبيق دردشة يركّز على العمل دون اتصال لأجهزة iPhone وiPad وMac، ينزّل نموذجًا موصى به مرة واحدة ثم يجيب، بحسب المطوّر، على الجهاز دون حساب.' },
            { type: 'plain-terms', text: 'تشتري التطبيق مرة واحدة ثم تفتحه وتبدأ الدردشة؛ لا يوجد نموذج تختاره. وإذا أردت اختبار هذا الادعاء، يقترح دليل المطوّر نفسه تفعيل وضع الطيران بعد الإعداد ثم إرسال رسالة.' },
          ],
          items: [
            'المطوّر: تنشر Polyaura LLC التطبيقين، وتذكر البيانات المنظّمة في موقعها Alex Sahinidis مؤسسًا.',
            'المتطلبات: iOS أو iPadOS 18.0 أو أحدث لأجهزة iPhone وiPad؛ وmacOS 26.0 أو أحدث على Apple silicon لجهاز Mac.',
            'التحديثات: صدرت نسخة iPhone وiPad 1.2.9 في 27 أكتوبر 2026؛ وأُطلقت نسخة Mac 1.0 في 20 أكتوبر 2026.',
            'المصدر: مغلق المصدر، لذا لا يمكن التحقق من ادعاءات الخصوصية في الشيفرة.',
          ],
          callouts: [{ type: 'note', text: 'تستند هذه المراجعة إلى صفحات App Store وبيانات البحث من Apple وموقع Polyaura وسياسة الخصوصية، وقد رُوجعت في 30 أكتوبر 2026. لم يُجرَ استخدام عملي ولا فحص للشبكة ولا اختبارات أداء.' }],
        },
        overview: {
          id: 'what-is-cloak',
          title: 'ما هو Cloak: Local AI؟',
          content: [
            '**Cloak: Local AI مساعد دردشة يصفه المطوّر بأنه "Offline & Private"، وتظهر نسخة Mac باسم Cloak: Local AI Chat.** تفتح التطبيق فيُجهَّز نموذج موصى به في الخلفية وتبدأ الدردشة دون اختيار نموذج أو ضبط أي شيء. تضيف نسخة iPhone وiPad المذكرات الصوتية وملخصًا أسبوعيًا (Recap)، بينما تصف صفحة Mac الأسئلة اليومية والكتابة والملاحظات والملفات ولا تذكر أيًّا منهما.',
            'تبدأ قصة المطوّر برحلة إلى جزيرة يونانية بلا تغطية للهاتف، دفعته إلى فكرة ذكاء اصطناعي يعمل دون اتصال. وتحمل منتجات أخرى اسم Cloak؛ وتتناول هذه المراجعة التطبيقات التي تنشرها Polyaura وحدها.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: 'أين تعمل محادثاتك',
          content: [
            '**بحسب المطوّر، يعمل النموذج على الجهاز بعد تنزيل واحد؛ وبخلاف هذا التنزيل لا يغادر الجهاز سوى عنصرين اختياريين في iPhone وiPad.**',
          ],
          items: [
            '**تنزيل النموذج.** أثناء الإعداد ينزّل Cloak نموذج الذكاء الاصطناعي عبر HTTPS من Hugging Face، الذي يرى بحسب السياسة عنوان IP للجهاز ومعلومات الطلب. لا تذكر المصادر اسم النموذج ولا حجمه.',
            '**الدردشة.** بعد وصول النموذج إلى الجهاز، تقول السياسة إن الذكاء الاصطناعي يعمل دون اتصال بالإنترنت. ويضيف موقع Polyaura أن Apple Intelligence يجيب على الأجهزة المدعومة إلى أن يصبح النموذج جاهزًا.',
            '**المذكرات الصوتية وRecap (iPhone وiPad).** تقول السياسة إن المذكرات تُفرَّغ نصيًا بالتعرف على الكلام من Apple على الجهاز. ويعيد Recap بناء الأيام السبعة الماضية من الصور والموقع والمذكرات الصوتية، وكل منها اختياري، ويُنزَّل نموذج إضافي لفهم الصور.',
            '**التخزين.** تُحفظ المحادثات في مساحة تخزين الجهاز نفسه، وتشير السياسة إلى أن نسخ iCloud الاحتياطية أو نسخ الحاسوب قد تتضمنها. وفي iPhone وiPad تبقى بيانات Recap والمستندات المرفقة والنماذج المنزّلة خارج النسخ الاحتياطية.',
          ],
          note: 'تقول السياسة إن Cloak لـ Mac لا يجري أي طلبات شبكة سوى تنزيل النماذج.',
        },
        getIt: {
          id: 'get-it',
          title: 'كيف تحصل عليه',
          columns: [
            'المنصة',
            'مصدر الحصول عليه',
          ],
          rows: [
            {
              'المنصة': 'iPhone وiPad',
              'مصدر الحصول عليه': '[App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) ("Cloak: Local AI"، تنزيل مدفوع، iOS أو iPadOS 18.0 أو أحدث)',
            },
            {
              'المنصة': 'Mac',
              'مصدر الحصول عليه': '[Mac App Store](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) ("Cloak: Local AI Chat"، macOS 26.0 أو أحدث، Apple silicon)',
            },
            {
              'المنصة': 'الموقع',
              'مصدر الحصول عليه': '[polyaura.com/cloak](https://polyaura.com/cloak/) (صفحات المنتج الرسمية لـ iPhone وMac، إضافة إلى [سجل التغييرات](https://polyaura.com/changelog/))',
            },
            {
              'المنصة': 'سياسة الخصوصية',
              'مصدر الحصول عليه': '[سياسة خصوصية Polyaura](https://polyaura.com/privacy) (تشمل iPhone وiPad وMac؛ آخر تحديث في 27 أكتوبر 2026)',
            },
            {
              'المنصة': 'الشيفرة المصدرية',
              'مصدر الحصول عليه': 'لم يُعثر على مستودع عام',
            },
          ],
          note: 'النسخ التي رُوجعت: 1.2.9 لـ iPhone وiPad (ملاحظة الإصدار "Small improvements and bug fixes") و1.0 لـ Mac. كل تطبيق يُشترى مرة واحدة بسعر $1.99 في المتجر الأمريكي دون اشتراك، ولا تعرض صفحة iPhone مشتريات داخل التطبيق. أضافت النسخة 1.1 (30 سبتمبر 2026) المذكرات الصوتية وأزالت حدود الرسائل والمذكرات، وأضافت النسخة 1.2 (5 أكتوبر 2026) ميزة Recap.',
        },
        features: {
          id: 'key-features',
          title: 'الميزات التي يذكرها المطوّر',
          content: [
            '**كل ما يلي مأخوذ من صفحات App Store وموقع Polyaura وسجل تغييراتها؛ ولم يُختبر أي منه.**',
          ],
          items: [
            '**الدردشة.** عدة سلاسل دردشة محفوظة محليًا ومطالبة نظام قابلة للتخصيص.',
            '**بلا إعداد.** لا حساب ولا اختيار نموذج؛ يُنزَّل النموذج الموصى به ويُجهَّز تلقائيًا.',
            '**المذكرات الصوتية (iPhone وiPad).** تتحول التسجيلات إلى ملاحظات أو خطوات تالية أو محادثة جديدة، مع نصوص قابلة للتحرير وسلة محذوفات للمحادثات والمذكرات المحذوفة. ومنذ النسخة 1.2 يمكن تسجيل فكرة عبر Siri أو الاختصارات أو مركز التحكم أو شاشة القفل أو زر الإجراء.',
            '**Recap (iPhone وiPad).** ملخص للأيام السبعة الماضية يُبنى من أي مزيج من الصور والموقع والمذكرات الصوتية.',
            '**بلا حدود للاستخدام.** أزالت النسخة 1.1 حدود الرسائل والمذكرات.',
          ],
          note: 'النسخة المثبّتة هي الحَكَم الأخير فيما يعمل فعلًا.',
        },
        privacy: {
          id: 'privacy',
          title: 'سياسة الخصوصية وتدفق البيانات',
          content: [
            '**تقول سياسة الخصوصية إن Polyaura لا تتلقى أبدًا المحادثات أو المطالبات أو الردود أو التسجيلات الصوتية أو النصوص المفرَّغة أو ملخصات Recap أو الصور أو سجل المواقع أو المستندات، وإن Cloak بلا حسابات ولا إعلانات ولا تتبّع.** كما أنها لا تذكر أي حزم SDK تحليلية أو إعلانية من أطراف ثالثة.',
            'ترسل نسخة iPhone وiPad إلى Polyaura إجابة عن سؤال اختياري أثناء الإعداد ("What made you buy Cloak?")، وإذا فعّلت "Share feature-use counts" فقط (معطّل افتراضيًا، مع تأكيد أن عمرك 18 عامًا أو أكثر) ترسل عدّادات يومية لأربعة أحداث، مثل بدء الإعداد أو بدء Recap. ولا يحمل أيٌّ منهما معرّف جهاز. أما بطاقة الخصوصية في App Store، التي يملؤها المطوّر ولا تتحقق منها Apple، فتدرج Analytics وUser Content وOther User Content ضمن بيانات غير مرتبطة بك.',
            'تقدّم Hugging Face تنزيلات النماذج وفق سياستها الخاصة. وتستضيف Netlify الموقع polyaura.com، وتحفظ بحسب السياسة إجابات الاستبيان والمجاميع اليومية في منطقة US East، وتُحذف الإجابات بعد 12 شهرًا.',
          ],
          callouts: [{ type: 'note', text: 'السياسة والبطاقة إفادات من المطوّر. لم تُفحص حركة الشبكة، ولا توجد شيفرة مصدرية يمكن قراءتها.' }],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'لمن يناسب',
          items: [
            '**أصحاب iPhone أو iPad أو Mac** الذين يريدون تطبيق دردشة بسيطًا يُشترى مرة واحدة، بلا حساب وبلا نموذج يختارونه.',
            '**القرّاء الذين يفضّلون سياسة محددة:** فهي تذكر ما يُرسل ومتى، ويمكن لاختبار وضع الطيران أن يتحقق من الادعاء الأساسي.',
            '**من يريدون معالجة المذكرات الصوتية أو ملخص أسبوعي على الهاتف نفسه،** وهي ميزة خاصة بنسخة iPhone وiPad.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'ما لم نتمكن من التحقق منه',
          items: [
            '**السلوك العملي.** لم تقِس هذه المراجعة زمن الإجابة، ولم تختبر الاستخدام دون اتصال، ولم تقيّم جودة الإجابات أو استهلاك البطارية أو حرارة الجهاز.',
            '**النموذج.** لا يسمّيه أي مصدر ولا يذكر حجم تنزيله، ولم يُختبر كيف يجري التسليم إلى Apple Intelligence.',
            '**المصدر والترخيص.** لم يُعثر على مستودع عام، لذا لا يمكن التحقق من ادعاءات التعامل مع البيانات في الشيفرة.',
            '**حركة الشبكة.** السياسة وبطاقة الخصوصية إفادات من المطوّر؛ ولم تُقارن أي منهما بالطلبات الفعلية للتطبيقين.',
            '**نسخة Mac.** صدرت في 20 أكتوبر 2026 بوصفها النسخة 1.0، ولا تتضمن صفحتها ملاحظات إصدار حتى الآن.',
            '**السمعة.** لم تعرض صفحة iPhone وقت الفحص سوى ثلاثة تقييمات.',
            '**رأي الجهة المصنِّعة.** جاء الطلب من مالك الموقع؛ ولم يُتواصل مع Polyaura ولم يصدر عنها أي تعليق.',
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
            'الفرق الرئيسي',
          ],
          rows: [
            {
              'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
              'المنصات': 'iOS وmacOS',
              'السعر / الترخيص': 'مجاني / مغلق المصدر',
              'الفرق الرئيسي': 'يشغّل نماذج مفتوحة على الجهاز عبر MLX',
            },
            {
              'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
              'المنصات': 'iOS وAndroid',
              'السعر / الترخيص': 'مجاني / MIT',
              'الفرق الرئيسي': 'تطبيق دردشة مفتوح المصدر ينزّل النماذج التي تختارها',
            },
            {
              'التطبيق': '[Private LLM](/ar/power-local-llm/private-llm-review)',
              'المنصات': 'iOS وmacOS',
              'السعر / الترخيص': 'مدفوع / مغلق المصدر',
              'الفرق الرئيسي': 'مكتبة نماذج منتقاة مع تكامل مع Siri والاختصارات',
            },
            {
              'التطبيق': '[Enclave AI](/ar/power-local-llm/enclave-ai-review)',
              'المنصات': 'iOS وmacOS',
              'السعر / الترخيص': 'مجاني بميزات مدفوعة / مغلق المصدر',
              'الفرق الرئيسي': 'نماذج على الجهاز افتراضيًا، ونماذج سحابية اختيارية في Pro',
            },
          ],
          note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'أي نموذج ذكاء اصطناعي يستخدمه Cloak؟',
              a: 'لا يسمّيه أي من المصادر. تقول السياسة إن Cloak ينزّل نماذجه من Hugging Face، ويتحدث سجل التغييرات عن "نموذج موصى به" يجهّزه Cloak لك.',
            },
            {
              q: 'هل عليّ شراء نسختي iPhone وMac بشكل منفصل؟',
              a: 'هما صفحتان منفصلتان في App Store، وتعرض كل منهما سعرها الخاص. ولا تذكر المصادر شراءً مشتركًا أو مجمّعًا.',
            },
            {
              q: 'هل يعمل Cloak على Android أو Windows؟',
              a: 'لا. تغطي الصفحات وموقع Polyaura أجهزة iPhone وiPad وMac فقط.',
            },
            {
              q: 'كيف أتحقق بنفسي من ادعاء العمل دون اتصال؟',
              a: 'يقترح دليل المطوّر عن الذكاء الاصطناعي الخاص على iPhone تفعيل وضع الطيران بعد تنزيل النموذج ثم إرسال رسالة. لم تُجرِ هذه المراجعة ذلك الاختبار.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'الخلاصة',
          content: 'Cloak: Local AI تطبيق دردشة صغير يُشترى مرة واحدة، ينزّل بحسب مطوّره نموذجًا موصى به ثم يجيب على الجهاز، مع المذكرات الصوتية وRecap على iPhone وiPad ونسخة لـ Mac منذ 20 أكتوبر 2026. وسياسة خصوصيته محددة فيما يُرسل، لكن النموذج غير مسمّى والشيفرة مغلقة ولم يُختبر شيء هنا. يناسب القرّاء الذين يريدون دردشة على الجهاز بلا إعداد ويقبلون ذلك؛ ومن يريد اختيار النماذج وتنزيلها فليقارن بين [Locally AI](/ar/power-local-llm/locally-ai-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[Cloak: Local AI على App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) — الوصف وبطاقة الخصوصية والمتطلبات والتقييمات، رُوجعت في 30 أكتوبر 2026.',
            '[Cloak: Local AI Chat على Mac App Store](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) — وصف نسخة Mac ومتطلباتها وتاريخ إصدارها، رُوجعت في 30 أكتوبر 2026.',
            '[بيانات البحث من Apple عن Cloak: Local AI](https://itunes.apple.com/lookup?id=6781878402&country=us) — النسخة وتواريخ الإصدار والسعر وحجم الملف، رُوجعت في 30 أكتوبر 2026.',
            '[Polyaura: Cloak](https://polyaura.com/cloak/) و[سجل التغييرات](https://polyaura.com/changelog/) — صفحات المنتج وقائمة الميزات وتاريخ الإصدارات، رُوجعت في 30 أكتوبر 2026.',
            '[سياسة خصوصية Polyaura](https://polyaura.com/privacy) — تدفق البيانات والاستبيان وعدّادات الاستخدام ومزوّدو الخدمة، آخر تحديث في 27 أكتوبر 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — تطبيق مجاني مغلق المصدر يشغّل نماذج مفتوحة على iPhone وMac.',
            '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر يعمل على الجهاز لنظامي iOS وAndroid.',
            '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — تطبيق مدفوع لـ iPhone وMac مع مكتبة نماذج منتقاة.',
            '[مراجعة Enclave AI](/ar/power-local-llm/enclave-ai-review) — تطبيق مساعد يعمل على الجهاز لأجهزة iPhone وiPad وMac مع مستوى Pro اختياري.',
            '[مراجعة Compass - Local AI](/ar/power-local-llm/compass-local-ai-review) — تطبيق دردشة مجاني لـ iPhone يستخدم Apple Intelligence.',
            '[أفضل تطبيقات النماذج اللغوية المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — الدليل الأوسع لـ iPhone.',
          ],
        },
      },
    },
    zh: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-30',
      dateModified: '2026-10-30',
      next_refresh_due: '2027-04-30',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/cloak-local-ai-review-hero-zh.webp',
      title: 'Cloak: Local AI 评测：适用于 iPhone 和 Mac 的离线 AI 聊天',
      seoTitle: 'Cloak: Local AI 评测：离线 AI 聊天应用',
      intro: 'Cloak: Local AI 是 Polyaura LLC 推出的一次性付费 iPhone 和 iPad 聊天应用，Mac 版则是单独的 Cloak: Local AI Chat。据开发者介绍，应用在设置时下载一个推荐的 AI 模型，之后在设备上作答，无需账号。本评测基于 2026年10月30日核对的 App Store 页面、Polyaura 官网及其隐私政策。',
      metaDescription: 'Cloak: Local AI 评测：一次性付费的 iPhone、iPad 和 Mac 聊天应用，下载一次模型后在设备上作答。它会发送什么数据，哪些内容尚未验证。',
      twitterDescription: 'Cloak: Local AI 评测：适用于 iPhone、iPad 和 Mac 的离线 AI 聊天应用。隐私政策称哪些数据留在设备上、iPhone 版会发送什么，以及哪些内容尚未验证。',
      audience: '想了解 Cloak: Local AI 在设备上运行什么、iPhone 版会向开发者发送什么，以及资料来源哪些已确认、哪些未确认的 iPhone、iPad 和 Mac 用户。',
      readTime: '阅读约6分钟',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'Cloak: Local AI 评测',
      targetKeywords: [
        'cloak local ai 评测',
        'cloak local ai 应用',
        'polyaura cloak',
        'iphone 离线 ai 聊天',
        'ios 私密 ai 应用',
        'mac 本地 ai 聊天',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock: '**Cloak: Local AI 是一款适用于 iPhone、iPad 和 Mac 的聊天应用，据开发者介绍，它在设备上运行已下载的 AI 模型，并把对话留在设备上。** **隐私政策称，iPhone 版会向 Polyaura 发送两项可选内容：设置时的一份问卷答案，以及仅在你开启后才发送的每日功能使用计数；Mac 版不发送任何内容。**',
      quickAnswerTop: {
        zh: {
          question: 'Cloak 会把我的聊天留在设备上吗？',
          answer: '据开发者介绍，会：一次性下载模型后，AI 在设备上运行，Polyaura 不会收到对话内容。本评测没有试用这些应用，也没有检查它们的网络流量。',
          bullets: [
            '在美国 [App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) 中为一次性购买 $1.99，没有订阅；Mac 版是单独的商店页面。',
            '模型在设置过程中从 Hugging Face 下载；此后按政策所述，AI 无需联网即可运行。',
            '两个页面都只显示英语一种语言。',
          ],
          updatedDate: '2026-10',
        },
      },
      toc: [
        {
          label: '快速回答',
          anchor: 'quick-answer',
        },
        {
          label: 'Cloak: Local AI 是什么',
          anchor: 'what-is-cloak',
        },
        {
          label: '聊天在哪里运行',
          anchor: 'where-it-runs',
        },
        {
          label: '获取方式',
          anchor: 'get-it',
        },
        {
          label: '开发者列出的功能',
          anchor: 'key-features',
        },
        {
          label: '隐私政策与数据流向',
          anchor: 'privacy',
        },
        {
          label: '适合谁用',
          anchor: 'who-should-use',
        },
        {
          label: '我们未能验证的内容',
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
          label: '资料来源',
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
            { type: 'one-sentence', text: 'Cloak: Local AI 是一款以离线为主的 iPhone、iPad 和 Mac 聊天应用：下载一次推荐模型后，据开发者介绍即在设备上作答，无需账号。' },
            { type: 'plain-terms', text: '你只需购买一次，打开就能聊天，不用挑选模型。想验证这一说法，开发者自己的指南建议在设置完成后开启飞行模式，再发送一条消息。' },
          ],
          items: [
            '开发者：两款应用均由 Polyaura LLC 发布，官网的结构化数据将 Alex Sahinidis 列为创始人。',
            '系统要求：iPhone 和 iPad 需 iOS 或 iPadOS 18.0 及以上；Mac 需 macOS 26.0 及以上，且为 Apple silicon 机型。',
            '更新：iPhone 和 iPad 版 1.2.9 于 2026年10月27日发布；Mac 版 1.0 于 2026年10月20日上线。',
            '源代码：闭源，因此隐私方面的说法无法通过代码核实。',
          ],
          callouts: [{ type: 'note', text: '本评测基于 2026年10月30日核对的 App Store 页面、Apple 查询数据、Polyaura 官网及其隐私政策，没有实际上手使用、网络流量检查或基准测试。' }],
        },
        overview: {
          id: 'what-is-cloak',
          title: 'Cloak: Local AI 是什么',
          content: [
            '**Cloak: Local AI 是一款开发者称为“Offline & Private”的聊天助手，Mac 版的商店名称为 Cloak: Local AI Chat。** 打开应用后，推荐模型会在后台准备好，你可以直接聊天，无需选择模型或做任何配置。iPhone 和 iPad 版另有语音备忘录和每周回顾（Recap）；Mac 版页面只介绍日常提问、写作、笔记和文件，没有提到这两项。',
            '开发者的故事始于一次在没有手机信号的希腊小岛上的经历，由此萌生了离线可用的 AI 这一想法。名为 Cloak 的产品不止一个，本评测只涉及 Polyaura 发布的应用。',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: '聊天在哪里运行',
          content: [
            '**据开发者介绍，模型在一次性下载后即在设备上运行；除了这次下载，iPhone 和 iPad 上只有两项可选内容会离开设备。**',
          ],
          items: [
            '**模型下载。** 设置过程中，Cloak 通过 HTTPS 从 Hugging Face 下载其 AI 模型；按政策所述，Hugging Face 会看到设备的 IP 地址和请求信息。资料来源既没有给出模型名称，也没有给出模型大小。',
            '**聊天。** 模型到设备后，政策称 AI 无需联网即可运行。Polyaura 官网补充说，在受支持的设备上，模型准备好之前由 Apple Intelligence 作答。',
            '**语音备忘录和 Recap（iPhone 和 iPad）。** 政策称备忘录由 Apple 的设备端语音识别转写。Recap 会用照片、位置和语音备忘录（均为可选）重建过去七天，照片理解功能会额外下载一个模型。',
            '**存储。** 对话保存在设备自身的存储中，政策指出 iCloud 或电脑备份可能包含它们。在 iPhone 和 iPad 上，Recap 数据、附加的文档和已下载的模型不会进入备份。',
          ],
          note: '按政策所述，Mac 版 Cloak 除模型下载外不发起其他网络请求。',
        },
        getIt: {
          id: 'get-it',
          title: '获取方式',
          columns: [
            '平台',
            '获取渠道',
          ],
          rows: [
            {
              '平台': 'iPhone 和 iPad',
              '获取渠道': '[App Store](https://apps.apple.com/us/app/cloak-local-ai/id6781878402)（“Cloak: Local AI”，付费下载，iOS 或 iPadOS 18.0 及以上）',
            },
            {
              '平台': 'Mac',
              '获取渠道': '[Mac App Store](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12)（“Cloak: Local AI Chat”，macOS 26.0 及以上，Apple silicon）',
            },
            {
              '平台': '网站',
              '获取渠道': '[polyaura.com/cloak](https://polyaura.com/cloak/)（iPhone 与 Mac 的官方产品页，另有[更新日志](https://polyaura.com/changelog/)）',
            },
            {
              '平台': '隐私政策',
              '获取渠道': '[Polyaura 隐私政策](https://polyaura.com/privacy)（涵盖 iPhone、iPad 和 Mac；最后更新于 2026年10月27日）',
            },
            {
              '平台': '源代码',
              '获取渠道': '未找到公开仓库',
            },
          ],
          note: '评测版本：iPhone 和 iPad 为 1.2.9（版本说明为“Small improvements and bug fixes”），Mac 为 1.0。每款应用在美国商店均为一次性购买 $1.99，没有订阅，iPhone 页面未列出应用内购买。版本 1.1（2026年9月30日）加入语音备忘录并取消了消息和备忘录数量限制，版本 1.2（2026年10月5日）加入 Recap。',
        },
        features: {
          id: 'key-features',
          title: '开发者列出的功能',
          content: [
            '**以下内容均来自 App Store 页面、Polyaura 官网及其更新日志，没有一项经过测试。**',
          ],
          items: [
            '**聊天。** 多个保存在本地的聊天线程，以及可自定义的系统提示词。',
            '**无需设置。** 没有账号，也不用选模型；推荐模型会自动下载并准备好。',
            '**语音备忘录（iPhone 和 iPad）。** 录音可转为笔记、后续步骤或新的聊天，转写文本可编辑，已删除的聊天和备忘录会进入废纸篓。自版本 1.2 起，可通过 Siri、快捷指令、控制中心、锁定屏幕或操作按钮录下一个想法。',
            '**Recap（iPhone 和 iPad）。** 用照片、位置和语音备忘录的任意组合生成过去七天的回顾。',
            '**没有使用限制。** 版本 1.1 取消了消息和备忘录数量限制。',
          ],
          note: '实际能做什么，以安装的版本为准。',
        },
        privacy: {
          id: 'privacy',
          title: '隐私政策与数据流向',
          content: [
            '**隐私政策称，Polyaura 从不接收对话、提示词、回复、语音录音、转写文本、回顾、照片、位置历史或文档，Cloak 也没有账号、广告或跟踪。** 政策中也没有提到第三方分析或广告 SDK。',
            'iPhone 和 iPad 版会向 Polyaura 发送对设置时一个可选问题（“What made you buy Cloak?”）的回答；只有在你开启“Share feature-use counts”后（默认关闭，需确认你已年满 18 岁），才会发送四类事件的每日计数，例如引导开始或 Recap 开始。两者都不含设备标识符。App Store 的隐私标签由开发者自行填写，未经 Apple 验证，其中将 Analytics、User Content 和 Other User Content 列为“未与你关联的数据”。',
            'Hugging Face 按其自身政策提供模型下载。Netlify 托管 polyaura.com，政策称问卷答案和每日汇总存放在其美国东部区域，答案在 12 个月后删除。',
          ],
          callouts: [{ type: 'note', text: '政策和标签都是开发者的自述。未检查网络流量，也没有可供阅读的源代码。' }],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '适合谁用',
          items: [
            '**拥有 iPhone、iPad 或 Mac 的用户**，想要一款无需账号、无需挑选模型、一次性购买的简单聊天应用。',
            '**偏好具体政策的读者：** 政策写明了发送什么、何时发送，用飞行模式测试即可检验核心说法。',
            '**想在手机本机处理语音备忘录或每周回顾的人**，这是 iPhone 和 iPad 版独有的功能。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '我们未能验证的内容',
          items: [
            '**实际表现。** 本评测没有测量响应时间，没有测试离线使用，也没有评估回答质量、耗电或发热。',
            '**模型。** 没有任何资料来源给出模型名称或下载大小，Apple Intelligence 的交接方式也未经测试。',
            '**源代码与许可证。** 未找到公开仓库，因此数据处理方面的说法无法通过代码核实。',
            '**网络流量。** 政策和隐私标签均为开发者的自述，没有与应用的实际请求进行比对。',
            '**Mac 版。** 它于 2026年10月20日以 1.0 版发布，商店页面目前还没有版本说明。',
            '**口碑。** 核对时，iPhone 页面只有三条评分。',
            '**开发者意见。** 此次请求来自网站所有者；我们没有联系 Polyaura，对方也未发表任何意见。',
          ],
        },
        vsAlternatives: {
          id: 'vs-alternatives',
          itemHeadings: true,
          title: '竞品与替代方案',
          columns: [
            '应用',
            '平台',
            '价格/许可证',
            '主要区别',
          ],
          rows: [
            {
              '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
              '平台': 'iOS、macOS',
              '价格/许可证': '免费 / 闭源',
              '主要区别': '通过 MLX 在设备上运行开源模型',
            },
            {
              '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
              '平台': 'iOS、Android',
              '价格/许可证': '免费 / MIT',
              '主要区别': '开源聊天应用，可下载你自选的模型',
            },
            {
              '应用': '[Private LLM](/zh/power-local-llm/private-llm-review)',
              '平台': 'iOS、macOS',
              '价格/许可证': '付费 / 闭源',
              '主要区别': '精选模型库，集成 Siri 和快捷指令',
            },
            {
              '应用': '[Enclave AI](/zh/power-local-llm/enclave-ai-review)',
              '平台': 'iOS、macOS',
              '价格/许可证': '免费增值 / 闭源',
              '主要区别': '默认使用设备端模型，Pro 可选云端模型',
            },
          ],
          note: '竞品信息变化较快，请在各应用自己的商店页面确认最新的价格、许可证和平台。',
        },
        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'Cloak 用的是哪个 AI 模型？',
              a: '资料来源都没有给出模型名称。政策称 Cloak 从 Hugging Face 下载模型，更新日志则提到 Cloak 会为你准备一个“推荐模型”。',
            },
            {
              q: 'iPhone 版和 Mac 版需要分别购买吗？',
              a: '它们是分开的 App Store 页面，各自标有自己的价格。资料来源没有提到共享购买或捆绑购买。',
            },
            {
              q: 'Cloak 能在 Android 或 Windows 上运行吗？',
              a: '不能。商店页面和 Polyaura 官网只涉及 iPhone、iPad 和 Mac。',
            },
            {
              q: '我怎样自己验证它能离线运行？',
              a: '开发者关于 iPhone 私密 AI 的指南建议，在模型下载完成后开启飞行模式并发送一条消息。本评测没有做这项测试。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '结论',
          content: 'Cloak: Local AI 是一款小巧的一次性付费聊天应用，据开发者介绍，它下载一个推荐模型后在设备上作答，iPhone 和 iPad 版带有语音备忘录和 Recap，Mac 版自 2026年10月20日起提供。其隐私政策对发送的内容写得很具体，但模型没有公开名称，代码闭源，本评测也没有实际测试。它适合想要免设置的设备端聊天并接受这些局限的读者；想自己选择并下载模型的用户，可以对比 [Locally AI](/zh/power-local-llm/locally-ai-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
        },
        sources: {
          id: 'sources',
          title: '资料来源',
          items: [
            '[App Store 上的 Cloak: Local AI](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) — 描述、隐私标签、系统要求和评分，2026年10月30日核对。',
            '[Mac App Store 上的 Cloak: Local AI Chat](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) — Mac 版描述、系统要求和发布日期，2026年10月30日核对。',
            '[Apple 对 Cloak: Local AI 的查询数据](https://itunes.apple.com/lookup?id=6781878402&country=us) — 版本、发布日期、价格和文件大小，2026年10月30日核对。',
            '[Polyaura：Cloak](https://polyaura.com/cloak/) 及其[更新日志](https://polyaura.com/changelog/) — 产品页、功能列表和发布历史，2026年10月30日核对。',
            '[Polyaura 隐私政策](https://polyaura.com/privacy) — 数据流向、问卷、功能使用计数和服务提供方，最后更新于 2026年10月27日。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[Locally AI 评测](/zh/power-local-llm/locally-ai-review) — 一款免费闭源应用，可在 iPhone 和 Mac 上运行开源模型。',
            '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 一款免费开源的设备端聊天客户端，支持 iOS 和 Android。',
            '[Private LLM 评测](/zh/power-local-llm/private-llm-review) — 一款付费的 iPhone 和 Mac 应用，带有精选模型库。',
            '[Enclave AI 评测](/zh/power-local-llm/enclave-ai-review) — 一款适用于 iPhone、iPad 和 Mac 的设备端助手应用，另有可选 Pro 档。',
            '[Compass - Local AI 评测](/zh/power-local-llm/compass-local-ai-review) — 一款使用 Apple Intelligence 的免费 iPhone 聊天应用。',
            '[2026年 iPhone 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iPhone 应用汇总。',
          ],
        },
      },
    },
    ko: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-10-30',
      dateModified: '2026-10-30',
      next_refresh_due: '2027-04-30',
      theme: 'Mobile & Edge LLMs',
      heroImage: '/images/cloak-local-ai-review-hero-ko.webp',
      title: 'Cloak: Local AI 리뷰: iPhone·Mac용 오프라인 AI 채팅',
      seoTitle: 'Cloak: Local AI 리뷰: 오프라인 AI 채팅 앱',
      intro: 'Cloak: Local AI는 Polyaura LLC가 만든 1회 구매형 iPhone·iPad 채팅 앱이며, Mac에는 별도 앱인 Cloak: Local AI Chat이 있습니다. 개발자에 따르면 앱은 초기 설정 때 추천 AI 모델을 내려받은 뒤 기기에서 답하며 계정이 필요 없습니다. 이 리뷰는 2026년 10월 30일에 확인한 App Store 페이지, Polyaura 웹사이트, 개인정보 처리방침을 바탕으로 합니다.',
      metaDescription: 'Cloak: Local AI 리뷰. 모델을 한 번 내려받은 뒤 기기에서 답하는 1회 구매형 iPhone·iPad·Mac 채팅 앱입니다. 전송하는 정보와 확인하지 못한 점을 정리했습니다.',
      twitterDescription: 'Cloak: Local AI 리뷰. iPhone·iPad·Mac용 오프라인 AI 채팅 앱입니다. 방침상 기기에 남는 정보, iPhone 버전이 보내는 정보, 확인하지 못한 점을 정리했습니다.',
      audience: 'Cloak: Local AI가 기기에서 무엇을 실행하는지, iPhone 버전이 개발자에게 무엇을 보내는지, 출처가 무엇을 확인해 주고 무엇을 확인해 주지 않는지 알고 싶은 iPhone·iPad·Mac 사용자.',
      readTime: '6분 읽기',
      educationalLevel: 'Beginner',
      affiliateDisclosure: false,
      primaryTerm: 'Cloak: Local AI 리뷰',
      targetKeywords: [
        'cloak local ai 리뷰',
        'cloak local ai 앱',
        'polyaura cloak',
        'iphone 오프라인 ai 채팅',
        'ios 프라이빗 ai 앱',
        'mac 로컬 ai 채팅',
      ],
      current_models_mentioned: [],
      current_hardware_mentioned: [
        'iPhone',
        'iPad',
        'Mac',
      ],
      leadAnswerBlock: '**Cloak: Local AI는 개발자에 따르면 내려받은 AI 모델을 기기에서 실행하고 대화를 기기에 남겨 두는 iPhone·iPad·Mac용 채팅 앱입니다.** **개인정보 처리방침에 따르면 iPhone 버전은 Polyaura에 선택 사항 두 가지, 즉 초기 설정 설문 응답과 켠 경우에만 보내는 일별 기능 사용 횟수를 전송하며, Mac 버전은 아무것도 보내지 않습니다.**',
      quickAnswerTop: {
        ko: {
          question: 'Cloak는 채팅을 내 기기에 남겨 두나요?',
          answer: '개발자에 따르면 그렇습니다. 모델을 한 번 내려받은 뒤에는 AI가 기기에서 실행되며 Polyaura는 대화를 받지 않습니다. 이 리뷰는 앱을 직접 사용해 보지 않았고 네트워크 트래픽도 검사하지 않았습니다.',
          bullets: [
            '한국 [App Store](https://apps.apple.com/kr/app/cloak-local-ai/id6781878402)에서 ₩3,300(한국 스토어)의 1회 구매이며 구독은 없습니다. Mac 버전은 별도 페이지입니다.',
            '모델은 초기 설정 중 Hugging Face에서 내려받으며, 이후에는 방침상 인터넷 없이 AI가 작동합니다.',
            '두 페이지 모두 지원 언어는 영어뿐입니다.',
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
          label: 'Cloak: Local AI란',
          anchor: 'what-is-cloak',
        },
        {
          label: '채팅이 실행되는 곳',
          anchor: 'where-it-runs',
        },
        {
          label: '받는 방법',
          anchor: 'get-it',
        },
        {
          label: '개발자가 밝힌 기능',
          anchor: 'key-features',
        },
        {
          label: '개인정보 처리방침과 데이터 흐름',
          anchor: 'privacy',
        },
        {
          label: '이런 분께 적합합니다',
          anchor: 'who-should-use',
        },
        {
          label: '확인하지 못한 점',
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
          label: '결론',
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
            { type: 'one-sentence', text: 'Cloak: Local AI는 추천 모델을 한 번 내려받은 뒤 개발자에 따르면 계정 없이 기기에서 답하는, 오프라인 중심의 iPhone·iPad·Mac용 채팅 앱입니다.' },
            { type: 'plain-terms', text: '앱을 한 번 구매해 열고 바로 채팅하면 되며, 모델을 고를 필요가 없습니다. 주장을 확인하고 싶다면 개발자 자신의 가이드는 설정 후 비행기 모드를 켜고 메시지를 보내 보라고 권합니다.' },
          ],
          items: [
            '개발사: 두 앱 모두 Polyaura LLC가 공개하며, 웹사이트의 구조화 데이터는 Alex Sahinidis를 창업자로 명시합니다.',
            '요구 사항: iPhone·iPad는 iOS 또는 iPadOS 18.0 이상, Mac은 Apple silicon 탑재 macOS 26.0 이상입니다.',
            '업데이트: iPhone·iPad 버전 1.2.9는 2026년 10월 27일에, Mac 버전 1.0은 2026년 10월 20일에 출시되었습니다.',
            '소스: 비공개 소스여서 개인정보 보호 관련 주장을 코드로 확인할 수 없습니다.',
          ],
          callouts: [{ type: 'note', text: '이 리뷰는 2026년 10월 30일에 확인한 App Store 페이지, Apple 조회 데이터, Polyaura 웹사이트, 개인정보 처리방침을 바탕으로 합니다. 직접 사용, 네트워크 검사, 벤치마크는 하지 않았습니다.' }],
        },
        overview: {
          id: 'what-is-cloak',
          title: 'Cloak: Local AI란',
          content: [
            '**Cloak: Local AI는 개발자가 "Offline & Private"라고 설명하는 채팅 어시스턴트이며, Mac 버전은 Cloak: Local AI Chat이라는 이름으로 등록되어 있습니다.** 앱을 열면 추천 모델이 백그라운드에서 준비되고, 모델을 고르거나 설정하지 않고도 채팅할 수 있습니다. iPhone·iPad 버전에는 음성 메모와 주간 리캡(Recap)이 추가되어 있으며, Mac 페이지는 일상적인 질문, 글쓰기, 메모, 파일을 소개할 뿐 둘 다 언급하지 않습니다.',
            '개발자의 이야기는 휴대전화 신호가 없는 그리스의 섬에서 시작되며, 그 경험이 오프라인에서 작동하는 AI라는 아이디어로 이어졌다고 합니다. Cloak라는 이름의 다른 제품도 있으며, 이 리뷰는 Polyaura가 공개한 앱만 다룹니다.',
          ],
        },
        whereItRuns: {
          id: 'where-it-runs',
          title: '채팅이 실행되는 곳',
          content: [
            '**개발자에 따르면 모델은 한 번 내려받은 뒤 기기에서 실행되며, 이 다운로드를 제외하면 iPhone·iPad에서 기기 밖으로 나가는 것은 선택 사항 두 가지뿐입니다.**',
          ],
          items: [
            '**모델 다운로드.** 초기 설정 중 Cloak는 HTTPS로 Hugging Face에서 AI 모델을 내려받으며, 방침에 따르면 Hugging Face는 기기의 IP 주소와 요청 정보를 확인합니다. 출처에는 모델 이름도 크기도 나와 있지 않습니다.',
            '**채팅.** 모델이 기기에 들어온 뒤에는 방침상 AI가 인터넷 연결 없이 작동합니다. Polyaura 사이트에 따르면 지원 기기에서는 모델이 준비될 때까지 Apple Intelligence가 답합니다.',
            '**음성 메모와 Recap(iPhone·iPad).** 방침에 따르면 메모는 Apple의 기기 내 음성 인식으로 텍스트로 변환됩니다. Recap은 사진, 위치, 음성 메모(모두 선택 사항)로 지난 7일을 재구성하며, 사진 이해 기능은 추가 모델을 내려받습니다.',
            '**저장.** 대화는 기기 자체 저장소에 보관되며, 방침에 따르면 iCloud나 컴퓨터 백업에 포함될 수 있습니다. iPhone·iPad에서는 Recap 데이터, 첨부한 문서, 내려받은 모델이 백업에서 제외됩니다.',
          ],
          note: '방침에 따르면 Mac용 Cloak는 모델 다운로드 외의 네트워크 요청을 하지 않습니다.',
        },
        getIt: {
          id: 'get-it',
          title: '받는 방법',
          columns: [
            '플랫폼',
            '받는 곳',
          ],
          rows: [
            {
              '플랫폼': 'iPhone·iPad',
              '받는 곳': '[App Store](https://apps.apple.com/kr/app/cloak-local-ai/id6781878402) ("Cloak: Local AI", 유료 다운로드, iOS 또는 iPadOS 18.0 이상)',
            },
            {
              '플랫폼': 'Mac',
              '받는 곳': '[Mac App Store](https://apps.apple.com/kr/app/cloak-local-ai-chat/id6821064382?mt=12) ("Cloak: Local AI Chat", macOS 26.0 이상, Apple silicon)',
            },
            {
              '플랫폼': '웹사이트',
              '받는 곳': '[polyaura.com/cloak](https://polyaura.com/cloak/) (iPhone·Mac용 공식 제품 페이지와 [변경 내역](https://polyaura.com/changelog/))',
            },
            {
              '플랫폼': '개인정보 처리방침',
              '받는 곳': '[Polyaura 개인정보 처리방침](https://polyaura.com/privacy) (iPhone, iPad, Mac 적용, 마지막 업데이트 2026년 10월 27일)',
            },
            {
              '플랫폼': '소스 코드',
              '받는 곳': '공개 저장소를 찾지 못했습니다',
            },
          ],
          note: '확인한 버전은 iPhone·iPad가 1.2.9(릴리스 노트 "Small improvements and bug fixes"), Mac이 1.0입니다. 두 앱 모두 한국 스토어에서 ₩3,300의 1회 구매이며 구독은 없고, iPhone 페이지에는 앱 내 구입이 표시되어 있지 않습니다. 버전 1.1(2026년 9월 30일)에서 음성 메모가 추가되고 메시지와 메모 제한이 사라졌으며, 버전 1.2(2026년 10월 5일)에서 Recap이 추가되었습니다.',
        },
        features: {
          id: 'key-features',
          title: '개발자가 밝힌 기능',
          content: [
            '**아래 내용은 모두 App Store 페이지, Polyaura 웹사이트, 변경 내역에서 가져온 것이며 어느 것도 직접 테스트하지 않았습니다.**',
          ],
          items: [
            '**채팅.** 기기에 저장되는 여러 채팅 스레드와 사용자 지정 시스템 프롬프트.',
            '**설정 불필요.** 계정도 모델 선택도 없으며, 추천 모델이 자동으로 내려받아져 준비됩니다.',
            '**음성 메모(iPhone·iPad).** 녹음을 메모, 다음 단계, 새 채팅으로 바꿀 수 있고, 편집 가능한 텍스트 변환본과 삭제한 채팅·메모용 휴지통이 있습니다. 버전 1.2부터는 Siri, 단축어, 제어 센터, 잠금 화면, 동작 버튼에서 생각을 녹음할 수 있습니다.',
            '**Recap(iPhone·iPad).** 사진, 위치, 음성 메모를 자유롭게 조합해 지난 7일의 요약을 만듭니다.',
            '**사용 제한 없음.** 버전 1.1에서 메시지와 메모 제한이 사라졌습니다.',
          ],
          note: '실제로 무엇이 작동하는지는 설치한 빌드가 최종 기준입니다.',
        },
        privacy: {
          id: 'privacy',
          title: '개인정보 처리방침과 데이터 흐름',
          content: [
            '**개인정보 처리방침에 따르면 Polyaura는 대화, 프롬프트, 답변, 음성 녹음, 텍스트 변환본, 리캡, 사진, 위치 기록, 문서를 전혀 받지 않으며, Cloak에는 계정, 광고, 추적이 없습니다.** 제3자 분석·광고 SDK도 명시되어 있지 않습니다.',
            'iPhone·iPad 버전은 초기 설정 시 선택 질문("What made you buy Cloak?")에 대한 응답을 Polyaura에 보내며, "Share feature-use counts"를 켠 경우에만(기본값은 꺼짐, 18세 이상 확인 필요) 온보딩 시작이나 리캡 시작 같은 이벤트 네 가지의 일별 횟수를 보냅니다. 둘 다 기기 식별자를 포함하지 않습니다. App Store 개인정보 라벨은 개발자가 직접 작성한 것으로 Apple이 검증하지 않았으며, Analytics, User Content, Other User Content를 사용자와 연결되지 않은 데이터로 나열합니다.',
            '모델 다운로드는 Hugging Face가 자체 방침에 따라 제공합니다. Netlify는 polyaura.com을 호스팅하며, 방침에 따르면 설문 응답과 일별 합계를 US East 리전에 저장하고 응답은 12개월 뒤 삭제됩니다.',
          ],
          callouts: [{ type: 'note', text: '방침과 라벨은 개발자의 진술입니다. 네트워크 트래픽은 검사하지 않았고 읽어 볼 소스 코드도 없습니다.' }],
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '이런 분께 적합합니다',
          items: [
            '**iPhone, iPad, Mac 사용자 중** 계정과 모델 선택 없이 쓸 수 있는 간단한 1회 구매형 채팅 앱을 원하는 분.',
            '**구체적인 방침을 선호하는 분.** 무엇이 언제 전송되는지 적혀 있고, 비행기 모드 테스트로 핵심 주장을 확인할 수 있습니다.',
            '**음성 메모나 주간 요약을 휴대전화 안에서 처리하고 싶은 분.** 이는 iPhone·iPad 버전에만 있는 기능입니다.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '확인하지 못한 점',
          items: [
            '**실제 동작.** 이 리뷰는 응답 시간을 재거나 오프라인 사용을 시험하지 않았고, 답변 품질, 배터리 소모, 발열도 평가하지 않았습니다.',
            '**모델.** 어떤 출처도 모델 이름이나 다운로드 크기를 밝히지 않으며, Apple Intelligence로의 전환 방식도 시험하지 않았습니다.',
            '**소스와 라이선스.** 공개 저장소를 찾지 못해 데이터 처리에 관한 주장을 코드로 확인할 수 없습니다.',
            '**네트워크 트래픽.** 방침과 개인정보 라벨은 개발자의 진술이며, 앱의 실제 요청과 대조하지 않았습니다.',
            '**Mac 버전.** 2026년 10월 20일에 버전 1.0으로 출시되었고, 페이지에는 아직 릴리스 노트가 없습니다.',
            '**평판.** 확인 시점에 iPhone 페이지의 평점은 3개뿐이었습니다.',
            '**제작자 의견.** 요청은 사이트 운영자가 한 것이며 Polyaura에는 연락하지 않았고 별도 의견도 없습니다.',
          ],
        },
        vsAlternatives: {
          id: 'vs-alternatives',
          itemHeadings: true,
          title: '경쟁 앱과 대안',
          columns: [
            '앱',
            '플랫폼',
            '가격/라이선스',
            '주요 차이',
          ],
          rows: [
            {
              '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
              '플랫폼': 'iOS, macOS',
              '가격/라이선스': '무료 / 비공개 소스',
              '주요 차이': 'MLX로 오픈 모델을 기기에서 실행',
            },
            {
              '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
              '플랫폼': 'iOS, Android',
              '가격/라이선스': '무료 / MIT',
              '주요 차이': '사용자가 고른 모델을 내려받는 오픈소스 채팅',
            },
            {
              '앱': '[Private LLM](/ko/power-local-llm/private-llm-review)',
              '플랫폼': 'iOS, macOS',
              '가격/라이선스': '유료 / 비공개 소스',
              '주요 차이': 'Siri·단축어와 연동되는 엄선된 모델 라이브러리',
            },
            {
              '앱': '[Enclave AI](/ko/power-local-llm/enclave-ai-review)',
              '플랫폼': 'iOS, macOS',
              '가격/라이선스': '부분 유료 / 비공개 소스',
              '주요 차이': '기본은 기기 내 모델, Pro에서 선택적으로 클라우드 모델',
            },
          ],
          note: '경쟁 앱 정보는 자주 바뀌므로 각 앱 페이지에서 최신 가격, 라이선스, 플랫폼을 확인하십시오.',
        },
        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: 'Cloak는 어떤 AI 모델을 사용하나요?',
              a: '어떤 출처도 모델 이름을 밝히지 않습니다. 방침에 따르면 Cloak는 Hugging Face에서 모델을 내려받고, 변경 내역은 Cloak가 준비해 주는 "추천 모델"을 언급합니다.',
            },
            {
              q: 'iPhone 버전과 Mac 버전을 따로 구매해야 하나요?',
              a: 'App Store 페이지가 별도이고 각각 자체 가격이 표시됩니다. 공동 구매나 묶음 구매를 언급한 출처는 없습니다.',
            },
            {
              q: 'Cloak는 Android나 Windows에서 작동하나요?',
              a: '아니요. 페이지와 Polyaura 사이트는 iPhone, iPad, Mac만 다룹니다.',
            },
            {
              q: '오프라인 작동 주장을 직접 확인하려면 어떻게 하나요?',
              a: 'iPhone용 프라이빗 AI에 관한 개발자 가이드는 모델을 내려받은 뒤 비행기 모드를 켜고 메시지를 보내 보라고 권합니다. 이 리뷰는 그 테스트를 하지 않았습니다.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '결론',
          content: 'Cloak: Local AI는 개발자에 따르면 추천 모델을 하나 내려받은 뒤 기기에서 답하는 작은 1회 구매형 채팅 앱으로, iPhone·iPad에는 음성 메모와 Recap이 있고 Mac 버전은 2026년 10월 20일부터 제공됩니다. 개인정보 처리방침은 무엇이 전송되는지 구체적으로 밝히지만, 모델은 공개되지 않았고 코드는 비공개이며 여기서는 아무것도 테스트하지 않았습니다. 설정 없는 기기 내 채팅을 원하고 이런 점을 받아들이는 분께 맞습니다. 모델을 직접 고르고 내려받고 싶다면 [Locally AI](/ko/power-local-llm/locally-ai-review)나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 비교해 보십시오.',
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[App Store의 Cloak: Local AI](https://apps.apple.com/us/app/cloak-local-ai/id6781878402) — 설명, 개인정보 라벨, 요구 사항, 평점. 2026년 10월 30일 확인.',
            '[Mac App Store의 Cloak: Local AI Chat](https://apps.apple.com/us/app/cloak-local-ai-chat/id6821064382?mt=12) — Mac 버전 설명, 요구 사항, 출시일. 2026년 10월 30일 확인.',
            '[Cloak: Local AI의 Apple 조회 데이터](https://itunes.apple.com/lookup?id=6781878402&country=us) — 버전, 출시일, 가격, 파일 크기. 2026년 10월 30일 확인.',
            '[Polyaura: Cloak](https://polyaura.com/cloak/)과 [변경 내역](https://polyaura.com/changelog/) — 제품 페이지, 기능 목록, 릴리스 이력. 2026년 10월 30일 확인.',
            '[Polyaura 개인정보 처리방침](https://polyaura.com/privacy) — 데이터 흐름, 설문, 기능 사용 횟수, 수탁 업체. 마지막 업데이트 2026년 10월 27일.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 글',
          items: [
            '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — 오픈 모델을 iPhone과 Mac에서 실행하는 무료 비공개 소스 앱.',
            '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 기기 내 채팅 클라이언트.',
            '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — 엄선된 모델 라이브러리를 갖춘 유료 iPhone·Mac 앱.',
            '[Enclave AI 리뷰](/ko/power-local-llm/enclave-ai-review) — 선택형 Pro 등급이 있는 iPhone, iPad, Mac용 기기 내 어시스턴트 앱.',
            '[Compass - Local AI 리뷰](/ko/power-local-llm/compass-local-ai-review) — Apple Intelligence를 쓰는 무료 iPhone 채팅 앱.',
            '[2026년 iPhone용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone용 더 폭넓은 비교 글.',
          ],
        },
      },
    },
}
