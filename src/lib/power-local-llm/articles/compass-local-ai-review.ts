// Compass - Local AI Review: Free On-Device AI Chat for iPhone
// Slug: compass-local-ai-review
// Companion to: locally-ai-review, private-mind-review, pocketpal-ai-review, ensu-review, lm-mini-review, best-local-llm-apps-iphone-2026
// Sources: App Store listing id6760742955 (US storefront raw HTML incl. version history; DE/JP/KR/BR storefront lookups for price),
// Apple iTunes lookup API, and the public GitHub repository CamouLabs/Compass (README incl. its privacy policy) — read 2026-10-26.
// No hands-on use. The request came from the site owner, not from the developer: no maker comment exists.
// Last upstream update 2026-08-20 (v6.1, 67 days before 2026-10-26) => no stale warning yet; the 90-day line is crossed on 2026-11-18.
// Locality is local by default; the optional web search (off by default) sends the query text to DuckDuckGo or Brave.

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
    heroImage: '/images/compass-local-ai-review-hero-en.webp',
    title: 'Compass - Local AI Review: Free On-Device AI Chat for iPhone',
    seoTitle: 'Compass - Local AI Review: On-Device iPhone Chat App',
    intro: 'Compass - Local AI is a free chat app for iPhone and iPad from the App Store seller Shryas Bhurat, with Camou Labs in the copyright line. According to its listing and public README, it handles chats on the device through Apple Intelligence, reads attached images with on-device OCR and offers an optional web search. This review reflects the store listing and README as checked on 26 October 2026.',
    metaDescription: 'Compass - Local AI review: free iPhone chat app that answers on the device with Apple Intelligence, reads screenshots by OCR and has optional web search.',
    twitterDescription: 'Compass - Local AI review: a free iPhone chat app that answers on the device with Apple Intelligence. What runs locally, what the optional web search sends out and what is unverified.',
    audience: 'iPhone and iPad owners who want to know whether Compass - Local AI really keeps chats on the device, what its optional web search sends out and what the sources confirm and do not.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Compass - Local AI review',
    targetKeywords: [
      'compass local ai review',
      'compass local ai app',
      'on-device ai chat iphone',
      'apple intelligence chat app',
      'private ai assistant ios',
      'offline ai chat iphone',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
    ],
    leadAnswerBlock: '**Compass - Local AI is a free iPhone chat app that, according to its listing and README, answers on the device with Apple Intelligence and reads attached images with on-device OCR.** **Web search is optional and off by default; when you switch it on, your search query goes to DuckDuckGo or Brave.**',
    quickAnswerTop: {
      en: {
        question: 'Does Compass keep my chats on my iPhone?',
        answer: 'According to the developer, yes by default: chat, OCR and memory run on the device, and nothing leaves it unless you switch on web search. This review did not test the app or inspect its network traffic.',
        bullets: [
          'Free on the [App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955), with no in-app purchases listed.',
          'Uses Apple\'s Foundation Models where Apple Intelligence is available, with a lightweight fallback on other devices.',
          'The listing shows English as the only language.',
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
        label: 'What Is Compass - Local AI?',
        anchor: 'what-is-compass',
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
          {
            type: 'one-sentence',
            text: 'Compass - Local AI is a free iPhone and iPad chat app that uses Apple Intelligence for on-device answers, reads attached images with OCR and can optionally search the web.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from the App Store and type a question. The answer is produced by the model built into your device; if you turn on web search in Settings, the app also sends a search query to DuckDuckGo or Brave to cite sources.',
          },
        ],
        items: [
          'Developer: the App Store seller is Shryas Bhurat and the copyright line reads Camou Labs; the first release came on 29 March 2026.',
          'Requirements: iOS or iPadOS 26.0 or later; the full Apple Intelligence experience needs a device that supports it.',
          'Source: the code is public on GitHub, but the repository has no licence file and no published releases.',
          'Website: the listing links no developer website, and the only public pages found are the repository and the App Store listing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store listing, Apple\'s lookup data and the public README, checked on 26 October 2026. It involved no hands-on use, network inspection or benchmarking.',
          },
        ],
      },
      overview: {
        id: 'what-is-compass',
        title: 'What Is Compass - Local AI?',
        content: [
          '**Compass - Local AI is a minimal chat assistant for Apple devices; its App Store subtitle is "On-device AI assistant."** The listing describes a Notes-style chat, screenshots and photos read with on-device OCR, streaming answers and a home screen where recent chats can be reopened or deleted.',
          'The download is 2.3 MB, small because, per the README, the app uses the model Apple ships with the device instead of bundling its own. The listing names no company website.',
        ],
      },
      whereItRuns: {
        id: 'where-it-runs',
        title: 'Where Your Chats Run',
        content: [
          '**According to the README, every step runs on the device by default; the one exception is the optional web search.**',
        ],
        items: [
          '**Chat.** On a device with Apple Intelligence, the README says answers come from Apple\'s Foundation Models; other devices use a lightweight on-device fallback that the README does not describe further.',
          '**Images.** Attached screenshots and photos have their text extracted with Apple\'s on-device Vision OCR. The listing does not claim that the model interprets the picture itself.',
          '**Memory.** Conversations and a rolling memory summary of each long session are stored in the app\'s local storage.',
          '**Web search, optional.** It is off by default. When it is on and the device is online, the query text goes to DuckDuckGo, or to Brave if you add your own API key; the README says no identifiers or conversation history are attached, and results are ranked on the device.',
        ],
        note: 'The App Store description says "no cloud transmission" and "no external servers" and does not mention web search; the README and the version 6.0 release notes do. Leave search off to keep every step on the phone.',
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
            Platform: 'iPhone and iPad',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) (free download, iOS or iPadOS 26.0 or later)',
          },
          {
            Platform: 'Mac',
            'Where to get it': 'Same App Store listing (macOS 26.0+, Apple M1+); designed for iPad, not verified for macOS',
          },
          {
            Platform: 'Source code',
            'Where to get it': '[GitHub repository CamouLabs/Compass](https://github.com/CamouLabs/Compass) (Xcode project; no releases published)',
          },
          {
            Platform: 'Website',
            'Where to get it': 'No official website found; the App Store listing links none',
          },
          {
            Platform: 'Privacy policy',
            'Where to get it': '[Compass privacy policy](https://github.com/CamouLabs/Compass#privacy-policy) (a section of the repository README)',
          },
        ],
        note: 'Version reviewed: 6.1, released on 20 August 2026 with the note "Better UI". Version 6.0 (11 August 2026) added a thinking mode that shows the thought, search and answer steps, shorter answers, compact sources and stronger web search. The app is free and lists no in-app purchases.',
      },
      features: {
        id: 'key-features',
        title: 'Features Listed by the Developer',
        content: [
          '**Everything below comes from the App Store description, release notes and README; none of it was tested.**',
        ],
        items: [
          '**Chat.** A Notes-style chat with streaming answers; recent chats can be reopened or deleted from the home screen.',
          '**Images.** Attach screenshots or photos and let the app read their text with on-device OCR.',
          '**Long-session memory.** The last turns stay verbatim, older ones are folded into a rolling summary, and relevant older messages are recalled by on-device similarity search.',
          '**Answer pipeline.** The README describes a small on-device pipeline that decides whether fresh facts are needed, retrieves and reranks sources when search is on, and drops citations the answer does not support.',
          '**Thinking mode.** Since version 6.0 the app can show its thought, search and answer steps while it works.',
        ],
        note: 'The installed build is the final authority on what works.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy Policy and Data Flow',
        content: [
          '**The privacy policy says Compass does not collect, store or transmit personal data to the developer and that the developer operates no backend that can access conversations.** It names no analytics, advertising or tracking SDKs and says Photo Library access is limited to the images you choose to attach.',
          'The policy sits in the public README, and the App Store privacy label says "Data Not Collected", which Apple notes it has not verified. The policy discloses the optional web search and the two providers; the store description does not.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The source can be read, but the App Store build was not compared with it and network traffic was not inspected. Anyone who enables web search should expect the query text to reach DuckDuckGo or Brave.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**iPhone owners with an Apple Intelligence device** who want a simple, free chat app that answers on the device.',
          '**Readers who want to check a privacy claim in code** before trusting it, since the Xcode project is public.',
          '**People who want cited web answers without an account:** search works with DuckDuckGo out of the box.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on behavior.** This review did not time answers, test offline use or judge answer quality, including the thinking mode.',
          '**The fallback model.** The README calls it lightweight but does not name it or say how it compares with Apple Intelligence.',
          '**The licence.** The repository has no LICENSE file, so the terms for reusing the code are unclear.',
          '**Store build versus repository.** No releases or tags exist, and the last repository push (11 August 2026) predates version 6.1 of 20 August 2026.',
          '**Support and maker.** The listing shows no website or support link, although the policy points readers to a support email on the App Store page.',
          '**Mac build.** The listing says the app is designed for iPad and not verified for macOS.',
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
            App: '[Locally AI](/power-local-llm/locally-ai-review)',
            Platforms: 'iOS, macOS',
            'Price / license': 'Free / Closed source',
            'Key difference': 'Runs open models on-device via MLX',
          },
          {
            App: '[Private Mind](/power-local-llm/private-mind-review)',
            Platforms: 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source offline chat with on-device document Q&A',
          },
          {
            App: '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            Platforms: 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source chat that downloads models you choose',
          },
          {
            App: '[Ensu](/power-local-llm/ensu-review)',
            Platforms: 'iOS, Android, desktop',
            'Price / license': 'Free / AGPL-3.0',
            'Key difference': 'Open-source app with downloaded models and image input',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Compass run on Android?',
            a: 'No Android build was found; the listing covers iPhone, iPad, Mac and Apple Vision devices only.',
          },
          {
            q: 'Can I use Compass in a language other than English?',
            a: 'The listing shows English as the only language, and no other language is mentioned in the README.',
          },
          {
            q: 'Can I build Compass myself?',
            a: 'Yes, the README gives an Xcode setup: open the project, choose a signing team and run it on a device. Without a licence file, the terms for reusing the code are not stated.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Compass - Local AI is a small, free iPhone chat app that has been updated several times since its March 2026 launch and, according to its README, keeps answers on the device by default. Its limits are a repository without a licence file, a store description that leaves out web search, a single seller with no website and no hands-on test here. It suits readers with an Apple Intelligence device who want a minimal on-device chat; anyone who wants to choose and download models should compare [Locally AI](/power-local-llm/locally-ai-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Compass - Local AI on the App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) — description, version history, privacy label and requirements, checked 26 October 2026.',
          '[Apple lookup data for Compass - Local AI](https://itunes.apple.com/lookup?id=6760742955&country=us) — version, release dates, price, file size and supported devices, checked 26 October 2026.',
          '[Compass on GitHub](https://github.com/CamouLabs/Compass) — source code and README with features, setup and the privacy policy, checked 26 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a free, closed-source app that runs open models on iPhone and Mac.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[Ensu Review](/power-local-llm/ensu-review) — a free, open-source chat app from Ente Labs.',
          '[LM Mini Review](/power-local-llm/lm-mini-review) — an iPhone chat app that also connects to your own LM Studio or Ollama server.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Compass - Local AI Review: Free On-Device AI Chat for iPhone',
      description: 'Compass - Local AI review: a free iPhone chat app that answers on the device with Apple Intelligence. What runs locally, what the optional web search sends out and what is unverified.',
      url: 'https://www.promptquorum.com/power-local-llm/compass-local-ai-review',
      inLanguage: 'en',
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
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
        audienceType: 'iPhone and iPad users evaluating an on-device AI chat app',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Compass - Local AI',
        },
        {
          '@type': 'Thing',
          name: 'On-device AI',
        },
        {
          '@type': 'Thing',
          name: 'iPhone',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/compass-local-ai-review',
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
          name: 'Compass - Local AI Review',
          item: 'https://www.promptquorum.com/power-local-llm/compass-local-ai-review',
        },
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
    heroImage: '/images/compass-local-ai-review-hero-de.webp',
    title: 'Compass - Local AI im Test: Kostenloser KI-Chat auf dem iPhone',
    seoTitle: 'Compass - Local AI im Test: KI-Chat auf dem iPhone',
    intro: 'Compass - Local AI ist eine kostenlose Chat-App für iPhone und iPad des App-Store-Anbieters Shryas Bhurat, in dessen Copyright-Zeile Camou Labs steht. Laut Eintrag und öffentlicher README antwortet sie mit Apple Intelligence auf dem Gerät, liest angehängte Bilder per OCR auf dem Gerät und bietet eine optionale Websuche. Dieser Test gibt Store-Eintrag und README wieder, wie am 26. Oktober 2026 geprüft.',
    metaDescription: 'Compass - Local AI im Test: kostenlose iPhone-Chat-App mit Apple Intelligence auf dem Gerät, liest Screenshots per OCR. Websuche ist optional.',
    twitterDescription: 'Compass - Local AI im Test: eine kostenlose iPhone-Chat-App, die mit Apple Intelligence auf dem Gerät antwortet. Was lokal läuft, was die optionale Websuche sendet und was ungeprüft ist.',
    audience: 'iPhone- und iPad-Nutzer, die wissen möchten, ob Compass - Local AI Chats wirklich auf dem Gerät hält, was die optionale Websuche nach außen sendet und was die Quellen bestätigen und was nicht.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Compass - Local AI Test',
    targetKeywords: [
      'compass local ai test',
      'compass local ai app',
      'ki chat auf dem gerät iphone',
      'apple intelligence chat app',
      'private ki assistent ios',
      'offline ki chat iphone',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
    ],
    leadAnswerBlock: '**Compass - Local AI ist eine kostenlose iPhone-Chat-App, die laut Eintrag und README mit Apple Intelligence auf dem Gerät antwortet und angehängte Bilder per OCR auf dem Gerät liest.** **Die Websuche ist optional und standardmäßig aus; wenn Sie sie einschalten, geht Ihre Suchanfrage an DuckDuckGo oder Brave.**',
    quickAnswerTop: {
      de: {
        question: 'Bleiben meine Chats in Compass auf dem iPhone?',
        answer: 'Laut Entwickler standardmäßig ja: Chat, OCR und Gedächtnis laufen auf dem Gerät, und nichts verlässt es, solange Sie die Websuche nicht einschalten. Dieser Test hat die App weder ausprobiert noch ihren Netzwerkverkehr geprüft.',
        bullets: [
          'Kostenlos im [App Store](https://apps.apple.com/de/app/compass-local-ai/id6760742955), ohne aufgeführte In-App-Käufe.',
          'Nutzt Apples Foundation Models, wo Apple Intelligence verfügbar ist, und einen schlanken Ersatz auf anderen Geräten.',
          'Der Eintrag nennt Englisch als einzige Sprache.',
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
        label: 'Was ist Compass - Local AI?',
        anchor: 'what-is-compass',
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
          {
            type: 'one-sentence',
            text: 'Compass - Local AI ist eine kostenlose Chat-App für iPhone und iPad, die mit Apple Intelligence auf dem Gerät antwortet, angehängte Bilder per OCR auf dem Gerät liest und optional im Web suchen kann.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren sie aus dem App Store und tippen eine Frage. Die Antwort erzeugt das in Ihr Gerät eingebaute Modell; schalten Sie in den Einstellungen die Websuche ein, sendet die App zusätzlich eine Suchanfrage an DuckDuckGo oder Brave, um Quellen zu zitieren.',
          },
        ],
        items: [
          'Entwickler: Anbieter im App Store ist Shryas Bhurat, die Copyright-Zeile nennt Camou Labs; die erste Version erschien am 29. März 2026.',
          'Voraussetzungen: iOS oder iPadOS 26.0 oder neuer; das volle Apple-Intelligence-Erlebnis braucht ein Gerät, das es unterstützt.',
          'Quellcode: Der Code ist auf GitHub öffentlich, das Repository enthält aber keine Lizenzdatei und keine veröffentlichten Releases.',
          'Website: Der Eintrag verlinkt keine Entwickler-Website; öffentlich gefunden wurden nur das Repository und der App-Store-Eintrag.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test beruht auf dem App-Store-Eintrag, den Lookup-Daten von Apple und der öffentlichen README, geprüft am 26. Oktober 2026. Es gab keine praktische Nutzung, keine Netzwerkanalyse und keine Benchmarks.',
          },
        ],
      },
      overview: {
        id: 'what-is-compass',
        title: 'Was ist Compass - Local AI?',
        content: [
          '**Compass - Local AI ist ein minimaler Chat-Assistent für Apple-Geräte; der Untertitel im App Store lautet „On-device AI assistant“.** Der Eintrag beschreibt einen Chat im Stil der Notizen-App, Screenshots und Fotos, die per OCR auf dem Gerät gelesen werden, gestreamte Antworten und einen Startbildschirm, auf dem sich letzte Chats erneut öffnen oder löschen lassen.',
          'Der Download ist 2,3 MB groß – klein, weil die App laut README das mit dem Gerät gelieferte Apple-Modell nutzt, statt ein eigenes mitzubringen. Der Eintrag nennt keine Firmen-Website.',
        ],
      },
      whereItRuns: {
        id: 'where-it-runs',
        title: 'Wo Ihre Chats laufen',
        content: [
          '**Laut README läuft standardmäßig jeder Schritt auf dem Gerät; die einzige Ausnahme ist die optionale Websuche.**',
        ],
        items: [
          '**Chat.** Auf einem Gerät mit Apple Intelligence stammen die Antworten laut README aus Apples Foundation Models; andere Geräte nutzen einen schlanken Ersatz auf dem Gerät, den die README nicht näher beschreibt.',
          '**Bilder.** Aus angehängten Screenshots und Fotos wird der Text mit Apples OCR (Vision) auf dem Gerät gelesen. Der Eintrag behauptet nicht, dass das Modell das Bild selbst deutet.',
          '**Gedächtnis.** Gespräche und eine fortlaufende Zusammenfassung jeder langen Sitzung werden im lokalen Speicher der App abgelegt.',
          '**Websuche, optional.** Sie ist standardmäßig aus. Ist sie an und das Gerät online, geht der Anfragetext an DuckDuckGo oder, mit eigenem API-Schlüssel, an Brave; laut README werden weder Kennungen noch der Gesprächsverlauf mitgesendet, und die Ergebnisse werden auf dem Gerät eingeordnet.',
        ],
        note: 'Die Beschreibung im App Store spricht von „no cloud transmission“ und „no external servers“ und erwähnt die Websuche nicht; die README und die Hinweise zu Version 6.0 tun es. Lassen Sie die Suche aus, damit jeder Schritt auf dem Telefon bleibt.',
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
            Plattform: 'iPhone und iPad',
            Bezugsquelle: '[App Store](https://apps.apple.com/de/app/compass-local-ai/id6760742955) (kostenloser Download, iOS oder iPadOS 26.0 oder neuer)',
          },
          {
            Plattform: 'Mac',
            Bezugsquelle: 'Derselbe App-Store-Eintrag (macOS 26.0 oder neuer, Apple M1 oder neuer); die Seite nennt „Designed for iPad. Not verified for macOS.“',
          },
          {
            Plattform: 'Quellcode',
            Bezugsquelle: '[GitHub-Repository CamouLabs/Compass](https://github.com/CamouLabs/Compass) (Xcode-Projekt; keine Releases veröffentlicht)',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: 'Keine offizielle Website gefunden; der App-Store-Eintrag verlinkt keine',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Datenschutzerklärung von Compass](https://github.com/CamouLabs/Compass#privacy-policy) (ein Abschnitt der Repository-README)',
          },
        ],
        note: 'Getestete Version: 6.1, veröffentlicht am 20. August 2026 mit dem Hinweis „Better UI“. Version 6.0 (11. August 2026) brachte einen Denkmodus, der Denk-, Such- und Antwortschritte zeigt, kürzere Antworten, kompakte Quellen und eine stärkere Websuche. Die App ist kostenlos und führt keine In-App-Käufe auf.',
      },
      features: {
        id: 'key-features',
        title: 'Vom Entwickler genannte Funktionen',
        content: [
          '**Alles Folgende stammt aus App-Store-Beschreibung, Versionshinweisen und README; nichts davon wurde getestet.**',
        ],
        items: [
          '**Chat.** Ein Chat im Stil der Notizen-App mit gestreamten Antworten; letzte Chats lassen sich vom Startbildschirm aus erneut öffnen oder löschen.',
          '**Bilder.** Screenshots oder Fotos anhängen und den Text per OCR auf dem Gerät lesen lassen.',
          '**Gedächtnis für lange Sitzungen.** Die letzten Beiträge bleiben wörtlich erhalten, ältere werden zu einer fortlaufenden Zusammenfassung verdichtet, und passende ältere Nachrichten holt eine Ähnlichkeitssuche auf dem Gerät zurück.',
          '**Antwort-Pipeline.** Die README beschreibt eine kleine Pipeline auf dem Gerät, die entscheidet, ob aktuelle Fakten nötig sind, bei aktiver Suche Quellen abruft und neu ordnet und Belege verwirft, die die Antwort nicht stützt.',
          '**Denkmodus.** Seit Version 6.0 kann die App ihre Denk-, Such- und Antwortschritte während der Arbeit anzeigen.',
        ],
        note: 'Maßgeblich dafür, was funktioniert, ist die installierte Version.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutzerklärung und Datenfluss',
        content: [
          '**Die Datenschutzerklärung besagt, dass Compass keine personenbezogenen Daten erhebt, speichert oder an den Entwickler überträgt und dass der Entwickler kein Backend betreibt, das auf Gespräche zugreifen kann.** Sie nennt keine Analyse-, Werbe- oder Tracking-SDKs und sagt, der Zugriff auf die Fotomediathek beschränke sich auf die Bilder, die Sie anhängen.',
          'Die Erklärung steht in der öffentlichen README, und das Datenschutzlabel im App Store lautet „Data Not Collected“; Apple weist darauf hin, es nicht geprüft zu haben. Die Erklärung legt die optionale Websuche und die beiden Anbieter offen, die Store-Beschreibung nicht.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Der Quellcode ist lesbar, doch die Version aus dem App Store wurde nicht damit verglichen und der Netzwerkverkehr nicht untersucht. Wer die Websuche aktiviert, muss damit rechnen, dass der Anfragetext DuckDuckGo oder Brave erreicht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        items: [
          '**iPhone-Besitzer mit einem Apple-Intelligence-Gerät,** die eine einfache, kostenlose Chat-App wollen, die auf dem Gerät antwortet.',
          '**Leser, die eine Datenschutzaussage im Code prüfen möchten,** bevor sie ihr vertrauen, denn das Xcode-Projekt ist öffentlich.',
          '**Nutzer, die Webantworten mit Quellen ohne Konto wollen:** Die Suche funktioniert direkt mit DuckDuckGo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht prüfen konnten',
        items: [
          '**Praktisches Verhalten.** Dieser Test hat weder Antwortzeiten gemessen noch die Offline-Nutzung getestet noch die Antwortqualität bewertet, auch nicht im Denkmodus.',
          '**Das Ersatzmodell.** Die README nennt es schlank, benennt es aber nicht und sagt nicht, wie es sich zu Apple Intelligence verhält.',
          '**Die Lizenz.** Das Repository enthält keine LICENSE-Datei; die Bedingungen für eine Wiederverwendung des Codes sind daher unklar.',
          '**Store-Version und Repository.** Es gibt weder Releases noch Tags, und der letzte Push ins Repository (11. August 2026) liegt vor Version 6.1 vom 20. August 2026.',
          '**Support und Hersteller.** Der Eintrag zeigt weder Website noch Support-Link, obwohl die Erklärung auf eine Support-E-Mail auf der App-Store-Seite verweist.',
          '**Mac-Version.** Der Eintrag sagt, die App sei für das iPad entwickelt und nicht für macOS geprüft.',
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
            App: '[Locally AI](/de/power-local-llm/locally-ai-review)',
            Plattformen: 'iOS, macOS',
            'Preis / Lizenz': 'Gratis / Closed Source',
            Hauptunterschied: 'Führt offene Modelle per MLX auf dem Gerät aus',
          },
          {
            App: '[Private Mind](/de/power-local-llm/private-mind-review)',
            Plattformen: 'iOS, Android',
            'Preis / Lizenz': 'Gratis / MIT',
            Hauptunterschied: 'Quelloffener Offline-Chat mit Dokumenten-Fragen auf dem Gerät',
          },
          {
            App: '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            Plattformen: 'iOS, Android',
            'Preis / Lizenz': 'Gratis / MIT',
            Hauptunterschied: 'Quelloffener Chat, der von Ihnen gewählte Modelle lädt',
          },
          {
            App: '[Ensu](/de/power-local-llm/ensu-review)',
            Plattformen: 'iOS, Android, Desktop',
            'Preis / Lizenz': 'Gratis / AGPL-3.0',
            Hauptunterschied: 'Quelloffene App mit heruntergeladenen Modellen und Bildeingabe',
          },
        ],
        note: 'Angaben zur Konkurrenz ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Läuft Compass auf Android?',
            a: 'Es wurde keine Android-Version gefunden; der Eintrag deckt nur iPhone, iPad, Mac und Apple-Vision-Geräte ab.',
          },
          {
            q: 'Kann ich Compass in einer anderen Sprache als Englisch nutzen?',
            a: 'Der Eintrag nennt Englisch als einzige Sprache, und die README erwähnt keine weitere.',
          },
          {
            q: 'Kann ich Compass selbst bauen?',
            a: 'Ja, die README beschreibt die Einrichtung in Xcode: Projekt öffnen, Signing-Team wählen und auf einem Gerät starten. Ohne Lizenzdatei sind die Bedingungen für die Wiederverwendung des Codes nicht festgelegt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Compass - Local AI ist eine kleine, kostenlose iPhone-Chat-App, die seit dem Start im März 2026 mehrfach aktualisiert wurde und laut README Antworten standardmäßig auf dem Gerät hält. Grenzen sind ein Repository ohne Lizenzdatei, eine Store-Beschreibung, die die Websuche auslässt, ein einzelner Anbieter ohne Website und der fehlende praktische Test. Sie passt zu Lesern mit einem Apple-Intelligence-Gerät, die einen minimalen Chat auf dem Gerät wollen; wer Modelle selbst wählen und laden möchte, vergleicht [Locally AI](/de/power-local-llm/locally-ai-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Compass - Local AI im App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) — Beschreibung, Versionsverlauf, Datenschutzlabel und Voraussetzungen, geprüft am 26. Oktober 2026.',
          '[Apple-Lookup-Daten zu Compass - Local AI](https://itunes.apple.com/lookup?id=6760742955&country=us) — Version, Veröffentlichungsdaten, Preis, Dateigröße und unterstützte Geräte, geprüft am 26. Oktober 2026.',
          '[Compass auf GitHub](https://github.com/CamouLabs/Compass) — Quellcode und README mit Funktionen, Einrichtung und Datenschutzerklärung, geprüft am 26. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Locally-AI-Test](/de/power-local-llm/locally-ai-review) — eine kostenlose Closed-Source-App, die offene Modelle auf iPhone und Mac ausführt.',
          '[Private-Mind-Test](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App für iPhone und Android.',
          '[PocketPal-AI-Test](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät für iOS und Android.',
          '[Ensu-Test](/de/power-local-llm/ensu-review) — eine kostenlose, quelloffene Chat-App von Ente Labs.',
          '[LM-Mini-Test](/de/power-local-llm/lm-mini-review) — eine iPhone-Chat-App, die sich auch mit Ihrem eigenen LM-Studio- oder Ollama-Server verbindet.',
          '[Die besten lokalen LLM-Apps für das iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere Übersicht für das iPhone.',
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
    heroImage: '/images/compass-local-ai-review-hero-es.webp',
    title: 'Reseña de Compass - Local AI: chat de IA gratuito en el dispositivo para iPhone',
    seoTitle: 'Reseña de Compass - Local AI: chat de IA en iPhone',
    intro: 'Compass - Local AI es una app de chat gratuita para iPhone y iPad del vendedor de la App Store Shryas Bhurat, con Camou Labs en la línea de copyright. Según su ficha y su README público, responde en el dispositivo con Apple Intelligence, lee las imágenes adjuntas con OCR en el dispositivo y ofrece una búsqueda web opcional. Esta reseña refleja la ficha de la tienda y el README, revisados el 26 de octubre de 2026.',
    metaDescription: 'Reseña de Compass - Local AI: chat gratuito para iPhone que responde en el dispositivo con Apple Intelligence y lee capturas por OCR. Búsqueda opcional.',
    twitterDescription: 'Reseña de Compass - Local AI: una app de chat gratuita para iPhone que responde en el dispositivo con Apple Intelligence. Qué es local, qué envía la búsqueda web opcional y qué no está verificado.',
    audience: 'Usuarios de iPhone y iPad que quieren saber si Compass - Local AI mantiene de verdad los chats en el dispositivo, qué envía su búsqueda web opcional y qué confirman y qué no las fuentes.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Compass - Local AI',
    targetKeywords: [
      'reseña compass local ai',
      'app compass local ai',
      'chat de ia en el dispositivo iphone',
      'app de chat apple intelligence',
      'asistente de ia privado ios',
      'chat de ia sin conexión iphone',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
    ],
    leadAnswerBlock: '**Compass - Local AI es una app de chat gratuita para iPhone que, según su ficha y su README, responde en el dispositivo con Apple Intelligence y lee las imágenes adjuntas con OCR en el dispositivo.** **La búsqueda web es opcional y está desactivada por defecto; si la activas, tu consulta de búsqueda se envía a DuckDuckGo o a Brave.**',
    quickAnswerTop: {
      es: {
        question: '¿Compass mantiene mis chats en mi iPhone?',
        answer: 'Según el desarrollador, sí por defecto: el chat, el OCR y la memoria funcionan en el dispositivo y nada sale de él mientras no actives la búsqueda web. Esta reseña no probó la app ni inspeccionó su tráfico de red.',
        bullets: [
          'Gratis en la [App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955), sin compras dentro de la app indicadas.',
          'Usa los Foundation Models de Apple donde hay Apple Intelligence, con una alternativa ligera en otros dispositivos.',
          'La ficha muestra el inglés como único idioma.',
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
        label: '¿Qué es Compass - Local AI?',
        anchor: 'what-is-compass',
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
          {
            type: 'one-sentence',
            text: 'Compass - Local AI es una app de chat gratuita para iPhone y iPad que responde en el dispositivo con Apple Intelligence, lee las imágenes adjuntas con OCR en el dispositivo y, de forma opcional, puede buscar en la web.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas desde la App Store y escribes una pregunta. La respuesta la genera el modelo integrado en tu dispositivo; si activas la búsqueda web en Ajustes, la app envía además una consulta a DuckDuckGo o a Brave para citar fuentes.',
          },
        ],
        items: [
          'Desarrollador: el vendedor en la App Store es Shryas Bhurat y la línea de copyright dice Camou Labs; la primera versión salió el 29 de marzo de 2026.',
          'Requisitos: iOS o iPadOS 26.0 o posterior; la experiencia completa de Apple Intelligence necesita un dispositivo compatible.',
          'Código: el código es público en GitHub, pero el repositorio no tiene archivo de licencia ni versiones publicadas.',
          'Sitio web: la ficha no enlaza ningún sitio del desarrollador; solo se encontraron el repositorio y la ficha de la App Store.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la ficha de la App Store, los datos de consulta de Apple y el README público, revisados el 26 de octubre de 2026. No hubo uso práctico, inspección de red ni pruebas de rendimiento.',
          },
        ],
      },
      overview: {
        id: 'what-is-compass',
        title: '¿Qué es Compass - Local AI?',
        content: [
          '**Compass - Local AI es un asistente de chat minimalista para dispositivos Apple; su subtítulo en la App Store es «On-device AI assistant».** La ficha describe un chat al estilo de Notas, capturas y fotos leídas con OCR en el dispositivo, respuestas en streaming y una pantalla de inicio donde se pueden reabrir o borrar los chats recientes.',
          'La descarga pesa 2,3 MB, pequeña porque, según el README, la app usa el modelo que Apple incluye con el dispositivo en lugar de empaquetar uno propio. La ficha no cita ningún sitio de empresa.',
        ],
      },
      whereItRuns: {
        id: 'where-it-runs',
        title: 'Dónde se ejecutan tus chats',
        content: [
          '**Según el README, por defecto cada paso se ejecuta en el dispositivo; la única excepción es la búsqueda web opcional.**',
        ],
        items: [
          '**Chat.** En un dispositivo con Apple Intelligence, el README dice que las respuestas vienen de los Foundation Models de Apple; los demás dispositivos usan una alternativa ligera en el dispositivo que el README no describe con más detalle.',
          '**Imágenes.** El texto de las capturas y fotos adjuntas se extrae con el OCR Vision de Apple en el dispositivo. La ficha no afirma que el modelo interprete la imagen en sí.',
          '**Memoria.** Las conversaciones y un resumen continuo de cada sesión larga se guardan en el almacenamiento local de la app.',
          '**Búsqueda web, opcional.** Está desactivada por defecto. Cuando está activa y el dispositivo tiene conexión, el texto de la consulta va a DuckDuckGo, o a Brave si añades tu propia clave de API; según el README, no se adjuntan identificadores ni historial de conversación, y los resultados se ordenan en el dispositivo.',
        ],
        note: 'La descripción de la App Store habla de «no cloud transmission» y «no external servers» y no menciona la búsqueda web; el README y las notas de la versión 6.0 sí. Deja la búsqueda desactivada para que todo se quede en el teléfono.',
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
            Plataforma: 'iPhone y iPad',
            'Dónde conseguirla': '[App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) (descarga gratuita, iOS o iPadOS 26.0 o posterior)',
          },
          {
            Plataforma: 'Mac',
            'Dónde conseguirla': 'La misma ficha (macOS 26.0+, Apple M1+); diseñada para iPad, no verificada para macOS',
          },
          {
            Plataforma: 'Código fuente',
            'Dónde conseguirla': '[Repositorio de GitHub CamouLabs/Compass](https://github.com/CamouLabs/Compass) (proyecto de Xcode; sin versiones publicadas)',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': 'No se encontró un sitio oficial; la ficha de la App Store no enlaza ninguno',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad de Compass](https://github.com/CamouLabs/Compass#privacy-policy) (una sección del README del repositorio)',
          },
        ],
        note: 'Versión revisada: 6.1, publicada el 20 de agosto de 2026 con la nota «Better UI». La versión 6.0 (11 de agosto de 2026) añadió un modo de pensamiento que muestra los pasos de razonamiento, búsqueda y respuesta, respuestas más cortas, fuentes compactas y una búsqueda web más potente. La app es gratuita y no indica compras dentro de la app.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones indicadas por el desarrollador',
        content: [
          '**Todo lo siguiente procede de la descripción de la App Store, las notas de versión y el README; nada se probó.**',
        ],
        items: [
          '**Chat.** Un chat al estilo de Notas con respuestas en streaming; los chats recientes se pueden reabrir o borrar desde la pantalla de inicio.',
          '**Imágenes.** Adjunta capturas o fotos y deja que la app lea su texto con OCR en el dispositivo.',
          '**Memoria para sesiones largas.** Los últimos turnos se conservan literalmente, los anteriores se condensan en un resumen continuo y una búsqueda por similitud en el dispositivo recupera los mensajes antiguos relevantes.',
          '**Canal de respuesta.** El README describe un pequeño canal en el dispositivo que decide si hacen falta datos recientes, recupera y reordena fuentes cuando la búsqueda está activa y descarta las citas que la respuesta no respalda.',
          '**Modo de pensamiento.** Desde la versión 6.0, la app puede mostrar sus pasos de razonamiento, búsqueda y respuesta mientras trabaja.',
        ],
        note: 'La versión instalada es la que decide qué funciona.',
      },
      privacy: {
        id: 'privacy',
        title: 'Política de privacidad y flujo de datos',
        content: [
          '**La política de privacidad dice que Compass no recopila, almacena ni transmite datos personales al desarrollador y que este no opera ningún servidor que pueda acceder a las conversaciones.** No cita SDK de analítica, publicidad ni seguimiento y señala que el acceso a la fototeca se limita a las imágenes que decides adjuntar.',
          'La política está en el README público, y la etiqueta de privacidad de la App Store dice «Data Not Collected», algo que Apple indica que no ha verificado. La política divulga la búsqueda web opcional y los dos proveedores; la descripción de la tienda no.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código fuente se puede leer, pero no se comparó la versión de la App Store con él ni se inspeccionó el tráfico de red. Quien active la búsqueda web debe contar con que el texto de la consulta llegue a DuckDuckGo o a Brave.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Propietarios de iPhone con un dispositivo compatible con Apple Intelligence** que quieren una app de chat sencilla y gratuita que responda en el dispositivo.',
          '**Lectores que quieren comprobar una afirmación de privacidad en el código** antes de creerla, ya que el proyecto de Xcode es público.',
          '**Quienes quieren respuestas web con citas sin crear una cuenta:** la búsqueda funciona de entrada con DuckDuckGo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**El comportamiento en uso real.** Esta reseña no midió tiempos de respuesta, no probó el uso sin conexión ni juzgó la calidad de las respuestas, tampoco en el modo de pensamiento.',
          '**El modelo alternativo.** El README lo llama ligero, pero no lo nombra ni dice cómo se compara con Apple Intelligence.',
          '**La licencia.** El repositorio no tiene archivo LICENSE, así que las condiciones para reutilizar el código no están claras.',
          '**Versión de la tienda frente al repositorio.** No hay versiones publicadas ni etiquetas, y el último push al repositorio (11 de agosto de 2026) es anterior a la versión 6.1 del 20 de agosto de 2026.',
          '**Soporte y creador.** La ficha no muestra sitio web ni enlace de soporte, aunque la política remite a un correo de soporte en la página de la App Store.',
          '**Versión para Mac.** La ficha dice que la app está diseñada para iPad y no verificada para macOS.',
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
            App: '[Locally AI](/es/power-local-llm/locally-ai-review)',
            Plataformas: 'iOS, macOS',
            'Precio / licencia': 'Gratis / Código cerrado',
            'Diferencia principal': 'Ejecuta modelos abiertos en el dispositivo con MLX',
          },
          {
            App: '[Private Mind](/es/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia principal': 'Chat sin conexión de código abierto con preguntas sobre documentos',
          },
          {
            App: '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia principal': 'Chat de código abierto que descarga los modelos que elijas',
          },
          {
            App: '[Ensu](/es/power-local-llm/ensu-review)',
            Plataformas: 'iOS, Android, escritorio',
            'Precio / licencia': 'Gratis / AGPL-3.0',
            'Diferencia principal': 'App de código abierto con modelos descargados y entrada de imágenes',
          },
        ],
        note: 'Los datos de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Compass en Android?',
            a: 'No se encontró ninguna versión para Android; la ficha solo cubre iPhone, iPad, Mac y dispositivos Apple Vision.',
          },
          {
            q: '¿Puedo usar Compass en un idioma distinto del inglés?',
            a: 'La ficha muestra el inglés como único idioma, y el README no menciona ningún otro.',
          },
          {
            q: '¿Puedo compilar Compass yo mismo?',
            a: 'Sí, el README explica la configuración en Xcode: abrir el proyecto, elegir un equipo de firma y ejecutarlo en un dispositivo. Sin archivo de licencia, no se indican las condiciones para reutilizar el código.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Compass - Local AI es una app de chat pequeña y gratuita para iPhone que se ha actualizado varias veces desde su lanzamiento en marzo de 2026 y que, según su README, mantiene por defecto las respuestas en el dispositivo. Sus límites son un repositorio sin archivo de licencia, una descripción de la tienda que omite la búsqueda web, un único vendedor sin sitio web y la falta de prueba práctica aquí. Encaja con lectores que tienen un dispositivo compatible con Apple Intelligence y quieren un chat mínimo en el dispositivo; quien quiera elegir y descargar modelos debería comparar [Locally AI](/es/power-local-llm/locally-ai-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Compass - Local AI en la App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) — descripción, historial de versiones, etiqueta de privacidad y requisitos, revisados el 26 de octubre de 2026.',
          '[Datos de consulta de Apple sobre Compass - Local AI](https://itunes.apple.com/lookup?id=6760742955&country=us) — versión, fechas de publicación, precio, tamaño del archivo y dispositivos compatibles, revisados el 26 de octubre de 2026.',
          '[Compass en GitHub](https://github.com/CamouLabs/Compass) — código fuente y README con funciones, configuración y política de privacidad, revisados el 26 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una app gratuita de código cerrado que ejecuta modelos abiertos en iPhone y Mac.',
          '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión, gratuita y con licencia MIT, para iPhone y Android.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
          '[Reseña de Ensu](/es/power-local-llm/ensu-review) — una app de chat gratuita y de código abierto de Ente Labs.',
          '[Reseña de LM Mini](/es/power-local-llm/lm-mini-review) — una app de chat para iPhone que también se conecta a tu propio servidor LM Studio u Ollama.',
          '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la guía más amplia para iPhone.',
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
    heroImage: '/images/compass-local-ai-review-hero-fr.webp',
    title: 'Test de Compass - Local AI : chat IA gratuit sur l’appareil pour iPhone',
    seoTitle: 'Test de Compass - Local AI : chat IA local sur iPhone',
    intro: 'Compass - Local AI est une appli de chat gratuite pour iPhone et iPad, publiée sur l’App Store par Shryas Bhurat, avec Camou Labs dans la ligne de copyright. D’après sa fiche et son README public, elle répond sur l’appareil grâce à Apple Intelligence, lit les images jointes par OCR sur l’appareil et propose une recherche web optionnelle. Ce test reflète la fiche du store et le README, vérifiés le 26 octobre 2026.',
    metaDescription: 'Test de Compass - Local AI : chat gratuit pour iPhone qui répond sur l’appareil avec Apple Intelligence, lit les captures par OCR. Recherche web en option.',
    twitterDescription: 'Test de Compass - Local AI : une appli de chat gratuite pour iPhone qui répond sur l’appareil avec Apple Intelligence. Ce qui reste local, ce qu’envoie la recherche web optionnelle et ce qui n’est pas vérifié.',
    audience: 'Les utilisateurs d’iPhone et d’iPad qui veulent savoir si Compass - Local AI garde vraiment les conversations sur l’appareil, ce que sa recherche web optionnelle envoie à l’extérieur et ce que les sources confirment ou non.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Compass - Local AI',
    targetKeywords: [
      'test compass local ai',
      'appli compass local ai',
      'chat ia sur l’appareil iphone',
      'appli de chat apple intelligence',
      'assistant ia privé ios',
      'chat ia hors ligne iphone',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
    ],
    leadAnswerBlock: '**Compass - Local AI est une appli de chat gratuite pour iPhone qui, d’après sa fiche et son README, répond sur l’appareil avec Apple Intelligence et lit les images jointes par OCR sur l’appareil.** **La recherche web est optionnelle et désactivée par défaut ; si vous l’activez, votre requête de recherche est envoyée à DuckDuckGo ou à Brave.**',
    quickAnswerTop: {
      fr: {
        question: 'Compass garde-t-elle mes conversations sur mon iPhone ?',
        answer: 'D’après le développeur, oui par défaut : le chat, l’OCR et la mémoire fonctionnent sur l’appareil, et rien n’en sort tant que vous n’activez pas la recherche web. Ce test n’a ni essayé l’appli ni inspecté son trafic réseau.',
        bullets: [
          'Gratuite sur l’[App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955), sans achat intégré mentionné.',
          'Utilise les Foundation Models d’Apple là où Apple Intelligence est disponible, avec une solution de repli légère sur les autres appareils.',
          'La fiche indique l’anglais comme seule langue.',
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
        label: 'Qu’est-ce que Compass - Local AI ?',
        anchor: 'what-is-compass',
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
          {
            type: 'one-sentence',
            text: 'Compass - Local AI est une appli de chat gratuite pour iPhone et iPad qui répond sur l’appareil avec Apple Intelligence, lit les images jointes par OCR sur l’appareil et peut, en option, chercher sur le web.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’installez depuis l’App Store et tapez une question. La réponse est produite par le modèle intégré à votre appareil ; si vous activez la recherche web dans les réglages, l’appli envoie en plus une requête à DuckDuckGo ou à Brave pour citer des sources.',
          },
        ],
        items: [
          'Développeur : le vendeur sur l’App Store est Shryas Bhurat et la ligne de copyright indique Camou Labs ; la première version est sortie le 29 mars 2026.',
          'Prérequis : iOS ou iPadOS 26.0 ou version ultérieure ; l’expérience complète d’Apple Intelligence exige un appareil compatible.',
          'Code source : le code est public sur GitHub, mais le dépôt n’a ni fichier de licence ni version publiée.',
          'Site web : la fiche ne renvoie vers aucun site du développeur ; seuls le dépôt et la fiche App Store ont été trouvés.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur la fiche App Store, les données de recherche d’Apple et le README public, vérifiés le 26 octobre 2026. Il n’a comporté ni utilisation en conditions réelles, ni inspection du réseau, ni test de performance.',
          },
        ],
      },
      overview: {
        id: 'what-is-compass',
        title: 'Qu’est-ce que Compass - Local AI ?',
        content: [
          '**Compass - Local AI est un assistant de chat minimaliste pour les appareils Apple ; son sous-titre sur l’App Store est « On-device AI assistant ».** La fiche décrit un chat dans le style de l’appli Notes, des captures d’écran et des photos lues par OCR sur l’appareil, des réponses en streaming et un écran d’accueil où l’on peut rouvrir ou supprimer les conversations récentes.',
          'Le téléchargement pèse 2,3 Mo, car, selon le README, l’appli utilise le modèle livré avec l’appareil au lieu d’embarquer le sien. La fiche ne cite aucun site d’entreprise.',
        ],
      },
      whereItRuns: {
        id: 'where-it-runs',
        title: 'Où tournent vos conversations',
        content: [
          '**D’après le README, chaque étape s’exécute par défaut sur l’appareil ; la seule exception est la recherche web optionnelle.**',
        ],
        items: [
          '**Chat.** Sur un appareil doté d’Apple Intelligence, le README indique que les réponses viennent des Foundation Models d’Apple ; les autres appareils utilisent une solution de repli légère sur l’appareil, que le README ne détaille pas.',
          '**Images.** Le texte des captures et photos jointes est extrait avec l’OCR Vision d’Apple, sur l’appareil. La fiche ne prétend pas que le modèle interprète lui-même l’image.',
          '**Mémoire.** Les conversations et un résumé glissant de chaque longue session sont enregistrés dans le stockage local de l’appli.',
          '**Recherche web, optionnelle.** Elle est désactivée par défaut. Lorsqu’elle est activée et que l’appareil est en ligne, le texte de la requête part vers DuckDuckGo, ou vers Brave si vous ajoutez votre propre clé d’API ; d’après le README, aucun identifiant ni historique de conversation n’est joint, et les résultats sont classés sur l’appareil.',
        ],
        note: 'La description de l’App Store parle de « no cloud transmission » et de « no external servers » sans mentionner la recherche web ; le README et les notes de la version 6.0 la mentionnent. Laissez la recherche désactivée pour que tout reste sur le téléphone.',
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
            Plateforme: 'iPhone et iPad',
            'Où l’obtenir': '[App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) (téléchargement gratuit, iOS ou iPadOS 26.0 ou ultérieur)',
          },
          {
            Plateforme: 'Mac',
            'Où l’obtenir': 'Même fiche App Store (macOS 26.0+, Apple M1+) ; conçue pour iPad, non vérifiée pour macOS',
          },
          {
            Plateforme: 'Code source',
            'Où l’obtenir': '[Dépôt GitHub CamouLabs/Compass](https://github.com/CamouLabs/Compass) (projet Xcode ; aucune version publiée)',
          },
          {
            Plateforme: 'Site web',
            'Où l’obtenir': 'Aucun site officiel trouvé ; la fiche App Store n’en indique pas',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où l’obtenir': '[Politique de confidentialité de Compass](https://github.com/CamouLabs/Compass#privacy-policy) (une section du README du dépôt)',
          },
        ],
        note: 'Version testée : 6.1, sortie le 20 août 2026 avec la mention « Better UI ». La version 6.0 (11 août 2026) a ajouté un mode réflexion qui montre les étapes de réflexion, de recherche et de réponse, des réponses plus courtes, des sources compactes et une recherche web renforcée. L’appli est gratuite et ne mentionne aucun achat intégré.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions annoncées par le développeur',
        content: [
          '**Tout ce qui suit provient de la description App Store, des notes de version et du README ; rien n’a été testé.**',
        ],
        items: [
          '**Chat.** Un chat dans le style de l’appli Notes avec des réponses en streaming ; les conversations récentes se rouvrent ou se suppriment depuis l’écran d’accueil.',
          '**Images.** Joignez des captures ou des photos et laissez l’appli lire leur texte par OCR sur l’appareil.',
          '**Mémoire des longues sessions.** Les derniers échanges restent mot pour mot, les plus anciens sont condensés en un résumé glissant, et une recherche par similarité sur l’appareil rappelle les anciens messages pertinents.',
          '**Chaîne de réponse.** Le README décrit une petite chaîne sur l’appareil qui décide si des faits récents sont nécessaires, récupère et reclasse des sources quand la recherche est active, et écarte les citations que la réponse ne soutient pas.',
          '**Mode réflexion.** Depuis la version 6.0, l’appli peut afficher ses étapes de réflexion, de recherche et de réponse pendant qu’elle travaille.',
        ],
        note: 'La version installée fait foi pour ce qui fonctionne.',
      },
      privacy: {
        id: 'privacy',
        title: 'Politique de confidentialité et flux de données',
        content: [
          '**La politique de confidentialité indique que Compass ne collecte, ne stocke ni ne transmet de données personnelles au développeur, et que ce dernier n’exploite aucun serveur capable d’accéder aux conversations.** Elle ne cite aucun SDK d’analyse, de publicité ou de suivi et précise que l’accès à la photothèque se limite aux images que vous choisissez de joindre.',
          'La politique figure dans le README public, et l’étiquette de confidentialité de l’App Store indique « Data Not Collected », ce qu’Apple précise ne pas avoir vérifié. La politique mentionne la recherche web optionnelle et les deux fournisseurs ; la description du store ne le fait pas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code source est lisible, mais la version de l’App Store n’a pas été comparée à celui-ci et le trafic réseau n’a pas été inspecté. Quiconque active la recherche web doit s’attendre à ce que le texte de la requête parvienne à DuckDuckGo ou à Brave.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s’adresse-t-elle',
        items: [
          '**Les propriétaires d’iPhone dotés d’un appareil compatible Apple Intelligence** qui veulent une appli de chat simple et gratuite répondant sur l’appareil.',
          '**Les lecteurs qui veulent vérifier une affirmation de confidentialité dans le code** avant de la croire, puisque le projet Xcode est public.',
          '**Ceux qui veulent des réponses web citées sans compte :** la recherche fonctionne d’emblée avec DuckDuckGo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Le comportement en usage réel.** Ce test n’a ni chronométré les réponses, ni testé l’usage hors ligne, ni jugé la qualité des réponses, y compris en mode réflexion.',
          '**Le modèle de repli.** Le README le dit léger mais ne le nomme pas et ne le compare pas à Apple Intelligence.',
          '**La licence.** Le dépôt ne contient aucun fichier LICENSE ; les conditions de réutilisation du code sont donc floues.',
          '**Version du store et dépôt.** Il n’existe ni version publiée ni tag, et le dernier push du dépôt (11 août 2026) précède la version 6.1 du 20 août 2026.',
          '**Support et éditeur.** La fiche n’affiche ni site ni lien d’assistance, alors que la politique renvoie à une adresse e-mail d’assistance sur la page App Store.',
          '**Version Mac.** La fiche indique que l’appli est conçue pour l’iPad et non vérifiée pour macOS.',
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
            Appli: '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            Plateformes: 'iOS, macOS',
            'Prix / licence': 'Gratuit / Code fermé',
            'Différence principale': 'Exécute des modèles ouverts sur l’appareil via MLX',
          },
          {
            Appli: '[Private Mind](/fr/power-local-llm/private-mind-review)',
            Plateformes: 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence principale': 'Chat hors ligne open source avec questions sur documents sur l’appareil',
          },
          {
            Appli: '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            Plateformes: 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence principale': 'Chat open source qui télécharge les modèles de votre choix',
          },
          {
            Appli: '[Ensu](/fr/power-local-llm/ensu-review)',
            Plateformes: 'iOS, Android, bureau',
            'Prix / licence': 'Gratuit / AGPL-3.0',
            'Différence principale': 'Appli open source avec modèles téléchargés et entrée d’images',
          },
        ],
        note: 'Les informations sur les concurrents changent souvent ; vérifiez le prix, la licence et les plateformes de chaque appli sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Compass fonctionne-t-elle sur Android ?',
            a: 'Aucune version Android n’a été trouvée ; la fiche ne couvre que l’iPhone, l’iPad, le Mac et Apple Vision.',
          },
          {
            q: 'Puis-je utiliser Compass dans une autre langue que l’anglais ?',
            a: 'La fiche indique l’anglais comme seule langue, et le README n’en mentionne aucune autre.',
          },
          {
            q: 'Puis-je compiler Compass moi-même ?',
            a: 'Oui, le README décrit une installation avec Xcode : ouvrir le projet, choisir une équipe de signature et lancer l’appli sur un appareil. Sans fichier de licence, les conditions de réutilisation du code ne sont pas précisées.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Compass - Local AI est une petite appli de chat gratuite pour iPhone, mise à jour plusieurs fois depuis son lancement en mars 2026 et qui, d’après son README, garde par défaut les réponses sur l’appareil. Ses limites : un dépôt sans fichier de licence, une description de store qui omet la recherche web, un seul vendeur sans site et l’absence de test en conditions réelles ici. Elle convient aux lecteurs dotés d’un appareil compatible Apple Intelligence qui veulent un chat minimal sur l’appareil ; ceux qui veulent choisir et télécharger des modèles compareront [Locally AI](/fr/power-local-llm/locally-ai-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Compass - Local AI sur l’App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) — description, historique des versions, étiquette de confidentialité et prérequis, vérifiés le 26 octobre 2026.',
          '[Données de recherche Apple pour Compass - Local AI](https://itunes.apple.com/lookup?id=6760742955&country=us) — version, dates de sortie, prix, taille du fichier et appareils pris en charge, vérifiés le 26 octobre 2026.',
          '[Compass sur GitHub](https://github.com/CamouLabs/Compass) — code source et README avec fonctions, installation et politique de confidentialité, vérifiés le 26 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Locally AI](/fr/power-local-llm/locally-ai-review) — une appli gratuite à code fermé qui exécute des modèles ouverts sur iPhone et Mac.',
          '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une appli de chat hors ligne gratuite, sous licence MIT, pour iPhone et Android.',
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source gratuit sur l’appareil pour iOS et Android.',
          '[Test d’Ensu](/fr/power-local-llm/ensu-review) — une appli de chat gratuite et open source d’Ente Labs.',
          '[Test de LM Mini](/fr/power-local-llm/lm-mini-review) — une appli de chat pour iPhone qui se connecte aussi à votre propre serveur LM Studio ou Ollama.',
          '[Les meilleures applis LLM locales pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama plus large pour iPhone.',
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
    heroImage: '/images/compass-local-ai-review-hero-ja.webp',
    title: 'Compass - Local AIレビュー:端末内で答えるiPhone向け無料AIチャット',
    seoTitle: 'Compass - Local AIレビュー:端末内AIチャット',
    intro: 'Compass - Local AIは、App Storeの販売元Shryas Bhurat(著作権表記はCamou Labs)が提供する、iPhone・iPad向けの無料チャットアプリです。掲載情報と公開READMEによれば、Apple Intelligenceで端末内に回答し、添付画像を端末内OCRで読み取り、任意でWeb検索も使えます。本レビューは、2026年10月26日に確認したストアの掲載情報とREADMEに基づいています。',
    metaDescription: 'Compass - Local AIレビュー:Apple Intelligenceで端末内に回答し、スクリーンショットをOCRで読み取る無料のiPhoneチャットアプリ。Web検索は任意です。',
    twitterDescription: 'Compass - Local AIレビュー:Apple Intelligenceで端末内に回答する無料のiPhoneチャットアプリ。ローカルで動く部分、任意のWeb検索が送る内容、未検証の点を解説します。',
    audience: 'Compass - Local AIが本当にチャットを端末内にとどめるのか、任意のWeb検索が何を外部へ送るのか、情報源が何を確認し何を確認していないのかを知りたいiPhone・iPadユーザー向けです。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Compass - Local AIレビュー',
    targetKeywords: [
      'compass local ai レビュー',
      'compass local ai アプリ',
      '端末内 ai チャット iphone',
      'apple intelligence チャットアプリ',
      'プライベート ai アシスタント ios',
      'オフライン ai チャット iphone',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
    ],
    leadAnswerBlock: '**Compass - Local AIは、掲載情報とREADMEによれば、Apple Intelligenceで端末内に回答し、添付画像を端末内OCRで読み取る無料のiPhoneチャットアプリです。** **Web検索は任意で、初期設定ではオフです。オンにすると、検索クエリがDuckDuckGoまたはBraveに送信されます。**',
    quickAnswerTop: {
      ja: {
        question: 'CompassはチャットをiPhoneの中にとどめますか?',
        answer: '開発者の説明では、初期設定ではその通りです。チャット、OCR、メモリは端末内で動作し、Web検索をオンにしない限り何も端末の外へ出ません。本レビューはアプリを試用しておらず、通信内容も検査していません。',
        bullets: [
          '[App Store](https://apps.apple.com/jp/app/compass-local-ai/id6760742955)で無料。アプリ内課金の記載はありません。',
          'Apple Intelligenceが使える端末ではAppleのFoundation Modelsを使い、それ以外の端末では軽量な代替を使います。',
          '掲載情報に示されている言語は英語のみです。',
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
        label: 'Compass - Local AIとは',
        anchor: 'what-is-compass',
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
          {
            type: 'one-sentence',
            text: 'Compass - Local AIは、Apple Intelligenceで端末内に回答し、添付画像を端末内OCRで読み取り、任意でWeb検索もできる、iPhone・iPad向けの無料チャットアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'App Storeからインストールして質問を入力します。回答は端末に内蔵されたモデルが生成します。設定でWeb検索をオンにすると、出典を示すために検索クエリもDuckDuckGoまたはBraveへ送信されます。',
          },
        ],
        items: [
          '開発元:App Storeの販売元はShryas Bhurat、著作権表記はCamou Labsです。最初のリリースは2026年3月29日でした。',
          '動作条件:iOSまたはiPadOS 26.0以降。Apple Intelligenceの全機能には、対応する端末が必要です。',
          'ソースコード:コードはGitHubで公開されていますが、リポジトリにはライセンスファイルも公開リリースもありません。',
          'Webサイト:掲載情報に開発者サイトへのリンクはなく、公開ページとして確認できたのはリポジトリとApp Storeの掲載ページのみです。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月26日に確認したApp Storeの掲載情報、Appleのルックアップデータ、公開READMEに基づいています。実機での試用、通信の検査、ベンチマークは行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-compass',
        title: 'Compass - Local AIとは',
        content: [
          '**Compass - Local AIは、Apple端末向けの最小限のチャットアシスタントで、App Storeのサブタイトルは「On-device AI assistant」です。** 掲載情報には、メモアプリ風のチャット、端末内OCRで読み取るスクリーンショットや写真、ストリーミング表示の回答、最近のチャットを開き直したり削除したりできるホーム画面が記載されています。',
          'ダウンロードサイズは2.3 MBです。READMEによれば、独自のモデルを同梱せず、端末に付属するAppleのモデルを使うためです。掲載情報に企業サイトの記載はありません。',
        ],
      },
      whereItRuns: {
        id: 'where-it-runs',
        title: 'チャットが動作する場所',
        content: [
          '**READMEによれば、初期設定ではすべての処理が端末内で行われ、唯一の例外が任意のWeb検索です。**',
        ],
        items: [
          '**チャット。** READMEによれば、Apple Intelligence対応端末ではAppleのFoundation Modelsが回答を生成します。それ以外の端末は軽量な端末内の代替を使いますが、READMEは詳細を説明していません。',
          '**画像。** 添付したスクリーンショットや写真のテキストは、Appleの端末内Vision OCRで抽出されます。モデルが画像そのものを解釈するとは、掲載情報に書かれていません。',
          '**メモリ。** 会話と、長いセッションごとの要約メモは、アプリのローカルストレージに保存されます。',
          '**Web検索(任意)。** 初期設定ではオフです。オンで端末がオンラインの場合、クエリのテキストがDuckDuckGoに、独自のAPIキーを追加するとBraveに送られます。READMEによれば識別子や会話履歴は付加されず、結果の順位付けは端末内で行われます。',
        ],
        note: 'App Storeの説明は「no cloud transmission」「no external servers」とし、Web検索には触れていません。READMEとバージョン6.0のリリースノートは触れています。すべてを端末内にとどめたい場合は、検索をオフのままにしてください。',
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
            '入手先': '[App Store](https://apps.apple.com/jp/app/compass-local-ai/id6760742955)(無料ダウンロード、iOSまたはiPadOS 26.0以降)',
          },
          {
            'プラットフォーム': 'Mac',
            '入手先': '同じApp Storeの掲載ページ(macOS 26.0以降、Apple M1以降)。ページには「Designed for iPad. Not verified for macOS.」とあります',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHubリポジトリ CamouLabs/Compass](https://github.com/CamouLabs/Compass)(Xcodeプロジェクト、公開リリースなし)',
          },
          {
            'プラットフォーム': 'Webサイト',
            '入手先': '公式サイトは見つかりませんでした。App Storeの掲載情報にもリンクはありません',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Compassのプライバシーポリシー](https://github.com/CamouLabs/Compass#privacy-policy)(リポジトリREADMEの一節)',
          },
        ],
        note: '確認したバージョン:6.1(2026年8月20日公開、更新内容は「Better UI」)。バージョン6.0(2026年8月11日)では、思考・検索・回答の各ステップを表示する思考モード、より短い回答、コンパクトな出典表示、強化されたWeb検索が加わりました。アプリは無料で、アプリ内課金の記載はありません。',
      },
      features: {
        id: 'key-features',
        title: '開発者が挙げる機能',
        content: [
          '**以下はすべてApp Storeの説明、リリースノート、READMEに基づくもので、動作は検証していません。**',
        ],
        items: [
          '**チャット。** メモアプリ風のチャットとストリーミング回答。最近のチャットはホーム画面から開き直したり削除したりできます。',
          '**画像。** スクリーンショットや写真を添付すると、端末内OCRでテキストを読み取ります。',
          '**長いセッション向けメモリ。** 直近のやり取りはそのまま保持し、古いものは要約に畳み込み、関連する過去のメッセージは端末内の類似検索で呼び戻します。',
          '**回答パイプライン。** READMEによれば、最新情報が必要かを判断し、検索がオンのときは出典を取得して並べ替え、回答が裏付けない引用を除外する小さな処理が端末内で動きます。',
          '**思考モード。** バージョン6.0以降、アプリは作業中の思考・検索・回答のステップを表示できます。',
        ],
        note: '実際に何が動くかは、インストールしたビルドで確認してください。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーポリシーとデータの流れ',
        content: [
          '**プライバシーポリシーによれば、Compassは個人データを収集・保存せず、開発者へも送信せず、開発者は会話にアクセスできるバックエンドを運用していません。** 分析、広告、トラッキングのSDKは挙げられておらず、写真ライブラリへのアクセスは添付を選んだ画像に限られると説明されています。',
          'ポリシーは公開READMEに記載されており、App Storeのプライバシーラベルは「Data Not Collected」ですが、Appleは未検証と注記しています。ポリシーは任意のWeb検索と2つの検索プロバイダを明示していますが、ストアの説明にはありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ソースコードは読めますが、App Storeのビルドとの照合や通信の検査は行っていません。Web検索を有効にする場合は、クエリのテキストがDuckDuckGoまたはBraveに届くことを前提にしてください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'おすすめの人',
        items: [
          '**Apple Intelligence対応のiPhoneを持つ人**で、端末内で答えるシンプルな無料チャットアプリがほしい方。',
          '**プライバシーの主張をコードで確かめたい人。** Xcodeプロジェクトが公開されています。',
          '**アカウントなしで出典付きのWeb回答がほしい人。** 検索はDuckDuckGoですぐに使えます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の動作。** 回答時間の計測、オフライン利用の確認、思考モードを含む回答品質の評価は行っていません。',
          '**代替モデル。** READMEは軽量と述べるだけで、名称やApple Intelligenceとの比較は示していません。',
          '**ライセンス。** リポジトリにLICENSEファイルがなく、コード再利用の条件が不明です。',
          '**ストア版とリポジトリの関係。** リリースもタグもなく、リポジトリの最終プッシュ(2026年8月11日)はバージョン6.1(2026年8月20日)より前です。',
          '**サポートと運営者。** 掲載情報にWebサイトもサポートリンクもありませんが、ポリシーはApp Storeページ上のサポート用メールを案内しています。',
          '**Mac版。** 掲載情報には、iPad向けに設計され、macOSでは未検証とあります。',
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
            '対応': 'iOS・macOS',
            '価格/ライセンス': '無料/クローズドソース',
            '主な違い': 'MLXでオープンモデルを端末内実行',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            '対応': 'iOS・Android',
            '価格/ライセンス': '無料/MIT',
            '主な違い': 'オープンソースのオフラインチャット。端末内の文書Q&A',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            '対応': 'iOS・Android',
            '価格/ライセンス': '無料/MIT',
            '主な違い': '選んだモデルをダウンロードするオープンソースのチャット',
          },
          {
            'アプリ': '[Ensu](/ja/power-local-llm/ensu-review)',
            '対応': 'iOS・Android・デスクトップ',
            '価格/ライセンス': '無料/AGPL-3.0',
            '主な違い': 'モデルをダウンロードし画像入力にも対応するオープンソースアプリ',
          },
        ],
        note: '競合の情報は変わりやすいため、価格・ライセンス・対応プラットフォームは各アプリの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'CompassはAndroidで使えますか?',
            a: 'Android版は見つかりませんでした。掲載情報はiPhone、iPad、Mac、Apple Vision端末のみが対象です。',
          },
          {
            q: '英語以外の言語でCompassを使えますか?',
            a: '掲載情報の言語は英語のみで、READMEにも他の言語の記載はありません。',
          },
          {
            q: 'Compassを自分でビルドできますか?',
            a: 'はい。READMEにXcodeでの手順があります。プロジェクトを開き、署名チームを選び、実機で実行します。ライセンスファイルがないため、コード再利用の条件は示されていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: 'Compass - Local AIは、2026年3月のリリース以降に何度か更新されてきた、小さな無料のiPhoneチャットアプリで、READMEによれば初期設定では回答を端末内にとどめます。制約は、ライセンスファイルのないリポジトリ、Web検索に触れないストアの説明、Webサイトのない単独の販売元、そして本レビューで実機検証をしていない点です。Apple Intelligence対応端末で最小限の端末内チャットを求める人に向いています。モデルを選んでダウンロードしたい人は、[Locally AI](/ja/power-local-llm/locally-ai-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比較してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのCompass - Local AI](https://apps.apple.com/us/app/compass-local-ai/id6760742955) — 説明、バージョン履歴、プライバシーラベル、動作条件。2026年10月26日確認。',
          '[Compass - Local AIのAppleルックアップデータ](https://itunes.apple.com/lookup?id=6760742955&country=us) — バージョン、公開日、価格、ファイルサイズ、対応端末。2026年10月26日確認。',
          '[GitHubのCompass](https://github.com/CamouLabs/Compass) — ソースコードと、機能・セットアップ・プライバシーポリシーを記したREADME。2026年10月26日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — iPhoneとMacでオープンモデルを実行する、無料でソース非公開のアプリ。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けの、無料でMITライセンスのオフラインチャットアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの、無料でオープンソースの端末内チャットクライアント。',
          '[Ensuレビュー](/ja/power-local-llm/ensu-review) — Ente Labsが提供する、無料でオープンソースのチャットアプリ。',
          '[LM Miniレビュー](/ja/power-local-llm/lm-mini-review) — 自分のLM StudioやOllamaサーバーにも接続できるiPhoneチャットアプリ。',
          '[2026年版 iPhone向けローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより広い比較記事。',
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
    heroImage: '/images/compass-local-ai-review-hero-pt.webp',
    title: 'Análise do Compass - Local AI: chat de IA gratuito no aparelho para iPhone',
    seoTitle: 'Análise do Compass - Local AI: chat de IA no iPhone',
    intro: 'O Compass - Local AI é um app de chat gratuito para iPhone e iPad do vendedor da App Store Shryas Bhurat, com a Camou Labs na linha de copyright. Segundo a página da loja e o README público, ele responde no aparelho com o Apple Intelligence, lê imagens anexadas com OCR no aparelho e oferece uma busca na web opcional. Esta análise reflete a página da loja e o README, verificados em 26 de outubro de 2026.',
    metaDescription: 'Análise do Compass - Local AI: chat gratuito para iPhone que responde no aparelho com Apple Intelligence e lê capturas por OCR. Busca na web opcional.',
    twitterDescription: 'Análise do Compass - Local AI: um app de chat gratuito para iPhone que responde no aparelho com Apple Intelligence. O que roda localmente, o que a busca na web opcional envia e o que não foi verificado.',
    audience: 'Usuários de iPhone e iPad que querem saber se o Compass - Local AI realmente mantém os chats no aparelho, o que sua busca na web opcional envia para fora e o que as fontes confirmam e não confirmam.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise Compass - Local AI',
    targetKeywords: [
      'análise compass local ai',
      'app compass local ai',
      'chat de ia no aparelho iphone',
      'app de chat apple intelligence',
      'assistente de ia privado ios',
      'chat de ia offline iphone',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
    ],
    leadAnswerBlock: '**O Compass - Local AI é um app de chat gratuito para iPhone que, segundo a página da loja e o README, responde no aparelho com o Apple Intelligence e lê imagens anexadas com OCR no aparelho.** **A busca na web é opcional e vem desativada; se você a ativar, sua consulta de busca vai para o DuckDuckGo ou o Brave.**',
    quickAnswerTop: {
      pt: {
        question: 'O Compass mantém meus chats no meu iPhone?',
        answer: 'Segundo o desenvolvedor, sim por padrão: chat, OCR e memória rodam no aparelho, e nada sai dele enquanto você não ativar a busca na web. Esta análise não testou o app nem inspecionou seu tráfego de rede.',
        bullets: [
          'Gratuito na [App Store](https://apps.apple.com/br/app/compass-local-ai/id6760742955), sem compras no app listadas.',
          'Usa os Foundation Models da Apple onde há Apple Intelligence, com uma alternativa leve em outros aparelhos.',
          'A página da loja mostra o inglês como único idioma.',
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
        label: 'O que é o Compass - Local AI?',
        anchor: 'what-is-compass',
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
          {
            type: 'one-sentence',
            text: 'O Compass - Local AI é um app de chat gratuito para iPhone e iPad que responde no aparelho com o Apple Intelligence, lê imagens anexadas com OCR no aparelho e pode, opcionalmente, pesquisar na web.',
          },
          {
            type: 'plain-terms',
            text: 'Você o instala pela App Store e digita uma pergunta. A resposta é gerada pelo modelo embutido no seu aparelho; se você ativar a busca na web em Ajustes, o app também envia uma consulta ao DuckDuckGo ou ao Brave para citar fontes.',
          },
        ],
        items: [
          'Desenvolvedor: o vendedor na App Store é Shryas Bhurat e a linha de copyright cita a Camou Labs; a primeira versão saiu em 29 de março de 2026.',
          'Requisitos: iOS ou iPadOS 26.0 ou posterior; a experiência completa do Apple Intelligence exige um aparelho compatível.',
          'Código: o código é público no GitHub, mas o repositório não tem arquivo de licença nem releases publicadas.',
          'Site: a página da loja não leva a nenhum site do desenvolvedor; só foram encontrados o repositório e a página da App Store.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página da App Store, nos dados de consulta da Apple e no README público, verificados em 26 de outubro de 2026. Não houve uso prático, inspeção de rede nem testes de desempenho.',
          },
        ],
      },
      overview: {
        id: 'what-is-compass',
        title: 'O que é o Compass - Local AI?',
        content: [
          '**O Compass - Local AI é um assistente de chat minimalista para aparelhos Apple; o subtítulo na App Store é "On-device AI assistant".** A página descreve um chat no estilo do app Notas, capturas de tela e fotos lidas por OCR no aparelho, respostas em streaming e uma tela inicial onde é possível reabrir ou apagar chats recentes.',
          'O download tem 2,3 MB, pequeno porque, segundo o README, o app usa o modelo que a Apple já inclui no aparelho em vez de trazer o seu próprio. A página não cita nenhum site de empresa.',
        ],
      },
      whereItRuns: {
        id: 'where-it-runs',
        title: 'Onde seus chats rodam',
        content: [
          '**Segundo o README, por padrão cada etapa roda no aparelho; a única exceção é a busca na web opcional.**',
        ],
        items: [
          '**Chat.** Em um aparelho com Apple Intelligence, o README diz que as respostas vêm dos Foundation Models da Apple; os demais aparelhos usam uma alternativa leve no aparelho que o README não descreve em detalhes.',
          '**Imagens.** O texto de capturas de tela e fotos anexadas é extraído com o OCR Vision da Apple, no aparelho. A página não afirma que o modelo interpreta a imagem em si.',
          '**Memória.** As conversas e um resumo contínuo de cada sessão longa ficam no armazenamento local do app.',
          '**Busca na web, opcional.** Vem desativada. Quando está ativa e o aparelho está online, o texto da consulta vai para o DuckDuckGo, ou para o Brave se você adicionar sua própria chave de API; segundo o README, nenhum identificador nem o histórico da conversa é anexado, e os resultados são ordenados no aparelho.',
        ],
        note: 'A descrição da App Store fala em "no cloud transmission" e "no external servers" e não menciona a busca na web; o README e as notas da versão 6.0 mencionam. Deixe a busca desativada para que tudo fique no celular.',
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
            Plataforma: 'iPhone e iPad',
            'Onde obter': '[App Store](https://apps.apple.com/br/app/compass-local-ai/id6760742955) (download gratuito, iOS ou iPadOS 26.0 ou posterior)',
          },
          {
            Plataforma: 'Mac',
            'Onde obter': 'Mesma página da App Store (macOS 26.0+, Apple M1+); projetado para iPad, não verificado para macOS',
          },
          {
            Plataforma: 'Código-fonte',
            'Onde obter': '[Repositório do GitHub CamouLabs/Compass](https://github.com/CamouLabs/Compass) (projeto do Xcode; sem releases publicadas)',
          },
          {
            Plataforma: 'Site',
            'Onde obter': 'Nenhum site oficial encontrado; a página da App Store não leva a nenhum',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade do Compass](https://github.com/CamouLabs/Compass#privacy-policy) (uma seção do README do repositório)',
          },
        ],
        note: 'Versão analisada: 6.1, lançada em 20 de agosto de 2026 com a nota "Better UI". A versão 6.0 (11 de agosto de 2026) trouxe um modo de raciocínio que mostra as etapas de pensamento, busca e resposta, respostas mais curtas, fontes compactas e busca na web mais forte. O app é gratuito e não lista compras no app.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos listados pelo desenvolvedor',
        content: [
          '**Tudo abaixo vem da descrição da App Store, das notas de versão e do README; nada foi testado.**',
        ],
        items: [
          '**Chat.** Um chat no estilo do app Notas com respostas em streaming; chats recentes podem ser reabertos ou apagados na tela inicial.',
          '**Imagens.** Anexe capturas de tela ou fotos e deixe o app ler o texto com OCR no aparelho.',
          '**Memória para sessões longas.** Os últimos turnos ficam literais, os mais antigos são condensados em um resumo contínuo e uma busca por similaridade no aparelho recupera mensagens antigas relevantes.',
          '**Pipeline de resposta.** O README descreve um pequeno pipeline no aparelho que decide se são necessários fatos atuais, recupera e reordena fontes quando a busca está ativa e descarta citações que a resposta não sustenta.',
          '**Modo de raciocínio.** Desde a versão 6.0, o app pode mostrar suas etapas de pensamento, busca e resposta enquanto trabalha.',
        ],
        note: 'A versão instalada é a palavra final sobre o que funciona.',
      },
      privacy: {
        id: 'privacy',
        title: 'Política de privacidade e fluxo de dados',
        content: [
          '**A política de privacidade diz que o Compass não coleta, armazena nem transmite dados pessoais ao desenvolvedor e que o desenvolvedor não opera nenhum servidor que possa acessar as conversas.** Ela não cita SDKs de análise, publicidade ou rastreamento e diz que o acesso à Fototeca se limita às imagens que você escolhe anexar.',
          'A política está no README público, e o rótulo de privacidade da App Store diz "Data Not Collected", que a Apple informa não ter verificado. A política divulga a busca na web opcional e os dois provedores; a descrição da loja não.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O código-fonte pode ser lido, mas a versão da App Store não foi comparada com ele e o tráfego de rede não foi inspecionado. Quem ativar a busca na web deve esperar que o texto da consulta chegue ao DuckDuckGo ou ao Brave.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Donos de iPhone com um aparelho compatível com Apple Intelligence** que querem um app de chat simples e gratuito que responda no aparelho.',
          '**Leitores que querem conferir uma afirmação de privacidade no código** antes de confiar nela, já que o projeto do Xcode é público.',
          '**Quem quer respostas da web com citações, sem conta:** a busca funciona de imediato com o DuckDuckGo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Comportamento no uso real.** Esta análise não cronometrou respostas, não testou o uso offline nem avaliou a qualidade das respostas, inclusive no modo de raciocínio.',
          '**O modelo alternativo.** O README o chama de leve, mas não o nomeia nem diz como ele se compara ao Apple Intelligence.',
          '**A licença.** O repositório não tem arquivo LICENSE, então os termos para reutilizar o código não estão claros.',
          '**Versão da loja e repositório.** Não há releases nem tags, e o último push no repositório (11 de agosto de 2026) é anterior à versão 6.1 de 20 de agosto de 2026.',
          '**Suporte e criador.** A página não mostra site nem link de suporte, embora a política indique um e-mail de suporte na página da App Store.',
          '**Versão para Mac.** A página diz que o app foi projetado para iPad e não verificado para macOS.',
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
            App: '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            Plataformas: 'iOS, macOS',
            'Preço / licença': 'Grátis / Código fechado',
            'Principal diferença': 'Roda modelos abertos no aparelho via MLX',
          },
          {
            App: '[Private Mind](/pt/power-local-llm/private-mind-review)',
            Plataformas: 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Principal diferença': 'Chat offline de código aberto com perguntas sobre documentos',
          },
          {
            App: '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Principal diferença': 'Chat de código aberto que baixa os modelos que você escolher',
          },
          {
            App: '[Ensu](/pt/power-local-llm/ensu-review)',
            Plataformas: 'iOS, Android, desktop',
            'Preço / licença': 'Grátis / AGPL-3.0',
            'Principal diferença': 'App de código aberto com modelos baixados e entrada de imagens',
          },
        ],
        note: 'Os dados dos concorrentes mudam com frequência; confirme preço, licença e plataformas de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Compass funciona no Android?',
            a: 'Nenhuma versão para Android foi encontrada; a página cobre apenas iPhone, iPad, Mac e aparelhos Apple Vision.',
          },
          {
            q: 'Posso usar o Compass em outro idioma além do inglês?',
            a: 'A página mostra o inglês como único idioma, e o README não menciona nenhum outro.',
          },
          {
            q: 'Posso compilar o Compass por conta própria?',
            a: 'Sim, o README descreve a configuração no Xcode: abrir o projeto, escolher uma equipe de assinatura e executar em um aparelho. Sem arquivo de licença, os termos para reutilizar o código não são informados.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Compass - Local AI é um app de chat pequeno e gratuito para iPhone que foi atualizado várias vezes desde o lançamento em março de 2026 e, segundo o README, mantém as respostas no aparelho por padrão. Seus limites são um repositório sem arquivo de licença, uma descrição da loja que omite a busca na web, um único vendedor sem site e a falta de teste prático aqui. Serve a leitores com um aparelho compatível com Apple Intelligence que querem um chat mínimo no aparelho; quem quer escolher e baixar modelos deve comparar o [Locally AI](/pt/power-local-llm/locally-ai-review) ou o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Compass - Local AI na App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) — descrição, histórico de versões, rótulo de privacidade e requisitos, verificados em 26 de outubro de 2026.',
          '[Dados de consulta da Apple sobre o Compass - Local AI](https://itunes.apple.com/lookup?id=6760742955&country=us) — versão, datas de lançamento, preço, tamanho do arquivo e aparelhos compatíveis, verificados em 26 de outubro de 2026.',
          '[Compass no GitHub](https://github.com/CamouLabs/Compass) — código-fonte e README com recursos, configuração e política de privacidade, verificados em 26 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — um app gratuito de código fechado que roda modelos abertos no iPhone e no Mac.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no aparelho para iOS e Android.',
          '[Análise do Ensu](/pt/power-local-llm/ensu-review) — um app de chat gratuito e de código aberto da Ente Labs.',
          '[Análise do LM Mini](/pt/power-local-llm/lm-mini-review) — um app de chat para iPhone que também se conecta ao seu próprio servidor LM Studio ou Ollama.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
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
    heroImage: '/images/compass-local-ai-review-hero-ar.webp',
    title: 'مراجعة Compass - Local AI: دردشة ذكاء اصطناعي مجانية على الجهاز لـ iPhone',
    seoTitle: 'مراجعة Compass - Local AI: دردشة ذكاء اصطناعي على iPhone',
    intro: 'Compass - Local AI تطبيق دردشة مجاني لـ iPhone وiPad من البائع Shryas Bhurat في App Store، وتظهر Camou Labs في سطر حقوق النشر. وفق صفحته وملف README العام، يجيب التطبيق على الجهاز عبر Apple Intelligence، ويقرأ الصور المرفقة بتقنية OCR على الجهاز، ويوفّر بحثًا اختياريًا على الويب. تعكس هذه المراجعة صفحة المتجر وملف README كما جرى التحقق منهما في 26 أكتوبر 2026.',
    metaDescription: 'مراجعة Compass - Local AI: تطبيق دردشة مجاني لـ iPhone يجيب على الجهاز عبر Apple Intelligence، ويقرأ لقطات الشاشة بتقنية OCR، مع بحث ويب اختياري.',
    twitterDescription: 'مراجعة Compass - Local AI: تطبيق دردشة مجاني لـ iPhone يجيب على الجهاز عبر Apple Intelligence. ما الذي يعمل محليًا، وما الذي يرسله البحث الاختياري على الويب، وما الذي لم يُتحقق منه.',
    audience: 'مستخدمو iPhone وiPad الراغبون في معرفة ما إذا كان Compass - Local AI يُبقي المحادثات على الجهاز فعلًا، وما الذي يرسله بحثه الاختياري على الويب، وما الذي تؤكده المصادر وما لا تؤكده.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Compass - Local AI',
    targetKeywords: [
      'مراجعة compass local ai',
      'تطبيق compass local ai',
      'دردشة ذكاء اصطناعي على الجهاز iphone',
      'تطبيق دردشة apple intelligence',
      'مساعد ذكاء اصطناعي خاص ios',
      'دردشة ذكاء اصطناعي بدون إنترنت iphone',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
    ],
    leadAnswerBlock: '**Compass - Local AI تطبيق دردشة مجاني لـ iPhone يجيب، وفق صفحته وملف README، على الجهاز عبر Apple Intelligence ويقرأ الصور المرفقة بتقنية OCR على الجهاز.** **البحث على الويب اختياري ومعطّل افتراضيًا؛ وإذا فعّلته يُرسل استعلام البحث إلى DuckDuckGo أو Brave.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي Compass محادثاتي على جهاز iPhone؟',
        answer: 'وفق المطوّر، نعم افتراضيًا: تعمل الدردشة وتقنية OCR والذاكرة على الجهاز، ولا يغادره شيء ما لم تفعّل البحث على الويب. لم تختبر هذه المراجعة التطبيق ولم تفحص حركة الشبكة فيه.',
        bullets: [
          'مجاني في [App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955)، ولا تُذكر فيه مشتريات داخل التطبيق.',
          'يستخدم نماذج Foundation Models من Apple حيث يتوفر Apple Intelligence، مع بديل خفيف على الأجهزة الأخرى.',
          'تعرض الصفحة الإنجليزية لغةً وحيدة.',
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
        label: 'ما هو Compass - Local AI؟',
        anchor: 'what-is-compass',
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
          {
            type: 'one-sentence',
            text: 'Compass - Local AI تطبيق دردشة مجاني لـ iPhone وiPad يجيب على الجهاز عبر Apple Intelligence، ويقرأ الصور المرفقة بتقنية OCR على الجهاز، ويمكنه اختياريًا البحث على الويب.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من App Store وتكتب سؤالًا. يُنتج الإجابة النموذج المدمج في جهازك؛ وإذا فعّلت البحث على الويب من الإعدادات، يرسل التطبيق أيضًا استعلام بحث إلى DuckDuckGo أو Brave لإرفاق المصادر.',
          },
        ],
        items: [
          'المطوّر: البائع في App Store هو Shryas Bhurat ويذكر سطر حقوق النشر Camou Labs؛ وصدر أول إصدار في 29 مارس 2026.',
          'المتطلبات: iOS أو iPadOS بالإصدار 26.0 أو أحدث؛ وتتطلب التجربة الكاملة لـ Apple Intelligence جهازًا يدعمه.',
          'الشيفرة: الشيفرة المصدرية عامة على GitHub، لكن المستودع بلا ملف ترخيص وبلا إصدارات منشورة.',
          'الموقع: لا تربط الصفحة بأي موقع للمطوّر؛ ولم يُعثر علنًا إلا على المستودع وصفحة App Store.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة App Store وبيانات البحث من Apple وملف README العام، وقد جرى التحقق منها في 26 أكتوبر 2026. ولم يشمل العمل استخدامًا عمليًا أو فحصًا للشبكة أو اختبارات أداء.',
          },
        ],
      },
      overview: {
        id: 'what-is-compass',
        title: 'ما هو Compass - Local AI؟',
        content: [
          '**Compass - Local AI مساعد دردشة بسيط لأجهزة Apple؛ وعنوانه الفرعي في App Store هو "On-device AI assistant".** تصف الصفحة دردشة على نمط تطبيق «الملاحظات»، ولقطات شاشة وصورًا تُقرأ بتقنية OCR على الجهاز، وإجابات متدفقة، وشاشة رئيسية يمكن منها إعادة فتح المحادثات الأخيرة أو حذفها.',
          'حجم التنزيل 2.3 MB، وهو صغير لأن التطبيق، وفق README، يستخدم النموذج الذي توفره Apple مع الجهاز بدل تضمين نموذج خاص به. ولا تذكر الصفحة أي موقع لشركة.',
        ],
      },
      whereItRuns: {
        id: 'where-it-runs',
        title: 'أين تعمل محادثاتك',
        content: [
          '**وفق README، تعمل كل خطوة افتراضيًا على الجهاز؛ والاستثناء الوحيد هو البحث الاختياري على الويب.**',
        ],
        items: [
          '**الدردشة.** على جهاز يدعم Apple Intelligence يقول README إن الإجابات تأتي من نماذج Foundation Models من Apple؛ أما الأجهزة الأخرى فتستخدم بديلًا خفيفًا على الجهاز لا يصفه README بمزيد من التفصيل.',
          '**الصور.** يُستخرج نص لقطات الشاشة والصور المرفقة باستخدام OCR (Vision) من Apple على الجهاز. ولا تزعم الصفحة أن النموذج يفسّر الصورة نفسها.',
          '**الذاكرة.** تُحفظ المحادثات وملخص متجدد لكل جلسة طويلة في التخزين المحلي للتطبيق.',
          '**البحث على الويب، اختياري.** هو معطّل افتراضيًا. وعند تفعيله مع اتصال الجهاز بالإنترنت يذهب نص الاستعلام إلى DuckDuckGo، أو إلى Brave إذا أضفت مفتاح API خاصًا بك؛ ويقول README إنه لا تُرفق أي معرّفات ولا سجل المحادثة، وتُرتَّب النتائج على الجهاز.',
        ],
        note: 'يذكر وصف App Store عبارتي "no cloud transmission" و"no external servers" ولا يذكر البحث على الويب؛ بينما يذكره README وملاحظات الإصدار 6.0. اترك البحث معطّلًا لتبقى كل خطوة على الهاتف.',
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
            'مصدر الحصول عليه': '[App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) (تنزيل مجاني، iOS أو iPadOS بالإصدار 26.0 أو أحدث)',
          },
          {
            'المنصة': 'Mac',
            'مصدر الحصول عليه': 'صفحة App Store نفسها (macOS 26.0 أو أحدث، Apple M1 أو أحدث)؛ مصمم لـ iPad وغير متحقق منه على macOS',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[مستودع GitHub‏ CamouLabs/Compass](https://github.com/CamouLabs/Compass) (مشروع Xcode؛ بلا إصدارات منشورة)',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول عليه': 'لم يُعثر على موقع رسمي؛ ولا تربط صفحة App Store بأي موقع',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[سياسة خصوصية Compass](https://github.com/CamouLabs/Compass#privacy-policy) (قسم من README المستودع)',
          },
        ],
        note: 'الإصدار الذي جرت مراجعته: 6.1، صدر في 20 أغسطس 2026 مع الملاحظة "Better UI". وأضاف الإصدار 6.0 (11 أغسطس 2026) وضع تفكير يعرض خطوات التفكير والبحث والإجابة، وإجابات أقصر، ومصادر مضغوطة، وبحثًا أقوى على الويب. التطبيق مجاني ولا يذكر مشتريات داخل التطبيق.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي يذكرها المطوّر',
        content: [
          '**كل ما يلي مأخوذ من وصف App Store وملاحظات الإصدار وREADME؛ ولم يُختبر شيء منه.**',
        ],
        items: [
          '**الدردشة.** دردشة على نمط تطبيق «الملاحظات» بإجابات متدفقة؛ ويمكن إعادة فتح المحادثات الأخيرة أو حذفها من الشاشة الرئيسية.',
          '**الصور.** أرفق لقطات شاشة أو صورًا ودع التطبيق يقرأ نصها بتقنية OCR على الجهاز.',
          '**ذاكرة الجلسات الطويلة.** تبقى الأدوار الأخيرة حرفيًا، وتُختزل الأقدم في ملخص متجدد، ويستعيد بحث تشابه على الجهاز الرسائل القديمة ذات الصلة.',
          '**مسار الإجابة.** يصف README مسارًا صغيرًا على الجهاز يقرر ما إذا كانت هناك حاجة إلى معلومات حديثة، ويجلب المصادر ويعيد ترتيبها عند تفعيل البحث، ويُسقط الاستشهادات التي لا تدعمها الإجابة.',
          '**وضع التفكير.** منذ الإصدار 6.0 يستطيع التطبيق عرض خطوات التفكير والبحث والإجابة أثناء عمله.',
        ],
        note: 'النسخة المثبّتة هي المرجع النهائي لما يعمل فعلًا.',
      },
      privacy: {
        id: 'privacy',
        title: 'سياسة الخصوصية وتدفق البيانات',
        content: [
          '**تقول سياسة الخصوصية إن Compass لا يجمع بيانات شخصية ولا يخزّنها ولا يرسلها إلى المطوّر، وإن المطوّر لا يشغّل أي خادم يمكنه الوصول إلى المحادثات.** ولا تذكر أي حزم SDK للتحليلات أو الإعلانات أو التتبع، وتقول إن الوصول إلى مكتبة الصور يقتصر على الصور التي تختار إرفاقها.',
          'تقع السياسة في README العام، وتقول بطاقة الخصوصية في App Store "Data Not Collected"، وتنبّه Apple إلى أنها لم تتحقق منها. وتفصح السياسة عن البحث الاختياري على الويب وعن المزوّدَين؛ أما وصف المتجر فلا يفعل.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'يمكن قراءة الشيفرة المصدرية، لكن لم تُقارن نسخة App Store بها ولم تُفحص حركة الشبكة. ومن يفعّل البحث على الويب فليتوقع وصول نص الاستعلام إلى DuckDuckGo أو Brave.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**أصحاب iPhone الذين يملكون جهازًا يدعم Apple Intelligence** ويريدون تطبيق دردشة بسيطًا ومجانيًا يجيب على الجهاز.',
          '**القراء الذين يريدون التحقق من ادعاء خصوصية في الشيفرة** قبل تصديقه، إذ إن مشروع Xcode عام.',
          '**من يريدون إجابات من الويب مع مصادر دون حساب:** يعمل البحث مباشرة عبر DuckDuckGo.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**السلوك في الاستخدام الفعلي.** لم تقِس هذه المراجعة زمن الإجابات، ولم تختبر العمل دون اتصال، ولم تقيّم جودة الإجابات، بما في ذلك وضع التفكير.',
          '**النموذج البديل.** يصفه README بأنه خفيف، لكنه لا يسميه ولا يقول كيف يقارن بـ Apple Intelligence.',
          '**الترخيص.** لا يحتوي المستودع على ملف LICENSE، لذا فشروط إعادة استخدام الشيفرة غير واضحة.',
          '**نسخة المتجر مقابل المستودع.** لا توجد إصدارات أو وسوم، وآخر دفع إلى المستودع (11 أغسطس 2026) سابق للإصدار 6.1 الصادر في 20 أغسطس 2026.',
          '**الدعم والجهة المطوّرة.** لا تعرض الصفحة موقعًا ولا رابط دعم، مع أن السياسة تحيل إلى بريد دعم في صفحة App Store.',
          '**نسخة Mac.** تقول الصفحة إن التطبيق مصمم لـ iPad وغير متحقق منه على macOS.',
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
            'المنصات': 'iOS، macOS',
            'السعر / الترخيص': 'مجاني / مغلق المصدر',
            'الفرق الرئيسي': 'يشغّل نماذج مفتوحة على الجهاز عبر MLX',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS، Android',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة بدون إنترنت مفتوحة المصدر مع أسئلة عن المستندات',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS، Android',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر تنزّل النماذج التي تختارها',
          },
          {
            'التطبيق': '[Ensu](/ar/power-local-llm/ensu-review)',
            'المنصات': 'iOS، Android، سطح المكتب',
            'السعر / الترخيص': 'مجاني / AGPL-3.0',
            'الفرق الرئيسي': 'تطبيق مفتوح المصدر بنماذج منزَّلة وإدخال صور',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Compass على Android؟',
            a: 'لم يُعثر على نسخة لنظام Android؛ فالصفحة تغطي أجهزة iPhone وiPad وMac وApple Vision فقط.',
          },
          {
            q: 'هل يمكنني استخدام Compass بلغة غير الإنجليزية؟',
            a: 'تعرض الصفحة الإنجليزية لغةً وحيدة، ولا يذكر README أي لغة أخرى.',
          },
          {
            q: 'هل يمكنني بناء Compass بنفسي؟',
            a: 'نعم، يشرح README الإعداد في Xcode: افتح المشروع، واختر فريق التوقيع، وشغّله على جهاز. وبدون ملف ترخيص لا تُذكر شروط إعادة استخدام الشيفرة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Compass - Local AI تطبيق دردشة صغير ومجاني لـ iPhone حُدّث عدة مرات منذ إطلاقه في مارس 2026 ويُبقي الإجابات، وفق README، على الجهاز افتراضيًا. وحدوده مستودع بلا ملف ترخيص، ووصف متجر يُغفل البحث على الويب، وبائع واحد بلا موقع، وغياب اختبار عملي هنا. يناسب القراء الذين يملكون جهازًا يدعم Apple Intelligence ويريدون دردشة بسيطة على الجهاز؛ ومن يريد اختيار النماذج وتنزيلها فليقارن [Locally AI](/ar/power-local-llm/locally-ai-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Compass - Local AI في App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) — الوصف وسجل الإصدارات وبطاقة الخصوصية والمتطلبات، جرى التحقق منها في 26 أكتوبر 2026.',
          '[بيانات البحث من Apple عن Compass - Local AI](https://itunes.apple.com/lookup?id=6760742955&country=us) — الإصدار وتواريخ الصدور والسعر وحجم الملف والأجهزة المدعومة، جرى التحقق منها في 26 أكتوبر 2026.',
          '[Compass على GitHub](https://github.com/CamouLabs/Compass) — الشيفرة المصدرية وREADME مع الميزات والإعداد وسياسة الخصوصية، جرى التحقق منها في 26 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — تطبيق مجاني مغلق المصدر يشغّل نماذج مفتوحة على iPhone وMac.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة بدون إنترنت، مجاني ومرخّص بـ MIT، لـ iPhone وAndroid.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لـ iOS وAndroid.',
          '[مراجعة Ensu](/ar/power-local-llm/ensu-review) — تطبيق دردشة مجاني ومفتوح المصدر من Ente Labs.',
          '[مراجعة LM Mini](/ar/power-local-llm/lm-mini-review) — تطبيق دردشة لـ iPhone يتصل أيضًا بخادم LM Studio أو Ollama الخاص بك.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — الدليل الأوسع لـ iPhone.',
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
    heroImage: '/images/compass-local-ai-review-hero-zh.webp',
    title: 'Compass - Local AI 评测:iPhone 上的免费设备端 AI 聊天应用',
    seoTitle: 'Compass - Local AI 评测:设备端 AI 聊天应用',
    intro: 'Compass - Local AI 是 App Store 卖家 Shryas Bhurat(版权行为 Camou Labs)提供的免费 iPhone 和 iPad 聊天应用。根据其商店页面和公开的 README,它借助 Apple Intelligence 在设备上作答,通过设备端 OCR 读取附加的图片,并提供可选的网页搜索。本评测基于 2026 年 10 月 26 日查看的商店页面和 README。',
    metaDescription: 'Compass - Local AI 评测:免费 iPhone 聊天应用,借助 Apple Intelligence 在设备上作答,用 OCR 读取截图,网页搜索可选。',
    twitterDescription: 'Compass - Local AI 评测:借助 Apple Intelligence 在设备上作答的免费 iPhone 聊天应用。哪些在本地运行、可选网页搜索会发送什么、哪些尚未验证。',
    audience: '想知道 Compass - Local AI 是否真的把聊天留在设备上、其可选网页搜索会向外发送什么,以及资料能确认和无法确认哪些内容的 iPhone 和 iPad 用户。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Compass - Local AI 评测',
    targetKeywords: [
      'compass local ai 评测',
      'compass local ai 应用',
      '设备端 ai 聊天 iphone',
      'apple intelligence 聊天应用',
      '私密 ai 助手 ios',
      '离线 ai 聊天 iphone',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
    ],
    leadAnswerBlock: '**根据商店页面和 README,Compass - Local AI 是一款免费的 iPhone 聊天应用,借助 Apple Intelligence 在设备上作答,并通过设备端 OCR 读取附加的图片。** **网页搜索为可选功能,默认关闭;开启后,搜索查询会发送给 DuckDuckGo 或 Brave。**',
    quickAnswerTop: {
      zh: {
        question: 'Compass 会把我的聊天留在 iPhone 上吗?',
        answer: '据开发者所述,默认如此:聊天、OCR 和记忆都在设备上运行,除非开启网页搜索,否则没有任何内容离开设备。本评测没有试用该应用,也没有检查其网络流量。',
        bullets: [
          '在 [App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955) 免费,未列出应用内购买。',
          '在支持 Apple Intelligence 的设备上使用 Apple 的 Foundation Models,其他设备使用轻量级替代方案。',
          '商店页面只显示英语一种语言。',
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
        label: 'Compass - Local AI 是什么',
        anchor: 'what-is-compass',
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
          {
            type: 'one-sentence',
            text: 'Compass - Local AI 是一款免费的 iPhone 和 iPad 聊天应用,借助 Apple Intelligence 在设备上作答,通过设备端 OCR 读取附加的图片,并可选择搜索网页。',
          },
          {
            type: 'plain-terms',
            text: '从 App Store 安装后输入问题即可。答案由设备内置的模型生成;如果在设置中开启网页搜索,应用还会向 DuckDuckGo 或 Brave 发送搜索查询,以便标注来源。',
          },
        ],
        items: [
          '开发方:App Store 卖家为 Shryas Bhurat,版权行写的是 Camou Labs;首个版本发布于 2026 年 3 月 29 日。',
          '系统要求:iOS 或 iPadOS 26.0 及以上;完整的 Apple Intelligence 体验需要支持它的设备。',
          '源代码:代码在 GitHub 上公开,但仓库没有许可证文件,也没有发布版本。',
          '网站:商店页面没有链接开发者网站;公开找到的页面只有代码仓库和 App Store 页面。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 26 日查看的 App Store 页面、Apple 的查询数据和公开 README,未进行实际使用、网络检查或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-compass',
        title: 'Compass - Local AI 是什么',
        content: [
          '**Compass - Local AI 是一款面向 Apple 设备的极简聊天助手,App Store 副标题为 “On-device AI assistant”。** 商店页面描述了类似“备忘录”风格的聊天界面、通过设备端 OCR 读取的截图和照片、流式回答,以及可重新打开或删除最近聊天的主屏幕。',
          '下载大小为 2.3 MB。据 README,这是因为应用使用设备自带的 Apple 模型,而不是自带模型。商店页面没有列出公司网站。',
        ],
      },
      whereItRuns: {
        id: 'where-it-runs',
        title: '聊天在哪里运行',
        content: [
          '**据 README,默认情况下每一步都在设备上运行,唯一的例外是可选的网页搜索。**',
        ],
        items: [
          '**聊天。** 据 README,在支持 Apple Intelligence 的设备上,答案来自 Apple 的 Foundation Models;其他设备使用设备端的轻量级替代方案,README 没有进一步说明。',
          '**图片。** 附加的截图和照片中的文字由 Apple 的设备端 Vision OCR 提取。商店页面并未声称模型会理解图片本身。',
          '**记忆。** 对话以及每个长会话的滚动摘要保存在应用的本地存储中。',
          '**网页搜索(可选)。** 默认关闭。开启且设备联网时,查询文本会发送给 DuckDuckGo;如果添加了自己的 API 密钥,则发送给 Brave。据 README,不会附带标识符或对话历史,结果在设备上排序。',
        ],
        note: 'App Store 的描述写有 “no cloud transmission” 和 “no external servers”,没有提到网页搜索;README 和 6.0 版更新说明则提到了。若想让一切都留在手机上,请保持搜索关闭。',
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
            '获取渠道': '[App Store](https://apps.apple.com/us/app/compass-local-ai/id6760742955)(免费下载,iOS 或 iPadOS 26.0 及以上)',
          },
          {
            '平台': 'Mac',
            '获取渠道': '同一个 App Store 页面(macOS 26.0 及以上,Apple M1 及以上);页面写明 “Designed for iPad. Not verified for macOS.”',
          },
          {
            '平台': '源代码',
            '获取渠道': '[GitHub 仓库 CamouLabs/Compass](https://github.com/CamouLabs/Compass)(Xcode 项目;未发布版本)',
          },
          {
            '平台': '网站',
            '获取渠道': '未找到官方网站;App Store 页面也未链接任何网站',
          },
          {
            '平台': '隐私政策',
            '获取渠道': '[Compass 隐私政策](https://github.com/CamouLabs/Compass#privacy-policy)(仓库 README 中的一节)',
          },
        ],
        note: '评测版本:6.1,发布于 2026 年 8 月 20 日,更新说明为 “Better UI”。6.0 版(2026 年 8 月 11 日)加入了显示思考、搜索和回答步骤的思考模式、更简短的回答、紧凑的来源显示和更强的网页搜索。该应用免费,未列出应用内购买。',
      },
      features: {
        id: 'key-features',
        title: '开发者列出的功能',
        content: [
          '**以下内容均来自 App Store 描述、更新说明和 README,均未经测试。**',
        ],
        items: [
          '**聊天。** “备忘录”风格的聊天界面与流式回答;可从主屏幕重新打开或删除最近的聊天。',
          '**图片。** 附加截图或照片,由设备端 OCR 读取其中的文字。',
          '**长会话记忆。** 最近几轮原样保留,较早的内容折叠为滚动摘要,相关的旧消息通过设备端相似度检索召回。',
          '**回答流程。** 据 README,设备上运行一个小型流程:判断是否需要最新信息,搜索开启时获取并重新排序来源,并剔除回答无法支持的引用。',
          '**思考模式。** 自 6.0 版起,应用可以在工作时显示思考、搜索和回答的步骤。',
        ],
        note: '实际能用什么,以安装的版本为准。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私政策与数据流向',
        content: [
          '**隐私政策称,Compass 不会收集、存储个人数据或将其传输给开发者,开发者也没有运营可访问对话的后端。** 政策未列出分析、广告或跟踪类 SDK,并称对照片库的访问仅限于你选择附加的图片。',
          '该政策位于公开的 README 中;App Store 的隐私标签为 “Data Not Collected”,Apple 注明尚未核实。政策披露了可选的网页搜索和两个搜索提供方,商店描述则没有。',
        ],
        callouts: [
          {
            type: 'note',
            text: '源代码可以阅读,但未将 App Store 版本与之比对,也未检查网络流量。开启网页搜索的用户应预期查询文本会到达 DuckDuckGo 或 Brave。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        items: [
          '**拥有支持 Apple Intelligence 的 iPhone 的用户**,想要一款在设备上作答、简单且免费的聊天应用。',
          '**想先在代码中核对隐私声明的读者**,因为 Xcode 项目是公开的。',
          '**想要带来源的网页回答又不想注册账号的人:** 搜索通过 DuckDuckGo 开箱即用。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能验证的内容',
        items: [
          '**实际使用表现。** 本评测没有计时回答、测试离线使用,也没有评价回答质量,包括思考模式。',
          '**替代模型。** README 只说它是轻量级的,没有给出名称,也没有说明与 Apple Intelligence 相比如何。',
          '**许可证。** 仓库没有 LICENSE 文件,代码复用条件不明确。',
          '**商店版本与仓库。** 没有发布版本或标签,仓库最后一次推送(2026 年 8 月 11 日)早于 2026 年 8 月 20 日的 6.1 版。',
          '**支持与开发者。** 商店页面没有网站或支持链接,但政策指向 App Store 页面上的支持邮箱。',
          '**Mac 版本。** 页面写明该应用为 iPad 设计,未针对 macOS 验证。',
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
            '价格/许可证': '免费/闭源',
            '主要区别': '通过 MLX 在设备上运行开放模型',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格/许可证': '免费/MIT',
            '主要区别': '开源离线聊天,支持设备端文档问答',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格/许可证': '免费/MIT',
            '主要区别': '开源聊天,可下载你选择的模型',
          },
          {
            '应用': '[Ensu](/zh/power-local-llm/ensu-review)',
            '平台': 'iOS、Android、桌面',
            '价格/许可证': '免费/AGPL-3.0',
            '主要区别': '开源应用,使用下载的模型并支持图片输入',
          },
        ],
        note: '竞品信息变化频繁;请在各应用自己的页面上确认当前的价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Compass 能在 Android 上运行吗?',
            a: '未找到 Android 版本;商店页面只覆盖 iPhone、iPad、Mac 和 Apple Vision 设备。',
          },
          {
            q: '可以用英语以外的语言使用 Compass 吗?',
            a: '商店页面只显示英语一种语言,README 也没有提到其他语言。',
          },
          {
            q: '我可以自己构建 Compass 吗?',
            a: '可以,README 给出了 Xcode 设置步骤:打开项目、选择签名团队并在设备上运行。由于没有许可证文件,代码复用条件未作说明。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Compass - Local AI 是一款小巧的免费 iPhone 聊天应用,自 2026 年 3 月上线以来已多次更新,据 README,默认把回答留在设备上。它的局限在于:仓库没有许可证文件、商店描述没有提到网页搜索、只有一个没有网站的卖家,以及本评测没有实际试用。它适合拥有支持 Apple Intelligence 设备、想要极简设备端聊天的读者;想自己选择并下载模型的读者可以对比 [Locally AI](/zh/power-local-llm/locally-ai-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[App Store 上的 Compass - Local AI](https://apps.apple.com/us/app/compass-local-ai/id6760742955) — 描述、版本历史、隐私标签和系统要求,2026 年 10 月 26 日查看。',
          '[Apple 提供的 Compass - Local AI 查询数据](https://itunes.apple.com/lookup?id=6760742955&country=us) — 版本、发布日期、价格、文件大小和支持的设备,2026 年 10 月 26 日查看。',
          '[GitHub 上的 Compass](https://github.com/CamouLabs/Compass) — 源代码,以及包含功能、设置和隐私政策的 README,2026 年 10 月 26 日查看。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Locally AI 评测](/zh/power-local-llm/locally-ai-review) — 在 iPhone 和 Mac 上运行开放模型的免费闭源应用。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 适用于 iPhone 和 Android 的免费 MIT 许可离线聊天应用。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 适用于 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[Ensu 评测](/zh/power-local-llm/ensu-review) — Ente Labs 推出的免费开源聊天应用。',
          '[LM Mini 评测](/zh/power-local-llm/lm-mini-review) — 还能连接你自己的 LM Studio 或 Ollama 服务器的 iPhone 聊天应用。',
          '[2026 年适用于 iPhone 的最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iPhone 对比文章。',
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
    heroImage: '/images/compass-local-ai-review-hero-ko.webp',
    title: 'Compass - Local AI 리뷰: 기기에서 답하는 iPhone용 무료 AI 채팅',
    seoTitle: 'Compass - Local AI 리뷰: 기기 내 AI 채팅',
    intro: 'Compass - Local AI는 App Store 판매자 Shryas Bhurat(저작권 표기는 Camou Labs)이 제공하는 iPhone·iPad용 무료 채팅 앱입니다. 스토어 페이지와 공개 README에 따르면 Apple Intelligence로 기기에서 답하고, 첨부한 이미지를 기기 내 OCR로 읽으며, 선택적으로 웹 검색도 제공합니다. 이 리뷰는 2026년 10월 26일에 확인한 스토어 페이지와 README를 바탕으로 합니다.',
    metaDescription: 'Compass - Local AI 리뷰: Apple Intelligence로 기기에서 답하고 스크린샷을 OCR로 읽는 무료 iPhone 채팅 앱. 웹 검색은 선택 사항입니다.',
    twitterDescription: 'Compass - Local AI 리뷰: Apple Intelligence로 기기에서 답하는 무료 iPhone 채팅 앱. 로컬로 실행되는 부분, 선택적 웹 검색이 보내는 내용, 확인하지 못한 점을 정리합니다.',
    audience: 'Compass - Local AI가 정말 채팅을 기기에 남기는지, 선택적 웹 검색이 무엇을 외부로 보내는지, 자료가 무엇을 확인하고 무엇을 확인하지 못했는지 알고 싶은 iPhone·iPad 사용자를 위한 글입니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Compass - Local AI 리뷰',
    targetKeywords: [
      'compass local ai 리뷰',
      'compass local ai 앱',
      '기기 내 ai 채팅 iphone',
      'apple intelligence 채팅 앱',
      '프라이빗 ai 어시스턴트 ios',
      '오프라인 ai 채팅 iphone',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [
      'iPhone',
      'iPad',
      'Mac',
    ],
    leadAnswerBlock: '**Compass - Local AI는 스토어 페이지와 README에 따르면 Apple Intelligence로 기기에서 답하고 첨부 이미지를 기기 내 OCR로 읽는 무료 iPhone 채팅 앱입니다.** **웹 검색은 선택 사항이며 기본값은 꺼짐입니다. 켜면 검색어가 DuckDuckGo 또는 Brave로 전송됩니다.**',
    quickAnswerTop: {
      ko: {
        question: 'Compass는 내 채팅을 iPhone에 남겨 두나요?',
        answer: '개발자 설명에 따르면 기본적으로 그렇습니다. 채팅, OCR, 메모리는 기기에서 실행되며, 웹 검색을 켜지 않는 한 어떤 내용도 기기 밖으로 나가지 않습니다. 이 리뷰는 앱을 직접 사용하거나 네트워크 트래픽을 검사하지 않았습니다.',
        bullets: [
          '[App Store](https://apps.apple.com/kr/app/compass-local-ai/id6760742955)에서 무료이며 인앱 구입은 표시되어 있지 않습니다.',
          'Apple Intelligence를 쓸 수 있는 기기에서는 Apple의 Foundation Models를 쓰고, 다른 기기에서는 가벼운 대체 방식을 씁니다.',
          '스토어 페이지에 표시된 언어는 영어뿐입니다.',
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
        label: 'Compass - Local AI란',
        anchor: 'what-is-compass',
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
          {
            type: 'one-sentence',
            text: 'Compass - Local AI는 Apple Intelligence로 기기에서 답하고, 첨부 이미지를 기기 내 OCR로 읽으며, 선택적으로 웹 검색도 할 수 있는 iPhone·iPad용 무료 채팅 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: 'App Store에서 설치한 뒤 질문을 입력합니다. 답변은 기기에 내장된 모델이 만들며, 설정에서 웹 검색을 켜면 출처를 인용하기 위해 검색어도 DuckDuckGo 또는 Brave로 전송합니다.',
          },
        ],
        items: [
          '개발 주체: App Store 판매자는 Shryas Bhurat이고 저작권 표기는 Camou Labs입니다. 첫 버전은 2026년 3월 29일에 나왔습니다.',
          '요구 사항: iOS 또는 iPadOS 26.0 이상이며, Apple Intelligence 기능을 모두 쓰려면 이를 지원하는 기기가 필요합니다.',
          '소스 코드: 코드는 GitHub에 공개되어 있지만 저장소에 라이선스 파일도 공개 릴리스도 없습니다.',
          '웹사이트: 스토어 페이지에 개발자 웹사이트 링크가 없으며, 공개 페이지로는 저장소와 App Store 페이지만 확인되었습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 26일에 확인한 App Store 페이지, Apple의 조회 데이터, 공개 README를 바탕으로 합니다. 직접 사용, 네트워크 검사, 벤치마크는 하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-compass',
        title: 'Compass - Local AI란',
        content: [
          '**Compass - Local AI는 Apple 기기용 미니멀 채팅 어시스턴트이며, App Store 부제는 "On-device AI assistant"입니다.** 스토어 페이지에는 메모 앱 스타일의 채팅, 기기 내 OCR로 읽는 스크린샷과 사진, 스트리밍 답변, 최근 채팅을 다시 열거나 삭제할 수 있는 홈 화면이 소개되어 있습니다.',
          '다운로드 크기는 2.3 MB입니다. README에 따르면 자체 모델을 포함하지 않고 기기에 기본 제공되는 Apple 모델을 사용하기 때문입니다. 스토어 페이지에는 회사 웹사이트가 표시되어 있지 않습니다.',
        ],
      },
      whereItRuns: {
        id: 'where-it-runs',
        title: '채팅이 실행되는 곳',
        content: [
          '**README에 따르면 기본적으로 모든 단계가 기기에서 실행되며, 유일한 예외는 선택적 웹 검색입니다.**',
        ],
        items: [
          '**채팅.** README에 따르면 Apple Intelligence를 지원하는 기기에서는 Apple의 Foundation Models가 답변을 만듭니다. 다른 기기는 가벼운 기기 내 대체 방식을 쓰지만 README에 자세한 설명은 없습니다.',
          '**이미지.** 첨부한 스크린샷과 사진의 텍스트는 Apple의 기기 내 Vision OCR로 추출합니다. 모델이 이미지 자체를 해석한다는 설명은 스토어 페이지에 없습니다.',
          '**메모리.** 대화와 긴 세션별 요약 메모는 앱의 로컬 저장소에 저장됩니다.',
          '**웹 검색(선택).** 기본값은 꺼짐입니다. 켜져 있고 기기가 온라인이면 검색어 텍스트가 DuckDuckGo로, 자신의 API 키를 추가하면 Brave로 전송됩니다. README에 따르면 식별자나 대화 기록은 첨부되지 않으며 결과 순위는 기기에서 매깁니다.',
        ],
        note: 'App Store 설명에는 "no cloud transmission"과 "no external servers"라고 되어 있고 웹 검색은 언급되지 않습니다. README와 6.0 버전 업데이트 노트에는 웹 검색이 나옵니다. 모든 단계를 휴대폰 안에 두려면 검색을 꺼 두세요.',
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
            '받는 곳': '[App Store](https://apps.apple.com/kr/app/compass-local-ai/id6760742955)(무료 다운로드, iOS 또는 iPadOS 26.0 이상)',
          },
          {
            '플랫폼': 'Mac',
            '받는 곳': '같은 App Store 페이지(macOS 26.0 이상, Apple M1 이상). 페이지에는 "Designed for iPad. Not verified for macOS."라고 되어 있습니다',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub 저장소 CamouLabs/Compass](https://github.com/CamouLabs/Compass)(Xcode 프로젝트, 공개 릴리스 없음)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '공식 웹사이트를 찾지 못했으며 App Store 페이지에도 링크가 없습니다',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Compass 개인정보 처리방침](https://github.com/CamouLabs/Compass#privacy-policy)(저장소 README의 한 섹션)',
          },
        ],
        note: '확인한 버전: 6.1(2026년 8월 20일 출시, 업데이트 노트는 "Better UI"). 버전 6.0(2026년 8월 11일)에는 생각·검색·답변 단계를 보여 주는 사고 모드, 더 짧은 답변, 간결한 출처 표시, 강화된 웹 검색이 추가되었습니다. 앱은 무료이며 인앱 구입은 표시되어 있지 않습니다.',
      },
      features: {
        id: 'key-features',
        title: '개발자가 밝힌 기능',
        content: [
          '**아래 내용은 모두 App Store 설명, 업데이트 노트, README에서 가져온 것이며 직접 테스트하지 않았습니다.**',
        ],
        items: [
          '**채팅.** 메모 앱 스타일의 채팅과 스트리밍 답변. 최근 채팅은 홈 화면에서 다시 열거나 삭제할 수 있습니다.',
          '**이미지.** 스크린샷이나 사진을 첨부하면 기기 내 OCR로 텍스트를 읽습니다.',
          '**긴 세션용 메모리.** 최근 대화는 그대로 두고, 오래된 대화는 요약으로 합치며, 관련된 이전 메시지는 기기 내 유사도 검색으로 다시 불러옵니다.',
          '**답변 파이프라인.** README에 따르면 최신 정보가 필요한지 판단하고, 검색이 켜져 있으면 출처를 가져와 순위를 다시 매기며, 답변이 뒷받침하지 못하는 인용을 제외하는 작은 파이프라인이 기기에서 실행됩니다.',
          '**사고 모드.** 6.0 버전부터 앱이 작업하는 동안 생각, 검색, 답변 단계를 보여 줄 수 있습니다.',
        ],
        note: '실제로 무엇이 작동하는지는 설치한 빌드가 최종 기준입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 처리방침과 데이터 흐름',
        content: [
          '**개인정보 처리방침에 따르면 Compass는 개인 데이터를 수집·저장하거나 개발자에게 전송하지 않으며, 개발자는 대화에 접근할 수 있는 백엔드를 운영하지 않습니다.** 분석, 광고, 추적 SDK는 언급되어 있지 않고, 사진 보관함 접근은 사용자가 첨부하기로 선택한 이미지로 한정된다고 되어 있습니다.',
          '처리방침은 공개 README에 있으며 App Store 개인정보 라벨은 "Data Not Collected"이지만 Apple은 검증하지 않았다고 표시합니다. 처리방침에는 선택적 웹 검색과 두 검색 제공자가 명시되어 있으나 스토어 설명에는 없습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '소스 코드는 읽을 수 있지만 App Store 빌드와 대조하지 않았고 네트워크 트래픽도 검사하지 않았습니다. 웹 검색을 켜는 경우 검색어 텍스트가 DuckDuckGo 또는 Brave에 전달된다고 보아야 합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Apple Intelligence를 지원하는 iPhone을 가진 분** 중 기기에서 답하는 간단한 무료 채팅 앱을 원하는 분.',
          '**개인정보 보호 주장을 코드로 확인하고 싶은 분.** Xcode 프로젝트가 공개되어 있습니다.',
          '**계정 없이 출처가 달린 웹 답변을 원하는 분.** 검색은 DuckDuckGo로 바로 작동합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 점',
        items: [
          '**실제 사용 동작.** 응답 시간 측정, 오프라인 사용 테스트, 사고 모드를 포함한 답변 품질 평가는 하지 않았습니다.',
          '**대체 모델.** README는 가볍다고만 하고 이름이나 Apple Intelligence와의 비교는 밝히지 않습니다.',
          '**라이선스.** 저장소에 LICENSE 파일이 없어 코드 재사용 조건이 불분명합니다.',
          '**스토어 빌드와 저장소.** 릴리스나 태그가 없으며, 저장소의 마지막 푸시(2026년 8월 11일)는 6.1 버전(2026년 8월 20일)보다 앞섭니다.',
          '**지원과 운영자.** 스토어 페이지에 웹사이트나 지원 링크가 없지만, 처리방침은 App Store 페이지의 지원 이메일을 안내합니다.',
          '**Mac 버전.** 스토어 페이지에는 iPad용으로 설계되었고 macOS에서는 검증되지 않았다고 되어 있습니다.',
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
            '가격/라이선스': '무료/클로즈드 소스',
            '주요 차이': 'MLX로 오픈 모델을 기기에서 실행',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격/라이선스': '무료/MIT',
            '주요 차이': '오픈소스 오프라인 채팅, 기기 내 문서 질의응답',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격/라이선스': '무료/MIT',
            '주요 차이': '선택한 모델을 내려받는 오픈소스 채팅',
          },
          {
            '앱': '[Ensu](/ko/power-local-llm/ensu-review)',
            '플랫폼': 'iOS, Android, 데스크톱',
            '가격/라이선스': '무료/AGPL-3.0',
            '주요 차이': '모델을 내려받고 이미지 입력을 지원하는 오픈소스 앱',
          },
        ],
        note: '경쟁 앱 정보는 자주 바뀌므로 가격, 라이선스, 플랫폼은 각 앱의 스토어 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Compass는 Android에서 실행되나요?',
            a: 'Android 버전은 찾지 못했습니다. 스토어 페이지는 iPhone, iPad, Mac, Apple Vision 기기만 다룹니다.',
          },
          {
            q: '영어 외의 언어로 Compass를 쓸 수 있나요?',
            a: '스토어 페이지에 표시된 언어는 영어뿐이며 README에도 다른 언어는 언급되지 않습니다.',
          },
          {
            q: 'Compass를 직접 빌드할 수 있나요?',
            a: '네. README에 Xcode 설정 방법이 있습니다. 프로젝트를 열고 서명 팀을 선택한 뒤 기기에서 실행합니다. 라이선스 파일이 없어 코드 재사용 조건은 밝혀져 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Compass - Local AI는 2026년 3월 출시 이후 여러 차례 업데이트된 작은 무료 iPhone 채팅 앱으로, README에 따르면 기본적으로 답변을 기기에 남깁니다. 한계는 라이선스 파일이 없는 저장소, 웹 검색을 언급하지 않는 스토어 설명, 웹사이트 없는 단일 판매자, 그리고 이 리뷰에서 직접 사용해 보지 못했다는 점입니다. Apple Intelligence 지원 기기에서 간결한 기기 내 채팅을 원하는 분께 맞고, 모델을 직접 고르고 내려받고 싶다면 [Locally AI](/ko/power-local-llm/locally-ai-review)나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Compass - Local AI](https://apps.apple.com/us/app/compass-local-ai/id6760742955) — 설명, 버전 기록, 개인정보 라벨, 요구 사항. 2026년 10월 26일 확인.',
          '[Compass - Local AI에 대한 Apple 조회 데이터](https://itunes.apple.com/lookup?id=6760742955&country=us) — 버전, 출시일, 가격, 파일 크기, 지원 기기. 2026년 10월 26일 확인.',
          '[GitHub의 Compass](https://github.com/CamouLabs/Compass) — 소스 코드와 기능, 설정, 개인정보 처리방침이 담긴 README. 2026년 10월 26일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — iPhone과 Mac에서 오픈 모델을 실행하는 무료 클로즈드 소스 앱.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone과 Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 기기 내 채팅 클라이언트.',
          '[Ensu 리뷰](/ko/power-local-llm/ensu-review) — Ente Labs의 무료 오픈소스 채팅 앱.',
          '[LM Mini 리뷰](/ko/power-local-llm/lm-mini-review) — 직접 운영하는 LM Studio·Ollama 서버에도 연결되는 iPhone 채팅 앱.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — 더 폭넓은 iPhone 비교 글.',
        ],
      },
    },
  },
}
